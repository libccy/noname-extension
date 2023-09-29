game.import("extension", function (lib, game, ui, get, ai, _status) {
	return {
		name: "国战补充",
		content: function (config, pack) {
			//界面缩放（搬自扩展ol）
			var change = false;
			var change1 = false;
			setInterval(function () {
				if (get.mode() == 'brawl' || get.mode() == 'identity' || get.mode() == 'guozhan') {
					if (game.players != undefined && game.dead != undefined) {
						if (game.players.length + game.dead.length - game.countPlayer(function (current) { return current.国战补充_type == 'fellow' }) > 8 || game.shibing_move_interval != undefined) {
							if (change == false) {
								game.documentZoom = game.deviceZoom * 0.8;
								var width = document.documentElement.offsetWidth;
								var height = document.documentElement.offsetHeight;
								var zoom = game.documentZoom;
								document.body.style.width = (width / zoom) + 'px';
								document.body.style.height = (height / zoom) + 'px';
								document.body.style.transform = 'scale(' + zoom + ')';
								change = true;
								change1 = false;
							};
						} else {
							if (change1 == false) {
								game.documentZoom = game.deviceZoom * 1;
								if (ui.updatez != undefined) ui.updatez();
								change1 = true;
								change = false;
							};
						};
					};
				};
			}, 1000);


			//多人身份（搬自扩展ol）
			var style1 = document.createElement('style');
			style1.innerHTML = "[data-number='9']>.player[data-position='1']{top:calc(200% / 3 - 145px);left:calc(95% - 75px);}";
			style1.innerHTML += "[data-number='9']>.player[data-position='2']{top:calc(100% / 3 - 120px);left:calc(95% - 75px);}";
			style1.innerHTML += "[data-number='9']>.player[data-position='3']{top:30px;left:calc(80% - 75px);}";
			style1.innerHTML += "[data-number='9']>.player[data-position='4']{top:5px;left:calc(60% - 75px);}";
			style1.innerHTML += "[data-number='9']>.player[data-position='5']{top:5px;left:calc(40% - 75px);}";
			style1.innerHTML += "[data-number='9']>.player[data-position='6']{top:30px;left:calc(20% - 75px);}";
			style1.innerHTML += "[data-number='9']>.player[data-position='7']{top:calc(100% / 3 - 120px);left:calc(5% - 75px);}";
			style1.innerHTML += "[data-number='9']>.player[data-position='8']{top:calc(200% / 3 - 145px);left:calc(5% - 75px);}";

			style1.innerHTML += "[data-number='10']>.player[data-position='1']{top:calc(200% / 3 - 145px);left:calc(95% - 75px);}";
			style1.innerHTML += "[data-number='10']>.player[data-position='2']{top:calc(100% / 3 - 120px);left:calc(95% - 75px);}";
			style1.innerHTML += "[data-number='10']>.player[data-position='3']{top:30px;left:calc(80% - 75px);}";
			style1.innerHTML += "[data-number='10']>.player[data-position='4']{top:5px;left:calc(65% - 75px);}";
			style1.innerHTML += "[data-number='10']>.player[data-position='5']{top:0px;left:calc(50% - 75px);}";
			style1.innerHTML += "[data-number='10']>.player[data-position='6']{top:5px;left:calc(35% - 75px);}";
			style1.innerHTML += "[data-number='10']>.player[data-position='7']{top:30px;left:calc(20% - 75px);}";
			style1.innerHTML += "[data-number='10']>.player[data-position='8']{top:calc(100% / 3 - 120px);left:calc(5% - 75px);}";
			style1.innerHTML += "[data-number='10']>.player[data-position='9']{top:calc(200% / 3 - 145px);left:calc(5% - 75px);}";

			style1.innerHTML += "[data-number='11']>.player[data-position='1']{top:calc(200% / 3 - 100px);left:calc(95% - 75px);}";
			style1.innerHTML += "[data-number='11']>.player[data-position='2']{top:calc(100% / 3 - 50px);left:calc(95% - 75px);}";
			style1.innerHTML += "[data-number='11']>.player[data-position='3']{top:5px;left:calc(95% - 75px);}";
			style1.innerHTML += "[data-number='11']>.player[data-position='4']{top:0px;left:calc(77% - 75px);}";
			style1.innerHTML += "[data-number='11']>.player[data-position='5']{top:0px;left:calc(59% - 75px);}";
			style1.innerHTML += "[data-number='11']>.player[data-position='6']{top:0px;left:calc(41% - 75px);}";
			style1.innerHTML += "[data-number='11']>.player[data-position='7']{top:0px;left:calc(23% - 75px);}";
			style1.innerHTML += "[data-number='11']>.player[data-position='8']{top:5px;left:calc(5% - 75px);}";
			style1.innerHTML += "[data-number='11']>.player[data-position='9']{top:calc(100% / 3 - 50px);left:calc(5% - 75px);}";
			style1.innerHTML += "[data-number='11']>.player[data-position='10']{top:calc(200% / 3 - 100px);left:calc(5% - 75px);}";

			document.head.appendChild(style1);
			/*Window.alert = function(){
			  //创建一个大盒子
				var box = document.createElement("div");
			  //创建一个关闭按钮
				var button = document.createElement("button");
			  //定义一个对象保存样式
				var boxName = {
					width:"500px",
					height:"180px",
					backgroundColor:"#f8f8f8",
					border:"1px solid #ccc",
					position:"absolute",
					top:"50%",
					left:"50%",
					margin:"-90px 0 0 -250px",
					zIndex:"999",
					textAlign:"center",
					lineHeight:"180px"
				}
			  //给元素添加元素
				for(var k in boxName){
					box.style[k] = boxName[k];
				}
			  //把创建的元素添加到body中
				document.body.appendChild(box);
			  //把alert传入的内容添加到box中
				if(arguments[0]){
					box.innerHTML = arguments[0];
				}
				button.innerHTML = "关闭";
			   //定义按钮样式
				var btnName = {
					border:"1px solid #ccc",
					backgroundColor:"#fff",
					width:"70px",
					height:"30px",
					textAlign:"center",
					lineHeight:"30px",
					outline:"none",
					position:"absolute",
					bottom:"10px",
					right:"20px",
				}
				for(var j in btnName){
					button.style[j] = btnName[j];
				}
			  //把按钮添加到box中
				box.appendChild(button);
			  //给按钮添加单击事件
				button.addEventListener("click",function(){
					box.style.display = "none";
				})
			}*/
			lib.translate.unknown8 = '九号位';
			lib.translate.unknown9 = '十号位';
			lib.mode.identity.config.player_number.item = {
				'2': '两人',
				'3': '三人',
				'4': '四人',
				'5': '五人',
				'6': '六人',
				'7': '七人',
				'8': '八人',
				'9': '九人',
				'10': '十人',
			}
			lib.mode.guozhan.config.player_number.item = {
				'2': '两人',
				'3': '三人',
				'4': '四人',
				'5': '五人',
				'6': '六人',
				'7': '七人',
				'8': '八人',
				'9': '九人',
				'10': '十人',
			};
			var identity = ['zhu', 'zhong', 'zhong', 'zhong', 'nei', 'fan', 'fan', 'fan', 'fan'];
			if (lib.config['extension_国战补充_9r'] == '2') identity = ['zhu', 'zhong', 'zhong', 'nei', 'nei', 'fan', 'fan', 'fan', 'fan'];
			if (lib.config['extension_国战补充_9r'] == '3') identity = ['zhu', 'zhong', 'zhong', 'zhong', 'zhong', 'fan', 'fan', 'fan', 'fan'];
			if (lib.config['extension_国战补充_9r'] == '4') identity = ['zhu', 'zhong', 'zhong', 'zhong', 'fan', 'fan', 'fan', 'fan', 'fan'];
			if (lib.config.mode_config.identity.identity[7] == undefined && get.mode() != 'connect') lib.config.mode_config.identity.identity.push(identity);
			identity = ['zhu', 'zhong', 'zhong', 'zhong', 'nei', 'nei', 'fan', 'fan', 'fan', 'fan'];
			if (lib.config['extension_国战补充_10r'] == '2') identity = ['zhu', 'zhong', 'zhong', 'zhong', 'nei', 'fan', 'fan', 'fan', 'fan', 'fan'];
			if (lib.config['extension_国战补充_10r'] == '3') identity = ['zhu', 'zhong', 'zhong', 'zhong', 'zhong', 'fan', 'fan', 'fan', 'fan', 'fan'];
			if (lib.config.mode_config.identity.identity[8] == undefined && get.mode() != 'connect') lib.config.mode_config.identity.identity.push(identity);
			identity = ['zhu', 'zhong', 'zhong', 'zhong', 'zhong', 'nei', 'fan', 'fan', 'fan', 'fan', 'fan'];

			lib.extensionMenu.extension_国战补充['10r_title'] = {
				"name": "<b><p align=center><span style=\"font-size:18px\">-----十人身份-----</span></b>",
				"clear": true,
				"nopointer": true,
			};
			lib.extensionMenu.extension_国战补充['9r'] = { "name": '九人场身份', "init": '1', "item": { '1': '三忠四反一内', '2': '二忠四反二内', '3': '四忠四反零内', '4': '三忠五反零内' } };
			lib.extensionMenu.extension_国战补充['10r'] = { "name": '十人场身份', "init": '1', "item": { '1': '三忠四反二内', '2': '三忠五反一内', '3': '四忠五反零内' } };

			if (lib.characterPack.mode_guozhan) {
				//交换的主函数（搬自耀世三国②，已经过大佬同意，勿转）
				lib.element.player.swapJudge = function (target) {
					var next = game.createEvent('swapJudge');
					next.player = this;
					next.target = target;
					next.setContent('swapJudge');
					return next;
				};
				lib.element.content.swapJudge = function () {
					"step 0"
					game.log(player, '和', target, '交换了判定区中的牌')
					var j1 = player.getCards('j');
					if (target.storage._disableJudge) {
						if (j1) player.discard(j1);
					}
					var j2 = target.getCards('j');
					if (player.storage._disableJudge) {
						if (j2) target.discard(j2);
					}
					"step 1"
					event.cards = [player.getCards('j'), target.getCards('j')];
					player.lose(event.cards[0], ui.ordering, 'visible');
					target.lose(event.cards[1], ui.ordering, 'visible');
					if (event.cards[0].length) player.$give(event.cards[0], target);
					if (event.cards[1].length) target.$give(event.cards[1], player);
					"step 2"
					for (var i = 0; i < event.cards[1].length; i++) {
						if (event.cards[1][i].viewAs) player.addJudge({ name: event.cards[1][i].viewAs }, [event.cards[1][i]]);
						else player.addJudge(event.cards[1][i]);
					}
					for (var i = 0; i < event.cards[0].length; i++) {
						if (event.cards[0][i].viewAs) target.addJudge({ name: event.cards[0][i].viewAs }, [event.cards[0][i]]);
						else target.addJudge(event.cards[0][i]);
					}
				};

				//武将分类
				lib.translate.mougongp = '谋攻篇';
				lib.translate.junxingp = '军形篇';
				lib.translate.bingship = '兵势篇';
				lib.translate.xuship = '虚实篇';
				lib.translate.junzhengp = '军争篇';
				lib.translate.oldp = '怀旧篇';


				lib.characterSort.mode_guozhan.mougongp = ["gz_chenqun", "gz_zhonghui", "gz_sunqian", "gz_xin_xushu", "gz_guyong", "gz_zhugejin", "gz_chengong", "gz_xin_liru"]

				lib.characterSort.mode_guozhan.junxingp = ["gz_caoang", "gz_caozhen", "gz_liufeng", "gz_liaohua", "gz_heqi", "gz_panzhangmazhong", "gz_gaoshun", "gz_yanbaihu"]

				lib.characterSort.mode_guozhan.bingship = ["gz_caozhi", "gz_liyan", "gz_luji", "gz_fuhuanghou", "gz_liuxie", "gz_chenlin", "gz_wuyi", "gz_buzhi"]

				lib.characterSort.mode_guozhan.xuship = ["gz_wangyi", "gz_zhangchunhua", "gz_zhugeguo", "gz_sp_sunshangxiang", "gz_bulianshi", "gz_sunluban", "gz_caojie", "gz_huangjinleishi"]

				lib.characterSort.mode_guozhan.junzhengp = ["gz_guohuai", "gz_caoxiu", "gz_guanyinping", "gz_mayunlu", "gz_zhugeke", "gz_chengpu", "gz_wangyun", "gz_fuwan"]

				lib.characterSort.mode_guozhan.oldp = ["gz_ns_zuoci"]

				//武将
				lib.characterPack.mode_guozhan.gz_chengpu = ['male', 'wu', 4, ['gzlihuo', 'gzdangkou']]

				lib.characterPack.mode_guozhan.gz_mayunlu = ['female', 'shu', 4, ['mashu', 'gzfengpo']]

				lib.characterPack.mode_guozhan.gz_caoxiu = ['female', 'wei', 4, ['gzqianju', 'gzqingxi']]

				lib.characterPack.mode_guozhan.gz_wangyun = ['male', 'qun', 3, ['gzlianji', 'gzmoucheng']]

				lib.characterPack.mode_guozhan.gz_caozhi = ['male', 'wei', 3, ['gzzuifu', 'gzluoying']]

				lib.characterPack.mode_guozhan.gz_liyan = ['male', 'shu', 4, ['gzduliang', 'gzfulin']]

				lib.characterPack.mode_guozhan.gz_luji = ['male', 'wu', 3, ['gzhuaiju', 'gzzhenglun']]

				lib.characterPack.mode_guozhan.gz_fuhuanghou = ['female', 'qun', 3, ['gzzhuikong', 'gzqiuyuan']]

				lib.characterPack.mode_guozhan.gz_chenlin = ['male', 'wei', 3, ['gzbifa', 'gzsongci']]

				lib.characterPack.mode_guozhan.gz_wuyi = ['male', 'shu', 4, ['gzbenxi']]

				lib.characterPack.mode_guozhan.gz_liuxie = ['male', 'qun', 3, ['gztianming', 'gzshangao']]

				lib.characterPack.mode_guozhan.gz_buzhi = ['male', 'wu', 3, ['gzhongde', 'gzdingpan']]

				lib.characterPack.mode_guozhan.gz_heqi = ['male', 'wu', 4, ['gzyongzhan', 'gzshanxi']]

				lib.characterPack.mode_guozhan.gz_liaohua = ['male', 'shu', 4, ['dangxian', 'xinfuli']]

				lib.characterPack.mode_guozhan.gz_chenqun = ['male', 'wei', 3, ["dingpin", "oldfaen"]]

				lib.characterPack.mode_guozhan.gz_huangjinleishi = ['female', 'qun', 3, ['fulu', 'fuji']]

				lib.characterPack.mode_guozhan.gz_sunluban = ['female', 'wu', 3, ['chanhui', 'jiaojin']]

				lib.characterPack.mode_guozhan.gz_zhonghui = ['male', 'wei', 4, ['gzquanji', 'gzpaiyi', 'gzmouzuo']]

				lib.characterPack.mode_guozhan.gz_caoang = ['male', 'wei', 4, ['gzkaikang']]

				lib.characterPack.mode_guozhan.gz_caojie = ['female', 'qun', 3, ['gzshouxi', 'gzzhixi'], []]
				lib.characterPack.mode_guozhan.gz_guanyinping = ['female', 'shu', 4, ['gzxueji', 'gzhuxiao'], []]

				lib.characterPack.mode_guozhan.gz_xin_xushu = ['male', 'shu', 3, ['gzjiancai', 'gzwuyan'], []]

				lib.characterPack.mode_guozhan.gz_sunqian = ['male', 'shu', 3, ['qianya', 'shuimeng'], []]

				lib.characterPack.mode_guozhan.gz_panzhangmazhong = ['male', 'wu', 4, ['anjian', 'duodao'], []]

				lib.characterPack.mode_guozhan.gz_fuwan = ['male', 'qun', 4, ['gzmoukui'], []]

				lib.characterPack.mode_guozhan.gz_wangyi = ['female', 'wei', 3, ['oldzhenlie', 'oldmiji'], []]

				lib.characterPack.mode_guozhan.gz_chengong = ['male', 'qun', 3, ['mingce', 'gzzhichi']]

				lib.characterPack.mode_guozhan.gz_guohuai = ['male', 'wei', 4, ['jingce']]

				lib.characterPack.mode_guozhan.gz_sp_sunshangxiang = ['female', 'shu', 4, ['gzliangzhu', 'gzgongji']]

				lib.characterPack.mode_guozhan.gz_bulianshi = ['female', 'wu', 3, ['gzanxu', 'gzzhuiyi']]

				lib.characterPack.mode_guozhan.gz_caozhen = ['male', 'wei', 5, ['gzsidi']]

				lib.characterPack.mode_guozhan.gz_liufeng = ['male', 'shu', 4, ['xiansi']]

				lib.characterPack.mode_guozhan.gz_zhugeke = ['male', 'wu', 3, ['aocai', 'gzduwu']]
				lib.characterPack.mode_guozhan.gz_yanbaihu = ['male', 'qun', 4, ['zhidao', 'jili']]
				lib.characterPack.mode_guozhan.gz_zhangchunhua = ['female', 'wei', 3, ['jueqing', 'shangshi']]

				lib.characterPack.mode_guozhan.gz_zhugeguo = ['female', 'shu', 3, ['yuhua', 'gzqirang']]

				lib.characterPack.mode_guozhan.gz_guyong = ['male', 'wu', 3, ['shenxing', 'bingyi']]

				lib.characterPack.mode_guozhan.gz_zhugejin = ['male', 'wu', 3, ['gzhongyuan', 'gzhuanshi', 'gzmingzhe']]

				lib.characterPack.mode_guozhan.gz_gaoshun = ['male', 'qun', 4, ['xianzhen', 'gzjinjiu']]

				lib.characterPack.mode_guozhan.gz_xin_liru = ['male', 'qun', 3, ['xinjuece', 'gzfencheng', 'gzmieji']]

				lib.characterPack.mode_guozhan.gz_ns_zuoci = ['male', 'qun', 3, ['gzxinsheng', 'gzhuashen']]

				//珠联璧合
				lib.perfectPair.caoxiu = ['caohong']
				lib.perfectPair.chengpu = ['zhouyu']
				lib.perfectPair.mayunlu = ['zhaoyun']
				lib.perfectPair.wangyun = ['diaochan']
				lib.perfectPair.huangjinleishi = ['zhangjiao']
				lib.perfectPair.heqi = ['sunce']
				lib.perfectPair.ns_zuoci = ['yuji']
				lib.perfectPair.fazheng = ['huangzhong']
				lib.perfectPair.liyan = ['lifeng']
				lib.perfectPair.caozhi = ['zhenji']
				lib.perfectPair.caozhen = ['caopi']
				lib.perfectPair.fuhuanghou = ['fuwan']
				lib.perfectPair.liuxie = ['fuhuanghou', 'caojie']
				lib.perfectPair.guohuai = ['zhanghe']
				lib.perfectPair.zhugejin = ['zhugeke', 'buzhi']
				lib.perfectPair.lvbu = ['gaoshun', 'chengong', 'diaochan']
				lib.perfectPair.zhugeguo = ['zhugeliang', 'huangyueying']
				lib.perfectPair.xin_xushu = ['sp_zhugeliang']
				lib.perfectPair.xin_liru = ['sp_dongzhuo']
				lib.perfectPair.sp_sunshangxiang = ['liubei']
				lib.perfectPair.yanwen = ['re_yuanshao']
				lib.perfectPair.jiangwei = ['zhugeliang']
				lib.perfectPair.huangyueying = ['zhegeliang', 'sp_zhugeliang']
				lib.perfectPair.bulianshi = ['sunquan', 'sunluban']
				lib.perfectPair.sunluban = ['sunquan', 'bulianshi']
				lib.perfectPair.zhangchunhua = ['simayi']
				lib.perfectPair.chenqun = ['simayi']
				lib.perfectPair.caoang = ['caocao']
			}
		},
		precontent: function () {

		}, help: {}, config: {}, package: {
			character: {
				character: {
				},
				translate: {
				},
			},
			card: {
				card: {
				},
				translate: {
				},
				list: [],
			},
			skill: {
				skill: {
					"gzhongde": {
						audio: "hongde",
						trigger: { player: ['gainAfter', 'loseAfter'] },
						usable: 2,
						direct: true,
						filter: function (event, player) {
							if (event.name == 'lose' && event.type == 'gain' && event.getParent().player == player) return false;
							if (event.name == 'gain') return event.cards && event.cards.length > 1;
							return event.cards2 && event.cards2.length > 1;
						},
						content: function () {
							'step 0'
							player.chooseTarget(get.prompt('gzhongde'), '令一名其他角色摸一张牌', function (card, player, target) {
								return target != player;
							}).set('ai', function (target) {
								return get.attitude(player, target);
							});
							'step 1'
							if (result.bool) {
								player.logSkill('gzhongde', result.targets);
								result.targets[0].draw();
							}
						}
					},

					gzdingpan: {
						audio: "dingpan",
						enable: "phaseUse",
						usable: 1,
						filterTarget: function (card, player, target) {
							return player != target && target.countCards('e') > 0;
						},
						content: function () {
							'step 0'
							target.draw();
							player.chooseJunlingFor(target);
							'step 1'
							event.junling = result.junling;
							event.targets = result.targets;
							var choiceList = ['执行该军令'];
							if (target != player) choiceList.push('获得装备区所有牌');
							else choiceList.push('不执行该军令，令其获得你的一张装备牌');
							target.chooseJunlingControl(player, result.junling, result.targets).set('prompt', '定叛').set('choiceList', choiceList).set('ai', function () {
								if (get.attitude(target, player) >= 0) return get.junlingEffect(player, result.junling, target, result.targets, target) >= 0 ? 0 : 1;
								return get.junlingEffect(player, result.junling, target, result.targets, target) >= -1 ? 0 : 1;
							});
							'step 2'
							if (result.index == 0) {
								target.carryOutJunling(player, event.junling, targets);
								target.gain(target.getCards('e'), 'gain2');
							}
							else if (target != player) {
								player.gainPlayerCard(target, true, 'e');
							}

							else if (target = player) {
								player.gainPlayerCard(player, true, 'e');
							}
							else event.finish();
						},
						ai: {
							order: 3,
							result: {
								player: 1,
							},
						},
					},

					gzdangkou: {
						audio: "ext:国战补充:2",
						trigger: { player: 'phaseUseBegin' },
						direct: true,
						filter: function (event, player) {
							return game.countPlayer(function (current) {
								return !current.isLinked();
							});
						},
						content: function () {
							"step 0"
							var num = game.countPlayer(function (current) {
								return !current.isLinked();
							});
							player.chooseTarget(get.prompt('gzdangkou'), '横置至多2名未横置的角色', [1, 2], function (card, player, target) {
								return !target.isLinked();
							}).set('ai', function (target) {
								return -get.attitude(_status.event.player, target);
							});
							"step 1"
							if (result.bool) {
								player.logSkill('gzdangkou', result.targets);
								event.targets = result.targets;
								event.num = 0;
							}
							else {
								event.finish();
							}
							"step 2"
							if (event.num < event.targets.length) {
								event.targets[event.num].link();
								event.num++;
								event.redo();
							}
						},
						ai: {
							expose: 0.3
						}
					},
					gzlihuo: {
						trigger: { player: 'useCard1' },
						filter: function (event, player) {
							if (event.card.name == 'sha' && !event.card.nature) return true;
							return false;
						},
						audio: 'lihuo',
						check: function (event, player) {
							return false;
						},
						content: function () {
							trigger.card.nature = 'fire';
							var next = game.createEvent('gzlihuo_clear');
							next.player = player;
							next.card = trigger.card;
							event.next.remove(next);
							next.forceDie = true;
							trigger.after.push(next);
							next.setContent(function () {
								if (player.isAlive() && player.getHistory('sourceDamage', function (evt) {
									return evt.getParent(2) == event.parent;
								}).length > 0) player.loseHp();
								delete card.nature;
							});
						},
						group: 'gzlihuo2'
					},
					gzlihuo2: {
						trigger: { player: 'useCard2' },
						filter: function (event, player) {
							if (event.card.name != 'sha' || get.nature(event.card) != 'fire') return false;
							return game.hasPlayer(function (current) {
								return !event.targets.contains(current) && player.canUse(event.card, current);
							});
						},
						direct: true,
						content: function () {
							'step 0'
							player.chooseTarget(get.prompt('gzlihuo'), '为' + get.translation(trigger.card) + '增加一个目标', function (card, player, target) {
								return !_status.event.sourcex.contains(target) && player.canUse(_status.event.card, target);
							}).set('sourcex', trigger.targets).set('card', trigger.card).set('ai', function (target) {
								var player = _status.event.player;
								return get.effect(target, _status.event.card, player, player);
							});
							'step 1'
							if (result.bool) {
								if (!event.isMine() && !_status.connectMode) game.delayx();
								event.target = result.targets[0];
							}
							else {
								event.finish();
							}
							'step 2'
							player.logSkill('gzlihuo', event.target);
							trigger.targets.push(event.target);
						},
					},
					gzlihuo3: {
						trigger: { player: 'useCardAfter' },
						vanish: true,
						filter: function (event, player) {
							return event.card.name == 'sha';
						},
						forced: true,
						audio: false,
						content: function () {
							player.loseHp();
							player.removeSkill('gzlihuo3');
						}
					},

					gzqingxi: {
						audio: 'qingxi',
						trigger: { player: 'phaseEnd' },
						frequent: true,
						content: function () {
							'step 0'
							player.draw();
							'step 1'
							if (Array.isArray(result) && result.length) {
								var gained = result[0];
								if (lib.filter.cardEnabled(gained, target)) {
									var next = player.chooseToUse();
									next.filterCard = function (card) {
										return card == gained;
									};
									next.prompt = '是否使用' + get.translation(gained) + '？';
								}
								else {
									event.finish();
								}
							}
						},
						ai: {
							threaten: 1.6
						}
					},

					"gzqianju": {
						audio: "ext:国战补充:2",
						trigger: {
							player: 'dieBegin'
						},
						direct: true,
						content: function () {
							'step 0'
							player.chooseTarget(get.prompt('gzqianju'), 1, function (card, player, target) {
								return target != player;
							}, true).ai = function (target) {
								if (!target.hasSkill('mashu'))
									return get.attitude(player, target);
							};
							'step 1'
							if (result.bool) {
								player.line(result.targets[0]);
								result.targets[0].addSkill('mashu');
								game.log(result.targets[0], '获得技能【马术】');
							} else {
								event.finish();
							};
						},
					},
					"gzfengpo": {
						audio: "fengpo",
						trigger: {
							source: "damageBegin",
						},
						direct: true,
						filter: function (event, player) {
							return event.card && event.card.name == 'sha' && get.distance(player, event.player) <= 1;
						},
						content: function () {
							'step 0'
							player.chooseToDiscard(get.prompt('gzfengpo'), 1, 'h').ai = function (card) {
								if (get.attitude(player, trigger.player) < 0) return 1;
								return 0;
							};
							'step 1'
							if (result.bool) {
								var card = result.cards[0];
								if (get.type(card) == 'delay' || get.type(card) == 'trick') {
									var num = trigger.player.hp;
									if (num > 2) num = 2;
									trigger.player.chooseToDiscard(num, 'he', true);
								};
								if (get.type(card) == 'equip') {
									trigger.num++;
								};
								if (get.type(card) == 'basic') {
									player.draw();
								};
							};
						},
					},
					gzmoucheng: {
						skillAnimation: "epic",
						audio: "moucheng",
						unique: true,
						mark: true,
						init: function (player) {
							player.storage.gzmoucheng = false;
						},
						enable: "phaseUse",
						filter: function (event, player) {
							return !player.storage.gzmoucheng;
						},
						intro: {
							content: "limited",
						},
						filterTarget: true,
						content: function () {
							"step 0"
							player.unmarkSkill('gzmoucheng');
							player.storage.gzmoucheng = true;
							target.draw(3);
							event.players = [];
							for (var i = 0; i < game.players.length; i++) {
								if (game.players[i] != target && get.distance(game.players[i], target, 'attack') <= 1) {
									event.players.push(game.players[i]);
								}
							}
							lib.tempSortSeat = target;
							event.players.sort(lib.sort.seat);
							delete lib.tempSortSeat;
							"step 1"
							player.mayChangeVice();

							"step 2"
							if (event.players.length) {
								event.current = event.players.shift();
								event.current.animate('target');
								if (event.current.num('he') && target.isAlive()) {
									event.current.useCard({ name: 'sha' }, target);
								}
								else {
									event.tempbool = true;
								}
							}
							else {
								event.finish();
							}
							"step 3"
							event.goto(1);
						},
						ai: {
							order: 5,
							result: {
								target: function (player, target) {
									if (player.hp > 2) {
										if (game.phaseNumber < game.players.length * 2) return 0;
									}
									var num = 0, players = game.filterPlayer();
									for (var i = 0; i < game.players.length; i++) {
										if (game.players[i] != target && get.distance(game.players[i], target, 'attack') <= 1) {
											num--;
										}
									}
									return num;
								},
							},
						},
					},
					gzlianji: {
						audio: 'wylianji',
						trigger: { source: 'damageAfter' },
						filter: function (event, player) {
							return get.itemtype(event.cards) == 'cards' && get.position(event.cards[0]) == 'd';
						},
						usable: 1,
						prompt2: function (event) {
							return '进行一次判定，若结果为黑色，你获得' + get.translation(event.cards);
						},
						content: function () {
							'step 0'
							player.judge(function (card) {
								return get.color(card) == 'black' ? 1 : -1;
							});
							'step 1'
							if (result.color == 'black') {
								player.gain(trigger.cards);
								player.$gain2(trigger.cards);
							}
						},
					},
					gzmoukui: {
						trigger: { player: 'useCardToPlayered' },
						direct: true,
						filter: function (event, player) {
							return event.card.name == 'sha';
						},
						audio: 'moukui',
						content: function () {
							"step 0"
							var controls = ['draw_card'];
							if (trigger.target.countCards('he')) {
								controls.push('discard_card');
							}
							controls.push('cancel');
							player.chooseControl(controls).set('ai', function () {
								var trigger = _status.event.getTrigger();
								if (trigger.target.countCards('he') && get.attitude(_status.event.player, trigger.target) < 0) {
									return 'discard_card';
								}
								else {
									return 'draw_card';
								}
							}).set('prompt', get.prompt2('gzmoukui'));
							"step 1"
							if (result.control == 'draw_card') {
								player.draw();
								player.logSkill('gzmoukui');
							}
							else if (result.control == 'discard_card' && trigger.target.countCards('he')) {
								player.discardPlayerCard(trigger.target, 'he', true).logSkill = ['gzmoukui', trigger.target];
							}
							else event.finish();
							"step 2"
							player.addTempSkill('gzmoukui2', 'shaEnd');
						},
						ai: {
							expose: 0.1
						}
					},
					gzmoukui2: {
						audio: false,
						trigger: { player: 'shaMiss' },
						forced: true,
						filter: function (event, player) {
							return player.countCards('he') > 0;
						},
						content: function () {
							trigger.player.chooseToDiscard(true, 'he');
						}
					},
					gzhuxiao: {
						audio: 'huxiao',
						enable: 'phaseUse',
						viewAs: { name: 'sha', nature: 'fire' },
						usable: 1,
						position: 'he',
						viewAsFilter: function (player) {
							if (!player.countCards('he', { color: 'red' })) return false;
						},
						filterCard: { color: 'red' },
						check: function (card) {
							if (get.suit(card) == 'heart') return 7 - get.value(card);
							return 5 - get.value(card);
						},
						onuse: function (result) {
							if (result.targets) {
								for (var i = 0; i < result.targets.length; i++) {
									result.targets[i].addTempSkill('gzhuxiao3');
								}
							}
						},
						group: 'gzhuxiao2',
						ai: {
							order: function () {
								return get.order({ name: 'sha' }) + 0.15;
							},
						},
					},
					gzhuxiao2: {
						trigger: { source: 'damageEnd' },
						forced: true,
						popup: false,
						filter: function (event) {
							return event.parent.skill == 'gzhuxiao';
						},
						content: function () {
							player.addTempSkill('gzhuxiao4');
						}
					},
					gzhuxiao3: {
						mod: {
							cardRespondable: function (card, player) {
								if (_status.event.parent.skill == 'gzhuxiao' &&
									get.suit(card) != get.suit(_status.event.parent.cards[0])) return false;
							}
						}
					},
					gzhuxiao4: {
						mod: {
							cardUsable: function (card, player, num) {
								if (card.name == 'sha') return num + 1;
							}
						},
					},
					gzxueji: {
						audio: "xueji",
						mainSkill: true,
						init: function (player) {
							if (player.checkMainSkill('gzxueji')) {
								player.removeMaxHp();
							}
						},
						enable: 'phaseUse',
						usable: 1,
						filter: function (event, player) {
							return player.hp < player.maxHp && player.countCards('he', { color: 'red' }) > 0;
						},
						filterTarget: function (card, player, target) {
							return player != target && get.distance(player, target, 'attack') <= 1;
						},
						selectTarget: function () {
							return [1, _status.event.player.maxHp - _status.event.player.hp];
						},
						position: 'he',
						filterCard: function (card) {
							return get.color(card) == 'red';
						},
						check: function (card) {
							return 8 - get.useful(card);
						},
						content: function () {
							"step 0"
							target.damage();
							"step 1"
							target.draw();
						},
						ai: {
							order: 7,
							result: {
								target: function (player, target) {
									return get.damageEffect(target, player);
								}
							},
							threaten: function (player, target) {
								if (target.hp == 1) return 2;
								if (target.hp == 2) return 1.5;
								return 0.5;
							},
							maixie: true,
							effect: {
								target: function (card, player, target) {
									if (get.tag(card, 'damage')) {
										if (target.hp == target.maxHp && target.hasFriend()) return [0, 1];
									}
									if (get.tag(card, 'recover') && player.hp >= player.maxHp - 1) return [0, 0];
								}
							}
						}
					},

					"gzjinjiu": {
						audio: 'jinjiu',
						trigger: {
							global: 'dyingBegin'
						},
						forced: true,
						filter: function (event, player) {
							return _status.currentPhase == player && event.source == player;
						},
						content: function () {
							trigger.player.storage.gzjinjiu = player;
						},
					},
					"_gzjinjiu": {
						mod: {
							cardSavable: function (card, player) {
								if (game.countPlayer(function (current) { return current.storage.gzjinjiu != undefined }) > 0 && card.name != 'tao') return false;
							},
						},
						trigger: {
							player: 'useCardEnd'
						},
						forced: true,
						filter: function (event, player) {
							if (event.card.name != 'tao') return false;
							for (var i = 0; i < event.targets.length; i++) {
								if (event.targets[i].storage.gzjinjiu != undefined) return true;
							};
							return false;
						},
						content: function () {
							'step 0'
							player.chooseToDiscard(1, 'he', { color: 'red' });
							'step 1'
							if (!result.bool) {
								var pl;
								for (var i = 0; i < trigger.targets.length; i++) {
									if (trigger.targets[i].storage.gzjinjiu != undefined) pl = trigger.targets[i].storage.gzjinjiu;
								};
								player.damage().source = pl;
							};
							delete player.storage.gzjinjiu;
						},
					},
					"_gzjinjiu1": {
						trigger: {
							player: 'phaseEnd'
						},
						forced: true,
						filter: function (event, player) {
							return game.countPlayer(function (current) { return current.storage.gzjinjiu != undefined }) > 0;
						},
						content: function () {
							for (var i = 0; i < game.players.length; i++) {
								if (game.players[i].storage.gzjinjiu != undefined) delete game.players[i].storage.gzjinjiu;
							};
						},
					},
					"gzluoying": {
						audio: "luoying",
						trigger: {
							player: 'loseEnd'
						},
						filter: function (event, player) {
							for (var i = 0; i < event.cards.length; i++) {
								if (_status.currentPhase != player && (event.cards[i].original == 'e' || (get.suit(event.cards[i]) == 'club' && event.cards[i].original == 'h'))) return true;
							};
							return false;
						},
						content: function () {
							'step 0'
							player.judge(function (card) {
								if (get.suit(card) == 'club') return 4;
								return -1;
							});
							'step 1'
							if (get.suit(result.card) == 'club') {
								player.chooseTarget('请选择一名角色').ai = function (target) {
									return -get.attitude(player, target);
								};
							} else {
								event.finish();
							};
							'step 2'
							if (result.bool) {
								player.line(result.targets[0]);
								result.targets[0].damage('thunder');
							};
						},
					},

					"gzsidi": {
						audio: "sidi",
						mod: {
							ignoredHandcard: function (card, player) {
								if (get.type(card) == 'equip') {
									return true;
								}
							},
						},
						trigger: { player: 'phaseEnd' },
						forced: true,
						filter: function (event, player) {
							return player.countCards('h', { type: 'equip' });
						},
						content: function () {
							var cards = player.getCards('h', { type: 'equip' });
							if (cards.length) {
								player.lose(cards)._triggered = null;
								var list = [];
								var names = [];
								for (var i = 0; i < lib.inpile.length; i++) {
									if (lib.card[lib.inpile[i]].type == 'basic') {
										names.push(lib.inpile[i]);
									}
								}
								names.remove('du');
								for (var i = 0; i < cards.length * 2; i++) {
									list.push(game.createCard(names.randomGet()));
								}
								player.directgain(list);
							}
						},
						ai: {
							effect: {
								player: function (card, player) {
									if (_status.currentPhase != player) return;
									if (get.type(card) == 'equip' && get.equipValueNumber(card) < 7) {
										if (player.needsToDiscard(2)) return;
										return [0, 0, 0, 0];
									}
								}
							},
						}
					},

					gzxinsheng: {
						trigger: { player: 'damageEnd' },
						// frequent:true,
						content: function () {
							game.log(player, '获得了一张', '#g化身');
							lib.skill.gzhuashen.addCharacter(player, _status.characterlist.randomGet(), true);
							game.delayx();
						}
					},
					gzhuashen: {
						unique: true,
						group: ['gzhuashen_add', 'gzhuashen_swap', 'gzhuashen_remove', 'gzhuashen_disallow', 'gzhuashen_flash'],
						init: function (player) {
							player.storage.gzhuashen = [];
							player.storage.gzhuashen_removing = [];
							player.storage.gzhuashen_trigger = [];
							player.storage.gzhuashen_map = {};
						},
						onremove: function (player) {
							delete player.storage.gzhuashen;
							delete player.storage.gzhuashen_removing;
							delete player.storage.gzhuashen_trigger;
							delete player.storage.gzhuashen_map;
						},
						ondisable: true,
						mark: true,
						intro: {
							mark: function (dialog, storage, player) {
								if (storage && storage.length) {
									if (player.isUnderControl(true)) {
										dialog.addSmall([storage, 'character']);
										var skills = [];
										for (var i in player.storage.gzhuashen_map) {
											skills.addArray(player.storage.gzhuashen_map[i]);
										}
										dialog.addText('可用技能：' + (skills.length ? get.translation(skills) : '无'));
									}
									else {
										return '共有' + get.cnNumber(storage.length) + '张“化身”'
									}
								}
								else {
									return '没有化身';
								}
							},
							content: function (storage, player) {
								if (player.isUnderControl(true)) {
									var skills = [];
									for (var i in player.storage.gzhuashen_map) {
										skills.addArray(player.storage.gzhuashen_map[i]);
									}
									return get.translation(storage) + '；可用技能：' + (skills.length ? get.translation(skills) : '无');
								}
								else {
									return '共有' + get.cnNumber(storage.length) + '张“化身”'
								}
							}
						},
						filterSkill: function (name) {
							var skills = lib.character[name][3].slice(0);
							for (var i = 0; i < skills.length; i++) {
								var info = lib.skill[skills[i]];
								if (info.unique || info.limited || info.mainSkill || info.viceSkill || get.is.locked(skills[i])) {
									skills.splice(i--, 1);
								}
							}
							return skills;
						},
						addCharacter: function (player, name, show) {
							var skills = lib.skill.gzhuashen.filterSkill(name);
							if (skills.length) {
								player.storage.gzhuashen_map[name] = skills;
								for (var i = 0; i < skills.length; i++) {
									player.addAdditionalSkill('hidden:gzhuashen', skills[i], true);
								}
							}
							player.storage.gzhuashen.add(name);
							player.updateMarks('gzhuashen');
							_status.characterlist.remove(name);
							if (show) {
								lib.skill.gzhuashen.drawCharacter(player, [name]);
							}
						},
						drawCharacter: function (player, list) {
							game.broadcastAll(function (player, list) {
								if (player.isUnderControl(true)) {
									var cards = [];
									for (var i = 0; i < list.length; i++) {
										var cardname = 'huashen_card_' + list[i];
										lib.card[cardname] = {
											fullimage: true,
											image: 'character:' + list[i]
										}
										lib.translate[cardname] = lib.translate[list[i]];
										cards.push(game.createCard(cardname, '', ''));
									}
									player.$draw(cards);
								}
							}, player, list);
						},
						removeCharacter: function (player, name) {
							var skills = lib.skill.gzhuashen.filterSkill(name);
							if (skills.length) {
								delete player.storage.gzhuashen_map[name];
								for (var i = 0; i < skills.length; i++) {
									var remove = true;
									for (var j in player.storage.gzhuashen_map) {
										if (j != name && game.expandSkills(player.storage.gzhuashen_map[j].slice(0)).contains(skills[i])) {
											remove = false; break;
										}
									}
									if (remove) {
										player.removeAdditionalSkill('hidden:gzhuashen', skills[i]);
										player.storage.gzhuashen_removing.remove(skills[i]);
									}
								}
							}
							player.storage.gzhuashen.remove(name);
							player.updateMarks('gzhuashen');
							_status.characterlist.add(name);
						},
						getSkillSources: function (player, skill) {
							if (player.getStockSkills().contains(skill)) return [];
							var sources = [];
							for (var i in player.storage.gzhuashen_map) {
								if (game.expandSkills(player.storage.gzhuashen_map[i].slice(0)).contains(skill)) sources.push(i);
							}
							return sources;
						},
						subfrequent: ['add'],
						subSkill: {
							add: {
								trigger: { player: 'phaseBeginStart' },
								frequent: true,
								filter: function (event, player) {
									return player.storage.gzhuashen.length < 2;
								},
								content: function () {
									'step 0'
									var list = _status.characterlist.randomGets(5);
									if (!list.length) {
										event.finish();
										return;
									}
									player.chooseButton([1, 2]).set('ai', function (button) {
										return get.rank(button.link, true);
									}).set('createDialog', ['选择至多两张武将牌作为“化身”', [list, 'character']]);
									'step 1'
									if (result.bool) {
										for (var i = 0; i < result.links.length; i++) {
											lib.skill.gzhuashen.addCharacter(player, result.links[i]);
										}
										lib.skill.gzhuashen.drawCharacter(player, result.links.slice(0));
										game.delayx();
										player.addTempSkill('gzhuashen_triggered');
										game.log(player, '获得了' + get.cnNumber(result.links.length) + '张', '#g化身');
									}
								}
							},
							swap: {
								trigger: { player: 'phaseBeginStart' },
								direct: true,
								filter: function (event, player) {
									if (player.hasSkill('gzhuashen_triggered')) return false;
									return player.storage.gzhuashen.length >= 2;
								},
								content: function () {
									'step 0'
									var list = player.storage.gzhuashen.slice(0);
									if (!list.length) {
										event.finish();
										return;
									}
									player.chooseButton().set('ai', function () {
										return Math.random() - 0.3;
									}).set('createDialog', ['是否替换一张“化身”？', [list, 'character']]);
									'step 1'
									if (result.bool) {
										player.logSkill('gzhuashen');
										game.log(player, '替换了一张', '#g化身');
										lib.skill.gzhuashen.removeCharacter(player, result.links[0]);
										lib.skill.gzhuashen.addCharacter(player, _status.characterlist.randomGet(), true);
										game.delayx();
									}
								}
							},
							triggered: {},
							flash: {
								hookTrigger: {
									log: function (player, skill) {
										var sources = lib.skill.gzhuashen.getSkillSources(player, skill);
										if (sources.length) {
											player.flashAvatar('gzhuashen', sources.randomGet());
											player.storage.gzhuashen_removing.add(skill);
										}
									}
								},
								trigger: { player: ['useSkillBegin', 'useCard', 'respond'] },
								silent: true,
								filter: function (event, player) {
									return event.skill && lib.skill.gzhuashen.getSkillSources(player, event.skill).length > 0;
								},
								content: function () {
									lib.skill.gzhuashen_flash.hookTrigger.log(player, trigger.skill);
								}
							},
							clear: {
								trigger: { player: 'phaseAfter' },
								silent: true,
								content: function () {
									player.storage.gzhuashen_trigger.length = 0;
								}
							},
							disallow: {
								hookTrigger: {
									block: function (event, player, name, skill) {
										for (var i = 0; i < player.storage.gzhuashen_trigger.length; i++) {
											var info = player.storage.gzhuashen_trigger[i];
											if (info[0] == event && info[1] == name &&
												lib.skill.gzhuashen.getSkillSources(player, skill).length > 0) {
												return true;
											}
										}
										return false;
									}
								}
							},
							remove: {
								trigger: { player: ['useSkillAfter', 'useCardAfter', 'respondAfter', 'triggerAfter', 'skillAfter'] },
								hookTrigger: {
									after: function (event, player) {
										if (event._direct && !player.storage.gzhuashen_removing.contains(event.skill)) return false;
										if (lib.skill[event.skill].silent) return false;
										return lib.skill.gzhuashen.getSkillSources(player, event.skill).length > 0;
									}
								},
								silent: true,
								filter: function (event, player) {
									return event.skill && lib.skill.gzhuashen.getSkillSources(player, event.skill).length > 0;
								},
								content: function () {
									'step 0'
									if (trigger.name == 'trigger') {
										player.storage.gzhuashen_trigger.push([trigger._trigger, trigger.triggername]);
									}
									var sources = lib.skill.gzhuashen.getSkillSources(player, trigger.skill);
									if (sources.length == 1) {
										event.directresult = sources[0];
									}
									else {
										player.chooseButton(true).set('createDialog', ['移除一张“化身”牌', [sources, 'character']]);
									}
									'step 1'
									if (!event.directresult && result && result.links[0]) {
										event.directresult = result.links[0];
									}
									var name = event.directresult;
									lib.skill.gzhuashen.removeCharacter(player, name);
									game.log(player, '移除了化身牌', '#g' + get.translation(name));
								}
							}
						},
						ai: {
							nofrequent: true,
							skillTagFilter: function (player, tag, arg) {
								if (arg && player.storage.gzhuashen) {
									if (lib.skill.gzhuashen.getSkillSources(player, arg).length > 0) {
										return true;
									}
								}
								return false;
							}
						}
					},

					"gztianming": {
						audio: "tianming",
						enable: "phaseUse",
						usable: 1,
						filterTarget: function (card, player, target) {
							return player.canCompare(target);
						},
						content: function () {
							"step 0"
							player.chooseToCompare(target);
							"step 1"
							if (result.tie) event.finish();
							else {
								var list = [];
								if (get.position(result.player) == 'd') list.push(result.player);
								if (get.position(result.target) == 'd') list.push(result.target);
								var win = result.bool ? player : target;
								event.win = win;
								if (list.length) {
									event.cards = list;
									var b = false;
									for (var i = 0; i < list.length; i++) {
										if (win.hasUseTarget(list[i])) {
											b = true;
											break;
										}
									}
									if (b) event.goto(3);
								}
							}
							"step 2"
							event.win.loseHp();
							event.finish();
							"step 3"
							var pro = "天命:请选择使用以下一张牌或流失1点体力";
							var ne = event.win.chooseCardButton(pro, event.cards);
							ne.set("filterButton", function (button) {
								var player = get.player();
								return player.hasUseTarget(button.link);
							});
							ne.set("ai", function (button) {
								return player.getUseValue(button.link);
							});
							"step 4"
							if (result.bool) event.win.chooseUseTarget(result.links[0], true, false);
							else event.goto(2);
						},
						ai: {
							order: 4,
							result: {
								target: -1,
							},
						},
					},
					"gzshangao": {
						skillAnimation: "epic",
						animationColor: "metal",
						unique: true,
						xiandingji: true,
						limited: true,
						mark: true,
						audio: "mizhao",
						init: function (player, skill) {
							player.storage[skill] = false;
						},
						intro: {
							content: "limited",
						},
						trigger: {
							player: "dyingBegin",
						},
						direct: true,
						filter: function (event, player) {
							return player.storage.gzshangao == false;
						},
						content: function () {
							"step 0"

							player.chooseTarget(get.prompt2("gzshangao"), function (card, player, target) {
								return player != target;
							}).set("ai", function (target) {
								var player = get.player();
								return get.attitude(player, target);
							});
							"step 1"
							if (result.bool) {
								event.tg = result.targets[0];
								player.logSkill("gzshangao", event.tg);
								player.storage.gzshangao = true;
								player.awakenSkill("gzshangao");
							}
							else event.finish();
							"step 2"
							var tg = event.tg;
							tg.addSkillLog("gztianming");
							player.removeSkill("gztianming");
							"step 3"
							player.recover(2);
							player.draw(2);
						},
					},
					"gzbenxi": {
						audio: "benxi",
						trigger: {
							player: "chooseToRespondBegin",
						},
						direct: true,
						filter: function (event, player) {
							if (event.responded) return false;
							if (!event.filterCard({ name: 'shan' }, player, event) && !event.filterCard({ name: 'sha' }, player, event)) return false;
							if (player.countCards("h") < Math.max(player.hp, 1)) return false;
							return true;
						},
						group: "gzbenxi_a",
						subSkill: {
							a: {
								enable: "chooseToUse",
								filter: function (event, player) {
									if (player.countCards("h") < Math.max(player.hp, 1)) return false;
									return event.filterCard({ name: 'sha' }, player, event) || event.filterCard({ name: 'jiu' }, player, event) || event.filterCard({ name: 'tao' }, player, event) || event.filterCard({ name: 'shan' }, player, event);
								},
								chooseButton: {
									dialog: function (event, player) {
										var list = [];
										if (event.filterCard({ name: 'sha' }, player, event)) {
											list.push(['基本', '', 'sha']);
											list.push(['基本', '', 'sha', 'fire']);
											list.push(['基本', '', 'sha', 'thunder']);
										}
										if (event.filterCard({ name: 'tao' }, player, event)) list.push(['基本', '', 'tao']);
										if (event.filterCard({ name: 'jiu' }, player, event)) list.push(['基本', '', 'jiu']);
										if (event.filterCard({ name: 'shan' }, player, event)) list.push(['基本', '', 'shan']);
										return ui.create.dialog('奔袭', [list, 'vcard'], 'hidden');
									},
									check: function (button) {
										var player = get.player();
										var card = { name: button.link[2], nature: button.link[3] };
										if (card.name == 'jiu') return 0;
										if (game.hasPlayer(function (current) {
											return player.canUse(card, current) && get.effect(current, card, player, player) > 0;
										})) {
											if (card.name == 'sha') {
												if (card.nature == 'fire') return 2.95;
												else if (card.nature == 'fire') return 2.92;
												else return 2.9;
											}
											else if (card.name == 'tao' || card.name == 'shan') {
												return 4;
											}
										}
										return 0;
									},
									backup: function (links, player) {
										return {
											selectTarget: function () {
												if (links[0][2] == "shan") return -1;
												var player = get.player();
												return [1, Math.max(player.hp, 1)];
											},
											filterTarget: function (card, player, target) {
												return lib.filter.targetEnabled2({ name: links[0][2] }, player, target);
											},
											filterCard: true,
											position: "h",
											viewAs: { name: links[0][2], nature: links[0][3] },
											selectCard: function () {
												var player = get.player();
												return Math.max(player.hp, 1);
											},
											popname: true,
											log: false,
											onuse: function (result, player) {
												player.logSkill("gzbenxi");
											},
										}
									},
									prompt: function (links, player) {
										var n = Math.max(player.hp, 1);
										var str = links[0][2] == 'shan' ? '' : '对至多' + get.cnNumber(n) + '个目标';
										return '将' + get.cnNumber(n) + '张手牌当做' + get.translation(links[0][3] || '') + get.translation(links[0][2]) + str + '使用';
									},
								},
								ai: {
									order: function () {
										var player = get.player();
										var event = _status.event;
										if (event.type == 'dying') {
											if (event.filterCard({ name: 'tao' }, player, event)) return 0.5;
										}
										else {
											if (event.filterCard({ name: 'tao' }, player, event) || event.filterCard({ name: 'shan' }, player, event)) return 4;
											if (event.filterCard({ name: 'sha' }, player, event)) return 3.1;
										}
										return 0;
									},
									result: {
										player: function (player) {
											if (_status.event.type != 'dying') {
												if (player.hp < 3) return 2.1 - player.hp;
												return -1;
											}
											else return get.attitude(player, _status.event.dying);
										},
									},
									save: true,
									respondSha: true,
									respondShan: true,
									skillTagFilter: function (player, tag, arg) {
										if (player.countCards("h") < Math.max(player.hp, 1)) return false;
									},
								},
								sub: true,
							},
						},
						content: function () {
							"step 0"
							if (trigger.filterCard({ name: 'shan' }) && lib.filter.cardRespondable({ name: 'shan' }, player, trigger)) event.name = 'shan';
							else event.name = 'sha';
							var n = Math.max(player.hp, 1);
							player.chooseCard("h", n, '是否发动【奔袭】，将' + get.cnNumber(n) + '张手牌当做' + get.translation(event.name) + '打出？').set('ai', function (card) {
								var player = get.player();
								if (player.hp > 2) return 0;
								if (!player.countCards('h', 'shan')) return 8 - get.value(card);
								return 6 - get.value(card);
							});
							'step 1'
							if (result.bool) {
								player.logSkill('gzbenxi');
								event.cards = result.cards;
							}
							else event.finish();
							"step 2"
							trigger.untrigger();
							trigger.responded = true;
							if (trigger.filterCard({ name: 'shan' })) trigger.result = { bool: true, card: { name: 'shan' }, cards: event.cards };
							else trigger.result = { bool: true, card: { name: 'sha' }, cards: event.cards };
						},
					},
					"gzhuaiju": {
						audio: "nzry_huaiju",
						trigger: {
							player: "phaseJieshuBegin",
						},
						filter: function (event, player) {
							return player.countCards("he", { color: "red" });
						},
						direct: true,
						content: function () {
							"step 0"
							player.chooseCardTarget({
								prompt: get.prompt2("gzhuaiju"),
								selectCard: [2, Infinity],
								position: "he",
								filterCard: {
									color: "red",
								},
								selectTarget: 1,
								filterTarget: function (card, player, target) {
									return player != target;
								},
								ai1: function (card) {
									return 10 - get.value(card);
								},
								ai2: function (target) {
									var att = get.attitude(_status.event.player, target);
									return att;
								},
							});
							"step 1"
							if (result.bool) {
								event.cards = result.cards;
								event.target = result.targets[0];
								player.logSkill("gzhuaiju", event.target);
								player.give(event.cards, event.target);
							}
							else event.finish();
							"step 2"
							player.draw(3);
						},
					},
					"gzzhenglun": {
						audio: "nzry_zhenglun",
						init: function (player) {
							player.storage.gzzhenglun = [];
							player.storage.gzzhenglun2 = [];
						},
						intro: {
							content: "cards",
							mark: function (dialog, content, player) {
								if (content && content.length) {
									dialog.addAuto(content);
									var str = '';
									for (var i = 0; i < player.storage.gzzhenglun2.length; i++) {
										str += "<br>";
										str += player.storage.gzzhenglun2[i];
										if (i < player.storage.gzzhenglun2.length - 1) {
											str += '<br>';
										}
									}
									dialog.add('<div class="text center">' + str + '</div>')
								}
							},
						},
						trigger: {
							player: ["useCard", "phaseAfter"],
						},
						frequent: true,
						filter: function (event, player) {
							if (event.name != "useCard") {
								player.unmarkSkill("gzzhenglun");
								player.storage.gzzhenglun = [];
								player.storage.gzzhenglun2 = [];
								return false;
							}
							if (_status.currentPhase != player) return false;
							return ui.cardPile.childNodes.length >= player.countUsed();
						},
						content: function () {
							"step 0"
							var use = player.countUsed();
							event.cards = [ui.cardPile.childNodes[use - 1]];
							use = get.cnNumber(use, "two");
							event.use = use;
							var ne = player.chooseCardButton("是否弃置牌堆顶第" + use + "张牌？", event.cards, 1);
							ne.set("ai", function (button) {
								var card = button.link;
								var v1 = get.value(card);
								var b1 = get.type(card) == "equip";
								var na = card.name;
								if (na == "shan") return 0;
								if (na == "sha") {
									if (get.color(card) == 'black') return 1;
									return 0;
								}
								return v1 < 6 || b1 ? 1 : -1;
							});
							"step 1"
							var str = event.use;
							if (result.bool) {
								game.cardsDiscard(event.cards);
								player.$throw(event.cards);
								game.log(player, "弃置了", event.cards);
								str += "(弃置)";
							}
							else str += "(观看)";
							player.markSkill("gzzhenglun");
							player.storage.gzzhenglun.addArray(event.cards);
							player.storage.gzzhenglun2.push(str);
							player.syncStorage("gzzhenglun2");
						},
					},

					"gzzhuikong": {
						audio: "zhuikong",
						trigger: {
							target: "useCardToTargeted",
						},
						filter: function (event, player) {
							var num = game.YS2_XRFS ? 2 : 1;
							return player.countCards("he") > num - 1;
						},
						direct: true,
						content: function () {
							"step 0"
							player.chooseToDiscard(get.prompt2("gzzhuikong"), "he", [game.YS2_XRFS ? 2 : 1, Infinity]).set("ai", function (card) {
								var n = game.YS2_XRFS ? 2 : 1;
								return ui.selected.cards.length == n ? 0 : 8 - get.value(card);
							}).logSkill = "gzzhuikong";
							"step 1"
							if (result.bool) player.storage.gzzhuikong_a.push(trigger.cards);
						},
						ai: {
							effect: {
								target: function (card, player, target) {
									var n = game.XRFS ? 0.2 : 0.5;
									return [1, n];
								},
							},
						},
						group: "gzzhuikong_a",
						subSkill: {
							a: {
								charlotte: true,
								init: function (player, skill) {
									player.storage[skill] = [];
								},
								trigger: {
									global: "useCardAfter",
								},
								filter: function (event, player) {
									return player.storage.gzzhuikong_a.contains(event.cards);
								},
								silent: true,
								content: function () {
									"step 0"
									player.storage.gzzhuikong_a.remove(trigger.cards);
									player.chooseBool("惴恐:是否摸1张牌？").ai = lib.filter.all;
									"step 1"
									if (result.bool) player.draw();
								},
								sub: true,
								forced: true,
								popup: false,
							},
						},
					},
					"gzqiuyuan": {
						audio: "qiuyuan",
						group: ["gzqiuyuan_a", "gzqiuyuan_b", "gzqiuyuan_c", "gzqiuyuan_e", "gzqiuyuan_g"],
						subSkill: {
							a: {
								audio: "qiuyuan",
								trigger: {
									player: ["chooseToRespondBefore", "chooseToUseBefore"],
								},
								filter: function (event, player) {
									if (event.responded) return false;
									if (player.storage.gzqiuyuanbing) return false;
									if (!event.filterCard({ name: 'shan' }, player, event)) return false;
									if (_status.currentPhase == player) return false;
									if (player.countCards("h")) return false;
									return true;
								},
								check: function (event, player) {
									if (get.damageEffect(player, event.player, player) >= 0) return false;
									return true;
								},
								content: function () {
									"step 0"
									if (event.current == undefined) event.current = player.next;
									if (event.current == player) event.finish();
									else {
										if ((event.current == game.me && !_status.auto) || (get.attitude(event.current, player) > 2) || event.current.isOnline()) {
											player.storage.gzqiuyuanbing = true;
											var next = event.current.chooseToRespond('是否替' + get.translation(player) + '打出一张闪？', { name: 'shan' });
											next.set('ai', function () {
												var event = _status.event;
												return (get.attitude(event.player, event.source) - 2);
											});
											next.set('skillwarn', '替' + get.translation(player) + '打出一张闪');
											next.autochoose = lib.filter.autoRespondShan;
											next.set('source', player);
										}
									}
									"step 1"
									player.storage.gzqiuyuanbing = false;
									if (result.bool) {
										event.finish();
										trigger.result = { bool: true, card: { name: 'shan' } };
										trigger.responded = true;
										trigger.animate = false;
										if (typeof event.current.ai.shown == 'number' && event.current.ai.shown < 0.95) {
											event.current.ai.shown += 0.3;
											if (event.current.ai.shown > 0.95) event.current.ai.shown = 0.95;
										}
									}
									else {
										event.current = event.current.next;
										event.goto(0);
									}
								},
								ai: {
									respondShan: true,
									skillTagFilter: function (player) {
										if (player.storage.gzqiuyuanbing) return false;
										if (_status.currentPhase == player) return false;
										if (player.countCards("h")) return false;
									},
								},
								sub: true,
							},
							b: {
								audio: "qiuyuan",
								trigger: {
									player: "chooseToRespondBegin",
								},
								check: function (event) {
									if (event.gzqiuyuana) return false;
									return true;
								},
								filter: function (event, player) {
									if (event.responded) return false;
									if (player.storage.gzqiuyuanaing) return false;
									if (!event.filterCard({ name: 'sha' }, player, event)) return false;
									if (_status.currentPhase == player) return false;
									if (player.countCards("h")) return false;
									return true;
								},
								content: function () {
									"step 0"
									if (event.current == undefined) event.current = player.next;
									if (event.current == player) event.finish();
									else {
										player.storage.gzqiuyuanaing = true;
										var next = event.current.chooseToRespond('是否替' + get.translation(player) + '打出一张杀？', { name: 'sha' });
										next.set('ai', function () {
											var event = _status.event;
											return (get.attitude(event.player, event.source) - 2);
										});
										next.set('source', player);
										next.set('gzqiuyuana', true);
										next.set('skillwarn', '替' + get.translation(player) + '打出一张杀');
										next.noOrdering = true;
										next.autochoose = lib.filter.autoRespondSha;
									}
									"step 1"
									player.storage.gzqiuyuanaing = false;
									if (result.bool) {
										event.finish();
										trigger.result = result;
										trigger.responded = true;
										trigger.animate = false;
										if (typeof event.current.ai.shown == 'number' && event.current.ai.shown < 0.95) {
											event.current.ai.shown += 0.3;
											if (event.current.ai.shown > 0.95) event.current.ai.shown = 0.95;
										}
									}
									else {
										event.current = event.current.next;
										event.goto(0);
									}
								},
								sub: true,
							},
							c: {
								audio: "qiuyuan",
								enable: "chooseToUse",
								prompt: "选择一名目标角色。若有其他角色打出【杀】响应，则视为你对其使用此【杀】。",
								filter: function (event, player) {
									if (event.filterCard && !event.filterCard({ name: 'sha' }, player, event)) return false;
									if (player.hasSkill('gzqiuyuan_d')) return false;
									if (!lib.filter.cardUsable({ name: 'sha' }, player)) return false;
									if (_status.currentPhase == player) return false;
									if (player.countCards("h")) return false;
									return true;
								},
								filterTarget: function (card, player, target) {
									if (_status.event._backup &&
										typeof _status.event._backup.filterTarget == 'function' &&
										!_status.event._backup.filterTarget({ name: 'sha' }, player, target)) {
										return false;
									}
									return player.canUse({ name: 'sha' }, target);
								},
								content: function () {
									"step 0"
									if (event.current == undefined) event.current = player.next;
									if (event.current == player) {
										player.addSkill('gzqiuyuan_d');
										event.getParent(2).step = 0;
										event.finish();
									}
									else {
										var next = event.current.chooseToRespond('是否替' + get.translation(player) + '对' + get.translation(target) + '使用一张杀',
											function (card, player, event) {
												event = event || _status.event;
												return card.name == 'sha' && event.source.canUse(card, event.target);
											});
										next.set('ai', function (card) {
											var event = _status.event;
											return get.effect(event.target, card, event.source, event.player);
										});
										next.set('source', player);
										next.set('target', target);
										next.set('gzqiuyuana', true);
										next.set('skillwarn', '替' + get.translation(player) + '打出一张杀');
										next.noOrdering = true;
										next.autochoose = lib.filter.autoRespondSha;
									}
									"step 1"
									if (result.bool) {
										event.finish();
										if (result.cards && result.cards.length) {
											player.useCard({ name: 'sha' }, result.cards, target).animate = false;
										}
										else {
											player.useCard({ name: 'sha' }, target).animate = false;
										}
										if (typeof event.current.ai.shown == 'number' && event.current.ai.shown < 0.95) {
											event.current.ai.shown += 0.3;
											if (event.current.ai.shown > 0.95) event.current.ai.shown = 0.95;
										}
									}
									else {
										event.current = event.current.next;
										event.goto(0);
									}
								},
								ai: {
									respondSha: true,
									skillTagFilter: function (player) {
										if (_status.currentPhase == player) return false;
										if (player.countCards("h")) return false;
									},
									result: {
										target: function (player, target) {
											if (player.hasSkill('gzqiuyuan_d')) return 0;
											return get.effect(target, { name: 'sha' }, player, target);
										},
									},
									order: 2.9,
								},
								sub: true,
							},
							d: {
								trigger: {
									global: ["useCardAfter", "useSkillAfter", "phaseAfter"],
								},
								silent: true,
								filter: function (event) {
									return event.skill != 'gzqiuyuan_c';
								},
								content: function () {
									"step 0"
									player.removeSkill('gzqiuyuan_d');
								},
								sub: true,
								forced: true,
								popup: false,
							},
							e: {
								audio: "qiuyuan",
								enable: "chooseToUse",
								name: "乞援(桃)",
								prompt: "选择一名目标角色。若有其他角色打出【桃】响应，则视为你对其使用此【桃】。",
								filter: function (event, player) {
									if (event.filterCard && !event.filterCard({ name: 'tao' }, player, event)) return false;
									if (player.hasSkill('gzqiuyuan_f')) return false;
									if (!lib.filter.cardUsable({ name: 'tao' }, player)) return false;
									if (_status.currentPhase == player) return false;
									if (player.countCards("h")) return false;
									return true;
								},
								selectTarget: -1,
								filterTarget: function (card, player, target) {
									return target == _status.event.dying;
								},
								content: function () {
									"step 0"
									if (event.current == undefined) event.current = player.next;
									if (event.current == player) {
										player.addSkill('gzqiuyuan_f');
										event.getParent(2).step = 0;
										event.finish();
									}
									else {
										var next = event.current.chooseToRespond('是否替' + get.translation(player) + '对' + get.translation(target) + '使用一张桃',
											function (card, player, event) {
												event = event || _status.event;
												return card.name == 'tao';
											});
										next.set('ai', function (card) {
											var event = _status.event;
											return get.effect(event.target, card, event.source, event.player);
										});
										next.set('source', player);
										next.set('target', target);
										next.set('gzqiuyuanc', true);
										next.set('skillwarn', '替' + get.translation(player) + '打出一张桃');
										next.noOrdering = true;
										var restao = function () {
											return !this.player.countCards("h", "tao");
										};
										next.autochoose = restao;
									}
									"step 1"
									if (result.bool) {
										event.finish();
										if (result.cards && result.cards.length) {
											player.useCard({ name: 'tao' }, result.cards, target).animate = false;
										}
										else {
											player.useCard({ name: 'tao' }, target).animate = false;
										}
										if (typeof event.current.ai.shown == 'number' && event.current.ai.shown < 0.95) {
											event.current.ai.shown += 0.3;
											if (event.current.ai.shown > 0.95) event.current.ai.shown = 0.95;
										}
									}
									else {
										event.current = event.current.next;
										event.goto(0);
									}
								},
								ai: {
									save: true,
									skillTagFilter: function (player) {
										if (_status.currentPhase == player) return false;
										if (player.countCards("h")) return false;
									},
									result: {
										target: function (player, target) {
											if (player.hasSkill('gzqiuyuan_f')) return 0;
											return get.effect(target, { name: 'tao' }, player, target);
										},
									},
									order: 1,
								},
								sub: true,
							},
							f: {
								trigger: {
									global: ["useCardAfter", "useSkillAfter", "phaseAfter"],
								},
								silent: true,
								filter: function (event) {
									return event.skill != 'gzqiuyuan_e' && event.skill != 'gzqiuyuan_g';
								},
								content: function () {
									"step 0"
									player.removeSkill('gzqiuyuan_f');
								},
								sub: true,
								forced: true,
								popup: false,
							},
							g: {
								audio: "qiuyuan",
								enable: "chooseToUse",
								name: "乞援(酒)",
								prompt: "选择一名目标角色。若有其他角色打出【酒】响应，则视为你对其使用此【酒】。",
								filter: function (event, player) {
									if (event.filterCard && !event.filterCard({ name: 'jiu' }, player, event)) return false;
									if (player.hasSkill('gzqiuyuan_h')) return false;
									if (!lib.filter.cardUsable({ name: 'jiu' }, player)) return false;
									if (_status.currentPhase == player) return false;
									if (player.countCards("h")) return false;
									return true;
								},
								selectTarget: -1,
								filterTarget: function (card, player, target) {
									return target == _status.event.dying;
								},
								content: function () {
									"step 0"
									if (event.current == undefined) event.current = player.next;
									if (event.current == player) {
										player.addSkill('gzqiuyuan_h');
										event.getParent(2).step = 0;
										event.finish();
									}
									else {
										var next = event.current.chooseToRespond('是否替' + get.translation(player) + '对' + get.translation(target) + '使用一张酒',
											function (card, player, event) {
												event = event || _status.event;
												return card.name == 'jiu' && event.source.canUse(card, event.target);
											});
										next.set('ai', function (card) {
											var event = _status.event;
											return get.effect(event.target, card, event.source, event.player);
										});
										next.set('source', player);
										next.set('target', target);
										next.set('gzqiuyuand', true);
										next.set('skillwarn', '替' + get.translation(player) + '打出一张酒');
										next.noOrdering = true;
										var resjiu = function () {
											return !this.player.countCards("h", "jiu");
										};
										next.autochoose = resjiu;
									}
									"step 1"
									if (result.bool) {
										event.finish();
										if (result.cards && result.cards.length) {
											player.useCard({ name: 'jiu' }, result.cards, target).animate = false;
										}
										else {
											player.useCard({ name: 'jiu' }, target).animate = false;
										}
										if (typeof event.current.ai.shown == 'number' && event.current.ai.shown < 0.95) {
											event.current.ai.shown += 0.3;
											if (event.current.ai.shown > 0.95) event.current.ai.shown = 0.95;
										}
									}
									else {
										event.current = event.current.next;
										event.goto(0);
									}
								},
								ai: {
									save: true,
									skillTagFilter: function (player) {
										if (_status.currentPhase == player) return false;
										if (player.countCards("h")) return false;
									},
									result: {
										target: function (player, target) {
											if (player.hasSkill('gzqiuyuan_h')) return 0;
											return get.effect(target, { name: 'jiu' }, player, target);
										},
									},
									order: 2,
								},
								sub: true,
							},
							h: {
								trigger: {
									global: ["useCardAfter", "useSkillAfter", "phaseAfter"],
								},
								silent: true,
								filter: function (event) {
									return event.skill != 'gzqiuyuan_e' && event.skill != 'gzqiuyuan_g';
								},
								content: function () {
									"step 0"
									player.removeSkill('gzqiuyuan_h');
								},
								sub: true,
								forced: true,
								popup: false,
							},
						},
					},
					"gzduliang": {
						audio: "duliang",
						trigger: {
							player: "phaseJieshuBegin",
						},
						filter: function (event, player) {
							if (player.hasJudge("bingliang")) return false;
							return player.countCards("he", function (card) {
								return get.type(card) == "basic" && get.color(card) == "black";
							});
						},
						direct: true,
						content: function () {
							"step 0"
							player.chooseCard(get.prompt2("gzduliang"), "he", function (card) {
								return get.type(card) == "basic" && get.color(card) == "black";
							}).set("ai", function (card) {
								return 6 - get.value(card);
							});
							"step 1"
							if (result.bool) {
								player.logSkill("gzduliang");
								var next = player.useCard({ name: "bingliang" }, result.cards, player);
								next.animate = false;
								next.audio = false;
								player.draw(2);
							}
						},
						ai: {
							effect: {
								player: function (card, player, target) {
									if (player.countCards("he", function (card) {
										return get.type(card) == "basic" && get.color(card) == "black";
									}) > 1) return;
									if (card.name == "sha" && get.color(card) == "black") return [0, -2];
								},
							},
						},
					},
					"gzfulin": {
						audio: "fulin",
						trigger: {
							player: "damageEnd",
						},
						filter: function (event, player) {
							if (!event.source) return false;
							return player.countCards("j");
						},
						check: function (event, player) {
							var j1 = player.countCards("j");
							var j2 = event.source.countCards("j");
							if (player.countCards("j", "shandian") && j2 == 0) return true;
							return get.attitude(player, event.source) < 0 && j1 > j2;
						},
						content: function () {
							"step 0"
							player.swapJudge(trigger.source);
						},
						ai: {
							"maixie_defend": true,
							effect: {
								target: function (card, player, target) {
									if (!get.tag(card, "damage")) return;
									if (!target.countCards("j")) return;
									if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
									return [1, 0.5, 1, -1];
								},
							},
						},
					},

					"gzbifa": {
						audio: "bifa",
						direct: true,
						trigger: {
							player: "phaseZhunbeiBegin",
						},
						filter: function (event, player) {
							return player.countCards("h", "sha");
						},
						content: function () {
							"step 0"
							player.chooseCardTarget({
								prompt: get.prompt2("gzbifa"),
								position: "h",
								filterCard: function (card) {
									return card.name == "sha";
								},
								filterTarget: function (card, player, target) {
									return player != target;
								},
								ai2: function (target) {
									var player = get.player();
									if (get.attitude(player, target) > 0) return 0;
									return (target.countCards("h") - 0.9) / 3;
								},
							});
							"step 1"
							if (result.bool) {
								event.target = result.targets[0];
								player.logSkill("gzbifa", event.target);
								player.showCards(result.cards, get.translation(player) + "展示的牌");
							}
							else event.finish();
							"step 2"
							if (event.target.countCards("h", "shan")) {
								var list = ["展示一张【闪】", "弃置两张手牌"];
								event.target.chooseControlList(list, true).set("ai", function (event, player) {
									return 0;
								}).set("prompt", "请选择一项执行");
							}
							else event.goto(5);
							"step 3"
							if (result.index == 0) event.target.chooseCard("请选择一张闪展示", "h", true, function (card) {
								return card.name == "shan";
							});
							else event.goto(5);
							"step 4"
							event.target.showCards(result.cards, get.translation(event.target) + "展示的牌");
							event.finish();
							"step 5"
							event.target.chooseToDiscard("h", 1, true);
						},
					},
					"gzsongci": {
						audio: "songci",
						trigger: {
							player: "damageEnd",
						},
						logTarget: "source",
						frequent: true,
						filter: function (event, player) {
							return event.source && event.source.isAlive();
						},
						content: function () {
							"step 0"
							trigger.source.draw();
							"step 1"
							player.gainPlayerCard(trigger.source, "he", true);
						},
						ai: {
							maixie: true,
							"maixie_hp": true,
							effect: {
								target: function (card, player, target) {
									var bool = get.tag(card, 'damage') && player != target;
									if (!bool) return;
									if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
									return [1, 0.3];
								},
							},
						},
					},
					"gzzuifu": {
						audio: "jiushi",
						trigger: {
							player: "damageEnd",
						},
						filter: function (event, player) {
							return _status.currentPhase != player;
						},
						content: function () {
							'step 0'
							player.judge(function (card) {
								return 1;
							});
							'step 1'
							if (get.suit(result.card) == 'spade') event.bool = 'loseHp';
							if (get.suit(result.card) == 'club') event.bool = 'draw';
							if (get.suit(result.card) == 'heart') event.bool = 'viewAs';
							if (get.suit(result.card) == 'diamond') event.bool = 'link';
							'step 2'
							var num = 1;
							if (event.bool == 'link') num = [0, 2];
							player.chooseTarget('请选择目标', num).ai = function (target) {
								if (event.bool == 'draw') return get.attitude(trigger.player, target);
								if (player.hp <= 2 && event.bool == 'loseHp') return 0;
								return -get.attitude(trigger.player, target);
							};
							'step 3'
							if (result.bool) {
								player.line(result.targets);
								if (event.bool == 'loseHp') {
									player.loseHp();
									result.targets[0].loseHp();
								};
								if (event.bool == 'draw') result.targets[0].draw(2);
								if (event.bool == 'viewAs') player.useCard(game.createCard({ name: 'lebu' }), result.targets[0]);
								if (event.bool == 'link') {
									for (var i = 0; i < result.targets.length; i++) {
										result.targets[i].link();
									};
								};
							};
						},
					},
					gzkaikang: {
						audio: 'kaikang',
						trigger: { global: 'useCard' },
						filter: function (event, player) {
							return event.card && event.card.name == 'sha' && event.player != player &&
								event.targets.length == 1 && event.targets[0] != player && get.distance(event.player, player, 'attack') <= 1;
						},
						logTarget: 'player',
						check: function (event, player) {
							return get.effect(event.targets[0], { name: 'sha' }, event.player, player) <= get.effect(player, { name: 'sha' }, event.player, player);
						},
						content: function () {
							'step 0'
							trigger.targets = [player];
							var next = game.createEvent('gzkaikang_discard', null, trigger.getParent());
							next.player = player;
							next.target = trigger.player;
							next.setContent(function () {
								player.line(target, 'green');
								player.discardPlayerCard(target, true, 'he');
							});
						},
					},
					gzmingzhe: {
						audio: 'mingzhe',
						trigger: { player: ['useCardAfter', 'respondAfter', 'discardAfter'] },
						frequent: true,
						filter: function (event, player) {
							if (player == _status.currentPhase) return false;
							if (event.cards) {
								for (var i = 0; i < event.cards.length; i++) {
									if (get.suit(event.cards[i]) == 'heart' &&
										event.cards[i].original != 'j') return true;
								}
							}
							return false;
						},
						content: function () {
							"step 0"
							event.count = 1;
							if (trigger.name == 'discard') {
								event.count = 0;
								for (var i = 0; i < trigger.cards.length; i++) {
									if (get.suit(trigger.cards[i]) == 'heart' && trigger.cards[i].original != 'j') event.count++;
								}
							}
							"step 1"
							player.draw();
							event.count--;
							"step 2"
							if (event.count) {
								if (lib.config.autoskilllist.contains('gzmingzhe')) player.chooseBool(get.prompt2('gzmingzhe'));
								else event._result = { bool: true };
							}
							else event.finish();
							"step 3"
							if (result.bool) {
								player.logSkill('gzmingzhe');
								event.goto(1);
							}
						},
						ai: {
							threaten: 0.7
						}
					},

					gzshanxi: {
						audio: 'shanxi',
						trigger: { player: 'phaseUseBegin' },
						check: function (event, player) {
							var nh = player.countCards('h') - player.countCards('h', { type: 'equip' });
							if (nh <= 1) return true;
							if (player.countCards('h', 'tao')) return false;
							if (nh <= 2) return Math.random() < 0.7;
							if (nh <= 3) return Math.random() < 0.4;
							return false;
						},
						content: function () {
							player.draw(2);
							player.addTempSkill('gzshanxi2');
						}
					},
					gzshanxi2: {
						mod: {
							maxHandcard: function (player, num) {
								var damage = player.getStat().damage;
								if (typeof damage == 'number') return num - player.hp + damage;
								return 0;
							}
						}
					},
					gzhongyuan: {
						trigger: { player: 'phaseDrawBegin2' },
						direct: true,
						audio: 'hongyuan',
						content: function () {
							"step 0"
							var check;
							if (player.countCards('h') == 0) {
								check = false;
							}
							else {
								check = (game.countPlayer(function (current) {
									return player != current && get.attitude(player, current) > 1;
								}) >= 2);
							}
							if (get.is.versus()) {
								event.versus = true;
								player.chooseBool(get.prompt2('gzhongyuan')).ai = function () {
									return game.countPlayer(function (current) {
										return player.side == current.side;
									}) > 2;
								};
							}
							else {
								player.chooseTarget(get.prompt2('gzhongyuan'), [1, 2], function (card, player, target) {
									return player != target;
								}, function (target) {
									if (!_status.event.check) return 0;
									return get.attitude(_status.event.player, target);
								}).set('check', check);
							}
							"step 1"
							if (result.bool) {
								var targets;
								if (event.versus) {
									targets = game.filterPlayer(function (current) {
										return current != player && current.side == player.side;
									});
								}
								else {
									targets = result.targets;
								}
								player.logSkill('gzhongyuan', targets);
								game.asyncDraw(targets);
								trigger.num--;
							}
						},
					},
					gzfencheng: {
						skillAnimation: 'epic',
						animationColor: 'gray',
						audio: 'xinfencheng',
						enable: 'phaseUse',
						filter: function (event, player) {
							return !player.storage.gzfencheng;
						},
						filterTarget: function (card, player, target) {
							return player != target;
						},
						unique: true,
						limited: true,
						selectTarget: -1,
						multitarget: true,
						multiline: true,
						mark: true,
						line: 'fire',
						content: function () {
							"step 0"
							player.storage.gzfencheng = true;
							player.awakenSkill('gzfencheng');
							event.num = 1;
							event.targets = targets.slice(0);
							event.targets.sort(lib.sort.seat);
							"step 1"
							if (event.targets.length) {
								var target = event.targets.shift();
								event.target = target;
								var res = get.damageEffect(target, player, target, 'fire');
								target.chooseToDiscard('he', '弃置至少' + get.cnNumber(event.num) + '张牌或受到1点火焰伤害', [num, Infinity]).set('ai', function (card) {
									if (ui.selected.cards.length >= _status.event.getParent().num) return -1;
									if (_status.event.player.hasSkillTag('nofire')) return -1;
									if (_status.event.res >= 0) return 3 - get.value(card);
									if (get.type(card) != 'basic') {
										return 6 - get.value(card);
									}
									return 4 - get.value(card);
								}).set('res', res);
							}
							else {
								event.finish();
							}
							"step 2"
							if (!result.bool) {
								event.target.damage(1, 'fire');
								event.num = 1;
							}
							else {
								event.num = result.cards.length + 1;
							}
							event.goto(1);
						},
						ai: {
							order: 1,
							result: {
								player: function (player) {
									var num = 0, players = game.filterPlayer();
									for (var i = 0; i < players.length; i++) {
										if (player != players[i] && get.damageEffect(players[i], player, players[i], 'fire') < 0) {
											var att = get.attitude(player, players[i]);
											if (att > 0) {
												num--;
											}
											else if (att < 0) {
												num++;
											}
										}
									}
									if (game.players.length < 5) {
										return num - 1;
									}
									else {
										return num - 2;
									}
								}
							}
						},
						init: function (player) {
							player.storage.gzfencheng = false;
						},
						intro: {
							content: 'limited'
						}
					},
					"gzyongzhan": {
						audio: "ext:国战补充:2",
						group: ["gzyongzhan_sha", "gzyongzhan_shan", "gzyongzhan_tao"],
						subSkill: {
							"sha": {
								name: '杀',
								enable: ['chooseToRespond', 'chooseToUse'],
								position: 'e',
								filterCard: true,
								viewAsFilter: function (player) {
									return player.countCards('h') == 0;
								},
								viewAs: { name: 'sha' },
								prompt: '将一张装备区内的牌当【杀】使用或打出',
								ai: {
									skillTagFilter: function (player) {
										if (!player.countCards('e')) return false;
									},
									respondSha: true,
								},
							},
							"shan": {
								name: '闪',
								enable: ['chooseToUse', 'chooseToRespond'],
								position: 'e',
								filterCard: true,
								viewAsFilter: function (player) {
									return player.countCards('h') == 0;
								},
								viewAs: { name: 'shan' },
								prompt: '将一张装备区内的牌当【闪】使用或打出',
								ai: {
									respondShan: true,
									skillTagFilter: function (player) {
										if (!player.countCards('e')) return false;
									},
									effect: {
										target: function (card, player, target, current) {
											if (get.tag(card, 'respondShan') && current < 0) return 0.6;
										},
									},
								},
							},
							"tao": {
								name: '桃',
								enable: ['phaseUse', 'chooseToUse', 'chooseToRespond'],
								position: 'e',
								filterCard: true,
								viewAsFilter: function (player) {
									return player.countCards('h') == 0;
								},
								viewAs: { name: 'tao' },
								prompt: '将一张装备区内的牌当【桃】使用或打出',
								ai: {
									skillTagFilter: function (player) {
										return player.countCards('e') > 0;
									},
									save: true,
									respondTao: true,
								},
							},
							"jiu": {
								name: '酒', enable: ['phaseUse', 'chooseToUse', 'chooseToRespond'],
								position: 'e',
								filterCard: true,
								viewAsFilter: function (player) {
									return player.countCards('h') == 0;
								},
								viewAs: { name: 'jiu' },
								prompt: '将一张装备区内的牌当【酒】使用或打出',
								ai: {
									skillTagFilter: function (player) {
										return player.countCards('e') > 0;
									},
									save: true,
									respondJiu: true,
								},
							},
						},
					},

					gzzhuiyi: {
						audio: 'zhuiyi',
						trigger: { player: 'die' },
						direct: true,
						skillAnimation: true,
						animationColor: 'wood',
						forceDie: true,
						content: function () {
							"step 0"
							player.chooseTarget(get.prompt2('gzzhuiyi'), function (card, player, target) {
								return player != target && _status.event.source != target;
							}).set('forceDie', true).set('ai', function (target) {
								var num = get.attitude(_status.event.player, target);
								if (num > 0) {
									if (target.hp == 1) {
										num += 2;
									}
									if (target.hp < target.maxHp) {
										num += 2;
									}
								}
								return num;
							}).set('source', event.source);
							"step 1"
							if (result.bool) {
								var target = result.targets[0];
								player.logSkill('gzzhuiyi', target);
								player.line(target, 'green');
								target.recover();
								target.draw(2);
							}
						},
						ai: {
							expose: 0.5,
						}
					},
					gzanxu: {
						enable: 'phaseUse',
						usable: 1,
						multitarget: true,
						audio: 'anxu',
						filterTarget: function (card, player, target) {
							if (player == target) return false;
							var num = target.countCards('h');
							if (ui.selected.targets.length) {
								return num < ui.selected.targets[0].countCards('h');
							}
							var players = game.filterPlayer();
							for (var i = 0; i < players.length; i++) {
								if (num > players[i].countCards('h')) return true;
							}
							return false;
						},
						selectTarget: 2,
						content: function () {
							'step 0'
							var gainner, giver;
							if (targets[0].countCards('h') < targets[1].countCards('h')) {
								gainner = targets[0];
								giver = targets[1];
							}
							else {
								gainner = targets[1];
								giver = targets[0];
							}
							gainner.gainPlayerCard(giver, true, 'h', 'visibleMove');
							event.gainner = gainner;
							event.giver = giver;
							'step 1'
							if (result.cards) {
								event.bool = false;
								var card = result.cards[0];
								if (get.color(card) != 'black') event.bool = true;
							}
							'step 2'
							if (event.bool) {
								player.draw(1);
							}
						},
						ai: {
							order: 10.5,
							threaten: 2.3,
							result: {
								target: function (player, target) {
									var num = target.countCards('h');
									var att = get.attitude(player, target);
									if (ui.selected.targets.length == 0) {
										if (att > 0) return -1;
										var players = game.filterPlayer();
										for (var i = 0; i < players.length; i++) {
											var num2 = players[i].countCards('h');
											var att2 = get.attitude(player, players[i]);
											if (num2 < num) {
												if (att2 > 0) return -3;
												return -1;
											}
										}
										return 0;
									}
									else {
										return 1;
									}
								},
								player: 1,
							}
						}
					},
					"gzzhichi": {
						trigger: {
							player: 'phaseDrawBegin'
						},
						check: function (event, player) {
							return player.countCards('j') > 0
						},
						content: function () {
							trigger.num--;
							player.addTempSkill('gzzhichi1', { player: 'phaseAfter' });
						},
					},
					"gzzhichi1": {
						trigger: {
							player: 'phaseEnd'
						},
						forced: true,
						popup: false,
						content: function () {
							player.draw(2);
						},
					},
					"gzduwu": {
						enable: 'phaseUse',
						usable: 1,
						filterCard: true,
						selectCard: -1,
						viewAs: { name: 'sha' },
						viewAsFilter: function (player) {
							return player.countCards('h') > 0;
						},
						check: function (card) {
							var player = get.owner(card);
							if (player.countCards('h') > 3 || player.maxHp - player.hp == 0) return 0;
							return 1;
						},
						onuse: function (result, player) {
							player.addTempSkill('gzduwu1', { player: 'useCardAfter' });
						},
					},
					"gzduwu1": {
						trigger: {
							source: 'damageEnd'
						},
						forced: true,
						popup: false,
						filter: function (event, player) {
							return player.maxHp > player.hp;
						},
						content: function () {
							player.draw(player.maxHp - player.hp);
						},
					},
					gzmieji: {
						audio: "xinmieji",
						enable: 'phaseUse',
						usable: 1,
						filter: function (event, player) {
							return player.countCards('h', { type: ['trick', 'delay'], color: 'black' });
						},
						filterCard: function (card) {
							return get.color(card) == 'black' && get.type(card, 'trick') == 'trick';
						},
						filterTarget: function (card, player, target) {
							return target != player && target.countCards('h') > 0;
						},
						discard: false,
						delay: false,
						check: function (card) {
							return 8 - get.value(card);
						},
						content: function () {
							'step 0'
							player.showCards(cards);
							'step 1'
							ui.cardPile.insertBefore(cards[0], ui.cardPile.firstChild);
							game.updateRoundNumber();
							var n1 = target.getCards('he', function (card) {
								if (!lib.filter.cardDiscardable(card, player)) return false;
								return get.type(card, 'trick') == 'trick';
							});
							var n2 = target.getCards('he', function (card) {
								if (!lib.filter.cardDiscardable(card, player)) return false;
								return get.type(card, 'trick') != 'trick';
							});
							if (n1.length > 1 || n2.length > 2 || (n1.length == 1 && n2.length == 2)) {
								target.chooseToDiscard('弃置一张锦囊牌，或两张非锦囊牌', true, 'he', function (card, player) {
									if (!lib.filter.cardDiscardable(card, player)) return false;
									if (!_status.event.nontrick) {
										return get.type(card, 'trick') == 'trick';
									}
									if (ui.selected.cards.length) {
										return get.type(card, 'trick') != 'trick';
									}
									return true;
								}).set('ai', function (card) {
									if (get.type(card, 'trick') == 'trick') {
										return 8 - get.value(card);
									}
									return -get.value(card);
								}).set('selectCard', function () {
									if (ui.selected.cards.length == 1 && get.type(ui.selected.cards[0], 'trick') == 'trick') {
										return 1;
									}
									return 2;
								}).set('nontrick', n2.length >= 2).set('complexCard', true);
							}
							else {
								if (n1.length) {
									target.discard(n1);
								}
								else if (n2.length) {
									target.discard(n2);
								}
							}
						},
						ai: {
							order: 9,
							result: {
								target: -1
							}
						}
					},
					"gzqirang": {
						trigger: {
							player: "useCardEnd",
						},
						audio: "qirang",
						forced: true,
						filter: function (event, player) {
							return _status.currentPhase == player && get.type(event.card, 'equip') == 'equip';
						},
						content: function () {
							'step 0'
							event.cards = get.cards(3);
							player.showCards(event.cards);
							'step 1'
							var cards = [];
							for (var i = 0; i < event.cards.length; i++) {
								if (get.type(event.cards[i]) == 'trick' || get.type(event.cards[i]) == 'delay') cards.add(event.cards[i]);
							};
							if (cards.length > 0) player.gain(cards, 'gain2');
							if (cards.length < 3) {
								for (var i = 0; i < cards.length; i++) {
									event.cards.remove(cards[i]);
								};
								for (var i = 0; i < event.cards.length; i++) {
									ui.cardPile.appendChild(event.cards[i]);
								};
							};
						},
					},
					gzhuanshi: {
						audio: "huanshi", trigger: { global: 'phaseDiscardEnd' },
						filter: function (event, player) {
							return event.player != player && player.num('h') > 0;
						},
						direct: true,
						content: function () {
							'step 0'
							player.chooseToDiscard('是否发动对' + get.translation(trigger.player) + '【缓释】？').ai = function (card) {
								if (ai.get.attitude(player, trigger.player) < 0 && trigger.player.num('he')) return 5 - ai.get.value(card);
								return 0;
							}
							'step 1'
							if (result.bool && trigger.player.num('he')) {
								player.logSkill('gzhuanshi', trigger.player);
								trigger.player.chooseToDiscard('he', true)._triggered = null;;
							} else {
								event.finish();
							}
							'step 2'
							if (get.type(result.cards[0]) == 'equip') {
								event.card = result.cards[0];
								player.chooseTarget('选择一名目标获得' + get.translation(event.card), function (card, player, target) {
									return trigger.player != target;
								}).ai = function (target) {
									return ai.get.attitude(player, target) > 0;
								}
							}
							else {
								event.finish();
							}
							'step 3'
							if (result.bool) {
								result.targets[0].gain(event.card);
								result.targets[0].$gain(event.card);
							}
						}
					},
					gzjiancai: {
						derivation: 'gzjianyan',
						enable: 'phaseUse',
						audio: 'jujian',
						filter: function (event, player) {
							return player.checkMainSkill('gzjiancai', false) || player.checkViceSkill('gzjiancai', false);
						},
						unique: true,
						forceunique: true,
						filterTarget: true,
						skillAnimation: true,
						animationColor: 'orange',
						content: function () {
							'step 0'
							if (player.checkMainSkill('gzjiancai', false)) {
								player.removeCharacter(0);
							}
							else {
								player.removeCharacter(1);
							}
							'step 1'
							target.addSkill('gzjianyan');
							if (target != player) {
								player.draw();
								player.recover();
							}
						},
						ai: {
							order: 9,
							result: {
								player: function (player, target) {
									var num = 0;
									if (player.isDamaged() && target.isFriendOf(player)) {
										num++;
										if (target.hasSkill('kanpo')) num += 0.5;
										if (target.hasSkill('liegong')) num += 0.5;
										if (target.hasSkill('tieji')) num += 0.5;
										if (target.hasSkill('gzrende')) num += 1.2;
										if (target.hasSkill('longdan')) num += 1.2;
										if (target.hasSkill('paoxiao')) num += 1.2;
										if (target.hasSkill('zhangwu')) num += 1.5;
										if (target != player) num += 0.5;
									}
									return num;
								}
							}
						}
					},
					gzjianyan: {
						audio: "jianyan",
						enable: 'phaseUse',
						usable: 1,
						delay: 0,
						filter: function (event, player) {
							return game.hasPlayer(function (current) {
								return current.sex == 'male';
							});
						},
						content: function () {

							"step 0"
							player.chooseControl(['basic', 'trick', 'equip']).set('ai', function () {
								var player = _status.event.player;
								if (player.countCards('e') <= 1) return 'equip';
								if (player.countCards('h') > 2) return 'trick';
								return 'basic';
							});
							"step 1"
							event.card = get.cardPile(function (card) {
								if (get.type(card, 'trick') == result.control) return true;
								return false;
							}, 'cardPile');
							if (!event.card) {
								event.finish();
								return;
							}
							player.showCards([event.card]);
							"step 2"
							player.chooseTarget(true, '选择一名男性角色送出' + get.translation(event.card), function (card, player, target) {
								return target.sex == 'male';
							}).set('ai', function (target) {
								var att = get.attitude(_status.event.player, target);
								if (_status.event.neg) return -att;
								return att;
							}).set('neg', get.value(event.card, player, 'raw') < 0);
							"step 3"
							player.line(result.targets, 'green');
							result.targets[0].gain(event.card, 'gain2');

						},
						ai: {
							order: 9,
							result: {
								player: 2
							},
							threaten: 1.2
						}
					},
					gzwuyan: {
						audio: "wuyan",
						trigger: { player: 'phaseEnd' },
						direct: true,
						filter: function (event, player) {
							return player.countCards('h') > 0 && !player.hasSkill('huangshu2');
						},
						content: function () {
							"step 0"
							player.chooseCard(get.prompt2('gzwuyan')).ai = function (card) {
								return 5 - get.value(card);
							};
							"step 1"
							if (result.bool) {
								player.$give(result.cards, player);
								player.logSkill('gzwuyan');
								player.storage.gzwuyan2 = result.cards[0];
								player.lose(result.cards, ui.special);
								player.addSkill('gzwuyan2');
							}
						},
						ai: {
							threaten: 1.4
						},
					},
					gzwuyan2: {
						intro: {
							content: function (storage, player) {
								if (player.isUnderControl(true)) {
									return '当一名敌方角色使用' + get.translation(get.color(storage)) + '锦囊牌时，移去' + get.translation(storage) + '，取消锦囊的效果，并摸一张牌';
								}
								else {
									return '当一名敌方角色使用与“缄默”牌颜色相同的锦囊牌时，移去“缄默”牌，取消锦囊的效果，并摸两张牌';
								}
							},
							onunmark: function (storage, player) {
								if (storage) {
									storage.discard();
									delete player.storage.gzwuyan2;
								}
							}
						},
						trigger: { global: 'useCard' },
						forced: true,
						filter: function (event, player) {
							return player.getEnemies().contains(event.player) &&
								get.type(event.card, 'trick') == 'trick' && get.color(event.card) == get.color(player.storage.gzwuyan2);
						},
						mark: true,
						content: function () {
							'step 0'
							game.delayx();
							player.addExpose(0.1);
							trigger.player.addExpose(0.1);
							'step 1'
							player.showCards(player.storage.gzwuyan2, get.translation(player) + '发动了【无言】');
							'step 2'
							player.removeSkill('gzwuyan2');
							trigger.cancel();
							player.draw(2);
						},
						group: 'gzwuyan3'
					},
					gzwuyan3: {
						trigger: { player: 'phaseBegin' },
						forced: true,
						content: function () {
							player.$throw(player.storage.gzwuyan2);
							game.log(player, '弃置了', player.storage.gzwuyan2);
							player.removeSkill('gzwuyan2');
						}
					},
					gzliangzhu: {
						audio: "liangzhu",
						mainSkill: true,
						init: function (player) {
							if (player.checkMainSkill('gzliangzhu')) {
								player.removeMaxHp();
							}
						},
						trigger: { global: 'recoverAfter' },
						direct: true,
						filter: function (event, player) {
							return _status.currentPhase == event.player;
						},
						content: function () {
							'step 0'
							if (player == trigger.player) {
								player.chooseControl('摸一张', '摸两张', 'cancel2', function () {
									return '摸两张';
								}).set('prompt', get.prompt('gzliangzhu'));
								event.single = true;
							}
							else {
								player.chooseTarget(get.prompt('gzliangzhu'), function (card, player, target) {
									return target == _status.event.player || target == _status.event.target;
								}).set('target', trigger.player).set('ai', function (target) {
									var player = _status.event.player;
									if (player == target) return 1;
									return get.attitude(player, target) - 1.5;
								});
							}
							'step 1'
							if (event.single) {
								if (result.control != 'cancel2') {
									player.logSkill('gzliangzhu', player);
									if (result.control == '摸一张') {
										player.draw();
									}
									else {
										player.draw(2);
										player.storage.gzliangzhu = player;
									}
								}
							}
							else if (result.bool) {
								var target = result.targets[0];
								player.logSkill('gzliangzhu', target);
								if (target == player) {
									target.draw();
								}
								else {
									target.draw(2);
									if (target.storage.gzliangzhu) {
										target.storage.gzliangzhu.add(player);
									}
									else {
										target.storage.gzliangzhu = [player];
									}
								}
							}
						},
						ai: {
							expose: 0.1
						}
					},
					gzgongji: {
						audio: "xiaoji",
						viceSkill: true,
						init: function (player) { player.checkViceSkill('gzgongji') },
						trigger: { player: 'loseEnd' },
						frequent: true,
						filter: function (event, player) {
							for (var i = 0; i < event.cards.length; i++) {
								if (event.cards[i].original == 'e') return true;
							}
							return false;
						},
						content: function () {
							var num = 0;
							for (var i = 0; i < trigger.cards.length; i++) {
								if (trigger.cards[i].original == 'e') num += 2;
							}
							player.draw(num);
						},
						ai: {
							noe: true,
							reverseEquip: true,
							effect: {
								target: function (card, player, target, current) {
									if (get.type(card) == 'equip') return [1, 3];
								}
							}
						}
					},
					gzquanji: {
						audio: "quanji",
						trigger: { player: 'damageEnd' },
						frequent: true,
						locked: false,
						notemp: true,
						init: function (player) {
							player.storage.gzquanji = [];
						},
						filter: function (event) {
							return event.num > 0;
						},
						content: function () {
							"step 0"
							player.draw(trigger.num);
							"step 1"
							if (player.countCards('he')) {
								player.chooseCard('将' + get.cnNumber(trigger.num) + '张手牌置于武将牌上作为“权”', trigger.num, true);
							}
							else {
								event.finish();
							}
							"step 2"
							if (result.cards && result.cards.length) {
								player.lose(result.cards, ui.special, 'toStorage');
								player.storage.gzquanji = player.storage.gzquanji.concat(result.cards);
								player.syncStorage('gzquanji');
								player.markSkill('gzquanji');
								game.log(player, '将', result.cards, '置于武将牌上作为“权”');
							}
						},
						intro: {
							content: 'cards'
						},
						mod: {
							maxHandcard: function (player, num) {
								return num + player.storage.gzquanji.length;
							}
						},
						ai: {
							maixie: true,
							maixie_hp: true,
							threaten: 0.8,
							effect: {
								target: function (card, player, target) {
									if (get.tag(card, 'damage')) {
										if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
										if (!target.hasFriend()) return;
										if (target.hp >= 4) return [0.5, get.tag(card, 'damage') * 2];
										if (!target.hasSkill('paiyi') && target.hp > 1) return [0.5, get.tag(card, 'damage') * 1.5];
										if (target.hp == 3) return [0.5, get.tag(card, 'damage') * 1.5];
										if (target.hp == 2) return [1, get.tag(card, 'damage') * 0.5];
									}
								}
							}
						}
					},
					gzpaiyi: {
						mainSkill: true,
						audio: "paiyi",
						init: function (player) {
							if (player.checkMainSkill('gzpaiyi')) {
								player.removeMaxHp();
							}
						},
						enable: 'phaseUse',
						usable: 1,
						audio: 2,
						filterTarget: true,
						filter: function (event, player) {
							return player.storage.gzquanji.length > 0;
						},
						content: function () {
							"step 0"
							player.chooseCardButton(player.storage.gzquanji, true);
							"step 1"
							var card = result.links[0];
							card.discard();
							player.$throw(card);
							player.storage.gzquanji.remove(card);
							if (!player.storage.gzquanji.length) {
								player.unmarkSkill('gzquanji');
							}
							else {
								player.markSkill('gzquanji');
							}
							player.syncStorage('gzquanji');
							"step 2"
							target.draw(2);
							"step 3"
							if (target.countCards('h') > player.countCards('h')) {
								target.damage();
							}
						},
						ai: {
							order: 1,
							result: {
								target: function (player, target) {
									if (player != target) return 0;
									if (player.countCards('h') + 2 <= player.hp + player.storage.gzquanji.length) return 1;
									return 0;
								}
							}
						}
					},
					gzmouzuo: {
						viceSkill: true,
						init: function (player) { player.checkViceSkill('gzmouzuo') },
						enable: 'phaseUse',
						usable: 1,
						filter: function (event, player) { return player.storage.gzquanji.length > 0 },
						chooseButton: {
							dialog: function (event, player) {
								return ui.create.dialog('谋佐<div class="center text"></br></br>选择一张要置入弃牌堆的“权”</br></br></div>', player.storage.gzquanji, 'hidden');
							},
							backup: function (links, player) {
								return {
									filterCard: function () { return false },
									selectCard: -1,
									cards: links,
									discard: false,
									filterTarget: function (card, player, target) { return target != player },
									content: function () {
										player.draw();
										if (target.countCards('ej')) player.discardPlayerCard('谋佐<div class="center text"></br></br>弃置' + get.translation(target) + '场上一张牌</div>', target, 'ej', true);
									},
									onuse: function (result, player) {
										result.cards = lib.skill[result.skill].cards;
										var card = result.cards[0];
										player.$throw(card);
										player.storage.gzquanji.remove(card);
										ui.discardPile.appendChild(card);
										player.syncStorage('gzquanji');
										if (!player.storage.gzquanji.length) player.unmarkSkill('gzquanji');
										else player.updateMarks();
									},
									ai: {
										result: {
											target: function (player, target) {
												var att = get.attitude(player, target);
												var es = target.getCards('e');
												var js = target.getCards('j');
												var num = 0;
												if (att > 0) {
													if (js.length) {
														var jj = js[0].viewAs ? { name: js[0].viewAs } : js[0];
														if (js.length > 1 || get.effect(target, jj, target, player) < 0) return 2;
														num = -1;
													}
													if (target.getEquip('baiyin') && target.isDamaged() &&
														get.recoverEffect(target, player, player) > 0) {
														if (target.hp == 1 && !target.hujia) return 1.6;
														if (target.hp == 2) return 0.01;
													}
													if (es.length) num = -1;
													return num;
												}
												var noe = (es.length == 0 || target.hasSkillTag('noe'));
												var noe2 = (es.length == 1 && es[0].name == 'baiyin' && target.isDamaged());
												if (noe || noe2) {
													if (js.length) {
														for (var i = 0; i < js.length; i++) {
															var jj = js[i].viewAs ? { name: js[i].viewAs } : js[i];
															if (get.effect(target, jj, target, player) > 0) { num = 2; break; }
															num = -1;
														}
													}
												}
												return num;
											},
											player: function (player) {
												if (player.countCards('h') + 1 > player.hp + Math.ceil(player.storage.gzquanji.length / 2 - 0.5)) return 0;
												return 1;
											}
										},
									}
								}
							},
							prompt: function (links, player) {
								return '谋佐<div class="center text"></br></br>摸一张牌，然后弃置一名其他角色场上一张牌</div>'
							}
						},
						ai: {
							order: 6,
							threaten: 0.5,
							result: {
								player: function (player) {
									if (player.countCards('h') + 1 > player.hp + Math.ceil(player.storage.gzquanji.length / 2 - 0.5)) return 0;
									return player.tempSkills.gzmouzuo4 ? 0 : 1;
								}
							},
						}
					},
					oldgzshouxi: {
						unique: true,
						forceunique: true,
						audio: ["shouxi", 2],
						enable: "phaseUse",
						filterCard: {
							color: "black",
						},
						position: "he",
						check: function (card) {
							return 5 - get.value(card);
						},
						filter: function (event, player) {
							for (var i = 0; i < ui.discardPile.childElementCount; i++) {
								if (ui.discardPile.childNodes[i].name == 'yuxi') return true;
							}
							return game.hasPlayer(function (current) {
								return current != player && current.countCards('ej', 'yuxi');
							});
						},
						content: function () {
							var list = [];
							for (var i = 0; i < ui.discardPile.childElementCount; i++) {
								if (ui.discardPile.childNodes[i].name == 'yuxi') {
									list.add(ui.discardPile.childNodes[i]);
								}
							}
							game.countPlayer(function (current) {
								if (current != player) {
									var ej = current.getCards('ej', 'yuxi');
									if (ej.length) {
										list.addArray(ej);
									}
								}
							});
							if (list.length) {
								var card = list.randomGet();
								var owner = get.owner(card);
								if (owner) {
									player.gain(card, owner);
									owner.$give(card, player);
									player.line(owner, 'green');
								}
								else {
									player.gain(card, 'log');
									player.$draw(card);
								}
							}
						},
						ai: {
							order: 8.5,
							result: {
								player: 1,
							},
						},
					},
					"gzshouxi": {
						audio: "shouxi",
						trigger: {
							target: "useCardToBefore",
						},
						forced: true,
						priority: 15,
						check: function (event, player) {
							return get.effect(event.target, event.card, event.player, player) < 0;
						},
						filter: function (event, player) {
							return player.countCards('e', function (card) {
								return card.name == 'yuxi';
							}) && (event.card.name == 'shunshou' || event.card.name == 'guohe');
						},
						content: function () {
							trigger.cancel();
						},
					},
					"gzzhixi": {
						audio: "ext:国战补充:2",
						trigger: {
							player: "loseAfter",
						},
						filter: function (event, player) {
							return (event.hs && event.hs.length > 0) || (event.es && event.es.length > 0);
						},
						content: function () {
							"step 0"
							var cs = trigger.cards.slice(0);
							player.showCards(cs, "掷玺");
							if (player.hasSkill("gzzhixi_a")) player.storage.gzzhixi_a.addArray(trigger.cards);
							else {
								player.storage.gzzhixi_a = [];
								player.storage.gzzhixi_a.addArray(trigger.cards);
								player.addTempSkill("gzzhixi_a");
								player.markSkill("gzzhixi_a");
							}
							player.syncStorage("gzzhixi_a");
						},
						global: "gzzhixi_b",
						subSkill: {
							a: {
								marktext: "玺",
								intro: {
									content: "cards",
								},
								sub: true,
							},
							b: {
								mod: {
									cardEnabled: function (card, player) {
										if (player.hasSkill('gzzhixi_a')) return;
										var n = [], players = game.filterPlayer();
										for (var i = 0; i < players.length; i++) {
											if (players[i].hasSkill('gzzhixi_a')) {
												for (var j = 0; j < players[i].storage.gzzhixi_a.length; j++) {
													n.add(players[i].storage.gzzhixi_a[j].name);
												}
											}
										}
										if (n.contains(card.name)) return false;
									},
									cardUsable: function (card, player) {
										if (player.hasSkill('gzzhixi_a')) return;
										var n = [], players = game.filterPlayer();
										for (var i = 0; i < players.length; i++) {
											if (players[i].hasSkill('gzzhixi_a')) {
												for (var j = 0; j < players[i].storage.gzzhixi_a.length; j++) {
													n.add(players[i].storage.gzzhixi_a[j].name);
												}
											}
										}
										if (n.contains(card.name)) return false;
									},
									cardSavable: function (card, player) {
										if (player.hasSkill('gzzhixi_a')) return;
										var n = [], players = game.filterPlayer();
										for (var i = 0; i < players.length; i++) {
											if (players[i].hasSkill('gzzhixi_a')) {
												for (var j = 0; j < players[i].storage.gzzhixi_a.length; j++) {
													n.add(players[i].storage.gzzhixi_a[j].name);
												}
											}
										}
										if (n.contains(card.name)) return false;
									},
								},
								sub: true,
							},
						},
					},

				},
				translate: {
					"gzdangkou": "荡寇",
					"gzdangkou_info": "出牌阶段开始时，你可以横置至多2名角色的武将牌",
					gzlihuo: '疠火',
					gzlihuo_info: '当你声明使用普通【杀】时，你可以将此【杀】改为火【杀】。若以此法使用的【杀】造成了伤害，则此【杀】结算后你失去1点体力；你使用火【杀】选择目标后，可以额外指定一个目标并横置所有目标角色。',
					gzqingxi: '倾袭',
					gzqingxi_info: '结束阶段，你可以摸一张牌并可以使用之。',
					"gzqianju": "千驹",
					"gzqianju_info": "你死亡时，可以指定一名其他角色获得技能“马术”直到游戏结束",
					"gzfengpo": "凤魄",
					"gzfengpo_info": "当你对距离为1的角色使用【杀】造成了伤害后，你可以弃置一张手牌执行以下效果：基本牌：你摸一张牌；装备牌：令该伤害+1；锦囊牌：你可令目标角色弃置至多X张牌（X为目标角色当前的体力值且至多为2）。",
					gzlianji: '连计',
					gzlianji_info: '每回合限一次，当你使用卡牌造成一次伤害后，你可以进行一次判定，若结果为黑色，你收回此牌。',
					gzmoucheng: '谋逞',
					"gzmoucheng_info": "限定技，出牌阶段，你可以选择一名角色，令其摸3张牌，随后攻击范围内含有该角色的所有角色视为对其出1张杀,然后你可以选择变更副将。",
					gzmoukui: '谋溃',
					gzmoukui2: '谋溃',
					gzmoukui_info: '当你使用【杀】指定目标后，你可以选择一项：摸一张牌，或弃置其一张牌。若如此做，当此【杀】被【闪】抵消时，你弃置一张牌。',
					gzhuxiao: '虎啸',
					gzhuxiao_info: '出牌阶段限一次，你可以将一张红色牌当作火杀使用，此杀只能用与之花色相同的闪响应；若此杀造成了伤害，你本回合可以额外使用一张杀。',
					"gzxueji": "雪恨",
					gzxueji_info: '主将技，你计算体力值时减少一个单独的阴阳鱼；出牌阶段限一次，你可以弃置一张红色牌并选择你攻击范围内的至多X名角色（X为你已损失的体力值），然后你对这些角色各造成1点伤害，这些角色各摸一张牌。',
					"gzjinjiu": "禁酒",
					"gzjinjiu_info": "锁定技，濒死阶段限一次，在你的回合内进入濒死状态的角色，只能被【桃】救回，然后使用【桃】的角色须弃置一张红色牌，否则受到你造成的一点伤害。",
					"gzsidi": "司敌",
					"gzsidi_info": "锁定技，你的装备牌不占用手牌上限；结束阶段，你将手牌中的每张装备牌转化为两张随机基本牌。",
					gzhuashen: '化身',
					gzhuashen_info: '准备阶段开始时，若你的“化身”不足两张，则你可以观看剩余武将牌堆中的五张牌，然后扣置其中至多两张武将牌在你的武将旁，称为“化身”；若“化身”有两张以上，则你可以用剩余武将牌堆顶的一张牌替换一张“化身”。你可以于相应的时机明置并发动“化身”的一个技能，技能结算完成后将该“化身”放回剩余武将牌堆。你每个时机只能发动一张“化身”的技能，且不能发动带有技能类型的技能（锁定技、限定技等）。',
					gzxinsheng: '新生',
					gzxinsheng_info: '当你受到伤害后，你可以从剩余武将牌堆中扣置一张牌加入到“化身”牌中。',

					"gzshangao": "禅诰",
					"gzshangao_info": "限定技，当你处于濒死状态时，你可以令一名其他角色获得“天命”，然后失去“天命”。若如此做，你回复2点体力并摸2张牌。",
					"gztianming": "天命",
					"gztianming_info": "出牌阶段限一次，你可以与一名其他角色拼点。以此法赢的角色选择一项：1.使用一张拼点牌；2.流失1点体力。",
					"gzluoying": "落英",
					"gzluoying_info": "你的回合外，当你的梅花手牌进入弃牌堆或你的装备区失去牌时，你可以进行一次判定，若为梅花，你可以对一名角色造成一点雷电属性伤害",
					"gzzuifu": "醉赋",
					"gzzuifu_info": "当你受到伤害后，你可以进行一次判定：黑桃:你和一名角色失去一点体力；草花:你令一名角色摸两张牌；红桃:你视为对一名角色使用一张【乐不思蜀】；方块:你可以横置最多两名角色的武将牌。",
					"gzbifa": "笔伐",
					"gzbifa_info": "准备阶段，你可以展示一张【杀】，然后令一名其他角色选择一项：1.展示一张【闪】；2.弃置1张手牌。",
					"gzsongci": "颂词",
					"gzsongci_info": "当你受到伤害后，你可以令伤害来源摸1张牌，然后获得其1张牌。",
					"gzduliang": "督粮",
					"gzduliang_info": "结束阶段，你可以将一张黑色基本牌当【兵粮寸断】置于你判定区里，然后摸2张牌。",
					"gzfulin": "腹鳞",
					"gzfulin_info": "当你受到伤害后，若你判定区里有牌，你可以与伤害来源交换判定区的所有牌。",
					"gzzhuikong": "惴恐",
					"gzzhuikong_info": "当你成为牌的目标后，你可以弃置至少1张牌。当此牌结算后，你可以摸1张牌。",
					"gzqiuyuan": "求援",
					"gzqiuyuan_info": "回合外，若你没有手牌，其他角色可以替你使用或打出一张基本牌。",
					"gzhuaiju": "怀橘",
					"gzhuaiju_info": "结束阶段，你可以交给一名其他角色至少2张红色牌，然后摸3张牌。",
					"gzzhenglun": "整论",
					"gzzhenglun_info": "当你每回合第X次使用牌时，你可以观看牌堆顶的第X张牌，然后可以弃置之。",
					"gzhongde": "弘德",
					"gzhongde_info": "每个角色回合限2次，当你一次获得或失去至少两张牌后，你可以令一名其他角色摸一张牌。",
					"gzdingpan": "定判",
					"gzdingpan_info": "出牌阶段限一次，你可以让一名装备区里有牌的其他角色摸一张牌并选择一项:1.执行军令并获得自己装备区所有牌；2.令你获得一张其装备区的牌。",
					"gzbenxi": "奔袭",
					"gzbenxi_info": "你可以将X张手牌当基本牌使用或打出。若为使用，你可以指定至多X名角色为目标（X为你当前体力≥1）。",

					gzkaikang: '慷忾',
					gzkaikang_info: '当你攻击范围内的一名其他角色使用【杀】指定另一名其他角色为目标时，你可以将此【杀】的目标改为你。若如此做，此【杀】结算完成后，你弃置该角色的一张牌。',
					gzmingzhe: '明哲',
					gzmingzhe_info: '你的回合外，每当你因使用、打出或弃置而失去一张红桃牌时，你可以摸一张牌。',
					gzshanxi: '闪袭',
					gzshanxi_info: '出牌阶段开始时，你可以摸两张牌。若如此做，你本回合的手牌上限改为X（X为你此阶段造成的伤害点数之和）。',
					gzhongyuan: '弘援',
					gzhongyuan_info: '摸牌阶段，你可以少摸一张牌并指定至多两名其他角色。若如此做，这些角色各摸一张牌。',
					"gzyongzhan": "绮胄",
					"gzyongzhan_info": "当你没有手牌时，你可以将装备区里的一张牌当作【杀】、【闪】、【桃】或【酒】使用或打出",
					gzfencheng: '焚城',
					gzfencheng_info: '限定技。出牌阶段，你可以令所有其他角色各选择一项：弃置至少X张牌(X为该角色的上家以此法弃置牌的数量+1)；或受到你对其造成的1点火焰伤害。',
					gzzhuiyi: '追忆',
					gzzhuiyi_info: '你死亡时，可以令一名其他角色（杀死你的角色除外）摸2张牌，然后令其回复1点体力。',
					gzanxu: '安恤',
					gzanxu_info: '出牌阶段限一次，你可以选择两名手牌数不同的其他角色，令其中手牌少的角色获得手牌多的角色的一张手牌并展示之。然后若此牌不为黑色，则你摸一张牌。',
					"gzzhichi1": "智迟",
					"gzzhichi": "智迟",
					"gzzhichi_info": "摸牌阶段，你可以少摸一张牌，然后回合结束阶段你摸2张牌",

					gzmieji: '灭计',
					gzmieji_info: '出牌阶段限一次，你可以展示一张黑色锦囊牌并将之置于牌堆顶，然后令有手牌的一名其他角色选择一项：弃置一张锦囊牌；或弃置两张非锦囊牌',
					"gzqirang": "祈禳",
					"gzqirang_info": "每当你使用了一张装备牌，你可以亮出牌堆顶3张牌并获得其中的锦囊牌，然后将余下的牌置于牌堆底",
					"gzduwu1": "黩武",
					"gzduwu": "黩武",
					"gzduwu_info": "出牌阶段限一次，你可以将所有手牌（至少一张）当做【杀】使用，若此【杀】造成伤害，你摸X张牌（X为你已损失的体力值）",
					gzhuanshi: '缓释',
					gzhuanshi_info: '其他角色的弃牌阶段结束时，你可以弃置一张手牌，令其弃置一张牌，若该角色弃置的牌为装备牌，你将之交给除该角色外的一名角色。',
					gzquanji: '权计',
					gzquanji_info: '当你受到伤害后，你可以摸一张牌，若如此做，你将一张牌置于武将牌上，称为“权”。锁定技，你的手牌上限+X（X为你“权”的数量的一半，向上取整）。',
					gzjiancai: '荐才',
					gzjiancai_info: '出牌阶段，你可以移除此武将牌并选择一名角色，然后其获得技能〖荐言〗，若你选择的目标角色不是自己，则你摸一张牌并回复一点体力。',
					gzjianyan: '荐言',
					gzjianyan_info: '出牌阶段限一次，你可以声明一种牌的类别，并亮出牌库中第一张符合你声明的牌，然后你令一名男性角色获得此牌。',
					gzwuyan: '无言',
					gzwuyan2: '无言',
					gzwuyan3: '无言',
					gzwuyan_info: '结束阶段，你可以将一张手牌背面朝上置于你的武将牌上；当一名敌方角色使用一张与之颜色相同的锦囊牌时，你展示并移去此牌，取消锦囊的效果，然后摸一张牌；准备阶段，你移去武将牌上的“缄默”牌',
					gzliangzhu: '良助',
					gzliangzhu_info: '主将技，你计算体力值时减少一个单独的阴阳鱼；当一名角色于其出牌阶段内回复体力时，你可以选择一项：1、摸一张牌；2、令该角色摸两张牌。',
					gzgongji: '弓姬',
					gzgongji_info: '副将技，每当你失去一张装备牌，可以摸两张牌。',
					gzpaiyi: '排异',
					gzpaiyi_info: '主将技，你计算体力值时减少一个单独的阴阳鱼；出牌阶段限一次，你可以移去一张“权”并选择一名角色，令其摸两张牌，然后若其手牌多于你，你对其造成1伤害。',
					gzmouzuo: '谋佐',
					gzmouzuo_info: '副将技，出牌阶段限一次，你可以将一张“权”置入弃牌堆并选择一名其他角色，若如此做，你摸一张牌，然后弃置其场上一张牌。',
					gzmouzuo_backup: '谋佐',
					oldgzshouxi: "守玺",
					"oldgzshouxi_info": "出牌阶段限一次，你可以弃置一张黑色牌，获得弃牌堆里或场上的一张【玉玺】",
					"gzshouxi": "守玺",
					"gzshouxi_info": "锁定技，当你成为顺手牵羊或过河拆桥的目标时，若你装备区有玉玺，则取消之",
					gzzhixi: "掷玺",
					"gzzhixi_info": "当你失去牌后，你可以展示之。若如此做，其他角色不能使用与之相同名称的牌，直至回合结束。",
				},
			},
			intro: "<li>本扩展为国战模式专属扩展，内含谋攻篇、军形篇、兵势篇、虚实篇、军争篇、怀旧篇六篇，整体强度介于官方变包和权包之间，旨在增加国战可玩性。<li><span class=\"bluetext\">特别感谢大佬“永远的萌新”对兵势篇的帮助，兵势篇代码（除曹植外）基本搬运自《耀世三国②》，仅对部分技能强度略作调整</a><li><span class=\"yellowtext\">十人身份代码搬自《扩展ol》，删除本扩展前请将人数调回8人</a><li>变包旧左慈提取自1.9.57.1版本，<span class=\"greentext\">钟会副将技谋佐搬自《权·酱拌面》、步骘定判的设计和代码改自于联机群“夜无邪”</a><li>变包旧左慈默认开启（可与当前左慈共存），可在“武将→国战武将→怀旧篇”关闭<li>更新日期：2020-3-2<li><span class=\"goldtext\">本扩展武将相关说明及组合推荐：<a href=\"https://tieba.baidu.com/p/6507295274?\">点击这里</a>",
			author: "我叫竹小二",
			diskURL: "",
			forumURL: "",
			version: "无bug，含多人身份版",
		}, files: { "character": [], "card": [], "skill": [] }
	}
})
