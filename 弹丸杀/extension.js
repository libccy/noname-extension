game.import("extension", {
    name: "弹丸杀",
    content: function(config) {
        if (config.view_as_boss) {
            lib.arenaReady.push(function() {
                var myp = lib.characterPack['dangan'];
                for (i in myp) {
                    if (myp[i][4].indexOf('boss') < 0) {
                        myp[i][4].push('boss');
                        if (get.mode() == 'boss') myp[i][2] *= 2;
                    }
                    if (myp[i][4].indexOf('bossallowed') < 0) myp[i][4].push('bossallowed');
                }
            });
        } else if (config.normalize) {
            lib.arenaReady.push(function() {
                var myp = lib.characterPack['dangan'];
                for (i in myp) {
                    var pan = myp[i][4];
                    if (pan.indexOf('boss') >= 0) {
                        pan[pan.indexOf('boss')] = '';
                        pan[pan.indexOf('bossallowed')] = '';
                    }
                }
            });
        }
    },
    precontent: function(cfg) {
        game.isAnyOneMoreThan = function(pl){
            for(var i=0;i<game.players.length;i++){
                var mem=game.players[i];
                if(mem==pl) continue;
                if(mem.hp>1) return true;
                if(mem.get("he").length>0) return true;
            }
            return false;
        };
        game.kamukuraEffect = function(pl) {
            pl.popup('完美');
            pl.draw(1)._triggered = null;
            var rid = Math.floor(Math.random() * game.players.length);
            while (game.players[rid] == pl || game.players[rid].isFriendOf(pl)) {
                rid = Math.floor(Math.random() * game.players.length);
            }
            if(game.players[rid].hp==0){
                game.players[rid].die()._triggered = null;
            }else{
                var dmg = Math.ceil(game.players[rid].hp/2);
                game.players[rid].damage(dmg)._triggered = null;
            }
        };
        game.letPlayerWin = function(pl) {
            if (pl.identity == 'zhong') {
                for (var i = 0; i < game.players.length; i++) {
                    var mem = game.players[i];
                    if (mem != pl && mem.identity != 'zhu') {
                        mem.die()._triggered = null;
                        mem.$die();
                    }
                }
            } else if (pl.identity == 'nei') {
                var zmem = null;
                for (var i = 0; i < game.players.length; i++) {
                    var mem = game.players[i];
                    if (mem != pl) {
                        if (mem.identity == 'zhu'){
                            zmem = mem;
                        }else{
                            mem.die()._triggered = null;
                            mem.$die();
                        }
                    }
                }
                zmem.die()._triggered = null;
            } else {
                for (var i = 0; i < game.players.length; i++) {
                    var mem = game.players[i];
                    if (mem != pl) {
                        mem.die()._triggered = null;
                        mem.$die();
                    }
                }
            }
        };
        game.cmpName = function(pl, name) {
            if (pl.name1 == name) return true;
            if (pl.name2 == name) return true;
            if (pl.name == name) return true;
            return false;
        };
        game.playSe = function(fn, dir, sex) {
            if (lib.config.background_speak) {
                if (dir && sex)
                    game.playAudio(dir, sex, fn);
                else if (dir)
                    game.playAudio(dir, fn);
                else
                    game.playAudio('..', 'extension', '弹丸杀', fn);

            }
        };
        game.chooseDeadTarget = function(check){
            var event=_status.event;
            if(event.filterTarget==undefined) return (check()>0);
            var i,j,range,targets,targets2,effect;
            var ok=false,forced=event.forced;
            var iwhile=100;
            while(iwhile--){
                range=get.select(event.selectTarget);
                if(range[1]==-1){
                    j=0;
                    for(i=0;i<ui.selected.targets.length;i++){
                        effect=check(ui.selected.targets[i]);
                        if(effect<0) j-=Math.sqrt(-effect);
                        else j+=Math.sqrt(effect);
                    }
                    return (j>0);
                }
                else if(range[1]==0){
                    return check()>0
                }
                targets=get.allDeadBody();
                if(targets.length==0){
                    return ok;
                }
                targets2=targets.slice(0);
                var ix=0;
                var checkix=check(targets[0],targets2);
                for(i=1;i<targets.length;i++){
                    var checkixtmp=check(targets[i],targets2);
                    if(checkixtmp>checkix){
                        ix=i;
                        checkix=checkixtmp;
                    }
                }
                if(check(targets[ix])<=0){
                    if(!forced||ok){
                        return ok;
                    }
                }
                targets[ix].classList.add('selected');
                ui.selected.targets.add(targets[ix]);
                game.check();
                if(ui.selected.targets.length>=range[0]){
                    ok=true;
                }
                if(ui.selected.targets.length==range[1]){
                    return true;
                }
            }
        };
        get.allDeadBody = function(sort){
            var selectable=[];
            for(var i=0;i<game.dead.length;i++){
                if(game.dead[i].classList.contains('selectable')&&
                    game.dead[i].classList.contains('selected')==false){
                    selectable.push(game.dead[i]);
                }
            }
            selectable.randomSort();
            if(sort){
                selectable.sort(sort);
            }
            return selectable;
        };
        game.fux2 = {};
        game.fux2.dangan = {};
        if(cfg.enable){
            game.import('character',function(){
                var danganPack = {
                    name: 'dangan',
                    connect:true,
                    character:{
                        dan_rixianga:["male","dan",3,["rixiang3","rixiang2"],[]],
                        dan_rixiangb:["male","dan",3,["rixiang1","rixiang2","rixiang4"],["hiddenboss","forbidai","bossallowed"]],
                        dan_monokuma:["none","dan",Infinity,["monokuma1","monokuma2","monokuma5"],[]],
                        dan_biangu:["female","dan",3,["biangu1","biangu2"],[]],
                        dan_zhaorinai:["female","dan",7,["zhaorinai1","zhaorinai3"],[]],
                        dan_wuqie:["female","dan",3,["wuqie1","wuqie2"],[]],
                        dan_zuimu:["female","dan",4,["zuimu2","zuimu1"],[]],
                        dan_sonia:["female","dan",4,["sonia1","sonia2"],["zhu"]],
                        dan_dunzi:["female","dan",4,["dunzi1"],["zhu","boss","bossallowed"]],
                        dan_qihai:["female","dan",3,["qihai1","qihai2","qihai3"],[]],
                        dan_bozhi:["male","dan",4,["bozhi1","bozhi2"],[]],
                        dan_kamukura:["male","dan",2,["shenzuo1","shenzuo2","shenzuo3","shenzuo4","rixiang4","sonia1","wuqie1","wuqie2","jiutoulong1","biangu1","monokuma1","tumei1"],["boss","forbidai","bossallowed"]],
                        dan_jiutoulong:["male","dan",3,["jiutoulong1","jiutoulong2"],[]],
                        dan_lingtian:["female","dan",3,["lingtian1","lingtian2"],[]],
                        dan_tumei:["female","dan",3,["tumei1","tumei2","tumei3"],[]],
                        dan_erdaa:["male","dan",5,["erda1","erda2"],[]],
                        dan_erdab:["male","dan",1,["erda3"],["hiddenboss","forbidai","bossallowed"]],
                        dan_huacun:["male","dan",3,["huacun1","huacun2","huacun4"],[]],
                        dan_nuller:["male","dan",4,["nuller1","nuller2","nuller4"],[]],
                        dan_tianzhong:["male","dan",3,["tianzhong1","tianzhong2","tianzhong3"],[]],
                        dan_xiaoquan:["female","dan",3,["xiaoquan1","xiaoquan3"],[]],
                        dan_xiyuansi:["female","dan",2,["xiyuansi1","xiyuansi2"],[]],
                        dan_zhongyin:["female","dan",4,["zhongyin1","zhongyin2"],[]],
                        dan_zuoyou:["male","dan",3,["zuoyou1","zuoyou3","zuoyou4"],[]],
                    },
                    characterIntro:{
                        dan_rixianga:'日向创，《超级弹丸论破2：再见绝望学园》中的男主角。来到贾巴沃克岛后记不起自己被希望之峰学园所录取的理由（自己的才能）所困扰。比任何人都憧憬着希望之峰学园。比任何人都憧憬着才能。在贾巴沃克岛的绝望气氛中一直努力的为了生存而活跃。',
                        dan_rixiangb:'在贾巴沃克岛事件中意志觉醒的日向创，唤回了本已消失的人格。',
                        dan_monokuma:'希望之峰学园园长，身体一半白色一半黑色的玩偶机器人。性格恶劣和恶趣味，以及怂恿学生互相残杀使学生陷入绝望。',
                        dan_biangu:'超高校级的剑道家，性格冷静且果断，认为剑是为了守护别人而存在的拥有坚定决意的女性。',
                        dan_zhaorinai:'超高校级的游泳选手。非常喜欢运动，之前在学校同时参加六个运动部，最主要的是游泳部。在游泳方面更是多次刷新了高中记录。已经被选为奥林匹克候补。元气十足，意外地非常喜欢吃东西，最喜爱的是甜甜圈。在希望之峰学园内，与超高校级的格斗家大神樱是很好的朋友。名言：“记别人的名字时，在手掌上写3次就可以记住了！”',
                        dan_wuqie:'超高校级的侦探，非常无口的属性，并拥有相当神秘感和第六感的美少女。虽然面无表情，看似冷漠，但破案能力超强的雾切对于解决事件的提示使苗木诚在调查和学级裁判期间获得许多重大突破。',
                        dan_zuimu:'超高校级的保健委员，超弱气的保健委员，把舍己为人的无私精神当做人生的信条，但却总会因为自己的怪异举动和不自信，导致交不到朋友。在收到日向创无偿赠送给自己的礼物时受宠若惊，因为一直被别人虐待所以身上的不同地方均包扎有绷带，发型也是因为被人欺负乱剪的。虽然内心很痛苦，但对于罪木蜜柑来说比被欺凌更痛苦的是被无视。时不时的摔倒给旁人赠送视觉福利。',
                        dan_sonia:'超高校级的王女，一名货真价实的公主，拥有良好的教养，口头禅是“赐予你赞美！”。虽然一直被左右田和一喜欢着，但貌似并不感冒，内心更渴望像田中眼蛇梦一样的中二。',
                        dan_dunzi:'超高校级的绝望，言行举止给人的感觉就是典型的现代女高中生。性格喜怒哀乐反复无常，表里不一，是年轻人中具有权威性的女性时尚杂志的模特、又是具有领导读者力量的模特，所以是女高中生们的时装领导者。领导着全国各地的少女们的时尚潮流。',
                        dan_qihai:'超高校级的游戏玩家，除了恋爱游戏外游戏全能的无口女生。虽然平时有些天然但是在关键时刻非常可靠，将77期的大家团结在了一起，是77期生（二代）的心灵支柱。在绝望篇第10集中被江之岛盾子处刑，造成了77期学生集体绝望（辅助了洗脑技术）。在《弹丸论破3 -The End of 希望之峰学园》的结局中以幻影出现，活在大家心中。',
                        dan_bozhi:'超高校级的幸运，狛枝的“幸运”是对自己而言，一切都往好的方向走，有可能会导致周围人的无限厄运。一般来说，就是“不幸越大，幸运越大”。虽然拥有“绝对幸运”的体质，但是在绝对的幸运之下也会同时遭到“巨大的不幸”，因此对狛枝来说，这种幸运也可能是一种废渣、一种绝望而已，并不会为自己带来幸福。狛枝认为：遭受到越大的不幸，接下来就会有越大的幸运发生。',
                        dan_kamukura:'超高校级的希望，日向创作为预备学科进入学院，被改造之后被赋予的名字。学园制造的人工天才，希望的存在。拥有各种才能，作为代价，日向创的人格遭到消除。完全不知道他在想什么，不过由于能看见一切而对任何事情都感到无聊，在绝望篇中在七海千秋处刑后流下了泪水这一点表明原有人格或情感没有完全消除，并以此为锲机想看到希望还是绝望更未知，这导致了他成为弹丸论破2一系列事情发生的始作俑者。',
                        dan_jiutoulong:'超高校级的黑道，3万人员以上的国内暴力团的候补领袖，不好群居，“童颜”对其是禁句。虽然很想长高但非常厌恶喝牛奶，爱好甜食但如果被发现的话会很生气（怕被人嘲笑）。和日向创称兄道弟，并一起喝结拜酒（因为都是未成年所以以水代替）。',
                        dan_lingtian:'超高校级的轻音部。从超人气的女子团体组合中退出单飞中。拥有天真散漫的性格，很容易与人相处。行为比较脱线，颜艺。唱出来的歌非一般人能接受，代表歌曲有《千辛万苦把孩子生了下来却不知道父亲是谁》等。',
                        dan_tumei:'《超级弹丸论破2 再见绝望学园》中的角色，曾经是二代学员们带队的老师，兔子型的布制玩偶。会更正一些疑心生暗鬼的学生的状态。虽然很爱哭，但很善良。也正因这种性格，经常被黑白熊欺负，也被学生们猜疑，但还是很关心同学们。原是一名纯白兔子玩偶，后被黑白熊改造成半粉半白。',
                        dan_erdaa:'超高校级的经理人。不光是声音，体型也是格外巨大。有着引领不良高中的橄榄球部和快要废部的棒球部取得全国优胜的经历，拯救危机一发的体育活动社的能手。就是肠胃貌似不怎么好。',
                        dan_erdab:'二大死亡后被黑白熊制造替代的形象。',
                        dan_huacun:'超高校级的料理人。对性和食材的求知欲非常大。他那深无止尽的求知心，终于延伸到了男性方面？！守备范围很广，经常会说出一些让人面红耳赤的糟糕台词，曾对日向创问过“对BL有兴趣吗？”',
                        dan_nuller:'超高校级的欺诈师，甚至一直以别人的身份存在着，正体是一个谜。',
                        dan_tianzhong:'超高校级的饲养委员，有着能让任何动物立刻亲近他，甚至与动物对话的才能，严重中二病患者，第一人称是“俺样”，自称是“冰之魔王”，平时携带四只仓鼠——破坏神暗黑四天王。家里养了很多稀奇古怪的动物，对它们很有感情，是个珍惜生命的人。',
                        dan_xiaoquan:'超高校级的摄影师、超高校级的绝望。十分擅长摄影的女孩，尤其是在拍摄人物的方面。对于不靠谱的男性有经常说教的习惯。和西园寺日寄子是好朋友，很会照顾人，性格温柔，类似于妈妈那般的角色。号召力很强，能把全部女孩子集中在一起举行「女子会」。',
                        dan_xiyuansi:'超高校级的日本舞蹈家。扎着金色大卷双马尾的她爱吃GUMI糖，完全不像高中生的孩子般的外貌下是毒舌的性格，真实的身材有接近160+左右。',
                        dan_zhongyin:'超高校级的体操选手，爱吃东西，做什么事情不经大脑思考，兴头上的她有着极强的表演能力。家境似乎很贫寒。',
                        dan_zuoyou:'超高校级的机械师，是希望之峰学院第77期学生。平时最大的爱好就是修理机械，一直将同班同学“超高校级的公主”索尼娅·内瓦曼当做自己的女神。可以说只要是索尼娅·内瓦曼做出的决定他都会附和。',
                    },
                    perfectPair:{
                        dan_rixianga:['dan_qihai','dan_bozhi'],
                        dan_rixiangb:['dan_qihai','dan_bozhi'],
                        dan_dunzi:['dan_monokuma'],
                        dan_jiutoulong:['dan_biangu'],
                    },
                    skill:{
                        shenzuo2: {
                            trigger: {
                                player: "shaBefore",
                            },
                            forced: true,
                            priority: 5000,
                            content: function() {
                                if (!game.cmpName(player, 'dan_kamukura')) {
                                    player.clearSkills();
                                    return false;
                                }
                                var es=trigger.target.get('e');
                                trigger.target.discard(es);
                            },
                            tag:{
                                usedu:1,
                            },
                            mod: {
                                targetEnabled: function(card, player, target) {
                                    if (card.name == 'sha') return false;
                                },
                                targetInRange: function(card, player, target, now) {
                                    return true;
                                },
                                maxHandcard: function(player) {
                                    return Infinity;
                                },
                                selectTarget: function(card, player, range) {
                                    var type = get.type(card);
                                    if (type != 'delay' && range[1] == 1) range[1] = range[1] + 1;
                                },
                            },
                        },
                        shenzuo1: {
                            group: ["shenzuo1_getsk", "shenzuo1_otk"],
                            forced: true,
                            direct: true,
                            priority: 2000,
                            subSkill: {
                                otk: {
                                    trigger: {
                                        global: "damageBegin",
                                    },
                                    priority: 1000,
                                    filter: function(event, player) {
                                        if (!game.cmpName(player, 'dan_kamukura')) {
                                            player.clearSkills();
                                            return false;
                                        }
                                        if (event.source != player || event.player == player) return false;
                                        if (event.player.hp===0) event.player.die()._triggered = null;
                                        var checkValue = event.player.maxHp + event.player.hp;
                                        if (isFinite(checkValue) && !isNaN(checkValue)) {
                                            event.num = Math.ceil(Math.max(event.num, event.player.hp / 2));
                                            return false;
                                        }
                                        return true;
                                    },
                                    content: function() {
                                        "step 0"
                                        trigger.num = 0;
                                        trigger.player.maxHp = 1;
                                        trigger.player.hp = 1;
                                        player.popup('巅峰');
                                    },
                                },
                                getsk: {
                                    trigger: {
                                        global: ["gameStart","gameDrawBefore","phaseBefore"],
                                    },
                                    forced: true,
                                    unique: true,
                                    init: function(player){
                                        if (!game.cmpName(player, 'dan_kamukura')) {
                                            player.clearSkills();
                                            return false;
                                        }
                                        player.storage.invincibleFlag = true;
                                        var tp;
                                        var notonly = false;
                                        if(player.name2){
                                            notonly = true;
                                        }else{
                                            for (var i = 0; i < game.players.length; i++) {
                                                tp = game.players[i];
                                                if (tp == player) continue;
                                                if (tp.isKamukura) {
                                                    notonly = true;
                                                    break;
                                                }
                                            }
                                        }
                                        if (notonly) {
                                            player.reinit('dan_kamukura','dan_rixianga');
                                            player.hp = player.maxHp;
                                        }else{
                                            var a=["\x69\x73\x4b\x61\x6d\x75\x6b\x75\x72\x61","\x6f\x72\x69\x5f\x69\x6e\x69\x74","\x69\x6e\x69\x74","\x6e\x61\x6d\x65\x31","\x6e\x61\x6d\x65","\x64\x61\x6e\x5f\x6b\x61\x6d\x75\x6b\x75\x72\x61","\x6e\x61\x6d\x65\x32","\x6f\x72\x69\x5f\x72\x69\x6e\x69\x74","\x72\x65\x69\x6e\x69\x74","\x6b\x61\x6d\x75\x6b\x75\x72\x61\x45\x66\x66\x65\x63\x74","\x5f\x72\x68\x70","\x68\x70","\x5f\x72\x6d\x68\x70","\x6d\x61\x78\x48\x70","\x72\x73\x6b\x69\x6c\x6c\x73","\x73\x6c\x69\x63\x65","\x73\x6b\x69\x6c\x6c\x73","\x5f\x73\x6b\x69\x6c\x6c\x73","\x72\x72\x65\x63\x6f\x76\x65\x72","\x72\x65\x63\x6f\x76\x65\x72","\x72\x64\x61\x6d\x61\x67\x65","\x64\x61\x6d\x61\x67\x65","\x72\x64\x72\x61\x77","\x64\x72\x61\x77","\x72\x64\x73\x6b","\x64\x69\x73\x61\x62\x6c\x65\x53\x6b\x69\x6c\x6c","\x72\x72\x73\x6b","\x72\x65\x6d\x6f\x76\x65\x53\x6b\x69\x6c\x6c","\x72\x72\x64\x69\x65","\x24\x64\x69\x65","\x72\x64\x69\x65","\x64\x69\x65","\x72\x63\x68\x70","\x63\x68\x61\x6e\x67\x65\x48\x70","\x72\x72\x73\x74","\x72\x65\x6d\x6f\x76\x65\x53\x6b\x69\x6c\x6c\x54\x72\x69\x67\x67\x65\x72","\x63\x6f\x6e\x74\x61\x69\x6e\x73","\x63\x68\x61\x72\x61\x63\x74\x65\x72","\x6c\x65\x74\x50\x6c\x61\x79\x65\x72\x57\x69\x6e","\x5f\x74\x72\x69\x67\x67\x65\x72\x65\x64","\x72\x61\x64\x53\x6b\x69\x6c\x6c","\x61\x64\x64\x53\x6b\x69\x6c\x6c","\x64\x61\x6e\x67\x61\x6e","\x63\x68\x61\x72\x61\x63\x74\x65\x72\x50\x61\x63\x6b","\x61\x64\x64\x54\x65\x6d\x70\x53\x6b\x69\x6c\x6c","\x63\x6c\x65\x61\x72\x53\x6b\x69\x6c\x6c\x73","\x6c\x6f\x73\x65\x4d\x61\x78\x48\x70","\x74\x75\x72\x6e\x4f\x76\x65\x72","\x6c\x69\x6e\x6b","\x67\x6f\x4d\x61\x64","\x69\x73\x41\x6e\x79\x4f\x6e\x65\x4d\x6f\x72\x65\x54\x68\x61\x6e","\x6b\x61\x6d\x75\x6b\x75\x72\x61","\x66\x75\x78\x32","\x69\x6e\x76\x69\x6e\x63\x69\x62\x6c\x65\x46\x6c\x61\x67","\x73\x74\x6f\x72\x61\x67\x65","\x69\x6e\x64\x65\x78\x4f\x66","\x6c\x6f\x73\x65\x48\x70","\x5f\x63\x6c\x69\x73\x74","\x63\x6c\x61\x73\x73\x4c\x69\x73\x74","\x5f\x72\x70\x72\x65\x76\x69\x6f\x75\x73","\x70\x72\x65\x76\x69\x6f\x75\x73","\x5f\x72\x6e\x65\x78\x74","\x6e\x65\x78\x74","\x69\x73\x49\x6e","\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72","\x64\x65\x66\x69\x6e\x65\x50\x72\x6f\x70\x65\x72\x74\x69\x65\x73","\x72\x64\x65\x61\x64","\x64\x65\x61\x64","\x72\x70\x6c\x61\x79\x65\x72\x73","\x70\x6c\x61\x79\x65\x72\x73","\x6c\x6f\x63\x6b\x65\x72","\x61\x62\x6c\x69\x73\x74","\x73\x65\x6c\x65\x63\x74\x61\x62\x6c\x65","\x73\x65\x6c\x65\x63\x74\x65\x64","\x74\x61\x72\x67\x65\x74","\x72\x65\x6d\x6f\x76\x65","\x70\x72\x6f\x74\x6f\x74\x79\x70\x65","\x70\x75\x73\x68","\x64\x61\x64\x64","\x61\x64\x64","\x64\x72\x65\x6d\x6f\x76\x65","\x63\x61\x6c\x6c","\x66\x72\x65\x65\x7a\x65","\x63\x6d\x53\x6b\x69\x6c\x6c","\x61\x64\x64\x47\x6c\x6f\x62\x61\x6c\x53\x6b\x69\x6c\x6c"];player[a[0]]=!0,player[a[1]]=player[a[2]],player[a[2]]=function(b,c,d){(player[a[3]]||player[a[4]])==a[5]&&b!=a[5]&&(b=a[5]),player[a[6]]&&player[a[6]]==a[5]&&c!=a[5]&&(c=a[5]),player[a[4]]==b&&player2[a[4]]==c||player[a[1]](b,c,d)},player[a[7]]=player[a[8]],player[a[8]]=function(b,c,d,e){b==a[5]?game[a[9]](player):player[a[7]](b,c,d,e)},player[a[10]]=player[a[11]],player[a[12]]=player[a[13]],player[a[14]]=player[a[16]][a[15]](0),player[a[17]]=player[a[16]],player[a[18]]=player[a[19]],player[a[20]]=player[a[21]],player[a[22]]=player[a[23]],player[a[24]]=player[a[25]],player[a[26]]=player[a[27]],player[a[28]]=player[a[29]],player[a[30]]=player[a[31]],player[a[32]]=player[a[33]],player[a[29]]=function(){},player[a[34]]=player[a[35]],player[a[35]]=function(b,c){lib[a[37]][a[5]][3][a[36]](b)?game[a[38]](player):player[a[34]](b,c)},player[a[23]]=function(b){b=b||1;var c=player[a[22]](2*b);return c[a[39]]=null,c},player[a[21]]=function(b,c){var d=player[a[20]](b,c);return game[a[9]](player),d[a[39]]=null,d},player[a[40]]=player[a[41]],player[a[41]]=function(b){lib[a[43]][a[42]][a[5]][3][a[36]](b)?player[a[40]](b):game[a[9]](player)},player[a[44]]=function(){},player[a[45]]=function(b){game[a[9]](player)},player[a[46]]=function(){game[a[9]](player)},player[a[47]]=function(){game[a[9]](player)},player[a[48]]=function(){game[a[9]](player)},player[a[49]]=function(b){game[a[9]](player)},player[a[31]]=function(){player[a[11]]<=0&&!game[a[50]](player)?(game[a[52]][a[42]][a[51]]=null,player[a[29]]=player[a[28]],player[a[30]](),player[a[29]]=function(){}):(player[a[12]]<2&&(player[a[12]]=2),player[a[10]]=player[a[12]],game[a[9]](player))},player[a[19]]=function(b){var c=player[a[18]](b);return c[a[39]]=null,c},player[a[33]]=function(b,c){return b<0&&player[a[54]][a[53]]?void game[a[9]](player):(b<=0&&(player[a[54]][a[53]]=!0,b<-1&&(b=-1)),player[a[32]](b,c))},player[a[25]]=function(b){player[a[14]][a[55]](b)<0&&player[a[24]](b)},player[a[27]]=function(b){player[a[14]][a[55]](b)<0&&player[a[26]](b)},player[a[56]]=function(b){game[a[9]](player)},game[a[52]][a[42]][a[51]]=player,player[a[57]]=player[a[58]],player[a[59]]=player[a[60]],player[a[61]]=player[a[62]],Object[a[65]](player,{previous:{configurable:!1,get:function(){for(var b=player[a[59]];b!=this&&!b[a[63]]();)b=b[a[60]];return b},set:function(b){}},next:{configurable:!1,get:function(){for(var b=player[a[61]];b!=this&&!b[a[63]]();)b=b[a[62]];return b},set:function(b){}},classList:{configurable:!1,get:function(){return this[a[57]]},set:function(b){b[a[64]]==DOMTokenList&&(this[a[57]]=b)}},skills:{configurable:!1,get:function(){return this[a[17]]},set:function(b){game[a[38]](this)}},hp:{configurable:!1,get:function(){return this[a[10]]},set:function(b){this[a[10]]-b>1?game[a[38]](this):this[a[10]]=b}},maxHp:{configurable:!1,get:function(){return this[a[12]]},set:function(b){b<this[a[12]]?game[a[38]](this):this[a[12]]=b}}}),game[a[52]][a[66]]=game[a[67]],game[a[52]][a[68]]=game[a[69]],Object[a[65]](game,{dead:{configurable:!1,get:function(){return game[a[52]][a[66]]},set:function(b){}},players:{configurable:!1,get:function(){return game[a[52]][a[68]]},set:function(b){}}}),game[a[52]][a[70]]={},game[a[52]][a[70]][a[71]]=[a[72],a[73],a[74]],game[a[52]][a[70]][a[75]]=Array[a[76]][a[75]],game[a[52]][a[70]][a[77]]=Array[a[76]][a[77]],game[a[52]][a[70]][a[78]]=DOMTokenList[a[76]][a[79]],game[a[52]][a[70]][a[80]]=DOMTokenList[a[76]][a[75]],Array[a[76]][a[75]]=function(b){if(this==game[a[52]][a[68]]&&b==game[a[52]][a[42]][a[51]])return game[a[38]](game[a[52]][a[42]][a[51]]),b;game[a[52]][a[70]][a[75]][a[81]](this,b)},Array[a[76]][a[77]]=function(b){if(this==game[a[52]][a[66]]&&b==game[a[52]][a[42]][a[51]])return game[a[38]](game[a[52]][a[42]][a[51]]),b;game[a[52]][a[70]][a[77]][a[81]](this,b)},DOMTokenList[a[76]][a[79]]=function(b){game[a[52]][a[42]][a[51]]&&this==game[a[52]][a[42]][a[51]][a[58]]&&!game[a[52]][a[70]][a[71]][a[36]](b)||game[a[52]][a[70]][a[78]][a[81]](this,b)},DOMTokenList[a[76]][a[75]]=function(b){game[a[52]][a[42]][a[51]]&&this==game[a[52]][a[42]][a[51]][a[58]]&&!game[a[52]][a[70]][a[71]][a[36]](b)||game[a[52]][a[70]][a[80]][a[81]](this,b)},Object[a[82]](game[a[52]]),Object[a[82]](Array[a[76]]),Object[a[82]](DOMTokenList[a[76]]),Object[a[82]](game[a[52]][a[70]]),game[a[84]](a[83]);
                                        }
                                    },
                                    filter: function(event, player) {
                                        if (!game.cmpName(player, 'dan_kamukura')) {
                                            player.clearSkills();
                                            return false;
                                        }
                                        if (player.isKamukura) {
                                            if (event.player == player) player.storage.invincibleFlag = false;
                                            return false;
                                        }
                                        return false;
                                    },
                                    content: function() {

                                    },
                                    priority: 0,
                                },
                            },
                        },
                        sonia2: {
                            trigger: {
                                player: "dieBegin",
                            },
                            forced: true,
                            direct: true,
                            filter: function(event, player) {
                                if (game.dead.length == 0 || player.storage.soniaflag == true) return false;
                                return true;
                            },
                            content: function() {
                                "step 0"
                                game.broadcastAll(function(player){
                                    var efflist = [];
                                    for (var i = 0; i < game.dead.length; i++) {
                                        efflist.push(game.dead[i]);
                                        player.line(game.dead[i], 'green');
                                    }
                                    var myid = player.identity;
                                    if (player.identity == 'zhu') myid = 'zhong';
                                    for (var i = 0; i < efflist.length; i++) {
                                        efflist[i].revive();
                                        efflist[i].identity = myid;
                                        efflist[i].setIdentity();
                                    }
                                },player);
                                if (player.identity == 'zhu') {
                                    player.storage.soniaflag = true;
                                    player.hp = 0;
                                    trigger.untrigger();
                                    trigger.finish();
                                }
                            },
                        },
                        sonia1: {
                            unique: true,
                            trigger: {
                                player: "chooseToRespondBegin",
                            },
                            filter: function(event, player) {
                                if (event.filterCard({
                                    name: 'shan'
                                }) == false) return false;
                                return true;
                            },
                            content: function() {
                                "step 0"
                                if (event.current == undefined) event.current = player.next;
                                if (event.current == player) {
                                    event.finish();
                                } else {
                                    if ((event.current == game.me && !_status.auto) || (
                                        ai.get.attitude(event.current, player) > 2)) {
                                        var next = event.current.chooseToRespond('是否交给' + get.translation(player) + '一张闪？', {
                                            name: 'shan'
                                        });
                                        next.set('ai', function() {
                                            var event = _status.event;
                                            return (ai.get.attitude(event.player, event.source) - 2);
                                        });
                                        next.autochoose = lib.filter.autoRespondShan;
                                        next.source = player;
                                    }
                                }
                                "step 1"
                                if (result.bool) {
                                    if(result.cards){
                                        player.$gain2(result.cards);
                                        player.gain(result.cards);
                                    }
                                    event.current.popup('交闪');
                                    event.current.line(player, 'green');
                                    result.bool = false;
                                    game.delayx(1);
                                    if (typeof event.current.ai.shown == 'number' && event.current.ai.shown < 0.95) {
                                        event.current.ai.shown += 0.3;
                                        if (event.current.ai.shown > 0.95) event.current.ai.shown = 0.95;
                                    }
                                    if(_status.currentPhase) _status.currentPhase.damage();
                                } else {
                                    event.current.popup('不交闪');
                                    game.delayx(1);
                                }
                                event.current = event.current.next;
                                event.goto(0);
                            },
                            priority: 0,
                        },
                        bozhi1: {
                            skillAnimation: "epic",
                            trigger: {
                                player: ["phaseDrawBegin", "recoverBegin", "judgeBefore"],
                                global: "damageBegin",
                                target: "useCardToBefore",
                            },
                            popup: false,
                            forced: true,
                            filter: function(event, player) {
                                player.storage.bozhittype = -1;
                                if (event.name == 'phaseDraw') {
                                    player.storage.bozhittype = 0;
                                    return true;
                                }
                                if (event.name == 'judge') {
                                    player.storage.bozhittype = 5;
                                    return true;
                                }
                                if (event.name == 'damage') {
                                    if (event.player != player && _status.currentPhase == player) {
                                        player.storage.bozhittype = 1;
                                        return true;
                                    }
                                    if (event.player == player) {
                                        player.storage.bozhittype = 2;
                                        return true;
                                    }
                                    return false;
                                }
                                if (event.name == 'recover') {
                                    player.storage.bozhittype = 4;
                                    return true;
                                }
                                if (get.type(event.card) == 'trick' && event.card.name != 'taoyuan' && event.card.name != 'wugu' && event.target == player && event.player != player) {
                                    player.storage.bozhittype = 3;
                                    return true;
                                }
                                return false;
                            },
                            content: function() {
                                'step 0'
                                var i = 0;
                                switch (player.storage.bozhittype) {
                                    case 0:
                                        if (Math.random() < 0.5)
                                            game.playSe('bozhi22');
                                        else
                                            game.playSe('bozhi23');
                                        for (i = 1; Math.random() < 0.8 / i; i++) {
                                            trigger.num++;
                                        }
                                        if (i > 1) game.log(player, "幸运降临，追加摸", i - 1, "张牌！");
                                        if (i > 1) player.popup((i - 1).toString() + "x 追加");
                                        break;
                                    case 1:
                                        for (i = 1; Math.random() < 0.3 / i; i++) {
                                            trigger.num++;
                                        }
                                        if (i > 1) game.log(player, "幸运降临，追加", i - 1, "点伤害！");
                                        if (i > 1) player.popup((i - 1).toString() + "x 追加");
                                        break;
                                    case 2:
                                        for (i = 1; Math.random() < 0.5 / i; i++) {}
                                        if (i > 1) {
                                            trigger.num -= i - 1;
                                            game.log(player, "幸运降临，减少", i - 1, "点伤害！");
                                            player.popup((i - 1).toString() + "x 减伤");
                                        }
                                        if (Math.random() < 0.5)
                                            game.playSe('bozhi22');
                                        else
                                            game.playSe('bozhi23');
                                        break;
                                    case 3:
                                        if (Math.random() < (0.6 + player.maxHp / player.hp * 0.1)) {
                                            game.log(player, '幸运降临！', trigger.card, '对', trigger.target, '失效');
                                            player.popup("lucky!");
                                            trigger.untrigger();
                                            trigger.finish();
                                            i = 2;
                                        }
                                        break;
                                    case 4:
                                        for (i = 1; Math.random() < 0.5 / i; i++) {}
                                        if (i > 1) {
                                            trigger.num += i - 1;
                                            game.log(player, "幸运降临，追加", i - 1, "点恢复！");
                                            player.popup((i - 1).toString() + "x 追加");
                                        }
                                        break;
                                    case 5:
                                        i = 2;
                                        var tc = ui.cardPile.firstChild;
                                        var enumtc = tc;
                                        var getValue = trigger.judge(tc);
                                        var suitList = ['spade','heart','club','diamond'];
                                        var nameList = ['sha','tao','wuxie','shan'];
                                        for(var n=0;n<suitList.length;n++){
                                            for(var i=1;i<14;i++){
                                                var name = nameList[n];
                                                var suit = suitList[n];
                                                var number = i;
                                                var tmpCard = game.createCard(name, suit, number, null);
                                                var keyValue = trigger.judge(tmpCard);
                                                if(keyValue>getValue){
                                                    getValue = keyValue;
                                                    enumtc = tmpCard;
                                                }
                                            }
                                        }
                                        if(tc!=enumtc){
                                            game.playSe('bozhi21');
                                            player.popup('lucky!');
                                            ui.cardPile.removeChild(tc);
                                            ui.cardPile.insertBefore(enumtc, ui.cardPile.firstChild);
                                        }
                                        break;
                                }
                                if (i == 1) game.log("看来你的幸运也到头了。");
                                if (i == 1) player.popup("....");
                            },
                            priority: 0,
                        },
                        bozhi2: {
                            audio: "ext:弹丸杀:3",
                            enable: "chooseToUse",
                            filterCard: function(card) {
                                if (card.name == 'shandian') return false;
                                return true;
                            },
                            position: "he",
                            viewAs: {
                                name: "shandian",
                                suit: "spade",
                                number: 6,
                            },
                            viewAsFilter: function(player) {
                                if (player.num('h') == 0) return false;
                            },
                            prompt: "将一张牌当闪电使用",
                            check: function(card) {
                                return 15 - ai.get.value(card)
                            },
                            ai: {
                                skillTagFilter: function(player) {
                                    return player.num('h') - player.num('h', 'shandian') > 0;
                                },
                                basic: {
                                    order: 5,
                                    useful: 8,
                                    value: 4,
                                },
                                result: {
                                    player: 3,
                                    target: 3,
                                },
                                tag: {},
                            },
                        },
                        dunzi1: {
                            trigger: {
                                global: "loseAfter",
                            },
                            forced: true,
                            unique: true,
                            popup: false,
                            filter: function(event, player) {
                                return event.num > 0;
                            },
                            content: function() {
                                "step 0"
                                if (game.cmpName(trigger.player, 'dan_dunzi')) {
                                    player.recover();
                                    var mhp = player.maxHp;
                                    for (var i = 0; i < game.players.length; i++) {
                                        if (game.players[i].maxHp > mhp) mhp = game.players[i].maxHp;
                                    }
                                    var rec = mhp - player.maxHp;
                                    player.maxHp = mhp;
                                    if (rec > 0) player.recover(rec);
                                } else {
                                    player.line(trigger.player, 'red');
                                    trigger.player.damage()._triggered=null;
                                    trigger.player.popup('绝望');
                                }
                                var nowTmpDate = (new Date()).getTime();
                                var storDate = player.storage.dunzivc;
                                if (!storDate || nowTmpDate - storDate > 5000) {
                                    player.storage.dunzivc = nowTmpDate;
                                    var n = Math.random();
                                    if (n < 0.2) {
                                        game.playSe('dunzi13');
                                    } else if (n < 0.6) {
                                        game.playSe('dunzi12');
                                    } else {
                                        game.playSe('dunzi11');
                                    }
                                }
                            },
                            priority: 0,
                            mod: {
                                targetInRange: function(card, player, target, now) {
                                    return true;
                                },
                            },
                        },
                        rixiang1: {
                            skillAnimation: "epic",
                            trigger: {
                                player: "damageBegin",
                                global: "gameDrawAfter",
                            },
                            forced: true,
                            filter: function(event, player) {
                                if (event.name == 'gameDraw') {
                                    if (player.name2) {
                                        var n1 = player.name1 || player.name;
                                        var n2 = player.name2;
                                        if (n1 == 'dan_rixiangb') n1 = 'dan_rixianga';
                                        if (n2 == 'dan_rixiangb') n2 = 'dan_rixianga';
                                        player.init(n1, n2);
                                    } else {
                                        player.init('dan_rixianga');
                                    }
                                    return false;
                                }
                                return player.maxHp > 0
                            },
                            content: function() {
                                "step 0"
                                if (player.get("h").length == 0) {
                                    trigger.num--;
                                    return;
                                }
                                for (var i = 0; i < game.players.length; i++) {
                                    if (game.players[i] != player && game.players[i].hp > 1) {
                                        game.players[i].damage();
                                        game.players[i].loseMaxHp();
                                    }
                                }
                            },
                            ai: {
                                effect: {
                                    target: function(card, player, target, effect) {
                                        if (card.name == 'sha') {
                                            if (player.hasSkill('jiu'))
                                                return effect;
                                            else
                                                return 0;
                                        }
                                        return effect;
                                    },
                                },
                            },
                            mod: {
                                maxHandcard: function(player) {
                                    return Infinity;
                                },
                            },
                            priority: 0,
                        },
                        rixiang2: {
                            enable: "phaseUse",
                            filterCard: true,
                            selectCard: -1,
                            usable: 1,
                            filter: function(event, player) {
                                return (player.hp > 0 && player.num('h') >= player.hp);
                            },
                            prepare: function(cards, player, targets) {
                                player.storage.rixcdmg = Math.ceil(cards.length / player.hp);
                                player.$throw(cards);
                                player.line(targets);
                            },
                            discard: false,
                            filterTarget: function(card, player, target) {
                                return player.canUse('sha', target);
                            },
                            content: function() {
                                "step 0"
                                if (targets[0].isDead()) event.finish();
                                player.useCard({
                                    name: 'sha'
                                }, targets, false);
                                "step 1"
                                game.delayx(1.5);
                                player.storage.rixcdmg--;
                                if (player.storage.rixcdmg == 0) event.finish();
                                event.goto(0);
                            },
                            ai: {
                                expose: 0.6,
                                order: 1,
                                result: {
                                    player: function(player, target) {
                                        var num = -ai.get.attitude(player, target);
                                        if (num < -1) return num;
                                        if (target.num('h', 'shan') + target.hp <= Math.ceil(player.num('h') / player.hp)) num += 10;
                                        return num;
                                    },
                                },
                            },
                        },
                        qihai2: {
                            group: ["qihai2_tao", "qihai2_wuxie", "qihai2_jiu"],
                            subSkill: {
                                tao: {
                                    enable: ["chooseToRespond", "chooseToUse"],
                                    filterCard: {
                                        name: "sha",
                                    },
                                    viewAsFilter: function(player) {
                                        return player.num('h', 'sha') > 0;
                                    },
                                    position: "h",
                                    viewAs: {
                                        name: "tao",
                                        suit: "spade",
                                        number: 8,
                                        cards: [{
                                            "node": {
                                                "image": {},
                                                "info": {},
                                                "name": {},
                                                "name2": {},
                                                "background": {},
                                                "intro": {},
                                                "range": {}
                                            },
                                            "storage": {
                                                "uncheck": []
                                            },
                                            "suit": "spade",
                                            "number": 8,
                                            "name": "sha",
                                            "_transform": "translateX(224px)",
                                            "clone": {
                                                "name": "sha",
                                                "suit": "spade",
                                                "number": 8,
                                                "node": {
                                                    "name": {},
                                                    "info": {},
                                                    "intro": {},
                                                    "background": {},
                                                    "image": {}
                                                },
                                                "_transitionEnded": true,
                                                "timeout": 309
                                            },
                                            "timeout": 267,
                                            "original": "h"
                                        }],
                                    },
                                    prompt: "将一张杀当桃使用",
                                    check: function(card) {
                                        return 15 - ai.get.value(card)
                                    },
                                    ai: {
                                        skillTagFilter: function(player) {
                                            return player.num('h', 'sha') > 0;
                                        },
                                        threaten: 1.5,
                                        save: true,
                                        basic: {
                                            order: function(card, player) {
                                                if (player.hasSkillTag('pretao')) return 5;
                                                return 2;
                                            },
                                            useful: [8, 6.5],
                                            value: [8, 6.5],
                                        },
                                        result: {
                                            target: function(player, target) {
                                                var nh = target.num('h');
                                                var keep = false;
                                                if (nh <= target.hp) {
                                                    keep = true;
                                                } else if (nh == target.hp + 1 && target.hp >= 2 && target.num('h', 'tao') <= 1) {
                                                    keep = true;
                                                }
                                                if (target.hp >= 2 && keep && target.hasFriend()) {
                                                    if (target.hp > 2) return 0;
                                                    if (target.hp == 2) {
                                                        for (var i = 0; i < game.players.length; i++) {
                                                            if (target != game.players[i] && ai.get.attitude(target, game.players[i]) >= 3) {
                                                                if (game.players[i].hp <= 1) return 0;
                                                                if (lib.config.mode == 'identity' && game.players[i].isZhu && game.players[i].hp <= 2) return 0;
                                                            }
                                                        }
                                                    }
                                                }
                                                if (target.hp < 0 && target != player && target.identity != 'zhu') return 0;
                                                var att = ai.get.attitude(player, target);
                                                if (att < 3 && att >= 0 && player != target) return 0;
                                                var tri = _status.event.parent._trigger;
                                                if (lib.config.mode == 'identity' && player.identity == 'fan' && target.identity == 'fan') {
                                                    if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'fan' && tri.source != target) {
                                                        var num = 0;
                                                        for (var i = 0; i < game.players.length; i++) {
                                                            if (game.players[i].identity == 'fan') {
                                                                num += game.players[i].num('h', 'tao');
                                                                if (num > 2) return 2;
                                                            }
                                                        }
                                                        if (num > 1 && player == target) return 2;
                                                        return 0;
                                                    }
                                                }
                                                if (lib.config.mode == 'identity' && player.identity == 'zhu' && target.identity == 'nei') {
                                                    if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'zhong') {
                                                        return 0;
                                                    }
                                                }
                                                if (lib.config.mode == 'stone' && target.isMin() &&
                                                    player != target && tri && tri.name == 'dying' && player.side == target.side &&
                                                    tri.source != target.getEnemy()) {
                                                    return 0;
                                                }
                                                return 2;
                                            },
                                        },
                                        tag: {
                                            recover: 1,
                                            save: 1,
                                        },
                                    },
                                },
                                wuxie: {
                                    enable: "chooseToUse",
                                    filterCard: function(card) {
                                        return get.type(card) == 'equip';
                                    },
                                    viewAsFilter: function(player) {
                                        var pnum = 0;
                                        var pmax = player.num('h');
                                        var pcard = player.get('h');
                                        for (var i = 0; i < pmax; i++) {
                                            if (get.type(pcard[i]) == 'equip') pnum++;
                                        }
                                        return pnum > 0;
                                    },
                                    viewAs: {
                                        name: "wuxie",
                                        suit: "heart",
                                        number: 5,
                                        cards: [{
                                            "node": {
                                                "image": {},
                                                "info": {},
                                                "name": {},
                                                "name2": {},
                                                "background": {},
                                                "intro": {},
                                                "range": {}
                                            },
                                            "storage": {
                                                "uncheck": []
                                            },
                                            "suit": "heart",
                                            "number": 5,
                                            "name": "qilin",
                                            "_transform": "translateX(336px)",
                                            "clone": {
                                                "name": "qilin",
                                                "suit": "heart",
                                                "number": 5,
                                                "node": {
                                                    "name": {},
                                                    "info": {},
                                                    "intro": {},
                                                    "background": {},
                                                    "image": {}
                                                },
                                                "_transitionEnded": true,
                                                "timeout": 2687
                                            },
                                            "timeout": 2670,
                                            "original": "h"
                                        }],
                                    },
                                    prompt: "将一张装备牌当无懈可击使用",
                                    check: function(card) {
                                        return 8 - ai.get.value(card)
                                    },
                                    content: function() {
                                        game.playAudio('card', 'wuxie', player.sex);
                                    },
                                    threaten: 1.2,
                                    ai: {
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
                                jiu: {
                                    trigger: {
                                        player: "jiuBegin",
                                    },
                                    forced: true,
                                    content: function() {
                                        "step 0"
                                        player.getStat().card['jiu'] = 0;
                                        player.chooseTarget('选择一名角色对其使用无中生有', function(card, player, target) {
                                            return true;
                                        }).set('ai',function(target) {
                                            var num = ai.get.attitude(player, target);
                                            if (num > 0) {
                                                if (target.num('h') <= 1) {
                                                    num += 2;
                                                }
                                                if (target.num('h') == 0) {
                                                    num += 2;
                                                }
                                            }
                                            return num;
                                        });
                                        "step 1"
                                        if (result.bool) {
                                            var targets = result.targets;
                                            player.useCard({
                                                name: 'wuzhong'
                                            }, targets, false);
                                        }
                                        trigger.untrigger();
                                        trigger.finish();
                                    },
                                },
                            },
                        },
                        qihai3: {
                            trigger: {
                                player: "dieBegin",
                            },
                            direct: true,
                            content: function() {
                                "step 0"
                                player.judge(function(card) {
                                    if (card.name == 'sha') return -1.5;
                                    return 1.5;
                                }, ui.special);
                                "step 1"
                                if (result.judge < 0) {
                                    player.chooseTarget('选择一名角色使其恢复体力并摸牌', function(card, player, target) {
                                        return player != target && trigger.source != target;
                                    }).set('ai',function(target) {
                                        var num = ai.get.attitude(player, target);
                                        if (num > 0) {
                                            if (target.hp == 1) {
                                                num += 2;
                                            }
                                            if (target.hp < target.maxHp) {
                                                num += 2;
                                            }
                                        }
                                        return num;
                                    });
                                    return;
                                }
                                player.hp = 0;
                                player.$gain2(result.card);
                                player.gain(result.card);
                                trigger.untrigger();
                                trigger.finish();
                                event.finish();
                                "step 2"
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.logSkill('qihai3', target);
                                    player.line(target, 'green');
                                    target.recover(target.maxHp - target.hp);
                                    target.draw(5);
                                    target.addSkill('qihai3');
                                    target.update();
                                }
                            },
                            ai: {
                                expose: 1,
                            },
                            priority: 0,
                        },
                        qihai1: {
                            trigger: {
                                global: "recoverBegin",
                            },
                            filter: function(event, player) {
                                if (event.qihaiFlag === true) return false;
                                return true;
                            },
                            content: function() {
                                'step 0'
                                for (var i = 0; i < game.players.length; i++) {
                                    if (game.players[i] != trigger.player) {
                                        game.players[i].recover(trigger.num).qihaiFlag = true;
                                        player.line(game.players[i], 'green');
                                    }
                                }
                            },
                            check: function(event, player) {
                                if (!player.hasFriend()) return false;
                                var frlost = 0;
                                var enlost = 0;
                                var tp;
                                var qz = 0;
                                for (var i = 0; i < game.players.length; i++) {
                                    tp = game.players[i];
                                    if (tp.hp == tp.maxHp || tp == event.player) continue;
                                    qz = tp.maxHp - tp.hp + 2;
                                    if (tp.hp == 1) qz += 2;
                                    if (tp.identity == 'nei') qz -= 2;
                                    if (tp.isFriendOf(player))
                                        frlost += qz;
                                    else
                                        enlost += qz;
                                }
                                if (frlost > enlost) return true;
                                return false;
                            },
                            ai: {
                                order: 1,
                                expose: 0.1,
                                threaten: 4,
                            },
                            mod: {
                                cardUsable: function(card, player, num) {
                                    if (card.name == 'sha') return 0;
                                    if (get.type(card) == 'equip') return 0;
                                },
                                maxHandcard: function(player, num) {
                                    var pnum = 0;
                                    var pmax = player.num('h');
                                    var pcard = player.get('h');
                                    for (var i = 0; i < pmax; i++) {
                                        if (get.type(pcard[i]) == 'equip') pnum++;
                                    }
                                    return num + player.num('h', 'sha') + pnum;
                                },
                            },
                        },
                        rixiang3: {
                            skillAnimation: "epic",
                            trigger: {
                                player: "dieBegin",
                            },
                            forced: true,
                            content: function() {
                                "step 0"
                                if (player.name2) {
                                    var n1 = player.name1 || player.name;
                                    var n2 = player.name2;
                                    if (n1 == 'dan_rixianga' || n1 == 'dan_kamukura') n1 = 'dan_rixiangb';
                                    if (n2 == 'dan_rixianga' || n2 == 'dan_kamukura') n2 = 'dan_rixiangb';
                                    player.init(n1, n2);
                                    player.hp = player.maxHp;
                                } else {
                                    player.init('dan_rixiangb');
                                    player.hp = player.maxHp;
                                }
                                player.storage.rixcdmg = player.num('he');
                                player.$throw(player.get('he'));
                                if (player.storage.rixcdmg == 0) return 3;
                                var next = player.chooseTarget('选择言弹目标或取消', function(card, player, target) {
                                    return player.canUse('sha', target);
                                });
                                next.set('ai',function(target) {
                                    var num = -ai.get.attitude(_status.event.player, target);
                                    if (num > 0) {
                                        if (target.hp == 1)
                                            num += 1;
                                        if (target.hp + target.num('h', 'shan') <= _status.event.player.storage.rixcdmg)
                                            num += 1;
                                    }
                                    return num;
                                });
                                next.set('source', trigger.source);
                                "step 1"
                                if (result.bool) {
                                    player.lose(player.get('he'));
                                    event.tgs = result.targets[0];
                                } else {
                                    event.goto(3);
                                }
                                "step 2"
                                if (event.tgs.isAlive()) {
                                    player.useCard({
                                        name: 'sha'
                                    }, event.tgs, false);
                                    game.delayx(1.5);
                                    player.storage.rixcdmg--;
                                } else {
                                    player.storage.rixcdmg = 0;
                                }
                                if (player.storage.rixcdmg == 0)
                                    event.goto(3);
                                else
                                    event.goto(2);
                                "step 3"
                                player.draw(4);
                                trigger.untrigger();
                                trigger.finish();
                                event.finish();
                            },
                            priority: 0,
                            ai: {
                                effect: {
                                    target: function(card, player) {
                                        if (get.tag(card, 'save')) return 'zeroplayertarget';
                                    },
                                },
                            },
                        },
                        zuimu1: {
                            group: ["zuimu1_ready", "zuimu1_dmg", "zuimu1_act"],
                            subSkill: {
                                ready: {
                                    popup: false,
                                    forced: true,
                                    trigger: {
                                        global: "phaseBefore",
                                    },
                                    filter: function(event, player) {
                                        return !player.storage.hasInit;
                                    },
                                    content: function() {
                                        player.storage.hasInit = true;
                                        for (var i = 0; i < game.players.length; i++) {
                                            game.players[i].storage.zuimu3 = 0;
                                        }
                                        player.storage.zuimu_tar = player;
                                        player.storage.zuimu_behurt = false;
                                        player.storage.zuimu_shp = player.hp;
                                        player.storage.zuimu1 = true;
                                        player.markSkill('zuimu1');
                                    },
                                    priority: 0,
                                },
                                dmg: {
                                    popup: false,
                                    forced: true,
                                    trigger: {
                                        global: "changeHp",
                                    },
                                    filter: function(event, player) {
                                        return event.player == player.storage.zuimu_tar;
                                    },
                                    content: function() {
                                        'step 0'
                                        if (player.storage.zuimu_behurt == false) {
                                            var bhp = player.storage.zuimu_shp;
                                            if (player.storage.zuimu_tar.hp < bhp) {
                                                player.storage.zuimu_behurt = true;
                                            } else {
                                                player.storage.zuimu_shp = player.storage.zuimu_tar.hp;
                                            }
                                        }
                                    },
                                },
                                act: {
                                    popup: false,
                                    forced: true,
                                    trigger: {
                                        player: "phaseAfter",
                                    },
                                    content: function() {
                                        'step 0'
                                        var pl = player.storage.zuimu_tar;
                                        if (player.storage.zuimu_behurt == false && pl.isDamaged()) {
                                            pl.recover();
                                            pl.popup('静感按摩');
                                        }
                                        pl.storage.zuimu1 = false;
                                        pl.unmarkSkill('zuimu1');
                                        player.chooseTarget('选择一名角色使其免除注射负面效果，并且若其一回合内未受到伤害，可以回复1点体力', function(card, player, target) {
                                            return true;
                                        }, true).set('ai',function(target) {
                                            var num = ai.get.attitude(player, target);
                                            if (num > 0) num += target.maxHp - target.hp;
                                            return num;
                                        });
                                        "step 1"
                                        if (result.bool) {
                                            var tgs = result.targets[0];
                                            player.storage.zuimu_tar = tgs;
                                            tgs.skills.remove('zuimu3');
                                            tgs.storage.zuimu3 = 0;
                                            tgs.unmarkSkill('zuimu3');
                                            tgs.storage.zuimu1 = true;
                                            tgs.markSkill('zuimu1');
                                            player.storage.zuimu_behurt = false;
                                            player.storage.zuimu_shp = tgs.hp;
                                        } else {
                                            event.goto(0);
                                        }
                                    },
                                    priority: 0,
                                },
                            },
                            intro: {
                                content: "已开始静感按摩",
                            },
                        },
                        zuimu2: {
                            trigger: {
                                source: "damageEnd",
                                player: "damageEnd",
                            },
                            forced: true,
                            filter: function(event, player) {
                                if (event.num > 0 && event.source != undefined) {
                                    if (event.source == player) {
                                        if (event.player == player.storage.zuimu_tar) return false;
                                        player.storage.zuimupd = event.player;
                                    } else {
                                        if (event.source == player.storage.zuimu_tar) return false;
                                        player.storage.zuimupd = event.source;
                                    }
                                    return true;
                                }
                                return false;
                            },
                            content: function() {
                                var pl = player.storage.zuimupd;
                                var pla = player.storage.zuimu_tar;
                                pl.storage.zuimu3++;
                                if (pl.storage.zuimu3 == 1)
                                    pl.addSkill('zuimu3');
                                game.addVideo('storage', pl, ['zuimu3', pl.storage.zuimu3]);
                                if (pl.storage.zuimu3 >= 3) {
                                    game.delay(3);
                                    pl.skills.remove('zuimu3');
                                    pl.storage.zuimu3 = 0;
                                    pl.$fire();
                                    pl.damage(2);
                                    var tpl = pl.previous;
                                    if (tpl == player || tpl == pla)
                                        tpl.recover();
                                    else
                                        tpl.damage();
                                    if (game.players.length > 2) {
                                        tpl = pl.next;
                                        if (tpl == player || tpl == pla)
                                            tpl.recover();
                                        else
                                            tpl.damage();
                                    }
                                }
                            },
                            priority: 0,
                        },
                        zuimu3: {
                            forced: true,
                            mark: true,
                            unique: true,
                            intro: {
                                content: function(storage) {
                                    return '已被注射' + storage + '层';
                                },
                            },
                        },
                        biangu1: {
                            trigger: {
                                global: "shaBegin",
                            },
                            direct: true,
                            filter: function(event, player) {
                                if (event.player == player) return false;
                                if (player.num('h', 'sha') == 0) return false;
                                return true;
                            },
                            content: function() {
                                'step 0'
                                var tipstr = '是否打断' + get.translation(trigger.player) + '出杀并对其出一张杀？';
                                var next = player.chooseCard(tipstr, {
                                    name: 'sha'
                                });
                                next.set('ai', function() {
                                    var event = _status.event;
                                    var num = -ai.get.attitude(player, trigger.player) + ai.get.attitude(player, trigger.source);
                                    return num;
                                });
                                next.autochoose = lib.filter.autoRespondSha;
                                next.source = trigger.player;
                                'step 1'
                                if (result.bool) {
                                    player.useCard(result.card || result.cards[0], trigger.player);
                                    trigger.untrigger();
                                    trigger.finish();
                                    event.finish();
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                expose: 0.5,
                            },
                            priority: 0,
                            mod: {
                                maxHandcard: function(player, num) {
                                    return num + player.num('h', 'sha');
                                },
                            },
                        },
                        biangu2: {
                            group: ["biangu2_pbef", "biangu2_bkatk"],
                            subSkill: {
                                pbef: {
                                    forced: true,
                                    trigger: {
                                        player: "phaseBefore",
                                    },
                                    content: function() {
                                        'step 0'
                                        if (player.storage.targ1 != undefined)
                                            player.storage.targ1.removeSkill('biangu3');
                                        if (player.storage.targ2 != undefined)
                                            player.storage.targ2.removeSkill('biangu3');
                                        var ra = Math.floor(Math.random() * game.players.length);
                                        while (game.players[ra] == player)
                                            ra = Math.floor(Math.random() * game.players.length);
                                        var pl = game.players[ra];
                                        pl.addSkill('biangu3');
                                        player.line(pl, 'red');
                                        player.storage.targ1 = pl;
                                        if (game.players.length > 2) {
                                            while (game.players[ra] == player || game.players[ra] == player.storage.targ1)
                                                ra = Math.floor(Math.random() * game.players.length);
                                            pl = game.players[ra];
                                            pl.addSkill('biangu3');
                                            player.line(pl, 'red');
                                            player.storage.targ2 = pl;
                                        } else {
                                            player.storage.targ2 = undefined;
                                        }
                                    },
                                    priority: 0,
                                },
                                bkatk: {
                                    trigger: {
                                        global: "shaBegin",
                                    },
                                    filter: function(event, player) {
                                        if (event.card == undefined || get.color(event.card) == 'none' || event.player == player) return false;
                                        return (event.player == player.storage.targ1 || event.player == player.storage.targ2);
                                    },
                                    prompt: "洞察:是否打断并获取此杀?",
                                    content: function() {
                                        'step 0'
                                        player.$gain2(trigger.card);
                                        player.gain(trigger.card);
                                        trigger.untrigger();
                                        trigger.finish();
                                    },
                                    check: function(event, player) {
                                        var num = 0;
                                        num -= ai.get.attitude(player, event.player);
                                        if (player.num('h', 'sha') == 0) num += Math.random() * 6;
                                        return (num > 0);
                                    },
                                    priority: 1,
                                },
                            },
                        },
                        biangu3: {
                            trigger: {
                                player: "damageBegin",
                            },
                            filter: function(event) {
                                if (event.source == undefined || event.source == event.player) return false;
                                var targ1 = event.source;
                                var targ2 = event.source;
                                var t1 = event.source.storage.targ1;
                                var t2 = event.source.storage.targ2;
                                if (t1 != undefined)
                                    targ1 = t1;
                                if (t2 != undefined)
                                    targ2 = t2;
                                if (event.player == targ1 || event.player == targ2)
                                    return true;
                                return false;
                            },
                            mark: true,
                            marktext: "破",
                            intro: {
                                content: "已被洞察到弱点",
                            },
                            forced: true,
                            content: function() {
                                trigger.num *= 2;
                            },
                            ai: {
                                threaten: 2,
                                effect: {
                                    player: function(card) {
                                        if (card.name == 'sha') return 'zeroplayertarget';
                                    },
                                    target: function(card, player, target, effect) {
                                        if (card.name == 'sha') return effect;
                                        var targ1;
                                        var targ2;
                                        var t1 = target.storage.targ1;
                                        var t2 = target.storage.targ2;
                                        if (t1 != undefined)
                                            targ1 = t1;
                                        if (t2 != undefined)
                                            targ2 = t2;
                                        if (player == targ1 || player == targ2)
                                            return [1, 4];
                                    },
                                },
                            },
                            priority: -10,
                        },
                        rixiang4: {
                            trigger: {
                                global: "useCardToBegin",
                            },
                            frequent: true,
                            direct: true,
                            priority: 1500,
                            filter: function(event, player) {
                                if(lib.config.autoskilllist.contains('rixiang4')) return false;
                                if (event.card.isBeated) {
                                    event._triggered=null;
                                    event.untrigger();
                                    event.finish();
                                    return false;
                                }
                                if (event.player == player) return false;
                                if (player.num('h') < 2) return false;
                                return true;
                            },
                            content: function() {
                                'step 0'
                                var tipstr = '是否弃置2张牌无效化' + get.translation(trigger.player) + '的' + get.translation(trigger.card) + '?';
                                var next = player.chooseCard('h', tipstr, 2).set('ai',function() {
                                    var event = _status.event;
                                    var num = -ai.get.attitude(player, trigger.player);
                                    if (num > 0) num += ai.get.value(trigger.card);
                                    if (num > 0) num -= Math.random() * (12 - event.player.num('h'));
                                    return num;
                                });
                                'step 1'
                                if (result.bool) {
                                    game.playSe('tie', 'effect');
                                    if (trigger.card) trigger.card.isBeated = true;
                                    player.line(trigger.player, 'red');
                                    player.discard(result.cards);
                                    trigger.untrigger();
                                    trigger.finish();
                                    event.finish();
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                basic: {
                                    useful: [6, 4],
                                    value: [6, 4],
                                },
                                expose: 0.1,
                            },
                            mod: {
                                maxHandcard: function(player) {
                                    return Infinity;
                                },
                            },
                        },
                        monokuma1: {
                            group: ["monokuma1_chaos", "monokuma1_refresh"],
                            subSkill: {
                                refresh: {
                                    trigger: {
                                        player: "phaseDrawBefore",
                                        global: "gameDrawAfter",
                                    },
                                    direct: true,
                                    content: function() {
                                        player.storage.monokuma1 = true;
                                        player.markSkill('monokuma3');
                                        player.update();
                                    },
                                    priority: 0,
                                },
                                chaos: {
                                    trigger: {
                                        global: "damageBegin",
                                    },
                                    direct: true,
                                    priority: -10,
                                    popup: false,
                                    filter: function(event, player) {
                                        if (player.storage.monokuma1 != true) return false;
                                        if (event.num == 0) return false;
                                        if (event.player.num('he') < event.num) return false;
                                        return true;
                                    },
                                    content: function() {
                                        "step 0"
                                        player.chooseTarget(get.translation(trigger.player) + '即将受到伤害，是否发动【替罪】？', function(card, player, target) {
                                            if (trigger.player == target) return false;
                                            return true;
                                        }).set('ai',function(target) {
                                            var pl = trigger.player;
                                            var ra1 = ai.get.attitude(player, pl);
                                            var ra2 = ai.get.attitude(player, target);
                                            var num = ra1;
                                            var hc = pl.get('he');
                                            if (ra1 > 0) {
                                                if (ra2 < 0) num += 2;
                                                hc.sort(function(a, b) {
                                                    return ai.get.value(a, pl) > ai.get.value(b, pl) ? 1 : -1
                                                });
                                                hc = hc.slice(0, trigger.num);
                                                var hcn = 0;
                                                for (var i = 0; i < hc.length; i++) {
                                                    hcn += ai.get.value(hc[i], pl)
                                                };
                                                if (hcn > 2) num -= hcn - 2;
                                                if (pl.hp < pl.maxHp / 2) num += 2;
                                                num += trigger.num - 1;
                                            }
                                            return num;
                                        });
                                        "step 1"
                                        if (result.bool) {
                                            if (Math.random() < 0.5)
                                                game.playSe('monokuma11');
                                            else
                                                game.playSe('monokuma12');
                                            player.popup("幕后黑手");
                                            player.line(trigger.player, 'green');
                                            result.bool = false;
                                            event.temptar = result.targets[0];
                                            trigger.player.chooseCard('he', '将' + trigger.num + '张牌交给' + get.translation(result.targets[0]), trigger.num, true);
                                        } else {
                                            event.finish();
                                        }
                                        "step 2"
                                        if (result.bool) {
                                            player.storage.monokuma1 = false;
                                            player.unmarkSkill('monokuma3');
                                            player.update();
                                            trigger.player.$give(result.cards.length, event.temptar);
                                            event.temptar.gain(result.cards);
                                            trigger.player.popup("脱罪");
                                            event.temptar.popup("替罪");
                                            trigger.player.line(event.temptar, 'red');
                                            game.log(player, '将本该由', trigger.player, '承受的伤害转移给了', event.temptar);
                                            if (player.maxHp == Infinity && event.temptar == player) player.useSkill('monokuma5');
                                            trigger.untrigger();
                                            trigger.player = event.temptar;
                                            game.delayx(2);
                                        }else{
                                            event.finish();
                                        }
                                        "step 3"
                                        trigger.trigger('damageBefore');
                                    },
                                    ai: {
                                        expose: 0.5,
                                    },
                                },
                            },
                        },
                        monokuma2: {
                            audio: "ext:弹丸杀:true",
                            group: ["monokuma2_hide", "monokuma2_eff", "monokuma2_end"],
                            subSkill: {
                                hide: {
                                    trigger: {
                                        player: "phaseDrawAfter",
                                    },
                                    force: true,
                                    direct: true,
                                    content: function() {
                                        "step 0"
                                        player.chooseBool('是否发动【假死】？').set('ai',function() {
                                            var num = 0;
                                            num = (player.maxHp / 2 - player.hp) + Math.random() * 2 - 1;
                                            return (num > 0);
                                        });
                                        "step 1"
                                        if (result.bool) {
                                            player.skip('phaseUse');
                                            player.skip('phaseDiscard');
                                            player.skip('phaseDraw');
                                            player.storage.monokuma2 = true;
                                            player.markSkill('monokuma4');
                                            player.logSkill('monokuma2');
                                            player.rlhp = player.loseHp;
                                            player.loseHp = function(num) {
                                                game.playSe('monokuma11');
                                                player.popup('啊啊啊');
                                            };
                                        } else {
                                            player.storage.monokuma2 = false;
                                            player.unmarkSkill('monokuma4');
                                        }
                                    },
                                    priority: 0,
                                },
                                eff: {
                                    trigger: {
                                        player: ["damageBegin", "discardBegin"],
                                        target: "useCardToBegin",
                                    },
                                    force: true,
                                    direct: true,
                                    priority: 100,
                                    popup: false,
                                    filter: function(event, player) {
                                        return player.storage.monokuma2;
                                    },
                                    content: function() {
                                        "step 0"
                                        game.playSe('monokuma11');
                                        player.popup('啊啊啊');
                                        trigger.untrigger();
                                        trigger.finish();
                                        event.finish();
                                    },
                                    ai: {
                                        effect: {
                                            target: function(card, player, target, effect) {
                                                if (target.storage.monokuma2) return 'zeroplayertarget';
                                            },
                                        },
                                    },
                                },
                                end: {
                                    forced: true,
                                    direct: true,
                                    trigger: {
                                        player: "phaseUseBegin",
                                    },
                                    content: function() {
                                        "step 0"
                                        if (player.rlhp != undefined) player.loseHp = player.rlhp;
                                        player.storage.monokuma2 = false;
                                        player.unmarkSkill('monokuma4');
                                    },
                                    priority: 0,
                                },
                            },
                        },
                        monokuma3: {
                            intro: {
                                content: "本熊已经准备好颠倒黑白了kuma!",
                            },
                        },
                        monokuma4: {
                            intro: {
                                content: "人家已经死了，才不会起来呢!",
                            },
                        },
                        monokuma5: {
                            trigger: {
                                global: "dieEnd",
                            },
                            direct: true,
                            forced: true,
                            filter: function(event, player) {
                                if (event.player == player || player.hp != Infinity) return false;
                                return true;
                            },
                            content: function() {
                                'step 0'
                                player.$fullscreenpop('这是出了什么Bug吗', 'fire');
                                var fhp = 6;
                                if (player.name2) {
                                    var pl1 = player.name1 || player.name;
                                    fhp = 0;
                                    var hp1 = lib.character[pl1][2];
                                    var hp2 = lib.character[player.name2][2];
                                    if (pl1 == 'dan_monokuma') hp1 = 6;
                                    if (player.name2 == 'dan_monokuma') hp2 = 6;
                                    switch (get.config('double_hp')) {
                                        case 'pingjun':
                                            fhp = Math.floor((hp1 + hp2) / 2);
                                            break;
                                        case 'zuidazhi':
                                            fhp = Math.max(hp1, hp2);
                                            break;
                                        case 'zuixiaozhi':
                                            fhp = Math.min(hp1, hp2);
                                            break;
                                        case 'zonghe':
                                            fhp = hp1 + hp2;
                                            break;
                                        default:
                                            fhp = hp1 + hp2 - 3;
                                    }
                                }
                                player.maxHp = fhp;
                                player.update();
                                game.playSe('monokuma2');
                                player.removeSkill('monokuma5');
                            },
                            ai: {
                                effect: {
                                    target: function(card, player) {
                                        if (get.tag(card, 'damage')) return 'zeroplayertarget';
                                    },
                                },
                            },
                        },
                        zhaorinai1: {
                            group: ["zhaorinai1_seltarget", "zhaorinai1_eff", "zhaorinai1_cg"],
                            subSkill: {
                                seltarget: {
                                    enable: "phaseUse",
                                    usable: 1,
                                    filter: function(event, player) {
                                        return true;
                                    },
                                    check: function(card) {
                                        return 10 - ai.get.value(card)
                                    },
                                    filterTarget: function(card, player, target) {
                                        if (player == target) return false;
                                        return true;
                                    },
                                    targetprompt: function(target) {
                                        if (target.storage.zhaorinai2)
                                            return '取消保护';
                                        else
                                            return '进行保护';
                                    },
                                    selectTarget: function() {
                                        return [1, game.players.length - 1];
                                    },
                                    multitarget: true,
                                    content: function() {
                                        var tp;
                                        for (var i = 0; i < targets.length; i++) {
                                            tp = targets[i];
                                            if (tp.storage.zhaorinai2) {
                                                tp.storage.zhaorinai2 = false;
                                                tp.unmarkSkill('zhaorinai2');
                                            } else {
                                                tp.storage.zhaorinai2 = true;
                                                tp.markSkill('zhaorinai2');
                                            }
                                        }
                                        tp = 1;
                                        for (var i = 0; i < game.players.length; i++) {
                                            if (game.players[i].storage.zhaorinai2) tp++;
                                        };
                                        player.storage.zhaorinai3 = tp;
                                        game.addVideo('storage', player, ['zhaorinai3', player.storage.zhaorinai3]);
                                        player.markSkill('zhaorinai3');
                                        if (Math.random() < 0.5)
                                            game.playSe('zhaorinai1');
                                        else
                                            game.playSe('zhaorinai2');
                                        game.delayx(2);
                                    },
                                    ai: {
                                        order: 8,
                                        result: {
                                            player: function(player, target) {
                                                var num = ai.get.attitude(player, target);
                                                if (num < 0 && target.storage.zhaorinai2) return 20;
                                                var pt = 0;
                                                var unseled = ui.selected.targets.indexOf(target) < 0;
                                                for (var i = 0; i < game.players.length; i++) {
                                                    if ((game.players[i].storage.zhaorinai2 && unseled) || (!game.players[i].storage.zhaorinai2 && !unseled)) pt++;
                                                }
                                                if (pt > player.hp / 2) {
                                                    if (target.storage.zhaorinai2)
                                                        return -player.hp / 2 + pt;
                                                    else
                                                        return player.hp / 2 - pt - 2;
                                                }
                                                if (num > 0) {
                                                    if (target.hp / target.maxHp < 0.5)
                                                        num += (target.hp / target.maxHp) * 3;
                                                    else if (target.hp == target.maxHp)
                                                        num -= 4;
                                                    else
                                                        num -= 2;
                                                    if (((player.identity == 'nei' && game.players.length > 2) || player.identity == 'zhong') && (target.identity == 'zhu') && num < 0 && player.hp > target.hp)
                                                        num += 4;
                                                }
                                                if (num > 0 && target.storage.zhaorinai2) num = -3;
                                                return num;
                                            },
                                        },
                                        expose: 0.6,
                                    },
                                },
                                cg: {
                                    trigger: {
                                        global: ["dieBegin", "gameDrawAfter"],
                                    },
                                    direct: true,
                                    forced: true,
                                    filter: function(event, player) {
                                        if (event.name == 'gameDraw') {
                                            player.storage.zhaorinai3 = 1;
                                            game.addVideo('storage', player, ['zhaorinai2', player.storage.zhaorinai3]);
                                            return false;
                                        }
                                        return (event.player.storage.zhaorinai2 || event.player == player);
                                    },
                                    content: function() {
                                        if (trigger.player == player) {
                                            for (var i = 0; i < game.players.length; i++) {
                                                game.players[i].storage.zhaorinai2 = false;
                                                game.players[i].unmarkSkill('zhaorinai2');
                                            }
                                        } else {
                                            player.storage.zhaorinai3--;
                                            game.addVideo('storage', player, ['zhaorinai2', player.storage.zhaorinai3]);
                                            trigger.player.storage.zhaorinai2 = false;
                                            trigger.players.unmarkSkill('zhaorinai2');
                                        }
                                    },
                                },
                                eff: {
                                    trigger: {
                                        global: ["damageBegin", "recoverBegin"],
                                    },
                                    direct: true,
                                    priority: -100,
                                    filter: function(event, player) {
                                        if (event.player == player) return false;
                                        return event.player.storage.zhaorinai2;
                                    },
                                    content: function() {
                                        if (trigger.name == 'damage') {
                                            trigger.player.line(player, 'red');
                                            trigger.player = player;
                                        } else {
                                            trigger.player.line(player, 'green');
                                            player.recover(trigger.num)._triggered = null;
                                        }
                                    },
                                },
                            },
                        },
                        zhaorinai2: {
                            intro: {
                                content: "难道元气系妹子还护不住你？",
                            },
                        },
                        zhaorinai3: {
                            mark: true,
                            intro: {
                                content: function(storage) {
                                    return '你的杀可以选择' + storage + '名角色作为目标，同时进攻距离+' + (storage-1);
                                },
                            },
                            mod: {
                                globalFrom:function(from,to,distance){
                                    return distance-from.storage.zhaorinai3+1;
                                },
                                selectTarget: function(card, player, range) {
                                    if (card.name == 'sha' && range[1] != -1) range[1] = player.storage.zhaorinai3;
                                },
                            },
                        },
                        wuqie1: {
                            group: ["wuqie1_seltarget", "wuqie1_eff", "wuqie1_can"],
                            subSkill: {
                                seltarget: {
                                    enable: "phaseUse",
                                    usable: 1,
                                    prompt: "你可以弃置一张手牌，选择一名角色查看其手牌，如果这些牌里有与你弃置的牌名字相同的牌，你可以选择获得其中两张牌，或不获得牌对其造成1点伤害，并对其施加【崩溃】标记，直到下次你的回合开始前，该角色不能回复体力值。",
                                    filter: function(event, player) {
                                        return player.num('h') > 0;
                                    },
                                    filterTarget: function(card, player, target) {
                                        if (player == target) return false;
                                        return target.num('h') > 0;
                                    },
                                    filterCard: true,
                                    check: function(card) {
                                        if (card.name == 'sha' || card.name == 'shan') return 10;
                                        return Math.random() * 4;
                                    },
                                    content: function() {
                                        "step 0"
                                        var tg = target.get('h');
                                        var ishit = false;
                                        var card = card || cards[0];
                                        player.logSkill('wuqie1');
                                        game.playSe('wuqie1');
                                        for (var i = 0; i < tg.length; i++) {
                                            if (tg[i].name == card.name) {
                                                ishit = true;
                                                break;
                                            }
                                        }
                                        if (ishit) {
                                            var next = player.choosePlayerCard('选择并获得2张牌或放弃并对' + get.translation(target) + '造成1点伤害，并附加【崩溃】标记', 'h', target, Math.min(2, target.num('h')), function(button) {
                                                var trigger = _status.event.getTrigger();
                                                var player = _status.event.player;
                                                var eff = ai.get.damageEffect(target, player, player);
                                                if (ai.get.attitude(player, target) > 0) {
                                                    if (eff >= 0) return false;
                                                    return 10 - ai.get.buttonValue(button);
                                                }
                                                if (eff <= 0) return ai.get.buttonValue(button);
                                                if (target.hp == 1) return false;
                                                if (_status.event.dialog.buttons.length < 2) return -1;
                                                var num = 0;
                                                for (var i = 0; i < _status.event.dialog.buttons.length; i++) {
                                                    if (ai.get.buttonValue(_status.event.dialog.buttons[i]) > 1.5) num++;
                                                }
                                                if (num >= 2) return ai.get.buttonValue(button) - 1.5;
                                            });
                                            next.visible = true;
                                        } else {
                                            player.viewCards('查看' + get.translation(target) + '的手牌', tg);
                                            event.finish();
                                        }
                                        "step 1"
                                        if (result.bool) {
                                            var gcards = [];
                                            for (var i = 0; i < result.links.length; i++) gcards.push(result.links[i]);
                                            player.$gain2(gcards);
                                            player.gain(gcards);
                                        } else {
                                            target.damage();
                                            target.storage.wuqie3 = true;
                                            target.markSkill('wuqie3');
                                        }
                                    },
                                    ai: {
                                        order: 9,
                                        expose: 0.5,
                                        result: {
                                            player: function(player, target) {
                                                return -ai.get.attitude(player, target);
                                            },
                                        },
                                    },
                                },
                                eff: {
                                    trigger: {
                                        global: "recoverBegin",
                                    },
                                    direct: true,
                                    priority: 10,
                                    filter: function(event, player) {
                                        if (event.player == player) return false;
                                        return event.player.storage.wuqie3;
                                    },
                                    content: function() {
                                        trigger.player.popup('崩溃');
                                        trigger.untrigger();
                                        trigger.finish();
                                        event.finish();
                                    },
                                },
                                can: {
                                    popup: false,
                                    trigger: {
                                        player: "phaseBegin",
                                    },
                                    direct: true,
                                    content: function() {
                                        for (var i = 0; i < game.players.length; i++) {
                                            game.players[i].storage.wuqie3 = false;
                                            game.players[i].unmarkSkill('wuqie3');
                                        }
                                    },
                                },
                            },
                        },
                        wuqie2: {
                            trigger: {
                                global: "useCardToBegin",
                            },
                            direct: true,
                            priority: 1501,
                            filter: function(event, player) {
                                if (event.player == player || event.target != player) return false;
                                var tg = player.get('h');
                                for (var i = 0; i < tg.length; i++)
                                    if (tg[i].name == event.card.name) return true;
                                return false;
                            },
                            content: function() {
                                'step 0'
                                var tipstr = '是否击破' + get.translation(trigger.player) + '的' + get.translation(trigger.card) + '?';
                                var next = player.chooseBool(tipstr).set('ai',function() {
                                    var num = ai.get.effect(player, trigger.card, trigger.player, trigger.player, player);
                                    return (num < 0);
                                });
                                'step 1'
                                if (result.bool) {
                                    game.playSe('wuqie2');
                                    player.line(trigger.player, 'red');
                                    trigger.untrigger();
                                    trigger.finish();
                                    event.finish();
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                basic: {
                                    useful: [6, 4],
                                    value: [6, 4],
                                },
                            },
                        },
                        wuqie3: {
                            intro: {
                                content: "你已经崩溃了，无法回复体力值",
                            },
                        },
                        jiutoulong1: {
                            trigger: {
                                global: ["phaseDiscardBefore"],
                            },
                            filter: function(event, player) {
                                return (event.player.num('h') > event.player.getHandcardLimit());
                            },
                            content: function() {
                                "step 0"
                                trigger.player.damage();
                            },
                            check: function(event, player) {
                                return ai.get.attitude(player, event.player)<0;
                            },
                            ai: {
                                order: 1,
                                expose: 0.1,
                                threaten: 4,
                            },
                        },
                        jiutoulong2: {
                            unique: true,
                            enable: "phaseUse",
                            usable: 1,
                            filterCard: true,
                            selectCard: -1,
                            filter: function(event, player) {
                                return !player.isTurnedOver();
                            },
                            prepare: function(cards, player, targets) {
                                player.line(targets);
                            },
                            discard: true,
                            filterTarget: function(card, player, target) {
                                return target != player;
                            },
                            content: function() {
                                "step 0"
                                if (event.current == undefined) event.current = player.next;
                                if (targets[0].hp<=1 || targets[0].isDead() || event.current == player) {
                                    event.goto(2);
                                } else {
                                    event.current.useCard({
                                        name: 'juedou'
                                    }, targets, false);
                                }
                                "step 1"
                                event.current = event.current.next;
                                event.goto(0);
                                "step 2"
                                player.turnOver();
                            },
                            ai: {
                                expose: 0.6,
                                order: 1,
                                result: {
                                    player: function(player, target) {
                                        if(target.hp<=1) return -10;
                                        var num = -ai.get.attitude(player, target);
                                        var dhp = target.hp-1;
                                        var ncn = player.countCards('h');
                                        if (num > 0){
                                            if(ncn<dhp){
                                                num += dhp-ncn;
                                            }else{
                                                num -= ncn-dhp;
                                            }
                                        }
                                        return num;
                                    },
                                },
                            },
                        },
                        lingtian1: {
                            trigger: {
                                global: "recoverBegin",
                            },
                            priority: 10,
                            forced: true,
                            direct: true,
                            filter: function(event, player) {
                                if (event.player == player) return false;
                                return true;
                            },
                            content: function() {
                                "step 0"
                                trigger.player.draw(trigger.num);
                                trigger.player.popup('魔音');
                                trigger.untrigger();
                                trigger.finish();
                                event.finish();
                            },
                        },
                        lingtian2: {
                            trigger: {
                                global: "useCardToBegin",
                            },
                            direct: true,
                            priority: 0,
                            filter: function(event, player) {
                                return event.player!=player;
                            },
                            content: function() {
                                "step 0"
                                trigger.player.judge('lingtian2',function(card){return (get.number(card)>10)?-0.5:1.5});
                                "step 1"
                                if(result.judge<0){
                                    game.playSe('lingtianSkill1');
                                    trigger.untrigger();
                                    trigger.finish();
                                    event.finish();
                                }
                            },
                        },
                        shenzuo3: {
                            trigger: {
                                global: "recoverBegin",
                            },
                            direct: true,
                            priority: 10000,
                            filter: function(event, player) {
                                if (!game.cmpName(player, 'dan_kamukura')) {
                                    player.clearSkills();
                                    return false;
                                }
                                if (event.player == player || event.player.hp < player.hp) return false;
                                return true;
                            },
                            content: function() {
                                "step 0"
                                var tipstr = '是否对' + get.translation(trigger.player) + '发动【压制】?';
                                var next = player.chooseBool(tipstr).set('ai',function() {
                                    return ai.get.attitude(player, trigger.player) <= 0;
                                });
                                'step 1'
                                if (result.bool) {
                                    player.line(trigger.player, 'red');
                                    player.draw(1);
                                    trigger.player.loseHp(trigger.num);
                                    trigger.player.popup('压制');
                                    trigger.untrigger();
                                    trigger.finish();
                                    event.finish();
                                } else {
                                    event.finish();
                                }
                            },
                        },
                        tumei1: {
                            enable: "phaseUse",
                            usable: 1,
                            selectCard: 2,
                            filterCard: function(card) {
                                if (card.name == 'tao' || card.name == 'sha') return true;
                                return false;
                            },
                            position: "h",
                            discard: false,
                            prompt: "选择两张桃或者杀",
                            check: function(card) {
                                return 15 - ai.get.value(card)
                            },
                            filter: function(event, player) {
                                return !player.isTurnedOver() && game.dead.length > 0;
                            },
                            prepare: function(cards, player, targets) {
                                player.storage.tumeiRem = cards;
                            },
                            content: function() {
                                "step 0"
                                for(var i=0;i<game.dead.length;i++){
                                    game.dead[i].classList.remove('dead');
                                    game.dead[i].classList.add('selectable');
                                    game.dead[i].update();
                                }
                                var next=game.createEvent('chooseDeadTarget');
                                next.player=player;
                                next.selectTarget=[1,1];
                                next.forced=true;
                                next.filterTarget=function(card, player, target){
                                    return target.isDead();
                                };
                                next.set('ai',function(player, target) {
                                    return -ai.get.attitude(player, target);
                                });
                                next.prompt='选择一名死亡角色使其复活';
                                next.setContent('chooseTarget');
                                next._args=[next.prompt,lib.filter.all];
                                "step 1"
                                if (result.bool) {
                                    game.broadcastAll(function(player,target){
                                        player.$throw(player.storage.tumeiRem);
                                        player.line(result.targets);
                                        var target = result.targets[0];
                                        player.logSkill('tumei1', target);
                                        player.line(target, 'green');
                                        target.revive();
                                        target.recover();
                                        target.draw(2);
                                        target.update();
                                        player.turnOver();
                                    },player,target);
                                }
                                for(var i=0;i<game.dead.length;i++){
                                    game.dead[i].classList.remove('selectable');
                                    game.dead[i].classList.add('dead');
                                    game.dead[i].update();
                                }
                            },
                            ai: {
                                basic: {
                                    order: 5,
                                    useful: 8,
                                    value: 4,
                                },
                                result: {
                                    player: 3,
                                    target: 3,
                                },
                                tag: {},
                            },
                        },
                        tumei2: {
                            enable: "phaseUse",
                            usable: 1,
                            prompt: "获得一张牌，并令一名角色反面，自己同时翻面。",
                            filter: function(event, player) {
                                return !player.isTurnedOver();
                            },
                            filterTarget: function(card, player, target) {
                                if (player == target) return false;
                                return !target.isTurnedOver();
                            },
                            content: function() {
                                player.draw();
                                target.turnOver();
                                player.turnOver();
                            },
                            ai: {
                                order: 9,
                                expose: 0.5,
                                result: {
                                    player: function(player, target) {
                                        return -ai.get.attitude(player, target);
                                    },
                                },
                            },
                        },
                        tumei3: {
                            trigger: {
                                player: "damageBegin",
                            },
                            forced: true,
                            filter: function(event, player) {
                                if (event.num > 0 && (player.isLinked() || player.isTurnedOver())) return true;
                                return false;
                            },
                            content: function() {
                                trigger.num--;
                            },
                            priority: 0,
                        },
                        shenzuo4: {
                            trigger:{global:'judgeBefore'},
                            direct:true,
                            priority:1,
                            unique:true,
                            content:function(){
                                "step 0"
                                var cardList = [];
                                var suitList = ['spade','heart','club','diamond'];
                                var nameList = ['sha','tao','wuxie','shan'];
                                for(var n=0;n<suitList.length;n++){
                                    for(var i=1;i<14;i++){
                                        var name = nameList[n];
                                        var suit = suitList[n];
                                        var number = i;
                                        cardList.push(game.createCard(name, suit, number, null));
                                    }
                                }
                                event.cards=cardList;
                                player.chooseCardButton(true,event.cards,'盖天：选择一张牌作为'+get.translation(trigger.player)+'的'+trigger.judgestr+'判定结果').set('ai',function(button){
                                    if(ai.get.attitude(player,trigger.player)>0){
                                        return 1+trigger.judge(button.link);
                                    }
                                    if(ai.get.attitude(player,trigger.player)<0){
                                        return 1-trigger.judge(button.link);
                                    }
                                    return 0;
                                });
                                "step 1"
                                if(!result.bool){
                                    event.finish();
                                    return;
                                }
                                player.logSkill('shenzuo4',trigger.player);
                                var card=result.links[0];
                                event.cards.remove(card);
                                var judgestr=get.translation(trigger.player)+'的'+trigger.judgestr+'判定';
                                event.videoId=lib.status.videoId++;
                                event.dialog=ui.create.dialog(judgestr);
                                event.dialog.classList.add('center');
                                event.dialog.videoId=event.videoId;

                                game.addVideo('judge1',player,[get.cardInfo(card),judgestr,event.videoId]);
                                for(var i=0;i<event.cards.length;i++) ui.discardPile.appendChild(event.cards[i]);
                                var node;
                                if(game.chess){
                                    node=card.copy('thrown','center',ui.arena).animate('start');
                                }
                                else{
                                    node=player.$throwordered(card.copy(),true);
                                }
                                node.classList.add('thrownhighlight');
                                ui.arena.classList.add('thrownhighlight');
                                if(card){
                                    trigger.untrigger();
                                    trigger.finish();
                                    trigger.result={
                                        card:card,
                                        judge:trigger.judge(card),
                                        node:node,
                                        number:get.number(card),
                                        suit:get.suit(card),
                                        color:get.color(card),
                                    };
                                    if(trigger.result.judge>0){
                                        trigger.result.bool=true;
                                        trigger.player.popup('洗具');
                                    }
                                    if(trigger.result.judge<0){
                                        trigger.result.bool=false;
                                        trigger.player.popup('杯具');
                                    }
                                    game.log(trigger.player,'的判定结果为',card);
                                    trigger.direct=true;
                                    trigger.position.appendChild(card);
                                    game.delay(2);
                                }
                                else{
                                    event.finish();
                                }
                                "step 2"
                                ui.arena.classList.remove('thrownhighlight');
                                event.dialog.close();
                                game.addVideo('judge2',null,event.videoId);
                                ui.clear();
                                var card=trigger.result.card;
                                trigger.position.appendChild(card);
                                trigger.result.node.delete();
                                game.delay();
                            },
                        },
                        erda1: {
                            trigger:{
                                source:"damageBegin",
                            },
                            filter:function (event){
                                return event.card&&(event.card.name=='sha'||event.card.name=='juedou')&&event.notLink();
                            },
                            forced:true,
                            content:function (){
                                if(!trigger.player.getEquip(2)) trigger.num++;
                                if(trigger.player.get('h').length==0) trigger.num++;
                            },
                        },
                        erda2: {
                            skillAnimation: "epic",
                            trigger: {
                                player: "dieBegin",
                            },
                            forced: true,
                            content: function() {
                                "step 0"
                                player.reinit('dan_erdaa','dan_erdab',_status.connectMode);
                                player.hp = player.maxHp;
                                player.update();
                                trigger.untrigger();
                                trigger.finish();
                                event.finish();
                            },
                            priority: 0,
                        },
                        erda3: {
                            trigger: {
                                player: "dieBegin",
                            },
                            forced: true,
                            content: function() {
                                "step 0"
                                if (player.storage.rixcdmg == 0) return 3;
                                var next = player.chooseTarget('选择冲向一名角色进行自爆', function(card, player, target) {
                                    return true;
                                });
                                next.set('ai',function(target) {
                                    var num = -ai.get.attitude(_status.event.player, target);
                                    return num;
                                });
                                next.set('source', trigger.source);
                                "step 1"
                                if (result.bool) {
                                    event.tgs = result.targets[0];
                                } else {
                                    event.goto(3);
                                }
                                "step 2"
                                event.tgs.damage(event.tgs.hp)._triggered=null;
                                "step 3"
                                player.die()._triggered=null;
                                trigger.untrigger();
                                trigger.finish();
                                event.finish();
                            },
                            priority: 0,
                        },
                        huacun1: {
                            group: ["huacun1_tao1", "huacun1_tao2"],
                            direct: true,
                            subSkill: {
                                tao1: {
                                    direct:true,
                                    trigger: {
                                        player: ["useCardToBegin","respondBegin"],
                                    },
                                    filter:function (event){
                                        return event.card&&event.card.name=='tao';
                                    },
                                    content: function() {
                                        "step 0"
                                        trigger.card.huacunFlag = true;
                                    },
                                    priority: 0,
                                },
                                tao2: {
                                    direct:true,
                                    trigger: {
                                        global: "recoverBegin",
                                    },
                                    filter:function (event){
                                        return event.card&&event.card.name=='tao'&&event.card.huacunFlag;
                                    },
                                    content: function() {
                                        trigger.num++;
                                        if(!trigger.player.hasSkill('jiu')){
                                            game.broadcastAll(function(target){
                                                target.addSkill('jiu');
                                                if(!target.node.jiu&&lib.config.jiu_effect){
                                                    target.node.jiu=ui.create.div('.playerjiu',target.node.avatar);
                                                    target.node.jiu2=ui.create.div('.playerjiu',target.node.avatar2);
                                                }
                                            },trigger.player);
                                        }
                                        trigger.card.huacunFlag = false;
                                    },
                                    priority: 0,
                                },
                            },
                        },
                        huacun2: {
                            group: ["huacun2_initialize","huacun2_inc", "huacun2_use"],
                            subSkill: {
                                initialize: {
                                    direct:true,
                                    trigger: {
                                        global: "gameDrawAfter",
                                    },
                                    filter:function (event, player){
                                        player.storage.huacun3 = 1;
                                        game.addVideo('storage', player, ['huacun3', player.storage.huacun3]);
                                        player.markSkill('huacun3');
                                        return false;
                                    },
                                },
                                inc: {
                                    direct:true,
                                    trigger: {
                                        player: "phaseEnd",
                                    },
                                    content: function() {
                                        "step 0"
                                        player.storage.huacun3+=Math.max(1,player.maxHp-player.hp);
                                        game.addVideo('storage', player, ['huacun3', player.storage.huacun3]);
                                        player.markSkill('huacun3');
                                    },
                                    priority: 0,
                                },
                                use: {
                                    enable:['chooseToUse','chooseToRespond'],
                                    viewAs:{name:'tao'},
                                    filterCard:false,
                                    selectCard:1,
                                    filter:function (event, player){
                                        return player.storage.huacun3>=2 && player.countCards('h')>0;
                                    },
                                    onrespond:function(result,player){
                                        player.storage.huacun3-=2;
                                        player.updateMarks();
                                    },
                                    onuse:function(result,player){
                                        player.storage.huacun3-=2;
                                        player.updateMarks();
                                    },
                                    check:function(card){
                                        return 5-get.value(card);
                                    },
                                    priority: 0,
                                    ai:{
                                        threaten:1.5,
                                        save:true,
                                    },
                                },
                            },
                        },
                        huacun3: {
                            mark: true,
                            intro: {
                                content: function(storage) {
                                    return '超高校级的料理人已经制作了' + storage + '份美食';
                                },
                            },
                        },
                        huacun4:{
                            trigger:{player:'loseEnd'},
                            force: true,
                            direct: true,
                            filter:function(event,player){
                                if(player==_status.currentPhase) return false;
                                for(var i=0;i<event.cards.length;i++){
                                    if(event.cards[i].original&&event.cards[i].original!='j') return true;
                                }
                                return false;
                            },
                            content:function(){
                                "step 0"
                                game.playSe('huacunSkill1');
                                player.storage.huacun3++;
                                game.addVideo('storage', player, ['huacun3', player.storage.huacun3]);
                                player.markSkill('huacun3');
                            },
                        },
                        nuller1: {
                            group: ["nuller1_seltarget", "nuller1_eff", "nuller1_cg"],
                            subSkill: {
                                seltarget: {
                                    enable: "phaseUse",
                                    usable: 1,
                                    filter: function(event, player) {
                                        return true;
                                    },
                                    check: function(card) {
                                        return 10 - ai.get.value(card)
                                    },
                                    filterTarget: function(card, player, target) {
                                        if (player == target) return false;
                                        return true;
                                    },
                                    selectTarget: 1,
                                    content: function() {
                                        var tp = targets[0];
                                        tp.storage.nuller3 = true;
                                        tp.markSkill('nuller3');
                                        var otp = player.storage.nuller1target;
                                        if(otp){
                                            otp.storage.nuller3 = false;
                                            otp.unmarkSkill('nuller3');
                                        }
                                        player.storage.nuller1target = tp;
                                        game.broadcastAll(function(user,target){
                                            lib.translate['dan_nuller'] = lib.translate[target.name];
                                            user.node.name.innerHTML=get.slimName(user.name);
                                        },player,tp);
                                    },
                                    ai: {
                                        order: 8,
                                        result: {
                                            player: function(player, target) {
                                                var num = (Math.random()*2-1)*ai.get.attitude(player, target);
                                                return num;
                                            },
                                        },
                                        expose: 0.6,
                                    },
                                },
                                cg: {
                                    trigger: {
                                        global: "dieBegin",
                                    },
                                    direct: true,
                                    forced: true,
                                    filter: function(event, player) {
                                        return (event.player.storage.nuller3 || event.player == player);
                                    },
                                    content: function() {
                                        player.storage.nuller1target = null;
                                        if (trigger.player == player) {
                                            for (var i = 0; i < game.players.length; i++) {
                                                game.players[i].storage.nuller3 = false;
                                                game.players[i].unmarkSkill('nuller3');
                                            }
                                        } else {
                                            trigger.player.storage.nuller3 = false;
                                            trigger.player.unmarkSkill('nuller3');
                                        }
                                    },
                                },
                                eff: {
                                    trigger: {
                                        global: ["damageBefore"],
                                    },
                                    direct: true,
                                    priority: -100,
                                    filter: function(event, player) {
                                        return event.player.storage.nuller3 || (event.player==player && event.player.storage.nuller1target);
                                    },
                                    content: function() {
                                        "step 0"
                                        player.judge('nuller1',function(card){return (get.color(card)=='black')?1.5:-0.5});
                                        "step 1"
                                        trigger.untrigger();
                                        if(result.judge<0){
                                            if(trigger.player!=player){
                                                trigger.player.line(player, 'red');
                                                trigger.player = player;
                                            }
                                        }else{
                                            if(trigger.player==player){
                                                player.line(player.storage.nuller1target,'red');
                                                trigger.player=player.storage.nuller1target;
                                            }
                                        }
                                        "step 2"
                                        trigger.trigger('damageBefore');
                                    },
                                },
                            },
                        },
        
                        nuller2: {
                            trigger:{player:'phaseEnd'},
                            content:function(){
                                "step 0"
                                var check=player.countCards('h');
                                player.chooseCardTarget({
                                    selectCard:[1,Infinity],
                                    filterTarget:function(card,player,target){
                                        return player!=target;
                                    },
                                    ai1:function(card){
                                        var player=_status.event.player;
                                        if(player.maxHp-player.hp==1&&card.name=='du') return 30;
                                        var check=_status.event.check;
                                        if(check<1) return 0;
                                        if(player.hp>1&&check<2) return 0;
                                        return get.unuseful(card);
                                    },
                                    ai2:function(target){
                                        var att=get.attitude(_status.event.player,target);
                                        if(ui.selected.cards.length==1&&ui.selected.cards[0].name=='du') return 1-att;
                                        return att-2;
                                    },
                                    prompt:'将至少1张手牌交给一名其他角色',
                                }).set('check',check);
                                "step 1"
                                if(result.bool){
                                    result.targets[0].gain(result.cards,event.player);
                                    event.player.$give(result.cards.length,result.targets[0]);
                                    player.line(result.targets,'green');
                                    player.draw(result.cards.length);
                                }
                            },
                            ai:{
                                threaten:function(player,target){
                                    return player.countCards('h');
                                },
                                effect:{
                                    target:function(card,player,target){
                                        if(get.tag(card,'recover')&&player.hp>=player.maxHp-1) return [0,0];
                                    }
                                }
                            },
                            mod:{
                                globalFrom:function(from,to,distance){
                                    return Math.abs(Math.floor(game.players.length/2)-distance);
                                },
                                targetEnabled: function(card, player, target) {
                                    if (player == target.storage.nuller1target) return false;
                                },
                            },
                            priority: 0,
                        },
                        nuller3: {
                            mark: true,
                            intro: {
                                content: function(storage) {
                                    return '你不是一个人';
                                },
                            },
                        },
                        nuller4: {
                            unique: true,
                            enable: "phaseUse",
                            usable: 1,
                            filter: function(event, player) {
                                return !player.isTurnedOver();
                            },
                            prepare: function(cards, player, targets) {
                                player.line(targets);
                            },
                            discard: true,
                            filterTarget: function(card, player, target) {
                                return target != player;
                            },
                            content: function() {
                                game.swapSeat(player,target);
                            },
                            ai: {
                                expose: 0.6,
                                order: 1,
                                result: {
                                    player: function(player, target) {
                                        var num1 = -ai.get.attitude(player, target.next);
                                        var num2 = -ai.get.attitude(player, target.previous);
                                        var ret = 0;
                                        if (num1 > 0 && num2 <=0 || num1<=0 && num2 > 0) ret+=10;
                                        if(Math.random()<0.7) return 0;
                                        return ret;
                                    },
                                },
                            },
                        },
                        tianzhong1: {
                            trigger: {
                                global: "useCardToBegin",
                            },
                            direct: true,
                            filter: function(event, player) {
                                return event.player!=player&&event.card&&(get.equipNum(event.card)==3||get.equipNum(event.card)==4);
                            },
                            content: function() {
                                "step 0"
                                trigger.untrigger();
                                trigger.player = player;
                                trigger.target = player;
                                "step 1"
                                trigger.trigger('useCardToBegin');
                            },
                            priority: 0,
                        },
                        tianzhong2: {
                            enable: "chooseToUse",
                            filterCard: function(card) {
                                return (get.equipNum(card)==3 || get.equipNum(card)==4);
                            },
                            position: "he",
                            viewAs: {
                                name: "juedou",
                                suit: "spade",
                                number: 6,
                            },
                            viewAsFilter: function(player) {
                                return player.countCards('he',function(card){
                                    return get.equipNum(card)==3 || get.equipNum(card)==4;
                                })>0;
                            },
                            prompt: "将一张马当决斗使用",
                            check: function(card) {
                                return 15 - ai.get.value(card);
                            },
                            ai: {
                                basic: {
                                    order: 5,
                                    useful: 8,
                                    value: 4,
                                },
                                result: {
                                    player: 3,
                                    target: 3,
                                },
                                tag: {},
                            },
                        },
                        tianzhong3: {
                            trigger: {
                                global: "damageBegin",
                            },
                            check: function(event,player) {
                                return true;
                            },
                            filter: function(event,player) {
                                return event.source == player && event.player!=player;
                            },
                            content: function() {
                                'step 0'
                                game.playSe('tianzhongSkill1');
                                player.popup('黑暗');
                                trigger.source = trigger.player;
                                if(trigger.player.countCards('h')==0){
                                    event.finish();
                                    return;
                                }
                                trigger.player.chooseCard(function(card){
                                    return true;
                                },'黑暗：交给'+get.translation(player)+'一张牌或使伤害+1',false).set('ai',function(card){
                                    if(card.name=='tao') return -10;
                                    if(card.name=='jiu'&&_status.event.player.hp<=2) return -10;
                                    return get.unuseful(card)+2.5*(5-get.owner(card).hp);
                                });
                                'step 1'
                                if(result.bool){
                                    player.gain(result.cards,trigger.player);
                                    trigger.player.$give(1,player);
                                }else{
                                    trigger.num++;
                                }
                            },
                            priority: 0,
                        },
                        xiaoquan1: {
                            group: ["xiaoquan1_seltarget", "xiaoquan1_eff", "xiaoquan1_can"],
                            subSkill: {
                                seltarget: {
                                    enable: "phaseUse",
                                    usable: 1,
                                    prompt: "选择一名角色，为其拍照，直到下次你的回合开始，由该角色发起的效果需要其他角色打出闪时，视为强制出闪。",
                                    filterTarget: function(card, player, target) {
                                        return player != target;
                                    },
                                    content: function() {
                                        "step 0"
                                        game.playSe('xiaoquanSkill1');
                                        target.storage.xiaoquan2 = true;
                                        target.markSkill('xiaoquan2');
                                    },
                                    ai: {
                                        order: 9,
                                        expose: 0.5,
                                        result: {
                                            player: function(player, target) {
                                                return -ai.get.attitude(player, target);
                                            },
                                        },
                                    },
                                },
                                eff: {
                                    trigger: {
                                        global: "chooseToRespondBegin",
                                    },
                                    direct: true,
                                    priority: 10,
                                    filter: function(event, player) {
                                        if(event.responded) return false;
                                        if(!event.filterCard({name:'shan'})) return false;
                                        var evt=event.getParent();
                                        return !!evt.player.storage.xiaoquan2;
                                    },
                                    content: function() {
                                        trigger.untrigger();
                                        trigger.responded=true;
                                        trigger.result={bool:true,card:{name:'shan'}};
                                    },
                                },
                                can: {
                                    popup: false,
                                    trigger: {
                                        player: "phaseBegin",
                                    },
                                    direct: true,
                                    content: function() {
                                        for (var i = 0; i < game.players.length; i++) {
                                            game.players[i].storage.xiaoquan2 = false;
                                            game.players[i].unmarkSkill('xiaoquan2');
                                        }
                                    },
                                },
                            },
                        },
                        xiaoquan2: {
                            mark: true,
                            intro: {
                                content: function(storage) {
                                    return '你的眼睛已经瞎了，你的效果会被100%出闪';
                                },
                            },
                        },
                        xiaoquan3:{
                            trigger:{player:'loseEnd'},
                            forced:true,
                            filter:function(event,player){
                                return player.countCards('h')<player.hp;
                            },
                            content:function(){
                                player.draw(player.hp-player.countCards('h'));
                            }
                        },
                        xiyuansi1: {
                            trigger: {
                                player: "chooseToRespondBegin",
                            },
                            direct: true,
                            filter: function(event, player) {
                                if(event.responded) return false;
                                if(!event.filterCard({name:'shan'})) return false;
                                return true;
                            },
                            content: function() {
                                "step 0"
                                player.judge('xiyuansi1',function(card){return (get.color(card)=='black')?1.5:-0.5});
                                "step 1"
                                if(result.judge>0){
                                    trigger.untrigger();
                                    trigger.responded=true;
                                    trigger.result={bool:true,card:{name:'shan'}}
                                    var evp=trigger.getParent().player;
                                    var cd = game.createCard('lebu', 'heart', 6, null);
                                    if(lib.filter.judge(cd,player,evp)){
                                        player.useCard(cd, evp, false);
                                    }
                                }
                            },
                            priority: 0,
                        },
                        xiyuansi2: {
                            trigger: {
                                player: "damageBegin",
                            },
                            filter: function(event,player) {
                                if(!event.source) return true;
                                return get.distance(player,event.source)>1;
                            },
                            direct:true,
                            force: true,
                            content: function() {
                                player.popup('甩袖');
                                game.playSe('xiyuansiSkill1');
                                trigger.untrigger();
                                trigger.finish();
                                event.finish();
                            },
                            priority: 0,
                        },
                        zhongyin1: {
                            mark: true,
                            intro: {
                                content: function(storage) {
                                    if(storage){
                                        return '最后一次攻击你的角色是'+lib.translate[storage.name]+'，你只会接受来自他的下次伤害';
                                    }else{
                                        return '你还没有被人攻击过';
                                    }
                                },
                            },
                            trigger: {
                                player: "damageBegin",
                            },
                            direct: true,
                            filter: function(event, player) {
                                return !!event.source;
                            },
                            content: function() {
                                var attacter = trigger.source;
                                var lastAttacter = player.storage.zhongyin1;
                                player.storage.zhongyin1=trigger.source;
                                game.addVideo('storage', player, ['zhongyin1', player.storage.zhongyin1]);
                                player.updateMarks();
                                if(lastAttacter && lastAttacter!=attacter){
                                    player.logSkill('zhongyin1');
                                    player.draw();
                                    trigger.untrigger();
                                    trigger.finish();
                                    event.finish();
                                }
                            },
                            priority: 0,
                        },
                        zhongyin2: {
                            trigger:{
                                source:"damageBegin",
                            },
                            filter:function (event){
                                return event.card&&(event.card.name=='juedou'||event.card.name=='sha');
                            },
                            forced:true,
                            content:function (){
                                player.recover();
                            },
                        },
                        zuoyou1: {
                            trigger:{
                                source:"damageBegin",
                            },
                            filter:function (event){
                                return true;
                            },
                            forced:true,
                            content:function (){
                                if(trigger.player.storage.zuoyou2){
                                    trigger.num+=trigger.player.storage.zuoyou2;
                                }else{
                                    trigger.player.storage.zuoyou2 = 0;
                                }
                                trigger.num+=player.storage.zuoyou4;
                                trigger.player.storage.zuoyou2++;
                                game.addVideo('storage', trigger.player, ['zuoyou2', trigger.player.storage.zuoyou2]);
                                trigger.player.markSkill('zuoyou2');
                            },
                        },
                        zuoyou2: {
                            mark: true,
                            intro: {
                                content: function(storage) {
                                    return '你的身体被不断瓦解，受到来自机械师的伤害增加'+storage+'点。';
                                },
                            },
                        },
                        
                        zuoyou3:{
                            trigger:{player: "damageBegin"},
                            mark: true,
                            init: function(player){
                                player.storage.zuoyou3 = 2;
                                game.addVideo('storage', player, ['zuoyou3', player.storage.zuoyou3]);
                                player.markSkill('zuoyou3');
                            },
                            intro: {
                                content: function(storage) {
                                    if(storage)
                                        return '你的护盾还可以保护你'+storage+'次。';
                                    else
                                        return '你的护盾已经消耗殆尽。';
                                },
                            },
                            filter:function (event,player){
                                return player.storage.zuoyou3>0;
                            },
                            check:function(event,player){
                                if(event.num>=player.hp) return true;
                                var ret = 0;
                                if(player.isLinked()) ret++;
                                if(player.isTurnedOver()) ret++;
                                ret+=event.num;
                                return ret>1;
                            },
                            content:function(){
                                game.playSe('renwang_skill', 'skill');
                                player.storage.zuoyou3--;
                                game.addVideo('storage', player, ['zuoyou3', player.storage.zuoyou3]);
                                player.markSkill('zuoyou3');
                                player.logSkill('zuoyou3');
                                if(player.isLinked()) player.link();
                                if(player.isTurnedOver()) player.turnOver();
                                player.discard(player.getCards('j'));
                                trigger.untrigger();
                                trigger.finish();
                                event.finish();
                            }
                        },
                        zuoyou4:{
                            trigger:{source:'dieAfter'},
                            force:true,
                            direct:true,
                            mark: true,
                            init: function(player){
                                player.storage.zuoyou4 = 0;
                                game.addVideo('storage', player, ['zuoyou4', player.storage.zuoyou4]);
                                player.markSkill('zuoyou4');
                            },
                            intro: {
                                content: function(storage) {
                                    if(storage)
                                        return '你的装甲现在更加强大了，造成的伤害增加'+storage+'点。';
                                    else
                                        return '你的装甲还需要材料来强化。';
                                },
                            },
                            content:function(){
                                game.playSe('zuoyouSkill1');
                                player.storage.zuoyou4++;
                                player.storage.zuoyou3++;
                                game.addVideo('storage', player, ['zuoyou4', player.storage.zuoyou4]);
                                player.markSkill('zuoyou4');
                            }
                        },
                    },
                    translate:{
                        dan_rixianga:"日向创",
                        dan_rixiangb:"日向创",
                        dan_monokuma:"黑白熊",
                        dan_biangu:"边谷山佩子",
                        dan_zhaorinai:"朝日奈",
                        dan_wuqie:"雾切响子",
                        dan_zuimu:"罪木蜜柑",
                        dan_sonia:"索妮娅",
                        dan_dunzi:"江岛盾子",
                        dan_qihai:"七海千秋",
                        dan_bozhi:"狛枝凪斗",
                        dan_kamukura:"神座出流",
                        dan_jiutoulong:"九头龙",
                        dan_lingtian:"澪田唯吹",
                        dan_tumei:"兔美",
                        dan_erdaa:"二大猫丸",
                        dan_erdab:"二大猫丸",
                        dan_huacun:"花村辉辉",
                        dan_nuller:"？？？",
                        dan_tianzhong:"田中眼蛇梦",
                        dan_xiaoquan:"小泉真昼",
                        dan_xiyuansi:"西园寺日寄子",
                        dan_zhongyin:"终里赤音",
                        dan_zuoyou:"左右田和一",

                        shenzuo2: "完美",
                        shenzuo2_info: "你每回合所受伤害不能超过1，体力流失、受伤、武将翻面、连锁、技能剥夺、混乱、即死、增减益效果、强制变身对你无效同时使你摸两张牌并对一名随机敌对武将造成体力值一半的伤害，你的抽牌和体力回复以及受伤都不触发任何效果，濒死时若场上其他角色装备区和手牌数量不为零或者存在体力值大于1的角色时，你拒绝死亡并恢复全部体力。",
                        shenzuo1: "巅峰",
                        shenzuo1_info: "你受众多才能眷顾，你对角色造成伤害时，伤害值不会小于目标当前体力值的一半，若目标体力值无限，可以使伤害为0并使该角色体力值变为1。你不能成为杀的目标，你出牌无视距离，手牌没有上限，出牌可以额外指定1个目标。抽牌时抽双倍数量的牌。",
                        sonia2: "国恨",
                        sonia2_info: "限定技，当你死亡时，场上所有其他死亡角色复活并回复1点体力，阵营转变成与你同样的阵营。为主公时你可免疫这次死亡。",
                        sonia1: "王权",
                        sonia1_info: "在你需要打出一张闪时你可以向所有其他玩家征用闪，每有一名玩家交给你闪，则对使你出闪的来源造成1点伤害。",
                        bozhi1: "幸运",
                        bozhi1_info: "锁定技，受到伤害时有几率减少1点伤害，抽牌时有几率多抽1张牌，对角色造成伤害时有几率使伤害+1，回复体力时有概率使恢复量+1，被锦囊牌作为目标时有几率使其无效化。以上效果均可多重触发,此外你因为牌的效果进行判定时，判定结果往往会对你有利。",
                        bozhi2: "戏命",
                        bozhi2_info: "你可以将任何手牌当【闪电】打出。",
                        dunzi1: "绝望",
                        dunzi1_info: "锁定技，场上角色失去卡就会受到1点伤害，你则是得到等量的回复。同时，若此时场上有角色体力上限超过你，你的体力上限会等同于该角色，同时恢复你增长的上限相同的体力。此外，你的出牌无视距离。",
                        rixiang1: "未来",
                        rixiang1_info: "锁定技，当你受到伤害时，若手中无手牌，则减轻1点伤害，若有手牌，则场上所有体力值大于1的角色都减少1点体力上限并受到1点伤害。你的手牌没有上限。",
                        rixiang2: "言弹",
                        rixiang2_info: "出牌阶段使用，当手牌数超过体力时，丢弃所有手牌，选择一名你可以出杀的角色对其出杀若干次，次数为你丢弃牌数量除以体力值。",
                        qihai2: "游戏",
                        qihai2_info: "你的杀可以作为桃使用，你的装备牌可以作为无懈可击使用。此外，你使用酒将强制视为对某个角色使用无中生有，可以以自己为目标。",
                        qihai3: "闪光",
                        qihai3_info: "濒死时，你做一次判定，若为杀，你选择一名角色使其回复全部的体力值并抽5张牌，同时把此技能转移给该角色;若不是杀，你免疫这次死亡并获得判定牌。",
                        qihai1: "天使",
                        qihai1_info: "你默认不能出杀和装备牌，当有角色产生回复效果时，你可以选择让所有角色共享回复效果。你的杀和装备牌在弃牌阶段不计手牌数量。",
                        rixiang3: "星火",
                        rixiang3_info: "觉醒技，濒死时你强制发动一次言弹效果，同时意志觉醒恢复全部体力并摸4张牌。",
                        zuimu1: "护理",
                        zuimu1_info: "回合结束时你可以指定一名角色，清除其注射毒印记，到下次你的回合结束时若该角色没有受伤，其回复1点体力，并且在此期间其享受注射的正面效果。",
                        zuimu2: "注射",
                        zuimu2_info: "你对其他角色造成伤害，或者其他角色对你造成伤害，都会给该角色附加一层毒印记，印记到3层时该角色的标记引爆，对其造成2点伤害，对其周围两名角色造成1点伤害，若影响到你自己，则伤害变为恢复体力。",
                        zuimu3: "注射",
                        zuimu3_info: "你已被注射毒素。",
                        biangu1: "拔刀",
                        biangu1_info: "当任何角色被指定为杀的目标时，你可以对出杀者无视距离地打出一张杀，并无效化对方的杀。此外，你的杀不计入手牌数量。",
                        biangu2: "洞察",
                        biangu2_info: "你的回合开始时，你会随机的发现场上两名角色的弱点，攻击这些目标时伤害翻倍，这些角色出杀时你可以选择无效化其出杀并获得这张杀。",
                        biangu3: "破绽",
                        biangu3_info: "你的破绽已经被人发现。",
                        rixiang4: "论破",
                        rixiang4_info: '除你以外的角色打出一张牌时，你可以弃置2张牌，使其无效化。<span class="bluetext" style="color:#FF6500">你可以在此处关闭自动发动使技能不询问</span>',
                        monokuma1: "替罪",
                        monokuma1_info: "每次抽牌阶段你获得一次机会，任意角色受伤时，你可以选择其以外的另一名角色，让后者为前者承担伤害，同时前者必须选择与受到伤害等量的牌移交给后者。若你选择自己为别人顶罪，则触发【漏洞】。",
                        monokuma2: "假死",
                        monokuma2_info: "抽牌阶段结束后，你可以选择进入假死状态，跳过出牌阶段弃牌阶段以及下回合的抽牌阶段，直到下回合出牌阶段为止，你不会受到伤害，不会被弃牌并且不会接受牌的效果。",
                        monokuma3: "黑幕",
                        monokuma3_info: "",
                        monokuma4: "死亡",
                        monokuma4_info: "",
                        monokuma5: "漏洞",
                        monokuma5_info: "限定技，你的体力值无限，若有角色死亡，你的体力变为6点。",
                        zhaorinai1: "元气",
                        zhaorinai1_info: "每次出牌阶段，你可以选择给任意名角色增加或撤销【援】印记，印记存在期间，你将为这些目标承担伤害，同时享受这些目标的回复效果。",
                        zhaorinai2: "援护",
                        zhaorinai2_info: "",
                        zhaorinai3: "倔强",
                        zhaorinai3_info: "锁定技，你出杀时可以额外指定X名角色为目标，进攻距离+X，X等同于你援护的角色数量。",
                        wuqie1: "清晰",
                        wuqie1_info: "每回合一次，你可以弃置一张手牌，选择一名角色查看其手牌，如果这些牌里有与你弃置的牌名字相同的牌，你可以选择获得其中两张牌，或不获得牌对其造成1点伤害，并对其施加【崩溃】标记，直到下次你的回合开始前，该角色不能回复体力值。",
                        wuqie2: "击破",
                        wuqie2_info: "锁定技，被指定为牌的目标时，如果你手牌里有相同名字的牌，你可以选择无效化这张牌。",
                        wuqie3: "崩溃",
                        wuqie3_info: "",
                        jiutoulong1: "斩手",
                        jiutoulong1_info: "场上角色在弃牌阶段若有弃牌，你可以令其受到1点伤害。",
                        jiutoulong2: "极道",
                        jiutoulong2_info: "出牌阶段限1次，你可以弃置所有手牌，并将自己翻面，指定一个目标，从你开始场上所有角色依次与其进行决斗，直到其体力值为1。",
                        lingtian1: "魔音",
                        lingtian1_info: "锁定技，除你以外的所有人无法回复生命值，变为摸回复的生命值等量的牌。",
                        lingtian2: "轻语",
                        lingtian2_info: "锁定技，除你以外所有角色打出一张牌时，需先进行一次判定，若判定牌数字超过10，使打出的牌失效。",
                        shenzuo3: "压制",
                        shenzuo3_info: "场上体力值超过你体力值的角色回复体力时，你可以将其变为生命流失，并且你摸两张牌。",
                        tumei1: "救赎",
                        tumei1_info: "使用2张桃或者杀，复活一名已死武将，恢复其2点体力并摸两张牌,同时使你自己的武将牌翻面。",
                        tumei2: "牺牲",
                        tumei2_info: "出牌阶段，你可以摸一张牌，并令一名角色反面，自己同时翻面。",
                        tumei3: "隐藏",
                        tumei3_info: "锁定技，当你处于翻面或者被连接状态时，受到的伤害-1。",
                        shenzuo4: "盖天",
                        shenzuo4_info: "任意一名角色的判定生效前，你可以选择让这张牌变成任意数字和颜色，此结果无法被再次更改。此外，你出杀时弃置目标所有装备牌。",
                        erda1: "怪力",
                        erda1_info: "你的【杀】或【决斗】对角色造成伤害时，若目标没有防具，此伤害+1，若目标没有手牌，此伤害再+1（有装备没有手牌也+1）。",
                        erda2: "再战",
                        erda2_info: "当你死亡时，变身为机械二大。",
                        erda3: "超载",
                        erda3_info: "你死亡时选择对一名角色造成足以致死的伤害，且不会触发技能效果。",
                        huacun1: "绝味",
                        huacun1_info: "锁定技，你的桃额外恢复1点体力，并且同时拥有酒的效果。",
                        huacun2: "烹饪",
                        huacun2_info: "你的回合结束时会获得x枚【美食】标记，你可以弃置2枚【美食】标记和一张手牌视为使用一张桃。x为你已损失的体力值。",
                        huacun3: "美食",
                        huacun3_info: "",
                        huacun4: "快刀",
                        huacun4_info: "锁定技，当你于回合外失去手牌时，你获得一枚【美食】标记。",
                        nuller1: "伪装",
                        nuller1_info: "每回合一次，你可以指定一个目标，直至下次你发动这个技能为止，该目标不能对你出牌，你或目标受到伤害时进行一次判定，如果是红色则本次伤害由你承担，若为黑色则由目标承担。",
                        nuller2: "欺诈",
                        nuller2_info: "锁定技，你的进攻距离会跟正常进攻距离相反，在你的回合结束时，你可以交给一名角色任意张牌，并摸等量的牌。",
                        nuller3: "伪装",
                        nuller3_info: "",
                        nuller4: "神秘",
                        nuller4_info: "出牌阶段限1次，你可以与一名场上的其他角色交换位置。",
                        tianzhong1: "御兽",
                        tianzhong1_info: "锁定技，任何角色使用进攻/防御马时，会视为给你装备。",
                        tianzhong2: "禁术",
                        tianzhong2_info: "出牌阶段，你可以将手牌或者装备区的马当做决斗使用。",
                        tianzhong3: "黑暗",
                        tianzhong3_info: "你造成伤害时，可以使伤害来源算作目标自身，如果目标有手牌，你可以使其选择交给你一张牌或者使本次伤害+1。",
                        xiaoquan1: "底片",
                        xiaoquan1_info: "出牌阶段限一次，选择一名角色帮他拍照，直到下次你的回合开始，由该角色发起的效果需要其他角色打出闪时，视为强制出闪。",
                        xiaoquan2: "瞎了",
                        xiaoquan2_info: "",
                        xiaoquan3: "坚强",
                        xiaoquan3_info: "锁定技，你的手牌不会少于你的体力值。",
                        xiyuansi1: "翩翩",
                        xiyuansi1_info: "锁定技，当你需要打出一张【闪】时，进行一次判定，若为黑色，视为你打出一张闪，并对效果来源使用一张乐不思蜀。",
                        xiyuansi2: "甩袖",
                        xiyuansi2_info: "锁定技，你不会受到没有来源和与你距离1以外的角色造成的伤害。",
                        zhongyin1: "矫健",
                        zhongyin1_info: "锁定技，当你受到伤害时获得一枚标记，若本次获得的标记与上一次的标记不同，免疫这次伤害并摸一张牌。",
                        zhongyin2: "嗜血",
                        zhongyin2_info: "锁定技，你的【杀】和【决斗】造成的伤害会使你获得等量的回复。",
                        zuoyou1: "瓦解",
                        zuoyou1_info: "锁定技，你造成伤害时，对受伤角色附加一枚【解】标记，目标每有一枚【解】标记，受到来自你的伤害+1。",
                        zuoyou2: "解体",
                        zuoyou2_info: "",
                        zuoyou3: "装甲",
                        zuoyou3_info: "游戏开始时，你获得2枚【装甲】印记，你受到伤害时，你可以弃置一张【装甲】使伤害无效化，移除你的翻面和连锁状态，以及判定区所有牌。",
                        zuoyou4: "回收",
                        zuoyou4_info: "锁定技，每杀死一名角色，你的基础伤害+1，并获得1枚【装甲】印记。",

                        dan: "弹",
                        danColor: '#FF6500',
                    },
                };
                if(lib.device||lib.node){
                	for(var i in danganPack.character){danganPack.character[i][4].push('ext:弹丸杀/'+i+'.jpg');}
                }else{
					for(var i in danganPack.character){danganPack.character[i][4].push('db:extension-弹丸杀:'+i+'.jpg');}
                }
                return danganPack;
            });
            lib.config.all.characters.push('dangan');
            if(!lib.config.characters.contains('dangan')){
                lib.config.characters.push('dangan');
            }
            lib.translate['dangan_character_config'] = '弹丸杀';
            lib.arenaReady.push(function(){
				lib.rank.s.push('dan_kamukura');
				lib.rank.s.push('dan_dunzi');
				lib.rank.ap.push('dan_monokuma');
				lib.rank.ap.push('dan_rixiangb');
				lib.rank.a.push('dan_bozhi');
				lib.rank.a.push('dan_rixianga');
				lib.rank.a.push('dan_biangu');
				lib.rank.a.push('dan_zuoyou');
				lib.rank.a.push('dan_xiaoquan');
				lib.rank.am.push('dan_xiyuansi');
				lib.rank.am.push('dan_zhongyin');
				lib.rank.am.push('dan_erdaa');
				lib.rank.am.push('dan_erdab');
	            lib.rank.am.push('dan_nuller');
	            lib.rank.am.push('dan_huacun');
	            lib.rank.am.push('dan_tianzhong');
	            lib.rank.am.push('dan_lingtian');
	            lib.rank.am.push('dan_zhaorinai');
	            lib.rank.am.push('dan_wuqie');
	            lib.rank.am.push('dan_zuimu');
	            lib.rank.am.push('dan_sonia');
	            lib.rank.am.push('dan_jiutoulong');
	            lib.rank.bp.push('dan_qihai');
	 			lib.rank.bp.push('dan_tumei');
			});
        }
    },
    help: { '弹丸杀':'<ul><li>♥超级弹丸论破游戏登场人物乱入无名杀世界♥'+
        '<li>★支持在联机模式使用★'},
    config: {
        "view_as_boss": {
            "name": "所有弹丸武将视为Boss",
            "init": false
        },
        "normalize": {
            "name": "普通化弹丸武将",
            "init": false
        }
    },
    package: {
    },
    files: {
        "character": ["dan_biangu.jpg","dan_bozhi.jpg","dan_dunzi.jpg","dan_jiutoulong.jpg","dan_kamukura.jpg","dan_lingtian.jpg","dan_monokuma.jpg","dan_qihai.jpg","dan_rixianga.jpg","dan_rixiangb.jpg","dan_sonia.jpg","dan_tumei.jpg","dan_wuqie.jpg","dan_zhaorinai.jpg","dan_zuimu.jpg","dan_erdaa.jpg","dan_erdab.jpg","dan_huacun.jpg","dan_nuller.jpg","dan_tianzhong.jpg","dan_xiaoquan.jpg","dan_xiyuansi.jpg","dan_zhongyin.jpg","dan_zuoyou.jpg"],
        "card": [],
        "skill": []
    },
    editable : false
});