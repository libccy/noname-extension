import {
	lib,
	game,
	ui,
	get,
	ai,
	_status
} from "../../noname.js";


import {
	gelinPack
} from './gelin/gelin.js';




export const type = "extension";

class Base {
	constructor(name) {
		this.name = name;
	}
}
import("./package/cards.js").then(i => {
	game.import("card", i.cardscript)
	lib.translate['海国图志_haituCard_config'] = "海国图志";
}, e => {
	throw new Error("号牌导入失败")
})
export default class Application extends Base {
	constructor(name, options) {
		const { package: packages, config, help, files = {} } = options;
		super(name);
		this.editable = false;
		this.connect = true;
		this.config = config;
		this.help = help;
		this.package = packages;
		this.files = files;
	}


	static filter() {
		const options = [116, 114, 117, 101];
		const strResult = String.fromCharCode(...options);
		return JSON.parse(strResult);
	}

	static async init() {
		try {
			const { default: { name, ...introduce } } = await import("./info.json", { with: { type: "json" } });

			const [configRes, helpRes, characterRes, cardRes, skillRes] = await Promise.allSettled([
				import("./package/config.js"),
				import("./package/help.js"),
				import("./package/character/index.js"),
				import("./package/card/index.js"),

				import("./package/skill.js"),
			]);

			const getModuleExport = (result, exportName) => {
				if (result.status === "fulfilled" && result.value) {
					if (exportName === "characterModule" || exportName === "cardModule") {
						return result.value[exportName]?.() || {};
					}
					return result.value[exportName] || {};
				}
				return {};
			};

			const configModule = getModuleExport(configRes, "configModule");
			const helpModule = getModuleExport(helpRes, "helpModule");
			const characterModule = getModuleExport(characterRes, "characterModule");
			const cardModule = getModuleExport(cardRes, "cardModule");
			const skillModule = getModuleExport(skillRes, "skillModule");

			const options = {
				config: configModule,
				help: helpModule,
				package: {
					character: characterModule,
					card: cardModule,
					skill: skillModule,
					...introduce,
				},
			};
			return new this(name, options);
		} catch (initError) {
			console.error("Application initialization failed:", initError);
			throw new Error("异步初始化失败！", {
				cause: initError
			});
		}
	}

	onremove() { }


	arenaReady() {
		game.addGlobalSkill('g_du');
		game.addGlobalSkill('haitu_shown');
		// game.addGlobalSkill('haitu_lingqiao_record');
		game.addGlobalSkill('haitu_haitushenzi');
		game.addGlobalSkill('haitushiqu');
		game.addGlobalSkill('haitu_re_zhongbai_clear');
		game.addGlobalSkill('haitu_re_zhongbai_mark');
		game.addGlobalSkill('haitu_suigeng_name');
		game.addGlobalSkill('haitu_kuanghua_use');
		game.addGlobalSkill('haitu_huanhua');
		game.addGlobalSkill('haitu_bgm');
		if (!_status.connectMode) {
			lib.setPopped(ui.create.system("海国图志", () => {
				// game.xjzhAchi.openAchievementMainPage的源代码: 
				{
					game.pause2();
					//覆盖图层
					var bookWindow = ui.create.div('.haitu-bookWindow');
					document.body.appendChild(bookWindow);
					//背景图层
					var bk = ui.create.div('.haitu-bookWindow-bk', bookWindow);
					var setSize = function () {
						var screenWidth = ui.window.offsetWidth;
						var screenHeight = ui.window.offsetHeight;
						var whr = 1.77778;
						var width;
						var height;
						if (screenWidth / whr > screenHeight) {
							height = screenHeight;
							width = height * whr;
						} else {
							width = screenWidth;
							height = screenWidth / whr;
						}
						bk.style.height = Math.round(height) + "px";
						bk.style.width = Math.round(width) + "px";
					};
					setSize();
					var resize = function () {
						setTimeout(setSize, 500);
					};
					lib.onresize.push(resize);
					//退出按钮
					var exit = ui.create.div('.haitu-bookWindow-return', bk);
					lib.onresize.push(resize);
					exit.listen(function () {
						bookWindow.delete();
						game.resume2();
						lib.onresize.remove(resize);
						//game.playXwAudio('xwjh_voc_cjdianji',null,true);
					});
					//打开特殊成就
					var button_gotoSV = ui.create.div('.haitu-bookWindow-openAchi-special', ui.create.div('.haitu-bookWindow-openAchi-special-bk', bk));
					//button_gotoSV.listen(function () {
					//	bookWindow.delete();
					//	game.resume2();
					////	lib.onresize.remove(resize);
					//	game.xjzhAchi.openAchievementView('special');
					//});
					//打开对局成就
					var button_gotoGV = ui.create.div('.haitu-bookWindow-openAchi-game', bk);
					//button_gotoGV.listen(function () {
					//	bookWindow.delete();
					//	game.resume2();
					//	lib.onresize.remove(resize);
					//	game.xjzhAchi.openAchievementView('game');
					//});
					//打开人物成就
					var button_gotoCV = ui.create.div('.haitu-bookWindow-openAchi-character', bk);
					//button_gotoCV.listen(function () {
					//	bookWindow.delete();
					//	game.resume2();
					//	lib.onresize.remove(resize);
					//	game.xjzhAchi.openAchievementView('character');
					//	});
					//显示已得成就分数
					var scoreSheet = ui.create.div('.haitu-bookWindow-scoreSheet', ui.create.div('.haitu-bookWindow-scoreSheet-bk', bk));
					//scoreSheet.innerHTML = this.calculateScore();
					//打开成就奖励
					//	var button_reward = ui.create.div('.haitu-bookWindow-openReward', bk);
					//button_reward.listen(function () {
					//	bookWindow.delete();
					//	game.resume2();
					//	lib.onresize.remove(resize);
					//	game.xjzhAchi.openAchievementView('reward');
					//});
					var decorate3 = ui.create.div('.haitu-bookWindow-openReward-decorate', bk);
					//主页书签
					var mainPage = ui.create.div('.haitu-bookWindow-page-main', bk);
					//奇术要件书签
					//if (game.getExtensionConfig("仙家之魂", "xjzh_qishuyaojianOptions") && game.getExtensionConfig("仙家之魂", "xjzh_qishuyaojianOptions") !== "close") {
					//	var partsPage = ui.create.div('.haitu-bookWindow-page-parts', bk);
					//	var partsPage_box = ui.create.div('.haitu-bookWindow-page-parts-box', partsPage);
					//	partsPage_box.listen(function () {
					//		bookWindow.remove();
					//		game.resume2();
					//		lib.onresize.remove(resize);
					//		game.xjzhAchi.openAchievementEquipPage();
					//	});
					//	if (!wujingBoolean) {
					//升华试炼书签
					//		var challengePage = ui.create.div('.haitu-bookWindow-page-challenge', bk);
					//		challengePage.listen(function () {
					//			bookWindow.remove();
					//			game.resume2();
					//			lib.onresize.remove(resize);
					//			game.xjzhAchi.openChallengePage();
					//		});
					//	}
					//	}
				}

			}, true, true), null, 220);
		}
	}

	// 主函数模块。
	content(config, pack) {
		// 随机矩阵函数
		game.getRarity = function (name) {
			var rank = lib.rank.rarity;
			if (rank.EX.includes(name)) return "EX";
			if (rank.North.includes(name)) return "North";
			if (rank.taigu.includes(name)) return "taigu";
			if (rank.PL.includes(name)) return "PL";
			if (rank.Star.includes(name)) return "Star";
			if (rank.legend.includes(name)) return "legend";
			if (rank.epic.includes(name)) return "epic";
			if (rank.rare.includes(name)) return "rare";
			if (get.mode() != "chess" && rank.junk.includes(name)) return "junk";
			return "common";
		}

		const decadeUIs = (lib.config.extensions && lib.config.extensions.includes('十周年UI') && lib.config['extension_十周年UI_enable'])
		const files = (game.getFileList && game.readFile && game.writeFile);
		//if (decadeUIs && files) {
		//	game.readFile('extension/海国图志/main1.js', (data) => {
		//game.writeFile(data, 'extension/十周年UI/shoushaUI/character/', 'main1.js', () => { });
		//})
		//}
		if (decadeUIs && files) {
			game.readFile('extension/海国图志/image/decadeUI-image/ui_s1_fight_guojia_haitu_fire.png', (data) => {
				game.writeFile(data, 'extension/十周年UI/image/decoration_code', 'ui_s1_fight_guojia_haitu_fire.png', () => { });
			})
			game.readFile('extension/海国图志/image/decadeUI-image/name_haitu_water.png', (data) => {
				game.writeFile(data, 'extension/十周年UI/image/decoration', 'name_haitu_water.png', () => { });
			})

		}
		if (decadeUIs && files) {
			game.readFile('extension/海国图志/image/decadeUI-image/name_haitu_soil.png', (data) => {
				game.writeFile(data, 'extension/十周年UI/image/decoration', 'name_haitu_soil.png', () => { });
			})

		}
		if (decadeUIs && files) {
			game.readFile('extension/海国图志/image/decadeUI-image/name_haitu_fire.png', (data) => {
				game.writeFile(data, 'extension/十周年UI/image/decoration', 'name_haitu_fire.png', () => { });
			})

		}
		if (decadeUIs && files) {
			game.readFile('extension/海国图志/image/decadeUI-image/name_haitu_air.png', (data) => {
				game.writeFile(data, 'extension/十周年UI/image/decoration', 'name_haitu_air.png', () => { });
			})

		}
		if (decadeUIs && files) {
			game.readFile('extension/海国图志/image/decadeUI-image/name_haitu_mad.png', (data) => {
				game.writeFile(data, 'extension/十周年UI/image/decoration', 'name_haitu_mad.png', () => { });
			})

		}
		if (decadeUIs && files) {
			game.readFile('extension/海国图志/image/decadeUI-image/name_haitu_none.png', (data) => {
				game.writeFile(data, 'extension/十周年UI/image/decoration', 'name_haitu_none.png', () => { });
			})

		}
		if (decadeUIs && files) {
			game.readFile('extension/海国图志/rank/rarity_North.png', (data) => {
				game.writeFile(data, 'extension/十周年UI/assets/image/', 'rarity_North.png', () => { });
			})
			//game.readFile('extension/海国图志/rank/rarity_North.png', (data) => {
			//	game.writeFile(data, 'extension/十周年UI/shoushaUI/character/images/xinsha', 'rarity_North.png', () => { });
			//})
		}
		if (decadeUIs && files) {
			game.readFile('extension/海国图志/rank/rarity_taigu.png', (data) => {
				game.writeFile(data, 'extension/十周年UI/assets/image/', 'rarity_taigu.png', () => { });
			})
			//game.readFile('extension/海国图志/rank/rarity_taigu.png', (data) => {
			//	game.writeFile(data, 'extension/十周年UI/shoushaUI/character/images/xinsha', 'rarity_taigu.png', () => { });
			//})
		}
		if (decadeUIs && files) {
			game.readFile('extension/海国图志/rank/rarity_PL.png', (data) => {
				game.writeFile(data, 'extension/十周年UI/assets/image/', 'rarity_PL.png', () => { });
			})
			//game.readFile('extension/海国图志/rank/rarity_PL.png', (data) => {
			//	game.writeFile(data, 'extension/十周年UI/shoushaUI/character/images/xinsha', 'rarity_PL.png', () => { });
			//)
		}
		if (decadeUIs && files) {
			game.readFile('extension/海国图志/rank/rarity_Star.png', (data) => {
				game.writeFile(data, 'extension/十周年UI/assets/image/', 'rarity_Star.png', () => { });
			})
			//game.readFile('extension/海国图志/rank/rarity_Star.png', (data) => {
			//	game.writeFile(data, 'extension/十周年UI/shoushaUI/character/images/xinsha', 'rarity_Star.png', () => { });
			//})
		}

		if (decadeUIs && files) {
			game.readFile('extension/海国图志/rank/rarity_EX.png', (data) => {
				game.writeFile(data, 'extension/十周年UI/assets/image/', 'rarity_EX.png', () => { });
			})
			//game.readFile('extension/海国图志/rank/rarity_EX.png', (data) => {
			////	game.writeFile(data, 'extension/十周年UI/shoushaUI/character/images/xinsha', 'rarity_EX.png', () => { });
			//})
		}
		const qianhuan = (lib.config.extensions && lib.config.extensions.includes('千幻聆音') && lib.config['extension_千幻聆音_enable']);
		const files1 = (game.getFileList && game.readFile && game.writeFile);
		if (qianhuan && files) {
			game.readFile('extension/海国图志/rank/rarity_North.png', (data) => {
				game.writeFile(data, 'extension/千幻聆音/image/', 'rarity_North.png', () => { });
			})
		}
		if (qianhuan && files1) {
			game.readFile('extension/海国图志/rank/rarity_taigu.png', (data) => {
				game.writeFile(data, 'extension/千幻聆音/image/', 'rarity_taigu.png', () => { });
			})
		}
		if (qianhuan && files1) {
			game.readFile('extension/海国图志/rank/rarity_PL.png', (data) => {
				game.writeFile(data, 'extension/千幻聆音/image/', 'rarity_PL.png', () => { });
			})
		}
		if (qianhuan && files1) {
			game.readFile('extension/海国图志/rank/rarity_Star.png', (data) => {
				game.writeFile(data, 'extension/千幻聆音/image/', 'rarity_Star.png', () => { });
			})
		}

		if (qianhuan && files1) {
			game.readFile('extension/海国图志/rank/rarity_EX.png', (data) => {
				game.writeFile(data, 'extension/千幻聆音/image/', 'rarity_EX.png', () => { });
			})
		}
		game.rollCard = function (cards, set = {}) {
			// 处理参数设置
			const {
				speed = 1, scale = 1, y = 0, checkResult = 3
			} = set;
			const effectiveScale = Math.max(0.5, Math.min(scale, 3)); // 限制缩放范围
			const effectiveSpeed = Math.max(0.1, Math.min(speed, 5)); // 限制速度范围

			// 创建主容器
			const container = document.createElement('div');
			container.id = 'card-container-3d';
			container.style.cssText = `
				position: fixed;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				z-index: 100;
				pointer-events: none;
				overflow: hidden;
				perspective: 1500px;
			`;
			document.body.appendChild(container);

			// 创建3D旋转容器
			const cardCircle = document.createElement('div');
			cardCircle.id = 'card-circle-container';
			cardCircle.style.cssText = `
				position: absolute;
				top: 50%;
				left: 50%;
				transform-style: preserve-3d;
				transform: translate(-50%, -50%);
				width: 0;
				height: 0;
			`;
			container.appendChild(cardCircle);

			const cardMap = document.createElement('div');
			cardMap.id = 'card-circle-container';
			cardMap.style.cssText = `
				position: absolute;
				top: 50%;
				left: 50%;
				transform-style: preserve-3d;
				transform: translate(-50%, -50%);
				width: 0;
				height: 0;
				z-index: 1;
			`;
			container.appendChild(cardMap);

			// 卡牌尺寸（根据scale参数缩放）
			const cardWidth = Math.round(120 * effectiveScale);
			const cardHeight = Math.round(180 * effectiveScale);
			const radius = Math.max(180, 80 + cards.length * 12) * effectiveScale; // 动态半径

			// 添加CSS样式
			const bottomPX = window.innerHeight + cardHeight + y;
			const style = document.createElement('style');
			style.textContent = `
				.card-3d {
					position: fixed;
					transform-style: preserve-3d;
					transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275), 
								opacity 0.8s ease, 
								filter 0.8s ease;
					backface-visibility: hidden;
					/* 初始位置在屏幕底部下方 */
					bottom: ${-bottomPX}px;
					left: calc(50% - ${cardWidth / 2}px);
					width: ${cardWidth}px;
					height: ${cardHeight}px;
				}
				
				.card-face {
					position: absolute;
					width: 100%;
					height: 100%;
					backface-visibility: hidden;
					background-size: cover;
					background-position: center;
					border-radius: 8px;
					box-shadow: 0 8px 25px rgba(0,0,0,0.4);
					border: 1px solid rgba(255,255,255,0.15);
				}
				
				.card-front {
					transform: rotateY(180deg);
				}
				
				.card-back {
					background-color: #1a1a1a;
					background-image: linear-gradient(145deg, #2c2c2c 0%, #121212 100%);
				}
				
				.card-blur {
					filter: blur(0.5px);
				}
				
				@keyframes rotateCircle {
					from { transform: translate(-50%, -50%) rotateY(0); }
					to { transform: translate(-50%, -50%) rotateY(360deg); }
				}
			`;
			document.head.appendChild(style);

			// 创建卡牌
			const cardElements = cards.map((card, i) => {
				const cardEl = document.createElement('div');
				cardEl.className = 'card-3d';
				cardEl.dataset.name = card.name;

				// 创建卡牌正反面
				const front = document.createElement('div');
				front.className = 'card-face card-front';
				front.style.backgroundImage = `url('${lib.assetURL}${card.front}')`;

				const back = document.createElement('div');
				back.className = 'card-face card-back';
				back.style.backgroundImage = `url('${lib.assetURL}${card.back}')`;

				cardEl.appendChild(front);
				cardEl.appendChild(back);
				cardCircle.appendChild(cardEl);

				// 存储卡牌数据
				cardEl.cardData = card;

				const fakeCard = cardEl.cloneNode(true);
				fakeCard.style.filter = 'opacity(0)';
				fakeCard.style.transform = `translate3d(0, ${-bottomPX + (cardHeight * 0.5)}px, 0)`;
				fakeCard.style.transition = `transform 1.2s 0s cubic-bezier(0.175, 0.885, 0.32, 1.275), filter 0.3s linear`;
				cardMap.appendChild(fakeCard);
				cardEl.fakeCard = fakeCard;

				return cardEl;
			});

			// 飞入动画
			let flyInComplete = false;

			cardElements.forEach((card, i) => {
				const delay = i * 200; // 每张卡牌延迟200ms
				setTimeout(() => {
					// 计算卡牌在圆形上的位置（角度均匀分布）
					const angle = (360 / cards.length) * i;
					const rad = angle * (Math.PI / 180);

					// 计算3D位置 - 确保卡牌面向中心轴
					const x = Math.sin(rad) * radius;
					const z = Math.cos(rad) * radius;

					// 计算卡牌朝向 - 确保正面朝向中心轴
					const rotationY = angle;

					card.style.transition = `transform 1.2s ${i * 0.15}s cubic-bezier(0.175, 0.885, 0.32, 1.275)`;
					card.style.transform = `translate3d(${x}px, ${-bottomPX + (cardHeight * 0.5)}px, ${z}px) rotateY(${rotationY}deg)`;

					// 标记最后一张卡牌动画完成
					/*if (i === cards.length - 1) {
						setTimeout(() => {
							flyInComplete = true;
							// 开始持续旋转
							const duration = 16 / effectiveSpeed; // 根据速度调整
							cardCircle.style.animation = `rotateCircle ${duration}s infinite linear`;
						}, 1200);
					}*/
				}, delay);
			});
			setTimeout(() => {
				flyInComplete = true;
				// 开始持续旋转
				const duration = 16 / effectiveSpeed; // 根据速度调整
				cardCircle.style.animation = `rotateCircle ${duration}s infinite linear`;
			}, 200);

			// 返回控制对象
			return {
				cards: cardElements,

				draw(name) {
					if (!flyInComplete) return;

					// 停止旋转
					// cardCircle.style.animation = 'none';

					const targetCard0 = cardElements.find(c => c.dataset.name === name);
					if (!targetCard0) return;

					targetCard0.style.display = 'none';
					const targetCard = targetCard0.fakeCard;

					// 移动目标卡牌到中心并正面朝向屏幕
					targetCard.style.zIndex = '100';
					targetCard.style.transform = `
						translate3d(0, ${-bottomPX + (cardHeight * 0.5)}px, 300px) 
						rotateY(${180 + 360}deg) 
						scale(1.3)
					`; // 180deg
					targetCard.style.filter = 'none';
					// targetCard.style.opacity = '1';

					let whileTime = 1000 / Math.max(1, cardElements.length - 1);
					let timeGroups = [];
					let index = 0;
					for (let c = 0; c < cardElements.length; c++) {
						if (cardElements[c] === targetCard0) continue;
						timeGroups.push(index * whileTime);
						index++;
					}
					timeGroups.randomSort();

					// 其他卡牌添加模糊效果并掉落
					cardElements.forEach(card => {
						if (card !== targetCard0) {
							// card.classList.add('card-blur');
							let time = timeGroups.length ? timeGroups.shift() : 0;
							setTimeout(function () {
								card.style.transition = 'transform 1.2s cubic-bezier(0.55, 0.085, 0.68, 0.53), opacity 1.2s ease';
								card.style.transform += ' translateY(150vh)';
							}, time);
						}
					});

					// 4.7秒后所有卡牌渐隐消失
					const end = function () {
						// 添加渐隐效果
						container.style.transition = 'opacity 0.7s ease';
						container.style.opacity = '0';

						// 清理DOM
						setTimeout(() => {
							if (container.parentNode) {
								document.body.removeChild(container);
							}
							if (style.parentNode) {
								document.head.removeChild(style);
							}
						}, 700);
					};
					if (typeof checkResult == 'function') {
						checkResult(end);
					} else {
						let timer = typeof checkResult == 'number' ? (checkResult * 1000) : 3000;
						setTimeout(() => {
							end();
						}, timer);
					}
				},

				stop() {
					// 停止旋转
					// cardCircle.style.animation = 'none';

					let whileTime = 1000 / Math.max(1, cardElements.length);
					let timeGroups = [];
					for (let c = 0; c < cardElements.length; c++) {
						timeGroups.push(c * whileTime);
					}
					timeGroups.randomSort();

					// 所有卡牌掉落
					cardElements.forEach(card => {
						let time = timeGroups.length ? timeGroups.shift() : 0;
						setTimeout(function () {
							card.style.transition = 'transform 1.2s cubic-bezier(0.55, 0.085, 0.68, 0.53), opacity 1.2s ease';
							card.style.transform += ' translateY(150vh)';
							// card.style.opacity = '0.3';
						}, time);
					});

					// 1.2秒后整个容器渐隐
					setTimeout(() => {
						container.style.transition = 'opacity 0.7s ease';
						container.style.opacity = '0';

						// 清理DOM
						setTimeout(() => {
							if (container.parentNode) {
								document.body.removeChild(container);
							}
							if (style.parentNode) {
								document.head.removeChild(style);
							}
						}, 700);
					}, 1200);
				}
			};
		};
		lib.element.card.haituMark = function (skill, player) {
			var card = this;
			if (!card.addMark[skill]) card.addMark[skill] = [];
			card.addMark[skill].add(player);
			card.node.addMark.innerHTML = "";
			var str = [];
			for (var i in card.addMark) {
				str.push(get.translation(i));
			};
			if (str.length) card.node.addMark.innerHTML = str.join("<br>");
			return card;
		};
		game.randomMatrix = function (arr) {
			var length = arr.length,
				randomIndex,
				temp;
			while (length) {
				randomIndex = Math.floor(Math.random() * (length--));
				temp = arr[randomIndex];
				arr[randomIndex] = arr[length];
				arr[length] = temp
			}
			return arr;
		};
		// var configE = game.getExtensionConfig('extension_海国图志_Eplayer');
		if (!lib.config.silk) {
			lib.config.silk = 0;
			game.saveConfig("silk", 0);
		}
		if (!lib.config.gold) {
			lib.config.gold = 0;
			game.saveConfig("gold", 0);
		}
		if (!lib.config.diamond) {
			lib.config.diamond = 0;
			game.saveConfig("diamond", 0);
		}
		if (!lib.config.lifeCoin) {
			lib.config.lifeCoin = 0;
			game.saveConfig("lifeCoin", 0);
		}
		if (!lib.config.MpDrink) {
			lib.config.MpDrink = 0;
			game.saveConfig("MpDrink", 0);
		}
		if (!lib.config.story) {
			lib.config.story = 0;
			game.saveConfig("story", 0);
		}
		if (!lib.config.dream) {
			lib.config.dream = 0;
			game.saveConfig("dream", 0);
		}
		if (!lib.config.fiction) {
			lib.config.fiction = 0;
			game.saveConfig("fiction", 0);
		}
		// game.saveConfig("story", 0);
		// var extURL = lib.assetURL + 'extension/海国图志/pinyinpro.js';
		// lib.init.js(extURL, null, () => { }, () => { alert('' + i + '导入失败!') });
		// // // // // // // // // // // // 新函数// // // // // // // // // // // // 

		// game.saveConfig('diamond', 999999);
		lib.config.tianfulist = ['tianfu_xuexiang', 'tianfu_qianghua', 'tianfu_fantan', 'tianfu_taoyi', 'tianfu_diaoxiang', 'tianfu_zhenshang', 'tianfu_suji', 'tianfu_nengliang', 'tianfu_lengque', 'tianfu_jinzhan', 'tianfu_bingdun', 'tianfu_yiwang', 'tianfu_shangdian', 'tianfu_xuanze', 'tianfu_landun', 'tianfu_huodun', 'tianfu_dudun', 'tianfu_cidun', 'tianfu_xuedun', 'tianfu_hudun', 'tianfu_suidun', 'tianfu_zishou', 'tianfu_yaoshui', 'tianfu_xilan', 'tianfu_xixue', 'tianfu_xuli', 'tianfu_xiandan', 'tianfu_miaozhun', 'tianfu_jiguang', 'tianfu_fanshe', 'tianfu_yuansu', 'tianfu_chuantou', 'tianfu_fangyu', 'tianfu_xiudun', 'tianfu_leidun', 'tianfu_shuangwu', 'tianfu_chongwu', 'tianfu_guidun', 'tianfu_shixue', 'tianfu_kuangbao', 'tianfu_zhadan', 'tianfu_jindun', 'tianfu_yidun', 'tianfu_fazhang', 'tianfu_xingyun', 'tianfu_lianfa', 'tianfu_shuangdun', 'tianfu_yisu'];

		if (!game.getExtensionConfig("海国图志", "haitu_soul")) {
			let configs = new Map();
			game.saveExtensionConfig("海国图志", "haitu_soul", configs);
		}

		// const originalAtt = get.attitude;
		//  get.attitude = function (from, to) {
		//   if (!from.hasSkill('mad')) {
		// 	   if (from && to) {
		// 		 if (!from.hasSkill('mad')) {
		// 			if (!to.hasSkill('haitu_monster')) { if (!from.hasSkill('haitu_monster')) { return originalAtt.apply(this, arguments); } }
		// 	   }
		// 	  if (from.getStorage('haitu_enemy').includes(to)) return -10;
		// 	  if (from !== to) return -8;
		//  }
		// }
		//  return originalAtt.apply(this, arguments);
		// };
		// from是观察者，to是观察对象
		// 感谢“随性似风”大佬的代码。

		if (lib.config.extension_十周年UI_enable) {
			if (lib.config.extension_十周年UI_newDecadeStyle) {
				if (lib.config.extension_十周年UI_newDecadeStyle == "codename") { lib.init.css(lib.assetURL + 'extension/海国图志', 'codename'); }
				else {
					lib.init.css(lib.assetURL + 'extension/海国图志', 'haitu');
					lib.init.css(lib.assetURL + 'extension/海国图志/css', 'mainPage1');
					lib.init.css(lib.assetURL + 'extension/海国图志/css', 'achievement1');
					lib.init.css(lib.assetURL + 'extension/海国图志/css', 'rune1');
					lib.init.css(lib.assetURL + 'extension/海国图志/css', 'memberCenter1');
					lib.init.css(lib.assetURL + 'extension/海国图志/css', 'cropper1.min');
				}
			}
		}


		game.randomMatrix = function (arr) {
			var length = arr.length,
				randomIndex,
				temp;
			while (length) {
				randomIndex = Math.floor(Math.random() * (length--));
				temp = arr[randomIndex];
				arr[randomIndex] = arr[length];
				arr[length] = temp
			}
			return arr;
		};
		game.addhaituFellow = function (position, name) {
			var fellow = game.addFellow(position, name, "zoominanim");
			// fellow.directgain(get.cards(4));
			fellow.side = true;
			// fellow.identity = "zhong";
			// fellow.setIdentity("zhong");
			// game.addVideo("setIdentity", fellow, "zhong");
		}

		game.jy_addPlayer = function (position, character, animation) {
			if (position < 0 || position > game.players.length + game.dead.length || position == undefined) position = Math.ceil(Math.random() * (game.players.length + game.dead.length));
			const players = game.players.concat(game.dead);
			ui.arena.setNumber(players.length + 1);
			players.forEach(value => {
				if (parseInt(value.dataset.position) >= position) value.dataset.position = parseInt(value.dataset.position) + 1;
			});
			const player = ui.create.player(ui.arena).addTempClass("start");
			player.getId();
			player.dataset.position = position || game.players.length + game.dead.length;
			if (character) player.init(character);
			game.players.push(player);
			game.arrangePlayers();
			return player;
		} // 摘抄自金庸群侠传扩展

		get.haitu_checkChinese = function (str) {
			let reg = /^[\u4E00-\u9FA5]+$/;
			if (!reg.test(str)) return false;
			return true;
		}
		get.haitutranslate = function (name, str, type) {
			var temp = (Math.random() * 9 + 1) * 100000
			if (!type) type = 'game'
			if (!str || str == '') {
				if (type == 'game') {
					let str1 = window.YuriAndOther.introduce[name].name;
					let str2 = window.YuriAndOther.introduce[name].info;
					let link = "<a id='" + temp + "' style='color:unset' href=\"javascript:get.SkillTips('" + str2 + "','" + temp + "');\">" + str1 + "※</a>";
					return link;
				} else {
					let str1 = window.YuriAndOther[type + 'Introduce'][name].name;
					let str2 = window.YuriAndOther[type + 'Introduce'][name].info;
					let link = "<a id='" + temp + "' style='color:unset' href=\"javascript:get.SkillTips('" + str2 + "','" + temp + "');\">" + str1 + "※</a>";
					return link;
				}
			} else {
				let link = "<a id='" + temp + "' style='color:unset' href=\"javascript:get.SkillTips('" + str + "','" + temp + "');\">" + name + "※</a>";
				return link;
			}
		}
		get.randomCard = function (name, create) {
			var cards = get.randomCards(1, name, create);
			if (cards.length) return cards[0];
			return null;
		};
		get.randomCardsNum = function (name, create) {
			var cards = get.randomCards(999, name, create);
			return cards.length;
		};
		get.randomCards = function (num, name, create) {
			// /name 要求为函数// /
			var num = (typeof num == 'number') ? num : 1;
			if (typeof name != 'function') {
				alert('get.randomCards:请检查name参数');
				return [];
			}
			if (num <= 0) {
				alert("巧妇难为无米之炊!")
			};
			var cards, list = [];
			if (create != 'discardPile') {
				var cardPile = Array.from(ui.cardPile.childNodes);
				list = list.concat(cardPile);
			}
			if (create != 'cardPile') {
				var discardPile = Array.from(ui.discardPile.childNodes);
				list = list.concat(discardPile);
			}
			cards = list.filter(name);
			if (!cards.length) return [];
			if (num >= cards.length) return cards;
			return cards.randomGets(num);
		},

			// ------------------------------------------------辅助触发-----------------------------------------------// 
			get.sourceSkill = function (skill, player) {
				// 技能的子技能是个的问题						
				if (!lib.skill[skill]) return false;
				if (get.info(skill).sourceSkill) {
					skill = get.info(skill).sourceSkill;
				};
				var skills = player.getSkills(null, false, false);
				// var es=player.getSkills('e');											   
				var equips = player.getCards('e');
				var checkSkill = function (i) {
					if (!lib.translate[i]) return false;
					if (!lib.translate[i].length) return false;
					if (!lib.translate[i + '_info']) return false;
					if (!lib.translate[i + '_info'].length) return false;
					if (!lib.skill[i]) return false;
					if (lib.skill[i].sub) return false;
					if (lib.skill[i].charlotte) return false;
					if (lib.skill[i].nopop) return false;
					if (lib.skill[i].cardSkill) return false; // 排除特殊情况获得的卡牌技能
					if (lib.skill[i].equipSkill) return false; // 排除特殊情况获得的装备技能	 
					return true;
				};
				var filterSkill = function (i, skillx) {
					if (i == skillx) return true;
					var infox = get.info(i);
					if (infox && infox.group) {
						var group = infox.group;
						if (typeof infox.group == 'string') {
							group = [group];
						};
						if (group.includes(skillx)) return true;
					};
					return false;
				};
				for (var equip of equips) {
					var info = get.info(equip);
					if (info && info.skills) {
						var bool = info.skills.some(function (i) {
							return filterSkill(i, skill);
						});
						if (bool) {
							return {
								equipSkill: true,
								skill: skill,
								skills: info.skills.slice(0),
								card: equip,
							};
						};
					};
				};
				for (var i of skills) {
					if (filterSkill(i, skill) && checkSkill(i)) {
						return {
							playerSkill: true,
							skill: i,
							skills: [i],
						};
					};
				};
				return false;
			};
		lib.element.player.$logSkill = function (arg, target) {
			var next = game.createEvent('$logSkill', false);
			next.player = this;
			next.skillTag = arg;
			next.skill = arg.skill;
			var item = get.itemtype(target);
			if (item == 'players') {
				next.targets = target;
			} else if (item == 'player') {
				next.targets = [target];
			};
			next.setContent(function () {
				event.trigger('$logSkill');
			});
			return next;
		};
		lib.namePrefix.set('祖安', {
			color: '#FF00FF',
			nature: 'watermm',
		});
		lib.namePrefix.set('司天', {
			color: '#FF00FF',
			nature: 'watermm',
		})

		// 精品武将
		if (!lib.rank.rarity.PL) {
			lib.rank.rarity.PL = [];
		}
		if (!lib.rank.rarity.taigu) {
			lib.rank.rarity.taigu = [];
		}
		if (!lib.rank.rarity.Star) {
			lib.rank.rarity.Star = [];
		}
		if (!lib.rank.rarity.North) {
			lib.rank.rarity.North = [];
		}
		if (!lib.rank.rarity.EX) {
			lib.rank.rarity.EX = [];
		};
		lib.rank.rarity.rare.addArray(['haitu_keluoweiyishi', 'haitu_boersaifunie', "haitu_luyiji", 'haitu_haiyinlixi', 'haitu_MacArthur', 'haitu_wensidunqiujier', 'haitu_julifuren', 'haitu_ailajiabalusi', 'haitu_heiguafu', 'haitu_pachakuteke', 'haitu_Dunois', "haitu_sunquan", "haitu_Mathilda", 'haitu_Roland', "haitu_scp053", "haitu_Gabriel", "haitu_Michael", "haitu_Lucife", "haitu_daVinci", "haitu_Arthur", "haitu_Athena", "haitu_Darwin", "haitu_Lancelot", "haitu_Copernicus", "haitu_Stalin", "haitu_bobo", "haitu_Kennidy", "haitu_Cleopatra", 'haitu_Chauvin', 'haitu_Louis_XVI', 'haitu_Tenpenny', "haitu_Wade", "haitu_fuemosi", "haitu_Kevin", "haitu_YS_infochan", "haitu_Marvel_Quicksilver", "haitu_Michael_Afton", "haitu_rainCandy", "haitu_fnaf_vannessa", "haitu_Elizabeth_afton", "haitu_GwenDolyn", "haitu_fnaf_Evan_afton", "haitu_saity"]);

		lib.rank.rarity.rare.addArray(['haitu_T800', 'haitu_yingyan', 'haitu_yuehan_huokewude', 'haitu_yingyan', 'haitu_huteng', 'haitu_heiguafu', 'haitu_pachakuteke', 'haitu_Dunois', "haitu_sunquan", "haitu_Mathilda", 'haitu_Roland', "haitu_scp053", "haitu_Gabriel", "haitu_Michael", "haitu_Lucife", "haitu_daVinci", "haitu_Arthur", "haitu_Athena", "haitu_Darwin", "haitu_Lancelot", "haitu_Copernicus", "haitu_Stalin", "haitu_bobo", "haitu_Kennidy", "haitu_Cleopatra", 'haitu_Chauvin', 'haitu_Louis_XVI', 'haitu_Tenpenny', "haitu_Wade", "haitu_fuemosi", "haitu_Kevin", "haitu_YS_infochan", "haitu_Marvel_Quicksilver", "haitu_Michael_Afton", "haitu_rainCandy", "haitu_fnaf_vannessa", "haitu_Elizabeth_afton", "haitu_GwenDolyn", "haitu_fnaf_Evan_afton", "haitu_saity"]);

		lib.rank.rarity.epic.addArray(['haitu_shenmike', 'haitu_Stalin', 'haitu_kelunweier', 'haitu_tutankamen', 'haitu_kafuka', 'haitu_ren', 'haitu_re_kazhakusi', 'haitu_T1000', 'haitu_sayori', 'haitu_moduniran', 'haitu_tuoer', 'haitu_honghaoke', 'haitu_aisha', 'haitu_benjieming', 'haitu_timelady', 'haitu_Walter_white', 'haitu_David', 'haitu_Max', "haitu_napoleon", "haitu_malcolmrivers", "haitu_nagel_ab", 'haitu_Balzac', 'haitu_reSylvanas', "haitu_scp105", "haitu_scp079", "haitu_Argine", 'haitu_Aristotle', "haitu_Tyson", "haitu_Lara", "haitu_newton", "haitu_Hitler", "haitu_Dante", 'haitu_P', 'haitu_jerry', 'haitu_colorfuldream', "haitu_Cobb", "haitu_neo", "haitu_legacy", "haitu_re_caesar", "haitu_Kawasaki_Linglong", "haitu_Marvel_gwen_stacy", "haitu_gta_BigSmoke", "haitu_Tony_Stark", 'haitu_hesheng', "haitu_professor", "haitu_re_hs_finley", "haitu_re_hs_yashaji", "haitu_re_hs_jaina", "haitu_verting", "haitu_MaxWell", "haitu_kingpin", "haitu_Rogan", "haitu_PeterParker", "haitu_Stephen Strange"]);
		lib.rank.rarity.legend.addArray(['haitu_Elis', 'haitu_sp_napolun', "haitu_firefly", 'haitu_re_kazhakusi', 'haitu_Taskmaster', 'haitu_bumieniexi', 'haitu_rerainCandy', 'haitu_rechaotianjiang', "haitu_daylightdream", "haitu_Bowling", 'haitu_Carol', "haitu_Leon", "haitu_Magneto", "haitu_William_Shakespeare", "haitu_re_angel", "haitu_fnaf_hell", "haitu_fnaf_cassidy", "haitu_re_hs_malfurion", 'haitu_White', 'haitu_chaotianjiang', "haitu_re_hs_sthrall", "haitu_regulus", "haitu_fnaf_Gregory", "haitu_Nyarlathotep", "haitu_tom", "haitu_afu", "haitu_Sulindchia", "haitu_Zlvini", "haitu_Military"]);

		// lib.haitu_initEp = 0;
		try {
			let list = ["shenhua", "refresh", "standard", "diy", "hearth"];
			for (let item of list) {
				if (lib.characterPack[item] != undefined) {
					switch (item) {
						case "shenhua": {
							lib.characterPack.shenhua.haitu_Lucife = ['male', 'western', 3, ["haitu_aogu", "haitu_chenxing", "haitu_duotian"],
								[]
							];
							lib.characterPack.shenhua.haitu_newton = ['male', 'western', 3, ['haitu_dinglv', 'haitu_qiuzheng'],
								[]
							];
							lib.characterPack.shenhua.haitu_Roland = ['male', 'western', 4, ['haitu_wude'],
								[]
							];
							lib.characterPack.shenhua.haitu_Argine = ['female', 'western', 3, ['haitu_huahun', 'haitu_xibing'],
								[]
							];
							lib.characterPack.shenhua.haitu_Michael = ['male', 'western', 4, ['haitu_poe', 'haitu_shengyan'],
								[]
							];
							lib.characterPack.shenhua.haitu_Gabriel = ['male', 'western', 4, ['haitu_guangyi', 'haitu_shouwu'],
								[]
							];

							lib.characterSort.shenhua.shenhua_shan.push("haitu_newton");
							lib.characterSort.shenhua.shenhua_shan.push("haitu_Lucife");
							lib.characterSort.shenhua.shenhua_lei.push("haitu_Michael");
							lib.characterSort.shenhua.shenhua_lei.push("haitu_Gabriel");
							lib.characterSort.shenhua.shenhua_yin.push("haitu_Roland");
							lib.characterSort.shenhua.shenhua_yin.push("haitu_Argine");
						};
							break;
						case "refresh": {
							lib.characterPack.refresh.haitu_re_caesar = ['male', 'western', 4, ['haitu_ducai', 'haitu_zhengfu'],
								[], {

									"skinDirs": ['extension/海国图志/skin/standard/'],


									"drawer": "无名氏",
									"skinLevel": 2,
									"videos": [


									],




								}
							];
							lib.characterPack.refresh.haitu_reSylvanas = ['female', 'haitu_water', 3, ['haitu_rebusi', 'haitu_reshixin', 'haitu_remojian'],
								['western'], {

									"skinDirs": ['extension/海国图志/skin/standard/'],


									"drawer": "无名氏",
									"skinLevel": 2,
									"videos": [


									],




								}
							];
							lib.characterPack.refresh.haitu_re_kazhakusi = ['male', 'haitu_water', 3, ['haitu_tiaoji', 'haitu_lianjin'],
								["border:western"]
							],

								lib.characterPack.refresh.haitu_re_angel = ['female', 'haitu_water', 3, ['haitu_shouhu', 'haitu_yuhe', 'haitu_guangying'],
									[]
								];
							lib.characterPack.refresh.haitu_re_hs_malfurion = ['male', 'haitu_air', 4, ['haitu_jihuo', 'haitu_chongsheng'],
								["border:haitu_air"]
							];
							lib.characterPack.refresh.haitu_re_hs_jaina = ["female", "haitu_water", 3, ["re_aoshu", "re_bingjia"],
								[]
							];
							lib.characterPack.refresh.haitu_re_hs_yashaji = ['male', 'haitu_air', 4, ['re_qisha', "haitu_jian"],
								["border:wu"]
							];
							lib.characterPack.refresh.haitu_re_hs_finley = ['male', 'haitu_air', 3, ["re_hs_maoxian", "mashu", "feiying"],
								['western']
							];
							lib.characterPack.refresh.haitu_re_hs_sthrall = ['male', 'haitu_soil', 4, ["haitu_tuteng", "haitu_guozai", "haitu_zuling"],
								["border:haitu_fire"]
							];
							lib.characterSort.refresh.refresh_ow = ["haitu_re_angel"];

							lib.characterSort.refresh.refresh_standard.push("haitu_re_caesar");

							lib.characterSort.refresh.refresh_hearth = ['haitu_re_kazhakusi', 'haitu_reSylvanas', "haitu_re_hs_finley", "haitu_re_hs_malfurion", "haitu_re_hs_sthrall", "haitu_re_hs_yashaji", "haitu_re_hs_jaina"];
							var config0 = game.getExtensionConfig("coin", "rainCandy");
							if (!config0 && lib.config.extension_海国图志_unlock == 1) { } else {
								lib.characterPack.refresh.haitu_rerainCandy = ["female", "haitu_none", 3, ["haitu_reolyuji", "haitu_olfanpu"],
									["border:key"], ['western',], {

										"skinDirs": ['extension/海国图志/skin/standard/'],


										"drawer": "无名氏",
										"skinLevel": 2,
										"videos": [


										],




									}
								]
								lib.characterSort.refresh.refresh_DIY = ["haitu_rerainCandy"];
							}

							lib.translate.refresh_DIY = "界限突破·无名设计";
							lib.translate.refresh_ow = '界限突破·守望先锋';

							lib.translate.refresh_hearth = '界限突破·魔兽';
						};
							break;
						case "diy": {
							lib.characterPack.diy.haitu_Copernicus = ['male', 'western', 3, ['haitu_tianxin', 'haitu_yixu'],
								[]
							]
							lib.characterSort.diy.art = ["haitu_Copernicus"];
						};
							break;
						case "standard": {
							lib.characterPack.standard.haitu_Arthur = ['male', 'western', 4, ['haitu_shengjian'],
								[]
							];
							lib.characterPack.standard.haitu_Darwin = ['male', 'western', 3, ['haitu_yanhua', 'haitu_tubian'],
								[]
							];
							lib.characterPack.standard.haitu_Lancelot = ['male', 'western', 4, ['haitu_conglong'],
								[]
							];
							lib.characterPack.standard.haitu_daVinci = ['male', 'western', 3, ['haitu_xuanji', 'haitu_tiangong'],
								[]
							];
							lib.characterPack.standard.haitu_Athena = ['female', 'western', 3, ['haitu_shengdun', 'haitu_shenquan'],
								[]
							];
							lib.characterSort.standard.foreigner = ["haitu_daVinci", "haitu_Arthur", "haitu_Darwin", "haitu_Lancelot", "haitu_Athena"];

							lib.translate.foreigner = '海国图志';
						};
							break;
						default: {

							lib.translate.art = '武经';
							lib.characterSort.foreigner.other = [];
							lib.translate.other = '其他';
							if (lib.config.characters.contains('hearth')) {
								lib.translate['hearth_character_config'] = "魔兽";
							}
						}
							break;
					}
				}
			}
		} catch (error) {
			console.error("Failed to update game extension config:", error);
		}


		var skillM = {
			haitu_Bar: {
				charlotte: true,
			},
		}

		lib.haitu_changJinList = [];
		for (var i in skillM) {
			game.addSkill(i, skillM[i], skillM[i].translate, skillM[i].translate_info);
			delete skillM[i].translate;
			delete skillM[i].translate_info;
			if (skillM[i].haitu_changjin) {
				lib.haitu_changJinList.add(i);
				lib.card[i] = {
					fullskin: true,
					image: "ext:海国图志/image/map/" + i + ".png",
				};
			};
		};
		// ---------------------------------------元气系统------------------------------------------// 
		game.tianfu = function (skill) {
			var back = '';
			if (Array.isArray(skill)) {
				for (var s = 0; s < skill.length; s++) {
					if (game.me.hasSkill('tianfu_' + skill[s])) {
						back = back + '[-]';
						game.me.removeSkill('tianfu_' + skill[s]);
					} else {
						back = back + '[+]';
						game.me.addSkill('tianfu_' + skill[s]);
					}
					back = back + get.translation('tianfu_' + skill[s]) + ' ';
				}
			} else {
				if (game.me.hasSkill('tianfu_' + skill)) {
					back = back + '[-]';
					game.me.removeSkill('tianfu_' + skill);
				} else {
					back = back + '[+]';
					game.me.addSkill('tianfu_' + skill);
				}
				back = back + get.translation('tianfu_' + skill);
			}
			return get.translation(game.me.name) + ':' + back;
		}

		if (parseFloat(lib.config['extension_海国图志_fun']) == '7') {
			lib.skill._tianfuskill = {
				trigger: {
					player: ["enterGame"],
					global: "gameDrawAfter",
				},
				forced: true,
				priority: 9999999999999,
				content() {
					'step 0'
					player.addSkill('haitu_hudun');
					'step 1'
					//  if (player.maxHp != Infinity) {
					// var list = [];
					//  for (var i = 1; i <= player.maxHp; i++) {
					// 	if (i <= 9) list.push(i * 0.1);
					//   }
					//  var rana = list.randomGet();
					//   var ranb = 1 - rana;
					// 	 event.hujia = Math.ceil(player.maxHp * rana);
					// event.maxhp = Math.max(1, player.maxHp - event.hujia);
					// event.hp = Math.ceil(player.hp * ranb);
					// } else 

					{
						if (parseFloat(lib.config['extension_海国图志_shield']) == 1) {
							event.hujia = 1;
						}

						if (parseFloat(lib.config['extension_海国图志_shield']) == 2) {
							event.hujia = 2;
						}

						if (parseFloat(lib.config['extension_海国图志_shield']) == 3) {
							event.hujia = 3;
						}
						event.maxhp = player.maxHp;
						event.hp = player.hp;
					}
					player.storage.haitu_maxhujia = event.hujia;
					'step 2'
					var add = 0;
					// if (lib.config['extension_祖安设置_balance']) add++;
					// player.hp = event.hp + add;
					// player.maxHp = event.maxhp + add;
					player.addMark('haitu_hudun', event.hujia, false);
					// game.dyingShow(player, parseFloat(lib.config['extension_祖安设置_newui']));
					player.update();
				},
			}
		}

		// @TODO 没用到外部变量的话，等会给他拆出去。
		lib.arenaReady.push(function () {
			// // // // // // /往衍生牌堆塞 卡牌// // // // // // // /
			/*
			if(!lib.cardPack.mode_derivation){
				lib.cardPack.mode_derivation=[];
			};
			var list=lib.haitu_changJinList.slice(0);
			lib.cardPack.mode_derivation.addArray(list);	
			*/
			// game.addGlobalSkill("haitu_skin");
			game.addGlobalSkill('g_du');
			game.addGlobalSkill('haitu_shown');
			// game.addGlobalSkill('haitu_lingqiao_record');
			game.addGlobalSkill('haitu_haitushenzi');
			game.addGlobalSkill('haitushiqu');
			game.addGlobalSkill('haitu_re_zhongbai_clear');
			game.addGlobalSkill('haitu_re_zhongbai_mark');
			game.addGlobalSkill('haitu_suigeng_name');
			game.addGlobalSkill('haitu_kuanghua_use');
			game.addGlobalSkill('haitu_huanhua');
			game.addGlobalSkill('haitu_bgm');

			var list = lib.haitu_changJinList.slice(0);
			var menu = lib.extensionMenu.extension_海国图志["haitu_changjingzizhu"];
			for (var i of list) {
				menu.item[i] = lib.skill[i].translate2;
			};
			var cfg = lib.config.extension_海国图志_haitu_changjingzizhu;
			if (cfg && cfg != 'off') {
				_status.locked_haitu_changjin = cfg;
			};
		});

		// @TODO 纯文本给我转成json，在需要的时候再动态导入。
		var obj = {

			"木乃伊": [{
				avatar: 'haitu_mummy',
				text: '呜呜呜!'
			},],
			"序章": [{
				text: '洛圣都郊外，一栋废弃的仓库门口......'
			},],
			"序章0": [{
				text: '轰!!!'
			},],

			"序章1": [{
				avatar: 'haitu_Kawasaki_Linglong',
				text: '零号?零号?听到请回答。'
			},



			],
			"序章1.5": [{
				text: '你掸了掸灰尘，向你的队长报了平安。'
			},



			],
			"序章1.75": [{
				text: '佣兵这一行可真是苦差事......'
			},



			],
			"序章2": [{
				text: '听到你平安无事的答复后，女孩松了一口气。'
			},



			],
			"序章3": [{
				avatar: 'haitu_Kawasaki_Linglong',
				text: '你没事就好，现在这些毒贩朝你这里过来了,拖住他们,我去寻找任务目标。'
			},



			],
			"序章4": [{
				text: '众所周知，拖住敌人的最好办法就是全灭他们。'
			},



			],
			"序章5": [{
				text: '糟糕，这伙暴徒居然雇佣了模仿大师。'
			},



			],
			"序章6": [{
				avatar: 'haitu_Kawasaki_Linglong',
				text: '目标已解决，老地方汇合。'
			},



			],
			"序章7": [{
				text: '趁着模仿大师受伤，赶紧跑路吧。'
			},




			],
			"巷战0": [{
				text: '弗朗西斯国际机场，自由城。'
			},],
			"巷战0.5": [{
				text: '卡尔 约翰逊，洛圣都黑帮格雷诺夫家族成员，正在将行李送上传送带。'
			},],
			"巷战1": [{
				avatar: 'haitu_Carl',
				text: '在东海岸待了五年后，是时候回家了。'
			},],
			"巷战2": [{
				text: '(电话铃声响起)'
			},],
			"巷战3": [{
				avatar: 'haitu_Sweet',
				text: '卡尔，我是斯威特。'
			},],
			"巷战4": [{
				avatar: 'haitu_Sweet',
				text: '老妈她......她去世了，老弟。'
			},],
			"巷战5": [{
				avatar: 'haitu_Carl',
				text: '.......'
			},],
			"巷战6": [{
				text: '洛圣都，现在。'
			},],
			"巷战7": [{
				text: '一群警察包围了卡尔的计程车。'
			},],
			"巷战8": [{
				avatar: 'haitu_Tenpenny',
				text: '车里的，举起你的手来。'
			},],
			"巷战9": [{
				text: '卡尔下车。'
			},],
			"巷战10": [{
				avatar: 'haitu_Tenpenny',
				text: '别动了，跪下!'
			},],
			"巷战11": [{
				text: '黑命贱.jpg'
			},],
			"巷战12": [{
				avatar: 'haitu_Tenpenny',
				text: '趴在地上，就这样。'
			},],
			"巷战12": [{
				avatar: 'haitu_Tenpenny',
				text: '（搜走卡尔的财物）这是贩毒的钱。'
			},],
			"巷战13": [{
				avatar: 'haitu_Carl',
				text: '???'
			},],
			"巷战14": [{
				avatar: 'haitu_Tenpenny',
				text: '嘿，不用担心，我等下会把资料填好。'
			},],
			"巷战15": [{
				avatar: 'haitu_Tenpenny',
				text: '欢迎回来，卡尔，回家高兴吗?你没有忘记我们吧，小子。'
			},],
			"巷战16": [{
				avatar: 'haitu_Carl',
				text: '怎么会呢?汤普尼警官。我在想这么久了你们怎么还没找我。'
			},],
			"巷战17": [{
				avatar: 'haitu_Tenpenny',
				text: '上车。'
			},],
			"巷战18": [{
				text: '巴拉斯帮地盘。'
			},],

			"巷战19": [{
				avatar: 'haitu_Tenpenny',
				text: '卡尔，怎么样?你家人过得好吗?'
			},],
			"巷战20": [{
				avatar: 'haitu_Carl',
				text: '我是来送我妈最后一程的。'
			},],
			"巷战21": [{
				avatar: 'haitu_Tenpenny',
				text: '是啊，我想我知道。你最近又在搞什么事啊，卡尔?'
			},],
			"巷战22": [{
				avatar: 'haitu_Carl',
				text: '没有，我住在自由城，金盆洗手了，是守法公民。'
			},],
			"巷战23": [{
				avatar: 'haitu_Tenpenny',
				text: '不，你可从来没有清白过，卡尔。'
			},],
			"巷战24": [{
				avatar: 'haitu_Tenpenny',
				text: '哎呀，看看这是什么。普拉斯基警官，这是一把武器。在不到十分钟前用于杀死一名警察:潘德布里警官。我得说，他是一个好人。你动作真利索啊，黑鬼。'
			},],
			"巷战25": [{
				avatar: 'haitu_Carl',
				text: '你们都知道我才刚下飞机!'
			},],
			"巷战26": [{
				avatar: 'haitu_Tenpenny',
				text: '幸好我们找到了你，并找到了凶器。'
			},],
			"巷战27": [{
				avatar: 'haitu_Carl',
				text: '那不是我的枪!'
			},],
			"巷战28": [{
				avatar: 'haitu_Tenpenny',
				text: '别糊弄人了，卡尔。'
			},],
			"巷战29": [{
				avatar: 'haitu_Carl',
				text: '你们这次又想得到什么?'
			},],
			"巷战30": [{
				avatar: 'haitu_Tenpenny',
				text: '当我们需要时，自然会来找你。在这期间，尽量不要再枪杀任何警察。'
			},],
			"巷战30.25": [{
				text: '警车加快了速度，在错综复杂的小道上穿行。'
			},],
			"巷战30.5": [{
				text: '不远处的小巷里.......'
			},],

			"巷战31": [{
				avatar: 'haitu_Kawasaki_Linglong',
				text: '好多警察，注意安全，我先撤了。'
			},],
			"巷战32M": [{
				avatar: 'haitu_zero',
				text: '......'
			},],
			"巷战32F": [{
				avatar: 'haitu_fzero',
				text: '......'
			},],
			"巷战33": [{
				avatar: 'haitu_Carl',
				text: '你不能把我丢在这里，这是巴勒斯帮的地盘!'
			},],
			"巷战34": [{
				avatar: 'haitu_Tenpenny',
				text: '你不是说你是无辜的吗?卡尔，你没有加入帮派?后会有期了，卡尔。'
			},],
			"巷战35": [{
				text: '倒霉的黑人被甩到了路边，落在倒霉的你面前。这吸引了一群小混混。'
			},],
			'巷战36M': [{
				avatar: 'haitu_Carl',
				text: '谢了,兄弟。'
			},],
			'巷战36F': [{
				avatar: 'haitu_Carl',
				text: '谢了,美女。'
			},],

			"巷战38": [{
				text: '卡尔由于心系亲友,急忙骑着一辆被遗弃的自行车回家了。经历了好几场恶斗的你现在也只想好好睡一觉。'
			},],
			'披萨店0': [{
				text: '翌日，你在洛圣都的安全屋醒来时，晨光正沿着防弹玻璃的斜角切割成菱形金箔。露水从窗台伪装成多肉植物的信号干扰器上滴落，折射着楼下洛圣都警局巡逻车远去的尾灯。'
			},],
			"披萨店1": [{
				text: '昨夜注射的药剂已让伤口愈合如初，只有皮肤下残留的医疗凝胶泛着珍珠母贝的光泽,虽然你此刻仍然感到疼痛难耐。',
			}],
			"披萨店2": [{
				text: '唉，谁叫你不喜欢和樱花国人做搭档呢。 ',
			}],
			"披萨店3M": [{
				avatar: 'haitu_zero',
				text: '好饿啊......去吃披萨吧。'
			}],
			"披萨店3F": [{
				avatar: 'haitu_fzero',
				text: '好饿啊......去吃披萨吧。'
			}],
			'披萨店4': [{
				text: '披萨店内......'
			}],
			'披萨店5': [{
				text: '鬼鬼祟祟的绿衣男子东张西望，最后走向了前台，掏出一把手枪。'
			}],
			"披萨店6": [{
				avatar: 'haitu_Ryder',
				text: '拿出钱来!这是打劫!'
			}],
			'披萨店7': [{
				avatar: 'haitu_Carl',
				text: "!?"
			}],
			'披萨店8M': [{
				avatar: 'haitu_zero',
				text: "!?"
			}],
			'披萨店8F': [{
				avatar: 'haitu_fzero',
				text: "!?"
			}],
			"披萨店9": [{
				text: "震惊之余，你和昨日偶遇的黑人对上了眼。"
			}],
			'披萨店10': [{
				avatar: "haitu_Monster3",
				text: "莱德尔，这次不会让你得逞了!"
			}],
			"披萨店11": [{
				avatar: 'haitu_Ryder',
				text: '你认错人了，**!'
			}],
			'披萨店12': [{
				avatar: "haitu_Monster3",
				text: "哪有人的鸡蛋这么小啊!我真为你的爸爸感到惋惜。"
			}],
			'披萨店13M': [{
				avatar: 'haitu_zero',
				text: "......"
			}],
			'披萨店13F': [{
				avatar: 'haitu_fzero',
				text: "......"
			}],
			"披萨店14": [{
				avatar: 'haitu_Carl',
				text: "（冲上前）天啊，你这是疯了吗?咱们快走!"
			}],
			"披萨店15": [{
				avatar: 'haitu_Ryder',
				text: '卡尔，你还是和以前一样。混蛋，你还是这么二!'
			}],
			"披萨店16": [{
				text: "店员突然掏出了猎枪。"
			}],
			"披萨店17": [{
				avatar: 'haitu_Ryder',
				text: '哦，天啊，快跑!'
			}],
			'披萨店18M': [{
				avatar: 'haitu_zero',
				text: "别扫到我啊!"
			}],
			'披萨店18F': [{
				avatar: 'haitu_fzero',
				text: "别扫到我啊!"
			}],


			"披萨店战败M": [{
				avatar: 'haitu_zero',
				text: "身体......动不了了"
			}],
			"披萨店战败F": [{
				avatar: 'haitu_fzero',
				text: "身体......动不了了"
			}],
			"披萨店胜利AM": [{
				avatar: 'haitu_zero',
				text: "好险......可惜小黑子他们没跑掉。"
			}],
			"披萨店胜利AF": [{
				avatar: 'haitu_fzero',
				text: "好险......可惜小黑子他们没跑掉。"
			}],
			"披萨店胜利1": [{
				text: '你控制好了力道，恰好将暴怒的店老板击倒在地并缴械，而不伤其性命。两名男子趁机逃跑。'
			}],
			"披萨店胜利2": [{
				text: '羁绊的种子悄然种下......'
			},],
			"矩阵": [{
				avatar: 'haitu_neo',
				text: "我们似乎在一个卡牌游戏的代码里......"
			}],



		}
		// @TODO 很低效，你应该在galgame模块内处理。
		for (var i in obj) {
			galgame.text[i] = obj[i];
		}
	}

	prepare() { }

	// 启动函数模块。
	precontent(config) {
		if (!lib.config["extension_王者荣耀_enable"]) {
			lib.skill.xushiSkill = {
				enable: "phaseUse",
				locked: true,
				ruleSkill: true,
				charlotte: true,
				filter(event, player) {
					return event.xushiSkill?.length;
				},
				onChooseToUse(event) {
					if (game.online || event.xushiSkill) return;
					const player = get.player();
					const getXushi = () => {
						if (
							player.getRoundHistory("useSkill", evt => {
								var info = get.info(evt.skill);
								return info?.xushiSkill;
							}).length
						)
							return [];
						if (
							player.countCards("hes", function (card) {
								return lib.filter.cardDiscardable(card, player, "xushiSkill_enable");
							}) < 3
						)
							return [];
						return player.awakenedSkills
							.filter(function (skill) {
								const info = get.info(skill);
								return info?.xushiSkill;
							});
					};
					event.set("xushiSkill", getXushi());
				},
				chooseButton: {
					dialog(event, player) {
						const skills = get.event().xushiSkill;
						const list = skills.map(skill => [skill, "【" + get.translation(skill) + "】：" + lib.translate[skill + "_info"]]);
						const dialog = ui.create.dialog("蓄势", [list, "textbutton"]);
						dialog.direct = true;
						return dialog;
					},
					check(button) {
						const player = get.player();
						if (get.character(player).skills?.includes(button.link)) {
							return 2 + Math.random();
						}
						return 1 + Math.random();
					},
					backup(links) {
						return {
							skills: links,
							filterCard: true,
							selectCard: 3,
							position: "hes",
							ai1(card) {
								const player = get.player();
								if (player.needsToDiscard()) return 7 - get.value(card);
								return 5 - get.value(card);
							},
							async content(event, trigger, player) {
								const skills = lib.skill.xushiSkill_backup.skills;
								for (const skill of skills) {
									player.restoreSkill(skill);
									game.log(player, "重置了", "#y蓄势技", `#g【${get.translation(skill)}】`);
								}
							},
							ai: {
								result: {
									player(player) {
										return 1;
									},
								},
							},
						}
					},
					prompt(links) {
						return "出牌阶段，若你的蓄势技已发动且本轮未发动过，你可以弃置三张牌，恢复可用次数至1。";
					},
				},
				ai: {
					order: 1,
					result: {
						player(player) {
							return 1;
						},
					},
				},
				group: "xushiSkill_restore",
				subSkill: {
					backup: {},
					restore: {
						trigger: {
							player: "pileWashed",
						},
						forced: true,
						ruleSkill: true,
						charlotte: true,
						filter(event, player) {
							return player.awakenedSkills
								.filter(function (skill) {
									const info = get.info(skill);
									return info && info.xushiSkill;
								}).length;
						},
						async content(event, trigger, player) {
							const skills = player.awakenedSkills.filter(function (skill) {
								const info = get.info(skill);
								return info?.xushiSkill;
							});
							for (const skill of skills) {
								player.restoreSkill(skill);
								game.log(player, "重置了", "#y蓄势技", `#g【${get.translation(skill)}】`);
							}
						},
					},
				},
			};
			lib.skill._xushiSkill = {
				trigger: {
					player: ["useSkill", "logSkillBegin"],
				},
				silent: true,
				ruleSkill: true,
				charlotte: true,
				filter(event, player) {
					if (event.type != "player") return false;
					let skill = get.sourceSkillFor(event);
					if (!skill) return false;
					let info = get.info(skill);
					if (!info || info.charlotte) return false;
					return info.xushiSkill;
				},
				async content(event, trigger, player) {
					player.addSkill("xushiSkill");
				},
			};
		}
		// if (!_status.connectMode) 
		if (!lib.config.silk) {
			lib.config.silk = 0
		}
		if (!lib.config.gold) {
			lib.config.gold = 0
		}
		if (!lib.config.diamond) {
			lib.config.diamond = 0
		}
		if (!lib.config.lifeCoin) {
			lib.config.lifeCoin = 0
		}
		if (!lib.config.MpDrink) {
			lib.config.MpDrink = 0
		}
		if (!lib.config.story) {
			lib.config.story = 0;
		}
		gelinPack("海国图志");

		import("./package.foreigner/index.js").then(i => {
			game.import("character", i.characterModule);
			lib.config.all.characters.push('foreigner');
			lib.translate['海国图志_foreigner_config'] = "海国图志";
		}, e => {
			console.error(e)
		})


		var extList = ['update.js',];


		// lib.qhly_group = ['haitu_water'];
		game.addGroup('haitu_none', '空', '<span class=\"greentext\">西方（空)</span>', {
			color: [0, 255, 255], image: 'ext:海国图志/image/decadeUI-image/name_haitu_none.png'
		});
		game.addGroup('haitu_air', '<span class=\"greentext\">气</span>', '<span class=\"greentext\">西方（气)</span>', {
			color: [0, 255, 255], image: 'ext:海国图志/image/decadeUI-image/name_haitu_air.png'
		});
		game.addGroup('haitu_fire', '<span class=\"firetext\">火</span>', '<span class=\"firetext\">西方（火)</span>', {
			color: [255, 69, 0, 1], image: 'ext:海国图志/image/decadeUI-image/name_haitu_fire.png'
		});
		game.addGroup('haitu_soil', '<span class=\"yellowtext\">土</span>', '<span class=\"yellowtext\">西方（土)</span>', {
			color: [205, 170, 109, 1], image: 'ext:海国图志/image/decadeUI-image/name_haitu_soil.png'
		});
		game.addGroup('haitu_water', '<span class=\"thundertext\">水</span>', '<span class=\"thundertext\">西方（水)</span>', {
			color: [135, 206, 235, 1], image: 'ext:海国图志/image/decadeUI-image/name_haitu_water.png'
		});
		game.addGroup('haitu_hua', '華', '华人', {
			color: [255, 102, 51], image: 'ext:海国图志/image/decadeUI-image/name_haitu_hua.png'
		});
		game.addGroup('haitu_mad', '疯', '疯狂', {
			color: [128, 0, 128], image: 'ext:海国图志/image/decadeUI-image/name_haitu_mad.png'
		});
		lib.characterSubstitute["haitu_firefly"] = [
			["原画", ["ext:海国图志/image/character/haitu_firefly.jpg"]],

			["星风血雨", ["ext:海国图志/skin/standard/haitu_firefly/星风血雨__4.jpg"]],

			["春日手信", ["ext:海国图志/skin/standard/haitu_firefly/春日手信__4.jpg"]],

		]
		lib.characterSubstitute["haitu_Elis"] = [
			["原画", ["ext:海国图志/image/character/haitu_Elis.jpg"]],


		]
		lib.characterSubstitute["haitu_kafuka"] = [
			["原画", ["ext:海国图志/image/character/haitu_kafuka.jpg"]],

			["镜花水月", ["ext:海国图志/skin/standard/haitu_kafuka/镜花水月.jpg"]],

		]
		lib.characterSubstitute["haitu_David"] = [
			["原画", ["ext:海国图志/image/character/haitu_David.jpg"]],


		]
		lib.characterSubstitute["haitu_chaotianjiang"] = [
			["原画", ["ext:海国图志/image/character/haitu_chaotianjiang.jpg"]],


		]
		lib.characterSubstitute["haitu_rechaotianjiang"] = [
			["原画", ["ext:海国图志/image/character/haitu_rechaotianjiang.jpg"]],


		]
		lib.characterSubstitute["haitu_Walter_white"] = [
			["原画", ["ext:海国图志/image/character/haitu_Walter_white.jpg"]],


		]
		lib.characterSubstitute["haitu_bobo"] = [
			["原画", ["ext:海国图志/image/character/haitu_bobo.jpg"]],

			["滨水屠杀", ["ext:海国图志/skin/standard/haitu_bobo/滨水屠杀__2.jpg"]],


		]
		lib.characterSubstitute["haitu_Bowling"] = [
			["原画", ["ext:海国图志/image/character/haitu_Bowling.jpg"]],

			["虹火蟒天", ["ext:海国图志/skin/standard/haitu_Bowling/虹火蟒天__3.jpg"]],


		]
		lib.characterSubstitute["haitu_Carol"] = [
			["原画", ["ext:海国图志/image/character/haitu_Carol.jpg"]],

			["怀旧", ["ext:海国图志/skin/standard/haitu_Carol/怀旧__3.jpg"]],

			["金芒游侠", ["ext:海国图志/skin/standard/haitu_Carol/金芒游侠__3.jpg"]],

			["酌光兔影", ["ext:海国图志/skin/standard/haitu_Carol/酌光兔影__3.jpg"]],

			["金芒游侠（动)", ["ext:海国图志/skin/standard/haitu_Carol/金芒游侠(动态)__3.jpg"]],

		]
		lib.characterSubstitute["haitu_Cleopatra"] = [
			["原画", ["ext:海国图志/image/character/haitu_Cleopatra.jpg"]],

			["法老雅侍", ["ext:海国图志/skin/standard/haitu_Cleopatra/法老雅侍__2.jpg"]],

			["复生艳后", ["ext:海国图志/skin/standard/haitu_Cleopatra/复生艳后__1.jpg"]],

			["无上法老", ["ext:海国图志/skin/standard/haitu_Cleopatra/无上法老__1.jpg"]],

			["艳后魅卫", ["ext:海国图志/skin/standard/haitu_Cleopatra/艳后魅卫__3.jpg"]],

			["荧月女神", ["ext:海国图志/skin/standard/haitu_Cleopatra/荧月女神__4.jpg"]],

			["幽夜女神", ["ext:海国图志/skin/standard/haitu_Cleopatra/幽夜女神__4.jpg"]],


		]
		lib.characterSubstitute["haitu_Cobb"] = [
			["原画", ["ext:海国图志/image/character/haitu_Cobb.jpg"]],

			["沉沦", ["ext:海国图志/skin/standard/haitu_Cobb/沉沦__2.jpg"]],

			["梦境崩坏", ["ext:海国图志/skin/standard/haitu_Cobb/梦境崩坏__3.jpg"]],

		]

		lib.characterSubstitute["haitu_Elizabeth_afton"] = [
			["原画", ["ext:海国图志/image/character/haitu_Elizabeth_afton.jpg"]],

			["马戏宝贝", ["ext:海国图志/skin/standard/haitu_Elizabeth_afton/马戏宝贝__4.jpg"]],

			["像素童工", ["ext:海国图志/skin/standard/haitu_Elizabeth_afton/像素童工__2.jpg"]],

		]

		lib.characterSubstitute["haitu_Kawasaki_Linglong"] = [
			["原画", ["ext:海国图志/image/character/haitu_Kawasaki_Linglong.jpg"]],

			["刺身之夜", ["ext:海国图志/skin/standard/haitu_Kawasaki_Linglong/刺身之夜__4.jpg"]],

			["怀旧", ["ext:海国图志/skin/standard/haitu_Kawasaki_Linglong/怀旧__2.jpg"]],

			["劫后余生", ["ext:海国图志/skin/standard/haitu_Kawasaki_Linglong/劫后余生__2.jpg"]],

		]

		lib.characterSubstitute["haitu_malcolmrivers"] = [
			["原画", ["ext:海国图志/image/character/haitu_malcolmrivers.jpg"]],

			["滨水屠杀", ["ext:海国图志/skin/standard/haitu_malcolmrivers/滨水屠杀__2.jpg"]],


		]

		lib.characterSubstitute["haitu_Marvel_gwen_stacy"] = [
			["原画", ["ext:海国图志/image/character/haitu_Marvel_gwen_stacy.jpg"]],

			["幽灵蜘蛛", ["ext:海国图志/skin/standard/haitu_Marvel_gwen_stacy/幽灵蜘蛛__2.jpg"]],


		]
		lib.characterSubstitute["haitu_Marvel_Quicksilver"] = [
			["原画", ["ext:海国图志/image/character/haitu_Marvel_Quicksilver.jpg"]],

			["诸行无常", ["ext:海国图志/skin/standard/haitu_Marvel_Quicksilver/诸行无常__3.jpg"]],


		]

		lib.characterSubstitute["haitu_Max"] = [
			["原画", ["ext:海国图志/image/character/haitu_Max.jpg"]],

			["桃之夭夭", ["ext:海国图志/skin/standard/haitu_Max/桃之夭夭__3.jpg"]],


		]

		lib.characterSubstitute["haitu_Michael_Afton"] = [
			["原画", ["ext:海国图志/image/character/haitu_Michael_Afton.jpg"]],

			["痛失手足", ["ext:海国图志/skin/standard/haitu_Michael_Afton/痛失手足__3.jpg"]],


		]

		lib.characterSubstitute["haitu_neo"] = [
			["原画", ["ext:海国图志/image/character/haitu_neo.jpg"]],

			["矩阵再现", ["ext:海国图志/skin/standard/haitu_neo/矩阵再现__4.jpg"]],


		]

		lib.characterSubstitute["haitu_rainCandy"] = [
			["原画", ["ext:海国图志/image/character/haitu_rainCandy.jpg"]],

			["地雷少女", ["ext:海国图志/skin/standard/haitu_rainCandy/地雷少女__2.jpg"]],

			["蝴蝶效应", ["ext:海国图志/skin/standard/haitu_rainCandy/蝴蝶效应__4.jpg"]],

			["旅行糖糖", ["ext:海国图志/skin/standard/haitu_rainCandy/旅行糖糖__3.jpg"]],

			["荼毒攻心", ["ext:海国图志/skin/standard/haitu_rainCandy/荼毒攻心__3.jpg"]],

			["以牌会友", ["ext:海国图志/skin/standard/haitu_rainCandy/以牌会友__1.jpg"]],

			["亦真亦幻", ["ext:海国图志/skin/standard/haitu_rainCandy/亦真亦幻__4.jpg"]],


		]
		lib.characterSubstitute["haitu_rerainCandy"] = [
			["原画", ["ext:海国图志/image/character/haitu_rerainCandy.jpg"]],

			["地雷少女", ["ext:海国图志/skin/standard/haitu_rainCandy/地雷少女__2.jpg"]],

			["蝴蝶效应", ["ext:海国图志/skin/standard/haitu_rainCandy/蝴蝶效应__4.jpg"]],

			["旅行糖糖", ["ext:海国图志/skin/standard/haitu_rainCandy/旅行糖糖__3.jpg"]],

			["荼毒攻心", ["ext:海国图志/skin/standard/haitu_rainCandy/荼毒攻心__3.jpg"]],

			["以牌会友", ["ext:海国图志/skin/standard/haitu_rainCandy/以牌会友__1.jpg"]],

			["亦真亦幻", ["ext:海国图志/skin/standard/haitu_rainCandy/亦真亦幻__4.jpg"]],


		]

		lib.characterSubstitute["haitu_re_hs_finley"] = [
			["原画", ["ext:海国图志/image/character/haitu_re_hs_finley.jpg"]],

			["假扮瞎子", ["ext:海国图志/skin/standard/haitu_re_hs_finley/假扮瞎子__3.jpg"]],

			["螃蟹骑士", ["ext:海国图志/skin/standard/haitu_re_hs_finley/螃蟹骑士__2.jpg"]],

			["有惊无险", ["ext:海国图志/skin/standard/haitu_re_hs_finley/有惊无险__4.jpg"]],



		]


		lib.characterSubstitute["haitu_scp053"] = [
			["原画", ["ext:海国图志/image/character/haitu_scp053.jpg"]],

			["收容少女", ["ext:海国图志/skin/standard/haitu_scp053/收容少女__2.jpg"]],

			["天真浪漫", ["ext:海国图志/skin/standard/haitu_scp053/天真浪漫__2.jpg"]],

			["小小孽蜥", ["ext:海国图志/skin/standard/haitu_scp053/小小孽蜥__2.jpg"]],



		]

		lib.characterSubstitute["haitu_verting"] = [
			["原画", ["ext:海国图志/image/character/haitu_verting.jpg"]],

			["动物之友", ["ext:海国图志/skin/standard/haitu_verting/动物之友__2.jpg"]],

			["霓虹之路", ["ext:海国图志/skin/standard/haitu_verting/霓虹之路__4.jpg"]],

			["汀上武士", ["ext:海国图志/skin/standard/haitu_verting/汀上武士__3.jpg"]],

			["箱中司辰", ["ext:海国图志/skin/standard/haitu_verting/箱中司辰__2.jpg"]],

			["弈者无言", ["ext:海国图志/skin/standard/haitu_verting/弈者无言__4.jpg"]],

			["英伦女仆", ["ext:海国图志/skin/standard/haitu_verting/英伦女仆__3.jpg"]],

			["幼年助手", ["ext:海国图志/skin/standard/haitu_verting/幼年助手__1.png"]],

			["重返赛博", ["ext:海国图志/skin/standard/haitu_verting/重返赛博__4.jpg"]],

			["孜孜不倦", ["ext:海国图志/skin/standard/haitu_verting/孜孜不倦__2.jpg"]],



		]

		lib.characterSubstitute["haitu_White"] = [
			["原画", ["ext:海国图志/image/character/haitu_White.jpg"]],

			["天象有异", ["ext:海国图志/skin/standard/haitu_White/天象有异__3.jpg"]],

			["雪林迷途", ["ext:海国图志/skin/standard/haitu_White/雪林迷途__3.jpg"]],

			["御典浮阁", ["ext:海国图志/skin/standard/haitu_White/御典浮阁__4.jpg"]],

			["仲夜星观", ["ext:海国图志/skin/standard/haitu_White/仲夜星观__3.jpg"]],

			["子在川上", ["ext:海国图志/skin/standard/haitu_White/子在川上__3.jpg"]],


		]

		lib.characterSubstitute["haitu_William_Shakespeare"] = [
			["原画", ["ext:海国图志/image/character/haitu_William_Shakespeare.jpg"]],

			["出神入化", ["ext:海国图志/skin/standard/haitu_William_Shakespeare/出神入化__1.jpg"]],

			["戏剧大师", ["ext:海国图志/skin/standard/haitu_William_Shakespeare/戏剧大师__2.jpg"]],



		]

		lib.characterSubstitute["haitu_Zlvini"] = [
			["原画", ["ext:海国图志/image/character/haitu_Zlvini.jpg"]],

			["怀旧", ["ext:海国图志/skin/standard/haitu_Zlvini/怀旧__2.jpg"]],



		]
		if (!game.hasExtension('金庸群侠传')) {
			lib.init.css(lib.assetURL + 'extension/海国图志', 'extension');
			lib.group.add('jy_lie');
			lib.translate.jy_lieColor = [175, 175, 55, 1];
			lib.translate.jy_lie = '列';
			lib.qhly_group = ['jy_lie'];
		}

		if (config.enable) {
			lib.skill.haitu_reboot = {
				name: "清理",
				filterTarget(card, player, target) {
					return target == player;
				},
				prompt: "免费转生所有不存在于当前游戏环境的武将，防止BUG。",
				enable: "phaseUse",
				silent: true,
				charlotte: true,
				forceunique: true,
				content() {
					"step 0"
					event.num = 0;
					var config = game.getExtensionConfig("海国图志", "haitu_soul");
					for (let [key, value] of config) {
						if (value >= 1 && !lib.character[key]) {
							event.num += value;
							config.delete(key);
						}
					}
					"step 1"
					if (event.num <= 0) {
						event.finish()
					} else { }
					"step 2"
					event.num -= 1;
					event.rank = ['junk', 'junk', 'junk', 'junk', 'junk', 'junk', 'junk', 'junk', 'junk', 'junk', 'junk', 'rare', 'rare', 'rare', 'rare', 'rare', 'rare', 'rare', 'epic', 'epic', 'epic', 'epic', 'legend']
					event.rarity = event.rank.randomGet(1);
					"step 3"

					if (event.rarity == "junk") {
						if (lib.rank.rarity.junk != []) {
							event.name = lib.rank.rarity.junk.randomGet(1)
						} else {
							event.goto(2)
						}
					}
					if (event.rarity == "rare") {
						if (lib.rank.rarity.rare != []) {
							event.name = lib.rank.rarity.rare.randomGet(1)
						} else {
							event.goto(2)
						}
					}
					if (event.rarity == "epic") {
						if (lib.rank.rarity.epic != []) {
							event.name = lib.rank.rarity.epic.randomGet(1)
						} else {
							event.goto(2)
						}
					}
					if (event.rarity == "legend") {
						if (lib.rank.rarity.legend != []) {
							event.name = lib.rank.rarity.legend.randomGet(1)
						} else {
							event.goto(2)
						}
					}
					event.gain = event.name;
					game.log(event.gain);
					var num = false;
					// let currentValue = event.config.get(event.name) || 0;
					// event.config.set(event.name, currentValue + 1);
					// for (let [key, value] of config) {
					//  if (key == event.name) { num = true; let currentValue = config.get(event.name) }
					// }
					// if (num == false) { let currentValue = 0 }
					// config.set(event.name, currentValue + 1);
					var config = game.getExtensionConfig("海国图志", "haitu_soul");
					var currentValue0 = config.get(event.name) || 0;

					config.set(event.name, currentValue0 + 1);
					// player.updateMark("haitu_soul", true);
					if (!player.hasSex('female')) {
						var str = '他'
					} else {
						var str = '她'
					}
					if (event.rarity == 'junk' || !event.rarity) {
						game.log('恭喜<span class=\"thundertext\">', lib.config.connect_nickname, '</span>通过卖废品获得了', event.name, '的卡带。')
					}
					if (event.rarity == 'rare') {
						game.log('恭喜<span class=\"thundertext\">', lib.config.connect_nickname, '</span>通过卖废品获得了', '<span class=\"greentext\">' + '稀有' + '</span>', '武将<span class=\"greentext\">' + get.translation(event.name) + '</span>', '的卡带!')
					}
					if (event.rarity == 'epic') {
						game.log('可喜可贺!<span class=\"thundertext\">', lib.config.connect_nickname, '</span>通过卖废品获得了', '<span class=\"yellowtext\">' + '史诗' + '</span>', '武将<span class=\"yellowtext\">' + get.translation(event.name) + '</span>', '的卡带!')
					}
					if (event.rarity == 'legend') {
						game.log('万众瞩目!<span class=\"thundertext\">', lib.config.connect_nickname, '</span>通过卖废品获得了', '<span class=\"legendtext\">' + '传说' + '</span>', '武将<span class=\"legendtext\">' + get.translation(event.name) + '</span>', '的卡带!<br>让我们一起祝' + str + '长命百岁吧!')
					}

					game.saveExtensionConfig("海国图志", "haitu_soul", config);
					if (event.num > 0) {
						event.goto(1)
					}

				},
			}
			lib.skill.haitu_resoulbag = {
				name: "杂项",
				// mode: "identity",
				// prompt: "执行卡带、主线相关玩法操作",

				enable: "phaseUse",
				silent: true,
				charlotte: true,
				forceunique: true,

				filter(event, player) {
					if (_status.connectMode) {
						return false
					}
					if (lib.config.extension_海国图志_soul == 1) {
						return false
					}
					if (!lib.game.changeCoin) {
						return false
					}
					if (!lib.config.coin) {
						return false;
					}
					let list = [],
						config = game.getExtensionConfig("海国图志", "haitu_soul");
					if (!config || config.size == 0) return game.getExtensionConfig('富甲天下', 'enable')
					return true;
					return player.isUnderControl(true)
				},

				story() {
					"step 0"
					// game.saveConfig("story", 2);测试分支剧情各路线首次通关有无bug用
					var num = 0;

					{
						if (lib.config.story == 0) {
							num += 1;
							game.haitu_story = true;

							game.haitu_story = true;

							var next = game.createEvent("soul");
							next.player = player;

							next.setContent(lib.skill.haitu_resoulbag.xuzhang);





						}
						if (lib.config.story == 1) {
							game.haitu_story = true;
							num += 1;
							var next = game.createEvent("story");
							next.player = player;

							next.setContent(lib.skill.haitu_resoulbag.home1);


						}
						if (lib.config.story == 2) {
							game.haitu_story = true;
							num += 1;
							var next = game.createEvent("story");
							next.player = player;

							next.setContent(lib.skill.haitu_resoulbag.pizza);


						}

						if (num == 0) {
							game.log("您已完成目前所有主线剧情，感谢您对本扩展的支持。")
						}

					}





				},
				pizza() {
					'step 0'
					delete _status.scene;
					delete game.scene;
					var over = game.zhu;
					delete over.isZhu;

					game.zhu = player;
					player.identity = "zhu";
					player.setIdentity();
					event.trigger("zhuUpdate");
					game.filterPlayer2()
						.sortBySeat()
						.forEach(function (current) {
							if (current == player) {
								// player.addSkill('haitu_olyuji_debuff');

								player.showIdentity();


							} else {

								var cards = current.getCards('hejsx');
								cards.loseToDiscardpile;
								game.players.remove(current);
								if (_status.roundStart == current) _status.roundStart = current.next || current.getNext() || game.players[0];
								game.removePlayer(current);


							}
						});
					game.haitu_story = true;
					game.me.storage.qg_level1 = true;
					game.me.storage.qg_level2 = true;
					game.me.storage.qg_level3 = true;

					ui.background.setBackgroundImage("extension/海国图志/changjing/haitu_safehouse.jpg");
					galgame.sce('披萨店0', true);
					galgame.sce('披萨店1', true);
					galgame.sce('披萨店2', true);
					if (!player.hasSex('female')) {
						galgame.sce('披萨店3M', true);
					} else {
						galgame.sce('披萨店3F', true);
					}
					var list = [];
					list.push("确定");
					player.chooseControl(list).set("prompt", "下一幕");
					"step 1"
					player.seatNum = 1;
					ui.background.setBackgroundImage("extension/海国图志/changjing/pizza.jpg");
					galgame.sce('披萨店4', true);
					galgame.sce('披萨店5', true);
					galgame.sce('披萨店6', true);
					galgame.sce('披萨店7', true);
					if (!player.hasSex('female')) {
						galgame.sce('披萨店8M', true);
					} else {
						galgame.sce('披萨店8F', true);
					}
					galgame.sce('披萨店9', true);
					galgame.sce('披萨店10', true);
					galgame.sce('披萨店11', true);
					galgame.sce('披萨店12', true);
					if (!player.hasSex('female')) {
						galgame.sce('披萨店13M', true);
					} else {
						galgame.sce('披萨店13F', true);
					}
					galgame.sce('披萨店14', true);
					galgame.sce('披萨店15', true);
					galgame.sce('披萨店16', true);
					galgame.sce('披萨店17', true);
					if (!player.hasSex('female')) {
						galgame.sce('披萨店18M', true);
					} else {
						galgame.sce('披萨店18F', true);
					}


					let players1 = game.addPlayer(1, "haitu_Monster3");
					// game.players.push(players1);


					// game.zhu = player;

					players1.directgain(get.cards(6));
					delete player.isZhu;
					player.identity = "commoner";
					game.zhu = players1;
					players1.identity = "zhu";
					players1.setIdentity();
					players1.identity = "zhu";
					players1.setIdentity('zhu');
					event.trigger("zhuUpdate");
					players1.seatNum = 2;
					players1.forceShown = true;
					// players1.addSkill("tianfu_kuangbao");
					players1.addSkill("tianfu_shixue");
					players1.addSkill("liedan");
					players1.addSkill("paoxiao");

					text = document.createElement('div');
					text.innerHTML = "BOSS";
					text.style.backgroundSize = 'cover';
					text.style.width = '100%';
					text.style.height = '100%';
					// text.style.left = '25%';
					text.style.transform = 'translateY(-200px)';
					text.style['font-size'] = '17px';
					text.style['text-align'] = 'center';
					text.style['font-family'] = 'shousha';
					text.style['text-shadow'] = 'rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,black 0 0 1px';
					players1.node.avatar.appendChild(text);
					ui.refresh(text);
					text.style.transform = '';
					players1.update();
					// game.broadcastAll(
					// 	 function (player, players1) {
					// 		 game.swapSeat(player, players1);
					//   },
					//  player,
					//  players1
					//  );
					var list = [];
					for (var i in lib.character) {
						if (!lib.filter.characterDisabled(i) && !lib.filter.characterDisabled2(i)) {
							list.push(i);
						}
					}
					var players = game.players.concat(game.dead);
					for (var i = 0; i < players.length; i++) {
						list.remove(players[i].name);
						list.remove(players[i].name1);
						list.remove(players[i].name2);
					}
					var o = list.randomGet();
					let players2 = game.addPlayer(2, o);
					// game.players.push(players2);


					players2.directgain(get.cards(4));
					players2.identity = "nei";
					players2.seatNum = 3;


					players2.setIdentity('nei');
					players2.forceShown = true;
					text1 = document.createElement('div');
					text1.innerHTML = "受惊的食客";
					text1.style.backgroundSize = 'cover';
					text1.style.width = '100%';
					text1.style.height = '100%';
					// text.style.left = '25%';
					text1.style.transform = 'translateY(-200px)';
					text1.style['font-size'] = '17px';
					text1.style['text-align'] = 'center';
					text1.style['font-family'] = 'shousha';
					text1.style['text-shadow'] = 'rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,black 0 0 1px';
					players2.node.avatar.appendChild(text1);
					ui.refresh(text1);
					text1.style.transform = '';
					players2.update();
					let players3 = game.addPlayer(3, "haitu_Ryder");
					// game.players.push(players3);
					players3.seatNum = 4;
					players3.directgain(get.cards(4));
					players3.identity = "fan";
					players3.setIdentity('fan');
					players3.forceShown = true;


					let players4 = game.addPlayer(4, "haitu_Carl");
					players4.seatNum = 5;

					players4.directgain(get.cards(4));
					// game.players.push(players4);
					players4.identity = "fan";
					players4.setIdentity('fan');
					players4.forceShown = true;
					game.filterPlayer2()
						.sortBySeat()
						.forEach(function (current) {


							var next = game.createEvent("boss");
							next.player = current;

							next.setContent(lib.skill.akiko_dongcha.content);


						});
					game.addGlobalSkill("haitu_pizza_fan");
					game.addGlobalSkill("haitu_pizza_zhu");
					game.addGlobalSkill("haitu_pizza_commoner");
					game.addGlobalSkill("haitu_pizza_win");
					player.storage.haitu_pizza_commoner = true;
					lib.config.background_music = 'music_custom';
					lib.config.background_music_src = lib.assetURL + 'extension/海国图志/BGM/Plosive Attack.flac';
					game.playBackgroundMusic();


				},
				home1() {
					"step 0"
					delete _status.scene;
					delete game.scene;
					game.haitu_story = true;
					game.me.storage.qg_level1 = true;
					game.me.storage.qg_level2 = true;
					game.me.storage.qg_level3 = true;
					var over = game.zhu;
					delete over.isZhu;
					player.identity = "zhu";
					game.zhu = player;
					event.trigger("zhuUpdate");
					game.filterPlayer2()
						.sortBySeat()
						.forEach(function (current) {
							if (current == player) {
								// player.addSkill('haitu_olyuji_debuff');

								player.showIdentity();


							} else {
								if (_status.roundStart == current) _status.roundStart = current.next || current.getNext() || game.players[0];
								var cards = current.getCards('hejsx');
								cards.loseToDiscardpile;
								game.players.remove(current);
								game.removePlayer(current);
							}
						});
					ui.background.setBackgroundImage("extension/海国图志/changjing/airport.jpg");
					player.seatNum = 1;
					galgame.sce('巷战0', true);
					galgame.sce('巷战0.5', true);
					galgame.sce('巷战1', true);
					galgame.sce('巷战2', true);
					galgame.sce('巷战3', true);
					galgame.sce('巷战4', true);
					galgame.sce('巷战5', true);
					player.seatNum = 1;
					var list = [];
					list.push("确定");
					player.chooseControl(list).set("prompt", "下一幕");
					"step 1"
					var next = game.createEvent("story");
					next.player = player;

					next.setContent(lib.skill.haitu_resoulbag.home2);



				},
				home2() {
					"step 0"
					ui.background.setBackgroundImage("extension/海国图志/changjing/home2.jpg");
					galgame.sce('巷战6', true);
					galgame.sce('巷战7', true);
					galgame.sce('巷战8', true);
					galgame.sce('巷战9', true);
					galgame.sce('巷战10', true);
					galgame.sce('巷战11', true);
					galgame.sce('巷战12', true);
					galgame.sce('巷战13', true);
					galgame.sce('巷战14', true);
					galgame.sce('巷战15', true);
					galgame.sce('巷战16', true);
					galgame.sce('巷战17', true);

					var next = game.createEvent("story");
					next.player = player;

					next.setContent(lib.skill.haitu_resoulbag.home3);





				},
				home3() {
					"step 0"
					galgame.sce('巷战18', true);
					galgame.sce('巷战19', true);
					galgame.sce('巷战20', true);
					galgame.sce('巷战21', true);
					galgame.sce('巷战22', true);
					galgame.sce('巷战23', true);
					galgame.sce('巷战24', true);
					galgame.sce('巷战25', true);
					galgame.sce('巷战26', true);
					galgame.sce('巷战27', true);
					galgame.sce('巷战28', true);
					galgame.sce('巷战29', true);
					galgame.sce('巷战30', true);
					galgame.sce('巷战30.25', true);
					galgame.sce('巷战30.5', true);
					galgame.sce('巷战31', true);
					if (!player.hasSex('female')) {
						galgame.sce('巷战32M', true);
					} else {
						galgame.sce('巷战32F', true);
					}
					galgame.sce('巷战33', true);
					galgame.sce('巷战34', true);
					galgame.sce('巷战35', true);
					let players1 = game.addPlayer(1, "haitu_monster2");
					game.addGlobalSkill('haitu_home')
					players1.directgain(get.cards(4));
					players1.identity = "fan";
					players1.setIdentity('fan');
					players1.forceShown = true;
					players1.seatNum = 3;

					players1.update();
					let players2 = game.addPlayer(2, "haitu_Carl");
					players2.directgain(get.cards(4));
					players2.identity = "zhong";
					players2.setIdentity('zhong');
					players2.forceShown = true;
					players2.seatNum = 4;
					players2.update();
					let players3 = game.addPlayer(3, "haitu_monster2");
					players3.directgain(get.cards(4));
					players3.identity = "fan";
					players3.setIdentity('fan');
					players3.forceShown = true;
					players3.seatNum = 5;
					players3.update();
					game.filterPlayer2()
						.sortBySeat()
						.forEach(function (current) {


							var next = game.createEvent("boss");
							next.player = current;

							next.setContent(lib.skill.akiko_dongcha.content);


						});
					var list = [];
					list.push("准备完毕");
					player.chooseControl(list).set("prompt", "准备好了吗?");
					"step 1"
					player.$fullscreenpop(['战斗开始!'].randomGet(), 'fire');
					lib.config.background_music = 'music_custom';
					lib.config.background_music_src = lib.assetURL + 'extension/海国图志/BGM/Arise Within You.flac';
					game.playBackgroundMusic();

				},


				xuzhang() {
					"step 0"
					delete _status.scene;
					delete game.scene;
					game.haitu_story = true;
					ui.background.setBackgroundImage("extension/海国图志/changjing/废弃仓库.jpg");
					game.me.storage.qg_level1 = true;
					game.me.storage.qg_level2 = true;
					game.me.storage.qg_level3 = true;
					var over = game.zhu;
					delete over.isZhu;
					player.identity = "zhu";
					game.zhu = player;
					event.trigger("zhuUpdate");
					game.filterPlayer2()
						.sortBySeat()
						.forEach(function (current) {
							if (current == player) {
								// player.addSkill('haitu_olyuji_debuff');

								player.showIdentity();


							} else {
								if (!current.storage.haitu_fuben) {
									var cards = current.getCards('hejsx');
									{
										if (_status.roundStart == current) _status.roundStart = current.next || current.getNext() || game.players[0];
										cards.loseToDiscardpile;
									}
									game.players.remove(current);
									game.removePlayer(current);
								}
							}
						});
					player.seatNum = 1;
					galgame.sce('序章', true);
					galgame.sce('序章0', true);
					galgame.sce('序章1', true);
					galgame.sce('序章1.5', true);
					galgame.sce('序章1.75', true);
					galgame.sce('序章2', true);
					galgame.sce('序章3', true);
					galgame.sce('序章4', true);
					let players1 = game.addPlayer(1, "haitu_monster1");
					// players1.SeatNum = player.getSeatNum() + 1;
					players1.directgain(get.cards(2));
					players1.identity = "fan";
					players1.setIdentity('fan');
					players1.forceShown = true;

					players1.seatNum = 2


					game.filterPlayer2()
						.sortBySeat()
						.forEach(function (current) {
							{

								var next = game.createEvent("boss");
								next.player = current;

								next.setContent(lib.skill.akiko_dongcha.content);


							}
						});
					// if (players1.node.seat) players1.node.seat.innerHTML = get.cnNumber(players1.seat, true)
					// players1.seatNum = 2;
					players1.update();
					players1.storage.haitu_fuben = true;
					let players2 = game.addPlayer(2, "haitu_monster1");
					// players2.SeatNum = player.getSeatNum() + 2;
					players2.seatNum = 3
					// if (players2.node.seat) players2.node.seat.innerHTML = get.cnNumber(players2.seat, true)
					// players2.seatNum = 3;
					players2.directgain(get.cards(2));
					players2.identity = "fan";
					players2.setIdentity('fan');
					players2.storage.haitu_fuben = true;
					players2.forceShown = true;

					players2.update();
					game.filterPlayer2()
						.sortBySeat()
						.forEach(function (current) {
							{

								var next = game.createEvent("boss");
								next.player = current;

								next.setContent(lib.skill.akiko_dongcha.content);


							}
						});



					game.addGlobalSkill('haitu_xuzhang')
					var list = [];
					list.push("准备完毕");
					player.chooseControl(list).set("prompt", "准备好了吗?");
					"step 1"
					player.$fullscreenpop(['战斗开始!'].randomGet(), 'fire');
					lib.config.background_music = 'music_custom';
					lib.config.background_music_src = lib.assetURL + 'extension/海国图志/BGM/Arise Within You.flac';
					game.playBackgroundMusic();
				},
				content() {
					"step 0"

					// galgame.sce('木乃伊', true)
					var list0 = [];

					var choiceList = [
						'转生:消耗200金币买通死神,将卡带仓库中的一个武将卡带随机转化为其他武将卡带。',
						'出售:消耗200金币聘请俄语翻译,把一个卡带卖给疯狂米塔获取货币资源。',
						'银行:货币资源相互转化',
						'商店:利用货币购买商品。',
						'背包:查看拥有的道具与效果并选择使用。',
						'剧情:在疯狂的乱入世界里开始一段荒唐的冒险。'

					];
					let list = [],
						config0 = game.getExtensionConfig("海国图志", "haitu_soul");
					for (let [key, value] of config0) {
						if (value >= 1 && lib.character[key]) list.push(key);
					}
					if (list.length && list != [] && lib.config.coin >= 200) {
						list0.push("转生");
						list0.push("出售");
					}
					list0.push('银行');
					list0.push('商店');
					list0.push("背包");
					// if (get.mode == "identity") 
					if (get.mode() === "identity") {
						if (game.haitu_story) { } else {
							{
								list0.push('剧情');
							}

						}
					}
					if (game.getExtensionConfig('欧陆风云', 'enable')) {
						if (player.hasSkill('colonialExploration') || player.hasSkill('Europa_lihang_exploration')) {
							list0.push("码头");
							choiceList.push('码头:《欧陆风云》联动机制，将本扩展的货币按比例转化为探险货物。')
						}
					}
					list0.push("取消")
					player.chooseControl(list0).set('choiceList', choiceList, false);
					"step 1"
					if (result.control == "转生") {
						var next = game.createEvent("soul");
						next.player = player;

						next.setContent(lib.skill.haitu_resoulbag.resoul);


					}
					if (result.control == "出售") {
						var next = game.createEvent("soul");
						next.player = player;

						next.setContent(lib.skill.haitu_resoulbag.sell);
					}
					if (result.control == "银行") {
						var next = game.createEvent("soul");
						next.player = player;

						next.setContent(lib.skill.haitu_resoulbag.bank);


					}
					if (result.control == "商店") {
						var next = game.createEvent("soul");
						next.player = player;

						next.setContent(lib.skill.haitu_resoulbag.shop);


					}
					if (result.control == "背包") {
						var next = game.createEvent("soul");
						next.player = player;

						next.setContent(lib.skill.haitu_resoulbag.backpack);


					}
					if (result.control == "码头") {
						var next = game.createEvent("soul");
						next.player = player;

						next.setContent(lib.skill.haitu_resoulbag.explore);
					}
					if (result.control == "剧情") {
						var next = game.createEvent("soul");
						next.player = player;

						next.setContent(lib.skill.haitu_resoulbag.story);
					}
				},
				explore() {
					"step 0"
					var list = [],
						choiceList = [];
					if (lib.config.diamond >= 3) {
						list.push("宝石");
						choiceList.push("一箱宝石:需要钻石x3")
					}
					if (lib.config.gold >= 5) {
						list.push("黄金");
						choiceList.push("一箱黄金:需要黄金x5")
					}
					if (lib.config.silk >= 10) {
						list.push("丝绸");
						choiceList.push("一箱丝绸:需要丝绸x10")
					}
					list.push("关闭");
					player.chooseControl(list).set('choiceList', choiceList, false).set("prompt", "请选择要装填的货物。");
					"step 1"
					if (result.control == "宝石") {
						game.saveConfig("diamond", lib.config.diamond - 3);
						player.addToExpansion(get.cards(1), 'giveAuto').set("gaintag", ["Europa_gem"]);
					}
					if (result.control == "黄金") {
						game.saveConfig("gold", lib.config.gold - 5);
						player.addToExpansion(get.cards(1), player, 'giveAuto').gaintag.add('Europa_gold');
					}
					if (result.control == "丝绸") {
						game.saveConfig("silk", lib.config.silk - 10);
						player.addToExpansion(get.cards(1), 'giveAuto').set("gaintag", ['Europa_silk']);
					}

					var str1 = "<span class=\"greentext\">丝绸:<span>" + lib.config.silk + "</span><span></span></span>";
					var str2 = "<span class=\"yellowtext\">黄金:<span>" + lib.config.gold + "</span><span></span></span>";
					var str3 = "<span class=\"legendtext\">钻石:<span>" + lib.config.diamond + "</span><span></span></span>";

					ui.silk.innerHTML = str1;
					ui.gold.innerHTML = str2;
					ui.diamond.innerHTML = str3;


				},
				backpack() {
					"step 0"
					var list = [];

					if (lib.config.MpDrink >= 1) {
						list.push('法力药水')
					}
					if (lib.config.lifeCoin >= 1 && game.dead.length > 0) {
						list.push('复活币')
					}

					if (game.haitu_story) { } else {
						if (lib.config.dream >= 1 && get.mode() === "identity") {
							list.push('安眠药')
						}
					}
					if (lib.config.fiction >= 1) {
						list.push('空白剧本')
					}
					var choiceList = [];
					if (lib.config.MpDrink >= 1) {

						choiceList.push('法力药水:出牌阶段,重置自身所有非限定觉醒技使用次数。	<br><li>剩余:' + lib.config.MpDrink + '');
					}

					if (lib.config.lifeCoin >= 1) {
						choiceList.push('复活币:出牌阶段,令一名阵亡角色以全部体力复活并摸两张牌。（死亡时可自救）	<br><li>剩余:' + lib.config.lifeCoin + '')

					}
					if (lib.config.dream >= 1) {
						choiceList.push('安眠药:出牌阶段，你可以进入曾经通关过的主线剧情。	<br><li>剩余:' + lib.config.dream + '')
					}
					if (lib.config.fiction >= 1) {
						choiceList.push('空白剧本:出牌阶段，你可以将一盘卡带以“剧著”技能炼制成角色牌。	 <br><li>剩余:' + lib.config.fiction + '')
					}
					list.push("关闭");
					player.chooseControl(list).set('choiceList', choiceList, false).set("prompt", "请选择要使用的道具。");
					"step 1"
					if (result.control == "法力药水") {
						game.saveConfig("MpDrink", lib.config.MpDrink - 1);
						var skills = player.getSkills(null, false, false).filter(skill => {
							var info = get.info(skill);
							if (info.limited) {
								return false
							}
							if (info.juexingji) {
								return false
							}
							if (!info || get.is.empty(info) || info.charlotte) return false;
							return true;
						});
						game.expandSkills(skills);
						var resetSkills = [];
						var suffixs = ['used', 'round', 'block', 'blocker'];
						for (var skill of skills) {
							var info = get.info(skill);
							if (typeof info.usable == 'number') {
								if (player.hasSkill('counttrigger') && player.storage.counttrigger[skill] && player.storage.counttrigger[skill] >= 1) {
									delete player.storage.counttrigger[skill];
									resetSkills.add(skill);
								}
								if (typeof get.skillCount(skill) == 'number' && get.skillCount(skill) >= 1) {
									delete player.getStat('skill')[skill];
									resetSkills.add(skill);
								}
							}
							if (info.round && player.storage[skill + '_roundcount']) {
								delete player.storage[skill + '_roundcount'];
								resetSkills.add(skill);
							}
							if (player.awakenedSkills.contains(skill)) {
								player.restoreSkill(skill);
								resetSkills.add(skill);
							}
							for (var suffix of suffixs) {
								if (player.hasSkill(skill + '_' + suffix)) {
									player.removeSkill(skill + '_' + suffix);
									resetSkills.add(skill);
								}
							}
						}
						if (resetSkills.length) {
							var str = '';
							for (var i of resetSkills) {
								str += '【' + get.translation(i) + '】、';
							}
							game.log("<span class=\"thundertext\">", lib.config.connect_nickname, '</span>使用法力药水重置了其操控角色', player, '的技能', '#g' + str.slice(0, -1));
						} else {
							game.log("<span class=\"thundertext\">", lib.config.connect_nickname, '</span>口渴了，喝了一瓶法力药水，味道有点甜。')
						}

					}

					if (result.control == "复活币") {
						var next = game.createEvent("fuhuo");
						next.player = player;
						next.setContent(lib.skill.haitu_resoulbag.revive);

					}
					if (result.control == "安眠药") {
						var next = game.createEvent("dream");
						next.player = player;
						next.setContent(lib.skill.haitu_resoulbag.dream);

					}
					if (result.control == "空白剧本") {
						var next = game.createEvent("fiction");
						next.player = player;
						next.setContent(lib.skill.haitu_resoulbag.fiction);
					}




				},
				fiction() {
					"step 0"
					var next = game.createEvent("haitu_reboot");
					next.player = player;
					next.setContent(lib.skill.haitu_reboot.content);
					let list = [],
						config0 = game.getExtensionConfig("海国图志", "haitu_soul");
					for (let [key, value] of config0) {
						if (value >= 1 && lib.character[key]) list.push(key);
					}
					player.chooseButton(false).set('createDialog', ['〖转生〗：请选择一个武将卡带炼制成游戏牌。', [list, 'character']]);
					"step 1"
					if (result.bool) {
						var config = game.getExtensionConfig("海国图志", "haitu_soul");
						var currentValue = config.get(result.links[0]) || 0;

						config.set(result.links[0], currentValue - 1);
						if (config.get(result.links[0]) <= 0) {
							config.delete(result.links[0]);
						}
						var list0 = get.gainableSkills(function (info, skill, name) {

							return lib.character && lib.character[result.links[0]];
						});
						game.saveExtensionConfig("海国图志", "haitu_soul", config);
						var skills = [];

						var nameskills = lib.character[result.links[0]][3]
						for (var i = 0; i < nameskills.length; i++) {

							if (list0.contains(nameskills[i])) {
								skills.add(nameskills[i]);
							}
						}
						game.addVideo('skill', player, ['haitu_juzhu', [skills, result.links[0]]]);
						lib.skill.haitu_juzhu.process(skills, result.links[0]);
						var num = [1, 2, 3, 4].randomGet(1),
							suit = ['heart', 'club', 'diamond', 'spade'].randomGet(1);
						var namen = 'haitu_juzhu_' + result.links[0];
						var card = game.createCard(namen, suit, num);
						lib.inpile.push(namen);
						game.log(result.links[0], '被炼制成了卡牌', card);
						player.gain(card, 'gain1')._triggered = null;
						player.update();
						game.saveConfig("fiction", lib.config.fiction - 1);
					} else {
						event.finish()
					}




				},
				dream() {
					"step 0"
					var list = [];
					if (lib.config.story >= 1) {
						list.push("序章");
					}
					if (lib.config.story >= 2) {
						list.push("巷战")
					}
					if (lib.config.story >= 3) {
						list.push("披萨店")
					}
					list.push("取消")
					player.chooseControl(list).set("prompt", "请选择要进入的剧情。");
					"step 1"
					if (result.control == "序章") {
						game.saveConfig("dream", lib.config.dream - 1);
						game.haitu_story = true;



						var next = game.createEvent("soul");
						next.player = player;

						next.setContent(lib.skill.haitu_resoulbag.xuzhang);
					}
					if (result.control == "巷战") {
						var next = game.createEvent("story");
						next.player = player;

						next.setContent(lib.skill.haitu_resoulbag.home1);
					}
					if (result.control == "披萨店") {
						var next = game.createEvent("story");
						next.player = player;

						next.setContent(lib.skill.haitu_resoulbag.pizza);
					}


				},
				revive() {
					"step 0"


					var list = [];

					for (var i = 0; i < game.dead.length; i++) {
						list.push(game.dead[i].name);
					}
					player.chooseButton(ui.create.dialog('选择1名角色复活', [list, 'character']), false, function (button) {
						for (var i = 0; i < game.dead.length && game.dead[i].name != button.link; i++);
						return ai.get.attitude(_status.event.player, game.dead[i]);
					});
					"step 1"
					if (result.bool) {
						for (var i = 0; i < game.dead.length && game.dead[i].name != result.buttons[0].link; i++);
						var dead = game.dead[i];
						game.log("<span class=\"thundertext\">", lib.config.connect_nickname, "</span>使用复活币复活了", dead)
						dead.revive(dead.maxHp);
						dead.draw(2)

					} else {
						event.finish()
					}
				},
				bank() {
					"step 0"
					var list = [];
					var choiceList = [
						'黄金x10：1钻石',
						'丝绸x10: 1黄金',
						'丝绸x100: 1钻石',
						'黄金x1: 100丝绸',
						'钻石x1: 100黄金 / 10000丝绸'

					];
					if (lib.config.diamond >= 1) {
						list.push("黄金X10");
						list.push("丝绸X100")
					}
					if (lib.config.gold >= 1) {
						list.push("丝绸X10")
					}
					if (lib.config.silk >= 100) {
						list.push("黄金X1")
					}
					if (lib.config.silk >= 10000 || lib.config.gold >= 100) {
						list.push("钻石X1")
					}
					list.push("取消")
					player.chooseControl(list).set('choiceList', choiceList, false).set("prompt", "请选择要兑换的资源。");
					"step 1"
					if (result.control == "黄金X10") {
						game.saveConfig("diamond", lib.config.diamond - 1);
						game.saveConfig("gold", lib.config.gold + 10);
						game.playAudio("effect", "coin");
					}
					if (result.control == "丝绸X100") {
						game.saveConfig("diamond", lib.config.diamond - 1);
						game.saveConfig("silk", lib.config.silk + 100);
						game.playAudio("effect", "coin");
					}
					if (result.control == "丝绸X10") {
						game.saveConfig("gold", lib.config.gold - 1);
						game.saveConfig("silk", lib.config.silk + 10);
						game.playAudio("effect", "coin");
					}
					if (result.control == "黄金X1") {
						game.saveConfig("silk", lib.config.silk - 100);
						game.saveConfig("gold", lib.config.gold + 1);
						game.playAudio("effect", "coin");
					}
					var str1 = "<span class=\"greentext\">丝绸:<span>" + lib.config.silk + "</span><span></span></span>";
					var str2 = "<span class=\"yellowtext\">黄金:<span>" + lib.config.gold + "</span><span></span></span>";
					var str3 = "<span class=\"legendtext\">钻石:<span>" + lib.config.diamond + "</span><span></span></span>";

					ui.silk.innerHTML = str1;
					ui.gold.innerHTML = str2;
					ui.diamond.innerHTML = str3;
					if (result.control == "钻石X1") {
						event.goto(3)
					}
					"step 2"
					event.finish()
					"step 3"
					var list0 = [];
					if (lib.config.silk >= 10000) {
						list0.push("丝绸X10000")
					}
					if (lib.config.gold >= 100) {
						list0.push("黄金X100")
					}
					player.chooseControl(list0).set("prompt", "请选择兑换钻石所用货币。")
					"step 4"
					if (result.control == "丝绸X10000") {
						game.saveConfig("silk", lib.config.silk - 10000);
					}
					if (result.control == "黄金X100") {
						game.saveConfig("gold", lib.config.gold - 100);
					}
					game.saveConfig("diamond", lib.config.diamond + 1);
					game.playAudio("effect", "coin");
					var str1 = "<span class=\"greentext\">丝绸:<span>" + lib.config.silk + "</span><span></span></span>";
					var str2 = "<span class=\"yellowtext\">黄金:<span>" + lib.config.gold + "</span><span></span></span>";
					var str3 = "<span class=\"legendtext\">钻石:<span>" + lib.config.diamond + "</span><span></span></span>";

					ui.silk.innerHTML = str1;
					ui.gold.innerHTML = str2;
					ui.diamond.innerHTML = str3;
				},
				sell() {
					"step 0"
					game.changeCoin(-200);
					var next = game.createEvent("haitu_reboot");
					next.player = player;
					next.setContent(lib.skill.haitu_reboot.content);
					let list = [],
						config0 = game.getExtensionConfig("海国图志", "haitu_soul");
					var list1 = [];
					var list2 = [];
					var list3 = [];
					var list4 = [];
					for (let [key, value] of config0) {
						if (value >= 1 && lib.character[key]) {
							// list.push(key);

							if (lib.rank.rarity.legend.includes(key)) {
								list1.push(key);
							} else if (lib.rank.rarity.epic.includes(key)) {
								list2.push(key);
							} else if (lib.rank.rarity.rare.includes(key)) {
								list3.push(key);
							} else {
								list4.push(key);
							}

						}

					}
					for (var i of list1) {
						list.push(i)
					}
					for (var i of list2) {
						list.push(i)
					}
					for (var i of list3) {
						list.push(i)
					}
					for (var i of list4) {
						list.push(i)
					}
					player.chooseButton(false).set('createDialog', ['〖出售〗：请选择出售一个武将卡带。<br><li>越靠前的武将评级越高', [list, "character"]]);
					"step 1"
					if (result.bool) {
						var config = game.getExtensionConfig("海国图志", "haitu_soul");
						var currentValue = config.get(result.links[0]) || 0;

						config.set(result.links[0], currentValue - 1);
						if (config.get(result.links[0]) <= 0) {
							config.delete(result.links[0]);
						}
						var num1 = [1, 2, 3, 4, 5];
						var num2 = [4, 5, 6];
						var silk = num1.randomGet(1),
							gold = 0,
							diamond = 0;
						if (lib.rank.rarity.rare.includes(result.links[0])) {
							silk += 1;
							event.rank = "稀有武将"
						}
						if (lib.rank.rarity.epic.includes(result.links[0])) {
							silk += 2;
							gold += num1.randomGet(1);
							event.rank = "史诗武将"
						}
						if (lib.rank.rarity.legend.includes(result.links[0])) {
							silk += 3;
							gold += num2.randomGet(1);
							diamond += num1.randomGet(1);
							event.rank = "传说武将"
						}
						if (!event.rank) {
							event.rank = "其他武将"
						}
						lib.config.silk += silk;
						lib.config.gold += gold;
						lib.config.diamond += diamond;
						game.saveConfig("silk", lib.config.silk);


						game.saveConfig("gold", lib.config.gold);



						game.saveConfig("diamond", lib.config.diamond);
						var str1 = "<span class=\"greentext\">丝绸:<span>" + lib.config.silk + "</span><span></span></span>";
						var str2 = "<span class=\"yellowtext\">黄金:<span>" + lib.config.gold + "</span><span></span></span>";
						var str3 = "<span class=\"legendtext\">钻石:<span>" + lib.config.diamond + "</span><span></span></span>";

						ui.silk.innerHTML = str1;
						ui.gold.innerHTML = str2;
						ui.diamond.innerHTML = str3;
						game.log('<span class=\"thundertext\">', lib.config.connect_nickname, '</span>出售了', event.rank, result.links[0], "获得了<span class=\"greentext\">丝绸</span>:", silk, "<span class=\"yellowtext\">黄金</span>:", gold, "<span class=\"legendtext\">钻石</span>:", diamond, "。");
						game.playAudio("effect", "coin");
					} else {
						event.finish()
					}
				},
				shop() {
					"step 0"
					var list = [],
						choiceList = [
							'法力药水:出牌阶段,重置自身所有非限定觉醒技使用次数。	<span class=\"yellowtext\"> <br><li>黄金:30<span>',
							'复活币:出牌阶段,对阵亡角色使用,令其以全部体力复活并摸两张牌。当你死亡前，你可以消耗以取消之，恢复全部体力并摸两张牌。	<span class=\"legendtext\"> <br><li>钻石:10<span> ',
							'安眠药:出牌阶段，你可以进入曾经通关过的主线剧情。	  <span class=\"legendtext\"> <br><li>丝绸:5<span> ',
							'空白剧本:出牌阶段，你可以将一盘卡带以“剧著”技能炼制成角色牌。	 <span class=\"legendtext\"> <br><li>丝绸:20<span> '

						];
					if (lib.config.gold >= 30) {
						list.push("法力药水")
					}
					if (lib.config.diamond >= 10) {
						list.push("复活币")
					}
					if (lib.config.silk >= 5) {
						list.push("安眠药")
					}
					if (lib.config.silk >= 20) {
						list.push("空白剧本")
					}
					list.push("取消");
					player.chooseControl(list).set('choiceList', choiceList, false).set("prompt", "请选择要购买的道具。");
					"step 1"
					if (result.control == "法力药水") {
						game.saveConfig("gold", lib.config.gold - 30);
						game.saveConfig("MpDrink", lib.config.MpDrink + 1);
						game.log("<span class=\"thundertext\">", lib.config.connect_nickname, "</span>成功购买<span class=\"icetext\">法力药水</span>。")
					}
					if (result.control == "安眠药") {
						game.saveConfig("silk", lib.config.silk - 5);
						game.saveConfig("dream", lib.config.dream + 1);
						game.log("<span class=\"thundertext\">", lib.config.connect_nickname, "</span>成功购买<span class=\"legendtext\">安眠药</span>。")
					}
					if (result.control == "空白剧本") {
						game.saveConfig("silk", lib.config.silk - 20);
						game.saveConfig("fiction", lib.config.fiction + 1);
						game.log("<span class=\"thundertext\">", lib.config.connect_nickname, "</span>成功购买<span class=\"yellowtext\">空白剧本</span>。")
					}
					if (result.control == "复活币") {
						game.saveConfig("diamond", lib.config.diamond - 10);
						game.saveConfig("lifeCoin", lib.config.lifeCoin + 1);
						game.log("<span class=\"thundertext\">", lib.config.connect_nickname, "</span>成功购买<span class=\"yellowtext\">复活币</span>。")
					}
					var str1 = "<span class=\"greentext\">丝绸:<span>" + lib.config.silk + "</span><span></span></span>";
					var str2 = "<span class=\"yellowtext\">黄金:<span>" + lib.config.gold + "</span><span></span></span>";
					var str3 = "<span class=\"legendtext\">钻石:<span>" + lib.config.diamond + "</span><span></span></span>";

					ui.silk.innerHTML = str1;
					ui.gold.innerHTML = str2;
					ui.diamond.innerHTML = str3;



				},
				resoul() {
					"step 0"
					game.changeCoin(-200);
					var next = game.createEvent("haitu_reboot");
					next.player = player;
					next.setContent(lib.skill.haitu_reboot.content);
					let list = [],
						config0 = game.getExtensionConfig("海国图志", "haitu_soul");
					var list1 = [];
					var list2 = [];
					var list3 = [];
					var list4 = [];
					for (let [key, value] of config0) {
						if (value >= 1 && lib.character[key]) {
							// list.push(key);

							if (lib.rank.rarity.legend.includes(key)) {
								list1.push(key);
							} else if (lib.rank.rarity.epic.includes(key)) {
								list2.push(key);
							} else if (lib.rank.rarity.rare.includes(key)) {
								list3.push(key);
							} else {
								list4.push(key);
							}

						}

					}
					for (var i of list1) {
						list.push(i)
					}
					for (var i of list2) {
						list.push(i)
					}
					for (var i of list3) {
						list.push(i)
					}
					for (var i of list4) {
						list.push(i)
					}
					player.chooseButton(false).set('createDialog', ['〖转生〗：请选择一个武将卡带进行随机转化。', [list, 'character']]);
					"step 1"
					if (result.bool) {
						var config = game.getExtensionConfig("海国图志", "haitu_soul");
						var currentValue = config.get(result.links[0]) || 0;

						config.set(result.links[0], currentValue - 1);
						if (config.get(result.links[0]) <= 0) {
							config.delete(result.links[0]);
						}
						game.log(result.links[0], '已经进入轮回。')
						game.saveExtensionConfig("海国图志", "haitu_soul", config);
					} else {
						event.finish()
					}
					"step 2"
					event.rank = ['junk', 'junk', 'junk', 'junk', 'junk', 'junk', 'junk', 'junk', 'junk', 'junk', 'junk', 'rare', 'rare', 'rare', 'rare', 'rare', 'rare', 'rare', 'epic', 'epic', 'epic', 'epic', 'legend']
					event.rarity = event.rank.randomGet(1);
					"step 3"

					if (event.rarity == "junk") {
						if (lib.rank.rarity.junk != []) {
							event.name = lib.rank.rarity.junk.randomGet(1)
						} else {
							event.goto(2)
						}
					}
					if (event.rarity == "rare") {
						if (lib.rank.rarity.rare != []) {
							event.name = lib.rank.rarity.rare.randomGet(1)
						} else {
							event.goto(2)
						}
					}
					if (event.rarity == "epic") {
						if (lib.rank.rarity.epic != []) {
							event.name = lib.rank.rarity.epic.randomGet(1)
						} else {
							event.goto(2)
						}
					}
					if (event.rarity == "legend") {
						if (lib.rank.rarity.legend != []) {
							event.name = lib.rank.rarity.legend.randomGet(1)
						} else {
							event.goto(2)
						}
					}
					event.gain = event.name;
					game.log(event.gain);
					var num = false;
					// let currentValue = event.config.get(event.name) || 0;
					// event.config.set(event.name, currentValue + 1);
					// for (let [key, value] of config) {
					//  if (key == event.name) { num = true; let currentValue = config.get(event.name) }
					// }
					// if (num == false) { let currentValue = 0 }
					// config.set(event.name, currentValue + 1);
					var config = game.getExtensionConfig("海国图志", "haitu_soul");
					var currentValue0 = config.get(event.name) || 0;

					config.set(event.name, currentValue0 + 1);
					// player.updateMark("haitu_soul", true);
					if (!player.hasSex('female')) {
						var str = '他'
					} else {
						var str = '她'
					}
					if (event.rarity == 'junk' || !event.rarity) {
						game.log('<span class=\"thundertext\">', lib.config.connect_nickname, '</span>获得了', event.name, '的卡带。')
					}
					if (event.rarity == 'rare') {
						game.log('恭喜<span class=\"thundertext\">', lib.config.connect_nickname, '</span>获得了', '<span class=\"greentext\">' + '稀有' + '</span>', '武将<span class=\"greentext\">' + get.translation(event.name) + '</span>', '的卡带!')
					}
					if (event.rarity == 'epic') {
						game.log('可喜可贺!<span class=\"thundertext\">', lib.config.connect_nickname, '</span>获得了', '<span class=\"yellowtext\">' + '史诗' + '</span>', '武将<span class=\"yellowtext\">' + get.translation(event.name) + '</span>', '的卡带!')
					}
					if (event.rarity == 'legend') {
						game.log('万众瞩目!<span class=\"thundertext\">', lib.config.connect_nickname, '</span>获得了', '<span class=\"legendtext\">' + '传说' + '</span>', '武将<span class=\"legendtext\">' + get.translation(event.name) + '</span>', '的卡带!<br>让我们一起祝' + str + '长命百岁吧!')
					}

					game.saveExtensionConfig("海国图志", "haitu_soul", config);
				},
			}
			lib.skill._海国图志_GDP = { // GDP
				// trigger: {
				// player: "gainAfter",
				// },
				filter(event, player) {
					if (_status.connectMode) {
						return false
					}
					if (!event.player) {
						return false;
					}
					if (!event.player.storage.haitu_nickname) {
						return false;
					}
					return true;


				},
				forced: true,
				silent: true,
				forceunique: true,
				charlotte: true,
				fixed: true,
				supercharlotte: true,
				content() {
					if (!game.getExtensionConfig("海国图志", "haitu_GDP")) {
						let config = new Map();
						game.saveExtensionConfig("海国图志", "haitu_GDP", config);
					}

					var a = player.storage.haitu_nickname;
					let name = a;
					name.forEach(item => {
						let currentValue = config.get(item) || 0;
						config.set(item, currentValue + 1);
					});

				},
			}
			lib.skill._海国图志_kill = { // 击杀榜
				// trigger: {
				// 	 source: "dieBegin",
				//  },
				filter(event, player) {
					if (_status.connectMode) {
						return false
					}
					if (!event.source) {
						return false;
					}
					if (!event.source.storage.haitu_nickname) {
						return false;
					}
					return true;


				},
				forced: true,
				silent: true,
				forceunique: true,
				charlotte: true,
				fixed: true,
				supercharlotte: true,
				content() {
					if (!game.getExtensionConfig("海国图志", "haitu_kill")) {
						let config = new Map();
						game.saveExtensionConfig("海国图志", "haitu_kill", config);
					}
					event.real = trigger.source.storage.haitu_nickname;

					let name = trigger.source.storage.haitu_nickname;
					name.forEach(item => {
						let currentValue = config.get(item) || 0;
						config.set(item, currentValue + 1);
					});

				},
			}
			lib.skill._海国图志_soul = {
				//trigger: {
				//	source: "dieBegin",
				//},
				filter(event, player) {
					if (_status.connectMode) {
						return false
					}

					if (lib.config.extension_海国图志_soul == 1) {
						return false
					};
					return player.isUnderControl(true) && event.source == player
				},
				forced: true,
				silent: true,
				forceunique: true,
				charlotte: true,
				fixed: true,
				supercharlotte: true,
				content() {
					if (!game.getExtensionConfig("海国图志", "haitu_soul")) {
						let config = new Map();
						game.saveExtensionConfig("海国图志", "haitu_soul", config);
					}
					event.target0 = trigger.targets || trigger.player;
					var name1 = get.nameList(event.target0);
					event.num = 0;
					let targets = trigger.targets || trigger.player,
						config = game.getExtensionConfig("海国图志", "haitu_soul"),
						name;
					if (lib.rank.rarity.legend.includes(event.target0.name)) {
						event.rarity = 'legend';
					} else {
						event.num += 1
					}
					if (lib.rank.rarity.epic.includes(event.target0.name)) {
						event.rarity = 'epic';
					} else {
						event.num += 1
					}
					if (lib.rank.rarity.rare.includes(event.target0.name)) {
						event.rarity = 'rare';
					} else {
						event.num += 1
					}
					if (lib.rank.rarity.junk.includes(event.target0.name)) {
						event.rarity = 'junk';
					} else {
						event.num += 1
					}
					if (event.num == 4) {
						event.rarity = 'junk';
					}
					if (Array.isArray(targets)) {
						{

							let name = get.nameList(target);
							name.forEach(item => {
								let currentValue = config.get(item) || 0;
								config.set(item, currentValue + 5);
							});
						}
					} else {
						let name = get.nameList(targets);
						name.forEach(item => {
							let currentValue = config.get(item) || 0;
							config.set(item, currentValue + 1);
						});
					}

					player.updateMark("haitu_soul", true);

					game.saveExtensionConfig("海国图志", "haitu_soul", config);
					if (!player.hasSex('female')) {
						var str = '他'
					} else {
						var str = '她'
					}

					if (event.rarity == 'junk' || !event.rarity) {
						game.log('<span class=\"thundertext\">', lib.config.connect_nickname, '</span>获得了', event.target0.name, '的卡带。')
					}
					if (event.rarity == 'rare') {
						game.log('恭喜<span class=\"thundertext\">', lib.config.connect_nickname, '</span>获得了', '#g' + '稀有' + '武将' + '', '#g' + get.translation(event.target0.name) + '', '的卡带!')
					}
					if (event.rarity == 'epic') {
						game.log('可喜可贺!<span class=\"thundertext\">', lib.config.connect_nickname, '</span>获得了', '<span class=\"yellowtext\">' + '史诗' + '</span>', '武将<span class=\"yellowtext\">' + get.translation(event.target0.name) + '</span>', '的卡带!')
					}
					if (event.rarity == 'legend') {
						game.log('万众瞩目!<span class=\"thundertext\">', lib.config.connect_nickname, '</span>获得了', '<span class=\"legendtext\">' + '传说' + '</span>', '武将<span class=\"legendtext\">' + get.translation(event.target0.name) + '</span>', '的卡带!<br>让我们一起祝' + str + '长命百岁吧!')
					}

				},
				nocontent() {
					"step 0"

					event.rank = ['junk', 'junk', 'junk', 'junk', 'junk', 'junk', 'junk', 'junk', 'junk', 'junk', 'junk', 'rare', 'rare', 'rare', 'rare', 'rare', 'rare', 'rare', 'epic', 'epic', 'epic', 'epic', 'legend']
					event.rarity = event.rank.randomGet(1);
					"step 1"
					if (event.rarity == "junk") {
						if (lib.rank.rarity.junk != []) {
							event.name = lib.rank.rarity.junk.randomGet(1)
						} else {
							event.goto(0)
						}
					}
					if (event.rarity == "rare") {
						if (lib.rank.rarity.rare != []) {
							event.name = lib.rank.rarity.rare.randomGet(1)
						} else {
							event.goto(0)
						}
					}
					if (event.rarity == "epic") {
						if (lib.rank.rarity.epic != []) {
							event.name = lib.rank.rarity.epic.randomGet(1)
						} else {
							event.goto(0)
						}
					}
					if (event.rarity == "legend") {
						if (lib.rank.rarity.legend != []) {
							event.name = lib.rank.rarity.legend.randomGet(1)
						} else {
							event.goto(0)
						}
					}

					"step 2"
					let config = game.getExtensionConfig("海国图志", "haitu_soul");
					event.gain = event.name;
					game.log(event.gain);
					var num = false;
					// let currentValue = event.config.get(event.name) || 0;
					// event.config.set(event.name, currentValue + 1);
					// for (let [key, value] of config) {
					//  if (key == event.name) { num = true; let currentValue = config.get(event.name) }
					// }
					// if (num == false) { let currentValue = 0 }
					// config.set(event.name, currentValue + 1);
					let name = event.name;
					name.forEach(item => {
						let currentValue = config.get(item) || 0;
						config.set(item, currentValue + 5);
					});
					player.updateMark("haitu_soul", true);
					if (!player.hasSex('female')) {
						var str = '他'
					} else {
						var str = '她'
					}
					game.saveExtensionConfig("海国图志", "haitu_soul", event.config);
					if (event.rarity == 'junk') {
						game.log(player, '获得了', event.gain, '的卡带。')
					}
					if (event.rarity == 'rare') {
						game.log('恭喜', player, '获得了', '#g' + '稀有武将' + '', '#g' + event.gain + '', '的卡带!')
					}
					if (event.rarity == 'epic') {
						game.log('可喜可贺!', player, '获得了', '<span class=\"yellowtext\">' + '史诗武将' + '</span>', '<span class=\"yellowtext\">' + event.gain + '</span>', '的卡带!')
					}
					if (event.rarity == 'legend') {
						game.log('万众瞩目!', player, '获得了', '<span class=\"thundertext\">' + '传说武将' + '</span>', '<span class=\"thundertext\">' + event.gain + '</span>', '的卡带!让我们一起恭喜' + str + '吧!')
					}

				},
			}
			lib.skill._海国图志_交际 = {
				locked: true,
				//enable: "phaseUse",
				silent: true,
				name: "交际",
				prompt() {
					return "多与其他玩家交谈，也许会触发特殊剧情。"
				},
				charlotte: true,
				filterTarget(card, player, target) {
					if (target == player) return false;

					return true;
				},
				// mode: ["identity"],
				filter(event, player) {
					if (_status.connectMode) {
						return false
					}
					// if (game.me.storage.haitu_power == true) { return false }
					var config = game.getExtensionConfig("海国图志", "haitu_power");
					if (!config) {
						if (lib.config.extension_海国图志_player == 1) {
							return false;
						}
						return player == game.me;
					} else if (config == false) {
						if (lib.config.extension_海国图志_player == 1) {
							return false;
						}
						return player == game.me;
					} else {
						return false
					}

				},
				refresh() {
					"step 0"

					event.name = player.nickname;
					var list = [];
					list.push("我要去原宿!");
					list.push("不了，谢谢");

					player.chooseControl(list).set('dialog', ui.create.dialog('您好，请问有兴趣参加武将加强的测试活动吗?作为奖励，我们会给测试的幸存者新武将的使用权。 ', '目前的试炼地点有原宿。'), false);
					"step 1"
					if (result.control == "我要去原宿!") {
						game.haitu_story = true;
						delete _status.scene;
						delete game.scene;
						game.me.storage.qg_level1 = true;
						game.me.storage.qg_level2 = true;
						game.me.storage.qg_level3 = true;
						var over = game.zhu;
						delete over.isZhu;
						player.identity = "zhu";
						game.zhu = player;
						event.trigger("zhuUpdate");
						game.filterPlayer2()
							.sortBySeat()
							.forEach(function (current) {
								if (current == player) {
									player.addSkill('haitu_olyuji_debuff');

									player.showIdentity();


								} else {
									if (!current.storage.haitu_fuben) {
										var cards = current.getCards('hejsx');
										{
											if (_status.roundStart == current) _status.roundStart = current.next || current.getNext() || game.players[0];

											cards.loseToDiscardpile;
										}
										game.players.remove(current);
										game.removePlayer(current);
									}
								}
							});
						player.seatNum = 1;
						let players1 = game.addPlayer(1, "haitu_zombie");
						players1.directgain(get.cards(4));
						players1.identity = "fan";
						players1.setIdentity('fan');
						players1.forceShown = true;
						players1.storage.haitu_fuben = true;

						players1.update();
						let players = game.addPlayer(2, "haitu_rerainCandy");
						players.directgain(get.cards(4));
						players.identity = "fan";
						players.setIdentity('fan');
						players.forceShown = true;
						players.addSkill('haitu_harajuku');
						players.storage.haitu_fuben = true;
						players1.seatNum = 2;
						players.storage.haitu_olfanpu_music = true;
						players.storage.haitu_olfanpu = true;
						players.seatNum = 3;
						text = document.createElement('div');
						text.innerHTML = "BOSS";
						text.style.backgroundSize = 'cover';
						text.style.width = '100%';
						text.style.height = '100%';
						// text.style.left='25%';			
						text.style.transform = 'translateY(-200px)';
						text.style['font-size'] = '17px';
						text.style['text-align'] = 'center';
						text.style['font-family'] = 'shousha';
						text.style['text-shadow'] = 'rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,black 0 0 1px';
						players.node.avatar.appendChild(text);
						ui.refresh(text);
						text.style.transform = '';
						players.update();
						lib.config.background_music = 'music_custom';
						lib.config.background_music_src = lib.assetURL + 'extension/海国图志/BGM/Plosive Attack.flac';
						game.playBackgroundMusic();
						let players2 = game.addPlayer(3, "haitu_fzombie");
						players2.directgain(get.cards(4));
						players2.storage.haitu_fuben = true;
						players2.seatNum = 4;
						players2.identity = "fan";
						players2.setIdentity('fan');
						players2.forceShown = true;
						players2.update();
						game.filterPlayer()
							.sortBySeat()
							.forEach(function (current) {
								if (current != player) {
									current.say("都来喜欢超天酱吧!");
									current.addSkill('haitu_olyuji_buff');
									var next = game.createEvent("boss");
									next.player = current;

									next.setContent(lib.skill.akiko_dongcha.content);


								} else {
									var next = game.createEvent("boss");
									next.player = current;

									next.setContent(lib.skill.akiko_dongcha.content);
								}
							});

						ui.background.setBackgroundImage("extension/海国图志/changjing/harajuku_SDIM1023.png");




						player.$fullscreenpop(['副本开始!'].randomGet(), 'fire');
						game.log("对局已更改为原宿副本，祝你好运。");


					}


					;


				},
				content() {
					"step 0"
					event.target = target;
					var s = target.stat;
					game.log(s.length);
					for (var i in s) {
						if (!s[i].gain) { } else {
							game.log(target, "第", i, "回合摸了", s[i].gain, "张牌")
						}
					}
					// game.log(s[1].gain),可以读取，但是有可能不存在数值报错。

					// player.classList.add("unseen");
					// target.addSkill('haitu_jingu')
					// game.log(event.target.storage);
					// var a = window.setInterval(function () {
					//  var b = event.target;
					// if (b.ai) { }
					//  game.filterPlayer()
					// 	  .sortBySeat()
					// 	 .forEach(function (current) {
					// 		  if (b.ai) {

					// 		  b.modAttitudeTo = function (from, to, att) {
					// 			 if (from != to) { return 10 }
					// 第一个参数填和你判断的人，第二个参数填自己，第三个就是原来态度值，返回的就是新态度值
					// if (from != player) { return 10; }
					// 		 }




					// 
					// 	  }
					// get.realAttitude(event.target, current) = 10;
					// 	  // event.target.ai.modAttitudeFrom(event.target, current) = 10
					// 		 });

					// 	}, 1000);
					// target.ai.modAttitudeTo(player, target) = 10;
					// get.rawAttitude.apply(player, event.target) = 10;
					// var att = CacheContext.requireCacheContext().get.rawAttitude.apply(this, arguments);
					// ai.modAttitudeTo(event.target, player) = 10;
					if (event.target.storage.haitu_nickname && event.target.storage.haitu_nickname == "秋凉 明" && get.mode() === "identity") {
						var next = game.createEvent("talk");
						next.player = player;
						next.target = event.target;
						next.setContent(lib.skill._海国图志_交际.refresh);
					} else {
						event.target.say("你好，谢谢，小笼包，再见!");
					}
				},
			},
				lib.skill._海国图志_otheritem = {

					forced: true,
					silent: true,
					filter(event, player) {
						if (game.haitu && game.haitu == true) {
							return false
						} else {
							return player == game.me
						}
					},
					trigger: {
						global: ["gameStart"],
					},
					nickname: ["超绝最可爱", "神抽红桃七", "阴间骰娘", "生鱼片半价", "内格尔", "白读书", "佩特", "演员泰森", "连弩达人", "专业刺杀", "变种兄弟会", "没有勺子", "加贝爷", "无名玩家"],
					content() {
						// player.classList.add("unseen");
						// player.showCharacter("sunce");
						// player.damage(player, 1, "unreal", "ice")
						// player[damage];
						// game.dead.push(player);
						// game.addGlobalSkill("haitu_skin")
						var a = player.name;
						var hello1 = lib.config.connect_nickname;
						var hello = "你好，亲爱的";
						hello += hello1;
						var hellox = "。我是";
						hello += hellox;
						hello += get.translation(player.name);
						var hello2 = ',很荣幸与你并肩作战!';
						hello += hello2;
						var str = hello;
						var HI = [{
							avatar: [player.name],
							text: hello
						}];





						galgame.text[HI] = HI;
						// galgame.sce(HI, true);成功!
						if (!lib.config.silk) {
							lib.config.silk = 0
						}
						if (!lib.config.gold) {
							lib.config.gold = 0
						}
						if (!lib.config.diamond) {
							lib.config.diamond = 0
						}
						if (!lib.config.lifeCoin) {
							lib.config.lifeCoin = 0
						}
						if (!lib.config.MpDrink) {
							lib.config.MpDrink = 0
						}
						if (!lib.config.story) {
							lib.config.story = 0;
						}
						game.addGlobalSkill('haitu_revive')
						game.haitu = true;
						game.me.storage.haitu_item = true
						// var configE = game.getExtensionConfig('extension_海国图志_Eplayer');
						if (!lib.config.silk) {
							lib.config.silk = 0
						}
						if (!lib.config.gold) {
							lib.config.gold = 0
						}
						if (!lib.config.diamond) {
							lib.config.diamond = 0
						}
						var str1 = "<span class=\"greentext\">丝绸:<span>" + lib.config.silk + "</span><span></span></span>";
						var str2 = "<span class=\"yellowtext\">黄金:<span>" + lib.config.gold + "</span><span></span></span>";
						var str3 = "<span class=\"legendtext\">钻石:<span>" + lib.config.diamond + "</span><span></span></span>";
						// ui.silk = ui.create.system(str1, null, true);
						// ui.gold = ui.create.system(str2, null, true);
						// ui.diamond = ui.create.system(str3, null, true);
						game.filterPlayer()
							.sortBySeat()
							.forEach(function (current) {
								game.broadcastAll(function (current) {
									current.storage.haitu_item = true

								}, current);
							});

						if (lib.config.extension_海国图志_scene != 1) {
							if (lib.config.extension_海国图志_move == 2) {
								// card.setMark的源代码: 

								game.log(1);
								for (var i = 2; i < 6; i++) {
									game.addGlobalSkill("haitu_move");
									game.addGlobalSkill("haitu_move_use");
									var num = get.rand(0, ui.cardPile.childNodes.length - 1);
									const card = ui.cardPile.childNodes[num];


									card.storage.haitu_move = true;
									game.broadcastAll(function (card) {
										var nature = ["metal", "wood", "water", "fire", "soil"].randomGet();
										var node = ui.create.div("move", card);
										node.dataset.nature = nature;
										node.innerHTML = "移";
										node.style.top = "75%";
										node.style.left = "75%";
										card.node.move = node;
									}, card);
									game.log(card);

								}
								game.log("以下为本局使用时含有场景变更效果的卡牌。")
							}
							game.filterPlayer()
								.sortBySeat()
								.forEach(function (current) {
									current.markSkill("haitu_scene");
								});
							var scenelist = ["哈姆纳塔", "杀手酒吧", "剧院", "虚拟世界", "万圣街区", "百慕大三角", "黄金城", "亚历山大", "箱庭湖畔", "城墙边境", "荒漠鬼城", "拳击擂台", "音乐沙龙", "图书馆"];
							if (lib.config.extension_海国图志_scene == 2) {
								game.broadcastAll(function (scenelist) {
									game.scene = scenelist.randomGet(1);

								}, scenelist);
							}
							if (lib.config.extension_海国图志_scene == 3) {
								game.broadcastAll(function () {
									game.scene = "杀手酒吧";
									_status.scene = "杀手酒吧";
								});
							}
							if (lib.config.extension_海国图志_scene == 4) {
								game.broadcastAll(function () {
									game.scene = "剧院";
									_status.scene = "剧院";
								});
							}
							if (lib.config.extension_海国图志_scene == 5) {
								game.broadcastAll(function () {
									game.scene = "虚拟世界";
									_status.scene = "虚拟世界";
								});
							}
							if (lib.config.extension_海国图志_scene == 6) {
								game.broadcastAll(function () {
									game.scene = "亚历山大";
									_status.scene = "亚历山大";
								});
							}
							if (lib.config.extension_海国图志_scene == 7) {
								game.broadcastAll(function () {
									game.scene = "城墙边境";
									_status.scene = "城墙边境";
								});
							}
							if (lib.config.extension_海国图志_scene == 8) {
								game.broadcastAll(function () {
									game.scene = "荒漠鬼城";
									_status.scene = "荒漠鬼城";
								});
							}
							if (lib.config.extension_海国图志_scene == 9) {
								game.broadcastAll(function () {
									game.scene = "拳击擂台";
									_status.scene = "拳击擂台";
								});
							}
							if (lib.config.extension_海国图志_scene == 10) {
								game.broadcastAll(function () {
									game.scene = "音乐沙龙";
									_status.scene = "音乐沙龙";
								});
							}
							if (lib.config.extension_海国图志_scene == 11) {
								game.broadcastAll(function () {
									game.scene = "图书馆";
									_status.scene = "图书馆";
								});
							}
							if (lib.config.extension_海国图志_scene == 12) {
								game.broadcastAll(function () {
									game.scene = "箱庭湖畔";
									_status.scene = "箱庭湖畔";
								});
							}
							if (lib.config.extension_海国图志_scene == 13) {
								game.broadcastAll(function () {
									game.scene = "黄金城";
									_status.scene = "黄金城";
								});
							}
							if (lib.config.extension_海国图志_scene == 14) {
								game.broadcastAll(function () {
									game.scene = "百慕大三角";
									_status.scene = "百慕大三角";
								});
							}
							if (lib.config.extension_海国图志_scene == 15) {
								game.broadcastAll(function () {
									game.scene = "万圣街区";
									_status.scene = "万圣街区";
								});
							}
							if (game.scene == "万圣街区") {
								game.addGlobalSkill("haitu_Halloween");

								game.broadcastAll(function () {
									lib.translate.haitu_scene = "万圣街区";
									lib.translate.haitu_scene.info = lib.translate.haitu_Halloween_info;
									_status.scene = "万圣街区";


								});
								game.broadcastAll(function (player) {
									ui.background.setBackgroundImage('extension/海国图志/changjing/Halloween.jpg');
								}, player);
							}
							if (lib.config.extension_海国图志_scene == 16) {
								game.broadcastAll(function () {
									game.scene = "圣诞房间";
									_status.scene = "圣诞房间";
								});
							}
							if (lib.config.extension_海国图志_scene == 17) {
								game.broadcastAll(function () {
									game.scene = "哈姆纳塔";
									_status.scene = "哈姆纳塔";
								});
							}
							if (game.scene == "哈姆纳塔") {
								game.addGlobalSkill("haitu_hamuna");
								game.addGlobalSkill("haitu_hamuna_off");
								game.broadcastAll(function (player) {
									ui.background.setBackgroundImage('extension/海国图志/changjing/hamuna.jpg');
								}, player);
								game.broadcastAll(function () {
									lib.translate.haitu_scene = "哈姆纳塔";
									lib.translate.haitu_scene.info = lib.translate.haitu_hamuna_info;
									_status.scene = "哈姆纳塔";



								});
							}
							if (game.scene == "圣诞房间") {
								game.addGlobalSkill("haitu_santa");

								game.broadcastAll(function () {
									lib.translate.haitu_scene = "圣诞房间";
									lib.translate.haitu_scene.info = lib.translate.haitu_santa_info;
									_status.scene = "圣诞房间";


								});
								game.broadcastAll(function (player) {
									ui.background.setBackgroundImage('extension/海国图志/changjing/santa.jpg');
								}, player);
							}
							if (game.scene == "万圣街区") {
								game.addGlobalSkill("haitu_Halloween");

								game.broadcastAll(function () {
									lib.translate.haitu_scene = "万圣街区";
									lib.translate.haitu_scene.info = lib.translate.haitu_Halloween_info;
									_status.scene = "万圣街区";


								});
								game.broadcastAll(function (player) {
									ui.background.setBackgroundImage('extension/海国图志/changjing/Halloween.jpg');
								}, player);
							}
							if (game.scene == "百慕大三角") {
								game.addGlobalSkill("haitu_trangle");
								game.addGlobalSkill("haitu_trangle_off");
								game.broadcastAll(function () {
									lib.translate.haitu_scene = "百慕大三角";
									lib.translate.haitu_scene.info = lib.translate.haitu_trangle_info;
									_status.scene = "百慕大三角";


								});
								game.broadcastAll(function (player) {
									ui.background.setBackgroundImage('extension/海国图志/changjing/trangle.jpg');
								}, player);
							}
							if (game.scene == "黄金城") {
								game.addGlobalSkill("haitu_goldcity");
								game.addGlobalSkill("haitu_goldcity_off");
								game.broadcastAll(function () {
									lib.translate.haitu_scene = "黄金城";
									lib.translate.haitu_scene.info = lib.translate.haitu_goldcity_info;
									_status.scene = "黄金城";


								});
								game.broadcastAll(function (player) {
									ui.background.setBackgroundImage('extension/海国图志/changjing/goldcity.jpg');
								}, player);
							}
							if (game.scene == "音乐沙龙") {
								game.addGlobalSkill("haitu_musicroom");
								game.addGlobalSkill("haitu_musicroom_off");
								game.broadcastAll(function () {
									lib.translate.haitu_scene = "音乐沙龙";
									lib.translate.haitu_scene.info = lib.translate.haitu_musicroom_info;
									_status.scene = "音乐沙龙";


								});
								game.broadcastAll(function (player) {
									ui.background.setBackgroundImage('extension/海国图志/changjing/musicroom.jpg');
								}, player);
							}
							if (game.scene == "拳击擂台") {

								game.addGlobalSkill("haitu_PK");
								game.broadcastAll(function () {
									lib.translate.haitu_scene = "拳击擂台";
									lib.translate.haitu_scene.info = lib.translate.haitu_PK_info;
									_status.scene = "拳击擂台";


								});
								game.broadcastAll(function (player) {
									ui.background.setBackgroundImage('extension/海国图志/changjing/Tyson.jpg');
								}, player);
							}
							if (game.scene == "荒漠鬼城") {
								game.addGlobalSkill("haitu_ghost");
								game.addGlobalSkill("haitu_ghost_off");
								game.addGlobalSkill("haitu_ghost_die");
								// game.addGlobalSkill("haitu_ghost_in");
								game.broadcastAll(function () {
									lib.translate.haitu_scene = "荒漠鬼城";
									lib.translate.haitu_scene.info = lib.translate.haitu_ghost_info;
									_status.scene = "荒漠鬼城";


								});
								game.broadcastAll(function (player) {
									ui.background.setBackgroundImage('extension/海国图志/changjing/ghost.jpg');
								}, player);
							}
							if (game.scene == "城墙边境") {
								game.addGlobalSkill("haitu_Berliner");
								game.addGlobalSkill("haitu_Berliner_off");
								game.addGlobalSkill("haitu_Berliner_west");
								game.addGlobalSkill("haitu_Berliner_east");
								game.broadcastAll(function () {
									lib.translate.haitu_scene = "城墙边境";
									lib.translate.haitu_scene.info = lib.translate.haitu_Berliner_info;
									_status.scene = "城墙边境";


								});
								game.broadcastAll(function (player) {
									ui.background.setBackgroundImage('extension/海国图志/changjing/Berliner.png');
								}, player);
							}
							if (game.scene == "图书馆") {
								game.addGlobalSkill("haitu_library");

								game.broadcastAll(function () {
									lib.translate.haitu_scene = "图书馆";
									lib.translate.haitu_scene.info = lib.translate.haitu_library_info;
									_status.scene = "图书馆";


								});
								game.broadcastAll(function (player) {
									ui.background.setBackgroundImage('extension/海国图志/changjing/White.jpg');
								}, player);
							}
							if (game.scene == "箱庭湖畔") {
								game.addGlobalSkill("haitu_lake");
								game.addGlobalSkill("haitu_lake_off");

								game.broadcastAll(function () {
									lib.translate.haitu_scene = "箱庭湖畔";
									lib.translate.haitu_scene.info = lib.translate.haitu_lake_info;
									_status.scene = "箱庭湖畔";


								});
								game.broadcastAll(function (player) {
									ui.background.setBackgroundImage('extension/海国图志/changjing/lake.jpg');
								}, player);
							}
							if (game.scene == "亚历山大") {
								game.addGlobalSkill("haitu_Alexander");
								game.addGlobalSkill("haitu_Alexander_off");
								game.broadcastAll(function () {
									lib.translate.haitu_scene = "亚历山大";
									lib.translate.haitu_scene.info = lib.translate.haitu_Alexander_info;
									_status.scene = "亚历山大";


								});
								game.broadcastAll(function (player) {
									ui.background.setBackgroundImage('extension/海国图志/changjing/Cleopatra.jpg');
								}, player);
							}
							if (game.scene == "虚拟世界") {
								game.addGlobalSkill("haitu_Matrix");
								game.addGlobalSkill("haitu_Matrix_off");
								game.broadcastAll(function () {
									lib.translate.haitu_scene = "虚拟世界";
									lib.translate.haitu_scene.info = lib.translate.haitu_Matrix_info;
									_status.scene = "虚拟世界";


								});
								game.broadcastAll(function (player) {
									ui.background.setBackgroundImage('extension/海国图志/changjing/hkdg_dy_init_neo.jpg');
								}, player);
							}
							if (game.scene == "杀手酒吧") {
								game.broadcastAll(function () {
									lib.translate.haitu_scene = "杀手酒吧";
									lib.translate.haitu_scene.info = lib.translate.haitu_dy_xuanshang_info;
									_status.scene = "杀手酒吧";


								});
								game.addGlobalSkill("haitu_dy_xuanshang");

								game.addGlobalSkill("haitu_dy_xuanshang_gets");
								game.addGlobalSkill("haitu_dy_xuanshang_ing");
								game.addGlobalSkill("haitu_dy_xuanshang_kill");
								game.addGlobalSkill("haitu_dy_xuanshang_damage");
								// game.filterPlayer()
								// 	 .sortBySeat()
								// 	 .forEach(function (current) {
								// 		current.addSkill("haitu_dy_xuanshang");

								// 	   current.addSkill("haitu_dy_xuanshang_gets");
								// 	  current.addSkill("haitu_dy_xuanshang_ing");
								// 	  current.addSkill("haitu_dy_xuanshang_kill");
								// 	  current.addSkill("haitu_dy_xuanshang_damage");
								//  });

								game.broadcastAll(function (player) {
									ui.background.setBackgroundImage('extension/海国图志/changjing/ssbtl_dy_leon.jpg');
								}, player);
							}
						}
						if (game.scene == "剧院") {
							game.broadcastAll(function () {
								lib.translate.haitu_scene = "剧院";
								lib.translate.haitu_scene.info = lib.translate.haitu_theater_info;
								_status.scene = "剧院";


							});
							game.addGlobalSkill("haitu_theater");


							// game.filterPlayer()
							// 	 .sortBySeat()
							// 	 .forEach(function (current) {
							// 		current.addSkill("haitu_dy_xuanshang");

							// 	   current.addSkill("haitu_dy_xuanshang_gets");
							// 	  current.addSkill("haitu_dy_xuanshang_ing");
							// 	  current.addSkill("haitu_dy_xuanshang_kill");
							// 	  current.addSkill("haitu_dy_xuanshang_damage");
							//  });

							game.broadcastAll(function (player) {
								ui.background.setBackgroundImage('extension/海国图志/changjing/theater.jpg');
							}, player);
						}


						if (lib.config.extension_海国图志_fun == 7) {
							var config0 = true;
							game.saveExtensionConfig("海国图志", "haitu_power", true);
						} else {
							var config0 = false;
							game.saveExtensionConfig("海国图志", "haitu_power", false);
						}
						if (!_status.connectMode) {
							// if (!configE || configE.size == 0) 
							game.addGlobalSkill('haitu_PK');
							game.addGlobalSkill('_海国图志_交际');
							// player.markSkill('haitu_Rank');
							{
								event.name = [];
							}
							for (var i of lib.skill._海国图志_otheritem.nickname) {
								event.name.push(i)
							}
							// else { event.name = configE }
							// game.log(event.name);

							if (event.name.includes(lib.config.connect_nickname)) {
								var str = lib.config.connect_nickname;
								event.name.remove(str)
							}

							player.update();
							// game.log(event.name)
							game.filterPlayer()
								.sortBySeat()
								.forEach(function (current) {
									game.broadcastAll(function (current) {
										var name = event.name.randomGet();
										if (name != "无名玩家") {
											event.name.remove(name);
										}

										if (name && !current.storage.haitu_nickname) {
											if (current != player) {

												current.storage.haitu_nickname = name;

											} else {
												var name = lib.config.connect_nickname;
												current.storage.haitu_nickname = "玩家桑";
											}
											// game.log(current.storage.haitu_nickname);
											if (lib.config.extension_海国图志_player == 2) {

												text = document.createElement('div');
												text.innerHTML = get.translation(name);
												text.style.backgroundSize = 'cover';
												text.style.width = '100%';
												text.style.height = '100%';
												// text.style.left='25%';			
												text.style.transform = 'translateY(-200px)';
												text.style['font-size'] = '17px';
												text.style['text-align'] = 'center';
												text.style['font-family'] = 'shousha';
												text.style['text-shadow'] = 'rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,black 0 0 1px';
												current.node.avatar.appendChild(text);
												ui.refresh(text);
												text.style.transform = '';
												// game.log(current.storage.haitu_nickname);
											}




										}
									}, current);
								});
						}
						// 改名代码修改自文武英杰
						game.me.storage.haitu_soul = 0;
						// game.addGlobalSkill('haitu_resoulbag');
						// var config = game.getExtensionConfig("海国图志", "haitu_soul");
						// if (!config || !(config instanceof Map)) {
						// 	  let config = new Map();
						// 	game.saveExtensionConfig("海国图志", "haitu_soul", config);
						//  }
						// if (lib.config.extension_海国图志_soul == 2 && game.me.storage.haitu_soul <= 0) {
						// player.markSkill('haitu_soul');
						// game.addGlobalSkill('haitu_resoulbag');
						// // game.addGlobalSkill('haitu_reboot');
						// game.me.storage.haitu_soul += 1;
						// lib.setPopped(
						//  (ui.create.system('卡带山', null, true, true)),
						//  () => {
						// 	  var dialog = ui.create.dialog("hidden");
						// 	  dialog.classList.add("soul_menu");
						// 	 if (!game.getExtensionConfig("海国图志", "haitu_soul")) {
						// 		 let config = new Map();
						// 		game.saveExtensionConfig("海国图志", "haitu_soul", config);
						// 	}
						//   let list = [], config = game.getExtensionConfig("海国图志", "haitu_soul");
						// 	{
						// 	  {
						// 		  dialog.addText(`<span class=\"legendtext\">传说武将</span>`)
						// 		  for (let [key, value] of config) {
						// 			if (lib.rank.rarity.legend.includes(key)) {
						// 				dialog.addSmall([[key], 'character'], false);
						// 				 dialog.addText(`<span class=\"legendtext\">${get.translation(key)}</span>：${value}`);
						// 			 }
						// // 		 }
						// 	   dialog.addText(`<span class=\"yellowtext\">史诗武将</span>`)
						// 	   for (let [key, value] of config) {
						// 			if (lib.rank.rarity.epic.includes(key)) {
						// // 			   dialog.addSmall([[key], 'character'], false);
						// 			  dialog.addText(`<span class=\"yellowtext\">${get.translation(key)}</span>：${value}`);
						// 		   }
						// 	 }
						// 	 dialog.addText(`<span class=\"greentext\">稀有武将</span>`)
						// 	 for (let [key, value] of config) {
						// 		if (lib.rank.rarity.rare.includes(key)) {
						// 			dialog.addSmall([[key], 'character'], false);
						// 		   dialog.addText(`<span class=\"greentext\">${get.translation(key)}</span>：${value}`);
						// 		}
						// 	}
						//   dialog.addText(`其他武将`)
						// 	for (let [key, value] of config) {
						// 		var num = 0;
						// 		 if (!lib.rank.rarity.legend.includes(key)) { num += 1; }
						// 		 if (!lib.rank.rarity.epic.includes(key)) { num += 1; }
						// 		 if (!lib.rank.rarity.rare.includes(key)) { num += 1; }
						// 		  if (num >= 3 && lib.character[key]) {
						// 			 dialog.addSmall([[key], 'character'], false);
						// 			 dialog.addText(`${get.translation(key)}：${value}`);
						// 		 }
						// 	 }
						// 	 dialog.addText('共有' + get.cnNumber(config.size) + '种卡带');
						//  }

						// 	  return dialog;
						// }

						//   },
						// 	200
						//  );

						//   }
						player.update();
						game.me.storage.world2 = false; // 平行世界未激活
						if (lib.config.extension_海国图志_bgm1 == 2) {
							// if (!game.getExtensionConfig('派对之王', 'enable') && !player.hasSkill("haitu_bgm")) {
							//   game.broadcastAll(function () {
							// // 	 lib.config.background_music = 'music_custom';
							// 	lib.config.background_music_src = lib.assetURL + 'extension/海国图志/BGM/Arise Within You.flac';
							//   game.playAudio('..', 'extension', '海国图志', 'audio', 'unlocked.mp3');
							//   game.playBackgroundMusic();
							//  },);
							//   }


							{
								var ac = window.setInterval(function () {
									game.broadcastAll(function (player, target) {
										if (!game.scene || (game.scene && game.scene != "音乐沙龙")) {
											{
												{
													if (player.group == "haitu_fire" || player.group == "haitu_water" || player.group == "haitu_air" || player.group == "haitu_soil" || player.group == "haitu_none" || player.group == "haitu_mad" || player.group == "haitu_hua" || player.group == "western")
														if (player.storage.haitu_common != true) {
															player.storage.haitu_common = true
															game.me.storage.qg_level1 = true;
															game.me.storage.qg_level2 = true;
															game.me.storage.qg_level3 = true;
															lib.config.background_music = 'music_custom';
															lib.config.background_music_src = lib.assetURL + 'extension/海国图志/BGM/Arise Within You.flac';
															game.playBackgroundMusic();
														}

												}
												if (player.storage.haitu_MacArthur != true) {
													if (player.name1 == "haitu_MacArthur" || player.name2 == "haitu_MacArthur") {
														player.storage.haitu_MacArthur = true;
														game.playAudio('..', 'extension', '海国图志', 'audio', 'unlocked.mp3');
														game.me.storage.qg_level1 = true;
														game.me.storage.qg_level2 = true;
														game.me.storage.qg_level3 = true;
														lib.config.background_music = 'music_custom';
														lib.config.background_music_src = lib.assetURL + 'extension/海国图志/BGM/Temple.MP4';
														game.playBackgroundMusic();
													}
												}
												if (player.storage.haitu_guanyu != true) {
													if (lib.translate[player.name].indexOf('关羽') != -1 || (player.name2 && lib.translate[player.name2].indexOf('关羽') != -1)) {
														player.storage.haitu_guanyu = true;
														game.playAudio('..', 'extension', '海国图志', 'audio', 'unlocked.mp3');
														game.me.storage.qg_level1 = true;
														game.me.storage.qg_level2 = true;
														game.me.storage.qg_level3 = true;
														lib.config.background_music = 'music_custom';
														lib.config.background_music_src = lib.assetURL + 'extension/海国图志/BGM/赵季平 - 关羽之歌.MP3';
														game.playBackgroundMusic();
													}
												}
												if (player.storage.haitu_kafuka != true) {
													if (player.name1 == "haitu_kafuka" || player.name2 == "haitu_kafuka") {
														player.storage.haitu_kafuka = true;
														game.playAudio('..', 'extension', '海国图志', 'audio', 'unlocked.mp3');
														game.me.storage.qg_level1 = true;
														game.me.storage.qg_level2 = true;
														game.me.storage.qg_level3 = true;
														lib.config.background_music = 'music_custom';
														lib.config.background_music_src = lib.assetURL + 'extension/海国图志/BGM/HOYO-MiX - 戏剧性反讽 A Dramatic Irony.flac';
														game.playBackgroundMusic();
													}
												}
												if (player.storage.haitu_ren != true) {
													if (player.name1 == "haitu_ren" || player.name2 == "haitu_ren") {
														player.storage.haitu_ren = true;
														game.playAudio('..', 'extension', '海国图志', 'audio', 'unlocked.mp3');
														game.me.storage.qg_level1 = true;
														game.me.storage.qg_level2 = true;
														game.me.storage.qg_level3 = true;
														lib.config.background_music = 'music_custom';
														lib.config.background_music_src = lib.assetURL + 'extension/海国图志/BGM/HOYO-MiX - 死兆将至 Death Approaches.flac';
														game.playBackgroundMusic();
													}
												}
												if (player.storage.haitu_tutankamen != true) {
													if (player.name1 == "haitu_tutankamen" || player.name2 == "haitu_tutankamen") {
														player.storage.haitu_tutankamen = true;
														game.playAudio('..', 'extension', '海国图志', 'audio', 'unlocked.mp3');
														game.me.storage.qg_level1 = true;
														game.me.storage.qg_level2 = true;
														game.me.storage.qg_level3 = true;
														lib.config.background_music = 'music_custom';
														lib.config.background_music_src = lib.assetURL + 'extension/海国图志/BGM/木乃伊记忆.m4a';
														game.playBackgroundMusic();
													}
												}
												if (player.storage.haitu_olyuji != true) {
													if (player.name1 == "haitu_rechaotianjiang" || player.name2 == "haitu_rechaotianjiang" || player.name1 == "haitu_rerainCandy" || player.name2 == "haitu_rerainCandy" || player.name2 == "haitu_chaotianjiang" || player.name1 == "haitu_chaotianjiang" || player.name1 == "haitu_rainCandy" || player.name2 == "haitu_rainCandy") {
														player.storage.haitu_olyuji = true;
														game.playAudio('..', 'extension', '海国图志', 'audio', 'unlocked.mp3');
														lib.config.background_music = 'music_custom';
														lib.config.background_music_src = lib.assetURL + 'extension/海国图志/BGM/internetangel.mp3';
														game.playBackgroundMusic();
													}
												}

												if (player.storage.haitu_Terminator != true) {
													if (player.name1 == "haitu_T1000" || player.name2 == "haitu_T1000" || player.name1 == "haitu_T800" || player.name2 == "haitu_T800") {
														player.storage.haitu_Terminator = true;
														game.playAudio('..', 'extension', '海国图志', 'audio', 'unlocked.mp3');
														game.me.storage.qg_level1 = true;
														game.me.storage.qg_level2 = true;
														game.me.storage.qg_level3 = true;
														lib.config.background_music = 'music_custom';
														lib.config.background_music_src = lib.assetURL + 'extension/海国图志/BGM/zjz.mp3';
														game.playBackgroundMusic();
													}
												}
												if (player.storage.haitu_sayori != true) {
													if (player.name1 == "haitu_sayori" || player.name2 == "haitu_sayori") {
														player.storage.haitu_sayori = true;
														game.playAudio('..', 'extension', '海国图志', 'audio', 'unlocked.mp3');
														game.me.storage.qg_level1 = true;
														game.me.storage.qg_level2 = true;
														game.me.storage.qg_level3 = true;
														lib.config.background_music = 'music_custom';
														lib.config.background_music_src = lib.assetURL + 'extension/海国图志/BGM/Ohayou Sayori!.mp3';
														game.playBackgroundMusic();
													}
												}
												if (player.storage.haitu_moduniran != true) {
													if (player.name1 == "haitu_moduniran" || player.name2 == "haitu_moduniran") {
														player.storage.haitu_moduniran = true;
														game.playAudio('..', 'extension', '海国图志', 'audio', 'unlocked.mp3');
														game.me.storage.qg_level1 = true;
														game.me.storage.qg_level2 = true;
														game.me.storage.qg_level3 = true;
														lib.config.background_music = 'music_custom';
														lib.config.background_music_src = lib.assetURL + 'extension/海国图志/BGM/mny.mp3';
														game.playBackgroundMusic();
													}
												}
												if (player.storage.haitu_timelady != true) {
													if (player.name1 == "haitu_timelady" || player.name2 == "haitu_timelady") {
														player.storage.haitu_timelady = true;
														game.playAudio('..', 'extension', '海国图志', 'audio', 'unlocked.mp3');
														game.me.storage.qg_level1 = true;
														game.me.storage.qg_level2 = true;
														game.me.storage.qg_level3 = true;
														lib.config.background_music = 'music_custom';
														lib.config.background_music_src = lib.assetURL + 'extension/海国图志/BGM/分钟小姐.mp3';
														game.playBackgroundMusic();
													}
												}
												if (player.storage.haitu_aisha != true) {
													if (player.name1 == "haitu_aisha" || player.name2 == "haitu_aisha") {
														player.storage.haitu_aisha = true;
														game.playAudio('..', 'extension', '海国图志', 'audio', 'unlocked.mp3');
														game.me.storage.qg_level1 = true;
														game.me.storage.qg_level2 = true;
														game.me.storage.qg_level3 = true;
														lib.config.background_music = 'music_custom';
														lib.config.background_music_src = lib.assetURL + 'extension/海国图志/BGM/Idina Menzel - Let It Go (Soundtrack Version).flac';
														game.playBackgroundMusic();
													}
												}
												if (player.storage.haitu_firefly != true) {
													if (player.name1 == "haitu_firefly" || player.name2 == "haitu_firefly") if (player.name1 == "haitu_firefly" || player.name2 == "haitu_firefly" || player.name1 == 'haitu_Elis' || player.name2 == 'haitu_Elis') {
														player.storage.haitu_firefly = true;
														game.playAudio('..', 'extension', '海国图志', 'audio', 'unlocked.mp3');
														game.me.storage.qg_level1 = true;
														game.me.storage.qg_level2 = true;
														game.me.storage.qg_level3 = true;

														lib.config.background_music = 'music_custom';
														lib.config.background_music_src = lib.assetURL + 'extension/海国图志/BGM/HOYO-MiX - 格拉默的余烬 The Embers of Glamoth.flac';
														game.playBackgroundMusic();
													}
												}
												if (player.storage.haitu_Max != true) {
													if (player.name1 == "haitu_Max" || player.name2 == "haitu_Max") {
														player.storage.haitu_Max = true;
														game.playAudio('..', 'extension', '海国图志', 'audio', 'unlocked.mp3');
														game.me.storage.qg_level1 = true;
														game.me.storage.qg_level2 = true;
														game.me.storage.qg_level3 = true;

														lib.config.background_music = 'music_custom';
														lib.config.background_music_src = lib.assetURL + 'extension/海国图志/BGM/syd matters - Obstacles (Remastered 2021).flac';
														game.playBackgroundMusic();
													}
												}
												if (player.storage.haitu_malcolmrivers != true) {
													if (player.name1 == "haitu_malcolmrivers" || player.name2 == "haitu_malcolmrivers") {
														player.storage.haitu_malcolmrivers = true;
														game.playAudio('..', 'extension', '海国图志', 'audio', 'unlocked.mp3');
														game.me.storage.qg_level1 = true;
														game.me.storage.qg_level2 = true;
														game.me.storage.qg_level3 = true;
														lib.config.background_music = 'music_custom';
														lib.config.background_music_src = lib.assetURL + 'extension/海国图志/BGM/zmid.mp3';
														game.playBackgroundMusic();
													}
												}
												if (player.storage.haitu_verting != true) {
													if (player.name1 == "haitu_verting" || player.name2 == "haitu_verting") {
														player.storage.haitu_verting = true;
														game.playAudio('..', 'extension', '海国图志', 'audio', 'unlocked.mp3');
														game.me.storage.qg_level1 = true;
														game.me.storage.qg_level2 = true;
														game.me.storage.qg_level3 = true;
														lib.config.background_music = 'music_custom';
														lib.config.background_music_src = lib.assetURL + 'extension/海国图志/BGM/Symbiosis.mp3';
														game.playBackgroundMusic();
													}
												}

												if (player.storage.haitu_Bowling != true) {
													if (player.name1 == "haitu_Bowling" || player.name2 == "haitu_Bowling") {
														player.storage.haitu_Bowling = true;
														game.playAudio('..', 'extension', '海国图志', 'audio', 'unlocked.mp3');
														game.me.storage.qg_level1 = true;
														game.me.storage.qg_level2 = true;
														game.me.storage.qg_level3 = true;
														lib.config.background_music = 'music_custom';
														lib.config.background_music_src = lib.assetURL + 'extension/海国图志/BGM/魔术师的狂想.mp3';
														game.playBackgroundMusic();
													}
												}
												if (player.storage.haitu_scp != true) {
													if (player.name1 == 'haitu_scp105' || player.name2 == 'haitu_scp105'

														||
														player.name2 == 'haitu_scp079' || player.name1 == 'haitu_scp079' ||
														player.name2 == 'haitu_scp053' || player.name1 == 'haitu_scp053' || player.name2 == 'haitu_bumieniexi' || player.name1 == 'haitu_bumieniexi'



													) {
														player.storage.haitu_scp = true;
														game.playAudio('..', 'extension', '海国图志', 'audio', 'unlocked.mp3');
														game.me.storage.qg_level1 = true;
														game.me.storage.qg_level2 = true;
														game.me.storage.qg_level3 = true;
														lib.config.background_music = 'music_custom';
														lib.config.background_music_src = lib.assetURL + 'extension/海国图志/BGM/SCP Secret Laboratory秘密实验室 MegaPatch II 版本主界面BGM - 骁奕,Northwood Studios.mp3';
														game.playBackgroundMusic();
													}
												}
												if (player.storage.haitu_colorfuldream != true) {
													if (player.name1 == 'haitu_colorfuldream' || player.name1 == 'haitu_colorfuldream') {
														player.storage.haitu_colorfuldream = true;
														game.playAudio('..', 'extension', '海国图志', 'audio', 'unlocked.mp3');
														game.me.storage.qg_level1 = true;
														game.me.storage.qg_level2 = true;
														game.me.storage.qg_level3 = true;
														lib.config.background_music = 'music_custom';
														lib.config.background_music_src = lib.assetURL + 'extension/海国图志/BGM/Influence of Deep.flac';
														game.playBackgroundMusic();
													}
												}
												if (player.storage.haitu_Dante != true) {
													if (player.name1 == "haitu_Dante" || player.name2 == "haitu_Dante") {
														player.storage.haitu_Dante = true;
														game.playAudio('..', 'extension', '海国图志', 'audio', 'unlocked.mp3');
														game.me.storage.qg_level1 = true;
														game.me.storage.qg_level2 = true;
														game.me.storage.qg_level3 = true;
														lib.config.background_music = 'music_custom';
														lib.config.background_music_src = lib.assetURL + 'extension/海国图志/BGM/Se Il Mio Amore Sta Vincino -Vocalize-.MP3';
														game.playBackgroundMusic();
													}
												}
												if (player.storage.haitu_William_Shakespeare != true) {
													if (player.name1 == "haitu_William_Shakespeare" || player.name2 == "haitu_William_Shakespeare") {
														player.storage.haitu_William_Shakespeare = true;
														game.playAudio('..', 'extension', '海国图志', 'audio', 'unlocked.mp3');
														game.me.storage.qg_level1 = true;
														game.me.storage.qg_level2 = true;
														game.me.storage.qg_level3 = true;
														lib.config.background_music = 'music_custom';
														lib.config.background_music_src = lib.assetURL + 'extension/海国图志/BGM/Overture -From Opera La Mia Verita-.MP3';
														game.playBackgroundMusic();
													}
												}
												if (player.storage.haitu_Kawasaki_Linglong != true)
													if (player.name1 == "haitu_Kawasaki_Linglong" || player.name2 == "haitu_Kawasaki_Linglong") {
														player.storage.haitu_Kawasaki_Linglong = true;
														game.playAudio('..', 'extension', '海国图志', 'audio', 'unlocked.mp3');
														game.me.storage.qg_level1 = true;
														game.me.storage.qg_level2 = true;
														game.me.storage.qg_level3 = true;
														lib.config.background_music = 'music_custom';
														lib.config.background_music_src = lib.assetURL + 'extension/海国图志/BGM/Ricochet love.mp3';
														game.playBackgroundMusic();
													}
												if (player.storage.haitu_neo != true) {
													if (player.name1 == "haitu_neo" || player.name2 == "haitu_neo") {
														player.storage.haitu_neo = true;
														game.playAudio('..', 'extension', '海国图志', 'audio', 'unlocked.mp3');
														game.me.storage.qg_level1 = true;
														game.me.storage.qg_level2 = true;
														game.me.storage.qg_level3 = true;
														lib.config.background_music = 'music_custom';
														lib.config.background_music_src = lib.assetURL + 'extension/海国图志/BGM/hkdg.mp3';
														game.playBackgroundMusic();


													}
												}
												if (player.storage.haitu_bobo != true) {
													if (player.name1 == "haitu_bobo" || player.name2 == "haitu_bobo") {
														player.storage.haitu_bobo = true;
														game.playAudio('..', 'extension', '海国图志', 'audio', 'unlocked.mp3');
														game.me.storage.qg_level1 = true;
														game.me.storage.qg_level2 = true;
														game.me.storage.qg_level3 = true;
														lib.config.background_music = 'music_custom';
														lib.config.background_music_src = lib.assetURL + 'extension/海国图志/BGM/Sat Tee Touy (Look At The Owl) Or (Yea Hua Dam).mp3';
														game.playBackgroundMusic();
													}
												}
												if (player.storage.haitu_White != true) {
													if (player.name1 == "haitu_White" || player.name2 == "haitu_White") {
														player.storage.haitu_White = true;
														game.playAudio('..', 'extension', '海国图志', 'audio', 'unlocked.mp3');
														game.me.storage.qg_level1 = true;
														game.me.storage.qg_level2 = true;
														game.me.storage.qg_level3 = true;
														lib.config.background_music = 'music_custom';
														lib.config.background_music_src = lib.assetURL + 'extension/海国图志/BGM/God Is a Girl (Chillout Mix).flac';
														game.playBackgroundMusic();
													}
												}
												if (player.storage.haitu_Darwin != true) {
													if (player.name1 == "haitu_Darwin" || player.name2 == "haitu_Darwin") {
														player.storage.haitu_Darwin = true;
														game.playAudio('..', 'extension', '海国图志', 'audio', 'unlocked.mp3');
														game.me.storage.qg_level1 = true;
														game.me.storage.qg_level2 = true;
														game.me.storage.qg_level3 = true;
														lib.config.background_music = 'music_custom';
														lib.config.background_music_src = lib.assetURL + 'extension/海国图志/BGM/Just Blue.flac';
														game.playBackgroundMusic();
													}
												}
												if (player.storage.haitu_Tyson != true) {
													if (player.name1 == "haitu_Tyson" || player.name2 == "haitu_Tyson") {
														player.storage.haitu_Tyson = true;
														game.playAudio('..', 'extension', '海国图志', 'audio', 'unlocked.mp3');
														game.me.storage.qg_level1 = true;
														game.me.storage.qg_level2 = true;
														game.me.storage.qg_level3 = true;
														lib.config.background_music = 'music_custom';
														lib.config.background_music_src = lib.assetURL + 'extension/海国图志/BGM/Theme of Tyson.mp3';
														game.playBackgroundMusic();
													}
												}
												if (player.storage.haitu_Leon != true) {
													if (player.name1 == "haitu_Leon" || player.name1 == "haitu_Mathilda" || player.name2 == "haitu_Leon" || player.name2 == "haitu_Mathilda") {
														player.storage.haitu_Leon = true;
														game.playAudio('..', 'extension', '海国图志', 'audio', 'unlocked.mp3');
														game.me.storage.qg_level1 = true;
														game.me.storage.qg_level2 = true;
														game.me.storage.qg_level3 = true;
														lib.config.background_music = 'music_custom';
														lib.config.background_music_src = lib.assetURL + 'extension/海国图志/BGM/ssbtl.mp3';
														game.playBackgroundMusic();
													}
												}
												if (player.storage.haitu_Cobb != true) {
													if (player.name1 == "haitu_Cobb" || player.name2 == "haitu_Cobb") {
														player.storage.haitu_Cobb = true;
														game.playAudio('..', 'extension', '海国图志', 'audio', 'unlocked.mp3');
														game.me.storage.qg_level1 = true;
														game.me.storage.qg_level2 = true;
														game.me.storage.qg_level3 = true;
														lib.config.background_music = 'music_custom';
														lib.config.background_music_src = lib.assetURL + 'extension/海国图志/BGM/dmkj.mp3';
														game.playBackgroundMusic();

													}
												}
												if (player.storage.haitu_Cleopatra != true) {
													if (player.name1 == "haitu_Cleopatra" || player.name2 == "haitu_Cleopatra") {
														player.storage.haitu_Cleopatra = true;
														game.playAudio('..', 'extension', '海国图志', 'audio', 'unlocked.mp3');
														game.me.storage.qg_level1 = true;
														game.me.storage.qg_level2 = true;
														game.me.storage.qg_level3 = true;
														lib.config.background_music = 'music_custom';
														lib.config.background_music_src = lib.assetURL + 'extension/海国图志/BGM/mny4.mp3';
														game.playBackgroundMusic();
													}
												}
											}
										}

									}, player);


								}, 1000);

							}

						}
						game.me.storage.haitu_skill = 0;
						if (lib.config.extension_海国图志_skill == 2 && game.me.storage.haitu_skill <= 0 && !_status.connectMode) {
							game.addGlobalSkill("haitu_tianjia");
							player.markSkill('haitu_tianjia');
							game.me.storage.haitu_skill += 1;
							ui.chumo = ui.create.system('添加技能', function () {
								var player = game.me;

								{
									_status.event.next.length = 0;
									game.createEvent('taofa', true).setContent(function () {

										var next = game.createEvent('taofa');

										next.player = game.me;
										next.target = target;
										next.setContent(lib.skill.xin_guaiwuzhizao.content);
										// game.pause();
										// game.resume()

									}).player = game.me;
								}

							}, true, true);
						}
						if (lib.config.extension_海国图志_name == 2 && !_status.connectMode) {
							game.addGlobalSkill("haitu_name");
							game.addGlobalSkill("haitu_name_use");
							player.markSkill('haitu_name');

							ui.chumo = ui.create.system('更改姓名', function () {
								var player = game.me;

								{
									_status.event.next.length = 0;
									game.createEvent('taofa', true).setContent(function () {

										var next = game.createEvent('taofa');

										next.player = game.me;
										next.target = target;
										next.setContent(lib.skill.haitu_name_use.content);
										// game.pause();
										// game.resume()

									}).player = game.me;
								}

							}, true, true);
						}
					},
				},
				lib.skill._海国图志_item = {

					trigger: {
						global: ["gameStart", "phaseBegin", "roundStart"],
					},
					forced: true,
					silent: true,

					content() {
						game.addGlobalSkill('g_du');
						game.addGlobalSkill('haitu_shown');
						// game.addGlobalSkill('haitu_lingqiao_record');
						game.addGlobalSkill('haitu_haitushenzi');
						game.addGlobalSkill('haitushiqu');
						game.addGlobalSkill('haitu_re_zhongbai_clear');
						game.addGlobalSkill('haitu_re_zhongbai_mark');
						game.addGlobalSkill('haitu_suigeng_name');
						game.addGlobalSkill('haitu_kuanghua_use');




					},
				}

			lib.init.js(lib.assetURL + 'extension/海国图志/foreigner.js', null);



			lib.translate['海国图志_foreigner_config'] = "海国图志"; // 包名翻译

			game.haituGetQhlySkin = function (name) {
				if (game.qhly_getSkin) {
					return game.qhly_getSkin(name);
				}
				return null;
			};
			if (!lib.config.characters.contains('foreigner') && !lib.config.extension_海国图志_autoOpenPack) {
				lib.config.characters.push('foreigner')
				game.saveConfig('characters', lib.config.characters)
				game.saveConfig('extension_海国图志_autoOpenPack', true)
			}

			window.HAITU_import = function (func) {
				func(lib, game, ui, get, ai, _status);
			};
			game.haituGetQhlySkin = function (name) {
				if (game.qhly_getSkin) {
					return game.qhly_getSkin(name);
				} else {
					return null;
				}
			};
			// lib.init.js(lib.assetURL + 'extension/海国图志/skin.js', null);
			if (!lib.qhlypkg) {
				lib.qhlypkg = [];
			}
			if (!lib.qhly_groupimage) {
				lib.qhly_groupimage = {};
			}
			if (!lib.qhly_groupcolor) {
				lib.qhly_groupcolor = {};
			}
			var taici = {};
			lib.qhlypkg.push({
				isExt: true, // 是否是扩展，一般填true
				filterCharacter(name) {
					return name.indexOf('haitu') == 0; // 判断此ID的武将是否属于此皮肤包
				},
				characterNameTranslate(name) {
					// 这里根据武将ID返回其中文名字。
					return get.translation(name);
				},
				characterTaici(name) {
					// 这里返回武将原皮台词。
					return taici[name];
				},

				originSkinInfo(name) {
					var info = {
						// 'qhfl_yuncaocao':'原皮说明。',
					};
					return info[name];
				},
				characterInfo(name) {
					// 这里可以返回角色资料。如不返回则显示get.characterIntro(name)。
				},
				audioOrigin: 'extension/海国图志/audio/',
				audio: 'extension/海国图志/skin/audio/',
				isLutou: lib.config.haitututou, // 判断是否当前启用露头，没有露头皮肤可不需要此项。
				prefix: 'extension/海国图志/image/character', // 原皮前缀，标识原皮肤的位置。
				lutouPrefix: 'extension/海国图志/image/lutou', // 露头前缀，标识露头原皮肤位置
				skin: {
					standard: 'extension/海国图志/skin/standard/', // 可切换普通皮肤的前缀
					lutou: 'extension/海国图志/skin/lutou/', // 可以切换露头皮肤的位置

				},
				skininfo: {
					'子在川上__3': {
						level: "传说",
						translation: "子在川上",
						info: "冰川也是川!",
						order: 1, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'自残形秽': {
						level: "普通",
						translation: "自残形秽",
						info: "",
						order: 1, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},

					'天真浪漫__2': {
						level: "稀有",
						translation: "天真浪漫",
						info: "",
						order: 3, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},

					'无上法老__1': {
						level: "稀有",
						translation: "无上法老",

						info: "",
						order: 3, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'幽夜女神__4': {
						level: "史诗",
						translation: "幽夜女神",

						info: "",
						order: 6, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'荧月女神__4': {
						level: "传说",
						translation: "荧月女神",

						info: "",
						order: 7, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'复生艳后__1': {
						level: "史诗",
						translation: "复生艳后",

						info: "",
						order: 5, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'艳后魅卫__3': {
						level: "稀有",
						translation: "艳后魅卫",

						info: "",
						order: 4, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'法老雅侍__2': {
						level: "稀有",
						translation: "法老雅侍",

						info: "1",
						order: 1, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'沉沦__2': {
						level: "稀有",
						translation: "沉沦",

						info: "",
						order: 5, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'劫后余生__2': {
						level: "稀有",
						translation: "劫后余生",

						info: "",
						order: 5, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'出神入化__1': {
						level: "稀有",
						translation: "出神入化",

						info: "",
						order: 1, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'矩阵再现__4': {
						level: "限定",
						translation: "矩阵再现",

						info: "",
						order: 5, // 显示顺序，号越小越前面。
						skill: {
							'haitu_yuanjie': {
								order: 1,
								content: '世间万物，有始有终。<br>所谓选择，皆是虚幻。',
							},
							'haitu_rejuzhen': {
								order: 2,
								content: '人机之战尚未结束,未来任重道远。<br>真正的敌人，是与你并肩，却暗藏匕首的人。',
							},
							'die': {
								content: '',
							}
						}
					},
					"天象有异__3": {
						level: "史诗",
						translation: "天象有异",
						info: "",
						order: 5, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					"御典浮阁__4": {
						level: "限定",
						translation: "御典浮阁",
						info: "",
						order: 5, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'滨水屠杀__2': {
						level: "稀有",
						translation: "滨水屠杀",
						info: "",
						order: 5, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'收容少女__2': {
						level: "稀有",
						translation: "收容少女",
						info: "",
						order: 5, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'小小孽蜥__2': {
						level: "稀有",
						translation: "小小孽蜥",
						info: "",
						order: 5, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'动物之友__2': {
						level: "稀有",
						translation: "动物之友",
						info: "",
						order: 5, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},

					'孜孜不倦__2': {
						level: "史诗",
						translation: "孜孜不倦",
						info: "",
						order: 13, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'梦境崩坏__3': {
						level: "传说",
						translation: "梦境崩坏",
						info: "",
						order: 3, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'圣诞小鬼__1': {
						level: "传说",
						translation: "圣诞小鬼",
						info: "",
						order: 3, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},

					'粉红抑郁__1': {
						level: "稀有",
						translation: "粉红抑郁",
						info: "",
						order: 3, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'洞悉之形__4': {
						level: "传说",
						translation: "洞悉之形",
						info: "",
						order: 3, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'鬼畜小熊__4': {
						level: "限定",
						translation: "鬼畜小熊",
						info: "",
						order: 1, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'晨读': {
						level: "史诗",
						translation: "晨读",
						info: "",
						order: 3, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'霞望__1': {
						level: "史诗",
						translation: "霞望",
						info: "",
						order: 3, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'复活赛__1': {
						level: "史诗",
						translation: "复活赛",
						info: "",
						order: 4, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'地雷少女__2': {
						level: "稀有",
						translation: "地雷少女",
						info: "",
						order: 2, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'像素童工__2': {
						level: "稀有",
						translation: "像素童工",
						info: "",
						order: 2, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'马戏宝贝__4': {
						level: "传说",
						translation: "马戏宝贝",
						info: "",
						order: 7, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'以牌会友__1': {
						level: "史诗",
						translation: "以牌会友",
						info: "",
						order: 3, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'亦真亦幻__4': {
						level: "史诗",
						translation: "亦真亦幻",
						info: "",
						order: 3, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'旅行糖糖__3': {
						level: "史诗",
						translation: "旅行糖糖",
						info: "",
						order: 11, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'荼毒攻心__3': {
						level: "史诗",
						translation: "荼毒攻心",
						info: "",
						order: 8, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'金芒游侠(动态)__3': {
						level: "史诗",
						translation: "金芒游侠",
						info: "",
						order: 8, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'金芒游侠__3': {
						level: "史诗",
						translation: "金芒游侠",
						info: "",
						order: 8, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'虹火蟒天__3': {
						level: "传说",
						translation: "虹火蟒天",
						info: "",
						order: 8, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'蝴蝶效应__4': {
						level: "传说",
						translation: "蝴蝶效应",
						info: "",
						order: 9, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'螃蟹骑士__2': {
						level: "稀有",
						translation: "螃蟹骑士",
						info: "",
						order: 2, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'假扮瞎子__3': {
						level: "史诗",
						translation: "假扮瞎子",
						info: "",
						order: 3, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'有惊无险__4': {
						level: "传说",
						translation: "有惊无险",
						info: "",
						order: 5, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'暴风雪__1': {
						level: "史诗",
						translation: "暴风雪",
						info: "",
						order: 2, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'诸行无常__3': {
						level: "传说",
						translation: "诸行无常",
						info: "",
						order: 9, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'痛失手足__3': {
						level: "史诗",
						translation: "痛失手足",
						info: "",
						order: 6, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'幽灵蜘蛛__2': {
						level: "稀有",
						translation: "幽灵蜘蛛",
						info: "",
						order: 2, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'幼年助手__1': {
						level: "稀有",
						translation: "幼年助手",
						info: "",
						order: 2, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'箱中司辰__2': {
						level: "稀有",
						translation: "箱中司辰",
						info: "",
						order: 1, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'风雨独行__3': {
						level: "史诗",
						translation: "风雨独行",
						info: "",
						order: 1, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 7,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'弈者无言__4': {
						level: "限定",
						translation: "弈者无言",
						info: "",
						order: 9, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'怀旧__2': {
						level: "稀有",
						translation: "怀旧",
						info: "",
						order: 9, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'怀旧__3': {
						level: "史诗",
						translation: "怀旧",
						info: "",
						order: 9, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'酌光兔影__3': {
						level: "史诗",
						translation: "酌光兔影",
						info: "",
						order: 10, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'雪林迷途__3': {
						level: "史诗",
						translation: "雪林迷途",
						info: "",
						order: 10, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'仲夜星观__3': {
						level: "史诗",
						translation: "仲夜星观",
						info: "",
						order: 9, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'刺身之夜__4': {
						level: "传说",
						translation: "刺身之夜",
						info: "",
						order: 9, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'戏剧大师__2': {
						level: "稀有",
						translation: "戏剧大师",
						info: "",
						order: 9, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'汀上武士__3': {
						level: "史诗",
						translation: "汀上武士",
						info: "",
						order: 9, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'英伦女仆__3': {
						level: "史诗",
						translation: "英伦女仆",
						info: "",
						order: 9, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'重返赛博__4': {
						level: "传说",
						translation: "重返赛博",
						info: "",
						order: 9, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'春日手信__4': {
						level: "限定",
						translation: "春日手信",
						info: "",
						order: 3, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'星风血雨__4': {
						level: "限定",
						translation: "星风血雨",
						info: "",
						order: 9, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'镜花水月': {
						level: "稀有",
						translation: "镜花水月",
						info: "",
						order: 1, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
					'霓虹之路__4': {
						level: "限定",
						translation: "霓虹之路",
						info: "",
						order: 9, // 显示顺序，号越小越前面。
						skill: {
							'ql_aaa': {
								order: 1,
								content: '台词1。<br>台词2。',
							},
							'die': {
								content: '',
							}
						}
					},
				},

				forbidEditTaici: false,
			});
			// 卡包（手牌）

			// 抽卡模拟器
		}
	}

};