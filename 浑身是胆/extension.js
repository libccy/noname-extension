game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"浑身是胆",content:function (config,pack){
    if(get.mode()=='brawl'){
    game.addCharacterPack({    
    character:{
    gods_zhaoyun:['male','shen',1,['gods_tuwei','gods_juejing','longhun','gods_fengqiang','gods_zhanjiang'],['zhu','boos','forbidai'],'qun'],
    },
    skill:{
    gods_fengqiang:{
                audio:'ext:浑身是胆:3',
                enable:"phaseUse",
                filterCard:function(card,player){
    				if(ui.selected.cards.length){
    					return get.suit(card)==get.suit(ui.selected.cards[0]);
    				}
    				var cards=player.getCards('h');
    				for(var i=0;i<cards.length;i++){
    					if(card!=cards[i]){
    						if(get.suit(card)==get.suit(cards[i])) return true;
    					}
    				}
    				return false;
    			},
    			selectCard:3,
    			complexCard:true,
    			check:function(card){
    				return 15-get.value(card);
    			},
                selectTarget:-1,
                position:'he',
                usable:1,
                filter:function(event,player){
if(player.countCards('he',{suit:'club'})<3&&player.countCards('he',{suit:'spade'})<3&&player.countCards('he',{suit:'heart'})<3&&player.countCards('he',{suit:'diamond'})<3) return false;
					       return !player.hasSkill('gods_fengqiang2');
				         },                         
                filterTarget:function (card,player,target){              
                if(target==player) return false;
                return player.canUse({name:'sha'},target,false);
            },
                content:function (){
                player.addTempSkill('gods_fengqiang2');
               player.useCard({name:'sha'},target,false);               
            },
            ai:{                 
                  order:15,               
                  result:{                                       
                    target:-2,
                    },
                    threaten:5,
                },   
            },
    gods_tuwei:{
				mod:{
					globalFrom:function(from,to,distance){
						return distance-1;
					},
					globalTo:function(from,to,distance){
						return distance-1;
					}
				}
			},
    gods_zhanjiang:{
				trigger:{player:'phaseBegin'},
				filter:function(event,player){
				return game.countPlayer(function(current){
								if(current!=player){
									return current.getEquip('qinggang');
								}
							});
				},
				content:function(){
				 "step 0"
					var players=get.players(player);
					players.remove(player);
					event.players=players;
					"step 1"
					if(event.players.length){
						var current=event.players.shift();
						var qg=current.get('e','qinggang');
							if(qg.length){
							 player.line(current,'green');
								player.gain(qg,current);
								current.$give(qg,player);
								}
								event.redo();			
			  		}
		 		}
			},
			gods_juejing:{
				trigger:{player:'phaseDrawBefore'},
				forced:true,
				audio:'ext:浑身是胆:3',
				content:function(){
					trigger.cancel();
				},
				ai:{
					noh:true,
				},
				group:'gods_juejing2'
			},
			gods_fengqiang2:{},
			gods_juejing2:{
				trigger:{player:'loseEnd'},
				forced:true,
				audio:'ext:浑身是胆:3',
				filter:function(event,player){
					return player.countCards('h')<4;
				},
				content:function(){
					player.draw(4-player.countCards('h'));
				}
			},
			game_shiqi:{
				mod:{
					cardUsable:function(card,player,num){
						if(card.name=='sha') return num+1;
	 				}
					}
				},		
  // if(config.Maths=='seven'){
//   };
    },
    translate:{
    gods_zhaoyun:'高達一號',
   
   game_shiqi:'士气',
   game_shiqi_info:'锁定技，出牌阶段，你可以额外使用一张【杀】',
   gods_fengqiang:'凤枪',
   gods_fengqiang_info:'出牌阶段限一次，你可以弃置三张花色相同的牌，若如此做，视为你对合法的所有其他角色依次使用一张【杀】',
   gods_tuwei:'突围',
   gods_tuwei_info:'锁定技，你计算与其他角色的距离-1；锁定技，其他角色计算与你的距离-1。',
   yj_qianhuan:'千幻',
   yj_qianhuan_info:'每当一名与你势力相同的角色受到一次伤害后，你可以亮出牌堆顶的一张牌并置于你的武将牌上，若此牌与你武将牌上的另一张牌花色相同，则将此牌置入弃牌堆。当一名与你势力相同的角色成为基本牌或锦囊牌的唯一目标时，你可以弃置你武将牌上的一张牌，然后取消之。',
   Create_guhuo:'蛊惑',
   Create_guhuo_info:'每名角色的回合限一次，你可以扣置一张手牌当一张基本牌或非延时类锦囊牌使用或打出。其他角色依次选择是否质疑。一旦有其他角色质疑则翻开此牌：若为假则此牌作废，若为真，则质疑角色获得技能“缠怨”（锁定技，你不能质疑于吉，只要你的体力值为1，你失去所有其他技能）。',
   gods_zhanjiang:'斩将',
			gods_zhanjiang_info:'准备阶段开始时，如果其他角色的装备区内有【青釭剑】，你可以获得之',
			gods_juejing:'绝境',
			gods_juejing2:'绝境',
			gods_juejing_info:'锁定技，摸牌阶段开始时，你不摸牌；锁定技，若你的手牌数小于4，你将手牌补至四张',
    },
    });
    };
    if(lib.config.mode=="brawl"){
if(!lib.storage.stage) lib.storage.stage={};
if(!lib.storage.stage["浑身是胆"]){
lib.storage.stage["浑身是胆"]={
    name:"浑身是胆",
  //  intro:"",
    intro:[
			'（八人身份局）',
			'玩家操控高达一号作为主公，其他角色均由ai操控身份均为反贼',
			'<span style=\"font-weight:550;color: orange\">★计时模式★</span>',
			'场上反贼角色阵亡后，60秒后其复活摸四张牌并随机更换武将牌(场上每有一名其他阵亡角色复活时间缩短5%)',
			'<span style=\"font-weight:550;color: orange\">★血战模式★</span>',
			'场上反贼角色阵亡后，其立即复活摸四张牌并随机更换武将牌(直到其复活次数耗尽为止；反贼角色杀死反贼角色时，凶手角色复活次数+1)',
			'点击下方“管理扩展”切换模式/设置反贼复活次数',
			'<span style=\"font-weight:550;color: gold\">胜利条件：所有反贼阵亡；失败条件：主公(高达一号)阵亡</span>',
			'★若安装了扩展“孙策81难”，须先关闭之才能正常运行此模式',
],
    scenes:[{"name":"挑战单将","intro":"","players":[{"name":"random","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"gods_zhaoyun","name2":"none","identity":"zhu","position":0,"hp":1,"maxHp":1,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true},{"name":"挑战双将","intro":"","players":[{"name":"random","name2":"random","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"random","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"random","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"random","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"random","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"random","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"random","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"gods_zhaoyun","name2":"none","identity":"zhu","position":0,"hp":1,"maxHp":1,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true}//,{name:"挑战BOSS",
   // intro:"",
//    players:[{"name":"['boss_baiwuchang','boss_heiwuchang','boss_luocha','boss_mamian','boss_lvbu2','boss_lvbu3','boss_caocao','boss_caiwenji','boss_caiwenji','boss_caiwenji','boss_zhugeliang','boss_zhugeliang','boss_zuoci','boss_nianshou_baonu','boss_zhuyin','boss_taowu','boss_taotie','boss_qiongqi','boss_hundun','boss_zhugeliang','boss_liubei'].randomGet()","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"gods_zhaoyun","name2":"none","identity":"zhu","position":0,"hp":1,"maxHp":1,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]}],
    //cardPileTop:[],
 //   cardPileBottom:[],
   // discardPile:[],
    //gameDraw:true,}
],
    mode:"normal",
    level:0,
};
_status.extensionstage=true;}
if(!_status.extensionmade) _status.extensionmade=[];
_status.extensionmade.push("浑身是胆");
};
if(lib.config.mode=="brawl"){
lib.arenaReady.push(function(){      
    if(config.Selection=='XueZhan'){ 
    lib.skill._gamePhase={
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                popup:false,
                priority:100,
                filter:function (event,player){
return player!=game.me&&game.me.name=='gods_zhaoyun'&&game.zhu.name=='gods_zhaoyun'&&event.player!=game.me&&Math.random()<=Math.min(0.5,0.15+0.01*game.roundNumber);
},
                content:function (){
                'step 0'
                player.draw();
                'step 1'
                game.log(player,'获得技能','【士气】');
                player.addTempSkill('game_shiqi')._triggered=null;
               }
            };
    if(config.XueZhan=='seven'){
    lib.translate.gameDie='命数',
    lib.translate.gameDie_bg='命',
    lib.skill.gameDie={
               group:'gameDying',
                trigger:{
                    global:"dieAfter",
                },
                forced:true,
                popup:false,
                mark:true,
                init:function(player){
			            player.storage.gameDie=7;
	               },
	               intro:{
	               content:'复活次数剩余：#'
	               },
                filter:function (event,player){
                if(event.player.isAlive())
                return false;
return event.player.hasSkill('gameDie')&&event.player.storage.gameDie&&event.player.storage.gameDie>0;
},
                content:function (){
                'step 0'
                if(trigger.source&&trigger.source.hasSkill('gameDie')&&trigger.source.identity==trigger.player.identity){
                trigger.source.storage.gameDie++;
   game.addVideo('storage',trigger.source,['gameDie',trigger.source.storage.gameDie]);
                game.log(trigger.source,'复活次数+1');
                }
                trigger.player.storage.gameDie--;
   game.addVideo('storage',trigger.player,['gameDie',trigger.player.storage.gameDie]);
                game.log(trigger.player,'复活次数-1');
                game.delay();
                'step 1'
                var gameDies=trigger.player.storage.gameDie;
 if(Math.random()<=0.1&&lib.character['boss_baiwuchang','boss_heiwuchang','boss_luocha','boss_mamian','boss_lvbu2','boss_lvbu3','boss_caocao','boss_caiwenji','boss_zuoci','boss_nianshou_baonu','boss_zhuyin','boss_taowu','boss_taotie','boss_qiongqi','boss_hundun','boss_zhugeliang','boss_liubei']){
   var PlayerName=['boss_baiwuchang','boss_heiwuchang','boss_luocha','boss_mamian','boss_lvbu2','boss_lvbu3','boss_caocao','boss_caiwenji','boss_zuoci','boss_nianshou_baonu','boss_zhuyin','boss_taowu','boss_taotie','boss_qiongqi','boss_hundun','boss_zhugeliang','boss_liubei'].randomGet();
   }else{
 var PlayerName=['caocao','guojia','zhenji','simayi','zhangliao','xiahoudun','xuzhu','guanyu','zhangfei','machao','zhaoyun','zhugeliang','shen_simayi','shen_simayi','shen_simayi','shen_simayi','huangyueying','daqiao','ganning','huanggai','luxun','lvmeng','sunquan','zhouyu','sp_diaochan','diaochan','huatuo','shen_lvbu','shen_lvbu','shen_lvbu','lvbu','caopi','caoren','dianwei','dengai','xiahouyuan','xuhuang','xunyu','zhanghe','huangzhong','weiyan','jiangwei','liushan','menghuo','pangtong','sp_zhugeliang','zhurong','re_lusu','sunce','sunjian','taishici','re_lusu','re_lusu','re_lusu','shen_zhugeliang','shen_zhugeliang','shen_zhugeliang','shen_guanyu','zhangzhang','caochong','caiwenji','dongzhuo','jiaxu','pangde','yanwen','yxs_weizhongxian','yxs_meixi','yxs_guiguzi','yxs_fuermosi','yxs_luocheng','yxs_napolun','yxs_chengyaojin','yxs_baosi','yxs_bole','yxs_caocao','old_zhuran','old_zhonghui','zuoci','re_guojia','re_xuzhu','zhugedan','re_simayi','re_lidian','re_caocao','re_xiahoudun','re_guanyu','re_machao','re_xushu','re_ganning','re_luxun','re_daqiao','re_huanggai','re_gongsunzan','re_huatuo','re_lvmeng','caozhang','guohuai','caozhi','xunyou','xin_xushu','xin_masu','masu','xin_fazheng','zhuran','xusheng','wuguotai','lingtong','liubiao','old_huaxiong','huaxiong','wangyi','zhangren','zhangren','yufan','zhangchunhua','handang','zhonghui','jianyong','old_madai','madai','liufeng','manchong','guanzhang','sunluban','guyong','caifuren','yj_jushou','zhangsong','zhuhuan','guanping','liaohua','chengpu','gaoshun','wuyi','hanhaoshihuan','caorui','caoxiu','sp_zhaoyun','liuchen','zhangyi','sunxiu','gongsunyuan','liuyu','liyan','cenhun','sundeng','xin_liru','guohuanghou','guotufengji','caozhen','diy_yuji','yujin','old_quancong','old_wangyi','old_caoxiu','xinxianying','wuxian','xushi','caojie','xuezong','jikang','qinmi','caiyong','xiahouba','yuanshu','old_yuanshu','liuxie','zhugejin','guanyinping','zhugeke','simalang','jsp_zhaoyun','zhangxingcai','fuwan','sp_sunshangxiang','caoang','re_yuanshu','sp_caoren','panzhangmazhong','zhangbao','maliang','sp_pangtong','sp_jiangwei','sp_machao','sunhao','shixie','mayunlu','zhanglu','wutugu','sp_caiwenji','zhugeguo','liuzan','lingcao','sunru','lingju','re_zhangfei','lifeng','cuiyan','sp_zhangfei','jsp_guanyu','jsp_huangyueying','hanba','zumao','daxiaoqiao','sp_ganning','sp_daqiao','wangji','wanglang','sp_pangde','litong','tadun','yanbaihu','sp_liubei','caochun','dongyun','kanze','heqi','mateng','yuejin','chendong','sp_dongzhuo','jiangfei','jiangqing','hetaihou','dingfeng','panfeng','jiling','miheng','shen_zhouyu','sunqian','xizhicai','quyi','liuye','huangfusong','shen_lvmeng','shen_zhaoyun','diy_tianyu','ns_caocao','diy_lukang','diy_liuyan','diy_feishi','old_xusheng','re_yuanshao','re_yuanshao','re_yuanshao','sunce','sunce','sunhao','sunhao','liushan','liushan','zhangchunhua','zhangchunhua','caorui','caorui','shen_zhouyu','shen_zhouyu','liubiao','liubiao','wutugu','wutugu','zhugedan','zhugedan','sunce','quyi','quyi','shen_guanyu','shen_lvmeng','shen_lvmeng','shen_zhaoyun','shen_zhaoyun'].randomGet();
 }
trigger.player.init(PlayerName);	
trigger.player.draw(4,false);
trigger.player.revive(trigger.player.maxHp);
if(!trigger.player.hasSkill('gameDie')){
			trigger.player.addSkill('gameDie');
			trigger.player.markSkill('gameDie');
   trigger.player.syncStorage('gameDie');
   trigger.player.storage.gameDie=gameDies;
   game.addVideo('storage',trigger.player,['gameDie',trigger.player.storage.gameDie]);
   }
}
            },      
      lib.skill._gameStart={
                trigger:{
                    global:"gameStart",
                },
                forced:true,
                popup:false,
                priority:Infinity,
                filter:function (event,player){
return player!=game.me&&game.me.name=='gods_zhaoyun'&&game.zhu.name=='gods_zhaoyun'&&game.players.length==8&&event.player!=game.me;
},
                content:function (){
                player.addSkill('gameDie')._triggered=null;
               }
            }
        };
      if(config.XueZhan=='twenty_one'){
    lib.translate.gameDie='命数',
    lib.translate.gameDie_bg='命',
    lib.skill.gameDie={
                group:'gameDying',
                trigger:{
                    global:"dieAfter",
                },
                forced:true,
                popup:false,
                mark:true,                
                init:function(player){
			            player.storage.gameDie=21;
	               },
	               intro:{
	               content:'复活次数剩余：#'
	               },
                filter:function (event,player){
                if(event.player.isAlive())
                return false;
return event.player.hasSkill('gameDie')&&event.player.storage.gameDie&&event.player.storage.gameDie>0;
},
                content:function (){
                'step 0'
                if(trigger.source&&trigger.source.hasSkill('gameDie')&&trigger.source.identity==trigger.player.identity){
                trigger.source.storage.gameDie++;
   game.addVideo('storage',trigger.source,['gameDie',trigger.source.storage.gameDie]);
                game.log(trigger.source,'复活次数+1');
                }
                trigger.player.storage.gameDie--;
   game.addVideo('storage',trigger.player,['gameDie',trigger.player.storage.gameDie]);
                game.log(trigger.player,'复活次数-1');
                game.delay();
                'step 1'
                var gameDies=trigger.player.storage.gameDie;
 if(Math.random()<=0.1&&lib.character['boss_baiwuchang','boss_heiwuchang','boss_luocha','boss_mamian','boss_lvbu2','boss_lvbu3','boss_caocao','boss_caiwenji','boss_zuoci','boss_nianshou_baonu','boss_zhuyin','boss_taowu','boss_taotie','boss_qiongqi','boss_hundun','boss_zhugeliang','boss_liubei']){
   var PlayerName=['boss_baiwuchang','boss_heiwuchang','boss_luocha','boss_mamian','boss_lvbu2','boss_lvbu3','boss_caocao','boss_caiwenji','boss_zuoci','boss_nianshou_baonu','boss_zhuyin','boss_taowu','boss_taotie','boss_qiongqi','boss_hundun','boss_zhugeliang','boss_liubei'].randomGet();
   }else{
 var PlayerName=['caocao','guojia','zhenji','simayi','zhangliao','xiahoudun','xuzhu','guanyu','zhangfei','machao','zhaoyun','zhugeliang','shen_simayi','shen_simayi','shen_simayi','shen_simayi','huangyueying','daqiao','ganning','huanggai','luxun','lvmeng','sunquan','zhouyu','sp_diaochan','diaochan','huatuo','shen_lvbu','shen_lvbu','shen_lvbu','lvbu','caopi','caoren','dianwei','dengai','xiahouyuan','xuhuang','xunyu','zhanghe','huangzhong','weiyan','jiangwei','liushan','menghuo','pangtong','sp_zhugeliang','zhurong','re_lusu','sunce','sunjian','taishici','re_lusu','re_lusu','re_lusu','shen_zhugeliang','shen_zhugeliang','shen_zhugeliang','shen_guanyu','zhangzhang','caochong','caiwenji','dongzhuo','jiaxu','pangde','yanwen','yxs_weizhongxian','yxs_meixi','yxs_guiguzi','yxs_fuermosi','yxs_luocheng','yxs_napolun','yxs_chengyaojin','yxs_baosi','yxs_bole','yxs_caocao','old_zhuran','old_zhonghui','zuoci','re_guojia','re_xuzhu','zhugedan','re_simayi','re_lidian','re_caocao','re_xiahoudun','re_guanyu','re_machao','re_xushu','re_ganning','re_luxun','re_daqiao','re_huanggai','re_gongsunzan','re_huatuo','re_lvmeng','caozhang','guohuai','caozhi','xunyou','xin_xushu','xin_masu','masu','xin_fazheng','zhuran','xusheng','wuguotai','lingtong','liubiao','old_huaxiong','huaxiong','wangyi','zhangren','zhangren','yufan','zhangchunhua','handang','zhonghui','jianyong','old_madai','madai','liufeng','manchong','guanzhang','sunluban','guyong','caifuren','yj_jushou','zhangsong','zhuhuan','guanping','liaohua','chengpu','gaoshun','wuyi','hanhaoshihuan','caorui','caoxiu','sp_zhaoyun','liuchen','zhangyi','sunxiu','gongsunyuan','liuyu','liyan','cenhun','sundeng','xin_liru','guohuanghou','guotufengji','caozhen','diy_yuji','yujin','old_quancong','old_wangyi','old_caoxiu','xinxianying','wuxian','xushi','caojie','xuezong','jikang','qinmi','caiyong','xiahouba','yuanshu','old_yuanshu','liuxie','zhugejin','guanyinping','zhugeke','simalang','jsp_zhaoyun','zhangxingcai','fuwan','sp_sunshangxiang','caoang','re_yuanshu','sp_caoren','panzhangmazhong','zhangbao','maliang','sp_pangtong','sp_jiangwei','sp_machao','sunhao','shixie','mayunlu','zhanglu','wutugu','sp_caiwenji','zhugeguo','liuzan','lingcao','sunru','lingju','re_zhangfei','lifeng','cuiyan','sp_zhangfei','jsp_guanyu','jsp_huangyueying','hanba','zumao','daxiaoqiao','sp_ganning','sp_daqiao','wangji','wanglang','sp_pangde','litong','tadun','yanbaihu','sp_liubei','caochun','dongyun','kanze','heqi','mateng','yuejin','chendong','sp_dongzhuo','jiangfei','jiangqing','hetaihou','dingfeng','panfeng','jiling','miheng','shen_zhouyu','sunqian','xizhicai','quyi','liuye','huangfusong','shen_lvmeng','shen_zhaoyun','diy_tianyu','ns_caocao','diy_lukang','diy_liuyan','diy_feishi','old_xusheng','re_yuanshao','re_yuanshao','re_yuanshao','sunce','sunce','sunhao','sunhao','liushan','liushan','zhangchunhua','zhangchunhua','caorui','caorui','shen_zhouyu','shen_zhouyu','liubiao','liubiao','wutugu','wutugu','zhugedan','zhugedan','sunce','quyi','quyi','shen_guanyu','shen_lvmeng','shen_lvmeng','shen_zhaoyun','shen_zhaoyun'].randomGet();
 }
trigger.player.init(PlayerName);	
trigger.player.draw(4,false);
trigger.player.revive(trigger.player.maxHp);
if(!trigger.player.hasSkill('gameDie')){
			trigger.player.addSkill('gameDie');
			trigger.player.markSkill('gameDie');
   trigger.player.syncStorage('gameDie');
   trigger.player.storage.gameDie=gameDies;
   game.addVideo('storage',trigger.player,['gameDie',trigger.player.storage.gameDie]);
   }
}
            },
      lib.skill._gameStart={
                trigger:{
                    global:"gameStart",
                },
                forced:true,
                popup:false,
                priority:Infinity,
                filter:function (event,player){
return player!=game.me&&game.me.name=='gods_zhaoyun'&&game.zhu.name=='gods_zhaoyun'&&game.players.length==8&&event.player!=game.me;
},
                content:function (){
                player.addSkill('gameDie')._triggered=null;
               }
            }
        };
       if(config.XueZhan=='forty_nine'){
    lib.translate.gameDie='命数',
    lib.translate.gameDie_bg='命',
    lib.skill.gameDie={
               group:'gameDying',
                trigger:{
                    global:"dieAfter",
                },
                forced:true,
                popup:false,
                mark:true,               
                init:function(player){
			            player.storage.gameDie=49;
	               },
	               intro:{
	               content:'复活次数剩余：#'
	               },
                filter:function (event,player){
                if(event.player.isAlive())
                return false;
return event.player.hasSkill('gameDie')&&event.player.storage.gameDie&&event.player.storage.gameDie>0;
},
                content:function (){
                'step 0'
                if(trigger.source&&trigger.source.hasSkill('gameDie')&&trigger.source.identity==trigger.player.identity){
                trigger.source.storage.gameDie++;
   game.addVideo('storage',trigger.source,['gameDie',trigger.source.storage.gameDie]);
                game.log(trigger.source,'复活次数+1');
                }
                trigger.player.storage.gameDie--;
   game.addVideo('storage',trigger.player,['gameDie',trigger.player.storage.gameDie]);
                game.log(trigger.player,'复活次数-1');
                game.delay();
                'step 1'
                var gameDies=trigger.player.storage.gameDie;
 if(Math.random()<=0.1&&lib.character['boss_baiwuchang','boss_heiwuchang','boss_luocha','boss_mamian','boss_lvbu2','boss_lvbu3','boss_caocao','boss_caiwenji','boss_zuoci','boss_nianshou_baonu','boss_zhuyin','boss_taowu','boss_taotie','boss_qiongqi','boss_hundun','boss_zhugeliang','boss_liubei']){
   var PlayerName=['boss_baiwuchang','boss_heiwuchang','boss_luocha','boss_mamian','boss_lvbu2','boss_lvbu3','boss_caocao','boss_caiwenji','boss_zuoci','boss_nianshou_baonu','boss_zhuyin','boss_taowu','boss_taotie','boss_qiongqi','boss_hundun','boss_zhugeliang','boss_liubei'].randomGet();
   }else{
 var PlayerName=['caocao','guojia','zhenji','simayi','zhangliao','xiahoudun','xuzhu','guanyu','zhangfei','machao','zhaoyun','zhugeliang','shen_simayi','shen_simayi','shen_simayi','shen_simayi','huangyueying','daqiao','ganning','huanggai','luxun','lvmeng','sunquan','zhouyu','sp_diaochan','diaochan','huatuo','shen_lvbu','shen_lvbu','shen_lvbu','lvbu','caopi','caoren','dianwei','dengai','xiahouyuan','xuhuang','xunyu','zhanghe','huangzhong','weiyan','jiangwei','liushan','menghuo','pangtong','sp_zhugeliang','zhurong','re_lusu','sunce','sunjian','taishici','re_lusu','re_lusu','re_lusu','shen_zhugeliang','shen_zhugeliang','shen_zhugeliang','shen_guanyu','zhangzhang','caochong','caiwenji','dongzhuo','jiaxu','pangde','yanwen','yxs_weizhongxian','yxs_meixi','yxs_guiguzi','yxs_fuermosi','yxs_luocheng','yxs_napolun','yxs_chengyaojin','yxs_baosi','yxs_bole','yxs_caocao','old_zhuran','old_zhonghui','zuoci','re_guojia','re_xuzhu','zhugedan','re_simayi','re_lidian','re_caocao','re_xiahoudun','re_guanyu','re_machao','re_xushu','re_ganning','re_luxun','re_daqiao','re_huanggai','re_gongsunzan','re_huatuo','re_lvmeng','caozhang','guohuai','caozhi','xunyou','xin_xushu','xin_masu','masu','xin_fazheng','zhuran','xusheng','wuguotai','lingtong','liubiao','old_huaxiong','huaxiong','wangyi','zhangren','zhangren','yufan','zhangchunhua','handang','zhonghui','jianyong','old_madai','madai','liufeng','manchong','guanzhang','sunluban','guyong','caifuren','yj_jushou','zhangsong','zhuhuan','guanping','liaohua','chengpu','gaoshun','wuyi','hanhaoshihuan','caorui','caoxiu','sp_zhaoyun','liuchen','zhangyi','sunxiu','gongsunyuan','liuyu','liyan','cenhun','sundeng','xin_liru','guohuanghou','guotufengji','caozhen','diy_yuji','yujin','old_quancong','old_wangyi','old_caoxiu','xinxianying','wuxian','xushi','caojie','xuezong','jikang','qinmi','caiyong','xiahouba','yuanshu','old_yuanshu','liuxie','zhugejin','guanyinping','zhugeke','simalang','jsp_zhaoyun','zhangxingcai','fuwan','sp_sunshangxiang','caoang','re_yuanshu','sp_caoren','panzhangmazhong','zhangbao','maliang','sp_pangtong','sp_jiangwei','sp_machao','sunhao','shixie','mayunlu','zhanglu','wutugu','sp_caiwenji','zhugeguo','liuzan','lingcao','sunru','lingju','re_zhangfei','lifeng','cuiyan','sp_zhangfei','jsp_guanyu','jsp_huangyueying','hanba','zumao','daxiaoqiao','sp_ganning','sp_daqiao','wangji','wanglang','sp_pangde','litong','tadun','yanbaihu','sp_liubei','caochun','dongyun','kanze','heqi','mateng','yuejin','chendong','sp_dongzhuo','jiangfei','jiangqing','hetaihou','dingfeng','panfeng','jiling','miheng','shen_zhouyu','sunqian','xizhicai','quyi','liuye','huangfusong','shen_lvmeng','shen_zhaoyun','diy_tianyu','ns_caocao','diy_lukang','diy_liuyan','diy_feishi','old_xusheng','re_yuanshao','re_yuanshao','re_yuanshao','sunce','sunce','sunhao','sunhao','liushan','liushan','zhangchunhua','zhangchunhua','caorui','caorui','shen_zhouyu','shen_zhouyu','liubiao','liubiao','wutugu','wutugu','zhugedan','zhugedan','sunce','quyi','quyi','shen_guanyu','shen_lvmeng','shen_lvmeng','shen_zhaoyun','shen_zhaoyun'].randomGet();
 }
trigger.player.init(PlayerName);	
trigger.player.draw(4,false);
trigger.player.revive(trigger.player.maxHp);
if(!trigger.player.hasSkill('gameDie')){
			trigger.player.addSkill('gameDie');
			trigger.player.markSkill('gameDie');
   trigger.player.syncStorage('gameDie');
   trigger.player.storage.gameDie=gameDies;
   game.addVideo('storage',trigger.player,['gameDie',trigger.player.storage.gameDie]);
   }
}
            },
      lib.skill._gameStart={
                trigger:{
                    global:"gameStart",
                },
                forced:true,
                popup:false,
                priority:Infinity,
                filter:function (event,player){
return player!=game.me&&game.me.name=='gods_zhaoyun'&&game.zhu.name=='gods_zhaoyun'&&game.players.length==8&&event.player!=game.me;
},
                content:function (){
                player.addSkill('gameDie')._triggered=null;
               }
            }
        };
      if(config.XueZhan=='ninety_eight'){
    lib.translate.gameDie='命数',
    lib.translate.gameDie_bg='命',
    lib.skill.gameDie={
               group:'gameDying',
                trigger:{
                    global:"dieAfter",
                },
                forced:true,
                popup:false,
                mark:true,
                init:function(player){
			            player.storage.gameDie=98;
	               },
	               intro:{
	               content:'复活次数剩余：#'
	               },
                filter:function (event,player){
                if(event.player.isAlive())
                return false;
return event.player.hasSkill('gameDie')&&event.player.storage.gameDie&&event.player.storage.gameDie>0;
},
                content:function (){
                'step 0'
                if(trigger.source&&trigger.source.hasSkill('gameDie')&&trigger.source.identity==trigger.player.identity){
                trigger.source.storage.gameDie++;
   game.addVideo('storage',trigger.source,['gameDie',trigger.source.storage.gameDie]);
                game.log(trigger.source,'复活次数+1');
                }
                trigger.player.storage.gameDie--;
   game.addVideo('storage',trigger.player,['gameDie',trigger.player.storage.gameDie]);
                game.log(trigger.player,'复活次数-1');
                game.delay();
                'step 1'
                var gameDies=trigger.player.storage.gameDie;
 if(Math.random()<=0.1&&lib.character['boss_baiwuchang','boss_heiwuchang','boss_luocha','boss_mamian','boss_lvbu2','boss_lvbu3','boss_caocao','boss_caiwenji','boss_zuoci','boss_nianshou_baonu','boss_zhuyin','boss_taowu','boss_taotie','boss_qiongqi','boss_hundun','boss_zhugeliang','boss_liubei']){
   var PlayerName=['boss_baiwuchang','boss_heiwuchang','boss_luocha','boss_mamian','boss_lvbu2','boss_lvbu3','boss_caocao','boss_caiwenji','boss_zuoci','boss_nianshou_baonu','boss_zhuyin','boss_taowu','boss_taotie','boss_qiongqi','boss_hundun','boss_zhugeliang','boss_liubei'].randomGet();
   }else{
 var PlayerName=['caocao','guojia','zhenji','simayi','zhangliao','xiahoudun','xuzhu','guanyu','zhangfei','machao','zhaoyun','zhugeliang','shen_simayi','shen_simayi','shen_simayi','shen_simayi','huangyueying','daqiao','ganning','huanggai','luxun','lvmeng','sunquan','zhouyu','sp_diaochan','diaochan','huatuo','shen_lvbu','shen_lvbu','shen_lvbu','lvbu','caopi','caoren','dianwei','dengai','xiahouyuan','xuhuang','xunyu','zhanghe','huangzhong','weiyan','jiangwei','liushan','menghuo','pangtong','sp_zhugeliang','zhurong','re_lusu','sunce','sunjian','taishici','re_lusu','re_lusu','re_lusu','shen_zhugeliang','shen_zhugeliang','shen_zhugeliang','shen_guanyu','zhangzhang','caochong','caiwenji','dongzhuo','jiaxu','pangde','yanwen','yxs_weizhongxian','yxs_meixi','yxs_guiguzi','yxs_fuermosi','yxs_luocheng','yxs_napolun','yxs_chengyaojin','yxs_baosi','yxs_bole','yxs_caocao','old_zhuran','old_zhonghui','zuoci','re_guojia','re_xuzhu','zhugedan','re_simayi','re_lidian','re_caocao','re_xiahoudun','re_guanyu','re_machao','re_xushu','re_ganning','re_luxun','re_daqiao','re_huanggai','re_gongsunzan','re_huatuo','re_lvmeng','caozhang','guohuai','caozhi','xunyou','xin_xushu','xin_masu','masu','xin_fazheng','zhuran','xusheng','wuguotai','lingtong','liubiao','old_huaxiong','huaxiong','wangyi','zhangren','zhangren','yufan','zhangchunhua','handang','zhonghui','jianyong','old_madai','madai','liufeng','manchong','guanzhang','sunluban','guyong','caifuren','yj_jushou','zhangsong','zhuhuan','guanping','liaohua','chengpu','gaoshun','wuyi','hanhaoshihuan','caorui','caoxiu','sp_zhaoyun','liuchen','zhangyi','sunxiu','gongsunyuan','liuyu','liyan','cenhun','sundeng','xin_liru','guohuanghou','guotufengji','caozhen','diy_yuji','yujin','old_quancong','old_wangyi','old_caoxiu','xinxianying','wuxian','xushi','caojie','xuezong','jikang','qinmi','caiyong','xiahouba','yuanshu','old_yuanshu','liuxie','zhugejin','guanyinping','zhugeke','simalang','jsp_zhaoyun','zhangxingcai','fuwan','sp_sunshangxiang','caoang','re_yuanshu','sp_caoren','panzhangmazhong','zhangbao','maliang','sp_pangtong','sp_jiangwei','sp_machao','sunhao','shixie','mayunlu','zhanglu','wutugu','sp_caiwenji','zhugeguo','liuzan','lingcao','sunru','lingju','re_zhangfei','lifeng','cuiyan','sp_zhangfei','jsp_guanyu','jsp_huangyueying','hanba','zumao','daxiaoqiao','sp_ganning','sp_daqiao','wangji','wanglang','sp_pangde','litong','tadun','yanbaihu','sp_liubei','caochun','dongyun','kanze','heqi','mateng','yuejin','chendong','sp_dongzhuo','jiangfei','jiangqing','hetaihou','dingfeng','panfeng','jiling','miheng','shen_zhouyu','sunqian','xizhicai','quyi','liuye','huangfusong','shen_lvmeng','shen_zhaoyun','diy_tianyu','ns_caocao','diy_lukang','diy_liuyan','diy_feishi','old_xusheng','re_yuanshao','re_yuanshao','re_yuanshao','sunce','sunce','sunhao','sunhao','liushan','liushan','zhangchunhua','zhangchunhua','caorui','caorui','shen_zhouyu','shen_zhouyu','liubiao','liubiao','wutugu','wutugu','zhugedan','zhugedan','sunce','quyi','quyi','shen_guanyu','shen_lvmeng','shen_lvmeng','shen_zhaoyun','shen_zhaoyun'].randomGet();
 }
trigger.player.init(PlayerName);	
trigger.player.draw(4,false);
trigger.player.revive(trigger.player.maxHp);
if(!trigger.player.hasSkill('gameDie')){
			trigger.player.addSkill('gameDie');
			trigger.player.markSkill('gameDie');
   trigger.player.syncStorage('gameDie');
   trigger.player.storage.gameDie=gameDies;
   game.addVideo('storage',trigger.player,['gameDie',trigger.player.storage.gameDie]);
   }
}
            },
      lib.skill._gameStart={
                trigger:{
                    global:"gameStart",
                },
                forced:true,
                popup:false,
                priority:Infinity,
                filter:function (event,player){
return player!=game.me&&game.me.name=='gods_zhaoyun'&&game.zhu.name=='gods_zhaoyun'&&game.players.length==8&&event.player!=game.me;
},
                content:function (){
                player.addSkill('gameDie')._triggered=null;
               }
            }
        };
      if(config.XueZhan=='Infinity'){
    lib.translate.gameDie='命数',
    lib.translate.gameDie_bg='命',
    lib.skill.gameDie={
               group:'gameDying',
                trigger:{
                    global:"dieAfter",
                },
                forced:true,
                popup:false,
                mark:true,
                init:function(player){
			            player.storage.gameDie=Infinity;
	               },
	               intro:{
	               content:'复活次数剩余：∞'
	               },
                filter:function (event,player){
                if(event.player.isAlive())
                return false;
return event.player.hasSkill('gameDie')&&event.player.storage.gameDie&&event.player.storage.gameDie>0;
},
                content:function (){
                'step 0'
                if(trigger.source&&trigger.source.hasSkill('gameDie')&&trigger.source.identity==trigger.player.identity){
                trigger.source.storage.gameDie++;
   game.addVideo('storage',trigger.source,['gameDie',trigger.source.storage.gameDie]);
                game.log(trigger.source,'复活次数+1');
                }
                trigger.player.storage.gameDie--;
   game.addVideo('storage',trigger.player,['gameDie',trigger.player.storage.gameDie]);
                game.log(trigger.player,'复活次数-1');
                game.delay();
                'step 1'
                var gameDies=trigger.player.storage.gameDie;
 if(Math.random()<=0.1&&lib.character['boss_baiwuchang','boss_heiwuchang','boss_luocha','boss_mamian','boss_lvbu2','boss_lvbu3','boss_caocao','boss_caiwenji','boss_zuoci','boss_nianshou_baonu','boss_zhuyin','boss_taowu','boss_taotie','boss_qiongqi','boss_hundun','boss_zhugeliang','boss_liubei']){
   var PlayerName=['boss_baiwuchang','boss_heiwuchang','boss_luocha','boss_mamian','boss_lvbu2','boss_lvbu3','boss_caocao','boss_caiwenji','boss_zuoci','boss_nianshou_baonu','boss_zhuyin','boss_taowu','boss_taotie','boss_qiongqi','boss_hundun','boss_zhugeliang','boss_liubei'].randomGet();
   }else{
 var PlayerName=['caocao','guojia','zhenji','simayi','zhangliao','xiahoudun','xuzhu','guanyu','zhangfei','machao','zhaoyun','zhugeliang','shen_simayi','shen_simayi','shen_simayi','shen_simayi','huangyueying','daqiao','ganning','huanggai','luxun','lvmeng','sunquan','zhouyu','sp_diaochan','diaochan','huatuo','shen_lvbu','shen_lvbu','shen_lvbu','lvbu','caopi','caoren','dianwei','dengai','xiahouyuan','xuhuang','xunyu','zhanghe','huangzhong','weiyan','jiangwei','liushan','menghuo','pangtong','sp_zhugeliang','zhurong','re_lusu','sunce','sunjian','taishici','re_lusu','re_lusu','re_lusu','shen_zhugeliang','shen_zhugeliang','shen_zhugeliang','shen_guanyu','zhangzhang','caochong','caiwenji','dongzhuo','jiaxu','pangde','yanwen','yxs_weizhongxian','yxs_meixi','yxs_guiguzi','yxs_fuermosi','yxs_luocheng','yxs_napolun','yxs_chengyaojin','yxs_baosi','yxs_bole','yxs_caocao','old_zhuran','old_zhonghui','zuoci','re_guojia','re_xuzhu','zhugedan','re_simayi','re_lidian','re_caocao','re_xiahoudun','re_guanyu','re_machao','re_xushu','re_ganning','re_luxun','re_daqiao','re_huanggai','re_gongsunzan','re_huatuo','re_lvmeng','caozhang','guohuai','caozhi','xunyou','xin_xushu','xin_masu','masu','xin_fazheng','zhuran','xusheng','wuguotai','lingtong','liubiao','old_huaxiong','huaxiong','wangyi','zhangren','zhangren','yufan','zhangchunhua','handang','zhonghui','jianyong','old_madai','madai','liufeng','manchong','guanzhang','sunluban','guyong','caifuren','yj_jushou','zhangsong','zhuhuan','guanping','liaohua','chengpu','gaoshun','wuyi','hanhaoshihuan','caorui','caoxiu','sp_zhaoyun','liuchen','zhangyi','sunxiu','gongsunyuan','liuyu','liyan','cenhun','sundeng','xin_liru','guohuanghou','guotufengji','caozhen','diy_yuji','yujin','old_quancong','old_wangyi','old_caoxiu','xinxianying','wuxian','xushi','caojie','xuezong','jikang','qinmi','caiyong','xiahouba','yuanshu','old_yuanshu','liuxie','zhugejin','guanyinping','zhugeke','simalang','jsp_zhaoyun','zhangxingcai','fuwan','sp_sunshangxiang','caoang','re_yuanshu','sp_caoren','panzhangmazhong','zhangbao','maliang','sp_pangtong','sp_jiangwei','sp_machao','sunhao','shixie','mayunlu','zhanglu','wutugu','sp_caiwenji','zhugeguo','liuzan','lingcao','sunru','lingju','re_zhangfei','lifeng','cuiyan','sp_zhangfei','jsp_guanyu','jsp_huangyueying','hanba','zumao','daxiaoqiao','sp_ganning','sp_daqiao','wangji','wanglang','sp_pangde','litong','tadun','yanbaihu','sp_liubei','caochun','dongyun','kanze','heqi','mateng','yuejin','chendong','sp_dongzhuo','jiangfei','jiangqing','hetaihou','dingfeng','panfeng','jiling','miheng','shen_zhouyu','sunqian','xizhicai','quyi','liuye','huangfusong','shen_lvmeng','shen_zhaoyun','diy_tianyu','ns_caocao','diy_lukang','diy_liuyan','diy_feishi','old_xusheng','re_yuanshao','re_yuanshao','re_yuanshao','sunce','sunce','sunhao','sunhao','liushan','liushan','zhangchunhua','zhangchunhua','caorui','caorui','shen_zhouyu','shen_zhouyu','liubiao','liubiao','wutugu','wutugu','zhugedan','zhugedan','sunce','quyi','quyi','shen_guanyu','shen_lvmeng','shen_lvmeng','shen_zhaoyun','shen_zhaoyun'].randomGet();
 }
trigger.player.init(PlayerName);	
trigger.player.draw(4,false);
trigger.player.revive(trigger.player.maxHp);
if(!trigger.player.hasSkill('gameDie')){
			trigger.player.addSkill('gameDie');
			trigger.player.markSkill('gameDie');
   trigger.player.syncStorage('gameDie');
   trigger.player.storage.gameDie=gameDies;
   game.addVideo('storage',trigger.player,['gameDie',trigger.player.storage.gameDie]);
   }
}
            },
      lib.skill._gameStart={
                trigger:{
                    global:"gameStart",
                },
                forced:true,
                popup:false,
                priority:Infinity,
                filter:function (event,player){
return player!=game.me&&game.me.name=='gods_zhaoyun'&&game.zhu.name=='gods_zhaoyun'&&game.players.length==8&&event.player!=game.me;
},
                content:function (){
                player.addSkill('gameDie')._triggered=null;
               }
            }
        };   
    };
    if(config.Selection=='GetTime'){
			 lib.skill.gameDie1={
                trigger:{
                    player:['useCardAfter','phaseUseAfter']
                },
                forced:true,
                popup:false,
                filter:function (event,player){
return player.storage.gameDie;

},
                content:function (){
'step 0'
player.storage.gameDie1=get.time()-player.storage.gameDie;
player.update();

//for(var i=0;i<game.dead.length;i++){
//game.dead[i].popup(''+get.translation(210-player.storage.gameDie1/1000)+'秒');
//if(210-player.storage.gameDie1/1000>0){
//game.log(game.dead[i],'复活还剩：'+get.translation(210-player.storage.gameDie1/1000)+'秒');
//}else{
//game.log(game.dead[i],'即将复活');
//}
//}
'step 1'
if(player.storage.gameDie1>=45000-game.dead.length*3000-3000){
for(var j=0;j<game.players.length;j++){
delete game.players[j].storage.gameDie;
}
for(var i=0;i<game.dead.length;i++){
if(game.dead[i].hasSkill('gameDie')){
 if(Math.random()<=0.1&&lib.character['boss_baiwuchang','boss_heiwuchang','boss_luocha','boss_mamian','boss_lvbu2','boss_lvbu3','boss_caocao','boss_caiwenji','boss_zuoci','boss_nianshou_baonu','boss_zhuyin','boss_taowu','boss_taotie','boss_qiongqi','boss_hundun','boss_zhugeliang','boss_liubei']){
   var PlayerName=['boss_baiwuchang','boss_heiwuchang','boss_luocha','boss_mamian','boss_lvbu2','boss_lvbu3','boss_caocao','boss_caiwenji','boss_zuoci','boss_nianshou_baonu','boss_zhuyin','boss_taowu','boss_taotie','boss_qiongqi','boss_hundun','boss_zhugeliang','boss_liubei'].randomGet();
   }else{
 var PlayerName=['caocao','guojia','zhenji','simayi','zhangliao','xiahoudun','xuzhu','guanyu','zhangfei','machao','zhaoyun','zhugeliang','shen_simayi','shen_simayi','shen_simayi','shen_simayi','huangyueying','daqiao','ganning','huanggai','luxun','lvmeng','sunquan','zhouyu','sp_diaochan','diaochan','huatuo','shen_lvbu','shen_lvbu','shen_lvbu','lvbu','caopi','caoren','dianwei','dengai','xiahouyuan','xuhuang','xunyu','zhanghe','huangzhong','weiyan','jiangwei','liushan','menghuo','pangtong','sp_zhugeliang','zhurong','re_lusu','sunce','sunjian','taishici','re_lusu','re_lusu','re_lusu','shen_zhugeliang','shen_zhugeliang','shen_zhugeliang','shen_guanyu','zhangzhang','caochong','caiwenji','dongzhuo','jiaxu','pangde','yanwen','yxs_weizhongxian','yxs_meixi','yxs_guiguzi','yxs_fuermosi','yxs_luocheng','yxs_napolun','yxs_chengyaojin','yxs_baosi','yxs_bole','yxs_caocao','old_zhuran','old_zhonghui','zuoci','re_guojia','re_xuzhu','zhugedan','re_simayi','re_lidian','re_caocao','re_xiahoudun','re_guanyu','re_machao','re_xushu','re_ganning','re_luxun','re_daqiao','re_huanggai','re_gongsunzan','re_huatuo','re_lvmeng','caozhang','guohuai','caozhi','xunyou','xin_xushu','xin_masu','masu','xin_fazheng','zhuran','xusheng','wuguotai','lingtong','liubiao','old_huaxiong','huaxiong','wangyi','zhangren','zhangren','yufan','zhangchunhua','handang','zhonghui','jianyong','old_madai','madai','liufeng','manchong','guanzhang','sunluban','guyong','caifuren','yj_jushou','zhangsong','zhuhuan','guanping','liaohua','chengpu','gaoshun','wuyi','hanhaoshihuan','caorui','caoxiu','sp_zhaoyun','liuchen','zhangyi','sunxiu','gongsunyuan','liuyu','liyan','cenhun','sundeng','xin_liru','guohuanghou','guotufengji','caozhen','diy_yuji','yujin','old_quancong','old_wangyi','old_caoxiu','xinxianying','wuxian','xushi','caojie','xuezong','jikang','qinmi','caiyong','xiahouba','yuanshu','old_yuanshu','liuxie','zhugejin','guanyinping','zhugeke','simalang','jsp_zhaoyun','zhangxingcai','fuwan','sp_sunshangxiang','caoang','re_yuanshu','sp_caoren','panzhangmazhong','zhangbao','maliang','sp_pangtong','sp_jiangwei','sp_machao','sunhao','shixie','mayunlu','zhanglu','wutugu','sp_caiwenji','zhugeguo','liuzan','lingcao','sunru','lingju','re_zhangfei','lifeng','cuiyan','sp_zhangfei','jsp_guanyu','jsp_huangyueying','hanba','zumao','daxiaoqiao','sp_ganning','sp_daqiao','wangji','wanglang','sp_pangde','litong','tadun','yanbaihu','sp_liubei','caochun','dongyun','kanze','heqi','mateng','yuejin','chendong','sp_dongzhuo','jiangfei','jiangqing','hetaihou','dingfeng','panfeng','jiling','miheng','shen_zhouyu','sunqian','xizhicai','quyi','liuye','huangfusong','shen_lvmeng','shen_zhaoyun','diy_tianyu','ns_caocao','diy_lukang','diy_liuyan','diy_feishi','old_xusheng','re_yuanshao','re_yuanshao','re_yuanshao','sunce','sunce','sunhao','sunhao','liushan','liushan','zhangchunhua','zhangchunhua','caorui','caorui','shen_zhouyu','shen_zhouyu','liubiao','liubiao','wutugu','wutugu','zhugedan','zhugedan','sunce','quyi','quyi','shen_guanyu','shen_lvmeng','shen_lvmeng','shen_zhaoyun','shen_zhaoyun'].randomGet();
 }
game.dead[i].init(PlayerName)._triggered=null;
game.dead[i].addSkill('gameDie')._triggered=null;
game.dead[i].addSkill('gameDie1')._triggered=null;
game.dead[i].draw(4,false);
game.dead[i].revive(game.dead[i].maxHp); 
}
}
}
},
            },
            lib.skill.gameDie={
                trigger:{
                    global:"dieAfter",
                },
                forced:true,
                popup:false,
                filter:function (event,player){
return event.player.hasSkill('gameDie');
},
                content:function (){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.gameDie=get.time();
//game.players[i].update();
}
},
            },
      lib.skill._gameStart={
                trigger:{
                    global:"gameStart",
                },
                forced:true,
                popup:false,
                priority:Infinity,
                filter:function (event,player){
return player!=game.me&&game.me.name=='gods_zhaoyun'&&game.zhu.name=='gods_zhaoyun'&&game.players.length==8&&event.player!=game.me;
},
                content:function (){
                player.addSkill('gameDie')._triggered=null;
                player.addSkill('gameDie1')._triggered=null;
                }
            }
           }; 
        lib.skill.gameDying={
                trigger:{
                    player:"dieBegin",
                },
                forced:true,
                popup:false,
                priority:99,
                silent:true,
                filter:function (event,player){
                var num=0;
                for(var i=0;i<game.players.length;i++){
if(game.players[i].identity=='fan') num++;
              }
              if(num>1)
              return false;
              if(player.identity!='fan'||game.zhu.name!='gods_zhaoyun'||game.me.name!='gods_zhaoyun'||game.me!=game.zhu)
              return false;
return player.hasSkill('gameDie')&&player.storage.gameDie&&player.storage.gameDie>0;
},
                content:function (){
                'step 0'
                var zhuAudio=player.name;
	game.playAudio('die',zhuAudio);
	if(!trigger.source){
 game.log(player,'阵亡');
 }else{
 game.log(player,'被',trigger.source,'杀害');
 }
player.discard(player.get('hej'))._triggered=null;
//game.log(player,'弃置了',player.get('hej'));
player.turnOver(false);
player.link(false);  
                'step 1'           
                player.storage.gameDie--;
   game.addVideo('storage',player,['gameDie',player.storage.gameDie]);
                game.log(player,'复活次数-1');
                game.delay();
                'step 2'
                var gameDies=player.storage.gameDie;
 if(Math.random()<=0.1&&lib.character['boss_baiwuchang','boss_heiwuchang','boss_luocha','boss_mamian','boss_lvbu2','boss_lvbu3','boss_caocao','boss_caiwenji','boss_zuoci','boss_nianshou_baonu','boss_zhuyin','boss_taowu','boss_taotie','boss_qiongqi','boss_hundun','boss_zhugeliang','boss_liubei']){
   var PlayerName=['boss_baiwuchang','boss_heiwuchang','boss_luocha','boss_mamian','boss_lvbu2','boss_lvbu3','boss_caocao','boss_caiwenji','boss_zuoci','boss_nianshou_baonu','boss_zhuyin','boss_taowu','boss_taotie','boss_qiongqi','boss_hundun','boss_zhugeliang','boss_liubei'].randomGet();
   }else{
 var PlayerName=['caocao','guojia','zhenji','simayi','zhangliao','xiahoudun','xuzhu','guanyu','zhangfei','machao','zhaoyun','zhugeliang','shen_simayi','shen_simayi','shen_simayi','shen_simayi','huangyueying','daqiao','ganning','huanggai','luxun','lvmeng','sunquan','zhouyu','sp_diaochan','diaochan','huatuo','shen_lvbu','shen_lvbu','shen_lvbu','lvbu','caopi','caoren','dianwei','dengai','xiahouyuan','xuhuang','xunyu','zhanghe','huangzhong','weiyan','jiangwei','liushan','menghuo','pangtong','sp_zhugeliang','zhurong','re_lusu','sunce','sunjian','taishici','re_lusu','re_lusu','re_lusu','shen_zhugeliang','shen_zhugeliang','shen_zhugeliang','shen_guanyu','zhangzhang','caochong','caiwenji','dongzhuo','jiaxu','pangde','yanwen','yxs_weizhongxian','yxs_meixi','yxs_guiguzi','yxs_fuermosi','yxs_luocheng','yxs_napolun','yxs_chengyaojin','yxs_baosi','yxs_bole','yxs_caocao','old_zhuran','old_zhonghui','zuoci','re_guojia','re_xuzhu','zhugedan','re_simayi','re_lidian','re_caocao','re_xiahoudun','re_guanyu','re_machao','re_xushu','re_ganning','re_luxun','re_daqiao','re_huanggai','re_gongsunzan','re_huatuo','re_lvmeng','caozhang','guohuai','caozhi','xunyou','xin_xushu','xin_masu','masu','xin_fazheng','zhuran','xusheng','wuguotai','lingtong','liubiao','old_huaxiong','huaxiong','wangyi','zhangren','zhangren','yufan','zhangchunhua','handang','zhonghui','jianyong','old_madai','madai','liufeng','manchong','guanzhang','sunluban','guyong','caifuren','yj_jushou','zhangsong','zhuhuan','guanping','liaohua','chengpu','gaoshun','wuyi','hanhaoshihuan','caorui','caoxiu','sp_zhaoyun','liuchen','zhangyi','sunxiu','gongsunyuan','liuyu','liyan','cenhun','sundeng','xin_liru','guohuanghou','guotufengji','caozhen','diy_yuji','yujin','old_quancong','old_wangyi','old_caoxiu','xinxianying','wuxian','xushi','caojie','xuezong','jikang','qinmi','caiyong','xiahouba','yuanshu','old_yuanshu','liuxie','zhugejin','guanyinping','zhugeke','simalang','jsp_zhaoyun','zhangxingcai','fuwan','sp_sunshangxiang','caoang','re_yuanshu','sp_caoren','panzhangmazhong','zhangbao','maliang','sp_pangtong','sp_jiangwei','sp_machao','sunhao','shixie','mayunlu','zhanglu','wutugu','sp_caiwenji','zhugeguo','liuzan','lingcao','sunru','lingju','re_zhangfei','lifeng','cuiyan','sp_zhangfei','jsp_guanyu','jsp_huangyueying','hanba','zumao','daxiaoqiao','sp_ganning','sp_daqiao','wangji','wanglang','sp_pangde','litong','tadun','yanbaihu','sp_liubei','caochun','dongyun','kanze','heqi','mateng','yuejin','chendong','sp_dongzhuo','jiangfei','jiangqing','hetaihou','dingfeng','panfeng','jiling','miheng','shen_zhouyu','sunqian','xizhicai','quyi','liuye','huangfusong','shen_lvmeng','shen_zhaoyun','diy_tianyu','ns_caocao','diy_lukang','diy_liuyan','diy_feishi','old_xusheng','re_yuanshao','re_yuanshao','re_yuanshao','sunce','sunce','sunhao','sunhao','liushan','liushan','zhangchunhua','zhangchunhua','caorui','caorui','shen_zhouyu','shen_zhouyu','liubiao','liubiao','wutugu','wutugu','zhugedan','zhugedan','sunce','quyi','quyi','shen_guanyu','shen_lvmeng','shen_lvmeng','shen_zhaoyun','shen_zhaoyun'].randomGet();
 } 
 game.log(player,'复活');
player.init(PlayerName);	
player.draw(4,false);
trigger.cancel();
player.hp=player.maxHp;
player.update();
if(!player.hasSkill('gameDie')){
			player.addSkill('gameDie');
			player.markSkill('gameDie');
   player.syncStorage('gameDie');
   player.storage.gameDie=gameDies;
   game.addVideo('storage',player,['gameDie',player.storage.gameDie]);
   }
}
            };
   // if(lib.skill['boss_hujia']){
    lib.translate.gods_hujia='胡笳',
    lib.translate.gods_hujia_info='结束阶段开始时，若你已受伤，你可以弃置一张牌令一名敌方角色的所有技能失效，若其所有技能已失效，改为令其失去1点体力上限',
    lib.skill._gods_hujia={
				trigger:{global:['gainEnd','loseEnd']},
				forced:true,
				popup:false,
				filter:function(event,player){
					if(!player.hasSkill('boss_hujia')) return false;
					return true;
				},
				content:function(){
				'step 0'
				player.removeSkill('boss_hujia');
				'step 1'
				player.addSkill('gods_hujia');
				}
				},
    lib.skill.gods_hujia={
				audio:'boss_hujia',
				trigger:{player:'phaseEnd'},
				direct:true,
				unique:true,
				filter:function(event,player){
					if(player.hp==player.maxHp) return false;
					if(!player.countCards('he')) return false;
					return true;
				},
				content:function(){
					"step 0"
					player.chooseCardTarget({
						position:'he',
						filterTarget:function(card,player,target){
							if(player==target) return false;
							if(target.identity==player.identity)
							return false;
							if(!lib.character[target.name]) return false;
							return true;
						},
						filterCard:lib.filter.cardDiscardable,
						ai1:function(card){
							return get.unuseful(card)+9;
						},
						ai2:function(target){
							if(target.storage.gods_hujia) return Math.max(1,10-target.maxHp);
							return 1/target.maxHp;
						},
						prompt:get.prompt('gods_hujia')
					});
					"step 1"
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('gods_hujia',target);
						if(target.storage.gods_hujia){
							target.loseMaxHp();
						}
						else{
							target.disableSkill('gods_hujia',lib.character[target.name][3]);
							target.storage.gods_hujia=true;
						}
						player.discard(result.cards);
					}
				},
				ai:{
					expose:0.2,
				}
			},
//			};
    lib.config.mode_config.identity.change_card='disabled',    
    lib.translate.duanchang_info='锁定技，杀死你的敌方角色失去当前的所有技能直到游戏结束',
    lib.skill.duanchang={
    			audio:4,
    			forbid:['boss'],
    			trigger:{player:'dieBegin'},
    			forced:true,
    			filter:function(event,player){
    				return event.source&&event.source.identity!=player.identity&&event.source.isIn();
    			},
    			content:function(){
    				trigger.source.clearSkills();
    			},
    			logTarget:'source',
    			ai:{
    				threaten:function(player,target){
    					if(target.hp==1) return 0.2;
    					return 1.5;
    				},
    				effect:{
    					target:function(card,player,target,current){
    						if(!target.hasFriend()) return;
    						if(target.hp<=1&&get.tag(card,'damage')) return [1,0,0,-2];
    					}
    				}
    			}
    		},
    lib.skill._node={
 						trigger:{global:['gameStart','gameDrawAfter','phaseBefore']},
						forced:true,	
						popup:false,					
						silent:true,
          priority:Infinity,          
 						content:function(){
        console.log(player);
        game.swapPlayer= function (all) {
        game.over(false);};
      }
     },      
         lib.skill._nodedamage={
 						trigger:{player:['recoverBefore','damageBefore']},
						forced:true,	
						popup:false,					
						silent:true,
          priority:Infinity,
          filter:function(event,player){
          if(event.name=='damage'){
if(event.card&&(event.card.name=='shandian'||event.card.name=='fulei'))
          return false;
          return !event.source;
          }
          else{         
          return !event.source;
          }
          return false;
          },
 						content:function(){
            game.over(false);        
             }
        },
     lib.skill._nodeSkills={
 						trigger:{global:['gameStart','gameDrawAfter','phaseBefore']},
						forced:true,	
						popup:false,					
						silent:true,
        priority:Infinity,    
        filter:function(event,player){  
        return game.me.name=='gods_zhaoyun'&&game.zhu.name=='gods_zhaoyun'&&player!=game.me;  
        },  
 						content:function(){
        console.log(player);
        player.disableSkill= function (all) {};
      }
     }
   });
   };
},precontent:function (){
    
},config:{
   Selection:{
			name:'模式选择',
			intro:'选择计时、血战',
			init:'XueZhan',
			item:{
				GetTime:'计时',
				XueZhan:'血战',
			}
		},
		XueZhan:{
			name:'血战复活次数',
			intro:'选择反贼复活次数',
			init:'twenty_one',
			item:{
				seven:'7',
				twenty_one:'21',
				forty_nine:'49',
				ninety_eight:'98',
				Infinity:'∞',
			}
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
    author:"<div onclick=window.open('https://jq.qq.com/?_wv=1027&k=5TVOR1Z')><span style=\"color: green;text-decoration: underline;font-style: oblique\">点击这里</span></div><span style=\"font-style: oblique\">申请加入qq群【无名杀玩家交流群】</span>",
    diskURL:"",
    forumURL:"",
    version:"1.0",
},files:{"character":[],"card":[],"skill":[]},editable:false}})
