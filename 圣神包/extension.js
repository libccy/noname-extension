game.import("extension", function (lib, game, ui, get, ai, _status) {
    return {
        name: "圣神包",
        editable: false,
        content: function (config, pack) {
            lib.skill._圣神_dieaudio = {
                trigger: {
                    global: 'dieBegin',
                },
                //direct:true,
                priority: 2,
                forced: true,
                unique: true,
                frequent: true,
                /*filter:function (event,player){
                return !event.player.isAlive();
                },*/
                content: function () {
                    game.playAudio('..', 'extension', '圣神包', trigger.player.name);
                },
            }
        },
        precontent: function () {

        }, help: {}, config: {}, package: {
            character: {
                character: {
                    "圣神_caopix": ["male", "shen", 4, ["圣_faze", "圣_fangzhu", "圣_xingshang", "圣_songwei"], ["des:\"真希望圣光能够洗涤我的灵魂，让我忘却那段手足相残的阴暗经历\" -- 神曹丕</br> </br>攻击：★★☆☆☆ </br>防御：★★★☆☆ </br>过牌：★★★★☆</br> 辅助：★★★★☆</br>定位：主公 </br>特点：专属被动技能效果、死人有收益、受伤能翻面弃牌</br>缺点：偏向辅助，比较被动，没有什么主动进攻的手段"]],
                    "圣神_caoruix": ["male", "shen", 4, ["圣_faze", "圣_huituo", "圣_xingshuai", "圣_mingjian"], ["des:\"父皇，没想到，我居然还能见到你……\"--神曹叡</br> </br>攻击：★★★☆☆ </br>防御：★★★☆☆ </br>过牌：★★★★☆ </br>辅助：★★★★★</br>定位：内奸 </br>特点：高额防御、灵活过牌增幅、全面控场 </br>缺点：单体进攻能力差，容易误伤友军或给大量敌方武将恢复状态"]],
                    "圣神_mihengx": ["male", "shen", 4, ["圣_faze", "圣_kuangwang", "圣_jieao", "圣_shejian"], ["des:“这大千世界，竟无一处不被混沌所充斥”——神祢衡 </br> </br>攻击：★★★★★ </br>防御：★☆☆☆☆ </br>过牌：★★★★★ </br>辅助：★★☆☆☆</br>定位：反贼</br>特点：高额爆发、稳定输出</br>缺点：防御力差，怕卡距离"]],
                    "圣神_liuchenx": ["male", "shen", 4, ["圣_faze", "圣_zhanjue", "圣_qinjin", "圣_ziwen"], ["des:“我从来没有为当时的决定而后悔过。宁可战死于人前，绝不屈服于人下”——神刘谌 </br> </br>攻击：★★★★☆ </br>防御：★★★☆☆ </br>过牌：★★★☆☆ </br>辅助：☆☆☆☆☆</br>定位：主公 </br>特点：持续输出、觉醒后高额爆发 </br>缺点：血量和牌数是硬伤"]],
                    "圣神_caiwenjix": ["female", "shen", 4, ["圣_faze", "圣_lige", "圣_bingxin", "圣_qianying"], ["des:“心如寒玉，泪如冰”——神文姬 </br> </br>攻击：★☆☆☆☆ </br>防御：★★★★☆ </br>过牌：☆☆☆☆☆ </br>辅助：★★★★★</br>定位：忠臣 </br>特点：专属被动技能效果、高额补给、基本稳定免死效果 </br>缺点：频繁释放技能需大量牌数支撑，很容易成为集火目标"]],
                    "圣神_huangyueyingx": ["female", "shen", 4, ["圣_faze", "圣_mocai", "圣_linglong", "圣_jiqiao"], ["des:“天工巧器，皆可为我所用”——神月英 </br> </br>攻击：★★★★☆ </br>防御：★★★☆☆ </br>过牌：★★★★☆ </br>辅助：☆☆☆☆☆</br>定位：反贼 </br>特点：拥有锦囊和装备便可创造无限可能 </br>缺点：虽然技能很实用并且很强，但所需求的锦囊与装备在牌堆中的数量远远不及普通牌"]],
                    "圣神_zhugeliangx": ["male", "shen", 4, ["圣_faze", "圣_qixing", "圣_bagua", "圣_jinnang"], ["des:“巧用锦囊妙计，方可一招制敌”——神卧龙 </br> </br>攻击：★★★☆☆ </br>防御：★★★☆☆ </br>过牌：★★★★☆ </br>辅助：★★★★☆</br>定位：反贼 </br>特点：开局高额优势、有输出有防御 </br>缺点：巧用锦囊，也需巧控牌数"]],
                    "圣神_guanyinpingx": ["female", "shen", 4, ["圣_faze", "圣_xueji", "圣_huxiao", "圣_hunji"], ["des:“这炙热的鲜血，便是结束你生命的烈焰”——神银屏 </br> </br>攻击：★★★★☆ </br>防御：★★☆☆☆ </br>过牌：★★★★★ </br>辅助：☆☆☆☆☆</br>定位：反贼 </br>特点：强命换取buff增幅、无牌限制爆炸输出，觉醒后稳定武器或恢复 </br>缺点：防御略低，若简易触发技能需卖血"]],
                    "圣神_diaochanx": ["female", "shen", 4, ["圣_faze", "圣_fengwu", "圣_tianzi", "圣_yueying"], ["des:“月影，自独舞；冷眼，观乱世”——神貂蝉 </br> </br>攻击：★★★☆☆ </br>防御：★★★★☆ </br>过牌：★★☆☆☆ </br>辅助：★★★☆☆</br>定位：内奸 </br>特点：扰乱敌方角色、自身稳定恢复 </br>缺点：耗牌量大"]],
                    "圣神_jiangweix": ["male", "shen", 4, ["圣_faze", "圣_tiaoxin", "圣_youlin", "圣_longyi"], ["des:“丞相，您的遗志，维，尽力了！”——神姜维 </br> </br>攻击：★★★★☆ </br>防御：★★★☆☆ </br>过牌：★★☆☆☆ </br>辅助：★★☆☆☆ </br>定位：内奸 </br>特点：稳定拆牌、稳定收益、觉醒后爆发和防御均升华 </br>缺点：太依赖卡牌"]],
                    "圣神_lvbux": ["male", "shen", 4, ["圣_faze", "圣_wushuang", "圣_nuhun", "圣_shenfen"], ["des:“凡人们，颤抖吧，我将为你们划上人生的句号”——神吕布  </br>  </br>攻击：★★★★★ </br>防御：★★★☆☆ </br>过牌：☆☆☆☆☆ </br>辅助：☆☆☆☆☆ </br>定位：反贼 </br>特点：多杀多决斗、血量优势、觉醒后快速清场 </br>缺点：血量上限可以视为血量，既是优势，也是劣势"]],
                    "圣神_zhugedanx": ["male", "shen", 4, ["圣_gongao", "圣_juyi"], ["des:“为了日后充斥光明的未来，必须接受黑暗肮脏的现在”——神诸葛诞  </br>  </br>攻击：★★☆☆☆ </br>防御：★★★☆☆ </br>过牌：★★★★☆ </br>辅助：☆☆☆☆☆ </br>定位：内奸 </br>特点：鹬蚌相争，渔翁得利。随着时间的推移，实力越来越强</br>缺点：怕被集火，如果没有机会觉醒，也就没有未来"]],
                    "圣神_jiaxux": ["male", "shen", 4, ["圣_luanshi", "圣_weimu", "圣_wansha"], ["des:“南斗掌生，北斗主死。我若杀你，就好比碾死一只蚂蚁”——神贾诩  </br>  </br>攻击：★★★☆☆ </br>防御：★★★★☆ </br>过牌：★★★☆☆ </br>辅助：☆☆☆☆☆ </br>定位：反贼 </br>特点：稳定群伤、稳定杀人，死人高额收益，高额防御力 </br>缺点：无差别群伤有时候会瞬间转换双方之间的优劣势"]],
                    "圣神_zhugeguox": ["female", "shen", 4, ["圣_faze", "圣_qirang", "圣_yuhua", "圣_xianjia"], ["des:“三界之事，与吾仙者无交集”——神诸葛果 </br> </br>攻击：★★☆☆☆ </br>防御：★★★★☆ </br>过牌：★★★☆☆ </br>辅助：★★☆☆☆</br>定位：主公 </br>特点：锦囊与装备互换，以一换N收益、独特的屯牌与持甲效果 ，防御能力持续上升</br>缺点：无主动进攻手段，辅助能力为零，孤军奋战时自身会很危险"]],
                    "圣神_boss_zhaoyunx": ["male", "shen", 4, ["圣_faze", "圣_longao", "圣_longfen", "圣_longlin", "圣_longyu"], ["boss", "forbidai", "bossallowed"], "qun"],
                    "圣神_zhangxingcaix": ["female", "shen", 4, ["圣_faze", "圣_qiangwu", "圣_fengxiang", "圣_shenxian"], ["des:“吾承父魂，踏碎天循”——神星彩 </br> </br>攻击：★★★★☆ </br>防御：★★☆☆☆ </br>过牌：★★★★☆ </br>辅助：★★☆☆☆</br>定位：反贼 </br>特点：独特的纳牌技巧，永不断【杀】、手中永远有牌的优势</br>缺点：1/2的概率技能，大部分时间还是要靠运气。没有防御能力，害怕爆发武将"]],
                    "圣神_zhaoyunx": ["male", "shen", 4, ["圣_faze", "圣_nijing", "圣_longhun", "圣_longying"], ["des:“要变天了，是时候回归圣神位了”——神赵云 </br> </br>攻击：★★★☆☆ </br>防御：★★★☆☆ </br>过牌：★★★☆☆ </br>辅助：★★★☆☆</br>定位：反贼 </br>特点：高额牌量与使用效果，技能连贯释放可无损做出他人无法比拟的逆天效果</br>缺点：非常的依靠牌运与对卡牌的掌控"]],
                    "圣神_xiahouyuanx": ["male", "shen", 4, ["圣_faze", "圣_shensu", "圣_leili", "圣_jixi"], ["des:“区区暗隐鼠辈，也配得你们如此大动干戈？”——神夏侯渊 </br> </br>攻击：★★★★★ </br>防御：☆☆☆☆☆ </br>过牌：★☆☆☆☆ </br>辅助：☆☆☆☆☆</br>定位：反贼 </br>特点：回合内无损三刀稳定爆炸输出，回合外翻面摸牌追加伤害</br>缺点：毫无任何防御手段，无法使用【杀】也注定了与连弩清场无缘。也需合理利用技能，若翻不回来则会浪费大把的输出能力"]],
                    "圣神_guojiax": ["male", "shen", 4, ["圣_faze", "圣_tiance", "圣_shenmou", "圣_zhilue"], ["des:“吾虽知天机，惜亦不可言”——神郭嘉 </br> </br>攻击：★★☆☆☆ </br>防御：★★★★☆ </br>过牌：★★★★☆ </br>辅助：★★★★☆</br>定位：忠臣 </br>特点：卖血获得并给予等值收益，两点以下的伤害基本无视，纳牌能力一流，存些锦囊牌后也拥有一定爆发</br>缺点：辅助圣神将，偏较于恢复，被菜刀将天克"]],
                    "圣神_guotupangjix": ["male", "shen", 4, ["圣_faze", "圣_jigong", "圣_dihui", "圣_shifei"], ["des:“倘若汝等尽力，何愁三界不安”——神郭逄 </br> </br>攻击：★★★☆☆ </br>防御：★★★☆☆ </br>过牌：★★★★★ </br>辅助：★☆☆☆☆</br>定位：反贼 </br>特点：高额过牌，控场被动技，每回合固定高收益</br>缺点：神郭逄并没有什么主动进攻的手段，但却需伤害点数，合理利用技能，无脑冲锋只会让自己身处绝境"]],
                    "圣神_zhangchunhuax": ["female", "shen", 4, ["圣_faze", "圣_jueqing", "圣_wuxin", "圣_shangshi"], ["des:“尘世间的冷暖，与我再无半点瓜葛”——神春华 </br> </br>攻击：★★★☆☆ </br>防御：★★★☆☆ </br>过牌：★★★★★ </br>辅助：★☆☆☆☆</br>定位：反贼 </br>特点：天克奶爸奶妈的绝情，高额过牌，无视卖血技能的真实伤害</br>缺点：无差别技能效果注定会导致队友一并中招，自己也需随时处于受伤状态才可触发技能"]],
                    "圣神_caojiex": ["female", "shen", 4, ["圣_faze", "圣_shouxi", "圣_yaze", "圣_huimin", "圣_zhixi"], ["des:“吾心与民共患难”——神曹节 </br> </br>攻击：★☆☆☆☆ </br>防御：★★★★☆ </br>过牌：★★★☆☆ </br>辅助：★★★★☆</br>定位：主公 </br>特点：专属斩杀系限定技能，受伤后免疫【杀】，恢复体力时可以令队友回血补牌 </br>缺点：使用【掷玺】后会失去【守玺】而使得神曹节的防御能力完全消失"]],
                    "圣神_suncex": ["male", "shen", 4, ["圣_faze", "圣_jiang", "圣_bawang", "圣_hunzi"], ["des:“吾终得与父亲共佑江东”——神孙策 </br> </br>攻击：★★★★☆ </br>防御：★★★☆☆ </br>过牌：★★★★★ </br>辅助：★★☆☆☆ </br>定位：主公 </br>特点：红牌无限摸、红杀无限用、逆境觉醒后瞬间升华 </br>缺点：血量上限一旦低于安全线就会出现各种危险问题"]],
                    "圣神_fushix": ["female", "shen", 4, ["圣_faze", "圣_huangkong", "圣_youjin", "圣_qiuyuan"], ["des:“神，应该饶恕那些无知的凡人，但魏国曹贼，无法饶恕”——神伏氏 </br> </br>攻击：★☆☆☆☆ </br>防御：★★★☆☆ </br>过牌：★★★☆☆ </br>辅助：★★★★★ </br>定位：内奸 </br>特点：拼点封牌、无视锦囊效果、卡牌转移高收益 </br>缺点：单体进攻能力差，因被动技能的存在，即使是使用【无懈可击】抵挡也会失去一点体力"]],
                    "圣神_lvmengx": ["male", "shen", 4, ["圣_faze", "圣_qianxin", "圣_zhengzhao", "圣_fanyin"], ["des:“忍一时风平浪静，若忍无可忍，那便无需再忍”——神吕蒙 </br> </br>攻击：★★★☆☆ </br>防御：★★★★★ </br>过牌：★★★☆☆ </br>辅助：☆☆☆☆☆ </br>定位：内奸 </br>特点：无限屯牌、觉醒后高额爆发 </br>缺点：太依靠卡牌"]],
                    "圣神_guanpingx": ["male", "shen", 4, ["圣_faze", "圣_longyin", "圣_longyix", "圣_rongzheng"], ["des:“父亲，儿愿随您护佑蜀汉”——神关平 </br> </br>攻击：★★★☆☆ </br>防御：★★☆☆☆</br>过牌：★★★★☆ </br>辅助：★★★★★</br>定位：忠臣 </br>特点：进可攻退可守，自带群体连弩，群体卡牌增幅，超高抗杀保护</br>缺点：怕断闪，因技能特性需注意局势合理使用"]],
                    "圣神_pangtongx": ["male", "shen", 4, ["圣_faze", "圣_huanyu", "圣_tianyu", "圣_niepan"], ["des:“水镜先生曾言，卧龙凤雏二者得一可安天下！现在，是时候出手了”——神庞统 </br> </br>攻击：★★★☆☆ </br>防御：★★★☆☆</br>过牌：★☆☆☆☆ </br>辅助：★★☆☆☆</br>定位：反贼 </br>特点：进可连环爆炸伤害，退可连环保佑平安，专属被动效果，铁索天狱静待炙炎</br>缺点：不分敌我的连环效果需要你谨慎选择技能效果，输赢尽在一念之间"]],
                    "圣神_xinxianyingx": ["female", "shen", 4, ["圣_faze", "圣_zhongjian", "圣_jianshu", "圣_caishi"], ["des:“世间纷乱，吾以明眸洞察；清哲独身，不为他人所牵”——神宪英 </br> </br>攻击：★★★☆☆ </br>防御：★★★★★ </br>过牌：★★★★☆ </br>辅助：☆☆☆☆☆</br>定位：主公 </br>特点：每回合稳定观牌，一牌多收益，防御能力超标 </br>缺点：同时暴露手牌的特点无法避免，才识带来收益的同时提供的负面效果也不容忽视，孤军奋战时异常疲惫"]],
                    "圣神_zhenjix": ["female", "shen", 4, ["圣_faze", "圣_luoshen", "圣_fanghua", "圣_xishui"], ["des:“你已不为帝，我已不为后，可为何你还是不肯忘却那些过往呢”——神甄姬 </br> </br>攻击：★☆☆☆☆ </br>防御：★★★★☆</br>过牌：★★★★☆ </br>辅助：★★☆☆☆</br>定位：反贼 </br>特点：准备阶段大量揽牌，运气差也可翻面控场，大部分时间皆无需担心被杀</br>缺点：魏国翻面武将异常之多，被动容易被他人利用或误伤友军"]],
                    "圣神_zhaoxiangx": ["female", "shen", 4, ["圣_faze", "圣_fanghun", "圣_fuhan"], ["des:“吾承父言，归隐山林，不问世事”——神赵襄 </br> </br>攻击：★★☆☆☆ </br>防御：★★☆☆☆</br>过牌：★☆☆☆☆ </br>辅助：☆☆☆☆☆</br>定位：内奸 </br>特点：攻守兼备，自带+-1坐骑，仅需造成伤害即可获得，觉醒后无上限血量蜀势力角色，高额绝境恢复</br>缺点：唯一出众的地方就在于觉醒技，娱乐圣神将，若是当做“赵襄”，那么可玩度便略低"]],
                    "圣神_simayix": ["male", "shen", 4, ["圣_faze", "圣_guicai", "圣_fankui", "圣_baiyin"], ["des:“智晓天地，谋定天下”——神司马懿 </br> </br>攻击：★★★☆☆ </br>防御：★★★☆☆</br>过牌：★★★★☆ </br>辅助：★★★☆☆</br>定位：内奸 </br>特点：觉醒前受伤拿牌，无损改判高收益，觉醒后全属性升华</br>缺点：觉醒条件略难，觉醒后无改判能力与收益，需把握局势合理选择是否觉醒"]],
                    "圣神_xiahoudunx": ["male", "shen", 4, ["圣_faze", "圣_ganglie", "圣_danmu", "圣_zhonghun"], ["des:“自诩高尚的圣神们，准备好接受弑神者的怒火了吗”——神夏侯惇 </br> </br>攻击：★★★☆☆ </br>防御：★★★★☆</br>过牌：★★★☆☆ </br>辅助：★★☆☆☆</br>定位：反贼 </br>特点：专属被动技能效果，免伤反击，逆境有时候可以瞬间拯救队友扭转残局</br>缺点：负收益被动技，武器的收益完全低于坐骑，虽可辅助但不动白的属性非常不适合做忠臣"]],
                    "圣神_liushanx": ["male", "shen", 4, ["圣_faze", "圣_xiangle", "圣_ruoyu", "圣_fangquan"], ["des:“纵使为神，也难逃最终的宿命”——神刘禅 </br> </br>攻击：★★☆☆☆ </br>防御：★★★★☆</br>过牌：★★☆☆☆ </br>辅助：★★★★★</br>定位：反贼 </br>特点：基本无视普通伤害的高防御，遂带卸甲，额外摸牌，给予他人额外回合，配合卖血队友效果极佳</br>缺点：辅助的硬伤--没有队友时发挥非常不佳，进攻能力很弱"]],
                    "圣神_huanggaix": ["male", "shen", 4, ["圣_faze", "圣_kurou", "圣_yanzhan", "圣_zhaxiang"], ["des:“焰血奋战，死亦无妨”——神黄盖 </br> </br>攻击：★★★★☆ </br>防御：★★☆☆☆</br>过牌：★★★★☆ </br>辅助：☆☆☆☆☆</br>定位：反贼 </br>特点：随时原地起爆的实力，稳定必中的攻击，以命搏命的手段</br>缺点：爆发很高，但是防御很低，回合外基本等于4血白"]],
                },
                translate: {
                    "圣神_caopix": "神曹丕",
                    "圣神_caoruix": "神曹叡",
                    "圣神_mihengx": "神祢衡",
                    "圣神_liuchenx": "神刘谌",
                    "圣神_caiwenjix": "神文姬",
                    "圣神_huangyueyingx": "神月英",
                    "圣神_zhugeliangx": "神卧龙",
                    "圣神_guanyinpingx": "神银屏",
                    "圣神_diaochanx": "神貂蝉",
                    "圣神_jiangweix": "神姜维",
                    "圣神_lvbux": "神吕布",
                    "圣神_zhugedanx": "神诸葛诞",
                    "圣神_jiaxux": "神贾诩",
                    "圣神_zhugeguox": "神诸葛果",
                    "圣神_boss_zhaoyunx": "金龙神",
                    "圣神_zhaoyunx": "神赵云",
                    "圣神_zhangxingcaix": "神星彩",
                    "圣神_xiahouyuanx": "神夏侯渊",
                    "圣神_guojiax": "神郭嘉",
                    "圣神_guotupangjix": "神郭逄",
                    "圣神_zhangchunhuax": "神春华",
                    "圣神_caojiex": "神曹节",
                    "圣神_suncex": "神孙策",
                    "圣神_fushix": "神伏氏",
                    "圣神_lvmengx": "神吕蒙",
                    "圣神_guanpingx": "神关平",
                    "圣神_pangtongx": "神庞统",
                    "圣神_xinxianyingx": "神宪英",
                    "圣神_zhenjix": "神甄姬",
                    "圣神_zhaoxiangx": "神赵襄",
                    "圣神_simayix": "神司马懿",
                    "圣神_xiahoudunx": "神夏侯惇",
                    "圣神_liushanx": "神刘禅",
                    "圣神_huanggaix": "神黄盖",
                },
            },
            card: {
                card: {
                    "shengqi_cxqf": {
                        type: "equip",
                        fullimage: true,
                        subtype: "equip1",
                        distance: {
                            attackFrom: -1,
                        },
                        skills: ["ssb_chixueqingfeng"],
                        nomod: true,
                        nopower: true,
                        unique: true,
                        ai: {
                            equipValue: 9,
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
                        filterTarget: function (card, player, target) {
                            return target == player;
                        },
                        modTarget: true,
                        allowMultiple: false,
                        content: function () {
                            target.equip(card);
                        },
                        toself: true,
                        image: "ext:圣神包/赤血青锋.jpg",
                    },
                    "shengqi_cyzhq": {
                        type: "equip",
                        fullimage: true,
                        subtype: "equip1",
                        distance: {
                            attackFrom: -4,
                        },
                        skills: ["ssb_chiyanzhenhunqin"],
                        nomod: true,
                        nopower: true,
                        unique: true,
                        ai: {
                            equipValue: 5,
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
                        filterTarget: function (card, player, target) {
                            return target == player;
                        },
                        modTarget: true,
                        allowMultiple: false,
                        content: function () {
                            target.equip(card);
                        },
                        toself: true,
                        image: "ext:圣神包/赤焰镇魂琴.jpg",
                    },
                    "shengqi_xwzm": {
                        type: "equip",
                        fullimage: true,
                        subtype: "equip5",
                        skills: ["ssb_xuwangzhimian"],
                        nomod: true,
                        nopower: true,
                        unique: true,
                        ai: {
                            equipValue: 9,
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
                        filterTarget: function (card, player, target) {
                            return target == player;
                        },
                        modTarget: true,
                        allowMultiple: false,
                        content: function () {
                            target.equip(card);
                        },
                        toself: true,
                        image: "ext:圣神包/虚妄之冕.jpg",
                    },
                    "shengqi_gfyp": {
                        type: "equip",
                        fullimage: true,
                        subtype: "equip2",
                        nomod: true,
                        nopower: true,
                        unique: true,
                        skills: ["ssb_guofengyupao"],
                        ai: {
                            equipValue: 9,
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
                        filterTarget: function (card, player, target) {
                            return target == player;
                        },
                        modTarget: true,
                        allowMultiple: false,
                        content: function () {
                            target.equip(card);
                        },
                        toself: true,
                        image: "ext:圣神包/国风玉袍.jpg",
                    },
                    "shengqi_jcjg": {
                        type: "equip",
                        fullimage: true,
                        subtype: "equip3",
                        skills: ["ssb_juechenjinge"],
                        nomod: true,
                        nopower: true,
                        unique: true,
                        ai: {
                            equipValue: 9,
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
                                equipValue: 7,
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
                        filterTarget: function (card, player, target) {
                            return target == player;
                        },
                        modTarget: true,
                        allowMultiple: false,
                        content: function () {
                            target.equip(card);
                        },
                        toself: true,
                        image: "ext:圣神包/绝尘金戈.jpg",
                    },
                    "shengqi_qmbg": {
                        type: "equip",
                        fullimage: true,
                        subtype: "equip2",
                        skills: ["ssb_qimenbagua"],
                        nomod: true,
                        nopower: true,
                        unique: true,
                        ai: {
                            equipValue: 9,
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
                        filterTarget: function (card, player, target) {
                            return target == player;
                        },
                        modTarget: true,
                        allowMultiple: false,
                        content: function () {
                            target.equip(card);
                        },
                        toself: true,
                        image: "ext:圣神包/奇门八卦.jpg",
                    },
                    "shengqi_xllyj": {
                        type: "equip",
                        fullimage: true,
                        subtype: "equip1",
                        distance: {
                            attackFrom: -3,
                        },
                        skills: ["ssb_xiuluolianyuji"],
                        nomod: true,
                        nopower: true,
                        unique: true,
                        ai: {
                            equipValue: 9,
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
                        filterTarget: function (card, player, target) {
                            return target == player;
                        },
                        modTarget: true,
                        allowMultiple: false,
                        content: function () {
                            target.equip(card);
                        },
                        toself: true,
                        image: "ext:圣神包/修罗炼狱戟.jpg",
                    },
                    "shengqi_qxp": {
                        type: "equip",
                        subtype: "equip2",
                        skills: ["ssb_qxp"],
                        nomod: true,
                        nopower: true,
                        unique: true,
                        ai: {
                            equipValue: 9,
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
                        filterTarget: function (card, player, target) {
                            return target == player;
                        },
                        modTarget: true,
                        allowMultiple: false,
                        content: function () {
                            target.equip(card);
                        },
                        toself: true,
                        image: "ext:圣神包/shengqi_qxp.jpg",
                        fullimage: true,
                    },
                    "shengqi_bhq": {
                        type: "equip",
                        subtype: "equip2",
                        nomod: true,
                        nopower: true,
                        unique: true,
                        skills: ["ssb_bhq"],
                        ai: {
                            equipValue: 9,
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
                        onLose: function () {
                            'step 0'
                            player.recover();
                            'step 1'
                            player.draw();
                        },
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
                        image: "ext:圣神包/shengqi_bhq.jpg",
                        fullimage: true,
                    },
                    "shengqi_xsmj": {
                        type: "equip",
                        subtype: "equip2",
                        nomod: true,
                        nopower: true,
                        unique: true,
                        skills: ["ssb_xsmj"],
                        ai: {
                            equipValue: 9,
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
                        filterTarget: function (card, player, target) {
                            return target == player;
                        },
                        modTarget: true,
                        allowMultiple: false,
                        content: function () {
                            target.equip(card);
                        },
                        toself: true,
                        image: "ext:圣神包/shengqi_xsmj.jpg",
                        fullskin: true,
                    },
                    "shengqi_jsg": {
                        type: "equip",
                        subtype: "equip1",
                        distance: {
                            attackFrom: -3,
                        },
                        skills: ["ssb_jsg"],
                        nomod: true,
                        nopower: true,
                        unique: true,
                        ai: {
                            equipValue: 9,
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
                        filterTarget: function (card, player, target) {
                            return target == player;
                        },
                        modTarget: true,
                        allowMultiple: false,
                        content: function () {
                            target.equip(card);
                        },
                        toself: true,
                        image: "ext:圣神包/shengqi_jsg.jpg",
                        fullimage: true,
                    },
                    "shengqi_myct": {
                        type: "equip",
                        fullimage: true,
                        subtype: "equip4",
                        skills: ["圣_mashu", "圣_feiying"],
                        nomod: true,
                        nopower: true,
                        unique: true,
                        ai: {
                            equipValue: 9,
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
                                equipValue: 7,
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
                        filterTarget: function (card, player, target) {
                            return target == player;
                        },
                        modTarget: true,
                        allowMultiple: false,
                        content: function () {
                            target.equip(card);
                        },
                        toself: true,
                        image: "ext:圣神包/shengqi_myct.jpg",
                    },
                    "shengqi_glzyd": {
                        type: "equip",
                        subtype: "equip1",
                        distance: {
                            attackFrom: -2,
                        },
                        skills: ["ssb_glzyd"],
                        nomod: true,
                        nopower: true,
                        unique: true,
                        ai: {
                            equipValue: 5,
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
                        filterTarget: function (card, player, target) {
                            return target == player;
                        },
                        modTarget: true,
                        allowMultiple: false,
                        content: function () {
                            target.equip(card);
                        },
                        toself: true,
                        image: "ext:圣神包/shengqi_glzyd.jpg",
                        fullimage: true,
                    },
                    "shengqi_yxj": {
                        type: "equip",
                        subtype: "equip1",
                        distance: {
                            attackFrom: -2,
                        },
                        skills: ["ssb_yxj"],
                        nomod: true,
                        nopower: true,
                        unique: true,
                        ai: {
                            equipValue: 5,
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
                        filterTarget: function (card, player, target) {
                            return target == player;
                        },
                        modTarget: true,
                        allowMultiple: false,
                        content: function () {
                            target.equip(card);
                        },
                        toself: true,
                        image: "ext:圣神包/shengqi_yxj.jpg",
                        fullskin: true,
                    },
                    "shengqi_bjjt": {
                        type: "equip",
                        fullimage: true,
                        subtype: "equip2",
                        nomod: true,
                        nopower: true,
                        unique: true,
                        skills: ["ssb_bjjt"],
                        ai: {
                            equipValue: 9,
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
                        filterTarget: function (card, player, target) {
                            return target == player;
                        },
                        modTarget: true,
                        allowMultiple: false,
                        content: function () {
                            target.equip(card);
                        },
                        toself: true,
                        image: "ext:圣神包/shengqi_bjjt.jpg",
                    },
                    "shengqi_gyct": {
                        type: "equip",
                        fullimage: true,
                        subtype: "equip4",
                        skills: ["ssb_gyct"],
                        nomod: true,
                        nopower: true,
                        unique: true,
                        ai: {
                            equipValue: 9,
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
                                equipValue: 7,
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
                        filterTarget: function (card, player, target) {
                            return target == player;
                        },
                        modTarget: true,
                        allowMultiple: false,
                        content: function () {
                            target.equip(card);
                        },
                        toself: true,
                        image: "ext:圣神包/shengqi_gyct.jpg",
                    },
                    "shengqi_wjzr": {
                        type: "equip",
                        subtype: "equip1",
                        distance: {
                            attackFrom: -2,
                        },
                        skills: ["ssb_wjzr"],
                        nomod: true,
                        nopower: true,
                        unique: true,
                        ai: {
                            equipValue: 5,
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
                        filterTarget: function (card, player, target) {
                            return target == player;
                        },
                        modTarget: true,
                        allowMultiple: false,
                        content: function () {
                            target.equip(card);
                        },
                        toself: true,
                        image: "ext:圣神包/shengqi_wjzr.png",
                        fullimage: true,
                    },
                    "shengqi_qiuniu": {
                        type: "equip",
                        fullimage: true,
                        subtype: "equip1",
                        distance: {
                            attackFrom: -3,
                        },
                        skills: ["ssb_qiuniu"],
                        nomod: true,
                        chongzhu: true,
                        nopower: true,
                        unique: true,
                        ai: {
                            equipValue: 5,
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
                        onLose: function () {
                            player.randomDiscard('h', true);
                        },
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
                        image: "ext:圣神包/shengqi_qiuniu.jpg",
                    },
                    "shengqi_suanni": {
                        type: "equip",
                        fullimage: true,
                        subtype: "equip2",
                        skills: ["ssb_suanni"],
                        nomod: true,
                        chongzhu: true,
                        nopower: true,
                        unique: true,
                        ai: {
                            equipValue: 9,
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
                        onLose: function () {
                            player.recover();
                        },
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
                        image: "ext:圣神包/shengqi_suanni.jpg",
                    },
                    "shengqi_chiwen": {
                        type: "equip",
                        subtype: "equip1",
                        distance: {
                            attackFrom: -2,
                        },
                        skills: ["ssb_chiwen"],
                        nomod: true,
                        chongzhu: true,
                        nopower: true,
                        unique: true,
                        ai: {
                            equipValue: 5,
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
                        filterTarget: function (card, player, target) {
                            return target == player;
                        },
                        modTarget: true,
                        allowMultiple: false,
                        content: function () {
                            target.equip(card);
                        },
                        toself: true,
                        image: "ext:圣神包/shengqi_chiwen.png",
                        fullimage: true,
                    },
                    "shengqi_yazi": {
                        type: "equip",
                        fullimage: true,
                        subtype: "equip2",
                        nomod: true,
                        chongzhu: true,
                        nopower: true,
                        unique: true,
                        skills: ["ssb_yazi"],
                        ai: {
                            equipValue: 9,
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
                        onLose: function () {
                            player.recover();
                        },
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
                        image: "ext:圣神包/shengqi_yazi.jpg",
                    },
                    "shengqi_chaofeng": {
                        type: "equip",
                        fullimage: true,
                        subtype: "equip3",
                        skills: ["ssb_chaofeng"],
                        nomod: true,
                        chongzhu: true,
                        nopower: true,
                        unique: true,
                        ai: {
                            equipValue: 9,
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
                                equipValue: 7,
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
                        onLose: function () {
                            player.randomDiscard('h', true);
                        },
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
                        image: "ext:圣神包/shengqi_chaofeng.jpg",
                    },
                    "shengqi_pulao": {
                        type: "equip",
                        fullimage: true,
                        subtype: "equip1",
                        distance: {
                            attackFrom: -2,
                        },
                        skills: ["ssb_pulao"],
                        nomod: true,
                        chongzhu: true,
                        nopower: true,
                        unique: true,
                        ai: {
                            equipValue: 9,
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
                        filterTarget: function (card, player, target) {
                            return target == player;
                        },
                        modTarget: true,
                        allowMultiple: false,
                        content: function () {
                            target.equip(card);
                        },
                        toself: true,
                        image: "ext:圣神包/shengqi_pulao.jpg",
                    },
                    "shengqi_bian": {
                        type: "equip",
                        fullimage: true,
                        subtype: "equip2",
                        nomod: true,
                        chongzhu: true,
                        nopower: true,
                        unique: true,
                        skills: ["ssb_bian"],
                        ai: {
                            equipValue: 9,
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
                        onLose: function () {
                            player.loseMaxHp();
                        },
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
                        image: "ext:圣神包/shengqi_bian.jpg",
                    },
                    "shengqi_fuxi": {
                        type: "equip",
                        fullimage: true,
                        subtype: "equip4",
                        skills: ["ssb_fuxi"],
                        nomod: true,
                        chongzhu: true,
                        nopower: true,
                        unique: true,
                        ai: {
                            equipValue: 9,
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
                                equipValue: 7,
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
                        onLose: function () {
                            player.randomDiscard('h', true);
                        },
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
                        image: "ext:圣神包/shengqi_fuxi.jpg",
                    },
                    "shengqi_bixi": {
                        type: "equip",
                        fullimage: true,
                        subtype: "equip2",
                        nomod: true,
                        nopower: true,
                        unique: true,
                        chongzhu: true,
                        skills: ["ssb_bixi"],
                        ai: {
                            equipValue: 9,
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
                        filterTarget: function (card, player, target) {
                            return target == player;
                        },
                        modTarget: true,
                        allowMultiple: false,
                        content: function () {
                            target.equip(card);
                        },
                        toself: true,
                        image: "ext:圣神包/shengqi_bixi.jpg",
                    },
                    "shengqi_bgj": {
                        type: "equip",
                        fullimage: true,
                        subtype: "equip2",
                        nomod: true,
                        nopower: true,
                        unique: true,
                        skills: ["ssb_bgj"],
                        ai: {
                            equipValue: 9,
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
                        filterTarget: function (card, player, target) {
                            return target == player;
                        },
                        modTarget: true,
                        allowMultiple: false,
                        content: function () {
                            target.equip(card);
                        },
                        toself: true,
                        image: "ext:圣神包/shengqi_bgj.jpg",
                    },
                    "shengqi_zhq": {
                        type: "equip",
                        subtype: "equip1",
                        distance: {
                            attackFrom: -4,
                        },
                        skills: ["ssb_zhq"],
                        nomod: true,
                        nopower: true,
                        unique: true,
                        ai: {
                            equipValue: 9,
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
                        filterTarget: function (card, player, target) {
                            return target == player;
                        },
                        modTarget: true,
                        allowMultiple: false,
                        content: function () {
                            target.equip(card);
                        },
                        toself: true,
                        image: "ext:圣神包/shengqi_zhq.jpg",
                        fullskin: true,
                    },
                    "shengqi_sgwsj": {
                        type: "equip",
                        fullimage: true,
                        subtype: "equip1",
                        distance: {
                            attackFrom: -3,
                        },
                        skills: ["ssb_sgwsj"],
                        nomod: true,
                        nopower: true,
                        unique: true,
                        ai: {
                            equipValue: 9,
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
                        filterTarget: function (card, player, target) {
                            return target == player;
                        },
                        modTarget: true,
                        allowMultiple: false,
                        content: function () {
                            target.equip(card);
                        },
                        toself: true,
                        image: "ext:圣神包/shengqi_sgwsj.jpg",
                    },
                    "shengqi_sglld": {
                        type: "equip",
                        fullimage: true,
                        subtype: "equip2",
                        nomod: true,
                        nopower: true,
                        unique: true,
                        skills: ["ssb_sgllg"],
                        ai: {
                            equipValue: 9,
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
                        filterTarget: function (card, player, target) {
                            return target == player;
                        },
                        modTarget: true,
                        allowMultiple: false,
                        content: function () {
                            target.equip(card);
                        },
                        toself: true,
                        image: "ext:圣神包/shengqi_sgllg.jpg",
                    },
                    "shengqi_glzydx": {
                        type: "equip",
                        fullimage: true,
                        subtype: "equip1",
                        distance: {
                            attackFrom: -2,
                        },
                        skills: ["ssb_guilongzhanyuedao"],
                        nomod: true,
                        nopower: true,
                        unique: true,
                        ai: {
                            equipValue: 9,
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
                        filterTarget: function (card, player, target) {
                            return target == player;
                        },
                        modTarget: true,
                        allowMultiple: false,
                        content: function () {
                            target.equip(card);
                        },
                        toself: true,
                        image: "ext:圣神包/鬼龙斩月刀.jpg",
                    },
                    "shengqi_yyfh": {
                        type: "equip",
                        fullimage: true,
                        subtype: "equip5",
                        skills: ["ssb_yyfh"],
                        nomod: true,
                        nopower: true,
                        unique: true,
                        ai: {
                            equipValue: 9,
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
                        filterTarget: function (card, player, target) {
                            return target == player;
                        },
                        modTarget: true,
                        allowMultiple: false,
                        content: function () {
                            target.equip(card);
                        },
                        toself: true,
                        image: "ext:圣神包/shengqi_yyfh.jpg",
                    },
                    "shengqi_swzw": {
                        type: "equip",
                        fullimage: true,
                        subtype: "equip1",
                        distance: {
                            attackFrom: -2,
                        },
                        skills: ["ssb_swzw"],
                        nomod: true,
                        nopower: true,
                        unique: true,
                        ai: {
                            equipValue: 5,
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
                        onLose: function () {
                            player.removeSkill('ssb_swzw_damage');
                            player.removeSkill('ssb_swzw_source');
                        },
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
                        image: "ext:圣神包/shengqi_swzw.jpg",
                    },
                },
                translate: {
                    "shengqi_cxqf": "赤血青锋",
                    "shengqi_cxqf_info": "◆你使用【杀】无视防具</br>◆在你使用【杀】结算完毕前，目标无法使用或打出任何卡牌",
                    "shengqi_cyzhq": "赤焰镇魂琴",
                    "shengqi_cyzhq_info": "◆你造成的伤害均视为火属性伤害",
                    "shengqi_xwzm": "虚妄之冕",
                    "shengqi_xwzm_info": "◆你的手牌上限-1</br>◆摸牌阶段，你额外摸两张牌",
                    "shengqi_gfyp": "国风玉袍",
                    "shengqi_gfyp_info": "◆你不能成为其他角色使用普通锦囊牌的目标",
                    "shengqi_jcjg": "绝尘金戈",
                    "shengqi_jcjg_info": "◆其他所有角色的防御距离+1",
                    "shengqi_qmbg": "奇门八卦",
                    "shengqi_qmbg_info": "◆其他角色使用的【杀】对你无效",
                    "shengqi_xllyj": "修罗炼狱戟",
                    "shengqi_xllyj_info": "◆你使用【杀】可以额外指定任意名攻击范围内的其他角色为目标</br>◆你使用【杀】造成的伤害+1，然后令受到伤害的角色恢复1点体力",
                    "shengqi_qxp": "七星袍",
                    "shengqi_qxp_info": "◆属性伤害对你无效",
                    "shengqi_bhq": "百花裙",
                    "shengqi_bhq_info": "◆当你失去此装备时，你恢复1点体力并摸1张牌</br>◆若你的体力值为1，则你免疫即将受到的任何伤害/失去体力",
                    "shengqi_xsmj": "邪神面具",
                    "shengqi_xsmj_info": "◆你不能被翻面</br>◆你受到的伤害始终-1",
                    "shengqi_jsg": "姬神弓",
                    "shengqi_jsg_info": "◆当你使用【杀】造成伤害后，你可以弃置目标的一张牌。若此牌为装备(不为宝物)，则你获得之",
                    "shengqi_myct": "梦魇赤兔",
                    "shengqi_myct_info": "◆你的进攻距离+1</br>◆你的防御距离+1",
                    "shengqi_glzyd": "鬼龙斩月刀",
                    "shengqi_glzyd_info": "◆你的卡牌花色均视为♥️",
                    "shengqi_yxj": "饮血剑",
                    "shengqi_yxj_info": "◆当你使用【杀】造成伤害后，若你已受伤，你恢复等量体力。否则你获得等量护甲",
                    "shengqi_bjjt": "暴君酒坛",
                    "shengqi_bjjt_info": "◆你可以将一张黑色牌当做【酒】使用",
                    "shengqi_gyct": "鬼影赤兔",
                    "shengqi_gyct_info": "◆你的进攻距离+1</br>◆你使用的【杀】需两张【闪】才可响应",
                    "shengqi_wjzr": "无尽之刃",
                    "shengqi_wjzr_info": "◆你使用【杀】有60%的几率产生暴击(伤害翻倍)",
                    "shengqi_qiuniu": "囚牛",
                    "shengqi_qiuniu_info": "◆乾：当你使用此装备时，你摸一张牌；当你失去此装备时，你随机弃置一张手牌</br>◆你可以重铸此装备</br>◆龙弦：你可以将一张红色牌当做【乐不思蜀】使用",
                    "shengqi_suanni": "狻猊",
                    "shengqi_suanni_info": "◆震：当你使用此装备时，你失去一点体力；当你失去此装备时，你恢复一点体力</br>◆你可以重铸此装备</br>◆龙镇：你可以将一张牌交给一名其他角色",
                    "shengqi_chiwen": "螭吻",
                    "shengqi_chiwen_info": "◆坤：使用此装备时，你获得一点“护甲”</br>◆你可以重铸此装备</br>◆龙鳌：每当你造成火属性伤害时，你恢复1点体力",
                    "shengqi_yazi": "睚眦",
                    "shengqi_yazi_info": "◆震：当你使用此装备时，你失去一点体力；当你失去此装备时，你恢复一点体力</br>◆你可以重铸此装备</br>◆龙烈：每当你受到其他角色对你造成的伤害时，你对伤害来源造成1点伤害",
                    "shengqi_chaofeng": "嘲风",
                    "shengqi_chaofeng_info": "◆乾：当你使用此装备时，你摸一张牌；当你失去此装备时，你随机弃置一张手牌</br>◆你可以重铸此装备</br>◆你的防御距离+1</br>◆龙鳞：每当你受到伤害时，你可以将伤害来源的一张装备牌立即置入你的装备区",
                    "shengqi_pulao": "蒲牢",
                    "shengqi_pulao_info": "◆使用此装备时，你获得一点护甲</br>◆你可以重铸此装备</br>◆龙吼：你造成的伤害均视为失去体力",
                    "shengqi_bian": "狴犴",
                    "shengqi_bian_info": "◆坎：当你使用此装备时，你增加一点体力值上限并恢复一点体力；当你失去此装备时，你失去一点体力上限</br>◆你可以重铸此装备</br>◆龙视：你的回合开始时，你失去一点体力；你不能成为其他角色使用卡牌的目标",
                    "shengqi_fuxi": "负屃",
                    "shengqi_fuxi_info": "◆乾：当你使用此装备时，你摸一张牌；当你失去此装备时，你随机弃置一张手牌</br>◆你可以重铸此装备</br>◆你的进攻距离+1</br>◆龙识：你的手牌上限-1；你可以额外使用1张【杀】",
                    "shengqi_bixi": "赑屃",
                    "shengqi_bixi_info": "◆使用此装备时，你获得一点护甲</br>◆你可以重铸此装备</br>◆龙玄：每当你受到伤害时，你摸两张牌",
                    "shengqi_bgj": "八卦镜",
                    "shengqi_bgj_info": "◆每当你需要打出一张【闪】时，你可以进行一次判定：若判定结果不为♠️，则视为你打出了一张【闪】",
                    "shengqi_zhq": "镇魂琴",
                    "shengqi_zhq_info": "◆你的【杀】均视为【雷杀】",
                    "shengqi_sgwsj": "神鬼无双戟",
                    "shengqi_sgwsj_info": "◆每当你使用【杀】即将造成伤害时，若你的体力值大于你体力值上限的一半，你可以令此伤害+1，然后你失去一点体力并摸一张牌",
                    "shengqi_sglld": "神鬼玲珑冠",
                    "shengqi_sglld_info": "◆每当一名其他角色的回合结束时，若该角色的当前体力值与你不相等，你恢复一点体力",
                    "shengqi_glzydx": "鬼龙斩月刀",
                    "shengqi_glzydx_info": "◆你使用的红色【杀】不能被【闪】响应",
                    "shengqi_yyfh": "焱羽凤凰",
                    "shengqi_yyfh_info": "◆焰狱：场上所有角色受到的伤害均视为火属性",
                    "shengqi_swzw": "死亡之舞",
                    "shengqi_swzw_info": "◆每当你造成伤害后，你获得同等于此次伤害量的标记；每当你的标记大于3时，你需弃置所有标记并恢复X点体力（X为标记数量的一半）</br> ◆每当你即将受到伤害时，防止此伤害并获得等量标记；你的下一个回合结束后，你需弃置所有标记并失去X点体力（X为标记数量）",
                },
                list: [["diamond", "13", "shengqi_cyzhq"], ["diamond", "13", "shengqi_gfyp"], ["spade", "13", "shengqi_xwzm"], ["spade", "13", "shengqi_qmbg"], ["spade", "13", "shengqi_xllyj"], ["heart", "13", "shengqi_bhq"], ["club", "13", "shengqi_jsg"], ["spade", "13", "shengqi_myct"], ["heart", "13", "shengqi_yxj"], ["spade", "13", "shengqi_bjjt"], ["diamond", "13", "shengqi_gyct"], ["spade", "13", "shengqi_wjzr"], ["spade", "13", "shengqi_fuxi"], ["diamond", "13", "shengqi_cxqf"], ["diamond", "13", "shengqi_qiuniu"], ["club", "13", "shengqi_suanni"], ["spade", "13", "shengqi_chiwen"], ["spade", "13", "shengqi_yazi"], ["club", "13", "shengqi_chaofeng"], ["club", "13", "shengqi_pulao"], ["spade", "13", "shengqi_bian"], ["club", "13", "shengqi_fuxi"], ["club", "13", "shengqi_bixi"], ["spade", "13", "shengqi_zhq"], ["heart", "13", "shengqi_bgj"], ["spade", "13", "shengqi_sgwsj"], ["spade", "13", "shengqi_sglld"], ["heart", "13", "shengqi_yyfh"], ["diamond", "13", "shengqi_glzyd"], ["spade", "13", "shengqi_glzydx"], ["diamond", "13", "shengqi_swzw"]],
            },
            skill: {
                skill: {
                    "ssb_sgllg": {
                        trigger: {
                            global: "phaseEnd",
                        },
                        filter: function (event, player) {
                            return event.player != player && event.player.hp != player.hp;
                        },
                        forced: true,
                        content: function () {
                            player.recover();
                        },
                    },
                    "ssb_sgwsj": {
                        trigger: {
                            source: "damageBegin",
                        },
                        filter: function (event, player) {
                            return player.hp > player.maxHp * 0.5 && event.card && event.card.name == 'sha';
                        },
                        content: function () {
                            'step 0'
                            trigger.num += 1;
                            'step 1'
                            player.loseHp();
                            player.draw();
                        },
                    },
                    "ssb_qiuniu": {
                        init: function (player) {
                            player.draw();
                        },
                        filter: function (event, player) {
                            return player.countCards('he', { color: 'red' }) > 0;
                        },
                        unique: true,
                        usable: 1,
                        enable: "chooseToUse",
                        filterCard: function (card) {
                            return get.color(card) == 'red';
                        },
                        position: "he",
                        viewAs: {
                            name: "lebu",
                            suit: "diamond",
                            number: 13,
                            cards: [{ "node": { "image": {}, "info": {}, "name": {}, "name2": {}, "background": {}, "intro": {}, "range": {} }, "storage": {}, "vanishtag": [], "_uncheck": [], "suit": "diamond", "number": 13, "name": "shengqi_qiuniu", "cardid": "6739775449", "clone": { "name": "shengqi_qiuniu", "suit": "diamond", "number": 13, "node": { "name": {}, "info": {}, "intro": {}, "background": {}, "image": {} }, "_transitionEnded": true, "timeout": 3326 }, "original": "j", "_transform": "translateX(0px)", "viewAs": "lebu", "timeout": 3313 }],
                        },
                        prompt: "将一张红色牌当乐不思蜀使用",
                        check: function (card) { return 6 - get.value(card) },
                        ai: {
                            threaten: 1.5,
                            basic: {
                                order: 1,
                                useful: 1,
                                value: 8,
                            },
                            result: {
                                target: function (player, target) {
                                    var num = target.hp - target.countCards('h') - 2;
                                    if (num > -1) return -0.01;
                                    if (target.hp < 3) num--;
                                    if (target.isTurnedOver()) num /= 2;
                                    var dist = get.distance(player, target, 'absolute');
                                    if (dist < 1) dist = 1;
                                    return num / Math.sqrt(dist);
                                },
                            },
                            tag: {
                                skip: "phaseUse",
                            },
                            wuxie: function (target, card, player, viewer) {
                                if (target.num('j', 'bingliang')) {
                                    if (target.hasSkill('fangquan') || target.hasSkill('rekurou') || target.hasSkill('qice') || target.hasSkill('zhanjue') || target.hasSkill('jigong')) return;
                                    if ((target.hasSkill('zishou') || target.hasSkill('keji')) && target.num('h') <= 5) return 0;
                                    if (target.num('h') + 1 <= target.hp) return 0;
                                }
                            },
                        },
                    },
                    "ssb_suanni": {
                        init: function (player) {
                            player.loseHp();
                        },
                        unique: true,
                        enable: "phaseUse",
                        usable: 1,
                        forced: true,
                        prepare: "give2",
                        filterTarget: function (card, player, target) {
                            if (player == target) return false;
                            return true;
                        },
                        filter: function (event, player) {
                            return player.countCards('he') > 0;
                        },
                        prompt: "将一张牌交给一名其他角色",
                        filterCard: true,
                        check: function (card) {
                            if (card.name == 'du') return 20;
                            return 7 - get.value(card);
                        },
                        discard: false,
                        content: function () {
                            target.gain(cards, player).delay = false;

                        },
                        ai: {
                            result: {
                                target: function (player, target) {
                                    if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
                                        return -1;
                                    }
                                    return 1;
                                },
                            },
                            order: 2,
                        },
                    },
                    "ssb_chiwen": {
                        init: function (player) {
                            player.changeHujia();
                        },
                        trigger: {
                            source: "damageEnd",
                        },
                        forced: true,
                        unique: true,
                        filter: function (event) {
                            return event.nature == 'fire';
                        },
                        content: function () {
                            player.recover();
                        },
                        sub: true,
                    },
                    "ssb_yazi": {
                        init: function (player) {
                            player.loseHp();
                        },
                        trigger: {
                            player: "damageEnd",
                        },
                        unique: true,
                        priority: -1,
                        forced: true,
                        filter: function (event, player) {
                            return event.source && event.source != player && event.source.isAlive();
                        },
                        content: function () {
                            trigger.source.damage();
                        },
                    },
                    "ssb_chaofeng": {
                        init: function (player) {
                            player.draw();
                        },
                        mod: {
                            globalTo: function (from, to, distance) {
                                return distance + 1;
                            },
                        },
                        trigger: {
                            player: "damageEnd",
                        },
                        unique: true,
                        forced: true,
                        direct: true,
                        filter: function (event, player) {
                            return event.source && event.source.countCards('e') > 0;
                        },
                        content: function () {
                            "step 0"
                            var att = get.attitude(player, trigger.source);
                            player.choosePlayerCard('e', get.prompt('ssb_chaofeng'), trigger.source).ai = function (button) {
                                if (att <= 0) {
                                    return get.equipValue(button.link);
                                }
                                return 0;
                            }
                            "step 1"
                            if (result.bool) {
                                player.logSkill('ssb_chaofeng', trigger.source);
                                player.equip(result.links[0]);
                                trigger.source.$give(result.links[0], player);
                            }
                        },
                        ai: {
                            "maixie_defend": true,
                        },
                    },
                    "ssb_bjjt": {
                        audio: "ext:圣神包:2",
                        enable: "chooseToUse",
                        filterCard: function (card) {
                            return get.color(card) == 'black';
                        },
                        unique: true,
                        position: "he",
                        viewAs: {
                            name: "jiu",
                            suit: "spade",
                            number: 1,
                            cards: [{ "node": { "image": {}, "info": {}, "name": {}, "name2": {}, "background": {}, "intro": {}, "range": {} }, "storage": {}, "vanishtag": [], "_uncheck": [], "suit": "spade", "number": 1, "name": "shandianjian", "nature": "thunder", "cardid": "2387331377", "original": "h", "clone": { "name": "shandianjian", "suit": "spade", "number": 1, "node": { "name": {}, "info": {}, "intro": {}, "background": {}, "image": {} }, "_transitionEnded": true, "timeout": 2024 }, "timeout": 1997 }],
                        },
                        viewAsFilter: function (player) {
                            if (!player.countCards('he', { color: 'black' })) return false;
                        },
                        prompt: "将一张黑色牌当作【酒】使用",
                        check: function (card) {
                            if (_status.event.type == 'dying') return 1;
                            return 4 - get.value(card);
                        },
                        ai: {
                            skillTagFilter: function (player) {
                                return player.countCards('he', { color: 'black' }) > 0 && player.hp <= 0;
                            },
                            threaten: 1.5,
                            save: true,
                            basic: {
                                useful: function (card, i) {
                                    if (_status.event.player.hp > 1) {
                                        if (i == 0) return 4;
                                        return 1;
                                    }
                                    if (i == 0) return 7.3;
                                    return 3;
                                },
                                value: function (card, player, i) {
                                    if (player.hp > 1) {
                                        if (i == 0) return 5;
                                        return 1;
                                    }
                                    if (i == 0) return 7.3;
                                    return 3;
                                },
                            },
                            order: function () {
                                return get.order({ name: 'sha' }) + 0.2;
                            },
                            result: {
                                target: function (player, target) {
                                    if (target && target.isDying()) return 2;
                                    if (lib.config.mode == 'stone' && !player.isMin()) {
                                        if (player.getActCount() + 1 >= player.actcount) return 0;
                                    }
                                    var shas = player.getCards('he', 'sha');
                                    if (shas.length > 1 && player.getCardUsable('sha') > 1) {
                                        return 0;
                                    }
                                    var card;
                                    if (shas.length) {
                                        for (var i = 0; i < shas.length; i++) {
                                            if (lib.filter.filterCard(shas[i], target)) {
                                                card = shas[i]; break;
                                            }
                                        }
                                    }
                                    else if (player.hasSha() && player.needsToDiscard()) {
                                        if (player.countCards('he', 'hufu') != 1) {
                                            card = { name: 'sha' };
                                        }
                                    }
                                    if (card) {
                                        if (game.hasPlayer(function (current) {
                                            return (get.attitude(target, current) < 0 &&
                                                target.canUse(card, current, true, true) &&
                                                !current.getEquip('baiyin') &&
                                                get.effect(current, card, target) > 0);
                                        })) {
                                            return 1;
                                        }
                                    }
                                    return 0;
                                },
                            },
                            tag: {
                                save: 1,
                            },
                        },
                    },
                    "ssb_pulao": {
                        init: function (player) {
                            player.changeHujia();
                        },
                        trigger: {
                            source: "damageBefore",
                        },
                        unique: true,
                        forced: true,
                        priority: -1,
                        check: function () { return false; },
                        content: function () {
                            trigger.cancel();
                            var ex = 0;
                            if (trigger.card && trigger.card.name == 'sha') {
                                if (player.hasSkill('jiu')) ex++;
                                if (player.hasSkill('luoyi2')) ex++;
                                if (player.hasSkill('reluoyi2')) ex++;
                            }
                            trigger.player.loseHp(trigger.num + ex);
                        },
                    },
                    "ssb_bian": {
                        init: function (player) {
                            player.gainMaxHp();
                            player.recover();
                        },
                        mod: {
                            targetEnabled: function (card, player, target) {
                                if (player != target) return false;
                            },
                        },
                        trigger: {
                            player: "phaseBegin",
                        },
                        unique: true,
                        forced: true,
                        priority: 100,
                        content: function () {
                            player.loseHp();
                        },
                    },
                    "ssb_bixi": {
                        init: function (player) {
                            player.changeHujia();
                        },
                        trigger: {
                            player: "damageEnd",
                        },
                        unique: true,
                        forced: true,
                        content: function () {
                            player.draw(2)
                        },
                    },
                    "ssb_fuxi": {
                        init: function (player) {
                            player.draw();
                        },
                        unique: true,
                        mod: {
                            globalFrom: function (from, to, distance) {
                                return distance - 1;
                            },
                            maxHandcard: function (player, num) {
                                return num -= 1;
                            },
                            cardUsable: function (card, player, num) {
                                if (card.name == 'sha') return num + 1;
                            },
                        },
                    },
                    "ssb_wjzr": {
                        trigger: {
                            source: "damageBegin",
                        },
                        unique: true,
                        priority: 101,
                        forced: true,
                        filter: function (event, player) {
                            return event.card && event.card.name == 'sha' && Math.random() <= 0.6;
                        },
                        content: function () {
                            game.log(player, '的此次攻击触发了【无尽之刃】，产生了暴击！！')
                            var ex = 0;
                            if (trigger.card && trigger.card.name == 'sha') {
                                if (player.hasSkill('jiu')) ex++;
                                if (player.hasSkill('luoyi2')) ex++;
                                if (player.hasSkill('reluoyi2')) ex++;
                            }
                            trigger.num += trigger.num + ex;
                        },
                    },
                    "ssb_yxj": {
                        trigger: {
                            source: "damageEnd",
                        },
                        unique: true,
                        priority: 101,
                        forced: true,
                        filter: function (event, player) {
                            return event.card && event.card.name == 'sha' && event.num > 0;
                        },
                        content: function () {
                            if (event.player.hp == player.maxHp) {
                                game.log(player, '的此次攻击触发了【饮血剑】，获得了等量的【护甲】')
                                player.changeHujia(trigger.num);
                            }
                            else {
                                game.log(player, '的此次攻击触发了【饮血剑】，恢复了等量的体力值')
                                player.recover(trigger.num);
                            }
                        },
                    },
                    "ssb_gyct": {
                        group: ["圣_mashu"],
                        trigger: {
                            player: "shaBegin",
                        },
                        unique: true,
                        priority: -1,
                        forced: true,
                        filter: function (event, player) {
                            return !event.directHit;
                        },
                        content: function () {
                            if (typeof trigger.shanRequired == 'number') {
                                trigger.shanRequired++;
                            }
                            else {
                                trigger.shanRequired = 2;
                            }
                        },
                    },
                    "ssb_bgj": {
                        trigger: {
                            player: "chooseToRespondBegin",
                        },
                        prompt: "是否发动【八卦镜】",
                        filter: function (event, player) {
                            if (event.responded) return false;
                            if (!event.filterCard({ name: 'shan' })) return false;
                            if (!lib.filter.cardRespondable({ name: 'sha' }, player, event)) return false;
                            var evt = event.getParent();
                            if (evt.player && evt.player.hasSkillTag('unequip', false, {
                                name: evt.card ? evt.card.name : null,
                                target: player,
                                card: evt.card
                            })) return false;
                            return true;
                        },
                        audio: "ext:圣神包:2",
                        check: function (event, player) {
                            if (get.damageEffect(player, event.player, player) >= 0) return false;
                            return true;
                        },
                        content: function () {
                            "step 0"
                            player.judge('ssb_bgj', function (card) { return (get.suit(card) != 'spade') ? 1.5 : -0.5 });
                            "step 1"
                            if (result.judge > 0) {
                                trigger.untrigger();
                                trigger.responded = true;
                                trigger.result = { bool: true, card: { name: 'shan' } }
                            }
                        },
                        ai: {
                            effect: {
                                target: function (card, player, target, effect) {
                                    if (player.hasSkillTag('unequip', false, {
                                        name: card ? card.name : null,
                                        target: player,
                                        card: card
                                    })) return;
                                    if (get.tag(card, 'respondShan')) return 0.5;
                                },
                            },
                        },
                    },
                    "ssb_xuwangzhimian": {
                        trigger: {
                            player: "phaseDrawBegin",
                        },
                        forced: true,
                        content: function () {
                            trigger.num += 2;
                        },
                        mod: {
                            maxHandcard: function (player, num) {
                                return num - 1;
                            },
                        },
                    },
                    "ssb_xiuluolianyuji2": {
                        vanish: true,
                        trigger: {
                            player: "damageEnd",
                        },
                        forced: true,
                        popup: false,
                        content: function () {
                            player.recover();
                            player.removeSkill('ssb_xiuluolianyuji2');
                        },
                    },
                    "ssb_xiuluolianyuji": {
                        mod: {
                            selectTarget: function (card, player, range) {
                                if (card.name != 'sha') return;
                                if (range[1] == -1) return;
                                range[1] = Infinity;
                            },
                        },
                        trigger: {
                            source: "damageBegin",
                        },
                        forced: true,
                        filter: function (event) {
                            return event.card && event.card.name == 'sha';
                        },
                        content: function () {
                            trigger.num++;
                            trigger.player.addSkill('ssb_xiuluolianyuji2');
                        },
                    },
                    "ssb_juechenjinge": {
                        global: "ssb_juechenjinge2",
                    },
                    "ssb_juechenjinge2": {
                        mod: {
                            globalTo: function (from, to, distance) {
                                return distance + game.countPlayer(function (current) {
                                    if (current == to) return;
                                    if (current.side != to.side) return;
                                    if (current.hasSkill('ssb_juechenjinge')) return 1;
                                });
                            },
                        },
                    },
                    "ssb_chiyanzhenhunqin": {
                        trigger: {
                            source: "damageBefore",
                        },
                        forced: true,
                        content: function () {
                            trigger.nature = 'fire';
                        },
                    },
                    "ssb_chixueqingfeng": {
                        trigger: {
                            player: "shaBegin",
                        },
                        forced: true,
                        content: function () {
                            trigger.target.addTempSkill('ssb_chixueqingfeng2', 'shaAfter');
                        },
                        ai: {
                            unequip: true,
                            skillTagFilter: function (player, tag, arg) {
                                if (arg && arg.name == 'sha') return true;
                                return false;
                            },
                        },
                    },
                    "ssb_chixueqingfeng2": {
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
                    },
                    "ssb_guilongzhanyuedao": {
                        trigger: {
                            player: "shaBegin",
                        },
                        forced: true,
                        filter: function (event, player) {
                            return event.card && get.color(event.card) == 'red';
                        },
                        content: function () {
                            trigger.directHit = true;
                        },
                    },
                    "ssb_qimenbagua": {
                        trigger: {
                            target: "shaBefore",
                        },
                        forced: true,
                        filter: function (event, player) {
                            if (event.player.hasSkillTag('unequip', false, {
                                name: event.card ? event.card.name : null,
                                target: player,
                                card: event.card
                            })) return false;
                            return true;
                        },
                        content: function () {
                            trigger.cancel();
                        },
                        ai: {
                            effect: {
                                target: function (card, player, target) {
                                    if (player.hasSkillTag('unequip', false, {
                                        name: card ? card.name : null,
                                        target: player,
                                        card: card
                                    })) return;
                                    if (card.name == 'sha') return 'zerotarget';
                                },
                            },
                        },
                    },
                    "ssb_guofengyupao": {
                        mod: {
                            targetEnabled: function (card, player, target, now) {
                                if (player != target) {
                                    if (get.type(card) == 'trick') return false;
                                }
                            },
                        },
                    },
                    "ssb_jsg": {
                        trigger: {
                            source: "damageEnd",
                        },
                        unique: true,
                        priority: 101,
                        direct: true,
                        filter: function (event) {
                            if (event._notrigger.contains(event.player)) return false;
                            return event.card && event.card.name == 'sha' && event.cards &&
                                get.color(event.cards) == 'black' && event.player.countCards('he');
                        },
                        content: function () {
                            "step 0"
                            player.choosePlayerCard('he', trigger.player, true);
                            "step 1"
                            if (result.bool) {
                                player.logSkill('ssb_jsg');
                                trigger.player.discard(result.links[0]);
                                event.card = result.links[0];
                            }
                            else {
                                event.finish();
                            }
                            "step 2"
                            if (get.position(card) == 'd') {
                                if (get.subtype(card) == 'equip1' || get.subtype(card) == 'equip2' || get.subtype(card) == 'equip3' || get.subtype(card) == 'equip4') {
                                    player.gain(card, trigger.player);
                                    player.$gain2(card);
                                }
                            }
                        },
                    },
                    "ssb_zhq2": {
                        trigger: {
                            player: "useCardAfter",
                        },
                        unique: true,
                        forced: true,
                        popup: false,
                        content: function () {
                            delete player.storage.ssb_zhq.nature;
                        },
                    },
                    "ssb_zhq": {
                        trigger: {
                            player: "useCardToBefore",
                        },
                        unique: true,
                        priority: 101,
                        filter: function (event, player) {
                            if (event.card.name == 'sha' && !event.card.nature) return true;
                        },
                        check: function (event, player) {
                            var att = get.attitude(player, event.target);
                            if (event.target.hasSkillTag('nothunder')) {
                                return att > 0;
                            }
                            return att <= 0;
                        },
                        forced: true,
                        content: function () {
                            trigger.card.nature = 'thunder';
                            player.addSkill('ssb_zhq2');
                            player.storage.ssb_zhq = trigger.card;
                        },
                    },
                    "ssb_bhq": {
                        trigger: {
                            player: ["damageBegin", "loseHpBegin"],
                        },
                        unique: true,
                        priority: 101,
                        filter: function (event) {
                            return event.player.hp == 1;
                        },
                        forced: true,
                        content: function () {
                            trigger.untrigger();
                            trigger.finish();

                        },
                        ai: {
                            nofire: true,
                            nothunder: true,
                            nodamage: true,
                            effect: {
                                target: function (card, player, target, current) {
                                    if (get.tag(card, 'damage')) return [0, 0];
                                },
                            },
                        },
                    },
                    "ssb_glzyd": {
                        mod: {
                            suit: function (card, suit) {
                                if (suit == 'spade', 'club', 'diamond') return 'heart';
                            },
                        },
                    },
                    "ssb_qxp": {
                        trigger: {
                            player: "damageBefore",
                        },
                        unique: true,
                        priority: 101,
                        filter: function (event) {
                            if (event.nature) return true;
                            return false;
                        },
                        forced: true,
                        content: function () {
                            trigger.cancel();
                        },
                    },
                    "ssb_yyfh": {
                        trigger: {
                            global: "damageBefore",
                        },
                        forced: true,
                        content: function () {
                            trigger.nature = 'fire';
                        },
                    },
                    "ssb_xsmj": {
                        trigger: {
                            player: "damageBegin",
                        },
                        unique: true,
                        forced: true,
                        priority: 101,
                        content: function () {
                            trigger.num--;
                        },
                        group: "ssb_xsmj_turn",
                        subSkill: {
                            turn: {
                                trigger: {
                                    player: "turnOverBefore",
                                },
                                unique: true,
                                priority: 101,
                                forced: true,
                                filter: function (event, player) {
                                    return !player.isTurnedOver();
                                },
                                content: function () {
                                    trigger.cancel();
                                    game.log(player, '无法被翻面');
                                },
                                sub: true,
                            },
                        },
                    },
                    "ssb_swzw_damage": {
                        trigger: {
                            player: "damageBefore",
                        },
                        marktext: "亡",
                        locked: true,
                        mark: true,
                        intro: {
                            content: "当前共拥有#枚标记",
                        },
                        init: function (player) {
                            player.storage.ssb_swzw_damage = 0;
                        },
                        forced: true,
                        priority: 100,
                        content: function () {
                            'step 0'
                            player.storage.ssb_swzw_damage += trigger.num;
                            player.markSkill('ssb_swzw_damage');
                            player.syncStorage('ssb_swzw_damage');
                            'step 1'
                            trigger.cancel();
                        },
                        subSkill: {
                            After: {
                                trigger: {
                                    player: "phaseAfter",
                                },
                                priority: 100,
                                forced: true,
                                filter: function (event, player) {
                                    return player.storage.ssb_swzw_damage > 0;
                                },
                                content: function () {
                                    'step 0'
                                    player.loseHp(player.storage.ssb_swzw_damage);
                                    'step 1'
                                    player.storage.ssb_swzw_damage -= player.storage.ssb_swzw_damage;
                                    player.markSkill('ssb_swzw_damage');
                                    player.syncStorage('ssb_swzw_damage');
                                },
                                sub: true,
                            },
                        },
                    },
                    "ssb_swzw_source": {
                        trigger: {
                            source: "damageEnd",
                        },
                        marktext: "死",
                        locked: true,
                        mark: true,
                        intro: {
                            content: "当前共拥有#个标记",
                        },
                        init: function (player) {
                            player.storage.ssb_swzw_source = 0;
                        },
                        forced: true,
                        priority: 100,
                        content: function () {
                            player.storage.ssb_swzw_source += trigger.num;
                            player.markSkill('ssb_swzw_source');
                            player.syncStorage('ssb_swzw_source');
                        },
                        subSkill: {
                            After: {
                                trigger: {
                                    source: "damageAfter",
                                },
                                priority: 100,
                                forced: true,
                                filter: function (event, player) {
                                    return player.storage.ssb_swzw_source > 3;
                                },
                                content: function () {
                                    'step 0'
                                    player.recover(player.ssb_swzw_source * 0.5);
                                    'step 1'
                                    player.storage.ssb_swzw_source -= player.storage.ssb_swzw_source;
                                    player.markSkill('ssb_swzw_source');
                                    player.syncStorage('ssb_swzw_source');
                                },
                                sub: true,
                            },
                        },
                    },
                    "ssb_swzw": {
                        group: ["ssb_swzw_source", "ssb_swzw_damage", "ssb_swzw_damage_After", "ssb_swzw_source_After"],
                    },
                    "!!——————————!!": {
                    },
                    "圣_faze": {
                        nobracket: true,
                        ai: {
                            neg: true,
                        },
                        forced: true,
                        locked: true,
                        unique: true,
                        noremove: true,
                        nodisable: true,
                        forceunique: true,
                        init: function (player) {
                            if (lib.config.mode == 'identity' && player.isZhu) {
                                player.loseMaxHp();
                                game.log('【圣神法则】：', player, '无法受到凡律增益，无法受到延时锦囊牌的影响');
                                player.update();
                            }
                            else {
                                game.log('【圣神法则】：', player, '无法受到延时锦囊牌的影响');
                            }
                        },
                        mod: {
                            targetEnabled: function (card, player, target) {
                                if (get.type(card) == 'delay') {
                                    return false;
                                }
                            },
                        },
                    },
                    "圣_mashu": {
                        mod: {
                            globalFrom: function (from, to, distance) {
                                return distance - 1;
                            },
                        },
                    },
                    "圣_feiying": {
                        mod: {
                            globalTo: function (from, to, distance) {
                                return distance + 1;
                            },
                        },
                    },
                    ":————————————:": {
                    },
                    "圣_longao": {
                        audio: "ext:圣神包:1",
                        unique: true,
                        trigger: {
                            player: "phaseDrawBegin",
                        },
                        forced: true,
                        content: function () {
                            trigger.num -= 1;
                        },
                        mod: {
                            maxHandcard: function (player, current) {
                                return current + Infinity;
                            },
                        },
                    },
                    "圣_longfen": {
                        unique: true,
                        mod: {
                            selectTarget: function (card, player, range) {
                                if (range[1] == -1) return;
                                if (card.name == 'sha') range[1] += 1;
                            },
                        },
                        ai: {
                            unequip: true,
                            skillTagFilter: function (player, tag, arg) {
                                if (arg && arg.name == 'sha') return true;
                                return false;
                            },
                        },
                    },
                    "圣_longlin": {
                        trigger: {
                            source: "damageEnd",
                        },
                        unique: true,
                        forced: true,
                        content: function () {
                            if (player.isDamaged()) {
                                player.recover(trigger.num);
                            }
                            else {
                                player.draw();
                            }
                        },
                        group: "圣_longlin_yu",
                        subSkill: {
                            yu: {
                                trigger: {
                                    player: "damageBegin",
                                },
                                unique: true,
                                forced: true,
                                audio: "ext:圣神包:2",
                                filter: function (event, player) {
                                    if (event.num <= 1) return false;
                                    if (event.source && event.source.hasSkillTag('unequip', false, {
                                        name: event.card ? event.card.name : null,
                                        target: player,
                                        card: event.card
                                    })) return false;
                                    return true;
                                },
                                priority: 100,
                                content: function () {
                                    trigger.num = 1;
                                },
                                sub: true,
                            },
                        },
                    },
                    "圣_longyu": {
                        mod: {
                            globalFrom: function (from, to, distance) {
                                return distance - Infinity;
                            },
                        },
                        audio: "ext:圣神包:2",
                        trigger: {
                            global: "phaseBefore",
                        },
                        unique: true,
                        forced: true,
                        filter: function (event, player) {
                            return event.player != player && _status.currentPhase != player;
                        },
                        check: function (event, player) {
                            if (game.roundNumber <= 1 && !game.hasPlayer(function (current) {
                                return get.attitude(player, current) < 0
                            })) return false;
                            return true;
                        },
                        content: function () {
                            player.phase('圣_longyu');

                        },
                        ai: {
                            expose: 0.2,
                        },
                    },
                    "—=——————————=—": {
                    },
                    "圣_xingshang": {
                        audio: "ext:圣神包:2",
                        unique: true,
                        forced: true,
                        gainable: true,
                        trigger: {
                            global: "dieEnd",
                        },
                        priority: 5,
                        filter: function (event) {
                            return event.playerCards && event.playerCards.length > 0
                        },
                        check: function (event) {
                            for (var i = 0; i < event.playerCards.length; i++) {
                                if (event.playerCards[i].name == 'du') return false;
                            }
                            return true;
                        },
                        content: function () {
                            "step 0"
                            player.gain(trigger.playerCards);
                            player.$draw(trigger.playerCards);
                            game.delay();
                            "step 1"
                            for (var i = 0; i < trigger.playerCards.length; i++) {
                                trigger.cards.remove(trigger.playerCards[i]);
                            }
                            trigger.playerCards.length = 0;
                        },
                        group: "圣_xingshang_over",
                        subSkill: {
                            over: {
                                trigger: {
                                    player: "turnOverBefore",
                                },
                                priority: 100,
                                forced: true,
                                filter: function (event, player) {
                                    return !player.isTurnedOver();
                                },
                                content: function () {
                                    trigger.cancel();
                                    game.log(player, '无法被翻面');
                                },
                                ai: {
                                    noturn: true,
                                    effect: {
                                        target: function (card, player, target) {
                                            if (get.type(card) == 'delay') return 0.5;
                                        },
                                    },
                                },
                                sub: true,
                            },
                        },
                    },
                    "圣_fangzhu": {
                        audio: "ext:圣神包:3",
                        trigger: {
                            player: ["damageEnd", "loseHpEnd"],
                        },
                        forced: true,
                        direct: true,
                        content: function () {
                            "step 0"
                            player.chooseTarget(get.prompt('圣_fangzhu'), function (card, player, target) {
                                return player != target
                            })
                            "step 1"
                            if (result.bool) {
                                player.logSkill('圣_fangzhu', result.targets);
                                result.targets[0].chooseToDiscard('he', true, player.maxHp - player.hp + 1);
                                result.targets[0].turnOver();
                            }
                        },
                        ai: {
                            maixie: true,
                            "maixie_hp": true,
                            effect: {
                                target: function (card, player, target) {
                                    if (get.tag(card, 'damage')) {
                                        if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                        if (target.hp <= 1) return;
                                        if (!target.hasFriend()) return;
                                        var hastarget = false;
                                        var turnfriend = false;
                                        var players = game.filterPlayer();
                                        for (var i = 0; i < players.length; i++) {
                                            if (get.attitude(target, players[i]) < 0 && !players[i].isTurnedOver()) {
                                                hastarget = true;
                                            }
                                            if (get.attitude(target, players[i]) > 0 && players[i].isTurnedOver()) {
                                                hastarget = true;
                                                turnfriend = true;
                                            }
                                        }
                                        if (get.attitude(player, target) > 0 && !hastarget) return;
                                        if (turnfriend || target.hp == target.maxHp) return [0.5, 1];
                                        if (target.hp > 1) return [1, 0.5];
                                    }
                                },
                            },
                        },
                    },
                    "圣_songwei": {
                        audio: "ext:圣神包:2",
                        trigger: {
                            player: "damageEnd",
                        },
                        usable: 1,
                        forced: true,
                        filter: function (event, player) {
                            return event.source && event.source != player && _status.currentPhase != player && !player.hasSkill('圣_songwei2');;
                        },
                        content: function () {
                            player.insertPhase();
                        },
                    },
                    "！——————————！": {
                    },
                    "圣_huituo": {
                        audio: "ext:圣神包:2",
                        trigger: {
                            player: ["loseHpEnd", "damageEnd"],
                        },
                        forced: true,
                        direct: true,
                        filter: function (event, player) {
                            return _status.currentPhase != player;
                        },
                        content: function () {
                            'step 0'
                            player.chooseTarget(get.prompt('圣_huituo')).set('ai', function (target) {
                                var player = _status.event.player;
                                if (get.attitude(player, target) > 0) {
                                    return get.recoverEffect(target, player, player) + 1;
                                }
                                return 0;
                            });
                            'step 1'
                            if (result.bool) {
                                player.logSkill('圣_huituo', result.targets);
                                var target = result.targets[0];
                                event.target = target;
                                target.judge(function (card) {
                                    if (target.hp == target.maxHp) {
                                        if (get.color(card) == 'red') return -1;
                                    }
                                    if (get.color(card) == 'red') return 1;
                                    return 0;
                                });
                            }
                            else {
                                event.finish();
                            }
                            'step 2'
                            if (result.color) {
                                if (result.color == 'red') {
                                    if (event.target.hp < event.target.maxHp) event.target.recover(trigger.num);
                                }
                                else {
                                    event.target.draw(1 + trigger.num);
                                }
                            }
                        },
                        ai: {
                            maixie: true,
                            "maixie_hp": true,
                        },
                    },
                    "圣_xingshuai": {
                        trigger: {
                            player: ["phaseBegin"],
                        },
                        audio: "ext:圣神包:2",
                        priority: -1,
                        filter: function (event, player) {
                            return player.hp > 1;
                        },
                        forced: true,
                        content: function () {
                            "step 0"
                            event.players = get.players(player);
                            event.num = 0;
                            "step 1"
                            if (event.players.length) {
                                event.players.shift().loseHp();
                                event.redo();
                            }
                        },
                        group: "圣_xingshuai_recover",
                        subSkill: {
                            recover: {
                                trigger: {
                                    player: "phaseEnd",
                                },
                                forced: true,
                                priority: -1,
                                content: function () {
                                    "step 0"
                                    event.players = get.players(player);
                                    event.num = 0;
                                    "step 1"
                                    if (event.players.length) {
                                        event.players.shift().recover();
                                        event.redo();
                                    }
                                },
                                sub: true,
                            },
                        },
                    },
                    "圣_mingjian": {
                        audio: "ext:圣神包:2",
                        enable: "phaseUse",
                        filterTarget: function (card, player, target) {
                            return player != target;
                        },
                        filter: function (event, player) {
                            return player.countCards('h') > 0;
                        },
                        forced: true,
                        filterCard: true,
                        selectCard: 1,
                        discard: false,
                        lose: true,
                        content: function () {
                            player.$give(cards.length, target);
                            target.gain(cards, player);
                            target.addTempSkill('圣_mingjian2', { player: 'phaseAfter' });
                        },
                        ai: {
                            order: 1,
                            result: {
                                target: function (player, target) {
                                    if (target.hasSkillTag('nogain')) return 0;
                                    if (player.countCards('h') == 1 && player.countCards('h', 'du')) return -1;
                                    if (player.hp <= 2 && player.countCards('h', 'shan')) return 0;
                                    if (target.countCards('h') + player.countCards('h') > target.hp + 2) return 0;
                                    if (get.attitude(player, target) > 3) return 1;
                                    return 0;
                                },
                            },
                        },
                    },
                    "圣_mingjian2": {
                        mark: true,
                        intro: {
                            content: "手牌上限+1，出杀次数+1，进攻距离-1",
                        },
                        mod: {
                            maxHandcard: function (player, num) {
                                return num + 1;
                            },
                            cardUsable: function (card, player, num) {
                                if (card.name == 'sha') return num + 1;
                            },
                            globalFrom: function (from, to, distance) {
                                return distance - 1;
                            },
                        },
                    },
                    "[———————————]": {
                    },
                    "圣_huangkong": {
                        audio: "ext:圣神包:2",
                        trigger: {
                            global: "phaseBegin",
                        },
                        locked: true,
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
                        priority: 100,
                        logTarget: "player",
                        filter: function (event, player) {
                            return event.player != player &&
                                player.countCards('h') > 0 && event.player.countCards('h') > 0;
                        },
                        content: function () {
                            "step 0"
                            player.chooseToCompare(trigger.player);
                            "step 1"
                            if (result.bool) {
                                player.draw();
                                trigger.player.addTempSkill('zishou2');
                            }
                        },
                    },
                    "圣_youjin": {
                        trigger: {
                            target: "useCardToBefore",
                        },
                        forced: true,
                        filter: function (event, player) {
                            return (event.card.name == 'shunshou' || event.card.name == 'guohe');
                        },
                        priority: -1,
                        content: function () {
                            "step 0"
                            trigger.cancel();
                            "step 1"
                            player.damage(true, _status.currentPhase);
                        },
                        ai: {
                            expose: 0.3,
                        },
                    },
                    "圣_qiuyuan": {
                        audio: "ext:圣神包:2",
                        trigger: {
                            player: "damageBefore",
                        },
                        usable: 1,
                        locked: true,
                        direct: true,
                        priority: 100,
                        filter: function (event, player) {
                            return event.num > 0;
                        },
                        content: function () {
                            "step 0"
                            player.chooseTarget(get.prompt('圣_qiuyuan'), function (card, player, target) {
                                return target != player && target != _status.currentPhase;
                            }).set('ai', function (target) {
                                var trigger = _status.event.getTrigger();
                                var player = _status.event.player;
                                return get.effect(target, trigger.card, trigger.player, player) + 0.1;
                            });
                            "step 1"
                            if (result.bool) {
                                var target = result.targets[0];
                                player.logSkill('圣_qiuyuan', target);
                                event.target = target;
                                target.chooseCard({ name: 'tao' }, '交给' + get.translation(player) +
                                    '一张【桃】，或代替' + get.translation(player) + '承受一点伤害').set('ai', function (card) {
                                        return get.attitude(target, _status.event.source) >= 0 ? 1 : -1;
                                    }).set('source', player);
                                game.delay();
                            }
                            else {
                                event.finish();
                            }
                            "step 2"
                            if (result.bool) {
                                player.gain(result.cards, event.target);
                                event.target.$give(result.cards, player);
                                game.delay();
                            }
                            else {
                                trigger.num--;
                                event.target.damage();
                                game.log(event.target, '代替' + get.translation(player) + '承受一点伤害');
                            }
                        },
                        ai: {
                            expose: 0.2,
                            effect: {
                                target: function (card, player, target) {
                                    var players = game.filterPlayer();
                                    for (var i = 0; i < players.length; i++) {
                                        var target2 = players[i];
                                        if (player != target2 && target != target2 && player.canUse(card, target2, false) &&
                                            get.effect(target2, { name: 'shacopy', nature: card.nature, suit: card.suit }, player, target) < 0) {
                                            if (target.hp == target.maxHp) return [0, 1];
                                            return [0, 0];
                                        }
                                    }
                                },
                            },
                        },
                    },
                    "圣_mizhao": {
                        enable: "phaseUse",
                        usable: 1,
                        audio: "ext:圣神包:2",
                        forced: true,
                        prepare: "give2",
                        filterTarget: function (card, player, target) {
                            if (player == target) return false;
                            return true;
                        },
                        filter: function (event, player) {
                            return player.countCards('he') > 0;
                        },
                        filterCard: true,
                        check: function (card) {
                            if (card.name == 'du') return 20;
                            return 7 - get.value(card);
                        },
                        discard: false,
                        content: function () {
                            target.gain(cards, player).delay = false;
                            player.recover();
                            player.draw(2);
                        },
                        ai: {
                            result: {
                                target: function (player, target) {
                                    if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
                                        return -1;
                                    }
                                    return 1;
                                },
                            },
                            order: 2,
                        },
                    },
                    "]———————————[": {
                    },
                    "圣_qianxin": {
                        trigger: {
                            player: "phaseEnd",
                        },
                        audio: "ext:圣神包:2",
                        forced: true,
                        filter: function (event, player) {
                            return player.isMaxHandcard();
                        },
                        content: function () {
                            if (player.hp == 1) {
                            }
                            else {
                                player.draw();
                                player.loseHp();
                            }
                        },
                        group: "圣_qianxin_card",
                        subSkill: {
                            card: {
                                trigger: {
                                    player: "phaseDiscardBefore",
                                },
                                forced: true,
                                content: function () {
                                    trigger.cancel();
                                },
                                sub: true,
                            },
                        },
                    },
                    "圣_fanyin": {
                        skillAnimation: "epic",
                        trigger: {
                            player: "phaseUseBegin",
                        },
                        unique: true,
                        audio: "ext:圣神包:1",
                        group: "圣_fanyin_draw",
                        forced: true,
                        filter: function (event, player) {
                            return player.countCards('h') > 10;
                        },
                        content: function () {
                            player.removeSkill('圣_zhengzhao');
                            player.recover();
                            player.addSkill('圣_paoxiao');
                            player.addSkill('gongxin');
                            player.awakenSkill('圣_fanyin');
                        },
                        subSkill: {
                            draw: {
                                trigger: {
                                    player: "phaseDrawBegin",
                                },
                                forced: true,
                                content: function () {
                                    trigger.num += 2;
                                },
                                sub: true,
                            },
                        },
                    },
                    "圣_paoxiao": {
                        trigger: {
                            player: "shaBegin",
                        },
                        forced: true,
                        filter: function (event, player) {
                            return player.hasSkill('圣_paoxiao');
                        },
                        content: function () {
                        },
                        mod: {
                            cardUsable: function (card, player, num) {
                                if (card.name == 'sha') return Infinity;
                            },
                        },
                        ai: {
                            unequip: true,
                            skillTagFilter: function (player, tag, arg) {
                                if (!get.zhu(player, 'shouyue')) return false;
                                if (arg && arg.name == 'sha') return true;
                                return false;
                            },
                        },
                    },
                    "圣_zhengzhao": {
                        trigger: {
                            global: ["damageAfter", "recoverAfter"],
                        },
                        forced: true,
                        filter: function (event, player) {
                            return _status.currentPhase != player && event.player != player;
                        },
                        content: function () {
                            player.draw();
                        },
                    },
                    "<——————————>": {
                    },
                    "圣_yaze": {
                        trigger: {
                            global: "recoverAfter",
                        },
                        usable: 1,
                        priority: -1,
                        forced: true,
                        filter: function (event, player) {
                            return event.player != player && player.isDamaged();
                        },
                        content: function () {
                            player.recover();
                        },
                    },
                    "圣_huimin": {
                        audio: "ext:圣神包:2",
                        trigger: {
                            player: "recoverAfter",
                        },
                        forced: true,
                        direct: true,
                        content: function () {
                            "step 0"
                            player.chooseTarget(get.prompt('圣_huimin'), function (card, player, target) {
                                return target != player;
                            }).set('ai', function (target) {
                                return get.attitude(_status.event.player, target);
                            });
                            "step 1"
                            if (result.bool) {
                                player.logSkill('圣_huimin', result.targets);
                                if (result.targets[0].isTurnedOver()) result.targets[0].turnOver();
                                result.targets[0].recover();
                                result.targets[0].draw(player.hp - 1);
                            }
                        },
                        ai: {
                            threaten: 0.8,
                            expose: 0.1,
                        },
                    },
                    "圣_shouxi": {
                        trigger: {
                            player: ["gameDrawAfter", "phaseBefore", "changeHp"],
                        },
                        forced: true,
                        popup: false,
                        content: function () {
                            player.removeAdditionalSkill('圣_shouxi');
                            var list = [];
                            if (player.isDamaged()) {
                                list.push('圣_shouxi_damage');
                            }
                            if (list.length) {
                                player.addAdditionalSkill('圣_shouxi', list);
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
                        subSkill: {
                            damage: {
                                trigger: {
                                    target: "shaBegin",
                                },
                                audio: "ext:圣神包:2",
                                marktext: "玺",
                                locked: true,
                                mark: true,
                                intro: {
                                    content: "其他角色对你使用的【杀】无效",
                                },
                                forced: true,
                                priority: 100,
                                filter: function (event, player) {
                                    return player.isDamaged();
                                },
                                content: function () {
                                    game.log(player, '发动了【守玺】，', trigger.card, '对', trigger.target, '失效')
                                    trigger.cancel();
                                    player.draw();
                                },
                                sub: true,
                            },
                        },
                    },
                    "圣_zhixi": {
                        audio: "ext:圣神包:1",
                        enable: "phaseUse",
                        priority: 100,
                        forced: true,
                        unique: true,
                        direct: true,
                        delay: false,
                        line: false,
                        skillAnimation: "epic",
                        content: function () {
                            "step 0"
                            player.chooseTarget(get.prompt('圣_zhixi'), function (card, player, target) {
                                return player != target
                            })
                            "step 1"
                            if (result.bool) {
                                player.loseHp();
                                player.logSkill('圣_zhixi', result.targets);
                                event.target = result.targets[0];
                            }
                            else {
                                event.finish();
                            }
                            "step 2"
                            if (event.target) {
                                var es = event.target.getCards('he');
                                if (es.length) {
                                    event.target.discard(es);
                                }
                            }
                            "step 3"
                            if (event.target) {
                                event.target.damage(player.maxHp - player.hp);
                            }
                            player.removeSkill('圣_shouxi');
                            player.removeSkill('圣_yaze');
                            player.removeSkill('圣_huimin');
                            player.addSkill('圣_huimin');
                            player.addSkill('圣_yaze');
                            player.awakenSkill('圣_zhixi');
                        },
                        ai: {
                            maixie: true,
                            threaten: 2,
                        },
                    },
                    "………………………………": {
                    },
                    "圣_kuangwang": {
                        mod: {
                            cardUsable: function (card) {
                                if (get.info(card) && get.info(card).forceUsable) return;
                                return Infinity;
                            },
                        },
                        trigger: {
                            player: "useCard",
                        },
                        audio: "ext:圣神包:10",
                        forced: true,
                        content: function () {
                            player.draw();
                        },
                        group: "圣_kuangwang_sha",
                        subSkill: {
                            sha: {
                                trigger: {
                                    player: "phaseDrawBegin",
                                },
                                priority: -1,
                                forced: true,
                                content: function () {
                                    trigger.num -= 1;
                                    var cards = [];
                                    for (var i = 0; i < 1; i++) {
                                        cards.push(game.createCard('sha'));
                                    }
                                    player.gain(cards, 'gain2');
                                },
                                sub: true,
                            },
                        },
                    },
                    "圣_jieao": {
                        trigger: {
                            player: "phaseBegin",
                        },
                        priority: 100,
                        forced: true,
                        content: function () {
                            player.addSkill('圣_jieao_sha');
                            player.addSkill('圣_jieao_lose');
                        },
                        subSkill: {
                            sha: {
                                mod: {
                                    targetInRange: function () {
                                        return true;
                                    },
                                },
                                sub: true,
                            },
                            lose: {
                                trigger: {
                                    player: "useCardAfter",
                                },
                                filter: function (event) {
                                    return event.card && event.card.name == 'sha';
                                },
                                forced: true,
                                content: function () {
                                    player.removeSkill('圣_jieao_sha');
                                    player.removeSkill('圣_jieao_lose');
                                },
                                sub: true,
                            },
                        },
                    },
                    "圣_shejian": {
                        trigger: {
                            player: "phaseEnd",
                        },
                        audio: "ext:圣神包:2",
                        forced: true,
                        direct: true,
                        filter: function (event, player) {
                            return player.isDamaged();
                        },
                        content: function () {
                            "step 0"
                            player.chooseTarget(get.prompt('圣_shejian'), function (card, player, target) {
                                return target.isEnemyOf(player);
                            }).ai = function (target) {
                                var att = get.attitude(player, target);
                                if (target.isTurnedOver()) {
                                    if (att > 0) {
                                        return att + 5;
                                    }
                                    return -1;
                                }
                                if (player.isTurnedOver()) {
                                    return 5 - att;
                                }
                                return -att;
                            };
                            "step 1"
                            if (result.bool) {
                                player.logSkill('圣_shejian', result.targets);
                                player.discardPlayerCard(result.targets[0], 'hej', true);
                                result.targets[0].draw();
                                result.targets[0].turnOver();
                            }
                        },
                        ai: {
                            threaten: 1.7,
                        },
                    },
                    "“————————————”": {
                    },
                    "圣_zhanjue": {
                        audio: "ext:圣神包:2",
                        enable: "phaseUse",
                        filterCard: true,
                        group: ["圣_zhanjue1"],
                        position: "h",
                        selectCard: -1,
                        precontent: function () {
                            player.loseHp();
                        },
                        prompt: "请选择一名角色，视为对其发起决斗",
                        filter: function (event, player) {
                            if (!player.countCards('h')) return false;
                            return true;
                        },
                        viewAs: {
                            name: "juedou",
                            cards: [{ "node": { "image": {}, "info": {}, "name": {}, "name2": {}, "background": {}, "intro": {}, "range": {} }, "storage": {}, "vanishtag": [], "_uncheck": [], "suit": "diamond", "number": 4, "name": "shan", "cardid": "3447433311", "original": "h", "_transform": "translateX(0px)", "clone": { "name": "shan", "suit": "diamond", "number": 4, "node": { "name": {}, "info": {}, "intro": {}, "background": {}, "image": {} }, "_transitionEnded": true, "timeout": 1552 }, "timeout": 1500 }],
                            suit: "diamond",
                            number: 13,
                        },
                        ai: {
                            basic: {
                                order: 5,
                                useful: 1,
                                value: 5.5,
                            },
                            result: {
                                target: -1.5,
                                player: function (player, target) {
                                    if (get.damageEffect(target, player, target) > 0 && get.attitude(player, target) > 0 && get.attitude(target, player) > 0) {
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
                            wuxie: function (target, card, player, viewer) {
                                if (player == viewer) {
                                    if (player.num('h') - (get.maxUse(player) + player.num('h', 'wuxie')) >= player.hp + 1 && Math.random() > 0.7) return;
                                }
                                if (target.isSafe()) return 0;
                                if (viewer.hasJudgeFirend() && Math.random() < 0.35) return 0;
                            },
                        },
                    },
                    "圣_zhanjue1": {
                        trigger: {
                            player: ["useCard"],
                        },
                        unique: true,
                        forced: true,
                        filter: function (event) {
                            return event.card && event.card.name == 'juedou';
                        },
                        content: function () {
                            player.draw(player.maxHp - player.hp);
                        },
                    },
                    "圣_qinjin": {
                        audio: "ext:圣神包:2",
                        trigger: {
                            player: ["useCard", "respondBefore"],
                        },
                        forced: true,
                        filter: function (event) {
                            return event.card && event.card.name == 'sha' || event.card.name == 'shan';
                        },
                        content: function () {
                            player.recover();
                        },
                    },
                    "圣_ziwen": {
                        audio: "ext:圣神包:1",
                        enable: "phaseUse",
                        unique: true,
                        derivation: "圣_ziwen_zhanjue",
                        skillAnimation: "epic",
                        filter: function (event) {
                            return event.player.hp <= 2
                        },
                        forced: true,
                        content: function () {
                            'step 0'
                            player.recover(player.maxHp - player.hp);
                            player.draw(player.maxHp - player.hp);
                            'step 1'
                            player.removeSkill('圣_zhanjue');
                            player.removeSkill('圣_qinjin');
                            player.addSkill('圣_ziwen_zhanjue');
                            player.addSkill('圣_qinjin');
                            'step 2'
                            player.addTempSkill('圣_ziwen1');
                            player.awakenSkill('圣_ziwen');
                        },
                    },
                    "圣_ziwen_zhanjue": {
                        audio: "ext:圣神包:2",
                        enable: "phaseUse",
                        filterCard: true,
                        filter: function (event, player) {
                            return event.player.countCards('he') > 0;
                        },
                        forced: true,
                        selectCard: 1,
                        position: "he",
                        viewAs: {
                            name: "juedou",
                            cards: [{ "node": { "image": {}, "info": {}, "name": {}, "name2": {}, "background": {}, "intro": {}, "range": {} }, "storage": {}, "vanishtag": [], "_uncheck": [], "suit": "spade", "number": 6, "name": "guohe", "cardid": "3119321460", "_transform": "translateX(0px)", "clone": { "name": "guohe", "suit": "spade", "number": 6, "node": { "name": {}, "info": {}, "intro": {}, "background": {}, "image": {} }, "_transitionEnded": true, "timeout": 3226 }, "timeout": 3125, "original": "h" }],
                            suit: "spade",
                            number: 6,
                        },
                        ai: {
                            basic: {
                                order: 5,
                                useful: 1,
                                value: 5.5,
                            },
                            result: {
                                target: -1.5,
                                player: function (player, target) {
                                    if (get.damageEffect(target, player, target) > 0 && get.attitude(player, target) > 0 && get.attitude(target, player) > 0) {
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
                            wuxie: function (target, card, player, viewer) {
                                if (player == viewer) {
                                    if (player.num('h') - (get.maxUse(player) + player.num('h', 'wuxie')) >= player.hp + 1 && Math.random() > 0.7) return;
                                }
                                if (target.isSafe()) return 0;
                                if (viewer.hasJudgeFirend() && Math.random() < 0.35) return 0;
                            },
                        },
                        locked: true,
                    },
                    "圣_ziwen1": {
                        trigger: {
                            player: "phaseEnd",
                        },
                        unique: true,
                        forced: true,
                        priority: 100,
                        content: function () {
                            player.loseHp(player.hp);
                            player.awakenSkill('圣_ziwen1');
                        },
                    },
                    "...————————————...": {
                    },
                    "圣_lige": {
                        audio: "ext:圣神包:2",
                        trigger: {
                            global: "damageEnd",
                        },
                        forced: true,
                        direct: true,
                        filter: function (event, player) {
                            return (event.player.classList.contains('dead') == false && player.countCards('he') && event.source != player);
                        },
                        checkx: function (event, player) {
                            var att1 = get.attitude(player, event.player);
                            var att2 = get.attitude(player, event.source);
                            return att1 > 0 && att2 <= 0;
                        },
                        content: function () {
                            "step 0"
                            var next = player.chooseToDiscard('he', get.prompt('圣_lige'));
                            var check = lib.skill.beige.checkx(trigger, player);
                            next.set('ai', function (card) {
                                if (_status.event.goon) return 8 - get.value(card);
                                return 0;
                            });
                            next.set('logSkill', '圣_lige');
                            next.set('goon', check);
                            "step 1"
                            if (result.bool) {
                                trigger.player.judge();
                            }
                            else {
                                event.finish();
                            }
                            "step 2"
                            switch (get.suit(result.card)) {
                                case 'heart': trigger.player.recover(trigger.num); break;
                                case 'diamond': trigger.player.draw(1 + trigger.num); break;
                                case 'club': trigger.source.chooseToDiscard('he', 1 + trigger.num, true); break;
                                case 'spade': trigger.source.turnOver(); break;
                                case 'spade': trigger.source.loseHp(trigger.num); break;
                            }

                        },
                        ai: {
                            expose: 0.3,
                        },
                    },
                    "圣_bingxin": {
                        trigger: {
                            global: ["loseHpEnd", "loseMaxHpEnd"],
                        },
                        priority: -100,
                        forced: true,
                        filter: function (event, player) {
                            return event.player != player;
                        },
                        content: function () {
                            player.recover();
                        },
                        group: "圣_bingxin_maxHp",
                        subSkill: {
                            maxHp: {
                                trigger: {
                                    player: "loseMaxHpBegin",
                                },
                                priority: 100,
                                forced: true,
                                content: function () {
                                    game.log(player, '无法失去体力上限');
                                    trigger.cancel();
                                },
                                sub: true,
                            },
                        },
                    },
                    "圣_qianying": {
                        audio: "ext:圣神包:2",
                        trigger: {
                            global: "dying",
                        },
                        locked: true,
                        usable: 1,
                        priority: 100,
                        filter: function (event, player) {
                            return event.player.hp <= 0;
                        },
                        content: function () {
                            'step 0'
                            player.chooseTarget(get.prompt('圣_qianying'), function (card, player, target) {
                                return target != _status.event.getTrigger().player;
                            }).set('ai', function (target) {
                                var player = _status.event.player;
                                var trigger = _status.event.getTrigger();
                                if (get.attitude(player, trigger.player) > 0) {
                                    var att1 = get.attitude(target, player);
                                    var att2 = get.attitude(target, trigger.player);
                                    var att3 = get.attitude(player, target);
                                    if (att3 < 0) return 0;
                                    return att1 / 2 + att2 + att3;
                                }
                                else {
                                    return 0;
                                    // return get.attitude(player,target);
                                }
                            });
                            'step 1'
                            if (result.bool) {
                                event.target = result.targets[0];
                                event.target.draw(5);
                            }
                            else {
                                event.finish();
                            }
                            'step 2'
                            var target = event.target;
                            var tosave = trigger.player;
                            var att = get.attitude(target, tosave);
                            var hastao = target.countCards('h', 'tao');
                            target.chooseToDiscard(4, true, 'he').set('ai', function (card) {
                                var hastao = _status.event.hastao;
                                var att = _status.event.att;
                                if (!hastao && att > 0) {
                                    var suit = get.suit(card);
                                    for (var i = 0; i < ui.selected.cards.length; i++) {
                                        if (get.suit(ui.selected.cards[i]) == suit) {
                                            return -4 - get.value(card);
                                        }
                                    }
                                }
                                if (att < 0 && ui.selected.cards.length == 3) {
                                    var suit = get.suit(card);
                                    for (var i = 0; i < ui.selected.cards.length; i++) {
                                        if (get.suit(ui.selected.cards[i]) == suit) {
                                            return -get.value(card);
                                        }
                                    }
                                    return -10 - get.value(card);
                                }
                                return -get.value(card);
                            }).set('hastao', hastao).set('att', att);
                            'step 3'
                            if (result.cards && result.cards.length == 4) {
                                var suits = [];
                                for (var i = 0; i < result.cards.length; i++) {
                                    suits.add(get.suit(result.cards[i]));
                                }
                                if (suits.length == 4) {
                                    event.target.useCard({ name: 'tao' }, trigger.player);
                                }
                                else {
                                    player.loseHp();
                                    player.gain(result.cards);
                                }
                            }
                        },
                        ai: {
                            expose: 0.2,
                            threaten: 1.5,
                            save: true,
                        },
                    },
                    "~~~~~~~~~~~~~~~~": {
                    },
                    "圣_jiang": {
                        mod: {
                            cardUsable: function (card) {
                                if (card.name == 'sha' && get.color(card) == 'red') return Infinity;
                            },
                        },
                        audio: "jiang",
                        trigger: {
                            player: ["useCard", "juedouBefore"],
                            target: ["useCard", "juedouBefore"],
                        },
                        filter: function (event, player) {
                            if (event.card.name == 'juedou') return true;
                            return get.color(event.card) == 'red';
                        },
                        forced: true,
                        content: function () {
                            player.draw();
                        },
                        ai: {
                            effect: {
                                target: function (card, player, target) {
                                    if (card.name == 'sha' && get.color(card) == 'red') return [1, 0.6];
                                },
                                player: function (card, player, target) {
                                    if (card.name == 'sha' && get.color(card) == 'red') return [1, 1];
                                },
                            },
                        },
                    },
                    "圣_bawang": {
                        trigger: {
                            source: "damageEnd",
                        },
                        forced: true,
                        priority: 100,
                        content: function () {
                            player.gainMaxHp();
                        },
                    },
                    "圣_hunzi_maxHp": {
                        trigger: {
                            player: ["gainMaxHpBegin", "loseMaxHpBegin"],
                        },
                        priority: 100,
                        forced: true,
                        content: function () {
                            trigger.cancel();
                        },
                    },
                    "圣_hunzi": {
                        skillAnimation: "epic",
                        audio: "ext:圣神包:2",
                        derivation: ["圣_shengzi", "圣_shenghun"],
                        unique: true,
                        trigger: {
                            player: "phaseBeginStart",
                        },
                        filter: function (event, player) {
                            return player.hp == 1 && !player.storage.圣_hunzi;
                        },
                        forced: true,
                        priority: 100,
                        content: function () {
                            'step 0'
                            if (player.isLinked()) player.link();
                            if (player.isTurnedOver()) player.turnOver();
                            'step 1'
                            player.changeHujia(player.maxHp - 1);
                            player.loseMaxHp(player.maxHp - 1);
                            'step 2'
                            player.removeSkill('圣_bawang');
                            player.addSkill('圣_hunzi_maxHp');
                            player.addSkill('圣_shengzi');
                            player.addSkill('圣_shenghun');
                            player.awakenSkill('圣_hunzi');
                            player.storage.圣_hunzi = true;
                        },
                        ai: {
                            threaten: function (player, target) {
                                if (target.hp == 1) return 2;
                                return 0.5;
                            },
                            maixie: true,
                            effect: {
                                target: function (card, player, target) {
                                    if (!target.hasFriend()) return;
                                    if (get.tag(card, 'damage') == 1 && target.hp == 2 && !target.isTurnedOver() &&
                                        _status.currentPhase != target && get.distance(_status.currentPhase, target, 'absolute') <= 3) return [0.5, 1];
                                },
                            },
                        },
                    },
                    "圣_shengzi": {
                        audio: "ext:圣神包:2",
                        trigger: {
                            player: "phaseDrawBegin",
                        },
                        forced: true,
                        content: function () {
                            trigger.num += 5 - player.maxHp;
                        },
                        ai: {
                            threaten: 1.5,
                        },
                        mod: {
                            maxHandcard: function (player, num) {
                                return num += 5 - player.maxHp;
                            },
                        },
                    },
                    "圣_shenghun": {
                        trigger: {
                            player: "damageBegin",
                        },
                        audio: "ext:圣神包:2",
                        priority: -1,
                        filter: function (event) {
                            return event.num > 1;
                        },
                        forced: true,
                        content: function () {
                            trigger.num = 0;
                        },
                        group: "圣_shenghun_card",
                        subSkill: {
                            card: {
                                audio: "ext:随心所欲:2",
                                trigger: {
                                    player: "phaseBegin",
                                },
                                forced: true,
                                direct: true,
                                content: function () {
                                    "step 0"
                                    player.chooseTarget(get.prompt('圣_shenghun'), function (card, player, target) {
                                        return player != target;
                                    }).set('ai', function (target) {
                                        var player = _status.event.player;
                                        if (player.maxHp - player.hp == 1 && target.countCards('he') == 0) {
                                            return 0;
                                        }
                                        if (get.attitude(_status.event.player, target) > 0) {
                                            return 10 + get.attitude(_status.event.player, target);
                                        }
                                        if (player.maxHp - player.hp == 1) {
                                            return -1;
                                        }
                                        return 1;
                                    });
                                    "step 1"
                                    if (result.bool) {
                                        player.logSkill('圣_shenghun', result.targets);
                                        event.target = result.targets[0];
                                        if (event.num == 1) {
                                            event.directcontrol = true;
                                        }
                                        else {
                                            var str1 = '摸' + get.cnNumber(5, true) + '弃一';
                                            var str2 = '摸一弃' + get.cnNumber(5, true);
                                            player.chooseControl(str1, str2, function (event, player) {
                                                return _status.event.choice;
                                            }).set('choice', get.attitude(player, event.target) > 0 ? str1 : str2);
                                            event.str = str1;
                                        }
                                    }
                                    else {
                                        event.finish();
                                    }
                                    "step 2"
                                    if (event.directcontrol || result.control == event.str) {
                                        event.target.draw(5);
                                        event.target.chooseToDiscard(true, 'he');
                                        player.changeHujia();
                                    }
                                    else {
                                        event.target.draw();
                                        event.target.chooseToDiscard(5, true, 'he');
                                        player.changeHujia();
                                    }
                                },
                                ai: {
                                    threaten: function (player, target) {
                                        if (target.hp == 1 || target.countCards('e') >= target.hp) return 2;
                                        if (target.hp == target.maxHp) return 0.5;
                                        if (target.hp == 2) return 1.5;
                                        return 0.5;
                                    },
                                    maixie: true,
                                    effect: {
                                        target: function (card, player, target) {
                                            if (target.maxHp <= 3) return;
                                            if (get.tag(card, 'damage')) {
                                                if (target.hp == target.maxHp) return [0, 1];
                                            }
                                            if (get.tag(card, 'recover') && player.hp >= player.maxHp - 1) return [0, 0];
                                        },
                                    },
                                },
                                sub: true,
                            },
                        },
                    },
                    "__________________________": {
                    },
                    "圣_jiqiao": {
                        audio: "ext:圣神包:2",
                        trigger: {
                            player: "loseEnd",
                        },
                        forced: true,
                        priority: 100,
                        direct: true,
                        filter: function (event, player) {
                            for (var i = 0; i < event.cards.length; i++) {
                                if (event.cards[i].original == 'e') return true;
                            }
                            return false;
                        },
                        content: function () {
                            "step 0"
                            player.chooseTarget(get.prompt('圣_jiqiao'), function (card, player, target) {
                                return player != target && get.distance(player, target) <= Infinity;
                            }).ai = function (target) {
                                return get.damageEffect(target, player, player);
                            };
                            "step 1"
                            if (result.bool) {
                                player.logSkill('圣_jiqiao', result.targets);
                                result.targets[0].damage();
                                player.draw();
                            }
                        },
                        ai: {
                            expose: 0.2,
                            threaten: 1.5,
                            effect: {
                                target: function (card, player, target, current) {
                                    if (get.type(card) == 'equip') {
                                        var players = game.filterPlayer();
                                        for (var i = 0; i < players.length; i++) {
                                            if (player != players[i] && get.distance(player, players[i]) <= 1 &&
                                                get.damageEffect(players[i], player, player) > 0) {
                                                return [1, 3];
                                            }
                                        }
                                    }
                                },
                            },
                        },
                    },
                    "圣_mocai": {
                        mod: {
                            wuxieRespondable: function () {
                                return false;
                            },
                            targetInRange: function (card, player, target, now) {
                                var type = get.type(card);
                                if (type == 'trick' || type == 'delay') return true;
                            },
                            targetEnabled: function (card, player, target, now) {
                                if (player != target) {
                                    if (get.type(card, 'trick') == 'trick') return false;
                                }
                            },
                        },
                    },
                    "圣_linglong": {
                        audio: "ext:圣神包:4",
                        trigger: {
                            player: ["useCard", "respond"],
                        },
                        forced: true,
                        filter: function (event) {
                            var type = get.type(event.card, 'trick');
                            return (type == 'trick' || type == 'equip') && event.cards[0];
                        },
                        content: function () {
                            player.draw();
                        },
                        ai: {
                            threaten: 1.4,
                        },
                    },
                    ">———————————<": {
                    },
                    "圣_qixing": {
                        mod: {
                            maxHandcard: function (player, num) {
                                return num + 7;
                            },
                        },
                        audio: "ext:圣神包:2",
                        trigger: {
                            global: "gameDrawAfter",
                        },
                        forced: true,
                        priority: 100,
                        content: function () {
                            player.draw(7);
                        },
                    },
                    "圣_bagua": {
                        audio: "ext:圣神包:2",
                        forced: true,
                        inherit: "bagua_skill",
                        filter: function (event, player) {
                            if (!lib.skill.bagua_skill.filter(event, player)) return false;
                            return true;
                        },
                        ai: {
                            effect: {
                                target: function (card, player, target) {
                                    if (player == target && get.subtype(card) == 'equip2') {
                                        if (get.equipValue(card) <= 7.5) return 0;
                                    }
                                    if (target.getEquip(2)) return;
                                    return lib.skill.bagua_skill.ai.effect.target.apply(this, arguments);
                                },
                            },
                        },
                        trigger: {
                            player: "chooseToRespondBegin",
                        },
                        priority: -1,
                        check: function (event, player) {
                            if (get.damageEffect(player, event.player, player) >= 0) return false;
                            return true;
                        },
                        content: function () {
                            "step 0"
                            player.judge('bagua', function (card) { return (get.color(card) == 'red') ? 1.5 : -0.5 });
                            "step 1"
                            if (result.judge > 0) {
                                trigger.untrigger();
                                trigger.responded = true;
                                trigger.result = { bool: true, card: { name: 'shan' } }
                            }
                        },
                    },
                    "圣_jinnang": {
                        forced: true,
                        group: ["圣_jinnang1", "圣_jinnang2", "圣_jinnang3", "圣_jinnang4"],
                    },
                    "圣_jinnang2": {
                        audio: "ext:圣神包:2",
                        enable: "chooseToUse",
                        filterCard: function (card) {
                            return get.suit(card) == 'spade';
                        },
                        forced: true,
                        position: "he",
                        selectCard: 1,
                        viewAsFilter: function (player) {
                            return player.countCards('he', { suit: 'spade' }) > 0;
                        },
                        viewAs: {
                            name: "wuxie",
                            suit: "spade",
                            number: 1,
                            cards: [{ "node": { "image": {}, "info": {}, "name": {}, "name2": {}, "background": {}, "intro": {}, "range": {} }, "storage": {}, "vanishtag": [], "_uncheck": [], "suit": "spade", "number": 1, "name": "sha", "cardid": "5510457339", "clone": { "name": "sha", "suit": "spade", "number": 1, "node": { "name": {}, "info": {}, "intro": {}, "background": {}, "image": {} }, "_transitionEnded": true, "timeout": 1006 }, "timeout": 969, "original": "h" }],
                        },
                        prompt: "将一张♠️卡牌当做【无懈可击】使用",
                        check: function (card) { return 8 - get.value(card) },
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
                    "圣_jinnang3": {
                        audio: "ext:圣神包:2",
                        enable: ["chooseToUse", "chooseToRespond"],
                        filterCard: function (card) {
                            return get.suit(card) == 'heart';
                        },
                        forced: true,
                        position: "he",
                        selectCard: 1,
                        viewAs: {
                            name: "taoyuan",
                            suit: "heart",
                            number: 7,
                            cards: [{ "node": { "image": {}, "info": {}, "name": {}, "name2": {}, "background": {}, "intro": {}, "range": {} }, "storage": {}, "vanishtag": [], "_uncheck": [], "suit": "heart", "number": 7, "name": "tao", "cardid": "8011614373", "_transform": "translateX(224px)", "clone": { "name": "tao", "suit": "heart", "number": 7, "node": { "name": {}, "info": {}, "intro": {}, "background": {}, "image": {} }, "_transitionEnded": true, "timeout": 4425 }, "timeout": 4393, "original": "h" }],
                        },
                        viewAsFilter: function (player) {
                            if (!player.countCards('he', { suit: 'heart' })) return false;
                        },
                        prompt: "将一张♥️牌当做【桃园结义】使用",
                        ai: {
                            basic: {
                                order: 1,
                                useful: [3, 1],
                                value: 0,
                            },
                            result: {
                                target: function (player, target) {
                                    return (target.hp < target.maxHp) ? 2 : 0;
                                },
                            },
                            tag: {
                                recover: 0.5,
                                multitarget: 1,
                            },
                            wuxie: function (target, card, player, viewer) {
                                if (target.hp == 1) return;
                                if (player == viewer) {
                                    if (player.num('h') - (get.maxUse(player) + player.num('h', 'wuxie')) >= player.hp + 1 && Math.random() > 0.7) return;
                                }
                                if (viewer.hasJudgeFirend()) return 0;
                                if (target.isSafe()) return 0;
                            },
                        },
                    },
                    "圣_jinnang1": {
                        audio: "ext:圣神包:2",
                        enable: ["chooseToUse", "chooseToRespond"],
                        filterCard: function (card) {
                            return get.suit(card) == 'diamond';
                        },
                        forced: true,
                        position: "he",
                        selectCard: 1,
                        viewAs: {
                            name: "huogong",
                            suit: "diamond",
                            number: 1,
                            cards: [{ "node": { "image": {}, "info": {}, "name": {}, "name2": {}, "background": {}, "intro": {}, "range": {} }, "storage": {}, "vanishtag": [], "_uncheck": [], "suit": "diamond", "number": 1, "name": "sha", "cardid": "8156228338", "clone": { "name": "sha", "suit": "diamond", "number": 1, "node": { "name": {}, "info": {}, "intro": {}, "background": {}, "image": {} }, "_transitionEnded": true, "timeout": 1415 }, "timeout": 1397, "original": "h" }],
                        },
                        viewAsFilter: function (player) {
                            if (!player.countCards('he', { suit: 'diamond' })) return false;
                        },
                        prompt: "将一张♦️牌当做【火攻】使用",
                        ai: {
                            basic: {
                                order: 4,
                                value: [3, 1],
                                useful: 1,
                            },
                            wuxie: function (target, card, player, current, state) {
                                if (get.attitude(current, player) >= 0 && state > 0) return false;
                            },
                            result: {
                                player: function (player) {
                                    var nh = player.countCards('h');
                                    if (nh <= player.hp && nh <= 4 && _status.event.name == 'chooseToUse') {
                                        if (typeof _status.event.filterCard == 'function' &&
                                            _status.event.filterCard({ name: 'huogong' })) {
                                            return -10;
                                        }
                                        if (_status.event.skill) {
                                            var viewAs = get.info(_status.event.skill).viewAs;
                                            if (viewAs == 'huogong') return -10;
                                            if (viewAs && viewAs.name == 'huogong') return -10;
                                        }
                                    }
                                    return 0;
                                },
                                target: function (player, target) {
                                    if (target.hasSkill('huogong2') || target.countCards('h') == 0) return 0;
                                    if (player.countCards('h') <= 1) return 0;
                                    if (target == player) {
                                        if (typeof _status.event.filterCard == 'function' &&
                                            _status.event.filterCard({ name: 'huogong' })) {
                                            return -1.5;
                                        }
                                        if (_status.event.skill) {
                                            var viewAs = get.info(_status.event.skill).viewAs;
                                            if (viewAs == 'huogong') return -1.5;
                                            if (viewAs && viewAs.name == 'huogong') return -1.5;
                                        }
                                        return 0;
                                    }
                                    return -1.5;
                                },
                            },
                            tag: {
                                damage: 1,
                                fireDamage: 1,
                                natureDamage: 1,
                                norepeat: 1,
                            },
                            target: function (player, target) {
                                if (target.hasSkill('huogong2') || target.num('h') == 0) return 0;
                                if (player.hasSkill('lianying') || player.hasSkill('relianying') || player.hasSkill('shangshi')) return -1;
                                if (player.num('h') <= 2) return 0;
                                var num = 0;
                                var spade = player.num('h', { suit: 'spade' });
                                var heart = player.num('h', function (card) {
                                    return get.suit(card) == 'heart' && card.name != 'huogong'
                                });
                                var club = player.num('h', { suit: 'club' });
                                var diamond = player.num('h', function (card) {
                                    return get.suit(card) == 'diamond' && card.name != 'huogong'
                                });
                                num += spade + heart + club + diamond;
                                if (num < 2) return 0;
                                if (target == player) {
                                    if (typeof _status.event.filterCard == 'function' &&
                                        _status.event.filterCard({ name: 'huogong' })) {
                                        return -1.5;
                                    }
                                    if (_status.event.skill) {
                                        var viewAs = get.info(_status.event.skill).viewAs;
                                        if (viewAs == 'huogong') return -1.5;
                                        if (viewAs && viewAs.name == 'huogong') return -1.5;
                                    }
                                    return 0;
                                }
                                return -1.5;
                            },
                        },
                    },
                    "圣_jinnang4": {
                        audio: "ext:圣神包:2",
                        enable: ["chooseToUse", "chooseToRespond"],
                        filterCard: function (card) {
                            return get.suit(card) == 'club';
                        },
                        forced: true,
                        position: "he",
                        selectCard: 1,
                        viewAs: {
                            name: "tiesuo",
                            suit: "club",
                            number: 4,
                            cards: [{ "node": { "image": {}, "info": {}, "name": {}, "name2": {}, "background": {}, "intro": {}, "range": {} }, "storage": {}, "vanishtag": [], "_uncheck": [], "suit": "club", "number": 4, "name": "caoyao", "cardid": "1937403369", "clone": { "name": "caoyao", "suit": "club", "number": 4, "node": { "name": {}, "info": {}, "intro": {}, "background": {}, "image": {} }, "_transitionEnded": true, "timeout": 1056 }, "timeout": 1029, "original": "h" }],
                        },
                        viewAsFilter: function (player) {
                            if (!player.countCards('he', { suit: 'club' })) return false;
                        },
                        prompt: "将一张♣️牌当做【铁索连环】使用",
                        ai: {
                            order: 7.5,
                            result: {
                                target: function (player, target) {
                                    if (ui.selected.targets.length) return 0;
                                    if (target.isLinked()) return 1;
                                    return -1;
                                },
                            },
                            wuxie: function () {
                                if (Math.random() < 0.5) return 0;
                            },
                            basic: {
                                useful: 4,
                                value: 4,
                                order: 7,
                            },
                            tag: {
                                multitarget: 1,
                                multineg: 1,
                                norepeat: 1,
                            },
                        },
                    },
                    "-———————————-": {
                    },
                    "圣_xueji": {
                        audio: "ext:圣神包:2",
                        enable: "phaseUse",
                        usable: 1,
                        locked: true,
                        filter: function (event, player) {
                            return player.hp > 0;
                        },
                        filterTarget: true,
                        selectTarget: function () {
                            var player = _status.event.player
                            return [1, Math.max(1, player.maxHp - player.hp)];
                        },
                        multitarget: true,
                        multiline: true,
                        line: "fire",
                        content: function () {
                            'step 0'
                            player.loseHp();
                            event.delay = false;
                            for (var i = 0; i < targets.length; i++) {
                                if (!targets[i].isLinked()) {
                                    targets[i].link(true);
                                    event.delay = true;
                                }
                            }
                            'step 1'
                            if (event.delay) {
                                game.delay();
                            }
                            'step 2'
                            targets[0].damage('fire');
                        },
                        ai: {
                            damage: true,
                            threaten: 1.5,
                            order: 7,
                            result: {
                                target: function (player, target) {
                                    var eff = get.damageEffect(target, player, target, 'fire');
                                    if (target.isLinked()) {
                                        return eff / 10;
                                    }
                                    else {
                                        return eff;
                                    }
                                },
                            },
                        },
                    },
                    "圣_huxiao": {
                        trigger: {
                            source: "damageEnd",
                        },
                        derivation: "圣_huxiao_jieshao",
                        silent: true,
                        filter: function (event, player) {
                            if (event._notrigger.contains(event.player)) return false;
                            return event.nature == 'fire';
                        },
                        content: function () {
                            if (!player.storage.圣_huxiao) {
                                player.storage.圣_huxiao = [];
                            }
                            player.storage.圣_huxiao.add(trigger.player);
                        },
                        group: ["圣_huxiao_draw", "圣_huxiao_clear", "圣_huxiao_mark"],
                        subSkill: {
                            draw: {
                                trigger: {
                                    source: "damageAfter",
                                },
                                priority: -6,
                                filter: function (event, player) {
                                    if (!player.storage.圣_huxiao || !player.storage.圣_huxiao.length) return false;
                                    for (var i = 0; i < player.storage.圣_huxiao.length; i++) {
                                        if (player.storage.圣_huxiao[i].isIn()) return true;
                                    }
                                    return false;
                                },
                                check: function () {
                                    return false;
                                },
                                forced: true,
                                content: function () {
                                    for (var i = 0; i < player.storage.圣_huxiao.length; i++) {
                                        if (!player.storage.圣_huxiao[i].isIn()) {
                                            player.storage.圣_huxiao.splice(i--, 1);
                                        }
                                    }
                                    game.asyncDraw(player.storage.圣_huxiao);
                                    if (!player.storage.圣_huxiao3) {
                                        player.storage.圣_huxiao3 = [];
                                    }
                                    player.storage.圣_huxiao3.addArray(player.storage.圣_huxiao);
                                    player.draw(trigger.num);
                                    player.addTempSkill('圣_huxiao3');
                                    trigger.player.addTempSkill('圣_huxiao_mark');
                                },
                                sub: true,
                            },
                            clear: {
                                trigger: {
                                    source: "damageAfter",
                                },
                                priority: -7,
                                silent: true,
                                content: function () {
                                    delete player.storage.圣_huxiao;
                                },
                                sub: true,
                                forced: true,
                                popup: false,
                            },
                            mark: {
                                marktext: "啸",
                                locked: true,
                                mark: true,
                                intro: {
                                    content: "拥有“啸”印记的角色受到来自神银屏的火属性伤害时，与神银屏各摸一张牌；神银屏对拥有“啸”印记的角色使用牌无次数限制",
                                },
                                sub: true,
                            },
                        },
                        forced: true,
                        popup: false,
                    },
                    "圣_huxiao_jieshao": {
                    },
                    "圣_huxiao3": {
                        onremove: true,
                        mod: {
                            cardUsable: function (card, player, num) {
                                if (typeof num == 'number') return num + 100;
                            },
                            playerEnabled: function (card, player, target) {
                                if (!player.storage.圣_huxiao3 || !player.storage.圣_huxiao3.contains(target)) {
                                    var num = player.getCardUsable(card) - 100;
                                    if (num <= 0) return false;
                                }
                            },
                        },
                    },
                    "圣_shengyou": {
                        audio: "ext:圣神包:2",
                        trigger: {
                            player: "phaseBegin",
                        },
                        forced: true,
                        content: function () {
                            if (!player.getEquip(1)) {
                                if (trigger.name == 'phase') {
                                    player.useCard(game.createCard('qinglong', 'spade', 13), player);
                                }
                            }
                            else {
                                player.recover();
                            }
                        },
                    },
                    "圣_hunji": {
                        skillAnimation: true,
                        audio: "ext:圣神包:2",
                        trigger: {
                            player: "phaseEnd",
                        },
                        forced: true,
                        derivation: "圣_shengyou",
                        filter: function (event, player) {
                            return player.getStat('damage') >= player.hp && !player.storage.圣_hunji;
                        },
                        content: function () {
                            "step 0"
                            if (player.isDamaged()) {
                                player.recover();
                            }
                            else {
                                player.draw();
                            }
                            player.addSkill('圣_shengyou');
                            player.awakenSkill('圣_hunji');
                            player.storage.圣_hunji = true;
                        },
                    },
                    "===============": {
                    },
                    "圣_yueying": {
                        trigger: {
                            player: ["phaseBegin", "phaseEnd"],
                        },
                        audio: "ext:圣神包:2",
                        priority: -1,
                        forced: true,
                        content: function () {
                            'step 0'
                            event.target = game.filterPlayer().randomGet(player);
                            if (!event.target) {
                                event.finish();
                                return;
                            }
                            player.line(event.target);
                            game.delayx();
                            'step 1'
                            event.target.damage();
                            'step 2'
                            player.recover();
                            player.draw();
                        },
                    },
                    "圣_tianzi": {
                        mod: {
                            targetEnabled: function (card, player, target, now) {
                                if (card.name == 'juedou' || card.name == 'jiedao') return false;
                            },
                        },
                        trigger: {
                            target: "useCardToBefore",
                        },
                        forced: true,
                        priority: 100,
                        filter: function (event, player) {
                            return (event.card.name == 'juedou' || event.card.name == 'jiedao');
                        },
                        content: function () {
                            trigger.cancel();
                        },
                    },
                    "圣_fengwu": {
                        audio: "ext:圣神包:2",
                        enable: "phaseUse",
                        locked: true,
                        filter: function (event, player) {
                            return game.countPlayer(function (current) {
                                return current != player;
                            }) > 1 && player.countCards('he');
                        },
                        check: function (card) { return 10 - get.value(card) },
                        filterCard: true,
                        position: "he",
                        filterTarget: function (card, player, target) {
                            if (player == target) return false;
                            if (ui.selected.targets.length == 1) {
                                return target.canUse({ name: 'juedou' }, ui.selected.targets[0]);
                            }
                            return true;
                        },
                        targetprompt: ["首战", "次战"],
                        selectTarget: 2,
                        multitarget: true,
                        content: function () {
                            targets[0].useCard({ name: 'juedou' }, targets[1], 'noai').animate = false;
                            targets[1].useCard({ name: 'juedou' }, targets[0], 'noai').animate = false;
                            game.delay(0.5);
                        },
                        ai: {
                            order: 8,
                            result: {
                                target: function (player, target) {
                                    if (ui.selected.targets.length == 0) {
                                        return -3;
                                    }
                                    else {
                                        return get.effect(target, { name: 'juedou' }, ui.selected.targets[0], target);
                                    }
                                },
                            },
                            expose: 0.4,
                            threaten: 3,
                        },
                    },
                    "。。。。。。。。。。。。": {
                    },
                    "圣_tiaoxin": {
                        audio: "ext:圣神包:2",
                        enable: "phaseUse",
                        usable: 1,
                        locked: true,
                        filterTarget: function (card, player, target) {
                            return target != player && target.countCards('he') > 0;
                        },
                        content: function () {
                            'step 0'
                            player.discardPlayerCard(target, true);
                            'step 1'
                            if (result.links && result.links.length) {
                                if (result.links[0].name == 'sha') {
                                    player.damage(target, true);
                                }
                                else {
                                    target.damage(player, true);
                                }
                            }
                            'step 2'
                            if (result.targets && result.targets.length) {
                                result.targets.sort(lib.sort.seat);
                                player.line(result.targets, 'green');
                                game.asyncDraw(result.targets);
                            }
                        },
                        ai: {
                            order: 4,
                            expose: 0.2,
                            result: {
                                target: -1,
                                player: function (player, target) {
                                    if (target.countCards('h') == 0) return 0;
                                    if (target.countCards('h') == 1) return -0.1;
                                    if (player.hp <= 2) return -2;
                                    if (player.countCards('h', 'shan') == 0) return -1;
                                    return -0.5;
                                },
                            },
                            threaten: 1.1,
                        },
                    },
                    "圣_youlin": {
                        trigger: {
                            player: "damageEnd",
                        },
                        filter: function (event, player) {
                            return event.source && event.source != player;
                        },
                        priority: -1,
                        forced: true,
                        content: function () {
                            player.changeHujia();
                        },
                    },
                    "圣_qilin": {
                        trigger: {
                            player: "damageEnd",
                        },
                        priority: 100,
                        forced: true,
                        content: function () {
                            player.changeHujia(trigger.num);
                            player.draw(trigger.num);
                        },
                    },
                    "圣_beifa": {
                        audio: "ext:圣神包:2",
                        enable: "phaseUse",
                        usable: 1,
                        locked: true,
                        position: "h",
                        selectCard: -1,
                        filterCard: true,
                        filterTarget: function (event, player, target) {
                            return target != player;
                        },
                        selectTarget: true,
                        filter: function (event, player) {
                            return player.countCards('h') > 0;
                        },
                        content: function () {
                            'step 0'
                            player.useCard({ name: 'sha' }, targets, false);
                            'step 1'
                            if (target.hp < player.hp) {
                                player.loseHp();
                                target.damage(player, true);
                            }
                            if (target.countCards('h') > player.countCards('h')) {
                                player.gainPlayerCard(target, true, 'h');
                            }
                        },
                        ai: {
                            order: 5,
                            result: {
                                player: function (player, target) {
                                    if (player.hp >= target.hp) return -0.9;
                                    if (player.hp <= 2) return -10;
                                    return -2;
                                },
                                target: function (player, target) {
                                    return get.effect(target, { name: 'sha' }, player, target);
                                },
                            },
                        },
                    },
                    "圣_longyi": {
                        skillAnimation: "epic",
                        audio: "ext:圣神包:2",
                        unique: true,
                        priority: -10,
                        derivation: ["圣_qilin", "圣_beifa"],
                        trigger: {
                            player: "phaseBeginStart",
                        },
                        forced: true,
                        filter: function (event, player) {
                            if (player.storage.圣_longyi) return false;
                            return player.countCards('h') == 0 || player.hp < player.maxHp * 0.5;
                        },
                        content: function () {
                            "step 0"
                            player.awakenSkill('圣_longyi');
                            player.storage.圣_longyi = true;
                            "step 1"
                            player.recover();
                            player.draw();
                            player.removeSkill('圣_youlin');
                            player.addSkill('圣_qilin');
                            player.addSkill('圣_beifa');
                        },
                    },
                    "-----------------------------------------": {
                    },
                    "圣_nuhun": {
                        trigger: {
                            player: "dieBefore",
                        },
                        forced: true,
                        filter: function (event, player) {
                            return player.maxHp > 0;
                        },
                        content: function () {
                            trigger.cancel();
                            player.loseMaxHp();
                            player.recover(player.maxHp - player.hp);

                        },
                    },
                    "圣_shenwu": {
                        audio: "ext:圣神包:2",
                        group: "圣_shenwu1",
                        mod: {
                            selectTarget: function (card, player, range) {
                                if (card.name != 'sha') return;
                                if (range[1] == -1) return;
                                range[1] = Infinity;
                            },
                            cardUsable: function (card, player, num) {
                                if (card.name == 'sha') return num + 1;
                            },
                        },
                    },
                    "圣_nufen": {
                        audio: "ext:圣神包:2",
                        enable: "phaseUse",
                        filter: function (event, player) {
                            return player.storage.圣_shenwu1 >= 4;
                        },
                        usable: 1,
                        skillAnimation: "epic",
                        animationColor: "metal",
                        content: function () {
                            "step 0"
                            player.storage.圣_shenwu1 -= 4;
                            player.syncStorage('圣_shenwu1');
                            player.updateMarks('圣_shenwu1');
                            event.targets = game.filterPlayer();
                            event.targets.remove(player);
                            event.targets.sort(lib.sort.seat);
                            event.targets2 = event.targets.slice(0);
                            player.line(event.targets, 'green');
                            "step 1"
                            if (event.targets2.length) {
                                var cur = event.targets2.shift();
                                if (cur && cur.countCards('he')) {
                                    cur.chooseToDiscard('e', true, 2);
                                    cur.chooseToDiscard('h', true, 4);
                                }
                                event.redo();
                            }
                            "step 3"
                            player.addTempSkill('圣_nufen_juli');
                        },
                        ai: {
                            combo: "圣_shenwu1",
                            order: 10,
                            result: {
                                player: function (player) {
                                    return game.countPlayer(function (current) {
                                        if (current != player) {
                                            return get.sgn(get.damageEffect(current, player, player));
                                        }
                                    });
                                },
                            },
                        },
                        subSkill: {
                            juli: {
                                mod: {
                                    globalFrom: function (from, to, distance) {
                                        return distance - Infinity;
                                    },
                                },
                                sub: true,
                            },
                        },
                    },
                    "圣_shenwu1": {
                        audio: "ext:圣神包:2",
                        mark: true,
                        marktext: "愤",
                        init: function (player) {
                            player.storage.圣_shenwu1 = 4;
                            player.markSkill('圣_shenwu1');
                            player.syncStorage('圣_shenwu1');
                        },
                        trigger: {
                            source: "damageEnd",
                            player: ["damageEnd", "loseHpEnd"],
                        },
                        forced: true,
                        filter: function (event) {
                            return event.num > 0;
                        },
                        content: function () {
                            player.storage.圣_shenwu1 += trigger.num;
                            player.markSkill('圣_shenwu1');
                            player.syncStorage('圣_shenwu1');
                        },
                        intro: {
                            content: "mark",
                        },
                        ai: {
                            combo: "圣_nufen",
                            maixie: true,
                            "maixie_hp": true,
                        },
                    },
                    "圣_wushuang": {
                        mod: {
                            selectTarget: function (card, player, range) {
                                if (card.name == 'juedou') range[1] += 1;
                                if (card.name == 'sha') range[1] += 1;
                            },
                            cardUsable: function (card, player, num) {
                                if (card.name == 'sha') return num + 1;
                            },
                        },
                        audio: "ext:圣神包:2",
                        trigger: {
                            player: "shaBegin",
                        },
                        forced: true,
                        filter: function (event, player) {
                            return !event.directHit;
                        },
                        priority: -1,
                        content: function () {
                            if (typeof trigger.shanRequired == 'number') {
                                trigger.shanRequired++;
                            }
                            else {
                                trigger.shanRequired = 2;
                            }
                        },
                        group: "圣_wushuang_juedou",
                        subSkill: {
                            juedou: {
                                audio: 2,
                                trigger: {
                                    player: "juedou",
                                    target: "juedou",
                                },
                                forced: true,
                                filter: function (event, player) {
                                    return event.turn != player;
                                },
                                priority: -1,
                                content: function () {
                                    "step 0"
                                    var next = trigger.turn.chooseToRespond({ name: 'sha' }, '请打出一张杀响应决斗');
                                    next.set('prompt2', '（共需打出2张杀）');
                                    next.autochoose = lib.filter.autoRespondSha;
                                    next.set('ai', function (card) {
                                        var player = _status.event.player;
                                        var trigger = _status.event.getTrigger();
                                        if (get.attitude(trigger.turn, player) < 0 && trigger.turn.countCards('h', 'sha') > 1) {
                                            return get.unuseful2(card);
                                        }
                                        return -1;
                                    });
                                    "step 1"
                                    if (result.bool == false) {
                                        trigger.directHit = true;
                                    }
                                },
                                ai: {
                                    result: {
                                        target: function (card, player, target) {
                                            if (card.name == 'juedou' && target.countCards('h') > 0) return [1, 0, 0, -1];
                                        },
                                    },
                                },
                                sub: true,
                            },
                        },
                    },
                    "圣_shenfen": {
                        audio: "ext:圣神包:2",
                        trigger: {
                            player: "phaseBegin",
                        },
                        group: "圣_mashu",
                        unique: true,
                        derivation: ["圣_mashu", "圣_nufen", "圣_shenwu"],
                        skillAnimation: "epic",
                        filter: function (event) {
                            return event.player.hp <= 2 || event.player.maxHp <= 2
                        },
                        forced: true,
                        content: function () {
                            'step 0'
                            player.gainMaxHp();
                            player.recover();
                            'step 1'
                            player.removeSkill('圣_wushuang');
                            player.removeSkill('圣_nuhun');
                            'step 2'
                            player.addSkill('圣_nufen');
                            player.addSkill('圣_nuhun');
                            player.addSkill('圣_shenwu');
                            player.awakenSkill('圣_shenfen');
                        },
                    },
                    "、、、、、、、、、、、、、": {
                    },
                    "圣_gongao": {
                        audio: "ext:圣神包:2",
                        trigger: {
                            global: "dying",
                        },
                        filter: function (event, player) {
                            return event.num != 0 && event.player != player && event.player.hp < 1;
                        },
                        forced: true,
                        unique: true,
                        priority: 100,
                        content: function () {
                            player.gainMaxHp();
                            player.recover();
                            player.draw();
                        },
                        ai: {
                            threaten: 1.5,
                        },
                    },
                    "圣_weizhong": {
                        audio: "ext:圣神包:2",
                        trigger: {
                            player: ["recoverEnd", "damageEnd", "loseHpEnd"],
                        },
                        forced: true,
                        filter: function (event) {
                            return event.num != 0;
                        },
                        priority: -1,
                        content: function () {
                            player.draw(trigger.num);
                        },
                    },
                    "圣_benghuai": {
                        audio: "ext:圣神包:2",
                        trigger: {
                            player: "useCardAfter",
                        },
                        priority: -1,
                        forced: true,
                        filter: function (event, player) {
                            return player.hp > player.maxHp * 0.5;
                        },
                        content: function () {
                            player.loseHp();
                        },
                    },
                    "圣_juyi": {
                        skillAnimation: true,
                        audio: "ext:圣神包:2",
                        derivation: ["圣_weizhong", "圣_benghuai"],
                        trigger: {
                            player: "phaseBegin",
                        },
                        filter: function (event, player) {
                            return player.maxHp > 5 && player.hp < player.maxHp && !player.storage.圣_juyi;
                        },
                        forced: true,
                        unique: true,
                        content: function () {
                            player.draw(player.maxHp - player.hp);
                            player.addSkill('圣_weizhong');
                            player.addSkill('圣_benghuai');
                            player.storage.圣_juyi = true;
                            player.awakenSkill('圣_juyi');
                        },
                    },
                    vvvvvvvvvvvvvvvvvvvvvvvvv: {
                    },
                    "圣_wansha": {
                        audio: "ext:圣神包:2",
                        trigger: {
                            global: "dying",
                        },
                        priority: 100,
                        filter: function (event, player) {
                            return event.player != player && event.player.hp <= 0;
                        },
                        check: function (event, player) {
                            return get.attitude(player, event.player) < 0;
                        },
                        forced: true,
                        content: function () {
                            'step 0'
                            game.delayx();
                            trigger.player.die();
                            'step 1'
                            if (!trigger.player.isAlive()) {
                                trigger.cancel(true);
                            }
                            'step 2'
                            player.chooseDrawRecover(true, true);
                        },
                    },
                    "圣_weimu": {
                        trigger: {
                            target: "useCardToBefore",
                        },
                        audio: "ext:圣神包:2",
                        forced: true,
                        priority: 100,
                        filter: function (event, player) {
                            return event.card && get.color(event.card) == 'black' && event.player != player;
                        },
                        content: function () {
                            trigger.cancel();
                        },
                    },
                    "圣_luanshi": {
                        skillAnimation: true,
                        audio: "ext:圣神包:2",
                        unique: true,
                        enable: "phaseUse",
                        usable: 1,
                        content: function () {
                            "step 0"
                            event.current = player.next;
                            "step 1"
                            event.current.chooseToUse({ name: 'sha' }, function (card, player, target) {
                                if (player == target) return false;
                                if (get.distance(player, target) <= 1) return true;
                                var players = game.filterPlayer();
                                for (var i = 0; i < players.length; i++) {
                                    if (players[i] == player) continue;
                                    if (get.distance(player, players[i]) < get.distance(player, target)) return false;
                                }
                                return true;
                            })
                            "step 2"
                            if (result.bool == false) event.current.loseHp();
                            if (event.current.next != player) {
                                event.current = event.current.next;
                                game.delay(0.5);
                                event.goto(1);
                            }
                        },
                        ai: {
                            order: 1,
                            result: {
                                player: function (player) {
                                    if (player.countCards('h', 'shan')) return 1;
                                    var num = 0, players = game.filterPlayer();
                                    for (var i = 0; i < players.length; i++) {
                                        if (players[i].canUse('sha', player) && players[i].countCards('h') > 1) {
                                            num--;
                                        }
                                        else {
                                            num++;
                                        }
                                    }
                                    return num;
                                },
                            },
                        },
                    },
                    "。。。。。。。。。。。。。": {
                    },
                    "圣_qirang": {
                        trigger: {
                            player: "useCardEnd",
                        },
                        audio: "ext:圣神包:2",
                        usable: 1,
                        forced: true,
                        filter: function (event, player) {
                            return _status.currentPhase == player && get.type(event.card, 'trick') == 'trick';
                        },
                        content: function () {
                            var list = get.inpile('equip');
                            player.gain(game.createCard(list.randomGet()), 'draw')

                        },
                        group: "圣_qirang_equip",
                        subSkill: {
                            equip: {
                                trigger: {
                                    player: "useCardEnd",
                                },
                                audio: "ext:圣神包:2",
                                usable: 1,
                                forced: true,
                                filter: function (event, player) {
                                    return _status.currentPhase == player && get.type(event.card, 'trick') == 'equip';
                                },
                                content: function () {
                                    var list = get.inpile('trick');
                                    player.gain(game.createCard(list.randomGet()), 'draw')

                                },
                                sub: true,
                            },
                        },
                    },
                    "圣_yuhua": {
                        mod: {
                            ignoredHandcard: function (card, player) {
                                if (get.type(card) != 'basic') {
                                    return true;
                                }
                            },
                        },
                    },
                    "圣_xianjia": {
                        trigger: {
                            global: "useCardEnd",
                        },
                        audio: "ext:圣神包:2",
                        forced: true,
                        filter: function (event, player) {
                            return event.player != player && _status.currentPhase != player && get.type(event.card, 'trick') == 'trick';
                        },
                        content: function () {
                            player.changeHujia();
                        },
                        group: "圣_xianjia_zero",
                        subSkill: {
                            zero: {
                                trigger: {
                                    player: "phaseBefore",
                                },
                                filter: function (event, player) {
                                    return player.hujia > 0;
                                },
                                check: function (event, player) {
                                    return player.hujia > 1 && player.hp > 1;
                                },
                                forced: true,
                                content: function () {
                                    player.changeHujia(-player.hujia);
                                },
                                sub: true,
                            },
                        },
                    },
                    "◆◆◆◆◆◆◆◆◆◆◆◆◆": {
                    },
                    "圣_longying": {
                        group: ["圣_longying1", "圣_longying2", "圣_longying3", "圣_longying4"],
                    },
                    "圣_longying1": {
                        enable: ["chooseToRespond", "chooseToUse"],
                        filterCard: function (card, player) {
                            return get.suit(card) == 'diamond';
                        },
                        selectCard: true,
                        forced: true,
                        position: "he",
                        viewAs: {
                            name: "sha",
                            nature: "fire",
                            suit: "diamond",
                            number: 1,
                            cards: [{ "node": { "image": {}, "info": {}, "name": {}, "name2": {}, "background": {}, "intro": {}, "range": {} }, "storage": {}, "vanishtag": [], "_uncheck": [], "suit": "diamond", "number": 1, "name": "shan", "cardid": "19928311295", "_transform": "translateX(448px)", "clone": { "name": "shan", "suit": "diamond", "number": 1, "node": { "name": {}, "info": {}, "intro": {}, "background": {}, "image": {} }, "_transitionEnded": true, "timeout": 762 }, "timeout": 746, "original": "h" }],
                        },
                        viewAsFilter: function (player) {
                            if (get.zhu(player, 'shouyue')) {
                                if (!player.countCards('he')) return false;
                            }
                            else {
                                if (!player.countCards('he', { suit: 'diamond' })) return false;
                            }
                        },
                        prompt: "将一张♦️牌当【火杀】使用或打出",
                        check: function (card) { return 4 - get.value(card) },
                        ai: {
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
                                    if (player.hasSkill('jiu') && !target.getEquip('baiyin')) {
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
                    "圣_longying2": {
                        audio: "ext:圣神包:2",
                        enable: ["chooseToUse", "chooseToRespond"],
                        filterCard: function (card) {
                            return get.suit(card) == 'heart';
                        },
                        forced: true,
                        position: "he",
                        selectCard: 1,
                        viewAs: {
                            name: "tao",
                            suit: "heart",
                            number: 11,
                            cards: [{ "node": { "image": {}, "info": {}, "name": {}, "name2": {}, "background": {}, "intro": {}, "range": {} }, "storage": {}, "vanishtag": [], "_uncheck": [], "suit": "heart", "number": 11, "name": "shan", "cardid": "9757249308", "_transform": "translateX(112px)", "clone": { "name": "shan", "suit": "heart", "number": 11, "node": { "name": {}, "info": {}, "intro": {}, "background": {}, "image": {} }, "_transitionEnded": true, "timeout": 836 }, "timeout": 825, "original": "h" }],
                        },
                        viewAsFilter: function (player) {
                            if (!player.countCards('he', { suit: 'heart' })) return false;
                        },
                        check: function (card) {
                            if (_status.event.type == 'dying') return 1;
                            return 4 - get.value(card);
                        },
                        prompt: "将一张♥️牌当做【桃】使用",
                        ai: {
                            basic: {
                                order: function (card, player) {
                                    if (player.hasSkillTag('pretao')) return 5;
                                    return 2;
                                },
                                useful: [8, 6.5, 5, 4],
                                value: [8, 6.5, 5, 4],
                            },
                            result: {
                                target: function (player, target) {
                                    // if(player==target&&player.hp<=0) return 2;
                                    var nd = player.needsToDiscard();
                                    var keep = false;
                                    if (nd <= 0) {
                                        keep = true;
                                    }
                                    else if (nd == 1 && target.hp >= 2 && target.countCards('h', 'tao') <= 1) {
                                        keep = true;
                                    }
                                    var mode = get.mode();
                                    if (target.hp >= 2 && keep && target.hasFriend()) {
                                        if (target.hp > 2 || nd == 0) return 0;
                                        if (target.hp == 2) {
                                            if (game.hasPlayer(function (current) {
                                                if (target != current && get.attitude(target, current) >= 3) {
                                                    if (current.hp <= 1) return true;
                                                    if ((mode == 'identity' || mode == 'versus' || mode == 'chess') && current.identity == 'zhu' && current.hp <= 2) return true;
                                                }
                                            })) {
                                                return 0;
                                            }
                                        }
                                    }
                                    if (target.hp < 0 && target != player && target.identity != 'zhu') return 0;
                                    var att = get.attitude(player, target);
                                    if (att < 3 && att >= 0 && player != target) return 0;
                                    var tri = _status.event.getTrigger();
                                    if (mode == 'identity' && player.identity == 'fan' && target.identity == 'fan') {
                                        if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'fan' && tri.source != target) {
                                            var num = game.countPlayer(function (current) {
                                                if (current.identity == 'fan') {
                                                    return current.countCards('h', 'tao');
                                                }
                                            });
                                            if (num > 1 && player == target) return 2;
                                            return 0;
                                        }
                                    }
                                    if (mode == 'identity' && player.identity == 'zhu' && target.identity == 'nei') {
                                        if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'zhong') {
                                            return 0;
                                        }
                                    }
                                    if (mode == 'stone' && target.isMin() &&
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
                    "圣_longying3": {
                        audio: "ext:圣神包:2",
                        enable: "chooseToUse",
                        filterCard: function (card) {
                            return get.suit(card) == 'spade';
                        },
                        forced: true,
                        position: "he",
                        selectCard: 1,
                        viewAsFilter: function (player) {
                            return player.countCards('he', { suit: 'spade' }) > 0;
                        },
                        viewAs: {
                            name: "wuxie",
                            suit: "spade",
                            number: 4,
                            cards: [{ "node": { "image": {}, "info": {}, "name": {}, "name2": {}, "background": {}, "intro": {}, "range": {} }, "storage": {}, "vanishtag": [], "_uncheck": [], "suit": "spade", "number": 4, "name": "bxyr_su", "cardid": "1349845382", "clone": { "name": "bxyr_su", "suit": "spade", "number": 4, "node": { "name": {}, "info": {}, "intro": {}, "background": {}, "image": {} }, "_transitionEnded": true, "timeout": 273 }, "timeout": 226, "original": "h" }],
                        },
                        prompt: "将一张♠️卡牌当做【无懈可击】使用",
                        check: function (card) { return 8 - get.value(card) },
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
                    "圣_longying4": {
                        audio: "ext:圣神包:2",
                        enable: ["chooseToUse", "chooseToRespond"],
                        prompt: function () {
                            return '将一张♣️牌当作【闪】使用';
                        },
                        position: "he",
                        selectCard: 1,
                        check: function (card) { return 8 - get.value(card) },
                        viewAs: {
                            name: "shan",
                            suit: "club",
                            number: 11,
                        },
                        filterCard: function (card) {
                            return get.suit(card) == 'club';
                        },
                        ai: {
                            basic: {
                                useful: [7, 2],
                                value: [7, 2],
                            },
                        },
                    },
                    "圣_nijing": {
                        audio: "ext:圣神包:2",
                        trigger: {
                            player: "phaseDrawBegin",
                        },
                        priority: -10,
                        forced: true,
                        content: function () {
                            if (player.hp == 1) {
                            }
                            else {
                                player.loseHp(player.hp - 1);
                                trigger.num += player.hp - 1;
                            }
                        },
                    },
                    "圣_longhun": {
                        trigger: {
                            player: "phaseDiscardEnd",
                        },
                        forced: true,
                        filter: function (event, player) {
                            if (event.cards) {
                                var suits = [];
                                for (var i = 0; i < event.cards.length; i++) {
                                    var suit = get.suit(event.cards[i]);
                                    if (suits.contains(suit)) {
                                        return false;
                                    }
                                    else {
                                        suits.push(suit);
                                    }
                                }
                                return true;
                            }
                            return false;
                        },
                        content: function () {
                            player.recover(player.maxHp - player.hp);
                            player.draw(player.maxHp - player.hp);
                        },
                    },
                    xxxxxxxxxxxxxxxxxxxxxxxx: {
                    },
                    "圣_shenxian": {
                        audio: "ext:圣神包:2",
                        trigger: {
                            global: "loseEnd",
                        },
                        filter: function (event, player) {
                            return _status.currentPhase != player && event.player != player && event.player.countCards('h') >= player.countCards('h');
                        },
                        forced: true,
                        content: function () {
                            player.draw();
                        },
                    },
                    "圣_qiangwu": {
                        audio: "ext:圣神包:2",
                        enable: "phaseUse",
                        usable: 1,
                        forced: true,
                        content: function () {
                            "step 0"
                            player.judge();
                            "step 1"
                            if (result.color == 'red') {
                                player.addTempSkill('圣_qiangwu3');
                                game.log(player, '发动了【枪舞】，本回合内', player, '使用【杀】无次数限制')
                            }
                            else {
                                player.addTempSkill('圣_qiangwu2');
                                game.log(player, '发动了【枪舞】，本回合内', player, '使用【杀】无距离限制')
                            }
                        },
                    },
                    "圣_qiangwu2": {
                        mod: {
                            targetInRange: function (card) {
                                if (card.name == 'sha') return true;
                            },
                        },
                    },
                    "圣_qiangwu3": {
                        mod: {
                            cardUsable: function (card, player, num) {
                                if (card.name == 'sha') return Infinity;
                            },
                        },
                        ai: {
                            unequip: true,
                            skillTagFilter: function (player, tag, arg) {
                                if (!get.zhu(player, 'shouyue')) return false;
                                if (arg && arg.name == 'sha') return true;
                                return false;
                            },
                        },
                    },
                    "圣_fengxiang": {
                        audio: "ext:圣神包:2",
                        trigger: {
                            global: "damageEnd",
                        },
                        forced: true,
                        filter: function (event, player) {
                            if (event.card.name != 'sha') return false;
                            return get.itemtype(event.cards) == 'cards' && get.position(event.cards[0]) == 'd' && event.source && event.source != player;
                        },
                        content: function () {
                            player.gain(trigger.cards);
                            player.$gain2(trigger.cards);

                        },
                    },
                    ooooooooooooooooooooo: {
                    },
                    "圣_shensu": {
                        audio: "ext:圣神包:2",
                        trigger: {
                            player: ["phaseBegin", "phaseUseBegin", "phaseEnd"],
                        },
                        forced: true,
                        direct: true,
                        content: function () {
                            "step 0"
                            player.chooseTarget(get.prompt('圣_shensu'), function (card, player, target) {
                                if (target.isFriendOf(player)) return false;
                                return lib.filter.targetEnabled({ name: 'sha' }, player, target);
                            }).ai = function (target) {
                                return get.effect(target, { name: 'sha' }, player);
                            }
                            "step 1"
                            if (result.bool) {
                                player.logSkill('圣_shensu');
                                player.useCard({ name: 'sha' }, result.targets, false);
                            }
                        },
                        ai: {
                            expose: 0.2,
                            threaten: 1.3,
                        },
                    },
                    "圣_leili": {
                        mod: {
                            cardEnabled: function (card, player) {
                                if (card.name == 'sha' && _status.currentPhase == player &&
                                    _status.event.getParent('phaseUse')) {
                                    return false;
                                }
                            },
                        },
                        enable: "phaseUse",
                        filter: function (event, player) {
                            return player.countCards('h', 'sha') > 0;
                        },
                        filterCard: {
                            name: "sha",
                        },
                        prepare: function (cards, player) {
                            player.$throw(cards, 1000);
                        },
                        discard: false,
                        delay: 0.5,
                        content: function () {
                            "step 0"
                            player.draw();
                            "step 1"
                            for (var i = 0; i < cards.length; i++) {
                                cards[i].discard();
                            }
                        },
                        ai: {
                            basic: {
                                order: 1,
                            },
                            result: {
                                player: 1,
                            },
                        },
                    },
                    "圣_jixi": {
                        audio: "ext:圣神包:2",
                        trigger: {
                            global: "damageEnd",
                        },
                        filter: function (event, player) {
                            return _status.currentPhase != player && event.player != player && event.source && event.source != player && event.player.isAlive();
                        },
                        logTarget: "player",
                        priority: 100,
                        locked: true,
                        content: function () {
                            player.turnOver();
                            trigger.player.damage(player, 'thunder', true);
                            player.draw();
                        },
                    },
                    "'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''": {
                    },
                    "圣_zhilue": {
                        audio: "ext:圣神包:2",
                        trigger: {
                            target: "useCardToAfter",
                        },
                        filter: function (event, player) {
                            return _status.currentPhase != player && event.player != player && get.type(event.card, 'trick') == 'trick';
                        },
                        forced: true,
                        content: function () {
                            player.gain(game.createCard(trigger.card), 'gain2');
                        },
                        ai: {
                            threaten: 0.5,
                        },
                    },
                    "圣_tiance": {
                        audio: "ext:圣神包:2",
                        trigger: {
                            player: "damageAfter",
                        },
                        forced: true,
                        direct: true,
                        content: function () {
                            "step 0"
                            player.chooseTarget(get.prompt('圣_tiance')).set('ai', function (target) {
                                var player = _status.event.player;
                            });
                            "step 1"
                            if (result.bool) {
                                player.logSkill('圣_tiance', result.targets);
                                result.targets[0].chooseDrawRecover(2, 1, true);
                            }
                        },
                        ai: {
                            threaten: 0.8,
                            expose: 0.1,
                        },
                    },
                    "圣_shenmou": {
                        audio: "ext:圣神包:2",
                        trigger: {
                            global: "judgeEnd",
                        },
                        forced: true,
                        check: function (event) {
                            if (event.result.card.name == 'du') return false;
                            return true;
                        },
                        filter: function (event, player) {
                            if (get.owner(event.result.card)) {
                                return false;
                            }
                            if (event.nogain && event.nogain(event.result.card)) {
                                return false;
                            }
                            return true;
                        },
                        content: function () {
                            player.gain(trigger.result.card);
                            player.$gain2(trigger.result.card);
                        },
                    },
                    "``````````````````````````": {
                    },
                    "圣_jigong": {
                        audio: "ext:圣神包:2",
                        enable: "phaseUse",
                        usable: 1,
                        forced: true,
                        check: function (event, player) {
                            var nh = player.countCards('h') - player.countCards('h', { type: 'equip' });
                            if (nh <= 1) return true;
                            if (player.countCards('h', 'tao')) return false;
                            if (nh <= 2) return Math.random() < 0.7;
                            if (nh <= 3) return Math.random() < 0.4;
                            return false;
                        },
                        content: function () {
                            player.draw(game.countPlayer());
                            player.addTempSkill('圣_jigong2');
                            player.addTempSkill('圣_jigong2_damage');
                        },
                    },
                    "圣_jigong2": {
                        mod: {
                            attackFrom: function () {
                                return -Infinity;
                            },
                            maxHandcard: function (player, num) {
                                var damage = player.getStat().damage;
                                if (typeof damage == 'number') return num - player.hp + damage;
                                return 0;
                            },
                        },
                        trigger: {
                            player: "phaseEnd",
                        },
                        forced: true,
                        filter: function (event, player) {
                            return !player.getStat('damage');
                        },
                        content: function () {
                            player.loseHp();
                        },
                        subSkill: {
                            damage: {
                                init: function (player) {
                                    player.storage.圣_jigong2_damage = 0;
                                },
                                mark: true,
                                intro: {
                                    content: "你最多可以保留#张手牌",
                                },
                                trigger: {
                                    source: "damageAfter",
                                },
                                forced: true,
                                content: function () {
                                    player.storage.圣_jigong2_damage += trigger.num;
                                    player.markSkill('圣_jigong2_damage');
                                },
                                sub: true,
                            },
                        },
                    },
                    "圣_shifei": {
                        audio: "ext:圣神包:2",
                        trigger: {
                            player: "chooseToRespondBegin",
                        },
                        usable: 1,
                        forced: true,
                        filter: function (event, player) {
                            if (event.responded) return false;
                            if (!event.filterCard({ name: 'shan' })) return false;
                            return true;
                        },
                        check: function (event, player) {
                            if (get.attitude(player, _status.currentPhase) > 0) return true;
                            var nh = _status.currentPhase.countCards('h') + 1;
                            var players = game.filterPlayer();
                            for (var i = 0; i < players.length; i++) {
                                if (players[i].countCards('h') > nh) {
                                    if (!player.hasShan() || get.attitude(player, players[i]) <= 0) return true;
                                }
                            }
                            return false;
                        },
                        content: function () {
                            'step 0'
                            player.line(_status.currentPhase, 'green');
                            _status.currentPhase.chooseToDiscard(1, 'he', true);
                            'step 1'
                            player.chooseTarget(get.prompt('圣_shifei'), function (card, player, target) {
                                return player != target
                            });
                            "step 2"
                            if (result.bool) {
                                result.targets[0].draw(1, true);
                                trigger.untrigger();
                                trigger.responded = true;
                                trigger.result = { bool: true, card: { name: 'shan' } }
                            }
                        },
                    },
                    "圣_dihui": {
                        audio: "ext:圣神包:2",
                        trigger: {
                            global: "phaseBegin",
                        },
                        forced: true,
                        filter: function (event, player) {
                            return event.player != player;
                        },
                        content: function () {
                            trigger.player.addTempSkill('圣_dihui_card');
                        },
                        subSkill: {
                            card: {
                                mod: {
                                    maxHandcard: function (player, num) {
                                        return num - 1;
                                    },
                                },
                                sub: true,
                            },
                        },
                    },
                    ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,": {
                    },
                    "圣_jueqing": {
                        audio: "ext:圣神包:2",
                        trigger: {
                            global: "recoverBegin",
                        },
                        forced: true,
                        priority: -1,
                        filter: function (event, player) {
                            return _status.currentPhase != event.player && event.player != player && event.player.hp > 0;
                        },
                        content: function () {
                            trigger.cancel();
                            trigger.player.loseHp();
                        },
                    },
                    "圣_wuxin": {
                        trigger: {
                            source: "damageBefore",
                        },
                        forced: true,
                        priority: -100,
                        check: function () { return false; },
                        content: function () {
                            trigger.cancel();
                            var ex = 0;
                            if (trigger.card && trigger.card.name == 'sha') {
                                if (player.hasSkill('jiu')) ex++;
                                if (player.hasSkill('luoyi2')) ex++;
                                if (player.hasSkill('reluoyi2')) ex++;
                            }
                            trigger.player.loseHp(trigger.num + ex);
                        },
                        group: "圣_wuxin_damage",
                        subSkill: {
                            damage: {
                                trigger: {
                                    player: "damageBefore",
                                },
                                forced: true,
                                priority: -100,
                                check: function () { return false; },
                                content: function () {
                                    trigger.cancel();
                                    var ex = 0;
                                    if (trigger.card && trigger.card.name == 'sha') {
                                        if (player.hasSkill('jiu')) ex++;
                                        if (player.hasSkill('luoyi2')) ex++;
                                        if (player.hasSkill('reluoyi2')) ex++;
                                    }
                                    player.loseHp(trigger.num + ex);
                                },
                                sub: true,
                            },
                        },
                        ai: {
                        },
                    },
                    "圣_shangshi": {
                        audio: "ext:圣神包:4",
                        trigger: {
                            player: "loseAfter",
                        },
                        forced: true,
                        priority: -1,
                        filter: function (event, player) {
                            return player.isDamaged();
                        },
                        content: function () {
                            if (_status.currentPhase == player) {
                                player.draw();
                            }
                            else {
                                player.draw(player.maxHp - player.countCards());
                            }
                        },
                    },
                    xxxxxxxxxxxxxxxxxxxxxxxxx: {
                    },
                    "圣_longyin": {
                        audio: "ext:圣神包:2",
                        trigger: {
                            global: "shaBegin",
                        },
                        forced: true,
                        direct: true,
                        filter: function (event, player) {
                            return event.target == event.targets[0] && player.countCards('he') > 0 && event.card.name == 'sha' &&
                                _status.currentPhase == event.player && event.parent.parent.parent.name == 'phaseUse';
                        },
                        content: function () {
                            'step 0'
                            var next = player.chooseToDiscard(get.prompt('圣_longyin'), 'he');
                            next.logSkill = ['圣_longyin', trigger.player];
                            next.set('ai', function (card) {
                                if (_status.event.go) {
                                    return 6 - get.value(card);
                                }
                                return 0;
                            });
                            next.set('go', go);
                            'step 1'
                            if (result.bool) {
                                trigger.player.getStat().card.sha--;
                                if (trigger.player != player) {
                                    trigger.player.draw();
                                    player.draw();
                                }
                                else {
                                    player.draw();
                                }
                                player.storage.圣_longyix++;
                                player.markSkill('圣_longyix');
                                player.syncStorage('圣_longyix');
                            }
                            // player.logSkill('圣_longyin',trigger.player);

                        },
                        ai: {
                            expose: 0.2,
                        },
                    },
                    "圣_rongzheng": {
                        audio: "ext:圣神包:2",
                        trigger: {
                            global: "damageBegin",
                        },
                        locked: true,
                        priority: 100,
                        filter: function (event, player) {
                            return event.source && event.source != player &&
                                event.card && event.card.name == 'sha' && event.player != player &&
                                player.storage.圣_longyix > 0;
                        },
                        content: function () {
                            player.storage.圣_longyix--;
                            player.markSkill('圣_longyix');
                            player.syncStorage('圣_longyix');
                            trigger.cancel();
                            _status.currentPhase.useCard({ name: 'sha' }, player);
                        },
                        ai: {
                            threaten: 1.2,
                            expose: 0.2,
                        },
                    },
                    "圣_longyix": {
                        mark: true,
                        marktext: "龙",
                        intro: {
                            content: "你当前拥有#枚印记",
                        },
                        init: function (player) {
                            player.storage.圣_longyix = 1;
                            player.markSkill('圣_longyix');
                            player.syncStorage('圣_longyix');
                        },
                        trigger: {
                            global: "gameDrawAfter",
                        },
                        forced: true,
                        priority: 100,
                        content: function () {
                            game.log(player, '获得了一枚“龙”印记')
                        },
                        ai: {
                        },
                    },
                    "︹︹︹︹︹︹︹︹︹︹︹︹︹": {
                    },
                    "圣_niepan": {
                        skillAnimation: "epic",
                        audio: "ext:圣神包:2",
                        forced: true,
                        unique: true,
                        priority: 100,
                        enable: "chooseToUse",
                        init: function (player) {
                            player.storage.圣_niepan = false;
                        },
                        mark: true,
                        filter: function (event, player) {
                            if (event.type != 'dying') return false;
                            if (player != event.dying) return false;
                            if (player.storage.圣_niepan) return false;
                            return true;
                        },
                        content: function () {
                            "step 0"
                            if (player.isLinked()) player.link();
                            if (player.isTurnedOver()) player.turnOver();
                            'step 1'
                            player.awakenSkill('圣_niepan');
                            player.recover(player.maxHp - player.hp);
                            'step 2'
                            player.chooseToDiscard('hej', true, Infinity);
                            player.draw(4);
                            player.storage.圣_niepan = true;
                        },
                        ai: {
                            save: true,
                            result: {
                                player: 10,
                            },
                            threaten: function (player, target) {
                                if (!target.storage.圣_niepan) return 0.9;
                            },
                        },
                        intro: {
                            content: "limited",
                        },
                    },
                    "圣_tianyu": {
                        audio: "ext:圣神包:true",
                        trigger: {
                            player: "phaseEnd",
                        },
                        forced: true,
                        priority: 100,
                        filter: function (event, player) {
                            if (player.isLinked()) return true;
                            return game.hasPlayer(function (current) {
                                return current != player && !current.isLinked();
                            });
                        },
                        content: function () {
                            "step 0"
                            event.targets = game.filterPlayer();
                            event.targets.remove(player);
                            event.targets.sort(lib.sort.seat);
                            "step 1"
                            if (event.targets.length) {
                                var target = event.targets.shift();
                                if (!target.isLinked()) {
                                    target.link();
                                    player.line(target, 'green');
                                }
                                event.redo();
                            }
                        },
                        group: "圣_tianyu_link",
                        subSkill: {
                            link: {
                                trigger: {
                                    player: "linkBefore",
                                },
                                priority: 100,
                                forced: true,
                                filter: function (event, player) {
                                    return !player.isLinked();
                                },
                                content: function () {
                                    trigger.cancel();
                                    game.log(player, '无法被横置');
                                },
                                sub: true,
                            },
                        },
                    },
                    "圣_huanyu": {
                        audio: "ext:圣神包:2",
                        enable: "phaseUse",
                        usable: 1,
                        forced: true,
                        filter: function (event, player) {
                            return player.countCards('he', { suit: 'club' }) > 0;
                        },
                        filterTarget: true,
                        selectTarget: function () {
                            var player = _status.event.player
                            return [1, Infinity];
                        },
                        position: "he",
                        filterCard: {
                            suit: "club",
                        },
                        check: function (card) {
                            return 8 - get.value(card);
                        },
                        multitarget: true,
                        multiline: true,
                        line: true,
                        content: function () {
                            'step 0'
                            event.delay = false;
                            for (var i = 0; i < targets.length; i++) {
                                if (!targets[i].isLinked()) {
                                    targets[i].link(true);
                                    event.delay = true;
                                }
                                else {
                                    targets[i].link(false);
                                    event.finish();
                                }
                            }
                            'step 1'
                            player.chooseControlList([
                                '炎凤燎原',
                                '霆凤风暴',
                            ], true)
                            'step 2'
                            if (result.index == 0) {
                                target.damage('fire')
                            }
                            else {
                                target.damage('thunder')
                            }
                            'step 2'
                            if (event.delay) {
                                game.delay();
                            }
                        },
                        ai: {
                            damage: true,
                            threaten: 1.5,
                            order: 7,
                            result: {
                                target: function (player, target) {
                                    var eff = get.damageEffect(target, player, target, 'fire');
                                    if (target.isLinked()) {
                                        return eff / 10;
                                    }
                                    else {
                                        return eff;
                                    }
                                },
                            },
                        },
                    },
                    "★★★★★★★★★★★★★": {
                    },
                    "圣_caishi": {
                        audio: "ext:圣神包:2",
                        trigger: {
                            player: "phaseBegin",
                        },
                        forced: true,
                        priority: -1,
                        filter: function (event, player) {
                            return player.isDamaged();
                        },
                        content: function () {
                            'step 0'
                            player.chooseControlList([
                                '恢复一点体力并令防御距离+1，本回合内不可对自己使用牌',
                                '摸一张牌并令手牌上限+1，本回合内不可对其他角色使用牌',
                            ], true)
                            'step 1'
                            if (result.index == 0) {
                                player.recover();
                                player.addTempSkill('圣_caishi_recover');
                                player.addTempSkill('圣_caishi_juli', { player: "phaseBegin" });
                            }
                            else {
                                player.draw();
                                player.addTempSkill('圣_caishi_draw');
                                player.addTempSkill('圣_caishi_max', { player: "phaseBegin" });
                            }
                        },
                        subSkill: {
                            juli: {
                                mod: {
                                    globalTo: function (from, to, distance) {
                                        return distance + 1;
                                    },
                                },
                                sub: true,
                            },
                            max: {
                                mod: {
                                    maxHandcard: function (player, num) {
                                        return num + 1;
                                    },
                                },
                                sub: true,
                            },
                            recover: {
                                mod: {
                                    playerEnabled: function (card, player, target) {
                                        if (player == target) return false;
                                    },
                                },
                                sub: true,
                            },
                            draw: {
                                mod: {
                                    playerEnabled: function (card, player, target) {
                                        if (player != target) return false;
                                    },
                                },
                                sub: true,
                            },
                        },
                    },
                    "圣_zhongjian": {
                        marktext: "鉴",
                        locked: true,
                        mark: true,
                        intro: {
                            content: "当前拥有#枚“鉴”印记</br><li>3枚：至你的下个回合开始前，锦囊牌无法对你造成伤害<li>2枚：恢复一点体力或摸两张牌<li>1枚：摸一张牌",
                        },
                        init: function (player) {
                            player.storage.圣_zhongjian = 0;
                        },
                        audio: "ext:圣神包:2",
                        enable: "phaseUse",
                        usable: 1,
                        filterTarget: function (card, player, target) {
                            return target.countCards('h') > 0 && target != player;
                        },
                        selectTarget: function () {
                            var player = _status.event.player
                            return [1, Math.max(1, player.countCards('h'))];
                        },
                        content: function () {
                            "step 0"
                            if (target.countCards('h') == 0 || player.countCards('h') == 0) {
                                event.finish();
                                return;
                            }
                            var rand = Math.random() < 0.5;
                            player.chooseCard('忠鉴：请展示一张手牌', true).set('ai', function () {
                                var num = 0;
                                if (get.color(card) == 'red') {
                                    if (rand) num -= 6;
                                }
                                else {
                                    if (!rand) num -= 6;
                                }
                                var value = get.value(card);
                                if (value >= 8) return -100;
                                return num - value;
                            })
                            "step 1"
                            event.card1 = result.cards[0];
                            var rand = Math.random() < 0.5;
                            target.chooseCard('忠鉴：请展示一张手牌', true).set('ai', function (card) {
                                var num = 0;
                                if (get.color(card) == 'red') {
                                    if (rand) num -= 6;
                                }
                                else {
                                    if (!rand) num -= 6;
                                }
                                var value = get.value(card);
                                if (value >= 8) return -100;
                                return num - value;
                            })
                            "step 2"
                            event.card2 = result.cards[0];
                            ui.arena.classList.add('thrownhighlight');
                            game.addVideo('thrownhighlight1');
                            player.$compare(event.card1, target, event.card2);
                            game.delay(4);
                            "step 3"
                            game.log(player, '展示了', event.card1);
                            game.log(target, '展示了', event.card2);
                            if (get.color(event.card2) == get.color(event.card1)) {
                                game.log(target, '的牌触发了【忠鉴】效果，', event.card1, '与', event.card2, '置入弃牌堆', target, '受到一点伤害')
                                player.discard(event.card1).animate = false;
                                target.discard(event.card2).animate = false;
                                target.damage();
                                var clone = event.card1.clone;
                                if (clone) {
                                    clone.style.transition = 'all 0.5s';
                                    clone.style.transform = 'scale(1.2)';
                                    clone.delete();
                                    game.addVideo('deletenode', player, get.cardsInfo([clone]));
                                }
                                if (player.storage.圣_zhongjian < 3) {
                                    player.storage.圣_zhongjian++;
                                    player.markSkill('圣_zhongjian');
                                    player.syncStorage('圣_zhongjian');
                                    event.finish();
                                    event.parent.cancelled = true;
                                }
                                else { }
                            }
                            else {
                                player.$gain2(event.card1);
                                target.$gain2(event.card2);
                                game.delay();
                            }
                            ui.arena.classList.remove('thrownhighlight');
                            game.addVideo('thrownhighlight2');
                        },
                        ai: {
                            basic: {
                                order: 2,
                                value: [5, 1],
                                useful: 1,
                            },
                            tag: {
                                loseHp: 1,
                            },
                        },
                    },
                    "圣_jianshu": {
                        trigger: {
                            player: "phaseEnd",
                        },
                        derivation: "圣_jianshu_jieshao",
                        forced: true,
                        priority: 100,
                        filter: function (event, player) {
                            return player.storage.圣_zhongjian > 0;
                        },
                        content: function () {
                            player.removeAdditionalSkill('圣_jianshu');
                            var list = [];
                            if (player.storage.圣_zhongjian == 3) {
                                player.storage.圣_zhongjian -= 3;
                                player.markSkill('圣_zhongjian');
                                player.syncStorage('圣_zhongjian');
                                player.addTempSkill('圣_jianshu_damage', { player: "phaseBegin" });
                            }
                            if (player.storage.圣_zhongjian == 2) {
                                player.storage.圣_zhongjian -= 2;
                                player.markSkill('圣_zhongjian');
                                player.syncStorage('圣_zhongjian');
                                player.chooseDrawRecover(2, 1, true);
                            }
                            if (player.storage.圣_zhongjian == 1) {
                                player.storage.圣_zhongjian -= 1;
                                player.markSkill('圣_zhongjian');
                                player.syncStorage('圣_zhongjian');
                                player.draw();
                            }
                            if (list.length) {
                                player.addAdditionalSkill('圣_jianshu', list);
                            }
                        },
                        subSkill: {
                            damage: {
                                trigger: {
                                    player: "damageBefore",
                                },
                                forced: true,
                                priority: 100,
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
                                sub: true,
                            },
                        },
                    },
                    "圣_jianshu_jieshao": {
                    },
                    "﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀": {
                    },
                    "圣_luoshen": {
                        marktext: "洛",
                        locked: true,
                        mark: true,
                        init: function (player) {
                            player.storage.圣_luoshen = 0;
                        },
                        intro: {
                            content: "本回合因此技能获得#张牌",
                        },
                        audio: "ext:圣神包:2",
                        trigger: {
                            player: "phaseBegin",
                        },
                        priority: -1,
                        forced: true,
                        content: function () {
                            "step 0"
                            if (event.cards == undefined) event.cards = [];
                            player.judge(function (card) {
                                if (get.suit(card) != 'heart') return 1.5;
                                return -1.5;
                            }, ui.special);
                            "step 1"
                            if (result.judge > 0) {
                                event.cards.push(result.card);
                                player.storage.圣_luoshen++;
                                player.markSkill('圣_luoshen');
                                player.syncStorage('圣_luoshen');
                                if (lib.config.autoskilllist.contains('圣_luoshen')) {
                                    player.chooseBool('是否再次发动【洛神】？');
                                }
                                else {
                                    event._result = { bool: true };
                                }
                            }
                            else {
                                for (var i = 0; i < event.cards.length; i++) {
                                    if (get.position(event.cards[i]) != 's') {
                                        event.cards.splice(i, 1); i--;
                                    }
                                }
                                player.gain(event.cards, 'gain2');
                                event.finish();
                            }
                            "step 2"
                            if (result.bool) {
                                event.goto(0);
                            }
                            else {
                                if (event.cards.length) {
                                    player.gain(event.cards, 'gain2');
                                }
                            }
                        },
                        group: "圣_luoshen_End",
                        subSkill: {
                            End: {
                                trigger: {
                                    player: "phaseUseEnd",
                                },
                                priority: 100,
                                forced: true,
                                content: function () {
                                    if (player.storage.圣_luoshen <= 2) {
                                        player.storage.圣_luoshen -= player.storage.圣_luoshen;
                                        player.markSkill('圣_luoshen');
                                        player.syncStorage('圣_luoshen');
                                        player.addTempSkill('圣_luoshen_Over');
                                    }
                                    else {
                                        player.storage.圣_luoshen -= player.storage.圣_luoshen;
                                        player.markSkill('圣_luoshen');
                                        player.syncStorage('圣_luoshen');
                                    }
                                },
                                sub: true,
                            },
                            Over: {
                                audio: "ext:圣神包:2",
                                trigger: {
                                    player: "phaseEnd",
                                },
                                locked: true,
                                direct: true,
                                content: function () {
                                    "step 0"
                                    player.chooseTarget(get.prompt('圣_luoshen_Over'), function (card, player, target) {
                                        return target.isEnemyOf(player);
                                    }).ai = function (target) {
                                        var att = get.attitude(player, target);
                                        if (target.isTurnedOver()) {
                                            if (att > 0) {
                                                return att + 5;
                                            }
                                            return -1;
                                        }
                                        if (player.isTurnedOver()) {
                                            return 5 - att;
                                        }
                                        return -att;
                                    };
                                    "step 1"
                                    if (result.bool) {
                                        player.logSkill('圣_luoshen_Over', result.targets);
                                        result.targets[0].turnOver();
                                    }
                                },
                                ai: {
                                    threaten: 1.7,
                                },
                                sub: true,
                            },
                        },
                    },
                    "圣_fanghua": {
                        audio: "ext:圣神包:2",
                        trigger: {
                            global: "turnOverAfter",
                        },
                        forced: true,
                        filter: function (event, player) {
                            return event.player.isTurnedOver() && event.player != player;

                        },
                        check: function (event, player) {
                            return get.attitude(player, event.player) > 0;
                        },
                        content: function () {
                            trigger.player.loseHp();
                        },
                        ai: {
                            expose: 0.2,
                        },
                    },
                    "圣_xishui": {
                        audio: "ext:圣神包:2",
                        group: "圣_xishui2",
                        enable: ["chooseToRespond"],
                        filterCard: function (card) {
                            return get.suit(card) == 'spade' || get.suit(card) == 'club' || get.suit(card) == 'diamond';
                        },
                        position: "he",
                        locked: true,
                        viewAs: {
                            name: "shan",
                            suit: "club",
                            number: 6,
                        },
                        viewAsFilter: function (player) {
                            if (!player.countCards('he')) return false;
                        },
                        prompt: "将一张非♥️手牌当做【闪】打出",
                        check: function () { return 1 },
                        ai: {
                            respondShan: true,
                            skillTagFilter: function (player) {
                                if (!player.countCards('he')) return false;
                            },
                            effect: {
                                target: function (card, player, target, current) {
                                    if (get.tag(card, 'respondShan') && current < 0) return 0.6
                                },
                            },
                            basic: {
                                useful: [7, 2],
                                value: [7, 2],
                            },
                        },
                    },
                    "圣_xishui2": {
                        audio: "ext:圣神包:2",
                        trigger: {
                            player: "respond",
                        },
                        filter: function (event, player) {
                            return event.card.name == 'shan';
                        },
                        forced: true,
                        content: function () {
                            "step 0"
                            player.chooseTarget(get.prompt('圣_xishui2'), function (card, player, target) {
                                return target.isEnemyOf(player);
                            }).ai = function (target) {
                                var att = get.attitude(player, target);
                                if (target.isTurnedOver()) {
                                    if (att > 0) {
                                        return att + 5;
                                    }
                                    return -1;
                                }
                                if (player.isTurnedOver()) {
                                    return 5 - att;
                                }
                                return -att;
                            };
                            "step 1"
                            if (result.bool) {
                                player.logSkill('圣_xishui2', result.targets);
                                result.targets[0].turnOver();
                            }
                        },
                    },
                    "ˇˇˇˇˇˇˇˇˇˇˇˇˇˇ": {
                    },
                    "圣_fanghun": {
                        init: function (player) {
                            player.storage.圣_fanghun = 0;
                            player.storage.圣_fanghun2 = 0;
                        },
                        intro: {
                            content: "当前共拥有#枚印记",
                        },
                        trigger: {
                            source: "damageAfter",
                        },
                        audio: "ext:圣神包:2",
                        forced: true,
                        content: function () {
                            player.storage.圣_fanghun += trigger.num;
                            player.storage.圣_fanghun2 += trigger.num;
                            player.markSkill('圣_fanghun');
                        },
                        group: ["圣_fanghun_sha", "圣_fanghun_shan", "圣_fanghun_draw"],
                        subSkill: {
                            draw: {
                                trigger: {
                                    player: ["useCard", "respond"],
                                },
                                forced: true,
                                popup: false,
                                filter: function (event) {
                                    return event.skill == '圣_fanghun_sha' || event.skill == '圣_fanghun_shan';
                                },
                                content: function () {
                                    player.draw();
                                    if (event.skill == '圣_fanghun_sha') {
                                        player.addTempSkill('圣_feiying');
                                    }
                                    else {
                                        player.addTempSkill('圣_mashu');
                                    }
                                },
                                sub: true,
                            },
                            sha: {
                                enable: ["chooseToUse", "chooseToRespond"],
                                filterCard: {
                                    name: "shan",
                                },
                                audio: "ext:圣神包:2",
                                viewAs: {
                                    name: "sha",
                                    suit: "spade",
                                    number: 5,
                                    cards: [{ "node": { "image": {}, "info": {}, "name": {}, "name2": {}, "background": {}, "intro": {}, "range": {} }, "storage": {}, "vanishtag": [], "_uncheck": [], "suit": "spade", "number": 5, "name": "shan", "cardid": "13792351940", "_transform": "translateX(612px)", "clone": { "name": "shan", "suit": "spade", "number": 5, "node": { "name": {}, "info": {}, "intro": {}, "background": {}, "image": {} }, "_transitionEnded": true, "timeout": 282 }, "timeout": 254, "original": "h" }],
                                },
                                viewAsFilter: function (player) {
                                    if (!player.storage.圣_fanghun || player.storage.圣_fanghun < 0) return false;
                                    if (!player.countCards('h', 'shan')) return false;
                                },
                                prompt: "将一张【闪】当【杀】使用或打出",
                                onuse: function (result, player) {
                                    player.storage.圣_fanghun--;
                                    if (!player.storage.圣_fanghun || player.storage.圣_fanghun < 0) {
                                        player.storage.圣_fanghun = 0;
                                        player.unmarkSkill('圣_fanghun');
                                    }
                                    else {
                                        player.updateMarks();
                                    }
                                },
                                check: function () { return 1 },
                                ai: {
                                    effect: {
                                        target: function (card, player, target, current) {
                                            if (get.tag(card, 'respondSha') && current < 0) return 0.6
                                        },
                                    },
                                    respondSha: true,
                                    skillTagFilter: function (player) {
                                        if (!player.storage.圣_fanghun || player.storage.圣_fanghun < 0) return false;
                                        if (!player.countCards('h', 'shan')) return false;
                                    },
                                    order: function () {
                                        return get.order({ name: 'sha' }) + 0.1;
                                    },
                                    useful: -1,
                                    value: -1,
                                    basic: {
                                        useful: [5, 1],
                                        value: [5, 1],
                                    },
                                    result: {
                                        target: function (player, target) {
                                            if (player.hasSkill('jiu') && !target.getEquip('baiyin')) {
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
                                sub: true,
                            },
                            shan: {
                                enable: ["chooseToRespond"],
                                filterCard: {
                                    name: "sha",
                                },
                                audio: "ext:圣神包:2",
                                viewAs: {
                                    name: "shan",
                                },
                                prompt: "将一张【杀】当【闪】打出",
                                viewAsFilter: function (player) {
                                    if (!player.storage.圣_fanghun || player.storage.圣_fanghun < 0) return false;
                                    if (!player.countCards('h', 'sha')) return false;
                                },
                                onrespond: function (result, player) {
                                    player.storage.圣_fanghun--;
                                    if (!player.storage.圣_fanghun || player.storage.圣_fanghun < 0) {
                                        player.storage.圣_fanghun = 0;
                                        player.unmarkSkill('圣_fanghun');
                                    }
                                    else {
                                        player.updateMarks();
                                    }
                                },
                                check: function () { return 1 },
                                ai: {
                                    respondShan: true,
                                    skillTagFilter: function (player) {
                                        if (!player.storage.圣_fanghun || player.storage.圣_fanghun < 0) return false;
                                        if (!player.countCards('h', 'sha')) return false;
                                    },
                                    effect: {
                                        target: function (card, player, target, current) {
                                            if (!player.storage.圣_fanghun || player.storage.圣_fanghun < 0) return 0;
                                            if (get.tag(card, 'respondShan') && current < 0) return 0.6
                                        },
                                    },
                                    order: 4,
                                    useful: -1,
                                    value: -1,
                                    basic: {
                                        useful: [7, 2],
                                        value: [7, 2],
                                    },
                                },
                                sub: true,
                            },
                        },
                    },
                    "圣_fuhan": {
                        audio: "ext:圣神包:2",
                        trigger: {
                            player: "phaseAfter",
                        },
                        priority: -1,
                        unique: true,
                        skillAnimation: true,
                        forceunique: true,
                        filter: function (event, player) {
                            return player.storage.圣_fanghun > 0;
                        },
                        prompt: function (event, player) {
                            var num = 4 + player.storage.圣_fanghun2;
                            var mode = get.mode();
                            if (mode != 'chess' && mode != 'tafang' && mode != 'stone') {
                                num = Math.min(num);
                            }
                            return get.prompt('圣_fuhan') + '</br>（体力上限：' + num + ')';
                        },
                        content: function () {
                            'step 0'
                            var list;
                            if (_status.connectMode) {
                                list = get.charactersOL(function (i) {
                                    return lib.character[i][1] != 'shu';
                                });
                            }
                            else {
                                list = get.gainableCharacters(function (info) {
                                    return info[1] == 'shu';
                                });
                            }
                            var players = game.players.concat(game.dead);
                            for (var i = 0; i < players.length; i++) {
                                list.remove(players[i].name);
                                list.remove(players[i].name1);
                                list.remove(players[i].name2);
                            }
                            // var dialog=ui.create.dialog();
                            // dialog.add([list.randomGets(player.hp+=player.hp),'character']);
                            player.chooseButton(true).set('ai', function (button) {
                                return get.rank(button.link, true) - lib.character[button.link][2];
                            }).set('createDialog', ['扶汉：化身为一名角色', [list.randomGets(player.hp += player.hp), 'character']]);
                            player.awakenSkill('圣_fuhan');
                            'step 1'
                            var num = 4 + player.storage.圣_fanghun2;
                            var mode = get.mode();
                            if (mode != 'chess' && mode != 'tafang' && mode != 'stone') {
                                num = Math.min(num);
                            }
                            player.addTempSkill('圣_fuhan_hp');
                            player.reinit('圣神_zhaoxiangx', result.links[0], num);
                        },
                        subSkill: {
                            hp: {
                                trigger: {
                                    player: "phaseAfter",
                                    global: "phaseBegin",
                                },
                                priority: -10,
                                forced: true,
                                filter: function (event, player) {
                                    return player.hp < player.maxHp * 0.5;
                                },
                                content: function () {
                                    player.recover(player.maxHp * 0.5 - player.hp);
                                    player.removeSkill('圣_fuhan_hp');

                                },
                                sub: true,
                            },
                        },
                    },
                    "﹊﹊﹊﹊﹊﹊﹊﹊﹊﹊﹊﹊﹊﹊": {
                    },
                    "圣_fankui": {
                        marktext: "馈",
                        locked: true,
                        mark: true,
                        intro: {
                            content: "已通过此技能获得#张牌",
                        },
                        init: function (player) {
                            player.storage.圣_fankui = 0;
                        },
                        trigger: {
                            player: "damageEnd",
                        },
                        priority: 100,
                        forced: true,
                        content: function () {
                            player.storage.圣_fankui += trigger.num;
                            player.markSkill('圣_fankui');
                            player.syncStorage('圣_fankui');
                        },
                        group: "圣_fankui_card",
                        subSkill: {
                            card: {
                                audio: "ext:圣神包:2",
                                trigger: {
                                    player: "damageAfter",
                                },
                                forced: true,
                                direct: true,
                                priority: -1,
                                filter: function (event, player) {
                                    return (event.source && event.source.countGainableCards(player, 'he') && event.num > 0 && event.source != player);
                                },
                                content: function () {
                                    player.gainPlayerCard(1, get.prompt('圣_fankui_card', trigger.source), trigger.source, get.buttonValue, 'he').set('logSkill', ['圣_fankui_card', trigger.source]);
                                },
                                ai: {
                                    "maixie_defend": true,
                                    effect: {
                                        target: function (card, player, target) {
                                            if (player.countCards('he') > 1 && get.tag(card, 'damage')) {
                                                if (player.hasSkillTag('jueqing', false, target)) return [1, -1.5];
                                                if (get.attitude(target, player) < 0) return [1, 1];
                                            }
                                        },
                                    },
                                },
                                sub: true,
                            },
                        },
                    },
                    "圣_guicai": {
                        audio: "ext:圣神包:2",
                        trigger: {
                            global: "judge",
                        },
                        locked: true,
                        direct: true,
                        priority: 100,
                        content: function () {
                            "step 0"
                            player.draw(2);
                            "step 1"
                            player.chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' +
                                get.translation(trigger.player.judging[0]) + '，' + get.prompt('reguicai'), 'he').set('ai', function (card) {
                                    var trigger = _status.event.getTrigger();
                                    var player = _status.event.player;
                                    var judging = _status.event.judging;
                                    var result = trigger.judge(card) - trigger.judge(judging);
                                    var attitude = get.attitude(player, trigger.player);
                                    if (attitude == 0 || result == 0) return 0;
                                    if (attitude > 0) {
                                        return result - get.value(card) / 2;
                                    }
                                    else {
                                        return -result - get.value(card) / 2;
                                    }
                                }).set('judging', trigger.player.judging[0]);
                            "step 2"
                            if (result.bool) {
                                player.respond(result.cards, 'highlight');
                            }
                            else {
                                player.chooseToDiscard(2, 'he', true);
                                event.finish();
                            }
                            "step 3"
                            if (result.bool) {
                                player.logSkill('圣_guicai');
                                if (trigger.player.judging[0].clone) {
                                    trigger.player.judging[0].clone.classList.remove('thrownhighlight');
                                    game.broadcast(function (card) {
                                        if (card.clone) {
                                            card.clone.classList.remove('thrownhighlight');
                                        }
                                    }, trigger.player.judging[0]);
                                    game.addVideo('deletenode', player, get.cardsInfo([trigger.player.judging[0].clone]));
                                }
                                trigger.player.judging[0].discard();
                                trigger.player.judging[0] = result.cards[0];
                                if (!get.owner(result.cards[0], 'judge')) {
                                    trigger.position.appendChild(result.cards[0]);
                                }
                                game.log(trigger.player, '的判定牌改为', result.cards[0]);
                                game.delay(2);
                            }
                        },
                        ai: {
                            tag: {
                                rejudge: 1,
                            },
                        },
                    },
                    "圣_baiyin": {
                        skillAnimation: "epic",
                        audio: "ext:圣神包:2",
                        trigger: {
                            player: "damageAfter",
                        },
                        priority: -2,
                        forced: true,
                        unique: true,
                        derivation: ["圣_renjie", "圣_fankui_juexing", "圣_jilue"],
                        filter: function (event, player) {
                            return player.storage.圣_fankui >= 4;
                        },
                        content: function () {
                            'step 0'
                            player.recover();
                            if (player.isLinked()) player.link();
                            if (player.isTurnedOver()) player.turnOver();
                            'step 1'
                            player.removeSkill('圣_fankui');
                            player.removeSkill('圣_guicai');
                            'step 2'
                            player.addSkill('圣_renjie');
                            player.addSkill('圣_fankui_juexing');
                            player.addSkill('圣_jilue');
                            player.awakenSkill('圣_baiyin');
                        },
                    },
                    "圣_renjie": {
                        audio: "ext:圣神包:2",
                        trigger: {
                            player: ["damageEnd", "loseHpEnd", "loseEnd"],
                        },
                        forced: true,
                        mark: true,
                        filter: function (event, player) {
                            return _status.currentPhase != player && event.num > 0;
                        },
                        init: function (player) {
                            player.storage.圣_renjie = 0;
                        },
                        content: function () {
                            player.storage.圣_renjie += trigger.num;
                            player.markSkill('圣_renjie');
                            player.syncStorage('圣_renjie');
                        },
                        intro: {
                            content: "已拥有#枚印记",
                        },
                        ai: {
                            maixie: true,
                            "maixie_hp": true,
                            effect: {
                                target: function (card, player, target) {
                                    if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                    if (get.tag(card, 'damage')) {
                                        if (target.hp == target.maxHp) {
                                            if (!target.hasSkill('圣_jilue')) {
                                                return [0, 1];
                                            }
                                            return [0.7, 1];
                                        }
                                        return 0.7;
                                    }
                                },
                                player: function (card, player) {
                                    if (_status.currentPhase != player) return;
                                    if (_status.event.name != 'chooseToUse' || _status.event.player != player) return;
                                    if (get.type(card) == 'basic') return;
                                    if (get.tag(card, 'gain')) return;
                                    if (get.value(card, player, 'raw') >= 7) return;
                                    if (player.hp <= 2) return;
                                    if (!player.hasSkill('圣_jilue') || player.storage.圣_renjie == 0) {
                                        return 'zeroplayertarget';
                                    }
                                },
                            },
                        },
                    },
                    "圣_fankui_juexing": {
                        audio: "ext:圣神包:2",
                        trigger: {
                            player: "damageEnd",
                        },
                        forced: true,
                        direct: true,
                        filter: function (event, player) {
                            return (event.source && event.source.countGainableCards(player, 'hej') && event.num > 0 && event.source != player);
                        },
                        content: function () {
                            player.gainPlayerCard([1, trigger.num], get.prompt('圣_fankui_juexing', trigger.source), trigger.source, get.buttonValue, 'hej').set('logSkill', ['圣_fankui_juexing', trigger.source]);
                        },
                        ai: {
                            "maixie_defend": true,
                            effect: {
                                target: function (card, player, target) {
                                    if (player.countCards('hej') > 1 && get.tag(card, 'damage')) {
                                        if (player.hasSkillTag('jueqing', false, target)) return [1, -1.5];
                                        if (get.attitude(target, player) < 0) return [1, 1];
                                    }
                                },
                            },
                        },
                    },
                    "圣_jilue": {
                        forced: true,
                        locked: true,
                        group: ["圣_jilue_recover", "圣_jilue_draw", "圣_jilue_gong", "圣_jilue_shou"],
                    },
                    "圣_jilue_shou": {
                        audio: "ext:圣神包:2",
                        trigger: {
                            player: "damageBefore",
                        },
                        locked: true,
                        priority: -2,
                        filter: function (event, player) {
                            return event.num > 0 && player.storage.圣_renjie > 0;
                        },
                        content: function () {
                            'step 0'
                            player.storage.圣_renjie--;
                            player.markSkill('圣_renjie');
                            player.syncStorage('圣_renjie');
                            'step 1'
                            trigger.num--;
                        },
                    },
                    "圣_jilue_gong": {
                        audio: "ext:圣神包:2",
                        trigger: {
                            source: "damageBefore",
                        },
                        locked: true,
                        priority: -1,
                        filter: function (event, player) {
                            return event.num > 0 && player.storage.圣_renjie > 0;
                        },
                        content: function () {
                            'step 0'
                            player.storage.圣_renjie--;
                            player.markSkill('圣_renjie');
                            player.syncStorage('圣_renjie');
                            'step 1'
                            trigger.num++;
                        },
                    },
                    "圣_jilue_draw": {
                        audio: "ext:圣神包:2",
                        trigger: {
                            player: "useCardAfter",
                        },
                        locked: true,
                        priority: -1,
                        filter: function (event, player) {
                            return event.card && player.storage.圣_renjie > 0 && _status.currentPhase == player;
                        },
                        content: function () {
                            'step 0'
                            player.storage.圣_renjie--;
                            player.markSkill('圣_renjie');
                            player.syncStorage('圣_renjie');
                            'step 1'
                            player.draw();
                        },
                    },
                    "圣_jilue_recover": {
                        audio: "ext:圣神包:2",
                        trigger: {
                            player: "phaseBegin",
                        },
                        locked: true,
                        priority: 100,
                        filter: function (event, player) {
                            return player.isDamaged() && player.storage.圣_renjie > 0;
                        },
                        content: function () {
                            'step 0'
                            player.storage.圣_renjie--;
                            player.markSkill('圣_renjie');
                            player.syncStorage('圣_renjie');
                            'step 1'
                            player.recover();
                        },
                        ai: {
                            threaten: 1.3,
                        },
                    },
                    "℡℡℡℡℡℡℡℡℡℡℡℡℡℡": {
                    },
                    "圣_ganglie": {
                        audio: "ext:圣神包:2",
                        trigger: {
                            player: "damageBegin",
                        },
                        locked: true,
                        priority: -1,
                        filter: function (event, player) {
                            return (event.source != undefined && event.num > 0);
                        },
                        check: function (event, player) {
                            return (get.attitude(player, event.source) <= 0);
                        },
                        logTarget: "source",
                        content: function () {
                            "step 0"
                            player.judge(function (card) {
                                if (get.suit(card) == 'heart') return -2;
                                return 2;
                            })
                            "step 1"
                            if (result.judge < 2) {
                                trigger.source.chooseToDiscard(2, 'he', true);
                            }
                            else {
                                trigger.num--;
                                trigger.source.damage();
                            }
                        },
                        ai: {
                            "maixie_defend": true,
                            effect: {
                                target: function (card, player, target) {
                                    if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
                                    return 0.8;
                                    // if(get.tag(card,'damage')&&get.damageEffect(target,player,player)>0) return [1,0,0,-1.5];
                                },
                            },
                        },
                    },
                    "圣_zhonghun": {
                        audio: "ext:圣神包:2",
                        trigger: {
                            global: "phaseBegin",
                        },
                        locked: true,
                        filter: function (event, player) {
                            return event.player != player &&
                                player.countCards('h') &&
                                event.player.isDamaged() &&
                                event.player.countCards('h') < player.countCards('h');
                        },
                        content: function () {
                            'step 0'
                            trigger.player.draw(player.countCards('h'));
                            player.chooseToDiscard('h', true, Infinity);
                            'step 1'
                            if (trigger.player.hp <= player.hp) {
                                trigger.player.recover();
                                player.recover();
                            }
                        },
                        ai: {
                            order: 2,
                        },
                    },
                    "圣_danmu": {
                        mod: {
                            targetInRange: function (card, player, target, now) {
                                var rwmc = new RegExp("圣神");
                                if (card.name == 'sha' && rwmc.test(target.name)) return true;

                            },
                        },
                    },
                    "✧✧✧✧✧✧✧✧✧✧✧✧✧✧✧✧": {
                    },
                    "圣_xiangle": {
                        audio: "ext:圣神包:2",
                        trigger: {
                            target: "useCardToBefore",
                        },
                        forced: true,
                        priority: -1,
                        filter: function (event, player, card) {
                            return _status.currentPhase != player && event.player != player &&
                                event.card.name == 'sha' || event.card.name == 'juedou';
                        },
                        content: function () {
                            "step 0"
                            var eff = get.effect(player, trigger.card, trigger.player, trigger.player);
                            trigger.player.chooseToDiscard('享乐：弃置一张装备牌并令' + get.translation(player) + '摸一张牌，否则你的牌对其无效', 'he', function (card) {
                                return get.type(card) == 'equip';
                            }).set('ai', function (card) {
                                if (_status.event.eff > 0) {
                                    return 10 - get.value(card);
                                }
                                return 0;
                            }).set('eff', eff);
                            "step 1"
                            if (result.bool == false) {
                                trigger.cancel();
                            }
                            else {
                                player.draw();
                            }
                        },
                        ai: {
                            effect: {
                                target: function (card, player, target, current) {
                                    if (get.attitude(player, target) < 0) {
                                        if (_status.event.name == '圣_xiangle') return;
                                        var bs = player.getCards('he', { type: 'equip' });
                                        if (bs.length < 2) return 0;
                                        if (player.hasSkill('jiu') || player.hasSkill('tianxianjiu')) return;
                                        if (bs.length <= 3 && player.countCards('h', 'sha', 'juedou') <= 1) {
                                            for (var i = 0; i < bs.length; i++) {
                                                if (bs[i].name != 'sha' && get.value(bs[i]) < 7) {
                                                    return [1, 0, 1, -0.5];
                                                }
                                            }
                                            return 0;
                                        }
                                        return [1, 0, 1, -0.5];
                                    }
                                },
                            },
                        },
                    },
                    "圣_fangquan": {
                        audio: "ext:圣神包:2",
                        trigger: {
                            player: "phaseEnd",
                        },
                        forced: true,
                        priority: -1,
                        filter: function (event, player) {
                            return !player.getStat('damage');
                        },
                        direct: true,
                        content: function () {
                            "step 0"
                            player.recover();
                            "step 1"
                            player.chooseTarget(get.prompt('圣_fangquan'), function (card, player, target) {
                                return player != target
                            }).set('ai', function (target) {
                                if (!_status.event.fang) return -1;
                                if (target.hasJudge('lebu')) return -1;
                                return get.attitude(player, target) - 4;
                            }).set('fang', fang);
                            "step 2"
                            if (result.bool) {
                                player.logSkill('圣_fangquan', result.targets);
                                result.targets[0].damage(player, true);
                                result.targets[0].recover();
                                result.targets[0].insertPhase();
                            }
                        },
                        ai: {
                        },
                    },
                    "圣_ruoyu": {
                        trigger: {
                            player: "phaseDrawBegin",
                        },
                        forced: true,
                        priority: 100,
                        content: function () {
                            "step 0"
                            player.judge(function (card) {
                                if (get.suit(card) == 'heart') return -2;
                                return 2;
                            })
                            "step 1"
                            if (result.judge < 2) {
                                event.finish(); return;
                            }
                            trigger.num++;
                            player.addTempSkill('圣_ruoyu_sha');
                        },
                        subSkill: {
                            sha: {
                                mod: {
                                    cardEnabled: function (card, player) {
                                        if (card.name == 'sha' && _status.currentPhase == player &&
                                            _status.event.getParent('phaseUse')) {
                                            return false;
                                        }
                                    },
                                },
                                sub: true,
                            },
                        },
                    },
                    "ºººººººººººººººººººººººººººº": {
                    },
                    "圣_kurou": {
                        audio: "ext:圣神包:2",
                        enable: "phaseUse",
                        usable: 1,
                        locked: true,
                        content: function () {
                            "step 0"
                            player.loseHp();
                            "step 1"
                            if (player.hp < player.maxHp * 0.5) {
                                player.draw(2);
                                player.chooseDrawRecover(2, 1, true);
                            }
                            else {
                                player.draw(3);
                            }
                        },
                        ai: {
                            basic: {
                                order: 1,
                            },
                            result: {
                                player: function (player) {
                                    if (player.countCards('h') >= player.hp - 1) return -1;
                                    if (player.hp < 3) return -1;
                                    return 1;
                                },
                            },
                        },
                    },
                    "圣_yanzhan": {
                        trigger: {
                            player: "shaBegin",
                        },
                        forced: true,
                        filter: function (event, player) {
                            return event.card && get.color(event.card) == 'red';
                        },
                        content: function () {
                            trigger.directHit = true;
                        },
                    },
                    "圣_zhaxiang": {
                        audio: "ext:圣神包:2",
                        trigger: {
                            player: "loseHpAfter",
                        },
                        forced: true,
                        priority: -1,
                        content: function () {
                            if (_status.currentPhase == player) {
                                player.addTempSkill('圣_zhaxiang_buff');
                            }
                            else {
                                _status.currentPhase.damage(player, 'fire', true);
                            }
                        },
                        ai: {
                            maihp: true,
                        },
                        subSkill: {
                            buff: {
                                mod: {
                                    cardUsable: function (card, player, num) {
                                        if (card.name == 'sha') return num + 1;
                                    },
                                    targetInRange: function () {
                                        return true;
                                    },
                                },
                                trigger: {
                                    source: "damageBefore",
                                },
                                forced: true,
                                content: function () {
                                    trigger.nature = 'fire';
                                },
                                sub: true,
                            },
                        },
                    },
                },
                translate: {
                    "圣_longhun": "龙魂",
                    "圣_longhun_info": "锁定技，若你于弃牌阶段弃置的牌花色均不同，你将体力值恢复至体力上限并摸等量卡牌",
                    ":————————————:": ":————————————:",
                    ":————————————:_info": "",
                    "圣_longao": "龙傲",
                    "圣_longao_info": "锁定技。摸牌阶段，你的摸牌数量始终为1；你手牌数量无限制",
                    "圣_longfen": "龙愤",
                    "圣_longfen_info": "锁定技。你无视目标装备的防具所带来的所有增/减益效果；你使用【杀】时可额外指定1名角色",
                    "圣_longyu": "龙域",
                    "圣_longyu_info": "锁定技。你与其他角色的距离计算始终为1；每名其他角色的回合开始前，你皆会进行1个额外的回合",
                    "—=——————————=—": "—=——————————=—",
                    "—=——————————=—_info": "",
                    "圣_xingshang": "行殇",
                    "圣_xingshang_info": "锁定技，你不能被翻面；你立即获得死亡角色的所有卡牌",
                    "圣_fangzhu": "放逐",
                    "圣_fangzhu_info": "锁定技，当你受到伤害/失去体力时，你可以立即令除你以外的任意一名角色弃置X张牌(X为你已损失的体力值+1)，然后该角色将其武将牌翻面",
                    "！——————————！": "！——————————！",
                    "！——————————！_info": "",
                    "圣_huituo": "恢拓",
                    "圣_huituo_info": "锁定技，当你于回合外受到伤害/失去体力时，你可以选择任意一名角色令其进行1次判定，并根据判定颜色执行对应效果（X为此次伤害量）：<li>红色，该角色恢复X点体力<li>黑色，该角色获得1+X张牌",
                    "圣_xingshuai": "兴衰",
                    "圣_xingshuai_info": "锁定技，准备/结束阶段，所有角色失去/恢复一点体力",
                    "圣_mingjian": "明鉴",
                    "圣_mingjian_info": "锁定技，出牌阶段，你可以将一张手牌交给一名其他角色，若如此做，该角色于其下个回合的手牌上限+1，【杀】的使用次数上限+1，进攻距离-1",
                    "[———————————]": "[———————————]",
                    "[———————————]_info": "",
                    "圣_youjin": "幽禁",
                    "圣_youjin_info": "锁定技，当你成为【顺手牵羊】【过河拆桥】的目标时，防止之，改为受到一点伤害",
                    "圣_huangkong": "惶恐",
                    "圣_huangkong_info": "锁定技，当一名其他角色的准备阶段开始时，你可以与其拼点：若你赢，你摸1张牌并令该角色于本回合内使用的牌不能指定除自己以外的角色为目标",
                    "圣_mizhao": "秘诏",
                    "圣_mizhao_info": "锁定技，出牌阶段（限一次），你可以将一张牌交给一名其他角色，然后你恢复1点体力并摸两张牌",
                    "]———————————[": "]———————————[",
                    "]———————————[_info": "",
                    "圣_qianxin": "潜心",
                    "圣_qianxin_info": "锁定技，你始终跳过弃牌阶段；结束阶段，若你的手牌数量为全场最高且当前体力值大于1，则你摸1张牌并失去1点体力",
                    "圣_fanyin": "梵音",
                    "圣_fanyin_info": "若你拥有此技能，摸牌阶段，你的摸牌数量+2</br></br>觉醒技：出牌阶段开始时，若你的手牌数量不小于10，则你失去技能“征兆”，恢复1点体力并获得技能“攻心”和“咆哮”",
                    "圣_paoxiao": "咆哮",
                    "圣_paoxiao_info": "锁定技，你使用【杀】无数量限制",
                    "圣_zhengzhao": "征召",
                    "圣_zhengzhao_info": "锁定技，每当一名其他角色于你的回合外受到伤害/恢复体力后，你摸1张牌",
                    "<——————————>": "<——————————>",
                    "<——————————>_info": "",
                    "圣_huimin": "惠民",
                    "圣_huimin_info": "锁定技，当你恢复体力时，你可以立即令任意一名其他角色解除翻面状态，恢复1点体力并获得X张牌(X为你当前体力值-1)",
                    "圣_shouxi": "守玺",
                    "圣_shouxi_info": "锁定技，若你已受伤，则其他角色使用【杀】对你无效；每当你成为其他角色使用【杀】的目标结算后，若你触发了\"守玺\"，你摸1张牌",
                    "!!——————————!!": "!!——————————!!",
                    "!!——————————!!_info": "",
                    "圣_faze": "圣神法则",
                    "圣_faze_info": "",
                    "………………………………": "………………………………",
                    "………………………………_info": "",
                    "圣_kuangwang": "狂妄",
                    "圣_kuangwang_info": "锁定技，摸牌阶段，你摸到的其中一张牌改为【杀】；出牌阶段，你使用的任何卡牌均无数量限制；每当你使用或打出一张牌时，你摸一张牌",
                    "圣_shejian": "舌剑",
                    "圣_shejian_info": "锁定技，结束阶段，若你已受伤，你可以弃置一名其他角色区域内的一张牌，然后令其摸一张牌并翻面",
                    "“————————————”": "“————————————”",
                    "“————————————”_info": "",
                    "圣_zhanjue": "战绝",
                    "圣_zhanjue_info": "锁定技，每当你发起一次【决斗】，你摸X张牌；出牌阶段，你可以将所有手牌当做一次【决斗】使用，若如此做，你失去1点体力（X为你已损失体力值）",
                    "圣_zhanjue1": "战绝",
                    "圣_zhanjue1_info": "",
                    "圣_qinjin": "勤谨",
                    "圣_qinjin_info": "锁定技，每当你打出一张【杀】或【闪】，你恢复1点体力",
                    "ssb_xsmj": "邪神面具",
                    "ssb_xsmj_info": " ",
                    "ssb_qxp": "七星袍",
                    "ssb_qxp_info": " ",
                    "ssb_bhq": "百花裙",
                    "ssb_bhq_info": "",
                    "圣_ziwen": "自刎",
                    "圣_ziwen_info": "限定技：当你的体力值不大于2时，你可以将体力恢复至体力值上限并获得等量卡牌，失去【战绝】并获得技能【奋战】。若如此做，此回合结束时，你进入濒死状态",
                    "圣_ziwen_zhanjue": "奋战",
                    "圣_ziwen_zhanjue_info": "锁定技，出牌阶段，你可以将1张牌当做【决斗】使用",
                    "圣_ziwen1": "自刎",
                    "圣_ziwen1_info": "",
                    "...————————————...": "...————————————...",
                    "...————————————..._info": "",
                    "圣_lige": "离歌",
                    "圣_lige_info": "锁定技，每当一名角色受到伤害时，你可以弃置一张牌令其进行一次判定，并根据最终判定花色执行其对应效果(X为此次伤害数值):</br>♥该角色回复X点体力；</br>♦︎该角色摸1+X张牌；</br>♣伤害来源弃置1+X张牌；</br>♠伤害来源翻面并失去X点体力",
                    "圣_bingxin": "冰心",
                    "圣_bingxin_info": "锁定技，你无法失去体力上限；每当一名其他角色失去体力或体力上限时，你恢复1点体力",
                    "~~~~~~~~~~~~~~~~": "~~~~~~~~~~~~~~~~",
                    "~~~~~~~~~~~~~~~~_info": "",
                    "ssb_jsg": "姬神弓",
                    "ssb_jsg_info": "",
                    "圣_jiang": "激昂",
                    "圣_jiang_info": "锁定技，每当你使用/成为【决斗】或红色牌的目标时，你摸1张牌；你使用的红色【杀】无次数限制",
                    "__________________________": "__________________________",
                    "___________________________info": "",
                    "圣_jiqiao": "机巧",
                    "圣_jiqiao_info": "锁定技，每当你失去1张装备区的牌时，你可以对一名其他角色造成1点伤害，然后你摸1张牌",
                    "圣_mocai": "默才",
                    "圣_mocai_info": "锁定技，你使用锦囊牌无视距离；你使用的锦囊牌不能被【无懈可击】响应；你不能成为其他角色的锦囊牌的目标",
                    "圣_linglong": "玲珑",
                    "圣_linglong_info": "锁定技，每当你使用或打出一张锦囊/装备牌时，你摸1张牌",
                    ">———————————<": ">———————————<",
                    ">———————————<_info": "",
                    "圣_bagua": "八卦",
                    "圣_bagua_info": "锁定技，你始终视为装备着【八卦阵】",
                    "圣_jinnang": "锦囊",
                    "圣_jinnang_info": "锁定技，你可以将一张牌按照以下花色规则使用或打出:</br>♦️卡牌当做【火攻】；</br>♥️卡牌当做【桃园结义】；</br>♠️卡牌当做【无懈可击】；</br>♣️卡牌当做【铁索连环】；",
                    "圣_jinnang2": "锦囊♠️",
                    "圣_jinnang2_info": "",
                    "圣_jinnang3": "锦囊♥️",
                    "圣_jinnang3_info": "",
                    "圣_jinnang1": "锦囊♦️",
                    "圣_jinnang1_info": "",
                    "圣_jinnang4": "锦囊♣️",
                    "圣_jinnang4_info": "",
                    "-———————————-": "-———————————-",
                    "-———————————-_info": "",
                    "圣_xueji": "血祭",
                    "圣_xueji_info": "锁定技，出牌阶段（限一次），你可以失去一点体力，将X名其他角色横置并对首名角色造成一点火属性伤害(X为你已损失体力值)",
                    "===============": "===============",
                    "===============_info": "",
                    "ssb_yxj": "吸血",
                    "ssb_yxj_info": "",
                    "ssb_gyct": "鬼影赤兔",
                    "ssb_gyct_info": "",
                    "圣_yueying": "月影",
                    "圣_yueying_info": "锁定技，准备阶段和结束阶段，你随机对1名其他角色造成1点伤害，然后你恢复1点体力并摸1张牌",
                    "圣_tianzi": "天姿",
                    "圣_tianzi_info": "锁定技，【决斗】【借刀杀人】无法指定你为目标且对你无效",
                    "圣_fengwu": "凤舞",
                    "圣_fengwu_info": "锁定技，出牌阶段，你可以弃置一张牌并选择两名其他角色，视为两名角色相互对另一名角色发起【决斗】",
                    "圣_longlin": "龙鳞",
                    "圣_longlin_info": "锁定技。每当你造成1点伤害，你恢复1点体力(满额则改为摸1张牌)；你受到的伤害最多为1",
                    "。。。。。。。。。。。。": "。。。。。。。。。。。。",
                    "。。。。。。。。。。。。_info": "",
                    "ssb_wjzr": "暴击！！",
                    "ssb_wjzr_info": "",
                    "ssb_qiuniu": "龙弦",
                    "ssb_qiuniu_info": "",
                    "ssb_suanni": "龙镇",
                    "ssb_suanni_info": "",
                    "ssb_chiwen": "龙鳌",
                    "ssb_chiwen_info": "",
                    "ssb_yazi": "龙烈",
                    "ssb_yazi_info": "",
                    "ssb_chaofeng": "龙鳞",
                    "ssb_chaofeng_info": "",
                    "ssb_bjjt": "酗酒",
                    "ssb_bjjt_info": "",
                    "ssb_pulao": "龙吼",
                    "ssb_pulao_info": "",
                    "ssb_bian": "龙视",
                    "ssb_bian_info": "",
                    "ssb_bixi": "龙玄",
                    "ssb_bixi_info": "",
                    "ssb_fuxi": "龙识",
                    "ssb_fuxi_info": "",
                    "圣_hunzi": "魂姿",
                    "圣_hunzi_info": "觉醒技：准备阶段，若你的体力值为1，你须重置武将牌，将体力上限降至并锁定为1点，获得等量“护甲”，失去技能“霸王”并永久获得技能“圣姿”和“圣魂”",
                    "圣_shengzi": "圣姿",
                    "圣_shengzi_info": "锁定技，摸牌阶段摸牌时，你额外摸X张牌；你的手牌上限+X(X为5-你的体力值上限)",
                    "圣_shenghun": "圣魂",
                    "圣_shenghun_info": "锁定技，当你即将受到伤害时，若此伤害大于你的体力值，则防止之；准备阶段，你可以选择一名其他角色，然后你选择令其“摸五张牌并弃置一张牌”或是“摸一张牌并弃置五张牌”，若如此做，你获得一点护甲",
                    "圣_bawang": "霸王",
                    "圣_bawang_info": "锁定技，每当你造成伤害时，你增加1点体力上限",
                    "圣_yaze": "雅泽",
                    "圣_yaze_info": "锁定技，每当一名其他角色首次恢复体力后，你恢复1点体力",
                    "圣_tiaoxin": "挑衅",
                    "圣_tiaoxin_info": "锁定技，出牌阶段（限一次），你可以弃置一名其他角色的一张牌。若此牌为【杀】，你受到来自于其的1点伤害；若此牌不为【杀】，你对其造成一点伤害",
                    "圣_youlin": "幼麟",
                    "圣_youlin_info": "锁定技，每当你受到来自于其他角色的伤害时，你获得1点护甲",
                    "圣_qilin": "麒麟",
                    "圣_qilin_info": "锁定技，每当你受到伤害时，你获得等量的护甲并摸等量的牌",
                    "圣_beifa": "北伐",
                    "圣_beifa_info": "锁定技，出牌阶段（限一次），你可以将所有手牌当做一张无视距离且不计入出牌次数限制的【杀】使用；此【杀】结算后，倘若目标角色的体力值小于你，你失去一点体力对其造成一点伤害；倘若目标角色的手牌数量大于你，你获得其一张手牌",
                    "圣_longyi": "龙遗",
                    "圣_longyi_info": "觉醒技：准备阶段，若你没有手牌或体力值不大于体力上限的一半，你须恢复1点体力并摸1张牌，将“幼麟”觉醒为“麒麟”，并永久获得技能“北伐”",
                    "-----------------------------------------": "-----------------------------------------",
                    "-----------------------------------------_info": "",
                    "ssb_bgj": "八卦镜",
                    "ssb_bgj_info": "◆每当你需要打出一张【闪】时，你可以进行一次判定：若判定结果不为♠️，则视为你打出了一张【闪】",
                    "圣_nuhun": "怒魂",
                    "圣_nuhun_info": "锁定技，你的死亡方式改为失去所有体力值上限",
                    "圣_shenwu": "神武",
                    "圣_shenwu_info": "锁定技，你拥有4枚“愤”标记；每当你造成/受到伤害/失去体力时，你获得1枚\"愤\"标记；你可以额外使用一张【杀】并可以指定任意名攻击范围内的其他角色为目标",
                    "圣_nufen": "怒愤",
                    "圣_nufen_info": "锁定技，出牌阶段(限一次)，若你拥有至少4枚“愤”印记，则你可以弃置之，令其他所有角色弃置四张手牌与两张装备牌，然后于本回合内，你与其他角色计算距离时始终为1",
                    "圣_shenwu1": "神武",
                    "圣_shenwu1_info": "",
                    "ssb_glzyd": "鬼龙斩月刀",
                    "ssb_glzyd_info": "",
                    "圣_wushuang": "无双",
                    "圣_wushuang_info": "锁定技，你使用【杀】/【决斗】的次数上限与可选目标数+1，且目标需额外打出1张【闪】/【杀】",
                    "圣_shenfen": "神愤",
                    "圣_shenfen_info": "觉醒技：准备阶段，若你当前的体力值或体力值上限不大于2，你需增加1点体力值上限并恢复1点体力，失去技能“无双”并获得技能“怒愤”、“神武”；若你拥有此技能，则同时视为你拥有技能“马术”",
                    "、、、、、、、、、、、、、": "、、、、、、、、、、、、、",
                    "、、、、、、、、、、、、、_info": "",
                    "圣_hunzi_maxHp": "魂姿",
                    "圣_hunzi_maxHp_info": "",
                    "圣_zhixi": "掷玺",
                    "圣_zhixi_info": "限定技：出牌阶段，你可以失去一点体力并选择一名其他角色，令其弃置所有手牌与装备区内的牌，然后受到X点伤害(X为你已损失体力值)。若如此做，你失去技能【守玺】",
                    "圣_gongao": "功獒",
                    "圣_gongao_info": "锁定技，每当一名其他角色进入濒死状态时，你增加一点体力上限，回复一点体力并摸一张牌",
                    "圣_weizhong": "威重",
                    "圣_weizhong_info": "锁定技，每当你的体力值发生变化时，你摸等量的牌",
                    "圣_benghuai": "崩坏",
                    "圣_benghuai_info": "锁定技，每当你使用一张牌后，若你的体力值大于体力值上限的一半，你失去一点体力",
                    "圣_juyi": "举义",
                    "圣_juyi_info": "觉醒技，准备阶段开始时，若你已受伤且体力上限大于5，你须摸X张牌(X为你已损失体力值)，然后获得技能“威重”和“崩坏”",
                    vvvvvvvvvvvvvvvvvvvvvvvvv: "vvvvvvvvvvvvvvvvvvvvvvvvv",
                    "vvvvvvvvvvvvvvvvvvvvvvvvv_info": "",
                    "圣_wansha": "完杀",
                    "圣_wansha_info": "锁定技，当一名其他角色进入濒死状态时，你令其立即死亡，然后你选择恢复一点体力或摸一张牌",
                    "圣_weimu": "帷幕",
                    "圣_weimu_info": "锁定技，黑色卡牌对你无效",
                    "圣_luanshi": "乱世",
                    "圣_luanshi_info": "出牌阶段（限一次），你可以令其他所有角色依次向其最近的角色使用一张【杀】，无法这么做的角色失去一点体力",
                    "圣_songwei": "颂威",
                    "圣_songwei2": "颂威",
                    "圣_songwei_info": "锁定技，当你于回合外受到来自其他角色的伤害时，你于当前回合结束后立即开始一个额外的回合",
                    "。。。。。。。。。。。。。": "。。。。。。。。。。。。。",
                    "。。。。。。。。。。。。。_info": "",
                    "圣_qirang": "祈禳",
                    "圣_qirang_info": "锁定技，每当你于回合内首次使用锦囊牌后，你获得一张装备牌；每当你于回合内首次使用装备牌后，你获得一张锦囊牌",
                    "圣_yuhua": "羽化",
                    "圣_yuhua_info": "锁定技，你的非基本牌不计入你的手牌上限",
                    "ssb_zhq2": "镇魂琴",
                    "ssb_zhq2_info": "",
                    "ssb_zhq": "镇魂琴",
                    "ssb_zhq_info": "",
                    "圣_qixing": "七星",
                    "圣_qixing_info": "锁定技，游戏开始时，你额外获得7张牌；你的手牌上限+7",
                    "◆◆◆◆◆◆◆◆◆◆◆◆◆": "◆◆◆◆◆◆◆◆◆◆◆◆◆",
                    "◆◆◆◆◆◆◆◆◆◆◆◆◆_info": "",
                    "圣_longying": "龙影",
                    "圣_longying_info": "锁定技，你可以将一张牌按照以下规则使用或打出：</br>♦️卡牌当做【火杀】；♣️卡牌当做【闪】；♥️卡牌当做【桃】；♠️卡牌当做【无懈可击】",
                    "圣_longying1": "龙影♦️",
                    "圣_longying1_info": "",
                    "圣_longying2": "龙影♥️",
                    "圣_longying2_info": "",
                    "圣_longying3": "龙影♠️",
                    "圣_longying3_info": "",
                    "圣_longying4": "龙影♣️",
                    "圣_longying4_info": "",
                    "圣_xianjia": "仙甲",
                    "圣_xianjia_info": "锁定技，每当一名其他角色于你的回合外使用锦囊牌后，你获得一点护甲；准备阶段，你失去所有护甲",
                    "圣_nijing": "逆境",
                    "圣_nijing_info": "锁定技，摸牌阶段，你将体力值降至为1，然后额外摸等量的牌",
                    xxxxxxxxxxxxxxxxxxxxxxxx: "xxxxxxxxxxxxxxxxxxxxxxxx",
                    "xxxxxxxxxxxxxxxxxxxxxxxx_info": "",
                    "圣_shenxian": "甚贤",
                    "圣_shenxian_info": "锁定技，每当一名其他角色于你的回合外失去牌时，若其手牌数量不小于你，你摸一张牌",
                    "圣_qiangwu": "枪舞",
                    "圣_qiangwu_info": "锁定技，出牌阶段（限一次），你可以进行一次判定。若判定结果为红色，你于本回合内使用【杀】无次数限制；否则，你使用【杀】无距离限制",
                    "圣_qiangwu2": "枪舞",
                    "圣_qiangwu2_info": "",
                    "圣_qiangwu3": "枪舞",
                    "圣_qiangwu3_info": "",
                    "圣_fengxiang": "凤翔",
                    "圣_fengxiang_info": "锁定技，你立即获得造成伤害的【杀】",
                    "ssb_sgllg": "神鬼玲珑冠",
                    "ssb_sgllg_info": "",
                    "ssb_sgwsj": "神鬼无双戟",
                    "ssb_sgwsj_info": "◆每当你使用【杀】即将造成伤害时，若你的体力值大于你体力值上限的一半，你可以令此伤害+1，然后你失去一点体力并摸一张牌",
                    "圣_mingjian2": "明鉴",
                    "圣_mingjian2_info": "",
                    ooooooooooooooooooooo: "ooooooooooooooooooooo",
                    "ooooooooooooooooooooo_info": "",
                    "圣_shensu": "神速",
                    "圣_shensu_info": "锁定技，准备阶段、出牌阶段、结束阶段开始时，你可以选择任意一名其他角色，视为对其使用一张不计入出牌次数限制的【杀】",
                    "圣_leili": "雷厉",
                    "圣_leili_info": "锁定技，你不能使用但可以重铸【杀】",
                    "圣_jixi": "疾袭",
                    "圣_jixi_info": "锁定技，每当一名其他角色于你的回合外受到伤害后，若伤害来源不为你，你可以翻面并对其造成一点雷属性伤害，然后你摸一张牌",
                    "'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''": "'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''",
                    "'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''_info": "",
                    "圣_zhilue": "智略",
                    "圣_zhilue_info": "锁定技，每当一名其他角色于你的回合外使用锦囊牌指定你为目标结算后，你获得此牌",
                    "圣_tiance": "天策",
                    "圣_tiance_info": "锁定技，每当你受到伤害后，你可以选择任意一名角色，令其选择摸两张牌或恢复一点体力",
                    "圣_shenmou": "神谋",
                    "圣_shenmou_info": "锁定技，你立即获得所有角色的判定牌",
                    "``````````````````````````": "``````````````````````````",
                    "``````````````````````````_info": "",
                    "圣_jigong": "疾攻",
                    "圣_jigong_info": "锁定技，出牌阶段，你可以摸X张牌并令你的攻击范围无限制（X为场上现存活玩家数量）；若如此做，此回合内你的手牌上限改为X；结束阶段，若X等于0，你失去一点体力(X为你此阶段造成的伤害数)",
                    "圣_jigong2": "疾攻",
                    "圣_jigong2_info": "",
                    "圣_shifei_sha": "饰杀",
                    "圣_shifei_shan": "饰闪",
                    "圣_shifei_tao": "饰桃",
                    "圣_shifei_jiu": "饰酒",
                    "圣_shifei": "饰非",
                    "圣_shifei_info": "锁定技，每回合限一次，当你需要打出一张【闪】时，你弃置当前回合角色的一张牌；然后你可以令任意一名其他角色摸一张牌。若如此做，视为你打出了【闪】",
                    "圣_dihui": "诋毁",
                    "圣_dihui_info": "锁定技，其他角色的手牌上限-1",
                    ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,": ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,",
                    ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,_info": "",
                    "圣_jueqing": "绝情",
                    "圣_jueqing_info": "锁定技，每当一名不处于濒死状态的其他角色于其回合外即将恢复体力时，防止之，改为失去一点体力",
                    "圣_wuxin": "无心",
                    "圣_wuxin_info": "锁定技，你即将造成或受到的伤害均视为失去体力",
                    "圣_shangshi": "伤逝",
                    "圣_shangshi_info": "锁定技，若你已受伤：每当你于回合内使用牌后，你摸一张牌；每当你于回合外失去牌后，你将手牌补至体力值上限",
                    "ssb_xuwangzhimian": "虚妄之冕",
                    "ssb_xuwangzhimian_info": "",
                    "ssb_xiuluolianyuji2": "修罗炼狱戟",
                    "ssb_xiuluolianyuji2_info": "",
                    "ssb_juechenjinge": "绝尘金戈",
                    "ssb_juechenjinge_info": "",
                    "ssb_xiuluolianyuji": "修罗炼狱戟",
                    "ssb_xiuluolianyuji_info": "",
                    "ssb_chiyanzhenhunqin": "赤焰镇魂琴",
                    "ssb_chiyanzhenhunqin_info": "",
                    "ssb_juechenjinge2": "绝尘金戈",
                    "ssb_juechenjinge2_info": "",
                    "ssb_chixueqingfeng2": "赤血青锋",
                    "ssb_chixueqingfeng2_info": "",
                    "ssb_chixueqingfeng": "赤血青锋",
                    "ssb_chixueqingfeng_info": "",
                    "ssb_qimenbagua": "奇门八卦",
                    "ssb_qimenbagua_info": "",
                    "ssb_guofengyupao": "国风玉袍",
                    "ssb_guofengyupao_info": "",
                    "ssb_guilongzhanyuedao": "鬼龙斩月刀",
                    "ssb_guilongzhanyuedao_info": "",
                    xxxxxxxxxxxxxxxxxxxxxxxxx: "xxxxxxxxxxxxxxxxxxxxxxxxx",
                    "xxxxxxxxxxxxxxxxxxxxxxxxx_info": "",
                    "圣_longyin": "龙吟",
                    "圣_longyin_info": "锁定技，每当一名角色于其出牌阶段使用【杀】时，你可以弃置一张牌令此【杀】不计入出牌次数限制，然后你与该角色各摸一张牌。若如此做，你获得一枚“龙”印记",
                    "圣_rongzheng": "戎征",
                    "圣_rongzheng_info": "锁定技，每当一名其他角色即将受到【杀】的伤害时，若伤害来源不为你，你可以弃置一枚“龙”印记防止之，并视为当前回合角色对你使用一张【杀】",
                    "圣_longyix": "龙义",
                    "圣_longyix_info": "锁定技，你拥有一枚“龙”印记",
                    "圣_huxiao": "虎啸",
                    "圣_huxiao_info": "锁定技，每当你造成火属性伤害后，你令目标获得一枚“啸”印记",
                    "圣_shengyou": "圣佑",
                    "圣_shengyou_info": "锁定技，准备阶段，若你未装备武器，你将一张“青龙偃月刀”置入你的装备区；否则你恢复一点体力",
                    "圣_hunji": "魂继",
                    "圣_hunji_info": "觉醒技，结束阶段，若你于此回合内造成的伤害不小于你的当前体力值，你恢复一点体力（若未受伤则改为摸一张牌），然后获得技能【圣佑】",
                    "圣_huxiao3": "虎啸",
                    "圣_huxiao3_info": "",
                    "圣_huxiao_jieshao": "啸",
                    "圣_huxiao_jieshao_info": "拥有“啸”印记的角色受到来自神银屏的火属性伤害时，与神银屏各摸一张牌；神银屏对拥有“啸”印记的角色使用牌无次数限制",
                    "︹︹︹︹︹︹︹︹︹︹︹︹︹": "︹︹︹︹︹︹︹︹︹︹︹︹︹",
                    "︹︹︹︹︹︹︹︹︹︹︹︹︹_info": "",
                    "圣_niepan": "涅槃",
                    "圣_niepan_info": "限定技：当你处于濒死状态时，你可以重置武将牌并将体力恢复至体力值上限，弃置所有卡牌然后摸4张牌",
                    "圣_tianyu": "天狱",
                    "圣_tianyu_info": "锁定技，你无法被横置；结束阶段，其他所有角色横置",
                    "圣_huanyu": "幻羽",
                    "圣_huanyu_info": "锁定技，出牌阶段（限一次），你可以弃置一张♣️牌，将任意名角色横置或解除横置；若此次仅横置了其他角色，你进行一次选择：对首名角色造成一点火/雷属性伤害",
                    "★★★★★★★★★★★★★": "★★★★★★★★★★★★★",
                    "★★★★★★★★★★★★★_info": "",
                    "圣_caishi": "才识",
                    "圣_caishi_info": "锁定技，准备阶段，若你已受伤，你需选择一项：</br>1.恢复一点体力并令防御距离+1，本回合内不可对自己使用牌；2.摸一张牌并令手牌上限+1，本回合内不可对其他角色使用牌（增幅效果持续至下回合初）",
                    "圣_zhongjian": "忠鉴",
                    "圣_zhongjian_info": "锁定技，出牌阶段（限一次），你可以选择至多X名其他角色，你与每名目标角色同时展示一张手牌。若你与目标展示的手牌颜色相同，此次展示的牌均置入弃牌堆，其受到一点伤害，你获得一枚“鉴”印记；你至多拥有3枚“鉴”印记（X为你的手牌数量）",
                    "圣_jianshu": "鉴书",
                    "圣_jianshu_info": "锁定技，结束阶段，你弃置所有“鉴”印记并获得对应效果",
                    "圣_jianshu_jieshao": "鉴",
                    "圣_jianshu_jieshao_info": "</br>3枚：至你的下个回合开始前，锦囊牌无法对你造成伤害</br>2枚：恢复一点体力或摸两张牌</br>1枚：摸一张牌",
                    "﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀": "﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀",
                    "﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀_info": "",
                    "圣_qianying": "倩影",
                    "圣_qianying_info": "锁定技，每回合限一次，当一名角色进入濒死状态时，你可以令一名存活角色摸五张牌并弃置四张牌。若弃置花色均不同，则视为其对濒死角色使用【桃】，否则你失去一点体力并获得所有弃置牌",
                    "ssb_yyfh": "焰狱",
                    "ssb_yyfh_info": "",
                    "圣_fanghua": "芳华",
                    "圣_fanghua_info": "锁定技，当一名其他角色翻面后，其失去一点体力",
                    "圣_luoshen": "洛神",
                    "圣_luoshen_info": "锁定技，准备阶段，你进行一定判定：若判定结果的花色不为♥️则继续判定，直至出现♥️花色，然后你获得本阶段所有成功的判定牌。若你因此技能而获得的牌数不大于2，结束阶段，你可以令一名其他角色翻面",
                    "圣_xishui": "汐水",
                    "圣_xishui_info": "锁定技，你可以将一张非♥️卡牌当做【闪】打出；每当你使用或打出一张【闪】时，你可以令一名其他角色翻面",
                    "ˇˇˇˇˇˇˇˇˇˇˇˇˇˇ": "ˇˇˇˇˇˇˇˇˇˇˇˇˇˇ",
                    "ˇˇˇˇˇˇˇˇˇˇˇˇˇˇ_info": "",
                    "圣_fanghun": "芳魂",
                    "圣_fanghun_info": "锁定技，每当你造成1点伤害后，你获得1枚“芳”印记；你可以于合适的时机移去1枚“芳”印记来发动技能“龙胆”，摸一张牌并于本回合内获得对应技能增幅（马术/飞影）",
                    "圣_fuhan": "扶汉",
                    "圣_fuhan_info": "限定技，回合结束后，你可以弃置所有“芳”印记，随机观看X名未登场的蜀势力角色，选择并化身为其中一名，并将体力值上限调整为4+本局游戏内移除的所有“芳”印记的数量；然后你将体力值恢复至体力值上限的一半（X为你当前体力值的2倍）（化身后的当前体力值为你的当前体力值与化身角色的当前体力值的总和）",
                    "圣_mashu": "马术",
                    "圣_mashu_info": "锁定技，你的进攻距离+1",
                    "圣_feiying": "飞影",
                    "圣_feiying_info": "锁定技，你的防御距离+1",
                    "﹊﹊﹊﹊﹊﹊﹊﹊﹊﹊﹊﹊﹊﹊": "﹊﹊﹊﹊﹊﹊﹊﹊﹊﹊﹊﹊﹊﹊",
                    "﹊﹊﹊﹊﹊﹊﹊﹊﹊﹊﹊﹊﹊﹊_info": "",
                    "圣_fankui": "反馈",
                    "圣_fankui_info": "锁定技，每当你受到伤害时，你获得同等于此次伤害量的“馈”印记；然后你可以获得伤害来源的一张牌",
                    "圣_guicai": "鬼才",
                    "圣_guicai_info": "锁定技，每当一名角色即将进行判定时，你摸两张牌；然后你可以打出一张牌替换判定结果，或是取消并弃置两张牌",
                    "圣_baiyin": "拜印",
                    "圣_baiyin_info": "觉醒技：当你拥有至少4枚“馈”印记时，你需恢复一点体力并重置武将牌，失去技能“鬼才”，修改技能“反馈”并获得技能“忍戒” “极略”",
                    "圣_renjie": "忍戒",
                    "圣_renjie_info": "锁定技，每当你于回合外受到伤害、失去体力、失去牌后，你获得等量枚“忍”印记",
                    "圣_fankui_juexing": "反馈",
                    "圣_fankui_juexing_info": "锁定技，每当你受到伤害时，你可以获得伤害来源区域内的等量张牌",
                    "圣_jilue": "极略",
                    "圣_jilue_info": "锁定技，准备阶段，若你已受伤，你可以弃置一枚“忍”印记恢复一点体力；出牌阶段，每当你使用一张牌后，你可以弃置一枚“忍”印记摸一张牌；每当你即将造成伤害时，你可以弃置一枚“忍”印记令此伤害+1；每当你即将受到伤害时，你可以弃置一枚“忍”印记令此伤害-1",
                    "圣_jilue_shou": "极略",
                    "圣_jilue_shou_info": "是否弃置一枚“忍”印记令伤害-1？",
                    "圣_jilue_gong": "极略",
                    "圣_jilue_gong_info": "是否弃置一枚“忍”印记令此伤害+1？",
                    "圣_jilue_draw": "极略",
                    "圣_jilue_draw_info": "是否弃置一枚“忍”印记摸一张牌？",
                    "圣_jilue_recover": "极略",
                    "圣_jilue_recover_info": "是否弃置一枚“忍”印记恢复一点体力？",
                    "℡℡℡℡℡℡℡℡℡℡℡℡℡℡": "℡℡℡℡℡℡℡℡℡℡℡℡℡℡",
                    "℡℡℡℡℡℡℡℡℡℡℡℡℡℡_info": "",
                    "圣_ganglie": "刚烈",
                    "圣_ganglie_info": "锁定技，每当你即将受到伤害时，你可以进行一次判定：若判定结果不为♥️，则此伤害-1并对伤害来源造成一点伤害，否则令伤害来源弃置两张牌",
                    "圣_qiuyuan": "求援",
                    "圣_qiuyuan_info": "锁定技，每回合限一次，当你即将受到伤害时，你可以选择一名其他角色（不可为当前回合角色），令其选择一项：1.交给你一张【桃】，2.代替你承受一点伤害",
                    "圣_zhonghun": "忠魂",
                    "圣_zhonghun_info": "锁定技，每当一名已受伤的其他角色的回合开始时，若其手牌数量小于你，你可以弃置所有手牌令其额外摸等量张牌；然后若其当前体力值不大于你，你与其各恢复一点体力",
                    "圣_danmu": "啖目",
                    "圣_danmu_info": "锁定技，你使用【杀】仅可指定距离为1的角色为目标；但无视与其他圣神将的距离限制",
                    "圣_jieao": "桀骜",
                    "圣_jieao_info": "锁定技，你使用的首张【杀】无视距离",
                    "✧✧✧✧✧✧✧✧✧✧✧✧✧✧✧✧": "✧✧✧✧✧✧✧✧✧✧✧✧✧✧✧✧",
                    "✧✧✧✧✧✧✧✧✧✧✧✧✧✧✧✧_info": "",
                    "ssb_swzw_damage": "死亡之舞",
                    "ssb_swzw_damage_info": "",
                    "ssb_swzw_source": "死亡之舞",
                    "ssb_swzw_source_info": "",
                    "ssb_swzw": "死亡之舞",
                    "ssb_swzw_info": "",
                    "圣_xishui2": "汐水",
                    "圣_xishui2_info": "",
                    "圣_xiangle": "享乐",
                    "圣_xiangle_info": "锁定技，当你于回合外成为其他角色使用【杀】【决斗】的目标时，其需弃置一张装备牌并令你摸一张牌，否则此牌对你无效",
                    "圣_fangquan": "放权",
                    "圣_fangquan_info": "锁定技，结束阶段，若你本回合内未造成任何伤害，你恢复一点体力并可以对任意一名其他角色造成一点伤害；然后该角色恢复一点体力并开始一个额外的回合",
                    "圣_ruoyu": "若愚",
                    "圣_ruoyu_info": "锁定技，摸牌阶段，你需进行一次判定：若判定结果不为♥️，你额外摸一张牌但本回合内不可使用【杀】",
                    "ºººººººººººººººººººººººººººº": "ºººººººººººººººººººººººººººº",
                    "ºººººººººººººººººººººººººººº_info": "",
                    "圣_kurou": "苦肉",
                    "圣_kurou_info": "锁定技，出牌阶段（限一次），你可以失去1点体力摸3张牌；若你的体力值因此而小于体力值上限的一半，则改为摸2张牌并选择恢复一点体力或额外摸两张牌",
                    "圣_yanzhan": "焰战",
                    "圣_yanzhan_info": "锁定技，你使用的红色【杀】无法被闪避",
                    "圣_zhaxiang": "炸降",
                    "圣_zhaxiang_info": "锁定技，每当你失去体力后，若此时是你的回合内，你后续造成的伤害均视为火属性伤害，使用【杀】无距离限制且使用次数上限+1；若此时是你的回合外，你对当前回合角色造成一点火属性伤害",
                },
            },
            intro: "<b><span class=\"yellowtext\" style=\"color:#FFFF00\">更新日志:</span></b></br>2019年5月27日更新列表</br>◆[圣神法则]效果在游戏内显示</br>1.新增神将：神刘禅、神黄盖</br>2.新增装备：无</br>3.神将优化：神姜维技能重做；神甄姬增强；神文姬增强；神宪英印记内新增效果介绍</br>4.卡牌调整：修复失去【死亡之舞】后标记依旧存在的BUG；修复神夏侯渊技能【疾袭】自身伤害的BUG</br></br><b><span class=\"yellowtext\" style=\"color:#FFFF00\">拓展作者:</span></b><li>贴吧昵称： </br>淡雾云曦_<li>Q群昵称：</br> 一心强化老神将，老神将也能1穿7</br></br>如遇BUG请在群中@或贴吧及时反馈，我看到后会尽快修复</br></br><b><span class=\"yellowtext\" style=\"color:#FFFF00\">温馨提示:</span></b></br>◆本拓展以强化原有技能为主，自制技能为辅，励志于“造神”的初心永远不会变！</br>◆本拓展圣神将强度大致与旧八位神将持平，略强但并不变态并不失衡，请放心使用</br>◆本拓展圣神将的技能皆为锁定技，其主要效果为防止圣神将的非锁定技能无效(失去技能等debuff可以正常触发)，因此，三国杀锁定技技能框架在此拓展内无效</br>◆本拓展内含有自制装备与自行增强的民间装备，强度略高，请酌情使用</br></br><b><span class=\"yellowtext\" style=\"color:#FFFF00\">拓展简介:</span></b></br>【圣神包】的前身为【三国杀自制神将包】，因当时对代码理解不深导致强度离谱而淘汰，现已更新换代为本拓展</br></br><b><span class=\"yellowtext\" style=\"color:#FFFF00\">背景故事:</span></b></br>你知道，三国大陆吗？</br></br> 在浩瀚宏大的无名宇宙中，有这么一个不为人知的世界：</br></br> 有些人锦袍折扇，风度翩翩；有些人鳞甲披身，血染沙场；还有些，在这个世界中的不同的地方，正在冷眼旁观着这个世界。</br></br> 他们，大都已对这个世界无任何感情；他们，在聚集一起之前毫不相干；他们，仅仅是执行着必要的责任；他们，就是“圣神”！！</br></br> 在这个世界中，同时存在着三种不同的“生灵”：“人类”，“魔灵”，“圣神”</br></br> 人类：他们是最脆弱、也是数量最多的种族。他们分布在世界各地，虽然很脆弱，但他们已经衍生出一个完整的社会结构。他们是一切“生灵”的“载体”，也是这个世界目前的“主宰”</br></br> 魔灵：他们生活在飘忽不定的<魔域>中，他们是由一群邪恶奸诈的人类死后堕入<魔域>而成，他们无时无刻不在想着壮大自身，占领这个世界。为此，他们甚至结交了其他世界中另外的生命体...... </br></br>圣神：他们是一群天选之人，是这个世界的娇子。他们生前也是普普通通的人类，在合适的时间，“神袛之位”开启后，他们便被天雷接引，至入天劫之中。剥夺七情六欲、碾碎凡尘之心、替换筋骨血肉，最后，接引至“圣神界”，化为“圣神”</br></br></br> “神袛之位”的开启时间无人知晓，但诸神集结的进度每日都在进增。虽然现在看似天下太平，但魔域那边，似乎又有了新的动静……",
            author: "",
            diskURL: "",
            forumURL: "http://tieba.baidu.com/p/6026277042?share=9105&fr=share&see_lz=0&sfc=copy&client_type=2&client_version=9.9.8.42&st=1551127384&unique=E26E93301619AFA7AADFF38794E7C539",
            version: "2.0",
        }, files: { "character": ["圣神_huanggaix.jpg"], "card": ["shengqi_swzw.jpg"], "skill": [] }
    }
})