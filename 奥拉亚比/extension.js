game.import("extension",{name:"奥拉亚比",content:function (config,pack){  
	if ( lib.brawl ) {
lib.brawl.aoladuijue={	
            name:'奥拉对决',
            mode:'versus',
			submode:'1v1',
            intro:'<li>仅能使用奥拉亚比。<li>推荐关闭单人控制，对阵人数设为一。',
            showcase:function(init){
                var node=this;
                var player1,player2;
                if(init){
                    player1=ui.create.player(null,true).init('雪无寒灵');
                    player2=ui.create.player(null,true).init('传奇阿波罗');
                    player1.style.left='20px';
                    player1.style.top='20px';
                    player1.style.transform='scale(0.9)';
                    player1.node.count.innerHTML='2';
                    player1.node.count.dataset.condition='mid';
                    player2.style.left='auto';
                    player2.style.right='20px';
                    player2.style.top='20px';
                    player2.style.transform='scale(0.9)';
                    player2.node.count.innerHTML='2';
                    player2.node.count.dataset.condition='mid';
                    this.appendChild(player1);
                    this.appendChild(player2);
                    this.player1=player1;
                    this.player2=player2;
                }
                else{
                    player1=this.player1;
                    player2=this.player2;
                }
                var rect1=player1.getBoundingClientRect();
                var rect2=player2.getBoundingClientRect();
                var left1=rect1.left+rect1.width/2-ui.arena.offsetLeft;
                var left2=rect2.left+rect2.width/2-ui.arena.offsetLeft;
                var top1=rect1.top+rect1.height/2-ui.arena.offsetTop;
                var top2=rect2.top+rect2.height/2-ui.arena.offsetTop;

                var createCard=function(sha){
                    var card;
                    if(sha){
                        card=game.createCard('sha','noclick');
                        card.style.transform='scale(0.9)';
                    }
                    else{
                        card=ui.create.card(null,'noclick',true);
                    }
                    card.style.opacity=0;
                    card.style.position='absolute';
                    card.style.zIndex=2;
                    card.style.margin=0;
                    return card;
                }

                var func=function(){
                    game.linexy([left1,top1,left2,top2]);
                    var card=createCard(true);
                    card.style.left='43px';
                    card.style.top='58px';
                    node.appendChild(card);
                    ui.refresh(card);
                    card.style.opacity=1;
                    card.style.transform='scale(0.9) translate(137px,152px)';
                    setTimeout(function(){
                        card.delete();
                    },1000);
                    player1.node.count.innerHTML='1';

                    setTimeout(function(){
                        if(!node.showcaseinterval) return;
                        player1.node.count.innerHTML='2';
                        var card=createCard();
                        card.style.left='43px';
                        card.style.top='58px';
                        card.style.transform='scale(0.9) translate(137px,152px)';
                        node.appendChild(card);
                        ui.refresh(card);
                        card.style.opacity=1;
                        card.style.transform='scale(0.9)';
                        setTimeout(function(){
                            card.delete();
                        },1000);
                    },300);

                    setTimeout(function(){
                        if(!node.showcaseinterval) return;
                        player2.node.count.innerHTML='1';
                        game.linexy([left2,top2,left1,top1]);
                        var card=createCard(true);
                        card.style.left='auto';
                        card.style.right='43px';
                        card.style.top='58px';
                        node.appendChild(card);
                        ui.refresh(card);
                        card.style.opacity=1;
                        card.style.transform='scale(0.9) translate(-137px,152px)';
                        setTimeout(function(){
                            card.delete();
                        },700);

                        setTimeout(function(){
                            if(!node.showcaseinterval) return;
                            player2.node.count.innerHTML='2';
                            var card=createCard();
                            card.style.left='auto';
                            card.style.right='43px';
                            card.style.top='58px';
                            card.style.transform='scale(0.9) translate(-137px,152px)';
                            node.appendChild(card);
                            ui.refresh(card);
                            card.style.opacity=1;
                            card.style.transform='scale(0.9)';
                            setTimeout(function(){
                                card.delete();
                            },700);
                        },300);
                    },1000);
                };
                node.showcaseinterval=setInterval(func,2200);
                func();
            },
            init:function(){
                for(var i in lib.character){
                    var skills=lib.character[i][3]
                    if(skills.contains('奥拉亚比')) return false;
					{
                        delete lib.character[i];
                    }
                }
            },
	}
	}
		if(config.yuan){
			game.addCharacterPack({
       character:{
            天吟降龙:["male","超龙系",4,["龙翔秘术","宗卷龙体","天命龙翔","超龙系","奥拉亚比"],["des:龙吟家族守护神兽，从小就一本正经，严肃认真，加上黝黑的皮肤，怎么说呢，就是一直都有着与年龄不符的沧桑呀！"]],
            鬼墨无虑:["male","超暗系",3,["阎狱鬼刀","天愈傀儡","金刚傀儡","千傀奇术","超暗系","奥拉亚比"],["des:奥拉星无虑自小就痴迷于千机术，一心成为像鬼墨初代那样强大的亚比，它刚开始选择当偃师的时候，常常被自己的傀儡娃娃吓得半死！"]],
            后羿·完全体:["male","超龙完全体",3,["致命射击","巨龙噬","超龙系","完全体","迅捷连射","奥拉亚比"],["des:遥远的上古时期，天上出现了十个太阳，世界仿佛一个高温熔炉，此时后羿将九个太阳射落被视为救世英雄。但其实它只是太怕热了才将太阳射落啦！"]],
            奥拉·后羿:["male","超龙系",4,["迅捷连射","超龙系","奥拉亚比"],["des:遥远的上古时期，天上出现了十个太阳，世界仿佛一个高温熔炉，此时后羿将九个太阳射落被视为救世英雄。但其实它只是太怕热了才将太阳射落啦！"]],
            白无冴:["male","超光系",3,["惊华神移","神勾玉的祝福","超光系","奥拉亚比"],["des:在萤和神勾玉的帮助下，冴完成了自我突破，奥义觉醒化身为白无冴！它终于找到了自己，重要的不是你是谁，而是你决定成为谁！"]],
            森罗可兰·完全体:["female","超木完全体",2,["灵风甦醒","春沐之心","万物感召","森罗·奈落","超木系","完全体","奥拉亚比"],["des:超木英雄王可兰终于开启了完全体力量，继续保护着重要的事物！"]],
            鬼墨无忧·完全体:["male","超暗完全体",2,["奇门千机","离经千机变","鬼墨七星阵","超暗系","完全体","奥拉亚比"],["des:开启了完全体力量的无忧，达到了目前千机术的巅峰，它决意要用这股力量守护它的家族！"]],
            鬼墨无忧:["male","超暗系",2,["鬼墨七星阵","奇门千机","超暗系","奥拉亚比"],["des:开启了完全体力量的无忧，达到了目前千机术的巅峰，它决意要用这股力量守护它的家族！"]],
            千机伞:["male","超暗系",2,["千机","超暗系","攻击等级","速度等级","闪避等级","暴击等级","防御等级","奥拉亚比"],["forbidai","des:召唤物"]],
            森罗可兰:["female","超木系",1,["灵风甦醒","春沐之心","万物感召","超木系","奥拉亚比"],["des:可兰超系觉醒降临奥拉，继续和英雄王弗洛拉一起守护奥拉星！"]],
            阿修罗·完全体:["male","超暗完全体",2,["地狱之手·完全体","狂怒阎威","狂怒","神迹血脉·完全体","超暗系","完全体","奥拉亚比"],["des:从出生起就被认为是恶魔之子，总是有股强大的力量在黑暗中保护着它。从有意识以来，就发现自己可以控制暗黑力量！"]],
            阿修罗:["male","超暗系",3,["地狱之手","狂怒阎威","狂怒","神迹血脉加","超暗系","奥拉亚比"],["des:从出生起就被认为是恶魔之子，总是有股强大的力量在黑暗中保护着它。从有意识以来，就发现自己可以控制暗黑力量！"]],
            神迹冰罗皇:["male","超水系",3,["龙魂封世","冰帝龙封","神迹魂封","神迹血脉加","超水系","奥拉亚比"],["des:奥拉星冰龙之子神迹力量开启，继承了真正的冰龙之力！"]],
            神迹冰罗皇·完全体:["male","超水完全体",2,["龙魂封世·完全体","神迹魂封","冰帝龙封","神迹血脉·完全体","超水系","完全体","奥拉亚比"],["des:奥拉星冰龙之子完全体力量开启，继承了真正的冰龙之力！"]],
            冥夜君狼王·完全体:["male","超圣灵完全体",4,["夜歌","炽戮","天尊夜痕","势不可挡","超圣灵系","完全体","奥拉亚比"],["des:奥拉星冥夜君狼王完全体力量开启，至尊王者降临！"]],
            冥夜君狼王:["male","超圣灵系",4,["炽戮","夜歌","天尊夜痕","超圣灵系","奥拉亚比"],["des:奥拉星冥夜君狼王诞生，夜狼传说，强强联合，神一般强大力量袭来，来看看冥夜君狼王的技能表种族值吧。"]],
            龙小猫:["male","超电系",4,["武喵道","超电系","奥拉亚比"],["des:有颗炙热的武士之心，在人生低谷期被龙吟宗主接纳为族人，自此便一心侍奉龙吟家族，成为龙吟家族最忠心的一员。"]],
            龙猫武士:["male","超电系",4,["吟喵刀","超电系","奥拉亚比"],["des:有颗炙热的武士之心，在人生低谷期被龙吟宗主接纳为族人，自此便一心侍奉龙吟家族，成为龙吟家族最忠心的一员。"]],
            神龙·龙吟初代:["male","超龙系",4,["龙吟初代","八歧大蛇·封","超龙系","奥拉亚比"],["forbidai","des:传奇神龙的前身"]],
            圣修暗凯帝:["male","超王系",2,["圣光·明镜破","暗影·元灭却","修凯领域","超王系","奥拉亚比"],["des:宿命中的挚友和对手，在命运的指引下，完成了合体，真真正正的并肩作战！这一刻，彼此都明白了对方的意志！"]],
            圣修暗凯帝·完全体:["male","超王完全体",1,["圣魔·星辰裂","圣光·明镜破","暗影·元灭却","修凯领域","超王系","完全体","奥拉亚比"],["des:开启了完全体力量的圣修暗凯帝，拥有了无上的力量，坚守着自己的信念！"]],
            八歧大蛇·完全体:["male","超暗完全体",3,["天丛云","灵·陨","血罪契约","须佐之殇","超暗系","完全体","天蛇罚","奥拉亚比"],["des:龙吟家族初代和神龙联手封印的上古魔物，八头八尾。封印期间，每隔数年便会吞噬一个龙吟家族成员的灵魂！其封印一旦解除，便会将无尽灾难引向世间！可怕的是，大蛇的意志永不灭！"]],
            日月战武神:["male","超上古系",2,["日月无天","辉煌双生","迷心之炎","恐惧之华","超上古系","奥拉亚比"],["des:日月同辉，万物归一，噬月武神和苍炎战神最强合体，日月战武神凌空出世！"]],
            日月战武神·完全体:["male","超上古完全体",3,["天地炀凐·月","天地炀凐·日","日月无天","辉煌双生","奥拉亚比","完全体","超上古系"],["des:为了心中守护奥拉星的信念，也为了与同伴的羁绊！日月战武神体内的日月之力得到了升华，实现了完全体进化！"]],
            黑翼·天煞:["male","超数码系",3,["神迹血脉加","飞梭战意","翼·极速体能","超离子风暴","奥拉亚比","超数码系"],["des:获得神迹力量的天煞，融合了鞭术和箭术的力量，变得更加强大！黑翼·天怒发现了黑翼·天煞默默地掌握了新武器用法，友谊的小船说翻就翻！"]],
            暗翼女神:["female","超暗系",4,["暗翼聚能","圈之怨念","生死轮回","奥拉亚比","超暗系"],["des:小时候的小黑翼调皮好动，到处惹祸，可没少受到长辈们教育。这个时候，觉得委屈的小黑翼会用尾巴在地上画圈圈……有人说这就是“画个圈圈诅咒你”的由来。"]],
            龙吟守:["male","超龙系",2,["惊天一矢","龙吟无心","龙游天地","超龙系","奥拉亚比"],["des:奥拉星龙吟守作为宗主，它肩负一族兴荣。作为兄长，它惟愿妹妹平安。只是从未想过，这两个身份肩负的责任竟然会有相斥的一天。但它愿意搏一把，搏一个能温柔对待真的世界！"]],
            龙吟守·完全体:["male","超龙完全体",2,["惊天一矢","龙吟无心","龙游天地","龙吟破","超龙系","完全体","奥拉亚比"],["des:奥拉星龙吟守作为宗主，它肩负一族兴荣。作为兄长，它惟愿妹妹平安。只是从未想过，这两个身份肩负的责任竟然会有相斥的一天。但它愿意搏一把，搏一个能温柔对待真的世界！"]],
            八歧龙吟守·完全体:["male","超龙暗完全体",2,["惊天一矢","龙吟无心","龙游天地","龙吟破","须佐之殇","血罪契约","灵·陨","天丛云","天蛇罚","奥拉亚比","完全体","超龙系","超暗系"],["forbidai","des:该亚比无法获得。"]],
            龙吟真:["female","超龙系",3,["龙啸九天","真实的梦境","厄运相随","奥拉亚比","超龙系"],["des:真自小在哥哥的保护下不谙世事，但也懂得哥哥的愁，于是常常给哥哥做蛋包饭。自小灵魂被大蛇逐渐吞噬，徘徊在生死边缘，却依然热爱生活，乐观向上！"]],
            晶莹蓝:["female","超光系",3,["万虹凝","区域封灭","超光系","奥拉亚比"],["des:奥比岛的套装同人"]],
            屁颠小偶:["male","超水系",3,["无影整蛊","捣蛋幽灵","奥拉亚比","超水系"],["des:小屁颠一不小心就从冥界来到世间，虽然是冥界的亚比但是却非常胆小怕生，一害怕就瑟瑟发抖，走起路来屁颠屁颠的。从第一眼见到无忧就黏上啦，非常喜欢无忧。"]],
            黑翼·星皇:["male","超光系",4,["翼·繁星天皇","万丈星河","北斗群星","奥拉亚比","超光系","神迹血脉加"],["des:奥拉星黑翼·星皇能看穿星宿运行的轨迹，继而预知很多事情。获得神迹力量之后更是大大增强了纵星的力量！"]],
            传奇帝伊:["male","超光传奇",3,["光之子加","龙耀咆哮","传奇之光","疾袭","奥拉亚比","超光系"],["des:太阳的奥秘深不可测，为我们带来划时代的传奇力量！是的，又是伊乐，被选为了首只传奇亚比！"]],
            黄金传奇天伊:["male","超光传奇",4,["光之子加","龙耀咆哮","传奇之光","疾袭","奥拉亚比","超光系"],["des:传奇圣天伊也想酷炫一把，加入了“唯一纪念版”阵营！！土豪…哦，不，是黄金传奇圣天伊，更强大更酷炫！"]],
            传奇神龙:["male","超龙传奇",3,["酒轮灭加","神龙息","狂风绝怒","醉浮生","奥拉亚比","超龙系"],["des:无酒不欢，放荡不羁爱自由！曾与龙吟家族初代联手封印八岐大蛇！初代离世后，神龙幻化成龙吟家族初代模样，大隐于市。数百年来，与龙吟家族后人共同镇守八岐大蛇封印！"]],
            传奇阿波罗:["male","超圣灵传奇",2,["清算","蔑视山河","炎啸","太阳神加","奥拉亚比","超圣灵系"],["des:作为太阳神的阿波罗背负着太阳的强大力量，传奇后的它依旧如太阳般照耀世间！"]],
            传奇zeta:["male","超龙传奇",3,["时空锁加","空间扭曲","穿梭","时空撕裂","奥拉亚比","超龙系"],["des:奥拉星传奇Zeta技能表提供种族值、图鉴、性格学习力推荐，下面小编带你详细了解奥拉星传奇Zeta技能，赶紧和小伙伴来围观吧！"]],
            兵神韩信:["male","超王传奇",4,["兵魂加","兵神英魂击","银光双闪","不胜无归","超王系","奥拉亚比"],["des:“用兵如神，战无不胜，国士无双，兵神韩信。”这可是流传在世间的传说！传奇武将降临，你是否愿意随它出征！？"]],
            镇星女神:["female","超土传奇",4,["锁魂墓","土灵加","超土系","奥拉亚比"],["des:奥拉星小土星有颗超级好奇的心，眼睛时常闪烁着好奇的光芒！口头禅是：咦咦咦~~~(有长长的尾音！！)"]],
            奶爸赵云:["male","超光系",3,["急速奔袭","强效救心","奥拉亚比","超光系"],["des:奥拉星奶爸赵云号称天下第一奶爸，哄睡喂奶换尿片样样精通，练就了一身奶爸好本领。"]],
            寒灵·完全体:["female","超水完全体",3,["冰凌裂天碎","逆水","奥拉亚比","完全体","超水系"],["des:经历了种种后，寒灵知道了自身的秘密，不愿再做温室里的花朵，希望用自己的力量保护重要的人。完美驾驭了逆水寒的力量，在冰雪中美丽地绽放！"]],
            传奇哈迪斯:["male","超暗传奇",3,["轮回印记加","冥灵转移","超越天堂","夜幕传说","奥拉亚比","超暗系"],["des:传奇力量开启，冥王终于越过冥府之门踏足世间，强大的力量震慑世人！"]],
            雪无冰姬:["female","超水传奇",3,["冰切","冰灵传奇加","冰棺锁","千雪千针","奥拉亚比","超水系"],["des:经历过人生的大起大落，雪无冰姬身心俱疲回到了自己的家乡，临危受命扛起了雪无家族的重担，在抚养寒灵长大的过程中，再度尝到了温暖。"]],
            超源·完全体:["male","超龙完全体",3,["禅","源龙神光咒","魂源龙吟","源灵吸收","完全体","超龙系","奥拉亚比"],["des:拥有万物之源力量的超源开启了完全体力量，强大的力量守护着万物，让万物沐浴着它的光辉。"]],
            传奇冰雪女皇:["female","超水传奇",3,["无尽之镜","雪佑","雪灵圣甲加","传奇聚灵破","奥拉亚比","超水系"],["des:冰雪女皇开启传奇进化，传奇的力量，更加美丽“冻”人啦！"]],
            雪无寒灵:["female","超水传奇",3,["缓灵术","寒灵瞬杀","逆水寒加","冰魄摄魂","奥拉亚比","超水系"],["des:经历了种种后，寒灵知道了自身的秘密，不愿再做温室里的花朵，希望用自己的力量保护重要的人。完美驾驭了逆水寒的力量，在冰雪中美丽地绽放！"]],
            传奇阴:["male","超暗传奇",4,["天道阳护","八卦极阴咒","暗斩","阴加","奥拉亚比","超暗系"],["des:回到阴阳山的小阴，沉迷“睡觉”不可自拔。某一日，竟在睡梦中传奇进化了，自此这件事成为了阴阳山的不解之谜。"]],
            传奇阳:["male","超光传奇",4,["阳加","光轮","天道阳守","八卦纯阳术","奥拉亚比","超光系",],["des:热血小阳看到睡梦中的小阴竟然传奇进化了，自然不甘落后，纵使万箭穿心，也无所畏惧，势要与小阴共同成长！"]],
            传奇米奥:["male","超木传奇",4,["mi","复苏","林踪迷魂诀","森罗之魂加","超木系","奥拉亚比"],["des:开启传奇力量的米奥，坚硬的盾，锋利的爪，所向披靡！"]],
            阴阳合体:["male","超圣灵系",6,["阴阳归墟","临·极","奥拉亚比","超圣灵系"],["des:开启传奇进化的阴和阳，再度合体化身传奇天道无极，维护世间平衡！"]],
            传奇波鲁:["male","超火传奇",4,["焚天","戮火净魂刃","灵焰之魂加","燃烧之心","奥拉亚比","超火系"],["des:曾经陪伴我们的三主宠开启了传奇的力量，波鲁带着最炙热的火焰传奇归来！"]],
            传奇莎莎:["female","超水传奇",3,["纯净之心","湮没","深洋超魂咒","灵涛之魂加","奥拉亚比","超水系"],["des:奥拉星传奇莎莎技能表提供种族值、图鉴、性格学习力推荐，下面小编带你详细了解奥拉星传奇莎莎技能，赶紧和小伙伴来围观吧！"]],
            传奇天道无极:["male","超圣灵传奇",3,["十方归一","四象陨道","阴阳无双破","两仪平衡加","超圣灵系","奥拉亚比",],["des:开启传奇进化的阴和阳，再度合体化身传奇天道无极，维护世间平衡！"]],
            梅卡:["female","超水系",4,["精灵王之水","超水系","奥拉亚比"],["des:梅卡传奇进化，开启强大的力量！继续陪伴在拉贝尔身边，成为强力的伙伴。"]],
            传奇圣冕麒麟:["male","超王传奇",4,["圣冕瞬杀","万王之荣耀","王界震慑加","天麟裁决","奥拉亚比","超王系"],["des:圣冕麒麟开启传奇进化，万王之首降临！吾王的荣耀由你守护！"]],
        },
        translate:{
            天吟降龙:"天吟降龙",
            鬼墨无虑:"鬼墨无虑",
            后羿·完全体:"后羿",
            奥拉·后羿:"后羿",
            白无冴:"白无冴",
            森罗可兰·完全体:"森罗可兰",
            鬼墨无忧·完全体:"鬼墨无忧",
            鬼墨无忧:"鬼墨无忧",
            千机伞:"千机伞",
            森罗可兰:"森罗可兰",
            阿修罗·完全体:"阿修罗",
            阿修罗:"阿修罗",
            神迹冰罗皇:"神迹冰罗皇",
            神迹冰罗皇·完全体:"神迹冰罗皇",
            冥夜君狼王·完全体:"冥夜君狼王",
            冥夜君狼王:"冥夜君狼王",
            龙小猫:"龙小猫",
            龙猫武士:"龙猫武士",
            神龙·龙吟初代:"神龙",
            圣修暗凯帝:"圣修暗凯帝",
            圣修暗凯帝·完全体:"圣修暗凯帝",
            八歧大蛇·完全体:"八歧大蛇",
            日月战武神:"日月战武神",
            日月战武神·完全体:"日月战武神",
            黑翼·天煞:"黑翼·天煞",
            暗翼女神:"暗翼女神",
            龙吟守:"龙吟守",
            龙吟守·完全体:"龙吟守",
            八歧龙吟守·完全体:"八歧龙吟守",
            龙吟真:"龙吟真",
            晶莹蓝:"晶莹蓝",
            屁颠小偶:"屁颠小偶",
            黑翼·星皇:"黑翼·星皇",
            传奇帝伊:"天伊",
            黄金传奇天伊:"黄金天伊",
            传奇神龙:"神龙",
            传奇阿波罗:"传奇阿波罗",
            传奇zeta:"zeta",
            兵神韩信:"兵神韩信",
            镇星女神:"镇星女神",
            奶爸赵云:"奶爸赵云",
            寒灵·完全体:"寒灵",
            传奇哈迪斯:"传奇哈迪斯",
            雪无冰姬:"雪无冰姬",
            超源·完全体:"超源",
            传奇冰雪女皇:"传奇冰雪女皇",
            雪无寒灵:"雪无寒灵",
            传奇阴:"阴",
            传奇阳:"阳",
            传奇米奥:"米奥",
            阴阳合体:"阴阳合体",
            传奇波鲁:"波鲁",
            传奇莎莎:"莎莎",
            传奇天道无极:"天道无极",
            梅卡:"梅卡",
            传奇圣冕麒麟:"传奇圣冕麒麟",
        },
},'原版亚比');
if(config.BOSS){
			game.addCharacterPack({
       character:{
            黑化ZETA:["male","黑化BOSS",3,["空间爆发","时空重置","时空锁加","空间扭曲","时空撕裂","奥拉亚比","奥拉BOSS","超暗系","超龙系"],["boss","forbidai","bossallowed","des:时空错乱，ZETA形态改变"]],
			烈焰凤凰:["female","全民BOSS",8,["凤凰降世","烈焰自由羽","凤鸣九天","上古神凤"],["des:传说凤凰会浴火重生，每次重生，会变得更加美丽辉煌！在经历长久的岁月，终于在涅槃重生，开启传奇进化！"]],
        },
        translate:{
            黑化ZETA:"黑化ZETA",
            烈焰凤凰:"烈焰凤凰",            
        },
},'奥拉BOSS');       
		game.countChoose=function(clear){
            if(_status.imchoosing){
                return;
            }
            _status.imchoosing=true;
			if(game.hasPlayer(function(target){return target.hasSkill('时间撕裂_buff')})&&!_status.countDown){
                ui.timer.show();
                var num=_status.ZETACount;
                game.countDown(parseInt(num),function(){
                    // ui.click.auto();
					ui.timer.hide();
					delete _status.ZETACount;
					game.stopCountChoose();
					var evt=_status.event;
					for(var i=0;i<10;i++){
						if(evt&&evt.getParent){
							evt=evt.getParent();
						}
						if(evt.name=='phaseUse'){
							evt.skipped=true;
							break;
						}
					} 
                });
                if(!game.online&&game.me){
                    if(_status.event.getParent().skillHidden){
                        for(var i=0;i<game.players.length;i++){
                            game.players[i].showTimer();
                        }
                        game.me._hide_all_timer=true;
                    }
                    else if(!_status.event._global_waiting){
                        game.me.showTimer();
                    }
                }
            }
            if(_status.connectMode&&!_status.countDown){
                ui.timer.show();
                var num;
                if(_status.connectMode){
                    num=lib.configOL.choose_timeout;
                }
                else{
                    num=get.config('choose_timeout');
                }
                game.countDown(parseInt(num),function(){
                    ui.click.auto();
                    ui.timer.hide();
                });
                if(!game.online&&game.me){
                    if(_status.event.getParent().skillHidden){
                        for(var i=0;i<game.players.length;i++){
                            game.players[i].showTimer();
                        }
                        game.me._hide_all_timer=true;
                    }
                    else if(!_status.event._global_waiting){
                        game.me.showTimer();
                    }
                }
            }
        }}}
},precontent:function (){
    
},help:{},config:{"游戏介绍":{"name":"来自奥拉星的扩展","item":{"1":" ","点击关闭":"点击关闭"}},"注":{"name":"注：选项只用于介绍，无功能","item":{"1":" ","点击关闭":"点击关闭"}},"注2":{"name":"提示：点击介绍","item":{"1":" ","点击关闭":"点击关闭"}},"能力等级介绍":{"name":"能力等级介绍","item":{"1":" ","2":"能力等级仅对奥拉亚比有效","攻击等级":"<li>攻击等级影响伤害加成<li>攻击等级上限为6级，下限为-6级（造成伤害后进行限制）<li>攻击一级=20%伤害加成","防御等级":"<li>防御等级影响减伤加成<li>防御等级上限为6级，下限为-6级（受到伤害后进行限制）<li>防御一级=15%减伤加成","速度等级":"<li>速度等级影响可进行的回合数<li>速度等级上限为6级，下限为-6级（回合末进行限制）<li>速度一级=2%额外进行一个回合","暴击等级":"<li>暴击等级影响暴击率<li>暴击等级上限为6级，下限为-6级（造成伤害后进行限制）<li>暴击一级=10%点暴击率","闪避等级":"<li>闪避等级影响闪避率<li>闪避等级上限为6级，下限为-6级（受到伤害前进行限制）<li>闪避一级=4%闪避率","取消":"取消"}},"超原系属性介绍":{"name":"超原系属性介绍","item":{"1":" ","原系":"原系","超格斗系":"<li>格斗系克制冰系，土系，黑暗系和机械系<li>格斗系对飞行系，神秘系圣灵系和超系弱效<li>格斗系对数码系无效","飞行系":"<li>飞行系克制格斗系和草系<li>飞行系对机械系，电系，土系和超系弱效","爬行系":"<li>爬行系克制电系，火系，土系，神兵系和机械系<li>爬行系对草系和超系弱效<li>爬行系对飞行系无效","土系":"<li>土系克制冰系，飞行系和火系<li>土系对机械系，爬行系，格斗系，王系和超系弱效","数码系":"<li>数码系克制圣灵系，王系，数码系和神秘系<li>数码系对机械系，黑暗系，光明系和超系弱效","机械系":"<li>机械系克制圣灵系，王系，数码系和神秘系<li>机械系对机械系，黑暗系，光明系和超系弱效","火系":"<li>火系克制冰系，圣灵系，机械系和草系<li>火系对土系，上古系，光明系，水系，王系和超系弱效","水系":"<li>水系克制土系，爬行系和火系<li>水系对草系，上古系，王系和超系弱效","草系":"<li>草系克制光明系，土系，爬行系和水系<li>草系对机械系，火系，飞行系，上古系，王系和超系弱效","电系":"<li>电系克制王系，水系和飞行系<li>电系对草系，电系，光明系，上古系和超系弱效'+'<li>电系对爬行系无效","神秘系":"<li>神秘系克制格斗系和龙系<li>神秘系对机械系，神秘系和超系弱效'+'<li>神秘系对黑暗系无效","冰系":"<li>冰系克制飞行系，上古系，爬行系和草系<li>冰系对水系，机械系，火系和超系弱效","上古系":"<li>上古系克制上古系<li>上古系对机械系和超系弱效","黑暗系":"<li>黑暗系克制神兵系，数码系和神秘系<li>黑暗系对机械系，格斗系，黑暗系，光明系和超系弱效","光明系":"<li>光明系克制黑暗系，数码系和神秘系<li>光明系对机械系，格斗系，黑暗系，光明系和超系弱效","龙系":"<li>龙系克制数码系和光明系<li>龙系对神秘系，神兵系和超系弱效","圣灵系":"<li>圣灵系克制数码系和光明系<li>圣灵系对神秘系，神兵系和超系弱效","神兵系":"<li>神兵系克制龙系，格斗系和火系<li>神兵系对爬行系和超系弱效","王系":"<li>王系克制上古系和神兵系<li>王系对光明系，数码系和超系弱效","超系":"超系","超火系":"<li>超火系克制超数码系，超木系，超龙系和原系<li>超火系对超土系，超水系和超上古系弱效","超水系":"<li>超水系克制超土系，超火系，超暗系和原系<li>超水系对超木系，超上古系，超电系和超圣灵系弱效","超木系":"<li>超木系克制超水系，超电系，超光系和原系<li>超木系对超数码系，超火系和超上古系弱效","超上古系":"<li>超上古系克制超王系和原系<li>超上古系对超圣灵系，超数码系和完全体弱效","超龙系":"<li>超龙系克制超土系，超数码系，超光系和原系<li>超龙系对超暗系弱效","超电系":"<li>超电系克制完全体，超王系，超水系和原系<li>超电系对超木系弱效","超光系":"<li>超光系克制超暗系，超电系，超数码系和原系<li>超光系对超龙系弱效","超暗系":"<li>超暗系克制超电系，超土系，超龙系和原系<li>超暗系对超光系弱效","超数码系":"<li>超数码系克制完全体，超木系，超上古系和原系<li>超数码系对超火系和超圣灵系弱效","超圣灵系":"<li>超圣灵系克制超电系，超上古系和原系<li>超圣灵系对超土系，超王系和完全体弱效","超王系":"<li>超王系克制超圣灵系，超火系，超木系和原系<li>超王系对超上古系，超电系和完全体弱效","完全体":"<li>完全体克制超王系，超上古系，超圣灵系和原系<li>完全体对超数码系，超电系，超土系和完全体弱效","取消":"取消"}},"神迹血脉介绍":{"name":"神迹介绍","item":{"1":" ","神迹血脉1":"神迹血脉","神迹血脉":"<li>神迹血脉影响亚比攻防能力<li>首次受到伤害时开启神迹血脉<li>每一阶提供15%的伤害和8%的防御数值","神迹血脉·完全体1":"神迹血脉·完全体","神迹血脉·完全体":"<li>神迹血脉·完全体影响亚比攻防能力<li>更加纯洁的神迹血脉，无需首次受到伤害开启。开始游戏时直接开启神迹血脉<li>神迹血脉·完全体提供100%的伤害和50%的防御数值","取消":"取消"}},"亚比介绍":{"name":"亚比介绍","item":{"1":" ","奥拉亚比":"传奇亚比","奥拉亚比介绍":"<li>奥拉亚比由于超越时空，对非奥拉亚比造成的伤害时，对方回复0.5点体力；受到的非奥拉亚比伤害时，受到一点固伤","传奇亚比":"传奇亚比","传奇亚比介绍":"<li>传奇亚比对非传奇亚比造成的伤害+50%<li>每次受到伤害前都有概率化解对方攻击<li>每回合末获得一魂，传奇大招需要足够的魂来释放","超系亚比":"超系亚比","超系亚比介绍":"<li>超系亚比是2015年出的一个新系别<li>超系克制原系，可以对双原系亚比造成3倍伤害","完全体":"完全体","完全体介绍":"<li>超系亚比中的一个分支<li>完全体亚比比原亚比多出一个完全体技能","BOSS克星":"BOSS克星","BOSS克星介绍":"<li>超系亚比中的一个分支<li>BOSS克星技在挑战模式下生效","奥拉BOSS":"奥拉BOSS","奥拉BOSS介绍":"<li>奥拉BOSS在挑战模式下最大体力提升两点","取消":"取消"}},"功能区":{"name":"功能区","item":{"1":" ","点击关闭":"点击关闭"}},"yuan":{"name":"原版亚比","init":true},"BOSS":{"name":"奥拉BOSS","init":true}},package:{
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
            "攻击等级":{
                marktext:"攻",
                intro:{
                    content:function (storage){
return '<li>攻击等级影响伤害加成'+'<li>攻击等级上限为6级，下限为-6级（造成伤害后进行限制）'+'<li>攻击一级=20%伤害加成'+'<li>当前攻击等级为：'+storage+'级'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.攻击等级=0;
}
},
                mark:true,
                group:["攻击等级_加成","攻击等级_限制1","攻击等级_限制2"],
                subSkill:{
                    "加成":{
                        trigger:{
                            source:"damageBegin",
                        },
                        forced:true,
                        content:function (){
trigger.num+=player.storage.攻击等级*0.2;              
},
                    },
                    "限制1":{
                        trigger:{
                            source:"damageEnd",
                        },
                        filter:function (event,player){
return player.storage.攻击等级>6;
},
                        forced:true,
                        content:function (){
player.storage.攻击等级=6;
player.syncStorage('攻击等级');
game.log(player,'攻击等级被限制了');                 
},
                    },
                    "限制2":{
                        trigger:{
                            source:"damageEnd",
                        },
                        filter:function (event,player){
return player.storage.攻击等级<-6;
},
                        forced:true,
                        content:function (){
player.storage.攻击等级=-6;
player.syncStorage('攻击等级');
game.log(player,'攻击等级被限制了');                 
},
                    },
                },
            },
            "速度等级":{
                marktext:"速",
                intro:{
                    content:function (storage){
return '<li>速度等级影响可进行的回合数'+'<li>速度等级上限为6级，下限为-6级（回合末进行限制）'+'<li>速度一级=2%额外进行一个回合'+'<li>当前速度等级为：'+storage+'级'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.速度等级=0;
}
},
                mark:true,
                group:["速度等级_加成","速度等级_限制1","速度等级_限制2"],
                subSkill:{
                    "加成":{
                        trigger:{
                            player:"phaseAfter",
                        },
                        forced:true,
                        filter:function (event,player){
if(Math.random()>player.storage.速度等级*0.02) return false;
return true;
},
                        content:function (){
player.phase();
game.log(player,'的速度快，额外进行一个回合');                 
},
                    },
                    "限制1":{
                        trigger:{
                            player:"phaseAfter",
                        },
                        filter:function (event,player){
return player.storage.速度等级>6;
},
                        forced:true,
                        content:function (){
player.storage.速度等级=5;
player.syncStorage('速度等级');
game.log(player,'速度等级被限制了');                 
},
                    },
                    "限制2":{
                        trigger:{
                            player:"phaseAfter",
                        },
                        filter:function (event,player){
return player.storage.速度等级<-6;
},
                        forced:true,
                        content:function (){
player.storage.速度等级=-6;
player.syncStorage('速度等级');
game.log(player,'速度等级被限制了');                 
},
                    },
                },
                ai:{
                    threaten:1.8,
                },
            },
            "闪避等级":{
                marktext:"闪",
                intro:{
                    content:function (storage){
return '<li>闪避等级影响闪避率'+'<li>闪避等级上限为6级，下限为-6级（受到伤害前进行限制）'+'<li>闪避一级=5%闪避率'+'<li>当前闪避等级为：'+storage+'级'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.闪避等级=0;
}
},
                mark:true,
                group:["闪避等级_加成","闪避等级_限制1","闪避等级_限制2"],
                subSkill:{
                    "加成":{
                        trigger:{
                            player:"damageBegin",
                        },
                        filter:function (event,player){
if(Math.random()>player.storage.闪避等级*0.04) return false;
return true;
},
                        forced:true,
                        content:function (){
trigger.untrigger();
trigger.finish();
game.log(player,'闪避了对方的攻击');                
},
                    },
                    "限制1":{
                        trigger:{
                            player:"damageBegin",
                        },
                        filter:function (event,player){
return player.storage.闪避等级>6;
},
                        forced:true,
                        content:function (){
player.storage.闪避等级=6;
player.syncStorage('闪避等级');
game.log(player,'闪避等级被限制了');                 
},
                    },
                    "限制2":{
                        trigger:{
                            player:"damageBegin",
                        },
                        filter:function (event,player){
return player.storage.闪避等级<-6;
},
                        forced:true,
                        content:function (){
player.storage.闪避等级=-6;
player.syncStorage('闪避等级');
game.log(player,'闪避等级被限制了');                 
},
                    },
                },
            },
            "暴击等级":{
                marktext:"暴",
                intro:{
                    content:function (storage){
return '<li>暴击等级影响暴击率'+'<li>暴击等级上限为6级，下限为-6级（造成伤害后进行限制）'+'<li>暴击一级=10%点暴击率'+'<li>当前暴击等级为：'+storage+'级'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.暴击等级=0;
}
},
                mark:true,
                group:["暴击等级_加成","暴击等级_限制1","暴击等级_限制2"],
                subSkill:{
                    "加成":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,player){
if(Math.random()>player.storage.暴击等级*0.1) return false;
return true;
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
game.log(player,'暴击了');                 
},
                    },
                    "限制1":{
                        trigger:{
                            source:"damageEnd",
                        },
                        filter:function (event,player){
return player.storage.暴击等级>6;
},
                        forced:true,
                        content:function (){
player.storage.暴击等级=6;
player.syncStorage('暴击等级');
game.log(player,'暴击等级被限制了');                 
},
                    },
                    "限制2":{
                        trigger:{
                            source:"damageEnd",
                        },
                        filter:function (event,player){
return player.storage.暴击等级<-6;
},
                        forced:true,
                        content:function (){
player.storage.暴击等级=-6;
player.syncStorage('暴击等级');
game.log(player,'暴击等级被限制了');                 
},
                    },
                },
            },
            "防御等级":{
                marktext:"防",
                intro:{
                    content:function (storage){
return '<li>防御等级影响减伤加成'+'<li>防御等级上限为6级，下限为-6级（受到伤害后进行限制）'+'<li>防御一级=15%减伤加成'+'<li>当前防御等级为：'+storage+'级'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.防御等级=0;
}
},
                mark:true,
                group:["防御等级_加成","防御等级_限制1","防御等级_限制2"],
                subSkill:{
                    "加成":{
                        trigger:{
                            player:"damageBegin",
                        },
                        forced:true,
                        content:function (){
trigger.num-=player.storage.防御等级*0.15;               
},
                    },
                    "限制1":{
                        trigger:{
                            player:"damageBegin",
                        },
                        filter:function (event,player){
return player.storage.防御等级>6;
},
                        forced:true,
                        content:function (){
player.storage.防御等级=6;
player.syncStorage('防御等级');
game.log(player,'防御等级被限制了');                 
},
                    },
                    "限制2":{
                        trigger:{
                            player:"damageBegin",
                        },
                        filter:function (event,player){
return player.storage.防御等级<-6;
},
                        forced:true,
                        content:function (){
player.storage.防御等级=-6;
player.syncStorage('防御等级');
game.log(player,'防御等级被限制了');                 
},
                    },
                },
            },
            "龙翔秘术":{
                enable:"phaseUse",
                content:function (){
"step 0"
player.storage.攻击等级+=1;
player.syncStorage('攻击等级');
player.storage.防御等级+=1;
player.syncStorage('防御等级');
player.storage.闪避等级+=1;
player.syncStorage('闪避等级');
player.storage.暴击等级+=1;
player.syncStorage('暴击等级');
player.storage.速度等级+=1;
player.syncStorage('速度等级');
game.log(player,'提升全属性一级并开启龙翔奥义');
player.say('准备残血反杀！')        
"step 1"
player.addSkill('龙翔秘术·奥义');
"step 2"
player.removeSkill('龙翔秘术');
},
                ai:{
                    order:1,
                    result:{
                        player:function (player){
                return  player.hp-0;
            },
                    },
                    threaten:1.5,
                },
            },
            "龙翔秘术·奥义":{
                group:["龙翔秘术·奥义_1","龙翔秘术·奥义_2","龙翔秘术·奥义_3"],
                subSkill:{
                    "1":{
                        marktext:"龙",
                        intro:{
                            content:function (storage){
return '当前龙翔秘术奥义印记为：'+storage
},
                        },
                        init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.龙翔秘术·奥义=0;
}
},
                        mark:true,
                        trigger:{
                            source:"damageBegin",
                        },
                        forced:true,
                        content:function (){
trigger.num+=player.storage.龙翔秘术·奥义*0.25;
},
                    },
                    "2":{
                        trigger:{
                            player:"damageBegin",
                        },
                        forced:true,
                        content:function (){
trigger.num-=player.storage.龙翔秘术·奥义*0.08;
},
                    },
                    "3":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.hp<=player.maxHp*0.4;
},
                        content:function (){
player.storage.龙翔秘术·奥义+=1;
player.syncStorage('龙翔秘术·奥义');
                player.maxHp++
},
                    },
                },
            },
            "宗卷龙体":{
                enable:"phaseUse",
                usable:1,
                title:function (){
return '<div class="text center" style="color:#800080">'+'称号:灭世的程式';
},
                content:function (){
"step 0"
player.storage.攻击等级-=1;
player.syncStorage('攻击等级');
player.storage.防御等级-=1;
player.syncStorage('防御等级');
player.storage.闪避等级-=1;
player.syncStorage('闪避等级');
player.storage.暴击等级-=1;
player.syncStorage('暴击等级');
player.storage.速度等级-=1;
player.syncStorage('速度等级');
game.log(player,'全属性下降一级');         
"step 1"
player.recover((player.maxHp-player.hp)*0.5);
},
                ai:{
                    order:1,
                    result:{
                        player:function (player){
                return  player.storage.攻击等级-2;
            },
                    },
                    threaten:1.5,
                },
            },
            "天命龙翔":{
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event,player){
return player.hp<player.maxHp;
},
                forced:true,
                content:function (){
player.storage.攻击等级+=1;
player.syncStorage('攻击等级');
player.storage.防御等级+=1;
player.syncStorage('防御等级');
player.storage.闪避等级+=1;
player.syncStorage('闪避等级');
player.storage.暴击等级+=1;
player.syncStorage('暴击等级');
player.storage.速度等级+=1;
player.syncStorage('速度等级');
game.log(player,'提升全属性一级');         
},
            },
            "千傀奇术":{
            },
            "金刚傀儡":{
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                filter:function (event,player){
if(Math.random()>1/2) return false;
return true;
},
                content:function (){
trigger.num-=trigger.num*0.6;
    player.storage.防御等级+=1;
player.syncStorage('防御等级');
    player.recover(0.5);
game.log(player,'提升防御一级并免疫了60%伤害');         
},
            },
            "天愈傀儡":{
                enable:"phaseUse",
                usable:1,
                content:function (){
"step 0"
player.recover(1);
"step 1"
player.storage.防御等级-=1;
player.syncStorage('防御等级');
game.log(player,'防御下降一级');         
"step 2"
player.recover(0.5);
        
},
                ai:{
                    order:1,
                    result:{
                        player:function (player){
                return  player.storage.防御等级-0;
            },
                    },
                    threaten:1.5,
                },
            },
            "阎狱鬼刀":{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                content:function (){
    "step 1"
trigger.player.addSkill('防御等级');
     "step 2"
     trigger.player.storage.防御等级-=1;
trigger.player.syncStorage('防御等级');
game.log(trigger.player,'防御下降一级');         
},
            },
            "致命射击":{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                content:function (){
"step 1"
if(Math.random()>0.3){
trigger.num+=trigger.num};
game.log(player,'触发了吞天');          
"step 2"
if(Math.random()>0.4){
player.storage.攻击等级+=1;
player.syncStorage('攻击等级');};
game.log(player,'触发了拉弓');          
"step 3"
if(Math.random()>0.5){
trigger.player.addSkill('烧伤');
trigger.player.storage.烧伤+=5;
trigger.player.syncStorage('烧伤');};
game.log(player,'触发了落日');          
},
            },
            "巨龙噬":{
                enable:"phaseUse",
                usable:1,
                filterTarget:function (target){
        return true;
    },
                content:function (){
target.removeSkill('防御等级');
        target.removeSkill('攻击等级');
        target.removeSkill('闪避等级');
        target.removeSkill('暴击等级');
        target.removeSkill('速度等级');
        game.log(target,'全属性被吞噬了');  
},
                ai:{
                    order:1,
                    result:{
                        player:function (player){
                return  player.hp-0;
                 },
                        target:function (player,target){
                var eff=ai.get.damageEffect(target,player);
                if(eff>=0) return 1+eff;
                var value=0,i;
                var cards=player.get('h');
                for(i=0;i<cards.length;i++){
                    value+=ai.get.value(cards[i]);
                }
                value/=player.num('h');
                if(target.hp==1) return Math.min(0,value-7);
                return Math.min(0,value-5);
            },
                    },
                },
            },
            "迅捷连射":{
                group:["迅捷连射_1111","迅捷连射_2222"],
                subSkill:{
                    "1111":{
                        trigger:{
                            source:"damageEnd",
                        },
                        forced:true,
                        filter:function (event,player){
if(Math.random()>0.4) return false;
return true;
},
                        content:function (){
        trigger.player.loseHp(1);
                game.log(player,'额外攻击一次');  
},
                    },
                    "2222":{
                        trigger:{
                            source:"damageEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.hp>=player.maxHp;
},
                        content:function (){
                if(Math.random()>0.4){
 trigger.player.loseHp(1);
                game.log(player,'额外攻击一次');};
    },
                    },
                },
            },
            "惊华神移":{
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                content:function (){
"step 1"
player.addSkill('惊华神移·2');
"step 2"
player.removeSkill('惊华神移');
},
            },
            "神勾玉的祝福":{
                enable:"phaseUse",
                content:function (){
"step 0"
 player.turnOver();
"step 1"
player.addSkill('神勾玉祝福');
game.log(player,'获得了神勾玉的祝福');          
"step 2"
player.removeSkill('神勾玉的祝福');
},
                ai:{
                    order:1,
                    result:{
                        player:function (player){
                return  player.storage.hp-0;
            },
                    },
                    threaten:1.5,
                },
            },
            "神勾玉祝福":{
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                filter:function (event,player){
return player.hp<player.maxHp;
},
                content:function (){
player.recover((player.maxHp-player.hp)*0.35);
player.storage.攻击等级+=1;
player.syncStorage('攻击等级');
    player.storage.暴击等级+=1;
player.syncStorage('暴击等级');
    player.storage.闪避等级+=1;
player.syncStorage('闪避等级');
game.log(player,'提升攻击，暴击和闪避一级');         
},
            },
            "惊华神移·降·4":{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                content:function (){
trigger.num-=1;
},
            },
            "惊华神移·增·4":{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                content:function (){
trigger.num+=1;
},
            },
            "惊华神移·10":{
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                content:function (){
"step 1"
player.addSkill('惊华神移·增·4');
"step 2"
trigger.player.addSkill('惊华神移·降·4');
"step 3"
player.removeSkill('惊华神移·增·3');
"step 4"
trigger.player.removeSkill('惊华神移·降·3');
"step 5"
player.removeSkill('惊华神移·10');
},
            },
            "惊华神移·9":{
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                content:function (){
"step 1"
player.addSkill('惊华神移·10');
"step 2"
player.removeSkill('惊华神移·9');
},
            },
            "惊华神移·降·3":{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                content:function (){
trigger.num-=0.8;
},
            },
            "惊华神移·增·3":{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                content:function (){
trigger.num+=0.8;
},
            },
            "惊华神移·8":{
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                content:function (){
"step 1"
player.addSkill('惊华神移·增·3');
"step 2"
player.addSkill('惊华神移·9');
"step 3"
trigger.player.addSkill('惊华神移·降·3');
"step 4"
player.removeSkill('惊华神移·增·2');
"step 5"
trigger.player.removeSkill('惊华神移·降·2');
"step 6"
player.removeSkill('惊华神移·8');
},
            },
            "惊华神移·7":{
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                content:function (){
"step 1"
player.addSkill('惊华神移·8');
"step 2"
player.removeSkill('惊华神移·7');
},
            },
            "惊华神移·降·2":{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                content:function (){
trigger.num-=0.6;
},
            },
            "惊华神移·增·2":{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                content:function (){
trigger.num+=0.6;
},
            },
            "惊华神移·6":{
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                content:function (){
"step 1"
player.addSkill('惊华神移·增·2');
"step 2"
player.addSkill('惊华神移·7');
"step 3"
trigger.player.addSkill('惊华神移·降·2');
"step 4"
player.removeSkill('惊华神移·增·1');
"step 5"
trigger.player.removeSkill('惊华神移·降·1');
"step 6"
player.removeSkill('惊华神移·6');
},
            },
            "惊华神移·5":{
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                content:function (){
"step 1"
player.addSkill('惊华神移·6');
"step 2"
player.removeSkill('惊华神移·5');
},
            },
            "惊华神移·降·1":{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                content:function (){
trigger.num-=0.4;
},
            },
            "惊华神移·增·1":{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                content:function (){
trigger.num+=0.4;
},
            },
            "惊华神移·4":{
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                content:function (){
"step 1"
player.addSkill('惊华神移·增·1');
"step 2"
player.addSkill('惊华神移·5');
"step 3"
trigger.player.addSkill('惊华神移·降·1');
"step 4"
player.removeSkill('惊华神移·增');
"step 5"
trigger.player.removeSkill('惊华神移·降');
"step 6"
player.removeSkill('惊华神移·4');
},
            },
            "惊华神移·3":{
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                content:function (){
"step 1"
player.addSkill('惊华神移·4');
"step 2"
player.removeSkill('惊华神移·3');
},
            },
            "惊华神移·降":{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                content:function (){
trigger.num-=0.2;
},
            },
            "惊华神移·增":{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                content:function (){
trigger.num+=0.2;
},
            },
            "惊华神移·2":{
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                content:function (){
"step 1"
player.addSkill('惊华神移·增');
"step 2"
player.addSkill('惊华神移·3');
"step 3"
trigger.player.addSkill('惊华神移·降');
"step 4"
player.removeSkill('惊华神移·2');
},
            },
            "灵风甦醒":{
                enable:"phaseUse",
                usable:1,
                filterTarget:function (target){
        return true;
    },
                content:function (){
"step 1"
player.maxHp++;
        player.recover(1);
target.loseMaxHp(1);       
"step 2"
        target.removeSkill('攻击等级');
        game.log(target,'攻击等级被吞噬了'); 
        "step 3"
        player.removeSkill('灵风甦醒');
},
                ai:{
                    order:1,
                    result:{
                        player:function (player){
                return  player.hp-0;
            },
                    },
                    threaten:1.5,
                },
            },
            "春沐之心":{
                enable:"phaseUse",
                usable:1,
                content:function (){
"step 0"
player.storage.防御等级+=2;
player.syncStorage('防御等级');
game.log(player,'提升防御两级');         
"step 1"
player.turnOver();
},
                ai:{
                    order:1,
                    result:{
                        player:function (player){
                return  player.hp-1;
            },
                    },
                    threaten:1.5,
                },
            },
            "万物感召":{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                content:function (){
    "step 1"
trigger.player.addSkill('感知印记');
    "step 2"
trigger.player.storage.感知印记+=1;
trigger.player.syncStorage('感知印记');    
},
            },
            "感知印记":{
                marktext:"感",
                intro:{
                    content:function (storage){
return '<li>回合末当印记叠加至2层时消耗2层获得三回合的诅咒状态'+'<li>当前感知印记为：'+storage
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.感知印记=0;
}
},
                mark:true,
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                filter:function (event,player){
return player.storage.感知印记>=2;
},
                content:function (){
player.addSkill('诅咒');
trigger.player.storage.诅咒+=3;
trigger.player.syncStorage('诅咒');        
player.storage.感知印记-=2;
player.syncStorage('感知印记');
game.log(player,'被诅咒三个回合');         
},
            },
            "奇门千机":{
                skillAnimation:"epic",
                animationColor:"thunder",
                enable:"phaseUse",
                usable:1,
                unique:true,
                filter:function (event,player){
if(game.players.length+game.dead.length<=7) return true;
return false;
},
                content:function (){
var list=[];
for(var i in lib.character){
if(lib.character[i].mode&&lib.character[i].mode.contains(lib.config.mode)==false) continue;
if(i!='list') list.push(i);
}
var players=game.players.concat(game.dead);
for(var j=0;j<players.length;j++){
list.remove([players[j].name]);
}
if(list.length){
var player2=game.addPlayer();
if(get.config('double_character')||lib.config.mode=='guozhan'){
var list2=list.randomGets(2);
player2.init(list2[0],list2[1]);
}
else{
player2.init(list.randomGet())
}
player2.init('千机伞')
player2.identity=player.identity;
if(player2.identity=='zhu') player2.identity='zhong';
player2.setIdentity('神兵');
player2.group=player.group;
player2.identityShown=true;
player2.draw(4);
if(player2.name){
var skills0=lib.character[player2.name][3];
}
if(player2.name1){
var skills1=lib.character[player2.name1][3];
}
if(player2.name2){
var skills2=lib.character[player2.name2][3];
}
if(skills0&&skills0.length){
for(var i=0;i<skills0.length;i++){
player.addSkill(skills0[i]);
}
}
if(skills1&&skills1.length){
for(var i=0;i<skills1.length;i++){
player.addSkill(skills1[i]);
}
}
if(skills2&&skills2.length){
for(var i=0;i<skills2.length;i++){
player.addSkill(skills2[i]); 
}
}
if(player.maxHp>0) player.loseMaxHp(1);
}
},
                ai:{
                    order:1,
                    result:{
                        player:function (player){
                return  player.maxHp-1;
            },
                    },
                    threaten:1.5,
                },
            },
            "鬼墨七星阵":{
                group:["鬼墨七星阵_抗性","鬼墨七星阵_回血"],
                subSkill:{
                    "抗性":{
                        trigger:{
                            player:"damageBegin",
                        },
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.55;
game.log(player,'免疫了55%伤害');                 
},
                    },
                    "回血":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
                player.addSkill('攻击等级');
player.recover((1+player.storage.攻击等级*0.1)*0.5);
},
                    },
                },
            },
            "离经千机变":{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                content:function (){
        "step 1"
    player.changeHujia();
        player.update();
        game.log(player,'获得护甲'); 
"step 2"        
player.storage.攻击等级+=1;
player.syncStorage('攻击等级');
game.log(player,'提升攻击一级');         
},
            },
            "千机":{
                trigger:{
                    player:"damageEnd",
                },
                filter:function (event,player){
        return get.itemtype(event.cards)=='cards'&&get.position(event.cards[0])=='d';
    },
                content:function (){
        player.gain(trigger.cards);
        player.$gain2(trigger.cards);
    },
                ai:{
                    maixie:true,
                    effect:{
                        target:function (card,player){
                if(player.hasSkill('jueqing')) return [1,-1];
                if(get.tag(card,'damage')) return [1,0.5];
            },
                    },
                },
            },
            "森罗·奈落":{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                content:function (){
    "step 1"
player.recover(trigger.num*2);
    "step 2"
    trigger.player.addSkill('奈落印记');
        trigger.player.addSkill('攻击等级');
        player.addSkill('奈落印记·己');
        player.addSkill('攻击等级');
        "step 3"
trigger.player.storage.奈落印记+=1;
trigger.player.syncStorage('奈落印记');
player.storage.奈落印记·己+=1;
player.syncStorage('奈落印记·己');       
},
            },
            "奈落印记":{
                marktext:"奈",
                intro:{
                    content:function (storage){
return '<li>每有2个奈落印记则于回合末降低攻击等级2级'+'<li>当前奈落印记为：'+storage
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.奈落印记=0;
}
},
                mark:true,
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                filter:function (event,player){
return player.storage.奈落印记>=2;
},
                content:function (){
        "step 1"
player.storage.奈落印记-=2;
player.syncStorage('奈落印记');   
        "step 2"
player.storage.攻击等级-=2;
player.syncStorage('攻击等级'); 
        game.log(player,'攻击下降两级'); 
},
            },
            "奈落印记·己":{
                marktext:"奈",
                intro:{
                    content:function (storage){
return '<li>每有2个奈落印记·己则于回合末提升攻击等级2级'+'<li>当前奈落印记·己为：'+storage
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.奈落印记·己=0;
}
},
                mark:true,
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                filter:function (event,player){
return player.storage.奈落印记·己>=2;
},
                content:function (){
        "step 1"
player.storage.奈落印记·己-=2;
player.syncStorage('奈落印记·己');   
        "step 2"
player.storage.攻击等级+=2;
player.syncStorage('攻击等级'); 
        game.log(player,'提升攻击两级'); 
},
            },
            "格斗系":{
                marktext:"格",
                intro:{
                    content:function (storage){
return '<li>格斗系克制冰系，土系，黑暗系和机械系'+'<li>格斗系对飞行系，神秘系圣灵系和超系弱效'+'<li>格斗系对数码系无效'+'<li>当前亚比的属性为格斗系'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.格斗系=0;
}
},
                mark:true,
                group:["格斗系_机械系","格斗系_冰系","格斗系_黑暗系","格斗系_土系","格斗系_数码系","格斗系_飞行系","格斗系_圣灵系","格斗系_神秘系","格斗系_超火系","格斗系_超水系","格斗系_超木系","格斗系_超上古系","格斗系_超龙系","格斗系_超电系","格斗系_超土系","格斗系_超光系","格斗系_超暗系","格斗系_超数码系","格斗系_超圣灵系","格斗系_超王系","格斗系_完全体"],
                subSkill:{
                    "机械系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('机械系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "冰系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('冰系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "黑暗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('黑暗系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "土系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('土系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "数码系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('数码系');
},
                        forced:true,
                        content:function (){
trigger.num-=999999;
},
                    },
                    "飞行系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('飞行系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "圣灵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('圣灵系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "神秘系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超神秘系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超火系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超火系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超水系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超水系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超木系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超木系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超上古系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超上古系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超龙系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超龙系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超电系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超电系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超土系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超土系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超光系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超光系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超暗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超暗系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超数码系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超数码系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超圣灵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超圣灵系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超王系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超王系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "完全体":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('完全体');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                },
            },
            "飞行系":{
                marktext:"飞",
                intro:{
                    content:function (storage){
return '<li>飞行系克制格斗系和草系'+'<li>飞行系对机械系，电系，土系和超系弱效'+'<li>当前亚比的属性为飞行系'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.飞行系=0;
}
},
                mark:true,
                group:["飞行系_格斗系","飞行系_草系","飞行系_机械系","飞行系_电系","飞行系_土系","飞行系_超火系","飞行系_超水系","飞行系_超木系","飞行系_超上古系","飞行系_超龙系","飞行系_超电系","飞行系_超土系","飞行系_超光系","飞行系_超暗系","飞行系_超数码系","飞行系_超圣灵系","飞行系_超王系","飞行系_完全体"],
                subSkill:{
                    "格斗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('格斗系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "草系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('草系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "机械系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('机械系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "电系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('电系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "土系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('土系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超火系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超火系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超水系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超水系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超木系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超木系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超上古系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超上古系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超龙系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超龙系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超电系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超电系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超土系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超土系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超光系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超光系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超暗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超暗系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超数码系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超数码系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超圣灵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超圣灵系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超王系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超王系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "完全体":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('完全体');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                },
            },
            "爬行系":{
                marktext:"爬",
                intro:{
                    content:function (storage){
return '<li>爬行系克制电系，火系，土系，神兵系和机械系'+'<li>爬行系对草系和超系弱效'+'<li>爬行系对飞行系无效'+'<li>当前亚比的属性为爬行系'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.爬行系=0;
}
},
                mark:true,
                group:["爬行系_机械系","爬行系_土系","爬行系_神兵系","爬行系_电系","爬行系_火系","爬行系_飞行系","爬行系_草系","爬行系_超火系","爬行系_超水系","爬行系_超木系","爬行系_超上古系","爬行系_超龙系","爬行系_超电系","爬行系_超土系","爬行系_超光系","爬行系_超暗系","爬行系_超数码系","爬行系_超圣灵系","爬行系_超王系","爬行系_完全体"],
                subSkill:{
                    "机械系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('机械系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "土":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('土系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "神兵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('神兵系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "电系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('电系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "火系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('火系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "飞行系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('飞行系');
},
                        forced:true,
                        content:function (){
trigger.num-=999999;
},
                    },
                    "草系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('草系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超火系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超火系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超水系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超水系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超木系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超木系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超上古系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超上古系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超龙系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超龙系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超电系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超电系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超土系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超土系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超光系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超光系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超暗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超暗系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超数码系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超数码系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超圣灵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超圣灵系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超王系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超王系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "完全体":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('完全体');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                },
            },
            "土系":{
                marktext:"土",
                intro:{
                    content:function (storage){
return '<li>土系克制冰系，飞行系和火系'+'<li>土系对机械系，爬行系，格斗系，王系和超系弱效'+'<li>当前亚比的属性为土系'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.土系=0;
}
},
                mark:true,
                group:["土系_冰系","土系_飞行系","土系_火系","土系_机械系","土系_爬行系","土系_格斗系","土系_王系","土系_超火系","土系_超水系","土系_超木系","土系_超上古系","土系_超龙系","土系_超电系","土系_超土系","土系_超光系","土系_超暗系","土系_超数码系","土系_超圣灵系","土系_超王系","土系_完全体"],
                subSkill:{
                    "冰系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('冰系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "飞行系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('飞行系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "火系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('火系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "机械系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('机械系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "爬行系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('爬行系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "格斗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('格斗系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "王系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('王系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超火系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超火系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超水系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超水系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超木系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超木系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超上古系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超上古系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超龙系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超龙系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超电系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超电系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超土系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超土系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超光系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超光系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超暗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超暗系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超数码系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超数码系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超圣灵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超圣灵系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超王系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超王系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "完全体":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('完全体');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                },
            },
            "数码系":{
                marktext:"数",
                intro:{
                    content:function (storage){
return '<li>数码系克制圣灵系，王系，数码系和神秘系'+'<li>数码系对机械系，黑暗系，光明系和超系弱效'+'<li>当前亚比的属性为数码系'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.数码系=0;
}
},
                mark:true,
                group:["数码系_圣灵系","数码系_王系","数码系_数码系","数码系_神秘系","数码系_机械系","数码系_黑暗系","数码系_光明系","数码系_超火系","数码系_超水系","数码系_超木系","数码系_超上古系","数码系_超龙系","数码系_超电系","数码系_超土系","数码系_超光系","数码系_超暗系","数码系_超数码系","数码系_超圣灵系","数码系_超王系","数码系_完全体"],
                subSkill:{
                    "圣灵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('圣灵系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "王系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('王系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "数码系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('数码系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "神秘系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('神秘系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "机械系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('机械系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "黑暗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('黑暗系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "光明系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('光明系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超火系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超火系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超水系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超水系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超木系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超木系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超上古系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超上古系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超龙系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超龙系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超电系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超电系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超土系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超土系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超光系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超光系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超暗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超暗系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超数码系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超数码系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超圣灵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超圣灵系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超王系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超王系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "完全体":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('完全体');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                },
            },
            "机械系":{
                marktext:"械",
                intro:{
                    content:function (storage){
return '<li>机械系克制圣灵系，王系，数码系和神秘系'+'<li>机械系对机械系，黑暗系，光明系和超系弱效'+'<li>当前亚比的属性为机械系'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.机械系=0;
}
},
                mark:true,
                group:["机械系_冰系","机械系_土系","机械系_机械系","机械系_电系","机械系_圣灵系","机械系_水系","机械系_火系","机械系_龙系","机械系_王系","机械系_超火系","机械系_超水系","机械系_超木系","机械系_超上古系","机械系_超龙系","机械系_超电系","机械系_超土系","机械系_超光系","机械系_超暗系","机械系_超数码系","机械系_超圣灵系","机械系_超王系","机械系_完全体"],
                subSkill:{
                    "冰系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('冰系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "土系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('土系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "机械系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('机械系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "电系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('电系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "圣灵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('圣灵系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "水系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('水系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "火系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('火系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "龙系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('龙系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "王系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('王系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超火系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超火系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超水系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超水系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超木系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超木系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超上古系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超上古系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超龙系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超龙系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超电系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超电系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超土系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超土系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超光系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超光系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超暗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超暗系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超数码系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超数码系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超圣灵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超圣灵系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超王系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超王系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "完全体":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('完全体');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                },
            },
            "火系":{
                marktext:"火",
                intro:{
                    content:function (storage){
return '<li>火系克制冰系，圣灵系，机械系和草系'+'<li>火系对土系，上古系，光明系，水系，王系和超系弱效'+'<li>当前亚比的属性为火系'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.火系=0;
}
},
                mark:true,
                group:["火系_冰系","火系_圣灵系","火系_机械系","火系_草系","火系_土系","火系_上古系","火系_光明系","火系_水系","火系_王系","火系_超火系","火系_超水系","火系_超木系","火系_超上古系","火系_超龙系","火系_超电系","火系_超土系","火系_超光系","火系_超暗系","火系_超数码系","火系_超圣灵系","火系_超王系","火系_完全体"],
                subSkill:{
                    "冰系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('冰系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "圣灵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('圣灵系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "机械系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('机械系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "草系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('草系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "土系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('土系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "上古系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('上古系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "光明系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('光明系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "水系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('水系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "王系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('王系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超火系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超火系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超水系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超水系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超木系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超木系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超上古系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超上古系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超龙系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超龙系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超电系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超电系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超土系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超土系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超光系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超光系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超暗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超暗系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超数码系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超数码系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超圣灵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超圣灵系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超王系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超王系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "完全体":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('完全体');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                },
            },
            "水系":{
                marktext:"水",
                intro:{
                    content:function (storage){
return '<li>水系克制土系，爬行系和火系'+'<li>水系对草系，上古系，王系和超系弱效'+'<li>当前亚比的属性为水系'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.水系=0;
}
},
                mark:true,
                group:["水系_土系","水系_爬行系","水系_火系","水系_草系","水系_上古系","水系_王系","水系_超火系","水系_超水系","水系_超木系","水系_超上古系","水系_超龙系","水系_超电系","水系_超土系","水系_超光系","水系_超暗系","水系_超数码系","水系_超圣灵系","水系_超王系","水系_完全体"],
                subSkill:{
                    "土系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('土系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "爬行系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('爬行系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "火系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('火系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "草系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('草系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "上古系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('上古系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "王系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('王系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超火系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超火系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超水系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超水系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超木系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超木系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超上古系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超上古系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超龙系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超龙系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超电系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超电系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超土系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超土系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超光系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超光系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超暗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超暗系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超数码系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超数码系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超圣灵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超圣灵系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超王系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超王系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "完全体":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('完全体');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                },
            },
            "草系":{
                marktext:"草",
                intro:{
                    content:function (storage){
return '<li>草系克制光明系，土系，爬行系和水系'+'<li>草系对机械系，火系，飞行系，上古系，王系和超系弱效'+'<li>当前亚比的属性为草系'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.草系=0;
}
},
                mark:true,
                group:["草系_光明系","草系_土系","草系_爬行系","草系_水系","草系_机械系","草系_火系","草系_飞行系","草系_上古系","草系_王系","草系_超火系","草系_超水系","草系_超木系","草系_超上古系","草系_超龙系","草系_超电系","草系_超土系","草系_超光系","草系_超暗系","草系_超数码系","草系_超圣灵系","草系_超王系","草系_完全体"],
                subSkill:{
                    "光明系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('光明系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "土系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('土系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "爬行系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('爬行系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "水系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('水系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "机械系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('机械系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "火系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('火系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "飞行系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('飞行系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "上古系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('上古系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "王系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('王系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超火系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超火系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超水系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超水系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超木系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超木系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超上古系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超上古系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超龙系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超龙系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超电系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超电系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超土系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超土系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超光系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超光系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超暗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超暗系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超数码系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超数码系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超圣灵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超圣灵系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超王系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超王系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "完全体":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('完全体');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                },
            },
            "电系":{
                marktext:"电",
                intro:{
                    content:function (storage){
return '<li>电系克制王系，水系和飞行系'+'<li>电系对草系，电系，光明系，上古系和超系弱效'+'<li>电系对爬行系无效'+'<li>当前亚比的属性为电系'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.电系=0;
}
},
                mark:true,
                group:["电系_王系","电系_水系","电系_飞行系","电系_爬行系","电系_草系","电系_电系","电系_光明系","电系_上古系","电系_超火系","电系_超水系","电系_超木系","电系_超上古系","电系_超龙系","电系_超电系","电系_超土系","电系_超光系","电系_超暗系","电系_超数码系","电系_超圣灵系","电系_超王系","电系_完全体"],
                subSkill:{
                    "王系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('王系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "水系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('水系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "飞行系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('飞行系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "爬行系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('爬行系');
},
                        forced:true,
                        content:function (){
trigger.num-=99999;
},
                    },
                    "草系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('草系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "电系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('电系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "光明系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('光明系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "上古系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('上古系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超火系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超火系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超水系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超水系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超木系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超木系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超上古系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超上古系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超龙系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超龙系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超电系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超电系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超土系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超土系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超光系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超光系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超暗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超暗系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超数码系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超数码系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超圣灵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超圣灵系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超王系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超王系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "完全体":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('完全体');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                },
            },
            "神秘系":{
                marktext:"神",
                intro:{
                    content:function (storage){
return '<li>神秘系克制格斗系和龙系'+'<li>神秘系对机械系，神秘系和超系弱效'+'<li>神秘系对黑暗系无效'+'<li>当前亚比的属性为神秘系'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.神秘系=0;
}
},
                mark:true,
                group:["神秘系_格斗系","神秘系_龙系","神秘系_黑暗系","神秘系_机械系","神秘系_神秘系","神秘系_超火系","神秘系_超水系","神秘系_超木系","神秘系_超上古系","神秘系_超龙系","神秘系_超电系","神秘系_超土系","神秘系_超光系","神秘系_超暗系","神秘系_超数码系","神秘系_超圣灵系","神秘系_超王系","神秘系_完全体"],
                subSkill:{
                    "格斗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('格斗系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "龙系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('龙系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "黑暗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('黑暗系');
},
                        forced:true,
                        content:function (){
trigger.num-=99999;
},
                    },
                    "机械系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('机械系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "神秘系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('神秘系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超火系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超火系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超水系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超水系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超木系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超木系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超上古系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超上古系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超龙系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超龙系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超电系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超电系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超土系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超土系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超光系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超光系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超暗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超暗系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超数码系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超数码系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超圣灵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超圣灵系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超王系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超王系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "完全体":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('完全体');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                },
            },
            "冰系":{
                marktext:"冰",
                intro:{
                    content:function (storage){
return '<li>冰系克制飞行系，上古系，爬行系和草系'+'<li>冰系对水系，机械系，火系和超系弱效'+'<li>当前亚比的属性为冰系'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.冰系=0;
}
},
                mark:true,
                group:["冰系_飞行系","冰系_上古系","冰系_爬行系","冰系_草系","冰系_水系","冰系_机械系","冰系_火系","冰系_超火系","冰系_超水系","冰系_超木系","冰系_超上古系","冰系_超龙系","冰系_超电系","冰系_超土系","冰系_超光系","冰系_超暗系","冰系_超数码系","冰系_超圣灵系","冰系_超王系","冰系_完全体"],
                subSkill:{
                    "飞行系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('飞行系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "上古系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('上古系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "爬行系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('爬行系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "草系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('草系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "水系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('水系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "机械系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('机械系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "火系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('火系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超火系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超火系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超水系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超水系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超木系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超木系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超上古系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超上古系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超龙系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超龙系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超电系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超电系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超土系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超土系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超光系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超光系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超暗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超暗系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超数码系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超数码系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超圣灵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超圣灵系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超王系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超王系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "完全体":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('完全体');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                },
            },
            "上古系":{
                marktext:"古",
                intro:{
                    content:function (storage){
return '<li>上古系克制上古系'+'<li>上古系对机械系和超系弱效'+'<li>当前亚比的属性为上古系'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.上古系=0;
}
},
                mark:true,
                group:["上古系_上古系","上古系_机械系","上古系_超火系","上古系_超水系","上古系_超木系","上古系_超上古系","上古系_超龙系","上古系_超电系","上古系_超土系","上古系_超光系","上古系_超暗系","上古系_超数码系","上古系_超圣灵系","上古系_超王系","上古系_完全体"],
                subSkill:{
                    "上古系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('上古系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "机械系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('机械系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超火系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超火系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超水系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超水系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超木系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超木系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超上古系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超上古系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超龙系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超龙系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超电系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超电系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超土系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超土系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超光系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超光系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超暗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超暗系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超数码系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超数码系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超圣灵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超圣灵系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超王系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超王系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "完全体":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('完全体');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                },
            },
            "黑暗系":{
                marktext:"暗",
                intro:{
                    content:function (storage){
return '<li>黑暗系克制神兵系，数码系和神秘系'+'<li>黑暗系对机械系，格斗系，黑暗系，光明系和超系弱效'+'<li>当前亚比的属性为黑暗系'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.黑暗系=0;
}
},
                mark:true,
                group:["黑暗系_神兵系","黑暗系_数码系","黑暗系_神秘系","黑暗系_机械系","黑暗系_格斗系","黑暗系_黑暗系","黑暗系_光明系","黑暗系_超火系","黑暗系_超水系","黑暗系_超木系","黑暗系_超上古系","黑暗系_超龙系","黑暗系_超电系","黑暗系_超土系","黑暗系_超光系","黑暗系_超暗系","黑暗系_超数码系","黑暗系_超圣灵系","黑暗系_超王系","黑暗系_完全体"],
                subSkill:{
                    "神兵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('神兵系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "数码系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('数码系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "神秘系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('神秘系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "机械系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('机械系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "格斗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('格斗系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "黑暗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('黑暗系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "光明系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('光明系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超火系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超火系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超水系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超水系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超木系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超木系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超上古系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超上古系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超龙系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超龙系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超电系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超电系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超土系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超土系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超光系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超光系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超暗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超暗系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超数码系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超数码系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超圣灵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超圣灵系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超王系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超王系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "完全体":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('完全体');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                },
            },
            "光明系":{
                marktext:"光",
                intro:{
                    content:function (storage){
return '<li>光明系克制黑暗系，数码系和神秘系'+'<li>光明系对机械系，格斗系，黑暗系，光明系和超系弱效'+'<li>当前亚比的属性为光明系'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.光明系=0;
}
},
                mark:true,
                group:["光明系_神兵系","光明系_数码系","光明系_神秘系","光明系_机械系","光明系_冰系","光明系_土系","光明系_草系","光明系_圣灵系","光明系_超火系","光明系_超水系","光明系_超木系","光明系_超上古系","光明系_超龙系","光明系_超电系","光明系_超土系","光明系_超光系","光明系_超暗系","光明系_超数码系","光明系_超圣灵系","光明系_超王系","光明系_完全体"],
                subSkill:{
                    "黑暗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('黑暗系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "数码系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('数码系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "神秘系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('神秘系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "机械系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('机械系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "冰系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('冰系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "土系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('土系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "草系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('草系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "圣灵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('圣灵系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超火系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超火系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超水系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超水系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超木系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超木系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超上古系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超上古系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超龙系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超龙系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超电系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超电系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超土系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超土系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超光系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超光系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超暗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超暗系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超数码系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超数码系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超圣灵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超圣灵系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超王系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超王系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "完全体":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('完全体');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                },
            },
            "龙系":{
                marktext:"龙",
                intro:{
                    content:function (storage){
return '<li>龙系克制数码系和光明系'+'<li>龙系对神秘系，神兵系和超系弱效'+'<li>当前亚比的属性为龙系'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.龙系=0;
}
},
                mark:true,
                group:["龙系_数码系","龙系_光明系","龙系_神秘系","龙系_神兵系","龙系_超火系","龙系_超水系","龙系_超木系","龙系_超上古系","龙系_超龙系","龙系_超电系","龙系_超土系","龙系_超光系","龙系_超暗系","龙系_超数码系","龙系_超圣灵系","龙系_超王系","龙系_完全体"],
                subSkill:{
                    "数码系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('数码系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "光明系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('光明系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "神秘系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('神秘系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "神兵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('神兵系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超火系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超火系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超水系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超水系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超木系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超木系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超上古系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超上古系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超龙系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超龙系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超电系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超电系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超土系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超土系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超光系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超光系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超暗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超暗系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超数码系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超数码系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超圣灵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超圣灵系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超王系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超王系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "完全体":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('完全体');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                },
            },
            "圣灵系":{
                marktext:"圣",
                intro:{
                    content:function (storage){
return '<li>圣灵系克制数码系和光明系'+'<li>圣灵系对神秘系，神兵系和超系弱效'+'<li>当前亚比的属性为圣灵系'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.圣灵系=0;
}
},
                mark:true,
                group:["圣灵系_数码系","圣灵系_光明系","圣灵系_神秘系","圣灵系_神兵系","圣灵系_超火系","圣灵系_超水系","圣灵系_超木系","圣灵系_超上古系","圣灵系_超龙系","圣灵系_超电系","圣灵系_超土系","圣灵系_超光系","圣灵系_超暗系","圣灵系_超数码系","圣灵系_超圣灵系","圣灵系_超王系","圣灵系_完全体"],
                subSkill:{
                    "数码系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('数码系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "光明系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('光明系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "神秘系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('神秘系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "神兵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('神兵系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超火系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超火系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超水系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超水系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超木系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超木系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超上古系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超上古系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超龙系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超龙系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超电系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超电系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超土系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超土系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超光系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超光系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超暗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超暗系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超数码系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超数码系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超圣灵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超圣灵系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超王系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超王系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "完全体":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('完全体');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                },
            },
            "神兵系":{
                marktext:"兵",
                intro:{
                    content:function (storage){
return '<li>神兵系克制龙系，格斗系和火系'+'<li>神兵系对爬行系和超系弱效'+'<li>当前亚比的属性为神兵系'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.神兵系=0;
}
},
                mark:true,
                group:["神兵系_龙系","神兵系_格斗系","神兵系_火系","神兵系_爬行系","神兵系_超火系","神兵系_超水系","神兵系_超木系","神兵系_超上古系","神兵系_超龙系","神兵系_超电系","神兵系_超土系","神兵系_超光系","神兵系_超暗系","神兵系_超数码系","神兵系_超圣灵系","神兵系_超王系","神兵系_完全体"],
                subSkill:{
                    "龙系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('龙系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "格斗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('格斗系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "火系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('火系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "爬行系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('爬行系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超火系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超火系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超水系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超水系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超木系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超木系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超上古系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超上古系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超龙系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超龙系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超电系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超电系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超土系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超土系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超光系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超光系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超暗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超暗系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超数码系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超数码系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超圣灵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超圣灵系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超王系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超王系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "完全体":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('完全体');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                },
            },
            "王系":{
                marktext:"王",
                intro:{
                    content:function (storage){
return '<li>王系克制上古系和神兵系'+'<li>王系对光明系，数码系和超系弱效'+'<li>当前亚比的属性为王系'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.王系=0;
}
},
                mark:true,
                group:["王系_上古系","王系_神兵系","王系_光明系","王系_数码系","王系_超火系","王系_超水系","王系_超木系","王系_超上古系","王系_超龙系","王系_超电系","王系_超土系","王系_超光系","王系_超暗系","王系_超数码系","王系_超圣灵系","王系_超王系","王系_完全体"],
                subSkill:{
                    "上古系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('上古系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "神兵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('神兵系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "光明系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('光明系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "数码系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('数码系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超火系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超火系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超水系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超水系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超木系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超木系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超上古系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超上古系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超龙系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超龙系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超电系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超电系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超土系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超土系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超光系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超光系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超暗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超暗系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超数码系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超数码系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超圣灵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超圣灵系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超王系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超王系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "完全体":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('完全体');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                },
            },
            "超火系":{
                marktext:"火",
                intro:{
                    content:function (storage){
return '<li>超火系克制超数码系，超木系，超龙系和原系'+'<li>超火系对超土系，超水系和超上古系弱效'+'<li>当前亚比的属性为超火系'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.超火系=0;
}
},
                mark:true,
                group:["超火系_超数码系","超火系_超木系","超火系_超龙系","超火系_超土系","超火系_超水系","超火系_超上古系","超火系_格斗系","超火系_飞行系","超火系_爬行系","超火系_土系","超火系_数码系","超火系_机械系","超火系_火系","超火系_水系","超火系_草系","超火系_电系","超火系_神秘系","超火系_冰系","超火系_上古系","超火系_黑暗系","超火系_光明系","超火系_龙系","超火系_圣灵系","超火系_神兵系","超火系_王系"],
                subSkill:{
                    "超数码系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超数码系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "超木系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超木系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "超龙系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超龙系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "超土系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超土系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超水系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超水系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超上古系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超上古系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "格斗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('格斗系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "飞行系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('飞行系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "爬行系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('爬行系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "土系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('土系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "数码系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('数码系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "机械系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('机械系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "火系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('火系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "水系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('水系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "草系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('草系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "电系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('电系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "神秘系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('神秘系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "冰系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('冰系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "上古系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('上古系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "黑暗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('黑暗系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "光明系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('光明系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "龙系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('龙系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "圣灵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('圣灵系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "神兵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('神兵系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "王系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('王系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                },
            },
            "超水系":{
                marktext:"水",
                intro:{
                    content:function (storage){
return '<li>超水系克制超土系，超火系，超暗系和原系'+'<li>超水系对超木系，超上古系，超电系和超圣灵系弱效'+'<li>当前亚比的属性为超水系'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.超水系=0;
}
},
                mark:true,
                group:["超水系_超土系","超水系_超火系","超水系_超暗系","超水系_超木系","超水系_超上古系","超水系_超圣灵系","超水系_超电系","超水系_格斗系","超水系_飞行系","超水系_爬行系","超水系_土系","超水系_数码系","超水系_机械系","超水系_火系","超水系_水系","超水系_草系","超水系_电系","超水系_神秘系","超水系_冰系","超水系_上古系","超水系_黑暗系","超水系_光明系","超水系_龙系","超水系_圣灵系","超水系_神兵系","超水系_王系"],
                subSkill:{
                    "超土系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超土系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "超火系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超火系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "超暗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超暗系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "超木系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超木系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超上古系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超上古系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超圣灵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超圣灵系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超电系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超电系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "格斗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('格斗系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "飞行系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('飞行系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "爬行系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('爬行系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "土系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('土系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "数码系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('数码系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "机械系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('机械系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "火系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('火系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "水系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('水系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "草系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('草系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "电系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('电系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "神秘系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('神秘系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "冰系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('冰系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "上古系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('上古系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "黑暗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('黑暗系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "光明系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('光明系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "龙系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('龙系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "圣灵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('圣灵系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "神兵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('神兵系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "王系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('王系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                },
            },
            "超木系":{
                marktext:"木",
                intro:{
                    content:function (storage){
return '<li>超木系克制超水系，超电系，超光系和原系'+'<li>超木系对超数码系，超火系和超上古系弱效'+'<li>当前亚比的属性为超木系'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.超木系=0;
}
},
                mark:true,
                group:["超木系_超水系","超木系_超电系","超木系_超光系","超木系_超数码系","超木系_超火系","超木系_超上古系","超木系_格斗系","超木系_飞行系","超木系_爬行系","超木系_土系","超木系_数码系","超木系_机械系","超木系_火系","超木系_水系","超木系_草系","超木系_电系","超木系_神秘系","超木系_冰系","超木系_上古系","超木系_黑暗系","超木系_光明系","超木系_龙系","超木系_圣灵系","超木系_神兵系","超木系_王系"],
                subSkill:{
                    "超水系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超水系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "超电系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超电系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "超光系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超光系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "超数码系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超数码系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超火系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超火系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超上古系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超上古系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "格斗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('格斗系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "飞行系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('飞行系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "爬行系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('爬行系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "土系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('土系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "数码系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('数码系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "机械系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('机械系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "火系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('火系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "水系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('水系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "草系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('草系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "电系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('电系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "神秘系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('神秘系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "冰系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('冰系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "上古系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('上古系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "黑暗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('黑暗系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "光明系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('光明系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "龙系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('龙系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "圣灵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('圣灵系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "神兵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('神兵系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "王系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('王系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                },
            },
            "超上古系":{
                marktext:"古",
                intro:{
                    content:function (storage){
return '<li>超上古系克制超王系和原系'+'<li>超上古系对超圣灵系，超数码系和完全体弱效'+'<li>当前亚比的属性为超上古系'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.超上古系=0;
}
},
                mark:true,
                group:["超上古系_超王系","超上古系_超圣灵系","超上古系_超数码系","超上古系_完全体","超上古系_格斗系","超上古系_飞行系","超上古系_爬行系","超上古系_土系","超上古系_数码系","超上古系_机械系","超上古系_火系","超上古系_水系","超上古系_草系","超上古系_电系","超上古系_神秘系","超上古系_冰系","超上古系_上古系","超上古系_黑暗系","超上古系_光明系","超上古系_龙系","超上古系_圣灵系","超上古系_神兵系","超上古系_王系"],
                subSkill:{
                    "超王系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超王系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "超圣灵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超圣灵系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超数码系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超数码系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "完全体":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('完全体');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "格斗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('格斗系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "飞行系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('飞行系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "爬行系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('爬行系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "土系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('土系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "数码系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('数码系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "机械系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('机械系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "火系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('火系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "水系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('水系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "草系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('草系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "电系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('电系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "神秘系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('神秘系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "冰系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('冰系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "上古系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('上古系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "黑暗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('黑暗系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "光明系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('光明系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "龙系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('龙系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "圣灵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('圣灵系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "神兵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('神兵系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "王系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('王系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                },
            },
            "超龙系":{
                marktext:"龙",
                intro:{
                    content:function (storage){
return '<li>超龙系克制超土系，超数码系，超光系和原系'+'<li>超龙系对超暗系弱效'+'<li>当前亚比的属性为超龙系'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.超龙系=0;
}
},
                mark:true,
                group:["超龙系_超土系","超龙系_超数码系","超龙系_超光系","超龙系_超暗系","超龙系_格斗系","超龙系_飞行系","超龙系_爬行系","超龙系_土系","超龙系_数码系","超龙系_机械系","超龙系_火系","超龙系_水系","超龙系_草系","超龙系_电系","超龙系_神秘系","超龙系_冰系","超龙系_上古系","超龙系_黑暗系","超龙系_光明系","超龙系_龙系","超龙系_圣灵系","超龙系_神兵系","超龙系_王系"],
                subSkill:{
                    "超土系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超土系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "超数码系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超数码系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "超光系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超光系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "超暗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超暗系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "格斗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('格斗系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "飞行系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('飞行系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "爬行系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('爬行系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "土系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('土系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "数码系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('数码系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "机械系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('机械系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "火系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('火系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "水系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('水系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "草系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('草系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "电系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('电系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "神秘系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('神秘系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "冰系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('冰系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "上古系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('上古系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "黑暗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('黑暗系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "光明系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('光明系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "龙系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('龙系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "圣灵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('圣灵系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "神兵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('神兵系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "王系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('王系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                },
            },
            "超电系":{
                marktext:"电",
                intro:{
                    content:function (storage){
return '<li>超电系克制完全体，超王系，超水系和原系'+'<li>超电系对超木系弱效'+'<li>当前亚比的属性为超电系'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.超电系=0;
}
},
                mark:true,
                group:["超电系_完全体","超电系_超王系","超电系_超水系","超电系_超木系","超电系_格斗系","超电系_飞行系","超电系_爬行系","超电系_土系","超电系_数码系","超电系_机械系","超电系_火系","超电系_水系","超电系_草系","超电系_电系","超电系_神秘系","超电系_冰系","超电系_上古系","超电系_黑暗系","超电系_光明系","超电系_龙系","超电系_圣灵系","超电系_神兵系","超电系_王系"],
                subSkill:{
                    "完全体":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('完全体');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "超王系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超王系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "超水系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超水系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "超木系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超木系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "格斗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('格斗系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "飞行系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('飞行系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "爬行系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('爬行系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "土系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('土系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "数码系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('数码系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "机械系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('机械系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "火系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('火系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "水系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('水系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "草系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('草系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "电系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('电系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "神秘系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('神秘系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "冰系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('冰系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "上古系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('上古系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "黑暗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('黑暗系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "光明系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('光明系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "龙系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('龙系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "圣灵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('圣灵系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "神兵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('神兵系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "王系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('王系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                },
            },
            "超光系":{
                marktext:"光",
                intro:{
                    content:function (storage){
return '<li>超光系克制超暗系，超电系，超数码系和原系'+'<li>超光系对超龙系弱效'+'<li>当前亚比的属性为超光系'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.超光系=0;
}
},
                mark:true,
                group:["超光系_超暗系","超光系_超电系","超光系_超数码系","超光系_超龙系","超光系_格斗系","超光系_飞行系","超光系_爬行系","超光系_土系","超光系_数码系","超光系_机械系","超光系_火系","超光系_水系","超光系_草系","超光系_电系","超光系_神秘系","超光系_冰系","超光系_上古系","超光系_黑暗系","超光系_光明系","超光系_龙系","超光系_圣灵系","超光系_神兵系","超光系_王系"],
                subSkill:{
                    "超暗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超暗系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "超电系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超电系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "超数码系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超数码系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "超龙系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超龙系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "格斗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('格斗系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "飞行系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('飞行系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "爬行系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('爬行系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "土系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('土系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "数码系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('数码系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "机械系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('机械系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "火系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('火系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "水系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('水系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "草系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('草系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "电系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('电系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "神秘系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('神秘系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "冰系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('冰系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "上古系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('上古系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "黑暗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('黑暗系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "光明系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('光明系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "龙系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('龙系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "圣灵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('圣灵系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "神兵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('神兵系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "王系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('王系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                },
            },
            "超暗系":{
                marktext:"暗",
                intro:{
                    content:function (storage){
return '<li>超暗系克制超电系，超土系，超龙系和原系'+'<li>超暗系对超光系弱效'+'<li>当前亚比的属性为超暗系'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.超暗系=0;
}
},
                mark:true,
                group:["超暗系_超电系","超暗系_超土系","超暗系_超龙系","超暗系_超光系","超暗系_格斗系","超暗系_飞行系","超暗系_爬行系","超暗系_土系","超暗系_数码系","超暗系_机械系","超暗系_火系","超暗系_水系","超暗系_草系","超暗系_电系","超暗系_神秘系","超暗系_冰系","超暗系_上古系","超暗系_黑暗系","超暗系_光明系","超暗系_龙系","超暗系_圣灵系","超暗系_神兵系","超暗系_王系"],
                subSkill:{
                    "超电系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超电系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "超土系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超土系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "超龙系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超龙系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "超光系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超光系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "格斗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('格斗系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "飞行系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('飞行系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "爬行系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('爬行系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "土系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('土系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "数码系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('数码系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "机械系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('机械系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "火系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('火系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "水系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('水系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "草系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('草系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "电系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('电系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "神秘系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('神秘系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "冰系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('冰系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "上古系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('上古系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "黑暗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('黑暗系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "光明系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('光明系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "龙系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('龙系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "圣灵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('圣灵系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "神兵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('神兵系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "王系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('王系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                },
            },
            "超数码系":{
                marktext:"数",
                intro:{
                    content:function (storage){
return '<li>超数码系克制完全体，超木系，超上古系和原系'+'<li>超数码系对超火系和超圣灵系弱效'+'<li>当前亚比的属性为超数码系'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.超数码系=0;
}
},
                mark:true,
                group:["超数码系_完全体","超数码系_超木系","超数码系_超上古系","超数码系_超火系","超数码系_超圣灵系","超数码系_格斗系","超数码系_飞行系","超数码系_爬行系","超数码系_土系","超数码系_数码系","超数码系_机械系","超数码系_火系","超数码系_水系","超数码系_草系","超数码系_电系","超数码系_神秘系","超数码系_冰系","超数码系_上古系","超数码系_黑暗系","超数码系_光明系","超数码系_龙系","超数码系_圣灵系","超数码系_神兵系","超数码系_王系"],
                subSkill:{
                    "完全体":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('完全体');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "超木系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超木系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "超上古系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超上古系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "超火系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超火系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超圣灵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超圣灵系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "格斗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('格斗系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "飞行系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('飞行系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "爬行系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('爬行系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "土系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('土系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "数码系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('数码系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "机械系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('机械系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "火系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('火系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "水系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('水系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "草系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('草系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "电系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('电系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "神秘系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('神秘系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "冰系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('冰系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "上古系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('上古系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "黑暗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('黑暗系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "光明系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('光明系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "龙系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('龙系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "圣灵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('圣灵系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "神兵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('神兵系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "王系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('王系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                },
            },
            "超圣灵系":{
                marktext:"圣",
                intro:{
                    content:function (storage){
return '<li>超圣灵系克制超电系，超上古系和原系'+'<li>超圣灵系对超土系，超王系和完全体弱效'+'<li>当前亚比的属性为超圣灵系'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.超圣灵系=0;
}
},
                mark:true,
                group:["超圣灵系_超电系","超圣灵系_超上古系","超圣灵系_超土系","超圣灵系_超王系","超圣灵系_完全体","超圣灵系_格斗系","超圣灵系_飞行系","超圣灵系_爬行系","超圣灵系_土系","超圣灵系_数码系","超圣灵系_机械系","超圣灵系_火系","超圣灵系_水系","超圣灵系_草系","超圣灵系_电系","超圣灵系_神秘系","超圣灵系_冰系","超圣灵系_上古系","超圣灵系_黑暗系","超圣灵系_光明系","超圣灵系_龙系","超圣灵系_圣灵系","超圣灵系_神兵系","超圣灵系_王系"],
                subSkill:{
                    "超电系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超电系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "超上古系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超上古系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "超土系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超土系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超王系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超王系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "完全体":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('完全体');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "格斗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('格斗系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "飞行系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('飞行系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "爬行系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('爬行系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "土系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('土系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "数码系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('数码系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "机械系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('机械系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "火系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('火系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "水系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('水系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "草系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('草系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "电系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('电系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "神秘系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('神秘系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "冰系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('冰系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "上古系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('上古系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "黑暗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('黑暗系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "光明系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('光明系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "龙系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('龙系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "圣灵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('圣灵系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "神兵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('神兵系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "王系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('王系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                },
            },
            "超王系":{
                marktext:"王",
                intro:{
                    content:function (storage){
return '<li>超王系克制超圣灵系，超火系，超木系和原系'+'<li>超王系对超上古系，超电系和完全体弱效'+'<li>当前亚比的属性为超王系'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.超王系=0;
}
},
                mark:true,
                group:["超王系_超圣灵系","超王系_超火系","超王系_超木系","超王系_超上古系","超王系_超电系","超王系_完全体","超王系_格斗系","超王系_飞行系","超王系_爬行系","超王系_土系","超王系_数码系","超王系_机械系","超王系_火系","超王系_水系","超王系_草系","超王系_电系","超王系_神秘系","超王系_冰系","超王系_上古系","超王系_黑暗系","超王系_光明系","超王系_龙系","超王系_圣灵系","超王系_神兵系","超王系_王系"],
                subSkill:{
                    "超圣灵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超圣灵系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "超火系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超火系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "超木系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超木系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "超上古系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超上古系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超电系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超电系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "完全体":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('完全体');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "格斗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('格斗系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "飞行系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('飞行系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "爬行系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('爬行系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "土系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('土系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "数码系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('数码系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "机械系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('机械系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "火系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('火系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "水系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('水系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "草系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('草系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "电系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('电系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "神秘系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('神秘系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "冰系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('冰系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "上古系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('上古系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "黑暗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('黑暗系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "光明系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('光明系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "龙系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('龙系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "圣灵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('圣灵系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "神兵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('神兵系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "王系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('王系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                },
            },
            "完全体":{
                marktext:"完",
                intro:{
                    content:function (storage){
return '<li>完全体克制超王系，超上古系，超圣灵系和原系'+'<li>完全体对超数码系，超电系，超土系和完全体弱效'+'<li>当前亚比的属性为完全体'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.完全体=0;
}
},
                mark:true,
                group:["完全体_超王系","完全体_超上古系","完全体_超圣灵系","完全体_超数码系","完全体_超电系","完全体_超土系","完全体_完全体","完全体_格斗系","完全体_飞行系","完全体_爬行系","完全体_土系","完全体_数码系","完全体_机械系","完全体_火系","完全体_水系","完全体_草系","完全体_电系","完全体_神秘系","完全体_冰系","完全体_上古系","完全体_黑暗系","完全体_光明系","完全体_龙系","完全体_圣灵系","完全体_神兵系","完全体_王系"],
                subSkill:{
                    "超王系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超王系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "超上古系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超上古系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "超圣灵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超圣灵系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "超数码系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超数码系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超电系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超电系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超土系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超土系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "完全体":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('完全体');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "格斗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('格斗系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "飞行系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('飞行系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "爬行系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('爬行系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "土系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('土系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "数码系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('数码系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "机械系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('机械系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "火系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('火系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "水系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('水系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "草系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('草系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "电系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('电系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "神秘系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('神秘系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "冰系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('冰系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "上古系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('上古系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "黑暗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('黑暗系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "光明系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('光明系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "龙系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('龙系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "圣灵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('圣灵系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "神兵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('神兵系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "王系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('王系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                },
            },
            "神迹血脉·完全体":{
                marktext:"迹",
                intro:{
                    content:function (storage){
return '<li>神迹血脉影响亚比攻防能力'+'<li>更加纯洁的神迹血脉，无需首次受到伤害开启。开始游戏时直接开启神迹血脉'+'<li>神迹血脉·完全体提供100%的伤害和50%的防御数值'+'<li>当前神迹血脉为：'+'完全体'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.神迹血脉·完全体=0;
}
},
                mark:true,
                group:["神迹血脉·完全体_1111","神迹血脉·完全体_2222"],
                subSkill:{
                    "1111":{
                        trigger:{
                            source:"damageBegin",
                        },
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "2222":{
                        trigger:{
                            player:"damageBegin",
                        },
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                },
            },
            "地狱之手":{
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event,player){
return player.storage.狂怒<=0;
},
                forced:true,
                content:function (){
trigger.player.loseHp();
    player.recover();
        game.log(trigger.player,'被吸取了一点体力'); 
},
            },
            "狂怒":{
                marktext:"狂",
                intro:{
                    content:function (storage){
return '<li>当前狂怒印记有：'+storage+'个'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.狂怒=0;
}
},
                mark:true,
                trigger:{
                    source:"damageBegin",
                    player:"damageBegin",
                },
                filter:function (event,player){
if(Math.random()>0.3) return false;
return true;
},
                forced:true,
                content:function (){
player.storage.狂怒+=1;
player.syncStorage('狂怒');
game.log(player,'获得一个狂怒印记');         
},
            },
            "狂怒阎威":{
                group:["狂怒阎威_1111","狂怒阎威_2222"],
                subSkill:{
                    "1111":{
                        trigger:{
                            player:"damageBegin",
                        },
                        forced:true,
                        filter:function (event,player){
if(Math.random()>player.storage.狂怒*0.3) return false;
return true;
},
                        content:function (){
trigger.num-=player.storage.狂怒*0.05;
player.storage.狂怒-=1;
player.syncStorage('狂怒');                
},
                    },
                    "2222":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,player){
if(Math.random()>player.storage.狂怒*0.3) return false;
return true;
},
                        forced:true,
                        content:function (){
trigger.num+=player.storage.狂怒*0.3;
                player.storage.狂怒-=1;
player.syncStorage('狂怒');    
},
                    },
                },
            },
            "地狱之手·完全体":{
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event,player){
return player.storage.狂怒<=1;
},
                forced:true,
                content:function (){
trigger.player.loseHp();
    player.recover();
        game.log(trigger.player,'被吸取了一点体力'); 
},
            },
            "神迹血脉":{
                marktext:"迹",
                intro:{
                    content:function (storage){
return '<li>神迹血脉影响亚比攻防能力'+'<li>首次受到伤害时开启神迹血脉'+'<li>每一阶提供15%的伤害和8%的防御数值'+'<li>当前神迹血脉为：'+storage+'阶'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.神迹血脉=0;
}
},
                mark:true,
                group:["神迹血脉_1111","神迹血脉_2222","神迹血脉_3333"],
                subSkill:{
                    "1111":{
                        trigger:{
                            source:"damageBegin",
                        },
                        forced:true,
                        content:function (){
trigger.num+=player.storage.神迹血脉*0.15;
},
                    },
                    "2222":{
                        trigger:{
                            player:"damageBegin",
                        },
                        forced:true,
                        content:function (){
trigger.num-=player.storage.神迹血脉*0.08;
},
                    },
                    "3333":{
                        trigger:{
                            player:"damageBegin",
                        },
                        forced:true,
                        filter:function (event,player){
return player.storage.神迹血脉<=0;
},
                        content:function (){
                        "step 1"
player.storage.神迹血脉+=1;
player.syncStorage('神迹血脉');
                game.log(player,'开启神迹血脉'); 
                "step 2"
if(Math.random()>1/2){
player.storage.神迹血脉+=1;
player.syncStorage('神迹血脉')};
                "step 3"
if(Math.random()>1/2){
player.storage.神迹血脉+=1;
player.syncStorage('神迹血脉')};
                "step 4"
if(Math.random()>1/2){
player.storage.神迹血脉+=1;
player.syncStorage('神迹血脉')};
                "step 5"
if(Math.random()>1/2){
player.storage.神迹血脉+=1;
player.syncStorage('神迹血脉')};
},
                    },
                },
            },
            "狂怒加":{
                trigger:{
                    global:"gameStart",
                },
                forced:true,
                filter:function (){
return !_status.connectMode;
},
                content:function (){
        player.addSkill('狂怒');
},
            },
            "神迹血脉加":{
                trigger:{
                    global:"gameStart",
                },
                forced:true,
                content:function (){
        player.addSkill('神迹血脉');
},
            },
            "卡":{
                marktext:"卡",
                intro:{
                    content:function (storage){
return '当前手牌数为'+storage+'张'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.卡=0;
}
},
                mark:true,
                trigger:{
                    player:["loseEnd","gainEnd","chooseToUseEnd"],
                },
                forced:true,
                content:function (){
        player.storage.卡=player.num('h');
        player.syncStorage('卡');
    },
            },
            "龙魂封世·完全体":{
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                filter:function (event,player){
return player.hp=player.maxHp;
},
                content:function (){
        if(Math.random()>0.65){
trigger.player.turnOver()};
        game.log(trigger.player,'害怕了'); 
},
            },
            "神迹魂封":{
                enable:"phaseUse",
                usable:1,
                filterCard:true,
                selectCard:1,
                filterTarget:function (target){
        return true;
    },
                content:function (){
        target.storage.攻击等级-=1;
target.syncStorage('攻击等级');
        game.log(target,'攻击下降一级'); 
        player.recover(player.maxHp*0.2);
},
                ai:{
                    order:1,
                    result:{
                        player:function (player){
            return  player.hp-0;
             },
                        target:function (player,target){
                var eff=ai.get.damageEffect(target,player);
                if(eff>=0) return 1+eff;
                var value=0,i;
                var cards=player.get('h');
                for(i=0;i<cards.length;i++){
                    value+=ai.get.value(cards[i]);
                }
                value/=player.num('h');
                if(target.hp==1) return Math.min(0,value-7);
                return Math.min(0,value-5);
            },
                    },
                    threaten:1.5,
                },
            },
            "冰帝龙封":{
                trigger:{
                    player:"damageEnd",
                },
                forced:true,
                filter:function (event,player){
        if(Math.random()>0.5) return false;
return true;
    },
                content:function (){
            trigger.source.addSkill('冻伤')
            trigger.source.storage.冻伤+=10;
            trigger.source.syncStorage('冻伤');
        game.log(trigger.source,'被冻伤十个回合'); 
    },
            },
            "龙魂封世":{
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                filter:function (event,player){
if(Math.random()>player.storage.神迹血脉*0.1) return false;
return true;
},
                content:function (){
trigger.player.turnOver();
game.log(trigger.player,'害怕了'); 
},
            },
            "势不可挡":{
                group:["势不可挡_无视基础","势不可挡_无视加成"],
                subSkill:{
                    "无视基础":{
                        trigger:{
                            source:"damageBegin",
                        },
                        forced:true,
                        content:function (){
trigger.num+=trigger.num*0.3;
game.log(player,'无视了对方30%防御基础值'); 
},
                    },
                    "无视加成":{
                        trigger:{
                            source:"damageBegin",
                        },
                        forced:true,
                        filter:function (event,source){
return event.player.storage.防御等级>0;
},
                        content:function (){
trigger.num+=trigger.player.storage.防御等级*0.15*0.3;
},
                    },
                },
            },
            "天尊夜痕":{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                content:function (){
trigger.player.storage.攻击等级-=1;
trigger.player.syncStorage('攻击等级');
trigger.player.storage.防御等级-=1;
trigger.player.syncStorage('防御等级');
trigger.player.storage.闪避等级-=1;
trigger.player.syncStorage('闪避等级');
trigger.player.storage.暴击等级-=1;
trigger.player.syncStorage('暴击等级');
trigger.player.storage.速度等级-=1;
trigger.player.syncStorage('速度等级');
        game.log(trigger.player,'全属性下降一级'); 
},
            },
            "炽戮":{
                enable:"phaseUse",
                usable:2,
                filterTarget:function (target){
        return true;
    },
                content:function (){
target.storage.攻击等级+=1;
target.syncStorage('攻击等级');
target.storage.防御等级+=1;
target.syncStorage('防御等级');
target.storage.速度等级+=1;
target.syncStorage('速度等级');
        game.log(target,'提升攻击，防御和速度一级'); 
        player.loseHp(0.5);
},
                ai:{
                    order:9,
                    result:{
                        player:function (player){
                return  player.hp-3;
            },
                        target:function (player,target){
                if(target.hp==1) return 2;
                if(player==target&&player.num('h')>player.hp) return 2;
                return 2;
            },
                    },
                    threaten:1.5,
                },
            },
            "夜歌":{
                enable:"phaseUse",
                usable:1,
                filterCard:true,
                selectCard:2,
                filterTarget:function (target){
        return true;
    },
                content:function (){
target.addSkill('夜歌反');        
target.storage.夜歌反+=2;
target.syncStorage('夜歌反');
game.log(target,'获得了持续两回合的反伤效果'); 
},
                ai:{
                    order:9,
                    result:{
                        player:function (player){
                return  player.hp-0;
            },
                        target:function (player,target){
                if(target.hp==1) return 5;
                if(player==target&&player.num('h')>player.hp) return 5;
                return 2;
            },
                    },
                    threaten:1.5,
                },
            },
            "夜歌反":{
                marktext:"夜",
                intro:{
                    content:function (storage){
return '离夜歌消失还有'+storage+'个回合'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.夜歌反=0;
}
},
                mark:true,
                group:["夜歌反_1111","夜歌反_2222","夜歌反_3333"],
                subSkill:{
                    "1111":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.storage.夜歌反<=0;
},
                        content:function (){
player.removeSkill('夜歌反');
                game.log('夜歌效果消失'); 
},
                    },
                    "2222":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
player.storage.夜歌反-=1;
player.syncStorage('夜歌反');
},
                    },
                    "3333":{
                        trigger:{
                            player:"damageBegin",
                        },
                        forced:true,
                        content:function (){
            trigger.source.loseHp(trigger.num*0.85);
                game.log(player,'反弹了85%伤害'); 
    },
                    },
                },
            },
            "吟喵刀":{
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event,player){
if(Math.random()>0.5) return false;
return true;
},
                forced:true,
                content:function (){
trigger.player.storage.防御等级-=1;
trigger.player.syncStorage('防御等级');
        game.log(trigger.player,'防御下降一级'); 
},
            },
            "武喵道":{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                content:function (){
player.recover(trigger.num*0.5);
},
            },
            "龙吟初代":{
                skillAnimation:"epic",
                animationStr:"吾不可犯！",
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                filter:function (){
return !_status.connectMode;
},
                content:function (){
player.storage.攻击等级+=6;
player.syncStorage('攻击等级');
player.storage.防御等级+=6;
player.syncStorage('防御等级');
player.storage.闪避等级+=6;
player.syncStorage('闪避等级');
player.storage.暴击等级+=6;
player.syncStorage('暴击等级');
player.storage.速度等级+=6;
player.syncStorage('速度等级');
        game.log(player,'提升全属性六级'); 
},
            },
            "八歧大蛇·封":{
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                content:function (){
trigger.player.turnOver();
        game.log(trigger.player,'害怕了'); 
},
            },
            "修凯领域":{
                group:["修凯领域_抗性","修凯领域_提升","修凯领域_附伤"],
                subSkill:{
                    "抗性":{
                        trigger:{
                            player:"damageBegin",
                        },
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
                game.log(player,'免疫了50%伤害'); 
},
                    },
                    "提升":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
if(Math.random()>0.2) return false;
return true;
},
                        content:function (){
player.storage.攻击等级+=1;
player.syncStorage('攻击等级');
player.storage.防御等级+=1;
player.syncStorage('防御等级');
player.storage.闪避等级+=1;
player.syncStorage('闪避等级');
player.storage.暴击等级+=1;
player.syncStorage('暴击等级');
player.storage.速度等级+=1;
player.syncStorage('速度等级');
                game.log(player,'提升全属性一级'); 
},
                    },
                    "附伤":{
                        trigger:{
                            source:"damageBegin",
                        },
                        forced:true,
                        content:function (){
trigger.player.loseHp(1);
},
                    },
                },
            },
            "暗影·元灭却":{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                content:function (){
        "step 1"
player.storage.攻击等级+=1;
player.syncStorage('攻击等级');
player.storage.防御等级+=1;
player.syncStorage('防御等级');
player.storage.闪避等级+=1;
player.syncStorage('闪避等级');
        trigger.player.storage.攻击等级-=1
        trigger.player.syncStorage('攻击等级');
        trigger.player.storage.防御等级-=1
        trigger.player.syncStorage('防御等级');
        trigger.player.storage.闪避等级-=1
        trigger.player.syncStorage('闪避等级');
        game.log(player,'吸取对方攻击，防御和闪避一级'); 
},
            },
            "圣光·明镜破":{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                content:function (){
        "step 1"
    player.recover(trigger.num*0.5);
   "step 2"             
   if(Math.random()>1/2){
trigger.player.storage.防御等级-=2;
trigger.player.syncStorage('防御等级');
game.log(trigger.player,'防御下降两级');};
        "step 3"
   if(Math.random()>1/2){
player.storage.攻击等级+=2;
player.syncStorage('攻击等级');
game.log(player,'提升攻击两级');};
},
            },
            "圣魔·星辰裂":{
                skillAnimation:"epic",
                animationStr:"在虚空中重生",
                trigger:{
                    player:"changeHp",
                },
                forced:true,
                priority:100,
                filter:function (event,player){
        return player.hp<=0;
    },
                content:function (){
        player.init('圣修暗凯帝');
        player.update();
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
            },
            "蛇魂":{
                marktext:"蛇",
                intro:{
                    content:function (storage){
return '当前有蛇魂'+storage+'个'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.蛇魂=0;
}
},
                mark:true,
            },
            "须佐之殇":{
                enable:"phaseUse",
                usable:1,
                content:function (){
    player.addSkill('蛇魂');
player.storage.蛇魂+=8;
player.syncStorage('蛇魂');
    player.removeSkill('须佐之殇');
        game.log(player,'获得了八个蛇魂'); 
},
                ai:{
                    order:1,
                    result:{
                        player:function (player){
                return  player.storage.卡-0;
            },
                    },
                    threaten:1.5,
                },
            },
            "天蛇罚":{
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                filter:function (event,player){
return player.storage.蛇魂>0;
},
                content:function (){
trigger.player.loseHp(player.storage.蛇魂*0.25);
player.storage.蛇魂=0;
player.syncStorage('蛇魂');    
},
            },
            "血契约":{
                marktext:"血",
                intro:{
                    content:function (storage){
return '离血罪契约效果消失消失还有'+storage+'个回合'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.血契约=0;
}
},
                mark:true,
                group:["血契约_1111","血契约_2222","血契约_3333"],
                subSkill:{
                    "1111":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.storage.血契约<=0;
},
                        content:function (){
player.removeSkill('血契约');
player.removeSkill('血罪约');
},
                    },
                    "2222":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
player.storage.血契约-=1;
player.syncStorage('血契约');
},
                    },
                    "3333":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.storage.血契约<=0;
},
                        content:function (){
player.loseHp(player.hp);
},
                    },
                },
            },
            "血罪契约":{
                enable:"phaseUse",
                usable:1,
                content:function (){
player.addSkill('蛇魂');
player.addSkill('血契约');
player.storage.血契约+=5;
player.syncStorage('血契约');
player.storage.蛇魂=8;
player.syncStorage('蛇魂');
player.addSkill('血罪约');
player.removeSkill('血罪契约');
        game.log(player,'蛇魂变为八个并进入狂暴状态'); 
},
                ai:{
                    order:1,
                    result:{
                        player:function (player){
                return  player.storage.hp-2;
            },
                    },
                    threaten:1.5,
                },
            },
            "血罪约":{
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                content:function (){
player.storage.蛇魂=8;
player.syncStorage('蛇魂');
        game.log(player,'蛇魂变为八个'); 
},
            },
            "灵·陨":{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                filter:function (event,player){
return player.storage.蛇魂>0;
},
                content:function (){
player.recover(player.storage.蛇魂*0.125);
},
            },
            "天丛云":{
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event,player){
if(Math.random()>0.05) return false;
return true;
},
                forced:true,
                content:function (){
trigger.num+=3;
        game.log(player,'伤害提升三点'); 
},
            },
            "辉煌双生":{
                enable:"phaseUse",
                usable:1,
                prompt:"失去一点体力并提升50%伤害抗性",
                content:function (){
"step 0"
player.loseHp(1);
"step 1"
player.addSkill('辉煌双生·2');
player.storage.攻击等级+=1;
player.syncStorage('攻击等级');
player.storage.防御等级+=1;
player.syncStorage('防御等级');
player.storage.闪避等级+=1;
player.syncStorage('闪避等级');
player.storage.暴击等级+=1;
player.syncStorage('暴击等级');
player.storage.速度等级+=1;
player.syncStorage('速度等级');
game.log(player,'提升全属性一级');         
},
                ai:{
                    order:1,
                    result:{
                        player:function (player){
                return  player.hp-1;
            },
                    },
                    threaten:1.5,
                },
            },
            "迷心之炎":{
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                filter:function (event,player){
if(Math.random()>2/5) return false;
return true;
},
                content:function (){
trigger.player.addSkill('烧伤');
trigger.player.storage.烧伤+=3;
trigger.player.syncStorage('烧伤');
        game.log(trigger.player,'被烧伤三个回合'); 
},
            },
            "恐惧之华":{
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                filter:function (event,player){
if(Math.random()>3/5) return false;
return true;
},
                content:function (){
trigger.player.turnOver();
        game.log(trigger.player,'害怕了'); 
player.loseHp((player.hp-player.maxHp)*0.3);
},
            },
            "日月无天":{
                enable:"phaseUse",
                content:function (){
"step 1"
player.addSkill('日月无天·2');
        game.log(player,'增加了50%抗性'); 
"step 2"
player.removeSkill('日月无天');
},
                ai:{
                    order:1,
                    result:{
                        player:function (player){
                return  player.hp-0;
            },
                    },
                    threaten:1.5,
                },
            },
            "日月无天·2":{
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                content:function (){
trigger.num-=trigger.num*0.5;
        game.log(player,'免疫了50%伤害'); 
},
            },
            "辉煌双生·2":{
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                content:function (){
trigger.num-=trigger.num*0.5;
        game.log(player,'免疫了50%伤害'); 
},
            },
            "天地炀凐·日":{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                content:function (){
    "step 1"
trigger.player.storage.攻击等级-=2;
trigger.player.syncStorage('攻击等级');
trigger.player.storage.防御等级-=2;
trigger.player.syncStorage('防御等级');
trigger.player.storage.闪避等级-=2;
trigger.player.syncStorage('闪避等级');
        game.log(trigger.player,'攻击，防御和闪避下降两级'); 
    "step 2"
    if(Math.random()>0.65){
trigger.player.addSkill('烧伤');
trigger.player.storage.烧伤+=6;
trigger.player.syncStorage('烧伤');
            game.log(trigger.player,'被烧伤六个回合');};
},
            },
            "天地炀凐·月":{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                content:function (){
    "step 1"
player.recover((player.maxHp-player.hp)*0.5)
    "step 2"
    if(Math.random()>0.65){
trigger.player.addSkill('冻伤');
trigger.player.storage.冻伤+=6;
trigger.player.syncStorage('冻伤');
    game.log(trigger.player,'被冻伤六个回合');};
},
            },
            "飞梭战意":{
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                content:function (){
player.storage.速度等级+=2;
player.syncStorage('速度等级');
        game.log(player,'提升速度两级');
},
            },
            "翼·极速体能":{
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                content:function (){
player.recover(player.storage.速度等级*0.1);
},
            },
            "超离子风暴":{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                content:function (){
     trigger.player.storage.防御等级-=2;
trigger.player.syncStorage('防御等级');
        game.log(trigger.player,'防御下降两级');
},
            },
            "暗翼聚能":{
                enable:"phaseUse",
                usable:1,
                filterTarget:function (target){
        return true;
    },
                content:function (){
target.addSkill('暗翼');        
target.storage.暗翼+=4;
target.syncStorage('暗翼');
        game.log(target,'四个回合内增加55%抗性');
        player.loseHp(1);
},
                ai:{
                    order:9,
                    result:{
                        player:function (player){
                return  player.hp-1;
            },
                        target:function (player,target){
                if(target.hp==1) return 5;
                if(player==target&&player.num('h')>player.hp) return 5;
                return 2;
            },
                    },
                    threaten:1.5,
                },
            },
            "暗翼":{
                marktext:"翼",
                intro:{
                    content:function (storage){
return '离暗翼聚能效果消失还有'+storage+'个回合'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.暗翼=0;
}
},
                mark:true,
                group:["暗翼_1111","暗翼_2222","暗翼_3333"],
                subSkill:{
                    "1111":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.storage.暗翼<=0;
},
                        content:function (){
player.removeSkill('暗翼');
                game.log(player,'暗翼效果消失');
},
                    },
                    "2222":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
player.storage.暗翼-=1;
player.syncStorage('暗翼');
},
                    },
                    "3333":{
                        trigger:{
                            player:"damageBegin",
                        },
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.55;
                game.log(player,'免疫了55%伤害');
},
                    },
                },
            },
            "圈之怨念":{
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                content:function (){
trigger.player.loseHp(0.5);
    player.recover(0.5);
        game.log(player,'吸取了对方0.5点体力');
},
            },
            "生死轮回":{
                enable:"phaseUse",
                usable:1,
                content:function (){
"step 0"
player.loseHp();
"step 1"
player.addSkill('轮回');
},
                ai:{
                    order:1,
                    result:{
                        player:function (player){
                return  player.hp-2;
            },
                    },
                    threaten:1.5,
                },
            },
            "轮回":{
                trigger:{
                    player:"phaseBefore",
                },
                forced:true,
                content:function (){
        "step 1"
player.recover(player.maxHp);
        "step 2"
player.removeSkill("轮回")
},
            },
            "惊天一矢":{
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event,player){
return player.hp<player.maxHp;
},
                forced:true,
                content:function (){
trigger.player.addSkill('防御等级');        
trigger.num+=player.maxHp-player.hp+trigger.player.storage.防御等级*0.1;    
},
            },
            "龙吟无心":{
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                content:function (){
trigger.num-=(player.maxHp-player.hp)*0.35;
},
            },
            "龙游天地":{
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                content:function (){
player.addSkill('凝神');    
player.storage.凝神+=1;
player.syncStorage('凝神');
        game.log(player,'凝神一次');
},
            },
            "凝神":{
                marktext:"凝",
                intro:{
                    content:function (storage){
return '每次凝神提升暴击率15%和爆伤20%'+'<li>当前凝神次数为：'+storage+'次'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.凝神=0;
}
},
                mark:true,
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event,player){
if(Math.random()>player.storage.凝神*0.15) return false;
return true;
},
                forced:true,
                content:function (){
trigger.num+=trigger.num+player.storage.凝神*0.2;
},
            },
            "龙吟破":{
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event,player){
return player.storage.凝神>=3;
},
                forced:true,
                content:function (){
trigger.player.storage.攻击等级+=1;
trigger.player.syncStorage('攻击等级');
trigger.player.storage.防御等级+=1;
trigger.player.syncStorage('防御等级');
trigger.player.storage.闪避等级+=1;
trigger.player.syncStorage('闪避等级');
trigger.player.storage.暴击等级+=1;
trigger.player.syncStorage('暴击等级');
trigger.player.storage.速度等级+=1;
trigger.player.syncStorage('速度等级');
        game.log(trigger.player,'全属性下降一级');
},
            },
            "厄运相随":{
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                content:function (){
trigger.player.addSkill('秒杀');
    player.removeSkill('厄运相随')
    game.log(trigger.player,'被厄运相随');
},
            },
            "秒杀":{
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                filter:function (event,player){
if(Math.random()>0.1) return false;
return true;
},
                content:function (){
player.loseHp(99999);
        game.log(player,'被秒杀了');
},
            },
            "真实的梦境":{
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                filter:function (event,player){
if(Math.random()>0.5) return false;
return true;
},
                content:function (){
trigger.player.turnOver();
        game.log(trigger.player,'睡着了');
},
            },
            "龙啸九天":{
                enable:"phaseUse",
                content:function (){
"step 0"
if(Math.random()>1/2){
player.recover(1)};
"step 1"
if(Math.random()>1/2){
player.loseHp(1)};
"step 2"
player.storage.攻击等级+=1;
player.syncStorage('攻击等级');
player.storage.防御等级+=1;
player.syncStorage('防御等级');
player.storage.闪避等级+=1;
player.syncStorage('闪避等级');
player.storage.暴击等级+=1;
player.syncStorage('暴击等级');
player.storage.速度等级+=1;
player.syncStorage('速度等级');
        game.log(player,'提升全属性一级');
},
                ai:{
                    order:1,
                    result:{
                        player:function (player){
                return  player.hp-1;
            },
                    },
                    threaten:1.5,
                },
            },
            "万虹凝":{
                trigger:{
                    player:"phaseBegin",
                },
                filter:function (event,player){
if(Math.random()>0.2) return false;
return true;
},
                forced:true,
                content:function (){
'step 0'
event.target=game.players.randomGet(player);
player.line(event.target,'green');
'step 1'
event.target.turnOver();
        game.log(event.target,'害怕了');
},
                priority:0,
            },
            "区域封灭":{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                content:function (){
    player.addSkill('攻击等级');
    player.addSkill('防御等级');
    player.addSkill('暴击等级');
    player.addSkill('闪避等级');
    player.addSkill('速度等级');
    trigger.player.addSkill('攻击等级');
    trigger.player.addSkill('防御等级');
    trigger.player.addSkill('暴击等级');
    trigger.player.addSkill('闪避等级');
    trigger.player.addSkill('速度等级');
    player.storage.攻击等级+=1;
player.syncStorage('攻击等级');
player.storage.防御等级+=1;
player.syncStorage('防御等级');
player.storage.闪避等级+=1;
player.syncStorage('闪避等级');
player.storage.暴击等级+=1;
player.syncStorage('暴击等级');
player.storage.速度等级+=1;
player.syncStorage('速度等级');
        game.log(player,'提升全属性一级');
    trigger.num=(player.storage.攻击等级+player.storage.防御等级+player.storage.暴击等级+player.storage.闪避等级+player.storage.速度等级+trigger.player.storage.攻击等级+trigger.player.storage.防御等级+trigger.player.storage.暴击等级+trigger.player.storage.闪避等级+trigger.player.storage.速度等级)*0.05;
        player.recover(trigger.num);
},
            },
            "无影整蛊":{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                content:function (){
"step 1"
if(Math.random()>1/2){
trigger.player.loseHp(0.1);
player.storage.攻击等级+=1;
player.syncStorage('攻击等级');
trigger.player.storage.攻击等级-=1;
trigger.player.syncStorage('攻击等级');
game.log(player,'吸取了对方攻击一级');};   
"step 2"
if(Math.random()>1/2){
trigger.player.loseHp(0.1)};
},
            },
            "捣蛋幽灵":{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                filter:function (event,player){
return Math.random()<0.5&&event.num<1;
},
                content:function (){
trigger.num+=1;
        game.log(player,'伤害提升一点');
},
            },
            "翼·繁星天皇":{
                trigger:{
                    player:"phaseBegin",
                },
                filter:function (event,player){
if(Math.random()>0.8) return false;
return true;
},
                forced:true,
                content:function (){
'step 0'
event.target=game.players.randomGet(player);
player.line(event.target,'green');
'step 1'
event.target.addSkill('束缚');
event.target.storage.束缚+=16;
event.target.syncStorage('束缚');
        game.log(event.target,'被束缚十六回合');
},
                priority:0,
            },
            "万丈星河":{
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                filter:function (event,player){
if(Math.random()>0.4) return false;
return true;
},
                content:function (){
trigger.player.storage.攻击等级=0;
trigger.player.syncStorage('攻击等级');
trigger.player.storage.防御等级=0;
trigger.player.syncStorage('防御等级');
trigger.player.storage.闪避等级=0;
trigger.player.syncStorage('闪避等级');
trigger.player.storage.暴击等级=0;
trigger.player.syncStorage('暴击等级');
trigger.player.storage.速度等级=0;
trigger.player.syncStorage('速度等级');
        game.log(trigger.player,'属性等级被重置了');
},
            },
            "北斗群星":{
                enable:"phaseUse",
                usable:1,
                filterTarget:function (target){
        return true;
    },
                content:function (){
target.addSkill('群星');        
target.storage.群星+=3;
target.syncStorage('群星');
        game.log(target,'获得三回合群星效果');
        player.loseHp(1);
},
                ai:{
                    order:9,
                    result:{
                        player:function (player){
                return  player.hp-0;
            },
                        target:function (player,target){
                if(target.hp==1) return 5;
                if(player==target&&player.num('h')>player.hp) return 5;
                return 2;
            },
                    },
                    threaten:1.5,
                },
            },
            "群星":{
                marktext:"星",
                intro:{
                    content:function (storage){
return '离北斗群星效果消失还有'+storage+'个回合'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.群星=0;
}
},
                mark:true,
                group:["群星_1111","群星_2222","群星_3333"],
                subSkill:{
                    "1111":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.storage.群星<=0;
},
                        content:function (){
player.removeSkill('群星');
                game.log(player,'群星效果消失');
},
                    },
                    "2222":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
player.storage.群星-=1;
player.syncStorage('群星');
},
                    },
                    "3333":{
                        trigger:{
                            player:"damageEnd",
                        },
                        forced:true,
                        content:function (){
player.recover(player.maxHp*0.25);
},
                    },
                },
            },
            "魂":{
                marktext:"魂",
                intro:{
                    content:function (storage){
return '<li>当前有'+storage+'个魂'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.魂=0;
}
},
                mark:true,
            },
            "疾袭":{
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                content:function (){
player.storage.攻击等级+=2;
player.syncStorage('攻击等级');
        game.log(player,'提升攻击两级');
},
            },
            "传奇之光":{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                content:function (){
player.recover(trigger.num*0.5);
player.addSkill('魂');
player.storage.魂+=1;
player.syncStorage('魂');  
        game.log(player,'获得一魂');
},
            },
            "龙耀咆哮":{
                enable:"phaseUse",
                usable:1,
                filterTarget:function (target){
        return true;
    },
                filter:function (event,player){
return player.storage.魂>=5;
},
                content:function (){
player.storage.魂-=5;
target.damage(1+target.maxHp*0.2);
        game.log(player,'消耗了五魂');
},
                ai:{
                    order:1,
                    result:{
                        player:function (player){
            return  player.hp-0;
             },
                        target:function (player,target){
                var eff=ai.get.damageEffect(target,player);
                if(eff>=0) return 1+eff;
                var value=0,i;
                var cards=player.get('h');
                for(i=0;i<cards.length;i++){
                    value+=ai.get.value(cards[i]);
                }
                value/=player.num('h');
                if(target.hp==1) return Math.min(0,value-7);
                return Math.min(0,value-5);
            },
                    },
                    threaten:1.5,
                },
            },
            "光之子":{
                marktext:"光",
                intro:{
                    content:function (storage){
return '<li>当前传奇魂:光龙'+'<li>每回合末30%提升全属性一级'+'<li>回合末获得一魂'
+'<li>每当受到攻击时，每次受到伤害前概率化解对方攻击'+'<li>每次攻击非传奇亚比时伤害+50%'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.光之子=0;
}
},
                mark:true,
                group:["光之子_提升全属性","光之子_伤害加成","光之子_无效"],
                subSkill:{
                    "提升全属性":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
    "step 1"
player.addSkill('魂')
player.storage.魂+=1;
player.syncStorage('魂');
game.log(player,'获得一魂');
        "step 2"
if(Math.random()>0.3){
player.storage.攻击等级+=1;
player.syncStorage('攻击等级');
player.storage.防御等级+=1;
player.syncStorage('防御等级');
player.storage.闪避等级+=1;
player.syncStorage('闪避等级');
player.storage.暴击等级+=1;
player.syncStorage('暴击等级');
player.storage.速度等级+=1;
player.syncStorage('速度等级');
game.log(player,'提升全属性一级');};
},
                    },
                    "伤害加成":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
if(event.player.hasSkill('魂')) return false;
return true;
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num*0.5;
},
                    },
                    "无效":{
                        trigger:{
                            player:"damageBegin",
                        },
                        filter:function (event,source){
if(Math.random()>0.1) return false;
return true;
},
                        forced:true,
                        content:function (){
trigger.untrigger();
trigger.finish();
game.log(player,'化解了对方攻击');},
                    },
                },
            },
            "光之子加":{
                group:["光之子加_1111","光之子加_2222"],
                subSkill:{
                    "1111":{
                        trigger:{
                            player:"damageBegin",
                        },
                        forced:true,
                        content:function (){
player.addSkill('光之子');
player.storage.光之子+=1;
player.syncStorage('光之子');
player.removeSkill('光之子加');
                game.log(player,'开启了传奇魂：光之子');
                for(var i=0;i<player.node.marks.childNodes.length;i++){
if(player.node.marks.childNodes[i].name=='光之子'){
player.node.marks.childNodes[i].setBackgroundImage('extension/奥拉亚比/'+'光龙'+'.jpg');                         player.node.marks.childNodes[i].innerHTML='';
                     }
                 } 
},
                    },
                    "2222":{
                        trigger:{
                            source:"damageBegin",
                        },
                        forced:true,
                        content:function (){
player.addSkill('光之子');
player.storage.光之子+=1;
player.syncStorage('光之子');  
player.removeSkill('光之子加');
                game.log(player,'开启了传奇魂：光之子');
                for(var i=0;i<player.node.marks.childNodes.length;i++){
if(player.node.marks.childNodes[i].name=='光之子'){
player.node.marks.childNodes[i].setBackgroundImage('extension/奥拉亚比/'+'光龙'+'.jpg');                         player.node.marks.childNodes[i].innerHTML='';
                     }
                 } 
},
                    },
                },
            },
            "酒轮灭":{
                marktext:"酒",
                intro:{
                    content:function (storage){
return '<li>当前传奇魂:酒轮灭'+'<li>对抗BOSS时，伤害提升100%'+'<li>回合末获得一魂'+'<li>每当受到攻击时，每次受到伤害前概率化解对方攻击'+'<li>每次攻击非传奇亚比时伤害+50%'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.酒轮灭=0;
}
},
                mark:true,
                group:["酒轮灭_获得魂","酒轮灭_伤害加成","酒轮灭_无效"],
                subSkill:{
                    "获得魂":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
player.addSkill('魂')
player.storage.魂+=1;
player.syncStorage('魂');
game.log(player,'获得一魂');                
},
                    },
                    "伤害加成":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
if(event.player.hasSkill('魂')) return false;
return true;
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num*0.5;
},
                    },
                    "无效":{
                        trigger:{
                            player:"damageBegin",
                        },
                        filter:function (event,source){
if(Math.random()>0.1) return false;
return true;
},
                        forced:true,
                        content:function (){
trigger.untrigger();
trigger.finish();
game.log(player,'化解了对方攻击');                
},
                    },
                },
            },
            "酒轮灭加":{
                group:["酒轮灭加_1111","酒轮灭加_2222"],
                subSkill:{
                    "1111":{
                        trigger:{
                            player:"damageBegin",
                        },
                        forced:true,
                        content:function (){
player.addSkill('酒轮灭');
player.addSkill('酒轮灭BOSS');                
player.storage.酒轮灭+=1;
player.syncStorage('酒轮灭');
player.removeSkill('酒轮灭加');
                game.log(player,'开启了传奇魂：酒轮灭');
                for(var i=0;i<player.node.marks.childNodes.length;i++){
if(player.node.marks.childNodes[i].name=='酒轮灭'){
player.node.marks.childNodes[i].setBackgroundImage('extension/奥拉亚比/'+'酒轮灭'+'.jpg');                         player.node.marks.childNodes[i].innerHTML='';
                     }
                 } 
},
                    },
                    "2222":{
                        trigger:{
                            source:"damageBegin",
                        },
                        forced:true,
                        content:function (){
player.addSkill('酒轮灭');
player.addSkill('酒轮灭BOSS');                 
player.storage.酒轮灭+=1;
player.syncStorage('酒轮灭');  
player.removeSkill('酒轮灭加');
                game.log(player,'开启了传奇魂：酒轮灭');
                for(var i=0;i<player.node.marks.childNodes.length;i++){
if(player.node.marks.childNodes[i].name=='酒轮灭'){
player.node.marks.childNodes[i].setBackgroundImage('extension/奥拉亚比/'+'酒轮灭'+'.jpg');                         player.node.marks.childNodes[i].innerHTML='';
                     }
                 } 
},
                    },
                },
            },
            "酒轮灭BOSS":{
                mode:["boss"],
                unique:true,
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                content:function (){
trigger.num+=trigger.num;
},
            },
            "狂风绝怒":{
                enable:"phaseUse",
                usable:1,
                filterTarget:function (target){
        return true;
    },
                filter:function (event,player){
return player.storage.魂>=4;
},
                content:function (){
player.storage.魂-=4;
target.damage(0.4);
player.storage.攻击等级+=1;
player.syncStorage('攻击等级');
player.storage.防御等级+=1;
player.syncStorage('防御等级');
player.storage.闪避等级+=1;
player.syncStorage('闪避等级');
player.storage.暴击等级+=1;
player.syncStorage('暴击等级');
player.storage.速度等级+=1;
player.syncStorage('速度等级');
target.storage.攻击等级-=1;
target.syncStorage('攻击等级');
target.storage.防御等级-=1;
target.syncStorage('防御等级');
target.storage.闪避等级-=1;
target.syncStorage('闪避等级');
target.storage.暴击等级-=1;
target.syncStorage('暴击等级');
target.storage.速度等级-=1;
target.syncStorage('速度等级'); 
game.log(player,'消耗了四魂并吸取对方全属性一级');        
},
                ai:{
                    order:1,
                    result:{
                        player:function (player){
            return  player.hp-0;
             },
                        target:function (player,target){
                var eff=ai.get.damageEffect(target,player);
                if(eff>=0) return 1+eff;
                var value=0,i;
                var cards=player.get('h');
                for(i=0;i<cards.length;i++){
                    value+=ai.get.value(cards[i]);
                }
                value/=player.num('h');
                if(target.hp==1) return Math.min(0,value-7);
                return Math.min(0,value-5);
            },
                    },
                    threaten:1.5,
                },
            },
            "神息":{
                marktext:"神",
                intro:{
                    content:function (storage){
return '离神龙息效果消失还有'+storage+'个回合'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.神息=0;
}
},
                mark:true,
                group:["神息_1111","神息_2222","神息_3333"],
                subSkill:{
                    "1111":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.storage.神息<=0;
},
                        content:function (){
player.removeSkill('神息');
                game.log(player,'神龙息效果消失');
},
                    },
                    "2222":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
player.storage.神息-=1;
player.syncStorage('神息');
},
                    },
                    "3333":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
player.recover(0.5);
},
                    },
                },
            },
            "龙息":{
                marktext:"神",
                intro:{
                    content:function (storage){
return '离神龙息能效果消失还有'+storage+'个回合'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.龙息=0;
}
},
                mark:true,
                group:["龙息_1111","龙息_2222","龙息_3333"],
                subSkill:{
                    "1111":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.storage.龙息<=0;
},
                        content:function (){
player.removeSkill('龙息');
                game.log(player,'神龙息效果消失');
},
                    },
                    "2222":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
player.storage.龙息-=1;
player.syncStorage('龙息');
},
                    },
                    "3333":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
player.loseHp(0.5);
},
                    },
                },
            },
            "神龙息":{
                enable:"phaseUse",
                usable:1,
                filterTarget:function (target){
        return true;
    },
                filter:function (event,player){
return player.storage.魂>=1;
},
                content:function (){
target.addSkill('龙息');        
target.storage.龙息+=4;
target.syncStorage('龙息');
player.addSkill('神息');        
player.storage.神息+=4;
player.syncStorage('神息'); 
player.storage.魂-=1;
player.syncStorage('魂'); 
game.log(player,'消耗了一魂并在四回合内每回合末吸取对方0.5点体力');        
},
                ai:{
                    order:1,
                    result:{
                        player:function (player){
            return  player.hp-0;
             },
                        target:function (player,target){
                var eff=ai.get.damageEffect(target,player);
                if(eff>=0) return 1+eff;
                var value=0,i;
                var cards=player.get('h');
                for(i=0;i<cards.length;i++){
                    value+=ai.get.value(cards[i]);
                }
                value/=player.num('h');
                if(target.hp==1) return Math.min(0,value-7);
                return Math.min(0,value-5);
            },
                    },
                    threaten:1.5,
                },
            },
            "醉浮生":{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                content:function (){
player.addSkill('魂');    
player.storage.魂+=2;
player.syncStorage('魂');
        game.log(player,'获得两魂');
},
            },
            "中毒":{
                marktext:"毒",
                intro:{
                    content:function (storage){
return '<li>每回合扣除最大体力的1/8'+'<li>离中毒效果消失还有'+storage+'个回合'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.中毒=0;
}
},
                mark:true,
                group:["中毒_1111","中毒_2222","中毒_3333"],
                subSkill:{
                    "1111":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.storage.中毒<=0;
},
                        content:function (){
player.removeSkill('中毒');
                game.log(player,'中毒效果消失');
},
                    },
                    "2222":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
player.storage.中毒-=1;
player.syncStorage('中毒');
},
                    },
                    "3333":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
player.loseHp(player.maxHp/8);
},
                    },
                },
            },
            "烧伤":{
                marktext:"烧",
                intro:{
                    content:function (storage){
return '<li>每回合扣除最大体力的1/8'+'<li>离烧伤效果消失还有'+storage+'个回合'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.烧伤=0;
}
},
                mark:true,
                group:["烧伤_1111","烧伤_2222","烧伤_3333"],
                subSkill:{
                    "1111":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.storage.烧伤<=0;
},
                        content:function (){
player.removeSkill('烧伤');
                game.log(player,'烧伤效果消失');
},
                    },
                    "2222":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
player.storage.烧伤-=1;
player.syncStorage('烧伤');
},
                    },
                    "3333":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
player.loseHp(player.maxHp/8);
},
                    },
                },
            },
            "冻伤":{
                marktext:"冻",
                intro:{
                    content:function (storage){
return '<li>每回合扣除最大体力的1/8'+'<li>离冻伤效果消失还有'+storage+'个回合'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.冻伤=0;
}
},
                mark:true,
                group:["冻伤_1111","冻伤_2222","冻伤_3333"],
                subSkill:{
                    "1111":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.storage.冻伤<=0;
},
                        content:function (){
player.removeSkill('冻伤');
                game.log(player,'冻伤效果消失');
},
                    },
                    "2222":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
player.storage.冻伤-=1;
player.syncStorage('冻伤');
},
                    },
                    "3333":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
player.loseHp(player.maxHp/8);
},
                    },
                },
            },
            "束缚":{
                marktext:"束",
                intro:{
                    content:function (storage){
return '<li>每回合扣除最大体力的1/16'+'<li>离束缚效果消失还有'+storage+'个回合'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.束缚=0;
}
},
                mark:true,
                group:["束缚_1111","束缚_2222","束缚_3333"],
                subSkill:{
                    "1111":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.storage.束缚<=0;
},
                        content:function (){
player.removeSkill('束缚');
},
                    },
                    "2222":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
player.storage.束缚-=1;
player.syncStorage('束缚');
},
                    },
                    "3333":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
player.loseHp(player.maxHp/16);
},
                    },
                },
            },
            "诅咒":{
                marktext:"诅",
                intro:{
                    content:function (storage){
return '<li>每回合扣除最大体力的1/4'+'<li>离诅咒效果消失还有'+storage+'个回合'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.诅咒=0;
}
},
                mark:true,
                group:["诅咒_1111","诅咒_2222","诅咒_3333"],
                subSkill:{
                    "1111":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.storage.诅咒<=0;
},
                        content:function (){
player.removeSkill('诅咒');
                game.log(player,'诅咒效果消失');
},
                    },
                    "2222":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
player.storage.诅咒-=1;
player.syncStorage('诅咒');
},
                    },
                    "3333":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
player.loseHp(player.maxHp/4);
},
                    },
                },
            },
            "衰弱":{
                marktext:"衰",
                intro:{
                    content:function (storage){
return '<li>每回合扣除一定量体力，损失体力越多扣除越多'+'<li>离衰弱效果消失还有'+storage+'个回合'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.衰弱=0;
}
},
                mark:true,
                group:["衰弱_1111","衰弱_2222","衰弱_3333"],
                subSkill:{
                    "1111":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.storage.衰弱<=0;
},
                        content:function (){
player.removeSkill('衰弱');
                game.log(player,'衰弱效果消失');
},
                    },
                    "2222":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
player.storage.衰弱-=1;
player.syncStorage('衰弱');
},
                    },
                    "3333":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
player.loseHp((player.maxHp-player.hp)*0.25+0.1);
},
                    },
                },
            },
            "麻痹":{
                marktext:"麻",
                intro:{
                    content:function (storage){
return '<li>每回合开始概率翻面'+'<li>离麻痹效果消失还有'+storage+'个回合'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.麻痹=0;
}
},
                mark:true,
                group:["麻痹_1111","麻痹_2222","麻痹_3333"],
                subSkill:{
                    "1111":{
                        trigger:{
                            player:"phaseBegin",
                        },
                        forced:true,
                        filter:function (event,player){
return player.storage.麻痹<=0;
},
                        content:function (){
player.removeSkill('麻痹');
                game.log(player,'麻痹效果消失');
},
                    },
                    "2222":{
                        trigger:{
                            player:"phaseBegin",
                        },
                        forced:true,
                        content:function (){
player.storage.麻痹-=1;
player.syncStorage('麻痹');
},
                    },
                    "3333":{
                        trigger:{
                            player:"phaseBegin",
                        },
                        forced:true,
                        filter:function (event,player){
if(Math.random()>0.2) return false;
return true;
},
                        content:function (){
player.turnOver();
                game.log(player,'麻痹了');
},
                    },
                },
            },
            "太阳神":{
                marktext:"阳",
                intro:{
                    content:function (storage){
return '<li>当前传奇魂:太阳神'+'<li>每回合末令任意敌方附带一种或多种持续一回合的负面或异常状态'+'<li>回合末获得一魂'+'<li>每当受到攻击时，每次受到伤害前概率化解对方攻击'+'<li>每次攻击非传奇亚比时伤害+50%'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.太阳神=0;
}
},
                mark:true,
                group:["太阳神_异常状态","太阳神_获得魂","太阳神_伤害加成","太阳神_无效"],
                subSkill:{
                    "异常状态":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
'step 0'
event.target=game.players.randomGet(player);
player.line(event.target,'green');
"step 1"
event.target.addSkill('束缚');
event.target.storage.束缚+=1;
event.target.syncStorage('束缚');
game.log(event.target,'被束缚一回合');
"step 2"        
if(Math.random()>1/2){
event.target.addSkill('中毒');
event.target.storage.中毒+=1;
event.target.syncStorage('中毒');
game.log(event.target,'被束缚一回合');}
"step 3"        
if(Math.random()>1/2){
event.target.addSkill('烧伤');
event.target.storage.烧伤+=1;
event.target.syncStorage('烧伤');
game.log(event.target,'被烧伤一回合');}
"step 4"        
if(Math.random()>1/2){
event.target.addSkill('冻伤');
event.target.storage.冻伤+=1;
event.target.syncStorage('冻伤');
game.log(event.target,'被冻伤一回合');}        
"step 5"        
if(Math.random()>1/2){
event.target.addSkill('诅咒');
event.target.storage.诅咒+=1;
event.target.syncStorage('诅咒');
game.log(event.target,'被诅咒一回合');}        
"step 6"        
if(Math.random()>1/2){
event.target.addSkill('衰弱');
event.target.storage.衰弱+=1;
event.target.syncStorage('衰弱');
game.log(event.target,'被衰弱一回合');}        
"step 7"        
if(Math.random()>1/2){
event.target.addSkill('麻痹');
event.target.storage.麻痹+=1;
event.target.syncStorage('麻痹');
game.log(event.target,'被麻痹一回合');}         
},
                    },
                    "获得魂":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
player.addSkill('魂')
player.storage.魂+=1;
player.syncStorage('魂');
                game.log(player,'获得一魂');
},
                    },
                    "伤害加成":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
if(event.player.hasSkill('魂')) return false;
return true;
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num*0.5;
},
                    },
                    "无效":{
                        trigger:{
                            player:"damageBegin",
                        },
                        filter:function (event,source){
if(Math.random()>0.1) return false;
return true;
},
                        forced:true,
                        content:function (){
trigger.untrigger();
trigger.finish();
                game.log(player,'化解对方攻击');
},
                    },
                },
            },
            "太阳神加":{
                group:["太阳神加_1111","太阳神加_2222"],
                subSkill:{
                    "1111":{
                        trigger:{
                            player:"damageBegin",
                        },
                        forced:true,
                        content:function (){
player.addSkill('太阳神');
player.storage.太阳神+=1;
player.syncStorage('太阳神');
player.removeSkill('太阳神加');
                game.log(player,'开启了传奇魂：太阳神');
                for(var i=0;i<player.node.marks.childNodes.length;i++){
if(player.node.marks.childNodes[i].name=='太阳神'){
player.node.marks.childNodes[i].setBackgroundImage('extension/奥拉亚比/'+'太阳神'+'.jpg');                         player.node.marks.childNodes[i].innerHTML='';
                     }
                 } 
},
                    },
                    "2222":{
                        trigger:{
                            source:"damageBegin",
                        },
                        forced:true,
                        content:function (){
player.addSkill('太阳神');
player.storage.太阳神+=1;
player.syncStorage('太阳神');  
player.removeSkill('太阳神加');
                game.log(player,'开启了传奇魂：太阳神');
                for(var i=0;i<player.node.marks.childNodes.length;i++){
if(player.node.marks.childNodes[i].name=='太阳神'){
player.node.marks.childNodes[i].setBackgroundImage('extension/奥拉亚比/'+'太阳神'+'.jpg');                         player.node.marks.childNodes[i].innerHTML='';
                     }
                 } 
},
                    },
                },
            },
            "炎啸":{
                enable:"phaseUse",
                usable:3,
                filterTarget:function (target){
        return true;
    },
                filter:function (event,player){
return player.storage.魂>=4;
},
                content:function (){
player.storage.魂-=4;
target.damage(1.2);
        game.log(player,'消耗了四魂');
},
                ai:{
                    order:1,
                    result:{
                        player:function (player){
            return  player.hp-0;
             },
                        target:function (player,target){
                var eff=ai.get.damageEffect(target,player);
                if(eff>=0) return 1+eff;
                var value=0,i;
                var cards=player.get('h');
                for(i=0;i<cards.length;i++){
                    value+=ai.get.value(cards[i]);
                }
                value/=player.num('h');
                if(target.hp==1) return Math.min(0,value-7);
                return Math.min(0,value-5);
            },
                    },
                    threaten:1.5,
                },
            },
            "蔑视山河":{
                enable:"phaseUse",
                usable:1,
                filterTarget:function (target){
        return true;
    },
                filter:function (event,player){
return player.storage.魂>=3;
},
                content:function (){
"step 1"
player.storage.魂-=3;
player.syncStorage('魂');
target.damage(0.1);
player.recover(0.1);        
target.damage(0.1);
player.recover(0.1);        
target.damage(0.1); 
player.recover(0.1);        
target.damage(0.1); 
player.recover(0.1);        
if(Math.random()>0.2){
target.addSkill('束缚');
target.storage.束缚+=1;
target.syncStorage('束缚');
game.log(target,'被束缚一回合并且玩家获得一魂');    
target.damage(0.1);
player.storage.魂+=1;
player.syncStorage('魂');
player.recover(0.1);}
"step 2"
target.damage(0.1);
if(Math.random()>0.2){
target.addSkill('中毒');
target.storage.中毒+=1;
target.syncStorage('中毒');
    game.log(target,'被中毒一回合并且玩家获得一魂'); 
target.damage(0.1);
player.storage.魂+=1;
player.syncStorage('魂');
player.recover(0.1);}
"step 3"
target.damage(0.1);
if(Math.random()>0.2){
target.addSkill('烧伤');
target.storage.烧伤+=1;
target.syncStorage('烧伤');
    game.log(target,'被烧伤一回合并且玩家获得一魂'); 
target.damage(0.1);
player.storage.魂+=1;
player.syncStorage('魂');
player.recover(0.1);}
"step 4"        
if(Math.random()>0.2){
target.addSkill('冻伤');
target.storage.冻伤+=1;
target.syncStorage('冻伤');
    game.log(target,'被冻伤一回合并且玩家获得一魂'); 
target.damage(0.1);
player.storage.魂+=1;
player.syncStorage('魂');
player.recover(0.1);}        
"step 5"        
if(Math.random()>0.2){
target.addSkill('诅咒');
target.storage.诅咒+=1;
target.syncStorage('诅咒');
    game.log(target,'被诅咒一回合并且玩家获得一魂'); 
target.damage(0.1);
player.storage.魂+=1;
player.syncStorage('魂');
player.recover(0.1);}        
"step 6"        
if(Math.random()>0.2){
target.addSkill('衰弱');
target.storage.衰弱+=1;
target.syncStorage('衰弱');
    game.log(target,'被衰弱一回合并且玩家获得一魂'); 
target.damage(0.1);
player.storage.魂+=1;
player.syncStorage('魂');
player.recover(0.1);}        
"step 7"        
if(Math.random()>0.2){
target.addSkill('麻痹');
target.storage.麻痹+=1;
target.syncStorage('麻痹');
    game.log(target,'被麻痹一回合并且玩家获得一魂'); 
target.damage(0.1);
player.storage.魂+=1;
player.syncStorage('魂');
player.recover(0.1);} 
"step 8"        
if(Math.random()>0.05){
target.damage(0.1);
player.storage.魂+=1;
player.syncStorage('魂');
player.recover(0.1);}        
},
                ai:{
                    order:1,
                    result:{
                        player:function (player){
            return  player.hp-0;
             },
                        target:function (player,target){
                var eff=ai.get.damageEffect(target,player);
                if(eff>=0) return 1+eff;
                var value=0,i;
                var cards=player.get('h');
                for(i=0;i<cards.length;i++){
                    value+=ai.get.value(cards[i]);
                }
                value/=player.num('h');
                if(target.hp==1) return Math.min(0,value-7);
                return Math.min(0,value-5);
            },
                    },
                    threaten:1.5,
                },
            },
            "清算":{
                enable:"phaseUse",
                usable:1,
                filterTarget:function (target){
        return true;
    },
                content:function (){
target.storage.攻击等级=0;
target.syncStorage('攻击等级');
target.storage.防御等级=0;
target.syncStorage('防御等级');
target.storage.闪避等级=0;
target.syncStorage('闪避等级');
target.storage.暴击等级=0;
target.syncStorage('暴击等级');
target.storage.速度等级=0;
target.syncStorage('速度等级');
game.log(target,'目标属性被重置了');
},
                ai:{
                    order:1,
                    result:{
                        player:function (player){
            return  player.hp-0;
             },
                        target:function (player,target){
                var eff=ai.get.damageEffect(target,player);
                if(eff>=0) return 1+eff;
                var value=0,i;
                var cards=player.get('h');
                for(i=0;i<cards.length;i++){
                    value+=ai.get.value(cards[i]);
                }
                value/=player.num('h');
                if(target.hp==1) return Math.min(0,value-7);
                return Math.min(0,value-5);
            },
                    },
                    threaten:1.5,
                },
            },
            "_AolaBase":{
                trigger:{
                    global:"phaseBegin",
                },
                forced:true,
                filter:function (event,player){
if(player.hasSkill('save')) return false;        
if(!player.hasSkill('奥拉亚比')) return false;
return true;        
},
                content:function (){
        player.addSkill('攻击等级');
        player.addSkill('防御等级');
        player.addSkill('暴击等级');
        player.addSkill('速度等级');
        player.addSkill('闪避等级');
        player.addSkill('save');       
},
            },
            "时空锁加":{
                group:["时空锁加_1111","时空锁加_2222"],
                subSkill:{
                    "1111":{
                        trigger:{
                            player:"damageBegin",
                        },
                        forced:true,
                        content:function (){
player.addSkill('时空锁');
player.storage.时空锁+=1;
player.syncStorage('时空锁');
player.removeSkill('时空锁加');
player.addSkill('时间回溯');
player.storage.时间回溯+=8;
player.syncStorage('时间回溯');                
                game.log(player,'开启了传奇魂：时空锁');
                for(var i=0;i<player.node.marks.childNodes.length;i++){
if(player.node.marks.childNodes[i].name=='时空锁'){
player.node.marks.childNodes[i].setBackgroundImage('extension/奥拉亚比/'+'时空锁'+'.jpg');                         player.node.marks.childNodes[i].innerHTML='';
                     }
                 } 
},
                    },
                    "2222":{
                        trigger:{
                            source:"damageBegin",
                        },
                        forced:true,
                        content:function (){
player.addSkill('时空锁');
player.storage.时空锁+=1;
player.syncStorage('时空锁');  
player.removeSkill('时空锁加');
player.addSkill('时间回溯');
player.storage.时间回溯+=8;
player.syncStorage('时间回溯');                 
                game.log(player,'开启了传奇魂：时空锁');
                for(var i=0;i<player.node.marks.childNodes.length;i++){
if(player.node.marks.childNodes[i].name=='时空锁'){
player.node.marks.childNodes[i].setBackgroundImage('extension/奥拉亚比/'+'时空锁'+'.jpg');                         player.node.marks.childNodes[i].innerHTML='';
                     }
                 } 
},
                    },
                },
            },
            "时间回溯":{
                marktext:"时",
                intro:{
                    content:function (storage){
return '<li>濒死时，最多触发八次'+'<li>时间回溯还能触发'+storage+'次'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.时间回溯=0;
}
},
                mark:true,
                trigger:{
                    player:"dying",
                },
                filter:function (event,player){
return player.storage.时间回溯>0;
},
                forced:true,
                content:function (){
player.recover(player.maxHp*0.6);
player.storage.时间回溯-=1;
player.syncStorage('时间回溯');
                
    },
            },
            "时空撕裂":{
                enable:"phaseUse",
                usable:1,
                filterTarget:function (target){
        return true;
    },
                filter:function (event,player){
return player.storage.魂>=4;
},
                content:function (){
player.storage.魂-=4;
target.damage();
player.recover();
game.log(player,'消耗了四魂');
},
                ai:{
                    order:1,
                    result:{
                        player:function (player){
            return  player.hp-0;
             },
                        target:function (player,target){
                var eff=ai.get.damageEffect(target,player);
                if(eff>=0) return 1+eff;
                var value=0,i;
                var cards=player.get('h');
                for(i=0;i<cards.length;i++){
                    value+=ai.get.value(cards[i]);
                }
                value/=player.num('h');
                if(target.hp==1) return Math.min(0,value-7);
                return Math.min(0,value-5);
            },
                    },
                    threaten:1.5,
                },
            },
            "空间扭曲":{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                content:function (){
player.storage.攻击等级+=1;
player.syncStorage('攻击等级');
player.storage.速度等级+=1;
player.syncStorage('速度等级');
game.log(player,'提升攻击和速度一级'); 
},
            },
            "穿梭":{
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                content:function (){
player.storage.闪避等级+=1;
player.syncStorage('闪避等级');
        game.log(player,'提升闪避一级');
},
            },
            "时空锁":{
                marktext:"时",
                intro:{
                    content:function (storage){
return '<li>当前传奇魂:时空锁'+'<li>濒死时，回复最大体力的60%，最多触发八次'+'<li>回合末获得一魂'+'<li>每当受到攻击时，每次受到伤害前概率化解对方攻击'+'<li>每次攻击非传奇亚比时伤害+50%'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.时间锁=0;
}
},
                mark:true,
                group:["时空锁_获得魂","时空锁_伤害加成","时空锁_无效"],
                subSkill:{
                    "获得魂":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
player.addSkill('魂')
player.storage.魂+=1;
player.syncStorage('魂');
                game.log(player,'获得一魂');
},
                    },
                    "伤害加成":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
if(event.player.hasSkill('魂')) return false;
return true;
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num*0.5;
},
                    },
                    "无效":{
                        trigger:{
                            player:"damageBegin",
                        },
                        filter:function (event,source){
if(Math.random()>0.1) return false;
return true;
},
                        forced:true,
                        content:function (){
trigger.untrigger();
trigger.finish();
game.log(player,'化解了对方攻击');},
                    },
                },
            },
            "不胜无归":{
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
return player.storage.魂>=1;
},
                content:function (){
player.recover(player.maxHp*0.4);        
player.storage.魂-=1;
player.syncStorage('魂'); 
player.storage.攻击等级=0;
player.syncStorage('攻击等级');
player.storage.防御等级=0;
player.syncStorage('防御等级');
player.storage.闪避等级=0;
player.syncStorage('闪避等级');
player.storage.暴击等级=0;
player.syncStorage('暴击等级');
player.storage.速度等级=0;
player.syncStorage('速度等级');        
game.log(player,'消耗了一魂并回复40%最大体力'); 
game.log(player,'重置了属性等级');         
},
                ai:{
                    order:1,
                    result:{
                        player:function (player){
                return  player.storage.魂-0;
            },
                    },
                    threaten:1.5,
                },
            },
            "银光双闪":{
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                content:function (){
trigger.player.storage.防御等级-=2;
trigger.player.syncStorage('防御等级');
game.log(trigger.player,'防御降低两级');
},
            },
            "兵神英魂击":{
                enable:"phaseUse",
                usable:1,
                filterTarget:function (target){
        return true;
    },
                filter:function (event,player){
return player.storage.魂>=5;
},
                content:function (){
player.storage.魂-=5;
target.addSkill('秒杀');
game.log(target,'被厄运相随');
target.damage();
game.log(player,'消耗了五魂');
},
                ai:{
                    order:1,
                    result:{
                        player:function (player){
            return  player.hp-0;
             },
                        target:function (player,target){
                var eff=ai.get.damageEffect(target,player);
                if(eff>=0) return 1+eff;
                var value=0,i;
                var cards=player.get('h');
                for(i=0;i<cards.length;i++){
                    value+=ai.get.value(cards[i]);
                }
                value/=player.num('h');
                if(target.hp==1) return Math.min(0,value-7);
                return Math.min(0,value-5);
            },
                    },
                    threaten:1.5,
                },
            },
            "兵魂加":{
                group:["兵魂加_1111","兵魂加_2222"],
                subSkill:{
                    "1111":{
                        trigger:{
                            player:"damageBegin",
                        },
                        forced:true,
                        content:function (){
player.addSkill('兵魂');
player.storage.兵魂+=1;
player.syncStorage('兵魂');
player.removeSkill('兵魂加');
                game.log(player,'开启了传奇魂：兵魂');
                for(var i=0;i<player.node.marks.childNodes.length;i++){
if(player.node.marks.childNodes[i].name=='兵魂'){
player.node.marks.childNodes[i].setBackgroundImage('extension/奥拉亚比/'+'兵魂'+'.jpg');                         player.node.marks.childNodes[i].innerHTML='';
                     }
                 } 
},
                    },
                    "2222":{
                        trigger:{
                            source:"damageBegin",
                        },
                        forced:true,
                        content:function (){
player.addSkill('兵魂');
player.storage.兵魂+=1;
player.syncStorage('兵魂');  
player.removeSkill('兵魂加');
                game.log(player,'开启了传奇魂：兵魂');
                for(var i=0;i<player.node.marks.childNodes.length;i++){
if(player.node.marks.childNodes[i].name=='兵魂'){
player.node.marks.childNodes[i].setBackgroundImage('extension/奥拉亚比/'+'兵魂'+'.jpg');                         player.node.marks.childNodes[i].innerHTML='';
                     }
                 } 
},
                    },
                },
            },
            "兵魂":{
                marktext:"兵",
                intro:{
                    content:function (storage){
return '<li>当前传奇魂:兵魂'+'<li>每次攻击附加一点伤害'+'<li>每次受到伤害获得一魂'+'<li>回合末获得一魂'+'<li>每当受到攻击时，每次受到伤害前概率化解对方攻击'+'<li>每次攻击非传奇亚比时伤害+50%'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.兵魂=0;
}
},
                mark:true,
                group:["兵魂_攻击","兵魂_获得魂2","兵魂_获得魂","兵魂_伤害加成","兵魂_无效"],
                subSkill:{
                    "攻击":{
                        trigger:{
                            source:"damageBegin",
                        },
                        forced:true,
                        content:function (){
trigger.num+=1;
},
                    },
                    "获得魂2":{
                        trigger:{
                            player:"damageBegin",
                        },
                        forced:true,
                        content:function (){
player.addSkill('魂')
player.storage.魂+=1;
player.syncStorage('魂');
game.log(player,'获得一魂');
},
                    },
                    "获得魂":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
player.addSkill('魂')
player.storage.魂+=1;
player.syncStorage('魂');
                game.log(player,'获得一魂');
},
                    },
                    "伤害加成":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
if(event.player.hasSkill('魂')) return false;
return true;
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num*0.5;
},
                    },
                    "无效":{
                        trigger:{
                            player:"damageBegin",
                        },
                        filter:function (event,source){
if(Math.random()>0.1) return false;
return true;
},
                        forced:true,
                        content:function (){
trigger.untrigger();
trigger.finish();
                game.log(player,'化解对方攻击');
},
                    },
                },
            },
            "土灵加":{
                group:["土灵加_1111","土灵加_2222"],
                subSkill:{
                    "1111":{
                        trigger:{
                            player:"damageBegin",
                        },
                        forced:true,
                        content:function (){
player.addSkill('土灵');
player.storage.土灵+=1;
player.syncStorage('土灵');
player.removeSkill('土灵加');               
                game.log(player,'开启了传奇魂：土灵');
                for(var i=0;i<player.node.marks.childNodes.length;i++){
if(player.node.marks.childNodes[i].name=='土灵'){
player.node.marks.childNodes[i].setBackgroundImage('extension/奥拉亚比/'+'土灵'+'.jpg');                         player.node.marks.childNodes[i].innerHTML='';
                     }
                 } 
},
                    },
                    "2222":{
                        trigger:{
                            source:"damageBegin",
                        },
                        forced:true,
                        content:function (){
player.addSkill('土灵');
player.storage.土灵+=1;
player.syncStorage('土灵');  
player.removeSkill('土灵加');                 
                game.log(player,'开启了传奇魂：土灵');
                for(var i=0;i<player.node.marks.childNodes.length;i++){
if(player.node.marks.childNodes[i].name=='土灵'){
player.node.marks.childNodes[i].setBackgroundImage('extension/奥拉亚比/'+'土灵'+'.jpg');                         player.node.marks.childNodes[i].innerHTML='';
                     }
                 } 
},
                    },
                },
            },
            "土灵":{
                marktext:"土",
                intro:{
                    content:function (storage){
return '<li>当前传奇魂:土灵'+'<li>回合末获得一魂'+'<li>每当受到攻击时，每次受到伤害前概率化解对方攻击'+'<li>每次攻击非传奇亚比时伤害+50%'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.土灵=0;
}
},
                mark:true,
                group:["土灵_获得魂","土灵_伤害加成","土灵_无效"],
                subSkill:{
                    "获得魂":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
player.addSkill('魂')
player.storage.魂+=1;
player.syncStorage('魂');
                game.log(player,'获得一魂');
},
                    },
                    "伤害加成":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
if(event.player.hasSkill('魂')) return false;
return true;
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num*0.5;
},
                    },
                    "无效":{
                        trigger:{
                            player:"damageBegin",
                        },
                        filter:function (event,source){
if(Math.random()>0.2) return false;
return true;
},
                        forced:true,
                        content:function (){
trigger.untrigger();
trigger.finish();
                game.log(player,'化解对方攻击');
},
                    },
                },
            },
            "锁魂墓":{
                enable:"phaseUse",
                usable:1,
                filterTarget:function (target){
        return true;
    },
                filter:function (event,player){
return player.storage.魂>=3;
},
                content:function (){
player.storage.魂-=3;
player.loseHp(9999);
target.storage.攻击等级-=3;
target.syncStorage('攻击等级');
target.storage.防御等级-=3;
target.syncStorage('防御等级');
target.storage.闪避等级-=3;
target.syncStorage('闪避等级');
target.storage.暴击等级-=3;
target.syncStorage('暴击等级');
target.storage.速度等级-=3;
target.syncStorage('速度等级'); 
game.log(player,'消耗了三魂并流失大量体力来降低对方全属性三级');        
},
                ai:{
                    order:1,
                    result:{
                        player:function (player){
            return  player.hp-0;
             },
                        target:function (player,target){
                var eff=ai.get.damageEffect(target,player);
                if(eff>=0) return 1+eff;
                var value=0,i;
                var cards=player.get('h');
                for(i=0;i<cards.length;i++){
                    value+=ai.get.value(cards[i]);
                }
                value/=player.num('h');
                if(target.hp==1) return Math.min(0,value-7);
                return Math.min(0,value-5);
            },
                    },
                },
            },
            "超土系":{
                marktext:"土",
                intro:{
                    content:function (storage){
return '<li>超土系克制超火系，超圣灵系，完全体和原系'+'<li>超土系对超水系，和超王系弱效'+'<li>当前亚比的属性为超土系'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.超火系=0;
}
},
                mark:true,
                group:["超土系_超火系","超土系_超圣灵系","超土系_完全体","超土系_超水系","超土系_超王系","超土系_格斗系","超土系_飞行系","超土系_爬行系","超土系_土系","超土系_数码系","超土系_机械系","超土系_火系","超土系_水系","超土系_草系","超土系_电系","超土系_神秘系","超土系_冰系","超土系_上古系","超土系_黑暗系","超土系_光明系","超土系_龙系","超土系_圣灵系","超土系_神兵系","超土系_王系"],
                subSkill:{
                    "超火系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超数码系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "超圣灵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超木系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "完全体":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超龙系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "超水系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超土系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "超王系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超上古系');
},
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.5;
},
                    },
                    "格斗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('格斗系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "飞行系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('飞行系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "爬行系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('爬行系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "土系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('土系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "数码系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('数码系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "机械系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('机械系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "火系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('火系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "水系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('水系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "草系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('草系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "电系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('电系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "神秘系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('神秘系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "冰系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('冰系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "上古系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('上古系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "黑暗系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('黑暗系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "光明系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('光明系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "龙系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('龙系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "圣灵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('圣灵系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "神兵系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('神兵系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                    "王系":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('王系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
},
                    },
                },
            },
            "万兽之尊":{
                group:["万兽之尊_闪避","万兽之尊_攻击"],
                subSkill:{
                    "闪避":{
                        trigger:{
                            player:"damageBegin",
                        },
                        filter:function (event,player){
if(Math.random()>0.35) return false;
return true;
},
                        forced:true,
                        content:function (){
trigger.untrigger();
trigger.finish();
game.log(player,'闪避了对方的攻击');                
},
                    },
                    "攻击":{
                        trigger:{
                            source:"damageBegin",
                        },
                        forced:true,
                        content:function (){
trigger.num+=trigger.num*0.35;               
},
                    },
                },
            },
            "兽尊·万兽臣服":{
                enable:"phaseUse",
                usable:1,
                content:function (){        
player.storage.攻击等级+=1;
player.syncStorage('攻击等级');
player.storage.防御等级+=1;
player.syncStorage('防御等级');
player.storage.闪避等级+=1;
player.syncStorage('闪避等级');
player.storage.暴击等级+=1;
player.syncStorage('暴击等级');
player.storage.速度等级+=1;
player.syncStorage('速度等级');
player.draw();        
game.log(player,'提升全属性一级');
},
                ai:{
                    order:1,
                    result:{
                        player:function (player){
                return  player.hp-0;
            },
                    },
                    threaten:1.5,
                },
            },
            "龙魂剑术":{
                group:["万兽之尊_闪避","万兽之尊_攻击"],
                subSkill:{
                    "闪避":{
                        trigger:{
                            player:"damageBegin",
                        },
                        filter:function (event,player){
if(Math.random()>0.15) return false;
return true;
},
                        forced:true,
                        content:function (){
trigger.untrigger();
trigger.finish();
game.log(player,'闪避了对方的攻击');                
},
                    },
                    "攻击":{
                        trigger:{
                            source:"damageBegin",
                        },
                        forced:true,
                        content:function (){
trigger.num+=trigger.num*0.95;               
},
                    },
                },
            },
            "幽影剑道":{
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                content:function (){
trigger.num-=trigger.num*0.65;
game.log(player,'免疫了65%伤害');    
},
            },
            "万兽之主":{
                group:["万兽之尊_闪避","万兽之尊_攻击"],
                subSkill:{
                    "闪避":{
                        trigger:{
                            player:"damageBegin",
                        },
                        filter:function (event,player){
if(Math.random()>0.25) return false;
return true;
},
                        forced:true,
                        content:function (){
trigger.untrigger();
trigger.finish();
game.log(player,'闪避了对方的攻击');                
},
                    },
                    "攻击":{
                        trigger:{
                            source:"damageBegin",
                        },
                        forced:true,
                        content:function (){
trigger.num+=trigger.num*0.25;               
},
                    },
                },
            },
            "万兽臣服":{
                enable:"phaseUse",
                usable:1,
                content:function (){        
player.storage.攻击等级+=1;
player.syncStorage('攻击等级');
player.storage.防御等级+=1;
player.syncStorage('防御等级');
player.storage.闪避等级+=1;
player.syncStorage('闪避等级');
player.storage.暴击等级+=1;
player.syncStorage('暴击等级');
player.storage.速度等级+=1;
player.syncStorage('速度等级');
player.draw();        
game.log(player,'提升全属性一级');
},
                ai:{
                    order:1,
                    result:{
                        player:function (player){
                return  player.hp-0;
            },
                    },
                    threaten:1.5,
                },
            },
            "急速奔袭":{
                enable:"phaseUse",
                usable:1,
                content:function (){        
player.gain(game.createCard('sha','black'));
player.gain(game.createCard('shan','red'));        
},
            },
            "强效救心":{
                enable:"phaseUse",
                usable:1,
                filterTarget:function (target){
        return true;
    },
                content:function (){
target.recover(); 
player.loseHp(0.5);
},
                ai:{
                    order:9,
                    result:{
                        player:function (player){
                return  player.hp-0;
            },
                        target:function (player,target){
                if(target.hp==1) return 5;
                if(player==target&&player.num('h')>player.hp) return 5;
                return 2;
            },
                    },
                    threaten:1.5,
                },
            },
            "时间撕裂":{
                trigger:{
                    player:"phaseUseBegin",
                },
                forced:true,
                check:function (){return true;},
                content:function (){
        'step 0'
        _status.ZETACount=1;
        player.addTempSkill('时间撕裂_buff','phaseUseAfter');
    },
                subSkill:{
                    buff:{
                        mod:{
                            cardUsable:function (card,player,num){
                    return Infinity;
                },
                            targetInRange:function (card,player,target,now){
                    return true;
                },
                        },
                        trigger:{
                            player:"useCardAfter",
                        },
                        popup:false,
                        forced:true,
                        content:function (){
                if(_status.ZETACount<=0){
                    delete _status.ZETACount;
                    game.stopCountChoose();
                    var evt=_status.event;
                    for(var i=0;i<10;i++){
                        if(evt&&evt.getParent){
                            evt=evt.getParent();
                        }
                        if(evt.name=='phaseUse'){
                            evt.skipped=true;
                            break;
                        }
                    }
                }
            },
                    },
                },
            },
            "空间爆发":{
                trigger:{
                    player:"damageEnd",
                },
                forced:true,
                content:function (){
player.addSkill('时间撕裂');
player.addSkill('时间撕裂删');
game.log(player,'将时空撕裂');         
while(_status.event.name!='phaseLoop'){
_status.event=_status.event.parent;
}
_status.paused=false;
_status.event.player=player;
_status.event.step=0;
if(game.bossinfo){
game.bossinfo.loopType=1;
}
},
                priority:0,
            },
            "时间撕裂删":{
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                content:function (){
game.log('时空恢复正常');         
player.removeSkill('时间撕裂');
player.removeSkill('时间撕裂删');    
},
            },
            "时空重置":{
                video:function (player,data){
        if(data){
            for(var i in data){
                var current=game.playerMap[i];
                current.node.handcards1.innerHTML='';
                current.node.handcards2.innerHTML='';
                current.node.equips.innerHTML='';
                current.node.judges.innerHTML='';
                current.directgain(get.infoCards(data[i].h));
                var es=get.infoCards(data[i].e);
                for(var j=0;j<es.length;j++){
                    current.$equip(es[j]);
                }
                var js=get.infoCards(data[i].j);
                for(var j=0;j<js.length;j++){
                    player.node.judges.appendChild(js[j]);
                }        
            }
            ui.window.classList.remove('zoomout3');
            ui.window.classList.add('zoomin3');
            document.body.appendChild(ui.window);
            setTimeout(function(){
                ui.window.show();
                ui.window.classList.remove('zoomin3');
                setTimeout(function(){
                    ui.window.style.transition='';
                },500);
            },100);
        }
        else{
            ui.window.style.transition='all 0.5s';
            ui.window.classList.add('zoomout3');
            ui.window.delete();
            ui.window.hide();
        }
    },
                intro:{
                    content:function (storage,player){
            if(true){
                return player.storage.SE_qiulao3;
            }
        },
                },
                skillAnimation:"epic",
                animationColor:"fire",
                trigger:{
                    player:"dieBefore",
                },
                forced:true,
                unique:true,
                filter:function (event,player){
        if(player.storage.SE_qiulao2) return false;
        if(player.storage.SE_qiulao) return true;
        return false;
    },
                check:function (event,player){
         player.hp<=0;
    },
                init:function (player){
        player.storage.SE_qiulao4=0;
    },
                content:function (){
        "step 0"
        trigger.untrigger();
        trigger.finish();
        'step 1'
        event.player.storage.SE_qiulao4++;
        if(game.dead.length>0){ 
            while(game.dead.length){
                game.dead[0].revive();
            }
        }
        for(var i=0;i<game.players.length;i++){
            if(game.players[i]==player) continue;
            if(game.players[i].hp<game.players[i].maxHp) game.players[i].hp=game.players[i].maxHp;
            game.players[i].update();
        }
        "step 2"
        game.delay(0.5);
        "step 3"
        ui.window.style.transition='all 0.5s';
        ui.window.classList.add('zoomout3');
        ui.window.delete();
        ui.window.hide();
        game.delay(0,500);
        game.addVideo('skill',event.player,'时空重置1');
        "step 4"
        var storage=event.player.storage.SE_qiulao;            
        var player,frag;
        var i,j;                
        for(i=0;i<storage.length;i++){
            if(game.players.contains(storage[i].player)){
                player=storage[i].player;
                while(player.node.handcards1.childNodes.length)
                    ui.discardPile.appendChild(player.node.handcards1.firstChild);
                while(player.node.handcards2.childNodes.length)
                    ui.discardPile.appendChild(player.node.handcards2.firstChild);
                while(player.node.judges.childNodes.length)
                    ui.discardPile.appendChild(player.node.judges.firstChild);
                while(player.node.equips.childNodes.length)
                    ui.discardPile.appendChild(player.node.equips.firstChild);
            }
        }
        for(i=0;i<storage.length;i++){
            if(game.players.contains(storage[i].player)){
                player=storage[i].player;
                for(j=0;j<storage[i].handcards1.length;j++){
                if(storage[i].handcards1[j].parentNode==ui.discardPile||
                    storage[i].handcards1[j].parentNode==ui.cardPile)
                    player.node.handcards1.appendChild(storage[i].handcards1[j]);
                }
                for(j=0;j<storage[i].handcards2.length;j++){
                    if(storage[i].handcards2[j].parentNode==ui.discardPile||
                    storage[i].handcards2[j].parentNode==ui.cardPile)
                    player.node.handcards2.appendChild(storage[i].handcards2[j]);
                }
                for(j=0;j<storage[i].equips.length;j++){
                    if(storage[i].equips[j].parentNode==ui.discardPile||
                    storage[i].equips[j].parentNode==ui.cardPile)
                    player.node.equips.appendChild(storage[i].equips[j]);
                }
                for(j=0;j<storage[i].judges.length;j++){
                    if(storage[i].judges[j].parentNode==ui.discardPile||
                    storage[i].judges[j].parentNode==ui.cardPile){
                        storage[i].judges[j].viewAs=storage[i].viewAs[j];
                        player.node.judges.appendChild(storage[i].judges[j]);
                    }
                }
                player.update();
            }
        }
        game.delay(0,100);
        ui.window.classList.remove('zoomout3');
        ui.window.classList.add('zoomin3');
        document.body.appendChild(ui.window);
        var data={};
        for(var i=0;i<game.players.length;i++){
            data[game.players[i].dataset.position]={
                h:get.cardsInfo(game.players[i].get('h')),
                e:get.cardsInfo(game.players[i].get('e')),
                j:get.cardsInfo(game.players[i].get('j'))
            }
        }
        game.addVideo('skill',event.player,['SE_qiulao',data]);
        "step 5"
        ui.window.show();
        ui.window.classList.remove('zoomin3');
        setTimeout(function(){
            ui.window.style.transition='';
            game.resume();
        },500);
        event.player.storage.SE_qiulao3='已发动'+event.player.storage.SE_qiulao4+'次';
        game.pause();
        'step 6'
        var player=event.player;
        if(player.hp<player.maxHp) player.hp=player.maxHp;
        player.update();
        ui.control.innerHTML='';
        ui.discardPile.innerHTML='';
        "step 7"
        player.removeSkill('时空重置');
        game.log('时空被重置了');  
    },
                group:["时空重置2"],
            },
            "时空重置1":{
                video:function (player,data){
        if(data){
            for(var i in data){
                var current=game.playerMap[i];
                current.node.handcards1.innerHTML='';
                current.node.handcards2.innerHTML='';
                current.node.equips.innerHTML='';
                current.node.judges.innerHTML='';
                current.directgain(get.infoCards(data[i].h));
                var es=get.infoCards(data[i].e);
                for(var j=0;j<es.length;j++){
                    current.$equip(es[j]);
                }
                var js=get.infoCards(data[i].j);
                for(var j=0;j<js.length;j++){
                    player.node.judges.appendChild(js[j]);
                }        
            }
            ui.window.classList.remove('zoomout3');
            ui.window.classList.add('zoomin3');
            document.body.appendChild(ui.window);
            setTimeout(function(){
                ui.window.show();
                ui.window.classList.remove('zoomin3');
                setTimeout(function(){
                    ui.window.style.transition='';
                },500);
            },100);
        }
        else{
            ui.window.style.transition='all 0.5s';
            ui.window.classList.add('zoomout3');
            ui.window.delete();
            ui.window.hide();
        }
    },
                intro:{
                    content:function (storage,player){
            if(true){
                return player.storage.SE_qiulao3;
            }
        },
                },
                skillAnimation:"epic",
                animationColor:"fire",
                trigger:{
                    player:"dieBefore",
                },
                unique:true,
                filter:function (event,player){
        if(player.storage.SE_qiulao2) return false;
        if(player.storage.SE_qiulao) return true;
        return false;
    },
                check:function (event,player){
         player.hp<=0;
    },
                init:function (player){
        player.storage.SE_qiulao4=0;
    },
                content:function (){
        "step 0"
        trigger.untrigger();
        trigger.finish();
        'step 1'
        event.player.storage.SE_qiulao4++;
        if(game.dead.length>0){ 
            while(game.dead.length){
                game.dead[0].revive();
            }
        }
        for(var i=0;i<game.players.length;i++){
            if(game.players[i]==player) continue;
            if(game.players[i].hp<game.players[i].maxHp) game.players[i].hp=game.players[i].maxHp;
            game.players[i].update();
        }
        "step 2"
        game.delay(0.5);
        "step 3"
        ui.window.style.transition='all 0.5s';
        ui.window.classList.add('zoomout3');
        ui.window.delete();
        ui.window.hide();
        game.delay(0,500);
        game.addVideo('skill',event.player,'天篷变1');
        "step 4"
        var storage=event.player.storage.SE_qiulao;            
        var player,frag;
        var i,j;                
        for(i=0;i<storage.length;i++){
            if(game.players.contains(storage[i].player)){
                player=storage[i].player;
                while(player.node.handcards1.childNodes.length)
                    ui.discardPile.appendChild(player.node.handcards1.firstChild);
                while(player.node.handcards2.childNodes.length)
                    ui.discardPile.appendChild(player.node.handcards2.firstChild);
                while(player.node.judges.childNodes.length)
                    ui.discardPile.appendChild(player.node.judges.firstChild);
                while(player.node.equips.childNodes.length)
                    ui.discardPile.appendChild(player.node.equips.firstChild);
            }
        }
        for(i=0;i<storage.length;i++){
            if(game.players.contains(storage[i].player)){
                player=storage[i].player;
                for(j=0;j<storage[i].handcards1.length;j++){
                if(storage[i].handcards1[j].parentNode==ui.discardPile||
                    storage[i].handcards1[j].parentNode==ui.cardPile)
                    player.node.handcards1.appendChild(storage[i].handcards1[j]);
                }
                for(j=0;j<storage[i].handcards2.length;j++){
                    if(storage[i].handcards2[j].parentNode==ui.discardPile||
                    storage[i].handcards2[j].parentNode==ui.cardPile)
                    player.node.handcards2.appendChild(storage[i].handcards2[j]);
                }
                for(j=0;j<storage[i].equips.length;j++){
                    if(storage[i].equips[j].parentNode==ui.discardPile||
                    storage[i].equips[j].parentNode==ui.cardPile)
                    player.node.equips.appendChild(storage[i].equips[j]);
                }
                for(j=0;j<storage[i].judges.length;j++){
                    if(storage[i].judges[j].parentNode==ui.discardPile||
                    storage[i].judges[j].parentNode==ui.cardPile){
                        storage[i].judges[j].viewAs=storage[i].viewAs[j];
                        player.node.judges.appendChild(storage[i].judges[j]);
                    }
                }
                player.update();
            }
        }
        game.delay(0,100);
        ui.window.classList.remove('zoomout3');
        ui.window.classList.add('zoomin3');
        document.body.appendChild(ui.window);
        var data={};
        for(var i=0;i<game.players.length;i++){
            data[game.players[i].dataset.position]={
                h:get.cardsInfo(game.players[i].get('h')),
                e:get.cardsInfo(game.players[i].get('e')),
                j:get.cardsInfo(game.players[i].get('j'))
            }
        }
        game.addVideo('skill',event.player,['SE_qiulao',data]);
        "step 5"
        ui.window.show();
        ui.window.classList.remove('zoomin3');
        setTimeout(function(){
            ui.window.style.transition='';
            game.resume();
        },500);
        event.player.storage.SE_qiulao3='已发动'+event.player.storage.SE_qiulao4+'次';
        game.pause();
        'step 6'
        var player=event.player;
        if(player.hp<player.maxHp) player.hp=player.maxHp;
        player.update();
        ui.control.innerHTML='';
        ui.discardPile.innerHTML='';
    },
                group:["时空重置2"],
            },
            "时空重置2":{
                trigger:{
                    global:"gameDrawAfter",
                },
                forced:true,
                priority:333,
                popup:false,
                silent:true,
                content:function (){
        var handcards1,handcards2,judges,equips,viewAs,i,j;
        player.storage.SE_qiulao=[];
        player.storage.SE_qiulao2=false;
        var table=document.createElement('table');
        var tr,td,str,st;
        for(i=0;i<game.players.length;i++){
            viewAs=[];
            handcards1=[];
            handcards2=[];
            judges=[];
            equips=[];
            for(j=0;j<game.players[i].node.handcards1.childNodes.length;j++)
                handcards1.push(game.players[i].node.handcards1.childNodes[j]);
            for(j=0;j<game.players[i].node.handcards2.childNodes.length;j++)
                handcards2.push(game.players[i].node.handcards2.childNodes[j]);
            for(j=0;j<game.players[i].node.judges.childNodes.length;j++){
                viewAs.push(game.players[i].node.judges.childNodes[j].viewAs);
                judges.push(game.players[i].node.judges.childNodes[j]);
            }

            for(j=0;j<game.players[i].node.equips.childNodes.length;j++)
            equips.push(game.players[i].node.equips.childNodes[j]);
            tr=document.createElement('tr');
            tr.style.verticalAlign='top';
            table.appendChild(tr);
            td=document.createElement('td');
            td.innerHTML=get.translation(game.players[i]);
            tr.appendChild(td);
            td=document.createElement('td');
            td.innerHTML=(handcards1.length+handcards2.length);
            tr.appendChild(td);
            str='';
            if(equips.length+judges.length){
                if(equips.length){
                    str+=get.translation(equips);
                    if(judges.length){
                        str+='、';
                    }
                }
                if(judges.length){
                    str+=get.translation(judges,'viewAs');
                }
            }
            else{
                str='';
            }
            td=document.createElement('td');
            td.innerHTML=str;
            tr.appendChild(td);
            player.storage.SE_qiulao.push({
                player:game.players[i],
                handcards1:handcards1,
                handcards2:handcards2,
                judges:judges,
                equips:equips,
                viewAs:viewAs,
                value:handcards1.length+handcards2.length+equips.length-judges.length
            });
        }
        table.firstChild.firstChild.style.width='85px';
        table.firstChild.childNodes[1].style.width='48px';
        player.storage.时空重置3='未发动';
    },
            },
            "奥拉亚比":{
                group:["奥拉亚比_攻击","奥拉亚比_防御"],
                subSkill:{
                    "攻击":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
if(event.player.hasSkill('奥拉亚比')) return false;               
return true;
},
                        forced:true,
                        content:function (){
trigger.num-=9999999;                
trigger.player.loseHp();                                               
game.log(player,'穿越时空，能力受到限制');        
},
                    },
                    "防御":{
                        trigger:{
                            player:"damageBegin",
                        },
                        forced:true,
                        filter:function (event,source){
return(event.source&&event.source.hasSkill('非奥拉亚比'));    
},
                        content:function (){       
trigger.num-=9999999;                 
player.loseHp();                              
game.log(player,'穿越时空，能力受到限制');     
},
                    },
                },
            },
            "冰凌裂天碎":{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                content:function (){
player.addSkill('攻击等级');
player.addSkill('防御等级');
player.addSkill('暴击等级');
player.addSkill('闪避等级');
player.addSkill('速度等级');
player.storage.攻击等级+=1;
player.syncStorage('攻击等级');
player.storage.防御等级+=1;
player.syncStorage('防御等级');
player.storage.闪避等级+=1;
player.syncStorage('闪避等级');
player.storage.暴击等级+=1;
player.syncStorage('暴击等级');
player.storage.速度等级+=1;
player.syncStorage('速度等级');
game.log(player,'提升全属性一级');
trigger.num+=player.storage.攻击等级*0.1+trigger.num*0.5;
player.recover(trigger.num*0.2);
},
            },
            "逆水":{
                group:["逆水_抗性","逆水_回血"],
                subSkill:{
                    "抗性":{
                        trigger:{
                            player:"damageBegin",
                        },
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.35;
game.log(player,'免疫了35%伤害');                 
},
                    },
                    "回血":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
                player.addSkill('攻击等级');
player.recover((1+player.storage.攻击等级*0.1)*0.2);
},
                    },
                },
            },
            "轮回印记":{
                marktext:"轮",
                intro:{
                    content:function (storage){
return '<li>当前传奇魂:轮回印记'+'<li>受到伤害后获得一魂并重置对方属性'+'<li>回合末获得一魂'+'<li>每当受到攻击时，每次受到伤害前概率化解对方攻击'+'<li>每次攻击非传奇亚比时伤害+50%'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.轮回印记=0;
}
},
                mark:true,
                group:["轮回印记_1","轮回印记_获得魂","轮回印记_伤害加成","轮回印记_无效"],
                subSkill:{
                    "1":{
                        trigger:{
                            player:"damageEnd",
                        },
                        forced:true,
                        content:function (){
player.addSkill('魂')        
player.storage.魂+=1;
player.syncStorage('魂');
trigger.source.storage.攻击等级=0;
trigger.source.syncStorage('攻击等级');
trigger.source.storage.防御等级=0;
trigger.source.syncStorage('防御等级');        
trigger.source.storage.闪避等级=0;
trigger.source.syncStorage('闪避等级');        
trigger.source.storage.暴击等级=0;
trigger.source.syncStorage('暴击等级');        
trigger.source.storage.速度等级=0;
trigger.source.syncStorage('速度等级');        
game.log(trigger.source,'属性被重置了');
game.log(player,'获得一魂'); 
    },
                    },
                    "获得魂":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
player.addSkill('魂')
player.storage.魂+=1;
player.syncStorage('魂');
                game.log(player,'获得一魂');
},
                    },
                    "伤害加成":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
if(event.player.hasSkill('魂')) return false;
return true;
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num*0.5;
},
                    },
                    "无效":{
                        trigger:{
                            player:"damageBegin",
                        },
                        filter:function (event,source){
if(Math.random()>0.1) return false;
return true;
},
                        forced:true,
                        content:function (){
trigger.untrigger();
trigger.finish();
game.log(player,'化解了对方攻击');},
                    },
                },
            },
            "轮回印记加":{
                group:["轮回印记加_1111","轮回印记加_2222"],
                subSkill:{
                    "1111":{
                        trigger:{
                            player:"damageBegin",
                        },
                        forced:true,
                        content:function (){
player.addSkill('轮回印记');               
player.storage.轮回印记+=1;
player.syncStorage('轮回印记');
player.removeSkill('轮回印记加');
                game.log(player,'开启了传奇魂：轮回印记');
                for(var i=0;i<player.node.marks.childNodes.length;i++){
if(player.node.marks.childNodes[i].name=='轮回印记'){
player.node.marks.childNodes[i].setBackgroundImage('extension/奥拉亚比/'+'轮回印记'+'.jpg');                         player.node.marks.childNodes[i].innerHTML='';
                     }
                 } 
},
                    },
                    "2222":{
                        trigger:{
                            source:"damageBegin",
                        },
                        forced:true,
                        content:function (){
player.addSkill('轮回印记');                 
player.storage.轮回印记+=1;
player.syncStorage('轮回印记');  
player.removeSkill('轮回印记加');
                game.log(player,'开启了传奇魂：轮回印记');
                for(var i=0;i<player.node.marks.childNodes.length;i++){
if(player.node.marks.childNodes[i].name=='轮回印记'){
player.node.marks.childNodes[i].setBackgroundImage('extension/奥拉亚比/'+'轮回印记'+'.jpg');                         player.node.marks.childNodes[i].innerHTML='';
                     }
                 } 
},
                    },
                },
            },
            "冥灵转移":{
                enable:"phaseUse",
                usable:1,
                filterTarget:function (target){
        return true;
    },
                filter:function (event,player){
return player.storage.魂>=4;
},
                content:function (){
player.storage.魂-=4;
target.damage(1.2);
player.recover(1);
game.log(player,'消耗了四魂');        
},
                ai:{
                    order:1,
                    result:{
                        player:function (player){
            return  player.hp-0;
             },
                        target:function (player,target){
                var eff=ai.get.damageEffect(target,player);
                if(eff>=0) return 1+eff;
                var value=0,i;
                var cards=player.get('h');
                for(i=0;i<cards.length;i++){
                    value+=ai.get.value(cards[i]);
                }
                value/=player.num('h');
                if(target.hp==1) return Math.min(0,value-7);
                return Math.min(0,value-5);
            },
                    },
                    threaten:1.5,
                },
            },
            "夜幕传说":{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                content:function (){
player.addSkill('魂');
player.storage.魂+=1;
player.syncStorage('魂');       
player.storage.攻击等级+=1;
player.syncStorage('攻击等级');
player.storage.速度等级+=1;
player.syncStorage('速度等级');
game.log(player,'提升攻击和速度一级');
game.log(player,'获得一魂');        
},
            },
            "超越天堂":{
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
return player.storage.魂>=2;
},
                content:function (){
player.storage.魂-=2; 
player.syncStorage('魂');        
player.addSkill('超越天堂攻');        
player.storage.超越天堂攻+=5;
player.syncStorage('超越天堂攻');        
game.log(player,'消耗两魂并在五个回合内提升40%抗性和伤害能力');
},
                ai:{
                    order:9,
                    result:{
                        player:function (player){
                return  player.hp-0;
            },
                    },
                    threaten:1.5,
                },
            },
            "超越天堂攻":{
                marktext:"超",
                intro:{
                    content:function (storage){
return '离超越天堂效果消失还有'+storage+'个回合'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.超越天堂攻=0;
}
},
                mark:true,
                group:["超越天堂攻_1111","超越天堂攻_2222","超越天堂攻_3333","超越天堂攻_4444"],
                subSkill:{
                    "1111":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.storage.超越天堂攻<=0;
},
                        content:function (){
player.removeSkill('超越天堂攻');
                game.log(player,'超越天堂效果消失');
},
                    },
                    "2222":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
player.storage.超越天堂攻-=1;
player.syncStorage('超越天堂攻');
},
                    },
                    "3333":{
                        trigger:{
                            player:"damageBegin",
                        },
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.4;
game.log(player,'免疫了40%伤害');
},
                    },
                    "4444":{
                        trigger:{
                            source:"damageBegin",
                        },
                        forced:true,
                        content:function (){
trigger.num+=trigger.num*0.4;
game.log(player,'的伤害提升了40%');    
},
                    },
                },
            },
            "冰灵传奇":{
                marktext:"冰",
                intro:{
                    content:function (storage){
return '<li>当前传奇魂:冰灵传奇'+'<li>受到伤害后对除自己外的所有角色造成0.3点固伤'+'<li>回合末获得一魂'+'<li>每当受到攻击时，每次受到伤害前概率化解对方攻击'+'<li>每次攻击非传奇亚比时伤害+50%'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.冰灵传奇=0;
}
},
                mark:true,
                group:["冰灵传奇_1","冰灵传奇_获得魂","冰灵传奇_伤害加成","冰灵传奇_无效"],
                subSkill:{
                    "1":{
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
            event.players.shift().loseHp(0.3);
            event.redo();
        }
    },
                    },
                    "获得魂":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
player.addSkill('魂')
player.storage.魂+=1;
player.syncStorage('魂');
                game.log(player,'获得一魂');
},
                    },
                    "伤害加成":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
if(event.player.hasSkill('魂')) return false;
return true;
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num*0.5;
},
                    },
                    "无效":{
                        trigger:{
                            player:"damageBegin",
                        },
                        filter:function (event,source){
if(Math.random()>0.2) return false;
return true;
},
                        forced:true,
                        content:function (){
trigger.untrigger();
trigger.finish();
game.log(player,'化解了对方攻击');},
                    },
                },
            },
            "冰灵传奇加":{
                group:["冰灵传奇加_1111","冰灵传奇加_2222"],
                subSkill:{
                    "1111":{
                        trigger:{
                            player:"damageBegin",
                        },
                        forced:true,
                        content:function (){
player.addSkill('冰灵传奇');               
player.storage.冰灵传奇+=1;
player.syncStorage('冰灵传奇');
player.removeSkill('冰灵传奇加');
                game.log(player,'开启了传奇魂：冰灵传奇');
                for(var i=0;i<player.node.marks.childNodes.length;i++){
if(player.node.marks.childNodes[i].name=='冰灵传奇'){
player.node.marks.childNodes[i].setBackgroundImage('extension/奥拉亚比/'+'冰灵传奇'+'.jpg');                         player.node.marks.childNodes[i].innerHTML='';
                     }
                 } 
},
                    },
                    "2222":{
                        trigger:{
                            source:"damageBegin",
                        },
                        forced:true,
                        content:function (){
player.addSkill('冰灵传奇');                 
player.storage.冰灵传奇+=1;
player.syncStorage('冰灵传奇');  
player.removeSkill('冰灵传奇加');
                game.log(player,'开启了传奇魂：冰灵传奇');
                for(var i=0;i<player.node.marks.childNodes.length;i++){
if(player.node.marks.childNodes[i].name=='冰灵传奇'){
player.node.marks.childNodes[i].setBackgroundImage('extension/奥拉亚比/'+'冰灵传奇'+'.jpg');                         player.node.marks.childNodes[i].innerHTML='';
                     }
                 } 
},
                    },
                },
            },
            "冰棺锁":{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                content:function (){
player.recover(trigger.num*0.6);
},
            },
            "千雪千针":{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                content:function (){
player.addSkill('魂');
player.storage.魂+=1;
game.log(player,'获得一魂');        
},
            },
            "冰切":{
                enable:"phaseUse",
                usable:1,
                filterTarget:function (target){
        return true;
    },
                filter:function (event,player){
return player.storage.魂>=3;
},
                content:function (){
player.storage.魂-=3; 
player.syncStorage('魂');        
target.addSkill('冰切防');        
target.storage.冰切防+=3;
target.syncStorage('冰切防');        
game.log(player,'消耗三魂并令对方受到伤害提升100%，持续3回合');
},
                ai:{
                    order:1,
                    result:{
                        player:function (player){
            return  player.hp-0;
             },
                        target:function (player,target){
                var eff=ai.get.damageEffect(target,player);
                if(eff>=0) return 1+eff;
                var value=0,i;
                var cards=player.get('h');
                for(i=0;i<cards.length;i++){
                    value+=ai.get.value(cards[i]);
                }
                value/=player.num('h');
                if(target.hp==1) return Math.min(0,value-7);
                return Math.min(0,value-5);
            },
                    },
                    threaten:1.5,
                },
            },
            "冰切防":{
                marktext:"切",
                intro:{
                    content:function (storage){
return '离冰切效果消失还有'+storage+'个回合'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.冰切防=0;
}
},
                mark:true,
                group:["冰切防_1111","冰切防_2222","冰切防_3333"],
                subSkill:{
                    "1111":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.storage.冰切防<=0;
},
                        content:function (){
player.removeSkill('冰切防');
                game.log(player,'冰切效果消失');
},
                    },
                    "2222":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
player.storage.冰切防-=1;
player.syncStorage('冰切防');
},
                    },
                    "3333":{
                        trigger:{
                            player:"damageBegin",
                        },
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
game.log(player,'受到的伤害加深了100%');
},
                    },
                },
            },
            "奥拉BOSS":{
                mode:["boss"],
                unique:true,
                trigger:{
                    global:"gameStart",
                },
                forced:true,
                content:function (){
player.maxHp+=2;
player.recover(2);        
},
            },
            "禅":{
                enable:"phaseUse",
                usable:1,
                filterTarget:function (target){
        return true;
    },
                content:function (){
target.damage();
target.turnOver();
target.addSkill('束缚');
target.storage.束缚+=5;
target.syncStorage('束缚');
game.log(target,'被束缚五回合');
game.log(target,'无法行动一回合');
player.removeSkill('禅');       
},
                ai:{
                    order:1,
                    result:{
                        player:function (player){
            return  player.hp-0;
             },
                        target:function (player,target){
                var eff=ai.get.damageEffect(target,player);
                if(eff>=0) return 1+eff;
                var value=0,i;
                var cards=player.get('h');
                for(i=0;i<cards.length;i++){
                    value+=ai.get.value(cards[i]);
                }
                value/=player.num('h');
                if(target.hp==1) return Math.min(0,value-7);
                return Math.min(0,value-5);
            },
                    },
                    threaten:1.5,
                },
            },
            "源龙神光咒":{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                content:function (){
"step 1"
if(Math.random()>0.25){
trigger.num+=0.35;
game.log(player,'威力增加0.35');};
"step 2"
if(Math.random()>0.15){
trigger.num+=0.35;
game.log(player,'威力增加0.35');};
"step 3"
if(Math.random()>0.1){
trigger.num+=0.35;
game.log(player,'威力增加0.35');};
"step 4"
if(Math.random()>0.05){
trigger.num+=0.35;
game.log(player,'威力增加0.35');};
},
            },
            "魂源龙吟":{
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                filter:function (event,player){
if(Math.random()>1/5) return false;
return true;
},
                content:function (){
trigger.player.turnOver();
trigger.player.addSkill('束缚');
trigger.player.storage.束缚+=3;
trigger.player.syncStorage('束缚');
game.log(trigger.player,'被束缚三回合');
game.log(trigger.player,'无法行动一回合');
},
            },
            "源灵吸收":{
                enable:"phaseUse",
                usable:1,
                content:function (){
player.storage.攻击等级+=1;
player.syncStorage('攻击等级');
player.storage.防御等级+=1;
player.syncStorage('防御等级');
player.storage.速度等级+=1;
player.syncStorage('速度等级');
game.log(player,'提升攻击，防御和速度一级'); 
player.loseHp(0.5);
},
                ai:{
                    order:9,
                    result:{
                        player:function (player){
                return  player.hp-2;
            },
                    },
                    threaten:1.5,
                },
            },
            "传奇聚灵破":{
                enable:"phaseUse",
                usable:1,
                filterTarget:function (target){
        return true;
    },
                filter:function (event,player){
return player.storage.魂>=5;
},
                content:function (){
player.storage.魂-=5;
target.damage(0.6);
target.storage.攻击等级-=2;
target.syncStorage('攻击等级');
target.storage.防御等级-=2;
target.syncStorage('防御等级');
target.storage.闪避等级-=2;
target.syncStorage('闪避等级');
target.storage.暴击等级-=2;
target.syncStorage('暴击等级');
target.storage.速度等级-=2;
target.syncStorage('速度等级'); 
game.log(player,'消耗了五魂并降低对方全属性两级');        
},
                ai:{
                    order:1,
                    result:{
                        player:function (player){
            return  player.hp-0;
             },
                        target:function (player,target){
                var eff=ai.get.damageEffect(target,player);
                if(eff>=0) return 1+eff;
                var value=0,i;
                var cards=player.get('h');
                for(i=0;i<cards.length;i++){
                    value+=ai.get.value(cards[i]);
                }
                value/=player.num('h');
                if(target.hp==1) return Math.min(0,value-7);
                return Math.min(0,value-5);
            },
                    },
                    threaten:1.5,
                },
            },
            "无尽之镜":{
                enable:"phaseUse",
                usable:1,
                filterTarget:function (target){
        return true;
    },
                content:function (){
target.addSkill('无镜');        
target.storage.无镜+=1;
target.syncStorage('无镜');
        game.log(target,'一个回合内增加80%抗性');
        player.loseHp(1);
},
                ai:{
                    order:9,
                    result:{
                        player:function (player){
                return  player.hp-1;
            },
                        target:function (player,target){
                if(target.hp==1) return 5;
                if(player==target&&player.num('h')>player.hp) return 5;
                return 2;
            },
                    },
                    threaten:1.5,
                },
            },
            "无镜":{
                marktext:"镜",
                intro:{
                    content:function (storage){
return '离无尽之镜效果消失还有'+storage+'个回合'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.无镜=0;
}
},
                mark:true,
                group:["无镜_1111","无镜_2222","无镜_3333"],
                subSkill:{
                    "1111":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.storage.无镜<=0;
},
                        content:function (){
player.removeSkill('无镜');
                game.log(player,'无尽之镜效果消失');
},
                    },
                    "2222":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
player.storage.无镜-=1;
player.syncStorage('无镜');
},
                    },
                    "3333":{
                        trigger:{
                            player:"damageBegin",
                        },
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.8;
                game.log(player,'免疫了80%伤害');
},
                    },
                },
            },
            "雪佑":{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                content:function (){
player.addSkill('魂');
player.storage.魂+=2;
player.recover(player.maxHp/5)        
game.log(player,'获得两魂');        
},
            },
            "雪灵圣甲加":{
                group:["雪灵圣甲加_1111","雪灵圣甲加_2222"],
                subSkill:{
                    "1111":{
                        trigger:{
                            player:"damageBegin",
                        },
                        forced:true,
                        content:function (){
player.addSkill('雪灵圣甲');
player.storage.雪灵圣甲+=1;
player.syncStorage('雪灵圣甲');
player.removeSkill('雪灵圣甲加');
player.addSkill('魂');
player.storage.魂+=3;
player.syncStorage('魂');                
                game.log(player,'开启了传奇魂：雪灵圣甲并获得三魂');
                for(var i=0;i<player.node.marks.childNodes.length;i++){
if(player.node.marks.childNodes[i].name=='雪灵圣甲'){
player.node.marks.childNodes[i].setBackgroundImage('extension/奥拉亚比/'+'雪灵圣甲'+'.jpg');                         player.node.marks.childNodes[i].innerHTML='';
                     }
                 } 
},
                    },
                    "2222":{
                        trigger:{
                            source:"damageBegin",
                        },
                        forced:true,
                        content:function (){
player.addSkill('雪灵圣甲');
player.storage.雪灵圣甲+=1;
player.syncStorage('雪灵圣甲');  
player.removeSkill('雪灵圣甲加');
player.addSkill('魂');
player.storage.魂+=3;
player.syncStorage('魂');                 
                game.log(player,'开启了传奇魂：雪灵圣甲并获得三魂');
                for(var i=0;i<player.node.marks.childNodes.length;i++){
if(player.node.marks.childNodes[i].name=='雪灵圣甲'){
player.node.marks.childNodes[i].setBackgroundImage('extension/奥拉亚比/'+'雪灵圣甲'+'.jpg');                         player.node.marks.childNodes[i].innerHTML='';
                     }
                 } 
},
                    },
                },
            },
            "雪灵圣甲":{
                marktext:"雪",
                intro:{
                    content:function (storage){
return '<li>当前传奇魂:雪灵圣甲'+'<li>每次受到伤害时，伤害概率-0.3'+'<li>回合末获得一魂'+'<li>每当受到攻击时，每次受到伤害前概率化解对方攻击'+'<li>每次攻击非传奇亚比时伤害+50%'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.雪灵圣甲=0;
}
},
                mark:true,
                group:["雪灵圣甲_主体","雪灵圣甲_获得魂","雪灵圣甲_伤害加成","雪灵圣甲_无效"],
                subSkill:{
                    "主体":{
                        trigger:{
                            player:"damageBegin",
                        },
                        forced:true,
                        filter:function (event,player){
if(Math.random()>0.45) return false;
return true;
},
                        content:function (){
trigger.num-=0.3;
game.log(player,'受到的伤害-0.3');    
},
                    },
                    "获得魂":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
player.addSkill('魂')
player.storage.魂+=1;
player.syncStorage('魂');
                game.log(player,'获得一魂');
},
                    },
                    "伤害加成":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
if(event.player.hasSkill('魂')) return false;
return true;
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num*0.5;
},
                    },
                    "无效":{
                        trigger:{
                            player:"damageBegin",
                        },
                        filter:function (event,source){
if(Math.random()>0.1) return false;
return true;
},
                        forced:true,
                        content:function (){
trigger.untrigger();
trigger.finish();
game.log(player,'化解了对方攻击');},
                    },
                },
            },
            "雪无之威":{
                global:"雪无之威_1",
                subSkill:{
                    "1":{
                        trigger:{
                            player:"phaseBegin",
                        },
                        filter:function (event,player){
if(event.player.hasSkill('雪无之威')) return false;
return true;
},
                        forced:true,
                        content:function (){
if(Math.random()>0.65){
player.storage.攻击等级-=1;
player.syncStorage('攻击等级');
player.storage.防御等级-=1;
player.syncStorage('防御等级');
player.storage.闪避等级-=1;
player.syncStorage('闪避等级');
player.storage.暴击等级-=1;
player.syncStorage('暴击等级');
player.storage.速度等级-=1;
player.syncStorage('速度等级');
game.log(player,'降低全属性一级');
};    
            },
                    },
                },
            },
            "逆水寒加":{
                group:["逆水寒加_1111","逆水寒加_2222"],
                subSkill:{
                    "1111":{
                        trigger:{
                            player:"damageBegin",
                        },
                        forced:true,
                        content:function (){
player.addSkill('逆水寒');
player.storage.逆水寒+=1;
player.syncStorage('逆水寒');
player.removeSkill('逆水寒加');
player.addSkill('雪无之威');                
                game.log(player,'开启了传奇魂：逆水寒');
                for(var i=0;i<player.node.marks.childNodes.length;i++){
if(player.node.marks.childNodes[i].name=='逆水寒'){
player.node.marks.childNodes[i].setBackgroundImage('extension/奥拉亚比/'+'逆水寒'+'.jpg');                         player.node.marks.childNodes[i].innerHTML='';
                     }
                 } 
},
                    },
                    "2222":{
                        trigger:{
                            source:"damageBegin",
                        },
                        forced:true,
                        content:function (){
player.addSkill('逆水寒');
player.storage.逆水寒+=1;
player.syncStorage('逆水寒');  
player.removeSkill('逆水寒加');
player.addSkill('雪无之威');                 
                game.log(player,'开启了传奇魂：逆水寒');
                for(var i=0;i<player.node.marks.childNodes.length;i++){
if(player.node.marks.childNodes[i].name=='逆水寒'){
player.node.marks.childNodes[i].setBackgroundImage('extension/奥拉亚比/'+'逆水寒'+'.jpg');                         player.node.marks.childNodes[i].innerHTML='';
                     }
                 } 
},
                    },
                },
            },
            "逆水寒":{
                marktext:"逆",
                intro:{
                    content:function (storage){
return '<li>当前传奇魂:逆水寒'+'<li>除拥有逆水寒的角色外，每个角色的回合开始阶段，65%全属性下降一级'+'<li>回合末获得一魂'+'<li>每当受到攻击时，每次受到伤害前概率化解对方攻击'+'<li>每次攻击非传奇亚比时伤害+50%'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.逆水寒=0;
}
},
                mark:true,
                group:["逆水寒_获得魂","逆水寒_伤害加成","逆水寒_无效"],
                subSkill:{
                    "获得魂":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
player.addSkill('魂')
player.storage.魂+=1;
player.syncStorage('魂');
                game.log(player,'获得一魂');
},
                    },
                    "伤害加成":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
if(event.player.hasSkill('魂')) return false;
return true;
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num*0.5;
},
                    },
                    "无效":{
                        trigger:{
                            player:"damageBegin",
                        },
                        filter:function (event,source){
if(Math.random()>0.1) return false;
return true;
},
                        forced:true,
                        content:function (){
trigger.untrigger();
trigger.finish();
game.log(player,'化解了对方攻击');},
                    },
                },
            },
            "寒灵瞬杀":{
                enable:"phaseUse",
                usable:1,
                filterTarget:function (target){
        return true;
    },
                filter:function (event,player){
return player.storage.魂>=5;
},
                content:function (){
player.storage.魂-=5;
target.damage(1);
target.turnOver();        
game.log(player,'消耗了五魂');
game.log(target,'害怕了');        
},
                ai:{
                    order:1,
                    result:{
                        player:function (player){
            return  player.hp-0;
             },
                        target:function (player,target){
                var eff=ai.get.damageEffect(target,player);
                if(eff>=0) return 1+eff;
                var value=0,i;
                var cards=player.get('h');
                for(i=0;i<cards.length;i++){
                    value+=ai.get.value(cards[i]);
                }
                value/=player.num('h');
                if(target.hp==1) return Math.min(0,value-7);
                return Math.min(0,value-5);
            },
                    },
                    threaten:1.5,
                },
            },
            "缓灵术":{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                content:function (){
player.addSkill('魂');
player.storage.魂+=1;
player.syncStorage('魂');
trigger.player.storage.魂-=1;
trigger.player.syncStorage('魂');                
game.log(player,'获得一魂');
game.log(trigger.player,'失去一魂');        
},
            },
            "冰魄摄魂":{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                content:function (){
player.storage.闪避等级+=1;
player.syncStorage('闪避等级');
game.log(player,'提升闪避一级'); 
},
            },
            "传奇·阴域":{
                global:"传奇·阴域_1",
                subSkill:{
                    "1":{
                        trigger:{
                            player:"phaseBegin",
                        },
                        filter:function (event,player){
if(event.player.hasSkill('传奇·阴域')) return false;
return true;
},
                        forced:true,
                        content:function (){
player.loseHp(0.5);
            },
                    },
                },
            },
            "阴加":{
                group:["阴加_1111","阴加_2222"],
                subSkill:{
                    "1111":{
                        trigger:{
                            player:"damageBegin",
                        },
                        forced:true,
                        content:function (){
player.addSkill('阴');
player.storage.阴+=1;
player.syncStorage('阴');
player.removeSkill('阴加');
player.addSkill('传奇·阴域');                
                game.log(player,'开启了传奇魂：阴');
                for(var i=0;i<player.node.marks.childNodes.length;i++){
if(player.node.marks.childNodes[i].name=='阴'){
player.node.marks.childNodes[i].setBackgroundImage('extension/奥拉亚比/'+'阴'+'.jpg');                         player.node.marks.childNodes[i].innerHTML='';
                     }
                 } 
},
                    },
                    "2222":{
                        trigger:{
                            source:"damageBegin",
                        },
                        forced:true,
                        content:function (){
player.addSkill('阴');
player.storage.阴+=1;
player.syncStorage('阴');  
player.removeSkill('阴加');
player.addSkill('传奇·阴域');                
                game.log(player,'开启了传奇魂：阴');
                for(var i=0;i<player.node.marks.childNodes.length;i++){
if(player.node.marks.childNodes[i].name=='阴'){
player.node.marks.childNodes[i].setBackgroundImage('extension/奥拉亚比/'+'阴'+'.jpg');                         player.node.marks.childNodes[i].innerHTML='';
                     }
                 } 
},
                    },
                },
            },
            "阴":{
                marktext:"阴",
                intro:{
                    content:function (storage){
return '<li>当前传奇魂:阴'+'<li>每个角色于回合开始阶段流失0.5点体力'+'<li>回合末获得一魂'+'<li>每当受到攻击时，每次受到伤害前概率化解对方攻击'+'<li>每次攻击非传奇亚比时伤害+50%'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.阴=0;
}
},
                mark:true,
                group:["阴_获得魂","阴_伤害加成","阴_无效"],
                subSkill:{
                    "获得魂":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
player.addSkill('魂')
player.storage.魂+=1;
player.syncStorage('魂');
                game.log(player,'获得一魂');
},
                    },
                    "伤害加成":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
if(event.player.hasSkill('魂')) return false;
return true;
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num*0.5;
},
                    },
                    "无效":{
                        trigger:{
                            player:"damageBegin",
                        },
                        filter:function (event,source){
if(Math.random()>0.1) return false;
return true;
},
                        forced:true,
                        content:function (){
trigger.untrigger();
trigger.finish();
game.log(player,'化解了对方攻击');},
                    },
                },
            },
            "暗斩":{
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event,source){
return event.player.storage.防御等级<=-6;
},
                forced:true,
                content:function (){
trigger.player.loseHp(9999);
game.log(trigger.player,'被秒杀了')        
},
            },
            "八卦极阴咒":{
                enable:"phaseUse",
                usable:1,
                filterTarget:function (target){
        return true;
    },
                filter:function (event,player){
return player.storage.魂>=5;
},
                content:function (){
player.storage.魂-=5;
target.damage();
target.storage.防御等级-=3;
target.syncStorage('防御等级');        
game.log(player,'消耗了五魂');
game.log(target,'防御等级降低了三级');        
},
                ai:{
                    order:1,
                    result:{
                        player:function (player){
            return  player.hp-0;
             },
                        target:function (player,target){
                var eff=ai.get.damageEffect(target,player);
                if(eff>=0) return 1+eff;
                var value=0,i;
                var cards=player.get('h');
                for(i=0;i<cards.length;i++){
                    value+=ai.get.value(cards[i]);
                }
                value/=player.num('h');
                if(target.hp==1) return Math.min(0,value-7);
                return Math.min(0,value-5);
            },
                    },
                    threaten:1.5,
                },
            },
            "天道阳护":{
                enable:"phaseUse",
                usable:1,
                filterTarget:function (target){
        return true;
    },
                filter:function (event,player){
return player.storage.魂>=1;
},
                content:function (){
player.storage.魂-1;
player.syncStorage('魂');        
target.addSkill('阳护');        
target.storage.阳护+=5;
target.syncStorage('阳护');
game.log(target,'获得五回合天道阳护效果');
game.log(player,'消耗一魂');
    },
                ai:{
                    order:9,
                    result:{
                        player:function (player){
                return  player.hp-0;
            },
                        target:function (player,target){
                if(target.hp==1) return 5;
                if(player==target&&player.num('h')>player.hp) return 5;
                return 2;
            },
                    },
                    threaten:1.5,
                },
            },
            "阳护":{
                marktext:"阳",
                intro:{
                    content:function (storage){
return '离天道阳护效果消失还有'+storage+'个回合'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.阳护=0;
}
},
                mark:true,
                group:["阳护_1111","阳护_2222","阳护_3333"],
                subSkill:{
                    "1111":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.storage.阳护<=0;
},
                        content:function (){
player.removeSkill('阳护');
                game.log(player,'天道阳护效果消失');
},
                    },
                    "2222":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
player.storage.阳护-=1;
player.syncStorage('阳护');
},
                    },
                    "3333":{
                        trigger:{
                            player:"damageEnd",
                        },
                        forced:true,
                        content:function (){
player.recover(player.maxHp*0.15);
},
                    },
                },
            },
            "阳加":{
                group:["阳加_1111","阳加_2222"],
                subSkill:{
                    "1111":{
                        trigger:{
                            player:"damageBegin",
                        },
                        forced:true,
                        content:function (){
player.addSkill('阳');
player.storage.阳+=1;
player.syncStorage('阳');
player.removeSkill('阳加');
                game.log(player,'开启了传奇魂：阳');
                for(var i=0;i<player.node.marks.childNodes.length;i++){
if(player.node.marks.childNodes[i].name=='阳'){
player.node.marks.childNodes[i].setBackgroundImage('extension/奥拉亚比/'+'阳'+'.jpg');                         player.node.marks.childNodes[i].innerHTML='';
                     }
                 } 
},
                    },
                    "2222":{
                        trigger:{
                            source:"damageBegin",
                        },
                        forced:true,
                        content:function (){
player.addSkill('阳');
player.storage.阳+=1;
player.syncStorage('阳');  
player.removeSkill('阳加');
                game.log(player,'开启了传奇魂：阳');
                for(var i=0;i<player.node.marks.childNodes.length;i++){
if(player.node.marks.childNodes[i].name=='阳'){
player.node.marks.childNodes[i].setBackgroundImage('extension/奥拉亚比/'+'阳'+'.jpg');                         player.node.marks.childNodes[i].innerHTML='';
                     }
                 } 
},
                    },
                },
            },
            "阳":{
                marktext:"阳",
                intro:{
                    content:function (storage){
return '<li>当前传奇魂:阳'+'<li>回合开始阶段回复自身0.5点体力'+'<li>回合末获得一魂'+'<li>每当受到攻击时，每次受到伤害前概率化解对方攻击'+'<li>每次攻击非传奇亚比时伤害+50%'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.阳=0;
}
},
                mark:true,
                group:["阳_主体","阳_获得魂","阳_伤害加成","阳_无效"],
                subSkill:{
                    "主体":{
                        trigger:{
                            player:"phaseBegin",
                        },
                        forced:true,
                        content:function (){
player.recover(0.5);               
},
                    },
                    "获得魂":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
player.addSkill('魂')
player.storage.魂+=1;
player.syncStorage('魂');
game.log(player,'获得一魂');                
},
                    },
                    "伤害加成":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
if(event.player.hasSkill('魂')) return false;
return true;
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num*0.5;
},
                    },
                    "无效":{
                        trigger:{
                            player:"damageBegin",
                        },
                        filter:function (event,source){
if(Math.random()>0.15) return false;
return true;
},
                        forced:true,
                        content:function (){
trigger.untrigger();
trigger.finish();
game.log(player,'化解了对方攻击');                
},
                    },
                },
            },
            "光轮":{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                content:function (){
player.addSkill('魂');        
player.storage.魂+=1;
player.syncStorage('魂');        
player.storage.攻击等级+=1;
player.syncStorage('攻击等级');
player.storage.暴击等级+=1;
player.syncStorage('暴击等级');
game.log(player,'获得一魂');        
game.log(player,'提升攻击和暴击一级'); 
},
            },
            "天道阳守":{
                enable:"phaseUse",
                usable:1,
                filterTarget:function (target){
        return true;
    },
                filter:function (event,player){
return player.storage.魂>=1;
},
                content:function (){
player.storage.魂-1;
player.syncStorage('魂');        
target.addSkill('阳守');        
target.storage.阳守+=5;
target.syncStorage('阳守');
game.log(target,'获得五回合天道阳守效果');
game.log(player,'消耗一魂');
    },
                ai:{
                    order:9,
                    result:{
                        player:function (player){
                return  player.hp-0;
            },
                        target:function (player,target){
                if(target.hp==1) return 5;
                if(player==target&&player.num('h')>player.hp) return 5;
                return 2;
            },
                    },
                    threaten:1.5,
                },
            },
            "阳守":{
                marktext:"阳",
                intro:{
                    content:function (storage){
return '离天道阳守效果消失还有'+storage+'个回合'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.阳守=0;
}
},
                mark:true,
                group:["阳守_1111","阳守_2222","阳守_3333"],
                subSkill:{
                    "1111":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.storage.阳守<=0;
},
                        content:function (){
player.removeSkill('阳守');
                game.log(player,'天道阳守效果消失');
},
                    },
                    "2222":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
player.storage.阳守-=1;
player.syncStorage('阳守');
},
                    },
                    "3333":{
                        trigger:{
                            player:"damageBegin",
                        },
                        forced:true,
                        content:function (){
trigger.num-=trigger.num*0.3;
game.log(player,'免疫了30%伤害');
},
                    },
                },
            },
            "八卦纯阳术":{
                enable:"phaseUse",
                usable:1,
                filterTarget:function (target){
        return true;
    },
                filter:function (event,player){
return player.storage.魂>=5;
},
                content:function (){
player.storage.魂-=5;
target.recover(5);
game.log(player,'消耗了五魂');
},
                ai:{
                    order:9,
                    result:{
                        player:function (player){
                return  player.hp-0;
            },
                        target:function (player,target){
                if(target.hp==1) return 5;
                if(player==target&&player.num('h')>player.hp) return 5;
                return 2;
            },
                    },
                    threaten:1.5,
                },
            },
            mi:{
                enable:"phaseUse",
                usable:1,
                filterTarget:function (target){
        return true;
    },
                content:function (){
target.recover(target.maxHp*0.5);        
player.addSkill('沐心');        
player.storage.沐心+=4;
player.syncStorage('沐心');
game.log(player,'获得四回合春沐之心效果');
player.turnOver();
game.log(player,'停止行动一回合');        
},
                ai:{
                    order:9,
                    result:{
                        player:function (player){
                return  player.hp-0;
            },
                        target:function (player,target){
                if(target.hp==1) return 5;
                if(player==target&&player.num('h')>player.hp) return 5;
                return 2;
            },
                    },
                    threaten:1.5,
                },
            },
            "复苏":{
                group:["复苏_攻击","复苏_克制"],
                subSkill:{
                    "攻击":{
                        trigger:{
                            source:"damageBegin",
                        },
                        forced:true,
                        content:function (){
player.addSkill('魂');
player.storage.魂+=1;
player.syncStorage('魂');  
game.log(player,'获得一魂');
trigger.player.storage.防御等级-=2;
trigger.player.syncStorage('防御等级');
game.log(trigger.player,'防御下降两级');                
},
                    },
                    "克制":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
return event.player.hasSkill('超火系');
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num;
game.log(player,'强大的木系力量令狂躁的火焰平静下来');                
},
                    },
                },
            },
            "林踪迷魂诀":{
                enable:"phaseUse",
                usable:1,
                filterTarget:function (target){
        return true;
    },
                filter:function (event,player){
return player.storage.魂>=5;
},
                content:function (){
player.storage.魂-=5;
target.damage();
target.addSkill('中毒');
target.storage.中毒+=5;
target.syncStorage('中毒');
game.log(target,'被中毒五回合');         
game.log(player,'消耗了五魂');
},
                ai:{
                    order:1,
                    result:{
                        player:function (player){
            return  player.hp-0;
             },
                        target:function (player,target){
                var eff=ai.get.damageEffect(target,player);
                if(eff>=0) return 1+eff;
                var value=0,i;
                var cards=player.get('h');
                for(i=0;i<cards.length;i++){
                    value+=ai.get.value(cards[i]);
                }
                value/=player.num('h');
                if(target.hp==1) return Math.min(0,value-7);
                return Math.min(0,value-5);
            },
                    },
                    threaten:1.5,
                },
            },
            "森罗之魂加":{
                group:["森罗之魂加_1111","森罗之魂加_2222"],
                subSkill:{
                    "1111":{
                        trigger:{
                            player:"damageBegin",
                        },
                        forced:true,
                        content:function (){
player.addSkill('森罗之魂');
player.storage.森罗之魂+=1;
player.syncStorage('森罗之魂');
player.removeSkill('森罗之魂加');
                game.log(player,'开启了传奇魂：森罗之魂');
                for(var i=0;i<player.node.marks.childNodes.length;i++){
if(player.node.marks.childNodes[i].name=='森罗之魂'){
player.node.marks.childNodes[i].setBackgroundImage('extension/奥拉亚比/'+'森罗之魂'+'.jpg');                         player.node.marks.childNodes[i].innerHTML='';
                     }
                 } 
},
                    },
                    "2222":{
                        trigger:{
                            source:"damageBegin",
                        },
                        forced:true,
                        content:function (){
player.addSkill('森罗之魂');
player.storage.森罗之魂+=1;
player.syncStorage('森罗之魂');  
player.removeSkill('森罗之魂加');
                game.log(player,'开启了传奇魂：森罗之魂');
                for(var i=0;i<player.node.marks.childNodes.length;i++){
if(player.node.marks.childNodes[i].name=='森罗之魂'){
player.node.marks.childNodes[i].setBackgroundImage('extension/奥拉亚比/'+'森罗之魂'+'.jpg');                         player.node.marks.childNodes[i].innerHTML='';
                     }
                 } 
},
                    },
                },
            },
            "森罗之魂":{
                marktext:"森",
                intro:{
                    content:function (storage){
return '<li>当前传奇魂:森罗之魂'+'<li>回合末获得一魂'+'<li>每当受到攻击时，每次受到伤害前概率化解对方攻击'+'<li>每次攻击非传奇亚比时伤害+50%'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.森罗之魂=0;
}
},
                mark:true,
                group:["森罗之魂_获得魂","森罗之魂_伤害加成","森罗之魂_无效"],
                subSkill:{
                    "获得魂":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
player.addSkill('魂')
player.storage.魂+=1;
player.syncStorage('魂');
game.log(player,'获得一魂');
},
                    },
                    "伤害加成":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
if(event.player.hasSkill('魂')) return false;
return true;
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num*0.5;
},
                    },
                    "无效":{
                        trigger:{
                            player:"damageBegin",
                        },
                        filter:function (event,source){
if(Math.random()>0.1) return false;
return true;
},
                        forced:true,
                        content:function (){
trigger.untrigger();
trigger.finish();
game.log(player,'化解了对方攻击');},
                    },
                },
            },
            "沐心":{
                marktext:"心",
                intro:{
                    content:function (storage){
return '离沐春之心效果消失还有'+storage+'个回合'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.沐心=0;
}
},
                mark:true,
                group:["沐心_1111","沐心_2222","沐心_3333"],
                subSkill:{
                    "1111":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.storage.沐心<=0;
},
                        content:function (){
player.removeSkill('沐心');
                game.log(player,'沐春之心效果消失');
},
                    },
                    "2222":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
player.storage.沐心-=1;
player.syncStorage('沐心');
},
                    },
                    "3333":{
                        trigger:{
                            player:"damageEnd",
                        },
                        forced:true,
                        content:function (){
player.recover(player.maxHp*0.2);
},
                    },
                },
            },
            "阴阳归墟":{
                trigger:{
                    player:["damageBefore","loseMaxHpBefore"],
                },
                forced:true,
                unique:true,
                priority:null,
                content:function (){
        trigger.untrigger();
        trigger.finish();
game.log(player,'平衡了对方伤害')        
player.say('阴阳平衡！')        
    },
            },
            "临·极":{
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                content:function (){
player.loseHp();
player.say('我的能力....在....消退....')        
},
            },
            "燃烧之心":{
                trigger:{
                    player:"damageEnd",
                },
                forced:true,
                filter:function (event,player){
        if(Math.random()>0.65) return false;
return true;
    },
                content:function (){
trigger.source.storage.防御等级-=1;
trigger.source.syncStorage('防御等级');
trigger.source.storage.闪避等级-=1;
trigger.source.syncStorage('闪避等级');        
game.log(trigger.source,'防御和闪避下降一级'); 
    },
            },
            "焚天":{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                content:function (){
player.storage.攻击等级+=1;
player.syncStorage('攻击等级');
player.storage.暴击等级+=1;
player.syncStorage('暴击等级');
game.log(player,'提升攻击和暴击一级'); 
},
            },
            "戮火净魂刃":{
                enable:"phaseUse",
                usable:1,
                filterTarget:function (target){
        return true;
    },
                filter:function (event,player){
return player.storage.魂>=5;
},
                content:function (){
"step 1"
player.storage.魂-=5;
player.syncStorage('魂');
target.damage();
target.addSkill('烧伤');
target.storage.烧伤+=6;
target.syncStorage('烧伤');
game.log(target,'被烧伤六回合'); 
},
                ai:{
                    order:1,
                    result:{
                        player:function (player){
            return  player.hp-0;
             },
                        target:function (player,target){
                var eff=ai.get.damageEffect(target,player);
                if(eff>=0) return 1+eff;
                var value=0,i;
                var cards=player.get('h');
                for(i=0;i<cards.length;i++){
                    value+=ai.get.value(cards[i]);
                }
                value/=player.num('h');
                if(target.hp==1) return Math.min(0,value-7);
                return Math.min(0,value-5);
            },
                    },
                    threaten:1.5,
                },
            },
            "灵焰之魂加":{
                group:["灵焰之魂加_1111","灵焰之魂加_2222"],
                subSkill:{
                    "1111":{
                        trigger:{
                            player:"damageBegin",
                        },
                        forced:true,
                        content:function (){
player.addSkill('灵焰');                
player.addSkill('灵焰之魂');
player.storage.灵焰之魂+=1;
player.syncStorage('灵焰之魂');
player.removeSkill('灵焰之魂加');
                game.log(player,'开启了传奇魂：灵焰之魂');
                for(var i=0;i<player.node.marks.childNodes.length;i++){
if(player.node.marks.childNodes[i].name=='灵焰之魂'){
player.node.marks.childNodes[i].setBackgroundImage('extension/奥拉亚比/'+'灵焰之魂'+'.jpg');                         player.node.marks.childNodes[i].innerHTML='';
                     }
                 } 
},
                    },
                    "2222":{
                        trigger:{
                            source:"damageBegin",
                        },
                        forced:true,
                        content:function (){
player.addSkill('灵焰');                
player.addSkill('灵焰之魂');
player.storage.灵焰之魂+=1;
player.syncStorage('灵焰之魂');  
player.removeSkill('灵焰之魂加');
                game.log(player,'开启了传奇魂：灵焰之魂');
                for(var i=0;i<player.node.marks.childNodes.length;i++){
if(player.node.marks.childNodes[i].name=='灵焰之魂'){
player.node.marks.childNodes[i].setBackgroundImage('extension/奥拉亚比/'+'灵焰之魂'+'.jpg');                         player.node.marks.childNodes[i].innerHTML='';
                     }
                 } 
},
                    },
                },
            },
            "灵焰之魂":{
                marktext:"灵",
                intro:{
                    content:function (storage){
return '<li>当前传奇魂:灵焰之魂'+'<li>每个角色的回合开始阶段，全场烧伤角色流失一点体力'+'<li>回合末获得一魂'+'<li>每当受到攻击时，每次受到伤害前概率化解对方攻击'+'<li>每次攻击非传奇亚比时伤害+50%'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.灵焰之魂=0;
}
},
                mark:true,
                group:["灵焰之魂_获得魂","灵焰之魂_伤害加成","灵焰之魂_无效"],
                subSkill:{
                    "获得魂":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
player.addSkill('魂')
player.storage.魂+=1;
player.syncStorage('魂');
                game.log(player,'获得一魂');
},
                    },
                    "伤害加成":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
if(event.player.hasSkill('魂')) return false;
return true;
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num*0.5;
},
                    },
                    "无效":{
                        trigger:{
                            player:"damageBegin",
                        },
                        filter:function (event,source){
if(Math.random()>0.1) return false;
return true;
},
                        forced:true,
                        content:function (){
trigger.untrigger();
trigger.finish();
game.log(player,'化解了对方攻击');},
                    },
                },
            },
            "灵焰":{
                global:"灵焰_1",
                subSkill:{
                    "1":{
                        trigger:{
                            player:"phaseBegin",
                        },
                        filter:function (event,player){
if(event.player.hasSkill('烧伤')) return true;
},
                        forced:true,
                        content:function (){
player.loseHp();
game.log('传奇波鲁使火焰燃烧得更加猛烈了')                
            },
                    },
                },
            },
            "纯净之心":{
                enable:"phaseUse",
                usable:1,
                filterTarget:function (target){
        return true;
    },
                content:function (){
target.removeSkill('烧伤');
target.removeSkill('冻伤');
target.removeSkill('麻痹');        
target.removeSkill('中毒');        
target.removeSkill('诅咒');        
target.removeSkill('衰弱');
target.removeSkill('束缚');        
game.log(target,'清除了异常状态'); 
},
                ai:{
                    order:9,
                    result:{
                        player:function (player){
                return  player.hp-0;
            },
                        target:function (player,target){
                if(target.hp==1) return 5;
                if(player==target&&player.num('h')>player.hp) return 5;
                return 2;
            },
                    },
                    threaten:1.5,
                },
            },
            "湮没":{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                content:function (){
player.addSkill('魂');
player.storage.魂+=1;
player.syncStorage('魂');       
player.recover(0.5);
trigger.player.loseHp(0.5);        
game.log(player,'获得一魂');        
},
            },
            "深洋超魂咒":{
                enable:"phaseUse",
                usable:1,
                filterTarget:function (target){
        return true;
    },
                filter:function (event,player){
return player.storage.魂>=5;
},
                content:function (){
"step 1"
player.storage.魂-=5;
player.syncStorage('魂');
target.damage();
target.addSkill('衰弱');
target.storage.衰弱+=3;
target.syncStorage('衰弱');
game.log(target,'被衰弱六回合'); 
},
                ai:{
                    order:1,
                    result:{
                        player:function (player){
            return  player.hp-0;
             },
                        target:function (player,target){
                var eff=ai.get.damageEffect(target,player);
                if(eff>=0) return 1+eff;
                var value=0,i;
                var cards=player.get('h');
                for(i=0;i<cards.length;i++){
                    value+=ai.get.value(cards[i]);
                }
                value/=player.num('h');
                if(target.hp==1) return Math.min(0,value-7);
                return Math.min(0,value-5);
            },
                    },
                    threaten:1.5,
                },
            },
            "灵涛之魂加":{
                group:["灵涛之魂加_1111","灵涛之魂加_2222"],
                subSkill:{
                    "1111":{
                        trigger:{
                            player:"damageBegin",
                        },
                        forced:true,
                        content:function (){
player.addSkill('灵涛');                
player.addSkill('灵涛之魂');
player.storage.灵涛之魂+=1;
player.syncStorage('灵涛之魂');
player.removeSkill('灵涛之魂加');
                game.log(player,'开启了传奇魂：灵涛之魂');
                for(var i=0;i<player.node.marks.childNodes.length;i++){
if(player.node.marks.childNodes[i].name=='灵涛之魂'){
player.node.marks.childNodes[i].setBackgroundImage('extension/奥拉亚比/'+'灵涛之魂'+'.jpg');                         player.node.marks.childNodes[i].innerHTML='';
                     }
                 } 
},
                    },
                    "2222":{
                        trigger:{
                            source:"damageBegin",
                        },
                        forced:true,
                        content:function (){
player.addSkill('灵涛');                
player.addSkill('灵涛之魂');
player.storage.灵涛之魂+=1;
player.syncStorage('灵涛之魂');  
player.removeSkill('灵涛之魂加');
                game.log(player,'开启了传奇魂：灵涛之魂');
                for(var i=0;i<player.node.marks.childNodes.length;i++){
if(player.node.marks.childNodes[i].name=='灵涛之魂'){
player.node.marks.childNodes[i].setBackgroundImage('extension/奥拉亚比/'+'灵涛之魂'+'.jpg');                         player.node.marks.childNodes[i].innerHTML='';
                     }
                 } 
},
                    },
                },
            },
            "灵涛":{
                global:"灵涛_1",
                subSkill:{
                    "1":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        filter:function (event,player){
if(event.player.hasSkill('超水系')) return true;
},
                        forced:true,
                        content:function (){
player.recover();             
            },
                    },
                },
            },
            "灵涛之魂":{
                marktext:"灵",
                intro:{
                    content:function (storage){
return '<li>当前传奇魂:灵涛之魂'+'<li>每个角色的回合结束阶段，全场超水系亚比回复一点体力'+'<li>回合末获得一魂'+'<li>每当受到攻击时，每次受到伤害前概率化解对方攻击'+'<li>每次攻击非传奇亚比时伤害+50%'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.灵涛之魂=0;
}
},
                mark:true,
                group:["灵涛之魂_获得魂","灵涛之魂_伤害加成","灵涛之魂_无效"],
                subSkill:{
                    "获得魂":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
player.addSkill('魂')
player.storage.魂+=1;
player.syncStorage('魂');
                game.log(player,'获得一魂');
},
                    },
                    "伤害加成":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
if(event.player.hasSkill('魂')) return false;
return true;
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num*0.5;
},
                    },
                    "无效":{
                        trigger:{
                            player:"damageBegin",
                        },
                        filter:function (event,source){
if(Math.random()>0.1) return false;
return true;
},
                        forced:true,
                        content:function (){
trigger.untrigger();
trigger.finish();
game.log(player,'化解了对方攻击');},
                    },
                },
            },
            "十方归一":{
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
return player.storage.魂>=2;
},
                content:function (){
player.storage.魂-=2; 
player.syncStorage('魂');        
player.addSkill('十方');
player.addSkill('归一');        
player.storage.十方+=5; 
player.syncStorage('十方');         
game.log(player,'消耗两魂并在五个回合内每次受到伤害提升30%暂时伤害能力和20%暂时抗性，最多叠加3层。技能效果结束时，暂时伤害能力和抗性消失');
},
                ai:{
                    order:9,
                    result:{
                        player:function (player){
                return  player.hp-0;
            },
                    },
                    threaten:1.5,
                },
            },
            "十方":{
                marktext:"十",
                intro:{
                    content:function (storage){
return '离十方归一效果消失还有'+storage+'个回合'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.十方=0;
}
},
                mark:true,
                group:["十方_1111","十方_2222","十方_3333","十方_4444","十方_5555"],
                subSkill:{
                    "1111":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.storage.十方<=0;
},
                        content:function (){
player.removeSkill('十方');
                game.log(player,'十方归一效果消失');
},
                    },
                    "2222":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
player.storage.十方-=1;
player.syncStorage('十方');
},
                    },
                    "3333":{
                        trigger:{
                            player:"damageBegin",
                        },
                        forced:true,
                        content:function (){
trigger.num-=player.storage.归一*0.2;
player.storage.归一+=1;
player.syncStorage('归一');                 
},
                    },
                    "4444":{
                        trigger:{
                            source:"damageBegin",
                        },
                        forced:true,
                        content:function (){
trigger.num+=player.storage.归一*0.3;               
},
                    },
                    "5555":{
                        trigger:{
                            player:"damageBegin",
                        },
                        filter:function (event,player){
return player.storage.归一>3;
},
                        forced:true,
                        content:function (){
player.storage.归一=3;
player.syncStorage('归一');                 
},
                    },
                },
            },
            "归一":{
                marktext:"归",
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.归一=0;
}
},
                mark:true,
            },
            "测试技能":{
                trigger:{
                    global:"gameStart",
                },
                forced:true,
                content:function (){
        player.addSkill('魂');
player.storage.魂+=9999;
player.syncStorage('魂');
},
            },
            "四象陨道":{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                content:function (){
trigger.player.addSkill('四象印记');    
trigger.num-=1;
trigger.player.loseHp(0.5);    
trigger.player.storage.四象印记+=1;
trigger.player.syncStorage('四象印记');
trigger.player.loseHp(0.5);    
trigger.player.storage.四象印记+=1;
trigger.player.syncStorage('四象印记');       
},
            },
            "四象印记":{
                marktext:"象",
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.四象印记=0;
}
},
                mark:true,
                trigger:{
                    player:"damageBegin",
                },
                filter:function (event,player){
return player.storage.四象印记>=4;
},
                forced:true,
                content:function (){
player.storage.四象印记=0;
player.syncStorage('四象印记');
player.loseHp(player.maxHp*0.7)                
    },
            },
            "阴阳无双破":{
                enable:"phaseUse",
                usable:1,
                filterTarget:function (target){
        return true;
    },
                filter:function (event,player){
return player.storage.魂>=4;
},
                content:function (){
player.storage.魂-=4;
target.damage(1.2);
        game.log(player,'消耗了四魂');
},
                ai:{
                    order:1,
                    result:{
                        player:function (player){
            return  player.hp-0;
             },
                        target:function (player,target){
                var eff=ai.get.damageEffect(target,player);
                if(eff>=0) return 1+eff;
                var value=0,i;
                var cards=player.get('h');
                for(i=0;i<cards.length;i++){
                    value+=ai.get.value(cards[i]);
                }
                value/=player.num('h');
                if(target.hp==1) return Math.min(0,value-7);
                return Math.min(0,value-5);
            },
                    },
                    threaten:1.5,
                },
            },
            "两仪平衡加":{
                group:["两仪平衡加_1111","两仪平衡加_2222"],
                subSkill:{
                    "1111":{
                        trigger:{
                            player:"damageBegin",
                        },
                        forced:true,
                        content:function (){
player.addSkill('两仪平衡');
player.storage.两仪平衡+=1;
player.syncStorage('两仪平衡');
player.removeSkill('两仪平衡加');
                game.log(player,'开启了传奇魂：两仪平衡');
                for(var i=0;i<player.node.marks.childNodes.length;i++){
if(player.node.marks.childNodes[i].name=='两仪平衡'){
player.node.marks.childNodes[i].setBackgroundImage('extension/奥拉亚比/'+'两仪平衡'+'.jpg');                         player.node.marks.childNodes[i].innerHTML='';
                     }
                 } 
},
                    },
                    "2222":{
                        trigger:{
                            source:"damageBegin",
                        },
                        forced:true,
                        content:function (){
player.addSkill('两仪平衡');
player.storage.两仪平衡+=1;
player.syncStorage('两仪平衡');  
player.removeSkill('两仪平衡加');
                game.log(player,'开启了传奇魂：两仪平衡');
                for(var i=0;i<player.node.marks.childNodes.length;i++){
if(player.node.marks.childNodes[i].name=='两仪平衡'){
player.node.marks.childNodes[i].setBackgroundImage('extension/奥拉亚比/'+'两仪平衡'+'.jpg');                         player.node.marks.childNodes[i].innerHTML='';
                     }
                 } 
},
                    },
                },
            },
            "两仪平衡":{
                marktext:"两",
                intro:{
                    content:function (storage){
return '<li>当前传奇魂:两仪平衡'+'<li>回合末获得一魂'+'<li>每当受到攻击时，每次受到伤害前概率化解对方攻击'+'<li>每次攻击非传奇亚比时伤害+50%'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.两仪平衡=0;
}
},
                mark:true,
                group:["两仪平衡_获得魂","两仪平衡_伤害加成","两仪平衡_无效"],
                subSkill:{
                    "获得魂":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
player.addSkill('魂')
player.storage.魂+=1;
player.syncStorage('魂');
game.log(player,'获得一魂');
},
                    },
                    "伤害加成":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
if(event.player.hasSkill('魂')) return false;
return true;
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num*0.5;
},
                    },
                    "无效":{
                        trigger:{
                            player:"damageBegin",
                        },
                        filter:function (event,source){
if(Math.random()>0.1) return false;
return true;
},
                        forced:true,
                        content:function (){
trigger.untrigger();
trigger.finish();
game.log(player,'化解了对方攻击');},
                    },
                },
            },
            "精灵王之水":{
                enable:"phaseUse",
                content:function (){
window.open("http://tieba.baidu.com/p/4200945841?pn=1")
},
            },
            "圣冕瞬杀":{
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                content:function (){
player.storage.攻击等级+=1;
player.syncStorage('攻击等级');
game.log(player,'攻击提升了一级')    
},
                mod:{
                    cardUsable:function (card,player,num){
            if(card.name=='sha') return Infinity;
        },
                },
            },
            "天麟裁决":{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                content:function (){
player.addSkill('魂');
player.storage.魂+=1;
player.syncStorage('魂');  
game.log(player,'获得一魂');
if(Math.random()>1/4){
trigger.player.loseHp(1)};    
},
            },
            "万王之荣耀":{
                enable:"phaseUse",
                usable:1,
                filterTarget:function (target){
        return true;
    },
                filter:function (event,player){
return player.storage.魂>=4;
},
                content:function (){
player.storage.魂-=4;
target.damage(1.2);
    player.changeHujia();
        player.update();
        game.log(player,'获得一点护盾');         
game.log(player,'消耗了四魂');
},
                ai:{
                    order:1,
                    result:{
                        player:function (player){
            return  player.hp-0;
             },
                        target:function (player,target){
                var eff=ai.get.damageEffect(target,player);
                if(eff>=0) return 1+eff;
                var value=0,i;
                var cards=player.get('h');
                for(i=0;i<cards.length;i++){
                    value+=ai.get.value(cards[i]);
                }
                value/=player.num('h');
                if(target.hp==1) return Math.min(0,value-7);
                return Math.min(0,value-5);
            },
                    },
                    threaten:1.5,
                },
            },
            "王界震慑加":{
                group:["王界震慑加_1111","王界震慑加_2222"],
                subSkill:{
                    "1111":{
                        trigger:{
                            player:"damageBegin",
                        },
                        forced:true,
                        content:function (){
player.addSkill('王界震慑');
player.storage.王界震慑+=1;
player.syncStorage('王界震慑');
player.removeSkill('王界震慑加');              
                game.log(player,'开启了传奇魂：王界震慑');
                for(var i=0;i<player.node.marks.childNodes.length;i++){
if(player.node.marks.childNodes[i].name=='王界震慑'){
player.node.marks.childNodes[i].setBackgroundImage('extension/奥拉亚比/'+'王界震慑'+'.jpg');                         player.node.marks.childNodes[i].innerHTML='';
                     }
                 } 
},
                    },
                    "2222":{
                        trigger:{
                            source:"damageBegin",
                        },
                        forced:true,
                        content:function (){
player.addSkill('王界震慑');
player.storage.王界震慑+=1;
player.syncStorage('王界震慑');  
player.removeSkill('王界震慑加');               
                game.log(player,'开启了传奇魂：王界震慑');
                for(var i=0;i<player.node.marks.childNodes.length;i++){
if(player.node.marks.childNodes[i].name=='王界震慑'){
player.node.marks.childNodes[i].setBackgroundImage('extension/奥拉亚比/'+'王界震慑'+'.jpg');                         player.node.marks.childNodes[i].innerHTML='';
                     }
                 } 
},
                    },
                },
            },
            "王界震慑":{
                marktext:"王",
                intro:{
                    content:function (storage){
return '<li>当前传奇魂:王界震慑'+'<li>受到一点以上伤害则令对方害怕；受到一点或以下伤害则令对方麻痹'+'<li>回合末获得一魂'+'<li>每当受到攻击时，每次受到伤害前概率化解对方攻击'+'<li>每次攻击非传奇亚比时伤害+50%'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.王界震慑=0;
}
},
                mark:true,
                group:["王界震慑_麻痹","王界震慑_害怕","王界震慑_获得魂","王界震慑_伤害加成","王界震慑_无效"],
                subSkill:{
                    "麻痹":{
                        trigger:{
                            player:"damageEnd",
                        },
                        forced:true,
                        filter:function (event,player){
        if(event.num>=1) return false;
return true;
    },
                        content:function (){
            trigger.source.addSkill('麻痹')
            trigger.source.storage.麻痹+=1;
            trigger.source.syncStorage('麻痹');
        game.log(trigger.source,'被麻痹一个回合'); 
    },
                    },
                    "害怕":{
                        trigger:{
                            player:"damageEnd",
                        },
                        forced:true,
                        filter:function (event,player){
        if(event.num<=1) return false;
return true;
    },
                        content:function (){
            trigger.source.turnOver();
        game.log(trigger.source,'害怕了'); 
    },
                    },
                    "获得魂":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
player.addSkill('魂')
player.storage.魂+=1;
player.syncStorage('魂');
                game.log(player,'获得一魂');
},
                    },
                    "伤害加成":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,source){
if(event.player.hasSkill('魂')) return false;
return true;
},
                        forced:true,
                        content:function (){
trigger.num+=trigger.num*0.5;
},
                    },
                    "无效":{
                        trigger:{
                            player:"damageBegin",
                        },
                        filter:function (event,source){
if(Math.random()>0.1) return false;
return true;
},
                        forced:true,
                        content:function (){
trigger.untrigger();
trigger.finish();
game.log(player,'化解了对方攻击');},
                    },
                },
            },
            "凤凰降世":{
                skillAnimation:"epic",
                trigger:{
                    global:"gameStart",
                },
                forced:true,
                unique:true,
                priority:100,
                content:function (){
        "step 0"
        if(lib.config.mode=='guozhan'&&get.config('guozhan_mode')!='mingjiang'){
            for(var i=0;i<game.players.length;i++){
                game.players[i].showCharacter(2);
            }
        }
        else{
            event.goto(1);
        }
        "step 1"    
        game.zhu=player;
        player.identity='zhu';
        player.setIdentity('涅槃凤凰');
        player.node.identity.dataset.color='zhu';
        player.identityShown=true;
        var players=get.players(false,true);
        for(var i=0;i<players.length;i++){
            if(players[i]!=player){
                players[i].identity='fan';
                players[i].setIdentity('猎杀者');
                players[i].identityShown=true;
            }
        }
    },
            },
            "烈焰自由羽":{
                enable:"phaseUse",
                content:function (){
player.addSkill('烈焰护体');
player.addSkill('焰');        
player.removeSkill('烈焰自由羽');
},
            },
            "烈焰护体":{
                trigger:{
                    player:["damageBefore","loseHpBefore"],
                },
                forced:true,
                unique:true,
                priority:null,
                content:function (){
        trigger.untrigger();
        trigger.finish();
game.log(player,'烈焰化解了对方的攻击')        
    },
            },
            "凤鸣九天":{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                content:function (){
player.addSkill('烈焰自由羽');
player.recover();    
},
            },
            "上古神凤":{
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                content:function (){
    player.changeHujia();
        player.update();
        game.log(player,'获得护甲'); 
},
                mod:{
                    targetEnabled:function (card,player,target){
            if(get.type(card)=='delay'&&player!=target){
                return false;
            }
        },
                },
            },
            "焰":{
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                content:function (){
player.removeSkill('焰');
player.removeSkill('烈焰护体');
},
            },
            "_aolabase2":{
                trigger:{
                    global:"gameStart",
                },
                forced:true,
                filter:function (event,player){
if(player.hasSkill('奥拉亚比')) return false;
return true;
},
                content:function (){
        player.addSkill('非奥拉亚比');
},
            },
            save:{
            },
            "非奥拉亚比":{
            },
        },
        translate:{
            "攻击等级":"攻击等级",
            "攻击等级_info":"",
            "速度等级":"速度等级",
            "速度等级_info":"",
            "闪避等级":"闪避等级",
            "闪避等级_info":"",
            "暴击等级":"暴击等级",
            "暴击等级_info":"",
            "防御等级":"防御等级",
            "防御等级_info":"",
            "龙翔秘术":"龙翔秘术",
            "龙翔秘术_info":"奥义技，提升自身全属性1级，每回合末自身体力值低于最大值40%时则获得1层龙翔秘术；每层龙翔秘术提升自身最大体力值上限1点、提升8%伤害抗性和提升25%伤害能力",
            "龙翔秘术·奥义":"龙翔秘术·奥义",
            "龙翔秘术·奥义_info":"锁定技，每回合末自身体力值低于最大值40%时则获得1层龙翔秘术；每层龙翔秘术提升自身最大体力值上限1点、提升8%伤害抗性和提升25%伤害能力",
            "宗卷龙体":"宗卷龙体",
            "宗卷龙体_info":"每回合限一次，使用后降低自身全属性1级后回复已损失体力值50%",
            "天命龙翔":"天命龙翔",
            "天命龙翔_info":"锁定技，你造成伤害前，若你已受伤，你提升自身全属性1级",
            "千傀奇术":"千傀奇术",
            "千傀奇术_info":"潜能奥义，锁定技，你每次召唤傀儡时回复0.5点体力",
            "金刚傀儡":"金刚傀儡",
            "金刚傀儡_info":"锁定技，受到伤害时50%召唤金刚傀儡为自己抵御60%的基础伤害并提升防御1级",
            "天愈傀儡":"天愈傀儡",
            "天愈傀儡_info":"每回合限一次，使用后召唤天愈傀儡为自身回复1点体力并降低自身防御1级",
            "阎狱鬼刀":"阎狱鬼刀",
            "阎狱鬼刀_info":"锁定技，你造成伤害前降低对方防御1级",
            "致命射击":"致命射击",
            "致命射击_info":"锁定技，造成伤害前，先附带落日（令对方烧伤，持续5个回合）、吞天（伤害翻倍）、拉弓（提升攻击1级）任意0-3个效果再造成伤害",
            "巨龙噬":"巨龙噬",
            "巨龙噬_info":"出牌阶段限一次，吞噬对方所有属性等级",
            "迅捷连射":"迅捷连射",
            "迅捷连射_info":"锁定技，你造成的伤害时40%概率附加1点固伤，若出手前没有损失体力则再40%概率再触发一次",
            "惊华神移":"惊华神移",
            "惊华神移_info":"锁定技，每次造成伤害时，触发此技能；每第二次触发此技能，就吸取对方基础攻击数值0.2点（最多可吸取1点攻击力）",
            "神勾玉的祝福":"神勾玉的祝福",
            "神勾玉的祝福_info":"使用后回合末当自身体力值不满时则提升自身攻击、速度和暴击各1级并回复自身已损失体力值的35%，无限回合,使用后翻面",
            "神勾玉祝福":"神勾玉祝福",
            "神勾玉祝福_info":"锁定技，回合末当自身体力值不满时则提升自身攻击、速度和暴击各1级并回复自身已损失体力值的35%",
            "惊华神移·降·4":"惊华神移·降·4",
            "惊华神移·降·4_info":"已被吸取基础攻击数值1点",
            "惊华神移·增·4":"惊华神移·增·4",
            "惊华神移·增·4_info":"已吸取基础攻击数值1点",
            "惊华神移·10":"惊华神移·10",
            "惊华神移·10_info":"锁定技，每次造成伤害时，触发此技能；每第二次触发此技能，就吸取对方基础攻击数值0.2点（最多可吸取1点攻击力）",
            "惊华神移·9":"惊华神移·9",
            "惊华神移·9_info":"锁定技，每次造成伤害时，触发此技能；每第二次触发此技能，就吸取对方0.2点基础攻击数值（最多可吸取1点攻击力）",
            "惊华神移·降·3":"惊华神移·降·3",
            "惊华神移·降·3_info":"已被吸取基础攻击数值0.8点",
            "惊华神移·增·3":"惊华神移·增·3",
            "惊华神移·增·3_info":"已吸取基础攻击数值0.8点",
            "惊华神移·8":"惊华神移·8",
            "惊华神移·8_info":"锁定技，每次造成伤害时，触发此技能；每第二次触发此技能，就吸取对方基础攻击数值0.2点（最多可吸取1点攻击力）",
            "惊华神移·7":"惊华神移·7",
            "惊华神移·7_info":"锁定技，每次造成伤害时，触发此技能；每第二次触发此技能，就吸取对方基础攻击数值0.2点（最多可吸取1点攻击力）",
            "惊华神移·降·2":"惊华神移·降·2",
            "惊华神移·降·2_info":"已被吸取基础攻击数值0.6点",
            "惊华神移·增·2":"惊华神移·增·2",
            "惊华神移·增·2_info":"已吸取基础攻击数值0.6点",
            "惊华神移·6":"惊华神移·6",
            "惊华神移·6_info":"锁定技，每次造成伤害时，触发此技能；每第二次触发此技能，就吸取对方基础攻击数值0.2点（最多可吸取1点攻击力）",
            "惊华神移·5":"惊华神移·5",
            "惊华神移·5_info":"锁定技，每次造成伤害时，触发此技能；每第二次触发此技能，就吸取对方基础攻击数值0.2（最多可吸取1点攻击力）",
            "惊华神移·降·1":"惊华神移·降·1",
            "惊华神移·降·1_info":"已被吸取0.4点攻击力",
            "惊华神移·增·1":"惊华神移·增·1",
            "惊华神移·增·1_info":"已吸取基础攻击数值0.4点",
            "惊华神移·4":"惊华神移·4",
            "惊华神移·4_info":"锁定技，每次造成伤害时，触发此技能；每第二次触发此技能，就吸取对方基础攻击数值0.2点（最多可吸取1点攻击力）",
            "惊华神移·3":"惊华神移·3",
            "惊华神移·3_info":"锁定技，每次造成伤害时，触发此技能；每第二次触发此技能，就吸取对方基础攻击数值0.2点（最多可吸取1点攻击力）",
            "惊华神移·降":"惊华神移·降",
            "惊华神移·降_info":"已被吸取基础攻击数值0.2点",
            "惊华神移·增":"惊华神移·增",
            "惊华神移·增_info":"已吸取基础攻击数值0.2点",
            "惊华神移·2":"惊华神移·2",
            "惊华神移·2_info":"锁定技，每次造成伤害时，触发此技能；每第二次触发此技能，就吸取对方基础攻击数值0.2点（最多可吸取1点攻击力）",
            "灵风甦醒":"灵风甦醒",
            "灵风甦醒_info":"潜能奥义技，使用后吸取对方1点最大体力值，回复1点体力并吞噬对方的攻击等级",
            "春沐之心":"春沐之心",
            "春沐之心_info":"每回合限一次，提升自身防御2级并翻面",
            "万物感召":"万物感召",
            "万物感召_info":"锁定技，每次造成伤害时令对方获得1层感召印记，回合末当印记叠加至2层时消耗2层令对方诅咒，持续3个回合",
            "感知印记":"感知印记",
            "感知印记_info":"",
            "奇门千机":"奇门千机",
            "奇门千机_info":"每回合限一次，如果游戏人数不大于7，召唤兵器【千机伞】为你作战并获得千机伞的所有技能，使用后遭到天谴体力上限-1",
            "鬼墨七星阵":"鬼墨七星阵",
            "鬼墨七星阵_info":"潜能奥义技，锁定技，提升自身55%伤害抗性且每回合末回复自身50%初始攻击力点体力值，若回合末攻击等级被吞噬则重新开启攻击等级",
            "离经千机变":"离经千机变",
            "离经千机变_info":"锁定技，你造成伤害后获得1点护甲；每次造成伤害时提升攻击1级",
            "千机":"千机",
            "千机_info":"你可以立即获得对你造成伤害的牌",
            "森罗·奈落":"森罗·奈落",
            "森罗·奈落_info":"锁定技，伤害的200%用于回复自身体力值；每第2次使用则于回合末吸取对方攻击等级2级",
            "奈落印记":"奈落印记",
            "奈落印记_info":"",
            "奈落印记·己":"奈落印记·己",
            "奈落印记·己_info":"",
            "格斗系":"格斗系",
            "格斗系_info":"",
            "飞行系":"飞行系",
            "飞行系_info":"",
            "爬行系":"爬行系",
            "爬行系_info":"",
            "土系":"土系",
            "土系_info":"",
            "数码系":"数码系",
            "数码系_info":"",
            "机械系":"机械系",
            "机械系_info":"",
            "火系":"火系",
            "火系_info":"",
            "水系":"水系",
            "水系_info":"",
            "草系":"草系",
            "草系_info":"",
            "电系":"电系",
            "电系_info":"",
            "神秘系":"神秘系",
            "神秘系_info":"",
            "冰系":"冰系",
            "冰系_info":"",
            "上古系":"上古系",
            "上古系_info":"",
            "黑暗系":"黑暗系",
            "黑暗系_info":"",
            "光明系":"光明系",
            "光明系_info":"",
            "龙系":"龙系",
            "龙系_info":"",
            "圣灵系":"圣灵系",
            "圣灵系_info":"",
            "神兵系":"神兵系",
            "神兵系_info":"",
            "王系":"王系",
            "王系_info":"",
            "超火系":"超火系",
            "超火系_info":"",
            "超水系":"超水系",
            "超水系_info":"",
            "超木系":"超木系",
            "超木系_info":"",
            "超上古系":"超上古系",
            "超上古系_info":"",
            "超龙系":"超龙系",
            "超龙系_info":"",
            "超电系":"超电系",
            "超电系_info":"",
            "超光系":"超光系",
            "超光系_info":"",
            "超暗系":"超暗系",
            "超暗系_info":"",
            "超数码系":"超数码系",
            "超数码系_info":"",
            "超圣灵系":"超圣灵系",
            "超圣灵系_info":"",
            "超王系":"超王系",
            "超王系_info":"",
            "完全体":"完全体",
            "完全体_info":"",
            "神迹血脉·完全体":"神迹血脉·完全体",
            "神迹血脉·完全体_info":"",
            "地狱之手":"地狱之手",
            "地狱之手_info":"锁定技，当狂怒印记不大于0时，造成伤害前吸取对方一点体力",
            "狂怒":"狂怒",
            "狂怒_info":"锁定技，当玩家受到伤害或造成伤害前30%得到一个狂怒印记",
            "狂怒阎威":"狂怒阎威",
            "狂怒阎威_info":"锁定技，你造成伤害或受到伤害时概率消耗一个狂怒提升或降低伤害（狂怒印记越多概率越大，效果越好）",
            "地狱之手·完全体":"地狱之手·完全体",
            "地狱之手·完全体_info":"锁定技，当狂怒印记不大于1时，造成伤害前吸取对方一点体力",
            "神迹血脉":"神迹血脉",
            "神迹血脉_info":"",
            "狂怒加":"狂怒加",
            "狂怒加_info":"",
            "神迹血脉加":"神迹血脉加",
            "神迹血脉加_info":"",
            "卡":"卡",
            "卡_info":"",
            "龙魂封世·完全体":"龙魂封世·完全体",
            "龙魂封世·完全体_info":"锁定技，若触发前未受到伤害则65%概率令对方害怕",
            "神迹魂封":"神迹魂封",
            "神迹魂封_info":"每回合限一次，弃一张牌，削弱对方攻击1级并回复自身20%最大体力值",
            "冰帝龙封":"冰帝龙封",
            "冰帝龙封_info":"锁定技，每次受到攻击都有50%概率令对方冻伤，持续10个回合",
            "龙魂封世":"龙魂封世",
            "龙魂封世_info":"锁定技，若触发前未受到伤害则概率令对方害怕（神迹等级越高概率越高）",
            "势不可挡":"势不可挡",
            "势不可挡_info":"锁定技，造成伤害时无视对方30%防御基础值",
            "天尊夜痕":"天尊夜痕",
            "天尊夜痕_info":"锁定技，造成伤害前降低对方全属性1级",
            "炽戮":"炽戮",
            "炽戮_info":"每回合限两次，流失0.5点体力，提升目标攻击，防御和速度1级",
            "夜歌":"夜歌",
            "夜歌_info":"每回合限一次，弃两张牌并指定一名角色，该角色获得反弹85%伤害效果（注：若反弹伤害=0，那么伤害来源回复巨额体力），持续2回合",
            "夜歌反":"夜歌反",
            "夜歌反_info":"",
            "吟喵刀":"吟喵刀",
            "吟喵刀_info":"锁定技，造成伤害时50%概率削弱对方防御1级",
            "武喵道":"武喵道",
            "武喵道_info":"锁定技，攻击附带50%伤害转化回复体力效果",
            "龙吟初代":"龙吟初代",
            "龙吟初代_info":"锁定技，每次受到伤害前会爆发初代龙魂，将属性提升上限级",
            "八歧大蛇·封":"八歧大蛇·封",
            "八歧大蛇·封_info":"锁定技，造成伤害时运用封印大蛇之力，令对方害怕",
            "修凯领域":"修凯领域",
            "修凯领域_info":"潜能奥义技，锁定技，提升自身50%伤害抗性,每回合末20%概率提升全属性一级且攻击附加1点额外伤害",
            "暗影·元灭却":"暗影·元灭却",
            "暗影·元灭却_info":"锁定技，造成伤害前吸取对方攻击，防御和闪避各1级",
            "圣光·明镜破":"圣光·明镜破",
            "圣光·明镜破_info":"锁定技，造成伤害时概率提升自身攻击2级或削弱对方防御2级，伤害的50%用于回复自身",
            "圣魔·星辰裂":"圣魔·星辰裂",
            "圣魔·星辰裂_info":"圣魔血脉：在自身体力低于0时退出完全体状态并回复至满血，进入你的回合并去除所有印记",
            "蛇魂":"蛇魂",
            "蛇魂_info":"",
            "须佐之殇":"须佐之殇",
            "须佐之殇_info":"潜能奥义技，使用后获得8个蛇魂",
            "天蛇罚":"天蛇罚",
            "天蛇罚_info":"造成伤害后，你可以消耗所有蛇魂，每个蛇魂造成0.25点固伤",
            "血契约":"血契约",
            "血契约_info":"",
            "血罪契约":"血罪契约",
            "血罪契约_info":"第二奥义，使用后进入5回合狂暴状态：蛇魂立即满8个且回合末恢复蛇魂至8个。狂暴状态结束后的两个回合，每回合末进入濒死阶段",
            "血罪约":"血罪约",
            "血罪约_info":"",
            "灵·陨":"灵·陨",
            "灵·陨_info":"锁定技，造成伤害前回复一定体力(回复量与蛇魂成正比)",
            "天丛云":"天丛云",
            "天丛云_info":"极限输出技，造成伤害时极低概率增加3点伤害",
            "辉煌双生":"辉煌双生",
            "辉煌双生_info":"每回合限一次，你可以扣除一点体力并增加50%伤害抗性（不可叠加）并提升全属性1级",
            "迷心之炎":"迷心之炎",
            "迷心之炎_info":"锁定技，造成伤害后，40%概率令对方烧伤，持续3个回合",
            "恐惧之华":"恐惧之华",
            "恐惧之华_info":"锁定技，造成伤害后，60%概率令对方害怕并回复自身一定量体力（损失体力越多回复量越大）",
            "日月无天":"日月无天",
            "日月无天_info":"潜能奥义技，使用后提升50%抗性",
            "日月无天·2":"日月无天·2",
            "日月无天·2_info":"锁定技，提升50%伤害抗性，无限回合",
            "辉煌双生·2":"辉煌双生·2",
            "辉煌双生·2_info":"锁定技，提升50%伤害抗性，无限回合",
            "天地炀凐·日":"天地炀凐·日",
            "天地炀凐·日_info":"锁定技，造成伤害前削弱对方攻击，防御和闪避各2级并65%概率令对方烧伤，持续6个回合",
            "天地炀凐·月":"天地炀凐·月",
            "天地炀凐·月_info":"锁定技，造成伤害前回复自身50%已损失体力值并65%概率令对方冻伤，持续6个回合",
            "飞梭战意":"飞梭战意",
            "飞梭战意_info":"锁定技，每回合末提升速度2级",
            "翼·极速体能":"翼·极速体能",
            "翼·极速体能_info":"锁定技，每回合末回复自身体力值，回复量为0.1*速度等级",
            "超离子风暴":"超离子风暴",
            "超离子风暴_info":"锁定技，你造成伤害前降低对方防御2级",
            "暗翼聚能":"暗翼聚能",
            "暗翼聚能_info":"每回合限一次，流失一点体力并指定一名角色，该角色提升55%抗性，持续4回合",
            "暗翼":"暗翼",
            "暗翼_info":"",
            "圈之怨念":"圈之怨念",
            "圈之怨念_info":"锁定技，造成伤害后吸取对方0.5点体力",
            "生死轮回":"生死轮回",
            "生死轮回_info":"无限奥义技，每回合限一次，使用后流失1点体力并于下回合开始阶段回复体力至体力上限",
            "轮回":"轮回",
            "轮回_info":"",
            "惊天一矢":"惊天一矢",
            "惊天一矢_info":"锁定技，你的基础攻击力随体力变化而变化，体力越低威力越高。无视对方提升的防御等级，威力超乎想象的一箭",
            "龙吟无心":"龙吟无心",
            "龙吟无心_info":"潜能奥义技，提升变化的永久伤害抗性，体力越低抗性越高",
            "龙游天地":"龙游天地",
            "龙游天地_info":"锁定技，每回合末凝神一次（每次凝神提升暴击率15%和爆伤20%），凝神加成能力无上限且可以和暴击等级组成二段暴击",
            "凝神":"凝神",
            "凝神_info":"",
            "龙吟破":"龙吟破",
            "龙吟破_info":"锁定技，当凝神次数大于3次时开启龙魂，造成伤害前降低对方全属性1级",
            "厄运相随":"厄运相随",
            "厄运相随_info":"强袭奥义技，首次造成伤害时令对方每次受到伤害一定概率被秒杀",
            "秒杀":"秒杀",
            "秒杀_info":"锁定技，每次受到伤害一定概率被秒杀",
            "真实的梦境":"真实的梦境",
            "真实的梦境_info":"锁定技，造成伤害前50%令对方睡眠",
            "龙啸九天":"龙啸九天",
            "龙啸九天_info":"出牌阶段，你可以提升自己全属性1级，50%概率扣除自己1体力值50%，概率恢复自己1体力值",
            "万虹凝":"万虹凝",
            "万虹凝_info":"锁定技，回合开始阶段，20%令随机一名其他角色害怕",
            "区域封灭":"区域封灭",
            "区域封灭_info":"潜能奥义技，锁定技，造成伤害前若属性等级被吞噬了，则重新开启属性等级；攻击前提升全属性1级且造成的伤害变为（对方属性之和+自身属性之和）*0.05，造成的伤害用于回复自身体力",
            "无影整蛊":"无影整蛊",
            "无影整蛊_info":"锁定技，攻击时额外攻击对方1-2次（威力削弱10倍且无法触发技能），若攻击次数为2则吸取对方攻击属性1级",
            "捣蛋幽灵":"捣蛋幽灵",
            "捣蛋幽灵_info":"锁定技，造成的伤害低于一时，50%概率提升一点伤害",
            "翼·繁星天皇":"翼·繁星天皇",
            "翼·繁星天皇_info":"锁定技，回合开始阶段，80%令随机一名其他角色束缚，持续16个回合",
            "万丈星河":"万丈星河",
            "万丈星河_info":"锁定技，造成伤害前40%概率重置对方属性",
            "北斗群星":"北斗群星",
            "北斗群星_info":"每回合限一次，流失一点体力并指定一名角色，该角色每次受到攻击回复自身25%最大体力值，持续3回合",
            "群星":"群星",
            "群星_info":"",
            "魂":"魂",
            "魂_info":"",
            "疾袭":"疾袭",
            "疾袭_info":"锁定技，每次造成伤害后提升自己攻击2级",
            "传奇之光":"传奇之光",
            "传奇之光_info":"锁定技，伤害的50%转化回复自己，获得1魂",
            "龙耀咆哮":"龙耀咆哮",
            "龙耀咆哮_info":"每回合限一次，使用后消耗5魂造成1+20%对方最大体力点伤害",
            "光之子":"光之子",
            "光之子_info":"",
            "光之子加":"光之子加",
            "光之子加_info":"锁定技，你造成伤害或受到伤害前开启魂：光龙",
            "酒轮灭":"酒轮灭",
            "酒轮灭_info":"",
            "酒轮灭加":"酒轮灭加",
            "酒轮灭加_info":"锁定技，你造成伤害或受到伤害前开启魂：酒轮灭",
            "酒轮灭BOSS":"酒轮灭BOSS",
            "酒轮灭BOSS_info":"",
            "狂风绝怒":"狂风绝怒",
            "狂风绝怒_info":"每回合限一次，使用后消耗4魂造成0.4点伤害并吸取对方全属性一级",
            "神息":"神息",
            "神息_info":"",
            "龙息":"龙息",
            "龙息_info":"",
            "神龙息":"神龙息",
            "神龙息_info":"每回合限一次，消耗一魂每回合吸取对方0.5点体力，持续4回合",
            "醉浮生":"醉浮生",
            "醉浮生_info":"锁定技，每次攻击获得二魂",
            "中毒":"中毒",
            "中毒_info":"",
            "烧伤":"烧伤",
            "烧伤_info":"",
            "冻伤":"冻伤",
            "冻伤_info":"",
            "束缚":"束缚",
            "束缚_info":"",
            "诅咒":"诅咒",
            "诅咒_info":"",
            "衰弱":"衰弱",
            "衰弱_info":"",
            "麻痹":"麻痹",
            "麻痹_info":"",
            "太阳神":"太阳神",
            "太阳神_info":"",
            "太阳神加":"太阳神加",
            "太阳神加_info":"锁定技，你造成伤害或受到伤害前开启魂：太阳神",
            "炎啸":"炎啸",
            "炎啸_info":"每回合限三次，使用后消耗4魂造成1.2点伤害",
            "蔑视山河":"蔑视山河",
            "蔑视山河_info":"每回合限一次，消耗三魂攻击对方6~12次，每次命中回复自身0.1点体力并有20%概率获得1魂，20%概率给对方附加一种或多种持续一回合的负面或异常状态",
            "清算":"清算",
            "清算_info":"每回合限一次，重置目标属性等级",
            "_AolaBase":"_AolaBase",
            "_AolaBase_info":"",
            "时空锁加":"时空锁加",
            "时空锁加_info":"锁定技，你造成伤害或受到伤害前开启魂：时空锁",
            "时间回溯":"时间回溯",
            "时间回溯_info":"",
            "时空撕裂":"时空撕裂",
            "时空撕裂_info":"每回合限一次，使用后消耗4魂造成1点伤害并回复1点体力",
            "空间扭曲":"空间扭曲",
            "空间扭曲_info":"锁定技，造成伤害前提升自身攻击和速度一级",
            "穿梭":"穿梭",
            "穿梭_info":"锁定技，每回合末提升闪避1级",
            "时空锁":"时空锁",
            "时空锁_info":"",
            "不胜无归":"不胜无归",
            "不胜无归_info":"每回合限一次，消耗一魂回复40%最大体力并重置属性等级",
            "银光双闪":"银光双闪",
            "银光双闪_info":"锁定技，每次造成伤害后降低对方防御两级",
            "兵神英魂击":"兵神英魂击",
            "兵神英魂击_info":"每回合限一次，使用后消耗5魂造成1点伤害并令对方的一生伴随厄运",
            "兵魂加":"兵魂加",
            "兵魂加_info":"锁定技，你造成伤害或受到伤害前开启魂：兵魂",
            "兵魂":"兵魂",
            "兵魂_info":"",
            "土灵加":"土灵加",
            "土灵加_info":"锁定技，你造成伤害或受到伤害前开启魂：土灵",
            "土灵":"土灵",
            "土灵_info":"",
            "锁魂墓":"锁魂墓",
            "锁魂墓_info":"每回合限一次，消耗了三魂并流失大量体力来降低对方全属性三级",
            "超土系":"超土系",
            "超土系_info":"",
            "万兽之尊":"万兽之尊",
            "万兽之尊_info":"锁定技，受到伤害时35%闪避；伤害提高35%",
            "兽尊·万兽臣服":"兽尊·万兽臣服",
            "兽尊·万兽臣服_info":"每回合限一次，使用后摸一张牌并提升全属性一级",
            "龙魂剑术":"龙魂剑术",
            "龙魂剑术_info":"宫本剑术高超，忠心耿耿一直镇守着无烬山，不会让其他人轻易踏足这一片净土！",
            "幽影剑道":"幽影剑道",
            "幽影剑道_info":"传闻剑盾合体即可无敌于天下，宫本的龙魂剑为无烬最强之剑，但是最强之盾又在哪里呢？",
            "万兽之主":"万兽之主",
            "万兽之主_info":"锁定技，受到伤害时25%闪避；伤害提高25%",
            "万兽臣服":"万兽臣服",
            "万兽臣服_info":"每回合限一次，使用后摸一张牌并提升全属性一级",
            "急速奔袭":"急速奔袭",
            "急速奔袭_info":"潜能奥义技，出牌阶段使用，使用后获得一张【杀】和一张【闪】",
            "强效救心":"强效救心",
            "强效救心_info":"每回合限一次，流失0.5点体力并回复目标1点体力",
            "时间撕裂":"时间撕裂",
            "时间撕裂_info":"",
            "空间爆发":"空间爆发",
            "空间爆发_info":"锁定技，每次受到伤害后，终止一切结算，强制开启1秒钟时空裂隙（在时空裂隙中与正常游戏不同），每次使用卡牌时刷新时空裂隙的存在时间",
            "时间撕裂删":"时间撕裂删",
            "时间撕裂删_info":"",
            "时空重置":"时空重置",
            "时空重置_info":"时空奥义技，当你死亡时，你可令场上所有的一切退回到游戏开始的第1回合初始状态",
            "时空重置1":"时空重置1",
            "时空重置1_info":"",
            "时空重置2":"时空重置2",
            "时空重置2_info":"",
            "奥拉亚比":"奥拉亚比",
            "奥拉亚比_info":"",
            "冰凌裂天碎":"冰凌裂天碎",
            "冰凌裂天碎_info":"锁定技，造成伤害前若属性等级被吞噬了，则重新开启属性等级；攻击前提升全属性1级，每一级攻击等级额外加成0.1点伤害且伤害提升50%，造成的伤害20%用于回复自身体力",
            "逆水":"逆水",
            "逆水_info":"潜能奥义技，锁定技，提升自身35%伤害抗性且每回合末回复自身20%初始攻击力点体力值，若回合末攻击等级被吞噬则重新开启攻击等级",
            "轮回印记":"轮回印记",
            "轮回印记_info":"",
            "轮回印记加":"轮回印记加",
            "轮回印记加_info":"锁定技，你造成伤害或受到伤害前开启魂：轮回印记",
            "冥灵转移":"冥灵转移",
            "冥灵转移_info":"每回合限一次，使用后消耗4魂造成1.2点伤害并恢复一点体力",
            "夜幕传说":"夜幕传说",
            "夜幕传说_info":"锁定技，造成伤害前提升自身攻击和速度一级并获得一魂",
            "超越天堂":"超越天堂",
            "超越天堂_info":"每回合限一次，消耗2魂，提升40%抗性和伤害能力，持续5回合",
            "超越天堂攻":"超越天堂攻",
            "超越天堂攻_info":"",
            "冰灵传奇":"冰灵传奇",
            "冰灵传奇_info":"",
            "冰灵传奇加":"冰灵传奇加",
            "冰灵传奇加_info":"锁定技，你造成伤害或受到伤害前开启魂：冰灵传奇",
            "冰棺锁":"冰棺锁",
            "冰棺锁_info":"锁定技，造成伤害前，60%伤害转化回复体力效果",
            "千雪千针":"千雪千针",
            "千雪千针_info":"锁定技，造成伤害前获得一魂",
            "冰切":"冰切",
            "冰切_info":"每回合限一次，消耗三魂并令目标受到伤害提升100%，持续3回合",
            "冰切防":"冰切防",
            "冰切防_info":"",
            "奥拉BOSS":"奥拉BOSS",
            "奥拉BOSS_info":"",
            "禅":"禅",
            "禅_info":"强袭奥义技，使用后对目标造成1点伤害，令目标无法行动一个回合，束缚五个回合",
            "源龙神光咒":"源龙神光咒",
            "源龙神光咒_info":"锁定技，造成伤害前，25%概率增加0.35点伤害、15%概率再增加一次、10%概率再增加一次、5%概率再增加一次",
            "魂源龙吟":"魂源龙吟",
            "魂源龙吟_info":"锁定技，你的攻击20%概率触发奥义效果",
            "源灵吸收":"源灵吸收",
            "源灵吸收_info":"每回合限一次，流失0.5点体力，提升攻击，防御和速度1级",
            "传奇聚灵破":"传奇聚灵破",
            "传奇聚灵破_info":"每回合限一次，使用后消耗5魂造成0.6点伤害并降低对方全属性两级",
            "无尽之镜":"无尽之镜",
            "无尽之镜_info":"每回合限一次，流失一点体力并指定一名角色，该角色提升80%抗性，持续1回合",
            "无镜":"无镜",
            "无镜_info":"",
            "雪佑":"雪佑",
            "雪佑_info":"锁定技，造成伤害前获得两魂并回复自己1/5最大体力值",
            "雪灵圣甲加":"雪灵圣甲加",
            "雪灵圣甲加_info":"锁定技，你造成伤害或受到伤害前开启魂：雪灵圣甲并获得三魂",
            "雪灵圣甲":"雪灵圣甲",
            "雪灵圣甲_info":"",
            "雪无之威":"雪无之威",
            "雪无之威_info":"",
            "逆水寒加":"逆水寒加",
            "逆水寒加_info":"锁定技，你造成伤害或受到伤害前开启魂：逆水寒",
            "逆水寒":"逆水寒",
            "逆水寒_info":"",
            "寒灵瞬杀":"寒灵瞬杀",
            "寒灵瞬杀_info":"每回合限一次，使用后消耗5魂造成1点伤害并令对方害怕",
            "缓灵术":"缓灵术",
            "缓灵术_info":"锁定技，造成伤害前获得1魂并令对方失去一魂",
            "冰魄摄魂":"冰魄摄魂",
            "冰魄摄魂_info":"锁定技，造成伤害前提升自身闪避一级",
            "传奇·阴域":"传奇·阴域",
            "传奇·阴域_info":"",
            "阴加":"阴加",
            "阴加_info":"锁定技，你造成伤害或受到伤害前开启魂：阴",
            "阴":"阴",
            "阴_info":"",
            "暗斩":"暗斩",
            "暗斩_info":"锁定技，造成伤害时，若对方防御等级小于或等于-6则秒杀对方",
            "八卦极阴咒":"八卦极阴咒",
            "八卦极阴咒_info":"每回合限一次，使用后消耗五魂造成1点伤害并降低目标防御三级",
            "天道阳护":"天道阳护",
            "天道阳护_info":"每回合限一次，消耗一魂并指定一名角色，该角色每次受到攻击回复自身15%最大体力值，持续5回合",
            "阳护":"阳护",
            "阳护_info":"",
            "阳加":"阳加",
            "阳加_info":"锁定技，你造成伤害或受到伤害前开启魂：阳",
            "阳":"阳",
            "阳_info":"",
            "光轮":"光轮",
            "光轮_info":"锁定技，造成伤害前提升自身攻击和暴击一级并获得一魂",
            "天道阳守":"天道阳守",
            "天道阳守_info":"每回合限一次，消耗一魂并指定一名角色，该角色获得30%抗性，持续5回合",
            "阳守":"阳守",
            "阳守_info":"",
            "八卦纯阳术":"八卦纯阳术",
            "八卦纯阳术_info":"每回合限一次，使用后消耗5魂并令目标回复5点体力",
            mi:"春沐之心",
            "mi_info":"每回合限一次，回复目标一半体力值。4回合内，每次被攻击回复自己20%最大体力值，使用后停止行动一回合",
            "复苏":"复苏",
            "复苏_info":"锁定技，每次造成伤害前，获得1魂并削弱对方防御2级。当对抗超火系亚比时，伤害提升",
            "林踪迷魂诀":"林踪迷魂诀",
            "林踪迷魂诀_info":"每回合限一次，使用后消耗5魂造成1伤害并令对方中毒五个回合",
            "森罗之魂加":"森罗之魂加",
            "森罗之魂加_info":"锁定技，你造成伤害或受到伤害前开启魂：森罗之魂",
            "森罗之魂":"森罗之魂",
            "森罗之魂_info":"",
            "沐心":"沐心",
            "沐心_info":"",
            "阴阳归墟":"阴阳归墟",
            "阴阳归墟_info":"锁定技，你防止一切体力的减少（包括伤害，体力上限降少，不包括流失体力）",
            "临·极":"临·极",
            "临·极_info":"锁定技，每回合末流失一点体力",
            "燃烧之心":"燃烧之心",
            "燃烧之心_info":"锁定技，每次受到攻击都有概率令对方防御和闪避下降一级",
            "焚天":"焚天",
            "焚天_info":"锁定技，造成伤害前提升自身攻击和暴击一级",
            "戮火净魂刃":"戮火净魂刃",
            "戮火净魂刃_info":"每回合限一次，消耗五魂造成一点伤害并令对方烧伤六个回合",
            "灵焰之魂加":"灵焰之魂加",
            "灵焰之魂加_info":"锁定技，你造成伤害或受到伤害前开启魂：灵焰之魂",
            "灵焰之魂":"灵焰之魂",
            "灵焰之魂_info":"",
            "灵焰":"灵焰",
            "灵焰_info":"",
            "纯净之心":"纯净之心",
            "纯净之心_info":"每回合限一次，使用后清除目标除害怕外的所有异常状态",
            "湮没":"湮没",
            "湮没_info":"锁定技，造成伤害前获得一魂并吸取对方0.5点体力",
            "深洋超魂咒":"深洋超魂咒",
            "深洋超魂咒_info":"每回合限一次，消耗五魂造成一点伤害并令对方衰弱三个回合",
            "灵涛之魂加":"灵涛之魂加",
            "灵涛之魂加_info":"锁定技，你造成伤害或受到伤害前开启魂：灵涛之魂",
            "灵涛":"灵涛",
            "灵涛_info":"",
            "灵涛之魂":"灵涛之魂",
            "灵涛之魂_info":"",
            "十方归一":"十方归一",
            "十方归一_info":"每回合限一次，消耗2魂，令自己在五个回合内每次受到伤害提升30%暂时伤害能力和20%暂时抗性，最多叠加3层。技能效果结束时，暂时伤害能力和抗性消失",
            "十方":"十方",
            "十方_info":"",
            "归一":"归一",
            "归一_info":"",
            "测试技能":"测试技能",
            "测试技能_info":"",
            "四象陨道":"四象陨道",
            "四象陨道_info":"锁定技，每次造成伤害后伤害减一，造成两次0.5点固伤并令对方获得四象印记；传奇天道无极每次对拥有四象印记的目标造成固伤时，四象印记加一；当目标拥有四象印记时，目标扣除70%最大体力",
            "四象印记":"四象印记",
            "四象印记_info":"",
            "阴阳无双破":"阴阳无双破",
            "阴阳无双破_info":"每回合限一次，使用后消耗4魂造成1.2点伤害",
            "两仪平衡加":"两仪平衡加",
            "两仪平衡加_info":"锁定技，你造成伤害或受到伤害前开启魂：两仪平衡",
            "两仪平衡":"两仪平衡",
            "两仪平衡_info":"",
            "精灵王之水":"精灵王之水",
            "精灵王之水_info":"出牌阶段使用，打开无名杀吧官方水楼，大水特水",
            "圣冕瞬杀":"圣冕瞬杀",
            "圣冕瞬杀_info":"锁定技，出牌阶段，你使用[杀]无数量限制；极速攻击对方，提升攻击一级",
            "天麟裁决":"天麟裁决",
            "天麟裁决_info":"锁定技，造成伤害时，获得一魂；攻击概率额外造成一点固伤",
            "万王之荣耀":"万王之荣耀",
            "万王之荣耀_info":"每回合限一次，使用后消耗4魂造成1.2点伤害并获得一点护盾",
            "王界震慑加":"王界震慑加",
            "王界震慑加_info":"锁定技，你造成伤害或受到伤害前开启魂：王界震慑",
            "王界震慑":"王界震慑",
            "王界震慑_info":"",
            "凤凰降世":"凤凰降世",
            "凤凰降世_info":"鸡年到，凤凰降世，蠢蠢欲动的黑暗势力试图猎杀造福大地的凤凰",
            "烈焰自由羽":"烈焰自由羽",
            "烈焰自由羽_info":"出牌阶段，烈焰凤凰可以使身上的火焰庇护自己，免疫一切伤害，持续一回合，使用后消耗【烈焰自由羽】",
            "烈焰护体":"烈焰护体",
            "烈焰护体_info":"身体上的火焰剧烈燃烧！",
            "凤鸣九天":"凤鸣九天",
            "凤鸣九天_info":"凤凰的声音清冽,可达九霄云外,攻击时获得【烈焰自由羽】并回复一点体力",
            "上古神凤":"上古神凤",
            "上古神凤_info":"烈焰凤凰拥有永生之焰，每次受到伤害获得一点护甲；烈焰凤凰不能成为其他角色的的延时锦囊目标",
            "焰":"焰",
            "焰_info":"",
            "_aolabase2":"_aolabase2",
            "_aolabase2_info":"",
            save:"save",
            "save_info":"",
            "非奥拉亚比":"非奥拉亚比",
            "非奥拉亚比_info":"",
        },
    },
},files:{"character":[],"card":[],"skill":[]}})