game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"秦时明月",editable:false,content:function (config,pack){
	if(config.qinshimingyue){
		for(var i in lib.characterPack['qinshimingyue']) {
			if(lib.character[i][4].indexOf("forbidai")<0) lib.character[i][4].push("forbidai");
		};
	};
},precontent:function (qinshimingyue){
	if(qinshimingyue.enable){
		
		game.import('character',function(){
			var qinshimingyue={
				name:'qinshimingyue',
				connect:true,





				
			character:{
					
            MYxichubawang:["male","shu",4,["MYchongfeng","MYziwen"],["des:项氏一族，曾与刘邦\"楚汉争霸\"，力能举鼎，才智过人。深爱着虞姬，战败于乌江而自刎。"]],
            MYheiqilin:["none","wu",3,["MYyirong"],["des:有\"墨玉麒麟\"之称，卫庄手下刺客团逆流沙（流沙组织之一）的第一杀手。春秋时期神隐之女，行踪莫名，据闻可变换千种容颜。潜入各种隐秘之所，世间无她所不知，无她所不晓，更无人见过其真面目，千种变化亦为其千种身份，行踪诡异，不可捉摸。作为韩国刺客团的第一杀手，卫庄对他的赏识几乎无以复加，曾誉其为“天下第一杀手”。"]],
            MYxufuzi:["male","shu",4,["MYzhujian","MYzengqi"],["des:著名的铸剑师，精通采五金融和青铜的冶剑技术，剑谱排名第七的水寒剑就是出自他的手中。“残虹”（渊虹的前身）是他母亲的作品，而“鲨齿”是他父亲的作品，二人都是有名的铸剑师。他一直渴望在有生之年，能够炼出一把超越残虹的神兵利刃。"]],
            MYduannurong:["female","shu",3,["MYyixian","MYyinzhen"],["des:清丽脱俗，淡雅秀逸，气质清冽如霜，容色绝佳，翩如轻云蔽月，婉若流风回雪。医术高超，墨家医仙，墨家六首领之一，独居在风景秀丽的镜湖药庄，武器是银针。对来自秦国的盖聂有强烈的敌意，深入接触后作为一个医者却逐渐对盖聂产生爱慕之情。后在墨家大厅中为救盖聂而身受重伤昏迷，醒来后……"]],
            MYzhaogao:["male","wei",3,["MYnongquan","MYluowang","MYliujiannu"],["des:秦时明月第四部《万里长城》里登场的人物，诡计多端，阴谋之下谁又是他的棋子，罗网刺客团便为其效命。"]],
            MYchilian:["female","wu",3,["MYshedu","MYhuomeishu"],["des:卫庄手下四天王之二。爱慕卫庄，妩媚妖娆的她精通各类毒术，可以控制各类毒蛇。而她的性感往往比毒药更加危险，她的火魅术可以迷惑看见她双瞳的人，使之产生幻觉。"]],
            MYciyage:["male","wei",4,["MYziya","MYhunao"],["des:虽然是个菜鸟，但为了“秦时明月”而不断努力。"]],
            MYdatiechui:["male","shu",4,["MYleishenchui"],["des:身材异常魁梧，墨家中性格最为急躁爆烈的男子，墨家六首领之一。使用一柄带有链条的巨型大铁锤，原本是燕国的下级军官，由于脾性难以与同僚相处，屡遭迫害，险些在战场上作为诱饵牺牲掉，被墨家巨子救出，从此死心塌地追随。"]],
            MYshengqi:["male","wu",4,["MYjuque"],["des:因被诬陷而逐出农家，此人多次被七国捕获，入狱后又屡次在法场行刑时将刽子手杀死逃离。江湖中见其人如见鬼神。冷血、残忍，将打败所有强者作为人生目标，败在他手下的剑客数不胜数。他在七国被捕时，身上就被刻下七国的文字，被嬴政捕获。后嬴政听取李斯建议，放他出来追杀盖聂和天明。此人便是后来大泽乡起义的陈胜。"]],
            MYbaifeng:["male","wu",4,["MYliuhuan","MYjuniao","MYyuren"],["des:有\"白凤凰\"之称，卫庄手下四天王之首。神秘的美男子。时常驾驭着白色的巨鸟在天空飞过，轻功卓越，能够借助羽毛在天空翱翔。可以控制鸟类，甚至能对话。用羽毛袭击人或是控制鸟类袭击人，偶尔用羽刃。绝杀技为凤舞六幻。"]],
            MYdaozhi:["male","shu",4,["MYdaosheng","MYdianshenbu"],["des:历史中原名展雄，又名柳下跖，为春秋、战国之际的奴隶起义领袖。剧中为墨家六首领之一。天下第一神偷，身材纤瘦，擅长飞檐走壁，轻功卓越，生性油滑，单恋端木蓉。虽然嘴巴不干净，但危难时刻绝不临阵脱逃，讨厌孔子以及儒家的那些大道理，绝招电光神行步。他得了癫痫时被端木蓉所救。爱慕端木蓉。"]],
            MYgaojianli:["male","shu",4,["MYbingdun","MYyishuihan"],["des:墨家第二高手，其武功次于墨家巨子（燕太子丹）。墨家六 首领之首。被墨家众人称作“小高”。气质忧郁高雅其击筑曲目“阳春”与雪女的箫声“白雪”合称“阳春白雪”在燕国堪称一绝。当年与荆轲一见如故，结为知己，后易水河畔一首“风萧萧兮易水寒，壮士一去兮不复还。”流传千古，使用武器为名剑水寒，剑谱第七，绝杀技为易水寒。和雪女生死相随，感情深厚极敬重大哥荆轲。　"]],
            MYlongju:["male","wei",4,["MYshisi","MYmashu"],["des:楚汉争霸时项羽手下的第一猛将，自幼与项羽一同长大，情同手足同样是一位霸气美少年，秦时明月第四部出场，主要是和项少羽的成长故事。"]],
            MYxuenv:["female","shu",3,["MYlingbo","MYfeiyan","MYbaixue"],["des:清丽脱俗，绝美倾城，艳绝天下，墨家五首领之一。有一副倾城容貌，精通吹箫与赵舞。她的《白雪》乐曲高雅灵动，吹奏时会漫天飞雪。赵舞独步天下，绝技“凌波飞燕”被雁春君称为是“燕国都城的传说”。是高渐离的红颜知己和深爱的人，立誓终生不嫁。"]],
            MYshaoyu:["male","shu",4,["MYpojia","MYwanrendi"],["des:少年项羽，楚国名将项燕之孙，项超之子，天赋异禀，有千斤拔鼎之神力。智勇双全，但很恐高，在高月的帮助下已经克服。年纪虽小，临阵决敌却已有大将之风，是天明的好朋友，同时也是竞争对手。在《夜尽天明》中，于墨家禁地得到破阵霸王枪。"]],
            MYlisi:["male","wei",4,["MYjiedang","MYhuzhi"],["des:字通古，秦国宰相，法家传人，也曾为儒家荀子的弟子，后因害死韩非，被荀子厌恶。处事干练，心思慎密。提出“以江湖对江湖”的计策，诱使卫庄出山对付盖聂。一心辅佐秦王统一天下。"]],
            MYzhangliang:["male","qun",3,["MYmoushi","MYruya"],["des:字子房，天资聪慧，未卜先知，与墨家和项氏一族共同抗秦。虽身为儒家弟子，却与墨家慷慨济世的教义相投。"]],
            MYjingke:["male","qun",4,["MYyiyong","MYcisha"],["des:荆天明的父亲，高渐离的好友。战国末期卫国人，喜好读书击剑,为人仗义豪爽，结识了许多豪侠义士。后受燕太子丹之托入刺杀秦王，未遂，被秦始皇手下四大高手“风林火山”所杀。临终前将天明托付给盖聂。"]],
            MYjiruqianlong:["female","qun",3,["MYtianfu","MYjuenian"],["des:在阴阳巫术方面有着非比寻常的天赋，与天明互相爱慕，因阴阳天赋极高而被阴阳家月神带走，被东皇太一告知其真名姬如千泷，与阴阳家有莫大的关系。"]],
            MYcanglangwang:["male","wu",3,["MYlangqun","MYyehou"],["des:卫庄手下四天王排名三。一身黑衣，性情孤僻凶残，狂野坚忍，与狼共居，喜欢在黑夜里行动。始终戴着半截绿眼面具，拥有和狼一样的夜视能力。他曾经为韩废王姬安（因为是韩氏所以亦称韩安）效命，韩国灭亡后神秘失踪，之后加入了卫庄的刺客团。他憎恶人类，只和狼群亲近，认为狼是唯一的朋友。被高渐离所杀。"]],
            MYwushuanggui:["male","wu",3,["MYroujia","MYchongzao"],["des:卫庄手下四天王排名第四。一丈多高的巨人，凶狠残暴，形状恐怖，天生怪力，皮肤坚硬如盔甲，寻常刀剑无法伤及。无双鬼在秦时明月第一部百步飞剑中被盖聂杀死后，公输仇见无双鬼的骨骼、肌肉格外强硬，很适合做机关，便把无双鬼改造成了机械人，即机关无双。"]],
            MYguiguzi:["male","qun",4,["MYzongheng","MYbaihe"],["des:鬼谷子原名王诩，纵横家，鬼谷派。江湖中泰山北斗级的前辈人物，盖聂与卫庄的师傅，传授其武功后神秘消失。 纵横家上一任的掌门人。因隐居鬼谷之中，而被称为“鬼谷子”。其人精通纵横之术，对兵法、奇门八卦、天文地理都广有涉掠。"]],
            MYyinfu:["male","wu",4,["MYshitong","MYfuxieshu"],["des:真实年龄不明，原是蛮疆土人，后被父母抛弃山林，流离与乱世，十年来一直隐居南疆修习蝠血术。蝠血术是一种南疆秘传杀人术，修炼时需将蝠血注入体内运转至周身经脉各处。隐蝠这十年来每天与南疆矛头血蝠生活在地穴之中，如今已是个半人半蝠的怪物。"]],
            MYweizhuang:["male","wu",4,["MYhengjian","MYliusha"],["des:盖聂同门师弟，同样是鬼谷派纵横剑法的传人，聚散流沙首领。鬼谷派是一个奇特而又神秘的门派，每一代只收两名弟子，而这两名弟子从一开始就是敌对，他们中间必定要决出胜负，最后只有一个人能留下。浑身充满邪气与霸气，武功深不可测，最大的目标就是击败盖聂，继承鬼谷绝学。他使用的武器是妖剑鲨齿。在张良的帮助下，流沙与墨家合作抗秦。"]],
            MYchunangong:["male","qun",3,["MYhaoyan","MYnance"],["des:昔日楚国第一贤者，楚亡国之时曾说过：“楚虽三户，亡秦必楚”这般的豪言壮语。然而如今，不知为何他竟摇身一变，俨然成了李斯的门客，似乎与星魂不和。"]],
            MYdonghuangtaiyi:["male","qun",4,["MYdadao","MYwuji"],["des:阴阳家最高头领，武功深不可测，谜一般的人物，人前总是带着黑色的面具，一身黑袍遮身，似乎是终极BOSS。"]],
            MYdasiming:["female","qun",3,["MYxueshou","MYliuhunzhou"],["des:大司命与少司命同为阴阳家一等一的高手。妩媚妖娆，因练阴阳合手印导致双手呈红色，也增添了阴阳家的诡异神秘感。出手辛辣狠毒，计谋充足。前任墨家巨子燕太子丹就死于此人之手。"]],
            MYbandashi:["male","shu",4,["MYjiguan","MYmuniao"],["des:善于机关术，墨家六首领之一。木匠出身。由于幼年的一次意外导致失去一条手臂，从此开始钻研和制造各种机关。他第一件成功的作品就是为自己造了一条机关手臂。他的愿望是制造出飞行的机关鸟，为此做了大量的实验，失败过多次之后最终获得成功。"]],
            MYgongshuchou:["male","wei",4,["MYbadao","MYzhugong"],["des:霸道机关术新一代掌门人。据传他对机关术的精通程度，已经接近公输家族的祖师爷——公输盘大师（鲁班）。为人阴险狡诈，造出了蛇形机关兽。公输仇把机关杀伤力的进攻部份极度强化，这就是所谓的霸道机关术。"]],
            MYgenie:["male","wei",4,["MYzongjian","MYjiansheng"],["des:纵横家，鬼谷派，气质从容淡定， 处事冷静。被称为秦国最强剑客，在江湖上享有剑圣的名号，但却因故人所托保护天明，从秦国叛逃，带着天明，亡命天涯。剑术出神入化，佩剑渊虹（前身是墨家的残虹剑，曾是荆轲佩剑）。因他护驾有功嬴政将渊虹赐给他。绝杀技为百步飞剑，与端木蓉相互爱慕。渊虹是十大名剑之第二名剑（已被卫庄的鲨齿折断），暂用木剑。"]],
            MYgaoyue:["female","shu",3,["MYconghui","MYyinlu"],["des:天真可爱，温柔婉约。是已亡国的燕国公主（封号高月公主）。和普通人一样过着平常生活，但言谈举止间却有一股与生俱来的高贵气质，她精通药理，是端木蓉的得力帮手。"]],
            MYyueshen:["female","qun",4,["MYyuzhi","MYzhouyin"],["des:秦始皇最信任的阴阳家大巫。精通占星，具有预感能力，同时还有控制他人精神和未可知强大破坏力，对天明下了阴阳咒印。"]],
            MYtianming:["male","shu",4,["MYkaoji","MYjuexing"],["des:为人精灵古怪而又有些不知天高地厚，会一些三脚猫的功夫。他迷离的身世牵动着整片大地的风云变幻。他的父亲是绝顶剑客荆轲，母亲是美貌的丽姬，不过他后来对盖聂敬仰，渐生父子之情。"]],
            MYxinghun:["male","qun",3,["MYquhun","MYjuqi","MYchengren"],["des:堪称少年天才的阴阳家传奇人物，无论在武学修为上还是阴阳数术方面都已达到了常人穷尽一生努力都无法到达的高度，因此他小小年纪已拥有极高的地位，与月神并列帝国两大护国法师之位。"]],
            MYshaosiming:["female","qun",3,["MYguiye","MYwuyan"],["des:阴阳家令人闻名丧胆的死亡使者之一。性情冷漠，有着与年龄不相符的高深武功。总是以面纱遮面，传说她美若天仙，但这世上还没有人见过她面纱之下的真实面目。"]],
            MYyingzheng:["male","wei",4,["MYjiquan","MYbaye"],["zhu","des:嬴姓，赵氏，名政。中国第一个统一天下的皇帝。自从十三岁即位后，二十二岁举行成年冠礼后，他以卫鞅、韩非子的法家学说为主，又兼采阴阳家和儒家学说帮助自己行政，开始了他野心勃勃，兼并六国一统天下的征服之旅。身材不高，颇有气度，善用各国能人作为秦的重臣，赏罚分明，对有功者奖赏优厚慷慨，对违法者极度残忍严酷。"]],
            MYgongsunlinglong:["female","wei",3,["MYmianju","MYyanbian"],["des:能言善辩的名家继承人。公孙龙的后人，身形庞硕，说话却矫揉造作，喜欢以面具掩面，对自己的美貌甚为自信，这一点往往让旁人哭笑不得，最忌讳别人说自己胖。擅长用“白马非马”的诡辩之说让众多学术家百口莫辩。后被子明（天明）的歪理（张良所授）打败。"]],
            MYyandan:["male","wei",4,["MYjituo","MYchuanren"],["des:燕王喜的儿子，高月公主的父亲。本为燕国太子，把希望寄托在荆轲能够刺杀嬴政，由于刺秦计划失败而携带妻女逃亡。后在路上假装被流沙组织卫庄杀死，之后以墨家巨子的身份出现，神秘莫测，神龙见首不见尾，世上没有几人知道他的真实身份。 在带领诸子百家的各路英雄前往墨家机关城救援的途中，因大意中了阴阳家火部长老大司命下的六魂恐咒，无法医治。最终将巨子之位传给了荆天明，之后选择独自留在崩溃的机关城里，随咒印发作而亡。"]],
            MYxiaoyaozi:["male","qun",4,["MYrenzong","MYtiandao"],["des:道家【人宗】掌门人，行踪飘忽，神龙见首不见尾。佩剑是十大名剑排名第六的雪霁。"]],
            MYkuangxiu:["male","qun",4,["MYzhiyin","MYqinxian"],["des:秦国著名乐师，高渐离的神交知己。是一个醉心于音乐，性格爽直而不韵事故的人。因为协助秦国叛将逃离国境而获罪，成为阶下之囚，前路命运岌岌可危，最终咬舌自尽而死。他的琴艺超凡绝伦，传说他弹琴时连空中的飞鸟也会落下来倾听，是《高山流水》曲谱在这世上的唯一传人。"]],
            MYyunzhongjun:["male","qun",4,["MYqishu","MYxiandan"],["des:阴阳家长老之一，醉心于丹药之术，并且小有成就，因此备受一心想要求取长生不老的秦皇所器重。"]],
            MYmengtian:["male","wei",4,["MYshuzhan"],["des:姬姓，蒙氏，名恬。出类拔萃的年轻武将，兵家，智勇双全，十七岁成名，屡获战功，个性张扬，喜欢夸张华丽的排场，手下的嫡系卫队都是清一色的红色盔甲，称为黄金火骑军。他南征北战，名震中原，深得秦始皇帝的重用。是“蒙家军”的首领。"]],
            MYxiadaojuzi:["male","shu",5,["MYxiayi","MYmogong"],["des:墨家巨子，体内有上任巨子所传的巨大内力。武器是在墨家禁地中得到墨门至尊武器“非攻”，后又从墨家巨子手中继承墨家信物“墨眉”，其领悟性极高。"]],
            MYpaoding:["male","shu",4,["MYjieniu","MYdaofa"],["des:憨厚开朗的大胖子，一位烧遍天下美食的名厨，可以一人包办儒家上下近千人的餐饮大事。他的解牛刀法不仅可以用来切菜，更是神秘莫测的高深武功，是墨家头领之一。"]],
            MYyanlu:["male","wei",4,["MYzhishu","MYhanguang"],["des:儒家第二高手，与师兄伏念、师弟张良并称齐鲁三杰。从小就一直生活在伏念耀眼的光辉之下，幸好他并没有强烈的争强斗胜之心，安之若怡，从无攀比之心，处世为人淡泊，有著孔子所遗留下来的品质。 "]],
            MYzhanghan:["male","wei",4,["MYjiansuo","MYyingwei"],["des:整体装束自然以酷劲十足的黑色为主，他锐利的眼神似乎总能够看透一切，窥破别人的一举一动。 作为继蒙恬之后，又一个备受器重的年轻将领，章邯与蒙恬家族显赫家世不同，他出身神秘，年纪轻轻却武艺高强，由他所率领的影密卫是秦始皇的贴身侍卫队。"]],
            MYshushanxiaoyu:["female","shu",3,["MYmeiwu","MYanfu"],["des:西蜀国人，族名石兰，有着本族的使命。项羽所深爱着的女人，那句\"虞兮虞兮奈若何！\"便体现了对她的感情。"]],
            MYshilan:["female","shu",3,["MYxiaosheng","MYhuadie"],["des:庖丁客栈中的打杂小伙计，外表柔弱不爱说话，但武功高强，轻功卓越，身手敏捷，出手速度极快，懂得巫术与少许的阴阳术。在看到海面的蜃楼后落下了眼泪，后来随天明、少羽来到蜃楼，寻找哥哥，以及完成她的使命。"]],
            MYhanxin:["male","wu",3,["MYzhanshen","MYbingxian"],["des:西汉开国功臣，中国历史上杰出的军事家，“汉初三杰”之一。韩信是中国军事思想“谋战”派代表人物，被后人奉为“战神”、“兵仙”，王侯将相韩信一人全任。"]],
            MYfunian:["male","wu",4,["MYtaie","MYzhangmen"],["des:儒家掌门人，推崇王道治国，独创圣王剑法，外形高雅，气度不凡，非常有深度和内涵。对于儒家学说和天下事有着强烈的使命感，并一直努力将儒家及儒家思想发扬光大。为人刚正不阿，有大将风范，佩剑为太阿，十大名剑之第三。"]],
            MYxiaomeng:["female","wei",3,["MYtianzong","MYxuandao","MYzhishui"],["des:道家天宗掌门，持有名剑秋骊，对事情无“讨厌”和“喜欢”的区分，不认同他人把生死看得太重。年纪虽轻但辈分极高，年少有为却极其傲慢，对周围的一切似乎不屑一顾。"]],
            MYyanji:["female","qun",3,["MYdongjun","MYjinwu","MYfenyan"],["des:位居阴阳家东君，地位在阴阳家首领东皇太一之下，和两大护法之上，实力深不可测。曾号称“阴阳术第一奇女”，是月神唯一忌讳的宿敌。 曾为了破解“苍龙七宿”的秘密而隐藏身份，接近在秦国做质子的燕丹，却与燕丹逐渐真正相爱，结为夫妻，甘愿放弃原有身份，跟随燕丹逃离秦国，成为燕国的太子妃，并生下高月（姬如千泷）。 燕国灭亡后成为阴阳家的囚犯，被软禁在蜃楼隐秘处的万年玄冰阵里，是门派内部谈论的禁忌。"]],
            MYxiangliang:["male","shu",4,["MYxiaoyong","MYshanzhan"],["des:楚国项氏一族，项羽的叔父，其人生性豪放，骁勇善战。楚灭后他凭借昔日在吴中的威望，广纳贤士、暗中招兵买马、训练子弟，为日后项家举事、成就霸业奠定了至关重要的基础。"]],
            MYfanzeng:["male","wu",4,["MYyushi","MYquanyan"],["des:七旬老者，是项少羽兵法上的启蒙老师，也是日后协助项少羽成就霸王职业的重要谋士，为人老谋深算、审时度势、洞察敏锐，可说是秦末不可多得的军事谋略奇才。"]],
            MYfusu:["male","wei",4,["MYzhushu","MYzhaoci"],["des:嬴姓，名扶苏，常称公子扶苏，秦始皇长子，扶苏刚毅勇武，信人而奋士，为人仁，有政治远见，经常劝谏其父亲，后因坑术士一事，触怒秦始皇，秦始皇便将其派到上郡监督军队，协助大将蒙恬修筑长城、抵御匈奴。秦始皇在巡游途中病逝，死前诏令扶苏即位，中车府令赵高和丞相李斯等人害怕扶苏登基后，对他们不利，于是扶始皇第十八子胡亥登基，矫诏以始皇身份赐死扶苏，扶苏遂自尽。"]],
            MYxunzi:["male","wu",4,["MYjunzhou","MYminshui"],["des:名况，字卿。是战国末期著名的思想家、文学家、政治家。秦时明月中的荀子治家，也是儒家继孔子和孟子之后的另一位儒学大家，更是两位法家著名代表人物李斯、韩非的授业老师。是一位仙风道骨、神清气俊的老者。现任儒家掌门伏念的师叔，儒家辈分最高的长者高人。精通围棋、喜好花草。然而脾气古怪，为人严苛，即使是身为掌门人的伏念和谨慎、温和的颜路有时也会被他骂得狗血淋头，反而对一向不按规矩办事的张良倒是颇为赞赏。"]],
            MYliujiannu:["none","wei",4,["MYzhengang","MYwangzhen"],["des: 六剑奴包括真刚、断水、乱神、魍魉、转魄、灭魂六人，六位一体，但是又各自为政，个性张扬，但是又绝对服从。赵高麾下“罗网刺客团”中的最得力的杀手小队。被赵高授以绝世名剑（主要是“越王八剑”），并从此以剑为名。<br>真刚：六剑奴中的领导人物，佩剑“真刚”，剑术刚猛，擅长正面直击。 六剑奴中属于杀戮者。刚猛无敌，摧枯拉朽，足以吸引敌人注意力。 有着分析对手的头脑能力。<br>断水：达到了心眼境界的蒙眼老者，六剑奴中最深不可测的一个，佩剑“断水”，谋定后动的计划制定者，擅长隐形技能，能取人性命于无形。六剑奴中属于隐藏者。他的气息完全被掩盖，隐者多虑，或者只是在等待一剑封喉的最好时机。<br>乱神：正如他的佩剑“乱神”那样周身透射着邪气的男人，他嗜血残忍，不屑于遵守人类的任何法则，可以为达目的不择手段，被这样的杀手盯上，怎么个死法都不会是种意外。六剑奴中属于助战者。就算挡得住杀戮者的第一轮，也应付不了这蛮横的第二波。<br>魍魉：佩双剑“魍”、“魉”的少年剑客，擅长轻功，剑法轻灵快速。为人落拓不羁，成为杀手也不过是为了游戏人生。六剑奴中属于投机者。鬼魅般边路旁敲侧击，防不胜防，左右了战局胜负。<br>转魄、灭魂：双胞姐妹，佩剑分别为“转魄”、“灭魂”，因其相差无二的样貌，擅长迷惑、牵制敌人，往往在目标还没有搞明白状况之前既已遭其暗算。六剑奴中属于羁绊者。她们是麻烦制造者，胜在心意相通，攻击成双，最重要的还是在为助战者铺平道路。"]],
            MYyanchunjun:["male","wu",6,["MYquanheng"],["des:姬姓，燕王喜的弟弟。十分注重自己的仪表风度，讲究极其奢华富贵的排场，素来都已自己的权势和地位为所欲为。非常横行霸道，传说得罪过他的人都没有好下场。麾下有着绝影等高手。曾送给雪女一对手镯，邀请雪女到府上跳舞，没想到竟死于雪女的凌波飞燕，第一高手绝影也被高渐离所杀。"]],
            MYagang:["male","qun",4,["MYyixiong","MYfusi"],["des:燕国士兵，当年大铁锤还是燕国下级军官时，跟随大铁锤一起出生入死的兄弟。大铁锤命阿纲回到营地求援。 晏懿得知战报后不愿派兵增援，并告诉阿纲，燕王喜已经杀了太子丹（事实上，太子丹装死而逃过一劫）向秦休战求和。之后，阿纲被晏懿抓去给蒙恬。结果阿纲一下子杀死几个秦兵。但终因实力不敌，被蒙恬所杀。"]],
            MYyanyi:["male","wu",4,["MYzhangshi","MYxinqiren"],["des:燕国大将军。奸诈狡猾，仗着自己位高权重欺压善民。性格轻佻傲慢，为非作歹，无所不为。"]],
            MYzinu:["male","wu",3,["MYshabi"],["des:儒家弟子，争强好胜，虽在师尊面前装乖学生，私下却经常欺负弱小。天明见石兰被子慕为首的儒家弟子逼供，因相信她而保护她。竟在瞬间把几个儒家弟子打倒。子慕虽然没有被打，却吓得瞠目结舌。被询问时，也是一字不提。"]],
            MYjueying:["male","qun",4,["MYjuesha"],["des:雁春君手下第一高手，对雁春君忠心不二。专门负责帮雁春君杀死或抓住所有惹过雁春君的人。办事效率高、速度快且不留痕迹。因此燕国人都说，任何得罪过雁春君的人，马上就会消失得无影无踪。后被高渐离所杀。"]],
            MYwangjian:["male","wei",4,["MYbaizhan","MYzhangong"],["des:战国时期秦国名将。姬姓，王氏，名翦。军事家，为人老成持重，深谙用兵之道，行军布阵，无往不利，曾与其子王贲为秦国立下累累战功。除韩之外，其余五国均为王翦父子所灭。据说项少羽的祖父项燕也是他杀的，是秦统一六国不可或缺的股肱之臣。"]],
				},
				
﻿








   
﻿   
        skill:{
            nance:{
                audio:"ext:秦时明月:1",
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                content:function (){
        player.draw(2);
    },
            },
            xinzongheng:{
                audio:"ext:秦时明月:1",
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('xinzongheng'),function(card,player,target){
            return target=player;
        }).ai=function(target){
            
            if(target.hasSkillTag('noturn')) return 1;
            return get.attitude(player,target)*(target.isTurnedOver()?-1:1);
            
        }
        "step 1"
        if(result.bool){
            var target=result.targets[0]
            player.logSkill('xinzongheng',target);
              
                target.link();
                target.draw(2);            
                target.chooseToDiscard('h',true);
            
            if(get.is.altered('xinzongheng')){
                target.changeHujia();
            }
        }
    },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                },
            },
            xiongbao:{
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                filter:function (event,player){
        return event.card&&event.card.name=='sha'&&_status.currentPhase==player;
    },
                content:function (){
        player.getStat().card.sha--;
    },
            },
            yehou:{
                audio:"ext:秦时明月:2",
                trigger:{
                    player:["useCardAfter","respondAfter","discardAfter"],
                },
                frequent:true,
                filter:function (event,player){
        if(player==_status.currentPhase) return false;
        if(event.cards){
            for(var i=0;i<event.cards.length;i++){
                if(get.color(event.cards[i])=='black'&&
                event.cards[i].original!='j') return true;
            }
        }
        return false;
    },
                content:function (){
        "step 0"
        player.judge(function(card){return (get.color(card)=='black')?1.5:-0.5});
        "step 1"
        if(result.judge>0){          
            player.recover(true);  
        }
        
        else{
            
              player.gainMaxHp(true);             
              }            
    },
                ai:{
                    threaten:0.7,
                },
            },
            MYconghui:{
                audio:"ext:秦时明月:1",
                trigger:{
                    player:"useCard",
                },
                frequent:true,
                filter:function (event){
        return (get.type(event.card)=='equip'&&event.cards[0]&&event.cards[0]==event.card);
    },
                content:function (){
      if(player.hp<player.maxHp){ 
           player.recover(true);  
           }
        else{
         player.draw();   
            
        }
              
    },
                ai:{
                    threaten:1.4,
                    noautowuxie:true,
                },
            },
            chilianwangshe:{
                audio:"ext:秦时明月:2",
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                filter:function (event,player){
        return (event.source&&event.source!=player);
    },
                content:function (){     
        "step 0"
        trigger.source.loseHp();  
        player.removeSkill('chilianwangshe');
        player.discard(player.getEquip(2));        
        "step 1"
        trigger.untrigger();
        trigger.finish();
    },
            },
            potuqilang:{
                trigger:{
                    source:"damageEnd",
                },
                direct:true,
                filter:function (event){
        if(event._notrigger.contains(event.player)) return false;
        return event.card&&event.card.name=='sha'&&event.player.countCards('he');
    },
                content:function (){
        var num=1;
        if(trigger.player.countCards('e')&&trigger.player.countCards('h')){
            num=2;
        }
        var next=player.discardPlayerCard(trigger.player,[1,num],get.prompt('potuqilang',trigger.player));
        next.logSkill=['potuqilang',trigger.player];
        next.filterButton=function(button){
            if(ui.selected.buttons.length) return get.position(button.link)!=get.position(ui.selected.buttons[0].link);
            return true;
        }
    },
                ai:{
                    expose:0.2,
                },
            },
            jiguanbaihu:{
                mod:{
                    globalFrom:function (from,to,current){
                
            if(from.isDamaged()) return current-Infinity;
                          
            
        },
                },
            },
            MYziwen:{
                audio:"ext:秦时明月:1",
                enable:"phaseUse",
                animationColor:"thunder",
                skillAnimation:"epic",
                usable:1,
                filter:function (event,player){
return !player.storage.MYziwen;
},
                prompt:"失去一点体力上限并摸四张牌",
                content:function (){
        "step 0"
        player.loseMaxHp(true);  
      player.storage.MYziwen=true;       
        "step 1"
        player.draw(4);
    },
                ai:{
                    order:1.5,
                    threaten:1.4,
                    result:{
                        player:function (player){
                if(player.isDamaged()) return 1;
                 return 0;
            },
                    },
                },
            },
            MYchongfeng:{
                audio:"ext:秦时明月:2",
                forced:true,
                trigger:{
                    player:"shaBefore",
                },
                filter:function (event){
                return event.card&&(event.card.name=='sha')
},
                content:function (){
    trigger.directHit=true;
},
            },
            MYyirong:{
                enable:"phaseUse",
                usable:1,
                audio:"ext:秦时明月:1",
                filterTarget:function (card, player, target) {
        return player != target;
    },
                content:function () {
    player.discard(player.getCards(''));
    if (player.bianhuanSkill && player.bianhuanSkill.length) {
        for (var i = 0; i < player.bianhuanSkill.length; i++) {
            if (!lib.skill[player.bianhuanSkill[i]].forceunique) {
                player.removeSkill(player.bianhuanSkill[i]);
            }
        }
    }
    var skills = lib.character[target.name][3];
    for (var j = 0; j < skills.length; j++) {
        if (!lib.skill[skills[j]].forceunique) {
            player.addSkill(skills[j]);
        }
    }
    player.bianhuanSkill = skills;
    var cards = target.getCards('');
    if (cards && cards.length) {
        for (var j = 0; j < cards.length; j++) {
            var card = game.createCard(cards[j].name, cards[j].suit, cards[j].number, cards[j].nature);
            player.gain(card);
        }
    }
    var items = target.getCards('');
    if (items && items.length) {
        for (var j = 0; j < items.length; j++) {
            var item = game.createCard(items[j].name, items[j].suit, items[j].number, items[j].nature);
            player.useCard(item, player, false);
        }
        }
      },
                ai:{
                    order:4,
                    expose:0.2,
                    result:{
                        target:-1,
                        player:function (player,target){

            },
                        threaten:1.1,
                    },
                },
            },
            MYzhujian:{
                audio:"ext:秦时明月:2",
                enable:"phaseUse",
                usable:2,
                filterCard:{
                    name:"sha",
                },
                position:"h",
                viewAs:{
                    name:"wuzhong",
                    suit:"spade",
                    number:7,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"spade","number":7,"name":"sha","cardid":"2686189252","_transform":"translateX(224px)","clone":{"name":"sha","suit":"spade","number":7,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":363},"timeout":343,"original":"h"}],
                },
                prompt:"将一张杀当无中生有使用",
                ai:{
                    basic:{
                        order:function (skill,player){
 if(player.getStat().skill.MYzhujian>=1){
                return 0;
            }
            return 9;
        },
                        useful:4.5,
                        value:9.2,
                    },
                    result:{
                        player:function (player){
                if(player.countCards('h')<player.maxHp)  return 1;
                
                           
            },
                        target:2,
                    },
                    tag:{
                        draw:2,
                    },
                },
            },
            MYyinzhen:{
                audio:"ext:秦时明月:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return target!=player&&target.isDamaged();
    },
                content:function (){
        'step 0'
        target.chooseToDiscard('he',Infinity,true);
        'step 1'
        target.recover();
    },
                ai:{
                    order:10,
                    result:{
                        player:function (player){
                if(player.classList.contains('turnedover')) return 10;
                return 0;
            },
                        target:function (player,target){
                if(target.countCards('h')>target.hp) return target.hp-target.countCards('h');
                return 0;
            },
                    },
                    threaten:1.5,
                    effect:{
                        target:function (card){
                if(card.name=='guiyoujie') return [0,2];
            },
                    },
                },
            },
            MYyixian:{
                audio:"ext:秦时明月:2",
                enable:"phaseUse",
                filterCard:true,
                usable:1,
                check:function (card){
        return 9-get.value(card)
    },
                filterTarget:function (card,player,target){
        if(target.hp>=target.maxHp) return false;
        return true;
    },
                content:function (){
        if(target.hasJudge('tao')){
            target.discard(target.getJudge('tao'));
        }
        else{
            var next=player.useCard({name:'tao'},target,cards);
            next.animate=false;
            next.audio=false;
        }
        player.draw();
    },
                ai:{
                    order:9,
                    result:{
                        target:function (player,target){
                if(target.hp==1) return 5;
                if(player==target&&player.countCards('h')>player.hp) return 5;
                return 2;
            },
                    },
                    threaten:2,
                },
            },
            MYnongquan:{
                audio:"ext:秦时明月:2",
                trigger:{
                    player:"damageEnd",
                },
                filter:function (event,player){
        return (event.source!=undefined&&event.num>0);
    },
                check:function (event,player){
        return (get.attitude(player,event.source)<=0);
    },
                logTarget:"source",
                content:function (){
        "step 0"
        event.num=trigger.num;
        "step 1"
        player.judge(function(card){
            if(get.color(card)=='red') return _status.event.eff;
            return 0;
        }).set('eff',get.damageEffect(trigger.source,player,player));
        "step 2"
        if(result.color=='black'){
            if(trigger.source.countCards('he')){
                player.gainPlayerCard(trigger.source,'he',true);
            }
        }
        else if(trigger.source.isIn()){
            trigger.source.damage();
        }
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
                    "maixie_defend":true,
                    expose:0.4,
                },
            },
            MYluowang:{
                enable:"phaseUse",
                usable:1,
                audio:"ext:秦时明月:2",
                filter:function (event,player){
        return player.countCards('h')>0
    },
                chooseButton:{
                    dialog:function (){
            var list=['taoyuan','wugu','juedou','huogong','jiedao','tiesuo','guohe','shunshou','wuzhong','wanjian','nanman'];
            for(var i=0;i<list.length;i++){
                list[i]=['锦囊','',list[i]];
            }
            return ui.create.dialog([list,'vcard']);
        },
                    filter:function (button,player){
            return lib.filter.filterCard({name:button.link[2]},player,_status.event.getParent());
        },
                    check:function (button){
            var player=_status.event.player;
            var recover=0,lose=1,players=game.filterPlayer();
            for(var i=0;i<players.length;i++){
                if(!players[i].isOut()){
                    if(players[i].hp<players[i].maxHp){
                        if(get.attitude(player,players[i])>0){
                            if(players[i].hp<2){
                                lose--;
                                recover+=0.5;
                            }
                            lose--;
                            recover++;
                        }
                        else if(get.attitude(player,players[i])<0){
                            if(players[i].hp<2){
                                lose++;
                                recover-=0.5;
                            }
                            lose++;
                            recover--;
                        }
                    }
                    else{
                        if(get.attitude(player,players[i])>0){
                            lose--;
                        }
                        else if(get.attitude(player,players[i])<0){
                            lose++;
                        }
                    }
                }
            }
            if(lose>recover&&lose>0) return (button.link[2]=='nanman')?1:-1;
            if(lose<recover&&recover>0) return (button.link[2]=='taoyuan')?1:-1;
            return (button.link[2]=='wuzhong')?1:-1;
        },
                    backup:function (links,player){
            return {
                filterCard:true,
                selectCard:0,
                audio:2,
                popname:true,
                viewAs:{name:links[0][2]},
            }
        },
                    prompt:function (links,player){
            return '请选择“'+get.translation(links[0][2])+'”的目标，点击屏幕空白处取消。';
        },
                },
                ai:{
                    order:1,
                    result:{
                        player:function (player){
                var num=0;
                var cards=player.getCards('h');
                if(cards.length>=3&&player.hp>=3) return 1;
                for(var i=0;i<cards.length;i++){
                    num+=Math.max(0,get.value(cards[i],player,'raw'));
                }
                num/=cards.length;
                num*=Math.min(cards.length,player.hp);
                return 12-num;
            },
                    },
                    threaten:1.6,
                },
            },
            MYliujiannu:{
                audio:"ext:秦时明月:1",
                trigger:{
                    player:"damageEnd",
                },
                animationColor:"thunder",
                skillAnimation:"epic",
                usable:1,
                filter:function (event,player){
return !player.storage.MYliujiannu;
},
                content:function (){
        "step 0"
          player.turnOver();
      player.storage.MYliujiannu=true;       
        "step 1"
        player.draw(6);
    },
                ai:{
                    order:1.5,
                    threaten:1.4,
                    result:{
                        player:function (player){
                if(player.isDamaged()) return 1;
                 return 0;
            },
                    },
                },
            },
            MYshedu:{
                audio:"ext:秦时明月:1",
                trigger:{
                    global:"phaseUseBegin",
                },
                filter:function (event,player){
        return event.player!=player&&player.countCards('h')>0;
    },
                direct:true,
                content:function (){
        "step 0"
        var nono=(Math.abs(get.attitude(player,trigger.player))<3);
        if(get.damageEffect(trigger.player,player,player)<=0){
            nono=true
        }
        else if(trigger.player.hp>2){
            nono=true;
        }
        else if(trigger.player.hp>1&&player.countCards('h')<3){
            nono=true;
        }
        else if(trigger.player.canUse('sha',player)&&!player.countCards('h','shan')&&trigger.player.countCards('h')>=3){
            nono=true;
        }
        var next=player.chooseToDiscard(get.prompt('MYshedu',trigger.player));
        next.set('ai',function(card){
            if(_status.event.nono) return -1;
            return 7-get.useful(card);
        });
        next.set('logSkill',['MYshedu',trigger.player]);
        next.set('nono',nono);
        "step 1"
        if(result.bool){
            trigger.player.damage();
        }
        else{
            event.finish();
        }
        "step 2"
        
        
        
        
  
        player.chooseControl('喝酒','摸牌').set('ai',function(event){
            if(player.countCards('h','shan')>1) return '喝酒';
            return '摸牌';
        });
        "step 3"
        if(result.control=='喝酒') trigger.player.useCard({name:'jiu'},trigger.player);
        if(result.control=='摸牌') trigger. player.draw(2);
   
        
        
        
        
        
        
    },
                ai:{
                    threaten:2,
                    expose:0.3,
                },
            },
            MYhuomeishu:{
                audio:"ext:秦时明月:2",
                trigger:{
                    player:"phaseDiscardEnd",
                },
                direct:true,
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('MYhuomeishu'),function(card,player,target){
            return player!=target;
        }).set('ai',function(target){
            var att=get.attitude(_status.event.player,target);
            if(att>0){
                if(target.countCards('h')<target.hp) att+=2;
                return att-target.countCards('h')/3;
            }
            else{
                return -1;
            }
        });
        "step 1"
        if(result.bool){
            trigger.cancel();
            player.logSkill('MYhuomeishu',result.targets);
            event.target=result.targets[0];
            event.target.draw(1);
            player.chooseTarget('选择杀的目标是谁？',true,function(card,player,target){
                return _status.event.target.canUse('sha',target)&&player!=target;
            }).set('ai',function(target){
                return get.effect(target,{name:'sha'},_status.event.target,_status.event.player);
            }).set('target',event.target);
        }
        else{
            event.finish();
        }
        "step 2"
        if(result.bool&&result.targets.length){
            game.log(player,'指定的出杀目标为',result.targets);
            event.target.line(result.targets);
            event.target.chooseToUse('对'+get.translation(result.targets)+'使用一张杀，或令'+get.translation(player)+'获得你的一张牌',{name:'sha'},result.targets[0],-1);
        }
        else{
            event.bool=true;
        }
        "step 3"
        if(event.bool||result.bool==false){
            player.gainPlayerCard('he',event.target,Math.min(1,event.target.countCards('he')),true);
        }
    },
                ai:{
                    expose:0.2,
                },
            },
            MYziya:{
                audio:"ext:秦时明月:1",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return target.canUse({name:'sha'},player)&&target.countCards('he');
    },
                content:function (){
        "step 0"
        target.chooseToUse({name:'sha'},player,-1,'对'+get.translation(player)+'使用一张杀，或令其获得你一张牌').set('targetRequired',true);
        "step 1"
        if(result.bool==false&&target.countCards('he')>0){
                player.gainPlayerCard('hej',target,true);
        
        }
        else{
            event.finish();
        }
    },
                ai:{
                    order:4,
                    expose:0.2,
                    result:{
                        target:-1,
                        player:function (player,target){
                if(target.countCards('h')==0) return 0;
                if(target.countCards('h')==1) return -0.1;
                if(player.hp<=2) return -2;
                if(player.countCards('h','shan')==0) return -1;
                return -0.5;
            },
                    },
                    threaten:1.1,
                },
            },
            MYhunao:{
                audio:"ext:秦时明月:1",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        if(player==target) return false;
        return get.distance(player,target,'attack')<=1;
    },
                content:function () {
        target.damage();
    },
                ai:{
                    basic:{
                        order:9,
                        value:3,
                        useful:1,
                    },
                    result:{
                        target:-2,
                    },
                    tag:{
                        loseHp:1,
                    },
                },
            },
            MYleishenchui:{
                audio:"ext:秦时明月:2",
                forced:true,
                trigger:{
                    source:"damageBefore",
                },
                filter:function (event,player){
        return event.card&&event.card.name=='sha';
    },
                content:function (){
        'step 0'
        player.judge(function(card){
       
            
            return (get.color(card)=='black')?1.5:-0.5;
                   
            
            
            
        });
        'step 1'
        if(result.bool){
            trigger.cancel();
            trigger.player.loseHp(3,true);
        }
    },
                group:["MYleishenchui_gaipan"],
                subSkill:{
                    gaipan:{
                        trigger:{
                            player:"judge",
                        },
                        filter:function (event,player){
        return player.countCards('he',{color:'black'})>0&&player.hp<=2;
    },
                        direct:true,
                        content:function (){
        "step 0"
        player.chooseCard(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
        get.translation(trigger.player.judging[0])+'，'+get.prompt('MYleishenchui'),'he',function(card){
            return get.color(card)=='black';
        }).set('ai',function(card){
            var trigger=_status.event.getTrigger();
            var player=_status.event.player;
            var judging=_status.event.judging;
            var result=trigger.judge(card)-trigger.judge(judging);
            var attitude=get.attitude(player,trigger.player);
            if(attitude==0||result==0) return 0;
            if(attitude>0){
                return result;
            }
            else{
                return -result;
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
            player.logSkill('gaipan');
            player.$gain2(trigger.player.judging[0]);
            player.gain(trigger.player.judging[0]);
            trigger.player.judging[0]=result.cards[0];
            if(!get.owner(result.cards[0],'judge')){
                trigger.position.appendChild(result.cards[0]);
            }
            game.log(trigger.player,'的判定牌改为',result.cards[0]);
        }
        "step 3"
        game.delay(2);
    },
                        sub:true,
                    },
                },
            },
            MYjuque:{
                audio:"ext:秦时明月:2",
                forced:true,
                trigger:{
                    player:"shaBefore",
                },
                filter:function (event){
                return event.card&&(event.card.name=='sha')
},
                content:function (){
     player.addTempSkill('xinliegong2','shaAfter');
},
                group:["MYjuque_juexingshe"],
                subSkill:{
                    juexingshe:{
                        forced:true,
                        trigger:{
                            player:"shaBefore",
                        },
                        filter:function (event){
                return event.card&&(event.card.name=='sha');
},
                        content:function (){
  if(player.hp<=2){
      
      trigger.directHit=true;
      
      
  }
                
               
},
                        sub:true,
                    },
                },
            },
            MYliuhuan:{
                audio:"ext:秦时明月:1",
                trigger:{
                    player:"dyingAfter",
                },
                unique:true,
                mark:true,
                skillAnimation:true,
                animationStr:"凤舞六幻",
                animationColor:"fire",
                forced:true,
                init:function (player){
        player.storage.MYliuhuan=false;
    },
                filter:function (event,player){
       
        return !player.storage.MYliuhuan;    
        return true;
    },
                content:function (){
        player.changeHujia(6);
        player.storage.MYliuhuan=true;   
        player.unmarkSkill('MYliuhuan');
             
        
    },
                intro:{
                    content:"limited",
                },
            },
            MYyuren:{
                frequent:true,
                trigger:{
                    source:"damageEnd",
                },
                direct:true,
                filter:function (event){
        if(event._notrigger.contains(event.player)) return false;
        return event.card&&event.card.name=='sha'&&event.player.countCards('he');
    },
                content:function (){
        var num=1;
        if(trigger.player.countCards('e')&&trigger.player.countCards('h')){
            num=2;
        }
        var next=player.gainPlayerCard(trigger.player,[1,num],get.prompt('MYyuren',trigger.player));
        next.logSkill=['MYyuren',trigger.player];
        next.filterButton=function(button){
            if(ui.selected.buttons.length) return get.position(button.link)!=get.position(ui.selected.buttons[0].link);
            return true;
        }
    },
                ai:{
                    expose:0.2,
                },
            },
            MYjuniao:{
                mod:{
                    globalFrom:function (from,to,current){
            
      
            if(from.isDamaged()) return current-Infinity;
        },
                    globalTo:function (from,to,current){
            if(to.isDamaged()) return current+1;
        },
                },
                ai:{
                    threaten:1.5,
                },
                group:["MYjuniao_1"],
                subSkill:{
                    "1":{
                        audio:"ext:秦时明月:4",
                        mod:{
                            globalFrom:function (from,to,distance){
            return distance-1;
        },
                        },
                        trigger:{
                            player:"shaBefore",
                        },
                        forced:true,
                        content:function (){},
                        sub:true,
                    },
                },
            },
            MYdaosheng:{
                audio:"ext:秦时明月:2",
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                content:function (){
        "step 0"
        var check;
        var i,num=game.countPlayer(function(current){
            return current!=player&&current.countCards('h')&&get.attitude(player,current)<=0;
        });
        check=(num>=1);
        player.chooseTarget(get.prompt('MYdaosheng'),[1,1],function(card,player,target){
            return target.countCards('h')>0&&player!=target;
        },function(target){
            if(!_status.event.aicheck) return 0;
            var att=get.attitude(_status.event.player,target);
            if(target.hasSkill('tuntian')) return att/10;
            return 1-att;
        }).set('aicheck',check);
        "step 1"
        if(result.bool){
            player.logSkill('MYdaosheng',result.targets);
            player.gainMultiple(result.targets);
            trigger.cancel();
       //      player.draw(2); 
            
            
        }
        else{
            event.finish();
        }
        "step 2"
        game.delay();
    },
                ai:{
                    threaten:1.6,
                    expose:0.2,
                },
            },
            MYdianshenbu:{
                skillAnimation:true,
                audio:"ext:秦时明月:1",
                derivation:["MYdianguang","MYshenxingbu"],
                unique:true,
                trigger:{
                    player:"phaseBegin",
                },
                filter:function (event,player){
        return player.hp==1&&!player.storage.MYdianshenbu;
    },
                forced:true,
                priority:3,
                content:function (){
    player.loseMaxHp();
    player.addSkill('MYdianguang');
    player.addSkill('MYshenxingbu');
    player.awakenSkill('MYdianshenbu');
    player.storage.MYdianshenbu=true;
       },
                ai:{
                    threaten:function (player,target){
            if(target.hp==1) return 2;
            return 0.5;
        },
                    maixie:true,
                    effect:{
                        target:function (card,player,target){
                if(!target.hasFriend()) return;
                if(get.tag(card,'damage')==1&&target.hp==2&&!target.isTurnedOver()&&
                _status.currentPhase!=target&&get.distance(_status.currentPhase,target,'absolute')<=3) return [0.5,1];
            },
                    },
                },
            },
            MYshenxingbu:{
                mod:{
                    globalFrom:function (from,to,distance){
            return distance-Infinity;
        },
                },
            },
            MYdianguang:{
                audio:"ext:秦时明月:1",
                enable:"chooseToUse",
                usable:1,
                filterCard:function (card){
        return get.color(card)=='black';
    },
                position:"h",
                viewAs:{
                    name:"shunshou",
                    suit:"club",
                    number:6,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"club","number":6,"name":"sha","nature":"thunder","cardid":"8611960287","original":"h","_transform":"translateX(112px)","clone":{"name":"sha","suit":"club","number":6,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":2798},"timeout":2768}],
                },
                viewAsFilter:function (player){
        if(!player.countCards('he',{color:'black'})) return false;
    },
                prompt:"将一张黑色手牌当【顺手牵羊】使用",
                check:function (card){return 4-get.value(card)},
                ai:{
                    basic:{
                        order:9,
                        useful:1,
                        value:5,
                    },
                    result:{
                        target:function (player,target){
                var att=get.attitude(player,target);
                var nh=target.countCards('h');
                if(att>0){
                    var js=target.getCards('j');
                    if(js.length){
                        var jj=js[0].viewAs?{name:js[0].viewAs}:js[0];
                        if(jj.name=='guohe'||js.length>1||get.effect(target,jj,target,player)<0){
                            return 2;
                        }
                    }
                    if(target.getEquip('baiyin')&&target.isDamaged()&&
                        get.recoverEffect(target,player,player)>0){
                        if(target.hp==1&&!target.hujia) return 1.6;
                        if(target.hp==2) return 0.01;
                        return 0;
                    }
                }
                var es=target.getCards('e');
                var noe=(es.length==0||target.hasSkillTag('noe'));
                var noe2=(es.length==1&&es[0].name=='baiyin'&&target.isDamaged());
                var noh=(nh==0||target.hasSkillTag('noh'));
                if(noh&&(noe||noe2)) return 0;
                if(att<=0&&!target.countCards('he')) return 1.5;
                return -1.5;
            },
                        player:function (player,target){
                if(get.attitude(player,target)<0&&!target.countCards('he')){
                    return 0;
                }
                if(get.attitude(player,target)>1){
                    var js=target.getCards('j');
                    if(js.length){
                        var jj=js[0].viewAs?{name:js[0].viewAs}:js[0];
                        if(jj.name=='shunshou') return 1;
                        if(js.length==1&&get.effect(target,jj,target,player)>=0){
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
                        discard:1,
                        gain:1,
                    },
                    wuxie:function (target,card,player,viewer){
            if(get.attitude(viewer,player)>0&&get.attitude(viewer,target)>0){
                return 0;
            }
        },
                },
            },
            MYyishuihan:{
                audio:"ext:秦时明月:2",
                trigger:{
                    player:"shaBefore",
                },
                filter:function (event,player){
        for(var i=0;i<event.cards.length;i++){
            if(get.color(event.cards[i])=='black'||'red'&&get.type(event.cards[i])=='basic'&&
                get.position(event.cards[i])=='d'){
                return true;
            }
        }
        return false;
    },
                direct:true,
                content:function (){
        'step 0'
        var cards=[];
        for(var i=0;i<trigger.cards.length;i++){
            if(get.color(trigger.cards[i])=='black'||'red'&&get.type(trigger.cards[i])=='basic'&&
                get.position(trigger.cards[i])=='d'){
                cards.push(trigger.cards[i]);
            }
        }
        if(!cards.length){
            event.finish();
        }
        else{
            event.cards=cards;
        }
        'step 1'
        if(event.cards.length){
            player.chooseTarget(get.prompt('MYyishuihan'),function(card,player,target){
                return player.canUse({name:'bingliang'},target,false);
            }).set('ai',function(target){
                var player=_status.event.player;
                return get.effect(target,{name:'bingliang'},player,player);
            });
        }
        else{
            event.finish();
        }
        'step 2'
        if(result.bool&&result.targets&&result.targets.length){
            event.current=result.targets[0];
            if(event.cards.length==1){
                event.directCard=event.cards[0];
            }
            else{
                delete event.directCard;
                player.chooseCardButton('选择一张牌当作【兵断寸断】使用',event.cards,true);
            }
        }
        else{
            event.finish();
        }
        'step 3'
        var card;
        if(event.directCard){
            card=event.directCard;
        }
        else if(result.links&&result.links.length&&
            event.cards.contains(result.links[0])){
            card=result.links[0]
        }
        if(card){
            event.cards.remove(card);
            event.current.addJudge('bingliang',[card]);
            event.goto(1);
            player.logSkill('MYyishuihan',event.current);
        }
    },
            },
            MYbingdun:{
                audio:"ext:秦时明月:2",
                trigger:{
                    player:"damageEnd",
                },
                filter:function (event,player){
        return event.source&&event.source.isIn()&&event.source!=player&&!event.source.hasJudge('bingliang');
    },
                check:function (event,player){
        return get.attitude(player,event.source)<=0;
    },
                logTarget:"source",
                content:function (){
        player.changeHujia(trigger.num);        
        
        var card=game.createCard('bingliang');
        trigger.source.addJudge(card);
        trigger.source.$draw(card);
        game.delay();
        
        
        
        
    },
                ai:{
                    "maixie_defend":true,
                },
            },
            MYshisi:{
                group:["shisi"],
                audio:"ext:秦时明月:2",
                usable:1,
                trigger:{
                    player:"shaBegin",
                },
                check:function (event,player){
        return get.attitude(player,event.target)<=0;
    },
                logTarget:"target",
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
            trigger.directHit=true;
        }
    },
            },
            shisi:{
                usable:1,
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                filter:function (event,player){
        return event.card&&event.card.name=='sha'&&_status.currentPhase==player;
    },
                content:function (){
        player.getStat().card.sha--;
          player.draw();        
        
    },
            },
            MYmashu:{
                mod:{
                    globalFrom:function (from,to,distance){
            return distance-1;
        },
                },
            },
            MYfeiyan:{
                audio:"ext:秦时明月:2",
                trigger:{
                    global:"phaseJudgeBefore",
                },
                filter:function (event,player){
        return event.player.countCards('j')>0&&event.player!=player;
    },
                check:function (event,player){
        return get.attitude(player,event.player)<=0;
    },
                content:function (){
        player.useCard({name:'sha'},trigger.player);
    },
            },
            MYbaixue:{
                audio:"ext:秦时明月:2",
                trigger:{
                    player:"phaseEnd",
                },
                frequent:true,
                content:function (){
        player.draw();
    },
            },
            MYlingbo:{
                audio:"ext:秦时明月:2",
                trigger:{
                    player:"respond",
                },
                filter:function (event,player){
 return event.card.name=='shan';
    },
                check:function (event,player){
        return get.attitude(player,event.source)<=0;
    },
                logTarget:"source",
                content:function (){
        var card=game.createCard('lebu');
        trigger.source.addJudge(card);
        trigger.source.$draw(card);
        game.delay();
    },
                ai:{
                    "maixie_defend":true,
                },
            },
            MYwanrendi:{
                audio:"ext:秦时明月:1",
                mod:{
                    targetInRange:function (card,player,target,now){
            if(card.name=='sha'&&get.color(card)=='red') return true;
        },
                    selectTarget:function (card,player,range){
            if(card.name=='sha' &&get.color(card)=='red'&&range[1]!=-1) range[1]++;
        },
                },
                trigger:{
                    player:"shaBegin",
                },
                forced:true,
                filter:function (event,player){
        return event.card&&get.color(event.card)=='red';
    },
                content:function (){
        trigger.directHit=true;
    },
            },
            MYpojia:{
                audio:"ext:秦时明月:2",
                trigger:{
                    player:"shaBegin",
                },
                filter:function (event,player){
        return event.target.countCards('e');
    },
                logTarget:"target",
                check:function (event,player){
        if(event.target.hasSkillTag('noe')) return false;
        return get.attitude(player,event.target)<0;
    },
                content:function (){
        
         "step 0"        
           if(trigger.target.countCards('e')){
                player.discardPlayerCard(trigger.target,'e',true);
            } 
              
     //   trigger.target.chooseToDiscard('e',true);让目标弃牌
  
    "step 1"    
    player.draw();    
   
    },
            },
            MYjuqi:{
                audio:"ext:秦时明月:2",
                trigger:{
                    player:"loseEnd",
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
            player.storage.MYjuqi.push(result.card);
            result.node.moveDelete(player);
            game.broadcast(function(cardid,player){
                var node=lib.cardOL[cardid];
                if(node){
                    node.moveDelete(player);
                }
            },result.node.cardid,player);
            game.addVideo('gain2',player,get.cardsInfo([result.node]));
            player.markSkill('MYjuqi');
            game.addVideo('storage',player,['MYjuqi',get.cardsInfo(player.storage.MYjuqi),'cards']);
        }
    },
                init:function (player){
        player.storage.MYjuqi=[];
    },
                intro:{
                    content:"cards",
                },
                group:"MYjuqi_dist",
                subSkill:{
                    dist:{
                        mod:{
                            globalFrom:function (from,to,distance){
                    if(from.storage.MYjuqi) return distance-from.storage.MYjuqi.length;
                },
                        },
                        sub:true,
                    },
                },
                locked:false,
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                if(!target.hasFriend()&&!player.hasUnknown()) return;
                if(_status.currentPhase==target) return;
                if(get.tag(card,'loseCard')&&target.countCards('he')){
                    if(target.hasSkill('ziliang')) return 0.7;
                    return [0.5,Math.max(2,target.countCards('h'))];
                }
                if(target.isUnderControl(true,player)){
                    if((get.tag(card,'respondSha')&&target.countCards('h','sha'))||
                        (get.tag(card,'respondShan')&&target.countCards('h','shan'))){
                        if(target.hasSkill('ziliang')) return 0.7;
                        return [0.5,1];
                    }
                }
                else if(get.tag(card,'respondSha')||get.tag(card,'respondShan')){
                    if(get.attitude(player,target)>0&&card.name=='juedou') return;
                    if(get.tag(card,'damage')&&target.hasSkillTag('maixie')) return;
                    if(target.countCards('h')==0) return 2;
                    if(target.hasSkill('ziliang')) return 0.7;
                    if(get.mode()=='guozhan') return 0.5;
                    return [0.5,Math.max(target.countCards('h')/4,target.countCards('h','sha')+target.countCards('h','shan'))];
                }
            },
                    },
                    threaten:function (player,target){
            if(target.countCards('h')==0) return 2;
            return 0.5;
        },
                    nodiscard:true,
                    nolose:true,
                },
            },
            MYchengren:{
                skillAnimation:true,
                audio:"ext:秦时明月:1",
                unique:true,
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                filter:function (event,player){
        if(player.storage.MYjuqi) return player.storage.MYjuqi.length>=2&&!player.storage.MYchengren;
    },
                derivation:"MYqiren",
                content:function (){
        player.recover(+Infinity);
        player.addSkill('MYqiren');
        player.storage.MYchengren=true;
        player.awakenSkill('MYchengren');
    },
            },
            MYqiren:{
                audio:"ext:秦时明月:1",
                enable:"phaseUse",
                filter:function (event,player){
        return player.storage.MYjuqi.length>0;
    },
                chooseButton:{
                    dialog:function (event,player){
            return ui.create.dialog('气刃',player.storage.MYjuqi,'hidden');
        },
                    backup:function (links,player){
            return {
                filterCard:function(){return false},
                selectCard:-1,
                viewAs:{name:'sha'},
                cards:links,
                onuse:function(result,player){
                    result.cards=lib.skill[result.skill].cards;
                    var card=result.cards[0];
                    player.storage.MYjuqi.remove(card);
                    player.syncStorage('MYjuqi');
                    if(!player.storage.MYjuqi.length){
                        player.unmarkSkill('MYjuqi');
                    }
                    else{
                        player.markSkill('MYjuqi');
                    }
                    player.logSkill('MYqiren',result.targets);
                }
            }
        },
                    prompt:function (links,player){
            return '选择气刃的目标';
        },
                },
                ai:{
                    order:3,
                    result:{
                        player:function (player){
                return player.storage.MYjuqi.length-1;
            },
                    },
                },
            },
            MYquhun:{
                audio:"ext:秦时明月:1",
                forced:true,
                trigger:{
                    target:"taoBegin",
                },
                filter:function (event,player){
        return event.card&&(event.card.name=='tao')        
        return true;
    },
                content:function (){
        player.recover();
         
        
    },
            },
            MYjiedang:{
                enable:"phaseUse",
                usable:1,
                filterTarget:true,
                selectTarget:2,
                content:function (){
        target.link();
    },
                check:function (card){
        return 6-get.value(card);
    },
                ai:{
                    order:2,
                    result:{
                        target:function (player,target){
                if(target.isLinked()) return 1;
                return -1;
            },
                    },
                },
            },
            MYhuzhi:{
                audio:"ext:秦时明月:1",
                enable:"phaseUse",
                usable:1,
                filterTarget:true,
                selectTarget:[1,1],
                position:"he",
                check:function (card){
        return 7-get.value(card);
    },
                contentBefore:function (){
        player.loseHp();
        player.draw(1);
    },
                alter:true,
                content:function (){
        if(targets.length==1){
            target.damage('fire',1);
            if(get.is.altered('huodan')) target.draw();
        }
        else{
            target.damage('fire');
        }
    },
                line:"fire",
                ai:{
                    basic:{
                        order:1,
                    },
                    result:{
                        target:function (player,target){
                if(player.hp<2) return 0;
                if(get.attitude(player,target)>=0) return 0;
                if(target.hp>player.hp) return 0;
                var eff=get.damageEffect(target,player,target,'fire');
                if(eff<0){
                    if(ui.selected.targets.length&&target.hp>1&&ui.selected.targets[0].hp>1){
                        return 0;
                    }
                    if(target.nodying) return eff/10;
                    return eff/Math.sqrt(target.hp);
                }
                return 0;
            },
                    },
                },
            },
            MYchuanren:{
                audio:"ext:秦时明月:2",
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                content:function (){
           'step 0'
        player.chooseTarget(get.prompt('MYchuanren')).set('ai',function(target){
            var player=_status.event.player;
            if(get.attitude(player,target)>0){
                return get.recoverEffect(target,player,player)+1;
            }
            return 0;
        });
        "step 1"
        if(result.bool){
            var target=result.targets[0]
            player.logSkill('MYchuanren',target);
              
                target.changeHujia(true);
               // target.recover(true);   
                target.draw();
            
            if(get.is.altered('MYchuanren')){
                target.changeHujia();
            }
        }
    },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                },
            },
            MYjituo:{
                audio:"ext:秦时明月:2",
                enable:"phaseUse",
                direct:true,
                usable:1,
                filter:function (event,player){
        return player.countCards('he')>0;
    },
                content:function (){
        "step 0"
        player.chooseTarget('选择【寄托】的目标',function(card,player,target){
             return player!=target&&player.countCards('he')>0;
        }).set('ai',function(target){
            var att=get.attitude(_status.event.player,target);
       if(event.player.hp>0) return att>0;
        return att<=0;
        });
        "step 1"
        if(result.bool){
            player.chooseToDiscard('he',true);  
            
            var target=result.targets[0];
            event.target=target;
            player.logSkill('MYjituo',target);
            player.discard(result.cards);
            if(target.hp==target.maxHp&&
               
                !target.isLinked()){
                target.draw(2);
                event.finish();
            }
            else{
                var controls=['draw_card'];
                if(target.hp<target.maxHp){
                    controls.push('recover_hp');
                }
                
                target.chooseControl(controls).ai=function(){
                    if(target.isTurnedOver()){
                        return 'reset_character';
                    }
                    else if(target.hp==1&&target.maxHp>2){
                        return 'recover_hp';
                    }
                    else if(target.hp==2&&target.maxHp>2&&target.countCards('h')>1){
                        return 'recover_hp';
                    }
                    else{
                        return 'draw_card';
                    }
                }
            }
        }
        else{
            event.finish();
        }
        "step 2"
        event.control=result.control;
        switch(event.control){
            case 'recover_hp':event.target.recover();event.finish();break;
            case 'draw_card':event.target.draw(2);event.finish();break;
        
        }
        "step 3"
        if(event.control=='reset_character'&&event.target.isLinked()){
            event.target.link();
        }
    },
                ai:{
                    order:9,
                    result:{
                        player:1,
                    },
                    threaten:1.5,
                },
            },
            MYmianju:{
                audio:"ext:秦时明月:1",
                trigger:{
                    player:["shaBefore"],
                    target:["shaBefore"],
                },
                filter:function (event,player){
        
        return get.color(event.card)=='red'||'black';
        
        
        
        
        
    },
                frequent:true,
                content:function (){
        player.draw();
    },
                ai:{
                    effect:{
                        target:function (card,player,target){
                if(card.name=='sha'&&get.color(card)=='red') return [1,0.6];
            },
                        player:function (card,player,target){
                if(card.name=='sha'&&get.color(card)=='red') return [1,1];
            },
                    },
                },
            },
            MYyanbian:{
                audio:"ext:秦时明月:1",
                trigger:{
                    global:"useCard",
                },
                priority:15,
                filter:function (event,player){
        return event.card.name=='sha'&&event.player!=player&&
        player.countCards('h','shan')>0&&event.targets.contains(player)==false;
    },
                direct:true,
                content:function (){
        "step 0"
        var effect=0;
        for(var i=0;i<trigger.targets.length;i++){
            effect+=get.effect(trigger.targets[i],trigger.card,trigger.player,player);
        }
        var str='弃置一张闪令'+get.translation(trigger.player);
        if(trigger.targets&&trigger.targets.length){
            str+='对'+get.translation(trigger.targets);
        }
        str+='的'+get.translation(trigger.card)+'失效，然后你摸一张牌。';
        var next=player.chooseToDiscard('h',{name:'shan'},get.prompt('MYyanbian'));
        next.prompt2=str;
        next.ai=function(card){
            if(effect<0){
                return 9-get.value(card);
            }
            return -1;
        }
        next.autodelay=true;
        next.logSkill=['MYyanbian',trigger.player];
        "step 1"
        if(result.bool){
            trigger.cancel();
            player.draw();
        }
    },
                ai:{
                    threaten:1.2,
                    expose:0.2,
                },
            },
            MYjiquan:{
                audio:"ext:秦时明月:2",
                trigger:{
                    source:"damageEnd",
                },
                usable:1,
                check:function (event,player){
        var att=get.attitude(player,event.player);
        if(event.player.hp>0) return att<=0;
        return att>0;
        
    },
                filter:function (event){
        return event.player.isIn()&&event.player.countCards('h');
    },
                content:function (){
        player.gainPlayerCard(trigger.player,'h', Infinity,true);
    },
            },
            MYbaye:{
                audio:"ext:秦时明月:2",
                trigger:{
                    player:"phaseEnd",
                },
                frequent:true,
                filter:function (event,player){

if(!player.isZhu) return false;

   

        return true;


        var list=['wei','shu','wu','qun','shen'];
        var players=game.filterPlayer();
        var num=0;
        for(var i=0;i<players.length&&list.length;i++){
            if(list.contains(players[i].group)){
                list.remove(players[i].group);
                num++;
            }
        }
        return player.countCards('h')<num;
    },
                content:function (){
        var list=['wei','shu','wu','qun','shen'];
        var players=game.filterPlayer();
        var num=0;
        for(var i=0;i<players.length&&list.length;i++){
            if(list.contains(players[i].group)){
                list.remove(players[i].group);
                num++;
            }
        }
        player.draw(num-player.countCards('h'));
    },
                ai:{
                    threaten:1.3,
                },
            },
            MYkaoji:{
                audio:"ext:秦时明月:2",
                group:["MYrengkaoji"],
                init:function (player){
        player.storage.MYkaoji=0;
    },
                intro:{
                    content:"mark",
                },
                forced:true,
                trigger:{
                    global:"damageAfter",
                },
                filter:function (event,player){
        return event.player!=player&&player.storage.MYkaoji<3;
    },
                content:function (){
        player.storage.MYkaoji++;
        player.syncStorage('MYkaoji');
        player.markSkill('MYkaoji');
    },
                ai:{
                    combo:"fanpu",
                },
            },
            MYjuexing:{
                audio:"ext:秦时明月:1",
                skillAnimation:true,
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                unique:true,
                derivation:["zongjian"],
                init:function (player){
        player.storage.zbaijiang=false;
    },
                filter:function (event,player){
        return !player.storage.zbaijiang&&player.countCards('e')>=2;
    },
                content:function (){
        player.storage.zbaijiang=true;
        player.removeSkill('MYkaoji');
     
        player.removeSkill('MYjuexing');
        
        player.addSkill('zongjian');
        
       // player.recover();恢复体力       
       player.gainMaxHp();
       player.recover(true);          
    },
            },
            zongjian:{
                mod:{
                    targetInRange:function (card,player,target){
            if(card.name=='sha'&&card.number){
                if(get.distance(player,target)<=card.number) return true;
            }
        },
                },
                audio:"ext:秦时明月:2",
                trigger:{
                    player:"shaBegin",
                },
                logTarget:"target",
                check:function (event,player){
        return get.attitude(player,event.target)<=0;
    },
                filter:function (event,player){
        if(event.target.countCards('h')<=player.countCards('h')) return true;
        if(event.target.hp<=player.hp) return true;
        return false;
    },
                content:function (){
        if(trigger.target.countCards('h')<=player.countCards('h')) trigger.directHit=true;
        if(trigger.target.hp>=player.hp) player.addTempSkill('xinliegong2','shaAfter');
    },
                ai:{
                    threaten:0.5,
                },
            },
            MYrengkaoji:{
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        return player.storage.MYkaoji>=3;
    },
                promptfunc:function (){
        return '令自己在本轮内使用【杀】对目标造成伤害后，摸一张牌并回复一点体力（选择自己），或对攻击范围内的一名其他角色造成一点伤害'
    },
                filterTarget:function (card,player,target){
        return player==target||get.distance(player,target,'attack')<=1;
    },
                content:function (){
    if(target==player){
            target.addTempSkill('MYrengkaoji_disable',{player:'phaseBegin'});
        }
        else{
            target.damage();
        }
        player.storage.MYkaoji-=3;
        player.unmarkSkill('MYkaoji');
        player.syncStorage('MYkaoji');
    },
                subSkill:{
                    disable:{
                        usable:1,
                        trigger:{
                            source:"damageEnd",
                        },
                        forced:true,
                        filter:function (event,player){
        return event.card&&event.card.name=='sha'&&_status.currentPhase==player;
    },
                        content:function (){
        
          player.draw();       
           player.recover(true);        
        
    },
                        sub:true,
                    },
                },
                ai:{
                    combo:"MYkaoji",
                    order:2,
                    result:{
                        target:function (player,target){
                if(player==target){
                    if(player.hp<=2&&!player.countCards('h','shan')){
                        return 2;
                    }
                    return 0;
                }
                else{
                    return get.damageEffect(target,player,target);
                }
            },
                    },
                },
            },
            MYzhouyin:{
                audio:"ext:秦时明月:1",
                enable:"phaseUse",
                usable:1,
                position:"he",
                filter:function (event,player){
        return player.countCards('he',{suit:'diamond'})>1;
    },
                filterCard:function (card){
        return get.suit(card)=='diamond';
    },
                filterTarget:function (card,player,target){
  
        return player!=target;
    },
                selectCard:2,
                content:function (){
        target.turnOver();
        
        player.draw(2);        
               
    },
                ai:{
                    order:9,
                    result:{
                        target:function (player,target){
                if(target.hasSkillTag('noturn')) return 0;
                if(target.isTurnedOver()) return 2;
                return -0.5;
            },
                    },
                },
            },
            MYyuzhi:{
                audio:"ext:秦时明月:1",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        if(player==target) return false;
        return (target.countCards('h')||target.isUnseen(2));
    },
                content:function (){
        "step 0"
        
         player.chooseCardButton(target,target.getCards('h')).set('filterButton',function(button){
           return get.suit(button.link)=='diamond'; 
        });                                                                   
        "step 1"         
           
        if(result.bool){                           
        event.card=result.links[0];                       
        player.gain(event.card,target);
        target.$give(event.card,player);               
        }                                                
                                 
    },
                selectTarget:1,
                ai:{
                    threaten:1.5,
                    result:{
                        target:function (player,target){
                return -target.countCards('h');
            },
                    },
                    order:10,
                    expose:0.4,
                },
            },
            MYyinlu:{
                audio:"ext:秦时明月:1",
                trigger:{
                    player:"damageEnd",
                },
                filter:function (event,player){
return (event.source&&event.source.countCards('he')&&event.source!=player);
},
                content:function (){
        "step 0"
             var n=[1,2,3,4,5,6,7,8,9,10].randomGet();
            if(n==1) player.discardPlayerCard(trigger.source,2,'e',true);
            if(n==2) player.discardPlayerCard(trigger.source,Infinity,'e',true);   
            if(n==3) player.discardPlayerCard(trigger.source,2,'h',true);
            if(n==4) player.discardPlayerCard(trigger.source,Infinity,'h',true);
            if(n==5) player.recover();
            if(n==6) trigger.source.damage();        
            if(n==7) player.gainPlayerCard(trigger.source,'h',true);
            if(n==8) player.gainPlayerCard(trigger.source,2,'h',true);
            if(n==9) player.draw(1);
            if(n==10) player.draw(2);
                     trigger.source.skip('phase');
         
},
            },
            MYjiansheng:{
                audio:"ext:秦时明月:2",
                trigger:{
                    player:"respond",
                },
                filter:function (event,player){
 return event.card.name=='shan';
    },
                check:function (event,player){
        return get.attitude(player,event.source)<=0;
    },
                logTarget:"source",
                content:function (){
         if(trigger.source.countCards('he')){
                player.discardPlayerCard(trigger.source,'he',true);
            }
    },
            },
            MYzongjian:{
                audio:"ext:秦时明月:2",
                mod:{
                    targetInRange:function (card,player,target){
            if(card.name=='sha'&&card.number){
                if(get.distance(player,target)<=card.number) return true;
            }
        },
                },
                trigger:{
                    player:"shaBegin",
                },
                logTarget:"target",
                check:function (event,player){
        return get.attitude(player,event.target)<=0;
    },
                filter:function (event,player){
        if(event.target.countCards('h')<=player.countCards('h')) return true;
        if(event.target.hp<=player.hp) return true;
        return false;
    },
                content:function (){
        if(trigger.target.countCards('h')<=player.countCards('h')) trigger.directHit=true;
        if(trigger.target.hp>=player.hp) player.addTempSkill('xinliegong2','shaAfter');
    },
                ai:{
                    threaten:0.5,
                },
            },
            MYbadao:{
                audio:"ext:秦时明月:1",
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                filter:function (event,player){
        return (event.source&&event.source.countCards('he')&&event.source!=player);
    },
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
                player.chooseBool('是否继续发动【霸道】？');
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
            
            player.gainPlayerCard(get.prompt('MYbadao',trigger.source),trigger.source,get.buttonValue,'he').set('logSkill',['MYbadao',trigger.source]);
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
            MYzhugong:{
                enable:"phaseUse",
                usable:1,
                prepare:"give2",
                filterTarget:function (card,player,target){
        if(player==target) return false;
        return true;
    },
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                filterCard:true,
                check:function (card){
        if(card.name=='du') return 20;
        return 7-get.value(card);
    },
                discard:false,
                content:function (){
        target.gain(cards,player).delay=false;
        player.draw();
    },
                ai:{
                    result:{
                        target:function (player,target){
                if(ui.selected.cards.length&&ui.selected.cards[0].name=='du'){
                    return -1;
                }
                return 1;
            },
                    },
                    order:2,
                },
            },
            MYmuniao:{
                audio:"ext:秦时明月:1",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return player!=target&&target.countCards('e')>0;
    },
                content:function (){
        'step 0'
        player.discardPlayerCard(target,'e',true);
        'step 1'
        game.asyncDraw([target],2);
    },
                ai:{
                    order:9,
                    result:{
                        target:function (player,target){
                if(target) return 5;
                if(player==target&&player.countCards>player) return 5;
                return 2;
            },
                    },
                },
            },
            MYjiguan:{
                audio:"ext:秦时明月:1",
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        return player.countCards('h',{type:'equip'})>0;
    },
                filterCard:function (card){
        return get.type(card)=='equip';
    },
                check:function (card){
        var player=_status.currentPhase;
        if(player.countCards('he',{subtype:get.subtype(card)})>1){
            return 11-get.equipValue(card);
        }
        return 6-get.value(card);
    },
                filterTarget:function (card,player,target){
        if(target.isMin()) return false;
        return player!=target&&!target.getEquip(card);
    },
                content:function (){
        target.equip(cards[0]);
        player.draw(2);
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
            MYliuhunzhou:{
                audio:"ext:秦时明月:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return player!=target&&target.countCards('h');
    },
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                content:function (){
        "step 0"
         player.chooseToCompare(target);
      
        'step 1'
        if(result.bool){
            target.turnOver();
        }
        else{
            player.draw();            
            event.target.useCard({name:'sha'},player);
            
            
        }
    },
                ai:{
                    result:{
                        target:function (player,target){
                var cards=player.getCards('h');
                var num=target.countCards('h');
                if(num>cards.length+3&&player.hp>1) return -2;
                if(num>cards.length+1&&player.hp>1) return -1;
                if(num==cards.length-1&&player.hp>1&&!get.is.altered('pozhen')) return -1;
                for(var i=0;i<cards.length;i++){
                    if(cards[i].number>9) return num==1?-1:-0.5;
                }
                return 0;
            },
                    },
                    order:9,
                },
            },
            MYxueshou:{
                audio:"ext:秦时明月:1",
                trigger:{
                    player:"shaBegin",
                },
                forced:true,
                filter:function (event,player){
        return event.card&&get.color(event.card)=='red';
    },
                content:function (){
        trigger.directHit=true;
         player.addTempSkill('xinliegong2','shaAfter');        
        
    },
            },
            MYwuyan:{
                mod:{
                    targetEnabled:function (card,player,target){
            if(get.type(card)=='trick'&&player!=target){
                return false;
            }
        },
                },
            },
            MYnance:{
                audio:"ext:秦时明月:1",
                trigger:{
                    player:"phaseDrawBegin",
                },
                check:function (event,player){
        return game.hasPlayer(function(current){
            return get.attitude(player,current)<0&&current.countCards('h');
        });
    },
                direct:true,
                content:function (){
        trigger.num--;
        player.addSkill('nance');
    },
                ai:{
                    threaten:1.3,
                },
            },
            MYhaoyan:{
                audio:"ext:秦时明月:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
  
        return player!=target&&target.countCards('h')>player.hp;
    },
                content:function (){
        'step 0'
        player.swapHandcards(target);
        'step 1'
        target.damage();
        'step 2'
        var card=game.createCard('lebu');
        player.addJudge(card);
        player.$draw(card);
        game.delay();        
    },
                ai:{
                    order:function (skill,player){
 if(player.countCards('h','tao','jiu')){
                return 0;
            }
            return 1;
        },
                    result:{
                        target:-0.5,
                    },
                    threaten:1.5,
                },
            },
            MYliusha:{
                audio:"ext:秦时明月:2",
                trigger:{
                    player:"phaseUseBegin",
                },
                content:function (){
        player.draw(2);
        player.addTempSkill('liusha');
    },
                ai:{
                    order:1,
                    result:{
                        player:1,
                    },
                    threaten:1.5,
                },
            },
            liusha:{
                mod:{
                    maxHandcard:function (player){
            return 2;
        },
                },
            },
            MYhengjian:{
                audio:"ext:秦时明月:2",
                enable:"phaseUse",
                filterCard:{
                    name:"sha",
                },
                filter:function (event,player){
        return player.countCards('h','sha')>1;
    },
                selectCard:2,
                check:function (card){
        var num=0;
        var player=_status.event.player;
        var players=game.filterPlayer();
        for(var i=0;i<players.length;i++){
            if(lib.filter.targetEnabled({name:'sha'},player,players[i])&&
            get.effect(players[i],{name:'sha'},player)>0){
                num++;
                if(num>1) return 8-get.value(card);
            }
        }
        return 0;
    },
                viewAs:{
                    name:"sha",
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"club","number":9,"name":"sha","cardid":"4219518320","clone":{"name":"sha","suit":"club","number":9,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":1515},"timeout":1486,"original":"h"},{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"club","number":8,"name":"sha","cardid":"6285306308","clone":{"name":"sha","suit":"club","number":8,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":1516},"timeout":1487,"original":"h"}],
                },
                selectTarget:[1,Infinity],
                filterTarget:function (card,player,target){
        return lib.filter.targetEnabled({name:'sha'},player,target);
    },
                ai:{
                    order:function (){
            return get.order({name:'sha'})+0.1;
        },
                    effect:{
                        player:function (card,player){
                if(_status.currentPhase!=player) return;
                if(card.name=='sha'&&player.countCards('h','sha')<2&&!player.needsToDiscard()){
                    var num=0;
                    var player=_status.event.player;
                    var players=game.filterPlayer();
                    for(var i=0;i<players.length;i++){
                        if(lib.filter.targetEnabled({name:'sha'},player,players[i])&&
                        get.attitude(player,players[i])<0){
                            num++;
                            if(num>1) return 'zeroplayertarget';
                        }
                    }
                }
            },
                    },
                    basic:{
                        useful:[5,1],
                        value:[5,1],
                    },
                    result:{
                        target:function (player,target){
                if(player.hasSkill('jiu')&&!target.getEquip('baiyin')){
                    if(get.attitude(player,target)>0){
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
            MYshitong:{
                audio:"ext:秦时明月:1",
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                content:function (){
       player.gainMaxHp(true); 
    
    


},
            },
            MYfuxieshu:{
                trigger:{
                    source:"damageBefore",
                },
                audio:"ext:秦时明月:1",
                priority:16,
                check:function (event,player){
        var att=get.attitude(player,event.player);
        if(event.player.hp>0) return att<=0;
        return att>0;
        
    },
                filter:function (event,player){
        return player.hp<player.maxHp;
    },
                content:function (){
        trigger.cancel();
        trigger.player.loseMaxHp();
        player.loseMaxHp();        
        player.recover(); 
    },
                ai:{
                    jueqing:true,
                },
            },
            MYzongheng:{
                audio:"ext:秦时明月:2",
                srlose:true,
                enable:["chooseToUse"],
                filterCard:function (){return false;},
                selectCard:-1,
                viewAs:{
                    name:"shunshou",
                },
                viewAsFilter:function (player){
        return !player.isLinked();
    },
                prompt:"横置你的武将牌，视为使用顺手牵羊",
                check:function (){return 1},
                onuse:function (result,player){
        player.link();
    },
                onrespond:function (result,player){
        player.link();
    },
                ai:{
                    skillTagFilter:function (player){
            return !player.isLinked();
        },
                    respondSha:true,
                    basic:{
                        useful:[5,1],
                        value:[5,1],
                        order:7.5,
                    },
                    order:function (){
            if(_status.event.player.hasSkillTag('presha',true,null,true)) return 10;
            return 3;
        },
                    result:{
                        target:function (player,target){
                if(player.hasSkill('jiu')&&!target.getEquip('baiyin')){
                    if(get.attitude(player,target)>0){
                        return -6;
                    }
                    else{
                        return -3;
                    }
                }
                return -1.5;
            },
                        player:function (player,target){
                if(get.attitude(player,target)<0&&!target.countCards('he')){
                    return 0;
                }
                if(get.attitude(player,target)>1){
                    var js=target.getCards('j');
                    if(js.length){
                        var jj=js[0].viewAs?{name:js[0].viewAs}:js[0];
                        if(jj.name=='shunshou') return 1;
                        if(js.length==1&&get.effect(target,jj,target,player)>=0){
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
                        loseCard:1,
                        gain:1,
                    },
                    wuxie:function (target,card,player,viewer){
            if(get.attitude(viewer,player)>0&&get.attitude(viewer,target)>0){
                return 0;
            }
        },
                },
                group:["xinzongheng"],
            },
            MYbaihe:{
                audio:"ext:秦时明月:2",
                trigger:{
                    player:"phaseEnd",
                },
                check:function (event,player){
        var num=game.countPlayer(function(current){
            if(current.isLinked()){
                return get.attitude(player,current);
            }
        });
        return num<0;
    },
                filter:function (event,player){
        return player.isLinked();
    },
                frequent:true,
                content:function (){
        "step 0"
        event.targets=game.filterPlayer(function(current){
            if(current.isLinked()){
                return true;
            }
        });
        event.num=0;
        event.targets.sort(lib.sort.seat);
        "step 1"
        if(event.num<event.targets.length){
            var target=event.targets[event.num];
            if(player==target){
                player.draw(true);
            }
            else{
                target.draw(true);
            }
            event.num++;
            event.redo();
        }
    },
            },
            MYroujia:{
                trigger:{
                    player:"recoverEnd",
                },
                forced:true,
                content:function (){
        player.changeHujia();
        player.draw();        
        
    },
            },
            MYchongzao:{
                derivation:["MYxiongbao"],
                audio:"ext:秦时明月:2",
                unique:true,
                enable:"chooseToUse",
                mark:true,
                skillAnimation:true,
                animationStr:"机关无双",
                animationColor:"fire",
                init:function (player){
        player.storage.MYchongzao=false;
    },
                filter:function (event,player){
        if(player.storage.MYchongzao) return false;
        if(event.type=='dying'){
            if(player!=event.dying) return false;
            return true;
        }
        else if(event.parent.name=='phaseUse'){
            return true;
        }
        return false;
    },
                content:function (){
        'step 0'
        player.hp=Math.min(3,player.maxHp);
        player.discard(player.getCards('hej'));
        player.draw(3);
        player.awakenSkill('MYchongzao');
        player.addSkill('MYxiongbao');        
        player.storage.niepan=true;
        'step 1'
        player.link(false);
        'step 2'
        player.turnOver(false);
    },
                ai:{
                    order:1,
                    skillTagFilter:function (player){
            if(player.storage.MYchongzao) return false;
            if(player.hp>0) return false;
        },
                    save:true,
                    result:{
                        player:function (player){
                if(player.hp==0) return 10;
                if(player.hp<=2&&player.countCards('he')<=1) return 10;
                return 0;
            },
                    },
                    threaten:function (player,target){
            if(!target.storage.MYchongzao) return 0.6;
        },
                },
                intro:{
                    content:"limited",
                },
            },
            MYxiongbao:{
                audio:"ext:秦时明月:1",
                group:["xiongbao"],
                trigger:{
                    player:"shaBegin",
                },
                forced:true,
                filter:function (event,player){
        return !event.directHit;
    },
                priority:-1,
                content:function (){
        if(typeof trigger.shanRequired=='number'){
            trigger.shanRequired++;
        }
        else{
            trigger.shanRequired=2;
        }
    },
            },
            MYyehou:{
                group:["yehou"],
                audio:"ext:秦时明月:2",
                trigger:{
                    player:["useCardAfter","respondAfter","discardAfter"],
                },
                frequent:true,
                filter:function (event,player){
        if(player==_status.currentPhase) return false;
        if(event.cards){
            for(var i=0;i<event.cards.length;i++){
                if(get.color(event.cards[i])=='red'&&
                event.cards[i].original!='j') return true;
            }
        }
        return false;
    },
                content:function (){
 "step 0"
        player.judge(function(card){return (get.color(card)=='red')?1.5:-0.5});
        "step 1"
        if(result.judge>0){        
            player.draw();
        }
        else{
            player.chooseTarget('选择一名其他角色，弃置其一张牌',function(card,player,target){
            return player!=target&&target.countCards('he')>0;
        }).set('ai',function(target){
            return -get.attitude(_status.event.player,target);
        });     
        }   
        
       "step 2"
        if(result.bool){
            player.logSkill('MYyehou',result.targets);
            event.target=result.targets[0];
            player.discardPlayerCard(event.target,true);
        }
        else{
            event.finish();
        }
             
    },
                ai:{
                    threaten:0.7,
                },
            },
            MYlangqun:{
                audio:"ext:秦时明月:1",
                trigger:{
                    player:"damageEnd",
                },
                forced:true,
                unique:true,
                content:function (){
        "step 0"
        event.players=get.players(player);
        event.players.remove(player);
        "step 1"
        if(event.players.length){
            event.players.shift().damage('thunder');
            event.redo();
        }
    },
            },
            MYjuenian:{
                audio:"ext:秦时明月:2",
                trigger:{
                    global:"phaseEnd",
                },
                check:function (event,player){
        return get.attitude(player,event.player)>0;
    },
                filter:function (event,player){
        return event.player.hp<=2;
    },
                logTarget:"player",
                content:function (){
        trigger.player.draw();
    },
                ai:{
                    expose:0.1,
                },
            },
            MYcisha:{
                audio:"ext:秦时明月:1",
                trigger:{
                    player:["phaseDiscardEnd"],
                },
                direct:true,
                filter:function (event,player){
        if(event.name=='phaseDiscard'){
            return event.cards&&event.cards.length>0
        }
        
        
        return false;
    },
                content:function (){
      "step 0"
        player.chooseTarget(get.prompt('刺杀'),function(card,player,target){
            return lib.filter.targetEnabled({name:'sha'},player,target);
        }).set('ai',function(target){
            return get.effect(target,{name:'sha'},_status.event.player);
        });
        "step 1"
        if(result.bool){
            player.logSkill('刺杀');
            player.useCard({name:'sha'},result.targets,false);
        }
    },
                ai:{
                    threaten:function (player,target){
            return 1.6;
        },
                },
            },
            MYyiyong:{
                audio:"ext:秦时明月:2",
                trigger:{
                    player:"loseEnd",
                },
                frequent:true,
                filter:function (event,player){
        return player!=_status.currentPhase&&get.itemtype(event.cards)=='cards';
    },
                content:function (){
       player.changeHujia();
       player.storage.nsbaquan=true;        
    },
                group:"MYyiyong_clear",
                subSkill:{
                    clear:{
                        trigger:{
                            player:"phaseBegin",
                        },
                        forced:true,
                        filter:function (event,player){
                return player.storage.nsbaquan&&player.hujia>0;
            },
                        content:function (){
                player.changeHujia(-player.hujia);
                game.log(player,'失去了所有护甲');
                delete player.storage.nsbaquan;
            },
                        sub:true,
                    },
                },
            },
            MYmoushi:{
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                unique:true,
                derivation:["MYliangji","MYyouce"],
                content:function (){
    
    
       
        "step 0"
        player.judge(function(card){return (get.color(card)=='black')?1.5:-0.5});
        "step 1"
        if(result.judge>0){
            trigger.untrigger();
            trigger.responded=true;

        player.storage.MYmoushi=true;
        player.removeSkill('MYliangji');
        player.addSkill('MYyouce');            
        }
        
        else{
            
        player.storage.MYmoushi=true;
        player.removeSkill('MYyouce');
        player.addSkill('MYliangji');            
              }            
    },
                ai:{
                    threaten:0.7,
                },
            },
            MYyouce:{
                audio:"ext:秦时明月:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return target.num('h')>0&&player!=target;
    },
                content:function (){
        "step 0"
        if(target.get('h').length==0||player.get('h').length==0){
            event.finish();
            return;
        }
        target.chooseCard(true).ai=function(card){
            var evt=_status.event.getParent();
            if(ai.get.recoverEffect(evt.target,evt.player,evt.target)>0) return get.number(card);
            if(ai.get.recoverEffect(evt.target,evt.player,evt.target)<=0) return -get.number(card);
        };
        "step 1"
        event.dialog=ui.create.dialog(get.translation(target)+'展示的手牌',result.cards);
        event.videoId=lib.status.videoId++;

        game.broadcast('createDialog',event.videoId,get.translation(target)+'展示的手牌',result.cards);
        game.addVideo('cardDialog',null,[get.translation(target)+'展示的手牌',get.cardsInfo(result.cards),event.videoId]);
        event.card2=result.cards[0];
        game.log(target,'展示了',event.card2);
        var rand=Math.random()<0.5;
        player.chooseCard('请选择一张手牌').ai=function(card){
            var evt=_status.event.getParent();
            if(ai.get.recoverEffect(evt.target,evt.player,evt.player)>0) return get.number(card);
            return 1;
        };
        game.delay(2);
        "step 2"
        if(result.bool){
            player.showCards(result.cards[0]);
            player.discard(result.cards);
            var number=get.number(result.cards[0]);
            if(number<=get.number(event.card2)){
                target.draw(2);
            }
            else{
                player.draw(2);
            }
        }
        event.dialog.close();
        game.addVideo('cardDialog',null,event.videoId);
        game.broadcast('closeDialog',event.videoId);
    },
                ai:{
                    basic:{
                        order:4,
                        value:[3,1],
                        useful:1,
                    },
                    result:{
                        target:function (player,target){
                if(target.hp==target.maxHp) return 1;
                if(player.hp==player.maxHp) return 1;
                if(target.hp==1) return 2;
                var hs=player.num('h');
                var bool=false;
                for(var i=0;i<hs.length;i++){
                    if(hs[i].number>=9&&ai.get.value(hs[i])<7){
                        bool=true;
                        break;
                    }
                }
                if(!bool) return ai.get.recoverEffect(target);
                return 0;                        
            },
                    },
                    tag:{
                        recover:1,
                    },
                },
            },
            MYliangji:{
                audio:"ext:秦时明月:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return target.num('h')>0&&player!=target;
    },
                content:function (){
        "step 0"
        if(target.get('h').length==0||player.get('h').length==0){
            event.finish();
            return;
        }
        target.chooseCard(true).ai=function(card){
            var evt=_status.event.getParent();
            if(ai.get.recoverEffect(evt.target,evt.player,evt.target)>0) return get.number(card);
            if(ai.get.recoverEffect(evt.target,evt.player,evt.target)<=0) return -get.number(card);
        };
        "step 1"
        event.dialog=ui.create.dialog(get.translation(target)+'展示的手牌',result.cards);
        event.videoId=lib.status.videoId++;

        game.broadcast('createDialog',event.videoId,get.translation(target)+'展示的手牌',result.cards);
        game.addVideo('cardDialog',null,[get.translation(target)+'展示的手牌',get.cardsInfo(result.cards),event.videoId]);
        event.card2=result.cards[0];
        game.log(target,'展示了',event.card2);
        var rand=Math.random()<0.5;
        player.chooseCard('请选择一张手牌').ai=function(card){
            var evt=_status.event.getParent();
            if(ai.get.recoverEffect(evt.target,evt.player,evt.player)>0) return get.number(card);
            return 1;
        };
        game.delay(2);
        "step 2"
        if(result.bool){
            player.showCards(result.cards[0]);
            player.discard(result.cards);
            var number=get.number(result.cards[0]);
            if(number<=get.number(event.card2)){
                target.recover();
            }
            else{
                player.recover();
            }
        }
        event.dialog.close();
        game.addVideo('cardDialog',null,event.videoId);
        game.broadcast('closeDialog',event.videoId);
    },
                ai:{
                    basic:{
                        order:4,
                        value:[3,1],
                        useful:1,
                    },
                    result:{
                        target:function (player,target){
                if(target.hp==target.maxHp) return 0;
                if(player.hp==player.maxHp) return 0;
                if(target.hp==1) return 2;
                var hs=player.num('h');
                var bool=false;
                for(var i=0;i<hs.length;i++){
                    if(hs[i].number>=9&&ai.get.value(hs[i])<7){
                        bool=true;
                        break;
                    }
                }
                if(!bool) return ai.get.recoverEffect(target);
                return 0;                        
            },
                    },
                    tag:{
                        recover:1,
                    },
                },
            },
            MYruya:{
                audio:"ext:秦时明月:1",
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('MYruya'),[1,trigger.num],function(card,player,target){
            return target.countCards('h')<Math.min(target.hp,5);
        }).set('ai',function(target){
            var att=get.attitude(_status.event.player,target);
            if(att>2){
                return Math.min(5,target.hp)-target.countCards('h');
            }
            return att/3;
        });
        "step 1"
        if(result.bool){
            player.logSkill('MYruya',result.targets);
            for(var i=0;i<result.targets.length;i++){
                result.targets[i].draw(Math.min(5,result.targets[i].hp)-result.targets[i].countCards('h'));
            }
        }
    },
                ai:{
                    order:1,
                    result:{
                        player:1,
                    },
                    threaten:1.5,
                },
            },
            MYdadao:{
                audio:"ext:秦时明月:2",
                trigger:{
                    global:"useCard",
                },
                filter:function (event,player){
    
        return get.type(event.card.viewAs||event.card.name)=='trick'&&player.countCards('h')<player.maxHp;    
    },
                frequent:true,
                content:function (){
        player.draw();
    },
                ai:{
                    threaten:1.6,
                    noautowuxie:true,
                },
            },
            MYwuji:{
                audio:"ext:秦时明月:2",
                trigger:{
                    player:"gainAfter",
                },
                direct:true,
                filter:function (event,player){
        return player.countCards('h')>player.maxHp;
    },
                content:function (){
        "step 0"
        player.chooseToDiscard('h',true);
     
    },
            },
            MYtiandao:{
                audio:"ext:秦时明月:2",
                check:function (event,player){
        return get.tag(event.card,'multineg')||get.effect(player,event.card,event.player,player)<=0;
    },
                filter:function (event,player){
        return get.type(event.card,'trick')=='trick';
    },
                trigger:{
                    target:"useCardToBegin",
                },
                content:function (){
   "step 0"
        player.judge(function(card){return (get.color(card)=='black')?1.5:-0.5});
        "step 1"
        if(result.judge>0){
            trigger.untrigger();
            trigger.responded=true;
            trigger.cancel();              
        }
        else{
            player.draw();                
        }        
    },
            },
            MYrenzong:{
                audio:"ext:秦时明月:1",
                enable:"phaseUse",
                usable:1,
                unique:true,
                filterTarget:function (card,player,target){
        return player!=target;
    },
                multitarget:true,
                multiline:true,
                selectTarget:-1,
                filter:function (event,player){
        return player.hp>0;
    },
                check:function (event,player){
        var num=game.countPlayer(function(current){
            if(current.countCards('he')&&current!=player&&get.attitude(player,current)<=0){
                return true;
            }
            if(current.countCards('j')&&current!=player&&get.attitude(player,current)>0){
                return true;
            }
        });
        return num>=2;
    },
                content:function (){
        "step 0"
        var targets=game.filterPlayer();
        targets.remove(player);
        targets.sort(lib.sort.seat);
        event.targets=targets;
        event.num=0;       
        player.line(targets,'green');
        "step 1"    
        event.current=player.next;
        if(num<event.targets.length){
            if(event.targets[num].countCards('hej')){
                player.gainPlayerCard(event.targets[num],'hej',true);
            }
            event.num++;
            event.redo();
        }
        "step 2"    
        var chat=[''].randomGet();
        player.say(chat); 
        var maxh=true;       
        if(maxh){
            player.chooseCard('选择一张手牌交给'+get.translation(event.current),true).ai=function(card){
                if(get.attitude(player,event.current)>0)
                    return get.value(card);
                return -get.value(card);
            }
        }                       
        "step 3"
        if(result.bool){
            event.current.gain(result.cards[0]);
            player.$give(1,event.current);
            if(event.current.next!=player&&event.current.next.isAlive()){
                event.current=event.current.next;
            }
            else{
                event.finish();
            }
            event.goto(2);
        }
     
    },
                ai:{
                    order:1,
                    result:{
                        player:1,
                    },
                    threaten:1.5,
                },
            },
            MYzhiyin:{
                audio:"ext:秦时明月:1",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return player!=target&&target.countCards('h');
    },
                filterCard:true,
                check:function (card){
        return 7-get.value(card);
    },
                position:"h",
                content:function (){
        "step 0"
        var card=target.getCards('h').randomGet();
        if(!card){
            event.finish();
            return;
        }
         target.showCards(card);
        if(get.color(card)==get.color(cards[0])){
            event.bool=true;
        }
        "step 1"
        if(event.bool){
          player.discard(player.getCards('h'));
         
        var cards = target.getCards('h');
        if (cards && cards.length) {
            for (var j = 0; j < cards.length; j++) {
                var card = game.createCard(cards[j].name, cards[j].suit, cards[j].number, cards[j].nature);
                player.gain(card);
            }
        }
        }
        else if(player.countCards('he')){
            target.loseHp();
        }
    },
                ai:{
                    order:1,
                    result:{
                        target:function (player,target){
                if(target.hasSkillTag('noh')) return 0;
                return -1;
            },
                    },
                    threaten:1.3,
                },
            },
            MYqinxian:{
                audio:"ext:秦时明月:2",
                trigger:{
                    player:"recoverEnd",
                },
                direct:true,
                filter:function (event,player){
        return game.hasPlayer(function(current){
            return current!=player;
        });
    },
                content:function (){
        'step 0'
        player.chooseTarget('琴弦：令一名其他角色失去一点体力',function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return -get.attitude(player,target)/(1+target.hp);
        });
        'step 1'
        if(result.bool){
            player.logSkill('MYqinxian',result.targets[0]);
            result.targets[0].loseHp();
        }
    },
                ai:{
                    threaten:1.5,
                    expose:0.2,
                },
                group:"MYqinxian_clear",
                subSkill:{
                    clear:{
                        trigger:{
                            player:"damageEnd",
                        },
                        direct:true,
                        filter:function (event,player){
        return game.hasPlayer(function(current){
            return current!=player&&current.isDamaged();
        });
    },
                        content:function (){
        'step 0'
        player.chooseTarget('琴弦：令一名其他角色回复一点体力',function(card,player,target){
            return target!=player&&target.hp<target.maxHp;
        }).ai=function(target){
            return get.recoverEffect(target,player,player);
        };
        'step 1'
        if(result.bool){
            player.logSkill('MYqinxian',result.targets[0]);
            result.targets[0].recover();
        }
    },
                        ai:{
                            threaten:1.5,
                            expose:0.2,
                        },
                        sub:true,
                    },
                },
            },
            MYqishu:{
                audio:"ext:秦时明月:4",
                trigger:{
                    player:["useCard","respond"],
                },
                frequent:true,
                filter:function (event){
        return (get.type(event.card)=='basic'&&event.cards[0]&&event.cards[0]==event.card);
    },
                content:function (){
        var list=get.inpile('trick','trick');
        var list2=[];
        for(var i=0;i<1;i++){
            list2.push(game.createCard(list.randomGet()));
        }
        player.gain(list2,'draw');
    },
                ai:{
                    order:9.8,
                    threaten:1.8,
                    result:{
                        player:1,
                    },
                },
            },
            MYxiandan:{
                audio:"ext:秦时明月:1",
                trigger:{
                    player:"dying",
                },
                priority:7,
                unique:true,
                forced:true,
                filter:function (event,player){
        return player.hp<=0;
    },
                content:function (){
           "step 0"
        player.judge(function(card){return (get.color(card)=='red')?1.5:-0.5});
        "step 1"
        if(result.judge>0){
            trigger.untrigger();
            trigger.responded=true;
            player.recover(1-player.hp);
        }
             
    },
                ai:{
                    threaten:0.8,
                },
            },
            MYshuzhan:{
                derivation:["MYdiesha","MYshuangsha"],
                audio:"ext:秦时明月:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return player!=target&&target.countCards('h')>0;
    },
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                content:function (){
        "step 0"
        player.chooseToCompare(target);
        "step 1"
        if(result.bool){
           player.chooseControl('叠杀','双杀').set('ai',function(event){
            if(player.countCards('h')>player.hp) return '叠杀';
            return '双杀';
        });
      
        
   
        }
        else{
               player.draw(2);
            player.addTempSkill('MYshuzhan_xianzhi');
        }
     "step 2"
        if(result.control=='叠杀'){
            
            player.addTempSkill('MYdiesha');
        }        

if(result.control=='双杀'){
            
            player.addTempSkill('MYshuangsha');
        }    


    },
                ai:{
                    order:7,
                    result:{
                        target:-0.5,
                    },
                    threaten:1.2,
                },
                subSkill:{
                    xianzhi:{
                        mod:{
                            cardEnabled:function (card){if(get.color(card)=='black') return false},
                        },
                        sub:true,
                    },
                },
            },
            MYdiesha:{
                trigger:{
                    player:"shaEnd",
                },
                filter:function (event, player) {
        return event.target != player && !event.card.lianji && !event.card.huiyinzhiren;
    },
                content:function () {
        var card = game.createCard(trigger.card.name, trigger.card.suit, trigger.card.number, trigger.card.nature);
        card.lianji = true;
        player.useCard(card, (trigger._targets || trigger.targets).slice(0), false);
    },
                unique:true,
                nodisable:true,
                ai:{
                    unequip:true,
                    skillTagFilter:function (player,tag,arg){
            
            if(arg&&arg.name=='sha') return true;
            return false;
        },
                },
            },
            MYshuangsha:{
                mod:{
                    targetInRange:function (card,player,target,now){
            if(card.name=='sha') return true;
        },
                    selectTarget:function (card,player,range){
            if(card.name=='sha'&&range[1]!=-1) range[1]++;
        },
                },
            },
            MYxiayi:{
                audio:"ext:秦时明月:1",
                trigger:{
                    global:"shaBefore",
                },
                direct:true,
                priority:5,
                filter:function (event,player){
        if(player==event.target||player==event.player) return false;
        if(!player.countCards('he')) return false;
        return get.distance(player,event.target,'attack')<=1;
    },
                content:function (){
        "step 0"
        var save=false;
        if(get.attitude(player,trigger.target)>2){
            if(player.countCards('h','shan')||player.getEquip(2)||
            trigger.target.hp==1||player.hp>trigger.target.hp+1){
                if(!trigger.target.countCards('h','shan')||trigger.target.countCards('h')<player.countCards('h')){
                    save=true;
                }
            }
        }
        var next=player.chooseToDiscard('he',get.prompt('MYxiayi'));
        next.logSkill=['MYxiayi',trigger.target];
        next.ai=function(card){
            if(save){
                return 7-get.value(card);
            }
            return 0;
        }
        "step 1"
        if(result.bool){

            player.draw();
            trigger.target=player;
            trigger.untrigger();
            trigger.trigger('useCardToBefore');
            trigger.trigger('shaBefore');
          
            game.delay();
        }
    },
                ai:{
                    effect:{
                        target:function (card){
                if(card.name=='sha') return 1.3;
            },
                    },
                },
            },
            MYmomei:{
                group:["MYmomei_MYsha","MYmomei_MYsha1","MYmomei_MYdraw"],
                subSkill:{
                    MYdraw:{
                        trigger:{
                            player:["useCard","respond"],
                        },
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                if(!get.zhu(player,'shouyue')) return false;
                return event.skill=='MYfeigong_MYshan'||event.skill=='MYmomei_MYsha';
            },
                        content:function (){
                player.draw();
                player.storage.fanghun2++;
            },
                        sub:true,
                    },
                    MYsha:{
                        audio:"ext:秦时明月:1",
                        enable:["chooseToUse","chooseToRespond"],
                        filterCard:{
                            name:"shan",
                        },
                        viewAs:{
                            name:"sha",
                            suit:"heart",
                            number:12,
                            cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"heart","number":12,"name":"shan","cardid":"4889168270","clone":{"name":"shan","suit":"heart","number":12,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":569},"timeout":534,"original":"h"}],
                        },
                        viewAsFilter:function (player){
                if(!player.countCards('h','shan')) return false;
            },
                        prompt:"你可以将[闪]当[杀]使用或打出，若是使用，你可以弃置目标一张牌。",
                        check:function (){return 1},
                        ai:{
                            effect:{
                                target:function (card,player,target,current){
                        if(get.tag(card,'respondSha')&&current<0) return 0.6
                    },
                            },
                            respondSha:true,
                            skillTagFilter:function (player){
                    if(!player.countCards('h','shan')) return false;
                },
                            order:function (){
                    return get.order({name:'sha'})+0.1;
                },
                            useful:-1,
                            value:-1,
                            basic:{
                                useful:[5,1],
                                value:[5,1],
                            },
                            result:{
                                target:function (player,target){
                        if(player.hasSkill('jiu')&&!target.getEquip('baiyin')){
                            if(get.attitude(player,target)>0){
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
                        sub:true,
                    },
                    "MYsha1":{
                        audio:2,
                        trigger:{
                            player:"shaBefore",
                        },
                        filter:function (event,player){
        if(event.skill!='MYmomei_MYsha'&&event.skill!='fanghun_sha') return false;
        return event.target.countCards('h')>0;
    },
                        logTarget:"target",
                        content:function (){   
       
        player.discardPlayerCard(true,trigger.target,'he');
                
       
    },
                        ai:{
                            combo:"longdan",
                            mingzhi:false,
                            effect:{
                                target:function (card,player,target,current){
                        if(get.tag(card,'respondShan')||get.tag(card,'respondSha')){
                            if(get.attitude(target,player)<=0){
                                if(current>0) return;
                                if(target.countCards('h')==0) return 1.6;
                                if(target.countCards('h')==1) return 1.2;
                                if(target.countCards('h')==2) return [0.8,0.2,0,-0.2];
                                return [0.4,0.7,0,-0.7];
                            }
                        }
                    },
                            },
                        },
                        sub:true,
                    },
                },
            },
            MYfeigong:{
                group:["MYfeigong_MYshan","MYfeigong_MYshan1","MYmomei_MYdraw"],
                subSkill:{
                    MYdraw:{
                        trigger:{
                            player:["useCard","respond"],
                        },
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                if(!get.zhu(player,'shouyue')) return false;
                return event.skill=='MYfeigong_MYshan'||event.skill=='MYmomei_MYsha';
            },
                        content:function (){
                player.draw();
                player.storage.fanghun2++;
            },
                        sub:true,
                    },
                    MYshan:{
                        audio:"ext:秦时明月:1",
                        enable:["chooseToRespond"],
                        filterCard:{
                            name:"sha",
                        },
                        viewAs:{
                            name:"shan",
                            suit:"spade",
                            number:4,
                        },
                        prompt:"你可以将[杀]当[闪]使用或打出，若如此做，你可以视为对其使用一张杀。",
                        check:function (){return 1},
                        viewAsFilter:function (player){
                if(!player.countCards('h','sha')) return false;
            },
                        ai:{
                            respondShan:true,
                            skillTagFilter:function (player){
                    if(!player.countCards('h','sha')) return false;
                },
                            effect:{
                                target:function (card,player,target,current){
                        if(get.tag(card,'respondShan')&&current<0) return 0.6
                    },
                            },
                            order:4,
                            useful:-1,
                            value:-1,
                            basic:{
                                useful:[7,2],
                                value:[7,2],
                            },
                        },
                        sub:true,
                    },
                    "MYshan1":{
                        audio:2,
                        trigger:{
                            player:"respond",
                        },
                        filter:function (event,player){
                if(event.skill!='MYfeigong_MYshan'&&event.skill!='fanghun_sha'&&
                event.skill!='fanghun_shan'&&event.skill!='fanghun_sha') return false;
                return event.source&&event.source.countCards('h')>0;
            },
                        logTarget:"source",
                        content:function (){
                
           player.useCard({name:'sha'},trigger.source);
    },
                        ai:{
                            combo:"longdan",
                            mingzhi:false,
                            effect:{
                                target:function (card,player,target,current){
                        if(get.tag(card,'respondShan')||get.tag(card,'respondSha')){
                            if(get.attitude(target,player)<=0){
                                if(current>0) return;
                                if(target.countCards('h')==0) return 1.6;
                                if(target.countCards('h')==1) return 1.2;
                                if(target.countCards('h')==2) return [0.8,0.2,0,-0.2];
                                return [0.4,0.7,0,-0.7];
                            }
                        }
                    },
                            },
                        },
                        sub:true,
                    },
                },
            },
            MYmogong:{
                trigger:{
                    player:["phaseBefore","changeHp"],
                },
                forced:true,
                popup:false,
                unique:true,
                derivation:["MYmomei","MYfeigong"],
                content:function (){
        player.removeAdditionalSkill('MYmogong');
        var list=[];
        if(player.hp<=3){
            list.push('MYmomei');
            list.push('MYfeigong');
        }

        if(list.length){
            player.addAdditionalSkill('MYmogong',list);
        }
    },
                ai:{
                    maixie:true,
                    effect:{
                        target:function (card,player,target){
                if(get.tag(card,'damage')){
                    if(!target.hasFriend()) return;
                    if(target.hp>=4) return [0,1];
                }
                if(get.tag(card,'recover')&&player.hp>=player.maxHp-1) return [0,0];
            },
                    },
                },
            },
            MYdaofa:{
                mod:{
                    cardUsable:function (card,player,num){
          
            if(card.name=='sha') return (player.maxHp-player.hp)+1;
        },
                    selectTarget:function (card,player,range){
            if(card.name=='sha'&&range[1]!=-1) range[1]+=player.maxHp-player.hp;
        },
                },
                ai:{
                    unequip:true,
                    skillTagFilter:function (player,tag,arg){
            if(!get.zhu(player,'shouyue')) return false;
            if(arg&&arg.name=='sha') return true;
            return false;
        },
                },
            },
            MYjieniu:{
                audio:"ext:秦时明月:1",
                trigger:{
                    player:"shaBegin",
                },
                filter:function (event,player){
        return event.target.countCards('e');
    },
                logTarget:"target",
                check:function (event,player){
        if(event.target.hasSkillTag('noe')) return false;
        return get.attitude(player,event.target)<0;
    },
                content:function (){
        
        
           if(trigger.target.countCards('e')){
                player.discardPlayerCard(trigger.target,Infinity,'e',true);
            } 
              
     
   
    },
            },
            MYzhishu:{
                audio:"ext:秦时明月:1",
                enable:"phaseUse",
                usable:1,
                filterCard:true,
                selectCard:1,
                filterTarget:function (card,player,target){
        if(player==target) return false;
        return get.distance(player,target);
    },
                selectTarget:1,
                content:function (){        
        
        target.chooseToDiscard('he',true);
        
                  
        if(target.hp>=player.hp){
            target.damage();
            player.draw();
        }
    },
                check:function (card){
        return 6-ai.get.value(card);
    },
                ai:{
                    order:9,
                    result:{
                        target:-0.5,
                    },
                    threaten:1.2,
                },
            },
            MYhanguang:{
                audio:"ext:秦时明月:1",
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                filter:function (event,player){

return event.source&&event.source.hp>=player.hp;

   
    },
                content:function (){
      
        
            player.draw();
           
    },
            },
            MYzengqi:{
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                filter:function (event,player){
        return player.getStat().skill.MYzhujian>=1;
    },
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt('MYzengqi'),function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return get.attitude(_status.event.player,target);
        });
        'step 1'
        if(result.bool){
            player.logSkill('MYzengqi',result.targets);
            result.targets[0].draw();
        }
    },
            },
            MYtian:{
                audio:"ext:秦时明月:1",
                trigger:{
                    player:"phaseBegin",
                },
                frequent:true,
                filter:function (event,player){
        return player.countCards('h')==player.hp;
    },
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('MYtian'),function(card,player,target){
            return lib.filter.targetEnabled({name:'sha'},player,target);
        }).set('ai',function(target){
            return get.effect(target,{name:'sha'},_status.event.player);
        });
        "step 1"
        if(result.bool){
            player.logSkill('MYtian');
            player.useCard({name:'sha'},result.targets,false);
        }
        "step 2"     
        
        if(result.bool){
           player.changeHujia(); 
        }        
        
    },
                ai:{
                    threaten:function (player,target){
            return 1.6;
        },
                },
            },
            MYfu:{
                audio:"ext:秦时明月:1",
                trigger:{
                    player:"phaseBegin",
                },
                filter:function (event,player){
        return player.countCards('h')<player.hp;
    },
                frequent:true,
                content:function (){
      player.draw();
    },
                ai:{
                    threaten:1.6,
                },
            },
            MYtianfu:{
                group:["MYtian","MYfu"],
                audio:"ext:秦时明月:1",
                trigger:{
                    player:"phaseBegin",
                },
                frequent:true,
                filter:function (event,player){
        return player.countCards('h')>player.hp;
    },
                content:function (){
        player.recover();
    },
            },
            MYguiye:{
                audio:"ext:秦时明月:1",
                trigger:{
                    player:"useCard",
                },
                frequent:true,
                filter:function (event){
        return (get.type(event.card)=='trick'&&event.cards[0]&&event.cards[0]==event.card);
    },
                content:function (){
          "step 0"
        player.chooseTarget(get.prompt('MYguiye'),function(card,player,target){
            return player!=target&&target.countCards('he')>0;
        }).set('autodelay',trigger.name=='respond'?0.5:1).ai=function(target){
            return -get.attitude(player,target);
        };
        "step 1"
        if(result.bool){
            player.logSkill('MYguiye',result.targets);
            player.discardPlayerCard(result.targets[0],true);
            
            
        }
        else{
            event.finish();
        }        
        
        'step 2'
        var card=result.cards[0];
      if(get.color(card)=='black'){
            
            player.draw();
    }
      
    },
                ai:{
                    threaten:1.4,
                    noautowuxie:true,
                },
            },
            MYyingwei:{
                mod:{
                    globalFrom:function (from,to,current){
            if(from.hp<=2) return current-1;
        },
                },
                audio:"ext:秦时明月:2",
                enable:["chooseToRespond"],
                filter:function (event,player){
        return player.countCards('h')<=2;
    },
                filterCard:function (card){
        return get.color(card)=='black';
    },
                viewAs:{
                    name:"shan",
                    suit:"spade",
                    number:9,
                },
                viewAsFilter:function (player){
        if(!player.countCards('h',{color:'black'})) return false;
    },
                prompt:"将一张黑色手牌当闪打出",
                check:function (){return 1},
                ai:{
                    respondShan:true,
                    skillTagFilter:function (player){
            if(!player.countCards('h',{color:'black'})) return false;
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
            MYjiansuo:{
                audio:"ext:秦时明月:2",
                trigger:{
                    player:"shaBegin",
                },
                check:function (event,player){
        return get.attitude(player,event.target)<0;
    },
                logTarget:"target",
                content:function (){
            var target=trigger.target;
            if(!player.storage.MYjiansuo){
                player.storage.MYjiansuo=[];
            }
            for(var i=0;i<player.storage.MYjiansuo.length;i++){
                if(!game.players.contains(player.storage.MYjiansuo[i])){
                    player.storage.MYjiansuo.splice(i--,1);
                }
            }
            player.storage.MYjiansuo.remove(target);
            player.storage.MYjiansuo.push(target);
            if(player.storage.MYjiansuo.length>2){
                player.storage.MYjiansuo.shift();
            }
            target.addTempSkill('fengyin',{player:'phaseAfter'});
            player.markSkill('MYjiansuo');
        
    },
                ai:{
                    expose:0.2,
                    threaten:1,
                },
                group:["MYjiansuo_1"],
                subSkill:{
                    "1":{
                        trigger:{
                            player:"shaMiss",
                        },
                        check:function (event,player){
        return get.attitude(player,event.target)<0;
    },
                        forced:true,
                        content:function (){
     player.draw();
    },
                        sub:true,
                    },
                },
            },
            MYmeiwu:{
                audio:"ext:秦时明月:2",
                srlose:true,
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                filterTarget:function (card,player,target){
        
        return target.countCards('h')&&player!=target;
    },
                content:function (){
        var cardx=target.getCards('h').randomGet();
        player.showCards(cardx);
        if(get.color(cardx)=='black'){
        
            target.addJudge('bingliang',cardx);
            target.$giveAuto(cardx,target);
        }
        else{
            player.gain(cardx);
            target.$giveAuto(cardx,player);
        }
    },
                ai:{
                    result:{
                        target:function (player,target){
                return -target.countCards('h');
            },
                    },
                    order:10,
                    expose:0.4,
                },
            },
            MYanfu:{
                trigger:{
                    global:"recoverAfter",
                },
                direct:true,
                filter:function (event,player){
        return game.hasPlayer(function(current){
            return current!=player;
        });
    },
                content:function (){
    'step 0' 
        player.chooseTarget('安抚：选择一名角色令其摸一张牌').ai=function(target){ 
            return get.attitude(player,target) 
        } 
        'step 1' 
        if(result.bool){ 
            player.logSkill('MYanfu',result.targets[0]); 
            result.targets[0].draw(); 
        } 
    },
                ai:{
                    threaten:0.8,
                    expose:0.2,
                },
            },
            MYxiaosheng:{
                audio:"ext:秦时明月:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
   
        return get.distance(player,target)<=1;
    },
                selectTarget:[1,Infinity],
                content:function (){
     
        if(target==targets[0]){
            game.asyncDraw(targets);
        }
      
    },
                ai:{
                    order:10,
                    result:{
                        target:function (player,target){
                if(target.countCards('j')) return 2;
                switch(target.countCards('he')){
                    case 0:return 0;
                    case 1:return 0.5;
                    case 2:return 0.8;
                    default:return 1;
                }
            },
                    },
                    threaten:1.2,
                },
            },
            MYhuadie:{
                usable:1,
                trigger:{
                    global:"damageAfter",
                },
                filter:function (event,player){
        return get.distance(player,event.player)<=1;
    },
                frequent:true,
                content:function (){
        
            player.draw();
        
    },
            },
            MYzhanshen:{
                audio:"ext:秦时明月:2",
                trigger:{
                    source:"damageEnd",
                },
                filter:function (event,player){
        return event.player.isAlive();
    },
                direct:true,
                logTarget:"player",
                content:function (){
        if(!trigger.player.hasSkill("MYzhanshen_sub")){
            trigger.player.addSkill("MYzhanshen_sub");
        }
        lib.skill.MYzhanshen.subSkill.sub.changeStorage(trigger.player,trigger.num);
    },
                subSkill:{
                    sub:{
                        init:function (player){
                player.storage.MYzhanshen_sub = 0;
            },
                        mark:true,
                        marktext:"战",
                        intro:{
                            name:"战神",
                            content:function (storage){
                    return "当前拥有<span class='greentext'>"+storage+"</span>枚'战'标记";
                },
                        },
                        changeStorage:function (player,count){
                player.storage.MYzhanshen_sub += count;
                player.$damagepop(count,'unknownx');
                if(player.storage.MYzhanshen_sub>0){
                    player.markSkill("MYzhanshen_sub");
                }
                else {
                    player.unmarkSkill("MYzhanshen_sub");
                }
                player.syncStorage("MYzhanshen_sub");
                game.log(player,(count>0?"获得了":"失去了"),Math.abs(count),"枚'战'标记");
                if(player.storage.MYzhanshen_sub>=2){
                    player.loseHp();
                    player.removeSkill("MYzhanshen_sub");
                }
            },
                        onremove:function (player){
                delete player.storage.MYzhanshen_sub;
            },
                        sub:true,
                    },
                },
            },
            MYbingxian:{
                audio:"ext:秦时明月:2",
                trigger:{
                    player:"damageEnd",
                },
                content:function (){
               'step 0'
player.draw(player.maxHp-player.hp);

  'step 1' 
    if(player.hp>0){
            player.draw(player.hp,true);

player.chooseToDiscard(player.hp,true);   
        }
         
    },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                    effect:{
                        target:function (card,player,target){
                if(get.tag(card,'damage')){
                    if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
                    if(!target.hasFriend()) return;
                    if(target.hp>=4) return [1,2];
                    if(target.hp==3) return [1,1.5];
                    if(target.hp==2) return [1,0.5];
                }
            },
                    },
                },
                group:["MYbingxian_1"],
                subSkill:{
                    "1":{
                        trigger:{
                            player:"loseEnd",
                        },
                        direct:true,
                        filter:function (event,player){
      
        if(!player.countCards('h')) return false;
        for(var i=0;i<event.cards.length;i++){
            if(event.cards[i].original=='h'&&event.cards.length>1) return true;
        }
        return false;
    },
                        content:function (){
        "step 0"
        player.chooseTarget('兵仙：是否弃置一名其他角色的一张牌',function(card,player,target){
            if(player==target) return false;
            return target.countCards('he');
        }).set('ai',function(target){
            return -get.attitude(_status.event.player,target);
        });
        "step 1"
        if(result.bool){
            player.logSkill('MYbingxian',result.targets);
            event.targets=result.targets
            if(result.targets.length==1){
                player.discardPlayerCard(event.targets[0],'he',true);
            }
            
        }
        else{
            event.finish();
        }
       
    },
                        sub:true,
                    },
                },
            },
            MYtaie:{
                audio:"ext:秦时明月:2",
                enable:"phaseUse",
                usable:1,
                prompt:"弃置一张手牌，选择一名角色获得花色标记及效果，并进行判定，执行结果",
                check:function (card){
        var player=_status.event.player;
        var suit=get.suit(card);
        if(suit=='heart'){
            if(game.hasPlayer(function(current){
                return current.hp==1&&get.attitude(player,current)>0
            }));
        }
        else if(suit=='spade'){
            return 7-get.value(card);
        }
        return 6-get.value(card);
    },
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                filterTarget:function (card,player,target){
        return !target.hasSkill('MYtaie_heart')&&
            !target.hasSkill('MYtaie_spade')&&
            !target.hasSkill('MYtaie_club')&&
            !target.hasSkill('MYtaie_diamond');
    },
                filterCard:true,
                position:"h",
                content:function (){
         'step 0'        
   target.addSkill('MYtaie_'+get.suit(cards[0]));
        
         player.judge();
        'step 1'
        switch(get.suit(result.card)){
            case 'spade':
                
                player.draw(2);  
                player.chooseToDiscard('h',true);                
                break;
            case 'heart':
                player.storage.pozhen = 1;
                break;
            case 'club':
                
                if(!player.hujia){
                   player.changeHujia();
                }
                break;
            case 'diamond':
                player.draw();
                break;
        }
        
      'step 2'
         if(player.storage.pozhen==1){         
        player.chooseTarget('选择一名其他角色，获得其一张牌',function(card,player,target){
            return player!=target&&target.countCards('he')>0;
        }).set('ai',function(target){
            return -get.attitude(player,target);
        });
         player.storage.pozhen=0;
        }
        else {
            event.finish();
        }         
        'step 3'
      if(result.bool){
            player.line(result.targets,'green');
            player.gainPlayerCard(result.targets[0],'he',true);
        }
        else {
            event.finish();
        }
        
        
        

    },
                ai:{
                    expose:0.2,
                    threaten:1.6,
                    order:3,
                    result:{
                        target:function (player,target){
                if(!ui.selected.cards.length) return 0;
                switch(get.suit(ui.selected.cards[0])){
                    case 'heart':if(target.hp==1) return 1;return 0.1;
                    case 'diamond':return 1+Math.sqrt(target.countCards('h'));
                    case 'club':return -target.countCards('h')-Math.sqrt(target.countCards('h','sha'));
                    case 'spade':return get.damageEffect(target,player,target,'thunder');
                    default:return 0;
                }
            },
                    },
                },
            },
            "MYtaie_spade":{
                trigger:{
                    player:"useCard",
                },
                mark:true,
                marktext:"♠",
                intro:{
                    content:function (storage,player){
            return '若你使用或打出一张黑桃牌，你失去一点体力';
        },
                },
                filter:function (event){
        return (get.suit(event.card)=='spade'&&event.cards[0]&&event.cards[0]==event.card);
    },
                forced:true,
                content:function (){
       player.loseHp(1);
         player.removeSkill('MYtaie_spade');
        
    },
            },
            "MYtaie_heart":{
                trigger:{
                    player:["respond","useCard"],
                },
                mark:true,
                marktext:"♥",
                intro:{
                    content:function (storage,player){
            return '若你使用或打出一张红桃牌，你回复一点体力';
        },
                },
                filter:function (event){
        return (get.suit(event.card)=='heart'&&event.cards[0]&&event.cards[0]==event.card);
    },
                forced:true,
                content:function (){
        player.recover();
         player.removeSkill('MYtaie_heart');
        
    },
            },
            "MYtaie_diamond":{
                trigger:{
                    player:["respond","useCard"],
                },
                mark:true,
                marktext:"♦",
                intro:{
                    content:function (storage,player){
            return '若你使用或打出一张方片牌，你摸两张牌';
        },
                },
                filter:function (event){
        return (get.suit(event.card)=='diamond'&&event.cards[0]&&event.cards[0]==event.card);
    },
                forced:true,
                content:function (){
       player.draw(2);
         player.removeSkill('MYtaie_diamond');
        
    },
            },
            "MYtaie_club":{
                trigger:{
                    player:["respond","useCard"],
                },
                mark:true,
                marktext:"♣",
                intro:{
                    content:function (storage,player){
            return '若你使用或打出一张梅花牌，你弃置两张牌。';
        },
                },
                filter:function (event){
        return (get.suit(event.card)=='club'&&event.cards[0]&&event.cards[0]==event.card);
    },
                forced:true,
                content:function (){
       player.chooseToDiscard(2,'h',true);
         player.removeSkill('MYtaie_club');
        
    },
            },
            MYzhangmen:{
                audio:"ext:秦时明月:1",
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                filter:function (event,player){
        return (event.source&&event.source.countCards('he')&&event.source!=player);
    },
                check:function (event,player){
        if(get.attitude(player,event.player)>=0) return true;
        return false;
    },
                content:function (){
        "step 0"
        var list=['令其摸一张牌'];
        if(trigger.source.countCards('he')>=1) list.push('你弃置一张牌');
        trigger.source.chooseControl(list).set('ai',function(event){
            if(player.countCards('h')>player.hp) return '你弃置一张牌';
            return '令其摸一张牌';
        });
        "step 1"
        if(result.control=='令其摸一张牌'){
            player.draw();
            event.finish();
        };
        
        if(result.control=='你弃置一张牌'){
         trigger.source.chooseToDiscard('he',true);
                  
        };
     
    },
            },
            MYtianzong:{
                audio:"ext:秦时明月:1",
                trigger:{
                    global:"phaseBegin",
                },
                forced:true,
                filter:function (event,player){
        if(event.player==player) return false;
        return event.player.isHealthy();
    },
                content:function (){
         trigger.player.addTempSkill('fengyin');
    },
                group:["MYtianzong_1"],
                subSkill:{
                    "1":{
                        trigger:{
                            player:"phaseBegin",
                        },
                        forced:true,
                        content:function (){
        game.countPlayer(function(current){
            if(current!=player&&!current.hasSkill('fengyin')&&current.isDamaged()){
                player.line(current,'green');
                current.addTempSkill('fengyin');
            }
        });
    },
                        sub:true,
                    },
                },
            },
            MYxuandao:{
                audio:"ext:秦时明月:2",
                trigger:{
                    global:"shaBefore",
                },
                priority:5,
                filter:function (event,player){
        if(player==event.target||player==event.player) return false;
        
        return get.distance(player,event.target)<=1;
    },
                check:function (event,player){
        return get.attitude(player,event.target)>=0;
    },
                content:function (){
   "step 0"
    trigger.target.judge(function(card){return (get.color(card)=='black')?1.5:-0.5});
        "step 1"
        if(result.judge>0){
            trigger.untrigger();
            trigger.responded=true;
            trigger.cancel();
        }
        else{
             
            trigger.target.draw();            
        }        
    },
                group:["MYxuandao_1"],
                subSkill:{
                    "1":{
                        audio:"ext:秦时明月:1",
                        trigger:{
                            target:"shaBegin",
                        },
                        content:function (){
    "step 0"
        player.judge(function(card){return (get.color(card)=='black')?1.5:-0.5});
        "step 1"
        if(result.judge>0){
            trigger.untrigger();
            trigger.responded=true;
            trigger.cancel();
        }
        else{
                
            player.draw();            
        }        
    },
                        ai:{
                            threaten:0.7,
                        },
                        sub:true,
                    },
                },
            },
            MYzhishui:{
                audio:"ext:秦时明月:2",
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        return player.countCards('he',{type:'equip'});
    },
                filterCard:{
                    type:"equip",
                },
                position:"he",
                filterTarget:function (card,player,target){
        return target!=player;
    },
                check:function (card){
        var player=_status.event.player;
        if(game.hasPlayer(function(current){
            return get.attitude(player,current)>2;
        })){
            return 10-get.value(card,player);
        }
        return 6-get.value(card,player);
    },
                content:function (){
         "step 0"
             if(target.countCards('he')){
            player.discardPlayerCard('he',target,true);
        }             
        'step 1'
        var card=result.cards[0];
      if(get.type(card)!=='equip'){          
            player.draw();
    }
      
    },
                ai:{
                    order:9,
                    result:{
                        player:function (player,target){
                return get.damageEffect(target,player,player);
            },
                    },
                },
            },
            MYdongjun:{
                audio:"ext:秦时明月:1",
                trigger:{
                    source:"damageEnd",
                },
                check:function (event,player){
        return get.attitude(player,event.player)<0;
    },
                filter:function (event,player){
        if(event._notrigger.contains(event.player)) return false;
        return event.player!=player&&event.player.isIn()&&!event.player.hasSkill('MYbingdong');
    },
                logTarget:"player",
                content:function (){
        trigger.player.addSkill('MYbingdong');
    },
            },
            MYbingdong:{
                mark:true,
                nopop:true,
                intro:{
                    content:"不能使用杀直到回合结束，然后失去标记",
                },
                mod:{
                    cardEnabled:function (card){
            if(card.name=='sha') return false;
        },
                },
                ai:{
                    weather:true,
                },
                group:"MYbingdong_clear",
                subSkill:{
                    clear:{
                        trigger:{
                            player:"phaseUseAfter",
                        },
                        silent:true,
                        content:function (){
                player.removeSkill('MYbingdong');
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                },
            },
            MYjinwu:{
                audio:"ext:秦时明月:1",
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                content:function (){
        'step 0'
        player.chooseTarget('金乌：选择获得引导标记的目标',function(card,player,target){
            return  !target.hasSkill('MYyindao');    
        }).set('ai',function(target){      
            var player=_status.event.player;
            if(get.attitude(player,target)>0){
                return get.recoverEffect(target,player,player)+1;
            }
            return 0;
        });
        'step 1'
        if(result.bool){
            player.logSkill('MYjinwu',result.targets[0]);
            result.targets[0].addSkill('MYyindao');         
           
        }
        
    },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                },
            },
            MYyindao:{
                audio:"ext:秦时明月:2",
                forced:true,
                trigger:{
                    player:"shaBefore",
                },
                mark:true,
                intro:{
                    content:function (storage,player){
            return '首次使用的杀不可闪避，并且摸两张牌失去标记';
        },
                },
                filter:function (event){
                return event.card&&(event.card.name=='sha')
},
                content:function (){
    trigger.directHit=true;
        player.draw(2);
        player.removeSkill('MYyindao');  
        
},
            },
            MYfenyan:{
                trigger:{
                    target:"useCardToBefore",
                },
                popup:false,
                direct:true,
                filter:function (event,player){
        if(event.addedTargets) return false;
        
        return event.targets.length==1&&event.player!=player&&player.countCards('he',{type:'equip'});
    },
                content:function (){
        "step 0"
               var next=player.chooseToDiscard('he','绯烟：是否弃置一张装备牌发动反弹？',function(card,player){
            return get.type(card)=='equip';
        });
        next.ai=function(card){
            if(get.effect(player,trigger.card)<0){
                if(card.name=='liuxinghuoyu') return 7-get.value(card);
                return 5-get.value(card);
            }
            return 0;
        };
        next.prompt2='反弹'+get.translation(trigger.player)+'的'+get.translation(trigger.card);
        next.logSkill=['MYfenyan',trigger.player];
        "step 1"
        if(result.bool){
            // player.discard(result.cards);
            trigger.target=trigger.player;
            trigger.player=player;
            trigger.untrigger();
            trigger.trigger('useCardToBefore');
        }
        // "step 2"
        // if(result.bool){
        //     trigger.target=result.targets[0];
        //     trigger.untrigger;
        //     trigger.trigger('shaBefore');
        //     game.delay();
        // }
    },
                ai:{
                    threaten:function (player,target){
            if(target.countCards('h')<=0){
                return 2;
            }
            return 2/(target.countCards('h')-1);
        },
                },
            },
            MYxiaoyong:{
                audio:"ext:秦时明月:1",
                trigger:{
                    player:"shaBegin",
                },
                check:function (event,player){
        return get.attitude(player,event.target)<0;
    },
                filter:function (event,player){
        return player.countCards('h')>0&&event.target.countCards('h')>0&&event.target!=player;
    },
                logTarget:"target",
                content:function (){
    'step 0'
    player.chooseToCompare(trigger.target);
    'step 1'
    if(result.bool){
trigger.directHit=true;
       player.draw(2);
        
    }

else{
                player.gain(result.target);
            }

    },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                if(card.name=='sha'&&current<0) return 0.7;
            },
                    },
                },
            },
            MYshanzhan:{
                trigger:{
                    player:"damageEnd",
                },
                check:function (event,player){
        return get.attitude(player,event.source)<0;
    },
                filter:function (event,player){
        return player.countCards('h')>0&&event.source.countCards('h')>0&&event.source!=player;
    },
                logTarget:"source",
                content:function (){
    'step 0'
    player.chooseToCompare(trigger.source);
    'step 1'
    if(result.bool){

       trigger.source.loseHp();
        
    }

else{
                player.gain(result.target);
            }

    },
                ai:{
                    effect:{
                        target:function (card,player,source,current){
                if(card.name=='sha'&&current<0) return 0.7;
            },
                    },
                },
            },
            MYyushi:{
                audio:"ext:秦时明月:1",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return player!=target&&target.countCards('h');
    },
                filterCard:function (card){
        if(get.is.altered('yunchou')){
            return get.type(card)!='basic';
        }
        return true;
    },
                filter:function (event,player){
        if(get.is.altered('yunchou')){
            return player.hasCard(function(card){
                return get.type(card)!='basic';
            });
        }
        return true;
    },
                alter:true,
                content:function (){
        "step 0"
        var card=target.getCards('h').randomGet();
        if(!card){
            event.finish();
            return;
        }
        target.discard(card);
        if(get.color(card)==get.color(cards[0])){
            event.bool=true;
        }
        "step 1"
        if(event.bool){
            player.addSkill('MYyindao');
        }
        else if(player.countCards('he')){
            player.draw();
        }
    },
                check:function (card){
        return 7-get.value(card);
    },
                ai:{
                    order:9,
                    result:{
                        target:function (player,target){
                if(target.hasSkillTag('noh')) return 0;
                return -1;
            },
                    },
                    threaten:1.3,
                },
            },
            MYquanyan:{
                audio:"ext:秦时明月:1",
                trigger:{
                    global:"useCard",
                },
                usable:1,
                filter:function (event,player){
        return get.type(event.card.viewAs||event.card.name)=='trick'&&event.player!=player&&player.countCards('h')>0;
    },
                check:function (event,player){
        var att=get.attitude(player,event.player);
        if(event.player.hp>0) return att<=0;
        return att>0;
        
    },
                content:function (){
        "step 0"
        player.chooseToDiscard('h',true);  
          "step 1"
        player.judge(function(card){return (get.color(card)=='black')?1.5:-0.5});
        "step 2"
        if(result.judge>0){
            trigger.untrigger();
            trigger.responded=true;
            trigger.cancel();      
            trigger.player.loseHp();
        }
        else{
            player.draw();   
             
        }        
    },
                ai:{
                    threaten:1.4,
                    noautowuxie:true,
                },
            },
            MYzhushu:{
                audio:"ext:秦时明月:1",
                trigger:{
                    source:"damageEnd",
                },
                usable:1,
                check:function (event,player){
        var att=get.attitude(player,event.player);
        if(event.player.hp>0) return att<=0;
        return att>0;
        
    },
                content:function (){
          trigger.player.classList.add('out');
        
       setTimeout(function(){
                for(var i=0;i<game.players.length;i++){
                    var player=game.players[i];
                    if(player!=me)   trigger.player.classList.remove('out');   
                };
           
               trigger.source.draw();               
            },25000);
        
        
    },
            },
            MYzhaoci:{
                audio:"ext:秦时明月:1",
                trigger:{
                    player:"damageEnd",
                },
                filter:function (event,player){
        return (event.source!=undefined);
    },
                check:function (event,player){
        return (get.attitude(player,event.source)<=0);
    },
                logTarget:"source",
                content:function (){
        player.classList.add('out');
        
       setTimeout(function(){
                for(var i=0;i<game.players.length;i++){
                    var player=game.players[i];
                    if(player!=me) player.classList.remove('out');   
                };
           
           trigger.source.damage(1)           
               
            },25000);
        
        
    },
                ai:{
                    "maixie_defend":true,
                    effect:{
                        target:function (card,player,target){
                if(player.hasSkillTag('jueqing',false,target)) return [1,-1];
                return 0.8;
          },
                    },
                },
            },
            MYjunzhou:{
                trigger:{
                    player:"phaseDrawBegin",
                },
                direct:true,
                filter:function (event,player){
        return player.countCards('e')==0;
    },
                content:function (){
        trigger.num++;
    },
                ai:{
                    threaten:1.3,
                },
                group:["MYjunzhou_fangju","MYjunzhou_zuoqijia","MYjunzhou_wuqi","MYjunzhou_zuoqijian"],
                subSkill:{
                    wuqi:{
                        trigger:{
                            player:"phaseBegin",
                        },
                        direct:true,
                        filter:function (event,player){
        if(player.getEquip(1)) return true;
        return false;
    },
                        content:function (){
          "step 0"
         player.chooseTarget('选择一名其他角色，弃置其一张牌',function(card,player,target){
            return player!=target&&target.countCards('he')>0;
        }).set('ai',function(target){
            return -get.attitude(_status.event.player,target);
        });
        "step 1"
        if(result.bool){
            player.logSkill('MYjunzhou',result.targets);
            event.target=result.targets[0];
            player.discardPlayerCard(event.target,true);
        }
        else{
            event.finish();
        }
    },
                        ai:{
                            expose:0.2,
                        },
                        sub:true,
                    },
                    fangju:{
                        enable:"chooseToUse",
                        filter:function (event,player){
        if(player.getEquip(2)) return true;
        return false;
    },
                        filterCard:function (card){
        return get.color(card)=='black'||'red';
            },
                        usable:1,
                        position:"he",
                        viewAs:{
                            name:"diaobingqianjiang",
                            suit:"club",
                            number:7,
                            cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"club","number":7,"name":"sha","cardid":"2015604332","_transform":"translateX(112px)","clone":{"name":"sha","suit":"club","number":7,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":2385},"timeout":2371,"original":"h"}],
                        },
                        viewAsFilter:function (player){
        if(!player.countCards('he',{color:'black'})) return false;
    },
                        prompt:"将任意一张牌当调兵遣将使用",
                        check:function (card){return 4-get.value(card)},
                        ai:{
                            basic:{
                                order:9,
                                useful:1,
                                value:5,
                            },
                            result:{
                                target:-0.5,
                                player:1,
                            },
                            tag:{
                                loseCard:1,
                                discard:1,
                                multitarget:1,
                            },
                            wuxie:function (){
            return 0;
        },
                        },
                        sub:true,
                    },
                    zuoqijia:{
                        trigger:{
                            player:"phaseEnd",
                        },
                        direct:true,
                        filter:function (event,player){
        if(player.getEquip(3)) return true;
        return false;
    },
                        content:function (){
        player.draw();
    },
                        sub:true,
                    },
                    zuoqijian:{
                        trigger:{
                            player:"phaseAfter",
                        },
                        direct:true,
                        filter:function (event,player){
        if(player.getEquip(4)) return true;
        return false;
    },
                        content:function (){
        player.draw();
    },
                        sub:true,
                    },
                },
            },
            MYminshui:{
                group:["MYminshui_1","MYminshui_2","MYminshui_3"],
                subSkill:{
                    "1":{
                        audio:"ext:秦时明月:1",
                        trigger:{
                            player:"damageEnd",
                        },
                        check:function (event,player){
        return get.attitude(player,event.source)<0;
    },
                        filter:function (event,player){
        return (event.source&&event.source.countCards('he')&&event.source!=player)&&event.card&&event.card.name=='sha';
    },
                        content:function (){
        if(trigger.source.countCards('he')){
           
            player.gainPlayerCard(trigger.source,'he',true);            
            }
    },
                        sub:true,
                    },
                    "2":{
                        audio:"ext:秦时明月:1",
                        trigger:{
                            player:"damageEnd",
                        },
                        check:function (event,player){
        return get.attitude(player,event.source)<0;
    },
                        filter:function (event,player){
        return (event.source&&event.source.countCards('he')&&event.source!=player)&&event.card&&get.type(event.card,'trick')=='trick';
    },
                        content:function (){
     
        player.discardPlayerCard(trigger.source,'he',true);
                
    },
                        sub:true,
                    },
                    "3":{
                        trigger:{
                            player:"loseHpEnd",
                        },
                        content:function (){
      player.draw()
   
    
    },
                        sub:true,
                    },
                },
            },
            MYzhengang:{
                audio:"ext:秦时明月:1",
                direct:true,
                trigger:{
                    player:"shaBefore",
                },
                filter:function (event){
                return event.card&&(event.card.name=='sha')
},
                content:function (){
    
             var n=[1,2,3].randomGet();
            if(n==1)   trigger.directHit=true;
            if(n==2) player.addTempSkill('xinliegong2','shaAfter');   
            if(n==3) player.recover();
        
         
},
            },
            MYduanshui:{
                audio:"ext:秦时明月:1",
                enable:"phaseUse",
                filterTarget:function (card,player,target){
        return player!=target;
    },
                selectTarget:[1,Infinity],
                filterCard:true,
                usable:1,
                check:function (card){
        return 6-ai.get.value(card);
    },
                content:function (){
        "step 0"
         target.judge(function(card){return (get.color(card)=='black')?1.5:-0.5});
        "step 1"
        if(result.bool){
             var card=game.createCard('bingliang');
        target.addJudge(card);
        target.$draw(card);
        game.delay(); 
        }
    },
                ai:{
                    order:9,
                    result:{
                        target:-0.5,
                    },
                    threaten:1.2,
                },
            },
            MYluanshen:{
                audio:"ext:秦时明月:1",
                trigger:{
                    player:"shaMiss",
                },
                check:function (event,player){
        return get.attitude(player,event.target)<0;
    },
                direct:true,
                content:function (){
     
           
       "step 0"
 
        player.chooseTarget('乱神：令另一名其他角色失去一点体力，然后你摸一张牌',function(card,player,target){
             if(target==trigger.target) return false;
            return lib.filter.targetEnabled({name:'sha'},player,target);
        }).set('ai',function(target){
            return -get.attitude(player,target)/(1+target.hp);
        });
        'step 1'
        if(result.bool){
            player.logSkill('MYluanshen',result.targets[0]);
            result.targets[0].loseHp();
            player.draw();            
        }
    },
                ai:{
                    threaten:1.5,
                    expose:0.2,
                },
                group:["MYluanshen_1"],
                subSkill:{
                    "1":{
                        audio:"ext:秦时明月:1",
                        trigger:{
                            player:"shaBefore",
                        },
                        forced:true,
                        content:function (){},
                        sub:true,
                    },
                },
            },
            MYwangliang:{
                audio:"ext:秦时明月:1",
                trigger:{
                    player:"useCard",
                },
                frequent:true,
                filter:function (event){
        return (get.type(event.card)=='trick'&&event.cards[0]&&event.cards[0]==event.card);
    },
                content:function (){
        'step 0'
        var num1=0,num2=0;
        var choice;
        if(player.hasUnknown(2)){
            if(game.dead.length==0){
                choice='选项二';
            }
            else{
                choice='cancel2';
            }
        }
        else{
            game.countPlayer(function(current){
                var att=get.attitude(player,current);
                if(att>0){
                    num1++;
                }
                else if(att<0){
                    num2++;
                }
            });
            choice=(num1>num2)?'选项一':'选项二';
        }
        player.chooseControl('选项一','选项二','cancel2',function(){
            return choice;
        }).set('prompt',get.prompt('gwtianbian')).set('choiceList',['随机使用一张对全场有正面效果的牌','随机使用一张对全场有负面效果的牌']);
        'step 1'
        if(result.control!='cancel2'){
            player.logSkill('gwtianbian');
            var list=[];
            for(var i in lib.card){
                if(lib.inpile.contains(i)&&
                lib.card[i].selectTarget==-1&&
                lib.card[i].type!='equip'&&
                lib.card[i].ai&&lib.card[i].ai.tag&&
                lib.card[i].ai.tag.multitarget){
                    if(lib.card[i].ai.tag.multineg){
                        if(result.control=='选项二'){
                            list.push(i);
                        }
                    }
                    else{
                        if(result.control=='选项一'){
                            list.push(i);
                        }
                    }
                }
            }
            var name=null;
            while(list.length){
                name=list.randomRemove();
                if(game.hasPlayer(function(current){
                    return player.canUse(name,current)
                })){
                    break;
                }
                else{
                    name=null;
                }
            }
            if(name){
                var targets=game.filterPlayer(function(current){
                    return player.canUse(name,current);
                });
                targets.sortBySeat();
                player.useCard({name:name},targets);
            }
        }
    },
            },
            MYmiehun:{
                audio:"ext:秦时明月:1",
                enable:"chooseToUse",
                usable:1,
                filterCard:{
                    name:"sha",
                },
                filter:function (event,player){
        return player.countCards('h','sha')>0;
    },
                position:"h",
                viewAs:{
                    name:"nanman",
                    suit:"club",
                    number:9,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"club","number":9,"name":"sha","cardid":"5699146267","_transform":"translateX(0px)","clone":{"name":"sha","suit":"club","number":9,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":310},"timeout":226,"original":"h"}],
                },
                prompt:"将一张杀当【南门入侵】使用，然后你获得一张【过河拆桥】",
                check:function (card){
        var player=_status.currentPhase;
        if(player.countCards('he',{subtype:get.subtype(card)})>1){
            return 11-get.equipValue(card);
        }
        if(player.countCards('h')<player.hp){
            return 6-get.value(card);
        }
        return 2-get.equipValue(card);
    },
                ai:{
                    order:9,
                    threaten:1.1,
                    wuxie:function (target,card,player,viewer){
            if(get.attitude(viewer,target)>0&&target.countCards('h','sha')){
                if(!target.countCards('h')||target.hp==1||Math.random()<0.7) return 0;
            }
        },
                    basic:{
                        order:9,
                        useful:[5,1],
                        value:5,
                    },
                    result:{
                        target:function (player,target){
                if(player.hasUnknown(2)&&get.mode()!='guozhan') return 0;
                var nh=target.countCards('h');
                if(get.mode()=='identity'){
                    if(target.isZhu&&nh<=2&&target.hp<=1) return -100;
                }
                if(nh==0) return -2;
                if(nh==1) return -1.7
                return -1.5;
            },
                    },
                    tag:{
                        respond:1,
                        respondSha:1,
                        damage:1,
                        multitarget:1,
                        multineg:1,
                    },
                },
                group:["MYmiehun_1"],
                subSkill:{
                    "1":{
                        trigger:{
                            player:"useCard",
                        },
                        silent:true,
                        filter:function (event){
        return event.skill=='MYmiehun';
    },
                        content:function (){
        player.gain(game.createCard("guohe"));
    },
                        forced:true,
                        popup:false,
                        sub:true,
                    },
                },
            },
            MYwangzhen:{
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                content:function (){
        "step 0"
         player.chooseControl('真刚','断水','乱神','魍魉','灭魂','转魄').set('ai',function(event){
             var n=[1,2,3,4,5,6].randomGet();
            if(n==1) return '真刚';         
 if(n==2) return '断水';
 if(n==3) return '乱神';
 if(n==4) return '魍魉';
     if(n==5) return '灭魂';
 if(n==6) return '转魄'; 
        });
        "step 1"
      
if(result.control=='真刚'){ 
player.clearSkills();
 player.addSkill('MYzhengang');
player.addSkill('MYwangzhen'); 
player.node.avatar.setBackgroundImage('extension/秦时明月/MYliujiannu.jpg');
};

if(result.control=='断水'){
   
player.clearSkills();
 player.addSkill('MYduanshui'); 
player.addSkill('MYwangzhen'); 
  player.node.avatar.setBackgroundImage('extension/秦时明月/MYduanshui.jpg'); 

};
 if(result.control=='乱神'){
player.clearSkills(); player.addSkill('MYluanshen'); player.addSkill('MYwangzhen'); 
 player.node.avatar.setBackgroundImage('extension/秦时明月/MYluanshen.jpg');
};
if(result.control=='魍魉'){
player.clearSkills(); player.addSkill('MYwangliang'); player.addSkill('MYwangzhen'); 
player.node.avatar.setBackgroundImage('extension/秦时明月/MYwangliang.jpg');


};
if(result.control=='灭魂'){
player.clearSkills(); player.addSkill('MYmiehun'); player.addSkill('MYwangzhen'); 
player.node.avatar.setBackgroundImage('extension/秦时明月/MYmiehun.jpg');
};
 if(result.control=='转魄'){
player.clearSkills(); player.addSkill('MYzhuanpo'); player.addSkill('MYwangzhen'); 
player.node.avatar.setBackgroundImage('extension/秦时明月/MYzhuanpo.jpg');
} else{
            event.finish();
        }

    },
                ai:{
                    expose:0.2,
                    threaten:1.3,
                },
            },
            MYzhuanpo:{
                audio:"ext:秦时明月:1",
                enable:"phaseUse",
                usable:1,
                filterCard:function (card){
        return get.type(card)!='basic';
    },
                position:"he",
                filter:function (event,player){
        return player.hasCard(function(card){
            return get.type(card)!='basic';
        },'he');
    },
                selectCard:2,
                viewAs:{
                    name:"wanjian",
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{"vanish":true},"vanishtag":[],"_uncheck":[],"suit":"diamond","number":9,"name":"guohe","cardid":"8803559379","_transform":"translateX(224px)","clone":{"name":"guohe","suit":"diamond","number":9,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":489},"timeout":427,"original":"h"},{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"spade","number":4,"name":"guohe","cardid":"3654340254","_transform":"translateX(336px)","clone":{"name":"guohe","suit":"spade","number":4,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":490},"timeout":428,"original":"h"}],
                },
                viewAsFilter:function (player){
        if(!player.countCards('he',{color:'black'})) return false;
    },
                prompt:"将两张非基本牌当【万箭齐发】使用，然后你获得一张【顺手牵羊】",
                check:function (card){
        return 6-ai.get.value(card);
    },
                ai:{
                    basic:{
                        order:9,
                        useful:1,
                        value:5,
                    },
                    result:{
                        target:-0.5,
                    },
                    tag:{
                        loseCard:1,
                        discard:1,
                        respond:1,
                        respondShan:1,
                        damage:1,
                        multitarget:1,
                        multineg:1,
                    },
                    wuxie:function (target,card,player,viewer){
            if(get.attitude(viewer,target)>0&&target.countCards('h','shan')){
                if(!target.countCards('h')||target.hp==1||Math.random()<0.7) return 0;
            }
        },
                },
                group:["MYzhuanpo_1"],
                subSkill:{
                    "1":{
                        trigger:{
                            player:"useCard",
                        },
                        silent:true,
                        filter:function (event){
                return event.skill=='MYzhuanpo';
            },
                        content:function (){
                player.gain(game.createCard("shunshou"));
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                },
            },
            MYquanheng:{
                audio:"ext:秦时明月:1",
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event,player){
        return get.color(event.card)=='red';
    },
                forced:true,
                content:function (){
        trigger.num++;
    },
                group:["MYquanheng_1"],
                subSkill:{
                    "1":{
                        trigger:{
                            player:"damageBefore",
                        },
                        forced:true,
                        filter:function (event,player){
        return get.color(event.card)=='red';
    },
                        content:function (){
        trigger.cancel();
    },
                        ai:{
                            effect:{
                                target:function (card,player){   
          if(card.name=='sha'&&get.color(card)=='red') return 'zerotarget';
            },
                            },
                        },
                        sub:true,
                    },
                },
            },
            MYyixiong:{
                audio:"ext:秦时明月:2",
                trigger:{
                    player:["useCard","respond"],
                },
                filter:function (event,player){
        return get.type(event.card)=='basic';
    },
                direct:true,
                content:function (){
         'step 0'
        player.chooseTarget('义兄：令一名角色摸一张牌').ai=function(target){
              if(player.storage.yuedong_recover){
                return get.recoverEffect(target,player,player);
            }
            var att=get.attitude(player,target)/Math.sqrt(2+target.countCards('h'));
            if(player==target){
                var num2=player.needsToDiscard(num);
                if(num2>1) return att/5;
                if(num2==1){
                    if(num>1) return att/3;
                    return att/4;
                }
                return att*1.1;
            }
            return att;
        };
        'step 1'
        if(result.bool){

player.logSkill('MYyixiong',result.targets[0]);
            result.targets[0].draw();
                 
        }
    },
                ai:{
                    threaten:1.5,
                },
            },
            MYfusi:{
                trigger:{
                    player:"dieBegin",
                },
                forced:true,
                filter:function (event){
        return event.source!=undefined;
    },
                content:function (){
        trigger.source.turnOver();
        trigger.source.loseHp();        
    },
                ai:{
                    threaten:0.7,
                },
            },
            MYzhangshi:{
                mod:{
                    maxHandcard:function (player,num){
            return  player.previous.hp+num;
        },
                },
            },
            MYxinqiren:{
                audio:"ext:秦时明月:1",
                trigger:{
                    source:"damageEnd",
                },
                check:function (event,player){
        var att=get.attitude(player,event.player);
        if(event.player.hp>0) return att<=0;
        return att>0;
        
    },
                filter:function (trigger,player){
        return trigger.player.hp<player.hp&&trigger.player.countCards('he');
    },
                content:function (){
        player.discardPlayerCard(trigger.player.maxHp-trigger.player.hp,'he',trigger.player,true);




    },
            },
            MYshabi:{
                audio:"ext:秦时明月:1",
                trigger:{
                    player:"damageEnd",
                },
                forced:true,
                priority:10,
                filter:function (event,player){
        return event.source&&event.source.isIn()&&event.source!=player;
    },
                intro:{
                    content:"players",
                },
                content:function (){
        trigger.source.goMad('phaseAfter');
       
    },
                ai:{
                    "maixie_defend":true,
                    threaten:0.3,
                },
                group:["MYshabi_1"],
                subSkill:{
                    "1":{
                        audio:"ext:秦时明月:1",
                        trigger:{
                            source:"damageEnd",
                        },
                        forced:true,
                        priority:10,
                        filter:function (event){
        if(event._notrigger.contains(event.player)) return false;
        return event.player.isAlive();
    },
                        intro:{
                            content:"players",
                        },
                        content:function (){
        trigger.player.goMad({player:'phaseAfter'});
       
   },
                        sub:true,
                    },
                },
            },
            MYjuesha:{
                audio:"ext:秦时明月:1",
                enable:"phaseUse",
                filterTarget:function (card,player,target){
        return player!=target;
    },
                filter:function (event,player){
        var num=(player.maxHp-player.hp)+1
        if(player.getStat().skill.MYjuesha>=num) return false;
        return true;
    },
                selectTarget:[1,1],
                check:function (card){
        return 6-ai.get.value(card);
    },
                content:function (){
        "step 0"
         player.judge(function(card){return (get.color(card)=='black')?1.5:-0.5});
        "step 1"
        if(result.bool){
           event.player.useCard({name:'sha'},target);
                                            
            
        }
                else{
               player.draw(); 
        }                      
        
    },
                ai:{
                    order:3,
                    result:{
                        target:-0.5,
                    },
                    threaten:1.2,
                },
            },
            MYbaizhan:{
                mod:{
                    cardEnabled:function (card,player){
            if(_status.currentPhase!=player) return;
            if(get.cardCount(true,player)>=4){
                return false;
            }
        },
                    maxHandcard:function (player,num){
            return 2+player.maxHp-player.hp;
        },
                },
                trigger:{
                    player:"useCard",
                },
                forced:true,
                popup:false,
                filter:function (event,player){
        return _status.currentPhase==player&&[1,2,3,4].contains(player.countUsed());
    },
                content:function (){
        
          var skill;
        switch(player.countUsed()){              
            case 1:player.chooseToDiscard('he',true); break;   
            case 2:player.draw();    break;            
            case 3:player.loseHp();break;
            case 4:player.recover();break;
                                        
        }
     
    },
                ai:{
                    effect:{
                        player:function (card,player){
                if(_status.currentPhase!=player) return;
                if(get.type(card)=='basic') return;
                if(get.tag(card,'gain')) return;
                if(get.value(card,player,'raw')>=7) return;
                if(player.hp<=2) return;
                if(player.needsToDiscard()) return;
                if(player.countUsed()>=2) return;
                return 'zeroplayertarget';
            },
                    },
                },
            },
            MYzhangong:{
                group:["MYxinzhangong"],
                init:function (player){
        player.storage.MYzhangong=0;
    },
                intro:{
                    content:"mark",
                },
                forced:true,
                trigger:{
                    player:"useCard",
                },
                filter:function (event,player){
        
        return _status.currentPhase==player&&player.countUsed();
        
     
    },
                content:function (){
        player.storage.MYzhangong++;
        player.syncStorage('MYzhangong');
        player.markSkill('MYzhangong');
    },
                ai:{
                    combo:"fanpu",
                },
            },
            MYxinzhangong:{
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                audio:"ext:秦时明月:2",
                filter:function (event,player){
        return player.storage.MYzhangong>0;
    },
                content:function (){
        
           'step 0'
      
        player.chooseTarget('选择【战功】的目标',true,function(card,player,target){
             return player.storage.MYzhangong>0;
        }).set('ai',function(target){
              var player=_status.event.player;
            if(get.attitude(player,target)>0){
                return get.recoverEffect(target,player,player)+1;
            }
            return 0;
        });
        
       
               
        
          'step 1'  
          if(result.bool){
                        
              player.logSkill('MYzhangong',result.targets[0]);
            result.targets[0].draw(player.storage.MYzhangong);           
           
        }
        
        player.storage.MYzhangong-=player.storage.MYzhangong;            
        player.unmarkSkill('MYzhangong');
        player.syncStorage('MYzhangong');  
              
              
         
              
      
    },
            },
        

     
translate:{
        },
    },




				translate:{
					
     MYxichubawang:"西楚霸王",
            MYheiqilin:"黑麒麟",
            MYxufuzi:"徐夫子",
            MYduannurong:"端木蓉",
            MYzhaogao:"赵高",
            MYchilian:"赤练",
            MYciyage:"呲牙哥",
            MYdatiechui:"大铁锤",
            MYshengqi:"胜七",
            MYbaifeng:"白凤",
            MYdaozhi:"盗跖",
            MYgaojianli:"高渐离",
            MYlongju:"龙且",
            MYxuenv:"雪女",
            MYshaoyu:"少羽",
            MYlisi:"李斯",
            MYzhangliang:"张良",
            MYjingke:"荆轲",
            MYjiruqianlong:"姬如千珑",
            MYcanglangwang:"苍狼王",
            MYwushuanggui:"无双鬼",
            MYguiguzi:"鬼谷子",
            MYyinfu:"隐蝠",
            MYweizhuang:"卫庄",
            MYchunangong:"楚南公",
            MYdonghuangtaiyi:"东皇太一",
            MYdasiming:"大司命",
            MYbandashi:"班大师",
            MYgongshuchou:"公输仇",
            MYgenie:"盖聂",
            MYgaoyue:"高月",
            MYyueshen:"月神",
            MYtianming:"天明",
            MYxinghun:"星魂",
            MYshaosiming:"少司命",
            MYyingzheng:"嬴政",
            MYgongsunlinglong:"公孙玲珑",
            MYyandan:"燕丹",
            MYxiaoyaozi:"逍遥子",
            MYkuangxiu:"旷修",
            MYyunzhongjun:"云中君",
            MYmengtian:"蒙恬",
            MYxiadaojuzi:"侠道巨子",
            MYpaoding:"庖丁",
            MYyanlu:"颜路",
            MYzhanghan:"章邯",
            MYshushanxiaoyu:"蜀山小虞",
            MYshilan:"石兰",
            MYhanxin:"韩信",
            MYfunian:"伏念",
            MYxiaomeng:"晓梦",
            MYyanji:"焱妃",
            MYxiangliang:"项梁",
            MYfanzeng:"范增",
            MYfusu:"扶苏",
            MYxunzi:"荀子",
            MYliujiannu:"六剑奴",
            MYyanchunjun:"雁春君",
            MYagang:"阿纲",
            MYyanyi:"晏懿",
            MYzinu:"子慕",
            MYjueying:"绝影",
            MYwangjian:"王翦",















				
nance:"难测",
            "nance_info":"",
            xinzongheng:"纵横",
            "xinzongheng_info":"",
            xiongbao:"凶暴",
            "xiongbao_info":"",
            yehou:"夜吼",
            "yehou_info":"",
            MYconghui:"聪慧",
            "MYconghui_info":"当你使用一张装备牌时，你可以回复一点体，若你未损失体力，你可以摸一张牌。",
            chilianwangshe:"赤练王蛇",
            "chilianwangshe_info":"",
            potuqilang:"破土七郎",
            "potuqilang_info":"",
            jiguanbaihu:"机关白虎",
            "jiguanbaihu_info":"",
            MYziwen:"自刎",
            "MYziwen_info":"限定技，出牌阶段你可以选择减一点体力上限并摸四张牌。",
            MYchongfeng:"冲锋",
            "MYchongfeng_info":"锁定技，你使用的杀，别人无法躲闪。",
            MYyirong:"易容",
            "MYyirong_info":"出牌阶段限一次，你可以复制一名其他角色的技能(复制过的技能再次复制后，回到你失去此技能时的技能状态)，在你下一次使用该技能时失去你因此得来的技能。",
            MYzhujian:"铸剑",
            "MYzhujian_info":"出牌阶段限两次，将一张杀当【无中生有】使用。",
            MYyinzhen:"银针",
            "MYyinzhen_info":"出牌阶段限一次，令一名已受伤的其他角色弃置所有牌，其回复一点体力。",
            MYyixian:"医仙",
            "MYyixian_info":"出牌阶段限一次，你可以弃置一张手牌令一名角色回复一点体力，若如此做你摸一张牌。",
            MYnongquan:"弄权",
            "MYnongquan_info":"每当你受到1点伤害后，可进行一次判定，若结果为红色，你对伤害来源造成1点伤害，若结果为黑色，你获得其一张牌。",
            MYluowang:"罗网",
            "MYluowang_info":"出牌阶段限一次，你可以视为使用任意一张非延时锦囊牌。",
            MYliujiannu:"六剑奴",
            "MYliujiannu_info":"限定技，受到伤害之后，你可以选择摸六张牌并把武将牌反面。",
            MYshedu:"蛇毒",
            "MYshedu_info":"其他角色的出牌阶段开始时，你可以弃置一张手牌，对其造成一点伤害，然后选择令该角色喝酒或摸两张牌。",
            MYhuomeishu:"火魅术",
            "MYhuomeishu_info":"回合结束后，你可以令一名角色摸一张牌，然后你控制此角色对其攻击范围内你选择的另一名角色使用一张【杀】，否则你获得其一张牌。",
            MYziya:"呲牙",
            "MYziya_info":"出牌阶段，对周围一名能杀到你的角色呲牙，如果该角色不杀你，你拿其任意一张牌，每回合限一次。",
            MYhunao:"胡闹",
            "MYhunao_info":"出牌阶段限一次，随你心情，对距离内的一名角色造成一点伤害。",
            MYleishenchui:"雷神锤",
            "MYleishenchui_info":"锁定技，当你使用【杀】对目标角色造成伤害时，你进行一次判定， 若你的体力值不大于2，你可以打出一张黑色牌替换之，判定结果为黑色牌，其受到3点伤害。",
            MYjuque:"巨阙",
            "MYjuque_info":"锁定技，你使用杀造成的伤害始终+1，若此时你的体力值不大于2，此杀不可闪避。",
            MYliuhuan:"六幻",
            "MYliuhuan_info":"限定技，当你解除濒死状态时，获得六点护甲。",
            MYyuren:"羽刃",
            "MYyuren_info":"每当你使用杀对别人造成伤害时，你可以获得对方一张手牌和一张装备牌。",
            MYjuniao:"巨鸟",
            "MYjuniao_info":"锁定技，你的进攻距离+1；体力值未满时，进攻距离无限，防御距离+1。",
            MYdaosheng:"盗圣",
            "MYdaosheng_info":"回合结束，你可以抽1名其他角色的一张手牌。",
            MYdianshenbu:"电神步",
            "MYdianshenbu_info":"觉醒技，准备阶段，若你的体力为1，你须减1点体力上限，并永久获得技能“电光”和“神行步”。",
            MYshenxingbu:"神行步",
            "MYshenxingbu_info":"锁定技，你的进攻距离无限制。",
            MYdianguang:"电光",
            "MYdianguang_info":"出牌阶段限一次，你可以将一张黑色手牌当【顺手牵羊】使用。",
            MYyishuihan:"易水寒",
            "MYyishuihan_info":"出牌阶段，你每使用一张杀，便可将此杀弃置任意一名角色判定区，当【兵粮寸断】使用。",
            MYbingdun:"冰盾",
            "MYbingdun_info":"每当你受到一次伤害，你可以将一张【兵粮寸断】置入伤害来源的判定区，自己获得一点护甲。",
            MYshisi:"誓死",
            "MYshisi_info":"出牌阶段限一次，当你使用一张[杀]时，可进行一次判定，若为红色则此[杀]不可闪避；当对方受到伤害后，你摸一张牌并且出杀次数+1。",
            shisi:"誓死",
            "shisi_info":"",
            MYmashu:"马术",
            "MYmashu_info":"锁定技，你的进攻距离+1。",
            MYfeiyan:"飞燕",
            "MYfeiyan_info":"其他角色判定阶段开始前，你可以视为对其使用一张【杀】。",
            MYbaixue:"白雪",
            "MYbaixue_info":"结束阶段，你可以摸一张牌。",
            MYlingbo:"凌波",
            "MYlingbo_info":"每当其他角色触发你使用或打出一张闪后，你可以将一张【乐不思蜀】置于此角色的判定区内。 ",
            MYwanrendi:"万人敌",
            "MYwanrendi_info":"锁定技，你使用红色杀无距离限制，不可被闪避，并且可以额外指定另一名角色为目标。",
            MYpojia:"破甲",
            "MYpojia_info":"你使用杀指定目标后，若目标装备区有牌，你可以弃置目标装备区的一张牌，然后你摸一张牌。",
            MYjuqi:"聚气",
            "MYjuqi_info":"每次当你于回合外失去牌时，可以进行一次判定，将非♥结果的判定牌置于你的武将牌上，称为“聚”，每有一张聚，你的进攻距离+1。",
            MYchengren:"成刃",
            "MYchengren_info":"觉醒技，准备阶段，若聚的数量不小于2，你将体力值回复至满，然后获得技能“气刃”。",
            MYqiren:"气刃",
            "MYqiren_info":"出牌阶段，你可以把任意一张聚当杀使用，此杀不受次数限制，发动后不能使用手牌杀。",
            MYquhun:"驱魂",
            "MYquhun_info":"锁定技，其他角色对你使用，或自己使用的[桃]额外回复一点体力。",
            MYjiedang:"结党",
            "MYjiedang_info":"出牌阶段限一次，你可以选择2名角色，分别横置或重置这些角色。",
            MYhuzhi:"互治",
            "MYhuzhi_info":"出牌阶段限一次，你可以自损一点体力并摸一张牌，然后指定一名其他角色，令之受到一点火焰伤害。",
            MYchuanren:"传任",
            "MYchuanren_info":"当你受到伤害后，可选择一名角色，令其摸一张牌和获得一点护甲。",
            MYjituo:"寄托",
            "MYjituo_info":"出牌阶段限一次，你可以选择一名其他角色并弃置一张牌，令其选择摸两张牌或者回复1点体力。",
            MYmianju:"面具",
            "MYmianju_info":"每当你使用杀指定目标后，或成为杀的目标后，你可以摸一张牌。",
            MYyanbian:"言辩",
            "MYyanbian_info":"其他角色使用杀时，若你不是杀的目标，可以弃置一张闪取消之，然后你摸一张牌。",
            MYjiquan:"集权",
            "MYjiquan_info":"对一名角色造成伤害后获得其所有手牌，每阶段限一次。",
            MYbaye:"霸业",
            "MYbaye_info":"主公技，结束阶段，你可以将手牌数补至X，X为现存的势力数。",
            MYkaoji:"烤鸡",
            "MYkaoji_info":"锁定技，每当其他角色受到一次伤害时，你获得1个烤鸡标记（标记上限为3）。出牌阶段限一次，你可以弃掉3个烤鸡标记并选择一项执行：（1）本轮内使用【杀】对目标造成伤害后，你摸一张牌并回复一点体力；（2）对你攻击范围内的一名其他角色造成一点伤害。",
            MYjuexing:"觉醒",
            "MYjuexing_info":"觉醒技，准备阶段若你的装备区的装备牌为两张或更多时，你必须加一点体力上限和恢复一点体力，失去技能【烤鸡】并获得技能【纵剑】。",
            zongjian:"纵剑",
            "zongjian_info":"你使用【杀】可以选择你距离不大于此【杀】点数的角色为目标；当你使用【杀】指定一个目标后，你可以根据下列条件执行相应的效果：1.其手牌数小于等于你的手牌数，此【杀】不可被【闪】响应 2.其体力值大于等于你的体力值，此【杀】伤害+1。",
            MYrengkaoji:"扔烤鸡！",
            "MYrengkaoji_info":"出牌阶段限一次，你可以弃掉3个烤鸡标记并选择1项执行：（1）本轮内使用【杀】对目标造成伤害后，摸一张牌并回复一点体力；（2）对你攻击范围内的1名其他角色造成1点伤害。",
            MYzhouyin:"咒印",
            "MYzhouyin_info":"出牌阶段限一次，你可以弃置两张方片牌令一名其他角色的武将牌翻面，然后你摸两张牌。",
            MYyuzhi:"预知",
            "MYyuzhi_info":"出牌阶段限一次，你可以观看一名角色的手牌，然后你可以获得其中一张方块手牌。",
            MYyinlu:"音律",
            "MYyinlu_info":"<font color=#F0F>幻音宝盒</font> ：每当你受到伤害后，随机进行一项：①弃置伤害来源两张手牌;②弃置伤害来源所有手牌; ③弃置伤害来源装备区的两张牌; ④弃置伤害来源装备区的所有牌; ⑤你恢复一点体力;⑥对伤害来源造成一点伤害;⑦获得伤害来源的一张手牌;⑧获得伤害来源的两张手牌; ⑨你摸一张牌 ;⑩你摸两张牌。",
            MYjiansheng:"剑圣",
            "MYjiansheng_info":"每当其他角色触发你使用或打出一张闪后，你可以弃置此角色一张牌。",
            MYzongjian:"纵剑",
            "MYzongjian_info":"锁定技，你使用【杀】可以选择你距离不大于此【杀】点数的角色为目标；当你使用【杀】指定一个目标后，你可以根据下列条件执行相应的效果：1.其手牌数小于等于你的手牌数，此【杀】不可被【闪】响应 2.其体力值大于等于你的体力值，此【杀】伤害+1。",
            MYbadao:"霸道",
            "MYbadao_info":"每当你受到伤害时，你可以进行一定判定，若为黑色则可以继续判定，直到出现红色。然后你获得所有黑色判定牌和伤害来源的一张牌。",
            MYzhugong:"助攻",
            "MYzhugong_info":"出牌阶段限一次，你可以将一张手牌交给一名其他角色，然后你摸一张牌。",
            MYmuniao:"木鸟",
            "MYmuniao_info":"出牌阶段限一次，你可以弃置一名其他角色装备区内的一张牌，令其摸两张牌。",
            MYjiguan:"机关",
            "MYjiguan_info":"出牌阶段限一次，你可以将你手牌中的一张装备牌置于一名其他角色装备区里（不得替换原装备），然后你摸两张牌。",
            MYliuhunzhou:"六魂咒",
            "MYliuhunzhou_info":"出牌阶段限一次，你可以与一名角色拼点，若你赢，令其武将牌翻面；若你没赢，你摸一张牌，然后视为其对你使用一张杀。",
            MYxueshou:"血手",
            "MYxueshou_info":"锁定技，你使用的红色杀不可闪避，并且伤害+1。",
            MYwuyan:"无言",
            "MYwuyan_info":"锁定技，你不能成为其他角色非延时锦囊的目标。",
            MYnance:"难测",
            "MYnance_info":"摸牌阶段，你只能摸一张牌；结束阶段，你摸两张牌。",
            MYhaoyan:"豪言",
            "MYhaoyan_info":"出牌阶段限一次，你可以与一名手牌数大于你体力值的其他角色交换手牌，并对其造成一点伤害。若如此做，视为对自己使用一张【乐不思蜀】。",
            MYliusha:"流沙",
            "MYliusha_info":"摸牌阶段结束时，你可以选择再摸两张牌，若如此做，此回合你的手牌上限改为2。",
            liusha:"流沙",
            "liusha_info":"",
            MYhengjian:"横剑",
            "MYhengjian_info":"出牌阶段，你可以将两张杀当一张杀使用，此杀无视距离，可指定任意名角色为目标。",
            MYshitong:"噬痛",
            "MYshitong_info":"每当你受到一点伤害后，加一点体力上限。",
            MYfuxieshu:"蝠血术",
            "MYfuxieshu_info":"当你的体力值未满时，对一名其他角色造成伤害后，你可以与该角色共同减一点体力上限，然后你回复一点体力。",
            MYzongheng:"纵横",
            "MYzongheng_info":"你可以横置你的武将牌，视为使用一张【顺手牵羊】；受到伤害后，你可以选择一名角色，使其横置或重置武将牌，并且摸两张牌弃置一张牌。",
            MYbaihe:"捭阖",
            "MYbaihe_info":"结束阶段开始时，若你处于连环状态，你可以让处于连环状态的每名角色的摸一张牌。",
            MYroujia:"肉甲",
            "MYroujia_info":"锁定技，每当你回复一点体力，你获得一点护甲并摸一张牌。",
            MYchongzao:"重造",
            "MYchongzao_info":"限定技，出牌阶段或当你处于濒死状态时，你可以丢弃你所有的牌和你判定区里的牌，并复原你的武将牌，然后摸三张牌且体力回复至3点，并获得技能【凶暴】。",
            MYxiongbao:"凶暴",
            "MYxiongbao_info":"锁定技，你使用的【杀】需要两张【闪】响应，若杀造成伤害后，还可以继续出杀。",
            MYyehou:"夜吼",
            "MYyehou_info":"你的回合外，每当你因使用、打出或弃置而失去一张牌时，你可以进行一次判定。若失去的是红色牌，判定结果颜色相同，你可以摸一张牌，判定结果颜色不同，你可以弃置任意一名角色的一张牌。若失去的为黑色牌，判定结果颜色相同，你回复一点体力，判定结果颜色不同，你增加一点体力上限。",
            MYlangqun:"狼群",
            "MYlangqun_info":"锁定技，当你受到伤害后，对其他所有角色造成一点雷属性伤害。",
            MYjuenian:"觉念",
            "MYjuenian_info":"在一名角色的结束阶段，若其体力值为2或更低，你可以令其摸一张牌。",
            MYcisha:"刺杀",
            "MYcisha_info":"弃牌阶段，若你弃牌，可以视为使用一张无视距离的杀。",
            MYyiyong:"义勇",
            "MYyiyong_info":"每当你于回合外失去牌时，你可以获得一点护甲。你的回合开始时，清除所有护甲。",
            MYmoushi:"谋士",
            "MYmoushi_info":"回合开始时，你进行一次判定，若为红色牌，你获得技能\"良计\"，若为黑色牌，你获得技能\"优策\"，直到下回合开始。",
            MYyouce:"优策",
            "MYyouce_info":"出牌阶段，展示一名角色的一张手牌，然后你可以弃置一张大于此牌的手牌并摸两张牌，或者弃置一张不大于此牌的手牌令其摸两张牌。",
            MYliangji:"良计",
            "MYliangji_info":"出牌阶段，展示一名角色的一张手牌，然后你可以弃置一张大于此牌的手牌并回复一点体力，或者弃置一张不大于此牌的手牌令其回复一点体力。",
            MYruya:"儒雅",
            "MYruya_info":"回合结束时，可令任意一名角色将手牌补至其体力值的张数(不能超过五张)。",
            MYdadao:"大道",
            "MYdadao_info":"若你的手牌数小于体力上限，每当有角色使用一张非延时锦囊牌时，你摸一张牌。",
            MYwuji:"无极",
            "MYwuji_info":"若你的手牌数大于体力上限，获得手牌后，你弃置一张手牌。",
            MYtiandao:"天道",
            "MYtiandao_info":"当你成为锦囊牌的目标，或对自己使用锦囊牌时，你可以进行一次判定，若为红色，你摸一张牌，若为黑色，此锦囊对你无效。",
            MYrenzong:"人宗",
            "MYrenzong_info":"出牌阶段限一次，你可以获得所有其他角色区域内的一张牌，然后你须为所有存活的角色每人逐个派发一张手牌。",
            MYzhiyin:"知音",
            "MYzhiyin_info":"出牌阶段限一次，你可以弃置一张手牌，并展示一名其他角色的一张手牌，若两张牌颜色相同，你弃置所有手牌，复制其所有手牌，否则对方失去一点体力。",
            MYqinxian:"琴弦",
            "MYqinxian_info":"当你失去体力时，可以令一名其他角色回复一点体力。当你回复体力时，可以令一名其他角色失去一点体力。",
            MYqishu:"奇术",
            "MYqishu_info":"每当你使用或打出一张基本牌，你随机获得一张锦囊牌。",
            MYxiandan:"仙丹",
            "MYxiandan_info":"锁定技，当你进入濒死状态时，你进行一次判定，若结果为红色，你将体力回复至1。",
            MYshuzhan:"戍战",
            "MYshuzhan_info":"出牌阶段限一次，你可以和一名角色拼点，若你赢，你选择获得技能\"叠杀\"或\"双杀\"直到回合结束；若你没赢，你摸两张牌，不能使用黑色牌直到回合结束。",
            MYdiesha:"叠杀",
            "MYdiesha_info":"你使用的杀无视防具，结算+1。",
            MYshuangsha:"双杀",
            "MYshuangsha_info":"你使用的杀无视距离，目标+1。",
            MYxiayi:"侠义",
            "MYxiayi_info":"每当你距离内的其他角色成为杀的目标后，若你不是杀的使用者，你可以弃置一张牌并摸一张牌，然后将此杀的目标转移给自己。",
            MYmomei:"墨眉",
            "MYmomei_info":"你可以将[闪]当[杀]使用或打出，若是使用，你可以弃置目标一张牌。",
            MYfeigong:"非攻",
            "MYfeigong_info":"你可以将[杀]当[闪]使用或打出，若如此做，你可以视为对其使用一张杀。",
            MYmogong:"墨攻",
            "MYmogong_info":"锁定技，若你的体力值为3或更低，你拥有技能“墨眉”和\"非攻\"。",
            MYdaofa:"刀法",
            "MYdaofa_info":"锁定技，你使用杀的次数和目标数额外+x(x为你已损失的体力值)。",
            MYjieniu:"解牛",
            "MYjieniu_info":"你使用杀指定目标后，可以弃置目标装备区的所有牌。",
            MYzhishu:"执书",
            "MYzhishu_info":"出牌阶段限一次，你可以弃置一张手牌并选择一名其他角色，令之弃置一张牌。若其体力值大于等于你的体力值，对其造成一点伤害，然后你摸一张牌。",
            MYhanguang:"含光",
            "MYhanguang_info":"当你受到伤害时，若伤害来源的体力值大于等于你的体力值，你摸一张牌。",
            MYzengqi:"赠器",
            "MYzengqi_info":"当你回合结束时，若你于此回合发动\"铸剑\"至少一次，则你可以令一名其他角色摸一张牌。",
            MYtian:"天赋",
            "MYtian_info":"",
            MYfu:"天赋",
            "MYfu_info":"",
            MYtianfu:"天赋",
            "MYtianfu_info":"准备阶段，若你的手牌数大于体力值，你可以回复一点体力；若你的手牌数小于体力值，你可以摸一张牌；若你的手牌数等于体力值，你可以视为使用一张无视距离的杀，此杀造成伤害后，你获得一点护甲。",
            MYguiye:"归叶",
            "MYguiye_info":"当你使用一张非转化的普通锦囊牌时，你可以弃置一名其他角色的一张牌，若弃置的为黑色，则你摸一张牌。",
            MYyingwei:"影卫",
            "MYyingwei_info":"锁定技，若你的手牌数不大于2，你可以将一张黑色手牌当[闪]使用或打出；若你的体力值不大于2，你的进攻距离+1。",
            MYjiansuo:"剑锁",
            "MYjiansuo_info":"当你使用杀指定目标时，你可以令目标非锁定技失效直到其下一回合结束；若目标闪避了你使用的杀，你摸一张牌。",
            MYmeiwu:"魅舞",
            "MYmeiwu_info":"出牌阶段限一次，你可以展示一名其他角色的一张手牌，若此牌为黑色，将之置于该角色的判定区内，视为【兵粮寸断】，否则你获得之。",
            MYanfu:"安抚",
            "MYanfu_info":"当一名角色回复体力后，你可以令一名角色摸一张牌。",
            MYxiaosheng:"萧声",
            "MYxiaosheng_info":"出牌阶段限一次，你可以令距离1以内的任意名角色摸一张牌。",
            MYhuadie:"化蝶",
            "MYhuadie_info":"当你距离1以内的角色受到伤害时，你可以摸一张牌，每名角色出牌阶段限一次。",
            MYzhanshen:"战神",
            "MYzhanshen_info":"每当你对其他角色造成一点伤害，该角色获得一枚【战】标记，当你对拥有【战】标记的角色造成伤害后，该角色额外失去一点体，然后弃置【战】标记。",
            MYbingxian:"兵仙",
            "MYbingxian_info":"当你受到伤害后，你可以摸x+n张牌并弃置x张牌(x为你的体力值、n为你已损失的体力值)；当你一次失去或弃置至少两张手牌后，你可以弃置一名其他角色的一张牌。",
            MYtaie:"太阿",
            "MYtaie_info":"出牌阶段限一次，你可以弃置一张手牌，并指定一名未获得花色标记的角色，令其获得此牌的花色标记。根据花色标记执行如下效果，然后弃置标记：♥若其使用或打出一张红桃牌，其回复一点体力；♦若其使用或打出一张方片牌，其摸两张牌；♠若其使用或打出一张黑桃牌，其失去一点体力；♣若其使用或打出一张梅花牌，其弃置两张牌。最后你进行一次判定，若判定结果为：♥你选择一名其他角色，获得其一张牌；♦你摸一张牌；♠你摸两张牌并弃置一张牌；♣若你没有护甲，你获得一点护甲。",
            "MYtaie_spade":"黑桃",
            "MYtaie_spade_info":"",
            "MYtaie_heart":"红桃",
            "MYtaie_heart_info":"",
            "MYtaie_diamond":"方片",
            "MYtaie_diamond_info":"",
            "MYtaie_club":"梅花",
            "MYtaie_club_info":"",
            MYzhangmen:"掌门",
            "MYzhangmen_info":"当你受到伤害后，令伤害来源选择一项：1. 令你摸一张牌；2.  其弃置一张牌。",
            MYtianzong:"天宗",
            "MYtianzong_info":"锁定技，其他角色回合开始时，若其未损失体力值，则其非锁定技失效直到回合结束；你的回合开始时，其他所有已损失体力值的角色非锁定技失效直到回合结束。",
            MYxuandao:"玄道",
            "MYxuandao_info":"当你距离1以内的角色成为杀的目标后，若你不是杀的使用者，你可以令该目标进行一次判定，若为红色，其摸一张牌，若为黑色，此杀对其无效。",
            MYzhishui:"止水",
            "MYzhishui_info":"出牌阶段限一次，你可以弃置一张装备牌并选择一名其他角色，然后弃置其一张牌，若弃置的不为装备牌，你摸一张牌。",
            MYdongjun:"东君",
            "MYdongjun_info":"每当你对其他角色造成伤害后，若其未获得冰冻标记，你可以令其获得一枚冰冻标记，拥有冰冻标记的角色不能使用杀直到其回合结束，然后失去标记。",
            MYbingdong:"冰冻",
            "MYbingdong_info":"",
            MYjinwu:"金乌",
            "MYjinwu_info":"每当你受到伤害后，你可以选择一名未获得引导标记的角色，令其获得引导标记，拥有引导标记的角色，首次使用的杀不可闪避，并且摸两张牌失去标记。",
            MYyindao:"引导",
            "MYyindao_info":"",
            MYfenyan:"绯烟",
            "MYfenyan_info":"每当你成为其他角色卡牌的唯一目标时，你可以弃置一张装备牌，将使用者与目标对调。",
            MYxiaoyong:"骁勇",
            "MYxiaoyong_info":"当你使用【杀】指定目标后，你可以与目标角色拼点，若你赢，此杀不能被【闪】响应并且摸两张牌，若你输，你获得对方拼点的牌。",
            MYshanzhan:"善战",
            "MYshanzhan_info":"当你受到伤害后，你可以与伤害来源拼点，若你赢，其失去一点体力，若你输，你获得对方拼点的牌。",
            MYyushi:"玉示",
            "MYyushi_info":"出牌阶段限一次，你可以弃置一张手牌，并选择一名其他角色，弃置其一张牌手牌，若与你弃置的牌颜色相同，你获得引导标记，不同你摸一张牌。(拥有引导标记的角色首次使用杀不可闪避，并且摸两张牌弃置引导标记)",
            MYquanyan:"劝言",
            "MYquanyan_info":"每名其他角色使用非延时类锦囊牌时限一次，你可以弃置一张手牌，进行一次判定，若结果为红色，你摸一张牌，若结果为黑色，此锦囊无效，并且其失去一点体力。",
            MYzhushu:"逐戍",
            "MYzhushu_info":"每阶段限一次，当你对其他角色造成伤害后，令之武将牌移出游戏25秒，当其武将牌回到游戏时，你摸一张牌。",
            MYzhaoci:"诏赐",
            "MYzhaoci_info":"当你受到伤害后，你将自己武将牌移出游戏25秒，当你武将牌回到游戏时，伤害来源受到一点伤害。",
            MYjunzhou:"君舟",
            "MYjunzhou_info":"当你装备区没牌时，摸牌阶段，你额外摸一张牌。当你装备区有武器时，准备阶段，你可以弃置一名其他角色的一张牌。当你装备区有防具时，出牌阶段限一次，你可以将任意一张牌当【调兵遣将】使用。当你装备区有坐骑时，回合结束，你摸x张牌（x为你装备区的坐骑数）。",
            MYminshui:"民水",
            "MYminshui_info":"当你受到锦囊牌造成的伤害时，你可以弃置伤害来源的一张牌。当你受到基本牌造成的伤害时，你可以获得伤害来源的一张牌。当你体力流失时，你可以摸一张牌。",
            MYzhengang:"真刚",
            "MYzhengang_info":"当你使用杀时，随机执行一项： <br>①此杀伤害+1。 <br>②此杀不可闪避。 <br>③你回复一点体力。",
            MYduanshui:"断水",
            "MYduanshui_info":"出牌阶段限一次，你可以弃置一张手牌并指定任意名其他角色进行判定，若判定结果为黑色，视为对该角色使用【兵良寸断】。",
            MYluanshen:"乱神",
            "MYluanshen_info":"当你使用的杀被闪避后，你可以令另一名其他角色失去一点体力，然后你摸一张牌。",
            MYwangliang:"魍魉",
            "MYwangliang_info":"当你使用一张非转化的普通锦囊牌时，你可以选择一项：随机使用一张对全场有正面效果的牌；或随机使用一张对全场有负面效果的牌。",
            MYmiehun:"灭魂",
            "MYmiehun_info":"出牌阶段限一次，你可以将一张杀当【南门入侵】使用，然后你获得一张【过河拆桥】。",
            MYwangzhen:"网阵",
            "MYwangzhen_info":"锁定技，准备阶段，你选择转化为六剑奴中的一名角色(转化时会失去其他所有技能)。",
            MYzhuanpo:"转魄",
            "MYzhuanpo_info":"出牌阶段限一次，你可以将两张非基本牌当【万箭齐发】使用，然后你获得一张【顺手牵羊】。",
            MYquanheng:"权横",
            "MYquanheng_info":"锁定技，红色牌对你造成的伤害无效，你使用红色牌造成的伤害+1。",
            MYyixiong:"义兄",
            "MYyixiong_info":"每当你使用或打出一张基本牌，你可以令一名角色摸一张牌。",
            MYfusi:"赴死",
            "MYfusi_info":"杀死你的角色武将牌翻面并失去一点体力。",
            MYzhangshi:"仗势",
            "MYzhangshi_info":"锁定技，你的手牌上限+x，x为你上家的体力值。",
            MYxinqiren:"欺人",
            "MYxinqiren_info":"当你对一名角色造成伤害后，若其体力值少于你，你可以弃置其x张牌(x为其损失的体力值)。",
            MYshabi:"傻逼",
            "MYshabi_info":"当你造成/受到伤害后，该目标/伤害来源进入混乱状态(行为不受控制，且会攻击队友)，直到其回合结束。",
            MYjuesha:"绝杀",
            "MYjuesha_info":"你可以选择一名其他角色，然后你进行一次判定，若结果为黑色，视为对其使用一张杀，否则你摸一张牌。出牌阶段限X次(X为你损失的体力值+1)，发动此技能后不能使用手牌杀。",
            MYbaizhan:"百战",
            "MYbaizhan_info":"锁定技，你的手牌上限为你已损失的体力值+2，回合内只能使用4张牌，根据你使用的手牌数执行下列效果： 使用1张牌，弃一张牌。 使用2张牌，摸一张牌。 使用3张牌，失去一点体力。 使用4张牌，回复一点体力。 ",
            MYzhangong:"战功",
            "MYzhangong_info":"出牌阶段，每当你使用一张牌，便获得1个战功标记。回合结束后，你必须弃置所有战功标记，并选择一名角色获得等量的牌。",
            MYxinzhangong:"战功",
            "MYxinzhangong_info":"",

				
        },








};
			if(lib.device||lib.node){
				for(var i in qinshimingyue.character){qinshimingyue.character[i][4].push('ext:秦时明月/'+i+'.jpg');}
			}else{
				for(var i in qinshimingyue.character){qinshimingyue.character[i][4].push('db:extension-秦时明月:'+i+'.jpg');}
			}
			return qinshimingyue;
		});
		lib.config.all.characters.push('qinshimingyue');
		if(!lib.config.characters.contains('qinshimingyue')) lib.config.characters.push('qinshimingyue');
		lib.translate['qinshimingyue_character_config']='秦时明月';
		


		game.import('card',function(){
			var qinshimingyue={
			name:'qinshimingyue',
			connect:true,





			
card:{

            MYzhenyuqianye:{

 image:'ext:秦时明月/MYzhenyuqianye.png',
                audio:true,
                fullskin:true,
                type:"trick",
                enable:true,
                selectTarget:-1,
                reverseOrder:true,
                filterTarget:function (card,player,target){
        return target!=player;
    },
                content:function (){
        target.damage();
    },
                ai:{
                    basic:{
                        order:9,
                        useful:[5,1],
                        value:5,
                    },
                    result:{
                        target:-2,
                    },
                    tag:{
                        respond:1,
                        respondSha:1,
                        damage:1,
                        multitarget:1,
                        multineg:1,
                    },
                },
            },
            MYchilianwangshe:{

image:'ext:秦时明月/MYchilianwangshe.png',

                type:"equip",
                subtype:"equip2",
                onLose:function (){
        player.draw();
    },
                skills:["chilianwangshe"],
                ai:{
                    basic:{
                        equipValue:6.5,
                    },
                },
                fullskin:true,
            },
            MYpotuqilang:{
image:'ext:秦时明月/MYpotuqilang.png',




                type:"equip",
                subtype:"equip1",
                distance:{
                    attackFrom:-1,
                },
                skills:["potuqilang"],
                ai:{
                    basic:{
                        equipValue:2,
                    },
                },
                fullskin:true,
            },
            MYliuhunkongzhou:{
image:'ext:秦时明月/MYliuhunkongzhou.png',


                audio:true,
                fullskin:true,
                type:"trick",
                enable:true,
                filterTarget:function (card,player,target){
        return target!=player&&!target.isTurnedOver();
    },
                content:function () {
        target.turnOver();
    },
                ai:{
                    basic:{
                        order:9,
                        value:3,
                        useful:1,
                    },
                    result:{
                        target:-2,
                    },
                    tag:{
                        loseHp:1,
                    },
                },
            },
            MYjiguanzhuque:{
image:'ext:秦时明月/MYjiguanzhuque.png',


                fullskin:true,
                type:"equip",
                subtype:"equip3",
                distance:{
                    globalTo:2,
                },
                enable:true,
                selectTarget:-1,
                filterTarget:function (card,player,target){
        return target==player;
    },
                modTarget:true,
                allowMultiple:false,
                content:function (){
        target.equip(card);
    },
                toself:true,
                ai:{
                    basic:{
                        order:function (card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        equipValue:7,
                        value:function (card,player){
                var value=0;
                var info=get.info(card);
                var current=player.getEquip(info.subtype);
                if(current&&card!=current){
                    value=get.value(current,player);
                }
                var equipValue=info.ai.equipValue;
                if(equipValue==undefined){
                    equipValue=info.ai.basic.equipValue;
                }
                if(typeof equipValue=='function') return equipValue(card,player)-value;
                if(typeof equipValue!='number') equipValue=0;
                return equipValue-value;
            },
                    },
                    result:{
                        target:function (player,target){
                return get.equipResult(player,target,name);
            },
                    },
                },
            },
            MYjiguanbaihu:{

image:'ext:秦时明月/MYjiguanbaihu.png',



                fullskin:true,
                type:"equip",
                subtype:"equip4",
                distance:{
                    globalFrom:0,
                },
                enable:true,
                selectTarget:-1,
                filterTarget:function (card,player,target){
        return target==player;
    },
                modTarget:true,
                allowMultiple:false,
                content:function (){
        target.equip(card);
    },
                toself:true,
                skills:["jiguanbaihu"],
                ai:{
                    basic:{
                        order:function (card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        equipValue:4,
                        value:function (card,player){
                var value=0;
                var info=get.info(card);
                var current=player.getEquip(info.subtype);
                if(current&&card!=current){
                    value=get.value(current,player);
                }
                var equipValue=info.ai.equipValue;
                if(equipValue==undefined){
                    equipValue=info.ai.basic.equipValue;
                }
                if(typeof equipValue=='function') return equipValue(card,player)-value;
                if(typeof equipValue!='number') equipValue=0;
                return equipValue-value;
            },
                    },
                    result:{
                        target:function (player,target){
                return get.equipResult(player,target,name);
            },
                    },
                },
            },
        },




				skill:{},

				translate:{
            MYzhenyuqianye:"鸩羽千夜",
            "MYzhenyuqianye_info":"出牌阶段，对所有其他角色使用。每名目标角色受到1点伤害。",
            MYchilianwangshe:"赤练王蛇",
            "MYchilianwangshe_info":"当你受到伤害后，伤害来源失去一点体力，然后弃置此装备。锁定技，当你失去装备区的【赤练王蛇】时，你摸一张牌。",
            MYpotuqilang:"破土七郎",
            "MYpotuqilang_info":"每当你使用杀造成伤害后，你可以弃置对方一张手牌和一张装备牌。",
            MYliuhunkongzhou:"六魂恐咒",
            "MYliuhunkongzhou_info":"出牌阶段，对一名其他角色使用，令其武将牌翻面。",
            MYjiguanzhuque:"机关朱雀",
            "MYjiguanzhuque_info":"你的防御距离+2。",
            MYjiguanbaihu:"机关白虎",
            "MYjiguanbaihu_info":"体力值未满时，你的进攻距离无限。",
        },
				list:[["club","5","MYjiguanbaihu"],["diamond","10","MYjiguanzhuque"],["heart","12","MYliuhunkongzhou"],["club","4","MYpotuqilang"],["diamond","13","MYchilianwangshe"],["spade","6","MYzhenyuqianye"]],
			};

		





			return qinshimingyue;
		});
		lib.translate['qinshimingyue_card_config']='秦时明月';
		lib.config.all.cards.push('qinshimingyue');
		if(!lib.config.cards.contains('qinshimingyue')) lib.config.cards.push('qinshimingyue');
	};





			
		
		






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
    intro:" <li>联机完结版，可在联机设置里设为联机禁用<li>本扩展会根据大家的反馈进行修改和完善。<li>特别感谢:@Sukincen @Cae <li><font color=#F0F>扩展分享群:149662491</font><br>—————————————————<br><br><br><br><h3>还没结束，后续更新：</h2>沧海横流(续写秦时明月)<br>盖世英雄(民间与DIY武将)<br>天行九歌(乱世苍生，聚散流沙)<br><a href=\"https://pan.baidu.com/s/1pDm_zsvBLhyIRmsYVoVBfw\">点击下载本人更多扩展<a>",
    author:"呲牙哥！",
    diskURL:"",
    forumURL:"",
    version:"2.8",
},files:{"character":[],"card":[],"skill":[]}}})
