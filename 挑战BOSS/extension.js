game.import("extension",{name:"挑战BOSS",content:function (config,pack){   
	lib.group.push('shen');
			lib.translate.shen='神';
			lib.translate.shenColor="#408080",		
        	lib.skill._choince={
				trigger:{global:['gameDrawAfter','phaseBegin']},
				forced:true,
				unique:true,
				popup:false,
				silent:true,
				filter:function(event,player){
					return (player.group&&player.group=='shen');
				},			
				content:function(){
					"step 0"				
					var controls=[];
					for(var i in lib.character){ 
						if(!controls.contains(lib.character[i][1])&&lib.character[i][1]!='shen'){
							controls.push(lib.character[i][1]);  
						}
					}							
   				    var str='请选择一个势力';
					player.chooseControl(controls,ui.create.dialog(str,'hidden')).ai=function(){
						return Math.floor(Math.random()*controls.length);
					};
					"step 1"
					if(result.control){
						player.group=result.control;
						if(get.mode()=='guozhan'){
							player.identity=result.control;
							player._group=result.control;
							player.node.identity.firstChild.innerHTML=get.translation(result.control);
							player.node.identity.dataset.color=player.identity;		
							if(player.name) lib.character[player.name][1]=result.control;
							if(player.name1) lib.character[player.name1][1]=result.control;
							if(player.name2) lib.character[player.name2][1]=result.control;				
						}
						else{
							if(player.name) lib.character[player.name][1]=result.control;
							if(player.name1) lib.character[player.name1][1]=result.control;
							if(player.name2) lib.character[player.name2][1]=result.control;			
						}
					}
					"step 2"
					switch(player.group){
						case 'wei':player.node.name.dataset.nature='watermm';break;
						case 'shu':player.node.name.dataset.nature='soilmm';break;
						case 'wu':player.node.name.dataset.nature='woodmm';break;
						case 'qun':player.node.name.dataset.nature='metalmm';break;
						default:player.node.name.dataset.nature='fire';break;
					}	
				}			
			}
			lib.element.player.dyingx=function(reason){
				var next=game.createEvent('dying');
				next.player=this;
				next.reason=reason;
				next.source=reason.source;
				var content=lib.element.player.dyingx2;			
				next.setContent(content);	
				return next;
			}						
			lib.element.player.dyingx2=function(reason){
				"step 0"
				event.filter=lib.skill._save.filter;
				lib.skill._save.filter=function(event,player){
					if(event.player.hp>0&&!player.hasSkill('diy_xuelu')) return false;
					if(event.source&&event.source!=player) return false;
					return true;
				},
				_status.dying=player;
				event.trigger('dying');
				game.log(player,'濒死')
				"step 1"
				if(_status.dying==player) delete _status.dying;
				var num=player.hp-player.storage.diy_xuelu;
				if(num<=0) player.die(event.reason);
				"step 2"
				lib.skill._save.filter=event.filter;
			}
},precontent:function (){    
},config:{},help:{"挑战BOSS":"<li>本次更新修复已知BUG，平滑了表情的变身<li>此扩展为本人原创BOSS武将，不为针对任何武将而生；纯属为个人喜好而设；请勿作任何修改谢谢；武将详情进游戏请看武将介绍<li>有任何问题、BUG或者需要作者更新请到贴吧帖子里留言反馈，随缘更新<li>作者不做太变态的武将，所以强度不会太高<li>配置低的设备不建议使用此扩展<li>不建议使用超常的diy武将挑战，这样没意义；建议使用常规武将挑战，只要会玩配合没有不能击败的BOSS；用常规武将不作弊挑战成功，那就证明你本人也是个BOSS，头脑灵活、智商超群<li>此扩展附带武将配音",},                       
         package:{
        character:{		
        character:{
         boss_zuhe:['male','shen',12,['boss_zuhex'],['boss',"des:强度：★★★☆。技能组合"],'wei'],
         boss_sunce:['male','shen',7,['boss_dianji','boss_angyang'],['boss',"des:强度：★。孙策（175年—200年），字伯符，吴郡富春（今浙江富阳）人。孙坚长子，孙权长兄。东汉末年割据江东一带的军阀，汉末群雄之一，三国时期孙吴的奠基者之一。《三国演义》中绰号“小霸王”。为继承父亲孙坚的遗业而屈事袁术，后脱离袁术，统一江东。在一次狩猎中为刺客所伤，不久后身亡，年仅二十六岁。其弟孙权接掌孙策势力，并于称帝后，追谥孙策为长沙桓王。"],'shu'],
        boss_simayi:['male','shen',9,['boss_shenmou','boss_yuanlv','guicai'],['boss',"des:强度：★★★★☆。司马懿（179年—251年9月7日[1]），字仲达，河内郡温县孝敬里（今河南省焦作市温县）人。三国时期魏国杰出的政治家、军事家、战略家，西晋王朝的奠基人。曾任职过曹魏的大都督、大将军、太尉、太傅。是辅佐了魏国三代的托孤辅政之重臣，后期成为掌控魏国朝政的权臣。善谋奇策，多次征伐有功，其中最显著的功绩是两次率大军成功抵御诸葛亮北伐和远征平定辽东。对屯田、水利等农耕经济发展有重要贡献。73岁去世，辞郡公和殊礼，葬于首阳山。谥号宣文；次子司马昭封晋王后，追封司马懿为宣王；司马炎称帝后，追尊司马懿为宣皇帝，庙号高祖[2]。"],'wu'],
        boss_daqiao:['female','shen',15,['boss_lizhi','boss_hongzhuang'],['boss','bossallowed',"des:强度：★★★★☆。大乔（乔字古作“桥”），（180年代－？），庐江郡皖县（今安徽安庆潜山），中国汉末三国时期的女性，系乔公之女、孙策之妾、小乔之姊。"],'wei'],
        boss_zhoutai:['male','shen',6,['boss_yuxue','boss_fenzhan'],['qun','boss','bossallowed',"des:强度：★★★★☆。字幼平，九江下蔡人，三国时期吴国武将。早年与蒋钦随孙策左右，立过数次战功。孙策讨伐六县山贼时，周泰胆气绝伦，保卫孙权，勇战退敌，身受十二处伤。有诗云：三番救主出重围，忠勇如公世所稀。遍体疮痍犹痛饮，血痕残酒满征衣。"],'wu'],
         boss_machao:["male","shen",12,["boss_pimi","boss_xionglie"],['boss','bossallowed',"des:强度：★★★★。马超（176年－223年1月），字孟起，司隶部扶风郡茂陵（今陕西杨凌五泉镇）人，东汉卫尉马腾之子，汉末群雄之一，蜀汉开国名将。早年随父征战，平阳之战大破并州刺史高干和南匈奴呼厨泉的联军。后马腾入京，马超拜将封侯割据雍州，潼关之战被曹操击败，退守凉州。失败后依附张鲁，又转投刘备。带头上表刘协扶刘备称王，又辅佐刘备称帝。于章武二年十二月病逝（223年1月），终年47岁，追谥威侯。有阵中剑术“出手法”流传后世。"],'shu'],
         boss_tiaozhan:["male",'shen',7,["boss_hudui","tiaozhan_bianshen"],['boss',"des:强度：★★★"],'wu'],
         boss_kelian:["female","shu",8,["boss_qingxu","kelian","tiaozhan_bianshen2"],['hiddenboss',"des:强度：★★★☆"]],
         boss_tiaopi:["male","wu",9,["boss_qingxu","tiaopi","tiaozhan_bianshen3"],['hiddenboss',"des:强度：★★★☆☆"]],
         boss_yinxian:["male","qun",10,["boss_qingxu","yinxian","tiaozhan_bianshen4"],['hiddenboss',"des:强度：★★★☆☆☆"]],
         boss_huaji:["male","wei",11,["boss_qingxu","huaji","tiaozhan_bianshen5"],['hiddenboss',"des:强度：★★★★"]],        
        boss_fennu:["female","wu",12,["boss_qingxu","fennu","fennu1","tiaozhan_bianshen6"],['hiddenboss',"des:强度：★★★★★"]],
        boss_yishunjianyiwang:["female","shen",3,["the_mass","boss_shunjian","boss_yiwang","boss_shuitie","boss_wanzun"],['hiddenboss',"des:强度：☆☆☆☆。水的清澈，并非因为它不含杂质，而是在于懂得沉淀；心的通透，不是因为没有杂念，而是在于明白取舍。"]],
         boss_cwj:["female","shen",2,["boss_beifen","boss_bieli"],["boss","bossallowed","des:强度：★★★★☆。蔡琰，字文姬，又字昭姬[1]。生卒年不详。东汉陈留郡圉县（今河南开封杞县）人，东汉大文学家蔡邕的女儿。初嫁于卫仲道，丈夫死去而回到自己家里，后值因匈奴入侵，蔡琰被匈奴左贤王掳走，嫁给匈奴人，并生育了两个儿子。十二年后，曹操统一北方，用重金将蔡琰赎回，并将其嫁给董祀。[2]蔡琰同时擅长文学、音乐、书法。《隋书·经籍志》著录有《蔡文姬集》一卷，但已经失传。现在能看到的蔡文姬作品只有《悲愤诗》二首和《胡笳十八拍》。"],'wei'],
         boss_simayan:["male","shen",3,["boss_tongyi","boss_shemian"],["zhu","boss","bossallowed","des:强度：★★★★★。司马炎（236年－290年5月16日），字安世，河内温县（今河南省温县）人，晋朝开国皇帝（265年－290年在位）。晋宣帝司马懿之孙、晋文帝司马昭嫡长子、晋元帝司马睿从父。"],'zhu'],
         boss_jianwu:["male","shen",100,["victory","boss_xiushen","boss_pojia","boss_jianqi","boss_jianyu"],["zhu","boss","des:强度：★★★☆。無敵是我，我就是無敵！劍術天下無雙！"],'wu'],
        BOSS_diaochan:["female","shen",7,["boss_biyue","boss_guose","boss_meihuo"],["zhu","boss","bossallowed","des:强度：★★★★。中国古代四大美女之一，有闭月羞花之貌。司徒王允之义女，由王允授意施行连环计，离间董卓、吕布，借布手除卓。后貂蝉成为吕布的妾。"],'qun'],
        BOSS_xuhuang:["male","shen",12,["boss_jieliang"],["zhu","boss","bossallowed","des:强度：★★★☆☆。徐晃（？－227年），字公明，河东杨（今山西洪洞东南）人。三国时期曹魏名将。本为杨奉帐下骑都尉，杨奉被曹操击败后转投曹操，在曹操手下多立功勋，参与官渡、赤壁、关中征伐、汉中征伐等几次重大战役。樊城之战中徐晃作为曹仁的援军击败关羽，因于此役中治军严整而被曹操称赞“有周亚夫之风”。曹丕称帝后，徐晃被加为右将军，于公元227年病逝，谥曰壮侯。"],'wei'],
        BOSS_yuji:["male","shen",5,["boss_yaohuo"],["zhu","boss","bossallowed","des:强度：★★★★。于吉（？-200年，一作干吉、干室）东汉末年黄老道代表人物之一，史书有两种说法：（1）认为其即《太平经》作者。《后汉书·襄楷传》：“顺帝时，琅邪宫崇诣阙，上其师干吉于曲阳泉水上所得神书百七十卷，皆缥白素朱介青首朱目，号《太平青领书》。”（2）认为其乃三国时道士，《三国志·孙策传》注引《江表传》：“时有道士琅邪于吉，先寓居东方，往来吴会，立精舍，烧香读道书，制作符水以治病，吴会人多事之。”后为孙策所杀。"],'wu'],
        BOSS_zuoci:["male","shen",20,["boss_piaomiao","boss_qimen","boss_dunjia"],["zhu","boss","bossallowed","des:强度：★★★★★。左慈（156？--289？），字元放，汉族，安徽庐江郡人，东汉末年方士。少明五经，兼通星纬，学道术，明六甲，传说能役使鬼神，坐致行厨。见汉祚将尽，天下向乱，叹曰：“值此衰运，官高者危，财多者死。当世荣华，不足贪矣。”在安徽天柱山中得石室而精思。左慈授予葛玄道家真经数部。"],'qun'],
        BOSS_zhangfei:["male","shen",7,["boss_shemao","boss_nuxiao"],["zhu","boss","bossallowed","des:强度：★★★★。张飞（？－221年），字益德[1]，幽州涿郡（今河北省保定市涿州市）人氏，三国时期蜀汉名将。刘备长坂坡败退，张飞仅率二十骑断后，据水断桥，曹军没人敢逼近；与诸葛亮、赵云扫荡西川时，于江州义释严颜；汉中之战时又于宕渠击败张郃，对蜀汉贡献极大，官至车骑将军、领司隶校尉，封西乡侯，后被范强、张达刺杀。后主时代追谥为“桓侯”。在中国传统文化中，张飞以其勇猛、鲁莽、嫉恶如仇而著称，虽然此形象主要来源于小说和戏剧等民间艺术，但已深入人心。"],'shu'],
         BOSS_zhanshen:["male","shen",8,["boss_chitu","shenwu","zhanshen"],["zhu","boss","bossallowed","des:强度：★★★☆。吕布（？－199年2月7日[1]），字奉先，五原郡九原县人（今内蒙古包头九原区），东汉末年名将，汉末群雄之一。先后为丁原、董卓的部将，后与司徒王允合力诛杀董卓，旋即被董卓旧部李傕等击败，依附袁绍。与曹操争夺兖州失败后，吕布袭取徐州，割据一方。建安三年十二月（199年2月）吕布于下邳被曹操击败并处死。"],'qun'],
            BOSS_shenhua:["male","shen",0,["baonu","wushuang","feijiangx","shenshi","shensha","shenmie"],["zhu","boss","bossallowed","des:强度：★★★★☆。吕布（？－199年2月7日[1]），字奉先，五原郡九原县人（今内蒙古包头九原区），东汉末年名将，汉末群雄之一。先后为丁原、董卓的部将，后与司徒王允合力诛杀董卓，旋即被董卓旧部李傕等击败，依附袁绍。与曹操争夺兖州失败后，吕布袭取徐州，割据一方。建安三年十二月（199年2月）吕布于下邳被曹操击败并处死。"],'qun'],
        },
        translate:{
            boss_zuhe:'技能组合',
            boss_sunce:'神孙策',
            boss_simayi:'神司马懿',           
            boss_daqiao:"神大乔",
            boss_zhoutai:'神周泰',
            boss_yishunjianyiwang:"一瞬间丶遗忘",
            boss_tiaozhan:"你来打我呀",
            boss_huaji:"小稽",
            boss_fennu:"小怒",
            boss_kelian:"小怜",
            boss_tiaopi:"小皮",
            boss_yinxian:"小险",
            boss_machao:"神马超",
            boss_cwj:"神蔡文姬",
            boss_simayan:"神司马炎",
            boss_jianwu:"无双剑舞",
            BOSS_diaochan:"神貂蝉",           
            BOSS_xuhuang:"神徐晃",
            BOSS_yuji:"神于吉",
            BOSS_zuoci:"神左慈",
            BOSS_zhangfei:"神张飞",
            BOSS_zhanshen:"无双战神",
            BOSS_shenhua:"不败神话",
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
      boss_angyang:{
      group:'boss_angyang1',
      audio:4,  
                trigger:{source:'damageBegin'},
			unique:true,
      forced:true,
      priority:-25,
     filter:function(event,player){
     if(event.player==player)
     return false;
     return event.card&&(event.card.name=='sha'||event.card.name=='juedou')&&
				event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
			},     
			content:function(){
         'step 0'
     trigger.num+=trigger.player.maxHp-trigger.player.hp;
         'step 1'			
         if(trigger.player.num('e')<1&&!trigger.player.isMad()){
   trigger.player.goMad({player:'phaseAfter'});               					}
         else{         
player.gain(true,trigger.player.get('e'));
         }					
				}
			},
      boss_angyang1:{
      audio:2,    
                trigger:{player:['shaBegin','juedouBegin']},
			unique:true,
      forced:true,   
			     filter:function (event,player){
      if(event.target==player)
      return false;
      return event.target.num('e')<=player.num('e');
      },
			content:function(){
    trigger.directHit=true;
      },
     ai:{
                   noe:true,
                   threaten:8.2,
                    player:1,
                    effect:{
                    player:function (card,player,target){
     if(get.type(card)=='equip') return [1,3];
     if(get.type(card)=='trick') return [1,3];
     if(get.type(card)=='delay') return [1,3];                  
                     if(card.name=='sha') return [1,Infinity];
                       if(card.name=='guanshi') return [1,3];
                     if(player.countCards('h','sha')>1&&card.name=='zhuge') return [1,4];
           },
         },
       },
     },      
       boss_dianji:{
      group:['boss_dianji1','boss_dianji2','boss_immune'],       
       audio:2,
			trigger:{
                    player:"loseEnd",
                },
                forced:true,
                unique:true,
                filter:function (event,player){
                if(player.num('h')>=7)
                return false;
                for(var i=0;i<event.cards.length;i++){
                    if(event.cards[i].original=='h') return true;
                }
                return false;
            },
                content:function (){
                player.draw(7-player.num('h'));
            },
     mod:{
              globalFrom:function(from,to,num){
					return num-Infinity;
				 },
              cardUsable:function (card,player,num){
                    if(card.name=='sha') return num+player.num('e');
       }}},
      boss_dianji1:{    
       audio:1,
			trigger:{player:['phaseDrawBegin','lebuBegin','turnOverBegin']},
       forced:true,
       unique:true,     
			content:function(){
      trigger.finish();
     trigger.untrigger();
     }},

     boss_dianji2:{    
       audio:1,
			trigger:{player:'gameDrawBegin'},
       forced:true,
       unique:true,     
			content:function(){
      trigger.num=(7-player.num('h'));
      }},
      boss_zuhex:{
      group:'boss_immune',
       audio:1,
			trigger:{player:['phaseBegin']},     
     forced:true,	     
			content:function(){
     player.sex=['male','female'].randomGet();  
player.addSkill(['wushuang','wusheng','paoxiao','beige','qixi','boss_juejing','jijiu','duanliang','liuli','luanji','jizhi','zhiheng','xiaoji','xuanfeng','yiji','reganglie','guose','wansha','qianxi','tiandao','refankui','jiang']);
   },
   ai:{
                   noe:true,
                   threaten:8.2,
                    player:1,
                    effect:{
                        player:function (card,player){                  
                     if(card.name=='sha') return Infinity;
                       if(card.name=='guanshi') return [1,3];
                     if(player.countCards('h','sha')>1&&card.name=='zhuge') return [1,4];
           },
         },
       },
     },      
     boss_lizhi:{
     group:['boss_immune','boss_lizhi1'],
       audio:1,
			trigger:{player:['drawBegin','recoverBegin']},     
     forced:true,
     unique:true,    
			content:function(){
     trigger.num=trigger.num*3;     
     },
     mod:{
                    maxHandcard:function (player,num){
            if(player.hp<player.maxHp) return num+player.maxHp-player.hp;
        }},
      ai:{
      playernowuxie:true,
                   noe:true,
                   threaten:8.2,
                    player:1,
                    effect:{
                 player:function (card,player,target){
        if(player.countCards('h',{name:'sha',color:'red'})) return 3; 
             if(card.name=='tiesuo') return [0,-7];
      if(get.color(card)=='red'&&card.name!='tao') return [1,3];
     if(card.name=='guanshi') return [1,3];                    
if(player.countCards('h','sha')>1&&card.name=='zhuge') return [1,4];      
           },
             target:function (card,player,target){
              if(card.name=='tiesuo') return [-1,-7];
           },
         },
       },
     },
      boss_lizhi1:{        
      audio:2,
			trigger:{player:'turnOverBefore',target:['shaBefore','juedouBefore','lebuBefore','bingliangBefore','tiesuoBefore']},     
     forced:true,    
     unique:true,     
			content:function(){
     trigger.finish();
     trigger.untrigger();
     },
     ai:{
     threaten:8,
     effect:{               
     target:function(card,player,target,current){
      if(card.name=='bingliang') return -1;      
      if(card.name=='sha') return -1;
      if(card.name=='juedou') return -1;
      if(card.name=='lebu') return -1;      
             }
            }
          },
       },
       boss_hongzhuang:{
                audio:1,
                trigger:{
                    player:['loseEnd','useCard','respond'],
                },
                direct:true,
                filter:function (event,player){  
                if(event.name=='useCard'||event.name=='respond'){
                    return get.color(event.card)=='red';
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
player.chooseTarget(get.prompt('boss_hongzhuang1'),function(card,player,target){
                    if(player==target) return false;
                    return target.num('he')>=0;
                }).set('ai',function(target){
                    return -ai.get.attitude(_status.event.player,target);
                });
                "step 1"
                if(result.bool){
            game.delay();                   
player.logSkill('boss_hongzhuang1',result.targets);              event.targets=result.targets
         if(result.targets.length>=1){    
   player.gainPlayerCard(event.targets[0],'he',2,true);     
event.targets[0].damage(Math.max(1,Math.round(event.targets[0].maxHp*0.3)));                    
       }                 
                else{
                    event.finish();         
                }           
        }       
            },
                ai:{         
                    threaten:6,
                    effect:{
                        target:function (card,player,target,current){
                        if(get.type(card)=='equip') return [1,3];
                    },
                    },
                    noe:true,
                },
            },
      boss_hongzhuang1:{
                audio:1,
                },        
      boss_yuanlv:{
      group:['boss_immune','boss_yuanlv1','boss_yuanlv2'],
      audio:2,
			trigger:{player:['phaseBegin','phaseEnd']},     
     forced:true,	     
			content:function(){
   var list=game.filterPlayer(function(target){
					return target!=player;
				});
				if(list.length){
					var target=list.randomGet();
					player.line(target,'green');
          if(target.num('he')<2){        
         player.draw(4);
         target.goMad({player:'phaseAfter'});        target.damage(Math.round(target.maxHp*0.5));
     }	player.gainPlayerCard(true,target,target.num('he'));}}},
    boss_yuanlv1:{
     audio:1,
			trigger:{player:['loseHpBegin','loseMaxHp','turnOverBegin']},
      forced:true,
      unique:true,   
			content:function(){
     trigger.untrigger();
      trigger.finish();
      }},
    boss_yuanlv2:{        
                audio:1,
                trigger:{player:'damageBegin'},
			unique:true,
      forced:true,
     filter:function(event){  
     return get.type(event.card)!='trick'||get.type(event.card)=='delay';				
			},   
			content:function(){     
     trigger.untrigger();
      trigger.finish();
     },
     ai:{
				effect:{
					target:function(card,damage){
						if(get.type(card)!='trick'||get.type(card)!='delay'){
							return [0,0];
						}
					}
				}
			}},
    boss_shenmou:{
    group:['boss_shenmou1','boss_shenmou2'],      
      audio:1,
			trigger:{player:['phaseDrawBegin']},     
     forced:true,	     
			content:function(){
       'step 0'
     player.judge(function(card){
     if(get.number(card)<2)
return -1;
     if(get.number(card)==2)
return 0;
     if(get.number(card)==3)
return 0.5;
     if(get.number(card)==4)
return 1;
     if(get.number(card)==5)
return 2;
     if(get.number(card)==6)
return 3;
     if(get.number(card)==7)
return 4;
     if(get.number(card)==8)
return 5;
     if(get.number(card)==9)
return 7;
     if(get.number(card)==10)
return 9;
     if(get.number(card)==11)
return 11;
     if(get.number(card)==12)
return 12;
     if(get.number(card)==13)
return 13;
return 0; });
       'step 1'
     trigger.num=get.number(result.card);
   },
    ai:{
                   noe:true,
                   threaten:8.2,
                    player:1,
                    effect:{
                        player:function (card,player){                  
                     if(card.name=='sha') return Infinity;
                       if(card.name=='guanshi') return [1,3];
                     if(player.countCards('h','sha')>1&&card.name=='zhuge') return [1,4];
           },
         },
       },
     },     
     boss_shenmou1:{        
      audio:1,
			trigger:{player:['phaseBefore']},     
     forced:true,
     priority:100,
     unique:true,    
			content:function(){
player.addSkill([['duanliang','jizhi'],['zhiheng','lianhuan'],['luanji','wansha']].randomGet(),{player:'phaseAfter'});
    }},
     boss_shenmou2:{        
      audio:2,
			trigger:{player:['phaseEnd']},     

     forced:true,

     unique:true,    
			content:function(){
player.removeSkill(['duanliang','lianhuan','zhiheng','jizhi','luanji','wansha']);
    }},
     boss_MaxHp:{        
                audio:['fankui',2],
                trigger:{player:'phaseBegin'},
			unique:true,
      forced:true,   
			content:function(){
				"step 0"
				event.players=get.players(player);
				"step 1"
				if(event.players.length){
					var current=event.players.shift();
					if(current.isEnemyOf(player)){
         player.line(current,'fire');
         player.recover(2)._triggered=null;          
         current.die();
         current.update();              
					}
					event.redo();
				}
			},
			},
    
     boss_mp:{
    group:'boss_mp1',    
                audio:['liuli',2],
                trigger:{player:'phaseEnd'},
			unique:true,
      forced:true,   
			content:function(){
				"step 0"
				event.players=get.players(player);
				"step 1"
				if(event.players.length){
					var current=event.players.shift();
					if(current.isEnemyOf(player)){
         player.line(current,'thunder');


         player.gain(true,current.get('he'));         current.loseMaxHp(Math.floor(current.maxHp/2));         
         current.damage(current.maxHp);              
					}
					event.redo();
				}
			},
			},
    boss_mp1:{
     audio:['guose',2],
      trigger:{player:'phaseBegin'},

			unique:true,
      forced:true,   
			content:function(){
player.draw(4+Math.floor(Math.random()*17));     

     player.maxHp=Infinity;
     player.hp=Infinity;

     player.update();
    }},         
    boss_yuxue:{
     trigger:{player:['changeHp']},
			forced:true,
			mark:true,
			audio:4,
     unique:true,     
			init:function(player){   
				player.storage.boss_yuxue=0;
				game.addVideo('storage',player,['boss_yuxue',player.storage.boss_yuxue]);
			},
			content:function(){
				player.storage.boss_yuxue=player.maxHp-player.hp;
				game.addVideo('storage',player,['boss_yuxue',player.storage.boss_yuxue]);
      player.update();
			},
     marktext:"血",
			intro:{
				content:'mark'
		},
    mod:{
    maxHandcard:function (player,num){
   return num=player.storage.boss_yuxue;
         },
        },
    ai:{
           noe:true,
           player:1,
           effect:{
           player:function (card,player,target){        
if(get.type(card)=='trick') return Infinity;
           },
           player:function (card,player){
           if(get.type(card)=='basic') return Infinity;  
if(player.countCards('h','sha')>1&&card.name=='zhuge') return [1,4];
           if(card.name=='du') return 2;                  
           if(card.name=='sha') return Infinity;
           if(card.name=='tao') return 0;
    }}}},
    boss_fenzhan:{
    group:['boss_fenzhan1','boss_fenzhan2','boss_immune'], 
                audio:2,
                trigger:{player:'phaseEnd'},
			unique:true,
      forced:true,   
			content:function(){
				"step 0"
				event.players=get.players(player);
				"step 1"
				if(event.players.length){
					var current=event.players.shift();
					if(current.isEnemyOf(player)){
         player.line(current,'white');
         current.goMad({player:'phaseBefore'});
         current.damage(player.maxHp-player.hp);     
					}
					event.redo();
				}
			},			
    },
    boss_fenzhan1:{
			trigger:{player:'dieBefore'},
      forced:true,
     audio:['buqu',2],
      unique:true,     
			content:function(){     
       "step 0"
                event.cards=get.cards(1);
				player.showCards(event.cards,'奋战');
       "step 1"
         for(var i=0;i<cards.length;i++){					if(get.number(cards[i])==player.num('h')) return;
         }
         player.gain(cards,'gain2');  
         game.log(player,'获得了',cards);
         player.draw(Math.min(7,player.maxHp-player.hp));       
                trigger.untrigger();
                trigger.finish();    
}},
    boss_fenzhan2:{
			trigger:{player:'turnOverBegin'},
      forced:true,
      unique:true,    
			content:function(){
     trigger.untrigger();
      trigger.finish();
      }},
    yinxian:{
group:['wansha','yinxian1','yinxian2'],
			trigger:{global:['useCard','respond']},
      forced:true,
      unique:true,
     filter:function(event,player){
     if(event.player==player)
     return false;
				return Math.random()<=0.4;
			},
			content:function(){
      'step 0'
      game.delay();
      'step 1'
      trigger.player.line(player,'white');
				var list=[];
				for(var i=0;i<game.players.length;i++){
					if(player.canUse('nanman',game.players[i])){
						list.push(game.players[i]);
					}
				}
				list.sort(lib.sort.seat);

       if(Math.random()<=0.5){
				player.useCard({name:'wanjian'},list)._triggered=null;
       }
       else{
       player.useCard({name:'nanman'},list)._triggered=null;}
			}
		},
    yinxian1:{
			ai:{
        unique:true,
				unequip:true,
				skillTagFilter:function(player,tag,arg){
					if(arg&&arg.name=='wanjian'||arg&&arg.name=='nanman') return true;
					return false;
				}
			}
		},   
     yinxian2:{
			trigger:{global:['useCard','respond']},
      forced:true,
     unique:true,
     filter:function(event,player){
     if(event.player==player)
     return false;
				return Math.random()<=0.8;
			},
			content:function(){
     player.line(trigger.player,'fire');
     game.delay();
     var kp=trigger.player.get('he')
      if(kp.length){            
      player.gain(kp.randomGet());
      trigger.player.$give(1,player);     
     }}},
     fennu1:{
     trigger:{source:'damageEnd',player:'damageEnd'},
			forced:true,
			mark:true,		
      audio:2,
      unique:true,
			filter:function(event){
				return event.num>0;
			},
			init:function(player){   
				player.storage.fennu1=1;
				game.addVideo('storage',player,['fennu1',player.storage.fennu1]);

			},
			content:function(){
				player.storage.fennu1+=trigger.num;
				game.addVideo('storage',player,['fennu1',player.storage.fennu1]);
			},
     marktext:"怒",
			intro:{
				content:'mark'
			}
		},
     fennu:{
     group:['fennu2','fennu3','fennu4'],          
      trigger:{player:'phaseBegin'},			
      forced:true,
      unique:true,
			content:function(){
player.maxHp=Math.floor(player.maxHp*1.15);      
player.hp+=Math.max(1,Math.floor(player.maxHp*0.15));
      player.update();
      }},			
     fennu2:{
			trigger:{source:'damageBegin'},		
      forced:true,
     unique:true,
			content:function(){
     trigger.num+=player.storage.fennu1;
     }},
     fennu3:{
						audio:1,
						trigger:{player:['damageBegin','loseHpBegin']},
						forced:true,
						unique:true,
						priority:100,
           filter:function(event,player){    			 
           return _status.currentPhase!=player;
	       		},
						content:function(){          
							"step 0"
							player.phase();
							"step 1"
							while(_status.event.name!='phase'){
								_status.event=_status.event.parent;
							}
							_status.event.finish();
							_status.event.untrigger(true);				
						}			
					},	
					_cards_lose:{
						trigger:{player:'loseEnd'},
						direct:true,	
						silent:true,
						filter:function(event,player){

							return event.cards&&event.cards.length;
						},						
						content:function(){
							for(var i=0;i<trigger.cards.length;i++){
								trigger.cards[i].originaler=player;
							}						
						}	
					},	
					_cards_gain:{
						trigger:{player:'gainEnd'},
						direct:true,	
						silent:true,
						filter:function(event,player){
							return event.cards&&event.cards.length;
						},						
						content:function(){
							for(var i=0;i<trigger.cards.length;i++){
								trigger.cards[i].owner=player;
							}	
						}	      
					},
        fennu4:{
			trigger:{player:['damageBegin','loseHpBegin']},		
      forced:true,
      unique:true,      
      filter:function(event){
      return event.num>2;
      },
     priority:-100,
			content:function(){
     trigger.num=2;
     }},     
     huaji:{
    group:['huaji1','huaji2','huaji3'],
			audio:2,
		trigger:{player:['shaBegin','juedouBegin','shunshouBegin','guoheBegin','huogongBegin','wanjianBegin','nanmangBegin','tiesuoBegin','lebuBegin','bingliangBegin','jiedaoBegin','shengdongBegin','caomuBegin','qijiaBegin']},
			forced:true,	
     priority:Infinity,
     unique:true,
      filter:function(event,player){
      if(event.target==player)
      return false;    
      return Math.random()<=0.4;
      },		
			content:function(){
   trigger.target.damage(Math.max(1,Math.floor(trigger.target.maxHp*0.3)),['thunder','fire'].randomGet());
       }
		},
   huaji1:{
			audio:2,
		trigger:{target:['shaBegin','juedouBegin','wanjianBegin','nanmanBegin','lebuBegin','bingliangBegin','shunshouBegin','guoheBegin','huogongBegin','jiedaoBegin','tiesuoBegin','shengdongBegin','caomuBegin','qijiaBegin']},			forced:true,	
      priority:100,
      unique:true,
      filter:function(event){   
      return Math.random()<=0.4;
      },		
			content:function(){
trigger.player.loseHp(Math.max(1,trigger.player.maxHp-trigger.player.hp));
       }
		},
    huaji2:{
			audio:2,
		trigger:{global:['wuzhongBegin','jiuBegin','recoverBegin','wuxieBegin','jinchanBegin','zengbinBegin','wuguBegin']},
			forced:true,	
      priority:100,
      unique:true,
      filter:function(event,player){  
      if(event.player==player)  
      return false;
      return Math.random()<=0.75;
      },		
			content:function(){
      player.line(trigger.player,'green');
     trigger.finish();
      trigger.untrigger();
      player.recover()._triggered=null;
      player.draw(3);
       }
		}, 
  huaji3:{
			audio:2,
		trigger:{global:['damageBegin']},
			forced:true,	
      priority:99,
      unique:true,      
      filter:function(event,player){  
      if(event.player==player)  
      return false;
      return true;      
      },		
			content:function(){
     trigger.source=trigger.player;
     }},    
    diyjianxiong:{
			mode:['identity'],
			trigger:{global:'dieBefore'},
			forced:true,
			filter:function(event,player){
				return event.player!=game.zhu&&_status.currentPhase==player;
			},
			content:function(){
				trigger.player.identity='fan';
				trigger.player.setIdentity('fan');
				trigger.player.identityShown=true;
			}
		},
    the_mass:{
    audio:4,
    trigger:{player:'phaseBegin'},
			forced:true,	     
     unique:true,          
      filter:function(event,player){            
      return !player.hasSkill('the_masslose')||Math.random()<=0.02;  
     },     	
			content:function(){
     player.addSkill('the_masslose');
      }},
    the_masslose:{},
    boss_shunjian:{     
trigger:{player:['phaseEnd']},			
      forced:true,
     priority:500,
     unique:true,
     animationStr:"瞬间",
			skillAnimation:true,
     animationColor:['fire','thunder','metal','white'].randomGet(),
			content:function(){     
if(Math.random()<=0.3){     
  player.hp=player.maxHp;
  player.update();
        }
 else{
  player.draw(3)._triggered=null;
       }  
      }
     },
    boss_yiwang:{  
   group:['boss_yiwang1','boss_yiwang2','boss_yiwang3'], 
   trigger:{player:['dieBefore']},			
      forced:true, 
      priority:Infinity,
      unique:true,
     animationStr:"遗忘",
			skillAnimation:true,
     animationColor:['fire','thunder','metal','white'].randomGet(),
    audio:4,
     filter:function (event){
      return Math.random()<=0.989;
     },     
			content:function(){
        "step 0"
      trigger.finish();
      trigger.untrigger();
      game.delay(0.35);
        "step 1"           
        player.hp=2;
        player.update();
	     	},
    ai:{
                   noe:true,
                   threaten:8.2,
                    player:1,
                    effect:{
                        player:function (card,player){                  
                     if(card.name=='sha') return Infinity;
                       if(card.name=='guanshi') return [1,3];
                     if(player.countCards('h','sha')>1&&card.name=='zhuge') return [1,4];
                    },
                    },
                },
     },                 
   boss_yiwang1:{   
   trigger:{player:'damageBefore'},			
      forced:true, 
      priority:100,
     unique:true,
     animationStr:"遗忘",
			skillAnimation:true,
     animationColor:['fire','thunder','metal','white'].randomGet(),
     filter:function (event,player){  
      return (event.source==undefined)||event.source.num('he')>=player.num('he');    
     },     
			content:function(){
      trigger.finish();
      trigger.untrigger(); 
      player.draw(3)._triggered=null;
      if((trigger.source!=undefined)){
trigger.source.chooseToDiscard(true,'he',Math.max(1,Math.ceil(trigger.source.num('he')/2)))._triggered=null;
     }      
     }
   },  
   boss_yiwang2:{   
   trigger:{player:['loseMaxHpBefore','loseHpBefore']},			
      forced:true, 
      priority:Infinity,
      unique:true,
      animationStr:"遗忘",
			skillAnimation:true,
     animationColor:['fire','thunder','metal','white'].randomGet(),    
			content:function(){
      trigger.finish();
      trigger.untrigger(); 
      player.draw(3)._triggered=null;      
     }
   },
  boss_yiwang3:{
trigger:{global:["gameStart","gameDrawBefore"]},
forced:true,
priority:Infinity,
unique:true,
filter:function (event,player){
return player.name=='boss_yishunjianyiwang';
},
content:function (){
console.log(player);
player.init = function (all) {
player.popup('<span class="bluetext" style="color:	#B3EE3A">免疫'+'</span>');
};
player.delete = function (all) {
player.popup('<span class="bluetext" style="color:	#B3EE3A">免疫'+'</span>');
};
player.addTempSkill = function (all) {
player.popup('<span class="bluetext" style="color:	#B3EE3A">免疫'+'</span>');
};
player.goMad = function (all) {
player.popup('<span class="bluetext" style="color:	#B3EE3A">免疫'+'</span>');
};
player.clearSkills = function (all) {
player.popup('<span class="bluetext" style="color:	#B3EE3A">免疫'+'</span>');
};
}},
   boss_wanzun:{   
   trigger:{global:['phaseUseBegin']},
     forced:true,
     priority:9999,
     unique:true,
     animationStr:"挽尊",
			skillAnimation:true,
     animationColor:['fire','thunder','metal','white'].randomGet(),  
     filter:function (event,player){     
     return event.player!=player;
     },      
			content:function(){
      "step 0"
      player.line(trigger.player,['thunder','poison','fire'].randomGet());
      if(Math.random()<=0.25){
      trigger.player.loseHp(Math.round(trigger.player.maxHp*0.35)+player.maxHp);
      }    
    else{
player.draw(3)._triggered=null;
trigger.player.chooseToDiscard(true,'he',Math.max(2,Math.ceil(trigger.player.num('he')/2)))._triggered=null;   
trigger.player.damage(Math.max(1,Math.round(trigger.player.maxHp*0.35)+Math.ceil((player.maxHp-player.hp)/2)),['fire','thunder','poison'].randomGet())._triggered=null;    
      }  
     }
   },
   boss_shuitie:{   
   trigger:{global:['recoverBegin']},			
      forced:true, 
      priority:-100,
      unique:true,
      animationStr:"水帖",
			skillAnimation:true,
     animationColor:['fire','thunder','metal','white'].randomGet(),
     filter:function (event,player){
     if(event.source==player)
     return false;
     return event.player!=player;
     },      
			content:function(){
     trigger.player.line(player,'green');         player.gainMaxHp(trigger.num)._triggered=null;
     player.draw(3*trigger.num)._triggered=null;
     player.update();
     },   
     },
    tiaopi:{
   group:['tiaopi1','tiaopi2'],
   trigger:{source:'damageBegin'},			
      forced:true, 
      priority:-12,
      unique:true,  
      filter:function (event,player){
      if(event.nature=='fire'||event.nature=='thunder')
      return false;
      return event.player!=player;
      },   
			content:function(){
trigger.num=trigger.num+Math.round(trigger.player.maxHp*0.5);     
      },
     },
     tiaopi1:{
   trigger:{player:'shaBegin'},			
      forced:true,
      unique:true,     
      filter:function (event){
      return event.card.nature=='fire'||event.card.nature=='thunder';
      },
			content:function(){
    trigger.directHit=true;
    },
    mod:{
    cardUsable:function(card,player){					if(_status.currentPhase==player&&card.name=='sha'&&card.nature=='thunder'||card.nature=='fire') return Infinity;
				}
			},
     },
    tiaopix:{
    trigger:{
                    source:"damageAfter",
                },
                forced:true,
                mark:true,
                popup:false,
                unique:true,
                content:function (){                      
                player.removeSkill('tiaopix');
            },
                marktext:"调",
                intro:{
                    content:"该角色的进攻距离和防御距离-3，手牌上限为1，直到造成伤害",
                },  
    mod:{		
				globalFrom:function(from,to,current){


					return current+3;
				},
       globalTo:function(from,to,current){
					return current-3;
				},
        maxHandcard:function (player){
            return 1;
       },
       },
       },
    tiaopi2:{  
                audio:1,
                trigger:{player:'phaseEnd'},
			unique:true,
      forced:true,   
			content:function(){
				"step 0"
				event.players=get.players(player);
				"step 1"
				if(event.players.length){
					var current=event.players.shift();
					if(current.isEnemyOf(player)){
         player.line(current,'white');	
        if(current.hasSkill('tiaopix')){
         current.loseHp();
         }
if(!current.isTurnedOver()&&Math.random()<=0.38){
         current.turnOver();         
         }										             
         current.addSkill('tiaopix');      
					}
					event.redo();
				}
			},
			},
    kelian:{
   group:['kelian1','kelian2'],  
                audio:1,
                trigger:{player:'phaseEnd'},
			unique:true,
      forced:true,      
			content:function(){
				"step 0"
				event.players=get.players(player);
				"step 1"
				if(event.players.length){
					var current=event.players.shift();
					if(current.isEnemyOf(player)){
         player.line(current,'white');
					current.chooseToDiscard(true,2,'he');
current.loseHp(Math.max(1,current.maxHp-current.hp));
					}
					event.redo();
				}
			},
			ai:{
				threaten:8.1
			}
		},
    kelian1:{    
			audio:2,
		trigger:{player:'damageBegin'},
			forced:true,	
      priority:-100,
     unique:true,
     filter:function(event){    
      return event.num>0;
      },  
			content:function(){
      trigger.finish();
      trigger.untrigger();     
      player.loseHp();
       }
		},
    kelian2:{    
			audio:2,
		trigger:{source:'damageBegin'},
			forced:true,	
     priority:-Infinity,
     unique:true,
     filter:function(event){    
      return event.num>0;
      },  
			content:function(){
      trigger.finish();
      trigger.untrigger();     
      trigger.player.loseHp(trigger.num+Math.floor(trigger.player.maxHp*0.5));
       }
		},
     boss_qingxu:{
    group:['boss_qingxu1','boss_qingxu2','boss_qingxu3'],
			audio:2,
		trigger:{target:['shaBegin','juedouBegin','huogongBegin','lebuBegin','bingliangBegin','guoheBegin','caomuBegin','shengdongBegin','qijiaBegin'],player:['loseHpBefore','damageBefore'],},
			forced:true,	
      unique:true,
      filter:function(event){    
      return Math.random()<=0.45;
      },		
			content:function(){     
      trigger.finish();
      trigger.untrigger();
      player.sex=['male','female'].randomGet();
      player.draw(3);
      player.update();
		 },
    ai:{
                   noe:true,
                   threaten:8.1,
                    player:1,
                    effect:{
                        player:function (card,player){                  
                     if(card.name=='sha') return Infinity;
                       if(card.name=='guanshi') return [1,3];
                     if(player.countCards('h','sha')>1&&card.name=='zhuge') return [1,4];
           },
         },
       },
     },
    boss_qingxu1:{    
			audio:2,
		trigger:{player:'loseBegin'},
			forced:true,	
     unique:true,
     filter:function(event,player){                 
      return _status.currentPhase!=player&&Math.random()<=0.5;
    for(var i=0;i<event.cards.length;i++){
    if(event.cards[i].original=='h') return true;
     }
      return false;
      },  
			content:function(){
      trigger.finish();
      trigger.untrigger();
      player.sex=['male','female'].randomGet();
      player.update();

       }
		},

   boss_qingxu2:{    
			audio:2,
		trigger:{player:'turnOverBegin'},
			forced:true,	
     unique:true,
     filter:function(event,player){
     if(player.isTurnedOver())
     return false;    
      return Math.random()<=0.45;
      },  
			content:function(){
      trigger.finish();
      trigger.untrigger();
      player.draw(3);
       }
		},
   boss_qingxu3:{
trigger:{global:["gameStart","gameDrawBefore"]},
forced:true,
priority:Infinity,
unique:true,
filter:function (event,player){
return player.name=='boss_kelian'||player.name=='boss_huaji'||player.name=='boss_tiaopi'||player.name=='boss_yinxian'||player.name=='boss_fennu'||player.name=='boss_tiaozhan';
},
content:function (){
console.log(player);
player.skip = function (all) {
player.popup('<span class="bluetext" style="color:	#B3EE3A">免疫'+'</span>');
};
player.goMad = function (all) {
player.popup('<span class="bluetext" style="color:	#B3EE3A">免疫'+'</span>');
};
}},
   boss_hudui:{ 
   group:['boss_hudui1','boss_hudui2','boss_hudui3','boss_qingxu3'],  
			audio:2,
		trigger:{player:['damageBefore','damageBegin','damageEnd','damageAfter']},
			forced:true,	 
     filter:function (event,player){  
  if(event.source!=player&&(event.source!=undefined)&&event.source.hp<=0)
      return false;
      return event.source!=player&&(event.source!=undefined);  
     },  

			content:function(){
      "step 0"
 player.addTempSkill('boss_pojia','shaEnd');
      "step 1"
      game.delay(1.35);         
player.useCard({name:'sha'},trigger.source,false);      		},
    ai:{
                   noe:true,                 
                    player:1,
                    effect:{
                   player:function (card,player){
       if(card.name=='du') return [1,Infinity];
     }}}},
   boss_hudui1:{    
			audio:2,
		trigger:{player:'loseHpBegin'},
			forced:true,
     unique:true,   
   	content:function(){
    trigger.finish();
    trigger.untrigger();
      player.draw();
       }
		},  
   boss_hudui2:{    
			audio:2,
		trigger:{source:'damageBegin'},
			forced:true,
     unique:true, 
   filter:function (event,player){   
   return _status.currentPhase!=player;
    },                          
   	content:function(){    
      "step 0"
     player.draw(player.maxHp-player.hp);
      "step 1"
    if(Math.random()<=0.35){
    player.recover(2);
     }   
       }
		},
    boss_hudui3:{    
			audio:2,
		trigger:{player:'damageBegin'},
			forced:true,
     unique:true,
   filter:function (event,player){   
   return event.source==player;
    },                          
   	content:function(){
     trigger.finish();
    trigger.untrigger(); 
       }
		},     
    tiaozhan_bianshen:{		
			unique:true,			
			trigger:{player:'dieBefore'},
			forced:true,
			priority:Infinity,
			audio:1,     
      animationStr:"恭喜过关！",
			skillAnimation:true,	
			content:function(){
       "step 0"      
      game.delay(3);
       "step 1"
				player.init('boss_kelian');			
				ui.clear();
				while(_status.event.name!='phaseLoop'){
					_status.event=_status.event.parent;
				}
				for(var i=0;i<game.players.length;i++){
					for(var j in game.players[i].tempSkills){
						game.players[i].skills.remove(j);
						delete game.players[i].tempSkills[j];
					}
				}
				_status.paused=false;
				_status.event.player=player;
				_status.event.step=0;
				if(game.bossinfo){
					game.bossinfo.loopType=1;
				}
			},
			ai:{
			threaten:8.1,   

      }	
		},
    tiaozhan_bianshen2:{		
			unique:true,			
			trigger:{player:'dieBefore'},
			forced:true,
			priority:Infinity,
			audio:1,
animationStr:"恭喜过关！",
			skillAnimation:true,	
			content:function(){
      "step 0"
      game.delay(3.2);
      "step 1"
				player.init('boss_tiaopi');				
				ui.clear();
				while(_status.event.name!='phaseLoop'){
					_status.event=_status.event.parent;
				}
				for(var i=0;i<game.players.length;i++){
					for(var j in game.players[i].tempSkills){
						game.players[i].skills.remove(j);
						delete game.players[i].tempSkills[j];
					}
				}
				_status.paused=false;
				_status.event.player=player;
				_status.event.step=0;
				if(game.bossinfo){
					game.bossinfo.loopType=1;
				}
			},
			ai:{
			threaten:8.1,   
      }	
		},
    tiaozhan_bianshen3:{		
			unique:true,
			trigger:{player:'dieBefore'},
			forced:true,
			priority:Infinity,
			audio:1, 
    animationStr:"恭喜过关！",
			skillAnimation:true,    	
			content:function(){
      "step 0"
      game.delay(3.4);
      "step 1"
				player.init('boss_yinxian');				
				ui.clear();
				while(_status.event.name!='phaseLoop'){
					_status.event=_status.event.parent;
				}
				for(var i=0;i<game.players.length;i++){
					for(var j in game.players[i].tempSkills){
						game.players[i].skills.remove(j);
						delete game.players[i].tempSkills[j];
					}
				}
				_status.paused=false;
				_status.event.player=player;
				_status.event.step=0;
				if(game.bossinfo){
					game.bossinfo.loopType=1;
				}
			},
			ai:{
			threaten:8.1,
      }	

		},
   tiaozhan_bianshen4:{		
			unique:true,			
			trigger:{player:'dieBefore'},
			forced:true,
			priority:Infinity,
			audio:1,  
     animationStr:"恭喜过关！",
			skillAnimation:true,   	
			content:function(){
      "step 0"
      game.delay(3.6);
      "step 1"
				player.init('boss_huaji');				
				ui.clear();
				while(_status.event.name!='phaseLoop'){
					_status.event=_status.event.parent;
				}
				for(var i=0;i<game.players.length;i++){

					for(var j in game.players[i].tempSkills){
						game.players[i].skills.remove(j);
						delete game.players[i].tempSkills[j];
					}
				}
				_status.paused=false;
				_status.event.player=player;
				_status.event.step=0;
				if(game.bossinfo){
					game.bossinfo.loopType=1;
				}
			},
			ai:{
			threaten:8.1,   
      }	
		},
    tiaozhan_bianshen5:{		
			unique:true,			
			trigger:{player:'dieBefore'},
			forced:true,
			priority:Infinity,
			audio:1,  
     animationStr:"恭喜过关！",
			skillAnimation:true,   	
			content:function(){
      "step 0"
      game.delay(3.8);
      "step 1"
				player.init('boss_fennu');				
				ui.clear();
				while(_status.event.name!='phaseLoop'){
					_status.event=_status.event.parent;
				}
				for(var i=0;i<game.players.length;i++){
					for(var j in game.players[i].tempSkills){
						game.players[i].skills.remove(j);
						delete game.players[i].tempSkills[j];
					}
				}
				_status.paused=false;

				_status.event.player=player;
				_status.event.step=0;
				if(game.bossinfo){
					game.bossinfo.loopType=2;
				}
			},
			ai:{
			threaten:8.1,   
      }	
		},
    tiaozhan_bianshen6:{		
			unique:true,			
			trigger:{player:'dieBefore'},
			forced:true,
			priority:Infinity,
			audio:1,     
     animationStr:"恭喜过关！",
			skillAnimation:true,	
			content:function(){
      "step 0"
      game.delay(4);
      "step 1"
				player.init('boss_yishunjianyiwang');				
				ui.clear();
				while(_status.event.name!='phaseLoop'){
					_status.event=_status.event.parent;
				}
				for(var i=0;i<game.players.length;i++){
					for(var j in game.players[i].tempSkills){
						game.players[i].skills.remove(j);
						delete game.players[i].tempSkills[j];
					}
				}
				_status.paused=false;
				_status.event.player=player;
				_status.event.step=0;
				if(game.bossinfo){
					game.bossinfo.loopType=1;
				}
			},
			ai:{
			threaten:8.1,   
      }	
		},    			   
		boss_pimi:{
			audio:2,
		trigger:{source:'damageBegin'},
			forced:true,	
     unique:true,
     priority:-99,
      filter:function(event,player){
      if(player.num('e')<event.player.num('e'))
      return false;
      return event.card.name=='sha'||event.card.name=='juedou';
      },		
			content:function(){
     trigger.num=trigger.num+Math.floor(Math.random()*999);
		},
    mod:{
    				globalFrom:function(from,to){
    					if(from.hp>to.hp||from.num('h')>to.num('h')||from.num('e')>to.num('e')) return -Infinity;
    				}
    		},     
    ai:{
                    noe:true,
                    threaten:8.3,                   
                    effect:{
            player:function (card,player){
         if(card.name=='du') return [1,Infinity];       
        if(card.name=='sha') return Infinity;
        if(card.name=='shandian') return Infinity; 
        if(get.type(card)=='equip') return [1,3];        
if(player.countCards('h','sha')>1&&card.name=='zhuge') return [1,Infinity];
         if(player.countCards('h',{name:'sha',nature:'fire'})) return 1.2;
        if(player.countCards('h',{name:'sha',nature:'thunder'})) return 1;
               },
          target:function (card,player,target){     
           if(card.name=='jiedao') return [1,3];       
           if(card.name=='wuxie') return -Infinity;          
           if(card.name=='bingliang') return -100;
           if(card.name=='lebu') return -100;
           if(card.name=='shunshou') return -100;
           if(card.name=='guohe') return -100;
           if(card.name=='huogong') return -100;
           if(card.name=='caomu') return -100;
           if(card.name=='shengdong') return -100;
        if(card.name=='qijia') return -100;                        
                },                  
                    },
                },
            },  
     boss_xionglie:{
     group:['boss_xionglie2','boss_xionglie3','boss_xionglie4','boss_xionglie5','boss_xionglie6','boss_immune'],
trigger:{player:['turnOverBegin','loseHpBegin','loseMaxHpBegin'], target:['bingliangBefore','shunshouBefore','guoheBefore','lebuBefore','huogongBefore','caomuBefore','qijiaBefore','shengdongBefore'],},
			forced:true,	
     priority:100,
     unique:true,
			content:function(){
     trigger.finish();
      trigger.untrigger();
      player.gainMaxHp();
       }
      },
      boss_xionglie2:{
			trigger:{player:'phaseDrawBegin'},
			forced:true,
     	priority:10,      
      unique:true,		
			content:function(){
     trigger.num=player.maxHp-player.num('h');
       }
      },
     boss_xionglie3:{
			trigger:{player:'recoverBegin'},
			forced:true,
     unique:true,
			content:function(){
      trigger.num=trigger.num+Math.floor((player.maxHp-player.hp)/2);
       }
      },
      boss_xionglie4:{
			trigger:{player:'damageBegin'},
			forced:true,
     priority:-75,
     unique:true,
     filter:function(event,player){
     return _status.currentPhase==player;
     },
			content:function(){
     trigger.finish();
      trigger.untrigger();
      player.gainMaxHp();
       }
      },
       boss_xionglie5:{
			trigger:{global:'recoverEnd'},
			forced:true,
     priority:15,
     unique:true,
     filter:function(event,player){
     if(player.hp==player.maxHp)
     return false;
     return _status.currentPhase!=player&&event.player!=player;		
     },
			content:function(){
     trigger.player.line(player,'green');
     player.recover();
       }
      },
      boss_xionglie6:{
			ai:{
				unequip:true,
        unique:true,
				skillTagFilter:function(player,tag,arg){
					if(arg&&arg.name=='sha') return true;
					return false;
				}
			}
		},            		
            boss_bieli:{
            group:'boss_immune',
                audio:2,
                trigger:{
                    player:"dieBefore",
                },
                forced:true,
                unique:true,
                filter:function (event,player){return player.maxHp>0&&player.hp<=0},
                content:function (){
                "step 0"
                event.cards=get.cards(1);
				player.showCards(event.cards,'别离');
                "step 1"
         for(var i=0;i<cards.length;i++){					if(get.suit(cards[i])=='club'&&get.number(cards[i])==7) return;
         }
         player.gain(cards,'gain2');  
         game.log(player,'获得了',cards);       
                trigger.untrigger();
                trigger.finish();
                if(player.hp<=0){
                    player.hp=0;
                    player.update();
                }                

            },                
                },
           boss_beifen:{
                audio:2,
                trigger:{
                    global:"phaseUseBegin",
                },
                filter:function (event,player){
                return event.player!=player;
            },           	           
                 forced:true,
                priority:Infinity,             
                content:function (){               
                player.line(trigger.player,'white');
                trigger.player.addTempSkill('fengyin',{player:'phaseAfter'});
                "step 0"
                trigger.player.judge();                
                "step 1"
                switch(get.suit(result.card)){

                    case 'heart':trigger.player.damage(get.number(result.card));break;
                    case 'diamond':player.gainPlayerCard(true,trigger.player,trigger.player.num('he'),'he');break;
                    case 'club':trigger.player.chooseToDiscard(true,trigger.player.num('he'),'he');break;
                    case 'spade':player.draw(3);if(!trigger.player.isTurnedOver()){trigger.player.turnOver();}break;
player.update();
                  }
              },
            mod:{
                    maxHandcard:function (player,num){
                    return num+2*player.num('e');
                },
                },
         ai:{
                   noe:true,
                   threaten:8.2,
                    player:1,
                    effect:{
                        player:function (card,player){                  
                     if(card.name=='sha') return Infinity;
                       if(card.name=='guanshi') return [1,3];

                     if(player.countCards('h','sha')>1&&card.name=='zhuge') return [1,4];
                    },
                    },
                },
     },               
        damageboss:{
        group:'damageboss1',
                        trigger:{
                            source:["damageBegin"],
                        },
                        forced:true,
                        popup:false,
                        priority:Infinity,
                        unique:true,
                  filter:function(event,player){
             if(player.hp==player.maxHp)
             return false;
             if(!player.hasSkill('boss_tongyi'))
             return false;
			      	return !event.card;
             },
              content:function (){             
player.recover(Math.max(1,trigger.num))._triggered=null;                    
            }},
      damageboss1:{
                        trigger:{
                            source:["damageAfter"],
                        },
                        forced:true,
                        popup:false,
                        priority:Infinity,
                        unique:true,
                  filter:function(event,player){           
             if(!player.hasSkill('boss_tongyi'))
             return false;

			      	return !event.card;
             },
              content:function (){
             "step 0"
if(trigger.player.maxHp==Infinity){
trigger.player.maxHp=8;
trigger.player.hp=8;
trigger.player.update();
}}},
      boss_shemian:{
      group:'boss_immune',
                audio:1,
                trigger:{
                    player:["damageBegin",
"loseHpBefore"],
                },
                forced:true,
                priority:-Infinity,
                filter:function (event){
                    return event.num>1;
                },
                content:function (){
                trigger.finish();
                trigger.untrigger();              
                player.draw();
         },
            },
      boss_tongyi:{
                audio:1,
                trigger:{player:['phaseBegin','phaseEnd','damageEnd','loseHpEnd','turnOverEnd']},
			unique:true,
      forced:true,     
     priority:300,
			content:function(){
     player.addSkill('damageboss');
				"step 0"
				event.players=get.players(player);
				"step 1"
				if(event.players.length){
					var current=event.players.shift();
					if(current.isEnemyOf(player)){
         player.line(current,'white');											player.gainPlayerCard(true,current,Math.max(1,Math.floor(current.num('he')/2)),'he');
current.damage(Math.max(1,Math.floor(current.maxHp/3)));        
					}
					event.redo();
				}
			},
			ai:{
				threaten:6
			}
		}, 
      boss_jianqi:{
     group:'boss_immune',    
			trigger:{source:'damageBegin'},
     forced:true, 
     audio:3,
     priority:-999,  
     skillAnimation:true,
     animationStr:"你们的技术太烂了！",
     animationColor:'metal',
     filter:function(event){
     return event.card&&(event.card.name=='sha')&&
				event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
			},
			content:function(){		
     trigger.num=trigger.num*(1+Math.floor(Math.random()*2));
     },
     ai:{
                   noe:true,
                    player:1,
                    effect:{
                        player:function (card,player){                  
                     if(card.name=='sha') return Infinity;
                       if(card.name=='guanshi') return [1,3];

                     if(player.countCards('h','sha')>1&&card.name=='zhuge') return [1,4];
                    },
                    },
                },
     },    
     boss_xiushen:{
     group:['boss_xiushen1','boss_xiushen2','boss_xiushen3','boss_xiushen4'],     
			trigger:{player:'phaseBegin'},
     forced:true, 
     audio:3,     
			content:function(){		
     player.skip('phaseDraw');    	player.draw(4+Math.floor(Math.random()*4))._triggered=null;
    },
    mod:{
       maxHandcard:function (player){
         return 15;
        },       
		},
  ai:{
     threaten:8,
     effect:{               
     target:function(card,player,target,current){
      if(card.name=='bingliang') return -0.5;
      if(card.name=='lebu') return 0.25;      
             }
            }
          },
       },
      boss_xiushen1:{
			trigger:{player:'turnOverBegin'},
			forced:true,
     unique:true,
     filter:function (event,player){     
     if(player.isTurnedOver())
      return false;  
       return Math.random()<=0.75;
      },   
			content:function(){
     trigger.finish();
     trigger.untrigger();
     player.draw(2)._triggered=null;
      }
      },
     boss_xiushen2:{
			trigger:{target:'lebuBegin'},
			forced:true,
      unique:true,
     filter:function (event,player){  
       return Math.random()<=0.75;
      },   
			content:function(){
     trigger.finish();
     trigger.untrigger();
      player.draw(2)._triggered=null;
      }
      },
      boss_xiushen3:{
      trigger:{player:['damageBegin','loseHpBegin']},
			forced:true,
     unique:true,
     priority:-99999,
     filter:function(event,player){
      return event.num>player.maxHp*0.05;
      },     
			content:function(){
     trigger.num=player.maxHp*0.05;
     }},
      boss_xiushen4:{
			trigger:{player:'loseMaxHpBegin'},
			forced:true,
      unique:true,
    	content:function(){
     trigger.finish();
     trigger.untrigger();      
      }
      },
       boss_jianyu:{                
                unique:true,
                mod:{
                    selectTarget:function (card,player,range){
            if(range[1]==-1) return;
            if(card.name=='sha') range[1]=Infinity;
        },
         attackFrom:function (from,to){
            return -Infinity; 
                },
               },              
            },
     boss_pojia:{
			ai:{
				unequip:true,
        unique:true,
				skillTagFilter:function(player,tag,arg){
					if(arg&&arg.name=='sha') return true;
					return false;

				}
			}
		},
    boss_liaoshang:{  		
			trigger:{player:'recoverBegin',},
			forced:true,
     priority:-1,
     unique:true,      
			content:function(){				trigger.num=Math.max(2,Math.floor((player.maxHp-player.hp)*0.12));
			},
		},
     victory:{   
      audio:5,  		
			trigger:{global:'gameDrawAfter',},
			forced:true,
     priority:-1,
     unique:true,      
			content:function(){   
				player.draw(2+Math.floor(Math.random()*3));
     player.addSkill('victory2');
			},
		},
     victory2:{   		
			trigger:{player:'changeHp',},
			forced:true,
     priority:Infinity,
     unique:true, 
     filter:function(event,player){
     return player.hp<5;
     },   
			content:function(){
        'step 0'
      player.logSkill('victory');         player.hp=(player.maxHp*0.25+Math.floor(Math.random()*player.maxHp*0.26));
      player.addSkill('boss_liaoshang');  
		 	player.draw(Math.ceil(player.hp)-player.num('h'));
        'step 1'     
      player.removeSkill('victory'); 
      player.removeSkill('victory2');
			},
		},
         boss_biyue:{
     group:'boss_immune',
			audio:['biyue',2],
      unique:true,
			trigger:{player:'phaseEnd'},
		forced:true,
			content:function(){
      "step 0"
      player.gainMaxHp()._triggered=null;
      "step 1"
      player.draw(Math.max(1,player.maxHp-player.hp))._triggered=null;     
      "step 2"
      game.delay();    
				player.recover(Math.ceil((player.maxHp-player.hp)/2))._triggered=null;  
			},
		},
          boss_meihuo:{
						audio:2,
						enable:'phaseUse',
						usable:1,
						direct:true,					
						unique:true,
         selectTarget:[1,2],
         filterTarget:function(card,player,target){
							return player!=target&&target.num('h')>=0;
						},
						content:function(){
													'step 0'     
							player.logSkill('boss_meihuo',target);    
            						
								player.gain(target.get('he'),target);
								target.$give(target.get('he'),player);							
							player.line(target,'thunder');			
                       'step 1'			
								if(target.name&&!target.classList.contains('unseen')){
									var skills=lib.character[target.name][3];
								}
								if(target.name1&&!target.classList.contains('unseen')){
									var skills2=lib.character[target.name1][3];
								}	
								if(target.name2&&!target.classList.contains('unseen2')){
									var skills3=lib.character[target.name2][3];
								}	
								if(skills){
									for(var j=0;j<skills.length;j++){
										target.removeSkill(skills[j]);
										var info=lib.skill[skills[j]];
										if(!lib.translate[skills[j]+'_info']) continue;	
										if(info&&info.unique) continue;			
										player.addTempSkill(skills[j],{player:'phaseBefore'});	
									
								}
								if(skills2){
									for(var j=0;j<skills2.length;j++){
										target.removeSkill(skills2[j]);
										var info=lib.skill[skills2[j]];
										if(!lib.translate[skills2[j]+'_info']) continue;	
										if(info&&info.unique) continue;			
										player.addTempSkill(skills2[j],{player:'phaseBefore'});		
									}
								}
								if(skills3){
									for(var j=0;j<skills3.length;j++){
										target.removeSkill(skills3[j]);
										var info=lib.skill[skills3[j]];
										if(!lib.translate[skills3[j]+'_info']) continue;	
										if(info&&info.unique) continue;			
										player.addTempSkill(skills3[j],{player:'phaseBefore'});		
									}
								}														
								target.storage.boss_meihuo=true;
							}
						},
						group:['boss_meihuo2'],
						ai:{
							order:20,
             threaten:8.2,
							result:{
								player:function(player,target){
									if(target.num('h')>=0) return Infinity;

									return ai.get.attitude(player,target);
								}
							},
							expose:0.3
						},			
					},
					boss_meihuo2:{
						trigger:{global:'phaseAfter'},
						forced:true,
						popup:false,
           unique:true,	
						filter:function(event,player){
							var targets=[];
							var players=game.players.concat(game.dead);
							for(var j=0;j<players.length;j++){
								if(!players[j].storage.boss_meihuo) continue;
								targets.push(players[j]);
							} 
							if(targets.length) return true;
							return false;
						},						
						content:function(){
							var players=game.players.concat(game.dead);
							for(var i=0;i<players.length;i++){
								if(players[i]==player) continue;	
								if(players[i].classList.contains('unseen')) continue;
								if(players[i].classList.contains('unseen2')) continue;
								if(!players[i].storage.boss_meihuo) continue;
								if(players[i].name&&!players[i].classList.contains('unseen')){
									var skills=lib.character[players[i].name][3];
								}
								if(players[i].name1&&!players[i].classList.contains('unseen')){
									var skills2=lib.character[players[i].name1][3];
								}	
								if(players[i].name2&&!players[i].classList.contains('unseen2')){
									var skills3=lib.character[players[i].name2][3];
								}	
								if(skills){
									for(var j=0;j<skills.length;j++){
										players[i].addSkill(skills[j]);		
									}
								}
								if(skills2){
									for(var j=0;j<skills2.length;j++){
										players[i].addSkill(skills2[j]);		
									}
								}
								if(skills3){
									for(var j=0;j<skills3.length;j++){
										players[i].addSkill(skills3[j]);		
									}
								}								
							}
							for(var j=0;j<players.length;j++){
								if(!players[j].storage.boss_meihuo) continue;
								players[j].storage.boss_meihuo=false;
							}
						}			
					},
     boss_guose:{						
			audio:2,
			enable:'phaseUse',	
			discard:false,
     unique:true,
			filter:function(event,player){
				return player.countCards('he',{color:'red'})>0;
			},
			prepare:'throw',
			position:'he',
     usable:3,
			filterCard:{color:'red'},
			filterTarget:function(card,player,target){
				if(player==target) return false;
				if(target.hasJudge('lebu')) return false;
				return lib.filter.targetEnabled({name:'lebu'},player,target);
			},
			check:function(card){
				return 10-ai.get.value(card);
			},
			content:function(){
				if(target.hasJudge('lebu')){
					target.discard(target.getJudge('lebu'));
				}
				else{
					var next=player.useCard({name:'lebu'},target,cards);
					next.animate=false;
					next.audio=false;
				}
				player.draw(1+Math.floor(Math.random()*2))._triggered=null;
			},
			ai:{
				result:{
					target:function(player,target){        
						if(target.hasJudge('lebu')) return -ai.get.effect(target,{name:'lebu'},player,target);
						return ai.get.effect(target,{name:'lebu'},player,target);
					}
				},
				order:6.9,
			}
		},
    boss_immune:{
    group:'boss_immune1',
trigger:{global:["gameStart","gameDrawBefore"]},
forced:true,
priority:Infinity,
unique:true,
filter:function(event,player){
return player.name=='boss_simayan'||player.name=='boss_simayi'||player.name=='boss_machao'||player.name=='boss_cwj'||player.name=='BOSS_zuoci'||player.name=='BOSS_zhangfei'||player.name=='BOSS_zhanshen'||player.name=='boss_zhoutai'||player.name=='BOSS_xuhuang'||player.name=='boss_jianwu'||player.name=='boss_daqiao'||player.name=='BOSS_yuji'||player.name=='BOSS_diaochan'||player.name=='BOSS_shenhua';
},
content:function (){
console.log(player);
player.init = function (all) {
player.popup('<span class="bluetext" style="color:	#B3EE3A">免疫'+'</span>');
};
player.delete = function (all) {
player.popup('<span class="bluetext" style="color:	#B3EE3A">免疫'+'</span>');
};
player.addTempSkill = function (all) {
player.popup('<span class="bluetext" style="color:	#B3EE3A">免疫'+'</span>');
};
player.goMad = function (all) {
player.popup('<span class="bluetext" style="color:	#B3EE3A">免疫'+'</span>');
};
player.clearSkills = function (all) {
player.popup('<span class="bluetext" style="color:	#B3EE3A">免疫'+'</span>');
};
}},
    boss_immune1:{
    unique:true,
    forced:true,
		trigger:{player:'dieBefore'},
    filter:function(event,player){
    return player.hp>0;
    },    
    content:function(){
    trigger.finish();
     trigger.untrigger();
    }},     
     shenshi:{
     group:'boss_immune',
     audio:1,
     unique:true,
			trigger:{global:['recoverBegin']},		
			filter:function(event,player){
      if(event.player==player)
      return false;
      if(player.storage.baonu<1)
      return false;
      if(event.player.hp<1)
      return false;     
      return _status.currentPhase!=player;
			},
     check:function (event,player){            
                return        ai.get.attitude(player,event.player)<1;
            },
			content:function(){
     player.line(trigger.player,'white');
     trigger.finish();
     trigger.untrigger();       
     player.draw(1+Math.floor(Math.random()*3));
     player.storage.baonu-=1;
     },    
		},
     feijiangx:{group:['feijiangx1','feijiangx2']},
     feijiangx1:{
			audio:1,
			trigger:{global:'gameDrawAfter'},
			forced:true,
			unique:true,   
     	priority:Infinity,  
			content:function(){
				for(var i=0;i<game.players.length;i++){
					if(game.players[i]==player) continue;
					player.maxHp+=game.players[i].maxHp;		
				}
				player.hp=player.maxHp;
				player.update();
      }
			},
    feijiangx2:{
     audio:1,
     trigger:{global:'phaseAfter'},
						forced:true,
						unique:true,	
       	priority:Infinity,       
         filter:function(event,player){
      if(event.player==player)
      return false;
			return true;
			},	

						content:function(){
							"step 0"
							player.phase()._triggered=null;
							"step 1"
							while(_status.event.name!='phase'){
								_status.event=_status.event.parent;
							}            
							_status.event.finish();
							_status.event.untrigger(true);						
					},
     mod:{		
				globalFrom:function(from,to,current){
					return current-Infinity;
				},
        maxHandcard:function (player){
            return Infinity;
       },
       },
       },
     shensha:{
     audio:1,
     unique:true,
			trigger:{global:['turnOverBegin']},		
			filter:function(event,player){
      if(event.player==player)
      return false;
				return _status.currentPhase==event.player;
			},
     check:function (event,player){              
                return ai.get.attitude(player,event.player)<1;
            },
			content:function(){
        "step 0" 
player.line(trigger.player,'fire');
player.gainPlayerCard(trigger.player,true,trigger.player.num('he'),'he');
        "step 1"
       game.delay();  
				trigger.player.die()._triggered=null;
		},
     ai:{
                    threaten:8.2,
                    order:15,
                    result:{
                        player:Infinity,
                    },
                    effect:{
                        player:function (card,player){
                if(card.name=='sha') return [1,Infinity];
                if(card.name=='juedou') return [1,Infinity];               
            },
                    },
                },
            },
      shenmie:{
			audio:3,
			enable:'phaseUse',
			filter:function(event,player){
     if(player.hasSkill('shenmie2'))
     return false;
				return !player.storage.shenmie&&player.storage.baonu>=5;
			},		
     animationStr:"杂鱼们都去死吧！！",
			skillAnimation:true,
			animationColor:'metal',
			mark:false,
     unique:true,
			content:function(){
     player.addTempSkill('shenmie2','phaseAfter');  
				"step 0"							
				player.storage.baonu-=5;
				event.targets=game.filterPlayer();
				event.targets.remove(player);
				event.targets.sort(lib.sort.seat);
				event.targets2=event.targets.slice(0);
				player.line(event.targets,'fire');
				"step 1"
          if(event.targets.length){
         var            tl=event.targets.shift();                                     
        tl.damage(1+Math.floor(Math.random()*2));	
					event.redo(); 
        }     
				"step 2"
		 if(event.targets2.length){
			var cur=event.targets2.shift();
     if(!cur.isTurnedOver()){		
	            	cur.turnOver();
         }          
     if(cur&&cur.countCards('he')){
player.gainPlayerCard(cur,'he',true,cur.num('he'));         
        			}
       event.redo();
      }
			},
			intro:{
				content:'limited'
			},
			ai:{
				order:10,
				result:{
					player:function(player){
						return game.countPlayer(function(current){
							if(current!=player){
								return get.sgn(ai.get.damageEffect(current,player,player));
							}
						});
					}
				}
			}
		},
    shenmie2:{},
      boss_jieliang:{
      group:'boss_immune',
			     audio:2,
            priority:-10,
            unique:true,
            trigger:{global:'drawAfter'},
            filter:function(event,player){		
       		if(event.player.isFriendOf(player)){
					return false;
				}
                return event.num>0&&event.player!=player;
            },
			prompt:function(event,player){
				return '是否对'+get.translation(event.player)+'发动【劫粮】？'
			},
          check:function (event,player){              
                return ai.get.attitude(player,event.player)<1;
            },
            content:function(){                     
           "step 0"
         player.line(trigger.player,'white');
         trigger.player.addTempSkill('fengyin',{player:'phaseAfter'});             
         if(trigger.player.maxHp>1){
trigger.player.loseMaxHp(Math.max(1,Math.floor(trigger.player.maxHp/3)))._triggered=null; 
}
           "step 1" 
 player.gainPlayerCard(true,trigger.player,trigger.player.num('he')-1);               
       },        
      ai:{      
                    noe:true,
                   threaten:8.1,
                    effect:{
                        player:function (card,player,target){
if(card.name=='sha') return [1,Infinity];     
if(card.name=='guanshi') return [1,3];     
if(player.countCards('h','sha')>1&&card.name=='zhuge') return [1,4];       
                    },
                    },
                },
            },
      boss_yaohuo:{
      group:'boss_immune',
      audio:2,
			trigger:{player:'loseEnd'},
			forced:true,
      unique:true,
     filter:function (event){               
                for(var i=0;i<event.cards.length;i++){
                    if(event.cards[i].original=='h') return true;
                }
                return false;
            },
			content:function(){
				var list=game.filterPlayer(function(target){
					return target!=player&&!target.isMad();
				});
				if(list.length){
					var target=list.randomGet();
					player.line(target,'white');
					target.goMad({player:'phaseAfter'});
				}
       else{
       player.draw(1+Math.floor(Math.random()*2))._triggered=null;
      }
			},
    ai:{
                    threaten:9,
                    order:15,
                    result:{
                        player:1,
                    },
                    effect:{
                        player:function (card,player){
                if(get.type(card)!='basic') return [1,3];
            },
                    },
                },
    },
      boss_piaomiao:{
                audio:"huanhua2",
                trigger:{player:'phaseBegin'},
			unique:true,
      forced:true,
     priority:99999,
			content:function(){
				"step 0"
				event.players=get.players(player);
				"step 1"
				if(event.players.length){
					var current=event.players.shift();
					if(current.isEnemyOf(player)){
         player.line(current,'thunder');
				current.chooseToDiscard(true,[Math.max(1,Math.ceil(current.num('he')/2))].randomGet());
current.damage('thunder',Math.max(1,Math.round(current.maxHp/4)));
					}
					event.redo();
				}
			},
			ai:{
				threaten:10
			}
		},
    boss_dunjia:{  
      group:["boss_dunjia2","boss_dunjia3","boss_immune"],    
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                priority:-120,
                unique:true,
                filter:function (event){
                    return event.num>1;
                },               
                content:function (){                
                trigger.num=1;                
         },
            },   
     boss_dunjia2:{
                trigger:{
                    player:["loseHpBegin","loseMaxHpBegin"]},
                forced:true,
                unique:true,             
                content:function (){         
                trigger.finish();
                trigger.untrigger();
                player.gainMaxHp()._triggered=null;
                player.recover()._triggered=null;  
         },
            },
       boss_dunjia3:{
                trigger:{
                    player:"loseEnd"},
                forced:true,
                priority:250,
                unique:true,
                filter:function (event,player){
             return _status.currentPhase!=player;

                },
                content:function (){                   
          player.draw(2*trigger.num)._triggered=null;          
         },
            },
            boss_qimen:{
                audio:2,
                trigger:{
player:"damageBegin",source:"damageBegin",},
                forced:true,
                priority:Infinity,
                unique:true,
                filter:function (event,player){                
                    return event.num>0;
                },
                content:function (){       
                "step 0"
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
                
                    player.mark(link,{
                        name:get.translation(link),
                        content:lib.translate[link+'_info']
                    });
                    game.log(player,'获得技能','【'+get.translation(link)+'】');  
               "step 1"
              player.draw(3)._triggered=null;
             if(trigger.source!=undefined&&trigger.source!=player){
player.gainPlayerCard(true,trigger.source,[Math.ceil(trigger.source.num('he')/2)].randomGet());
  }     
                },
                ai:{
                    noe:true,
                    effect:{
                        target:function (card,player){
if(card.name=='du') return [1,Infinity];
if(card.name=='tao') return [1,Infinity];                           if(card.name=='sha') return [1,Infinity];     
if(card.name=='guanshi') return [1,3];     
if(player.countCards('h','sha')>1&&card.name=='zhuge') return [1,4];       
                    },
                    },
                },
            },
     	boss_shemao:{
      unique:true,
			enable:['chooseToUse','chooseToRespond'],
			filterCard:true,
			selectCard:2,
			position:'h',
			viewAs:{name:'sha'},
			filter:function(event,player){
				return player.countCards('h')>=2;
			},
			audio:1,
			prompt:'将两张手牌当杀使用或打出',
			check:function(card){
				if(card.name=='sha') return 0;

				return 15-ai.get.useful(card)
			},
			ai:{
				respondSha:true,
				skillTagFilter:function(player){
					return player.countCards('h')>=2;
				},
			}
		},      
        boss_nuxiao:{
          group:['boss_nuxiao1','boss_immune'],
                audio:"ext:挑战BOSS:4",                
                trigger:{
                    player:"shaBegin",
                },
                forced:true,
                priority:100,
                content:function (){
                "step 0"
              trigger.target.addTempSkill('fengyin',{player:'phaseAfter'});
                "step 1"               
               trigger.target.chooseToDiscard(true,2,'he');   
                "step 2"
                event.cards=get.cards(5);
                player.showCards(event.cards,'怒哮');
                "step 3"
                for(var i=0;i<cards.length;i++){
                    if(get.type(cards[i])!='equip'&&get.type(cards[i])!='basic'){
                        ui.discardPile.appendChild(cards[i]);
                        cards.splice(i--,1);
                    }
                }
                player.gain(cards,'gain2');
                game.log(player,'获得了',cards);
          },
                mod:{
                    cardUsable:function (card,player,num){
                    if(card.name=='sha') return Infinity;
                },
                },
                ai:{
                    threaten:8,
                    order:15,
                    result:{
                        player:1,
                    },
                    effect:{
                        player:function (card,player,target){
          if(card.name=='zhangba') return -Infinity;  
         if(card.name=='guanshi') return -Infinity;  
        if(card.name=='sha') return Infinity;
       if(card.name=='guding') return [1,Infinity];
        if(card.name=='huogong') return [-9,-9];
                 if(card.name=='zhuge') return -Infinity;
                if(card.name=='juedou') return [-9,-9];                
            },                  },
                },
            },
        boss_nuxiao1:{
			ai:{
				unequip:true,
       unique:true,
				skillTagFilter:function(player,tag,arg){
					if(arg&&arg.name=='sha') return true;
					return false;
				}
			}
		},
        shenwu:{
            group:['boss_immune','wushuang','boss_qiangxi','boss_xuanfeng','boss_shenji'],
                audio:2,
                trigger:{
                  source:"damageEnd",
                },
                forced:true,
                priority:-20,
                content:function (){},
              ai:{

                    threaten:8.1,
                    order:15,                    
                    effect:{
                        player:function (card,player,target){
                if(card.name=='sha') return [1,Infinity];

                if(card.name=='juedou') return [1,Infinity];               
                 },
                },
             },
            },        
            boss_qiangxi:{
			audio:1,
			enable:'phaseUse',
      filter:function(event,player){
				return player.countCards('equip1')>0;
			},
			filterCard:function(card){    
				return get.subtype(card)=='equip1';
			},
			selectCard:1,
     unique:true,
			filterTarget:function(card,player,target){
				if(player==target) return false;
				return get.distance(player,target,'attack')<=1;
			},
			content:function(){	
				target.damage()._triggered=null;

			},
			check:function(card){
				return 10-ai.get.value(card);
			},
			position:'he',
			ai:{
				order:8,
				result:{
					player:function(player,target){          
						if(player.getEquip(1)) return 9;
						if(player.hp>=target.hp) return 9;
						if(player.hp<=2) return 10;
						return 5;
					},
					target:function(player,target){
						if(!player.getEquip(1)){
							if(player.hp<2) return 0;
							if(player.hp==2&&target.hp>=2) return 0;
							if(target.hp>player.hp) return 0;
						}
						return ai.get.damageEffect(target,player);
					}
				}
			},			
		},
    boss_xuanfeng:{
                audio:1,
                trigger:{
                    player:["loseEnd","phaseDiscardEnd"],
                },
                direct:true,
                unique:true,
                filter:function (event,player){  
                if(event.name=='phaseDiscard'){
                    return event.cards&&event.cards.length>0;
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
            event.num=2;  
           "step 1"        
    player.chooseTarget(get.prompt('xinxuanfeng'),function(card,player,target){
                    if(player==target) return false;
                    return target.num('he');
                }).set('ai',function(target){
                    return -ai.get.attitude(_status.event.player,target);
                });
                "step 2"
                if(result.bool){
         game.delay();
                    player.logSkill('boss_xuanfeng',result.targets);        
         event.targets=result.targets
         if(result.targets.length>=1){                        player.discardPlayerCard(event.targets[0],'he',true);                    
       }                 
                else{
                    event.finish();         
                }           
        }
       event.num--;            
       if(event.num>0){
                    event.goto(1);
                }                


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
   boss_shenji:{
			unique:true,
			mod:{
				selectTarget:function(card,player,range){
					if(range[1]==-1) return;
					if(player.getEquip(1)) return;
					if(card.name=='sha'||card.name=='juedou') range[1]+=2;
				},
				cardUsable:function(card,player,num){
					if(player.getEquip(1)) return;
					if(card.name=='sha') return num+1;
				}
			},
			ai:{
				effect:{
					target:function(card,player,target,current){

						if(get.subtype(card)=='equip1') return -1;
					}
				}
			}
		},   
   zhanshen:{
     group:['zhanshen2','zhanshen3','zhanshen4','zhanshen5'],
      audio:"ext:挑战Boss:1",
			trigger:{source:'damageEnd'},
			forced:true,			
			content:function(){
				player.recover(trigger.num);
       player.draw(trigger.num-(player.maxHp-player.hp));    
       }
        },
    zhanshen2:{
     audio:"ext:挑战Boss:2",
			trigger:{global:['phaseBegin']},
			forced:true,
     priority:20,
     unique:true,
			filter:function(event,player){
				return player.num('h')<=player.maxHp;
			},
			content:function(){
				player.draw(2);     
    }
    },    
    zhanshen3:{
               audio:"ext:挑战Boss:1",
                trigger:{
                    target:"lebuBegin",
                },
                forced:true,
                unique:true,
                content:function (){
                game.delay();
                trigger.untrigger();
                trigger.finish();
              }
            },
       zhanshen4:{
			trigger:{player:'changeHp'},
			forced:true,
			unique:true,
     priority:200,
			filter:function(event,player){
			return player.isTurnedOver();
			},
			content:function(){
	  	player.turnOver();
     }
     },
    zhanshen5:{
						audio:1,
						trigger:{player:['damageEnd','loseHpEnd']},
						forced:true,
						unique:true,
						priority:120,
           filter:function(event,player){      
    			 if(player.hp>4)
           return false;
           return _status.currentPhase!=player;
	       		},
						content:function(){          
							"step 0"
							player.phase();
							"step 1"
							while(_status.event.name!='phase'){
								_status.event=_status.event.parent;
							}
							_status.event.finish();
							_status.event.untrigger(true);				
						}			
					},	
					_cards_lose:{
						trigger:{player:'loseEnd'},
						direct:true,	
						silent:true,
						filter:function(event,player){
							return event.cards&&event.cards.length;
						},						
						content:function(){
							for(var i=0;i<trigger.cards.length;i++){
								trigger.cards[i].originaler=player;
							}						
						}	
					},	
					_cards_gain:{
						trigger:{player:'gainEnd'},
						direct:true,	
						silent:true,
						filter:function(event,player){
							return event.cards&&event.cards.length;
						},						
						content:function(){
							for(var i=0;i<trigger.cards.length;i++){
								trigger.cards[i].owner=player;
							}	
						}	      
					},						
     boss_chitu:{
			mod:{		
				globalFrom:function(from,to,num){
					return num-Infinity;
				 },
        }
	  	 	}, 
       },
        translate:{
        boss_damage:'<span class="bluetext" style="color:	#409090">呵呵'+'</span>',
        boss_loseMaxHp:'呵呵',      
        shenshi:"神弑",
        feijiangx:'飞将',    
        feijiangx1:'飞将',       
        feijiangx2:'飞将',        
        shensha:"神杀",
        shenmie:"神灭",
        shenwu:"神武",
        zhanshen:"战神",  
        zhanshen2:"战神",  
        zhanshen3:"战神",  
        zhanshen4:"战神",  
        zhanshen5:"战神",        
        boss_chitu:'赤兔',
       boss_qiangxi:"强袭",
       boss_xuanfeng:"旋风",
       boss_shemao:"蛇矛",
       boss_nuxiao:"怒哮",
       boss_dunjia:"遁甲",
       boss_dunjia1:"遁甲",
       boss_dunjia2:'遁甲',
       boss_qimen:"奇门",          
       boss_piaomiao:"飘渺",
       boss_yaohuo:'妖惑', 
       boss_jieliang:"劫粮",
       boss_meihuo:"魅惑",
       boss_guose:"国色",
       boss_biyue:"闭月",
       victory:"战歌",       
       boss_jianqi:"剑气",
       boss_xiushen:"修身",
       boss_xiushen1:"修身",
       boss_xiushen2:"修身",
       boss_xiushen3:"修身",
       boss_xiushen4:"修身",
       boss_jianyu:"剑雨",
       boss_pojia:"破甲", 
       boss_tongyi:"统一",
       boss_shemian:"赦免",
       boss_bieli:"别离",
       boss_beifen:"悲愤",
       boss_2bianshen:'变身',
       boss_xionglie:"雄烈",
       boss_xionglie1:"雄烈",
       boss_xionglie2:"雄烈",
       boss_xionglie3:"雄烈",
       boss_xionglie4:"雄烈",
       boss_xionglie5:"雄烈",
       boss_pimi:"披靡",
       boss_hudui:"互怼",
       boss_hudui1:"互怼",
       boss_hudui2:"互怼",
       boss_qingxu:"表情",
       boss_qingxu1:"表情",
       boss_qingxu2:"表情",
       tiaozhan_bianshen:"变身",
       tiaozhan_bianshen1:"变身",
       tiaozhan_bianshen2:"变身",
       tiaozhan_bianshen3:"变身",
       tiaozhan_bianshen4:"变身",
       tiaozhan_bianshen5:"变身",
       tiaozhan_bianshen6:"变身",
       kelian:"可怜",
       kelian1:"可怜",
       kelian2:"可怜",
       tiaopi:"调皮",
       tiaopix:"调皮",
       tiaopi1:"调皮",
       tiaopi2:"调皮",
       yinxian:"阴险",
       yinxian1:"阴险",
       yinxian2:"阴险",
       huaji:"滑稽",
       huaji1:"滑稽",
       huaji2:"滑稽",
       huaji3:"滑稽",
       fennu:"愤怒",
       fennu1:"愤怒",
       fennu2:"愤怒",
       fennu3:"愤怒",
       fennu4:"愤怒",
       boss_liaoshang:"疗伤",
       boss_yiwang:"遗忘",
       boss_yiwang1:'<span class="bluetext" style="color:	#6B8E23">遗忘'+'</span>',
       boss_yiwang2:'<span class="bluetext" style="color:	#53868B">遗忘'+'</span>',      
       boss_shuitie:"水帖",
       boss_wanzun:"挽尊",
       boss_shunjian:"瞬间",
       boss_yuxue:'浴血',
       boss_fenzhan:'奋战',
       boss_fenzhan1:'奋战',
       boss_fenzhan2:'奋战',
       boss_mp:'未出',
       boss_mp1:'占位',
       boss_shenmou:'深谋',
       boss_shenmou1:'深谋',       
       boss_yuanlv:'远虑',
       boss_yuanlv1:'远虑',
       boss_yuanlv2:'远虑',
       boss_lizhi:'丽质',
       boss_angyang:'昂扬',
       boss_angyang1:'<span class="bluetext" style="color:	#ff0000">昂扬'+'</span>',
       boss_hongzhuang:'红妆',       
       boss_dianji:'奠基',
       boss_dianji2:'<span class="bluetext" style="color:	#8c8c00">奠基'+'</span>',
       boss_lizhi1:'<span class="bluetext" style="color:	#B3EE3A">丽质'+'</span>',
       boss_hongzhuang:'红妆',
       boss_hongzhuang1:'<span class="bluetext" style="color:	#ff2d2d">红妆'+'</span>',
       boss_angyang_info:'<span class="greentext">锁定技'+'</span>，1、你使用【杀】或【决斗】指定其他角色为目标时，若其装备区牌数不大于你，则其不可使用卡牌响应此【杀】或【决斗】；2、当你使用【杀】或【决斗】对其他角色造成伤害时，伤害+X，X为其已损失的体力值，然后你获得其装备区里所有的牌，若其装备区里没有牌，你令其进入混乱状态，直到其下一回合结束；3、出牌阶段，你使用【杀】的次数上限+X，X改为你装备区里牌的数量；你的进攻距离无限', 
       boss_dianji_info:'<span class="greentext">锁定技'+'</span>，1、游戏开始时，你的手牌为7张；2、摸牌阶段开始时，你不摸牌；若你的手牌数小于7，你将手牌补至7张；3、当你成为【乐不思蜀】或被翻面的目标时，你取消之',
       boss_hongzhuang_info:'每当你失去装备区里的牌或使用、打出一张红色牌时，你可以获得一名其他角色的两张牌，然后对其造成X点伤害，X为其最大体力值的30%(四舍五入取整)，且至少为1',
       boss_lizhi_info:'<span class="greentext">锁定技'+'</span>，1、你的摸牌数量和回复体力值为基础的三倍；2、你的手牌上限不会因体力值的减少而减少；3、当你成为【杀】、【决斗】、【乐不思蜀】、【兵粮寸断】、【铁索连环】或翻面的目标时，你取消之；4、你使用的非延时类锦囊牌不能被【无懈可击】响应',
       boss_yuanlv_info:'<span class="greentext">锁定技'+'</span>，回合开始和结束时，你随机获得一名其他角色的所有手牌和装备区，若该角色牌数小于2，你摸4张牌，并令其进入混乱状态，直到其下一回合结束，然后对其造成X点伤害，X为其最大体力值的一半四舍五入取整；2、你防止体力流失、失去体力上限、翻面或非锦囊牌的伤害',
       boss_shenmou_info:'<span class="greentext">锁定技'+'</span>，1、回合开始时，你随机获得以下其中两项技能:【<span class="bluetext" style="color:	#5F9EA0">断粮'+'</span>、<span class="bluetext" style="color:	#5F9EA0">集智'+'</span>】、【<span class="bluetext" style="color:	#5F9EA0">制衡'+'</span>、<span class="bluetext" style="color:	#5F9EA0">连环'+'</span>】或【<span class="bluetext" style="color:	#5F9EA0">乱击'+'</span>、<span class="bluetext" style="color:	#5F9EA0">完杀'+'</span>】直到回合结束；2、摸牌阶段，你进行一次判定，你的摸牌数改为判定牌的点数',      
       boss_mp_info:'该武将尚未推出，敬请期待！',
       boss_yuxue_info:'游戏开始时，你获得浴血标记，称为“血”，浴血标记数量等同于你已损失的体力值，标记数量随着你已损失体力值变化而变化；你的手牌上限等同于浴血标记的数量',
       boss_fenzhan_info:'<span class="greentext">锁定技'+'</span>，每当你处于濒死状态时，你亮出牌堆的一张牌，若此牌的点数不等于你的手牌数，则你不会死亡，并获得此牌，然后摸等同于浴血标记数量的牌，且不超过7；回合结束时，你令所有敌方角色进入混乱状态直到其回合开始，并对其造成等同于浴血标记数量的伤害；你武将牌被翻面时，你取消之', 
       tiaozhan_bianshen_info:'你死亡后，召唤小怜并立即进入其回合阶段',
       tiaozhan_bianshen2_info:'你死亡后，召唤小皮并立即进入其回合阶段',
       tiaozhan_bianshen3_info:'你死亡后，召唤小险并立即进入其回合阶段',
       tiaozhan_bianshen4_info:'你死亡后，召唤小稽并立即进入其回合阶段',
       tiaozhan_bianshen5_info:'你死亡后，召唤小怒并立即进入其回合阶段(其他角色阶段结束后，执行额外一个回合)',
       tiaozhan_bianshen6_info:'你死亡后，召唤一瞬间丶遗忘并立即进入其回合阶段',
       yinxian_info:'<span class="greentext">锁定技'+'</span>，1、其他角色使用或打出牌时，你有几率抽取其一张牌，并有40%几率视为对其他角色使用一张[万箭齐发]或[南蛮入侵]；2、你使用[万箭齐发]或[南蛮入侵]指定目标后，你无视其防具', 
    		fennu_info:'<span class="greentext">锁定技'+'</span>，1、游戏开始时，你获得1枚愤怒标记，每当你造成或受到一点伤害，你获得一枚愤怒标记；2、你造成伤害时，伤害+等同于愤怒标记的数量；3、每当你回合开始时，你的体力上限增加15%向下取整，体力值回复X，X为你最大体力值的15%向下取整，且至少为1；4、每当你在回合外受到伤害或流失体力时，当前回合结束，你执行一个额外回合；5、你每次受到伤害或流失体力时，最多承受2点伤害和最多流失2点体力（防止多余的伤害和体力流失)',
       huaji_info:'<span class="greentext">锁定技'+'</span>，1、每当其他角色使用以下牌指定你为目标时，你有几率令该角色流失X点体力，X为其已损失的体力值，且至少为1，(【杀】、【决斗】、【火攻】、【南蛮入侵】、【万箭齐发】、【铁索连环】、【借刀杀人】、【顺手牵羊】、【过河拆桥】、【乐不思蜀】、【兵粮寸断】、【草木皆兵】、【弃甲曳兵】、【声东击西】)，你使用这些牌指定其他角色为目标时，有几率令其受到X点属性伤害，X为其最大体力值的30%，且至少为1；2、当其他角色回复体力或使用【酒】、【无中生有】、【无懈可击】、【五谷丰登】、【增兵减灶】、【金蝉脱壳】时，你有75%几率取消之，然后你回复一点体力，并摸三张牌',
       boss_shunjian_info:'<span class="greentext">锁定技'+'</span>，回合结束时，你有30%的几率将体力回复至最大体力值；否则你摸三张牌',
       boss_yiwang_info:'<span class="greentext">锁定技'+'</span>，1、当你即将流失体力或失去体力上限时，你取消之，并摸三张牌；2、每当你即将受到伤害时，若来源目标牌的数量不小于你，你防止之，然后你摸三张牌并令其弃置一半的牌向上取整，且至少为1；3、当你处于濒死状态时，你有几率脱离濒死状态，并将体力值回复至2',
       boss_shuitie_info:'<span class="greentext">锁定技'+'</span>，每当其他角色回复一点体力(来源不为你)时，你增加一点体力上限，并摸三张牌',
       boss_wanzun_info:'<span class="greentext">锁定技'+'</span>，其他角色出牌阶段，你有25%的几率令其失去X点体力，X为你最大体力值+其最大体力值的35%四舍五入取整；否则你摸三张牌，并令其弃置一半的牌向上取整，且至少为2，然后你对其造成X点属性伤害，X改为其最大体力值的35%四舍五入取整+你已损失的体力值的一半向上取整，且至少为1',
       tiaopi_info:'1、你对其他角色造成非属性伤害时，伤害+X，X为该角色最大体力值的一半(四舍五入取整)；2、出牌阶段，你属性【杀】的使用次数无限制，且不能被闪避；3、回合结束时，你将一枚调皮标记置于场上所有敌方角色的武将牌上，称为“调”，令其进攻距离和防御距离-3，手牌上限为1，直到其造成伤害；并有38%的几率将其武将牌翻面(不会响应背面朝上的角色)；若其武将牌上已有调皮标记，则令其失去一点体力',
       kelian_info:'<span class="greentext">锁定技'+'</span>，1、你受到不小于1点伤害时，均视为流失1点体力；2、你对目标造成不小于1点伤害时，均视为其失去X点体力，X为此伤害值+其最大体力值的一半(向下取整)；3、回合结束时，你令所有敌方角色弃置两张牌并失去X点体力，X为其已损失的体力值，且至少为1',
       boss_qingxu_info:'<span class="greentext">锁定技'+'</span>，1、当你成为【杀】、【决斗】、【火攻】、【兵粮寸断】、【乐不思蜀】、【过河拆桥】、【草木皆兵】、【声东击西】、【弃甲曳兵】的目标或(武将牌正面朝上)被翻面、即将受到伤害、流失体力时，你有45%几率防止之，然后你摸三张牌；2、当你回合外失去手牌时，你有50%的几率取消之',
       boss_hudui_info:'<span class="greentext">锁定技'+'</span>，1、其他角色对你造成伤害时，你可对来源目标连续使用四张无消耗的【杀】，此【杀】无视目标防具；2、当你即将流失体力时，你防止之，然后摸一张牌；3、当你在回合外造成伤害时，你摸X张牌，X为你已损失的体力值；若你已受伤，你有35%的几率回复两点体力；4、你不会受到来源为你的伤害',
       boss_xionglie_info:'<span class="greentext">锁定技'+'</span>，1、每当你成为【乐不思蜀】、【兵粮寸断】、【顺手牵羊】、【过河拆桥】、【火攻】、【草木皆兵】、【声东击西】、【弃甲曳兵】武将牌被翻面、流失体力、失去体力上限的目标或在回合内受到伤害时，你取消之，然后你增加一点体力上限；2、摸牌阶段，你改为摸X张牌，X为你最大体力值-当前手牌数；3、你回复体力时，回复额外+X，X为你已损失体力值的一半且向下取整；4、你的回合外，其他角色回复体力时，若你已受伤，你回复一点体力(此回复会受到条件3的影响)；5、你使用【杀】指定目标时，无视其防具',
       boss_pimi_info:'<span class="greentext">锁定技'+'</span>，1、你使用【杀】或【决斗】指定一名目标时，若该角色装备区牌数不大于你，则此【杀】或【决斗】伤害+X，X为0~999的随机值；若此为属性【杀】时，与该角色横置的其他角色传导此伤害时，伤害按X叠加；2、你计算与体力值、手牌数或装备区牌数小于你的角色距离始终为1',
       boss_bieli_info:'<span class="greentext">锁定技'+'</span>，每当你扣减体力后，若你体力值为0，你从牌堆亮出一张牌，若此牌不为♣7，你不会死亡，并获得此牌；若为♣7，你进入濒死状态',
       boss_beifen_info:'<span class="greentext">锁定技'+'</span>，1、其他角色出牌阶段时，你令其进行一次判定并令其的非锁定技失效直到其回合结束，若判定结果为：♥你对其造成X点伤害，X为判定牌的点数；♦你获得其所有装备区和手牌，♣你令其弃置所有装备区和手牌；♠你摸三张牌并令其武将牌翻面(若其武将牌背面朝上则不会响应此翻面)；2、你的手牌上限+你装备区牌数×2',
       boss_shemian_info:'<span class="greentext">锁定技'+'</span>，每当你即将受到多于1点伤害或流失多于1点体力时，你免疫之，改为你摸一张牌',
       boss_tongyi_info:'<span class="greentext">锁定技'+'</span>，每当你回合开始、回合结束、受到伤害、流失体力或武将牌翻面时，你获得所有敌方角色的一半牌(向下取整)，且至少为1，并对其造成等同于其最大体力值1/3的伤害(向下取整)且至少为1，然后你回复X点体力，X为此伤害值(伤害被免疫时也能发动)，若其体力值和体力上限为无限，你将其体力值和体力上限设为8',
       boss_liaoshang_info:'<span class="greentext">锁定技'+'</span>，你回复体力时，改为回复X点体力，X为你已损失的体力值的12%(向下取整)，且至少为2',
       boss_pojia_info:'每当你使用【杀】指定一名目标角色后，你无视其防具',
       boss_jianyu_info:'<span class="greentext">锁定技'+'</span>，你的攻击范围无限，你的【杀】可以指定任意名角色为目标',
       boss_xiushen_info:'<span class="greentext">锁定技'+'</span>，1、摸牌阶段你不摸牌；2、回合开始时，你摸4~7张牌；3、当你武将牌正面朝上被翻面或成为[乐不思蜀]的目标时，你有75%的几率取消之，并摸2张牌；4、你每次受到的伤害和流失的体力数值不会超过你最大体力值的5%；5、你防止失去体力上限；6、你的手牌上限始终为15',
       boss_jianqi_info:'<span class="greentext">锁定技'+'</span>，你的【杀】有几率造成两倍伤害',

       victory_info:'<span class="bluetext" style="color:	#cd7f32">限定技'+'</span>，1、游戏开始时，你摸2~5张牌，然后随机播放一首战歌；2、当体力值低于5时，你将体力回复至最大体力值的25%~50%，然后获得技能：<span class="bluetext" style="color:	#5F9EA0">疗伤'+'</span>；并将手牌数补至你当前体力值，再随机播放一首战歌，然后失去技能：<span class="bluetext" style="color:	#5F9EA0">战歌'+'</span>',
       boss_biyue_info:"回合结束时，你体力上限+1并摸X张牌，X为你已损失的体力值，且至少为1，然后回复一半已损失的体力值且向上取整",
       boss_guose_info:'出牌阶段限3次，你可以选择一项：将一张♥或♦花色牌当做【乐不思蜀】使用；。选择完成后，你摸1~2张牌',
       boss_meihuo_info:'出牌阶段限1次，你可以指定1~2名其他角色获得其所有牌，并令其失去所有技能直到你回合结束，然后你获得之(你不能获得主公技，限定技，觉醒技)直到你下一回合开始',
       feijiangx_info:'1、游戏开始时，你的体力上限变为其他角色体力上限之和；2、其他角色回合阶段结束时，你额外执行一个回合；3、你的进攻距离和手牌上限为无限',
       shenshi_info:'你的回合外，其他角色回复体力时，若该角色体力值不低于1，你可以弃置一枚“暴怒”标记，令其取消之，改为你摸1~3张牌',
       shensha_info:'其他角色在其回合内武将牌被翻面，你可以获得其所有手牌和装备区，并令其立即死亡',
	    	shenmie_info:'出牌阶段，你可以弃置5枚暴怒标记，令场上所有其他角色受到1~2点伤害，然后你将其武将牌翻面并获得其所有手牌和装备区(不会响应背面朝上的角色)，每阶段限一次',
       boss_jieliang_info:'其他角色从牌堆获得牌时，你可以令其失去非锁定技直到其回合结束；若该角色体力上限大于1，你令其失去其最大体力值1/3的体力上限且向下取整；并获得其X张牌，X为其所有手牌和装备区牌的数量-1',
		boss_yaohuo_info:'<span class="greentext">锁定技'+'</span>，每当你失去一张手牌时，你可以令一名随机的其他角色进入混乱状态直到其下一回合结束，若没有可以选定的角色，你摸1~2张牌',
       boss_piaomiao_info:'<span class="greentext">锁定技'+'</span>，回合开始时，你令所有敌方角色弃置一半牌(向上取整)，且至少为1，并对其造成X点雷电伤害，X为其最大体力值的1/4(四舍五入取整)，且至少为1',
            boss_qimen_info:'<span class="greentext">锁定技'+'</span>，每当你造成或受到一次伤害时，你随机获得未加入本局游戏的武将的一个技能（主公技、觉醒技除外)；然后你摸三张牌，并获得对你造成伤害的其他角色的一半牌且向上取整',
            boss_dunjia_info:'<span class="greentext">锁定技'+'</span>，1、你每次受到伤害时，最多承受1点伤害（防止多余的伤害)；2、流失体力或体力上限时，你取消之，改为增加一点体力上限并回复一点体力；3、每当你在回合外失去一张牌，你摸两张牌',
       boss_shemao_info:'你可以将两张手牌当【杀】使用或打出',
       boss_nuxiao_info:'<span class="greentext">锁定技'+'</span>，出牌阶段，你使用【杀】无数量限制，每当你使用【杀】指定目标时，无视其防具，可令其非锁定技失效直到其下一回合阶段结束，并令其弃置2张牌，然后你亮出牌堆顶的5张牌，你获得其中的基本牌和装备牌并展示之',
       shenwu_info:'<span class="greentext">锁定技'+'</span>，你视为拥有以下技能：<span class="bluetext" style="color:	#5F9EA0">无双'+'</span>、<span class="bluetext" style="color:	#5F9EA0">强袭'+'</span>、<span class="bluetext" style="color:	#5F9EA0">旋风'+'</span>和<span class="bluetext" style="color:	#5F9EA0">神戟'+'</span>；<span class="bluetext" style="color:	#5F9EA0">无双'+'</span>：你使用的[杀]或[决斗]需要两张[闪]或[杀]响应；<span class="bluetext" style="color:	#5F9EA0">强袭'+'</span>：出牌阶段，你可以弃一张装备区内的武器牌，然后你对你攻击范围内的一名角色造成一点伤害；<span class="bluetext" style="color:	#5F9EA0">旋风'+'</span>：当你失去装备区里的牌时，或于弃牌阶段弃置了一张或更多的手牌后，你可以依次弃置一至两名其他角色的共计两张牌；<span class="bluetext" style="color:	#5F9EA0">神戟'+'</span>：若你未装备武器，你使用【杀】或【决斗】指定的目标数上限+2，次数上限+1',
       boss_chitu_info:'<span class="greentext">锁定技'+'</span>，你的进攻距离无限',       
       zhanshen_info:'<span class="greentext">锁定技'+'</span>，1、当你对一名角色造成1点伤害后，若你已受伤，则你回复1点体力，否则你摸1张牌；2、一名角色回合开始时，若你的手牌数不大于体力上限，你可以摸两张牌；3、当你成为[乐不思蜀]的目标时，你取消之；4、当你的武将牌背面朝上时，你可在体力值发生变化后将之翻回正面；5、每当你于回合外受到伤害或流失体力时，若你的体力值等于4或更低，当前回合结束，你执行1个额外回合',
        },  
      },   
},files:{"character":["BOSS_shenhua.jpg","BOSS_zhanshen.jpg"],"card":[],"skill":[]},editable:false,
})