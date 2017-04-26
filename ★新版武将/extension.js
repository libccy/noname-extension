game.import("extension",{name:"★新版武将",content:function (config,pack){
    
},precontent:function (){
    
},help:{"★新版武将":"<li>本次更新适当削弱了相对较强的武将，新增武将：★神黄盖、卡特琳娜、杨过。修复已知BUG<li>本扩展附带武将配音，本人坚决杜绝哑巴武将扩展，请勿作任何修改谢谢<li>有任何问题BUG或者需要作者更新请到贴吧帖子里留言反馈，没需求可能就不更了",},config:{  
             new:{
            name:'装逼按钮',
            init:true,
         }            
},
package:{
        character:{
        character:{
               new_xiaolongnv:['female',['qun','shu','wei','wu'].randomGet(),Infinity,[]],
               new_yangguo:['male',['qun','shu','wei','wu'].randomGet(),4,['new_arxhz']],
               news_huanggai:['male','wu',5,['new_bianchi']],
               new_menghuo:['male','shu',4,['huoshou','new_zaiqi']],
               new_wangyun:['male','qun',3,['new_lianji','new_jiedao']],
               new_pangde:['male','qun',4,['mashu','new_mengjin']],
              qibing:['male','qun',4,['mashu','dangxian','guding_skill']],
              dunpaibing:['male','wu',4,['renwang_skill','dangxian']],
              futoubing:['male','wei',4,['guanshi_skill','dangxian']],
              new_szhugeliang:['male','qun',3,['new_shenji','new_miaosuan','kanpo']],
              new_zhangchunhua:['female','wei',3,['new_jueqing','shangshi']],
              new_lukang:['male','wu',4,['new_shenshi']],
              huangjin:['male','qun',3,['fuji','leiji','guidao']],
              new_guanping:['male','shu',4,['new_longyin']],
              new_guanyinping:['female','shu',3,['huxiao','xueji','new_wuji']],
              new_wangyi:['female','wei',3,['new_zhenlie','miji']],
              katelinna:['female','shu',3,['new_tanlan','new_buxiang','new_lianhua']],
              new_daqiaoxiaoqiao:['female','wu',3,['new_xingwu','luoyan']],
              pichengnvjing:['female','qun',3,['chuchang','baotou','heping','new_juji']],
              tengjiabing:['male','qun',3,['tengjiax','xionghan']],
              new_szhaoyun:['male','qun',2,['longhun','new_juejing']],
              new_mateng:['male','qun',4,['mashu','new_xiongyi']],
             new_zhangjiao:['male','qun',3,['leishen','xinguidaox','leidian','new_huangtian'],['zhu']],
             new_yuanshu:['male','qun',4,['xin_yongsi','weidi']],

            new_dianwei:['male','wei',4,['xinqiangxix']],
		         new_taishici:['male','wu',4,['new_tianyi']],
             new_gongsunzan:['male','qun',4,['yicong','mubing']],
             new_zhurong:['female','shu',4,['juxiang','manbing']],
             new_wutugu:['male','qun',6,['tengjiax']],
             new_yuanshao:['male','qun',4,['xin_luanji','xueyi'],['zhu']],
            	new_xuhuang:['male','wei',4,['xinduanliangx']],
		         new_lusu:['male','wu',3,['xinhaoshi','dimeng']],
		         new_sunjian:['male','wu',4,['xinyinghun']],
             new_xiahouyuan:['male','wei',4,['new_shensu']],		
	          	new_huangzhong:['male','shu',4,['new_liegong']],
	          	new_weiyan:['male','shu',4,['xinkuanggux']],
		         new_xiaoqiao:['female','wu',3,['new_tianxiang','new_hongyan']],
            new_zhoutai:["male","wu",4,["xinbuqu","xinfenji"]],
            new_zuoci:["male","qun",3,["qimen","dunjia"]],
            new_sluxun:["male","wu",3,["slianying","sqianxun"]],
            new_sunxiu:["male","wu",3,["xinyanzhu","xinxingxue","xinzhaofu"],["zhu"]],
            new_zhangxingcai:["female","shu",3,["xinshenxian","qiangwu"]],
            new_dongzhuo:["male","qun",8,["xinjiuchi","roulin","xinbenghuai","new_baonue"],["zhu"]],
            new_jiangwei:["male","shu",4,["xintiaoxin","kanpo"]],
            new_liushan:["male","shu",3,["xinxiangle","fangquan","ruoyu"],["zhu"]],
            new_dengai:["male","wei",4,["xintuntian","xinzaoxian"]],
            new_sunce:["male","wu",4,["xinjiang","yingzi","zhiba"],["zhu"]],
            zhangzhao:["male","wu",3,["new_zhijian","new_guzheng"]],
            new_caiwenji:["female","qun",3,["new_beige","xinduanchang"]],
            new_lingtong:["male","wu",4,["xinxuanfeng"]],
            shenjianshou:["male","qun",3,["shenshe"]],
            fangzhuzhiren:["female","wu",4,["zhewu","zhufeng"]],
            shangjinlieren:["female","shu",3,["liuxing","shangjin","shuangdiao"]],
            debangzongguan:["male","shu",4,["kuangzhan","wuwei"]],
            duoluotianshi:["female","qun",4,["jingu","jiqu"]],
            hanbingsheshou:["female","wei",3,["zhuanzhu","bingjianx"]],
            liuguanzhang:["male","qun",3,["jieyi"]],
            new_caocao:["male","wei",3,["xinhujia","xinjianxiong"],["zhu"]],
            new_simayi:["male","wei",3,["xinfankui","xinguicai"]],
            new_caopi:["male","wei",3,["xinxingshang","xinfangzhu","xinsongwei"],["zhu"]],
            new_caoren:["male","wei",4,["xinjushou"]],
            xhdxhy:["male","wei",4,["ganglie","shensu"]],
            new_xiahoudun:["male","wei",4,["xinganglie"]],
            new_zhangliao:["male","wei",4,["xintuxi"]],
            new_xuchu:["male","wei",4,["xinluoyi"]],
            new_guojia:["male","wei",3,["tiandu","xinyiji"]],
            new_zhenji:["female","wei",3,["xinluoshen","xinqingguo"]],
            new_liubei:["male","shu",4,["xinrende","xinjijiang"],["zhu"]],
            new_guanyu:["male","shu",4,["xinwusheng"]],
            new_zhangfei:["male","shu",4,["xinpaoxiao"]],
            new_zhugeliang:["male","shu",3,["xinguanxing","xinkongcheng"]],
            new_zhaoyun:["male","shu",4,["xinlongdan","qinggang_skill"]],
            new_machao:["male","shu",4,["mashu","xintieji"]],
            new_huangyueying:["female","shu",3,["xinjizhi","qicai"]],
            new_sunquan:["male","wu",4,["xinzhiheng","xinjiuyuan"],["zhu"]],
            new_ganning:["male","wu",4,["xinqixi"]],
            new_lvmeng:["male","wu",4,["xinkeji"]],
            new_huanggai:["male","wu",4,["xinkurou"]],
            new_zhouyu:["male","wu",3,["xinyingzi","fanjian"]],
            new_daqiao:["female","wu",3,["xinguose","xinliuli"]],
            new_luxun:["male","wu",3,["xinqianxun","xinlianying"]],
            new_sunshangxiang:["female","wu",3,["xinxiaoji","xinjieyin"]],
            new_huatuo:["male","qun",3,["xinqingnang","xinjijiu"]],
            new_lvbu:["male","qun",4,["mashu","wushuang","feijiang"],["zhu"]],
            new_diaochan:["female","qun",3,["lijian","xinbiyue"]],
            dl:["female","qun",3,["biyue","wushuang"]],
            jiansheng:["male","qun",4,["zhiming"],[]],
            emolieshou:["male","wu",4,["shanbi"],[]],
            dema:["male","shu",4,["chenmox","zhengyi"],[]],
            jifengjianhao:["male","wei",3,["jifengx","fengqiang","fengzhan"],["zhu"]],
            wujijiansheng:["male","wu",3,["jiandao","lianpo"],[]],
            manzuzhiwang:["male","wei",4,["baonu","baoji","nuqi"],[]],
            xunjiechihou:["male","shu",3,["zhimang","xunjie"],[]],
            xiongnu:["male","wei",8,["mashu","boss_shisi","jielue"],["zhu","boss"],'wei'],
        },
        characterIntro:{
                new_yangguo:'杨过，名过，字改之，金庸武侠小说《神雕侠侣》中的主人公，前作《射雕英雄传》的杨康与穆念慈之子，西毒欧阳锋的义子。名字为郭靖、黄蓉所取，取“有过则改之”之意。杨过叛逆机智、情绪激烈、风流英俊，所学武功博杂，涉猎古墓派武功、蛤蟆功、打狗棒法、弹指神通及一些九阴真经，最终合成创作为黯然销魂掌。幼时流落嘉兴，14岁时获郭靖接到桃花岛居住，后被送至全真教，又被古墓派小龙女收养，同习玉女心经。后相助郭家，大战金轮法王。又因“师生恋”惊世骇俗，多番寻找出走的姑姑。杨过在绝情谷身中情花毒，又遭郭芙斩下右臂，后受神雕指导学得独孤求败海潮练剑的秘诀。然后大战全真教，当场和师傅结为夫妇。又因郭芙之故，妻子小龙女剧毒难治投崖。十六年后与亦师亦友的神雕闯荡江湖，行侠仗义，人称“神雕侠”。后重见绝情谷底的小龙女，相助郭家保卫襄阳，打败金轮法王和蒙古大汗，又获封新五绝“西狂”，结识郭襄、张三丰等人，最终归隐古墓。',
                new_xiaolongnv:'【该角色暂时未出，请待作者更新】小龙女，金庸武侠小说《神雕侠侣》中的女主人公，出生时被遗弃在终南山下，被古墓派林朝英的丫环收为弟子，十八年来始终与孙婆婆为伴。十八岁那年破戒收了古墓派第一位男弟子杨过为徒，几经波折与杨过互生情愫，感情之路上劫难重重、几度生死，与杨过在多番生死浩劫中更是深深相爱，其间跨越一十六年。十六年后与杨过义助郭靖、黄蓉守卫襄阳，成为扬名天下的“神雕侠侣”。第三次华山论剑后，与杨过归隐古墓。',                
                new_menghuo:'中国三国时期南中少数族首领。系东汉末益州建宁郡( 今云南晋宁东 )大姓，身材肥硕。生卒年不详。官至御史中丞。曾被诸葛亮七擒七纵，传为佳话。',
                new_pangde:"庞德（？－219年），字令明，南安郡狟道县（今甘肃天水市武山县四门镇）人，约在初平年间，投奔马腾帐下，在平定羌民的征伐中屡立战功。建安年间，庞德跟随马超征战平阳，抵御袁将郭援、高干，在马上亲斩郭援首级。张白骑在弘农反叛时，庞德也参与战斗。每次出征常冲锋陷阵，勇冠凉州三军。后几经辗转，随张鲁归降于曹操麾下，被授官立义将军，封关内亭侯，食邑三百户。219年，庞德协助曹仁抵御关羽。两军对垒期间，常骑白马驰骋奔杀，曾一箭射中关羽前额，被关羽军称作“白马将军”。时值汉水暴溢，他率诸将与关羽殊死搏斗，箭镞射尽，又短兵相接。而他格斗益怒，胆气愈壮，力战多时后因小舟被洪水打翻为关羽军所擒。关羽敬重他的刚毅威武，以封将劝降，但他却怒目不跪，怒斥关羽，最终殒身殉节。",
                new_wangyun:"王允（137年－192年），字子师，太原祁（今山西祁县）人（据《后汉书》）。东汉末年大臣。王允出身官宦世家。他十九岁就开始任公职，壮年时任豫州刺史。因为在和中常侍张让的斗争中失败，王允被迫去官隐居，在中平六年，何进掌权之后重新出仕，历任从事中郎和河南尹。在何进被宦官诛杀，董卓掌权时，他已经代替杨彪成为了司徒兼尚书令。身为地方官勤政爱民，由于朝廷腐败而被迫在此为官，从而密谋刺杀董卓。董卓死后，王允与吕布共执朝政，但是董卓余党李傕、郭汜、樊稠等率军攻破长安，吕布出逃，王允被处死，时年56岁。",
             		new_zhangchunhua:'西晋宣穆皇后张春华（189－247），河内平皋（今河南温县）人。她是晋宣帝司马懿之妻，晋景帝司马师、晋文帝司马昭的母亲。后被追尊为皇后。',
             new_lukang:'陆抗（226年－274年），字幼节，吴郡吴县（今江苏苏州）人。三国时期吴国名将，丞相陆逊次子。陆抗袭父爵为江陵侯，为建武校尉，领其父众五千人。后迁立节中郎将、镇军将军等。孙皓为帝，任镇军大将军、都督西陵、信陵、夷道、乐乡、公安诸军事，驻乐乡（今湖北江陵西南）。凤凰元年（272年），击退晋将羊祜进攻，并攻杀叛将西陵督步阐。后拜大司马、荆州牧，卒于官，终年49岁。与陆逊皆是吴国的中流砥柱，并称“逊抗”，被誉为吴国最后的名将。',
             new_guanping:'关平是关羽在战乱中所收之义子。关羽脱离曹军后，与刘备于关定家中重逢，关定欲使年仅十八岁的关平随关羽同行，刘备便主张让关羽与关平结为义父子。自此后关平随侍在关羽身边，一生东征西讨。他武勇过人，不逊乃父，曾跟随刘备出征西川，立下战功，后来又与曹魏猛将庞德大战三十回合，不分胜负。',
             new_guanyinping:'河东解县（今山西运城）人，美髯公关羽之女。因在关羽的四个子女中排行第三，故又被称作“关三小姐”、“关氏三姐”或“关羽三小姐”。传说她是赵云的弟子、并随同诸葛亮平定南蛮。',
             new_wangyi:'益州刺史赵昂之妻，赵英、赵月之母。马超作乱凉州时，王异协助丈夫守城，多有功勋，自马超攻冀城至祁山坚守，赵昂曾出奇计九条，王异皆有参与。',
             katelinna:'(该武将还没推出，请等待更新！)卡特琳娜生于诺克萨斯的权贵之家，从小就接受匕首的训练。那位火爆任性的小姑娘已经长大，美丽而致命。对家族的责任和忠诚缓和了火爆的性格。事实早已证明，在自我与责任之间出现分歧时，卡特琳娜火爆的激情就会变成一把双刃剑，伤人伤己。作为诺克萨斯将军的女儿，卡特琳娜生性自由奔放，年幼的卡特琳娜在各方面都得到了最好的照顾。在战斗中，她发现自己被刀刃所吸引，而她的天赋也展现出来。卡特琳娜在诺克萨斯军队里接受成为最致命刺客的训练，让整个家族都为之骄傲。很快，导师就认为卡特琳娜已经可以接受试炼，前去刺杀一名出色的德玛西亚士兵。',
             pichengnvjing:'凯特琳在14岁的时候就表现出其侦查追踪的天赋。那一次，凯特琳的父亲在回家的路上遭到袭击并被抢劫，她当天晚上就带着父亲的步枪偷偷溜出家门，根据犯罪现场的蛛丝马迹追踪到抢劫者。一开始，她的父母极力反对其如此危险的爱好，但凯特琳已深陷其中，无法自拔。为了尽全力保护女儿，凯特琳的妈妈利用自己的专长，开始为她的侦查量身打造出高科技装备。',
             new_daqiaoxiaoqiao:'大乔、小乔为汉太尉乔玄之女，实为误传）的两个女儿大乔与小乔，名不详。二乔容貌美丽，以美貌出名。大乔为孙策妾，小乔为周瑜妻。',
             new_szhaoyun:'字子龙，常山真定人。身长八尺，姿颜雄伟。长坂坡单骑救阿斗，先主云：“子龙一身都是胆也。”',
             tengjiabing:'身着藤甲的士兵；藤甲是以西南荒蛮之地所生野藤为原料，经能工巧匠加工制作藤甲，又以桐油浸泡，七七四十九天后才制成。此甲又轻又坚，善能防箭，刀砍枪刺不入，遇水不沉，战场之上所向无敌。',
             new_yuanshu:'字公路，汝南汝阳人，袁绍之弟。初为虎贲中郎将。董卓进京后以袁术为后将军，袁术因畏祸而出奔南阳。初平元年与袁绍、曹操等同时起兵，共讨董卓。后与袁绍对立，被袁绍、曹操击败，率馀众奔九江，割据扬州。建安二年称帝，建号仲氏。',
		        new_zhangjiao:'乱世的开始，黄巾起义军首领，太平道创始人。张角早年信奉黄老学说，对在汉代十分流行的谶纬之学也深有研究，对民间医术 、巫术也很熟悉。',
            shenjianshou:'射箭出神入化，百发百中被称为神箭手',
            new_gongsunzan:'字伯珪，汉族，号“白马义从”。辽西令支人。东汉末年献帝年间占据幽州一带的军阀，汉末群雄之一。出身贵族，因母地位卑贱，只当了郡中小吏。他貌美，声音洪亮，机智善辩。后随卢植于缑氏山中读书，粗通经传。',
        		new_wutugu:'南蛮乌戈国主，身长丈二（约合现在2.77米），不食五谷，以生蛇恶兽为饭。身有鳞甲，刀箭不能侵。兀突骨乘骑巨象，头戴日月狼须帽，身披金珠缨络，两肋下露出生鳞甲，眼目中微有光芒。',
            zhangzhao:'张昭（156年－236年），字子布。徐州彭城（今江苏徐州）人。三国时期孙吴重臣。',
            new_sunxiu:'孙权第六子，孙綝发动政变罢黜孙亮后，迎立孙休为帝。后孙綝专权，孙休遣使丁奉等人将其诛杀。孙休在位期间，颁布良制，嘉惠百姓，促进了东吴的繁荣。',
          new_zhangxingcai:"蜀名将张飞与夏侯氏所生之女，刘禅的妻子，史上称为“敬哀皇后”。",
            jifengjianhao:"亚索是一个百折不屈的男人，还是一名身手敏捷的剑客，能够运用风的力量来斩杀敌人。这位曾经春风得意的战士因为诬告而身败名裂，并且被迫卷入了一场令人绝望的生存之战。即使整个世界都已与他为敌，他也要竭尽所能地去将罪恶绳之以法，并恢复自身的名誉。",
            fangzhuzhiren:"诺克萨斯，每一位居民都可以平步青云，而无论其种族、男女、贵贱——实力，就是一切。锐雯曾怀着对此理想的坚定信仰，不懈地追求着远大的前程。她曾是一位初露锋芒的士兵，那时的她能够挥动一把与自己差不多重的长剑。她曾是一位无情高效的勇士，但是她真正的实力潜藏在她的信念之中。她总是毫不迟疑地投入战斗：不因道德而犹豫，不因死亡而恐惧。锐雯逐渐成为了同辈之中的领头人物，诺克萨斯精神的典型代表。",
            duoluotianshi:"莫甘娜就是那个与专制统治者抗战的人，因此她被称为“堕落”。莫甘娜不是无辜的，她探究秘法来获得禁忌力量，最终成为黑暗魔法强大的主人。这都是为了打败敌方将军——她的姐姐凯尔。",
            dl:"吕布与貂蝉都是三国的人物，他们有一段奇妙的时事佳缘。",
           new_lingtong:"字公绩，吴郡馀杭人，三国时期吴国名将。凌操之子，官至偏将军。",
            new_huangzhong:"字汉升，今河南南阳人。汉末三国时期蜀汉名将。本为刘表部下中郎将，后归刘备，并助刘备攻益州刘璋，在定军山一战中阵斩曹操部下名将夏侯渊。备称汉中王后改封后将军，赐关内侯。",
            new_weiyan:"字文长，义阳人。三国时期蜀汉名将，诸葛亮死后，魏延因被陷害谋反而遭杨仪一党所杀。",
            new_xiahouyuan:"字妙才，沛国谯人。东汉末年曹操部下名将，夏侯惇之族弟，八虎骑之一。群雄征讨董卓时随曹操一同起兵，后征战四方，屡立功勋。在平定马超叛乱后负责西北防线的镇守。公元219年刘备攻打汉中，被刘备部将黄忠所杀。",
            new_caoren:"字子孝，沛国谯人，曹操的从弟。三国时期曹魏名将，官至大司马。谥曰忠侯。",
            new_xiaoqiao:"庐江皖县人也。父桥国老德尊于时。小乔国色流离，资貌绝伦。建安三年，周瑜协策攻皖，拔之。娶小乔为妻。后人谓英雄美女，天作之合。",
            new_zhoutai:"字幼平，九江下蔡人，三国时期吴国武将。早年与蒋钦随孙策左右，立过数次战功。孙策讨伐六县山贼时，周泰胆气绝伦，保卫孙权，勇战退敌，身受十二处伤。有诗云：三番救主出重围，忠勇如公世所稀。遍体疮痍犹痛饮，血痕残酒满征衣。",
            new_yuji:"自号太平道人，琅琊人，在吴郡、会稽一带为百姓治病，甚得人心。孙策怒之，以惑人心为由斩之，后策常受吉咒而亡。",
            new_zhangjiao:"乱世的开始，黄巾起义军首领，太平道创始人。张角早年信奉黄老学说，对在汉代十分流行的谶纬之学也深有研究，对民间医术 、巫术也很熟悉。",
          new_dianwei:"己吾城村人。东汉末年曹魏猛将。擅使大双戟，为人壮猛任侠，曾为乡人刘氏报仇，杀人出市，人莫敢近。相貌魁梧，膂力过人。建安二年（197），张绣背叛曹操，典韦为保护曹操而独挡叛军，击杀多人，但最终因寡不敌众而战死。",
            new_xunyu:"荀彧，字文若，颍川颍阴（今河南许昌）人。东汉末年曹操帐下首席谋臣，杰出的战略家。自小被世人称作“王佐之才”。",

            new_pangtong:"庞统，字士元，襄阳（治今湖北襄阳）人。三国时刘备帐下谋士，官拜军师中郎将。才智与诸葛亮齐名，人称“凤雏”。在进围雒县时，统率众攻城，不幸被流矢击中去世，时年三十六岁。追赐统为关内侯，谥曰靖侯。庞统死后，葬于落凤庞统墓坡。",
            "xinsp_zhugeliang":"字孔明，号卧龙居士，琅琊阳都人。刘备曾“三顾茅庐”得见卧龙。卧龙以一篇《隆中对》分析天下形势，提出先取荆州，再取益州成鼎足之势的说法。《三国演义》中的诸葛亮善用“火攻”，曾用火攻战术赢得多场战役，如“火烧赤壁”、“火烧博望坡”、“火烧藤甲兵”等。",
            new_taishici:"太史慈，字子义，东莱黄县（今山东龙口东黄城集）人。东汉末年武将，守言应诺，恪遵信义，始终如一，弭息诽论。官至建昌都尉。弓马熟练，箭法精良。原为刘繇部下，后被孙策收降，于赤壁之战前病逝，死时才四十一岁。",
            new_pangde:"字令明，东汉末年雍州南安郡狟道县（今甘肃天水市武山县四门镇）人。曹操部下重要将领。官至立义将军，拜关门亭侯。谥曰壮侯。有一子庞会。",
            new_yanwen:"东汉末年河北袁绍部下武将，素有威名。颜良与文丑一起作为袁绍军队的勇将而闻名。建安四年（199），袁绍以颜良、文丑为将，率精卒十万，准备攻许都；次年，兵进黎阳，遣颜良攻白马。终均亡于关羽刀下。",
            new_yuanshao:"字本初，汉族，汝南汝阳人，出身名门望族，自曾祖父起四代有五人位居三公，自己也居三公之上，其家族也因此有“四世三公”之称。曾于初平元年被推举为反董卓联合军的盟主，联军瓦解后，在汉末群雄割据的过程中，袁绍先占据冀州，又先后夺青、并二州，并于建安四年击败了割据幽州的军阀公孙瓒，势力达到顶点；但在建安五年的官渡之战中败于曹操。在平定冀州叛乱之后，于建安七年病死。",
            new_xuhuang:"字公明，河东杨人。三国时期曹魏名将，本为杨奉帐下骑都尉，杨奉被曹操击败后转投曹操，在曹操手下多立功勋，参与官渡、赤壁、关中征伐、汉中征伐等几次重大战役。",
            new_caopi:"字子桓，三国时期著名的政治家、文学家，曹魏的开国皇帝，公元220－226年在位。沛国谯人，魏武帝曹操与武宣卞皇后的长子。去世后庙号高祖，谥为文皇帝，葬于首阳陵。",
            new_sunjian:"字文台，汉族，吴郡富春人。东汉末期地方军阀，著名将领。史书说他“容貌不凡，性阔达，好奇节”，是大军事家孙武的后裔。汉末群雄之一，三国中吴国的奠基人。孙权建国后，追谥孙坚为武烈皇帝。",
            new_dongzhuo:"字仲颖，陇西临洮人。东汉末年少帝、献帝时权臣，西凉军阀。官至太师、郿侯。其为人残忍嗜杀，倒行逆施，招致群雄联合讨伐，但联合军在董卓迁都长安不久后瓦解。后被其亲信吕布所杀。",
            new_zhurong:"据传为火神祝融氏后裔，南蛮王孟获之妻。武艺超群，善使飞刀，是《三国演义》中写到的唯一真正上过战场的女性。曾与孟获一起抵抗蜀军，在诸葛亮七擒七纵孟获之后，随孟获投降蜀汉。",
            new_menghuo:"中国三国时期南中少数族首领。系东汉末益州建宁郡( 今云南晋宁东 )大姓，身材肥硕。生卒年不详。官至御史中丞。曾被诸葛亮七擒七纵，传为佳话。",
            new_jiaxu:"字文和，武威姑臧人。三国时期魏国著名谋士。曾先后担任三国军阀李傕、张绣、曹操的谋士。官至魏国太尉，谥曰肃侯。",
            new_lusu:"字子敬，汉族，临淮东城人，中国东汉末年东吴的著名军事统帅。他曾为孙权提出鼎足江东的战略规划，因此得到孙权的赏识，于周瑜死后代替周瑜领兵，守陆口。曾单刀赴会关羽于荆州。",


           new_zhanghe:"字儁乂，河间鄚人。三国时期魏国名将。官渡之战时，本为袁绍部将的张郃投降了曹操，并在曹操帐下多立功勋，于曹魏建立后加封为征西车骑将军。诸葛亮六出祁山之间，张郃多次抵御蜀军的进攻，于公元231年在木门道被诸葛亮设伏射死。后谥曰壮侯。为曹魏“五子良将”之一。",
            new_dengai:"字士载，义阳棘阳人。三国时期魏国杰出的军事家、将领。公元263年他与钟会分别率军攻打蜀汉，最后他率先进入成都，使得蜀汉灭亡。后因遭到钟会的污蔑和陷害，被司马昭猜忌而被收押，最后与其子邓忠一起被卫瓘派遣的武将田续所杀害。",
            new_jiangwei:"字伯约，天水冀人。三国时期蜀汉著名将领、军事统帅。原为曹魏天水郡的中郎将，后降蜀汉，官至凉州刺史、大将军。诸葛亮去世后继承诸葛亮的遗志，继续率领蜀汉军队北伐曹魏，与曹魏名将陈泰、郭淮、邓艾等多次交手。",
            new_liushan:"蜀汉后主，字公嗣。小名阿斗。刘备之子，母亲是昭烈皇后甘氏。三国时期蜀汉第二位皇帝，公元223－263年在位。公元263年蜀汉被曹魏所灭，刘禅投降曹魏，被封为安乐公。",

            new_sunce:"字伯符，吴郡富春人。孙坚长子，孙权长兄。东汉末年割据江东一带的军阀，汉末群雄之一，三国时期吴国的奠基者。三国演义中绰号“小霸王”，统一江东。在一次狩猎中为刺客所伤，不久后身亡，年仅二十六岁。其弟孙权接掌孙策势力，并于称帝后，追谥孙策为长沙桓王。",
            new_zhangzhang:"张昭，字子布，彭城人，三国时期吴国重臣，善丹青。拜辅吴将军，班亚三司，改封娄侯。年八十一卒，谥曰文侯。张纮，字子纲，广陵人。东吴谋士，和张昭一起合称“二张”。孙策平定江东时亲自登门邀请，张纮遂出仕为官。张纮后来建议孙权迁都秣陵，孙权正在准备时张纮病逝，其年六十岁。孙权为之流涕。",
            new_zuoci:"左慈，字元放，东汉末方士，汉族，庐江（今安徽庐江西南）人。在道教历史上，东汉时期的丹鼎派道术是从他一脉相传。",
            new_caiwenji:"名琰，原字昭姬，晋时避司马昭讳，改字文姬，东汉末年陈留圉（今河南开封杞县）人，东汉大文学家蔡邕的女儿，是中国历史上著名的才女和文学家，精于天文数理，既博学能文，又善诗赋，兼长辩才与音律。代表作有《胡笳十八拍》、《悲愤诗》等 。",
            xhdxhy:"夏侯惇（？－220年），字元让，沛国谯（今安徽亳州）人。东汉末年名将，曹魏开国元勋，西汉开国元勋夏侯婴的后代。少年时以勇气闻名于乡里。曹操起兵，夏侯惇是其最早的将领之一。多次为曹操镇守后方，曾率军民阻断太寿河水，筑陂塘灌溉农田，使百姓受益，功勋卓著。历任折冲校尉、济阴太守、建武将军，官至大将军，封高安乡侯，追谥忠侯。青龙元年（233年），得以配享太祖（曹操）庙庭。夏侯惇一生虽多在军旅，但仍不忘治学。他常亲自迎师，虚心求教。他为人俭朴，所得赏赐全部分给将士。一生不置产业，至死家无余财。夏侯渊（？－219年），字妙才，沛国谯（今安徽亳州）人，东汉末年名将，擅长千里奔袭作战，官至征西将军，封博昌亭侯。初期随曹操征伐，官渡之战为曹操督运粮草，又督诸将先后平定昌豨、徐和、雷绪、商曜等叛乱。后率军驻凉州，逐马超、破韩遂、灭宋建、横扫羌、氐，虎步关右。张鲁降曹操后夏侯渊留守汉中，与刘备相拒逾年，于定军山被刘备部将黄忠所袭，战死，谥曰愍侯。",
            shangjinlieren:"“风险越大，赏金越多。”无论是美貌颜值还是危险指数，鲜有人能在任何一方面与厄运小姐媲美。作为比尔吉沃特最负盛名的赏金猎人，她的传奇故事建立在无数密布着弹孔的尸体和被捕获的混混们之上。只要比尔吉沃特那臭烘烘的码头和拾荒者棚屋中回响起她标志性的双枪，赏金告示板上的悬赏令就又少了一张。",
            manzuzhiwang:"拜他的桀骜不羁和怒气所赐，泰达米尔在冰原上披荆斩棘，与弗雷尔卓德上杰出的战士较量以精通战斗的艺术。这个暴怒的野蛮人想向那个摧毁他部族的人复仇以及击败所有阻挡他和他进行最后复仇的人们。为了生存他与苦难争斗，不惜在弗雷尔卓德被冻伤，年轻的泰达米尔和他的子民为了这片土地稀有的资源与其他部族交战。一场这样的战斗永远的改变了他的生活。掠夺者们在死寂的夜晚埋伏了泰达米尔的部族，尽管他的战士们将第一波攻势阻挡了回去，他们却没有准备好面对下一个接近的黑影。他挥舞着一把残忍的如同活物的利剑，使用怪异的魔法让入侵者们变得嗜血异常。泰达米尔的部族在顷刻间遭到蹂躏。眼看击败这个神秘的生物没有任何希望，泰达米尔选择直面注定的死亡。黑影重创了这个年轻的野蛮人，伤口足以致命。泰达米尔看到死亡和毁灭吞噬了他的家园，他的生命也摇摇欲坠。没有任何东西留下——有的只是临死前的惨叫声。不能向死亡投降，泰达米尔满腔怒气。他的鲜血在沸腾，他的愤怒将之消耗殆尽，也消除了他的死亡。他蹒跚的站起——勉强的握着剑——振作自己决绝地面对这个黑影。但黑影甚至没有举剑，取而代之的是朝泰达米尔会心一笑便退散在了暗影之中。这也是最后一次这个野蛮人看到他的敌人。某人劫掠了他的家园和子民，泰达米尔在弗雷尔卓德徘徊了数年，发誓要将自己打造成残忍的复仇工具。他造访了所有荒寒中的部族，一个个战胜他们的战士直至没有人再敢挑战他。通过这样，他精通了野蛮人战斗的方式并将他的怒气转化为一种力量。执剑于手而集怒于心，那个曾经将他所知的生活摧毁的人，如今变成了他永恒的复仇任务。“怒气，即是我的武器。”——泰达米尔",
            xunjiechihou:"在班德尔城，提莫是流传于兄弟姐妹中的一则传奇。就约德尔人而言，提莫有点与众不同。虽然他喜欢与其他约德尔人结伴，但他也常常坚持要单枪匹马地执行保卫班德尔城的任务。他为人真诚，性情温和，然而一旦进入战斗，提莫就像变了个人似的，在巡逻时会果断了结那些敌人的性命。在他还是一名年轻的新兵之时，军事训练的教官与其他学员就发现——虽然提莫平常和蔼可亲，很有魅力，然而一旦搏斗练习开始，他就变得异常严肃，效率极高。提莫的上司很快便引导他朝着“主舰斥候队”的方向发展。“主舰斥候队”是班德尔城最富盛名的特种部队之一，与麦林突击队齐名。大多数约德尔人都不能灵活巧妙地处理单人的侦查任务，提莫却精通此道。他保护班德尔城免遭奸细渗入，顺理成章地让他成为最危险的约德尔人之一。虽然当你与提莫在他最钟爱的小酒馆举杯畅饮蜂蜜酒时，你对此是浑然不知的。班德尔城选择提莫作为他们的第一位联盟英雄，提莫也对此仿佛如鱼得水一般。他的标志性武器是一把吹箭枪，使用他从库莽古丛林采集而来的一种罕见的厄菌铊毒药。为了有助于解决自己长期的孤立隔绝，提莫与崔丝塔娜建立了友谊，崔丝塔娜是一位联盟英雄，同时也是班德尔城特种部队的成员。这份友谊对双方都大有裨益，虽然瓦洛兰贪得无厌的媒体大肆散布谣言，宣称他们的友情已经转变成爱情。尽管如此，提莫仍然是英雄联盟的大众宠儿，也是许多人都甚为忌惮的小个子对手。“提莫既是一位活泼开朗的同胞，又是一名无与伦比的杀手，但他始终是我朋友的不二人选。”——崔丝塔娜。",
            debangzongguan:"每当德玛西亚的国王嘉文三世在皇宫顶部那熠熠生辉的大理石阳台上发表他那激情澎湃的演讲之时，赵信都会侍立于他的身旁。人称“德邦总管”的赵信是光盾王朝的私人管家。他那高深莫测且不苟言谈的守夜值勤，使得关于他的“隐秘生活”与出身来源的推测层出不穷。不管是被茶余饭后的闲谈疑为“祖安的双重间谍”，还是被《德玛西亚恒量》的社论推测为“负债累累的符文法师”，以满足大众的好奇心——这当然是有充分理由的。在联盟成立之前，诺克萨斯以其蔚为壮观的“绞肉大赛”而闻名于世。这是一个残忍而扭曲的角斗赛事：当一位斗士赢得比赛时，他所要同时面对的对手（通常为战俘）数目会随之增加。这就意味着每个参赛者最终都必死无疑，只是会带着无上的荣耀死去。赵信，当时被称为“维斯塞罗”，所面对的是300名士兵，这个数目是之前记录的将近六倍。显然，这也意味着是他的最终赛事了。但是嘉文二世给了他一个活命的机会，他可以帮助他逃离这里但作为条件赵信必须为德玛西亚效忠。在他们撤退的途中，赵信替嘉文二世挡下了一支毒箭。这种忠心护主之举，来自于一个并未宣誓效忠的人，为赵信赢得了一个国王身边的职位，直到国王驾崩。赵信效命于先王之子嘉文三世，他正步入一个崭新的战场——正义之地——为收容他的国家而战，以此报答赋予他生命意义的先王恩典，光耀嘉文一族的门庭。“人之死，难免也。可免者，唯败也。”——德玛西亚军队指南。",
            xieexiaofashi:"大多数人不会将约德尔人与令人惧怕的形象联想在一起。约德尔人这个平易近人的迷你民族，虽说勇猛，但通常人们或多或少会认为他们是快乐的种族。他们那高八度的声音，以及天生的可爱外形，会激发出体型较大的民族内心深处的某种保护本能，或者至少会让他们的脑海中浮现出小孩扮大人的画面。然而，约德尔人时不时会变得很邪恶，即使个子不高，也能让其他人心底生出不寒而栗的感觉。维迦便是这样一位扭曲的约德尔人。作为黑魔法师，以及宇宙能量的腐蚀者，他是瓦洛兰最强大的法师之一。孩提时，维迦是一个正常的约德尔人，除了有点小小的不同——他对班德尔城以外的世界充满了强烈的好奇感。这个年轻的约德尔人倾注了大把时间研究瓦洛兰的其他地方，并抓住时机加入了一次与其他城邦之间的商业交易中。然而对他和世界来说，不幸的事情发生了。这场和诺克萨斯商人之间的交易变成了一起非正当的买卖。维迦和他的同伴也因此而遭到陷害。在当局捉拿他之后，他被常年囚禁在诺克萨斯的高墙之内。这样的隔绝对于约德尔人而言是极其危险的——毫无疑问这便是残忍的狱卒的目的所在——维迦被慢慢地折磨至疯。他最终逃狱成功了，心态却已经扭曲变形了。在此之后，他没有回到族人身边，或回班德尔城。而是跑遍了整个大陆，寻求黑暗魔法师的庇护。因为他那疯狂的意念专注于一件事上。很快他凭着一己之力成为一名危险而强大的魔法师。如今，他希望能终止瓦洛兰之上的一切纷争。让所有的城邦都俯首称臣，不�他们有何联系。而英雄联盟则是帮助他达成目的的最佳工具。谁说恶魔一定要样貌恐怖？",
            wujijiansheng:"通过远古的无极之道，易大师调节身体并磨练心智，直至身心合一。尽管他将暴力作为不得已的选择手段，他优雅迅速的舞剑速度却能让他快速解决问题。作为无极之道最后的门徒，易大师将生命奉献于找寻可以继承这份财富的弟子。事实上在易精通无极之道前，他便已被视为这个神秘之道最具天赋的继承者之一。他也很快在一次诺克萨斯大规模袭击他所居住的偏远村庄时证明了自己的天赋。易横扫艾欧尼亚的战场，利用迅捷而致命的攻击击退了诺克萨斯大量的步兵团，甚至让诺克萨斯的高层陷入窘境。在知悉了是无极之道的门徒瓦解了他们的入侵后，诺克萨斯发动了一场可怕的生化袭击以应对这个致命的剑术。那些从剧毒的混合物中幸存下来的人民心智俨然已经扭曲得无法修复。易的家园只剩下一片废墟。在这场战争的最后，易回到了他千疮百孔的村庄。在这儿他成为了袭击最后的受害者。如果不能刀斩肉身，就用心斩灵魂。易的心中只留下一个信念：复仇。他的欲望驱使着他去惩罚那些摧毁他家园的人，易隐居修炼数年。他成为了一名他从未企及过的致命剑客，但真正的无极之道仍然躲避着他。最让易感到挫败的是，一只天赋异禀异的猴子打断了他的修炼。他站姿笔直身材高大，宛如人类。这只猴子观察并模仿易的动作。易发出嘘声驱赶猴子，但这只敏捷的生物却将易对他使用的伎俩当做一种巨大乐趣。逐渐地，易的怒气被平息，他不再与这只顽皮的动物争论。当他完全放下了敌意，他发现他已经可以抓住这只猴子的尾巴。易意识到，如果他只是因为复仇而去追寻无极之道，他将永远无法精通。而当他放开猴子后，他也放下了对敌人鲜血的渴望。易为找到了之前视而不见的东西向猴子道谢，让他吃惊的是这只生物也给予了他回复。他希望学习易的战斗之道。这是一个古怪的请求，但这之后易却看到了新的道路：向他所失去的人民的记忆致敬的方式就是将他们的学术传承给下一代。“最锋利的剑的刀锋也无法与一颗和平的心的平静相匹敌。”——易",
            hanbingsheshou:"伴随着每一发弓箭从她的上古寒冰弓上发射，艾希证明了她是一位神射手。她小心的选择每一个目标，等待正确的时机，射出精准有力的箭矢。她抱着同样的愿景和专注于她的目标，为了寻求弗雷尔卓德部族的统一并将他们打造成一个强大的国家。还是孩子的时候，艾希便是一个梦想家。她对祖先们巨大且被废弃的城堡感到惊讶，她会花许多时间在篝火旁聆听弗雷尔卓德虚构的英雄故事。她最喜欢阿瓦罗萨的传说，声名显赫的女王曾经创下统一弗雷尔卓德的壮举。尽管母亲会责备她愚笨，艾希却发誓终有一天她会加入冰原上分裂而好战的部族。她在内心知道如果人们可以再一次联合起来，他们也将再创辉煌。在艾希15岁的时候，她的母亲因为指挥一场鲁莽的袭击而被杀。突然被带入领袖角色，艾希作出了一个艰难的决定：她会遵循童年时的愿景而不是寻求复仇。她强烈反对部族人民进行报复，宣称在时机到来之际，应该把血债置于一边来维持长远的和平。她的一些战士质疑她是否适合统治他们，他们随即密谋叛乱来杀害这位年轻的领袖。刺客们在艾希的一次日常打猎中行动，但他们的计划却被一只巨鹰所发出的警告吼声所中止。艾希回头看到她的子民执剑接近。寡不敌众的她惊慌的逃窜了数小时。她发现自己身处于未知领域的深处，她的武器也在追逐中遗失。当她再次听到巨鹰的吼叫时，艾希将信念托付给了这只陌生的生物并跟随它来到一块空地。在这她发现鸟儿栖身于石堆上——这是一个古老的被埋葬的弗雷尔卓德石冢。在最后看了她一眼后，巨鹰大叫了一声后飞走。接近石冢后，艾希感到呼吸变得冰冷，一股不寻常的寒意刺骨。石冢顶部的石头刻着单一的符文：阿瓦罗萨。刺客们闯入了这块空地。艾希举起石冢上的符文之石防身，这也暴露了一些隐藏在底部的东西：一把由寒冰雕琢而成的华丽之弓。她抓住冰弓，冰霜渗入手指引发的疼痛让她大叫，冰弓也从它的安歇之地被扯开。寒意从武器流向艾希，也唤醒了一直伴随着她的巨大能力。艾希转身面向刺客们。她本能的拉满弓弦，意志的寒冰之箭形于严寒凝于空气。冰霜之箭并发，艾希也终结了这场暴乱。她小心翼翼地将石头放回原处，致谢于阿瓦罗萨给她的礼物，然后返程回家。艾希的子民马上认出了她手中的传奇武器来自于弗雷尔卓德上古女王的祝福。伴随着阿瓦罗萨的冰弓和她和平统一的愿景，艾希的部族迅速膨胀，成为了弗雷尔卓德之最。从此他们被誉为阿瓦罗萨，他们的联合秉承着一个信仰：一个统一的弗雷尔卓德将再次成为一个伟大的国家。[1]“一个部族，一个民族，一个弗雷尔卓德。”——艾希",
            dema:"在瓦洛兰大陆，虽然人们对德玛西亚的军纪存在争议，但是相同点是所有人都尊敬它。平民和士兵都严格遵守着“零容忍”的准则。这意味着在战斗中徳玛西亚军队永远不会找借口托辞、逃跑、或者投降。至高的军队领袖们强力地执行着这些原则。盖伦——拥有“德玛西亚之力”头衔的英勇勇士，就是军队的模范。成千上万的英雄在德玛西亚和诺克萨斯(德玛西亚的敌对阵营）战场上浴血奋战，战死沙场。",
            emolieshou:"恶魔猎手是被暗夜精灵族社会排斥的黑暗战士。他们在很久以前就和黑暗力量立下契约，要用自己可怕的力量与混乱的力量对抗到底。他们弄瞎了自己的双眼，从而获得了可以迅速发现恶魔的能力。他们手持魔力强大的武器，并以此猎杀恶魔。虽然恶魔猎手可以算得上是暗夜精灵族中最强大的战士，但他无私的牺牲却不被自己的同胞理解。",
            jiansheng:"虽然他们数量稀少，但剑圣一直都是兽族部落中的精英战士。这些拥有精湛剑术的剑圣曾经是火刃氏族的成员，后来火刃氏族被自身邪恶的力量摧毁了。在火刃氏族四分五裂之后，剑圣身背氏族的图腾，为了拯救他们自己和氏族的兄弟们奋斗。在萨尔的领导下，这些剑圣又一次加入兽族部落，担任他们年轻领导人的贴身侍卫。虽然剑圣是潜行和欺诈的高手，但他们看重个人的荣誉胜过一切。",
            xiongnu:"【常规BOSS，请勿用DIY虐之！】匈奴是个历史悠久的北方民族集团，祖居在欧亚大陆的西伯利亚的寒温带森林和草原的交界地带，他们披发左衽。",
            new_liubei:"先主姓刘，讳备，字玄德，涿郡涿县人，汉景帝子中山靖王胜之后也。以仁德治天下。",
           new_guanyu:"字云长，本字长生，并州河东解州人。五虎上将之首，爵至汉寿亭侯，谥曰“壮缪侯”。被奉为“关圣帝君”，崇为“武圣”。",
            new_zhangfei:"字翼德，涿郡人，燕颔虎须，豹头环眼。有诗云：“长坂坡头杀气生，横枪立马眼圆睁。一声好似轰雷震，独退曹家百万兵”。",
            new_zhugeliang:"字孔明，号卧龙，琅琊阳都人，蜀汉丞相。在世时被封为武乡侯，谥曰忠武侯。著有《出师表》、《诫子书》等。怀不世之才，以空城戏司马，能观星象而通鬼神。",
            new_szhugeliang:"字孔明，号卧龙，琅琊阳都人，蜀汉丞相。在世时被封为武乡侯，谥曰忠武侯。著有《出师表》、《诫子书》等。怀不世之才，以空城戏司马，能观星象而通鬼神。",
            new_zhaoyun:"字子龙，常山真定人。身长八尺，姿颜雄伟。长坂坡单骑救阿斗，先主云：“子龙一身都是胆也。”",
            new_machao:"字孟起，扶风茂陵人。面如冠玉，目如流星，虎体猿臂，彪腹狼腰，声雄力猛。因衣着讲究，举止非凡，故人称“锦马超”。麾铁骑，捻金枪。",
            new_huangyueying:"荆州沔南白水人，沔阳名士黄承彦之女，诸葛亮之妻，诸葛瞻之母。容貌甚丑，而有奇才：上通天文，下察地理，韬略近于诸书无所不晓，诸葛亮在南阳闻其贤而迎娶。",
            new_sunquan:"吴大帝，字仲谋，吴郡富春县人。统领吴与蜀魏三足鼎立，制衡天下。",
            new_ganning:"字兴霸，巴郡临江人，祖籍荆州南阳郡。为人勇猛刚强，忠心耿耿，勇往无前。曾带兵百人于二更奇袭曹营，大挫其锐气。",
            new_lvmeng:"字子明，汝南富陂人。陈寿评曰：“吕蒙勇而有谋断，识军计，谲郝普，擒关羽，最其妙者。初虽轻果妄杀，终于克己，有国士之量，岂徒武将而已乎！”",
            new_huanggai:"字公覆，零陵郡泉陵县人。官至偏将军、武陵太守。以苦肉计骗曹孟德，亲往诈降，火烧战船，重创敌军。",
            new_zhouyu:"字公瑾，庐江舒县人，任东吴三军大都督，雄姿英发，人称“美周郎”。赤壁之战前，巧用反间计杀了精通水战的叛将蔡瑁、张允。",
            new_daqiao:"庐江皖县人，为乔公长女，孙策之妻，小乔之姊。与小乔并称为“江东二乔”，容貌国色流离。",
            new_luxun:"本名陆议，字伯言，吴郡吴县人。历任东吴大都督、丞相。吴大帝孙权兄孙策之婿，世代为江东大族。以谦逊之书麻痹关羽，夺取荆州，又有火烧连营大破蜀军。",
            new_sunshangxiang:"孙夫人，乃孙权之妹。刘备定荆州，孙权进妹与其结姻，重固盟好。孙夫人才捷刚猛，有诸兄之风。后人为其立庙，号曰“枭姬庙”。",
            new_caocao:"魏武帝曹操，字孟德，小名阿瞒、吉利，沛国谯人。精兵法，善诗歌，乃治世之能臣，乱世之奸雄也。",
            new_simayi:"晋宣帝，字仲达，河内温人。曾任职过曹魏的大都督，太尉，太傅。少有奇节，聪明多大略，博学洽闻，伏膺儒教，世之鬼才也。",
            new_xiahoudun:"字元让，沛国谯人。有拔矢啖睛之勇，性格勇猛刚烈。",
            new_zhangliao:"字文远，魏雁门马邑人。官至前将军、征东将军、晋阳侯。武功高强，又谋略过人，多次建立奇功，以800人突袭孙权十万大军，皆望风披靡。",
            new_xuchu:"字仲康，谯国谯县人。和典韦一同统率着曹操的亲卫队“虎卫军”。因为他十分勇猛，所以有“虎痴”的绰号。曾有裸衣斗马超之举。",
            new_guojia:"字奉孝，颍川阳翟人，官至军师祭酒。惜天妒英才，英年早逝。有诗云：“良计环环不遗策，每临制变满座惊”。",
            new_zhenji:"中山无极人，别称甄洛或甄宓，庙号文昭甄皇后。魏文帝曹丕的正室。懂诗文，有倾国倾城之貌，《洛神赋》即是曹植为她所作。",
            new_huatuo:"字元化，一名旉，沛国谯人，“建安三神医”之一。集平生之所得著《青囊经》，现已失传。",
            new_lvbu:"字奉先，五原郡九原县人。三国第一猛将，曾独力战刘关张三人，其武力世之无双。时人语曰：“人中有吕布，马中有赤兔。”",
            new_diaochan:"中国古代四大美女之一，有闭月羞花之貌。司徒王允之义女，由王允授意施行连环计，离间董卓、吕布，借布手除卓。后貂蝉成为吕布的妾。",
        },
        perfectPair:{
		new_xiahoudun:['new_houyuan','new_xiahouyuan'],
		new_zhenji:['new_caopi'],
		new_caocao:['xuzhu','new_xuchu','new_dianwei'],
		new_huangzhong:['weiyan','new_weiyan'],
		new_zhugeliang:['huangyueying','new_huangyueying'],
		new_liubei:['guanyu','zhangfei','new_guanyu','new_zhangfei','ganfuren'],
		new_zhaoyun:['liushan','new_liushan'],
		new_daqiao:['xiaoqiao','new_xiaoqiao'],
		new_zhouyu:['new_huanggai','new_xiaoqiao','xiaoqiao','new_huanggai'],
		new_sunquan:['new_zhoutai','zhoutai'],
		new_lvbu:['new_diaochan','diaochan'],
		new_machao:['madai','mayunlu'],
		new_zhangliao:['zangba']
	},
        translate:{
            new_xiaolongnv:'小龙女',
            new_yangguo:'杨过',
            news_huanggai:"★神黄盖",
            new_menghuo:"★孟获",
            new_pangde:"★庞德",
            new_wangyun:"★王允",
            qibing:"骑兵",
            dunpaibing:"盾牌兵",
            futoubing:"斧头兵",
            new_szhugeliang:"★妖诸葛亮",
            new_zhangchunhua:"★张春华",
            katelinna:"卡特琳娜",
            huangjin:"黄巾首领",
            new_lukang:"★陆抗",
            new_guanping:"★关平",
            new_guanyinping:"★关银屏",
            new_wangyi:"★王异",
            new_daqiaoxiaoqiao:"★大乔小乔",
            pichengnvjing:"凯特琳",
            tengjiabing:"藤甲兵",
            new_szhaoyun:"★神赵云",
            new_mateng:"★马腾",
            new_taishici:"★太史慈",
            new_dianwei:"★典韦",
            new_zhangjiao:"★张角",
            new_yuanshu:"★袁术",
            new_gongsunzan:"★公孙瓒",
            new_zhurong:"★祝融",
            new_wutugu:"★兀突骨",
            new_yuanshao:"★袁绍",
            new_sunce:"★孙策",
            new_sunjian:"★孙坚",
            new_lusu:"★鲁肃",
            new_huangzhong:"★黄忠",
            new_xiahouyuan:"★夏侯渊",
            new_xiaoqiao:"★小乔",
            new_weiyan:"★魏延",
            new_xuhuang:"★徐晃",
            new_zhoutai:"★周泰",
            new_zuoci:"★左慈",
            new_sluxun:"★神陆逊",
            new_sunxiu:"★孙休",
            new_zhangxingcai:"★张星彩",
            new_dongzhuo:"★董卓",
            new_jiangwei:"★姜维",
            new_liushan:"★刘禅",
            new_zhanghe:"★张郃",
            new_dengai:"★邓艾",
            new_sunce:"★孙策",
            zhangzhao:"★张昭",
            new_caiwenji:"★蔡文姬",
            new_lingtong:"★凌统",
            shenjianshou:"神箭手",
            new_caoren:"★曹仁",
            new_caopi:"★曹丕",
            xhdxhy:"夏侯惇夏侯渊",
            jifengjianhao:"亚索",
            fangzhuzhiren:"锐雯",
            shangjinlieren:"厄运小姐",
            debangzongguan:"赵信",
            duoluotianshi:"莫甘娜",
            hanbingsheshou:"艾希",
            liuguanzhang:"桃园三英",
            dl:"貂蝉吕布",
            new_caocao:"★曹操",
            new_simayi:"★司马懿",
            new_xiahoudun:"★夏侯惇",
            new_zhangliao:"★张辽",
            new_xuchu:"★许褚",
            new_guojia:"★郭嘉",

            new_zhenji:"★甄姬",
            new_liubei:"★刘备",
            new_guanyu:"★关羽",
            new_zhangfei:"★张飞",
            new_zhugeliang:"★诸葛亮",
            new_zhaoyun:"★赵云",
            new_machao:"★马超",
            new_huangyueying:"★黄月英",
            new_sunquan:"★孙权",
            new_ganning:"★甘宁",
            new_lvmeng:"★吕蒙",
            new_huanggai:"★黄盖",
            new_zhouyu:"★周瑜",
            new_daqiao:"★大乔",
            new_luxun:"★陆逊",
            new_sunshangxiang:"★孙尚香",
            new_huatuo:"★华佗",
            new_lvbu:"★吕布",
            new_diaochan:"★貂蝉",
            jiansheng:"剑圣",
            emolieshou:"恶魔猎手",
            dema:"盖伦",
            wujijiansheng:"易",
            manzuzhiwang:"泰达米尔",
            xunjiechihou:"提莫",
            xiongnu:"匈奴",
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
     new_arxhz:{
    			audio:2,
    			trigger:{player:['damageBefore']},
         priority:-100,
         filter:function(event,player){
         return (event.source!=undefined)||event.num>=player.hp;
         },
         check:function (event,player){
                return ai.get.attitude(player,event.source)<=0;
            },   			
    			content:function(){
          'step 0'
        player.line(trigger.source,'fire');
        game.delay(3.5);
        trigger.source.damage(trigger.source.hp);
        trigger.source.update();
          'step 1'
         if(!trigger.source.isAlive()){
         trigger.finish();
         trigger.untrigger();    
         player.recover();         
        }        
       else{
trigger.source.recover(trigger.source.maxHp-trigger.source.hp);
    }}},
     new_tianxiang:{
    			audio:['tianxiang',2],
    			trigger:{player:'damageBefore'},
    			direct:true,
    			filter:function(event,player){
    				return player.countCards('h',{suit:'heart'})>0&&event.num>0;
    			},
    			content:function(){
    				"step 0"
    				player.chooseCardTarget({
    					filterCard:function(card,player){
    						return get.suit(card)=='heart'&&lib.filter.cardDiscardable(card,player);
    					},
    					filterTarget:function(card,player,target){
    						return player!=target;
    					},
    					ai1:function(card){
    						return 10-get.value(card);
    					},
    					ai2:function(target){
    						var att=get.attitude(_status.event.player,target);
    						var trigger=_status.event.getTrigger();
    						var da=0;
    						if(_status.event.player.hp==1){
    							da=10;
    						}
    						if(trigger.num>1){
    							if(target.maxHp>5&&target.hp>1) return -att/10+da;
    							return -att+da;
    						}
    						var eff=get.damageEffect(target,trigger.source,target,trigger.nature);
    						if(att==0) return 0.1+da;
    						if(eff>=0&&trigger.num==1){
    							return att+da;
    						}
    						if(target.hp==target.maxHp) return -att+da;
    						if(target.hp==1){
    							if(target.maxHp<=4&&!target.hasSkillTag('maixie')){
    								if(target.maxHp<=3){
    									return -att+da;
    								}
    								return -att/2+da;
    							}
    							return da;
    						}
    						if(target.hp==target.maxHp-1){
    							if(target.hp>2||target.hasSkillTag('maixie')) return att/5+da;
    							if(att>0) return 0.02+da;
    							return 0.05+da;
    						}
    						return att/2+da;
    					},
    					prompt:get.prompt('tianxiang')
    				});
    				"step 1"
    				if(result.bool){
    					player.logSkill(event.name,result.targets);
    					trigger.untrigger();
    					trigger.player=result.targets[0];                                     trigger.player.addSkill('tianxiang2');                       
    					player.discard(result.cards[0]);
             game.delay();
             player.draw();
    				}

    				else{
    					event.finish();
    				}
    				"step 2"
    				trigger.trigger('damageBefore');
    			},
    			ai:{
    				effect:{
    					target:function(card,player,target){
    						if(player.hasSkillTag('jueqing')) return;
    						if(get.tag(card,'damage')&&target.countCards('h')>1) return 0.7;
    					}
    				},
    				threaten:function(player,target){
    					if(target.countCards('h')==0) return 2;
    				}
    			}
    		},
     	new_hongyan:{
    			mod:{
    				suit:function(card,suit){
    					if(suit=='spade'||suit=='diamond') return 'heart';
    				}
    			}
    		},
     new_tanlan:{
			trigger:{global:'dieBegin'},
			unique:true,
      forced:true,
     audio:3,
     filter:function(event,player){
				return event.player.hasSkill('buxiang1');
			},
			content:function(){    
     "step 0"    
      player.recover();
      player.draw(3);
     "step 1"
      if(!player.hasSkill('new_lianhua')){      
      player.addSkill('new_lianhua');
      game.log(player,'刷新了技能','【莲华】');      
      player.update();
      }          
      }},
      new_buxiang:{
     audio:3,
			trigger:{player:'phaseBegin'},
			unique:true,
			content:function(){
				"step 0"
				event.players=get.players(player);
				"step 1"
				if(event.players.length){
					var current=event.players.shift();
					if(current.isEnemyOf(player)){
						player.line(current,'white');
						current.addSkill('buxiang1');
					}
					event.redo();
				}
			},
		},
     buxiang1:{           
                trigger:{
                    player:"phaseAfter",
                },
                forced:true,
                mark:true,
                popup:false,
                unique:true,
                content:function (){                      
                player.removeSkill('buxiang1');
            },
                marktext:"刃",
                intro:{
                    content:"该角色手牌上限-1，直到回合结束",
                },
      mod:{
                    maxHandcard:function (player,num){
            return num-1;
        },
         },
          },
     new_lianhua:{
			audio:5,
			enable:'phaseUse',			
     selectTarget:[1,3],
			filterTarget:function(card,player,target){
				if(player==target) return false;
				return get.distance(player,target,'attack')<=2;
			},
     unique:true,
			content:function(){     			
				"step 0"     
     player.removeSkill('new_lianhua');
     player.update();       
      if(!target.hasSkill('buxiang1')){
       target.addSkill('buxiang1');
       }
        "step 1"
       player.line(target,'fire');            
				target.damage('poison');           
			},			
			ai:{
				order:15,
				result:{
					player:function(player,target){
				    if(target.hp>2) return 0;
           if(target.hp==2) return 1;	
						if(target.hp<2) return 3;						
						return 0.1;
					},
					target:function(player,target){
						if(!player.getEquip(1)){
             if(target.hp>2) return 0;
							if(player.hp<2) return 0.5;
							if(player.hp==2&&target.hp>=2) return 0.1;
							if(target.hp>player.hp) return 0;
             if(target.hp==2) return 1;
             if(target.hp<2) return 3;
						}
						return ai.get.damageEffect(target,player);
					}
				}
			},
			threaten:1.6
		},
     new_bianchi:{
      audio:2,
      trigger:{
        player:"phaseBegin",
    },
    forced:true,
    content:function(){
    "step 0" 
    game.delay();
    player.loseHp(1);
    "step 1"
    player.draw(2+player.maxHp-player.hp);
    },
    mod:{
                cardUsable:function (card,player,num){
                if(card.name=='sha') return num+1;
          },              
        },
     ai:{
                    noe:true,                    
                    effect:{
                        player:function (card,player){
if(player.countCards('h','sha')>1&&card.name=='zhuge') return [1,3];
                  },                  
               },          
				threaten:function(player,target){
         if(target.hp==1) return 2.1;
         if(target.maxHp-target.hp==1) return 1.7;
					if(target.maxHp-target.hp==2) return 1.8;
					if(target.maxHp-target.hp==3) return 2;
         if(target.maxHp-target.hp==4) return 2.2;
         if(target.maxHp-target.hp==5) return 2.4;
        if(target.maxHp-target.hp==6) return 2.6;
        if(target.maxHp-target.hp==7) return 2.8;
        if(target.maxHp-target.hp==8) return 3;
        if(target.maxHp-target.hp>8) return 3.3;         
					return 1.6;
				},
			}
		},



     new_zaiqi:{
			audio:2,
			trigger:{player:'phaseDrawBefore'},
			filter:function(event,player){
				return player.hp<player.maxHp;
			},
			check:function(event,player){
				if(player.maxHp-player.hp<2){
					return false;
				}
				else if(player.maxHp-player.hp==2){
					return player.countCards('h')>=2;
				}
				return true;
			},
			content:function(){
				"step 0"
				trigger.untrigger();
				trigger.finish();
				event.cards=get.cards(player.maxHp-player.hp+Math.ceil(player.num('e')/2));
				player.showCards(event.cards);
				"step 1"
				var num=0;
				for(var i=0;i<event.cards.length;i++){
					if(get.suit(event.cards[i])=='heart'){
						num++;
						ui.discardPile.appendChild(event.cards[i]);
						event.cards.splice(i--,1);
					}
				}
				if(num){
					player.recover(num);
				}
				"step 2"
				if(event.cards.length){
					player.gain(event.cards);
					player.$gain2(event.cards);
					game.delay();
				}
			},
			ai:{
                    noe:true,                    
                    effect:{
                        target:function (card,player,target,current){
                        if(get.type(card)=='equip') return [1,3];
                  },
                  
               },          
				threaten:function(player,target){
					if(target.hp==1) return 2;
					if(target.hp==2) return 1.5;         
					return 1;
				},
			}
		},
     new_lianji:{
			audio:1,
			enable:'phaseUse',
			usable:1,
			filterTarget:function(card,player,target){
				if(player==target) return false;
				return target.num('h')>0;
			},
			selectTarget:2,
			multitarget:true,
			multiline:true,
			filter:function(event,player){
				return player.num('h')>0;
			},
			prepare:function(cards,player,targets){
				player.$throw(cards);
				player.line(targets);
			},
			discard:false,
			filterCard:true,
			check:function(card){
				return 6-ai.get.value(card);
			},
			content:function(){
				"step 0"
				if(!player.storage.lianji){
					player.storage.lianji=[];
				}
				if(targets[0].num('h')&&targets[1].num('h')){
					targets[0].chooseToCompare(targets[1]);
					player.storage.lianji.add(targets[0]);
					player.storage.lianji.add(targets[1]);
				}
				else{
					event.finish();
				}
				"step 1"
				if(result.bool){
					targets[0].gain(cards);
					targets[0].$gain2(cards);
					targets[1].damage(targets[0]);
				}
				else{
					targets[1].gain(cards);
        	targets[1].$gain2(cards);
					targets[0].damage(targets[1]);
				}
				if(!player.skills.contains('yinmo')){
					event.finish();
				}
				"step 2"
				for(var i=0;i<game.players.length;i++){
					if(game.players[i]!=player&&!player.storage.lianji.contains(game.players[i])){
						event.finish();
						return;
					}}			
			},
			ai:{      
				expose:0.3,
				threaten:1.8,
				order:9,
       playernowuxie:true,
				result:{
					target:-1
				}
			},
		},
     new_jiedao:{
			audio:1,
			filter:function(event,player){
				return player.countCards('he',{suit:'club'})>0;
			},
			enable:'chooseToUse',
			filterCard:function(card){
				return get.suit(card)=='club';
			},
			position:'he',
			viewAs:{name:'jiedao'},
			prompt:'将一张♣牌当借刀杀人使用',
			check:function(card){return 6-get.value(card)},
			ai:{
      order:8,     
				threaten:1.3
			}
		},
     new_mengjin:{
			audio:2,
			trigger:{player:'shaMiss'},
			priority:-1,
			filter:function(event){
				return event.target.countCards('he')>0;
			},
			check:function(event,player){
				return get.attitude(player,event.target)<0;
			},
			content:function(){			player.gainPlayerCard('he',trigger.target,Math.max(1,player.maxHp-player.hp),true);
			},
    mod:{
                    targetEnabled:function (card,player,target,now){
                    if(card.name=='lebu') return false;
                },
                },
     ai:{
                    noe:true,
                    threaten:1.3,
                    effect:{
                        target:function (card,player){


                        if(card.name=='guashi') return -Infinity;
                    },
                    },
                },
            },
     new_shenji:{
			audio:2,
			trigger:{global:'judge'},
			direct:true,
			filter:function(event,player){
				return player.num('he')>0;
			},
			content:function(){
				"step 0"
				player.chooseCard(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
				get.translation(trigger.player.judging[0])+'，是否发动【神机】？','he').ai=function(card){
					var trigger=_status.event.parent._trigger;
					var player=_status.event.player;
					var result=trigger.judge(card)-trigger.judge(trigger.player.judging[0]);
					var attitude=ai.get.attitude(player,trigger.player);
					if(attitude==0||result==0) return 0;
					if(attitude>0){
						return result;
					}
					else{
						return -result;
					}
				};
				"step 1"
				if(result.bool){
					player.respond(result.cards,'highlight');
				}
				else{
					event.finish();
				}
				"step 2"
				if(result.bool){
					player.logSkill('new_shenji');
					player.$gain2(trigger.player.judging[0]);
					player.gain(trigger.player.judging[0]);
					trigger.player.judging[0]=result.cards[0];
					trigger.position.appendChild(result.cards[0]);
					game.log(trigger.player,'的判定牌改为',result.cards[0]);
				}
				"step 3"
				game.delay(2);
			},
			ai:{
				tag:{
					rejudge:1
				},
				threaten:1.5
			}
		},
     new_miaosuan:{
                audio:2,               
                trigger:{
                    global:"useCard",
                },
                forced:true,
                filter:function (event,player){
        if(event.player==player)
        return false;
        return (get.type(event.card)=='trick'&&event.cards[0]&&event.cards[0]==event.card);
    },
      content:function (){
    player.draw();
  
  }
    },
    new_jueqing:{
     group:['new_jueqing2','new_jueqing3'],
			trigger:{source:'damageBefore'},
			forced:true,
			audio:2,
			priority:16,
			check:function(){return false;},
			content:function(){
				trigger.untrigger();
				trigger.finish();
				var ex=0;
				if(trigger.card&&trigger.card.name=='sha'){
					if(player.hasSkill('jiu')) ex++;
					if(player.hasSkill('luoyi2')) ex++;
					if(player.hasSkill('reluoyi2')) ex++;
				}
				trigger.player.loseHp(trigger.num+ex);
			},
			ai:{
				jueqing:true
			}
		},
		new_shangshi:{
			audio:2,
			trigger:{player:['loseEnd','changeHp']},
			forced:true,
			filter:function(event,player){
				return (player.countCards('h')<Math.min(3,player.maxHp-player.hp));
			},
			content:function(){
				player.draw(Math.min(3,player.maxHp-player.hp)-player.countCards('h'));
			},
			ai:{                  
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
    new_jueqing2:{   
  global:["new_jueqing4"],
    trigger:{
        global:"dying",
    },
    audio:2, 
    forced:true,
    priority:Infinity,
    filter:function (event,player){
        return player==_status.currentPhase;
    },
    content:function (){
      },
},
     new_jueqing3:{
			locked:true,
			global:'new_jueqing4'
		},
		new_jueqing4:{
			mod:{
				cardSavable:function(card,player){
					if(!_status.currentPhase) return;
					if(_status.currentPhase.hasSkill('wansha')&&_status.currentPhase!=player){
						if(card.name=='tao'&&_status.event.dying!=player) return false;
					}
				}
			}
		},
      new_shenshi:{
      audio:2,
      trigger:{
        player:"phaseEnd",
    },
    forced:true,
    content:function(){
    "step 0" 
  game.delay();
  player.chooseToDiscard(true,player.num('h'),'h');
    "step 1"
   player.draw(Math.min(4,player.maxHp));
   player.update();
   },   
ai:{
                    threaten:1.4,
                    order:15,
                    result:{
                        player:1,
                    },
                    effect:{
                        player:function (card,player){                
                if(card.name=='tao'||get.type(card)!='basic') return [1,3];
            },
                    },
                },
            },
   new_longyin:{
      trigger:{
        global:"shaBegin",
    },
    direct:true,
    filter:function (event,player){
        return event.target==event.targets[0]&&player.countCards('he')>0&&event.card.name=='sha'&&
        _status.currentPhase==event.player&&event.parent.parent.parent.name=='phaseUse';
    },
    content:function (){
        'step 0'
        var go=false;
        if(get.attitude(player,trigger.player)>0){
            if(get.color(trigger.card)=='red'){
                go=true;
            }
            else if(!trigger.player.hasSkill('paoxiao')&&
                !trigger.player.hasSkill('tanlin3')&&
                !trigger.player.hasSkill('zhaxiang2')&&
                !trigger.player.hasSkill('fengnu')&&
                !trigger.player.getEquip('zhuge')){
                var nh=trigger.player.countCards('h');
                if(player==trigger.player){
                    go=(player.countCards('h','sha')>0);
                }
                else if(nh>=4){
                    go=true;
                }
                else if(player.countCards('h','sha')){
                    if(nh==3){
                        go=Math.random()<0.8;
                    }
                    else if(nh==2){
                        go=Math.random()<0.5;
                    }
                }
                else if(nh>=3){ if(nh==3){
                        go=Math.random()<0.5;
                    }
                    else if(nh==2){
                        go=Math.random()<0.2;
                    }
                }
            }
        }
        var next=player.chooseToDiscard(get.prompt('longyin'),'he');
        next.logSkill=['longyin',trigger.player];
        next.set('ai',function(card){
            if(_status.event.go){
                return 7-get.value(card);
            }
            return 0;
        });
        next.set('go',go);
        'step 1'
        if(result.bool){
            trigger.player.getStat().card.sha--;
            if(get.color(trigger.card)=='red'){
                player.draw(1+Math.floor(Math.random()*2));
            }
            // player.logSkill('longyin',trigger.player);
        }
    },
    ai:{
        expose:0.2,
    },
},
    new_wuji:{
			skillAnimation:true,
			audio:3,
			trigger:{player:'phaseEnd'},
			forced:true,
			filter:function(event,player){
				return player.getStat('damage')>=3&&!player.storage.new_wuji;
			},
			content:function(){
				"step 0"				
				player.gainMaxHp();
				"step 1"
				player.recover();				
				player.storage.new_wuji=true;
				var card=get.cardPile('qinglong','field');
				if(card){
					player.gain(card,'gain2','log');
				}

	  	},  
     ai:{
				threaten:1.5
			}
		},
		new_zhenlie:{
			audio:3,
			filter:function(event,player){
				return event.player!=player&&event.card&&(event.card.name=='sha'||get.type(event.card)=='trick');
			},
			logTarget:'player',
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
			priority:10,
			trigger:{target:'useCardToBefore'},
			content:function(){
				"step 0"
				player.loseHp();
				"step 1"
				trigger.untrigger();
				trigger.finish();
				"step 2"
				if(trigger.player.countCards('he')){				player.gainPlayerCard(trigger.player,'he',true);
				}
			},
			ai:{
				expose:0.3
			}
		},
         		new_xingwu:{
			audio:2,
			group:['new_xingwu_color','new_xingwu_color2'],
			subSkill:{
				color:{
					trigger:{player:'phaseBegin'},
					forced:true,

					popup:false,
					silent:true,


					content:function(){
						player.storage.new_xingwu_color=['black','red'];
					}
				},
				color2:{
					trigger:{player:'useCard'},
					forced:true,
					popup:false,
					silent:true,
					filter:function(event,player){
						return Array.isArray(player.storage.new_xingwu_color)&&_status.currentPhase==player;
					},
					content:function(){
						player.storage.new_xingwu_color.remove(get.color(trigger.card));
					}
				}
			},
			trigger:{player:'phaseDiscardBegin'},
			direct:true,
			filter:function(event,player){
				if(!player.storage.new_xingwu_color) return false;
				var length=player.storage.new_xingwu_color.length;
				if(length==0) return false;
				var hs=player.getCards('h');
				if(hs.length==0) return false;
				if(length==2) return true;
				var color=player.storage.new_xingwu_color[0];
				for(var i=0;i<hs.length;i++){
					if(get.color(hs[i])==color) return true;
				}
				return false;
			},
			intro:{
				content:'cards'
			},
			init:function(player){
				player.storage.new_xingwu=[];
			},
			content:function(){
				'step 0'
				player.chooseCard(get.prompt('new_xingwu'),function(card){
					return _status.event.player.storage.new_xingwu_color.contains(get.color(card));
				}).set('ai',function(card){
					var player=_status.event.player;
					if(player.storage.new_xingwu.length==2){
						if(!game.hasPlayer(function(current){
							return (current!=player&&
								get.damageEffect(current,player,player)>0&&
								get.attitude(player,current)<0)
						})) return 0;
					}
					return 7-get.value(card);
				});
				'step 1'
				if(result.bool){
					player.logSkill('new_xingwu');
					if(player.storage.new_xingwu.length<2){
						player.$give(result.cards,player);
					}
					player.lose(result.cards,ui.special);
					player.storage.new_xingwu=player.storage.new_xingwu.concat(result.cards);
					player.markSkill('new_xingwu');
					player.syncStorage('new_xingwu');
				}
				else{
					event.finish();
				}
				'step 2'

				if(player.storage.new_xingwu.length==3){
					player.$throw(player.storage.new_xingwu);
					while(player.storage.new_xingwu.length){
						ui.discardPile.appendChild(player.storage.new_xingwu.shift());
					}
					player.unmarkSkill('new_xingwu');
					player.chooseTarget(function(card,player,target){
						return target!=player;
					},'对一名其他角色造成3点伤害并弃置其所有牌；若其武将牌正面朝上则将武将牌其翻面').set('ai',function(target){
						var player=_status.event.player;


						if(get.attitude(player,target)>0) return -1;
						return get.damageEffect(target,player,player)+target.countCards('e')/2;
					});
				}
				else{
					event.finish();
				}
				'step 3'
				if(result.bool){       
					var target=result.targets[0];
					target.damage(3);        
         if(!target.isTurnedOver()){
         target.turnOver();}           
					event.target=target;        
					player.line(target,'green');         
				}
				else{
					event.finish();
				}
				'step 4'     
				if(event.target&&event.target.isAlive()){
					var es=event.target.getCards('he');
					if(es.length){
						event.target.discard(es);
					}
				}
			},
			ai:{
				threaten:1.7
			}
		},
         chuchang:{ 
                        audio:3, 
                        trigger:{
                            player:["phaseBegin","phaseEnd"],
                        },
                        forced:true,
                        content:function (){}},
         baotou:{ 
                        audio:3, 
                        trigger:{
                            source:["damageBegin"],
                        },
                        forced:true,
                        filter:function (event,player){ 
                     if(Math.random()>0.25)
                     return false;
                       return event.card&&(event.card.name=='sha'&&event.cards[0]&&event.cards[0]==event.card)&&
				event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
              },
              content:function (){                		
					trigger.num+=2;				  
      }
       },   
        heping:{
         mod:{
         attackFrom:function (from,to,num){
            return num-2; 
        },
         selectTarget:function(card,player,range){
					if(card.name=='sha'&&range[1]!=-1) range[1]+=1;
				},      
       },
       },
         new_juji:{
                audio:3,
                enable:"phaseUse",
                usable:1,               
                filterTarget:function (event,player,target){
                if(target.hp>1) return false;
                if(target==player) return false;
                return true;
               },
                content:function (){
                game.delay(3.5);
                player.line(target,'fire');
                target.damage(2);
           },
      ai:{
                    order:5.5,
                    result:{
                        player:function (player,target){
                        if(ai.get.attitude(player,target)<=0) return 0;
                    
    if(ai.get.attitude(player,target)<0) return 1;
                    },
                        target:-2,
                    },
                    threaten:1.6,
                },
            },
     xionghan:{
     audio:1,
			trigger:{source:'damageBegin'},
			filter:function(event){
				return event.card&&(event.card.name=='sha'||event.card.name=='juedou')&&
				event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
			},
			forced:true,
			content:function(){
				trigger.num++;
			}
		},
     new_juejing:{group:["new_juejing1","new_juejing2"]},
     new_juejing1:{
			mod:{
				maxHandcard:function(player,num){
					return 3+num;
				}
			},
			audio:1,
			trigger:{player:'phaseDrawBegin'},
			priority:-5,
			filter:function(event,player){
				return player.hp<player.maxHp;
			},
			forced:true,
			content:function(){
				trigger.num=2+player.maxHp-player.hp;
			},
    ai:{
    threaten:1.4,
    },
		}, 
     new_juejing2:{
			trigger:{global:['damageEnd','recoverEnd']},
			forced:true,
      audio:1,
			filter:function(event,player){
      if(event.source==player&&event.player==player)
      return false;
				return _status.currentPhase!=player;
			},
			content:function(){
				player.draw();
			}
		},
     new_huangtian:{
			unique:true,
			global:'new_huangtian2',
			zhuSkill:true,
		},
		new_huangtian2:{
			audio:2,
			enable:'phaseUse',
			discard:false,
			line:true,
			prepare:'give',
			filter:function(event,player){
				if(player.group!='qun') return false;
				if(player.countCards('h')+player.countCards('h')==0) return 0;
				return game.hasPlayer(function(target){
					return target!=player&&target.hasZhuSkill('new_huangtian',player);
				});
			},
			filterCard:function(card){
				return (get.suit(card)=='spade'||card.name=='shandian')

			},
			filterTarget:function(card,player,target){
				return target!=player&&target.hasZhuSkill('new_huangtian',player);
			},
			usable:1,
			forceaudio:true,
			content:function(){
				target.gain(cards,player);
			},
			ai:{
				expose:0.3,
				order:10,
				result:{
					target:5
				}
			}
	},
     	new_xiongyi:{
			skillAnimation:true,
			unique:true,
			enable:'phaseUse',
			audio:2,
			mark:true,
			filter:function(event,player){
				return !player.storage.new_xiongyi;
			},
			init:function(player){
				player.storage.new_xiongyi=false;
			},
			filterTarget:function(card,player,target){
				if(get.mode()=='guozhan'){
					if(player==target) return true;
					if(player.identity=='ye') return false;
					if(player.identity=='unknown'){
						if(_status.yeidentity.contains(player._group)){
							return false;
						}
						else if(get.zhu(player)||get.population(player._group)+1<=get.population()/2){
							return player._group==target.identity;
						}
						else{
							return false;
						}
					}
					return player.identity==target.identity;
				}
				else{
					return true;
				}
			},
			multitarget:true,
			multiline:true,
			selectTarget:function(){
				if(get.mode()=='guozhan') return -1;
				return [1,3];
			},
			content:function(){
				"step 0"      
				player.storage.new_xiongyi=true;
				player.awakenSkill('new_xiongyi');
       player.gainMaxHp();      
       player.addSkill('mengjin');
				game.asyncDraw(targets,3);
				"step 1"
				if(player.isDamaged()){
					if(get.mode()=='guozhan'){
						if(player.isMinor()){
							player.recover();
						}
					}
					else if(targets.length<=2){
						player.recover();
					}
				}
			},
			intro:{
				content:'limited'
			},
			ai:{
				order:10,
				result:{
					target:function(player){
						var num=player.countCards('h');
						if(player.hp==1) return 1;
						if(player.hp==2&&num<=2) return 1.5;
						if(player.hp==3&&num<=1) return 1.5;
						if(game.phaseNumber<game.players.length*2) return 0;
						if(player.hasUnknown()) return 0;
						return 1;
					},
				}
			}
		},  
     new_tianyi:{
			audio:3,
			enable:'phaseUse',
			usable:1,
			filterTarget:function(card,player,target){
				return player!=target&&target.countCards('h')>0;
			},
			filter:function(event,player){
				return player.countCards('h')>0;
			},
			content:function(){
				"step 0"
				player.chooseToCompare(target);
				"step 1"
				if(result.bool){
					player.addTempSkill('new_tianyi2','phaseAfter');
				}
				else{
				player.draw();	player.addTempSkill('new_tianyi3','phaseAfter');
				}
			},
			ai:{
				order:function(name,player){
					var cards=player.getCards('h');
					if(player.countCards('h','sha')==0){
						return 1;
					}
					for(var i=0;i<cards.length;i++){
						if(cards[i].name!='sha'&&cards[i].number>11&&ai.get.value(cards[i])<7){
							return 9;
						}

					}
					return ai.get.order({name:'sha'})-1;
				},
				result:{
					player:function(player){
						if(player.countCards('h','sha')>0) return 0.6;
						var num=player.countCards('h');
						if(num>player.hp) return 0;
						if(num==1) return -2;
						if(num==2) return -1;
						return -0.7;
					},
					target:function(player,target){
						var num=target.countCards('h');
						if(num==1) return -1;
						if(num==2) return -0.7;
						return -0.5
					},
				},
				threaten:1.3
			}
		},
		new_tianyi2:{
			mod:{
				targetInRange:function(card,player,target,now){
					if(card.name=='sha') return true;
				},
				selectTarget:function(card,player,range){
					if(card.name=='sha'&&range[1]!=-1) range[1]+=2;
				},
				cardUsable:function(card,player){

					if(card.name=='sha') return Infinity;
				}
			},
		},
		new_tianyi3:{
			mod:{
				cardEnabled:function(card){if(card.name=='sha') return false}
			}
		},
      xinqiangxix:{
			audio:2,
			enable:'phaseUse',
			usable:1,
			filterCard:function(card){
				return get.subtype(card)=='equip1';
			},
			selectCard:[0,1],
			filterTarget:function(card,player,target){
				if(player==target) return false;
				return get.distance(player,target,'attack')<=1;
			},
			content:function(){
				"step 0"
				if(player.hp>1&&cards.length==0){
					player.loseHp();
				}
				"step 1"
       player.discardPlayerCard(true,target,'e');
				target.damage();

			},
			check:function(card){  
				return 10-ai.get.value(card);
			},
			position:'he',
			ai:{
				order:15,
				result:{
					player:function(player,target){
						if(player.getEquip(1)) return 0;
						if(player.hp>=target.hp) return -0.9;
						if(player.hp==2) return -10;
           if(player.hp==1) return 10;
						return -2;
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
			threaten:1.4
		},
     new_liegong:{group:["new_liegong1","new_liegong2"]},
     new_liegong1:{
			audio:2,
			trigger:{player:'shaBegin'},
			check:function(event,player){
				return ai.get.attitude(player,event.target)<=0;
			},
			logTarget:'target',
			filter:function(event,player){
				var length=event.target.countCards('h');
				return (length>=player.hp||event.target.hp<=2);
			},
			content:function(){
				trigger.directHit=true;
			},
			mod:{				
       attackFrom:function(from,to){
					if(from.num('h')<to.num('h')) 
         return -Infinity;
				}
			}
		},
     new_liegong2:{
			audio:2,
			trigger:{source:'damageBegin'},    
     priority:-99,       
			filter:function(event,player){
     if(event.card.name!='sha')
     return false;
     return event.player.num('e')>=player.num('e');
     },
     check:function (event,player){
     return ai.get.attitude(player,event.target)<=0;
            },
     content:function(){
     trigger.num=trigger.num*2;
     },
     ai:{
     threaten:1.6,
     effect:{               
     target:function(card,player,target){
      if(get.type(card)=='equip') return 0.5;
       },
     player:function(card,player,target){
      if(get.type(card)=='equip') return 0.5;
       }
       }
       },
},
      xin_yongsi:{
			group:['xin_yongsi1','xin_yongsi2'],
			ai:{
				threaten:2.2
			}
		},
		xin_yongsi1:{
			audio:2,
			trigger:{player:'phaseDrawBegin'},
			forced:true,
			content:function(){
				var list=['wei','shu','wu','qun'];
				var num=game.countPlayer(function(current){
					if(list.contains(current.group)){
						list.remove(current.group);
						return true;
					}
				});
				trigger.num+=num;
			}
		},
		xin_yongsi2:{
			audio:2,
			trigger:{player:'phaseDiscardBegin'},
			forced:true,
			content:function(){
				var list=['wei','shu','wu','qun'];
				var num=game.countPlayer(function(current){
					if(list.contains(current.group)){
						list.remove(current.group);
						return true;
					}
				});
				player.chooseToDiscard(num,'h',true);
			}
		},
      leidian:{
			audio:2,
			enable:'phaseUse',
			viewAs:{name:'shandian'},
			filterCard:function(card,player){
			return get.suit(card)=='spade';
			
			},
			selectCard:true,
			complexCard:true,
      prompt:'将一张♠花色的牌当【闪电】置于武将牌上',
			check:function(card){


      if(card.name=='shandian') return 0;
        
				return 8-ai.get.value(card);
			},
			ai:{
				basic:{
					order:3
				}
			}
		},

      leishen:{
      audio:1,
			trigger:{player:'damageBefore'},
			forced:true,
			unique:true,
			filter:function(event){
				return event.nature=='thunder';
			},
			content:function(){
				trigger.untrigger();
				trigger.finish();
				player.recover(trigger.num);
          player.draw(trigger.num-(player.maxHp-player.hp));
			},
			ai:{
				effect:{
					target:function(card){
						if(get.tag(card,'thunderDamage')){
							return [0,2];
						}
					}
				}
			},
		},
      xinguidaox:{
			audio:true,
			trigger:{global:'judge'},
			direct:true,
			filter:function(event,player){
				return player.num('he')>0;
			},
			content:function(){
				"step 0"
				player.chooseCard(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
				get.translation(trigger.player.judging[0])+'，是否发动【鬼道】？','he').ai=function(card){
					var trigger=_status.event.parent._trigger;
					var player=_status.event.player;
					var result=trigger.judge(card)-trigger.judge(trigger.player.judging[0]);
					var attitude=ai.get.attitude(player,trigger.player);
					if(attitude==0||result==0) return 0;
					if(attitude>0){
						return result;
					}
					else{
						return -result;
					}
				};
				"step 1"
				if(result.bool){
					player.respond(result.cards,'highlight');
				}
				else{
					event.finish();
				}
				"step 2"
				if(result.bool){
					player.logSkill('guidao');
					player.$gain2(trigger.player.judging[0]);
					player.gain(trigger.player.judging[0]);
					trigger.player.judging[0]=result.cards[0];
					trigger.position.appendChild(result.cards[0]);
					game.log(trigger.player,'的判定牌改为',result.cards[0]);
				}
				"step 3"
				game.delay(2);
			},
			ai:{
				tag:{
					rejudge:1
				},
				threaten:1.5
			}
		},
      mubing:{						
						audio:1,
						trigger:{global:'loseAfter'},
						forced:true,
						filter:function(event,player){
							if(event.player==player) return false;
							
if(_status.currentPhase==player) return false;
							for(var i=0;i<event.cards.length;i++){
								if(event.cards[i].original=='e'&&get.position(event.cards[i])=='d') 
									return !player.get('e',get.subtype(event.cards[i])[5])&&(get.type(event.cards[i])=='equip');
							}
							return false;
						},
						content:function(){
             game.delay(); 

							for(var i=0;i<trigger.cards.length;i++){
								if(trigger.cards[i].original=='e'&&!player.get('e',get.subtype(trigger.cards[i])[5])&&(get.type(trigger.cards[i])=='equip'))
              
									player.gain(trigger.cards[i],'gain');
							}
							
						},
					},
tengjiax:{
group:["tengjia1","tengjia2"]},
      manbing:{
			audio:2,
			enable:'phaseUse',
			viewAs:{name:'nanman'},
			filterCard:function(card,player){
			return get.type(card)=='equip';
				
			},
			selectCard:true,
			complexCard:true,

      prompt:'将一张装备牌当【南蛮入侵】使用',

			check:function(card){
      if(card.name=='nanman') return 0;
        if(card.name=='wanjian') return 0;
				return 15-ai.get.value(card);
			},
			ai:{
				basic:{
					order:9
				}
			}
		},
                xin_luanji:{group:['xin_luanji1','xin_luanji2']},
                xin_luanji1:{  
                        trigger:{
                            source:["damageEnd"],
                        },
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                                return (event.card.name=='wanjian'&&event.cards[0]&&event.cards[0]!=event.card);
              },
              content:function (){   
                 		"step 0"
				trigger.player.judge(function(card){
					if(get.zhu(_status.event.player,'shouyue')){
						if(get.suit(card)!='spade') return 2;
					}
					else{
						if(get.color(card)=='red') return 2;
					}
					return -0.5;
				});
				"step 1"
				if(result.bool){
					player.draw();
				}  
       else{
        trigger.player.draw();
       }
 
      }
       },   
     xin_luanji2:{
			audio:4,
			enable:'phaseUse',
			viewAs:{name:'wanjian'},
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
			selectCard:2,
			complexCard:true,
			check:function(card){
      if(card.name=='nanman') return 0;
        if(card.name=='wanjian') return 0;
				return 9-ai.get.value(card);
			},
			ai:{
				basic:{
					order:10
				}
			}
		},
      new_shensu:{
     audio:2,
			trigger:{player:'shaAfter'},
			forced:true,
      priority:-10,
      filter:function (event,player){
        return (event.card.name=='sha'&&event.cards[0]&&event.cards[0]==event.card);
    },
			content:function(){
      game.delay(1.5);
 player.useCard({name:'sha'},trigger.target,false);   
 },
    ai:{
     threaten:1.3,
     }  
    },
      xinhaoshi:{
			audio:2,
			trigger:{player:'phaseDrawBegin'},
			threaten:1.7,
			check:function(event,player){
				if(6-(player.countCards('h')+Math.floor(player.countCards('e')/2))>=4) return true;
				var min=[];
				var temp=player.next.countCards('h');
				var players=game.filterPlayer();
				for(var i=0;i<players.length;i++){
					if(players[i]!=player&&players[i].countCards('h')<temp){
						temp=players[i].countCards('h');
					}
				}
				for(var i=0;i<players.length;i++){
					if(players[i]!=player&&players[i].countCards('h')==temp){
						min.push(players[i]);
					}
				}
				for(var i=0;i<min.length;i++){
					if(ai.get.attitude(player,min[i])>0) return true;
				}
				return false;
			},
			content:function(){
				trigger.num+=2+Math.floor(player.num('e')/2);
				player.addSkill('xinhaoshi2');
			},
			ai:{
				threaten:2,
					noh:true,
         effect:{
                        target:function (card,player,target,current){
                        if(get.type(card)=='equip') return [1,3];
                    },
                    },
					skillTagFilter:function(player,tag){
						if(tag=='noh'){
							if(player.countCards('h')!=3) return false;
						}
					}
			}
		},
		xinhaoshi2:{
			trigger:{player:'phaseDrawEnd'},
			forced:true,
			popup:false,
			audio:false,
			content:function(){
				"step 0"
				player.removeSkill('xinhaoshi2');
				if(player.countCards('h')<=6){
					event.finish();
					return;
				}
				player.chooseCardTarget({

					selectCard:Math.floor(player.countCards('h')/2),
					filterTarget:function(card,player,target){
						return target.isFewestHandcard();
					},
					forced:true,
					ai2:function(target){
						return ai.get.attitude(_status.event.player,target);
					}
				});
				"step 1"
				if(result.targets&&result.targets[0]){
					result.targets[0].gain(result.cards,player);
					player.$give(result.cards.length,result.targets[0]);
				}
			}
		},
		
		xinyinghun:{
			audio:2,
			trigger:{player:'phaseBefore'},
			filter:function(event,player){
				return player.hp<player.maxHp;
			},
			direct:true,
     priority:10,
			content:function(){
				"step 0"
				player.chooseTarget(get.prompt('xinyinghun'),function(card,player,target){
					return player!=target;
				}).set('ai',function(target){
					var player=_status.event.player;
					if(player.maxHp-player.hp==1&&target.countCards('he')==0){
						return 0;
					}
					if(ai.get.attitude(_status.event.player,target)>0){
						return 10+ai.get.attitude(_status.event.player,target);
					}
					if(player.maxHp-player.hp==1&&player.num('e')==0){
						return -1;
					}
      
	    	return 1;
				});
				"step 1"
				if(result.bool){
					event.num=player.maxHp-player.hp+Math.ceil(player.num('e')/2);
        
if(player.countCards('e')>=player.hp){
						event.num=player.maxHp;
					}
					player.logSkill('xinyinghun',result.targets);
					event.target=result.targets[0];
					if(event.num==1){
						event.directcontrol=true;
					}
					else{
						var str1='摸'+get.cnNumber(event.num,true)+'弃一';
						var str2='摸一弃'+get.cnNumber(event.num,true);
						player.chooseControl(str1,str2,function(event,player){
							return _status.event.choice;
						}).set('choice',ai.get.attitude(player,event.target)>0?str1:str2);
						event.str=str1;
					}
				}
				else{
					event.finish();
				}
				"step 2"
				if(event.directcontrol||result.control==event.str){
					event.target.draw(event.num);
					event.target.chooseToDiscard(true,'he');
				}
				else{
					event.target.draw();
					event.target.chooseToDiscard(event.num,true,'he');
				}
			},
			ai:{
				threaten:function(player,target){
					if(target.hp==1||target.countCards('e')>=target.hp) return 2;
					if(target.hp==target.maxHp) return 0.5;
					if(target.hp==2) return 1.5;
					return 0.5;
				},
				maixie:true,
				effect:{
					target:function(card,player,target){
						if(target.maxHp<=3) return;
						if(get.tag(card,'damage')){
           if(!target.hasFriend()) return;
							if(target.hp==target.maxHp) return [0,1];
						}
						if(get.tag(card,'recover')&&player.hp>=player.maxHp-1) return [0,0];
					}
				}
			}
		},
       xinkuanggux:{
			audio:2,
			trigger:{source:'damageEnd'},
			forced:true,
			content:function(){
				player.recover(trigger.num);
       player.draw(trigger.num-(player.maxHp-player.hp));
			},
     
mod:{
    cardUsable:function (card,player,num){
      if(card.name=='sha') return num+1;
     },
    globalFrom:function(from,to,distance){
       			return distance-1;
				},
      },
		},
            xinduanliangx:{
			     audio:2,
            priority:-10,
            trigger:{global:'drawBegin'},
            filter:function(event,player){
				if(event.player.isFriendOf(player)){
					return false;
				}
                return event.num>1&&event.player!=player;
            },
			prompt:function(event,player){
				return '是否对'+get.translation(event.player)+'发动【断粮】？'
			},
          check:function (event,player){              
                return ai.get.attitude(player,event.player)<1;
            },
            content:function(){
            "step 0"
        if(trigger.num>2){
          player.draw();
          }
            "step 1"
				player.line(trigger.player,'green');
                trigger.num--;
         
            },
            ai:{
                expose:0.3,
                threaten:1.5
            }
        },
            xinbuqu:{
                audio:2,
                trigger:{
                    player:"dieBefore",
                },
                forced:true,
                filter:function (event,player){return player.maxHp>0&&player.hp<=0},
                content:function (){
                "step 0"
                event.card=get.cards()[0];
                if(player.storage.xinbuqu==undefined) player.storage.xinbuqu=[];
                player.storage.xinbuqu.push(event.card);
                player.syncStorage('xinbuqu');
                player.showCards(player.storage.xinbuqu,'不屈')
                player.markSkill('xinbuqu');
                "step 1"
                for(var i=0;i<player.storage.xinbuqu.length;i++){
                    if(get.suit(event.card)=='club'&&get.number(event.card)>8) return;
                }
                trigger.untrigger();
                trigger.finish();
                if(player.hp<=0){
                    player.hp=1;
                    player.update();
                }
            },
                mod:{
                    maxHandcard:function (player,num){
                    if(player.storage.xinbuqu&&player.storage.xinbuqu.length) return num-player.hp+player.storage.xinbuqu.length;
                },
                },
                marktext:"创",
                intro:{
                    content:"cards",
                    onunmark:function (storage,player){
                    if(storage&&storage.length){
                        player.$throw(storage);
                        for(var i=0;i<storage.length;i++){
                            ui.discardPile.appendChild(storage[i]);
                        }
                        delete player.storage.xinbuqu;
                    }
                },
                },
            },
            xinfenji:{
                audio:2,
                trigger:{
                    global:"discardAfter",
                },
                filter:function (event){
                if(_status.currentPhase!=event.player){
                    for(var i=0;i<event.cards.length;i++){
                        if(event.cards[i].original=='he') return true;
                    }
                }
                return false;
            },
                check:function (event,player){
                return ai.get.attitude(player,event.player)>2;
            },
                content:function (){
                "step 0"
                player.line(trigger.player,'green');
                player.damage();
                "step 1"
                trigger.player.draw(2);
            },
            },      
            dunjia:{
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                priority:-Infinity,
                filter:function (event){
                    return event.num>1;
                },
                content:function (){
          trigger.num=1;
         },
            },
            qimen:{
                audio:3,
                trigger:{
player:['damageBegin','loseHpBegin']
                },
                forced:true,
                priority:20,              
                content:function (){
               player.sex=['male','female'].randomGet();
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
                    player.line(player,'green');
                    player.addSkill(link);                    
                    player.mark(link,{
                        name:get.translation(link),
                        content:lib.translate[link+'_info']
                    });
                    game.log(player,'获得技能','【'+get.translation(link)+'】');        
                },
                ai:{
                    threaten:1.8,
                },
            },
            sqianxun:{
                audio:4,
                trigger:{
                    target:["lebuBegin","tiesuoBegin"],                 
                },
                frequent:true,
                content:function (){
                game.delay(0.5);
                trigger.untrigger();
                trigger.finish();
              },
            },
            slianying:{
                group:["slianying1","slianying2","slianying3"],
            },
            "slianying1":{
               audio:2,
                trigger:{
                    source:"damageAfter",
                },          
                filter:function (event,player){
                 return !event.player.isLinked();               
               },
                check:function (event,player){
                return ai.get.attitude(player,event.player)<=0;
            },            
              priority:-200,
              content:function (){                                 
                "step 0"
                game.delay();                   
                trigger.player.link();                              
                },
            },
            "slianying3":{
                trigger:{
                    source:"damageBegin",
                },
                priority:8,
                forced:true,
                content:function (){                                 
                "step 0"                                 
                trigger.nature='fire';                              
                },
            },
            "slianying2":{
                audio:3,
                trigger:{
                    player:"loseEnd",
                },
                frequent:true,
                filter:function (event,player){
                if(player.num('h')>=3) return false;
                for(var i=0;i<event.cards.length;i++){
                    if(event.cards[i].original=='h') return true;
                }
                return false;
            },
                content:function (){                
                player.draw(3-player.num('h'));
        },
                ai:{
                    threaten:2,
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
            xinzhaofu:{              
                audio:1,
                unique:true,
                trigger:{
                    global:"dieAfter",
                },
                zhuSkill:true,
                forced:true,
                filter:function (event,player){
                if(event.source==player) return false;
                if(!player.hasZhuSkill('xinzhaofu')) 
                return false;
            
                if(event.source==undefined)
                return false;
                if(event.source.group!='wu') return false;
                return true;
            },
                content:function (){
                player.gainMaxHp();
            },
            },
            xinxingxue:{
                audio:2,
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                content:function (){
                'step 0'
            player.chooseTarget([1,3],get.prompt('xinxingxue')).set('ai',function(target){
                    var att=ai.get.attitude(_status.event.player,target);
                    if(target.num('he')) return att;
                    return att/10;
                });
                'step 1'
                if(result.bool){
                    player.logSkill('xinxingxue',result.targets);
                    event.targets=result.targets;
                    event.targets.sort(lib.sort.seat);
                }
                else{
                    event.finish();
                }
                'step 2'
                if(event.targets.length){
                    var target=event.targets.shift();
                    target.draw(2);
                    event.current=target;
                }
                else{
                    event.finish();
                }
                'step 3'
                if(event.current&&event.current.num('he')){
                    event.current.chooseCard('选择两张牌置于牌堆顶','he',2,true);
                }
                else{
                    event.goto(2);
                }
                'step 4'
                if(result&&result.cards){

                    event.card=result.cards[0];
                    event.current.lose(result.cards,ui.special);
                    game.broadcastAll(function(player){
                        var cardx=ui.create.card();
                        cardx.classList.add('infohidden');
                        cardx.classList.add('infoflip');
                        player.$throw(cardx,1000,'nobroadcast');
                    },event.current);
                }
                else{
                    event.card=null;
                }
                'step 5'
                if(event.current==game.me) game.delay(0.5);
                'step 6'
                if(event.card){
                    event.card.fix();
                    ui.cardPile.insertBefore(event.card,ui.cardPile.firstChild);
                }
                event.goto(2);
            },
            },
            xinyanzhu:{
                audio:2,
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
                return target.num('he')>0&&target!=player;
            },
                content:function (){        
        target.chooseToDiscard(true,1+Math.floor(Math.random()*2),'he');
            },
                ai:{
                    order:7,
                    result:{
                        target:function (player,target){
                        var ne=target.num('he');
                        if(!ne) return -2;
                        if(ne>=1) return -ne;
                        return 0;
                    },
                    },
                },
            },
            xinshenxian:{
                audio:4,
                trigger:{
                    global:"discardAfter",
                },
                filter:function (event,player){
                if(event.player==player||_status.currentPhase==player) return false;            
           if(player.hasSkill('xinshenxian2')) return false;    
                for(var i=0;i<event.cards.length;i++){
                    if(get.type(event.cards[i])=='basic'){
                        return true;
                    }
                }
                return false;
            },
                frequent:true,
                content:function (){
                "step 0" 
                game.delay();
                "step 1"       
        var num=0;
        for(var i=0;i<trigger.cards.length;i++){
                    if(get.type(trigger.cards[i])=='basic')
      num+=1;
       }
                player.draw(num);    
     player.addTempSkill('xinshenxian2','phaseAfter');
            },
                ai:{
                    threaten:2.2,
                },
            },
            "xinshenxian2":{
            },
            fengzhan:{
                skillAnimation:true,
                animationStr:"狂风绝息斩！！",
                audio:3,
                trigger:{
                    source:"damageBegin",
                },
                unique:true,
                filter:function (event,player){
      if(player.storage.jifengx<3)
      return false;
     return event.card&&(event.card.name=='sha'||event.card.name=='juedou');
            },
                check:function (event,player){
                return ai.get.attitude(player,event.target)<=0;
            },
               priority:15,
                content:function (){
        "step 0"
        player.draw(player.storage.jifengx-3);
         "step 1"
        game.delay();
        player.line(trigger.player,'thunder');
                trigger.num++;
         "step 2"
       if(!trigger.player.isTurnedOver()){;
       trigger.player.turnOver();
       }
         "step 3"
       player.storage.jifengx-=  player.storage.jifengx;
player.update();
            },
                ai:{
                    threaten:1.5,
                },
            },
            fengqiang:{
                audio:2,
                trigger:{
                    player:"damageBefore",
                },
                forced:true,
                unique:true,
                filter:function (event,player){
                if(event.card.name=='sha'||event.card.name=='juedou')
                return false;
                return player.storage.jifengx>=2;
            },
                content:function (){ 
               "step 0"
               player.storage.jifengx-=2;
               "step 1"
                trigger.untrigger();
                trigger.finish();
                player.update();
            },
            },
            jifengx:{
                trigger:{
                    player:["phaseBegin","phaseEnd"],
                },
                forced:true,
                mark:true,
                audio:4,
                filter:function (event,player){
                return player.storage.jifengx<5;
            },
                init:function (player){
                player.storage.jifengx=0;
                game.addVideo('storage',player,['jifengx',player.storage.jifengx]);
            },
                content:function (){
                player.storage.jifengx+=1;
                game.addVideo('storage',player,['jifengx',player.storage.jifengx]);
            },
                marktext:"风",
                intro:{
                    content:"mark",
                },
            },
            xinjiuchi:{
                audio:2,
                enable:"chooseToUse",
                filterCard:function (card){
                return get.color(card)=='black';
            },
                viewAs:{
                    name:"jiu",
                },
                viewAsFilter:function (player){
                if(!player.num('he',{color:'black'})) return false;
            },
                prompt:"将一张♠或♣牌当酒使用",
                check:function (card){
                if(_status.event.type=='dying') return 1;
                return 6-ai.get.value(card);
            },           
                ai:{
                    skillTagFilter:function (player){
                    return player.num('he',{color:'black'})>0&&player.hp<=0;
                },
                    threaten:1.4,
                    save:true,
                    basic:{
                        useful:function (card,i){
                        if(_status.event.player.hp>1){
                            if(i==0) return 5;
                            return 1;
                        }
                        if(i==0) return 7.3;
                        return 3;
                    },
                        value:function (card,player){
                        if(player.hp>1){
                            if(i==0) return 5;
                            return 1;
                        }
                        if(i==0) return 7.3;
                        return 3;
                    },
                    },
                    order:function (){
                    return ai.get.order({name:'sha'})+0.2;
                },
                    result:{
                        target:function (player,target){
                        if(target&&target.isDying()) return 2;
                        if(lib.config.mode=='stone'&&!player.isMin()){
                            if(player.getActCount()+1>=player.actcount) return 0;
                        }
                        var shas=player.getCards('h','sha');
                        if(shas.length>1&&player.getCardUsable('sha')>1){
                            return 0;
                        }
                        var card;
                        if(shas.length){
                            for(var i=0;i<shas.length;i++){
                                if(lib.filter.filterCard(shas[i],target)){
                                    card=shas[i];break;
                                }
                            }
                        }
                        else if(player.hasSha()&&player.needsToDiscard()){
                            if(player.countCards('h','hufu')!=1){
                                card={name:'sha'};
                            }
                        }
                        if(card){
                            if(game.hasPlayer(function(current){
                                return (ai.get.attitude(target,current)<0&&
                                    target.canUse(card,current,true,true)&&
                                    !current.getEquip('baiyin')&&
                                    ai.get.effect(current,card,target)>0);
                            })){
                                return 1;
                            }
                        }
                        return 0;
                    },
                    },
                    tag:{
                        save:1,
                    },
                },
            },            
            xinbenghuai:{
                audio:2,
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                check:function (){
                return false;
            },
                filter:function (event,player){
                return !player.isLowestHp();
            },
                content:function (){        
                    player.loseHp();
            },
                ai:{
                    threaten:1,
                },
            },
            new_baonue:{
                unique:true,
                global:"new_baonue2",
                zhuSkill:true,
            },
            "new_baonue2":{
                audio:2,
                forceaudio:true,
                trigger:{
                    source:"damageEnd",
                },
                filter:function (event,player){
                if(player.group!='qun') return false;
                return game.hasPlayer(function(target){
                    return player!=target&&target.hp<target.maxHp&&target.hasZhuSkill('new_baonue',player);
                });
            },
                direct:true,
                content:function (){
                'step 0'
                var list=game.filterPlayer(function(target){
                    return player!=target&&target.hp<target.maxHp&&target.hasZhuSkill('new_baonue',player);
                });
                event.list=list;
                'step 1'
                if(event.list.length){
                    var current=event.list.shift();
                    event.current=current;
                    player.chooseBool(get.prompt('new_baonue',current)).set('choice',ai.get.attitude(player,current)>0);
                }
                else{
                    event.finish();
                }
                'step 2'
                if(result.bool){
                    player.logSkill('new_baonue2',event.current);
                    player.judge(function(card){
                        if(get.color(card)=='black') return 4;
                        return 0;
                    });
                }
                else{
                    event.goto(1);
                }
                'step 3'
                if(result.color=='black'){
                    event.current.recover();
                }
                event.goto(1);
            },
            },
            xintiaoxin:{
                audio:4,
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
                return target.canUse({name:'sha'},player)&&target.num('he');
            },
                content:function (){
                "step 0"
                target.chooseToUse({name:'sha'},player,-1,'挑衅：对'+get.translation(player)+'使用一张杀，或令其弃置你的一张牌').set('targetRequired',true);
                "step 1"
                if(result.bool==false&&target.num('he')>0){
                    player.discardPlayerCard(target,Math.max(1,target.num('e')),'he',true);
                }
                else{
                    event.finish();
                }
            },
                ai:{
                    order:4,
                    expose:0.2,
                    result:{
                        target:-1.5,
                        player:function (player,target){
                        if(target.num('h')==0) return 0;
                        if(target.num('h')==1) return 0.5;
                        if(target.num('h')<=2&&target.num('e')>1) return 0.7;
                        if(player.hp<=2) return -2;
                        if(player.num('h','shan')==0) return -1;
                        return -0.5;
                    },
                    },
                    threaten:1.2,
                },
            },
            xinxiangle:{
                audio:2,
                trigger:{
                    target:"useCardToBefore",
                },
                forced:true,
                filter:function (event,player){
                return event.card.name=='sha'||event.card.name=='juedou'||event.card.name=='shunshou'||event.card.name=='guohe';
            },
                content:function (){
                "step 0"
                var eff=ai.get.effect(player,trigger.card,trigger.player,trigger.player);
                trigger.player.chooseToDiscard(function(card){
                    return get.type(card)=='basic';
                }).set('ai',function(card){
                    if(_status.event.eff>0){
                        return 10-ai.get.value(card);
                    }
                    return 0;
                }).set('eff',eff);
                "step 1"
                if(result.bool==false){
                    trigger.finish();
                    trigger.untrigger();
                }
            },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                        if(card.name=='sha'||card.name=='juedou'||card.name=='shunshou'||card.name=='guohe'){
                            if(_status.event.name=='xinxiangle') return;
                            var bs=player.get('h',{type:'basic'});
                            if(bs.length<2) return 0;

                            if(player.hasSkill('jiu')||player.hasSkill('tianxianjiu')) return;
                            if(bs.length<=3&&player.num('h','sha')<=1){
                                for(var i=0;i<bs.length;i++){
                                    if(bs[i].name!='sha'&&ai.get.value(bs[i])<7){
                                        return [1,0,1,-0.5];
                                    }
                                }
                                return 0;
                            }
                            return [1,0,1,-0.5];
                        }
                    },
                    },
                },
            },                       
            xintuntian:{
                audio:3,
                trigger:{
                    player:["loseEnd","damageEnd"],
                },
                frequent:true,
                filter:function (event,player){        
       if(player==_status.currentPhase) return false;    
                for(var i=0;i<event.cards.length;i++){
                    if(event.cards[i].original&&event.cards[i].original!='j') return true;
                }
                return false;
            },
                content:function (){
                "step 0"
                player.judge(function(card){
                    if(get.suit(card)=='heart') return -1;
                    return 1;
                },ui.special).nogain=function(card){
                    return get.suit(card)!='heart';
                };
                "step 1"
                if(result.bool){
                    result.card.goto(ui.special);
                    player.storage.xintuntian.push(result.card);
                    result.node.moveDelete(player);
                    game.broadcast(function(cardid,player){
                        var node=lib.cardOL[cardid];
                        if(node){
                            node.moveDelete(player);
                        }
                    },result.node.cardid,player);
                    game.addVideo('gain2',player,get.cardsInfo([result.node]));
                    player.markSkill('xintuntian');
                    game.addVideo('storage',player,['xintuntian',get.cardsInfo(player.storage.xintuntian),'cards']);
                }
       else{
       player.gain(result.card);
       player.$gain2(result.card);
      }
            },
                init:function (player){
                player.storage.xintuntian=[];
            },
                marktext:"田",
                intro:{
                    content:"cards",
                },
                group:"xintuntian_dist",
                subSkill:{
                    dist:{
                        mod:{
                            globalFrom:function (from,to,distance){
                            if(from.storage.xintuntian) return distance-from.storage.xintuntian.length;
                        },
                        },
                    },
                },
                locked:false,
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                        if(!target.hasFriend()&&!player.hasUnknown()) return;
                        if(_status.currentPhase==target) return;
                        if(get.tag(card,'loseCard')&&target.num('he')){
                            if(target.hasSkill('ziliang')) return 0.7;
                            return [0.5,Math.max(2,target.num('h'))];
                        }
                        if(target.isUnderControl(true,player)){
                            if((get.tag(card,'respondSha')&&target.num('h','sha'))||
                                (get.tag(card,'respondShan')&&target.num('h','shan'))){
                                if(target.hasSkill('ziliang')) return 0.7;
                                return [0.5,1];
                            }
                        }
                        else if(get.tag(card,'respondSha')||get.tag(card,'respondShan')){
                            if(ai.get.attitude(player,target)>0&&card.name=='juedou') return;
                            if(get.tag(card,'damage')&&target.hasSkillTag('maixie')) return;
                            if(target.num('h')==0) return 2;
                            if(target.hasSkill('ziliang')) return 0.7;
                            if(get.mode()=='guozhan') return 0.5;
                            return [0.5,Math.max(target.num('h')/4,target.num('h','sha')+target.num('h','shan'))];
                        }
                    },
                    },
                    threaten:function (player,target){
                    if(target.num('h')==0) return 2;
                    return 0.5;
                },
                },
            },
            xinzaoxian:{
                skillAnimation:true,
                audio:2,
                unique:true,
                trigger:{
                    player:"useCard",
                },
                forced:true,
                filter:function (event,player){
       if(_status.currentPhase!=player)
       return false;
                if(player.storage.xintuntian) return player.storage.xintuntian.length>=3&&!player.storage.xinzaoxian;
            },
                derivation:"xinjixi",
                content:function (){
                player.loseMaxHp();
                player.addSkill('xinjixi');
                player.storage.xinzaoxian=true;
                player.awakenSkill('xinzaoxian');
            },
            },
            xinjixi:{
                audio:2,
                enable:"phaseUse",
                filter:function (event,player){
                return player.storage.xintuntian.length>0;
            },
                chooseButton:{
                    dialog:function (event,player){
                    return ui.create.dialog('急袭',player.storage.xintuntian,'hidden');
                },
                    backup:function (links,player){
                    return {
                        filterCard:function(){return false},
                        selectCard:-1,
                        viewAs:{name:'shunshou'},
                        cards:links,
                        onuse:function(result,player){
                            result.cards=lib.skill[result.skill].cards;
                            var card=result.cards[0];
                            player.storage.xintuntian.remove(card);
                            player.syncStorage('xintuntian');
                            if(!player.storage.xintuntian.length){
                                player.unmarkSkill('xintuntian');
                            }
                            else{
                                player.markSkill('xintuntian');
                            }
                            player.logSkill('xinjixi',result.targets);
                        }
                    }
                },
                    prompt:function (links,player){
                    return '选择急袭的目标';
                },
                },
                ai:{
                    order:10,
                    result:{
                        player:function (player){
                        return player.storage.xintuntian.length-1;
                    },
                    },
                },
            },
            xinjiang:{
                audio:2,
                trigger:{
                    player:["shaBefore","juedouBefore"],
                    target:["shaBefore","juedouBefore"],
                },                
                forced:true,
                content:function (){
                "step 0"
             if(trigger.card.name=='juedou'){
               player.draw();
             }             
                  "step 1"
 if(get.color(trigger.card)=='red'&&trigger.card.name=='sha'){
                player.draw();
                }
if(trigger.target!=player&&get.color(trigger.card)=='black'&&trigger.card.name=='sha'){
               trigger.target.chooseToDiscard(true,'he');
             }
            },
                ai:{
                    effect:{
                        target:function (card,player,target){
if(card.name=='sha'&&get.color(card)=='black') return [0,0.6];                        if(card.name=='sha'&&get.color(card)=='red') return [1,0.6];
                    },
                        player:function (card,player,target){
if(card.name=='sha'&&get.color(card)=='black') return [0,0];                        if(card.name=='sha'&&get.color(card)=='red') return [1,1];
                    },
                    },
                },
            },           
            new_zhijian:{
            audio:1,
                enable:"phaseUse",
                filter:function (event,player){
                return player.num('h',{type:'equip'})>0;
            },
                filterCard:function (card){
                return get.type(card)=='equip';
            },
                check:function (card){
                var player=_status.currentPhase;
                if(player.num('he',{subtype:get.subtype(card)})>1){
                    return 11-ai.get.equipValue(card);
                }
                return 6-ai.get.value(card);
            },
                filterTarget:function (card,player,target){
                if(target.isMin()) return false;
                return player!=target&&!target.get('e',get.subtype(card)[5]);
            },
                content:function (){
                target.equip(cards[0]);
                player.draw(1+Math.floor(Math.random()*2));
            },
                discard:false,
                prepare:function (cards,player,targets){
                player.$give(cards,targets[0],false);
            },
                ai:{
                    basic:{
                        order:10,
                    },
                    result:{
                        target:3,
                    },
                    threaten:1.3,
                },
            },
            new_guzheng:{
			audio:1,
			unique:true,
			gainable:true,
			trigger:{global:'discardAfter'},
			filter:function(event,player){
				if(event.player!=player&&event.player.classList.contains('dead')==false&&
				event.cards&&event.cards.length&&event.getParent(2).name=='phaseDiscard'){
					for(var i=0;i<event.cards.length;i++){
						if(get.position(event.cards[i])=='d'){
							return true;
						}
					}
					return false;
				}
			},
			checkx:function(event,player){
				var du=false;
				var num=0;
				for(var i=0;i<event.cards.length;i++){
					if(get.position(event.cards[i])=='d'){
						num++;
						if(event.cards[i].name=='du'){
							du=true;
						}
					}
				}
				if(get.attitude(player,event.player)>0){
					if(du&&num<=3){
						return false;
					}
					return true;
				}
				if(du) return true;
				return num>2;
			},
			direct:true,
			content:function(){
				"step 0"
				event.cards=trigger.cards.slice(0);
				for(var i=0;i<event.cards.length;i++){
					if(get.position(event.cards[i])!='d'){
						event.cards.splice(i,1);i--;
					}
				}
				if(event.cards.length==0){
					event.finish();
					return;
				}
				var check=lib.skill.guzheng.checkx(trigger,player);
				player.chooseCardButton(event.cards,'固政：选择令'+get.translation(trigger.player)+'收回的牌').set('ai',function(button){
					if(_status.event.check){
						return 20-get.value(button.link);
					}
					return 0;
				}).set('check',check);
				"step 1"
				if(result.bool){
					game.delay(0.5);
					player.logSkill('new_guzheng',trigger.player);
					trigger.player.gain(result.links[0]);
					trigger.player.$gain2(result.links[0]);
					game.log(trigger.player,'收回了',result.links[0]);
					event.cards.remove(result.links[0]);
					if(event.cards.length){
						player.gain(event.cards);
						player.$gain2(event.cards);
						game.log(player,'收回了',event.cards);
					}
					game.delay();
				}
			},
                mod:{
                    maxHandcard:function(player,num){
            return num+1;          
        }
                },
                ai:{
                    threaten:1.3,
                    expose:0.2,
                },
            },
            new_beige:{
                audio:4,
                trigger:{global:'damageEnd'},
			filter:function(event,player){
				return (event.card&&event.card.name=='sha'&&event.source&&
					event.player.classList.contains('dead')==false&&player.countCards('he'));
			},
			direct:true,
			checkx:function(event,player){
				var att1=get.attitude(player,event.player);
				var att2=get.attitude(player,event.source);
				return att1>0&&att2<=0;
			},
			content:function(){
				"step 0"
				var next=player.chooseToDiscard('he',get.prompt('beige'));
				var check=lib.skill.beige.checkx(trigger,player);
				next.set('ai',function(card){
					if(_status.event.goon) return 8-get.value(card);
					return 0;
				});
				next.set('logSkill','new_beige');
				next.set('goon',check);
				"step 1"
				if(result.bool){
					trigger.player.judge();
				}
				else{
					event.finish();
				}
                "step 2"
                switch(get.suit(result.card)){
                    case 'heart':trigger.player.recover(trigger.num);break;
                    case 'diamond':trigger.player.draw(trigger.num*2);break;
                    case 'club':trigger.source.chooseToDiscard('he',trigger.num*2,true);break;
                    case 'spade':if(!trigger.source.isTurnedOver()){trigger.source.turnOver();}player.draw(trigger.num);break;
                }
            },
                ai:{
                    expose:0.3,
                },
            },
            xinduanchang:{
                audio:2, 
                forbid:["boss"],            
                trigger:{
                    player:"dieBegin",
                },
                forced:true,
                filter:function (event){
                return event.source&&event.source.isIn();
            },
                content:function (){
       trigger.source.loseMaxHp();
                trigger.source.clearSkills();
            },
                logTarget:"source",
                ai:{
                    threaten:function (player,target){
                    if(target.hp==1) return 0.2;
                    return 1.5;
                },
                    effect:{
                        target:function (card,player,target,current){
                        if(!target.hasFriend()) return;
                        if(target.hp<=1&&get.tag(card,'damage')) return [1,0,0,-2];
                    },
                    },
                },
            },
            xinxuanfeng:{
                audio:2,
                trigger:{
                    player:["loseEnd","phaseDiscardEnd"],
                },
                direct:true,
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
                    player.logSkill('xinxuanfeng',result.targets);        
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
                    threaten:1.4,
                    effect:{
                        target:function (card,player,target,current){
                        if(get.type(card)=='equip') return [1,3];
                    },
                    },
                    noe:true,
                },
            },
            xinxingshang:{
                audio:4,
                unique:true,
                gainable:true,
                forced:true,
                trigger:{
                    global:"dieEnd",
                },
                priority:5,
                filter:function (event){
                return event.playerCards&&event.playerCards.length>0
            },
                content:function (){
           'step 0'
                            var cards=[];
                            for(var i=0;i<ui.discardPile.childNodes.length;i++){
                                if(get.suit(ui.discardPile.childNodes[i])=='heart'){
                                    cards=cards.concat(ui.discardPile.childNodes[i]);
                                }
                            }
                            if(cards.length){
                                var card=cards.randomGet();
                                player.gain(card,'gain2');
                                game.log(player,'从弃牌堆获得了',card);
             }
                "step 1"
                player.gain(trigger.playerCards);
                player.$draw(trigger.playerCards);      
                game.delay();
                "step 2"
                for(var i=0;i<trigger.playerCards.length;i++){
                    trigger.cards.remove(trigger.playerCards[i]);
                }
                trigger.playerCards.length=0;
            },
            },
            xinfangzhu:{
                audio:2,
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                content:function (){      
           "step 0"    
      event.num=trigger.num;  
          "step 1"    
        player.chooseTarget(get.prompt('xinfangzhu'),function(card,player,target){
                    return player!=target
                }).ai=function(target){
                    var player=_status.event.player;
                    if(ai.get.attitude(_status.event.player,target)==0) return 0;
                    if(ai.get.attitude(_status.event.player,target)>0){
                        if(target.classList.contains('turnedover')) return 1000-target.num('h');
                        if(player.maxHp-player.hp<3) return -1;
                        return 100-target.num('h');
                    }
                    else{
                        if(target.classList.contains('turnedover')) return -1;
                        if(player.maxHp-player.hp>=3) return -1;
                        return 1+target.num('h');
                    }
                }
                "step 2"
                if(result.bool){
         game.delay();
                    player.logSkill('xinfangzhu',result.targets);
                    result.targets[0].draw(player.maxHp-player.hp);
                    result.targets[0].turnOver();
         }                       
        event.num--;
                if(event.num>0){
                    event.goto(1);
                }                
            },
                ai:{
                    maixie:true,
                    effect:{
                        target:function (card,player,target){
                        if(get.tag(card,'damage')){
                            if(player.hasSkill('jueqing')) return [1,-2];
                            if(target.hp<=1) return;
                            if(!target.hasFriend()) return;
                            var hastarget=false;
                            var turnfriend=false;
                            var players=game.filterPlayer();
                            for(var i=0;i<players.length;i++){
                                if(ai.get.attitude(target,players[i])<0&&!players[i].isTurnedOver()){
                                    hastarget=true;
                                }
                                if(ai.get.attitude(target,players[i])>0&&players[i].isTurnedOver()){
                                    hastarget=true;
                                    turnfriend=true;
                                }
                            }
                            if(ai.get.attitude(player,target)>0&&!hastarget) return;
                            if(turnfriend||target.hp==target.maxHp) return [0.5,1];
                            if(target.hp>1) return [1,0.5];
                        }
                    },
                    },
                },
            },
            xinsongwei:{
                unique:true,
                global:"xinsongwei2",
                zhuSkill:true,
            },
            "xinsongwei2":{
                audio:3,
                forceaudio:true,
                trigger:{
                    player:"judgeEnd",
                },
                filter:function (event,player){            
      if(player.group!='wei') return false;    
                if(get.suit(event.result.card)=='diamond') return false;
                return game.hasPlayer(function(target){
                    return player!=target&&target.hasZhuSkill('xinsongwei',player);
                });
            },
                direct:true,
                content:function (){
                'step 0'
                var list=game.filterPlayer(function(current){
                    return current!=player&&current.hasZhuSkill('xinsongwei',player);
                });
                event.list=list;
                'step 1'
                if(event.list.length){
                    var current=event.list.shift();
                    event.current=current;
                    player.chooseBool(get.prompt('xinsongwei',current)).set('choice',ai.get.attitude(player,current)>0);
                }
                else{
                    event.finish();
                }
                'step 2'
                if(result.bool){
                    player.logSkill('xinsongwei2',event.current);
                    event.current.draw();
                }
                event.goto(1);
            },
            },
            shenshe:{
                group:["qilin_skill","zhuge_skill"],
                mod:{
                    targetInRange:function (card,player,target,now){
                    if(card.name=='sha') return true;
        },
                },
            },
            xinjushou:{
                audio:2,
                trigger:{
                    player:"phaseEnd",
                },
                check:function (event,player){
                if(player.isTurnedOver()) return true;
          var num=game.players.length;      
                return num>=1;
            },
                content:function (){
                "step 0"
                player.turnOver();
                "step 1"
                var num=game.players.length;
                player.draw(2+num);                      
            },
                ai:{
                    threaten:1.5,
                    effect:{
                        target:function (card){
                        if(card.name=='guiyoujie') return [0,2];         
                    },
                    },
                },
            },         
            zhewu:{
                audio:3,
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                priority:120,
                filter:function (event,player){                        
    return event.card&&(event.card.name=='sha'||event.card.name=='juedou')&&
                event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
            },
                content:function (){    
    player.draw();
    },
                mod:{
                    cardUsable:function (card,player,num){
                    if(card.name=='sha') return num+2;
                },
                },
            },
            zhufeng:{
                skillAnimation:true,
                animationStr:"放逐之锋！斩杀！",
                audio:3,
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event,player){
    if(player.hasSkill('zhufeng2'))
    return false;                      
     if(Math.floor(event.player.maxHp/3)<event.player.hp)
     return false;
    return event.card&&(event.card.name=='sha')&&
                event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
            },
                check:function (event,player){              
                return ai.get.attitude(player,event.target)<1;
            },
                content:function (){
    trigger.num+=Math.floor(trigger.player.maxHp/3); 
    player.addTempSkill('zhufeng2','phaseEnd');   
    },
                ai:{
                    threaten:1.5,
                },
            },
            "zhufeng2":{
            },
            shangjin:{
                audio:3,
                trigger:{
                    player:"phaseDrawBegin",
                },
                forced:true,
                content:function (){    
      trigger.num++;
      },
                mod:{
                    maxHandcard:function (player,num){
            return num+1;
        },
                },
                ai:{
                    threaten:1.5,
                },
            },
            shuangdiao:{
                audio:3,
                trigger:{
                    source:"damageAfter",
                },
                direct:true,
                filter:function (event,player){    
       if(player.num('h')==0) return false;
                if(!event.card) return false;
                if(event.card.name!='sha') return false;
                return game.hasPlayer(function(current){
                    return current!=event.player&&get.distance(event.player,current)<=1;
                });
            },
                content:function (){
                "step 0"
                var damaged=trigger.player;
                player.chooseCardTarget({
                    filterCard:lib.filter.cardDiscardable,
                    filterTarget:function(card,player,target){
                        var damaged=_status.event.damaged;
                        return target!=player&&get.distance(damaged,target)<=1&&target!=damaged;
                    },
                    ai1:function(card){
                        return 9-ai.get.value(card);
                    },
                    ai2:function(target){
                        var player=_status.event.player;
                        return ai.get.damageEffect(target,player,player);
                    },
                    prompt:get.prompt('shuangdiao')
                }).set('damaged',damaged);
                "step 1"
                if(result.bool){
                    player.logSkill('shuangdiao',result.targets);    
         player.discard(result.cards);                            result.targets[0].damage('fire',2);
                }
            },
            },
            liuxing:{
                mod:{
                    attackFrom:function (from,to,num){
                    if(to.hp>=2) return num-1;
                },
                    globalTo:function (from,to,current){
                    if(to.hp<=2) return current+1;
                },
                },
                ai:{
                    threaten:1,
                },
            },
            kuangzhan:{
                trigger:{
                    player:"damageEnd",
                    source:"damageEnd",
                },
                forced:true,
                mark:true,
                audio:3,
                unique:true,
                filter:function (event){
                return event.num>0;
            },
                init:function (player){
                player.storage.kuangzhan=1;
                game.addVideo('storage',player,['kuangzhan',player.storage.kuangzhan]);
            },
                content:function (){
                player.storage.kuangzhan+=trigger.num;
                game.addVideo('storage',player,['kuangzhan',player.storage.kuangzhan]);
            },
                marktext:"战",
                intro:{
                    content:"mark",
                },
            },
            wuwei:{
                audio:4,
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                filter:function (event,player){                    
           return player.storage.kuangzhan>=3;
            },
                content:function (){                  
             player.recover();
             player.draw(2);
             player.storage.kuangzhan-=3;
             },
                ai:{
                    threaten:1.4,
                },
            },
            zhuanzhu:{
                audio:3,
                trigger:{
                    source:"damageBegin",
                },
                priority:-9,
                filter:function (event){
           return event.card&&(event.card.name=='sha')&&
                event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
            },
                check:function (event,player){              
                return ai.get.attitude(player,event.target)<1;
            },
                content:function (){          
 trigger.num=trigger.num*1+Math.floor(Math.random()*(2));
             },
                mod:{
                    maxHandcard:function (player,num){
            return num+2;          
        },
                    attackFrom:function (from,to,num){
            return num-2; 
        },
                },
            },
            jiqu:{
                audio:2,
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                priority:6,
                content:function (){ 
                player.recover(trigger.num);                player.gainPlayerCard(trigger.player);                                           
            },
            },
            jingu:{
                audio:2,
                trigger:{
                    source:"damageAfter",
                },
                filter:function (event){         
           return         event.card&&(event.nature=='fire'||event.nature=='thunder')&&event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
            },
                check:function (event,player){              
                return ai.get.attitude(player,event.target)<1;
            },
                content:function (){
trigger.player.addSkill('jingu2');
            },
           ai:{
                    threaten:1.5,
                },
            },
            "jingu2":{
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                mark:true,
                popup:false,
                unique:true,
                content:function (){  
                "step 0"
               player.skip('phaseUse');      
                "step 1"              
                player.removeSkill('jingu2');
            },
                marktext:"锢",
                intro:{
                    content:"该角色跳过下一回合的出牌阶段",
                },
            },
            bingjianx:{
                audio:3,
                trigger:{
                    player:"shaBegin",
                },
                filter:function (event,player){         
           return !event.target.hasSkill('bingjianx2'); 
                },
                check:function (event,player){              
                return ai.get.attitude(player,event.target)<0;
            },
                content:function (){                   
player.discardPlayerCard(trigger.target,'e',true);             
                   trigger.target.addSkill('bingjianx2');               
            },
                ai:{
                    threaten:1.5,
                },
            },
            "bingjianx2":{
                audio:3,
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                mark:true,
                popup:false,
                unique:true,
                content:function (){                      
                player.removeSkill('bingjianx2');
            },
                marktext:"冰",
                intro:{
                    content:"该角色计算与其他角色距离+2，其他角色与其该角色计算距离-2，直到造成伤害",
                },
                mod:{
                    globalTo:function (from,to,current){
                  return current-2;
        },
                    globalFrom:function (from,to,current){
                   return current+2;
        },
                },
            },
            feijiang:{
                unique:true,
                global:"feijiang2",
                zhuSkill:true,
            },
            "feijiang2":{
                audio:1,
                enable:"phaseUse",
                discard:false,
                line:true,
                prepare:"give",
                filter:function (event,player){
                if(player.group!='qun') return false;
                if(player.num('h','sha')+player.num('h','juedou')+player.num('h','jiu')==0) return 0;
                return game.hasPlayer(function(target){
                    return target!=player&&target.hasZhuSkill('feijiang',player);
                });
            },
                filterCard:function (card){
                return (card.name=='sha'||card.name=='juedou'||card.name=='jiu')
            },
                filterTarget:function (card,player,target){
                return target!=player&&target.hasZhuSkill('feijiang',player);
            },
                usable:1,
                forceaudio:true,
                content:function (){
                target.gain(cards,player);
            },
                ai:{
                    expose:0.3,
                    order:10,
                    result:{
                        target:5,
                    },
                },
            },
            
jieyi:{
                audio:1,
                enable:"phaseUse",               
                usable:1,
                selectTarget:2,
                check:function (event,player){
                if(ai.get.attitude(player,event.target)>1)
                return 2;                      
if(ai.get.attitude(player,event.target)<1)
                return 0;
                return 2;
            },
                filterTarget:function (card,player,target){
                if(target.sex!='male') return false;
               
                if(target==player) return false;
                return true;
            },
                content:function (){                     
                   "step 0"
            player.addTempSkill('rende',{player:'phaseEnd'});         
           player.addTempSkill('wusheng',{player:'phaseEnd'});   
           player.addTempSkill('paoxiao',{player:'phaseEnd'});                  
                   "step 1"
if(target.hp<target.maxHp){                                               
target.recover();
}
else{
target.draw();
}
    "step 2"
   player.draw();    
},
                ai:{
                    order:10,
                    result:{
                        player:2,
                        target:2.5,
                    },
                    threaten:2,
                },
            },
            zhimang:{
                audio:5,
               filter:function(event,player){
				return player.countCards('h',{color:'black'})>0;
			},
                enable:"phaseUse",
                usable:1,
                filterCard:{
                    color:"black",
                },
                filterTarget:function (card,player,target){
                if(target==player)
                return false;
                return !target.skills.contains('zhimang2');
            },
                check:function (card){
                return 15-ai.get.value(card);
            },
                discard:false,
                prepare:function (cards,player,targets){
                player.$give(cards,targets[0]);
                player.line(targets[0],'green');
            },
                content:function (){
                "step 0"
                game.delay();
                player.draw();
                "step 1"
                target.storage.zhimang2=cards[0];
                target.addSkill('zhimang2');
                game.addVideo('storage',target,['zhimang2',get.cardInfo(target.storage.zhimang2),'card']);
            },
                ai:{
                    expose:0.2,
                    result:{
                        target:function (player,target){
                        return -target.hp;
                    },
                    },
                    order:9.2,
                    threaten:1.8,
                },
            },
            "zhimang2":{
                trigger:{
                    player:["shaBegin","juedouBegin"]
                },
                forced:true,
                mark:true,
                audio:3,
               priority:15,
                unique:true,              
                content:function (){     
                trigger.finish();
                trigger.untrigger();
player.chooseToDiscard(true,Math.max(1,Math.ceil(player.num('he')/2)),'he');
                player.addSkill('zhimang3');

                player.removeSkill('zhimang2');
            },
            marktext:"盲",
                intro:{
                    content:"该角色下一次使用【杀】或【决斗】时无效，并弃置X张牌，X为该角色牌数的一半且向上取整，且至少为1",
                },
            },
            "zhimang3":{
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                popup:false,
                content:function (){                
                player.removeSkill('zhimang3');
                delete player.storage.zhimang2;
            },
            },
           chenmox:{
                audio:4,               
                trigger:{
                    player:"shaBegin",
                },
                priority:8,
                check:function (event,player){
                return ai.get.attitude(player,event.target)<0;
            },       
                content:function (){
            trigger.target.addTempSkill('fengyin',{player:'phaseAfter'});
           }
        },
            chenmo:{
                audio:3,
                forbid:["boss"],       
                trigger:{
                    player:"shaBegin",
                },
                priority:9,
                unique:true,
                check:function (event,player){
                return ai.get.attitude(player,event.target)<0;
            },
                content:function (){
                "step 0"    
                var target=trigger.target;
                if(target.hasSkill('chenmo2')==false){
                    var list=[];
                    for(var i=0;i<target.skills.length;i++){                        
                            list.push(target.skills[i]);
                    }
                    target.disableSkill('chenmo',list);
                    target.addSkill('chenmo2');
                }            
            },
                ai:{
                    threaten:1.4,
                },
            },
            "chenmo2":{
                audio:"ext:新版武将:false",
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                unique:true,
                content:function (){
                player.enableSkill('chenmo');
                player.removeSkill('chenmo2');
            },
                mark:true,
                unique:true,
                popup:false,
                marktext:"默",
                intro:{
                    content:function (st,player){
                    var storage=player.disabledSkills.chenmo;
                    if(storage&&storage.length){
                        var str='失效技能：';
                        for(var i=0;i<storage.length;i++){
                            if(lib.translate[storage[i]+'_info']){
                                str+=get.translation(storage[i])+'、';
                            }
                        }
                        return str.slice(0,str.length-1);
                    }
                },
                },
            },
            xinyiji:{group:["xinyiji1","xinyiji2"]},
                xinyiji1:{
                audio:["yiji",2],
                trigger:{
                    player:"damageEnd",
                },
                frequent:true,
                filter:function (event){
                return (event.num>0)
            },
                content:function (){
                "step 0"
                player.draw(Math.floor(player.num('e')/2)+2*trigger.num);
                "step 1"
                event.cards=result;
                "step 2"
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
                        return (_status.event.player.num('h')-_status.event.player.hp);
                    },
                    ai2:function(target){
                        var att=ai.get.attitude(_status.event.player,target);
                        if(ui.selected.cards.length&&ui.selected.cards[0].name=='du'){
                            return 1-att;
                        }
                        return att-4;
                    },
                    prompt:'请选择要送人的卡牌'
                });
                "step 3"
                if(result.bool){
                    player.line(result.targets,'green');
                    result.targets[0].gain(result.cards,player);
                    player.$give(result.cards.length,result.targets[0]);
                    for(var i=0;i<result.cards.length;i++){
                        event.cards.remove(result.cards[i]);
                    }
                    if(event.cards.length) event.goto(2);
                }
            },
                ai:{
                    maixie:true,
                    effect:{   
                        target:function (card,player,target,current){
                        if(get.type(card)=='equip') return [1,3];
                    },
                 
                        target:function (card,player,target){
                        if(get.tag(card,'damage')){
                            if(player.hasSkill('jueqing')) return [1,-2];
                            if(!target.hasFriend()) return;
                            if(target.hp>=4) return [1,get.tag(card,'damage')*2];
                            if(target.hp==3) return [1,get.tag(card,'damage')*1.5];
                            if(target.hp==2) return [1,get.tag(card,'damage')*0.5];
                        }
                    },
                    },
                },
            },
       xinyiji2:{   
         audio:2,
    trigger:{
        player:"dieBegin",
    },
    direct:true,
    content:function (){
        "step 0"
        player.chooseTarget(get.prompt('zhuiyi'),function(card,player,target){
            return player!=target&&_status.event.source!=target;
        }).set('ai',function(target){
            var num=ai.get.attitude(_status.event.player,target);
            if(num>0){
                if(target.hp==1){
                    num+=2;
                }
                if(target.hp<target.maxHp){
                    num+=2;
                }
            }
            return num;
        }).set('source',trigger.source);
        "step 1"
        if(result.bool){
            var target=result.targets[0];
            player.logSkill('reyiji',target);
            target.gainMaxHp();
            target.recover();          
        }
    },
    ai:{
        expose:0.5,
    },
     },
            xinluoshen:{
                audio:["luoshen",2],
                trigger:{
                    player:["phaseBegin","phaseEnd"],
                },
                frequent:true,
                content:function (){
                "step 0"
                if(event.cards==undefined) event.cards=[];
                player.judge(function(card){
                    if(get.color(card)=='black') return 1.5;
                    return -1.5;
                },ui.special);
                "step 1"
                if(result.judge>0){
                    event.cards.push(result.card);
                    if(lib.config.autoskilllist.contains('luoshen')){
                        player.chooseBool('是否再次发动？');
                    }
                    else{
                        event._result={bool:true};
                    }
                }
                else{
                    for(var i=0;i<event.cards.length;i++){
                        if(get.position(event.cards[i])!='s'){
                            event.cards.splice(i,1);i--;
                        }
                    }
                    player.gain(event.cards);
                    if(event.cards.length){
                        player.$draw(event.cards);
                    }
                    event.finish();
                }
                "step 2"
                if(result.bool){
                    event.goto(0);
                }
                else{
                    player.gain(event.cards);
                    if(event.cards.length){
                        player.$draw(event.cards);
                    }
                }
            },
            },
            xinqingguo:{
                audio:["qingguo",2],
                enable:["chooseToRespond"],
                filterCard:function (card){
                return get.suit(card)=='spade';
            },
                viewAs:{
                    name:"shan",
                },
                viewAsFilter:function (player){
                if(!player.num('he',{suit:'spade'})) return false;
            },
                prompt:"将一张♠花色的牌当闪打出",
                check:function (){return 1},
                ai:{
                    respondShan:true,
                    skillTagFilter:function (player){
                    if(!player.num('he',{suit:'spade'})) return false;
                },
                    effect:{
                        target:function (card,player,target,current){
                        if(get.tag(card,'respondShan')&&current<0) return 0.6
                    },
                    },
                    basic:{
                        useful:[7,2],
                        value:[7,2],
                    },
                },
            },
            xinrende:{
                audio:["rende",2],
                group:["rende1"],
                enable:"phaseUse",
                filterCard:true,
                selectCard:[1,Infinity],
                discard:false,
                prepare:"give",
                filterTarget:function (card,player,target){
                return player!=target;
            },
                check:function (card){
                if(ui.selected.cards.length>1) return 0;
                if(ui.selected.cards.length&&ui.selected.cards[0].name=='du') return 0;
                if(!ui.selected.cards.length&&card.name=='du') return 20;
                var player=get.owner(card);
                if(player.hp==player.maxHp||player.storage.rende<0||player.num('h')<=1){
                    if(ui.selected.cards.length){
                        return -1;
                    }
                    var players=game.filterPlayer();
                    for(var i=0;i<players.length;i++){
                        if(players[i].get('s').contains('haoshi')&&
                            !players[i].isTurnedOver()&&
                            !players[i].num('j','lebu')&&
                            ai.get.attitude(player,players[i])>=3&&
                            ai.get.attitude(players[i],player)>=3){
                            return 11-ai.get.value(card);
                        }
                    }
                    if(player.num('h')>player.hp) return 10-ai.get.value(card);
                    if(player.num('h')>2) return 6-ai.get.value(card);
                    return -1;
                }
                return 10-ai.get.value(card);
            },
                content:function (){
                target.gain(cards,player);
                if(typeof player.storage.rende!='number'){
                    player.storage.rende=0;
                }
                if(player.storage.rende>=0){
                    player.storage.rende+=cards.length;
                    if(player.storage.rende>=2){
                        player.recover(1+Math.floor(Math.random()*(2)));
                        player.storage.rende=-1;
                    }
                }
            },
                ai:{
                    order:function (skill,player){
                    if(player.hp<player.maxHp&&player.storage.rende<2&&player.num('h')>1){
                        return 20;
                    }
                    return 1;
                },
                    result:{
                        target:function (player,target){
                        if(ui.selected.cards.length&&ui.selected.cards[0].name=='du'){
                            return -10;
                        }
                        if(target.num('j','lebu')) return 0;
                        var nh=target.num('h');
                        var np=player.num('h');
                        if(player.hp==player.maxHp||player.storage.rende<0||player.num('h')<=1){
                            if(nh>=np-1&&np<=player.hp&&!target.get('s').contains('haoshi')) return 0;
                        }
                        return Math.max(1,5-nh);
                    },
                    },
                    effect:{
                        target:function (card,player,target){
                        if(player==target&&get.type(card)=='equip'){
                            if(player.num('e',{subtype:get.subtype(card)})){
                                var players=game.filterPlayer();
                                for(var i=0;i<players.length;i++){
                                    if(players[i]!=player&&ai.get.attitude(player,players[i])>0){
                                        return 0;
                                    }
                                }
                            }
                        }
                    },
                    },
                    threaten:0.8,
                },
            },
            "rende1":{
                trigger:{
                    player:"phaseUseBegin",
                },
                forced:true,
                popup:false,
                silent:true,
                content:function (){
                player.storage.rende=0;
            },
            },
            xinjijiang:{
                unique:true,
                group:["xinjijiang1","xinjijiang2"],
                zhuSkill:true,
            },
            "xinjijiang1":{
                audio:2,
                audioname:["xinliushan"],
                trigger:{
                    player:"chooseToRespondBegin",
                },
                filter:function (event,player){
                if(event.responded) return false;
                if(player.storage.xinjijianging) return false;
                if(!player.hasZhuSkill('xinjijiang')) return false;
                if(event.filterCard({name:'sha'},player,event)==false) return false;
                return game.hasPlayer(function(current){
                    return current!=player&&current.group=='shu';
                });
            },
                content:function (){
                "step 0"
                if(event.current==undefined) event.current=player.next;
                if(event.current==player){
                    event.finish();
                }
                else if(event.current.group=='shu'){
                    player.storage.xinjijianging=true;
                    var next=event.current.chooseToRespond('是否替'+get.translation(player)+'打出一张杀？',{name:'sha'});
                    next.set('ai',function(){
                        var event=_status.event;
                        return (ai.get.attitude(event.player,event.source)-2);
                    });
                    next.set('source',player);
                    next.autochoose=lib.filter.autoRespondSha;
                }
                else{
                    event.current=event.current.next;
                    event.redo();
                }
                "step 1"
                player.storage.xinjijianging=false;
                if(result.bool){
                    event.finish();     
                    player.draw();              
                    trigger.result=result;
                    trigger.responded=true;                    
                    trigger.animate=false;
                    if(typeof event.current.ai.shown=='number'&&event.current.ai.shown<0.95){
                        event.current.ai.shown+=0.3;
                        if(event.current.ai.shown>0.95) event.current.ai.shown=0.95;
                    }
                }
                else{
                    event.current=event.current.next;
                    event.goto(0);
                }
            },
            },
            "xinjijiang2":{
                audio:2,
                audioname:["xinliushan"],
                enable:"chooseToUse",
                filter:function (event,player){
                if(event.filterCard&&!event.filterCard({name:'sha'},player,event)) return false;
                if(!player.hasZhuSkill('xinjijiang')) return false;
                if(player.hasSkill('xinjijiang3')) return false;
                if(!lib.filter.cardUsable({name:'sha'},player)) return false;
                return game.hasPlayer(function(current){
                    return current!=player&&current.group=='shu';
                });
            },
                filterTarget:function (card,player,target){
                if(_status.event._backup&&
                    typeof _status.event._backup.filterTarget=='function'&&
                    !_status.event._backup.filterTarget({name:'sha'},player,target)){
                    return false;
                }
                return player.canUse({name:'sha'},target);
            },
                content:function (){
                "step 0"
                if(event.current==undefined) event.current=player.next;
                if(event.current==player){
                    player.addSkill('xinjijiang3');
                    event.getParent(2).step=0;
                    event.finish();
                }
                else if(event.current.group=='shu'){
                    var next=event.current.chooseToRespond('是否替'+get.translation(player)+'对'+get.translation(target)+'使用一张杀',
                    function(card,player,event){
                        event=event||_status.event;
                        return card.name=='sha'&&event.source.canUse(card,event.target);
                    });
                    next.set('ai',function(card){
                        var event=_status.event;
                        return ai.get.effect(event.target,card,event.source,event.player);
                    });
                    next.set('source',player);
                    next.set('target',target);
                    next.autochoose=lib.filter.autoRespondSha;
                }
                else{
                    event.current=event.current.next;
                    event.redo();
                }
                "step 1"
                if(result.bool){
                    event.finish();      if(result.cards&&result.cards.length==1&&result.cards[0].name=='sha'){
player.draw();                 player.useCard(result.cards[0],target).animate=false;
                    }
                    else{
              player.useCard({name:'sha'},target).animate=false;          
                    }
                    if(typeof event.current.ai.shown=='number'&&event.current.ai.shown<0.95){
                        event.current.ai.shown+=0.3;
                        if(event.current.ai.shown>0.95) event.current.ai.shown=0.95;
                    }
                }
                else{
                    event.current=event.current.next;
                    event.goto(0);
                }
            },
                ai:{
                    result:{
                        target:function (player,target){
                        if(player.hasSkill('xinjijiang3')) return 0;
                        return ai.get.effect(target,{name:'sha'},player,target);
                    },
                    },
                    order:function (){
                    return ai.get.order({name:'sha'})+5;
                },
                },
            },
            "xinjijiang3":{
                trigger:{
                    global:["useCardAfter","useSkillAfter","phaseAfter"],
                },
                forced:true,
                popup:false,
                silent:true,
                filter:function (event){
                return event.skill!='xinjijiang2'&&event.skill!='xinqinwang2';
            },
                content:function (){
                player.removeSkill('xinjijiang3');
            },
            },
 xinwusheng:{
                group:["xinwusheng1","xinwusheng2"] 
},                           
                    xinwusheng1:{
                        trigger:{
                            player:["useCard","respond"],
                        },
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                        return event.skill=='xinwusheng2';
                    },
              content:function (){   
                 game.delay();            
                 player.draw();
                 player.addTempSkill('qinglong_skill',{player:'phaseBefore'});                
                    },
                    },           
xinwusheng2:{
			audio:3,
     filter:function(event,player){
				return player.countCards('he',{color:'red'})>0;
			},
			enable:['chooseToRespond','chooseToUse'],
			filterCard:function(card,player){
				if(get.zhu(player,'shouyue')) return true;
				return get.color(card)=='red';
			},
			position:'he',
			viewAs:{name:'sha'},
			viewAsFilter:function(player){
				if(get.zhu(player,'shouyue')){
					if(!player.countCards('he')) return false;
				}
				else{
					if(!player.countCards('he',{color:'red'})) return false;
				}
			},
			prompt:'将一张♥或♦牌当杀使用或打出',
			check:function(card){
    var player=get.owner(card);
    if(player.hp>player.maxHp-1)
     return 15-ai.get.value(card)
      return 8-ai.get.value(card)},
			ai:{
       order:5.2,
				skillTagFilter:function(player){
					if(get.zhu(player,'shouyue')){
						if(!player.countCards('he')) return false;
					}
					else{
						if(!player.countCards('he',{color:'red'})) return false;
					}
				},
				respondSha:true,
			}

		},                  
            xinpaoxiao:{
                audio:4,
                forced:true,
                trigger:{
                    player:"shaBegin",
                },
                content:function (){
                "step 0"
                event.cards=get.cards(1+Math.floor(Math.random()*2));
                player.showCards(event.cards,'咆哮');
                "step 1"
                for(var i=0;i<cards.length;i++){
                    if(get.type(cards[i])!='equip'&&cards[i].name!='sha'&&cards[i].name!='guohe'){
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
                    threaten:1.4,
                    unequip:true,
                    skillTagFilter:function (player,tag,arg){
                    if(!get.zhu(player,'shouyue')) return false;
                    if(arg&&arg.name=='sha') return true;
                    return false;
                },
                },
            },
            xinguanxing:{
                audio:4,
                audioname:["xinjiangwei"],
                trigger:{
                    player:"phaseBegin",
                },
                frequent:true,
                content:function (){
                "step 0"
                if(player.isUnderControl()){
                    game.modeSwapPlayer(player);
                }
                var num=Math.max(5,game.countPlayer());
                if(player.hasSkill('xinzhiji')&&player.hasSkill('xinguanxing')){
                    num=5;
                }
                var cards=get.cards(num);
                event.cards=cards;
                var switchToAuto=function(){
                    _status.imchoosing=false;
                    if(event.dialog) event.dialog.close();
                    if(event.control) event.control.close();
                    var top=[];
                    var judges=player.node.judges.childNodes;
                    var stopped=false;
                    if(!player.num('h','wuxie')){
                        for(var i=0;i<judges.length;i++){
                            var judge=get.judge(judges[i]);
                            cards.sort(function(a,b){
                                return judge(b)-judge(a);
                            });
                            if(judge(cards[0])<0){
                                stopped=true;break;
                            }
                            else{
                                top.unshift(cards.shift());
                            }
                        }
                    }
                    var bottom;
                    if(!stopped){
                        cards.sort(function(a,b){
                            return ai.get.value(b,player)-ai.get.value(a,player);
                        });
                        while(cards.length){
                            if(ai.get.value(cards[0],player)<=8) break;
                            top.unshift(cards.shift());
                        }
                    }
                    bottom=cards;
                    for(var i=0;i<top.length;i++){
                        ui.cardPile.insertBefore(top[i],ui.cardPile.firstChild);
                    }
                    for(i=0;i<bottom.length;i++){
                        ui.cardPile.appendChild(bottom[i]);
                    }
                    player.popup(get.cnNumber(top.length)+'上'+get.cnNumber(bottom.length)+'下');
                    game.log(player,'将'+get.cnNumber(top.length)+'张牌置于牌堆顶');
                    game.delay(2);
                };
                var chooseButton=function(online,player,cards){
                    var event=_status.event;
                    player=player||event.player;
                    cards=cards||event.cards;
                    event.top=[];
                    event.bottom=[];
                    event.status=true;
                    event.dialog=ui.create.dialog('按顺序选择置于牌堆顶的牌（先选择的在上）',cards);
                    event.switchToAuto=function(){
                        event._result='ai';
                        event.dialog.close();
                        event.control.close();
                        _status.imchoosing=false;
                    },
                    event.control=ui.create.control('ok','pileTop','pileBottom',function(link){
                        var event=_status.event;
                        if(link=='ok'){
                            if(online){
                                event._result={
                                    top:[],
                                    bottom:[]
                                }
                                for(var i=0;i<event.top.length;i++){
                                    event._result.top.push(event.top[i].link);
                                }
                                for(var i=0;i<event.bottom.length;i++){
                                    event._result.bottom.push(event.bottom[i].link);
                                }
                            }
                            else{
                                var i;
                                for(i=0;i<event.top.length;i++){
                                    ui.cardPile.insertBefore(event.top[i].link,ui.cardPile.firstChild);
                                }
                                for(i=0;i<event.bottom.length;i++){
                                    ui.cardPile.appendChild(event.bottom[i].link);
                                }
                                for(i=0;i<event.dialog.buttons.length;i++){
                                    if(event.dialog.buttons[i].classList.contains('glow')==false&&
                                        event.dialog.buttons[i].classList.contains('target')==false)
                                    ui.cardPile.appendChild(event.dialog.buttons[i].link);
                                }
                                player.popup(get.cnNumber(event.top.length)+'上'+get.cnNumber(event.cards.length-event.top.length)+'下');
                                game.log(player,'将'+get.cnNumber(event.top.length)+'张牌置于牌堆顶');
                            }
                            event.dialog.close();
                            event.control.close();
                            game.resume();
                            _status.imchoosing=false;
                        }
                        else if(link=='pileTop'){
                            event.status=true;
                            event.dialog.content.childNodes[0].innerHTML='按顺序选择置于牌堆顶的牌';
                        }
                        else{
                            event.status=false;
                            event.dialog.content.childNodes[0].innerHTML='按顺序选择置于牌堆底的牌';
                        }
                    })
                    for(var i=0;i<event.dialog.buttons.length;i++){
                        event.dialog.buttons[i].classList.add('selectable');
                    }
                    event.custom.replace.button=function(link){
                        var event=_status.event;
                        if(link.classList.contains('target')){
                            link.classList.remove('target');
                            event.top.remove(link);
                        }
                        else if(link.classList.contains('glow')){
                            link.classList.remove('glow');
                            event.bottom.remove(link);
                        }
                        else if(event.status){
                            link.classList.add('target');
                            event.top.unshift(link);
                        }
                        else{
                            link.classList.add('glow');
                            event.bottom.push(link);
                        }
                    }
                    event.custom.replace.window=function(){
                        for(var i=0;i<_status.event.dialog.buttons.length;i++){
                            _status.event.dialog.buttons[i].classList.remove('target');
                            _status.event.dialog.buttons[i].classList.remove('glow');
                            _status.event.top.length=0;
                            _status.event.bottom.length=0;
                        }
                    }
                    game.pause();
                    game.countChoose();
                };
                event.switchToAuto=switchToAuto;

                if(event.isMine()){
                    chooseButton();
                    event.finish();
                }
                else if(event.isOnline()){
                    event.player.send(chooseButton,true,event.player,event.cards);
                    event.player.wait();
                    game.pause();
                }
                else{
                    event.switchToAuto();
                    event.finish();
                }
                "step 1"
                if(event.result=='ai'||!event.result){
                    event.switchToAuto();
                }
                else{
                    var top=event.result.top||[];
                    var bottom=event.result.bottom||[];
                    for(var i=0;i<top.length;i++){
                        ui.cardPile.insertBefore(top[i],ui.cardPile.firstChild);
                    }
                    for(i=0;i<bottom.length;i++){
                        ui.cardPile.appendChild(bottom[i]);
                    }
                    for(i=0;i<event.cards.length;i++){
                        if(!top.contains(event.cards[i])&&!bottom.contains(event.cards[i])){
                            ui.cardPile.appendChild(event.cards[i]);
                        }
                    }
                    player.popup(get.cnNumber(top.length)+'上'+get.cnNumber(event.cards.length-top.length)+'下');
                    game.log(player,'将'+get.cnNumber(top.length)+'张牌置于牌堆顶');
                    game.delay(2);
                }
            },
                ai:{
                    threaten:1.2,
                },
            },
            xinkongcheng:{
                mod:{
                    targetEnabled:function (card,player,target,now){
                    if(target.num('h')==0){
                        if(card.name=='sha'||card.name=='juedou'||card.name=='wanjian'||card.name=='nanman'||card.name=='huoshaolianying'||card.name=='shunshou'||card.name=='guohe'||card.name=='shuiyanqijun')
return false;
                    }
                },
                },
                group:"kongcheng1",
                ai:{
                    noh:true,
                    skillTagFilter:function (player,tag){
                    if(tag=='noh'){
                        if(player.num('h')!=1) return false;
                    }
                },
                },
            },        
            xinlongdan:{
                group:["xinlongdan_sha","xinlongdan_shan","xinlongdan_draw"],
                subSkill:{
                    draw:{
                        audio:1,
                        trigger:{
                            player:["useCard","respond"],
                        },
                        forced:true,
                        popup:false,
                        filter:function (event,player){                        
                        return event.skill=='xinlongdan_sha'||event.skill=='xinlongdan_shan';
                    },
                        content:function (){
                    "step 0"
            event.cards=get.cards(Math.min(3,1+Math.floor((player.maxHp-player.hp)/2)));
            player.showCards(event.cards);
            "step 1"
            for(var i=0;i<cards.length;i++){
                if(get.type(cards[i])!='basic'){
                    ui.discardPile.appendChild(cards[i]);
                    cards.splice(i--,1);
                }
            }
            player.gain(cards,'gain2');
            game.log(player,'获得了',cards);
                },
                    },
                    sha:{
                        audio:2,
                        enable:["chooseToUse","chooseToRespond"],
                        filterCard:{
                            name:"shan",
                        },
                        viewAs:{
                            name:"sha",
                        },
                        viewAsFilter:function (player){
                        if(!player.num('h','shan')) return false;
                    },
                        prompt:"将一张闪当杀使用或打出",
                        check:function (){return 1},
                        ai:{
                            effect:{
                                target:function (card,player,target,current){
                                if(get.tag(card,'respondSha')&&current<0) return 0.6
                            },
                            },
                            respondSha:true,
                            skillTagFilter:function (player){
                            if(!player.num('h','shan')) return false;
                        },
                            order:function (){
                            return ai.get.order({name:'sha'})+1;
                        },
                            useful:2,
                            value:3,
                            basic:{
                                useful:[5,1],
                                value:[5,1],
                            },
                            result:{
                                target:function (player,target){
                        if(player.hasSkill('jiu')&&!target.num('e','baiyin')){
                            if(ai.get.attitude(player,target)>0){
                                return -6;
                            }
                            else{
                                return -3;
                            }
                        }
                        return -1.5;
                    },
                            },
                            tag:{
                                respond:1,
                                respondShan:1,
                                damage:function (card){
                        if(card.nature=='poison') return;
                        return 1;
                    },
                                natureDamage:function (card){
                        if(card.nature) return 1;
                    },
                                fireDamage:function (card,nature){
                        if(card.nature=='fire') return 1;
                    },
                                thunderDamage:function (card,nature){
                        if(card.nature=='thunder') return 1;
                    },
                                poisonDamage:function (card,nature){
                        if(card.nature=='poison') return 1;
                    },
                            },
                        },
                    },
                    shan:{
                        audio:2,
                        enable:["chooseToRespond"],
                        filterCard:{
                            name:"sha",
                        },
                        viewAs:{
                            name:"shan",
                        },
                        prompt:"将一张杀当闪打出",
                        check:function (){return 1},
                        viewAsFilter:function (player){
                        if(!player.num('h','sha')) return false;
                    },
                        ai:{
                            respondShan:true,
                            skillTagFilter:function (player){
                            if(!player.num('h','sha')) return false;
                        },
                            effect:{
                                target:function (card,player,target,current){
                                if(get.tag(card,'respondShan')&&current<0) return 0.6
                            },
                            },
                            order:8,
                            useful:3,
                            value:4,
                            basic:{
                                useful:[7,2],
                                value:[7,2],
                            },
                        },
                    },
                },
            },            
            xintieji:{
                audio:2,
                trigger:{
                    player:"shaBegin",
                },
                check:function (event,player){
                return ai.get.attitude(player,event.target)<=0;
            },
                logTarget:"target",
                content:function (){
      player.discardPlayerCard(trigger.target,2,'he',true);
            },
                ai:{
                    threaten:1.3,
                },
            },
            xinjizhi:{
                audio:4,
                audioname:["jianyong"],
                trigger:{
                    player:"useCard",
                },
                frequent:true,
                filter:function (event){
        return (get.type(event.card)=='trick'||get.type(event.card)=='delay'&&event.cards[0]&&event.cards[0]==event.card);
    },
                content:function (){
   "step 0"
            event.cards=get.cards(2+Math.floor(Math.random()*2));
            player.showCards(event.cards,'集智');
            "step 1"
            for(var i=0;i<cards.length;i++){
                if(get.type(cards[i])!='trick'&&get.type(cards[i])!='delay'){
                    ui.discardPile.appendChild(cards[i]);
                    cards.splice(i--,1);
                }
            }
            player.gain(cards,'gain2');
            game.log(player,'获得了',cards);
    },
                ai:{
                    threaten:1.5,
                    order:15,
                    result:{
                        player:1,
                    },
                    effect:{
                        player:function (card,player){
                if(get.type(card)=='trick') return [1,3];
            },
                    },
                },
            },            
            xinzhiheng:{
                audio:["zhiheng",2],
                enable:"phaseUse",
                usable:1,
                position:"he",
                filterCard:function (card){
                return get.color(card)=='red';
            },
                selectCard:[1,Infinity],
                prompt:"弃置任意张♥或♦牌并摸等同弃置牌数两倍的牌",
                check:function (card){
                var player=get.owner(card);
                if(player.hp>3)
                return 15-ai.get.value(card)
                return 8-ai.get.value(card)
            },
                content:function (){
                player.draw(2*cards.length);
            },
                ai:{
                    order:15,
                    result:{
                        player:2,
                    },
                    threaten:1.5,
                },
            },
            xinjiuyuan:{
                audio:"ext:★新版武将:2",
                unique:true,
                trigger:{
                    target:"taoBegin",
                },
                zhuSkill:true,
                forced:true,
                filter:function (event,player){
                if(event.player==player) return false;
                if(!player.hasZhuSkill('xinjiuyuan')) return false;
                if(player.hp>0) return false;
                if(event.player.group!='wu') return false;
                return true;
            },
                content:function (){
                player.recover(2);
            },
            },
            xinqixi:{
                group:["xinqixi1","xinqixi2"],
            },
            "xinqixi1":{
                audio:["qixi",4],
                enable:"chooseToUse",
                filterCard:function (card){
                return get.color(card)=='red';
            },
                position:"he",
                viewAs:{
                    name:"shunshou",
                },
                viewAsFilter:function (player){
                if(!player.num('he',{color:'red'})) return false;
            },
                prompt:"将一张红色牌当顺手牵羊使用",
                check:function (card){return 8-ai.get.value(card)},
                ai:{
                    wuxie:function (target,card,player,viewer){
                    if(ai.get.attitude(viewer,player)>0&&ai.get.attitude(viewer,target)>0){
                        return 0;
                    }
                },
                    basic:{
                        order:10,
                        threaten:1.5,
                        useful:4,
                        value:9,
                    },
                    result:{
                        target:function (player,target){
                        if(ai.get.attitude(player,target)<=0) return (target.num('he')>0)?-1.5:1.5;
                        var js=target.get('j');
                        if(js.length){
                            var jj=js[0].viewAs?{name:js[0].viewAs}:js[0];
                            if(jj.name=='shunshou') return 3;
                            if(js.length==1&&ai.get.effect(target,jj,target,player)>=0){
                                return -1.5;
                            }
                            return 3;
                        }
                        return -1.5;
                    },
                        player:function (player,target){
                        if(ai.get.attitude(player,target)<0&&!target.num('he')){
                            return 0;
                        }
                        if(ai.get.attitude(player,target)>1){
                            var js=target.get('j');
                            if(js.length){
                                var jj=js[0].viewAs?{name:js[0].viewAs}:js[0];
                                if(jj.name=='shunshou') return 1;
                                if(js.length==1&&ai.get.effect(target,jj,target,player)>=0){
                                    return 0;
                                }
                                return 1;
                            }
                            return 0;
                        }
                        return 1;
                    },
                    },
                    tag:{
                        loseCard:1,
                        gain:1,
                    },
                },
            },
            "xinqixi2":{
                audio:["qixi",4],
                enable:"chooseToUse",
                filterCard:function (card){
                return get.color(card)=='black';
            },
                position:"he",
                viewAs:{
                    name:"guohe",
                },
                viewAsFilter:function (player){
                if(!player.num('he',{color:'black'})) return false;
            },
                prompt:"将一张黑色牌当过河拆桥使用",
                check:function (card){return 5-ai.get.value(card)},
                ai:{
                    basic:{
                        order:9,
                        threaten:1.4,
                        useful:1,
                        value:5,
                    },
                    result:{
                        target:function (player,target){
                        var es=target.get('e');
                        var nh=target.num('h');
                        var noe=(es.length==0||target.hasSkillTag('noe'));
                        var noe2=(es.length==1&&es[0].name=='baiyin'&&target.hp<target.maxHp);
                        var noh=(nh==0||target.hasSkillTag('noh'));
                        if(noh&&noe) return 0;
                        if(noh&&noe2) return 0.01;
                        if(ai.get.attitude(player,target)<=0) return (target.num('he'))?-1.5:1.5;
                        var js=target.get('j');
                        if(js.length){
                            var jj=js[0].viewAs?{name:js[0].viewAs}:js[0];
                            if(jj.name=='guohe') return 3;
                            if(js.length==1&&ai.get.effect(target,jj,target,player)>=0){
                                return -1.5;
                            }
                            return 2;
                        }
                        return -1.5;
                    },
                    },
                    tag:{
                        loseCard:1,
                        discard:1,
                    },
                },
            },
            xinkeji:{
                audio:["keji",4],
                forced:true,
                trigger:{
                    player:"phaseDiscardBefore",
                },
                filter:function (event,player){
                return (get.cardCount({name:'sha'},player)==0);
            },
                content:function (){                      
                trigger.untrigger();
                trigger.finish();
                player.draw();
            },       
   ai:{
                    noe:true,
                    threaten:1.4,
                    effect:{
                        player:function (card,player){  
 if(player.num('e',{name:'zhuge'})<1&&(get.type(card)=='basic'&&card.name!='tao')||card.name=='jidou'||card.name=='wanjian'||card.name=='nanman') return [1,-3];
if(player.countCards('h','sha')<=6&&card.name=='zhuge') return [1,-3]; 
if(player.countCards('h','sha')>6&&card.name=='zhuge') return [1,3];
                    },
                    },
                },
            },
            xinkurou:{
                audio:["kurou",4],
                enable:"phaseUse",
                prompt:"失去一点体力并摸三张牌",
                content:function (){              
                "step 0"
                player.loseHp(1);
                "step 1"
                player.draw(3);
            },
                ai:{
                    order:9,
                    result:{
      player:function (card,player){
if(player.countCards('h','sha')>1&&card.name=='zhuge') return [1,3];
     },
      player:function (player){
            if(player.hp>=3)
return 2.5;
           if(player.num('h')>=player.hp) return 0;
           if(player.hp>1&&player.num('he',{name:'zhuge'})) return 1.5;         
           if(player.hp>1&&player.num('h',{name:'tao'})) return 5;
                        if(player.hp<3) return 0;
                        return 0.5;
                    },
                    },
                },
            },
            xinyingzi:{
                audio:["yingzi",2],
                trigger:{
                    player:"phaseDrawBegin",
                },
                frequent:true,
                content:function (){
                trigger.num++;
            },
                ai:{
                    threaten:1.3,
                },
                mod:{
                    maxHandcard:function (player,num){
                    return num+2+Math.ceil(player.num('e')/2);
                },
                    targetEnabled:function (card,player,target,now){
                    if(card.name=='bingliang') return false;
                },
                },
            },            
            xinliuli:{
                audio:["liuli",2],
                trigger:{
                    target:["shaBefore","juedouBefore","bingliangBefore","lebuBefore"],
                },
                direct:true,
                priority:7,
                filter:function (event,player){
                if(player.num('he')==0) return false;
                return game.hasPlayer(function(current){
                    return get.distance(player,current,'attack')<=2&&current!=event.player&&
                        current!=player&&lib.filter.targetEnabled(event.card,event.player,current);
                });
            },
                content:function (){
                "step 0"
                var next=player.chooseCardTarget({
                    position:'he',
                    filterCard:lib.filter.cardDiscardable,
                    filterTarget:function(card,player,target){
                        var trigger=_status.event.getTrigger();
                        if(get.distance(player,target,'attack')<=2&&
                            target!=trigger.player&&target!=player){
                            if(player.canUse(trigger.card,target)) return true;
                        }
                        return false;
                    },
                    ai1:function(card){
                        return ai.get.unuseful(card)+9;
                    },
                    ai2:function(target){
                        if(_status.event.player.num('h','shan')){
                            return -ai.get.attitude(_status.event.player,target);
                        }
                        if(ai.get.attitude(_status.event.player,target)<5){
                            return 6-ai.get.attitude(_status.event.player,target);
                        }
                        if(_status.event.player.hp==1&&player.num('h','shan')==0){
                            return 10-ai.get.attitude(_status.event.player,target);
                        }
                        if(_status.event.player.hp==2&&player.num('h','shan')==0){
                            return 8-ai.get.attitude(_status.event.player,target);
                        }
                        return -1;
                    },
                    prompt:get.prompt('liuli')
                });
                "step 1"
                if(result.bool){
                    player.discard(result.cards);
                    player.logSkill(event.name,result.targets);
                    trigger.target=result.targets[0];
                    trigger.targets.remove(player);
                    trigger.targets.push(result.targets[0]);
                }
                else{
                    event.finish();
                }
                "step 2"
                trigger.untrigger();
                trigger.trigger('useCardToBefore');
                trigger.trigger('shaBefore');
                trigger.trigger('juedouBefore');
                trigger.trigger('bingliangBefore');
                trigger.trigger('lebuBefore');
                game.delay();
            },
                ai:{
                    effect:{
                        target:function (card,player,target){
                        if(target.num('he')==0) return;
                        if(card.name!='sha') return;
                        var min=1;
                        var friend=ai.get.attitude(player,target)>0;
                        var vcard={name:'shacopy',nature:card.nature,suit:card.suit};
                        var players=game.filterPlayer();
                        for(var i=0;i<players.length;i++){
                            if(player!=players[i]&&
                                ai.get.attitude(target,players[i])<0&&
                                target.canUse(card,players[i])){
                                if(!friend) return 0;
                                if(ai.get.effect(players[i],vcard,player,player)>0){
                                    if(!player.canUse(card,players[0])){
                                        return [0,0.1];
                                    }
                                    min=0;
                                }
                            }
                        }
                        return min;
                    },
                    },
                },
            },
            xinqianxun:{
                mod:{
                    targetEnabled:function (card,player,target,now){
                    if(card.name=='huogong'||card.name=='shunshou'||card.name=='lebu') return false;
                },
                },
            },
            xinlianying:{
                audio:4,
                trigger:{
                    player:"loseEnd",
                },
                frequent:true,
                filter:function (event,player){
                if(player.num('h')>=1+Math.floor(player.num('e')/2)) return false;
                for(var i=0;i<event.cards.length;i++){
                    if(event.cards[i].original=='h') return true;
                }
                return false;
            },
                content:function (){
                player.draw(1+Math.floor(player.num('e')/2)-player.num('h'));
            },
                ai:{
                    threaten:1.4,
                    effect:{
                        target:function (card){
                        if(card.name=='guohe'||card.name=='liuxinghuoyu') return 0.5;
                    },
                    },
                    noh:true,
                    skillTagFilter:function (player,tag){
                    if(tag=='noh'){
                        if(player.num('h')!=1) return false;
                    }
                },
                },
            },
            xinxiaoji:{
                audio:["xiaoji",4],
                trigger:{
                    player:["loseEnd"],
                },
                forced:true,
                filter:function (event,player){
                for(var i=0;i<event.cards.length;i++){
                    if(event.cards[i].original=='e') return true;
                }
                return false;
            },
                content:function (){
                var num=0;
                for(var i=0;i<trigger.cards.length;i++){
                    if(trigger.cards[i].original=='e') num+=2+Math.ceil(player.num('e')/2);
                }
                player.draw(num);
            },
                ai:{
                    noe:true,
                    threaten:1.4,
                    effect:{
                        target:function (card,player,target,current){
                        if(get.type(card)=='equip') return [1,3];
                    },
                    },
                },
            },
            xinjieyin:{
                audio:["jieyin",2],
                enable:"phaseUse",
                filterCard:true,
                position:"he",
                usable:1,
                selectCard:2,
                check:function (card){
                var player=get.owner(card);
                if(player.num('h')>player.hp)
                    return 8-ai.get.value(card)
                if(player.hp<player.maxHp)
                    return 6-ai.get.value(card)
                return 4-ai.get.value(card)

            },
                filterTarget:function (card,player,target){
                if(target.sex!='male') return false;
                if(target.hp>=target.maxHp) return false;
                if(target==player) return false;
                return true;
            },
                content:function (){
                player.draw(1-(player.maxHp-player.hp));
                player.recover();
                target.recover();
            },
                ai:{
                    order:5.5,

                    result:{
                        player:function (player){
                        if(player.hp<player.maxHp) return 4;
                        if(player.num('h')>player.hp) return 0
                        return -1;
                    },
                        target:4,
                    },
                    threaten:2,
                },
            },
            xinqingnang:{
                audio:["qingnang",2],
                enable:"phaseUse",
                
                usable:1,
               
                check:function (card){
                return 9-ai.get.value(card)
            },
                filterTarget:function (card,player,target){
                if(target.hp>=target.maxHp) return false;
                return target.num('he')>0;
            },
                content:function (){
                target.chooseToDiscard(true,'he');
                target.recover();
            },
                ai:{
                    order:9,
                    result:{
                        target:function (player,target){
                        if(target.hp==1) return 5;
                       if(target.num('he')>2) return 2;
 if(player==target&&player.num('h')>1&&player.hp<player.maxHp) return 5;
                        return 2;
                    },
                    },
                    threaten:1.9,
                },
            },
            xinjijiu:{group:["xinjijiu1","xinjijiu2"]},
            xinjijiu1:{
                audio:2,
                enable:"chooseToUse",
                
                filterCard:function (card){
                return get.suit(card)=='heart';
            },
                position:"he",
                viewAs:{
                    name:"tao",
                },
                prompt:"将一张♥牌当桃使用",
                check:function (card){return 15-ai.get.value(card)},
                ai:{
                    skillTagFilter:function (player){
                    return player.num('he',{suit:'heart'})>0&&_status.currentPhase!=player;
                },
                    threaten:1.5,
                    save:true,
                },
            },
           xinjijiu2:{
        trigger:{
        global:"dying",
    },
    audio:["jijiu",2],
    priority:10,
    unique:true,
    filter:function (event,player){
        return player!=_status.currentPhase;
    },
    check:function (event,player){
                return ai.get.attitude(player,event.player)>1;
            },
   
    content:function (){
    	"step 0"    
				player.judge(function(card){
					if(get.zhu(_status.event.player,'shouyue')){
						if(get.suit(card)!='spade') return 2;
					}
					else{
						if(get.color(card)=='red') return 2;
					}
					return -0.5;
   
				});
				"step 1"
				if(result.bool){
					trigger.player.recover(1-trigger.player.hp);
				}  
       else{
        player.draw();
       }            
      },
     ai:{
           threaten:1.6,
          
                },
            },            
            xinbiyue:{
                audio:2,
                trigger:{
                    player:"phaseEnd",
                },
                frequent:true,
                content:function (){
                player.draw(1+Math.floor(player.num("e")/2));
            },
            ai:{
                    threaten:1.3,
                },
            },
            xinhujia:{
                audio:3,
                unique:true,
                zhuSkill:true,
                trigger:{
                    player:"chooseToRespondBegin",
                },
                filter:function (event,player){
                if(event.responded) return false;
                if(player.storage.xinhujiaing) return false;
                if(!player.hasZhuSkill('xinhujia')) return false;
                if(event.filterCard({name:'shan'})==false) return false;
                return game.hasPlayer(function(current){
                    return current!=player&&current.group=='wei';
                });
            },
                check:function (event,player){
                if(ai.get.damageEffect(player,event.player,player)>=0) return false;
                return true;
            },
                content:function (){
                "step 0"
                if(event.current==undefined) event.current=player.next;
                if(event.current==player){
                    event.finish();
                }
                else if(event.current.group=='wei'){
                    if((event.current==game.me&&!_status.auto)||(
                        ai.get.attitude(event.current,player)>2)||
                        event.current.isOnline()){
                        player.storage.xinhujiaing=true;
                        var next=event.current.chooseToRespond('是否替'+get.translation(player)+'打出一张闪？',{name:'shan'});
                        next.set('ai',function(){
                            var event=_status.event;
                            return (ai.get.attitude(event.player,event.source)-2);
                        });
                        next.autochoose=lib.filter.autoRespondShan;
                        next.set('source',player);
                    }
                }
                "step 1"
                player.storage.xinhujiaing=false;
                if(result.bool){
                    event.finish();
                    event.current.draw();
                    trigger.result=result;
                    trigger.responded=true;
                    trigger.animate=false;
                    if(typeof event.current.ai.shown=='number'&&event.current.ai.shown<0.95){
                        event.current.ai.shown+=0.3;
                        if(event.current.ai.shown>0.95) event.current.ai.shown=0.95;
                    }
                }
                else{
                    event.current=event.current.next;
                    event.goto(0);
                }
            },
            },
            xinjianxiong:{
                audio:["jianxiong",2],
                trigger:{
                    global:"damageEnd",
                },
                filter:function (event,player){
                if(event.source==player)
                return false;
                return get.itemtype(event.cards)=='cards'&&get.position(event.cards[0])=='d';
            },
                content:function (){
                player.gain(trigger.cards);
                player.$gain2(trigger.cards);
            },
                mod:{
                    maxHandcard:function (player,num){
                var hs=player.get('h');
            for(var i=0;i<hs.length;i++){
                if(hs[i].name=='sha'||hs[i].name=='nanman'||hs[i].name=='wanjian'){
                    num++;
                }
            }
            return num;
        },
                    ai:{
                        maixie:true,
                        effect:{
                            target:function (card,player){
                        if(player.hasSkill('jueqing')) return [1,-1];
                        if(player.hasSkill('jingu')) return [1,-1];
                        if(player.hasSkill('jiu')) return [1,-1];
                        if(get.tag(card,'damage')) return [1,0.5];
                    },
                        },
                        threaten:1.4,
                    },
                },
            },
            xinfankui:{
                group:["xinfankui1","xinfankui2"],
            },
            "xinfankui1":{
                audio:2,
                direct:true,
                trigger:{
                    source:"damageEnd",
                },
                filter:function (event,player){
                return (event.player&&event.player.num('he')&&event.player!=player);
            },
                content:function (){
       "step 0"     
 event.num=trigger.num;    
        "step 1"
        var check;
                var i,num=game.countPlayer(function(current){
                    return current!=player&&current.num('he')&&ai.get.attitude(player,current)<=0;
                });
                check=(num>=1);    player.gainPlayerCard(get.prompt('xinfankui1',trigger.player),trigger.player,ai.get.buttonValue,'he').set('logSkill',['xinfankui1',trigger.player]);
     game.delay();
          "step 2"
                event.num--;
                if(event.num>0){
                    event.goto(1);
                }               
            },
                ai:{
                    expose:0.4,
                },
            },
            "xinfankui2":{
                audio:2,
                direct:true,
                trigger:{
                    player:"damageEnd",
                },
                filter:function (event,player){
                return (event.source&&event.source.num('he')&&event.source!=player);
            },
                content:function (){
       "step 0"     
 event.num=trigger.num;    
        "step 1"
        var check;
                var i,num=game.countPlayer(function(current){
                    return current!=player&&current.num('he')&&ai.get.attitude(player,current)<=0;
                });
                check=(num>=1);    player.gainPlayerCard(get.prompt('fankui',trigger.source),trigger.source,ai.get.buttonValue,'he').set('logSkill',['fankui',trigger.source]);
     game.delay();
          "step 2"
    event.num--;
                if(event.num>0){
                    player.chooseBool('是否继续发动？');
                }
                else{
                    event.finish();
                }
                "step 3"
                if(result.bool){
                    event.goto(1);
                }
            },
                ai:{
                    effect:{
                        target:function (card,player,target){
                        if(player.num('he')>1&&get.tag(card,'damage')){
                            if(player.hasSkill('jueqing')) return [1,-1.5];
                            if(ai.get.attitude(target,player)<0) return [1,1];
                        }
                    },
                    },
                },
            },
            xinguicai:{
                audio:3,
                trigger:{
                    global:"judge",
                },
                direct:true,
                filter:function (event,player){
                return player.num('h')>0;
            },
                content:function (){
                "step 0"
                player.chooseCard(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
                get.translation(trigger.player.judging[0])+'，'+get.prompt('guicai')).set('ai',function(card){
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
                    player.logSkill('xinguicai');
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
                    player.draw();
                    game.delay(2);
                }
            },
                ai:{
                    tag:{
                        rejudge:1,
                    },
                },
            },
            xinganglie:{
                audio:["ganglie",2],
                trigger:{
                    player:"damageEnd",
                },
                filter:function (event,player){
                return (event.source!=undefined);
            },
                check:function (event,player){
                return (ai.get.attitude(player,event.source)<=0);
            },
                content:function (){
                "step 0"
               event.num=trigger.num;
                "step 1"
                player.judge(function(card){
                    if(get.suit(card)=='heart') return -0.1;
                    return 2;
                })
                "step 2"
                if(result.judge<2){
       player.draw(trigger.num);
       event.finish();       
       return;   
                }   
trigger.source.chooseToDiscard(2*trigger.num).set('ai',function(card){
                    if(card.name=='tao') return -10;
                    if(card.name=='jiu'&&_status.event.player.hp==1) return -10;
                    return ai.get.unuseful(card)+2.5*(5-get.owner(card).hp);
                });
                "step 3"
                if(result.bool==false){
                    trigger.source.damage(trigger.num);
                }                               
            },
                ai:{
                    result:{
                        target:function (card,player,target){
                        if(player.hasSkill('jueqing')) return [1,-1];
                        if(get.tag(card,'damage')&&ai.get.damageEffect(target,player,player)>0) return [1,0,0,-1.5];
                    },
                    },
                },
            },
            xintuxi:{
                audio:5,
                trigger:{
                    player:"phaseDrawBefore",
                },
                direct:true,
                content:function (){                             
                "step 0"
                event.num=2+Math.floor(player.num('e')/2);           
                "step 1"
                var check;
                var i,num=game.countPlayer(function(current){
                    return current!=player&&current.num('he')&&ai.get.attitude(player,current)<=0;
                });
                check=(num>=1&&player.num('he')>0);
                player.chooseTarget(get.prompt('xintuxi'),[1],function(card,player,target){
                    return target.num('he')>0&&player!=target;
                },function(target){
                    if(!_status.event.aicheck) return 0;
                    var att=ai.get.attitude(_status.event.player,target);
                    if(target.hasSkill('tuntian')) return att/10;
                    return 1-att;
                }).set('aicheck',check);
                "step 2"
                if(result.bool){
                    player.logSkill('xintuxi',result.targets);    
                    trigger.finish();
                               trigger.untrigger();                
                    for(var i=0;i<result.targets.length;i++){
                        var card=result.targets[i].get('he').randomGet();
                        player.gain(card,result.targets[i]).set('delay',false);
                        result.targets[i].$giveAuto(card,player);
                    }
                 game.delay(0.75);                                   
                }
                else{
                    event.finish();
                }
                "step 3"
                game.delay(0.5);
                event.num--;
                if(event.num>0){
                     event.goto(1);
                }
                else{
                    event.finish();
                }       
            },
                ai:{
                    threaten:1.5,
                    expose:0.3,
                    noe:true,
                    effect:{
                        target:function (card,player,target,current){
                        if(get.type(card)=='equip') return [1,3];
                    },
                    },
                },
            },
            xinluoyi:{
                audio:["luoyi",2],
                trigger:{
                    player:"phaseDrawBegin",
                },
                check:function (event,player){
                if(player.num('h')<2) return false;
                if(!player.hasSha()) return false;
                return game.hasPlayer(function(current){
                    return ai.get.attitude(player,current)<0&&player.canUse('sha',current);
                });
            },
                content:function (){        
player.addTempSkill('wushuang',{player:'phaseBefore'});    player.addTempSkill('xinluoyi2',{player:'phaseBefore'});
var str='获得了技能';    game.log(player,str,'【'+get.skillTranslation('wushuang')+'】');
                trigger.num--;
            },
            },
            "xinluoyi2":{
                audio:1,
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event){
                return event.card&&(event.card.name=='sha'||event.card.name=='juedou')&&event.notLink();
            },
                forced:true,
                content:function (){
                trigger.num++;
                game.delay();
                player.draw(trigger.num);
            },
            ai:{
                    threaten:1.3,
                },
            },            
            xinguose:{						
			audio:["guose",2],
			enable:'phaseUse',	

			discard:false,
			filter:function(event,player){
				return player.countCards('he',{color:'red'})>0;
			},
			prepare:'throw',
			position:'he',
    
			filterCard:{color:'red'},
			filterTarget:function(card,player,target){
				if(player==target) return false;
				if(target.hasJudge('lebu')) return false;
				return lib.filter.targetEnabled({name:'lebu'},player,target);
			},
			check:function(card){
				return 9-ai.get.value(card);
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
				player.gainPlayerCard(true,target,'h');
			},
			ai:{
       threaten:1.5,
				result:{
					target:function(player,target){        
						if(target.hasJudge('lebu')) return -ai.get.effect(target,{name:'lebu'},player,target);
						return ai.get.effect(target,{name:'lebu'},player,target);
					}
				},
				order:6.9,
			}
		},
            "boss_shisi":{
                inherit:"boss_guimei",
            },
            zhiming:{
                audio:2,
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event){
        return event.card&&(event.card.name=='sha')&&
        event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
    },
                forced:true,
                priority:-9,
                content:function (){
        trigger.num=trigger.num*(1+Math.floor(Math.random()*4));
             },
                ai:{
                    threaten:1.6,
                },
            },
            shanbi:{
                audio:1,
                trigger:{
                    target:"shaBegin"
                },
                forced:true,
                priority:99,
            filter:function (event){
            return Math.random()<=0.6;
            },
                content:function (){            
            trigger.untrigger();
            trigger.finish();            player.discardPlayerCard(trigger.player,true);
    },
            },
            zhengyi:{
                skillAnimation:true,
                animationStr:"德玛西亚！！！",
                audio:2,
                trigger:{
                    player:"shaBegin",
                },
                filter:function (event){
        if(event.target.hp>1)
            return false;
            return true;
        },
                check:function (event,player){
                return ai.get.attitude(player,event.target)<=0;

            },
                logTarget:"target",
                content:function (){        
      player.addSkill('zhengyi2');
                    trigger.directHit=true;
            },
                ai:{
                    threaten:1.2,
                },
            },
            "zhengyi2":{
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event){
        if(event.player.hp>1)
            return false;
        return event.card&&(event.card.name=='sha')&&
        event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
    },
                forced:true,
                popup:false,
                unique:true,
                content:function (){
                "step 0"
        trigger.num++;      
                "step 1"
        player.removeSkill('zhengyi2'); 
    },
            },
            jiandao:{
                unique:true,
                mod:{   
             cardUsable:function (card,player,num){
                    if(card.name=='sha') return num+1;
                },
          
                    selectTarget:function (card,player,range){
            if(range[1]==-1) return;
            if(card.name=='sha'||card.name=='guohe') range[1]=4;
        },
                },
                ai:{
                    threaten:1.3,
                },
            },    
           baoji:{
                audio:2,
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                unique:true,
                priority:-9,
                filter:function (event){        
        return event.card&&(event.card.name=='sha'||event.card.name=='juedou')&&
        event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
    },
                content:function (){
           if(Math.random()<=0.3+(player.storage.baonu*0.03)){
           trigger.num=trigger.num*2;
        }    
    },
                ai:{
                    threaten:1.3,
                },
            },
            nuqi:{
                audio:1,
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                unique:true,
                filter:function (event,player){
        if(player.hp==player.maxHp)
            return false;
        return player.storage.baonu>=3;
    },
                content:function (){
 player.storage.baonu-=3;       
              player.recover();               
    },
                ai:{
                    threaten:1.3,
                },
            },
            xunjie:{
                mod:{
                    globalFrom:function (from,to,current){
                   return current-1;
        },
                    globalTo:function (from,to,current){
            if(to.hp<=2) return current+1;
        },
                },
                ai:{
                    threaten:0.8,
                },
            },
            jielue:{
                audio:"tieji2",
                trigger:{
                    source:"damageEnd",
                    player:"phaseEnd",
                },
                forced:true,
                unique:true,
                filter:function (event,player){
        for(var i=0;i<game.players.length;i++){
            if(game.players[i]!=player&&game.players[i].num('he')) return true;
        }
        return false;
    },
                content:function (){
        "step 0"
        var players=get.players(player);
        players.remove(player);
        event.players=players;
        "step 1"
        if(event.players.length){
            var current=event.players.shift();
            var hs=current.get('he')
            if(hs.length){
            game.delay();
                player.gain(hs.randomGet());
                current.$give(1,player);
            }
            event.redo();
        }
    },
                mod:{
                    maxHandcard:function (player,num){
            if(player.hp<player.maxHp) return num+player.maxHp-player.hp;
        },
            cardUsable:function (card,player,num){
                    if(card.name=='sha') return num+1;
                   },
                },
            },
     ai:{
                    
                    effect:{
                        player:function (card,player,target){
                if(card.name=='sha') return [1,Infinity];
                if(card.name=='juedou') return [1,Infinity];               
                 },
               },
             },
           },
        translate:{
            new_juji:"狙击",          
            manbing:"蛮兵",
            new_shensu:"神速",
            xinjiuchi:"酒池",
            xinroulin:"肉林",
            xinbenghuai:"崩坏",
            new_baonue:"暴虐",
            new_baonue2:"暴虐",
            feijiang:"飞将",
            "feijiang2":"飞将",
            xintiaoxin:"挑衅",
            
            xinxiangle:"享乐",
            xinfangquan:"放权",
            xinruoyu:"若愚",
            xinqiaobian:"巧变",
            "xinqiaobian1":"巧变·判定",
            "xinqiaobian2":"巧变·摸牌",
            "xinqiaobian3":"巧变·出牌",
            "xinqiaobian4":"巧变·弃牌",
            xintuntian:"屯田",
            "xintuntian_bg":"田",
            xinzaoxian:"凿险",
            xinjixi:"急袭",
            xinjiang:"激昂",
            xinhunzi:"魂姿",
            xinzhiba:"制霸",
            "xinzhiba2":"制霸",
            new_zhijian:"直谏",
            new_guzheng:"固政",
            new_beige:"悲歌",
            xinduanchang:"断肠",

            xinsongwei:"颂威",
            xinxingshang:"行殇",
            shenshe:"神射",
            xinjushou:"据守",
            jieyi:"结义",
            xinhujia:"护驾",
            xinjianxiong:"奸雄",
            xinfankui:"反馈",
            "xinfankui1":"反馈",
            "xinfankui2":"反馈",
            xinguicai:"鬼才",
            xinganglie:"刚烈",
            xintuxi:"突袭",
            xinluoyi:"裸衣",

            "xinluoyi2":"裸衣",
            xintiandu:"天妒",
            xinyiji:"遗计",
            xinluoshen:"洛神",
            xinqingguo:"倾国",
            xinrende:"仁德",
            xinjijiang:"激将",
            "xinjijiang1":"激将",
            "xinjijiang2":"激将",
            xinwusheng:"武圣",
            xinwusheng2:"武圣",
            "xinwusheng_sha":"武圣",
            "xinwusheng_draw":"武圣",
            xinpaoxiao:"咆哮",
            xinguanxing:"观星",
            xinkongcheng:"空城",
            "xinkongcheng1":"空城",


            xinlongdan:"龙胆",
            "xinlongdan_draw":"龙胆",
            "xinlongdan2":"龙胆",
            xinmashu:"马术",
            xinfeiying:"飞影",
            xintieji:"铁骑",
            xinjizhi:"集智",
            xinqicai:"奇才",
            xinzhiheng:"制衡",
            xinjiuyuan:"救援",
            xinqixi:"奇袭",
            "xinqixi1":"奇袭[顺]",
            "xinqixi2":"奇袭[拆]",
            xinkeji:"克己",
            xinkurou:"苦肉",
            xinyingzi:"英姿",

            fanjian:"反间",
            xinguose:"国色",
            xinliuli:"流离",
            xinqianxun:"谦逊",
            xinlianying:"连营",
            xinxiaoji:"枭姬",
            xinjieyin:"结姻",
            xinqingnang:"青囊",
            xinjijiu:"急救",
            xinjijiu1:"急救",
            xinjijiu2:"急救",
            wushuang:"无双",
            "wushuang1":"无双",
            "wushuang2":"无双",
            xinlijian:"离间",
            xinbiyue:"闭月",
            pileTop:"牌堆顶",
            pileBottom:"牌堆底",
            canshix:"残蚀",
            "canshix_info":"摸牌",
            xinduanliangx:"断粮",
            xinkuanggux:"狂骨",
            xinhaoshi:"好施",
            xin_luanji:"乱击",
            xin_luanji1:"乱击",
            xin_luanji2:"乱击",
            tengjiax:'藤甲',
            mubing:"募兵",
            leishen:"雷神",
            xinguidaox:"鬼道",
            leidian:"雷电",
       
           xin_yongsi:"庸肆",
           xin_yongsi1:"庸肆",
           xin_yongsi2:"庸肆",
           xinqiangxix:"强袭",
           new_tianyi:"天义",
           new_liegong:"烈弓",
           new_liegong1:"烈弓",
           new_liegong2:"烈弓",
           new_xiongyi:"雄异",
           new_huangtian:"黄天",
           new_huangtian2:'黄天',
           new_juejing:"绝境",
           xionghan:"凶悍",
           heping:"和平",
           baotou:"爆头",
           new_xingwu:'星舞',
           new_zhenlie:"贞烈", 
           new_wuji:"武继",
           new_longyin:"龙吟",
           new_shenshi:"审势",
           new_jueqing:"绝情",         
           new_jueqing1:"绝情",
           new_jueqing2:"绝情",
           new_jueqing3:"绝情",
           new_jueqing4:"绝情",
           new_shangshi:"伤逝",
           new_shenji:'神机',
           new_miaosuan:"妙算",
           new_mengjin:"猛进",
           new_jiedao:"借刀",
           new_lianji:'连计',
           new_zaiqi:"再起",
           new_bianchi:"鞭笞",
           new_tanlan:"贪婪",
           new_lianhua:"莲华",
           new_buxiang:"不详",          
           new_buxiang1:"不详",
           new_tianxiang:"天香",
           new_hongyan:"红颜",
           new_arxhz:'黯然销魂掌',
           new_arxhz_info:'当你即将受到致命伤害时，你可以对来源目标造成致命伤害，若其死亡，则你防止受到该伤害并回复一点体力，否则其回复至最大体力值。',
           new_tianxiang_info:'当你即将受到伤害时，你可以弃置一张红桃牌将伤害转移给任意一名其他角色，然后你摸一张牌，并令该角色摸x张牌，x为其已损失体力值',
    		    new_hongyan_info:'锁定技，你的♠和♦牌均视为♥',          
           new_buxiang_info:"回合开始时，你可以将一枚不详标记置于所有敌方角色的武将牌上，称为“刃”，令其手牌上限-1，直到其下一回合结束。",
           new_lianhua_info:"限定技，出牌阶段，你可以将一枚“刃”标记置于你攻击范围2以内的1~3名其他角色的武将牌上并对其造成1点伤害，然后你不能再使用此技能，直到技能【贪婪】被触发。",
           new_tanlan_info:"锁定技，每当一名武将牌上有不详标记的角色死亡时，你回复一点体力，摸三张牌，并刷新技能:【莲华】。",          
           new_bianchi_info:"锁定技，回合开始时，你失去一点体力，然后摸X张牌，X为你已损失的体力值+2，出牌阶段，你使用【杀】的次数上限+1。",
           new_zaiqi_info:'摸牌阶段，若你已受伤，你可以改为展示牌堆顶的X张牌，X为你已损失的体力值+你装备区牌数的一半且向上取整，其中每有一张♥牌，你回复1点体力，然后弃掉这些♥牌，将其余的牌收入手牌。',
		       new_lianji_info:'出牌阶段限一次，你可以选择一张手牌并指定两名角色进行拼点，拼点赢的角色获得此牌，并对没赢的角色造成一点伤害；锁定技，你使用的非延时类锦囊牌不能被【无懈可击】响应。',
           new_jiedao_info:'你可以将一张♣牌当[借刀杀人]使用。',
           new_mengjin_info:'当你使用的【杀】被【闪】抵消时，你获得对方X张牌，X为你已损失的体力值，且至少为1；锁定技，你不能成为[乐不思蜀]的目标。',
           new_miaosuan_info:"锁定技，每当其他角色使用或打出一张非转化的普通锦囊牌时，你可以摸一张牌。",
	        	new_shenji_info:'任意一名角色的判定生效前，你可以打出一张牌替换之',
           new_shangshi_info:'锁定技，当你的手牌数小于X时，你立即将手牌补至X张（X为你已损失的体力值且最多为3）',
           new_jueqing_info:'锁定技，你即将造成的伤害均视为失去体力；在你的回合，除你以外，只有处于濒死状态的角色才能使用【桃】。',
           new_shenshi_info:'锁定技，回合结束时，你须弃置所有手牌，然后将手牌补至最大体力值，且不超过4。',
           new_longyin_info:'每当一名角色在其出牌阶段使用【杀】时，你可弃置一张牌令此【杀】不计入出牌阶段使用次数，若此【杀】为红色，你摸1~2张牌',
           new_wuji_info:'结束阶段，若你于此回合内造成过3点或更多伤害，你加1点体力上限并回复1点体力，然后从场上、牌堆或弃牌堆中获得【青龙偃月刀】',          
		       new_zhenlie_info:'每当你成为其他角色的卡牌的目标时，你可以流失一点体力取消之，然后获得对方一张牌',         
        		new_xingwu_info:'弃牌阶段开始时，你可以将一张与你本回合使用的牌颜色均不同的手牌置于武将牌上：若你有至少三张“星舞”牌，你移去“星舞”牌并选择一名其他角色，该角色受到3点伤害并弃置其所有牌，若其武将牌正面朝上则将其武将牌翻面。',
           baotou_info:"当你使用非转化的【杀】造成伤害时，你有25%的几率令此【杀】伤害+2。",
           heping_info:"你的攻击范围+2，使用【杀】时可额外指定一个目标。",
           new_juji_info:"出牌阶段，你可以对体力值低于2的一名其他角色造成2点伤害，每阶段限一次。",
           xionghan_info:"你的【杀】和【决斗】造成伤害+1。",
           new_juejing_info:'锁定技，摸牌阶段，你摸牌的数量改为你已损失的体力值+2；你的手牌上限+3；你的回合外，其他角色受到伤害或回复体力(来源不为你)时，你摸一张牌。',
           new_huangtian_info:'主公技，群雄角色可在他们各自的回合里给你一张♠或【闪电】。',
           new_xiongyi_info:'限定技，出牌阶段，你可以指定至多三名角色与你各摸三张牌，然后你增加一点体力上限并获得技能【猛进】；若你指定的角色数不超过2，你回复1点体力。',
             xinqiangxix_info:'出牌阶段，你可以自减一点体力或弃一张武器牌(若此时你体力值为1，则无需自减体力)，然后你对你攻击范围内的一名角色，弃置其装备区一张牌，并对其造成一点伤害，每回合限一次。',
	          	new_tianyi_info:'出牌阶段，你可以和一名角色拼点，若你赢，你获得以下技能直到回合结束：攻击范围无限；使用【杀】无数量限制；使用【杀】时可额外指定两个目标，若你没赢，你摸一张牌，你不能使用【杀】直到回合结束。每回合限一次。',
		        new_liegong_info:'你的【杀】可选择手牌数大于你的角色为目标，当你使用【杀】指定一个目标后，你可以根据下列条件执行响应的效果，1、若目标的手牌数大于等于你的体力值，或体力值小于等于2，此【杀】不可被【闪】响应，2、其装备区牌数不小于你，此【杀】伤害*2。',
           xin_yongsi_info:'锁定技，摸牌阶段，你额外摸X张牌，X为场上现存势力数。弃牌阶段，你至少须弃置等同于场上现存势力数的手牌（不足则全弃）。',
          leidian_info:"出牌阶段，你可以将一张♠花色的牌当【闪电】置于武将牌上。",
	         	xinguidaox_info:'任意一名角色的判定生效前，你可以打出一张牌替换之。',
            leishen:'雷神',
		        leishen_info:'锁定技，你防止即将受到的雷电伤害，若你已受伤，则改为回复X点体力，否则你摸X张牌，X为即将受到的火焰伤害的数值。',
            mubing_info:"锁定技，你的回合外，其他角色的装备牌从装备区失去时，若你装备区没有该类别装备牌，则你可以获得之。",
	          	tengjiax_info:'你视为装备了“藤甲”，【南蛮入侵】、【万箭齐发】和普通【杀】对你无效。你每次受到火焰伤害时，该伤害+1。',
            manbing_info:"出牌阶段，你可以将一张装备牌当【南蛮入侵】使用",
            xin_luanji_info:'出牌阶段，你可以将任意两张相同花色的手牌当【万箭齐发】使用；锁定技，当你使用转化型的【万箭齐发】对一名角色造成伤害时，你可令其进行一次判定，若判定结果为♥或♦，你摸一张牌，否则该角色摸一张牌。',
            new_shensu_info:"锁定技，当你使用一张非转化的【杀】指定目标且结算后，视为你再对其使用一张【杀】。",
            xinhaoshi_info:'摸牌阶段，你可以额外摸2+X张牌，X为等于你装备区牌数量的一半且向下取整，若此时你的手牌数多于6张，你必须将一半(向下取整)的手牌交给场上除你外手牌数最少的一名角色。',
           xinyinghun:'英魂',
		       xinyinghun_info:'准备阶段开始时，若你已受伤，你可令一名其他角色执行一项：摸X张牌，然后弃置一张牌；或摸一张牌，然后弃置X张牌（X为你已损失的体力值+装备区牌数量的一半(向上取整)，若你装备区里牌的数量不小于你的体力值，则X改为你的体力上限）',
            xinkuanggux_info:'锁定技，当你对一名角色造成1点伤害后，若你已受伤，则你回复1点体力，否则你摸1张牌；你使用【杀】次数上限+1，你的进攻距离+1',
            xinduanliangx_info:'其他角色从牌堆摸牌不小于两张时，你可以令其少摸一张牌，若其摸超过两张牌时，你摸一张牌。',
            xinbuqu:"不屈",
            "xinbuqu_info":"锁定技，当你处于濒死状态时，亮出牌堆顶的一张牌并置于你的武将牌上，若此牌不为点数大于8的♣，则你回复至1体力。否则将此牌置入弃牌堆；只要你的武将牌上有牌，你的手牌上限便与这些牌数量相等。",
            xinfenji:"奋击",
            "xinfenji_info":"每当一名角色的牌于回合外被弃置时，你可以受到一点伤害，然后该角色摸两张牌。",
            qimen:"修行",
            "qimen_info":"锁定技，每当受到伤害或流失体力时，你随机获得未加入本局游戏的武将的一个技能（主公技、觉醒技除外）。",
            dunjia:"六甲",
            "dunjia_info":"锁定技，你每次受到伤害时，最多承受1点伤害（防止多余的伤害)",
            sqianxun:"谦逊",
            "sqianxun_info":"锁定技，每当你成为[铁索连环]或[乐不思蜀]的目标时，你取消之。",
            slianying:"连营",
            "slianying1":"连营",
            "slianying2":"连营",
            "slianying3":"连营",
            "slianying_info":"1、每当你手牌数少于3时，你可以将手牌补至3张；2、你对目标造成伤害时，可将其武将牌横置；3、锁定技，你为来源的伤害均视为火焰伤害。",
            xinyanzhu:"宴诛",
            "xinyanzhu_info":"出牌阶段限一次，你可以令一名有牌的其他角色弃置X张牌，X为1~2的随机值。",
            xinxingxue:"兴学",
            xinxingxue_info:"结束阶段开始时，你可以令1~3名角色依次摸两张牌并将两张牌置于牌堆顶。",
            xinzhaofu:"诏缚",
            xinzhaofu_info:"主公技，锁定技，其他吴国势力角色杀死目标后，你增加一点体力上限。",
            xinshenxian:"甚贤",
            "xinshenxian_info":"每名其他角色的回合限一次，当有其他角色因弃置而失去牌时，其中每有一张基本牌，你可以摸一张牌。",
            fengzhan:"风斩",
            "fengzhan_info":"你使用【杀】或【决斗】对目标造成伤害时，若你的疾风标记不少于3，你可以弃置3枚疾风标记令伤害+1，并弃置剩余疾风标记摸等量的牌，然后将受到此伤害的目标武将牌翻面(若目标武将牌背面朝上，则不会响应此次翻面)。",

            fengqiang:"风墙",
            "fengqiang_info":"锁定技，当你即将受到不为【杀】或【决斗】的伤害时，若你的疾风标记的数量不少于2，你弃置2枚疾风标记，防止该伤害。",
            jifengx:"疾风",
            "jifengx_info":"锁定技，你回合开始和结束时，都可获得1枚疾风标记，称为“风”，疾风标记的上限为5。",
            "xinjiuchi_info":"你可将你的任意一张♠或♣牌当【酒】使用。",
            "xinroulin_info":"你对女性角色、女性角色对你使用【杀】时，都需连续使用两张【闪】才能抵消。",
            "xinbenghuai_info":"结束阶段，若你的体力不是全场最少的(或之一)，你失去一点体力。",
            new_baonue_info:"主公技，其他群雄角色每造成一次伤害，可进行一次判定，若为♠或♣，你回复1点体力。",
            "xintiaoxin_info":"出牌阶段限一次，你可以指定一名你在其攻击范围内的其他角色，该角色需对你使用一张【杀】，否则你弃置其X张牌，X为其装备区牌的数量，且至少为1。",
            "xinxiangle_info":"锁定技，当其他玩家使用【杀】、【决斗】、【顺手牵羊】、【过河拆桥】指定你为目标时，需额外弃掉一张基本牌，否则该【杀】、【决斗】、【顺手牵羊】、【过河拆桥】对你无效。",
            "xinfangquan_info":"你可跳过你的出牌阶段，若如此做，在回合结束时可弃一张手牌令一名其他角色进行一个额外的回合。",
            "xinruoyu_info":"主公技，觉醒技，准备阶段，若你的体力是全场最少的(或之一)，你须增加1点体力上限，回复1点体力，并永久获得技能“激将”。",
            "xinqiaobian_info":"你可以弃一张手牌来跳过自己的一个阶段(回合开始和结束阶段除外);若以此法跳过摸牌阶段,你可以从其他至多两名角色手里各抽取一张牌;若以此法跳过出牌阶段,你可以将场上的一张牌移动到另一个合理的位置。",
            "xintuntian_info":"每次当你于回合外失去牌或受到伤害时，可以进行一次判定，若结果为♥你获得之，将非♥结果的判定牌置于你的武将牌上，称为“田”，每有一张田，你的进攻距离+1。",
            "xinzaoxian_info":"觉醒技，准备阶段，若田的数量达到3张或更多，你须减1点体力上限，并永久获得技能“急袭”。",
            "xinjixi_info":"出牌阶段，你可以把任意一张田当【顺手牵羊】使用。",
            "xinjiang_info":"锁定技，每当你使用（指定目标后）或被使用（成为目标后）一张【决斗】或红色的【杀】时，你可以摸一张牌，你使用黑色的【杀】指定目标后，你令其弃置一张牌。",
         
            "new_zhijian_info":"出牌阶段，你可以将你手牌中的一张装备牌置于一名其他角色装备区里（不得替换原装备），然后摸1~2张牌。",
            "new_guzheng_info":"其他角色的弃牌阶段结束时，你可将其弃置的一张牌返回其手牌，然后获得其弃置的其它牌，锁定技，你的手牌上限+1。",
            new_beige_info:"一名角色每受到【杀】造成的一次伤害，你可以弃一张牌，并令其进行一次判定，判定结果为：♥该角色回复X点体力；♦︎该角色摸2×X张牌；♣伤害来源弃2×X张牌；♠若伤害来源武将牌正面朝上，则令其武将牌翻面，然后你摸X张牌，X为该角色受到伤害值。",
            "xinduanchang_info":"锁定技，杀死你的角色失去一点体力上限和当前的所有技能直到游戏结束。",
            xinxuanfeng:"旋风",
            "xinxuanfeng_info":"当你失去装备区里的牌时，或于弃牌阶段弃置了一张或更多的手牌后，你可以依次弃置一至两名其他角色的共计两张牌。",
            xinfangzhu:"放逐",
            "xinfangzhu_info":"你每受到一点伤害，可令除你以外的任一角色补X张牌，X为你已损失的体力值，然后该角色将其武将牌翻面。",
            "xinxingshang_info":"锁定技，一名其他角色死亡时，你可以从弃牌堆随机获得一张♥牌，然后立即获得死亡角色的所有牌。",
            "xinsongwei_info":"主公技，其他魏国势力角色的判定牌结果不为♦且生效后，可以让你摸一张牌。",
            "shenshe_info":"锁定技，你攻击范围无限，你视为拥有[麒麟弓]和[诸葛连弩]的技能。",
            "xinjushou_info":"结束阶段开始时，你可以摸2+X张牌，然后将你的武将牌翻面，X为场上存活角色的数量。",
            zhewu:"折舞",
            "zhewu_info":"锁定技，你使用[杀]的次数上限+2；你的[杀]或[决斗]对目标造成伤害时，你可以摸一张牌。",
            zhufeng:"逐锋",
            "zhufeng_info":"你使用[杀]对目标造成伤害时，若对方当前体力值等于X或更低，此[杀]伤害+X，X为其最大体力值的1/3且向下取整，每阶段限一次。",
            kuangzhan:"狂战",
            "kuangzhan_info":"锁定技，游戏开始时，你获得一枚狂战标记，每当你造成或受到一点伤害时，获得一枚狂战标记。",
            wuwei:"无畏",
            "wuwei_info":"锁定技，回合开始时，若你的狂战标记超过三枚，你弃置三枚狂战标记，然后回复一点体力并摸两张牌。",
            jiqu:"汲取",
            "jiqu_info":"锁定技，任何时候，每当你对任意角色造成一点伤害，若你已受伤，你回复一点体力值，获得对方一张牌，一次无论造成多少点伤害，只能获得一张牌。",
            jingu:"禁锢",
            "jingu2":"禁锢",
            "jingu_info":"你对目标造成带属性的伤害时可令其跳过出牌阶段一个回合。",
            zhuanzhu:"专注",
            "zhuanzhu_info":"你使用【杀】对目标造成伤害时，你可以令此【杀】有几率造成两倍伤害，锁定技，你手牌上限+2，攻击范围+2。",
            bingjianx:"冰箭",
            "bingjianx2":"寒冰",
            "bingjianx_info":"当你使用【杀】指定一名角色为目标后，若其装备区有牌，你可以弃置其一张装备牌，将“寒冰”标记置于其武将牌上，(寒冰：你计算与其他角色距离+2，其他角色与你计算距离-2，造成伤害后失去该标记)，若其武将牌上有“寒冰”标记，你不能触发此技能。",
            "feijiang_info":"主公技，群雄角色可在他们各自的回合里给你一张【杀】、【决斗】和【酒】。",
            "jieyi_info":"出牌阶段，你可以选择两名男性角色，令若其已受伤，则回复一点体力，否则摸一张牌，然后你累计摸两张牌，并获得技能“武圣”、“咆哮”、“仁德”直到回合结束，每阶段限一次。",
            "xinhujia_info":"主公技，当你需要使用(或打出)一张【闪】时，你可以发动护驾。所有魏势力角色按行动顺序依次选择是否打出一张【闪】“提供”给你(视为由你使用或打出)，直到有一名角色或没有任何角色决定如此做时为止，为你打出【闪】的该角色可以摸一张牌。",
            "xinjianxiong_info":"你可以立即获得其他角色造成伤害的牌；弃牌阶段内，你的【杀】、【南蛮入侵】和【万箭齐发】不计入手牌数。",
            "xinfankui_info":"每当你造成或受到一点伤害后，可以获得对方一张牌。",
            "xinguicai_info":"在任意角色的判定牌生效前，你可以打出一张手牌代替之，然后摸一张牌。",
            "xinganglie_info":"每当你受到一次伤害，可进行一次判定，若结果为♥，你摸X张牌，否则伤害来源须弃置X×2张手牌或受到来自你的X点伤害(X为你受到的伤害数值)。",
            "xintuxi_info":"摸牌阶段，你可以放弃摸牌，然后抽取一名其他角色一张牌，你至多可以发动2+X次，X等于你装备区牌的数量的一半且向下取整。",
            "xinluoyi_info":"摸牌阶段，你可以少摸一张牌，若如此做，直到你的下一回合开始，你获得技能【无双】，你为伤害来源的【杀】或【决斗】造成的伤害+1，且你为伤害来源的【杀】或【决斗】每造成一点伤害你摸一张牌。",
            "xinyiji_info":"每当你受到一点伤害，可以观看牌堆顶的2+X张牌(X为你装备区牌的数量的一半(向下取整))，可将其任意交给1~(2+X)名其他角色；你死亡时，可以令一名其他角色（杀死你的角色除外）体力上限+1，并令其回复1点体力。",
            "xinluoshen_info":"准备阶段和结束阶段，你可以进行一次判定，若为♠或♣则可以继续判定，直到出现红色。然后你获得所有♠和♣的判定牌。",
            "xinqingguo_info":"你可以将一张♠花色的手牌当[闪]使用或打出。",
            "xinrende_info":"出牌阶段，你可以将任意手牌送给其他角色，若送出的手牌不少于两张，你回复1~2点体力。",
            "xinjijiang_info":"主公技，每当你需要使用或打出一张杀时，你可以令其他蜀势力角色选择是否打出一张杀（视为由你使用或打出），若有角色为你打出杀，你可以摸一张牌。",
            "xinwusheng_info":"你可以将一张红色牌当[杀]使用，若如此做，你摸一张牌，你获得青龙偃月刀的技能直到你的下一回合开始。",
            "xinpaoxiao_info":"锁定技，出牌阶段，你使用[杀]无数量限制，每当你使用或打出[杀]可亮出牌堆顶的1~2张牌，你获得其中的装备牌、[过河拆桥]和[杀]，并展示之。",
            "xinguanxing_info":"准备阶段，你可以观看牌堆顶的x张牌，并将其以任意顺序置于牌堆项或牌堆底，x为存活角色个数，且至少为5。",
            "xinkongcheng_info":"锁定技，当你没有手牌时，不能成为[杀]、[决斗]、[万箭齐发]、[南蛮入侵]、[火烧连营]、[过河拆桥]、[顺手牵羊]和[水淹七军]的目标。",
            "xinlongdan_info":"你可以将[杀]当[闪]，或[闪]当[杀]使用或打出，每当你发动技能“龙胆”时，可亮出牌堆顶的X张牌，X等于1加上你已损失的体力值的一半且向下取整，且不超过3，然后你获得其中的基本牌并展示之。",
     
            "xintieji_info":"你使用一张[杀]指定目标时，你可以弃置其两张牌。",
            "xinjizhi_info":"每当你使用或打出一张非转化的锦囊牌，你可亮出牌堆顶的2~3张牌，然后获得其中的锦囊牌并展示之。",
           
            "xinzhiheng_info":"出牌阶段，你可以弃置任意张♥或♦牌并摸等同于你弃置牌数两倍的牌，每阶段限一次。",
            "xinjiuyuan_info":"主公技，锁定技，其他吴势力角色对处于濒死状态的你使用[桃]回复的体力+2。",
            "xinqixi_info":"你可以将一张红色牌当[顺手牵羊]使用；黑色牌当[过河拆桥]使用。",
            "xinkeji_info":"锁定技，若你在出牌阶段没有使用[杀]，则你可以摸一张牌并跳过弃牌阶段。",
            "xinkurou_info":"出牌阶段，你可以流失一点体力并摸3张牌。",
            "xinyingzi_info":"摸牌阶段，你可以额外摸一张牌，你的手牌上限+2+X，X等于你装备区牌的数量的一半且向上取整；你不能成为[兵粮寸断]的目标。",
            
            "xinguose_info":"你可以将一张♥或♦牌当[乐不思蜀]使用，指定目标后，你获得其一张手牌。",
            "xinliuli_info":"当你成为[杀]、[决斗]、[兵粮寸断]和[乐不思蜀]的目标时，可以弃置一张牌将其转移给你攻击范围2以内的一名其他角色，此角色不能是使用者。",
            "xinqianxun_info":"锁定技，你不能成为[火攻]、[顺手牵羊]和[乐不思蜀]的目标。",
            "xinlianying_info":"每当你手牌数量少于X张，可将手牌补至1+X张，X等于你装备区牌数量的一半且向下取整。",
            "xinxiaoji_info":"每当你失去一张装备牌，可以摸X张牌，X等于2加上你当前装备区牌的数量的一半且向上取整。",
            "xinjieyin_info":"出牌阶段，你可以弃置两张牌并选择1名已经受伤的男性角色，你与其各回复一点体力，若你未受伤，你可以摸一张牌，每阶段限一次。",
            "xinqingnang_info":"出牌阶段，你可以选择一名已受伤角色令其弃置一张牌，然后回复一点体力，每阶段限一次。",
            xinjijiu_info:"你可以将一张♥牌当[桃]使用；当一名角色濒死时，你可以进行一次判定，若结果为♥或♦，令其回复至1点体力值，否则你摸一张牌。",
          
            "xinbiyue_info":"结束阶段，你可以摸1+X张牌，X为你装备区牌的数量的一半且向下取整。",
            "boss_shisi":"视死",
            "boss_shisi_info":"锁定技，你不能成为延时类锦囊的目标。",
            zhiming:"致命",
            "zhiming_info":"锁定技，你的【杀】可以造成1~4倍伤害。",
            shanbi:"闪避",
            "shanbi_info":"每当你成为【杀】的目标时，你有60%的几率取消之，并弃置对方一张牌。",
            jiandao:"剑道",
            "jiandao_info":"你使用【杀】和【过河拆桥】指定目标数上限+3，次数上限+1。",
            baoji:"暴击",
            "baoji_info":"锁定技，每当你使用[杀]或[决斗]即将对目标造成伤害时，你有(30+(暴怒标记数量×0.03))%的几率令此伤害翻倍。",
            nuqi:"嗜血",
            "nuqi_info":"锁定技，结束阶段，若你已受伤且\"暴怒\"标记不少于3枚，你弃置3枚\"暴怒\"标记，回复一点体力。",
            chenmo:"沉默",
            "chenmo2":"沉默",
            chenmox:"沉默",
            "chenmo_info":"当你使用【杀】指定一名角色为目标后，你可以令该角色的所有技能失效直到其下一回合开始。",
            chenmox_info:"当你使用【杀】指定一名角色为目标后，你可以令该角色的非锁定技能失效直到其下一回合结束。",
            zhengyi:"正义",
            "zhengyi_info":"锁定技，你的【杀】指定体力值不大于1的目标时，此【杀】不可被闪避，且此伤害+1。",            
            xunjie:"迅捷",
            "xunjie_info":"锁定技，你计算与其他角色的距离时，始终-1；只要你的体力值为2点或更低，其他角色计算与你的距离时，始终+1。",
            jielue:"劫掠",
            "jielue_info":"锁定技，你回合结束或对其他角色造成伤害时，抽取每名敌方角色一张牌；你的手牌上限不会因体力值的减少而减少；你使用【杀】的次数上限+1。",
            zhimang:"致盲",
            "zhimang2":"致盲",
            "zhimang_info":"出牌阶段限一次，你可以将一张♠或♣花色手牌置于一名角色的武将牌上，然后你摸一张牌，该角色下一次使用【杀】或【决斗】时无效，并弃置X张牌，X为该角色牌数的一半且向上取整，且至少为1",
            liuxing:"流星",
            "liuxing_info":"锁定技，只要你的体力值大于等于2点，你的攻击范围+1；只要你的体力值为2点或更低，其他角色计算与你的距离时，始终+1。",
            shuangdiao:"双雕",
            "shuangdiao_info":"当你使用杀造成伤害后，可以弃置1张手牌对一名距离受伤害角色1以内的其他角色造成2点火焰伤害。",
            shangjin:"赏金",
            "shangjin_info":"锁定技，摸牌阶段，你可以额外摸一张牌，你的手牌上限+1。",
        }, 
},
},files:{"character":["xiongnu.jpg"],"card":[],"skill":[]},editable:false,
})