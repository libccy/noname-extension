game.import("extension", function (lib, game, ui, get, ai, _status) {
    return {
        name: "火影忍者", editable: false, content: function (config, pack) {

            // ---------------------------------------group------------------------------------------//

            if (config.hyrz_changeGroup) {
                lib.arenaReady.push(function () {
                    for (var i in lib.characterPack['huoyingrenzhe']) {
                        if (lib.character[i][1] == "hyrz_ren" || lib.character[i][1] == "hyrz_huo" || lib.character[i][1] == "hyrz_xiao") {
                            lib.character[i][1] = ["wei", "shu", "wu", "qun", "jin"].randomGet();
                        }
                    }
                });
            }
            // ---------------------------------------怀旧版本------------------------------------------//	     
            if (config.hyrz_huaijiubanben) {
                lib.arenaReady.push(function () {

                    lib.skill.xxx = {
                        enable: "chooseToUse",
                    },
                        lib.translate.xxx_info = '技能描述';

                    lib.skill.huoying_zhaohuan = {
                        audio: "ext:火影忍者:2",
                        trigger: {
                            player: "chooseCardBegin",
                        },
                        check: function (event, player) {
                            return player.hasCard(function (card) {
                                var val = get.value(card);
                                return val <= 4 && card.number >= 12;
                            });
                        },
                        filter: function (event, player) {
                            return event.type == 'compare' && !event.directresult;
                        },
                        content: function () {
                            var chat = ['万蛇，助我一臂之力', '养蛇千日，用在一时'].randomGet();
                            player.say(chat);
                            var cards = get.cards();
                            ui.discardPile.appendChild(cards[0]);
                            cards[0].vanishtag.add('huoying_zhaohuan');
                            trigger.directresult = cards;
                            trigger.untrigger();
                        },
                        group: "huoying_zhaohuan_number",
                        subSkill: {
                            number: {
                                trigger: {
                                    player: "compare",
                                    target: "compare",
                                },
                                sub: true,
                                forced: true,
                                popup: false,
                                filter: function (event, player) {
                                    if (event.iwhile) return false;
                                    if (event.player == player) {
                                        return get.suit(event.card1) != 'heart';
                                    }
                                    else {
                                        return get.suit(event.card2) != 'heart';
                                    }
                                },
                                silent: true,
                                content: function () {
                                    game.log(player, '拼点牌点数视为', '#y13');
                                    if (player == trigger.player) {
                                        trigger.num1 = 13;
                                    }
                                    else {
                                        trigger.num2 = 13;
                                    }
                                },
                            },
                        },
                    },
                        lib.translate.huoying_zhaohuan_info = '<font color=#F0F>通灵万蛇</font> 你拼点时，可以改为用牌堆顶的一张牌进行拼点；当你拼点的牌亮出后，若此牌的花色不为红桃，则点数视为K';

                    lib.skill.huoying_yongsheng = {
                        trigger: {
                            player: "dying",
                        },
                        audio: "ext:火影忍者:2",
                        filter: function (event, player) {
                            if (player.maxHp < 1) return false;
                            return true;
                        },
                        content: function () {
                            'step 0'
                            player.draw();
                            'step 1'
                            player.chooseTarget(get.prompt2('huoying_yongsheng'), 1, function (card, player, target) {
                                return player != target && player.canCompare(target);
                            }, function (target) {
                                return get.attitude(player, target) < 0;
                            });
                            'step 2'
                            if (result.bool) {
                                var chat = ['人若死了，就什么都没了，只要活着，总会发现有趣的东西', '人，真是脆弱的生命！', '太完美了，果然，我还是想得到你的身体'].randomGet();
                                player.say(chat);
                                event.target = result.targets[0];
                                player.logSkill("wwyj_qunying", event.target);
                                player.chooseToCompare(event.target);
                            }
                            else {
                                event.finish();
                            }
                            'step 3'
                            if (!result.bool) {
                                player.recover(1 - player.hp);
                                player.loseMaxHp();
                                player.turnOver();
                                event.finish();
                            }
                            else {
                                event.num = event.target.hp - player.hp;
                            }
                            'step 4'
                            player.changeHp(event.num);
                            if (player.maxHp < 4) {
                                player.gainMaxHp();
                            }
                            'step 5'
                            event.target.changeHp(-event.num);
                            'step 6'
                            if (event.target.hp <= 0) {
                                event.target.dying({ source: player });
                            }
                        },
                        ai: {
                            order: 5,
                        },
                    },
                        lib.translate.huoying_yongsheng_info = '濒死阶段，你可以摸一张牌，然后与一名其他角色拼点，若你赢，你与该角色交换体力值（伤害来源转为你）并且你增加一点体力上限（不得超过4）；若你拼点没赢，你回复体力至1，然后失去一点体力上限并翻面';

                    lib.skill.huoying_lunmu = {
                        audio: "ext:火影忍者:2",
                        trigger: {
                            source: "damageEnd",
                        },
                        //frequent: true,
                        check: function (event, player) {
                            return get.attitude(player, event.player) <= 0;
                        },
                        filter: function (event, player) {
                            return (event.player.countCards('he') > 0 && event.num > 0);
                        },
                        content: function () {
                            player.gainPlayerCard(1, get.prompt('huoying_lunmu', trigger.player), trigger.player, get.buttonValue, 'he').set('logSkill', ['huoying_lunmu', trigger.player]);
                        },
                        ai: {
                            expose: 0.8,
                            order: 0.8,
                        },
                    },
                        lib.translate.huoying_lunmu_info = '<font color=#F0F>轮墓边狱</font> 你每造成1点伤害后，可以立即获得受到伤害的角色的一张牌';

                    lib.skill.huoying_jiaoji = {
                        trigger: {
                            global: "damageEnd",
                        },
                        usable: 1,
                        filter: function (event, player) {
                            return player != event.player && event.num > 0;
                        },
                        direct: true,
                        audio: "ext:火影忍者:2",
                        content: function () {
                            player.chooseDrawRecover(get.prompt('huoying_jiaoji')).set('logSkill', 'huoying_jiaoji');
                            var chat = ['我的大屌……噢，不好意思，刚才不小心瞎说大实话了……是我的大刀早已饥渴难耐了', '我的鲛肌能削掉查克拉，并且吃掉'].randomGet();
                            player.say(chat);
                        },
                    },
                        lib.translate.huoying_jiaoji_info = '<font color=#F0F>无尾尾兽</font> 每名角色的回合限一次，当一名其他角色受到伤害后，你可以选择回复1点体力或摸一张牌';

                    lib.skill.huoying_aiyuan = {
                        audio: "ext:火影忍者:2",
                        trigger: {
                            global: ["loseHpEnd", "loseMaxHpEnd"],
                        },
                        content: function () {
                            'step 0'
                            if (player == trigger.player) {
                                player.chooseControl('你摸两张', '其摸两张', 'cancel2', function () {
                                    return '其摸两张';
                                }).set('prompt', get.prompt('huoying_aiyuan'));
                                event.single = true;
                            }
                            else {
                                player.chooseTarget(get.prompt('huoying_aiyuan'), function (card, player, target) {
                                    return target == _status.event.player || target == _status.event.target;
                                }).set('target', trigger.player).set('ai', function (target) {
                                    var player = _status.event.player;
                                    if (player == target) return 1;
                                    return get.attitude(player, target) > 0;
                                });
                            }
                            'step 1'
                            if (event.single) {
                                if (result.control != 'cancel2') {
                                    player.logSkill('huoying_aiyuan', player);
                                    if (result.control == '你摸两张') {
                                        player.draw(2);
                                    }
                                    else {
                                        player.draw(2);
                                        player.storage.huoying_aiyuan = player;
                                    }
                                }
                            }
                            else if (result.bool) {
                                var target = result.targets[0];
                                player.logSkill('huoying_aiyuan', target);
                                if (target == player) {
                                    target.draw(2);
                                }
                                else {
                                    target.draw(2);
                                    if (target.storage.huoying_aiyuan) {
                                        target.storage.huoying_aiyuan.add(player);
                                    }
                                    else {
                                        target.storage.huoying_aiyuan = [player];
                                    }
                                }
                            }
                        },
                        ai: {
                            expose: 0.1,
                        },
                    },
                        lib.translate.huoying_aiyuan_info = '当一名角色流失体力或失去体力上限时，你可以选择一项：1、你摸两张牌；2、令该角色摸两张牌';

                    lib.skill.huoying_kuilei = {
                        audio: "ext:火影忍者:2",
                        trigger: {
                            global: "dieAfter",
                        },
                        forced: true,
                        popup: false,
                        silent: true,
                        unique: true,
                        filter: function (event, player) {
                            return event.player.isDead();
                        },
                        content: function () {
                            var chat = ['永恒的，才是艺术', '下一个艺术品，就是你了'].randomGet();
                            player.say(chat);
                            trigger.player.storage.huoying_kuilei = true;
                            player.logSkill('huoying_kuilei');
                            var skills = [];
                            for (var i = 0; i < game.dead.length; i++) {
                                var skill = game.dead[i].get('s', false, false).randomGet();
                                skills.push(skill);
                            }
                            player.addAdditionalSkill('huoying_kuilei', skills);
                        },
                    },
                        lib.translate.huoying_kuilei_info = '<font color=#F0F>傀儡术</font> 当其他角色阵亡后，你获得已阵亡角色中的随机一个技能';

                    lib.skill.huoying_baozi = {
                        audio: "ext:火影忍者:2",
                        trigger: {
                            player: "chooseToRespondBegin",
                        },
                        direct: true,
                        filter: function (event, player) {
                            if (event.responded) return false;
                            return game.hasPlayer(function (current) {
                                return current != player && current.countCards('h') > 0;
                            });
                        },
                        content: function () {
                            'step 0'
                            player.chooseTarget(get.prompt('huoying_baozi'), function (card, player, target) {
                                return target != player && target.countCards('h');
                            }).ai = function (target) {
                                return get.attitude(player, target) <= 0;
                            };
                            'step 1'
                            if (result.bool) {
                                event.target = result.targets[0];
                                player.logSkill('huoying_baozi', event.target);
                                var cards = event.target.getCards('h');
                                player.chooseCardButton('选择' + get.translation(target) + '的一张卡手牌打出', cards).filterButton = function (button) {
                                    return trigger.filterCard(button.link);
                                }
                            }
                            else {
                                event.finish();
                            }
                            'step 2'
                            if (result.bool) {
                                var chat = ['这个孢子之术，竟没人发现', '我虽为晓的侦察兵，但就隐藏、侦察能力而言，没人能胜我'].randomGet();
                                player.say(chat);
                                game.log(player, '打出了', event.target, '的手牌');
                                event.target.$throw(result.links);
                                event.target.lose(result.links);
                                trigger.untrigger();
                                trigger.animate = false;
                                trigger.responded = true;
                                result.buttons[0].link.remove();
                                trigger.result = { bool: true, card: result.buttons[0].link }
                            }
                            else {
                                event.finish();
                            }
                        },
                    },
                        lib.translate.huoying_baozi_info = '<font color=#F0F>孢子之术</font> 回合外，当你需要打出一张卡牌【杀】或者【闪】时，你可以观看任意一名其他角色的手牌并将其视为你的手牌打出';

                    lib.skill.huoying_leique = {
                        enable: "phaseUse",
                        audio: "ext:火影忍者:2",
                        group: "huoying_kkxkaiyan",
                        derivation: 'huoying_kkxshenwei',
                        filterCard: function (card) {
                            return card.name == 'sha' && !card.nature;
                        },
                        filter: function (event, player) {
                            return player.countCards('h', 'sha') > 0
                        },
                        viewAs: {
                            name: 'sha',
                            nature: 'thunder',
                        },
                        prompt: "发动雷切，你使用的杀无视防具，并附带雷属性",
                        ai: {
                            unequip: true,
                            skillTagFilter: function (player, tag, arg) {
                                if (arg && arg.name == 'sha') return true;
                                return false;
                            },
                            basic: {
                                useful: [5, 1],
                                value: [5, 1],
                            },
                            order: function () {
                                if (_status.event.player.hasSkillTag('presha', true, null, true)) return 10;
                                return 3;
                            },
                            result: {
                                target: function (player, target) {
                                    if (player.hasSkill('jiu')) {
                                        if (get.attitude(player, target) > 0) {
                                            return -6;
                                        }
                                        else {
                                            return -3;
                                        }
                                    }
                                    return -1.5;
                                },
                            },
                            tag: {
                                respond: 1,
                                respondShan: 1,
                                damage: function (card) {
                                    if (card.nature == 'poison') return;
                                    return 1;
                                },
                                natureDamage: function (card) {
                                    if (card.nature) return 1;
                                },
                                fireDamage: function (card, nature) {
                                    if (card.nature == 'fire') return 1;
                                },
                                thunderDamage: function (card, nature) {
                                    if (card.nature == 'thunder') return 1;
                                },
                                poisonDamage: function (card, nature) {
                                    if (card.nature == 'poison') return 1;
                                },
                            },
                        },
                    },
                        lib.translate.huoying_leique_info = '<li>出牌阶段，你可以将一张普通【杀】当雷【杀】使用，你使用的雷【杀】可无视目标角色的防具。<li>当你杀死一名角色后，你获得技能〖神威〗';

                    lib.skill.huoying_yingfu = {
                        audio: "ext:火影忍者:2",
                        trigger: {
                            source: "damageEnd",
                        },
                        forced: true,
                        filter: function (event, player) {
                            return event.player != player;
                        },
                        content: function () {
                            player.say(['影子模仿术，成功得手', '真麻烦！'].randomGet());
                            var skill = trigger.player.skills.randomGet()
                            player.addTempSkill(skill, { player: 'phaseUseBegin' });
                        },
                    },
                        lib.translate.huoying_yingfu_info = '<font color=#F0F>影子模仿术</font> 当你造成伤害后，可随机获得此受伤害角色的一项技能，直到你下个出牌阶段开始才解除';

                    lib.skill.huoying_xuanfeng = {
                        audio: "ext:火影忍者:2",
                        trigger: {
                            source: "damageBegin",
                        },
                        forced: true,
                        filter: function (event, player) {
                            return event.card && event.card.isCard && event.card.name == 'sha' && event.notLink();
                        },
                        content: function () {
                            var chat = ['凯老师，请你认同我吧！', '在木叶村的下忍中，目前我是最强的'].randomGet();
                            player.say(chat);
                            if (player.isMaxHandcard()) {
                                trigger.num++;
                            }
                        },
                    },
                        lib.translate.huoying_xuanfeng_info = '技能描述';

                    lib.skill.huoying_qianshou = {
                        audio: "ext:火影忍者:2",
                        trigger: {
                            global: "useCard",
                        },
                        priority: 5,
                        filter: function (event, player) {
                            if (get.type(event.card) != 'trick') return false;
                            if (get.info(event.card).multitarget) return false;
                            if (event.targets.length < 2) return false;
                            return true;
                        },
                        direct: true,
                        content: function () {
                            'step 0'
                            player.chooseTarget(get.prompt('huoying_qianshou'),
                                [1, trigger.targets.length], function (card, player, target) {
                                    return _status.event.getTrigger().targets.contains(target);
                                }).set('ai', function (target) {
                                    var trigger = _status.event.getTrigger();
                                    if (game.phaseNumber > game.players.length * 2 && trigger.targets.length >= game.players.length - 1) {
                                        return -get.effect(target, trigger.card, trigger.player, _status.event.player);
                                    }
                                    return -1;
                                });
                            'step 1'
                            if (result.bool) {
                                player.logSkill('huoying_qianshou', result.targets);
                                for (var i = 0; i < result.targets.length; i++) {
                                    trigger.targets.remove(result.targets[i]);
                                }
                                var chat = ['斑，住手！我们是朋友！', '千手神通，顶上化佛'].randomGet();
                                player.say(chat);
                                game.delay(0.5);
                            }
                        },
                        ai: {
                            order: 8,
                        },
                    },
                        lib.translate.huoying_qianshou_info = '<font color=#F0F>千手神通</font> 当一名角色使用的锦囊牌指定了至少两名角色为目标时，你可以令此牌对其中任意名角色无效';

                    lib.skill.huoying_baoxing = {
                        audio: "ext:火影忍者:2",
                        enable: "phaseUse",
                        usable: 1,
                        skillAnimation: true,
                        animationColor: "metal",
                        animationStr: "地爆天星",
                        selectTarget: -1,
                        filterCard: true,
                        selectCard: -1,
                        filter: function (card, player) {
                            return player.countCards('h') > 0;
                        },
                        filterTarget: function (card, player, target) {
                            return target != player;
                        },
                        reverseOrder: true,
                        content: function () {
                            'step 0'
                            var chat = ['地爆天星', '人只有感受到了痛苦，才会珍惜和平'].randomGet();
                            player.say(chat);
                            var next = target.chooseToRespond({ name: 'sha' });
                            next.set('ai', function (card) {
                                var evt = _status.event.getParent();
                                if (get.damageEffect(evt.target, evt.player, evt.target) >= 0) return 0;
                                if (evt.player.hasSkillTag('notricksource')) return 0;
                                if (evt.target.hasSkillTag('notrick')) return 0;
                                return 11 - get.value(card);
                            });
                            next.autochoose = lib.filter.autoRespondSha;
                            'step 1'
                            if (result.bool == false) {
                                target.damage();
                            }
                        },
                        ai: {
                            order: 2,
                            result: {
                                player: 1,
                            },
                        },
                    },
                        lib.translate.huoying_baoxing_info = '<font color=#F0F>地爆天星</font> 出牌阶段限一次，你可以将所有的手牌发动〖地爆天星〗：此为无视防具的【南蛮入侵】，所有角色必须打出一张【杀】，否则受到一点伤害';

                    lib.skill.huoying_rechendun = {
                        audio: "ext:火影忍者:2",
                        enable: "phaseUse",
                        usable: 1,
                        //alter:true,
                        filterTarget: function (card, player, target) {
                            return player != target && target.countCards('h') > 0 && player.canCompare(target) && target.hasEnabledSlot() && !target.hasSkillTag('noCompareTarget');
                        },
                        filter: function (event, player) {
                            return player.countCards('h') > 0;
                        },
                        content: function () {
                            'step 0'
                            player.chooseToCompare(target);
                            var chat = ['尘遁•原界剥离之术', '你已老了，大野木'].randomGet();
                            player.say(chat);
                            'step 1'
                            if (result.bool) {
                                var list = ['equip1', 'equip2', 'equip3', 'equip4', 'equip5'];
                                for (var i = 0; i < list.length; i++) {
                                    if (target.isDisabled(list[i])) {
                                        list.remove(list[i--]);
                                    }
                                }
                                target.disableEquip(list.randomGet());
                                // target.disableEquip(['equip1','equip2','equip3','equip4','equip5'].randomGet());
                            }
                            else {
                                target.damage();
                                event.finish();
                            }
                        },
                        ai: {
                            threaten: 1.3,
                            result: {
                                target: function (player, target) {
                                    return -target.countCards('he');;
                                },
                            },
                            order: 9,
                        },
                    },
                        lib.translate.huoying_rechendun_info = '出牌阶段限一次，你可与一名有未被废除的装备栏的角色进行拼点，若你赢，目标角色随机废除一个装备栏；若你没赢，目标角色受到一点伤害';

                    lib.skill.huoying_bingdun2 = {
                        trigger: {
                            player: "useCard",
                        },
                        // silent:true,
                        // popup:false,
                        priority: 201909,
                        filter: function (event, player) {
                            if (event.card.name == 'jiedao') return false;
                            if (get.type(event.card) == 'delay') return false;
                            if (get.type(event.card) == 'equip') return false;
                            if (event.targets.contains(player)) return false;
                            //   if(!event.targets) return false;                  
                            if (event.targets.length > 1) return false;
                            return game.hasPlayer(function (current) {
                                return current.isTurnedOver() && !event.targets.contains(current);
                            });
                        },
                        content: function () {
                            'step 0'
                            event.targets = game.filterPlayer(function (current) {
                                return current.isTurnedOver() && current != player;
                            });
                            event.targets.sort(lib.sort.seat);
                            'step 1'
                            game.playhyrz(['huoying_bingdun1', 'huoying_bingdun2'].randomGet());
                            player.say('别想能在我的术里逃出去');
                            trigger.targets.addArray(event.targets);
                            player.line(trigger.targets, 'green');
                        },
                    },
                        lib.translate.huoying_bingdun_info = '<font color=#F0F>魔镜冰晶</font> <li>出牌阶段限一次，若你的武将牌正面朝上，你可以令至多两名其他角色翻面，然后你翻面（<font color=#F0F>配合再不斩</font>）<li>你与已翻面的角色的距离为1，若你的武将牌背面朝上，你的防御距离为无限<li>你对其他角色使用唯一目标的牌（借刀杀人除外）时，可令此牌额外指定所有其他已翻面的角色';

                    lib.skill.huoying_yizhi = {
                        audio: "ext:火影忍者:2",
                        trigger: {
                            player: "damageEnd",
                        },
                        forced: true,
                        priority: 20,
                        unique: true,
                        init: function (player) {
                            player.storage.huoying_yizhi = 0;
                        },
                        intro: {
                            name: "移植",
                            content: "已移植了#种能力",
                        },
                        derivation: ['huoying_xianfa', 'huoying_zhuansheng'],
                        content: function () {
                            'step 0'
                            event.num = 0;
                            'step 1'
                            event.num++;
                            var skills = [];
                            for (var i in lib.character) {
                                for (var j = 0; j < lib.character[i][3].length; j++) {
                                    var info = lib.skill[lib.character[i][3][j]];
                                    if (info && (info.gainable || !info.unique)) {
                                        skills.add(lib.character[i][3][j]);
                                    }
                                }
                            }
                            var link = skills.randomGet();
                            player.addSkill(link);
                            player.mark(link, {
                                name: get.translation(link),
                                content: lib.translate[link + '_info']
                            });
                            game.log(player, '获得技能', '【' + get.translation(link) + '】');
                            'step 2'
                            if (!player.hasSkill('huoying_xianfa') || !player.hasSkill('huoying_zhuansheng')) {
                                player.storage.huoying_yizhi++;
                                player.markSkill('huoying_yizhi');
                                player.update();
                                if (player.storage.huoying_yizhi >= 3) {
                                    player.$fullscreenpop('蜕皮化龙', 'water');
                                    player.unmarkSkill('huoying_yizhi');
                                    player.removeSkill('huoying_xinyiliao');
                                    player.addSkill('huoying_xianfa');
                                    player.addSkill('huoying_zhuansheng');
                                }
                            }
                            'step 3'
                            if (event.num < trigger.num) {
                                event.goto(1);
                            }
                            else event.finish();
                        },
                    },
                        lib.translate.huoying_yizhi_info = '<font color=#f00>锁定技</font> 当你每受到一点伤害后，你随机获得未加入本局游戏的武将的一个技能（主公技、觉醒技、限定技除外）。若你发动〖移植〗至少三次，你失去技能〖医疗〗，获得技能〖仙法〗、〖转生〗';

                    lib.skill.huoying_fengyin = {
                        audio: "ext:火影忍者:2",
                        unique: true,
                        mark: true,
                        direct: true,
                        marktext: "印",
                        trigger: {
                            player: "phaseUseBegin",
                        },
                        filter: function (event, player) {
                            return player.isAlive();
                        },
                        init: function (player) {
                            player.storage.huoying_fengyin = false;
                        },
                        limited: true,
                        intro: {
                            content: "limited",
                        },
                        content: function () {
                            'step 0'
                            player.chooseControl('尸鬼封尽', 'cancel2').set('ai', function () {
                                if (player.countCards('h', 'tao') > 0 || player.countCards('h', 'jiu') > 0) return '尸鬼封尽';
                                if (player.hp <= 1) return '尸鬼封尽';
                                return 'cancel2';
                            }).set('prompt', '封印：请选择是否发动禁术——尸鬼封尽');
                            'step 1'
                            if (result.control == '尸鬼封尽') {
                                event.goto(2);
                            }
                            else {
                                event.finish();
                            }
                            'step 2'
                            player.chooseTarget('请选择一名目标，令其技能失效', get.prompt('huoying_fengyin'), function (card, player, target) {
                                return target != player;
                            }).set("ai", function (target) {
                                return get.attitude(player, target) <= 0;
                            });
                            'step 3'
                            if (result.bool) {

                                //alive('extension/火影忍者/huoying_fengyin.gif',12,true);         
                                //game[otherFunction[7]](game.qyhGif('huoying_fengyin.gif',null,null,true),11000);		

                                game.delay();
                                player.storage.huoying_fengyin = true;
                                player.unmarkSkill('huoying_fengyin');
                                //player.$skill('尸鬼封尽', 'fire', 'red', 'avatar');
                                var chat = ['尸鬼封尽', '守护村子，背负着影的名号，这是我该做的事'].randomGet();
                                player.say(chat);
                                player.logSkill('huoying_fengyin', result.targets[0]);
                                result.targets[0].clearSkills();
                                if (result.targets[0].maxHp > 4) result.targets[0].maxHp = 4;
                                result.targets[0].update();
                                //player.hp = player.maxHp;
                                player.loseHp(player.hp);
                                player.awakenSkill('huoying_fengyin');
                                game.broadcastAll(function (player) {
                                    img = document.createElement('div');
                                    img.setBackgroundImage('extension/火影忍者/huoying_fengyin.png');
                                    img.style.width = '100%';
                                    img.style.height = '100%';
                                    img.style.backgroundSize = 'cover';
                                    img.style.transform = 'translateY(-200px)';
                                    result.targets[0].node.avatar.appendChild(img);
                                    ui.refresh(img);
                                    img.style.transform = '';
                                }, player);
                            }
                            else {
                                event.finish();
                            }
                        },
                        ai: {
                            threaten: 0.3,
                            expose: 0.6,
                            order: 2,
                        },
                    },
                        lib.translate.huoying_fengyin_info = '<font color=#F0F>尸鬼封尽 </font> <span class=yellowtext>限定技</span> 出牌阶段开始时，你可令任意一名角色永久失去当前的所有技能（若其体力上限大于4则调整为4），然后你进入濒死状态';

                    lib.skill.huoying_luoxuan = {
                        enable: "phaseUse",
                        usable: 1,
                        audio: "ext:火影忍者:2",
                        filter: function (card, player) {
                            return player.countCards('he', { type: 'equip' }) > 0;
                        },
                        chooseButton: {
                            dialog: function () {
                                var list = [];
                                for (var i = 0; i < lib.inpile.length; i++) {
                                    var name = lib.inpile[i];
                                    if (get.type(name) == 'trick') list.push(['锦囊', '', name]);
                                }
                                return ui.create.dialog(get.translation('huoying_luoxuan'), [list, 'vcard']);
                            },
                            filter: function (button, player) {
                                return lib.filter.filterCard({ name: button.link[2] }, player, _status.event.getParent());
                            },
                            check: function (button) {
                                var player = _status.event.player;
                                var recover = 0, lose = 1, players = game.filterPlayer();
                                for (var i = 0; i < players.length; i++) {
                                    if (players[i].hp == 1 && get.damageEffect(players[i], player, player) > 0 && !players[i].hasSha()) {
                                        return (button.link[2] == 'juedou') ? 2 : -1;
                                    }
                                    if (!players[i].isOut()) {
                                        if (players[i].hp < players[i].maxHp) {
                                            if (get.attitude(player, players[i]) > 0) {
                                                if (players[i].hp < 2) {
                                                    lose--;
                                                    recover += 0.5;
                                                }
                                                lose--;
                                                recover++;
                                            }
                                            else if (get.attitude(player, players[i]) < 0) {
                                                if (players[i].hp < 2) {
                                                    lose++;
                                                    recover -= 0.5;
                                                }
                                                lose++;
                                                recover--;
                                            }
                                        }
                                        else {
                                            if (get.attitude(player, players[i]) > 0) {
                                                lose--;
                                            }
                                            else if (get.attitude(player, players[i]) < 0) {
                                                lose++;
                                            }
                                        }
                                    }
                                }
                                if (lose > recover && lose > 0) return (button.link[2] == 'nanman') ? 1 : -1;
                                if (lose < recover && recover > 0) return (button.link[2] == 'taoyuan') ? 1 : -1;
                                return (button.link[2] == 'wuzhong') ? 1 : -1;
                            },
                            backup: function (links, player) {
                                return {
                                    filterCard: {
                                        type: "equip",
                                    },
                                    position: 'he',
                                    selectCard: 1,
                                    popname: true,
                                    viewAs: { name: links[0][2] },
                                    precontent: function () {
                                        var chat = ['这招是我自创的忍术——螺旋丸', '只恨这忍术未完成，未加入属性，否则你们必死无疑'].randomGet();
                                        player.say(chat);
                                        game.playhyrz(['huoying_luoxuan1', 'huoying_luoxuan2'].randomGet());
                                    }
                                }
                            },
                            prompt: function (links, player) {
                                return '将一张装备牌当作' + get.translation(links[0][2]) + '使用';
                            }
                        },
                        ai: {
                            order: 1,
                            result: {
                                player: function (player) {
                                    var num = 0;
                                    var cards = player.getCards('h');

                                    for (var i = 0; i < cards.length; i++) {
                                        num += Math.max(0, get.value(cards[i], player, 'raw'));
                                    }
                                    num /= cards.length;
                                    num *= Math.min(cards.length, player.hp);
                                    return 12 - num;
                                }
                            },
                        },
                    },
                        lib.translate.huoying_luoxuan_info = '<font color=#F0F>螺旋丸</font> 出牌阶段限一次，你可以将任意一张装备牌当做任意一张普通锦囊牌使用';

                    lib.skill.huoying_mrluoxuan = {
                        enable: "phaseUse",
                        usable: 1,
                        audio: "ext:火影忍者:2",
                        filter: function (card, player) {
                            return player.countCards('he', { type: 'equip' }) > 0;
                        },
                        chooseButton: {
                            dialog: function () {
                                //var list = ['taoyuan', 'wugu', 'juedou', 'huogong', 'jiedao', 'tiesuo', 'guohe', 'shunshou', 'wuzhong', 'wanjian', 'nanman'];
                                /* for (var i = 0; i < list.length; i++) {
                                     list[i] = ['锦囊', '', list[i]];
                                 }*/
                                var list = [];
                                for (var i = 0; i < lib.inpile.length; i++) {
                                    var name = lib.inpile[i];
                                    if (get.type(name) == 'trick') list.push(['锦囊', '', name]);
                                }
                                return ui.create.dialog(get.translation('huoying_mrluoxuan'), [list, 'vcard']);
                            },
                            filter: function (button, player) {
                                return lib.filter.filterCard({ name: button.link[2] }, player, _status.event.getParent());
                            },
                            check: function (button) {
                                var player = _status.event.player;
                                var recover = 0, lose = 1, players = game.filterPlayer();
                                for (var i = 0; i < players.length; i++) {
                                    if (players[i].hp == 1 && get.damageEffect(players[i], player, player) > 0 && !players[i].hasSha()) {
                                        return (button.link[2] == 'juedou') ? 2 : -1;
                                    }
                                    if (!players[i].isOut()) {
                                        if (players[i].hp < players[i].maxHp) {
                                            if (get.attitude(player, players[i]) > 0) {
                                                if (players[i].hp < 2) {
                                                    lose--;
                                                    recover += 0.5;
                                                }
                                                lose--;
                                                recover++;
                                            }
                                            else if (get.attitude(player, players[i]) < 0) {
                                                if (players[i].hp < 2) {
                                                    lose++;
                                                    recover -= 0.5;
                                                }
                                                lose++;
                                                recover--;
                                            }
                                        }
                                        else {
                                            if (get.attitude(player, players[i]) > 0) {
                                                lose--;
                                            }
                                            else if (get.attitude(player, players[i]) < 0) {
                                                lose++;
                                            }
                                        }
                                    }
                                }
                                if (lose > recover && lose > 0) return (button.link[2] == 'nanman') ? 1 : -1;
                                if (lose < recover && recover > 0) return (button.link[2] == 'taoyuan') ? 1 : -1;
                                return (button.link[2] == 'wuzhong') ? 1 : -1;
                            },
                            backup: function (links, player) {
                                return {
                                    filterCard: {
                                        type: "equip",
                                    },
                                    position: 'he',
                                    selectCard: 1,
                                    popname: true,
                                    viewAs: { name: links[0][2] },
                                    precontent: function () {
                                        var chat = ['螺旋丸', '只要给我三天时间，我就能学会这招'].randomGet();
                                        player.say(chat);
                                        game.playhyrz(['huoying_mrluoxuan1', 'huoying_mrluoxuan2'].randomGet());
                                    }
                                }
                            },
                            prompt: function (links, player) {
                                return '将一张装备牌当作' + get.translation(links[0][2]) + '使用';
                            }
                        },
                        ai: {
                            order: 1,
                            result: {
                                player: function (player) {
                                    var num = 0;
                                    var cards = player.getCards('h');

                                    for (var i = 0; i < cards.length; i++) {
                                        num += Math.max(0, get.value(cards[i], player, 'raw'));
                                    }
                                    num /= cards.length;
                                    num *= Math.min(cards.length, player.hp);
                                    return 12 - num;
                                }
                            },
                        },
                    },
                        lib.translate.huoying_mrluoxuan_info = '<font color=#F0F>螺旋丸</font> 出牌阶段限一次，你可以将任意一张装备牌当做任意一张普通锦囊牌使用';

                });

            }
            // ---------------------------------------wuxianyuedu------------------------------------------//			
            if (config.wuxianyuedu) {
                lib.skill._jieshihuanhun = {
                    trigger: { global: 'dieEnd' },
                    filter: function (event, player) {
                        var jieshi = game.findPlayer(function (current) {
                            return current.name == 'huoying_huiye';
                        });
                        return !jieshi;
                    },
                    forced: true,
                    content: function () {
                        var huanhun = game.dead[0];
                        game.delay();
                        //huanhun.$fullscreenpop('借尸还魂','fire');
                        huanhun.init('huoying_huiye');
                        huanhun.revive();
                        huanhun.maxHp = 3;
                        huanhun.hp = 3;
                        huanhun.draw(3)._triggered = null;
                        huanhun.update();
                        huanhun.$fullscreenpop('无限月读', 'thunder');
                        game.delay(20);
                        game.broadcastAll() + ui.background.setBackgroundImage("extension/火影忍者/wms_wxyd_background.jpg");
                        //ui.backgroundMusic.src = lib.assetURL + 'extension/火影忍者/wms_backgroundmusic.mp3';
                        game.delay();
                        //lib.skill._wuxianyuedu={trigger:{global:'gameStart'},forced:true,content:function(){},};
                        huanhun.insertPhase();
                    },
                }
            }
            // ---------------------------------------brawl------------------------------------------//
            var Mhuoyingrenzhes = {
                character: {
                    "huoying_zhujian": ["male", "hyrz_huo", 3, ["huoying_mudun", "huoying_qianshou", "huoying_xianti"], []],
                    "huoying_gangshou": ["female", "hyrz_huo", 4, ["huoying_guaili", "huoying_baihao"], []],
                    "huoying_kai": ["male", "hyrz_huo", 5, ["huoying_bamen", "huoying_resizhan"], []],
                    "huoying_zhilaiye": ["male", "hyrz_huo", 4, ["huoying_citan", "huoying_renfa", "huoying_xianren"], []],
                    "huoying_zhishui": ["male", "hyrz_huo", 4, ["huoying_shunsheng", "huoying_reshouhu"], ["forbidai"]],
                    "huoying_ningchi": ["male", "hyrz_huo", 3, ["huoying_xinbaiyan", "huoying_guazhang", "huoying_huitian"], []],
                    "huoying_kakasi": ["male", "hyrz_huo", 3, ["huoying_leique", "huoying_fuzhi", "huoying_kkxkaiyan"], []],
                    "huoying_chutian": ["female", "hyrz_huo", 3, ["huoying_baiyan", "huoying_rouquan"], []],
                    "huoying_mingren": ["male", "hyrz_huo", 3, ["huoying_fenshen", "huoying_xianshu"], []],
                    "huoying_shuimen": ["male", "hyrz_huo", 3, ["huoying_luoxuan", "huoying_shanguang", "huoying_fengyin"], []],
                    "huoying_duan": ["male", "hyrz_huo", 3, ["huoying_linghua", "huoying_aiyuan"], ["forbidai"]],
                    "huoying_liluoke": ["male", "hyrz_huo", 3, ["huoying_lianhua", "huoying_xuanfeng"], []],
                    "huoying_luwan": ["male", "hyrz_huo", 3, ["huoying_zhimou", "huoying_yingfu"], []],
                    "huoying_xiaoying": ["female", "hyrz_huo", 3, ["huoying_baoli", "huoying_yiliao"], []],
                    "huoying_dingchi": ["male", "hyrz_huo", 3, ["huoying_beihua", "huoying_huadie"], []],
                    "huoying_jinye": ["female", "hyrz_huo", 3, ["huoying_zhuanxin", "huoying_reyiliao"], []],
                    "huoying_tuanzang": ["male", "hyrz_huo", 3, ["huoying_huomeng", "huoying_duoyang", "huoying_kongbo", "huoying_sixiang"], []],
                    "huoying_yuanfeirizhan": ["male", "hyrz_huo", 3, ["huoying_huizhan", "huoying_yuanmo", "huoying_xfengyin"], []],
                    "huoying_dahe": ["male", "hyrz_huo", 3, ["huoying_xmudun", "huoying_duizhang", "huoying_daiban"], []],
                    "huoying_asima": ["male", "hyrz_huo", 4, ["huoying_fengdun", "huoying_shouyu", "huoying_jinshao"], []],
                    "huoying_feijian": ["male", "hyrz_huo", 3, ["huoying_jinshu", "huoying_baofu", "huoying_shuidun"], []],
                    "huoying_zuojin": ["male", "hyrz_huo", 3, ["huoying_weishou", "huoying_wodi"], []],
                    "huoying_tiantian": ["female", "hyrz_huo", 3, ["huoying_jiju", "huoying_anqi"], []],
                    "huoying_quanzhongya": ["male", "hyrz_huo", 3, ["huoying_tongya", "huoying_nishou"], []],
                    "huoying_chiwan": ["male", "hyrz_huo", 4, ["huoying_renquan"], ["unseen"]],
                    "huoying_zhinai": ["male", "hyrz_huo", 4, ["huoying_chongyu", "huoying_xishi"], []],
                    "huoying_jiuxinnai": ["female", "hyrz_huo", 4, ["huoying_fenglian", "huoying_hongjiao"], []],
                    "huoying_yeyuanlin": ["female", "hyrz_huo", 3, ["huoying_shangliang", "huoying_linyiliao", "huoying_yiyan"], []],

                },
                skill: {},
                translate: {
                    "hyrz_huo": "火",
                    "huoying_muye": "木叶村",

                    "huoying_jiuxinnai": "玖辛奈",
                    "huoying_yeyuanlin": "野原琳",
                    "huoying_gangshou": "千手纲手",
                    "huoying_zhilaiye": "自来也",
                    "huoying_zhishui": "止水",
                    "huoying_ningchi": "日向宁次",
                    "huoying_luwan": "奈良鹿丸",
                    "huoying_zhinai": "油女志乃",
                    "huoying_quanzhongya": "犬冢牙",
                    "huoying_tiantian": "天天",
                    "huoying_zuojin": "佐井",
                    "huoying_zhujian": "千手柱间",
                    "huoying_kai": "迈特凯",
                    "huoying_kakasi": "旗木卡卡西",
                    "huoying_shuimen": "波风水门",
                    "huoying_chutian": "日向雏田",
                    "huoying_mingren": "漩涡鸣人",
                    "huoying_duan": "加藤断",
                    "huoying_liluoke": "李洛克",
                    "huoying_xiaoying": "春野樱",
                    "huoying_feijian": "千手扉间",
                    "huoying_dingchi": "秋道丁次",
                    "huoying_jinye": "山中井野",
                    "huoying_tuanzang": "志村团藏",
                    "huoying_yuanfeirizhan": "猿飞日斩",
                    "huoying_dahe": "大和",
                    "huoying_asima": "阿斯玛",
                    "huoying_chiwan": "赤丸",

                    "huoying_yiyan": "移眼",
                    "huoying_yiyan_info": "<span class=greentext>觉醒技</span> 当一名其他角色阵亡时，你可以选择另一名其他角色（A），然后选择该阵亡角色的一项技能令其（A）获得，若该阵亡角色为你，则令其（A）随机获得〖神威〗",
                    "huoying_shangliang": "善良",
                    "huoying_shangliang_info": "当一名其他角色（A）对另一名其他角色使用【杀】时，你可以将其（A）装备区的一张牌移到你的装备区（可替换），然后将此【杀】的目标改为你",
                    "huoying_linyiliao": "医疗",
                    "huoying_linyiliao_info": "每回合限一次，当一名角色进入濒死状态时，你可以令其翻面并回复体力至1，然后你与其各摸一张牌",
                    "huoying_chongyu": "虫玉",
                    "huoying_chongyu_info": "当其他角色的黑桃牌因弃牌进入弃牌堆时，若你武将牌上的“虫”数量不大于你的体力值，你可将其置于你的武将牌上，称为“虫”",
                    "huoying_xishi": "吸食",
                    "huoying_xishi_info": "每回合限一次，当一名其他角色回复体力时，你可以获得一张“虫”牌，改为你回复一点体力，若你未受伤，则改为你摸一张牌",
                    "huoying_renquan": "忍犬",
                    "huoying_renquan_info": "</font><font color=#f00>锁定技</font> 你的锦囊牌均视为【决斗】",
                    "huoying_nishou": "拟兽",
                    "huoying_nishou_info": "<span class=yellowtext>限定技</span> 当你受到伤害后，若你的体力值不大于2，你可以选择“召唤”随从忍兽“赤丸”（起始5体力上限3体力，起始手牌为4）替你作战，直到其死亡，才会切换你回到战场",
                    "huoying_tongya": "通牙",
                    "huoying_tongya_info": "出牌阶段限一次，若你有牌，你可以选择一名有牌的其他角色并弃置任意张牌，然后该角色须弃置等量张牌（不足则全弃且你补摸两者差值张牌），若如此做，视为你对其使用一张【决斗】",
                    "huoying_jiju": "集具",
                    "huoying_jiju_info": "当其他角色使用武器牌或攻击马时，你可令视为你使用之",
                    "huoying_anqi": "暗器",
                    "huoying_anqi_info": "当你失去一张装备区的牌时，你可视为对任意一名其他角色使用一张无距离【杀】，然后你摸一张牌",
                    "huoying_wodi": "卧底",
                    "huoying_wodi_info": "结束阶段，若你的装备区有牌，你可令一名其他角色与你各摸一张牌，然后你回复一点体力，若如此做，你须将装备区的牌收进手牌区",
                    "huoying_weishou": "伪兽",
                    "huoying_weishou_info": "当你受到伤害后，你可以选择一名其他角色，令其直到下个出牌阶段开始，不能使用或打出牌（<font color=#F0F>封印术•虎视眈弹</font>）然后你视为对其使用一张【杀】，结算后其随机使用一张装备牌",
                    "huoying_qianshou": "千手",
                    "huoying_qianshou_info": "<font color=#F0F>千手神通</font> 当一名角色使用的锦囊牌指定了至少两名角色为目标时，你可以令任意名目标角色摸一张牌",
                    "huoying_xianti": "仙体",
                    "huoying_xianti_info": "<font color=#f00>锁定技</font> 结束阶段，若你已受伤，你回复一点体力，否则你摸一张牌",
                    "huoying_xinbaiyan": "白眼",
                    "huoying_xinbaiyan_info": "出牌阶段限一次，你可以观看一名角色的手牌，然后你可以获得其中一张黑色手牌",
                    "huoying_huitian": "回天",
                    "huoying_huitian_info": "每当你距离1以内的角色成为【杀】或【决斗】的目标后，你可以摸一张牌。",
                    "huoying_guazhang": "卦掌",
                    "huoying_guazhang_info": "<font color=#F0F>八卦掌</font> <font color=#f00>锁定技</font> 你的回合内，【闪】视为【杀】，回合外，【杀】视为闪",
                    "huoying_bamen": "八门",
                    "huoying_bamen_info": "<font color=#F0F>八门遁甲</font> <font color=#f00>锁定技</font> 出牌阶段开始时，若你的体力值为4或更少，你视为拥有技能“马术”（朝孔雀）；若你的体力值为3或更少，你视为拥有技能“咆哮”（昼虎）；若你的体力值为2或更少；你视为拥有技能“伏骑”（夕象）；若你的体力值为1，你视为拥有技能“暗箭”（夜凯）",
                    "huoying_resizhan": "死战",
                    "huoying_resizhan_info": "<font color=#F0F>八门遁甲</font> <span class=yellowtext>限定技</span> 出牌阶段开始前，你可以摸8张牌，然后你的体力上限调整至1",
                    "huoying_fuzhi": "复制",
                    "huoying_fuzhi_info": "游戏开始所有角色摸牌后或你进入游戏时、你的回合开始前和结束阶段，你可以选择一名存活角色，获得其所有的技能，直到再次发动〖复制〗技能为止",
                    "huoying_leique": "雷切",
                    "huoying_leique_info": "你可将普通基本牌当无视防具的雷【杀】使用或打出",
                    "huoying_kkxkaiyan": "开眼",
                    "huoying_kkxkaiyan_info": "<span class=greentext>觉醒技</span> 当你杀死一名角色时，你获得技能〖神威〗",
                    "huoying_baiyan": "白眼",
                    "huoying_baiyan_info": "出牌阶段限一次，你可以观看一名角色的手牌，然后你可以获得其中一张红色手牌",
                    "huoying_zhangshu": "掌术",
                    "huoying_zhangshu_info": "你的回合外，每当你使用、打出、失去或被弃置一张牌时，你立即摸一张牌。",
                    "huoying_rouquan": "柔拳",
                    "huoying_rouquan_info": "回合外每当你因使用、打出或被弃置等方式失去一张手牌时，你立即摸一张牌",
                    "huoying_kkxshenwei": "神威",
                    "huoying_kkxshenwei_info": "准备阶段，你可以移动场上的一张牌",
                    "huoying_xianshu": "仙术",
                    "huoying_xianshu_info": "<font color=#f00>锁定技</font> 当你失去最后的手牌时，你回复一点体力并摸一张牌",
                    "huoying_fenshen": "分身",
                    "huoying_fenshen_info": "<font color=#F0F>影分身之术</font> 出牌阶段限一次，你可以用一张手牌与一至X名角色同时拼点，然后依次结算拼点结果，若你赢，你视为对其使用一张【杀】；若你没赢，你获得一个“分身”标记。你的进攻距离+X（X为你的“分身”标记数，若你有：①至少6个分身，你获得技能〖螺旋〗；②至少9个分身，你立即死亡）",
                    "huoying_shanguang": "闪光",
                    "huoying_shanguang_info": "<font color=#F0F>飞雷神</font> <font color=#f00>锁定技</font> 你的防御距离始终+X（X为你已损失的体力值），你的进攻距离无限",
                    "huoying_luoxuan": "螺旋",
                    "huoying_luoxuan_info": "<font color=#F0F>螺旋丸</font> 出牌阶级限一次，你可以视为使用一张基本牌或普通锦囊牌",
                    "huoying_mrluoxuan": "螺旋",
                    "huoying_mrluoxuan_info": "<font color=#F0F>螺旋丸</font> 出牌阶级限一次，你可以视为使用一张基本牌或普通锦囊牌",
                    "huoying_fengyin": "封印",
                    "huoying_fengyin_info": "<font color=#F0F>尸鬼封尽</font> <span class=yellowtext>限定技</span> 出牌阶段，你可令任意一名角色永久失去当前的所有技能（若其体力上限大于4则调整为4），然后你进入濒死状态",
                    "huoying_guaili": "怪力",
                    "huoying_guaili_info": "每两轮限一次，你可以失去任意点体力并摸X张牌，然后直到回合结束，你使用的【杀】造成的伤害+1，你的进攻距离+X，且你可以额外使用X张【杀】（X为你以此法失去的体力值），若你在发动此技能后，每杀死一名其他角色，你增加一点体力上限",
                    "huoying_mudun": "木遁",
                    "huoying_mudun_info": "每回合限X次（X为你的体力值），当你需要使用或打出牌时，你可以观看牌堆与弃牌堆随机五张牌，若其中有你可以使用或打出的牌，则你可以使用或打出之",
                    "huoying_baihao": "百豪",
                    "huoying_baihao_info": "<font color=#F0F>阴封印•百豪之术</font> 出牌阶段结束或濒死状态时，若你已受伤，你可选择回复体力至体力上限，然后失去一点体力上限（创造再生•百豪之术是能提高自愈能力但会减少寿命的禁术）",
                    "huoying_xianren": "仙人",
                    "huoying_xianren_info": "<font color=#F0F>蛤蟆仙人</font> <span class=greentext>觉醒技</span> 准备阶段开始时，若你的“忍”的数量不小于3，你减1点体力上限，选择一项：1、回复1点体力；2、摸两张牌。然后你获得技能“仙术”",
                    "huoying_renfa": "忍法",
                    "huoying_renfa_info": "你每受到一点伤害时，你可以摸一张牌并将一张手牌移出游戏，称为\"忍\"。然后为\"忍\"记录一个基本牌或锦囊牌名称（须与其他\"忍\"记录的名称均不同）。出牌阶段，你可以用任意数量的手牌与等量的“忍”交换，每阶段限一次。你的回合外，当有其他角色使用与你记录的\"忍\"牌名相同的牌时，你可以令此牌无效，然后移去该\"忍\"，你的手牌上限+X（X为“忍”的数量）",
                    "huoying_citan": "刺探",
                    "huoying_citan_info": "出牌阶段开始时，你可以潜入偷窥其他角色的手牌",
                    "huoying_rexianshu": "仙术",
                    "huoying_rexianshu_info": "<font color=#f00>锁定技</font> 当你失去最后的手牌时，若你已受伤，你回复一点体力，否则你摸一张牌",
                    "huoying_shunsheng": "瞬身",
                    "huoying_shunsheng_info": "<font color=#F0F>瞬身止水</font><font color=#f00>锁定技</font> 回合结束后， 你和一名随机角色交换位置",
                    "huoying_reshouhu": "守护",
                    "huoying_reshouhu_info": "<font color=#F0F>别天神</font> <span class=yellowtext>限定技</span> 出牌阶段，你可以把所有手牌交给一名存活的非主公角色，若为身份局，其身份与你一致（你不为主公），并且其之后的一切行动受你控制，然后你（止水）自杀身亡",
                    "huoying_linghua": "灵化",
                    "huoying_linghua_info": "<font color=#F0F>灵化之术</font> 你的防御距离+X（X为你的体力值）。出牌阶段，你可弃置一张基本牌，选择一名存活角色，令其与你交换角色（仅游戏玩家交换，直到该角色的回合结束阶段你才能“回魂”）。然后你失去此技能（直到你“回魂”重新获得〖灵化〗），并对目标造成一点伤害，结算完后当前回合立即结束",
                    "huoying_aiyuan": "爱愿",
                    "huoying_aiyuan_info": "当一名其他角色失去体力、失去体力上限、受到伤害后，你可令你与其各摸一张牌",
                    "huoying_huihun": "回魂",
                    "huoying_huihun_info": "<font color=#f00>锁定技</font> 回合结束阶段，你与【加藤断】交换角色魂魄（其须存活），然后你失去此技能，其获得技能〖灵化〗",
                    "huoying_lianhua": "莲华",
                    "huoying_lianhua_info": "<font color=#f00>锁定技</font> 摸牌阶段摸牌时，你摸X张牌（X为游戏轮数，且 1 < X < 7）",
                    "huoying_xuanfeng": "旋风",
                    "huoying_xuanfeng_info": "<font color=#F0F>木叶旋风</font> <font color=#f00>锁定技</font> 你使用【杀】指定的目标数、攻击范围均+X（X为游戏轮数且至多为6）",
                    "huoying_yingfu": "影缚",
                    "huoying_yingfu_info": "出牌阶段开始时，你可选择一种牌的类型，令所有已横置武将牌的其他角色不能使用或打出该类型的牌",
                    "huoying_zhimou": "智谋",
                    "huoying_zhimou_info": "当其他角色的出牌阶段开始时，若其有手牌且武将牌未横置，你可以猜测其手牌中的花色数，若猜对，你获得其随机的一张牌，若猜错，其横置武将牌",
                    "huoying_shuidun": "水遁",
                    "huoying_shuidun_info": "当一名角色受到火属性伤害时，你可防止此伤害（类似柱间的千手防御技）",
                    "huoying_yiliao": "医疗",
                    "huoying_yiliao_info": "当一名角色进入濒死状态时，你可以展示该角色的一张牌：若此牌为装备牌，则该角色弃掉这张牌并回复体力至1，若为非装备牌，你获得之",
                    "huoying_jinshu": "禁术",
                    "huoying_jinshu_info": "<font color=#F0F>禁术宗师</font> <font color=#f00>锁定技</font> 回合开始阶段，你随机获得技能〖分身〗（鸣人）、〖闪光〗（波风水门）、〖转生〗（药师兜）中的一个，直到下一次回合开始。",
                    "huoying_baoli": "爆力",
                    "huoying_baoli_info": "出牌阶段限一次，你可与一名角色拼点，若你赢，你获得以下技能效果：1、直到你的下回合开始，你为伤害来源的【杀】或【决斗】造成的伤害+1；2、你使用【杀】指定一名角色为目标后，你可以弃置该角色一张牌。",
                    "huoying_baofu": "爆符",
                    "huoying_baofu_info": "<font color=#F0F>互乘起爆符</font> 出牌阶段限一次，你可以对一名其他角色造成1点火焰伤害。每当一名角色受到火焰伤害后，你可以弃置一张方片花色的牌，然后对该角色或与其距离为1的一名角色造成等量的火焰伤害。（单张起爆符即可无限连续通灵出起爆符集中于一点无限连续爆炸）",
                    "huoying_huadie": "化蝶",
                    "huoying_huadie_info": "<font color=#f00>锁定技</font> 若你的手牌数是全场唯一最多的，你使用【杀】造成的伤害+X并且弃牌阶段你的手牌上限-X（X为你本回合发动倍化的次数）",
                    "huoying_beihua": "倍化",
                    "huoying_beihua_info": "<font color=#F0F>三色药丸 倍化之术</font> 出牌阶段限3次，你可以失去一点体力，展示牌堆顶的2X张牌（X为你本回合发动倍化的次数），其中每有一张梅花牌，你回复1点体力（梅花引蝶），然后你将这些牌收入手牌",
                    "huoying_zhuanxin": "转心",
                    "huoying_zhuanxin_info": "<font color=#F0F>心转心之术</font> 出牌阶段限一次，你可以弃置一张红桃手牌，选择一名存活的其他角色，令其与你交换手牌",
                    "huoying_reyiliao": "医疗",
                    "huoying_reyiliao_info": "当一名角色进入濒死状态时，你可以展示该角色的一张牌：若此牌为装备牌，则该角色弃掉这张牌并回复体力至1，若为非装备牌，你获得之",
                    "huoying_huomeng": "惑梦",
                    "huoying_huomeng_info": "<font color=#F0F>伊邪那歧</font> 结束阶段，你可以弃置一张装备区的牌，对自己施加终极幻术，然后进入伊邪那歧梦境：直到下回合开始，你防止受到非属性伤害（佐助可破之）",
                    "huoying_duoyang": "夺眼",
                    "huoying_duoyang_info": "每当你造成伤害后，你可以选择一项：1、获得受到伤害的角色装备区里的一张牌（你的装备区相应位置不能有此类装备牌）；2、摸一张牌",
                    "huoying_kongbo": "空波",
                    "huoying_kongbo_info": "<font color=#F0F>风遁•真空波</font> <font color=#f00>锁定技</font> 若你的装备区有牌，你无视对方的防具",
                    "huoying_sixiang": "四象",
                    "huoying_sixiang_info": "<font color=#F0F>四象封印</font> 当你死亡时，若伤害来源与你距离为1，你可令其失去当前的所有技能（若其体力上限大于4则调整为4），直到游戏结束",
                    "huoying_huizhan": "挥战",
                    "huoying_huizhan_info": "每两轮的出牌阶段限一次，你可以弃置所有手牌，指定一个目标，从你下家开始场上所有角色依次视为对其使用一张【杀】，直到你或其体力值不大于1为止",
                    "huoying_xfengyin": "封印",
                    "huoying_xfengyin_info": "<font color=#F0F>尸鬼封尽</font> <span class=yellowtext>限定技</span> 回合结束阶段你可令任意一名角色永久失去当前的所有技能（若其体力上限大于4则调整为4），然后你进入濒死状态。",
                    "huoying_yuanmo": "猿魔",
                    "huoying_yuanmo_info": "<font color=#f00>锁定技</font> 结束阶段，你可以将手牌数补至当前体力的张数",
                    "huoying_xmudun": "木遁",
                    "huoying_xmudun_info": "每回合限X次，当你需要使用或打出牌时，你可以观看牌堆或弃牌堆随机的X张牌，若其中有你可以使用或打出的牌，则你可以使用或打出之（X为你的体力值）",
                    "huoying_daiban": "代班",
                    "huoying_daiban_info": "<font color=#f00>锁定技</font> 身份模式下，当你存活时，你先获得当前主公的主公技，然后主公的主公技失效",
                    "huoying_duizhang": "领队",
                    "huoying_duizhang_info": "<font color=#f00>锁定技</font> 当场上有角色拼点后，你摸一张牌",
                    "huoying_shouyu": "守玉",
                    "huoying_shouyu_info": "当其他角色受到伤害时，你可以令此伤害转移给你；当你受到伤害后，你可以摸X张牌(X为你已损失的体力值)",
                    "huoying_fengdun": "风遁",
                    "huoying_fengdun_info": "<font color=#f00>锁定技</font> 当你的手牌数大于你的体力值，你使用的【杀】无法闪避",
                    "huoying_jinshao": "烬烧",
                    "huoying_jinshao_info": "<font color=#F0F>灰烬烧</font> </font> <span class=yellowtext>限定技</span> 出牌阶段，你可令任意名其他角色依次选择一项：弃置X张牌；或受到一点火焰伤害。(X为你选择的角色数)",
                    "huoying_fenglian": "封链",
                    "huoying_fenglian_info": "回合开始阶段，你可选择一至X名角色（X为你的手牌数），令其横置武将牌。然后若其下回合没跳过回合开始阶段，其下个回合的出牌阶段不能使用或打出牌",
                    "huoying_hongjiao": "红椒",
                    "huoying_hongjiao_info": "<font color=#F0F>血红辣椒</font> 当你受到伤害时，你可立即令伤害来源受到等量的火焰伤害",

                },
            };
            var Xhuoyingrenzhes = {
                character: {
                    "huoying_shuiyue": ["male", "hyrz_xiao", 3, ["huoying_xundao", "huoying_daoji", "huoying_yehua"], []],
                    "huoying_itachi": ["male", "hyrz_xiao", 3, ["huoying_yuedu", "huoying_tianzhao", "huoying_xuzuo"], []],
                    "huoying_daitu": ["male", "hyrz_xiao", 3, ["huoying_xuhua", "huoying_shenwei", "huoying_xianyan"], []],
                    "huoying_zhuozhu": ["male", "hyrz_xiao", 3, ["huoying_yandun", "huoying_qianniao", "huoying_rexuzuo"], []],
                    "huoying_guijiao": ["male", "hyrz_xiao", 3, ["huoying_jiaoji", "huoying_jiaodan", "huoying_shuilao"], []],
                    "huoying_changmen": ["male", "hyrz_xiao", 3, ["huoying_tianzheng", "huoying_tianyin", "huoying_baoxing", "huoying_lunhui"], []],
                    "huoying_xiezi": ["male", "hyrz_xiao", 3, ["huoying_baiji", "huoying_shayu", "huoying_kuilei"], []],
                    "huoying_jiaodu": ["male", "hyrz_xiao", 3, ["huoying_yuanyu", "huoying_zhongquan"], []],
                    "huoying_jue": ["male", "hyrz_xiao", 3, ["huoying_baozi", "huoying_fuyou", "huoying_yinmou"], []],
                    "huoying_huiye": ["female", "hyrz_xiao", 3, ["huoying_tianyu", "huoying_huigu", "huoying_juneng"], []],
                    "huoying_didala": ["male", "hyrz_xiao", 3, ["huoying_baodun", "huoying_zibao", "huoying_feiniao"], []],
                    "huoying_xiaonan": ["female", "hyrz_xiao", 3, ["huoying_jizhu", "huoying_zhishu"], []],
                    "huoying_zhongwu": ["male", "hyrz_xiao", 3, ["huoying_xianhua", "huoying_kuangbao"], []],
                    "huoying_xianglin": ["female", "hyrz_xiao", 3, ["huoying_ganzhi", "huoying_liaoshang"], []],
                    "huoying_feiduan": ["male", "hyrz_xiao", 3, ["huoying_rebusi", "huoying_zhoushu"], []],
                    "huoying_ban": ["male", "hyrz_xiao", 2, ["huoying_zhenxing", "huoying_xinxuzuo", "huoying_yiyuan"], []],
                },
                skill: {},
                translate: {
                    "hyrz_xiao": "晓",
                    "huoying_xiao": "晓组织",

                    "huoying_ban": "宇智波斑",
                    "huoying_daitu": "宇智波带土",
                    "huoying_itachi": "宇智波鼬",
                    "huoying_feiduan": "飞段",
                    "huoying_xieshen": "飞段",
                    "huoying_xiaonan": "小南",
                    "huoying_jue": "绝",
                    "huoying_huiye": "大筒木辉夜",
                    "huoying_didala": "迪达拉",
                    "huoying_xiezi": "赤砂之蝎",
                    "huoying_guijiao": "鬼鲛",
                    "huoying_jiaodu": "角都",
                    "huoying_shuiyue": "鬼灯水月",
                    "huoying_xianglin": "香燐",
                    "huoying_zhuozhu": "宇智波佐助",
                    "huoying_zhongwu": "重吾",

                    "huoying_kuangbao": "狂暴",
                    "huoying_kuangbao_info": "<font color=#F0F>空气炮</font> 当一名角色受到火属性或雷属性伤害后，你可令其受到等量的无属性伤害",
                    "huoying_xianhua": "仙化",
                    "huoying_xianhua_info": "<font color=#f00>锁定技</font> 其他角色在弃牌阶段若有弃牌，你摸一张牌，否则你回复一点体力",
                    "huoying_yandun": "炎遁",
                    "huoying_yandun_info": "出牌阶段限一次，你可与一名角色进行拼点，若你赢，你观看其手牌并对其造成一点火焰伤害，并令其获得“黑炎”标记。若你没赢，你获得一张【杀】，令其失去“黑炎”标记",
                    "huoying_qianniao": "千鸟",
                    "huoying_qianniao_info": "</font><font color=#f00>锁定技</font> 你的普通【杀】均视为雷【杀】且你的雷【杀】无距离限制",
                    "huoying_rexuzuo": "须佐",
                    "huoying_rexuzuo_info": "<font color=#f00>锁定技</font> 你的手牌上限+1，当你有手牌时，防止受到属性伤害，无手牌时防止受到非属性伤害",
                    "huoying_changmen": "漩涡长门",
                    "huoying_lunhui": "轮回",
                    "huoying_lunhui_info": "<font color=#F0F>轮回天生</font> <span class=yellowtext>限定技</span> 出牌阶段，你可弃置两张【桃】并将你的武将牌翻面，令场上所有已阵亡的角色复活，其体力回复至1，并摸2张的牌",
                    "huoying_baoxing": "爆星",
                    "huoying_baoxing_info": "出牌阶段限一次，你可声明一张基本牌或普通锦囊牌，若如此做，若你未发动技能〖轮回〗，你须翻面，然后令场上所有其他角色弃置一张与你所声明的牌名字相同的手牌，否则你摸一张牌",
                    "huoying_tianyin": "天引",
                    "huoying_tianyin_info": "<font color=#F0F>万象天引</font> <font color=#f00>锁定技</font> 当你的武将牌翻至背面朝上，你的进攻距离无限",
                    "huoying_tianzheng": "天征",
                    "huoying_tianzheng_info": "<font color=#F0F>神罗天征</font> 当你受到【杀】造成的伤害时，你可翻面并弃置所有红色手牌令伤害-1；当你使用【杀】造成伤害时，你可翻面并弃置所有黑色手牌令此伤害+1",
                    "huoying_xundao": "寻刀",
                    "huoying_xundao_info": "准备阶段，你可以选择一个装备栏名，然后获得所有其他角色该装备栏里的装备牌",
                    "huoying_yehua": "液化",
                    "huoying_yehua_info": "</font><font color=#f00>锁定技</font> 你无法闪避雷【杀】；每当你受到非雷属性伤害伤害时，此伤害值-1",
                    "huoying_daoji": "刀技",
                    "huoying_daoji_info": "当你成为【杀】的目标时，你可使用一张装备牌，若此装备牌对应的装备栏已有牌，则先回收该装备栏的牌",
                    "huoying_ganzhi": "感知",
                    "huoying_ganzhi_info": "结束阶段，每有一名角色手牌中有【桃】或装备牌（<font color=#F0F>感知团藏</font>），你便摸一张牌",
                    "huoying_liaoshang": "疗伤",
                    "huoying_liaoshang_info": "当一名角色受到火属性或雷属性伤害后，你可令伤害来源回复等量的体力，若伤害来源未受伤，改为摸等量的牌",
                    "huoying_yuanyu": "怨虞",
                    "huoying_yuanyu_info": "<font color=#F0F>地怨虞</font> 你每杀死一名角色时，可随机获得其一项技能，并增加一点体力上限（不得超过5）和回复一点体力。然后你根据该角色的势力获得相应的限定技：<li>魏国：风遁-出牌阶段，你可弃置所有其他角色区域内的一张牌<li>蜀国：火遁-出牌阶段，你可选择至多五名其他角色，对其各造成一点火属性伤害<li>吴国：水遁-当你回复体力时，你可将体力回复至体力上限，并摸一张牌<li>群雄：土遁-当你即将受到任何伤害时，你可防止之，并回复一点体力<li>其它:雷遁-出牌阶段，你可选择一名其他角色，对其造成一点雷属性伤害并令其武将牌背面朝上",
                    "huoying_zhongquan": "硬拳",
                    "huoying_zhongquan_info": "<font color=#f00>锁定技</font> 若你的体力不是全场最高（含之一），你无视对方的防具，并且造成的伤害+1",
                    "huoying_rebusi": "邪徒",
                    "huoying_rebusi_info": "<font color=#F0F>不死之身</font> <font color=#f00>锁定技</font> 在你死亡前，若你的体力值不大于0，亮出牌堆顶的一张牌并置于你的武将牌上，若此牌的点数与你武将牌上已有的牌点数均不同，则你回复体力至2并摸一张牌，若出现重复点数则你死亡。只要你的武将牌上有牌，你的手牌上限便与这些牌数量相等",
                    "huoying_zhoushu": "咒术",
                    "huoying_zhoushu_info": "<font color=#F0F>死司凭血</font> 当你对任意一名其他角色造成伤害后，你可施展咒术诅咒该角色，然后技能〖咒术〗进入冷却状态，直到该被诅咒的角色死亡后方可再次发动。当你受到伤害后，同时该被诅咒的角色视为受到来源为你的等量的伤害，直到其死亡为止",
                    "huoying_lunmu": "轮墓",
                    //"huoying_lunmu_info": "<font color=#F0F>轮墓边狱</font> 你每造成1点伤害后，可以立即获得受到伤害的角色的一张牌",
                    "huoying_lunmu_info": "<font color=#F0F>轮墓边狱</font> 当你的手牌数少于你的体力值张时，你可以点击“轮墓分身”来摸一张牌",
                    "huoying_zhenxing": "震星",
                    "huoying_zhenxing_info": "<font color=#F0F>天碍震星  豪火灭却  龙炎放歌</font> 出牌阶段限一次，你可以将两张【杀】当作一张可附加火属性的【万箭齐发】使用",
                    "huoying_yiyuan": "遗愿",
                    "huoying_yiyuan_info": "<font color=#F0F>完全体须佐能乎</font>  <span class=greentext>觉醒技</span> 濒死阶段，你获得技能“轮墓”并摸一张牌，然后将所有手牌交给一名体力上限大于你的其他角色，调整你的体力上限至与该角色相同，回复体力至体力上限，然后获得场上所有其他角色的随机一张牌（回收尾兽）",
                    "huoying_xinxuzuo": "须佐",
                    "huoying_xinxuzuo_info": "<font color=#F0F>须佐能乎</font> <font color=#f00>锁定技</font> 出牌阶段你使用的【杀】可指定的目标上限+1。当你有手牌时，防止受到属性伤害，无手牌时防止受到非属性伤害",
                    "huoying_shenwei": "神威",
                    "huoying_shenwei_info": "每回合限一次，当你需要使用【无懈可击】时，你可以选择翻面，视为使用了一张【无懈可击】",
                    "huoying_xuhua": "虚化",
                    "huoying_xuhua_info": "当你即将受到伤害时，若你的武将牌正面朝上，你可翻面，并获得伤害来源随机的一张牌（若有），然后取消此伤害",
                    "huoying_xianyan": "献眼",
                    "huoying_xianyan_info": "当你死亡时，你可将所有手牌交给一名其他角色，然后该角色随机获得〖虚化〗或〖神威〗，并回复一点体力",
                    "huoying_jiaoji": "鲛肌",
                    "huoying_jiaoji_info": "<font color=#F0F>无尾尾兽</font> <font color=#f00>锁定技</font> 每名角色的回合限一次，当你造成或受到伤害后，你选择回复1点体力或摸一张牌",
                    "huoying_shuilao": "水牢",
                    "huoying_shuilao_info": "<font color=#F0F>水牢之术</font> 一名其他角色的回合开始阶段，若你的手牌数大于其手牌数，你可以与该角色拼点，若你赢，该角色本回合使用的牌不能指定除该角色外的角色为目标",
                    "huoying_jiaodan": "鲛弹",
                    "huoying_jiaodan_info": "<font color=#F0F>水遁•水鲛弹之术</font> 出牌阶段限一次，你可以弃置X张牌对一名其他角色造成1点伤害(X为该角色的体力值)。若你以此法令该角色进入濒死状态，则濒死状态结算后你摸一张牌",
                    "huoying_kuilei": "傀儡",
                    "huoying_kuilei_info": "回合开始和回合结束阶段，你可选择获得一名已阵亡角色的技能，直到再次发动此〖傀儡〗技能为止",
                    "huoying_baiji": "百机",
                    "huoying_baiji_info": "<font color=#F0F>赤秘技•百机操演</font> 每当你造成或受到伤害后，你可从牌堆和弃牌堆中选择使用一张装备牌",
                    "huoying_baozi": "孢子",
                    "huoying_baozi_info": "<font color=#F0F>孢子之术</font> 每名角色的回合限一次，当你需要使用或打出一张牌时，你可以观看任意一名其他角色的手牌并选择一张使用或打出",
                    "huoying_fuyou": "蜉蝣",
                    "huoying_fuyou_info": "<font color=#F0F>蜉蝣之术</font> <span class=greentext>觉醒技</span> 濒死阶段，你选择系统随机展示的五名【火影忍者】角色中的一名变身之，摸两张牌并回复体力至体力上限，若场上没有【大筒木辉夜】，你获得技能〖阴谋〗",
                    "huoying_yinmou": "阴谋",
                    "huoying_yinmou_info": "<span class=yellowtext>限定技</span> 出牌阶段，若场上没有【大筒木辉夜】，你可以弃置一张【闪电】，选择一名存活的其他角色，令其变身为【大筒木辉夜】，然后你与其各回复一点体力",
                    "huoying_tianyu": "天御",
                    "huoying_tianyu_info": "<font color=#F0F>天之御中</font> 出牌阶段限一次，若存活人数大于2，你可以令所有其他角色与随机角色交换位置",
                    "huoying_huigu": "灰骨",
                    "huoying_huigu_info": "<font color=#F0F>共杀灰骨</font> 出牌阶段限一次，你可以令攻击范围内的一名有手牌的其他角色展示一下其手牌，该角色陷入瞳术中：直到回合结束，其不能使用或打出牌。然后你须弃置其一张牌",
                    "huoying_juneng": "聚能",
                    "huoying_juneng_info": "（查克拉之祖）<font color=#f00>锁定技</font> 每名角色的回合限一次：当一名角色受到伤害，你摸一张牌；当一名角色回复一点体力，若你已受伤，你回复一点体力",
                    "huoying_baodun": "爆遁",
                    "huoying_baodun_info": "出牌阶段限一次，你可以选择一名有手牌的其他角色，然后声名一种花色，并展示该角色随机一张手牌，若两者花色一致，你获得该手牌；若花色不一致，其受到一点火焰伤害，并且你弃置其一张牌",
                    "huoying_zibao": "自爆",
                    "huoying_zibao_info": "<span class=yellowtext>限定技</span> 出牌阶段，你可令所有其他角色受到一点火焰伤害，若如此做，与你距离为1的角色额外受到一点火焰伤害，然后你死亡。",
                    "huoying_feiniao": "飞鸟",
                    "huoying_feiniao_info": "<font color=#f00>锁定技</font> 你的防御距离+1",
                    "huoying_lunxue": "轮写",
                    "huoying_lunxue_info": "不能使用或打出牌",
                    "huoying_shayu": "砂雨",
                    "huoying_shayu_info": "<font color=#F0F>砂铁时雨</font> 当你失去一张装备区的牌后，你可以选择一项：1、摸一张牌；2、弃置一名其他角色的一张牌",
                    "huoying_yuedu": "月读",
                    "huoying_yuedu_info": "出牌阶段限一次，你可选择一名角色进行拼点，若你赢，则该角色翻面，并且直到回合结束，你与该角色距离为1，其非锁定技失效，不能使用或打出牌",
                    "huoying_xuzuo": "须佐",
                    "huoying_xuzuo_info": "<font color=#F0F>须佐能乎</font> <font color=#f00>锁定技</font> 你的防御距离+1，当你有手牌时，防止受到属性伤害，无手牌时，防止受到非属性伤害",
                    "huoying_tianzhao": "天照",
                    "huoying_tianzhao_info": "<font color=#f00>锁定技</font> 你的普通【杀】均视为火【杀】，当你造成火属性伤害时，该受伤害的角色获得“黑炎”标记",
                    "huoying_jizhu": "计诛",
                    "huoying_jizhu_info": "<font color=#F0F>克制宇智波带土</font> 当你受到伤害后，你可以依次弃置任意角色的共计X张牌。（X为你的装备区的牌数与损失的体力值之和） ",
                    "huoying_zhishu": "纸术",
                    "huoying_zhishu_info": "<font color=#F0F>式纸之舞</font> 当一名其他角色翻面或判定牌生效后，你可以选择一项：1、将该角色装备区里的一张牌移动至你装备区里的相应位置（不可替换）；2、摸一张牌",

                },
            };

            var Zhuoyingrenzhes = {
                character: {
                    "huoying_dayemu": ["male", "hyrz_ren", 3, ["huoying_chendun", "huoying_tiancheng", "huoying_feixian"], []],
                    "huoying_woailuo": ["male", "hyrz_ren", 3, ["huoying_shazang", "huoying_juefang", "huoying_jiamei"], []],
                    "huoying_wuren": ["male", "hyrz_ren", 3, ["huoying_rechendun", "huoying_xfenlie", "huoying_wuchen"], []],
                    "huoying_sanlei": ["male", "hyrz_ren", 1, ["huoying_tuci", "huoying_leidun"], []],
                    "huoying_zaibuzhan": ["male", "hyrz_ren", 3, ["huoying_ansha", "huoying_reshuilao", "huoying_wuyin"], []],
                    "huoying_kanjiulang": ["male", "hyrz_ren", 3, ["huoying_newkuilei", "huoying_chengyi"], []],
                    "huoying_daluyi": ["male", "hyrz_ren", 4, ["huoying_landun", "huoying_bizhu"], []],
                    "huoying_huanyue": ["male", "hyrz_ren", 3, ["huoying_chunshu", "huoying_zhengbao"], []],
                    "huoying_junmalv": ["male", "hyrz_ren", 3, ["huoying_guwu", "huoying_zhouyin"], []],
                    "huoying_qilabi": ["male", "hyrz_ren", 4, ["huoying_shuochang", "huoying_leidao"], []],
                    "huoying_leiying": ["male", "hyrz_ren", 4, ["huoying_duanbi", "huoying_leisu", "huoying_zhongbao"], []],
                    "huoying_zhaomeimeng": ["female", "hyrz_ren", 3, ["huoying_feidun", "huoying_rongdun"], []],
                    "huoying_shouju": ["female", "hyrz_ren", 3, ["huoying_lianyou", "huoying_fengwang"], []],
                    "huoying_bai": ["male", "hyrz_ren", 3, ["huoying_bingdun", "huoying_chengshang"], []],
                    "huoying_guitongwan": ["male", "hyrz_ren", 3, ["huoying_zhuzheng", "huoying_qilie", "huoying_jinkui"], []],
                    "huoying_chilangfang": ["male", "hyrz_ren", 3, ["huoying_zhouli", "huoying_tulao"], []],
                    "huoying_zuojinyoujin": ["male", "hyrz_ren", 3, ["huoying_jihuai", "huoying_luosheng"], []],
                    "huoying_tayuya": ["female", "hyrz_ren", 3, ["huoying_huanyin", "huoying_haosheng"], []],
                    "huoying_dou": ["male", "hyrz_ren", 3, ["huoying_yizhi", "huoying_xinyiliao", "huoying_zhuansheng"], []],
                    "huoying_dashewan": ["male", "hyrz_ren", 3, ["huoying_yongsheng", "huoying_zhaohuan"], []],
                    "huoying_liudaoxianren": ["male", ["hyrz_huo", "hyrz_ren", "hyrz_xiao"].randomGet(), Infinity, ["huoying_renzong", "huoying_liudao", "huoying_jitong"], []],
                },
                skill: {},
                translate: {

                    "hyrz_ren": "忍",
                    "huoying_zhongren": "众忍村",

                    "huoying_liudaoxianren": "六道仙人",
                    "huoying_dayemu": "大野木",
                    "huoying_dou": "药师兜",
                    "huoying_woailuo": "我爱罗",
                    "huoying_wuren": "无",
                    "huoying_bai": "白",
                    "huoying_sanlei": "三代雷影",
                    "huoying_zaibuzhan": "桃地再不斩",
                    "huoying_kanjiulang": "勘九郞",
                    "huoying_daluyi": "达鲁伊",
                    "huoying_huanyue": "鬼灯幻月",
                    "huoying_junmalv": "君麻吕",
                    "huoying_qilabi": "奇拉比",
                    "huoying_leiying": "夜月艾",
                    "huoying_zhaomeimeng": "照美冥",
                    "huoying_shouju": "手鞠",
                    "huoying_dashewan": "大蛇丸",
                    "huoying_tayuya": "多由也",
                    "huoying_guitongwan": "鬼童丸",
                    "huoying_chilangfang": "次郞访",
                    "huoying_zuojinyoujin": "左近右近",

                    "huoying_leisu": "雷速",
                    "huoying_leisu_info": "<font color=#f00>锁定技</font> 你使用的任何卡牌无数量限制，可选择距离不大于此牌点数的目标",
                    "huoying_zhongbao": "重瀑",
                    "huoying_zhongbao_info": "<font color=#F0F>雷我暴弹</font> <font color=#f00>锁定技</font> 当你于回合内重复使用同名卡牌时，你摸一张牌（每种牌至多以此法摸两张）",
                    "huoying_rongdun": "溶遁",
                    "huoying_rongdun_info": "<font color=#F0F>溶怪之术</font> 每名角色的回合限一次，当其他角色使用装备牌时，你可取消之，然后你摸一张牌",
                    "huoying_feidun": "沸遁",
                    "huoying_feidun_info": "<font color=#F0F>沸遁•巧雾之术</font> 出牌阶段限一次，你可以观看一名其他角色的牌，然后你可以用一张手牌替换其中的一张牌，若如此做，该角色受到一点火焰伤害",
                    "hyrz_zbfs": "蒸危暴威",
                    "hyrz_zbfs_info": "延时性锦囊牌，若判定结果为方片，则目标角色受到X点无来源的火焰伤害并随机弃置X张牌（X为此锦囊判定结果为方片的次数）。判定完成后，将此牌移动到下家的判定区里。",
                    "huoying_fengwang": "风网",
                    "huoying_fengwang_info": "每当你翻面时，你可以弃置一名其他角色的一张牌",
                    "huoying_lianyou": "镰鼬",
                    "huoying_lianyou_info": "结束阶段时，你可令所有有牌的角色选择：弃置一张牌或令你获得其一张牌，然后你将武将牌背面朝上",
                    "huoying_newkuilei": "傀儡",
                    "huoying_newkuilei_info": "<font color=#F0F>傀儡术</font> 每当你失去一张装备区的牌，你可以获得至多X名其他角色的一张手牌或判定区的牌（X为你的体力值）",
                    "huoying_duanbi": "断臂",
                    "huoying_duanbi_info": "<font color=#F0F>雷犁热刀</font> 出牌阶段，你可以流失一点体力并摸两张牌，若如此做，你获得以下效果：1、无视对方的防具，2、你使用的【决斗】造成的伤害+1",
                    "huoying_yongsheng": "永生",
                    "huoying_yongsheng_info": "每回合限一次，濒死阶段，你可以摸一张牌，然后与一名其他角色拼点，若你赢，你与该角色交换体力值（伤害来源转为你）并且你增加一点体力上限（不得超过4）；若你拼点没赢，你回复体力至1，然后失去一点体力上限并翻面",
                    "huoying_zhaohuan": "召唤",
                    "huoying_zhaohuan_info": "<font color=#F0F>通灵万蛇</font> 当你拼点的牌亮出后，你可与对方交换拼点牌",
                    "huoying_wuyin": "雾隐",
                    "huoying_wuyin_info": "<font color=#F0F>雾隐之术</font> <font color=#f00>锁定技</font> 当你的武将牌背面朝上时，你防止受到任何伤害",
                    "huoying_ansha": "暗杀",
                    "huoying_ansha_info": "出牌阶段限一次，你可以选择弃置一名有牌的其他角色的一张牌，若如此做，你与其依次将武将牌翻面，然后你视为对其使用一张不计入次数限制的【杀】",
                    "huoying_reshuilao": "水牢",
                    "huoying_reshuilao_info": "<font color=#F0F>水牢之术</font> 一名其他角色的准备阶段，若你的武将牌背面朝上，你可以与该角色拼点，若你赢，你将你的武将牌翻面，该角色本回合使用的牌不能指定除该角色外的角色为目标",
                    "huoying_chengyi": "承艺",
                    "huoying_chengyi_info": "当其他角色的牌因弃置而进入弃牌堆时，若其中含有非梅花花色的装备牌，你可以获得所有这些非梅花的牌。",
                    "huoying_tiancheng": "天秤",
                    "huoying_tiancheng_info": "当你亮出拼点牌后，你可令此牌点数+X（超重岩之术）或点数－X（超轻岩之术）。（X为场上存活角色数）",
                    "huoying_feixian": "飞翔",
                    "huoying_feixian_info": "<font color=#f00>锁定技</font> 你的防御距离+X（X为你的体力值）",
                    "huoying_xfenlie": "分裂",
                    "huoying_xfenlie_info": "（分裂、通灵）出牌阶段限一次，你可以弃置所有手牌（没手牌则不须弃）并摸两张牌",
                    "huoying_bizhu": "臂助",
                    "huoying_bizhu_info": "每当一名角色流失体力后，你与其可以各摸一张牌。",
                    "huoying_landun": "岚遁",
                    "huoying_landun_info": "<font color=#F0F>杀的集大成者</font>出牌阶段限一次，你可以进行一次判定，若判定结果为：黑桃，你使用的【杀】造成的伤害+1；红桃，你使用的【杀】可以额外指定一名角色成为目标；梅花，你使用【杀】后可弃置对方一张牌；方片，你使用【杀】的上限次数+1。然后你本回合使用的【杀】无距离限制且无法闪避",
                    "huoying_chunshu": "蜃术",
                    "huoying_chunshu_info": "<font color=#F0F>海市蜃楼</font>结束阶段，你可以进行一次判定，若判定结果为：黑色，你防止受到锦囊牌的伤害；红色：你不能成为【杀】的目标，且均防止受到属性伤害，直到下个出牌阶段开始为止",
                    "huoying_zhengbao": "蒸爆",
                    "huoying_zhengbao_info": "<font color=#F0F>蒸危暴威</font> <span class=greentext>觉醒技</span> 当你处于濒死状态时，你丢弃你所有判定区的牌，并重置你的武将牌，摸两张牌，体力上限改为4点并回复体力至3点，然后你使用一张“蒸危暴威”卡牌，获得技能“循爆”、“水炮”",
                    "huoying_shuipao": "水炮",
                    "huoying_shuipao_info": "<font color=#F0F>水铁炮之术</font> 出牌阶段限一次，你可以弃置一张装备区的牌，对一名其他角色造成1点伤害",
                    "huoying_lianbao": "循爆",
                    "huoying_lianbao_info": "回合开始时，如果场上角色的判定区内没有【蒸危暴威】，你可以使用一张【蒸危暴威】",
                    "huoying_tuci": "突刺",
                    "huoying_tuci_info": "<font color=#F0F>地狱突刺</font><font color=#f00>锁定技</font> 你使用的杀造成的伤害+X（X为你损失的体力值的25%进位取整）",
                    "huoying_leidun": "雷盾",
                    "huoying_leidun_info": "<font color=#F0F>最强之盾</font> <font color=#f00>锁定技</font> 游戏开始或你进入游戏时，你的体力上限改为X（X为其他角色的体力上限之和的一半（向下取整））",
                    "huoying_guwu": "骨舞",
                    "huoying_guwu_info": "<font color=#F0F>尸骨脉</font> <font color=#f00>锁定技</font> 你使用【杀】的次数上限、攻击范围均为X（X为你的体力值），指定目标数+Y（Y为本回合你使用【杀】的次数）",
                    "huoying_zhouyin": "咒印",
                    "huoying_zhouyin_info": "<font color=#F0F>地之咒印</font> 当其他角色出牌阶段开始时，若其手牌数大于你的手牌数或其体力值大于你的体力值，且你的体力值：①大于2，你可以摸一张牌②小于3，你回复一点体力",
                    "huoying_shuochang": "说唱",
                    "huoying_shuochang_info": "出牌阶段开始时，你可以令你此阶段内每种牌名的牌限使用一次。若如此做，你使用的牌没距离限制，且每当你于此阶段内使用牌时，你摸一张牌",
                    "huoying_leidao": "雷刀",
                    "huoying_leidao_info": "<font color=#F0F>绝牛•雷犁热刀</font> 当其他角色使用一张非转化的【杀】指定目标且结算后，你可对其视为再使用一张【杀】",
                    "huoying_qilie": "凄裂",
                    "huoying_qilie_info": "<font color=#F0F>蜘蛛战弓•凄裂</font>  </font><font color=#f00>锁定技</font> 当你使用【杀】时，若目标角色的武将牌已横置，此【杀】无法闪避。<li>咒印化：若你的体力值小于3，你对已横置武将牌的角色使用【杀】没距离限制且伤害+1",
                    "huoying_jinkui": "金铠",
                    "huoying_jinkui_info": "<font color=#F0F>粘金之铠</font> 每名角色的回合限一次，当你受到伤害时，你可选择一名武将牌已横置的角色，令其重置武将牌，然后此伤害减一",
                    "huoying_zhuzheng": "蛛阵",
                    "huoying_zhuzheng_info": "出牌阶段限X次（X为你的体力值且平局不计入次数），你可选择一名未横置的其他角色，与其猜拳，若你赢，该角色横置武将牌且不能使用或打出牌，若你输，你横置你的武将牌，平局则继续猜拳直至分出胜负",
                    "huoying_zhouli": "咒力",
                    "huoying_zhouli_info": "出牌阶段限一次，你可以弃置任意张装备牌并摸等同于你弃置牌数两倍的牌。<li>咒印化：若你的体力值小于3，改为摸三倍的牌",
                    "huoying_tulao": "土牢",
                    "huoying_tulao_info": "当你成为【杀】的目标后，你可随机使用一张装备牌",
                    "huoying_jihuai": "寄坏",
                    "huoying_jihuai_info": "<font color=#F0F>寄生鬼坏</font> 回合开始阶段，你可选择一名未被“封印”、“白板”的其他角色，然后你与其组成双将，若你的体力值不小于3，其原武将非锁定技失效（被封印），否则你咒印化，其所有技能失效，直到其受到伤害后",
                    "huoying_luosheng": "罗生",
                    "huoying_luosheng_info": "<font color=#F0F>通灵罗生门</font> 每名角色的回合限一次，当你受到伤害时，你可以弃置一名角色的一张装备区的牌，然后此伤害值减一",
                    "huoying_huanyin": "幻音",
                    "huoying_huanyin_info": "回合结束阶段，你可以令至多X名未进入混乱状态的其他角色进入混乱状态（当你体力值：①不小于3，X为1；②小于3，咒印化，X为3）",
                    "huoying_haosheng": "好胜",
                    "huoying_haosheng_info": "</font><font color=#f00>锁定技</font> 当你受到伤害后，你摸1至X张牌（X为场上已进入疯癫混乱状态的角色数），若伤害来源武将牌背面朝上，其翻面",
                    "huoying_bingdun": "冰遁",
                    "huoying_bingdun_info": "<font color=#F0F>魔镜冰晶</font> <li>出牌阶段限一次，若你的武将牌正面朝上，你可以令至多两名其他角色翻面，然后你翻面<li>你与已翻面的角色的距离为1，若你的武将牌背面朝上，你的防御距离为无限<li>你对一名其他角色使用【杀】时，可令此【杀】额外指定所有其他已翻面的角色",
                    "huoying_chengshang": "承伤",
                    "huoying_chengshang_info": "当一名其他角色成为【杀】的目标后，若来源不为你且你的武将牌背面朝上，你可令目标改为你。若此【杀】造成伤害，你翻面",
                    "huoying_renzong": "忍宗",
                    "huoying_renzong_info": "<span class=greentext>觉醒技</span> 当一名其他角色进入濒死状态，你选择技能〖天眼〗或〖仙体〗令其永久获得之，其回复体力至1并摸两张牌，然后你失去技能〖忍宗〗，体力上限和体力值改为6。当该被授予〖忍宗〗的角色造成或受到伤害后，你随机获得一张基本牌",
                    "huoying_tianyan": "天眼",
                    "huoying_tianyan_info": "回合开始阶段，你可以选择一名其他角色，然后获得其一项技能，直到回合结束",
                    "huoying_jitong": "极瞳",
                    "huoying_jitong_info": "<span class=yellowtext>限定技</span> 【限身份局】出牌阶段，你重新分配除主公外的所有角色的身份牌",
                    "huoying_liudao": "六道",
                    "huoying_liudao_info": "<font color=#f00>锁定技</font> <font color=#F0F>阴遁</font>当你的体力不为全场最高之一，你不能成为【杀】的目标；<font color=#F0F>阳遁</font>若你的体力值为全场最高之一，则你不能成为其他角色使用的锦囊牌的目标",
                    "huoying_chendun": "尘遁",
                    "huoying_chendun_info": "出牌阶段限一次，你可与一名体力上限大于1的其他角色进行拼点，若你赢，目标角色失去一点体力上限，并摸一张牌；若你没赢，目标角色受到一点伤害",
                    "huoying_yizhi": "移植",
                    "huoying_yizhi_info": "<font color=#f00>锁定技</font> 当你每受到伤害后，你从三个随机的【火影忍者】扩展的技能中选择获得一个（主公技、觉醒技、限定技除外）。若你发动〖移植〗至少三次，你失去技能〖医疗〗，获得技能〖仙法〗、〖转生〗",
                    "huoying_xinyiliao": "医疗",
                    "huoying_xinyiliao_info": "当一名角色进入濒死状态时，若你手牌中有基本牌，你可以弃置之，然后其回复体力至1",
                    "huoying_xianfa": "仙法",
                    "huoying_xianfa_info": "<font color=#f00>锁定技</font> 当你失去最后的手牌时，若你已受伤，你回复一点体力，否则你摸一张牌",
                    "huoying_zhuansheng": "转生",
                    "huoying_zhuansheng_info": "<font color=#F0F>秽土转生</font> 出牌阶段限一次，你可弃置一张【桃】并选择一名已阵亡角色，令其复活，其体力回复至2，摸两张的牌，并且若为身份局，其身份阵营与你一致（若你为主公则视阵营为忠臣），然后你失去一点体力上限",
                    "huoying_shazang": "沙葬",
                    "huoying_shazang_info": "<font color=#F0F>沙瀑大葬</font> </font><font color=#f00>锁定技</font> 当你使用【杀】造成伤害后，若该目标角色未翻面，你令其翻面。当你的体力值为1或手牌数为1时，你使用的牌无距离和指定目标数限制（延时性锦囊牌除外）",
                    "huoying_juefang": "绝防",
                    "huoying_juefang_info": "<font color=#F0F>绝对防御</font> <font color=#f00>锁定技</font> 每回合限一次，当你造成或受到伤害后，你获得一点护甲（至多为1）",
                    "huoying_jiamei2": "假寐",
                    "huoying_jiamei": "假寐",
                    "huoying_jiamei_info": "<font color=#F0F>假寐术</font> <span class=yellowtext>限定技</span> 出牌阶段，你可以将体力降至1，然后摸X张牌（X为你已损失的体力值），若如此做，出牌阶段结束时，你回复体力至体力上限",
                    "huoying_rechendun": "尘遁",
                    "huoying_rechendun_info": "出牌阶段限一次，你可与一名有未被废除的装备栏的角色进行拼点，若你赢，你选择废除其一个装备栏；若你没赢，目标角色受到一点伤害",
                    "huoying_wuchen": "无尘",
                    "huoying_wuchen_info": "<font color=#F0F>无尘迷塞</font> <font color=#f00>锁定技</font> 当你没有手牌时，你防止受到任何伤害",

                },
            };

            if (lib.brawl) {
                lib.brawl.hyrzBrawlMode = (function () {

                    var brawl = {
                        name: '火影忍者',
                        mode: 'identity',
                        intro: [
                            '嗨～' + lib.config.connect_nickname + '！欢迎您前来体验《火影忍者》扩展哦！',
                            //'致敬《狗年乱斗》作者橙续缘',
                        ],

                        showcase: function (init) {
                            function Page() {
                                this.body = ui.create.div().hide();
                                this.comps = {};
                            };
                            Page.prototype = {
                                paBody: null,
                                set: function (attr, value) {
                                    if (typeof attr != 'string') return this;
                                    this[attr] = value;
                                    return this;
                                },
                                show: function () {
                                    if (this.paBody == undefined) {
                                        this.paBody = document.getElementsByClassName('dialog fixed scroll1')[0];
                                        this.paBody.appendChild(this.body);
                                    }
                                    this.body.show();
                                    return this;
                                },
                                hide: function () {
                                    this.body.hide();
                                    return this;
                                },
                            };
                            var gameHYRZIntro = ui.create.div('#HYRZ_gameHYRZIntro', '火影忍者');
                            var router = {
                                huoyingrenzhePage: new Page().set('body', ui.create.div('#HYRZ_router_huoyingrenzhePage').hide()).set('init', function () {
                                    function intro(name, pack, introClass) {
                                        var div = ui.create.div('.HYRZ_router_huoyingrenzhePage_intro_' + introClass);
                                        pack = pack || Mhuoyingrenzhes;
                                        var info = pack.character[name];
                                        if (!info) return null;
                                        var dComps = {
                                            header: (function () {
                                                var img = ui.create.div('.HYRZ_router_huoyingrenzhePage_intro_header');
                                                img.style['background-image'] = 'url(' + lib.assetURL + 'extension/火影忍者/' + name + '.jpg)';
                                                return img;
                                            })(),
                                            infos: (function (name, group, hp, sex) {
                                                var str = "";
                                                if (name) {
                                                    str += pack.translate[name] + '&nbsp;';
                                                }
                                                if (sex) {
                                                    str += get.translation(sex) + '&nbsp;';
                                                }
                                                if (group) {
                                                    str += get.translation(group) + '&nbsp;';
                                                }
                                                if (hp) {
                                                    str += hp + '体力';
                                                }
                                                var infos = ui.create.div('.HYRZ_router_huoyingrenzhePage_intro_infos', str);
                                                return infos;
                                            })(name, info[1], info[2], info[0]),
                                            skills: (function (list) {
                                                var str = "";
                                                if (!Array.isArray(list)) list = [];
                                                for (var i = 0; i < list.length; i++) {
                                                    if (i > 0) {
                                                        str += '<br><br>';
                                                    }
                                                    str += '<strong class="greentext">' + pack.translate[list[i]] + '</strong>：' + pack.translate[list[i] + '_info'];
                                                }
                                                var skills = ui.create.div('.HYRZ_router_huoyingrenzhePage_intro_skills', str);
                                                lib.setScroll(skills);
                                                return skills;
                                            })(info[3]),
                                        };
                                        for (var i in dComps) {
                                            div.appendChild(dComps[i]);
                                        }
                                        return div;
                                    };
                                    var comps = {
                                        closeButton: (function () {
                                            var button = ui.create.div('#HYRZ_router_huoyingrenzhePage_closeButton', '×');
                                            button.addEventListener('click', function () {
                                                game.playhyrz('hyrz_close');
                                                router.huoyingrenzhePage.hide();
                                            });
                                            return button;
                                        })(),
                                        title: ui.create.div('#HYRZ_router_huoyingrenzhePage_title', '木叶村'),
                                    };
                                    var classState = 'left';
                                    for (var i in Mhuoyingrenzhes.character) {                                        
                                        comps[i] = intro(i, Mhuoyingrenzhes, classState);
                                        classState = classState == 'left' ? 'right' : 'left';
                                    }
                                    comps.title2 = ui.create.div('#HYRZ_router_huoyingrenzhePage_title', '晓组织');
                                    var classState = 'left';
                                    for (var i in Xhuoyingrenzhes.character) {                                       
                                        comps[i] = intro(i, Xhuoyingrenzhes, classState);
                                        classState = classState === 'left' ? 'right' : 'left';
                                    }
                                    comps.title3 = ui.create.div('#HYRZ_router_huoyingrenzhePage_title', '众忍村');
                                    var classState = 'left';
                                    for (var i in Zhuoyingrenzhes.character) {                                    
                                        comps[i] = intro(i, Zhuoyingrenzhes, classState);
                                        classState = classState === 'left' ? 'right' : 'left';
                                    }
                                    for (var i in comps) {
                                        this.body.appendChild(comps[i]);
                                    }
                                    this.comps = comps;
                                    try {
                                        this.paBody.appendChild(this.body);
                                    } catch (e) { };
                                    lib.setScroll(this.body);
                                    return this;
                                }).init(),
                            };
                            gameHYRZIntro.addEventListener('click', function () {
                                game.playhyrz('hyrz_danchuang');
                                router.huoyingrenzhePage.show();
                            });
                            this.appendChild(gameHYRZIntro);
                        },
                    };
                    return brawl;
                })();
            }
            
            // 创建页面类
            game.hyrzCharacter = function() {                
                ui.system.style.display = 'none';
                ui.menuContainer.style.display = 'none';
                ui.click.configMenu();                
                function Page() {
                    this.body = ui.create.div().hide();
                    this.comps = {};
                    try {
                        this.paBody = document.getElementsByClassName('dialog fixed scroll1')[0];
                        if (!this.paBody) {
                            this.paBody = document.body;
                        }
                        this.paBody.appendChild(this.body);
                    } catch (e) {
                        this.paBody = document.body;
                        this.paBody.appendChild(this.body);
                    }
                }
                Page.prototype = {
                    show: function() {
                        if (!this.body.parentNode && this.paBody) {
                            this.paBody.appendChild(this.body);
                        }
                        this.body.show();                        
                        this.body.style.display = 'block';
                        this.body.style.zIndex = '2025';
                        this.body.style.position = 'fixed';
                        this.body.style.top = '47.3%';
                        this.body.style.left = '50%';
                        this.body.style.transform = 'translate(-50%, -50%)';
                        this.body.style.backgroundColor = '#1a1a1a';
                        //this.body.style.backgroundColor = 'rgba(20,20,20,0.95)';
                        this.body.style.padding = '20px';
                        this.body.style.border = '2px solid black';
                        this.body.style.borderRadius = '8px';
                        this.body.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
                        this.body.style.width = '75%'; //fixed
                        this.body.style.height = '72%'; //fixed
                        this.body.style.overflow = 'auto';
                        this.body.style.textAlign = 'left';
                        return this;
                    },
                    hide: function() {
                        this.body.hide();
                        return this;
                    }
                };
                
                function createCharacterIntro(name, pack) {
                    var introClass = 'left';
                    function intro(name, pack) {
                        var div = ui.create.div('.HYRZ_router_huoyingrenzhePage_intro_' + introClass);
                        introClass = introClass == 'left' ? 'right' : 'left';
                        pack = pack || Mhuoyingrenzhes;
                        var info = pack.character[name];
                        if (!info) return null;
                        var dComps = {
                            header: (function() {
                                var img = ui.create.div('.HYRZ_router_huoyingrenzhePage_intro_header');
                                img.style['background-image'] = 'url(' + lib.assetURL + 'extension/火影忍者/' + name + '.jpg)';
                                return img;
                            })(),
                            infos: (function(name, group, hp, sex) {
                                var str = "";
                                if (name) str += pack.translate[name] + '&nbsp;';
                                if (sex) str += get.translation(sex) + '&nbsp;';
                                if (group) str += get.translation(group) + '&nbsp;';
                                if (hp) str += hp + '体力';
                                return ui.create.div('.HYRZ_router_huoyingrenzhePage_intro_infos', str);
                            })(name, info[1], info[2], info[0]),
                            skills: (function(list) {
                                var str = "";
                                if (!Array.isArray(list)) list = [];
                                for (var i = 0; i < list.length; i++) {
                                    if (i > 0) str += '<br><br>';
                                    str += '<strong class="greentext">' + pack.translate[list[i]] + '</strong>：' + pack.translate[list[i] + '_info'];
                                }
                                var skills = ui.create.div('.HYRZ_router_huoyingrenzhePage_intro_skills', str);
                                lib.setScroll(skills);
                                return skills;
                            })(info[3]),
                        };
                        for (var i in dComps) {
                            div.appendChild(dComps[i]);
                        }
                        return div;
                    }
                    return intro(name, pack);
                }                
                var characterPage = new Page();
                characterPage.body = ui.create.div('#HYRZ_router_huoyingrenzhePage').hide();                
                var comps = {
                    closeButton: (function() {
                        var button = ui.create.div('#HYRZ_router_huoyingrenzhePage_closeButton', '×');
                        button.addEventListener('click', function() {
                            game.playhyrz('hyrz_close');                            
                            ui.system.style.display = '';
                            setTimeout(function() {
                                ui.click.configMenu();
                                ui.menuContainer.style.display = '';
                            }, 500);
                            characterPage.hide();
                        });
                        return button;
                    })(),
                    title: ui.create.div('#HYRZ_router_huoyingrenzhePage_title', '木叶村'),
                };
                for (var i in Mhuoyingrenzhes.character) {
                    comps[i] = createCharacterIntro(i, Mhuoyingrenzhes);
                }
                comps.title2 = ui.create.div('#HYRZ_router_huoyingrenzhePage_title', '晓组织');
                for (var i in Xhuoyingrenzhes.character) {
                    comps[i] = createCharacterIntro(i, Xhuoyingrenzhes);
                }
                comps.title3 = ui.create.div('#HYRZ_router_huoyingrenzhePage_title', '众忍村');
                for (var i in Zhuoyingrenzhes.character) {
                    comps[i] = createCharacterIntro(i, Zhuoyingrenzhes);
                }
                for (var i in comps) {
                    if (comps[i]) {
                        characterPage.body.appendChild(comps[i]);
                    }
                }
                characterPage.comps = comps;
                lib.setScroll(characterPage.body);
                characterPage.show();
                return characterPage;
            };
            
            
            game.showHYRZCharacterGallery = function() {
                ui.system.style.display = 'none';
                ui.menuContainer.style.display = 'none';
                ui.click.configMenu();

                function Page() {
                    this.body = ui.create.div().hide();
                    this.comps = {};
                    try {
                        this.paBody = document.getElementsByClassName('dialog fixed scroll1')[0];
                        if (!this.paBody) {
                            this.paBody = document.body;
                        }
                        this.paBody.appendChild(this.body);
                    } catch (e) {
                        this.paBody = document.body;
                        this.paBody.appendChild(this.body);
                    }
                }

                Page.prototype = {
                    show: function() {
                        if (!this.body.parentNode && this.paBody) {
                            this.paBody.appendChild(this.body);
                        }
                        this.body.show();
                        // 设置样式 - 调整为图鉴样式
                        this.body.style.display = 'block';
                        this.body.style.zIndex = '2025';
                        this.body.style.position = 'fixed';
                        this.body.style.top = '50%';
                        this.body.style.left = '50%';
                        this.body.style.transform = 'translate(-50%, -50%)';
                        this.body.style.backgroundColor = '#1a1a1a'; // 接近黑色的背景
                        this.body.style.padding = '0';
                        this.body.style.border = '2px solid #ffd700';
                        this.body.style.borderRadius = '10px';
                        this.body.style.boxShadow = '0 0 30px rgba(255, 215, 0, 0.3)';
                        this.body.style.width = '100%'; // 宽度设为100%
                        this.body.style.height = '75%'; // 高度设为75%
                        this.body.style.overflow = 'hidden';
                        this.body.style.textAlign = 'center';

                        return this;
                    },

                    hide: function() {
                        this.body.hide();
                        return this;
                    }
                };

                // 收集所有火影忍者角色
                var characters = [];                
                // 从各个势力包中收集角色
                var packs = [Mhuoyingrenzhes, Xhuoyingrenzhes, Zhuoyingrenzhes ];
                for (var p = 0; p < packs.length; p++) {
                    var pack = packs[p];
                    if (pack && pack.character) {
                        for (var charId in pack.character) {
                            if (pack.character.hasOwnProperty(charId)) {
                                characters.push(charId);
                            }
                        }
                    }
                }                    
                /*//以下写法也可以但可能会造成随机显示
                for (var i in lib.characterPack['huoyingrenzhe']) {
                    characters.push(i);
                }
                */
                if (characters.length == 0) {
                    alert('未找到角色数据');
                    return;
                }
                // 创建图鉴页面
                var galleryPage = new Page();
                galleryPage.body = ui.create.div('.hyrz-gallery-content');
                // 创建标题
                var title = ui.create.div('.hyrz-gallery-title', '火影忍者');
                // 创建关闭按钮
                var closeButton = ui.create.div('.hyrz-gallery-close-btn', '×');
                // 创建关闭函数
                function closeGallery() {
                    galleryPage.hide();
                    ui.system.style.display = '';
                    setTimeout(function() {
                        game.playhyrz('hyrz_close');
                        ui.click.configMenu();
                        ui.menuContainer.style.display = '';
                    }, 500);
                }
                closeButton.addEventListener('click', closeGallery);
                // 创建画廊容器 - 优化间距，使图片更大
                var galleryContainer = ui.create.div('');
                galleryContainer.style.cssText = `
                    display: flex;
                    align-items: center;
                    height: calc(100% - 40px); /* 减少标题区域的高度 */
                    position: relative;
                    overflow: hidden;
                    padding: 10px 30px; /* 上下边距相等，使图片上下对称 */
                    box-sizing: border-box;
                    margin-top: 10px; /* 减少上边距，使图片更大 */
                `;
                // 创建滑动容器
                var slider = ui.create.div('');
                slider.style.cssText = `
                    display: flex;
                    transition: transform 0.15s ease;
                    height: 100%;
                    align-items: center;
                    gap: 50px;
                    cursor: grab;
                `;
                // 计算卡片尺寸 - 优化尺寸计算，使图片更大
                var containerWidth = window.innerWidth - 50; // 减去左右各50px间距
                var containerHeight = window.innerHeight * 0.75 - 40; // 减去上下各30px间距和标题区域
                var cardHeight = containerHeight * 1.5; // 直接使用容器高度的1.5倍，使图片最大化
                var cardWidth = cardHeight * (3 / 4); // 3:4比例，宽度是高度的3/4
                // 计算最大可滑动距离 - 确保最后一张图片右端离背景右边缘5px
                var totalWidth = (cardWidth + 50) * characters.length - 50; // 所有卡片和间隙的总宽度
                var containerVisibleWidth = containerWidth - 100; // 容器可见宽度（减去左右各50px）
                var maxSlideDistance = Math.max(0, totalWidth - containerVisibleWidth + 5); // 确保最后一张图片右端离背景右边缘5px
                // 创建角色卡片
                for (var i = 0; i < characters.length; i++) {
                    var charId = characters[i];
                    var charCard = ui.create.div('');
                    charCard.style.cssText = `
                        flex-shrink: 0;
                        width: ${cardWidth}px;
                        height: ${cardHeight}px;
                        background: rgba(255, 255, 255, 0.05);
                        border: 2px solid rgba(255, 215, 0, 0.5);//描边
                        border-radius: 8px;
                        overflow: hidden;
                        position: relative;
                        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
                        margin: 0 auto; /* 居中 */
                    `;
                    // 创建角色图片
                    var charImg = document.createElement('img');
                    charImg.style.cssText = `
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        display: block;
                    `;
                    // 设置图片源
                    var imgSrc = lib.assetURL + 'extension/火影忍者/' + charId + '.jpg';
                    charImg.src = imgSrc;
                    charImg.onerror = function() {
                        console.log('图片加载失败:', this.src);
                        this.style.background = 'linear-gradient(135deg, #1a1a1a, #333)';
                        this.style.display = 'flex';
                        this.style.alignItems = 'center';
                        this.style.justifyContent = 'center';
                        this.style.color = '#fff';
                        this.style.fontSize = '18px';
                        this.style.textAlign = 'center';
                        this.innerHTML = '<div>暂无图片</div>';
                    };
                    // 创建角色名称 - 放在图片上偏下方，距离底部10px        
                    var charName = ui.create.div('.hyrz-character-name', get.translation(charId) || charId);
                    charCard.appendChild(charImg);
                    charCard.appendChild(charName);
                    slider.appendChild(charCard);
                }
                // 当前滑动距离
                var currentSlideDistance = 0;
                // 更新显示
                function updateDisplay() {
                    slider.style.transform = 'translateX(-' + currentSlideDistance + 'px)';
                }
                // 触摸滑动支持
                var startX = 0;
                var currentX = 0;
                var isDragging = false;
                slider.addEventListener('touchstart', function(e) {
                    startX = e.touches[0].clientX;
                    isDragging = true;
                    slider.style.cursor = 'grabbing';
                    slider.style.transition = 'none'; // 拖动时禁用过渡效果
                });
                slider.addEventListener('touchmove', function(e) {
                    if (!isDragging) return;
                    currentX = e.touches[0].clientX;
                    var diff = (startX - currentX) * 2.5; // 提高灵敏度系数
                    var newDistance = currentSlideDistance + diff;
                    // 限制滑动范围
                    if (newDistance < 0) newDistance = 0;
                    if (newDistance > maxSlideDistance) newDistance = maxSlideDistance;
                    currentSlideDistance = newDistance;
                    updateDisplay();
                    startX = currentX;
                });
                slider.addEventListener('touchend', function() {
                    isDragging = false;
                    slider.style.cursor = 'grab';
                    slider.style.transition = 'transform 0.15s ease'; // 恢复过渡效果
                });
                // 鼠标拖动支持
                slider.addEventListener('mousedown', function(e) {
                    startX = e.clientX;
                    isDragging = true;
                    slider.style.cursor = 'grabbing';
                    slider.style.transition = 'none'; // 拖动时禁用过渡效果
                    e.preventDefault();
                });
                document.addEventListener('mousemove', function(e) {
                    if (!isDragging) return;
                    currentX = e.clientX;
                    var diff = (startX - currentX) * 2.5; // 提高灵敏度系数
                    var newDistance = currentSlideDistance + diff;
                    // 限制滑动范围
                    if (newDistance < 0) newDistance = 0;
                    if (newDistance > maxSlideDistance) newDistance = maxSlideDistance;
                    currentSlideDistance = newDistance;
                    updateDisplay();
                    startX = currentX;
                });
                document.addEventListener('mouseup', function() {
                    isDragging = false;
                    slider.style.cursor = 'grab';
                    slider.style.transition = 'transform 0.15s ease'; // 恢复过渡效果
                });
                // 组装组件
                galleryContainer.appendChild(slider);
                // 将标题添加到galleryPage.body，使其在图鉴背景内
                galleryPage.body.appendChild(title);
                galleryPage.body.appendChild(closeButton);
                galleryPage.body.appendChild(galleryContainer);
                // 显示页面
                lib.setScroll(galleryPage.body);
                galleryPage.show();
                // 初始更新
                setTimeout(function() {
                    updateDisplay();
                }, 100);
                return galleryPage;
            };

            // ---------------------------------------lunmu------------------------------------------//
            lib.skill._huoying_lunmu = {
                trigger: {
                    player: ['dyingAfter'],
                },
                forced: true,
                unique: true,
                locked: true,
                //round:1,
                charlotte: true,
                priority: 2025,
                filter: function (event, player) {
                    return game.hasPlayer(function (current) {
                        return current.hasSkill('huoying_lunmu');
                    });
                },
                content: function () {
                    if (player.name == 'huoying_ban') {
                        var AnimationClick = function () {
                            if (player.countCards('h') < player.hp) {
                                var card = get.cards(0);
                                card.position = 'h';
                                var evt = _status.event.getParent('chooseToUse'), ok = false;
                                if (_status.event.isMine() && _status.event.name == 'chooseToUse' && _status.event.parent.name == 'phaseUse' && !_status.event.skill) evt = _status.event;
                                if (evt && evt.filterCard && evt.filterCard(card, player)) ok = true;
                                if (!lib.filter.cardAiIncluded(card)) {
                                    ok = false;
                                } else if (player.isOut() || !lib.filter.cardRespondable(card, player) ||
                                    card.classList.contains('uncheck') || !(evt && evt.filterCard && evt.filterCard(card, player))) ok = false;

                                if (ok) if (_status.event._cardChoice) _status.event._cardChoice.push(card);
                                player.node.handcards1.appendChild(card);
                                game.playhyrz(['huoying_lunmu1', 'huoying_lunmu2'].randomGet());
                                ui.updatehl();
                                player.update();
                                if (player == game.me) ui.updatehl();
                            };
                        };
                        if (event.isMine()) {
                            game.broadcastAll(function (player) {
                                var Animation = ui.create.div();
                                Animation.setBackgroundImage('extension/火影忍者/huoying_liudaoban.jpg');
                                Animation.style.left = '70%';
                                Animation.style.top = 'calc(64% - 90px)';
                                Animation.style.width = '80px';//120
                                Animation.style.height = '80px';//150            
                                Animation.style.backgroundSize = 'cover';
                                Animation.style['z-index'] = '2025';
                                ui.window.appendChild(Animation);
                                ui.refresh(Animation);
                                Animation.onclick = AnimationClick;
                            }, player);
                        } else {
                            player.node.handcards1.addEventListener('DOMSubtreeModified', function () {
                                if (player.countCards('h') < player.hp)
                                    setTimeout(function () {
                                        AnimationClick();
                                    }, Math.floor(Math.random() * 3000));
                            }, true);
                            player.node.handcards2.addEventListener('DOMSubtreeModified', function () {
                                if (player.countCards('h') < player.hp)
                                    setTimeout(function () {
                                        AnimationClick();
                                    }, Math.floor(Math.random() * 3000));
                            }, true);
                        }
                    }
                },
            }
            // ---------------------------------------Audio------------------------------------------//
            game.playhyrz = function (fn, dir, sex) {
                if (dir && sex) {
                    game.playAudio(dir, sex, fn);
                }
                else if (dir) {
                    game.playAudio(dir, fn);
                }
                else {
                    game.playAudio('..', 'extension', '火影忍者', fn);
                }
            }

            lib.skill._hyrz_zhwpy = {
                trigger: { player: 'dieBegin' },
                forced: true,
                content: function () {
                    if (get.mode() == "guozhan") {
                        game.playAudio('..', 'extension', '火影忍者', player.name1);
                    }
                    else game.playAudio('..', 'extension', '火影忍者', player.name);
                    setTimeout(function () {
                        game.playAudio('..', 'extension', '火影忍者', player.name2);
                    }, 3600)
                },
            }
            // ---------------------------------------New function------------------------------------------//	
            lib.element.player.replaceFujiang = function (name2) {
                var hp = this.hp;
                var maxhp = this.maxHp;
                this.clearSkills();
                this.init(this.name1, name2);
                this.classList.remove('unseen2');
                this.hp = hp;
                this.maxHp = maxhp;
                this.update();
            }
            lib.element.player.addFujiang = function (name2) {
                var hp = this.hp;
                var maxhp = this.maxHp;
                var name = this.name;
                this.uninit();
                this.init(name, name2);
                this.classList.remove('unseen2');
                this.hp = hp;
                this.maxHp = maxhp;
                this.update();
            }
            // ---------------------------------------open boss------------------------------------------//				 
            //待定功能:
            if (config.hyrz_normalize) {
                lib.arenaReady.push(function () {
                    for (var i in lib.characterPack['huoyingrenzhe']) {
                        if (lib.character[i][4].indexOf("boss") >= 0) lib.character[i][4].splice(0, 1);
                    }
                });
            }

            // ---------------------------------------Naruto Story------------------------------------------//			
            if (lib.config.mode == "brawl") {
                if (!lib.storage.stage) lib.storage.stage = {};
                if (!lib.storage.stage["火影剧情"]) {
                    lib.storage.stage["火影剧情"] = {
                        name: "火影剧情",
                        intro: "再现《火影忍者》经典战役，本乱斗模式的玩家以原战斗剧情的胜利者为主",
                        scenes: [{ "name": "求生演习", "intro": "卡卡西vs鸣人&&佐助&&小樱", "players": [{ "name": "huoying_kakasi", "name2": "none", "identity": "zhu", "position": 1, "hp": 7, "maxHp": 7, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [["hyrz_xuelunyang", "random", "random"], ["hyrz_mianju", "random", "random"]], "judges": [] }, { "name": "huoying_zhuozhu", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_mingren", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_xiaoying", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }, { "name": "鸣人大桥保卫战", "intro": "卡卡西班vs再不斩&&白", "players": [{ "name": "huoying_kakasi", "name2": "none", "identity": "zhu", "position": 1, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_mingren", "name2": "none", "identity": "zhong", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_zhuozhu", "name2": "none", "identity": "zhong", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_bai", "name2": "none", "identity": "fan", "position": 0, "hp": 5, "maxHp": 5, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_zaibuzhan", "name2": "none", "identity": "fan", "position": 0, "hp": 6, "maxHp": 6, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }, { "name": "中忍考试①", "intro": "春野樱vs山中井野", "players": [{ "name": "huoying_xiaoying", "name2": "none", "identity": "zhu", "position": 1, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_jinye", "name2": "none", "identity": "fan", "position": 0, "hp": 4, "maxHp": 4, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }, { "name": "中忍考试②", "intro": "手鞠vs天天", "players": [{ "name": "huoying_shouju", "name2": "none", "identity": "zhu", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_tiantian", "name2": "none", "identity": "fan", "position": 0, "hp": 4, "maxHp": 4, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }, { "name": "中忍考试③", "intro": "鸣人vs犬冢牙", "players": [{ "name": "huoying_mingren", "name2": "none", "identity": "zhu", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_quanzhongya", "name2": "none", "identity": "fan", "position": 0, "hp": 5, "maxHp": 5, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }, { "name": "中忍考试④", "intro": "宁次vs雏田", "players": [{ "name": "huoying_ningchi", "name2": "none", "identity": "zhu", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_chutian", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }, { "name": "中忍考试⑤", "intro": "我爱罗vs李洛克", "players": [{ "name": "huoying_woailuo", "name2": "none", "identity": "zhu", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_liluoke", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }, { "name": "中忍考试第三场①", "intro": "鸣人vs宁次", "players": [{ "name": "huoying_mingren", "name2": "none", "identity": "zhu", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_ningchi", "name2": "none", "identity": "fan", "position": 0, "hp": 4, "maxHp": 4, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }, { "name": "中忍考试第三场② ", "intro": "佐助vs我爱罗", "players": [{ "name": "huoying_zhuozhu", "name2": "none", "identity": "zhu", "position": 1, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_woailuo", "name2": "none", "identity": "fan", "position": 0, "hp": 4, "maxHp": 4, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }, { "name": "中忍考试第三场③", "intro": "油女志乃vs勘九郞", "players": [{ "name": "huoying_zhinai", "name2": "none", "identity": "zhu", "position": 1, "hp": 4, "maxHp": 4, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_kanjiulang", "name2": "none", "identity": "fan", "position": 0, "hp": 4, "maxHp": 4, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }, { "name": "中忍考试第三场④", "intro": "鹿丸vs手鞠", "players": [{ "name": "huoying_luwan", "name2": "none", "identity": "zhu", "position": 1, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_shouju", "name2": "none", "identity": "fan", "position": 0, "hp": 4, "maxHp": 4, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }, { "name": "木叶遇袭", "intro": "", "players": [{ "name": "huoying_kakasi", "name2": "none", "identity": "zhong", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_dashewan", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_yuanfeirizhan", "name2": "none", "identity": "zhu", "position": 1, "hp": 4, "maxHp": 4, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_dou", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }, { "name": "鼬神返乡", "intro": "", "players": [{ "name": "huoying_kakasi", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_asima", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_kai", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_itachi", "name2": "none", "identity": "zhu", "position": 1, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_guijiao", "name2": "none", "identity": "zhong", "position": 0, "hp": 4, "maxHp": 4, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }, { "name": "佐鼬相遇", "intro": "", "players": [{ "name": "huoying_itachi", "name2": "none", "identity": "zhu", "position": 1, "hp": 5, "maxHp": 5, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_guijiao", "name2": "none", "identity": "zhong", "position": 0, "hp": 5, "maxHp": 5, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_mingren", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_zhuozhu", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_zhilaiye", "name2": "none", "identity": "fan", "position": 0, "hp": 4, "maxHp": 4, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }, { "name": "夺回佐助", "intro": "", "players": [{ "name": "huoying_dingchi", "name2": "none", "identity": "zhu", "position": 1, "hp": 4, "maxHp": 4, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_chilangfang", "name2": "none", "identity": "fan", "position": 2, "hp": 4, "maxHp": 4, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_ningchi", "name2": "none", "identity": "zhong", "position": 3, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_guitongwan", "name2": "none", "identity": "fan", "position": 4, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_quanzhongya", "name2": "none", "identity": "zhong", "position": 5, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_zuojinyoujin", "name2": "none", "identity": "fan", "position": 6, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_luwan", "name2": "none", "identity": "zhong", "position": 7, "hp": 4, "maxHp": 4, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_tayuya", "name2": "none", "identity": "fan", "position": 8, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }, { "name": "君麻吕之死", "intro": "", "players": [{ "name": "huoying_woailuo", "name2": "none", "identity": "zhu", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_liluoke", "name2": "none", "identity": "zhong", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_junmalv", "name2": "none", "identity": "fan", "position": 1, "hp": 5, "maxHp": 5, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }, { "name": "佐鸣一战", "intro": "", "players": [{ "name": "huoying_zhuozhu", "name2": "none", "identity": "zhu", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_mingren", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }, { "name": "强虏我爱罗", "intro": "", "players": [{ "name": "huoying_didala", "name2": "none", "identity": "zhu", "position": 1, "hp": 4, "maxHp": 4, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_woailuo", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }, { "name": "赤砂之蝎", "intro": "", "players": [{ "name": "huoying_xiaoying", "name2": "none", "identity": "zhu", "position": 1, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_xiezi", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }, { "name": "卡卡西开眼", "intro": "", "players": [{ "name": "huoying_kakasi", "name2": "none", "identity": "zhu", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_mingren", "name2": "none", "identity": "zhong", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_didala", "name2": "none", "identity": "fan", "position": 1, "hp": 8, "maxHp": 8, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }, { "name": "阿斯玛之死", "intro": "", "players": [{ "name": "huoying_feiduan", "name2": "none", "identity": "zhu", "position": 1, "hp": 4, "maxHp": 4, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_jiaodu", "name2": "none", "identity": "zhong", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_asima", "name2": "none", "identity": "fan", "position": 0, "hp": 4, "maxHp": 4, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_luwan", "name2": "none", "identity": "fan", "position": 0, "hp": 4, "maxHp": 4, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }, { "name": "潜入基地", "intro": "大和班潜入大蛇丸的基地", "players": [{ "name": "huoying_dahe", "name2": "none", "identity": "zhu", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_zuojin", "name2": "none", "identity": "zhong", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_xiaoying", "name2": "none", "identity": "zhong", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_mingren", "name2": "none", "identity": "zhong", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_dou", "name2": "none", "identity": "fan", "position": 0, "hp": 4, "maxHp": 5, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_dashewan", "name2": "none", "identity": "fan", "position": 0, "hp": 5, "maxHp": 5, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_zhuozhu", "name2": "none", "identity": "fan", "position": 0, "hp": 4, "maxHp": 4, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }, { "name": "鸣人暴走", "intro": "", "players": [{ "name": "huoying_dashewan", "name2": "none", "identity": "zhu", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_mingren", "name2": "none", "identity": "fan", "position": 0, "hp": 5, "maxHp": 5, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }, { "name": "鹿丸报师仇", "intro": "", "players": [{ "name": "huoying_luwan", "name2": "none", "identity": "zhu", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_kakasi", "name2": "none", "identity": "zhong", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_dingchi", "name2": "none", "identity": "zhong", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_mingren", "name2": "none", "identity": "zhong", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_feiduan", "name2": "none", "identity": "fan", "position": 0, "hp": 6, "maxHp": 6, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_jiaodu", "name2": "none", "identity": "fan", "position": 0, "hp": 6, "maxHp": 6, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }, { "name": "佐助vs大蛇丸", "intro": "", "players": [{ "name": "huoying_zhuozhu", "name2": "none", "identity": "zhu", "position": 1, "hp": 5, "maxHp": 5, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_dashewan", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }, { "name": "佐助vs迪达拉", "intro": "", "players": [{ "name": "huoying_zhuozhu", "name2": "none", "identity": "zhu", "position": 1, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_didala", "name2": "none", "identity": "fan", "position": 0, "hp": 4, "maxHp": 4, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }, { "name": "潜入雨忍村", "intro": "", "players": [{ "name": "huoying_zhilaiye", "name2": "none", "identity": "zhu", "position": 1, "hp": 5, "maxHp": 5, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_changmen", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_xiaonan", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }, { "name": "佐鼬决战", "intro": "", "players": [{ "name": "huoying_zhuozhu", "name2": "none", "identity": "zhu", "position": 1, "hp": 4, "maxHp": 4, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_itachi", "name2": "none", "identity": "fan", "position": 0, "hp": 4, "maxHp": 4, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }, { "name": "强虏八尾", "intro": "", "players": [{ "name": "huoying_zhuozhu", "name2": "none", "identity": "zhu", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_shuiyue", "name2": "none", "identity": "zhong", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_zhongwu", "name2": "none", "identity": "zhong", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_qilabi", "name2": "none", "identity": "fan", "position": 0, "hp": 8, "maxHp": 8, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }, { "name": "佩恩入侵", "intro": "", "players": [{ "name": "huoying_mingren", "name2": "none", "identity": "zhu", "position": 1, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_changmen", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_xiaonan", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }, { "name": "大闹五影会议①", "intro": "", "players": [{ "name": "huoying_zhuozhu", "name2": "none", "identity": "zhu", "position": 1, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_zhongwu", "name2": "none", "identity": "zhong", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_shuiyue", "name2": "none", "identity": "zhong", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_xianglin", "name2": "none", "identity": "zhong", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_daluyi", "name2": "none", "identity": "fan", "position": 0, "hp": 4, "maxHp": 4, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_leiying", "name2": "none", "identity": "fan", "position": 0, "hp": 4, "maxHp": 4, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_woailuo", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_kanjiulang", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }, { "name": "大闹五影会议②", "intro": "", "players": [{ "name": "huoying_zhuozhu", "name2": "none", "identity": "zhu", "position": 0, "hp": 4, "maxHp": 4, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_dayemu", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_zhaomeimeng", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_daitu", "name2": "none", "identity": "zhong", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }, { "name": "伊邪那歧", "intro": "", "players": [{ "name": "huoying_zhuozhu", "name2": "huoying_xianglin", "identity": "zhu", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_tuanzang", "name2": "none", "identity": "fan", "position": 0, "hp": 5, "maxHp": 6, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [["hyrz_xuelunyang", "random", "random"]], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }, { "name": "四代死战", "intro": "", "players": [{ "name": "huoying_shuimen", "name2": "none", "identity": "zhu", "position": 1, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_jiuxinnai", "name2": "none", "identity": "zhong", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_daitu", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [["hyrz_jiuwei", "random", "random"]], "judges": [] }, { "name": "huoying_jue", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 4, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }, { "name": "奇拉比vs鬼鲛", "intro": "", "players": [{ "name": "huoying_qilabi", "name2": "none", "identity": "zhu", "position": 1, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_guijiao", "name2": "none", "identity": "fan", "position": 0, "hp": 4, "maxHp": 4, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }, { "name": "珍兽vs怪兽", "intro": "", "players": [{ "name": "huoying_kai", "name2": "none", "identity": "zhu", "position": 0, "hp": 4, "maxHp": 4, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_guijiao", "name2": "none", "identity": "fan", "position": 0, "hp": 4, "maxHp": 4, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }, { "name": "抢夺轮回眼", "intro": "", "players": [{ "name": "huoying_daitu", "name2": "none", "identity": "zhu", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_xiaonan", "name2": "none", "identity": "fan", "position": 0, "hp": 4, "maxHp": 4, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [["hyrz_xuelunyang", "random", "random"]], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }, { "name": "大和失踪", "intro": "", "players": [{ "name": "huoying_dou", "name2": "none", "identity": "zhu", "position": 0, "hp": 4, "maxHp": 4, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_didala", "name2": "none", "identity": "zhong", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_dayemu", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_dahe", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }, { "name": "别天神", "intro": "", "players": [{ "name": "huoying_mingren", "name2": "none", "identity": "zhu", "position": 1, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_qilabi", "name2": "none", "identity": "zhong", "position": 0, "hp": 4, "maxHp": 4, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_itachi", "name2": "none", "identity": "fan", "position": 0, "hp": 4, "maxHp": 4, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [["hyrz_xuelunyang", "random", "random"]], "judges": [] }, { "name": "huoying_changmen", "name2": "none", "identity": "fan", "position": 0, "hp": 4, "maxHp": 4, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }, { "name": "蒸危爆威", "intro": "", "players": [{ "name": "huoying_woailuo", "name2": "none", "identity": "zhu", "position": 1, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_huanyue", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }, { "name": "三代雷影", "intro": "", "players": [{ "name": "huoying_mingren", "name2": "none", "identity": "zhu", "position": 1, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_sanlei", "name2": "none", "identity": "fan", "position": 0, "hp": 6, "maxHp": 6, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }, { "name": "忍界大战①", "intro": "", "players": [{ "name": "huoying_dingchi", "name2": "none", "identity": "zhong", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_luwan", "name2": "none", "identity": "zhong", "position": 0, "hp": 4, "maxHp": 4, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_asima", "name2": "none", "identity": "fan", "position": 0, "hp": 4, "maxHp": 4, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_xiezi", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_duan", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_jiaodu", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_daluyi", "name2": "none", "identity": "zhu", "position": 0, "hp": 4, "maxHp": 4, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_jinye", "name2": "none", "identity": "zhong", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }, { "name": "忍界大战②", "intro": "", "players": [{ "name": "huoying_zuojin", "name2": "none", "identity": "zhu", "position": 0, "hp": 4, "maxHp": 4, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_tiantian", "name2": "none", "identity": "zhong", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_ningchi", "name2": "none", "identity": "zhong", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_liluoke", "name2": "none", "identity": "zhong", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_bai", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_zaibuzhan", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_jue", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_didala", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }, { "name": "忍界大战③", "intro": "", "players": [{ "name": "huoying_chutian", "name2": "none", "identity": "zhu", "position": 0, "hp": 4, "maxHp": 4, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_xiaoying", "name2": "none", "identity": "zhong", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_quanzhongya", "name2": "none", "identity": "zhong", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_zhinai", "name2": "none", "identity": "zhong", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_jue", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_jue", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_jue", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_jue", "name2": "none", "identity": "fan", "position": 0, "hp": 4, "maxHp": 4, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }, { "name": "五影联合", "intro": "", "players": [{ "name": "huoying_ban", "name2": "none", "identity": "zhu", "position": 1, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_dou", "name2": "none", "identity": "zhong", "position": 0, "hp": 5, "maxHp": 5, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_wuren", "name2": "none", "identity": "zhong", "position": 0, "hp": 5, "maxHp": 5, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_dayemu", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_leiying", "name2": "none", "identity": "fan", "position": 0, "hp": 4, "maxHp": 4, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_woailuo", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_zhaomeimeng", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }, { "name": "伊邪那美", "intro": "", "players": [{ "name": "huoying_itachi", "name2": "none", "identity": "zhu", "position": 1, "hp": 7, "maxHp": 7, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [["hyrz_xuelunyang", "random", "random"]], "judges": [] }, { "name": "huoying_zhuozhu", "name2": "none", "identity": "zhong", "position": 0, "hp": 7, "maxHp": 7, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [["hyrz_xuelunyang", "random", "random"]], "judges": [] }, { "name": "huoying_dou", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_chilangfang", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_guitongwan", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_tayuya", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_zuojinyoujin", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }, { "name": "前代火影", "intro": "", "players": [{ "name": "huoying_zhuozhu", "name2": "none", "identity": "zhu", "position": 0, "hp": 4, "maxHp": 4, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_dashewan", "name2": "none", "identity": "zhong", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_zhongwu", "name2": "none", "identity": "zhong", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_feijian", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_shuimen", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_xianglin", "name2": "huoying_shuiyue", "identity": "zhong", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_zhujian", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_yuanfeirizhan", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }, { "name": "柱间vs斑", "intro": "", "players": [{ "name": "huoying_zhujian", "name2": "none", "identity": "zhu", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_ban", "name2": "none", "identity": "fan", "position": 0, "hp": 4, "maxHp": 4, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_jue", "name2": "none", "identity": "fan", "position": 0, "hp": 5, "maxHp": 5, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }, { "name": "卡卡西vs带土", "intro": "", "players": [{ "name": "huoying_kakasi", "name2": "none", "identity": "zhu", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_daitu", "name2": "none", "identity": "fan", "position": 0, "hp": 4, "maxHp": 4, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }, { "name": "忍者联军", "intro": "", "players": [{ "name": "huoying_ban", "name2": "none", "identity": "zhu", "position": 1, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_jue", "name2": "none", "identity": "zhong", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_daitu", "name2": "none", "identity": "zhong", "position": 0, "hp": 4, "maxHp": 4, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_daluyi", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_kakasi", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_shouju", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_kanjiulang", "name2": "none", "identity": "fan", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }, { "name": "八门遁甲", "intro": "", "players": [{ "name": "huoying_ban", "name2": "none", "identity": "zhu", "position": 1, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_daitu", "name2": "none", "identity": "zhong", "position": 0, "hp": 4, "maxHp": 4, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_jue", "name2": "none", "identity": "zhong", "position": 0, "hp": 4, "maxHp": 4, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_liluoke", "name2": "none", "identity": "fan", "position": 0, "hp": 4, "maxHp": 4, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_kai", "name2": "none", "identity": "fan", "position": 0, "hp": 5, "maxHp": 5, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_kakasi", "name2": "none", "identity": "fan", "position": 0, "hp": 4, "maxHp": 4, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }, { "name": "大筒木辉夜", "intro": "", "players": [{ "name": "huoying_mingren", "name2": "none", "identity": "zhong", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_xiaoying", "name2": "none", "identity": "zhong", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_zhuozhu", "name2": "none", "identity": "zhong", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_huiye", "name2": "none", "identity": "fan", "position": 0, "hp": 7, "maxHp": 7, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [["hyrz_xuelunyang", "random", "random"]], "judges": [] }, { "name": "huoying_jue", "name2": "none", "identity": "fan", "position": 0, "hp": 6, "maxHp": 6, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_kakasi", "name2": "none", "identity": "zhu", "position": 1, "hp": 4, "maxHp": 4, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }, { "name": "终结谷终战", "intro": "", "players": [{ "name": "huoying_mingren", "name2": "none", "identity": "zhu", "position": 0, "hp": 3, "maxHp": 3, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] }, { "name": "huoying_zhuozhu", "name2": "none", "identity": "fan", "position": 0, "hp": 5, "maxHp": 5, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }], "cardPileTop": [], "cardPileBottom": [], "discardPile": [], "gameDraw": true }],
                        mode: "normal",
                        level: 0,
                    };
                    _status.extensionstage = true;
                }
                if (!_status.extensionmade) _status.extensionmade = [];
                _status.extensionmade.push("火影剧情");
            }
            // ---------------------------------------wujiangpingji------------------------------------------//   
            //普通
            lib.rank.rarity.junk.addArray(['huoying_gangshou', 'huoying_zhilaiye', 'huoying_changmen', 'huoying_ningchi',
                'huoying_kai', 'huoying_sanlei', 'huoying_chutian', 'huoying_liluoke', 'huoying_xiaoying', 'huoying_dingchi',
                'huoying_zhuozhu', 'huoying_asima', 'huoying_zuojin', 'huoying_feijian', 'huoying_woailuo', 'huoying_zhongwu',
                'huoying_quanzhongya', 'huoying_daluyi', 'huoying_shouju', 'huoying_ban']);
            //史诗
            lib.rank.rarity.rare.addArray(['huoying_kakasi', 'huoying_mingren', 'huoying_shuimen', 'huoying_luwan',
                'huoying_jinye', 'huoying_tuanzang', 'huoying_yuanfeirizhan', 'huoying_tiantian', 'huoying_zhinai',
                'huoying_daitu', 'huoying_jiuxinnai', 'huoying_guijiao', 'huoying_jiaodu', 'huoying_xiezi', 'huoying_jue',
                'huoying_huiye', 'huoying_didala', 'huoying_xiaonan', 'huoying_xianglin', 'huoying_guitongwan',
                'huoying_chilangfang', 'huoying_zuojinyoujin', 'huoying_junmalv', 'huoying_zhongren', 'huoying_bai',
                'huoying_yeyuanlin', 'huoying_shuiyue']);
            //传说
            lib.rank.rarity.epic.addArray(['huoying_zhujian', 'huoying_duan', 'huoying_itachi', 'huoying_wuren',
                'huoying_qilabi', 'huoying_feiduan', 'huoying_dahe', 'huoying_zaibuzhan', 'huoying_zhaomeimeng',
                'huoying_huanyue', 'huoying_leiying', 'huoying_kanjiulang']);
            //神话
            lib.rank.rarity.legend.addArray(['huoying_dashewan', 'huoying_dayemu', 'huoying_zhishui', 'huoying_dou', 'huoying_tayuya',
                'huoying_liudaoxianren']);

            // ---------------------------------------wujianglang------------------------------------------//		

            if (config.huoyingrenzhe) {
                for (var i in lib.characterPack['huoyingrenzhe']) {
                    if (lib.character[i][4].indexOf("forbidai") < 0) lib.character[i][4].push("forbidai");
                };
            };

        }, precontent: function (hyrz) {
            lib.init.css(lib.assetURL + 'extension/火影忍者', 'extension'); 
            
            lib.extensionMenu.extension_火影忍者.hyrz_paiduikoujue = {
                name: '<div class="hyrz_menu">牌堆口诀<font size="3px">⇨</font></div>',
                clear: true,
                onclick: function () {
                    if (this.hyrz_paiduikoujue == undefined) {
                        game.playhyrz('hyrz_danchuang');
                        var more = ui.create.div('.hyrz_paiduikoujue', '<li> 二一普黑九雷杀<li>九张普红五火杀<li>五酒不欢三国杀<li>二十四闪十二桃<li>两兵三乐四无中<li>五顺六拆七无懈<li>三南一箭一桃园<li>三斗两刀两谷电<li>三道火攻六连环<li>算尽牌堆定乾坤');
                        this.parentNode.insertBefore(more, this.nextSibling);
                        this.hyrz_paiduikoujue = more;
                        this.innerHTML = '<div class="hyrz_menu">牌堆口诀<font size="3px">⇩</font></div>';
                    } else {
                        game.playhyrz('hyrz_close');
                        this.parentNode.removeChild(this.hyrz_paiduikoujue);
                        delete this.hyrz_paiduikoujue;
                        this.innerHTML = '<div class="hyrz_menu">牌堆口诀<font size="3px">⇨</font></div>';
                    }
                },
            };
            delete lib.extensionMenu.extension_火影忍者.delete;
            lib.extensionMenu['extension_' + '火影忍者'].delete = { name: '删除此扩展', clear: true, };

            if (hyrz.enable) {
                game.import('character', function () {
                    var huoyingrenzhe = {
                        name: 'huoyingrenzhe',
                        connect: true,
                        characterSort: {
                            huoyingrenzhe: {
                                "huoying_muye": ["huoying_zhujian", "huoying_gangshou", "huoying_zhilaiye", "huoying_zhishui",
                                    "huoying_ningchi", "huoying_kai", "huoying_kakasi", "huoying_chutian", "huoying_mingren", "huoying_shuimen",
                                    "huoying_duan", "huoying_liluoke", "huoying_luwan", "huoying_xiaoying", "huoying_dingchi", "huoying_jinye",
                                    "huoying_tuanzang", "huoying_yuanfeirizhan", "huoying_dahe", "huoying_asima", "huoying_feijian",
                                    "huoying_zuojin", "huoying_tiantian", "huoying_quanzhongya", "huoying_zhinai", "huoying_jiuxinnai",
                                    "huoying_yeyuanlin"
                                ],
                                "huoying_xiao": ["huoying_shuiyue", "huoying_itachi", "huoying_feiduan", "huoying_ban", "huoying_daitu",
                                    "huoying_zhuozhu", "huoying_changmen", "huoying_guijiao", "huoying_xiezi", "huoying_jiaodu", "huoying_jue",
                                    "huoying_huiye", "huoying_didala", "huoying_xiaonan", "huoying_zhongwu", "huoying_xianglin"
                                ],
                                "huoying_zhongren": ["huoying_guitongwan", "huoying_chilangfang", "huoying_zuojinyoujin", "huoying_tayuya",
                                    "huoying_bai", "huoying_dashewan", "huoying_dayemu", "huoying_dou", "huoying_woailuo", "huoying_wuren",
                                    "huoying_sanlei", "huoying_zaibuzhan", "huoying_daluyi", "huoying_huanyue", "huoying_junmalv", "huoying_qilabi",
                                    "huoying_leiying", "huoying_zhaomeimeng", "huoying_shouju", "huoying_kanjiulang"
                                ],
                                "huoying_liudaoxianren": ["huoying_liudaoxianren"],

                            },
                        },
                        character: {
                            "huoying_shuiyue": ["male", "hyrz_xiao", 3, ["huoying_xundao", "huoying_daoji", "huoying_yehua"], []],
                            "huoying_itachi": ["male", "hyrz_xiao", 3, ["huoying_yuedu", "huoying_tianzhao", "huoying_xuzuo"], []],
                            "huoying_zhujian": ["male", "hyrz_huo", 3, ["huoying_mudun", "huoying_qianshou", "huoying_xianti"], []],
                            "huoying_gangshou": ["female", "hyrz_huo", 4, ["huoying_guaili", "huoying_baihao"], []],
                            "huoying_dashewan": ["male", "hyrz_ren", 3, ["huoying_yongsheng", "huoying_zhaohuan"], []],
                            "huoying_zhilaiye": ["male", "hyrz_huo", 4, ["huoying_citan", "huoying_renfa", "huoying_xianren"], []],
                            "huoying_zhishui": ["male", "hyrz_huo", 4, ["huoying_shunsheng", "huoying_reshouhu"], ["forbidai"]],
                            "huoying_ningchi": ["male", "hyrz_huo", 3, ["huoying_xinbaiyan", "huoying_guazhang", "huoying_huitian"], []],
                            "huoying_feiduan": ["male", "hyrz_xiao", 3, ["huoying_rebusi", "huoying_zhoushu"], []],
                            "huoying_ban": ["male", "hyrz_xiao", 2, ["huoying_zhenxing", "huoying_xinxuzuo", "huoying_yiyuan"], []],
                            "huoying_dayemu": ["male", "hyrz_ren", 3, ["huoying_chendun", "huoying_tiancheng", "huoying_feixian"], []],
                            "huoying_kai": ["male", "hyrz_huo", 5, ["huoying_bamen", "huoying_resizhan"], []],
                            "huoying_dou": ["male", "hyrz_ren", 3, ["huoying_yizhi", "huoying_xinyiliao", "huoying_zhuansheng"], []],
                            "huoying_kakasi": ["male", "hyrz_huo", 3, ["huoying_leique", "huoying_fuzhi", "huoying_kkxkaiyan"], []],
                            "huoying_chutian": ["female", "hyrz_huo", 3, ["huoying_baiyan", "huoying_rouquan"], []],
                            "huoying_daitu": ["male", "hyrz_xiao", 3, ["huoying_xuhua", "huoying_shenwei", "huoying_xianyan"], []],
                            "huoying_zhuozhu": ["male", "hyrz_xiao", 3, ["huoying_yandun", "huoying_qianniao", "huoying_rexuzuo"], []],
                            "huoying_woailuo": ["male", "hyrz_ren", 3, ["huoying_shazang", "huoying_juefang", "huoying_jiamei"], []],
                            "huoying_mingren": ["male", "hyrz_huo", 3, ["huoying_fenshen", "huoying_xianshu"], []],
                            "huoying_shuimen": ["male", "hyrz_huo", 3, ["huoying_luoxuan", "huoying_shanguang", "huoying_fengyin"], []],
                            "huoying_changmen": ["male", "hyrz_xiao", 3, ["huoying_tianzheng", "huoying_tianyin", "huoying_baoxing", "huoying_lunhui"], []],
                            "huoying_wuren": ["male", "hyrz_ren", 3, ["huoying_rechendun", "huoying_xfenlie", "huoying_wuchen"], []],
                            "huoying_duan": ["male", "hyrz_huo", 3, ["huoying_linghua", "huoying_aiyuan"], ["forbidai"]],
                            "huoying_guijiao": ["male", "hyrz_xiao", 3, ["huoying_jiaoji", "huoying_jiaodan", "huoying_shuilao"], []],
                            "huoying_liluoke": ["male", "hyrz_huo", 3, ["huoying_lianhua", "huoying_xuanfeng"], []],
                            "huoying_sanlei": ["male", "hyrz_ren", 1, ["huoying_tuci", "huoying_leidun"], []],
                            "huoying_luwan": ["male", "hyrz_huo", 3, ["huoying_zhimou", "huoying_yingfu"], []],
                            "huoying_xiezi": ["male", "hyrz_xiao", 3, ["huoying_baiji", "huoying_shayu", "huoying_kuilei"], []],
                            "huoying_xiaoying": ["female", "hyrz_huo", 3, ["huoying_baoli", "huoying_yiliao"], []],
                            "huoying_zaibuzhan": ["male", "hyrz_ren", 3, ["huoying_ansha", "huoying_reshuilao", "huoying_wuyin"], []],
                            "huoying_dingchi": ["male", "hyrz_huo", 3, ["huoying_beihua", "huoying_huadie"], []],
                            "huoying_jinye": ["female", "hyrz_huo", 3, ["huoying_zhuanxin", "huoying_reyiliao"], []],
                            "huoying_jiaodu": ["male", "hyrz_xiao", 3, ["huoying_yuanyu", "huoying_zhongquan"], []],
                            "huoying_kanjiulang": ["male", "hyrz_ren", 3, ["huoying_newkuilei", "huoying_chengyi"], []],
                            "huoying_tuanzang": ["male", "hyrz_huo", 3, ["huoying_huomeng", "huoying_duoyang", "huoying_kongbo", "huoying_sixiang"], []],
                            "huoying_jue": ["male", "hyrz_xiao", 3, ["huoying_baozi", "huoying_fuyou", "huoying_yinmou"], []],
                            "huoying_huiye": ["female", "hyrz_xiao", 3, ["huoying_tianyu", "huoying_huigu", "huoying_juneng"], []],
                            "huoying_didala": ["male", "hyrz_xiao", 3, ["huoying_baodun", "huoying_zibao", "huoying_feiniao"], []],
                            "huoying_daluyi": ["male", "hyrz_ren", 4, ["huoying_landun", "huoying_bizhu"], []],
                            "huoying_huanyue": ["male", "hyrz_ren", 3, ["huoying_chunshu", "huoying_zhengbao"], []],
                            "huoying_junmalv": ["male", "hyrz_ren", 3, ["huoying_guwu", "huoying_zhouyin"], []],
                            "huoying_qilabi": ["male", "hyrz_ren", 4, ["huoying_shuochang", "huoying_leidao"], []],
                            "huoying_yuanfeirizhan": ["male", "hyrz_huo", 3, ["huoying_huizhan", "huoying_yuanmo", "huoying_xfengyin"], []],
                            "huoying_xiaonan": ["female", "hyrz_xiao", 3, ["huoying_jizhu", "huoying_zhishu"], []],
                            "huoying_zhongwu": ["male", "hyrz_xiao", 3, ["huoying_xianhua", "huoying_kuangbao"], []],
                            "huoying_dahe": ["male", "hyrz_huo", 3, ["huoying_xmudun", "huoying_duizhang", "huoying_daiban"], []],
                            "huoying_asima": ["male", "hyrz_huo", 4, ["huoying_fengdun", "huoying_shouyu", "huoying_jinshao"], []],
                            "huoying_leiying": ["male", "hyrz_ren", 4, ["huoying_duanbi", "huoying_leisu", "huoying_zhongbao"], []],
                            "huoying_zhaomeimeng": ["female", "hyrz_ren", 3, ["huoying_feidun", "huoying_rongdun"], []],
                            "huoying_feijian": ["male", "hyrz_huo", 3, ["huoying_jinshu", "huoying_baofu", "huoying_shuidun"], []],
                            "huoying_liudaoxianren": ["male", ["hyrz_huo", "hyrz_ren", "hyrz_xiao"].randomGet(), Infinity, ["huoying_renzong", "huoying_liudao", "huoying_jitong"], []],
                            "huoying_zuojin": ["male", "hyrz_huo", 3, ["huoying_weishou", "huoying_wodi"], []],
                            "huoying_tiantian": ["female", "hyrz_huo", 3, ["huoying_jiju", "huoying_anqi"], []],
                            "huoying_shouju": ["female", "hyrz_ren", 3, ["huoying_lianyou", "huoying_fengwang"], []],
                            "huoying_quanzhongya": ["male", "hyrz_huo", 3, ["huoying_tongya", "huoying_nishou"], []],
                            //"huoying_chiwan":["male","hyrz_huo",4,["huoying_renquan"],[]],
                            "huoying_xianglin": ["female", "hyrz_xiao", 3, ["huoying_ganzhi", "huoying_liaoshang"], []],
                            "huoying_zhinai": ["male", "hyrz_huo", 4, ["huoying_chongyu", "huoying_xishi"], []],
                            "huoying_jiuxinnai": ["female", "hyrz_huo", 4, ["huoying_fenglian", "huoying_hongjiao"], []],
                            "huoying_bai": ["male", "hyrz_ren", 3, ["huoying_bingdun", "huoying_chengshang"], []],
                            "huoying_guitongwan": ["male", "hyrz_ren", 3, ["huoying_zhuzheng", "huoying_qilie", "huoying_jinkui"], []],
                            "huoying_chilangfang": ["male", "hyrz_ren", 3, ["huoying_zhouli", "huoying_tulao"], []],
                            "huoying_zuojinyoujin": ["male", "hyrz_ren", 3, ["huoying_jihuai", "huoying_luosheng"], []],
                            "huoying_tayuya": ["female", "hyrz_ren", 3, ["huoying_huanyin", "huoying_haosheng"], []],
                            "huoying_yeyuanlin": ["female", "hyrz_huo", 3, ["huoying_shangliang", "huoying_linyiliao", "huoying_yiyan"], []],
                        },
                        characterIntro: {
                            "huoying_shuiyue": "鬼灯水月，日本漫画《火影忍者》及其衍生作品中的男性角色，水之国·雾隐村第三批“忍刀七人众”之一，断刀•斩首大刀的第三任使用者。身为鬼灯一族，能使用水遁的秘术，拥有将身体任意部分液态化的能力，但因此很害怕雷遁忍术，若中了雷遁后，身体会麻痹，不能动弹。为了集齐忍刀七人众的刀而加入佐助的“鹰”小队。和哥哥鬼灯满月一样是用刀的天才，据说七把忍刀都会用。",
                            "huoying_shouju": "手鞠，日本漫画《火影忍者》及其衍生作品中的女性角色。风之国砂隐村的女忍者，第四代风影罗砂的长女，第五代风影我爱罗和勘九郎的姐姐。性格爽朗，擅长使用三星扇进行大范围的远程风遁忍术攻击。最后嫁给木叶的奈良鹿丸并育有一子奈良鹿戴。",
                            "huoying_quanzhongya": "犬冢牙，日本漫画《火影忍者》及其衍生作品中的角色，火之国木叶隐村的中忍，犬冢一族的族长犬冢爪之子。擅长与忍犬赤丸合作，最常使用的忍术是“牙通牙”，性格好强，冲动有自信，喜欢充当别人的领袖。与忍犬赤丸形影不离，犹如兄弟一样。有着历害的野外生存的技能，其实这和他每天都和赤丸一起“散步”是很有关系的。",
                            "huoying_chiwan": "赤丸是日本动漫《火影忍者》中的一只忍犬，是犬冢牙的得力助手，经常和牙呆在一起。当牙作战时，赤丸可以起到很好的辅助作用。曾经把鸣人的裤子连同臀部咬烂，牙齿十分锋利。赤丸是犬冢牙永不分离的伙伴，亦为忍术道具，具有灵敏的嗅觉，能感受敌人的查克拉力量及危险性。因为吃下兵粮丸后身体会变成赤红色，故名赤丸。 它能化成犬冢牙的分身，然后合作使出忍术--‘牙通牙’，化成两股龙卷风攻击敌人。及后更能与犬冢牙进行人兽混合变身，化成双头一身的双头狼，并使出超必杀技--“牙狼牙”，形成具有极大破坏力、可将敌人切开的龙卷风。小时候不会说话，只有犬冢牙听得懂赤丸的叫声所表达的意思。",
                            "huoying_itachi": "宇智波鼬，木叶村宇智波一族的天才忍者，7岁忍校毕业，13岁当上暗部队长，忍术高超，擅长手里剑。宇智波一族少数开了万花筒写轮眼的人，左眼月读，能瞬间让对手陷入鼬控制的幻术之中，包括时间、空间、质量皆由鼬控制，让其受到极重的精神攻击，属精神攻击类幻术。右眼天照，聚焦即发出能烧毁一切的黑色火焰，烧毁目标前永不熄灭。双眼须佐能乎，拥有极强的攻击与防御力。少年鼬是名双重间谍，为了村子，在宇智波一族叛变木叶前选择灭族，后逃离加入并暗中调查晓组织。后与其弟佐助决战而死，佐助因此开了万花筒写轮眼。第4次忍界大战被兜用秽土转生术复活，然后与鸣人相遇发动最强幻术“别天神”，摆脱控制，与兜一战，发动禁术“伊邪那美”，让兜陷入循环的幻术中。",
                            "huoying_zhujian": "千手柱间，初代目火影，战乱时代中千手一族的首领，木叶村的建立者之一，二代火影千手扉间的兄长，六道仙人大筒木羽衣次子阿修罗上一代转世者 。擅长使用“木遁”，能瞬间使出仙术，其身体能量和回复力极其惊人，具有操控尾兽的能力；平定乱世，平均分配尾兽给五大国，并在终结之谷之战中一举击败宇智波斑，是宇智波斑唯一敬畏的忍者。因此凡见过其风采的人皆称其是“如同六道仙人一般的神话”，被忍界誉为“忍者之神”。在第四次忍界大战中一度被大蛇丸以秽土转生的形式复活，与同被复活的历代火影一起前往战场支援忍者联军。",
                            "huoying_gangshou": "千手纲手，日本动漫《火影忍者》中的女性人物，火之国木叶隐村的第五代火影，初代火影千手柱间及其妻子漩涡水户的孙女，与自来也、大蛇丸并称传说中的“三忍”，最重要的人是恋人加藤断与弟弟绳树。擅长体术和医疗忍术，尤其是禁术创造再生•百豪之术，能迅速让伤口再生，从而达到疗伤效果，但风险就是术者会因此缩短寿命。 受自来也的请求，回村就任第五代火影。在后来的佩恩袭击等事件中保护着村子。在后来的第四次忍界大战中担任忍者联军总参谋，发挥着重大作用。",
                            "huoying_dashewan": "大蛇丸，日本动漫《火影忍者》中的人物。火之国木叶村的叛忍，木叶村的“三忍”之一，与自来也、纲手同为第三代火影猿飞日斩的弟子。具有独身攻陷一个小国的强大实力，和近乎不老不死的恢复力，被认为比蛇还难缠。擅长研究忍术且渴望得到写轮眼，闻名于忍界。野心勃勃，由于目睹了太多人的死亡、知道生命是脆弱的而误入歧途，他认为人体中蕴含着一生都无法使用的力量，因此他想获得长生不老从而学习世间所有忍术，掌握世间的真理。其野心被多次阻断，在佐助与鼬一战中被鼬的十拳剑封印。后在第四次忍界大战中，从御手洗红豆和药师兜的身上看见了药师兜的失败，有所醒悟。之后被佐助复活，与历代火影和鹰小队前往战场支援忍者联军。",
                            "huoying_zhilaiye": "自来也，日本漫画《火影忍者》及其衍生作品中的虚拟角色。火之国木叶隐村的“三忍”之一，三代火影猿飞日斩的弟子，四代目火影波风水门、长门、弥彦、小南、七代目火影漩涡鸣人的师父。他指导鸣人修行，在鸣人成长的道路上有着重要的作用。后在雨忍村刺探情报，死于“晓”首领佩恩之手。",
                            "huoying_zhishui": "宇智波止水，日本动漫《火影忍者》中的人物。木叶村宇智波一族的天才忍者，年幼时和宇智波鼬齐名，两人有着不相上下的瞳术天赋，实力超常，擅长幻术和瞬身术，以“瞬身止水”之名威震天下。拥有最强幻术——别天神，被誉为“最强幻术忍者”、“宇智波最强”等。别天神可以在不被察觉的情况下直接入侵对方的大脑，并永久、彻底的改变对方的思想、意志和控制其行为。止水性格开朗温和，即使是战斗，也经常是用点到为止，很少伤人。止水的信条是守护木叶守护和平，甘愿在幕后做一名默默无名的忍者。在宇智波一族密谋发动政变的前夕，止水计划用别天神阻止宇智波的政变。但在计划实施前被志村团藏偷袭，失去右眼。为了避免别人为了抢夺他的眼睛而引发争斗，他将左眼挖出托付给鼬，佯装自毁双眼，投南贺河自尽。宇智波鼬由此开启了万花筒写轮眼。",
                            "huoying_ningchi": "日向宁次,日本漫画《火影忍者》及其衍生作品中的角色，日向一族分家天才,火之国木叶隐村的上忍，由迈特·凯所领导的第三班的成员，队友是李洛克和天天。木叶名门日向一族分家的成员，日向日差之子，日向雏田的堂兄。被称为日向一族的天才，虽然被宗家限定了其血继限界白眼的能力，但是他凭借自己的天赋继承了宗家才可以使用的八卦掌等体术。在中忍考试输给鸣人后对命运的看法有所改观，不再认为命运是无法改变的。第四次忍界大战中，宁次为了保护鸣人和雏田，以自己的身体抵挡十尾的扦插之术而壮烈牺牲。",
                            "huoying_feiduan": "飞段，晓组织成员，邪教教徒，拥有不死之躯。飞段信仰邪神教，是邪神教的忠实教徒。他和角都合称“不死二人组”，被鬼鲛戏称为“僵尸二人组\"。飞段体术灵活，且拥有不死之身的能力，只需尝到对手的血，就能够通过诅咒使对手和自己承担同等的伤害！曾经和角都联手击败二尾人柱力二位由木人，杀死守护忍十二士之一的地陆和猿飞阿斯玛，最终被奈良鹿丸用计谋活埋于鹿林的深洞里。",
                            "huoying_ban": "宇智波斑，宇智波一族前任首领，宇智波佐助前一任的六道仙人长子因陀罗转世者。宇智波一族最强的男人，擅长使用“须佐能乎”以及可以和尾兽匹敌的“完成体须佐能乎”，被世人将其和千手柱间合称为“传说中的忍者”。 曾和千手柱间合作建立了第一个忍村，并将其命名为“木叶”。在黑绝的蛊惑下与千手柱间在终结之谷交战，败在柱间手下，普遍被世人认为已死亡，事实上在右眼植入了伊邪那岐，存活了下来并获得了柱间细胞。利用柱间细胞在死前开启轮回眼，通灵出外道魔像和上一次无限月读开启后产生的白绝，将轮回眼移植于长门身上。第三次忍界大战时期，在神无毗桥之战中救下宇智波带土，计划复活后进行月之眼计划。 第四次忍界大战时期被药师兜用秽土转生之术召唤。后利用带土施展外道·轮回天生之术成功复活，在吸收了再次复活的十尾后成为了十尾人柱力，发动无限月读后遭到黑绝背叛。大筒木辉夜被封印后由于体内尾兽被剥离即将死去，奄奄一息的他在和柱间敞开心扉后微笑地走向了人生真正的终点。",
                            "huoying_dayemu": "大野木，外号“两天秤”，三代目土影。虽然是一个矮小的老头，却拥有无比恐怖强大的忍术，比血界限界更高层次的血界淘汰——尘遁•原界剥离之术，此术发动简单迅速，但威力巨大得令人咋舌，能瞬间将一切物质分离成分子状态，无法复原，任何人一旦中招，瞬间灰飞烟灭。超轻岩之术令他能减轻物体重量甚至自身重量，在空中自由飞行，超重岩之术又能增加破坏力和接触到的物体包括人的压力，令其不能动弹或碎裂，两天秤称号由此而来。。。",
                            "huoying_kai": "迈特凯，木叶的苍蓝猛兽，擅长体术，绝招“八门遁甲”，曾开七门秒杀干杮鬼蛟，第四次忍界大战打开第八门死门，重创六道宇智波斑，濒死之际被鸣人用阴阳遁术救活",
                            "huoying_dou": "兜，《火影忍者》中的人物，颇具战斗智商。前期作为间谍卧底在木叶村，擅长医疗忍术。幼年时因受伤而失忆，被孤儿院院长药师野乃宇收留，但后来因为团藏要挟野乃宇，于是自愿的为野乃宇以及孤儿院去投靠团藏作为一个忍者活跃于木叶，从小就当间谍而游历各国，但团藏却安排兜与野乃宇自相残杀，自从误杀野乃宇后，兜就认为自己失去了生存意义，与此同时，大蛇丸找到了兜，邀请兜加入音隐村，自此之后便当了大蛇丸的得力助手。大蛇丸被十拳剑封印后，兜为了寻找真实的自己而去模仿大蛇丸的生存道路，移植获得了大蛇丸及其部下的能力，还靠自己在龙地洞修炼了仙人模式，并扬言利用他人来伪装自己，探索世界的真理。第四次忍界大战中，用秽土转生术复活了很多已死去的忍者，包括历代影、晓组织成员以及宇智波斑等高手，与忍者联军互怼。后在与佐助和鼬的战斗中陷入伊邪那美循环的幻术中。最后重拾自我，并前往战场救助佐助。战后被允许在木叶开设孤儿院，回到自己最向往的曾经的生活。",
                            "huoying_kakasi": "旗木卡卡西，木叶第一技师，佐助鸣人春野樱的老师，六代目火影，左眼的写轮眼来自队友宇智波带土“临死前”的赠予，据称卡卡西以此复制了上千种忍术，更熟练掌握了神威，另绝招雷切，能刺穿一切物体，曾切断过闪电，因此而得名。",
                            "huoying_chutian": "日向雏田，日向一族宗家女忍者，鸣人的妻子，拥有一双远距离无死角透视之眼，能看穿人体经络穴位并施以攻击，取人芳心于千里之外，易如反掌。同时习得八卦掌，集攻击防御于一身。曾在佩恩袭击木叶村时舍命救鸣人，身受重创，鸣人由此爆走，一度失控，差点被九尾占据，幸得四代火影的查克拉苏醒挽救。",
                            "huoying_daitu": "宇智波带土，《火影忍者》中中期的反派角色，面具男的真实身份。火之国木叶村的宇智波一族成员，四代火影的弟子，卡卡西的队友，擅长时空间忍术“神威”、宇智波禁术、阴阳遁术等。其送给卡卡西的左眼能远距离扭曲空间转移物体，自身右眼能转移自身，实现吸收物体、身体虚化。神无毗桥之战重伤濒死，将左眼和守护暗恋的女孩野原琳的愿望一同托付给于挚友旗木卡卡西。后在一族原首领宇智波斑的阴谋下，带土目睹了野原琳死亡后痛不欲生，写轮眼直接从双勾玉开启至万花筒写轮眼，否认世界，从此走上黑暗之路，成为“晓”的实际操纵者，曾在鸣人出生当天，放出九尾，袭击木叶村，并害死四代火影夫妇，后协助宇智波鼬的灭族行动，并和药师兜发动了第四次忍界大战，更成为世间第二位十尾人柱力。 在第四次忍界大战中与漩涡鸣人的战斗中被逐渐感化，想起并渴望重拾曾经保护同伴的梦想。后帮助第七班的成员与大筒木辉夜进行了异空间对决，在替鸣人和卡卡西挡下了辉夜的共杀灰骨后牺牲，但剩下的查克拉仍在最后的时刻帮助卡卡西发动完全体须佐能乎，帮助第七班他们战胜了大筒木辉夜。最终在将最后的写轮眼托付给卡卡西后，没有遗憾地和小琳前往了另一个世界。",
                            "huoying_zhuozhu": "宇智波佐助，《火影忍者》男二号。火之国木叶隐村宇智波一族的天才忍者，六道仙人长子因陀罗的转世。 年幼时目睹宇智波一族被哥哥宇智波鼬所灭，从而走上复仇之路。在终结谷与漩涡鸣人大战一场后叛离村子并追随大蛇丸。三年后，佐助吸收了大蛇丸的力量并成功向鼬复仇，但在此之后却被宇智波带土告知了灭族的真相，万花筒写轮眼开眼，进而决定摧毁木叶。曾先后与迪达拉、八尾奇拉比对战，大闹五影会议后又与雷影、团藏对战，实力得到提升。后来，佐助与秽土转生的鼬重逢，合力打败兜，想法再次发生了变化，为了进一步了解忍者、家族、哥哥的过去，佐助与秽土转生的历代火影进行了对话，在听完其回答后决定继承鼬的意志守护木叶，并期望成为火影改变现有的忍者世界体制。 第四次忍界大战结束后，佐助因对于维护世界和平的道路选择和鸣人不同，而在终结之谷与鸣人进行了宿命之战，结果两人各断一条手臂。最终佐助被鸣人感动，认同了鸣人的道路，并重新成为木叶的一员。 此后佐助独自一人游历世界，继承鼬的意志，甘做一个无名忍者，在身后默默守护木叶及忍者世界。",
                            "huoying_woailuo": "我爱罗，《火影忍者》系列中的人物。风之国·砂隐村的第五代风影。擅长控制沙，沙子形成绝对防御和绝招沙暴大（送）葬，拥有攻防一体的实力。小时候由于体内封印着一尾守鹤而被村人恐惧，又因为至亲之人的背叛而一度变得冷酷无情、喜好杀戮，但在和漩涡鸣人一战后，由于鸣人的影响而逐渐摆脱心魔。之后我爱罗成为第五代风影，领导并守护着砂隐村，但一度被“晓”抽去了一尾守鹤，失去生命，最后被千代牺牲生命复活。第四次忍界大战中，我爱罗担任忍界联军联队长与第四部队统领，并得知绝对防御是来自母亲守护他的意志使然和父亲的真相，一度哽咽。曾联手其他四影对战宇智波斑，但均被打败。战争落幕后，我爱罗仍持续担任风影的职位，还和鸣人及木叶村等维持着友好的关系。",
                            "huoying_mingren": "漩涡鸣人，《火影忍者》系列的主角。火之国木叶忍村的忍者，四代目火影波风水门和漩涡玖辛奈之子，六道仙人次子阿修罗转世。刚出生时父母为保护村子而牺牲，并将强大的尾兽“九尾”封印于鸣人体内。成为孤儿的鸣人在孤独中长大，但在唯一认同他的老师海野伊鲁卡以及三代目火影鼓励下逐渐决心要成为火影，让所有人都认同他的存在。成为忍者后，同旗木卡卡西、宇智波佐助和春野樱组成第七班进行各种任务。 为实现理想，和守护伙伴们的羁绊，鸣人不断修炼，作为木叶“三忍”之一自来也的弟子，学会了父亲的忍术螺旋丸，后将之升级，加入风遁属性，练成威力强大的风遁手里剑，曾以此秒杀晓组织的高手角都；又练就仙术打败佩恩六道，拯救木叶；后又在众人帮助下练成“九尾模式”，移动速度惊人，尤如“金色闪光”再世，后先后与秽土转生的众高手、六道宇智波带土、六道宇智波斑、大筒木辉夜战斗，最后与包括九尾在内的伙伴们一同终结了战争，与佐助决斗，最终感化了佐助，为纷争不断的忍者世界带来和平，并实现自己成为火影和忍界英雄的梦想",
                            "huoying_shuimen": "波风水门，四代目火影，鸣人的父亲，木叶村的英雄，天才忍者，外号“黄色闪光”，年纪轻轻便当上火影。自创忍术螺旋丸，凝聚查克拉无需结印即可发动。改良二代火影的“飞雷神”之术，只需在目标地留下术式，便能在术式之间瞬间移动或转移物体，速度极快，千里之外取人首级只在须臾之间，瞬间又遁迹千里之外，来无影去无踪，敌皆闻风丧胆，遇见可放弃任务，只管逃跑，曾在忍界大战以一己之力秒杀对方五十名上忍，名声由此大震。鸣人出生当晚，被宇智波带土掳走妻子，放出九尾狐，后发动禁术“尸鬼封尽”、“八卦封印”将九尾封印进鸣人体内后死去。第四次忍界大战中被大蛇丸切开“死神”腹部，释放出灵魂，然后用秽土转生术复活，后参与对抗宇智波带土和宇智波斑的战斗，发动短暂的仙人模式和九尾模式，帮助鸣人。。。",
                            "huoying_changmen": "漩涡长门，漩涡一族后裔，忍界大战时的孤儿，后被自来也收为徒弟，早期与弥彦等人创立晓组织，六道佩恩的实际操控者，实力恐怖。先后杀了自来也、卡卡西等人，以一己之力毁了木叶，与鸣人一战，终被鸣人说服，发动轮回天生之术令死去的木叶忍者复活后死去。后来又被兜用秽土转生之术复活，最终被宇智波鼬的十拳剑封印",
                            "huoying_wuren": "无，日本动漫《火影忍者》中的人物。土之国岩隐村的第二代土影，以阴谋和政治而闻名的“智将”，拥有令人无法感知查克拉的恐怖隐身能力——无尘迷塞，和超越于血继限界的血继淘汰——尘遁，并将其传授给徒弟第三代土影大野木，生前与二代水影同归于尽。死后被药师兜秽土转生，被迫参加第四次忍界大战，最终宇智波鼬解开了秽土转生，灵魂升天。",
                            "huoying_duan": "加藤断，日本动漫《火影忍者》中的人物，纲手最初的恋人，梦想是要当火影。忍界大战上前线的前一天，断告诉纲手自己的愿望是成为在火影，纲手将祖传的项链送给断。不料在战争中，断身受重伤，即使是三忍之一的纲手也无力回天，最终身亡。纲手因此患上了恐血症，偏激地认为只有笨蛋才会想去当火影。直到后来鸣人出现才让纲手放下了过去的心理阴影。加藤断有一个恐怖的忍术——灵化之术，是能将自己灵化成活的灵魂，无视距离穿梭并杀害敌人的忍术，可以控制对方身体和进入他人精神世界。此术非常适合间谍活动，断凭借此术击败、杀死过很多忍者，并在五影和秽土斑的对战中用此术进入纲手的意识控制其已丧失意识的身体，成功救下恋人纲手，并给予纲手查克拉后灵魂升天。",
                            "huoying_guijiao": "干杮鬼鲛，日本动漫《火影忍者》中的人物。晓组织成员之一，代号南（南斗），原本是雾隐村的忍者，也是“忍刀七人众”的一员，有着跟鲨鱼相像的面孔、肤色及尖锐的牙齿。擅长使用水遁及手上的异状大刀“鲛肌”（能吸取查克拉的大刀）进行攻击。由于体内拥有惊人的查克拉量，被称为“无尾之尾兽”。最终被迈特凯击败，自杀而亡。",
                            "huoying_liluoke": "李洛克，日本动漫《火影忍者》中的人物，也是《李洛克的青春全力忍传》的男主角。火之国木叶忍者村的忍者，自号“木叶美丽的苍蓝野兽”。小李是个“笨鸟先飞”型的热血少年，单纯而又热血，一心想成为一名优秀的忍者，并一直为此努力奋斗。他不会忍术和幻术，也没有与生俱来的特殊技能，但他有坚韧不拔的精神，面对困难从不畏惧。他起早贪黑，付出了比别人多几十倍的努力，纵然一次次失败，却始终坚信只要足够努力，照样可以成为优秀的忍者。",
                            "huoying_sanlei": "三代雷影，日本动漫《火影忍者》中的人物。雷之国云隐村的第三代雷影，四代目雷影之父，本名不详，称呼与第1、2、4代雷影一样为艾（A）。能够使用被称为“最强之矛”的地狱突刺·四本贯手和“最强之盾”的雷电护盾（曾经以一人之力单挑万名忍者并且大战三天三夜而死），甚至拥有着能与尾兽肉搏的强大能力（曾数次与八尾进行肉搏战并且不分胜负）。 第四次忍界大战中被药师兜秽土转生，与同样被秽土转生的二代目土影无、二代目水影鬼灯幻月和四代目风影罗砂前往战场大战我爱罗的第四部队，曾以一人之力压制住部分忍者联军，后被鸣人发现弱点后将其击败，并由联军封印。",
                            "huoying_luwan": "奈良鹿丸，日本动漫《火影忍者》中的人物。火之国木叶隐村的忍者，拥有出众的应敌策略，头脑冷静、随机应变，IQ超过200。曾谋划击败飞段，重挫角都。绝招是“影子模仿术”，比起或热血或摆酷的家伙们，他的性格虽然消极了点，但是想要平静的生活，擅长使用奈良一族秘传忍术。与父亲奈良鹿久一样深受历代火影信任。第四次忍界大战完结后，先后担任六代目火影·旗木卡卡西与七代目火影·漩涡鸣人的助手。",
                            "huoying_xiezi": "赤砂之蝎，日本动漫《火影忍者》中的人物。“晓”成员之一，代号玉（玉女）。被誉为天才傀儡师，人称“赤砂之蝎”。风之国砂隐村顾问千代之孙，幼年时其父母在执行任务时被“木叶白牙\"所杀，内心无比孤独，后来在千代的教导下习得傀儡术，曾经制作名为“父”与“母”的两具傀儡以抚慰自己内心的孤独。从小因为内心的孤独寂寞，而对傀儡有着超乎寻常的爱，是一个天才傀儡师，在自己青年的时期里就已经染指了人傀儡，把自己唯一的好友做成了傀儡。后来甚至将自己也做成了傀儡，后与春野樱和千代婆婆战斗被杀死。在秽土转生的时候，受到了勘九郎的话语感化，找到了自己内心深处真正的艺术，被唤醒了热爱傀儡的心，也找到了自己作为人类的一丝意义，明白了作为傀儡师的意义，把父母的两具傀儡托付给勘九郎，灵魂得以解脱。",
                            "huoying_xiaoying": "春野樱，日本动漫《火影忍者》中的女主角。新一代医疗忍者，五代目火影纲手的弟子，与漩涡鸣人、宇智波佐助隶属于旗木卡卡西领导的第七班。原本个性柔弱任性，在木叶忍者学校以忍术理论知识见长。在佐助离开木叶村后，拜第五代火影纲手为师，学成优秀的体术怪力和医疗忍术。第四次忍界大战中作为忍者联军第三部队以及医疗后勤部队的一员。具有良好的查克拉控制能力与清晰的脑力，擅长体术怪力与医疗忍术以及解除幻术。经过自己艰苦卓绝的努力奋斗，最终成长为一个贯彻自己座右铭“勇气”的优秀忍者。忍界大战结束若干年后，长大成人的樱已经成为木叶高层干部，并与佐助结婚，两人育有一女——宇智波佐良娜。",
                            "huoying_feijian": "千手扉间，日本动漫《火影忍者》中的人物，火之国木叶村的第二代火影，是初代火影手手柱间的弟弟、木叶村的建立者之一，对村子的兴旺发达做出了杰出的贡献。扉间擅长水遁系忍术，能在干旱无水的地方发动大规模的水遁。同时善于研究开发忍术，开发了飞雷神之术、影分身之术及禁术秽土转生，声名显赫。在第一次忍界大战中和第二代雷影被金角银角暗算而阵亡。在第四次忍界大战中被大蛇丸秽土转生，前往战场支援忍者联军，将接受六道仙人馈赠的宇智波佐助送往战场，之后无限月读开启，扉间和其他三位被转生的火影并没有受到影响，并与他们一起赶赴战场。大筒木辉夜被封印以后，由六道仙人解除秽土转生，灵魂与其他先代影们一同回归净土。",
                            "huoying_zaibuzhan": "桃地再不斩，日本热血漫画《火影忍者》中的人物。水之国雾隐村“忍刀七人众”之一，使用的武器是断刀“斩首大刀”。充满野心、铁血，但并不是无情无义的人。精通水遁忍术和暗杀术，因策划暗杀水影失败而逃离村子，成为叛忍，收留了白。在与卡卡西班一战中重伤，被鸣人感化后倒戈，与雇主同归于尽而死亡。",
                            "huoying_dingchi": "秋道丁次，日本漫画家岸本齐史作品《火影忍者》中的人物。火之国木叶村的中忍，他是猿飞阿斯玛的第十班中一名忠诚热心的队员，是鹿丸最要好的朋友之一，他用自己的行动证明了自己是队伍中的一个值得信赖的伙伴。常用忍术是肉弹战车、针刺肉弹战车、倍化术、局部倍化术、超级倍化术等家族秘术。",
                            "huoying_jinye": "山中井野，日本动漫《火影忍者》中的女性角色。木叶忍者村的中忍，阿斯玛所领导的第十班的成员，队友是奈良鹿丸和秋道丁次，继承了山中一族的独特秘术心转身之术，能让自身精神占据对方身体，控制对方内心。同时基于强烈的上进心，学成医疗忍术。 第四次忍界大战中作为忍者联军第五部队（战斗特别部队）的一员。忍界大战结束若干年后，与佐井结婚并生有一子山中井阵。",
                            "huoying_jiaodu": "角都，日本动漫《火影忍者》中的人物。原泷忍者村精英成员，“晓”成员之一。飞段的搭档，拥有秘术“地怨虞”，能通过利用查克拉操控体内释放的黑色触手，从而夺取他人经络或心脏。包括自己的心脏，体内最多能够储存五个心脏，通过更换心脏来延长寿命，被称为“与天地同寿之人”。每个心脏都能变为用地怨虞形成的黑体怪物，其怪物能使用原心脏主人的术。其中有一颗心脏被卡卡西的雷切摧毁，一颗心脏被飞段摧毁，两颗心脏被鸣人的风遁.螺旋手里剑摧毁，最后一颗心脏被旗木卡卡西的雷切摧毁。第四次忍界大战中，被药师兜秽土转生复活，经过战斗后被忍者联军合力压制，最终宇智波鼬解开了秽土转生，角都灵魂升天。",
                            "huoying_kanjiulang": "勘九郎，日本忍者题材漫画《火影忍者》中的男性角色。风之国·砂隐村第四代风影罗砂之子，手鞠的弟弟，我爱罗的哥哥。他是一名傀儡师，特征是身穿黑色连身装以及涂绘在脸上的紫色状纹，且每次现身总有新的傀儡术。 既爱好策略，也有冲动的一面。原本与手鞠一样对强大而残暴的弟弟有所畏惧，后来随着我爱罗性情的改变，勘九郎也努力和弟弟搞好关系，兄弟之情渐渐显示出来。在五影会谈中，勘九郎和手鞠一起担任我爱罗的护卫。第四次忍界大战中，勘九郎作为奇袭部队的队长。最终话的新五影会谈中，担任我爱罗的护卫。",
                            "huoying_tuanzang": "志村团藏，日本动漫《火影忍者》中的人物。火之国木叶村的忍者，木叶暗部的地下组织\"根\"的领导者，是第二代火影千手扉间的弟子和第三代火影猿飞日斩的竞争对手。十分不信任宇智波一族，是下令对宇智波一族实施灭族政策的木叶高层之一。同时也是一个老谋深算的家伙，不惜一切手段都要当上火影，目的是干出一番大事业，用强硬的手段守护木叶，并像千手柱间那样统一忍者世界。最终在与宇智波佐助的战斗中被佐助击败，为了死守止水之眼，用里四象封印术自尽而亡。是为木叶繁荣奉献一生的反英雄式人物。",
                            "huoying_jue": "绝，分为白绝和黑绝，日本漫画《火影忍者》及其衍生作品的虚拟角色，晓成员之一，代号玄（玄武），晓中的侦查员。白绝原本是人类，表面是由宇智波斑用初代细胞创造出来的人造人，实际上与此毫无关联，是上古时代沉浸于无限月读的人类堕落后的产物。白绝本体与黑绝融合成为晓组织的“绝”，但白绝还有众多分身，一般战斗力不高，只能用于侦查，但也有像飞那种战斗力极高的存在。黑白绝分裂后，白绝本体受“宇智波斑”（宇智波带土）的命令看守移植鼬写轮眼的佐助，但是佐助开启永恒万花筒写轮眼后，为了试验瞳力，用天照将白绝本体杀死。带土曾培育出十万白绝用于第四次忍界大战，但所有分身最终死亡，其余的绝在无限月读解开之后也全部死亡。 黑绝是传说女神辉夜姬的意志产物，为了复活母亲大筒木辉夜，煽动宇智波斑与千手柱间决战，协助斑利用含在嘴中的柱间细胞开启轮回眼，修改了六道仙人南贺神社留下的信息，将拯救宇智波一族的方法引向无限月读。斑却以为黑绝是自己的意志。黑绝在第四次忍界大战中利用药师兜、宇智波带土、宇智波斑，成功完成了复活辉夜姬的使命，但最终连同辉夜姬一同被原木叶第七班封印。",
                            "huoying_huiye": "大筒木辉夜，日本动漫《火影忍者》中的人物，本作最终BOSS。神树化身，十尾的真面目，忍界创世之神，查克拉之祖，同时拥有白眼、轮回眼、写轮眼三大瞳术。擅长使用“血继网罗”和能瞬间改变周围环境的“天之御中”。 随着时间的流逝，她的血缘又分化为宇智波、千手、漩涡、日向等家族。她的长子是忍界始祖“六道仙人”大筒木羽衣，次子是大筒木羽村。六道仙人两兄弟一同封印自己的母亲和十尾，但他们都不知道的是，她在被封印之前用意志创造了黑绝，并计划利用黑绝复活自己。 在第四次忍界大战中，黑绝成功利用宇智波斑的身体将辉夜复活。但最终辉夜还是被第七班和宇智波带土联手击败，并连同黑绝一起被再次封印。",
                            "huoying_didala": "迪达拉，日本动漫《火影忍者》中的男性角色。“晓”成员之一，代号青（青龙）。土之国·岩隐村第三代土影大野木的徒弟，黑土的师兄。少年时期为了证明自己的艺术，而接受了众多的恐怖袭击任务，因败于宇智波鼬而加入“晓”组织。最终在与宇智波佐助的对决中自爆身亡。后来被药师兜用秽土转生复活，期间固执不已，与自己的师傅和师妹相见。最后在秽土转生解除后，灵魂升天。",
                            "huoying_daluyi": "达鲁伊，日本动漫《火影忍者》中的男性角色。雷之国·云隐村的上忍，四代目雷影的护卫。三代目雷影黑色雷遁的唯一继承者，拥有血继限界“岚遁”[1]。对四代目雷影极忠心，曾被四代目雷影说为是自己的“第二只右手”。在忍界大战中担任第一部队队长（中距离联合军分队），作战英勇。忍界大战结束后若干年，达鲁伊成为五代目雷影。",
                            "huoying_huanyue": "鬼灯幻月，日本动漫《火影忍者》中的角色。水之国雾隐村的二代目水影，生前与二代目土影无同归于尽。第四次忍界大战中被药师兜秽土转生，被我爱罗击败后封印。绝招：无限水蒸汽爆炸的“蒸危爆威”、通灵蜃发动大面积幻术、从手指射出能射穿硬物的高强度水珠——“水铁炮之术”",
                            "huoying_junmalv": "君麻吕，日本动漫《火影忍者》中的人物。辉夜一族（又译竹取一族）血继限界“尸骨脉”的持有者，被大蛇丸看中，一心为大蛇丸效命，对大蛇丸忠心耿耿，是音忍五人众中最强的一人。 体术高超，具有超强的实力，但后因患了重病，在与我爱罗的交战中病发而亡。第四次忍者大战被药师兜以秽土转生形式复活，后被宇智波鼬解除秽土转生，灵魂升天。",
                            "huoying_qilabi": "奇拉比，日本动漫《火影忍者》中的人物角色，四代目雷影的搭档与义弟，同时也是八尾人柱力。可以完全控制八尾，实力极其强悍，喜爱说唱，喜欢玩耍，教会了九尾人柱力漩涡鸣人如何控制尾兽的方法，同时在第四次忍界大战中和鸣人一起并肩作战。",
                            "huoying_yuanfeirizhan": "猿飞日斩，日本动漫《火影忍者》中的角色。火之国木叶忍者村的三代目火影，亦是初代火影和二代目火影的亲传弟子，培育出了威震忍界的“三忍”。精通五种查克拉属性的忍术，享有“忍术教授”的称号。同时也是木叶在任时间最久的火影，期间开创了木叶隐村的全盛时期。在大蛇丸毁灭木叶行动中因使用尸鬼封尽而牺牲，在第四次忍界大战中与其他三位火影被大蛇丸使用秽土转生之术复活并加入战斗。之后宇智波斑开启无限月读，但日斩和其他三位火影却并没有受到影响并继续战斗，之后由六道仙人解除秽土转生，灵魂回归净土。",
                            "huoying_xiaonan": "小南，日本动漫《火影忍者》中的人物。“晓”组织的创立者之一，而且是其中唯一一个女性成员，代号“白”（白虎），被称为“天使”。她是第二次忍界大战时雨隐村的孤儿，曾经和弥彦、长门一起接受过自来也的忍术指导。后来和长门一起被漩涡鸣人的真诚所感动，重拾保护世界和平的信心。曾设计六千亿张起爆符诛杀宇智波带土，但失败。最终为了保护长门的遗体的轮回眼而被自称为“宇智波斑”的“面具男”（宇智波带土）杀死。",
                            "huoying_zhongwu": "重吾，日本漫画《火影忍者》中的人物，鹰小队成员之一，能够听懂动物的语言。具有双重人格，平时比较老实，暴躁时会有强烈的杀人倾向，是个被村里人成为“天秤”的男人   。 他是咒印的来源者，天生拥有能吸取自然能量的能力（即仙人化），一旦停留在自然能量超强的地方就会仙人化，但会因为无法控制而暴走。重吾的仙人化后来被大蛇丸研究，复制成咒印化。",
                            "huoying_dahe": "大和，日本动漫《火影忍者》中角色，原名天藏。火影直属暗部精英，从第三代火影时期起就被誉为暗部中的顶尖优秀忍者。幼年时期体内因被植入初代火影千手柱间细胞而继承了初代的木遁血继限界。风影夺还战之后，以“大和”作为任务代号，代替受伤的前辈旗木卡卡西带领第七班执行任务，在各项任务中发挥着重要作用。",
                            "huoying_asima": "阿斯玛，日本动漫《火影忍者》中的人物，是一个性格随和的正派角色。猿飞阿斯玛在火之国木叶忍者村，拥有罕见的风属性查克拉，是近战中首屈一指的上忍。 同时他也是第三代火影猿飞日斩的儿子，猿飞木叶丸的叔叔，第十班（奈良鹿丸、山中井野、秋道丁次）的老师，上忍夕日红的情侣。后来在与“晓”的战斗中被飞段杀死，临终前将意志托付给第十班。夕日红后于第四次忍界大战前夕生下阿斯玛的遗腹女猿飞未来。 第四次忍界大战中，阿斯玛被药师兜以秽土转生形式复活，后被其弟子第十班合力击败并封印，最后随秽土转生的解除而灵魂回归净土。",
                            "huoying_leiying": "夜月艾，日本动漫《火影忍者》中雷之国云隐村的四代目雷影，夜月一族，八尾人柱力奇拉比的义兄[1]。 性格暴躁冲动，身体健壮并以速度著称，全身在“雷遁护体”的保护下，速度和防御力都堪称强劲，在第四次忍界大战中担任忍者联军的统帅，后来在第四部队战场中与其余四影大战宇智波斑，结果被斑击败，恢复伤势后前往十尾战场支援前线，与其余联军合力击败十尾。",
                            "huoying_zhaomeimeng": "照美冥，日本漫画《火影忍者》及其衍生作品中的女性角色。水之国雾隐村的第五代水影，结束了雾隐在四代目水影执政以来“血雾之村”的恐怖时期，实行和平开放的政策，因而使雾忍者村复兴。实力强大，能够在无水之地中运用自身查克拉、使出足以压制宇智波斑“火遁·豪火灭失”的超强水遁。拥有水、火、土三种查克拉属性（其实还有雷）血继限界“溶遁”和“沸遁”，是唯一一位拥有两种血继限界的忍者。（不包括拥有六道之力的斑，鸣人，佐助等人，六道之力包含所有属性，理论上六道之力拥有者能使用所有血继限界，血继淘汰甚至血继网罗的忍术。）",
                            "huoying_liudaoxianren": "原名大筒木羽衣，日本漫画《火影忍者》及其衍生作品中的角色，大筒木辉夜的长子，继承了辉夜之力中的“轮回眼”。与弟弟大筒木羽村一起封印十尾（也就是自己的母亲，） 并在临终前把十尾分离出了九个尾兽。是第一位十尾人柱力，也是第一个解开查克拉真谛的人，以维护和平为目标，维持安宁与秩序。宇智波一族与千手一族的祖先，“忍宗”的开山祖师。其死后的查克拉仍然漂流在世间，默默守护着忍者世界。在第四次忍界大战中，六道仙人在得到漩涡鸣人和宇智波佐助的答案后将六道之力（六道仙人模式、轮回眼）和阴阳之力（六道·地爆天星）馈赠给他们，希望他们能再次封印母亲。辉夜复活之后六道仙人出现在四影面前。鸣人等人打倒封印辉夜后，六道仙人与历代五影使用通灵术将鸣人等人和尾兽们带回了原来的世界。",
                            "huoying_zuojin": "佐井，日本漫画《火影忍者》及其衍生作品中的男性角色，隶属于由团藏管辖的木叶暗部特殊部队“根”的忍者。没有感情，从小就被作为专门的杀人工具进行严格的培训长大，不会做除了任务以外的任何事。擅长绘画，一般画的是水墨画。加入卡卡西班后最初和春野樱及漩涡鸣人关系很差，但后来在鸣人的感染下回忆起和“哥哥”信在一起的时光，觉得这是最美好的，于是他决定违背命令，帮助鸣人把佐助带回木叶。第四次忍界大战结束数年后与山中井野结婚，婚后入赘山中一族，并育有一子山中井阵。",
                            "huoying_tiantian": "天天，日本漫画《火影忍者》及其衍生作品中的角色，火之国木叶隐村的中忍，是由迈特·凯所领导的第三班的成员，队友是日向宁次和李洛克，擅长使用体术与操控“忍具”攻击，随身携带的卷轴也可以通灵出各种各样忍具进行攻击，绝招中隐含“龙”。",
                            "huoying_xianglin": "香燐，日本漫画《火影忍者》系列及其衍生作品中的女性角色。漩涡一族的族人，拥有强大的查克拉和出色的感知能力，而且伤者只要咬她的皮肤就会恢复查克拉和伤势。曾经是大蛇丸的部下，后成为宇智波佐助“鹰”小队的一员。",
                            "huoying_zhinai": "油女志乃，日本漫画《火影忍者》及其衍生作品中的男性角色，火之国木叶隐村的上忍，与鸣人他们是忍者学校同期毕业的学员，与犬冢牙、日向雏田同为夕日红的学生。性格冷静，啰嗦，但实力极强。他用身体作为虫子的巢穴，操纵虫子战斗。最终话里成为忍者学校的指导老师。",
                            "huoying_jiuxinnai": "漩涡玖辛奈，日本漫画《火影忍者》及其衍生作品中的女性角色，主角漩涡鸣人的母亲、四代目火影波风水门的妻子，外号“血红辣椒”，具有好强、活泼可爱的性格，擅长封印术，并拥有与生俱来的能够压制尾兽的强大而又特别的查克拉，以及身为漩涡一族特有的强悍生命力。原本是涡之国涡潮隐之村漩涡一族的族人，后因体质特殊而被带到火之国木叶隐村，成为了第二位九尾人柱力。最终在九尾袭击木叶一战中与水门为保护村子而牺牲，她把自己幻想的未来、永不放弃的心以及勇往直前的精神都寄托给儿子——漩涡鸣人",
                            "huoying_bai": "白，日本漫画《火影忍者》及其衍生作品中的男性角色，雪一族的后裔，桃地再不斩的随从，拥有母亲遗传的冰遁血继限界。他是有着类似女性的容貌和黑色长发的美少年。本性很善良，但如果是为了再不斩的话，可以化身为毫不留情战斗的“工具”，白认为人在想要保护重要东西的时候，就会变得很坚强。终因替桃地再不斩挡下卡卡西的雷切而被贯穿心脏而死亡。",
                            "huoying_yeyuanlin": "野原琳，日本漫画《火影忍者》及其衍生作品中的女性角色，火之国木叶隐村的医疗忍者，四代火影波风水门的弟子，与旗木卡卡西、宇智波带土同属水门班的成员，性格温柔、善良。在神无毗桥之战不久后，被宇智波斑在心脏上设下符咒，体内被植入三尾计划破坏木叶，由于符咒不能使自己伤害自己，琳为了保护木叶不受破坏，主动选择了死在卡卡西的雷切之下。琳的死，使带土了解到战争的残酷，导致带土对这个忍界产生绝望。第四次忍界大战之时带土在内心世界中看到了琳和小时候的自己，最终重拾自我，在带土牺牲后，琳与带土一起走向另一个世界。带土离世后，在净土与野原琳重逢，待大筒木辉夜被封禁，他们二人便携手前往了新的世界。",
                            //"hyrz_moban":"简介模板",


                        },

                        characterTitle: {
                            "huoying_woailuo": "风影",


                        },

                        perfectPair: {
                            "huoying_shuimen": ['huoying_jiuxinnai'],
                            "huoying_xiaoying": ['huoying_zhuozhu'],
                            "huoying_zhujian": ['xwj_hyrz_huoyin_ban'],
                            "huoying_dashewan": ['xwj_hyrz_huoyin_dou'],
                            "huoying_gangshou": ['huoying_zhilaiye'],
                            "huoying_feiduan": ['huoying_jiaodu'],
                            "huoying_chutian": ['huoying_mingren'],
                            "huoying_kakasi": ['huoying_kai'],
                            "huoying_woailuo": ['huoying_kanjiulang'],
                            "huoying_guijiao": ['huoying_itachi'],
                            "huoying_wuren": ['huoying_dayemu'],
                            "huoying_changmen": ['huoying_xiaonan'],
                            "huoying_liluoke": ['huoying_ningchi'],
                            "huoying_luwan": ['huoying_asima'],
                            "huoying_xiezi": ['huoying_didala'],
                            "huoying_tuanzang": ['huoying_yuanfeirizhan'],
                            "huoying_leiying": ['huoying_qilabi'],
                            "huoying_junmalv": ['huoying_zhongwu'],
                            "huoying_shuimen": ['huoying_feijian'],
                            "huoying_zuojin": ['huoying_jinye'],
                            "huoying_kanjiulang": ['huoying_shouju'],
                            "huoying_zaibuzhan": ['huoying_bai'],

                        },

                        skill: {

                            "huoying_yiyan": {
                                audio: "ext:火影忍者:1",
                                // srlose:true,
                                trigger: {
                                    global: "dieBegin",
                                },
                                forced: true,
                                unique: true,
                                mark: true,
                                juexingji: true,
                                intro: {
                                    content: "limited",
                                },
                                content: function () {
                                    'step 0'
                                    player.chooseTarget(get.prompt('huoying_yiyan'), true, function (card, player, target) {
                                        return player != target;
                                    }).ai = function (target) {
                                        return get.attitude(player, target) > 0;
                                    };
                                    'step 1'
                                    if (result.bool) {
                                        event.target = result.targets[0];
                                        player.awakenSkill('huoying_yiyan');
                                    }
                                    else event.finish();
                                    'step 2'
                                    if (trigger.player == player) {
                                        event.target.addSkill(['huoying_shenwei', 'huoying_kkxshenwei'].randomGet());
                                        event.finish();
                                    } else {
                                        //var skills = trigger.player.skills.slice(0);
                                        var skills = lib.character[trigger.player.name][3];
                                        if (event.isMine()) {
                                            var dialog = ui.create.dialog('forcebutton');
                                            dialog.add('技能列表');
                                            for (var i = 0; i < skills.length; i++) {
                                                if (lib.translate[skills[i] + '_info']) {
                                                    var translation = get.translation(skills[i]);
                                                    if (translation[0] == '新' && translation.length == 3) {
                                                        translation = translation.slice(1, 3);
                                                    }
                                                    else {
                                                        translation = translation.slice(0, 2);
                                                    }
                                                    var item = dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + translation + '】</div><div>' + lib.translate[skills[i] + '_info'] + '</div></div>');
                                                    item.firstChild.link = skills[i];
                                                }
                                            }
                                        }
                                        player.chooseControl(skills).set('prompt', '请选择一个你要' + get.translation(event.target) + '获得的技能').set('ai', function () {
                                            return skills.randomGet();
                                        }).dialog = dialog;
                                    }
                                    'step 3'
                                    event.target.popup(result.control, 'thunder');
                                    //player.addTempSkill(result.control,{player:'phaseBegin'});
                                    event.target.flashAvatar('huoying_yiyan', result.control);
                                    event.target.addSkill(result.control);
                                    event.target.mark(result.control, {
                                        name: get.translation(result.control),
                                        content: lib.translate[result.control + '_info']
                                    });
                                    game.log(event.target, '获得了技能', '#g【' + get.translation(result.control) + '】');
                                },
                                ai: {
                                    expose: 0.5,
                                },
                            },

                            "huoying_shangliang": {
                                audio: "ext:火影忍者:2",
                                trigger: { global: "useCardToTarget" },
                                filter: function (event, player) {
                                    if (event.player == player || event.targets.length > 1 || event.targets.includes(player) || event.card.name != 'sha') return false;
                                    //return event.player.hasCard(function (card) {
                                    //return player.canEquip(card);
                                    //}, "e");
                                    return event.player.countCards('e');
                                },
                                check: function (event, player) {
                                    if (player.isDamaged() && !player.countCards('h', 'shan') && player.isEmpty(2) && event.player.isEmpty(2)) return 0;
                                    return get.attitude(player, event.target) > 0;
                                },
                                prompt: function (event, player, target) {
                                    return '是否代替' + get.translation(event.target) + '成为目标？';
                                },
                                content: function () {
                                    "step 0"
                                    player.logSkill("huoying_shangliang", trigger.player);
                                    player.choosePlayerCard(trigger.player, "e", "将一张装备牌移至你的装备区", true)
                                        .set("filterButton", function (button) {
                                            //return player.canEquip(button.link);
                                            return true;
                                        }).set("ai", function (button) {
                                            return get.effect(player, button.link, player, player);
                                        });
                                    "step 1"
                                    if (result && result.links && result.links.length) {
                                        trigger.player.$give(result.links[0], player, false);
                                        player.equip(result.links[0]);
                                        player.addExpose(0.2);
                                        var evt = trigger.getParent();
                                        evt.triggeredTargets2.remove(trigger.target);
                                        evt.targets.remove(trigger.target);
                                        trigger.player.line(player, 'fire');
                                        evt.targets.push(player);
                                    }
                                },
                            },
                            "huoying_linyiliao": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    global: "dying",
                                },
                                check: function (event, player) {
                                    return get.attitude(player, event.player) > 0;
                                },
                                filter: function (event, player) {
                                    return event.player.hp <= 0;
                                },
                                usable: 1,
                                prompt: function (event, player, target) {
                                    return '是否对' + get.translation(event.player) + '发动〖医疗〗？';
                                },
                                content: function () {
                                    trigger.player.turnOver();
                                    trigger.player.recover(1 - trigger.player.hp);
                                    game.asyncDraw([player, trigger.player]);
                                },
                                ai: {
                                    order: function () {
                                        if (_status.event.player.isTurnedOver()) return 10;
                                        return 6;
                                    },
                                },
                            },
                            "huoying_xinyiliao": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    global: "dying",
                                },
                                check: function (event, player) {
                                    if (player.hp == 1) return 0;
                                    if (player.countCards('h', { name: 'tao' }) || (player.countCards('h', { name: 'jiu' }) && event.player == player)) return 0;
                                    return get.attitude(player, event.player) > 0;
                                },
                                filter: function (event, player) {
                                    return event.player.hp <= 0 && player.countCards('h', { type: 'basic' });
                                },
                                prompt: function (event, player, target) {
                                    return '是否对' + get.translation(event.player) + '发动〖医疗〗？';
                                },
                                content: function () {
                                    player.discard(player.getCards('h', { type: 'basic' }));
                                    trigger.player.recover(1 - trigger.player.hp);
                                },
                                ai: {
                                    order: 2,
                                },
                            },
                            "huoying_tulao": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    target: "shaBegin",
                                },
                                priority: 2019,
                                filter: function (event, player) {
                                    return player.isAlive();
                                },
                                frequent: true,
                                content: function () {
                                    event.card = get.cardPile(function (card) {
                                        return get.type(card) == 'equip';
                                    });
                                    if (event.card) {
                                        player.equip(event.card, true).set('delay', true);
                                    }
                                },
                                ai: {
                                    order: 5,
                                },
                            },
                            "huoying_haosheng": {
                                trigger: {
                                    player: "damageEnd",
                                },
                                audio: "ext:火影忍者:2",
                                forced: true,
                                filter: function (event, player) {
                                    return event.source && event.source.isAlive();
                                },
                                content: function () {
                                    'step 0'
                                    var num = game.countPlayer(function (current) {
                                        return current.isMad();
                                    });
                                    if (num <= 1) {
                                        player.draw();
                                    }
                                    else {
                                        player.draw(num);
                                    }
                                    'step 1'
                                    if (trigger.source.isTurnedOver()) {
                                        trigger.source.turnOver();
                                    }
                                },
                            },
                            "huoying_jihuai": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    player: "phaseBegin",
                                },
                                direct: true,
                                filter: function (event, player) {
                                    return player.isAlive();
                                },
                                content: function () {
                                    'step 0'
                                    player.chooseTarget('选择弃置一名未被封印、白板的其他角色令其与你组成双将', lib.translate.huoying_jihuai_info, function (card, player, target) {
                                        return target != player && !target.hasSkill('fengyin') && !target.hasSkill('baiban');
                                    }).set('ai', function (target) {
                                        return get.attitude(player, target) <= 0;
                                    });
                                    'step 1'
                                    if (result.bool) {
                                        player.logSkill('huoying_jihuai');
                                        player.line(result.targets[0]);
                                        player.addFujiang(result.targets[0].name);
                                    }
                                    else event.finish();
                                    'step 2'
                                    if (player.hp >= 3) {
                                        result.targets[0].addTempSkill('fengyin', { player: 'damageEnd' });
                                    }
                                    else {
                                        result.targets[0].addTempSkill('baiban', { player: 'damageEnd' });
                                    }
                                },
                                ai: {
                                    order: 10,
                                    expose: 0.8,
                                    threaten: 2,
                                },
                            },
                            "huoying_qilie2": {
                                trigger: {
                                    source: "damageBegin",
                                },
                                audio: "ext:火影忍者:2",
                                forced: true,
                                filter: function (event, player) {
                                    return player.hp < 3 && event.player.isLinked();
                                },
                                content: function () {
                                    trigger.num++;
                                },
                            },
                            "huoying_qilie": {
                                trigger: {
                                    player: "shaBegin",
                                },
                                audio: "ext:火影忍者:2",
                                forced: true,
                                filter: function (event, player) {
                                    return event.target.isLinked();
                                },
                                content: function () {
                                    'step 0'
                                    if (player.hp < 3) {
                                        player.addSkill('huoying_qilie2');
                                    }
                                    else player.removeSkill('huoying_qilie2');
                                    'step 1'
                                    trigger.directHit = true;
                                },
                                mod: {
                                    targetInRange: function (card, player, target, now) {
                                        if (card.name == 'sha' && player.hp < 3 && target.isLinked()) return true;
                                    },
                                },
                            },
                            "huoying_jinkui": {
                                trigger: {
                                    player: "damageBegin",
                                },
                                audio: "ext:火影忍者:2",
                                direct: true,
                                usable: 1,
                                filter: function (event, player) {
                                    // if(!player.isLinked()) return false;
                                    return game.hasPlayer(function (current) {
                                        return current.isLinked();
                                    });

                                },
                                content: function () {
                                    'step 0'
                                    player.chooseTarget('选择弃置一名已横置的角色令其重置武将牌', lib.translate.huoying_jinkui_info, function (card, player, target) {
                                        return target != player && target.isLinked();
                                    }).set('ai', function (target) {
                                        if (get.attitude(player, target) > 0) return 1.8;
                                        return -1;
                                    });
                                    'step 1'
                                    if (result.bool) {
                                        player.logSkill('huoying_jinkui');
                                        player.line(result.targets[0], 'fire');
                                        result.targets[0].link(false);
                                        trigger.num--;
                                    }
                                    else event.finish();
                                },
                                ai: {
                                    threaten: 0.8,
                                    order: 3,
                                },
                            },
                            "huoying_zhuzheng2": {
                                mark: true,
                                mod: {
                                    cardEnabled: function () {
                                        return false;
                                    },
                                    cardUsable: function () {
                                        return false;
                                    },
                                    cardRespondable: function () {
                                        return false;
                                    },
                                    cardSavable: function () {
                                        return false;
                                    },
                                },
                                intro: {
                                    content: "不能使用或打出卡牌",
                                },
                            },
                            "huoying_zhuzheng": {
                                audio: "ext:火影忍者:2",
                                enable: "phaseUse",
                                // usable:1,
                                filter: function (event, player) {
                                    if (player.getStat().skill.huoying_zhuzheng >= player.hp) return false;
                                    return game.hasPlayer(function (current) {
                                        return !current.isLinked();
                                    });
                                },
                                //selectTarget: 1,
                                filterTarget: function (card, player, target) {
                                    return target != player && !target.isLinked();
                                },
                                content: function () {
                                    'step 0'
                                    player.line(target, 'green');
                                    player.chooseToPSS(target);
                                    'step 1'
                                    if (result.tie) {
                                        event.goto(0);
                                    }
                                    if (result.bool) {
                                        target.link();
                                        target.addTempSkill('huoying_zhuzheng2', { player: 'phaseBegin' });
                                    }
                                    if (!result.bool) {
                                        player.link(true);
                                    }
                                },
                                ai: {
                                    result: {
                                        target: function (player, target) {
                                            if (!target.isLinked()) return -3.5;
                                            return 0;
                                        },
                                    },
                                    order: 10,
                                    expose: 0.4,
                                },
                            },
                            "huoying_zhouli": {
                                audio: "ext:火影忍者:2",
                                enable: "phaseUse",
                                usable: 1,
                                position: "he",
                                filter: function (event, player) {
                                    return player.countCards('he');
                                },
                                filterCard: function (card) {
                                    return get.type(card) == 'equip';
                                },
                                selectCard: [1, Infinity],
                                check: function (card) {
                                    var player = get.owner(card);
                                    if (player.hp <= 3) return 15 - get.value(card)
                                    return 8 - get.value(card)
                                },
                                content: function () {
                                    if (player.hp >= 3) {
                                        player.draw(2 * cards.length);
                                    }
                                    else {
                                        player.draw(3 * cards.length);
                                    }
                                },
                                ai: {
                                    order: 7.2,
                                    result: {
                                        player: 1.8,
                                    },
                                    threaten: 1.6,
                                },
                            },
                            "huoying_luosheng": {
                                trigger: {
                                    player: "damageBegin",
                                },
                                direct: true,
                                usable: 1,
                                audio: "ext:火影忍者:1",
                                filter: function (event) {
                                    return game.hasPlayer(function (current) {
                                        return current.countCards('e');
                                    });

                                },
                                content: function () {
                                    'step 0'
                                    player.chooseTarget('选择弃置一名角色的一张装备区的牌', lib.translate.huoying_luosheng_info, function (card, player, target) {
                                        return target.countCards('e');
                                    }).set('ai', function (target) {
                                        if (get.attitude(player, target) <= 0) return 4.8;
                                        return 0.5;
                                    });
                                    'step 1'
                                    if (result.bool) {
                                        player.line(result.targets[0]);
                                        player.discardPlayerCard(result.targets[0], 'e', true);
                                        trigger.num--;
                                    }
                                    else event.finish();
                                },
                                ai: {
                                    order: 5,
                                    expose: 0.5,
                                },
                            },
                            "huoying_huanyin": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    player: "phaseEnd",
                                },
                                direct: true,
                                content: function () {
                                    'step 0'
                                    var num;
                                    if (player.hp >= 3) {
                                        num = 1;
                                    }
                                    else num = 3;
                                    player.chooseTarget(get.prompt2('huoying_huanyin'), [1, num], function (card, player, target) {
                                        return target != player && !target.isMad();
                                    }, function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                    'step 1'
                                    if (result.bool) {
                                        player.logSkill('huoying_huanyin', result.targets);
                                        event.targets = result.targets;
                                    }
                                    else {
                                        event.finish();
                                    }
                                    'step 2'
                                    if (event.targets.length) {
                                        var target = event.targets.shift();
                                        event.current = target;
                                    }
                                    else {
                                        event.finish();
                                    }
                                    'step 3'
                                    if (result.bool) {
                                        event.current.goMad({ player: 'phaseAfter' });
                                        event.goto(2);
                                    }
                                },
                                ai: {
                                    threaten: 0.5,
                                    order: 6,
                                },
                            },

                            "huoying_bingdun": {
                                audio: "ext:火影忍者:2",
                                enable: "phaseUse",
                                usable: 1,
                                filter: function (event, player) {
                                    return !player.isTurnedOver();
                                },
                                filterTarget: function (card, player, target) {
                                    return player != target;
                                },
                                group: "huoying_bingdun2",
                                selectTarget: [1, 2],
                                mod: {
                                    globalTo: function (from, to, current) {
                                        if (to.isTurnedOver()) return current + Infinity;
                                    },
                                    globalFrom: function (from, to) {
                                        if (to.isTurnedOver()) {
                                            return -Infinity;
                                        }
                                    },
                                },
                                content: function () {
                                    'step 0'
                                    var chat = ['在我的血继限界里，没有人的速度能快得过我', '秘术——魔镜冰晶'].randomGet();
                                    player.say(chat);
                                    player.$fullscreenpop('秘术•魔镜冰晶', 'thunder');
                                    game.delay(2);
                                    'step 1'
                                    target.turnOver();
                                    player.turnOver(true);
                                },
                                ai: {
                                    threaten: 1,
                                    result: {
                                        target: function (player, target) {
                                            if (!target.isTurnedOver()) return -3.5;
                                            if (target.isTurnedOver() && get.attitude(player, target) > 0) return 4.5;
                                            return -0.1;
                                        },
                                    },
                                    order: 4,
                                    expose: 0.4,
                                },
                            },
                            "huoying_bingdun2": {
                                trigger: {
                                    player: "useCard",
                                },
                                priority: 2025,
                                check: function (event, player) {
                                    var num1 = game.countPlayer(function (current) {
                                        return current.isTurnedOver() && get.attitude(player, current) <= 0;
                                    });
                                    var num2 = game.countPlayer(function (current) {
                                        return current.isTurnedOver() && get.attitude(player, current) > 0;
                                    });
                                    if (num1 > num2) return 1;
                                    return 0;
                                },
                                filter: function (event, player) {
                                    if (event.card.name != 'sha') return false;
                                    if (event.targets.length > 1) return false;
                                    return game.hasPlayer(function (current) {
                                        return current.isTurnedOver() && !event.targets.contains(current);
                                    });
                                },
                                content: function () {
                                    'step 0'
                                    event.targets = game.filterPlayer(function (current) {
                                        return current.isTurnedOver() && !trigger.targets.contains(current);
                                    });
                                    game.playhyrz(['huoying_bingdun1', 'huoying_bingdun2'].randomGet());
                                    player.say('别想能在我的术里逃出去');
                                    trigger.targets.addArray(event.targets);
                                    event.targets.sort(lib.sort.seat);
                                    'step 1'
                                    if (event.targets.length) {
                                        var target = event.targets.shift();
                                        player.line(target, 'fire');
                                        event.redo();
                                    }
                                    else {
                                        event.finish();
                                    }
                                },
                                ai: {
                                    order: 8,
                                },
                            },

                            "huoying_chengshang2": {
                                trigger: {
                                    player: "damageEnd",
                                },
                                forced: true,
                                // popup:false,
                                filter: function (event, player) {
                                    return event.card && event.card.isCard && event.card.name == 'sha' && player.isAlive();
                                },
                                content: function () {
                                    game.playhyrz(['huoying_chengshang1', 'huoying_chengshang2'].randomGet());
                                    player.turnOver();
                                },
                            },
                            "huoying_chengshang": {
                                audio: "ext:火影忍者:2",
                                priority: 15,
                                trigger: {
                                    global: "shaBegin",
                                },
                                check: function (event, player) {
                                    if (player.hp < 2) return 0;
                                    return get.attitude(player, event.target) > 0;
                                },
                                //	popup:false,
                                prompt: function (event, player, target) {
                                    return '是否代替' + get.translation(event.target) + '成为目标';
                                },
                                filter: function (event, player) {
                                    return player != event.player && player != event.target && player.isTurnedOver();
                                },
                                content: function () {
                                    trigger.player.line(player, 'green');
                                    trigger.targets.remove(trigger.target);
                                    trigger.targets.push(player);
                                    trigger.target = player;
                                    player.addTempSkill('huoying_chengshang2', 'shaAfter');
                                    var chat = ['人只有要守护的东西，才会变得更强大', '必要时，我愿意成为再不斩大人的工具，帮他完成他的梦想'].randomGet();
                                    player.say(chat);
                                },
                            },
                            "huoying_xundao": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    player: "phaseBegin",
                                },
                                //direct: true,
                                filter: function (event, player) {
                                    return game.hasPlayer(function (current) {
                                        return current.countCards('e') && current != player;
                                    });
                                },
                                check: function (event, player) {
                                    var num = game.countPlayer(function (current) {
                                        return current.countCards('e') && get.attitude(player, current) <= 0;
                                    });
                                    var num2 = game.countPlayer(function (current) {
                                        return current.countCards('e') && get.attitude(player, current) > 0;
                                    });
                                    if (num2 == 0) return 1;
                                    return num >= 2;
                                },
                                content: function () {
                                    'step 0'
                                    game.playhyrz(['huoying_xundao1', 'huoying_xundao2'].randomGet());
                                    var chat = ['没收你们的作案工具', '这把斩首大刀，从今天起，就是属于我的了', '我就是为了搜集七把忍刀才决定加入鹰小队的'].randomGet();
                                    player.say(chat);
                                    var targets = game.filterPlayer();
                                    targets.remove(player);
                                    targets.sort(lib.sort.seat);
                                    event.targets = targets;
                                    event.num = 0;
                                    var list = [];
                                    for (var i = 0; i < game.players.length; i++) {
                                        if (game.players[i] != player) {
                                            var cards = game.players[i].getCards('e', { type: 'equip' });
                                            for (var j = 1; j < 6; j++) {
                                                if (!game.players[i].isEmpty(j) && !list.contains('equip' + j)) list.push('equip' + j);
                                            }
                                        }
                                    }
                                    player.chooseButton('请选择一个装备栏', [[list, 'vcard']]).set('filterButton', function (button) {
                                        return true;
                                    }).set('ai', function (button) {
                                        var rand = _status.event.rand * 2;
                                        switch (button.link[2]) {
                                            case 'equip1': return 3 + rand[3];
                                            case 'equip2': return 5 + rand[3];
                                            case 'equip3': return 5 + rand[3];
                                            case 'equip4': return 3 + rand[3];
                                            case 'equip5': return 1 + rand[3];
                                            default: return rand[3];
                                        }
                                    }).set('rand', [Math.random(), Math.random(), Math.random(), Math.random()], Math.random());
                                    'step 1'
                                    if (result.bool) {
                                        game.log(player, '选择了', '' + get.translation(result.links[0][2]));
                                        if (event.num < event.targets.length) {
                                            if (event.targets[num].getEquip(result.links[0][2])) {
                                                player.line(event.targets[num], 'green');
                                                event.targets[num].$give(event.targets[num].getEquip(result.links[0][2]), player);
                                                player.gain(event.targets[num].getEquip(result.links[0][2]), event.targets[num]);
                                            }
                                            event.num++;
                                            event.redo();
                                        }
                                    }
                                    else event.finish();

                                    /*//2025.8被优化的旧写法：
                                    'step 0'
                                    var targets = game.filterPlayer();
                                    targets.remove(player);
                                    targets.sort(lib.sort.seat);
                                    event.targets = targets;
                                    event.num = 0;
                                    var controls = [];
                                    for (var i = 0; i < game.players.length; i++) {
                                        if (game.players[i] != player) {                                           
                                            if (game.players[i].getEquip(1) && !controls.contains('武器栏')) controls.push('武器栏');
                                            if (game.players[i].getEquip(2) && !controls.contains('防具栏')) controls.push('防具栏');
                                            if (game.players[i].getEquip(3) && !controls.contains('防御马')) controls.push('防御马');
                                            if (game.players[i].getEquip(4) && !controls.contains('攻击马')) controls.push('攻击马');
                                            if (game.players[i].getEquip(5) && !controls.contains('宝物栏')) controls.push('宝物栏');
                                            if (!controls.contains('cancel2')) controls.push('cancel2');
                                        	
                                        }
                                    }                                	
                                    var str = '请选择一个装备栏';
                                    player.chooseControl(controls, ui.create.dialog(str, 'hidden')).ai = function () {
                                        return Math.floor(Math.random() * controls.length);
                                    };                               	
                                    'step 1'
                                    if (result.control) {
                                        if (result.control == '武器栏') {
                                            if (event.num < event.targets.length) {
                                                if (event.targets[num].getEquip(1)) {
                                                    player.line(event.targets[num], 'green');
                                                    event.targets[num].$give(event.targets[num].getEquip(1), player);
                                                    player.gain(event.targets[num].getEquip(1), event.targets[num]);
                                                }
                                                event.num++;
                                                event.redo();
                                            }
                                        }
                                        if (result.control == '防具栏') {
                                            if (event.num < event.targets.length) {
                                                if (event.targets[num].getEquip(2)) {
                                                    player.line(event.targets[num], 'green');
                                                    event.targets[num].$give(event.targets[num].getEquip(2), player);
                                                    player.gain(event.targets[num].getEquip(2), event.targets[num]);
                                                }
                                                event.num++;
                                                event.redo();
                                            }
                                        }
                                        if (result.control == '防御马') {
                                            if (event.num < event.targets.length) {
                                                if (event.targets[num].getEquip(3)) {
                                                    player.line(event.targets[num], 'green');
                                                    event.targets[num].$give(event.targets[num].getEquip(3), player);
                                                    player.gain(event.targets[num].getEquip(3), event.targets[num]);
                                                }
                                                event.num++;
                                                event.redo();
                                            }
                                        }
                                        if (result.control == '攻击马') {
                                            if (event.num < event.targets.length) {
                                                if (event.targets[num].getEquip(4)) {
                                                    player.line(event.targets[num], 'green');
                                                    event.targets[num].$give(event.targets[num].getEquip(4), player);
                                                    player.gain(event.targets[num].getEquip(4), event.targets[num]);
                                                }
                                                event.num++;
                                                event.redo();
                                            }
                                        }
                                        if (result.control == '宝物栏') {
                                            if (event.num < event.targets.length) {
                                                if (event.targets[num].getEquip(5)) {
                                                    player.line(event.targets[num], 'green');
                                                    event.targets[num].$give(event.targets[num].getEquip(5), player);
                                                    player.gain(event.targets[num].getEquip(5), event.targets[num]);
                                                }
                                                event.num++;
                                                event.redo();
                                            }
                                        }
                                        if (result.control == 'cancel2') {
                                            event.finish();
                                        }
                                    }
                                    else {
                                        event.finish();
                                    }
                                    'step 2'
                                    game.playhyrz(['huoying_xundao1', 'huoying_xundao2'].randomGet());
                                    var chat = ['没收你们的作案工具', '这把斩首大刀，从今天起，就是属于我的了', '我就是为了搜集七把忍刀才决定加入鹰小队的'].randomGet();
                                    player.say(chat);
                                    */
                                },
                                ai: {
                                    order: 3,
                                },
                            },
                            "huoying_yehua2": {
                                trigger: {
                                    player: "damageBegin",
                                },
                                forced: true,
                                filter: function (event, player) {
                                    return event.nature && event.nature == 'thunder';
                                },
                                content: function () {
                                    var chat = ['香燐，出手真重', '我……干嘛要逞强呀？……'].randomGet();
                                    player.say(chat);
                                    game.playhyrz(['huoying_yehua1', 'huoying_yehua2'].randomGet());
                                    trigger.num++;
                                    //player.chooseToDiscard(1, true, 'he');
                                },
                                ai: {
                                    threaten: 0.8,
                                },
                            },
                            "huoying_yehua1": {
                                trigger: {
                                    player: "damageBegin",
                                },
                                forced: true,
                                audio: "ext:火影忍者:2",
                                filter: function (event, player) {
                                    return event.nature != 'thunder';
                                },
                                content: function () {
                                    var chat = ['这点小伤奈何不了我的，省点力气吧', '实际上，男人才是水做的！'].randomGet();
                                    player.say(chat);
                                    trigger.num--;
                                },
                            },
                            "huoying_yehua": {
                                trigger: {
                                    target: "shaBegin",
                                },
                                priority: 12,
                                forced: true,
                                audio: "ext:火影忍者:2",
                                group: ["huoying_yehua1"],
                                //group: ["huoying_yehua1", "huoying_yehua2"],
                                filter: function (event, player) {
                                    return event.card && event.card.isCard && event.card.nature == 'thunder';
                                },
                                content: function () {
                                    var chat = ['我……身体麻痹，动不了了', '既生水月，何生雷遁？'].randomGet();
                                    player.say(chat);
                                    trigger.directHit = true;
                                },
                                ai: {
                                    threaten: 1,
                                },
                            },

                            "huoying_daoji": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    target: "useCardToBegin",
                                },
                                priority: 2019,
                                filter: function (event, player) {
                                    return player != event.player && player.countCards('h', { type: 'equip' }) > 0;
                                },
                                content: function () {
                                    'step 0'
                                    player.chooseCard('h', true, '选择使用一张装备牌', { type: 'equip' }).ai = function (card) {
                                        return 8 - get.value(card);
                                    };
                                    'step 1'
                                    if (result.bool) {
                                        var equipcard = result.cards[0];
                                        var type = get.subtype(equipcard);
                                        var cards = player.getCards('e');
                                        for (var i = 0; i < cards.length; i++) {
                                            if (type == get.subtype(cards[i])) {
                                                player.gain(cards[i]);
                                                player.$gain2(cards[i]);
                                            }
                                        }
                                        player.useCard(equipcard, player);
                                        player.say(['兵来将挡，火来水淹', '真是一把好刀'].randomGet());
                                        game.delay(0.5);
                                    }
                                },
                                ai: {
                                    order: 7,
                                    expose: 0.2,
                                },
                            },
                            "huoying_hongjiao": {
                                audio: "ext:火影忍者:2",
                                trigger: { player: 'damage' },
                                filter: function (event, player) {
                                    return event.num > 0 && event.source && event.source.isAlive();
                                },
                                check: function (event, player) {
                                    return get.attitude(player, event.source) <= 0;
                                },
                                //	logTarget:'source',
                                content: function () {
                                    var chat = ['敢惹我？让你尝尝我的厉害', '我长红色的头发又关你什么事？'].randomGet();
                                    player.say(chat);
                                    trigger.source.damage(trigger.num, 'fire');
                                },
                                ai: {
                                    maixie_defend: true,
                                    effect: {
                                        target: function (card, player, target) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
                                            return 0.8;
                                            // if(get.tag(card,'damage')&&get.damageEffect(target,player,player)>0) return [1,0,0,-1.5];
                                        }
                                    }
                                },
                            },
                            "huoying_fenglian": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    player: "phaseBegin",
                                },
                                direct: true,
                                filter: function (event, player) {
                                    return game.hasPlayer(function (current) {
                                        return !current.isLinked();
                                    });
                                },
                                content: function () {
                                    'step 0'
                                    var num = game.countPlayer(function (current) {
                                        return !current.isLinked();
                                    });
                                    player.chooseTarget(get.prompt('huoying_fenglian'), [1, Math.min(num, player.countCards('h'))], function (card, player, target) {
                                        return !target.isLinked();
                                    }).set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                    'step 1'
                                    if (result.bool) {
                                        var chat = ['九尾，你就乖乖地呆着吧', '漩涡一族最擅长的就是封印术', '这是查克拉链，你动不了了'].randomGet();
                                        player.say(chat);
                                        player.logSkill('huoying_fenglian', result.targets);
                                        event.targets = result.targets;
                                        event.num = 0;
                                    }
                                    else {
                                        event.finish();
                                    }
                                    'step 2'
                                    if (event.num < event.targets.length) {
                                        event.targets[event.num].link();
                                        event.targets[event.num].addSkill('huoying_fenglian2');
                                        event.num++;
                                        event.redo();
                                    }
                                },
                                ai: {
                                    expose: 0.5,
                                },
                            },
                            "huoying_fenglian2": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    player: "phaseBegin",
                                },
                                forced: true,
                                mark: true,
                                intro: {
                                    content: '你的下个回合内，不能使用或打出卡牌',
                                },
                                content: function () {
                                    player.addTempSkill('huoying_fenglian3');
                                    player.removeSkill('huoying_fenglian2');
                                },
                            },
                            "huoying_fenglian3": {
                                mark: true,
                                mod: {
                                    cardEnabled: function () {
                                        return false;
                                    },
                                    cardUsable: function () {
                                        return false;
                                    },
                                    cardRespondable: function () {
                                        return false;
                                    },
                                    cardSavable: function () {
                                        return false;
                                    }
                                },
                                intro: {
                                    content: '不能使用或打出卡牌',
                                },
                            },

                            "huoying_liaoshang": {
                                audio: "ext:火影忍者:1",
                                direct: true,
                                priority: 8,
                                trigger: {
                                    global: "damageEnd",
                                },
                                filter: function (event, player) {
                                    return event.source && event.nature && (event.nature == 'fire' || event.nature == 'thunder');
                                },
                                check: function (event, player) {
                                    return get.attitude(player, event.source) > 0;
                                },
                                prompt: function (event, player) {
                                    return '是否对' + get.translation(event.source) + '发动疗伤？';
                                },
                                content: function () {
                                    game.delay();
                                    var chat = ['佐助君，你受伤了，请咬我一口吧', '让我助你一战'].randomGet();
                                    player.say(chat);
                                    player.logSkill('huoying_liaoshang');
                                    if (trigger.source.isDamaged()) {
                                        trigger.source.recover(trigger.num);
                                    }
                                    else {
                                        trigger.source.draw(trigger.num);
                                    }
                                },
                                ai: {
                                    expose: 0.5,
                                    order: 2,
                                },
                            },
                            "huoying_chongyu": {
                                trigger: {
                                    global: "discardAfter",
                                },
                                priority: 8,
                                direct: true,
                                audio: "ext:火影忍者:2",
                                filter: function (event, player) {
                                    if (player.getExpansions('huoying_chongyu').length >= player.hp) return false;
                                    if (event.player == player) return false;
                                    for (var i = 0; i < event.cards.length; i++) {
                                        if (get.suit(event.cards[i]) == 'spade' && get.position(event.cards[i]) == 'd') {
                                            return true;
                                        }
                                    }
                                    return false;
                                },
                                frequent: "check",
                                check: function (event, player) {
                                    for (var i = 0; i < event.cards.length; i++) {
                                        if (get.suit(event.cards[i]) == 'spade' && get.position(event.cards[i]) == 'd') {
                                            if (event.cards[i].name == 'du') return false;
                                        }
                                    }
                                    return true;
                                },
                                onremove: function (player, skill) {
                                    var cards = player.getExpansions(skill);
                                    if (cards.length) player.loseToDiscardpile(cards);
                                },
                                marktext: "虫",
                                intro: {
                                    content: 'expansion',
                                    markcount: 'expansion',
                                },
                                content: function () {
                                    'step 0'
                                    if (trigger.delay == false) game.delay();
                                    'step 1'
                                    var cards = [];
                                    for (var i = 0; i < trigger.cards.length; i++) {
                                        if (get.suit(trigger.cards[i]) == 'spade' && get.position(trigger.cards[i]) == 'd') {
                                            cards.push(trigger.cards[i]);
                                        }
                                    }
                                    if (cards.length) {
                                        var chat = ['让你见识下木叶油女一族的秘术', '不瞒你说，我全身都爬满了虫子'].randomGet();
                                        player.say(chat);
                                        player.logSkill('huoying_chongyu');
                                        player.addToExpansion(cards, player, 'give').gaintag.add('huoying_chongyu');
                                        player.update();
                                        game.log(player, '将', cards, '置于武将牌上');
                                    }
                                },
                                ai: {
                                    threaten: 0.4,
                                },
                            },
                            "huoying_xishi": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    global: "recoverBegin",
                                },
                                usable: 1,
                                priority: 6,
                                check: function (event, player) {
                                    return get.attitude(player, event.player) <= 0;
                                },
                                filter: function (event, player) {
                                    return event.player != player && player.getExpansions('huoying_chongyu').length > 0;
                                },
                                //direct: true,
                                content: function () {
                                    'step 0'
                                    player.chooseCardButton(player.getExpansions('huoying_chongyu'), 1, '选择弃置其中的一张“虫”牌').set('filterButton', function (button) {
                                        return true;
                                    }).set('ai', function (button) {
                                        return get.value(button.link);
                                    });
                                    'step 1'
                                    if (result.bool) {
                                        var chat = ['秘术•虫玉', '被我的虫子盯上你的查克拉后，你是逃不掉的'].randomGet();
                                        player.say(chat);
                                        player.logSkill('huoying_chongyu', trigger.player);
                                        //player.getExpansions('huoying_chongyu').remove(result.links[0]);
                                        player.give(result.links[0], player, 'give');
                                        player.syncStorage('huoying_chongyu');
                                        trigger.cancel();
                                        if (player.isDamaged()) {
                                            player.recover();
                                        }
                                        else {
                                            player.draw();
                                        }
                                    }
                                },
                                ai: {
                                    expose: 0.5,
                                },
                            },
                            "huoying_ganzhi": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    player: "phaseEnd",
                                },
                                direct: true,
                                priority: 2018,
                                filter: function (event, player) {
                                    return player.isAlive();
                                },
                                content: function () {
                                    var chat = ['佐助的查克拉好冰冷，这……还是佐助吗？', '怎么回事？团藏的查克拉变动了'].randomGet();
                                    player.say(chat);
                                    player.logSkill('huoying_ganzhi');
                                    for (var i = 0; i < game.players.length; i++) {
                                        if (game.players[i].countCards('h', 'tao') > 0 || game.players[i].countCards('h', { type: 'equip' }) > 0) {
                                            player.draw();
                                        }
                                    }
                                },
                                ai: {
                                    threaten: 2,
                                    expose: 0.3,
                                },
                            },
                            "huoying_nishou": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    player: "damageEnd",
                                },
                                unique: true,
                                filter: function (event, player) {
                                    return player.hp <= 2;
                                },
                                content: function () {
                                    'step 0'
                                    player.logSkill('huoying_nishou');
                                    var chat = ['忍法•牙狼牙之术', '赤丸，一起上！'].randomGet();
                                    player.say(chat);
                                    lib.character.huoying_chiwan = ["male", "hyrz_huo", 4, ["huoying_renquan"], []];
                                    player.callSubPlayer(player.addSubPlayer({
                                        name: 'huoying_chiwan',
                                        maxHp: 5,
                                        hp: 3,
                                        skills: lib.character.huoying_chiwan[3],
                                        hs: get.cards(4),
                                    }));
                                    'step 1'
                                    setTimeout(function () {
                                        player.node.avatar.setBackgroundImage('extension/火影忍者/huoying_chiwan.jpg');
                                    }, 500);
                                    player.awakenSkill('huoying_nishou');
                                    /* player.storage.huoying_nishou=player.addSubPlayer({
                                     name:'huoying_chiwan',
                                     maxHp:5,
                                     hp:3,                
                                     skills:lib.character.huoying_chiwan[3],
                                     hs:get.cards(4),
                                     });
                                 player.callSubPlayer(player.storage.huoying_nishou);   
                                 */
                                },
                            },
                            "huoying_renquan": {
                                mod: {
                                    cardEnabled: function (card, player) {
                                        if (_status.event.skill != 'huoying_renquan' && card.name != 'juedou' && (get.type(card) == 'trick' || get.type(card) == 'delay')) return false;
                                    },
                                    cardUsable: function (card, player) {
                                        if (_status.event.skill != 'huoying_renquan' && card.name != 'juedou' && (get.type(card) == 'trick' || get.type(card) == 'delay')) return false;
                                    },
                                    cardRespondable: function (card, player) {
                                        if (_status.event.skill != 'huoying_renquan' && card.name != 'juedou' && (get.type(card) == 'trick' || get.type(card) == 'delay')) return false;
                                    },
                                    cardSavable: function (card, player) {
                                        if (_status.event.skill != 'huoying_renquan' && card.name != 'juedou' && (get.type(card) == 'trick' || get.type(card) == 'delay')) return false;
                                    },
                                    targetInRange: function (card) {
                                        if (get.type(card) == 'trick' || get.type(card) == 'delay' || _status.event.skill == 'huoying_renquan') return true;
                                    },
                                },
                                audio: "ext:火影忍者:1",
                                enable: "chooseToUse",
                                filter: function (event, player) {
                                    return player.countCards('h', { type: 'trick' }) > 0 || player.countCards('h', { type: 'delay' }) > 0;
                                },
                                filterCard: {
                                    type: ["trick", "delay"],
                                },
                                viewAs: {
                                    name: "juedou",
                                },
                                check: function () { return 1 },
                                ai: {
                                    basic: {
                                        order: 5,
                                        useful: 1,
                                        value: 5.5,
                                    },
                                    result: {
                                        target: -1.5,
                                        player: function (player, target) {
                                            if (get.attitude(player, target) > 0 && get.attitude(target, player) > 0) {
                                                return 0;
                                            }
                                            var hs1 = target.getCards('h', 'sha');
                                            var hs2 = player.getCards('h', 'sha');
                                            if (hs1.length > hs2.length + 1) {
                                                return -2;
                                            }
                                            var hsx = target.getCards('h');
                                            if (hsx.length > 2 && hs2.length == 0 && hsx[0].number < 6) {
                                                return -2;
                                            }
                                            if (hsx.length > 3 && hs2.length == 0) {
                                                return -2;
                                            }
                                            if (hs1.length > hs2.length && (!hs2.length || hs1[0].number > hs2[0].number)) {
                                                return -2;
                                            }
                                            return -0.5;
                                        },
                                    },
                                    tag: {
                                        respond: 2,
                                        respondSha: 2,
                                        damage: 1,
                                    },
                                },
                            },
                            "huoying_tongya": {
                                audio: "ext:火影忍者:2",
                                enable: "phaseUse",
                                usable: 1,
                                filterTarget: function (card, player, target) {
                                    return target != player && target.countCards('he') > 0 && player.countCards('he') > 0;
                                },
                                content: function () {
                                    'step 0'
                                    player.chooseToDiscard([1, player.countCards('he')], true, 'he', '请弃置任意张牌').ai = function (card) {
                                        return 6 - get.value(card);
                                    };
                                    'step 1'
                                    if (result.bool) {
                                        player.logSkill('huoying_tongya');
                                        var chat = ['牙通牙', '赤丸，咬他！'].randomGet();
                                        player.say(chat);
                                        event.num = result.cards.length;
                                        target.chooseToDiscard(event.num, true, 'he', '弃置等量的牌').set('ai', function (card) {
                                            return 6 - get.value(card);
                                        });
                                    }
                                    else {
                                        event.finish();
                                    }
                                    'step 2'
                                    event.num1 = result.cards.length;
                                    player.draw(event.num - event.num1);
                                    player.useCard({ name: 'juedou' }, target, false);
                                },
                                ai: {
                                    order: 8,
                                    result: {
                                        target: function (player, target) {
                                            return -target.hp;
                                        },
                                    },
                                },
                            },
                            "huoying_fengwang": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    player: "turnOverEnd",
                                },
                                direct: true,
                                priority: 2019,
                                filter: function (event, player) {
                                    return game.hasPlayer(function (current) {
                                        return current.countCards('he');
                                    });
                                },
                                content: function () {
                                    'step 0'
                                    player.chooseTarget('选择〖风网〗的目标', lib.translate.huoying_fengwang_info, function (card, player, target) {
                                        return target != player && target.countCards('he') > 0;
                                    }).set('ai', function (target) {
                                        return -get.attitude(player, target);
                                    });
                                    'step 1'
                                    if (result.bool) {
                                        player.logSkill('huoying_fengwang');
                                        player.line(result.targets[0]);
                                        player.discardPlayerCard(result.targets[0], 'he', 1, true);
                                    }
                                    else {
                                        event.finish();
                                    }
                                },
                                ai: {
                                    result: {
                                        player: 1,
                                    },
                                    expose: 0.8,
                                    order: 4,
                                },
                            },
                            "huoying_lianyou": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    player: "phaseEnd",
                                },
                                priority: 18,
                                filter: function (event, player) {
                                    return player.isAlive();
                                },
                                check: function (event, player) {
                                    var active = 0;
                                    for (var i = 0; i < game.players.length; i++) {
                                        if (game.players[i] == player) continue;
                                        if (!game.players[i].isOut()) {
                                            if (get.attitude(player, game.players[i]) > 0) {
                                                active--;
                                            }
                                            else if (get.attitude(player, game.players[i]) < 0) {
                                                active++;
                                            }
                                        }
                                    }
                                    if (active > 0) return 1;
                                    if (Math.random() < 0.4) return 1;
                                    return 0.5;
                                },
                                content: function () {
                                    'step 0'
                                    event.current = player.next;
                                    var chat = ['老娘来了，刚才谁在放肆？', '知道危险还不滚到一边去？'].randomGet();
                                    player.say(chat);
                                    'step 1'
                                    event.current.chooseControl('弃牌', '让牌').set('ai', function () {
                                        if (get.attitude(event.current, player) > 0) return '让牌';
                                        if (get.attitude(event.current, player) < 0) return '弃牌';
                                        return '让牌';
                                    }).set('prompt', '镰鼬：请选择一项');
                                    'step 2'
                                    if (result.control == '弃牌') {
                                        event.current.chooseToDiscard(1, 'he', true);
                                    }
                                    else {
                                        player.line(event.current, 'green');
                                        player.gainPlayerCard(event.current, 'he', true);
                                    }
                                    'step 3'
                                    if (event.current.next != player) {
                                        event.current = event.current.next;
                                        game.delay(0.5);
                                        event.goto(1);
                                    }
                                    else event.goto(4);
                                    'step 4'
                                    player.turnOver();
                                },
                                ai: {
                                    threaten: 1.4,
                                    order: 9,
                                    result: {
                                        player: function (player) {
                                            return 1;
                                        },
                                    },
                                },
                            },

                            "huoying_anqi": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    player: 'loseEnd',
                                },
                                frequent: true,
                                filter: function (event, player) {
                                    for (var i = 0; i < event.cards.length; i++) {
                                        if (event.cards[i].original == 'e') return true;
                                    }
                                    return false;
                                },
                                content: function () {
                                    'step 0'
                                    game.delay(1.5);
                                    player.chooseTarget('选择发动〖暗器〗的目标', lib.translate.huoying_anqi_info, function (card, player, target) {
                                        return target != player;
                                    }).set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                    'step 1'
                                    if (result.bool) {
                                        player.logSkill('huoying_anqi');
                                        var chat = ['明枪易躲，暗箭难防', '巾帼不让须眉'].randomGet();
                                        player.say(chat);
                                        var target = result.targets[0];
                                        player.line(target, 'green');
                                        player.useCard({ name: 'sha' }, target, false);
                                        player.draw();
                                    }
                                },
                                ai: {
                                    expose: 2,
                                    noe: true,
                                    reverseEquip: true,
                                    effect: {
                                        target: function (card, player, target, current) {
                                            if (get.type(card) == 'equip') return [1, 3];
                                        }
                                    }
                                }
                            },

                            "huoying_jiju": {
                                audio: "ext:火影忍者:2",
                                priority: 10,
                                trigger: {
                                    global: "useCardToBegin",
                                },
                                check: function (event, player) {
                                    return get.attitude(player, event.player) < 0;
                                },
                                filter: function (event, player) {
                                    return event.player != player && event.card && (get.equipNum(event.card) == 1 || get.equipNum(event.card) == 4);
                                },
                                content: function () {
                                    'step 0'
                                    var chat = ['我的是我的，你的还是我的', '这真是一件好装备啊'].randomGet();
                                    player.say(chat);
                                    trigger.untrigger();
                                    trigger.player = player;
                                    trigger.target = player;
                                    'step 1'
                                    trigger.trigger('useCardToBegin');
                                },
                                //此技能来自弹丸杀							
                                ai: {
                                    expose: 0.2,
                                    order: 5,
                                },
                            },
                            "huoying_weishou2": {
                                mark: true,
                                mod: {
                                    cardEnabled: function () {
                                        return false;
                                    },
                                    cardUsable: function () {
                                        return false;
                                    },
                                    cardRespondable: function () {
                                        return false;
                                    },
                                    cardSavable: function () {
                                        return false;
                                    },
                                },
                                intro: {
                                    content: "不能使用或打出卡牌",
                                },
                            },

                            "huoying_weishou": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    player: "damageEnd",
                                },
                                filter: function (event, player) {
                                    return player.isAlive();
                                },
                                content: function () {
                                    'step 0'
                                    player.chooseTarget('选择发动〖伪兽〗的目标', lib.translate.huoying_weishou_info, function (card, player, target) {
                                        return target != player;
                                    }).set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                    'step 1'
                                    if (result.bool) {
                                        var chat = ['封印术·虎视眈弹，这次不能动弹了吧', '安息吧，你们这些亡魂'].randomGet();
                                        player.say(chat);
                                        var target = result.targets[0];
                                        player.line(target, 'green');
                                        target.addTempSkill('huoying_weishou2', { player: 'phaseUseBegin' });
                                        player.useCard({ name: 'sha' }, target, false);
                                        game.delay(1.5);
                                        event.card = get.cardPile(function (card) {
                                            return get.type(card) == 'equip';
                                        });
                                        if (event.card) {
                                            target.equip(event.card, true).set('delay', true);
                                        }
                                        else {
                                            event.finish();
                                        }
                                    }
                                },
                                ai: {
                                    order: 7,
                                    maixie: true,
                                    maixie_hp: true,
                                    expose: 0.5,
                                },
                            },

                            "huoying_wodi": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    player: "phaseEnd",
                                },
                                filter: function (event, player) {
                                    return player.countCards('e') > 0;
                                },
                                content: function () {
                                    'step 0'
                                    player.chooseTarget('选择发动【卧底报信】的目标', lib.translate.huoying_wodi_info, function (card, player, target) {
                                        return target != player;
                                    }).set('ai', function (target) {
                                        return get.attitude(_status.event.player, target);
                                    });
                                    'step 1'
                                    if (result.bool) {
                                        var chat = ['忍法·超兽伪画', '团藏大人放心！收集到情报，我会第一时间交给“根”', ' 书上说，微笑能增加人与人之间的交流'].randomGet();
                                        player.say(chat);
                                        var target = result.targets[0];
                                        player.line(target, 'green');
                                        target.draw();
                                        player.draw();
                                        player.recover();
                                        game.delay(0.5);
                                        player.gain(player.getCards('e'), 'gain2');
                                    }
                                },
                                ai: {
                                    order: 7,
                                    expose: 0.2,
                                },
                            },
                            "huoying_jitong": {
                                mode: ["identity"],
                                audio: "ext:火影忍者:2",
                                enable: "phaseUse",
                                limited: true,
                                mark: true,
                                marktext: "瞳",
                                $createButton(item, type, position, noclick, node) {
                                    node = ui.create.identityCard(item, position, noclick);
                                    node.link = item;
                                    return node;
                                },
                                content: function () {
                                    'step 0'
                                    player.$fullscreenpop('究极瞳术', 'fire');
                                    player.awakenSkill("huoying_jitong");
                                    /*//旧写法（会显示身份牌名称）
                                    event.num = 0;
                                    event.identitys = [];
                                    for (var i = 0; i < game.players.length; i++) {
                                        if (game.players[i].identity == "mingzhong") game.players[i].identity = "zhong";
                                        if (game.players[i].identity != 'zhu') {
                                            //event.identitys.push(game.players[i].identity);          
                                            event.identitys.push('identity_'+game.players[i].identity);                                                                                       
                                        }
                                    }
                                    event.targets = game.filterPlayer(function (current) {
                                        return current.identity != 'zhu';
                                    });
                                    event.targets.sort(lib.sort.seat);
                                    'step 1'
                                    if (event.num < event.targets.length) {
                                        if(event.identitys.length>1){
                                        player.chooseButton(ui.create.dialog('请您选择一张身份牌替换' + get.translation(event.targets[event.num]) + '的身份牌', [event.identitys, 'vcard'], true), function (button) {                                            
                                            return Math.random();
                                            // return get.rank(button.link,true);
                                        });
                                        }else{
                                            game.delay();
                                            var word = event.identitys[0];
                                            var prefix = "identity_";
                                            var newidentity = word.slice(prefix.length);                                            
                                            player.line(event.targets[event.num], 'green');                                       
                                            event.targets[event.num].identity = newidentity;
                                            event.targets[event.num].setIdentity(newidentity);                                        
                                            event.targets[event.num].update();
                                            event.finish();
                                        }
                                    } else {
                                        //game.showIdentity(false);								
                                        //_status.identityShown=false
                                        event.finish();
                                    }
                                    'step 2'
                                    if (result.bool) {
                                        var word = result.links[0];
                                        var prefix = "identity_";                                        
                                        var newidentity = word.replace(prefix, "");                                        
                                        player.line(event.targets[event.num], 'green');
                                        //event.targets[event.num].identity = result.links[0];
                                        //event.targets[event.num].setIdentity(result.links[0]);
                                        event.targets[event.num].identity = newidentity;
                                        event.targets[event.num].setIdentity(newidentity);
                                        event.identitys.remove(result.links[0]);
                                        event.targets[event.num].update();
                                        event.num++;
                                        event.goto(1);
                                    } else {
                                        //game.showIdentity(false);								
                                        //_status.identityShown=false;
                                        event.num++;
                                        event.goto(1);                                        
                                    }
                                    */
                                    event.num = 0;
                                    event.identitys = [];
                                    for (var i = 0; i < game.players.length; i++) {
                                        if (game.players[i].identity == "mingzhong") game.players[i].identity = "zhong";
                                        if (game.players[i].identity != 'zhu') {
                                            event.identitys.push(game.players[i].identity);
                                        }
                                    }
                                    event.targets = game.filterPlayer(function (current) {
                                        return current.identity != 'zhu';
                                    });
                                    //event.targets.sort(lib.sort.seat);
                                    'step 1'
                                    if (event.num < event.targets.length) {
                                        if (event.identitys.length > 1) {
                                            player.chooseButton(ui.create.dialog('请您选择一张身份牌替换' + get.translation(event.targets[event.num]) + '的身份牌', [event.identitys, function (item, type, position, noclick, node) {
                                                return lib.skill.huoying_jitong.$createButton(item, type, position, noclick, node);
                                            },], true), function (button) {
                                                if (event.targets[event.num].hasSkill('huoying_tianyan') || event.targets[event.num].hasSkill('huoying_xianti')) return button.link[2] == player.identity;
                                                return Math.random();
                                                // return get.rank(button.link,true);
                                            });
                                        } else {
                                            game.delay();
                                            player.line(event.targets[event.num], 'green');
                                            event.targets[event.num].identity = event.identitys[0];
                                            event.targets[event.num].setIdentity(event.identitys[0]);
                                            event.targets[event.num].update();
                                            event.finish();
                                        }
                                    } else {
                                        //game.showIdentity(false);								
                                        //_status.identityShown=false
                                        event.finish();
                                    }
                                    'step 2'
                                    if (result.bool) {
                                        player.line(event.targets[event.num], 'green');
                                        event.targets[event.num].identity = result.links[0];
                                        event.targets[event.num].setIdentity(result.links[0]);
                                        event.identitys.remove(result.links[0]);
                                        event.targets[event.num].update();
                                        event.num++;
                                        event.goto(1);
                                    } else {
                                        //game.showIdentity(false);								
                                        //_status.identityShown=false;
                                        event.num++;
                                        event.goto(1);
                                    }
                                },
                                ai: {
                                    order: 2,
                                    result: {
                                        player: function (player) {
                                            var num = game.countPlayer(function (current) {
                                                return current.hasSkill('huoying_tianyan') || current.hasSkill('huoying_xianti');
                                            });
                                            if (num == 0 && game.dead.length == 0) return 0;
                                            return 1;
                                        },
                                    },
                                },
                            },
                            "huoying_liudao": {
                                mod: {
                                    targetEnabled: function (card, player, target, now) {
                                        if (!target.isMaxHp()) {
                                            if (card.name == 'sha') return false;
                                        }
                                        if (target.isMaxHp()) {
                                            if ((get.type(card) == 'trick' || get.type(card) == 'delay') && player != target) return false;
                                        }
                                    },
                                },
                            },
                            "huoying_renzong": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    global: "dying",
                                },
                                forced: true,
                                priority: -2018,
                                unique: true,
                                skillAnimation: true,
                                animationColor: "water",
                                filter: function (event, player) {
                                    return event.player.hp <= 0 && event.player != player;
                                },
                                logTarget: "player",
                                derivation: ['huoying_tianyan', 'huoying_xianti'],
                                content: function () {
                                    'step 0'
                                    player.logSkill('huoying_renzong', trigger.player);
                                    player.chooseControl('huoying_tianyan', 'huoying_xianti').set('prompt', '令' + get.translation(trigger.player) + '获得一项技能');
                                    goon = true;
                                    if (!goon) {
                                        event.finish();
                                    }
                                    'step 1'
                                    var chat = ['忍宗对查克拉的定义是连接个体的力量，而非只增强个体的力量', '忍界大战，尸横遍野，生灵涂炭。我现在赐予你新的力量，让你替我去拯救世界，但愿我没看错人……', '我有两个儿子，一个与生俱来继承了我的瞳术，一个继承了我的生命力'].randomGet();
                                    player.say(chat);
                                    trigger.player.addSkillLog(result.control);
                                    trigger.player.storage.huoying_renzong2 = player;
                                    trigger.player.addSkill('huoying_renzong2');
                                    trigger.player.recover(1 - trigger.player.hp);
                                    trigger.player.draw(2);
                                    'step 2'
                                    player.maxHp = 6;
                                    player.hp = 6;
                                    game.broadcastAll() + player.node.avatar.setBackgroundImage('extension/火影忍者/huoying_yuyi.jpg');
                                    //ui.backgroundMusic.src = lib.assetURL + 'extension/火影忍者/wms_backgroundmusic.mp3';
                                    player.awakenSkill('huoying_renzong');
                                    player.update();
                                },
                            },
                            "huoying_renzong2": {
                                audio: "ext:火影忍者:2",
                                mark: "character",
                                intro: {
                                    content: "当你造成或受到伤害后，$随机获得一张基本牌",
                                },
                                nopop: true,
                                trigger: {
                                    source: "damageEnd",
                                    player: "damageEnd",
                                },
                                forced: true,
                                popup: false,
                                unique: true,
                                filter: function (event, player) {
                                    return player.storage.huoying_renzong2 && player.storage.huoying_renzong2.isIn() && event.num > 0;
                                },
                                content: function () {
                                    'step 0'
                                    game.delayx();
                                    'step 1'
                                    var target = player.storage.huoying_renzong2;
                                    player.line(target, 'green');
                                    target.gain(get.cardPile(function (card) {
                                        return get.type(card, 'basic') == 'basic';
                                    }), 'gain2');
                                    game.delay(0.5);
                                },
                                onremove: true,
                            },

                            "huoying_tianyan": {
                                audio: "ext:火影忍者:1",
                                trigger: {
                                    player: "phaseBegin",
                                },
                                priority: 2018,
                                direct: true,
                                createDialog: function (player, target, onlylist) {
                                    var names = [];
                                    var list = [];
                                    if (target.name && !target.isUnseen(0)) names.add(target.name);
                                    if (target.name1 && !target.isUnseen(0)) names.add(target.name1);
                                    if (target.name2 && !target.isUnseen(1)) names.add(target.name2);
                                    var pss = player.getSkills();
                                    for (var i = 0; i < names.length; i++) {
                                        var info = lib.character[names[i]];
                                        if (info) {
                                            var skills = info[3];
                                            for (var j = 0; j < skills.length; j++) {
                                                if (lib.translate[skills[j] + '_info'] && lib.skill[skills[j]] &&
                                                    !lib.skill[skills[j]].unique &&
                                                    !pss.contains(skills[j])) {
                                                    list.push(skills[j]);
                                                }
                                            }
                                        }
                                    }
                                    if (onlylist) return list;
                                    var dialog = ui.create.dialog('forcebutton');
                                    dialog.add('选择获得一项技能');
                                    _status.event.list = list;
                                    var clickItem = function () {
                                        _status.event._result = this.link;
                                        game.resume();
                                    };
                                    for (var i = 0; i < list.length; i++) {
                                        if (lib.translate[list[i] + '_info']) {
                                            var translation = get.translation(list[i]);
                                            if (translation[0] == '新' && translation.length == 3) {
                                                translation = translation.slice(1, 3);
                                            }
                                            else {
                                                translation = translation.slice(0, 2);
                                            }
                                            var item = dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' +
                                                translation + '】</div><div>' + lib.translate[list[i] + '_info'] + '</div></div>');
                                            item.firstChild.addEventListener('click', clickItem);
                                            item.firstChild.link = list[i];
                                        }
                                    }
                                    dialog.add(ui.create.div('.placeholder'));
                                    return dialog;
                                },
                                content: function () {
                                    'step 0'
                                    player.chooseTarget(get.prompt2('huoying_tianyan'), function (card, player, target) {
                                        var names = [];
                                        if (target.name && !target.isUnseen(0)) names.add(target.name);
                                        if (target.name1 && !target.isUnseen(0)) names.add(target.name1);
                                        if (target.name2 && !target.isUnseen(1)) names.add(target.name2);
                                        var pss = player.getSkills();
                                        for (var i = 0; i < names.length; i++) {
                                            var info = lib.character[names[i]];
                                            if (info) {
                                                var skills = info[3];
                                                for (var j = 0; j < skills.length; j++) {
                                                    if (lib.translate[skills[j] + '_info'] && lib.skill[skills[j]] &&
                                                        !lib.skill[skills[j]].unique && !pss.contains(skills[j])) {
                                                        return true;
                                                    }
                                                }
                                            }
                                            return false;
                                        }
                                    }).set('ai', function (target) {
                                        if (get.attitude(_status.event.player, target) < 0) return 1;
                                        return Math.random();
                                    });
                                    'step 1'
                                    if (result.bool) {
                                        event.target = result.targets[0];
                                        player.logSkill('huoying_tianyan', event.target);
                                    }
                                    else {
                                        event.finish();
                                    }
                                    'step 2'
                                    event.skillai = function (list) {
                                        return get.max(list, get.skillRank, 'item');
                                    };
                                    if (event.isMine()) {
                                        event.dialog = lib.skill.huoying_tianyan.createDialog(player, target);
                                        event.switchToAuto = function () {
                                            event._result = event.skillai(event.list);
                                            game.resume();
                                        };
                                        _status.imchoosing = true;
                                        game.pause();
                                    }
                                    else {
                                        event._result = event.skillai(lib.skill.huoying_tianyan.createDialog(player, target, true));
                                    }
                                    'step 3'
                                    _status.imchoosing = false;
                                    if (event.dialog) {
                                        event.dialog.close();
                                    }
                                    player.addTempSkill(result);
                                    player.popup(result);
                                    game.log(player, '获得了', '【' + get.translation(result) + '】');
                                },
                            },

                            "huoying_zhoushu": {
                                unique: true,
                                //limited: true,
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    source: "damage",
                                },
                                filter: function (event, player) {
                                    return (event.source != undefined);
                                },
                                check: function (event, player) {
                                    return get.attitude(player, event.player) < 0;
                                },
                                init: function (player) {
                                    player.storage.huoying_zhoushu = false;
                                },
                                //intro: {
                                //content: "limited",
                                //},
                                content: function () {
                                    'step 0'
                                    game.delay();
                                    player.storage.huoying_zhoushu = true;
                                    //player.$skill('死司凭血', 'fire', 'red', 'avatar');   
                                    player.$fullscreenpop('死司凭血', 'water');
                                    player.line(trigger.player, 'green');
                                    game.log(trigger.player, '成为了', '〖死司凭血〗', '的目标');
                                    player.storage.huoying_zhoushu2 = trigger.player;
                                    'step 1'
                                    game.delay();
                                    var chat = ['你已经被我诅咒了', '好新鲜的血液'].randomGet();
                                    player.say(chat);
                                    player.addSkill('huoying_zhoushu2');
                                    player.removeSkill('huoying_zhoushu');
                                    setTimeout(function () {
                                        game.broadcastAll() + player.node.avatar.setBackgroundImage('extension/火影忍者/huoying_xieshen.jpg');
                                        player.node.avatar.show('extension/火影忍者/huoying_xieshen.jpg');
                                    }, 100);
                                },
                            },
                            "huoying_zhoushu3": {
                                unique: true,
                                trigger: {
                                    global: "dieEnd",
                                },
                                silent: true,
                                forced: true,
                                popup: false,
                                filter: function (event, player) {
                                    return event.player == player.storage.huoying_zhoushu2;
                                },
                                content: function () {
                                    player.removeSkill('huoying_zhoushu2');
                                    if (!player.hasSkill('huoying_zhoushu')) {
                                        player.addSkill('huoying_zhoushu');
                                        game.log(player, '刷新了技能', '〖咒术〗');
                                        game.broadcastAll() + player.node.avatar.setBackgroundImage('extension/火影忍者/huoying_feiduan.jpg');
                                        player.update();
                                    }
                                },
                            },
                            "huoying_zhoushu2": {
                                unique: true,
                                mark: "character",
                                intro: {
                                    content: "当你受到伤害后，$受到等量的伤害",
                                },
                                nopop: true,
                                trigger: {
                                    player: "damageEnd",
                                },
                                forced: true,
                                popup: false,
                                group: "huoying_zhoushu3",
                                onremove: true,
                                filter: function (event, player) {
                                    return player.storage.huoying_zhoushu2 && player.storage.huoying_zhoushu2.isIn();
                                },
                                content: function () {
                                    'step 0'
                                    game.delay(0.5);
                                    var chat = ['这痛楚如何？哈哈……', '来啊！互相伤害啊！'].randomGet();
                                    player.say(chat);
                                    'step 1'
                                    var target = player.storage.huoying_zhoushu2;
                                    player.line(target, 'green');
                                    target.logSkill('huoying_zhoushu');
                                    target[trigger.name](trigger.num);
                                    game.delay(0.5);
                                },
                            },
                            "huoying_qianshou": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    global: "useCard",
                                },
                                priority: 5,
                                filter: function (event, player) {
                                    if (get.type(event.card) != 'trick') return false;
                                    if (get.info(event.card).multitarget) return false;
                                    if (event.targets.length < 2) return false;
                                    return true;
                                },
                                direct: true,
                                content: function () {
                                    'step 0'
                                    player.chooseTarget(get.prompt('huoying_qianshou'),
                                        [1, trigger.targets.length], function (card, player, target) {
                                            return _status.event.getTrigger().targets.contains(target);
                                        }).set('ai', function (target) {
                                            return get.attitude(player, target) > 0;
                                        });
                                    'step 1'
                                    if (result.bool) {
                                        var chat = ['斑，住手！我们是朋友！', '千手神通，顶上化佛'].randomGet();
                                        player.say(chat);
                                        player.logSkill('huoying_qianshou', result.targets);
                                        game.asyncDraw(result.targets);
                                        game.delay(0.5);
                                    }
                                },
                                ai: {
                                    order: 8,
                                },
                            },
                            "huoying_xianti": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    player: "phaseEnd",
                                },
                                forced: true,
                                filter: function (event, player) {
                                    return true;
                                },
                                content: function () {
                                    //player.draw(player.maxHp - player.countCards('h'));
                                    if (player.isDamaged()) {
                                        player.recover();
                                    } else {
                                        player.draw();
                                    }
                                },
                            },
                            huoying_guazhang: {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    player: "shaBegin",
                                },
                                forced: true,
                                content: function () { },
                                mod: {
                                    cardname(card, player, name) {
                                        if (_status.currentPhase != player && card.name == 'sha') return 'shan';
                                        if (_status.currentPhase == player && card.name == 'shan') return 'sha';
                                    },
                                },
                                /*                                
                                                    trigger: { player: 'useCard' },
                                                    frequent: true,
                                                    filter: function (event, player) {
                                                        if (event.huoying_guazhanged) return false;
                                                        if (!event.cards || event.cards.length != 1) return false;
                                                        if (!player.isPhaseUsing()) return false;
                                                        if (!player.storage.huoying_guazhang) return false;
                                                        return get.suit(player.storage.huoying_guazhang) == get.suit(event.cards[0]);
                                                    },
                                                    content: function () {
                                                        player.say('八卦•六十四掌');
                                                        player.draw();
                                                    },
                                                    intro: {
                                                        content: 'card'
                                                    },
                                                    group: ['huoying_guazhang2', 'huoying_guazhang3'],
                                                    */
                            },
                            /*
                            huoying_guazhang3: {
                                trigger: { player: 'useCard' },
                                priority: -1,
                                silent: true,
                                filter: function (event, player) {
                                    if (!event.cards || event.cards.length != 1) return false;
                                    if (_status.currentPhase != player) return false;
                                    return true;
                                },
                                content: function () {
                                    player.storage.huoying_guazhang = trigger.cards[0];
                                    trigger.huoying_guazhanged = true;
                                },
                            },
                            huoying_guazhang2: {
                                trigger: { player: 'phaseAfter' },
                                silent: true,
                                content: function () {
                                    player.storage.huoying_guazhang = null;
                                },
                            },
                            */
                            "huoying_guaili": {
                                audio: "ext:火影忍者:1",
                                unique: true,
                                enable: "phaseUse",
                                round: 2,
                                filter: function (event, player) {
                                    return !player.storage.huoying_guaili;
                                },
                                skillAnimation: "legend",
                                animationColor: "metal",
                                content: function () {
                                    'step 0'
                                    var shas = player.getCards('h', 'sha');
                                    var num;
                                    if (player.hp >= 4 && shas.length >= 3) {
                                        num = 3;
                                    }
                                    else if (player.hp >= 3 && shas.length >= 2) {
                                        num = 2;
                                    }
                                    else {
                                        num = 1
                                    }
                                    player.chooseControl('一', '二', '三', '四', '五', '六', function () {
                                        return get.cnNumber(_status.event.goon, true);
                                    }).set('prompt', '失去任意点体力').set('goon', num);
                                    'step 1'
                                    var num;
                                    switch (result.control) {
                                        case '一': num = 1; break;
                                        case '二': num = 2; break;
                                        case '三': num = 3; break;
                                        case '四': num = 4; break;
                                        case '五': num = 5; break;
                                        case '六': num = 6; break;
                                    }
                                    var chat = ['女汉子没人疼，练就一身肌肉和力量', '扎心了，流掉那么多血'].randomGet();
                                    player.say(chat);
                                    player.storage.huoying_guaili2 = num;
                                    player.loseHp(num);
                                    player.draw(num);
                                    player.addTempSkill('huoying_guaili2');
                                    player.addTempSkill('huoying_guaili3');
                                    player.update();
                                },
                                ai: {
                                    order: 2,
                                    result: {
                                        player: function (player) {
                                            if (player.hp == 1) return 0;
                                            var shas = player.getCards('h', 'sha');
                                            if (!shas.length) return 0;
                                            var card = shas[0];
                                            if (!lib.filter.cardEnabled(card, player)) return 0;
                                            if (lib.filter.cardUsable(card, player)) return 0;
                                            var mindist;
                                            if (player.hp >= 4 && shas.length >= 3) {
                                                mindist = 4;
                                            }
                                            else if (player.hp >= 3 && shas.length >= 2) {
                                                mindist = 3;
                                            }
                                            else {
                                                mindist = 2;
                                            }
                                            if (game.hasPlayer(function (current) {
                                                return (current.hp <= mindist - 1 &&
                                                    get.distance(player, current, 'attack') <= mindist &&
                                                    player.canUse(card, current, false) &&
                                                    get.effect(current, card, player, player) > 0);
                                            })) {
                                                return 1;
                                            }
                                            return 0;
                                        },
                                    },
                                },
                            },
                            "huoying_guaili2": {
                                audio: "ext:火影忍者:1",
                                onremove: true,
                                trigger: {
                                    source: "damageBegin",
                                },
                                filter: function (event, player) {
                                    return event.card && event.card.isCard && event.card.name == 'sha' && event.notLink();
                                },
                                forced: true,
                                content: function () {
                                    var chat = ['不是说我吹牛逼，无论人畜虾蟹，都捱不了我的一拳', '去死吧，死基佬！'].randomGet();
                                    player.say(chat);
                                    trigger.num++;
                                    player.update();
                                },
                                mod: {
                                    cardUsable: function (card, player, num) {
                                        if (typeof player.storage.huoying_guaili2 == 'number' && card.name == 'sha') {
                                            return num + player.storage.huoying_guaili2;
                                        }
                                    },
                                    globalFrom: function (from, to, distance) {
                                        if (typeof from.storage.huoying_guaili2 == 'number') {
                                            return distance - from.storage.huoying_guaili2;
                                        }
                                    },
                                },
                            },
                            "huoying_mudun2": {
                                enable: "chooseToUse",
                                usable: 1,
                                audio: "ext:火影忍者:1",
                                filterCard: function () { return false },
                                selectCard: -1,
                                viewAsFilter: function (player) {
                                    return true;
                                },
                                viewAs: { name: "wuxie" },
                                onuse: function (result, player) { },
                                prompt: "你可视为使用一张【无懈可击】",
                                check: function () { return 1 },
                                ai: {
                                    threaten: 0.2,
                                    basic: {
                                        useful: [6, 4],
                                        value: [6, 4],
                                    },
                                    result: {
                                        player: 1,
                                    },
                                    expose: 0.2,
                                },
                            },
                            huoying_mudun: {
                                audio: "ext:火影忍者:1",
                                //group: ["huoying_mudun2"],
                                //usable: 1,
                                enable: ["chooseToUse", "chooseToRespond"],
                                hiddenCard: function (player, name) {
                                    if (name == 'wuxie') return false;
                                    if (lib.inpile.contains(name)) return true;
                                },
                                filter: function (event, player) {
                                    if (player.getStat().skill.huoying_mudun >= player.hp) return false;
                                    if (event.type == 'wuxie') return false;
                                    var list = [];
                                    for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                                        list.push(ui.cardPile.childNodes[i]);
                                    }
                                    for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
                                        list.push(ui.discardPile.childNodes[i]);
                                    }
                                    if(list.length==0) return false;
                                    for (var i of lib.inpile) {
                                        if (i == 'wuxie') return false;
                                        if (event.filterCard({ name: i }, player, event)) return true;
                                    }
                                    return false;
                                },
                                delay: false,
                                content: function () {
                                    'step 0'
                                    var evt = event.getParent(2);
                                    evt.set("huoying_mudun", true);
                                    var list = [];
                                    for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                                        list.push(ui.cardPile.childNodes[i]);
                                    }
                                    for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
                                        list.push(ui.discardPile.childNodes[i]);
                                    }
                                    if(list.length>0){                                    
                                    var cards = list.randomGets(Math.min(list.length,5));
                                    //for (var i = cards.length - 1; i >= 0; i--) {
                                    //ui.cardPile.insertBefore(cards[i].fix(), ui.cardPile.firstChild);
                                    //}//删掉后每次完全随机不放回牌堆顶
                                    var aozhan = player.hasSkill("aozhan");
                                    player
                                        .chooseButton(["木遁：选择要" + (evt.name == "chooseToUse" ? "使用" : "打出") + "的牌", cards])
                                        .set("filterButton", function (button) {
                                            return _status.event.cards.includes(button.link);
                                        })
                                        .set(
                                            "cards",
                                            cards.filter(function (card) {
                                                if (aozhan && card.name == "tao") {
                                                    return (
                                                        evt.filterCard(
                                                            {
                                                                name: 'sha',
                                                                isCard: true,
                                                                cards: [card],
                                                            },
                                                            evt.player,
                                                            evt
                                                        ) ||
                                                        evt.filterCard(
                                                            {
                                                                name: "shan",
                                                                isCard: true,
                                                                cards: [card],
                                                            },
                                                            evt.player,
                                                            evt
                                                        )
                                                    );
                                                }
                                                return evt.filterCard(card, evt.player, evt);
                                            })
                                        )
                                        .set("ai", function (button) {
                                            var evt = _status.event.getParent(3);
                                            if (evt && evt.ai) {
                                                var tmp = _status.event;
                                                _status.event = evt;
                                                var result = (evt.ai || event.ai1)(button.link, _status.event.player, evt);
                                                _status.event = tmp;
                                                return result;
                                            }
                                            return 1;
                                        });
                                        }
                                    'step 1'
                                    var evt = event.getParent(2);
                                    if (result.bool && result.links && result.links.length) {
                                        var card = result.links[0];
                                        var name = card.name,
                                            aozhan = player.hasSkill("aozhan") && name == "tao";
                                        if (aozhan) {
                                            name = evt.filterCard(
                                                {
                                                    name: 'sha',
                                                    isCard: true,
                                                    cards: [card],
                                                },
                                                evt.player,
                                                evt
                                            )
                                                ? 'sha'
                                                : "shan";
                                        }
                                        if (evt.name == "chooseToUse") {
                                            game.broadcastAll(
                                                function (result, name) {
                                                    lib.skill.huoying_mudun_backup.viewAs = {
                                                        name: name,
                                                        cards: [result],
                                                        isCard: true,
                                                    };
                                                },
                                                card,
                                                name
                                            );
                                            evt.set("_backupevent", "huoying_mudun_backup");
                                            evt.set("openskilldialog", "请选择" + get.translation(card) + "的目标");
                                            evt.backup("huoying_mudun_backup");
                                        } else {
                                            delete evt.result.skill;
                                            delete evt.result.used;
                                            evt.result.card = get.autoViewAs(result.links[0]);
                                            if (aozhan) evt.result.card.name = name;
                                            evt.result.cards = [result.links[0]];
                                            evt.redo();
                                            return;
                                        }
                                    }
                                    evt.goto(0);
                                },
                                ai: {
                                    effect: {
                                        target: function (card, player, target, effect) {
                                            if (get.tag(card, "respondShan")) return 0.7;
                                            if (get.tag(card, "respondSha")) return 0.7;
                                        },
                                    },
                                    order: 11,
                                    respondShan: true,
                                    respondSha: true,
                                    result: {
                                        player: function (player) {
                                            if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                            return 1;
                                        },
                                    },
                                },
                            },
                            huoying_mudun_backup: {
                                sourceSkill: "huoying_mudun",
                                precontent: function () {
                                    delete event.result.skill;
                                    var name = event.result.card.name,
                                        cards = event.result.card.cards.slice(0);
                                    event.result.cards = cards;
                                    var rcard = cards[0],
                                        card;
                                    if (rcard.name == name) card = get.autoViewAs(rcard);
                                    else card = get.autoViewAs({ name, isCard: true });
                                    event.result.card = card;
                                },
                                filterCard: function () {
                                    return false;
                                },
                                selectCard: -1,
                            },

                            "huoying_baihao": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    player: ["phaseUseEnd", "dying"],
                                },
                                check: function (event, player) {
                                    if (player.countCards('h') - player.hp > 3 || player.hp <= player.maxHp - 3 || (player.maxHp > 1 && player.hp <= 0)) return 1;
                                    if (player.maxHp == 1) return 0;
                                    return 0;
                                },
                                filter: function (event, player) {
                                    return player.hp < player.maxHp || player.hp <= 0;
                                },
                                content: function () {
                                    player.say('阴封印•创造再生——百豪之术');
                                    player.recover(Infinity);
                                    player.loseMaxHp(true);
                                },
                                ai: {
                                    order: 2,
                                },
                            },
                            "huoying_xianren": {
                                audio: "ext:火影忍者:2",
                                unique: true,
                                juexingji: true,
                                intro: {
                                    content: "limited",
                                },
                                trigger: {
                                    player: "phaseBegin",
                                },
                                forced: true,
                                filter: function (event, player) {
                                    return !player.hasSkill('huoying_xianshu') && player.storage.huoying_renfa2 && player.storage.huoying_renfa2.length >= 3;
                                },
                                derivation: ['huoying_rexianshu'],
                                content: function () {
                                    'step 0'
                                    //player.$skill('仙人模式', 'fire', 'red', 'avatar');
                                    player.$fullscreenpop('仙人模式', 'water');
                                    player.chooseDrawRecover(2, true, function (event, player) {
                                        if (player.hp == 1 && player.isDamaged()) return 'recover_hp';
                                        return 'draw_card';
                                    });
                                    'step 1'
                                    var chat = ['今天的对手拥有轮回眼，所以不得不劳烦两位仙人出手相助', '我是在妙木山修炼成仙的蛤蟆仙，自来也是也！'].randomGet();
                                    player.say(chat);
                                    player.loseMaxHp();
                                    player.addSkill('huoying_rexianshu');
                                    player.awakenSkill('huoying_xianren');
                                },
                            },
                            "huoying_renfa": {
                                trigger: {
                                    player: "damageEnd",
                                },
                                direct: true,
                                audio: "ext:火影忍者:2",
                                init: function (player) {
                                    player.storage.huoying_renfa = [];
                                    player.storage.huoying_renfa2 = [];
                                },
                                filter: function (event, player) {
                                    return player.countCards('h') >= 0;
                                },
                                intro: {
                                    content: "cards",
                                    mark: function (dialog, content, player) {
                                        if (content && content.length) {
                                            dialog.addAuto(content);
                                            if (player.isUnderControl(true)) {
                                                var str = '';
                                                for (var i = 0; i < player.storage.huoying_renfa2.length; i++) {
                                                    str += get.translation(player.storage.huoying_renfa2[i]);
                                                    if (i < player.storage.huoying_renfa2.length - 1) {
                                                        str += '、';
                                                    }
                                                }
                                                dialog.add('<div class="text center">' + str + '</div>')
                                            }
                                        }
                                    },
                                },
                                content: function () {
                                    'step 0'
                                    player.draw(trigger.num);
                                    var chat = ['这个盘，我接了', '被小鬼称为小鬼，看来真被瞧不起了'].randomGet();
                                    player.say(chat);
                                    var list1 = [], list2 = [], list3 = [];
                                    for (var i = 0; i < lib.inpile.length; i++) {
                                        var type = get.type(lib.inpile[i]);
                                        if (type == 'basic') {
                                            list1.push(['基本', '', lib.inpile[i]]);
                                        }
                                        else if (type == 'trick') {
                                            list2.push(['锦囊', '', lib.inpile[i]]);
                                        }
                                        else if (type == 'delay') {
                                            list3.push(['锦囊', '', lib.inpile[i]]);
                                        }
                                    }
                                    player.chooseButton([get.prompt('huoying_renfa'), [list1.concat(list2).concat(list3), 'vcard']]).set('filterButton', function (button) {
                                        var player = _status.event.player;
                                        if (player.storage.huoying_renfa2 && player.storage.huoying_renfa2.contains(button.link[2])) return false;
                                        return true;
                                    }).set('ai', function (button) {
                                        var rand = _status.event.rand * 2;
                                        switch (button.link[2]) {
                                            case 'sha': return 5 + rand[1];
                                            case 'tao': return 4 + rand[2];
                                            case 'lebu': return 3 + rand[3];
                                            case 'shan': return 4.5 + rand[4];
                                            case 'wuzhong': return 4 + rand[5];
                                            case 'shunshou': return 3 + rand[6];
                                            case 'nanman': return 2 + rand[7];
                                            case 'wanjian': return 2 + rand[8];
                                            default: return rand[9];
                                        }
                                    }).set('rand', [Math.random(), Math.random(), Math.random(), Math.random(),
                                    Math.random(), Math.random(), Math.random(), Math.random()], Math.random());
                                    'step 1'
                                    if (result.bool) {
                                        player.storage.huoying_renfa2.push(result.links[0][2]);
                                        player.logSkill('huoying_renfa');
                                        player.chooseCard('h', '选择一张手牌记录一招“忍法”', true);
                                        if (player.isOnline2()) {
                                            player.send(function (storage) {
                                                game.me.storage.huoying_renfa2 = storage;
                                            }, player.storage.huoying_renfa2);
                                        }
                                    }
                                    else {
                                        event.finish();
                                    }
                                    'step 2'
                                    if (result.bool) {
                                        var card = result.cards[0];
                                        player.lose(card, ui.special);
                                        player.storage.huoying_renfa.push(card);
                                        player.syncStorage('huoying_renfa');
                                        player.markSkill('huoying_renfa');
                                        player.$give(card, player);
                                        player.addSkill('huoying_renfa3');
                                    }
                                },
                                mod: {
                                    maxHandcard: function (player, num) {
                                        return num + player.storage.huoying_renfa2.length;
                                    },
                                },
                                group: ["huoying_renfa2"],
                            },
                            "huoying_renfa2": {
                                trigger: {
                                    global: ["useCard", "respondEnd"],
                                },
                                priority: 15,
                                audio: "ext:火影忍者:2",
                                filter: function (event, player) {
                                    if (_status.currentPhase == player) return false;
                                    if (event.name == 'respond') {
                                        if (event.getParent(2).name != 'sha') return false;
                                    }
                                    return player.storage.huoying_renfa2 && player.storage.huoying_renfa2.contains(event.card.name);
                                },
                                direct: true,
                                content: function () {
                                    'step 0'
                                    var effect = 0;
                                    if (trigger.card.name == 'wuxie' || trigger.name == 'respond') {
                                        if (get.attitude(player, trigger.player) < 0) {
                                            effect = -1;
                                        }
                                    }
                                    else if (trigger.targets && trigger.targets.length) {
                                        for (var i = 0; i < trigger.targets.length; i++) {
                                            effect += get.effect(trigger.targets[i], trigger.card, trigger.player, player);
                                        }
                                    }
                                    var str = '忍法：是否令' + get.translation(trigger.player);
                                    if (trigger.targets && trigger.targets.length) {
                                        str += '对' + get.translation(trigger.targets);
                                    }
                                    str += '的' + get.translation(trigger.card) + '失效？'
                                    var next = player.chooseBool(str, function () {
                                        var player = _status.event.player;
                                        var trigger = _status.event.getTrigger();
                                        if (_status.event.effect < 0) {
                                            if (trigger.card.name == 'sha') {
                                                var target = trigger.targets[0];
                                                if (target == player) {
                                                    return !player.countCards('h', 'shan');
                                                }
                                                else {
                                                    return target.hp == 1 || (target.countCards('h') <= 2 && target.hp <= 2);
                                                }
                                            }
                                            else {
                                                return true;
                                            }
                                        }
                                        return false;
                                    });
                                    next.set('effect', effect);
                                    'step 1'
                                    if (result.bool) {
                                        player.logSkill('huoying_renfa');
                                        var index = player.storage.huoying_renfa2.indexOf(trigger.card.name);
                                        if (index != -1) {
                                            var card = player.storage.huoying_renfa[index];
                                            ui.discardPile.appendChild(card);
                                            player.$throw(card);
                                            player.storage.huoying_renfa.splice(index, 1);
                                            player.storage.huoying_renfa2.splice(index, 1);
                                            if (player.storage.huoying_renfa.length == 0) {
                                                player.unmarkSkill('huoying_renfa');
                                            }
                                            else {
                                                player.syncStorage('huoying_renfa');
                                                player.markSkill('huoying_renfa');
                                                if (player.isOnline2()) {
                                                    player.send(function (storage) {
                                                        game.me.storage.huoying_renfa2 = storage;
                                                    }, player.storage.huoying_renfa2);
                                                }
                                            }
                                        }
                                        game.delay(2);
                                        if (trigger.name == 'respond') {
                                            if (trigger.parent.result) {
                                                trigger.parent.result.bool = false;
                                            }
                                        }
                                        else {
                                            trigger.cancel();
                                        }
                                    }
                                    else {
                                        event.finish();
                                    }
                                    'step 2'
                                    var chat = ['实力破一波阴谋', '雕虫小技也敢在我面前耍？'].randomGet();
                                    player.say(chat);
                                    game.broadcastAll(ui.clear);
                                },
                                ai: {
                                    threaten: 1.8,
                                    expose: 0.3,
                                },
                            },
                            "huoying_renfa3": {
                                enable: "phaseUse",
                                usable: 1,
                                lose: false,
                                delay: false,
                                selectCard: [1, Infinity],
                                filterCard: true,
                                filter: function (event, player) {
                                    return player.storage.huoying_renfa.length > 0;
                                },
                                prompt: "用任意数量的手牌与等量的“忍”交换",
                                content: function () {
                                    'step 0'
                                    player.lose(cards, ui.special)._triggered = null;
                                    player.storage.huoying_renfa = player.storage.huoying_renfa.concat(cards);
                                    player.chooseCardButton(player.storage.huoying_renfa, '选择' + cards.length + '张牌作为手牌', cards.length, true).ai = function (button) {
                                        return get.value(button.link);
                                    }
                                    if (player == game.me && _status.auto) {
                                        game.delay(0.5);
                                    }
                                    'step 1'
                                    player.gain(result.links)._triggered = null;
                                    for (var i = 0; i < result.links.length; i++) {
                                        player.storage.huoying_renfa.remove(result.links[i]);
                                    }
                                    game.addVideo('storage', player, ['huoying_renfa', get.cardsInfo(player.storage.huoying_renfa), 'cards']);
                                },
                                ai: {
                                    order: 5,
                                    result: {
                                        player: 1,
                                    },
                                },
                            },
                            "huoying_citan": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    player: "phaseUseBegin",
                                },
                                locked: true,
                                delay: 0,
                                content: function () {
                                    'step 0'
                                    var chat = ['我就看看不说话', '潜入成功，幸好没人发现老夫', '美女，我是来取材的', '大丈夫为人坦荡，看下内裤算什么？'].randomGet();
                                    player.say(chat);
                                    if (event.isMine()) {
                                        var dialog = ui.create.dialog('刺探');
                                        for (var i = 0; i < game.players.length; i++) {
                                            if (game.players[i] == player) continue;
                                            if (game.players[i].countCards('h')) {
                                                dialog.add(get.translation(game.players[i]) + '的' + '手牌');
                                                var hs = game.players[i].get('h');
                                                dialog.add(hs);
                                            }
                                        }
                                        event.dialog = dialog;
                                        if (player == game.me) {
                                            if (event.isMine()) {
                                                game.pause();
                                                ui.create.confirm('o');
                                                game.countChoose();
                                                event.choosing = true;
                                            }
                                            else {
                                                event.finish();
                                                event.result = 'viewed';
                                                setTimeout(function () {
                                                    event.dialog.close();
                                                }, 2 * lib.config.duration);
                                                game.delayx(2);
                                            }
                                        }
                                        else {
                                            event.finish();
                                        }
                                    }
                                    'step 1'
                                    event.result = 'viewed';
                                    _status.imchoosing = false;
                                    event.choosing = false;
                                    if (event.dialog) event.dialog.close();
                                },
                            },
                            "huoying_zhaohuan": {
                                trigger: {
                                    player: "compare",
                                    target: "compare",
                                },
                                audio: "ext:火影忍者:2",
                                check: function (event, player) {
                                    if (player == event.player && event.num1 > event.num2) return 0;
                                    if (player != event.player && event.num1 < event.num2) return 0;
                                    return 1;
                                },
                                content: function () {
                                    /*
                                    var number=Math.abs(trigger.num1-trigger.num2);
                                        if (player == trigger.player) {                                            
                                            trigger.num1 += number;
                                            trigger.num2 -= number;  
                                            game.log(player, "交换了拼点牌");                                           
                                        }
                                        else {
                                            trigger.num2 += number;
                                            trigger.num1 -= number;  
                                            game.log(player, "交换了拼点牌");   
                                        }  
                                        */
                                    const num1 = trigger.num1;
                                    const num2 = trigger.num2;
                                    const card1 = trigger.card1;
                                    const card2 = trigger.card2;
                                    trigger.num1 = num2;
                                    trigger.num2 = num1;
                                    trigger.card1 = card2;
                                    trigger.card2 = card1;
                                    game.log(player, "交换了拼点牌");
                                },
                            },

                            "huoying_yongsheng": {
                                trigger: {
                                    player: "dying",
                                },
                                audio: "ext:火影忍者:2",
                                filter: function (event, player) {
                                    if (player.maxHp < 1) return false;
                                    return true;
                                },
                                usable: 1,
                                content: function () {
                                    'step 0'
                                    player.draw();
                                    'step 1'
                                    player.chooseTarget(get.prompt2('huoying_yongsheng'), 1, function (card, player, target) {
                                        return player != target && player.canCompare(target);
                                    }, function (target) {
                                        return get.attitude(player, target) < 0;
                                    });
                                    'step 2'
                                    if (result.bool) {
                                        var chat = ['人若死了，就什么都没了，只要活着，总会发现有趣的东西', '人，真是脆弱的生命！', '太完美了，果然，我还是想得到你的身体'].randomGet();
                                        player.say(chat);
                                        event.target = result.targets[0];
                                        player.logSkill("huoying_yongsheng", event.target);
                                        player.chooseToCompare(event.target);
                                    }
                                    else {
                                        event.finish();
                                    }
                                    'step 3'
                                    if (!result.bool) {
                                        player.recover(1 - player.hp);
                                        player.loseMaxHp();
                                        player.turnOver();
                                        event.finish();
                                    }
                                    else {
                                        event.num = event.target.hp - player.hp;
                                    }
                                    'step 4'
                                    player.changeHp(event.num);
                                    if (player.maxHp < 4) {
                                        player.gainMaxHp();
                                    }
                                    'step 5'
                                    event.target.changeHp(-event.num);
                                    'step 6'
                                    if (event.target.hp <= 0) {
                                        event.target.dying({ source: player });
                                    }
                                },
                                ai: {
                                    order: 5,
                                },
                            },
                            "huoying_chendun": {
                                audio: "ext:火影忍者:2",
                                enable: "phaseUse",
                                usable: 1,
                                filterTarget: function (card, player, target) {
                                    return player != target && target.countCards('h') > 0 && target.maxHp >= 2;
                                },
                                filter: function (event, player) {
                                    return player.countCards('h') > 0;
                                },
                                content: function () {
                                    'step 0'
                                    if (player.canCompare(target)) player.chooseToCompare(target);
                                    var chat = ['尘遁•原界剥离之术', '我虽然跟你无怨无仇，但整个忍界的人都想杀你'].randomGet();
                                    player.say(chat);
                                    'step 1'
                                    if (result.bool) {
                                        target.loseMaxHp();
                                        target.draw();
                                    }
                                    else {
                                        target.damage();
                                    }
                                },
                                ai: {
                                    threaten: 2.3,
                                    result: {
                                        target: function (player, target) {
                                            return -target.countCards('he');;
                                        },
                                    },
                                    order: 9,
                                },
                            },
                            "huoying_rechendun": {
                                audio: "ext:火影忍者:2",
                                enable: "phaseUse",
                                usable: 1,
                                filterTarget: function (card, player, target) {
                                    return player != target && target.countCards('h') > 0 && player.canCompare(target) && target.hasEnabledSlot() && !target.hasSkillTag('noCompareTarget');
                                },
                                filter: function (event, player) {
                                    return player.countCards('h') > 0;
                                },
                                content: function () {
                                    'step 0'
                                    player.chooseToCompare(target);
                                    var chat = ['尘遁•原界剥离之术', '你已老了，大野木'].randomGet();
                                    player.say(chat);
                                    'step 1'
                                    if (result.bool) {
                                        var list = [];
                                        for (var i = 1; i < 6; i++) {
                                            if (target.hasEnabledSlot(i)) {
                                                list.push('equip' + i);
                                            }
                                        }
                                        for (var i = 0; i < list.length; i++) {
                                            list[i] = [get.translation(list[i]), '', list[i]];
                                        }
                                        player.chooseButton([get.prompt('huoying_rechendun'), [list, 'vcard']]).set('filterButton', function (button) {
                                            return true;
                                        }).set('ai', function (button) {
                                            switch (button.link[2]) {
                                                case 'equip1': return 5 + 6 * Math.random();
                                                case 'equip2': return 7 + 6 * Math.random();
                                                case 'equip3': return 6 + 6 * Math.random();
                                                case 'equip4': return 4 + 6 * Math.random();
                                                case 'equip5': return 4 + 6 * Math.random();
                                                default: return 5 * Math.random();
                                            }
                                        }).set('rand', [Math.random(), Math.random(), Math.random(), Math.random()], Math.random());
                                    }
                                    else {
                                        target.damage();
                                        event.finish();
                                    }
                                    'step 2'
                                    target.disableEquip(result.links[0][2]);
                                    game.log(target, '被废除了', result.links[0][2]);
                                },
                                ai: {
                                    threaten: 1.3,
                                    result: {
                                        target: function (player, target) {
                                            return -target.countCards('he');;
                                        },
                                    },
                                    order: 9,
                                },
                            },
                            "huoying_wuchen": {
                                audio: "ext:火影忍者:2",
                                forced: true,
                                trigger: {
                                    player: "damageBegin",
                                },
                                filter: function (event, player) {
                                    return player.countCards('h') < 1;
                                },
                                content: function () {
                                    var chat = ['做人要低调，无声无息，方能闷声发大财', '快让感知型忍者感知我，否则你死定了'].randomGet();
                                    player.say(chat);
                                    //player.node.name.innerHTML = '';
                                    //player.update();
                                    trigger.cancel();
                                    //event.finish();
                                },
                                ai: {
                                    notrick: true,
                                    nosha: true,
                                    noh: true,
                                    skillTagFilter: function (player, tag) {
                                        if (tag == 'noh') {
                                            if (player.countCards('h') != 1) return false;
                                        }
                                    },
                                    effect: {
                                        target: function (card, player, target, current) {
                                            if (get.type(card) == 'trick' && get.tag(card, 'damage')) {
                                                return 'zeroplayertarget';
                                            }
                                        },
                                    },
                                },
                            },
                            "huoying_rexianshu": {
                                audio: "ext:火影忍者:2",
                                forced: true,
                                srlose: true,
                                trigger: {
                                    player: "loseEnd",
                                },
                                filter: function (event, player) {
                                    if (player.countCards('h') > 0) return false;
                                    for (var i = 0; i < event.cards.length; i++) {
                                        if (event.cards[i].original == 'h') return true;
                                    }
                                    return false;
                                },
                                content: function () {
                                    if (player.isHealthy()) {
                                        player.draw();
                                    } else {
                                        player.recover();
                                    }
                                },
                                ai: {
                                    threaten: 0.8,
                                    effect: {
                                        target: function (card, player, target) {
                                            if (target.countCards('h') == 1 && card.name == 'guohe') return 0.5;
                                            if (target.isTurnedOver() && target.countCards('h') == 1 && (card.name == 'guohe' || card.name == 'shunshou')) return -5;
                                        },
                                    },
                                    noh: true,
                                },
                            },
                            "huoying_shunsheng": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    player: "phaseEnd",
                                },
                                forced: true,
                                content: function () {
                                    var chat = ['老虎不发威，当老子是病猫是吧？——瞬身之术', '我的瞬身之术没有实体，但同时又可以说所有的都是实体'].randomGet();
                                    player.say(chat);
                                    var list = game.filterPlayer(function (target) {
                                        return target != player;
                                    });
                                    if (list.length) {
                                        var target = list.randomGet();
                                        game.swapSeat(player, target);
                                    }
                                },
                            },

                            "huoying_reshouhu": {
                                //mode:["identity"],
                                audio: "ext:火影忍者:2",
                                enable: "phaseUse",
                                unique: true,
                                limited: true,
                                changeControl: true,
                                changePlayer: true,
                                init: function (player) {
                                    player.storage.huoying_reshouhu = false;
                                },
                                intro: {
                                    content: "limited",
                                },
                                filterTarget: function (card, player, target) {
                                    return player != target && player.identity != 'zhu' && target.identity != 'zhu';
                                },
                                content: function () {
                                    'step 0'
                                    var chat = ['在黑暗中维护和平的无名忍者，才称得上忍者', '替我保护村子，还有宇智波的名号'].randomGet();
                                    player.say(chat);
                                    player.storage.huoying_reshouhu = true;
                                    //player.$skill('别天神', 'fire', 'red', 'avatar');
                                    //var target=result.targets[0];
                                    var cards = player.getCards('h');
                                    player.$give(cards, target);
                                    target.gain(cards, player);
                                    player.logSkill('huoying_reshouhu', target);
                                    game.delay(0.5);
                                    'step 1'
                                    game.swapControl(target);
                                    // game.swapControl(player,target);     
                                    if (get.mode() == 'identity') {
                                        var myid = player.identity;
                                        target.identity = myid;
                                        target.setIdentity();
                                    }
                                    player.awakenSkill('huoying_reshouhu');
                                    player.die();
                                },
                                ai: {
                                    order: 5,
                                    threaten: 0.8,
                                    result: {
                                        target: function (player, target) {
                                            if (player.hp > 2) return 0;
                                            return -target.countCards('he');
                                        },
                                        player: function (player, target) {
                                            if (player.hp < 3) return 1;
                                            return 0;
                                        },
                                    },
                                },
                            },
                            "huoying_linghua": {
                                audio: "ext:火影忍者:2",
                                enable: "phaseUse",
                                usable: 1,
                                unique: true,
                                //limited: true,
                                changeControl: true,
                                changePlayer: true,
                                //intro: {
                                //content: "limited",
                                //},
                                filter: function (event, player) {
                                    return player.countCards('h', { type: 'basic' }) > 0;
                                },
                                filterTarget: function (card, player, target) {
                                    return player != target;
                                },
                                filterCard: {
                                    type: "basic",
                                },
                                check: function (card) {
                                    return 7 - get.value(card);
                                },
                                derivation: ['huoying_huihun'],
                                content: function () {
                                    'step 0'
                                    var chat = ['灵化之术！！！', '借你的身体用一阵子'].randomGet();
                                    player.say(chat);
                                    player.$fullscreenpop('灵化之术', 'water');
                                    target.damage();
                                    target.addSkill('huoying_huihun');
                                    target.storage.huoying_huihun = player;
                                    player.removeSkill('huoying_linghua');
                                    game.swapPlayer(target);
                                    //game.swapPlayer(player,target);   
                                    'step 1'
                                    var evt = _status.event.getParent('phase');
                                    if (evt) {
                                        game.resetSkills();
                                        _status.event = evt;
                                        _status.event.finish();
                                        _status.event.untrigger(true);
                                    }
                                },
                                mod: {
                                    globalTo: function (from, to, distance) {
                                        return distance + to.hp;
                                    },
                                },
                                ai: {
                                    order: 5,
                                    result: {
                                        target: function (player, target) {
                                            return -target.countCards('h');
                                        },
                                    },
                                },
                            },

                            "huoying_huihun": {
                                audio: "ext:火影忍者:2",
                                unique: true,
                                trigger: {
                                    player: "phaseEnd",
                                },
                                forced: true,
                                silent: true,
                                onremove: true,
                                changePlayer: true,
                                changeControl: true,
                                filter: function (event, player) {
                                    return player.storage.huoying_huihun && player.storage.huoying_huihun.isIn();
                                },
                                content: function () {
                                    var chat = ['灵化之术————归位！！！', '终于回来了，刚才真危险啊！'].randomGet();
                                    player.say(chat);
                                    var target = player.storage.huoying_huihun;
                                    //var target=game.findPlayer(function(current){
                                    //   return current.name=='huoying_duan';
                                    //    });
                                    //player.line(target,'green');                  
                                    target.addSkill('huoying_linghua');
                                    game.swapPlayer(target);
                                    player.removeSkill('huoying_huihun');
                                },
                            },

                            "huoying_aiyuan": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    global: ["loseHpEnd", "loseMaxHpEnd", "damageEnd"],
                                },
                                filter: function (event, player) {
                                    return player != event.player;
                                },
                                check: function (event, player) {
                                    return get.attitude(player, event.player) > 0;
                                },
                                content: function () {
                                    game.asyncDraw([player, trigger.player]);
                                },
                                ai: {
                                    expose: 0.1,
                                },
                            },

                            "huoying_jiaoji": {
                                trigger: {
                                    player: "damageEnd",
                                    source: "damageEnd",
                                },
                                usable: 1,
                                filter: function (event, player) {
                                    return event.num > 0;
                                },
                                forced: true,
                                audio: "ext:火影忍者:2",
                                content: function () {
                                    player.chooseDrawRecover(get.prompt('huoying_jiaoji')).set('logSkill', 'huoying_jiaoji');
                                    var chat = ['我的大屌……噢，不好意思，刚才不小心瞎说大实话了……是我的大刀早已饥渴难耐了', '我的鲛肌能为我补充查克拉'].randomGet();
                                    player.say(chat);
                                },
                            },
                            "huoying_shuilao": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    global: "phaseBegin",
                                },
                                check: function (event, player) {
                                    if (get.attitude(player, event.player) > 0) return 0;
                                    if (get.attitude(player, event.player) < 0) {
                                        var cards = player.getCards('h');
                                        if (cards.length > player.hp) return true;
                                        for (var i = 0; i < cards.length; i++) {
                                            var useful = get.useful(cards[i]);
                                            if (useful < 5) return true;
                                            if (cards[i].number > 9 && useful < 7) return true;
                                        }
                                    }
                                    return false;
                                },
                                logTarget: "player",
                                filter: function (event, player) {
                                    return event.player != player && player.canCompare(event.player) && player.countCards('h') > 0 && event.player.countCards('h') > 0;
                                },
                                content: function () {
                                    'step 0'
                                    player.chooseToCompare(trigger.player);
                                    'step 1'
                                    if (result.bool) {
                                        var chat = ['给我老实呆着吧，水遁•水牢之术', '同为雾忍村忍者，却要残杀同伴，我究竟算什么人？目的是什么？唯一的切身体会只有虚假'].randomGet();
                                        player.say(chat);
                                        trigger.player.addTempSkill('zishou2');
                                    }
                                },
                                ai: {
                                    order: 6,
                                },
                            },
                            "huoying_jiaodan": {
                                audio: "ext:火影忍者:3",
                                enable: "phaseUse",
                                usable: 1,
                                /*filter: function (event, player) {
                                    return player.hasSkill('huoying_jiaodan2') == false;
                                },*/
                                filterCard: function () {
                                    if (ui.selected.targets.length) return false;
                                    return true;
                                },
                                position: "he",
                                selectCard: [1, Infinity],
                                complexSelect: true,
                                complexCard: true,
                                filterTarget: function (card, player, target) {
                                    return target != player && ui.selected.cards.length == target.hp;
                                },
                                check: function (card) {
                                    switch (ui.selected.cards.length) {
                                        case 0: return 7 - get.value(card);
                                        case 1: return 6 - get.value(card);
                                        case 2: return 3 - get.value(card);
                                        default: return 0;
                                    }
                                },
                                content: function () {
                                    'step 0'
                                    var chat = ['不吹不黑，忍刀七人众里，我最牛逼', '吃我一招，水遁•水鲛弹之术', '对手越强大，我就会变得更强大，不会疲倦也不会倒下'].randomGet();
                                    player.say(chat);
                                    player.addSkill('huoying_jiaodan2');
                                    target.damage();
                                    'step 1'
                                    if (!player.hasSkill('huoying_jiaodan2')) {
                                        player.draw();
                                    }
                                    else {
                                        player.removeSkill('huoying_jiaodan2');
                                    }
                                },
                                ai: {
                                    order: 2,
                                    result: {
                                        target: function (player, target) {
                                            return -target.hp;
                                        },
                                    },
                                    threaten: 1.5,
                                    expose: 0.3,
                                },
                            },
                            "huoying_jiaodan2": {
                                audio: "ext:火影忍者:1",
                                trigger: {
                                    global: "dying",
                                },
                                priority: 15,
                                silent: true,
                                filter: function (event, player) {
                                    return event.reason && event.reason.getParent().name == 'huoying_jiaodan';
                                },
                                content: function () {
                                    player.removeSkill('huoying_jiaodan2');
                                },
                                forced: true,
                                popup: false,
                            },
                            "huoying_lianhua": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    player: "phaseDrawBegin",
                                },
                                forced: true,
                                content: function () {
                                    var chat = ['我要贯彻我的忍道：只要努力，即使不会忍术也能打败天才！', '这招本来是为了打败宁次而准备的，今天破例让你见识见识'].randomGet();
                                    player.say(chat);
                                    trigger.num = Math.min(Math.max(2, game.roundNumber), 6);
                                },
                                ai: {
                                    threaten: 1.5,
                                },
                                /*mod: {
                                    maxHandcard: function (player, num) {
                                        if (player.hp < player.maxHp) return num + player.maxHp - player.hp;
                                    },
                                },*/
                            },
                            "huoying_xuanfeng": {
                                charlotte: true,
                                onremove: true,
                                trigger: {
                                    player: "shaBegin",
                                },
                                forced: true,
                                audio: "ext:火影忍者:2",
                                content: function () {
                                    //game.playhyrz(['huoying_xuanfeng1', 'huoying_xuanfeng2'].randomGet());
                                },
                                mod: {
                                    //cardUsable: function (card, player, num) {
                                    //if (card.name == 'sha') return num + Math.min(game.roundNumber, 6);
                                    //},
                                    attackFrom: function (from, to, distance) {
                                        return distance - Math.min(game.roundNumber, 6);
                                    },
                                    selectTarget: function (card, player, range) {
                                        if (card.name == 'sha' && range[1] != -1) range[1] += Math.min(game.roundNumber, 6);
                                    },
                                },
                            },

                            "huoying_leidun": {
                                audio: "ext:火影忍者:1",
                                trigger: {
                                    global: "gameDrawAfter",
                                    player: 'enterGame',
                                },
                                forced: true,
                                unique: true,
                                content: function () {
                                    var chat = ['这里是哪里？我怎么会在这？', '老子当年曾肉搏单挑八尾尾兽，也曾以一敌万'].randomGet();
                                    player.say(chat);
                                    for (var i = 0; i < game.players.length; i++) {
                                        if (game.players[i] == player) continue;
                                        var num = game.players[i].maxHp;
                                        var num2 = Math.floor(num / 2);
                                        player.maxHp += num2;
                                    }
                                    player.hp = player.maxHp;
                                    player.update();
                                },
                                ai: {
                                    threaten: 0.8,
                                },
                            },

                            "huoying_yingfu3": {
                                mark: 'card',
                                marktext: '缚',
                                intro: {
                                    content: 'card'
                                },
                                mod: {
                                    cardEnabled: function (card, player) {
                                        if (!player.isLinked() || player.hasSkill('huoying_yingfu2')) return;
                                        var type, players = game.filterPlayer();
                                        for (var i = 0; i < players.length; i++) {
                                            if (players[i].hasSkill('huoying_yingfu2')) {
                                                type = players[i].storage.huoying_yingfu2;
                                            }
                                        }
                                        if (type && get.type(card) == type) return false;
                                    },
                                    cardUsable: function (card, player) {
                                        if (!player.isLinked() || player.hasSkill('huoying_yingfu2')) return;
                                        var type, players = game.filterPlayer();
                                        for (var i = 0; i < players.length; i++) {
                                            if (players[i].hasSkill('huoying_yingfu2')) {
                                                type = players[i].storage.huoying_yingfu2;
                                            }
                                        }
                                        if (type && get.type(card) == type) return false;
                                    },
                                    cardRespondable: function (card, player) {
                                        if (!player.isLinked() || player.hasSkill('huoying_yingfu2')) return;
                                        var type, players = game.filterPlayer();
                                        for (var i = 0; i < players.length; i++) {
                                            if (players[i].hasSkill('huoying_yingfu2')) {
                                                type = players[i].storage.huoying_yingfu2;
                                            }
                                        }
                                        if (type && get.type(card) == type) return false;
                                    },
                                    cardSavable: function (card, player) {
                                        if (!player.isLinked() || player.hasSkill('huoying_yingfu2')) return;
                                        var type, players = game.filterPlayer();
                                        for (var i = 0; i < players.length; i++) {
                                            if (players[i].hasSkill('huoying_yingfu2')) {
                                                type = players[i].storage.huoying_yingfu2;
                                            }
                                        }
                                        if (type && get.type(card) == type) return false;
                                    }
                                },
                            },
                            "huoying_yingfu2": {
                                mark: 'card',
                                marktext: '影',
                                intro: {
                                    content: 'card'
                                },
                            },
                            "huoying_yingfu": {
                                trigger: {
                                    player: "phaseUseBegin",
                                },
                                audio: "ext:火影忍者:2",
                                unique: true,
                                forceunique: true,
                                direct: true,
                                group: 'huoying_yingfu2',
                                global: 'huoying_yingfu3',
                                content: function () {
                                    'step 0'
                                    //var list = ['basic', 'trick', 'equip', 'delay'];
                                    //const list = ["basic", "trick", "equip"].map(i => `caoying_${i}`);
                                    const list = ["basic", "trick", "equip"].map(type => ["", "", "caoying_" + type]);
                                    /*for (var i = 0; i < list.length; i++) {
                                        list[i] = [get.translation(list[i]), '', list[i]];
                                    }*/
                                    player.chooseButton(get.prompt('huoying_yingfu'), true, [[list, 'vcard']]).set('filterButton', function (button) {
                                        return true;
                                    }).set('ai', function (button) {
                                        switch (button.link[2].slice(8)) {
                                            case 'basic': return 4 + 3 * Math.random();
                                            case 'trick': return 3 + 3 * Math.random();
                                            case 'equip': return 2 + 3 * Math.random();
                                            default: return 3 * Math.random();
                                        }
                                    }).set('rand', [Math.random(), Math.random()], Math.random());
                                    'step 1'
                                    if (result.bool) {
                                        //player.storage.huoying_yingfu2 = result.links[0][2];
                                        player.storage.huoying_yingfu2 = result.links[0][2].slice(8);
                                        player.popup(result.links[0][2].slice(8), 'soil');
                                        player.logSkill('huoying_yingfu');
                                        player.say(['影子模仿术，成功', '真麻烦！'].randomGet());
                                        game.log(player, '选择了', '' + get.translation(result.links[0][2].slice(8)));
                                    }
                                },
                                ai: {
                                    order: 8,
                                },
                            },
                            "huoying_zhimou": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    global: 'phaseUseBegin',
                                },
                                check: function (event, player) {
                                    return get.attitude(player, event.player) <= 0;
                                },
                                filter: function (event, player) {
                                    return player != event.player && event.player.countCards('h') && !event.player.isLinked();
                                },
                                prompt: function (event, player) {
                                    return '是否猜测' + get.translation(event.player) + '手牌中的花色数？';
                                },
                                content: function () {
                                    /*
                                    'step 0'
                                    var cards = trigger.player.getCards('h');
                                    var suits = [];
                                    for (var i = 0; i < cards.length; i++) {
                                        if (!suits.contains(get.suit(cards[i]))) {
                                            suits.push(get.suit(cards[i]));
                                        }
                                    }
                                    event.suitnum = suits.length;                                    
                                    player.say(['女人心，海底针', '女孩子的心思好难猜！'].randomGet());
                                    'step 1'
                                    player.chooseControl().set('choiceList', ['一种', '两种', '三种', '四种']).set('ai', function () {
                                        if (trigger.player.countCards('h') == 1 || trigger.player.countCards('h') > 3) return 0;
                                        if (player.countCards('h')<3&&trigger.player.countCards('h') == 2) return 1;
                                        if (player.countCards('h')<3&&trigger.player.countCards('h') == 3) return 2;                                                                            
                                        return Math.random();
                                    });
                            'step 2'
                            if (result.index == 0) {
                                game.log(player, '选择了' + get.translation(result.control));
                                player.popup(result.control);
                                if(event.suitnum == 1){
                                    var cards = trigger.player.getCards('he').randomGet();
                                    trigger.player.$give(cards, player);
                                    player.gain(cards, trigger.player);
                                }else{
                                    trigger.player.link(true);
                                }        
                            }
                            else if (result.index == 1) {
                                game.log(player, '选择了' + get.translation(result.control));
                                        player.popup(result.control);
                                if(event.suitnum == 2){
                                    var cards = trigger.player.getCards('he').randomGet();
                                    trigger.player.$give(cards, player);
                                    player.gain(cards, trigger.player);
                                }else{
                                    trigger.player.link(true);
                                }        
                            }
                            else if (result.index == 2) {
                                game.log(player, '选择了' + get.translation(result.control));
                                        player.popup(result.control);
                                if(event.suitnum == 3){
                                    var cards = trigger.player.getCards('he').randomGet();
                                    trigger.player.$give(cards, player);
                                    player.gain(cards, trigger.player);
                                }else{
                                    trigger.player.link(true);
                                }        
                            }
                            else if (result.index == 3) {
                                game.log(player, '选择了' + get.translation(result.control));
                                        player.popup(result.control);
                                if(event.suitnum == 4){
                                    var cards = trigger.player.getCards('he').randomGet();
                                    trigger.player.$give(cards, player);
                                    player.gain(cards, trigger.player);
                                }else{
                                    trigger.player.link(true);
                                }        
                            }
                            */
                                    //旧写法:
                                    'step 0'
                                    var list = ['一种', '两种', '三种', '四种'];
                                    var cards = trigger.player.getCards('h');
                                    var suits = [];
                                    for (var i = 0; i < cards.length; i++) {
                                        if (!suits.contains(get.suit(cards[i]))) {
                                            suits.push(get.suit(cards[i]));
                                        }
                                    }
                                    event.suitnum = suits.length;
                                    if (list) {
                                        player.chooseControl(list).set('ai', function () {
                                            if (trigger.player.countCards('h') == 1 || trigger.player.countCards('h') > 4) return '一种';
                                            if (player.countCards('h') < 3 && trigger.player.countCards('h') == 2) return ['一种', '两种'].randomGet();
                                            if (player.countCards('h') < 3 && trigger.player.countCards('h') == 3) return ['两种', '三种'].randomGet();
                                            return list.randomGet();
                                        }
                                        ).set('prompt', get.prompt('huoying_zhimou')).set('prompt2', get.translation('huoying_zhimou_info'));
                                    }
                                    else event.finish();
                                    'step 1'
                                    if (result.control) {
                                        game.log(player, '选择了' + get.translation(result.control));
                                        player.popup(result.control);
                                        event.choice = result.control;
                                        player.say(['女人心，海底针', '女孩子的心思好难猜！'].randomGet());
                                    }
                                    else {
                                        event.finish();
                                    }
                                    'step 2'
                                    if (event.choice == '一种' && event.suitnum == 1) {
                                        var cards = trigger.player.getCards('he').randomGet();
                                        trigger.player.$give(cards, player);
                                        player.gain(cards, trigger.player);
                                    }
                                    else if (event.choice == '一种' && event.suitnum != 1) {
                                        trigger.player.link(true);
                                    }
                                    else if (event.choice == '两种' && event.suitnum == 2) {
                                        var cards = trigger.player.getCards('he').randomGet();
                                        trigger.player.$give(cards, player);
                                        player.gain(cards, trigger.player);
                                    }
                                    else if (event.choice == '两种' && event.suitnum != 2) {
                                        trigger.player.link(true);
                                    }
                                    else if (event.choice == '三种' && event.suitnum == 3) {
                                        var cards = trigger.player.getCards('he').randomGet();
                                        trigger.player.$give(cards, player);
                                        player.gain(cards, trigger.player);
                                    }
                                    else if (event.choice == '三种' && event.suitnum != 3) {
                                        trigger.player.link(true);
                                    }
                                    else if (event.choice == '四种' && event.suitnum == 4) {
                                        var cards = trigger.player.getCards('he').randomGet();
                                        trigger.player.$give(cards, player);
                                        player.gain(cards, trigger.player);
                                    }
                                    else if (event.choice == '四种' && event.suitnum != 4) {
                                        trigger.player.link(true);
                                    }
                                },
                                ai: {
                                    order: 5,
                                },
                            },
                            "huoying_kuilei": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    player: ["phaseBegin", "phaseEnd"],
                                },
                                forced: true,
                                popup: false,
                                silent: true,
                                unique: true,
                                filter: function (event, player) {
                                    return game.dead.length > 0;
                                },
                                content: function () {
                                    'step 0'
                                    player.say(['永恒的，才是艺术', '下一个艺术品，就是你了'].randomGet());
                                    var list = [];
                                    for (var i = 0; i < game.dead.length; i++) {
                                        list.push(game.dead[i].name);
                                    }
                                    player.chooseButton(ui.create.dialog('选择获得一名已阵亡的角色的技能', [list, 'character']), function (button) {
                                        return Math.random();
                                    });
                                    'step 1'
                                    if (result.bool) {
                                        player.logSkill('huoying_kuilei', result.links[0]);
                                        player.unmark(player.storage.huoying_kuilei + '_charactermark');
                                        var name = result.links[0];
                                        var list = [];
                                        var skills = lib.character[name][3];
                                        for (var j = 0; j < skills.length; j++) {
                                            //var info = get.info(skills[i]);
                                            if (lib.translate[skills[j] + '_info'] && lib.skill[skills[j]]) {
                                                list.push(skills[j]);
                                            }
                                        }
                                        player.addAdditionalSkill('huoying_kuilei', list);
                                        player.markCharacter(name, null, true, true);
                                        game.addVideo('markCharacter', player, {
                                            name: '傀儡之术',
                                            content: '',
                                            id: 'huoying_kuilei',
                                            target: name,
                                        });
                                        player.storage.huoying_kuilei = name;
                                    }
                                },
                            },
                            "huoying_shayu": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    player: "loseEnd",
                                },
                                frequent: true,
                                filter: function (event, player) {
                                    for (var i = 0; i < event.cards.length; i++) {
                                        if (event.cards[i].original == 'e') return true;
                                    }
                                    return false;
                                },
                                content: function () {
                                    'step 0'
                                    player.chooseControl('弃牌', '摸牌', 'cancel2', function () {
                                        if (player.countCards('h') > 2) {
                                            return '弃牌';
                                        }
                                        if (player.countCards('h') < 3) {
                                            return '摸牌';
                                        }
                                        return 'cancel2';
                                    });
                                    'step 1'
                                    if (result.control == '弃牌') {
                                        var chat = ['傀儡师本来就适合远距离作战', '我竟然与一个老太婆和一个小女孩纠缠那么久，真是的'].randomGet();
                                        player.say(chat);
                                        event.goto(2);
                                    }
                                    else if (result.control == '摸牌') {
                                        var chat = ['让你见识下三代风影的砂铁时雨之术', '三代风影曾号称最强风影，也是我最得意的傀儡'].randomGet();
                                        player.say(chat);
                                        var num = 0;
                                        for (var i = 0; i < trigger.cards.length; i++) {
                                            if (trigger.cards[i].original == 'e') num += 1;
                                        }
                                        player.draw(num);
                                        event.finish();
                                    }
                                    'step 2'
                                    if (player.isAlive()) {
                                        player.chooseTarget('是否弃置一名角色的一张牌？', function (card, player, target) {
                                            return player != target && target.countCards('he') > 0;
                                        }).set('ai', function (target) {
                                            return get.attitude(player, target) <= 0;
                                        });
                                    }
                                    else {
                                        event.finish();
                                    }
                                    'step 3'
                                    if (result.bool) {
                                        player.line(result.targets, 'green');
                                        player.discardPlayerCard(result.targets[0], 'he', true).ai = get.buttonValue;
                                    }
                                },
                                ai: {
                                    order: 7,
                                    noe: true,
                                    reverseEquip: true,
                                    effect: {
                                        target: function (card, player, target, current) {
                                            if (get.type(card) == 'equip') return [1, 3];
                                        },
                                    },
                                },
                            },
                            "huoying_baiji": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    player: "damageEnd",
                                    source: "damageEnd",
                                },
                                frequent: true,
                                content: function () {
                                    "step 0"
                                    var list1 = [], list2 = [];
                                    for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                                        var type = get.type(ui.cardPile.childNodes[i]);
                                        if (type == 'equip') {
                                            list1.push(ui.cardPile.childNodes[i]);
                                        }
                                    }
                                    for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
                                        var type = get.type(ui.discardPile.childNodes[i]);
                                        if (type == 'equip') {
                                            list2.push(ui.discardPile.childNodes[i]);
                                        }
                                    }
                                    player.chooseCardButton(get.prompt('huoying_baiji'), list1.concat(list2)).set('filterButton', function (button) {
                                        return true;
                                    }).set('ai', function (button) {
                                        switch (button.link.name) {
                                            case 'tengjia': return 0;
                                            case 'bagua': return 9 + 23 * Math.random();
                                            case 'renwang': return 10 + 23 * Math.random();
                                            case 'dilu': return 6 + 23 * Math.random();
                                            case 'dawan': return 4 + 23 * Math.random();
                                            case 'cixiong': return 4.5 + 23 * Math.random();
                                            case 'qinggang': return 5 + 23 * Math.random();
                                            case 'qinglong': return 5 + 23 * Math.random();
                                            case 'guding': return 5 + 23 * Math.random();
                                            case 'baiyin': return 6 + 23 * Math.random();
                                            case 'chitu': return 4 + 23 * Math.random();
                                            case 'fangtian': return 4 + 23 * Math.random();
                                            case 'guanshi': return 6 + 23 * Math.random();
                                            case 'hanbing': return 3.5 + 23 * Math.random();
                                            case 'hualiu': return 5.5 + 23 * Math.random();
                                            case 'jueying': return 6 + 23 * Math.random();
                                            case 'muniu': return 5 + 23 * Math.random();
                                            case 'qilin': return 5 + 23 * Math.random();
                                            case 'zhangba': return 5.5 + 23 * Math.random();
                                            case 'zhuge': return 4 + 23 * Math.random();
                                            case 'zhuahuang': return 6 + 23 * Math.random();
                                            case 'zhuque': return 5 + 23 * Math.random();
                                            case 'zixin': return 4 + 23 * Math.random();
                                            default: return 23 * Math.random();
                                        }
                                    }).set('rand', [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()], Math.random());
                                    "step 1"
                                    if (result.bool) {
                                        player.useCard(result.links[0], player);
                                        player.say(['我曾用这个术，毁灭一个国家！', '赤秘技•百机操演'].randomGet());
                                    }
                                    else {
                                        event.finish();
                                    }
                                },
                                ai: {
                                    order: 6,
                                    maixie: true,
                                    threaten: 1.3,
                                },
                            },
                            "huoying_shuidun": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    global: "damageBefore",
                                },
                                filter: function (event, player) {
                                    return event.nature == 'fire';
                                },
                                check: function (event, player) {
                                    return get.attitude(player, event.player) > 0;
                                },
                                content: function () {
                                    var chat = ['大禹也治不了我的水遁。让你见识一下木叶村第一水逼的厉害', '我不是针对谁，我是说……在座的各位，都是垃圾！'].randomGet();
                                    player.say(chat);
                                    trigger.cancel();
                                },
                                ai: {
                                    nofire: true,
                                    effect: {
                                        target: function (card, player, target, current) {
                                            if (get.tag(card, 'fireDamage')) return 0;
                                        },
                                    },
                                },
                            },
                            "huoying_yiliao": {
                                trigger: {
                                    global: "dying",
                                },
                                priority: 6,
                                audio: "ext:火影忍者:2",
                                filter: function (event, player) {
                                    return event.player.hp <= 0 && event.player.countCards('he') > 0;
                                },
                                check: function (event, player) {
                                    return get.attitude(player, event.player) > 0;
                                },
                                prompt: function (event, player, target) {
                                    return '是否对' + get.translation(event.player) + '发动〖医疗〗？';
                                },
                                content: function () {
                                    'step 0'
                                    var chat = ['趁你病，要你命', '你不能死，有我在，我绝不会让你轻易死的', '你的梦想就要实现了，要给我坚持住！'].randomGet();
                                    player.say(chat);
                                    var check;
                                    if (trigger.player.isUnderControl(true, player)) {
                                        check = player.hasCard(function (card) {
                                            return get.type(card) == 'equip';
                                        });
                                    }
                                    else {
                                        check = (get.attitude(player, trigger.player) > 0);
                                    }
                                    player.choosePlayerCard(trigger.player, get.prompt('huoying_yiliao', trigger.player), 'he').set('ai', function (button) {
                                        if (!_status.event.check) return 0;
                                        if (_status.event.target.isUnderControl(true, _status.event.player)) {
                                            if (get.type(button.link) == 'equip') {
                                                return 10 - get.value(button.link);
                                            }
                                            return 0;
                                        }
                                        else {
                                            return Math.random();
                                        }
                                    }).set('check', check).set('filterButton', function (button) {
                                        if (_status.event.player == _status.event.target) {
                                            return lib.filter.cardDiscardable(button.link, _status.event.player);
                                        }
                                        return true;
                                    });
                                    'step 1'
                                    if (result.bool) {
                                        player.logSkill('huoying_yiliao', trigger.player);
                                        event.card = result.links[0];
                                        player.showCards([event.card], get.translation(player) + '展示的手牌');
                                    }
                                    else {
                                        event.finish();
                                    }
                                    'step 2'
                                    if (get.type(event.card) == 'equip') {
                                        trigger.player.recover(1 - trigger.player.hp);
                                        trigger.player.discard(event.card);
                                    }
                                    else {
                                        player.gain(event.card);
                                    }
                                },
                                ai: {
                                    save: true,
                                    threaten: 1.4,
                                    order: 9,
                                    result: {
                                        player: function (player) {
                                            if (player.hp < 1) return 10;

                                        },
                                    },
                                },
                            },

                            "huoying_baoli": {
                                audio: "ext:火影忍者:2",
                                enable: "phaseUse",
                                usable: 1,
                                filterTarget: function (card, player, target) {
                                    return player.canCompare(target) && player != target && target.countCards('h') > 0;
                                },
                                filter: function (event, player) {
                                    return player.countCards('h') > 0;
                                },
                                content: function () {
                                    'step 0'
                                    player.chooseToCompare(target);
                                    'step 1'
                                    if (result.bool) {
                                        var chat = ['我是纲手的弟子，力量与脾气一样大', '鸣人、佐助都玩拼点，怎能少了我？'].randomGet();
                                        player.say(chat);
                                        player.addTempSkill('huoying_baoli2', { player: 'phaseBefore' });
                                        player.addTempSkill('huoying_baoli3', { player: 'phaseBefore' });
                                    }
                                },
                                ai: {
                                    order: function (name, player) {
                                        var cards = player.getCards('h');
                                        if (player.countCards('h', 'sha') == 0) {
                                            return 1;
                                        }
                                        for (var i = 0; i < cards.length; i++) {
                                            if (cards[i].name != 'sha' && cards[i].number > 11 && get.value(cards[i]) < 7) {
                                                return 9;
                                            }
                                        }
                                        return get.order({ name: 'sha' }) - 1;
                                    },
                                    result: {
                                        player: function (player) {
                                            if (player.countCards('h', 'sha') > 0) return 0;
                                            var num = player.countCards('h');
                                            if (num > player.hp) return 0;
                                            if (num == 1) return -2;
                                            if (num == 2) return -1;
                                            return -0.7;
                                        },
                                        target: function (player, target) {
                                            return -target.countCards('h');
                                        },
                                    },
                                    threaten: 1.3,
                                },
                            },
                            "huoying_baoli2": {
                                audio: "ext:火影忍者:1",
                                trigger: {
                                    source: "damageBegin",
                                },
                                filter: function (event, player) {
                                    return event.card && event.card.isCard && (event.card.name == 'sha' || event.card.name == 'juedou') && event.notLink();
                                },
                                forced: true,
                                content: function () {
                                    var chat = ['颤抖吧！这是来自少女的力量', '女汉子，当自强'].randomGet();
                                    player.say(chat);
                                    trigger.num++;
                                },
                            },
                            "huoying_baoli3": {
                                audio: "ext:火影忍者:1",
                                trigger: {
                                    player: "shaBegin",
                                },
                                filter: function (event, player) {
                                    return event.target.countCards('he') > 0;
                                },
                                check: function (event, player) {
                                    return get.attitude(player, event.target) <= 0;
                                },
                                logTarget: "target",
                                content: function () {
                                    player.discardPlayerCard(trigger.target, 1, 'he', true);
                                },
                                ai: {
                                    threaten: 1.5,
                                },
                            },
                            "huoying_baofu1": {
                                audio: "ext:火影忍者:2",
                                usable: 1,
                                enable: "phaseUse",
                                filterTarget: function (card, player, target) {
                                    return player != target;
                                },
                                content: function () {
                                    var chat = ['放个炮仗庆贺一下', '互乘起爆符！'].randomGet();
                                    player.say(chat);
                                    target.damage('fire');
                                },
                                ai: {
                                    order: 4,
                                    result: {
                                        target: -1,
                                    },
                                },
                            },
                            "huoying_baofu2": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    global: "damageAfter",
                                },
                                direct: true,
                                filter: function (event, player) {
                                    return event.nature == 'fire' && player.countCards('he', { suit: 'diamond' }) > 0;
                                },
                                content: function () {
                                    'step 0'
                                    player.chooseCardTarget({
                                        filterCard: function (card) {
                                            return get.suit(card) == 'diamond';
                                        },
                                        filterTarget: function (card, player, target) {
                                            return get.distance(trigger.player, target) <= 1;
                                        },
                                        ai1: function (card) {
                                            return 6 - get.value(card);
                                        },
                                        ai2: function (target) {
                                            return get.damageEffect(target, player, player, 'fire');
                                        },
                                        position: 'he',
                                        prompt: '互乘起爆符之术：弃置一张方片牌对目标或与其距离为1以内的目标造成等量火焰伤害'
                                    });
                                    'step 1'
                                    if (result.bool) {
                                        var chat = ['炸死你哋呢班扑街烂坦', '这个禁术，我也是第一次亲自近距离使用'].randomGet();
                                        player.say(chat);
                                        player.logSkill('huoying_baofu2', result.targets[0], 'fire');
                                        player.discard(result.cards[0]);
                                        result.targets[0].damage('fire', trigger.num);
                                    }
                                },
                            },
                            "huoying_baofu": {
                                group: ["huoying_baofu1", "huoying_baofu2"],
                            },
                            "huoying_wuyin": {
                                audio: "ext:火影忍者:2",
                                forced: true,
                                marktext: "雾",
                                trigger: {
                                    player: "damageBefore",
                                },
                                filter: function (event, player) {
                                    return player.isTurnedOver();
                                },
                                content: function () {
                                    var chat = ['隐身于雾中，杀人于无形', '在这片大雾里，无影无踪，没人能发现我'].randomGet();
                                    player.say(chat);
                                    trigger.cancel();
                                    event.finish();
                                },
                                ai: {
                                    order: 5,
                                    effect: {
                                        target: function (card, player, target, current) {
                                            if (get.type(card) == 'trick' && get.tag(card, 'damage')) {
                                                return 'zeroplayertarget';
                                            }
                                        },
                                    },
                                },
                            },
                            "huoying_ansha": {
                                audio: "ext:火影忍者:2",
                                usable: 1,
                                srlose: true,
                                enable: "phaseUse",
                                filterTarget: function (card, player, target) {
                                    return player != target && target.countCards('he') > 0;
                                },
                                content: function () {
                                    //'step 0'
                                    //target.chooseToDiscard('he', true);
                                    player.discardPlayerCard(target, 'he', 1, true);
                                    var chat = ['早就看你不顺眼了', '来啊，来打我呀，不服气是吧？', '和我一起沉睡吧'].randomGet();
                                    player.say(chat);
                                    player.turnOver();
                                    target.turnOver();
                                    player.useCard({ name: 'sha' }, target, false);
                                    var chat = ['作为一名忍者，暗杀是一种手段，也是一种生存方式', '我叫桃地再不斩，以无声杀人术闻名于忍界'].randomGet();
                                    player.say(chat);
                                    //target.addTempSkill('fengyin');

                                    /*
                                    'step 1'
                                    player.chooseCardTarget({
                                        prompt: get.prompt('huoying_ansha'),
                                        ai1: function (card) {
                                            return 6 - get.value(card);
                                        },
                                        ai2: function (target) {
                                            return get.effect(target, { name: 'sha' }, player);
                                        },
                                        filterTarget: function (card, player, target) {
                                            return lib.filter.targetEnabled({ name: 'sha' }, player, target);
                                        },
                                    });
                                    'step 2'
                                    if (result.bool) {
                                        player.logSkill('huoying_ansha');
                                        player.discard(result.cards);
                                        player.useCard({ name: 'sha' }, result.targets, false);
                                        var chat = ['作为一名忍者，暗杀是一种手段，也是一种生存方式', '我叫桃地再不斩，以无声杀人术闻名于忍界'].randomGet();
                                        player.say(chat);
                                    }
                                    else {
                                        event.finish();
                                    }
                                    */
                                },
                                ai: {
                                    order: 9,
                                    threaten: 1.5,
                                    expose: 0.8,
                                    result: {
                                        target: function (player, target) {
                                            if (!target.isTurnedOver()) return -3.5;
                                            if (!target.isEmpty(2)) return -0.8;
                                            if (target.isTurnedOver() && get.attitude(player, target) > 0) return 4.5;
                                            return -1;
                                        },
                                    },
                                },
                            },
                            "huoying_reshuilao": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    global: "phaseBegin",
                                },
                                check: function (event, player) {
                                    if (get.attitude(player, event.player) < -2) {
                                        var cards = player.getCards('h');
                                        if (cards.length > player.hp) return true;
                                        for (var i = 0; i < cards.length; i++) {
                                            var useful = get.useful(cards[i]);
                                            if (useful < 5) return true;
                                            if (cards[i].number > 9 && useful < 7) return true;
                                        }
                                    }
                                    return false;
                                },
                                logTarget: "player",
                                filter: function (event, player) {
                                    return player.isTurnedOver() && event.player != player && player.canCompare(event.player) && player.countCards('h') > 0 && event.player.countCards('h') > 0;
                                },
                                content: function () {
                                    'step 0'
                                    player.chooseToCompare(trigger.player);
                                    'step 1'
                                    if (result.bool) {
                                        var chat = ['呼～终于恢复自由身，差点闷死自己', '给我老实呆着吧，水遁•水牢之术', '既然那么想进牢里，那就别想出来了'].randomGet();
                                        player.say(chat);
                                        player.turnOver();
                                        trigger.player.addTempSkill('zishou2');
                                    }
                                },
                                ai: {
                                    order: 6,
                                    result: {
                                        target: function (player, target) {
                                            return -target.countCards('h');
                                        },
                                    },
                                },
                            },
                            "huoying_huadie": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    source: "damageBegin",
                                },
                                forced: true,
                                filter: function (event, player) {
                                    return event.card && event.card.name == 'sha' && player.isMaxHandcard(true);
                                },
                                mod: {
                                    maxHandcard: function (player, num) {
                                        return num -= player.storage.huoying_beihua;
                                    },
                                },
                                content: function () {
                                    var chat = ['多少遍了？不要再说我肥', '不要抢走我的薯片'].randomGet();
                                    player.say(chat);
                                    trigger.num += player.storage.huoying_beihua;
                                },
                            },
                            "huoying_beihua": {
                                audio: "ext:火影忍者:2",
                                enable: "phaseUse",
                                usable: 3,
                                filter: function (event, player) {
                                    return player.isAlive();
                                },
                                init: function (player) {
                                    player.storage.huoying_beihua = 0;
                                },
                                group: ["huoying_beihua2"],
                                content: function () {
                                    'step 0'
                                    player.loseHp();
                                    player.storage.huoying_beihua++;
                                    event.cards = get.cards(2 * player.storage.huoying_beihua);
                                    player.showCards(event.cards);
                                    var chat = ['猥琐发育一发', '这叫强壮不是胖！再说胖子就揍死你'].randomGet();
                                    player.say(chat);
                                    'step 1'
                                    var num = 0;
                                    for (var i = 0; i < event.cards.length; i++) {
                                        if (get.suit(event.cards[i]) == 'club') {
                                            num++;
                                        }
                                    }
                                    if (num) {
                                        player.recover(num);
                                    }
                                    'step 2'
                                    if (event.cards.length) {
                                        player.gain(event.cards);
                                        player.$gain2(event.cards);
                                        game.delay(0.5);
                                    }
                                },
                                ai: {
                                    order: 6,
                                    result: {
                                        player: function (player) {
                                            var num = game.countPlayer(function (current) {
                                                return get.attitude(player, current) <= 0 && player.getAttackRange() > get.distance(player, current);
                                            });
                                            if (player.isDamaged() && num < 1) return 0;
                                            if (player.hp < 2 && !player.countCards('h', { name: ['tao', 'jiu'] })) return 0;
                                            if (player.countCards('h') < 2 * player.getHandcardLimit()) {
                                                return 1;
                                            }
                                            return 0.2;
                                        },
                                    },
                                },
                            },
                            "huoying_beihua2": {
                                trigger: {
                                    player: "phaseEnd",
                                },
                                silent: true,
                                content: function () {
                                    player.storage.huoying_beihua = 0;
                                },
                                forced: true,
                                popup: false,
                            },
                            "huoying_zhuanxin": {
                                audio: "ext:火影忍者:2",
                                enable: "phaseUse",
                                usable: 1,
                                changeControl: true,
                                skillAnimation: true,
                                animationStr: "心转心之术",
                                animationColor: 'fire',
                                filter: function (event, player) {
                                    return player.countCards('h', { suit: 'heart' }) > 0;
                                },
                                filterTarget: function (card, player, target) {
                                    return player != target;
                                },
                                filterCard: {
                                    suit: "heart",
                                },
                                check: function (card) {
                                    return 8 - get.value(card);
                                },
                                content: function () {
                                    var chat = ['心转心之术', '剩下的就让我来替你完成吧'].randomGet();
                                    player.say(chat);
                                    player.swapHandcards(target);

                                },
                                ai: {
                                    result: {
                                        target: function (player, target) {
                                            if (player.countCards('h') > target.countCards('h')) return 0;
                                            return -target.countCards('h');
                                        },
                                    },
                                    order: 8,
                                    threaten: 0.5,
                                },
                            },
                            "huoying_reyiliao": {
                                trigger: {
                                    global: "dying",
                                },
                                priority: 6,
                                audio: "ext:火影忍者:2",
                                filter: function (event, player) {
                                    return event.player.hp <= 0 && event.player.countCards('he') > 0;
                                },
                                prompt: function (event, player, target) {
                                    return '是否对' + get.translation(event.player) + '发动〖医疗〗？';
                                },
                                check: function (event, player) {
                                    return get.attitude(player, event.player) > 0;
                                },
                                content: function () {
                                    'step 0'
                                    var chat = ['趁你病，要你命', '你不能死，有我在，我绝不会让你轻易死的'].randomGet();
                                    player.say(chat);
                                    var check;
                                    if (trigger.player.isUnderControl(true, player)) {
                                        check = player.hasCard(function (card) {
                                            return get.type(card) == 'equip';
                                        });
                                    }
                                    else {
                                        check = (get.attitude(player, trigger.player) > 0);
                                    }
                                    player.choosePlayerCard(trigger.player, get.prompt('huoying_reyiliao', trigger.player), 'he').set('ai', function (button) {
                                        if (!_status.event.check) return 0;
                                        if (_status.event.target.isUnderControl(true, _status.event.player)) {
                                            if (get.type(button.link) == 'equip') {
                                                return 10 - get.value(button.link);
                                            }
                                            return 0;
                                        }
                                        else {
                                            return Math.random();
                                        }
                                    }).set('check', check).set('filterButton', function (button) {
                                        if (_status.event.player == _status.event.target) {
                                            return lib.filter.cardDiscardable(button.link, _status.event.player);
                                        }
                                        return true;
                                    });
                                    'step 1'
                                    if (result.bool) {
                                        player.logSkill('huoying_reyiliao', trigger.player);
                                        event.card = result.links[0];
                                        player.showCards([event.card], get.translation(player) + '展示的手牌');
                                    }
                                    else {
                                        event.finish();
                                    }
                                    'step 2'
                                    if (get.type(event.card) == 'equip') {
                                        trigger.player.recover(1 - trigger.player.hp);
                                        trigger.player.discard(event.card);
                                    }
                                    else {
                                        player.gain(event.card);
                                    }
                                },
                                ai: {
                                    save: true,
                                    threaten: 1.4,
                                    order: 9,
                                    result: {
                                        player: function (player) {
                                            if (player.hp < 1) return 10;

                                        },
                                    },
                                },
                            },

                            "huoying_yuanyu": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    source: "dieBegin",
                                },
                                forced: true,
                                popup: false,
                                silent: true,
                                unique: true,
                                filter: function (event, player) {
                                    return player.isAlive();
                                },
                                derivation: ['huoying_yuanyuwind', 'huoying_yuanyufire', 'huoying_yuanyuwater', 'huoying_yuanyusoil', 'huoying_yuanyuthunder'],
                                content: function () {
                                    'step 0'
                                    var chat = ['我跟初代火影PK过，能活到现在，就靠这个术', '你的这个心脏，从现在起，就是属于我的了'].randomGet();
                                    player.say(chat);
                                    trigger.player.storage.huoying_yuanyu = true;
                                    player.logSkill('huoying_yuanyu');
                                    var skill = trigger.player.skills.randomGet();
                                    if (skill != 'xu_jisha') {
                                        player.addSkill(skill);
                                        player.mark(skill, {
                                            name: get.translation(skill),
                                            content: lib.translate[skill + '_info']
                                        });
                                        game.log(player, '获得技能', '【' + get.translation(skill) + '】');
                                    }
                                    'step 1'
                                    if (player.maxHp < 5) {
                                        player.gainMaxHp();
                                    }
                                    player.recover();
                                    player.update();
                                    'step 2'
                                    if (trigger.player.group == 'wei' && !player.hasSkill('huoying_yuanyuwind')) {
                                        player.addSkill('huoying_yuanyuwind');
                                    }
                                    if (trigger.player.group == 'shu' && !player.hasSkill('huoying_yuanyufire')) {
                                        player.addSkill('huoying_yuanyufire');
                                    }
                                    if (trigger.player.group == 'wu' && !player.hasSkill('huoying_yuanyuwater')) {
                                        player.addSkill('huoying_yuanyuwater');
                                    }
                                    if (trigger.player.group == 'qun' && !player.hasSkill('huoying_yuanyusoil')) {
                                        player.addSkill('huoying_yuanyusoil');
                                    }
                                    if (trigger.player.group != 'wei' && trigger.player.group != 'shu' && trigger.player.group != 'wu' && trigger.player.group != 'qun' && !player.hasSkill('huoying_yuanyuthunder')) {
                                        player.addSkill('huoying_yuanyuthunder');
                                    }
                                    player.update();
                                },
                            },

                            "huoying_yuanyuwind": {
                                enable: "phaseUse",
                                mark: true,
                                unique: true,
                                intro: {
                                    content: "limited",
                                },
                                filterTarget: function (card, player, target) {
                                    return player != target;
                                },
                                multitarget: true,
                                multiline: true,
                                selectTarget: -1,
                                filter: function (event, player) {
                                    return player.isAlive();
                                },
                                check: function (event, player) {
                                    var num = game.countPlayer(function (current) {
                                        return (current.countCards('j') && current != player && get.attitude(player, current) > 0) || (current.countCards('he') && current != player && get.attitude(player, current) <= 0);
                                    });
                                    return num >= 2;
                                },
                                content: function () {
                                    'step 0'
                                    player.$fullscreenpop('风遁•压害', 'thunder');
                                    game.playhyrz(['huoying_zhongquan1', 'huoying_zhongquan2'].randomGet());
                                    var targets = game.filterPlayer();
                                    targets.remove(player);
                                    targets.sort(lib.sort.seat);
                                    event.targets = targets;
                                    event.num = 0;
                                    player.line(targets, 'green');
                                    'step 1'
                                    event.current = player.next;
                                    if (num < event.targets.length) {
                                        if (event.targets[num].countCards('hej')) {
                                            player.discardPlayerCard(event.targets[num], 'hej', true);
                                        }
                                        event.num++;
                                        event.redo();
                                    }
                                    'step 2'
                                    player.unmarkSkill('huoying_yuanyuwind');
                                    player.removeSkill('huoying_yuanyuwind');
                                },
                                ai: {
                                    order: 2,
                                    result: {
                                        player: 1,
                                    },
                                },
                            },
                            "huoying_yuanyusoil": {
                                mark: true,
                                unique: true,
                                trigger: {
                                    player: "damageBefore",
                                },
                                intro: {
                                    content: "limited",
                                },
                                filter: function (event, player) {
                                    return player.isAlive();
                                },
                                content: function () {
                                    player.$fullscreenpop('土遁•土矛', 'fire');
                                    game.playhyrz(['huoying_yuanyu1', 'huoying_yuanyu2'].randomGet());
                                    trigger.cancel();
                                    player.recover();
                                    player.unmarkSkill('huoying_yuanyusoil');
                                    player.removeSkill('huoying_yuanyusoil');
                                    event.finish();
                                },
                                ai: {
                                    threaten: 1.3,
                                },
                            },
                            "huoying_yuanyuwater": {
                                trigger: {
                                    player: "recoverBegin",
                                },
                                unique: true,
                                mark: true,
                                intro: {
                                    content: "limited",
                                },
                                content: function () {
                                    trigger.num += (player.maxHp - player.hp);
                                    player.draw();
                                    player.$fullscreenpop('水遁•水幕帐', 'water');
                                    game.playhyrz(['huoying_yuanyu1', 'huoying_yuanyu2'].randomGet());
                                    player.unmarkSkill('huoying_yuanyuwater');
                                    player.removeSkill('huoying_yuanyuwater');
                                },
                                ai: {
                                    threaten: 1.3,
                                },
                            },
                            "huoying_yuanyuthunder": {
                                enable: "phaseUse",
                                unique: true,
                                mark: true,
                                intro: {
                                    content: "limited",
                                },
                                filterTarget: function (card, player, target) {
                                    return player != target;
                                },
                                content: function () {
                                    player.$fullscreenpop('雷遁•伪暗', 'thunder');
                                    target.damage('thunder');
                                    target.turnOver(true);
                                    game.playhyrz(['huoying_zhongquan1', 'huoying_zhongquan2'].randomGet());
                                    player.unmarkSkill('huoying_yuanyuthunder');
                                    player.removeSkill('huoying_yuanyuthunder');
                                },
                                ai: {
                                    order: 4,
                                    result: {
                                        target: -1,
                                    },
                                },
                            },
                            "huoying_yuanyufire": {
                                enable: "phaseUse",
                                unique: true,
                                logTarget: "target",
                                selectTarget: [1, 5],
                                mark: true,
                                line: 'fire',
                                intro: {
                                    content: "limited",
                                },
                                filter: function (event, player) {
                                    return !player.storage.huoying_yuanyufire;
                                },
                                filterTarget: function (card, player, target) {
                                    return player != target;
                                },

                                content: function () {
                                    player.line(target);
                                    player.$fullscreenpop('火遁•头刻苦', 'fire');
                                    target.damage('fire');
                                    game.playhyrz(['huoying_zhongquan1', 'huoying_zhongquan2'].randomGet());
                                    player.unmarkSkill('huoying_yuanyufire');
                                    player.removeSkill('huoying_yuanyufire');
                                },
                                ai: {
                                    result: {
                                        target: function (player, target) {
                                            if (target.hp <= 1) return -3.5;
                                            return -2;
                                        },
                                    },
                                    order: 4,
                                    expose: 0.4,
                                },
                            },

                            "huoying_zhongquan": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    source: "damageBegin",
                                },
                                forced: true,
                                priority: 15,
                                filter: function (event, player) {
                                    return !player.isMaxHp();
                                },
                                content: function () {
                                    var chat = ['吃我一拳，看是你的骨头硬还是我的拳头硬', '点解？点解？点解要逼我出手？'].randomGet();
                                    player.say(chat);
                                    if (!player.isMaxHp()) {
                                        player.addTempSkill('unequip', 'shaAfter');
                                        trigger.num++;
                                    }
                                },
                                ai: {
                                    unequip: true,
                                    skillTagFilter: function (player, tag, arg) {
                                        if (arg && arg.name == 'sha') return true;
                                        return false;
                                    },
                                },
                            },

                            "huoying_newkuilei": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    player: "loseEnd",
                                },
                                priority: -5,
                                filter: function (event, player) {
                                    for (var i = 0; i < event.cards.length; i++) {
                                        if (event.cards[i].original == 'e') return true;
                                    }
                                    return false;
                                },
                                direct: true,
                                content: function () {
                                    'step 0'
                                    var check;
                                    var i, num = game.countPlayer(function (current) {
                                        return current != player && current.countCards('hj') && get.attitude(player, current) <= 0;
                                    });
                                    check = (num >= 1);
                                    player.chooseTarget(get.prompt('huoying_newkuilei'), [1, player.hp], function (card, player, target) {
                                        return target.countCards('hj') > 0 && player != target;
                                    }, function (target) {
                                        if (!target.countCards('j') && get.attitude(player, target) > 0) return 0;
                                        if (!_status.event.aicheck) return 0;
                                        var att = get.attitude(_status.event.player, target);
                                        if (target.hasSkill('tuntian')) return att / 10;
                                        return -get.attitude(player, target);
                                    }).set('aicheck', check);
                                    'step 1'
                                    if (result.bool) {
                                        var chat = ['中远距离作战，傀儡师最擅长了', '玩装备？得看看玩傀儡师的操作'].randomGet();
                                        player.say(chat);
                                        player.logSkill('huoying_newkuilei');
                                        event.targets = result.targets;
                                        event.num = 0;
                                    }
                                    else {
                                        event.finish();
                                    }
                                    'step 2'
                                    if (event.num < event.targets.length) {
                                        player.gainPlayerCard(event.targets[event.num], 'hj', true);
                                        event.num++;
                                        event.redo();
                                    }
                                    else {
                                        event.finish();
                                    }
                                },
                                ai: {
                                    noe: true,
                                    reverseEquip: true,
                                    effect: {
                                        target: function (card, player, target, current) {
                                            if (get.type(card) == 'equip') return [1, 3];
                                        },
                                    },
                                },
                            },
                            "huoying_huomeng": {
                                trigger: {
                                    player: "phaseEnd",
                                },
                                direct: true,
                                audio: "ext:火影忍者:2",
                                filter: function (event, player) {
                                    return player.countCards('e') > 0;
                                },
                                content: function () {
                                    'step 0'
                                    /*  player.chooseToDiscard(1,true,'e','请弃置一张装备区的牌').ai=function(card){
                                           return 7.6-get.equipValue(card);
                                       };   */
                                    //另一种写法：
                                    player.chooseCardButton('请弃置一张装备区的牌', player.getCards('e')).ai = function (button) {
                                        return 7.5 - get.value(button.link);
                                    }

                                    'step 1'
                                    if (result.bool) {
                                        player.logSkill('huoying_huomeng');
                                        event.card = result.links[0];
                                        player.discard(event.card);
                                        player.addTempSkill('huoying_huomeng2', { player: 'phaseBegin' });
                                        player.markSkill('huoying_huomeng2', { player: 'phaseBegin' });
                                        var chat = ['你们慢慢玩，我先去睡一会儿', '接下来，就用眼睛来场真正的较量吧'].randomGet();
                                        player.say(chat);
                                    }
                                    else event.finish();
                                },
                                ai: {
                                    order: 9,
                                },
                            },
                            "huoying_huomeng2": {
                                audio: "ext:火影忍者:1",
                                mark: true,
                                forced: true,
                                intro: {
                                    content: "<font color=#f00>锁定技</font> 你防止受到属性伤害",
                                },
                                trigger: {
                                    player: "damageBefore",
                                },
                                filter: function (event, player) {
                                    if (!event.nature) return true;
                                    return false;
                                },
                                content: function () {
                                    var chat = ['我这个伊邪那歧，能让你怀疑人生', '只要有足够的写轮眼，我能免疫一切伤害'].randomGet();
                                    player.say(chat);
                                    trigger.cancel();
                                    event.finish();
                                },
                                ai: {
                                    effect: {
                                        target: function (card, player, target, current) {
                                            if (!get.tag(card, 'natureDamage')) return [0, 0];
                                        },
                                    },
                                },
                            },
                            "huoying_duoyang": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    source: "damageEnd",
                                },
                                frequent: true,
                                filter: function (event, player) {
                                    return player.isAlive();
                                },
                                direct: true,
                                content: function () {
                                    'step 0'
                                    var next;
                                    if (trigger.player.hasCard(function (card) {
                                        return !player.getEquip(card);
                                    }, 'e')) {
                                        next = player.chooseControl('夺取写轮眼', 'draw_card', 'cancel2', function (event, player) {
                                            var source = _status.event.source;
                                            var att = get.attitude(player, source);
                                            if (source.hasSkillTag('noe')) {
                                                if (att > 0) {
                                                    return '夺取写轮眼';
                                                }
                                            }
                                            else {
                                                if (att <= 0) {
                                                    return '夺取写轮眼';
                                                }
                                            }
                                            return 'draw_card';
                                        }).set('source', trigger.player);
                                    }
                                    else {
                                        next = player.chooseControl('draw_card', 'cancel2', function () {
                                            return 'draw_card';
                                        });
                                    }
                                    next.set('prompt', get.prompt('huoying_duoyang', trigger.player));
                                    'step 1'
                                    if (result.control == '夺取写轮眼') {
                                        player.logSkill('huoying_duoyang', trigger.player);
                                        var chat = ['你的眼睛，我收下了', '要和平，就得有人为此作出牺牲'].randomGet();
                                        player.say(chat);
                                        player.choosePlayerCard(trigger.player, 'e', '获得一张装备区的牌').set('filterButton', function (button) {
                                            return !_status.event.player.getEquip(button.link);
                                        });
                                    }
                                    else {
                                        if (result.control == 'draw_card') {
                                            player.logSkill('huoying_duoyang');
                                            player.draw();
                                        }
                                        event.finish();
                                    }
                                    'step 2'
                                    if (result && result.links && result.links.length) {
                                        game.delay(2);
                                        trigger.player.$give(result.links[0], player);
                                        player.gain(result.links[0]);
                                        player.addExpose(0.2);
                                    }
                                },
                            },
                            "huoying_kongbo": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    source: "damageBegin",
                                },
                                priority: 15,
                                forced: true,
                                filter: function (event, player) {
                                    return player.countCards('e') > 0 && event.player != player;
                                },
                                content: function () {
                                    var chat = ['爷我是根的头目，装备精良', '风遁•真空波'].randomGet();
                                    player.say(chat);
                                    if (player.countCards('e') > 0) {
                                        player.addTempSkill('unequip', 'shaAfter');
                                    }
                                },
                                ai: {
                                    unequip: true,
                                    skillTagFilter: function (player, tag, arg) {
                                        if (arg && arg.name == 'sha') return true;
                                        return false;
                                    },
                                },
                            },
                            "huoying_sixiang": {
                                audio: "ext:火影忍者:2",
                                unique: true,
                                trigger: {
                                    player: "dieBegin",
                                },
                                filter: function (event, player) {
                                    return event.source && event.source.isIn() && get.distance(player, event.source) <= 1;
                                },
                                check: function (event, player) {
                                    return get.attitude(player, event.source) <= 0;
                                },
                                content: function () {
                                    var chat = ['为了忍界，为了木叶，我不会让你们活着离开', '就算是死都要拉个人来陪葬'].randomGet();
                                    player.say(chat);
                                    player.$skill('四象封印', 'fire', 'red', 'avatar');
                                    trigger.source.clearSkills();
                                    if (trigger.source.maxHp > 4) trigger.source.maxHp = 4;
                                },
                                logTarget: "source",
                                ai: {
                                    threaten: function (player, target) {

                                        if (target.hp == 1) return 0.2;
                                        return 1.5;
                                    },
                                    effect: {
                                        target: function (card, player, target, current) {
                                            if (!target.hasFriend()) return;
                                            if (target.hp <= 1 && get.tag(card, 'damage')) return [1, 0, 0, -2];
                                        },
                                    },
                                },
                            },
                            "huoying_chengyi": {
                                audio: "ext:火影忍者:2",
                                unique: true,
                                gainable: true,
                                trigger: {
                                    global: "discardAfter",
                                },
                                filter: function (event, player) {
                                    if (event.player == player) return false;
                                    for (var i = 0; i < event.cards.length; i++) {
                                        if (get.type(event.cards[i]) == 'equip' && get.suit(event.cards[i]) != 'club' && get.position(event.cards[i]) == 'd') {
                                            return true;
                                        }
                                    }
                                    return false;
                                },
                                content: function () {
                                    'step 0'
                                    if (trigger.delay == false) game.delay();
                                    'step 1'
                                    var cards = [];
                                    for (var i = 0; i < trigger.cards.length; i++) {
                                        if (get.suit(trigger.cards[i]) != 'club' && get.position(trigger.cards[i]) == 'd') {
                                            cards.push(trigger.cards[i]);
                                        }
                                    }
                                    if (cards.length) {
                                        player.gain(cards, 'log');
                                        player.$gain2(cards);
                                    }
                                },
                            },
                            "huoying_yuedu2": {
                                mark: true,
                                unique: true,
                                mod: {
                                    cardEnabled: function () {
                                        return false;
                                    },
                                    cardUsable: function () {
                                        return false;
                                    },
                                    cardRespondable: function () {
                                        return false;
                                    },
                                    cardSavable: function () {
                                        return false;
                                    },
                                },
                                intro: {
                                    content: "不能使用或打出卡牌",
                                },
                            },
                            "huoying_yuedu3": {
                                mark: "character",
                                onremove: true,
                                unique: true,
                                intro: {
                                    content: "到$的距离视为1",
                                },
                                mod: {
                                    globalFrom: function (from, to) {
                                        if (to == from.storage.huoying_yuedu3) {
                                            return -Infinity;
                                        }
                                    },
                                },
                            },
                            "huoying_leisu": {
                                audio: "ext:火影忍者:2",
                                mod: {
                                    cardUsable: function (card) {
                                        if (get.info(card) && get.info(card).forceUsable) return;
                                        return Infinity;
                                    },
                                    targetInRange: function (card, player, target) {
                                        if (card.number) {
                                            if (get.distance(player, target) <= card.number) return true;
                                        }
                                    },
                                },
                            },
                            "huoying_duanbi": {
                                audio: "ext:火影忍者:2",
                                enable: "phaseUse",
                                usable: 1,
                                skillAnimation: true,
                                prompt: "失去一点体力并摸两张牌",
                                content: function () {
                                    'step 0'
                                    var chat = ['暴躁老哥我先自断一臂为敬', '我发起火🔥来连自己都怕'].randomGet();
                                    player.say(chat);
                                    player.loseHp(1);
                                    'step 1'
                                    player.draw(2);
                                    'step 2'
                                    player.addTempSkill('huoying_duanbi2', 'phaseEnd');
                                },
                                ai: {
                                    order: 9,
                                    result: {
                                        player: function (player) {
                                            if (player.hp > 3) return 2.5;
                                            if (player.countCards('h') >= player.hp) return 0;
                                            if (player.hp > 2 && player.countCards('he', { name: 'zhuge' })) return 1.5;
                                            if (player.hp > 1 && player.countCards('h', { name: 'tao' })) return 3;
                                            if (player.hp < 3) return 0;
                                            return 0.5;
                                        },
                                    },
                                },
                            },
                            "huoying_duanbi2": {
                                audio: "ext:火影忍者:1",
                                trigger: {
                                    source: "damageBegin",
                                },
                                priority: 15,
                                filter: function (event, player) {
                                    return event.card && event.card.isCard && (event.card.name == 'juedou') && event.notLink();
                                },
                                forced: true,
                                content: function () {
                                    var chat = ['我这一身的肌肉💪就是力量', '凡中过我一拳，没有不死的'].randomGet();
                                    player.say(chat);
                                    player.addTempSkill('unequip', 'shaAfter');
                                    trigger.num++;
                                },
                                ai: {
                                    unequip: true,
                                    skillTagFilter: function (player, tag, arg) {
                                        if (arg && arg.name == 'sha') return true;
                                        return false;
                                    },
                                },
                            },
                            "huoying_yinmou": {
                                audio: "ext:火影忍者:2",
                                enable: "phaseUse",
                                unique: true,
                                limited: true,
                                skillAnimation: true,
                                animationStr: "辉夜复活",
                                animationColor: 'fire',
                                filterTarget: function (card, player, target) {
                                    return player != target;
                                },
                                filter: function (event, player) {
                                    var num = game.countPlayer(function (current) {
                                        return current != player && current.name == 'huoying_huiye';
                                    });
                                    return num == 0 && player.countCards('h', { name: 'shandian' }) > 0;
                                },
                                filterCard: {
                                    name: "shandian",
                                },
                                init: function (player) {
                                    player.storage.huoying_yinmou = false;
                                },
                                intro: {
                                    content: "limited",
                                },
                                content: function () {
                                    var chat = ['我所有的努力，都是为了复活母亲', '抱歉！我并不是你的意志，而是母亲辉夜姬的意志'].randomGet();
                                    player.say(chat);
                                    player.storage.huoying_yinmou = true;
                                    var name1 = targets[0].name;
                                    var name2 = 'huoying_huiye';
                                    targets[0].reinit(name1, name2, false);
                                    targets[0].recover();
                                    player.recover();
                                    player.awakenSkill('huoying_yinmou');
                                },
                                ai: {
                                    threaten: 1.3,
                                    result: {
                                        //target: function (player, target) {
                                        //return get.recoverEffect(target, player, target);
                                        //},
                                        target: 1,
                                        player: 1,
                                    },
                                    order: 9,
                                },
                            },
                            "huoying_fuyou": {
                                audio: "ext:火影忍者:2",
                                skillAnimation: true,
                                animationStr: "蜉蝣之术",
                                animationColor: 'thunder',
                                mark: true,
                                unique: true,
                                forced: true,
                                juexingji: true,
                                trigger: {
                                    player: "dying",
                                },
                                init: function (player) {
                                    player.storage.huoying_fuyou = false;
                                },
                                intro: {
                                    content: "limited",
                                },
                                content: function () {
                                    'step 0'
                                    var chat = ['忍界的变化术，无人比得上我', '连感知型的忍者也分辨不出我的变化'].randomGet();
                                    player.say(chat);
                                    player.storage.huoying_fuyou = true;
                                    player.awakenSkill("huoying_fuyou");
                                    game.delay(2);
                                    event.list = [];
                                    for (var i in lib.characterPack['huoyingrenzhe']) {
                                        event.list.push(i);
                                    }
                                    var players = game.players.concat(game.dead);
                                    for (var i = 0; i < players.length; i++) {
                                        event.list.remove(players[i].name);
                                        event.list.remove(players[i].name1);
                                        event.list.remove(players[i].name2);
                                    }
                                    var dialog = ui.create.dialog('将武将牌替换为一名角色', 'hidden');
                                    dialog.add([event.list.randomGets(5), 'character']);
                                    player.chooseButton(dialog, true).ai = function (button) {
                                        return get.rank(button.link, true);
                                    };
                                    'step 1'
                                    if (result.bool) {
                                        player.init(result.links[0], 'huoying_fuyou');
                                        player.hp = player.maxHp;
                                        player.draw(2);
                                        player.update();
                                    } else {
                                        event.finish();
                                    }
                                    'step 2'
                                    var num = game.countPlayer(function (current) {
                                        return current != player && current.name == 'huoying_huiye';
                                    });
                                    if (num == 0) {
                                        player.addSkill("huoying_yinmou");
                                    } else {
                                        event.finish();
                                    }
                                },
                            },
                            "huoying_baozi": {
                                audio: "ext:火影忍者:2",
                                enable: ["chooseToUse", "chooseToRespond"],
                                hiddenCard: function (player, name) {
                                    if (name == 'wuxie') return false;
                                    if (lib.inpile.contains(name)) return true;
                                },
                                filter: function (event, player) {
                                    //if (_status.currentPhase== player) return false;
                                    if (event.type == 'wuxie') return false;
                                    for (var i of lib.inpile) {
                                        if (i == 'wuxie') return false;
                                        if (event.filterCard({ name: i }, player, event)) return true;
                                    }
                                    return false;
                                },
                                delay: false,
                                usable: 1,
                                content: function () {
                                    'step 0'
                                    player.chooseTarget(get.prompt('huoying_baozi'), function (card, player, target) {
                                        return target != player && target.countCards('h');
                                    }).ai = function (target) {
                                        return get.attitude(player, target) <= 0;
                                    };
                                    'step 1'
                                    if (result.bool) {
                                        event.target = result.targets[0];
                                        player.logSkill('huoying_baozi', event.target);
                                        var cards = event.target.getCards('h');
                                        var aozhan = player.hasSkill("aozhan");
                                        var evt = event.getParent(2);
                                        evt.set("huoying_baozi", true);
                                        player.chooseButton(["孢子之术：选择要" + (evt.name == "chooseToUse" ? "使用" : "打出") + "的牌", cards]).set("filterButton", function (button) {
                                            return _status.event.cards.includes(button.link);
                                        }).set("cards", cards.filter(function (card) {
                                            if (aozhan && card.name == "tao") {
                                                return (evt.filterCard(
                                                    {
                                                        name: 'sha',
                                                        isCard: true,
                                                        cards: [card],
                                                    },
                                                    evt.player,
                                                    evt
                                                ) ||
                                                    evt.filterCard(
                                                        {
                                                            name: "shan",
                                                            isCard: true,
                                                            cards: [card],
                                                        },
                                                        evt.player,
                                                        evt
                                                    )
                                                );
                                            }
                                            return evt.filterCard(card, evt.player, evt);
                                        })
                                        ).set("ai", function (button) {
                                            var evt = _status.event.getParent(3);
                                            if (evt && evt.ai) {
                                                var tmp = _status.event;
                                                _status.event = evt;
                                                var result = (evt.ai || event.ai1)(button.link, _status.event.player, evt);
                                                _status.event = tmp;
                                                return result;
                                            }
                                            return 1;
                                        });
                                    }
                                    else {
                                        event.finish();
                                    }
                                    'step 2'
                                    var evt = event.getParent(2);
                                    if (result.bool && result.links && result.links.length) {
                                        var card = result.links[0];
                                        var name = card.name,
                                            aozhan = player.hasSkill("aozhan") && name == "tao";
                                        if (aozhan) {
                                            name = evt.filterCard(
                                                {
                                                    name: 'sha',
                                                    isCard: true,
                                                    cards: [card],
                                                },
                                                evt.player,
                                                evt
                                            )
                                                ? 'sha'
                                                : "shan";
                                        }
                                        if (evt.name == "chooseToUse") {
                                            game.broadcastAll(
                                                function (result, name) {
                                                    lib.skill.huoying_baozi_backup.viewAs = {
                                                        name: name,
                                                        cards: [result],
                                                        isCard: true,
                                                    };
                                                },
                                                card,
                                                name
                                            );
                                            evt.set("_backupevent", "huoying_baozi_backup");
                                            evt.set("openskilldialog", "请选择" + get.translation(card) + "的目标");
                                            evt.backup("huoying_baozi_backup");
                                        } else {
                                            delete evt.result.skill;
                                            delete evt.result.used;
                                            evt.result.card = get.autoViewAs(result.links[0]);
                                            if (aozhan) evt.result.card.name = name;
                                            evt.result.cards = [result.links[0]];
                                            evt.redo();
                                            return;
                                        }
                                    }
                                    evt.goto(0);
                                },
                                ai: {
                                    effect: {
                                        target: function (card, player, target, effect) {
                                            if (get.tag(card, "respondShan")) return 0.7;
                                            if (get.tag(card, "respondSha")) return 0.7;
                                        },
                                    },
                                    order: 11,
                                    save: true,
                                    respondShan: true,
                                    respondSha: true,
                                    result: {
                                        player: function (player) {
                                            if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                            return 1;
                                        },
                                    },
                                },
                            },
                            huoying_baozi_backup: {
                                sourceSkill: "huoying_baozi",
                                precontent: function () {
                                    delete event.result.skill;
                                    var name = event.result.card.name,
                                        cards = event.result.card.cards.slice(0);
                                    event.result.cards = cards;
                                    var rcard = cards[0],
                                        card;
                                    if (rcard.name == name) card = get.autoViewAs(rcard);
                                    else card = get.autoViewAs({ name, isCard: true });
                                    event.result.card = card;
                                },
                                filterCard: function () {
                                    return false;
                                },
                                selectCard: -1,
                            },
                            "huoying_juneng": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    global: "recoverEnd",
                                },
                                forced: true,
                                usable: 1,
                                filter: function (event, player) {
                                    return game.hasPlayer(function (current) {
                                        return current != player && player.hp < player.maxHp;
                                    });
                                },
                                content: function () {
                                    var chat = ['我是查克拉之祖，第一个拥有查克拉的人', '把查克拉还给我'].randomGet();
                                    player.say(chat);
                                    player.recover();
                                },
                                ai: {
                                    threaten: 0.5,
                                    expose: 0.2,
                                    order: 9,
                                },
                                group: "huoying_juneng2",
                            },

                            "huoying_zhongbao": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    player: "useCard",
                                },
                                filter: function (event, player) {
                                    if (_status.currentPhase != player) return false;
                                    return player.countUsed(event.card) > 1 && player.countUsed(event.card) < 4;
                                },
                                forced: true,
                                content: function () {
                                    var chat = ['雷我爆弹！……好吧，名字是有点雷人', '忍界目前我的体能最强，凯除外'].randomGet();
                                    player.say(chat);
                                    player.draw();
                                },
                            },

                            "huoying_juneng2": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    global: "damageEnd",
                                },
                                forced: true,
                                usable: 1,
                                filter: function (event, player) {
                                    return game.hasPlayer(function (current) {
                                        return current != player;
                                    });
                                },
                                content: function () {
                                    var chat = ['终有一天你们会明白，这个世界光说爱是不行的，得有力量', '我曾经把查克拉赠予给你们，你们却要反叛我？'].randomGet();
                                    player.say(chat);
                                    player.draw();
                                },
                                ai: {
                                    threaten: 0.3,
                                    expose: 0.2,
                                    order: 9,
                                },
                            },
                            "huoying_tianyu": {
                                audio: "ext:火影忍者:2",
                                enable: "phaseUse",
                                usable: 1,
                                mark: true,
                                filter: function (event, player) {
                                    return game.players.length > 2;
                                },
                                content: function () {
                                    var chat = ['改天换地，斗转星移', '天之御中'].randomGet();
                                    player.say(chat);
                                    player.$skill('天之御中', 'fire', 'red', 'avatar');
                                    var list = [];
                                    for (var i = 0; i < game.players.length; i++) {
                                        if (player.isAlive()) list.push(game.players[i]);
                                    };
                                    var players = [];
                                    for (var i = 0; i < game.players.length; i++) {
                                        if (player.isAlive()) {
                                            game.players[i].storage.huoying_tianyu = list.randomGet();
                                            players.push(game.players[i]);
                                        };
                                    };
                                    for (var i = 0; i < players.length; i++) {
                                        if (player.isAlive()) {
                                            game.swapSeat(players[i], players[i].storage.huoying_tianyu);
                                            delete players[i].storage.huoying_tianyu;
                                        };
                                    };
                                },
                                ai: {
                                    order: 2,
                                    result: {
                                        // player:1,
                                        player: function (player) {
                                            var num = game.countPlayer(function (current) {
                                                return current != player && player.inRange(current);
                                            });
                                            if (num == 0) return 1;
                                            if (get.attitude(player, player.next) <= 0) return 1;
                                            return 0;
                                        },
                                    },
                                },
                            },
                            "huoying_baodun": {
                                audio: "ext:火影忍者:2",
                                enable: "phaseUse",
                                usable: 1,
                                filterTarget: function (card, player, target) {
                                    return player != target && target.countCards('h') > 0;
                                },
                                content: function () {
                                    'step 0'
                                    var chat = ['喝！……不要哑火啊！', '艺术，就是爆炸'].randomGet();
                                    player.say(chat);
                                    player.chooseControl('heart2', 'diamond2', 'club2', 'spade2').set('ai', function (event) {
                                        switch (Math.floor(Math.random() * 6)) {
                                            case 0: return 'heart2';
                                            case 1: case 4: case 5: return 'diamond2';
                                            case 2: return 'club2';
                                            case 3: return 'spade2';
                                        };
                                    });
                                    'step 1'
                                    game.log(player, '选择了' + get.translation(result.control));
                                    event.choice = result.control;
                                    player.popup(event.choice);
                                    event.card = target.getCards('h').randomGet();
                                    target.showCards(event.card);
                                    game.delay(0.5);
                                    'step 2'
                                    if (get.suit(event.card) + '2' != event.choice) {
                                        target.damage('fire');
                                        player.discardPlayerCard(target, "he", true);
                                    };
                                    if (get.suit(event.card) + '2' == event.choice) {
                                        target.$give(event.card, player);
                                        player.gain(event.card, target);
                                    };
                                },
                                ai: {
                                    threaten: 0.8,
                                    order: 8,
                                    result: {
                                        target: function (player, target) {
                                            return -target.hp;
                                        },
                                    },
                                },
                            },
                            "huoying_feiniao": {
                                mod: {
                                    globalTo: function (from, to, distance) {
                                        return distance + 1;
                                    },
                                },
                            },
                            "huoying_zibao": {
                                audio: "ext:火影忍者:2",
                                enable: "phaseUse",
                                unique: true,
                                marktext: "爆",
                                limited: true,
                                intro: {
                                    content: "limited",
                                },
                                init: function (player) {
                                    player.storage.huoying_zibao = false;
                                },
                                filter: function (event, player) {
                                    return !player.storage.huoying_zibao;
                                },
                                content: function () {
                                    'step 0'
                                    var chat = ['只有瞬间的绚丽，才是艺术', '这个艺术，终会得到世人的赞美'].randomGet();
                                    player.say(chat);
                                    player.$fullscreenpop('艺术就是爆炸', 'fire');

                                    for (var i = 0; i < game.players.length; i++) {
                                        if (game.players[i] != player) game.players[i].damage('fire');
                                    };
                                    'step 1'
                                    for (var i = 0; i < game.players.length; i++) {
                                        if (game.players[i] != player && get.distance(player, game.players[i]) <= 1) game.players[i].damage('fire');
                                    };
                                    player.awakenSkill('huoying_zibao');
                                    player.unmarkSkill('huoying_zibao');
                                    player.storage.huoying_zibao = true;
                                    player.die();
                                },
                                ai: {
                                    order: 1,
                                    result: {
                                        player: function (player) {
                                            if (player.hp > 1 || player.countCards('h', { name: ['tao', 'jiu'] })) return 0;
                                            return 1;
                                        },
                                    },
                                },
                            },
                            "huoying_huigu": {
                                audio: "ext:火影忍者:3",
                                enable: "phaseUse",
                                usable: 1,
                                filterTarget: function (card, player, target) {
                                    return player != target && target.countCards('h') > 0 && player.inRange(target);
                                },
                                content: function () {
                                    var chat = ['这一次，不会再射不中', '你们会像他那样一块块地烂掉'].randomGet();
                                    player.say(chat);
                                    target.showCards(target.get('h'));
                                    target.addTempSkill('huoying_lunxue', 'phaseAfter');
                                    player.discardPlayerCard(target, "he", true);
                                },
                                ai: {
                                    order: 8,
                                    result: {
                                        target: function (player, target) {
                                            return -target.countCards('h');
                                        },
                                    },
                                },
                            },
                            "huoying_lunxue": {
                                mark: true,
                                unique: true,
                                mod: {
                                    cardEnabled: function () {
                                        return false;
                                    },
                                    cardUsable: function () {
                                        return false;
                                    },
                                    cardRespondable: function () {
                                        return false;
                                    },
                                    cardSavable: function () {
                                        return false;
                                    },
                                },
                                intro: {
                                    content: "不能使用或打出卡牌",
                                },
                            },
                            "huoying_feixian": {
                                mod: {
                                    globalTo: function (from, to, distance) {
                                        return distance + to.hp;
                                    },
                                },
                            },
                            "huoying_xfenlie": {
                                audio: "ext:火影忍者:2",
                                enable: "phaseUse",
                                usable: 1,
                                selectCard: -1,
                                position: "h",
                                filterCard: true,
                                prompt: "弃置所有手牌（没手牌则不须弃）并摸两张牌",
                                filter: function (event, player) {
                                    return player.countCards('h') >= 0;
                                },
                                check: function (card) { return 7 - get.value(card) },
                                content: function () {
                                    var chat = ['你们可要小心了', '我能将身体一分为二，这不是分身术，而是分裂'].randomGet();
                                    player.say(chat);
                                    player.draw(2);
                                },
                                ai: {
                                    order: 1,
                                    result: {
                                        player: 1,
                                    },
                                },
                            },
                            "huoying_guaili3": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    source: "dieAfter",
                                },
                                forced: true,
                                popup: false,
                                silent: true,
                                unique: true,
                                filter: function (event, player) {
                                    return event.player.isDead();
                                },
                                content: function () {
                                    var chat = ['早就提醒过你，不要惹老娘', '今日之祸，皆是你咎由自取'].randomGet();
                                    player.say(chat);
                                    player.gainMaxHp();
                                },
                            },
                            "huoying_bizhu": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    global: "loseHpEnd",
                                },
                                check: function (event, player) {
                                    return get.attitude(player, event.player) > 0;
                                },
                                content: function () {
                                    'step 0'
                                    player.draw();
                                    trigger.player.draw();
                                },
                                ai: {
                                    threaten: 0.5,
                                },
                            },
                            "huoying_landun": {
                                audio: "ext:火影忍者:3",
                                enable: "phaseUse",
                                usable: 1,
                                prompt: function () {
                                    return get.prompt('huoying_landun');
                                },
                                content: function () {
                                    'step 0'
                                    player.judge();
                                    var chat = ['我有那么谦虚？看来也不错', '岚遁……'].randomGet();
                                    player.say(chat);
                                    'step 1'
                                    switch (get.suit(result.card)) {
                                        case 'spade':
                                            player.addTempSkill('huoying_landun1');
                                            break;
                                        case 'heart':
                                            player.addTempSkill('huoying_landun2');
                                            break;
                                        case 'club':
                                            player.addTempSkill('huoying_landun3');
                                            break;
                                        case 'diamond':
                                            player.addTempSkill('huoying_landun4');
                                            break;
                                    }
                                    'step 2'
                                    player.addTempSkill('huoying_landun5');
                                    player.addTempSkill('huoying_landun6');
                                },
                                ai: {
                                    result: {
                                        player: 1,
                                    },
                                    order: 11,
                                },
                            },
                            "huoying_landun3": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    player: "shaBegin",
                                },
                                filter: function (event, player) {
                                    return event.target.countCards('he') > 0;
                                },
                                check: function (event, player) {
                                    return get.attitude(player, event.target) <= 0;
                                },
                                logTarget: "target",
                                content: function () {
                                    var chat = ['不管你镀金还是镀银，都得剥落', '告诫你：不要以貌取人'].randomGet();
                                    player.say(chat);
                                    player.discardPlayerCard(trigger.target, 1, 'he', true);
                                },
                                ai: {
                                    threaten: 1.5,
                                },
                            },
                            "huoying_landun1": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    source: "damageBegin",
                                },
                                forced: true,
                                filter: function (event, player) {
                                    return event.card && event.card.isCard && event.card.name == 'sha' && event.notLink();
                                },
                                content: function () {
                                    var chat = ['不管你镀金还是镀银，都得剥落', '告诫你：不要以貌取人'].randomGet();
                                    player.say(chat);
                                    trigger.num++;
                                },
                            },
                            "huoying_landun2": {
                                mod: {
                                    selectTarget: function (card, player, range) {
                                        if (card.name == 'sha' && range[1] != -1) range[1]++;
                                    },
                                },
                            },
                            "huoying_landun4": {
                                mod: {
                                    cardUsable: function (card, player, num) {
                                        if (card.name == 'sha') return num + 1;
                                    },
                                },
                            },
                            "huoying_landun5": {
                                mod: {
                                    targetInRange: function (card, player, target, now) {
                                        if (card.name == 'sha') return true;
                                    },
                                },
                            },
                            "huoying_landun6": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    player: "shaBegin",
                                },
                                forced: true,
                                content: function () {
                                    var chat = ['真没劲', '抱歉抱歉……'].randomGet();
                                    player.say(chat);
                                    trigger.directHit = true;
                                },
                            },
                            "huoying_chunshu": {
                                audio: "ext:火影忍者:2",
                                frequent: true,
                                trigger: {
                                    player: "phaseEnd",
                                },
                                prompt: function () {
                                    return get.prompt('huoying_chunshu');
                                },
                                content: function () {
                                    'step 0'
                                    player.judge();
                                    var chat = ['我都说了，要打倒我，就要先找到蜃的实体', '海市蜃楼，风景这边独好……'].randomGet();
                                    player.say(chat);
                                    'step 1'
                                    switch (get.color(result.card)) {
                                        case 'black':
                                            player.addTempSkill('huoying_chunshu1', { player: 'phaseUseBegin' });
                                            player.addTempSkill('huoying_chunshu3', { player: 'phaseUseBegin' });
                                            player.markSkill('huoying_chunshu1', { player: 'phaseUseBegin' });
                                            break;
                                        case 'red':
                                            player.addTempSkill('huoying_chunshu2', { player: 'phaseUseBegin' });
                                            player.addTempSkill('huoying_chunshu3', { player: 'phaseUseBegin' });
                                            player.markSkill('huoying_chunshu2', { player: 'phaseUseBegin' });
                                            break;
                                    }
                                },
                                ai: {
                                    result: {
                                        player: 1,
                                    },
                                    order: 11,
                                },
                            },
                            "huoying_chunshu1": {
                                audio: "ext:火影忍者:1",
                                trigger: {
                                    player: "damageBefore",
                                },
                                intro: {
                                    content: "<font color=#f00>锁定技</font> 你防止受到锦囊牌的伤害",
                                },
                                forced: true,
                                priority: 15,
                                check: function (event, player) {
                                    if (player == event.player) return true;
                                    return false;
                                },
                                filter: function (event, player) {
                                    return get.type(event.card, 'trick') == 'trick';
                                },
                                content: function () {
                                    trigger.cancel();
                                },
                            },
                            "huoying_chunshu2": {
                                marktext: "杀",
                                intro: {
                                    content: "<font color=#f00>锁定技</font> 你不能成为【杀】的目标",
                                },
                                mod: {
                                    targetEnabled: function (card, player, target, now) {
                                        if (card.name == 'sha') return false;
                                    },
                                },
                            },
                            "huoying_zhengbao": {
                                audio: "ext:火影忍者:2",
                                unique: true,
                                enable: "chooseToUse",
                                mark: true,
                                forced: true,
                                juexingji: true,
                                intro: {
                                    content: "limited",
                                },
                                skillAnimation: true,
                                animationStr: "蒸危暴威",
                                animationColor: 'fire',
                                init: function (player) {
                                    player.storage.huoying_zhengbao = false;
                                },
                                filter: function (event, player) {
                                    if (player.storage.huoying_zhengbao) return false;
                                    if (event.type == 'dying') {
                                        if (player != event.dying) return false;
                                        return true;
                                    }
                                },
                                derivation: ['huoying_lianbao', 'huoying_shuipao', 'hyrz_zbfs'],
                                content: function () {
                                    'step 0'
                                    player.discard(player.getCards('j'));
                                    player.draw(2);
                                    player.maxHp += 4 - player.maxHp;
                                    player.recover(3 - player.hp);
                                    player.awakenSkill('huoying_zhengbao');
                                    player.storage.huoying_zhengbao = true;
                                    'step 1'
                                    player.link(false);
                                    player.turnOver(false);
                                    'step 2'
                                    player.useCard(game.createCard('hyrz_zbfs', 'diamond', 4), player);
                                    player.addSkill('huoying_lianbao');
                                    player.addSkill('huoying_shuipao');
                                },
                                ai: {
                                    order: 0.5,
                                    skillTagFilter: function (player) {
                                        if (player.storage.huoying_zhengbao) return false;
                                        if (player.hp > 0) return false;
                                    },
                                    save: true,
                                    result: {
                                        player: function (player) {
                                            if (player.hp == 0) return 10;
                                            if (player.hp <= 1 && player.countCards('he') <= 1) return 10;
                                            return 0;
                                        },
                                    },
                                    threaten: function (player, target) {
                                        if (!target.storage.huoying_zhengbao) return 0.6;
                                    },
                                },
                                intro: {
                                    content: "limited",
                                },
                            },
                            "huoying_chunshu3": {
                                audio: "ext:火影忍者:1",
                                mark: true,
                                forced: true,
                                intro: {
                                    content: "<font color=#f00>锁定技</font> 你防止受到属性伤害",
                                },
                                trigger: {
                                    player: "damageBefore",
                                },
                                filter: function (event, player) {
                                    if (event.nature) return true;
                                    return false;
                                },
                                content: function () {
                                    var chat = ['一切如梦幻泡影', '我起码是五影之一，你们可要努力封印我啊'].randomGet();
                                    player.say(chat);
                                    trigger.cancel();
                                    event.finish();
                                },
                                ai: {
                                    effect: {
                                        target: function (card, player, target, current) {
                                            if (get.tag(card, 'natureDamage')) return [0, 0];
                                        },
                                    },
                                },
                            },
                            "huoying_shuipao": {
                                audio: "ext:火影忍者:2",
                                enable: "phaseUse",
                                usable: 1,
                                filter: function (event, player) {
                                    return player.countCards('e') > 0;
                                },
                                filterCard: function () {
                                    if (ui.selected.targets.length) return false;
                                    return true;
                                },
                                position: "e",
                                selectCard: 1,
                                filterTarget: function (card, player, target) {
                                    return target != player && ui.selected.cards.length == 1;
                                },
                                check: function (card) {
                                    switch (ui.selected.cards.length) {
                                        case 0: return 7 - get.value(card);
                                        case 1: return 6 - get.value(card);
                                        case 2: return 3 - get.value(card);
                                        default: return 0;
                                    }
                                },
                                content: function () {
                                    var chat = ['快逃跑，我控制不住自己了', '可恶！被人控制的感觉真令人不爽'].randomGet();
                                    player.say(chat);
                                    target.damage();
                                },
                                ai: {
                                    order: 2,
                                    result: {
                                        target: function (player, target) {
                                            return -target.hp;
                                        },
                                    },
                                    threaten: 1.5,
                                    expose: 0.3,
                                },
                            },
                            "huoying_lianbao": {
                                audio: "ext:火影忍者:1",
                                trigger: {
                                    player: "phaseBegin",
                                },
                                filter: function (event, player) {
                                    if (player.hp < 0) return false;
                                    return !game.hasPlayer(function (current) {
                                        return current.hasJudge('hyrz_zbfs');
                                    });
                                },
                                content: function () {
                                    var chat = ['这个术能无限爆炸', '下一波爆炸已准备好了'].randomGet();
                                    player.say(chat);
                                    player.useCard(game.createCard('hyrz_zbfs', 'diamond', 4), player);
                                },
                                ai: {
                                    order: 7,
                                    result: {
                                        player: 1,
                                    },
                                },
                            },
                            "huoying_tuci": {
                                trigger: {
                                    source: "damageBegin",
                                },
                                filter: function (event, player) {
                                    return event.card && event.card.isCard && event.card.name == 'sha' && event.notLink();
                                },
                                forced: true,
                                audio: "ext:火影忍者:2",
                                content: function () {
                                    var num2 = player.maxHp - player.hp;
                                    var num3 = Math.ceil(num2 / 4);
                                    trigger.num += num3;
                                    var chat = ['三本贯手……你哋呢班粉肠，点解係都要激嬲我？', '明年今日就是你的忌日'].randomGet();
                                    player.say(chat);

                                },
                            },
                            "huoying_guwu": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    player: "shaBegin",
                                },
                                forced: true,
                                mod: {
                                    cardUsable: function (card, player, num) {
                                        if (card.name == 'sha') return num + player.hp - 1;
                                    },
                                    attackFrom: function (from, to, distance) {
                                        return distance - from.hp + 1;
                                    },
                                    selectTarget: function (card, player, range) {
                                        if (card.name == 'sha' && range[1] != -1) range[1] += player.countUsed('sha');
                                    },
                                },
                                content: function () {
                                    var chat = ['尸骨脉～十指穿弹', '尸骨脉～柳之舞', '尸骨脉～椿之舞', '尸骨脉～唐松之舞', '尸骨脉～铁线花之舞', '尸骨脉～八重葎之舞', '尸骨脉～早蕨之舞'].randomGet();
                                    player.say(chat);
                                },
                            },
                            "huoying_zhouyin": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    global: "phaseUseBegin",
                                },
                                frequent: true,
                                // logTarget:"player",
                                filter: function (event, player) {
                                    return event.player != player && (player.countCards('h') < event.player.countCards('h') || player.hp < event.player.hp);
                                },
                                content: function () {
                                    var chat = ['了不起的压力', '看来得爆发咒印的第二形态了'].randomGet();
                                    player.say(chat);
                                    if (player.hp >= 3) {
                                        player.draw();
                                    }
                                    else {
                                        player.recover();
                                        //player.draw();
                                    }
                                },
                            },
                            "huoying_shuochang": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    player: "phaseUseBegin",
                                },
                                //   frequent:true,
                                direct: true,
                                filter: function (event, player) {
                                    return player.isAlive();
                                },
                                content: function () {
                                    'step 0'
                                    player.chooseBool('是否发动〖说唱〗？').set('ai', function () {
                                        if (player.countCards('h')) return true;
                                    });
                                    'step 1'
                                    if (result.bool) {
                                        player.logSkill('huoying_shuochang');
                                        player.addSkill('huoying_shuochang_use');
                                        player.addSkill('huoying_shuochang_cancel');
                                        ui.auto.hide();
                                    }
                                    else {
                                        event.finish();
                                    }
                                },
                                ai: {
                                    threaten: 0.8,
                                    order: 9,
                                },
                                subSkill: {
                                    use: {
                                        mod: {
                                            cardUsable: function (card, player, num) {
                                                return num = 1;
                                            },
                                            targetInRange: function () {
                                                return true;
                                            },
                                        },
                                        trigger: {
                                            player: "useCard",
                                        },
                                        forced: true,
                                        filter: function (event, player) {
                                            return player.isAlive();
                                        },
                                        content: function () {
                                            var chat = ['今天写出很棒的韵律~那就陪你玩玩吧！', '八嘎亚路，阔摩呀路～oh~yeah~come on~'].randomGet();
                                            player.say(chat);
                                            game.playhyrz(['huoying_shuochang1', 'huoying_shuochang2'].randomGet());
                                            player.draw();
                                        },
                                        sub: true,
                                    },
                                    cancel: {
                                        trigger: {
                                            player: "phaseUseEnd",
                                        },
                                        silent: true,
                                        content: function () {
                                            ui.auto.show();
                                            player.removeSkill('huoying_shuochang_use');
                                            player.removeSkill('huoying_shuochang_cancel');
                                        },
                                        sub: true,
                                        forced: true,
                                        popup: false,
                                    },
                                },
                            },
                            "huoying_xianhua": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    //global:"phaseDiscardBegin",
                                    global: "phaseUseEnd",
                                },
                                forced: true,
                                filter: function (event, player) {
                                    return event.player != player;
                                },
                                content: function () {
                                    var chat = ['快走开……我控制不住自己了', '咒印之术的来源者正是我'].randomGet();
                                    player.say(chat);
                                    if (trigger.player.countCards('h') > trigger.player.getHandcardLimit()) {
                                        player.draw();
                                    }
                                    else {
                                        player.recover();
                                    }
                                },
                            },
                            "huoying_leidao": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    global: "shaAfter",
                                },
                                direct: true,
                                priority: -10,
                                //    check:function (event,player){
                                //   return get.attitude(player,event.player)>0;
                                //  },
                                filter: function (event, player) {
                                    return event.target.isAlive() && player != event.player && event.card && event.card.isCard && event.card.name == 'sha' && event.notLink() && event.cards[0] && event.cards[0] == event.card;
                                },
                                content: function () {
                                    'step 0'
                                    player.chooseBool('是否对' + get.translation(trigger.target) + '发动〖雷刀〗？').set('ai', function () {
                                        if (get.attitude(_status.event.player, trigger.target) < 0) return true;
                                        return false;
                                    });
                                    'step 1'
                                    if (result.bool) {
                                        game.delay();
                                        player.useCard({ name: 'sha' }, trigger.target, false);
                                        var chat = ['能与大哥配合使用雷犁热刀的只有我', '明明就很弱……'].randomGet();
                                        player.say(chat);
                                        player.logSkill('huoying_leidao');
                                    }
                                    else {
                                        event.finish();
                                    }
                                },
                                ai: {
                                    expose: 2.4,
                                },
                            },
                            "huoying_huizhan": {
                                audio: "ext:火影忍者:2",
                                round: 2,
                                enable: "phaseUse",
                                usable: 1,
                                filterCard: true,
                                selectCard: -1,
                                filter: function (event, player) {
                                    return player.countCards('h') > 0;
                                },
                                prepare: function (cards, player, targets) {
                                    player.line(targets);
                                },
                                discard: true,
                                filterTarget: function (card, player, target) {
                                    return target != player;
                                },
                                content: function () {
                                    'step 0'
                                    player.$fullscreenpop('驱敌寇，保木叶', 'fire');
                                    var chat = ['众忍听令，把九尾妖狐驱逐出村子外', '保护好村子！'].randomGet();
                                    player.say(chat);
                                    'step 1'
                                    if (event.current == undefined) event.current = player.next;
                                    if (targets[0].hp <= 1 || targets[0].isDead() || event.current == player) {
                                        event.finish();
                                    } else {
                                        event.current.useCard({
                                            name: 'sha'
                                        }, targets, false);
                                    }
                                    'step 2'
                                    event.current = event.current.next;
                                    event.goto(1);

                                },
                                ai: {
                                    expose: 0.6,
                                    order: 1,
                                    result: {
                                        player: function (player, target) {
                                            if (target.hp <= 1) return -10;
                                            var num = -get.attitude(player, target);
                                            var dhp = target.hp - 1;
                                            var ncn = player.countCards('h');
                                            if (num > 0) {
                                                if (ncn < dhp) {
                                                    num += dhp - ncn;
                                                } else {
                                                    num -= ncn - dhp;
                                                }
                                            }
                                            return num;
                                        },
                                    },
                                },
                            },
                            "huoying_xfengyin": {
                                audio: "ext:火影忍者:2",
                                unique: true,
                                mark: true,
                                direct: true,
                                priority: 5,
                                marktext: "印",
                                trigger: {
                                    player: "phaseEnd",
                                },
                                filter: function (event, player) {
                                    return player.isAlive();
                                },
                                limited: true,
                                init: function (player) {
                                    player.storage.huoying_xfengyin = false;
                                },
                                intro: {
                                    content: "limited",
                                },
                                content: function () {
                                    'step 0'
                                    player.chooseControl('尸鬼封尽', 'cancel2').set('ai', function () {
                                        if (player.countCards('h', 'tao') > 0 || player.countCards('h', 'jiu') > 0) return '尸鬼封尽';
                                        if (player.hp <= 1) return '尸鬼封尽';
                                        return 'cancel2';
                                    }).set('prompt', '封印：请选择是否发动禁术——尸鬼封尽');
                                    'step 1'
                                    if (result.control == '尸鬼封尽') {
                                        event.goto(2);
                                    }
                                    else {
                                        event.finish();
                                    }
                                    'step 2'
                                    player.chooseTarget('请选择一名目标，令其技能失效', get.prompt('huoying_xfengyin'), function (card, player, target) {
                                        return target != player;
                                    }).set("ai", function (target) {
                                        return get.attitude(player, target) <= 0;

                                    });
                                    'step 3'
                                    if (result.bool) {
                                        player.storage.huoying_xfengyin = true;
                                        player.unmarkSkill('huoying_xfengyin');
                                        //player.$skill('尸鬼封尽', 'fire', 'red', 'avatar');
                                        var chat = ['只要有树叶飞舞的地方，火就会燃烧，火的影子会照耀着村子', '忍者最强的力量不是在学会所有忍术之后得到，而是在保护自己最珍贵的东西时才会显露出来'].randomGet();
                                        player.say(chat);
                                        player.logSkill('huoying_xfengyin', result.targets[0]);
                                        result.targets[0].clearSkills();
                                        if (result.targets[0].maxHp > 4) result.targets[0].maxHp = 4;
                                        result.targets[0].update();
                                        player.hp = player.maxHp;
                                        player.loseHp(player.hp);
                                        player.awakenSkill('huoying_xfengyin');
                                        game.broadcastAll(function (player) {
                                            img = document.createElement('div');
                                            img.setBackgroundImage('extension/火影忍者/huoying_fengyin.png');
                                            img.style.width = '100%';
                                            img.style.height = '100%';
                                            img.style.backgroundSize = 'cover';
                                            img.style.transform = 'translateY(-200px)';
                                            result.targets[0].node.avatar.appendChild(img);
                                            ui.refresh(img);
                                            img.style.transform = '';
                                        }, player);
                                    }
                                    else {
                                        event.finish();
                                    }
                                },
                                ai: {
                                    threaten: 0.3,
                                    expose: 0.6,
                                    order: 2,
                                },
                            },
                            "huoying_yuanmo": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    player: "phaseEnd",
                                },
                                priority: 8,
                                frequent: true,
                                filter: function (event, player) {
                                    return player.countCards('h') < player.hp;
                                },
                                content: function () {
                                    player.draw(player.hp - player.countCards('h'));
                                    var chat = ['猿魔，助我一臂之力', '没办法呀，老人家了还要战斗'].randomGet();
                                    player.say(chat);
                                },
                                ai: {
                                    threaten: 1.5,
                                },
                            },
                            "huoying_yan": {
                                trigger: {
                                    player: "phaseBegin",
                                },
                                filter: function (event, player) {
                                    return player.hasSkill('huoying_yan');
                                },
                                forced: true,
                                marktext: "炎",
                                unique: true,
                                mark: true,
                                locked: true,
                                charlotte: true,
                                intro: {
                                    content: "<font color=#f00>锁定技</font> 开始阶段，若你有“黑炎”标记，你须进行判定，若判定结果为黑色，你受到一点无来源的火焰伤害",
                                },
                                content: function () {
                                    'step 0'
                                    player.judge();
                                    'step 1'
                                    if (result.color == 'black') {
                                        var targets = game.filterPlayer(function (current) {
                                            return current != player;
                                        });
                                        targets.sort(lib.sort.seat);
                                        event.target = targets.randomGet();
                                        var chat = ['终于出现了，这就是传说中的不会熄灭的黑炎？', '若非亲眼所见，真的难以置信，太强大了'].randomGet();
                                        event.target.say(chat);
                                        game.playhyrz('huoying_yan');
                                        player.damage('fire', 'nosource');
                                    }
                                },
                            },

                            "huoying_tianzhao": {
                                derivation: ['huoying_yan'],
                                audio: "ext:火影忍者:2",
                                mod: {
                                    cardnature(card, player) {
                                        if (card.name == "sha" && !card.nature) return "fire";
                                    },
                                },
                                trigger: {
                                    source: "damageBegin",
                                },
                                forced: true,
                                filter: function (event, player) {
                                    return event.nature == 'fire';
                                },
                                content: function () {
                                    var chat = ['我的天照黑炎能烧毁我所看到的一切，烧毁之前绝不熄灭', '没想到我连天照都用上了'].randomGet();
                                    player.say(chat);
                                    //game.playhyrz(['huoying_tianzhao1', 'huoying_tianzhao2'].randomGet());                                    
                                    trigger.player.addSkill('huoying_yan');
                                    trigger.player.markSkill('huoying_yan');
                                },
                            },
                            "huoying_lunhui": {
                                audio: "ext:火影忍者:2",
                                unique: true,
                                enable: "phaseUse",
                                mark: true,
                                // direct:true,
                                notarget: true,
                                selectCard: 2,
                                filterCard: function (card) {
                                    if (card.name == 'tao') return true;
                                    return false;
                                },
                                position: "h",
                                discard: false,
                                prompt: "请选择两张桃令全场已阵亡角色复活",
                                init: function (player) {
                                    player.storage.huoying_lunhui = false;
                                },
                                intro: {
                                    content: "limited",
                                },
                                limited: true,
                                filter: function (event, player) {
                                    return player.countCards('h', 'tao') > 1 && game.dead.length > 0;
                                },
                                content: function () {
                                    'step 0'
                                    var chat = ['外道•轮回天生之术', '逝去的亡灵啊……归来吧！'].randomGet();
                                    player.say(chat);
                                    player.turnOver();
                                    player.storage.huoying_lunhui = true;
                                    //player.$skill('轮回天生', 'fire', 'red', 'avatar');
                                    player.unmarkSkill('huoying_lunhui');
                                    player.awakenSkill('huoying_lunhui');
                                    'step 1'
                                    game.broadcastAll(function (player) {
                                        var list = [];
                                        for (var i = 0; i < game.dead.length; i++) {
                                            list.push(game.dead[i]);
                                            player.line(game.dead[i], 'green');
                                        }
                                        for (var i = 0; i < list.length; i++) {
                                            list[i].revive();
                                            list[i].draw(2);
                                        }
                                    }, player);
                                },
                                ai: {
                                    order: 8,
                                    /* effect: {
                                 player: function (card, player, target) {
                                     if (player.hasFriend()) return;
                                 },
                             },*/
                                    result: {
                                        player: function (player) {
                                            var num = game.countPlayer(function (current) {
                                                return get.attitude(player, current) > 0;
                                            });
                                            if (num > 1) return 0;
                                            return 1;
                                        },
                                    },
                                },
                            },
                            "huoying_baoxing": {
                                audio: "ext:火影忍者:2",
                                enable: "phaseUse",
                                usable: 1,
                                content: function () {
                                    "step 0"
                                    player.$skill('地爆天星', 'thunder', 'red', 'avatar');
                                    var list1 = [], list2 = [];
                                    for (var i = 0; i < lib.inpile.length; i++) {
                                        var type = get.type(lib.inpile[i]);
                                        if (type == 'basic') {
                                            list1.push(['基本', '', lib.inpile[i]]);
                                        }
                                        else if (type == 'trick') {
                                            list2.push(['锦囊', '', lib.inpile[i]]);
                                        }
                                    }
                                    player.chooseButton([get.prompt('huoying_baoxing'), [list1.concat(list2), 'vcard']]).set('filterButton', function (button) {
                                        return true;
                                    }).set('ai', function (button) {
                                        switch (button.link[2]) {
                                            case 'du': return 6 + 17 * Math.random();
                                            case 'sha': return 1 + 17 * Math.random();
                                            case 'tao': return 5 + 17 * Math.random();
                                            case 'jiu': return 3 + 17 * Math.random();
                                            case 'shan': return 4 + 17 * Math.random();
                                            case 'wuzhong': return 5 + 17 * Math.random();
                                            case 'shunshou': return 4.5 + 17 * Math.random();
                                            case 'guohe': return 2 + 17 * Math.random();
                                            case 'jiedao': return 3 + 17 * Math.random();
                                            case 'juedou': return 3 + 17 * Math.random();
                                            case 'taoyuan': return 8 + 17 * Math.random();
                                            case 'wugu': return 4 + 17 * Math.random();
                                            case 'huogong': return 4 + 17 * Math.random();
                                            case 'tiesuo': return 1 + 17 * Math.random();
                                            case 'nanman': return 4.5 + 17 * Math.random();
                                            case 'wanjian': return 8 + 17 * Math.random();
                                            case 'wuxie': return 3.5 + 17 * Math.random();
                                            default: return 17 * Math.random();
                                        }
                                    }).set('rand', [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()], Math.random());
                                    "step 1"
                                    if (result.bool) {
                                        event.result = result.links[0][2];
                                        if (player.hasSkill('huoying_lunhui')) {
                                            //player.loseHp();
                                            player.turnOver();
                                        }
                                    } else {
                                        event.finish();
                                    }
                                    "step 2"
                                    event.num = 0;
                                    event.targets = game.filterPlayer(function (current) {
                                        return current != player;
                                    });
                                    event.targets.sort(lib.sort.seat);
                                    "step 3"
                                    if (event.num < event.targets.length) {
                                        player.line(event.targets[event.num], 'green');
                                        event.targets[event.num].chooseCard('弃置一张牌名与' + get.translation(event.result) + '相同的手牌，否则' + get.translation(player) + '摸一张牌', 'h', function (card) {
                                            return card.name == event.result;
                                        }).ai = function (card) {
                                            if (get.attitude(player, event.targets[event.num]) > 0) return 0;
                                            return 8 - get.value(card);
                                        };
                                    }
                                    else {
                                        event.finish();
                                    }
                                    "step 4"
                                    if (result.bool) {
                                        event.targets[event.num].discard(result.cards);
                                        //game.log(event.targets[event.num], '弃置了一张', result.cards);
                                        event.num++;
                                        event.goto(3);
                                    }
                                    else {
                                        player.draw();
                                        event.num++;
                                        event.goto(3);
                                    }
                                },
                                ai: {
                                    order: 2,
                                    threaten: 1.5,
                                    result: {
                                        player: function (player) {
                                            if (game.players.length < 4 && !player.isTurnedOver()) return 0;
                                            if (player.hp < 2 && player.hasSkill('huoying_lunhui') && !player.countCards('h', { name: ['tao', 'jiu'] })) return 0;
                                            return 1;
                                        },
                                    },
                                },
                            },//from《文武英杰》松岛枫桂花的概念（该概念技能实际上也是我写的，所以不算抄袭）
                            "huoying_tianyin": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    player: "turnOver",
                                },
                                content: function () { },
                                mod: {
                                    /*
                                    attackFrom:function (from,to,distance){
                                        if(from.isTurnedOver()) return distance-Infinity;
                                    },*/
                                    globalFrom: function (from, to, distance) {
                                        if (from.isTurnedOver()) return distance - Infinity;
                                    },
                                },
                            },
                            "huoying_tianzheng": {
                                audio: "ext:火影忍者:2",
                                group: ["huoying_tianzheng_more", "huoying_tianzheng_less"],
                                subSkill: {
                                    more: {
                                        trigger: {
                                            source: "damageBegin",
                                        },
                                        usable: 1,
                                        check: function (event, player) {
                                            if (event.player.countCards('e', { name: 'baiyin' }) > 0 && !player.countCards('e', { name: 'qinggang' })) return 0;
                                            if (player.isTurnedOver()) return 1;
                                            return get.attitude(player, event.player) < 0;
                                        },
                                        filter: function (event, player) {
                                            if (!player.countCards('h', { color: 'black' })) return false;
                                            return event.card && event.card.isCard && event.card.name == 'sha';
                                        },
                                        content: function () {
                                            'step 0'
                                            player.turnOver();
                                            game.playhyrz(['huoying_tianzheng1', 'huoying_tianzheng2'].randomGet());
                                            player.discard(player.getCards('h', { color: 'black' }));
                                            'step 1'
                                            trigger.num++;
                                            player.say('让世界感受痛楚');
                                        },
                                        sub: true,
                                    },
                                    less: {
                                        trigger: {
                                            player: "damageBegin",
                                        },
                                        filter: function (event, player) {
                                            if (!player.countCards('h', { color: 'red' })) return false;
                                            return event.card && event.card.isCard && event.card.name == 'sha';
                                        },
                                        check: function (event, player) {
                                            if (player.countCards('h', { name: 'tao' })) return 0;
                                            if (player.isTurnedOver()) return 1;
                                            return 1;
                                        },
                                        content: function () {
                                            'step 0'
                                            player.turnOver();
                                            game.playhyrz(['huoying_tianzheng1', 'huoying_tianzheng2'].randomGet());
                                            player.discard(player.getCards('h', { color: 'red' }));
                                            'step 1'
                                            game.delay(0.5);
                                            trigger.num--;
                                        },
                                        sub: true,
                                    },
                                },
                                ai: {
                                    expose: 0.2,
                                    threaten: 1.5,
                                },
                            },
                            "huoying_tiancheng": {
                                trigger: {
                                    player: "compare",
                                    target: "compare",
                                },
                                direct: true,
                                content: function () {
                                    'step 0'
                                    player.chooseControl().set('choiceList', ['超重岩之术（拼点牌点数+' + game.countPlayer() + '）', '超轻岩之术（拼点牌点数-' + game.countPlayer() + '）']).set('ai', function () {
                                        if (player != trigger.player && get.attitude(player, trigger.player) > 0) return 1;
                                        if (player == trigger.player && trigger.target.hp < 3 && get.attitude(player, trigger.target) <= 0) return 1;
                                        return 0;
                                    });
                                    'step 1'
                                    if (result.index == 0) {
                                        if (player == trigger.player) {
                                            game.playhyrz('huoying_tiancheng1');
                                            trigger.num1 += game.countPlayer();
                                            game.log(player, '发动了超重岩之术，拼点牌点数+', game.countPlayer());
                                        }
                                        else {
                                            game.playhyrz('huoying_tiancheng1');
                                            trigger.num2 += game.countPlayer();
                                            game.log(trigger.player, '发动了超重岩之术，拼点牌点数+', game.countPlayer());
                                        }
                                    }
                                    else {
                                        if (player == trigger.player) {
                                            game.playhyrz('huoying_tiancheng2');
                                            trigger.num1 -= game.countPlayer();
                                            game.log(player, '发动了超轻岩之术，拼点牌点数-', game.countPlayer());
                                        }
                                        else {
                                            game.playhyrz('huoying_tiancheng2');
                                            trigger.num2 -= game.countPlayer();
                                            game.log(trigger.player, '发动了超轻岩之术，拼点牌点数-', game.countPlayer());
                                        }
                                    }
                                },
                            },
                            "huoying_jizhu": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    player: "damageEnd",
                                },
                                filter: function (event, player) {
                                    return player.countCards('e') > 0 || player.hp < player.maxHp;
                                },
                                check: function (event, player) {
                                    return get.attitude(player, event.source) < 0;
                                },
                                content: function () {
                                    'step 0'
                                    var chat = ['是神的指令杀了你', '你是黑暗，在没有光明的世界中花儿只能枯萎'].randomGet();
                                    player.say(chat);
                                    event.num = player.countCards('e') + player.maxHp - player.hp;
                                    'step 1'
                                    player.chooseTarget('请选择计诛的目标', function (card, player, target) {
                                        if (player == target) return false;
                                        return target.countCards('he');
                                    }).ai = function (target) {
                                        return -get.attitude(player, target);
                                    };
                                    'step 2'
                                    if (result.bool) {
                                        player.logSkill('huoying_jizhu');
                                        // event.target=result.targets[0];
                                        player.discardPlayerCard(result.targets[0], 'he', true);
                                    }
                                    else {
                                        event.finish();
                                    }
                                    'step 3'
                                    event.num--;
                                    if (event.num) event.goto(1);
                                },
                                ai: {
                                    order: 8,
                                },
                            },
                            "huoying_zhishu": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    global: ["turnOverAfter", "judgeAfter"],
                                },
                                frequent: true,
                                filter: function (event, player) {
                                    return event.player != player;
                                },
                                direct: true,
                                content: function () {
                                    'step 0'
                                    var next;
                                    if (trigger.player.hasCard(function (card) {
                                        return !player.getEquip(card);
                                    }, 'e')) {
                                        next = player.chooseControl('式纸之舞', 'draw_card', 'cancel2', function (event, player) {
                                            var source = _status.event.source;
                                            var att = get.attitude(player, source);
                                            if (source.hasSkillTag('noe')) {
                                                if (att > 0) {
                                                    return '式纸之舞';
                                                }
                                            }
                                            else {
                                                if (att <= 0) {
                                                    return '式纸之舞';
                                                }
                                            }
                                            return 'draw_card';
                                        }).set('source', trigger.player);
                                    }
                                    else {
                                        next = player.chooseControl('draw_card', 'cancel2', function () {
                                            return 'draw_card';
                                        });
                                    }
                                    next.set('prompt', get.prompt('huoying_zhishu', trigger.player));
                                    'step 1'
                                    if (result.control == '式纸之舞') {
                                        player.logSkill('huoying_zhishu', trigger.player);
                                        var chat = ['我要成为支撑弥彦和长门这两座桥梁的支柱', '下一次，我希望你能开出永不凋谢的希望之花送给我'].randomGet();
                                        player.say(chat);
                                        player.choosePlayerCard(trigger.player, 'e', '获得一张装备区的牌').set('filterButton', function (button) {
                                            return !_status.event.player.getEquip(button.link);
                                        });
                                    }
                                    else {
                                        if (result.control == 'draw_card') {
                                            player.logSkill('huoying_zhishu');
                                            player.draw();
                                        }
                                        event.finish();
                                    }
                                    'step 2'
                                    if (result && result.links && result.links.length) {
                                        game.delay(2);
                                        trigger.player.$give(result.links[0], player);
                                        player.gain(result.links[0]);
                                        player.equip(result.links[0]);
                                        player.addExpose(0.2);
                                    }
                                },
                            },
                            "huoying_kuangbao": {
                                audio: "ext:火影忍者:2",
                                direct: true,
                                trigger: {
                                    global: "damageEnd",
                                },
                                filter: function (event, player) {
                                    return event.nature == 'fire' || event.nature == 'thunder';
                                },
                                // check:function (event,player){
                                //    return get.attitude(player,event.player)<0;
                                //   },
                                content: function () {
                                    'step 0'
                                    player.chooseBool('是否对' + get.translation(trigger.player) + '发动〖狂暴〗？').set('ai', function () {
                                        if (get.attitude(player, trigger.player) <= 0) return true;
                                        return false;
                                    });
                                    'step 1'
                                    if (result.bool) {
                                        game.delay(1);
                                        var chat = ['杀……哈哈……把你们通通杀光', '君麻吕，佐助，你们都是我信赖的朋友'].randomGet();
                                        player.say(chat);
                                        trigger.player.damage(trigger.num);
                                        player.logSkill('huoying_kuangbao');
                                    }
                                    else {
                                        event.finish();
                                    }
                                },
                                ai: {
                                    order: 2,
                                    result: {
                                        player: 1,
                                    },
                                },
                            },

                            "huoying_xmudun2": {
                                enable: "chooseToUse",
                                usable: 1,
                                audio: "ext:火影忍者:1",
                                filterCard: function () { return false },
                                selectCard: -1,
                                viewAsFilter: function (player) {
                                    return true;
                                },
                                viewAs: { name: "wuxie" },
                                onuse: function (result, player) { },
                                prompt: "你可视为使用一张【无懈可击】",
                                check: function () { return 1 },
                                ai: {
                                    threaten: 0.2,
                                    basic: {
                                        useful: [6, 4],
                                        value: [6, 4],
                                    },
                                    result: {
                                        player: 1,
                                    },
                                    expose: 0.2,
                                },
                            },
                            huoying_xmudun: {
                                audio: "ext:火影忍者:1",
                                //group: ["huoying_xmudun2"],
                                //usable: 1,
                                enable: ["chooseToUse", "chooseToRespond"],
                                hiddenCard: function (player, name) {
                                    if (name == 'wuxie') return false;
                                    if (lib.inpile.contains(name)) return true;
                                },
                                filter: function (event, player) {
                                    if (player.getStat().skill.huoying_xmudun >= player.hp) return false;
                                    if (event.type == 'wuxie') return false;
                                    var list = [];
                                    for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                                        list.push(ui.cardPile.childNodes[i]);
                                    }
                                    for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
                                        list.push(ui.discardPile.childNodes[i]);
                                    }
                                    if(list.length==0) return false;
                                    for (var i of lib.inpile) {
                                        if (i == 'wuxie') return false;
                                        if (event.filterCard({ name: i }, player, event)) return true;
                                    }
                                    return false;
                                },
                                delay: false,
                                content: function () {
                                    'step 0'
                                    var evt = event.getParent(2);
                                    evt.set("huoying_xmudun", true);
                                    var list = [];
                                    for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                                        list.push(ui.cardPile.childNodes[i]);
                                    }
                                    for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
                                        list.push(ui.discardPile.childNodes[i]);
                                    }
                                    if(list.length>0){
                                    var cards = list.randomGets(Math.min(list.length,player.hp));
                                    var aozhan = player.hasSkill("aozhan");
                                    player
                                        .chooseButton(["木遁：选择要" + (evt.name == "chooseToUse" ? "使用" : "打出") + "的牌", cards])
                                        .set("filterButton", function (button) {
                                            return _status.event.cards.includes(button.link);
                                        })
                                        .set(
                                            "cards",
                                            cards.filter(function (card) {
                                                if (aozhan && card.name == "tao") {
                                                    return (
                                                        evt.filterCard(
                                                            {
                                                                name: 'sha',
                                                                isCard: true,
                                                                cards: [card],
                                                            },
                                                            evt.player,
                                                            evt
                                                        ) ||
                                                        evt.filterCard(
                                                            {
                                                                name: "shan",
                                                                isCard: true,
                                                                cards: [card],
                                                            },
                                                            evt.player,
                                                            evt
                                                        )
                                                    );
                                                }
                                                return evt.filterCard(card, evt.player, evt);
                                            })
                                        )
                                        .set("ai", function (button) {
                                            var evt = _status.event.getParent(3);
                                            if (evt && evt.ai) {
                                                var tmp = _status.event;
                                                _status.event = evt;
                                                var result = (evt.ai || event.ai1)(button.link, _status.event.player, evt);
                                                _status.event = tmp;
                                                return result;
                                            }
                                            return 1;
                                        });
                                        }
                                    'step 1'
                                    var evt = event.getParent(2);
                                    if (result.bool && result.links && result.links.length) {
                                        var card = result.links[0];
                                        var name = card.name,
                                            aozhan = player.hasSkill("aozhan") && name == "tao";
                                        if (aozhan) {
                                            name = evt.filterCard(
                                                {
                                                    name: 'sha',
                                                    isCard: true,
                                                    cards: [card],
                                                },
                                                evt.player,
                                                evt
                                            )
                                                ? 'sha'
                                                : "shan";
                                        }
                                        if (evt.name == "chooseToUse") {
                                            game.broadcastAll(
                                                function (result, name) {
                                                    lib.skill.huoying_xmudun_backup.viewAs = {
                                                        name: name,
                                                        cards: [result],
                                                        isCard: true,
                                                    };
                                                },
                                                card,
                                                name
                                            );
                                            evt.set("_backupevent", "huoying_xmudun_backup");
                                            evt.set("openskilldialog", "请选择" + get.translation(card) + "的目标");
                                            evt.backup("huoying_xmudun_backup");
                                        } else {
                                            delete evt.result.skill;
                                            delete evt.result.used;
                                            evt.result.card = get.autoViewAs(result.links[0]);
                                            if (aozhan) evt.result.card.name = name;
                                            evt.result.cards = [result.links[0]];
                                            evt.redo();
                                            return;
                                        }
                                    }
                                    evt.goto(0);
                                },
                                ai: {
                                    effect: {
                                        target: function (card, player, target, effect) {
                                            if (get.tag(card, "respondShan")) return 0.7;
                                            if (get.tag(card, "respondSha")) return 0.7;
                                        },
                                    },
                                    order: 11,
                                    respondShan: true,
                                    respondSha: true,
                                    result: {
                                        player: function (player) {
                                            if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                            return 1;
                                        },
                                    },
                                },
                            },
                            huoying_xmudun_backup: {
                                sourceSkill: "huoying_xmudun",
                                precontent: function () {
                                    delete event.result.skill;
                                    var name = event.result.card.name,
                                        cards = event.result.card.cards.slice(0);
                                    event.result.cards = cards;
                                    var rcard = cards[0],
                                        card;
                                    if (rcard.name == name) card = get.autoViewAs(rcard);
                                    else card = get.autoViewAs({ name, isCard: true });
                                    event.result.card = card;
                                },
                                filterCard: function () {
                                    return false;
                                },
                                selectCard: -1,
                            },

                            "huoying_daiban": {
                                mode: ["identity"],
                                unique: true,
                                group: ["huoying_daiban_live", "huoying_daiban_die"],
                                subSkill: {
                                    live: {
                                        mode: ["identity"],
                                        unique: true,
                                        trigger: {
                                            global: ["gameStart", "zhuUpdate"],
                                        },
                                        forced: true,
                                        filter: function (event, player) {
                                            var mode = get.mode();
                                            return (mode == 'identity' || (mode == 'versus' && _status.mode == 'four'));
                                        },
                                        content: function () {
                                            'step 0'
                                            var list = [];
                                            var zhu = get.zhu(player);
                                            if (zhu && zhu != player && zhu.skills) {
                                                for (var i = 0; i < zhu.skills.length; i++) {
                                                    if (lib.skill[zhu.skills[i]] && lib.skill[zhu.skills[i]].zhuSkill) {
                                                        list.push(zhu.skills[i]);
                                                    }
                                                }
                                            }
                                            player.addAdditionalSkill('huoying_daiban', list);
                                            player.storage.zhuSkill_huoying_daiban = list;
                                            'step 1'
                                            for (var j = 0; j < game.zhu.getSkills().length; j++) {
                                                if (lib.skill[game.zhu.getSkills()[j]].zhuSkill == true) {
                                                    //player.addSkill(game.zhu.getSkills()[j]);
                                                    //player.storage['zhuSkill_'+game.zhu.getSkills()[j]]=true;
                                                    game.zhu.addSkill('huoying_daiban_1');
                                                };
                                            };
                                        },
                                        sub: true,
                                    },
                                    die: {
                                        mode: ["identity"],
                                        unique: true,
                                        trigger: {
                                            player: "dieBegin",
                                        },
                                        forced: true,
                                        content: function () {
                                            game.zhu.removeSkill('huoying_daiban_1');
                                        },
                                        sub: true,
                                    },
                                },
                            },
                            "huoying_daiban_1": {
                                init: function (player, skill) {
                                    var skills = player.getSkills(true, false);
                                    for (var i = 0; i < skills.length; i++) {
                                        if (!lib.skill[skills[i]].zhuSkill == true) skills.splice(i--, 1);
                                    };
                                    player.disableSkill(skill, skills);
                                },
                                onremove: function (player, skill) {
                                    player.enableSkill(skill);
                                },
                                locked: true,
                                unique: true,
                                mark: true,
                                intro: {
                                    content: function (storage, player, skill) {
                                        return '主公技失效';
                                    },
                                },
                            },
                            "huoying_duizhang": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    global: "compare",
                                },
                                forced: true,
                                filter: function (event, player) {
                                    return !event.iwhile;
                                },
                                content: function () {
                                    var chat = ['卡卡西前辈，你怎么看？', '各位，摆好阵势，保持队型……我先摸一张牌！'].randomGet();
                                    player.say(chat);
                                    player.draw();
                                },
                            },
                            "huoying_shouyu": {
                                audio: "ext:火影忍者:2",
                                group: ["huoying_shouyu_effect1", "huoying_shouyu_effect2"],
                                subSkill: {
                                    "effect1": {
                                        audio: "ext:火影忍者:2",
                                        trigger: {
                                            global: "damageBegin",
                                        },
                                        priority: 15,
                                        filter: function (event, player) {
                                            return event.player != player;
                                        },
                                        check: function (event, player) {
                                            if (player.hp < 2 || event.player.hp > 2) return 0;
                                            return get.attitude(player, event.player) > 0;
                                        },
                                        content: function () {
                                            var chat = ['玉之义……代表着村里的小孩子们，他们是村子的未来与希望', '这一次，就让我来挡住狂风暴雨吧！'].randomGet();
                                            player.say(chat);
                                            player.logSkill("huoying_shouyu", trigger.player);
                                            trigger.player = player;
                                        },
                                        sub: true,
                                    },
                                    "effect2": {
                                        audio: "ext:火影忍者:1",
                                        trigger: {
                                            player: "damageEnd",
                                        },
                                        frequent: true,
                                        filter: function (event, player) {
                                            return player.isDamaged();
                                        },
                                        content: function () {
                                            var chat = ['这痛感，实在是太美妙了', '我还能坚持下去！'].randomGet();
                                            player.say(chat);
                                            player.draw(player.maxHp - player.hp);
                                        },
                                        ai: {
                                            effect: {
                                                target: function (card, player, target) {
                                                    if (get.tag(card, 'damage')) {
                                                        var num = player.maxHp - player.hp + 1;
                                                        if (player.hasSkillTag('jueqing', false, target)) return [1, -num];
                                                        if (!target.hasFriend()) return;
                                                        if (target.hp <= get.tag(card, 'damage')) return;
                                                        return [1, num];
                                                    }
                                                },
                                            },
                                        },
                                        sub: true,
                                    },
                                },
                            },
                            "huoying_fengdun": {
                                trigger: {
                                    player: "shaBegin",
                                },
                                filter: function (event, player) {
                                    return player.countCards('h') > player.hp;
                                },
                                forced: true,
                                audio: "ext:火影忍者:2",
                                content: function () {
                                    trigger.directHit = true;
                                    var chat = ['这就是风属性查克拉的威力', '将查克拉凝聚于刀上，将无坚不摧'].randomGet();
                                    player.say(chat);
                                },
                            },
                            "huoying_jinshao": {
                                audio: "ext:火影忍者:1",
                                skillAnimation: "epic",
                                animationColor: 'fire',
                                enable: "phaseUse",
                                limited: true,
                                filter: function (event, player) {
                                    return !player.storage.huoying_jinshao;
                                },
                                filterTarget: function (card, player, target) {
                                    return player != target;
                                },
                                unique: true,
                                logTarget: "target",
                                selectTarget: [1, Infinity],
                                mark: true,
                                line: 'fire',
                                content: function () {
                                    'step 0'
                                    var chat = ['这招是作为一名烟民在抽烟时创造的招式', '尽情地给我爆燃吧！'].randomGet();
                                    player.say(chat);
                                    player.storage.huoying_jinshao = true;
                                    player.awakenSkill('huoying_jinshao');
                                    var res = get.damageEffect(target, player, target, 'fire');
                                    //var num = Math.max(1, 2 * target.countCards('e'));
                                    var num = targets.length;
                                    target.chooseToDiscard(num, 'he', '弃置' + get.cnNumber(num) + '张牌或受到两点火焰伤害').set('ai', function (card) {
                                        var res = _status.event.res;
                                        var num = _status.event.num;
                                        var player = _status.event.player;
                                        if (res >= 0) return -1;
                                        if (num > 2 && player.hp > 1) return -1;
                                        if (num > 1 && player.hp > 2) return -1;
                                        if (get.position(card) == 'e') {
                                            return 6 - get.value(card);
                                        }
                                        return 8 - get.value(card);
                                    }).set('res', res).set('num', num);
                                    'step 1'
                                    if (!result.bool) {
                                        target.damage(1, 'fire');
                                    }
                                },
                                ai: {
                                    order: 1,
                                    result: {
                                        target: function (player, target) {
                                            if (target.hp <= 1) return -3.5;
                                            return -2;
                                        },
                                        player: function (player) {
                                            var num = 0, players = game.filterPlayer();
                                            for (var i = 0; i < players.length; i++) {
                                                if (player != players[i] && get.damageEffect(players[i], player, players[i], 'fire') < 0) {
                                                    var att = get.attitude(player, players[i]);
                                                    if (att > 0) {
                                                        num -= Math.max(1, players[i].countCards('e'));
                                                    }
                                                    else if (att < 0) {
                                                        num += Math.max(1, players[i].countCards('e'));
                                                    }
                                                }
                                            }
                                            if (players.length < 5) {
                                                return num - 1;
                                            }
                                            else {
                                                return num - 2;
                                            }
                                        },
                                    },
                                },
                                init: function (player) {
                                    player.storage.huoying_jinshao = false;
                                },
                                intro: {
                                    content: "limited",
                                },
                            },
                            "huoying_rongdun": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    global: "equipBegin",
                                },
                                usable: 1,
                                check: function (event, player) {
                                    return get.attitude(player, event.player) <= 0;
                                },
                                filter: function (event, player) {
                                    return event.player != player;
                                },
                                content: function () {
                                    trigger.cancel();
                                    player.draw();
                                    var chat = ['现在终于密室独处了，你已无路可退', '我有两个血继限界，这只是其中一个'].randomGet();
                                    player.say(chat);
                                },
                                priority: 0,
                                ai: {
                                    expose: 0.8,
                                },
                            },
                            "huoying_feidun": {
                                audio: "ext:火影忍者:2",
                                enable: "phaseUse",
                                usable: 1,
                                filterTarget: function (card, player, target) {
                                    return target != player && target.countCards('he');
                                },
                                content: function () {
                                    'step 0'
                                    if (player.countCards('h')) {
                                        player.chooseCardButton('沸遁', target.getCards('he')).ai = function (button) {
                                            return get.value(button.link);
                                        }
                                    }
                                    else {
                                        player.viewHandcards(target);
                                        event.finish();
                                    }
                                    'step 1'
                                    if (result.bool) {
                                        event.card = result.links[[0]];
                                        player.chooseCard('h', true, '用一张手牌替换' + get.translation(event.card)).ai = function (card) {
                                            return -get.value(card);
                                        };
                                    }
                                    else {
                                        event.finish();
                                    }
                                    'step 2'
                                    if (result.bool) {
                                        var chat = ['这么帅气的男生，是该给一个蚀骨溶心的吻', '不要在我面前提婚期……'].randomGet();
                                        player.say(chat);
                                        player.gain(event.card, target);
                                        target.gain(result.cards, player);
                                        player.$giveAuto(result.cards, target);
                                        target.$giveAuto(event.card, player);
                                        game.log(player, '与', target, '交换了一张牌');
                                        target.damage('fire');
                                    }
                                },
                                ai: {
                                    threaten: 1.3,
                                    result: {
                                        target: function (player, target) {
                                            return -target.countCards('he');
                                        },
                                    },
                                    order: 10,
                                    expose: 0.2,
                                },
                            },

                            "huoying_yuedu": {
                                audio: "ext:火影忍者:3",
                                usable: 1,
                                enable: "phaseUse",
                                filterTarget: function (card, player, target) {
                                    return player.canCompare(target) && player != target && target.countCards('h') > 0;
                                },
                                filter: function (event, player) {
                                    return player.countCards('h') > 0;
                                },
                                content: function () {
                                    'step 0'
                                    player.chooseToCompare(target);
                                    var chat = ['在月读的世界里，时间、空间、质量都由我所控', '你已经中了我的幻术', '原谅我，佐助，光明我取走了'].randomGet();
                                    player.say(chat);
                                    'step 1'
                                    if (result.bool) {
                                        //alive('extension/火影忍者/xwj_yuedu.gif',4.8,true);          
                                        //game.delay(2);  
                                        target.turnOver();
                                        player.storage.huoying_yuedu3 = target;
                                        player.addTempSkill('huoying_yuedu3', 'phaseAfter');
                                        target.addTempSkill('fengyin', 'phaseAfter');
                                        target.addTempSkill('huoying_yuedu2', 'phaseAfter');
                                        event.finish();
                                    }
                                },
                                ai: {
                                    result: {
                                        target: function (player, target) {
                                            if (target.isTurnedOver()) return 0;
                                            return -target.countCards('h');
                                        },
                                    },
                                    order: 9,
                                },
                            },
                            "huoying_xuzuo": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    player: "damageBegin",
                                },
                                forced: true,
                                filter: function (event, player) {
                                    if (event.nature && player.countCards('h')) return true;
                                    if (!event.nature && !player.countCards('h')) return true;
                                    return false;
                                },
                                content: function () {
                                    var chat = ['当双眼开了万花筒写轮眼，这个术便寄存其中', '让你见识我最后的杀手锏吧', '真正的战斗现在才开始'].randomGet();
                                    player.say(chat);
                                    trigger.cancel();
                                },
                                mod: {
                                    globalTo: function (from, to, distance) {
                                        return distance + 1;
                                    },
                                },
                                srlose: true,
                                ai: {
                                    nofire: function (player) {
                                        return player.countCards('h') > 0;
                                    },
                                    nothunder: function (player) {
                                        return player.countCards('h') > 0;
                                    },
                                    effect: {
                                        target: function (card, player, target, current) {
                                            if (get.tag(card, 'natureDamage') && target.countCards('h') > 0) return 0;
                                            if (card.name == 'tiesuo' && target.countCards('h') > 0) return [0, 0];
                                            if (!get.tag(card, 'natureDamage') && !target.countCards('h')) return [0, 0];
                                        },
                                    },
                                },
                                intro: {
                                    content: function (storage, player) {
                                        var str = '';
                                        if (player.countCards('h')) {
                                            str += '防止属性伤害';
                                        }
                                        else {
                                            str += '防止非属性伤害';
                                        }
                                        return str;
                                    },
                                },
                            },
                            "huoying_baiyan": {
                                audio: "ext:火影忍者:2",
                                enable: "phaseUse",
                                usable: 1,
                                filterTarget: function (card, player, target) {
                                    if (player == target) return false;
                                    return (target.countCards('h') || target.isUnseen(2));
                                },
                                content: function () {
                                    'step 0'
                                    player.chooseCardButton(target, target.getCards('h')).set('filterButton', function (button) {
                                        return get.color(button.link) == 'red';
                                    });
                                    'step 1'
                                    if (result.bool) {
                                        var chat = ['别问我为何见到鸣人就脸红只钟情于他，因为我的白眼能透视看到鸣人过人的长处', '鸣人君，多谢你！', '给我look一下'].randomGet();
                                        player.say(chat);
                                        event.card = result.links[0];
                                        player.gain(event.card, target);
                                        target.$give(event.card, player);
                                    }

                                },
                                selectTarget: 1,
                                ai: {
                                    threaten: 1.5,
                                    result: {
                                        target: function (player, target) {
                                            return -target.countCards('h');
                                        },
                                    },
                                    order: 10,
                                    expose: 0.4,
                                },
                            },
                            "huoying_zhangshu": {
                                audio: "ext:火影忍者:1",
                                trigger: {
                                    player: "loseEnd",
                                },
                                frequent: true,
                                filter: function (event, player) {
                                    if (player == _status.currentPhase) return false;
                                    for (var i = 0; i < event.cards.length; i++) {
                                        if (event.cards[i].original && event.cards[i].original != 'j') return true;
                                    }
                                    return false;
                                },
                                content: function () {
                                    player.draw();
                                },
                            },
                            "huoying_shanguang": {
                                mod: {
                                    globalTo: function (from, to, distance) {
                                        return distance + to.getDamagedHp();
                                    },
                                    globalFrom: function (from, to, distance) {
                                        return distance - Infinity;
                                    },
                                },
                            },

                            "huoying_luoxuan": {
                                enable: 'phaseUse',
                                usable: 1,
                                audio: "ext:火影忍者:2",
                                filter: function (event, player) {
                                    return event.type != 'wuxie';
                                },
                                chooseButton: {
                                    dialog: function (event, player) {
                                        var list = [];
                                        for (var i = 0; i < lib.inpile.length; i++) {
                                            var name = lib.inpile[i];
                                            if (name == 'sha') {
                                                list.push(['基本', '', 'sha']);
                                                list.push(['基本', '', 'sha', 'ice']);
                                                list.push(['基本', '', 'sha', 'fire']);
                                                list.push(['基本', '', 'sha', 'thunder']);
                                            }
                                            if (name != 'wuxie' && get.type(name) == 'trick') list.push(['锦囊', '', name]);
                                            else if (get.type(name) == 'basic') list.push(['基本', '', name]);
                                        }
                                        if (list.length == 0) {
                                            return ui.create.dialog('螺旋已无可用牌');
                                        }
                                        return ui.create.dialog('螺旋丸', [list, 'vcard'], 'hidden');
                                    },
                                    filter: function (button, player) {
                                        return lib.filter.filterCard({ name: button.link[2] }, player, _status.event.getParent());
                                    },
                                    check: function (button) {
                                        var player = _status.event.player;
                                        var players = game.filterPlayer();
                                        if (player.countCards('h', button.link)) return 0;
                                        if (button.link[2] == 'wuzhong') {
                                            if (player.countCards('h') < player.hp) {
                                                return 3 + Math.random();
                                            }
                                            return 0;
                                        }
                                        if (button.link[2] == 'tao') {
                                            return 3 + Math.random();
                                        }
                                        if (button.link[2] == 'sha') {
                                            return 2 + Math.random();
                                        }
                                        if (button.link[2] == 'juedou') {
                                            return 2 + Math.random();
                                        }
                                        if (button.link[2] == 'guohe') {
                                            return 2 + Math.random();
                                        }
                                        if (button.link[2] == 'shunshou') {
                                            for (var i = 0; i < players.length; i++) {
                                                if (player.canUse('shunshou', players[i]) && get.attitude(player, players[i]) < 0) {
                                                    return 2 + Math.random();
                                                }
                                            }
                                            return 0;
                                        }
                                        if (button.link[2] == 'tiesuo') {
                                            return 1 + Math.random();
                                        }
                                        if (button.link[2] == 'jiu') {
                                            if (get.effect(player, { name: 'jiu' }) > 0) {
                                                return 1 + Math.random();
                                            }
                                            return 0;
                                        }
                                        if (button.link[2] == 'nanman' || button.link[2] == 'wanjian' || button.link[2] == 'taoyuan' || button.link[2] == 'wugu') {
                                            var eff = 0;
                                            for (var i = 0; i < players.length; i++) {
                                                if (players[i] != player) {
                                                    eff += get.effect(players[i], { name: button.link[2] }, player, player);
                                                }
                                            }
                                            if (eff > 0) {
                                                return 1 + Math.random();
                                            }
                                            return 0;
                                        }
                                        return Math.random();

                                    },
                                    backup: function (links, player) {
                                        return {
                                            filterCard: function () { return false },
                                            selectCard: -1,
                                            viewAsFilter: function (player) { return true },
                                            popname: true,
                                            ignoreMod: true,
                                            viewAs: { name: links[0][2], nature: links[0][3], suit: null, number: null, isCard: true },
                                            onuse: function (result, player) { },
                                            precontent: function () {
                                                var chat = ['这招是我自创的忍术——螺旋丸', '只恨这忍术未完成，未加入属性，否则你们必死无疑'].randomGet();
                                                player.say(chat);
                                                game.playhyrz(['huoying_luoxuan1', 'huoying_luoxuan2'].randomGet());
                                            },
                                        }
                                    },
                                    prompt: function (links, player) {
                                        return '视为使用' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]);
                                    }
                                },
                                ai: {
                                    order: 3,
                                    result: {
                                        player: function (player) {
                                            var allshown = true, players = game.filterPlayer();
                                            for (var i = 0; i < players.length; i++) {
                                                if (players[i].ai.shown == 0) {
                                                    allshown = false;
                                                }
                                                if (get.attitude(player, players[i]) > 0) {
                                                    return 1;
                                                }
                                            }
                                            if (allshown) return 1;
                                            return 0.8;
                                        }
                                    },
                                },
                            },

                            "huoying_mrluoxuan": {
                                enable: 'phaseUse',
                                usable: 1,
                                audio: "ext:火影忍者:2",
                                filter: function (event, player) {
                                    return event.type != 'wuxie';
                                },
                                chooseButton: {
                                    dialog: function (event, player) {
                                        var list = [];
                                        for (var i = 0; i < lib.inpile.length; i++) {
                                            var name = lib.inpile[i];
                                            if (name == 'sha') {
                                                list.push(['基本', '', 'sha']);
                                                list.push(['基本', '', 'sha', 'ice']);
                                                list.push(['基本', '', 'sha', 'fire']);
                                                list.push(['基本', '', 'sha', 'thunder']);
                                            }
                                            else if (name != 'wuxie' && get.type(name) == 'trick') list.push(['锦囊', '', name]);
                                            else if (get.type(name) == 'basic') list.push(['基本', '', name]);
                                        }
                                        if (list.length == 0) {
                                            return ui.create.dialog('螺旋已无可用牌');
                                        }
                                        return ui.create.dialog('螺旋丸', [list, 'vcard']);
                                    },
                                    filter: function (button, player) {
                                        return lib.filter.filterCard({ name: button.link[2] }, player, _status.event.getParent());
                                    },
                                    check: function (button) {
                                        var player = _status.event.player;
                                        var players = game.filterPlayer();
                                        if (player.countCards('h', button.link)) return 0;
                                        if (button.link[2] == 'wuzhong') {
                                            if (player.countCards('h') < player.hp) {
                                                return 3 + Math.random();
                                            }
                                            return 0;
                                        }
                                        if (button.link[2] == 'tao') {
                                            return 3 + Math.random();
                                        }
                                        if (button.link[2] == 'sha') {
                                            return 2 + Math.random();
                                        }
                                        if (button.link[2] == 'juedou') {
                                            return 2 + Math.random();
                                        }
                                        if (button.link[2] == 'guohe') {
                                            return 2 + Math.random();
                                        }
                                        if (button.link[2] == 'shunshou') {
                                            for (var i = 0; i < players.length; i++) {
                                                if (player.canUse('shunshou', players[i]) && get.attitude(player, players[i]) < 0) {
                                                    return 2 + Math.random();
                                                }
                                            }
                                            return 0;
                                        }
                                        if (button.link[2] == 'tiesuo') {
                                            return 1 + Math.random();
                                        }
                                        if (button.link[2] == 'jiu') {
                                            if (get.effect(player, { name: 'jiu' }) > 0) {
                                                return 1 + Math.random();
                                            }
                                            return 0;
                                        }
                                        if (button.link[2] == 'nanman' || button.link[2] == 'wanjian' || button.link[2] == 'taoyuan' || button.link[2] == 'wugu') {
                                            var eff = 0;
                                            for (var i = 0; i < players.length; i++) {
                                                if (players[i] != player) {
                                                    eff += get.effect(players[i], { name: button.link[2] }, player, player);
                                                }
                                            }
                                            if (eff > 0) {
                                                return 1 + Math.random();
                                            }
                                            return 0;
                                        }
                                        return Math.random();

                                    },
                                    backup: function (links, player) {
                                        return {
                                            filterCard: function () { return false },
                                            selectCard: -1,
                                            viewAsFilter: function (player) { return true },
                                            popname: true,
                                            ignoreMod: true,
                                            viewAs: { name: links[0][2], nature: links[0][3], suit: null, number: null, isCard: true },
                                            onuse: function (result, player) { },
                                            precontent: function () {
                                                var chat = ['螺旋丸', '只要给我三天时间，我就能学会这招'].randomGet();
                                                player.say(chat);
                                                game.playhyrz(['huoying_mrluoxuan1', 'huoying_mrluoxuan2'].randomGet());
                                            },
                                        }
                                    },
                                    prompt: function (links, player) {
                                        return '视为使用' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]);
                                    }
                                },
                                ai: {
                                    order: 5,
                                    result: {
                                        player: function (player) {
                                            var allshown = true, players = game.filterPlayer();
                                            for (var i = 0; i < players.length; i++) {
                                                if (players[i].ai.shown == 0) {
                                                    allshown = false;
                                                }
                                                if (get.attitude(player, players[i]) > 0) {
                                                    return 1;
                                                }
                                            }
                                            if (allshown) return 1;
                                            return 0.8;
                                        }
                                    },
                                },
                            },

                            "huoying_yandun": {
                                audio: "ext:火影忍者:3",
                                enable: "phaseUse",
                                usable: 1,
                                filterTarget: function (card, player, target) {
                                    return player.canCompare(target) && player != target && target.countCards('h') > 0;
                                },
                                filter: function (event, player) {
                                    return player.countCards('h') > 0;
                                },
                                derivation: ['huoying_yan'],
                                content: function () {
                                    'step 0'
                                    player.chooseToCompare(target);
                                    var chat = ['赢的当火影，输的……娶小樱', '我要血洗木叶村！'].randomGet();
                                    player.say(chat);
                                    'step 1'
                                    if (result.bool) {
                                        var chat = ['木叶的高层，拿命来！', '这就是……万花筒写轮眼的能力？'].randomGet();
                                        player.say(chat);
                                        player.viewHandcards(target);
                                        target.damage('fire');
                                        target.addSkill('huoying_yan');
                                        target.markSkill('huoying_yan');
                                    }
                                    else {
                                        player.gain(get.cardPile(function (card) {
                                            return card.name == 'sha';
                                        }), 'gain2');
                                        var chat = ['啊……我的眼睛流血了', '全身的骨头都在疼，鼬究竟忍受着怎样的痛楚？'].randomGet();
                                        player.say(chat);
                                        target.removeSkill('huoying_yan');
                                        target.unmarkSkill('huoying_yan');
                                    }
                                },
                                ai: {
                                    result: {
                                        target: function (player, target) {
                                            return -target.countCards('h');
                                        },
                                    },
                                    order: 8,
                                    threaten: 0.5,
                                },
                            },
                            "huoying_rexuzuo": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    player: "damageBegin",
                                },
                                forced: true,
                                filter: function (event, player) {
                                    if (event.nature && player.countCards('h')) return true;
                                    if (!event.nature && !player.countCards('h')) return true;
                                    return false;
                                },
                                content: function () {
                                    trigger.cancel();
                                },
                                mod: {
                                    maxHandcard: function (player, num) {
                                        return num + 1;
                                    },
                                },
                                srlose: true,
                                ai: {
                                    nofire: function (player) {
                                        return player.countCards('h') > 0;
                                    },
                                    nothunder: function (player) {
                                        return player.countCards('h') > 0;
                                    },
                                    effect: {
                                        target: function (card, player, target, current) {
                                            if (get.tag(card, 'natureDamage') && target.countCards('h') > 0) return 0;
                                            if (card.name == 'tiesuo' && target.countCards('h') > 0) return [0, 0];
                                            if (!get.tag(card, 'natureDamage') && !target.countCards('h')) return [0, 0];
                                        },
                                    },
                                },
                                intro: {
                                    content: function (storage, player) {
                                        var str = '';
                                        if (player.countCards('h')) {
                                            str += '防止属性伤害';
                                        }
                                        else {
                                            str += '防止非属性伤害';
                                        }
                                        return str;
                                    },
                                },
                            },
                            "huoying_qianniao": {
                                prompt: "</font><font color=#f00>锁定技</font> 你的普通【杀】均视为雷【杀】且雷【杀】无距离限制",
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    player: "shaBegin",
                                },
                                forced: true,
                                content: function () { },
                                mod: {
                                    cardnature(card, player) {
                                        if (card.name == "sha" && !card.nature) return "thunder";
                                    },
                                    targetInRange: function (card) {
                                        if (card.name == 'sha' && card.nature == 'thunder') return true;
                                    },
                                    /*
                                    cardEnabled: function (card, player) {
                                        if (_status.event.skill == undefined && card.name == 'sha' && get.color(card) == 'black') return false;
                                    },
                                    cardUsable: function (card, player) {
                                        if (_status.event.skill == undefined && card.name == 'sha' && get.color(card) == 'black') return false;
                                        if (card.name == 'sha' && card.nature == 'thunder') return Infinity;
                                    },
                                    cardRespondable: function (card, player) {
                                        if (_status.event.skill == undefined && card.name == 'sha' && get.color(card) == 'black') return false;
                                    },
                                    cardSavable: function (card, player) {
                                        if (_status.event.skill == undefined && card.name == 'sha' && get.color(card) == 'black') return false;
                                    },
                                    */
                                },
                            },
                            "huoying_xianshu": {
                                audio: "ext:火影忍者:2",
                                forced: true,
                                trigger: {
                                    player: "loseEnd",
                                },
                                filter: function (event, player) {
                                    if (player.countCards('h') > 0) return false;
                                    for (var i = 0; i < event.cards.length; i++) {
                                        if (event.cards[i].original == 'h') return true;
                                    }
                                    return false;
                                },
                                content: function () {
                                    player.draw();
                                    player.recover();
                                },
                                ai: {
                                    threaten: 0.8,
                                    effect: {
                                        target: function (card, player, target) {
                                            if (target.countCards('h') == 1 && card.name == 'guohe') return 0.5;
                                            if (target.isTurnedOver() && target.countCards('h') == 1 && (card.name == 'guohe' || card.name == 'shunshou')) return -5;
                                        },
                                    },
                                    noh: true,
                                },
                            },
                            "huoying_jiamei2": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    player: "phaseUseEnd",
                                },
                                forced: true,
                                content: function () {
                                    player.recover(Infinity)
                                },
                            },
                            "huoying_jiamei": {
                                audio: "ext:火影忍者:2",
                                enable: "phaseUse",
                                unique: true,
                                limited: true,
                                mark: true,
                                marktext: "寐",
                                init: function (player) {
                                    player.storage.huoying_jiamei = false;
                                },
                                intro: {
                                    content: "limited",
                                },
                                filter: function (event, player) {
                                    return player.hp > 1;
                                },
                                content: function () {
                                    //player.$skill('假寐术', 'fire', 'red', 'avatar');
                                    player.addTempSkill('huoying_jiamei2');
                                    player.loseHp(player.hp - 1);
                                    player.draw(player.getDamagedHp());
                                    player.storage.huoying_jiamei = true;
                                    player.awakenSkill('huoying_jiamei');
                                },
                                ai: {
                                    order: 9,
                                    result: {
                                        player: function (player) {
                                            var num = game.countPlayer(function (current) {
                                                return current.hp < 2 && get.attitude(player, current) <= 0;
                                            });
                                            if (player.getStat().card.sha == 0 && num > 0 && game.roundNumber > 1 && player.countCards('h') > 2 && player.countCards('h', { name: 'sha' }) > 0) return 1;
                                            return 0;
                                        },
                                    },
                                },
                            },
                            "huoying_shazang": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    source: "damageEnd",
                                },
                                forced: true,
                                filter: function (event, player) {
                                    return event.card.name == 'sha' && event.player.isAlive() && !event.player.isTurnedOver();
                                },
                                content: function () {
                                    //trigger.num++;
                                    trigger.player.turnOver();
                                },
                                mod: {
                                    globalFrom: function (from, to, distance) {
                                        if (from.hp == 1 || from.countCards('h') == 1) return distance - Infinity;
                                    },
                                    selectTarget: function (card, player, range) {
                                        var type = get.type(card);
                                        if (type != 'delay') {
                                            if (player.hp == 1 || player.countCards('h') == 1) {
                                                if (range[1] != -1) range[1] += Infinity;
                                            }
                                        }
                                    },
                                },
                                ai: {
                                    order: 8,
                                    maixie: true,
                                    expose: 0.5,
                                    threaten: 0.5,
                                },
                            },
                            "huoying_juefang": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    player: "damageEnd",
                                    source: "damageEnd",
                                },
                                forced: true,
                                usable: 1,
                                filter: function (event, player) {
                                    return player.hujia < 1;
                                },
                                content: function () {
                                    player.changeHujia();
                                },
                                ai: {
                                    order: 6,
                                    maixie: true,
                                    threaten: 1.3,
                                },
                            },
                            "huoying_xuhua": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    player: "damageBegin",
                                },
                                filter: function (event, player) {
                                    return !player.isTurnedOver();
                                },
                                content: function () {
                                    player.turnOver();
                                    //player.line(event.source, 'fire');
                                    if (trigger.source && trigger.source.countCards('he') && trigger.source.isAlive()) {
                                        var cards = trigger.source.getCards('he').randomGet();
                                        trigger.source.$give(cards, player);
                                        player.gain(cards, trigger.source);
                                    }
                                    trigger.cancel();
                                },
                            },
                            "huoying_shenwei": {
                                audio: "ext:火影忍者:2",
                                usable: 1,
                                enable: ["chooseToUse", "chooseToRespond"],
                                filterCard: function () { return false },
                                selectCard: -1,
                                viewAsFilter: function (player) {
                                    return player.isAlive();
                                },
                                viewAs: {
                                    name: "wuxie",
                                },
                                onuse: function (result, player) {
                                    player.turnOver();
                                },
                                prompt: "每回合限一次，你可以选择翻面，然后视为你使用一张【无懈可击】",
                                check: function () { return 1 },
                                ai: {
                                    threaten: 0.8,
                                    basic: {
                                        useful: [6, 4],
                                        value: [6, 4],
                                    },
                                    result: {
                                        player: 1,
                                    },
                                    expose: 0.2,
                                },
                            },
                            "huoying_fengyin": {
                                audio: "ext:火影忍者:2",
                                unique: true,
                                limited: true,
                                mark: true,
                                marktext: "印",
                                enable: 'phaseUse',
                                filter: function (event, player) {
                                    return player.isAlive();
                                },
                                filterTarget: function (card, player, target) {
                                    return target != player;
                                },
                                init: function (player) {
                                    player.storage.huoying_fengyin = false;
                                },
                                intro: {
                                    content: "limited",
                                },
                                content: function () {

                                    //alive('extension/火影忍者/huoying_fengyin.gif',12,true);         
                                    //game[otherFunction[7]](game.qyhGif('huoying_fengyin.gif',null,null,true),11000);		

                                    game.delay();
                                    player.storage.huoying_fengyin = true;
                                    player.unmarkSkill('huoying_fengyin');
                                    //player.$skill('尸鬼封尽', 'fire', 'red', 'avatar');
                                    var chat = ['尸鬼封尽', '守护村子，背负着影的名号，这是我该做的事'].randomGet();
                                    player.say(chat);
                                    player.logSkill('huoying_fengyin', target);
                                    target.clearSkills();
                                    if (target.maxHp > 4) target.maxHp = 4;
                                    target.update();
                                    //player.hp = player.maxHp;
                                    player.loseHp(player.hp);
                                    player.awakenSkill('huoying_fengyin');
                                    game.broadcastAll(function (player) {
                                        img = document.createElement('div');
                                        img.setBackgroundImage('extension/火影忍者/huoying_fengyin.png');
                                        img.style.width = '100%';
                                        img.style.height = '100%';
                                        img.style.backgroundSize = 'cover';
                                        img.style.transform = 'translateY(-200px)';
                                        target.node.avatar.appendChild(img);
                                        ui.refresh(img);
                                        img.style.transform = '';
                                    }, player);

                                },
                                ai: {
                                    threaten: 0.1,
                                    expose: 0.8,
                                    order: 8,
                                    result: {
                                        target: function (player, target) {
                                            return -target.hp;
                                        },
                                        player: function (player) {
                                            if (player.hp > 1) return 0;
                                            if (player.countCards('h', { name: ['tao', 'jiu'] }) > 0) return 1;
                                            return 1;
                                        },
                                    },
                                },
                            },
                            "huoying_fuzhi": {
                                audio: "ext:火影忍者:2",
                                priority: 2017,
                                trigger: {
                                    player: ["enterGame", "phaseBefore", "phaseEnd"],
                                    global: "gameDrawAfter",
                                },
                                filter: function (event, player) {
                                    return player.isAlive();
                                },
                                direct: true,
                                content: function () {
                                    'step 0'
                                    player.chooseTarget(get.prompt('huoying_fuzhi'), function (card, player, target) {
                                        return player != target;
                                    }).ai = function (target) {
                                        return Math.random();
                                    };
                                    'step 1'
                                    if (result.bool) {
                                        var chat = ['依葫芦画瓢，写轮眼－－复制', '你会的忍术我也会，就问你怕未？'].randomGet();
                                        player.say(chat);
                                        player.unmark(player.storage.huoying_fuzhi + '_charactermark');
                                        player.logSkill('huoying_fuzhi', result.targets[0]);
                                        //player.group = result.targets[0].group;
                                        var name = result.targets[0].name;
                                        if (name.indexOf('unknown') == 0) {
                                            name = result.targets[0].name2;
                                        }
                                        var list = [];
                                        var skills = lib.character[name][3];
                                        for (var j = 0; j < skills.length; j++) {
                                            if (lib.translate[skills[j] + '_info'] && lib.skill[skills[j]]) {
                                                // if(lib.translate[skills[j]+'_info']&&lib.skill[skills[j]]){
                                                list.push(skills[j]);
                                            }
                                        }
                                        player.addAdditionalSkill('huoying_fuzhi', list);
                                        player.markCharacter(name, null, true, true);
                                        game.addVideo('markCharacter', player, {
                                            name: '写轮眼•复制',
                                            content: '',
                                            id: 'huoying_fuzhi',
                                            target: name,
                                        });
                                        player.storage.huoying_fuzhi = name;
                                    }
                                },
                                ai: {
                                    order: 5,
                                },
                            },
                            "huoying_kkxshenwei": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    player: "phaseZhunbeiBegin",
                                },
                                check: function (event, player) {
                                    var num1 = game.countPlayer(function (current) {
                                        return current.countCards('e') && get.attitude(player, current) <= 0;
                                    });
                                    var num2 = game.countPlayer(function (current) {
                                        return current.countCards('j') && get.attitude(player, current) > 0;
                                    });
                                    if (num1 > 0 || num2 > 0) return 1;
                                    return 0;
                                },
                                filter: function (event, player) {
                                    return player.canMoveCard();
                                },
                                content: function () {
                                    player.moveCard();
                                },
                            },
                            "huoying_kkxkaiyan": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    source: "dieBegin",
                                },
                                forced: true,
                                unique: true,
                                derivation: 'huoying_kkxshenwei',
                                filter: function (event, player) {
                                    return !player.hasSkill('huoying_kkxshenwei');
                                },
                                juexingji: true,
                                intro: {
                                    content: "limited",
                                },
                                content: function () {
                                    player.$fullscreenpop('卡卡西-开眼', 'thunder');
                                    var chat = ['再等一等，这个术马上就行', '琳……对不起'].randomGet();
                                    player.say(chat);
                                    player.addSkill('huoying_kkxshenwei');
                                    player.awakenSkill('huoying_kkxkaiyan');
                                    player.update();
                                },
                            },
                            "huoying_leique": {
                                enable: ["chooseToRespond", "chooseToUse"],
                                audio: "ext:火影忍者:2",
                                filterCard: function (card) {
                                    return get.type(card) == 'basic' && !card.nature;
                                },
                                filter: function (event, player) {
                                    var list = [];
                                    var hs = player.getCards('h');
                                    for (var i = 0; i < hs.length; i++) {
                                        if (!hs[i].nature && get.type(hs[i]) == 'basic') list.push(hs[i]);
                                    }
                                    return list.length > 0;
                                },
                                onuse: function (result, player) {
                                    player.addTempSkill('unequip', 'shaAfter');
                                },
                                viewAs: {
                                    name: 'sha',
                                    nature: 'thunder',
                                },
                                prompt: "你可将普通基本牌当无视防具的雷【杀】使用",
                                ai: {
                                    skillTagFilter: function (player, tag, arg) {
                                        if (arg && arg.name == 'sha') return true;
                                        return false;
                                    },
                                    respondSha: true,
                                    basic: {
                                        useful: [5, 1],
                                        value: [5, 1],
                                    },
                                    order: function () {
                                        if (_status.event.player.hasSkillTag('presha', true, null, true)) return 10;
                                        return 3;
                                    },
                                    result: {
                                        target: function (player, target) {
                                            return -target.hp;
                                        },
                                    },
                                    tag: {
                                        respond: 1,
                                        respondSha: 1,
                                        damage: function (card) {
                                            if (card.nature == 'poison') return;
                                            return 1;
                                        },
                                        natureDamage: function (card) {
                                            if (card.nature) return 1;
                                        },
                                        //fireDamage: function (card, nature) {
                                        //if (card.nature == 'fire') return 1;
                                        //},
                                        thunderDamage: function (card, nature) {
                                            if (card.nature == 'thunder') return 1;
                                        },
                                        poisonDamage: function (card, nature) {
                                            if (card.nature == 'poison') return 1;
                                        },
                                    },
                                },
                            },
                            "huoying_zhuansheng": {
                                audio: "ext:火影忍者:2",
                                usable: 1,
                                enable: "phaseUse",
                                selectCard: 1,
                                filterCard: function (card) {
                                    return card.name == 'tao';
                                },
                                position: "h",
                                filter: function (event, player) {
                                    return game.dead.length > 0 && player.countCards('h', 'tao') > 0;
                                },
                                content: function () {
                                    'step 0'
                                    var chat = ['秽土转生之术', '这个术非常完美，没有风险'].randomGet();
                                    player.say(chat);
                                    var list = [];
                                    for (var i = 0; i < game.dead.length; i++) {
                                        list.push(game.dead[i].name);
                                    }
                                    player.chooseButton(ui.create.dialog('选择复活一名已阵亡的角色', [list, 'character']), function (button) {
                                        return Math.random();
                                    });
                                    'step 1'
                                    if (result.bool) {
                                        player.$fullscreenpop('秽土转生', 'fire');
                                        for (var i = 0; i < game.dead.length; i++) {
                                            if (game.dead[i].name == result.links[0]) {
                                                var dead = game.dead[i];
                                            }
                                        }
                                        if (get.mode() == 'identity') {
                                            var myid = player.identity;
                                            if (player.identity == 'zhu') {
                                                myid = 'zhong'
                                            };
                                            dead.identity = myid;
                                            dead.setIdentity(myid);
                                        }
                                        player.logSkill('huoying_zhuansheng', dead);
                                        dead.revive(2);
                                        dead.draw(2);
                                        player.loseMaxHp(true);
                                    }
                                },
                                ai: {
                                    expose: 0.5,
                                    result: {
                                        player: function (player, target) {
                                            if (player.maxHp < 2) return 0;
                                            return 1;
                                        },
                                    },
                                },
                            },
                            "huoying_yizhi": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    player: "damageEnd",
                                },
                                forced: true,
                                priority: 20,
                                unique: true,
                                init: function (player) {
                                    player.storage.huoying_yizhi = 0;
                                },
                                intro: {
                                    name: "移植",
                                    content: "已移植了#种能力",
                                },
                                derivation: ['huoying_xianfa', 'huoying_zhuansheng'],
                                content: function () {
                                    'step 0'
                                    event.skills = [];
                                    //event.list = [];
                                    'step 1'
                                    for (var i in lib.characterPack['huoyingrenzhe']) {
                                        for (var j = 0; j < lib.character[i][3].length; j++) {
                                            var info = lib.skill[lib.character[i][3][j]];
                                            if (info && (info.gainable || !info.unique)) {
                                                event.skills.push(lib.character[i][3][j]);
                                            }
                                        }
                                    }
                                    event.skills.removeArray(['huoying_yizhi', 'huoying_xinyiliao', 'huoying_xianfa', 'huoying_zhuansheng']);
                                    var skills = player.skills.slice(0);
                                    for (var i = 0; i < skills.length; i++) {
                                        event.skills.remove(skills[i]);
                                        //if(event.skills.contains(skills[i])) event.skills.splice(i--,1);
                                    }
                                    if (event.skills.length > 2) {
                                        var list = event.skills.randomGets(3);
                                    }
                                    else event.finish();
                                    if (event.isMine()) {
                                        var dialog = ui.create.dialog('forcebutton');
                                        dialog.add('选择获得一项技能');
                                        for (var i = 0; i < list.length; i++) {
                                            if (lib.translate[list[i] + '_info']) {
                                                var translation = get.translation(list[i]);
                                                if (translation[0] == '新' && translation.length == 3) {
                                                    translation = translation.slice(1, 3);
                                                }
                                                else {
                                                    translation = translation.slice(0, 2);
                                                }
                                                var item = dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + translation + '】</div><div>' + lib.translate[list[i] + '_info'] + '</div></div>');
                                                item.firstChild.link = list[i];
                                            }
                                        }
                                    }
                                    player.chooseControl(list).set('prompt', '请选择一个你的要获得的技能').set('ai', function () {
                                        return list.randomGet();
                                    }).dialog = dialog;
                                    'step 2'
                                    player.popup(result.control, 'thunder');
                                    //player.addTempSkill(result.control,{player:'phaseBegin'});
                                    player.flashAvatar('huoying_yizhi', result.control);
                                    player.addSkill(result.control);
                                    player.mark(result.control, {
                                        name: get.translation(result.control),
                                        content: lib.translate[result.control + '_info']
                                    });
                                    game.log(player, '获得了技能', '#g【' + get.translation(result.control) + '】');
                                    if (!player.hasSkill('huoying_xianfa') || !player.hasSkill('huoying_zhuansheng')) {
                                        player.storage.huoying_yizhi++;
                                        player.markSkill('huoying_yizhi');
                                        player.update();
                                        if (player.storage.huoying_yizhi >= 3) {
                                            player.$fullscreenpop('蜕皮化龙', 'water');
                                            player.unmarkSkill('huoying_yizhi');
                                            player.removeSkill('huoying_xinyiliao');
                                            player.addSkill('huoying_xianfa');
                                            player.addSkill('huoying_zhuansheng');
                                        }
                                    }
                                },
                            },
                            "huoying_xianfa": {
                                audio: "ext:火影忍者:2",
                                srlose: true,
                                trigger: {
                                    player: "loseEnd",
                                },
                                forced: true,
                                filter: function (event, player) {
                                    if (player.countCards('h') > 0) return false;
                                    for (var i = 0; i < event.cards.length; i++) {
                                        if (event.cards[i].original == 'h') return true;
                                    }
                                    return false;
                                },
                                content: function () {
                                    if (player.isHealthy()) {
                                        player.draw();
                                    } else {
                                        player.recover();
                                    }
                                },
                                ai: {
                                    threaten: 0.8,
                                    effect: {
                                        target: function (card, player, target) {
                                            if (target.countCards('h') == 1 && card.name == 'guohe') return 0.5;
                                            if (target.countCards('h') == 1 && (card.name == 'guohe' || card.name == 'shunshou')) return -5;
                                        },
                                    },
                                    noh: true,
                                },
                            },

                            "huoying_fenshen": {
                                audio: "ext:火影忍者:2",
                                enable: "phaseUse",
                                usable: 1,
                                derivation: 'huoying_mrluoxuan',
                                filterTarget: function (card, player, target) {
                                    return target != player && target.countCards('h') > 0;
                                },
                                // selectTarget:[1,Infinity],
                                selectTarget: function () {
                                    return [1, _status.event.player.storage.huoying_fenshen];
                                },
                                filter: function (event, player) {
                                    if (!player.countCards('h')) return false;
                                    return game.hasPlayer(function (current) {
                                        return player.canCompare(current);
                                    });
                                },
                                multitarget: true,
                                multiline: true,
                                content: function () {
                                    player.chooseToCompare(targets).callback = lib.skill.huoying_fenshen.callback;
                                },
                                init: function (player) {
                                    player.storage.huoying_fenshen = 0;
                                },
                                intro: {
                                    name: "分身",
                                    content: "已发动了#次失败分身",
                                },
                                chat: ["万年吊车尾", "木叶的灾星", "别浪费查克拉了", "黄头小儿", "雏田是你的，佐助是我的", "九尾狐狸", "口遁对我没用", "你是不可能当上火影的", "我从未见过有如此厚顔无耻之人！"],
                                callback: function () {
                                    'step 0'
                                    event.num1 = event.card1.number;
                                    event.num2 = event.card2.number;
                                    'step 1'
                                    //if (event.num1 > event.num2 && target.countCards('he')) {
                                    if (event.num1 > event.num2) {
                                        player.useCard({ name: 'sha', isCard: true }, target, false);
                                        //target.discard(target.getCards('he').randomGet());
                                    }
                                    else {
                                        //player.draw();
                                        target.chat(lib.skill.huoying_fenshen.chat[player.storage.huoying_fenshen]);
                                        game.delay(0.5);
                                        player.storage.huoying_fenshen++;
                                        player.markSkill('huoying_fenshen');
                                        player.update();
                                        if (player.storage.huoying_fenshen >= 6) {
                                            player.addSkill('huoying_mrluoxuan');
                                        }
                                        if (player.storage.huoying_fenshen >= 9) {
                                            player.die();
                                        }
                                    }
                                },
                                mod: {
                                    globalFrom: function (from, to, distance) {
                                        return distance - from.storage.huoying_fenshen;
                                    },/*
                                    selectTarget: function (card, player, range) {
                                        if (card.name == 'sha' && range[1] != -1) range[1] += player.storage.huoying_fenshen;
                                    },
                                    maxHandcard: function (player, num) {
                                        return num - player.storage.huoying_fenshen;
                                    },*/
                                },
                                ai: {
                                    order: 7,
                                    result: {
                                        target: function (player, target) {
                                            var num = game.countPlayer(function (current) {
                                                return get.attitude(player, current) < 0 && current != player && current.countCards('h');
                                            });
                                            if (num > 3) num = 3;
                                            var hs = player.getCards('h');
                                            for (var i = 0; i < hs.length; i++) {
                                                if (get.value(hs[i]) <= 6) {
                                                    switch (hs[i].number) {
                                                        case 13: return -1;
                                                        case 12: if (player.storage.huoying_fenshen + num <= 8) return -1; break;
                                                        case 11: if (player.storage.huoying_fenshen + num <= 7) return -1; break;
                                                        default: if (hs[i].number > 5 && player.storage.huoying_fenshen + num <= 8) return -1;
                                                    }
                                                }
                                            }
                                            return 0;
                                        },
                                    },
                                },
                            },
                            "huoying_xianyan": {
                                audio: "ext:火影忍者:2",
                                // srlose:true,
                                trigger: {
                                    player: "dieBegin",
                                },
                                direct: true,
                                unique: true,
                                content: function () {
                                    'step 0'
                                    player.$skill('琳……再见', 'fire', 'red', 'avatar');
                                    player.chooseTarget(get.prompt('huoying_xianyan'), function (card, player, target) {
                                        return player != target;
                                    }).ai = function (target) {
                                        return get.attitude(player, target) > 0;
                                    };
                                    'step 1'
                                    if (result.bool) {
                                        var chat = ['琳就交给你照顾了', '这只眼睛会帮你看清未来'].randomGet();
                                        player.say(chat);
                                        var cards = player.getCards('h', function (card) {
                                            return player.countCards('h');
                                        });
                                        var target = result.targets[0];
                                        player.$give(cards, target);
                                        target.gain(cards, player);
                                        player.logSkill('huoying_xianyan', target);
                                        target.addSkill(['huoying_xuhua', 'huoying_shenwei'].randomGet());
                                        target.recover();
                                    }
                                    else event.finish();
                                },
                                ai: {
                                    expose: 0.5,
                                },
                            },

                            "huoying_bamen": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    player: ["phaseUseBegin", "changeHp", "changeMaxHp"],
                                },
                                forced: true,
                                popup: false,
                                unique: true,
                                derivation: ["mashu", "paoxiao", "fuqi", "anjian"],
                                content: function () {
                                    player.removeAdditionalSkill('huoying_bamen');
                                    var list = [];
                                    if (player.hp <= 4) {
                                        list.push('mashu');
                                        player.markSkill('mashu');
                                    }
                                    if (player.hp <= 3 || player.maxHp <= 1) {
                                        list.push('paoxiao');
                                        player.markSkill('paoxiao');
                                    }
                                    if (player.hp <= 2 || player.maxHp <= 1) {
                                        list.push('fuqi');
                                        player.markSkill('fuqi');
                                    }
                                    if (player.hp <= 1 || player.maxHp <= 1) {
                                        list.push('anjian');
                                        player.markSkill('anjian');
                                    }
                                    if (list.length) {
                                        player.addAdditionalSkill('huoying_bamen', list);
                                    }
                                },
                                ai: {
                                    maixie: true,
                                    effect: {
                                        target: function (card, player, target) {
                                            if (get.tag(card, 'damage')) {
                                                if (!target.hasFriend()) return;
                                                if (target.hp >= 4) return [0, 1];
                                            }
                                            if (get.tag(card, 'recover') && player.hp >= player.maxHp - 1) return [0, 0];
                                        },
                                    },
                                },
                            },
                            "huoying_resizhan": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    player: "phaseUseBefore",
                                },
                                unique: true,
                                mark: true,
                                direct: true,
                                init: function (player) {
                                    player.storage.huoying_resizhan = false;
                                },
                                limited: true,
                                intro: {
                                    content: "limited",
                                },
                                check: function () { return 0.3; },
                                content: function () {
                                    'step 0'
                                    player.chooseControl('死战', 'cancel2').set('ai', function () {
                                        if (player.hp <= 2) return '死战';
                                        return 'cancel2';
                                    }).set('prompt', '死战：请选择是否发动');
                                    'step 1'
                                    if (result.control == '死战') {
                                        player.storage.huoying_resizhan = true;
                                        player.$fullscreenpop('八门遁甲', 'fire');
                                        // player.$skill('八门遁甲','fire','red','avatar');
                                        player.unmark();
                                        player.logSkill('huoying_resizhan');
                                        // event.cards=get.cards(8);                                                              
                                        //   player.gain(event.cards,'gain2');
                                        player.draw(8);
                                        player.loseMaxHp(player.maxHp - 1);
                                        player.update();
                                        player.awakenSkill('huoying_resizhan');
                                        game.delay(2);
                                        var chat = ['燃烧吧，青春！', '我会化为养分，来年春天定会长出新芽'].randomGet();
                                        player.say(chat);
                                    }
                                    else {
                                        event.cancel();
                                    }
                                },
                                ai: {
                                    order: 2,
                                    expose: 0.8,
                                },
                            },

                            "huoying_rebusi": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    player: "dieBefore",
                                },
                                changeHp: true,
                                forced: true,
                                filter: function (event, player) { return player.maxHp > 0 && player.hp <= 0 },
                                content: function () {
                                    'step 0'
                                    event.card = get.cards()[0];
                                    if (player.storage.huoying_rebusi == undefined) player.storage.huoying_rebusi = [];
                                    player.storage.huoying_rebusi.push(event.card);
                                    player.syncStorage('huoying_rebusi');
                                    player.showCards(player.storage.huoying_rebusi, '不死之身')
                                    player.markSkill('huoying_rebusi');
                                    'step 1'
                                    for (var i = 0; i < player.storage.huoying_rebusi.length - 1; i++) {
                                        if (get.number(event.card) && get.number(event.card) == get.number(player.storage.huoying_rebusi[i])) return;
                                    }
                                    trigger.cancel();
                                    if (player.hp <= 0) {
                                        player.hp = 2;
                                        player.draw();
                                        player.update();
                                    }
                                },
                                mod: {
                                    maxHandcard: function (player, num) {
                                        if (player.storage.huoying_rebusi && player.storage.huoying_rebusi.length) return num - player.hp + player.storage.huoying_rebusi.length;
                                    },
                                },
                                intro: {
                                    content: "cards",
                                    onunmark: function (storage, player) {
                                        if (storage && storage.length) {
                                            player.$throw(storage);
                                            for (var i = 0; i < storage.length; i++) {
                                                ui.discardPile.appendChild(storage[i]);
                                            }
                                            delete player.storage.huoying_rebusi;
                                        }
                                    },
                                },
                            },
                            "huoying_zhenxing2": {
                                trigger: {
                                    source: "damageBegin",
                                },
                                audio: "ext:火影忍者:2",
                                //forced: true,
                                popup: true,
                                check: function (event, player) {
                                    var num = game.countPlayer(function (current) {
                                        return get.attitude(player, current) > 0 && current.isLinked();
                                    });
                                    if (num > 0 && event.player.isLinked()) return 0;
                                    return get.attitude(player, event.player) <= 0;
                                },
                                filter: function (event, player) {
                                    //return event.card && event.card.name == "wanjian";
                                    return event.parent.skill == "huoying_zhenxing";
                                },
                                content: function () {
                                    trigger.nature = 'fire';
                                },
                            },
                            "huoying_zhenxing": {
                                audio: "ext:火影忍者:2",
                                enable: "phaseUse",
                                selectCard: 2,
                                usable: 1,
                                complexCard: true,
                                group: "huoying_zhenxing2",
                                filter: function (card, player) {
                                    return player.countCards('h', 'sha') > 1;
                                },
                                filterCard: {
                                    name: 'sha',
                                },
                                viewAs: {
                                    name: "wanjian",
                                },
                                ai: {
                                    wuxie: function (target, card, player, viewer) {
                                        if (get.attitude(viewer, target) > 0 && target.countCards('h', 'shan')) {
                                            if (!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) return 0;
                                        }
                                    },
                                    basic: {
                                        order: 9,
                                        useful: 1,
                                        value: 5,
                                    },
                                    result: {
                                        target: function (player, target) {
                                            if (player.hasUnknown(2) && get.mode() != 'guozhan') return 0;
                                            var nh = target.countCards('h');
                                            if (get.mode() == 'identity') {
                                                if (target.isZhu && nh <= 2 && target.hp <= 1) return -100;
                                            }
                                            if (nh == 0) return -2;
                                            if (nh == 1) return -1.7
                                            return -1.5;
                                        },
                                    },
                                    tag: {
                                        respond: 1,
                                        respondShan: 1,
                                        damage: 1,
                                        multitarget: 1,
                                        multineg: 1,
                                    },
                                },
                            },
                            "huoying_lunmu": {
                                //此技能已被加密隐藏
                            },

                            "huoying_yiyuan": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    player: "dying",
                                },
                                unique: true,
                                forced: true,
                                juexingji: true,
                                init: function (player) {
                                    player.storage.huoying_yiyuan = false;
                                },
                                intro: {
                                    content: "limited",
                                },
                                filter: function (event, player) {
                                    return game.hasPlayer(function (current) {
                                        return current.maxHp > player.maxHp;
                                    });
                                },
                                derivation: ['huoying_lunmu'],
                                content: function () {
                                    'step 0'
                                    player.addSkill('huoying_lunmu');
                                    player.draw();
                                    player.storage.huoying_yiyuan = true;
                                    //player.$skill('须佐能乎','fire','red','avatar');
                                    player.$fullscreenpop('完全体须佐能乎', 'fire');
                                    game.delay(0.8);
                                    player.chooseTarget(get.prompt('huoying_yiyuan'), true, function (card, player, target) {
                                        return target.maxHp > player.maxHp;
                                    }).set('ai', function (target) {
                                        return (get.attitude(_status.event.player, target) - 2) * target.maxHp;
                                    });
                                    'step 1'
                                    if (result.bool) {
                                        var chat = ['那是一个只有和平，只有胜利，只有爱的世界', '我已将我的力量给了你，将来再还这个恩情', '拥有森罗万象之力，开山裂海，实力堪比尾兽，就凭我宇智波斑这个完全体须佐能乎'].randomGet();
                                        player.say(chat);
                                        //var cards = player.getCards('h', function (card) {
                                        //return player.countCards('h');
                                        //});
                                        var cards = player.getCards('h');
                                        var target = result.targets[0];
                                        player.logSkill('huoying_yiyuan', target);
                                        player.$give(cards, target);
                                        target.gain(cards, player);
                                        player.gainMaxHp(target.maxHp - player.maxHp, true);
                                        player.recover(target.maxHp - player.hp);
                                        game.delay(0.5);
                                        event.num = 0;
                                        event.targets = game.filterPlayer(function (current) {
                                            return player != current && current.countCards('he');
                                        });
                                        //ui.backgroundMusic.src = lib.assetURL + 'extension/火影忍者/wms_backgroundmusic.mp3';
                                        game.broadcastAll() + player.node.avatar.setBackgroundImage('extension/火影忍者/huoying_liudaoban.jpg');
                                        game.broadcastAll() + ui.background.setBackgroundImage("extension/火影忍者/wms_wxyd_background.jpg");
                                        player.update();
                                        player.awakenSkill('huoying_yiyuan');
                                        event.goto(2);
                                    }
                                    'step 2'
                                    if (event.num < event.targets.length) {
                                        player.line(event.targets[event.num], 'fire');
                                        var cards = event.targets[event.num].getCards('he').randomGet();
                                        event.targets[event.num].$give(cards, player);
                                        player.gain(cards, event.targets[event.num]);
                                        event.num++;
                                        event.redo();
                                    }
                                    else {
                                        player.say('神兽们，归笼！');
                                        event.finish();
                                    }
                                },
                                ai: {
                                    order: 5,
                                    maixie: true,
                                },
                            },
                            "huoying_xinxuzuo": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    player: "damageBegin",
                                },
                                forced: true,
                                filter: function (event, player) {
                                    if (event.nature && player.countCards('h')) return true;
                                    if (!event.nature && !player.countCards('h')) return true;
                                    return false;
                                },
                                content: function () {
                                    trigger.cancel();
                                    var chat = ['哪个大人会对小孩动怒？', '拥有森罗万象之力，开山裂海，实力堪比尾兽，就凭我宇智波斑这个完全体须佐能乎'].randomGet();
                                    player.say(chat);
                                },
                                mod: {
                                    selectTarget: function (card, player, range) {
                                        if (card.name == 'sha' && range[1] != -1) range[1]++;
                                    },
                                },
                                srlose: true,
                                ai: {
                                    nofire: function (player) {
                                        return player.countCards('h') > 0;
                                    },
                                    nothunder: function (player) {
                                        return player.countCards('h') > 0;
                                    },
                                    effect: {
                                        target: function (card, player, target, current) {
                                            if (get.tag(card, 'natureDamage') && target.countCards('h') > 0) return 0;
                                            if (card.name == 'tiesuo' && target.countCards('h') > 0) return [0, 0];
                                            if (!get.tag(card, 'natureDamage') && !target.countCards('h')) return [0, 0];
                                        },
                                    },
                                },
                                intro: {
                                    content: function (storage, player) {
                                        var str = '';
                                        if (player.countCards('h')) {
                                            str += '防止属性伤害';
                                        }
                                        else {
                                            str += '防止非属性伤害';
                                        }
                                        return str;
                                    },
                                },
                            },
                            "huoying_xinbaiyan": {
                                audio: "ext:火影忍者:2",
                                enable: "phaseUse",
                                usable: 1,
                                filterTarget: function (card, player, target) {
                                    if (player == target) return false;
                                    return (target.countCards('h') || target.isUnseen(2));
                                },
                                content: function () {
                                    'step 0'
                                    player.chooseCardButton(target, target.getCards('h')).set('filterButton', function (button) {
                                        return get.color(button.link) == 'black';
                                    });
                                    'step 1'
                                    if (result.bool) {
                                        var chat = ['一切都逃不过我的双眼'].randomGet();
                                        player.say(chat);
                                        event.card = result.links[0];
                                        player.gain(event.card, target);
                                        target.$give(event.card, player);
                                    }

                                },
                                selectTarget: 1,
                                ai: {
                                    threaten: 1.5,
                                    result: {
                                        target: function (player, target) {
                                            return -target.countCards('h');
                                        },
                                    },
                                    order: 10,
                                    expose: 0.4,
                                },
                            },
                            "huoying_rouquan": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    player: "loseEnd",
                                },
                                frequent: true,
                                filter: function (event, player) {
                                    if (player == _status.currentPhase) return false;
                                    for (var i = 0; i < event.cards.length; i++) {
                                        if (event.cards[i].original == 'h') return true;
                                    }
                                    return false;
                                },
                                content: function () {
                                    var num = 0;
                                    for (var i = 0; i < trigger.cards.length; i++) {
                                        if (trigger.cards[i].original == 'h') num += 1;
                                    }
                                    player.draw(num);
                                },
                                ai: {
                                    noh: true,
                                },
                            },
                            "huoying_huitian": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    global: ["shaBegin", "juedouBegin"],
                                },
                                frequent: true,
                                filter: function (event, player) {
                                    return get.distance(player, event.target) <= 1;
                                },
                                content: function () {
                                    var chat = ['扑街，滚远点', '看我的秘术——回天！'].randomGet();
                                    player.say(chat);
                                    player.draw();
                                },
                                ai: {
                                    threaten: 1.1,
                                },
                            },
                            "huoying_jinshu": {
                                audio: "ext:火影忍者:2",
                                trigger: {
                                    player: "phaseBegin",
                                },
                                forced: true,
                                popup: false,
                                derivation: ['huoying_fenshen', 'huoying_shanguang', 'huoying_zhuansheng'],
                                content: function () {
                                    var chat = ['影分身术、飞雷神、秽土转生，这些禁术都是我搞出来的玩意好嘛！', '我二代火影博学多才，岂是徒有虚名？'].randomGet();
                                    player.say(chat);
                                    player.removeSkill(player.storage.huoying_jinshu);
                                    player.logSkill('huoying_jinshu');
                                    switch (Math.floor(Math.random() * 3)) {
                                        case 0: if (lib.skill.huoying_fenshen) { player.addSkill('huoying_fenshen'); player.storage.huoying_jinshu = 'huoying_fenshen'; player.popup('huoying_fenshen'); } break;
                                        case 1: if (lib.skill.huoying_shanguang) { player.addSkill('huoying_shanguang'); player.storage.huoying_jinshu = 'huoying_shanguang'; player.popup('huoying_shanguang'); } break;
                                        case 2: if (lib.skill.huoying_zhuansheng) { player.addSkill('huoying_zhuansheng'); player.storage.huoying_jinshu = 'huoying_zhuansheng'; player.popup('huoying_zhuansheng'); } break;
                                    }
                                },
                            },
                        },
                        characterReplace: {

                            //"hyrz_niya": ["hyrz_guihua", "hyrz_niya"],
                        },

                        dynamicTranslate: {
                            hyrz_ge: function (player) {
                                if (player.storage.hyrz_ge == true) return '<font color=#F0F>转换技</font> 出牌阶段限一次：<li><span class="bluetext">阳：角色</span>。<li>阴：牌';
                                return '<font color=#F0F>转换技</font> 出牌阶段限一次：<li>阳：角色。<li><span class="bluetext">阴：牌';
                            },
                        },
                        translate: {

                            "huoying_yeyuanlin": "野原琳",
                            "huoying_yiyan": "移眼",
                            "huoying_yiyan_info": "<span class=greentext>觉醒技</span> 当一名其他角色阵亡时，你可以选择另一名其他角色（A），然后选择该阵亡角色的一项技能令其（A）获得，若该阵亡角色为你，则令其（A）随机获得〖神威〗",
                            "huoying_shangliang": "善良",
                            "huoying_shangliang_info": "当一名其他角色（A）对另一名其他角色使用【杀】时，你可以将其（A）装备区的一张牌移到你的装备区（可替换），然后将此【杀】的目标改为你",
                            "huoying_linyiliao": "医疗",
                            "huoying_linyiliao_info": "每回合限一次，当一名角色进入濒死状态时，你可以令其翻面并回复体力至1，然后你与其各摸一张牌",
                            "huoying_xinyiliao": "医疗",
                            "huoying_xinyiliao_info": "当一名角色进入濒死状态时，若你手牌中有基本牌，你可以弃置之，然后其回复体力至1",
                            "huoying_guitongwan": "鬼童丸",
                            "huoying_chilangfang": "次郞访",
                            "huoying_zuojinyoujin": "左近右近",
                            "huoying_tayuya": "多由也",
                            "huoying_qilie": "凄裂",
                            "huoying_qilie_info": "<font color=#F0F>蜘蛛战弓•凄裂</font>  </font><font color=#f00>锁定技</font> 当你使用【杀】时，若目标角色的武将牌已横置，此【杀】无法闪避。<li>咒印化：若你的体力值小于3，你对已横置武将牌的角色使用【杀】没距离限制且伤害+1",
                            "huoying_jinkui": "金铠",
                            "huoying_jinkui_info": "<font color=#F0F>粘金之铠</font> 每名角色的回合限一次，当你受到伤害时，你可选择一名武将牌已横置的角色，令其重置武将牌，然后此伤害减一",
                            "huoying_zhuzheng": "蛛阵",
                            "huoying_zhuzheng_info": "出牌阶段限X次（X为你的体力值且平局不计入次数），你可选择一名未横置的其他角色，与其猜拳，若你赢，该角色横置武将牌且不能使用或打出牌，若你输，你横置你的武将牌，平局则继续猜拳直至分出胜负",
                            "huoying_zhuzheng2": "蛛阵",
                            "huoying_zhuzheng2_info": "不能使用或打出卡牌",
                            "huoying_zhouli": "咒力",
                            "huoying_zhouli_info": "出牌阶段限一次，你可以弃置任意张装备牌并摸等同于你弃置牌数两倍的牌。<li>咒印化：若你的体力值小于3，改为摸三倍的牌",
                            "huoying_qilie2": "凄裂",
                            "huoying_qilie2_info": "你对已横置武将牌的角色使用【杀】没距离限制且伤害+1",
                            "huoying_tulao": "土牢",
                            "huoying_tulao_info": "当你成为【杀】的目标后，你可随机使用一张装备牌",
                            "huoying_jihuai": "寄坏",
                            "huoying_jihuai_info": "<font color=#F0F>寄生鬼坏</font> 回合开始阶段，你可选择一名未被“封印”、“白板”的其他角色，然后你与其组成双将，若你的体力值不小于3，其原武将非锁定技失效（被封印），否则你咒印化，其所有技能失效，直到其受到伤害后",
                            "huoying_luosheng": "罗生",
                            "huoying_luosheng_info": "<font color=#F0F>通灵罗生门</font> 每名角色的回合限一次，当你受到伤害时，你可以弃置一名角色的一张装备区的牌，然后此伤害值减一",
                            "huoying_huanyin": "幻音",
                            "huoying_huanyin_info": "回合结束阶段，你可以令至多X名未进入混乱状态的其他角色进入混乱状态（当你体力值：①不小于3，X为1；②小于3，咒印化，X为3）",
                            "huoying_haosheng": "好胜",
                            "huoying_haosheng_info": "</font><font color=#f00>锁定技</font> 当你受到伤害后，你摸1至X张牌（X为场上已进入疯癫混乱状态的角色数），若伤害来源武将牌背面朝上，其翻面",
                            "huoying_bai": "白",
                            "huoying_bingdun": "冰遁",
                            "huoying_bingdun_info": "<font color=#F0F>魔镜冰晶</font> <li>出牌阶段限一次，若你的武将牌正面朝上，你可以令至多两名其他角色翻面，然后你翻面<li>你与已翻面的角色的距离为1，若你的武将牌背面朝上，你的防御距离为无限<li>你对一名其他角色使用【杀】时，可令此【杀】额外指定所有其他已翻面的角色",
                            "huoying_bingdun2": "冰遁",
                            "huoying_bingdun2_info": "你对其他角色使用【杀】时，可令此【杀】额外指定所有其他已翻面的角色",
                            "huoying_chengshang": "承伤",
                            "huoying_chengshang_info": "当一名其他角色成为【杀】的目标后，若来源不为你且你的武将牌背面朝上，你可令目标改为你。若此【杀】造成伤害，你翻面",
                            "huoying_chengshang2": "承伤",
                            "huoying_chengshang2_info": "若此【杀】造成伤害，你翻面",
                            "huoying_shuiyue": "鬼灯水月",
                            "huoying_xundao": "寻刀",
                            "huoying_xundao_info": "准备阶段，你可以选择一个装备栏名，然后获得所有其他角色该装备栏里的装备牌",
                            "huoying_yehua": "液化",
                            "huoying_yehua_info": "</font><font color=#f00>锁定技</font> 你无法闪避雷【杀】；每当你受到非雷属性伤害伤害时，此伤害值-1",
                            "huoying_daoji": "刀技",
                            "huoying_daoji_info": "当你成为【杀】的目标时，你可使用一张装备牌，若此装备牌对应的装备栏已有牌，则先回收该装备栏的牌",
                            "huoying_xianglin": "香燐",
                            "huoying_zhinai": "油女志乃",
                            "huoying_liaoshang": "疗伤",
                            "huoying_liaoshang_info": "当一名角色受到火属性或雷属性伤害后，你可令伤害来源回复等量的体力，若伤害来源未受伤，改为摸等量的牌",
                            "huoying_chongyu": "虫玉",
                            "huoying_chongyu_info": "当其他角色的黑桃牌因弃牌进入弃牌堆时，若你武将牌上的“虫”数量不大于你的体力值，你可将其置于你的武将牌上，称为“虫”",
                            "huoying_xishi": "吸食",
                            "huoying_xishi_info": "每回合限一次，当一名其他角色回复体力时，你可以获得一张“虫”牌，改为你回复一点体力，若你未受伤，则改为你摸一张牌",
                            "huoying_ganzhi": "感知",
                            "huoying_ganzhi_info": "结束阶段，每有一名角色手牌中有【桃】或装备牌（<font color=#F0F>感知团藏</font>），你便摸一张牌",
                            "huoying_quanzhongya": "犬冢牙",
                            "huoying_chiwan": "赤丸",
                            "huoying_nishou": "拟兽",
                            "huoying_nishou_info": "<span class=yellowtext>限定技</span> 当你受到伤害后，若你的体力值不大于2，你可以选择“召唤”随从忍兽“赤丸”（起始5体力上限3体力，起始手牌为4）替你作战，直到其死亡，才会切换你回到战场",
                            "huoying_renquan": "忍犬",
                            "huoying_renquan_info": "</font><font color=#f00>锁定技</font> 你的锦囊牌均视为【决斗】",
                            "huoying_tongya": "通牙",
                            "huoying_tongya_info": "出牌阶段限一次，若你有牌，你可以选择一名有牌的其他角色并弃置任意张牌，然后该角色须弃置等量张牌（不足则全弃且你补摸两者差值张牌），若如此做，视为你对其使用一张【决斗】",
                            "huoying_tiantian": "天天",
                            "huoying_jiju": "集具",
                            "huoying_jiju_info": "当其他角色使用武器牌或攻击马时，你可令视为你使用之",
                            "huoying_anqi": "暗器",
                            "huoying_anqi_info": "当你失去一张装备区的牌时，你可视为对任意一名其他角色使用一张无距离【杀】，然后你摸一张牌",
                            "huoying_zuojin": "佐井",
                            "huoying_weishou": "伪兽",
                            "huoying_wodi": "卧底",
                            "huoying_wodi_info": "结束阶段，若你的装备区有牌，你可令一名其他角色与你各摸一张牌，然后你回复一点体力，若如此做，你须将装备区的牌收进手牌区",
                            "huoying_weishou2": "虎眈",
                            "huoying_weishou2_info": "不能使用或打出牌",
                            "huoying_weishou_info": "当你受到伤害后，你可以选择一名其他角色，令其直到下个出牌阶段开始，不能使用或打出牌（<font color=#F0F>封印术•虎视眈弹</font>）然后你视为对其使用一张【杀】，结算后其随机使用一张装备牌（<font color=#F0F>配合团藏</font>）",
                            "huoying_zhujian": "千手柱间",
                            "huoying_qianshou": "千手",
                            "huoying_qianshou_info": "<font color=#F0F>千手神通</font> 当一名角色使用的锦囊牌指定了至少两名角色为目标时，你可以令任意名目标角色摸一张牌",
                            "huoying_xianti": "仙体",
                            "huoying_xianti_info": "<font color=#f00>锁定技</font> 结束阶段，若你已受伤，你回复一点体力，否则你摸一张牌",
                            "huoying_liudaoxianren": "六道仙人",
                            "huoying_renzong": "忍宗",
                            "huoying_renzong_info": "<span class=greentext>觉醒技</span> 当一名其他角色进入濒死状态，你选择技能〖天眼〗或〖仙体〗令其永久获得之，其回复体力至1并摸两张牌，然后你失去技能〖忍宗〗，体力上限和体力值改为6。当该被授予〖忍宗〗的角色造成或受到伤害后，你随机获得一张基本牌",
                            "huoying_renzong2": "忍宗",
                            "huoying_renzong2_info": "<font color=#f00>锁定技</font> 当你造成或受到伤害后，授予你〖忍宗〗的角色随机获得一张基本牌",
                            "huoying_tianyan": "天眼",
                            "huoying_tianyan_info": "回合开始阶段，你可以选择一名其他角色，然后获得其一项技能，直到回合结束",
                            "huoying_jitong": "极瞳",
                            "huoying_jitong_info": "<span class=yellowtext>限定技</span> 【限身份局】出牌阶段，你重新分配除主公外的所有角色的身份牌",
                            "huoying_liudao": "六道",
                            "huoying_liudao_info": "<font color=#f00>锁定技</font> <font color=#F0F>阴遁</font>当你的体力不为全场最高之一，你不能成为【杀】的目标；<font color=#F0F>阳遁</font>若你的体力值为全场最高之一，则你不能成为其他角色使用的锦囊牌的目标",
                            "huoying_itachi": "宇智波鼬",
                            "huoying_yuedu": "月读",
                            "huoying_yuedu_info": "出牌阶段限一次，你可选择一名角色进行拼点，若你赢，则该角色翻面，并且直到回合结束，你与该角色距离为1，其非锁定技失效，不能使用或打出牌",
                            "huoying_xuzuo": "须佐",
                            "huoying_xuzuo_info": "<font color=#F0F>须佐能乎</font> <font color=#f00>锁定技</font> 你的防御距离+1，当你有手牌时，防止受到属性伤害，无手牌时，防止受到非属性伤害",
                            "huoying_gangshou": "千手纲手",
                            "huoying_dashewan": "大蛇丸",
                            "huoying_zhilaiye": "自来也",
                            "huoying_zhishui": "止水",
                            "huoying_ningchi": "日向宁次",
                            "huoying_xinbaiyan": "白眼",
                            "huoying_xinbaiyan_info": "出牌阶段限一次，你可以观看一名角色的手牌，然后你可以获得其中一张黑色手牌",
                            "huoying_huitian": "回天",
                            "huoying_huitian_info": "每当你距离1以内的角色成为【杀】或【决斗】的目标后，你可以摸一张牌。",
                            "huoying_guazhang": "卦掌",
                            "huoying_guazhang_info": "<font color=#F0F>八卦掌</font> <font color=#f00>锁定技</font> 你的回合内，【闪】视为【杀】，回合外，【杀】视为闪",
                            "huoying_feiduan": "飞段",
                            "huoying_rebusi": "邪徒",
                            "huoying_rebusi_info": "<font color=#F0F>不死之身</font> <font color=#f00>锁定技</font> 在你死亡前，若你的体力值不大于0，亮出牌堆顶的一张牌并置于你的武将牌上，若此牌的点数与你武将牌上已有的牌点数均不同，则你回复体力至2并摸一张牌，若出现重复点数则你死亡。只要你的武将牌上有牌，你的手牌上限便与这些牌数量相等",
                            "huoying_zhoushu": "咒术",
                            "huoying_zhoushu_info": "<font color=#F0F>死司凭血</font> 当你对任意一名其他角色造成伤害后，你可施展咒术诅咒该角色，然后技能〖咒术〗进入冷却状态，直到该被诅咒的角色死亡后方可再次发动。当你受到伤害后，同时该被诅咒的角色视为受到来源为你的等量的伤害，直到其死亡为止",
                            "huoying_zhoushu3": "咒术",
                            "huoying_zhoushu3_info": "",
                            "huoying_zhoushu2": "咒术",
                            "huoying_zhoushu2_info": "当你受到伤害后，同时被诅咒的角色视为受到来源为你的等量的伤害，直到其死亡",
                            "huoying_ban": "宇智波斑",
                            "huoying_lunmu": "轮墓",
                            //"huoying_lunmu_info": "<font color=#F0F>轮墓边狱</font> 你每造成1点伤害后，可以立即获得受到伤害的角色的一张牌",
                            "huoying_lunmu_info": "<font color=#F0F>轮墓边狱</font> 当你的手牌数少于你的体力值张时，你可以点击“轮墓分身”来摸一张牌",
                            "huoying_zhenxing2": "豪火灭却",
                            "huoying_zhenxing": "震星",
                            "huoying_zhenxing_info": "<font color=#F0F>天碍震星  豪火灭却  龙炎放歌</font> 出牌阶段限一次，你可以将两张【杀】当作一张可附加火属性的【万箭齐发】使用",
                            "huoying_yiyuan": "遗愿",
                            "huoying_yiyuan_info": "<font color=#F0F>完全体须佐能乎</font>  <span class=greentext>觉醒技</span> 濒死阶段，你获得技能“轮墓”并摸一张牌，然后将所有手牌交给一名体力上限大于你的其他角色，调整你的体力上限至与该角色相同，回复体力至体力上限，然后获得场上所有其他角色的随机一张牌（回收尾兽）",
                            "huoying_xinxuzuo": "须佐",
                            "huoying_xinxuzuo_info": "<font color=#F0F>须佐能乎</font> <font color=#f00>锁定技</font> 出牌阶段你使用的【杀】可指定的目标上限+1。当你有手牌时，防止受到属性伤害，无手牌时防止受到非属性伤害",
                            "huoying_dayemu": "大野木",
                            "huoying_chendun": "尘遁",
                            "huoying_chendun_info": "出牌阶段限一次，你可与一名体力上限大于1的其他角色进行拼点，若你赢，目标角色失去一点体力上限，并摸一张牌；若你没赢，目标角色受到一点伤害",
                            "huoying_kai": "迈特凯",
                            "huoying_bamen": "八门",
                            "huoying_bamen_info": "<font color=#F0F>八门遁甲</font> <font color=#f00>锁定技</font> 出牌阶段开始时，若你的体力值为4或更少，你视为拥有技能“马术”（朝孔雀）；若你的体力值为3或更少，你视为拥有技能“咆哮”（昼虎）；若你的体力值为2或更少；你视为拥有技能“伏骑”（夕象）；若你的体力值为1，你视为拥有技能“暗箭”（夜凯）",
                            "huoying_resizhan": "死战",
                            "huoying_resizhan_info": "<font color=#F0F>八门遁甲</font> <span class=yellowtext>限定技</span> 出牌阶段开始前，你可以摸8张牌，然后你的体力上限调整至1",
                            "huoying_dou": "药师兜",
                            "huoying_yizhi": "移植",
                            "huoying_yizhi_info": "<font color=#f00>锁定技</font> 当你每受到伤害后，你从三个随机的【火影忍者】扩展的技能中选择获得一个（主公技、觉醒技、限定技除外）。若你发动〖移植〗至少三次，你失去技能〖医疗〗，获得技能〖仙法〗、〖转生〗",
                            "huoying_xianfa": "仙法",
                            "huoying_xianfa_info": "<font color=#f00>锁定技</font> 当你失去最后的手牌时，若你已受伤，你回复一点体力，否则你摸一张牌",
                            "huoying_zhuansheng": "转生",
                            "huoying_zhuansheng_info": "<font color=#F0F>秽土转生</font> 出牌阶段限一次，你可弃置一张【桃】并选择一名已阵亡角色，令其复活，其体力回复至2，摸两张的牌，并且若为身份局，其身份阵营与你一致（若你为主公则视阵营为忠臣），然后你失去一点体力上限",
                            "huoying_kakasi": "旗木卡卡西",
                            "huoying_fuzhi": "复制",
                            "huoying_fuzhi_info": "游戏开始所有角色摸牌后或你进入游戏时、你的回合开始前和结束阶段，你可以选择一名存活角色，获得其所有的技能，直到再次发动〖复制〗技能为止",
                            "huoying_leique": "雷切",
                            "huoying_leique_info": "你可将普通基本牌当无视防具的雷【杀】使用或打出",
                            "huoying_kkxkaiyan": "开眼",
                            "huoying_kkxkaiyan_info": "<span class=greentext>觉醒技</span> 当你杀死一名角色时，你获得技能〖神威〗",
                            "huoying_chutian": "日向雏田",
                            "huoying_baiyan": "白眼",
                            "huoying_baiyan_info": "出牌阶段限一次，你可以观看一名角色的手牌，然后你可以获得其中一张红色手牌",
                            "huoying_zhangshu": "掌术",
                            "huoying_zhangshu_info": "你的回合外，每当你使用、打出、失去或被弃置一张牌时，你立即摸一张牌。",
                            "huoying_rouquan": "柔拳",
                            "huoying_rouquan_info": "回合外每当你因使用、打出或被弃置等方式失去一张手牌时，你立即摸一张牌",
                            "huoying_kkxshenwei": "神威",
                            "huoying_kkxshenwei_info": "准备阶段，你可以移动场上的一张牌",
                            "huoying_daitu": "宇智波带土",
                            "huoying_shenwei": "神威",
                            "huoying_shenwei_info": "每回合限一次，当你需要使用【无懈可击】时，你可以选择翻面，视为使用了一张【无懈可击】",
                            "huoying_xuhua": "虚化",
                            "huoying_xuhua_info": "当你即将受到伤害时，若你的武将牌正面朝上，你可翻面，并获得伤害来源随机的一张牌（若有），然后取消此伤害",
                            "huoying_xianyan": "献眼",
                            "huoying_xianyan_info": "当你死亡时，你可将所有手牌交给一名其他角色，然后该角色随机获得〖虚化〗或〖神威〗，并回复一点体力",
                            "huoying_xieshen": "飞段",
                            "huoying_zhuozhu": "宇智波佐助",
                            "huoying_yandun": "炎遁",
                            "huoying_yandun_info": "出牌阶段限一次，你可与一名角色进行拼点，若你赢，你观看其手牌并对其造成一点火焰伤害，并令其获得“黑炎”标记。若你没赢，你获得一张【杀】，令其失去“黑炎”标记",
                            "huoying_rexuzuo": "须佐",
                            "huoying_rexuzuo_info": "<font color=#f00>锁定技</font> 你的手牌上限+1，当你有手牌时，防止受到属性伤害，无手牌时防止受到非属性伤害",
                            "huoying_qianniao": "千鸟",
                            "huoying_qianniao_info": "</font><font color=#f00>锁定技</font> 你的普通【杀】均视为雷【杀】且你的雷【杀】无距离限制",
                            "huoying_woailuo": "我爱罗",
                            "huoying_shazang": "沙葬",
                            "huoying_shazang_info": "<font color=#F0F>沙瀑大葬</font> </font><font color=#f00>锁定技</font> 当你使用【杀】造成伤害后，若该目标角色未翻面，你令其翻面。当你的体力值为1或手牌数为1时，你使用的牌无距离和指定目标数限制（延时性锦囊牌除外）",
                            "huoying_juefang": "绝防",
                            "huoying_juefang_info": "<font color=#F0F>绝对防御</font> <font color=#f00>锁定技</font> 每回合限一次，当你造成或受到伤害后，你获得一点护甲（至多为1）",
                            "huoying_jiamei2": "假寐",
                            "huoying_jiamei": "假寐",
                            "huoying_jiamei_info": "<font color=#F0F>假寐术</font> <span class=yellowtext>限定技</span> 出牌阶段，你可以将体力降至1，然后摸X张牌（X为你已损失的体力值），若如此做，出牌阶段结束时，你回复体力至体力上限",
                            "huoying_mingren": "漩涡鸣人",
                            "huoying_xianshu": "仙术",
                            "huoying_xianshu_info": "<font color=#f00>锁定技</font> 当你失去最后的手牌时，你回复一点体力并摸一张牌",
                            "huoying_fenshen": "分身",
                            "huoying_fenshen_info": "<font color=#F0F>影分身之术</font> 出牌阶段限一次，你可以用一张手牌与一至X名角色同时拼点，然后依次结算拼点结果，若你赢，你视为对其使用一张【杀】；若你没赢，你获得一个“分身”标记。你的进攻距离+X（X为你的“分身”标记数，若你有：①至少6个分身，你获得技能〖螺旋〗；②至少9个分身，你立即死亡）",
                            "huoying_shuimen": "波风水门",
                            "huoying_shanguang": "闪光",
                            "huoying_shanguang_info": "<font color=#F0F>飞雷神</font> <font color=#f00>锁定技</font> 你的防御距离始终+X（X为你已损失的体力值），你的进攻距离无限",
                            "huoying_luoxuan": "螺旋",
                            "huoying_luoxuan_info": "<font color=#F0F>螺旋丸</font> 出牌阶级限一次，你可以视为使用一张基本牌或普通锦囊牌",
                            "huoying_mrluoxuan": "螺旋",
                            "huoying_mrluoxuan_info": "<font color=#F0F>螺旋丸</font> 出牌阶级限一次，你可以视为使用一张基本牌或普通锦囊牌",
                            "huoying_fengyin": "封印",
                            "huoying_fengyin_info": "<font color=#F0F>尸鬼封尽</font> <span class=yellowtext>限定技</span> 出牌阶段，你可令任意一名角色永久失去当前的所有技能（若其体力上限大于4则调整为4），然后你进入濒死状态",
                            "huoying_changmen": "漩涡长门",
                            "huoying_lunhui": "轮回",
                            "huoying_lunhui_info": "<font color=#F0F>轮回天生</font> <span class=yellowtext>限定技</span> 出牌阶段，你可弃置两张【桃】并将你的武将牌翻面，令场上所有已阵亡的角色复活，其体力回复至1，并摸2张的牌",
                            "huoying_baoxing": "爆星",
                            "huoying_baoxing_info": "出牌阶段限一次，你可声明一张基本牌或普通锦囊牌，若如此做，若你未发动技能〖轮回〗，你须翻面，然后令场上所有其他角色弃置一张与你所声明的牌名字相同的手牌，否则你摸一张牌",
                            "huoying_tianyin": "天引",
                            "huoying_tianyin_info": "<font color=#F0F>万象天引</font> <font color=#f00>锁定技</font> 当你的武将牌翻至背面朝上，你的进攻距离无限",
                            "huoying_tianzheng": "天征",
                            "huoying_tianzheng_info": "<font color=#F0F>神罗天征</font> 当你受到【杀】造成的伤害时，你可翻面并弃置所有红色手牌令伤害-1；当你使用【杀】造成伤害时，你可翻面并弃置所有黑色手牌令此伤害+1",
                            "huoying_wuren": "无",
                            "huoying_duan": "加藤断",
                            "huoying_guijiao": "鬼鲛",
                            "huoying_liluoke": "李洛克",
                            "huoying_sanlei": "三代雷影",
                            "huoying_luwan": "奈良鹿丸",
                            "huoying_xiezi": "赤砂之蝎",
                            "huoying_xiaoying": "春野樱",
                            "huoying_feijian": "千手扉间",
                            "huoying_zaibuzhan": "桃地再不斩",
                            "huoying_dingchi": "秋道丁次",
                            "huoying_jinye": "山中井野",
                            "huoying_jiaodu": "角都",
                            "huoying_yuanyu": "怨虞",
                            "huoying_kanjiulang": "勘九郞",
                            "huoying_tuanzang": "志村团藏",
                            "huoying_jue": "绝",
                            "huoying_huiye": "大筒木辉夜",
                            "huoying_didala": "迪达拉",
                            "huoying_daluyi": "达鲁伊",
                            "huoying_huanyue": "鬼灯幻月",
                            "huoying_junmalv": "君麻吕",
                            "huoying_qilabi": "奇拉比",
                            "huoying_yuanfeirizhan": "猿飞日斩",
                            "huoying_xiaonan": "小南",
                            "huoying_zhongwu": "重吾",
                            "huoying_dahe": "大和",
                            "huoying_asima": "阿斯玛",
                            "huoying_leiying": "夜月艾",
                            "huoying_zhaomeimeng": "照美冥",
                            "huoying_guaili": "怪力",
                            "huoying_guaili_info": "每两轮限一次，你可以失去任意点体力并摸X张牌，然后直到回合结束，你使用的【杀】造成的伤害+1，你的进攻距离+X，且你可以额外使用X张【杀】（X为你以此法失去的体力值），若你在发动此技能后，每杀死一名其他角色，你增加一点体力上限",
                            "huoying_guaili2": "爆发",
                            "huoying_guaili2_info": "你使用的【杀】造成的伤害+1，你的进攻距离+X，且你可以额外使用X张【杀】",
                            "huoying_mudun2": "木遁无懈",
                            "huoying_mudun": "木遁",
                            "huoying_mudun_info": "每回合限X次（X为你的体力值），当你需要使用或打出牌时，你可以观看牌堆与弃牌堆随机五张牌，若其中有你可以使用或打出的牌，则你可以使用或打出之",
                            "huoying_baihao": "百豪",
                            "huoying_baihao_info": "<font color=#F0F>阴封印•百豪之术</font> 出牌阶段结束或濒死状态时，若你已受伤，你可选择回复体力至体力上限，然后失去一点体力上限",
                            "huoying_xianren": "仙人",
                            "huoying_xianren_info": "<font color=#F0F>蛤蟆仙人</font> <span class=greentext>觉醒技</span> 准备阶段开始时，若你的“忍”的数量不小于3，你减1点体力上限，选择一项：1、回复1点体力；2、摸两张牌。然后你获得技能“仙术”",
                            "huoying_renfa": "忍法",
                            "huoying_renfa_info": "你每受到一点伤害时，你可以摸一张牌并将一张手牌移出游戏，称为\"忍\"。然后为\"忍\"记录一个基本牌或锦囊牌名称（须与其他\"忍\"记录的名称均不同）。出牌阶段，你可以用任意数量的手牌与等量的“忍”交换，每阶段限一次。你的回合外，当有其他角色使用与你记录的\"忍\"牌名相同的牌时，你可以令此牌无效，然后移去该\"忍\"，你的手牌上限+X（X为“忍”的数量）",
                            "huoying_renfa2": "忍法",
                            "huoying_renfa2_info": "你每受到一点伤害时，你可以摸一张牌并将一张手牌移出游戏，称为\"忍\"。然后为\"忍\"记录一个基本牌或锦囊牌名称（须与其他\"忍\"记录的名称均不同）。你的回合外，当有其他角色使用与你记录的\"忍\"牌名相同的牌时，你可以令此牌无效，然后移去该\"忍\"",
                            "huoying_citan": "刺探",
                            "huoying_citan_info": "出牌阶段开始时，你可以潜入偷窥其他角色的手牌",
                            "huoying_yongsheng": "永生",
                            "huoying_yongsheng_info": "每回合限一次，濒死阶段，你可以摸一张牌，然后与一名其他角色拼点，若你赢，你与该角色交换体力值（伤害来源转为你）并且你增加一点体力上限（不得超过4）；若你拼点没赢，你回复体力至1，然后失去一点体力上限并翻面",
                            "huoying_rechendun": "尘遁",
                            "huoying_rechendun_info": "出牌阶段限一次，你可与一名有未被废除的装备栏的角色进行拼点，若你赢，你选择废除其一个装备栏；若你没赢，目标角色受到一点伤害",
                            "huoying_wuchen": "无尘",
                            "huoying_wuchen_info": "<font color=#F0F>无尘迷塞</font> <font color=#f00>锁定技</font> 当你没有手牌时，你防止受到任何伤害",
                            "huoying_rexianshu": "仙术",
                            "huoying_rexianshu_info": "<font color=#f00>锁定技</font> 当你失去最后的手牌时，若你已受伤，你回复一点体力，否则你摸一张牌",
                            "huoying_shunsheng": "瞬身",
                            "huoying_shunsheng_info": "<font color=#F0F>瞬身止水</font><font color=#f00>锁定技</font> 回合结束后， 你和一名随机角色交换位置",
                            "huoying_renfa3": "忍法",
                            "huoying_renfa3_info": "出牌阶段，你可以用任意数量的手牌与等量的“忍”交换，每阶段限一次。",
                            "huoying_reshouhu": "守护",
                            "huoying_reshouhu_info": "<font color=#F0F>别天神</font> <span class=yellowtext>限定技</span> 出牌阶段，你可以把所有手牌交给一名存活的非主公角色，若为身份局，其身份与你一致（你不为主公），并且其之后的一切行动受你控制，然后你（止水）自杀身亡",
                            "huoying_linghua": "灵化",
                            "huoying_linghua_info": "<font color=#F0F>灵化之术</font> 你的防御距离+X（X为你的体力值）。出牌阶段，你可弃置一张基本牌，选择一名存活角色，令其与你交换角色（仅游戏玩家交换，直到该角色的回合结束阶段你才能“回魂”）。然后你失去此技能（直到你“回魂”重新获得〖灵化〗），并对目标造成一点伤害，结算完后当前回合立即结束",
                            "huoying_aiyuan": "爱愿",
                            "huoying_aiyuan_info": "当一名其他角色失去体力、失去体力上限、受到伤害后，你可令你与其各摸一张牌",
                            "huoying_huihun": "回魂",
                            "huoying_huihun_info": "<font color=#f00>锁定技</font> 回合结束阶段，你与【加藤断】交换角色魂魄（其须存活），然后你失去此技能，其获得技能〖灵化〗",
                            "huoying_jiaoji": "鲛肌",
                            "huoying_jiaoji_info": "<font color=#F0F>无尾尾兽</font> <font color=#f00>锁定技</font> 每名角色的回合限一次，当你造成或受到伤害后，你选择回复1点体力或摸一张牌",
                            "huoying_shuilao": "水牢",
                            "huoying_shuilao_info": "<font color=#F0F>水牢之术</font> 一名其他角色的回合开始阶段，若你的手牌数大于其手牌数，你可以与该角色拼点，若你赢，该角色本回合使用的牌不能指定除该角色外的角色为目标",
                            "huoying_lianhua": "莲华",
                            "huoying_lianhua_info": "<font color=#f00>锁定技</font> 摸牌阶段摸牌时，你摸X张牌（X为游戏轮数，且 1 < X < 7）",
                            "huoying_xuanfeng": "旋风",
                            "huoying_xuanfeng_info": "<font color=#F0F>木叶旋风</font> <font color=#f00>锁定技</font> 你使用【杀】指定的目标数、攻击范围均+X（X为游戏轮数且至多为6）",
                            "huoying_jiaodan": "鲛弹",
                            "huoying_jiaodan_info": "<font color=#F0F>水遁•水鲛弹之术</font> 出牌阶段限一次，你可以弃置X张牌对一名其他角色造成1点伤害(X为该角色的体力值)。若你以此法令该角色进入濒死状态，则濒死状态结算后你摸一张牌",
                            "huoying_jiaodan2": "鲛弹",
                            "huoying_jiaodan2_info": "",
                            "huoying_leidun": "雷盾",
                            "huoying_leidun_info": "<font color=#F0F>最强之盾</font> <font color=#f00>锁定技</font> 游戏开始或你进入游戏时，你的体力上限改为X（X为其他角色的体力上限之和的一半（向下取整））",
                            "huoying_yingfu3": "影缚",
                            "huoying_yingfu2": "影缚",
                            "huoying_yingfu": "影缚",
                            "huoying_yingfu_info": "出牌阶段开始时，你可选择一种牌的类型，令所有已横置武将牌的其他角色不能使用或打出该类型的牌",
                            "huoying_zhimou": "智谋",
                            "huoying_zhimou_info": "当其他角色的出牌阶段开始时，若其有手牌且武将牌未横置，你可以猜测其手牌中的花色数，若猜对，你获得其随机的一张牌，若猜错，其横置武将牌",
                            "huoying_zhaohuan_number": "召唤",
                            "huoying_zhaohuan": "召唤",
                            "huoying_zhaohuan_info": "<font color=#F0F>通灵万蛇</font> 当你拼点的牌亮出后，你可与对方交换拼点牌",
                            "huoying_kuilei": "傀儡",
                            "huoying_kuilei_info": "回合开始和回合结束阶段，你可选择获得一名已阵亡角色的技能，直到再次发动此〖傀儡〗技能为止",
                            "huoying_baiji": "百机",
                            "huoying_baiji_info": "<font color=#F0F>赤秘技•百机操演</font> 每当你造成或受到伤害后，你可从牌堆和弃牌堆中选择使用一张装备牌",
                            "huoying_shuidun": "水遁",
                            "huoying_shuidun_info": "当一名角色受到火属性伤害时，你可防止此伤害",
                            "huoying_yiliao": "医疗",
                            "huoying_yiliao_info": "当一名角色进入濒死状态时，你可以展示该角色的一张牌：若此牌为装备牌，则该角色弃掉这张牌并回复体力至1，若为非装备牌，你获得之",
                            "huoying_jinshu": "禁术",
                            "huoying_jinshu_info": "<font color=#F0F>禁术宗师</font> <font color=#f00>锁定技</font> 回合开始阶段，你随机获得技能〖分身〗（鸣人）、〖闪光〗（波风水门）、〖转生〗（药师兜）中的一个，直到下一次回合开始。",
                            "huoying_baoli": "爆力",
                            "huoying_baoli_info": "出牌阶段限一次，你可与一名角色拼点，若你赢，你获得以下技能效果：1、直到你的下回合开始，你为伤害来源的【杀】或【决斗】造成的伤害+1；2、你使用【杀】指定一名角色为目标后，你可以弃置该角色一张牌。",
                            "huoying_baoli2": "爆力",
                            "huoying_baoli2_info": "直到你的下回合开始，你为伤害来源的【杀】或【决斗】造成的伤害+1。",
                            "huoying_baoli3": "爆力",
                            "huoying_baoli3_info": "当你使用【杀】指定一名角色为目标后，你可以弃置该角色一张牌。",
                            "huoying_baofu1": "爆符",
                            "huoying_baofu1_info": "出牌阶段限一次，你可以对一名其他角色造成1点火焰伤害。",
                            "huoying_baofu2": "爆符",
                            "huoying_baofu2_info": "<font color=#F0F>互乘起爆符</font> 当一名角色受到火焰伤害后，你可以弃置一张方片花色的牌，然后对该角色或与其距离为1以内的一名角色造成等量的火焰伤害",
                            "huoying_baofu": "爆符",
                            "huoying_baofu_info": "<font color=#F0F>互乘起爆符</font> 出牌阶段限一次，你可以对一名其他角色造成1点火焰伤害。每当一名角色受到火焰伤害后，你可以弃置一张方片花色的牌，然后对该角色或与其距离为1的一名角色造成等量的火焰伤害",
                            "huoying_wuyin": "雾隐",
                            "huoying_wuyin_info": "<font color=#F0F>雾隐之术</font> <font color=#f00>锁定技</font> 当你的武将牌背面朝上时，你防止受到任何伤害",
                            "huoying_ansha": "暗杀",
                            "huoying_ansha_info": "出牌阶段限一次，你可以选择弃置一名有牌的其他角色的一张牌，若如此做，你与其依次将武将牌翻面，然后你视为对其使用一张不计入次数限制的【杀】",
                            "huoying_reshuilao": "水牢",
                            "huoying_reshuilao_info": "<font color=#F0F>水牢之术</font> 一名其他角色的准备阶段，若你的武将牌背面朝上，你可以与该角色拼点，若你赢，你将你的武将牌翻面，该角色本回合使用的牌不能指定除该角色外的角色为目标",
                            "huoying_huadie": "化蝶",
                            "huoying_huadie_info": "<font color=#f00>锁定技</font> 若你的手牌数是全场唯一最多的，你使用【杀】造成的伤害+X并且弃牌阶段你的手牌上限-X（X为你本回合发动倍化的次数）",
                            "huoying_beihua": "倍化",
                            "huoying_beihua_info": "<font color=#F0F>倍化之术</font> 出牌阶段限3次，你可以失去一点体力，展示牌堆顶的2X张牌（X为你本回合发动倍化的次数），其中每有一张梅花牌，你回复1点体力（梅花引蝶），然后你将这些牌收入手牌",
                            "huoying_beihua2": "倍化",
                            "huoying_beihua2_info": "",
                            "huoying_zhuanxin": "转心",
                            "huoying_zhuanxin_info": "<font color=#F0F>心转心之术</font> 出牌阶段限一次，你可以弃置一张红桃手牌，选择一名存活的其他角色，令其与你交换手牌",
                            "huoying_reyiliao": "医疗",
                            "huoying_reyiliao_info": "当一名角色进入濒死状态时，你可以展示该角色的一张牌：若此牌为装备牌，则该角色弃掉这张牌并回复体力至1，若为非装备牌，你获得之",
                            "huoying_yuanyu_info": "<font color=#F0F>地怨虞</font> 你每杀死一名角色时，可随机获得其一项技能，并增加一点体力上限（不得超过5）和回复一点体力。然后你根据该角色的势力获得相应的限定技：<li>魏国：风遁-出牌阶段，你可弃置所有其他角色区域内的一张牌<li>蜀国：火遁-出牌阶段，你可选择至多五名其他角色，对其各造成一点火属性伤害<li>吴国：水遁-当你回复体力时，你可将体力回复至体力上限，并摸一张牌<li>群雄：土遁-当你即将受到任何伤害时，你可防止之，并回复一点体力<li>其它:雷遁-出牌阶段，你可选择一名其他角色，对其造成一点雷属性伤害并令其武将牌背面朝上",
                            "huoying_yuanyuwind": "风遁",
                            "huoying_yuanyuwind_info": "<span class=yellowtext>限定技</span> 出牌阶段，你可弃置所有其他角色区域内的一张牌",
                            "huoying_yuanyusoil": "土遁",
                            "huoying_yuanyusoil_info": "<span class=yellowtext>限定技</span> 当你即将受到任何伤害时，你可防止之，并回复一点体力",
                            "huoying_yuanyuwater": "水遁",
                            "huoying_yuanyuwater_info": "<span class=yellowtext>限定技</span> 当你回复体力时，你可将体力回复至体力上限，并摸一张牌",
                            "huoying_yuanyufire": "火遁",
                            "huoying_yuanyufire_info": "<span class=yellowtext>限定技</span> 出牌阶段，你可选择至多五名其他角色，对其各造成一点火属性伤害",
                            "huoying_yuanyuthunder": "雷遁",
                            "huoying_yuanyuthunder_info": "<span class=yellowtext>限定技</span> 出牌阶段，你可选择一名其他角色，对其造成一点雷属性伤害并令其武将牌背面朝上",
                            "huoying_zhongquan": "硬拳",
                            "huoying_zhongquan_info": "<font color=#f00>锁定技</font> 若你的体力不是全场最高（含之一），你无视对方的防具，并且造成的伤害+1",
                            "huoying_newkuilei": "傀儡",
                            "huoying_newkuilei_info": "<font color=#F0F>傀儡术</font> 每当你失去一张装备区的牌，你可以获得至多X名其他角色的一张手牌或判定区的牌（X为你的体力值）",
                            "huoying_huomeng": "惑梦",
                            "huoying_huomeng_info": "<font color=#F0F>伊邪那歧</font> 结束阶段，你可以弃置一张装备区的牌，对自己施加终极幻术，然后进入伊邪那歧梦境：直到下回合开始，你防止受到非属性伤害",
                            "huoying_huomeng2": "梦境",
                            "huoying_huomeng2_info": "（伊邪那歧）<font color=#f00>锁定技</font> 你防止受到非属性伤害",
                            "huoying_duoyang": "夺眼",
                            "huoying_duoyang_info": "每当你造成伤害后，你可以选择一项：1、获得受到伤害的角色装备区里的一张牌（你的装备区相应位置不能有此类装备牌）；2、摸一张牌",
                            "huoying_kongbo": "空波",
                            "huoying_kongbo_info": "<font color=#F0F>风遁•真空波</font> <font color=#f00>锁定技</font> 若你的装备区有牌，你无视对方的防具",
                            "huoying_sixiang": "四象",
                            "huoying_sixiang_info": "<font color=#F0F>四象封印</font> 当你死亡时，若伤害来源与你距离为1，你可令其失去当前的所有技能（若其体力上限大于4则调整为4），直到游戏结束",
                            "huoying_chengyi": "承艺",
                            "huoying_chengyi_info": "当其他角色的牌因弃置而进入弃牌堆时，若其中含有非梅花花色的装备牌，你可以获得所有这些非梅花的牌。",
                            "huoying_yuedu2": "幻术",
                            "huoying_yuedu2_info": "直到回合结束，该角色不能使用或打出手牌",
                            "huoying_yuedu3": "月读",
                            "huoying_yuedu3_info": "与其距离为1",
                            "huoying_baozi": "孢子",
                            "huoying_baozi_info": "<font color=#F0F>孢子之术</font> 每名角色的回合限一次，当你需要使用或打出一张牌时，你可以观看任意一名其他角色的手牌并选择一张使用或打出",
                            "huoying_leisu": "雷速",
                            "huoying_leisu_info": "<font color=#f00>锁定技</font> 你使用的任何卡牌无数量限制，可选择距离不大于此牌点数的目标",
                            "huoying_duanbi": "断臂",
                            "huoying_duanbi_info": "<font color=#F0F>雷犁热刀</font> 出牌阶段，你可以流失一点体力并摸两张牌，若如此做，你获得以下效果：1、无视对方的防具，2、你使用的【决斗】造成的伤害+1",
                            "huoying_duanbi2": "断臂",
                            "huoying_duanbi2_info": "你无视对方防具，并且你使用的【决斗】造成的伤害+1",
                            "huoying_fuyou": "蜉蝣",
                            "huoying_fuyou_info": "<font color=#F0F>蜉蝣之术</font> <span class=greentext>觉醒技</span> 濒死阶段，你选择系统随机展示的五名【火影忍者】角色中的一名变身之，摸两张牌并回复体力至体力上限，若场上没有【大筒木辉夜】，你获得技能〖阴谋〗",
                            "huoying_juneng": "聚能",
                            "huoying_juneng_info": "<font color=#f00>锁定技</font> 每名角色的回合限一次：当一名角色受到伤害，你摸一张牌；当一名角色回复一点体力，若你已受伤，你回复一点体力",
                            "huoying_yinmou": "阴谋",
                            "huoying_yinmou_info": "<span class=yellowtext>限定技</span> 出牌阶段，若场上没有【大筒木辉夜】，你可以弃置一张【闪电】，选择一名存活的其他角色，令其变身为【大筒木辉夜】，然后你与其各回复一点体力",
                            "huoying_zhongbao": "重瀑",
                            "huoying_zhongbao_info": "<font color=#F0F>雷我暴弹</font> <font color=#f00>锁定技</font> 当你于回合内重复使用同名卡牌时，你摸一张牌（每种牌至多以此法摸两张）",
                            "huoying_juneng2": "聚能",
                            "huoying_juneng2_info": "<font color=#f00>锁定技</font> 每名角色的回合限一次，当一名角色受到伤害，你摸一张牌",
                            "huoying_tianyu": "天御",
                            "huoying_tianyu_info": "<font color=#F0F>天之御中</font> 出牌阶段限一次，若存活人数大于2，你可以令所有其他角色与随机角色交换位置",
                            "huoying_baodun": "爆遁",
                            "huoying_baodun_info": "出牌阶段限一次，你可以选择一名有手牌的其他角色，然后声名一种花色，并展示该角色随机一张手牌，若两者花色一致，你获得该手牌；若花色不一致，其受到一点火焰伤害，并且你弃置其一张牌",
                            "huoying_zibao": "自爆",
                            "huoying_zibao_info": "<span class=yellowtext>限定技</span> 出牌阶段，你可令所有其他角色受到一点火焰伤害，若如此做，与你距离为1的角色额外受到一点火焰伤害，然后你死亡。",
                            "huoying_huigu": "灰骨",
                            "huoying_huigu_info": "<font color=#F0F>共杀灰骨</font> 出牌阶段限一次，你可以令攻击范围内的一名有手牌的其他角色展示一下其手牌，该角色陷入瞳术中：直到回合结束，其不能使用或打出牌。然后你须弃置其一张牌",
                            "huoying_feiniao": "飞鸟",
                            "huoying_feiniao_info": "<font color=#f00>锁定技</font> 你的防御距离+1",
                            "huoying_lunxue": "轮写",
                            "huoying_lunxue_info": "不能使用或打出牌",
                            "huoying_shayu": "砂雨",
                            "huoying_shayu_info": "<font color=#F0F>砂铁时雨</font> 当你失去一张装备区的牌后，你可以选择一项：1、摸一张牌；2、弃置一名其他角色的一张牌",
                            "huoying_feixian": "飞翔",
                            "huoying_feixian_info": "<font color=#f00>锁定技</font> 你的防御距离+X（X为你的体力值）",
                            "huoying_xfenlie": "分裂",
                            "huoying_xfenlie_info": "（分裂、通灵）出牌阶段限一次，你可以弃置所有手牌（没手牌则不须弃）并摸两张牌",
                            "huoying_guaili3": "爆发",
                            "huoying_guaili3_info": "你每杀死一名角色后，你增加一点体力上限",
                            "huoying_bizhu": "臂助",
                            "huoying_bizhu_info": "每当一名角色流失体力后，你与其可以各摸一张牌。",
                            "huoying_landun": "岚遁",
                            "huoying_landun_info": "出牌阶段限一次，你可以进行一次判定，若判定结果为：黑桃，你使用的【杀】造成的伤害+1；红桃，你使用的【杀】可以额外指定一名角色成为目标；梅花，你使用【杀】后可弃置对方一张牌；方片，你使用【杀】的上限次数+1。然后你本回合使用的【杀】无距离限制且无法闪避",
                            "huoying_landun3": "岚遁",
                            "huoying_landun3_info": "你使用【杀】后可弃置对方一张牌",
                            "huoying_landun1": "岚遁",
                            "huoying_landun1_info": "使用的【杀】造成的伤害+1",
                            "huoying_landun2": "岚遁",
                            "huoying_landun2_info": "你使用的【杀】可额外指定一名角色",
                            "huoying_landun4": "岚遁",
                            "huoying_landun4_info": "你使用的【杀】次数上限+1",
                            "huoying_landun5": "岚遁",
                            "huoying_landun5_info": "你使用的【杀】无距离限制",
                            "huoying_landun6": "岚遁",
                            "huoying_landun6_info": "你使用的【杀】无法闪避",
                            "huoying_chunshu": "蜃术",
                            "huoying_chunshu_info": "结束阶段，你可以进行一次判定，若判定结果为：黑色，你防止受到锦囊牌的伤害；红色：你不能成为【杀】的目标，且均防止受到属性伤害，直到下个出牌阶段开始为止",
                            "huoying_chunshu1": "锦囊",
                            "huoying_chunshu1_info": "<font color=#f00>锁定技</font> 你防止受到锦囊牌的伤害",
                            "huoying_chunshu2": "禁杀",
                            "huoying_chunshu2_info": "<font color=#f00>锁定技</font> 你不能成为【杀】的目标",
                            "huoying_zhengbao": "蒸爆",
                            "huoying_zhengbao_info": "<font color=#F0F>蒸危暴威</font> <span class=greentext>觉醒技</span> 当你处于濒死状态时，你丢弃你所有判定区的牌，并重置你的武将牌，摸两张牌，体力上限改为4点并回复体力至3点，然后你使用一张“蒸危暴威”卡牌，获得技能“循爆”、“水炮”",
                            "huoying_chunshu3": "属性",
                            "huoying_chunshu3_info": "<font color=#f00>锁定技</font> 你防止受到属性伤害",
                            "huoying_shuipao": "水炮",
                            "huoying_shuipao_info": "<font color=#F0F>水铁炮之术</font> 出牌阶段限一次，你可以弃置一张装备区的牌，对一名其他角色造成1点伤害",
                            "huoying_lianbao": "循爆",
                            "huoying_lianbao_info": "回合开始时，如果场上角色的判定区内没有【蒸危暴威】，你可以使用一张【蒸危暴威】",
                            "huoying_tuci": "突刺",
                            "huoying_tuci_info": "<font color=#F0F>地狱突刺</font><font color=#f00>锁定技</font> 你使用的杀造成的伤害+X（X为你损失的体力值的25%进位取整）",
                            "huoying_guwu": "骨舞",
                            "huoying_guwu_info": "<font color=#F0F>尸骨脉</font> <font color=#f00>锁定技</font> 你使用【杀】的次数上限、攻击范围均为X（X为你的体力值），指定目标数+Y（Y为本回合你使用【杀】的次数）",
                            "huoying_zhouyin": "咒印",
                            "huoying_zhouyin_info": "<font color=#F0F>地之咒印</font> 当其他角色出牌阶段开始时，若其手牌数大于你的手牌数或其体力值大于你的体力值，且你的体力值：①大于2，你可以摸一张牌②小于3，你回复一点体力",
                            "huoying_shuochang": "说唱",
                            "huoying_shuochang_info": "出牌阶段开始时，你可以令你此阶段内每种牌名的牌限使用一次。若如此做，你使用的牌没距离限制，且每当你于此阶段内使用牌时，你摸一张牌",
                            "huoying_xianhua": "仙化",
                            "huoying_xianhua_info": "<font color=#f00>锁定技</font> 其他角色在弃牌阶段若有弃牌，你摸一张牌，否则你回复一点体力",
                            "huoying_leidao": "雷刀",
                            "huoying_leidao_info": "<font color=#F0F>绝牛•雷犁热刀</font> 当其他角色使用一张非转化的【杀】指定目标且结算后，你可对其视为再使用一张【杀】",
                            "huoying_huizhan": "挥战",
                            "huoying_huizhan_info": "每两轮的出牌阶段限一次，你可以弃置所有手牌，指定一个目标，从你下家开始场上所有角色依次视为对其使用一张【杀】，直到你或其体力值不大于1为止",
                            "huoying_xfengyin": "封印",
                            "huoying_xfengyin_info": "<font color=#F0F>尸鬼封尽</font> <span class=yellowtext>限定技</span> 回合结束阶段你可令任意一名角色永久失去当前的所有技能（若其体力上限大于4则调整为4），然后你进入濒死状态。",
                            "huoying_yuanmo": "猿魔",
                            "huoying_yuanmo_info": "<font color=#f00>锁定技</font> 结束阶段，你可以将手牌数补至当前体力的张数",
                            "huoying_yan": "黑炎",
                            "huoying_yan_info": "<font color=#f00>锁定技</font> 开始阶段，若你有此“黑炎”标记，你须进行判定，若判定结果为黑色，你受到一点无来源的火焰伤害",
                            "huoying_tianzhao2": "天照",
                            "huoying_tianzhao2_info": "当你造成火属性伤害时，你可令该受伤害的角色获得“黑炎”标记",
                            "huoying_tianzhao1": "天照",
                            "huoying_tianzhao1_info": "出牌阶段，你可将普通杀当火杀使用",
                            "huoying_tianzhao": "天照",
                            "huoying_tianzhao_info": "<font color=#f00>锁定技</font> 你的普通【杀】均视为火【杀】，当你造成火属性伤害时，该受伤害的角色获得“黑炎”标记",
                            "huoying_tiancheng": "天秤",
                            "huoying_tiancheng_info": "当你亮出拼点牌后，你可令此牌点数+X（超重岩之术）或点数－X（超轻岩之术）。（X为场上存活角色数）",
                            "huoying_jizhu": "计诛",
                            "huoying_jizhu_info": "当你受到伤害后，你可以依次弃置任意角色的共计X张牌。（X为你的装备区的牌数与损失的体力值之和） ",
                            "huoying_zhishu": "纸术",
                            "huoying_zhishu_info": "<font color=#F0F>式纸之舞</font> 当一名其他角色翻面或判定牌生效后，你可以选择一项：1、将该角色装备区里的一张牌移动至你装备区里的相应位置（不可替换）；2、摸一张牌",
                            "huoying_kuangbao": "狂暴",
                            "huoying_kuangbao_info": "<font color=#F0F>空气炮</font> 当一名角色受到火属性或雷属性伤害后，你可令其受到等量的无属性伤害",
                            "huoying_xmudun2": "木遁无懈",
                            "huoying_xmudun": "木遁",
                            "huoying_xmudun_info": "每回合限X次，当你需要使用或打出牌时，你可以观看牌堆或弃牌堆随机的X张牌，若其中有你可以使用或打出的牌，则你可以使用或打出之（X为你的体力值）",
                            "huoying_daiban": "代班",
                            "huoying_daiban_info": "<font color=#f00>锁定技</font> 身份模式下，当你存活时，你先获得当前主公的主公技，然后主公的主公技失效",
                            "huoying_daiban_1": "代班",
                            "huoying_daiban_1_info": "当前的主公的主公技失效",
                            "huoying_duizhang": "领队",
                            "huoying_duizhang_info": "<font color=#f00>锁定技</font> 当场上有角色拼点后，你摸一张牌",
                            "huoying_shouyu": "守玉",
                            "huoying_shouyu_info": "当其他角色受到伤害时，你可以令此伤害转移给你；当你受到伤害后，你可以摸X张牌(X为你已损失的体力值)",
                            "huoying_fengdun": "风遁",
                            "huoying_fengdun_info": "<font color=#f00>锁定技</font> 当你的手牌数大于你的体力值，你使用的【杀】无法闪避",
                            "huoying_jinshao": "烬烧",
                            "huoying_jinshao_info": "<font color=#F0F>灰烬烧</font> </font> <span class=yellowtext>限定技</span> 出牌阶段，你可令任意名其他角色依次选择一项：弃置X张牌；或受到一点火焰伤害。(X为你选择的角色数)",
                            "huoying_rongdun": "溶遁",
                            "huoying_rongdun_info": "<font color=#F0F>溶怪之术</font> 每名角色的回合限一次，当其他角色使用装备牌时，你可取消之，然后你摸一张牌",
                            "huoying_feidun": "沸遁",
                            "huoying_feidun_info": "<font color=#F0F>沸遁•巧雾之术</font> 出牌阶段限一次，你可以观看一名其他角色的牌，然后你可以用一张手牌替换其中的一张牌，若如此做，该角色受到一点火焰伤害",
                            "hyrz_zbfs": "蒸危暴威",
                            "hyrz_zbfs_info": "延时性锦囊牌，若判定结果为方片，则目标角色受到X点无来源的火焰伤害并随机弃置X张牌（X为此锦囊判定结果为方片的次数）。判定完成后，将此牌移动到下家的判定区里。",
                            "huoying_shouju": "手鞠",
                            "huoying_fengwang": "风网",
                            "huoying_fengwang_info": "每当你翻面时，你可以弃置一名其他角色的一张牌",
                            "huoying_lianyou": "镰鼬",
                            "huoying_lianyou_info": "结束阶段时，你可令所有有牌的角色选择：弃置一张牌或令你获得其一张牌，然后你将武将牌背面朝上",
                            "huoying_jiuxinnai": "玖辛奈",
                            "huoying_fenglian": "封链",
                            "huoying_fenglian2": "链",
                            "huoying_fenglian3": "链",
                            "huoying_fenglian_info": "回合开始阶段，你可选择一至X名角色（X为你的手牌数），令其横置武将牌。然后若其下回合没跳过回合开始阶段，其下个回合的出牌阶段不能使用或打出牌",
                            "huoying_hongjiao": "红椒",
                            "huoying_hongjiao_info": "<font color=#F0F>血红辣椒</font> 当你受到伤害时，你可立即令伤害来源受到等量的火焰伤害",
                            "hyrz_ren": "忍",
                            "hyrz_huo": "火",
                            "hyrz_xiao": "晓",
                            "huoying_muye": "木叶村",
                            "huoying_xiao": "晓组织",
                            "huoying_zhongren": "众忍村",
                            "huoying_liudaoxianren": "六道仙人",
                            "identity_zhu": "主公",
                            "identity_fan": "反贼",
                            "identity_nei": "内奸",
                            "identity_zhong": "忠臣",
                            "caoying_basic": "基本牌",
                            "caoying_trick": "锦囊牌",
                            "caoying_equip": "装备牌",
                            "lukai_spade": "黑桃",
                            "lukai_heart": "红桃",
                            "lukai_club": "草花",
                            "lukai_diamond": "方片",

                        },
                    };
                    if (lib.device || lib.node) {
                        for (var i in huoyingrenzhe.character) { huoyingrenzhe.character[i][4].push('ext:火影忍者/' + i + '.jpg'); }
                    } else {
                        for (var i in huoyingrenzhe.character) { huoyingrenzhe.character[i][4].push('db:extension-火影忍者:' + i + '.jpg'); }
                    }
                    return huoyingrenzhe;
                });
                lib.config.all.characters.push('huoyingrenzhe');
                if (!lib.config.characters.contains('huoyingrenzhe')) lib.config.characters.push('huoyingrenzhe');
                lib.translate['huoyingrenzhe_character_config'] = '<font color=#f00>火影忍者</font>';

                // ---------------------------------------卡牌------------------------------------------//	
                game.import('card', function () {
                    var hyrz_equip = {
                        name: 'hyrz_equip',
                        connect: true,
                        card: {
                            "hyrz_houzi": {
                                audio: true,
                                fullskin: true,
                                type: "equip",
                                subtype: "equip5",
                                skills: ["hyrz_houzi"],
                                ai: {
                                    basic: {
                                        equipValue: 8,
                                        order: function (card, player) {
                                            if (player && player.hasSkillTag('reverseEquip')) {
                                                return 8.5 - get.equipValue(card, player) / 20;
                                            }
                                            else {
                                                return 8 + get.equipValue(card, player) / 20;
                                            }
                                        },
                                        useful: 2,
                                        value: function (card, player) {
                                            var value = 0;
                                            var info = get.info(card);
                                            var current = player.getEquip(info.subtype);
                                            if (current && card != current) {
                                                value = get.value(current, player);
                                            }
                                            var equipValue = info.ai.equipValue;
                                            if (equipValue == undefined) {
                                                equipValue = info.ai.basic.equipValue;
                                            }
                                            if (typeof equipValue == 'function') return equipValue(card, player) - value;
                                            if (typeof equipValue != 'number') equipValue = 0;
                                            return equipValue - value;
                                        },
                                    },
                                    result: {
                                        target: function (player, target) {
                                            return get.equipResult(player, target, name);
                                        },
                                    },
                                },
                                image: "ext:火影忍者/hyrz_houzi.png",
                                enable: true,
                                selectTarget: -1,
                                filterTarget: function (card, player, target) {
                                    return target == player;
                                },
                                modTarget: true,
                                allowMultiple: false,
                                content: function () {
                                    target.equip(card);
                                },
                                toself: true,
                            },
                            "hyrz_zbfs": {
                                audio: true,
                                derivation: "huoying_huanyue",
                                cardnature: 'fire',
                                vanish: true,
                                skills: ["hyrz_zbfs"],
                                image: "ext:火影忍者/hyrz_zbfs.png",
                                enable: function (card, player) {
                                    return player.canAddJudge(card);
                                },
                                modTarget: function (card, player, target) {
                                    return lib.filter.judge(card, player, target);
                                },
                                filterTarget: function (card, player, target) {
                                    return (lib.filter.judge(card, player, target) && player == target);
                                },
                                selectTarget: [-1, -1],
                                judge: function (card) {
                                    if (get.suit(card) == 'diamond') return -6;
                                    return 0;
                                },
                                effect: function () {
                                    'step 0'
                                    if (result.bool == false) {
                                        if (!card.storage.hyrz_zbfs) {
                                            card.storage.hyrz_zbfs = 1;
                                        }
                                        else {
                                            card.storage.hyrz_zbfs++;
                                        }
                                        player.damage(card.storage.hyrz_zbfs, 'fire', 'nosource');
                                        player.discard(player.getCards('he').randomGets(card.storage.hyrz_zbfs));
                                    }
                                    'step 1'
                                    player.addJudgeNext(card);
                                },
                                cancel: function () {
                                    player.addJudgeNext(card);
                                },
                                ai: {
                                    basic: {
                                        order: 5,
                                        useful: 5,
                                        value: 1,
                                    },
                                    result: {
                                        target: function (player, target) {
                                            return lib.card.shandian.ai.result.target(player, target);
                                        },
                                    },
                                },
                                content: function () {
                                    game.playhyrz('hyrz_zbfs');
                                    target.addJudge(card, cards);
                                },
                                allowMultiple: false,
                            },
                            "hyrz_mianju": {
                                audio: true,
                                type: "equip",
                                subtype: "equip2",
                                skills: ["hyrz_mianju"],
                                ai: {
                                    order: 9.5,
                                    basic: {
                                        equipValue: function (card, player) {
                                            if (!player.isTurnedOver()) return 6;
                                            if (player.isTurnedOver()) return -10;
                                            return 0;
                                        },
                                        order: function (card, player) {
                                            if (player && player.hasSkillTag('reverseEquip')) {
                                                return 8.5 - get.equipValue(card, player) / 20;
                                            }
                                            else {
                                                return 8 + get.equipValue(card, player) / 20;
                                            }
                                        },
                                        useful: 2,
                                        value: function (card, player) {
                                            var value = 0;
                                            var info = get.info(card);
                                            var current = player.getEquip(info.subtype);
                                            if (current && card != current) {
                                                value = get.value(current, player);
                                            }
                                            var equipValue = info.ai.equipValue;
                                            if (equipValue == undefined) {
                                                equipValue = info.ai.basic.equipValue;
                                            }
                                            if (typeof equipValue == 'function') return equipValue(card, player) - value;
                                            if (typeof equipValue != 'number') equipValue = 0;
                                            return equipValue - value;
                                        },
                                    },
                                    result: {
                                        target: function (player, target) {
                                            return get.equipResult(player, target, name);
                                        },
                                    },
                                },
                                image: "ext:火影忍者/hyrz_mianju.png",
                                enable: true,
                                selectTarget: -1,
                                modTarget: true,
                                allowMultiple: false,
                                toself: true,
                                fullskin: true,
                            },
                            "hyrz_shoulijian": {
                                audio: true,
                                type: "basic",
                                skills: ["hyrz_shoulijian"],
                                enable: true,
                                fullskin: true,
                                filterTarget: function (card, player, target) {
                                    return get.distance(player, target) > 1;
                                },
                                content: function () {
                                    'step 0'
                                    game.playhyrz('hyrz_shoulijian');
                                    if (!target.countCards('he', { type: 'equip' })) {
                                        target.damage();
                                        event.finish();
                                    }
                                    else {
                                        target.chooseToDiscard('he', { type: 'equip' }, '弃置一张装备牌或受到一点伤害').ai = function (card) {
                                            return 7 - get.value(card);
                                        };
                                    }
                                    'step 1'
                                    if (!result.bool) {
                                        target.damage();
                                    }
                                },
                                image: "ext:火影忍者/hyrz_shoulijian.png",
                                ai: {
                                    basic: {
                                        order: 9,
                                        value: 6,
                                        useful: 2,
                                    },
                                    result: {
                                        target: -2,
                                    },
                                    tag: {
                                        discard: 1,
                                        damage: 1,
                                    },
                                },
                                selectTarget: 1,
                            },

                            "hyrz_kuwu": {
                                audio: true,
                                fullskin: true,
                                image: "ext:火影忍者/hyrz_kuwu.png",
                                type: "equip",
                                subtype: "equip1",
                                skills: ["hyrz_kuwu"],
                                nomod: true,
                                nopower: true,
                                unique: true,
                                distance: {
                                    attackFrom: -1,
                                },
                                ai: {
                                    equipValue: 6,
                                    basic: {
                                        order: function (card, player) {
                                            if (player && player.hasSkillTag('reverseEquip')) {
                                                return 8.5 - get.equipValue(card, player) / 20;
                                            }
                                            else {
                                                return 8 + get.equipValue(card, player) / 20;
                                            }
                                        },
                                        useful: 2,
                                        equipValue: 1,
                                        value: function (card, player) {
                                            var value = 0;
                                            var info = get.info(card);
                                            var current = player.getEquip(info.subtype);
                                            if (current && card != current) {
                                                value = get.value(current, player);
                                            }
                                            var equipValue = info.ai.equipValue;
                                            if (equipValue == undefined) {
                                                equipValue = info.ai.basic.equipValue;
                                            }
                                            if (typeof equipValue == 'function') return equipValue(card, player) - value;
                                            if (typeof equipValue != 'number') equipValue = 0;
                                            return equipValue - value;
                                        },
                                    },
                                    result: {
                                        target: function (player, target) {
                                            return get.equipResult(player, target, name);
                                        },
                                    },
                                },
                                enable: true,
                                selectTarget: -1,
                                modTarget: true,
                                allowMultiple: false,
                                toself: true,
                            },
                            "hyrz_xuelunyang": {
                                audio: true,
                                fullskin: true,
                                type: "equip",
                                subtype: "equip5",
                                skills: ["hyrz_xuelunyang"],
                                ai: {
                                    basic: {
                                        equipValue: 8,
                                        order: function (card, player) {
                                            if (player && player.hasSkillTag('reverseEquip')) {
                                                return 8.5 - get.equipValue(card, player) / 20;
                                            }
                                            else {
                                                return 8 + get.equipValue(card, player) / 20;
                                            }
                                        },
                                        useful: 2,
                                        value: function (card, player) {
                                            var value = 0;
                                            var info = get.info(card);
                                            var current = player.getEquip(info.subtype);
                                            if (current && card != current) {
                                                value = get.value(current, player);
                                            }
                                            var equipValue = info.ai.equipValue;
                                            if (equipValue == undefined) {
                                                equipValue = info.ai.basic.equipValue;
                                            }
                                            if (typeof equipValue == 'function') return equipValue(card, player) - value;
                                            if (typeof equipValue != 'number') equipValue = 0;
                                            return equipValue - value;
                                        },
                                    },
                                    result: {
                                        target: function (player, target) {
                                            return get.equipResult(player, target, name);
                                        },
                                    },
                                },
                                image: "ext:火影忍者/hyrz_xuelunyang.png",
                                enable: true,
                                selectTarget: -1,
                                modTarget: true,
                                allowMultiple: false,
                                toself: true,
                            },
                            "hyrz_jiuwei": {
                                audio: true,
                                fullskin: true,
                                type: "equip",
                                subtype: "equip5",
                                skills: ["hyrz_jiuwei"],
                                ai: {
                                    basic: {
                                        equipValue: 8,
                                        order: function (card, player) {
                                            if (player && player.hasSkillTag('reverseEquip')) {
                                                return 8.5 - get.equipValue(card, player) / 20;
                                            }
                                            else {
                                                return 8 + get.equipValue(card, player) / 20;
                                            }
                                        },
                                        useful: 2,
                                        value: function (card, player) {
                                            var value = 0;
                                            var info = get.info(card);
                                            var current = player.getEquip(info.subtype);
                                            if (current && card != current) {
                                                value = get.value(current, player);
                                            }
                                            var equipValue = info.ai.equipValue;
                                            if (equipValue == undefined) {
                                                equipValue = info.ai.basic.equipValue;
                                            }
                                            if (typeof equipValue == 'function') return equipValue(card, player) - value;
                                            if (typeof equipValue != 'number') equipValue = 0;
                                            return equipValue - value;
                                        },
                                    },
                                    result: {
                                        target: function (player, target) {
                                            return get.equipResult(player, target, name);
                                        },
                                    },
                                },
                                image: "ext:火影忍者/hyrz_jiuwei.png",
                                enable: true,
                                selectTarget: -1,
                                modTarget: true,
                                allowMultiple: false,
                                toself: true,
                            },


                        },

                        skill: {

                            "hyrz_zbfs": {
                                audio: true,
                                audio: "ext:火影忍者:1",
                                image: "ext:火影忍者/hyrz_zbfs.png",
                                derivation: "huoying_huanyue",
                                cardnature: 'fire',
                                vanish: true,
                                enable: function (card, player) {
                                    return player.canAddJudge(card);
                                },
                                modTarget: function (card, player, target) {
                                    return lib.filter.judge(card, player, target);
                                },
                                filterTarget: function (card, player, target) {
                                    return (lib.filter.judge(card, player, target) && player == target);
                                },
                                selectTarget: [-1, -1],
                                judge: function (card) {
                                    if (get.suit(card) == 'diamond') return -6;
                                    return 0;
                                },
                                effect: function () {
                                    'step 0'
                                    if (result.bool == false) {
                                        if (!card.storage.hyrz_zbfs) {
                                            card.storage.hyrz_zbfs = 1;
                                        }
                                        else {
                                            card.storage.hyrz_zbfs++;
                                        }
                                        player.damage(card.storage.hyrz_zbfs, 'fire', 'nosource');
                                        player.discard(player.getCards('he').randomGets(card.storage.hyrz_zbfs));
                                    }
                                    'step 1'
                                    player.addJudgeNext(card);
                                },
                                cancel: function () {
                                    player.addJudgeNext(card);
                                },
                                ai: {
                                    basic: {
                                        order: 5,
                                        useful: 5,
                                        value: 1,
                                    },
                                    result: {
                                        target: function (player, target) {
                                            return lib.card.shandian.ai.result.target(player, target);
                                        },
                                    },
                                },
                                content: function () {
                                    game.playhyrz('hyrz_zbfs');
                                    target.addJudge(card, cards);
                                },
                                allowMultiple: false,
                            },
                            "hyrz_shoulijian": {
                                audio: true,
                                enable: true,
                                filterTarget: function (card, player, target) {
                                    return get.distance(player, target) > 1;
                                },
                                content: function () {
                                    'step 0'
                                    game.playhyrz('hyrz_shoulijian');
                                    if (!target.countCards('he', { type: 'equip' })) {
                                        target.damage();
                                        event.finish();
                                    }
                                    else {
                                        target.chooseToDiscard('he', { type: 'equip' }, '弃置一张装备牌或受到一点伤害').ai = function (card) {
                                            return 7 - get.value(card);
                                        };
                                    }
                                    'step 1'
                                    if (!result.bool) {
                                        target.damage();
                                    }
                                },
                                ai: {
                                    basic: {
                                        order: 9,
                                        value: 6,
                                        useful: 2,
                                    },
                                    result: {
                                        target: -2,
                                    },
                                    tag: {
                                        discard: 1,
                                        damage: 1,
                                    },
                                },
                                selectTarget: 1,
                            },

                            "hyrz_houzi": {
                                trigger: {
                                    global: "useCardToBegin",
                                },
                                audio: "ext:火影忍者:1",
                                filter: function (event, player) {
                                    var card = player.get('e', '5');
                                    if (card) {
                                        var name = card.name;
                                        if (event.name == 'tao' && get.itemtype(event.cards) == 'cards' && get.position(event.cards[0]) == 'd' && event.player != player && name && name.indexOf('hyrz_houzi') != -1) return true;
                                    }
                                    return false;
                                },
                                check: function (event, player) {
                                    return get.attitude(player, event.player) <= 0;
                                },
                                content: function () {
                                    'step 0'
                                    player.$fullscreenpop('猴子偷桃', 'fire');
                                    trigger.cancel();
                                    'step 1'
                                    // player.discard(player.getCards('e',{subtype:'equip:5'}));
                                    player.discard(player.get('e', '5'));
                                    'step 2'
                                    player.gain(trigger.cards);
                                    player.$gain2(trigger.cards);
                                },
                            },

                            "hyrz_mianju": {
                                audio: "ext:火影忍者:1",
                                trigger: {
                                    player: "turnOverBefore",
                                },
                                forced: true,
                                filter: function (event, player) {
                                    return !player.isTurnedOver();
                                },
                                content: function () {
                                    trigger.cancel();
                                },
                                ai: {
                                    noturnOver: true,
                                    effect: {
                                        target: function (card, player, target, current) {
                                            if (get.tag(card, 'turnOver')) return [0, 0];
                                        },
                                    },
                                },
                            },

                            "hyrz_kuwu": {
                                audio: "ext:火影忍者:1",
                                trigger: {
                                    source: "damageEnd",
                                },
                                forced: true,
                                priority: 55,
                                filter: function (event, player) {
                                    if (event._notrigger.contains(event.player)) return false;
                                    return event.card && event.card.isCard && event.card.name == 'sha' && event.notLink() && event.player.countCards('he') > 0;
                                },
                                content: function () {
                                    trigger.player.chooseToDiscard(true, 'he');
                                },
                            },

                            "hyrz_xuelunyang": {
                                audio: "ext:火影忍者:1",
                                trigger: {
                                    player: "phaseBegin",
                                },
                                priority: 2018,
                                direct: true,
                                createDialog: function (player, target, onlylist) {
                                    var names = [];
                                    var list = [];
                                    if (target.name && !target.isUnseen(0)) names.add(target.name);
                                    if (target.name1 && !target.isUnseen(0)) names.add(target.name1);
                                    if (target.name2 && !target.isUnseen(1)) names.add(target.name2);
                                    var pss = player.getSkills();
                                    for (var i = 0; i < names.length; i++) {
                                        var info = lib.character[names[i]];
                                        if (info) {
                                            var skills = info[3];
                                            for (var j = 0; j < skills.length; j++) {
                                                if (lib.translate[skills[j] + '_info'] && lib.skill[skills[j]] &&
                                                    !lib.skill[skills[j]].unique &&
                                                    !pss.contains(skills[j])) {
                                                    list.push(skills[j]);
                                                }
                                            }
                                        }
                                    }
                                    if (onlylist) return list;
                                    var dialog = ui.create.dialog('forcebutton');
                                    dialog.add('选择获得一项技能');
                                    _status.event.list = list;
                                    var clickItem = function () {
                                        _status.event._result = this.link;
                                        game.resume();
                                    };
                                    for (var i = 0; i < list.length; i++) {
                                        if (lib.translate[list[i] + '_info']) {
                                            var translation = get.translation(list[i]);
                                            if (translation[0] == '新' && translation.length == 3) {
                                                translation = translation.slice(1, 3);
                                            }
                                            else {
                                                translation = translation.slice(0, 2);
                                            }
                                            var item = dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' +
                                                translation + '】</div><div>' + lib.translate[list[i] + '_info'] + '</div></div>');
                                            item.firstChild.addEventListener('click', clickItem);
                                            item.firstChild.link = list[i];
                                        }
                                    }
                                    dialog.add(ui.create.div('.placeholder'));
                                    return dialog;
                                },
                                content: function () {
                                    'step 0'
                                    player.chooseTarget(get.prompt2('hyrz_xuelunyang'), function (card, player, target) {
                                        var names = [];
                                        if (target.name && !target.isUnseen(0)) names.add(target.name);
                                        if (target.name1 && !target.isUnseen(0)) names.add(target.name1);
                                        if (target.name2 && !target.isUnseen(1)) names.add(target.name2);
                                        var pss = player.getSkills();
                                        for (var i = 0; i < names.length; i++) {
                                            var info = lib.character[names[i]];
                                            if (info) {
                                                var skills = info[3];
                                                for (var j = 0; j < skills.length; j++) {
                                                    if (lib.translate[skills[j] + '_info'] && lib.skill[skills[j]] &&
                                                        !lib.skill[skills[j]].unique && !pss.contains(skills[j])) {
                                                        return true;
                                                    }
                                                }
                                            }
                                            return false;
                                        }
                                    }).set('ai', function (target) {
                                        if (get.attitude(_status.event.player, target) > 0) return Math.random();
                                        return get.attitude(_status.event.player, target) <= 0;
                                    });
                                    'step 1'
                                    if (result.bool) {
                                        event.target = result.targets[0];
                                        player.logSkill('hyrz_xuelunyang', event.target);
                                    }
                                    else {
                                        event.finish();
                                    }
                                    'step 2'
                                    event.skillai = function (list) {
                                        return get.max(list, get.skillRank, 'item');
                                    };
                                    if (event.isMine()) {
                                        event.dialog = lib.skill.hyrz_xuelunyang.createDialog(player, target);//tianshu
                                        event.switchToAuto = function () {
                                            event._result = event.skillai(event.list);
                                            game.resume();
                                        };
                                        _status.imchoosing = true;
                                        game.pause();
                                    }
                                    else {
                                        event._result = event.skillai(lib.skill.hyrz_xuelunyang.createDialog(player, target, true));
                                    }
                                    'step 3'
                                    _status.imchoosing = false;
                                    if (event.dialog) {
                                        event.dialog.close();
                                    }
                                    player.addTempSkill(result);
                                    player.popup(result);
                                    game.log(player, '获得了', '【' + get.translation(result) + '】');
                                },
                            },

                            "hyrz_jiuwei": {
                                trigger: {
                                    player: "phaseEnd",
                                },
                                audio: "ext:火影忍者:1",
                                filter: function (event, player) {
                                    return player.isAlive();
                                },
                                frequent: true,
                                content: function () {
                                    if (player.isDamaged()) {
                                        player.recover();
                                    }
                                    else {
                                        player.draw();
                                    }
                                },
                            },



                        },

                        translate: {
                            "hyrz_houzi": "猴子",
                            "hyrz_houzi_info": "猴子偷桃：当场上有其他角色使用【桃】时，你可以弃掉【猴子】，阻止【桃】的结算并将其收为手牌",
                            "hyrz_zbfs": "蒸危暴威",
                            "hyrz_zbfs_info": "延时性锦囊牌，若判定结果为方片，则目标角色受到X点无来源的火焰伤害并随机弃置X张牌（X为此锦囊判定结果为方片的次数）。判定完成后，将此牌移动到下家的判定区里",
                            "hyrz_mianju": "漩涡面具",
                            "hyrz_mianju_info": "<font color=#f00>锁定技</font> 若你的武将牌正面朝上，你的武将牌不能被翻面",
                            "hyrz_shoulijian": "手里剑",
                            "hyrz_shoulijian_info": "出牌阶段，对一名距离1以外的角色使用，令其弃置一张装备牌或受到一点伤害",
                            "hyrz_kuwu": "苦无",
                            "hyrz_kuwu_info": "<font color=#f00>锁定技</font> 每当你使用【杀】造成伤害，受伤角色须弃置一张牌",
                            "hyrz_xuelunyang": "写轮眼",
                            "hyrz_xuelunyang_info": "回合开始阶段，你可以选择一名角色，然后获得其一项技能，直到回合结束",
                            "hyrz_jiuwei": "九尾",
                            "hyrz_jiuwei_info": "（收集查克拉）回合结束时，若你已受伤，你可回复一点体力，否则摸一张牌",

                        },
                        list: [
                            ["diamond", "5", "hyrz_houzi"],
                            ["heart", "9", "hyrz_jiuwei"],
                            ["heart", "2", "hyrz_xuelunyang"],
                            ["spade", "6", "hyrz_kuwu"],
                            ["diamond", "4", "hyrz_shoulijian"],
                            ["spade", "4", "hyrz_shoulijian"],
                            ["club", "3", "hyrz_mianju"],
                        ]
                    };
                    return hyrz_equip;
                });
                lib.translate['hyrz_equip_card_config'] = '火影忍者';
                lib.config.all.cards.push('hyrz_equip');
                if (!lib.config.cards.contains('hyrz_equip')) lib.config.cards.remove('hyrz_equip');

            };
        }, help: {
            "火影忍者": "<li>【编码】小苏<li>【配图】小苏<li>【录制配音】小苏<li>怀旧版本的角色：千手柱间、波风水门、卡卡西、漩涡鸣人、药师兜、白、斑、绝、无、加藤断、李洛克、干杮鬼鲛、大蛇丸、赤沙之蝎、漩涡长门、奈良鹿丸 <li>黑炎：锁定技，你的回合开始时进行判定，若为黑桃，则受到一点火属性伤害"
        }, config: {
            "hyrz_help": {
                "nopointer": true,
                "name": "火影忍者",
                "init": "1",
                "item": {
                    "1": "查看介绍",
                    "2": "<li>嗨～" + lib.config.connect_nickname + "！欢迎您前来体验《火影忍者》扩展哦！",
                    "3": "<li>本扩展是2025年7月28日从《群英会》扩展中分离出来的，始创于2017年，2019年初停更，2025年7月底复更",
                    "4": "<li>若武将界面没显示图片或点将找不到本扩展的角色，请先开启武将菜单界面的右上角的总开关，然后重启游戏，即可显示武将插画",
                    "5": "<li>若发现BUG可到无名杀官方扩展群：852740627 @小苏 进行反馈，有技能设计的建议也可联系作者",
                },
            },
            "qiehuanbeijing": {
                name: '切换背景',
                "intro": "随意切换精美高清的背景图片",
                init: '1',
                item: {
                    '1': '默认背景',
                    '2': '四代火影',
                },
                onclick: function (item) {
                    switch (item) {
                        case '1':
                            game.broadcastAll() + ui.background.setBackgroundImage('image/background/' + lib.config.image_background + '.jpg');
                            break;
                        case '2':
                            game.broadcastAll() + ui.background.setBackgroundImage("extension/火影忍者/hyrz_sidaihuoying.jpg");
                            break;
                    }
                }
            },

            decadeUI_imageLoad: {
                name: '点击载入十周年UI素材',
                clear: true,
                onclick() {
                    const decadeUIs = (lib.config.extensions && lib.config.extensions.includes('十周年UI') && lib.config['extension_十周年UI_enable']);
                    const files = (game.getFileList && game.readFile && game.writeFile);
                    if (decadeUIs && files) {
                        //十周年样式
                        game.getFileList('extension/十周年UI/image/decoration', (folders, files) => {
                            if (!files.includes('name_hyrz_huo.png')) {
                                game.readFile('extension/火影忍者/name_hyrz_huo.png', (data) => {
                                    game.writeFile(data, 'extension/十周年UI/image/decoration', 'name_hyrz_huo.png', () => { });
                                });
                            }
                            if (!files.includes('name_hyrz_ren.png')) {
                                game.readFile('extension/火影忍者/name_hyrz_ren.png', (data) => {
                                    game.writeFile(data, 'extension/十周年UI/image/decoration', 'name_hyrz_ren.png', () => { });
                                });
                            }
                            if (!files.includes('name_hyrz_xiao.png')) {
                                game.readFile('extension/火影忍者/name_hyrz_xiao.png', (data) => {
                                    game.writeFile(data, 'extension/十周年UI/image/decoration', 'name_hyrz_xiao.png', () => { });
                                });
                            }
                            alert('十周年UI/image/decoration素材已成功导入');
                        }, () => { });
                    }
                    else if (!decadeUIs) alert('当前尚未开启《十周年UI》');
                    else alert('读取功能出现问题，无法载入文件');
                },
            },
            "hyrz_huaijiubanben": {
                "name": "怀旧版本",
                "intro": "开启后重启游戏生效。本扩展的部分角色的技能会回调旧版，建议根据游戏强度环境而选择是否开启。具体改动的角色可详看：其它→帮助",
                init: false,
            },
            "hyrz_changeGroup": {
                "name": '替换势力',
                "intro": "开启后重启游戏生效，将本扩展中的“火”、“晓”、“忍”势力随机替换为官方“魏、蜀、吴、群、晋”中的一种势力",
                init: false,
            },
            "wuxianyuedu": {
                name: '无限月读',
                "intro": "无限月读：灵感来源借鉴自《作者包》的“何子诈尸”，开启后重启游戏生效。每当一名角色阵亡后，若场上没有“辉夜”，则该阵亡角色将武将牌替换为“辉夜”并复活（3上限3体力），摸3张牌，且于当前角色的回合结束后立即开始回合",
                init: false
            },
            "hyrz_llwj": {            
                //"name": "浏览武将<div>&gt;</div>",
                name: '<div class="hyrz_menu">浏览武将<font size="3px">⇨</font></div>',
                "clear": true,
                "onclick": function () {                    
                    game.playhyrz('hyrz_danchuang');
                    game.hyrzCharacter();
                },
            },
            "hyrz_character_gallery": {            
                name: '<div class="hyrz_menu">角色图鉴<font size="3px">⇨</font></div>',
                clear: true,
                onclick: function() {
                    game.playhyrz('hyrz_danchuang');
                    game.showHYRZCharacterGallery();
                },
            },           
            "openhyrz_tujian": {
                //"name": "乱斗图鉴<div>&gt;</div>",
                name: '<div class="hyrz_menu">乱斗图鉴<font size="3px">⇨</font></div>',
                "clear": true,
                onclick: function () {
                    game.playhyrz('hyrz_danchuang');
                    lib.config.characters.push('huoyingrenzhe');
                    game.saveConfig('mode', 'brawl');
                    localStorage.setItem(lib.configprefix + 'directstart', true);
                    game.reload();
                },
            },

        }, package: {
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
                list: [
                ],
            },
            skill: {
                skill: {
                },
                translate: {
                },
            },
            intro: "注：乱斗模式中有“火影剧情”闯关模式",
            author: "小苏<li><div onclick=window.open('https://jq.qq.com/?_wv=1027&k=5qvkVxl')><span style=\"color: green;text-decoration: underline;font-style: oblique\">点击此处</span></div><span style=\"font-style: oblique\">申请加入QQ群（852740627）参与讨论。</span>",
            diskURL: "",
            forumURL: "",
            version: "2.6",
        }, files: { "character": [], "card": [], "skill": [] }
    }
})
