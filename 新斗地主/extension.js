game.import(
	"extension",
	function(lib,game,ui,get,ai,_status){
		return {
			name:"新斗地主",
			content:function (config,pack){
				/*----------------牌堆结构---------------*/
				var cardPack = [
					['spade',1,'juedou'],
					['spade',2,'bagua'],
					['spade',3,'guohe'],
					['spade',4,'guohe'],
					['spade',5,'qinglong'],
					['spade',6,'lebu'],
					['spade',7,'sha'],
					['spade',8,'sha'],
					['spade',9,'sha'],
					['spade',10,'sha'],
					['spade',11,'shunshou'],
					['spade',12,'guohe'],
					['spade',13,'nanman'],
					['spade',1,'shandian','thunder'],
					['spade',2,'cixiong'],
					['spade',3,'shunshou'],
					['spade',4,'shunshou'],
					['spade',5,'jueying'],
					['spade',6,'qinggang'],
					['spade',7,'nanman'],
					['spade',8,'sha'],
					['spade',9,'sha'],
					['spade',10,'sha'],
					['spade',11,'wuxie'],
					['spade',12,'zhangba'],
					['spade',13,'dawan'],
					['spade',1,'guding'],
					['spade',2,'tengjia'],
					['spade',3,'jiu'],
					['spade',4,'sha','thunder'],
					['spade',5,'sha','thunder'],
					['spade',6,'sha','thunder'],
					['spade',7,'sha','thunder'],
					['spade',8,'sha','thunder'],
					['spade',9,'jiu'],
					['spade',10,'bingliang'],
					['spade',11,'tiesuo'],
					['spade',12,'tiesuo'],
					['spade',13,'nanman'],
					['spade',2,'hanbing'],
					['heart',1,'wanjian'],
					['heart',1,'taoyuan'],
					['heart',1,'wuxie'],
					['heart',2,'shan'],
					['heart',2,'shan'],
					['heart',2,'huogong'],
					['heart',3,'tao'],
					['heart',3,'wugu'],
					['heart',3,'sha','fire'],
					['heart',4,'tao'],
					['heart',4,'wugu'],
					['heart',4,'huogong'],
					['heart',5,'qilin'],
					['heart',5,'chitu'],
					['heart',5,'tao'],
					['heart',6,'tao'],
					['heart',6,'lebu'],
					['heart',6,'tao'],
					['heart',7,'tao'],
					['heart',7,'wuzhong'],
					['heart',7,'sha','fire'],
					['heart',8,'tao'],
					['heart',8,'wuzhong'],
					['heart',8,'shan'],
					['heart',9,'tao'],
					['heart',9,'wuzhong'],
					['heart',9,'shan'],
					['heart',10,'sha'],
					['heart',10,'sha'],
					['heart',10,'sha','fire'],
					['heart',11,'sha'],
					['heart',11,'wuzhong'],
					['heart',11,'shan'],
					['heart',12,'tao'],
					['heart',12,'guohe'],
					['heart',12,'shan'],
					['heart',12,'shandian'],
					['heart',13,'shan'],
					['heart',13,'zhuahuang'],
					['heart',13,'wuxie'],
					['club',1,'juedou'],
					['club',1,'liannu'],
					['club',1,'baiyin'],
					['club',2,'sha'],
					['club',2,'bagua'],
					['club',2,'tengjia'],
					['club',2,'renwang'],
					['club',3,'sha'],
					['club',3,'guohe'],
					['club',3,'jiu'],
					['club',4,'sha'],
					['club',4,'guohe'],
					['club',4,'bingliang'],
					['club',5,'sha'],
					['club',5,'dilu'],
					['club',5,'sha','thunder'],
					['club',6,'sha'],
					['club',6,'lebu'],
					['club',6,'sha','thunder'],
					['club',7,'sha'],
					['club',7,'nanman'],
					['club',7,'sha','thunder'],
					['club',8,'sha'],
					['club',8,'sha'],
					['club',8,'sha','thunder'],
					['club',9,'sha'],
					['club',9,'sha'],
					['club',9,'jiu'],
					['club',10,'sha'],
					['club',10,'sha'],
					['club',10,'tiesuo'],
					['club',11,'sha'],
					['club',11,'sha'],
					['club',11,'tiesuo'],
					['club',12,'jiedao'],
					['club',12,'wuxie'],
					['club',12,'tiesuo'],
					['club',13,'jiedao'],
					['club',13,'wuxie'],
					['club',13,'tiesuo'],
					['diamond',1,'juedou'],
					['diamond',1,'zhuge'],
					['diamond',1,'zhuque'],
					['diamond',2,'shan'],
					['diamond',2,'shan'],
					['diamond',2,'tao'],
					['diamond',3,'shan'],
					['diamond',3,'shunshou'],
					['diamond',3,'tao'],
					['diamond',4,'shan'],
					['diamond',4,'shunshou'],
					['diamond',4,'sha','fire'],
					['diamond',5,'shan'],
					['diamond',5,'guanshi'],
					['diamond',5,'sha','fire'],
					['diamond',6,'sha'],
					['diamond',6,'shan'],
					['diamond',6,'shan'],
					['diamond',7,'sha'],
					['diamond',7,'shan'],
					['diamond',7,'shan'],
					['diamond',8,'sha'],
					['diamond',8,'shan'],
					['diamond',8,'shan'],
					['diamond',9,'sha'],
					['diamond',9,'shan'],
					['diamond',9,'jiu'],
					['diamond',10,'sha'],
					['diamond',10,'shan'],
					['diamond',10,'shan'],
					['diamond',11,'shan'],
					['diamond',11,'shan'],
					['diamond',11,'shan'],
					['diamond',12,'tao'],
					['diamond',12,'fangtian'],
					['diamond',12,'huogong'],
					['diamond',12,'wuxie'],
					['diamond',13,'sha'],
					['diamond',13,'zixin'],
					['diamond',13,'hualiu'],
					['diamond',5,'muniu'],
				];
				/*---------------将池----------------*/
				var characterList = [
					"w_caocao",
					"w_guojia",
					"w_simayi",
					"w_zhangliao",
					"w_xiahoudun",
					"w_xuchu",
					"w_lidian",
					"w_zhenji",
					"w_caoang",
					"w_liubei",
					"w_guanyu",
					"w_zhangfei",
					"w_zhaoyun",
					"w_machao",
					"w_zhugeliang",
					"w_huangyueying",
					"w_xushu",
					"w_lifeng",
					"w_sunquan",
					"w_zhouyu",
					"w_ganning",
					"w_lvmeng",
					"w_daqiao",
					"w_sunshangxiang",
					"w_lingcao",
					"w_luxun",
					"w_huanggai",
					"w_lvbu",
					"w_diaochan",
					"w_huatuo",
					"w_yuanshu",
					"w_huaxiong",
					"w_jushou",
					"w_niufu",
					"w_gongsunzan",
					"w_liuxie",
					"w_wangyi",
					"w_zhangchunhua",
					"w_lingtong",
					"w_sunce",
					"w_yuji",
					"w_zuoci",
					"w_liufeng",
				];
				if(lib.brawl){
					/*---------------特效---------------*/
					var skill = {
						_huodong:{
							trigger:{source:'damageEnd'},
							filter:function(event,player){
								var list = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
								return event.source==game.me&&list.randomGet();
							},
							direct:true,
							content:function(){
								event.list = [
									"w_wangyi_skin","w_zhangchunhua_skin","w_daqiao_skin","w_caoang_skin","w_lingtong_skin",
									"w_wangyi_dianjiang","w_zhangchunhua_dianjiang","w_caoang_dianjiang","w_lingtong_dianjiang",
									"w_daqiao_dianjiang",
								].randomGet();
								lib.config.w_Props[event.list].count++;
								game.saveConfig("w_Props",lib.config.w_Props);
								game.warn("获得道具["+lib.config.w_Props[event.list].name+"]×1");
							}
						},
						_firstBlood:{
							audio:'ext:新斗地主:true',
							skillAnimation:true,
							animationStr:'一血•卧龙出山',
							trigger:{global:'firstBlood'},
							filter:function(event,player){
								return _status.currentPhase==player;
							},
							priority:100,
							forced:true,
							content:function(){
								game.playAudio("./extension/新斗地主","_firstBlood1");
								_status.currentPhase.$damagepop('一血➷','unknownx');
							},
						},
						_doubleKill:{
							audio:'ext:新斗地主:true',
							skillAnimation:true,
							animationStr:'双杀•一战成名',
							trigger:{global:'doubleKill'},
							filter:function(event,player){
								return _status.currentPhase==player;
							},
							priority:100,
							forced:true,
							content:function(){
								_status.currentPhase.$damagepop('†双杀†','unknownx');
								if(ui.But&&game.me==_status.currentPhase&&lib.config.But_lvbu==false){
									if(game.me.name=="w_lvbu"&&game.me.hasSkill("w_shenji")){
										game.gainBut("But_lvbu","不败战神");
									}
								}
							},
						},
						_miaoshouhuichun:{
							audio:'ext:新斗地主:true',
							skillAnimation:true,
							animationStr:'♡妙手回春♡',
							animationColor:'recover',
							trigger:{global:'miaoshou'},
							filter:function(event,player){
								return event.player==player;
							},
							priority:100,
							forced:true,
							content:function(){},
						},
						_wushuang:{
							audio:'ext:新斗地主:true',
							skillAnimation:true,
							animationStr:'†无双•万军取首†',
							animationColor:'fire',
							trigger:{source:'damageBegin'},
							filter:function(event,player){
								return event.num>=4;
							},
							priority:-100,
							forced:true,
							content:function(){},
						},
						_diankuang:{
							audio:'ext:新斗地主:true',
							skillAnimation:true,
							animationStr:'癫狂杀戮',
							animationColor:'thunder',
							trigger:{source:'damageBegin'},
							filter:function(event,player){
								return event.num==3;
							},
							priority:-100,
							forced:true,
							content:function(){},
						},
						_yishugaochao:{
							audio:'ext:新斗地主:true',
							skillAnimation:true,
							animationStr:'♡医术高超♡',
							animationColor:'recover',
							trigger:{global:'yishu'},
							filter:function(event,player){
								return event.player==player;
							},
							priority:100,
							forced:true,
							content:function(){},
						},
						_recovertrigger:{
							trigger:{global:'recoverEnd'},
							filter:function(event,player){
								if(_status.currentPhase!=player){
									return event.player!=event.source&&event.source==player;
								}
								return true;
							},
							direct:true,
							content:function(){
								if(_status.currentPhase!=player){
									_status.event.trigger('miaoshou');
								}
								else {
									if(player.storage.yishugaochao==undefined){
										player.storage.yishugaochao = trigger.num;
									}
									else {
										player.storage.yishugaochao+=trigger.num;
									}
									if(player.storage.yishugaochao>=3){
										player.storage.yishugaochao-=3;
										_status.event.trigger('yishu');
									}
								}
							},
							group:'_recovertrigger_Delete',
							subSkill:{
								Delete:{
									trigger:{player:'phaseEnd'},
									direct:true,
									content:function(){
										delete player.storage.yishugaochao;
									}
								}
							}
						},
						_dietrigger:{
							group:['_dietrigger_phaseBegin','_dietrigger_phaseEnd'],
							trigger:{global:'dieBegin'},
							priority:100,
							direct:true,
							filter:function(event,player){
								return _status.currentPhase==player&&event.player!=player;
							},
							content:function(){
								var Trigger = '';
								if(player.storage.killAnimation==0){
									Trigger = 'firstBlood';
								}
								else {
									Trigger = 'doubleKill';
								}
								player.storage.killAnimation++;
								_status.event.trigger(Trigger);
							},
							subSkill:{
								phaseBegin:{
									trigger:{player:'phaseBegin'},
									direct:true,
									content:function(){
										player.storage.killAnimation = 0;
									}
								},
								phaseEnd:{
									trigger:{player:'phaseEnd'},
									direct:true,
									content:function(){
										delete player.storage.killAnimation;
									}
								},
							},
						},
						_chooseTime:{
							trigger:{global:'gameDrawBefore'},
							direct:true,
							content:function(){
								player.forceCountChoose={chooseToUse:15,default:15};
							}
						},
						_changeTranslate:{
							trigger:{global:'init'},
							filter:function(event,player){
								return player==game.zhu;
							},
							direct:true,
							content:function(){
								lib.translate.zhu = '地主';
								lib.translate.fan = '农民';
								game.showIdentity();
							}
						},
						_addZhuState:{
							trigger:{global:'init2'},
							filter:function(event,player){
								return !lib.storage.addZhuState;
							},
							direct:true,
							content:function(){
								lib.storage.addZhuState = true;
								game.zhu.maxHp++;
								game.zhu.hp++;
								game.zhu.update();
								game.zhu.addSkill('w_feiyang');
								game.zhu.addSkill('w_bahu');
							}
						},
						_w_dieBegin:{
							trigger:{player:'dieBegin'},
							priority:-100,
							filter:function(event,player){
								return event.source;
							},
							direct:true,
							content:function(){
								if(trigger.source.stat[trigger.source.stat.length-1].kill==undefined)
									trigger.source.stat[trigger.source.stat.length-1].kill = 1;
								else
									trigger.source.stat[trigger.source.stat.length-1].kill++;
								if(!lib.config.task_kill.finished&&game.me==trigger.source){
									game.saveConfig("task_kill_count",lib.config.task_kill_count+1);
									if(lib.config.task_kill_count>=4){
										game.finishedTask("task_kill","疯狂杀戮");
									}
								}
								trigger.source = false;
							}
						},
						_w_dieAfter:{
							trigger:{global:'dieAfter'},
							priority:30,
							filter:function(event,player){
								return player.identity==event.player.identity;
							},
							direct:true,
							content:function(){
								'step 0'
								var list = ['摸牌'];
								if(player.isDamaged())
									list.push('回血');
								player.chooseControl(list,'取消',function(event,player){
									if(list.length==1)return '摸牌';
									var cards = player.getCards('j');
                                    var judge = false;
                                    for(var i=0;i<cards.length;i++){
                                        if(cards[i].name=='lebu'){
											judge = true;
											break;
                                        }
                                    }
                                    if(_status.currentPhase!=player&&judge)return '回血';
                                    if(player.hp==1)return '回血';
                                    if(player.hasSkillTag('maixie'))return '回血';
                                    return '摸牌';
								});
								'step 1'
								if(result.control=='摸牌')
									player.draw(2);
								else if(result.control=='回血')
									player.recover();
								else
									event.finish();
							}
						},
						w_feiyang:{
							mod:{
								cardUsable:function(card,player,num){
									if(card.name=='sha')return num+1;
								}
							},
							trigger:{player:'phaseBegin'},
							priority:-10,
							forced:true,
							content:function(){
								player.draw();
							}
						},
						w_bahu:{
							trigger:{player:'phaseJudgeBegin'},
							filter:function(event,player){
								return player.countCards('j')&&player.countCards('h')>=2;
							},
							direct:true,
							content:function(){
								'step 0'
								player.chooseToDiscard("触发【跋扈】<p>你可以弃置两张手牌，然后弃置你判定区的一张牌</p>",2).ai=function(card){
									var needDis = player.countCards('h')+2<=player.hp?false:true;
									if(player.countCards('j',{name:'lebu'})){
										if(needDis)return 8-get.value(card);
									}
									if(player.countCards('j',{name:'bingliang'})&&!player.hasSkill("w_tiandu"))
										return 8-get.value(card);
									else 
										return -1;
									return 4-get.value(card);
								};
								'step 1'
								if(result.bool){
									player.logSkill("w_bahu");
									player.discardPlayerCard(player,'j',1,true);
								}
								else
									event.finish();
							}
						}
					};
					var translate = {
						w_feiyang:'飞扬',
						w_bahu:'跋扈',
						_firstBlood:'一血',
						_doubleKill:'双杀',
						_miaoshouhuichun:'妙手',
						_yishugaochao:'医术',
						_wushuang:'无双',
						_diankuang:'癫狂',
						"w_feiyang_info":'锁定技,准备阶段,你摸一张牌;出牌阶段,你使用[杀]的次数上限+1',
						"w_bahu_info":'判定阶段开始时,若你的判定区里有牌,则你可以弃置两张手牌，然后弃置你判定区里的一张牌',
					};		
					if(config.But){
						skill._over = {
							trigger:{player:'dieBegin'},
							direct:true,
							priority:-105,
							content:function(){
								'step 0'
								event.over = false;
								if(player==game.zhu){
									if(game.me!=player){
										game.changeExp(12);
										game.saveConfig("w_win",lib.config.w_win+1);
										game.saveConfig("w_fan_win",lib.config.w_fan_win+1);
										event.over=true;
									}
									else {
										game.changeExp(2);
										game.saveConfig("w_fare",lib.config.w_fare+1);
										game.saveConfig("w_zhu_fare",lib.config.w_zhu_fare+1);
									}
								}
								else {
									if(!game.hasPlayer(function(current){
										return current!=player&&current!=game.zhu;
									})){
										if(game.zhu==game.me){
											game.changeExp(6);
											game.saveConfig("w_win",lib.config.w_win+1);
											game.saveConfig("w_zhu_win",lib.config.w_zhu_win+1);
											event.over=true;
										}
										else {
											game.changeExp(4);
											game.saveConfig("w_fare",lib.config.w_fare+1);
											game.saveConfig("w_fan_fare",lib.config.w_fan_fare+1);
										}
									}
									else 
										event.finish();
								}
								'step 1'
								game.saveConfig("w_fare",lib.config.w_fare-1);
								if(game.zhu==game.me){
									game.saveConfig("w_zhu_fare",lib.config.w_zhu_fare-1);
									if(lib.config.w_goldTicket>=600)game.changeGoldTicket(600,false);
								}
								else {
									game.saveConfig("w_fan_fare",lib.config.w_fan_fare-1);
									if(lib.config.w_goldTicket>=600)game.changeGoldTicket(300,false);
								}
								if(event.over){
									if(lib.config.w_goldTicket>=600){
										if(game.me==game.zhu){
											game.changeGoldTicket(600);
										}
										else {
											game.changeGoldTicket(300);
										}
									}
									if(ui.But){
										if(lib.storage.w_yijue>=4){
											game.gainBut("But_guanyu","忠义果敢");
											delete lib.storage.w_yijue;
										}
										if(lib.storage.w_tishen>=3){
											game.gainBut("But_zhangfei","当阳怒吼");
											delete lib.storage.w_tishen;
										}
										if(lib.storage.w_tieqi>=4){
											game.gainBut("But_machao","西凉铁骑");
											delete lib.storage.w_tieqi;
										}
										if(lib.storage.w_zhiheng>=5){
											game.gainBut("But_sunquan","吴王光耀");
											delete lib.storage.w_zhiheng;
										}
										if(lib.storage.w_botu>=3){
											game.gainBut("But_lvmeng","白衣渡江");
											delete lib.storage.w_botu;
										}
										if(lib.storage.w_kurou>=3){
											game.gainBut("But_huanggai","赴汤蹈火");
											delete lib.storage.w_kurou;
										}
										if(lib.storage.w_xiaoji>=5){
											game.gainBut("But_sunshangxiang","乱世巾帼");
											delete lib.storage.w_xiaoji;
										}
										if(lib.storage.w_dujin>=5){
											game.gainBut("But_lingcao","破贼校尉");
											delete lib.storage.w_dujin;
										}
										if(lib.storage.w_lijian>=3){
											game.gainBut("But_diaochan","闭月羞花");
											delete lib.storage.w_lijian;
										}
										if(lib.storage.w_puji>=3){
											game.gainBut("But_huatuo","药到病除");
											delete lib.storage.w_puji;
										}
										if(game.me==game.zhu&&game.me.name=="w_huaxiong"&&lib.config.But_huaxiong==false){
											game.gainBut("But_huaxiong","飞扬跋扈");
										}
										if(lib.storage.w_kundou>=3){
											game.gainBut("But_niufu","汉中郎将");
											delete lib.storage.w_kundou;
										}
										if(lib.storage.w_tianming>=4&&lib.storage.w_mizhao>=4){
											game.gainBut("But_liuxie","真命天子");
											delete lib.storage.w_tianming;
											delete lib.storage.w_mizhao;
										}
									}
									if(true){
										if(lib.config.task_win_count<4){
											game.saveConfig("task_win_count",lib.config.task_win_count+1);
											if(!lib.config.task_win1.finished&&lib.config.task_win_count>=1){
												game.finishedTask("task_win1","初战告捷");
											}
											if(!lib.config.task_win2.finished&&lib.config.task_win_count>=2){
												game.finishedTask("task_win2","捷报再传");
											}
											if(!lib.config.task_win3.finished&&lib.config.task_win_count>=3){
												game.finishedTask("task_win3","战无不胜");
											}
											if(!lib.config.task_win4.finished&&lib.config.task_win_count>=4){
												game.finishedTask("task_win4","国士无双");
											}
										}
										if(!lib.config.task_doublewin.finished){
											game.saveConfig("task_doublewin_count",lib.config.task_doublewin_count+1);
											if(lib.config.task_doublewin_count>=2){
												game.finishedTask("task_doublewin","常胜将军");
											}
										}
									}
								}
								else {
									if(lib.config.w_goldTicket>=600){
										if(game.me==game.zhu){
											game.changeGoldTicket(-600);
										}
										else {
											game.changeGoldTicket(-300);
										}
									}
									if(true){
										if(!lib.config.task_doublewin.finished){
											game.saveConfig("task_doublewin_count",0);
										}
									}
								}
							}
						}
					};
					lib.brawl.newWar = {
						name:"<span style='font-size:84%;'>欢乐斗地主</span>",
						mode:'identity',
						func:{
							setDivPos:function(obj,a,b,c,d){
								if(a){obj.style.width=a}
								if(b){obj.style.height=b}
								if(c){obj.style.left=c}
								if(d){obj.style.top=d}
							},
							Page:{
								first:[
									"div12","div11","div13"
								],
								second:[
									"div20","div21","div22",
									"div50","div23","div24",
									"div25","div26","div27"
								],
								second_window:[
									"div30","div31","div34",
									"div32","div33","div35",
									"div36",
								],
								second_window_window:[
									"div40","div32_1","div33_1",
									"div34_1",
								],
							},
							div40_open:function(){
								var obj = document.getElementById("div40");
								var div40_innerHTML_add = function(){
									var str = "",order=0;
									for(var i in lib.config.w_header2){
										if(lib.config.w_header2[i]){
											var click = "onclick=game.changeHeader('"+i+"')";
											str += "<div id='t"+order+"' style='position:absolute;width:18%;height:80%;top:10%;left:"+(20*order+2)+"%;' "+click+">"+
												"<img src='"+lib.assetURL+"extension/新斗地主/"+i+".jpg' width=100% height=100% ondragstart='return false;' style='cursor:pointer;'  />"+
											"</div>";
											order++;
										}
									}
									return str;
								};
								var allcount = 0,hascount=0;
								for(var i in lib.config.w_header2){
									allcount++;
									if(lib.config.w_header2[i]){
										hascount++;
									}
								}
								obj.innerHTML = "<span style='position:absolute;color:#ffe14c;font-size:150%;font-family:lishu;top:5%;left:42.5%;'><b>选择头像</b><font>("+hascount+"/"+allcount+")</font></span>"+
								"<div style='position:absolute;width:90%;height:70%;top:22.5%;left:5%;overflow:auto;'>"+
									div40_innerHTML_add()+
								"</div>";
								obj.style.display="";
							}
						},
						character:{
							character:{
								"w_caocao":["male","wei",4,["w_jianxiong","w_weiwu"],['zhu',"ext:新斗地主/w_caocao.jpg"]],
								"w_guojia":["male","wei",3,["w_tiandu","w_yiji"],["ext:新斗地主/w_guojia.jpg"]],
								"w_xiahoudun":["male","wei",4,["w_ganglie","w_qingjian"],["ext:新斗地主/w_xiahoudun.jpg"]],
								"w_simayi":["male","wei",3,["w_guicai","w_fankui"],["ext:新斗地主/w_simayi.jpg"]],
								"w_zhangliao":["male","wei",4,["w_tuxi","w_zhenwei"],["ext:新斗地主/w_zhangliao.jpg"]],
								"w_xuchu":["male","wei",4,["w_luoyi","w_xiechan"],["ext:新斗地主/w_xuchu.jpg"]],
								"w_zhenji":["female","wei",3,["w_luoshen","w_qingguo"],["ext:新斗地主/w_zhenji.jpg"]],	
								"w_lidian":["male","wei",3,["w_xunxun","w_wangxi"],["ext:新斗地主/w_lidian.jpg"]],
								"w_caoang":["male","wei",4,["w_kaikang"],["ext:新斗地主/w_caoang.jpg"]],
								"w_sunquan":["male","wu",4,["w_zhiheng","w_wangzi"],['zhu',"ext:新斗地主/w_sunquan.jpg"]],
								"w_zhouyu":["male","wu",3,["w_yingzi","w_fanjian"],["ext:新斗地主/w_zhouyu.jpg"]],
								"w_ganning":["male","wu",4,["w_qixi","w_fenwei"],["ext:新斗地主/w_ganning.jpg"]],
								"w_lvmeng":["male","wu",4,["w_keji","w_botu"],["ext:新斗地主/w_lvmeng.jpg"]],
								"w_huanggai":["male","wu",4,["w_kurou","w_zhaxiang"],["ext:新斗地主/w_huanggai.jpg"]],
								"w_luxun":["male","wu",3,["reqianxun","w_lianying"],["ext:新斗地主/w_luxun.jpg"]],
								"w_daqiao":["female","wu",3,["w_guose","liuli"],["ext:新斗地主/w_daqiao.jpg"]],
								"w_sunshangxiang":["female","wu",3,["w_xiaoji","w_jieyin"],["ext:新斗地主/w_sunshangxiang.jpg"]],
								"w_lingcao":["male","wu",4,["w_dujin"],["ext:新斗地主/w_lingcao.jpg"]],
								"w_lvbu":["male","qun",4,["w_wushuang","w_zhanshen"],['zhu',"ext:新斗地主/w_lvbu.jpg"]],
								"w_huatuo":["male","qun",3,["w_puji","jijiu"],["ext:新斗地主/w_huatuo.jpg"]],
								"w_diaochan":["female","qun",3,["w_biyue","w_lijian"],["ext:新斗地主/w_diaochan.jpg"]],
								"w_yuanshu":["male","qun",4,["w_yongsi","w_weidi"],["ext:新斗地主/w_yuanshu.jpg"]],
								"w_huaxiong":["male","qun",6,["w_shiyong"],["ext:新斗地主/w_huaxiong.jpg"]],
								"w_gongsunzan":["male","qun",4,["w_xiaoqiu","w_yicong"],["ext:新斗地主/w_gongsunzan.jpg"]],
								"w_niufu":["male","qun",4,["w_kundou"],["ext:新斗地主/w_niufu.jpg"]],
								"w_jushou":["male","qun",3,["w_jianying","w_shibei"],["ext:新斗地主/w_jushou.jpg"]],
								"w_liuxie":["male","qun",3,["w_tianming","w_mizhao"],["ext:新斗地主/w_liuxie.jpg"]],
								"w_liubei":["male","shu",4,["w_rende","w_renwang"],['zhu',"ext:新斗地主/w_liubei.jpg"]],
								"w_guanyu":["male","shu",4,["w_wusheng","w_yijue"],["ext:新斗地主/w_guanyu.jpg"]],
								"w_zhangfei":["male","shu",4,["w_paoxiao","w_tishen"],["ext:新斗地主/w_zhangfei.jpg"]],
								"w_zhaoyun":["male","shu",4,["w_longdan","w_shuiren"],["ext:新斗地主/w_zhaoyun.jpg"]],
								"w_machao":["male","shu",4,["mashu","w_tieqi"],["ext:新斗地主/w_machao.jpg"]],
								"w_zhugeliang":["male","shu",3,["w_huoji","w_bazhen","w_kanpo"],["ext:新斗地主/w_zhugeliang.jpg"]],
								"w_huangyueying":["female","shu",3,["w_jizhi","w_qicai"],["ext:新斗地主/w_huangyueying.jpg"]],
								"w_xushu":["male","shu",3,["w_zhuhai","w_jianyan"],["ext:新斗地主/w_xushu.jpg"]],
								"w_lifeng":["male","shu",3,["w_tunchu","w_shuliang"],["ext:新斗地主/w_lifeng.jpg"]],
								"w_wangyi":["female","wei",3,["w_zhenlie","w_miji"]],
								"w_zhangchunhua":["female","wei",3,["w_jueqing","w_shangshi"]],
								"w_lingtong":["male","wu",4,["w_xuanfeng"]],
								"w_sunce":["male","wu",4,["w_jiang","w_hunzi","w_zhiba"]],
								"w_yuji":["male","qun",3,["w_qianhuan"]],
								"w_zuoci":["male","qun",3,["w_xinsheng"]],
								"w_liufeng":["male","shu",4,["w_xiansi"]],
							},
							translate:{
								"w_caocao":"曹操",
								"w_guojia":"郭嘉",
								"w_xiahoudun":"夏侯惇",
								"w_simayi":"司马懿",
								"w_zhangliao":"张辽",
								"w_xuchu":"许褚",
								"w_zhenji":"甄姬",
								"w_lidian":"李典",
								"w_caoang":"曹昂",
								"w_sunquan":"孙权",
								"w_zhouyu":"周瑜",
								"w_ganning":"甘宁",
								"w_lvmeng":"吕蒙",
								"w_huanggai":"黄盖",
								"w_luxun":"陆逊",
								"w_daqiao":"大乔",
								"w_sunshangxiang":"孙尚香",
								"w_lingcao":"凌操",
								"w_yuanshao":"袁绍",
								"w_lvbu":"吕布",
								"w_huatuo":'华佗',
								"w_diaochan":'貂蝉',
								"w_yuanshu":'袁术',
								"w_huaxiong":'华雄',
								"w_gongsunzan":'公孙瓒',
								"w_niufu":'牛辅',
								"w_jushou":'沮授',
								"w_wangyun":'王允',
								"w_liuxie":'刘协',
								"w_liubei":'刘备',
								"w_guanyu":'关羽',
								"w_zhangfei":'张飞',
								"w_zhaoyun":'赵云',
								"w_machao":'马超',
								"w_zhugeliang":'诸葛亮',
								"w_huangyueying":'黄月英',
								"w_xushu":'徐庶',
								"w_wangping":'王平',
								"w_lifeng":'李丰',
								"w_wangyi":'王异',
								"w_zhangchunhua":"张春华",
								"w_lingtong":"凌统",
								"w_sunce":"孙策",
								"w_yuji":"于吉",
								"w_zuoci":"左慈",
								"w_liufeng":"刘封",
								w_jianxiong:'奸雄',
								w_weiwu:'魏武',
								w_yiji:'遗计',
								w_tiandu:'天妒',
								w_ganglie:'刚烈',
								w_qingjian:'清俭',
								w_fankui:'反馈',
								w_guicai:'鬼才',
								w_tuxi:'突袭',
								w_zhenwei:'镇威',
								w_luoyi:'裸衣',
								w_xiechan:'挟缠',
								w_luoshen:'洛神',
								w_xunxun:'恂恂',
								w_kaikang:'慷忾',
								w_wangzi:'王姿',
								w_yingzi:'英姿',
								w_fanjian:'反间',
								w_fenwei:'奋威',
								w_keji:'克己',
								w_botu:'博图',
								w_kurou:'苦肉',
								w_zhaxiang:'诈降',
								w_guose:'国色',
								w_liuli:'琉璃',
								w_xiaoji:'枭姬',
								w_jieyin:'结姻',
								w_dujin:'独进',
								w_luanji:'乱击',
								w_jianzhen:'箭阵',
								w_wushuang:'无双',
								w_zhanshen:'战神',
								w_shenji:'神戟',
								w_puji:'普济',
								w_biyue:'闭月',
								w_lijian:'离间',
								w_yongsi:'庸肆',
								w_weidi:'伪帝',
								w_shiyong:'恃勇',
								w_yicong:'义从',
								w_xiaoqiu:'骁酋',
								w_kundou:'困斗',
								w_jianying:'渐营',
								w_shibei:'矢北',
								w_lianji:'连计',
								w_jingong:'矜功',
								w_tianming:'天命',
								w_mizhao:'密诏',
								w_mouchen:'谋逞',
								w_rende:'仁德',
								w_hanyi:'汉裔',
								w_renwang:'汉裔',
								w_wusheng:'武圣',
								w_yijue:'义绝',
								w_paoxiao:'咆哮',
								w_tishen:'替身',
								w_longdan:'龙胆',
								w_longdanSha:'龙胆•杀',
								w_longdanShan:'龙胆•闪',
								w_shuiren:'随仁',
								w_tieqi:'铁骑',
								w_huoji:'火计',
								w_kanpo:'看破',
								w_bazhen:'八阵',
								w_jizhi:'集智',
								w_qicai:'奇才',
								w_zhuhai:'诛害',
								w_jianyan:'荐言',
								w_feijiang:'飞将',
								w_qingguo:'倾国',
								w_wangxi:'忘隙',
								w_zhiheng:'制衡',
								w_qixi:'奇袭',
								w_guicai:'鬼才',
								w_lianying:'连营',
								w_tunchu:"屯储",
								w_shuliang:"输粮",
								w_renjie:"忍戒",
								w_zhenlie:"贞烈",
								w_miji:"秘计",
								w_jueqing:"绝情",
								w_shangshi:"伤势",
								w_xiansi:"陷嗣",
								w_qiangzhi:"强识",
								w_xiantu:"献图",
								w_xuanfeng:"旋风",
								w_moukui:"谋溃",
								w_huaiyi:"怀异",
								w_jiang:"激昂",
								w_hunzi:"魂姿",
								w_yinghun:"英魂",
								w_zhiba:"制霸",
								w_qianhuan:"千幻",
								w_xinsheng:"新身",
								w_xiansi:"陷嗣",
								"w_xiansi_info":"准备阶段,你可以将至多两名角色的各一张牌置于你的武将牌旁称为'逆';当其他角色需要对你使用[杀]时,其可以弃置你的两张'逆'视为对你使用一张[杀]",
								"w_xinsheng_info":"<font color=#fc0>锁定技</font> 游戏开始时、回合开始之前或你受到伤害后,你观看两张未上场的武将牌,你将体力上限调整为这两张武将牌的体力上限之和,然后选择其中至多两项非特殊技能,直至你的下个回合开始,你视为拥有这些技能",
								"w_qianhuan_info":"当一名角色受到伤害后,其可以将一张牌置于你的武将牌上称为'幻';当一名角色成为基本牌或锦囊牌的唯一目标时,你可以将一张'幻'置入弃牌堆并令此牌失效",
								"w_jiang_info":"<font color=#fc0>锁定技</font> 当你使用或被使用红色的[杀]或[决斗]时,你摸一张牌并令此牌造成的伤害+1",
								"w_hunzi_info":"<font color=#fc0>觉醒技</font> 准备阶段,若你的体力值为场上最少(或之一),你需减一点体力上限并获得技能[英魂]和[英姿]",
								"w_yinghun_info":"准备阶段,你可以令一名其他角色摸x+1张牌然后弃置一张牌或摸一张牌然后弃置x+1张牌(x为你装备区牌的数量的一半,向上取整)",
								"w_zhiba_info":"<font color=#fc0>地主技</font> 出牌阶段限一次,你可以与一名其他角色拼点,若你赢,你视为对其使用一张[决斗],若你没赢,其弃置你一张牌",
								"w_renjie_info":"<font color=#fc0>锁定技</font> 每当你受到伤害后或于弃牌阶段失去牌后,你获得等量的'忍'标记",
								"w_tunchu_info":"摸牌阶段摸牌时,若你没有'粮',你可以额外摸两张牌,然后将任意张手牌置于你的武将牌上,称为'粮';若你的武将牌上有'粮',则你不能使用[杀]",
								"w_shuliang_info":"一名角色的回合结束时,若其手牌数小于体力值,你可以将一张'粮'置入弃牌堆,令该角色摸两张牌",
								"w_lianying_info":'当你失去最后的手牌时,你可以令至多x名角色各摸一张牌(x为失去的手牌数)',
								'w_jianxiong_info':'当你受到伤害后,你可以获得对你造成伤害的牌或摸x张牌(x为伤害数)',
								'w_weiwu_info':'<font color=#fc0>地主技</font> <font color=#fc0>限定技</font> 回合结束时,你可以进行一个额外的回合',
								"w_yiji_info":'每当你受到一点伤害后,你可以观看牌堆顶的两张牌并将其交给任意角色',
								'w_ganglie_info':'每当你受到一次伤害后,你可以进行一次判定,若结果为:黑色:你获得一名其他角色的一张牌;红色:你对一名其他角色造成一点伤害',
								'w_qingjian_info':'当你于摸牌阶段外获得牌时,你可以将其中任意张牌置于武将牌上;当前回合结束时,若你武将牌上有牌,你需将其交给任意名其他角色',
								'w_fankui_info':'每当你受到一点伤害后,你可以获得伤害来源的一张牌',
								'w_tuxi_info':'摸牌阶段,你可以少摸一张牌,若如此做,你获得一名其他角色的一张手牌',
								'w_zhenwei_info':'<font color=#fc0>登场技</font> 游戏开始时,你获得所有其他角色的各一张手牌',
								"w_luoyi_info":'出牌阶段开始时,你可以弃置一张装备牌,若如此做,你可以弃置场上的一张牌,然后此阶段以你为伤害来源的[杀]和[决斗]造成的伤害+1',
								"w_xiechan_info":'<font color=#fc0>限定技</font> 出牌阶段,你可以与一名其他角色拼点,若你赢,你视为对该角色使用一张[决斗];若你没赢,你结束出牌',
								"w_luoshen_info":'准备阶段,你可以进行一次判定,若结果为黑色,则你可以重复此流程;你获得此阶段所有的黑色判定牌',
								"w_xunxun_info":'摸牌阶段开始时,你可以观看牌堆顶的四张牌,将其中两张以任意顺序置于牌堆顶,将剩余的牌以任意顺序置于牌堆底',
								"w_kaikang_info":'当你距离1以内的角色成为[杀]的目标后,你可以摸一张牌并将一张牌交给该角色,若此牌为装备牌,则该角色可以使用之',
								"w_wangzi_info":'<font color=#fc0>地主技</font> <font color=#fc0>锁定技</font> 你的手牌上限+x(x为农民数量)',
								"w_yingzi_info":'<font color=#fc0>锁定技</font> 摸牌阶段,你额外摸一张牌;你的手牌上限等于你的体力上限',
								"w_fanjian_info":'出牌阶段限一次,你可以将一张手牌置于牌堆顶并令一名其他角色选择一种花色,然后该角色摸一张牌并展示之,若花色不同,则该角色失去一点体力',
								"w_fenwei_info":'<font color=#fc0>限定技</font> 当一张锦囊牌指定了至少两名角色为目标时，你可以令此牌对其中任意名角色无效',
								"w_keji_info":'<font color=#fc0>锁定技</font> 你的手牌上限为x(x为场上所有角色的体力值之和)',
								"w_botu_info":'回合结束时,若你于此回合内使用过四种不同花色的牌,则你可以进行一个额外的回合',
								"w_kurou_info":'出牌阶段限一次,你可以弃置一张牌然后失去一点体力',
								"w_zhaxiang_info":'<font color=#fc0>锁定技</font> 每当你失去一点体力后,你摸三张牌;若此时为你的出牌阶段,则直至当前回合结束,你使用[杀]的次数上限+1,你使用红色[杀]时无距离限制且不可被[闪]响应',
								"w_guose_info":'出牌阶段限一次,你可以将一张方片牌当[乐不思蜀]使用或弃置一张方片牌并弃置场上的一张[乐不思蜀],若如此做,你摸一张牌',
								"w_liuli_info":'当你成为[杀]的目标时,你可以弃置一张牌将此[杀]转移给你攻击范围内除使用者外的一名其他角色',
								"w_xiaoji_info":'每当你失去装备区的一张牌后,你可以摸两张牌',
								"w_jieyin_info":'出牌阶段限一次,你可以弃置两张手牌并选择一名男性角色,你与其各回复一点体力',
								"w_dujin_info":'摸牌阶段,你可以额外摸x+1张牌(x为你装备区牌的数量,向下取整)',
								"w_luanji_info":'出牌阶段限四次,你可以将两张相同花色的手牌当[万箭齐发]使用,此牌结算后,你摸一张牌',
								"w_jianzhen_info":'<font color=#fc0>地主技</font> <font color=#fc0>登场技</font> 游戏开始时,你视为使用x张[万箭齐发](x为当前场上势力数)',
								"w_wushuang_info":'<font color=#fc0>锁定技</font> 你使用的[杀]或[决斗]需要两张[闪]或[杀]响应',
								"w_zhanshen_info":'<font color=#fc0>地主技</font> <font color=#fc0>觉醒技</font> 准备阶段,若你已受伤,则你减一点体力上限并弃置装备区的武器牌,然后获得技能[神戟]和[马术]',
								"w_shenji_info":'<font color=#fc0>锁定技</font> 出牌阶段,你使用[杀]的次数上限+1;若你没有装备武器,则你使用[杀]时可以指定至多两名目标;你可以重铸武器牌',
								"w_puji_info":'出牌阶段限一次,你可以弃置你和与你不同阵营的所有其他角色的各一张牌,被弃置黑桃牌的角色各摸一张牌',
								"w_biyue_info":'回合结束时,你可以摸一张牌',
								"w_lijian_info":'出牌阶段限一次,你可以弃置一张牌,令一名男性角色视为对另一名男性角色使用一张[决斗](不可被[无懈可击]响应)',
								"w_yongsi_info":'<font color=#fc0>锁定技</font> 摸牌阶段,你额外摸x张牌;弃牌阶段开始时,你弃置x张牌(不足则全弃)(x为场上势力数)',
								"w_weidi_info":'<font color=#fc0>农民技</font> <font color=#fc0>锁定技</font> 你视为拥有当前地主的地主技',
								"w_shiyong_info":'<font color=#fc0>锁定技</font> 摸牌阶段你少摸一张牌,视为使用一张[杀](无距离限制)',
								"w_yicong_info":'<font color=#fc0>农民技</font> <font color=#fc0>锁定技</font> 你的进攻距离和防御距离+1',
								"w_xiaoqiu_info":'当你使用黑色[杀]对目标角色造成伤害后,你可以弃置目标角色的一张牌',
								"w_kundou_info":'<font color=#fc0>锁定技</font> 与你相同阵营的其他角色受到大于1的伤害时,令此伤害改为1;与你不同阵营的角色摸牌阶段摸牌时,若其已受伤,令摸牌数-1',
								"w_jianying_info":'当你于出牌阶段使用牌时,若此牌与你此阶段使用的上一张牌花色或点数相同,则你可以摸一张牌',
								"w_shibei_info":'<font color=#fc0>锁定技</font> 当你受到伤害后,若为你此回合第一次受伤,则你回复一点体力,否则你失去一点体力',
								"w_lianji_info":'出牌阶段限一次,你可以交给一名其他角色一张[杀]或黑色锦囊牌,并令该角色使用牌堆中的随机一张武器牌.然后该角色选择一项:1.对除你以外的角色使用该牌,并将装备区里的武器牌交给该牌的一个目标角色;2.视为你对其使用此牌,并将装备区内的武器牌交给你',
								"w_jingong_info":'出牌阶段限一次,你可以将一张装备牌或[杀]当一张随机锦囊牌使用(三选一),然后本回合的结束阶段,若你于本回合内未造成过伤害,你失去1点体力',
								"w_tianming_info":'当你成为杀的目标后,你可以弃置两张牌(不足则全弃,无牌则不弃),然后摸两张牌;若此时全场体力值最多的角色仅有一名(且不是你),该角色也可以如此做',
								"w_mizhao_info":'出牌阶段限一次,你可以将所有手牌(至少一张)交给一名其他角色.若如此做,你令该角色与你指定的另一名有手牌的角色拼点.视为拼点赢的角色对没赢的角色使用一张杀',
								"w_mouchen_info":'<font color=#fc0>觉醒技</font> 当其他角色使用因[连计]交给其的牌累计造成伤害达到3点后,你失去技能[连计],然后获得技能[矜功]',
								"w_rende_info":'出牌阶段,你可以将任意张手牌交给一名其他角色,若你于此阶段内给出的牌首次达到两张或更多,你可以视为使用一张基本牌',
								"w_hanyi_info":'<font color=#fc0>地主技</font> <font color=#fc0>锁定技</font> ',
								"w_renwang_info":'<font color=#fc0>地主技</font> 当其他角色于其回合内对你使用第二张或更多的[杀]或普通锦囊时,你可弃置该角色的一张牌',
								"w_wusheng_info":'你可以将一张红色牌当[杀]使用或打出',
								"w_yijue_info":'出牌阶段限一次,你可以与一名其他角色拼点,若你赢,则该角色的非锁定技失效且不能使用或打出手牌直至当前回合结束,若你没赢,你可以令该角色回复一点体力',
								"w_paoxiao_info":'<font color=#fc0>锁定技</font> 出牌阶段,你使用[杀]无次数限制',
								"w_tishen_info":'<font color=#fc0>限定技</font> 回合开始时,你可以将体力值回复至与你上回合结束时的体力值相等,然后你摸x张牌(x为你以此法回复的体力值)',
								"w_longdan_info":'你可以将[杀]当[闪],[闪]当[杀]使用或打出',
								"w_shuiren_info":'<font color=#fc0>限定技</font> 出牌阶段,你可以令一名角色摸三张牌并回复一点体力',
								"w_tieqi_info":'当你使用[杀]指定目标后,你可以进行一次判定并令该角色的非锁定技能失效直至当前回合结束;然后除非该角色弃置一张与判定结果相同花色的牌,否则此[杀]不可被[闪]响应',
								"w_tiandu_info":'当你的判定牌生效后,你可以获得之',
								"w_huoji_info":'出牌阶段限两次,你可以将一张红色手牌当[火烧连营]使用',
								"w_kanpo_info":'你可以将一张黑色牌当[无懈可击]使用',
								"w_bazhen_info":'<font color=#fc0>锁定技</font> 若你没有装备防具,则视为你装备着[八卦阵]',
								"w_jizhi_info":'当你使用普通锦囊牌时,你可以摸一张牌',
								"w_qicai_info":'<font color=#fc0>锁定技</font> 你使用锦囊牌时无距离限制,你的手牌上限+1',
								"w_zhuhai_info":'其他角色的回合结束时,若该角色于此回合造成过伤害,则你可以对该角色使用一张[杀]',
								"w_jianyan_info":'出牌阶段限一次,你可以声明一种牌的类别或颜色,然后依次从牌堆顶亮出一张牌,直至亮出你声明的牌,你将此牌交给一名男性角色,将其余的牌置入弃牌堆',
								"w_feijiang_info":'当你攻击范围内的其他角色成为[杀]的目标时,你可以弃置一张基本牌,将此杀转移给你,若你使用[闪]抵消此杀,则你将手牌补至体力上限',
								"w_qingguo_info":'你可以将一张黑色手牌当[闪]使用或打出',
								"w_wangxi_info":'每当你对其他角色造成一点伤害或受到其他角色造成的一点伤害后,你可以与该角色各摸一张牌',
								"w_zhiheng_info":'出牌阶段限一次,你可以弃置任意张牌,然后摸等量的牌',
								"w_qixi_info":'你可以将一张黑色牌当[过河拆桥]使用',
								"w_guicai_info":'一名角色的判定牌生效前,你可以打出一张牌替代之',
								"w_zhenlie_info":"当你成为其他角色使用的[杀]或普通锦囊的目标时,你可以失去体力并弃置使用者的一张牌,然后令此牌无效",
								"w_miji_info":"回合结束时,若你已受伤,你可以摸x张牌(x为你已损失的体力值),然后你可以将等量的手牌交给一名其他角色",
								"w_jueqing_info":"<font color=#fc0>锁定技</font> 你即将造成的伤害均视为体力流失",
								"w_shangshi_info":"当你的手牌数小于x时,你可以立即将手牌补至x张(x为你已损失的体力值)",
								"w_xiansi_info":"准备阶段,你可以将至多两名角色的各一张牌置于你的武将牌上称为'逆';当其他角色需要对你使用[杀]时,其可以弃置你的两张[逆]视为对你使用一张[杀]",
								"w_qiangzhi_info":"出牌阶段开始时,你可以展示一名其他角色的一张手牌,若如此做,每当你于此阶段使用与展示的牌类别相同的手牌时,你可以摸一张牌",
								"w_xiantu_info":"其他角色的出牌阶段开始时,你可以摸两张牌并将两张牌交给该角色,若如此做,此阶段结束时,若该角色未于此阶段内杀死过一名角色,则你失去一点体力",
								"w_xuanfeng_info":"每当你失去一张装备区的牌或于弃牌阶段弃牌时,你可以选择一项:1.弃置一名其他角色的一张牌;2.视为使用一张[杀]",
								"w_moukui_info":"当你使用[杀]指定目标后,你可以选择一项:1.摸一张牌;2.弃置目标角色的一张牌;若如此做,此[杀]被[闪]抵消时,该角色弃置你一张牌",
								"w_huaiyi_info":"出牌阶段限一次,你可以展示所有手牌,若其中含有至少两种不同颜色,你可以选择弃置其中一种颜色的牌,然后获得至多x名其他角色的各一张牌",
							},
						},
						showcase:function(init){
							var func = lib.brawl.newWar.func;
							var div00 = ui.create.div();
							div00.id="div00";
							var div10 = ui.create.div();
							div10.id="div10";
							var div11 = ui.create.div();
							div11.id="div11";
							var div12 = ui.create.div();
							div12.id="div12";
							var div20 = ui.create.div();
							div20.id="div20";
							
							div00.style["background-color"] = "rgba(80,80,80,1)";
							func.setDivPos(div00,"80%","100%","10%","-15%");
							div10.style["background-color"] = "rgba(0,0,0,0.5)";
							func.setDivPos(div10,"78.4%","98%","10.75%","-14%");
							div10.style.background = "url('"+lib.assetURL+"extension/新斗地主/background_0.jpg')";
							div11.style["background-color"] = "rgba(80,80,80,0.5)";
							func.setDivPos(div11,"80%","4%","10%","81%");
							div11.innerHTML = "<span style='color:#FF0;font-size:80%'>版本号：v1.0  更新日期：2017-08-22  作者：橙续缘</span>";
							func.setDivPos(div12,"80%","20%","10%","55%");
							div12.style["text-align"] = "center";
							div12.innerHTML = "<span style='color:#FC0;font-family:lishu;font-size:350%;'><b>欢乐斗地主</b></span><hr width=94% color=rgb(80,80,0)/>";
							var div13 = ui.create.div();
							div13.id="div13";
							func.setDivPos(div13,"80%","5%","10%","72.5%");
							div13.style["letter-spacing"] = "2px";
							div13.style["font-size"] = "80%";
							div13.style.cursor = "pointer";
							div13.innerHTML = "[点击进入主页]";
							div13.onclick = function(){
								var Page = [];
								Page = func.Page.first;
								for(var i=0;i<Page.length;i++){
									var id = Page[i];
									document.getElementById(id).style.display="none";
								}
								div10.style.background = "url('"+lib.assetURL+"extension/新斗地主/w_index.jpg')";
								div10.style["background-size"] = "cover";
								Page = func.Page.second;
								for(var i=0;i<Page.length;i++){
									var id = Page[i];
									document.getElementById(id).style.display="";
								}
							};
							div20.style.display = "none";
							func.setDivPos(div20,"20%","10%","15%","30%");
							div20.style["background-color"] = "#897674";
							div20.style["border"] = "5px solid #a99694";
							div20.style["font-size"] = "150%";
							div20.style["letter-spacing"] = "2px";
							div20.style.cursor = "pointer";
							div20.innerHTML = "<span style='font-family:lishu;line-height:140%;'><b>个人资料</b></span>";
							var div21 = ui.create.div();
							div21.id="div21";
							div21.style.display = "none";
							func.setDivPos(div21,"20%","10%","15%","50%");
							div21.style["background-color"] = "#897674";
							div21.style["border"] = "5px solid #a99694";
							div21.style["font-size"] = "150%";
							div21.style["letter-spacing"] = "2px";
							div21.style.cursor = "pointer";
							div21.innerHTML = "<span style='font-family:lishu;line-height:140%;'><b>返回封面</b></span>";
							var div22 = ui.create.div();
							div22.id="div22";
							div22.style.display = "none";
							func.setDivPos(div22,"20%","10%","15%","40%");
							div22.style["background-color"] = "#897674";
							div22.style["border"] = "5px solid #a99694";
							div22.style["font-size"] = "150%";
							div22.style["letter-spacing"] = "2px";
							div22.style.cursor = "pointer";
							div22.innerHTML = "<span style='font-family:lishu;line-height:140%;'><b>成长任务</b></span>";
							var div30 = ui.create.div();
							div30.id="div30";
							div30.style["background-color"] = "rgba(80,80,80,0.5)";
							func.setDivPos(div30,"45%","45%","40%","20%");
							var s1 = (lib.config.w_level*12.04)==0? 0:Math.min(lib.config.w_Exp*100/(lib.config.w_level*12.04),99);
							var s2 = (lib.config.w_zhu_win+lib.config.w_zhu_fare)==0? 0:lib.config.w_zhu_win*100/(lib.config.w_zhu_win+lib.config.w_zhu_fare);
							var s3 = (lib.config.w_fan_win+lib.config.w_fan_fare)==0? 0:lib.config.w_fan_win*100/(lib.config.w_fan_win+lib.config.w_fan_fare);
							var s4 = (lib.config.w_win+lib.config.w_fare)==0? 0:lib.config.w_win*100/(lib.config.w_win+lib.config.w_fare);
							div30.innerHTML = "<div style='position:absolute;background-color:rgba(0,0,0,0.5);width:98%;height:98%;left:1%;top:1%;'>"+
								"<div style='position:absolute;background-color:rgba(0,0,0,1);width:30%;height:60%;top:10%;left:10%;cursor:pointer;' onclick=lib.brawl.newWar.func.div40_open() >"+
									"<img id='img30' src='"+lib.assetURL+"extension/新斗地主/"+lib.config.w_header+"' width=100% height=100% style='position:absolute;left:0%;' ondragstart='return false;' />"+
									"<img src='"+lib.assetURL+"extension/新斗地主/w_heroborder.png' width=100% height=100% style='position:absolute;left:0%;' ondragstart='return false;'/>"+
								"</div>"+
								"<span style='position:absolute;font-size:100%;left:45%;top:20%;'>总胜率：</span>"+
								"<span style='position:absolute;color:#Fc0;left:63%;top:13%;'><span style='font-size:200%;'>"+s4.toFixed(2)+"</span> %</span>"+
								"<span style='position:absolute;font-size:85%;left:45%;top:33%;'>胜场："+lib.config.w_win+"</span>"+
								"<span style='position:absolute;font-size:85%;left:45%;top:43%;'>负场："+lib.config.w_fare+"</span>"+
								"<span style='position:absolute;font-size:85%;left:45%;top:53%;color:#ffddb9;'>地主胜率："+s2.toFixed(2)+"%</span>"+
								"<span style='position:absolute;font-size:85%;left:45%;top:63%;color:#b2d9a9;'>农民胜率："+s3.toFixed(2)+"%</span>"+
								"<span id='LV' style='position:absolute;color:#FC0;left:15%;top:70%;width:10%;'>LV."+lib.config.w_level+"</span>"+
								"<span id='Exp' style='position:absolute;color:#b0d0e2;left:25%;top:70%;width:10%;cursor:pointer;' onclick=(document.getElementById('sp1').style.display=document.getElementById('sp1').style.display=='none'?'':'none')>（"+Math.round(s1)+"%）</span>"+
								"<span id=sp1 style='position:absolute;color:#b0d0e2;left:10%;top:80%;width:30%;display:none;'>"+lib.config.w_Exp.toFixed(2)+"/"+(lib.config.w_level*12.04).toFixed(2)+"</span>"+
							"</div>";
							div30.style.display='none';
							div20.onclick=function(){
								var Page = [];
								Page = func.Page.second_window;
								for(var i=0;i<Page.length;i++){
									var id = Page[i];
									document.getElementById(id).style.display="none";
								}
								Page = func.Page.second_window_window;
								for(var i=0;i<Page.length;i++){
									var id = Page[i];
									document.getElementById(id).style.display="none";
								}
								div30.style.display = "";
							};
							div10.onclick=function(arg){
								var Page = [];
								Page = func.Page.second_window_window;
								for(var i=0;i<Page.length;i++){
									var id = Page[i];
									if(document.getElementById(id).style.display==""){
										document.getElementById(id).style.display="none";
										return;
									}
								}
								Page = func.Page.second_window;
								for(var i=0;i<Page.length;i++){
									var id = Page[i];
									document.getElementById(id).style.display="none";
								}
							};
							div21.onclick=function(){
								var Page = [];
								Page = func.Page.second_window_window;
								for(var i=0;i<Page.length;i++){
									var id = Page[i];
									if(document.getElementById(id).style.display==""){
										document.getElementById(id).style.display="none";
									}
								}
								div10.onclick(false);
								Page = func.Page.second;
								for(var i=0;i<Page.length;i++){
									var id = Page[i];
									document.getElementById(id).style.display="none";
								}
								div10.style.background = "url('"+lib.assetURL+"extension/新斗地主/background_0.jpg')";
								div10.style["background-size"] = "cover";
								Page = func.Page.first;
								for(var i=0;i<Page.length;i++){
									var id = Page[i];
									document.getElementById(id).style.display="";
								}
							};
							var div31 = ui.create.div();
							div31.id="div31";
							var ImageSrc=function(config,name){
								if(config.finished){
									return lib.assetURL+"extension/新斗地主/"+name+"1.jpg";
								}
								return lib.assetURL+"extension/新斗地主/"+name+"0.jpg";
							};
							var ButSrc = function(config){
								if(config.finished){
									return "已完成";
								}
								return "未完成";
							}
							div31.style["background-color"] = "rgba(80,80,80,0.8)";
							func.setDivPos(div31,"45%","65%","40%","0%");
							div31.innerHTML = "<span style='position:absolute;font-size:85%;left:5%;color:#FC0;top:2%;letter-spacing:2px;'>本周活跃度</span>"+
							"<span style='position:absolute;font-size:150%;left:5%;top:6%;width:20%;color:#b2d9a9;'>"+lib.config.task_active+"</span>"+
							"<span id='sp2' style='position:absolute;color:#ffe14c;font-size:250%;font-family:lishu;left:30%;top:4%;'><b>成长任务</b></span>"+
							"<div style='position:absolute;width:96%;height:75%;left:2%;top:23%;overflow:auto;'>"+
								"<div style='position:absolute;width:100%;height:30%;background-color:rgba(0,0,0,0.5);left:0%;top:0%'>"+
									"<div style='position:absolute;width:20%;height:92%;top:4%;left:2%;background-color:#FC0;'>"+
										"<img src='"+ImageSrc(lib.config.task_index,"task_index")+"' width=100% height=100% ondragstart='return false;'/>"+
									"</div>"+
									"<span style='position:absolute;left:24%;top:15%;'>【日常】每日一斗</span>"+
									"<span style='color:#ffddb9;font-size:80%;position:absolute;left:24%;top:45%;'>进行一场游戏(新斗地主模式)</span>"+
									"<span style='color:#b0d0e2;font-size:80%;position:absolute;left:25%;top:75%;'>Exp+15 活跃度+5 金票+200</span>"+
									"<div style='position:absolute;background-color:#acecb7;border:2px solid #8ccc97;width:20%;height:36%;top:56%;left:76%;color:#555;font-size:120%;'>"+ButSrc(lib.config.task_index)+"</div>"+
								"</div>"+
								"<div style='position:absolute;width:100%;height:30%;background-color:rgba(0,0,0,0.5);left:0%;top:32%'>"+
									"<div style='position:absolute;width:20%;height:92%;top:4%;left:2%;background-color:#FC0;'>"+
										"<img src='"+ImageSrc(lib.config.task_win1,"task_win1")+"' width=100% height=100% ondragstart='return false;'/>"+
									"</div>"+
									"<span style='position:absolute;left:24%;top:15%;'>【日常】初战告捷</span>"+
									"<span style='color:#ffddb9;font-size:80%;position:absolute;left:24%;top:45%;'>获得一场胜利(新斗地主模式)</span>"+
									"<span style='color:#b0d0e2;font-size:100%;position:absolute;left:30%;top:75%;'>Exp+15 活跃度+10</span>"+
									"<span style='position:absolute;left:76%;top:15%;'>进度："+Math.min(1,lib.config.task_win_count)+"/1</span>"+
									"<div style='position:absolute;background-color:#acecb7;border:2px solid #8ccc97;width:20%;height:36%;top:56%;left:76%;color:#555;font-size:120%;'>"+ButSrc(lib.config.task_win1)+"</div>"+
								"</div>"+
								"<div style='position:absolute;width:100%;height:30%;background-color:rgba(0,0,0,0.5);left:0%;top:64%'>"+
									"<div style='position:absolute;width:20%;height:92%;top:4%;left:2%;background-color:#FC0;'>"+
										"<img src='"+ImageSrc(lib.config.task_win2,"task_win2")+"' width=100% height=100% ondragstart='return false;'/>"+
									"</div>"+
									"<span style='position:absolute;left:24%;top:15%;'>【日常】捷报再传</span>"+
									"<span style='color:#ffddb9;font-size:80%;position:absolute;left:24%;top:45%;'>获得两场胜利(新斗地主模式)</span>"+
									"<span style='color:#b0d0e2;font-size:100%;position:absolute;left:30%;top:75%;'>Exp+15 活跃度+10</span>"+
									"<span style='position:absolute;left:76%;top:15%;'>进度："+Math.min(2,lib.config.task_win_count)+"/2</span>"+
									"<div style='position:absolute;background-color:#acecb7;border:2px solid #8ccc97;width:20%;height:36%;top:56%;left:76%;color:#555;font-size:120%;'>"+ButSrc(lib.config.task_win2)+"</div>"+
								"</div>"+
								"<div style='position:absolute;width:100%;height:30%;background-color:rgba(0,0,0,0.5);left:0%;top:96%'>"+
									"<div style='position:absolute;width:20%;height:92%;top:4%;left:2%;background-color:#FC0;'>"+
										"<img src='"+ImageSrc(lib.config.task_win3,"task_win3")+"' width=100% height=100% ondragstart='return false;'/>"+
									"</div>"+
									"<span style='position:absolute;left:24%;top:15%;'>【日常】战无不胜</span>"+
									"<span style='color:#ffddb9;font-size:80%;position:absolute;left:24%;top:45%;'>获得三场胜利(新斗地主模式)</span>"+
									"<span style='color:#b0d0e2;font-size:100%;position:absolute;left:30%;top:75%;'>Exp+15 活跃度+25</span>"+
									"<span style='position:absolute;left:76%;top:15%;'>进度："+Math.min(3,lib.config.task_win_count)+"/3</span>"+
									"<div style='position:absolute;background-color:#acecb7;border:2px solid #8ccc97;width:20%;height:36%;top:56%;left:76%;color:#555;font-size:120%;'>"+ButSrc(lib.config.task_win3)+"</div>"+
								"</div>"+
								"<div style='position:absolute;width:100%;height:30%;background-color:rgba(0,0,0,0.5);left:0%;top:128%'>"+
									"<div style='position:absolute;width:20%;height:92%;top:4%;left:2%;background-color:#FC0;'>"+
										"<img src='"+ImageSrc(lib.config.task_win4,"task_win4")+"' width=100% height=100% ondragstart='return false;'/>"+
									"</div>"+
									"<span style='position:absolute;left:24%;top:15%;'>【日常】国士无双</span>"+
									"<span style='color:#ffddb9;font-size:80%;position:absolute;left:24%;top:45%;'>获得四场胜利(新斗地主模式)</span>"+
									"<span style='color:#b0d0e2;font-size:80%;position:absolute;left:25%;top:75%;'>Exp+15 活跃度+25 金票+1000</span>"+
									"<span style='position:absolute;left:76%;top:15%;'>进度："+Math.min(4,lib.config.task_win_count)+"/4</span>"+
									"<div style='position:absolute;background-color:#acecb7;border:2px solid #8ccc97;width:20%;height:36%;top:56%;left:76%;color:#555;font-size:120%;'>"+ButSrc(lib.config.task_win4)+"</div>"+
								"</div>"+
								"<div style='position:absolute;width:100%;height:30%;background-color:rgba(0,0,0,0.5);left:0%;top:160%'>"+
									"<div style='position:absolute;width:20%;height:92%;top:4%;left:2%;background-color:#FC0;'>"+
										"<img src='"+ImageSrc(lib.config.task_doublewin,"task_doublewin")+"' width=100% height=100% ondragstart='return false;'/>"+
									"</div>"+
									"<span style='position:absolute;left:24%;top:15%;'>【日常】常胜将军</span>"+
									"<span style='color:#ffddb9;font-size:80%;position:absolute;left:24%;top:45%;'>连续胜利两次(新斗地主模式)</span>"+
									"<span style='color:#b0d0e2;font-size:100%;position:absolute;left:30%;top:75%;'>Exp+15 活跃度+25</span>"+
									"<span style='position:absolute;left:76%;top:15%;'>进度："+Math.min(2,lib.config.task_doublewin_count)+"/2</span>"+
									"<div style='position:absolute;background-color:#acecb7;border:2px solid #8ccc97;width:20%;height:36%;top:56%;left:76%;color:#555;font-size:120%;'>"+ButSrc(lib.config.task_doublewin)+"</div>"+
								"</div>"+
								"<div style='position:absolute;width:100%;height:30%;background-color:rgba(0,0,0,0.5);left:0%;top:192%'>"+
									"<div style='position:absolute;width:20%;height:92%;top:4%;left:2%;background-color:#FC0;'>"+
										"<img src='"+ImageSrc(lib.config.task_kill,"task_kill")+"' width=100% height=100% ondragstart='return false;'/>"+
									"</div>"+
									"<span style='position:absolute;left:24%;top:15%;'>【日常】疯狂杀戮</span>"+
									"<span style='color:#ffddb9;font-size:80%;position:absolute;left:24%;top:45%;'>累计击杀四名敌人(新斗地主模式)</span>"+
									"<span style='color:#b0d0e2;font-size:100%;position:absolute;left:30%;top:75%;'>Exp+15 活跃度+30</span>"+
									"<span style='position:absolute;left:76%;top:15%;'>进度："+Math.min(4,lib.config.task_kill_count)+"/4</span>"+
									"<div style='position:absolute;background-color:#acecb7;border:2px solid #8ccc97;width:20%;height:36%;top:56%;left:76%;color:#555;font-size:120%;'>"+ButSrc(lib.config.task_kill)+"</div>"+
								"</div>"+
							"</div>";
							div31.style.display = "none";
							div22.onclick = function(){
								var Page = [];
								Page = func.Page.second_window;
								for(var i=0;i<Page.length;i++){
									var id = Page[i];
									document.getElementById(id).style.display="none";
								}
								Page = func.Page.second_window_window;
								for(var i=0;i<Page.length;i++){
									var id = Page[i];
									document.getElementById(id).style.display="none";
								}
								div31.style.display = "";
							}
							this.appendChild(div00);
							this.appendChild(div10);
							this.appendChild(div11);
							this.appendChild(div12);
							this.appendChild(div13);
							this.appendChild(div20);
							this.appendChild(div21);
							this.appendChild(div22);
							this.appendChild(div30);
							this.appendChild(div31);
							var div40 = ui.create.div();
							div40.id = 'div40';
							func.setDivPos(div40,"78.4%","50%","10.75%","20%");
							div40.style["background-color"] = "rgba(80,80,80,0.5)";
							div40.style.display = "none";
							this.appendChild(div40);
							var div50 = ui.create.div();
							func.setDivPos(div50,"10%","5%","11%","-13%");
							div50.style["background-color"] = "rgba(0,0,0,0.6)";
							div50.innerHTML = "<div style='position:absolute;height:94%;width:26%;left:2%;top:3%;'>"+
								"<img src='"+lib.assetURL+"extension/新斗地主/w_goldTicket.png' width=100% height=100%  ondragstart='return false;'/>"+
							"</div>"+"<span id='sp3' style='position:absolute;width:72%;height:100%;left:28%;text-align:center;line-height:160%;font-size:90%;color:#aaa;'>"+lib.config.w_goldTicket+"</span>";
							div50.style.display = "none";
							div50.id="div50";
							this.appendChild(div50);
							var div23 = ui.create.div();
							div23.id="div23";
							func.setDivPos(div23,"6%","12%","18%","70%");
							div23.style["background-color"]="rgba(80,80,80,0.5)";
							div23.innerHTML = "<div style='position:absolute;width:98%;height:98%;left:1%;top:1%;background-color:rgba(0,0,0,1);cursor:pointer;'>"+
								"<img src='"+lib.assetURL+"extension/新斗地主/w_herobutton.png' width=100% height=100% ondragstart='return false;'/>"+
							"</div>";
							div23.style.display="none";
							div23.onclick = function(){
								var Page = [];
								Page = func.Page.second_window;
								for(var i=0;i<Page.length;i++){
									var id = Page[i];
									document.getElementById(id).style.display="none";
								}
								Page = func.Page.second_window_window;
								for(var i=0;i<Page.length;i++){
									var id = Page[i];
									document.getElementById(id).style.display="none";
								}
								div32.style.display="";
							}
							this.appendChild(div23);
							var div32 = ui.create.div();
							div32.id="div32";
							heroButton_wei=function(){
								var str="";
								str += "<span style='font-size:120%;line-height:150%;font-size:100%;font-family:xinwei;color:#00f;'>【标准】</span>";
								str += "<div style='position:absolute;width:20%;height:37%;background-color:#90b0c2;left:4%;top:15%;'>"+
									"<div style='position:absolute;width:96%;height:76%;left:2%;top:2%;background-color:#b0d0e2;cursor:pointer;' onclick=game.w_lookCharacter('w_caocao') >"+
										"<img src='"+lib.assetURL+"extension/新斗地主/w_caocao0.jpg' width=100% height=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;width:96%;height:17%;left:2%;top:81%;background-color:#b0d0e2;font-size:80%;font-family:xinwei;'>曹操</div>"+
								"</div>";
								str += "<div style='position:absolute;width:20%;height:37%;background-color:#90b0c2;left:28%;top:15%;'>"+
									"<div style='position:absolute;width:96%;height:76%;left:2%;top:2%;background-color:#b0d0e2;cursor:pointer;' onclick=game.w_lookCharacter('w_guojia')>"+
										"<img src='"+lib.assetURL+"extension/新斗地主/w_guojia0.jpg' width=100% height=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;width:96%;height:17%;left:2%;top:81%;background-color:#b0d0e2;font-size:80%;font-family:xinwei;'>郭嘉</div>"+
								"</div>";
								str += "<div style='position:absolute;width:20%;height:37%;background-color:#90b0c2;left:52%;top:15%;'>"+
									"<div style='position:absolute;width:96%;height:76%;left:2%;top:2%;background-color:#b0d0e2;cursor:pointer;' onclick=game.w_lookCharacter('w_simayi')>"+
										"<img src='"+lib.assetURL+"extension/新斗地主/w_simayi0.jpg' width=100% height=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;width:96%;height:17%;left:2%;top:81%;background-color:#b0d0e2;font-size:80%;font-family:xinwei;'>司马懿</div>"+
								"</div>";
								str += "<div style='position:absolute;width:20%;height:37%;background-color:#90b0c2;left:76%;top:15%;'>"+
									"<div style='position:absolute;width:96%;height:76%;left:2%;top:2%;background-color:#b0d0e2;cursor:pointer;' onclick=game.w_lookCharacter('w_zhangliao')>"+
										"<img src='"+lib.assetURL+"extension/新斗地主/w_zhangliao0.jpg' width=100% height=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;width:96%;height:17%;left:2%;top:81%;background-color:#b0d0e2;font-size:80%;font-family:xinwei;'>张辽</div>"+
								"</div>";
								str += "<div style='position:absolute;width:20%;height:37%;background-color:#90b0c2;left:4%;top:57%;'>"+
									"<div style='position:absolute;width:96%;height:76%;left:2%;top:2%;background-color:#b0d0e2;cursor:pointer;' onclick=game.w_lookCharacter('w_xiahoudun')>"+
										"<img src='"+lib.assetURL+"extension/新斗地主/w_xiahoudun0.jpg' width=100% height=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;width:96%;height:17%;left:2%;top:81%;background-color:#b0d0e2;font-size:80%;font-family:xinwei;'>夏侯惇</div>"+
								"</div>";
								str += "<div style='position:absolute;width:20%;height:37%;background-color:#90b0c2;left:28%;top:57%;'>"+
									"<div style='position:absolute;width:96%;height:76%;left:2%;top:2%;background-color:#b0d0e2;cursor:pointer;' onclick=game.w_lookCharacter('w_xuchu')>"+
										"<img src='"+lib.assetURL+"extension/新斗地主/w_xuchu0.jpg' width=100% height=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;width:96%;height:17%;left:2%;top:81%;background-color:#b0d0e2;font-size:80%;font-family:xinwei;'>许褚</div>"+
								"</div>";
								str += "<div style='position:absolute;width:20%;height:37%;background-color:#90b0c2;left:52%;top:57%;'>"+
									"<div style='position:absolute;width:96%;height:76%;left:2%;top:2%;background-color:#b0d0e2;cursor:pointer;' onclick=game.w_lookCharacter('w_lidian')>"+
										"<img src='"+lib.assetURL+"extension/新斗地主/w_lidian0.jpg' width=100% height=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;width:96%;height:17%;left:2%;top:81%;background-color:#b0d0e2;font-size:80%;font-family:xinwei;'>李典</div>"+
								"</div>";
								str += "<div style='position:absolute;width:20%;height:37%;background-color:#90b0c2;left:76%;top:57%;'>"+
									"<div style='position:absolute;width:96%;height:76%;left:2%;top:2%;background-color:#b0d0e2;cursor:pointer;' onclick=game.w_lookCharacter('w_zhenji')>"+
										"<img src='"+lib.assetURL+"extension/新斗地主/w_zhenji0.jpg' width=100% height=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;width:96%;height:17%;left:2%;top:81%;background-color:#b0d0e2;font-size:80%;font-family:xinwei;'>甄姬</div>"+
								"</div>";
								str += "<div style='position:absolute;width:20%;height:37%;background-color:#90b0c2;left:4%;top:99%;'>"+
									"<div style='position:absolute;width:96%;height:76%;left:2%;top:2%;background-color:#b0d0e2;cursor:pointer;' onclick=game.w_lookCharacter('w_caoang')>"+
										"<img src='"+lib.assetURL+"extension/新斗地主/w_caoang0.jpg' width=100% height=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;width:96%;height:17%;left:2%;top:81%;background-color:#b0d0e2;font-size:80%;font-family:xinwei;'>曹昂</div>"+
								"</div>";
								str += "<span style='font-size:120%;line-height:150%;font-size:100%;font-family:xinwei;color:#00f;position:absolute;top:141%;left:2%;width:96%;'>【强将篇】</span>";
								str += "<div style='position:absolute;width:20%;height:37%;background-color:#90b0c2;left:4%;top:155%;'>"+
									"<div style='position:absolute;width:96%;height:76%;left:2%;top:2%;background-color:#b0d0e2;cursor:pointer;' onclick=game.w_lookCharacter('w_wangyi') >"+
										"<img src='"+lib.assetURL+"extension/新斗地主/w_wangyi0.jpg' width=100% height=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;width:96%;height:17%;left:2%;top:81%;background-color:#b0d0e2;font-size:80%;font-family:xinwei;'>王异</div>"+
								"</div>";
								str += "<div style='position:absolute;width:20%;height:37%;background-color:#90b0c2;left:28%;top:155%;'>"+
									"<div style='position:absolute;width:96%;height:76%;left:2%;top:2%;background-color:#b0d0e2;cursor:pointer;' onclick=game.w_lookCharacter('w_zhangchunhua') >"+
										"<img src='"+lib.assetURL+"extension/新斗地主/w_zhangchunhua0.jpg' width=100% height=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;width:96%;height:17%;left:2%;top:81%;background-color:#b0d0e2;font-size:80%;font-family:xinwei;'>张春华</div>"+
								"</div>";
								return str;
							};
							heroButton_shu=function(){
								var str="";
								str += "<span style='font-size:120%;line-height:150%;font-size:100%;font-family:xinwei;color:#00f;'>【标准】</span>";
								str += "<div style='position:absolute;width:20%;height:37%;background-color:#dfbd99;left:4%;top:15%;'>"+
									"<div style='position:absolute;width:96%;height:76%;left:2%;top:2%;background-color:#ffddb9;cursor:pointer;' onclick=game.w_lookCharacter('w_liubei') >"+
										"<img src='"+lib.assetURL+"extension/新斗地主/w_liubei0.jpg' width=100% height=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;width:96%;height:17%;left:2%;top:81%;background-color:#ffddb9;font-size:80%;font-family:xinwei;'>刘备</div>"+
								"</div>";
								str += "<div style='position:absolute;width:20%;height:37%;background-color:#dfbd99;left:28%;top:15%;'>"+
									"<div style='position:absolute;width:96%;height:76%;left:2%;top:2%;background-color:#ffddb9;cursor:pointer;' onclick=game.w_lookCharacter('w_guanyu')>"+
										"<img src='"+lib.assetURL+"extension/新斗地主/w_guanyu0.jpg' width=100% height=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;width:96%;height:17%;left:2%;top:81%;background-color:#ffddb9;font-size:80%;font-family:xinwei;'>关羽</div>"+
								"</div>";
								str += "<div style='position:absolute;width:20%;height:37%;background-color:#dfbd99;left:52%;top:15%;'>"+
									"<div style='position:absolute;width:96%;height:76%;left:2%;top:2%;background-color:#ffddb9;cursor:pointer;' onclick=game.w_lookCharacter('w_zhangfei')>"+
										"<img src='"+lib.assetURL+"extension/新斗地主/w_zhangfei0.jpg' width=100% height=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;width:96%;height:17%;left:2%;top:81%;background-color:#ffddb9;font-size:80%;font-family:xinwei;'>张飞</div>"+
								"</div>";
								str += "<div style='position:absolute;width:20%;height:37%;background-color:#dfbd99;left:76%;top:15%;'>"+
									"<div style='position:absolute;width:96%;height:76%;left:2%;top:2%;background-color:#ffddb9;cursor:pointer;' onclick=game.w_lookCharacter('w_zhugeliang')>"+
										"<img src='"+lib.assetURL+"extension/新斗地主/w_zhugeliang0.jpg' width=100% height=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;width:96%;height:17%;left:2%;top:81%;background-color:#ffddb9;font-size:80%;font-family:xinwei;'>诸葛亮</div>"+
								"</div>";
								str += "<div style='position:absolute;width:20%;height:37%;background-color:#dfbd99;left:4%;top:57%;'>"+
									"<div style='position:absolute;width:96%;height:76%;left:2%;top:2%;background-color:#ffddb9;cursor:pointer;' onclick=game.w_lookCharacter('w_zhaoyun')>"+
										"<img src='"+lib.assetURL+"extension/新斗地主/w_zhaoyun0.jpg' width=100% height=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;width:96%;height:17%;left:2%;top:81%;background-color:#ffddb9;font-size:80%;font-family:xinwei;'>赵云</div>"+
								"</div>";
								str += "<div style='position:absolute;width:20%;height:37%;background-color:#dfbd99;left:28%;top:57%;'>"+
									"<div style='position:absolute;width:96%;height:76%;left:2%;top:2%;background-color:#ffddb9;cursor:pointer;' onclick=game.w_lookCharacter('w_machao')>"+
										"<img src='"+lib.assetURL+"extension/新斗地主/w_machao0.jpg' width=100% height=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;width:96%;height:17%;left:2%;top:81%;background-color:#ffddb9;font-size:80%;font-family:xinwei;'>马超</div>"+
								"</div>";
								str += "<div style='position:absolute;width:20%;height:37%;background-color:#dfbd99;left:52%;top:57%;'>"+
									"<div style='position:absolute;width:96%;height:76%;left:2%;top:2%;background-color:#ffddb9;cursor:pointer;' onclick=game.w_lookCharacter('w_xushu')>"+
										"<img src='"+lib.assetURL+"extension/新斗地主/w_xushu0.jpg' width=100% height=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;width:96%;height:17%;left:2%;top:81%;background-color:#ffddb9;font-size:80%;font-family:xinwei;'>徐庶</div>"+
								"</div>";
								str += "<div style='position:absolute;width:20%;height:37%;background-color:#dfbd99;left:76%;top:57%;'>"+
									"<div style='position:absolute;width:96%;height:76%;left:2%;top:2%;background-color:#ffddb9;cursor:pointer;' onclick=game.w_lookCharacter('w_huangyueying')>"+
										"<img src='"+lib.assetURL+"extension/新斗地主/w_huangyueying0.jpg' width=100% height=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;width:96%;height:17%;left:2%;top:81%;background-color:#ffddb9;font-size:80%;font-family:xinwei;'>黄月英</div>"+
								"</div>";
								str += "<div style='position:absolute;width:20%;height:37%;background-color:#dfbd99;left:4%;top:99%;'>"+
									"<div style='position:absolute;width:96%;height:76%;left:2%;top:2%;background-color:#ffddb9;cursor:pointer;' onclick=game.w_lookCharacter('w_lifeng')>"+
										"<img src='"+lib.assetURL+"extension/新斗地主/w_lifeng0.jpg' width=100% height=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;width:96%;height:17%;left:2%;top:81%;background-color:#ffddb9;font-size:80%;font-family:xinwei;'>李丰</div>"+
								"</div>";
								str += "<span style='font-size:120%;line-height:150%;font-size:100%;font-family:xinwei;color:#00f;position:absolute;top:141%;left:2%;width:96%;'>【强将篇】</span>";
								str += "<div style='position:absolute;width:20%;height:37%;background-color:#dfbd99;left:4%;top:155%;'>"+
									"<div style='position:absolute;width:96%;height:76%;left:2%;top:2%;background-color:#ffddb9;cursor:pointer;' onclick=game.w_lookCharacter('w_liufeng') >"+
										"<img src='"+lib.assetURL+"extension/新斗地主/w_liufeng0.jpg' width=100% height=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;width:96%;height:17%;left:2%;top:81%;background-color:#ffddb9;font-size:80%;font-family:xinwei;'>刘封</div>"+
								"</div>";
								/*str += "<div style='position:absolute;width:20%;height:37%;background-color:#dfbd99;left:28%;top:155%;'>"+
									"<div style='position:absolute;width:96%;height:76%;left:2%;top:2%;background-color:#ffddb9;cursor:pointer;' onclick=game.w_lookCharacter('w_zhangsong') >"+
										"<img src='"+lib.assetURL+"extension/新斗地主/w_zhangsong0.jpg' width=100% height=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;width:96%;height:17%;left:2%;top:81%;background-color:#ffddb9;font-size:80%;font-family:xinwei;'>张松</div>"+
								"</div>";*/
								return str;
							};
							heroButton_wu=function(){
								var str="";
								str += "<span style='font-size:120%;line-height:150%;font-size:100%;font-family:xinwei;color:#00f;'>【标准】</span>";
								str += "<div style='position:absolute;width:20%;height:37%;background-color:#92b989;left:4%;top:15%;'>"+
									"<div style='position:absolute;width:96%;height:76%;left:2%;top:2%;background-color:#b2d9a9;cursor:pointer;' onclick=game.w_lookCharacter('w_sunquan') >"+
										"<img src='"+lib.assetURL+"extension/新斗地主/w_sunquan0.jpg' width=100% height=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;width:96%;height:17%;left:2%;top:81%;background-color:#b2d9a9;font-size:80%;font-family:xinwei;'>孙权</div>"+
								"</div>";
								str += "<div style='position:absolute;width:20%;height:37%;background-color:#92b989;left:28%;top:15%;'>"+
									"<div style='position:absolute;width:96%;height:76%;left:2%;top:2%;background-color:#b2d9a9;cursor:pointer;' onclick=game.w_lookCharacter('w_zhouyu')>"+
										"<img src='"+lib.assetURL+"extension/新斗地主/w_zhouyu0.jpg' width=100% height=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;width:96%;height:17%;left:2%;top:81%;background-color:#b2d9a9;font-size:80%;font-family:xinwei;'>周瑜</div>"+
								"</div>";
								str += "<div style='position:absolute;width:20%;height:37%;background-color:#92b989;left:52%;top:15%;'>"+
									"<div style='position:absolute;width:96%;height:76%;left:2%;top:2%;background-color:#b2d9a9;cursor:pointer;' onclick=game.w_lookCharacter('w_lvmeng')>"+
										"<img src='"+lib.assetURL+"extension/新斗地主/w_lvmeng0.jpg' width=100% height=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;width:96%;height:17%;left:2%;top:81%;background-color:#b2d9a9;font-size:80%;font-family:xinwei;'>吕蒙</div>"+
								"</div>";
								str += "<div style='position:absolute;width:20%;height:37%;background-color:#92b989;left:76%;top:15%;'>"+
									"<div style='position:absolute;width:96%;height:76%;left:2%;top:2%;background-color:#b2d9a9;cursor:pointer;' onclick=game.w_lookCharacter('w_luxun')>"+
										"<img src='"+lib.assetURL+"extension/新斗地主/w_luxun0.jpg' width=100% height=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;width:96%;height:17%;left:2%;top:81%;background-color:#b2d9a9;font-size:80%;font-family:xinwei;'>陆逊</div>"+
								"</div>";
								str += "<div style='position:absolute;width:20%;height:37%;background-color:#92b989;left:4%;top:57%;'>"+
									"<div style='position:absolute;width:96%;height:76%;left:2%;top:2%;background-color:#b2d9a9;cursor:pointer;' onclick=game.w_lookCharacter('w_ganning')>"+
										"<img src='"+lib.assetURL+"extension/新斗地主/w_ganning0.jpg' width=100% height=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;width:96%;height:17%;left:2%;top:81%;background-color:#b2d9a9;font-size:80%;font-family:xinwei;'>甘宁</div>"+
								"</div>";
								str += "<div style='position:absolute;width:20%;height:37%;background-color:#92b989;left:28%;top:57%;'>"+
									"<div style='position:absolute;width:96%;height:76%;left:2%;top:2%;background-color:#b2d9a9;cursor:pointer;' onclick=game.w_lookCharacter('w_huanggai')>"+
										"<img src='"+lib.assetURL+"extension/新斗地主/w_huanggai0.jpg' width=100% height=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;width:96%;height:17%;left:2%;top:81%;background-color:#b2d9a9;font-size:80%;font-family:xinwei;'>黄盖</div>"+
								"</div>";
								str += "<div style='position:absolute;width:20%;height:37%;background-color:#92b989;left:52%;top:57%;'>"+
									"<div style='position:absolute;width:96%;height:76%;left:2%;top:2%;background-color:#b2d9a9;cursor:pointer;' onclick=game.w_lookCharacter('w_daqiao')>"+
										"<img src='"+lib.assetURL+"extension/新斗地主/w_daqiao0.jpg' width=100% height=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;width:96%;height:17%;left:2%;top:81%;background-color:#b2d9a9;font-size:80%;font-family:xinwei;'>大乔</div>"+
								"</div>";
								str += "<div style='position:absolute;width:20%;height:37%;background-color:#92b989;left:76%;top:57%;'>"+
									"<div style='position:absolute;width:96%;height:76%;left:2%;top:2%;background-color:#b2d9a9;cursor:pointer;' onclick=game.w_lookCharacter('w_sunshangxiang')>"+
										"<img src='"+lib.assetURL+"extension/新斗地主/w_sunshangxiang0.jpg' width=100% height=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;width:96%;height:17%;left:2%;top:81%;background-color:#b2d9a9;font-size:80%;font-family:xinwei;'>孙尚香</div>"+
								"</div>";
								str += "<div style='position:absolute;width:20%;height:37%;background-color:#92b989;left:4%;top:99%;'>"+
									"<div style='position:absolute;width:96%;height:76%;left:2%;top:2%;background-color:#b2d9a9;cursor:pointer;' onclick=game.w_lookCharacter('w_lingcao')>"+
										"<img src='"+lib.assetURL+"extension/新斗地主/w_lingcao0.jpg' width=100% height=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;width:96%;height:17%;left:2%;top:81%;background-color:#b2d9a9;font-size:80%;font-family:xinwei;'>凌操</div>"+
								"</div>";
								str += "<span style='font-size:120%;line-height:150%;font-size:100%;font-family:xinwei;color:#00f;position:absolute;top:141%;left:2%;width:96%;'>【强将篇】</span>";
								str += "<div style='position:absolute;width:20%;height:37%;background-color:#92b989;left:28%;top:155%;'>"+
									"<div style='position:absolute;width:96%;height:76%;left:2%;top:2%;background-color:#b2d9a9;cursor:pointer;' onclick=game.w_lookCharacter('w_sunce') >"+
										"<img src='"+lib.assetURL+"extension/新斗地主/w_sunce0.jpg' width=100% height=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;width:96%;height:17%;left:2%;top:81%;background-color:#b2d9a9;font-size:80%;font-family:xinwei;'>孙策</div>"+
								"</div>";
								str += "<div style='position:absolute;width:20%;height:37%;background-color:#92b989;left:4%;top:155%;'>"+
									"<div style='position:absolute;width:96%;height:76%;left:2%;top:2%;background-color:#b2d9a9;cursor:pointer;' onclick=game.w_lookCharacter('w_lingtong') >"+
										"<img src='"+lib.assetURL+"extension/新斗地主/w_lingtong0.jpg' width=100% height=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;width:96%;height:17%;left:2%;top:81%;background-color:#b2d9a9;font-size:80%;font-family:xinwei;'>凌统</div>"+
								"</div>";
								return str;
							};
							heroButton_qun=function(){
								var str="";
								str += "<span style='font-size:120%;line-height:150%;font-size:100%;font-family:xinwei;color:#00f;'>【标准】</span>";
								str += "<div style='position:absolute;width:20%;height:37%;background-color:#d6d6d6;left:4%;top:15%;'>"+
									"<div style='position:absolute;width:96%;height:76%;left:2%;top:2%;background-color:#f6f6f6;cursor:pointer;' onclick=game.w_lookCharacter('w_lvbu') >"+
										"<img src='"+lib.assetURL+"extension/新斗地主/w_lvbu0.jpg' width=100% height=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;width:96%;height:17%;left:2%;top:81%;background-color:#f6f6f6;font-size:80%;font-family:xinwei;'>吕布</div>"+
								"</div>";
								str += "<div style='position:absolute;width:20%;height:37%;background-color:#d6d6d6;left:28%;top:15%;'>"+
									"<div style='position:absolute;width:96%;height:76%;left:2%;top:2%;background-color:#f6f6f6;cursor:pointer;' onclick=game.w_lookCharacter('w_diaochan')>"+
										"<img src='"+lib.assetURL+"extension/新斗地主/w_diaochan0.jpg' width=100% height=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;width:96%;height:17%;left:2%;top:81%;background-color:#f6f6f6;font-size:80%;font-family:xinwei;'>貂蝉</div>"+
								"</div>";
								str += "<div style='position:absolute;width:20%;height:37%;background-color:#d6d6d6;left:52%;top:15%;'>"+
									"<div style='position:absolute;width:96%;height:76%;left:2%;top:2%;background-color:#f6f6f6;cursor:pointer;' onclick=game.w_lookCharacter('w_huatuo')>"+
										"<img src='"+lib.assetURL+"extension/新斗地主/w_huatuo0.jpg' width=100% height=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;width:96%;height:17%;left:2%;top:81%;background-color:#f6f6f6;font-size:80%;font-family:xinwei;'>华佗</div>"+
								"</div>";
								str += "<div style='position:absolute;width:20%;height:37%;background-color:#d6d6d6;left:76%;top:15%;'>"+
									"<div style='position:absolute;width:96%;height:76%;left:2%;top:2%;background-color:#f6f6f6;cursor:pointer;' onclick=game.w_lookCharacter('w_gongsunzan')>"+
										"<img src='"+lib.assetURL+"extension/新斗地主/w_gongsunzan0.jpg' width=100% height=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;width:96%;height:17%;left:2%;top:81%;background-color:#f6f6f6;font-size:80%;font-family:xinwei;'>公孙瓒</div>"+
								"</div>";
								str += "<div style='position:absolute;width:20%;height:37%;background-color:#d6d6d6;left:4%;top:57%;'>"+
									"<div style='position:absolute;width:96%;height:76%;left:2%;top:2%;background-color:#f6f6f6;cursor:pointer;' onclick=game.w_lookCharacter('w_yuanshu')>"+
										"<img src='"+lib.assetURL+"extension/新斗地主/w_yuanshu0.jpg' width=100% height=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;width:96%;height:17%;left:2%;top:81%;background-color:#f6f6f6;font-size:80%;font-family:xinwei;'>袁术</div>"+
								"</div>";
								str += "<div style='position:absolute;width:20%;height:37%;background-color:#d6d6d6;left:28%;top:57%;'>"+
									"<div style='position:absolute;width:96%;height:76%;left:2%;top:2%;background-color:#f6f6f6;cursor:pointer;' onclick=game.w_lookCharacter('w_huaxiong')>"+
										"<img src='"+lib.assetURL+"extension/新斗地主/w_huaxiong0.jpg' width=100% height=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;width:96%;height:17%;left:2%;top:81%;background-color:#f6f6f6;font-size:80%;font-family:xinwei;'>华雄</div>"+
								"</div>";
								str += "<div style='position:absolute;width:20%;height:37%;background-color:#d6d6d6;left:52%;top:57%;'>"+
									"<div style='position:absolute;width:96%;height:76%;left:2%;top:2%;background-color:#f6f6f6;cursor:pointer;' onclick=game.w_lookCharacter('w_jushou')>"+
										"<img src='"+lib.assetURL+"extension/新斗地主/w_jushou0.jpg' width=100% height=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;width:96%;height:17%;left:2%;top:81%;background-color:#f6f6f6;font-size:80%;font-family:xinwei;'>沮授</div>"+
								"</div>";
								str += "<div style='position:absolute;width:20%;height:37%;background-color:#d6d6d6;left:76%;top:57%;'>"+
									"<div style='position:absolute;width:96%;height:76%;left:2%;top:2%;background-color:#f6f6f6;cursor:pointer;' onclick=game.w_lookCharacter('w_niufu')>"+
										"<img src='"+lib.assetURL+"extension/新斗地主/w_niufu0.jpg' width=100% height=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;width:96%;height:17%;left:2%;top:81%;background-color:#f6f6f6;font-size:80%;font-family:xinwei;'>牛辅</div>"+
								"</div>";
								str += "<div style='position:absolute;width:20%;height:37%;background-color:#d6d6d6;left:4%;top:99%;'>"+
									"<div style='position:absolute;width:96%;height:76%;left:2%;top:2%;background-color:#f6f6f6;cursor:pointer;' onclick=game.w_lookCharacter('w_liuxie')>"+
										"<img src='"+lib.assetURL+"extension/新斗地主/w_liuxie0.jpg' width=100% height=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;width:96%;height:17%;left:2%;top:81%;background-color:#f6f6f6;font-size:80%;font-family:xinwei;'>刘协</div>"+
								"</div>";
								str += "<span style='font-size:120%;line-height:150%;font-size:100%;font-family:xinwei;color:#00f;position:absolute;top:141%;left:2%;width:96%;'>【强将篇】</span>";
								str += "<div style='position:absolute;width:20%;height:37%;background-color:#d6d6d6;left:4%;top:155%;'>"+
									"<div style='position:absolute;width:96%;height:76%;left:2%;top:2%;background-color:#f6f6f6;cursor:pointer;' onclick=game.w_lookCharacter('w_yuji') >"+
										"<img src='"+lib.assetURL+"extension/新斗地主/w_yuji0.jpg' width=100% height=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;width:96%;height:17%;left:2%;top:81%;background-color:#f6f6f6;font-size:80%;font-family:xinwei;'>于吉</div>"+
								"</div>";
								str += "<div style='position:absolute;width:20%;height:37%;background-color:#d6d6d6;left:28%;top:155%;'>"+
									"<div style='position:absolute;width:96%;height:76%;left:2%;top:2%;background-color:#f6f6f6;cursor:pointer;' onclick=game.w_lookCharacter('w_zuoci') >"+
										"<img src='"+lib.assetURL+"extension/新斗地主/w_zuoci0.jpg' width=100% height=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;width:96%;height:17%;left:2%;top:81%;background-color:#f6f6f6;font-size:80%;font-family:xinwei;'>左慈</div>"+
								"</div>";
								return str;
							};
							div32.style["background-color"] = "rgba(80,80,80,0.8)";
							func.setDivPos(div32,"45%","65%","40%","0%");
							div32.innerHTML="<div style='position:absolute;background-color:#b0d0e2;width:15%;height:15%;left:2%;top:5%;border:2px solid #90b0c2;font-family:lishu;font-size:150%;cursor:pointer;' onclick=game.w_LCswicth('wei') ><font style='color:#7090a2;line-height:165%;'>魏国</font></div>"+
							"<div style='position:absolute;background-color:#ffddb9;width:15%;height:15%;left:19%;top:5%;border:2px solid #dfbd99;font-family:lishu;font-size:150%;cursor:pointer;' onclick=game.w_LCswicth('shu') ><font style='color:#bf9d79;line-height:165%;'>蜀国</font></div>"+
							"<div style='position:absolute;background-color:#b2d9a9;width:15%;height:15%;left:36%;top:5%;border:2px solid #92b989;font-family:lishu;font-size:150%;cursor:pointer;' onclick=game.w_LCswicth('wu') ><font style='color:#729969;line-height:165%;'>吴国</font></div>"+
							"<div style='position:absolute;background-color:#f6f6f6;width:15%;height:15%;left:53%;top:5%;border:2px solid #d6d6d6;font-family:lishu;font-size:150%;cursor:pointer;' onclick=game.w_LCswicth('qun') ><font style='color:#b6b6b6;line-height:165%;'>群雄</font></div>"+
							"<div id='div_wei' style='position:absolute;width:96%;height:75%;left:2%;top:23%;overflow:auto;background-color:rgba(176,208,226,0.5);'>"+
								heroButton_wei()+
							"</div>"+
							"<div id='div_shu' style='position:absolute;width:96%;height:75%;left:2%;top:23%;overflow:auto;background-color:rgba(255,221,185,0.5);display:none;'>"+
								heroButton_shu()+
							"</div>"+
							"<div id='div_wu' style='position:absolute;width:96%;height:75%;left:2%;top:23%;overflow:auto;background-color:rgba(178,217,169,0.5);display:none;'>"+
								heroButton_wu()+
							"</div>"+
							"<div id='div_qun' style='position:absolute;width:96%;height:75%;left:2%;top:23%;overflow:auto;background-color:rgba(216,216,216,0.5);display:none;'>"+
								heroButton_qun()+
							"</div>";
							div32.style.display="none";
							this.appendChild(div32);
							var div32_1 = ui.create.div();
							div32_1.id='div32_1';
							div32_1.style["background-color"] = "rgba(80,80,80,0.8)";
							func.setDivPos(div32_1,"45%","45%","40%","20%");
							div32_1.innerHTML = "<span style='position:absolute;width:50%;height:15%;left:47.5%;top:7.5%;font-family:lishu;font-size:120%;'>♦武将技能♦</span>"+"<div style='position:absolute;width:40%;height:90%;background-color:rgba(0,0,0,0.6);left:5%;top:5%;'>"+
								"<img id='div32_1_img' width=100% height=100% ondragstart='return false;' style='position:absolute;left:0%;top:0%;'/>"+
								"<img src='"+lib.assetURL+"extension/新斗地主/w_heroborder.png' width=100% height=100% ondragstart='return false;' style='position:absolute;left:0%;top:0%;'/>"+
							"</div>"+"<div id='div32_1_div' style='position:absolute;width:50%;height:70%;background-color:rgba(0,0,0,0.6);left:47.5%;top:25%;overflow:auto;'></div>";
							div32_1.style.display="none";
							this.appendChild(div32_1);
							var div24 = ui.create.div();
							div24.id="div24";
							func.setDivPos(div24,"6%","12%","26%","70%");
							div24.style["background-color"]="rgba(80,80,80,0.5)";
							div24.innerHTML = "<div style='position:absolute;width:98%;height:98%;left:1%;top:1%;background-color:rgba(0,0,0,1);cursor:pointer;'>"+
								"<img src='"+lib.assetURL+"extension/新斗地主/w_propsbutton.png' width=100% height=100% ondragstart='return false;'/>"+
							"</div>";
							div24.style.display="none";
							this.appendChild(div24);
							var div33_1 = ui.create.div();
							div33_1.style["background-color"] = "#acc572";
							div33_1.style["border"] = "4px solid #8ca552";
							func.setDivPos(div33_1,"25%","20%","50%","25%");
							div33_1.style.display="none";
							div33_1.id="div33_1";
							var div33 = ui.create.div();
							div33.id="div33";
							var PropsIntro = function(){
								var str = "",order_x=0,order_y=0;
								for(var i in lib.config.w_Props){
									if(i=="w_goldTicket"){
										lib.config.w_Props[i].count=lib.config.w_goldTicket;
										game.saveConfig("w_Props",lib.config.w_Props);
									}
									if(lib.config.w_Props[i].count>0){
										var click = "onclick=game.w_div33_1_display('"+i+"')";
										str += "<div style='position:absolute;width:28%;height:30%;left:"+(31*order_x+3)+"%;top:"+(35*order_y+5)+"%;background-color:rgba(80,80,80,0.5);border:1px solid rgba(80,80,80,1);'>"+
											"<div id='props"+order_x+"' style='position:absolute;width:96%;height:76%;left:2%;top:2%;background-color:rgba(80,80,80,1);cursor:pointer;' "+click+">"+
												"<img src='"+lib.assetURL+"extension/新斗地主/"+i+".png' width=100% height=100% ondragstart='return false;'/>"+
											"</div>"+
											"<div style='position:absolute;width:96%;height:20%;left:2%;top:80%;background-color:rgba(80,80,80,1);' align=right>"+lib.config.w_Props[i].count+"</div>"+
										"</div>";
										order_x++;
										if(order_x==3){
											order_y++;
											order_x=0;
										}
									}
								}
								return str;
							};
							var ShopsIntro=function(arg){
								var str = "",order_x=0,order_y=0;
								for(var i in lib.config.w_Shops){
									if(arg!=undefined&&arg!="all"){
										if(!lib.config.w_Shops[i].type.contains(arg)){
											continue;
										}
									}
									if(lib.config.w_Shops[i].buy){
										var click = "onclick=game.w_div34_1_display('"+i+"')";
										str += "<div style='position:absolute;width:28%;height:30%;left:"+(31*order_x+3)+"%;top:"+(35*order_y+5)+"%;background-color:rgba(80,80,80,0.5);border:1px solid rgba(80,80,80,1);'>"+
											"<div id='props"+order_x+"' style='position:absolute;width:96%;height:76%;left:2%;top:2%;background-color:rgba(80,80,80,1);cursor:pointer;' "+click+">"+
												"<img src='"+lib.assetURL+"extension/新斗地主/"+i+".png' width=100% height=100% ondragstart='return false;'/>"+
											"</div>"+
											"<div style='position:absolute;width:96%;height:20%;left:2%;top:80%;background-color:rgba(80,80,80,1);' align=right>"+lib.config.w_Shops[i].prise+"票</div>"+
										"</div>";
										order_x++;
										if(order_x==3){
											order_y++;
											order_x=0;
										}
									}
								}
								return str;
							};
							div33.style["background-color"] = "rgba(0,0,0,0.8)";
							div33.style["border"] = "4px solid rgba(0,0,0,1)";
							func.setDivPos(div33,"45%","65%","40%","0%");
							div33.style.display="none";
							div24.onclick=function(){
								Page = func.Page.second_window;
								for(var i=0;i<Page.length;i++){
									var id = Page[i];
									document.getElementById(id).style.display="none";
								}
								Page = func.Page.second_window_window;
								for(var i=0;i<Page.length;i++){
									var id = Page[i];
									document.getElementById(id).style.display="none";
								}
								div33.innerHTML="<div style='position:absolute;width:26%;height:10%;left:2%;top:5%;background-color:rgba(80,80,80,0.5);border:3px solid rgba(80,80,80,1);color:rgba(100,100,100,1);font-family:lishu;font-size:150%;line-height:120%' >全部</div>"+
								"<div style='position:absolute;width:60%;height:90%;left:35%;top:5%;background-color:rgba(80,80,80,0.5);border:3px solid rgba(80,80,80,1);overflow:auto;'>"+
									PropsIntro()+
								"</div>";
								div33.style.display="";
							};
							this.appendChild(div33);
							this.appendChild(div33_1);
							var div25 = ui.create.div();
							div25.id="div25";
							func.setDivPos(div25,"6%","12%","34%","70%");
							div25.style["background-color"]="rgba(80,80,80,0.5)";
							div25.innerHTML = "<div style='position:absolute;width:98%;height:98%;left:1%;top:1%;background-color:rgba(0,0,0,1);cursor:pointer;'>"+
								"<img src='"+lib.assetURL+"extension/新斗地主/w_marketbutton.png' width=100% height=100% ondragstart='return false;'/>"+
							"</div>";
							div25.style.display="none";
							div25.onclick=function(arg){
								arg = typeof arg != 'string'?'all':arg;
								Page = func.Page.second_window;
								for(var i=0;i<Page.length;i++){
									var id = Page[i];
									document.getElementById(id).style.display="none";
								}
								Page = func.Page.second_window_window;
								for(var i=0;i<Page.length;i++){
									var id = Page[i];
									document.getElementById(id).style.display="none";
								}
								div34.innerHTML="<div style='position:absolute;width:26%;height:10%;left:2%;top:5%;background-color:rgba(80,80,80,0.5);border:3px solid rgba(80,80,80,1);color:rgba(100,100,100,1);font-family:lishu;font-size:150%;line-height:120%;cursor:pointer;' onclick=div25.onclick('all') >全部</div>"+
								"<div style='position:absolute;width:26%;height:10%;left:2%;top:20%;background-color:rgba(80,80,80,0.5);border:3px solid rgba(80,80,80,1);color:rgba(100,100,100,1);font-family:lishu;font-size:150%;line-height:120%;cursor:pointer;' onclick=div25.onclick('character') >武将</div>"+
								"<div style='position:absolute;width:26%;height:10%;left:2%;top:35%;background-color:rgba(80,80,80,0.5);border:3px solid rgba(80,80,80,1);color:rgba(100,100,100,1);font-family:lishu;font-size:150%;line-height:120%;cursor:pointer;' onclick=div25.onclick('skin') >头像</div>"+
								"<div style='position:absolute;width:26%;height:10%;left:2%;top:50%;background-color:rgba(80,80,80,0.5);border:3px solid rgba(80,80,80,1);color:rgba(100,100,100,1);font-family:lishu;font-size:150%;line-height:120%;cursor:pointer;' onclick=div25.onclick('dianjiang') >点将卡</div>"+
								"<div style='position:absolute;width:60%;height:90%;left:35%;top:5%;background-color:rgba(80,80,80,0.5);border:3px solid rgba(80,80,80,1);overflow:auto;'>"+
									ShopsIntro(arg)+
								"</div>";
								div34.style.display="";
							};
							this.appendChild(div25);
							var div34 = ui.create.div();
							div34.id="div34";
							div34.style["background-color"] = "rgba(0,0,0,0.8)";
							div34.style["border"] = "4px solid rgba(0,0,0,1)";
							div34.style.display="none";
							func.setDivPos(div34,"45%","65%","40%","0%");
							this.appendChild(div34);
							var div34_1 = ui.create.div();
							div34_1.style["background-color"] = "#acc572";
							div34_1.style["border"] = "4px solid #8ca552";
							func.setDivPos(div34_1,"25%","20%","50%","25%");
							div34_1.style.display="none";
							div34_1.id="div34_1";
							var div26 = ui.create.div();
							div26.id="div26";
							func.setDivPos(div26,"6%","12%","42%","70%");
							div26.style["background-color"]="rgba(80,80,80,0.5)";
							div26.innerHTML = "<div style='position:absolute;width:98%;height:98%;left:1%;top:1%;background-color:rgba(0,0,0,1);cursor:pointer;'>"+
								"<img src='"+lib.assetURL+"extension/新斗地主/w_signinbutton.png' width=100% height=100% ondragstart='return false;'/>"+
							"</div>";
							div26.style.display='none';
							div26.onclick=function(){
								Page = func.Page.second_window;
								for(var i=0;i<Page.length;i++){
									var id = Page[i];
									document.getElementById(id).style.display="none";
								}
								Page = func.Page.second_window_window;
								for(var i=0;i<Page.length;i++){
									var id = Page[i];
									document.getElementById(id).style.display="none";
								}
								var dis1 = "",dis2 = "";
								if(lib.config.w_SignIn[lib.config.w_SignIn.now].button==1){
									dis1 = "display:none";
								}
								else {
									dis2 = "display:none";
								}
								div35.innerHTML = "<div style='position:absolute;background-color:rgba(80,80,80,0.5);width:40%;height:15%;left:30%;border:2px solid #888;border-radius:5%;font-family:xinwei;font-size:150%;line-height:150%;'>每日签到</div>"+
								"<div style='position:absolute;background-color:rgba(80,80,80,0.5);border:2px solid #888;width:60%;height:60%;left:20%;top:20%;'>"+SignInIntro()+"</div>"+
								"<div style='position:absolute;background-color:rgba(80,80,80,0.5);border:2px solid #888;width:60%;height:10%;left:20%;top:85%;font-family:lishu;line-height:150%;cursor:pointer;"+dis1+"' onclick=game.w_SignInReplay() >签到领取今日奖励</div>"+
								"<div style='position:absolute;background-color:rgba(80,80,80,0.5);border:2px solid #888;width:60%;height:10%;left:20%;top:85%;font-family:lishu;line-height:150%;"+dis2+"' >已连续签到"+lib.config.w_SignIn.lianxu+"天</div>"
								div35.style.display = "";
							};
							this.appendChild(div26);
							var div35 = ui.create.div();
							var SignInIntro = function(){
								var str = "",order = 0;
								var reward = lib.config.w_SignIn[lib.config.w_SignIn.now].reward;
								for(var i in reward){
									str += "<div style='position:absolute;width:90%;height:20%;background-color:rgba(80,80,80,0.5);border:1px solid rgba(80,80,80,1);left:5%;top:"+(25*order+5)+"%;'>"+
										"<div style='position:absolute;width:20%;height:96%;left:2%;top:2%;'>"+
											"<img src='"+lib.assetURL+"extension/新斗地主/"+i+".png' width=100% height=100% ondragstart='return false;' />"+
										"</div>"+
										"<div style='position:absolute;width:50%;height:96%;left:24%;top:2%;font-family:lishu;font-size:80%;line-height:220%;'>"+lib.config.w_Props[i].name+"</div>"+
										"<div style='position:absolute;width:20%;height:48%;left:77%;top:50%;' align=right>*"+reward[i]+"</div>"+
									"</div>";
									order++;
								}
								return str;
							}
							div35.id="div35";
							div35.style["background-color"] = "rgba(0,0,0,0.8)";
							div35.style["border"] = "4px solid rgba(0,0,0,1)";
							func.setDivPos(div35,"45%","65%","40%","0%");
							div35.style.display = 'none';
							this.appendChild(div35);
							var div27 = ui.create.div();
							div27.id="div27";
							func.setDivPos(div27,"6%","12%","82%","-12.5%");
							div27.style["background-color"]="rgba(80,80,80,0.5)";
							div27.innerHTML = "<div style='position:absolute;width:98%;height:98%;left:1%;top:1%;background-color:rgba(0,0,0,1);cursor:pointer;'>"+
								"<img src='"+lib.assetURL+"extension/新斗地主/w_noname.png' width=100% height=100% ondragstart='return false;'/>"+
							"</div>";
							div27.style.display='none';
							div27.onclick=function(){
								Page = func.Page.second_window;
								for(var i=0;i<Page.length;i++){
									var id = Page[i];
									document.getElementById(id).style.display="none";
								}
								Page = func.Page.second_window_window;
								for(var i=0;i<Page.length;i++){
									var id = Page[i];
									document.getElementById(id).style.display="none";
								}
								var dis1 = "",dis2 = "";
								if(lib.config.w_SignIn[lib.config.w_SignIn.now].button==1){
									dis1 = "display:none";
								}
								else {
									dis2 = "display:none";
								}
								var noname = lib.config.w_noname;
								var d1 = "",d2="",d3="";
								var d4 = "",d5="",d6="";
								var nonameList=function(){
									var str = "",order=0;
									for(var i in noname.canBuy){
										var click = "onclick=game.w_noname_buy_ask('"+i+"')"
										str+="<div style='position:absolute;width:100%;height:25%;top:"+(26*order+1)+"%;left:0%;border:1px solid #888;cursor:pointer;'>"+
											"<div style='position:absolute;width:60%;height:100%;top:1%;left:0%;font-family:lishu;text-align:left;line-height:170%;' "+click+">〔"+noname.canBuy[i].name+"〕</div>"+
											"<div style='position:absolute;width:40%;height:50%;left:60%;top:0%;font-size:80%;font-family:lishu;text-align:left;'>单价:"+noname.canBuy[i].prise+"</div>"+
											"<div style='position:absolute;width:40%;height:50%;left:60%;top:50%;font-size:80%;font-family:lishu;text-align:left;'>倍率:"+noname.canBuy[i].beilv+"</div>"+
										"</div>";
										order++;
									}
									return str;
								}
								var buyedList=function(){
									var str = "",order=0;
									for(var i in noname.buyed){
										if(noname.buyed[i].count==0)continue;
										str+="<div style='position:absolute;width:100%;height:25%;top:"+(26*order+1)+"%;left:0%;border:1px solid #888;cursor:pointer;'  >"+
											"<div style='position:absolute;width:60%;height:100%;top:1%;left:0%;font-family:lishu;text-align:left;line-height:170%;' >〔"+noname.buyed[i].name+"〕</div>"+
											"<div style='position:absolute;width:40%;height:50%;left:60%;top:0%;font-size:80%;font-family:lishu;text-align:left;'>兑奖:"+noname.buyed[i].prise+"</div>"+
											"<div style='position:absolute;width:40%;height:50%;left:60%;top:50%;font-size:80%;font-family:lishu;text-align:left;'>数量:"+noname.buyed[i].count+"</div>"+
										"</div>";
										order++;
									}
									return str;
								}
								if(!noname.TPs){
									d1 = "<img src='"+lib.assetURL+"theme/style/cardback/image/ol.png' width=100% height=100% ondragstart='return false'/>";
									d2 = "<img src='"+lib.assetURL+"theme/style/cardback/image/ol.png' width=100% height=100% ondragstart='return false'/>";
									d3 = "<img src='"+lib.assetURL+"theme/style/cardback/image/ol.png' width=100% height=100% ondragstart='return false'/>";
								}
								else {
									d1 = "<img src='"+lib.assetURL+"theme/style/card/image/ol.png' width=100% height=100% ondragstart='return false'/>"+
									"<span style='position:absolute;color:#111;top:5%;left:0%;width:100%;text-align:center;font-size:80%;font-family:lishu;'>"+get.translation(noname.TP['st'].name)+"</span>"+
									"<img src='"+lib.assetURL+"image/card/"+noname.TP['st'].name+".png' style='position:absolute;width:90%;height:80%;left:5%;top:20%;z-index:0;' ondragstart='return false'/>";
									d2 = "<img src='"+lib.assetURL+"theme/style/card/image/ol.png' width=100% height=100% ondragstart='return false'/>"+
									"<span style='position:absolute;color:#111;top:5%;left:0%;width:100%;text-align:center;font-size:80%;font-family:lishu;'>"+get.translation(noname.TP['nd'].name)+"</span>"+
									"<img src='"+lib.assetURL+"image/card/"+noname.TP['nd'].name+".png' style='position:absolute;width:90%;height:80%;left:5%;top:20%;z-index:0;' ondragstart='return false'/>";
									d3 = "<img src='"+lib.assetURL+"theme/style/card/image/ol.png' width=100% height=100% ondragstart='return false'/>"+
									"<span style='position:absolute;color:#111;top:5%;left:0%;width:100%;text-align:center;font-size:80%;font-family:lishu;'>"+get.translation(noname.TP['rd'].name)+"</span>"+
									"<img src='"+lib.assetURL+"image/card/"+noname.TP['rd'].name+".png' style='position:absolute;width:90%;height:80%;left:5%;top:20%;z-index:0;' ondragstart='return false'/>";
								}
								if(!noname.LPs){
									d4 = "<img src='"+lib.assetURL+"theme/style/cardback/image/ol.png' width=100% height=100% ondragstart='return false'/>";
									d5 = "<img src='"+lib.assetURL+"theme/style/cardback/image/ol.png' width=100% height=100% ondragstart='return false'/>";
									d6 = "<img src='"+lib.assetURL+"theme/style/cardback/image/ol.png' width=100% height=100% ondragstart='return false'/>";
								}
								else {
									d4 = "<img src='"+lib.assetURL+"theme/style/card/image/ol.png' style='position:absolute;z-index:0;left:0%;top:0%;' width=100% height=100% ondragstart='return false'/>"+
									"<span style='position:absolute;color:#111;top:5%;left:0%;width:100%;text-align:center;font-size:80%;font-family:lishu;'>"+get.translation(noname.LP['st'].name)+"</span>"+
									"<img src='"+lib.assetURL+"image/card/"+noname.LP['st'].name+".png' style='position:absolute;width:90%;height:80%;left:5%;top:20%;z-index:0;' ondragstart='return false'/>";
									d5 = "<img src='"+lib.assetURL+"theme/style/card/image/ol.png' style='position:absolute;z-index:0;left:0%;top:0%;' width=100% height=100% ondragstart='return false'/>"+
									"<span style='position:absolute;color:#111;top:5%;left:0%;width:100%;text-align:center;font-size:80%;font-family:lishu;'>"+get.translation(noname.LP['nd'].name)+"</span>"+
									"<img src='"+lib.assetURL+"image/card/"+noname.LP['nd'].name+".png' style='position:absolute;width:90%;height:80%;left:5%;top:20%;z-index:0;' ondragstart='return false'/>";
									d6 = "<img src='"+lib.assetURL+"theme/style/card/image/ol.png' style='position:absolute;z-index:0;left:0%;top:0%;' width=100% height=100% ondragstart='return false'/>"+
									"<span style='position:absolute;color:#111;top:5%;left:0%;width:100%;text-align:center;font-size:80%;font-family:lishu;'>"+get.translation(noname.LP['rd'].name)+"</span>"+
									"<img src='"+lib.assetURL+"image/card/"+noname.LP['rd'].name+".png' style='position:absolute;width:90%;height:80%;left:5%;top:20%;z-index:0;' ondragstart='return false'/>";
								}
								var str2 = lib.config.w_noname.TPs?"距下期竞猜还剩：":"距本期开奖还剩：";
								div36.innerHTML="<div style='position:absolute;width:48%;height:35%;background-color:rgba(80,80,80,0.5);left:1%;top:1%;'>"+
									"<div id='div36_div' style='position:absolute;width:95%;height:25%;left:2.5%;top:2.5%;font-family:lishu;text-align:left;line-height:120%;border:1px solid #888;'>"+str2+noname.time.min+":"+noname.time.sec+"</div>"+
									"<div style='position:absolute;width:30%;height:60%;left:2.5%;top:35%;'>"+d1+"</div>"+
									"<div style='position:absolute;width:30%;height:60%;left:35%;top:35%;'>"+d2+"</div>"+
									"<div style='position:absolute;width:30%;height:60%;left:67.5%;top:35%;'>"+d3+"</div>"+
								"</div>"+"<div style='position:absolute;width:48%;height:35%;background-color:rgba(80,80,80,0.5);left:51%;top:1%;'>"+
									"<div style='position:absolute;width:95%;height:25%;left:2.5%;top:2.5%;font-family:lishu;text-align:left;line-height:120%;border:1px solid #888;'>上期(第"+noname.count+"期)开奖：</div>"+
									"<div style='position:absolute;width:30%;height:60%;left:2.5%;top:35%;'>"+d4+"</div>"+
									"<div style='position:absolute;width:30%;height:60%;left:35%;top:35%;'>"+d5+"</div>"+
									"<div style='position:absolute;width:30%;height:60%;left:67.5%;top:35%;'>"+d6+"</div>"+
								"</div>"+"<div style='position:absolute;width:48%;height:60%;background-color:rgba(80,80,80,0.5);left:51%;top:38%;border:1px solid #888;' >"+
									"<div style='position:absolute;background-color:rgba(0,0,0,0.5);width:98%;height:18%;left:1%;top:1%;font-family:lishu;text-align:left;line-height:150%;'>可购买：</div>"+
									"<div style='position:absolute;background-color:rgba(0,0,0,0.5);width:98%;height:80%;left:1%;top:20%;overflow:auto;'>"+nonameList()+"</div>"+
								"</div>"+"<div style='position:absolute;width:48%;height:60%;background-color:rgba(80,80,80,0.5);left:1%;top:38%;border:1px solid #888;' >"+
									"<div style='position:absolute;background-color:rgba(0,0,0,0.5);width:98%;height:18%;left:1%;top:1%;font-family:lishu;text-align:left;line-height:150%;'>已购买：</div>"+
									"<div style='position:absolute;background-color:rgba(0,0,0,0.5);width:98%;height:80%;left:1%;top:20%;overflow:auto;'>"+buyedList()+"</div>"+
								"</div>";
								div36.style.display = "";
							};
							this.appendChild(div27);
							var div36 = ui.create.div();
							div36.id="div36";
							div36.style["background-color"] = "rgba(0,0,0,0.8)";
							div36.style["border"] = "4px solid rgba(0,0,0,1)";
							func.setDivPos(div36,"45%","65%","40%","0%");
							div36.style.display = 'none';
							this.appendChild(div36);
							this.appendChild(div34_1);
						},
						content:{
							cardPile:function(list){
								return cardPack;
							},
							chooseCharacterAi:function(player){
								if(player==game.zhu)
									_status.event.trigger('init');
								else if(player!=game.zhu)
									_status.event.trigger('init2');
								characterList.randomSort();
								player.init(characterList.randomRemove());
							},
							gameStart:function(){
								if(!lib.config.task_index.finished){
									game.finishedTask("task_index","每日一斗");
								}
								game.saveConfig("w_fare",lib.config.w_fare+1);
								if(game.zhu==game.me){
									game.saveConfig("w_zhu_fare",lib.config.w_zhu_fare+1);
									if(lib.config.w_goldTicket>=600)game.changeGoldTicket(-600,false);
								}
								else {
									game.saveConfig("w_fan_fare",lib.config.w_fan_fare+1);
									if(lib.config.w_goldTicket>=600)game.changeGoldTicket(-300,false);
								}
							},
							chooseCharacter:function(){
								if(game.me==game.zhu)
									_status.event.trigger('init');
								else if(game.me!=game.zhu)
									_status.event.trigger('init2');
								characterList.randomSort();
								var num = game.me==game.zhu?5:3;
								var list = [];
								if(lib.brawl.newWar.dianjiang){
									var name = lib.brawl.newWar.dianjiang;
									var temp = false;
									for(var i=0;i<game.players.length;i++){
										if(game.players.name==name){
											temp = true;
											break;
										}
									}
									if(temp){
										game.warn("点将失败");
									}
									else {
										list.push(name);
									}
								}
								list = list.concat(characterList.randomRemove(num));
								return list;
							},
						},
						init:function(){
							lib.storage.mode = "newWar";
							game.addCharacterPack({
								character:{
									"w_caocao":["male","wei",4,["w_jianxiong","w_weiwu"],['zhu',"ext:新斗地主/w_caocao.jpg"]],
									"w_guojia":["male","wei",3,["w_tiandu","w_yiji"],["ext:新斗地主/w_guojia.jpg"]],
									"w_xiahoudun":["male","wei",4,["w_ganglie","w_qingjian"],["ext:新斗地主/w_xiahoudun.jpg"]],
									"w_simayi":["male","wei",3,["w_guicai","w_fankui"],["ext:新斗地主/w_simayi.jpg"]],
									"w_zhangliao":["male","wei",4,["w_tuxi","w_zhenwei"],["ext:新斗地主/w_zhangliao.jpg"]],
									"w_xuchu":["male","wei",4,["w_luoyi","w_xiechan"],["ext:新斗地主/w_xuchu.jpg"]],
									"w_zhenji":["female","wei",3,["w_luoshen","w_qingguo"],["ext:新斗地主/w_zhenji.jpg"]],
									"w_lidian":["male","wei",3,["w_xunxun","w_wangxi"],["ext:新斗地主/w_lidian.jpg"]],
									"w_caoang":["male","wei",4,["w_kaikang"],["ext:新斗地主/w_caoang.jpg"]],
									"w_sunquan":["male","wu",4,["w_zhiheng","w_wangzi"],['zhu',"ext:新斗地主/w_sunquan.jpg"]],
									"w_zhouyu":["male","wu",3,["w_yingzi","w_fanjian"],["ext:新斗地主/w_zhouyu.jpg"]],
									"w_ganning":["male","wu",4,["w_qixi","w_fenwei"],["ext:新斗地主/w_ganning.jpg"]],
									"w_lvmeng":["male","wu",4,["w_keji","w_botu"],["ext:新斗地主/w_lvmeng.jpg"]],
									"w_huanggai":["male","wu",4,["w_kurou","w_zhaxiang"],["ext:新斗地主/w_huanggai.jpg"]],
									"w_luxun":["male","wu",3,["reqianxun","w_lianying"],["ext:新斗地主/w_luxun.jpg"]],
									"w_daqiao":["female","wu",3,["w_guose","liuli"],["ext:新斗地主/w_daqiao.jpg"]],
									"w_sunshangxiang":["female","wu",3,["w_xiaoji","w_jieyin"],["ext:新斗地主/w_sunshangxiang.jpg"]],
									"w_lingcao":["male","wu",4,["w_dujin"],["ext:新斗地主/w_lingcao.jpg"]],
								//	"w_yuanshao":["male","qun",4,["w_luanji","w_jianzhen"],['zhu',"ext:新斗地主/w_yuanshao.jpg"]],
									"w_lvbu":["male","qun",4,["w_wushuang","w_zhanshen"],['zhu',"ext:新斗地主/w_lvbu.jpg"]],
									"w_huatuo":["male","qun",3,["w_puji","jijiu"],["ext:新斗地主/w_huatuo.jpg"]],
									"w_diaochan":["female","qun",3,["w_biyue","w_lijian"],["ext:新斗地主/w_diaochan.jpg"]],
									"w_yuanshu":["male","qun",4,["w_yongsi","w_weidi"],["ext:新斗地主/w_yuanshu.jpg"]],
									"w_huaxiong":["male","qun",6,["w_shiyong"],["ext:新斗地主/w_huaxiong.jpg"]],
									"w_gongsunzan":["male","qun",4,["w_xiaoqiu","w_yicong"],["ext:新斗地主/w_gongsunzan.jpg"]],
									"w_niufu":["male","qun",4,["w_kundou"],["ext:新斗地主/w_niufu.jpg"]],
									"w_jushou":["male","qun",3,["w_jianying","w_shibei"],["ext:新斗地主/w_jushou.jpg"]],
								//	"w_wangyun":["male","qun",4,["w_lianji","w_mouchen"],["ext:新斗地主/w_wangyun.jpg"]],
									"w_liuxie":["male","qun",3,["w_tianming","w_mizhao"],["ext:新斗地主/w_liuxie.jpg"]],
									"w_liubei":["male","shu",4,["w_rende","w_renwang"],['zhu',"ext:新斗地主/w_liubei.jpg"]],
									"w_guanyu":["male","shu",4,["w_wusheng","w_yijue"],["ext:新斗地主/w_guanyu.jpg"]],
									"w_zhangfei":["male","shu",4,["w_paoxiao","w_tishen"],["ext:新斗地主/w_zhangfei.jpg"]],
									"w_zhaoyun":["male","shu",4,["w_longdan","w_shuiren"],["ext:新斗地主/w_zhaoyun.jpg"]],
									"w_machao":["male","shu",4,["mashu","w_tieqi"],["ext:新斗地主/w_machao.jpg"]],
									"w_zhugeliang":["male","shu",3,["w_huoji","w_bazhen","w_kanpo"],["ext:新斗地主/w_zhugeliang.jpg"]],
									"w_huangyueying":["female","shu",3,["w_jizhi","w_qicai"],["ext:新斗地主/w_huangyueying.jpg"]],
									"w_xushu":["male","shu",3,["w_zhuhai","w_jianyan"],["ext:新斗地主/w_xushu.jpg"]],
								//	"w_wangping":["male","shu",4,["w_feijiang"],["ext:新斗地主/w_wangping.jpg"]],
									"w_lifeng":["male","shu",3,["w_tunchu","w_shuliang"],["ext:新斗地主/w_lifeng.jpg"]],
									"w_wangyi":["female","wei",3,["w_zhenlie","w_miji"],["ext:新斗地主/w_wangyi.jpg"]],
									"w_zhangchunhua":["female","wei",3,["w_jueqing","w_shangshi"],["ext:新斗地主/w_zhangchunhua.jpg"]],
									"w_lingtong":["male","wu",4,["w_xuanfeng"],["ext:新斗地主/w_lingtong.jpg"]],
									"w_sunce":["male","wu",4,["w_jiang","w_hunzi","w_zhiba"],["ext:新斗地主/w_sunce.jpg"]],
									"w_yuji":["male","qun",3,["w_qianhuan"],["ext:新斗地主/w_yuji.jpg"]],
									"w_zuoci":["male","qun",3,["w_xinsheng"],["ext:新斗地主/w_zuoci.jpg"]],
									"w_liufeng":["male","shu",4,["w_xiansi"],["ext:新斗地主/w_liufeng.jpg"]],
								},
								skill:{
									w_xinsheng:{
										audio:"ext:新斗地主:2",
										init:function(player){
											player.storage.w_xinsheng = [];
										},
										trigger:{player:["phaseBefore","damageEnd"],global:"gameDrawAfter"},
										priority:10,
										forced:true,
										content:function(){
											"step 0"
											var list = [];
											for(var i in lib.brawl.newWar.character.character){
												if(game.hasPlayer(function(current){
													return current.name==i;
												}))continue;
												list.push(i);
											}
											list.randomSort();
											event.list = list.randomGets(2);
											var maxHp = lib.brawl.newWar.character.character[event.list[0]][2]+lib.brawl.newWar.character.character[event.list[1]][2];
											player.gainMaxHp(maxHp-player.maxHp);
											event.skills = [];
											"step 1"
											var dialog = ui.create.dialog("<p>新生：选择至多两个非特殊技能</p>","hidden");
											dialog.add([event.list,'character']);
											player.chooseButton(dialog).set("filterButton",function(button){
												var name = button.link;
												var skills = lib.brawl.newWar.character.character[name][3].slice(0);
												for(var i=0;i<skills.length;i++){
													var info=lib.skill[skills[i]];
													if(info.unique&&!info.gainable){
														skills.splice(i--,1);
													}
													else if(event.skills.contains(skills[i])){
														skills.splice(i--,1);
													}
													else if(player.hasSkill(skills[i])){
														skills.splice(i--,1);
													}
												}
												return skills.length;
											}).set('ai',function(button){
												return Math.random()*10%5;
											});
											"step 2"
											if(result.bool){
												var name = result.links[0];
												var skills = lib.brawl.newWar.character.character[name][3].slice(0);
												for(var i=0;i<skills.length;i++){
													var info=lib.skill[skills[i]];
													if(info.unique&&!info.gainable){
														skills.splice(i--,1);
													}
													else if(event.skills.contains(skills[i])){
														skills.splice(i--,1);
													}
													else if(player.hasSkill(skills[i])){
														skills.splice(i--,1);
													}
												}
												player.chooseControl(skills,"返回",function(event,player){
													return skills.randomGet();
												}).prompt="<p>选择要获得的技能</p>";
											}
											else {
												event.finish();
											}
											"step 3"
											if(result.control=="返回"){
												event.goto(1);
											}
											else {
												event.skills.push(result.control);
												if(event.skills.length<2)event.goto(1);
											}
											"step 4"
											for(var i=0;i<event.skills.length;i++){
												player.addSkill(event.skills[i]);
												player.popup(event.skills[i]);
												player.storage.w_xinsheng.push(event.skills[i]);
												game.delay();
											}
										},
										group:["w_xinsheng_remove"],
										subSkill:{
											remove:{
												trigger:{player:'phaseBefore'},
												priority:15,
												direct:true,
												content:function(){
													for(var i=0;i<player.storage.w_xinsheng.length;i++){
														player.removeSkill(player.storage.w_xinsheng[i]);
													}
												}
											}
										}
									},
									w_jiang:{
										audio:'ext:新斗地主:2',
										trigger:{player:'useCardToBefore',target:'useCardToBefore'},
										filter:function(event,player){
											return event.card.name=="juedou"||(event.card.name=='sha'&&get.color(event.card)=='red');
										},
										priority:7,
										forced:true,
										locked:true,
										content:function(){
											player.draw();
										},
										ai:{
											effect:{
												player:function(card,player,target){
													if(card.name=='juedou'||(card.name=='sha'&&get.color(card)=='red')){
														return [1,0.5];
													}
												}
											}
										},
										group:["w_jiang_draw"],
										subSkill:{
											draw:{
												trigger:{source:'damageBefore',player:'damageBefore'},
												filter:function(event,player){
													return event.card.name=="juedou"||(event.card.name=='sha'&&get.color(event.card)=='red');
												},
												direct:true,
												locked:true,
												content:function(){
													trigger.num++;
												},
											}
										}
									},
									w_yinghun:{
										audio:'ext:新斗地主:2',
										trigger:{player:'phaseBegin'},
										priority:-10,
										direct:true,
										content:function(){
											"step 0"
											event.num = player.num('e')%2==0?player.num('e')/2:(player.num('e')+1)/2;
											event.num++;
											player.chooseTarget("触发【英魂】<p>可以令一名其他角色摸牌或弃牌</p>",function(card,player,target){
												return target!=player;
											}).ai=function(target){
												if(event.num==1){
													return get.attitude(player,target)>2;
												}
												else {
													var order = 2;
													if(get.attitude(player,target)<0){
														order += Math.max(1+event.num-target.num('he'),-0.5);
													}
													else {
														if(target.hasSkillTag('useCard')||target.hasSkillTag('loseCard')||target.hasSkillTag('loseEquip')){
															order += 2.5;
														}
													}
													return order;
												}
											};
											"step 1"
											if(result.bool){
												event.target = result.targets[0];
												player.chooseControl("选项一","选项二",function(event,player){
													return get.attitude(player,event.target)>2?"选项一":"选项二";
												}).prompt="<p>选项一：摸"+get.cnNumber(event.num,true)+"弃一</p><p>选项二：摸一弃"+get.cnNumber(event.num,true);
											}
											else {
												event.finish();
											}
											"step 2"
											player.logSkill("w_yinghun",event.target);
											if(result.control=="选项一"){
												event.target.draw(event.num);
												event.target.chooseToDiscard('he',true);
											}
											else {
												event.target.draw(1);
												event.target.chooseToDiscard('he',event.num,true);
											}
										}
									},
									w_hunzi:{
										audio:'ext:新斗地主:2',
										unique:true,
										mark:true,
										marktext:"觉",
										intro:{
											content:"未觉醒",
										},
										skillAnimation:true,
										animationColor:"fire",
										trigger:{player:'phaseBegin'},
										priority:10,
										filter:function(event,player){
											if(player.storage.w_hunzi)return false;
											return !game.hasPlayer(function(current){
												return current.hp<player.hp;
											});
										},
										forced:true,
										content:function(){
											"step 0"
											player.storage.w_hunzi=true;
											player.awakenSkill("w_hunzi");
											"step 1"
											player.loseMaxHp();
											"step 2"
											player.addSkill("w_yingzi");
											player.addSkill("w_yinghun");
											"step 3"
											game.createTrigger('phaseBegin','w_yinghun',player,trigger);
										}
									},
									w_zhiba:{
										unique:true,
										zhuSkill:true,
										init:function(player,skill){
											if(player.identity!='zhu'){
												player.disableSkill(skill,['w_zhiba']);
												return;
											}
										},
										audio:'ext:新斗地主:2',
										enable:'phaseUse',
										filter:function(event,player){
											return player.num('h')&&game.hasPlayer(function(current){
												return current!=player&&current.num("h");
											});
										},
										usable:1,
										selectTarget:1,
										filterTarget:function(card,player,target){
											return target!=player&&target.num('h');
										},
										content:function(){
											'step 0'
											player.chooseToCompare(target);
											'step 1'
											if(result.bool){
												if(player.canUse({name:'juedou'},target))
													player.useCard({name:'juedou'},target);
											}
											else {
												player.line(target,'green');
												target.discardPlayerCard(player,'he',true);
											}
										},
										ai:{
											order:3.5,
											result:{
												target:-2.5,
												player:function(card,player,target){
													if(!player.countCards('h',function(c){
														return c.number>=10;
													})&&target.num('h')>=3)return -1;
												}
											}
										}
									},
									w_xuanfeng:{
										audio:"ext:新斗地主:2",
										trigger:{player:["loseEnd","phaseDiscardEnd"]},
										filter:function(event,player){
											if(event.name=='phaseDiscard'){
												return event.cards;
											}
											else {
												for(var i=0;i<event.cards.length;i++){
													if(event.cards[i].original=='e'){
														return true;
													}
												}
												return false;
											}
										},
										direct:true,
										content:function(){
											"step 0"
											event.num = 0;
											for(var i=0;i<trigger.cards.length;i++){
												if(trigger.cards[i].original=='e'){
													event.num++;
												}
											}
											"step 1"
											player.chooseControl("选项一","选项二","取消",function(event,player){
												if(game.hasPlayer(function(current){
													return current!=player&&player.canUse({name:"sha"},current,false)&&get.effect(current,{name:'sha'},player,player)>0;
												}))return "选项二";
												else if(game.hasPlayer(function(current){
													return current!=player&&get.attitude(player,current)<0&&current.num("he")>0;
												}))return "选项一";
												else 
													return "取消";
											}).set("prompt","触发【旋风】<p>选项一：弃置一名其他角色的一张牌</p><p>选项二：视为对一名其他角色使用一张[杀]</p>");
											"step 2"
											if(result.control=='选项一'){
												event.evt = "discard";
												player.chooseTarget("<p>选择一名其他角色,弃置他的一张牌</p>",function(card,player,target){
													return target!=player&&target.num('he');
												}).ai=function(target){
													return get.attitude(player,target)<0;
												};
											}
											else if(result.control=="选项二"){
												event.evt = "useSha";
												player.chooseTarget("<p>选择一名其他角色,视为对其使用一张[杀]</p>",function(card,player,target){
													return target!=player&&player.canUse({name:'sha'},target,false);
												}).ai=function(target){
													return get.effect(target,{name:'sha'},player,player)>0;
												};
											}
											else {
												event.finish();
											}
											"step 3"
											if(result.bool){
												player.logSkill("w_xuanfeng",result.targets[0]);
												if(event.evt=="discard"){
													player.discardPlayerCard(result.targets[0],'he',true);
												}
												else {
													player.useCard({name:'sha'},result.targets[0]);
												}
											}
											else {
												event.goto(1);
											}
											"step 4"
											event.num--;
											if(event.num>0){
												event.goto(1);
											}
											else {
												event.finish();
											}
										},
										ai:{
											noe:true,
											reverseEquip:true,
											useEquip:true,
											loseEquip:true,
											effect:{
												target:function(card,player,target,current){
													if(get.type(card)=='equip') return [1,3];
													if(card.name=='jiedao')return [1,2];
												}
											}
										}
									},
									w_jueqing:{
										audio:"ext:新斗地主:2",
										trigger:{source:'damageBefore'},
										priority:20,
										forced:true,
										locked:true,
										content:function(){
											"step 0"
											event.num = trigger.num;
											trigger.untrigger();
											trigger.finish();
											"step 1"
											var ex=0;
											if(trigger.card&&trigger.card.name=='sha'){
												if(player.hasSkill('jiu')) ex++;
												if(player.hasSkill('luoyi2')) ex++;
												if(player.hasSkill('reluoyi2')) ex++;
											}
											trigger.player.loseHp(event.num+ex);
										},
										ai:{
											jueqing:true,
										}
									},
									w_shangshi:{
										audio:"ext:新斗地主:2",
										trigger:{player:['loseEnd','changeHp','gainEnd']},
										filter:function(event,player){
											return player.num('h')<player.maxHp-player.hp;
										},
										content:function(){
											player.draw(player.maxHp-player.hp-player.num('h'));
										}
									},
									w_zhenlie:{
										audio:"ext:新斗地主:2",
										trigger:{target:"useCardToBefore"},
										filter:function(event,player){
											if(event.player==player)return false;
											return event.card.name=='sha'||get.type(event.card)=='trick';
										},
										priority:8,
										check:function(event,player){
											if(get.attitude(player,event.player)>0){
												return false;
											}
											if(get.tag(event.card,'respondSha')){
												if(player.countCards('h',{name:'sha'})==0){
													return true;
												}
											}
											else if(get.tag(event.card,'respondShan')){
												if(player.countCards('h',{name:'shan'})==0){
													return true;
												}
											}
											else if(get.tag(event.card,'damage')){
												if(player.countCards('h')<2) return true;
											}
											else if(event.card.name=='shunshou'&&player.hp>2){
												return true;
											}
											return false;
										},
										content:function(){
											"step 0"
											trigger.untrigger();
											trigger.finish();
											player.loseHp();
											if(!(trigger.player&&trigger.player.num('he')))event.finish();
											"step 1"
											player.discardPlayerCard(trigger.player,'he',true);
										}
									},
									w_miji:{
										audio:"ext:新斗地主:2",
										trigger:{player:"phaseEnd"},
										filter:function(event,player){
											return player.isDamaged();
										},
										content:function(){
											"step 0"
											event.num = player.maxHp-player.hp;
											player.draw(event.num);
											"step 1"
											var check=player.countCards('h')-event.num;
											player.chooseCardTarget({
												selectCard:event.num,
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
												prompt:'是否将'+get.cnNumber(event.num)+'张手牌交给一名其他角色',
											}).set('check',check);
											"step 2"
											if(result.bool){
												result.targets[0].gain(result.cards,player);
												player.$give(result.cards.length,result.targets[0]);
											}
										}
									},
									w_renjie:{
										init:function(player){
											player.storage.w_renjie=0;
										},
										locked:true,
										marktext:'忍',
										intro:{
											content:function(storage){
												return "标记数量："+storage;
											}
										},
										group:["w_renjie_phaseDiscard","w_renjie_damage"],
										subSkill:{
											phaseDiscard:{
												trigger:{player:"loseEnd"},
												filter:function(event,player){
													var jieguo = false;
													var temp = 0;
													while(1){
														var name = event.getParent(temp).name;
														if(name=="phaseLoop")break;
														if(name=="phaseDiscard"){
															jieguo = true;
															break;
														}
														temp++;
													}
													return jieguo;
												},
												locked:true,
												forced:true,
												content:function(){
													player.storage.w_renjie += trigger.cards.length;
													player.markSkill("w_renjie");
													player.syncStorage("w_renjie");
												}
											},
											damage:{
												trigger:{player:"damageEnd"},
												locked:true,
												forced:true,
												content:function(){
													player.storage.w_renjie += trigger.num;
													player.markSkill("w_renjie");
													player.syncStorage("w_renjie");
												}
											}
										}
									},
									w_tunchu:{
										group:["w_tunchu_Mod"],
										init:function(player){
											player.storage.w_tunchu = [];
										},
										marktext:'粮',
										intro:{
											content:"cards"
										},
										trigger:{player:"phaseDrawBegin"},
										filter:function(event,player){
											return player.storage.w_tunchu.length==0;
										},
										content:function(){
											"step 0"
											trigger.num+=2;
											"step 1"
											player.addTempSkill("w_tunchu_Temp","phaseEnd");
										},
										subSkill:{
											Temp:{
												trigger:{player:"phaseDrawEnd"},
												direct:true,
												content:function(){
													"step 0"
													player.chooseCard("你可以将任意张手牌置于武将牌上称为[粮]",[1,Infinity]).ai=function(card){
														if(!player.hasFriend())return 0;
														if(player.hasSha()&&game.hasPlayer(function(current){
															return player.canUse({name:'sha'},current)&&get.effect(current,{name:"sha"},player,player)>0;
														}))return 0;
														if(ui.selected.cards.length)return 0;
														return 6-get.value(card);
													};
													"step 1"
													if(result.bool){
														player.lose(result.cards,ui.special);
														player.storage.w_tunchu=player.storage.w_tunchu.concat(result.cards);
														player.syncStorage('w_tunchu');
														player.markSkill('w_tunchu');
														game.log(player,'将',result.cards,"置于武将牌上作为'粮'");
													}
													else 
														event.finish();
												}
											},
											Mod:{
												mod:{
													cardEnabled:function(card,player){
														if(player.storage.w_tunchu.length&&card.name=="sha")return false;
													}
												},
											}
										}
									},
									w_shuliang:{
										trigger:{global:"phaseEnd"},
										filter:function(event,player){
											if(event.player.num('h')>=event.player.hp)return false;
											return player.storage.w_tunchu&&player.storage.w_tunchu.length;
										},
										direct:true,
										content:function(){
											"step 0"
											player.chooseCardButton("你可以将一张粮置入弃牌堆,令当前回合角色摸两张牌",player.storage.w_tunchu,1).ai=function(button){
												return get.attitude(player,trigger.player)>2;
											};
											"step 1"
											if(result.bool){
												var card=result.links[0];
												player.discard(card);
												player.storage.w_tunchu.remove(card);
												if(!player.storage.w_tunchu.length){
													player.unmarkSkill('w_tunchu');
												}
												else{
													player.markSkill('w_tunchu');
												}
												player.syncStorage('w_tunchu');
											}
											else 
												event.finish();
											"step 2"
											player.logSkill("w_shuliang",trigger.player);
											trigger.player.draw(2);
										}
									},
									w_guose:{
										audio:"ext:新斗地主:2",
										enable:'phaseUse',
										usable:1,
										discard:false,
										filter:function(event,player){
											return player.countCards('he',{suit:'diamond'})>0;
										},
										prepare:'throw',
										position:'he',
										filterCard:{suit:'diamond'},
										filterTarget:function(card,player,target){
											if(player==target) return false;
											if(target.hasJudge('lebu')) return true;
											return lib.filter.targetEnabled({name:'lebu'},player,target);
										},
										check:function(card){
											return 7-get.value(card);
										},
										content:function(){
											if(target.hasJudge('lebu')){
												target.discard(target.getJudge('lebu'));
												if(ui.But&&game.me==player&&lib.config.But_daqiao==false){
													lib.storage.w_guose_dis=true;
												}
											}
											else{
												var next=player.useCard({name:'lebu'},target,cards);
												next.animate=false;
												next.audio=false;
												if(ui.But&&game.me==player&&lib.config.But_daqiao==false){
													lib.storage.w_guose_use=true;
												}
											}
											if(lib.storage.w_guose_dis&&lib.storage.w_guose_use){
												game.gainBut("But_daqiao","国色芳华");
												delete lib.storage.w_guose_dis;
												delete lib.storage.w_guose_use;
											}
											player.draw();
										},
										ai:{
											result:{
												target:function(player,target){
													if(target.hasJudge('lebu')) return -get.effect(target,{name:'lebu'},player,target);
													return get.effect(target,{name:'lebu'},player,target);
												}
											},
											order:9,
										}
									},
									w_lianying:{
										audio:"ext:新斗地主:2",
										trigger:{player:'loseEnd'},
										direct:true,
										filter:function(event,player){
											if(player.countCards('h')) return false;
											for(var i=0;i<event.cards.length;i++){
												if(event.cards[i].original=='h') return true;
											}
											return false;
										},
										content:function(){
											"step 0"
											var num=0;
											for(var i=0;i<trigger.cards.length;i++){
												if(trigger.cards[i].original=='h') num++;
											}
											player.chooseTarget('选择发动连营的目标',[1,num]).ai=function(target){
												var player=_status.event.player;
												if(player==target) return get.attitude(player,target)+10;
												return get.attitude(player,target);
											}
											"step 1"
											if(result.bool){
												if(ui.But&&game.me==player&&lib.config.But_luxun==false){
													if(lib.storage.w_lianying==undefined){
														lib.storage.w_lianying=0;
													}
													lib.storage.w_lianying++;
													if(lib.storage.w_lianying>=10){
														game.gainBut("But_luxun","儒生雄才");
														delete lib.storage.w_lianying;
													}
												}
												player.logSkill('relianying',result.targets);
												game.asyncDraw(result.targets);
											}
										},
										group:["w_lianying_count"],
										ai:{
											threaten:0.8,
											effect:{
												target:function(card){
													if(card.name=='guohe'||card.name=='liuxinghuoyu') return 0.5;
												}
											},
											noh:true,
										},
										subSkill:{
											count:{
												trigger:{player:'phaseBegin'},
												direct:true,
												content:function(){
													if(lib.storage.w_lianying){
														delete lib.storage.w_lianying;
													}
												}
											},
										},
									},
									w_jianxiong:{
										audio:'ext:新斗地主:4',
										trigger:{player:'damageEnd'},
										direct:true,
										content:function(){
											'step 0'
											var chooselist = ['选项一'];
											var str = "触发【奸雄】<p>选项一：摸"+get.cnNumber(trigger.num)+"张牌</p>";
											if(get.itemtype(trigger.cards)=='cards'&&get.position(trigger.cards[0])=='d'){
												chooselist.push('选项二');
												str += "<p>选项二：获得对你造成伤害的牌(<span class='yellowtext'>"+get.translation(trigger.cards[0])+"</span>";
												if(trigger.cards.length>3){
													str += "等共"+get.cnNumber(trigger.cards.length)+"张牌";
												}
												else {
													for(var i=1;i<trigger.cards.length;i++){
														str += "、<span class='yellowtext'>"+get.translation(trigger.cards[i])+"</span>";
													}
												}
												str += ")</p>";
											}
											player.chooseControl(chooselist,'取消',function(event,player){
												if(chooselist.length==1)return '选项一';
												var cardValue = 0;
												for(var i=0;i<trigger.cards.length;i++){
													if(trigger.cards[i].name=='sha'&&player.countCards('h',{name:'sha'})){
														cardValue += 0.5;
														continue;
													}
													cardValue = get.value(trigger.cards[i])||get.equipValue(trigger.cards[i]);
												}
												var unValue = 2;
												for(var i=1;i<trigger.num;i++){
													unValue += 2*unValue;
												}
												return cardValue>unValue?'选项二':'选项一';
											}).set("prompt",str);
											'step 1'
											if(result.control=='选项一'){
												player.logSkill('w_jianxiong');
												player.draw(trigger.num);
												if(lib.config.But_caocao==false&&player==game.me&&ui.But){
													if(lib.storage.w_jianxiong==undefined){
														lib.storage.w_jianxiong=0;
													}
													lib.storage.w_jianxiong+=trigger.num;
													if(lib.storage.w_jianxiong>=5){
														game.gainBut('But_caocao');
														game.warn("获得战功：<span class='greentext'>【治世能臣】</span>");
														delete lib.storage.w_jianxiong;
													}
												}
											}
											else if(result.control=='选项二'){
												player.logSkill('w_jianxiong');
												game.log(player,"获得了",trigger.cards);
												player.gain(trigger.cards);
												player.$gain2(trigger.cards);
											}
											else
												event.finish();
										},
										ai:{
											maixie:true,
											maixie_hp:true,
											effect:{
												target:function(card,player,target){
													if(player.hasSkillTag('jueqing',false,target)) return [1,-1];
													if(get.tag(card,'damage')) return [1,(get.value(card)-get.tag(card,'damage'))*0.2];
												}
											}
										}
									},
									w_weiwu:{
										audio:'ext:新斗地主:true',
										init:function(player,skill){
											if(player.identity!='zhu'){
												player.disableSkill(skill,['w_weiwu']);
												return;
											}
											player.storage.w_weiwu = false;
											player.markSkill('w_weiwu');
										},
										unique:true,
										zhuSkill:true,
										skillAnimation:true,
										animationColor:'thunder',
										marktext:'限',
										intro:{
											name:'魏武',
											content:'limited',
										},
										trigger:{player:'phaseEnd'},
										filter:function(event,player){
											return !player.storage.w_weiwu;
										},
										check:function(event,player){
											if(!game.hasPlayer(function(current){
												return get.attitude(player,current)<0;
											}))return false;
											if(player.countCards('h',{name:'sha'})){
												if(player.countCards('h',{name:'sha'})>2)return false;
											}
											return true;
										},
										content:function(){
											player.storage.w_weiwu = true;
											player.awakenSkill("w_weiwu");
											player.insertPhase();
										}
									},
									w_yiji:{
										audio:'ext:新斗地主:2',
										trigger:{player:'damageEnd'},
										filter:function(event,player){
											return event.num;
										},
										direct:true,
										content:function(){
											'step 0'
											player.chooseControl('确定','取消',function(event,player){
												return '确定';
											}).set("prompt",get.prompt("w_yiji"));
											'step 1'
											if(result.control=='确定'){
												player.logSkill("w_yiji");
												event.cards = get.cards(2);
											}
											else
												event.goto(5)
											'step 2'
											player.chooseCardButton("【遗计】<p>选择1~2张牌</p>",[1,2],event.cards,true).ai=function(button){
												if(ui.selected.buttons.length>0)return -1;
												return 2;
											};
											'step 3'
											lib.storage.cards = result.links;
											var str = "<span class='yellowtext'>"+get.translation(lib.storage.cards[0])+"</span>";
											if(lib.storage.cards.length>1)
												str +="、<span class='yellowtext'>"+get.translation(lib.storage.cards[1])+"</span>";
											player.chooseTarget("将"+str+"交给一名角色",1,true).ai=function(target){
												var att = get.attitude(_status.event.player,target);
												var add = target.hasSkillTag('useCard')?2:0;
												if(get.type(lib.storage.cards[0])=='equip'){
													if(target.hasSkillTag('useEquip'))
														add += 2;
												}
												if(get.type(lib.storage.cards[0])=='trick'){
													if(target.hasSkillTag('useTrick'))
														add += 2;
												}
												if(get.color(lib.storage.cards[0])=='black'){
													if(target.hasSkillTag('useBlack'))
														add += 2;
												}
												if(get.color(lib.storage.cards[0])=='red'){
													if(target.hasSkillTag('useRed'))
														add += 2;
												}
												if(lib.storage.cards[0].name=='du'){
													if(target.hasSkillTag('nodu')) return 0;
													return 1-att;
												}
												return att-4+add;
											};
											'step 4'
											event.cards.remove(lib.storage.cards);
											result.targets[0].gain(lib.storage.cards,'draw');
											if(result.targets[0]!=player&&player==game.me&&lib.config.But_guojia==false&&ui.But){
												if(lib.storage.w_yiji==undefined){
													lib.storage.w_yiji=0;
												}
												lib.storage.w_yiji+=lib.storage.cards.length;
												if(lib.storage.w_yiji>=5){
													game.gainBut("But_guojia");
													game.warn("获得战功：<span class='greentext'>【计平天下】</span>");
													delete lib.storage.w_yiji;
												}
											}
											game.log(result.targets[0],"(从<span class='greentext'>【遗计】</span>)获得了"+get.cnNumber(lib.storage.cards.length)+"张牌");
											if(event.cards.length)
												event.goto(2);
											'step 5'
											if(event.num==undefined){
												event.num = trigger.num;
											}
											event.num--;
											if(event.num>0)
												event.goto(0);
											else
												event.finish();
											delete lib.storage.cards;
										},
										ai:{
											maixie:true,
											maixie_hp:true,
											effect:{
												target:function(card,player,target){
													if(get.tag(card,'damage')){
														if(player.hasSkillTag('jueqing',false,target)||player.hasSkillTag('noSkill',false,target)) return [1,-2];
														if(game.hasPlayer(function(current){
															return (current.hasSkillTag('noSkill',false,target)|| current.hasSkillTag('jueqing',false,target))&&get.attitude(player,current)>2;
														}))return [0,0];
														if(!target.hasFriend()) return;
														if(target.hp>=4) return [1,get.tag(card,'damage')*2];
														if(target.hp==3) return [1,get.tag(card,'damage')*1.5];
														if(target.hp==2) return [1,get.tag(card,'damage')*0.5];
													}
												}
											}
										}
									},
									w_ganglie:{
										audio:'ext:新斗地主:2',
										trigger:{player:'damageEnd'},
										direct:true,
										content:function(){
											'step 0'
											player.chooseControl('确定','取消',function(event,player){
												return '确定';
											}).set('prompt',get.prompt('w_ganglie'));
											'step 1'
											if(result.control=='确定'){
												player.logSkill("w_ganglie");
												player.judge(function(card){
													return get.color(card)=='black'?1:2;
												});
											}
											else
												event.goto(4);
											'step 2'
											if(result.judge==1){
												event.bool = 1;
												player.chooseTarget("是否弃置一名其他角色的一张牌？",function(card,player,target){
													return target!=player&&target.countCards('he');
												}).ai = function(target){
													var equipValue = 0;
													var cards = target.getCards('e');
													for(var i=0;i<cards.length;i++){
														equipValue += get.equipValue(cards[i]);
													}
													if(get.attitude(player,target)>2)return -1;
													return equipValue - get.attitude(player,target);
												};
											}
											else {
												event.bool = 2;
												player.chooseTarget("是否对一名其他角色造成一点伤害？",function(card,player,target){
													return target!=player;
												}).ai = function(target){
													return get.damageEffect(target,player,player);
												};
											}
											'step 3'
											if(result.bool){
												player.line(result.targets);
												if(event.bool==1){
													player.discardPlayerCard(result.targets[0],1,'he',true)
													if(game.me==player&&lib.config.But_xiahoudun==false){
														if(lib.storage.w_ganglie_discard==undefined){
															lib.storage.w_ganglie_discard=0;
														}
														lib.storage.w_ganglie_discard++;
													}
												}
												else {
													result.targets[0].damage(player);
													if(game.me==player&&lib.config.But_xiahoudun==false){
														if(lib.storage.w_ganglie_damage==undefined){
															lib.storage.w_ganglie_damage=0;
														}
														lib.storage.w_ganglie_damage++;
													}
												}
												if(lib.storage.w_ganglie_discard>=3&&lib.storage.w_ganglie_damage>=3&&ui.But){
													game.gainBut("But_xiahoudun","拔矢啖睛");
													delete lib.storage.w_ganglie_damage;
													delete lib.storage.w_ganglie_discard;
												}
											}
										},
										ai:{
											maixie:true,
											expose:0.4,
										}
									},
									w_qingjian:{
										audio:'ext:新斗地主:2',
										init:function(player){
											player.storage.w_qingjian = [];
										},
										intro:{
											content:function(storage,player){
												if(player.isUnderControl(true))
													return get.translation(player.storage.w_qingjian);
												return '共有'+get.cnNumber(player.storage.w_qingjian.length)+'张牌';
											},
										},
										trigger:{player:'gainAfter'},
										filter:function(event,player){
											if(event.parent.parent.name=='phaseDraw') return false;
											return event.cards&&event.cards.length>0
										},
										direct:true,
										content:function(){
											'step 0'
											player.chooseCard(get.prompt('w_qingjian'),[1,trigger.cards.length],function(card){
												return trigger.cards.contains(card);
											}).ai=function(card){
												if(card.name=='du')return 20;
												if(!player.hasFriend())return -1;
												if(get.type(card)=='basic'){
													if(player.countCards('h',function(arg){
														return !trigger.cards.contains(arg)&&arg.name==card.name;
													}))
														return 2;
													else
														return -1;
												}
												if(get.type(card)=='trick'){
													if(card.name=='wuxie')return -1;
													if(_status.currentPhase==player)return -1;
													if(game.hasPlayer(function(current){
														return current.hasSkillTag('useTrick')&&get.attitude(player.current)>4;
													}))return 10;
													var temp = -1;
													var target = _status.currentPhase;
													while(1){
														target = target.next;
														if(target==player)break;
														if(get.attitude(player,target)>4){
															temp = 1;
															break;
														}
													}
													return temp;
												}
												if(get.type(card)=='delay'){
													if(_status.currentPhase==player)return -1;
													var temp = -1;
													var target = _status.currentPhase;
													while(1){
														target = target.next;
														if(target==player)break;
														if(get.attitude(player,target)>4){
															temp = 1;
															break;
														}
													}
													return temp;
												}
												if(get.type(card)=='equip'){
													if(player.countCards('he',function(arg){
														return !trigger.cards.contains(arg)&&get.subtype(arg)==get.subtype(card);
													}))return 2;
													return -2;
												}
												return 6-get.value(card);
											};
											'step 1'
											if(result.bool){
												var cards = result.cards;
												player.logSkill('w_qingjian');
												player.lose(cards,ui.special);
												game.log(player,"将",get.cnNumber(cards.length),"张牌置于武将牌上");
												player.storage.w_qingjian=player.storage.w_qingjian.concat(cards);
												player.markSkill('w_qingjian');
												player.syncStorage('w_qingjian');
											}
											else
												event.finish();
										},
										ai:{
											useCard:true,
										},
										group:'w_qingjian_phaseEnd',
										subSkill:{
											phaseEnd:{
												trigger:{global:'phaseEnd'},
												filter:function(event,player){
													return player.storage.w_qingjian.length;
												},
												forced:true,
												content:function(){
													'step 0'
													player.chooseCardButton("【清俭】<p>选择要送人的牌</p>",player.storage.w_qingjian,[1,player.storage.w_qingjian.length],true).ai=function(button){
														if(ui.selected.buttons.length>0)return -1;
														return 1;
													};
													'step 1'
													event.cards = result.links;
													var str = "<span class='yellowtext'>"+get.translation(event.cards[0])+"</span>";
													for(var i=1;i<event.cards.length;i++){
														str += "、<span class='yellowtext'>"+get.translation(event.cards[i])+"</span>";
													}
													player.chooseTarget("将"+str+"交给一名其他角色",function(card,player,target){
														return target!=player;
													},true).ai=function(target){
														var att = get.attitude(player,target);
														var add = target.hasSkillTag('useCard')?2:0;
														if(get.type(event.cards[0])=='equip'){
															if(target.hasSkillTag('useEquip'))
																add += 2;
														}
														if(get.type(event.cards[0])=='trick'){
															if(target.hasSkillTag('useTrick'))
																add += 2;
														}
														if(get.color(event.cards[0])=='black'){
															if(target.hasSkillTag('useBlack'))
																add += 2;
														}
														if(get.color(event.cards[0])=='red'){
															if(target.hasSkillTag('useRed'))
																add += 2;
														}
														if(event.cards[0].name=='du'){
															return 1-att;
														}
														return att-4+add;
													};
													'step 2'
													player.$give(event.cards.length,result.targets[0]);
													result.targets[0].gain(event.cards,player);
													player.storage.w_qingjian.remove(event.cards);
													player.syncStorage('w_qingjian');
													if(player.storage.w_qingjian.length)
														event.goto(0);
													else {
														player.unmarkSkill('w_qingjian');
														event.finish();
													}
												}
											},
										}
									},
									w_fankui:{
										audio:'ext:新斗地主:2',
										trigger:{player:'damageEnd'},
										filter:function(event,player){
											return event.source&&event.source.isAlive()&&event.source.countCards('he');
										},
										direct:true,
										content:function(){
											'step 0'
											player.chooseControl('确定','取消',function(event,player){
												var att = get.attitude(player,trigger.source);
												if(att>4){
													if(trigger.source.countCards('h')>triger.source.hp)return '确定';
													if(trigger.source.hasSkillTag('noh')&&trigger.countCards('h')==1)return '确定';
													if(trigger.source.hasSkillTag('loseEquip')&&trigger.source.countCards('e'))return '确定';
													return '取消';
												}
												if(trigger.source.hasSkillTag('noh')&&trigger.source.countCards('h')==1&&trigger.source.countCards('e')==0)return '取消';
												if(trigger.source.hasSkillTag('loseEquip')&&trigger.source.countCards('h')==0){
													if(trigger.source.getEquip(2)||trigger.source.getEquip(4)||trigger.source.getEquip(5))
														return '确定';
													return '取消';
												}
												return '确定';
											}).set('prompt',get.prompt('w_fankui',trigger.source));
											'step 1'
											if(result.control=='确定'){
												player.logSkill('w_fankui',trigger.source);
												player.gainPlayerCard(trigger.source,1,'he',true);
												if(player==game.me&&lib.config.But_simayi==false&&ui.But){
													if(lib.storage.w_fankui==undefined){
														lib.storage.w_fankui=0;
													}
													lib.storage.w_fankui++;
													if(lib.storage.w_fankui>=3){
														game.gainBut("But_simayi","心吞三国");
														delete lib.storage.w_fankui;
													}
												}
											}
											'step 2'
											if(event.num==undefined){
												event.num = trigger.num;
											}
											event.num--;
											if(event.num>0)
												event.goto(0);
											else
												event.finish();
										},
										ai:{
											maixie:true,
											effect:{
												target:function(card,player,target){
													if(player.countCards('he')>1&&get.tag(card,'damage')){
														if(player.hasSkillTag('jueqing',false,target)) return [1,-1.5];
														if(get.attitude(target,player)<0) return [1,0.5];
													}
												}
											}
										}
									},
									w_guicai:{
										audio:"ext:新斗地主:2",
										trigger:{global:'judge'},
										direct:true,
										filter:function(event,player){
											return player.countCards('he')>0;
										},
										content:function(){
											"step 0"
											player.chooseCard(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
											get.translation(trigger.player.judging[0])+'，'+get.prompt('guicai'),'he').set('ai',function(card){
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
											"step 1"
											if(result.bool){
												player.respond(result.cards,'highlight');
												player.line(trigger.player,'water');
											}
											else{
												event.finish();
											}
											"step 2"
											if(result.bool){
												player.logSkill('w_guicai');
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
											}
										}
									},
									w_tuxi:{
										audio:'ext:新斗地主:2',
										trigger:{player:'phaseDrawBegin'},
										filter:function(event,player){
											return event.num>0&&game.hasPlayer(function(current){
												return current!=player&&current.countCards('h');
											});
										},
										direct:true,
										content:function(){
											'step 0'
											player.chooseTarget("是否发动【突袭】？",1,function(card,player,target){
												return target!=player&&target.countCards('h');
											}).ai=function(target){
												var count = target.countCards('h');
												var threa = target.hasSkillTag('useCard')?2:0;
												return Math.min(1,-get.attitude(player,target)-count)+threa;
											};
											'step 1'
											if(result.bool){
												player.logSkill('w_tuxi',result.targets);
												player.gainPlayerCard(result.targets[0],'h',1,true);
												if(game.me==player&&lib.config.But_zhangliao==false&&ui.But){
													if(lib.storage.w_tuxi==undefined){
														lib.storage.w_tuxi=0;
													}
													lib.storage.w_tuxi++;
													if(lib.storage.w_tuxi>=10){
														game.gainBut("But_zhangliao","袭敌不备");
														delete lib.storage.w_tuxi;
													}
												}
												trigger.num--;
											}
											else
												event.finish();
										},
										ai:{
											threaten:2,
											expose:0.3,
										}
									},
									w_zhenwei:{
										audio:'ext:新斗地主:2',
										unique:true,
										init:function(player){
											player.storage.w_zhenwei = false;
										},
										skillAnimation:true,
										animationColor:'fire',
										mark:true,
										marktext:'登',
										intro:{
											content:'limited'
										},
										trigger:{global:'gameDrawEnd'},
										filter:function(event,player){
											return !player.storage.w_zhenwei;
										},
										direct:true,
										content:function(){
											'step 0'
											event.targets = [];
											for(var i=0;i<game.players.length;i++){
												if(game.players[i]==player)continue;
												event.targets.push(game.players[i]);
											}
											'step 1'
											player.logSkill('w_zhenwei',event.targets);
											for(var i=0;i<event.targets.length;i++){
												player.gainPlayerCard(event.targets[i],'h',1,true);
												game.delay();
											}
											'step 2'
											player.storage.w_zhenwei = true;
											player.awakenSkill('w_zhenwei');
											event.finish();
										}
									},
									w_luoyi:{
										audio:'ext:新斗地主:2',
										trigger:{player:'phaseUseBegin'},
										filter:function(event,player){
											return player.countCards('he',{type:'equip'});
										},
										direct:true,
										content:function(){
											'step 0'
											player.chooseToDiscard(get.prompt("w_luoyi"),'he',{type:'equip'}).ai=function(card){
												if(!player.countCards('h',function(arg){return arg.name=='sha'||arg.name=='juedou';}))
													return -1;
												if(player.countCards('h',{name:'juedou'})||(!player.storage.w_xiechan&&player.hasCard(function(card){return card.number>=10&&get.value(card)<=10;})))
													return 8-get.equipValue(card);
												if(!game.hasPlayer(function(current){return player.canUse({name:'sha'},current)&&get.attitude(player,target)<0;}))
													return -1;
												return 6-get.equipValue(card);
											};
											'step 1'
											if(result.bool){
												player.logSkill("w_luoyi");
												player.chooseTarget("是否弃置场上的一张牌？",function(card,player,target){
													return target.countCards('ej');
												}).ai=function(target){
													var att = get.attitude(player,target);
													if(att>4){
														if(target.countCards('j',{name:'lebu'}))return 10;
														if(target.countCards('j',{name:'bingliang'}))return 8;
														if(target.countCards('j',{name:'shandian'})){
															if(game.hasPlayer(function(current){
																return current.hasSkillTag('rejudge')&&get.attitude(player,current)<0;
															}))return 9;
															return 2;
														}
														return -1;
													}
													var maxEquipValue = 0;
													var cards = target.getCards('e');
													for(var i=0;i<cards.length;i++){
														maxEquipValue = Math.max(maxEquipValue,get.equipValue(cards[i]));
													}
													if(target.hasSkillTag('loseEquip'))maxEquipValue = -maxEquipValue;
													return Math.max(1,maxEquipValue-get.attitude(player,target));
												};
											}
											else
												event.finish();
											'step 2'
											if(result.bool){
												player.line(result.targets[0]);
												player.discardPlayerCard(result.targets[0],'ej',1,true);
											}
											'step 3'
											player.addTempSkill('w_luoyi_damageBefore','phaseUseAfter');
										},
										ai:{
											useCard:true,
											useEquip:true,
											de:true,
											dj:true,
										},
										subSkill:{
											damageBefore:{
												trigger:{source:'damageBefore'},
												filter:function(event,player){
													return event.card.name=='sha'||event.card.name=='juedou';
												},
												direct:true,
												content:function(){
													if(game.me==player&&lib.config.But_xuchu==false){
														if(trigger.card.name=='sha'){
															if(lib.storage.w_luoyi_sha==undefined){
																lib.storage.w_luoyi_sha=0;
															}
															lib.storage.w_luoyi_sha++;
														}
														if(trigger.card.name=='juedou'){
															if(lib.storage.w_luoyi_juedou==undefined){
																lib.storage.w_luoyi_juedou=0;
															}
															lib.storage.w_luoyi_juedou++;
														}
														if(lib.storage.w_luoyi_sha>=3&&lib.storage.w_luoyi_juedou>=3&&ui.But){
															game.gainBut("But_xuchu","勇力绝人");
															delete lib.storage.w_luoyi_sha;
															delete lib.storage.w_luoyi_juedou;
														}
													}
													trigger.num++;
												}
											},
										}
									},
									w_xiechan:{
										audio:'ext:新斗地主:2',
										unique:true,
										init:function(player){
											player.storage.w_xiechan = false;
										},
										skillAnimation:true,
										animationColor:'fire',
										mark:true,
										marktext:'限',
										intro:{
											content:'limited',
										},
										enable:'phaseUse',
										filter:function(event,player){
											if(player.storage.w_xiechan)return false;
											return player.countCards('h')&&game.hasPlayer(function(current){
												return current!=player&&current.countCards('h');
											});
										},
										selectTarget:1,
										filterTarget:function(card,player,target){
											return target!=player&&target.countCards('h');
										},
										logTarget:'target',
										content:function(){
											'step 0'
											player.storage.w_xiechan = true;
											player.awakenSkill('w_xiechan');
											player.chooseToCompare(target);
											'step 1'
											if(result.bool){
												player.useCard({name:'juedou'},target);
											}
											else {
												var evt=_status.event.getParent('phaseUse');
												if(evt&&evt.name=='phaseUse'){
													evt.skipped=true;
												}
											}
											event.finish();
										},
										ai:{
											order:2.5,
											useCard:true,
											result:{
												target:function(player,target){
													if(!player.hasCard(function(card){return card.number>=10&&get.value(card)<=10;}))
														return 0;
													if(player.hasSkill('w_luoyi')&&!player.hasSkill('w_luoyi_damageBefore'))
														return 0;
													var MineEffect = 3-target.countCards('h');
													MineEffect += player.countCards('h',{name:'sha'});
													return Math.min(get.effect(target,{name:'juedou'},player,target)-MineEffect,0);
												}
											},
										},
									},
									w_luoshen:{
										audio:'ext:新斗地主:2',
										trigger:{player:'phaseBegin'},
										priority:-10,
										direct:true,
										content:function(){
											'step 0'
											player.chooseControl('确定','取消',function(event,player){
												return '确定';
											}).set('prompt',get.prompt("w_luoshen"));
											'step 1'
											if(result.control=='确定'){
												if(lib.storage.cards==undefined){
													lib.storage.cards = [];
												}
												player.logSkill('w_luoshen');
												player.judge(function(card){
													return get.color(card)=='black'?1.5:-1.5;
												},ui.special);
											}
											else {
												delete lib.storage.w_luoshen;
												event.goto(3);
											}
											'step 2'
											if(result.judge>0){
												lib.storage.cards.push(result.card);
												if(game.me==player&&lib.config.But_zhenji==false&&ui.But){
													if(lib.storage.w_luoshen==undefined){
														lib.storage.w_luoshen=0;
													}
													lib.storage.w_luoshen++;
													if(lib.storage.w_luoshen>=8){
														game.gainBut("But_zhenji","洛神赋");
														delete lib.storage.w_luoshen;
													}
												}
												event.goto(0);
											}
											else {
												delete lib.storage.w_luoshen;
											}
											'step 3'
											if(lib.storage.cards==undefined||lib.storage.cards.length==0){
												event.finish();
												return ;
											}
											else {
												for(var i=0;i<lib.storage.cards.length;i++){
													if(get.position(lib.storage.cards[i])!='s'){
														lib.storage.cards.splice(i,1);
														i--;
													}
												}
												game.log(player,"(从<span class='greentext'>【洛神】</span>)获得了",lib.storage.cards);
												player.gain(lib.storage.cards);
												player.$draw(lib.storage.cards);
												delete lib.storage.cards;
												event.finish();
											}
										},
										ai:{
											moreDraw:true,
										}
									},
									w_qingguo:{
										audio:"ext:新斗地主:2",
										enable:'chooseToRespond',
										filter:function(event,player){
											return player.countCards('h',{color:'black'});
										},
										selectCard:1,
										filterCard:function(card,player){
											return get.color(card)=='black';
										},
										check:function(card){
											return 8-get.value(card);
										},
										viewAs:{name:'shan'},
										onrespond:function(){
											_status.event.player.line(_status.event.source);
										},
										prompt:"将一张黑色手牌当[闪]使用或打出",
										ai:{
											useBlack:true,
											respondShan:true,
											skillTagFilter:function(player){
												return player.countCards('h',{color:'black'});
											},
											effect:{
												target:function(card,player,target,current){
													if(get.tag(card,'respondShan')){
														if(player.hasSkillTag('noSkill'))return;
														if(target.num('h')>2)return [1,0.5];
													}
												}
											},
										},
									},
									w_xunxun:{
										audio:'ext:新斗地主:2',
										trigger:{player:'phaseDrawBegin'},
										content:function(){
											'step 0'
											event.cards = get.cards(4);
											'step 1'
											player.chooseCardButton("【恂恂】<p>将两张牌以任意顺序置于牌堆顶(后选择的在上)",event.cards,2,true).ai=function(button){
												return get.value(button.link)||get.equipValue(button.link);
											};
											'step 2'
											var cards = result.links;
											event.cards.remove(cards);
											for(var i=0;i<cards.length;i++){
												ui.cardPile.insertBefore(cards[i],ui.cardPile.firstChild);
											}
											game.log(player,"将两张牌置于牌堆顶");
											'step 3'
											player.chooseCardButton("【恂恂】<p>将剩余牌以任意顺序置于牌堆底(先选择的在上)",event.cards,2,true).ai=function(button){
												return 2;
											};
											'step 4'
											var cards = result.links;
											event.cards.remove(cards);
											for(i=0;i<cards.length;i++){
												ui.cardPile.appendChild(cards[i]);
											}
											game.log(player,"将两张牌置于牌堆底");
										},
									},
									w_wangxi:{
										audio:'ext:新斗地主:2',
										trigger:{
											source:'damageEnd',
											player:'damageEnd',
										},
										filter:function(event,player){
											if(event.source==player){
												return event.player&&event.player.isAlive();
											}
											else {
												return event.source&&event.source.isAlive();
											}
										},
										direct:true,
										content:function(){
											'step 0'
											event.num = trigger.num;
											event.target = trigger.source==player?trigger.player:trigger.source;
											'step 1'
											event.num--;
											player.chooseBool(get.prompt("w_wangxi",event.target)).ai=function(){
												if(get.attitude(player,event.target)<0){
													if(event.target.hasSkillTag('useCard'))return false;
													return _status.currentPhase==player;
												}
												else {
													return true;
												}
											};
											'step 2'
											if(result.bool){
												player.logSkill("w_wangxi",event.target);
												player.draw();
												event.target.draw();
												if(game.me==player&&lib.config.But_lidian==false&&ui.But){
													if(lib.storage.w_wangxi==undefined){
														lib.storage.w_wangxi=0;
													}
													lib.storage.w_wangxi++;
													if(lib.storage.w_wangxi>=5){
														game.gainBut("But_lidian","深明大义");
														delete lib.storage.w_wangxi;
													}
												}
											}
											'step 3'
											if(event.num>0)event.goto(1);
											else event.finish();
										},
										ai:{
											maixie:true,
											effect:{
												target:function(card,player,target){
													if(get.tag(card,'damage')&&get.attitude(player,target)>2){
														if(target.hp>2)return [1,1];
														if(target.hp>1)return [1,0.5];
													}
												},
												player:function(card,player,target){
													if(get.tag(card,'damage')&&get.attitude(player,target)>2){
														if(target.hp>2)return [1,1];
														if(target.hp>1)return [1,0.5];
													}
												}
											},
										},
									},
									w_kaikang:{
										audio:'ext:新斗地主:2',
										trigger:{global:'useCardToBegin'},
										filter:function(event,player){
											return event.card.name=='sha'&&get.distance(player,event.target)<=1;
										},
										logTarget:'target',
										check:function(event,player){
											var att = get.attitude(player,event.target);
											return att>2;
										},
										priority:9,
										content:function(){
											'step 0'
											player.draw();
											if(trigger.target==player){
												event.finish();
											}
											'step 1'
											player.chooseCard(true,'he',1,'将一张牌交给'+get.translation(trigger.target)).ai=function(card){
												if(get.attitude(player,trigger.target)<3){
													return -get.value(card);
												}
												if(get.position(card)=='e') return -1;
												if(card.name=='shan') return 1;
												if(get.type(card)=='equip') return 0.5;
												return 0;
											};
											'step 2'
											event.card = result.cards[0];
											trigger.target.gain(event.card,player);
											player.$give(event.card,trigger.target);
											game.delay();
											if(get.type(event.card)!='equip'){
												event.finish();
											}
											else if(game.me==player&&lib.config.But_caoang==false&&ui.But){
												if(lib.storage.w_kaikang==undefined){
													lib.storage.w_kaikang=0;
												}
												lib.storage.w_kaikang++;
												if(lib.storage.w_kaikang>=3){
													game.gainBut("But_caoang","取义成仁");
													delete lib.storage.w_kaikang;
												}
											}
											'step 3'
											trigger.target.chooseToUse('是否装备'+get.translation(event.card)+'？',function(card){
												return card == event.card;
											});
											'step 4'
											event.finish();
										},
										ai:{
											threaten:1.1,
											moreDraw:true,
										},
										group:'w_kaikang_start',
										subSkill:{
											start:{
												trigger:{global:'gameDrawAfter'},
												priority:-15,
												direct:true,
												content:function(){
													for(var i=0;i<game.players.length;i++){
														if(game.players[i]==player)continue;
														game.players[i].addSkill('w_kaikang_effect');
													}
												}
											},
											effect:{
												ai:{
													effect:{
														target:function(card,player,target,current){
															var current2;
															for(var i=0;i<game.players.length;i++){
																if(game.players[i].name=='w_caoang'){
																	current2 = game.players[i];
																	break;
																}
															}
															if(get.attitude(current2,target)<2)return ;
															if(get.subtype(card)!='equip3')return ;
															if(get.distance(current2,target)<=1)return -1;
														}
													}
												}
											}
										},
									},
									w_wangzi:{
										mod:{
											maxHandcard:function(player,num){
												return num+get.population('fan');
											}
										},
										init:function(player,skill){
											if(player.identity!='zhu'){
												player.disableSkill(skill,["w_wangzi"]);
												return;
											}
										},
										zhuSkill:true,
										audio:'ext:新斗地主:true',
										trigger:{player:'phaseDiscardBegin'},
										direct:true,
										locked:true,
										content:function(){
											player.logSkill('w_wangzi');
										}
									},
									w_zhiheng:{
										audio:'ext:新斗地主:2',
										enable:'phaseUse',
										usable:1,
										filter:function(event,player){
											return player.num('he');
										},
										selectCard:[1,Infinity],
										filterCard:true,
										position:'he',
										check:function(card){
											var player = _status.currentPhase;
											return 6-get.value(card);
										},
										content:function(){
											player.draw(cards.length);
											if(ui.But&&game.me==player&&lib.config.But_sunquan==false){
												if(lib.storage.w_zhiheng==undefined){
													lib.storage.w_zhiheng=0;
												}
												lib.storage.w_zhiheng++;
											}
										},
										ai:{
											order:7,
											useCard:true,
											result:{
												player:1.5,
											},
											threaten:1.5,
										},
									},
									w_yingzi:{
										mod:{
											maxHandcard:function(player,num){
												return player.maxHp;
											}
										},
										audio:'ext:新斗地主:2',
										audioname:["w_sunce"],
										trigger:{player:'phaseDrawBegin'},
										forced:true,
										locked:true,
										content:function(){
											trigger.num++;
										},
										ai:{
											moreDraw:true,
										}
									},
									w_fanjian:{
										audio:'ext:新斗地主:2',
										enable:'phaseUse',
										usable:1,
										filter:function(event,player){
											return player.countCards('h');
										},
										selectCard:1,
										filterCard:true,
										selectTarget:1,
										filterTarget:function(card,player,target){
											return target!=player;
										},
										discard:false,
										logTarget:'target',
										check:function(card){
											if(card.name=='du')return 20;
											return 8-get.value(card);
										},
										content:function(){
											'step 0'
											ui.cardPile.insertBefore(cards[0],ui.cardPile.firstChild);
											game.log(player,"将一张牌置于牌堆顶");
											'step 1'
											target.chooseControl('diamond2','heart2','club2','spade2',function(event,player){
												var list = ['diamond2','heart2','club2','spade2'];
												list.randomSort();
												return list.randomGet();
											}).set("prompt","请选择一种花色");
											'step 2'
											event.suit = result.control;
											target.popup(event.suit);
											event.cards = get.cards(1);
											target.gain(event.cards,'draw');
											game.log(target,"摸了一张牌");
											'step 3'
											target.showCards(event.cards);
											if(get.suit(event.cards[0])+"2"==event.suit){
												event.finish();
											}
											'step 4'
											target.loseHp();
											if(ui.But&&game.me==player&&lib.config.But_zhouyu==false){
												if(lib.storage.w_fanjian==undefined){
													lib.storage.w_fanjian=0;
												}
												lib.storage.w_fanjian++;
												if(lib.storage.w_fanjian>=6){
													game.gainBut("But_zhouyu","雄姿英发");
													delete lib.storage.w_fanjian;
												}
											}
											event.finish();
										},
										ai:{
											threaten:2,
											expose:0.8,
											order:2,
											result:{
												target:function(player,target){
													var effect = -1;
													if(target.hasSkillTag('maixie'))effect -= 2;
													if(target.hasSkillTag('useCard'))effect += 0.5;
													if(target.hasSkillTag('loseHp'))effect = -effect;
													return effect;
												}
											},
											useCard:true,
											poFang:true,
										}
									},
									w_fenwei:{
										init:function(player){
											player.storage.w_fenwei=false;
										},
										skillAnimation:true,
										animationColor:'fire',
										unique:true,
										mark:true,
										marktext:'限',
										intro:{
											content:'limited'
										},
										audio:'ext:新斗地主:2',
										trigger:{global:'useCard'},
										priority:5,
										filter:function(event,player){
											if(get.type(event.card)!='trick') return false;
											if(get.info(event.card).multitarget) return false;
											if(event.targets.length<2) return false;
											if(player.storage.w_fenwei) return false;
											return true;
										},
										direct:true,
										content:function(){
											"step 0"
											player.chooseTarget(get.prompt('w_fenwei'),[1,trigger.targets.length],function(card,player,target){
												return _status.event.getTrigger().targets.contains(target);
											}).set('ai',function(target){
												var trigger=_status.event.getTrigger();
												if(game.phaseNumber>game.players.length*2&&trigger.targets.length>=game.players.length-1){
													return -get.effect(target,trigger.card,trigger.player,_status.event.player);
												}
												return -1;
											});
											"step 1"
											if(result.bool){
												player.awakenSkill('w_fenwei');
												player.logSkill('w_fenwei',result.targets);
												player.storage.w_fenwei=true;
												for(var i=0;i<result.targets.length;i++){
													trigger.targets.remove(result.targets[i]);
												}
												game.delay();
											}
										},
									},
									w_qixi:{
										audio:'ext:新斗地主:2',
										enable:'chooseToUse',
										filter:function(event,player){
											return player.countCards('he',{color:'black'});
										},
										selectCard:1,
										filterCard:function(card,player){
											return get.color(card)=='black';
										},
										check:function(card){
											var player = _status.event.player;
											if(game.hasPlayer(function(current){
												return current.num('e')&&get.attitude(player,current);
											}))return 8-get.value(card);
											return 6-get.value(card);
										},
										position:'he',
										viewAs:{name:'guohe'},
										onuse:function(result,player){
											if(ui.But&&game.me==player&&lib.config.But_ganning==false){
												if(lib.storage.w_qixi==undefined){
													lib.storage.w_qixi=0;
												}
												lib.storage.w_qixi++;
												if(lib.storage.w_qixi>=6){
													game.gainBut("But_ganning","锦帆游侠");
													delete lib.storage.w_qixi;
												}
											}
										},
										prompt:'将一张黑色牌当[过河拆桥]使用',
										group:["w_qixi_count"],
										ai:{
											useBlack:true,
											threaten:1.7,
										},
										subSkill:{
											count:{
												trigger:{player:'phaseUseBegin'},
												direct:true,
												content:function(){
													if(lib.storage.w_qixi){
														delete lib.storage.w_qixi;
													}
												}
											}
										}
									},
									w_keji:{
										mod:{
											maxHandcard:function(player,num){
												var count = 0;
												for(var i=0;i<game.players.length;i++){
													count += game.players[i].hp;
												}
												return count;
											}
										},
										audio:'ext:新斗地主:2',
										trigger:{player:'phaseDiscardBegin'},
										direct:true,
										locked:true,
										content:function(){
											player.logSkill('w_keji');
										}
									},
									w_botu:{
										init:function(player){
											player.storage.w_botu=[];
										},
										intro:{
											content:function(storage,player){
												return get.translation(player.storage.w_botu);
											}
										},
										audio:'ext:新斗地主:2',
										trigger:{player:'useCard'},
										filter:function(event,player){
											if(_status.currentPhase!=player)return false;
											if(event.card==undefined)return false;
											if(get.suit(event.card)=='none')return false;
											return !player.storage.w_botu.contains(get.suit(event.card));
										},
										direct:true,
										content:function(){
											player.storage.w_botu.push(get.suit(trigger.card));
											player.markSkill('w_botu');
											player.syncStorage('w_botu');
										},
										ai:{
											useCard:true,
											effect:{
												player:function(card,player,target){
													if(player.num('h')<=player.getHandcardLimit()){
														var list = [];
														var cards = player.getCards('h');
														for(var i=0;i<cards.length;i++){
															if(player.getCardUsable(cards[i])&&!list.contains(get.suit(cards[i]))){
																list.push(get.suit(cards[i]));
															}
														}
														list = list.concat(player.storage.w_botu);
														if(list.length<4)return [0,-1];
														if(list.length==4){
															if(!player.storage.w_botu.contains(get.suit(card)))return [1,2];
															else {
																return [0,-1];
															}
														}
													}
												}
											},
										},
										group:'w_botu_phaseEnd',
										subSkill:{
											phaseEnd:{
												trigger:{player:'phaseEnd'},
												filter:function(event,player){
													var length = player.storage.w_botu.length;
													player.storage.w_botu = [];
													player.unmarkSkill('w_botu');
													return length==4;
												},
												prompt:'是否进行一个额外的回合？',
												content:function(){
													player.insertPhase();
													if(ui.But&&game.me==player&&lib.config.But_lvmeng==false){
														if(lib.storage.w_botu==undefined){
															lib.storage.w_botu=0;
														}
														lib.storage.w_botu++;
													}
												}
											},
										}
									},
									w_kurou:{
										audio:'ext:新斗地主:2',
										enable:'phaseUse',
										usable:1,
										filter:function(event,player){
											return player.countCards('he');
										},
										selectCard:1,
										filterCard:true,
										position:'he',
										check:function(card){
											var player = _status.event.player;
											if(card.name=='baiyin'){
												if(player.isDamaged()&&get.position(card)=='e')
													return 20;
												if(get.position(card)=='h')
													return -1;
												if(player.countCards('he')==1)
													return 2;
											}
											return 8-get.value(card);
										},
										content:function(){
											player.loseHp();
											if(ui.But&&game.me==player&&lib.config.But_huanggai==false){
												if(lib.storage.w_kurou==undefined){
													lib.storage.w_kurou=0;
												}
												lib.storage.w_kurou++;
											}
										},
										ai:{
											order:8,
											result:{
												player:function(player){
													if(!player.hasSkillTag('loseHp'))return -2.5;
													if(player.hp<=2) return player.countCards('h')==0?1:0;
													if(player.countCards('h',{name:'sha',color:'red'})) return 1;
													return player.countCards('h')<=player.hp?1:0;
												}
											},
										}
									},
									w_zhaxiang:{
										mod:{
											targetInRange:function(card,player,target,now){
												if(card.name=='sha'&&get.color(card)=='red') return true;
											},
											cardUsable:function(card,player,num){
												if(card.name=='sha')
													return num+player.storage.w_zhaxiang;
											}
										},
										init:function(player){
											player.storage.w_zhaxiang = 0;
										},
										audio:'ext:新斗地主:2',
										trigger:{player:'loseHpEnd'},
										forced:true,
										locked:true,
										content:function(){
											'step 0'
											player.draw(3*trigger.num);
											if(_status.currentPhase!=player)
												event.finish();
											'step 1'
											player.storage.w_zhaxiang+=trigger.num;
											if(!player.hasSkill('w_zhaxiang_shaBegin')){
												player.addTempSkill('w_zhaxiang_shaBegin','phaseEnd');
											}
										},
										ai:{
											loseHp:true,
											effect:function(card,player,target){
												if(get.tag(card,'damage')){
													if(player.hasSkillTag('jueqing',false,target)) return [1,1];
													return 1.2;
												}
												if(get.tag(card,'loseHp')){
													if(player.hp<=1) return;
													return [0,0];
												}
											}
										},
										group:'w_zhaxiang_phaseEnd',
										subSkill:{
											shaBegin:{
												trigger:{player:'shaBegin'},
												direct:true,
												filter:function(event,player){
													return event.card&&get.color(event.card)=='red';
												},
												content:function(){
													trigger.directHit=true;
												}
											},
											phaseEnd:{
												trigger:{player:'phaseEnd'},
												direct:true,
												content:function(){
													player.storage.w_zhaxiang = 0;
												}
											}
										},
									},
									w_xiaoji:{
										audio:'ext:新斗地主:2',
										trigger:{player:'loseEnd'},
										filter:function(event,player){
											for(var i=0;i<event.cards.length;i++){
												if(event.cards[i].original=='e') return true;
											}
											return false;
										},
										direct:true,
										content:function(){
											'step 0'
											event.num = 0;
											for(var i=0;i<trigger.cards.length;i++){
												if(trigger.cards[i].original=='e')event.num++;
											}
											'step 1'
											event.num--;
											player.chooseControl('确定','取消',function(event,player){
												return '确定';
											}).set('prompt',get.prompt('w_xiaoji'));
											'step 2'
											if(result.control=='确定'){
												if(ui.But&&game.me==player&&lib.config.But_sunshangxiang==false){
													if(lib.storage.w_xiaoji==undefined){
														lib.storage.w_xiaoji=0;
													}
													lib.storage.w_xiaoji++;
												}
												player.logSkill('w_xiaoji');
												player.draw(2);
											}
											if(event.num==0){
												event.finish();
											}
											else {
												event.goto(1);
											}
										},
										ai:{
											noe:true,
											reverseEquip:true,
											useEquip:true,
											loseEquip:true,
											effect:{
												target:function(card,player,target,current){
													if(get.type(card)=='equip') return [1,3];
													if(card.name=='jiedao')return [1,2];
												}
											}
										},
									},
									w_jieyin:{
										audio:'ext:新斗地主:2',
										enable:'phaseUse',
										usable:1,
										filter:function(event,player){
											return player.countCards('h')>=2&&game.hasPlayer(function(current){
												return current.sex=='male'&&current.isDamaged();
											});
										},
										selectCard:2,
										filterCard:true,
										selectTarget:1,
										filterTarget:function(card,player,target){
											return target.sex=='male'&&target.isDamaged();
										},
										check:function(card){
											var player=get.owner(card);
											if(player.countCards('h')>player.hp)
												return 8-get.value(card);
											if(player.hp<player.maxHp)
												return 6-get.value(card);
											return 4-get.value(card);
										},
										content:function(){
											player.recover();
											target.recover();
										},
										ai:{
											order:5.5,
											result:{
												player:function(player){
													if(player.hp<player.maxHp) return 4;
													if(player.countCards('h')>player.hp) return 0
													return -1;
												},
												target:4
											},
											threaten:2,
										}
									},
									w_dujin:{
										audio:'ext:新斗地主:2',
										trigger:{player:'phaseDrawBegin'},
										content:function(){
											var x = player.getCards('e').length;
											x = (x%2==0?x/2:(x-1)/2)+1;
											trigger.num += x;
											if(ui.But&&game.me==player&&lib.config.But_lingcao==false){
												if(lib.storage.w_dujin==undefined){
													lib.storage.w_dujin=0;
												}
												lib.storage.w_dujin++;
											}
										},
										ai:{
											reverseEquip:true,
											useEquip:true,
										}
									},
									w_luanji:{
										audio:'ext:新斗地主:2',
										enable:'phaseUse',
										usable:4,
										filter:function(event,player){
											return player.countCards('h',{suit:'diamond'})>=2||
													player.countCards('h',{suit:'heart'})>=2||
													player.countCards('h',{suit:'club'})>=2||
													player.countCards('h',{suit:'spade'})>=2;
										},
										selectCard:2,
										filterCard:function(card,player){
											if(ui.selected.cards.length>0){
												return get.suit(card)==get.suit(ui.selected.cards[0]);
											}
											return true;
										},
										complexCard:true,
										viewAs:{name:'wanjian'},
										check:function(card){
											return 8-get.value(card);
										},
										ai:{
											basic:{
												order:10,
											},
											threaten:2.5,
											useCard:true,
										},
										group:'w_luanji_useCardAfter',
										subSkill:{
											useCardAfter:{
												trigger:{player:'useCardAfter'},
												filter:function(event,player){
													return event.skill == "w_luanji";
												},
												direct:true,
												content:function(){
													player.draw();
												}
											}
										}
									},
									w_jianzhen:{
										audio:'ext:新斗地主:2',
										init:function(player,skill){
											if(player.identity!='zhu'){
												player.disableSkill(skill,['w_jianzhen']);
												return;
											}
											player.storage.w_jianzhen = false;
											player.markSkill('w_jianzhen');
										},
										zhuSkill:true,
										marktext:'登',
										intro:{
											content:'limited'
										},
										skillAnimation:true,
										animationColor:'fire',
										trigger:{global:'gameDrawAfter'},
										filter:function(event,player){
											return !player.storage.w_jianzhen;
										},
										forced:true,
										content:function(){
											'step 0'
											player.storage.w_jianzhen=true;
											player.awakenSkill('w_jianzhen');
											var group = [];
											for(var i=0;i<game.players.length;i++){
												if(group.contains(game.players[i].group))continue;
												group.push(game.players[i].group);
											}
											event.num = group.length;
											'step 1'
											event.num--;
											event.targets = [];
											for(var i=0;i<game.players.length;i++){
												if(game.players[i]==player)continue;
												if(player.canUse({name:'wanjian'},game.players[i]))
													event.targets.push(game.players[i]);
											}
											player.useCard({name:'wanjian'},event.targets);
											if(event.num==0){
												event.finish();
											}
											'step 2'
											event.goto(1);
										}
									},
									w_wushuang:{
										audio:'ext:新斗地主:2',
										forced:true,
										locked:true,
										group:['w_wushuang_sha','w_wushuang_juedou'],
										subSkill:{
											sha:{
												audio:'ext:新斗地主:2',
												trigger:{player:'shaBegin'},
												forced:true,
												filter:function(event,player){
													return !event.directHit;
												},
												priority:-1,
												logTarget:'target',
												content:function(){
													"step 0"
													var next=trigger.target.chooseToRespond({name:'shan'});
													next.autochoose=lib.filter.autoRespondShan;
													next.set('ai',function(card){
														if(_status.event.player.countCards('h','shan')>1){
															return get.unuseful2(card);
														}
														return -1;
													});
													"step 1"
													if(result.bool==false){
														trigger.untrigger();
														trigger.directHit=true;
													}
												}
											},
											juedou:{
												audio:'ext:新斗地主:2',
												trigger:{player:'juedou',target:'juedou'},
												forced:true,
												filter:function(event,player){
													return event.turn!=player;
												},
												priority:-1,
												logTarget:'target',
												content:function(){
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
														target:function(card,player,target){
															if(card.name=='juedou'&&target.countCards('h')>0) return [1,0,0,-1];
														}
													}
												}
											}
										}
									},
									w_shenji:{
										mod:{
											selectTarget:function(card,player,range){
												if(player.getEquip(1))return;
												if(card.name=='sha'&&range[1]!=-1) range[1]++;
											},
											cardUsable:function(card,player,num){
												if(card.name=='sha')return num+1;
											}
										},
										ai:{
											effect:{
												target:function (card,player,target,current){
													if(get.subtype(card)=='equip1') return -1;
												},
											},
										},
										audio:'ext:新斗地主:2',
										trigger:{player:'useCardToBefore'},
										filter:function(event,player){
											if(event.card.name!='sha')return false;
											return event.targets.length>1;
										},
										forced:true,
										content:function(){},
										group:'w_shenji_chongzhu',
										subSkill:{
											chongzhu:{
												enable:'phaseUse',
												filter:function(event,player){
													return player.countCards('h',function(card){
														return get.type(card)=='equip'&&get.subtype(card)=='equip1';
													});
												},
												filterCard:function(card){
													return get.type(card)=='equip'&&get.subtype(card)=='equip1';
												},
												selectCard:1,
												prompt:'重铸一张武器牌',
												check:function(card){
													return 2;
												},
												content:function(){
													player.draw();
												},
												ai:{
													order:10,
													result:{
														player:1,
													}
												}
											}
										}
									},
									w_zhanshen:{
										init:function(player,skill){
											if(player.identity!='zhu'){
												player.disableSkill(skill,['w_zhanshen']);
												return;
											}
											player.storage.w_zhanshen=false;
											player.markSkill('w_zhanshen');
										},
										audio:'ext:新斗地主:2',
										skillAnimation:true,
										animationColor:'fire',
										marktext:'觉',
										intro:{
											content:'未觉醒',
										},
										unique:true,
										zhuSkill:true,
										derivation:['w_shenji','mashu'],
										trigger:{player:'phaseBegin'},
										priority:-10,
										filter:function(event,player){
											if(player.storage.w_zhanshen)return false;
											return player.isDamaged();
										},
										forced:true,
										content:function(){
											'step 0'
											player.storage.w_zhanshen=true;
											player.awakenSkill('w_zhanshen');
											player.loseMaxHp();
											if(player.getEquip(1)){
												player.discard(player.getEquip(1));
											}
											'step 1'
											player.addSkill('w_shenji');
											player.addSkill('mashu');
										},
										ai:{
											maixie:true,
											effect:{
												target:function(card,player,target){
													if(!target.hasFriend())return;
													if(get.tag(card,'damage')){
														if(target.hp==target.maxHp) return [0,1];
													}
												}
											}
										}
									},
									w_puji:{
										audio:'ext:新斗地主:2',
										enable:'phaseUse',
										usable:1,
										filter:function(event,player){
											return player.countCards('he');
										},
										selectCard:1,
										filterCard:true,
										position:'he',
										selectTarget:-1,
										filterTarget:function(card,player,target){
											return target.identity!=player.identity&&target.countCards('he');
										},
										check:function(card){
											if(get.suit(card)=='spade'){
												return 12-get.value(card);
											}
											return 6-get.value(card);
										},
										onuse:function(result,player){
											player.storage.w_puji = [];
											if(get.suit(result.cards[0])=='spade'){
												player.storage.w_puji.push(player);
											}
											if(ui.But&&game.me==player&&lib.config.But_huatuo==false){
												if(lib.storage.w_puji==undefined){
													lib.storage.w_puji=0;
												}
												lib.storage.w_puji++;
											}
										},
										content:function(){
											'step 0'
											player.discardPlayerCard(target,'he',1,true);
											'step 1'
											if(get.suit(result.cards[0])=='spade'){
												player.storage.w_puji.push(target);
											}
											'step 2'
											if(target==targets[targets.length-1])
												_status.event.trigger('skillAfter');
										},
										ai:{
											order:function(){
												var player = _status.currentPhase;
												if(player.countCards('he',{suit:'spade'}))return 10;
												return 6;
											},
											result:{
												player:function(player,target){
													if(player.countCards('he',{suit:'spade'}))return 1;
													return 0;
												},
												target:-1.5,
											}
										},
										group:'w_puji_skillAfter',
										subSkill:{
											skillAfter:{
												trigger:{player:'skillAfter'},
												filter:function(event,player){
													if(!player.storage.w_puji.length){
														delete player.storage.w_puji;
														return false;
													}
													return true;
												},
												direct:true,
												content:function(){
													'step 0'
													event.num = 0;
													'step 1'
													player.storage.w_puji[event.num].draw();
													game.delay();
													'step 2'
													event.num++;
													if(event.num<player.storage.w_puji.length){
														event.goto(1);
													}
													else {
														delete player.storage.w_puji;
														event.finish();
													}
												}
											}
										}
									},
									w_biyue:{
										audio:'ext:新斗地主:2',
										trigger:{player:'phaseEnd'},
										content:function(){
											player.draw();
										}
									},
									w_lijian:{
										audio:'ext:新斗地主:2',
										enable:'phaseUse',
										usable:1,
										filter:function(event,player){
											return player.countCards('he')&&game.countPlayer(function(current){
												return current.sex == 'male';
											})>=2;
										},
										selectCard:1,
										filterCard:true,
										position:'he',
										selectTarget:2,
										filterTarget:function(card,player,target){
											if(ui.selected.targets.length){
												return target.sex=='male'&&ui.selected.targets[0].canUse({name:'juedou'},target);
											}
											return target.sex=='male';
										},
										targetprompt:['发起者','被决斗'],
										multitarget:true,
										check:function(card){
											return 10-get.value(card);
										},
										onuse:function(result,player){
											result.targets[0].addTempSkill('w_lijian_nowuxie','skillAfter');
											if(ui.But&&game.me==player&&lib.config.But_diaochan==false){
												if(lib.storage.w_lijian==undefined){
													lib.storage.w_lijian=0;
												}
												lib.storage.w_lijian++;
											}
										},
										content:function(){
											'step 0'
											targets[0].useCard({name:'juedou'},targets[1],'noai');
											'step 1'
											_status.event.trigger("skillAfter");
										},
										ai:{
											order:8,
											result:{
												target:function(player,target){
													if(ui.selected.targets.length==0){
														if(get.attitude(player,target)<2&&game.hasPlayer(function(current){
															return current!=target&&current.sex=='male'&&get.attitude(player,current)<2;
														}))return -3;
														return 1;
													}
													else{
														return get.effect(target,{name:'juedou'},ui.selected.targets[0],target);
													}
												}
											},
											expose:0.4,
											threaten:3,
										},
										subSkill:{
											nowuxie:{
												ai:{
													playernowuxie:true,
												}
											}
										}
									},
									w_yongsi:{
										audio:'ext:新斗地主:2',
										forced:true,
										locked:true,
										group:['w_yongsi_phaseDrawBegin','w_yongsi_phaseDiscardBegin'],
										subSkill:{
											phaseDrawBegin:{
												audio:'ext:新斗地主:2',
												trigger:{player:'phaseDrawBegin'},
												forced:true,
												content:function(){
													var group = [];
													for(var i=0;i<game.players.length;i++){
														if(group.contains(game.players[i].group))continue;
														group.push(game.players[i].group);
													}
													trigger.num+=group.length;
													if(ui.But&&game.me==player&&lib.config.But_yuanshu==false){
														if(lib.storage.w_yongsi==undefined){
															lib.storage.w_yongsi=0;
														}
														if(trigger.num==4){
															lib.storage.w_yongsi++;
														}
														if(lib.storage.w_yongsi>=3){
															game.gainBut("But_yuanshu","四世三公");
															delete lib.storage.w_yongsi;
														}
													}
												}
											},
											phaseDiscardBegin:{
												audio:'ext:新斗地主:2',
												trigger:{player:'phaseDiscardBegin'},
												filter:function(event,player){
													return player.countCards('he');
												},
												forced:true,
												content:function(){
													var group = [];
													for(var i=0;i<game.players.length;i++){
														if(group.contains(game.players[i].group))continue;
														group.push(game.players[i].group);
													}
													var num = Math.min(player.countCards('he'),group.length);
													player.chooseToDiscard('he',num,true).ai=function(card){
														if(get.position(card)=='e'&&player.countCards('h')>player.getHandcardLimit())
															return -1;
														return -get.value(card);
													};
												}
											}
										}
									},
									w_weidi:{
										init:function(player,skill){
											if(player.identity!='fan'){
												player.disableSkill(skill,['w_weidi']);
												return;
											}
										},
										audio:'ext:新斗地主:2',
										unique:true,
										fanSkill:true,
										trigger:{global:['gameStart','zhuUpdate']},
										direct:true,
										content:function(){
											'step 0'
											player.identity = 'zhu';
											'step 1'
											var list=[];
											var zhu=get.zhu(player);
											if(zhu&&zhu!=player&&zhu.skills){
												for(var i=0;i<zhu.skills.length;i++){
													if(lib.skill[zhu.skills[i]]&&lib.skill[zhu.skills[i]].zhuSkill){
														list.push(zhu.skills[i]);
													}
												}
											}			
											player.addAdditionalSkill('weidi',list);
											player.storage.zhuSkill_weidi=list;
											'step 2'
											player.identity = 'fan';
										}
									},
									w_shiyong:{
										audio:'ext:新斗地主:2',
										trigger:{player:'phaseDrawBegin'},
										forced:true,
										locked:true,
										content:function(){
											'step 0'
											trigger.num--;
											if(!game.hasPlayer(function(current){
												return player.canUse({name:'sha'},current,false);
											}))event.finish();
											'step 1'
											player.chooseTarget("选择一名目标,视为对其使用一张[杀](无距离限制)",function(card,player,target){
												return target!=player&&player.canUse({name:'sha'},target,false);
											},true).ai=function(target){
												return get.effect(target,{name:'sha'},player,player);
											};
											'step 2'
											player.useCard({name:'sha'},result.targets[0],false);
										},
										ai:{
											threaten:1.5,
										}
									},
									w_xiaoqiu:{
										audio:'ext:新斗地主:2',
										trigger:{source:'damageEnd'},
										filter:function(event,player){
											return event.card&&event.card.name=='sha'&&get.color(event.card)=='black'&&event.player.countCards('he');
										},
										logTarget:'player',
										check:function(event,player){
											return get.attitude(player,event.player)<2;
										},
										content:function(){
											'step 0'
											player.discardPlayerCard(trigger.player,'he',1,true);
											'step 1'
											if(ui.But&&game.me==player&&lib.config.But_gongsunzan==false){
												if(lib.storage.w_xiaoqiu==undefined){
													lib.storage.w_xiaoqiu=0;
												}
												if(get.type(result.cards[0])=='equip'){
													lib.storage.w_xiaoqiu++;
												}
												if(lib.storage.w_xiaoqiu>=5){
													game.gainBut("But_gongsunzan","白马将军");
													delete lib.storage.w_xiaoqiu;
												}
											}
										},
										ai:{
											effect:{
												player:function(card,player,target){
													if(card.name=='sha'&&get.color(card)=='black'&&get.attitude(player,target)<2)
														return [1,1];
												}
											}
										},
									},
									w_yicong:{
										mod:{
											globalFrom:function(from,to,distance){
												return distance-1;
											},
											globalTo:function(from,to,distance){
												return distance+1;
											}
										},
										unique:true,
										init:function(player,skill){
											if(player.identity!='fan'){
												player.disableSkill(skill,['w_yicong']);
												return ;
											}
										},
										locked:true,
										fanSkill:true,
									},
									w_kundou:{
										locked:true,
										forced:true,
										ai:{
											threaten:2,
										},
										audio:'ext:新斗地主:2',
										group:['w_kundou_damageBegin','w_kundou_phaseDrawBegin'],
										subSkill:{
											damageBegin:{
												trigger:{global:'damageBegin'},
												priority:-10,
												filter:function(event,player){
													if(event.player.identity!=player.identity)return false;
													if(event.player==player)return false;
													return event.num>1;
												},
												forced:true,
												logTarget:'player',
												content:function(){
													trigger.num=1;
													if(ui.But&&game.me==player&&lib.config.But_niufu==false){
														if(lib.storage.w_kundou==undefined){
															lib.storage.w_kundou=0;
														}
														lib.storage.w_kundou++;
													}
												}
											},
											phaseDrawBegin:{
												trigger:{global:'phaseDrawBegin'},
												priority:-10,
												filter:function(event,player){
													if(event.player.identity==player.identity)return false;
													return event.player.isDamaged();
												},
												forced:true,
												logTarget:'player',
												content:function(){
													trigger.num--;
												}
											}
										}
									},
									w_jianying:{
										group:['w_jianying_init'],
										intro:{
											content:function(storage,player){
												return get.translation(player.storage.w_jianying.suit)+player.storage.w_jianying.number;
											}
										},
										audio:'ext:新斗地主:2',
										trigger:{player:'useCard'},
										filter:function(event,player){
											if(player.storage.w_jianying==undefined)return false;
											if(get.suit(event.card)=='none')return false;
											var bo = false;
											if(player.storage.w_jianying.suit==get.suit(event.card))bo=true;
											else if(player.storage.w_jianying.number==event.card.number)bo=true;
											player.storage.w_jianying.suit = get.suit(event.card);
											player.storage.w_jianying.number = event.card.number;
											player.markSkill('w_jianying');
											return bo;
										},
										prompt:'是否发动【渐营】？',
										content:function(){
											player.draw();
											if(ui.But&&game.me==player&&lib.config.But_jushou==false){
												if(lib.storage.w_jianying==undefined){
													lib.storage.w_jianying=0;
												}
												lib.storage.w_jianying++;
												if(lib.storage.w_jianying>=5){
													game.gainBut("But_jushou","监军谋国");
												}
											}
										},
										ai:{
											useCard:true,
											effect:{
												player:function(card,player,target){
													var suit = get.suit(card),num=card.number;
													if(player.storage.w_jianying==undefined)return;
													if(player.storage.w_jianying.suit==-1){
														if(player.countCards('h',function(current){
															return current!=card&&(get.suit(current)==suit||current.number==num);
														}))return [0,2];
														else if(player.countCards('h',function(a){
															return player.countCards('h',function(b){
																return a!=b&&(get.suit(a)==get.suit(b)||a.number==b.number);
															});
														}))return [0,-1];
														else return;
													}
													else {
														if(suit==player.storage.w_jianying.suit||num==player.storage.w_jianying.number){
															if(player.countCards('h',function(current){
																return current!=card&&(get.suit(current)==suit||current.number==num);
															}))return [0,2];
															else if(player.countCards('h',function(current){
																return current!=card&&(get.suit(current)==suit||current.number==num)&&player.countCards('h',function(c){
																	return c!=current&&(get.suit(c)==get.suit(current)||c.number==current.number);
																});
															}))return [0,-1];
															else 
																return [0,2];
														}
														else if(player.countCards('h',function(current){
															return get.suit(current)==player.storage.w_jianying.suit||current.number==player.storage.w_jianying.number;
														}))return [0,-1];
														else return;
													}
												}
											},
										},
										subSkill:{
											init:{
												trigger:{player:['phaseUseBegin','phaseUseEnd']},
												direct:true,
												content:function(){
													if(player.storage.w_jianying==undefined){
														player.storage.w_jianying = {
															suit:-1,
															number:-1,
														}
													}
													else {
														delete player.storage.w_jianying;
														player.unmarkSkill('w_jianying');
													}
													if(lib.storage.w_jianying){
														delete lib.storage.w_jianying;
													}
												}
											},
										}
									},
									w_shibei:{
										audio:'ext:新斗地主:2',
										trigger:{global:'phaseEnd'},
										direct:true,
										locked:true,
										content:function(){
											delete player.storage.w_shibei;
										},
										group:['w_shibei_recover','w_shibei_loseHp'],
										subSkill:{
											recover:{
												audio:'ext:新斗地主:2',
												trigger:{player:'damageEnd'},
												forced:true,
												usable:1,
												priority:1,
												content:function(){
													player.recover();
													game.delay();
													player.storage.w_shibei = true;
												},
											},
											loseHp:{
												audio:'ext:新斗地主:2',
												trigger:{player:'damageEnd'},
												forced:true,
												priority:2,
												filter:function(event,player){
													if(player.storage.w_shibei==undefined)return false;
													return true;
												},
												content:function(){
													player.loseHp();
													game.delay();
												},
											}
										}
									},
									w_jingong:{
										audio:'ext:新斗地主:2',
										init:function(player){
											player.storage.w_damage = true;
											player.storage.w_jingong = [];
											player.storage.w_random = [];
											for(var i=0;i<lib.inpile.length;i++){
												if(lib.card[lib.inpile[i]].type=='trick'||lib.card[lib.inpile[i]].type=='delay'){
													if(!player.storage.w_jingong.contains(lib.inpile[i]))
														player.storage.w_jingong.push(lib.inpile[i]);
												}
											}
											if(_status.currentPhase==player){
												player.storage.w_jingong.randomSort();
												player.storage.w_random = player.storage.w_jingong.randomGets(3);
												for(var i=0;i<3;i++){
													player.storage.w_random[i] = ['锦囊','',player.storage.w_random[i]];
												}
											}
										},
										enable:'phaseUse',
										usable:1,
										filter:function(event,player){
											return player.countCards('he',function(card){
												return card.name=='sha'||get.type(card)=='equip';
											});
										},
										chooseButton:{
											dialog:function(event,player){
												return ui.create.dialog([player.storage.w_random,'vcard']);
											},
											filter:function(button,player){
												return lib.filter.filterCard({name:button.link[2]},player,_status.event.getParent());
											},
											check:function(button){
												var player = _status.currentPhase;
												var card = {name:button.link[2]};
												var eff = 0;
												if(lib.card[button.link[2]].selectTarget==-1){
													for(var i=0;i<game.players.length;i++){
														if(!player.canUse(card,game.players[i]))continue;
														eff += get.effect(game.players[i],card,player,player);
													}
													game.log(card.name,eff);
													return eff+[Math.random(),Math.random(),Math.random()].randomGet();
												}
												var allEff = [];
												for(var i=0;i<game.players.length;i++){
													if(!player.canUse(card,game.players[i]))continue;
													allEff[i] = get.effect(game.players[i],card,player,player);
												}
												var maxEff = [];
												for(var i=0;i<lib.card[button.link[2]].selectTarget;i++){
													var max = -20,bit=-1;
													for(var j=0;j<allEff.length;j++){
														if(max>=allEff[j])continue;
														bit = j;
														max = allEff[j];
													}
													maxEff[i] = max;
													allEff[bit] = -20;
												}
												if(maxEff[0]<=0)return -1;
												for(var i=0;i<maxEff.length;i++){
													eff+=maxEff[i];
												}
												return Math.max(1,eff)+[Math.random(),Math.random(),Math.random()].randomGet();
											},
											backup:function(links,player){
												return {
													selectCard:1,
													filterCard:function(card,player){
														return card.name=='sha'||get.type(card)=='equip';
													},
													position:'he',
													popupname:true,
													check:function(card){
														return get.value({name:links[0][2]})-get.value(card);
													},
													viewAs:{name:links[0][2]},
													onuse:function(result,player){
														player.addTempSkill('w_jingong_phaseEnd','phaseBegin');
													}
												}
											},
											prompt:function(links,player){
												return '将一张[杀]或装备牌当'+get.translation(links[0][2])+'使用';
											}
										},
										ai:{
											order:8,
											result:{
												player:function(player){
													return player.storage.w_damage?-1:1;
												},
											}
										},
										group:['w_jingong_phaseBegin','w_jingong_damage'],
										subSkill:{
											phaseBegin:{
												init:function(player){
													
												},
												trigger:{player:'phaseBegin'},
												direct:true,
												content:function(){
													player.storage.w_jingong.randomSort();
													player.storage.w_random = player.storage.w_jingong.randomGets(3);
													for(var i=0;i<3;i++){
														player.storage.w_random[i] = ['锦囊','',player.storage.w_random[i]];
													}
												}
											},
											damage:{
												trigger:{source:'damageEnd'},
												direct:true,
												filter:function(event,player){
													return _status.currentPhase==player;
												},
												content:function(){
													player.storage.w_damage=false;
												}
											},
											phaseEnd:{
												trigger:{player:'phaseEnd'},
												priority:15,
												filter:function(event,player){
													if(!player.storage.w_damage){
														player.storage.w_damage = true;
														return false;
													}
													return true;
												},
												forced:true,
												content:function(){
													player.storage.w_damage=true;
													player.loseHp();
												}
											}
										}
									},
									w_mouchen:{
										audio:'ext:新斗地主:2',
										init:function(player){
											player.storage.w_mouchen = 0;
											player.storage.w_juexing = false;
										},
										derivation:'w_jingong',
										marktext:'觉',
										mark:true,
										intro:{
											content:function(storage,player){
												return "未觉醒<center>当前累计伤害："+storage+"</center>";
											}
										},
										skillAnimation:true,
										animationColor:'thunder',
										trigger:{global:'storageUpdate'},
										filter:function(event,player){
											if(player.storage.w_juexing)return false;
											return player.storage.w_mouchen>=3;
										},
										forced:true,
										content:function(){
											'step 0'
											player.storage.w_mouchen=true;
											player.awakenSkill('w_mouchen');
											'step 1'
											player.removeSkill('w_lianji');
											player.addSkill('w_jingong');
										},
										subSkill:{
											update:{
												trigger:{global:'damageEnd'},
												direct:true,
												priority:-15,
												filter:function(event,player){
													if(!event.card)return false;
													if(event.card!=player.storage.w_lianji)return false;
													return event.source!=player;
												},
												content:function(){
													'step 0'
													_status.currentPhase.storage.w_mouchen+=trigger.num;
													_status.currentPhase.syncStorage('w_mouchen');
													'step 1'
													_status.event.trigger('storageUpdate');
												}
											}
										}
									},
									w_tianming:{
										audio:'ext:新斗地主:2',
										trigger:{target:'shaBegin'},
										direct:true,
										content:function(){
											'step 0'
											event.player = player;
											'step 1'
											if(event.player.countCards('he',function(card){
												return lib.filter.cardDiscardable(card,event.player);
											})>1){
												event.player.chooseToDiscard("是否发动【天命】？",'he',2).ai=function(card){
													return 8-get.value(card);
												}; 
											}
											else {
												event.player.chooseBool("是否发动【天命】？",function(event,player){
													if(player.countCards('he')==1){
														if(player.getEquip(2)&&player.getEquip(2).name=='bagua'&&player.hp>1)return false;
														if(!trigger.card.nature&&player.getEquip(2)&&player.getEquip(2).name=='tangjia')return false;
														if(player.getEquip(2)&&player.getEquip(2).name=='renwang'&&get.color(trigger.card)=='black')return false;
														if(player.getCards('h')[0].name=='tao'||player.getCards('h')[0].name=='jiu'||player.getCards('h')[0].name=='shan')return false;
														return true;
													}
													return true;
												});
											}
											'step 2'
											if(result.bool){
												if(result.cards.length!=2){
													player.discard(player.getCards('he'));
												}
												event.player.logSkill('w_tianming');
												if(ui.But&&game.me==event.player&&lib.config.But_liuxie==false){
													if(lib.storage.w_tianming==undefined){
														lib.storage.w_tianming=0;
													}
													lib.storage.w_tianming++;
												}
												event.player.draw(2);
												if(event.player!=player)event.finish();
												if(!game.hasPlayer(function(target){
													if(target==player)return false;
													if(!game.hasPlayer(function(c){
														return c!=target&&c.hp>=target.hp;
													})){event.player=target;}
													return !game.hasPlayer(function(c){
														return c!=target&&c.hp>=target.hp;
													});
												}))event.finish();
												else 
													event.goto(1);
											}
											else 
												event.finish();
										},
										ai:{
											effect:{
												target:function(card,player,target,current){
													if(card.name=='sha') return [1,0.5];
												}
											}
										}
									},
									w_mizhao:{
										audio:'ext:新斗地主:2',
										enable:'phaseUse',
										usable:1,
										filter:function(event,player){
											return player.countCards('h');
										},
										selectCard:-1,
										filterCard:true,
										discard:false,
										prepare:'give2',
										selectTarget:1,
										filterTarget:function(card,player,target){
											return target!=player;
										},
										content:function(){
											'step 0'
											event.target = target;
											target.gain(cards);
											if(ui.But&&game.me==player&&lib.config.But_liuxie==false){
												if(lib.storage.w_mizhao==undefined){
													lib.storage.w_mizhao=0;
												}
												lib.storage.w_mizhao++;
											}
											if(!game.hasPlayer(function(current){
												return current!=target&&current!=player&&current.countCards('h');
											}))event.finish();
											'step 1'
											player.chooseTarget("选择拼点的目标",function(card,player,current){
												return current!=target&&current!=player&&target.countCards('h');
											},true).ai=function(target){
												var player=_status.event.player;
												var eff=get.effect(target,{name:'sha'},target,player);
												var att=get.attitude(player,target);
												if(att>0){
													return eff-10;
												}
												return eff;
											};
											'step 2'
											event.target1 = result.targets[0];
											target.line(result.targets[0]);
											target.chooseToCompare(result.targets[0]);
											'step 3'
											game.log(event.target1,event.target);
											if(!result.bool&&event.target1.canUse({name:'sha'},event.target,false)){
												event.target1.useCard({name:'sha'},event.target,false);
											}
											else if(result.bool&&event.target.canUse({name:'sha'},event.target1,false)){
												event.target.useCard({name:'sha'},event.target1,false);
											}
										},
										ai:{
											order:1,
											result:{
												player:0,
												target:function(player,target){
													if(player.countCards('h')>1){
														return 1;
													}
													var players=game.filterPlayer();
													for(var i=0;i<players.length;i++){
														if(players[i].countCards('h')&&players[i]!=target&&players[i]!=player&&get.attitude(player,players[i])<0){
															break;
														}
													}
													if(i==players.length){
														return 1;
													}
													return -2/(target.countCards('h')+1);
												}
											}
										},
									},
									w_rende:{
										audio:'ext:新斗地主:2',
										enable:'phaseUse',
										filter:function(event,player){
											return player.num('h');
										},
										selectCard:[1,Infinity],
										filterCard:true,
										selectTarget:1,
										filterTarget:function(card,player,target){
											return target!=player;
										},
										discard:false,
										prepare:'give2',
										check:function(card){
											var player = _status.currentPhase;
											var max = player.num('h')>player.hp?10:6;
											if(player.storage.w_rende!=-1)max = 12;
											if(ui.selected.cards.length==2)return -1;
											if(ui.selected.cards.length==1){
												var c = ui.selected.cards[0];
												if(c.name=='du'){
													if(card.name=='du')return 20;
													return -1;
												}
												if(get.type(c)==get.type(card)){
													return max - get.value(card);
												}
											}
											if(card.name=='du')return 20;
											return max - get.value(card);
										},
										content:function(){
											'step 0'
											target.gain(cards,player);
											if(player.storage.w_rende==-1){
												event.finish();
											}
											'step 1'
											player.storage.w_rende += cards.length;
											if(player.storage.w_rende<2){
												event.finish();
											}
											'step 2'
											player.storage.w_rende = -1;
											var list = [
												['基本','','sha'],['基本','','sha','fire'],['基本','','sha','thunder'],
												['基本','','shan'],['基本','','tao'],['基本','','jiu']
											];
											player.chooseButton(["你可以视为使用一张基本牌",[list,'vcard']]).set("filterButton",function(button,player){
												var name = button.link[2];
												return game.hasPlayer(function(current){
													return player.canUse({name:button.link[2],nature:button.link[3]},current)&&
														lib.filter.cardUsable({name:button.link[2]},player,event.getParent('chooseToUse'));
												})
											}).set("ai",function(button){
												var eff_sha = 0 , eff_tao = get.effect(player,{name:'tao'},player,player);
												if(lib.filter.cardUsable({name:'sha'},player,_status.event)){
													for(var i=0;i<game.players.length;i++){
														if(player.canUse({name:'sha'},game.players[i])){
															eff_sha = Math.max(eff_sha,get.effect(game.players[i],{name:'sha'},player,player));
														}
													}
												}
												if(!player.isDamaged())eff_tao=0;
												eff_tao+=player.maxHp-player.hp;
												if(eff_sha>=eff_tao){
													if(player.countCards('h',{name:'sha'})>0){
														var order = 0;
														if(button.link[2]=='jiu')order = 3.5;
														return order;
													}
													else {
														if(button.link[3]=='fire')return 2.95;
														return 0;
													}
												}
												if(button.link[2]=='tao')return 10;
												return 1+Math.random();
											});
											'step 3'
											if(result.bool){
												game.print(result);
												event.card = {name:result.links[0][2],nature:result.links[0][3]};
												player.chooseTarget("选择"+get.translation(event.card)+"的目标",lib.card[event.card.name].selectTarget,function(card,player,target){
													return player.canUse(event.card,target);
												},true).ai=function(target){
													return get.effect(target,event.card,player,player)+1;
												};
											}
											else {
												event.finish();
											}
											'step 4'
											player.useCard(event.card,result.targets);
											if(ui.But&&game.me==player&&lib.config.But_liubei==false){
												if(lib.storage.w_rende==undefined){
													lib.storage.w_rende = [];
												}
												if(!lib.storage.w_rende.contains(event.card.name)){
													lib.storage.w_rende.push(event.card.name);
												}
												if(lib.storage.w_rende.length>=3){
													game.gainBut("But_liubei","仁者之风");
													delete lib.storage.w_rende;
												}
											}
										},
										ai:{
											order:function(skill,player){
												if(player.storage.w_rende<2&&player.storage.w_rende!=-1){
													var eff_sha = 0 , eff_tao = get.effect(player,{name:'tao'},player,player);
													if(lib.filter.cardUsable({name:'sha'},player,_status.event)){
														for(var i=0;i<game.players.length;i++){
															if(player.canUse({name:'sha'},game.players[i])){
																eff_sha = Math.max(eff_sha,get.effect(game.players[i],{name:'sha'},player,player));
															}
														}
													}
													if(eff_sha>=eff_tao){
														if(player.countCards('h',{name:'sha'})&&(player.num('h')+player.storage.w_rende>2)){
															return get.order({name:'sha'})+0.4;
														}
														else {
															return get.order({name:'sha'})+0.2;
														}
													}
													else {
														return 5;
													}
												}
												else 
													return 4;
											},
											result:{
												target:function(player,target){
													var eff=0;
													var cards = ui.selected.cards;
													for(var i=0;i<cards.length;i++){
														var maxEffect = 1.5;
														for(var j=0;j<game.players.length;j++){
															if(target.canUse(cards[i],game.players[i])){
																maxEffect = Math.max(maxEffect,get.effect(game.players[i],cards[i],target,target));
															}
														}
														eff += maxEffect;
													}
													return eff;
												},
											}
										},
										group:['w_rende_phaseUseBegin','w_rende_phaseUseAfter'],
										subSkill:{
											phaseUseBegin:{
												trigger:{player:'phaseUseBegin'},
												direct:true,
												content:function(){
													player.storage.w_rende=0;
												}
											},
											phaseUseAfter:{
												trigger:{player:'phaseUseAfter'},
												direct:true,
												content:function(){
													delete player.storage.w_rende;
												}
											}
										}
									},
									w_renwang:{
										audio:'ext:新斗地主:2',
										init:function(player,skill){
											if(player.identity!='zhu'){
												player.disableSkill(skill,['w_renwang']);
												return ;
											}
										},
										unique:true,
										zhuSkill:true,
										trigger:{target:'useCardToBefore'},
										priority:15,
										direct:true,
										filter:function(event,player){
											if(event.player!=_status.currentPhase)return false;
											if(event.player.countCards('he')==0)return false;
											if(event.player==player)return false;
											return event.card.name=='sha'||get.type(event.card)=='trick';
										},
										content:function(){
											'step 0'
											if(player.storage.w_renwang==undefined){
												player.storage.w_renwang = true;
												event.finish();
											}
											else {
												player.chooseBool(get.prompt("w_renwang",trigger.player)).ai=function(){
													return get.attitude(player,trigger.player)<2;
												};
											}
											'step 1'
											if(result.bool){
												player.logSkill("w_renwang",trigger.player);
												player.discardPlayerCard(trigger.player,'he',1,true);
											}
											else {
												event.finish();
											}
										},
										group:'w_renwang_End',
										subSkill:{
											End:{
												trigger:{global:'phaseEnd'},
												direct:true,
												content:function(){
													delete player.storage.w_renwang;
												}
											}
										}
									},
									w_wusheng:{
										audio:'ext:新斗地主:2',
										enable:['chooseToUse','chooseToRespond'],
										filter:function(event,player){
											return player.countCards('he',{color:'red'});
										},
										selectCard:1,
										filterCard:function(card){
											return get.color(card)=='red';
										},
										position:'he',
										viewAs:{name:'sha'},
										onrespond:function(){
											_status.event.player.line(_status.event.source);
										},
										prompt:'你可以将一张红色牌当[杀]使用或打出',
										ai:{
											respondSha:true,
											skillTagFilter:function(player){
												return player.countCards('he',{color:'red'});
											},
											effect:{
												target:function(card,player,target,current){
													if(card.name=='juedou')return [1,-0.6];
												}
											}
										}
									},
									w_yijue:{
										audio:'ext:新斗地主:2',
										enable:'phaseUse',
										usable:1,
										filter:function(event,player){
											return player.num('h')&&game.hasPlayer(function(current){
												return current!=player&&current.num('h');
											});
										},
										selectTarget:1,
										filterTarget:function(card,player,target){
											return target!=player&&target.num('h');
										},
										content:function(){
											'step 0'
											player.chooseToCompare(target).set('small',function(){
												return get.attitude(player,target)>2;
											});
											'step 1'
											if(result.bool){
												target.addTempSkill('w_yijue_jue','phaseEnd');
												event.finish();
											}
											else if(target.isHealthy()){
												event.finish();
											}
											else {
												player.chooseBool("是否令"+get.translation(target)+"回复一点体力？").ai=function(){
													return get.attitude(player,target)>2;
												}
											}
											if(ui.But&&game.me==player&&lib.config.But_guanyu==false){
												if(lib.storage.w_yijue==undefined){
													lib.storage.w_yijue=0;
												}
												lib.storage.w_yijue++;
											}
											'step 2'
											if(result.bool){
												target.recover();
											}
											else
												event.finish();
										},
										ai:{
											order:8,
											useCard:true,
											threaten:2.5,
											result:{
												target:function(player,target){
													if(get.attitude(player,target)<2){
														var basic = 1.5+(target.maxHp-target.hp);
														if(target.hasSkillTag('maixie'))basic += 1;
														return -basic;
													}
													else {
														if(target.isHealthy()){
															if(target.hasSkillTag('loseCard'))return 0.5;
															return -1.5;
														}
														else {
															return 1.5+(target.maxHp-target.hp);
														}
													}
												}
											},
										},
										subSkill:{
											jue:{
												group:['w_yijue_Feng'],
												locked:true,
												mark:true,
												marktext:'义',
												intro:{
													name:'义绝',
													content:'当前回合无法使用或打出手牌且非锁定技能失效',
												},
												init:function (player,skill){
													var skills=player.getSkills(true,false);
													for(var i=0;i<skills.length;i++){
														if(get.is.locked(skills[i])){
															skills.splice(i--,1);
														}
													}
													player.disableSkill(skill,skills);
												},
												onremove:function (player,skill){
													player.enableSkill(skill);
												},
											},
											Feng:{
												mod:{
													cardEnabled:function(card,player){
														return false;
													},
													cardUsable:function(card,player){
														return false;
													},
													cardRespondable:function(card,player){
														return false;
													},
													cardSavable:function(card,player){
														return false;
													},
												},
												locked:true,
											},
										}
									},
									w_paoxiao:{
										mod:{
											cardUsable:function(card,player,num){
												if(card.name=='sha')return Infinity;
											}
										},
										audio:'ext:新斗地主:2',
										trigger:{player:'useCardBefore'},
										filter:function(event,player){
											if(_status.currentPhase!=player)return false;
											if(event.card.name!='sha')return false;
											if(player.storage.w_paoxiao==undefined){
												player.storage.w_paoxiao=true;
												return false;
											}
											return true;
										},
										locked:true,
										forced:true,
										content:function(){
										},
										group:['w_paoxiao_Init'],
										subSkill:{
											Init:{
												trigger:{player:'phaseUseBegin'},
												direct:true,
												content:function(){
													delete player.storage.w_paoxiao;
												}
											}
										}
									},
									w_tishen:{
										audio:'ext:新斗地主:2',
										unique:true,
										skillAnimation:true,
										animationColor:'fire',
										mark:true,
										marktext:'限',
										intro:{
											content:'未发动',
										},
										trigger:{player:'phaseBegin'},
										filter:function(event,player){
											if(player.storage.w_tishen==undefined)return false;
											if(player.storage.w_tishen==-1)return false;
											if(player.hp>=player.storage.w_tishen)return false;
											return true;
										},
										priority:5,
										prompt:function(){
											var player = _status.currentPhase;
											return "是否发动【替身】？</p>回复"+get.cnNumber(player.storage.w_tishen-player.hp)+"点体力,然后摸"+get.cnNumber(player.storage.w_tishen-player.hp)+"张牌</p>";
										},
										check:function(event,player){
											if(player.hp==1)return true;
											if(player.hp==2){
												if(player.storage.w_tishen>=2)return true;
												if(player.countCards('h',{name:'tao'}))return false;
												if(player.hasSkillTag('recover'))return false;
												return true;
											}
											if(player.hp>2){
												return player.storage.w_tishen-player.hp>1;
											}
										},
										content:function(){
											'step 0'
											event.num = player.storage.w_tishen - player.hp;
											player.storage.w_tishen=-1;
											player.awakenSkill('w_tishen');
											'step 1'
											player.recover(event.num);
											if(ui.But&&game.me==player&&lib.config.But_zhangfei==false){
												lib.storage.w_tishen = event.num;
											}
											'step 2'
											player.draw(event.num);
											event.finish();
										},
										ai:{
											effect:{
												target:function(card,player,target){
													if(get.tag(card,'damage')){
														if(target.storage.w_tishen==undefined)return [1,-1];
														if(target.storage.w_tishen==-1||get.tag(card,'damage')>=player.hp)return ;
														var num = target.storage.w_tishen - target.hp;
														if(!target.isTurnedOver()&&_status.currentPhase!=target)
															return [1,num];
													}
												}
											}
										},
										group:'w_tishen_phaseEnd',
										subSkill:{
											phaseEnd:{
												trigger:{player:'phaseEnd'},
												filter:function(event,player){
													if(player.storage.w_tishen==undefined)return true;
													return player.storage.w_tishen!=-1;
												},
												direct:true,
												content:function(){
													player.storage.w_tishen = player.hp;
												},
											},
										},
									},
									w_longdan:{
										audio:'ext:新斗地主:2',
										group:['w_longdanSha','w_longdanShan'],
									},
									w_longdanSha:{
										audio:'ext:新斗地主:2',
										enable:['chooseToUse','chooseToRespond'],
										filter:function(event,player){
											return player.countCards('he',{name:'shan'});
										},
										selectCard:1,
										filterCard:function(card,player){
											return card.name=='shan';
										},
										viewAs:{name:'sha'},
										onuse:function(){
											if(ui.But&&game.me==_status.event.player&&lib.config.But_zhaoyun==false){
												if(lib.storage.w_longdan_sha==undefined){
													lib.storage.w_longdan_sha=0;
												}
												lib.storage.w_longdan_sha++;
												if(lib.storage.w_longdan_shan>=7&&lib.storage.w_longdan_sha>=7){
													game.gainBut("But_zhaoyun","七进七出");
													delete lib.storage.w_longdan_sha;
													delete lib.storage.w_longdan_shan;
												}
											}
										},
										onrespond:function(){
											_status.event.player.line(_status.event.source);
											if(ui.But&&game.me==_status.event.player&&lib.config.But_zhaoyun==false){
												if(lib.storage.w_longdan_sha==undefined){
													lib.storage.w_longdan_sha=0;
												}
												lib.storage.w_longdan_sha++;
												if(lib.storage.w_longdan_shan>=7&&lib.storage.w_longdan_sha>=7){
													game.gainBut("But_zhaoyun","七进七出");
													delete lib.storage.w_longdan_sha;
													delete lib.storage.w_longdan_shan;
												}
											}
										},
										prompt:'你可以将一张[闪]当[杀]使用或打出',
										ai:{
											respondSha:true,
											skillTagFilter:function(player){
												return player.countCards('he',{name:'shan'});
											},
											effect:{
												target:function(card,player,target,current){
													if(card.name=='juedou')return [1,-0.3];
												}
											}
										}
									},
									w_longdanShan:{
										audio:'ext:新斗地主:2',
										enable:'chooseToRespond',
										filter:function(event,player){
											return player.countCards('he',{name:'sha'});
										},
										selectCard:1,
										filterCard:function(card,player){
											return card.name=='sha';
										},
										viewAs:{name:'shan'},
										onrespond:function(){
											_status.event.player.line(_status.event.source);
											if(ui.But&&game.me==_status.event.player&&lib.config.But_zhaoyun==false){
												if(lib.storage.w_longdan_shan==undefined){
													lib.storage.w_longdan_shan=0;
												}
												lib.storage.w_longdan_shan++;
												if(lib.storage.w_longdan_shan>=7&&lib.storage.w_longdan_sha>=7){
													game.gainBut("But_zhaoyun","七进七出");
													delete lib.storage.w_longdan_sha;
													delete lib.storage.w_longdan_shan;
												}
											}
										},
										prompt:'你可以将一张[杀]当[闪]使用或打出',
										ai:{
											respondShan:true,
											skillTagFilter:function(player){
												return player.countCards('he',{name:'sha'});
											},
											effect:{
												target:function(card,player,target,current){
													if(card.name=='sha')return [1,-0.35];
												}
											}
										}
									},
									w_shuiren:{
										audio:'ext:新斗地主:2',
										unique:true,
										skillAnimation:true,
										animationColor:'thunder',
										init:function(player){
											player.storage.w_shuiren=false;
										},
										mark:true,
										marktext:'限',
										intro:{
											content:'limited'
										},
										enable:'phaseUse',
										filter:function(event,player){
											if(player.storage.w_shuiren)return false;
											return true;
										},
										selectTarget:1,
										filterTarget:true,
										onuse:function(result,player){
											game.log(player);
											_status.currentPhase.storage.w_shuiren=true;
											_status.currentPhase.awakenSkill('w_shuiren');
										},
										content:function(){
											'step 0'
											target.draw(3);
											'step 1'
											target.recover();
										},
										ai:{
											order:10,
											result:{
												target:3,
											},
										},
									},
									w_tieqi:{
										audio:'ext:新斗地主:2',
										trigger:{player:'shaBegin'},
										check:function(event,player){
											return get.attitude(player,event.target)<2;
										},
										logTarget:'target',
										priority:11,
										content:function(){
											'step 0'
											trigger.target.addTempSkill("w_tieqi_Suo","phaseEnd");
											if(ui.But&&game.me==player&&lib.config.But_machao==false&&trigger.target.group=='wei'){
												if(lib.storage.w_tieqi==undefined){
													lib.storage.w_tieqi=0;
												}
												lib.storage.w_tieqi++;
											}
											player.judge();
											'step 1'
											var card = result.card;
											trigger.target.chooseToDiscard("是否弃置一张"+get.translation(get.suit(card))+"牌？",'he',{suit:get.suit(card)}).ai=function(card){
												if(!player.countCards('h',{name:'shan'}))return 0;
												if(card.name=='shan'&&player.countCards('h',{name:'shan'})==1)return 0;
												return 8-get.value(card);
											};
											'step 2'
											if(!result.bool){
												trigger.directHit=true;
											}
											else {
												event.finish();
											}
										},
										ai:{
											noSkill:true,
										},
										subSkill:{
											Suo:{
												locked:true,
												mark:true,
												marktext:'铁',
												intro:{
													name:'铁骑',
													content:'当前回合的非锁定技能失效',
												},
												init:function (player,skill){
													var skills=player.getSkills(true,false);
													for(var i=0;i<skills.length;i++){
														if(get.is.locked(skills[i])){
															skills.splice(i--,1);
														}
													}
													player.disableSkill(skill,skills);
												},
												onremove:function (player,skill){
													player.enableSkill(skill);
												},
											},
										}
									},
									w_tiandu:{
										audio:'ext:新斗地主:2',
										trigger:{player:'judgeEnd'},
										check:function(event){
											if(event.result.card.name=='du') return false;
											return true;
										},
										filter:function(event,player){
											if(get.owner(event.result.card)){
												return false;
											}
											if(event.nogain&&event.nogain(event.result.card)){
												return false;
											}
											return true;
										},
										content:function(){
											player.gain(trigger.result.card);
											player.$gain2(trigger.result.card);
										},
										ai:{
											effect:{
												target:function(card,player,target){
													if(get.tag(card,'respondShan')){
														if(player.hasSkillTag('noSkill'))return ;
														if(!target.getEquip(2))return ;
														if(target.getEquip(2).name=='bagua')return [1,-1.5];
													}
												}
											},
										},
									},
									w_huoji:{
										audio:'ext:新斗地主:2',
										enable:'chooseToUse',
										usable:2,
										selectCard:1,
										filterCard:function(card,player){
											return get.color(card)=='red';
										},
										viewAs:{name:'huoshaolianying'},
										viewAsFilter:function(player){
											return player.countCards('h',{color:'red'});
										},
										check:function(card){return 10-get.value(card)},
										prompt:'将一张红色手牌当[火烧连营]使用',
										group:['w_huoji_count'],
										subSkill:{
											count:{
												trigger:{source:'damageEnd'},
												filter:function(event,player){
													return event.card.name=='huoshaolianying';
												},
												direct:true,
												content:function(){
													if(ui.But&&lib.config.But_zhugeliang==false&&game.me==player){
														if(lib.storage.w_huoji==undefined){
															lib.storage.w_huoji=0;
														}
														lib.storage.w_huoji+=trigger.num;
														if(lib.storage.w_huoji>=10){
															game.gainBut("But_zhugeliang","天火燎原");
															delete lib.storage.w_huoji;
														}
													}
												}
											}
										}
									},
									w_kanpo:{
										audio:'ext:新斗地主:2',
										enable:'chooseToUse',
										filterCard:function(card){
											return get.color(card)=='black';
										},
										position:'he',
										viewAsFilter:function(player){
											return player.countCards('he',{color:'black'})>0;
										},
										viewAs:{name:'wuxie'},
										prompt:'将一张黑色牌当[无懈可击]使用',
										check:function(card){return 8-get.value(card)},
										threaten:1.2
									},
									w_bazhen:{
										audio:'ext:新斗地主:2',
										inherit:'bagua_skill',
										locked:true,
										filter:function(event,player){
											if(!lib.skill.bagua_skill.filter(event,player)) return false;
											if(player.getEquip(2)) return false;
											return true;
										},
										ai:{
											effect:{
												target:function(card,player,target){
													if(player==target&&get.subtype(card)=='equip2'){
														if(get.equipValue(card)<=7.5) return 0;
													}
													if(target.getEquip(2)) return;
													return lib.skill.bagua_skill.ai.effect.target.apply(this,arguments);
												}
											}
										}
									},
									w_jizhi:{
										audio:'ext:新斗地主:2',
										trigger:{player:'useCard'},
										filter:function(event,player){
											return get.type(event.card)=='trick';
										},
										content:function(){
											player.draw();
										},
									},
									w_qicai:{
										mod:{
											targetInRange:function(card,player,target,now){
												var type=get.type(card);
												if(type=='trick'||type=='delay') return true;
											},
											maxHandcard:function(player,num){
												return num+1;
											},
										},
										audio:'ext:新斗地主:2',
										trigger:{player:'phaseDiscardBegin'},
										direct:true,
										content:function(){player.logSkill('w_qicai');},
									},
									w_zhuhai:{
										audio:'ext:新斗地主:2',
										trigger:{global:'phaseEnd'},
										filter:function(event,player){
											if(_status.currentPhase==player)return false;
											return player.storage.w_zhuhai;
										},
										direct:true,
										content:function(){
											'step 0'
											player.chooseToUse("是否对"+get.translation(_status.currentPhase)+"使用一张[杀]",{name:'sha'},_status.currentPhase);
											'step 1'
											delete player.storage.w_zhuhai;
										},
										group:'w_zhuhai_load',
										subSkill:{
											load:{
												trigger:{global:'damageEnd'},
												filter:function(event,player){
													if(_status.currentPhase==player)return false;
													return event.source&&event.source==_status.currentPhase;
												},
												direct:true,
												content:function(){
													player.storage.w_zhuhai=true;
												}
											},
										},
									},
									w_jianyan:{
										audio:'ext:新斗地主:2',
										enable:'phaseUse',
										usable:1,
										filter:function(event,player){
											return game.hasPlayer(function(current){
												return current.sex=='male';
											});
										},
										content:function(){
											'step 0'
											player.chooseControl('基本牌','装备牌','锦囊牌','红  色','黑  色',function(event,player){
												var list = ['基本牌','装备牌','锦囊牌','红  色','黑  色'];
												list.randomSort();
												return list.randomGet();
											}).set("prompt","选择一种牌的类别或颜色");
											'step 1'
											player.popup(result.control);
											switch(result.control){
												case '基本牌':event.type = ['basic'];break;
												case '锦囊牌':event.type = ['trick','delay'];break;
												case '装备牌':event.type = ['equip'];break;
												case '红  色':event.type = ['red'];break;
												case '黑  色':event.type = ['black'];break;
											}
											var card;
											event.cards = [];
											while(1){
												card = get.cards(0);
												player.showCards(card);
												if(result.control=='红  色'||result.control=='黑  色'){
													if(event.type.contains(get.color(card)))break;
												}
												else {
													if(event.type.contains(get.type(card)))break;
												}
												event.cards.push(card);
												game.delay(1.5);
											}
											event.card = card;
											player.chooseTarget("将"+get.translation(event.card)+"交给一名男性角色",function(card,player,target){
												return target.sex=='male';
											},true).ai=function(target){
												return get.value(card)*get.attitude(player,target);
											};
											'step 2'
											player.line(result.targets,'green');
											result.targets[0].$gain2(event.card);
											result.targets[0].gain(event.card,'log');
											if(ui.But&&game.me==player&&lib.config.But_xushu==false&&result.targets[0]==player){
												if(lib.storage.w_jianyan==undefined){
													lib.storage.w_jianyan=0;
												}
												lib.storage.w_jianyan++;
												if(lib.storage.w_jianyan>=3){
													game.gainBut("But_xushu","折节学问");
													delete lib.storage.w_jianyan;
												}
											}
											'step 3'
											player.$throw(event.cards);
											for(var i=0;i<event.cards.length;i++){
												ui.discardPile.appendChild(event.cards[i]);
											}
										},
										ai:{
											order:10,
											result:{
												player:2,
											},
										},
									},
									w_feijiang:{
										audio:'ext:新斗地主:2',
										trigger:{global:'shaBefore'},
										priority:9,
										filter:function(event,player){
											return get.distance(player,event.target,'attack')<=1&&event.target!=player;
										},
										direct:true,
										content:function(){
											'step 0'
											player.chooseToDiscard("是否对"+get.translation(trigger.target)+"发动【飞将】？",{type:'basic'}).ai=function(card){
												if(player.countCards('h',{name:'shan'})==0){
													if(player.getEquip(2)&&player.getEquip(2).name=='renwang'&&get.color(trigger.card)!='black')return 0;
													if(player.getEquip(2)&&player.getEquip(2).name=='tengjia'&&trigger.card.nature)return 0;
												}
												if(get.attitude(player,trigger.target)<2)return 0;
												return 10-get.value(card);
											};
											'step 1'
											if(result.bool){
												player.addTempSkill("w_feijiang_temp",["damageEnd","respondAfter"]);
												player.logSkill("w_feijiang",trigger.target);
												trigger.target = player;
											}
											else
												event.finish();
										},
										subSkill:{
											temp:{
												trigger:{player:'respond'},
												filter:function(event,player){
													return event.card.name=='shan'&&player.maxHp>=player.num('h');
												},
												direct:true,
												content:function(){
													var num = player.maxHp-player.num('h');
													player.draw(num);
													if(ui.But&&game.me==player&&lib.config.But_wangping==false&&num>=4){
														game.gainBut("But_wangping","无当飞将");
													}
												}
											},
										},
									},
									w_qianhuan:{
										audio:"ext:新斗地主:2",
										init:function(player){
											player.storage.w_qianhuan=[];
										},
										marktext:'幻',
										intro:{
											content:'cards',
										},
										trigger:{global:'damageEnd'},
										filter:function(event,player){
											return event.player.num('he');
										},
										direct:true,
										content:function(){
											"step 0"
											var att = get.attitude(trigger.player,player);
											trigger.player.chooseCard("触发【千幻】<p>是否将一张牌置于"+get.translation(player)+"的武将牌上？</p>",'he').ai=function(card){
												if(att<2)return 0;
												return 10-get.value(card);
											};
											"step 1"
											if(result.bool){
												trigger.player.logSkill("w_qianhuan");
												player.$gain(result.cards,trigger.player);
												trigger.player.lose(result.cards,ui.special);
												player.storage.w_qianhuan = player.storage.w_qianhuan.concat(result.cards);
												player.syncStorage('w_qianhuan');
												player.markSkill('w_qianhuan');
											}
											else {
												event.finish();
											}
										},
										group:["w_qianhuan_Target"],
										subSkill:{
											Target:{
												audio:"ext:新斗地主:2",
												trigger:{global:'useCardToBefore'},
												priority:15,
												filter:function(event,player){
													return player.storage.w_qianhuan&&player.storage.w_qianhuan.length&&(get.type(event.card)=='basic'||get.type(event.card)=='trick'||get.type(event.card)=='delay')&&event.targets.length==1;
												},
												direct:true,
												content:function(){
													"step 0"
													player.chooseCardButton("<p>是否弃置一张'幻',令"+get.translation(trigger.player)+"对"+get.translation(trigger.target)+"使用的"+get.translation(trigger.card)+"失效",player.storage.w_qianhuan).ai=function(){
														if(get.effect(trigger.target,trigger.card,trigger.player,player)>=0)return 0;
														return 2;
													};
													"step 1"
													if(result.bool){
														var card = result.links[0];
														player.storage.w_qianhuan.remove(card);
														if(!player.storage.w_qianhuan.length){
															player.unmarkSkill('w_qianhuan');
														}
														else{
															player.markSkill('w_qianhuan');
														}
														player.syncStorage('w_qianhuan');
														player.logSkill("w_qianhuan",trigger.player);
														player.$throw(card);
													}
													else {
														event.finish();
													}
													"step 2"
													trigger.untrigger();
													trigger.finish();
												}
											}
										}
									},
									w_xiansi:{
										audio:"ext:新斗地主:2",
										trigger:{player:'phaseBegin'},
										direct:true,
										init:function(player){
											player.storage.w_xiansi=[];
										},
										content:function(){
											"step 0"
											player.chooseTarget(get.prompt('w_xiansi'),[1,2],function(card,player,target){
												return target.countCards('he')>0;
											},function(target){
												return -get.attitude(_status.event.player,target);
											});
											"step 1"
											if(result.bool){
												player.logSkill('w_xiansi',result.targets);
												event.targets=result.targets;
											}
											else{
												event.finish();
											}
											"step 2"
											if(event.targets.length){
												var target=event.targets.shift();
												event.current=target;
												player.choosePlayerCard(target,true);
											}
											else{
												event.finish();
											}
											"step 3"
											if(result.bool){
												player.storage.w_xiansi=player.storage.w_xiansi.concat(result.links);
												player.markSkill('w_xiansi');
												player.syncStorage('w_xiansi');
												event.current.lose(result.links,ui.special);
												event.current.$give(result.links,player);
												event.goto(2);
											}
										},
										intro:{
											content:'cards',
											onunmark:function(storage,player){
												if(storage&&storage.length){
													for(var i=0;i<storage.length;i++){
														ui.discardPile.appendChild(storage[i]);
													}
													player.$throw(storage);
													player.storage.w_xiansi.length=0;
												}
											}
										},
										ai:{
											threaten:2
										},
										global:'w_xiansi2'
									},
									w_xiansi2:{
										enable:'phaseUse',
										audio:"ext:新斗地主:2",
										forceaudio:true,
										filter:function(event,player){
											var players=game.filterPlayer();
											for(var i=0;i<players.length;i++){
												if(players[i].storage.w_xiansi){
													return players[i].storage.w_xiansi.length>1&&player.canUse('sha',players[i],true,true);
												}
											}
											return false;
										},
										direct:true,
										delay:0,
										content:function(){
											"step 0"
											var targets=game.filterPlayer(function(current){
												if(current.storage.w_xiansi){
													return current.storage.w_xiansi.length>1&&player.canUse('sha',current,true,true);
												}
												return false;
											});
											if(targets.length==1){
												event.target=targets[0];
												event.goto(2);
											}
											else if(targets.length>0){
												player.chooseTarget(true,'选择【陷嗣】的目标',function(card,player,target){
													return _status.event.list.contains(target);
												}).set('list',targets).set('ai',function(target){
													var player=_status.event.player;
													return get.effect(target,{name:'sha'},player,player);
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
												if(event.target.storage.w_xiansi.length==2){
													event.directresult=event.target.storage.w_xiansi.slice(0);
												}
												else{
													player.chooseCardButton('移去两张“逆”',2,event.target.storage.w_xiansi,true);
												}
											}
											else{
												event.finish();
											}
											"step 3"
											if(event.directresult||result.bool){
												player.logSkill('w_xiansi2');
												var links=event.directresult||result.links;
												for(var i=0;i<links.length;i++){
													event.target.storage.w_xiansi.remove(links[i]);
												}
												event.target.syncStorage('w_xiansi');
												if(!event.target.storage.w_xiansi.length){
													event.target.unmarkSkill('w_xiansi');
												}
												else{
													event.target.markSkill('w_xiansi');
												}
												event.target.$throw(links);
												game.log(event.target,'被移去了',links);
												for(var i=0;i<links.length;i++){
													ui.discardPile.appendChild(links[i]);
												}
												player.useCard({name:'sha'},event.target);
											}
										},
										ai:{
											order:function(){
												return get.order({name:'sha'})+0.05;
											},
											result:{
												player:function(player){
													var target=game.findPlayer(function(current){
														return current.storage.w_xiansi;
													});
													if(target){
														return get.effect(target,{name:'sha'},player,player);
													}
												}
											}
										}
									}
								},
								translate:{
									"w_caocao":"曹操",
									"w_guojia":"郭嘉",
									"w_xiahoudun":"夏侯惇",
									"w_simayi":"司马懿",
									"w_zhangliao":"张辽",
									"w_xuchu":"许褚",
									"w_zhenji":"甄姬",
									"w_lidian":"李典",
									"w_caoang":"曹昂",
									"w_sunquan":"孙权",
									"w_zhouyu":"周瑜",
									"w_ganning":"甘宁",
									"w_lvmeng":"吕蒙",
									"w_huanggai":"黄盖",
									"w_luxun":"陆逊",
									"w_daqiao":"大乔",
									"w_sunshangxiang":"孙尚香",
									"w_lingcao":"凌操",
									"w_yuanshao":"袁绍",
									"w_lvbu":"吕布",
									"w_huatuo":'华佗',
									"w_diaochan":'貂蝉',
									"w_yuanshu":'袁术',
									"w_huaxiong":'华雄',
									"w_gongsunzan":'公孙瓒',
									"w_niufu":'牛辅',
									"w_jushou":'沮授',
									"w_wangyun":'王允',
									"w_liuxie":'刘协',
									"w_liubei":'刘备',
									"w_guanyu":'关羽',
									"w_zhangfei":'张飞',
									"w_zhaoyun":'赵云',
									"w_machao":'马超',
									"w_zhugeliang":'诸葛亮',
									"w_huangyueying":'黄月英',
									"w_xushu":'徐庶',
									"w_wangping":'王平',
									"w_lifeng":'李丰',
									"ws_simayi":'神司马懿',
									"w_wangyi":"王异",
									"w_zhangchunhua":"张春华",
									"w_lingtong":"凌统",
									"w_sunce":"孙策",
									"w_yuji":"于吉",
									"w_zuoci":"左慈",
									"w_liufeng":"刘封",
									w_jianxiong:'奸雄',
									w_weiwu:'魏武',
									w_yiji:'遗计',
									w_tiandu:'天妒',
									w_ganglie:'刚烈',
									w_qingjian:'清俭',
									w_fankui:'反馈',
									w_guicai:'鬼才',
									w_tuxi:'突袭',
									w_zhenwei:'镇威',
									w_luoyi:'裸衣',
									w_xiechan:'挟缠',
									w_luoshen:'洛神',
									w_xunxun:'恂恂',
									w_kaikang:'慷忾',
									w_wangzi:'王姿',
									w_yingzi:'英姿',
									w_fanjian:'反间',
									w_fenwei:'奋威',
									w_keji:'克己',
									w_botu:'博图',
									w_kurou:'苦肉',
									w_zhaxiang:'诈降',
									w_guose:'国色',
									w_liuli:'琉璃',
									w_xiaoji:'枭姬',
									w_jieyin:'结姻',
									w_dujin:'独进',
									w_luanji:'乱击',
									w_jianzhen:'箭阵',
									w_wushuang:'无双',
									w_zhanshen:'战神',
									w_shenji:'神戟',
									w_puji:'普济',
									w_biyue:'闭月',
									w_lijian:'离间',
									w_yongsi:'庸肆',
									w_weidi:'伪帝',
									w_shiyong:'恃勇',
									w_yicong:'义从',
									w_xiaoqiu:'骁酋',
									w_kundou:'困斗',
									w_jianying:'渐营',
									w_shibei:'矢北',
									w_lianji:'连计',
									w_jingong:'矜功',
									w_tianming:'天命',
									w_mizhao:'密诏',
									w_mouchen:'谋逞',
									w_rende:'仁德',
									w_hanyi:'汉裔',
									w_renwang:'汉裔',
									//w_hanshi:'汉室',
									w_wusheng:'武圣',
									w_yijue:'义绝',
									w_paoxiao:'咆哮',
									w_tishen:'替身',
									w_longdan:'龙胆',
									w_longdanSha:'龙胆•杀',
									w_longdanShan:'龙胆•闪',
									w_shuiren:'随仁',
									w_tieqi:'铁骑',
									w_huoji:'火计',
									w_kanpo:'看破',
									w_bazhen:'八阵',
									w_jizhi:'集智',
									w_qicai:'奇才',
									w_zhuhai:'诛害',
									w_jianyan:'荐言',
									w_feijiang:'飞将',
									w_qingguo:'倾国',
									w_wangxi:'忘隙',
									w_zhiheng:'制衡',
									w_qixi:'奇袭',
									w_guicai:'鬼才',
									w_lianying:'连营',
									w_tunchu:"屯储",
									w_shuliang:"输粮",
									w_renjie:"忍戒",
									w_zhenlie:"贞烈",
									w_miji:"秘计",
									w_jueqing:"绝情",
									w_shangshi:"伤势",
									w_xuanfeng:"旋风",
									w_jiang:"激昂",
									w_hunzi:"魂姿",
									w_yinghun:"英魂",
									w_zhiba:"制霸",
									w_qianhuan:"千幻",
									w_xinsheng:"新身",
									w_xiansi:"陷嗣",
									w_qiwu:"栖梧",
									"w_qiwu_info":"结束阶段,若你没有'栖梧'牌,你可以回复一点体力并将至多三张牌置于武将牌上,然后随机获得三个基本牌或非延时锦囊牌的名字;你可以将一张'栖梧'当一张基本牌或非延时锦囊使用或打出,然后你移去对应的名字",
									"w_xiansi_info":"准备阶段,你可以将至多两名角色的各一张牌置于你的武将牌旁称为'逆';当其他角色需要对你使用[杀]时,其可以弃置你的两张'逆'视为对你使用一张[杀]",
									"w_xinsheng_info":"<font color=#fc0>锁定技</font> 游戏开始时、回合开始之前或你受到伤害后,你观看两张未上场的武将牌,你将体力上限调整为这两张武将牌的体力上限之和,然后选择其中至多两项非特殊技能,直至你的下个回合开始,你视为拥有这些技能",
									"w_qianhuan_info":"当一名角色受到伤害后,其可以将一张牌置于你的武将牌上称为'幻';当一名角色成为基本牌或锦囊牌的唯一目标时,你可以将一张'幻'置入弃牌堆并令此牌失效",
									"w_jiang_info":"<font color=#fc0>锁定技</font> 当你使用或被使用红色的[杀]或[决斗]时,你摸一张牌并令此牌造成的伤害+1",
									"w_hunzi_info":"<font color=#fc0>觉醒技</font> 准备阶段,若你的体力值为场上最少(或之一),你需减一点体力上限并获得技能[英魂]和[英姿]",
									"w_yinghun_info":"准备阶段,你可以令一名其他角色摸x+1张牌然后弃置一张牌或摸一张牌然后弃置x+1张牌(x为你装备区牌的数量的一半,向上取整)",
									"w_zhiba_info":"<font color=#fc0>地主技</font> 出牌阶段限一次,你可以与一名其他角色拼点,若你赢,你视为对其使用一张[决斗],若你没赢,其弃置你一张牌",
									"w_xuanfeng_info":"每当你失去一张装备区的牌或于弃牌阶段弃牌时,你可以选择一项:1.弃置一名其他角色的一张牌;2.视为使用一张[杀]",
									"w_jueqing_info":"<font color=#fc0>锁定技</font> 你即将造成的伤害均视为体力流失",
									"w_shangshi_info":"当你的手牌数小于x时,你可以立即将手牌补至x张(x为你已损失的体力值)",
									"w_zhenlie_info":"当你成为其他角色使用的[杀]或普通锦囊的目标时,你可以失去体力并弃置使用者的一张牌,然后令此牌无效",
									"w_miji_info":"回合结束时,若你已受伤,你可以摸x张牌(x为你已损失的体力值),然后你可以将等量的手牌交给一名其他角色",
									"w_renjie_info":"<font color=#fc0>锁定技</font> 每当你受到伤害后或于弃牌阶段失去牌后,你获得等量的'忍'标记",
									"w_tunchu_info":"摸牌阶段摸牌时,若你没有'粮',你可以额外摸两张牌,然后将任意张手牌置于你的武将牌上,称为'粮';若你的武将牌上有'粮',则你不能使用[杀]",
									"w_shuliang_info":"一名角色的回合结束时,若其手牌数小于体力值,你可以将一张'粮'置入弃牌堆,令该角色摸两张牌",
									"w_lianying_info":'当你失去最后的手牌时,你可以令至多x名角色各摸一张牌(x为失去的手牌数)',
									'w_jianxiong_info':'当你受到伤害后,你可以获得对你造成伤害的牌或摸x张牌(x为伤害数)',
									'w_weiwu_info':'<font color=#fc0>地主技</font> <font color=#fc0>限定技</font> 回合结束时,你可以进行一个额外的回合',
									"w_yiji_info":'每当你受到一点伤害后,你可以观看牌堆顶的两张牌并将其交给任意角色',
									'w_ganglie_info':'每当你受到一次伤害后,你可以进行一次判定,若结果为:黑色:你获得一名其他角色的一张牌;红色:你对一名其他角色造成一点伤害',
									'w_qingjian_info':'当你于摸牌阶段外获得牌时,你可以将其中任意张牌置于武将牌上;当前回合结束时,若你武将牌上有牌,你需将其交给任意名其他角色',
									'w_fankui_info':'每当你受到一点伤害后,你可以获得伤害来源的一张牌',
									'w_tuxi_info':'摸牌阶段,你可以少摸一张牌,若如此做,你获得一名其他角色的一张手牌',
									'w_zhenwei_info':'<font color=#fc0>登场技</font> 游戏开始时,你获得所有其他角色的各一张手牌',
									"w_luoyi_info":'出牌阶段开始时,你可以弃置一张装备牌,若如此做,你可以弃置场上的一张牌,然后此阶段以你为伤害来源的[杀]和[决斗]造成的伤害+1',
									"w_xiechan_info":'<font color=#fc0>限定技</font> 出牌阶段,你可以与一名其他角色拼点,若你赢,你视为对该角色使用一张[决斗];若你没赢,你结束出牌',
									"w_luoshen_info":'准备阶段,你可以进行一次判定,若结果为黑色,则你可以重复此流程;你获得此阶段所有的黑色判定牌',
									"w_xunxun_info":'摸牌阶段开始时,你可以观看牌堆顶的四张牌,将其中两张以任意顺序置于牌堆顶,将剩余的牌以任意顺序置于牌堆底',
									"w_kaikang_info":'当你距离1以内的角色成为[杀]的目标后,你可以摸一张牌并将一张牌交给该角色,若此牌为装备牌,则该角色可以使用之',
									"w_wangzi_info":'<font color=#fc0>地主技</font> <font color=#fc0>锁定技</font> 你的手牌上限+x(x为农民数量)',
									"w_yingzi_info":'<font color=#fc0>锁定技</font> 摸牌阶段,你额外摸一张牌;你的手牌上限等于你的体力上限',
									"w_fanjian_info":'出牌阶段限一次,你可以将一张手牌置于牌堆顶并令一名其他角色选择一种花色,然后该角色摸一张牌并展示之,若花色不同,则该角色失去一点体力',
									"w_fenwei_info":'<font color=#fc0>限定技</font> 当一张锦囊牌指定了至少两名角色为目标时，你可以令此牌对其中任意名角色无效',
									"w_keji_info":'<font color=#fc0>锁定技</font> 你的手牌上限为x(x为场上所有角色的体力值之和)',
									"w_botu_info":'回合结束时,若你于此回合内使用过四种不同花色的牌,则你可以进行一个额外的回合',
									"w_kurou_info":'出牌阶段限一次,你可以弃置一张牌然后失去一点体力',
									"w_zhaxiang_info":'<font color=#fc0>锁定技</font> 每当你失去一点体力后,你摸三张牌;若此时为你的出牌阶段,则直至当前回合结束,你使用[杀]的次数上限+1,你使用红色[杀]时无距离限制且不可被[闪]响应',
									"w_guose_info":'出牌阶段限一次,你可以将一张方片牌当[乐不思蜀]使用或弃置一张方片牌并弃置场上的一张[乐不思蜀],若如此做,你摸一张牌',
									"w_liuli_info":'当你成为[杀]的目标时,你可以弃置一张牌将此[杀]转移给你攻击范围内除使用者外的一名其他角色',
									"w_xiaoji_info":'每当你失去装备区的一张牌后,你可以摸两张牌',
									"w_jieyin_info":'出牌阶段限一次,你可以弃置两张手牌并选择一名男性角色,你与其各回复一点体力',
									"w_dujin_info":'摸牌阶段,你可以额外摸x+1张牌(x为你装备区牌的数量,向下取整)',
									"w_luanji_info":'出牌阶段限四次,你可以将两张相同花色的手牌当[万箭齐发]使用,此牌结算后,你摸一张牌',
									"w_jianzhen_info":'<font color=#fc0>地主技</font> <font color=#fc0>登场技</font> 游戏开始时,你视为使用x张[万箭齐发](x为当前场上势力数)',
									"w_wushuang_info":'<font color=#fc0>锁定技</font> 你使用的[杀]或[决斗]需要两张[闪]或[杀]响应',
									"w_zhanshen_info":'<font color=#fc0>地主技</font> <font color=#fc0>觉醒技</font> 准备阶段,若你已受伤,则你减一点体力上限并弃置装备区的武器牌,然后获得技能[神戟]和[马术]',
									"w_shenji_info":'<font color=#fc0>锁定技</font> 出牌阶段,你使用[杀]的次数上限+1;若你没有装备武器,则你使用[杀]时可以指定至多两名目标;你可以重铸武器牌',
									"w_puji_info":'出牌阶段限一次,你可以弃置你和与你不同阵营的所有其他角色的各一张牌,被弃置黑桃牌的角色各摸一张牌',
									"w_biyue_info":'回合结束时,你可以摸一张牌',
									"w_lijian_info":'出牌阶段限一次,你可以弃置一张牌,令一名男性角色视为对另一名男性角色使用一张[决斗](不可被[无懈可击]响应)',
									"w_yongsi_info":'<font color=#fc0>锁定技</font> 摸牌阶段,你额外摸x张牌;弃牌阶段开始时,你弃置x张牌(不足则全弃)(x为场上势力数)',
									"w_weidi_info":'<font color=#fc0>农民技</font> <font color=#fc0>锁定技</font> 你视为拥有当前地主的地主技',
									"w_shiyong_info":'<font color=#fc0>锁定技</font> 摸牌阶段你少摸一张牌,视为使用一张[杀](无距离限制)',
									"w_yicong_info":'<font color=#fc0>农民技</font> <font color=#fc0>锁定技</font> 你的进攻距离和防御距离+1',
									"w_xiaoqiu_info":'当你使用黑色[杀]对目标角色造成伤害后,你可以弃置目标角色的一张牌',
									"w_kundou_info":'<font color=#fc0>锁定技</font> 与你相同阵营的其他角色受到大于1的伤害时,令此伤害改为1;与你不同阵营的角色摸牌阶段摸牌时,若其已受伤,令摸牌数-1',
									"w_jianying_info":'当你于出牌阶段使用牌时,若此牌与你此阶段使用的上一张牌花色或点数相同,则你可以摸一张牌',
									"w_shibei_info":'<font color=#fc0>锁定技</font> 当你受到伤害后,若为你此回合第一次受伤,则你回复一点体力,否则你失去一点体力',
									"w_lianji_info":'出牌阶段限一次,你可以交给一名其他角色一张[杀]或黑色锦囊牌,并令该角色使用牌堆中的随机一张武器牌.然后该角色选择一项:1.对除你以外的角色使用该牌,并将装备区里的武器牌交给该牌的一个目标角色;2.视为你对其使用此牌,并将装备区内的武器牌交给你',
									"w_jingong_info":'出牌阶段限一次,你可以将一张装备牌或[杀]当一张随机锦囊牌使用(三选一),然后本回合的结束阶段,若你于本回合内未造成过伤害,你失去1点体力',
									"w_tianming_info":'当你成为杀的目标后,你可以弃置两张牌(不足则全弃,无牌则不弃),然后摸两张牌;若此时全场体力值最多的角色仅有一名(且不是你),该角色也可以如此做',
									"w_mizhao_info":'出牌阶段限一次,你可以将所有手牌(至少一张)交给一名其他角色.若如此做,你令该角色与你指定的另一名有手牌的角色拼点.视为拼点赢的角色对没赢的角色使用一张杀',
									//"w_hanshi_info":'',
									"w_mouchen_info":'<font color=#fc0>觉醒技</font> 当其他角色使用因[连计]交给其的牌累计造成伤害达到3点后,你失去技能[连计],然后获得技能[矜功]',
									"w_rende_info":'出牌阶段,你可以将任意张手牌交给一名其他角色,若你于此阶段内给出的牌首次达到两张或更多,你可以视为使用一张基本牌',
									"w_hanyi_info":'<font color=#fc0>地主技</font> <font color=#fc0>锁定技</font> ',
									"w_renwang_info":'<font color=#fc0>地主技</font> 当其他角色于其回合内对你使用第二张或更多的[杀]或普通锦囊时,你可弃置该角色的一张牌',
									"w_wusheng_info":'你可以将一张红色牌当[杀]使用或打出',
									"w_yijue_info":'出牌阶段限一次,你可以与一名其他角色拼点,若你赢,则该角色的非锁定技失效且不能使用或打出手牌直至当前回合结束,若你没赢,你可以令该角色回复一点体力',
									"w_paoxiao_info":'<font color=#fc0>锁定技</font> 出牌阶段,你使用[杀]无次数限制',
									"w_tishen_info":'<font color=#fc0>限定技</font> 回合开始时,你可以将体力值回复至与你上回合结束时的体力值相等,然后你摸x张牌(x为你以此法回复的体力值)',
									"w_longdan_info":'你可以将[杀]当[闪],[闪]当[杀]使用或打出',
									"w_shuiren_info":'<font color=#fc0>限定技</font> 出牌阶段,你可以令一名角色摸三张牌并回复一点体力',
									"w_tieqi_info":'当你使用[杀]指定目标后,你可以进行一次判定并令该角色的非锁定技能失效直至当前回合结束;然后除非该角色弃置一张与判定结果相同花色的牌,否则此[杀]不可被[闪]响应',
									"w_tiandu_info":'当你的判定牌生效后,你可以获得之',
									"w_huoji_info":'出牌阶段限两次,你可以将一张红色手牌当[火烧连营]使用',
									"w_kanpo_info":'你可以将一张黑色牌当[无懈可击]使用',
									"w_bazhen_info":'<font color=#fc0>锁定技</font> 若你没有装备防具,则视为你装备着[八卦阵]',
									"w_jizhi_info":'当你使用普通锦囊牌时,你可以摸一张牌',
									"w_qicai_info":'<font color=#fc0>锁定技</font> 你使用锦囊牌时无距离限制,你的手牌上限+1',
									"w_zhuhai_info":'其他角色的回合结束时,若该角色于此回合造成过伤害,则你可以对该角色使用一张[杀]',
									"w_jianyan_info":'出牌阶段限一次,你可以声明一种牌的类别或颜色,然后依次从牌堆顶亮出一张牌,直至亮出你声明的牌,你将此牌交给一名男性角色,将其余的牌置入弃牌堆',
									"w_feijiang_info":'当你攻击范围内的其他角色成为[杀]的目标时,你可以弃置一张基本牌,将此杀转移给你,若你使用[闪]抵消此杀,则你将手牌补至体力上限',
									"w_qingguo_info":'你可以将一张黑色手牌当[闪]使用或打出',
									"w_wangxi_info":'每当你对其他角色造成一点伤害或受到其他角色造成的一点伤害后,你可以与该角色各摸一张牌',
									"w_zhiheng_info":'出牌阶段限一次,你可以弃置任意张牌,然后摸等量的牌',
									"w_qixi_info":'你可以将一张黑色牌当[过河拆桥]使用',
									"w_guicai_info":'一名角色的判定牌生效前,你可以打出一张牌替代之',
									
									qinggang:'倚天剑',
								},
							},'新斗地主');
							
							lib.config.mode_config.identity.identity_mode = "normal";
							lib.configOL.number = 3;
							lib.config.mode_config.identity.identity[1] = ['zhu','fan','fan'];
							lib.config.mode_config.identity.double_nei = false;
							lib.config.mode_config.identity.enhance_zhu = false;
							lib.config.mode_config.identity.special_identity = false;
							lib.config.mode_config.identity.double_character = false;
							lib.config.mode_config.identity.free_choose = false;
							lib.config.mode_config.identity.change_choice = false;
							lib.config.mode_config.identity.change_identity = false;
							lib.config.mode_config.identity.change_card = 'twice';
							for(var i in translate){
								lib.translate[i] = translate[i];
							}
							for(var i in skill){
								lib.skill[i] = skill[i];
							}
							lib.skill.hanbing_skill={
								audio:true,
								trigger:{player:'shaHit'},
								filter:function(event,player){
									return event.target.num('he');
								},
								logTarget:'target',
								check:function(event,player){
									var eff = get.damageEffect(event.target,player,player);
									var att = get.attitude(player,event.target);
									if(event.target.num('he')==1){
										if(att>2){
											if(event.target.hp<2)return true;
											if(eff>0)return false;
											return true;
										}
										else {
											if(event.target.hasSkillTag('maixie')&&eff<0)return true;
											return false;
										}
									}
									if(event.target.num('he')<5){
										if(event.target.hp<2)return false;
										if(event.target.hasSkillTag('maixie')&&eff<0)return true;
										return eff<0;
									}
									return eff<0;
								},
								content:function(){
									'step 0'
									event.num=2;
									'step 1'
									event.num--;
									player.line(trigger.target);
									player.discardPlayerCard(trigger.target,'he',true);
									'step 2'
									if(event.num>0&&trigger.target.num('he')){
										event.goto(1);
									}
									else {
										trigger.untrigger();
										trigger.unhurt=true;
									}
								}
							};
							lib.skill.qinglong_skill={
								trigger:{player:'shaMiss'},
								direct:true,
								filter:function(event,player){
									return player.canUse('sha',event.target)&&player.hasSha();
								},
								content:function(){
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
										player.getStat('card')['sha']--;
									}
									else if(event.jiu){
										player.addSkill('jiu');
									}
								}
							};
							lib.card.zhuge.skills=["w_zhuge_skill"];
							lib.card.zhuge.onLose=function(){
								delete player.storage.w_zhuge;
							};
							lib.card.zhuge.onEquip=function(){
								if(_status.currentPhase!=player)return;
								if(player.getStat('card')['sha']){
									player.storage.w_zhuge=true;
								}
								else 
									return;
							};
							lib.skill.w_zhuge_skill = {
								mod:{
									cardUsable:function(card,player,num){
										if(card.name=='sha')return Infinity;
									}
								},
								audio:'ext:新斗地主:true',
								trigger:{player:'useCardBefore'},
								filter:function(event,player){
									if(_status.currentPhase!=player)return false;
									if(event.card.name!='sha')return false;
									if(player.storage.w_zhuge==undefined){
										player.storage.w_zhuge=true;
										return false;
									}
									return true;
								},
								priority:-15,
								locked:true,
								forced:true,
								content:function(){
									player.popup("诸葛连弩");
									player.logSkill("w_zhuge_skill");
								},
								group:['w_zhuge_skill_Init'],
								subSkill:{
									Init:{
										trigger:{player:'phaseUseBegin'},
										direct:true,
										content:function(){
											delete player.storage.w_zhuge;
										}
									}
								}
							};
							lib.skill.cixiong_skill.priority=10;
							lib.skill.cixiong_skill.audio="ext:新斗地主:true";
							lib.skill.renwang_skill.priority=7;
							lib.skill.tengjia1.priority=7;
							lib.skill.tengjia1.trigger={target:"useCardToBegin"};
							lib.skill.w_qinggang_skill = {
								trigger:{player:'shaBegin'},
								priority:10,
								logTaget:"target",
								forced:true,
								content:function(){},
								ai:{
									unequip:true,
									skillTagFilter:function(player,tag,arg){
										if(arg&&arg.name=='sha') return true;
										return false;
									}
								}
							};
							lib.card.qinggang.skills=['w_qinggang_skill'];
						},
					}
					setInterval(function(){
						var noname= lib.config.w_noname;
						if(noname.time==undefined){
							return ;
						}
						if(noname.time.sec==0&&noname.time.min==0){
							if(!noname.TPs){
								noname.TPs = true;
								var str = "您购买的彩票";
								var reward = 0;
								var length = 0;
								for(var i in noname.buyed){
									if(noname.buyed[i].count==0)continue;
									for(var j in noname.TP){
										if(get.translation(noname.TP[j].name)==noname.buyed[i].name||get.translation(noname.TP[j].type)+'牌'==noname.buyed[i].name){
											str += "<span class='yellowtext'>["+noname.buyed[i].name+"]</spn>";
											reward+=noname.buyed[i].prise*noname.buyed[i].count;
											length++;
										}
									}
								}
								str += "已中奖";
								if(length==0){
									str = "本期[无名杀彩票]已开奖,很遗憾您未中奖！";
								}
								game.warn(str);
								if(length>0)
									game.changeGoldTicket(reward);
								noname.time = {
									min:1,
									sec:0,
								}
								game.saveConfig("w_noname",noname);
							}
							else {
								noname.count++;
								game.saveConfig("w_noname",noname);
								game.w_nonameReset();
							}
							if(document.getElementById('div36').style.display==""){
								document.getElementById('div27').onclick();
							}
							return ;
						}
						noname.time.sec--;
						if(noname.time.sec<0){
							noname.time.sec = 59;
							noname.time.min--;
						}
						game.saveConfig("w_noname",noname);
						var div = document.getElementById('div36_div');
						if(div==null){
							return;
						}
						var str2 = lib.config.w_noname.TPs?"距下期竞猜还剩：":"距本期开奖还剩：";
						div.innerHTML = str2+noname.time.min+":"+noname.time.sec;
					},1000);
				}
				if(config.But&&lib.brawl){
					lib.arenaReady.push(function(){
						ui.But = ui.create.system("战功 <span>"+lib.config.bUT+"/"+lib.config.But+"</span>",null,false);
						lib.setPopped(ui.But,function(){
							var ImageSrc=function(config,name){
								if(config){
									return lib.assetURL+"extension/新斗地主/"+name+"0.jpg";
								}
								return lib.assetURL+"extension/新斗地主/"+name+"1.jpg";
							};
							var ButStr=function(config){
								if(config){
									return "<span class='greentext'>(已获得)</span>";
								}
								return "<span class='redtext'>(未获得)</span>";
							};
							var uiintro = ui.create.dialog("hidden");
							uiintro.listen(function(e){
								e.stopPropagation();
							});
							uiintro.add("<span>普通战功</span><hr/>");
							uiintro.add(
								"<div style='position:absolute;top:"+110*0+"px;width:100%;height:100px;'>"+
									"<div style='position:absolute;left:1%;top:3%;background-color:rgba(80,80,80,1);width:32%;height:67%;'>"+
										"<img src='"+ImageSrc(lib.config.But_caocao,"w_caocao")+"' width=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;left:1%;top:72%;background-color:rgba(80,80,80,1);width:32%;height:25%;' >"+
										"<center style='position:absolute;top:15%;left:8%'>治世能臣</center>"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:3%;background-color:rgba(80,80,80,1);width:65%;height:67%;'>"+
										"<p align='center' style='font-size:80%'>在新斗地主模式中使用曹操发动奸雄摸牌累计5张</p>"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:72%;background-color:rgba(80,80,80,1);width:65%;height:25%;' >"+
										"<p align='center' style='font-size:80%'>"+ButStr(lib.config.But_caocao)+"</p>"+
									"</div>"+
								"</div>"+
								"<div style='position:absolute;top:"+110*1+"px;width:100%;height:100px;'>"+
									"<div style='position:absolute;left:1%;top:3%;background-color:rgba(80,80,80,1);width:32%;height:67%;'>"+
										"<img src='"+ImageSrc(lib.config.But_guojia,"w_guojia")+"' width=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;left:1%;top:72%;background-color:rgba(80,80,80,1);width:32%;height:25%;' >"+
										"<center style='position:absolute;top:15%;left:8%'>计平天下</center>"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:3%;background-color:rgba(80,80,80,1);width:65%;height:67%;'>"+
										"<p align='center' style='font-size:80%'>在新斗地主模式中使用郭嘉发动遗计分牌累计5张</p>"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:72%;background-color:rgba(80,80,80,1);width:65%;height:25%;' >"+
										"<p align='center' style='font-size:80%'>"+ButStr(lib.config.But_guojia)+"</p>"+
									"</div>"+
								"</div>"+
								"<div style='position:absolute;top:"+110*2+"px;width:100%;height:100px;'>"+
									"<div style='position:absolute;left:1%;top:3%;background-color:rgba(80,80,80,1);width:32%;height:67%;'>"+
										"<img src='"+ImageSrc(lib.config.But_simayi,"w_simayi")+"' width=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;left:1%;top:72%;background-color:rgba(80,80,80,1);width:32%;height:25%;' >"+
										"<center style='position:absolute;top:15%;left:8%'>心吞三国</center>"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:3%;background-color:rgba(80,80,80,1);width:65%;height:67%;'>"+
										"<p align='center' style='font-size:80%'>在新斗地主模式中使用司马懿发动反馈获得牌累计3张</p>"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:72%;background-color:rgba(80,80,80,1);width:65%;height:25%;' >"+
										"<p align='center' style='font-size:80%'>"+ButStr(lib.config.But_simayi)+"</p>"+
									"</div>"+
								"</div>"+
								"<div style='position:absolute;top:"+110*3+"px;width:100%;height:100px;'>"+
									"<div style='position:absolute;left:1%;top:3%;background-color:rgba(80,80,80,1);width:32%;height:67%;'>"+
										"<img src='"+ImageSrc(lib.config.But_xiahoudun,"w_xiahoudun")+"' width=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;left:1%;top:72%;background-color:rgba(80,80,80,1);width:32%;height:25%;' >"+
										"<center style='position:absolute;top:15%;left:8%'>拔矢啖睛</center>"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:3%;background-color:rgba(80,80,80,1);width:65%;height:67%;'>"+
										"<p align='center' style='font-size:80%'>在新斗地主模式中使用夏侯惇发动刚烈造成伤害、弃牌各三次</p>"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:72%;background-color:rgba(80,80,80,1);width:65%;height:25%;' >"+
										"<p align='center' style='font-size:80%'>"+ButStr(lib.config.But_xiahoudun)+"</p>"+
									"</div>"+
								"</div>"+
								"<div style='position:absolute;top:"+110*4+"px;width:100%;height:100px;'>"+
									"<div style='position:absolute;left:1%;top:3%;background-color:rgba(80,80,80,1);width:32%;height:67%;'>"+
										"<img src='"+ImageSrc(lib.config.But_zhangliao,"w_zhangliao")+"' width=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;left:1%;top:72%;background-color:rgba(80,80,80,1);width:32%;height:25%;' >"+
										"<center style='position:absolute;top:15%;left:8%'>袭敌不备</center>"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:3%;background-color:rgba(80,80,80,1);width:65%;height:67%;'>"+
										"<p align='center' style='font-size:80%'>在新斗地主模式中使用张辽发动突袭获得至少10张牌</p>"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:72%;background-color:rgba(80,80,80,1);width:65%;height:25%;' >"+
										"<p align='center' style='font-size:80%'>"+ButStr(lib.config.But_zhangliao)+"</p>"+
									"</div>"+
								"</div>"+
								"<div style='position:absolute;top:"+110*5+"px;width:100%;height:100px;'>"+
									"<div style='position:absolute;left:1%;top:3%;background-color:rgba(80,80,80,1);width:32%;height:67%;'>"+
										"<img src='"+ImageSrc(lib.config.But_xuchu,"w_xuchu")+"' width=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;left:1%;top:72%;background-color:rgba(80,80,80,1);width:32%;height:25%;' >"+
										"<center style='position:absolute;top:15%;left:8%'>勇力绝人</center>"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:3%;background-color:rgba(80,80,80,1);width:65%;height:67%;'>"+
										"<p align='center' style='font-size:80%'>在新斗地主模式中使用许褚在裸衣状态下使用[杀]和[决斗]造成伤害各3次</p>"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:72%;background-color:rgba(80,80,80,1);width:65%;height:25%;' >"+
										"<p align='center' style='font-size:80%'>"+ButStr(lib.config.But_xuchu)+"</p>"+
									"</div>"+
								"</div>"+
								"<div style='position:absolute;top:"+110*6+"px;width:100%;height:100px;'>"+
									"<div style='position:absolute;left:1%;top:3%;background-color:rgba(80,80,80,1);width:32%;height:67%;'>"+
										"<img src='"+ImageSrc(lib.config.But_zhenji,"w_zhenji")+"' width=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;left:1%;top:72%;background-color:rgba(80,80,80,1);width:32%;height:25%;' >"+
										"<center style='position:absolute;top:15%;left:15%'>洛神赋</center>"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:3%;background-color:rgba(80,80,80,1);width:65%;height:67%;'>"+
										"<p align='center' style='font-size:80%'>在新斗地主模式中使用甄姬发动洛神连续判定黑色至少8次"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:72%;background-color:rgba(80,80,80,1);width:65%;height:25%;' >"+
										"<p align='center' style='font-size:80%'>"+ButStr(lib.config.But_zhenji)+"</p>"+
									"</div>"+
								"</div>"+
								"<div style='position:absolute;top:"+110*7+"px;width:100%;height:100px;'>"+
									"<div style='position:absolute;left:1%;top:3%;background-color:rgba(80,80,80,1);width:32%;height:67%;'>"+
										"<img src='"+ImageSrc(lib.config.But_lidian,"w_lidian")+"' width=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;left:1%;top:72%;background-color:rgba(80,80,80,1);width:32%;height:25%;' >"+
										"<center style='position:absolute;top:15%;left:8%'>深明大义</center>"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:3%;background-color:rgba(80,80,80,1);width:65%;height:67%;'>"+
										"<p align='center' style='font-size:80%'>在新斗地主模式中使用李典发动忘隙摸牌累计5张"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:72%;background-color:rgba(80,80,80,1);width:65%;height:25%;' >"+
										"<p align='center' style='font-size:80%'>"+ButStr(lib.config.But_lidian)+"</p>"+
									"</div>"+
								"</div>"+
								"<div style='position:absolute;top:"+110*8+"px;width:100%;height:100px;'>"+
									"<div style='position:absolute;left:1%;top:3%;background-color:rgba(80,80,80,1);width:32%;height:67%;'>"+
										"<img src='"+ImageSrc(lib.config.But_caoang,"w_caoang")+"' width=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;left:1%;top:72%;background-color:rgba(80,80,80,1);width:32%;height:25%;' >"+
										"<center style='position:absolute;top:15%;left:8%'>取义成仁</center>"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:3%;background-color:rgba(80,80,80,1);width:65%;height:67%;'>"+
										"<p align='center' style='font-size:80%'>在新斗地主模式中使用曹昂发动慷慨交给其他角色装备牌累计3张"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:72%;background-color:rgba(80,80,80,1);width:65%;height:25%;' >"+
										"<p align='center' style='font-size:80%'>"+ButStr(lib.config.But_caoang)+"</p>"+
									"</div>"+
								"</div>"+
								"<div style='position:absolute;top:"+110*9+"px;width:100%;height:100px;'>"+
									"<div style='position:absolute;left:1%;top:3%;background-color:rgba(80,80,80,1);width:32%;height:67%;'>"+
										"<img src='"+ImageSrc(lib.config.But_liubei,"w_liubei")+"' width=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;left:1%;top:72%;background-color:rgba(80,80,80,1);width:32%;height:25%;' >"+
										"<center style='position:absolute;top:15%;left:8%'>仁者之风</center>"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:3%;background-color:rgba(80,80,80,1);width:65%;height:67%;'>"+
										"<p align='center' style='font-size:80%'>在新斗地主模式中使用刘备发动仁德使用三张不同的牌"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:72%;background-color:rgba(80,80,80,1);width:65%;height:25%;' >"+
										"<p align='center' style='font-size:80%'>"+ButStr(lib.config.But_liubei)+"</p>"+
									"</div>"+
								"</div>"+
								"<div style='position:absolute;top:"+110*10+"px;width:100%;height:100px;'>"+
									"<div style='position:absolute;left:1%;top:3%;background-color:rgba(80,80,80,1);width:32%;height:67%;'>"+
										"<img src='"+ImageSrc(lib.config.But_guanyu,"w_guanyu")+"' width=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;left:1%;top:72%;background-color:rgba(80,80,80,1);width:32%;height:25%;' >"+
										"<center style='position:absolute;top:15%;left:8%'>忠义果敢</center>"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:3%;background-color:rgba(80,80,80,1);width:65%;height:67%;'>"+
										"<p align='center' style='font-size:80%'>在新斗地主模式中使用关羽发动义绝4次并获胜"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:72%;background-color:rgba(80,80,80,1);width:65%;height:25%;' >"+
										"<p align='center' style='font-size:80%'>"+ButStr(lib.config.But_guanyu)+"</p>"+
									"</div>"+
								"</div>"+
								"<div style='position:absolute;top:"+110*11+"px;width:100%;height:100px;'>"+
									"<div style='position:absolute;left:1%;top:3%;background-color:rgba(80,80,80,1);width:32%;height:67%;'>"+
										"<img src='"+ImageSrc(lib.config.But_zhangfei,"w_zhangfei")+"' width=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;left:1%;top:72%;background-color:rgba(80,80,80,1);width:32%;height:25%;' >"+
										"<center style='position:absolute;top:15%;left:8%'>当阳怒吼</center>"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:3%;background-color:rgba(80,80,80,1);width:65%;height:67%;'>"+
										"<p align='center' style='font-size:80%'>在新斗地主模式中使用张飞发动替身回复至少三点体力并获胜"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:72%;background-color:rgba(80,80,80,1);width:65%;height:25%;' >"+
										"<p align='center' style='font-size:80%'>"+ButStr(lib.config.But_zhangfei)+"</p>"+
									"</div>"+
								"</div>"+
								"<div style='position:absolute;top:"+110*12+"px;width:100%;height:100px;'>"+
									"<div style='position:absolute;left:1%;top:3%;background-color:rgba(80,80,80,1);width:32%;height:67%;'>"+
										"<img src='"+ImageSrc(lib.config.But_zhaoyun,"w_zhaoyun")+"' width=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;left:1%;top:72%;background-color:rgba(80,80,80,1);width:32%;height:25%;' >"+
										"<center style='position:absolute;top:15%;left:8%'>七进七出</center>"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:3%;background-color:rgba(80,80,80,1);width:65%;height:67%;'>"+
										"<p align='center' style='font-size:80%'>在新斗地主模式中使用赵云发动龙胆转化[杀]和[闪]各七次"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:72%;background-color:rgba(80,80,80,1);width:65%;height:25%;' >"+
										"<p align='center' style='font-size:80%'>"+ButStr(lib.config.But_zhaoyun)+"</p>"+
									"</div>"+
								"</div>"+
								"<div style='position:absolute;top:"+110*13+"px;width:100%;height:100px;'>"+
									"<div style='position:absolute;left:1%;top:3%;background-color:rgba(80,80,80,1);width:32%;height:67%;'>"+
										"<img src='"+ImageSrc(lib.config.But_machao,"w_machao")+"' width=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;left:1%;top:72%;background-color:rgba(80,80,80,1);width:32%;height:25%;' >"+
										"<center style='position:absolute;top:15%;left:8%'>西凉铁骑</center>"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:3%;background-color:rgba(80,80,80,1);width:65%;height:67%;'>"+
										"<p align='center' style='font-size:80%'>在新斗地主模式中使用马超对魏势力角色发动铁骑至少4次并获胜"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:72%;background-color:rgba(80,80,80,1);width:65%;height:25%;' >"+
										"<p align='center' style='font-size:80%'>"+ButStr(lib.config.But_machao)+"</p>"+
									"</div>"+
								"</div>"+
								"<div style='position:absolute;top:"+110*14+"px;width:100%;height:100px;'>"+
									"<div style='position:absolute;left:1%;top:3%;background-color:rgba(80,80,80,1);width:32%;height:67%;'>"+
										"<img src='"+ImageSrc(lib.config.But_zhugeliang,"w_zhugeliang")+"' width=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;left:1%;top:72%;background-color:rgba(80,80,80,1);width:32%;height:25%;' >"+
										"<center style='position:absolute;top:15%;left:8%'>天火燎原</center>"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:3%;background-color:rgba(80,80,80,1);width:65%;height:67%;'>"+
										"<p align='center' style='font-size:80%'>在新斗地主模式中使用诸葛亮发动火计累计造成10点伤害"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:72%;background-color:rgba(80,80,80,1);width:65%;height:25%;' >"+
										"<p align='center' style='font-size:80%'>"+ButStr(lib.config.But_zhugeliang)+"</p>"+
									"</div>"+
								"</div>"+
								"<div style='position:absolute;top:"+110*15+"px;width:100%;height:100px;'>"+
									"<div style='position:absolute;left:1%;top:3%;background-color:rgba(80,80,80,1);width:32%;height:67%;'>"+
										"<img src='"+ImageSrc(lib.config.But_huangyueying,"w_huangyueying")+"' width=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;left:1%;top:72%;background-color:rgba(80,80,80,1);width:32%;height:25%;' >"+
										"<center style='position:absolute;top:15%;left:8%'>慧心巧思</center>"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:3%;background-color:rgba(80,80,80,1);width:65%;height:67%;'>"+
										"<p align='center' style='font-size:80%'>在新斗地主模式中使用黄月英发动集智累计摸到10张锦囊牌"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:72%;background-color:rgba(80,80,80,1);width:65%;height:25%;' >"+
										"<p align='center' style='font-size:80%'>"+ButStr(lib.config.But_huangyueying)+"</p>"+
									"</div>"+
								"</div>"+
								"<div style='position:absolute;top:"+110*16+"px;width:100%;height:100px;'>"+
									"<div style='position:absolute;left:1%;top:3%;background-color:rgba(80,80,80,1);width:32%;height:67%;'>"+
										"<img src='"+ImageSrc(lib.config.But_xushu,"w_xushu")+"' width=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;left:1%;top:72%;background-color:rgba(80,80,80,1);width:32%;height:25%;' >"+
										"<center style='position:absolute;top:15%;left:8%'>折节学问</center>"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:3%;background-color:rgba(80,80,80,1);width:65%;height:67%;'>"+
										"<p align='center' style='font-size:80%'>在新斗地主模式中使用徐庶发动荐言让自己获得牌累计3张"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:72%;background-color:rgba(80,80,80,1);width:65%;height:25%;' >"+
										"<p align='center' style='font-size:80%'>"+ButStr(lib.config.But_xushu)+"</p>"+
									"</div>"+
								"</div>"+
								"<div style='position:absolute;top:"+110*17+"px;width:100%;height:100px;'>"+
									"<div style='position:absolute;left:1%;top:3%;background-color:rgba(80,80,80,1);width:32%;height:67%;'>"+
										"<img src='"+ImageSrc(lib.config.But_wangping,"w_lifeng")+"' width=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;left:1%;top:72%;background-color:rgba(80,80,80,1);width:32%;height:25%;' >"+
										"<center style='position:absolute;top:15%;left:8%'>无当飞将</center>"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:3%;background-color:rgba(80,80,80,1);width:65%;height:67%;'>"+
										"<p align='center' style='font-size:80%'>在新斗地主模式中使用王平发动飞将摸至少4张牌"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:72%;background-color:rgba(80,80,80,1);width:65%;height:25%;' >"+
										"<p align='center' style='font-size:80%'>"+ButStr(lib.config.But_wangping)+"</p>"+
									"</div>"+
								"</div>"+
								"<div style='position:absolute;top:"+110*18+"px;width:100%;height:100px;'>"+
									"<div style='position:absolute;left:1%;top:3%;background-color:rgba(80,80,80,1);width:32%;height:67%;'>"+
										"<img src='"+ImageSrc(lib.config.But_sunquan,"w_sunquan")+"' width=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;left:1%;top:72%;background-color:rgba(80,80,80,1);width:32%;height:25%;' >"+
										"<center style='position:absolute;top:15%;left:8%'>吴王光耀</center>"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:3%;background-color:rgba(80,80,80,1);width:65%;height:67%;'>"+
										"<p align='center' style='font-size:80%'>在新斗地主模式中使用孙权发动制衡至少5次并获胜"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:72%;background-color:rgba(80,80,80,1);width:65%;height:25%;' >"+
										"<p align='center' style='font-size:80%'>"+ButStr(lib.config.But_sunquan)+"</p>"+
									"</div>"+
								"</div>"+
								"<div style='position:absolute;top:"+110*19+"px;width:100%;height:100px;'>"+
									"<div style='position:absolute;left:1%;top:3%;background-color:rgba(80,80,80,1);width:32%;height:67%;'>"+
										"<img src='"+ImageSrc(lib.config.But_zhouyu,"w_zhouyu")+"' width=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;left:1%;top:72%;background-color:rgba(80,80,80,1);width:32%;height:25%;' >"+
										"<center style='position:absolute;top:15%;left:8%'>雄姿英发</center>"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:3%;background-color:rgba(80,80,80,1);width:65%;height:67%;'>"+
										"<p align='center' style='font-size:80%'>在新斗地主模式中使用周瑜发动反间造成累计6点体力流失"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:72%;background-color:rgba(80,80,80,1);width:65%;height:25%;' >"+
										"<p align='center' style='font-size:80%'>"+ButStr(lib.config.But_zhouyu)+"</p>"+
									"</div>"+
								"</div>"+
								"<div style='position:absolute;top:"+110*20+"px;width:100%;height:100px;'>"+
									"<div style='position:absolute;left:1%;top:3%;background-color:rgba(80,80,80,1);width:32%;height:67%;'>"+
										"<img src='"+ImageSrc(lib.config.But_ganning,"w_ganning")+"' width=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;left:1%;top:72%;background-color:rgba(80,80,80,1);width:32%;height:25%;' >"+
										"<center style='position:absolute;top:15%;left:8%'>锦帆游侠</center>"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:3%;background-color:rgba(80,80,80,1);width:65%;height:67%;'>"+
										"<p align='center' style='font-size:80%'>在新斗地主模式中使用甘宁在一回合内发动奇袭至少6次"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:72%;background-color:rgba(80,80,80,1);width:65%;height:25%;' >"+
										"<p align='center' style='font-size:80%'>"+ButStr(lib.config.But_ganning)+"</p>"+
									"</div>"+
								"</div>"+
								"<div style='position:absolute;top:"+110*21+"px;width:100%;height:100px;'>"+
									"<div style='position:absolute;left:1%;top:3%;background-color:rgba(80,80,80,1);width:32%;height:67%;'>"+
										"<img src='"+ImageSrc(lib.config.But_lvmeng,"w_lvmeng")+"' width=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;left:1%;top:72%;background-color:rgba(80,80,80,1);width:32%;height:25%;' >"+
										"<center style='position:absolute;top:15%;left:8%'>白衣渡江</center>"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:3%;background-color:rgba(80,80,80,1);width:65%;height:67%;'>"+
										"<p align='center' style='font-size:80%'>在新斗地主模式中使用吕蒙发动博图至少三次并获胜"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:72%;background-color:rgba(80,80,80,1);width:65%;height:25%;' >"+
										"<p align='center' style='font-size:80%'>"+ButStr(lib.config.But_lvmeng)+"</p>"+
									"</div>"+
								"</div>"+
								"<div style='position:absolute;top:"+110*22+"px;width:100%;height:100px;'>"+
									"<div style='position:absolute;left:1%;top:3%;background-color:rgba(80,80,80,1);width:32%;height:67%;'>"+
										"<img src='"+ImageSrc(lib.config.But_huanggai,"w_huanggai")+"' width=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;left:1%;top:72%;background-color:rgba(80,80,80,1);width:32%;height:25%;' >"+
										"<center style='position:absolute;top:15%;left:8%'>赴汤蹈火</center>"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:3%;background-color:rgba(80,80,80,1);width:65%;height:67%;'>"+
										"<p align='center' style='font-size:80%'>在新斗地主模式中使用黄盖发动苦肉至少三次并获胜"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:72%;background-color:rgba(80,80,80,1);width:65%;height:25%;' >"+
										"<p align='center' style='font-size:80%'>"+ButStr(lib.config.But_huanggai)+"</p>"+
									"</div>"+
								"</div>"+
								"<div style='position:absolute;top:"+110*23+"px;width:100%;height:100px;'>"+
									"<div style='position:absolute;left:1%;top:3%;background-color:rgba(80,80,80,1);width:32%;height:67%;'>"+
										"<img src='"+ImageSrc(lib.config.But_luxun,"w_luxun")+"' width=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;left:1%;top:72%;background-color:rgba(80,80,80,1);width:32%;height:25%;' >"+
										"<center style='position:absolute;top:15%;left:8%'>儒生雄才</center>"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:3%;background-color:rgba(80,80,80,1);width:65%;height:67%;'>"+
										"<p align='center' style='font-size:80%'>在新斗地主模式中使用陆逊在一回合内发动至少10次连营"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:72%;background-color:rgba(80,80,80,1);width:65%;height:25%;' >"+
										"<p align='center' style='font-size:80%'>"+ButStr(lib.config.But_luxun)+"</p>"+
									"</div>"+
								"</div>"+
								"<div style='position:absolute;top:"+110*24+"px;width:100%;height:100px;'>"+
									"<div style='position:absolute;left:1%;top:3%;background-color:rgba(80,80,80,1);width:32%;height:67%;'>"+
										"<img src='"+ImageSrc(lib.config.But_daqiao,"w_daqiao")+"' width=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;left:1%;top:72%;background-color:rgba(80,80,80,1);width:32%;height:25%;' >"+
										"<center style='position:absolute;top:15%;left:8%'>国色芳华</center>"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:3%;background-color:rgba(80,80,80,1);width:65%;height:67%;'>"+
										"<p align='center' style='font-size:80%'>在新斗地主模式中使用大乔发动国色使用、弃置乐不思蜀各一次"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:72%;background-color:rgba(80,80,80,1);width:65%;height:25%;' >"+
										"<p align='center' style='font-size:80%'>"+ButStr(lib.config.But_daqiao)+"</p>"+
									"</div>"+
								"</div>"+
								"<div style='position:absolute;top:"+110*25+"px;width:100%;height:100px;'>"+
									"<div style='position:absolute;left:1%;top:3%;background-color:rgba(80,80,80,1);width:32%;height:67%;'>"+
										"<img src='"+ImageSrc(lib.config.But_sunshangxiang,"w_sunshangxiang")+"' width=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;left:1%;top:72%;background-color:rgba(80,80,80,1);width:32%;height:25%;' >"+
										"<center style='position:absolute;top:15%;left:8%'>乱世巾帼</center>"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:3%;background-color:rgba(80,80,80,1);width:65%;height:67%;'>"+
										"<p align='center' style='font-size:80%'>在新斗地主模式中使用孙尚香发动枭姬至少5次并获胜"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:72%;background-color:rgba(80,80,80,1);width:65%;height:25%;' >"+
										"<p align='center' style='font-size:80%'>"+ButStr(lib.config.But_sunshangxiang)+"</p>"+
									"</div>"+
								"</div>"+
								"<div style='position:absolute;top:"+110*26+"px;width:100%;height:100px;'>"+
									"<div style='position:absolute;left:1%;top:3%;background-color:rgba(80,80,80,1);width:32%;height:67%;'>"+
										"<img src='"+ImageSrc(lib.config.But_lingcao,"w_lingcao")+"' width=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;left:1%;top:72%;background-color:rgba(80,80,80,1);width:32%;height:25%;' >"+
										"<center style='position:absolute;top:15%;left:8%'>破贼校尉</center>"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:3%;background-color:rgba(80,80,80,1);width:65%;height:67%;'>"+
										"<p align='center' style='font-size:80%'>在新斗地主模式中使用凌操发动独进至少5次并获胜"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:72%;background-color:rgba(80,80,80,1);width:65%;height:25%;' >"+
										"<p align='center' style='font-size:80%'>"+ButStr(lib.config.But_lingcao)+"</p>"+
									"</div>"+
								"</div>"+
								"<div style='position:absolute;top:"+110*27+"px;width:100%;height:100px;'>"+
									"<div style='position:absolute;left:1%;top:3%;background-color:rgba(80,80,80,1);width:32%;height:67%;'>"+
										"<img src='"+ImageSrc(lib.config.But_lvbu,"w_lvbu")+"' width=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;left:1%;top:72%;background-color:rgba(80,80,80,1);width:32%;height:25%;' >"+
										"<center style='position:absolute;top:15%;left:8%'>不败战神</center>"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:3%;background-color:rgba(80,80,80,1);width:65%;height:67%;'>"+
										"<p align='center' style='font-size:80%'>在新斗地主模式中使用吕布在觉醒状态下完成双杀"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:72%;background-color:rgba(80,80,80,1);width:65%;height:25%;' >"+
										"<p align='center' style='font-size:80%'>"+ButStr(lib.config.But_lvbu)+"</p>"+
									"</div>"+
								"</div>"+
								"<div style='position:absolute;top:"+110*28+"px;width:100%;height:100px;'>"+
									"<div style='position:absolute;left:1%;top:3%;background-color:rgba(80,80,80,1);width:32%;height:67%;'>"+
										"<img src='"+ImageSrc(lib.config.But_diaochan,"w_diaochan")+"' width=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;left:1%;top:72%;background-color:rgba(80,80,80,1);width:32%;height:25%;' >"+
										"<center style='position:absolute;top:15%;left:8%'>闭月羞花</center>"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:3%;background-color:rgba(80,80,80,1);width:65%;height:67%;'>"+
										"<p align='center' style='font-size:80%'>在新斗地主模式中使用貂蝉发动离间至少3次并获胜"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:72%;background-color:rgba(80,80,80,1);width:65%;height:25%;' >"+
										"<p align='center' style='font-size:80%'>"+ButStr(lib.config.But_diaochan)+"</p>"+
									"</div>"+
								"</div>"+
								"<div style='position:absolute;top:"+110*29+"px;width:100%;height:100px;'>"+
									"<div style='position:absolute;left:1%;top:3%;background-color:rgba(80,80,80,1);width:32%;height:67%;'>"+
										"<img src='"+ImageSrc(lib.config.But_huatuo,"w_huatuo")+"' width=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;left:1%;top:72%;background-color:rgba(80,80,80,1);width:32%;height:25%;' >"+
										"<center style='position:absolute;top:15%;left:8%'>药到病除</center>"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:3%;background-color:rgba(80,80,80,1);width:65%;height:67%;'>"+
										"<p align='center' style='font-size:80%'>在新斗地主模式中使用华佗发动普济至少3次并获胜"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:72%;background-color:rgba(80,80,80,1);width:65%;height:25%;' >"+
										"<p align='center' style='font-size:80%'>"+ButStr(lib.config.But_huatuo)+"</p>"+
									"</div>"+
								"</div>"+
								"<div style='position:absolute;top:"+110*30+"px;width:100%;height:100px;'>"+
									"<div style='position:absolute;left:1%;top:3%;background-color:rgba(80,80,80,1);width:32%;height:67%;'>"+
										"<img src='"+ImageSrc(lib.config.But_yuanshu,"w_yuanshu")+"' width=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;left:1%;top:72%;background-color:rgba(80,80,80,1);width:32%;height:25%;' >"+
										"<center style='position:absolute;top:15%;left:8%'>四世三公</center>"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:3%;background-color:rgba(80,80,80,1);width:65%;height:67%;'>"+
										"<p align='center' style='font-size:80%'>在新斗地主模式中使用袁术发动庸肆摸四张牌累计三回合"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:72%;background-color:rgba(80,80,80,1);width:65%;height:25%;' >"+
										"<p align='center' style='font-size:80%'>"+ButStr(lib.config.But_yuanshu)+"</p>"+
									"</div>"+
								"</div>"+
								"<div style='position:absolute;top:"+110*31+"px;width:100%;height:100px;'>"+
									"<div style='position:absolute;left:1%;top:3%;background-color:rgba(80,80,80,1);width:32%;height:67%;'>"+
										"<img src='"+ImageSrc(lib.config.But_huaxiong,"w_huaxiong")+"' width=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;left:1%;top:72%;background-color:rgba(80,80,80,1);width:32%;height:25%;' >"+
										"<center style='position:absolute;top:15%;left:8%'>飞扬跋扈</center>"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:3%;background-color:rgba(80,80,80,1);width:65%;height:67%;'>"+
										"<p align='center' style='font-size:80%'>在新斗地主模式中使用华雄作为地主获得胜利"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:72%;background-color:rgba(80,80,80,1);width:65%;height:25%;' >"+
										"<p align='center' style='font-size:80%'>"+ButStr(lib.config.But_huaxiong)+"</p>"+
									"</div>"+
								"</div>"+
								"<div style='position:absolute;top:"+110*32+"px;width:100%;height:100px;'>"+
									"<div style='position:absolute;left:1%;top:3%;background-color:rgba(80,80,80,1);width:32%;height:67%;'>"+
										"<img src='"+ImageSrc(lib.config.But_gongsunzan,"w_gongsunzan")+"' width=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;left:1%;top:72%;background-color:rgba(80,80,80,1);width:32%;height:25%;' >"+
										"<center style='position:absolute;top:15%;left:8%'>白马将军</center>"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:3%;background-color:rgba(80,80,80,1);width:65%;height:67%;'>"+
										"<p align='center' style='font-size:80%'>在新斗地主模式中使用公孙瓒发动骁酋弃置装备牌累计5张"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:72%;background-color:rgba(80,80,80,1);width:65%;height:25%;' >"+
										"<p align='center' style='font-size:80%'>"+ButStr(lib.config.But_gongsunzan)+"</p>"+
									"</div>"+
								"</div>"+
								"<div style='position:absolute;top:"+110*33+"px;width:100%;height:100px;'>"+
									"<div style='position:absolute;left:1%;top:3%;background-color:rgba(80,80,80,1);width:32%;height:67%;'>"+
										"<img src='"+ImageSrc(lib.config.But_jushou,"w_jushou")+"' width=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;left:1%;top:72%;background-color:rgba(80,80,80,1);width:32%;height:25%;' >"+
										"<center style='position:absolute;top:15%;left:8%'>监军谋国</center>"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:3%;background-color:rgba(80,80,80,1);width:65%;height:67%;'>"+
										"<p align='center' style='font-size:80%'>在新斗地主模式中使用沮授在一回合内发动渐营摸牌至少5张"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:72%;background-color:rgba(80,80,80,1);width:65%;height:25%;' >"+
										"<p align='center' style='font-size:80%'>"+ButStr(lib.config.But_jushou)+"</p>"+
									"</div>"+
								"</div>"+
								"<div style='position:absolute;top:"+110*34+"px;width:100%;height:100px;'>"+
									"<div style='position:absolute;left:1%;top:3%;background-color:rgba(80,80,80,1);width:32%;height:67%;'>"+
										"<img src='"+ImageSrc(lib.config.But_niufu,"w_niufu")+"' width=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;left:1%;top:72%;background-color:rgba(80,80,80,1);width:32%;height:25%;' >"+
										"<center style='position:absolute;top:15%;left:8%'>汉中郎将</center>"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:3%;background-color:rgba(80,80,80,1);width:65%;height:67%;'>"+
										"<p align='center' style='font-size:80%'>在新斗地主模式中使用牛辅对队友发动困守至少3次并获胜"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:72%;background-color:rgba(80,80,80,1);width:65%;height:25%;' >"+
										"<p align='center' style='font-size:80%'>"+ButStr(lib.config.niufu)+"</p>"+
									"</div>"+
								"</div>"+
								"<div style='position:absolute;top:"+110*35+"px;width:100%;height:100px;'>"+
									"<div style='position:absolute;left:1%;top:3%;background-color:rgba(80,80,80,1);width:32%;height:67%;'>"+
										"<img src='"+ImageSrc(lib.config.But_liuxie,"w_liuxie")+"' width=100% ondragstart='return false;'/>"+
									"</div>"+
									"<div style='position:absolute;left:1%;top:72%;background-color:rgba(80,80,80,1);width:32%;height:25%;' >"+
										"<center style='position:absolute;top:15%;left:8%'>真命天子</center>"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:3%;background-color:rgba(80,80,80,1);width:65%;height:67%;'>"+
										"<p align='center' style='font-size:80%'>在新斗地主模式中使用刘协发动天命、密诏各4次并获胜"+
									"</div>"+
									"<div style='position:absolute;left:34%;top:72%;background-color:rgba(80,80,80,1);width:65%;height:25%;' >"+
										"<p align='center' style='font-size:80%'>"+ButStr(lib.config.But_liuxie)+"</p>"+
									"</div>"+
								"</div>"
							);
							return uiintro;
						},250,350);
					})
				}
				if(lib.config.w_newWar091==undefined){
					game.saveConfig("w_newWar091",20170815);
					var Props = lib.config.w_Props;
					for(var i in lib.brawl.newWar.character.character){
						var name = i+"_dianjiang";
						Props[name] = {
							name:lib.brawl.newWar.character.translate[i]+"点将卡(1次)",
							intro:"使用此道具使下一局游戏(斗地主模式)增加一个指定武将的选将框",
							count:0,
							use:true,
							dianjiang:i,
						}
						var name = i+"_skin";
						Props[name] = {
							name:lib.brawl.newWar.character.translate[i]+"(头像)",
							intro:"使用此道具将获得"+lib.brawl.newWar.character.translate[i]+"(头像)一个,若已拥有则自动兑换3000金票",
							count:0,
							use:true,
							skin:i,
						}
					}
					Props.w_daqiao_dianjiang.count+=5;
					Props.w_wangyi_dianjiang.count+=5;
					Props.w_zhangchunhua_dianjiang.count+=5;
					Props.w_caoang_dianjiang.count+=5;
					Props.w_lingtong_dianjiang.count+=5;
					game.saveConfig("w_Props",Props);
				}
				if(lib.config.w_noname==undefined){
					var noname = {
						count:0,
						TPs:false,
						LPs:false,
						TP:{
							st:{},
							nd:{},
							rd:{},
						},
						LP:{
							st:{},
							nd:{},
							rd:{},
						},
						time:{
							min:10,
							sec:0,
						},
						buyed:{
							
						}
					};
					game.saveConfig("w_noname",noname);
					game.w_nonameReset();
				}
				if(lib.config.w_newWar0931==undefined){
					game.saveConfig("w_newWar0931",20170818);
					var shops = {};
					var prise = {
						"w_caocao":8000,
						"w_guojia":5000,
						"w_simayi":5000,
						"w_zhangliao":10000,
						"w_xiahoudun":8000,
						"w_xuchu":5000,
						"w_lidian":5000,
						"w_zhenji":10000,
						"w_caoang":12000,
						"w_liubei":8000,
						"w_guanyu":15000,
						"w_zhangfei":8000,
						"w_zhaoyun":8000,
						"w_machao":15000,
						"w_zhugeliang":50000,
						"w_huangyueying":10000,
						"w_xushu":8000,
						"w_lifeng":12000,
						"w_sunquan":30000,
						"w_zhouyu":15000,
						"w_ganning":8000,
						"w_lvmeng":5000,
						"w_daqiao":8000,
						"w_sunshangxiang":8000,
						"w_lingcao":10000,
						"w_luxun":10000,
						"w_huanggai":15000,
						"w_lvbu":15000,
						"w_diaochan":12000,
						"w_huatuo":12000,
						"w_yuanshu":20000,
						"w_huaxiong":5000,
						"w_jushou":20000,
						"w_niufu":8000,
						"w_gongsunzan":5000,
						"w_liuxie":10000,
						"w_wangyi":12000,
						"w_zhangchunhua":12000,
						"w_lingtong":12000,
						"w_sunce":15000,
						"w_yuji":30000,
						"w_zuoci":99800,
						"w_liufeng":20000,
					};
					var character = lib.brawl.newWar.character.character;
					var translate = lib.brawl.newWar.character.translate;
					for(var i in character){
						var name = i+"_yjDianJiang";
						var buy = true;
						shops[name] = {
							name:translate[i]+"(永久点将卡)",
							type:["character"],
							intro:"此道具使用后不扣除,效果等同于普通点将卡",
							buy:buy,
							character:i,
							prise:prise[i],
						}
						name = i+"_skin";
						var buy = true;
						shops[name] = {
							name:translate[i]+"(头像)",
							type:["skin"],
							intro:"使用后获得〔"+translate[i]+"(头像)"+"﹞的使用权",
							buy:buy,
							character:i,
							prise:prise[i]/2,
						}
						name = i+"_dianjiang";
						shops[name] = {
							name:translate[i]+"(点将卡)",
							type:["dianjiang"],
							intro:"使用后进入游戏会获得一个额外的"+translate[i]+"选将框",
							buy:true,
							character:i,
							prise:prise[i]/100,
							nofilter:true,
						}
					}
					game.saveConfig("w_Shops",shops);
					var Props = lib.config.w_Props;
					for(var i in character){
						var name = i+"_yjDianJiang";
						var count = 0;
						if(lib.config.w_Props[name]&&lib.config.w_Props[name].count!=undefined){
							count = lib.config.w_Props[name].count;
						}
						Props[name] = {
							name:translate[i]+"(永久点将卡)",
							type:["character"],
							intro:"此道具使用后不扣除,效果等同于普通点将卡",
							count:count,
							use:true,
							dianjiang:i,
							unDisProps:true,
						}
						var name = i+"_dianjiang";
						var count = 0;
						if(lib.config.w_Props[name]&&lib.config.w_Props[name].count!=undefined){
							count = lib.config.w_Props[name].count;
						}
						Props[name] = {
							name:translate[i]+"(点将卡)",
							type:["dianjiang"],
							intro:"使用后进入游戏会获得一个额外的"+translate[i]+"选将框",
							count:count,
							use:true,
							dianjiang:i,
						}
						var name = i+"_skin";
						var count = 0;
						if(lib.config.w_Props[name]&&lib.config.w_Props[name].count!=undefined){
							count = lib.config.w_Props[name].count;
						}
						Props[name] = {
							name:translate[i]+"(头像卡片)",
							type:["skin"],
							intro:"使用后获得"+translate[i]+"的头像使用权,若已拥有则自动兑换3000金票",
							count:count,
							use:true,
							skin:i,
						}
					}
					Props["w_yuji_dianjiang"].count = 5;
					Props["w_zuoci_dianjiang"].count = 5;
					game.saveConfig("w_Props",Props);
					var header = {};
					for(var i in lib.brawl.newWar.character.character){
						header[i] = false;
						if(lib.config.w_header2[i])header[i]=true;
					}
					game.saveConfig("w_header2",header);
				}
				if(lib.config.w_newWar093==undefined){
					game.saveConfig("w_newWar093",20170818);
					var character = lib.brawl.newWar.character.character;
					var list = [];
					for(var i in character){
						list.push(i);
					}
					game.w_signInRewardReset();
				}
			},
			precontent:function(){
				game.w_signInRewardReset = function(){
					var SignIn = {};
					var list = [];
					game.print(1);
					for(var i in lib.config.w_Props){
						if(!lib.config.w_Props[i].skin)continue
						list.push(lib.config.w_Props[i].skin);
					}
					game.print(1);
					if(lib.config.w_SignIn){
						SignIn = lib.config.w_SignIn;
					}
					SignIn.first={
						reward:{
							"w_goldTicket":200,
						},
						button:"0",
						next:"second",
					};
					SignIn.first.reward[list.randomRemove()+"_dianjiang"] = 3;
					SignIn.second={
						reward:{
							"w_goldTicket":300,
						},
						button:"0",
						next:"third",
					};
					SignIn.second.reward[list.randomRemove()+"_dianjiang"] = 3;
					SignIn.third={
						reward:{
							"w_goldTicket":400,
						},
						button:"0",
						next:"forth",
					};
					SignIn.third.reward[list.randomRemove()+"_dianjiang"] = 3;
					SignIn.forth={
						reward:{
							"w_goldTicket":500,
							"w_ExpCard_100":1,
						},
						button:"0",
						next:"fifth",
					};
					SignIn.forth.reward[list.randomRemove()+"_dianjiang"] = 3;
					SignIn.fifth={
						reward:{
							"w_goldTicket":600,
							"w_ExpCard_100":2,
						},
						button:"0",
						next:"sixth",
					};
					SignIn.fifth.reward[list.randomRemove()+"_dianjiang"] = 3;
					SignIn.sixth={
						reward:{
							"w_goldTicket":800,
							"w_ExpCard_100":3,
						},
						button:"0",
						next:"seventh",
					};
					SignIn.sixth.reward[list.randomRemove()+"_dianjiang"] = 3;
					SignIn.seventh={
						reward:{
							"w_goldTicket":1000,
							"w_ExpCard_100":4,
						},
						button:"0",
					};
					SignIn.seventh.reward[list.randomRemove()+"_dianjiang"] = 3;
					SignIn.seventh.reward[list.randomRemove()+"_skin"] = 1;
					SignIn.now = "first";
					game.saveConfig("w_SignIn",SignIn);
				};
				if(lib.config.w_level==undefined){
					game.saveConfig('w_level',1);
					game.saveConfig('w_Exp',0);
					game.saveConfig('w_win',0);
					game.saveConfig('w_fare',0);
					game.saveConfig('w_zhu_win',0);
					game.saveConfig('w_fan_win',0);
					game.saveConfig('w_zhu_fare',0);
					game.saveConfig('w_fan_fare',0);
				}
				lib.config.But;
				if(lib.config.But==undefined){
					game.saveConfig('But',36);
					game.saveConfig('bUT',0);
					game.saveConfig('But_caocao',false);
					game.saveConfig('But_guojia',false);
					game.saveConfig('But_simayi',false);
					game.saveConfig('But_xiahoudun',false);
					game.saveConfig('But_zhangliao',false);
					game.saveConfig('But_xuchu',false);
					game.saveConfig('But_zhenji',false);
					game.saveConfig('But_lidian',false);
					game.saveConfig('But_caoang',false);
					game.saveConfig('But_liubei',false);
					game.saveConfig('But_guanyu',false);
					game.saveConfig('But_zhangfei',false);
					game.saveConfig('But_zhaoyun',false);
					game.saveConfig('But_machao',false);
					game.saveConfig('But_zhugeliang',false);
					game.saveConfig('But_huangyueying',false);
					game.saveConfig('But_xushu',false);
					game.saveConfig('But_wangping',false);
					game.saveConfig('But_sunquan',false);
					game.saveConfig('But_zhouyu',false);
					game.saveConfig('But_ganning',false);
					game.saveConfig('But_lvmeng',false);
					game.saveConfig('But_huanggai',false);
					game.saveConfig('But_luxun',false);
					game.saveConfig('But_daqiao',false);
					game.saveConfig('But_sunshangxiang',false);
					game.saveConfig('But_lingcao',false);
					game.saveConfig('But_lvbu',false);
					game.saveConfig('But_diaochan',false);
					game.saveConfig('But_huatuo',false);
					game.saveConfig('But_yuanshu',false);
					game.saveConfig('But_huaxiong',false);
					game.saveConfig('But_gongsunzan',false);
					game.saveConfig('But_jushou',false);
					game.saveConfig('But_niufu',false);
					game.saveConfig('But_liuxie',false);
				};
				game.warn=function(str){
					var dialog=ui.create.dialog('hidden');
					dialog.classList.add('static');
					dialog.add('<div class="text" style="word-break:break-all;display:inline">'+str+'</div>');
					dialog.classList.add('popped');
					ui.window.appendChild(dialog);
					var width=dialog.content.firstChild.firstChild.offsetWidth;
					if(width<190){
						dialog._mod_height=-16;
					}
					else{
						dialog.content.firstChild.style.textAlign='left';
					}
					dialog.style.width=(width+16)+'px';
					lib.placePoppedDialog(dialog,{
						clientX:(this.offsetLeft+this.offsetWidth/2)*game.documentZoom,
						clientY:(this.offsetTop+this.offsetHeight/4)*game.documentZoom
					});

					if(dialog._mod_height){
						dialog.content.firstChild.style.padding=0;
					}
					dialog.style.left='calc(45%)';
					dialog.style.top='calc(30%)';
					setTimeout(function(){
						dialog.delete();
					},1500);
				};
				game.changeExp=function(num){
					if(typeof num=='number'){
						game.saveConfig('w_Exp',lib.config.w_Exp+num);
					}
					if(num>0){
						game.warn("经验增加"+num);
					}
					for(;lib.config.w_Exp>=(lib.config.w_level*12.04);){
						game.saveConfig("w_Exp",lib.config.w_Exp-(lib.config.w_level*12.04));
						game.saveConfig("w_level",lib.config.w_level+1);
						game.warn("等级提升至："+lib.config.w_level);
					}
					if(document.getElementById("LV")!=null){
						var s1 = (lib.config.w_level*12.04)==0? 0:Math.min(lib.config.w_Exp*100/(lib.config.w_level*12.04),99);
						document.getElementById("LV").innerHTML = "LV."+lib.config.w_level;
						document.getElementById("Exp").innerHTML = "（"+Math.round(s1)+"%）";
						document.getElementById("sp1").innerHTML = lib.config.w_Exp.toFixed(2)+"/"+(lib.config.w_level*12.04).toFixed(2);
					}
				};
				game.gainBut=function(config,str){
					if(lib.config[config]){
						return "("+lib.config.bUT+"/"+lib.config.But+")";
					}
					game.saveConfig(config,true);
					game.saveConfig("bUT",lib.config.bUT+1);
					ui.But.innerHTML="战功 <span>"+lib.config.bUT+"/"+lib.config.But+"</span>";
					if(str){
						game.warn("获得战功：<span class='greentext'>【"+str+"】</span>");
					}
					return "("+lib.config.bUT+"/"+lib.config.But+")";
				};
				if(lib.config.w_lastTime_date==undefined){
					var date = new Date();
					game.saveConfig("w_lastTime_date",date.getDate());
					game.saveConfig("w_lastTime_hour",date.getHours());
				}
				if(lib.config.task_active==undefined){
					game.saveConfig("task_active",0);
				}
				if(lib.config.task_index==undefined){
					game.saveConfig("task_index",{
						finished:false,
						reward:{
							exp:15,
							active:5,
							goldTicket:200,
						},
					});
				}
				if(lib.config.task_win1==undefined){
					game.saveConfig("task_win1",{
						finished:false,
						reward:{
							exp:15,
							active:10,
						}
					});
				}
				if(lib.config.task_win2==undefined){
					game.saveConfig("task_win2",{
						finished:false,
						reward:{
							exp:15,
							active:10,
						}
					});
				}
				if(lib.config.task_win3==undefined){
					game.saveConfig("task_win3",{
						finished:false,
						reward:{
							exp:15,
							active:25,
						}
					});
				}
				if(lib.config.task_win4==undefined){
					game.saveConfig("task_win4",{
						finished:false,
						reward:{
							exp:15,
							active:25,
							goldTicket:1000,
						}
					});
				}
				if(lib.config.task_kill==undefined){
					game.saveConfig("task_kill",{
						finished:false,
						reward:{
							exp:15,
							active:30,
						}
					});
				}
				if(lib.config.task_doublewin==undefined){
					game.saveConfig("task_doublewin",{
						finished:false,
						reward:{
							exp:15,
							active:25,
						}
					});
				}
				if(lib.config.task_win_count==undefined){
					game.saveConfig("task_win_count",0);
					game.saveConfig("task_kill_count",0);
					game.saveConfig("task_doublewin_count",0);
				}
				var nowTime = new Date();
				var nowTime_date = nowTime.getDate();
				var nowTime_day = nowTime.getDay();
				var nowTime_hour = nowTime.getHours();
				if(nowTime_date!=lib.config.w_lastTime_date||lib.config.w_lastTime_hour<4){
					if(nowTime_hour>=4||nowTime_date-lib.config.w_lastTime_date>1){
						game.saveConfig("task_index",{
							finished:false,
							reward:{
								exp:15,
								active:5,
								goldTicket:200,
							},
						});
						game.saveConfig("task_win1",{
							finished:false,
							reward:{
								exp:15,
								active:10,
							}
						});
						game.saveConfig("task_win2",{
							finished:false,
							reward:{
								exp:15,
								active:10,
							}
						});
						game.saveConfig("task_win3",{
							finished:false,
							reward:{
								exp:15,
								active:25,
							}
						});
						game.saveConfig("task_win4",{
							finished:false,
							reward:{
								exp:15,
								active:25,
								goldTicket:1000,
							}
						});
						game.saveConfig("task_kill",{
							finished:false,
							reward:{
								exp:15,
								active:30,
							}
						});
						game.saveConfig("task_doublewin",{
							finished:false,
							reward:{
								exp:15,
								active:25,
							}
						});
						game.saveConfig("task_win_count",0);
						game.saveConfig("task_kill_count",0);
						game.saveConfig("task_doublewin_count",0);
						if(nowTime_day==1||nowTime_date-lib.config.w_lastTime_date>7){
							game.saveConfig("task_active",0);
						}
					}
				}
				if(nowTime_date!=lib.config.w_lastTime_date){
					if(nowTime_day==1||nowTime_date-lib.config.w_lastTime_date>7){
						game.w_signInRewardReset();
					}
					else {
						lib.config.w_SignIn.now = lib.config.w_SignIn[lib.config.w_SignIn.now].next;
						game.saveConfig("w_SignIn",lib.config.w_SignIn);
					}
				}
				game.saveConfig("w_lastTime_date",nowTime_date);
				game.saveConfig("w_lastTime_hour",nowTime_hour);
				game.changeActive = function(num){
					game.warn("活跃度+"+num);
					game.saveConfig("task_active",lib.config.task_active+num);
				}
				game.finishedTask = function(config,name){
					if(lib.config[config].finished)return;
					lib.config[config].finished = true;
					game.saveConfig(config,lib.config[config]);
					setTimeout(function(){
						game.changeActive(lib.config[config].reward.active);
						setTimeout(function(){
							game.changeExp(lib.config[config].reward.exp);
							setTimeout(function(){
								game.warn("完成任务<span class='yellowtext'>【"+name+"】</span>");
								setTimeout(function(){
									game.changeGoldTicket(lib.config[config].reward.goldTicket);
								},1000);
							},1000);
						},1000);
					},1500);
				}
				if(lib.config.w_backgroundImage==undefined){
					game.saveConfig("w_backgroundImage","extension/新斗地主/background_0.jpg");
				}
				if(lib.config.w_header==undefined){
					game.saveConfig("w_header","w_liubei.jpg");
					game.saveConfig("w_header2",{
						"w_caocao":true,
						"w_guojia":false,
						"w_simayi":false,
						"w_zhangliao":false,
						"w_xiahoudun":false,
						"w_xuchu":false,
						"w_lidian":false,
						"w_zhenji":false,
						"w_caoang":false,
						"w_liubei":true,
						"w_guanyu":false,
						"w_zhangfei":false,
						"w_zhaoyun":false,
						"w_machao":false,
						"w_zhugeliang":false,
						"w_huangyueying":false,
						"w_xushu":false,
						"w_lifeng":false,
						"w_sunquan":true,
						"w_zhouyu":false,
						"w_ganning":false,
						"w_lvmeng":false,
						"w_daqiao":false,
						"w_sunshangxiang":false,
						"w_lingcao":false,
						"w_luxun":false,
						"w_huanggai":false,
						"w_lvbu":false,
						"w_diaochan":false,
						"w_huatuo":false,
						"w_yuanshu":false,
						"w_huaxiong":false,
						"w_jushou":false,
						"w_niufu":false,
						"w_gongsunzan":false,
						"w_liuxie":false,
						"w_wangyi":false,
						"w_zhangchunhua":false,
					});
				}
				game.changeHeader=function(config){
					config = config + ".jpg";
					if(config==lib.config.w_header){
						game.warn("此图片已经是当前头像");
						return;
					}
					game.saveConfig("w_header",config);
					game.warn("已设置此图片为当前头像");
					document.getElementById("img30").src = lib.assetURL+"extension/新斗地主/"+lib.config.w_header;
					document.getElementById("div40").style.display = "none";
				}
				if(lib.config.w_goldTicket==undefined){
					game.saveConfig("w_goldTicket",5000);
				}
				game.changeGoldTicket=function(num,arg){
					if(typeof num!='number')return;
					game.saveConfig("w_goldTicket",lib.config.w_goldTicket+num);
					if(document.getElementById("sp3")!=null){
						document.getElementById("sp3").innerHTML = lib.config.w_goldTicket;
					}
					if(arg==undefined||arg){
						if(num>0){
							setTimeout(function(){
								game.warn("金票增加了"+num);
							},1000);
						}
						else if(num<0){
							setTimeout(function(){
								game.warn("金票减少了"+(-num));
							},1000);
						}
					}
				}
				game.w_lookCharacter=function(IMG){
					var img = document.getElementById("div32_1_img");
					var div = document.getElementById("div32_1_div");
					img.src = lib.assetURL+"extension/新斗地主/"+IMG+".jpg";
					var skills = lib.brawl.newWar.character.character[IMG][3];
					var intro = "";
					for(var i=0;i<skills.length;i++){
						var name = lib.brawl.newWar.character.translate[skills[i]]||lib.translate[skills[i]];
						var info = skills[i]+"_info";
						info = lib.brawl.newWar.character.translate[info]||lib.translate[info];
						intro += "<p align=left>["+name+"]<br />"+info+"</p>";
					}
					div.innerHTML = intro;
					document.getElementById("div32_1").style.display="";
				}
				game.w_LCswicth=function(group){
					var id = "div_"+group;
					if(document.getElementById(id).style.display==""){return;}
					document.getElementById("div_wei").style.display="none";
					document.getElementById("div_shu").style.display="none";
					document.getElementById("div_wu").style.display="none";
					document.getElementById("div_qun").style.display="none";
					document.getElementById(id).style.display="";
				};
				if(lib.config.w_Props==undefined){
					var Props = {
						w_goldTicket:{
							name:"金票",
							intro:"斗地主模式下的虚拟货币",
							count:lib.config.w_goldTicket||0,
						},
						w_ExpCard_100:{
							name:"经验卡(+100)",
							intro:"增加100点等级经验",
							count:1,
							use:true,
						},
					};
					game.saveConfig("w_Props",Props);
				}
				game.w_useProps=function(config){
					document.getElementById("div33_1").style.display="none";
					document.getElementById("div33").style.display="none";
					if(!lib.config.w_Props[config].unDisProps){
						lib.config.w_Props[config].count--;
						game.saveConfig("w_Props",lib.config.w_Props);
					}
					switch(config){
						case "w_ExpCard_100":
							game.warn("使用了一张[经验卡(+100)]");
							game.changeExp(100);
							break;
						default:
							if(lib.config.w_Props[config].dianjiang){
								game.warn("使用了道具["+lib.config.w_Props[config].name+"]");
								lib.brawl.newWar.dianjiang = lib.config.w_Props[config].dianjiang;
							}
							if(lib.config.w_Props[config].skin){
								game.warn("使用了道具["+lib.config.w_Props[config].name+"]");
								if(lib.config.w_header2[lib.config.w_Props[config].skin]){
									game.changeGoldTicket(3000);
								}
								else {
									lib.config.w_header2[lib.config.w_Props[config].skin]=true;
									game.saveConfig("w_header2",lib.config.w_header2);
									game.warn("获得["+lib.config.w_Props[config].name+"]×1");
								}
							}
							break;
					}
				};
				game.w_buyProps=function(config){
					document.getElementById("div34_1").style.display="none";
					document.getElementById("div34").style.display="none";
					game.changeGoldTicket(-lib.config.w_Shops[config].prise);
					lib.config.w_Props[config].count++;
					game.saveConfig("w_Props",lib.config.w_Props);
					if(!lib.config.w_Shops[config].nofilter){
						lib.config.w_Shops[config].buy = false;
						game.saveConfig("w_Shops",lib.config.w_Shops);
					}
					game.warn("获得道具["+lib.config.w_Props[config].name+"]×1");
				};
				game.w_div33_1_display=function(config){
					var div = document.getElementById("div33_1");
					var obj = lib.config.w_Props[config];
					var title = obj.name||"";
					var info = obj.intro||"";
					var click;
					if(obj.use){
						title="是否使用"+title+"？";
						click = "onclick=game.w_useProps('"+config+"')"
					}
					div.innerHTML="<div style='position:absolute;width:58%;height:25%;left:1%;top:5%;background-color:rgba(140,165,82,0.5);font-size:80%;overflow:auto;'>"+title+"</div>"+
					"<div style='position:absolute;width:58%;height:60%;left:1%;top:35%;background-color:rgba(140,165,82,0.5);overflow:auto;'>"+info+"</div>"+
					"<div id='div33_1_ok' style='position:absolute;width:30%;height:28%;left:65%;top:31%;background-color:#acc572;border:1px solid #8ca552;line-height:150%;cursor:pointer;display:none;' "+click+">确定</div>"+
					"<div id='div33_1_cencel' style='position:absolute;width:30%;height:28%;left:65%;top:66%;background-color:#acc572;border:1px solid #8ca552;line-height:150%;cursor:pointer;' onclick=(document.getElementById('div33_1').style.display='none') >返回</div>";
					if(obj.use){
						document.getElementById("div33_1_ok").style.display="";
					}
					div.style.display = "";
				};
				game.w_div34_1_display=function(config){
					var div = document.getElementById("div34_1");
					var obj = lib.config.w_Shops[config];
					var title = obj.name||"";
					var info = obj.intro||"";
					var click;
					if(obj.buy&&lib.config.w_goldTicket>=obj.prise){
						title="是否购买"+title+"？";
						click = "onclick=game.w_buyProps('"+config+"')"
					}
					div.innerHTML="<div style='position:absolute;width:58%;height:25%;left:1%;top:5%;background-color:rgba(140,165,82,0.5);font-size:80%;overflow:auto;'>"+title+"</div>"+
					"<div style='position:absolute;width:58%;height:60%;left:1%;top:35%;background-color:rgba(140,165,82,0.5);overflow:auto;'>"+info+"</div>"+
					"<div id='div34_1_ok' style='position:absolute;width:30%;height:28%;left:65%;top:31%;background-color:#acc572;border:1px solid #8ca552;line-height:150%;cursor:pointer;display:none;' "+click+">购买</div>"+
					"<div id='div34_1_cencel' style='position:absolute;width:30%;height:28%;left:65%;top:66%;background-color:#acc572;border:1px solid #8ca552;line-height:150%;cursor:pointer;' onclick=(document.getElementById('div34_1').style.display='none') >返回</div>";
					if(obj.buy&&lib.config.w_goldTicket>=obj.prise){
						document.getElementById("div34_1_ok").style.display="";
					}
					div.style.display = "";
				};
				game.w_SignInReplay = function(){
					game.print(1);
					var SignIn = lib.config.w_SignIn;
					SignIn[SignIn.now].button = "1";
					var reward = SignIn[SignIn.now].reward;
					for(var i in reward){
						if(i=="w_goldTicket"){
							game.changeGoldTicket(reward[i])
						}
						else {
							lib.config.w_Props[i].count += reward[i];
							setTimeout(function(){
								game.warn("获得道具〔"+lib.config.w_Props[i].name+"〕*"+reward[i]);
							},1000);
						}
					}
					game.saveConfig("w_Props",lib.config.w_Props);
					var nowTime = new Date();
					if(SignIn.today==undefined){
						SignIn.todate = nowTime.getDate();
						SignIn.today = nowTime.getDay();
						SignIn.lianxu = 1;
					}
					else {
						var todate = nowTime.getDate();
						var today = nowTime.getDay();
						var temp = false;
						if(todate==1&&(SignIn.todate==31||SignIn.todate==30||SignIn.todate==29||SignIn.todate==28)){
							if((today==0&&SignIn.today==6)||(today-1==SignIn.today)){
								temp = true;
							}
						}
						else if(todate-1==SignIn.todate){
							temp = true;
						}
						SignIn.todate = todate;
						SignIn.today = today;
						if(temp){
							SignIn.lianxu++;
						}
						else {
							SignIn.lianxu=1;
						}
					}
					game.saveConfig("w_SignIn",SignIn);
					document.getElementById("div26").onclick();
				};
				game.w_nonameReset=function(){
					var list = [
						"sha","shan","jiu","tao",
						"wuxie","taoyuan","wugu","wanjian",
						"nanman","tiesuo","jiedao","huogong",
						"juedou","shunshou","guohe","wuzhong",
						"lebu","bingliang","shandian","muniu"
					];
					var noname = {};
					if(lib.config.w_noname!=undefined){
						noname = lib.config.w_noname;
						game.print(noname);
					}
					if(noname.canBuy==undefined){
						noname.canBuy = {
							basic:{
								name:'基本牌',
								prise:200,
								beilv:1.8,
							},
							delay:{
								name:'延时锦囊',
								prise:200,
								beilv:2,
							},
							trick:{
								name:'锦囊牌',
								prise:200,
								beilv:1.2,
							},
							equip:{
								name:'装备牌',
								prise:200,
								beilv:5,
							},
						}
						for(var i=0;i<list.length;i++){
							noname.canBuy[list[i]]={
								name:get.translation(list[i]),
								prise:200,
								beilv:5,
							};
						}
					}
					for(var i in noname.canBuy){
						noname.buyed[i] = {
							name:noname.canBuy[i].name,
							prise:noname.canBuy[i].prise*noname.canBuy[i].beilv,
							count:0,
						}
					}
					list.randomSort();
					if(noname.TPs){
						noname.LP = {};
						for(var i in noname.TP){
							noname.LP[i] = {
								name:noname.TP[i].name,
								type:noname.TP[i].type,
							}
						}
						noname.LPs = true;
						noname.TPs = false;
					}
					for(var i in noname.TP){
						game.print(noname.LP)
						noname.TP[i].name = list.randomRemove();
						noname.TP[i].type = get.type(noname.TP[i].name);
					}
					noname.time = {
						min:5,
						sec:0,
					};
					game.saveConfig("w_noname",noname);
				};
				game.w_noname_buy_ask = function(name){
					var div = document.getElementById("div34_1");
					var obj = lib.config.w_noname.canBuy[name];
					var title = obj.name||"";
					var info = "单价："+obj.prise+"<br/>倍率："+obj.beilv;
					var click;
					if(!lib.config.w_noname.TPs&&lib.config.w_goldTicket>=obj.prise&&lib.config.w_noname.buyed[name].count<=5){
						title="是否购买"+title+"？";
						click = "onclick=game.w_noname_buy_replay('"+name+"')"
					}
					div.innerHTML="<div style='position:absolute;width:58%;height:25%;left:1%;top:5%;background-color:rgba(140,165,82,0.5);font-size:80%;overflow:auto;'>"+title+"</div>"+
					"<div style='position:absolute;width:58%;height:60%;left:1%;top:35%;background-color:rgba(140,165,82,0.5);overflow:auto;'>"+info+"</div>"+
					"<div id='div34_1_ok' style='position:absolute;width:30%;height:28%;left:65%;top:31%;background-color:#acc572;border:1px solid #8ca552;line-height:150%;cursor:pointer;display:none;' "+click+">购买</div>"+
					"<div id='div34_1_cencel' style='position:absolute;width:30%;height:28%;left:65%;top:66%;background-color:#acc572;border:1px solid #8ca552;line-height:150%;cursor:pointer;' onclick=(document.getElementById('div34_1').style.display='none') >返回</div>";
					if(!lib.config.w_noname.TPs&&lib.config.w_goldTicket>=obj.prise&&lib.config.w_noname.buyed[name].count<=5){
						document.getElementById("div34_1_ok").style.display="";
					}
					div.style.display = "";
				};
				game.w_noname_buy_replay = function(name){
					document.getElementById("div34_1").style.display="none";
					game.changeGoldTicket(-lib.config.w_noname.canBuy[name].prise);
					lib.config.w_noname.buyed[name].count++;
					setTimeout(function(){game.warn("购买了一张彩票〔"+lib.config.w_noname.buyed[name].name+"〕");},1500);
					document.getElementById("div27").onclick();
				};
			},
			config:{
				But:{
					name:'战功系统',
					init:true,
				},
				extra:{
					name:'替换神将',
					init:false,
					intro:"各势力替换一名神武将,牌堆中替换神武将专属武器",
				},
			},
			help:{
			},
			package:{
				character:{character:{},translate:{},},
				card:{card:{},translate:{},list:[],},
				skill:{skill:{},translate:{},},
			},
			files:{"character":[],"card":[],"skill":[]},
		}
	}
)
