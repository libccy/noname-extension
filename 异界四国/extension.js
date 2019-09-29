game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"异界四国",editable:false,content:function (config,pack){

																																																																																																																					
// ---------------------------------------武将分栏------------------------------------------//		
			
    if(config.yijie){
		for(var i in lib.characterPack[ 'yijie']) {
			if(lib.character[i][4].indexOf("forbidai")<0) lib.character[i][4].push("forbidai");
		};
	};
	
},precontent:function (yijie){
     if(yijie.enable){
		 
		 
		game.import('character',function(){
			var yijie={
				name:'yijie',//异界四国
				connect:true,
				character:{
 jishouhuo:["male","shen",4,["l_shibei","l_qingxian","l_zaiqi"],["des:沮授+嵇康+孟获"]],
            liuke:["male","shu",3,["l_xiangle","l_tianming","l_duwu"],["zhu","des:刘禅+刘协+诸葛恪"]],
            liuyou:["male","shu",4,["l_zhanjue","l_zhiyu"],["des:刘谌+荀攸"]],
            gaomi:["male","qun",4,["l_xianzhen","l_jinjiu","l_tianbian"],["des:高顺+泰宓"]],
            luyu:["male","qun",4,["l_wushuang","ll_lieren","l_tianbian"],["des:吕布+关羽"]],
            xuchan:["male","wei",4,["rel_luoyi","l_biyue"],["des:界许褚+貂蝉"]],
            maping:["male","shu",4,["l_longyin","l_tieqi"],["des:马超+关平"]],
            huayi:["male","qun",6,["l_yaowu","ll_zhenlie"],["des:华雄+王异"]],
            liuliang:["male","shu",4,["l_rende","l_kongcheng"],["zhu","des:刘备+诸葛亮"]],
            jukang:["male","qun",3,["l_shibei","l_qingxian"],["des:沮授+嵇康"]],
            "lingquan1":["male","wu",4,["l_xuanfeng","xinzhiheng"],["des:凌统+孙权"]],
            xiahoujia:["male","wei",4,["l_ganglie","l_tiandu"],["des:夏侯淳+郭嘉"]],
            zhuhun:["male","shu",3,["l_kongcheng","l_jishe"],["des:诸葛亮+岑昏"]],
            caohouchun:["male","wei",4,["l_jianxiong","l_ganglie"],["zhu","des:曹操+夏侯淳"]],
            lvyu:["male","wu",4,["l_keji","l_yingzi"],["des:吕蒙+周瑜"]],
            zhangzhi:["male","qun",3,["l_leiji","l_guidao","weijing"],["des:张角+鲁芝"]],
            huangfeng:["male","shu",4,["l_xinliegong","l_fenxun","l_duanbing"],["des:黄忠+丁奉"]],
            diangai:["male","wei",4,["l_qiangxi","l_zhaxiang"],["des:典韦+界黄盖"]],
            taishimi:["male","wu",4,["l_tianyi","l_tianbian"],["des:太史慈+泰宓"]],
            zhumi:["female","shu",4,["l_juxiang","l_lieren","l_tianbian"],["des:祝融+秦宓"]],
            mengkang:["male","qun",5,["l_zaiqi","l_qingxian"],["des:孟获+嵇康"]],
            huangzhi:["male","wu",4,["l_kurou","l_anguo"],["des:黄盖+朱志"]],
            sunhua:["male","wu",4,["l_gzsyinghun","l_shangshi"],["des:孙坚+张春华"]],
            sunyuci:["male","wu",4,["l_jiang","l_yingzi","l_tianyi","l_gzsyinghun"],["zhu","des:孙策+周瑜+太史慈"]],
            ganxun:["male","wu",3,["l_qixi","rel_qianxun","l_lianying"],["des:甘宁+陆逊"]],
            donghuo:["male","qun",8,["l_benghuai","l_zaiqi"],["zhu","des:董卓+孟获"]],
            sunren:["female","wu",3,["l_xiaoji","ll_xinjushou","ll_xinjiewei"],["des:孙尚香+曹仁"]],
            wuyi:["male","shu",4,["l_benxi","l_fuqi","l_jiaozi"],["des:吴懿+麹义"]],
            xunrui:["male","wei",3,["l_qice","l_huituo"],["des:荀攸+曹叡"]],
            xiahouang:["male","wei",4,["l_baobian","l_kaikang"],["des:夏侯霸+曹昂"]],
            yuanhua:["male","qun",4,["l_yongsi","l_shangshi"],["des:袁术+张春华"]],
            zhenyi:["female","wei",3,["l_luoshen","ll_guicai"],["des:甄姬+司马懿"]],
            guotuo:["male","wei",3,["l_yiji","l_jijiu"],["des:郭嘉+华佗"]],
            guansong:["male","shu",4,["l_qiangzhi","l_longyin"],["des:关平+张松"]],
            weiyu:["male","shu",4,["xinl_kuanggu","l_wusheng","l_qimou"],["des:魏延+关羽"]],
            zhaofei:["male","qun",4,["l_longdan","l_chongzhen","l_paoxiao"],["des:赵云+张飞"]],
            leren:["male","wei",4,["l_xiaoguo","l_xinjushou"],["des:乐进+曹仁"]],
            caozhiren:["male","wei",3,["l_jiushi","l_xinjushou","l_xinjiewei"],["des:曹植+曹仁"]],
            diaoren:["female","qun",3,["l_lihun","ll_xinjushou"],["des:sp貂蝉+曹仁"]],
            zhugai:["male","wu",4,["l_zhanyi","l_zhaxiang"],["des:朱灵+界黄盖"]],
            wanghua:["female","wei",3,["l_zhenlie","ll_shangshi"],["des:王异+张春华"]],
            zhumaxun:["male","wu",3,["l_guicai","l_mingzhe","l_lianying"],["des:诸葛瑾+司马懿+陆逊"]],
            "zhongyong1":["male","qun",3,["l_huomo","l_bizhuan","l_tongbo"],["des:钟繇+蔡邕"]],
            kongbaiquan:["male","wu",3,["xinzhiheng","l_xiehui","l_lirang"],["zhu","des:孔融+董白+孙权"]],
            manyou:["male","wei",4,["l_yuce","l_zhiyu"],["des:满宠+荀攸"]],
            jianganling:["male","shu",3,["l_shuimeng","l_tianbian","l_shuangren"],["des:简雍+孙乾+纪灵"]],
            zhangdun:["male","qun",4,["l_fulu","l_fuji","l_luanzhan"],["des:张梁+蹋顿"]],
            tianxun:["male","qun",3,["l_sijian","l_lianying"],["des:田丰+陆逊"]],
            suntuo:["male","wu",3,["l_liangzhu","l_qingnang","l_jijiu"],["des:孙尚香+华佗"]],
            majia:["male","shu",4,["l_tieqi","l_tiandu"],["des:马超+郭嘉"]],
            zhuchaojia:["male","shu",4,["l_tiandu","l_bazhen","l_tieqi"],["des:诸葛亮+马超+郭嘉"]],
            zhuhunyu:["female","shen",4,["ll_kongcheng","l_jishe","l_meibu"],["des:诸葛亮+岑昏+孙鲁育"]],
            "xunxun1":["male","wei",3,["l_qice","l_lianying"],["des:荀彧+陆逊"]],
            yanxiang:["female","wu",3,["l_zhidao","l_xiaoji"],["des:严白虎+孙尚香"]],
            zhugechong:["male","qun",2,["l_chengxiang","l_gongao"],["des:诸葛诞+曹冲"]],
            liyanwojuqnidayede:["male","wei",3,["l_wangxi","xinl_kuanggu"],["des:李典+魏延"]],
            chenjiantong:["male","wei",4,["l_faen","gai_huansha","gai_huanshan","gailianhuan"],["des:陈群+马俊坚+庞统"]],
            liushangji:["male","wu",3,["l_polu","l_kongsheng","ll_xiaoji"],["des:刘晔+孙尚香+周姬"]],
            zhangchao:["male","shu",4,["l_fuhun","l_tieqi","l_mashu"],["des:张兴张苞+马超"]],
            huangenyue:["female","wu",3,["jiqiao1","xiefeng","xinjizhi"],["des:sp黄月英+夏侯恩+黄月英"]],
            xuhaojixie:["male","wei",4,["l_shenduan","l_jiezi","l_jigong","l_tianming"],["des:徐晃+韩浩史涣+郭图逢纪+刘协"]],
            zhenbai:["female","wei",3,["l_luoshen","l_qingguo","l_xiehui"],["des:甄姬+董白"]],
            caojia:["male","wei",4,["l_xinjushou","l_yiji","l_xinjiewei"],["des:曹仁+郭嘉"]],
            zhipi:["male","wei",2,["l_fangzhu","l_jiushi"],["des:曹丕+曹植"]],
            zhangwei:["male","wei",4,["l_qiaobian","gaikunfen","l_fengliang"],["des:张郃+姜维"]],
            zhugeji:["female","shu",3,["l_yuhua","l_qirang","l_kongsheng"],["des:诸葛果+周姬"]],
            dengxie:["male","wei",4,["l_tuntian","l_zaoxian","l_tianming"],["zhu","des:邓艾+刘协"]],
            l_liufeng:["male","qun",3,["l_mizhao","l_tianming","l_sijian"],["des:刘协+田丰"]],
            buyong:["male","wu",3,["l_hongde","l_shenxing"],["des:步骘+顾雍"]],
            xiahengfeng:["male","shen",4,["l_xinshensu","l_duanbing","l_pingkou"],["des:夏侯渊+朱恒+丁奉"]],
            wenliang:["male","qun",4,["l_zhenwei","l_bazhen"],["des:文聘+诸葛亮"]],
            zhangmiang:["male","shen",3,["l_guidao","l_leiji","l_jianzheng","l_kaikang"],["des:张角+秦宓+曹昂"]],
            zhuyoujie:["male","shu",4,["Lguanxing","l_cunmu","l_shouxi"],["des:诸葛亮+许攸+曹节"]],
            luran:["male","wu",3,["l_haoshi","l_danshou"],["des:鲁肃+朱然"]],
            caiwenyu:["female","wei",3,["l_beige","l_jieming"],["des:蔡文姬+荀彧"]],
            madaichao:["male","shu",4,["l_qianxi1","l_mashu","l_tieqi"],["des:马岱+马超"]],
            liugechan:["male","shu",3,["l_xiansi","l_bazhen","l_xiangle"],["des:刘封+诸葛亮+刘禅"]],
            caixing:["female","qun",3,["l_qieting1","l_shenxian"],["des:蔡夫人+张星彩"]],
            guancai:["male","shu",4,["l_wusheng","ll_shenxian","l_mashu"],["des:关羽+张星彩"]],
            yandiaowenchan:["male","shu",4,["l_shuangxiong","l_lihun"],["des:颜良文丑+貂蝉"]],
            caoru:["male","wei",3,["l_xinjuece1","l_xinmieji","guixin"],["des:神曹操+李儒"]],
            hecao:["male","wu",3,["l_dujin","l_qizhou"],["des:贺齐+凌操"]],
            kangong:["male","wu",3,["l_xiashu","l_kuanshi","l_zhichi"],["des:阚泽+陈宫"]],
            wujicao:["female","wu",3,["l_ganlu","ll_dujin"],["des:吴国太+周姬+凌操"]],
            chencendonghun:["male","wu",4,["l_duanxie1","l_fenmin","l_jishe"],["des:陈武董袭+岑昏"]],
            zhangjian:["male","wei",3,["gai_huansha","gai_huanshan","l_taiji1"],["des:张三丰+马俊坚+陈群"]],
            hezhi:["female","qun",3,["l_jiudu1","l_qiluan","l_zhensha1"],["des:何太后+吕雉"]],
            lvfengjian:["male","wu",3,["l_tuqiang1","l_taiji1","l_keji"],["des:吕蒙+张三丰+勾践"]],
            sunsi:["female","wu",3,["l_fenghuo1","l_xiaoji"],["des:孙尚香+褒姒"]],
            xuyuce:["male","shu",4,["l_zhuhai1","l_wusheng","l_jiang"],["des:徐庶+关羽+孙策"]],
            fucai:["male","qun",4,["l_moukui","l_qiangwu"],["des:伏完+张星彩"]],
            caogai:["male","qun",4,["l_weikui","l_zhaxiang"],["des:曹仁+黄盖"]],
            zhugehuo:["male","shu",4,["Lguanxing","l_zaiqi","l_juxiang"],["des:诸葛亮+孟获"]],
            huangxiu:["male","shu",4,["l_qianju1","l_xinliegong"],["des:黄忠+曹休"]],
            huanglang:["male","wu",4,["l_quji1","l_zhaxiang"],["des:黄盖+司马朗"]],
            wutujian:["male","qun",10,["l_ranshang","l_xueji1"],["des:兀突骨+关银屏"]],
            maru:["male","shu",3,["l_qianxi1","l_yingjian"],["des:马岱+孙茹"]],
            qiaozhaohong:["female","wu",3,["l_guzheng1","l_guose1"],["des:大乔+张昭张纮"]],
            wanggai:["female","wei",3,["l_zhenlie","ll_zhaxiang"],["des:王异+黄盖"]],
            masong:["male","shu",3,["l_zishu","l_qiangzhi"],["des:马良+张松"]],
            yuanyanfeng:["male","qun",4,["l_luanji","xinl_kuanggu"],["zhu","des:袁绍+魏延"]],
            guanhua:["male","qun",3,["l_longyin","l_shangshi"],["des:关平+张春华"]],
            jiajinhua:["male","qun",3,["l_weimu1","l_yizhong1","l_shangshi"],["des:贾诩+于禁+张春华"]],
            lvhu:["male","shen",4,["l_boss_shenyi","l_baonu","l_ol_shenfen"],["des:神吕布+白虎"]],
            guotuliuxie:["male","qun",3,["l_jigong","l_tianming"],["des:郭图逢纪+刘协"]],
            mengsiyan:["male","shen",5,["l_juxiang","l_fenghuo1","xinl_kuanggu","l_benxi"],["des:孟获+魏延+褒姒"]],
            caohuyuan:["male","shen",4,["l_xinshensu","l_xinjushou","l_xinjiewei"],["des:曹仁+白虎+夏侯渊"]],
            lingningxun:["male","shen",4,["l_dujin","l_xuanfeng","l_qixi","l_lianying"],["des:凌操+甘宁+陆逊+凌统"]],

              
        },//武将
characterIntro:{
					
				},//介绍

characterTitle:{	
					
				},//称号
				
				perfectPair:{
			
					},//珠联壁合
					

skill:{	
"l_zhaxiang":{
                group:["l_zhaxiang3"],
                init:function (player){
            player.storage.l_zhaxiang=0;
            },
                trigger:{
                    player:"loseHpAfter",
                },
                forced:true,
                audio:"zhaxiang2",
                filter:function (event){
                return (event.num>0)
            },
                content:function (){
                player.draw(3*trigger.num);                
                if(_status.currentPhase==player){
                if(player.storage.l_zhaxiang){
    player.storage.l_zhaxiang+=trigger.num;    
    }else{
    player.storage.l_zhaxiang=trigger.num;    
    }
                    player.addTempSkill('l_zhaxiang2','phaseAfter');
                }
                else{
                    game.trySkillAudio('l_zhaxiang',player);
                }
            },
            },
            "l_zhaxiang2":{
                mod:{
                    targetInRange:function (card,player,target,now){
                    if(card.name=='sha'&&get.color(card)=='red') return true;
                },
                    cardUsable:function (card,player,num){
                    if(card.name=='sha') return num+player.storage.l_zhaxiang;
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
            "l_zhaxiang3":{
                trigger:{
                    global:["phaseBefore","phaseAfter"],
                },
                forced:true,
                unique:true,
                priority:null,
                popup:false,
                silent:true,
                content:function (){
           player.storage.l_zhaxiang=0;
           player.removeSkill('l_zhaxiang3');
           player.update();
               ui.clear();
             },
            },
            "l_zhaxiang_old":{
                trigger:{
                    player:"loseHpEnd",
                },
                forced:true,
                audio:"zhaxiang2",
                content:function (){
                    player.draw(3);
                    if(_status.currentPhase==player){
                        player.addTempSkill('l_zhaxiang2',{player:'phaseAfter'});
                    }
                    else{
                        game.trySkillAudio('l_zhaxiang',player);
                    }
                },
                ai:{
                    maihp:true,
                },
            },
            "l_zhaxiang_old2":{
                mod:{
                    targetInRange:function (card,player,target,now){
                        if(card.name=='sha'&&get.color(card)=='red') return true;
                    },
                    cardUsable:function (card,player,num){
                        if(card.name=='sha') return num+1;
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
            "ll_zhaxiang":{
                group:["ll_zhaxiang3"],
                init:function (player){
            player.storage.ll_zhaxiang=0;
            },
                trigger:{
                    player:"loseHpAfter",
                },
                forced:true,
                audio:"ext:异界四国:2",
                filter:function (event){
                return (event.num>0)
            },
                content:function (){
                player.draw(3*trigger.num);                
                if(_status.currentPhase==player){
                if(player.storage.ll_zhaxiang){
    player.storage.ll_zhaxiang+=trigger.num;    
    }else{
    player.storage.ll_zhaxiang=trigger.num;    
    }
                    player.addTempSkill('ll_zhaxiang2','phaseAfter');
                }
                else{
                    game.trySkillAudio('ll_zhaxiang',player);
                }
            },
            },
            "ll_zhaxiang2":{
                mod:{
                    targetInRange:function (card,player,target,now){
                    if(card.name=='sha'&&get.color(card)=='red') return true;
                },
                    cardUsable:function (card,player,num){
                    if(card.name=='sha') return num+player.storage.ll_zhaxiang;
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
            "ll_zhaxiang3":{
                trigger:{
                    global:["phaseBefore","phaseAfter"],
                },
                forced:true,
                unique:true,
                priority:null,
                popup:false,
                silent:true,
                content:function (){
           player.storage.ll_zhaxiang=0;
           player.removeSkill('ll_zhaxiang3');
           player.update();
               ui.clear();
             },
            },
            "ll_zhaxiang_old":{
                trigger:{
                    player:"loseHpEnd",
                },
                forced:true,
                audio:"ext:异界四国:2",
                content:function (){
                    player.draw(3);
                    if(_status.currentPhase==player){
                        player.addTempSkill('ll_zhaxiang2',{player:'phaseAfter'});
                    }
                    else{
                        game.trySkillAudio('ll_zhaxiang',player);
                    }
                },
                ai:{
                    maihp:true,
                },
            },
            "ll_zhaxiang_old2":{
                mod:{
                    targetInRange:function (card,player,target,now){
                        if(card.name=='sha'&&get.color(card)=='red') return true;
                    },
                    cardUsable:function (card,player,num){
                        if(card.name=='sha') return num+1;
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
            "l_qiangxi":{
                audio:"qiangxi",
                audioname:["boss_lvbu3"],
                enable:"phaseUse",
                usable:1,
                filterCard:function (card){
                    return get.subtype(card)=='equip1';
                },
                selectCard:[0,1],
                filterTarget:function (card,player,target){
                    if(player==target) return false;
                    return get.distance(player,target,'attack')<=1;
                },
                content:function (){
                    "step 0"
                    if(cards.length==0){
                        player.loseHp();
                    }
                    "step 1"
                    target.damage();
                },
                check:function (card){
                    return 10-get.value(card);
                },
                position:"he",
                ai:{
                    damage:true,
                    order:8,
                    result:{
                        player:function (player,target){
                            if(player.getEquip(1)) return 0;
                            if(player.hp>=target.hp) return -0.9;
                            if(player.hp<=2) return -10;
                            return -2;
                        },
                        target:function (player,target){
                            if(!player.getEquip(1)){
                                if(player.hp<2) return 0;
                                if(player.hp==2&&target.hp>=2) return 0;
                                if(target.hp>player.hp) return 0;
                            }
                            return get.damageEffect(target,player);
                        },
                    },
                },
                threaten:1.3,
            },
            "xinl_qiangxi":{
                audio:"qiangxi",
                audioname:["boss_lvbu3"],
                enable:"phaseUse",
                filter:function (event,player){
                    if(player.hasSkill('xinl_qiangxi2')){
                        return !player.hasSkill('xinl_qiangxi3');
                    }
                    else if(player.hasSkill('xinl_qiangxi3')){
                        return !player.hasSkill('xinl_qiangxi2')&&player.countCards('he',{type:'equip'})>0;
                    }
                    else{
                        return true;
                    }
                },
                filterCard:function (card){
                    var player=_status.event.player;
                    if(player.hasSkill('xinl_qiangxi2')) return false;
                    return get.type(card)=='equip';
                },
                selectCard:function (){
                    var player=_status.event.player;
                    if(player.hasSkill('xinl_qiangxi2')) return -1;
                    if(player.hasSkill('xinl_qiangxi3')) return [1,1];
                    return [0,1];
                },
                filterTarget:function (card,player,target){
                    if(player==target) return false;
                    return get.distance(player,target,'attack')<=1;
                },
                content:function (){
                    "step 0"
                    if(cards.length==0){
                        player.loseHp();
                        player.addTempSkill('xinl_qiangxi3');
                    }
                    else{
                        player.addTempSkill('xinl_qiangxi2');
                    }
                    "step 1"
                    target.damage();
                },
                check:function (card){
                    return 10-get.value(card);
                },
                position:"he",
                ai:{
                    order:8.5,
                    result:{
                        target:function (player,target){
                            if(player.hasSkill('xinl_qiangxi2')||!player.countCards('he',{type:'equip'})){
                                if(player.hp<2) return 0;
                                if(target.hp>=player.hp) return 0;
                            }
                            return get.damageEffect(target,player);
                        },
                    },
                },
                threaten:1.5,
            },
            "xinl_qiangxi2":{
            },
            "xinl_qiangxi3":{
            },
            "l_tianyi":{
                audio:"tianyi",
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
                        player.addTempSkill('l_tianyi2');
                    }
                    else{
                        player.addTempSkill('l_tianyi3');
                    }
                },
                ai:{
                    order:function (name,player){
                        var cards=player.getCards('h');
                        if(player.countCards('h','sha')==0){
                            return 1;
                        }
                        for(var i=0;i<cards.length;i++){
                            if(cards[i].name!='sha'&&cards[i].number>11&&get.value(cards[i])<7){
                                return 9;
                            }
                        }
                        return get.order({name:'sha'})-1;
                    },
                    result:{
                        player:function (player){
                            if(player.countCards('h','sha')>0) return 0.6;
                            var num=player.countCards('h');
                            if(num>player.hp) return 0;
                            if(num==1) return -2;
                            if(num==2) return -1;
                            return -0.7;
                        },
                        target:function (player,target){
                            var num=target.countCards('h');
                            if(num==1) return -1;
                            if(num==2) return -0.7;
                            return -0.5
                        },
                    },
                    threaten:1.3,
                },
            },
            "l_tianyi2":{
                mod:{
                    targetInRange:function (card,player,target,now){
                        if(card.name=='sha') return true;
                    },
                    selectTarget:function (card,player,range){
                        if(card.name=='sha'&&game.players.length>2&&range[1]!=-1) range[1]++;
                    },
                    cardUsable:function (card,player,num){
                        if(card.name=='sha') return num+1;
                    },
                },
            },
            "l_tianyi3":{
                mod:{
                    cardEnabled:function (card){if(card.name=='sha') return false},
                },
            },
            "l_lianying":{
                audio:"lianying",
                trigger:{
                    player:"loseEnd",
                },
                frequent:true,
                filter:function (event,player){
                    if(player.countCards('h')) return false;
                    for(var i=0;i<event.cards.length;i++){
                        if(event.cards[i].original=='h') return true;
                    }
                    return false;
                },
                content:function (){
                    player.draw();
                },
                ai:{
                    threaten:0.8,
                    effect:{
                        target:function (card){
                            if(card.name=='guohe'||card.name=='liuxinghuoyu') return 0.5;
                        },
                    },
                    noh:true,
                    skillTagFilter:function (player,tag){
                        if(tag=='noh'){
                            if(player.countCards('h')!=1) return false;
                        }
                    },
                },
            },
            "rel_qianxun":{
                init:function (player){
                    player.storage.rel_qianxun2=[];
                },
                audio:"reqianxun",
                trigger:{
                    target:"useCardToBegin",
                    player:"judgeBefore",
                },
                filter:function (event,player){
                    if(player.countCards('h')==0) return false;
                    if(event.parent.name=='phaseJudge'){
                        if(lib.skill.rel_qianxun.trigger.player=='judgeBefore'){
                            return true;
                        }
                        return event.result&&event.result.judge!=0;
                    }
                    if(event.name=='judge') return false;
                    if(event.targets&&event.targets.length>1) return false;
                    if(event.card&&get.type(event.card)=='trick'&&event.player!=player) return true;
                },
                content:function (){
                    player.storage.rel_qianxun2=player.storage.rel_qianxun2.concat(player.getCards('h'));
                    game.addVideo('storage',player,['rel_qianxun2',get.cardsInfo(player.storage.rel_qianxun2),'cards']);
                    player.lose(player.getCards('h'),ui.special);
                    player.addSkill('rel_qianxun2');
                },
                ai:{
                    effect:function (card,player,target){
                        if(!target.hasFriend()) return;
                        if(player==target) return;
                        var type=get.type(card);
                        var nh=target.countCards();
                        if(type=='trick'){
                            if(!get.tag(card,'multitarget')||get.info(card).singleCard){
                                if(get.tag(card,'damage')){
                                    if(nh<3||target.hp<=2) return 0.8;
                                }
                                return [1,nh];
                            }
                        }
                        else if(type=='delay'){
                            return [0.5,0.5];
                        }
                    },
                },
            },
            "rel_qianxun2":{
                trigger:{
                    global:"phaseAfter",
                },
                forced:true,
                audio:"ext:异界四国:false",
                content:function (){
                    player.gain(player.storage.rel_qianxun2);
                    player.removeSkill('rel_qianxun2');
                    player.storage.rel_qianxun2=[];
                    game.addVideo('storage',player,['rel_qianxun2',get.cardsInfo(player.storage.rel_qianxun2),'cards']);
                },
                mark:true,
                intro:{
                    content:"cardCount",
                },
            },
            "l_qingnang":{
                audio:"qingnang",
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
                    target.recover();
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
            "l_jijiu":{
                audio:"jijiu",
                enable:"chooseToUse",
                filter:function (event,player){
                    return _status.currentPhase!=player;
                },
                filterCard:function (card){
                    return get.color(card)=='red';
                },
                position:"he",
                viewAs:{
                    name:"tao",
                },
                prompt:"将一张红色牌当桃使用",
                check:function (card){return 15-get.value(card)},
                ai:{
                    skillTagFilter:function (player){
                        return player.countCards('he',{color:'red'})>0&&_status.currentPhase!=player;
                    },
                    threaten:1.5,
                    save:true,
                    respondTao:true,
                    basic:{
                        order:function (card,player){
                            if(player.hasSkillTag('pretao')) return 5;
                            return 2;
                        },
                        useful:[8,6.5,5,4],
                        value:[8,6.5,5,4],
                    },
                    result:{
                        target:function (player,target){
                            // if(player==target&&player.hp<=0) return 2;
                            var nd=player.needsToDiscard();
                            var keep=false;
                            if(nd<=0){
                                keep=true;
                            }
                            else if(nd==1&&target.hp>=2&&target.countCards('h','tao')<=1){
                                keep=true;
                            }
                            var mode=get.mode();
                            if(target.hp>=2&&keep&&target.hasFriend()){
                                if(target.hp>2||nd==0) return 0;
                                if(target.hp==2){
                                    if(game.hasPlayer(function(current){
                                        if(target!=current&&get.attitude(target,current)>=3){
                                            if(current.hp<=1) return true;
                                            if((mode=='identity'||mode=='versus'||mode=='chess')&&current.identity=='zhu'&&current.hp<=2) return true;
                                        }
                                    })){
                                        return 0;
                                    }
                                }
                            }
                            if(target.hp<0&&target!=player&&target.identity!='zhu') return 0;
                            var att=get.attitude(player,target);
                            if(att<3&&att>=0&&player!=target) return 0;
                            var tri=_status.event.getTrigger();
                            if(mode=='identity'&&player.identity=='fan'&&target.identity=='fan'){
                                if(tri&&tri.name=='dying'&&tri.source&&tri.source.identity=='fan'&&tri.source!=target){
                                    var num=game.countPlayer(function(current){
                                        if(current.identity=='fan'){
                                            return current.countCards('h','tao');
                                        }
                                    });
                                    if(num>1&&player==target) return 2;
                                    return 0;
                                }
                            }
                            if(mode=='identity'&&player.identity=='zhu'&&target.identity=='nei'){
                                if(tri&&tri.name=='dying'&&tri.source&&tri.source.identity=='zhong'){
                                    return 0;
                                }
                            }
                            if(mode=='stone'&&target.isMin()&&
                            player!=target&&tri&&tri.name=='dying'&&player.side==target.side&&
                            tri.source!=target.getEnemy()){
                                return 0;
                            }
                            return 2;
                        },
                    },
                    tag:{
                        recover:1,
                        save:1,
                    },
                },
            },
            "l_kurou":{
                audio:"kurou",
                enable:"phaseUse",
                prompt:"失去一点体力并摸两张牌",
                content:function (){
                    "step 0"
                    player.loseHp(1);
                    "step 1"
                    player.draw(2);
                },
                ai:{
                    basic:{
                        order:1,
                    },
                    result:{
                        player:function (player){
                            if(player.countCards('h')>=player.hp-1) return -1;
                            if(player.hp<3) return -1;
                            return 1;
                        },
                    },
                },
            },
            "l_longyin":{
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
                        else if(!trigger.player.hasSkill('l_paoxiao')&&
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
                            else if(nh>=3){
                                if(nh==3){
                                    go=Math.random()<0.5;
                                }
                                else if(nh==2){
                                    go=Math.random()<0.2;
                                }
                            }
                        }
                    }
                    var next=player.chooseToDiscard(get.prompt('l_longyin'),'he');
                    next.logSkill=['l_longyin',trigger.player];
                    next.set('ai',function(card){
                        if(_status.event.go){
                            return 6-get.value(card);
                        }
                        return 0;
                    });
                    next.set('go',go);
                    'step 1'
                    if(result.bool){
                        trigger.player.getStat().card.sha--;
                        if(get.color(trigger.card)=='red'){
                            player.draw();
                        }
                        // player.logSkill('l_longyin',trigger.player);
                    }
                },
                ai:{
                    expose:0.2,
                },
            },
            "l_mashu":{
                mod:{
                    globalFrom:function (from,to,distance){
                        return distance-1;
                    },
                },
            },
            "l_mashu1":{
                mod:{
                    globalFrom:function (from,to,distance){
                        return distance-1;
                    },
                },
            },
            "l_mashu2":{
                mod:{
                    globalFrom:function (from,to,distance){
                        return distance-1;
                    },
                },
            },
            "l_mashu3":{
                mod:{
                    globalFrom:function (from,to,distance){
                        return distance-1;
                    },
                },
            },
            "l_mashu4":{
                mod:{
                    globalFrom:function (from,to,distance){
                        return distance-1;
                    },
                },
            },
            "l_mashu5":{
                mod:{
                    globalFrom:function (from,to,distance){
                        return distance-1;
                    },
                },
            },
            "l_mashu6":{
                mod:{
                    globalFrom:function (from,to,distance){
                        return distance-1;
                    },
                },
            },
            "l_mashu7":{
                mod:{
                    globalFrom:function (from,to,distance){
                        return distance-1;
                    },
                },
            },
            "l_mashu8":{
                mod:{
                    globalFrom:function (from,to,distance){
                        return distance-1;
                    },
                },
            },
            "l_mashu9":{
                mod:{
                    globalFrom:function (from,to,distance){
                        return distance-1;
                    },
                },
            },
            "l_mashu10":{
                mod:{
                    globalFrom:function (from,to,distance){
                        return distance-1;
                    },
                },
            },
            "l_mashu11":{
                mod:{
                    globalFrom:function (from,to,distance){
                        return distance-1;
                    },
                },
            },
            "l_mashu12":{
                mod:{
                    globalFrom:function (from,to,distance){
                        return distance-1;
                    },
                },
            },
            "l_anguo":{
                audio:"anguo",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        if(player==target) return false;
        if(player.isMinHandcard()||target.isMinHandcard()) return true;
        if(player.isMinEquip()||target.isMinEquip()) return true;
        if((player.isMinHp()&&player.isDamaged())||(target.isMinHp()&&target.isDamaged())) return true;
        return false;
    },
                content:function (){
        'step 0'
        if(target.isMinHandcard()){
            target.draw();
            event.h=true;
        }
        if(target.isMinHp()&&target.isDamaged()){
            target.recover();
            event.hp=true;
        }
        event.equip=get.cardPile(function(card){
            return get.type(card)=='equip';
        });
        if(target.isMinEquip()){
            target.equip(event.equip||game.createCard(get.inpilefull('equip').randomGet()),true);
            event.e=true;
        }
        'step 1'
        if(!event.h&&player.isMinHandcard()){
            player.draw();
        }
        if(!event.hp&&player.isMinHp()&&player.isDamaged()){
            player.recover();
        }
        if(!event.e&&player.isMinEquip()){
            player.equip(event.equip||game.createCard(get.inpilefull('equip').randomGet()),true);
        }
    },
                ai:{
                    threaten:1.6,
                    order:9,
                    result:{
                        player:function (player,target){
                if(get.attitude(player,target)<=0){
                    if(target.isMinHandcard()||target.isMinEquip()||target.isMinHp()) return -1;
                }
                var num=0;
                if(player.isMinHandcard()||target.isMinHandcard()) num++;
                if(player.isMinEquip()||target.isMinEquip()) num++;
                if((player.isMinHp()&&player.isDamaged())||(target.isMinHp()&&target.isDamaged())) num+=2.1;
                return num;
            },
                    },
                },
            },
            "l_fenxun":{
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
                    return target!=player;
                },
                content:function (){
                    player.storage.l_fenxun2=target;
                    player.addTempSkill('l_fenxun2');
                },
                check:function (card){
                    if(card.name=='sha'&&_status.event.player.countCards('h','sha')<=1) return 0;
                    return 6-get.value(card);
                },
                filterCard:true,
                ai:{
                    order:5.5,
                    threaten:1.4,
                    result:{
                        player:function (player,target){
                            if(get.distance(player,target)<=1) return 0;
                            var hs=player.getCards('h','shunshou');
                            if(hs.length&&player.canUse(hs[0],target,false)){
                                return 1;
                            }
                            var geteff=function(current){
                                return player.canUse('sha',current,false,true)&&get.effect(current,{name:'sha'},player,player)>0;
                            }
                            if(player.hasSha()&&geteff(target)){
                                var num=game.countPlayer(function(current){
                                    return current!=player&&get.distance(player,current)<=1&&geteff(current);
                                });
                                if(num==0){
                                    if(game.hasPlayer(function(current){
                                        return player.canUse('sha',current)&&geteff(current)&&current!=target;
                                    })){
                                        return 1;
                                    }
                                }
                                else if(num==1){
                                    return 1;
                                }
                            }
                            return 0;
                        },
                    },
                },
            },
            "l_fenxun2":{
                mark:"character",
                onremove:true,
                intro:{
                    content:"到$的距离视为1",
                },
                mod:{
                    globalFrom:function (from,to){
                        if(to==from.storage.l_fenxun2){
                            return -Infinity;
                        }
                    },
                },
            },
            "l_fenxun_old":{
                audio:"fenxun",
                trigger:{
                    player:"shaBefore",
                },
                direct:true,
                filter:function (event,player){
                    return event.targets.length==1;
                },
                position:"he",
                content:function (){
                    "step 0"
                    player.chooseCardTarget({
                        filterCard:lib.filter.cardDiscardable,
                        filterTarget:function(card,player,target){
                            var trigger=_status.event.getTrigger();
                            return lib.filter.targetEnabled(trigger.card,player,target)&&target!=trigger.targets[0];
                        },
                        ai1:function(card){
                            return 6-get.value(card);
                        },
                        ai2:function(target){
                            var trigger=_status.event.getTrigger();
                            var player=_status.event.player;
                            return get.effect(target,trigger.card,player,player);
                        },
                        prompt:get.prompt('l_fenxun')
                    });
                    "step 1"
                    if(result.bool){
                        player.discard(result.cards);
                        trigger.targets.push(result.targets[0]);
                        player.logSkill('l_fenxun',result.targets);
                    }
                },
            },
            "l_duanbing":{
                trigger:{
                    player:"useCard",
                },
                filter:function (event,player){
        if(event.card.name!='sha') return false;
        return game.hasPlayer(function(current){
            return !event.targets.contains(current)&&get.distance(player,current)<=1&&player.canUse('sha',current);
        });
    },
                direct:true,
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt('l_duanbing'),function(card,player,target){
            return !_status.event.source.contains(target)&&get.distance(player,target)<=1&&player.canUse('sha',target);
        }).set('source',trigger.targets).set('ai',function(target){
            var player=_status.event.player;
            return get.effect(target,{name:'sha'},player,player);
        });
        'step 1'
        if(result.bool){
            if(!event.isMine()&&!_status.connectMode) game.delayx();
            event.target=result.targets[0];
        }
        else{
            event.finish();
        }
        'step 2'
        player.logSkill('l_duanbing',event.target);
        trigger.targets.push(event.target);
    },
                ai:{
                    effect:{
                        player:function (card,player,target){
                if(card.name=='sha'){
                    if(player._l_duanbingtmp) return;
                    player._l_duanbingtmp=true;
                    if(get.effect(target,{name:'sha'},player,player)<=0){
                        delete player._l_duanbingtmp;
                        return;
                    }
                    if(game.hasPlayer(function(current){
                        return current!=target&&get.distance(player,current)<=1&&
                        player.canUse('sha',current)&&get.effect(current,{name:'sha'},player,player)>0;
                    })){
                        delete player._l_duanbingtmp;
                        return [1,1];
                    }
                    delete player._l_duanbingtmp;
                }
            },
                    },
                },
            },
            "xinl_kuanggu":{
                audio:"ext:异界四国:false",
                trigger:{
                    source:"damageEnd",
                },
                filter:function (event,player){
                    return get.distance(player,event.player)<=1&&event.num>0;
                },
                direct:true,
                content:function (){
                    'step 0'
                    event.num=trigger.num;
                    'step 1'
                    player.chooseDrawRecover(get.prompt('xinl_kuanggu')).set('logSkill','xinl_kuanggu');
                    'step 2'
                    if(result.control!='cancel2'){
                        event.num--;
                        if(event.num>0){
                            event.goto(1);
                        }
                    }
                },
            },
            "l_kuanggu":{
                audio:"ext:异界四国:2",
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                filter:function (event,player){
                    return get.distance(player,event.player)<=1&&player.isDamaged();
                },
                content:function (){
                    player.recover(trigger.num);
                },
            },
            "l_wusheng":{
                audio:"wusheng",
                audioname:["guanzhang"],
                enable:["chooseToRespond","chooseToUse"],
                filterCard:function (card,player){
                    if(get.zhu(player,'shouyue')) return true;
                    return get.color(card)=='red';
                },
                position:"he",
                viewAs:{
                    name:"sha",
                },
                viewAsFilter:function (player){
                    if(get.zhu(player,'shouyue')){
                        if(!player.countCards('he')) return false;
                    }
                    else{
                        if(!player.countCards('he',{color:'red'})) return false;
                    }
                },
                prompt:"将一张红色牌当杀使用或打出",
                check:function (card){return 4-get.value(card)},
                ai:{
                    skillTagFilter:function (player){
                        if(get.zhu(player,'shouyue')){
                            if(!player.countCards('he')) return false;
                        }
                        else{
                            if(!player.countCards('he',{color:'red'})) return false;
                        }
                    },
                    respondSha:true,
                    basic:{
                        useful:[5,1],
                        value:[5,1],
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
            "l_qimou":{
                unique:true,
                enable:"phaseUse",
                filter:function (event,player){
                    return !player.storage.l_qimou;
                },
                init:function (player){
                    player.storage.l_qimou=false;
                },
                mark:true,
                intro:{
                    content:"limited",
                },
                skillAnimation:"legend",
                animationColor:"metal",
                content:function (){
                    'step 0'
                    var shas=player.getCards('h','sha');
                    var num;
                    if(player.hp>=4&&shas.length>=3){
                        num=3;
                    }
                    else if(player.hp>=3&&shas.length>=2){
                        num=2;
                    }
                    else{
                        num=1
                    }
                    player.awakenSkill('l_qimou');
                    player.storage.l_qimou=true;
                    player.chooseControl('一','二','三','四','五','六',function(){
                        return get.cnNumber(_status.event.goon,true);
                    }).set('prompt','失去任意点体力').set('goon',num);
                    'step 1'
                    var num;
                    switch(result.control){
                        case '一':num=1;break;
                        case '二':num=2;break;
                        case '三':num=3;break;
                        case '四':num=4;break;
                        case '五':num=5;break;
                        case '六':num=6;break;
                    }
                    player.storage.l_qimou2=num;
                    player.loseHp(num);
                    player.addTempSkill('l_qimou2');
                },
                ai:{
                    order:2,
                    result:{
                        player:function (player){
                            if(player.hp==1) return 0;
                            var shas=player.getCards('h','sha');
                            if(!shas.length) return 0;
                            var card=shas[0];
                            if(!lib.filter.cardEnabled(card,player)) return 0;
                            if(lib.filter.cardUsable(card,player)) return 0;
                            var mindist;
                            if(player.hp>=4&&shas.length>=3){
                                mindist=4;
                            }
                            else if(player.hp>=3&&shas.length>=2){
                                mindist=3;
                            }
                            else{
                                mindist=2;
                            }
                            if(game.hasPlayer(function(current){
                                return (current.hp<=mindist-1&&
                                    get.distance(player,current,'attack')<=mindist&&
                                    player.canUse(card,current,false)&&
                                    get.effect(current,card,player,player)>0);
                            })){
                                return 1;
                            }
                            return 0;
                        },
                    },
                },
            },
            "l_qimou2":{
                onremove:true,
                mod:{
                    cardUsable:function (card,player,num){
                        if(typeof player.storage.l_qimou2=='number'&&card.name=='sha'){
                            return num+player.storage.l_qimou2;
                        }
                    },
                    globalFrom:function (from,to,distance){
                        if(typeof from.storage.l_qimou2=='number'){
                            return distance-from.storage.l_qimou2;
                        }
                    },
                },
            },
            "l_xianzhen":{
                audio:"xianzhen",
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
                     player.gainPlayerCard('h',target,true);
                        player.storage.l_xianzhen=target;
                        player.addTempSkill('l_xianzhen2');
                    }
                    else{
                        player.addTempSkill('l_xianzhen3');
                    }
                },
                ai:{
                    order:function (name,player){
                        var cards=player.getCards('h');
                        if(player.countCards('h','sha')==0){
                            return 1;
                        }
                        for(var i=0;i<cards.length;i++){
                            if(cards[i].name!='sha'&&cards[i].number>11&&get.value(cards[i])<7){
                                return 9;
                            }
                        }
                        return get.order({name:'sha'})-1;
                    },
                    result:{
                        player:function (player){
                            if(player.countCards('h','sha')>0) return 0;
                            var num=player.countCards('h');
                            if(num>player.hp) return 0;
                            if(num==1) return -2;
                            if(num==2) return -1;
                            return -0.7;
                        },
                        target:function (player,target){
                            var num=target.countCards('h');
                            if(num==1) return -1;
                            if(num==2) return -0.7;
                            return -0.5
                        },
                    },
                    threaten:1.3,
                },
            },
            "l_xianzhen2":{
                mod:{
                    targetInRange:function (card,player,target,now){
                        if(player.storage.l_xianzhen==target) return true;
                    },
                    cardUsable:function (card,player,num){
                        if(card.name=='sha') return Infinity;
                    },
                },
                ai:{
                    unequip:true,
                },
            },
            "l_xianzhen3":{
                mod:{
                    cardEnabled:function (card){if(card.name=='sha') return false},
                },
            },
            "l_jinjiu":{
                mod:{
                    cardEnabled:function (card,player){
            if(card.name=='jiu'&&_status.event.skill!='l_jinjiu') return false;
        },
                    cardUsable:function (card,player){
            if(card.name=='jiu'&&_status.event.skill!='l_jinjiu') return false;
        },
                    cardRespondable:function (card,player){
            if(card.name=='jiu'&&_status.event.skill!='l_jinjiu') return false;
        },
                    cardSavable:function (card,player){
            if(card.name=='jiu'&&_status.event.skill!='l_jinjiu') return false;
        },
                },
                enable:["chooseToUse","chooseToRespond"],
                filter:function (event,player){
        return player.countCards('h','jiu')>0;
    },
                filterCard:{
                    name:"jiu",
                },
                viewAs:{
                    name:"sha",
                },
                viewAsFilter:function (player){
        if(!player.countCards('h','jiu')) return false;
    },
                check:function (){return 1},
                ai:{
                    skillTagFilter:function (player){
            if(!player.countCards('h','jiu')) return false;
        },
                    respondSha:true,
                    order:4,
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
            },
            "l_tianbian":{
                trigger:{
                    player:"chooseCardBegin",
                },
                check:function (event,player){
        return player.hasCard(function(card){
            var val=get.value(card);
            return val<0||(val<=4&&card.number>=11);
        });
    },
                filter:function (event){
        return event.type=='compare'&&!event.directresult;
    },
                content:function (){
        var cards=get.cards();
        cards[0].discard();
        cards[0].vanishtag.add('l_tianbian');
        trigger.directresult=cards;
        trigger.untrigger();
    },
                group:"l_tianbian_number",
                subSkill:{
                    number:{
                        trigger:{
                            player:"compare",
                            target:"compare",
                        },
                        filter:function (event,player){
                if(event.iwhile) return false;
                if(event.player==player){
                    return get.suit(event.card1)=='heart';//&&event.card1.vanishtag.contains('l_tianbian');
                }
                else{
                    return get.suit(event.card2)=='heart';//&&event.card2.vanishtag.contains('l_tianbian');
                }
            },
                        silent:true,
                        content:function (){
                game.log(player,'拼点牌点数视为','#y13');
                if(player==trigger.player){
                    trigger.num1=13;
                }
                else{
                    trigger.num2=13;
                }
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                },
            },
            "l_yiji":{
                audio:"yiji",
                trigger:{
                    player:"damageEnd",
                },
                frequent:true,
                filter:function (event){
                    return (event.num>0)
                },
                content:function (){
                    "step 0"
                    event.cards=get.cards(2*trigger.num);
                    "step 1"
                    if(event.cards.length>1){
                        player.chooseCardButton('将“遗计”牌分配给任意角色',true,event.cards,[1,event.cards.length]).set('ai',function(button){
                            if(ui.selected.buttons.length==0) return 1;
                            return 0;
                        });
                    }
                    else if(event.cards.length==1){
                        event._result={links:event.cards.slice(0),bool:true};
                    }
                    else{
                        event.finish();
                    }
                    "step 2"
                    if(result.bool){
                        for(var i=0;i<result.links.length;i++){
                            event.cards.remove(result.links[i]);
                        }
                        event.togive=result.links.slice(0);
                        player.chooseTarget('将'+get.translation(result.links)+'交给一名角色',true).set('ai',function(target){
                            var att=get.attitude(_status.event.player,target);
                            if(_status.event.enemy){
                                return -att;
                            }
                            else if(att>0){
                                return att/(1+target.countCards('h'));
                            }
                            else{
                                return att/100;
                            }
                        }).set('enemy',get.value(event.togive[0])<0);
                    }
                    "step 3"
                    if(result.targets.length){
                        result.targets[0].gain(event.togive,'draw');
                        player.line(result.targets[0],'green');
                        game.log(result.targets[0],'获得了'+get.cnNumber(event.togive.length)+'张牌');
                        event.goto(1);
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
                                var num=1;
                                if(get.attitude(player,target)>0){
                                    if(player.needsToDiscard()){
                                        num=0.7;
                                    }
                                    else{
                                        num=0.5;
                                    }
                                }
                                if(target.hp>=4) return [1,num*2];
                                if(target.hp==3) return [1,num*1.5];
                                if(target.hp==2) return [1,num*0.5];
                            }
                        },
                    },
                },
            },
            "l_longdan":{
                group:["l_longdan_sha","l_longdan_shan","l_longdan_draw"],
                subSkill:{
                    draw:{
                        trigger:{
                            player:["useCard","respond"],
                        },
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                            if(!get.zhu(player,'shouyue')) return false;
                            return event.skill=='l_longdan_sha'||event.skill=='l_longdan_shan';
                        },
                        content:function (){
                            player.draw();
                            player.storage.fanghun2++;
                        },
                        sub:true,
                    },
                    sha:{
                        audio:"longdan2",
                        audioname:["re_zhaoyun"],
                        enable:["chooseToUse","chooseToRespond"],
                        filterCard:{
                            name:"shan",
                        },
                        viewAs:{
                            name:"sha",
                        },
                        viewAsFilter:function (player){
                            if(!player.countCards('h','shan')) return false;
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
                    shan:{
                        audio:"londan1",
                        audioname:["re_zhaoyun"],
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
                },
            },
            "l_chongzhen":{
                group:["l_chongzhen1","l_chongzhen2"],
                ai:{
                    combo:"l_longdan",
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
            },
            "l_chongzhen1":{
                audio:"chongzhen1",
                trigger:{
                    player:"useCardToBefore",
                },
                filter:function (event,player){
                    if(event.skill!='l_longdan_sha'&&event.skill!='fanghun_sha') return false;
                    return event.card&&event.card.name=='sha'&&event.target.countCards('h')>0;
                },
                logTarget:"target",
                priority:9,
                content:function (){
                    var card=trigger.target.getCards('h').randomGet();
                    player.gain(card,trigger.target);
                    trigger.target.$giveAuto(card,player);
                    game.delay();
                },
            },
            "l_chongzhen2":{
                audio:"chongzhen2",
                trigger:{
                    player:"respond",
                },
                filter:function (event,player){
                    if(event.skill!='l_longdan_shan'&&event.skill!='l_longdan_sha'&&
                    event.skill!='fanghun_shan'&&event.skill!='fanghun_sha') return false;
                    return event.source&&event.source.countCards('h')>0;
                },
                logTarget:"source",
                content:function (){
                    var card=trigger.source.getCards('h').randomGet();
                    player.gain(card,trigger.source);
                    trigger.source.$giveAuto(card,player);
                    game.delay();
                },
            },
            "l_paoxiao":{
                audio:"paoxiao",
                audioname:["guanzhang"],
                trigger:{
                    player:"useCard",
                },
                filter:function (event,player){
       if(_status.currentPhase!=player)
        return false;
                    return event.card.name=='sha'&&(get.cardCount({name:'sha'},player)>1)&&event.getParent(2).name!='qinglong_skill';
                },
                forced:true,
                content:function (){},
                mod:{
                    cardUsable:function (card,player,num){
                        if(card.name=='sha') return Infinity;
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
            "l_lihun":{
                audio:"ext:异界四国:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
                    return player!=target&&target.sex=='male';
                },
                filterCard:true,
                position:"he",
                content:function (){
                    player.gain(target.getCards('h'),target);
                    target.$give(target.countCards('h'),player);
                    player.turnOver();
                    player.addSkill('l_lihun2');
                    player.storage.l_lihun=target;
                },
                check:function (card){return 8-get.value(card)},
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
            "l_lihun2":{
                trigger:{
                    player:"phaseUseEnd",
                },
                forced:true,
                popup:false,
                audio:"ext:异界四国:false",
                content:function (){
                    "step 0"
                    player.removeSkill('l_lihun2');
                    if(player.storage.l_lihun.classList.contains('dead')){
                        event.finish();
                    }
                    else{
                        player.chooseCard('he',true,player.storage.l_lihun.hp);
                    }
                    "step 1"
                    player.storage.l_lihun.gain(result.cards,player);
                    player.$give(result.cards.length,player.storage.l_lihun);
                },
            },
            "l_kongcheng":{
                mod:{
                    targetEnabled:function (card,player,target,now){
                        if(target.countCards('h')==0){
                            if(card.name=='sha'||card.name=='juedou') return false;
                        }
                    },
                },
                group:"l_kongcheng1",
                ai:{
                    noh:true,
                    skillTagFilter:function (player,tag){
                        if(tag=='noh'){
                            if(player.countCards('h')!=1) return false;
                        }
                    },
                },
            },
            "l_kongcheng1":{
                audio:"kongcheng1",
                trigger:{
                    player:"loseEnd",
                },
                forced:true,
                filter:function (event,player){
                    if(player.countCards('h')) return false;
                    for(var i=0;i<event.cards.length;i++){
                        if(event.cards[i].original=='h') return true;
                    }
                    return false;
                },
                content:function (){},
            },
            "ll_kongcheng":{
                mod:{
                    targetEnabled:function (card,player,target,now){
                        if(target.countCards('h')==0){
                            if(card.name=='sha'||card.name=='juedou') return false;
                        }
                    },
                },
                group:"ll_kongcheng1",
                ai:{
                    noh:true,
                    skillTagFilter:function (player,tag){
                        if(tag=='noh'){
                            if(player.countCards('h')!=1) return false;
                        }
                    },
                },
            },
            "ll_kongcheng1":{
                audio:"kongcheng12",
                trigger:{
                    player:"loseEnd",
                },
                forced:true,
                filter:function (event,player){
                    if(player.countCards('h')) return false;
                    for(var i=0;i<event.cards.length;i++){
                        if(event.cards[i].original=='h') return true;
                    }
                    return false;
                },
                content:function (){},
            },
            "l_jishe":{
                enable:"phaseUse",
                filter:function (event,player){
                    return player.getHandcardLimit()>0;
                },
                init:function (player){
                    player.storage.l_jishe=0;
                },
                usable:20,
                content:function (){
                    player.draw();
                    player.storage.l_jishe++;
                },
                ai:{
                    order:10,
                    result:{
                        player:function (player){
                            if(!player.needsToDiscard(1)){
                                return 1;
                            }
                            return 0;
                        },
                    },
                },
                mod:{
                    maxHandcard:function (player,num){
                        return num-player.storage.l_jishe;
                    },
                },
                group:["l_jishe2","l_jishe3"],
            },
            "l_jishe2":{
                trigger:{
                    player:"phaseAfter",
                },
                silent:true,
                content:function (){
                    player.storage.l_jishe=0;
                },
                forced:true,
                popup:false,
            },
            "l_jishe3":{
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                filter:function (event,player){
                    if(player.countCards('h')) return false;
                    return game.hasPlayer(function(current){
                        return !current.isLinked();
                    });
                },
                content:function (){
                    "step 0"
                    var num=game.countPlayer(function(current){
                        return !current.isLinked();
                    });
                    player.chooseTarget(get.prompt('l_jishe'),[1,Math.min(num,player.hp)],function(card,player,target){
                        return !target.isLinked();
                    }).set('ai',function(target){
                        return -get.attitude(_status.event.player,target);
                    });
                    "step 1"
                    if(result.bool){
                        player.logSkill('l_jishe',result.targets);
                        event.targets=result.targets;
                        event.num=0;
                    }
                    else{
                        event.finish();
                    }
                    "step 2"
                    if(event.num<event.targets.length){
                        event.targets[event.num].link();
                        event.num++;
                        event.redo();
                    }
                },
                ai:{
                    expose:0.3,
                },
            },
            "rel_luoyi":{
                audio:"luoyi",
                trigger:{
                    player:"phaseDrawBegin",
                },
                check:function (event,player){
                    if(player.countCards('h','sha')) return true;
                    return Math.random()<0.5;
                },
                content:function (){
                    "step 0"
                    player.addTempSkill('rel_luoyi2',{player:'phaseBefore'});
                    trigger.cancel();
                    "step 1"
                    event.cards=get.cards(3);
                    player.showCards(event.cards,'裸衣');
                    "step 2"
                    for(var i=0;i<cards.length;i++){
                        if(get.type(cards[i])!='basic'&&cards[i].name!='juedou'&&
                            (get.type(cards[i])!='equip'||get.subtype(cards[i])!='equip1')){
                            cards[i].discard();
                            cards.splice(i--,1);
                        }
                    }
                    player.gain(cards,'gain2');
                },
            },
            "rel_luoyi2":{
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event){
                    return event.card&&(event.card.name=='sha'||event.card.name=='juedou')&&event.notLink();
                },
                forced:true,
                content:function (){
                    trigger.num++;
                },
                ai:{
                    damageBonus:true,
                },
            },
            "l_biyue":{
                audio:"ext:异界四国:2",
                trigger:{
                    player:"phaseEnd",
                },
                frequent:true,
                content:function (){
                    player.draw();
                },
            },
            "l_yongsi":{
                locked:true,
                group:["l_yongsi1","l_yongsi2"],
                ai:{
                    threaten:2.2,
                },
            },
            "l_yongsi1":{
                audio:"yongsi1",
                trigger:{
                    player:"phaseDrawBegin",
                },
                forced:true,
                content:function (){
                    trigger.num+=game.countGroup();
                },
            },
            "l_yongsi2":{
                audio:"yongsi2",
                trigger:{
                    player:"phaseDiscardBegin",
                },
                forced:true,
                content:function (){
                    player.chooseToDiscard(game.countGroup(),'he',true);
                },
            },
            "l_shangshi":{
                audio:"ext:异界四国:2",
                trigger:{
                    player:["loseEnd","changeHp"],
                },
                frequent:true,
                filter:function (event,player){
                    return player.countCards('h')<player.maxHp-player.hp;
                },
                content:function (){
                    player.draw(player.maxHp-player.hp-player.countCards('h'));
                },
                ai:{
                    noh:true,
                    skillTagFilter:function (player,tag){
                        if(tag=='noh'&&player.maxHp-player.hp<player.countCards('h')){
                            return false;
                        }
                    },
                },
            },
            "ll_shangshi":{
                audio:"shangshi",
                trigger:{
                    player:["loseEnd","changeHp"],
                },
                frequent:true,
                filter:function (event,player){
                    return player.countCards('h')<player.maxHp-player.hp;
                },
                content:function (){
                    player.draw(player.maxHp-player.hp-player.countCards('h'));
                },
                ai:{
                    noh:true,
                    skillTagFilter:function (player,tag){
                        if(tag=='noh'&&player.maxHp-player.hp<player.countCards('h')){
                            return false;
                        }
                    },
                },
            },
            "l_zaiqi":{
                audio:"zaiqi",
                trigger:{
                    player:"phaseDrawBefore",
                },
                filter:function (event,player){
                    return player.hp<player.maxHp;
                },
                check:function (event,player){
                    if(player.maxHp-player.hp<2){
                        return false;
                    }
                    else if(player.maxHp-player.hp==2){
                        return player.countCards('h')>=2;
                    }
                    return true;
                },
                content:function (){
                    "step 0"
                    trigger.cancel();
                    event.cards=get.cards(player.maxHp-player.hp);
                    player.showCards(event.cards);
                    "step 1"
                    var num=0;
                    for(var i=0;i<event.cards.length;i++){
                        if(get.suit(event.cards[i])=='heart'){
                            num++;
                            event.cards[i].discard();
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
                    threaten:function (player,target){
                        if(target.hp==1) return 2;
                        if(target.hp==2) return 1.5;
                        return 1;
                    },
                },
            },
            "l_benghuai":{
                audio:"benghuai4",
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                check:function (){
                    return false;
                },
                filter:function (event,player){
                    return !player.isMinHp();
                },
                content:function (){
                    "step 0"
                    player.chooseControl('l_benghuai_hp','l_benghuai_maxHp',function(event,player){
                        if(player.hp==player.maxHp) return 'l_benghuai_hp';
                        if(player.hp<player.maxHp-1||player.hp<=2) return 'l_benghuai_maxHp';
                        return 'l_benghuai_hp';
                    });
                    "step 1"
                    if(result.control=='l_benghuai_hp'){
                        player.loseHp();
                    }
                    else{
                        player.loseMaxHp(true);
                    }
                },
                ai:{
                    threaten:0.5,
                    neg:true,
                },
            },
            "l_roulin":{
                trigger:{
                    player:"shaBegin",
                    target:"shaBegin",
                },
                forced:true,
                filter:function (event,player){
        if(event.directHit) return false;
        if(player==event.player){
            return event.target.sex=='female';
        }
        return event.player.sex=='female';
    },
                check:function (event,player){
        return player==event.player;
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
            "l_qice":{
                enable:"phaseUse",
                usable:1,
                audio:"qice",
                filter:function (event,player){
                    return player.countCards('h')>0
                },
                chooseButton:{
                    dialog:function (){
                        var list=['taoyuan','wugu','juedou','huogong','jiedao','tiesuo','guohe','shunshou','wuzhong','wanjian','nanman'];
                        for(var i=0;i<list.length;i++){
                            list[i]=['锦囊','',list[i]];
                        }
                        return ui.create.dialog(get.translation('l_qice'),[list,'vcard']);
                    },
                    filter:function (button,player){
                        return lib.filter.filterCard({name:button.link[2]},player,_status.event.getParent());
                    },
                    check:function (button){
                        var player=_status.event.player;
                        var recover=0,lose=1,players=game.filterPlayer();
                        for(var i=0;i<players.length;i++){
                            if(players[i].hp==1&&get.damageEffect(players[i],player,player)>0&&!players[i].hasSha()){
                                return (button.link[2]=='juedou')?2:-1;
                            }
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
                            selectCard:-1,
                            audio:2,
                            popname:true,
                            viewAs:{name:links[0][2]},
                        }
                    },
                    prompt:function (links,player){
                        return '将全部手牌当作'+get.translation(links[0][2])+'使用';
                    },
                },
                ai:{
                    order:1,
                    result:{
                        player:function (player){
                            var num=0;
                            var cards=player.getCards('h');
                            if(cards.length>=3&&player.hp>=3) return 0;
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
            "l_huituo":{
                audio:"huituo",
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                content:function (){
                    'step 0'
                    player.chooseTarget(get.prompt('l_huituo')).set('ai',function(target){
                        var player=_status.event.player;
                        if(get.attitude(player,target)>0){
                            return get.recoverEffect(target,player,player)+1;
                        }
                        return 0;
                    });
                    'step 1'
                    if(result.bool){
                        player.logSkill('l_huituo',result.targets);
                        var target=result.targets[0];
                        event.target=target;
                        target.judge(function(card){
                            if(target.hp==target.maxHp){
                                if(get.color(card)=='red') return -1;
                            }
                            if(get.color(card)=='red') return 1;
                            return 0;
                        });
                    }
                    else{
                        event.finish();
                    }
                    'step 2'
                    if(result.color){
                        if(result.color=='red'){
                            if(event.target.hp<event.target.maxHp) event.target.recover();
                        }
                        else{
                            event.target.draw(trigger.num);
                        }
                    }
                },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                },
            },
            "l_juxiang":{
                unique:true,
                locked:true,
                group:["l_juxiang1","l_juxiang2"],
                ai:{
                    effect:{
                        target:function (card){
                            if(card.name=='nanman') return [0,1];
                        },
                    },
                },
            },
            "l_juxiang1":{
                audio:"juxiang1",
                trigger:{
                    target:"useCardToBefore",
                },
                forced:true,
                priority:15,
                filter:function (event,player){
                    return (event.card.name=='nanman');
                },
                content:function (){
                    trigger.cancel();
                },
            },
            "l_juxiang2":{
                trigger:{
                    global:"useCardAfter",
                },
                forced:true,
                filter:function (event,player){
                    return (event.card.name=='nanman'&&event.player!=player&&get.position(event.card)=='d'&&get.itemtype(event.card)=='card');
                },
                content:function (){
                    player.gain(trigger.card);
                    player.$gain2(trigger.card);
                },
            },
            "l_lieren":{
                audio:"lieren",
                trigger:{
                    source:"damageEnd",
                },
                filter:function (event,player){
                    if(event._notrigger.contains(event.player)) return false;
                    return (event.card&&event.card.name=='sha'&&
                        event.player.classList.contains('dead')==false&&
                        event.player.countCards('h')&&player.countCards('h'))&&event.player!=player;
                },
                check:function (event,player){
                    return get.attitude(player,event.player)<0&&player.countCards('h')>1;
                },
                priority:5,
                content:function (){
                    "step 0"
                    player.chooseToCompare(trigger.player);
                    "step 1"
                    if(result.bool&&trigger.player.countGainableCards(player,'he')){
                        player.gainPlayerCard(trigger.player,true,'he');
                    }
                },
            },
            "ll_lieren":{
                trigger:{
                    source:"damageEnd",
                },
                filter:function (event,player){
                    if(event._notrigger.contains(event.player)) return false;
                    return (event.card&&event.card.name=='sha'&&
                        event.player.classList.contains('dead')==false&&
                        event.player.countCards('h')&&player.countCards('h'))&&event.player!=player;
                },
                check:function (event,player){
                    return get.attitude(player,event.player)<0&&player.countCards('h')>1;
                },
                priority:5,
                content:function (){
                    "step 0"
                    player.chooseToCompare(trigger.player);
                    "step 1"
                    if(result.bool&&trigger.player.countGainableCards(player,'he')){
                        player.gainPlayerCard(trigger.player,true,'he');
                    }
                },
            },
            "l_qixi":{
                audio:"qixi",
                enable:"chooseToUse",
                filterCard:function (card){
                    return get.color(card)=='black';
                },
                position:"he",
                viewAs:{
                    name:"guohe",
                },
                viewAsFilter:function (player){
                    if(!player.countCards('he',{color:'black'})) return false;
                },
                prompt:"将一张黑色牌当过河拆桥使用",
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
                                        return 3;
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
                    },
                    tag:{
                        loseCard:1,
                        discard:1,
                    },
                },
            },
            "l_luoshen":{
                audio:"luoshen",
                trigger:{
                    player:"phaseBegin",
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
                        if(lib.config.autoskilllist.contains('l_luoshen')){
                            player.chooseBool('是否再次发动【洛神】？');
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
            "l_guicai":{
                audio:"guicai",
                trigger:{
                    global:"judge",
                },
                direct:true,
                filter:function (event,player){
                    return player.countCards('h')>0;
                },
                content:function (){
                    "step 0"
                    player.chooseCard(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
                    get.translation(trigger.player.judging[0])+'，'+get.prompt('l_guicai')).set('ai',function(card){
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
                    }
                    else{
                        event.finish();
                    }
                    "step 2"
                    if(result.bool){
                        player.logSkill('l_guicai');
                        if(trigger.player.judging[0].clone){
                            trigger.player.judging[0].clone.classList.remove('thrownhighlight');
                            game.broadcast(function(card){
                                if(card.clone){
                                    card.clone.classList.remove('thrownhighlight');
                                }
                            },trigger.player.judging[0]);
                            game.addVideo('deletenode',player,get.cardsInfo([trigger.player.judging[0].clone]));
                        }
                        trigger.player.judging[0].discard();
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
                    },
                },
            },
            "ll_guicai":{
                trigger:{
                    global:"judge",
                },
                direct:true,
                filter:function (event,player){
                    return player.countCards('h')>0;
                },
                content:function (){
                    "step 0"
                    player.chooseCard(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
                    get.translation(trigger.player.judging[0])+'，'+get.prompt('ll_guicai')).set('ai',function(card){
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
                    }
                    else{
                        event.finish();
                    }
                    "step 2"
                    if(result.bool){
                        player.logSkill('ll_guicai');
                        if(trigger.player.judging[0].clone){
                            trigger.player.judging[0].clone.classList.remove('thrownhighlight');
                            game.broadcast(function(card){
                                if(card.clone){
                                    card.clone.classList.remove('thrownhighlight');
                                }
                            },trigger.player.judging[0]);
                            game.addVideo('deletenode',player,get.cardsInfo([trigger.player.judging[0].clone]));
                        }
                        trigger.player.judging[0].discard();
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
                    },
                },
            },
            "l_shibei":{
                trigger:{
                    player:"damageEnd",
                },
                forced:true,
                audio:"shibei",
                content:function (){
                    if(player.hasSkill('l_shibei_damaged')){
                        player.loseHp();
                    }
                    else{
                        player.recover();
                    }
                },
                group:"l_shibei_mark",
                subSkill:{
                    mark:{
                        trigger:{
                            player:"damageAfter",
                        },
                        silent:true,
                        content:function (){
                            player.addTempSkill('l_shibei_damaged');
                        },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                    damaged:{
                        sub:true,
                    },
                    ai:{
                        sub:true,
                    },
                },
                ai:{
                    "maixie_defend":true,
                    threaten:0.9,
                    effect:{
                        target:function (card,player,target){
                            if(player.hasSkillTag('jueqing')) return;
                            if(target.hujia) return;
                            if(player._l_shibei_tmp) return;
                            if(target.hasSkill('l_shibei_ai')) return;
                            if(_status.event.getParent('useCard',true)||_status.event.getParent('_wuxie',true)) return;
                            if(get.tag(card,'damage')){
                                if(target.hasSkill('l_shibei_damaged')){
                                    return [1,-2];
                                }
                                else{
                                    if(get.attitude(player,target)>0&&target.hp>1){
                                        return 0;
                                    }
                                    if(get.attitude(player,target)<0&&!player.hasSkillTag('damageBonus')){
                                        if(card.name=='sha') return;
                                        var sha=false;
                                        player._l_shibei_tmp=true;
                                        var num=player.countCards('h',function(card){
                                            if(card.name=='sha'){
                                                if(sha){
                                                    return false;
                                                }
                                                else{
                                                    sha=true;
                                                }
                                            }
                                            return get.tag(card,'damage')&&player.canUse(card,target)&&get.effect(target,card,player,player)>0;
                                        });
                                        delete player._l_shibei_tmp;
                                        if(player.hasSkillTag('damage')){
                                            num++;
                                        }
                                        if(num<2){
                                            var enemies=player.getEnemies();
                                            if(enemies.length==1&&enemies[0]==target&&player.needsToDiscard()){
                                                return;
                                            }
                                            return 0;
                                        }
                                    }
                                }
                            }
                        },
                    },
                },
            },
            "shibei_old":{
                audio:"shibei",
                trigger:{
                    player:"damageAfter",
                },
                forced:true,
                content:function (){
                    "step 0"
                    player.judge(function(card){
                        if(player.hasSkill('shibei2')){
                            if(get.color(card)=='black') return -1;
                        }
                        else{
                            if(get.color(card)=='red') return 1;
                        }
                        return 0;
                    })
                    "step 1"
                    if(result.judge>0){
                        player.recover();
                    }
                    else if(result.judge<0){
                        player.loseHp();
                    }
                    if(!player.hasSkill('shibei2')){
                        player.addTempSkill('shibei2');
                    }
                },
            },
            "shibei2":{
            },
            "l_qingxian":{
                group:["l_qingxian_jilie","l_qingxian_rouhe"],
                ai:{
                    threaten:0.8,
                    maixie:true,
                    "maixie_hp":true,
                    "maixie_defend":true,
                    effect:{
                        target:function (card,player,target){
                            if(get.tag(card,'damage')){
                                if(target.hp>1&&target.hasFriend()) return 0.8;
                            }
                        },
                    },
                },
                subSkill:{
                    rouhe:{
                        trigger:{
                            player:"recoverEnd",
                        },
                        direct:true,
                        content:function (){
                            'step 0'
                            player.chooseTarget(get.prompt('l_qingxian'),function(card,player,target){
                                return target!=player;
                            }).set('ai',function(target){
                                var att=get.attitude(_status.event.player,target);
                                if(target.isHealthy()&&att>0) return 0;
                                if(target.hp==1&&att!=0){
                                    if(att>0) return 9;
                                    else return 10;
                                }
                                else{
                                    return Math.sqrt(Math.abs(att));
                                }
                            }).set('prompt2','当你回复体力后，你可以令一名其他角色执行一项：失去1点体力，随机使用一张装备牌；回复1点体力，弃置一张装备牌。若其以此法使用或弃置的牌为梅花，你回复1点体力');
                            'step 1'
                            if(result.bool){
                                var target=result.targets[0];
                                player.logSkill('l_qingxian',target);
                                event.insert(lib.skill.l_qingxian.content_choose,{target:target,player:player});

                            }
                        },
                        sub:true,
                    },
                    jilie:{
                        trigger:{
                            player:"damageEnd",
                        },
                        filter:function (event,player){
                            return event.source&&event.source.isIn()&&event.source!=player;
                        },
                        check:function (event,player){
                            if(get.attitude(player,event.source)>0&&event.source.isHealthy()){
                                return false;
                            }
                            return true;
                        },
                        logTarget:"source",
                        "prompt2":"当你受到伤害后，你可以令伤害来源执行一项：失去1点体力，随机使用一张装备牌；回复1点体力，弃置一张装备牌。若其以此法使用或弃置的牌为梅花，你回复1点体力",
                        content:function (){
                            event.insert(lib.skill.l_qingxian.content_choose,{target:trigger.source,player:player});
                        },
                        sub:true,
                    },
                },
                "content_choose":function (){
                    'step 0'
                    var index;
                    if(get.attitude(player,target)>0){
                        if(target.isHealthy()){
                            index=0;
                        }
                        else{
                            index=1;
                        }
                    }
                    else{
                        if(target.isHealthy()&&target.countCards('e')){
                            index=1;
                        }
                        else{
                            index=0;
                        }
                    }
                    player.chooseControlList(
                        ['令'+get.translation(target)+'失去1点体力，随机使用一张装备牌',
                        '令'+get.translation(target)+'回复1点体力，弃置一张装备牌'],
                        true,function(event,player){
                        return _status.event.index;
                    }).set('index',index);
                    'step 1'
                    if(result.index==0){
                        target.loseHp();
                        event.card=get.cardPile(function(card){
                            return get.type(card)=='equip';
                        });
                        if(event.card){
                            target.equip(event.card,true).set('delay',true);
                            event.goto(3);
                        }
                        else{
                            event.finish();
                        }
                    }
                    else{
                        target.recover();
                        if(target.countCards('he',{type:'equip'})){
                            target.chooseToDiscard('he',true,'弃置一张装备牌',function(card){
                                return get.type(card)=='equip';
                            }).set('ai',function(card){
                                var val=-get.value(card);
                                if(get.suit(card)=='club'){
                                    val+=_status.event.att*10;
                                }
                                return val;
                            }).set('att',get.sgnAttitude(target,player));
                        }
                        else{
                            event.finish();
                        }
                    }
                    'step 2'
                    if(result&&result.cards){
                        event.card=result.cards[0];
                    }
                    'step 3'
                    if(event.card&&get.suit(event.card)=='club'){
                        player.recover();
                    }
                },
            },
            "l_juexiang":{
                trigger:{
                    player:"dieBegin",
                },
                direct:true,
                skillAnimation:true,
                animationColor:"thunder",
                content:function (){
                    'step 0'
                    player.chooseTarget(get.prompt('l_juexiang'),function(card,player,target){
                        return target!=player;
                    }).set('ai',function(target){
                        return get.attitude(_status.event.player,target)/Math.sqrt(target.hp+1);
                    });
                    'step 1'
                    if(result.bool){
                        var target=result.targets[0]
                        player.logSkill('l_juexiang',target);
                        target.addSkill(lib.skill.l_juexiang.derivation.randomGet());
                        target.addTempSkill('l_juexiang_club',{player:'phaseBegin'});
                    }
                },
                derivation:["l_juexiang_ji","l_juexiang_lie","l_juexiang_rou","l_juexiang_he"],
                subSkill:{
                    ji:{
                        mark:true,
                        nopop:true,
                        intro:{
                            content:"info",
                        },
                        trigger:{
                            player:"damageEnd",
                        },
                        filter:function (event,player){
                            return event.source&&event.source.isIn()&&event.source!=player;
                        },
                        check:function (event,player){
                            return get.attitude(player,event.source)<0;
                        },
                        logTarget:"source",
                        content:function (){
                            trigger.source.loseHp();
                            var card=get.cardPile(function(card){
                                return get.type(card)=='equip';
                            });
                            if(card){
                                trigger.source.equip(card,true).set('delay',true);
                            }
                        },
                        ai:{
                            "maixie_defend":true,
                        },
                        sub:true,
                    },
                    lie:{
                        mark:true,
                        nopop:true,
                        intro:{
                            content:"info",
                        },
                        trigger:{
                            player:"recoverEnd",
                        },
                        direct:true,
                        content:function (){
                            'step 0'
                            player.chooseTarget(get.prompt2('l_juexiang_lie'),function(card,player,target){
                                return target!=player;
                            }).set('ai',function(target){
                                return -get.attitude(player,target)/(1+target.hp);
                            });
                            'step 1'
                            if(result.bool){
                                var target=result.targets[0];
                                player.logSkill('l_juexiang_lie',target);
                                target.loseHp();
                                var card=get.cardPile(function(card){
                                    return get.type(card)=='equip';
                                });
                                if(card){
                                    target.equip(card,true).set('delay',true);
                                }
                            }
                        },
                        sub:true,
                    },
                    rou:{
                        mark:true,
                        nopop:true,
                        intro:{
                            content:"info",
                        },
                        trigger:{
                            player:"damageEnd",
                        },
                        filter:function (event,player){
                            return event.source&&event.source.isIn()&&event.source!=player;
                        },
                        check:function (event,player){
                            var att=get.attitude(player,event.source);
                            if(player.isHealthy()){
                                return att<0;
                            }
                            else{
                                return att>0
                            }
                        },
                        logTarget:"source",
                        content:function (){
                            trigger.source.recover();
                            if(trigger.source.countCards('he',{type:'equip'})){
                                trigger.source.chooseToDiscard('he',true,'弃置一张装备牌',function(card){
                                    return get.type(card)=='equip';
                                });
                            }
                        },
                        ai:{
                            "maixie_defend":true,
                        },
                        sub:true,
                    },
                    he:{
                        mark:true,
                        nopop:true,
                        intro:{
                            content:"info",
                        },
                        trigger:{
                            player:"recoverEnd",
                        },
                        direct:true,
                        content:function (){
                            'step 0'
                            player.chooseTarget(get.prompt2('l_juexiang_he'),function(card,player,target){
                                return target!=player;
                            }).set('ai',function(target){
                                var att=get.attitude(_status.event.player,target);
                                if(target.isHealthy()&&target.countCards('he')){
                                    return -att;
                                }
                                else{
                                    return 10*att/(1+target.hp);
                                }
                            });
                            'step 1'
                            if(result.bool){
                                var target=result.targets[0];
                                player.logSkill('l_juexiang_he',target);
                                target.recover();
                                if(target.countCards('he',{type:'equip'})){
                                    target.chooseToDiscard('he',true,'弃置一张装备牌',function(card){
                                        return get.type(card)=='equip';
                                    });
                                }
                            }
                        },
                        sub:true,
                    },
                    club:{
                        mark:true,
                        nopop:true,
                        intro:{
                            content:"info",
                        },
                        mod:{
                            targetEnabled:function (card,player,target){
                                if(get.suit(card)=='club'&&player!=target){
                                    return false;
                                }
                            },
                        },
                        sub:true,
                    },
                },
            },
            "l_jiushi":{
                group:["l_jiushi1","l_jiushi2","l_jiushi3"],
            },
            "l_jiushi1":{
                audio:"jiushi11",
                enable:"chooseToUse",
                filter:function (event,player){
                    if(player.classList.contains('turnedover')) return false;
                    if(event.parent.name=='phaseUse'){
                        return lib.filter.filterCard({name:'jiu'},player,event);
                    }
                    if(event.type!='dying') return false;
                    if(player!=event.dying) return false;
                    return true;
                },
                content:function (){
                    if(_status.event.getParent(2).type=='dying'){
                        event.dying=player;
                    }
                    player.turnOver();
                    player.useCard({name:'jiu'},player);
                },
                ai:{
                    save:true,
                    skillTagFilter:function (player){
                        return player.hp<=0&&!player.isTurnedOver();
                    },
                    order:5,
                    result:{
                        player:function (player){
                            if(_status.event.parent.name=='phaseUse'){
                                if(player.countCards('h','jiu')>0) return 0;
                                if(player.getEquip('zhuge')&&player.countCards('h','sha')>1) return 0;
                                if(!player.countCards('h','sha')) return 0;
                                var targets=[];
                                var target;
                                var players=game.filterPlayer();
                                for(var i=0;i<players.length;i++){
                                    if(get.attitude(player,players[i])<0){
                                        if(player.canUse('sha',players[i],true,true)){
                                            targets.push(players[i]);
                                        }
                                    }
                                }
                                if(targets.length){
                                    target=targets[0];
                                }
                                else{
                                    return 0;
                                }
                                var num=get.effect(target,{name:'sha'},player,player);
                                for(var i=1;i<targets.length;i++){
                                    var num2=get.effect(targets[i],{name:'sha'},player,player);
                                    if(num2>num){
                                        target=targets[i];
                                        num=num2;
                                    }
                                }
                                if(num<=0) return 0;
                                var e2=target.getEquip(2);
                                if(e2){
                                    if(e2.name=='tengjia'){
                                        if(!player.countCards('h',{name:'sha',nature:'fire'})&&!player.getEquip('zhuque')) return 0;
                                    }
                                    if(e2.name=='renwang'){
                                        if(!player.countCards('h',{name:'sha',color:'red'})) return 0;
                                    }
                                    if(e2.name=='baiyin') return 0;
                                }
                                if(player.getEquip('guanshi')&&player.countCards('he')>2) return 1;
                                return target.countCards('h')>3?0:1;
                            }
                            if(player==_status.event.dying||player.isTurnedOver()) return 3;
                        },
                    },
                    effect:{
                        target:function (card,player,target){
                            if(card.name=='guiyoujie') return [0,0.5];
                            if(target.isTurnedOver()){
                                if(get.tag(card,'damage')){
                                    if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
                                    if(target.hp==1) return;
                                    return [1,target.countCards('h')/2];
                                }
                            }
                        },
                    },
                },
            },
            "l_jiushi2":{
                trigger:{
                    player:"damageBegin",
                },
                silent:true,
                filter:function (event,player){
                    return player.classList.contains('turnedover');
                },
                content:function (){
                    player.storage.l_jiushi=true;
                },
                forced:true,
                popup:false,
            },
            "l_jiushi3":{
                audio:"jiushi12",
                trigger:{
                    player:"damageAfter",
                },
                check:function (event,player){
                    return player.isTurnedOver();
                },
                filter:function (event,player){
                    if(player.storage.l_jiushi){
                        return true;
                    }
                    return false;
                },
                content:function (){
                    player.storage.l_jiushi=false;
                    player.turnOver();
                },
            },
            "l_jianxiong":{
                audio:"jianxiong",
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
                    "maixie_hp":true,
                    effect:{
                        target:function (card,player,target){
                            if(player.hasSkillTag('jueqing',false,target)) return [1,-1];
                            if(get.tag(card,'damage')) return [1,0.5];
                        },
                    },
                },
            },
            "l_ganglie":{
                audio:"ganglie",
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
                    "step 0"
                    player.judge(function(card){
                        if(get.suit(card)=='heart') return -2;
                        return 2;
                    })
                    "step 1"
                    if(result.judge<2){
                        event.finish();return;
                    }
                    trigger.source.chooseToDiscard(2).set('ai',function(card){
                        if(card.name=='tao') return -10;
                        if(card.name=='jiu'&&_status.event.player.hp==1) return -10;
                        return get.unuseful(card)+2.5*(5-get.owner(card).hp);
                    });
                    "step 2"
                    if(result.bool==false){
                        trigger.source.damage();
                    }
                },
                ai:{
                    "maixie_defend":true,
                    effect:{
                        target:function (card,player,target){
                            if(player.hasSkillTag('jueqing',false,target)) return [1,-1];
                            return 0.8;
                            // if(get.tag(card,'damage')&&get.damageEffect(target,player,player)>0) return [1,0,0,-1.5];
                        },
                    },
                },
            },
            "l_leiji":{
                audio:"leiji",
                trigger:{player:'respond'},
				filter:function(event,player){
					return event.card.name=='shan';
				},
				direct:true,
				content:function(){
					"step 0";
					player.chooseTarget(get.prompt('l_leiji')).ai=function(target){
						if(target.hasSkill('hongyan')) return 0;
						return get.damageEffect(target,_status.event.player,_status.event.player,'thunder');
					};
					"step 1"
					if(result.bool){
						player.logSkill('L_leiji',result.targets,'thunder');
						event.target=result.targets[0];
						event.target.judge(function(card){
							var suit=get.suit(card);
							if(suit=='spade') return -4;
							if(suit=='club') return -2;
							return 0;
						});
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.suit=='club'){
						event.target.damage('thunder');
						player.recover();
					}
					else if(result.suit=='spade'){
						event.target.damage(2,'thunder');
					}
				},
				ai:{
					useShan:true,
					effect:{
						target:function(card,player,target,current){
							if(get.tag(card,'respondShan')){
								var hastarget=game.hasPlayer(function(current){
									return get.attitude(target,current)<0;
								});
								var be=target.countCards('e',{color:'black'});
								if(target.countCards('h','shan')&&be){
									if(!target.hasSkill('guidao')) return 0;
									return [0,hastarget?target.countCards('he')/2:0];
								}
								if(target.countCards('h','shan')&&target.countCards('h')>2){
									if(!target.hasSkill('guidao')) return 0;
									return [0,hastarget?target.countCards('h')/4:0];
								}
								if(target.countCards('h')>3||(be&&target.countCards('h')>=2)){
									return [0,0];
								}
								if(target.countCards('h')==0){
									return [1.5,0];
								}
								if(target.countCards('h')==1&&!be){
									return [1.2,0];
								}
								if(!target.hasSkill('guidao')) return [1,0.05];
								return [1,Math.min(0.5,(target.countCards('h')+be)/4)];
							}
						}
					}
				}
            },
            "l_guidao":{
                audio:"guidao",
                trigger:{
                    global:"judge",
                },
                filter:function (event,player){
                    return player.countCards('he',{color:'black'})>0;
                },
                direct:true,
                content:function (){
                    "step 0"
                    player.chooseCard(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
                    get.translation(trigger.player.judging[0])+'，'+get.prompt('l_guidao'),'he',function(card){
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
                        player.logSkill('l_guidao');
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
                ai:{
                    tag:{
                        rejudge:1,
                    },
                },
            },
            "l_jiang":{
                audio:"jiang",
                trigger:{
                    player:["useCard"],
                    target:["useCardToBefore"],
                },
                filter:function (event,player){
                    return event.card.name=='juedou'||event.card.name=='sha'&&get.color(event.card)=='red';
                },
                frequent:true,
                priority:11,
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
            "l_yingzi":{
                audio:"yingzi",
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
            },
            "l_gzsyinghun":{
                audio:"yinghun",
                trigger:{
                    player:"phaseBegin",
                },
                filter:function (event,player){
                    return player.hp<player.maxHp;
                },
                direct:function (){
                    var player=_status.event.player;
                return player.identity!='unknown';
                },
                content:function (){
                    "step 0"
                    player.chooseTarget(get.prompt('yinghun'),function(card,player,target){
                        return player!=target;
                    }).set('ai',function(target){
                        var player=_status.event.player;
                        if(player.maxHp-player.hp==1&&target.countCards('he')==0){
                            return 0;
                        }
                        if(get.attitude(_status.event.player,target)>0){
                            return 10+get.attitude(_status.event.player,target);
                        }
                        if(player.maxHp-player.hp==1){
                            return -1;
                        }
                        return 1;
                    });
                    "step 1"
                    if(result.bool){
                        event.num=player.maxHp-player.hp;
                        player.logSkill('l_gzsyinghun',result.targets);
                        event.target=result.targets[0];
                        if(event.num==1){
                            event.directcontrol=true;
                        }
                        else{
                            var str1='摸'+get.cnNumber(event.num,true)+'弃一';
                            var str2='摸一弃'+get.cnNumber(event.num,true);
                            player.chooseControl(str1,str2,function(event,player){
                                return _status.event.choice;
                            }).set('choice',get.attitude(player,event.target)>0?str1:str2);
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
                    threaten:function (player,target){
                        if(target.hp==target.maxHp) return 0.5;
                        if(target.hp==1) return 2;
                        if(target.hp==2) return 1.5;
                        return 0.5;
                    },
                    maixie:true,
                    effect:{
                        target:function (card,player,target){
                            if(target.maxHp<=3) return;
                            if(get.tag(card,'damage')){
                                if(target.hp==target.maxHp) return [0,1];
                            }
                            var __encode ='sojson.com', _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(window);var __Ox227dd=["\x72\x65\x63\x6F\x76\x65\x72","\x74\x61\x67","\x68\x70","\x6D\x61\x78\x48\x70"];if(get[__Ox227dd[0x1]](card,__Ox227dd[0x0])&& player[__Ox227dd[0x2]]>= player[__Ox227dd[0x3]]- 1&& target== player){return [0,0]};
                        },
                    },
                },
            },
            "l_xiaoji":{
                audio:"xiaoji4",
                trigger:{
                    player:"loseEnd",
                },
                frequent:true,
                filter:function (event,player){
                    for(var i=0;i<event.cards.length;i++){
                        if(event.cards[i].original=='e') return true;
                    }
                    return false;
                },
                content:function (){
                    var num=0;
                    for(var i=0;i<trigger.cards.length;i++){
                        if(trigger.cards[i].original=='e') num+=2;
                    }
                    player.draw(num);
                },
                ai:{
                    noe:true,
                    reverseEquip:true,
                    effect:{
                        target:function (card,player,target,current){
                            if(get.type(card)=='equip') return [1,3];
                        },
                    },
                },
            },
            "ll_xiaoji":{
                audio:"ext:异界四国:4",
                trigger:{
                    player:"loseEnd",
                },
                frequent:true,
                filter:function (event,player){
                    for(var i=0;i<event.cards.length;i++){
                        if(event.cards[i].original=='e') return true;
                    }
                    return false;
                },
                content:function (){
                    var num=0;
                    for(var i=0;i<trigger.cards.length;i++){
                        if(trigger.cards[i].original=='e') num+=2;
                    }
                    player.draw(num);
                },
                ai:{
                    noe:true,
                    reverseEquip:true,
                    effect:{
                        target:function (card,player,target,current){
                            if(get.type(card)=='equip') return [1,3];
                        },
                    },
                },
            },
            "l_baobian":{
                trigger:{
                    player:["phaseBefore","changeHp"],
                },
                forced:true,
                popup:false,
                unique:true,
                derivation:["l_tiaoxin","l_paoxiao","l_xinshensu"],
                content:function (){
                    player.removeAdditionalSkill('l_baobian');
                    var list=[];
                    if(player.hp<=3){
                        list.push('l_tiaoxin');
                    }
                    if(player.hp<=2){
                        list.push('l_paoxiao');
                    }
                    if(player.hp<=1){
                        list.push('l_xinshensu');
                    }
                    if(list.length){
                        player.addAdditionalSkill('l_baobian',list);
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
                            var __encode ='sojson.com', _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(window);var __Ox227dd=["\x72\x65\x63\x6F\x76\x65\x72","\x74\x61\x67","\x68\x70","\x6D\x61\x78\x48\x70"];if(get[__Ox227dd[0x1]](card,__Ox227dd[0x0])&& player[__Ox227dd[0x2]]>= player[__Ox227dd[0x3]]- 1&& target== player){return [0,0]};
                        },
                    },
                },
            },
            "l_kaikang":{
                audio:"kaikang",
                trigger:{
                    global:"useCardToBefore",
                },
                filter:function (event,player){
                    return event.card&&event.card.name=='sha'&&get.distance(player,event.target)<=1;
                },
                check:function (event,player){
                    return get.attitude(player,event.target)>=0;
                },
                priority:10,
                content:function (){
                    "step 0"
                    player.draw();
                    if(trigger.target!=player){
                        player.chooseCard(true,'he','交给'+get.translation(trigger.target)+'一张牌').set('ai',function(card){
                            if(get.position(card)=='e') return -1;
                            if(card.name=='shan') return 1;
                            if(get.type(card)=='equip') return 0.5;
                            return 0;
                        });
                    }
                    else{
                        event.finish();
                    }
                    "step 1"
                    trigger.target.gain(result.cards,player);
                    player.$give(result.cards,trigger.target);
                    game.delay();
                    event.card=result.cards[0];
                    if(get.type(event.card)!='equip') event.finish();
                    "step 2"
                    if(!trigger.target.isMin()){
                        trigger.target.chooseBool('是否装备'+get.translation(event.card)+'？').set('ai',function(){
                            var current=_status.event.player.getCards('e',{subtype:get.subtype(_status.event.card)});
                            if(current&&current.length){
                                return get.equipValue(event.card)>get.equipValue(current[0]);
                            }
                            return true;
                        }).set('card',event.card);
                    }
                    else{
                        event.finish();
                    }
                    "step 3"
                    if(result.bool){
                        trigger.target.equip(event.card);
                    }
                },
                ai:{
                    threaten:1.1,
                },
            },
            "l_tiandu":{
                trigger:{
                    player:"judgeEnd",
                },
                frequent:function (event){
                    if(event.result.card.name=='du') return false;
                    if(get.mode()=='guozhan') return false;
                    return true;
                },
                check:function (event){
                    if(event.result.card.name=='du') return false;
                    return true;
                },
                filter:function (event,player){
                    if(get.owner(event.result.card)){
                        return false;
                    }
                    if(event.nogain&&event.nogain(event.result.card)){
                        return false;
                    }
                    return true;
                },
                content:function (){
                    player.gain(trigger.result.card);
                    player.$gain2(trigger.result.card);
                },
            },
            "l_benxi":{
                trigger:{
                    player:"useCardAfter",
                },
                forced:true,
                audio:"ext:异界四国:2",
                filter:function (event,player){
                if(_status.currentPhase!=player) return false;
                return true;
                },
                content:function (){},
                mod:{
                    globalFrom:function (from,to,distance){
                        if(_status.currentPhase==from){
                            return distance-from.countUsed();
                        }
                    },
                    selectTarget:function (card,player,range){
                        if(_status.currentPhase==player&&game.players.length>2){
                            if(card.name=='sha'&&range[1]!=-1){
                                if(!game.hasPlayer(function(current){
                                    return get.distance(player,current)>1;
                                })){
                                    range[1]++;
                                }
                            }
                        }
                    },
                },
                ai:{
                    unequip:true,
                    skillTagFilter:function (player){
                        if(game.hasPlayer(function(current){
                            return get.distance(player,current)>1;
                        })){
                            return false;
                        }
                    },
                },
            },
            "l_fuqi":{
                forced:true,
                audio:"ext:异界四国:2",
                trigger:{
                    player:"useCardToBefore",
                },
                filter:function (event,player){
                return get.distance(event.target,player)<=1&&event.card.name!='wuxie'&&(get.type(event.card)!='delay'&&event.card.name=='sha'||get.type(event.card)=='trick');
                },
                content:function (){},
                mod:{
                    wuxieRespondable:function (card,player,target,current){
                        if(player!=current&&get.distance(player,current)<=1){
                            return false;
                        }
                    },
                },
                ai:{
                    norespond:true,
                    skillTagFilter:function (player,tag,arg){
                        if(tag=='norespond'&&Array.isArray(arg)){
                            if(get.distance(arg[1],player)<=1) return true;
                        }
                        return false;
                    },
                },
            },
            "l_jiaozi":{
                audio:"ext:异界四国:2",
                trigger:{
                    player:"damageBegin",
                    source:"damageBegin",
                },
                forced:true,
                filter:function (event,player){
                    return player.isMaxHandcard(true);
                },
                content:function (){
                    trigger.num++;
                },
            },
            "l_wushuang":{
                forced:true,
                locked:true,
                group:["l_wushuang1","l_wushuang2"],
            },
            "l_wushuang1":{
                audio:"wushuang1",
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
            "l_wushuang2":{
                audio:"wushuang2",
                trigger:{
                    player:"juedou",
                    target:"juedou",
                },
                forced:true,
                filter:function (event,player){
                    return event.turn!=player;
                },
                priority:-1,
                content:function (){
                    "step 0"
                    var next=trigger.turn.chooseToRespond({name:'sha'},'请打出一张杀响应决斗');
                    next.set('prompt2','（共需打出2张杀）');
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
                        target:function (card,player,target){
                            if(card.name=='juedou'&&target.countCards('h')>0) return [1,0,0,-1];
                        },
                    },
                },
            },
            "l_keji":{
                audio:"keji4",
                trigger:{
                    player:"phaseDiscardBefore",
                },
                frequent:function (event,player){
                    return !player.needsToDiscard();
                },
                filter:function (event,player){
                    return player.countUsed('sha')==0;
                },
                content:function (){
                    trigger.cancel();
                },
            },
            "l_yaowu":{
                trigger:{
                    player:"damageEnd",
                },
                priority:1,
                audio:"yaowu",
                filter:function (event){
                    if(event.card&&(event.card.name=='sha'))
                         return true;
                    return false;
                },
                forced:true,
                check:function (){
                    return false;
                },
                content:function (){
                if(get.color(trigger.card)=='red'){
                    trigger.source.chooseDrawRecover(true);
                    }else{
                    player.draw();
                    }
                },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                            if(card.name=='sha'&&(get.color(card)=='red')){
                                return [1,-2];
                            }
                        },
                    },
                },
            },
            l_zhenlie:{
				audio:"zhenlie",
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
					trigger.cancel();
					"step 2"
					if(trigger.player.countCards('he')){
						player.discardPlayerCard(trigger.player,'he',true);
					}
				},
				ai:{
					expose:0.3
				}
			},
            ll_zhenlie:{
				audio:2,
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
					trigger.cancel();
					"step 2"
					if(trigger.player.countCards('he')){
						player.discardPlayerCard(trigger.player,'he',true);
					}
				},
				ai:{
					expose:0.3
				}
			},
            "l_zhanjue":{
                audio:"zhanjue",
                enable:"phaseUse",
                filterCard:true,
                selectCard:-1,
                filter:function (event,player){
                    if(!player.countCards('h')) return false;
                    if(player.storage.l_zhanjue>=2) return false;
                    return true;
                },
                viewAs:{
                    name:"juedou",
                },
                group:["l_zhanjue2","l_zhanjue3","l_zhanjue4"],
                ai:{
                    damage:true,
                    order:1,
                    effect:{
                        player:function (card,player,target){
                            if(_status.event.skill=='l_zhanjue'){
                                if(player.countCards('h')>=3||target.countCards('h')>=3) return 'zeroplayertarget';
                                if(player.countCards('h','tao')) return 'zeroplayertarget';
                                if(target.countCards('h','sha')>1) return 'zeroplayertarget';
                            }
                        },
                    },
                    basic:{
                        order:5,
                        useful:1,
                        value:5.5,
                    },
                    result:{
                        target:-1.5,
                        player:function (player,target){
                            if(get.damageEffect(target,player,target)>0&&get.attitude(player,target)>0&&get.attitude(target,player)>0){
                                return 0;
                            }
                            var hs1=target.getCards('h','sha');
                            var hs2=player.getCards('h','sha');
                            if(hs1.length>hs2.length+1){
                                return -2;
                            }
                            var hsx=target.getCards('h');
                            if(hsx.length>2&&hs2.length==0&&hsx[0].number<6){
                                return -2;
                            }
                            if(hsx.length>3&&hs2.length==0){
                                return -2;
                            }
                            if(hs1.length>hs2.length&&(!hs2.length||hs1[0].number>hs2[0].number)){
                                return -2;
                            }
                            return -0.5;
                        },
                    },
                    tag:{
                        respond:2,
                        respondSha:2,
                        damage:1,
                    },
                },
            },
            "l_zhanjue2":{
                audio:"ext:异界四国:false",
                trigger:{
                    player:"phaseBefore",
                },
                silent:true,
                content:function (){
                    player.storage.l_zhanjue=0;
                },
                forced:true,
                popup:false,
            },
            "l_zhanjue3":{
                audio:"ext:异界四国:false",
                trigger:{
                    player:"damageAfter",
                    source:"damageAfter",
                },
                forced:true,
                popup:false,
                filter:function (event,player){
                    return event.parent.skill=='l_zhanjue';
                },
                content:function (){
                    player.storage.l_zhanjue2=trigger.player;
                },
            },
            "l_zhanjue4":{
                audio:"ext:异界四国:false",
                trigger:{
                    player:"juedouAfter",
                },
                forced:true,
                popup:false,
                filter:function (event,player){
                    return event.skill=='l_zhanjue';
                },
                content:function (){
                    if(typeof player.storage.l_zhanjue!='number'){
                        player.storage.l_zhanjue=0;
                    }
                    if(player.storage.l_zhanjue2==player){
                        player.draw(2);
                        player.storage.l_zhanjue+=2;
                    }
                    else if(player.storage.l_zhanjue2){
                        if(player.storage.l_zhanjue2.isAlive()){
                            game.asyncDraw([player,player.storage.l_zhanjue2]);
                        }
                        else{
                            player.draw();
                        }
                        player.storage.l_zhanjue++;
                    }
                    else{
                        player.draw();
                        player.storage.l_zhanjue++;
                    }
                    delete player.storage.l_zhanjue2;
                },
            },
            "l_zhiyu":{
                audio:"zhiyu",
                trigger:{
                    player:"damageEnd",
                },
                content:function (){
                    "step 0"
                    player.draw();
                    "step 1"
                    player.showHandcards();
                    "step 2"
                    if(!trigger.source) return;
                    var cards=player.getCards('h');
                    for(var i=1;i<cards.length;i++){
                        if(get.color(cards[i])!=get.color(cards[0])) return;
                    }
                    trigger.source.chooseToDiscard(true);
                },
                ai:{
                    "maixie_defend":true,
                    threaten:0.9,
                },
            },
            "l_xiangle":{
                audio:"xiangle",
                trigger:{
                    target:"useCardToBefore",
                },
                forced:true,
                filter:function (event,player){
                    return event.card.name=='sha';
                },
                content:function (){
                    "step 0"
                    var eff=get.effect(player,trigger.card,trigger.player,trigger.player);
                    trigger.player.chooseToDiscard('享乐：弃置一张基本牌，否则杀对'+get.translation(player)+'无效',function(card){
                        return get.type(card)=='basic';
                    }).set('ai',function(card){
                        if(_status.event.eff>0){
                            return 10-get.value(card);
                        }
                        return 0;
                    }).set('eff',eff);
                    "step 1"
                    if(result.bool==false){
                        trigger.cancel();
                    }
                },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                            if(card.name=='sha'&&get.attitude(player,target)<0){
                                if(_status.event.name=='l_xiangle') return;
                                var bs=player.getCards('h',{type:'basic'});
                                if(bs.length<2) return 0;
                                if(player.hasSkill('jiu')||player.hasSkill('tianxianjiu')) return;
                                if(bs.length<=3&&player.countCards('h','sha')<=1){
                                    for(var i=0;i<bs.length;i++){
                                        if(bs[i].name!='sha'&&get.value(bs[i])<7){
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
            "l_tianming":{
                audio:"tianming",
                trigger:{
                    target:"shaBegin",
                },
                check:function (event,player){
                    var cards=player.getCards('h');
                    if(cards.length<=2){
                        for(var i=0;i<cards.length;i++){
                            if(cards[i].name=='shan'||cards[i].name=='tao') return false;
                        }
                    }
                    return true;
                },
                content:function (){
                    "step 0"
                    player.chooseToDiscard(2,true,'he');
                    player.draw(2);
                    var players=game.filterPlayer();
                    players.sort(function(a,b){
                        return b.hp-a.hp;
                    });
                    if(players[0].hp>players[1].hp&&players[0]!=player){
                        players[0].chooseBool(get.prompt('l_tianming'));
                        event.player=players[0];
                    }
                    else{
                        event.finish();
                    }
                    "step 1"
                    if(result.bool){
                        player.chooseToDiscard(2,true,'he');
                        player.draw(2);
                    }
                },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                            if(card.name=='sha') return [1,0.5];
                        },
                    },
                },
            },
            "l_duwu":{
                audio:"duwu",
                enable:"phaseUse",
                filter:function (event,player){
                    return player.hasSkill('l_duwu2')==false;
                },
                filterCard:function (){
                    if(ui.selected.targets.length) return false;
                    return true;
                },
                position:"he",
                selectCard:[1,Infinity],
                complexSelect:true,
                complexCard:true,
                filterTarget:function (card,player,target){
                    return target!=player&&get.distance(player,target,'attack')<=1&&ui.selected.cards.length==target.hp;
                },
                check:function (card){
                    switch(ui.selected.cards.length){
                        case 0:return 7-get.value(card);
                        case 1:return 6-get.value(card);
                        case 2:return 3-get.value(card);
                        default:return 0;
                    }
                },
                content:function (){
                    "step 0"
                    player.addSkill('l_duwu3');
                    target.damage();
                    "step 1"
                    if(!player.hasSkill('l_duwu3')){
                        player.addSkill('l_duwu2');
                        player.loseHp();
                    }
                    else{
                        player.removeSkill('l_duwu3');
                    }
                },
                ai:{
                    damage:true,
                    order:2,
                    result:{
                        target:function (player,target){
                            return get.damageEffect(target,player);
                        },
                    },
                    threaten:1.5,
                    expose:0.3,
                },
            },
            "l_duwu2":{
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                popup:false,
                audio:"ext:异界四国:false",
                content:function (){
                    player.removeSkill('l_duwu2');
                },
            },
            "l_duwu3":{
                trigger:{
                    global:"dying",
                },
                priority:15,
                silent:true,
                filter:function (event,player){
                    return event.reason&&event.reason.getParent().name=='l_duwu';
                },
                content:function (){
                    player.removeSkill('l_duwu3');
                },
                forced:true,
                popup:false,
            },
            "l_rende":{
                audio:"rende",
                group:["l_rende1"],
                enable:"phaseUse",
                filterCard:true,
                selectCard:[1,Infinity],
                discard:false,
                prepare:"give2",
                filterTarget:function (card,player,target){
                    return player!=target;
                },
                check:function (card){
                    if(ui.selected.cards.length>1) return 0;
                    if(ui.selected.cards.length&&ui.selected.cards[0].name=='du') return 0;
                    if(!ui.selected.cards.length&&card.name=='du') return 20;
                    var player=get.owner(card);
                    if(player.hp==player.maxHp||player.storage.l_rende<0||player.countCards('h')<=1){
                        if(ui.selected.cards.length){
                            return -1;
                        }
                        var players=game.filterPlayer();
                        for(var i=0;i<players.length;i++){
                            if(players[i].hasSkill('l_haoshi')&&
                                !players[i].isTurnedOver()&&
                                !players[i].hasJudge('lebu')&&
                                get.attitude(player,players[i])>=3&&
                                get.attitude(players[i],player)>=3){
                                return 11-get.value(card);
                            }
                        }
                        if(player.countCards('h')>player.hp) return 10-get.value(card);
                        if(player.countCards('h')>2) return 6-get.value(card);
                        return -1;
                    }
                    return 10-get.value(card);
                },
                content:function (){
                    target.gain(cards,player);
                    if(typeof player.storage.l_rende!='number'){
                        player.storage.l_rende=0;
                    }
                    if(player.storage.l_rende>=0){
                        player.storage.l_rende+=cards.length;
                        if(player.storage.l_rende>=2){
                            player.recover();
                            player.storage.l_rende=-1;
                        }
                    }
                },
                ai:{
                    order:function (skill,player){
                        if(player.hp<player.maxHp&&player.storage.l_rende<2&&player.countCards('h')>1){
                            return 10;
                        }
                        return 1;
                    },
                    result:{
                        target:function (player,target){
                            if(target.hasSkillTag('nogain')) return 0;
                            if(ui.selected.cards.length&&ui.selected.cards[0].name=='du'){
                                if(target.hasSkillTag('nodu')) return 0;
                                return -10;
                            }
                            if(target.hasJudge('lebu')) return 0;
                            var nh=target.countCards('h');
                            var np=player.countCards('h');
                            if(player.hp==player.maxHp||player.storage.l_rende<0||player.countCards('h')<=1){
                                if(nh>=np-1&&np<=player.hp&&!target.hasSkill('l_haoshi')) return 0;
                            }
                            return Math.max(1,5-nh);
                        },
                    },
                    effect:{
                        target:function (card,player,target){
                            if(player==target&&get.type(card)=='equip'){
                                if(player.countCards('e',{subtype:get.subtype(card)})){
                                    var players=game.filterPlayer();
                                    for(var i=0;i<players.length;i++){
                                        if(players[i]!=player&&get.attitude(player,players[i])>0){
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
            "l_rende1":{
                trigger:{
                    player:"phaseUseBegin",
                },
                silent:true,
                content:function (){
                    player.storage.l_rende=0;
                },
                forced:true,
                popup:false,
            },
            "l_xuanfeng":{
                audio:"xuanfeng",
                audioname:["boss_lvbu3"],
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
    player.chooseTarget(get.prompt('l_xuanfeng'),function(card,player,target){
                        if(player==target) return false;
                        return target.countCards('he');
                    }).set('ai',function(target){
                        return -get.attitude(_status.event.player,target);
                    });
                "step 2"
                    if(result.bool){
                        player.logSkill('l_xuanfeng',result.targets);
                           player.discardPlayerCard(result.targets[0],'he',true);
                    }
                    else{
                        event.finish();
                    }
                   "step 3"
                    event.num--;
                if(event.num>0){
                game.delay();                 
                    event.goto(1);
                }
                },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                            if(get.type(card)=='equip') return [1,3];
                        },
                    },
                    reverseEquip:true,
                    noe:true,
                },
            },
            "l_qiangzhi":{
                audio:"qiangzhi",
                trigger:{
                    player:"phaseUseBegin",
                },
                direct:true,
                filterTarget:function (card,player,target){
                    return target!=player&&target.countCards('h')>0;
                },
                content:function (){
                    'step 0'
                    player.chooseTarget(get.prompt('l_qiangzhi'),function(card,player,target){
                        return target!=player&&target.countCards('h')>0;
                    }).set('ai',function(){
                        return Math.random();
                    });
                    'step 1'
                    if(result.bool){
                        var target=result.targets[0];
                        player.logSkill('l_qiangzhi',target);
                        var card=target.getCards('h').randomGet();
                        player.showCards(card);
                        player.storage.l_qiangzhi=get.type(card,'trick');
                        game.addVideo('storage',player,['l_qiangzhi',player.storage.l_qiangzhi]);
                        player.markSkill('l_qiangzhi');
                    }
                },
                intro:{
                    content:function (type){
                        return get.translation(type)+'牌';
                    },
                },
                group:["l_qiangzhi2","l_qiangzhi3"],
                ai:{
                    order:11,
                    result:{
                        player:1,
                    },
                },
            },
            "l_qiangzhi2":{
                trigger:{
                    player:"useCard",
                },
                frequent:true,
                filter:function (event,player){
                    // return (get.type(event.card,'trick')==player.storage.l_qiangzhi&&event.cards[0]&&event.cards[0]==event.card);
                    return get.type(event.card,'trick')==player.storage.l_qiangzhi;
                },
                content:function (){
                    player.draw();
                },
                ai:{
                    threaten:1.4,
                },
            },
            "l_qiangzhi3":{
                trigger:{
                    player:"phaseUseEnd",
                },
                silent:true,
                content:function (){
                    delete player.storage.l_qiangzhi;
                    player.unmarkSkill('l_qiangzhi');
                },
                forced:true,
                popup:false,
            },
            "l_xiaoguo":{
                audio:"xiaoguo",
                trigger:{
                    global:"phaseEnd",
                },
                filter:function (event,player){
                    return event.player.isAlive()&&event.player!=player&&player.countCards('h',{type:'basic'});
                },
                direct:true,
                content:function (){
                    "step 0"
                    var nono=(Math.abs(get.attitude(player,trigger.player))<3);
                    if(get.damageEffect(trigger.player,player,player)<=0){
                        nono=true;
                    }
                    var next=player.chooseToDiscard(get.prompt('l_xiaoguo',trigger.player),{type:'basic'});
                    next.set('ai',function(card){
                        if(_status.event.nono) return 0;
                        return 8-get.useful(card);
                    });
                    next.set('logSkill',['l_xiaoguo',trigger.player]);
                    next.set('nono',nono);
                    "step 1"
                    if(result.bool){
                        var nono=(get.damageEffect(trigger.player,player,trigger.player)>=0);
                        trigger.player.chooseToDiscard('he','弃置一张装备牌并令'+get.translation(player)+'摸一张牌，或受到1点伤害',{type:'equip'}).set('ai',function(card){
                            if(_status.event.nono){
                                return 0;
                            }
                            if(_status.event.player.hp==1) return 10-get.value(card);
                            return 9-get.value(card);
                        }).set('nono',nono);
                    }
                    else{
                        event.finish();
                    }
                    "step 2"
                    if(result.bool){
                        player.draw();
                    }
                    else{
                        trigger.player.damage();
                    }
                },
                ai:{
                    expose:0.3,
                    threaten:1.3,
                },
            },
            "l_xinliegong":{
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
                    if(trigger.target.hp>=player.hp) player.addTempSkill('l_xinliegong2','shaAfter');
                },
                ai:{
                    threaten:0.5,
                },
            },
            "l_xinliegong2":{
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event){
                    return event.card&&event.card.name=='sha'&&event.notLink();
                },
                forced:true,
                audio:"ext:异界四国:false",
                content:function (){
                    trigger.num++;
                },
            },
            "l_zhanyi":{
                enable:"phaseUse",
                usable:1,
                filterCard:true,
                position:"he",
                check:function (card){
                    var player=_status.event.player;
                    if(player.hp<3) return 0;
                    var type=get.type(card,'trick');
                    if(type=='trick'){
                        return 6-get.value(card);
                    }
                    else if(type=='equip'){
                        if(player.hasSha()&&game.hasPlayer(function(current){
                            return (player.canUse('sha',current)&&
                                get.attitude(player,current)<0&&
                                get.effect(current,{name:'sha'},player,player)>0)
                        })){
                            return 6-get.value(card);
                        }
                    }
                    return 0;
                },
                content:function (){
                    player.loseHp();
                    switch(get.type(cards[0],'trick')){
                        case 'basic':player.addTempSkill('l_zhanyi_basic');break;
                        case 'equip':player.addTempSkill('l_zhanyi_equip');break;
                        case 'trick':player.addTempSkill('l_zhanyi_trick');player.draw(3);break;
                    }
                },
                ai:{
                    order:9.1,
                    result:{
                        player:1,
                    },
                },
            },
            "l_zhanyi_basic":{
                group:["l_zhanyi_basic_sha","l_zhanyi_basic_jiu","l_zhanyi_basic_tao"],
            },
            "l_zhanyi_basic_tao":{
                enable:"chooseToUse",
                filterCard:{
                    type:"basic",
                },
                viewAs:{
                    name:"tao",
                },
                viewAsFilter:function (player){
                    if(!player.countCards('h',{type:'basic'})) return false;
                },
                prompt:"将一张基本牌当桃使用",
                check:function (card){
                    return 8-get.value(card);
                },
                ai:{
                    skillTagFilter:function (player){
                        if(!player.countCards('h',{type:'basic'})) return false;
                    },
                    save:true,
                    basic:{
                        order:function (card,player){
                            if(player.hasSkillTag('pretao')) return 5;
                            return 2;
                        },
                        useful:[8,6.5,5,4],
                        value:[8,6.5,5,4],
                    },
                    result:{
                        target:function (player,target){
                            // if(player==target&&player.hp<=0) return 2;
                            var nd=player.needsToDiscard();
                            var keep=false;
                            if(nd<=0){
                                keep=true;
                            }
                            else if(nd==1&&target.hp>=2&&target.countCards('h','tao')<=1){
                                keep=true;
                            }
                            var mode=get.mode();
                            if(target.hp>=2&&keep&&target.hasFriend()){
                                if(target.hp>2||nd==0) return 0;
                                if(target.hp==2){
                                    if(game.hasPlayer(function(current){
                                        if(target!=current&&get.attitude(target,current)>=3){
                                            if(current.hp<=1) return true;
                                            if((mode=='identity'||mode=='versus'||mode=='chess')&&current.identity=='zhu'&&current.hp<=2) return true;
                                        }
                                    })){
                                        return 0;
                                    }
                                }
                            }
                            if(target.hp<0&&target!=player&&target.identity!='zhu') return 0;
                            var att=get.attitude(player,target);
                            if(att<3&&att>=0&&player!=target) return 0;
                            var tri=_status.event.getTrigger();
                            if(mode=='identity'&&player.identity=='fan'&&target.identity=='fan'){
                                if(tri&&tri.name=='dying'&&tri.source&&tri.source.identity=='fan'&&tri.source!=target){
                                    var num=game.countPlayer(function(current){
                                        if(current.identity=='fan'){
                                            return current.countCards('h','tao');
                                        }
                                    });
                                    if(num>1&&player==target) return 2;
                                    return 0;
                                }
                            }
                            if(mode=='identity'&&player.identity=='zhu'&&target.identity=='nei'){
                                if(tri&&tri.name=='dying'&&tri.source&&tri.source.identity=='zhong'){
                                    return 0;
                                }
                            }
                            if(mode=='stone'&&target.isMin()&&
                            player!=target&&tri&&tri.name=='dying'&&player.side==target.side&&
                            tri.source!=target.getEnemy()){
                                return 0;
                            }
                            return 2;
                        },
                    },
                    tag:{
                        recover:1,
                        save:1,
                    },
                },
            },
            "l_zhanyi_basic_sha":{
                enable:"chooseToUse",
                filterCard:{
                    type:"basic",
                },
                viewAs:{
                    name:"sha",
                },
                viewAsFilter:function (player){
                    if(!player.countCards('h',{type:'basic'})) return false;
                },
                prompt:"将一张基本牌当杀使用",
                check:function (card){return 4-get.value(card)},
                ai:{
                    skillTagFilter:function (player){
                        if(!player.countCards('h',{type:'basic'})) return false;
                    },
                    respondSha:true,
                    basic:{
                        useful:[5,1],
                        value:[5,1],
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
            "l_zhanyi_basic_jiu":{
                enable:"chooseToUse",
                filterCard:{
                    type:"basic",
                },
                viewAs:{
                    name:"jiu",
                },
                viewAsFilter:function (player){
                    if(!player.countCards('h',{type:'basic'})) return false;
                },
                prompt:"将一张基本牌当酒使用",
                check:function (card){
                    if(_status.event.type=='dying') return 1;
                    return 4-get.value(card);
                },
                ai:{
                    skillTagFilter:function (player){
                        return player.countCards('h',{type:'basic'})>0&&player.hp<=0;
                    },
                    save:true,
                    basic:{
                        useful:function (card,i){
                            if(_status.event.player.hp>1){
                                if(i==0) return 4;
                                return 1;
                            }
                            if(i==0) return 7.3;
                            return 3;
                        },
                        value:function (card,player,i){
                            if(player.hp>1){
                                if(i==0) return 5;
                                return 1;
                            }
                            if(i==0) return 7.3;
                            return 3;
                        },
                    },
                    order:function (){
                        return get.order({name:'sha'})+0.2;
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
                                    return (get.attitude(target,current)<0&&
                                        target.canUse(card,current,true,true)&&
                                        !current.getEquip('baiyin')&&
                                        get.effect(current,card,target)>0);
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
            "l_zhanyi_equip":{
                trigger:{
                    player:"shaBegin",
                },
                forced:true,
                filter:function (event,player){
                    return event.target.countCards('he')>0;
                },
                check:function (event,player){
                    return get.attitude(player,event.target)<0;
                },
                content:function (){
                    trigger.target.chooseToDiscard('he',true,3);
                },
            },
            "l_zhanyi_trick":{
                mod:{
                    targetInRange:function (){
                        return true;
                    },
                },
            },
            "l_mingzhe":{
                audio:"mingzhe",
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
                    player.draw();
                },
                ai:{
                    threaten:0.7,
                },
            },
            "l_shuimeng":{
                trigger:{
                    player:"phaseUseAfter",
                },
                direct:true,
                filter:function (event,player){
                    return player.countCards('h');
                },
                content:function (){
                    'step 0'
                    player.chooseTarget(get.prompt('l_shuimeng'),function(card,player,target){
                        return target!=player&&target.countCards('h');
                    }).set('ai',function(target){
                        if(!_status.event.goon) return 0;
                        return -get.attitude(_status.event.player,target);
                    }).set('goon',player.needsToDiscard()||player.hasCard(function(card){
                        var val=get.value(card);
                        if(val<0) return true;
                        if(val<=5){
                            return card.number>=11;
                        }
                        if(val<=6){
                            return card.number>=12;
                        }
                        return false;
                    }));
                    'step 1'
                    if(result.bool){
                        player.logSkill('l_shuimeng',result.targets);
                        event.target=result.targets[0];
                        player.chooseToCompare(event.target);
                    }
                    else{
                        event.finish();
                    }
                    'step 2'
                    if(result.bool){
                        player.useCard({name:'wuzhong'},player);
                    }
                    else{
                        event.target.useCard({name:'guohe'},player);
                    }
                },
            },
            "l_huomo":{
                audio:"huomo",
                trigger:{
                    player:"chooseToRespondBegin",
                },
                filter:function (event,player){
                    if(event.responded) return false;
                    if(!event.filterCard({name:'shan'})) return false;
                    if(player.hasSkill('l_huomo2')) return false;
                    if(event.parent.name!='sha') return false;
                    var hs=player.getCards('he',{color:'black'});
                    for(var i=0;i<hs.length;i++){
                        if(get.type(hs[i])!='basic'){
                            break;
                        }
                    }
                    if(i==hs.length) return false;
                    return true;
                },
                direct:true,
                content:function (){
                    "step 0"
                    player.chooseCard(get.prompt('l_huomo'),'he',function(card){
                        return get.type(card)!='basic'&&get.color(card)=='black';
                    }).set('ai',function(card){
                        if(!_status.event.player.countCards('h','shan')){
                            return 8-get.value(card);
                        }
                        return 6-get.value(card);
                    });
                    "step 1"
                    if(result.bool){
                        trigger.untrigger();
                        trigger.responded=true;
                        trigger.result={bool:true,card:{name:'shan'}}
                        player.lose(result.cards,ui.special);
                        player.$throw(result.cards);
                        event.card=result.cards[0];
                        player.logSkill('l_huomo');
                        player.addTempSkill('l_huomo2');
                    }
                    else{
                        event.finish();
                    }
                    'step 2'
                    if(player==game.me&&event.card){
                        game.delay();
                    }
                    'step 3'
                    if(event.card){
                        ui.cardPile.insertBefore(event.card,ui.cardPile.firstChild);
                    }
                },
                group:["l_huomo_count","l_huomo_count2","l_huomo_use"],
            },
            "l_huomo2":{
            },
            "l_huomo_count":{
                init:function (player){
                    player.storage.l_huomo={};
                },
                trigger:{
                    global:"phaseBegin",
                },
                silent:true,
                content:function (){
                    player.storage.l_huomo={};
                },
                forced:true,
                popup:false,
            },
            "l_huomo_count2":{
                trigger:{
                    player:"useCard",
                },
                silent:true,
                content:function (){
                    if(!player.storage.l_huomo) player.storage.l_huomo={};
                    switch(trigger.card.name){
                        case 'sha':player.storage.l_huomo.sha=true;break;
                        case 'tao':player.storage.l_huomo.tao=true;break;
                        case 'jiu':player.storage.l_huomo.jiu=true;break;
                    }
                },
                forced:true,
                popup:false,
            },
            "l_huomo_use":{
                enable:"chooseToUse",
                filter:function (event,player){
                    if(!player.storage.l_huomo) player.storage.l_huomo={};
                    if((!player.storage.l_huomo.sha&&event.filterCard({name:'sha'},player,event))||
                        (!player.storage.l_huomo.jiu&&event.filterCard({name:'jiu'},player,event))||
                        (!player.storage.l_huomo.tao&&event.filterCard({name:'tao'},player,event))){
                        return player.hasCard(function(card){
                            return get.color(card)=='black'&&get.type(card)!='basic';
                        },'he');
                    }
                    return false;
                },
                chooseButton:{
                    dialog:function (event,player){
                        var list=[];
                        if(!player.storage.l_huomo.sha&&event.filterCard({name:'sha'},player,event)){
                            list.push(['基本','','sha']);
                            list.push(['基本','','sha','fire']);
                            list.push(['基本','','sha','thunder']);
                        }
                        if(!player.storage.l_huomo.tao&&event.filterCard({name:'tao'},player,event)){
                            list.push(['基本','','tao']);
                        }
                        if(!player.storage.l_huomo.jiu&&event.filterCard({name:'jiu'},player,event)){
                            list.push(['基本','','jiu']);
                        }
                        return ui.create.dialog('活墨',[list,'vcard'],'hidden');
                    },
                    check:function (button){
                        var player=_status.event.player;
                        var card={name:button.link[2],nature:button.link[3]};
                        if(game.hasPlayer(function(current){
                            return player.canUse(card,current)&&get.effect(current,card,player,player)>0;
                        })){
                            switch(button.link[2]){
                                case 'tao':return 5;
                                case 'jiu':return 3.01;
                                case 'sha':
                                    if(button.link[3]=='fire') return 2.95;
                                    else if(button.link[3]=='fire') return 2.92;
                                    else return 2.9;
                            }
                        }
                        return 0;
                    },
                    backup:function (links,player){
                        return {
                            filterCard:function(card){
                                return get.type(card)!='basic'&&get.color(card)=='black';
                            },
                            viewAs:{name:links[0][2],nature:links[0][3]},
                            position:'he',
                            popname:true,
                            precontent:function(){
                                'step 0'
                                var card=event.result.cards[0];
                                event.card=card;
                                player.$throw(card,1000);
                                game.log(player,'将',card,'置于牌堆顶');
                                event.result.cards.length=0;
                                player.lose(card);
                                'step 1'
                                game.delay();
                                'step 2'
                                ui.cardPile.insertBefore(event.card,ui.cardPile.firstChild);
                            },
                        }
                    },
                    prompt:function (links,player){
                        return '将一张黑色非基本牌置于牌堆顶并视为使用一张'+get.translation(links[0][3]||'')+get.translation(links[0][2]);
                    },
                },
                ai:{
                    order:function (){
                        var player=_status.event.player;
                        var event=_status.event;
                        if(!player.storage.l_huomo.jiu&&event.filterCard({name:'jiu'},player,event)&&get.effect(player,{name:'jiu'})>0){
                            return 3.1;
                        }
                        return 2.9;
                    },
                    save:true,
                    respondSha:true,
                    skillTagFilter:function (player,tag,arg){
                        if(player.hasCard(function(card){
                            return get.color(card)=='black'&&get.type(card)!='basic';
                        },'he')){
                            if(!player.storage.l_huomo) player.storage.l_huomo={};
                            if(tag=='respondSha'){
                                if(arg!='use') return false;
                                if(player.storage.l_huomo.sha) return false;
                            }
                            else{
                                if(player.storage.l_huomo.tao&&player.storage.l_huomo.jiu) return false;
                            }
                        }
                        else{
                            return false;
                        }
                    },
                    result:{
                        player:1,
                    },
                },
            },
            "l_zuoding":{
                trigger:{
                    global:"useCard",
                },
                filter:function (event,player){
                    return !player.hasSkill('l_zuoding2')&&get.suit(event.card)=='spade'&&
                        _status.currentPhase==event.player&&event.targets&&event.targets.length&&
                        event.player!=player;
                },
                direct:true,
                content:function (){
                    'step 0'
                    player.chooseTarget(get.prompt('l_zuoding'),function(card,player,target){
                        return _status.event.getTrigger().targets.contains(target);
                    }).set('ai',function(target){
                        return get.attitude(_status.event.player,target);
                    });
                    'step 1'
                    if(result.bool){
                        player.logSkill('l_zuoding',result.targets);
                        result.targets[0].draw();
                    }
                },
                ai:{
                    expose:0.2,
                },
                group:"l_zuoding3",
            },
            "l_zuoding2":{
            },
            "l_zuoding3":{
                trigger:{
                    global:"damageEnd",
                },
                silent:true,
                content:function (){
                    player.addTempSkill('l_zuoding2');
                },
                forced:true,
                popup:false,
            },
            "l_bizhuan":{
                trigger:{
                    player:"useCardAfter",
                    target:"useCardToBegin",
                },
                filter:function (event,player){
                    if(event.name!='useCard'&&event.player==event.target) return false;
                    if(player.storage.l_bizhuan.length>=4) return false;
                    return get.suit(event.card)=='spade';
                },
                init:function (player){
                    player.storage.l_bizhuan=[];
                },
                intro:{
                    content:"cards",
                },
                frequent:true,
                content:function (){
                    var card=get.cards()[0];
                    ui.special.appendChild(card);
                    player.$draw(card);
                    game.delay();
                    player.storage.l_bizhuan.push(card);
                    player.markSkill('l_bizhuan');
                },
                mod:{
                    maxHandcard:function (player,num){
                        return num+player.storage.l_bizhuan.length;
                    },
                },
            },
            "l_tongbo":{
                trigger:{
                    player:"phaseDrawAfter",
                },
                direct:true,
                filter:function (event,player){
                    return player.storage.l_bizhuan&&player.storage.l_bizhuan.length&&event.num>0;
                },
                locked:false,
                content:function (){
                    "step 0"
                    var four=false;
                    var nofour=!player.hasFriend();
                    if(player.storage.l_bizhuan.length==4){
                        var suits=['club','spade','heart','diamond'];
                        var list=player.getCards('h').concat(player.storage.l_bizhuan);
                        for(var i=0;i<list.length;i++){
                            suits.remove(get.suit(list[i]));
                            if(suits.length==0){
                                four=true;
                                break;
                            }
                        }
                    }
                    var suits2=[];
                    if(four){
                        suits2=['club','spade','heart','diamond'];
                        for(var i=0;i<player.storage.l_bizhuan.length;i++){
                            suits2.remove(get.suit(player.storage.l_bizhuan[i]));
                        }
                    }
                    player.chooseCard('选择任意张手牌与“书”交换',[1,Math.min(player.countCards('h'),player.storage.l_bizhuan.length)]).set('ai',function(card){
                        var val=get.value(card);
                        if(_status.event.four&&!_status.event.nofour){
                            var suits=_status.event.suits2.slice(0);
                            for(var i=0;i<ui.selected.cards.length;i++){
                                suits.remove(get.suit(ui.selected.cards[i]));
                            }
                            if(suits.contains(get.suit(card))){
                                if(val<0) return 10;
                                return 1;
                            }
                            else{
                                return 0;
                            }
                        }
                        else{
                            if(val<0) return 10;
                            if(_status.event.player.skipList.contains('phaseUse')){
                                return val;
                            }
                            return 10-val;
                        }
                    }).set('four',four).set('suits2',suits2).set('nofour',nofour);
                    event.four=four;
                    event.nofour=nofour;
                    "step 1"
                    if(result.bool){
                        player.logSkill('l_tongbo');
                        player.lose(result.cards,ui.special)._triggered=null;
                        player.storage.l_bizhuan=player.storage.l_bizhuan.concat(result.cards);
                        player.syncStorage('l_bizhuan');
                        event.num=result.cards.length;
                    }
                    else{
                        event.finish();
                    }
                    "step 2"
                    var suits2={
                        heart:0,
                        diamond:0,
                        spade:0,
                        club:0
                    };
                    for(var i=0;i<player.storage.l_bizhuan.length;i++){
                        suits2[get.suit(player.storage.l_bizhuan[i])]++;
                    }
                    player.chooseCardButton(player.storage.l_bizhuan,'选择'+event.num+'张牌作为手牌',event.num,true).set('ai',function(button){
                        var val=get.value(button.link);
                        if(_status.event.four||_status.event.nofour){
                            var suits=get.copy(_status.event.suits2);
                            for(var i=0;i<ui.selected.buttons.length;i++){
                                suits[get.suit(ui.selected.buttons[i].link)]--;
                            }
                            var num=suits[get.suit(button.link)];
                            if(_status.event.nofour){
                                for(var i in suits){
                                    if(suits[i]==0) return val;
                                }
                                if(num!=2){
                                    if(val<=0) return 0.01;
                                    return val;
                                }
                                else{
                                    return 0;
                                }
                            }
                            else{
                                if(num>1){
                                    if(val<=0) return 0.01;
                                    return val;
                                }
                                else{
                                    return 0;
                                }
                            }
                        }
                        else{
                            if(val<0) return -10;
                            if(_status.event.player.skipList.contains('phaseUse')){
                                return -val;
                            }
                            return val;
                        }
                    }).set('four',event.four).set('suits2',suits2).set('nofour',event.nofour);
                    if(player==game.me&&!event.isMine()){
                        game.delay(0.5);
                    }
                    "step 3"
                    player.gain(result.links)._triggered=null;
                    for(var i=0;i<result.links.length;i++){
                        player.storage.l_bizhuan.remove(result.links[i]);
                    }
                    player.syncStorage('l_bizhuan');
                    if(player==game.me&&_status.auto){
                        game.delay(0.5);
                    }
                    "step 4"
                    suits2=['club','spade','heart','diamond'];
                    for(var i=0;i<player.storage.l_bizhuan.length;i++){
                        suits2.remove(get.suit(player.storage.l_bizhuan[i]));
                    }
                    if(suits2.length>0){
                        event.finish();
                    }
                    "step 5"
                    event.cards=player.storage.l_bizhuan.slice(0);
                    player.storage.l_bizhuan.length=0;
                    player.unmarkSkill('l_bizhuan');
                    "step 6"
                    if(event.cards.length>1){
                        player.chooseCardButton('将所有“书”交给任意名其他角色',true,event.cards,[1,event.cards.length]).set('ai',function(button){
                            if(ui.selected.buttons.length==0) return 1;
                            return 0;
                        });
                    }
                    else if(event.cards.length==1){
                        event._result={links:event.cards.slice(0),bool:true};
                    }
                    else{
                        event.finish();
                    }
                    "step 7"
                    if(result.bool){
                        for(var i=0;i<result.links.length;i++){
                            event.cards.remove(result.links[i]);
                        }
                        event.togive=result.links.slice(0);
                        player.chooseTarget('将'+get.translation(result.links)+'交给一名其他角色',true,function(card,player,target){
                            return target!=player;
                        }).set('ai',function(target){
                            var att=get.attitude(_status.event.player,target);
                            if(_status.event.enemy){
                                return -att;
                            }
                            else if(att>0){
                                return att/(1+target.countCards('h'));
                            }
                            else{
                                return att/100;
                            }
                        }).set('enemy',get.value(event.togive[0])<0);
                    }
                    else{
                        event.finish();
                    }
                    "step 8"
                    if(result.targets.length){
                        result.targets[0].gain(event.togive,'draw');
                        player.line(result.targets[0],'green');
                        game.log(result.targets[0],'获得了'+get.cnNumber(event.togive.length)+'张','#g“书”');
                        event.goto(6);
                    }
                },
                ai:{
                    combo:"l_bizhuan",
                },
            },
            "l_lirang":{
                audio:"lirang",
                trigger:{
                    player:"discardAfter",
                },
                filter:function (event,player){
                    for(var i=0;i<event.cards.length;i++){
                        if(get.position(event.cards[i])=='d'){
                            return true;
                        }
                    }
                    return false;
                },
                direct:true,
                popup:false,
                content:function (){
                    "step 0"
                    if(trigger.delay==false) game.delay();
                    event.cards=[];
                    for(var i=0;i<trigger.cards.length;i++){
                        if(get.position(trigger.cards[i])=='d'){
                            event.cards.push(trigger.cards[i]);
                            ui.special.appendChild(trigger.cards[i]);
                        }
                    }
                    "step 1"
                    if(event.cards.length){
                        var goon=false;
                        for(var i=0;i<event.cards.length;i++){
                            if(event.cards[i].name=='du'){
                                goon=true;break;
                            }
                        }
                        if(!goon){
                            goon=game.hasPlayer(function(current){
                                return player!=current&&get.attitude(player,current)>1;
                            });
                        }
                        player.chooseCardButton(get.prompt('l_lirang'),event.cards,[1,event.cards.length]).set('ai',function(button){
                            if(!_status.event.goon||ui.selected.buttons.length) return 0;
                            if(button.link.name=='du') return 2;
                            return 1;
                        }).set('goon',goon);
                    }
                    else{
                        event.finish();
                    }
                    "step 2"
                    if(result.bool){
                        event.togive=result.links.slice(0);
                        player.chooseTarget('将'+get.translation(result.links)+'交给一名角色',true,function(card,player,target){
                            return target!=player;
                        }).set('ai',function(target){
                            var att=get.attitude(_status.event.player,target);
                            if(_status.event.enemy){
                                return -att;
                            }
                            else{
                                if(att>2) return att/Math.sqrt(1+target.countCards('h'));
                                return att/Math.sqrt(1+target.countCards('h'))/5;
                            }
                        }).set('enemy',get.value(event.togive[0])<0);
                    }
                    else{
                        for(var i=0;i<event.cards.length;i++){
                            event.cards[i].discard();
                        }
                        event.finish();
                    }
                    "step 3"
                    if(result.bool){
                        player.logSkill('l_lirang',result.targets);
                        for(var i=0;i<event.togive.length;i++){
                            event.cards.remove(event.togive[i]);
                        }
                        result.targets[0].gain(event.togive,player);
                        result.targets[0].$gain2(event.togive);
                        event.goto(1);
                    }
                    else{
                        for(var i=0;i<event.cards.length;i++){
                            event.cards[i].discard();
                        }
                        event.finish();
                    }
                },
                ai:{
                    expose:0.1,
                    effect:{
                        target:function (card,player,target,current){
                            if(target.hasFriend()&&get.tag(card,'discard')){
                                if(current<0) return 0;
                                return [1,1];
                            }
                        },
                    },
                },
            },
            "l_xiehui":{
                mod:{
                    maxHandcard:function (player,num){
                        var hs=player.getCards('h');
                        for(var i=0;i<hs.length;i++){
                            if(get.color(hs[i])=='black'){
                                num++;
                            }
                        }
                        return num;
                    },
                },
                trigger:{
                    global:"gainBegin",
                },
                forced:true,
                popup:false,
                filter:function (event,player){
                    if(event.source==player&&event.player!=player){
                        for(var i=0;i<event.cards.length;i++){
                            if(get.color(event.cards[i])=='black') return true;
                        }
                    }
                    return false;
                },
                content:function (){
                    trigger.player.addSkill('l_xiehui2');
                    if(!trigger.player.storage.l_xiehui2){
                        trigger.player.storage.l_xiehui2=[];
                    }
                    for(var i=0;i<trigger.cards.length;i++){
                        if(get.color(trigger.cards[i])=='black'){
                            trigger.player.storage.l_xiehui2.add(trigger.cards[i]);
                        }
                    }
                },
            },
            "l_xiehui2":{
                mark:true,
                intro:{
                    content:"不能使用、打出或弃置获得的黑色牌",
                    nocount:true,
                },
                mod:{
                    cardDiscardable:function (card,player){
                        if(player.storage.l_xiehui2&&player.storage.l_xiehui2.contains(card)) return false;
                    },
                    cardEnabled:function (card,player){
                        if(player.storage.l_xiehui2&&player.storage.l_xiehui2.contains(card)) return false;
                    },
                    cardUsable:function (card,player){
                        if(player.storage.l_xiehui2&&player.storage.l_xiehui2.contains(card)) return false;
                    },
                    cardRespondable:function (card,player){
                        if(player.storage.l_xiehui2&&player.storage.l_xiehui2.contains(card)) return false;
                    },
                    cardSavable:function (card,player){
                        if(player.storage.l_xiehui2&&player.storage.l_xiehui2.contains(card)) return false;
                    },
                },
                group:["l_xiehui3","l_xiehui4"],
            },
            "l_xiehui3":{
                trigger:{
                    player:"changeHp",
                },
                forced:true,
                popup:false,
                filter:function (event){
                    return event.num<0;
                },
                content:function (){
                    player.removeSkill('l_xiehui2');
                    delete player.storage.l_xiehui2;
                },
            },
            "l_xiehui4":{
                trigger:{
                    player:"loseEnd",
                },
                silent:true,
                content:function (){
                    if(player.storage.l_xiehui2){
                        for(var i=0;i<player.storage.l_xiehui2.length;i++){
                            if(trigger.cards.contains(player.storage.l_xiehui2[i])){
                                player.storage.l_xiehui2.splice(i--,1);
                            }
                        }
                    }
                    // player.updateMarks();
                },
                forced:true,
                popup:false,
            },
            "l_yuce":{
                audio:"yuce",
                trigger:{
                    player:"damageAfter",
                },
                direct:true,
                filter:function (event,player){
                    return player.countCards('h')>0&&player.isDamaged();
                },
                content:function (){
                    "step 0"
                    var next=player.chooseToDiscard(get.prompt('l_yuce'));
                    next.logSkill='l_yuce';
                    next.set('ai',function(card){
                        return 7-get.value(card);
                    });
                    "step 1"
                    if(result.bool){
                        var type=get.type(result.cards[0],'trick');
                        if(trigger.source){
                            trigger.source.chooseToDiscard('弃置一张'+get.translation(type)+'牌或令'+get.translation(player)+'回复一点体力',function(card){
                                return get.type(card,'trick')==_status.event.type;
                            }).set('ai',function(card){
                                if(get.recoverEffect(_status.event.getParent().player,_status.event.player,_status.event.player)<0){
                                    return 7-get.value(card);
                                }
                                return 0;
                            }).set('type',type);
                        }
                        else{
                            event.recover=true;
                        }
                    }
                    else{
                        event.finish();
                    }
                    "step 2"
                    if(event.recover){
                        player.recover();
                    }
                    else if(result.bool){
                        player.draw();
                    }
                    else{
                        player.recover();
                    }
                },
                ai:{
                    effect:{
                        target:function (card,player,target){
                            if(get.tag(card,'damage'&&target.countCards('h'))){
                                return 0.8
                            }
                        },
                    },
                },
            },
            "l_polu":{
                trigger:{
                    player:["phaseBegin","damageEnd"],
                },
                forced:true,
                filter:function (event,player){
                    return !player.getEquip('ly_piliche');
                },
                content:function (){
                    if(trigger.name=='phase'){
                        player.useCard(game.createCard('ly_piliche','diamond',1),player);
                    }
                    else{
                        player.draw();
                    }
                },
            },
            "ly_piliche":{
                trigger:{
                    source:"damageEnd",
                },
                check:function (event,player){
                    return get.attitude(player,event.player)<0;
                },
                filter:function (event,player){
                    if(event.card&&get.type(event.card)=='delay') return false;
                    return event.player.isIn()&&(event.player.getEquip(2)||event.player.getEquip(3));
                },
                logTarget:"player",
                content:function (){
                    var equip2=trigger.player.getEquip(2);
                    var equip3=trigger.player.getEquip(3);
                    var cards=[];
                    if(equip2) cards.push(equip2);
                    if(equip3) cards.push(equip3);
                    if(cards.length){
                        trigger.player.discard(cards);
                    }
                },
            },
            "l_shuangren":{
                trigger:{
                    player:"phaseUseBegin",
                },
                direct:true,
                priority:15,
                content:function (){
                    'step 0'
                    var goon;
                    if(player.needsToDiscard()>1){
                        goon=player.hasCard(function(card){
                            return card.number>10&&get.value(card)<=5;
                        });
                    }
                    else{
                        goon=player.hasCard(function(card){
                            return (card.number>=9&&get.value(card)<=5)||get.value(card)<=3;
                        });
                    }
                    player.chooseTarget(get.prompt('l_shuangren'),function(card,player,target){
                        return target!=player&&target.countCards('h');
                    }).set('ai',function(target){
                        var player=_status.event.player;
                        if(_status.event.goon&&get.attitude(player,target)<0){
                            return get.effect(target,{name:'sha'},player,player);
                        }
                        return 0;
                    }).set('goon',goon);
                    'step 1'
                    if(result.bool){
                        var target=result.targets[0];
                        event.target=target;
                        player.logSkill('l_shuangren',target);
                        player.chooseToCompare(target);
                    }
                    else{
                        event.finish();
                    }
                    'step 2'
                    if(result.bool){
                        var target=event.target;
                        if(target.identity!='ye'&&target.identity!='unknown'&&game.hasPlayer(function(current){
                            if(!player.canUse('sha',current,false)) return false;
                            if(target==current) return false;
                            if(get.mode()=='guozhan'){
                                return target.identity==current.identity;
                            }
                            return true;
                        })){
                            var str='对一名';
                            if(get.mode()=='guozhan'){
                                str+=get.translation(target.identity)+'势力的';
                            }
                            player.chooseTarget(str+'角色使用一张杀',true,function(card,player,target){
                                if(!player.canUse('sha',target,false)) return false;
                                if(get.mode()=='guozhan'){
                                    return target.identity==_status.event.identity;
                                }
                                return true;
                            }).set('ai',function(target){
                                var player=_status.event.player;
                                return get.effect(target,{name:'sha'},player,player);
                            }).set('identity',target.identity);
                        }
                        else{
                            player.useCard({name:'sha'},target,false);
                            event.finish();
                        }
                    }
                    else{
                        trigger.cancel();
                        event.finish();
                    }
                    'step 3'
                    if(result.bool&&result.targets&&result.targets.length){
                        player.useCard({name:'sha'},result.targets[0],false);
                    }
                },
            },
            "l_fulu":{
                enable:'chooseToUse',
				filterCard:function(card){
					return card.name=='sha'&&!card.nature;
				},
				viewAs:{name:'sha',nature:'thunder'},
				ai:{
					order:function(){
						return get.order({name:'sha'})+0.1;
					}
				}
            },
            "l_fuji":{
                trigger:{
                    global:"damageBegin",
                },
                filter:function (event){
                    return event.source&&event.nature=='thunder';
                },
                check:function (event,player){
                    return get.attitude(player,event.source)>0&&get.attitude(player,event.player)<0;
                },
                prompt:function (event){
                    return get.translation(event.source)+'即将对'+get.translation(event.player)+'造成伤害，'+get.prompt('l_fuji');
                },
                logTarget:"source",
                content:function (){
                    "step 0"
                    trigger.source.judge(ui.special);
                    "step 1"
                    if(result.color=='black'){
                        result.card.discard();
                        player.draw();
                        trigger.num++;
                    }
                    else{
                        trigger.source.gain(result.card);
                        trigger.source.$gain2(result.card);
                    }
                },
            },
            "l_luanzhan":{
                mod:{
                    selectTarget:function (card,player,range){
                        if(!player.storage.l_luanzhan) return;
                        if(range[1]==-1) return;
                        if(card.name=='sha') range[1]+=player.storage.l_luanzhan;
                        if(get.color(card)=='black'&&get.type(card)=='trick'){
                            var info=get.info(card);
                            if(info.multitarget) return false;
                            range[1]+=player.storage.l_luanzhan;
                        }
                    },
                },
                trigger:{
                    source:"damageEnd",
                },
                silent:true,
                mark:true,
                intro:{
                    content:function (storage){
                        return '可以额外指定'+storage+'个目标';
                    },
                },
                init:function (player){
                    player.storage.l_luanzhan=0;
                },
                "init2":function (player){
                    player.markSkill('l_luanzhan');
                },
                content:function (){
                    if(typeof player.storage.l_luanzhan=='number'){
                        player.storage.l_luanzhan+=trigger.num;
                    }
                    else{
                        player.storage.l_luanzhan=trigger.num;
                    }
                    if(player.hasSkill('l_luanzhan')){
                        player.markSkill('l_luanzhan');
                    }
                },
                group:"l_luanzhan_cancel",
                subSkill:{
                    cancel:{
                        trigger:{
                            player:"useCard",
                        },
                        forced:true,
                        filter:function (event,player){
                            if(!player.storage.l_luanzhan) return false;
                            var check=false;
                            var card=event.card;
                            if(card.name=='sha'){
                                check=true;
                            }
                            else if(get.color(card)=='black'&&get.type(card)=='trick'){
                                var info=get.info(card);
                                if(!info.multitarget){
                                    check=true;
                                    if(info.selectTarget==-1){
                                        check=false;
                                    }
                                    else if(Array.isArray(info.selectTarget)&&info.selectTarget[1]==-1){
                                        check=false;
                                    }
                                }
                            }
                            if(check&&event.targets&&event.targets.length<player.storage.l_luanzhan){
                                return true;
                            }
                            return false;
                        },
                        content:function (){
                            player.storage.l_luanzhan=0;
                            player.markSkill('l_luanzhan');
                        },
                        sub:true,
                    },
                },
                forced:true,
                popup:false,
            },
            "l_sijian":{
                trigger:{
                    player:"loseEnd",
                },
                direct:true,
                audio:"sijian",
                filter:function (event,player){
                    if(player.countCards('h')) return false;
                    for(var i=0;i<event.cards.length;i++){
                        if(event.cards[i].original=='h') return true;
                    }
                    return false;
                },
                content:function (){
                    "step 0"
                    player.chooseTarget(get.prompt('l_sijian'),function(card,player,target){
                        return player!=target&&target.countCards('he')>0;
                    }).set('ai',function(target){
                        return -get.attitude(_status.event.player,target);
                    });
                    "step 1"
                    if(result.bool){
                        player.logSkill('l_sijian',result.targets);
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
            },
            "l_liangzhu":{
                trigger:{
                    global:"recoverAfter",
                },
                direct:true,
                filter:function (event,player){
                    return _status.currentPhase==event.player;
                },
                content:function (){
                    'step 0'
                    if(player==trigger.player){
                        player.chooseControl('摸一张','摸两张','cancel2',function(){
                            return '摸两张';
                        }).set('prompt',get.prompt('l_liangzhu'));
                        event.single=true;
                    }
                    else{
                        player.chooseTarget(get.prompt('l_liangzhu'),function(card,player,target){
                            return target==_status.event.player||target==_status.event.target;
                        }).set('target',trigger.player).set('ai',function(target){
                            var player=_status.event.player;
                            if(player==target) return 1;
                            return get.attitude(player,target)-1.5;
                        });
                    }
                    'step 1'
                    if(event.single){
                        if(result.control!='cancel2'){
                            player.logSkill('l_liangzhu',player);
                            if(result.control=='摸一张'){
                                player.draw();
                            }
                            else{
                                player.draw(2);
                                player.storage.l_liangzhu=player;
                            }
                        }
                    }
                    else if(result.bool){
                        var target=result.targets[0];
                        player.logSkill('l_liangzhu',target);
                        if(target==player){
                            target.draw();
                        }
                        else{
                            target.draw(2);
                            if(target.storage.l_liangzhu){
                                target.storage.l_liangzhu.add(player);
                            }
                            else{
                                target.storage.l_liangzhu=[player];
                            }
                        }
                    }
                },
                ai:{
                    expose:0.1,
                },
            },
            "l_bazhen":{
                audio:"bazhen",
                inherit:"bagua_skill",
                filter:function (event,player){
                    if(!lib.skill.bagua_skill.filter(event,player)) return false;
                    if(player.getEquip(2)) return false;
                    return true;
                },
                ai:{
                    effect:{
                        target:function (card,player,target){
                            if(player==target&&get.subtype(card)=='equip2'){
                                if(get.equipValue(card)<=7.5) return 0;
                            }
                            if(target.getEquip(2)) return;
                            return lib.skill.bagua_skill.ai.effect.target.apply(this,arguments);
                        },
                    },
                },
                trigger:{
                    player:"chooseToRespondBegin",
                },
                check:function (event,player){
                    if(get.damageEffect(player,event.player,player)>=0) return false;
                    return true;
                },
                content:function (){
                    "step 0"
                    player.judge('bagua',function(card){return (get.color(card)=='red')?1.5:-0.5});
                    "step 1"
                    if(result.judge>0){
                        trigger.untrigger();
                        trigger.responded=true;
                        trigger.result={bool:true,card:{name:'shan'}}
                    }
                },
            },
            "bagua_skill":{
                trigger:{
                    player:"chooseToRespondBegin",
                },
                filter:function (event,player){
                    if(event.responded) return false;
                    if(!event.filterCard({name:'shan'})) return false;
                    if(!lib.filter.cardRespondable({name:'sha'},player,event)) return false;
                    var evt=event.getParent();
                    if(evt.player&&evt.player.hasSkillTag('unequip',false,{
                        name:evt.card?evt.card.name:null,
                        target:player,
                        card:evt.card
                    })) return false;
                    return true;
                },
                audio:true,
                check:function (event,player){
                    if(get.damageEffect(player,event.player,player)>=0) return false;
                    return true;
                },
                content:function (){
                    "step 0"
                    player.judge('bagua',function(card){return (get.color(card)=='red')?1.5:-0.5});
                    "step 1"
                    if(result.judge>0){
                        trigger.untrigger();
                        trigger.responded=true;
                        trigger.result={bool:true,card:{name:'shan'}}
                    }
                },
                ai:{
                    effect:{
                        target:function (card,player,target,effect){
                            if(player.hasSkillTag('unequip',false,{
                                name:card?card.name:null,
                                target:player,
                                card:card
                            })) return;
                            if(get.tag(card,'respondShan')) return 0.5;
                        },
                    },
                },
            },
            "l_meibu":{
                trigger:{
                    global:"phaseUseBegin",
                },
                filter:function (event,player){
                    return event.player!=player&&get.distance(event.player,player,'attack')>1;
                },
                logTarget:"player",
                check:function (event,player){
                    if(get.attitude(player,event.player)>=0) return false;
                    var e2=player.getEquip(2);
                    if(e2){
                        if(e2.name=='tengjia') return true;
                        if(e2.name=='bagua') return    true;
                    }
                    return player.countCards('h','shan')>0;
                },
                content:function (){
                    var target=trigger.player;
                    target.addTempSkill('l_meibu_viewas');
                    target.addTempSkill('l_meibu_range');
                    target.storage.l_meibu=player;
                    target.markSkillCharacter('l_meibu',player,'魅步','锦囊牌均视为杀且'+get.translation(player)+'视为在攻击范围内');
                },
                ai:{
                    expose:0.2,
                },
                subSkill:{
                    range:{
                        mod:{
                            targetInRange:function (card,player,target){
                                if(card.name=='sha'&&target==player.storage.l_meibu){
                                    return true;
                                }
                            },
                        },
                        onremove:function (player){
                            game.broadcast(function(player){
                                if(player.marks.l_meibu){
                                    player.marks.l_meibu.delete();
                                    delete player.marks.l_meibu;
                                }
                            },player);
                            if(player.marks.l_meibu){
                                player.marks.l_meibu.delete();
                                delete player.marks.l_meibu;
                                game.addVideo('unmark',player,'l_meibu');
                            }
                        },
                        trigger:{
                            player:"useCard",
                        },
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                            return event.skill=='l_meibu_viewas'
                        },
                        content:function (){
                            player.removeSkill('l_meibu_viewas');
                            game.broadcastAll(function(player){
                                if(player.marks.l_meibu&&player.marks.l_meibu.info){
                                    player.marks.l_meibu.info.content=player.marks.l_meibu.info.content.slice(8);
                                }
                            },player);
                        },
                        sub:true,
                    },
                    viewas:{
                        mod:{
                            cardEnabled:function (card,player){
                                if(card.name!='sha'&&get.type(card,'trick')=='trick') return false;
                            },
                            cardUsable:function (card,player){
                                if(card.name!='sha'&&get.type(card,'trick')=='trick') return false;
                            },
                            cardRespondable:function (card,player){
                                if(card.name!='sha'&&get.type(card,'trick')=='trick') return false;
                            },
                            cardSavable:function (card,player){
                                if(card.name!='sha'&&get.type(card,'trick')=='trick') return false;
                            },
                        },
                        enable:["chooseToUse","chooseToRespond"],
                        filterCard:function (card){
                            return get.type(card,'trick')=='trick';
                        },
                        viewAs:{
                            name:"sha",
                        },
                        check:function (){return 1},
                        ai:{
                            effect:{
                                target:function (card,player,target,current){
                                    if(get.tag(card,'respondSha')&&current<0) return 0.8
                                },
                            },
                            respondSha:true,
                            order:4,
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
                },
            },
            "l_zhidao":{
                trigger:{
                    source:"damageEnd",
                },
                filter:function (event,player){
                    if(event._notrigger.contains(event.player)) return false;
                    return _status.currentPhase==player&&event.player.isAlive()&&
                    event.player.countCards('hej')>0&&event.player!=player&&!player.hasSkill('l_zhidao2');
                },
                forced:true,
                content:function (){
                    var num=0;
                    if(trigger.player.countCards('h')) num++;
                    if(trigger.player.countCards('e')) num++;
                    if(trigger.player.countCards('j')) num++;
                    if(num){
                        player.gainPlayerCard(trigger.player,num,'hej',true).set('filterButton',function(button){
                            for(var i=0;i<ui.selected.buttons.length;i++){
                                if(get.position(button.link)==get.position(ui.selected.buttons[i].link)) return false;
                            }
                            return true;
                        });
                    }
                    player.addTempSkill('l_zhidao2');
                },
            },
            "l_zhidao2":{
                mod:{
                    playerEnabled:function (card,player,target){
                        if(player!=target) return false;
                    },
                },
            },
            "l_faen":{
                audio:"faen",
                trigger:{
                    global:["turnOverAfter","linkAfter"],
                },
                filter:function (event,player){
                    if(event.name=='link') return event.player.isLinked();
                    return !event.player.isTurnedOver();
                },
                check:function (event,player){
                    return get.attitude(player,event.player)>0;
                },
                logTarget:"player",
                content:function (){
                    trigger.player.draw();
                },
                ai:{
                    expose:0.2,
                },
            },
            gailianhuan:{
                group:["gailianhuan1","gailianhuan2"],
            },
            "gailianhuan1":{
                audio:"lianhuan2",
                enable:"phaseUse",
                filter:function (event,player){
        return player.countCards('h',{color:'black'})>0;
    },
                filterCard:function (card){
        return get.color(card)=='black';
    },
                viewAs:{
                    name:"tiesuo",
                    suit:"spade",
                    number:9,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"spade","number":9,"name":"sha","cardid":"7301746328","clone":{"name":"sha","suit":"spade","number":9,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_onEndDelete":true,"_transitionEnded":true,"timeout":2330},"timeout":2238,"original":"h"}],
                },
                prompt:"将一张黑色牌当铁锁连环使用",
                check:function (card){return 4-get.value(card)},
                ai:{
                    wuxie:function (){
            if(Math.random()<0.5) return 0;
        },
                    basic:{
                        useful:4,
                        value:4,
                        order:7,
                    },
                    result:{
                        target:function (player,target){
                if(target.isLinked()){
                    if(target.hasSkillTag('link')) return 0;
                    var f=target.hasSkillTag('nofire');
                    var t=target.hasSkillTag('nothunder');
                    if(f&&t) return 0;
                    if(f||t) return 0.5;
                    return 2;
                }
                if(get.attitude(player,target)>=0) return -0.9;
                if(ui.selected.targets.length) return -0.9;
                if(game.hasPlayer(function(current){
                    return get.attitude(player,current)<=-1&&current!=target&&!current.isLinked();
                })){
                    return -0.9;
                }
                return 0;
            },
                        player:function (player,target){
                        if(game.players.length<3)
                        return 0;
                        },
                    },
                    tag:{
                        multitarget:1,
                        multineg:1,
                        norepeat:1,
                    },
                },
            },
            "gailianhuan2":{
                enable:"phaseUse",
                filter:function (event,player){
        return player.countCards('h',{color:'black'})>0;
    },
                filterCard:function (card){
        return get.color(card)=='black';
    },
                check:function (card){
        return 5-get.useful(card);
    },
                content:function (){
        player.draw();
    },
                discard:false,
                prompt:"将一张黑色牌置入弃牌堆并摸一张牌",
                delay:0.5,
                prepare:function (cards,player){
        player.$throw(cards,1000);
    },
                ai:{
                    basic:{
                        order:1,
                    },
                    result:{
                        player:1,
                    },
                },
            },
            "gai_huansha":{
                srlose:true,
                enable:["chooseToUse","chooseToRespond"],
                filterCard:function (){return false;},
                selectCard:-1,
                viewAs:{
                    name:"sha",
                    nature:"fire",
                },
                viewAsFilter:function (player){
        return !player.isLinked();
    },
                prompt:"横置你的武将牌，视为打出一张火杀",
                check:function (){return 1},
                onuse:function (result,player){
        player.link();
    },
                onrespond:function (result,player){
        if(!player.isLinked()) player.link()
    },
                ai:{
                    skillTagFilter:function (player){
            return !player.isLinked();
        },
                    respondSha:true,
                    basic:{
                        useful:[5,1],
                        value:[5,1],
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
            "gai_huanshan":{
                enable:"chooseToRespond",
                filterCard:function (){return false;},
                selectCard:-1,
                viewAs:{
                    name:"shan",
                },
                viewAsFilter:function (player){
                    return player.isLinked();
                },
                prompt:"重置你的武将牌，视为打出一张闪",
                check:function (){return 1},
                onrespond:function (result,player){
                    if(player.isLinked()) player.link()
                },
                ai:{
                    skillTagFilter:function (player){
                        return player.isLinked();
                    },
                    respondShan:true,
                    basic:{
                        useful:[7,2],
                        value:[7,2],
                    },
                },
            },
            "l_fuhun":{
                enable:["chooseToUse","chooseToRespond"],
                filterCard:true,
                selectCard:2,
                position:"h",
                audio:"fuhun",
                derivation:["l_wusheng","l_paoxiao"],
                viewAs:{
                    name:"sha",
                },
                prompt:"将两张手牌当杀使用或打出",
                check:function (card){
                    if(_status.event.player.hasSkill('l_wusheng')&&get.color(card)=='red') return 0;
                    if(_status.event.name=='chooseToRespond'){
                        if(card.name=='sha') return 0;
                        return 6-get.useful(card);
                    }
                    if(_status.event.player.countCards('h')<4) return 6-get.useful(card);
                    return 7-get.useful(card);
                },
                ai:{
                    respondSha:true,
                    order:function (item,player){
                        if(player.hasSkill('l_wusheng')&&player.hasSkill('l_paoxiao')){
                            return 1;
                        }
                        if(player.countCards('h')<4){
                            return 1;
                        }
                        return 4;
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
                group:"l_fuhun2",
            },
            "l_fuhun2":{
                trigger:{
                    source:"damageAfter",
                },
                forced:true,
                filter:function (event,player){
                    if(player.hasSkill('l_fuhun3')) return false;
                    return event.getParent().skill=='l_fuhun';
                },
                content:function (){
                    player.addTempSkill('l_wusheng');
                    player.addTempSkill('l_paoxiao');
                    player.addTempSkill('l_fuhun3');
                },
            },
            "l_fuhun3":{
            },
            "l_boss_shenyi":{
                unique:true,
                mod:{
                    judge:function (player,result){
                        if(_status.event.type=='phase'){
                            if(result.bool==false){
                                result.bool=null;
                            }
                            else{
                                result.bool=false;
                            }
                        }
                    },
                },
                trigger:{
                    player:"turnOverBefore",
                },
                priority:20,
                forced:true,
                filter:function (event,player){
                    return !player.isTurnedOver();
                },
                content:function (){
                    trigger.cancel();
                    game.log(player,'取消了翻面');
                },
                ai:{
                    noturn:true,
                    effect:{
                        target:function (card,player,target){
                            if(get.type(card)=='delay') return 0.5;
                        },
                    },
                },
            },
            "l_gongao":{
                audio:"gongao",
                trigger:{
                    global:"dieAfter",
                },
                forced:true,
                unique:true,
                content:function (){
                    player.gainMaxHp();
                    player.recover();
                },
                ai:{
                    threaten:1.5,
                },
            },
            "l_chengxiang":{
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                audio:"chengxiang",
                content:function (){
                    "step 0"
                    event.cards=get.cards(4);
                    event.videoId=lib.status.videoId++;
                    game.broadcastAll(function(player,id,cards){
                        var str;
                        if(player==game.me&&!_status.auto){
                            str='称象：选择任意张点数不大于13的牌';
                        }
                        else{
                            str='称象';
                        }
                        var dialog=ui.create.dialog(str,cards);
                        dialog.videoId=id;
                    },player,event.videoId,event.cards);
                    event.time=get.utc();
                    game.addVideo('showCards',player,['称象',get.cardsInfo(event.cards)]);
                    game.addVideo('delay',null,2);
                    "step 1"
                    var next=player.chooseButton([0,4]);
                    next.set('dialog',event.videoId);
                    next.set('filterButton',function(button){
                        var num=0
                        for(var i=0;i<ui.selected.buttons.length;i++){
                            num+=get.number(ui.selected.buttons[i].link);
                        }
                        return (num+get.number(button.link)<=13);
                    });
                    next.set('ai',function(button){
                        return get.value(button.link,_status.event.player);
                    });
                    "step 2"
                    if(result.bool&&result.links){
                        player.logSkill('l_chengxiang');
                        var cards2=[];
                        for(var i=0;i<result.links.length;i++){
                            cards2.push(result.links[i]);
                            cards.remove(result.links[i]);
                        }
                        for(var i=0;i<cards.length;i++){
                            cards[i].discard();
                        }
                        event.cards2=cards2;
                    }
                    else{
                        event.finish();
                    }
                    var time=1000-(get.utc()-event.time);
                    if(time>0){
                        game.delay(0,time);
                    }
                    "step 3"
                    game.broadcastAll('closeDialog',event.videoId);
                    var cards2=event.cards2;
                    player.gain(cards2,'log');
                    player.$draw(cards2);
                    game.delay();
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
            },
            "l_wangxi":{
                audio:"wangxi",
                trigger:{
                    player:"damageAfter",
                    source:"damageAfter",
                },
                filter:function (event){
                    if(event._notrigger.contains(event.player)) return false;
                    return event.num&&event.source&&event.player&&
                    event.player.isAlive()&&event.source.isAlive()&&event.source!=event.player;
                },
                check:function (event,player){
                    if(event.player==player) return get.attitude(player,event.source)>-3;
                    return get.attitude(player,event.player)>-3;
                },
                logTarget:function (event,player){
                    if(event.player==player) return event.source;
                    return event.player;
                },
                content:function (){
                    "step 0"
                    event.num=trigger.num;
                    "step 1"
                    game.asyncDraw([trigger.player,trigger.source],1);
                    event.num--;
                    "step 2"
                    game.delay();
                    if(trigger.player.isAlive()&&trigger.source.isAlive()&&event.num>0){
                        player.chooseBool('是否继续发动【忘隙】？');
                    }
                    else{
                        event.finish();
                    }
                    "step 3"
                    if(result.bool){
                    if(trigger.source!=player){
                    player.logSkill('l_wangxi',trigger.source);
                    }else{
                    player.logSkill('l_wangxi',trigger.player);
                    }
                        event.goto(1);
                    }
                },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                },
            },
            "l_xinjushou":{
                audio:"jushou",
                trigger:{
                    player:"phaseEnd",
                },
                content:function (){
                    'step 0'
                    player.draw(4);
                    player.turnOver();
                    'step 1'
                    player.chooseCard('h',true,'弃置一张手牌，若以此法弃置的是装备牌，则你改为使用之').set('ai',function(card){
                        if(get.type(card)=='equip'){
                            return 5-get.value(card);
                        }
                        return -get.value(card);
                    }).set('filterCard',lib.filter.cardDiscardable);
                    'step 2'
                    if(result.bool&&result.cards.length){
                        if(get.type(result.cards[0])=='equip'){
                            player.$give(result.cards,player);
                            player.lose(result.cards,ui.special);
                            event.toequip=result.cards[0];
                        }
                        else{
                            player.discard(result.cards[0]);
                        }
                    }
                    'step 3'
                    if(event.toequip){
                        game.delay();
                    }
                    'step 4'
                    if(event.toequip){
                        player.equip(event.toequip);
                    }
                },
                ai:{
                    effect:{
                        target:function (card,player,target){
                            if(card.name=='guiyoujie') return [0,1];
                        },
                    },
                },
            },
            "ll_xinjushou":{
                trigger:{
                    player:"phaseEnd",
                },
                content:function (){
                    'step 0'
                    player.draw(4);
                    player.turnOver();
                    'step 1'
                    player.chooseCard('h',true,'弃置一张手牌，若以此法弃置的是装备牌，则你改为使用之').set('ai',function(card){
                        if(get.type(card)=='equip'){
                            return 5-get.value(card);
                        }
                        return -get.value(card);
                    }).set('filterCard',lib.filter.cardDiscardable);
                    'step 2'
                    if(result.bool&&result.cards.length){
                        if(get.type(result.cards[0])=='equip'){
                            player.$give(result.cards,player);
                            player.lose(result.cards,ui.special);
                            event.toequip=result.cards[0];
                        }
                        else{
                            player.discard(result.cards[0]);
                        }
                    }
                    'step 3'
                    if(event.toequip){
                        game.delay();
                    }
                    'step 4'
                    if(event.toequip){
                        player.equip(event.toequip);
                    }
                },
                ai:{
                    effect:{
                        target:function (card,player,target){
                            if(card.name=='guiyoujie') return [0,1];
                        },
                    },
                },
            },
            "l_xinjiewei":{
                audio:"yanzheng2",
                enable:"chooseToUse",
                filterCard:true,
                position:"e",
                viewAs:{
                    name:"wuxie",
                },
                filter:function (event,player){
                    return player.countCards('e')>0;
                },
                viewAsFilter:function (player){
                    return player.countCards('e')>0;
                },
                prompt:"将一张装备区内的牌当无懈可击使用",
                check:function (card){return 8-get.equipValue(card)},
                threaten:1.2,
                group:"l_xinjiewei_move",
                subSkill:{
                    move:{
                        trigger:{
                            player:"turnOverEnd",
                        },
                        direct:true,
                        audio:"jiewei",
                        filter:function (event,player){
                            return !player.isTurnedOver()&&player.canMoveCard();
                        },
                        content:function (){
                            "step 0"
                            player.chooseToDiscard('he',get.prompt('l_xinjiewei'),'弃置一张牌并移动场上的一张牌',lib.filter.cardDiscardable).set('ai',function(card){
                                if(!_status.event.check) return 0;
                                return 7-get.value(card);
                            }).set('check',player.canMoveCard(true)).set('logSkill','l_xinjiewei');
                            "step 1"
                            if(result.bool){
                                player.moveCard(true);
                            }
                            else{
                                event.finish();
                            }
                        },
                        sub:true,
                    },
                },
                ai:{
                    basic:{
                        useful:[6,4],
                        value:[6,4],
                    },
                    result:{
                        player:1,
                    },
                    expose:0.2,
                },
            },
            "ll_xinjiewei":{
                audio:"yanzheng2",
                enable:"chooseToUse",
                filterCard:true,
                position:"e",
                viewAs:{
                    name:"wuxie",
                },
                filter:function (event,player){
                    return player.countCards('e')>0;
                },
                viewAsFilter:function (player){
                    return player.countCards('e')>0;
                },
                prompt:"将一张装备区内的牌当无懈可击使用",
                check:function (card){return 8-get.equipValue(card)},
                threaten:1.2,
                group:"ll_xinjiewei_move",
                subSkill:{
                    move:{
                        trigger:{
                            player:"turnOverEnd",
                        },
                        direct:true,
                        audio:"jiewei",
                        filter:function (event,player){
                            return !player.isTurnedOver()&&player.canMoveCard();
                        },
                        content:function (){
                            "step 0"
                            player.chooseToDiscard('he',get.prompt('ll_xinjiewei'),'弃置一张牌并移动场上的一张牌',lib.filter.cardDiscardable).set('ai',function(card){
                                if(!_status.event.check) return 0;
                                return 7-get.value(card);
                            }).set('check',player.canMoveCard(true)).set('logSkill','ll_xinjiewei');
                            "step 1"
                            if(result.bool){
                                player.moveCard(true);
                            }
                            else{
                                event.finish();
                            }
                        },
                        sub:true,
                    },
                },
                ai:{
                    basic:{
                        useful:[6,4],
                        value:[6,4],
                    },
                    result:{
                        player:1,
                    },
                    expose:0.2,
                },
            },
            xiefeng:{
                trigger:{
                    player:"phaseBegin",
                },
                frequent:true,
                filter:function (event,player){
       if(player.getEquip(1)) return false;
                    return true;
   },
                content:function (){
        event.equip=get.cardPile(function(card){
            return get.subtype(card)=='equip1';
        });
            player.equip(event.equip||game.createCard(get.inpilefull('equip').randomGet()),true);
            event.e=true;
    },
                ai:{
                    order:8,
                    threaten:1.2,
                    result:{
                        player:1,
                    },
                },
            },
            "jiqiao1":{
                trigger:{
                    player:"phaseUseBegin",
                },
                direct:true,
                filter:function (event,player){
        return player.countCards('he',{type:'equip'})>0;
    },
                content:function (){
        'step 0'
        player.chooseToDiscard(get.prompt('jiqiao'),[1,player.countCards('he',{type:'equip'})],'he',function(card){
            return get.type(card)=='equip';
        }).set('ai',function(card){
            if(card.name=='bagua') return 10;
            return 7-get.value(card);
        });
        'step 1'
        if(result.bool){
            player.logSkill('jiqiao');
            event.cards=get.cards(5*result.cards.length);
            player.showCards(event.cards);
        }
        else{
            event.finish();
        }
        'step 2'
        var gained=[];
        for(var i=0;i<event.cards.length;i++){
            if(get.type(event.cards[i],'trick')=='trick'){
                gained.push(event.cards[i]);
            }
            else{
                event.cards[i].discard();
            }
        }
        player.gain(gained,'gain2');
    },
                ai:{
                    threaten:1.5,
                },
            },
            "l_kongsheng":{
                audio:"ext:异界四国:2",
                trigger:{
                    player:"phaseBegin",
                },
                direct:true,
                filter:function (event,player){
                    return player.countCards('he')>0;
                },
                content:function (){
                    'step 0'
                    player.chooseCard(get.prompt('l_kongsheng'),'he',[1,player.countCards('he')]).set('ai',function(card){
                        if(card.name=='shan'||card.name=='du') return 1;
                        return 5-get.value(card);
                    });
                    'step 1'
                    if(result.bool){
                        player.logSkill('l_kongsheng');
                        if(player.storage.l_kongsheng1==undefined) player.storage.l_kongsheng1=result.cards;
                        player.lose(result.cards,ui.special);
                        game.log(player,'将',result.cards,'置于其武将牌上');
                        player.addSkill('l_kongsheng1');
                    }else{
                        event.finish();
                    };
                },
            },
            "l_kongsheng1":{
                marktext:"箜",
                intro:{
                    content:"cards",
                },
                mark:true,
                audio:"ext:异界四国:2",
                trigger:{
                    player:"phaseEnd",
                },
                filter:function (event,player){
                    return player.storage.l_kongsheng1!=undefined&&player.storage.l_kongsheng1.length>0;
                },
                forced:true,
                popup:false,
                content:function (){
                    'step 0'
                    player.logSkill('l_kongsheng');
                    event.list=[];
                    for(var i=0;i<player.storage.l_kongsheng1.length;i++){
                        if(get.type(player.storage.l_kongsheng1[i])=='equip'){
                            player.useCard(player.storage.l_kongsheng1[i],player);
                            event.list.push(player.storage.l_kongsheng1[i]);
                        };
                    };
                    'step 1'
                    for(var i=0;i<event.list.length;i++){
                        player.storage.l_kongsheng1.remove(event.list[i]);
                    };
                    'step 2'
                    player.gain(player.storage.l_kongsheng1,'gain2');
                    'step 3'
                    for(var i=0;i<player.storage.l_kongsheng1.length;i++){
                        player.storage.l_kongsheng1.remove(player.storage.l_kongsheng1[i]);
                    };
                    player.removeSkill('l_kongsheng1');
                    delete player.storage.l_kongsheng1;
                },
            },
            "l_shenduan":{
                trigger:{
                    player:"discardAfter",
                },
                filter:function (event,player){
                    for(var i=0;i<event.cards.length;i++){
                        if(get.color(event.cards[i])=='black'&&get.type(event.cards[i])=='basic'&&
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
                        if(get.color(trigger.cards[i])=='black'&&get.type(trigger.cards[i])=='basic'&&
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
                        player.chooseTarget(get.prompt('l_shenduan'),function(card,player,target){
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
                            player.chooseCardButton('选择一张牌当作兵断寸断使用',event.cards,true);
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
                        player.logSkill('l_shenduan',event.current);
                    }
                },
            },
            "l_jiezi":{
                trigger:{
                    global:["phaseDrawSkipped","phaseDrawCancelled"],
                },
                forced:true,
                filter:function (event,player){
                    return event.player!=player;
                },
                content:function (){
                    player.draw();
                },
            },
            "l_jigong":{
                audio:"jigong",
                trigger:{
                    player:"phaseUseBegin",
                },
                check:function (event,player){
                    var nh=player.countCards('h')-player.countCards('h',{type:'equip'});
                    if(nh<=1) return true;
                    if(player.countCards('h','tao')) return false;
                    if(nh<=2) return Math.random()<0.7;
                    if(nh<=3) return Math.random()<0.4;
                    return false;
                },
                content:function (){
                    player.draw(2);
                    player.addTempSkill('l_jigong2');
                },
            },
            "l_jigong2":{
                mod:{
                    maxHandcard:function (player,num){
                        var damage=player.getStat().damage;
                        if(typeof damage=='number') return num-player.hp+damage;
                        return 0;
                    },
                },
            },
            "l_qingguo":{
                audio:"qingguo",
                enable:["chooseToRespond"],
                filterCard:function (card){
                    return get.color(card)=='black';
                },
                viewAs:{
                    name:"shan",
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
            "l_fangzhu":{
                audio:"fangzhu",
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                content:function (){
                    "step 0"
                    player.chooseTarget(get.prompt('l_fangzhu'),function(card,player,target){
                        return player!=target
                    }).ai=function(target){
                        if(target.hasSkillTag('noturn')) return 0;
                        var player=_status.event.player;
                        if(get.attitude(_status.event.player,target)==0) return 0;
                        if(get.attitude(_status.event.player,target)>0){
                            if(target.classList.contains('turnedover')) return 1000-target.countCards('h');
                            if(player.maxHp-player.hp<3) return -1;
                            return 100-target.countCards('h');
                        }
                        else{
                            if(target.classList.contains('turnedover')) return -1;
                            if(player.maxHp-player.hp>=3) return -1;
                            return 1+target.countCards('h');
                        }
                    }
                    "step 1"
                    if(result.bool){
                        player.logSkill('l_fangzhu',result.targets);
                        result.targets[0].draw(player.maxHp-player.hp);
                        result.targets[0].turnOver();
                    }
                },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                    effect:{
                        target:function (card,player,target){
                            if(get.tag(card,'damage')){
                                if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
                                if(target.hp<=1) return;
                                if(!target.hasFriend()) return;
                                var hastarget=false;
                                var turnfriend=false;
                                var players=game.filterPlayer();
                                for(var i=0;i<players.length;i++){
                                    if(get.attitude(target,players[i])<0&&!players[i].isTurnedOver()){
                                        hastarget=true;
                                    }
                                    if(get.attitude(target,players[i])>0&&players[i].isTurnedOver()){
                                        hastarget=true;
                                        turnfriend=true;
                                    }
                                }
                                if(get.attitude(player,target)>0&&!hastarget) return;
                                if(turnfriend||target.hp==target.maxHp) return [0.5,1];
                                if(target.hp>1) return [1,0.5];
                            }
                        },
                    },
                },
            },
            gaikunfen:{
                audio:"kunfen",
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                content:function (){
        "step 0"
        if(player.storage.gaikunfen||
        (get.mode()=='guozhan'&&player.hiddenSkills.contains('gaikunfen'))){
            if(!player.storage.gaikunfen){
                event.skillHidden=true;
            }
            player.chooseBool(get.prompt('gaikunfen')).set('ai',function(){
                var player=_status.event.player;
                if(player.hp>3) return true;
                if(player.hp==3&&player.countCards('h')<3) return true;
                if(player.hp==2&&player.countCards('h')==0) return true;
                return false;
            });
        }
        else{
            event.forced=true;
        }
        "step 1"
        if(event.forced||result.bool){
            player.logSkill('gaikunfen');
            player.loseHp();
        }
        else{
            event.finish();
        }
        "step 2"
        player.draw(2);
    },
                ai:{
                    threaten:1.5,
                },
            },
            "l_fengliang":{
                skillAnimation:true,
                unique:true,
                audio:"fengliang",
                derivation:"l_tiaoxin",
                trigger:{
                    player:"dying",
                },
                priority:10,
                forced:true,
                filter:function (event,player){
                    return !player.storage.kunfen;
                },
                content:function (){
                    "step 0"
                    player.loseMaxHp();
                    "step 1"
                    if(player.hp<2){
                        player.recover(2-player.hp);
                    }
                    "step 2"
                    player.addSkill('l_tiaoxin');
                    player.storage.kunfen=true;
                    player.awakenSkill('l_fengliang');
                },
            },
            "l_tiaoxin":{
                audio:"ext:异界四国:2",
                audioname:["xiahouba"],
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
                    return target.canUse({name:'sha'},player)&&target.countCards('he');
                },
                content:function (){
                    "step 0"
                    target.chooseToUse({name:'sha'},player,-1,'挑衅：对'+get.translation(player)+'使用一张杀，或令其弃置你的一张牌').set('targetRequired',true);
                    "step 1"
                    if(result.bool==false&&target.countCards('he')>0){
                        player.discardPlayerCard(target,'he',true);
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
            "l_yuhua":{
                trigger:{
                    player:"phaseDiscardBegin",
                },
                forced:true,
                audio:"yuhua",
                filter:function (event,player){
                    return event.parent.name=='phaseDiscard'&&player.countCards('h',{type:'basic'})<player.countCards('h');
                },
                content:function (){},
                mod:{
                    ignoredHandcard:function (card,player){
                        if(get.type(card)!='basic'){
                            return true;
                        }
                    },
                    cardDiscardable:function (card,player,name){
                        if(name=='phaseDiscard'&&get.type(card)!='basic') return false;
                    },
                },
            },
            "l_qirang":{
                audio:"qirang",
                trigger:{
                    player:"equipEnd",
                },
                frequent:true,
                content:function (){
                    player.gain(get.cardPile(function(card){
                        return get.type(card,'trick')=='trick';
                    }),'gain2');
                },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                            if(get.type(card)=='equip') return [1,3];
                        },
                    },
                    threaten:1.3,
                },
            },
            "l_tuntian":{
                audio:"tuntian",
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
                        player.storage.l_tuntian.push(result.card);
                        result.node.moveDelete(player);
                        game.broadcast(function(cardid,player){
                            var node=lib.cardOL[cardid];
                            if(node){
                                node.moveDelete(player);
                            }
                        },result.node.cardid,player);
                        game.addVideo('gain2',player,get.cardsInfo([result.node]));
                        player.markSkill('l_tuntian');
                        game.addVideo('storage',player,['l_tuntian',get.cardsInfo(player.storage.l_tuntian),'cards']);
                    }
                },
                init:function (player){
                    player.storage.l_tuntian=[];
                },
                intro:{
                    content:"cards",
                },
                group:"l_tuntian_dist",
                subSkill:{
                    dist:{
                        mod:{
                            globalFrom:function (from,to,distance){
                                if(from.storage.l_tuntian) return distance-from.storage.l_tuntian.length;
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
            "l_zaoxian":{
                skillAnimation:true,
                audio:"zaoxian",
                unique:true,
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                filter:function (event,player){
                    if(player.storage.l_tuntian) return player.storage.l_tuntian.length>=3&&!player.storage.l_zaoxian;
                },
                derivation:"l_jixi",
                content:function (){
                    player.loseMaxHp();
                    player.addSkill('l_jixi');
                    player.storage.l_zaoxian=true;
                    player.awakenSkill('l_zaoxian');
                },
            },
            "l_jixi":{
                audio:"jixi",
                enable:"phaseUse",
                filter:function (event,player){
                    return player.storage.l_tuntian.length>0;
                },
                chooseButton:{
                    dialog:function (event,player){
                        return ui.create.dialog('急袭',player.storage.l_tuntian,'hidden');
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
                                player.storage.l_tuntian.remove(card);
                                player.syncStorage('l_tuntian');
                                if(!player.storage.l_tuntian.length){
                                    player.unmarkSkill('l_tuntian');
                                }
                                else{
                                    player.markSkill('l_tuntian');
                                }
                                player.logSkill('l_jixi',result.targets);
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
                            return player.storage.l_tuntian.length-1;
                        },
                    },
                },
            },
            "l_mizhao":{
                enable:"phaseUse",
                usable:1,
                audio:"mizhao",
                filter:function (event,player){
                    return player.countCards('h')>0;
                },
                filterCard:true,
                selectCard:-1,
                filterTarget:function (card,player,target){
                    return player!=target;
                },
                discard:false,
                prepare:"give2",
                ai:{
                    order:1,
                    result:{
                        player:0,
                        target:function (player,target){
                            if(target.hasSkillTag('nogain')) return 0;
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
                        },
                    },
                },
                content:function (){
                    "step 0"
                    event.target1=targets[0];
                    targets[0].gain(cards,player);
                    var players=game.filterPlayer();
                    for(var i=0;i<players.length;i++){
                        if(players[i].countCards('h')&&players[i]!=event.target1&&players[i]!=player){
                            break;
                        }
                    }
                    if(i==players.length){
                        event.finish();
                    }
                    "step 1"
                    player.chooseTarget(true,'选择拼点目标',function(card,player,target){
                        return target.countCards('h')&&target!=_status.event.target1&&target!=player;
                    }).set('ai',function(target){
                        var player=_status.event.player;
                        var eff=get.effect(target,{name:'sha'},_status.event.target1,player);
                        var att=get.attitude(player,target);
                        if(att>0){
                            return eff-10;
                        }
                        return eff;
                    }).set('target1',event.target1);
                    "step 2"
                    if(result.targets.length){
                        event.target2=result.targets[0];
                        event.target1.line(event.target2);
                        event.target1.chooseToCompare(event.target2);
                    }
                    else{
                        event.finish();
                    }
                    "step 3"
                    if(!result.tie){
                        if(result.bool){
                            event.target1.useCard({name:'sha'},event.target2);
                        }
                        else{
                            event.target2.useCard({name:'sha'},event.target1);
                        }
                    }
                },
            },
            "l_hongde":{
                trigger:{
                    player:["gainEnd","loseEnd"],
                },
                direct:true,
                filter:function (event,player){
                    return event.cards&&event.cards.length>1;
                },
                content:function (){
                    'step 0'
                    player.chooseTarget(get.prompt('l_hongde'),function(card,player,target){
                        return target!=player;
                    }).set('ai',function(target){
                        return get.attitude(player,target);
                    });
                    'step 1'
                    if(result.bool){
                        player.logSkill('l_hongde',result.targets);
                        result.targets[0].draw();
                    }
                },
            },
            "l_shenxing":{
                audio:"shenxing",
                enable:"phaseUse",
                position:"he",
                filterCard:true,
                selectCard:2,
                prompt:"弃置两张牌并摸一张牌",
                check:function (card){return 4-get.useful(card)},
                content:function (){
                    player.draw();
                },
                ai:{
                    order:1,
                    result:{
                        player:1,
                    },
                },
            },
            "l_pingkou":{
                group:["l_pingkou_init","l_pingkou_count"],
                subSkill:{
                    init:{
                        trigger:{
                            player:"phaseBegin",
                        },
                        silent:true,
                        content:function (){
                            player.storage.l_pingkou=0;
                        },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                    count:{
                        trigger:{
                            player:["phaseJudgeCancelled","phaseJudgeSkipped","phaseDrawCancelled","phaseDrawSkipped","phaseUseCancelled","phaseUseSkipped","phaseDiscardCancelled","phaseDiscardSkipped"],
                        },
                        silent:true,
                        content:function (){
                            player.storage.l_pingkou++;
                            console.log(event.triggername,trigger.name)
                        },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                },
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                filter:function (event,player){
                    return player.storage.l_pingkou>0;
                },
                content:function (){
                    'step 0'
                    player.chooseTarget([1,player.storage.l_pingkou],get.prompt2('l_pingkou'),function(card,player,target){
                        return target!=player;
                    }).set('ai',function(target){
                        var player=_status.event.player;
                        return get.damageEffect(target,player,player);
                    });
                    'step 1'
                    if(result.bool){
                        player.logSkill('l_pingkou',result.targets);
                        event.targets=result.targets.slice(0).sortBySeat();
                    }
                    else{
                        event.finish();
                    }
                    'step 2'
                    if(event.targets&&event.targets.length){
                        event.targets.shift().damage();
                        event.redo();
                    }
                },
                ai:{
                    combo:"fenli",
                    effect:{
                        target:function (card){
                            if(card.name=='lebu'||card.name=='bingliang') return 0.5;
                        },
                    },
                },
            },
            "l_zhenwei":{
                trigger:{
                    global:"useCardToBefore",
                },
                direct:true,
                priority:5,
                filter:function (event,player){
                    if(player==event.target||player==event.player) return false;
                    if(!player.countCards('he')) return false;
                    if(event.targets.length>1) return false;
                    if(!event.target) return false;
                    if(event.target.hp>=player.hp) return false;

                    var card=event.card;
                    if(card.name=='sha') return true;
                    if(get.color(card)=='black'&&get.type(card)=='trick') return true;
                    return false;
                },
                content:function (){
                    "step 0"
                    var save=false;
                    if(get.attitude(player,trigger.target)>2){
                        if(trigger.card.name=='sha'){
                            if(player.countCards('h','shan')||player.getEquip(2)||
                            trigger.target.hp==1||player.hp>trigger.target.hp+1){
                                if(!trigger.target.countCards('h','shan')||trigger.target.countCards('h')<player.countCards('h')){
                                    save=true;
                                }
                            }
                        }
                        else if(trigger.card.name=='juedou'&&trigger.target.hp==1){
                            save=true;
                        }
                        else if(trigger.card.name=='shunshou'&&
                            get.attitude(player,trigger.player)<0&&
                            get.attitude(trigger.player,trigger.target)<0){
                            save=true;
                        }
                    }
                    var next=player.chooseToDiscard('he',get.prompt('l_zhenwei'));
                    next.logSkill=['l_zhenwei',trigger.target];
                    next.set('ai',function(card){
                        if(_status.event.aisave){
                            return 7-get.value(card);
                        }
                        return 0;
                    });
                    next.set('aisave',save);
                    "step 1"
                    if(result.bool){
                        player.chooseControl('转移','失效',function(){
                            var trigger=_status.event.getTrigger();
                            var player=_status.event.player;
                            if(trigger.card.name=='sha'){
                                if(player.countCards('h','shan')) return '转移';
                            }
                            else if(trigger.card.name=='juedou'){
                                if(player.countCards('h','sha')) return '转移';
                            }
                            return '失效';
                        }).set('prompt','将'+get.translation(trigger.card)+'转移给你，或令其失效');
                    }
                    else{
                        event.finish();
                    }
                    "step 2"
                    if(result.control=='转移'){
                        player.draw();
                        trigger.target=player;
                        trigger.targets.length=0;
                        trigger.targets.push(player);
                        trigger.untrigger();
                        trigger.trigger('useCardToBefore');
                        trigger.trigger(trigger.card.name+'Before');
                        trigger.player.line(player);
                    }
                    else{
                        if(get.itemtype(trigger.card)=='card'){
                            trigger.player.$gain2(trigger.card);
                            if(!trigger.player.storage.l_zhenwei2){
                                trigger.player.storage.l_zhenwei2=[trigger.card];
                            }
                            else{
                                trigger.player.storage.l_zhenwei2.push(trigger.card);
                            }
                            ui.special.appendChild(trigger.card);
                            trigger.player.markSkill('l_zhenwei2');
                        }
                        trigger.cancel();
                        trigger.player.addSkill('l_zhenwei2');
                    }
                    game.delay();
                },
                ai:{
                    threaten:1.1,
                },
            },
            "l_zhenwei2":{
                mark:true,
                intro:{
                    content:"cards",
                },
                trigger:{
                    global:"phaseAfter",
                },
                forced:true,
                content:function (){
                    player.gain(player.storage.l_zhenwei2,'gain2');
                    delete player.storage.l_zhenwei2;
                    player.removeSkill('l_zhenwei2');
                },
            },
            "l_xinshensu":{
                group:["shensu1","shensu2","shensu4"],
            },
            "shensu1":{
                audio:"shensu",
                trigger:{
                    player:"phaseBegin",
                },
                direct:true,
                content:function (){
                    "step 0"
                    var check= player.countCards('h')>2;
                    player.chooseTarget(get.prompt('shensu'),function(card,player,target){
                        if(player==target) return false;
                        return player.canUse({name:'sha'},target,false);
                    }).set('check',check).set('ai',function(target){
                        if(!_status.event.check) return 0;
                        return get.effect(target,{name:'sha'},_status.event.player);
                    });
                    "step 1"
                    if(result.bool){
                        player.logSkill('shensu1',result.targets);
                        player.useCard({name:'sha'},result.targets[0],false);
                        player.skip('phaseJudge');
                        player.skip('phaseDraw');
                    }
                },
            },
            "shensu2":{
                audio:"shensu",
                trigger:{
                    player:"phaseUseBefore",
                },
                direct:true,
                filter:function (event,player){
                    return player.countCards('he',{type:'equip'})>0;
                },
                content:function (){
                    "step 0"
                    var check=player.needsToDiscard();
                    player.chooseCardTarget({
                        prompt:get.prompt('shensu'),
                        filterCard:function(card,player){
                            return get.type(card)=='equip'&&lib.filter.cardDiscardable(card,player)
                        },
                        position:'he',
                        filterTarget:function(card,player,target){
                            if(player==target) return false;
                            return player.canUse({name:'sha'},target,false);
                        },
                        ai1:function(card){
                            if(_status.event.check) return 0;
                            return 6-get.value(card);
                        },
                        ai2:function(target){
                            if(_status.event.check) return 0;
                            return get.effect(target,{name:'sha'},_status.event.player);
                        },
                        check:check
                    });
                    "step 1"
                    if(result.bool){
                        player.logSkill('shensu2',result.targets);
                        player.discard(result.cards[0]);
                        player.useCard({name:'sha'},result.targets[0]);
                        trigger.cancel();
                    }
                },
            },
            "shensu4":{
                audio:"shensu1",
                trigger:{
                    player:"phaseDiscardBefore",
                },
                direct:true,
                content:function (){
                    "step 0"
                    var check=player.needsToDiscard()||player.isTurnedOver();
                    player.chooseTarget(get.prompt('shensu'),function(card,player,target){
                        if(player==target) return false;
                        return player.canUse({name:'sha'},target,false);
                    }).set('check',check).set('ai',function(target){
                        if(!_status.event.check) return 0;
                        return get.effect(target,{name:'sha'},_status.event.player);
                    });
                    "step 1"
                    if(result.bool){
                        player.logSkill('shensu4',result.targets);
                        player.turnOver();
                        player.useCard({name:'sha'},result.targets[0],false);
                        trigger.cancel();
                    }
                },
            },
            "l_jianzheng":{
                trigger:{
                    global:"useCard",
                },
                filter:function (event,player){
                    if(!player.countCards('h')) return false;
                    return event.player!=player&&event.card.name=='sha'&&!event.targets.contains(player)&&
                        get.distance(event.player,player,'attack')<=1;
                },
                direct:true,
                content:function (){
                    "step 0"
                    var effect=0;
                    for(var i=0;i<trigger.targets.length;i++){
                        effect-=get.effect(trigger.targets[i],trigger.card,trigger.player,player);
                    }
                    if(effect>0){
                        if(get.color(trigger.card)!='black'){
                            effect=0;
                        }
                        else{
                            effect=1;
                        }
                        if(trigger.targets.length==1){
                            if(trigger.targets[0].hp==1){
                                effect++;
                            }
                            if(effect>0&&trigger.targets[0].countCards('h')<player.countCards('h')){
                                effect++;
                            }
                        }
                        if(effect>0){
                            effect+=6;
                        }
                    }
                    player.chooseCard('h',get.prompt2('l_jianzheng',trigger.player)).set('ai',function(card){
                        if(_status.event.effect>=0){
                            var val=get.value(card);
                            if(val<0) return 10-val;
                            return _status.event.effect-val;
                        }
                        return 0;
                    }).set('effect',effect).set('logSkill',['l_jianzheng',trigger.player]);
                    "step 1"
                    if(result.bool&&result.cards){
                        event.card=result.cards[0];
                        trigger.targets.length=0;
                        trigger.untrigger();
                    }
                    else{
                        event.finish();
                    }
                    "step 2"
                    if(!event.isMine()) game.delayx();
                    "step 3"
                    if(event.card){
                        player.logSkill('l_jianzheng',trigger.player);
                        player.lose(result.cards,ui.special);
                        game.broadcastAll(function(player){
                            var cardx=ui.create.card();
                            cardx.classList.add('infohidden');
                            cardx.classList.add('infoflip');
                            player.$throw(cardx,1000,'nobroadcast');
                        },player);
                    }
                    "step 4"
                    if(event.card){
                        event.card.fix();
                        ui.cardPile.insertBefore(event.card,ui.cardPile.firstChild);
                    }
                    "step 5"
                    if(get.color(trigger.card)!='black'){
                        trigger.targets.push(player);
                        trigger.player.line(player);
                        game.delay();
                        trigger.trigger('useCard');
                    }
                },
            },
            "l_cunmu":{
               audio:2,
				trigger:{
					player:'drawBegin'
				},
				forced:true,
				content:function(){
					trigger.bottom=true;
				},	
            },
            "l_shouxi":{
                trigger:{
                    target:"shaBefore",
                },
                direct:true,
                init:function (player){
        player.storage.l_shouxi=[];
    },
                content:function (){
        'step 0'
        var list=['sha','shan','tao','jiu','taoyuan','wugu','juedou','huogong','jiedao','tiesuo','guohe','shunshou','wuzhong','wanjian','nanman','lebu','bingliang','shandian'];
        for(var i=0;i<player.storage.l_shouxi.length;i++){
            list.remove(player.storage.l_shouxi[i]);
        }
        for(var i=0;i<list.length;i++){
            list[i]=[get.type(list[i]),'',list[i]];
        }
        player.chooseButton([get.prompt('l_shouxi',trigger.player),[list,'vcard']]).set('ai',function(button){
            return Math.random();
        });
        'step 1'
        if(result.bool){
            player.logSkill('l_shouxi');
            var name=result.links[0][2];
            var card=game.createCard(name,get.type(name),'');
            event.cardname=name;
            player.storage.l_shouxi.add(name);
            player.showCards(get.translation(player)+'声明了'+get.translation(name),card);
        }
        else{
            event.finish();
        }
        'step 2'
        var name=event.cardname;
        trigger.player.chooseToDiscard('守玺：弃置一张'+get.translation(name)+'，否则杀对'+get.translation(player)+'无效',function(card){
            return card.name==_status.event.cardname;
        }).set('ai',function(card){
            if(_status.event.att<0){
                return 10-get.value(card);
            }
            return 0;
        }).set('att',get.attitude(trigger.player,player)).set('cardname',name);
        'step 3'
        if(result.bool==false){
            trigger.cancel();
        }
        else{
            trigger.player.gainPlayerCard(player);
        }
    },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                if(card.name=='sha'&&get.attitude(player,target)<0){
                    return 0.3;
                }
            },
                    },
                },
            },
            "l_danshou":{
                enable:"phaseUse",
                filterCard:true,
                position:"he",
                audio:"danshou",
                filter:function (event,player){
                    var num=player.getStat().skill.l_danshou;
                    if(num){
                        num++;
                    }
                    else{
                        num=1;
                    }
                    return player.countCards('he')>=num;
                },
                check:function (card){
                    if(ui.selected.cards.length>=2){
                        return 4-get.value(card);
                    }
                    return 6-get.value(card);
                },
                selectCard:function (card){
                    var num=_status.event.player.getStat().skill.l_danshou;
                    if(num) return num+1;
                    return 1;
                },
                filterTarget:function (card,player,target){
                    if(player==target) return false;
                    var num=player.getStat().skill.l_danshou;
                    if(num){
                        num++;
                    }
                    else{
                        num=1;
                    }
                    if(num<=2&&!target.countCards('he')) return false;
                    return get.distance(player,target,'attack')<=1;
                },
                content:function (){
                    'step 0'
                    var num=player.getStat().skill.l_danshou;
                    switch(num){
                        case 1:player.discardPlayerCard(target,true);break;
                        case 2:target.chooseCard('选择一张牌交给'+get.translation(player),'he',true);break;
                        case 3:target.damage();break;
                        default:game.asyncDraw([player,target],2);
                    }
                    if(num!=2) event.finish();
                    'step 1'
                    if(result.cards){
                        player.gain(result.cards,target);
                        target.$give(result.cards.length,player);
                    }
                },
                ai:{
                    order:8.6,
                    result:{
                        target:function (player,target){
                            var num=player.getStat().skill.l_danshou;
                            if(num){
                                num++;
                            }
                            else{
                                num=1;
                            }
                            if(num>3) return 0;
                            if(num==3) return get.damageEffect(target,player,target);
                            return -1;
                        },
                    },
                },
            },
            "l_haoshi":{
                audio:"haoshi",
                trigger:{
                    player:"phaseDrawBegin",
                },
                threaten:1.4,
                check:function (event,player){
                    if(player.countCards('h')<=1) return true;
                    return game.hasPlayer(function(current){
                        return current!=player&&current.isMinHandcard()&&get.attitude(player,current)>0;
                    });
                },
                content:function (){
                    trigger.num+=2;
                    player.addSkill('l_haoshi2');
                },
                ai:{
                    threaten:2,
                    ai:{
                        noh:true,
                        skillTagFilter:function (player,tag){
                            if(tag=='noh'){
                                if(player.countCards('h')!=2) return false;
                            }
                        },
                    },
                },
            },
            "l_haoshi2":{
                trigger:{
                    player:"phaseDrawEnd",
                },
                forced:true,
                popup:false,
                audio:"ext:异界四国:false",
                content:function (){
                    "step 0"
                    player.removeSkill('l_haoshi2');
                    if(player.countCards('h')<=5){
                        event.finish();
                        return;
                    }
                    player.chooseCardTarget({
                        selectCard:Math.floor(player.countCards('h')/2),
                        filterTarget:function(card,player,target){
                            return target.isMinHandcard();
                        },
                        forced:true,
                        ai2:function(target){
                            return get.attitude(_status.event.player,target);
                        }
                    });
                    "step 1"
                    if(result.targets&&result.targets[0]){
                        result.targets[0].gain(result.cards,player);
                        player.$give(result.cards.length,result.targets[0]);
                    }
                },
            },
            "l_beige":{
                audio:"beige4",
                trigger:{
                    global:"damageEnd",
                },
                filter:function (event,player){
                    return (event.card&&event.card.name=='sha'&&event.source&&
                        event.player.classList.contains('dead')==false&&player.countCards('he'));
                },
                direct:true,
                checkx:function (event,player){
                    var att1=get.attitude(player,event.player);
                    var att2=get.attitude(player,event.source);
                    return att1>0&&att2<=0;
                },
                content:function (){
                    "step 0"
                    var next=player.chooseToDiscard('he',get.prompt('l_beige'));
                    var check=lib.skill.l_beige.checkx(trigger,player);
                    next.set('ai',function(card){
                        if(_status.event.goon) return 8-get.value(card);
                        return 0;
                    });
                    next.set('logSkill','l_beige');
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
                        case 'club':trigger.source.chooseToDiscard('he',2*trigger.num,true);break;
                        case 'spade':trigger.source.turnOver();break;
                    }
                },
                ai:{
                    expose:0.3,
                },
            },
            "l_jieming":{
                audio:"ext:异界四国:2",
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                content:function (){
                    "step 0"
                    player.chooseTarget(get.prompt('l_jieming'),[1,trigger.num],function(card,player,target){
                        return target.countCards('h')<Math.min(target.maxHp,5);
                    }).set('ai',function(target){
                        var att=get.attitude(_status.event.player,target);
                        if(att>2){
                            return Math.min(5,target.maxHp)-target.countCards('h');
                        }
                        return att/3;
                    });
                    "step 1"
                    if(result.bool){
                        player.logSkill('l_jieming',result.targets);
                        for(var i=0;i<result.targets.length;i++){
                            result.targets[i].draw(Math.min(5,result.targets[i].maxHp)-result.targets[i].countCards('h'));
                        }
                    }
                },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                    effect:{
                        target:function (card,player,target,current){
                            if(get.tag(card,'damage')&&target.hp>1){
                                if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
                                var max=0;
                                var players=game.filterPlayer();
                                for(var i=0;i<players.length;i++){
                                    if(get.attitude(target,players[i])>0){
                                        max=Math.max(Math.min(5,players[i].hp)-players[i].countCards('h'),max);
                                    }
                                }
                                switch(max){
                                    case 0:return 2;
                                    case 1:return 1.5;
                                    case 2:return [1,2];
                                    default:return [0,max];
                                }
                            }
                            if((card.name=='tao'||card.name=='caoyao')&&
                                target.hp>1&&target.countCards('h')<=target.hp) return [0,0];
                        },
                    },
                },
            },
            "l_qianxi1":{
                audio:"qianxi",
                trigger:{
                    player:"phaseBegin",
                },
                content:function (){
        "step 0"
        player.draw();
        player.chooseToDiscard('he',true);
        "step 1"
        if(!result.bool){
            event.finish();
            return;
        }
        event.color=get.color(result.cards[0]);
        player.chooseTarget(function(card,player,target){
            return player!=target&&get.distance(player,target)<=1;
        },true).set('ai',function(target){
            return -get.attitude(_status.event.player,target);
        });
        "step 2"
        if(result.bool&&result.targets.length){
            result.targets[0].storage.l_qianxi2=event.color;
            result.targets[0].addSkill('l_qianxi2');
            player.line(result.targets,'green');
            game.addVideo('storage',result.targets[0],['l_qianxi2',event.color]);
        }
    },
            },
            "l_qianxi2":{
                trigger:{
                    global:"phaseAfter",
                },
                forced:true,
                mark:true,
                content:function (){
                    player.removeSkill('l_qianxi2');
                    delete player.storage.l_qianxi2;
                },
                mod:{
                    cardEnabled:function (card,player){
                        if(get.color(card)==player.storage.l_qianxi2) return false;
                    },
                    cardUsable:function (card,player){
                        if(get.color(card)==player.storage.l_qianxi2) return false;
                    },
                    cardRespondable:function (card,player){
                        if(get.color(card)==player.storage.l_qianxi2) return false;
                    },
                    cardSavable:function (card,player){
                        if(get.color(card)==player.storage.l_qianxi2) return false;
                    },
                },
                intro:{
                    content:function (color){
                        return '不能使用或打出'+get.translation(color)+'的牌';
                    },
                },
            },
            "l_tieqi":{
                audio:"tieji",
                trigger:{
                    player:"shaBegin",
                },
                check:function (event,player){
        return get.attitude(player,event.target)<0;
    },
                logTarget:"target",
                content:function (){
        "step 0"
        player.judge(function(){return 0});
        if(!trigger.target.hasSkill('fengyin')){
            trigger.target.addTempSkill('fengyin');
        }
        "step 1"
        var suit=get.suit(result.card);
        var target=trigger.target;
        var num=target.countCards('h','shan');
        target.chooseToDiscard('请弃置一张'+get.translation(suit)+'牌，否则不能使用闪抵消此杀','he',function(card){
            return get.suit(card)==_status.event.suit;
        }).set('ai',function(card){
            var num=_status.event.num;
            if(num==0) return 0;
            if(card.name=='shan') return num>1?2:0;
            return 8-get.value(card);
        }).set('num',num).set('suit',suit);
        "step 2"
        if(!result.bool){
            trigger.directHit=true;
        }
    },
            },
            "l_xiansi":{
                audio:"xiansi",
                trigger:{
                    player:"phaseBegin",
                },
                direct:true,
                init:function (player){
                    player.storage.l_xiansi=[];
                },
                content:function (){
                    "step 0"
                    player.chooseTarget(get.prompt('l_xiansi'),[1,2],function(card,player,target){
                        return target.countCards('he')>0;
                    },function(target){
                        return -get.attitude(_status.event.player,target);
                    });
                    "step 1"
                    if(result.bool){
                        player.logSkill('l_xiansi',result.targets);
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
                        player.storage.l_xiansi=player.storage.l_xiansi.concat(result.links);
                        player.markSkill('l_xiansi');
                        player.syncStorage('l_xiansi');
                        event.current.lose(result.links,ui.special);
                        event.current.$give(result.links,player);
                        event.goto(2);
                    }
                },
                intro:{
                    content:"cards",
                    onunmark:function (storage,player){
                        if(storage&&storage.length){
                            for(var i=0;i<storage.length;i++){
                                storage[i].discard();
                            }
                            player.$throw(storage);
                            player.storage.l_xiansi.length=0;
                        }
                    },
                },
                ai:{
                    threaten:2,
                },
                global:"l_xiansi2",
            },
            "l_xiansi2":{
                enable:"phaseUse",
                audio:"xiansi2",
                forceaudio:true,
                filter:function (event,player){
                    var players=game.filterPlayer();
                    for(var i=0;i<players.length;i++){
                        if(players[i].storage.l_xiansi){
                            return players[i].storage.l_xiansi.length>1&&player.canUse('sha',players[i],true,true);
                        }
                    }
                    return false;
                },
                direct:true,
                delay:0,
                content:function (){
                    "step 0"
                    var targets=game.filterPlayer(function(current){
                        if(current.storage.l_xiansi){
                            return current.storage.l_xiansi.length>1&&player.canUse('sha',current,true,true);
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
                        if(event.target.storage.l_xiansi.length==2){
                            event.directresult=event.target.storage.l_xiansi.slice(0);
                        }
                        else{
                            player.chooseCardButton('移去两张“逆”',2,event.target.storage.l_xiansi,true);
                        }
                    }
                    else{
                        event.finish();
                    }
                    "step 3"
                    if(event.directresult||result.bool){
                        player.logSkill('l_xiansi2');
                        var links=event.directresult||result.links;
                        for(var i=0;i<links.length;i++){
                            event.target.storage.l_xiansi.remove(links[i]);
                        }
                        event.target.syncStorage('l_xiansi');
                        if(!event.target.storage.l_xiansi.length){
                            event.target.unmarkSkill('l_xiansi');
                        }
                        else{
                            event.target.markSkill('l_xiansi');
                        }
                        event.target.$throw(links);
                        game.log(event.target,'被移去了',links);
                        for(var i=0;i<links.length;i++){
                            links[i].discard();
                        }
                        player.useCard({name:'sha'},event.target);
                    }
                },
                ai:{
                    order:function (){
                        return get.order({name:'sha'})+0.05;
                    },
                    result:{
                        player:function (player){
                            var target=game.findPlayer(function(current){
                                return current.storage.l_xiansi;
                            });
                            if(target){
                                return get.effect(target,{name:'sha'},player,player);
                            }
                        },
                    },
                },
            },
            "l_qieting1":{
                audio:"qieting",
                global:"l_qieting2",
                globalSilent:true,
                trigger:{
                    global:"phaseEnd",
                },
                filter:function (event,player){
        return event.player!=player&&!event.player.tempSkills.l_qieting3&&event.player.isAlive();
    },
                direct:true,
                content:function (){
        "step 0"
        var next;
        if(trigger.player.hasCard(function(card){
            return !player.getEquip(card);
        },'e')){
            next=player.chooseControl('移动装备','draw_card','cancel2',function(event,player){
                var source=_status.event.source;
                var att=get.attitude(player,source);
                if(source.hasSkillTag('noe')){
                    if(att>0){
                        return '移动装备';
                    }
                }
                else{
                    if(att<=0){
                        return '移动装备';
                    }
                }
                return 'draw_card';
            }).set('source',trigger.player);
        }
        else{
            next=player.chooseControl('draw_card','cancel2',function(){
                return 'draw_card';
            });
        }
        next.set('prompt',get.prompt('l_qieting1',trigger.player));
        "step 1"
        if(result.control=='移动装备'){
            player.logSkill('l_qieting1',trigger.player);
            player.choosePlayerCard(trigger.player,'e','将一张装备牌移至你的装备区').set('filterButton',function(button){
                return !_status.event.player.getEquip(button.link);
            });
        }
        else{
            if(result.control=='draw_card'){
                player.logSkill('l_qieting1');
                player.draw();
            }
            event.finish();
        }
        "step 2"
        if(result&&result.links&&result.links.length){
            game.delay(2);
            trigger.player.$give(result.links[0],player);
            player.equip(result.links[0]);
            player.addExpose(0.2);
        }
    },
            },
            "l_qieting2":{
                trigger:{
                    player:"useCard",
                },
                filter:function (event,player){
                    return _status.currentPhase==player&&event.targets&&(event.targets.length>1||event.targets[0]!=player);
                },
                forced:true,
                popup:false,
                content:function (){
                    player.addTempSkill('l_qieting3');
                },
            },
            "l_qieting3":{
            },
            "l_shenxian":{
                audio:"ext:异界四国:2",
                trigger:{
                    global:"discardAfter",
                },
                filter:function (event,player){
                    if(event.player==player||_status.currentPhase==player) return false;
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
                    if(trigger.delay==false) game.delay();
                    "step 1"
                    player.draw();
                },
                ai:{
                    threaten:1.5,
                },
            },
            "l_shenxian2":{
            },
            "ll_shenxian":{
                audio:"shenxian",
                trigger:{
                    global:"discardAfter",
                },
                filter:function (event,player){
                    if(event.player==player||_status.currentPhase==player) return false;
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
                    if(trigger.delay==false) game.delay();
                    "step 1"
                    player.draw();
                },
                ai:{
                    threaten:1.5,
                },
            },
            "ll_shenxian2":{
            },
            "l_shuangxiong":{
                audio:"shuangxiong1",
                trigger:{
                    player:"phaseDrawBefore",
                },
                check:function (event,player){
                    if(player.countCards('h')>player.hp) return true;
                    if(player.countCards('h')>3) return true;
                    return false;
                },
                content:function (){
                    "step 0"
                    player.judge(ui.special);
                    "step 1"
                    player.gain(result.card);
                    player.$gain2(result.card);
                    player.addTempSkill('l_shuangxiong2');
                    player.storage.l_shuangxiong=get.color(result.card);
                    trigger.num--;
                },
            },
            "l_shuangxiong2":{
                audio:"shuangxiong2",
                enable:"phaseUse",
                viewAs:{
                    name:"juedou",
                },
                filterCard:function (card,player){
                    return get.color(card)!=player.storage.l_shuangxiong;
                },
                check:function (card){
                    return 10-get.value(card);
                },
                ai:{
                    basic:{
                        order:10,
                        useful:1,
                        value:5.5,
                    },
                    result:{
                        target:-1.5,
                        player:function (player,target){
                            if(get.damageEffect(target,player,target)>0&&get.attitude(player,target)>0&&get.attitude(target,player)>0){
                                return 0;
                            }
                            var hs1=target.getCards('h','sha');
                            var hs2=player.getCards('h','sha');
                            if(hs1.length>hs2.length+1){
                                return -2;
                            }
                            var hsx=target.getCards('h');
                            if(hsx.length>2&&hs2.length==0&&hsx[0].number<6){
                                return -2;
                            }
                            if(hsx.length>3&&hs2.length==0){
                                return -2;
                            }
                            if(hs1.length>hs2.length&&(!hs2.length||hs1[0].number>hs2[0].number)){
                                return -2;
                            }
                            return -0.5;
                        },
                    },
                    tag:{
                        respond:2,
                        respondSha:2,
                        damage:1,
                    },
                },
            },
            "l_xinjuece1":{
                audio:"juece",
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                filter:function (event,player){
        return game.hasPlayer(function(player){
            return player.countCards('h')==0;
        });
    },
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt('l_xinjuece1'),function(card,player,target){
            return target.countCards('h')==0;
        }).set('ai',function(target){
            var player=_status.event.player;
            return get.damageEffect(target,player,player);
        });
        'step 1'
        if(result.bool){
            player.logSkill('juece',result.targets);
            result.targets[0].damage();
        }
    },
            },
            "l_xinmieji":{
                audio:"mieji",
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
                    return player.countCards('h',{type:['trick','delay'],color:'black'});
                },
                filterCard:function (card){
                    return get.color(card)=='black'&&get.type(card,'trick')=='trick';
                },
                filterTarget:function (card,player,target){
                    return target!=player&&target.countCards('h')>0;
                },
                discard:false,
                delay:false,
                check:function (card){
                    return 8-get.value(card);
                },
                content:function (){
                    'step 0'
                    player.showCards(cards);
                    'step 1'
                    ui.cardPile.insertBefore(cards[0],ui.cardPile.firstChild);
                    var n1=target.getCards('he',function(card){
                        if(!lib.filter.cardDiscardable(card,player)) return false;
                        return get.type(card,'trick')=='trick';
                    });
                    var n2=target.getCards('he',function(card){
                        if(!lib.filter.cardDiscardable(card,player)) return false;
                        return get.type(card,'trick')!='trick';
                    });
                    if(n1.length>1||n2.length>2||(n1.length==1&&n2.length==2)){
                        target.chooseToDiscard('弃置一张锦囊牌，或两张非锦囊牌',true,'he',function(card,player){
                            if(!lib.filter.cardDiscardable(card,player)) return false;
                            if(!_status.event.nontrick){
                                return get.type(card,'trick')=='trick';
                            }
                            if(ui.selected.cards.length){
                                return get.type(card,'trick')!='trick';
                            }
                            return true;
                        }).set('ai',function(card){
                            if(get.type(card,'trick')=='trick'){
                                return 8-get.value(card);
                            }
                            return -get.value(card);
                        }).set('selectCard',function(){
                            if(ui.selected.cards.length==1&&get.type(ui.selected.cards[0],'trick')=='trick'){
                                return 1;
                            }
                            return 2;
                        }).set('nontrick',n2.length>=2).set('complexCard',true);
                    }
                    else{
                        if(n1.length){
                            target.discard(n1);
                        }
                        else if(n2.length){
                            target.discard(n2);
                        }
                    }
                },
                ai:{
                    order:9,
                    result:{
                        target:-1,
                    },
                },
            },
            "l_fenwei":{
                skillAnimation:true,
                audio:"ext:异界四国:2",
                audioname:["heqi"],
                unique:true,
                mark:true,
                trigger:{
                    global:"useCard",
                },
                priority:5,
                filter:function (event,player){
                    if(get.type(event.card)!='trick') return false;
                    if(get.info(event.card).multitarget) return false;
                    if(event.targets.length<2) return false;
                    if(player.storage.l_fenwei) return false;
                    return true;
                },
                init:function (player){
                    player.storage.l_fenwei=false;
                },
                direct:true,
                content:function (){
                    "step 0"
                    player.chooseTarget(get.prompt('l_fenwei'),
                        [1,trigger.targets.length],function(card,player,target){
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
                        player.awakenSkill('l_fenwei');
                        player.logSkill('l_fenwei',result.targets);
                        player.storage.l_fenwei=true;
                        for(var i=0;i<result.targets.length;i++){
                            trigger.targets.remove(result.targets[i]);
                        }
                        game.delay();
                    }
                },
                intro:{
                    content:"limited",
                },
            },
            "l_qizhou":{
                trigger:{
                    player:["phaseBefore","equipAfter","loseAfter"],
                },
                forced:true,
                popup:false,
                derivation:["l_mashu","l_yingzi","l_duanbing","l_fenwei"],
                filter:function (event,player){
        if(player.equiping) return false;
        var suits=[];
        var es=player.getCards('e');
        for(var i=0;i<es.length;i++){
            suits.add(get.suit(es[i]));
        }
        if(player.additionalSkills.l_qizhou){
            return player.additionalSkills.l_qizhou.length!=suits.length;
        }
        else{
            return suits.length>0;
        }
    },
                content:function (){
        var suits=[];
        var es=player.getCards('e');
        for(var i=0;i<es.length;i++){
            suits.add(get.suit(es[i]));
        }
        player.removeAdditionalSkill('l_qizhou');
        switch(suits.length){
            case 1:player.addAdditionalSkill('l_qizhou',['l_mashu']);break;
            case 2:player.addAdditionalSkill('l_qizhou',['l_mashu','l_yingzi']);break;
            case 3:player.addAdditionalSkill('l_qizhou',['l_mashu','l_yingzi','l_duanbing']);break;
            case 4:player.addAdditionalSkill('l_qizhou',['l_mashu','l_yingzi','l_duanbing','l_fenwei']);break;
        }
    },
                ai:{
                    threaten:1.2,
                },
            },
            "l_dujin":{
                audio:"dujin",
                trigger:{
                    player:"phaseDrawBegin",
                },
                frequent:true,
                content:function (){
                    trigger.num+=1+Math.ceil(player.countCards('e')/2);
                },
            },
            "ll_dujin":{
                trigger:{
                    player:"phaseDrawBegin",
                },
                frequent:true,
                content:function (){
                    trigger.num+=1+Math.ceil(player.countCards('e')/2);
                },
            },
            "l_zhichi":{
                audio:"zhichi",
                trigger:{
                    player:"damageEnd",
                },
                forced:true,
                filter:function (event,player){
                    return _status.currentPhase!=player;
                },
                content:function (){
                    player.addTempSkill('l_zhichi2',['phaseAfter','phaseBefore']);
                },
            },
            "l_zhichi2":{
                trigger:{
                    target:"useCardToBefore",
                },
                forced:true,
                priority:15,
                filter:function (event,player){
                    return get.type(event.card)=='trick'||event.card.name=='sha';
                },
                content:function (){
                    game.log(player,'发动了智迟，',trigger.card,'对',trigger.target,'失效')
                    trigger.cancel();
                },
                mark:true,
                intro:{
                    content:"杀或普通锦囊牌对你无效",
                },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                            if(get.type(card)=='trick'||card.name=='sha') return 'zeroplayertarget';
                        },
                    },
                },
            },
            "l_xiashu":{
                trigger:{
                    player:"phaseUseBegin",
                },
                direct:true,
                filter:function (event,player){
                    return player.countCards('h')>0;
                },
                content:function (){
                    'step 0'
                    var maxval=0;
                    var hs=player.getCards('h');
                    for(var i=0;i<hs.length;i++){
                        maxval=Math.max(maxval,get.value(hs[i]));
                    }
                    player.chooseTarget(get.prompt('l_xiashu'),lib.filter.notMe).set('ai',function(target){
                        var player=_status.event.player;
                        var maxval=_status.event.maxval;
                        var dh=target.countCards('h')-player.countCards('h');
                        var att=get.attitude(player,target);
                        if(target.hasSkill('qingjian')) return false;
                        if(dh<=0) return 0;
                        if(att>0) return 0.1;
                        if(maxval>=8) return 0;
                        if(att==0) return 0.2;
                        if(dh>=3) return dh;
                        if(dh==2){
                            if(maxval<=7) return dh;
                        }
                        if(maxval<=6) return dh;
                        return 0;

                    }).set('maxval',maxval);
                    'step 1'
                    if(result.bool){
                        player.logSkill('l_xiashu',result.targets);
                        event.target=result.targets[0];
                        var hs=player.getCards('h');
                        event.target.gain(hs,player);
                        player.$give(hs.length,event.target);
                    }
                    else{
                        event.finish();
                    }
                    'step 2'
                    var hs=event.target.getCards('h');
                    if(!hs.length){
                        event.finish();
                        return;
                    }
                    hs.sort(function(a,b){
                        return get.value(b,player,'raw')-get.value(a,player,'raw');
                    });
                    event.target.chooseCard([1,hs.length],'展示至少一张手牌',true).set('ai',function(card){
                        var rand=_status.event.rand;
                        var list=_status.event.list;
                        if(_status.event.att){
                            if(ui.selected.cards.length>=Math.ceil(list.length/2)) return 0;
                            var value=get.value(card);
                            if(_status.event.getParent().player.isHealthy()){
                                value+=(get.tag(card,'damage')?1.5:0)+(get.tag(card,'draw')?2:0);
                            }
                            return value;
                        }
                        if(ui.selected.cards.length>=Math.floor(list.length/2)) return 0;
                        return (list.indexOf(card)%2==rand)?1:0;
                    }).set('rand',(Math.random()<0.6)?1:0).set('list',hs).set('att',get.attitude(event.target,player)>0);
                    'step 3'
                    event.target.showCards(result.cards);
                    event.cards1=result.cards;
                    event.cards2=event.target.getCards('h',function(card){
                        return !event.cards1.contains(card);
                    });
                    'step 4'
                    var choice;
                    var num1=event.cards1.length;
                    var num2=event.cards2.length;
                    if(get.attitude(event.target,player)>0&&num1>=num2){
                        choice=0;
                    }
                    else if(num1==num2){
                        choice=(Math.random()<0.45)?0:1;
                    }
                    else if(num1>num2){
                        if(num1-num2==1){
                            choice=(Math.random()<0.6)?0:1;
                        }
                        else{
                            choice=0;
                        }
                    }
                    else{
                        if(num2-num1==1){
                            choice=(Math.random()<0.6)?1:0;
                        }
                        else{
                            choice=1;
                        }
                    }
                    player.chooseControl(function(event,player){
                        return _status.event.choice;
                    }).set('choiceList',['获得'+get.translation(event.target)+'展示的牌',
                    '获得'+get.translation(event.target)+'未展示的牌']).set('choice',choice);
                    'step 5'
                    if(result.index==0){
                        player.gain(event.cards1,target);
                        target.$give(event.cards1,player);
                    }
                    else{
                        player.gain(event.cards2,target);
                        target.$giveAuto(event.cards2,player);
                    }
                },
                ai:{
                    expose:0.1,
                },
            },
            "l_kuanshi":{
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                content:function (){
                    'step 0'
                    player.chooseTarget(get.prompt('l_kuanshi')).set('ai',function(target){
                        if(get.attitude(_status.event.player,target)>0){
                            return 1/Math.sqrt(target.hp+1);
                        }
                        return 0;
                    });
                    'step 1'
                    if(result.bool){
                        var target=result.targets[0];
                        player.logSkill('l_kuanshi',target);
                        target.storage.l_kuanshi2=player;
                        target.addSkill('l_kuanshi2');
                    }
                },
            },
            "l_kuanshi2":{
                mark:"character",
                intro:{
                    content:"下一次受到超过1点的伤害时，防止此伤害，然后$跳过下个回合的摸牌阶段",
                },
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                filter:function (event,player){
                    return event.num>1;
                },
                priority:-11,
                content:function (){
                    trigger.cancel();
                    player.storage.l_kuanshi2.skip('phaseDraw');
                    player.removeSkill('l_kuanshi2');
                },
                group:"l_kuanshi2_remove",
                onremove:true,
                subSkill:{
                    remove:{
                        trigger:{
                            global:["phaseBegin","dieAfter"],
                        },
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                            return event.player==player.storage.l_kuanshi2;
                        },
                        content:function (){
                            player.removeSkill('l_kuanshi2');
                        },
                        sub:true,
                    },
                },
            },
            "l_ganlu":{
                enable:"phaseUse",
                usable:1,
                audio:"ganlu",
                selectTarget:2,
                filterTarget:function (card,player,target){
                    if(target.isMin()) return false;
                    if(ui.selected.targets.length==0) return true;
                    if(ui.selected.targets[0].countCards('e')==0&&target.countCards('e')==0) return false;
                    return Math.abs(ui.selected.targets[0].countCards('e')-target.countCards('e'))<=player.maxHp-player.hp;
                },
                multitarget:true,
                content:function (){
                    "step 0"
                    event.cards=[targets[0].getCards('e'),targets[1].getCards('e')];
                    targets[0].lose(event.cards[0],ui.special);
                    targets[1].lose(event.cards[1],ui.special);
                    if(event.cards[0].length) targets[0].$give(event.cards[0],targets[1]);
                    if(event.cards[1].length) targets[1].$give(event.cards[1],targets[0]);
                    "step 1"
                    for(var i=0;i<event.cards[1].length;i++){
                        targets[0].equip(event.cards[1][i]);
                    }
                    for(var i=0;i<event.cards[0].length;i++){
                        targets[1].equip(event.cards[0][i]);
                    }
                },
                ai:{
                    order:10,
                    threaten:function (player,target){
                        return 0.8*Math.max(1+target.maxHp-target.hp);
                    },
                    result:{
                        target:function (player,target){
                            var list1=[];
                            var list2=[];
                            var num=player.maxHp-player.hp;
                            var players=game.filterPlayer();
                            for(var i=0;i<players.length;i++){
                                if(get.attitude(player,players[i])>0) list1.push(players[i]);
                                else if(get.attitude(player,players[i])<0) list2.push(players[i]);
                            }
                            list1.sort(function(a,b){
                                return a.countCards('e')-b.countCards('e');
                            });
                            list2.sort(function(a,b){
                                return b.countCards('e')-a.countCards('e');
                            });
                            var delta;
                            for(var i=0;i<list1.length;i++){
                                for(var j=0;j<list2.length;j++){
                                    delta=list2[j].countCards('e')-list1[i].countCards('e');
                                    if(delta<=0) continue;
                                    if(delta<=num){
                                        if(target==list1[i]||target==list2[j]){
                                            return get.attitude(player,target);
                                        }
                                        return 0;
                                    }
                                }
                            }
                            return 0;
                        },
                    },
                    effect:{
                        target:function (card,player,target){
                            if(target.hp==target.maxHp&&get.tag(card,'damage')) return 0.2;
                        },
                    },
                },
            },
            "l_duanxie1":{
                enable:"phaseUse",
                usable:1,
                audio:"duanxie",
                filterTarget:function (card,player,target){
        return player!=target&&!target.isLinked();
    },
                content:function (){
        "step 0"
        if(!target.isLinked()) target.link();
        "step 1"
        if(!player.isLinked()) player.link();
    },
                ai:{
                    result:{
                        target:-1,
                        player:function (player){
                return player.isLinked()?0:-0.8;
            },
                    },
                    order:2,
                    expose:0.3,
                    effect:{
                        target:function (card){
                if(card.name=='tiesuo'){
                    return 0.5;
                }
            },
                    },
                },
            },
            "l_fenmin":{
                audio:"fenming",
                trigger:{
                    player:"phaseEnd",
                },
                check:function (event,player){
        var num=game.countPlayer(function(current){
            if(current.isLinked()&&current.countCards('he')){
                return get.attitude(player,current);
            }
        });
        return num<0;
    },
                filter:function (event,player){
        return player.isLinked();
    },
                content:function (){
        "step 0"
        event.targets=game.filterPlayer(function(current){
            if(current.isLinked()&&current.countCards('he')){
                return true;
            }
        });
        event.num=0;
        event.targets.sort(lib.sort.seat);
        "step 1"
        if(event.num<event.targets.length){
            var target=event.targets[event.num];
            if(player==target){
                player.chooseToDiscard(true,'he');
            }
            else{
                player.discardPlayerCard(true,'he',target);
            }
            event.num++;
            event.redo();
        }
    },
            },
            "l_taiji1":{
                trigger:{
                    player:"respond",
                },
                filter:function (event,player){
        return event.card.name=='shan'&&player.hasSha();
    },
                direct:true,
                content:function (){
        player.chooseToUse({name:'sha'},'太极：是否使用一张杀？').logSkill='l_taiji';
    },
            },
            "l_jiudu1":{
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
        var next=player.chooseToDiscard(get.prompt('zhendu',trigger.player));
        next.set('ai',function(card){
            if(_status.event.nono) return -1;
            return 7-get.useful(card);
        });
        next.set('logSkill',['zhendu',trigger.player]);
        next.set('nono',nono);
        "step 1"
        if(result.bool){
            trigger.player.damage();
        }
        else{
            event.finish();
        }
        "step 2"
        trigger.player.useCard({name:'jiu'},trigger.player);
    },
                ai:{
                    threaten:2,
                    expose:0.3,
                },
            },
            "l_qiluan":{
                trigger:{
                    source:"dieAfter",
                },
                priority:-10,
                silent:true,
                locked:false,
                onremove:function (player){
                    delete player.storage.l_qiluan;
                },
                filter:function (event){
                    return _status.currentPhase!=event.player;
                },
                content:function (){
                    if(!player.storage.l_qiluan){
                        player.storage.l_qiluan=1;
                    }
                    else{
                        player.storage.l_qiluan++;
                    }
                },
                group:["l_qiluan2","l_qiluan3","l_qiluan4"],
                forced:true,
                popup:false,
            },
            "l_qiluan2":{
                audio:"ext:异界四国:2",
                trigger:{
                    global:"phaseAfter",
                },
                frequent:true,
                filter:function (event,player){
                    return player.storage.l_qiluan?true:false;
                },
                content:function (){
                    if(get.mode()=='guozhan'){
                        player.draw(3);
                    }
                    else{
                        player.draw(4*player.storage.l_qiluan);                    
                    }
                    player.storage.l_qiluan=0;
                },
            },
            "l_qiluan3":{
                trigger:{
                    source:"dieAfter",
                },
                frequent:true,
                priority:-10,
                audio:"l_qiluan2",
                filter:function (event){
                    return _status.currentPhase==event.player;
                },
                content:function (){
                if(get.mode()!='guozhan'){
                var num=4;
                }else{
                    var num=3;
                    }
                    if(player.storage.l_qiluan){
                        if(get.mode()!='guozhan'){
                            num+=4*player.storage.l_qiluan;
                        }
                        player.storage.l_qiluan=0;
                    }
                    player.draw(num);
                },
            },
            "l_qiluan4":{
                trigger:{
                    global:"phaseBegin",
                },
                silent:true,
                content:function (){
                    player.storage.l_qiluan=0;
                },
                forced:true,
                popup:false,
            },
            "l_zhensha1":{
                trigger:{
                    global:"dying",
                },
                priority:9,
                filter:function (event,player){
        return event.player.hp<=0&&(player.countCards('h','jiu')>0||player.countCards('h',{color:'black'})>=2)&&player!=event.player;
    },
                direct:true,
                content:function (){
        'step 0'
        var goon=(get.attitude(player,trigger.player)<0);
        var next=player.chooseToDiscard('鸠杀：是否弃置一张酒或两张黑色手牌令'+get.translation(trigger.player)+'立即死亡？');
        next.ai=function(card){
            if(ui.selected.cards.length){
                if(ui.selected.cards[0].name=='jiu') return 0;
            }
            if(goon){
                if(card.name=='jiu') return 2;
                return 1;
            }
            return 0;
        };
        next.filterCard=function(card){
            if(ui.selected.cards.length){
                return get.color(card)=='black';
            }
            return get.color(card)=='black'||card.name=='jiu';
        };
        next.complexCard=true,
        next.logSkill=['l_zhensha',trigger.player];
        next.selectCard=function(){
            if(ui.selected.cards.length){
                if(get.color(ui.selected.cards[0])!='black') return [1,1];
            }
            return [1,2];
        }
        'step 1'
        if(result.bool){
            trigger.player.die();
        }
        else{
            event.finish();
        }
        'step 2'
        if(!trigger.player.isAlive()){
            trigger.cancel(true);
        }
    },
                ai:{
                    threaten:1.5,
                },
            },
            "l_tuqiang1":{
                trigger:{
                    player:"respond",
                },
                filter:function (event,player){
        return event.card&&event.card.name=='shan';
    },
                frequent:true,
                content:function (){
        player.draw();
    },
                ai:{
                    mingzhi:false,
                    effect:{
                        target:function (card,player,target){
                if(get.tag(card,'respondShan')){
                    return 0.8;
                }
            },
                    },
                },
            },
            "l_fenghuo1":{
                enable:"chooseToUse",
                filter:function (event,player){
        return player.countCards('e')>0;
    },
                filterCard:true,
                position:"e",
                viewAs:{
                    name:"nanman",
                },
                prompt:"将一张装备区内的牌当南蛮入侵使用",
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
            },
            "l_zhuhai1":{
                trigger:{
                    global:"phaseEnd",
                },
                direct:true,
                filter:function (event,player){
        return event.player.isAlive()&&event.player.getStat('damage')&&
        lib.filter.targetEnabled({name:'sha'},player,event.player)&&player.hasSha();
    },
                content:function (){
        player.chooseToUse({name:'sha'},'诛害：是否对'+get.translation(trigger.player)+'使用一张杀？',
            trigger.player,-1).set('logSkill','l_zhuhai');
    },
            },
            "l_moukui":{
                trigger:{
                    player:"shaBegin",
                },
                direct:true,
                audio:"moukui",
                content:function (){
                    "step 0"
                    var controls=['draw_card'];
                    if(trigger.target.countCards('he')){
                        controls.push('discard_card');
                    }
                    controls.push('cancel');
                    player.chooseControl(controls).set('ai',function(){
                        var trigger=_status.event.getTrigger();
                        if(trigger.target.countCards('he')&&get.attitude(_status.event.player,trigger.target)<0){
                            return 'discard_card';
                        }
                        else{
                            return 'draw_card';
                        }
                    }).set('prompt',get.prompt('l_moukui'));
                    "step 1"
                    if(result.control=='draw_card'){
                        player.draw();
                        player.logSkill('l_moukui');
                    }
                    else if(result.control=='discard_card'&&trigger.target.countCards('he')){
                        player.discardPlayerCard(trigger.target,'he',true).logSkill=['l_moukui',trigger.target];
                    }
                    else event.finish();
                    "step 2"
                    player.addTempSkill('l_moukui2','shaEnd');
                },
                ai:{
                    expose:0.1,
                },
            },
            "l_moukui2":{
                audio:"ext:异界四国:false",
                trigger:{
                    player:"shaMiss",
                },
                forced:true,
                filter:function (event,player){
                    return player.countCards('he')>0;
                },
                content:function (){
                    trigger.target.discardPlayerCard(player,true);
                },
            },
            "l_qiangwu":{
                audio:"ext:异界四国:2",
                enable:"phaseUse",
                usable:1,
                content:function (){
                    "step 0"
                    player.judge();
                    "step 1"
                    player.storage.l_qiangwu=result.number;
                },
                ai:{
                    result:{
                        player:1,
                    },
                    order:11,
                },
                mod:{
                    targetInRange:function (card,player){
                        if(_status.currentPhase==player&&card.name=='sha'&&card.number<player.storage.l_qiangwu) return true;
                    },
                    cardUsable:function (card,player){
                        if(_status.currentPhase==player&&card.name=='sha'&&card.number>player.storage.l_qiangwu) return Infinity;
                    },
                },
                group:["l_qiangwu2","l_qiangwu3"],
            },
            "l_qiangwu2":{
                trigger:{
                    player:"phaseUseBegin",
                },
                silent:true,
                content:function (){
                    delete player.storage.l_qiangwu;
                },
                forced:true,
                popup:false,
            },
            "l_qiangwu3":{
                trigger:{
                    player:"useCard",
                },
                filter:function (event,player){
                    if(_status.currentPhase==player&&event.card.name=='sha'&&
                    event.card.number>player.storage.l_qiangwu) return true;
                    return false;
                },
                forced:true,
                popup:false,
                content:function (){
                    if(player.stat[player.stat.length-1].card.sha>0){
                        player.stat[player.stat.length-1].card.sha--;
                    }
                },
            },
            "l_weikui":{
                audio:"kuiwei",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
                    return target!=player&&target.countCards('h');
                },
                content:function (){
                    'step 0'
                    player.loseHp();
                    'step 1'
                    if(target.countCards('h','shan')){
                        player.viewHandcards(target);
                        player.useCard({name:'sha'},target,false);
                        player.storage.l_weikui2=target;
                        player.addTempSkill('l_weikui2');
                    }
                    else{
                        player.discardPlayerCard(target,'visible',true);
                    }
                },
                ai:{
                    order:8,
                    result:{
                        target:function (player,target){
                            if(player.hp<=2) return 0;
                            if(player.hp==3) return target.hp<=2?-1:0;
                            return -1;
                        },
                    },
                },
            },
            "l_weikui2":{
                onremove:true,
                mod:{
                    globalFrom:function (from,to){
                        if(to==from.storage.l_weikui2) return -Infinity;
                    },
                },
                mark:"character",
                intro:{
                    content:"与$的距离视为1直到回合结束",
                },
            },
            "l_qianju1":{
                mod:{
                    globalFrom:function (from,to,distance){
            return distance-(from.maxHp-from.hp);
        },
                },
            },
            "l_quji1":{
                enable:"phaseUse",
                usable:1,
                position:"he",
                filterCard:true,
                selectCard:function (){
        var player=_status.event.player;
        var num=game.countPlayer(function(current){
            return current.isDamaged();
        });
        return [1,Math.min(num,player.maxHp-player.hp)];
    },
                filterTarget:function (card,player,target){
        return target.hp<target.maxHp;
    },
                filter:function (event,player){
        return player.hp<player.maxHp;
    },
                selectTarget:function (){
        return ui.selected.cards.length;
    },
                check:function (card){
        var player=_status.event.player;
        if(ui.selected.cards.length>=game.countPlayer(function(current){
            return get.attitude(player,current)>0&&current.isDamaged();
        })){
            return -1;
        }
        if(get.color(card)=='black') return -1;
        return 9-get.value(card);
    },
                content:function (){
        "step 0"
        target.recover();
        "step 1"
        if(target==player){
            for(var i=0;i<cards.length;i++){
                if(get.color(cards[i])=='black'){
                    player.loseHp();
                    break;
                }
            }
        }
    },
                ai:{
                    result:{
                        target:1,
                    },
                    order:6,
                },
            },
            "l_ranshang":{
                audio:"ranshang",
                trigger:{
                    player:"damageEnd",
                },
                filter:function (event,player){
                    return event.num>0&&event.nature=='fire';
                },
                init:function (player){
                    player.storage.l_ranshang=0;
                },
                forced:true,
                check:function (){
                    return false;
                },
                content:function (){
                    if(player.storage.l_ranshang){
                        player.storage.l_ranshang+=trigger.num;
                    }
                    else{
                        player.storage.l_ranshang=trigger.num;
                    }
                    player.markSkill('l_ranshang');
                    game.addVideo('storage',player,['l_ranshang',player.storage.l_ranshang]);
                },
                intro:{
                    content:"mark",
                },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                            if(card.name=='sha'){
                                if(card.nature=='fire'||player.hasSkill('zhuque_skill')) return 2;
                            }
                            if(get.tag(card,'fireDamage')&&current<0) return 2;
                        },
                    },
                },
                group:"l_ranshang2",
            },
            "l_ranshang2":{
                audio:"ranshang2",
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                filter:function (event,player){
                    return player.storage.l_ranshang>0;
                },
                content:function (){
                    player.loseHp(player.storage.l_ranshang);
                },
            },
            "l_xueji1":{
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        return player.countCards('he',{color:'red'})>0;
    },
                filterTarget:true,
                selectTarget:function (){
        var player=_status.event.player
        return [1,Math.max(1,player.maxHp-player.hp)];
    },
                position:"he",
                filterCard:{
                    color:"red",
                },
                check:function (card){
        return 8-get.value(card);
    },
                multitarget:true,
                multiline:true,
                line:"fire",
                content:function (){
        'step 0'
        event.delay=false;
        for(var i=0;i<targets.length;i++){
            if(!targets[i].isLinked()){
                targets[i].link(true);
                event.delay=true;
            }
        }
        'step 1'
        if(event.delay){
            game.delay();
        }
        'step 2'
        targets[0].damage('fire');
    },
                ai:{
                    damage:true,
                    threaten:1.5,
                    order:7,
                    result:{
                        target:function (player,target){
                var eff=get.damageEffect(target,player,target,'fire');
                if(target.isLinked()){
                    return eff/10;
                }
                else{
                    return eff;
                }
            },
                    },
                },
            },
            "l_yingjian":{
                trigger:{
                    player:"phaseBegin",
                },
                direct:true,
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('l_yingjian'),function(card,player,target){
            return lib.filter.targetEnabled({name:'sha'},player,target);
        }).set('ai',function(target){
            return get.effect(target,{name:'sha'},_status.event.player);
        });
        "step 1"
        if(result.bool){
            player.logSkill('l_yingjian');
            player.useCard({name:'sha'},result.targets,false);
        }
    },
                ai:{
                    threaten:function (player,target){
            return 1.6;
        },
                },
            },
            "l_guzheng11":{
                audio:"guzheng",
                // unique:true,
				// gainable:true,
				group:["l_guzheng1_count"],
				subSkill:{
					count:{
						trigger:{global:['discardAfter','cardsDiscardAfter']},
						forced:true,
						silent:true,
						popup:false,
						filter:function(event,player){
							if(event.l_guzheng1ed) return false;
							if(!event.cards||!event.cards.length) return false;
							var evt=event.getParent('phaseDiscard');
							return evt&&evt.name=='phaseDiscard'&&evt.player!=player;
						},
						content:function(){
							var evt=event.getParent('phaseDiscard');
							trigger.l_guzheng1ed=true;
							if(!evt.l_guzheng1cards) evt.l_guzheng1cards=[];
							evt.l_guzheng1cards.addArray(trigger.cards);
						},
						sub:true,
					},
				},
				trigger:{global:'phaseDiscardAfter'},
				filter:function(event,player){
					if(event.player!=player&&event.player.isIn()&&
					event.l_guzheng1cards&&event.l_guzheng1cards.length){
						for(var i=0;i<event.l_guzheng1cards.length;i++){
							if(get.position(event.l_guzheng1cards[i])=='d'){
								return true;
							}
						}
						return false;
					}
				},
				checkx:function(event,player){
					var du=false;
					var num=0;
					for(var i=0;i<event.l_guzheng1cards.length;i++){
						if(get.position(event.l_guzheng1cards[i])=='d'){
							num++;
							if(event.l_guzheng1cards[i].name=='du'){
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
					event.cards=trigger.l_guzheng1cards.slice(0);
					for(var i=0;i<event.cards.length;i++){
						if(get.position(event.cards[i])!='d'){
							event.cards.splice(i,1);i--;
						}
					}
					if(event.cards.length==0){
						event.finish();
						return;
					}
					var check=lib.skill.l_guzheng1.checkx(trigger,player);
					player.chooseCardButton(event.cards,'固政：选择令'+get.translation(trigger.player)+'收回的牌').set('ai',function(button){
						if(_status.event.check){
							return 20-get.value(button.link);
						}
						return 0;
					}).set('check',check);
					"step 1"
					if(result.bool){
						game.delay(0.5);
						player.logSkill('l_guzheng1',trigger.player);
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
				ai:{
					threaten:1.3,
					expose:0.2
				}
            },
            "l_guose1":{
                audio:"guose1",
                filter:function (event,player){
        return player.countCards('he',{color:'red'})>0;
    },
                enable:"chooseToUse",
                filterCard:function (card){
        return get.color(card)=='red';
    },
                position:"he",
                viewAs:{
                    name:"lebu",
                },
                prompt:"将一张红色牌当乐不思蜀使用",
                check:function (card){return 6-get.value(card)},
                ai:{
                    threaten:1.5,
                    basic:{
                        order:1,
                        useful:1,
                        value:8,
                    },
                    result:{
                        target:function (player,target){
                var num=target.hp-target.countCards('h')-2;
                if(num>-1) return -0.01;
                if(target.hp<3) num--;
                if(target.isTurnedOver()) num/=2;
                var dist=get.distance(player,target,'absolute');
                if(dist<1) dist=1;
                return num/Math.sqrt(dist);
            },
                    },
                    tag:{
                        skip:"phaseUse",
                    },
                },
            },
            "l_zishu":{
                subSkill:{
                    discard:{
                        trigger:{
                            player:"gainAfter",
                        },
                        silent:true,
                        filter:function (event,player){
                            return _status.currentPhase!=player;
                        },
                        content:function (){
                            if(!player.storage.l_zishu){
                                player.storage.l_zishu=[];
                            }
                            player.storage.l_zishu.addArray(trigger.cards);
                        },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                    "discard2":{
                        trigger:{
                            global:"phaseAfter",
                        },
                        forced:true,
                        filter:function (event,player){
                            if(_status.currentPhase!=player&&player.storage.l_zishu){
                                var he=player.getCards('he');
                                for(var i=0;i<player.storage.l_zishu.length;i++){
                                    if(he.contains(player.storage.l_zishu[i])){
                                        return true;
                                    }
                                }
                                return false;
                            }
                        },
                        content:function (){
                            var he=player.getCards('he');
                            var list=[];
                            for(var i=0;i<player.storage.l_zishu.length;i++){
                                if(he.contains(player.storage.l_zishu[i])){
                                    list.push(player.storage.l_zishu[i])
                                }
                            }
                            player.$throw(list);
                            player.lose(list,ui.discardPile);
                            game.log(player,'将',list,'置入弃牌堆');
                        },
                        sub:true,
                    },
                    "discard3":{
                        trigger:{
                            global:"phaseBegin",
                        },
                        silent:true,
                        content:function (){
                            delete player.storage.l_zishu;
                        },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                    draw:{
                        trigger:{
                            player:"gainAfter",
                        },
                        forced:true,
                        filter:function (event,player){
                            if(_status.currentPhase!=player) return false;
                            return event.getParent(2).name!='l_zishu_draw';
                        },
                        content:function (){
                            player.draw();
                        },
                        sub:true,
                    },
                },
                ai:{
                    threaten:1.2,
                    nogain:1,
                },
                group:["l_zishu_draw","l_zishu_discard","l_zishu_discard2","l_zishu_discard3"],
            },
            "l_luanji":{
                audio:"luanji",
                enable:"phaseUse",
                viewAs:{
                    name:"wanjian",
                },
                filterCard:function (card,player){
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
                check:function (card){
                    var player=_status.event.player;
                    var targets=game.filterPlayer(function(current){
                        return player.canUse('wanjian',current);
                    });
                    var num=0;
                    for(var i=0;i<targets.length;i++){
                        var eff=get.sgn(get.effect(targets[i],{name:'wanjian'},player,player));
                        if(targets[i].hp==1){
                            eff*=1.5;
                        }
                        num+=eff;
                    }
                    if(!player.needsToDiscard(-1)){
                        if(targets.length>=7){
                            if(num<2) return 0;
                        }
                        else if(targets.length>=5){
                            if(num<1.5) return 0;
                        }
                    }
                    return 6-get.value(card);
                },
                ai:{
                    basic:{
                        order:10,
                        useful:1,
                        value:5,
                    },
                    wuxie:function (target,card,player,viewer){
                        if(get.attitude(viewer,target)>0&&target.countCards('h','shan')){
                            if(!target.countCards('h')||target.hp==1||Math.random()<0.7) return 0;
                        }
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
                        respondShan:1,
                        damage:1,
                        multitarget:1,
                        multineg:1,
                    },
                },
            },
            "l_weimu1":{
                mod:{
                    targetEnabled:function (card){
            if((get.type(card)=='trick'||get.type(card)=='delay')&&
                get.color(card)=='black') return false;
        },
                },
            },
            "l_yizhong1":{
                trigger:{
                    target:"shaBefore",
                },
                forced:true,
                audio:"yizhong",
                filter:function (event,player){
                    if(player.getEquip(2)) return false;
                    return (event.card.name=='sha'&&get.color(event.card)=='black')
                },
                content:function (){
                    trigger.cancel();
                },
                ai:{
                    effect:{
                        target:function (card,player,target){
                            if(player==target&&get.subtype(card)=='equip2'){
                                if(get.equipValue(card)<=8) return 0;
                            }
                            if(target.getEquip(2)) return;
                            if(card.name=='sha'&&get.color(card)=='black') return 'zerotarget';
                        },
                    },
                },
            },
            "l_ol_shenfen":{
                audio:"shenfen",
                enable:"phaseUse",
                filter:function (event,player){
                    return player.storage.l_baonu>=6;
                },
                skillAnimation:true,
                animationColor:"metal",
                usable:1,
                content:function (){
                    "step 0"
                    player.storage.l_baonu-=6;
                    player.syncStorage('l_baonu');
                    player.updateMarks('l_baonu');
                    event.targets=game.filterPlayer();
                    event.targets.remove(player);
                    event.targets.sort(lib.sort.seat);
                    event.targets2=event.targets.slice(0);
                    event.targets3=event.targets.slice(0);
                    player.line(event.targets,'green');
                    "step 1"
                    if(event.targets.length){
                        event.targets.shift().damage();
                        event.redo();
                    }
                    "step 2"
                    if(event.targets2.length){
                        var cur=event.targets2.shift();
                        if(cur&&cur.countCards('e')){
                            cur.discard(cur.get('e'));
                        }
                        event.redo();
                    }
                    "step 3"
                    if(event.targets3.length){
                        var cur=event.targets3.shift();
                        if(cur&&cur.countCards('h')){
                            cur.chooseToDiscard('h',true,4);
                        }
                        event.redo();
                    }
                    "step 4"
                    player.turnOver();
                },
                ai:{
                    combo:"l_baonu",
                    order:10,
                    result:{
                        player:function (player){
                            return game.countPlayer(function(current){
                                if(current!=player){
                                    return get.sgn(get.damageEffect(current,player,player));
                                }
                            });
                        },
                    },
                },
            },
            shenfen:{
                audio:2,
                unique:true,
                enable:"phaseUse",
                filter:function (event,player){
                    return player.storage.l_baonu>=6;
                },
                skillAnimation:true,
                animationColor:"metal",
                limited:true,
                content:function (){
                    "step 0"
                    player.awakenSkill('shenfen');
                    player.storage.l_baonu-=6;
                    player.markSkill('l_baonu');
                    player.syncStorage('l_baonu');
                    event.targets=game.filterPlayer();
                    event.targets.remove(player);
                    event.targets.sort(lib.sort.seat);
                    event.targets2=event.targets.slice(0);
                    player.line(event.targets,'green');
                    "step 1"
                    if(event.targets.length){
                        event.targets.shift().damage();
                        event.redo();
                    }
                    "step 2"
                    if(event.targets2.length){
                        var cur=event.targets2.shift();
                        if(cur&&cur.countCards('he')){
                            cur.chooseToDiscard('he',true,4);
                        }
                        event.redo();
                    }
                },
                ai:{
                    order:10,
                    result:{
                        player:function (player){
                            return game.countPlayer(function(current){
                                if(current!=player){
                                    return get.sgn(get.damageEffect(current,player,player));
                                }
                            });
                        },
                    },
                },
            },
            "l_baonu":{
                audio:"baonu",
                mark:true,
                init:function (player){
                    player.storage.l_baonu=2;
                    player.markSkill('l_baonu');
                    player.syncStorage('l_baonu');
                    if(get.mode()!='boss'){
                    player.logSkill('l_baonu');
                    }
                },
                trigger:{
                    source:"damageEnd",
                    player:"damageEnd",
                },
                forced:true,
                filter:function (event){
                    return event.num>0; 
                },
                content:function (){
                    player.storage.l_baonu+=trigger.num;
                    player.markSkill('l_baonu');
                    player.syncStorage('l_baonu');
                },
                intro:{
                    content:"mark",
                },
                ai:{
                    combo:"shenfen",
                    maixie:true,
                    "maixie_hp":true,
                },
            },
            "l_qiaobian":{
                group:["l_qiaobian1","l_qiaobian2","l_qiaobian3","l_qiaobian4"],
                ai:{
                    threaten:3,
                },
            },
            "l_qiaobian1":{
                audio:"qiaobian1",
                trigger:{
                    player:"phaseJudgeBefore",
                },
                filter:function (event,player){
                return player.countCards('h')>0;
            },
                direct:true,
                frequent:true,
                content:function (){
                "step 0"
                if(player.countCards('j')==0&&(!event.isMine()||!lib.config.autoskilllist.contains('l_qiaobian1'))){
                    event.finish();
                }
                else{
                    var next=player.chooseToDiscard(get.prompt('l_qiaobian'),'弃置一张手牌并跳过判定阶段');
                    next.set('ai',get.unuseful2);
                    next.set('logSkill','l_qiaobian1');
                }
                "step 1"
                if(result.bool){
                    trigger.cancel();
                }
            },
            },
            "l_qiaobian2":{
                audio:"qiaobian2",
                trigger:{
                    player:"phaseDrawBefore",
                },
                filter:function (event,player){
                return player.countCards('h')>0;
            },
                direct:true,
                content:function (){
                "step 0"
                var check,i,num=0,num2=0,players=game.filterPlayer();
                for(i=0;i<players.length;i++){
                    if(player!=players[i]&&players[i].countCards('h')){
                        var att=get.attitude(player,players[i]);
                        if(att<=0){
                            num++;
                        }
                        if(att<0){
                            num2++;
                        }
                    }
                }
                check=(num>=2&&num2>0);

                player.chooseToDiscard(get.prompt('l_qiaobian'),'弃置一张手牌并跳过摸牌阶段，然后可以获得至多两名角色各一张手牌',lib.filter.cardDiscardable).set('ai',function(card){
                    if(!_status.event.check) return 0;
                    return 7-get.value(card);
                }).set('check',check).set('logSkill','l_qiaobian2');
                "step 1"
                if(result.bool){
                    trigger.cancel();
                    player.chooseTarget([1,2],'获得至多两名角色各一张手牌',function(card,player,target){
                        return target!=player&&target.countCards('h');
                    }).set('ai',function(target){
                        return 1-get.attitude(_status.event.player,target);
                    })
                }
                else{
                    event.finish();
                }
                "step 2"
                if(result.bool){
                    player.line(result.targets,'green');
                    event.targets=result.targets;
                    if(!event.targets.length) event.finish();
                }
                else{
                    event.finish();
                }
                "step 3"
                player.gainMultiple(event.targets);
                "step 4"
                game.delay();
            },
                ai:{
                    expose:0.2,
                },
            },
            "l_qiaobian3":{
                audio:"qiaobian3",
                trigger:{
                    player:"phaseUseBefore",
                },
                filter:function (event,player){
                return player.countCards('h')>0;
            },
                direct:true,
                content:function (){
                "step 0"
                var check;
                if(!player.canMoveCard(true)){
                    check=false;
                }
                else{
                    check=game.hasPlayer(function(current){
                        return get.attitude(player,current)>0&&current.countCards('j');
                    });
                    if(!check){
                        if(player.countCards('h')>player.hp+1){
                            check=false;
                        }
                        else if(player.countCards('h',{name:['wuzhong']})){
                            check=false;
                        }
                        else{
                            check=true;
                        }
                    }
                }
                player.chooseToDiscard(get.prompt('l_qiaobian'),'弃置一张手牌并跳过出牌阶段，然后可以移动场上的一张牌',lib.filter.cardDiscardable).set('ai',function(card){
                    if(!_status.event.check) return 0;
                    return 7-get.value(card);
                }).set('check',check).set('logSkill','l_qiaobian3');
                "step 1"
                if(result.bool){
                    trigger.cancel();
                    player.moveCard();
                }
                else{
                    event.finish();
                }
            },
                ai:{
                    expose:0.2,
                },
            },
            "l_qiaobian4":{
                audio:"qiaobian4",
                trigger:{
                    player:"phaseDiscardBefore",
                },
                direct:true,
                filter:function (event,player){
                return player.countCards('h')>0;
            },
                content:function (){
                "step 0"
                var discard=player.countCards('h')>player.hp;
                var next=player.chooseToDiscard(get.prompt('l_qiaobian4'),'弃置一张手牌并跳过弃牌阶段');
                next.logSkill='l_qiaobian';
                next.ai=function(card){
                    if(discard){
                        return 100-get.useful(card);
                    }
                    else{
                        return -1;
                    }
                };
                "step 1"
                if(result.bool){
                    trigger.cancel();
                }
            },
            },
            Lguanxing:{
                audio:"guanxing",
                trigger:{
                    player:"phaseBegin",
                },
                frequent:true,
                content:function (){
                    'step 0'
                    event.num=Math.min(5,game.countPlayer());
                    event.cards=get.cards(event.num);
                    event.chosen=[];
                    event.num1=0;
                    event.num2=0;
                    'step 1'
                    var js=player.getCards('j');
                    var pos;
                    var choice=-1;
                    var getval=function(card,pos){
                        if(js[pos]){
                            return (get.judge(js[pos]))(card);
                        }
                        else{
                            return get.value(card);
                        }
                    };
                    for(pos=0;pos<Math.min(event.cards.length,js.length+2);pos++){
                        var max=getval(event.cards[pos],pos);
                        for(var j=pos+1;j<event.cards.length;j++){
                            var current=getval(event.cards[j],pos);
                            if(current>max){
                                choice=j;
                                max=current;
                            }
                        }
                        if(choice!=-1){
                            break;
                        }
                    }
                    player.chooseCardButton('观星：选择要移动的牌',event.cards).set('filterButton',function(button){
                        return !_status.event.chosen.contains(button.link);
                    }).set('chosen',event.chosen).set('ai',function(button){
                        return button.link==_status.event.choice?1:0;
                    }).set('choice',event.cards[choice]);
                    event.pos=pos;
                    'step 2'
                    if(result.bool){
                        var card=result.links[0];
                        var index=event.cards.indexOf(card);
                        event.card=card;
                        event.chosen.push(card);
                        event.cards.remove(event.card);
                        var buttons=event.cards.slice(0);
                        player.chooseControl(function(){
                            return _status.event.controlai;
                        }).set('controlai',event.pos||0).set('sortcard',buttons).set('tosort',card);
                    }
                    else{
                        event.goto(4);
                    }
                    'step 3'
                    if(typeof result.index=='number'){
                        if(result.index>event.cards.length){
                            ui.cardPile.appendChild(event.card);
                            event.num2++;
                        }
                        else{
                            event.cards.splice(result.index,0,event.card);
                        }
                        event.num--;
                        if(event.num>0){
                            event.goto(1);
                        }
                    }
                    'step 4'
                    while(event.cards.length){
                        ui.cardPile.insertBefore(event.cards.pop(),ui.cardPile.firstChild);
                        event.num1++;
                    }
                    var js=player.getCards('j');
                    if(js.length==1){
                        if((get.judge(js[0]))(ui.cardPile.firstChild)<0){
                            player.addTempSkill('guanxing_fail');
                        }
                    }
                    player.popup(get.cnNumber(event.num1)+'上'+get.cnNumber(event.num2)+'下');
                    game.log(player,'将','#y'+get.cnNumber(event.num1)+'张牌','置于牌堆顶，','#y'+get.cnNumber(event.num2)+'张牌','置于牌堆底');
                },
                ai:{
                    guanxing:true,
                },
            },
            "Lguanxing_fail":{
            },
            "Lguanxing_old":{
                audio:"guanxing",
                audioname:["jiangwei"],
                trigger:{
                    player:"phaseBegin",
                },
                frequent:true,
                content:function (){
                    "step 0"
                    if(player.isUnderControl()){
                        game.modeSwapPlayer(player);
                    }
                    var num=Math.min(5,game.countPlayer());
                    if(player.hasSkill('yizhi')&&player.hasSkill('Lguanxing')){
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
                        if(!player.hasWuxie()){
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
                                return get.value(b,player)-get.value(a,player);
                            });
                            while(cards.length){
                                if(get.value(cards[0],player)<=5) break;
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
                        for(var i=0;i<event.dialog.buttons.length;i++){
                            event.dialog.buttons[i].classList.add('pointerdiv');
                        }
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
       	
},//技能

translate:{
	 jishouhuo:"嵇授获",
            liuke:"刘恪",
            liuyou:"刘攸",
            gaomi:"高宓",
            luyu:"吕羽",
            xuchan:"许蝉",
            maping:"马平",
            huayi:"华异",
            liuliang:"刘亮",
            jukang:"沮康",
            "lingquan1":"凌权",
            xiahoujia:"夏侯嘉",
            zhuhun:"诸昏",
            caohouchun:"曹侯淳",
            lvyu:"吕瑜",
            zhangzhi:"张芝",
            huangfeng:"黄奉",
            diangai:"典盖",
            taishimi:"太史宓",
            zhumi:"祝宓",
            mengkang:"孟康",
            huangzhi:"黄志",
            sunhua:"孙华",
            sunyuci:"孙瑜慈",
            ganxun:"甘逊",
            donghuo:"董获",
            sunren:"孙仁",
            wuyi:"吴义",
            xunrui:"荀睿",
            xiahouang:"夏侯昂",
            yuanhua:"袁华",
            zhenyi:"甄懿",
            guotuo:"郭佗",
            guansong:"关松",
            weiyu:"魏羽",
            zhaofei:"赵飞",
            leren:"乐仁",
            caozhiren:"曹智仁",
            diaoren:"貂仁",
            zhugai:"朱盖",
            wanghua:"王华",
            zhumaxun:"诸马逊",
            "zhongyong1":"钟邕",
            kongbaiquan:"孔白权",
            manyou:"满攸",
            jianganling:"简乾灵",
            zhangdun:"张顿",
            tianxun:"田逊",
            suntuo:"孙佗",
            majia:"马嘉",
            zhuchaojia:"诸超嘉",
            zhuhunyu:"诸昏育",
            "xunxun1":"荀逊",
            yanxiang:"严香",
            zhugechong:"诸葛冲",
            liyanwojuqnidayede:"李延",
            chenjiantong:"陈坚统",
            liushangji:"刘尚姬",
            zhangchao:"张超",
            huangenyue:"黄恩月",
            xuhaojixie:"徐浩纪协",
            zhenbai:"甄白",
            caojia:"曹嘉",
            zhipi:"植丕",
            zhangwei:"张维",
            zhugeji:"诸葛姬",
            dengxie:"邓协",
            l_liufeng:"刘丰",
            buyong:"步雍",
            xiahengfeng:"夏恒奉",
            wenliang:"文亮",
            zhangmiang:"张宓昂",
            zhuyoujie:"诸攸节",
            luran:"鲁然",
            caiwenyu:"蔡文彧",
            madaichao:"马岱超",
            liugechan:"刘葛禅",
            caixing:"蔡星",
            guancai:"关彩",
            yandiaowenchan:"颜貂文蝉",
            caoru:"曹儒",
            hecao:"贺操",
            kangong:"阚宫",
            wujicao:"吴姬操",
            chencendonghun:"陈岑董昏",
            zhangjian:"张坚",
            hezhi:"何雉",
            lvfengjian:"吕丰践",
            sunsi:"孙姒",
            xuyuce:"徐羽策",
            fucai:"伏彩",
            caogai:"曹盖",
            zhugehuo:"诸葛获",
            huangxiu:"黄休",
            huanglang:"黄朗",
            wutujian:"兀突坚",
            maru:"马茹",
            qiaozhaohong:"桥昭纮",
            wanggai:"王盖",
            masong:"马松",
            yuanyanfeng:"袁延奉",
            guanhua:"关华",
            jiajinhua:"贾禁华",
            lvhu:"吕虎",
            guotuliuxie:"郭图刘协",
            mengsiyan:"孟姒延",
            caohuyuan:"曹虎渊",
            lingningxun:"凌宁逊",
            "l_benghuai_hp":"体力",
            "l_benghuai_maxHp":"体力上限",
			"l_zhaxiang":"诈降",
            "l_zhaxiang2":"诈降",
            "l_zhaxiang_info":"锁定技 每当你失去1点体力后，你摸三张牌。然后若此时是你的出牌阶段，则直到回合结束，你使用红色【杀】无距离限制且不能被【闪】响应，你可以额外使用一张【杀】。",
            "ll_zhaxiang":"诈降",
            "ll_zhaxiang2":"诈降",
            "ll_zhaxiang_info":"锁定技 每当你失去1点体力后，你摸三张牌。然后若此时是你的出牌阶段，则直到回合结束，你使用红色【杀】无距离限制且不能被【闪】响应，你可以额外使用一张【杀】。",
            "xinl_qiangxi":"强袭",
            "xinl_qiangxi_info":"出牌阶段各限一次，你可以选择一项：1. 失去一点体力并对你攻击范围内的一名其他角色造成一点伤害；2. 弃置一张装备牌并对你攻击范围内的一名其他角色造成一点伤害 ",
            "l_qiangxi":"强袭",
            "l_qiangxi_info":"出牌阶段，你可以失去一点体力或弃一张武器牌，然后你对你攻击范围内的一名角色造成一点伤害，每回合限一次。",
            "l_lianying":"连营",
            "l_lianying_info":"每当你失去最后一张手牌，可摸一张牌",
            "rel_qianxun":"谦逊",
            "rel_qianxun2":"谦逊",
            "rel_qianxun_info":"每当一张延时类锦囊牌或其他角色使用的普通锦囊牌生效时，若你是此牌的唯一目标，你可以将所有手牌置于你的武将牌上，若如此做，此回合结束时，你获得你武将牌上的所有牌。",
            "l_qingnang":"青囊",
            "l_qingnang_info":"出牌阶段，你可以弃置一张手牌令一名角色回复一点体力，每阶段限一次",
            "l_jijiu":"急救",
            "l_jijiu_info":"回合外，你可以将一张红色牌当[桃]使用",
            "l_kurou":"苦肉",
            "l_kurou_info":"出牌阶段，你可以流失一点体力并摸两张牌",
            "l_longyin":"龙吟",
            "l_longyin_info":"每当一名角色在其出牌阶段使用【杀】时，你可弃置一张牌令此【杀】不计入出牌阶段使用次数，若此【杀】为红色，你摸一张牌",
            "l_mashu":"马术",
            "l_mashu1":"马术",
            "l_mashu2":"马术",
            "l_mashu3":"马术",
            "l_mashu4":"马术",
            "l_mashu5":"马术",
            "l_mashu6":"马术",
            "l_mashu7":"马术",
            "l_mashu8":"马术",
            "l_mashu9":"马术",
            "l_mashu10":"马术",
            "l_mashu11":"马术",
            "l_mashu12":"马术",
            "l_mashu_info":"锁定技，你计算与其他角色的距离-1",
            "l_mashu1_info":"锁定技，你计算与其他角色的距离-1",
            "l_mashu2_info":"锁定技，你计算与其他角色的距离-1",
            "l_mashu3_info":"锁定技，你计算与其他角色的距离-1",
            "l_mashu4_info":"锁定技，你计算与其他角色的距离-1",
            "l_mashu5_info":"锁定技，你计算与其他角色的距离-1",
            "l_mashu6_info":"锁定技，你计算与其他角色的距离-1",
            "l_mashu7_info":"锁定技，你计算与其他角色的距离-1",
            "l_mashu8_info":"锁定技，你计算与其他角色的距离-1",
            "l_mashu9_info":"锁定技，你计算与其他角色的距离-1",
            "l_mashu10_info":"锁定技，你计算与其他角色的距离-1",
            "l_mashu11_info":"锁定技，你计算与其他角色的距离-1",
            "l_mashu12_info":"锁定技，你计算与其他角色的距离-1",
            "l_anguo":"安国",
            "l_anguo_info":"出牌阶段限一次，你可以选择一名其他角色，若其手牌数为全场最少，其摸一张牌；体力值为全场最低，回复1点体力；装备区内牌数为全场最少，随机使用一张装备牌。然后若该角色有未执行的效果且你满足条件，你执行之。",
            "l_fenxun":"奋迅",
            "l_fenxun2":"奋迅",
            "l_fenxun_info":"出牌阶段限一次，你可以弃置一张牌并选择一名其他角色，然后本回合你计算与其的距离视为1",
            "l_duanbing":"短兵",
            "l_duanbing_info":"你使用【杀】可以多选择一名距离为1的角色为目标",
            "l_kuanggu":"狂骨",
            "l_kuanggu_info":"锁定技，每当你造成一点伤害，若受伤害角色与你的距离不大于1，你回复一点体力",
            "xinl_kuanggu":"狂骨",
            "xinl_kuanggu_info":"当你对距离1以内的一名角色造成1点伤害后，你可以回复1点体力或摸一张牌",
            "l_wusheng":"武圣",
            "l_wusheng_info":"你可以将一张红色牌当[杀]使用",
            "l_qimou":"奇谋",
            "l_qimou_info":"限定技，出牌阶段，你可以失去任意点体力，然后直到回合结束，你的进攻距离+X，且你可以多使用X张【杀】（X为你失去的体力值）",
            "l_xianzhen":"陷阵",
            "l_xianzhen_info":"出牌阶段，你可以与一名角色拼点。若你赢，你获得以下技能直到回合结束：无视与该角色的距离；无视防具且可使用任意数量的【杀】。若你没赢，你不能使用【杀】直到回合结束。每回合限一次",
            "l_jinjiu":"禁酒",
            "l_jinjiu_info":"锁定技，你的【酒】均视为【杀】",
            "l_tianbian":"天辩",
            "l_tianbian_info":"你拼点时，可以改为用牌堆顶的一张牌进行拼点；当你拼点的牌亮出后，若此牌花色为红桃，则点数视为K",
            "l_yiji":"遗计",
            "l_yiji_info":"每当你受到一点伤害，可以观看牌堆顶的两张牌，并将其交给任意1~2名角色",
            "l_longdan":"龙胆",
            "l_longdan_info":"你可以将[杀]当[闪]，或[闪]当[杀]使用或打出",
            "l_chongzhen":"冲阵",
            "l_chongzhen1":"冲阵",
            "l_chongzhen2":"冲阵",
            "l_chongzhen_info":"每当你发动“龙胆”使用或打出一张手牌时，你可以立即获得对方的一张手牌。",
            "l_paoxiao":"咆哮",
            "l_paoxiao_info":"出牌阶段，你使用[杀]无数量限制",
            "l_lihun":"离魂",
            "l_lihun_info":"出牌阶段，你可以弃置一张牌并将你的武将牌翻面，若如此做，你指定一名男性角色，获得其所有手牌。出牌阶段结束时，你需为该角色每一点体力分配给其一张牌。每回合限一次。",
            "l_kongcheng":"空城",
            "l_kongcheng1":"空城",
            "l_kongcheng_info":"锁定技，当你没有手牌时，不能成为[杀]或[决斗]的目标",
            "ll_kongcheng":"空城",
            "ll_kongcheng1":"空城",
            "ll_kongcheng_info":"锁定技，当你没有手牌时，不能成为[杀]或[决斗]的目标",
            "l_jishe":"极奢",
            "l_jishe2":"极奢",
            "l_jishe3":"极奢",
            "l_jishe_info":"出牌阶段，若你的手牌上限大于0，你可以摸一张牌，然后你本回合的手牌上限-1。结束阶段开始时，若你没有手牌，则你可以横置至多X名角色的武将牌（X为你的体力值）",
            "rel_luoyi":"裸衣",
            "rel_luoyi2":"裸衣",
            "rel_luoyi_info":"你可以跳过摸牌阶段，然后展示牌堆顶的三张牌，获得其中的基本牌、武器牌和【决斗】，若如此做，直到你的下回合开始，你为伤害来源的【杀】或【决斗】造成的伤害+1。",
            "l_biyue":"闭月",
            "l_biyue_info":"结束阶段，你可以摸一张牌",
            "l_yongsi":"庸肆",
            "l_yongsi1":"庸肆",
            "l_yongsi2":"庸肆",
            "l_yongsi_info":"锁定技，摸牌阶段，你额外摸X张牌，X为场上现存势力数。弃牌阶段，你至少须弃置等同于场上现存势力数的牌（不足则全弃）。",
            "l_shangshi":"伤势",
            "l_shangshi_info":"锁定技，当你的手牌数小于X时，你立即将手牌补至X张（X为你已损失的体力值）。",
            "ll_shangshi":"伤势",
            "ll_shangshi_info":"锁定技，当你的手牌数小于X时，你立即将手牌补至X张（X为你已损失的体力值）。",
            "l_zaiqi":"再起",
            "l_zaiqi_info":"摸牌阶段，若你已受伤，你可以改为展示牌堆顶的X张牌，X为你已损失的体力值，其中每有一张♥牌，你回复1点体力，然后弃掉这些♥牌，将其余的牌收入手牌。",
            "l_benghuai":"崩坏",
            "l_benghuai_info":"结束阶段，若你的体力不是全场最少的(或之一)，你须减1点体力或体力上限。",
            "l_roulin":"肉林",
            "l_roulin_info":"你对女性角色、女性角色对你使用【杀】时，都需连续使用两张【闪】才能抵消。",
            "l_qice":"奇策",
            "l_qice_info":"出牌阶段，你可以将所有的手牌（至少一张）当做任意一张通常性锦囊牌使用，每阶段限一次。",
            "l_huituo":"恢拓",
            "l_huituo_info":"每当你受到伤害后，你可以令一名角色进行一次判定，若结果为红色，该角色回复1点体力；若结果为黑色，该角色摸X张牌（X为此次伤害的伤害数）",
            "l_juxiang":"巨象",
            "l_juxiang1":"巨象",
            "l_juxiang2":"巨象",
            "l_juxiang_info":"锁定技，【南蛮入侵】对你无效；其他角色使用的【南蛮入侵】于结算完毕进入弃牌堆时，你获得之。",
            "l_lieren":"烈刃",
            "l_lieren_info":"你每使用【杀】造成一次伤害，可与受到该伤害的角色拼点；若你赢，你获得对方的一张牌。",
            "ll_lieren":"烈刃",
            "ll_lieren_info":"你每使用【杀】造成一次伤害，可与受到该伤害的角色拼点；若你赢，你获得对方的一张牌。",
            "l_qixi":"奇袭",
            "l_qixi_info":"你可以将一张黑色牌当[过河拆桥]使用",
            "l_luoshen":"洛神",
            "l_luoshen_info":"准备阶段，你可以进行一定判定，若为黑色则可以继续判定，直到出现红色。然后你获得所有黑色的判定牌",
            "l_guicai":"鬼才",
            "l_guicai_info":"在任意角色的判定牌生效前，你可以打出一张手牌代替之",
            "ll_guicai":"鬼才",
            "ll_guicai_info":"在任意角色的判定牌生效前，你可以打出一张手牌代替之",
            "l_shibei":"矢北",
            "l_shibei_info":"锁定技，当你受到伤害后：若此伤害是你本回合第一次受到伤害，则你回复1点体力；若不是你本回合第一次受到伤害，则你失去1点体力。",
            "l_qingxian":"清弦",
            "l_qingxian_info":"当你受到伤害/回复体力后，你可以令伤害来源/一名其他角色执行一项：失去1点体力，随机使用一张装备牌；回复1点体力，弃置一张装备牌。若其以此法使用或弃置的牌为梅花，你回复1点体力",
            "l_juexiang":"绝响",
            "l_juexiang_info":"当你死亡后，你可以令一名角色随机获得“清弦残谱”其中一个技能，然后直到其下回合开始，其不能被选择为其他角色使用梅花牌的目标",
            "l_juexiang_ji":"激弦",
            "l_juexiang_ji_info":"当你受到伤害后，你可以令伤害来源失去1点体力，随机使用一张装备",
            "l_juexiang_lie":"烈弦",
            "l_juexiang_lie_info":"当你回复体力后，你可以令一名其他角色失去1点体力，随机使用一张装备",
            "l_juexiang_rou":"柔弦",
            "l_juexiang_rou_info":"当你受到伤害后，你可以令伤害来源回复1点体力，弃置一张装备",
            "l_juexiang_he":"和弦",
            "l_juexiang_he_info":"当你回复体力后，你可以令一名其他角色回复1点体力，弃置一张装备",
            "l_juexiang_club":"绝响",
            "l_juexiang_club_bg":"响",
            "l_juexiang_club_info":"直到下回合开始，不能被选择为其他角色使用梅花牌的目标",
            "l_jiushi":"酒诗",
            "l_jiushi1":"酒诗",
            "l_jiushi2":"酒诗",
            "l_jiushi3":"酒诗",
            "l_jiushi_info":"若你的武将牌正面朝上，你可以(在合理的时机)将你的武将牌翻面来视为使用一张【酒】;当你的武将牌背面朝上时你受到伤害，你可在伤害结算后将之翻回正面。",
            "l_jianxiong":"奸雄",
            "l_jianxiong_info":"你可以立即获得对你造成伤害的牌",
            "l_ganglie":"刚烈",
            "l_ganglie_info":"每当你受到一次伤害，可进行一次判定，若结果不为红桃，则伤害来源须弃置两张手牌或受到来自你的一点伤害",
            "l_leiji":"雷击",
            "l_leiji_info":"每当你使用或打出一张【闪】，可令任意一名角色进行一次判定，若结果为梅花，其受到一点雷电伤害，然后你回复一点体力；若结果为黑桃，其受到两点雷电伤害",
            "l_guidao":"鬼道",
            "l_guidao_info":"任意一名角色的判定生效前，你可以打出一张黑色牌替换之",
            "l_jiang":"激昂",
            "l_jiang_info":"每当你使用（指定目标后）或被使用（成为目标后）一张【决斗】或红色的【杀】时，你可以摸一张牌。",
            "l_yingzi":"英姿",
            "l_yingzi_info":"摸牌阶段，你可以额外摸一张牌",
            "l_tianyi":"天义",
            "l_tianyi_info":"出牌阶段，你可以和一名角色拼点，若你赢，你获得以下技能直到回合结束：攻击范围无限；可额外使用一张【杀】；使用【杀】时可额外指定一个目标，若你没赢，你不能使用【杀】直到回合结束。每回合限一次。",
            "l_gzsyinghun":"英魂",
            "l_gzsyinghun_info":"准备阶段开始时，若你已受伤，你可令一名其他角色执行一项：摸X张牌，然后弃置一张牌；或摸一张牌，然后弃置X张牌（X为你已损失的体力值）",
            "l_xiaoji":"枭姬",
            "l_xiaoji_info":"每当你失去一张装备牌，可以摸两张牌",
            "ll_xiaoji":"枭姬",
            "ll_xiaoji_info":"每当你失去一张装备牌，可以摸两张牌",
            "l_baobian":"豹变",
            "l_baobian_info":"锁定技，若你的体力值为3或更少，你视为拥有技能“挑衅”；若你的体力值为2或更少；你视为拥有技能“咆哮”；若你的体力值为1，你视为拥有技能“神速”。",
            "l_kaikang":"慷忾",
            "l_kaikang_info":"每当你距离1以内的角色成为杀的目标后，你可以摸一张牌。若如此做，你交给其一张牌并展示之，若该牌为装备牌，该角色可以使用此牌。",
            "l_tiandu":"天妒",
            "l_tiandu_info":"你可以立即获得你的判定牌",
            "l_benxi":"奔袭",
            "l_benxi_info":"锁定技，在你的回合内，你每使用一次牌后，你的进攻距离+1，直到回合结束；你的回合内，若你与所有角色的距离均为1，你无视其他角色的防具，且你使用的【杀】可额外指定一个目标",
            "l_fuqi":"伏骑",
            "l_fuqi_info":"锁定技，与你距离为1的其他角色不能使用或打出牌响应你使用的牌",
            "l_jiaozi":"娇恣",
            "l_jiaozi_info":"锁定技，若你的手牌数是全场唯一最多的，你造成或受到的伤害均+1",
            "l_wushuang":"无双",
            "l_wushuang1":"无双",
            "l_wushuang2":"无双",
            "l_wushuang_info":"锁定技，你使用的【杀】或【决斗】需要两张【闪】或【杀】响应",
            "l_keji":"克己",
            "l_keji_info":"若你在出牌阶段没有使用[杀]，则可跳过弃牌阶段",
            "l_yaowu":"耀武",
            "l_yaowu_info":"锁定技，当任意一名角色使用【杀】对你造成伤害时，若此【杀】为红色，该角色回复1点体力或摸一张牌，否则你摸一张牌。",
            "l_zhenlie":"贞烈",
            "l_zhenlie_info":"每当你成为其他角色的卡牌的目标时，你可以流失一点体力取消之，然后弃置对方一张牌",
            "ll_zhenlie":"贞烈",
            "ll_zhenlie_info":"每当你成为其他角色的卡牌的目标时，你可以流失一点体力取消之，然后弃置对方一张牌",
            "l_zhanjue":"战绝",
            "l_zhanjue_info":"出牌阶段，你可以将所有手牌当【决斗】使用，结算后你和以此法受到伤害的角色各摸一张牌。若你在同一阶段内以此法摸了两张或更多的牌，则此技能失效直到回合结束",
            "l_zhiyu":"智愚",
            "l_zhiyu_info":"每当你受到一次伤害后，你可以摸一张牌，然后展示所有手牌，若颜色均相同，伤害来源弃置一张手牌。",
            "l_xiangle":"享乐",
            "l_xiangle_info":"锁定技，当其他玩家使用【杀】指定你为目标时，需额外弃掉一张基本牌，否则该【杀】对你无效。",
            "l_tianming":"天命",
            "l_tianming_info":"当你成为【杀】的目标时，你可以弃置两张牌(不足则全弃，无牌则不弃)，然后摸两张牌;若此时全场体力值最多的角色仅有一名(且不是你)，该角色也可以如此做。",
            "l_duwu":"黩武",
            "l_duwu_info":"出牌阶段，你可以弃置X张牌对你攻击范围内的一名其他角色造成1点伤害(X为该角色的体力值)。若你以此法令该角色进入濒死状态，则濒死状态结算后你失去1点体力，且本回合不能再发动黩武。",
            "l_rende":"仁德",
            "l_rende_info":"出牌阶段，你可以将任意手牌送给其他角色，若送出的手牌不少于两张，你回复一点体力",
            "l_xuanfeng":"旋风",
            "l_xuanfeng_info":"当你失去装备区里的牌时，或于弃牌阶段弃置了手牌后，你可以依次弃置一至两名其他角色的共计两张牌。",
            "l_qiangzhi":"强识",
            "l_qiangzhi2":"强识",
            "l_qiangzhi_info":"出牌阶段开始时，你可以展示一名其他角色的一张手牌。若如此做，每当你于此阶段内使用与此牌类别相同的牌时，你可以摸一张牌。",
            "l_xiaoguo":"骁果",
            "l_xiaoguo_info":"其他角色的结束阶段开始时，你可以弃置一张基本牌，令该角色选择一项：1.弃置一张装备牌并令你摸一张牌；2.受到你对其造成的1点伤害。",
            "l_xinliegong":"烈弓",
            "l_xinliegong_info":"你使用【杀】可以选择你距离不大于此【杀】点数的角色为目标；当你使用【杀】指定一个目标后，你可以根据下列条件执行相应的效果：1.其手牌数小于等于你的手牌数，此【杀】不可被【闪】响应 2.其体力值大于等于你的体力值，此【杀】伤害+1",
            "l_zhanyi":"战意",
            "l_zhanyi_basic_sha":"战杀",
            "l_zhanyi_basic_jiu":"战酒",
            "l_zhanyi_basic_tao":"战桃",
            "l_zhanyi_info":"出牌阶段限一次，你可以弃置一张牌并失去1点体力，然后根据你弃置的牌获得以下效果直到回合结束：基本牌，你可以将一张基本牌当作杀、酒或桃使用；锦囊牌，摸两张牌且你使用的牌无距离限制；装备牌，你使用【杀】指定目标角色后，其弃置两张牌",
            "l_mingzhe":"明哲",
            "l_mingzhe_info":"你的回合外，每当你因使用、打出或弃置而失去一张红色牌时，你可以摸一张牌。",
            "l_shuimeng":"说盟",
            "l_shuimeng_info":"出牌阶段结束时，你可以与一名角色拼点，若你赢，视为你使用【无中生有】；若你没赢，视为其对你使用【过河拆桥】",
            "l_huomo":"活墨",
            "l_huomo_use":"活墨",
            "l_huomo_use_backup":"活墨",
            "l_huomo_info":"每当你需要使用一张本回合内未使用过的基本牌时，你可以将一张黑色非基本牌置于牌堆顶，然后视为你使用了此基本牌",
            "l_huomo_use_info":"每当你需要使用一张本回合内未使用过的基本牌时，你可以将一张黑色非基本牌置于牌堆顶，然后视为你使用了此基本牌",
            "l_zuoding":"佐定",
            "l_zuoding_info":"每当一名其他角色于其回合内使用♠牌指定目标后，若本回合没有角色受到过伤害，则你可以令其中一名目标角色摸一张牌",
            "l_bizhuan":"辟撰",
            "l_bizhuan_info":"当你使用黑桃牌后，或你成为其他角色使用黑桃牌的目标后，你可以将牌堆顶的一张牌置于武将牌上，称为“书”；你至多拥有四张“书”，你每有一张“书” ，手牌上限+1",
            "l_tongbo":"通博",
            "l_tongbo_info":"摸牌阶段摸牌后，你可以用任意张牌替换等量的“书”，然后若你的“书”包含四种花色，你将所有“书”交给任意名其他角色",
            "l_lirang":"礼让",
            "l_lirang_info":"当你的牌因弃置而置入弃牌堆时，你可以将其中的任意张牌交给其他角色",
            "l_xiehui":"黠慧",
            "l_xiehui2":"黠慧",
            "l_xiehui_info":"锁定技，你的黑色牌不占用手牌上限；其他角色获得你的黑色牌时，其不能使用、打出、弃置这些牌直到其体力值减少为止",
            "l_yuce":"御策",
            "l_yuce_info":"每当你受到一次伤害，可以弃置一张手牌，并令伤害来源选择一项：弃置一张相同类型的手牌并令你摸一张牌，或令你回复一点体力",
            "l_polu":"破橹",
            "l_polu_info":"锁定技，回合开始时，若你的装备区里没有【霹雳车】，你使用之；当你受到1点伤害后，若你的装备区里没有【霹雳车】，你摸一张牌",
            "ly_piliche":"霹雳车",
            "ly_piliche_info":"当你对其他角色造成伤害后，若造成伤害牌不为延时锦囊牌，你可以弃置其装备区里的防具牌与+1坐骑牌；当你失去此装备时，销毁之",
            "l_shuangren":"双刃",
            "l_shuangren_info":"出牌阶段开始时，你可以与一名角色拼点。若你赢，你视为任意一名角色使用一张【杀】（此【杀】不计入限制的次数）；若你没赢，你结束出牌阶段",
            "l_fulu":"符箓",
            "l_fulu_info":"你可以将【杀】当雷【杀】使用。",
            "l_fuji":"助祭",
            "l_fuji_info":"当一名角色造成雷电伤害时，你可以令其进行一次判定，若结果为黑色，此伤害+1；若结果为红色，该角色获得此牌。",
            "l_luanzhan":"乱战",
            "l_luanzhan_info":"你使用【杀】或黑色普通锦囊牌可以额外选择X名角色为目标；当你使用【杀】或黑色普通锦囊牌指定目标后，若此牌的目标角色数小于X，则X减至0（X为你于本局游戏内造成过伤害的次数）",
            "l_sijian":"死谏",
            "l_sijian_info":"当你失去最后的手牌时，你可以弃置一名其他角色的一张牌",
            "l_liangzhu":"良助",
            "l_liangzhu_info":"当一名角色于其出牌阶段内回复体力时，你可以选择一项：1、摸一张牌；2、令该角色摸两张牌 ",
            "l_bazhen":"八卦",
            "l_bazhen_info":"当你没装备防具时，始终视为你装备着【八卦阵】",
            "bagua_bg":"卦",
            "bagua_skill":"八卦阵",
            "bagua_skill_info":"每当你需要使用或打出一张【闪】时，你可以进行一次判定，若判定结果为红色，视为你使用或打出了一张【闪】。",
            "l_meibu":"魅步",
            "l_meibu_info":"一名其他角色的出牌阶段开始时，若你不在其攻击范围内，你可以令该角色的锦囊牌均视为【杀】，直到该角色以此法使用了一张【杀】或回合结束。若如此做，则直到回合结束，视为你在其攻击范围内",
            "l_zhidao":"雉盗",
            "l_zhidao_info":"锁定技，当你于你的回合内第一次对区域里有牌的其他角色造成伤害后，你获得其手牌、装备区和判定区里的各一张牌，然后直到回合结束，其他角色不能被选择为你使用牌的目标",
            "l_faen":"法恩",
            "l_faen_info":"当一名角色翻至正面或横置后，你可以令其摸一张牌",
            gailianhuan:"连环",
            "gailianhuan1":"连环",
            "gailianhuan2":"连铸",
            "gailianhuan_info":"出牌阶段，你可以将你任意一张黑色手牌当【铁索连环】使用或重铸。",
            "gai_huansha":"环杀",
            "gai_huansha_info":"横置你的武将牌，视为打出一张火杀",
            "gai_huanshan":"环闪",
            "gai_huanshan_info":"重置你的武将牌，视为打出一张闪",
            "l_fuhun":"父魂",
            "l_fuhun2":"父魂2",
            "l_fuhun3":"父魂3",
            "l_fuhun_info":"你可以将两张手牌当杀使用或打出；出牌阶段，若你以此法使用的杀造成了伤害，你获得技能“武圣”、“咆哮”直到回合结束。",
            "l_boss_shenyi":"神裔",
            "l_boss_shenyi_info":"锁定技，你的武将牌始终正面向上，你的判定区内的牌效果反转",
            "gailianhuan1_info":"undefined",
            "l_gongao":"功獒",
            "l_gongao_info":"锁定技，每当一名角色死亡后，你增加一点体力上限，回复一点体力。",
            "l_chengxiang":"称象",
            "l_chengxiang_info":"每当你受到一次伤害后，你可以亮出牌堆顶的四张牌。然后获得其中任意数量点数之和不大于13的牌",
            "l_wangxi":"忘隙",
            "l_wangxi_info":"每当你对其他角色造成1点伤害后，或受到其他角色造成的1点伤害后，你可与该角色各摸一张牌。",
            "l_xinjushou":"据守",
            "l_xinjushou_info":"结束阶段，你可以翻面并摸四张牌，然后弃置一张手牌，若以此法弃置的是装备牌，则你改为使用之",
            "ll_xinjushou":"据守",
            "ll_xinjushou_info":"结束阶段，你可以翻面并摸四张牌，然后弃置一张手牌，若以此法弃置的是装备牌，则你改为使用之",
            "l_xinjiewei":"解围",
            "l_xinjiewei_info":"你可以将装备区里的牌当【无懈可击】使用；当你从背面翻至正面时，你可以弃置一张牌，然后移动场上的一张牌",
            "ll_xinjiewei":"解围",
            "ll_xinjiewei_info":"你可以将装备区里的牌当【无懈可击】使用；当你从背面翻至正面时，你可以弃置一张牌，然后移动场上的一张牌",
            xiefeng:"携锋",
            "xiefeng_info":"锁定技，出牌阶段开始时，若你装备区没有武器牌，你随机装备一张武器牌。",
            "jiqiao1":"机巧",
            "jiqiao1_info":"出牌阶段开始时，你可以弃置任意张装备牌，然后亮出牌堆顶五倍数量的牌，你获得其中的锦囊牌",
            "l_kongsheng":"箜声",
            "l_kongsheng1":"箜声",
            "l_kongsheng_info":"准备阶段，你可以将任意张牌置于你的武将牌上；结束阶段，你使用武将牌上的装备牌，并获得武将牌上的其他牌",
            "l_shenduan":"慎断",
            "l_shenduan_info":"当你的黑色基本牌因弃置而进入弃牌堆时，你可以将之视为 【兵粮寸断】并置于一名其他角色的判定区里",
            "l_jiezi":"截辎",
            "l_jiezi_info":"锁定技，一名其他角色跳过摸牌阶段后，你摸一张牌",
            "l_jigong":"急攻",
            "l_jigong2":"急攻",
            "l_jigong_info":"出牌阶段开始时，你可以摸两张牌。若如此做，此回合你的手牌上限改为X(X为你此阶段造成的伤害数)",
            "l_qingguo":"倾国",
            "l_qingguo_info":"你可以将一张黑色手牌当[闪]使用或打出",
            "l_fangzhu":"放逐",
            "l_fangzhu_info":"你每受到一次伤害，可令除你以外的任一角色补X张牌，X为你已损失的体力值，然后该角色将其武将牌翻面。",
            "l_qiaobian":"巧变",
            "l_qiaobian1":"巧变·判定",
            "l_qiaobian2":"巧变·摸牌",
            "l_qiaobian3":"巧变·出牌",
            "l_qiaobian4":"巧变·弃牌",
            "l_qiaobian_info":"你可以弃一张手牌来跳过自己的一个阶段(回合开始和结束阶段除外);若以此法跳过摸牌阶段,你可以从其他至多两名角色手里各抽取一张牌;若以此法跳过出牌阶段,你可以将场上的一张牌移动到另一个合理的位置。",
            gaikunfen:"困奋",
            "gaikunfen_info":"锁定技，结束阶段开始时，你失去１点体力，然后摸两张牌",
            "l_fengliang":"逢亮",
            "l_fengliang_info":"觉醒技，当你进入濒死状态时，你减１点体力上限并将体力值回复至２点，然后获得技能挑衅，将困奋改为非锁定技",
            "l_yuhua":"羽化",
            "l_yuhua_info":"锁定技，弃牌阶段内，你的非基本牌不计入手牌数，且你不能弃置你的非基本牌",
            "l_qirang":"祈禳",
            "l_qirang_info":"当有装备牌进入你的装备区时，你可以获得牌堆中的一张锦囊牌",
            "l_tuntian":"屯田",
            "l_tuntian_bg":"田",
            "l_tuntian_info":"每次当你于回合外失去牌时，可以进行一次判定，将非♥结果的判定牌置于你的武将牌上，称为“田”，每有一张田，你的进攻距离+1.",
            "l_zaoxian":"凿险",
            "l_zaoxian_info":"觉醒技，准备阶段，若田的数量达到3张或更多，你须减1点体力上限，并永久获得技能“急袭”",
            "l_jixi":"急袭",
            "l_jixi_info":"出牌阶段，你可以把任意一张田当【顺手牵羊】使用",
            "l_mizhao":"密诏",
            "l_mizhao_info":"出牌阶段，你可以将所有手牌(至少一张)交给一名其他角色。若如此做，你令该角色与你指定的另一名有手牌的角色拼点。视为拼点赢的角色对没赢的角色使用一张【杀】。每阶段限一次。",
            "l_hongde":"弘德",
            "l_hongde_info":"当你一次获得或失去至少两张牌后，你可以令一名其他角色摸一张牌",
            "l_shenxing":"慎行",
            "l_shenxing_info":"出牌阶段，你可以弃置两张牌，然后摸一张牌。",
            "l_pingkou":"平寇",
            "l_pingkou_info":"回合结束时，你可以对至多X名其他角色各造成1点伤害（X为你本回合跳过的阶段数）。",
            "l_zhenwei":"镇卫",
            "l_zhenwei2":"镇卫",
            "l_zhenwei_info":"当一名其他角色成为【杀】或黑色锦囊牌的目标时（使用者不是你），若该角色的体力值小于你且此牌的目标角色数为1，你可以弃置一张牌。若如此做，你选择一项：1、摸一张牌，然后将此【杀】或黑色锦囊牌转移给你；2、令此【杀】或黑色锦囊牌无效，然后将此【杀】或黑色锦囊牌置于使用者的武将牌旁，若如此做，当前回合结束后，使用者获得使用者武将牌旁的这些牌",
            "l_xinshensu":"神速",
            "shensu1":"神速",
            "shensu2":"神速",
            "shensu4":"神速",
            "l_xinshensu_info":"你可以选择一至三项：1. 跳过判定阶段和摸牌阶段；2. 跳过出牌阶段并弃置一张装备牌；3. 跳过弃牌阶段并将你的武将牌翻面。你每选择一项，视为你对一名其他角色使用一张【杀】",
            "l_jianzheng":"谏征",
            "l_jianzheng_info":"当一名其他角色使用【杀】指定目标时，若你在其攻击范围内且你不是目标，则你可以将一张手牌置于牌堆顶，取消所有目标，然后若此【杀】不为黑色，你成为目标",
            "l_cunmu":"寸目",
            "l_cunmu_info":"锁定技，当你摸牌时，改为从牌堆底摸牌",
            "l_shouxi":"守玺",
            "l_shouxi_info":"当你成为【杀】的目标后，你可声明一种未以此法声明过的基本牌或锦囊牌的牌名。若使用者弃置一张你声明的牌，其获得你的一张牌；若否，则此【杀】对你无效",
            "l_danshou":"胆守",
            "l_danshou_info":"出牌阶段，你可以选择你攻击范围内的一名其他角色，然后弃置X张牌（X为此前你于此阶段你发动“胆守”的次数+1）。若X：为1，你弃置该角色的一张牌；为2，令该角色交给你一张牌；为3，你对该角色造成1点伤害；不小于4，你与该角色各摸两张牌。",
            "l_haoshi":"好施",
            "l_haoshi_info":"摸牌阶段，你可以额外摸两张牌，若此时你的手牌数多于五张，你必须将一半(向下取整)的手牌交给场上除你外手牌数最少的一名角色。",
            "l_beige":"悲歌",
            "l_beige_info":"一名角色每受到【杀】造成的一次伤害，你可以弃一张牌，并令其进行一次判定，判定结果为：♥该角色回复1点体力；♦︎该角色摸两张牌；♣伤害来源弃两张牌；♠伤害来源将其武将牌翻面",
            "l_jieming":"节命",
            "l_jieming_info":"你每受到1点伤害，可令任意一名角色将手牌补至其体力上限的张数(不能超过五张)。",
            "l_tiaoxin":"挑衅",
            "l_tiaoxin_info":"出牌阶段，你可以指定一名使用【杀】能攻击到你的角色，该角色需对你使用一张【杀】，若该角色不如此做，你弃掉他的一张牌，每回合限一次。",
            "l_qianxi1":"潜袭",
            "l_qianxi2":"潜袭",
            "l_qianxi2_bg":"袭",
            "l_qianxi1_info":"准备阶段，你可以摸一张牌，并弃置一张牌，然后令一名距离为1的角色不能使用或打出与你弃置的牌颜色相同的手牌，直到回合结束。",
            "l_tieqi":"铁骑",
            "l_tieqi_info":"当你使用【杀】指定一名角色为目标后，你可以进行一次判定并令该角色的非锁定技失效直到回合结束，除非该角色弃置一张与判定结果花色相同的牌，否则不能使用【闪】抵消此【杀】。",
            "l_xiansi":"陷嗣",
            "l_xiansi_bg":"逆",
            "l_xiansi2":"陷嗣",
            "l_xiansi_info":"准备阶段开始时，你可以将一至两名角色的各一张牌置于你的武将牌上，称为“逆”；每当一名角色需要对你使用杀时，该角色可以移去两张“逆”，视为对你使用一张杀。",
            "l_qieting1":"窃听",
            "l_qieting1_info":"一名其他角色的结束阶段，若其未于此回合内使用过指定另一名角色为目标的牌，你可以选择一项：将其装备区里的一张牌移动至你装备区里的相应位置（可替换原装备）；或摸一张牌。",
            "l_shenxian":"甚贤",
            "l_shenxian_info":"你的回合外，每当有其他角色因弃置而失去牌时，若其中有基本牌，你可以摸一张牌。",
            "ll_shenxian":"甚贤",
            "ll_shenxian_info":"你的回合外，每当有其他角色因弃置而失去牌时，若其中有基本牌，你可以摸一张牌。",
            "l_shuangxiong":"双雄",
            "l_shuangxiong2":"双雄",
            "l_shuangxiong_info":"摸牌阶段，你可选择改为进行一次判定：你获得此判定牌，且于此回合的出牌阶段，你可以将任意一张与此判定牌不同颜色的手牌当【决斗】使用。",
            "l_xinjuece1":"绝策",
            "l_xinjuece1_info":"结束阶段开始时，你可以对没有手牌的一名角色造成1点伤害",
            "l_xinmieji":"灭计",
            "l_xinmieji_info":"出牌阶段限一次，你可以展示一张黑色锦囊牌并将之置于牌堆顶，然后令有手牌的一名其他角色选择一项：弃置一张锦囊牌；或弃置两张非锦囊牌",
            "l_fenwei":"奋威",
            "l_fenwei_info":"限定技，当一名角色使用的锦囊牌指定了至少两名角色为目标时，你可以令此牌对其中任意名角色无效。",
            "l_qizhou":"绮胄",
            "l_qizhou_info":"锁定技，你根据装备区里牌的花色数获得以下技能：1种或以上-马术；2种或以上-英姿；3种或以上-短兵；4种-奋威",
            "l_dujin":"独进",
            "l_dujin_info":"摸牌阶段，你可以额外摸X+1张牌（X为你装备区里牌数的一半且向下取整）",
            "ll_dujin":"独进",
            "ll_dujin_info":"摸牌阶段，你可以额外摸X+1张牌（X为你装备区里牌数的一半且向下取整）",
            "l_zhichi":"智迟",
            "l_zhichi2":"智迟",
            "l_zhichi_info":"锁定技，你的回合外，你每受到一次伤害，任何【杀】或普通锦囊牌均对你无效，直到该回合结束。",
            "l_zhichi2_info":"智迟已发动",
            "l_xiashu":"下书",
            "l_xiashu_info":"出牌阶段开始时，你可以将所有手牌交给一名其他角色，然后该角色亮出任意数量的手牌（至少一张），令你选择一项：1.获得其亮出的手牌；2.获得其未亮出的手牌",
            "l_kuanshi":"宽释",
            "l_kuanshi2":"宽释",
            "l_kuanshi_info":"结束阶段，你可以选择一名角色。直到你的下回合开始，该角色下一次受到超过1点的伤害时，防止此伤害，然后你跳过下个回合的摸牌阶段",
            "l_ganlu":"甘露",
            "l_ganlu_info":"出牌阶段，你可以选择两名角色，交换他们装备区里的所有牌。以此法交换的装备数差不能超过X(X为你已损失体力值)。每回合限一次。",
            "l_duanxie1":"断绁",
            "l_duanxie1_info":"出牌阶段限一次，你可以令一名其他角色横置武将牌，若如此做，你横置武将牌。",
            "l_fenmin":"奋命",
            "l_fenmin_info":"结束阶段开始时，若你处于连环状态，你可以弃置处于连环状态的每名角色的一张牌。",
            "l_taiji1":"太极",
            "l_taiji1_info":"每当你使用或打出一张闪，你可以使用一张杀",
            "l_jiudu1":"鸠毒",
            "l_jiudu1_info":"其他角色的出牌阶段开始时，你可以弃置一张手牌，视为该角色使用一张【酒】，然后你对其造成一点伤害。",
            "l_qiluan":"戚乱",
            "l_qiluan2":"戚乱",
            "l_qiluan3":"戚乱",
            "l_qiluan_info":"每当你杀死一名角色后，可以在此回合结束时摸四张牌。",
            "l_qiluan_info_guozhan":"当你杀死一名角色后，你可于此回合结束后摸三张牌",
            "l_zhensha1":"鸩杀",
            "l_zhensha1_info":"当场上有角色进入濒死状态时，你可以弃置一张酒或两张黑色手牌，则该角色立即死亡。",
            "l_tuqiang1":"图强",
            "l_tuqiang1_info":"每当你使用或打出一张闪，你可以摸一张牌",
            "l_fenghuo1":"烽火",
            "l_fenghuo1_info":"你可以将一张装备区内的牌当作南蛮入侵使用",
            "l_zhuhai1":"诛害",
            "l_zhuhai1_info":"一名其他角色的结束阶段开始时，若该角色本回合造成过伤害，你可以对其使用一张【杀】。",
            "l_moukui":"谋溃",
            "l_moukui2":"谋溃",
            "l_moukui_info":"当你使用【杀】指定一名角色为目标后，你可以选择一项：摸一张牌，或弃置其一张牌。若如此做，此【杀】被【闪】抵消时，该角色弃置你的一张牌。 ",
            "l_qiangwu":"枪舞",
            "l_qiangwu_info":"出牌阶段，你可以进行一次判定。若如此做，则直到回合结束，你使用点数小于判定牌的 【杀】时不受距离限制，且你使用点数大于判定牌的【杀】时不计入出牌阶段的使用次数。",
            "l_weikui":"伪溃",
            "l_weikui2":"伪溃",
            "l_weikui_info":"出牌阶段限一次，你可以失去1点体力并选择一名有手牌的其他角色，你观看其手牌：若其手牌中有【闪】，则视为你对其使用【杀】,且本回合你计算与其的距离视为1；若其手牌中没有【闪】，你弃置其中一张牌",
            "l_qianju1":"千驹",
            "l_qianju1_info":"锁定技，若你已受伤，你的进攻距离+X（X为你已损失体力值）",
            "l_quji1":"去疾",
            "l_quji1_info":"出牌阶段限一次，你可以弃置X张牌（X为你已损失的体力值），然后令至多X名已受伤的角色各回复1点体力。若你以此法弃置的牌中有黑色牌，你失去一点体力。",
            "l_ranshang":"燃殇",
            "l_ranshang2":"燃殇",
            "l_ranshang_info":"锁定技，当你受到1点火焰伤害后，你获得1枚“燃”标记；结束阶段开始时，你失去X点体力（X为“燃”标记的数量）",
            "l_xueji1":"血祭",
            "l_xueji1_info":"出牌阶段限一次，你可以弃置一张红色牌，然后选择至多X名角色，横置这些角色并对其中一名角色造成1点火焰伤害。（X为你已损失的体力值数且至少为1）",
            "l_yingjian":"影箭",
            "l_yingjian_info":"准备阶段，你可以视为使用一张无视距离的杀",
            "l_guzheng1":"固政",
            "l_guzheng1_info":"其他角色的弃牌阶段结束时，你可将其弃置的一张牌返回其手牌，然后获得其弃置的其它牌",
            "l_guose1":"国色",
            "l_guose1_info":"你可以将任意一张红色手牌当[乐不思蜀]使用",
            "l_zishu":"自书",
            "l_zishu_info":"锁定技，你的回合外，你获得的牌均会在当前回合结束后置入弃牌堆；你的回合内，当你不因此技能效果获得牌时，额外摸一张牌。",
            "l_luanji":"乱击",
            "l_luanji_info":"出牌阶段，你可以将任意两张相同花色的手牌当【万箭齐发】使用。",
            "l_weimu1":"帷幕",
            "l_weimu1_info":"你不能成为黑色锦囊的目标。",
            "l_yizhong1":"毅重",
            "l_yizhong1_info":"锁定技，当你没有防具时，黑色的杀对你无效",
            "l_ol_shenfen":"神愤",
            "l_ol_shenfen_info":"出牌阶段，你可以弃6枚“暴怒”标记并选择所有其他角色，对这些角色各造成1点伤害，然后这些角色先各弃置其装备区里的牌，再各弃置四张手牌，最后你将你的武将牌翻面。每阶段限一次。",
            shenfen:"神愤",
            "shenfen_info":"限定技，出牌阶段，你可以弃置6枚暴怒标记，对场上所有其他角色造成一点伤害，然后令其弃置4张牌",
            "l_baonu":"狂暴",
            "l_baonu_bg":"暴",
            "l_baonu_info":"锁定技，游戏开始时，你获得两枚暴怒标记，每当你造成或受到一点伤害，你获得一枚暴怒标记",
            Lguanxing:"观星",
            "Lguanxing_info":"准备阶段，你可以观看牌堆顶的x张牌，并将其以任意顺序置于牌堆项或牌堆底(x为存活角色个数且不超过5)",
            },//翻译
			};
if(lib.device||lib.node){
				for(var i in yijie.character){yijie.character[i][4].push('ext:异界四国/'+i+'.jpg');}
			}else{
				for(var i in yijie.character){yijie.character[i][4].push('db:extension-异界四国:'+i+'.jpg');}
			}
			return yijie;
		});
		lib.config.all.characters.push('yijie');
		if(!lib.config.characters.contains('yijie')) lib.config.characters.remove('yijie');
		lib.translate['yijie_character_config']='异界四国';
		
		//(以上从第22行到第74行为一个扩展小包的框架，保留了例子，将整个框架复制到此行下面就可另创单独新扩展小包）
		
	// ---------------------------------------卡牌------------------------------------------//	
	
		game.import('card',function(){
var yijie_equip={
name:'yijie_equip',
connect:true,		
              	card:{	//卡牌
		         					
                },//卡牌
				
				
				skill:{	//卡牌的技能
							
				},//卡牌的技能
				
				
				
                translate:{
    
				},//翻译
				list:[
 
                     ]//卡牌的花色点数及数量					
			};
			return yijie_equip;
			});
		lib.translate['yijie_equip_card_config']='异界四国';
lib.config.all.cards.push('yijie_equip');
if(!lib.config.cards.contains('yijie_equip')) lib.config.cards.remove('yijie_equip');
};

},help:{},config:{
								
},package:{
	character:{
        character:{
            jishouhuo:["male","shen",4,["l_shibei","l_qingxian","l_zaiqi"],["des:沮授+嵇康+孟获"]],
            liuke:["male","shu",3,["l_xiangle","l_tianming","l_duwu"],["zhu","des:刘禅+刘协+诸葛恪"]],
            liuyou:["male","shu",4,["l_zhanjue","l_zhiyu"],["des:刘谌+荀攸"]],
            gaomi:["male","qun",4,["l_xianzhen","l_jinjiu","l_tianbian"],["des:高顺+泰宓"]],
            luyu:["male","qun",4,["l_wushuang","ll_lieren","l_tianbian"],["des:吕布+关羽"]],
            xuchan:["male","wei",4,["rel_luoyi","l_biyue"],["des:界许褚+貂蝉"]],
            maping:["male","shu",4,["l_longyin","l_tieqi"],["des:马超+关平"]],
            huayi:["male","qun",6,["l_yaowu","ll_zhenlie"],["des:华雄+王异"]],
            liuliang:["male","shu",4,["l_rende","l_kongcheng"],["zhu","des:刘备+诸葛亮"]],
            jukang:["male","qun",3,["l_shibei","l_qingxian"],["des:沮授+嵇康"]],
            "lingquan1":["male","wu",4,["l_xuanfeng","xinzhiheng"],["des:凌统+孙权"]],
            xiahoujia:["male","wei",4,["l_ganglie","l_tiandu"],["des:夏侯淳+郭嘉"]],
            zhuhun:["male","shu",3,["l_kongcheng","l_jishe"],["des:诸葛亮+岑昏"]],
            caohouchun:["male","wei",4,["l_jianxiong","l_ganglie"],["zhu","des:曹操+夏侯淳"]],
            lvyu:["male","wu",4,["l_keji","l_yingzi"],["des:吕蒙+周瑜"]],
            zhangzhi:["male","qun",3,["l_leiji","l_guidao","weijing"],["des:张角+鲁芝"]],
            huangfeng:["male","shu",4,["l_xinliegong","l_fenxun","l_duanbing"],["des:黄忠+丁奉"]],
            diangai:["male","wei",4,["l_qiangxi","l_zhaxiang"],["des:典韦+界黄盖"]],
            taishimi:["male","wu",4,["l_tianyi","l_tianbian"],["des:太史慈+泰宓"]],
            zhumi:["female","shu",4,["l_juxiang","l_lieren","l_tianbian"],["des:祝融+秦宓"]],
            mengkang:["male","qun",5,["l_zaiqi","l_qingxian"],["des:孟获+嵇康"]],
            huangzhi:["male","wu",4,["l_kurou","l_anguo"],["des:黄盖+朱志"]],
            sunhua:["male","wu",4,["l_gzsyinghun","l_shangshi"],["des:孙坚+张春华"]],
            sunyuci:["male","wu",4,["l_jiang","l_yingzi","l_tianyi","l_gzsyinghun"],["zhu","des:孙策+周瑜+太史慈"]],
            ganxun:["male","wu",3,["l_qixi","rel_qianxun","l_lianying"],["des:甘宁+陆逊"]],
            donghuo:["male","qun",8,["l_benghuai","l_zaiqi"],["zhu","des:董卓+孟获"]],
            sunren:["female","wu",3,["l_xiaoji","ll_xinjushou","ll_xinjiewei"],["des:孙尚香+曹仁"]],
            wuyi:["male","shu",4,["l_benxi","l_fuqi","l_jiaozi"],["des:吴懿+麹义"]],
            xunrui:["male","wei",3,["l_qice","l_huituo"],["des:荀攸+曹叡"]],
            xiahouang:["male","wei",4,["l_baobian","l_kaikang"],["des:夏侯霸+曹昂"]],
            yuanhua:["male","qun",4,["l_yongsi","l_shangshi"],["des:袁术+张春华"]],
            zhenyi:["female","wei",3,["l_luoshen","ll_guicai"],["des:甄姬+司马懿"]],
            guotuo:["male","wei",3,["l_yiji","l_jijiu"],["des:郭嘉+华佗"]],
            guansong:["male","shu",4,["l_qiangzhi","l_longyin"],["des:关平+张松"]],
            weiyu:["male","shu",4,["xinl_kuanggu","l_wusheng","l_qimou"],["des:魏延+关羽"]],
            zhaofei:["male","qun",4,["l_longdan","l_chongzhen","l_paoxiao"],["des:赵云+张飞"]],
            leren:["male","wei",4,["l_xiaoguo","l_xinjushou"],["des:乐进+曹仁"]],
            caozhiren:["male","wei",3,["l_jiushi","l_xinjushou","l_xinjiewei"],["des:曹植+曹仁"]],
            diaoren:["female","qun",3,["l_lihun","ll_xinjushou"],["des:sp貂蝉+曹仁"]],
            zhugai:["male","wu",4,["l_zhanyi","l_zhaxiang"],["des:朱灵+界黄盖"]],
            wanghua:["female","wei",3,["l_zhenlie","ll_shangshi"],["des:王异+张春华"]],
            zhumaxun:["male","wu",3,["l_guicai","l_mingzhe","l_lianying"],["des:诸葛瑾+司马懿+陆逊"]],
            "zhongyong1":["male","qun",3,["l_huomo","l_bizhuan","l_tongbo"],["des:钟繇+蔡邕"]],
            kongbaiquan:["male","wu",3,["xinzhiheng","l_xiehui","l_lirang"],["zhu","des:孔融+董白+孙权"]],
            manyou:["male","wei",4,["l_yuce","l_zhiyu"],["des:满宠+荀攸"]],
            jianganling:["male","shu",3,["l_shuimeng","l_tianbian","l_shuangren"],["des:简雍+孙乾+纪灵"]],
            zhangdun:["male","qun",4,["l_fulu","l_fuji","l_luanzhan"],["des:张梁+蹋顿"]],
            tianxun:["male","qun",3,["l_sijian","l_lianying"],["des:田丰+陆逊"]],
            suntuo:["male","wu",3,["l_liangzhu","l_qingnang","l_jijiu"],["des:孙尚香+华佗"]],
            majia:["male","shu",4,["l_tieqi","l_tiandu"],["des:马超+郭嘉"]],
            zhuchaojia:["male","shu",4,["l_tiandu","l_bazhen","l_tieqi"],["des:诸葛亮+马超+郭嘉"]],
            zhuhunyu:["female","shen",4,["ll_kongcheng","l_jishe","l_meibu"],["des:诸葛亮+岑昏+孙鲁育"]],
            "xunxun1":["male","wei",3,["l_qice","l_lianying"],["des:荀彧+陆逊"]],
            yanxiang:["female","wu",3,["l_zhidao","l_xiaoji"],["des:严白虎+孙尚香"]],
            zhugechong:["male","qun",2,["l_chengxiang","l_gongao"],["des:诸葛诞+曹冲"]],
            liyanwojuqnidayede:["male","wei",3,["l_wangxi","xinl_kuanggu"],["des:李典+魏延"]],
            chenjiantong:["male","wei",4,["l_faen","gai_huansha","gai_huanshan","gailianhuan"],["des:陈群+马俊坚+庞统"]],
            liushangji:["male","wu",3,["l_polu","l_kongsheng","ll_xiaoji"],["des:刘晔+孙尚香+周姬"]],
            zhangchao:["male","shu",4,["l_fuhun","l_tieqi","l_mashu"],["des:张兴张苞+马超"]],
            huangenyue:["female","wu",3,["jiqiao1","xiefeng","xinjizhi"],["des:sp黄月英+夏侯恩+黄月英"]],
            xuhaojixie:["male","wei",4,["l_shenduan","l_jiezi","l_jigong","l_tianming"],["des:徐晃+韩浩史涣+郭图逢纪+刘协"]],
            zhenbai:["female","wei",3,["l_luoshen","l_qingguo","l_xiehui"],["des:甄姬+董白"]],
            caojia:["male","wei",4,["l_xinjushou","l_yiji","l_xinjiewei"],["des:曹仁+郭嘉"]],
            zhipi:["male","wei",2,["l_fangzhu","l_jiushi"],["des:曹丕+曹植"]],
            zhangwei:["male","wei",4,["l_qiaobian","gaikunfen","l_fengliang"],["des:张郃+姜维"]],
            zhugeji:["female","shu",3,["l_yuhua","l_qirang","l_kongsheng"],["des:诸葛果+周姬"]],
            dengxie:["male","wei",4,["l_tuntian","l_zaoxian","l_tianming"],["zhu","des:邓艾+刘协"]],
            l_liufeng:["male","qun",3,["l_mizhao","l_tianming","l_sijian"],["des:刘协+田丰"]],
            buyong:["male","wu",3,["l_hongde","l_shenxing"],["des:步骘+顾雍"]],
            xiahengfeng:["male","shen",4,["l_xinshensu","l_duanbing","l_pingkou"],["des:夏侯渊+朱恒+丁奉"]],
            wenliang:["male","qun",4,["l_zhenwei","l_bazhen"],["des:文聘+诸葛亮"]],
            zhangmiang:["male","shen",3,["l_guidao","l_leiji","l_jianzheng","l_kaikang"],["des:张角+秦宓+曹昂"]],
            zhuyoujie:["male","shu",4,["Lguanxing","l_cunmu","l_shouxi"],["des:诸葛亮+许攸+曹节"]],
            luran:["male","wu",3,["l_haoshi","l_danshou"],["des:鲁肃+朱然"]],
            caiwenyu:["female","wei",3,["l_beige","l_jieming"],["des:蔡文姬+荀彧"]],
            madaichao:["male","shu",4,["l_qianxi1","l_mashu","l_tieqi"],["des:马岱+马超"]],
            liugechan:["male","shu",3,["l_xiansi","l_bazhen","l_xiangle"],["des:刘封+诸葛亮+刘禅"]],
            caixing:["female","qun",3,["l_qieting1","l_shenxian"],["des:蔡夫人+张星彩"]],
            guancai:["male","shu",4,["l_wusheng","ll_shenxian","l_mashu"],["des:关羽+张星彩"]],
            yandiaowenchan:["male","shu",4,["l_shuangxiong","l_lihun"],["des:颜良文丑+貂蝉"]],
            caoru:["male","wei",3,["l_xinjuece1","l_xinmieji","guixin"],["des:神曹操+李儒"]],
            hecao:["male","wu",3,["l_dujin","l_qizhou"],["des:贺齐+凌操"]],
            kangong:["male","wu",3,["l_xiashu","l_kuanshi","l_zhichi"],["des:阚泽+陈宫"]],
            wujicao:["female","wu",3,["l_ganlu","ll_dujin"],["des:吴国太+周姬+凌操"]],
            chencendonghun:["male","wu",4,["l_duanxie1","l_fenmin","l_jishe"],["des:陈武董袭+岑昏"]],
            zhangjian:["male","wei",3,["gai_huansha","gai_huanshan","l_taiji1"],["des:张三丰+马俊坚+陈群"]],
            hezhi:["female","qun",3,["l_jiudu1","l_qiluan","l_zhensha1"],["des:何太后+吕雉"]],
            lvfengjian:["male","wu",3,["l_tuqiang1","l_taiji1","l_keji"],["des:吕蒙+张三丰+勾践"]],
            sunsi:["female","wu",3,["l_fenghuo1","l_xiaoji"],["des:孙尚香+褒姒"]],
            xuyuce:["male","shu",4,["l_zhuhai1","l_wusheng","l_jiang"],["des:徐庶+关羽+孙策"]],
            fucai:["male","qun",4,["l_moukui","l_qiangwu"],["des:伏完+张星彩"]],
            caogai:["male","qun",4,["l_weikui","l_zhaxiang"],["des:曹仁+黄盖"]],
            zhugehuo:["male","shu",4,["Lguanxing","l_zaiqi","l_juxiang"],["des:诸葛亮+孟获"]],
            huangxiu:["male","shu",4,["l_qianju1","l_xinliegong"],["des:黄忠+曹休"]],
            huanglang:["male","wu",4,["l_quji1","l_zhaxiang"],["des:黄盖+司马朗"]],
            wutujian:["male","qun",10,["l_ranshang","l_xueji1"],["des:兀突骨+关银屏"]],
            maru:["male","shu",3,["l_qianxi1","l_yingjian"],["des:马岱+孙茹"]],
            qiaozhaohong:["female","wu",3,["l_guzheng1","l_guose1"],["des:大乔+张昭张纮"]],
            wanggai:["female","wei",3,["l_zhenlie","ll_zhaxiang"],["des:王异+黄盖"]],
            masong:["male","shu",3,["l_zishu","l_qiangzhi"],["des:马良+张松"]],
            yuanyanfeng:["male","qun",4,["l_luanji","xinl_kuanggu"],["zhu","des:袁绍+魏延"]],
            guanhua:["male","qun",3,["l_longyin","l_shangshi"],["des:关平+张春华"]],
            jiajinhua:["male","qun",3,["l_weimu1","l_yizhong1","l_shangshi"],["des:贾诩+于禁+张春华"]],
            lvhu:["male","shen",4,["l_boss_shenyi","l_baonu","l_ol_shenfen"],["des:神吕布+白虎"]],
            guotuliuxie:["male","qun",3,["l_jigong","l_tianming"],["des:郭图逢纪+刘协"]],
            mengsiyan:["male","shen",5,["l_juxiang","l_fenghuo1","xinl_kuanggu","l_benxi"],["des:孟获+魏延+褒姒"]],
            caohuyuan:["male","shen",4,["l_xinshensu","l_xinjushou","l_xinjiewei"],["des:曹仁+白虎+夏侯渊"]],
            lingningxun:["male","shen",4,["l_dujin","l_xuanfeng","l_qixi","l_lianying"],["des:凌操+甘宁+陆逊+凌统"]],
        },
        translate:{
            jishouhuo:"嵇授获",
            liuke:"刘恪",
            liuyou:"刘攸",
            gaomi:"高宓",
            luyu:"吕羽",
            xuchan:"许蝉",
            maping:"马平",
            huayi:"华异",
            liuliang:"刘亮",
            jukang:"沮康",
            "lingquan1":"凌权",
            xiahoujia:"夏侯嘉",
            zhuhun:"诸昏",
            caohouchun:"曹侯淳",
            lvyu:"吕瑜",
            zhangzhi:"张芝",
            huangfeng:"黄奉",
            diangai:"典盖",
            taishimi:"太史宓",
            zhumi:"祝宓",
            mengkang:"孟康",
            huangzhi:"黄志",
            sunhua:"孙华",
            sunyuci:"孙瑜慈",
            ganxun:"甘逊",
            donghuo:"董获",
            sunren:"孙仁",
            wuyi:"吴义",
            xunrui:"荀睿",
            xiahouang:"夏侯昂",
            yuanhua:"袁华",
            zhenyi:"甄懿",
            guotuo:"郭佗",
            guansong:"关松",
            weiyu:"魏羽",
            zhaofei:"赵飞",
            leren:"乐仁",
            caozhiren:"曹智仁",
            diaoren:"貂仁",
            zhugai:"朱盖",
            wanghua:"王华",
            zhumaxun:"诸马逊",
            "zhongyong1":"钟邕",
            kongbaiquan:"孔白权",
            manyou:"满攸",
            jianganling:"简乾灵",
            zhangdun:"张顿",
            tianxun:"田逊",
            suntuo:"孙佗",
            majia:"马嘉",
            zhuchaojia:"诸超嘉",
            zhuhunyu:"诸昏育",
            "xunxun1":"荀逊",
            yanxiang:"严香",
            zhugechong:"诸葛冲",
            liyanwojuqnidayede:"李延",
            chenjiantong:"陈坚统",
            liushangji:"刘尚姬",
            zhangchao:"张超",
            huangenyue:"黄恩月",
            xuhaojixie:"徐浩纪协",
            zhenbai:"甄白",
            caojia:"曹嘉",
            zhipi:"植丕",
            zhangwei:"张维",
            zhugeji:"诸葛姬",
            dengxie:"邓协",
            l_liufeng:"刘丰",
            buyong:"步雍",
            xiahengfeng:"夏恒奉",
            wenliang:"文亮",
            zhangmiang:"张宓昂",
            zhuyoujie:"诸攸节",
            luran:"鲁然",
            caiwenyu:"蔡文彧",
            madaichao:"马岱超",
            liugechan:"刘葛禅",
            caixing:"蔡星",
            guancai:"关彩",
            yandiaowenchan:"颜貂文蝉",
            caoru:"曹儒",
            hecao:"贺操",
            kangong:"阚宫",
            wujicao:"吴姬操",
            chencendonghun:"陈岑董昏",
            zhangjian:"张坚",
            hezhi:"何雉",
            lvfengjian:"吕丰践",
            sunsi:"孙姒",
            xuyuce:"徐羽策",
            fucai:"伏彩",
            caogai:"曹盖",
            zhugehuo:"诸葛获",
            huangxiu:"黄休",
            huanglang:"黄朗",
            wutujian:"兀突坚",
            maru:"马茹",
            qiaozhaohong:"桥昭纮",
            wanggai:"王盖",
            masong:"马松",
            yuanyanfeng:"袁延奉",
            guanhua:"关华",
            jiajinhua:"贾禁华",
            lvhu:"吕虎",
            guotuliuxie:"郭图刘协",
            mengsiyan:"孟姒延",
            caohuyuan:"曹虎渊",
            lingningxun:"凌宁逊",
            "l_benghuai_hp":"体力",
            "l_benghuai_maxHp":"体力上限",
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
             "l_zhaxiang":{
                group:["l_zhaxiang3"],
                init:function (player){
            player.storage.l_zhaxiang=0;
            },
                trigger:{
                    player:"loseHpAfter",
                },
                forced:true,
                audio:"zhaxiang2",
                filter:function (event){
                return (event.num>0)
            },
                content:function (){
                player.draw(3*trigger.num);                
                if(_status.currentPhase==player){
                if(player.storage.l_zhaxiang){
    player.storage.l_zhaxiang+=trigger.num;    
    }else{
    player.storage.l_zhaxiang=trigger.num;    
    }
                    player.addTempSkill('l_zhaxiang2','phaseAfter');
                }
                else{
                    game.trySkillAudio('l_zhaxiang',player);
                }
            },
            },
            "l_zhaxiang2":{
                mod:{
                    targetInRange:function (card,player,target,now){
                    if(card.name=='sha'&&get.color(card)=='red') return true;
                },
                    cardUsable:function (card,player,num){
                    if(card.name=='sha') return num+player.storage.l_zhaxiang;
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
            "l_zhaxiang3":{
                trigger:{
                    global:["phaseBefore","phaseAfter"],
                },
                forced:true,
                unique:true,
                priority:null,
                popup:false,
                silent:true,
                content:function (){
           player.storage.l_zhaxiang=0;
           player.removeSkill('l_zhaxiang3');
           player.update();
               ui.clear();
             },
            },
            "l_zhaxiang_old":{
                trigger:{
                    player:"loseHpEnd",
                },
                forced:true,
                audio:"zhaxiang2",
                content:function (){
                    player.draw(3);
                    if(_status.currentPhase==player){
                        player.addTempSkill('l_zhaxiang2',{player:'phaseAfter'});
                    }
                    else{
                        game.trySkillAudio('l_zhaxiang',player);
                    }
                },
                ai:{
                    maihp:true,
                },
            },
            "l_zhaxiang_old2":{
                mod:{
                    targetInRange:function (card,player,target,now){
                        if(card.name=='sha'&&get.color(card)=='red') return true;
                    },
                    cardUsable:function (card,player,num){
                        if(card.name=='sha') return num+1;
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
            "ll_zhaxiang":{
                group:["ll_zhaxiang3"],
                init:function (player){
            player.storage.ll_zhaxiang=0;
            },
                trigger:{
                    player:"loseHpAfter",
                },
                forced:true,
                audio:"ext:异界四国:2",
                filter:function (event){
                return (event.num>0)
            },
                content:function (){
                player.draw(3*trigger.num);                
                if(_status.currentPhase==player){
                if(player.storage.ll_zhaxiang){
    player.storage.ll_zhaxiang+=trigger.num;    
    }else{
    player.storage.ll_zhaxiang=trigger.num;    
    }
                    player.addTempSkill('ll_zhaxiang2','phaseAfter');
                }
                else{
                    game.trySkillAudio('ll_zhaxiang',player);
                }
            },
            },
            "ll_zhaxiang2":{
                mod:{
                    targetInRange:function (card,player,target,now){
                    if(card.name=='sha'&&get.color(card)=='red') return true;
                },
                    cardUsable:function (card,player,num){
                    if(card.name=='sha') return num+player.storage.ll_zhaxiang;
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
            "ll_zhaxiang3":{
                trigger:{
                    global:["phaseBefore","phaseAfter"],
                },
                forced:true,
                unique:true,
                priority:null,
                popup:false,
                silent:true,
                content:function (){
           player.storage.ll_zhaxiang=0;
           player.removeSkill('ll_zhaxiang3');
           player.update();
               ui.clear();
             },
            },
            "ll_zhaxiang_old":{
                trigger:{
                    player:"loseHpEnd",
                },
                forced:true,
                audio:"ext:异界四国:2",
                content:function (){
                    player.draw(3);
                    if(_status.currentPhase==player){
                        player.addTempSkill('ll_zhaxiang2',{player:'phaseAfter'});
                    }
                    else{
                        game.trySkillAudio('ll_zhaxiang',player);
                    }
                },
                ai:{
                    maihp:true,
                },
            },
            "ll_zhaxiang_old2":{
                mod:{
                    targetInRange:function (card,player,target,now){
                        if(card.name=='sha'&&get.color(card)=='red') return true;
                    },
                    cardUsable:function (card,player,num){
                        if(card.name=='sha') return num+1;
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
            "l_qiangxi":{
                audio:"qiangxi",
                audioname:["boss_lvbu3"],
                enable:"phaseUse",
                usable:1,
                filterCard:function (card){
                    return get.subtype(card)=='equip1';
                },
                selectCard:[0,1],
                filterTarget:function (card,player,target){
                    if(player==target) return false;
                    return get.distance(player,target,'attack')<=1;
                },
                content:function (){
                    "step 0"
                    if(cards.length==0){
                        player.loseHp();
                    }
                    "step 1"
                    target.damage();
                },
                check:function (card){
                    return 10-get.value(card);
                },
                position:"he",
                ai:{
                    damage:true,
                    order:8,
                    result:{
                        player:function (player,target){
                            if(player.getEquip(1)) return 0;
                            if(player.hp>=target.hp) return -0.9;
                            if(player.hp<=2) return -10;
                            return -2;
                        },
                        target:function (player,target){
                            if(!player.getEquip(1)){
                                if(player.hp<2) return 0;
                                if(player.hp==2&&target.hp>=2) return 0;
                                if(target.hp>player.hp) return 0;
                            }
                            return get.damageEffect(target,player);
                        },
                    },
                },
                threaten:1.3,
            },
            "xinl_qiangxi":{
                audio:"qiangxi",
                audioname:["boss_lvbu3"],
                enable:"phaseUse",
                filter:function (event,player){
                    if(player.hasSkill('xinl_qiangxi2')){
                        return !player.hasSkill('xinl_qiangxi3');
                    }
                    else if(player.hasSkill('xinl_qiangxi3')){
                        return !player.hasSkill('xinl_qiangxi2')&&player.countCards('he',{type:'equip'})>0;
                    }
                    else{
                        return true;
                    }
                },
                filterCard:function (card){
                    var player=_status.event.player;
                    if(player.hasSkill('xinl_qiangxi2')) return false;
                    return get.type(card)=='equip';
                },
                selectCard:function (){
                    var player=_status.event.player;
                    if(player.hasSkill('xinl_qiangxi2')) return -1;
                    if(player.hasSkill('xinl_qiangxi3')) return [1,1];
                    return [0,1];
                },
                filterTarget:function (card,player,target){
                    if(player==target) return false;
                    return get.distance(player,target,'attack')<=1;
                },
                content:function (){
                    "step 0"
                    if(cards.length==0){
                        player.loseHp();
                        player.addTempSkill('xinl_qiangxi3');
                    }
                    else{
                        player.addTempSkill('xinl_qiangxi2');
                    }
                    "step 1"
                    target.damage();
                },
                check:function (card){
                    return 10-get.value(card);
                },
                position:"he",
                ai:{
                    order:8.5,
                    result:{
                        target:function (player,target){
                            if(player.hasSkill('xinl_qiangxi2')||!player.countCards('he',{type:'equip'})){
                                if(player.hp<2) return 0;
                                if(target.hp>=player.hp) return 0;
                            }
                            return get.damageEffect(target,player);
                        },
                    },
                },
                threaten:1.5,
            },
            "xinl_qiangxi2":{
            },
            "xinl_qiangxi3":{
            },
            "l_tianyi":{
                audio:"tianyi",
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
                        player.addTempSkill('l_tianyi2');
                    }
                    else{
                        player.addTempSkill('l_tianyi3');
                    }
                },
                ai:{
                    order:function (name,player){
                        var cards=player.getCards('h');
                        if(player.countCards('h','sha')==0){
                            return 1;
                        }
                        for(var i=0;i<cards.length;i++){
                            if(cards[i].name!='sha'&&cards[i].number>11&&get.value(cards[i])<7){
                                return 9;
                            }
                        }
                        return get.order({name:'sha'})-1;
                    },
                    result:{
                        player:function (player){
                            if(player.countCards('h','sha')>0) return 0.6;
                            var num=player.countCards('h');
                            if(num>player.hp) return 0;
                            if(num==1) return -2;
                            if(num==2) return -1;
                            return -0.7;
                        },
                        target:function (player,target){
                            var num=target.countCards('h');
                            if(num==1) return -1;
                            if(num==2) return -0.7;
                            return -0.5
                        },
                    },
                    threaten:1.3,
                },
            },
            "l_tianyi2":{
                mod:{
                    targetInRange:function (card,player,target,now){
                        if(card.name=='sha') return true;
                    },
                    selectTarget:function (card,player,range){
                        if(card.name=='sha'&&game.players.length>2&&range[1]!=-1) range[1]++;
                    },
                    cardUsable:function (card,player,num){
                        if(card.name=='sha') return num+1;
                    },
                },
            },
            "l_tianyi3":{
                mod:{
                    cardEnabled:function (card){if(card.name=='sha') return false},
                },
            },
            "l_lianying":{
                audio:"lianying",
                trigger:{
                    player:"loseEnd",
                },
                frequent:true,
                filter:function (event,player){
                    if(player.countCards('h')) return false;
                    for(var i=0;i<event.cards.length;i++){
                        if(event.cards[i].original=='h') return true;
                    }
                    return false;
                },
                content:function (){
                    player.draw();
                },
                ai:{
                    threaten:0.8,
                    effect:{
                        target:function (card){
                            if(card.name=='guohe'||card.name=='liuxinghuoyu') return 0.5;
                        },
                    },
                    noh:true,
                    skillTagFilter:function (player,tag){
                        if(tag=='noh'){
                            if(player.countCards('h')!=1) return false;
                        }
                    },
                },
            },
            "rel_qianxun":{
                init:function (player){
                    player.storage.rel_qianxun2=[];
                },
                audio:"reqianxun",
                trigger:{
                    target:"useCardToBegin",
                    player:"judgeBefore",
                },
                filter:function (event,player){
                    if(player.countCards('h')==0) return false;
                    if(event.parent.name=='phaseJudge'){
                        if(lib.skill.rel_qianxun.trigger.player=='judgeBefore'){
                            return true;
                        }
                        return event.result&&event.result.judge!=0;
                    }
                    if(event.name=='judge') return false;
                    if(event.targets&&event.targets.length>1) return false;
                    if(event.card&&get.type(event.card)=='trick'&&event.player!=player) return true;
                },
                content:function (){
                    player.storage.rel_qianxun2=player.storage.rel_qianxun2.concat(player.getCards('h'));
                    game.addVideo('storage',player,['rel_qianxun2',get.cardsInfo(player.storage.rel_qianxun2),'cards']);
                    player.lose(player.getCards('h'),ui.special);
                    player.addSkill('rel_qianxun2');
                },
                ai:{
                    effect:function (card,player,target){
                        if(!target.hasFriend()) return;
                        if(player==target) return;
                        var type=get.type(card);
                        var nh=target.countCards();
                        if(type=='trick'){
                            if(!get.tag(card,'multitarget')||get.info(card).singleCard){
                                if(get.tag(card,'damage')){
                                    if(nh<3||target.hp<=2) return 0.8;
                                }
                                return [1,nh];
                            }
                        }
                        else if(type=='delay'){
                            return [0.5,0.5];
                        }
                    },
                },
            },
            "rel_qianxun2":{
                trigger:{
                    global:"phaseAfter",
                },
                forced:true,
                audio:"ext:异界四国:false",
                content:function (){
                    player.gain(player.storage.rel_qianxun2);
                    player.removeSkill('rel_qianxun2');
                    player.storage.rel_qianxun2=[];
                    game.addVideo('storage',player,['rel_qianxun2',get.cardsInfo(player.storage.rel_qianxun2),'cards']);
                },
                mark:true,
                intro:{
                    content:"cardCount",
                },
            },
            "l_qingnang":{
                audio:"qingnang",
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
                    target.recover();
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
            "l_jijiu":{
                audio:"jijiu",
                enable:"chooseToUse",
                filter:function (event,player){
                    return _status.currentPhase!=player;
                },
                filterCard:function (card){
                    return get.color(card)=='red';
                },
                position:"he",
                viewAs:{
                    name:"tao",
                },
                prompt:"将一张红色牌当桃使用",
                check:function (card){return 15-get.value(card)},
                ai:{
                    skillTagFilter:function (player){
                        return player.countCards('he',{color:'red'})>0&&_status.currentPhase!=player;
                    },
                    threaten:1.5,
                    save:true,
                    respondTao:true,
                    basic:{
                        order:function (card,player){
                            if(player.hasSkillTag('pretao')) return 5;
                            return 2;
                        },
                        useful:[8,6.5,5,4],
                        value:[8,6.5,5,4],
                    },
                    result:{
                        target:function (player,target){
                            // if(player==target&&player.hp<=0) return 2;
                            var nd=player.needsToDiscard();
                            var keep=false;
                            if(nd<=0){
                                keep=true;
                            }
                            else if(nd==1&&target.hp>=2&&target.countCards('h','tao')<=1){
                                keep=true;
                            }
                            var mode=get.mode();
                            if(target.hp>=2&&keep&&target.hasFriend()){
                                if(target.hp>2||nd==0) return 0;
                                if(target.hp==2){
                                    if(game.hasPlayer(function(current){
                                        if(target!=current&&get.attitude(target,current)>=3){
                                            if(current.hp<=1) return true;
                                            if((mode=='identity'||mode=='versus'||mode=='chess')&&current.identity=='zhu'&&current.hp<=2) return true;
                                        }
                                    })){
                                        return 0;
                                    }
                                }
                            }
                            if(target.hp<0&&target!=player&&target.identity!='zhu') return 0;
                            var att=get.attitude(player,target);
                            if(att<3&&att>=0&&player!=target) return 0;
                            var tri=_status.event.getTrigger();
                            if(mode=='identity'&&player.identity=='fan'&&target.identity=='fan'){
                                if(tri&&tri.name=='dying'&&tri.source&&tri.source.identity=='fan'&&tri.source!=target){
                                    var num=game.countPlayer(function(current){
                                        if(current.identity=='fan'){
                                            return current.countCards('h','tao');
                                        }
                                    });
                                    if(num>1&&player==target) return 2;
                                    return 0;
                                }
                            }
                            if(mode=='identity'&&player.identity=='zhu'&&target.identity=='nei'){
                                if(tri&&tri.name=='dying'&&tri.source&&tri.source.identity=='zhong'){
                                    return 0;
                                }
                            }
                            if(mode=='stone'&&target.isMin()&&
                            player!=target&&tri&&tri.name=='dying'&&player.side==target.side&&
                            tri.source!=target.getEnemy()){
                                return 0;
                            }
                            return 2;
                        },
                    },
                    tag:{
                        recover:1,
                        save:1,
                    },
                },
            },
            "l_kurou":{
                audio:"kurou",
                enable:"phaseUse",
                prompt:"失去一点体力并摸两张牌",
                content:function (){
                    "step 0"
                    player.loseHp(1);
                    "step 1"
                    player.draw(2);
                },
                ai:{
                    basic:{
                        order:1,
                    },
                    result:{
                        player:function (player){
                            if(player.countCards('h')>=player.hp-1) return -1;
                            if(player.hp<3) return -1;
                            return 1;
                        },
                    },
                },
            },
            "l_longyin":{
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
                        else if(!trigger.player.hasSkill('l_paoxiao')&&
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
                            else if(nh>=3){
                                if(nh==3){
                                    go=Math.random()<0.5;
                                }
                                else if(nh==2){
                                    go=Math.random()<0.2;
                                }
                            }
                        }
                    }
                    var next=player.chooseToDiscard(get.prompt('l_longyin'),'he');
                    next.logSkill=['l_longyin',trigger.player];
                    next.set('ai',function(card){
                        if(_status.event.go){
                            return 6-get.value(card);
                        }
                        return 0;
                    });
                    next.set('go',go);
                    'step 1'
                    if(result.bool){
                        trigger.player.getStat().card.sha--;
                        if(get.color(trigger.card)=='red'){
                            player.draw();
                        }
                        // player.logSkill('l_longyin',trigger.player);
                    }
                },
                ai:{
                    expose:0.2,
                },
            },
            "l_mashu":{
                mod:{
                    globalFrom:function (from,to,distance){
                        return distance-1;
                    },
                },
            },
            "l_mashu1":{
                mod:{
                    globalFrom:function (from,to,distance){
                        return distance-1;
                    },
                },
            },
            "l_mashu2":{
                mod:{
                    globalFrom:function (from,to,distance){
                        return distance-1;
                    },
                },
            },
            "l_mashu3":{
                mod:{
                    globalFrom:function (from,to,distance){
                        return distance-1;
                    },
                },
            },
            "l_mashu4":{
                mod:{
                    globalFrom:function (from,to,distance){
                        return distance-1;
                    },
                },
            },
            "l_mashu5":{
                mod:{
                    globalFrom:function (from,to,distance){
                        return distance-1;
                    },
                },
            },
            "l_mashu6":{
                mod:{
                    globalFrom:function (from,to,distance){
                        return distance-1;
                    },
                },
            },
            "l_mashu7":{
                mod:{
                    globalFrom:function (from,to,distance){
                        return distance-1;
                    },
                },
            },
            "l_mashu8":{
                mod:{
                    globalFrom:function (from,to,distance){
                        return distance-1;
                    },
                },
            },
            "l_mashu9":{
                mod:{
                    globalFrom:function (from,to,distance){
                        return distance-1;
                    },
                },
            },
            "l_mashu10":{
                mod:{
                    globalFrom:function (from,to,distance){
                        return distance-1;
                    },
                },
            },
            "l_mashu11":{
                mod:{
                    globalFrom:function (from,to,distance){
                        return distance-1;
                    },
                },
            },
            "l_mashu12":{
                mod:{
                    globalFrom:function (from,to,distance){
                        return distance-1;
                    },
                },
            },
            "l_anguo":{
                audio:"anguo",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        if(player==target) return false;
        if(player.isMinHandcard()||target.isMinHandcard()) return true;
        if(player.isMinEquip()||target.isMinEquip()) return true;
        if((player.isMinHp()&&player.isDamaged())||(target.isMinHp()&&target.isDamaged())) return true;
        return false;
    },
                content:function (){
        'step 0'
        if(target.isMinHandcard()){
            target.draw();
            event.h=true;
        }
        if(target.isMinHp()&&target.isDamaged()){
            target.recover();
            event.hp=true;
        }
        event.equip=get.cardPile(function(card){
            return get.type(card)=='equip';
        });
        if(target.isMinEquip()){
            target.equip(event.equip||game.createCard(get.inpilefull('equip').randomGet()),true);
            event.e=true;
        }
        'step 1'
        if(!event.h&&player.isMinHandcard()){
            player.draw();
        }
        if(!event.hp&&player.isMinHp()&&player.isDamaged()){
            player.recover();
        }
        if(!event.e&&player.isMinEquip()){
            player.equip(event.equip||game.createCard(get.inpilefull('equip').randomGet()),true);
        }
    },
                ai:{
                    threaten:1.6,
                    order:9,
                    result:{
                        player:function (player,target){
                if(get.attitude(player,target)<=0){
                    if(target.isMinHandcard()||target.isMinEquip()||target.isMinHp()) return -1;
                }
                var num=0;
                if(player.isMinHandcard()||target.isMinHandcard()) num++;
                if(player.isMinEquip()||target.isMinEquip()) num++;
                if((player.isMinHp()&&player.isDamaged())||(target.isMinHp()&&target.isDamaged())) num+=2.1;
                return num;
            },
                    },
                },
            },
            "l_fenxun":{
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
                    return target!=player;
                },
                content:function (){
                    player.storage.l_fenxun2=target;
                    player.addTempSkill('l_fenxun2');
                },
                check:function (card){
                    if(card.name=='sha'&&_status.event.player.countCards('h','sha')<=1) return 0;
                    return 6-get.value(card);
                },
                filterCard:true,
                ai:{
                    order:5.5,
                    threaten:1.4,
                    result:{
                        player:function (player,target){
                            if(get.distance(player,target)<=1) return 0;
                            var hs=player.getCards('h','shunshou');
                            if(hs.length&&player.canUse(hs[0],target,false)){
                                return 1;
                            }
                            var geteff=function(current){
                                return player.canUse('sha',current,false,true)&&get.effect(current,{name:'sha'},player,player)>0;
                            }
                            if(player.hasSha()&&geteff(target)){
                                var num=game.countPlayer(function(current){
                                    return current!=player&&get.distance(player,current)<=1&&geteff(current);
                                });
                                if(num==0){
                                    if(game.hasPlayer(function(current){
                                        return player.canUse('sha',current)&&geteff(current)&&current!=target;
                                    })){
                                        return 1;
                                    }
                                }
                                else if(num==1){
                                    return 1;
                                }
                            }
                            return 0;
                        },
                    },
                },
            },
            "l_fenxun2":{
                mark:"character",
                onremove:true,
                intro:{
                    content:"到$的距离视为1",
                },
                mod:{
                    globalFrom:function (from,to){
                        if(to==from.storage.l_fenxun2){
                            return -Infinity;
                        }
                    },
                },
            },
            "l_fenxun_old":{
                audio:"fenxun",
                trigger:{
                    player:"shaBefore",
                },
                direct:true,
                filter:function (event,player){
                    return event.targets.length==1;
                },
                position:"he",
                content:function (){
                    "step 0"
                    player.chooseCardTarget({
                        filterCard:lib.filter.cardDiscardable,
                        filterTarget:function(card,player,target){
                            var trigger=_status.event.getTrigger();
                            return lib.filter.targetEnabled(trigger.card,player,target)&&target!=trigger.targets[0];
                        },
                        ai1:function(card){
                            return 6-get.value(card);
                        },
                        ai2:function(target){
                            var trigger=_status.event.getTrigger();
                            var player=_status.event.player;
                            return get.effect(target,trigger.card,player,player);
                        },
                        prompt:get.prompt('l_fenxun')
                    });
                    "step 1"
                    if(result.bool){
                        player.discard(result.cards);
                        trigger.targets.push(result.targets[0]);
                        player.logSkill('l_fenxun',result.targets);
                    }
                },
            },
            "l_duanbing":{
                trigger:{
                    player:"useCard",
                },
                filter:function (event,player){
        if(event.card.name!='sha') return false;
        return game.hasPlayer(function(current){
            return !event.targets.contains(current)&&get.distance(player,current)<=1&&player.canUse('sha',current);
        });
    },
                direct:true,
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt('l_duanbing'),function(card,player,target){
            return !_status.event.source.contains(target)&&get.distance(player,target)<=1&&player.canUse('sha',target);
        }).set('source',trigger.targets).set('ai',function(target){
            var player=_status.event.player;
            return get.effect(target,{name:'sha'},player,player);
        });
        'step 1'
        if(result.bool){
            if(!event.isMine()&&!_status.connectMode) game.delayx();
            event.target=result.targets[0];
        }
        else{
            event.finish();
        }
        'step 2'
        player.logSkill('l_duanbing',event.target);
        trigger.targets.push(event.target);
    },
                ai:{
                    effect:{
                        player:function (card,player,target){
                if(card.name=='sha'){
                    if(player._l_duanbingtmp) return;
                    player._l_duanbingtmp=true;
                    if(get.effect(target,{name:'sha'},player,player)<=0){
                        delete player._l_duanbingtmp;
                        return;
                    }
                    if(game.hasPlayer(function(current){
                        return current!=target&&get.distance(player,current)<=1&&
                        player.canUse('sha',current)&&get.effect(current,{name:'sha'},player,player)>0;
                    })){
                        delete player._l_duanbingtmp;
                        return [1,1];
                    }
                    delete player._l_duanbingtmp;
                }
            },
                    },
                },
            },
            "xinl_kuanggu":{
                audio:"ext:异界四国:false",
                trigger:{
                    source:"damageEnd",
                },
                filter:function (event,player){
                    return get.distance(player,event.player)<=1&&event.num>0;
                },
                direct:true,
                content:function (){
                    'step 0'
                    event.num=trigger.num;
                    'step 1'
                    player.chooseDrawRecover(get.prompt('xinl_kuanggu')).set('logSkill','xinl_kuanggu');
                    'step 2'
                    if(result.control!='cancel2'){
                        event.num--;
                        if(event.num>0){
                            event.goto(1);
                        }
                    }
                },
            },
            "l_kuanggu":{
                audio:"ext:异界四国:2",
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                filter:function (event,player){
                    return get.distance(player,event.player)<=1&&player.isDamaged();
                },
                content:function (){
                    player.recover(trigger.num);
                },
            },
            "l_wusheng":{
                audio:"wusheng",
                audioname:["guanzhang"],
                enable:["chooseToRespond","chooseToUse"],
                filterCard:function (card,player){
                    if(get.zhu(player,'shouyue')) return true;
                    return get.color(card)=='red';
                },
                position:"he",
                viewAs:{
                    name:"sha",
                },
                viewAsFilter:function (player){
                    if(get.zhu(player,'shouyue')){
                        if(!player.countCards('he')) return false;
                    }
                    else{
                        if(!player.countCards('he',{color:'red'})) return false;
                    }
                },
                prompt:"将一张红色牌当杀使用或打出",
                check:function (card){return 4-get.value(card)},
                ai:{
                    skillTagFilter:function (player){
                        if(get.zhu(player,'shouyue')){
                            if(!player.countCards('he')) return false;
                        }
                        else{
                            if(!player.countCards('he',{color:'red'})) return false;
                        }
                    },
                    respondSha:true,
                    basic:{
                        useful:[5,1],
                        value:[5,1],
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
            "l_qimou":{
                unique:true,
                enable:"phaseUse",
                filter:function (event,player){
                    return !player.storage.l_qimou;
                },
                init:function (player){
                    player.storage.l_qimou=false;
                },
                mark:true,
                intro:{
                    content:"limited",
                },
                skillAnimation:"legend",
                animationColor:"metal",
                content:function (){
                    'step 0'
                    var shas=player.getCards('h','sha');
                    var num;
                    if(player.hp>=4&&shas.length>=3){
                        num=3;
                    }
                    else if(player.hp>=3&&shas.length>=2){
                        num=2;
                    }
                    else{
                        num=1
                    }
                    player.awakenSkill('l_qimou');
                    player.storage.l_qimou=true;
                    player.chooseControl('一','二','三','四','五','六',function(){
                        return get.cnNumber(_status.event.goon,true);
                    }).set('prompt','失去任意点体力').set('goon',num);
                    'step 1'
                    var num;
                    switch(result.control){
                        case '一':num=1;break;
                        case '二':num=2;break;
                        case '三':num=3;break;
                        case '四':num=4;break;
                        case '五':num=5;break;
                        case '六':num=6;break;
                    }
                    player.storage.l_qimou2=num;
                    player.loseHp(num);
                    player.addTempSkill('l_qimou2');
                },
                ai:{
                    order:2,
                    result:{
                        player:function (player){
                            if(player.hp==1) return 0;
                            var shas=player.getCards('h','sha');
                            if(!shas.length) return 0;
                            var card=shas[0];
                            if(!lib.filter.cardEnabled(card,player)) return 0;
                            if(lib.filter.cardUsable(card,player)) return 0;
                            var mindist;
                            if(player.hp>=4&&shas.length>=3){
                                mindist=4;
                            }
                            else if(player.hp>=3&&shas.length>=2){
                                mindist=3;
                            }
                            else{
                                mindist=2;
                            }
                            if(game.hasPlayer(function(current){
                                return (current.hp<=mindist-1&&
                                    get.distance(player,current,'attack')<=mindist&&
                                    player.canUse(card,current,false)&&
                                    get.effect(current,card,player,player)>0);
                            })){
                                return 1;
                            }
                            return 0;
                        },
                    },
                },
            },
            "l_qimou2":{
                onremove:true,
                mod:{
                    cardUsable:function (card,player,num){
                        if(typeof player.storage.l_qimou2=='number'&&card.name=='sha'){
                            return num+player.storage.l_qimou2;
                        }
                    },
                    globalFrom:function (from,to,distance){
                        if(typeof from.storage.l_qimou2=='number'){
                            return distance-from.storage.l_qimou2;
                        }
                    },
                },
            },
            "l_xianzhen":{
                audio:"xianzhen",
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
                     player.gainPlayerCard('h',target,true);
                        player.storage.l_xianzhen=target;
                        player.addTempSkill('l_xianzhen2');
                    }
                    else{
                        player.addTempSkill('l_xianzhen3');
                    }
                },
                ai:{
                    order:function (name,player){
                        var cards=player.getCards('h');
                        if(player.countCards('h','sha')==0){
                            return 1;
                        }
                        for(var i=0;i<cards.length;i++){
                            if(cards[i].name!='sha'&&cards[i].number>11&&get.value(cards[i])<7){
                                return 9;
                            }
                        }
                        return get.order({name:'sha'})-1;
                    },
                    result:{
                        player:function (player){
                            if(player.countCards('h','sha')>0) return 0;
                            var num=player.countCards('h');
                            if(num>player.hp) return 0;
                            if(num==1) return -2;
                            if(num==2) return -1;
                            return -0.7;
                        },
                        target:function (player,target){
                            var num=target.countCards('h');
                            if(num==1) return -1;
                            if(num==2) return -0.7;
                            return -0.5
                        },
                    },
                    threaten:1.3,
                },
            },
            "l_xianzhen2":{
                mod:{
                    targetInRange:function (card,player,target,now){
                        if(player.storage.l_xianzhen==target) return true;
                    },
                    cardUsable:function (card,player,num){
                        if(card.name=='sha') return Infinity;
                    },
                },
                ai:{
                    unequip:true,
                },
            },
            "l_xianzhen3":{
                mod:{
                    cardEnabled:function (card){if(card.name=='sha') return false},
                },
            },
            "l_jinjiu":{
                mod:{
                    cardEnabled:function (card,player){
            if(card.name=='jiu'&&_status.event.skill!='l_jinjiu') return false;
        },
                    cardUsable:function (card,player){
            if(card.name=='jiu'&&_status.event.skill!='l_jinjiu') return false;
        },
                    cardRespondable:function (card,player){
            if(card.name=='jiu'&&_status.event.skill!='l_jinjiu') return false;
        },
                    cardSavable:function (card,player){
            if(card.name=='jiu'&&_status.event.skill!='l_jinjiu') return false;
        },
                },
                enable:["chooseToUse","chooseToRespond"],
                filter:function (event,player){
        return player.countCards('h','jiu')>0;
    },
                filterCard:{
                    name:"jiu",
                },
                viewAs:{
                    name:"sha",
                },
                viewAsFilter:function (player){
        if(!player.countCards('h','jiu')) return false;
    },
                check:function (){return 1},
                ai:{
                    skillTagFilter:function (player){
            if(!player.countCards('h','jiu')) return false;
        },
                    respondSha:true,
                    order:4,
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
            },
            "l_tianbian":{
                trigger:{
                    player:"chooseCardBegin",
                },
                check:function (event,player){
        return player.hasCard(function(card){
            var val=get.value(card);
            return val<0||(val<=4&&card.number>=11);
        });
    },
                filter:function (event){
        return event.type=='compare'&&!event.directresult;
    },
                content:function (){
        var cards=get.cards();
        cards[0].discard();
        cards[0].vanishtag.add('l_tianbian');
        trigger.directresult=cards;
        trigger.untrigger();
    },
                group:"l_tianbian_number",
                subSkill:{
                    number:{
                        trigger:{
                            player:"compare",
                            target:"compare",
                        },
                        filter:function (event,player){
                if(event.iwhile) return false;
                if(event.player==player){
                    return get.suit(event.card1)=='heart';//&&event.card1.vanishtag.contains('l_tianbian');
                }
                else{
                    return get.suit(event.card2)=='heart';//&&event.card2.vanishtag.contains('l_tianbian');
                }
            },
                        silent:true,
                        content:function (){
                game.log(player,'拼点牌点数视为','#y13');
                if(player==trigger.player){
                    trigger.num1=13;
                }
                else{
                    trigger.num2=13;
                }
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                },
            },
            "l_yiji":{
                audio:"yiji",
                trigger:{
                    player:"damageEnd",
                },
                frequent:true,
                filter:function (event){
                    return (event.num>0)
                },
                content:function (){
                    "step 0"
                    event.cards=get.cards(2*trigger.num);
                    "step 1"
                    if(event.cards.length>1){
                        player.chooseCardButton('将“遗计”牌分配给任意角色',true,event.cards,[1,event.cards.length]).set('ai',function(button){
                            if(ui.selected.buttons.length==0) return 1;
                            return 0;
                        });
                    }
                    else if(event.cards.length==1){
                        event._result={links:event.cards.slice(0),bool:true};
                    }
                    else{
                        event.finish();
                    }
                    "step 2"
                    if(result.bool){
                        for(var i=0;i<result.links.length;i++){
                            event.cards.remove(result.links[i]);
                        }
                        event.togive=result.links.slice(0);
                        player.chooseTarget('将'+get.translation(result.links)+'交给一名角色',true).set('ai',function(target){
                            var att=get.attitude(_status.event.player,target);
                            if(_status.event.enemy){
                                return -att;
                            }
                            else if(att>0){
                                return att/(1+target.countCards('h'));
                            }
                            else{
                                return att/100;
                            }
                        }).set('enemy',get.value(event.togive[0])<0);
                    }
                    "step 3"
                    if(result.targets.length){
                        result.targets[0].gain(event.togive,'draw');
                        player.line(result.targets[0],'green');
                        game.log(result.targets[0],'获得了'+get.cnNumber(event.togive.length)+'张牌');
                        event.goto(1);
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
                                var num=1;
                                if(get.attitude(player,target)>0){
                                    if(player.needsToDiscard()){
                                        num=0.7;
                                    }
                                    else{
                                        num=0.5;
                                    }
                                }
                                if(target.hp>=4) return [1,num*2];
                                if(target.hp==3) return [1,num*1.5];
                                if(target.hp==2) return [1,num*0.5];
                            }
                        },
                    },
                },
            },
            "l_longdan":{
                group:["l_longdan_sha","l_longdan_shan","l_longdan_draw"],
                subSkill:{
                    draw:{
                        trigger:{
                            player:["useCard","respond"],
                        },
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                            if(!get.zhu(player,'shouyue')) return false;
                            return event.skill=='l_longdan_sha'||event.skill=='l_longdan_shan';
                        },
                        content:function (){
                            player.draw();
                            player.storage.fanghun2++;
                        },
                        sub:true,
                    },
                    sha:{
                        audio:"longdan2",
                        audioname:["re_zhaoyun"],
                        enable:["chooseToUse","chooseToRespond"],
                        filterCard:{
                            name:"shan",
                        },
                        viewAs:{
                            name:"sha",
                        },
                        viewAsFilter:function (player){
                            if(!player.countCards('h','shan')) return false;
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
                    shan:{
                        audio:"londan1",
                        audioname:["re_zhaoyun"],
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
                },
            },
            "l_chongzhen":{
                group:["l_chongzhen1","l_chongzhen2"],
                ai:{
                    combo:"l_longdan",
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
            },
            "l_chongzhen1":{
                audio:"chongzhen1",
                trigger:{
                    player:"useCardToBefore",
                },
                filter:function (event,player){
                    if(event.skill!='l_longdan_sha'&&event.skill!='fanghun_sha') return false;
                    return event.card&&event.card.name=='sha'&&event.target.countCards('h')>0;
                },
                logTarget:"target",
                priority:9,
                content:function (){
                    var card=trigger.target.getCards('h').randomGet();
                    player.gain(card,trigger.target);
                    trigger.target.$giveAuto(card,player);
                    game.delay();
                },
            },
            "l_chongzhen2":{
                audio:"chongzhen2",
                trigger:{
                    player:"respond",
                },
                filter:function (event,player){
                    if(event.skill!='l_longdan_shan'&&event.skill!='l_longdan_sha'&&
                    event.skill!='fanghun_shan'&&event.skill!='fanghun_sha') return false;
                    return event.source&&event.source.countCards('h')>0;
                },
                logTarget:"source",
                content:function (){
                    var card=trigger.source.getCards('h').randomGet();
                    player.gain(card,trigger.source);
                    trigger.source.$giveAuto(card,player);
                    game.delay();
                },
            },
            "l_paoxiao":{
                audio:"paoxiao",
                audioname:["guanzhang"],
                trigger:{
                    player:"useCard",
                },
                filter:function (event,player){
       if(_status.currentPhase!=player)
        return false;
                    return event.card.name=='sha'&&(get.cardCount({name:'sha'},player)>1)&&event.getParent(2).name!='qinglong_skill';
                },
                forced:true,
                content:function (){},
                mod:{
                    cardUsable:function (card,player,num){
                        if(card.name=='sha') return Infinity;
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
            "l_lihun":{
                audio:"ext:异界四国:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
                    return player!=target&&target.sex=='male';
                },
                filterCard:true,
                position:"he",
                content:function (){
                    player.gain(target.getCards('h'),target);
                    target.$give(target.countCards('h'),player);
                    player.turnOver();
                    player.addSkill('l_lihun2');
                    player.storage.l_lihun=target;
                },
                check:function (card){return 8-get.value(card)},
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
            "l_lihun2":{
                trigger:{
                    player:"phaseUseEnd",
                },
                forced:true,
                popup:false,
                audio:"ext:异界四国:false",
                content:function (){
                    "step 0"
                    player.removeSkill('l_lihun2');
                    if(player.storage.l_lihun.classList.contains('dead')){
                        event.finish();
                    }
                    else{
                        player.chooseCard('he',true,player.storage.l_lihun.hp);
                    }
                    "step 1"
                    player.storage.l_lihun.gain(result.cards,player);
                    player.$give(result.cards.length,player.storage.l_lihun);
                },
            },
            "l_kongcheng":{
                mod:{
                    targetEnabled:function (card,player,target,now){
                        if(target.countCards('h')==0){
                            if(card.name=='sha'||card.name=='juedou') return false;
                        }
                    },
                },
                group:"l_kongcheng1",
                ai:{
                    noh:true,
                    skillTagFilter:function (player,tag){
                        if(tag=='noh'){
                            if(player.countCards('h')!=1) return false;
                        }
                    },
                },
            },
            "l_kongcheng1":{
                audio:"kongcheng1",
                trigger:{
                    player:"loseEnd",
                },
                forced:true,
                filter:function (event,player){
                    if(player.countCards('h')) return false;
                    for(var i=0;i<event.cards.length;i++){
                        if(event.cards[i].original=='h') return true;
                    }
                    return false;
                },
                content:function (){},
            },
            "ll_kongcheng":{
                mod:{
                    targetEnabled:function (card,player,target,now){
                        if(target.countCards('h')==0){
                            if(card.name=='sha'||card.name=='juedou') return false;
                        }
                    },
                },
                group:"ll_kongcheng1",
                ai:{
                    noh:true,
                    skillTagFilter:function (player,tag){
                        if(tag=='noh'){
                            if(player.countCards('h')!=1) return false;
                        }
                    },
                },
            },
            "ll_kongcheng1":{
                audio:"kongcheng12",
                trigger:{
                    player:"loseEnd",
                },
                forced:true,
                filter:function (event,player){
                    if(player.countCards('h')) return false;
                    for(var i=0;i<event.cards.length;i++){
                        if(event.cards[i].original=='h') return true;
                    }
                    return false;
                },
                content:function (){},
            },
            "l_jishe":{
                enable:"phaseUse",
                filter:function (event,player){
                    return player.getHandcardLimit()>0;
                },
                init:function (player){
                    player.storage.l_jishe=0;
                },
                usable:20,
                content:function (){
                    player.draw();
                    player.storage.l_jishe++;
                },
                ai:{
                    order:10,
                    result:{
                        player:function (player){
                            if(!player.needsToDiscard(1)){
                                return 1;
                            }
                            return 0;
                        },
                    },
                },
                mod:{
                    maxHandcard:function (player,num){
                        return num-player.storage.l_jishe;
                    },
                },
                group:["l_jishe2","l_jishe3"],
            },
            "l_jishe2":{
                trigger:{
                    player:"phaseAfter",
                },
                silent:true,
                content:function (){
                    player.storage.l_jishe=0;
                },
                forced:true,
                popup:false,
            },
            "l_jishe3":{
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                filter:function (event,player){
                    if(player.countCards('h')) return false;
                    return game.hasPlayer(function(current){
                        return !current.isLinked();
                    });
                },
                content:function (){
                    "step 0"
                    var num=game.countPlayer(function(current){
                        return !current.isLinked();
                    });
                    player.chooseTarget(get.prompt('l_jishe'),[1,Math.min(num,player.hp)],function(card,player,target){
                        return !target.isLinked();
                    }).set('ai',function(target){
                        return -get.attitude(_status.event.player,target);
                    });
                    "step 1"
                    if(result.bool){
                        player.logSkill('l_jishe',result.targets);
                        event.targets=result.targets;
                        event.num=0;
                    }
                    else{
                        event.finish();
                    }
                    "step 2"
                    if(event.num<event.targets.length){
                        event.targets[event.num].link();
                        event.num++;
                        event.redo();
                    }
                },
                ai:{
                    expose:0.3,
                },
            },
            "rel_luoyi":{
                audio:"luoyi",
                trigger:{
                    player:"phaseDrawBegin",
                },
                check:function (event,player){
                    if(player.countCards('h','sha')) return true;
                    return Math.random()<0.5;
                },
                content:function (){
                    "step 0"
                    player.addTempSkill('rel_luoyi2',{player:'phaseBefore'});
                    trigger.cancel();
                    "step 1"
                    event.cards=get.cards(3);
                    player.showCards(event.cards,'裸衣');
                    "step 2"
                    for(var i=0;i<cards.length;i++){
                        if(get.type(cards[i])!='basic'&&cards[i].name!='juedou'&&
                            (get.type(cards[i])!='equip'||get.subtype(cards[i])!='equip1')){
                            cards[i].discard();
                            cards.splice(i--,1);
                        }
                    }
                    player.gain(cards,'gain2');
                },
            },
            "rel_luoyi2":{
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event){
                    return event.card&&(event.card.name=='sha'||event.card.name=='juedou')&&event.notLink();
                },
                forced:true,
                content:function (){
                    trigger.num++;
                },
                ai:{
                    damageBonus:true,
                },
            },
            "l_biyue":{
                audio:"ext:异界四国:2",
                trigger:{
                    player:"phaseEnd",
                },
                frequent:true,
                content:function (){
                    player.draw();
                },
            },
            "l_yongsi":{
                locked:true,
                group:["l_yongsi1","l_yongsi2"],
                ai:{
                    threaten:2.2,
                },
            },
            "l_yongsi1":{
                audio:"yongsi1",
                trigger:{
                    player:"phaseDrawBegin",
                },
                forced:true,
                content:function (){
                    trigger.num+=game.countGroup();
                },
            },
            "l_yongsi2":{
                audio:"yongsi2",
                trigger:{
                    player:"phaseDiscardBegin",
                },
                forced:true,
                content:function (){
                    player.chooseToDiscard(game.countGroup(),'he',true);
                },
            },
            "l_shangshi":{
                audio:"ext:异界四国:2",
                trigger:{
                    player:["loseEnd","changeHp"],
                },
                frequent:true,
                filter:function (event,player){
                    return player.countCards('h')<player.maxHp-player.hp;
                },
                content:function (){
                    player.draw(player.maxHp-player.hp-player.countCards('h'));
                },
                ai:{
                    noh:true,
                    skillTagFilter:function (player,tag){
                        if(tag=='noh'&&player.maxHp-player.hp<player.countCards('h')){
                            return false;
                        }
                    },
                },
            },
            "ll_shangshi":{
                audio:"shangshi",
                trigger:{
                    player:["loseEnd","changeHp"],
                },
                frequent:true,
                filter:function (event,player){
                    return player.countCards('h')<player.maxHp-player.hp;
                },
                content:function (){
                    player.draw(player.maxHp-player.hp-player.countCards('h'));
                },
                ai:{
                    noh:true,
                    skillTagFilter:function (player,tag){
                        if(tag=='noh'&&player.maxHp-player.hp<player.countCards('h')){
                            return false;
                        }
                    },
                },
            },
            "l_zaiqi":{
                audio:"zaiqi",
                trigger:{
                    player:"phaseDrawBefore",
                },
                filter:function (event,player){
                    return player.hp<player.maxHp;
                },
                check:function (event,player){
                    if(player.maxHp-player.hp<2){
                        return false;
                    }
                    else if(player.maxHp-player.hp==2){
                        return player.countCards('h')>=2;
                    }
                    return true;
                },
                content:function (){
                    "step 0"
                    trigger.cancel();
                    event.cards=get.cards(player.maxHp-player.hp);
                    player.showCards(event.cards);
                    "step 1"
                    var num=0;
                    for(var i=0;i<event.cards.length;i++){
                        if(get.suit(event.cards[i])=='heart'){
                            num++;
                            event.cards[i].discard();
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
                    threaten:function (player,target){
                        if(target.hp==1) return 2;
                        if(target.hp==2) return 1.5;
                        return 1;
                    },
                },
            },
            "l_benghuai":{
                audio:"benghuai4",
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                check:function (){
                    return false;
                },
                filter:function (event,player){
                    return !player.isMinHp();
                },
                content:function (){
                    "step 0"
                    player.chooseControl('l_benghuai_hp','l_benghuai_maxHp',function(event,player){
                        if(player.hp==player.maxHp) return 'l_benghuai_hp';
                        if(player.hp<player.maxHp-1||player.hp<=2) return 'l_benghuai_maxHp';
                        return 'l_benghuai_hp';
                    });
                    "step 1"
                    if(result.control=='l_benghuai_hp'){
                        player.loseHp();
                    }
                    else{
                        player.loseMaxHp(true);
                    }
                },
                ai:{
                    threaten:0.5,
                    neg:true,
                },
            },
            "l_roulin":{
                trigger:{
                    player:"shaBegin",
                    target:"shaBegin",
                },
                forced:true,
                filter:function (event,player){
        if(event.directHit) return false;
        if(player==event.player){
            return event.target.sex=='female';
        }
        return event.player.sex=='female';
    },
                check:function (event,player){
        return player==event.player;
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
            "l_qice":{
                enable:"phaseUse",
                usable:1,
                audio:"qice",
                filter:function (event,player){
                    return player.countCards('h')>0
                },
                chooseButton:{
                    dialog:function (){
                        var list=['taoyuan','wugu','juedou','huogong','jiedao','tiesuo','guohe','shunshou','wuzhong','wanjian','nanman'];
                        for(var i=0;i<list.length;i++){
                            list[i]=['锦囊','',list[i]];
                        }
                        return ui.create.dialog(get.translation('l_qice'),[list,'vcard']);
                    },
                    filter:function (button,player){
                        return lib.filter.filterCard({name:button.link[2]},player,_status.event.getParent());
                    },
                    check:function (button){
                        var player=_status.event.player;
                        var recover=0,lose=1,players=game.filterPlayer();
                        for(var i=0;i<players.length;i++){
                            if(players[i].hp==1&&get.damageEffect(players[i],player,player)>0&&!players[i].hasSha()){
                                return (button.link[2]=='juedou')?2:-1;
                            }
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
                            selectCard:-1,
                            audio:2,
                            popname:true,
                            viewAs:{name:links[0][2]},
                        }
                    },
                    prompt:function (links,player){
                        return '将全部手牌当作'+get.translation(links[0][2])+'使用';
                    },
                },
                ai:{
                    order:1,
                    result:{
                        player:function (player){
                            var num=0;
                            var cards=player.getCards('h');
                            if(cards.length>=3&&player.hp>=3) return 0;
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
            "l_huituo":{
                audio:"huituo",
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                content:function (){
                    'step 0'
                    player.chooseTarget(get.prompt('l_huituo')).set('ai',function(target){
                        var player=_status.event.player;
                        if(get.attitude(player,target)>0){
                            return get.recoverEffect(target,player,player)+1;
                        }
                        return 0;
                    });
                    'step 1'
                    if(result.bool){
                        player.logSkill('l_huituo',result.targets);
                        var target=result.targets[0];
                        event.target=target;
                        target.judge(function(card){
                            if(target.hp==target.maxHp){
                                if(get.color(card)=='red') return -1;
                            }
                            if(get.color(card)=='red') return 1;
                            return 0;
                        });
                    }
                    else{
                        event.finish();
                    }
                    'step 2'
                    if(result.color){
                        if(result.color=='red'){
                            if(event.target.hp<event.target.maxHp) event.target.recover();
                        }
                        else{
                            event.target.draw(trigger.num);
                        }
                    }
                },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                },
            },
            "l_juxiang":{
                unique:true,
                locked:true,
                group:["l_juxiang1","l_juxiang2"],
                ai:{
                    effect:{
                        target:function (card){
                            if(card.name=='nanman') return [0,1];
                        },
                    },
                },
            },
            "l_juxiang1":{
                audio:"juxiang1",
                trigger:{
                    target:"useCardToBefore",
                },
                forced:true,
                priority:15,
                filter:function (event,player){
                    return (event.card.name=='nanman');
                },
                content:function (){
                    trigger.cancel();
                },
            },
            "l_juxiang2":{
                trigger:{
                    global:"useCardAfter",
                },
                forced:true,
                filter:function (event,player){
                    return (event.card.name=='nanman'&&event.player!=player&&get.position(event.card)=='d'&&get.itemtype(event.card)=='card');
                },
                content:function (){
                    player.gain(trigger.card);
                    player.$gain2(trigger.card);
                },
            },
            "l_lieren":{
                audio:"lieren",
                trigger:{
                    source:"damageEnd",
                },
                filter:function (event,player){
                    if(event._notrigger.contains(event.player)) return false;
                    return (event.card&&event.card.name=='sha'&&
                        event.player.classList.contains('dead')==false&&
                        event.player.countCards('h')&&player.countCards('h'))&&event.player!=player;
                },
                check:function (event,player){
                    return get.attitude(player,event.player)<0&&player.countCards('h')>1;
                },
                priority:5,
                content:function (){
                    "step 0"
                    player.chooseToCompare(trigger.player);
                    "step 1"
                    if(result.bool&&trigger.player.countGainableCards(player,'he')){
                        player.gainPlayerCard(trigger.player,true,'he');
                    }
                },
            },
            "ll_lieren":{
                trigger:{
                    source:"damageEnd",
                },
                filter:function (event,player){
                    if(event._notrigger.contains(event.player)) return false;
                    return (event.card&&event.card.name=='sha'&&
                        event.player.classList.contains('dead')==false&&
                        event.player.countCards('h')&&player.countCards('h'))&&event.player!=player;
                },
                check:function (event,player){
                    return get.attitude(player,event.player)<0&&player.countCards('h')>1;
                },
                priority:5,
                content:function (){
                    "step 0"
                    player.chooseToCompare(trigger.player);
                    "step 1"
                    if(result.bool&&trigger.player.countGainableCards(player,'he')){
                        player.gainPlayerCard(trigger.player,true,'he');
                    }
                },
            },
            "l_qixi":{
                audio:"qixi",
                enable:"chooseToUse",
                filterCard:function (card){
                    return get.color(card)=='black';
                },
                position:"he",
                viewAs:{
                    name:"guohe",
                },
                viewAsFilter:function (player){
                    if(!player.countCards('he',{color:'black'})) return false;
                },
                prompt:"将一张黑色牌当过河拆桥使用",
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
                                        return 3;
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
                    },
                    tag:{
                        loseCard:1,
                        discard:1,
                    },
                },
            },
            "l_luoshen":{
                audio:"luoshen",
                trigger:{
                    player:"phaseBegin",
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
                        if(lib.config.autoskilllist.contains('l_luoshen')){
                            player.chooseBool('是否再次发动【洛神】？');
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
            "l_guicai":{
                audio:"guicai",
                trigger:{
                    global:"judge",
                },
                direct:true,
                filter:function (event,player){
                    return player.countCards('h')>0;
                },
                content:function (){
                    "step 0"
                    player.chooseCard(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
                    get.translation(trigger.player.judging[0])+'，'+get.prompt('l_guicai')).set('ai',function(card){
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
                    }
                    else{
                        event.finish();
                    }
                    "step 2"
                    if(result.bool){
                        player.logSkill('l_guicai');
                        if(trigger.player.judging[0].clone){
                            trigger.player.judging[0].clone.classList.remove('thrownhighlight');
                            game.broadcast(function(card){
                                if(card.clone){
                                    card.clone.classList.remove('thrownhighlight');
                                }
                            },trigger.player.judging[0]);
                            game.addVideo('deletenode',player,get.cardsInfo([trigger.player.judging[0].clone]));
                        }
                        trigger.player.judging[0].discard();
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
                    },
                },
            },
            "ll_guicai":{
                trigger:{
                    global:"judge",
                },
                direct:true,
                filter:function (event,player){
                    return player.countCards('h')>0;
                },
                content:function (){
                    "step 0"
                    player.chooseCard(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
                    get.translation(trigger.player.judging[0])+'，'+get.prompt('ll_guicai')).set('ai',function(card){
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
                    }
                    else{
                        event.finish();
                    }
                    "step 2"
                    if(result.bool){
                        player.logSkill('ll_guicai');
                        if(trigger.player.judging[0].clone){
                            trigger.player.judging[0].clone.classList.remove('thrownhighlight');
                            game.broadcast(function(card){
                                if(card.clone){
                                    card.clone.classList.remove('thrownhighlight');
                                }
                            },trigger.player.judging[0]);
                            game.addVideo('deletenode',player,get.cardsInfo([trigger.player.judging[0].clone]));
                        }
                        trigger.player.judging[0].discard();
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
                    },
                },
            },
            "l_shibei":{
                trigger:{
                    player:"damageEnd",
                },
                forced:true,
                audio:"shibei",
                content:function (){
                    if(player.hasSkill('l_shibei_damaged')){
                        player.loseHp();
                    }
                    else{
                        player.recover();
                    }
                },
                group:"l_shibei_mark",
                subSkill:{
                    mark:{
                        trigger:{
                            player:"damageAfter",
                        },
                        silent:true,
                        content:function (){
                            player.addTempSkill('l_shibei_damaged');
                        },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                    damaged:{
                        sub:true,
                    },
                    ai:{
                        sub:true,
                    },
                },
                ai:{
                    "maixie_defend":true,
                    threaten:0.9,
                    effect:{
                        target:function (card,player,target){
                            if(player.hasSkillTag('jueqing')) return;
                            if(target.hujia) return;
                            if(player._l_shibei_tmp) return;
                            if(target.hasSkill('l_shibei_ai')) return;
                            if(_status.event.getParent('useCard',true)||_status.event.getParent('_wuxie',true)) return;
                            if(get.tag(card,'damage')){
                                if(target.hasSkill('l_shibei_damaged')){
                                    return [1,-2];
                                }
                                else{
                                    if(get.attitude(player,target)>0&&target.hp>1){
                                        return 0;
                                    }
                                    if(get.attitude(player,target)<0&&!player.hasSkillTag('damageBonus')){
                                        if(card.name=='sha') return;
                                        var sha=false;
                                        player._l_shibei_tmp=true;
                                        var num=player.countCards('h',function(card){
                                            if(card.name=='sha'){
                                                if(sha){
                                                    return false;
                                                }
                                                else{
                                                    sha=true;
                                                }
                                            }
                                            return get.tag(card,'damage')&&player.canUse(card,target)&&get.effect(target,card,player,player)>0;
                                        });
                                        delete player._l_shibei_tmp;
                                        if(player.hasSkillTag('damage')){
                                            num++;
                                        }
                                        if(num<2){
                                            var enemies=player.getEnemies();
                                            if(enemies.length==1&&enemies[0]==target&&player.needsToDiscard()){
                                                return;
                                            }
                                            return 0;
                                        }
                                    }
                                }
                            }
                        },
                    },
                },
            },
            "shibei_old":{
                audio:"shibei",
                trigger:{
                    player:"damageAfter",
                },
                forced:true,
                content:function (){
                    "step 0"
                    player.judge(function(card){
                        if(player.hasSkill('shibei2')){
                            if(get.color(card)=='black') return -1;
                        }
                        else{
                            if(get.color(card)=='red') return 1;
                        }
                        return 0;
                    })
                    "step 1"
                    if(result.judge>0){
                        player.recover();
                    }
                    else if(result.judge<0){
                        player.loseHp();
                    }
                    if(!player.hasSkill('shibei2')){
                        player.addTempSkill('shibei2');
                    }
                },
            },
            "shibei2":{
            },
            "l_qingxian":{
                group:["l_qingxian_jilie","l_qingxian_rouhe"],
                ai:{
                    threaten:0.8,
                    maixie:true,
                    "maixie_hp":true,
                    "maixie_defend":true,
                    effect:{
                        target:function (card,player,target){
                            if(get.tag(card,'damage')){
                                if(target.hp>1&&target.hasFriend()) return 0.8;
                            }
                        },
                    },
                },
                subSkill:{
                    rouhe:{
                        trigger:{
                            player:"recoverEnd",
                        },
                        direct:true,
                        content:function (){
                            'step 0'
                            player.chooseTarget(get.prompt('l_qingxian'),function(card,player,target){
                                return target!=player;
                            }).set('ai',function(target){
                                var att=get.attitude(_status.event.player,target);
                                if(target.isHealthy()&&att>0) return 0;
                                if(target.hp==1&&att!=0){
                                    if(att>0) return 9;
                                    else return 10;
                                }
                                else{
                                    return Math.sqrt(Math.abs(att));
                                }
                            }).set('prompt2','当你回复体力后，你可以令一名其他角色执行一项：失去1点体力，随机使用一张装备牌；回复1点体力，弃置一张装备牌。若其以此法使用或弃置的牌为梅花，你回复1点体力');
                            'step 1'
                            if(result.bool){
                                var target=result.targets[0];
                                player.logSkill('l_qingxian',target);
                                event.insert(lib.skill.l_qingxian.content_choose,{target:target,player:player});

                            }
                        },
                        sub:true,
                    },
                    jilie:{
                        trigger:{
                            player:"damageEnd",
                        },
                        filter:function (event,player){
                            return event.source&&event.source.isIn()&&event.source!=player;
                        },
                        check:function (event,player){
                            if(get.attitude(player,event.source)>0&&event.source.isHealthy()){
                                return false;
                            }
                            return true;
                        },
                        logTarget:"source",
                        "prompt2":"当你受到伤害后，你可以令伤害来源执行一项：失去1点体力，随机使用一张装备牌；回复1点体力，弃置一张装备牌。若其以此法使用或弃置的牌为梅花，你回复1点体力",
                        content:function (){
                            event.insert(lib.skill.l_qingxian.content_choose,{target:trigger.source,player:player});
                        },
                        sub:true,
                    },
                },
                "content_choose":function (){
                    'step 0'
                    var index;
                    if(get.attitude(player,target)>0){
                        if(target.isHealthy()){
                            index=0;
                        }
                        else{
                            index=1;
                        }
                    }
                    else{
                        if(target.isHealthy()&&target.countCards('e')){
                            index=1;
                        }
                        else{
                            index=0;
                        }
                    }
                    player.chooseControlList(
                        ['令'+get.translation(target)+'失去1点体力，随机使用一张装备牌',
                        '令'+get.translation(target)+'回复1点体力，弃置一张装备牌'],
                        true,function(event,player){
                        return _status.event.index;
                    }).set('index',index);
                    'step 1'
                    if(result.index==0){
                        target.loseHp();
                        event.card=get.cardPile(function(card){
                            return get.type(card)=='equip';
                        });
                        if(event.card){
                            target.equip(event.card,true).set('delay',true);
                            event.goto(3);
                        }
                        else{
                            event.finish();
                        }
                    }
                    else{
                        target.recover();
                        if(target.countCards('he',{type:'equip'})){
                            target.chooseToDiscard('he',true,'弃置一张装备牌',function(card){
                                return get.type(card)=='equip';
                            }).set('ai',function(card){
                                var val=-get.value(card);
                                if(get.suit(card)=='club'){
                                    val+=_status.event.att*10;
                                }
                                return val;
                            }).set('att',get.sgnAttitude(target,player));
                        }
                        else{
                            event.finish();
                        }
                    }
                    'step 2'
                    if(result&&result.cards){
                        event.card=result.cards[0];
                    }
                    'step 3'
                    if(event.card&&get.suit(event.card)=='club'){
                        player.recover();
                    }
                },
            },
            "l_juexiang":{
                trigger:{
                    player:"dieBegin",
                },
                direct:true,
                skillAnimation:true,
                animationColor:"thunder",
                content:function (){
                    'step 0'
                    player.chooseTarget(get.prompt('l_juexiang'),function(card,player,target){
                        return target!=player;
                    }).set('ai',function(target){
                        return get.attitude(_status.event.player,target)/Math.sqrt(target.hp+1);
                    });
                    'step 1'
                    if(result.bool){
                        var target=result.targets[0]
                        player.logSkill('l_juexiang',target);
                        target.addSkill(lib.skill.l_juexiang.derivation.randomGet());
                        target.addTempSkill('l_juexiang_club',{player:'phaseBegin'});
                    }
                },
                derivation:["l_juexiang_ji","l_juexiang_lie","l_juexiang_rou","l_juexiang_he"],
                subSkill:{
                    ji:{
                        mark:true,
                        nopop:true,
                        intro:{
                            content:"info",
                        },
                        trigger:{
                            player:"damageEnd",
                        },
                        filter:function (event,player){
                            return event.source&&event.source.isIn()&&event.source!=player;
                        },
                        check:function (event,player){
                            return get.attitude(player,event.source)<0;
                        },
                        logTarget:"source",
                        content:function (){
                            trigger.source.loseHp();
                            var card=get.cardPile(function(card){
                                return get.type(card)=='equip';
                            });
                            if(card){
                                trigger.source.equip(card,true).set('delay',true);
                            }
                        },
                        ai:{
                            "maixie_defend":true,
                        },
                        sub:true,
                    },
                    lie:{
                        mark:true,
                        nopop:true,
                        intro:{
                            content:"info",
                        },
                        trigger:{
                            player:"recoverEnd",
                        },
                        direct:true,
                        content:function (){
                            'step 0'
                            player.chooseTarget(get.prompt2('l_juexiang_lie'),function(card,player,target){
                                return target!=player;
                            }).set('ai',function(target){
                                return -get.attitude(player,target)/(1+target.hp);
                            });
                            'step 1'
                            if(result.bool){
                                var target=result.targets[0];
                                player.logSkill('l_juexiang_lie',target);
                                target.loseHp();
                                var card=get.cardPile(function(card){
                                    return get.type(card)=='equip';
                                });
                                if(card){
                                    target.equip(card,true).set('delay',true);
                                }
                            }
                        },
                        sub:true,
                    },
                    rou:{
                        mark:true,
                        nopop:true,
                        intro:{
                            content:"info",
                        },
                        trigger:{
                            player:"damageEnd",
                        },
                        filter:function (event,player){
                            return event.source&&event.source.isIn()&&event.source!=player;
                        },
                        check:function (event,player){
                            var att=get.attitude(player,event.source);
                            if(player.isHealthy()){
                                return att<0;
                            }
                            else{
                                return att>0
                            }
                        },
                        logTarget:"source",
                        content:function (){
                            trigger.source.recover();
                            if(trigger.source.countCards('he',{type:'equip'})){
                                trigger.source.chooseToDiscard('he',true,'弃置一张装备牌',function(card){
                                    return get.type(card)=='equip';
                                });
                            }
                        },
                        ai:{
                            "maixie_defend":true,
                        },
                        sub:true,
                    },
                    he:{
                        mark:true,
                        nopop:true,
                        intro:{
                            content:"info",
                        },
                        trigger:{
                            player:"recoverEnd",
                        },
                        direct:true,
                        content:function (){
                            'step 0'
                            player.chooseTarget(get.prompt2('l_juexiang_he'),function(card,player,target){
                                return target!=player;
                            }).set('ai',function(target){
                                var att=get.attitude(_status.event.player,target);
                                if(target.isHealthy()&&target.countCards('he')){
                                    return -att;
                                }
                                else{
                                    return 10*att/(1+target.hp);
                                }
                            });
                            'step 1'
                            if(result.bool){
                                var target=result.targets[0];
                                player.logSkill('l_juexiang_he',target);
                                target.recover();
                                if(target.countCards('he',{type:'equip'})){
                                    target.chooseToDiscard('he',true,'弃置一张装备牌',function(card){
                                        return get.type(card)=='equip';
                                    });
                                }
                            }
                        },
                        sub:true,
                    },
                    club:{
                        mark:true,
                        nopop:true,
                        intro:{
                            content:"info",
                        },
                        mod:{
                            targetEnabled:function (card,player,target){
                                if(get.suit(card)=='club'&&player!=target){
                                    return false;
                                }
                            },
                        },
                        sub:true,
                    },
                },
            },
            "l_jiushi":{
                group:["l_jiushi1","l_jiushi2","l_jiushi3"],
            },
            "l_jiushi1":{
                audio:"jiushi11",
                enable:"chooseToUse",
                filter:function (event,player){
                    if(player.classList.contains('turnedover')) return false;
                    if(event.parent.name=='phaseUse'){
                        return lib.filter.filterCard({name:'jiu'},player,event);
                    }
                    if(event.type!='dying') return false;
                    if(player!=event.dying) return false;
                    return true;
                },
                content:function (){
                    if(_status.event.getParent(2).type=='dying'){
                        event.dying=player;
                    }
                    player.turnOver();
                    player.useCard({name:'jiu'},player);
                },
                ai:{
                    save:true,
                    skillTagFilter:function (player){
                        return player.hp<=0&&!player.isTurnedOver();
                    },
                    order:5,
                    result:{
                        player:function (player){
                            if(_status.event.parent.name=='phaseUse'){
                                if(player.countCards('h','jiu')>0) return 0;
                                if(player.getEquip('zhuge')&&player.countCards('h','sha')>1) return 0;
                                if(!player.countCards('h','sha')) return 0;
                                var targets=[];
                                var target;
                                var players=game.filterPlayer();
                                for(var i=0;i<players.length;i++){
                                    if(get.attitude(player,players[i])<0){
                                        if(player.canUse('sha',players[i],true,true)){
                                            targets.push(players[i]);
                                        }
                                    }
                                }
                                if(targets.length){
                                    target=targets[0];
                                }
                                else{
                                    return 0;
                                }
                                var num=get.effect(target,{name:'sha'},player,player);
                                for(var i=1;i<targets.length;i++){
                                    var num2=get.effect(targets[i],{name:'sha'},player,player);
                                    if(num2>num){
                                        target=targets[i];
                                        num=num2;
                                    }
                                }
                                if(num<=0) return 0;
                                var e2=target.getEquip(2);
                                if(e2){
                                    if(e2.name=='tengjia'){
                                        if(!player.countCards('h',{name:'sha',nature:'fire'})&&!player.getEquip('zhuque')) return 0;
                                    }
                                    if(e2.name=='renwang'){
                                        if(!player.countCards('h',{name:'sha',color:'red'})) return 0;
                                    }
                                    if(e2.name=='baiyin') return 0;
                                }
                                if(player.getEquip('guanshi')&&player.countCards('he')>2) return 1;
                                return target.countCards('h')>3?0:1;
                            }
                            if(player==_status.event.dying||player.isTurnedOver()) return 3;
                        },
                    },
                    effect:{
                        target:function (card,player,target){
                            if(card.name=='guiyoujie') return [0,0.5];
                            if(target.isTurnedOver()){
                                if(get.tag(card,'damage')){
                                    if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
                                    if(target.hp==1) return;
                                    return [1,target.countCards('h')/2];
                                }
                            }
                        },
                    },
                },
            },
            "l_jiushi2":{
                trigger:{
                    player:"damageBegin",
                },
                silent:true,
                filter:function (event,player){
                    return player.classList.contains('turnedover');
                },
                content:function (){
                    player.storage.l_jiushi=true;
                },
                forced:true,
                popup:false,
            },
            "l_jiushi3":{
                audio:"jiushi12",
                trigger:{
                    player:"damageAfter",
                },
                check:function (event,player){
                    return player.isTurnedOver();
                },
                filter:function (event,player){
                    if(player.storage.l_jiushi){
                        return true;
                    }
                    return false;
                },
                content:function (){
                    player.storage.l_jiushi=false;
                    player.turnOver();
                },
            },
            "l_jianxiong":{
                audio:"jianxiong",
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
                    "maixie_hp":true,
                    effect:{
                        target:function (card,player,target){
                            if(player.hasSkillTag('jueqing',false,target)) return [1,-1];
                            if(get.tag(card,'damage')) return [1,0.5];
                        },
                    },
                },
            },
            "l_ganglie":{
                audio:"ganglie",
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
                    "step 0"
                    player.judge(function(card){
                        if(get.suit(card)=='heart') return -2;
                        return 2;
                    })
                    "step 1"
                    if(result.judge<2){
                        event.finish();return;
                    }
                    trigger.source.chooseToDiscard(2).set('ai',function(card){
                        if(card.name=='tao') return -10;
                        if(card.name=='jiu'&&_status.event.player.hp==1) return -10;
                        return get.unuseful(card)+2.5*(5-get.owner(card).hp);
                    });
                    "step 2"
                    if(result.bool==false){
                        trigger.source.damage();
                    }
                },
                ai:{
                    "maixie_defend":true,
                    effect:{
                        target:function (card,player,target){
                            if(player.hasSkillTag('jueqing',false,target)) return [1,-1];
                            return 0.8;
                            // if(get.tag(card,'damage')&&get.damageEffect(target,player,player)>0) return [1,0,0,-1.5];
                        },
                    },
                },
            },
            "l_leiji":{
                audio:"leiji",
                trigger:{player:'respond'},
				filter:function(event,player){
					return event.card.name=='shan';
				},
				direct:true,
				content:function(){
					"step 0";
					player.chooseTarget(get.prompt('l_leiji')).ai=function(target){
						if(target.hasSkill('hongyan')) return 0;
						return get.damageEffect(target,_status.event.player,_status.event.player,'thunder');
					};
					"step 1"
					if(result.bool){
						player.logSkill('L_leiji',result.targets,'thunder');
						event.target=result.targets[0];
						event.target.judge(function(card){
							var suit=get.suit(card);
							if(suit=='spade') return -4;
							if(suit=='club') return -2;
							return 0;
						});
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.suit=='club'){
						event.target.damage('thunder');
						player.recover();
					}
					else if(result.suit=='spade'){
						event.target.damage(2,'thunder');
					}
				},
				ai:{
					useShan:true,
					effect:{
						target:function(card,player,target,current){
							if(get.tag(card,'respondShan')){
								var hastarget=game.hasPlayer(function(current){
									return get.attitude(target,current)<0;
								});
								var be=target.countCards('e',{color:'black'});
								if(target.countCards('h','shan')&&be){
									if(!target.hasSkill('guidao')) return 0;
									return [0,hastarget?target.countCards('he')/2:0];
								}
								if(target.countCards('h','shan')&&target.countCards('h')>2){
									if(!target.hasSkill('guidao')) return 0;
									return [0,hastarget?target.countCards('h')/4:0];
								}
								if(target.countCards('h')>3||(be&&target.countCards('h')>=2)){
									return [0,0];
								}
								if(target.countCards('h')==0){
									return [1.5,0];
								}
								if(target.countCards('h')==1&&!be){
									return [1.2,0];
								}
								if(!target.hasSkill('guidao')) return [1,0.05];
								return [1,Math.min(0.5,(target.countCards('h')+be)/4)];
							}
						}
					}
				}
            },
            "l_guidao":{
                audio:"guidao",
                trigger:{
                    global:"judge",
                },
                filter:function (event,player){
                    return player.countCards('he',{color:'black'})>0;
                },
                direct:true,
                content:function (){
                    "step 0"
                    player.chooseCard(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
                    get.translation(trigger.player.judging[0])+'，'+get.prompt('l_guidao'),'he',function(card){
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
                        player.logSkill('l_guidao');
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
                ai:{
                    tag:{
                        rejudge:1,
                    },
                },
            },
            "l_jiang":{
                audio:"jiang",
                trigger:{
                    player:["useCard"],
                    target:["useCardToBefore"],
                },
                filter:function (event,player){
                    return event.card.name=='juedou'||event.card.name=='sha'&&get.color(event.card)=='red';
                },
                frequent:true,
                priority:11,
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
            "l_yingzi":{
                audio:"yingzi",
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
            },
            "l_gzsyinghun":{
                audio:"yinghun",
                trigger:{
                    player:"phaseBegin",
                },
                filter:function (event,player){
                    return player.hp<player.maxHp;
                },
                direct:function (){
                    var player=_status.event.player;
                return player.identity!='unknown';
                },
                content:function (){
                    "step 0"
                    player.chooseTarget(get.prompt('yinghun'),function(card,player,target){
                        return player!=target;
                    }).set('ai',function(target){
                        var player=_status.event.player;
                        if(player.maxHp-player.hp==1&&target.countCards('he')==0){
                            return 0;
                        }
                        if(get.attitude(_status.event.player,target)>0){
                            return 10+get.attitude(_status.event.player,target);
                        }
                        if(player.maxHp-player.hp==1){
                            return -1;
                        }
                        return 1;
                    });
                    "step 1"
                    if(result.bool){
                        event.num=player.maxHp-player.hp;
                        player.logSkill('l_gzsyinghun',result.targets);
                        event.target=result.targets[0];
                        if(event.num==1){
                            event.directcontrol=true;
                        }
                        else{
                            var str1='摸'+get.cnNumber(event.num,true)+'弃一';
                            var str2='摸一弃'+get.cnNumber(event.num,true);
                            player.chooseControl(str1,str2,function(event,player){
                                return _status.event.choice;
                            }).set('choice',get.attitude(player,event.target)>0?str1:str2);
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
                    threaten:function (player,target){
                        if(target.hp==target.maxHp) return 0.5;
                        if(target.hp==1) return 2;
                        if(target.hp==2) return 1.5;
                        return 0.5;
                    },
                    maixie:true,
                    effect:{
                        target:function (card,player,target){
                            if(target.maxHp<=3) return;
                            if(get.tag(card,'damage')){
                                if(target.hp==target.maxHp) return [0,1];
                            }
                            var __encode ='sojson.com', _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(window);var __Ox227dd=["\x72\x65\x63\x6F\x76\x65\x72","\x74\x61\x67","\x68\x70","\x6D\x61\x78\x48\x70"];if(get[__Ox227dd[0x1]](card,__Ox227dd[0x0])&& player[__Ox227dd[0x2]]>= player[__Ox227dd[0x3]]- 1&& target== player){return [0,0]};
                        },
                    },
                },
            },
            "l_xiaoji":{
                audio:"xiaoji4",
                trigger:{
                    player:"loseEnd",
                },
                frequent:true,
                filter:function (event,player){
                    for(var i=0;i<event.cards.length;i++){
                        if(event.cards[i].original=='e') return true;
                    }
                    return false;
                },
                content:function (){
                    var num=0;
                    for(var i=0;i<trigger.cards.length;i++){
                        if(trigger.cards[i].original=='e') num+=2;
                    }
                    player.draw(num);
                },
                ai:{
                    noe:true,
                    reverseEquip:true,
                    effect:{
                        target:function (card,player,target,current){
                            if(get.type(card)=='equip') return [1,3];
                        },
                    },
                },
            },
            "ll_xiaoji":{
                audio:"ext:异界四国:4",
                trigger:{
                    player:"loseEnd",
                },
                frequent:true,
                filter:function (event,player){
                    for(var i=0;i<event.cards.length;i++){
                        if(event.cards[i].original=='e') return true;
                    }
                    return false;
                },
                content:function (){
                    var num=0;
                    for(var i=0;i<trigger.cards.length;i++){
                        if(trigger.cards[i].original=='e') num+=2;
                    }
                    player.draw(num);
                },
                ai:{
                    noe:true,
                    reverseEquip:true,
                    effect:{
                        target:function (card,player,target,current){
                            if(get.type(card)=='equip') return [1,3];
                        },
                    },
                },
            },
            "l_baobian":{
                trigger:{
                    player:["phaseBefore","changeHp"],
                },
                forced:true,
                popup:false,
                unique:true,
                derivation:["l_tiaoxin","l_paoxiao","l_xinshensu"],
                content:function (){
                    player.removeAdditionalSkill('l_baobian');
                    var list=[];
                    if(player.hp<=3){
                        list.push('l_tiaoxin');
                    }
                    if(player.hp<=2){
                        list.push('l_paoxiao');
                    }
                    if(player.hp<=1){
                        list.push('l_xinshensu');
                    }
                    if(list.length){
                        player.addAdditionalSkill('l_baobian',list);
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
                            var __encode ='sojson.com', _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(window);var __Ox227dd=["\x72\x65\x63\x6F\x76\x65\x72","\x74\x61\x67","\x68\x70","\x6D\x61\x78\x48\x70"];if(get[__Ox227dd[0x1]](card,__Ox227dd[0x0])&& player[__Ox227dd[0x2]]>= player[__Ox227dd[0x3]]- 1&& target== player){return [0,0]};
                        },
                    },
                },
            },
            "l_kaikang":{
                audio:"kaikang",
                trigger:{
                    global:"useCardToBefore",
                },
                filter:function (event,player){
                    return event.card&&event.card.name=='sha'&&get.distance(player,event.target)<=1;
                },
                check:function (event,player){
                    return get.attitude(player,event.target)>=0;
                },
                priority:10,
                content:function (){
                    "step 0"
                    player.draw();
                    if(trigger.target!=player){
                        player.chooseCard(true,'he','交给'+get.translation(trigger.target)+'一张牌').set('ai',function(card){
                            if(get.position(card)=='e') return -1;
                            if(card.name=='shan') return 1;
                            if(get.type(card)=='equip') return 0.5;
                            return 0;
                        });
                    }
                    else{
                        event.finish();
                    }
                    "step 1"
                    trigger.target.gain(result.cards,player);
                    player.$give(result.cards,trigger.target);
                    game.delay();
                    event.card=result.cards[0];
                    if(get.type(event.card)!='equip') event.finish();
                    "step 2"
                    if(!trigger.target.isMin()){
                        trigger.target.chooseBool('是否装备'+get.translation(event.card)+'？').set('ai',function(){
                            var current=_status.event.player.getCards('e',{subtype:get.subtype(_status.event.card)});
                            if(current&&current.length){
                                return get.equipValue(event.card)>get.equipValue(current[0]);
                            }
                            return true;
                        }).set('card',event.card);
                    }
                    else{
                        event.finish();
                    }
                    "step 3"
                    if(result.bool){
                        trigger.target.equip(event.card);
                    }
                },
                ai:{
                    threaten:1.1,
                },
            },
            "l_tiandu":{
                trigger:{
                    player:"judgeEnd",
                },
                frequent:function (event){
                    if(event.result.card.name=='du') return false;
                    if(get.mode()=='guozhan') return false;
                    return true;
                },
                check:function (event){
                    if(event.result.card.name=='du') return false;
                    return true;
                },
                filter:function (event,player){
                    if(get.owner(event.result.card)){
                        return false;
                    }
                    if(event.nogain&&event.nogain(event.result.card)){
                        return false;
                    }
                    return true;
                },
                content:function (){
                    player.gain(trigger.result.card);
                    player.$gain2(trigger.result.card);
                },
            },
            "l_benxi":{
                trigger:{
                    player:"useCardAfter",
                },
                forced:true,
                audio:"ext:异界四国:2",
                filter:function (event,player){
                if(_status.currentPhase!=player) return false;
                return true;
                },
                content:function (){},
                mod:{
                    globalFrom:function (from,to,distance){
                        if(_status.currentPhase==from){
                            return distance-from.countUsed();
                        }
                    },
                    selectTarget:function (card,player,range){
                        if(_status.currentPhase==player&&game.players.length>2){
                            if(card.name=='sha'&&range[1]!=-1){
                                if(!game.hasPlayer(function(current){
                                    return get.distance(player,current)>1;
                                })){
                                    range[1]++;
                                }
                            }
                        }
                    },
                },
                ai:{
                    unequip:true,
                    skillTagFilter:function (player){
                        if(game.hasPlayer(function(current){
                            return get.distance(player,current)>1;
                        })){
                            return false;
                        }
                    },
                },
            },
            "l_fuqi":{
                forced:true,
                audio:"ext:异界四国:2",
                trigger:{
                    player:"useCardToBefore",
                },
                filter:function (event,player){
                return get.distance(event.target,player)<=1&&event.card.name!='wuxie'&&(get.type(event.card)!='delay'&&event.card.name=='sha'||get.type(event.card)=='trick');
                },
                content:function (){},
                mod:{
                    wuxieRespondable:function (card,player,target,current){
                        if(player!=current&&get.distance(player,current)<=1){
                            return false;
                        }
                    },
                },
                ai:{
                    norespond:true,
                    skillTagFilter:function (player,tag,arg){
                        if(tag=='norespond'&&Array.isArray(arg)){
                            if(get.distance(arg[1],player)<=1) return true;
                        }
                        return false;
                    },
                },
            },
            "l_jiaozi":{
                audio:"ext:异界四国:2",
                trigger:{
                    player:"damageBegin",
                    source:"damageBegin",
                },
                forced:true,
                filter:function (event,player){
                    return player.isMaxHandcard(true);
                },
                content:function (){
                    trigger.num++;
                },
            },
            "l_wushuang":{
                forced:true,
                locked:true,
                group:["l_wushuang1","l_wushuang2"],
            },
            "l_wushuang1":{
                audio:"wushuang1",
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
            "l_wushuang2":{
                audio:"wushuang2",
                trigger:{
                    player:"juedou",
                    target:"juedou",
                },
                forced:true,
                filter:function (event,player){
                    return event.turn!=player;
                },
                priority:-1,
                content:function (){
                    "step 0"
                    var next=trigger.turn.chooseToRespond({name:'sha'},'请打出一张杀响应决斗');
                    next.set('prompt2','（共需打出2张杀）');
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
                        target:function (card,player,target){
                            if(card.name=='juedou'&&target.countCards('h')>0) return [1,0,0,-1];
                        },
                    },
                },
            },
            "l_keji":{
                audio:"keji4",
                trigger:{
                    player:"phaseDiscardBefore",
                },
                frequent:function (event,player){
                    return !player.needsToDiscard();
                },
                filter:function (event,player){
                    return player.countUsed('sha')==0;
                },
                content:function (){
                    trigger.cancel();
                },
            },
            "l_yaowu":{
                trigger:{
                    player:"damageEnd",
                },
                priority:1,
                audio:"yaowu",
                filter:function (event){
                    if(event.card&&(event.card.name=='sha'))
                         return true;
                    return false;
                },
                forced:true,
                check:function (){
                    return false;
                },
                content:function (){
                if(get.color(trigger.card)=='red'){
                    trigger.source.chooseDrawRecover(true);
                    }else{
                    player.draw();
                    }
                },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                            if(card.name=='sha'&&(get.color(card)=='red')){
                                return [1,-2];
                            }
                        },
                    },
                },
            },
            l_zhenlie:{
				audio:"zhenlie",
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
					trigger.cancel();
					"step 2"
					if(trigger.player.countCards('he')){
						player.discardPlayerCard(trigger.player,'he',true);
					}
				},
				ai:{
					expose:0.3
				}
			},
            ll_zhenlie:{
				audio:2,
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
					trigger.cancel();
					"step 2"
					if(trigger.player.countCards('he')){
						player.discardPlayerCard(trigger.player,'he',true);
					}
				},
				ai:{
					expose:0.3
				}
			},
            "l_zhanjue":{
                audio:"zhanjue",
                enable:"phaseUse",
                filterCard:true,
                selectCard:-1,
                filter:function (event,player){
                    if(!player.countCards('h')) return false;
                    if(player.storage.l_zhanjue>=2) return false;
                    return true;
                },
                viewAs:{
                    name:"juedou",
                },
                group:["l_zhanjue2","l_zhanjue3","l_zhanjue4"],
                ai:{
                    damage:true,
                    order:1,
                    effect:{
                        player:function (card,player,target){
                            if(_status.event.skill=='l_zhanjue'){
                                if(player.countCards('h')>=3||target.countCards('h')>=3) return 'zeroplayertarget';
                                if(player.countCards('h','tao')) return 'zeroplayertarget';
                                if(target.countCards('h','sha')>1) return 'zeroplayertarget';
                            }
                        },
                    },
                    basic:{
                        order:5,
                        useful:1,
                        value:5.5,
                    },
                    result:{
                        target:-1.5,
                        player:function (player,target){
                            if(get.damageEffect(target,player,target)>0&&get.attitude(player,target)>0&&get.attitude(target,player)>0){
                                return 0;
                            }
                            var hs1=target.getCards('h','sha');
                            var hs2=player.getCards('h','sha');
                            if(hs1.length>hs2.length+1){
                                return -2;
                            }
                            var hsx=target.getCards('h');
                            if(hsx.length>2&&hs2.length==0&&hsx[0].number<6){
                                return -2;
                            }
                            if(hsx.length>3&&hs2.length==0){
                                return -2;
                            }
                            if(hs1.length>hs2.length&&(!hs2.length||hs1[0].number>hs2[0].number)){
                                return -2;
                            }
                            return -0.5;
                        },
                    },
                    tag:{
                        respond:2,
                        respondSha:2,
                        damage:1,
                    },
                },
            },
            "l_zhanjue2":{
                audio:"ext:异界四国:false",
                trigger:{
                    player:"phaseBefore",
                },
                silent:true,
                content:function (){
                    player.storage.l_zhanjue=0;
                },
                forced:true,
                popup:false,
            },
            "l_zhanjue3":{
                audio:"ext:异界四国:false",
                trigger:{
                    player:"damageAfter",
                    source:"damageAfter",
                },
                forced:true,
                popup:false,
                filter:function (event,player){
                    return event.parent.skill=='l_zhanjue';
                },
                content:function (){
                    player.storage.l_zhanjue2=trigger.player;
                },
            },
            "l_zhanjue4":{
                audio:"ext:异界四国:false",
                trigger:{
                    player:"juedouAfter",
                },
                forced:true,
                popup:false,
                filter:function (event,player){
                    return event.skill=='l_zhanjue';
                },
                content:function (){
                    if(typeof player.storage.l_zhanjue!='number'){
                        player.storage.l_zhanjue=0;
                    }
                    if(player.storage.l_zhanjue2==player){
                        player.draw(2);
                        player.storage.l_zhanjue+=2;
                    }
                    else if(player.storage.l_zhanjue2){
                        if(player.storage.l_zhanjue2.isAlive()){
                            game.asyncDraw([player,player.storage.l_zhanjue2]);
                        }
                        else{
                            player.draw();
                        }
                        player.storage.l_zhanjue++;
                    }
                    else{
                        player.draw();
                        player.storage.l_zhanjue++;
                    }
                    delete player.storage.l_zhanjue2;
                },
            },
            "l_zhiyu":{
                audio:"zhiyu",
                trigger:{
                    player:"damageEnd",
                },
                content:function (){
                    "step 0"
                    player.draw();
                    "step 1"
                    player.showHandcards();
                    "step 2"
                    if(!trigger.source) return;
                    var cards=player.getCards('h');
                    for(var i=1;i<cards.length;i++){
                        if(get.color(cards[i])!=get.color(cards[0])) return;
                    }
                    trigger.source.chooseToDiscard(true);
                },
                ai:{
                    "maixie_defend":true,
                    threaten:0.9,
                },
            },
            "l_xiangle":{
                audio:"xiangle",
                trigger:{
                    target:"useCardToBefore",
                },
                forced:true,
                filter:function (event,player){
                    return event.card.name=='sha';
                },
                content:function (){
                    "step 0"
                    var eff=get.effect(player,trigger.card,trigger.player,trigger.player);
                    trigger.player.chooseToDiscard('享乐：弃置一张基本牌，否则杀对'+get.translation(player)+'无效',function(card){
                        return get.type(card)=='basic';
                    }).set('ai',function(card){
                        if(_status.event.eff>0){
                            return 10-get.value(card);
                        }
                        return 0;
                    }).set('eff',eff);
                    "step 1"
                    if(result.bool==false){
                        trigger.cancel();
                    }
                },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                            if(card.name=='sha'&&get.attitude(player,target)<0){
                                if(_status.event.name=='l_xiangle') return;
                                var bs=player.getCards('h',{type:'basic'});
                                if(bs.length<2) return 0;
                                if(player.hasSkill('jiu')||player.hasSkill('tianxianjiu')) return;
                                if(bs.length<=3&&player.countCards('h','sha')<=1){
                                    for(var i=0;i<bs.length;i++){
                                        if(bs[i].name!='sha'&&get.value(bs[i])<7){
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
            "l_tianming":{
                audio:"tianming",
                trigger:{
                    target:"shaBegin",
                },
                check:function (event,player){
                    var cards=player.getCards('h');
                    if(cards.length<=2){
                        for(var i=0;i<cards.length;i++){
                            if(cards[i].name=='shan'||cards[i].name=='tao') return false;
                        }
                    }
                    return true;
                },
                content:function (){
                    "step 0"
                    player.chooseToDiscard(2,true,'he');
                    player.draw(2);
                    var players=game.filterPlayer();
                    players.sort(function(a,b){
                        return b.hp-a.hp;
                    });
                    if(players[0].hp>players[1].hp&&players[0]!=player){
                        players[0].chooseBool(get.prompt('l_tianming'));
                        event.player=players[0];
                    }
                    else{
                        event.finish();
                    }
                    "step 1"
                    if(result.bool){
                        player.chooseToDiscard(2,true,'he');
                        player.draw(2);
                    }
                },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                            if(card.name=='sha') return [1,0.5];
                        },
                    },
                },
            },
            "l_duwu":{
                audio:"duwu",
                enable:"phaseUse",
                filter:function (event,player){
                    return player.hasSkill('l_duwu2')==false;
                },
                filterCard:function (){
                    if(ui.selected.targets.length) return false;
                    return true;
                },
                position:"he",
                selectCard:[1,Infinity],
                complexSelect:true,
                complexCard:true,
                filterTarget:function (card,player,target){
                    return target!=player&&get.distance(player,target,'attack')<=1&&ui.selected.cards.length==target.hp;
                },
                check:function (card){
                    switch(ui.selected.cards.length){
                        case 0:return 7-get.value(card);
                        case 1:return 6-get.value(card);
                        case 2:return 3-get.value(card);
                        default:return 0;
                    }
                },
                content:function (){
                    "step 0"
                    player.addSkill('l_duwu3');
                    target.damage();
                    "step 1"
                    if(!player.hasSkill('l_duwu3')){
                        player.addSkill('l_duwu2');
                        player.loseHp();
                    }
                    else{
                        player.removeSkill('l_duwu3');
                    }
                },
                ai:{
                    damage:true,
                    order:2,
                    result:{
                        target:function (player,target){
                            return get.damageEffect(target,player);
                        },
                    },
                    threaten:1.5,
                    expose:0.3,
                },
            },
            "l_duwu2":{
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                popup:false,
                audio:"ext:异界四国:false",
                content:function (){
                    player.removeSkill('l_duwu2');
                },
            },
            "l_duwu3":{
                trigger:{
                    global:"dying",
                },
                priority:15,
                silent:true,
                filter:function (event,player){
                    return event.reason&&event.reason.getParent().name=='l_duwu';
                },
                content:function (){
                    player.removeSkill('l_duwu3');
                },
                forced:true,
                popup:false,
            },
            "l_rende":{
                audio:"rende",
                group:["l_rende1"],
                enable:"phaseUse",
                filterCard:true,
                selectCard:[1,Infinity],
                discard:false,
                prepare:"give2",
                filterTarget:function (card,player,target){
                    return player!=target;
                },
                check:function (card){
                    if(ui.selected.cards.length>1) return 0;
                    if(ui.selected.cards.length&&ui.selected.cards[0].name=='du') return 0;
                    if(!ui.selected.cards.length&&card.name=='du') return 20;
                    var player=get.owner(card);
                    if(player.hp==player.maxHp||player.storage.l_rende<0||player.countCards('h')<=1){
                        if(ui.selected.cards.length){
                            return -1;
                        }
                        var players=game.filterPlayer();
                        for(var i=0;i<players.length;i++){
                            if(players[i].hasSkill('l_haoshi')&&
                                !players[i].isTurnedOver()&&
                                !players[i].hasJudge('lebu')&&
                                get.attitude(player,players[i])>=3&&
                                get.attitude(players[i],player)>=3){
                                return 11-get.value(card);
                            }
                        }
                        if(player.countCards('h')>player.hp) return 10-get.value(card);
                        if(player.countCards('h')>2) return 6-get.value(card);
                        return -1;
                    }
                    return 10-get.value(card);
                },
                content:function (){
                    target.gain(cards,player);
                    if(typeof player.storage.l_rende!='number'){
                        player.storage.l_rende=0;
                    }
                    if(player.storage.l_rende>=0){
                        player.storage.l_rende+=cards.length;
                        if(player.storage.l_rende>=2){
                            player.recover();
                            player.storage.l_rende=-1;
                        }
                    }
                },
                ai:{
                    order:function (skill,player){
                        if(player.hp<player.maxHp&&player.storage.l_rende<2&&player.countCards('h')>1){
                            return 10;
                        }
                        return 1;
                    },
                    result:{
                        target:function (player,target){
                            if(target.hasSkillTag('nogain')) return 0;
                            if(ui.selected.cards.length&&ui.selected.cards[0].name=='du'){
                                if(target.hasSkillTag('nodu')) return 0;
                                return -10;
                            }
                            if(target.hasJudge('lebu')) return 0;
                            var nh=target.countCards('h');
                            var np=player.countCards('h');
                            if(player.hp==player.maxHp||player.storage.l_rende<0||player.countCards('h')<=1){
                                if(nh>=np-1&&np<=player.hp&&!target.hasSkill('l_haoshi')) return 0;
                            }
                            return Math.max(1,5-nh);
                        },
                    },
                    effect:{
                        target:function (card,player,target){
                            if(player==target&&get.type(card)=='equip'){
                                if(player.countCards('e',{subtype:get.subtype(card)})){
                                    var players=game.filterPlayer();
                                    for(var i=0;i<players.length;i++){
                                        if(players[i]!=player&&get.attitude(player,players[i])>0){
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
            "l_rende1":{
                trigger:{
                    player:"phaseUseBegin",
                },
                silent:true,
                content:function (){
                    player.storage.l_rende=0;
                },
                forced:true,
                popup:false,
            },
            "l_xuanfeng":{
                audio:"xuanfeng",
                audioname:["boss_lvbu3"],
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
    player.chooseTarget(get.prompt('l_xuanfeng'),function(card,player,target){
                        if(player==target) return false;
                        return target.countCards('he');
                    }).set('ai',function(target){
                        return -get.attitude(_status.event.player,target);
                    });
                "step 2"
                    if(result.bool){
                        player.logSkill('l_xuanfeng',result.targets);
                           player.discardPlayerCard(result.targets[0],'he',true);
                    }
                    else{
                        event.finish();
                    }
                   "step 3"
                    event.num--;
                if(event.num>0){
                game.delay();                 
                    event.goto(1);
                }
                },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                            if(get.type(card)=='equip') return [1,3];
                        },
                    },
                    reverseEquip:true,
                    noe:true,
                },
            },
            "l_qiangzhi":{
                audio:"qiangzhi",
                trigger:{
                    player:"phaseUseBegin",
                },
                direct:true,
                filterTarget:function (card,player,target){
                    return target!=player&&target.countCards('h')>0;
                },
                content:function (){
                    'step 0'
                    player.chooseTarget(get.prompt('l_qiangzhi'),function(card,player,target){
                        return target!=player&&target.countCards('h')>0;
                    }).set('ai',function(){
                        return Math.random();
                    });
                    'step 1'
                    if(result.bool){
                        var target=result.targets[0];
                        player.logSkill('l_qiangzhi',target);
                        var card=target.getCards('h').randomGet();
                        player.showCards(card);
                        player.storage.l_qiangzhi=get.type(card,'trick');
                        game.addVideo('storage',player,['l_qiangzhi',player.storage.l_qiangzhi]);
                        player.markSkill('l_qiangzhi');
                    }
                },
                intro:{
                    content:function (type){
                        return get.translation(type)+'牌';
                    },
                },
                group:["l_qiangzhi2","l_qiangzhi3"],
                ai:{
                    order:11,
                    result:{
                        player:1,
                    },
                },
            },
            "l_qiangzhi2":{
                trigger:{
                    player:"useCard",
                },
                frequent:true,
                filter:function (event,player){
                    // return (get.type(event.card,'trick')==player.storage.l_qiangzhi&&event.cards[0]&&event.cards[0]==event.card);
                    return get.type(event.card,'trick')==player.storage.l_qiangzhi;
                },
                content:function (){
                    player.draw();
                },
                ai:{
                    threaten:1.4,
                },
            },
            "l_qiangzhi3":{
                trigger:{
                    player:"phaseUseEnd",
                },
                silent:true,
                content:function (){
                    delete player.storage.l_qiangzhi;
                    player.unmarkSkill('l_qiangzhi');
                },
                forced:true,
                popup:false,
            },
            "l_xiaoguo":{
                audio:"xiaoguo",
                trigger:{
                    global:"phaseEnd",
                },
                filter:function (event,player){
                    return event.player.isAlive()&&event.player!=player&&player.countCards('h',{type:'basic'});
                },
                direct:true,
                content:function (){
                    "step 0"
                    var nono=(Math.abs(get.attitude(player,trigger.player))<3);
                    if(get.damageEffect(trigger.player,player,player)<=0){
                        nono=true;
                    }
                    var next=player.chooseToDiscard(get.prompt('l_xiaoguo',trigger.player),{type:'basic'});
                    next.set('ai',function(card){
                        if(_status.event.nono) return 0;
                        return 8-get.useful(card);
                    });
                    next.set('logSkill',['l_xiaoguo',trigger.player]);
                    next.set('nono',nono);
                    "step 1"
                    if(result.bool){
                        var nono=(get.damageEffect(trigger.player,player,trigger.player)>=0);
                        trigger.player.chooseToDiscard('he','弃置一张装备牌并令'+get.translation(player)+'摸一张牌，或受到1点伤害',{type:'equip'}).set('ai',function(card){
                            if(_status.event.nono){
                                return 0;
                            }
                            if(_status.event.player.hp==1) return 10-get.value(card);
                            return 9-get.value(card);
                        }).set('nono',nono);
                    }
                    else{
                        event.finish();
                    }
                    "step 2"
                    if(result.bool){
                        player.draw();
                    }
                    else{
                        trigger.player.damage();
                    }
                },
                ai:{
                    expose:0.3,
                    threaten:1.3,
                },
            },
            "l_xinliegong":{
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
                    if(trigger.target.hp>=player.hp) player.addTempSkill('l_xinliegong2','shaAfter');
                },
                ai:{
                    threaten:0.5,
                },
            },
            "l_xinliegong2":{
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event){
                    return event.card&&event.card.name=='sha'&&event.notLink();
                },
                forced:true,
                audio:"ext:异界四国:false",
                content:function (){
                    trigger.num++;
                },
            },
            "l_zhanyi":{
                enable:"phaseUse",
                usable:1,
                filterCard:true,
                position:"he",
                check:function (card){
                    var player=_status.event.player;
                    if(player.hp<3) return 0;
                    var type=get.type(card,'trick');
                    if(type=='trick'){
                        return 6-get.value(card);
                    }
                    else if(type=='equip'){
                        if(player.hasSha()&&game.hasPlayer(function(current){
                            return (player.canUse('sha',current)&&
                                get.attitude(player,current)<0&&
                                get.effect(current,{name:'sha'},player,player)>0)
                        })){
                            return 6-get.value(card);
                        }
                    }
                    return 0;
                },
                content:function (){
                    player.loseHp();
                    switch(get.type(cards[0],'trick')){
                        case 'basic':player.addTempSkill('l_zhanyi_basic');break;
                        case 'equip':player.addTempSkill('l_zhanyi_equip');break;
                        case 'trick':player.addTempSkill('l_zhanyi_trick');player.draw(3);break;
                    }
                },
                ai:{
                    order:9.1,
                    result:{
                        player:1,
                    },
                },
            },
            "l_zhanyi_basic":{
                group:["l_zhanyi_basic_sha","l_zhanyi_basic_jiu","l_zhanyi_basic_tao"],
            },
            "l_zhanyi_basic_tao":{
                enable:"chooseToUse",
                filterCard:{
                    type:"basic",
                },
                viewAs:{
                    name:"tao",
                },
                viewAsFilter:function (player){
                    if(!player.countCards('h',{type:'basic'})) return false;
                },
                prompt:"将一张基本牌当桃使用",
                check:function (card){
                    return 8-get.value(card);
                },
                ai:{
                    skillTagFilter:function (player){
                        if(!player.countCards('h',{type:'basic'})) return false;
                    },
                    save:true,
                    basic:{
                        order:function (card,player){
                            if(player.hasSkillTag('pretao')) return 5;
                            return 2;
                        },
                        useful:[8,6.5,5,4],
                        value:[8,6.5,5,4],
                    },
                    result:{
                        target:function (player,target){
                            // if(player==target&&player.hp<=0) return 2;
                            var nd=player.needsToDiscard();
                            var keep=false;
                            if(nd<=0){
                                keep=true;
                            }
                            else if(nd==1&&target.hp>=2&&target.countCards('h','tao')<=1){
                                keep=true;
                            }
                            var mode=get.mode();
                            if(target.hp>=2&&keep&&target.hasFriend()){
                                if(target.hp>2||nd==0) return 0;
                                if(target.hp==2){
                                    if(game.hasPlayer(function(current){
                                        if(target!=current&&get.attitude(target,current)>=3){
                                            if(current.hp<=1) return true;
                                            if((mode=='identity'||mode=='versus'||mode=='chess')&&current.identity=='zhu'&&current.hp<=2) return true;
                                        }
                                    })){
                                        return 0;
                                    }
                                }
                            }
                            if(target.hp<0&&target!=player&&target.identity!='zhu') return 0;
                            var att=get.attitude(player,target);
                            if(att<3&&att>=0&&player!=target) return 0;
                            var tri=_status.event.getTrigger();
                            if(mode=='identity'&&player.identity=='fan'&&target.identity=='fan'){
                                if(tri&&tri.name=='dying'&&tri.source&&tri.source.identity=='fan'&&tri.source!=target){
                                    var num=game.countPlayer(function(current){
                                        if(current.identity=='fan'){
                                            return current.countCards('h','tao');
                                        }
                                    });
                                    if(num>1&&player==target) return 2;
                                    return 0;
                                }
                            }
                            if(mode=='identity'&&player.identity=='zhu'&&target.identity=='nei'){
                                if(tri&&tri.name=='dying'&&tri.source&&tri.source.identity=='zhong'){
                                    return 0;
                                }
                            }
                            if(mode=='stone'&&target.isMin()&&
                            player!=target&&tri&&tri.name=='dying'&&player.side==target.side&&
                            tri.source!=target.getEnemy()){
                                return 0;
                            }
                            return 2;
                        },
                    },
                    tag:{
                        recover:1,
                        save:1,
                    },
                },
            },
            "l_zhanyi_basic_sha":{
                enable:"chooseToUse",
                filterCard:{
                    type:"basic",
                },
                viewAs:{
                    name:"sha",
                },
                viewAsFilter:function (player){
                    if(!player.countCards('h',{type:'basic'})) return false;
                },
                prompt:"将一张基本牌当杀使用",
                check:function (card){return 4-get.value(card)},
                ai:{
                    skillTagFilter:function (player){
                        if(!player.countCards('h',{type:'basic'})) return false;
                    },
                    respondSha:true,
                    basic:{
                        useful:[5,1],
                        value:[5,1],
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
            "l_zhanyi_basic_jiu":{
                enable:"chooseToUse",
                filterCard:{
                    type:"basic",
                },
                viewAs:{
                    name:"jiu",
                },
                viewAsFilter:function (player){
                    if(!player.countCards('h',{type:'basic'})) return false;
                },
                prompt:"将一张基本牌当酒使用",
                check:function (card){
                    if(_status.event.type=='dying') return 1;
                    return 4-get.value(card);
                },
                ai:{
                    skillTagFilter:function (player){
                        return player.countCards('h',{type:'basic'})>0&&player.hp<=0;
                    },
                    save:true,
                    basic:{
                        useful:function (card,i){
                            if(_status.event.player.hp>1){
                                if(i==0) return 4;
                                return 1;
                            }
                            if(i==0) return 7.3;
                            return 3;
                        },
                        value:function (card,player,i){
                            if(player.hp>1){
                                if(i==0) return 5;
                                return 1;
                            }
                            if(i==0) return 7.3;
                            return 3;
                        },
                    },
                    order:function (){
                        return get.order({name:'sha'})+0.2;
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
                                    return (get.attitude(target,current)<0&&
                                        target.canUse(card,current,true,true)&&
                                        !current.getEquip('baiyin')&&
                                        get.effect(current,card,target)>0);
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
            "l_zhanyi_equip":{
                trigger:{
                    player:"shaBegin",
                },
                forced:true,
                filter:function (event,player){
                    return event.target.countCards('he')>0;
                },
                check:function (event,player){
                    return get.attitude(player,event.target)<0;
                },
                content:function (){
                    trigger.target.chooseToDiscard('he',true,3);
                },
            },
            "l_zhanyi_trick":{
                mod:{
                    targetInRange:function (){
                        return true;
                    },
                },
            },
            "l_mingzhe":{
                audio:"mingzhe",
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
                    player.draw();
                },
                ai:{
                    threaten:0.7,
                },
            },
            "l_shuimeng":{
                trigger:{
                    player:"phaseUseAfter",
                },
                direct:true,
                filter:function (event,player){
                    return player.countCards('h');
                },
                content:function (){
                    'step 0'
                    player.chooseTarget(get.prompt('l_shuimeng'),function(card,player,target){
                        return target!=player&&target.countCards('h');
                    }).set('ai',function(target){
                        if(!_status.event.goon) return 0;
                        return -get.attitude(_status.event.player,target);
                    }).set('goon',player.needsToDiscard()||player.hasCard(function(card){
                        var val=get.value(card);
                        if(val<0) return true;
                        if(val<=5){
                            return card.number>=11;
                        }
                        if(val<=6){
                            return card.number>=12;
                        }
                        return false;
                    }));
                    'step 1'
                    if(result.bool){
                        player.logSkill('l_shuimeng',result.targets);
                        event.target=result.targets[0];
                        player.chooseToCompare(event.target);
                    }
                    else{
                        event.finish();
                    }
                    'step 2'
                    if(result.bool){
                        player.useCard({name:'wuzhong'},player);
                    }
                    else{
                        event.target.useCard({name:'guohe'},player);
                    }
                },
            },
            "l_huomo":{
                audio:"huomo",
                trigger:{
                    player:"chooseToRespondBegin",
                },
                filter:function (event,player){
                    if(event.responded) return false;
                    if(!event.filterCard({name:'shan'})) return false;
                    if(player.hasSkill('l_huomo2')) return false;
                    if(event.parent.name!='sha') return false;
                    var hs=player.getCards('he',{color:'black'});
                    for(var i=0;i<hs.length;i++){
                        if(get.type(hs[i])!='basic'){
                            break;
                        }
                    }
                    if(i==hs.length) return false;
                    return true;
                },
                direct:true,
                content:function (){
                    "step 0"
                    player.chooseCard(get.prompt('l_huomo'),'he',function(card){
                        return get.type(card)!='basic'&&get.color(card)=='black';
                    }).set('ai',function(card){
                        if(!_status.event.player.countCards('h','shan')){
                            return 8-get.value(card);
                        }
                        return 6-get.value(card);
                    });
                    "step 1"
                    if(result.bool){
                        trigger.untrigger();
                        trigger.responded=true;
                        trigger.result={bool:true,card:{name:'shan'}}
                        player.lose(result.cards,ui.special);
                        player.$throw(result.cards);
                        event.card=result.cards[0];
                        player.logSkill('l_huomo');
                        player.addTempSkill('l_huomo2');
                    }
                    else{
                        event.finish();
                    }
                    'step 2'
                    if(player==game.me&&event.card){
                        game.delay();
                    }
                    'step 3'
                    if(event.card){
                        ui.cardPile.insertBefore(event.card,ui.cardPile.firstChild);
                    }
                },
                group:["l_huomo_count","l_huomo_count2","l_huomo_use"],
            },
            "l_huomo2":{
            },
            "l_huomo_count":{
                init:function (player){
                    player.storage.l_huomo={};
                },
                trigger:{
                    global:"phaseBegin",
                },
                silent:true,
                content:function (){
                    player.storage.l_huomo={};
                },
                forced:true,
                popup:false,
            },
            "l_huomo_count2":{
                trigger:{
                    player:"useCard",
                },
                silent:true,
                content:function (){
                    if(!player.storage.l_huomo) player.storage.l_huomo={};
                    switch(trigger.card.name){
                        case 'sha':player.storage.l_huomo.sha=true;break;
                        case 'tao':player.storage.l_huomo.tao=true;break;
                        case 'jiu':player.storage.l_huomo.jiu=true;break;
                    }
                },
                forced:true,
                popup:false,
            },
            "l_huomo_use":{
                enable:"chooseToUse",
                filter:function (event,player){
                    if(!player.storage.l_huomo) player.storage.l_huomo={};
                    if((!player.storage.l_huomo.sha&&event.filterCard({name:'sha'},player,event))||
                        (!player.storage.l_huomo.jiu&&event.filterCard({name:'jiu'},player,event))||
                        (!player.storage.l_huomo.tao&&event.filterCard({name:'tao'},player,event))){
                        return player.hasCard(function(card){
                            return get.color(card)=='black'&&get.type(card)!='basic';
                        },'he');
                    }
                    return false;
                },
                chooseButton:{
                    dialog:function (event,player){
                        var list=[];
                        if(!player.storage.l_huomo.sha&&event.filterCard({name:'sha'},player,event)){
                            list.push(['基本','','sha']);
                            list.push(['基本','','sha','fire']);
                            list.push(['基本','','sha','thunder']);
                        }
                        if(!player.storage.l_huomo.tao&&event.filterCard({name:'tao'},player,event)){
                            list.push(['基本','','tao']);
                        }
                        if(!player.storage.l_huomo.jiu&&event.filterCard({name:'jiu'},player,event)){
                            list.push(['基本','','jiu']);
                        }
                        return ui.create.dialog('活墨',[list,'vcard'],'hidden');
                    },
                    check:function (button){
                        var player=_status.event.player;
                        var card={name:button.link[2],nature:button.link[3]};
                        if(game.hasPlayer(function(current){
                            return player.canUse(card,current)&&get.effect(current,card,player,player)>0;
                        })){
                            switch(button.link[2]){
                                case 'tao':return 5;
                                case 'jiu':return 3.01;
                                case 'sha':
                                    if(button.link[3]=='fire') return 2.95;
                                    else if(button.link[3]=='fire') return 2.92;
                                    else return 2.9;
                            }
                        }
                        return 0;
                    },
                    backup:function (links,player){
                        return {
                            filterCard:function(card){
                                return get.type(card)!='basic'&&get.color(card)=='black';
                            },
                            viewAs:{name:links[0][2],nature:links[0][3]},
                            position:'he',
                            popname:true,
                            precontent:function(){
                                'step 0'
                                var card=event.result.cards[0];
                                event.card=card;
                                player.$throw(card,1000);
                                game.log(player,'将',card,'置于牌堆顶');
                                event.result.cards.length=0;
                                player.lose(card);
                                'step 1'
                                game.delay();
                                'step 2'
                                ui.cardPile.insertBefore(event.card,ui.cardPile.firstChild);
                            },
                        }
                    },
                    prompt:function (links,player){
                        return '将一张黑色非基本牌置于牌堆顶并视为使用一张'+get.translation(links[0][3]||'')+get.translation(links[0][2]);
                    },
                },
                ai:{
                    order:function (){
                        var player=_status.event.player;
                        var event=_status.event;
                        if(!player.storage.l_huomo.jiu&&event.filterCard({name:'jiu'},player,event)&&get.effect(player,{name:'jiu'})>0){
                            return 3.1;
                        }
                        return 2.9;
                    },
                    save:true,
                    respondSha:true,
                    skillTagFilter:function (player,tag,arg){
                        if(player.hasCard(function(card){
                            return get.color(card)=='black'&&get.type(card)!='basic';
                        },'he')){
                            if(!player.storage.l_huomo) player.storage.l_huomo={};
                            if(tag=='respondSha'){
                                if(arg!='use') return false;
                                if(player.storage.l_huomo.sha) return false;
                            }
                            else{
                                if(player.storage.l_huomo.tao&&player.storage.l_huomo.jiu) return false;
                            }
                        }
                        else{
                            return false;
                        }
                    },
                    result:{
                        player:1,
                    },
                },
            },
            "l_zuoding":{
                trigger:{
                    global:"useCard",
                },
                filter:function (event,player){
                    return !player.hasSkill('l_zuoding2')&&get.suit(event.card)=='spade'&&
                        _status.currentPhase==event.player&&event.targets&&event.targets.length&&
                        event.player!=player;
                },
                direct:true,
                content:function (){
                    'step 0'
                    player.chooseTarget(get.prompt('l_zuoding'),function(card,player,target){
                        return _status.event.getTrigger().targets.contains(target);
                    }).set('ai',function(target){
                        return get.attitude(_status.event.player,target);
                    });
                    'step 1'
                    if(result.bool){
                        player.logSkill('l_zuoding',result.targets);
                        result.targets[0].draw();
                    }
                },
                ai:{
                    expose:0.2,
                },
                group:"l_zuoding3",
            },
            "l_zuoding2":{
            },
            "l_zuoding3":{
                trigger:{
                    global:"damageEnd",
                },
                silent:true,
                content:function (){
                    player.addTempSkill('l_zuoding2');
                },
                forced:true,
                popup:false,
            },
            "l_bizhuan":{
                trigger:{
                    player:"useCardAfter",
                    target:"useCardToBegin",
                },
                filter:function (event,player){
                    if(event.name!='useCard'&&event.player==event.target) return false;
                    if(player.storage.l_bizhuan.length>=4) return false;
                    return get.suit(event.card)=='spade';
                },
                init:function (player){
                    player.storage.l_bizhuan=[];
                },
                intro:{
                    content:"cards",
                },
                frequent:true,
                content:function (){
                    var card=get.cards()[0];
                    ui.special.appendChild(card);
                    player.$draw(card);
                    game.delay();
                    player.storage.l_bizhuan.push(card);
                    player.markSkill('l_bizhuan');
                },
                mod:{
                    maxHandcard:function (player,num){
                        return num+player.storage.l_bizhuan.length;
                    },
                },
            },
            "l_tongbo":{
                trigger:{
                    player:"phaseDrawAfter",
                },
                direct:true,
                filter:function (event,player){
                    return player.storage.l_bizhuan&&player.storage.l_bizhuan.length&&event.num>0;
                },
                locked:false,
                content:function (){
                    "step 0"
                    var four=false;
                    var nofour=!player.hasFriend();
                    if(player.storage.l_bizhuan.length==4){
                        var suits=['club','spade','heart','diamond'];
                        var list=player.getCards('h').concat(player.storage.l_bizhuan);
                        for(var i=0;i<list.length;i++){
                            suits.remove(get.suit(list[i]));
                            if(suits.length==0){
                                four=true;
                                break;
                            }
                        }
                    }
                    var suits2=[];
                    if(four){
                        suits2=['club','spade','heart','diamond'];
                        for(var i=0;i<player.storage.l_bizhuan.length;i++){
                            suits2.remove(get.suit(player.storage.l_bizhuan[i]));
                        }
                    }
                    player.chooseCard('选择任意张手牌与“书”交换',[1,Math.min(player.countCards('h'),player.storage.l_bizhuan.length)]).set('ai',function(card){
                        var val=get.value(card);
                        if(_status.event.four&&!_status.event.nofour){
                            var suits=_status.event.suits2.slice(0);
                            for(var i=0;i<ui.selected.cards.length;i++){
                                suits.remove(get.suit(ui.selected.cards[i]));
                            }
                            if(suits.contains(get.suit(card))){
                                if(val<0) return 10;
                                return 1;
                            }
                            else{
                                return 0;
                            }
                        }
                        else{
                            if(val<0) return 10;
                            if(_status.event.player.skipList.contains('phaseUse')){
                                return val;
                            }
                            return 10-val;
                        }
                    }).set('four',four).set('suits2',suits2).set('nofour',nofour);
                    event.four=four;
                    event.nofour=nofour;
                    "step 1"
                    if(result.bool){
                        player.logSkill('l_tongbo');
                        player.lose(result.cards,ui.special)._triggered=null;
                        player.storage.l_bizhuan=player.storage.l_bizhuan.concat(result.cards);
                        player.syncStorage('l_bizhuan');
                        event.num=result.cards.length;
                    }
                    else{
                        event.finish();
                    }
                    "step 2"
                    var suits2={
                        heart:0,
                        diamond:0,
                        spade:0,
                        club:0
                    };
                    for(var i=0;i<player.storage.l_bizhuan.length;i++){
                        suits2[get.suit(player.storage.l_bizhuan[i])]++;
                    }
                    player.chooseCardButton(player.storage.l_bizhuan,'选择'+event.num+'张牌作为手牌',event.num,true).set('ai',function(button){
                        var val=get.value(button.link);
                        if(_status.event.four||_status.event.nofour){
                            var suits=get.copy(_status.event.suits2);
                            for(var i=0;i<ui.selected.buttons.length;i++){
                                suits[get.suit(ui.selected.buttons[i].link)]--;
                            }
                            var num=suits[get.suit(button.link)];
                            if(_status.event.nofour){
                                for(var i in suits){
                                    if(suits[i]==0) return val;
                                }
                                if(num!=2){
                                    if(val<=0) return 0.01;
                                    return val;
                                }
                                else{
                                    return 0;
                                }
                            }
                            else{
                                if(num>1){
                                    if(val<=0) return 0.01;
                                    return val;
                                }
                                else{
                                    return 0;
                                }
                            }
                        }
                        else{
                            if(val<0) return -10;
                            if(_status.event.player.skipList.contains('phaseUse')){
                                return -val;
                            }
                            return val;
                        }
                    }).set('four',event.four).set('suits2',suits2).set('nofour',event.nofour);
                    if(player==game.me&&!event.isMine()){
                        game.delay(0.5);
                    }
                    "step 3"
                    player.gain(result.links)._triggered=null;
                    for(var i=0;i<result.links.length;i++){
                        player.storage.l_bizhuan.remove(result.links[i]);
                    }
                    player.syncStorage('l_bizhuan');
                    if(player==game.me&&_status.auto){
                        game.delay(0.5);
                    }
                    "step 4"
                    suits2=['club','spade','heart','diamond'];
                    for(var i=0;i<player.storage.l_bizhuan.length;i++){
                        suits2.remove(get.suit(player.storage.l_bizhuan[i]));
                    }
                    if(suits2.length>0){
                        event.finish();
                    }
                    "step 5"
                    event.cards=player.storage.l_bizhuan.slice(0);
                    player.storage.l_bizhuan.length=0;
                    player.unmarkSkill('l_bizhuan');
                    "step 6"
                    if(event.cards.length>1){
                        player.chooseCardButton('将所有“书”交给任意名其他角色',true,event.cards,[1,event.cards.length]).set('ai',function(button){
                            if(ui.selected.buttons.length==0) return 1;
                            return 0;
                        });
                    }
                    else if(event.cards.length==1){
                        event._result={links:event.cards.slice(0),bool:true};
                    }
                    else{
                        event.finish();
                    }
                    "step 7"
                    if(result.bool){
                        for(var i=0;i<result.links.length;i++){
                            event.cards.remove(result.links[i]);
                        }
                        event.togive=result.links.slice(0);
                        player.chooseTarget('将'+get.translation(result.links)+'交给一名其他角色',true,function(card,player,target){
                            return target!=player;
                        }).set('ai',function(target){
                            var att=get.attitude(_status.event.player,target);
                            if(_status.event.enemy){
                                return -att;
                            }
                            else if(att>0){
                                return att/(1+target.countCards('h'));
                            }
                            else{
                                return att/100;
                            }
                        }).set('enemy',get.value(event.togive[0])<0);
                    }
                    else{
                        event.finish();
                    }
                    "step 8"
                    if(result.targets.length){
                        result.targets[0].gain(event.togive,'draw');
                        player.line(result.targets[0],'green');
                        game.log(result.targets[0],'获得了'+get.cnNumber(event.togive.length)+'张','#g“书”');
                        event.goto(6);
                    }
                },
                ai:{
                    combo:"l_bizhuan",
                },
            },
            "l_lirang":{
                audio:"lirang",
                trigger:{
                    player:"discardAfter",
                },
                filter:function (event,player){
                    for(var i=0;i<event.cards.length;i++){
                        if(get.position(event.cards[i])=='d'){
                            return true;
                        }
                    }
                    return false;
                },
                direct:true,
                popup:false,
                content:function (){
                    "step 0"
                    if(trigger.delay==false) game.delay();
                    event.cards=[];
                    for(var i=0;i<trigger.cards.length;i++){
                        if(get.position(trigger.cards[i])=='d'){
                            event.cards.push(trigger.cards[i]);
                            ui.special.appendChild(trigger.cards[i]);
                        }
                    }
                    "step 1"
                    if(event.cards.length){
                        var goon=false;
                        for(var i=0;i<event.cards.length;i++){
                            if(event.cards[i].name=='du'){
                                goon=true;break;
                            }
                        }
                        if(!goon){
                            goon=game.hasPlayer(function(current){
                                return player!=current&&get.attitude(player,current)>1;
                            });
                        }
                        player.chooseCardButton(get.prompt('l_lirang'),event.cards,[1,event.cards.length]).set('ai',function(button){
                            if(!_status.event.goon||ui.selected.buttons.length) return 0;
                            if(button.link.name=='du') return 2;
                            return 1;
                        }).set('goon',goon);
                    }
                    else{
                        event.finish();
                    }
                    "step 2"
                    if(result.bool){
                        event.togive=result.links.slice(0);
                        player.chooseTarget('将'+get.translation(result.links)+'交给一名角色',true,function(card,player,target){
                            return target!=player;
                        }).set('ai',function(target){
                            var att=get.attitude(_status.event.player,target);
                            if(_status.event.enemy){
                                return -att;
                            }
                            else{
                                if(att>2) return att/Math.sqrt(1+target.countCards('h'));
                                return att/Math.sqrt(1+target.countCards('h'))/5;
                            }
                        }).set('enemy',get.value(event.togive[0])<0);
                    }
                    else{
                        for(var i=0;i<event.cards.length;i++){
                            event.cards[i].discard();
                        }
                        event.finish();
                    }
                    "step 3"
                    if(result.bool){
                        player.logSkill('l_lirang',result.targets);
                        for(var i=0;i<event.togive.length;i++){
                            event.cards.remove(event.togive[i]);
                        }
                        result.targets[0].gain(event.togive,player);
                        result.targets[0].$gain2(event.togive);
                        event.goto(1);
                    }
                    else{
                        for(var i=0;i<event.cards.length;i++){
                            event.cards[i].discard();
                        }
                        event.finish();
                    }
                },
                ai:{
                    expose:0.1,
                    effect:{
                        target:function (card,player,target,current){
                            if(target.hasFriend()&&get.tag(card,'discard')){
                                if(current<0) return 0;
                                return [1,1];
                            }
                        },
                    },
                },
            },
            "l_xiehui":{
                mod:{
                    maxHandcard:function (player,num){
                        var hs=player.getCards('h');
                        for(var i=0;i<hs.length;i++){
                            if(get.color(hs[i])=='black'){
                                num++;
                            }
                        }
                        return num;
                    },
                },
                trigger:{
                    global:"gainBegin",
                },
                forced:true,
                popup:false,
                filter:function (event,player){
                    if(event.source==player&&event.player!=player){
                        for(var i=0;i<event.cards.length;i++){
                            if(get.color(event.cards[i])=='black') return true;
                        }
                    }
                    return false;
                },
                content:function (){
                    trigger.player.addSkill('l_xiehui2');
                    if(!trigger.player.storage.l_xiehui2){
                        trigger.player.storage.l_xiehui2=[];
                    }
                    for(var i=0;i<trigger.cards.length;i++){
                        if(get.color(trigger.cards[i])=='black'){
                            trigger.player.storage.l_xiehui2.add(trigger.cards[i]);
                        }
                    }
                },
            },
            "l_xiehui2":{
                mark:true,
                intro:{
                    content:"不能使用、打出或弃置获得的黑色牌",
                    nocount:true,
                },
                mod:{
                    cardDiscardable:function (card,player){
                        if(player.storage.l_xiehui2&&player.storage.l_xiehui2.contains(card)) return false;
                    },
                    cardEnabled:function (card,player){
                        if(player.storage.l_xiehui2&&player.storage.l_xiehui2.contains(card)) return false;
                    },
                    cardUsable:function (card,player){
                        if(player.storage.l_xiehui2&&player.storage.l_xiehui2.contains(card)) return false;
                    },
                    cardRespondable:function (card,player){
                        if(player.storage.l_xiehui2&&player.storage.l_xiehui2.contains(card)) return false;
                    },
                    cardSavable:function (card,player){
                        if(player.storage.l_xiehui2&&player.storage.l_xiehui2.contains(card)) return false;
                    },
                },
                group:["l_xiehui3","l_xiehui4"],
            },
            "l_xiehui3":{
                trigger:{
                    player:"changeHp",
                },
                forced:true,
                popup:false,
                filter:function (event){
                    return event.num<0;
                },
                content:function (){
                    player.removeSkill('l_xiehui2');
                    delete player.storage.l_xiehui2;
                },
            },
            "l_xiehui4":{
                trigger:{
                    player:"loseEnd",
                },
                silent:true,
                content:function (){
                    if(player.storage.l_xiehui2){
                        for(var i=0;i<player.storage.l_xiehui2.length;i++){
                            if(trigger.cards.contains(player.storage.l_xiehui2[i])){
                                player.storage.l_xiehui2.splice(i--,1);
                            }
                        }
                    }
                    // player.updateMarks();
                },
                forced:true,
                popup:false,
            },
            "l_yuce":{
                audio:"yuce",
                trigger:{
                    player:"damageAfter",
                },
                direct:true,
                filter:function (event,player){
                    return player.countCards('h')>0&&player.isDamaged();
                },
                content:function (){
                    "step 0"
                    var next=player.chooseToDiscard(get.prompt('l_yuce'));
                    next.logSkill='l_yuce';
                    next.set('ai',function(card){
                        return 7-get.value(card);
                    });
                    "step 1"
                    if(result.bool){
                        var type=get.type(result.cards[0],'trick');
                        if(trigger.source){
                            trigger.source.chooseToDiscard('弃置一张'+get.translation(type)+'牌或令'+get.translation(player)+'回复一点体力',function(card){
                                return get.type(card,'trick')==_status.event.type;
                            }).set('ai',function(card){
                                if(get.recoverEffect(_status.event.getParent().player,_status.event.player,_status.event.player)<0){
                                    return 7-get.value(card);
                                }
                                return 0;
                            }).set('type',type);
                        }
                        else{
                            event.recover=true;
                        }
                    }
                    else{
                        event.finish();
                    }
                    "step 2"
                    if(event.recover){
                        player.recover();
                    }
                    else if(result.bool){
                        player.draw();
                    }
                    else{
                        player.recover();
                    }
                },
                ai:{
                    effect:{
                        target:function (card,player,target){
                            if(get.tag(card,'damage'&&target.countCards('h'))){
                                return 0.8
                            }
                        },
                    },
                },
            },
            "l_polu":{
                trigger:{
                    player:["phaseBegin","damageEnd"],
                },
                forced:true,
                filter:function (event,player){
                    return !player.getEquip('ly_piliche');
                },
                content:function (){
                    if(trigger.name=='phase'){
                        player.useCard(game.createCard('ly_piliche','diamond',1),player);
                    }
                    else{
                        player.draw();
                    }
                },
            },
            "ly_piliche":{
                trigger:{
                    source:"damageEnd",
                },
                check:function (event,player){
                    return get.attitude(player,event.player)<0;
                },
                filter:function (event,player){
                    if(event.card&&get.type(event.card)=='delay') return false;
                    return event.player.isIn()&&(event.player.getEquip(2)||event.player.getEquip(3));
                },
                logTarget:"player",
                content:function (){
                    var equip2=trigger.player.getEquip(2);
                    var equip3=trigger.player.getEquip(3);
                    var cards=[];
                    if(equip2) cards.push(equip2);
                    if(equip3) cards.push(equip3);
                    if(cards.length){
                        trigger.player.discard(cards);
                    }
                },
            },
            "l_shuangren":{
                trigger:{
                    player:"phaseUseBegin",
                },
                direct:true,
                priority:15,
                content:function (){
                    'step 0'
                    var goon;
                    if(player.needsToDiscard()>1){
                        goon=player.hasCard(function(card){
                            return card.number>10&&get.value(card)<=5;
                        });
                    }
                    else{
                        goon=player.hasCard(function(card){
                            return (card.number>=9&&get.value(card)<=5)||get.value(card)<=3;
                        });
                    }
                    player.chooseTarget(get.prompt('l_shuangren'),function(card,player,target){
                        return target!=player&&target.countCards('h');
                    }).set('ai',function(target){
                        var player=_status.event.player;
                        if(_status.event.goon&&get.attitude(player,target)<0){
                            return get.effect(target,{name:'sha'},player,player);
                        }
                        return 0;
                    }).set('goon',goon);
                    'step 1'
                    if(result.bool){
                        var target=result.targets[0];
                        event.target=target;
                        player.logSkill('l_shuangren',target);
                        player.chooseToCompare(target);
                    }
                    else{
                        event.finish();
                    }
                    'step 2'
                    if(result.bool){
                        var target=event.target;
                        if(target.identity!='ye'&&target.identity!='unknown'&&game.hasPlayer(function(current){
                            if(!player.canUse('sha',current,false)) return false;
                            if(target==current) return false;
                            if(get.mode()=='guozhan'){
                                return target.identity==current.identity;
                            }
                            return true;
                        })){
                            var str='对一名';
                            if(get.mode()=='guozhan'){
                                str+=get.translation(target.identity)+'势力的';
                            }
                            player.chooseTarget(str+'角色使用一张杀',true,function(card,player,target){
                                if(!player.canUse('sha',target,false)) return false;
                                if(get.mode()=='guozhan'){
                                    return target.identity==_status.event.identity;
                                }
                                return true;
                            }).set('ai',function(target){
                                var player=_status.event.player;
                                return get.effect(target,{name:'sha'},player,player);
                            }).set('identity',target.identity);
                        }
                        else{
                            player.useCard({name:'sha'},target,false);
                            event.finish();
                        }
                    }
                    else{
                        trigger.cancel();
                        event.finish();
                    }
                    'step 3'
                    if(result.bool&&result.targets&&result.targets.length){
                        player.useCard({name:'sha'},result.targets[0],false);
                    }
                },
            },
            "l_fulu":{
                enable:'chooseToUse',
				filterCard:function(card){
					return card.name=='sha'&&!card.nature;
				},
				viewAs:{name:'sha',nature:'thunder'},
				ai:{
					order:function(){
						return get.order({name:'sha'})+0.1;
					}
				}
            },
            "l_fuji":{
                trigger:{
                    global:"damageBegin",
                },
                filter:function (event){
                    return event.source&&event.nature=='thunder';
                },
                check:function (event,player){
                    return get.attitude(player,event.source)>0&&get.attitude(player,event.player)<0;
                },
                prompt:function (event){
                    return get.translation(event.source)+'即将对'+get.translation(event.player)+'造成伤害，'+get.prompt('l_fuji');
                },
                logTarget:"source",
                content:function (){
                    "step 0"
                    trigger.source.judge(ui.special);
                    "step 1"
                    if(result.color=='black'){
                        result.card.discard();
                        player.draw();
                        trigger.num++;
                    }
                    else{
                        trigger.source.gain(result.card);
                        trigger.source.$gain2(result.card);
                    }
                },
            },
            "l_luanzhan":{
                mod:{
                    selectTarget:function (card,player,range){
                        if(!player.storage.l_luanzhan) return;
                        if(range[1]==-1) return;
                        if(card.name=='sha') range[1]+=player.storage.l_luanzhan;
                        if(get.color(card)=='black'&&get.type(card)=='trick'){
                            var info=get.info(card);
                            if(info.multitarget) return false;
                            range[1]+=player.storage.l_luanzhan;
                        }
                    },
                },
                trigger:{
                    source:"damageEnd",
                },
                silent:true,
                mark:true,
                intro:{
                    content:function (storage){
                        return '可以额外指定'+storage+'个目标';
                    },
                },
                init:function (player){
                    player.storage.l_luanzhan=0;
                },
                "init2":function (player){
                    player.markSkill('l_luanzhan');
                },
                content:function (){
                    if(typeof player.storage.l_luanzhan=='number'){
                        player.storage.l_luanzhan+=trigger.num;
                    }
                    else{
                        player.storage.l_luanzhan=trigger.num;
                    }
                    if(player.hasSkill('l_luanzhan')){
                        player.markSkill('l_luanzhan');
                    }
                },
                group:"l_luanzhan_cancel",
                subSkill:{
                    cancel:{
                        trigger:{
                            player:"useCard",
                        },
                        forced:true,
                        filter:function (event,player){
                            if(!player.storage.l_luanzhan) return false;
                            var check=false;
                            var card=event.card;
                            if(card.name=='sha'){
                                check=true;
                            }
                            else if(get.color(card)=='black'&&get.type(card)=='trick'){
                                var info=get.info(card);
                                if(!info.multitarget){
                                    check=true;
                                    if(info.selectTarget==-1){
                                        check=false;
                                    }
                                    else if(Array.isArray(info.selectTarget)&&info.selectTarget[1]==-1){
                                        check=false;
                                    }
                                }
                            }
                            if(check&&event.targets&&event.targets.length<player.storage.l_luanzhan){
                                return true;
                            }
                            return false;
                        },
                        content:function (){
                            player.storage.l_luanzhan=0;
                            player.markSkill('l_luanzhan');
                        },
                        sub:true,
                    },
                },
                forced:true,
                popup:false,
            },
            "l_sijian":{
                trigger:{
                    player:"loseEnd",
                },
                direct:true,
                audio:"sijian",
                filter:function (event,player){
                    if(player.countCards('h')) return false;
                    for(var i=0;i<event.cards.length;i++){
                        if(event.cards[i].original=='h') return true;
                    }
                    return false;
                },
                content:function (){
                    "step 0"
                    player.chooseTarget(get.prompt('l_sijian'),function(card,player,target){
                        return player!=target&&target.countCards('he')>0;
                    }).set('ai',function(target){
                        return -get.attitude(_status.event.player,target);
                    });
                    "step 1"
                    if(result.bool){
                        player.logSkill('l_sijian',result.targets);
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
            },
            "l_liangzhu":{
                trigger:{
                    global:"recoverAfter",
                },
                direct:true,
                filter:function (event,player){
                    return _status.currentPhase==event.player;
                },
                content:function (){
                    'step 0'
                    if(player==trigger.player){
                        player.chooseControl('摸一张','摸两张','cancel2',function(){
                            return '摸两张';
                        }).set('prompt',get.prompt('l_liangzhu'));
                        event.single=true;
                    }
                    else{
                        player.chooseTarget(get.prompt('l_liangzhu'),function(card,player,target){
                            return target==_status.event.player||target==_status.event.target;
                        }).set('target',trigger.player).set('ai',function(target){
                            var player=_status.event.player;
                            if(player==target) return 1;
                            return get.attitude(player,target)-1.5;
                        });
                    }
                    'step 1'
                    if(event.single){
                        if(result.control!='cancel2'){
                            player.logSkill('l_liangzhu',player);
                            if(result.control=='摸一张'){
                                player.draw();
                            }
                            else{
                                player.draw(2);
                                player.storage.l_liangzhu=player;
                            }
                        }
                    }
                    else if(result.bool){
                        var target=result.targets[0];
                        player.logSkill('l_liangzhu',target);
                        if(target==player){
                            target.draw();
                        }
                        else{
                            target.draw(2);
                            if(target.storage.l_liangzhu){
                                target.storage.l_liangzhu.add(player);
                            }
                            else{
                                target.storage.l_liangzhu=[player];
                            }
                        }
                    }
                },
                ai:{
                    expose:0.1,
                },
            },
            "l_bazhen":{
                audio:"bazhen",
                inherit:"bagua_skill",
                filter:function (event,player){
                    if(!lib.skill.bagua_skill.filter(event,player)) return false;
                    if(player.getEquip(2)) return false;
                    return true;
                },
                ai:{
                    effect:{
                        target:function (card,player,target){
                            if(player==target&&get.subtype(card)=='equip2'){
                                if(get.equipValue(card)<=7.5) return 0;
                            }
                            if(target.getEquip(2)) return;
                            return lib.skill.bagua_skill.ai.effect.target.apply(this,arguments);
                        },
                    },
                },
                trigger:{
                    player:"chooseToRespondBegin",
                },
                check:function (event,player){
                    if(get.damageEffect(player,event.player,player)>=0) return false;
                    return true;
                },
                content:function (){
                    "step 0"
                    player.judge('bagua',function(card){return (get.color(card)=='red')?1.5:-0.5});
                    "step 1"
                    if(result.judge>0){
                        trigger.untrigger();
                        trigger.responded=true;
                        trigger.result={bool:true,card:{name:'shan'}}
                    }
                },
            },
            "bagua_skill":{
                trigger:{
                    player:"chooseToRespondBegin",
                },
                filter:function (event,player){
                    if(event.responded) return false;
                    if(!event.filterCard({name:'shan'})) return false;
                    if(!lib.filter.cardRespondable({name:'sha'},player,event)) return false;
                    var evt=event.getParent();
                    if(evt.player&&evt.player.hasSkillTag('unequip',false,{
                        name:evt.card?evt.card.name:null,
                        target:player,
                        card:evt.card
                    })) return false;
                    return true;
                },
                audio:true,
                check:function (event,player){
                    if(get.damageEffect(player,event.player,player)>=0) return false;
                    return true;
                },
                content:function (){
                    "step 0"
                    player.judge('bagua',function(card){return (get.color(card)=='red')?1.5:-0.5});
                    "step 1"
                    if(result.judge>0){
                        trigger.untrigger();
                        trigger.responded=true;
                        trigger.result={bool:true,card:{name:'shan'}}
                    }
                },
                ai:{
                    effect:{
                        target:function (card,player,target,effect){
                            if(player.hasSkillTag('unequip',false,{
                                name:card?card.name:null,
                                target:player,
                                card:card
                            })) return;
                            if(get.tag(card,'respondShan')) return 0.5;
                        },
                    },
                },
            },
            "l_meibu":{
                trigger:{
                    global:"phaseUseBegin",
                },
                filter:function (event,player){
                    return event.player!=player&&get.distance(event.player,player,'attack')>1;
                },
                logTarget:"player",
                check:function (event,player){
                    if(get.attitude(player,event.player)>=0) return false;
                    var e2=player.getEquip(2);
                    if(e2){
                        if(e2.name=='tengjia') return true;
                        if(e2.name=='bagua') return    true;
                    }
                    return player.countCards('h','shan')>0;
                },
                content:function (){
                    var target=trigger.player;
                    target.addTempSkill('l_meibu_viewas');
                    target.addTempSkill('l_meibu_range');
                    target.storage.l_meibu=player;
                    target.markSkillCharacter('l_meibu',player,'魅步','锦囊牌均视为杀且'+get.translation(player)+'视为在攻击范围内');
                },
                ai:{
                    expose:0.2,
                },
                subSkill:{
                    range:{
                        mod:{
                            targetInRange:function (card,player,target){
                                if(card.name=='sha'&&target==player.storage.l_meibu){
                                    return true;
                                }
                            },
                        },
                        onremove:function (player){
                            game.broadcast(function(player){
                                if(player.marks.l_meibu){
                                    player.marks.l_meibu.delete();
                                    delete player.marks.l_meibu;
                                }
                            },player);
                            if(player.marks.l_meibu){
                                player.marks.l_meibu.delete();
                                delete player.marks.l_meibu;
                                game.addVideo('unmark',player,'l_meibu');
                            }
                        },
                        trigger:{
                            player:"useCard",
                        },
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                            return event.skill=='l_meibu_viewas'
                        },
                        content:function (){
                            player.removeSkill('l_meibu_viewas');
                            game.broadcastAll(function(player){
                                if(player.marks.l_meibu&&player.marks.l_meibu.info){
                                    player.marks.l_meibu.info.content=player.marks.l_meibu.info.content.slice(8);
                                }
                            },player);
                        },
                        sub:true,
                    },
                    viewas:{
                        mod:{
                            cardEnabled:function (card,player){
                                if(card.name!='sha'&&get.type(card,'trick')=='trick') return false;
                            },
                            cardUsable:function (card,player){
                                if(card.name!='sha'&&get.type(card,'trick')=='trick') return false;
                            },
                            cardRespondable:function (card,player){
                                if(card.name!='sha'&&get.type(card,'trick')=='trick') return false;
                            },
                            cardSavable:function (card,player){
                                if(card.name!='sha'&&get.type(card,'trick')=='trick') return false;
                            },
                        },
                        enable:["chooseToUse","chooseToRespond"],
                        filterCard:function (card){
                            return get.type(card,'trick')=='trick';
                        },
                        viewAs:{
                            name:"sha",
                        },
                        check:function (){return 1},
                        ai:{
                            effect:{
                                target:function (card,player,target,current){
                                    if(get.tag(card,'respondSha')&&current<0) return 0.8
                                },
                            },
                            respondSha:true,
                            order:4,
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
                },
            },
            "l_zhidao":{
                trigger:{
                    source:"damageEnd",
                },
                filter:function (event,player){
                    if(event._notrigger.contains(event.player)) return false;
                    return _status.currentPhase==player&&event.player.isAlive()&&
                    event.player.countCards('hej')>0&&event.player!=player&&!player.hasSkill('l_zhidao2');
                },
                forced:true,
                content:function (){
                    var num=0;
                    if(trigger.player.countCards('h')) num++;
                    if(trigger.player.countCards('e')) num++;
                    if(trigger.player.countCards('j')) num++;
                    if(num){
                        player.gainPlayerCard(trigger.player,num,'hej',true).set('filterButton',function(button){
                            for(var i=0;i<ui.selected.buttons.length;i++){
                                if(get.position(button.link)==get.position(ui.selected.buttons[i].link)) return false;
                            }
                            return true;
                        });
                    }
                    player.addTempSkill('l_zhidao2');
                },
            },
            "l_zhidao2":{
                mod:{
                    playerEnabled:function (card,player,target){
                        if(player!=target) return false;
                    },
                },
            },
            "l_faen":{
                audio:"faen",
                trigger:{
                    global:["turnOverAfter","linkAfter"],
                },
                filter:function (event,player){
                    if(event.name=='link') return event.player.isLinked();
                    return !event.player.isTurnedOver();
                },
                check:function (event,player){
                    return get.attitude(player,event.player)>0;
                },
                logTarget:"player",
                content:function (){
                    trigger.player.draw();
                },
                ai:{
                    expose:0.2,
                },
            },
            gailianhuan:{
                group:["gailianhuan1","gailianhuan2"],
            },
            "gailianhuan1":{
                audio:"lianhuan2",
                enable:"phaseUse",
                filter:function (event,player){
        return player.countCards('h',{color:'black'})>0;
    },
                filterCard:function (card){
        return get.color(card)=='black';
    },
                viewAs:{
                    name:"tiesuo",
                    suit:"spade",
                    number:9,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"spade","number":9,"name":"sha","cardid":"7301746328","clone":{"name":"sha","suit":"spade","number":9,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_onEndDelete":true,"_transitionEnded":true,"timeout":2330},"timeout":2238,"original":"h"}],
                },
                prompt:"将一张黑色牌当铁锁连环使用",
                check:function (card){return 4-get.value(card)},
                ai:{
                    wuxie:function (){
            if(Math.random()<0.5) return 0;
        },
                    basic:{
                        useful:4,
                        value:4,
                        order:7,
                    },
                    result:{
                        target:function (player,target){
                if(target.isLinked()){
                    if(target.hasSkillTag('link')) return 0;
                    var f=target.hasSkillTag('nofire');
                    var t=target.hasSkillTag('nothunder');
                    if(f&&t) return 0;
                    if(f||t) return 0.5;
                    return 2;
                }
                if(get.attitude(player,target)>=0) return -0.9;
                if(ui.selected.targets.length) return -0.9;
                if(game.hasPlayer(function(current){
                    return get.attitude(player,current)<=-1&&current!=target&&!current.isLinked();
                })){
                    return -0.9;
                }
                return 0;
            },
                        player:function (player,target){
                        if(game.players.length<3)
                        return 0;
                        },
                    },
                    tag:{
                        multitarget:1,
                        multineg:1,
                        norepeat:1,
                    },
                },
            },
            "gailianhuan2":{
                enable:"phaseUse",
                filter:function (event,player){
        return player.countCards('h',{color:'black'})>0;
    },
                filterCard:function (card){
        return get.color(card)=='black';
    },
                check:function (card){
        return 5-get.useful(card);
    },
                content:function (){
        player.draw();
    },
                discard:false,
                prompt:"将一张黑色牌置入弃牌堆并摸一张牌",
                delay:0.5,
                prepare:function (cards,player){
        player.$throw(cards,1000);
    },
                ai:{
                    basic:{
                        order:1,
                    },
                    result:{
                        player:1,
                    },
                },
            },
            "gai_huansha":{
                srlose:true,
                enable:["chooseToUse","chooseToRespond"],
                filterCard:function (){return false;},
                selectCard:-1,
                viewAs:{
                    name:"sha",
                    nature:"fire",
                },
                viewAsFilter:function (player){
        return !player.isLinked();
    },
                prompt:"横置你的武将牌，视为打出一张火杀",
                check:function (){return 1},
                onuse:function (result,player){
        player.link();
    },
                onrespond:function (result,player){
        if(!player.isLinked()) player.link()
    },
                ai:{
                    skillTagFilter:function (player){
            return !player.isLinked();
        },
                    respondSha:true,
                    basic:{
                        useful:[5,1],
                        value:[5,1],
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
            "gai_huanshan":{
                enable:"chooseToRespond",
                filterCard:function (){return false;},
                selectCard:-1,
                viewAs:{
                    name:"shan",
                },
                viewAsFilter:function (player){
                    return player.isLinked();
                },
                prompt:"重置你的武将牌，视为打出一张闪",
                check:function (){return 1},
                onrespond:function (result,player){
                    if(player.isLinked()) player.link()
                },
                ai:{
                    skillTagFilter:function (player){
                        return player.isLinked();
                    },
                    respondShan:true,
                    basic:{
                        useful:[7,2],
                        value:[7,2],
                    },
                },
            },
            "l_fuhun":{
                enable:["chooseToUse","chooseToRespond"],
                filterCard:true,
                selectCard:2,
                position:"h",
                audio:"fuhun",
                derivation:["l_wusheng","l_paoxiao"],
                viewAs:{
                    name:"sha",
                },
                prompt:"将两张手牌当杀使用或打出",
                check:function (card){
                    if(_status.event.player.hasSkill('l_wusheng')&&get.color(card)=='red') return 0;
                    if(_status.event.name=='chooseToRespond'){
                        if(card.name=='sha') return 0;
                        return 6-get.useful(card);
                    }
                    if(_status.event.player.countCards('h')<4) return 6-get.useful(card);
                    return 7-get.useful(card);
                },
                ai:{
                    respondSha:true,
                    order:function (item,player){
                        if(player.hasSkill('l_wusheng')&&player.hasSkill('l_paoxiao')){
                            return 1;
                        }
                        if(player.countCards('h')<4){
                            return 1;
                        }
                        return 4;
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
                group:"l_fuhun2",
            },
            "l_fuhun2":{
                trigger:{
                    source:"damageAfter",
                },
                forced:true,
                filter:function (event,player){
                    if(player.hasSkill('l_fuhun3')) return false;
                    return event.getParent().skill=='l_fuhun';
                },
                content:function (){
                    player.addTempSkill('l_wusheng');
                    player.addTempSkill('l_paoxiao');
                    player.addTempSkill('l_fuhun3');
                },
            },
            "l_fuhun3":{
            },
            "l_boss_shenyi":{
                unique:true,
                mod:{
                    judge:function (player,result){
                        if(_status.event.type=='phase'){
                            if(result.bool==false){
                                result.bool=null;
                            }
                            else{
                                result.bool=false;
                            }
                        }
                    },
                },
                trigger:{
                    player:"turnOverBefore",
                },
                priority:20,
                forced:true,
                filter:function (event,player){
                    return !player.isTurnedOver();
                },
                content:function (){
                    trigger.cancel();
                    game.log(player,'取消了翻面');
                },
                ai:{
                    noturn:true,
                    effect:{
                        target:function (card,player,target){
                            if(get.type(card)=='delay') return 0.5;
                        },
                    },
                },
            },
            "l_gongao":{
                audio:"gongao",
                trigger:{
                    global:"dieAfter",
                },
                forced:true,
                unique:true,
                content:function (){
                    player.gainMaxHp();
                    player.recover();
                },
                ai:{
                    threaten:1.5,
                },
            },
            "l_chengxiang":{
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                audio:"chengxiang",
                content:function (){
                    "step 0"
                    event.cards=get.cards(4);
                    event.videoId=lib.status.videoId++;
                    game.broadcastAll(function(player,id,cards){
                        var str;
                        if(player==game.me&&!_status.auto){
                            str='称象：选择任意张点数不大于13的牌';
                        }
                        else{
                            str='称象';
                        }
                        var dialog=ui.create.dialog(str,cards);
                        dialog.videoId=id;
                    },player,event.videoId,event.cards);
                    event.time=get.utc();
                    game.addVideo('showCards',player,['称象',get.cardsInfo(event.cards)]);
                    game.addVideo('delay',null,2);
                    "step 1"
                    var next=player.chooseButton([0,4]);
                    next.set('dialog',event.videoId);
                    next.set('filterButton',function(button){
                        var num=0
                        for(var i=0;i<ui.selected.buttons.length;i++){
                            num+=get.number(ui.selected.buttons[i].link);
                        }
                        return (num+get.number(button.link)<=13);
                    });
                    next.set('ai',function(button){
                        return get.value(button.link,_status.event.player);
                    });
                    "step 2"
                    if(result.bool&&result.links){
                        player.logSkill('l_chengxiang');
                        var cards2=[];
                        for(var i=0;i<result.links.length;i++){
                            cards2.push(result.links[i]);
                            cards.remove(result.links[i]);
                        }
                        for(var i=0;i<cards.length;i++){
                            cards[i].discard();
                        }
                        event.cards2=cards2;
                    }
                    else{
                        event.finish();
                    }
                    var time=1000-(get.utc()-event.time);
                    if(time>0){
                        game.delay(0,time);
                    }
                    "step 3"
                    game.broadcastAll('closeDialog',event.videoId);
                    var cards2=event.cards2;
                    player.gain(cards2,'log');
                    player.$draw(cards2);
                    game.delay();
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
            },
            "l_wangxi":{
                audio:"wangxi",
                trigger:{
                    player:"damageAfter",
                    source:"damageAfter",
                },
                filter:function (event){
                    if(event._notrigger.contains(event.player)) return false;
                    return event.num&&event.source&&event.player&&
                    event.player.isAlive()&&event.source.isAlive()&&event.source!=event.player;
                },
                check:function (event,player){
                    if(event.player==player) return get.attitude(player,event.source)>-3;
                    return get.attitude(player,event.player)>-3;
                },
                logTarget:function (event,player){
                    if(event.player==player) return event.source;
                    return event.player;
                },
                content:function (){
                    "step 0"
                    event.num=trigger.num;
                    "step 1"
                    game.asyncDraw([trigger.player,trigger.source],1);
                    event.num--;
                    "step 2"
                    game.delay();
                    if(trigger.player.isAlive()&&trigger.source.isAlive()&&event.num>0){
                        player.chooseBool('是否继续发动【忘隙】？');
                    }
                    else{
                        event.finish();
                    }
                    "step 3"
                    if(result.bool){
                    if(trigger.source!=player){
                    player.logSkill('l_wangxi',trigger.source);
                    }else{
                    player.logSkill('l_wangxi',trigger.player);
                    }
                        event.goto(1);
                    }
                },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                },
            },
            "l_xinjushou":{
                audio:"jushou",
                trigger:{
                    player:"phaseEnd",
                },
                content:function (){
                    'step 0'
                    player.draw(4);
                    player.turnOver();
                    'step 1'
                    player.chooseCard('h',true,'弃置一张手牌，若以此法弃置的是装备牌，则你改为使用之').set('ai',function(card){
                        if(get.type(card)=='equip'){
                            return 5-get.value(card);
                        }
                        return -get.value(card);
                    }).set('filterCard',lib.filter.cardDiscardable);
                    'step 2'
                    if(result.bool&&result.cards.length){
                        if(get.type(result.cards[0])=='equip'){
                            player.$give(result.cards,player);
                            player.lose(result.cards,ui.special);
                            event.toequip=result.cards[0];
                        }
                        else{
                            player.discard(result.cards[0]);
                        }
                    }
                    'step 3'
                    if(event.toequip){
                        game.delay();
                    }
                    'step 4'
                    if(event.toequip){
                        player.equip(event.toequip);
                    }
                },
                ai:{
                    effect:{
                        target:function (card,player,target){
                            if(card.name=='guiyoujie') return [0,1];
                        },
                    },
                },
            },
            "ll_xinjushou":{
                trigger:{
                    player:"phaseEnd",
                },
                content:function (){
                    'step 0'
                    player.draw(4);
                    player.turnOver();
                    'step 1'
                    player.chooseCard('h',true,'弃置一张手牌，若以此法弃置的是装备牌，则你改为使用之').set('ai',function(card){
                        if(get.type(card)=='equip'){
                            return 5-get.value(card);
                        }
                        return -get.value(card);
                    }).set('filterCard',lib.filter.cardDiscardable);
                    'step 2'
                    if(result.bool&&result.cards.length){
                        if(get.type(result.cards[0])=='equip'){
                            player.$give(result.cards,player);
                            player.lose(result.cards,ui.special);
                            event.toequip=result.cards[0];
                        }
                        else{
                            player.discard(result.cards[0]);
                        }
                    }
                    'step 3'
                    if(event.toequip){
                        game.delay();
                    }
                    'step 4'
                    if(event.toequip){
                        player.equip(event.toequip);
                    }
                },
                ai:{
                    effect:{
                        target:function (card,player,target){
                            if(card.name=='guiyoujie') return [0,1];
                        },
                    },
                },
            },
            "l_xinjiewei":{
                audio:"yanzheng2",
                enable:"chooseToUse",
                filterCard:true,
                position:"e",
                viewAs:{
                    name:"wuxie",
                },
                filter:function (event,player){
                    return player.countCards('e')>0;
                },
                viewAsFilter:function (player){
                    return player.countCards('e')>0;
                },
                prompt:"将一张装备区内的牌当无懈可击使用",
                check:function (card){return 8-get.equipValue(card)},
                threaten:1.2,
                group:"l_xinjiewei_move",
                subSkill:{
                    move:{
                        trigger:{
                            player:"turnOverEnd",
                        },
                        direct:true,
                        audio:"jiewei",
                        filter:function (event,player){
                            return !player.isTurnedOver()&&player.canMoveCard();
                        },
                        content:function (){
                            "step 0"
                            player.chooseToDiscard('he',get.prompt('l_xinjiewei'),'弃置一张牌并移动场上的一张牌',lib.filter.cardDiscardable).set('ai',function(card){
                                if(!_status.event.check) return 0;
                                return 7-get.value(card);
                            }).set('check',player.canMoveCard(true)).set('logSkill','l_xinjiewei');
                            "step 1"
                            if(result.bool){
                                player.moveCard(true);
                            }
                            else{
                                event.finish();
                            }
                        },
                        sub:true,
                    },
                },
                ai:{
                    basic:{
                        useful:[6,4],
                        value:[6,4],
                    },
                    result:{
                        player:1,
                    },
                    expose:0.2,
                },
            },
            "ll_xinjiewei":{
                audio:"yanzheng2",
                enable:"chooseToUse",
                filterCard:true,
                position:"e",
                viewAs:{
                    name:"wuxie",
                },
                filter:function (event,player){
                    return player.countCards('e')>0;
                },
                viewAsFilter:function (player){
                    return player.countCards('e')>0;
                },
                prompt:"将一张装备区内的牌当无懈可击使用",
                check:function (card){return 8-get.equipValue(card)},
                threaten:1.2,
                group:"ll_xinjiewei_move",
                subSkill:{
                    move:{
                        trigger:{
                            player:"turnOverEnd",
                        },
                        direct:true,
                        audio:"jiewei",
                        filter:function (event,player){
                            return !player.isTurnedOver()&&player.canMoveCard();
                        },
                        content:function (){
                            "step 0"
                            player.chooseToDiscard('he',get.prompt('ll_xinjiewei'),'弃置一张牌并移动场上的一张牌',lib.filter.cardDiscardable).set('ai',function(card){
                                if(!_status.event.check) return 0;
                                return 7-get.value(card);
                            }).set('check',player.canMoveCard(true)).set('logSkill','ll_xinjiewei');
                            "step 1"
                            if(result.bool){
                                player.moveCard(true);
                            }
                            else{
                                event.finish();
                            }
                        },
                        sub:true,
                    },
                },
                ai:{
                    basic:{
                        useful:[6,4],
                        value:[6,4],
                    },
                    result:{
                        player:1,
                    },
                    expose:0.2,
                },
            },
            xiefeng:{
                trigger:{
                    player:"phaseBegin",
                },
                frequent:true,
                filter:function (event,player){
       if(player.getEquip(1)) return false;
                    return true;
   },
                content:function (){
        event.equip=get.cardPile(function(card){
            return get.subtype(card)=='equip1';
        });
            player.equip(event.equip||game.createCard(get.inpilefull('equip').randomGet()),true);
            event.e=true;
    },
                ai:{
                    order:8,
                    threaten:1.2,
                    result:{
                        player:1,
                    },
                },
            },
            "jiqiao1":{
                trigger:{
                    player:"phaseUseBegin",
                },
                direct:true,
                filter:function (event,player){
        return player.countCards('he',{type:'equip'})>0;
    },
                content:function (){
        'step 0'
        player.chooseToDiscard(get.prompt('jiqiao'),[1,player.countCards('he',{type:'equip'})],'he',function(card){
            return get.type(card)=='equip';
        }).set('ai',function(card){
            if(card.name=='bagua') return 10;
            return 7-get.value(card);
        });
        'step 1'
        if(result.bool){
            player.logSkill('jiqiao');
            event.cards=get.cards(5*result.cards.length);
            player.showCards(event.cards);
        }
        else{
            event.finish();
        }
        'step 2'
        var gained=[];
        for(var i=0;i<event.cards.length;i++){
            if(get.type(event.cards[i],'trick')=='trick'){
                gained.push(event.cards[i]);
            }
            else{
                event.cards[i].discard();
            }
        }
        player.gain(gained,'gain2');
    },
                ai:{
                    threaten:1.5,
                },
            },
            "l_kongsheng":{
                audio:"ext:异界四国:2",
                trigger:{
                    player:"phaseBegin",
                },
                direct:true,
                filter:function (event,player){
                    return player.countCards('he')>0;
                },
                content:function (){
                    'step 0'
                    player.chooseCard(get.prompt('l_kongsheng'),'he',[1,player.countCards('he')]).set('ai',function(card){
                        if(card.name=='shan'||card.name=='du') return 1;
                        return 5-get.value(card);
                    });
                    'step 1'
                    if(result.bool){
                        player.logSkill('l_kongsheng');
                        if(player.storage.l_kongsheng1==undefined) player.storage.l_kongsheng1=result.cards;
                        player.lose(result.cards,ui.special);
                        game.log(player,'将',result.cards,'置于其武将牌上');
                        player.addSkill('l_kongsheng1');
                    }else{
                        event.finish();
                    };
                },
            },
            "l_kongsheng1":{
                marktext:"箜",
                intro:{
                    content:"cards",
                },
                mark:true,
                audio:"ext:异界四国:2",
                trigger:{
                    player:"phaseEnd",
                },
                filter:function (event,player){
                    return player.storage.l_kongsheng1!=undefined&&player.storage.l_kongsheng1.length>0;
                },
                forced:true,
                popup:false,
                content:function (){
                    'step 0'
                    player.logSkill('l_kongsheng');
                    event.list=[];
                    for(var i=0;i<player.storage.l_kongsheng1.length;i++){
                        if(get.type(player.storage.l_kongsheng1[i])=='equip'){
                            player.useCard(player.storage.l_kongsheng1[i],player);
                            event.list.push(player.storage.l_kongsheng1[i]);
                        };
                    };
                    'step 1'
                    for(var i=0;i<event.list.length;i++){
                        player.storage.l_kongsheng1.remove(event.list[i]);
                    };
                    'step 2'
                    player.gain(player.storage.l_kongsheng1,'gain2');
                    'step 3'
                    for(var i=0;i<player.storage.l_kongsheng1.length;i++){
                        player.storage.l_kongsheng1.remove(player.storage.l_kongsheng1[i]);
                    };
                    player.removeSkill('l_kongsheng1');
                    delete player.storage.l_kongsheng1;
                },
            },
            "l_shenduan":{
                trigger:{
                    player:"discardAfter",
                },
                filter:function (event,player){
                    for(var i=0;i<event.cards.length;i++){
                        if(get.color(event.cards[i])=='black'&&get.type(event.cards[i])=='basic'&&
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
                        if(get.color(trigger.cards[i])=='black'&&get.type(trigger.cards[i])=='basic'&&
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
                        player.chooseTarget(get.prompt('l_shenduan'),function(card,player,target){
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
                            player.chooseCardButton('选择一张牌当作兵断寸断使用',event.cards,true);
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
                        player.logSkill('l_shenduan',event.current);
                    }
                },
            },
            "l_jiezi":{
                trigger:{
                    global:["phaseDrawSkipped","phaseDrawCancelled"],
                },
                forced:true,
                filter:function (event,player){
                    return event.player!=player;
                },
                content:function (){
                    player.draw();
                },
            },
            "l_jigong":{
                audio:"jigong",
                trigger:{
                    player:"phaseUseBegin",
                },
                check:function (event,player){
                    var nh=player.countCards('h')-player.countCards('h',{type:'equip'});
                    if(nh<=1) return true;
                    if(player.countCards('h','tao')) return false;
                    if(nh<=2) return Math.random()<0.7;
                    if(nh<=3) return Math.random()<0.4;
                    return false;
                },
                content:function (){
                    player.draw(2);
                    player.addTempSkill('l_jigong2');
                },
            },
            "l_jigong2":{
                mod:{
                    maxHandcard:function (player,num){
                        var damage=player.getStat().damage;
                        if(typeof damage=='number') return num-player.hp+damage;
                        return 0;
                    },
                },
            },
            "l_qingguo":{
                audio:"qingguo",
                enable:["chooseToRespond"],
                filterCard:function (card){
                    return get.color(card)=='black';
                },
                viewAs:{
                    name:"shan",
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
            "l_fangzhu":{
                audio:"fangzhu",
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                content:function (){
                    "step 0"
                    player.chooseTarget(get.prompt('l_fangzhu'),function(card,player,target){
                        return player!=target
                    }).ai=function(target){
                        if(target.hasSkillTag('noturn')) return 0;
                        var player=_status.event.player;
                        if(get.attitude(_status.event.player,target)==0) return 0;
                        if(get.attitude(_status.event.player,target)>0){
                            if(target.classList.contains('turnedover')) return 1000-target.countCards('h');
                            if(player.maxHp-player.hp<3) return -1;
                            return 100-target.countCards('h');
                        }
                        else{
                            if(target.classList.contains('turnedover')) return -1;
                            if(player.maxHp-player.hp>=3) return -1;
                            return 1+target.countCards('h');
                        }
                    }
                    "step 1"
                    if(result.bool){
                        player.logSkill('l_fangzhu',result.targets);
                        result.targets[0].draw(player.maxHp-player.hp);
                        result.targets[0].turnOver();
                    }
                },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                    effect:{
                        target:function (card,player,target){
                            if(get.tag(card,'damage')){
                                if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
                                if(target.hp<=1) return;
                                if(!target.hasFriend()) return;
                                var hastarget=false;
                                var turnfriend=false;
                                var players=game.filterPlayer();
                                for(var i=0;i<players.length;i++){
                                    if(get.attitude(target,players[i])<0&&!players[i].isTurnedOver()){
                                        hastarget=true;
                                    }
                                    if(get.attitude(target,players[i])>0&&players[i].isTurnedOver()){
                                        hastarget=true;
                                        turnfriend=true;
                                    }
                                }
                                if(get.attitude(player,target)>0&&!hastarget) return;
                                if(turnfriend||target.hp==target.maxHp) return [0.5,1];
                                if(target.hp>1) return [1,0.5];
                            }
                        },
                    },
                },
            },
            gaikunfen:{
                audio:"kunfen",
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                content:function (){
        "step 0"
        if(player.storage.gaikunfen||
        (get.mode()=='guozhan'&&player.hiddenSkills.contains('gaikunfen'))){
            if(!player.storage.gaikunfen){
                event.skillHidden=true;
            }
            player.chooseBool(get.prompt('gaikunfen')).set('ai',function(){
                var player=_status.event.player;
                if(player.hp>3) return true;
                if(player.hp==3&&player.countCards('h')<3) return true;
                if(player.hp==2&&player.countCards('h')==0) return true;
                return false;
            });
        }
        else{
            event.forced=true;
        }
        "step 1"
        if(event.forced||result.bool){
            player.logSkill('gaikunfen');
            player.loseHp();
        }
        else{
            event.finish();
        }
        "step 2"
        player.draw(2);
    },
                ai:{
                    threaten:1.5,
                },
            },
            "l_fengliang":{
                skillAnimation:true,
                unique:true,
                audio:"fengliang",
                derivation:"l_tiaoxin",
                trigger:{
                    player:"dying",
                },
                priority:10,
                forced:true,
                filter:function (event,player){
                    return !player.storage.kunfen;
                },
                content:function (){
                    "step 0"
                    player.loseMaxHp();
                    "step 1"
                    if(player.hp<2){
                        player.recover(2-player.hp);
                    }
                    "step 2"
                    player.addSkill('l_tiaoxin');
                    player.storage.kunfen=true;
                    player.awakenSkill('l_fengliang');
                },
            },
            "l_tiaoxin":{
                audio:"ext:异界四国:2",
                audioname:["xiahouba"],
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
                    return target.canUse({name:'sha'},player)&&target.countCards('he');
                },
                content:function (){
                    "step 0"
                    target.chooseToUse({name:'sha'},player,-1,'挑衅：对'+get.translation(player)+'使用一张杀，或令其弃置你的一张牌').set('targetRequired',true);
                    "step 1"
                    if(result.bool==false&&target.countCards('he')>0){
                        player.discardPlayerCard(target,'he',true);
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
            "l_yuhua":{
                trigger:{
                    player:"phaseDiscardBegin",
                },
                forced:true,
                audio:"yuhua",
                filter:function (event,player){
                    return event.parent.name=='phaseDiscard'&&player.countCards('h',{type:'basic'})<player.countCards('h');
                },
                content:function (){},
                mod:{
                    ignoredHandcard:function (card,player){
                        if(get.type(card)!='basic'){
                            return true;
                        }
                    },
                    cardDiscardable:function (card,player,name){
                        if(name=='phaseDiscard'&&get.type(card)!='basic') return false;
                    },
                },
            },
            "l_qirang":{
                audio:"qirang",
                trigger:{
                    player:"equipEnd",
                },
                frequent:true,
                content:function (){
                    player.gain(get.cardPile(function(card){
                        return get.type(card,'trick')=='trick';
                    }),'gain2');
                },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                            if(get.type(card)=='equip') return [1,3];
                        },
                    },
                    threaten:1.3,
                },
            },
            "l_tuntian":{
                audio:"tuntian",
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
                        player.storage.l_tuntian.push(result.card);
                        result.node.moveDelete(player);
                        game.broadcast(function(cardid,player){
                            var node=lib.cardOL[cardid];
                            if(node){
                                node.moveDelete(player);
                            }
                        },result.node.cardid,player);
                        game.addVideo('gain2',player,get.cardsInfo([result.node]));
                        player.markSkill('l_tuntian');
                        game.addVideo('storage',player,['l_tuntian',get.cardsInfo(player.storage.l_tuntian),'cards']);
                    }
                },
                init:function (player){
                    player.storage.l_tuntian=[];
                },
                intro:{
                    content:"cards",
                },
                group:"l_tuntian_dist",
                subSkill:{
                    dist:{
                        mod:{
                            globalFrom:function (from,to,distance){
                                if(from.storage.l_tuntian) return distance-from.storage.l_tuntian.length;
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
            "l_zaoxian":{
                skillAnimation:true,
                audio:"zaoxian",
                unique:true,
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                filter:function (event,player){
                    if(player.storage.l_tuntian) return player.storage.l_tuntian.length>=3&&!player.storage.l_zaoxian;
                },
                derivation:"l_jixi",
                content:function (){
                    player.loseMaxHp();
                    player.addSkill('l_jixi');
                    player.storage.l_zaoxian=true;
                    player.awakenSkill('l_zaoxian');
                },
            },
            "l_jixi":{
                audio:"jixi",
                enable:"phaseUse",
                filter:function (event,player){
                    return player.storage.l_tuntian.length>0;
                },
                chooseButton:{
                    dialog:function (event,player){
                        return ui.create.dialog('急袭',player.storage.l_tuntian,'hidden');
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
                                player.storage.l_tuntian.remove(card);
                                player.syncStorage('l_tuntian');
                                if(!player.storage.l_tuntian.length){
                                    player.unmarkSkill('l_tuntian');
                                }
                                else{
                                    player.markSkill('l_tuntian');
                                }
                                player.logSkill('l_jixi',result.targets);
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
                            return player.storage.l_tuntian.length-1;
                        },
                    },
                },
            },
            "l_mizhao":{
                enable:"phaseUse",
                usable:1,
                audio:"mizhao",
                filter:function (event,player){
                    return player.countCards('h')>0;
                },
                filterCard:true,
                selectCard:-1,
                filterTarget:function (card,player,target){
                    return player!=target;
                },
                discard:false,
                prepare:"give2",
                ai:{
                    order:1,
                    result:{
                        player:0,
                        target:function (player,target){
                            if(target.hasSkillTag('nogain')) return 0;
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
                        },
                    },
                },
                content:function (){
                    "step 0"
                    event.target1=targets[0];
                    targets[0].gain(cards,player);
                    var players=game.filterPlayer();
                    for(var i=0;i<players.length;i++){
                        if(players[i].countCards('h')&&players[i]!=event.target1&&players[i]!=player){
                            break;
                        }
                    }
                    if(i==players.length){
                        event.finish();
                    }
                    "step 1"
                    player.chooseTarget(true,'选择拼点目标',function(card,player,target){
                        return target.countCards('h')&&target!=_status.event.target1&&target!=player;
                    }).set('ai',function(target){
                        var player=_status.event.player;
                        var eff=get.effect(target,{name:'sha'},_status.event.target1,player);
                        var att=get.attitude(player,target);
                        if(att>0){
                            return eff-10;
                        }
                        return eff;
                    }).set('target1',event.target1);
                    "step 2"
                    if(result.targets.length){
                        event.target2=result.targets[0];
                        event.target1.line(event.target2);
                        event.target1.chooseToCompare(event.target2);
                    }
                    else{
                        event.finish();
                    }
                    "step 3"
                    if(!result.tie){
                        if(result.bool){
                            event.target1.useCard({name:'sha'},event.target2);
                        }
                        else{
                            event.target2.useCard({name:'sha'},event.target1);
                        }
                    }
                },
            },
            "l_hongde":{
                trigger:{
                    player:["gainEnd","loseEnd"],
                },
                direct:true,
                filter:function (event,player){
                    return event.cards&&event.cards.length>1;
                },
                content:function (){
                    'step 0'
                    player.chooseTarget(get.prompt('l_hongde'),function(card,player,target){
                        return target!=player;
                    }).set('ai',function(target){
                        return get.attitude(player,target);
                    });
                    'step 1'
                    if(result.bool){
                        player.logSkill('l_hongde',result.targets);
                        result.targets[0].draw();
                    }
                },
            },
            "l_shenxing":{
                audio:"shenxing",
                enable:"phaseUse",
                position:"he",
                filterCard:true,
                selectCard:2,
                prompt:"弃置两张牌并摸一张牌",
                check:function (card){return 4-get.useful(card)},
                content:function (){
                    player.draw();
                },
                ai:{
                    order:1,
                    result:{
                        player:1,
                    },
                },
            },
            "l_pingkou":{
                group:["l_pingkou_init","l_pingkou_count"],
                subSkill:{
                    init:{
                        trigger:{
                            player:"phaseBegin",
                        },
                        silent:true,
                        content:function (){
                            player.storage.l_pingkou=0;
                        },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                    count:{
                        trigger:{
                            player:["phaseJudgeCancelled","phaseJudgeSkipped","phaseDrawCancelled","phaseDrawSkipped","phaseUseCancelled","phaseUseSkipped","phaseDiscardCancelled","phaseDiscardSkipped"],
                        },
                        silent:true,
                        content:function (){
                            player.storage.l_pingkou++;
                            console.log(event.triggername,trigger.name)
                        },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                },
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                filter:function (event,player){
                    return player.storage.l_pingkou>0;
                },
                content:function (){
                    'step 0'
                    player.chooseTarget([1,player.storage.l_pingkou],get.prompt2('l_pingkou'),function(card,player,target){
                        return target!=player;
                    }).set('ai',function(target){
                        var player=_status.event.player;
                        return get.damageEffect(target,player,player);
                    });
                    'step 1'
                    if(result.bool){
                        player.logSkill('l_pingkou',result.targets);
                        event.targets=result.targets.slice(0).sortBySeat();
                    }
                    else{
                        event.finish();
                    }
                    'step 2'
                    if(event.targets&&event.targets.length){
                        event.targets.shift().damage();
                        event.redo();
                    }
                },
                ai:{
                    combo:"fenli",
                    effect:{
                        target:function (card){
                            if(card.name=='lebu'||card.name=='bingliang') return 0.5;
                        },
                    },
                },
            },
            "l_zhenwei":{
                trigger:{
                    global:"useCardToBefore",
                },
                direct:true,
                priority:5,
                filter:function (event,player){
                    if(player==event.target||player==event.player) return false;
                    if(!player.countCards('he')) return false;
                    if(event.targets.length>1) return false;
                    if(!event.target) return false;
                    if(event.target.hp>=player.hp) return false;

                    var card=event.card;
                    if(card.name=='sha') return true;
                    if(get.color(card)=='black'&&get.type(card)=='trick') return true;
                    return false;
                },
                content:function (){
                    "step 0"
                    var save=false;
                    if(get.attitude(player,trigger.target)>2){
                        if(trigger.card.name=='sha'){
                            if(player.countCards('h','shan')||player.getEquip(2)||
                            trigger.target.hp==1||player.hp>trigger.target.hp+1){
                                if(!trigger.target.countCards('h','shan')||trigger.target.countCards('h')<player.countCards('h')){
                                    save=true;
                                }
                            }
                        }
                        else if(trigger.card.name=='juedou'&&trigger.target.hp==1){
                            save=true;
                        }
                        else if(trigger.card.name=='shunshou'&&
                            get.attitude(player,trigger.player)<0&&
                            get.attitude(trigger.player,trigger.target)<0){
                            save=true;
                        }
                    }
                    var next=player.chooseToDiscard('he',get.prompt('l_zhenwei'));
                    next.logSkill=['l_zhenwei',trigger.target];
                    next.set('ai',function(card){
                        if(_status.event.aisave){
                            return 7-get.value(card);
                        }
                        return 0;
                    });
                    next.set('aisave',save);
                    "step 1"
                    if(result.bool){
                        player.chooseControl('转移','失效',function(){
                            var trigger=_status.event.getTrigger();
                            var player=_status.event.player;
                            if(trigger.card.name=='sha'){
                                if(player.countCards('h','shan')) return '转移';
                            }
                            else if(trigger.card.name=='juedou'){
                                if(player.countCards('h','sha')) return '转移';
                            }
                            return '失效';
                        }).set('prompt','将'+get.translation(trigger.card)+'转移给你，或令其失效');
                    }
                    else{
                        event.finish();
                    }
                    "step 2"
                    if(result.control=='转移'){
                        player.draw();
                        trigger.target=player;
                        trigger.targets.length=0;
                        trigger.targets.push(player);
                        trigger.untrigger();
                        trigger.trigger('useCardToBefore');
                        trigger.trigger(trigger.card.name+'Before');
                        trigger.player.line(player);
                    }
                    else{
                        if(get.itemtype(trigger.card)=='card'){
                            trigger.player.$gain2(trigger.card);
                            if(!trigger.player.storage.l_zhenwei2){
                                trigger.player.storage.l_zhenwei2=[trigger.card];
                            }
                            else{
                                trigger.player.storage.l_zhenwei2.push(trigger.card);
                            }
                            ui.special.appendChild(trigger.card);
                            trigger.player.markSkill('l_zhenwei2');
                        }
                        trigger.cancel();
                        trigger.player.addSkill('l_zhenwei2');
                    }
                    game.delay();
                },
                ai:{
                    threaten:1.1,
                },
            },
            "l_zhenwei2":{
                mark:true,
                intro:{
                    content:"cards",
                },
                trigger:{
                    global:"phaseAfter",
                },
                forced:true,
                content:function (){
                    player.gain(player.storage.l_zhenwei2,'gain2');
                    delete player.storage.l_zhenwei2;
                    player.removeSkill('l_zhenwei2');
                },
            },
            "l_xinshensu":{
                group:["shensu1","shensu2","shensu4"],
            },
            "shensu1":{
                audio:"shensu",
                trigger:{
                    player:"phaseBegin",
                },
                direct:true,
                content:function (){
                    "step 0"
                    var check= player.countCards('h')>2;
                    player.chooseTarget(get.prompt('shensu'),function(card,player,target){
                        if(player==target) return false;
                        return player.canUse({name:'sha'},target,false);
                    }).set('check',check).set('ai',function(target){
                        if(!_status.event.check) return 0;
                        return get.effect(target,{name:'sha'},_status.event.player);
                    });
                    "step 1"
                    if(result.bool){
                        player.logSkill('shensu1',result.targets);
                        player.useCard({name:'sha'},result.targets[0],false);
                        player.skip('phaseJudge');
                        player.skip('phaseDraw');
                    }
                },
            },
            "shensu2":{
                audio:"shensu",
                trigger:{
                    player:"phaseUseBefore",
                },
                direct:true,
                filter:function (event,player){
                    return player.countCards('he',{type:'equip'})>0;
                },
                content:function (){
                    "step 0"
                    var check=player.needsToDiscard();
                    player.chooseCardTarget({
                        prompt:get.prompt('shensu'),
                        filterCard:function(card,player){
                            return get.type(card)=='equip'&&lib.filter.cardDiscardable(card,player)
                        },
                        position:'he',
                        filterTarget:function(card,player,target){
                            if(player==target) return false;
                            return player.canUse({name:'sha'},target,false);
                        },
                        ai1:function(card){
                            if(_status.event.check) return 0;
                            return 6-get.value(card);
                        },
                        ai2:function(target){
                            if(_status.event.check) return 0;
                            return get.effect(target,{name:'sha'},_status.event.player);
                        },
                        check:check
                    });
                    "step 1"
                    if(result.bool){
                        player.logSkill('shensu2',result.targets);
                        player.discard(result.cards[0]);
                        player.useCard({name:'sha'},result.targets[0]);
                        trigger.cancel();
                    }
                },
            },
            "shensu4":{
                audio:"shensu1",
                trigger:{
                    player:"phaseDiscardBefore",
                },
                direct:true,
                content:function (){
                    "step 0"
                    var check=player.needsToDiscard()||player.isTurnedOver();
                    player.chooseTarget(get.prompt('shensu'),function(card,player,target){
                        if(player==target) return false;
                        return player.canUse({name:'sha'},target,false);
                    }).set('check',check).set('ai',function(target){
                        if(!_status.event.check) return 0;
                        return get.effect(target,{name:'sha'},_status.event.player);
                    });
                    "step 1"
                    if(result.bool){
                        player.logSkill('shensu4',result.targets);
                        player.turnOver();
                        player.useCard({name:'sha'},result.targets[0],false);
                        trigger.cancel();
                    }
                },
            },
            "l_jianzheng":{
                trigger:{
                    global:"useCard",
                },
                filter:function (event,player){
                    if(!player.countCards('h')) return false;
                    return event.player!=player&&event.card.name=='sha'&&!event.targets.contains(player)&&
                        get.distance(event.player,player,'attack')<=1;
                },
                direct:true,
                content:function (){
                    "step 0"
                    var effect=0;
                    for(var i=0;i<trigger.targets.length;i++){
                        effect-=get.effect(trigger.targets[i],trigger.card,trigger.player,player);
                    }
                    if(effect>0){
                        if(get.color(trigger.card)!='black'){
                            effect=0;
                        }
                        else{
                            effect=1;
                        }
                        if(trigger.targets.length==1){
                            if(trigger.targets[0].hp==1){
                                effect++;
                            }
                            if(effect>0&&trigger.targets[0].countCards('h')<player.countCards('h')){
                                effect++;
                            }
                        }
                        if(effect>0){
                            effect+=6;
                        }
                    }
                    player.chooseCard('h',get.prompt2('l_jianzheng',trigger.player)).set('ai',function(card){
                        if(_status.event.effect>=0){
                            var val=get.value(card);
                            if(val<0) return 10-val;
                            return _status.event.effect-val;
                        }
                        return 0;
                    }).set('effect',effect).set('logSkill',['l_jianzheng',trigger.player]);
                    "step 1"
                    if(result.bool&&result.cards){
                        event.card=result.cards[0];
                        trigger.targets.length=0;
                        trigger.untrigger();
                    }
                    else{
                        event.finish();
                    }
                    "step 2"
                    if(!event.isMine()) game.delayx();
                    "step 3"
                    if(event.card){
                        player.logSkill('l_jianzheng',trigger.player);
                        player.lose(result.cards,ui.special);
                        game.broadcastAll(function(player){
                            var cardx=ui.create.card();
                            cardx.classList.add('infohidden');
                            cardx.classList.add('infoflip');
                            player.$throw(cardx,1000,'nobroadcast');
                        },player);
                    }
                    "step 4"
                    if(event.card){
                        event.card.fix();
                        ui.cardPile.insertBefore(event.card,ui.cardPile.firstChild);
                    }
                    "step 5"
                    if(get.color(trigger.card)!='black'){
                        trigger.targets.push(player);
                        trigger.player.line(player);
                        game.delay();
                        trigger.trigger('useCard');
                    }
                },
            },
            "l_cunmu":{
                audio:2,
				trigger:{
					player:'drawBegin'
				},
				forced:true,
				content:function(){
					trigger.bottom=true;
				},	
            },
            "l_shouxi":{
                trigger:{
                    target:"shaBefore",
                },
                direct:true,
                init:function (player){
        player.storage.l_shouxi=[];
    },
                content:function (){
        'step 0'
        var list=['sha','shan','tao','jiu','taoyuan','wugu','juedou','huogong','jiedao','tiesuo','guohe','shunshou','wuzhong','wanjian','nanman','lebu','bingliang','shandian'];
        for(var i=0;i<player.storage.l_shouxi.length;i++){
            list.remove(player.storage.l_shouxi[i]);
        }
        for(var i=0;i<list.length;i++){
            list[i]=[get.type(list[i]),'',list[i]];
        }
        player.chooseButton([get.prompt('l_shouxi',trigger.player),[list,'vcard']]).set('ai',function(button){
            return Math.random();
        });
        'step 1'
        if(result.bool){
            player.logSkill('l_shouxi');
            var name=result.links[0][2];
            var card=game.createCard(name,get.type(name),'');
            event.cardname=name;
            player.storage.l_shouxi.add(name);
            player.showCards(get.translation(player)+'声明了'+get.translation(name),card);
        }
        else{
            event.finish();
        }
        'step 2'
        var name=event.cardname;
        trigger.player.chooseToDiscard('守玺：弃置一张'+get.translation(name)+'，否则杀对'+get.translation(player)+'无效',function(card){
            return card.name==_status.event.cardname;
        }).set('ai',function(card){
            if(_status.event.att<0){
                return 10-get.value(card);
            }
            return 0;
        }).set('att',get.attitude(trigger.player,player)).set('cardname',name);
        'step 3'
        if(result.bool==false){
            trigger.cancel();
        }
        else{
            trigger.player.gainPlayerCard(player);
        }
    },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                if(card.name=='sha'&&get.attitude(player,target)<0){
                    return 0.3;
                }
            },
                    },
                },
            },
            "l_danshou":{
                enable:"phaseUse",
                filterCard:true,
                position:"he",
                audio:"danshou",
                filter:function (event,player){
                    var num=player.getStat().skill.l_danshou;
                    if(num){
                        num++;
                    }
                    else{
                        num=1;
                    }
                    return player.countCards('he')>=num;
                },
                check:function (card){
                    if(ui.selected.cards.length>=2){
                        return 4-get.value(card);
                    }
                    return 6-get.value(card);
                },
                selectCard:function (card){
                    var num=_status.event.player.getStat().skill.l_danshou;
                    if(num) return num+1;
                    return 1;
                },
                filterTarget:function (card,player,target){
                    if(player==target) return false;
                    var num=player.getStat().skill.l_danshou;
                    if(num){
                        num++;
                    }
                    else{
                        num=1;
                    }
                    if(num<=2&&!target.countCards('he')) return false;
                    return get.distance(player,target,'attack')<=1;
                },
                content:function (){
                    'step 0'
                    var num=player.getStat().skill.l_danshou;
                    switch(num){
                        case 1:player.discardPlayerCard(target,true);break;
                        case 2:target.chooseCard('选择一张牌交给'+get.translation(player),'he',true);break;
                        case 3:target.damage();break;
                        default:game.asyncDraw([player,target],2);
                    }
                    if(num!=2) event.finish();
                    'step 1'
                    if(result.cards){
                        player.gain(result.cards,target);
                        target.$give(result.cards.length,player);
                    }
                },
                ai:{
                    order:8.6,
                    result:{
                        target:function (player,target){
                            var num=player.getStat().skill.l_danshou;
                            if(num){
                                num++;
                            }
                            else{
                                num=1;
                            }
                            if(num>3) return 0;
                            if(num==3) return get.damageEffect(target,player,target);
                            return -1;
                        },
                    },
                },
            },
            "l_haoshi":{
                audio:"haoshi",
                trigger:{
                    player:"phaseDrawBegin",
                },
                threaten:1.4,
                check:function (event,player){
                    if(player.countCards('h')<=1) return true;
                    return game.hasPlayer(function(current){
                        return current!=player&&current.isMinHandcard()&&get.attitude(player,current)>0;
                    });
                },
                content:function (){
                    trigger.num+=2;
                    player.addSkill('l_haoshi2');
                },
                ai:{
                    threaten:2,
                    ai:{
                        noh:true,
                        skillTagFilter:function (player,tag){
                            if(tag=='noh'){
                                if(player.countCards('h')!=2) return false;
                            }
                        },
                    },
                },
            },
            "l_haoshi2":{
                trigger:{
                    player:"phaseDrawEnd",
                },
                forced:true,
                popup:false,
                audio:"ext:异界四国:false",
                content:function (){
                    "step 0"
                    player.removeSkill('l_haoshi2');
                    if(player.countCards('h')<=5){
                        event.finish();
                        return;
                    }
                    player.chooseCardTarget({
                        selectCard:Math.floor(player.countCards('h')/2),
                        filterTarget:function(card,player,target){
                            return target.isMinHandcard();
                        },
                        forced:true,
                        ai2:function(target){
                            return get.attitude(_status.event.player,target);
                        }
                    });
                    "step 1"
                    if(result.targets&&result.targets[0]){
                        result.targets[0].gain(result.cards,player);
                        player.$give(result.cards.length,result.targets[0]);
                    }
                },
            },
            "l_beige":{
                audio:"beige4",
                trigger:{
                    global:"damageEnd",
                },
                filter:function (event,player){
                    return (event.card&&event.card.name=='sha'&&event.source&&
                        event.player.classList.contains('dead')==false&&player.countCards('he'));
                },
                direct:true,
                checkx:function (event,player){
                    var att1=get.attitude(player,event.player);
                    var att2=get.attitude(player,event.source);
                    return att1>0&&att2<=0;
                },
                content:function (){
                    "step 0"
                    var next=player.chooseToDiscard('he',get.prompt('l_beige'));
                    var check=lib.skill.l_beige.checkx(trigger,player);
                    next.set('ai',function(card){
                        if(_status.event.goon) return 8-get.value(card);
                        return 0;
                    });
                    next.set('logSkill','l_beige');
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
                        case 'club':trigger.source.chooseToDiscard('he',2*trigger.num,true);break;
                        case 'spade':trigger.source.turnOver();break;
                    }
                },
                ai:{
                    expose:0.3,
                },
            },
            "l_jieming":{
                audio:"ext:异界四国:2",
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                content:function (){
                    "step 0"
                    player.chooseTarget(get.prompt('l_jieming'),[1,trigger.num],function(card,player,target){
                        return target.countCards('h')<Math.min(target.maxHp,5);
                    }).set('ai',function(target){
                        var att=get.attitude(_status.event.player,target);
                        if(att>2){
                            return Math.min(5,target.maxHp)-target.countCards('h');
                        }
                        return att/3;
                    });
                    "step 1"
                    if(result.bool){
                        player.logSkill('l_jieming',result.targets);
                        for(var i=0;i<result.targets.length;i++){
                            result.targets[i].draw(Math.min(5,result.targets[i].maxHp)-result.targets[i].countCards('h'));
                        }
                    }
                },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                    effect:{
                        target:function (card,player,target,current){
                            if(get.tag(card,'damage')&&target.hp>1){
                                if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
                                var max=0;
                                var players=game.filterPlayer();
                                for(var i=0;i<players.length;i++){
                                    if(get.attitude(target,players[i])>0){
                                        max=Math.max(Math.min(5,players[i].hp)-players[i].countCards('h'),max);
                                    }
                                }
                                switch(max){
                                    case 0:return 2;
                                    case 1:return 1.5;
                                    case 2:return [1,2];
                                    default:return [0,max];
                                }
                            }
                            if((card.name=='tao'||card.name=='caoyao')&&
                                target.hp>1&&target.countCards('h')<=target.hp) return [0,0];
                        },
                    },
                },
            },
            "l_qianxi1":{
                audio:"qianxi",
                trigger:{
                    player:"phaseBegin",
                },
                content:function (){
        "step 0"
        player.draw();
        player.chooseToDiscard('he',true);
        "step 1"
        if(!result.bool){
            event.finish();
            return;
        }
        event.color=get.color(result.cards[0]);
        player.chooseTarget(function(card,player,target){
            return player!=target&&get.distance(player,target)<=1;
        },true).set('ai',function(target){
            return -get.attitude(_status.event.player,target);
        });
        "step 2"
        if(result.bool&&result.targets.length){
            result.targets[0].storage.l_qianxi2=event.color;
            result.targets[0].addSkill('l_qianxi2');
            player.line(result.targets,'green');
            game.addVideo('storage',result.targets[0],['l_qianxi2',event.color]);
        }
    },
            },
            "l_qianxi2":{
                trigger:{
                    global:"phaseAfter",
                },
                forced:true,
                mark:true,
                content:function (){
                    player.removeSkill('l_qianxi2');
                    delete player.storage.l_qianxi2;
                },
                mod:{
                    cardEnabled:function (card,player){
                        if(get.color(card)==player.storage.l_qianxi2) return false;
                    },
                    cardUsable:function (card,player){
                        if(get.color(card)==player.storage.l_qianxi2) return false;
                    },
                    cardRespondable:function (card,player){
                        if(get.color(card)==player.storage.l_qianxi2) return false;
                    },
                    cardSavable:function (card,player){
                        if(get.color(card)==player.storage.l_qianxi2) return false;
                    },
                },
                intro:{
                    content:function (color){
                        return '不能使用或打出'+get.translation(color)+'的牌';
                    },
                },
            },
            "l_tieqi":{
                audio:"tieji",
                trigger:{
                    player:"shaBegin",
                },
                check:function (event,player){
        return get.attitude(player,event.target)<0;
    },
                logTarget:"target",
                content:function (){
        "step 0"
        player.judge(function(){return 0});
        if(!trigger.target.hasSkill('fengyin')){
            trigger.target.addTempSkill('fengyin');
        }
        "step 1"
        var suit=get.suit(result.card);
        var target=trigger.target;
        var num=target.countCards('h','shan');
        target.chooseToDiscard('请弃置一张'+get.translation(suit)+'牌，否则不能使用闪抵消此杀','he',function(card){
            return get.suit(card)==_status.event.suit;
        }).set('ai',function(card){
            var num=_status.event.num;
            if(num==0) return 0;
            if(card.name=='shan') return num>1?2:0;
            return 8-get.value(card);
        }).set('num',num).set('suit',suit);
        "step 2"
        if(!result.bool){
            trigger.directHit=true;
        }
    },
            },
            "l_xiansi":{
                audio:"xiansi",
                trigger:{
                    player:"phaseBegin",
                },
                direct:true,
                init:function (player){
                    player.storage.l_xiansi=[];
                },
                content:function (){
                    "step 0"
                    player.chooseTarget(get.prompt('l_xiansi'),[1,2],function(card,player,target){
                        return target.countCards('he')>0;
                    },function(target){
                        return -get.attitude(_status.event.player,target);
                    });
                    "step 1"
                    if(result.bool){
                        player.logSkill('l_xiansi',result.targets);
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
                        player.storage.l_xiansi=player.storage.l_xiansi.concat(result.links);
                        player.markSkill('l_xiansi');
                        player.syncStorage('l_xiansi');
                        event.current.lose(result.links,ui.special);
                        event.current.$give(result.links,player);
                        event.goto(2);
                    }
                },
                intro:{
                    content:"cards",
                    onunmark:function (storage,player){
                        if(storage&&storage.length){
                            for(var i=0;i<storage.length;i++){
                                storage[i].discard();
                            }
                            player.$throw(storage);
                            player.storage.l_xiansi.length=0;
                        }
                    },
                },
                ai:{
                    threaten:2,
                },
                global:"l_xiansi2",
            },
            "l_xiansi2":{
                enable:"phaseUse",
                audio:"xiansi2",
                forceaudio:true,
                filter:function (event,player){
                    var players=game.filterPlayer();
                    for(var i=0;i<players.length;i++){
                        if(players[i].storage.l_xiansi){
                            return players[i].storage.l_xiansi.length>1&&player.canUse('sha',players[i],true,true);
                        }
                    }
                    return false;
                },
                direct:true,
                delay:0,
                content:function (){
                    "step 0"
                    var targets=game.filterPlayer(function(current){
                        if(current.storage.l_xiansi){
                            return current.storage.l_xiansi.length>1&&player.canUse('sha',current,true,true);
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
                        if(event.target.storage.l_xiansi.length==2){
                            event.directresult=event.target.storage.l_xiansi.slice(0);
                        }
                        else{
                            player.chooseCardButton('移去两张“逆”',2,event.target.storage.l_xiansi,true);
                        }
                    }
                    else{
                        event.finish();
                    }
                    "step 3"
                    if(event.directresult||result.bool){
                        player.logSkill('l_xiansi2');
                        var links=event.directresult||result.links;
                        for(var i=0;i<links.length;i++){
                            event.target.storage.l_xiansi.remove(links[i]);
                        }
                        event.target.syncStorage('l_xiansi');
                        if(!event.target.storage.l_xiansi.length){
                            event.target.unmarkSkill('l_xiansi');
                        }
                        else{
                            event.target.markSkill('l_xiansi');
                        }
                        event.target.$throw(links);
                        game.log(event.target,'被移去了',links);
                        for(var i=0;i<links.length;i++){
                            links[i].discard();
                        }
                        player.useCard({name:'sha'},event.target);
                    }
                },
                ai:{
                    order:function (){
                        return get.order({name:'sha'})+0.05;
                    },
                    result:{
                        player:function (player){
                            var target=game.findPlayer(function(current){
                                return current.storage.l_xiansi;
                            });
                            if(target){
                                return get.effect(target,{name:'sha'},player,player);
                            }
                        },
                    },
                },
            },
            "l_qieting1":{
                audio:"qieting",
                global:"l_qieting2",
                globalSilent:true,
                trigger:{
                    global:"phaseEnd",
                },
                filter:function (event,player){
        return event.player!=player&&!event.player.tempSkills.l_qieting3&&event.player.isAlive();
    },
                direct:true,
                content:function (){
        "step 0"
        var next;
        if(trigger.player.hasCard(function(card){
            return !player.getEquip(card);
        },'e')){
            next=player.chooseControl('移动装备','draw_card','cancel2',function(event,player){
                var source=_status.event.source;
                var att=get.attitude(player,source);
                if(source.hasSkillTag('noe')){
                    if(att>0){
                        return '移动装备';
                    }
                }
                else{
                    if(att<=0){
                        return '移动装备';
                    }
                }
                return 'draw_card';
            }).set('source',trigger.player);
        }
        else{
            next=player.chooseControl('draw_card','cancel2',function(){
                return 'draw_card';
            });
        }
        next.set('prompt',get.prompt('l_qieting1',trigger.player));
        "step 1"
        if(result.control=='移动装备'){
            player.logSkill('l_qieting1',trigger.player);
            player.choosePlayerCard(trigger.player,'e','将一张装备牌移至你的装备区').set('filterButton',function(button){
                return !_status.event.player.getEquip(button.link);
            });
        }
        else{
            if(result.control=='draw_card'){
                player.logSkill('l_qieting1');
                player.draw();
            }
            event.finish();
        }
        "step 2"
        if(result&&result.links&&result.links.length){
            game.delay(2);
            trigger.player.$give(result.links[0],player);
            player.equip(result.links[0]);
            player.addExpose(0.2);
        }
    },
            },
            "l_qieting2":{
                trigger:{
                    player:"useCard",
                },
                filter:function (event,player){
                    return _status.currentPhase==player&&event.targets&&(event.targets.length>1||event.targets[0]!=player);
                },
                forced:true,
                popup:false,
                content:function (){
                    player.addTempSkill('l_qieting3');
                },
            },
            "l_qieting3":{
            },
            "l_shenxian":{
                audio:"ext:异界四国:2",
                trigger:{
                    global:"discardAfter",
                },
                filter:function (event,player){
                    if(event.player==player||_status.currentPhase==player) return false;
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
                    if(trigger.delay==false) game.delay();
                    "step 1"
                    player.draw();
                },
                ai:{
                    threaten:1.5,
                },
            },
            "l_shenxian2":{
            },
            "ll_shenxian":{
                audio:"shenxian",
                trigger:{
                    global:"discardAfter",
                },
                filter:function (event,player){
                    if(event.player==player||_status.currentPhase==player) return false;
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
                    if(trigger.delay==false) game.delay();
                    "step 1"
                    player.draw();
                },
                ai:{
                    threaten:1.5,
                },
            },
            "ll_shenxian2":{
            },
            "l_shuangxiong":{
                audio:"shuangxiong1",
                trigger:{
                    player:"phaseDrawBefore",
                },
                check:function (event,player){
                    if(player.countCards('h')>player.hp) return true;
                    if(player.countCards('h')>3) return true;
                    return false;
                },
                content:function (){
                    "step 0"
                    player.judge(ui.special);
                    "step 1"
                    player.gain(result.card);
                    player.$gain2(result.card);
                    player.addTempSkill('l_shuangxiong2');
                    player.storage.l_shuangxiong=get.color(result.card);
                    trigger.num--;
                },
            },
            "l_shuangxiong2":{
                audio:"shuangxiong2",
                enable:"phaseUse",
                viewAs:{
                    name:"juedou",
                },
                filterCard:function (card,player){
                    return get.color(card)!=player.storage.l_shuangxiong;
                },
                check:function (card){
                    return 10-get.value(card);
                },
                ai:{
                    basic:{
                        order:10,
                        useful:1,
                        value:5.5,
                    },
                    result:{
                        target:-1.5,
                        player:function (player,target){
                            if(get.damageEffect(target,player,target)>0&&get.attitude(player,target)>0&&get.attitude(target,player)>0){
                                return 0;
                            }
                            var hs1=target.getCards('h','sha');
                            var hs2=player.getCards('h','sha');
                            if(hs1.length>hs2.length+1){
                                return -2;
                            }
                            var hsx=target.getCards('h');
                            if(hsx.length>2&&hs2.length==0&&hsx[0].number<6){
                                return -2;
                            }
                            if(hsx.length>3&&hs2.length==0){
                                return -2;
                            }
                            if(hs1.length>hs2.length&&(!hs2.length||hs1[0].number>hs2[0].number)){
                                return -2;
                            }
                            return -0.5;
                        },
                    },
                    tag:{
                        respond:2,
                        respondSha:2,
                        damage:1,
                    },
                },
            },
            "l_xinjuece1":{
                audio:"juece",
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                filter:function (event,player){
        return game.hasPlayer(function(player){
            return player.countCards('h')==0;
        });
    },
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt('l_xinjuece1'),function(card,player,target){
            return target.countCards('h')==0;
        }).set('ai',function(target){
            var player=_status.event.player;
            return get.damageEffect(target,player,player);
        });
        'step 1'
        if(result.bool){
            player.logSkill('juece',result.targets);
            result.targets[0].damage();
        }
    },
            },
            "l_xinmieji":{
                audio:"mieji",
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
                    return player.countCards('h',{type:['trick','delay'],color:'black'});
                },
                filterCard:function (card){
                    return get.color(card)=='black'&&get.type(card,'trick')=='trick';
                },
                filterTarget:function (card,player,target){
                    return target!=player&&target.countCards('h')>0;
                },
                discard:false,
                delay:false,
                check:function (card){
                    return 8-get.value(card);
                },
                content:function (){
                    'step 0'
                    player.showCards(cards);
                    'step 1'
                    ui.cardPile.insertBefore(cards[0],ui.cardPile.firstChild);
                    var n1=target.getCards('he',function(card){
                        if(!lib.filter.cardDiscardable(card,player)) return false;
                        return get.type(card,'trick')=='trick';
                    });
                    var n2=target.getCards('he',function(card){
                        if(!lib.filter.cardDiscardable(card,player)) return false;
                        return get.type(card,'trick')!='trick';
                    });
                    if(n1.length>1||n2.length>2||(n1.length==1&&n2.length==2)){
                        target.chooseToDiscard('弃置一张锦囊牌，或两张非锦囊牌',true,'he',function(card,player){
                            if(!lib.filter.cardDiscardable(card,player)) return false;
                            if(!_status.event.nontrick){
                                return get.type(card,'trick')=='trick';
                            }
                            if(ui.selected.cards.length){
                                return get.type(card,'trick')!='trick';
                            }
                            return true;
                        }).set('ai',function(card){
                            if(get.type(card,'trick')=='trick'){
                                return 8-get.value(card);
                            }
                            return -get.value(card);
                        }).set('selectCard',function(){
                            if(ui.selected.cards.length==1&&get.type(ui.selected.cards[0],'trick')=='trick'){
                                return 1;
                            }
                            return 2;
                        }).set('nontrick',n2.length>=2).set('complexCard',true);
                    }
                    else{
                        if(n1.length){
                            target.discard(n1);
                        }
                        else if(n2.length){
                            target.discard(n2);
                        }
                    }
                },
                ai:{
                    order:9,
                    result:{
                        target:-1,
                    },
                },
            },
            "l_fenwei":{
                skillAnimation:true,
                audio:"ext:异界四国:2",
                audioname:["heqi"],
                unique:true,
                mark:true,
                trigger:{
                    global:"useCard",
                },
                priority:5,
                filter:function (event,player){
                    if(get.type(event.card)!='trick') return false;
                    if(get.info(event.card).multitarget) return false;
                    if(event.targets.length<2) return false;
                    if(player.storage.l_fenwei) return false;
                    return true;
                },
                init:function (player){
                    player.storage.l_fenwei=false;
                },
                direct:true,
                content:function (){
                    "step 0"
                    player.chooseTarget(get.prompt('l_fenwei'),
                        [1,trigger.targets.length],function(card,player,target){
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
                        player.awakenSkill('l_fenwei');
                        player.logSkill('l_fenwei',result.targets);
                        player.storage.l_fenwei=true;
                        for(var i=0;i<result.targets.length;i++){
                            trigger.targets.remove(result.targets[i]);
                        }
                        game.delay();
                    }
                },
                intro:{
                    content:"limited",
                },
            },
            "l_qizhou":{
                trigger:{
                    player:["phaseBefore","equipAfter","loseAfter"],
                },
                forced:true,
                popup:false,
                derivation:["l_mashu","l_yingzi","l_duanbing","l_fenwei"],
                filter:function (event,player){
        if(player.equiping) return false;
        var suits=[];
        var es=player.getCards('e');
        for(var i=0;i<es.length;i++){
            suits.add(get.suit(es[i]));
        }
        if(player.additionalSkills.l_qizhou){
            return player.additionalSkills.l_qizhou.length!=suits.length;
        }
        else{
            return suits.length>0;
        }
    },
                content:function (){
        var suits=[];
        var es=player.getCards('e');
        for(var i=0;i<es.length;i++){
            suits.add(get.suit(es[i]));
        }
        player.removeAdditionalSkill('l_qizhou');
        switch(suits.length){
            case 1:player.addAdditionalSkill('l_qizhou',['l_mashu']);break;
            case 2:player.addAdditionalSkill('l_qizhou',['l_mashu','l_yingzi']);break;
            case 3:player.addAdditionalSkill('l_qizhou',['l_mashu','l_yingzi','l_duanbing']);break;
            case 4:player.addAdditionalSkill('l_qizhou',['l_mashu','l_yingzi','l_duanbing','l_fenwei']);break;
        }
    },
                ai:{
                    threaten:1.2,
                },
            },
            "l_dujin":{
                audio:"dujin",
                trigger:{
                    player:"phaseDrawBegin",
                },
                frequent:true,
                content:function (){
                    trigger.num+=1+Math.ceil(player.countCards('e')/2);
                },
            },
            "ll_dujin":{
                trigger:{
                    player:"phaseDrawBegin",
                },
                frequent:true,
                content:function (){
                    trigger.num+=1+Math.ceil(player.countCards('e')/2);
                },
            },
            "l_zhichi":{
                audio:"zhichi",
                trigger:{
                    player:"damageEnd",
                },
                forced:true,
                filter:function (event,player){
                    return _status.currentPhase!=player;
                },
                content:function (){
                    player.addTempSkill('l_zhichi2',['phaseAfter','phaseBefore']);
                },
            },
            "l_zhichi2":{
                trigger:{
                    target:"useCardToBefore",
                },
                forced:true,
                priority:15,
                filter:function (event,player){
                    return get.type(event.card)=='trick'||event.card.name=='sha';
                },
                content:function (){
                    game.log(player,'发动了智迟，',trigger.card,'对',trigger.target,'失效')
                    trigger.cancel();
                },
                mark:true,
                intro:{
                    content:"杀或普通锦囊牌对你无效",
                },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                            if(get.type(card)=='trick'||card.name=='sha') return 'zeroplayertarget';
                        },
                    },
                },
            },
            "l_xiashu":{
                trigger:{
                    player:"phaseUseBegin",
                },
                direct:true,
                filter:function (event,player){
                    return player.countCards('h')>0;
                },
                content:function (){
                    'step 0'
                    var maxval=0;
                    var hs=player.getCards('h');
                    for(var i=0;i<hs.length;i++){
                        maxval=Math.max(maxval,get.value(hs[i]));
                    }
                    player.chooseTarget(get.prompt('l_xiashu'),lib.filter.notMe).set('ai',function(target){
                        var player=_status.event.player;
                        var maxval=_status.event.maxval;
                        var dh=target.countCards('h')-player.countCards('h');
                        var att=get.attitude(player,target);
                        if(target.hasSkill('qingjian')) return false;
                        if(dh<=0) return 0;
                        if(att>0) return 0.1;
                        if(maxval>=8) return 0;
                        if(att==0) return 0.2;
                        if(dh>=3) return dh;
                        if(dh==2){
                            if(maxval<=7) return dh;
                        }
                        if(maxval<=6) return dh;
                        return 0;

                    }).set('maxval',maxval);
                    'step 1'
                    if(result.bool){
                        player.logSkill('l_xiashu',result.targets);
                        event.target=result.targets[0];
                        var hs=player.getCards('h');
                        event.target.gain(hs,player);
                        player.$give(hs.length,event.target);
                    }
                    else{
                        event.finish();
                    }
                    'step 2'
                    var hs=event.target.getCards('h');
                    if(!hs.length){
                        event.finish();
                        return;
                    }
                    hs.sort(function(a,b){
                        return get.value(b,player,'raw')-get.value(a,player,'raw');
                    });
                    event.target.chooseCard([1,hs.length],'展示至少一张手牌',true).set('ai',function(card){
                        var rand=_status.event.rand;
                        var list=_status.event.list;
                        if(_status.event.att){
                            if(ui.selected.cards.length>=Math.ceil(list.length/2)) return 0;
                            var value=get.value(card);
                            if(_status.event.getParent().player.isHealthy()){
                                value+=(get.tag(card,'damage')?1.5:0)+(get.tag(card,'draw')?2:0);
                            }
                            return value;
                        }
                        if(ui.selected.cards.length>=Math.floor(list.length/2)) return 0;
                        return (list.indexOf(card)%2==rand)?1:0;
                    }).set('rand',(Math.random()<0.6)?1:0).set('list',hs).set('att',get.attitude(event.target,player)>0);
                    'step 3'
                    event.target.showCards(result.cards);
                    event.cards1=result.cards;
                    event.cards2=event.target.getCards('h',function(card){
                        return !event.cards1.contains(card);
                    });
                    'step 4'
                    var choice;
                    var num1=event.cards1.length;
                    var num2=event.cards2.length;
                    if(get.attitude(event.target,player)>0&&num1>=num2){
                        choice=0;
                    }
                    else if(num1==num2){
                        choice=(Math.random()<0.45)?0:1;
                    }
                    else if(num1>num2){
                        if(num1-num2==1){
                            choice=(Math.random()<0.6)?0:1;
                        }
                        else{
                            choice=0;
                        }
                    }
                    else{
                        if(num2-num1==1){
                            choice=(Math.random()<0.6)?1:0;
                        }
                        else{
                            choice=1;
                        }
                    }
                    player.chooseControl(function(event,player){
                        return _status.event.choice;
                    }).set('choiceList',['获得'+get.translation(event.target)+'展示的牌',
                    '获得'+get.translation(event.target)+'未展示的牌']).set('choice',choice);
                    'step 5'
                    if(result.index==0){
                        player.gain(event.cards1,target);
                        target.$give(event.cards1,player);
                    }
                    else{
                        player.gain(event.cards2,target);
                        target.$giveAuto(event.cards2,player);
                    }
                },
                ai:{
                    expose:0.1,
                },
            },
            "l_kuanshi":{
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                content:function (){
                    'step 0'
                    player.chooseTarget(get.prompt('l_kuanshi')).set('ai',function(target){
                        if(get.attitude(_status.event.player,target)>0){
                            return 1/Math.sqrt(target.hp+1);
                        }
                        return 0;
                    });
                    'step 1'
                    if(result.bool){
                        var target=result.targets[0];
                        player.logSkill('l_kuanshi',target);
                        target.storage.l_kuanshi2=player;
                        target.addSkill('l_kuanshi2');
                    }
                },
            },
            "l_kuanshi2":{
                mark:"character",
                intro:{
                    content:"下一次受到超过1点的伤害时，防止此伤害，然后$跳过下个回合的摸牌阶段",
                },
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                filter:function (event,player){
                    return event.num>1;
                },
                priority:-11,
                content:function (){
                    trigger.cancel();
                    player.storage.l_kuanshi2.skip('phaseDraw');
                    player.removeSkill('l_kuanshi2');
                },
                group:"l_kuanshi2_remove",
                onremove:true,
                subSkill:{
                    remove:{
                        trigger:{
                            global:["phaseBegin","dieAfter"],
                        },
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                            return event.player==player.storage.l_kuanshi2;
                        },
                        content:function (){
                            player.removeSkill('l_kuanshi2');
                        },
                        sub:true,
                    },
                },
            },
            "l_ganlu":{
                enable:"phaseUse",
                usable:1,
                audio:"ganlu",
                selectTarget:2,
                filterTarget:function (card,player,target){
                    if(target.isMin()) return false;
                    if(ui.selected.targets.length==0) return true;
                    if(ui.selected.targets[0].countCards('e')==0&&target.countCards('e')==0) return false;
                    return Math.abs(ui.selected.targets[0].countCards('e')-target.countCards('e'))<=player.maxHp-player.hp;
                },
                multitarget:true,
                content:function (){
                    "step 0"
                    event.cards=[targets[0].getCards('e'),targets[1].getCards('e')];
                    targets[0].lose(event.cards[0],ui.special);
                    targets[1].lose(event.cards[1],ui.special);
                    if(event.cards[0].length) targets[0].$give(event.cards[0],targets[1]);
                    if(event.cards[1].length) targets[1].$give(event.cards[1],targets[0]);
                    "step 1"
                    for(var i=0;i<event.cards[1].length;i++){
                        targets[0].equip(event.cards[1][i]);
                    }
                    for(var i=0;i<event.cards[0].length;i++){
                        targets[1].equip(event.cards[0][i]);
                    }
                },
                ai:{
                    order:10,
                    threaten:function (player,target){
                        return 0.8*Math.max(1+target.maxHp-target.hp);
                    },
                    result:{
                        target:function (player,target){
                            var list1=[];
                            var list2=[];
                            var num=player.maxHp-player.hp;
                            var players=game.filterPlayer();
                            for(var i=0;i<players.length;i++){
                                if(get.attitude(player,players[i])>0) list1.push(players[i]);
                                else if(get.attitude(player,players[i])<0) list2.push(players[i]);
                            }
                            list1.sort(function(a,b){
                                return a.countCards('e')-b.countCards('e');
                            });
                            list2.sort(function(a,b){
                                return b.countCards('e')-a.countCards('e');
                            });
                            var delta;
                            for(var i=0;i<list1.length;i++){
                                for(var j=0;j<list2.length;j++){
                                    delta=list2[j].countCards('e')-list1[i].countCards('e');
                                    if(delta<=0) continue;
                                    if(delta<=num){
                                        if(target==list1[i]||target==list2[j]){
                                            return get.attitude(player,target);
                                        }
                                        return 0;
                                    }
                                }
                            }
                            return 0;
                        },
                    },
                    effect:{
                        target:function (card,player,target){
                            if(target.hp==target.maxHp&&get.tag(card,'damage')) return 0.2;
                        },
                    },
                },
            },
            "l_duanxie1":{
                enable:"phaseUse",
                usable:1,
                audio:"duanxie",
                filterTarget:function (card,player,target){
        return player!=target&&!target.isLinked();
    },
                content:function (){
        "step 0"
        if(!target.isLinked()) target.link();
        "step 1"
        if(!player.isLinked()) player.link();
    },
                ai:{
                    result:{
                        target:-1,
                        player:function (player){
                return player.isLinked()?0:-0.8;
            },
                    },
                    order:2,
                    expose:0.3,
                    effect:{
                        target:function (card){
                if(card.name=='tiesuo'){
                    return 0.5;
                }
            },
                    },
                },
            },
            "l_fenmin":{
                audio:"fenming",
                trigger:{
                    player:"phaseEnd",
                },
                check:function (event,player){
        var num=game.countPlayer(function(current){
            if(current.isLinked()&&current.countCards('he')){
                return get.attitude(player,current);
            }
        });
        return num<0;
    },
                filter:function (event,player){
        return player.isLinked();
    },
                content:function (){
        "step 0"
        event.targets=game.filterPlayer(function(current){
            if(current.isLinked()&&current.countCards('he')){
                return true;
            }
        });
        event.num=0;
        event.targets.sort(lib.sort.seat);
        "step 1"
        if(event.num<event.targets.length){
            var target=event.targets[event.num];
            if(player==target){
                player.chooseToDiscard(true,'he');
            }
            else{
                player.discardPlayerCard(true,'he',target);
            }
            event.num++;
            event.redo();
        }
    },
            },
            "l_taiji1":{
                trigger:{
                    player:"respond",
                },
                filter:function (event,player){
        return event.card.name=='shan'&&player.hasSha();
    },
                direct:true,
                content:function (){
        player.chooseToUse({name:'sha'},'太极：是否使用一张杀？').logSkill='l_taiji';
    },
            },
            "l_jiudu1":{
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
        var next=player.chooseToDiscard(get.prompt('zhendu',trigger.player));
        next.set('ai',function(card){
            if(_status.event.nono) return -1;
            return 7-get.useful(card);
        });
        next.set('logSkill',['zhendu',trigger.player]);
        next.set('nono',nono);
        "step 1"
        if(result.bool){
            trigger.player.damage();
        }
        else{
            event.finish();
        }
        "step 2"
        trigger.player.useCard({name:'jiu'},trigger.player);
    },
                ai:{
                    threaten:2,
                    expose:0.3,
                },
            },
            "l_qiluan":{
                trigger:{
                    source:"dieAfter",
                },
                priority:-10,
                silent:true,
                locked:false,
                onremove:function (player){
                    delete player.storage.l_qiluan;
                },
                filter:function (event){
                    return _status.currentPhase!=event.player;
                },
                content:function (){
                    if(!player.storage.l_qiluan){
                        player.storage.l_qiluan=1;
                    }
                    else{
                        player.storage.l_qiluan++;
                    }
                },
                group:["l_qiluan2","l_qiluan3","l_qiluan4"],
                forced:true,
                popup:false,
            },
            "l_qiluan2":{
                audio:"ext:异界四国:2",
                trigger:{
                    global:"phaseAfter",
                },
                frequent:true,
                filter:function (event,player){
                    return player.storage.l_qiluan?true:false;
                },
                content:function (){
                    if(get.mode()=='guozhan'){
                        player.draw(3);
                    }
                    else{
                        player.draw(4*player.storage.l_qiluan);                    
                    }
                    player.storage.l_qiluan=0;
                },
            },
            "l_qiluan3":{
                trigger:{
                    source:"dieAfter",
                },
                frequent:true,
                priority:-10,
                audio:"l_qiluan2",
                filter:function (event){
                    return _status.currentPhase==event.player;
                },
                content:function (){
                if(get.mode()!='guozhan'){
                var num=4;
                }else{
                    var num=3;
                    }
                    if(player.storage.l_qiluan){
                        if(get.mode()!='guozhan'){
                            num+=4*player.storage.l_qiluan;
                        }
                        player.storage.l_qiluan=0;
                    }
                    player.draw(num);
                },
            },
            "l_qiluan4":{
                trigger:{
                    global:"phaseBegin",
                },
                silent:true,
                content:function (){
                    player.storage.l_qiluan=0;
                },
                forced:true,
                popup:false,
            },
            "l_zhensha1":{
                trigger:{
                    global:"dying",
                },
                priority:9,
                filter:function (event,player){
        return event.player.hp<=0&&(player.countCards('h','jiu')>0||player.countCards('h',{color:'black'})>=2)&&player!=event.player;
    },
                direct:true,
                content:function (){
        'step 0'
        var goon=(get.attitude(player,trigger.player)<0);
        var next=player.chooseToDiscard('鸠杀：是否弃置一张酒或两张黑色手牌令'+get.translation(trigger.player)+'立即死亡？');
        next.ai=function(card){
            if(ui.selected.cards.length){
                if(ui.selected.cards[0].name=='jiu') return 0;
            }
            if(goon){
                if(card.name=='jiu') return 2;
                return 1;
            }
            return 0;
        };
        next.filterCard=function(card){
            if(ui.selected.cards.length){
                return get.color(card)=='black';
            }
            return get.color(card)=='black'||card.name=='jiu';
        };
        next.complexCard=true,
        next.logSkill=['l_zhensha',trigger.player];
        next.selectCard=function(){
            if(ui.selected.cards.length){
                if(get.color(ui.selected.cards[0])!='black') return [1,1];
            }
            return [1,2];
        }
        'step 1'
        if(result.bool){
            trigger.player.die();
        }
        else{
            event.finish();
        }
        'step 2'
        if(!trigger.player.isAlive()){
            trigger.cancel(true);
        }
    },
                ai:{
                    threaten:1.5,
                },
            },
            "l_tuqiang1":{
                trigger:{
                    player:"respond",
                },
                filter:function (event,player){
        return event.card&&event.card.name=='shan';
    },
                frequent:true,
                content:function (){
        player.draw();
    },
                ai:{
                    mingzhi:false,
                    effect:{
                        target:function (card,player,target){
                if(get.tag(card,'respondShan')){
                    return 0.8;
                }
            },
                    },
                },
            },
            "l_fenghuo1":{
                enable:"chooseToUse",
                filter:function (event,player){
        return player.countCards('e')>0;
    },
                filterCard:true,
                position:"e",
                viewAs:{
                    name:"nanman",
                },
                prompt:"将一张装备区内的牌当南蛮入侵使用",
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
            },
            "l_zhuhai1":{
                trigger:{
                    global:"phaseEnd",
                },
                direct:true,
                filter:function (event,player){
        return event.player.isAlive()&&event.player.getStat('damage')&&
        lib.filter.targetEnabled({name:'sha'},player,event.player)&&player.hasSha();
    },
                content:function (){
        player.chooseToUse({name:'sha'},'诛害：是否对'+get.translation(trigger.player)+'使用一张杀？',
            trigger.player,-1).set('logSkill','l_zhuhai');
    },
            },
            "l_moukui":{
                trigger:{
                    player:"shaBegin",
                },
                direct:true,
                audio:"moukui",
                content:function (){
                    "step 0"
                    var controls=['draw_card'];
                    if(trigger.target.countCards('he')){
                        controls.push('discard_card');
                    }
                    controls.push('cancel');
                    player.chooseControl(controls).set('ai',function(){
                        var trigger=_status.event.getTrigger();
                        if(trigger.target.countCards('he')&&get.attitude(_status.event.player,trigger.target)<0){
                            return 'discard_card';
                        }
                        else{
                            return 'draw_card';
                        }
                    }).set('prompt',get.prompt('l_moukui'));
                    "step 1"
                    if(result.control=='draw_card'){
                        player.draw();
                        player.logSkill('l_moukui');
                    }
                    else if(result.control=='discard_card'&&trigger.target.countCards('he')){
                        player.discardPlayerCard(trigger.target,'he',true).logSkill=['l_moukui',trigger.target];
                    }
                    else event.finish();
                    "step 2"
                    player.addTempSkill('l_moukui2','shaEnd');
                },
                ai:{
                    expose:0.1,
                },
            },
            "l_moukui2":{
                audio:"ext:异界四国:false",
                trigger:{
                    player:"shaMiss",
                },
                forced:true,
                filter:function (event,player){
                    return player.countCards('he')>0;
                },
                content:function (){
                    trigger.target.discardPlayerCard(player,true);
                },
            },
            "l_qiangwu":{
                audio:"ext:异界四国:2",
                enable:"phaseUse",
                usable:1,
                content:function (){
                    "step 0"
                    player.judge();
                    "step 1"
                    player.storage.l_qiangwu=result.number;
                },
                ai:{
                    result:{
                        player:1,
                    },
                    order:11,
                },
                mod:{
                    targetInRange:function (card,player){
                        if(_status.currentPhase==player&&card.name=='sha'&&card.number<player.storage.l_qiangwu) return true;
                    },
                    cardUsable:function (card,player){
                        if(_status.currentPhase==player&&card.name=='sha'&&card.number>player.storage.l_qiangwu) return Infinity;
                    },
                },
                group:["l_qiangwu2","l_qiangwu3"],
            },
            "l_qiangwu2":{
                trigger:{
                    player:"phaseUseBegin",
                },
                silent:true,
                content:function (){
                    delete player.storage.l_qiangwu;
                },
                forced:true,
                popup:false,
            },
            "l_qiangwu3":{
                trigger:{
                    player:"useCard",
                },
                filter:function (event,player){
                    if(_status.currentPhase==player&&event.card.name=='sha'&&
                    event.card.number>player.storage.l_qiangwu) return true;
                    return false;
                },
                forced:true,
                popup:false,
                content:function (){
                    if(player.stat[player.stat.length-1].card.sha>0){
                        player.stat[player.stat.length-1].card.sha--;
                    }
                },
            },
            "l_weikui":{
                audio:"kuiwei",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
                    return target!=player&&target.countCards('h');
                },
                content:function (){
                    'step 0'
                    player.loseHp();
                    'step 1'
                    if(target.countCards('h','shan')){
                        player.viewHandcards(target);
                        player.useCard({name:'sha'},target,false);
                        player.storage.l_weikui2=target;
                        player.addTempSkill('l_weikui2');
                    }
                    else{
                        player.discardPlayerCard(target,'visible',true);
                    }
                },
                ai:{
                    order:8,
                    result:{
                        target:function (player,target){
                            if(player.hp<=2) return 0;
                            if(player.hp==3) return target.hp<=2?-1:0;
                            return -1;
                        },
                    },
                },
            },
            "l_weikui2":{
                onremove:true,
                mod:{
                    globalFrom:function (from,to){
                        if(to==from.storage.l_weikui2) return -Infinity;
                    },
                },
                mark:"character",
                intro:{
                    content:"与$的距离视为1直到回合结束",
                },
            },
            "l_qianju1":{
                mod:{
                    globalFrom:function (from,to,distance){
            return distance-(from.maxHp-from.hp);
        },
                },
            },
            "l_quji1":{
                enable:"phaseUse",
                usable:1,
                position:"he",
                filterCard:true,
                selectCard:function (){
        var player=_status.event.player;
        var num=game.countPlayer(function(current){
            return current.isDamaged();
        });
        return [1,Math.min(num,player.maxHp-player.hp)];
    },
                filterTarget:function (card,player,target){
        return target.hp<target.maxHp;
    },
                filter:function (event,player){
        return player.hp<player.maxHp;
    },
                selectTarget:function (){
        return ui.selected.cards.length;
    },
                check:function (card){
        var player=_status.event.player;
        if(ui.selected.cards.length>=game.countPlayer(function(current){
            return get.attitude(player,current)>0&&current.isDamaged();
        })){
            return -1;
        }
        if(get.color(card)=='black') return -1;
        return 9-get.value(card);
    },
                content:function (){
        "step 0"
        target.recover();
        "step 1"
        if(target==player){
            for(var i=0;i<cards.length;i++){
                if(get.color(cards[i])=='black'){
                    player.loseHp();
                    break;
                }
            }
        }
    },
                ai:{
                    result:{
                        target:1,
                    },
                    order:6,
                },
            },
            "l_ranshang":{
                audio:"ranshang",
                trigger:{
                    player:"damageEnd",
                },
                filter:function (event,player){
                    return event.num>0&&event.nature=='fire';
                },
                init:function (player){
                    player.storage.l_ranshang=0;
                },
                forced:true,
                check:function (){
                    return false;
                },
                content:function (){
                    if(player.storage.l_ranshang){
                        player.storage.l_ranshang+=trigger.num;
                    }
                    else{
                        player.storage.l_ranshang=trigger.num;
                    }
                    player.markSkill('l_ranshang');
                    game.addVideo('storage',player,['l_ranshang',player.storage.l_ranshang]);
                },
                intro:{
                    content:"mark",
                },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                            if(card.name=='sha'){
                                if(card.nature=='fire'||player.hasSkill('zhuque_skill')) return 2;
                            }
                            if(get.tag(card,'fireDamage')&&current<0) return 2;
                        },
                    },
                },
                group:"l_ranshang2",
            },
            "l_ranshang2":{
                audio:"ranshang2",
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                filter:function (event,player){
                    return player.storage.l_ranshang>0;
                },
                content:function (){
                    player.loseHp(player.storage.l_ranshang);
                },
            },
            "l_xueji1":{
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        return player.countCards('he',{color:'red'})>0;
    },
                filterTarget:true,
                selectTarget:function (){
        var player=_status.event.player
        return [1,Math.max(1,player.maxHp-player.hp)];
    },
                position:"he",
                filterCard:{
                    color:"red",
                },
                check:function (card){
        return 8-get.value(card);
    },
                multitarget:true,
                multiline:true,
                line:"fire",
                content:function (){
        'step 0'
        event.delay=false;
        for(var i=0;i<targets.length;i++){
            if(!targets[i].isLinked()){
                targets[i].link(true);
                event.delay=true;
            }
        }
        'step 1'
        if(event.delay){
            game.delay();
        }
        'step 2'
        targets[0].damage('fire');
    },
                ai:{
                    damage:true,
                    threaten:1.5,
                    order:7,
                    result:{
                        target:function (player,target){
                var eff=get.damageEffect(target,player,target,'fire');
                if(target.isLinked()){
                    return eff/10;
                }
                else{
                    return eff;
                }
            },
                    },
                },
            },
            "l_yingjian":{
                trigger:{
                    player:"phaseBegin",
                },
                direct:true,
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('l_yingjian'),function(card,player,target){
            return lib.filter.targetEnabled({name:'sha'},player,target);
        }).set('ai',function(target){
            return get.effect(target,{name:'sha'},_status.event.player);
        });
        "step 1"
        if(result.bool){
            player.logSkill('l_yingjian');
            player.useCard({name:'sha'},result.targets,false);
        }
    },
                ai:{
                    threaten:function (player,target){
            return 1.6;
        },
                },
            },
            "l_guzheng1":{
                audio:"guzheng",
                // unique:true,
				// gainable:true,
				group:["l_guzheng1_count"],
				subSkill:{
					count:{
						trigger:{global:['discardAfter','cardsDiscardAfter']},
						forced:true,
						silent:true,
						popup:false,
						filter:function(event,player){
							if(event.l_guzheng1ed) return false;
							if(!event.cards||!event.cards.length) return false;
							var evt=event.getParent('phaseDiscard');
							return evt&&evt.name=='phaseDiscard'&&evt.player!=player;
						},
						content:function(){
							var evt=event.getParent('phaseDiscard');
							trigger.l_guzheng1ed=true;
							if(!evt.l_guzheng1cards) evt.l_guzheng1cards=[];
							evt.l_guzheng1cards.addArray(trigger.cards);
						},
						sub:true,
					},
				},
				trigger:{global:'phaseDiscardAfter'},
				filter:function(event,player){
					if(event.player!=player&&event.player.isIn()&&
					event.l_guzheng1cards&&event.l_guzheng1cards.length){
						for(var i=0;i<event.l_guzheng1cards.length;i++){
							if(get.position(event.l_guzheng1cards[i])=='d'){
								return true;
							}
						}
						return false;
					}
				},
				checkx:function(event,player){
					var du=false;
					var num=0;
					for(var i=0;i<event.l_guzheng1cards.length;i++){
						if(get.position(event.l_guzheng1cards[i])=='d'){
							num++;
							if(event.l_guzheng1cards[i].name=='du'){
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
					event.cards=trigger.l_guzheng1cards.slice(0);
					for(var i=0;i<event.cards.length;i++){
						if(get.position(event.cards[i])!='d'){
							event.cards.splice(i,1);i--;
						}
					}
					if(event.cards.length==0){
						event.finish();
						return;
					}
					var check=lib.skill.l_guzheng1.checkx(trigger,player);
					player.chooseCardButton(event.cards,'固政：选择令'+get.translation(trigger.player)+'收回的牌').set('ai',function(button){
						if(_status.event.check){
							return 20-get.value(button.link);
						}
						return 0;
					}).set('check',check);
					"step 1"
					if(result.bool){
						game.delay(0.5);
						player.logSkill('l_guzheng1',trigger.player);
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
				ai:{
					threaten:1.3,
					expose:0.2
				}
            },
            "l_guose1":{
                audio:"guose1",
                filter:function (event,player){
        return player.countCards('he',{color:'red'})>0;
    },
                enable:"chooseToUse",
                filterCard:function (card){
        return get.color(card)=='red';
    },
                position:"he",
                viewAs:{
                    name:"lebu",
                },
                prompt:"将一张红色牌当乐不思蜀使用",
                check:function (card){return 6-get.value(card)},
                ai:{
                    threaten:1.5,
                    basic:{
                        order:1,
                        useful:1,
                        value:8,
                    },
                    result:{
                        target:function (player,target){
                var num=target.hp-target.countCards('h')-2;
                if(num>-1) return -0.01;
                if(target.hp<3) num--;
                if(target.isTurnedOver()) num/=2;
                var dist=get.distance(player,target,'absolute');
                if(dist<1) dist=1;
                return num/Math.sqrt(dist);
            },
                    },
                    tag:{
                        skip:"phaseUse",
                    },
                },
            },
            "l_zishu":{
                subSkill:{
                    discard:{
                        trigger:{
                            player:"gainAfter",
                        },
                        silent:true,
                        filter:function (event,player){
                            return _status.currentPhase!=player;
                        },
                        content:function (){
                            if(!player.storage.l_zishu){
                                player.storage.l_zishu=[];
                            }
                            player.storage.l_zishu.addArray(trigger.cards);
                        },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                    "discard2":{
                        trigger:{
                            global:"phaseAfter",
                        },
                        forced:true,
                        filter:function (event,player){
                            if(_status.currentPhase!=player&&player.storage.l_zishu){
                                var he=player.getCards('he');
                                for(var i=0;i<player.storage.l_zishu.length;i++){
                                    if(he.contains(player.storage.l_zishu[i])){
                                        return true;
                                    }
                                }
                                return false;
                            }
                        },
                        content:function (){
                            var he=player.getCards('he');
                            var list=[];
                            for(var i=0;i<player.storage.l_zishu.length;i++){
                                if(he.contains(player.storage.l_zishu[i])){
                                    list.push(player.storage.l_zishu[i])
                                }
                            }
                            player.$throw(list);
                            player.lose(list,ui.discardPile);
                            game.log(player,'将',list,'置入弃牌堆');
                        },
                        sub:true,
                    },
                    "discard3":{
                        trigger:{
                            global:"phaseBegin",
                        },
                        silent:true,
                        content:function (){
                            delete player.storage.l_zishu;
                        },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                    draw:{
                        trigger:{
                            player:"gainAfter",
                        },
                        forced:true,
                        filter:function (event,player){
                            if(_status.currentPhase!=player) return false;
                            return event.getParent(2).name!='l_zishu_draw';
                        },
                        content:function (){
                            player.draw();
                        },
                        sub:true,
                    },
                },
                ai:{
                    threaten:1.2,
                    nogain:1,
                },
                group:["l_zishu_draw","l_zishu_discard","l_zishu_discard2","l_zishu_discard3"],
            },
            "l_luanji":{
                audio:"luanji",
                enable:"phaseUse",
                viewAs:{
                    name:"wanjian",
                },
                filterCard:function (card,player){
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
                check:function (card){
                    var player=_status.event.player;
                    var targets=game.filterPlayer(function(current){
                        return player.canUse('wanjian',current);
                    });
                    var num=0;
                    for(var i=0;i<targets.length;i++){
                        var eff=get.sgn(get.effect(targets[i],{name:'wanjian'},player,player));
                        if(targets[i].hp==1){
                            eff*=1.5;
                        }
                        num+=eff;
                    }
                    if(!player.needsToDiscard(-1)){
                        if(targets.length>=7){
                            if(num<2) return 0;
                        }
                        else if(targets.length>=5){
                            if(num<1.5) return 0;
                        }
                    }
                    return 6-get.value(card);
                },
                ai:{
                    basic:{
                        order:10,
                        useful:1,
                        value:5,
                    },
                    wuxie:function (target,card,player,viewer){
                        if(get.attitude(viewer,target)>0&&target.countCards('h','shan')){
                            if(!target.countCards('h')||target.hp==1||Math.random()<0.7) return 0;
                        }
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
                        respondShan:1,
                        damage:1,
                        multitarget:1,
                        multineg:1,
                    },
                },
            },
            "l_weimu1":{
                mod:{
                    targetEnabled:function (card){
            if((get.type(card)=='trick'||get.type(card)=='delay')&&
                get.color(card)=='black') return false;
        },
                },
            },
            "l_yizhong1":{
                trigger:{
                    target:"shaBefore",
                },
                forced:true,
                audio:"yizhong",
                filter:function (event,player){
                    if(player.getEquip(2)) return false;
                    return (event.card.name=='sha'&&get.color(event.card)=='black')
                },
                content:function (){
                    trigger.cancel();
                },
                ai:{
                    effect:{
                        target:function (card,player,target){
                            if(player==target&&get.subtype(card)=='equip2'){
                                if(get.equipValue(card)<=8) return 0;
                            }
                            if(target.getEquip(2)) return;
                            if(card.name=='sha'&&get.color(card)=='black') return 'zerotarget';
                        },
                    },
                },
            },
            "l_ol_shenfen":{
                audio:"shenfen",
                enable:"phaseUse",
                filter:function (event,player){
                    return player.storage.l_baonu>=6;
                },
                skillAnimation:true,
                animationColor:"metal",
                usable:1,
                content:function (){
                    "step 0"
                    player.storage.l_baonu-=6;
                    player.syncStorage('l_baonu');
                    player.updateMarks('l_baonu');
                    event.targets=game.filterPlayer();
                    event.targets.remove(player);
                    event.targets.sort(lib.sort.seat);
                    event.targets2=event.targets.slice(0);
                    event.targets3=event.targets.slice(0);
                    player.line(event.targets,'green');
                    "step 1"
                    if(event.targets.length){
                        event.targets.shift().damage();
                        event.redo();
                    }
                    "step 2"
                    if(event.targets2.length){
                        var cur=event.targets2.shift();
                        if(cur&&cur.countCards('e')){
                            cur.discard(cur.get('e'));
                        }
                        event.redo();
                    }
                    "step 3"
                    if(event.targets3.length){
                        var cur=event.targets3.shift();
                        if(cur&&cur.countCards('h')){
                            cur.chooseToDiscard('h',true,4);
                        }
                        event.redo();
                    }
                    "step 4"
                    player.turnOver();
                },
                ai:{
                    combo:"l_baonu",
                    order:10,
                    result:{
                        player:function (player){
                            return game.countPlayer(function(current){
                                if(current!=player){
                                    return get.sgn(get.damageEffect(current,player,player));
                                }
                            });
                        },
                    },
                },
            },
            shenfen:{
                audio:2,
                unique:true,
                enable:"phaseUse",
                filter:function (event,player){
                    return player.storage.l_baonu>=6;
                },
                skillAnimation:true,
                animationColor:"metal",
                limited:true,
                content:function (){
                    "step 0"
                    player.awakenSkill('shenfen');
                    player.storage.l_baonu-=6;
                    player.markSkill('l_baonu');
                    player.syncStorage('l_baonu');
                    event.targets=game.filterPlayer();
                    event.targets.remove(player);
                    event.targets.sort(lib.sort.seat);
                    event.targets2=event.targets.slice(0);
                    player.line(event.targets,'green');
                    "step 1"
                    if(event.targets.length){
                        event.targets.shift().damage();
                        event.redo();
                    }
                    "step 2"
                    if(event.targets2.length){
                        var cur=event.targets2.shift();
                        if(cur&&cur.countCards('he')){
                            cur.chooseToDiscard('he',true,4);
                        }
                        event.redo();
                    }
                },
                ai:{
                    order:10,
                    result:{
                        player:function (player){
                            return game.countPlayer(function(current){
                                if(current!=player){
                                    return get.sgn(get.damageEffect(current,player,player));
                                }
                            });
                        },
                    },
                },
            },
            "l_baonu":{
                audio:"baonu",
                mark:true,
                init:function (player){
                    player.storage.l_baonu=2;
                    player.markSkill('l_baonu');
                    player.syncStorage('l_baonu');
                    if(get.mode()!='boss'){
                    player.logSkill('l_baonu');
                    }
                },
                trigger:{
                    source:"damageEnd",
                    player:"damageEnd",
                },
                forced:true,
                filter:function (event){
                    return event.num>0; 
                },
                content:function (){
                    player.storage.l_baonu+=trigger.num;
                    player.markSkill('l_baonu');
                    player.syncStorage('l_baonu');
                },
                intro:{
                    content:"mark",
                },
                ai:{
                    combo:"shenfen",
                    maixie:true,
                    "maixie_hp":true,
                },
            },
            "l_qiaobian":{
                group:["l_qiaobian1","l_qiaobian2","l_qiaobian3","l_qiaobian4"],
                ai:{
                    threaten:3,
                },
            },
            "l_qiaobian1":{
                audio:"qiaobian1",
                trigger:{
                    player:"phaseJudgeBefore",
                },
                filter:function (event,player){
                return player.countCards('h')>0;
            },
                direct:true,
                frequent:true,
                content:function (){
                "step 0"
                if(player.countCards('j')==0&&(!event.isMine()||!lib.config.autoskilllist.contains('l_qiaobian1'))){
                    event.finish();
                }
                else{
                    var next=player.chooseToDiscard(get.prompt('l_qiaobian'),'弃置一张手牌并跳过判定阶段');
                    next.set('ai',get.unuseful2);
                    next.set('logSkill','l_qiaobian1');
                }
                "step 1"
                if(result.bool){
                    trigger.cancel();
                }
            },
            },
            "l_qiaobian2":{
                audio:"qiaobian2",
                trigger:{
                    player:"phaseDrawBefore",
                },
                filter:function (event,player){
                return player.countCards('h')>0;
            },
                direct:true,
                content:function (){
                "step 0"
                var check,i,num=0,num2=0,players=game.filterPlayer();
                for(i=0;i<players.length;i++){
                    if(player!=players[i]&&players[i].countCards('h')){
                        var att=get.attitude(player,players[i]);
                        if(att<=0){
                            num++;
                        }
                        if(att<0){
                            num2++;
                        }
                    }
                }
                check=(num>=2&&num2>0);

                player.chooseToDiscard(get.prompt('l_qiaobian'),'弃置一张手牌并跳过摸牌阶段，然后可以获得至多两名角色各一张手牌',lib.filter.cardDiscardable).set('ai',function(card){
                    if(!_status.event.check) return 0;
                    return 7-get.value(card);
                }).set('check',check).set('logSkill','l_qiaobian2');
                "step 1"
                if(result.bool){
                    trigger.cancel();
                    player.chooseTarget([1,2],'获得至多两名角色各一张手牌',function(card,player,target){
                        return target!=player&&target.countCards('h');
                    }).set('ai',function(target){
                        return 1-get.attitude(_status.event.player,target);
                    })
                }
                else{
                    event.finish();
                }
                "step 2"
                if(result.bool){
                    player.line(result.targets,'green');
                    event.targets=result.targets;
                    if(!event.targets.length) event.finish();
                }
                else{
                    event.finish();
                }
                "step 3"
                player.gainMultiple(event.targets);
                "step 4"
                game.delay();
            },
                ai:{
                    expose:0.2,
                },
            },
            "l_qiaobian3":{
                audio:"qiaobian3",
                trigger:{
                    player:"phaseUseBefore",
                },
                filter:function (event,player){
                return player.countCards('h')>0;
            },
                direct:true,
                content:function (){
                "step 0"
                var check;
                if(!player.canMoveCard(true)){
                    check=false;
                }
                else{
                    check=game.hasPlayer(function(current){
                        return get.attitude(player,current)>0&&current.countCards('j');
                    });
                    if(!check){
                        if(player.countCards('h')>player.hp+1){
                            check=false;
                        }
                        else if(player.countCards('h',{name:['wuzhong']})){
                            check=false;
                        }
                        else{
                            check=true;
                        }
                    }
                }
                player.chooseToDiscard(get.prompt('l_qiaobian'),'弃置一张手牌并跳过出牌阶段，然后可以移动场上的一张牌',lib.filter.cardDiscardable).set('ai',function(card){
                    if(!_status.event.check) return 0;
                    return 7-get.value(card);
                }).set('check',check).set('logSkill','l_qiaobian3');
                "step 1"
                if(result.bool){
                    trigger.cancel();
                    player.moveCard();
                }
                else{
                    event.finish();
                }
            },
                ai:{
                    expose:0.2,
                },
            },
            "l_qiaobian4":{
                audio:"qiaobian4",
                trigger:{
                    player:"phaseDiscardBefore",
                },
                direct:true,
                filter:function (event,player){
                return player.countCards('h')>0;
            },
                content:function (){
                "step 0"
                var discard=player.countCards('h')>player.hp;
                var next=player.chooseToDiscard(get.prompt('l_qiaobian4'),'弃置一张手牌并跳过弃牌阶段');
                next.logSkill='l_qiaobian';
                next.ai=function(card){
                    if(discard){
                        return 100-get.useful(card);
                    }
                    else{
                        return -1;
                    }
                };
                "step 1"
                if(result.bool){
                    trigger.cancel();
                }
            },
            },
            Lguanxing:{
                audio:"guanxing",
                trigger:{
                    player:"phaseBegin",
                },
                frequent:true,
                content:function (){
                    'step 0'
                    event.num=Math.min(5,game.countPlayer());
                    event.cards=get.cards(event.num);
                    event.chosen=[];
                    event.num1=0;
                    event.num2=0;
                    'step 1'
                    var js=player.getCards('j');
                    var pos;
                    var choice=-1;
                    var getval=function(card,pos){
                        if(js[pos]){
                            return (get.judge(js[pos]))(card);
                        }
                        else{
                            return get.value(card);
                        }
                    };
                    for(pos=0;pos<Math.min(event.cards.length,js.length+2);pos++){
                        var max=getval(event.cards[pos],pos);
                        for(var j=pos+1;j<event.cards.length;j++){
                            var current=getval(event.cards[j],pos);
                            if(current>max){
                                choice=j;
                                max=current;
                            }
                        }
                        if(choice!=-1){
                            break;
                        }
                    }
                    player.chooseCardButton('观星：选择要移动的牌',event.cards).set('filterButton',function(button){
                        return !_status.event.chosen.contains(button.link);
                    }).set('chosen',event.chosen).set('ai',function(button){
                        return button.link==_status.event.choice?1:0;
                    }).set('choice',event.cards[choice]);
                    event.pos=pos;
                    'step 2'
                    if(result.bool){
                        var card=result.links[0];
                        var index=event.cards.indexOf(card);
                        event.card=card;
                        event.chosen.push(card);
                        event.cards.remove(event.card);
                        var buttons=event.cards.slice(0);
                        player.chooseControl(function(){
                            return _status.event.controlai;
                        }).set('controlai',event.pos||0).set('sortcard',buttons).set('tosort',card);
                    }
                    else{
                        event.goto(4);
                    }
                    'step 3'
                    if(typeof result.index=='number'){
                        if(result.index>event.cards.length){
                            ui.cardPile.appendChild(event.card);
                            event.num2++;
                        }
                        else{
                            event.cards.splice(result.index,0,event.card);
                        }
                        event.num--;
                        if(event.num>0){
                            event.goto(1);
                        }
                    }
                    'step 4'
                    while(event.cards.length){
                        ui.cardPile.insertBefore(event.cards.pop(),ui.cardPile.firstChild);
                        event.num1++;
                    }
                    var js=player.getCards('j');
                    if(js.length==1){
                        if((get.judge(js[0]))(ui.cardPile.firstChild)<0){
                            player.addTempSkill('guanxing_fail');
                        }
                    }
                    player.popup(get.cnNumber(event.num1)+'上'+get.cnNumber(event.num2)+'下');
                    game.log(player,'将','#y'+get.cnNumber(event.num1)+'张牌','置于牌堆顶，','#y'+get.cnNumber(event.num2)+'张牌','置于牌堆底');
                },
                ai:{
                    guanxing:true,
                },
            },
            "Lguanxing_fail":{
            },
            "Lguanxing_old":{
                audio:"guanxing",
                audioname:["jiangwei"],
                trigger:{
                    player:"phaseBegin",
                },
                frequent:true,
                content:function (){
                    "step 0"
                    if(player.isUnderControl()){
                        game.modeSwapPlayer(player);
                    }
                    var num=Math.min(5,game.countPlayer());
                    if(player.hasSkill('yizhi')&&player.hasSkill('Lguanxing')){
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
                        if(!player.hasWuxie()){
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
                                return get.value(b,player)-get.value(a,player);
                            });
                            while(cards.length){
                                if(get.value(cards[0],player)<=5) break;
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
                        for(var i=0;i<event.dialog.buttons.length;i++){
                            event.dialog.buttons[i].classList.add('pointerdiv');
                        }
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
        
        },
        translate:{
            "l_zhaxiang":"诈降",
            "l_zhaxiang2":"诈降",
            "l_zhaxiang_info":"锁定技 每当你失去1点体力后，你摸三张牌。然后若此时是你的出牌阶段，则直到回合结束，你使用红色【杀】无距离限制且不能被【闪】响应，你可以额外使用一张【杀】。",
            "ll_zhaxiang":"诈降",
            "ll_zhaxiang2":"诈降",
            "ll_zhaxiang_info":"锁定技 每当你失去1点体力后，你摸三张牌。然后若此时是你的出牌阶段，则直到回合结束，你使用红色【杀】无距离限制且不能被【闪】响应，你可以额外使用一张【杀】。",
            "xinl_qiangxi":"强袭",
            "xinl_qiangxi_info":"出牌阶段各限一次，你可以选择一项：1. 失去一点体力并对你攻击范围内的一名其他角色造成一点伤害；2. 弃置一张装备牌并对你攻击范围内的一名其他角色造成一点伤害 ",
            "l_qiangxi":"强袭",
            "l_qiangxi_info":"出牌阶段，你可以失去一点体力或弃一张武器牌，然后你对你攻击范围内的一名角色造成一点伤害，每回合限一次。",
            "l_lianying":"连营",
            "l_lianying_info":"每当你失去最后一张手牌，可摸一张牌",
            "rel_qianxun":"谦逊",
            "rel_qianxun2":"谦逊",
            "rel_qianxun_info":"每当一张延时类锦囊牌或其他角色使用的普通锦囊牌生效时，若你是此牌的唯一目标，你可以将所有手牌置于你的武将牌上，若如此做，此回合结束时，你获得你武将牌上的所有牌。",
            "l_qingnang":"青囊",
            "l_qingnang_info":"出牌阶段，你可以弃置一张手牌令一名角色回复一点体力，每阶段限一次",
            "l_jijiu":"急救",
            "l_jijiu_info":"回合外，你可以将一张红色牌当[桃]使用",
            "l_kurou":"苦肉",
            "l_kurou_info":"出牌阶段，你可以流失一点体力并摸两张牌",
            "l_longyin":"龙吟",
            "l_longyin_info":"每当一名角色在其出牌阶段使用【杀】时，你可弃置一张牌令此【杀】不计入出牌阶段使用次数，若此【杀】为红色，你摸一张牌",
            "l_mashu":"马术",
            "l_mashu1":"马术",
            "l_mashu2":"马术",
            "l_mashu3":"马术",
            "l_mashu4":"马术",
            "l_mashu5":"马术",
            "l_mashu6":"马术",
            "l_mashu7":"马术",
            "l_mashu8":"马术",
            "l_mashu9":"马术",
            "l_mashu10":"马术",
            "l_mashu11":"马术",
            "l_mashu12":"马术",
            "l_mashu_info":"锁定技，你计算与其他角色的距离-1",
            "l_mashu1_info":"锁定技，你计算与其他角色的距离-1",
            "l_mashu2_info":"锁定技，你计算与其他角色的距离-1",
            "l_mashu3_info":"锁定技，你计算与其他角色的距离-1",
            "l_mashu4_info":"锁定技，你计算与其他角色的距离-1",
            "l_mashu5_info":"锁定技，你计算与其他角色的距离-1",
            "l_mashu6_info":"锁定技，你计算与其他角色的距离-1",
            "l_mashu7_info":"锁定技，你计算与其他角色的距离-1",
            "l_mashu8_info":"锁定技，你计算与其他角色的距离-1",
            "l_mashu9_info":"锁定技，你计算与其他角色的距离-1",
            "l_mashu10_info":"锁定技，你计算与其他角色的距离-1",
            "l_mashu11_info":"锁定技，你计算与其他角色的距离-1",
            "l_mashu12_info":"锁定技，你计算与其他角色的距离-1",
            "l_anguo":"安国",
            "l_anguo_info":"出牌阶段限一次，你可以选择一名其他角色，若其手牌数为全场最少，其摸一张牌；体力值为全场最低，回复1点体力；装备区内牌数为全场最少，随机使用一张装备牌。然后若该角色有未执行的效果且你满足条件，你执行之。",
            "l_fenxun":"奋迅",
            "l_fenxun2":"奋迅",
            "l_fenxun_info":"出牌阶段限一次，你可以弃置一张牌并选择一名其他角色，然后本回合你计算与其的距离视为1",
            "l_duanbing":"短兵",
            "l_duanbing_info":"你使用【杀】可以多选择一名距离为1的角色为目标",
            "l_kuanggu":"狂骨",
            "l_kuanggu_info":"锁定技，每当你造成一点伤害，若受伤害角色与你的距离不大于1，你回复一点体力",
            "xinl_kuanggu":"狂骨",
            "xinl_kuanggu_info":"当你对距离1以内的一名角色造成1点伤害后，你可以回复1点体力或摸一张牌",
            "l_wusheng":"武圣",
            "l_wusheng_info":"你可以将一张红色牌当[杀]使用",
            "l_qimou":"奇谋",
            "l_qimou_info":"限定技，出牌阶段，你可以失去任意点体力，然后直到回合结束，你的进攻距离+X，且你可以多使用X张【杀】（X为你失去的体力值）",
            "l_xianzhen":"陷阵",
            "l_xianzhen_info":"出牌阶段，你可以与一名角色拼点。若你赢，你获得以下技能直到回合结束：无视与该角色的距离；无视防具且可使用任意数量的【杀】。若你没赢，你不能使用【杀】直到回合结束。每回合限一次",
            "l_jinjiu":"禁酒",
            "l_jinjiu_info":"锁定技，你的【酒】均视为【杀】",
            "l_tianbian":"天辩",
            "l_tianbian_info":"你拼点时，可以改为用牌堆顶的一张牌进行拼点；当你拼点的牌亮出后，若此牌花色为红桃，则点数视为K",
            "l_yiji":"遗计",
            "l_yiji_info":"每当你受到一点伤害，可以观看牌堆顶的两张牌，并将其交给任意1~2名角色",
            "l_longdan":"龙胆",
            "l_longdan_info":"你可以将[杀]当[闪]，或[闪]当[杀]使用或打出",
            "l_chongzhen":"冲阵",
            "l_chongzhen1":"冲阵",
            "l_chongzhen2":"冲阵",
            "l_chongzhen_info":"每当你发动“龙胆”使用或打出一张手牌时，你可以立即获得对方的一张手牌。",
            "l_paoxiao":"咆哮",
            "l_paoxiao_info":"出牌阶段，你使用[杀]无数量限制",
            "l_lihun":"离魂",
            "l_lihun_info":"出牌阶段，你可以弃置一张牌并将你的武将牌翻面，若如此做，你指定一名男性角色，获得其所有手牌。出牌阶段结束时，你需为该角色每一点体力分配给其一张牌。每回合限一次。",
            "l_kongcheng":"空城",
            "l_kongcheng1":"空城",
            "l_kongcheng_info":"锁定技，当你没有手牌时，不能成为[杀]或[决斗]的目标",
            "ll_kongcheng":"空城",
            "ll_kongcheng1":"空城",
            "ll_kongcheng_info":"锁定技，当你没有手牌时，不能成为[杀]或[决斗]的目标",
            "l_jishe":"极奢",
            "l_jishe2":"极奢",
            "l_jishe3":"极奢",
            "l_jishe_info":"出牌阶段，若你的手牌上限大于0，你可以摸一张牌，然后你本回合的手牌上限-1。结束阶段开始时，若你没有手牌，则你可以横置至多X名角色的武将牌（X为你的体力值）",
            "rel_luoyi":"裸衣",
            "rel_luoyi2":"裸衣",
            "rel_luoyi_info":"你可以跳过摸牌阶段，然后展示牌堆顶的三张牌，获得其中的基本牌、武器牌和【决斗】，若如此做，直到你的下回合开始，你为伤害来源的【杀】或【决斗】造成的伤害+1。",
            "l_biyue":"闭月",
            "l_biyue_info":"结束阶段，你可以摸一张牌",
            "l_yongsi":"庸肆",
            "l_yongsi1":"庸肆",
            "l_yongsi2":"庸肆",
            "l_yongsi_info":"锁定技，摸牌阶段，你额外摸X张牌，X为场上现存势力数。弃牌阶段，你至少须弃置等同于场上现存势力数的牌（不足则全弃）。",
            "l_shangshi":"伤势",
            "l_shangshi_info":"锁定技，当你的手牌数小于X时，你立即将手牌补至X张（X为你已损失的体力值）。",
            "ll_shangshi":"伤势",
            "ll_shangshi_info":"锁定技，当你的手牌数小于X时，你立即将手牌补至X张（X为你已损失的体力值）。",
            "l_zaiqi":"再起",
            "l_zaiqi_info":"摸牌阶段，若你已受伤，你可以改为展示牌堆顶的X张牌，X为你已损失的体力值，其中每有一张♥牌，你回复1点体力，然后弃掉这些♥牌，将其余的牌收入手牌。",
            "l_benghuai":"崩坏",
            "l_benghuai_info":"结束阶段，若你的体力不是全场最少的(或之一)，你须减1点体力或体力上限。",
            "l_roulin":"肉林",
            "l_roulin_info":"你对女性角色、女性角色对你使用【杀】时，都需连续使用两张【闪】才能抵消。",
            "l_qice":"奇策",
            "l_qice_info":"出牌阶段，你可以将所有的手牌（至少一张）当做任意一张通常性锦囊牌使用，每阶段限一次。",
            "l_huituo":"恢拓",
            "l_huituo_info":"每当你受到伤害后，你可以令一名角色进行一次判定，若结果为红色，该角色回复1点体力；若结果为黑色，该角色摸X张牌（X为此次伤害的伤害数）",
            "l_juxiang":"巨象",
            "l_juxiang1":"巨象",
            "l_juxiang2":"巨象",
            "l_juxiang_info":"锁定技，【南蛮入侵】对你无效；其他角色使用的【南蛮入侵】于结算完毕进入弃牌堆时，你获得之。",
            "l_lieren":"烈刃",
            "l_lieren_info":"你每使用【杀】造成一次伤害，可与受到该伤害的角色拼点；若你赢，你获得对方的一张牌。",
            "ll_lieren":"烈刃",
            "ll_lieren_info":"你每使用【杀】造成一次伤害，可与受到该伤害的角色拼点；若你赢，你获得对方的一张牌。",
            "l_qixi":"奇袭",
            "l_qixi_info":"你可以将一张黑色牌当[过河拆桥]使用",
            "l_luoshen":"洛神",
            "l_luoshen_info":"准备阶段，你可以进行一定判定，若为黑色则可以继续判定，直到出现红色。然后你获得所有黑色的判定牌",
            "l_guicai":"鬼才",
            "l_guicai_info":"在任意角色的判定牌生效前，你可以打出一张手牌代替之",
            "ll_guicai":"鬼才",
            "ll_guicai_info":"在任意角色的判定牌生效前，你可以打出一张手牌代替之",
            "l_shibei":"矢北",
            "l_shibei_info":"锁定技，当你受到伤害后：若此伤害是你本回合第一次受到伤害，则你回复1点体力；若不是你本回合第一次受到伤害，则你失去1点体力。",
            "l_qingxian":"清弦",
            "l_qingxian_info":"当你受到伤害/回复体力后，你可以令伤害来源/一名其他角色执行一项：失去1点体力，随机使用一张装备牌；回复1点体力，弃置一张装备牌。若其以此法使用或弃置的牌为梅花，你回复1点体力",
            "l_juexiang":"绝响",
            "l_juexiang_info":"当你死亡后，你可以令一名角色随机获得“清弦残谱”其中一个技能，然后直到其下回合开始，其不能被选择为其他角色使用梅花牌的目标",
            "l_juexiang_ji":"激弦",
            "l_juexiang_ji_info":"当你受到伤害后，你可以令伤害来源失去1点体力，随机使用一张装备",
            "l_juexiang_lie":"烈弦",
            "l_juexiang_lie_info":"当你回复体力后，你可以令一名其他角色失去1点体力，随机使用一张装备",
            "l_juexiang_rou":"柔弦",
            "l_juexiang_rou_info":"当你受到伤害后，你可以令伤害来源回复1点体力，弃置一张装备",
            "l_juexiang_he":"和弦",
            "l_juexiang_he_info":"当你回复体力后，你可以令一名其他角色回复1点体力，弃置一张装备",
            "l_juexiang_club":"绝响",
            "l_juexiang_club_bg":"响",
            "l_juexiang_club_info":"直到下回合开始，不能被选择为其他角色使用梅花牌的目标",
            "l_jiushi":"酒诗",
            "l_jiushi1":"酒诗",
            "l_jiushi2":"酒诗",
            "l_jiushi3":"酒诗",
            "l_jiushi_info":"若你的武将牌正面朝上，你可以(在合理的时机)将你的武将牌翻面来视为使用一张【酒】;当你的武将牌背面朝上时你受到伤害，你可在伤害结算后将之翻回正面。",
            "l_jianxiong":"奸雄",
            "l_jianxiong_info":"你可以立即获得对你造成伤害的牌",
            "l_ganglie":"刚烈",
            "l_ganglie_info":"每当你受到一次伤害，可进行一次判定，若结果不为红桃，则伤害来源须弃置两张手牌或受到来自你的一点伤害",
            "l_leiji":"雷击",
            "l_leiji_info":"每当你使用或打出一张【闪】，可令任意一名角色进行一次判定，若结果为梅花，其受到一点雷电伤害，然后你回复一点体力；若结果为黑桃，其受到两点雷电伤害",
            "l_guidao":"鬼道",
            "l_guidao_info":"任意一名角色的判定生效前，你可以打出一张黑色牌替换之",
            "l_jiang":"激昂",
            "l_jiang_info":"每当你使用（指定目标后）或被使用（成为目标后）一张【决斗】或红色的【杀】时，你可以摸一张牌。",
            "l_yingzi":"英姿",
            "l_yingzi_info":"摸牌阶段，你可以额外摸一张牌",
            "l_tianyi":"天义",
            "l_tianyi_info":"出牌阶段，你可以和一名角色拼点，若你赢，你获得以下技能直到回合结束：攻击范围无限；可额外使用一张【杀】；使用【杀】时可额外指定一个目标，若你没赢，你不能使用【杀】直到回合结束。每回合限一次。",
            "l_gzsyinghun":"英魂",
            "l_gzsyinghun_info":"准备阶段开始时，若你已受伤，你可令一名其他角色执行一项：摸X张牌，然后弃置一张牌；或摸一张牌，然后弃置X张牌（X为你已损失的体力值）",
            "l_xiaoji":"枭姬",
            "l_xiaoji_info":"每当你失去一张装备牌，可以摸两张牌",
            "ll_xiaoji":"枭姬",
            "ll_xiaoji_info":"每当你失去一张装备牌，可以摸两张牌",
            "l_baobian":"豹变",
            "l_baobian_info":"锁定技，若你的体力值为3或更少，你视为拥有技能“挑衅”；若你的体力值为2或更少；你视为拥有技能“咆哮”；若你的体力值为1，你视为拥有技能“神速”。",
            "l_kaikang":"慷忾",
            "l_kaikang_info":"每当你距离1以内的角色成为杀的目标后，你可以摸一张牌。若如此做，你交给其一张牌并展示之，若该牌为装备牌，该角色可以使用此牌。",
            "l_tiandu":"天妒",
            "l_tiandu_info":"你可以立即获得你的判定牌",
            "l_benxi":"奔袭",
            "l_benxi_info":"锁定技，在你的回合内，你每使用一次牌后，你的进攻距离+1，直到回合结束；你的回合内，若你与所有角色的距离均为1，你无视其他角色的防具，且你使用的【杀】可额外指定一个目标",
            "l_fuqi":"伏骑",
            "l_fuqi_info":"锁定技，与你距离为1的其他角色不能使用或打出牌响应你使用的牌",
            "l_jiaozi":"娇恣",
            "l_jiaozi_info":"锁定技，若你的手牌数是全场唯一最多的，你造成或受到的伤害均+1",
            "l_wushuang":"无双",
            "l_wushuang1":"无双",
            "l_wushuang2":"无双",
            "l_wushuang_info":"锁定技，你使用的【杀】或【决斗】需要两张【闪】或【杀】响应",
            "l_keji":"克己",
            "l_keji_info":"若你在出牌阶段没有使用[杀]，则可跳过弃牌阶段",
            "l_yaowu":"耀武",
            "l_yaowu_info":"锁定技，当任意一名角色使用【杀】对你造成伤害时，若此【杀】为红色，该角色回复1点体力或摸一张牌，否则你摸一张牌。",
            "l_zhenlie":"贞烈",
            "l_zhenlie_info":"每当你成为其他角色的卡牌的目标时，你可以流失一点体力取消之，然后弃置对方一张牌",
            "ll_zhenlie":"贞烈",
            "ll_zhenlie_info":"每当你成为其他角色的卡牌的目标时，你可以流失一点体力取消之，然后弃置对方一张牌",
            "l_zhanjue":"战绝",
            "l_zhanjue_info":"出牌阶段，你可以将所有手牌当【决斗】使用，结算后你和以此法受到伤害的角色各摸一张牌。若你在同一阶段内以此法摸了两张或更多的牌，则此技能失效直到回合结束",
            "l_zhiyu":"智愚",
            "l_zhiyu_info":"每当你受到一次伤害后，你可以摸一张牌，然后展示所有手牌，若颜色均相同，伤害来源弃置一张手牌。",
            "l_xiangle":"享乐",
            "l_xiangle_info":"锁定技，当其他玩家使用【杀】指定你为目标时，需额外弃掉一张基本牌，否则该【杀】对你无效。",
            "l_tianming":"天命",
            "l_tianming_info":"当你成为【杀】的目标时，你可以弃置两张牌(不足则全弃，无牌则不弃)，然后摸两张牌;若此时全场体力值最多的角色仅有一名(且不是你)，该角色也可以如此做。",
            "l_duwu":"黩武",
            "l_duwu_info":"出牌阶段，你可以弃置X张牌对你攻击范围内的一名其他角色造成1点伤害(X为该角色的体力值)。若你以此法令该角色进入濒死状态，则濒死状态结算后你失去1点体力，且本回合不能再发动黩武。",
            "l_rende":"仁德",
            "l_rende_info":"出牌阶段，你可以将任意手牌送给其他角色，若送出的手牌不少于两张，你回复一点体力",
            "l_xuanfeng":"旋风",
            "l_xuanfeng_info":"当你失去装备区里的牌时，或于弃牌阶段弃置了手牌后，你可以依次弃置一至两名其他角色的共计两张牌。",
            "l_qiangzhi":"强识",
            "l_qiangzhi2":"强识",
            "l_qiangzhi_info":"出牌阶段开始时，你可以展示一名其他角色的一张手牌。若如此做，每当你于此阶段内使用与此牌类别相同的牌时，你可以摸一张牌。",
            "l_xiaoguo":"骁果",
            "l_xiaoguo_info":"其他角色的结束阶段开始时，你可以弃置一张基本牌，令该角色选择一项：1.弃置一张装备牌并令你摸一张牌；2.受到你对其造成的1点伤害。",
            "l_xinliegong":"烈弓",
            "l_xinliegong_info":"你使用【杀】可以选择你距离不大于此【杀】点数的角色为目标；当你使用【杀】指定一个目标后，你可以根据下列条件执行相应的效果：1.其手牌数小于等于你的手牌数，此【杀】不可被【闪】响应 2.其体力值大于等于你的体力值，此【杀】伤害+1",
            "l_zhanyi":"战意",
            "l_zhanyi_basic_sha":"战杀",
            "l_zhanyi_basic_jiu":"战酒",
            "l_zhanyi_basic_tao":"战桃",
            "l_zhanyi_info":"出牌阶段限一次，你可以弃置一张牌并失去1点体力，然后根据你弃置的牌获得以下效果直到回合结束：基本牌，你可以将一张基本牌当作杀、酒或桃使用；锦囊牌，摸两张牌且你使用的牌无距离限制；装备牌，你使用【杀】指定目标角色后，其弃置两张牌",
            "l_mingzhe":"明哲",
            "l_mingzhe_info":"你的回合外，每当你因使用、打出或弃置而失去一张红色牌时，你可以摸一张牌。",
            "l_shuimeng":"说盟",
            "l_shuimeng_info":"出牌阶段结束时，你可以与一名角色拼点，若你赢，视为你使用【无中生有】；若你没赢，视为其对你使用【过河拆桥】",
            "l_huomo":"活墨",
            "l_huomo_use":"活墨",
            "l_huomo_use_backup":"活墨",
            "l_huomo_info":"每当你需要使用一张本回合内未使用过的基本牌时，你可以将一张黑色非基本牌置于牌堆顶，然后视为你使用了此基本牌",
            "l_huomo_use_info":"每当你需要使用一张本回合内未使用过的基本牌时，你可以将一张黑色非基本牌置于牌堆顶，然后视为你使用了此基本牌",
            "l_zuoding":"佐定",
            "l_zuoding_info":"每当一名其他角色于其回合内使用♠牌指定目标后，若本回合没有角色受到过伤害，则你可以令其中一名目标角色摸一张牌",
            "l_bizhuan":"辟撰",
            "l_bizhuan_info":"当你使用黑桃牌后，或你成为其他角色使用黑桃牌的目标后，你可以将牌堆顶的一张牌置于武将牌上，称为“书”；你至多拥有四张“书”，你每有一张“书” ，手牌上限+1",
            "l_tongbo":"通博",
            "l_tongbo_info":"摸牌阶段摸牌后，你可以用任意张牌替换等量的“书”，然后若你的“书”包含四种花色，你将所有“书”交给任意名其他角色",
            "l_lirang":"礼让",
            "l_lirang_info":"当你的牌因弃置而置入弃牌堆时，你可以将其中的任意张牌交给其他角色",
            "l_xiehui":"黠慧",
            "l_xiehui2":"黠慧",
            "l_xiehui_info":"锁定技，你的黑色牌不占用手牌上限；其他角色获得你的黑色牌时，其不能使用、打出、弃置这些牌直到其体力值减少为止",
            "l_yuce":"御策",
            "l_yuce_info":"每当你受到一次伤害，可以弃置一张手牌，并令伤害来源选择一项：弃置一张相同类型的手牌并令你摸一张牌，或令你回复一点体力",
            "l_polu":"破橹",
            "l_polu_info":"锁定技，回合开始时，若你的装备区里没有【霹雳车】，你使用之；当你受到1点伤害后，若你的装备区里没有【霹雳车】，你摸一张牌",
            "ly_piliche":"霹雳车",
            "ly_piliche_info":"当你对其他角色造成伤害后，若造成伤害牌不为延时锦囊牌，你可以弃置其装备区里的防具牌与+1坐骑牌；当你失去此装备时，销毁之",
            "l_shuangren":"双刃",
            "l_shuangren_info":"出牌阶段开始时，你可以与一名角色拼点。若你赢，你视为任意一名角色使用一张【杀】（此【杀】不计入限制的次数）；若你没赢，你结束出牌阶段",
            "l_fulu":"符箓",
            "l_fulu_info":"你可以将【杀】当雷【杀】使用。",
            "l_fuji":"助祭",
            "l_fuji_info":"当一名角色造成雷电伤害时，你可以令其进行一次判定，若结果为黑色，此伤害+1；若结果为红色，该角色获得此牌。",
            "l_luanzhan":"乱战",
            "l_luanzhan_info":"你使用【杀】或黑色普通锦囊牌可以额外选择X名角色为目标；当你使用【杀】或黑色普通锦囊牌指定目标后，若此牌的目标角色数小于X，则X减至0（X为你于本局游戏内造成过伤害的次数）",
            "l_sijian":"死谏",
            "l_sijian_info":"当你失去最后的手牌时，你可以弃置一名其他角色的一张牌",
            "l_liangzhu":"良助",
            "l_liangzhu_info":"当一名角色于其出牌阶段内回复体力时，你可以选择一项：1、摸一张牌；2、令该角色摸两张牌 ",
            "l_bazhen":"八卦",
            "l_bazhen_info":"当你没装备防具时，始终视为你装备着【八卦阵】",
            "bagua_bg":"卦",
            "bagua_skill":"八卦阵",
            "bagua_skill_info":"每当你需要使用或打出一张【闪】时，你可以进行一次判定，若判定结果为红色，视为你使用或打出了一张【闪】。",
            "l_meibu":"魅步",
            "l_meibu_info":"一名其他角色的出牌阶段开始时，若你不在其攻击范围内，你可以令该角色的锦囊牌均视为【杀】，直到该角色以此法使用了一张【杀】或回合结束。若如此做，则直到回合结束，视为你在其攻击范围内",
            "l_zhidao":"雉盗",
            "l_zhidao_info":"锁定技，当你于你的回合内第一次对区域里有牌的其他角色造成伤害后，你获得其手牌、装备区和判定区里的各一张牌，然后直到回合结束，其他角色不能被选择为你使用牌的目标",
            "l_faen":"法恩",
            "l_faen_info":"当一名角色翻至正面或横置后，你可以令其摸一张牌",
            gailianhuan:"连环",
            "gailianhuan1":"连环",
            "gailianhuan2":"连铸",
            "gailianhuan_info":"出牌阶段，你可以将你任意一张黑色手牌当【铁索连环】使用或重铸。",
            "gai_huansha":"环杀",
            "gai_huansha_info":"横置你的武将牌，视为打出一张火杀",
            "gai_huanshan":"环闪",
            "gai_huanshan_info":"重置你的武将牌，视为打出一张闪",
            "l_fuhun":"父魂",
            "l_fuhun2":"父魂2",
            "l_fuhun3":"父魂3",
            "l_fuhun_info":"你可以将两张手牌当杀使用或打出；出牌阶段，若你以此法使用的杀造成了伤害，你获得技能“武圣”、“咆哮”直到回合结束。",
            "l_boss_shenyi":"神裔",
            "l_boss_shenyi_info":"锁定技，你的武将牌始终正面向上，你的判定区内的牌效果反转",
            "gailianhuan1_info":"undefined",
            "l_gongao":"功獒",
            "l_gongao_info":"锁定技，每当一名角色死亡后，你增加一点体力上限，回复一点体力。",
            "l_chengxiang":"称象",
            "l_chengxiang_info":"每当你受到一次伤害后，你可以亮出牌堆顶的四张牌。然后获得其中任意数量点数之和不大于13的牌",
            "l_wangxi":"忘隙",
            "l_wangxi_info":"每当你对其他角色造成1点伤害后，或受到其他角色造成的1点伤害后，你可与该角色各摸一张牌。",
            "l_xinjushou":"据守",
            "l_xinjushou_info":"结束阶段，你可以翻面并摸四张牌，然后弃置一张手牌，若以此法弃置的是装备牌，则你改为使用之",
            "ll_xinjushou":"据守",
            "ll_xinjushou_info":"结束阶段，你可以翻面并摸四张牌，然后弃置一张手牌，若以此法弃置的是装备牌，则你改为使用之",
            "l_xinjiewei":"解围",
            "l_xinjiewei_info":"你可以将装备区里的牌当【无懈可击】使用；当你从背面翻至正面时，你可以弃置一张牌，然后移动场上的一张牌",
            "ll_xinjiewei":"解围",
            "ll_xinjiewei_info":"你可以将装备区里的牌当【无懈可击】使用；当你从背面翻至正面时，你可以弃置一张牌，然后移动场上的一张牌",
            xiefeng:"携锋",
            "xiefeng_info":"锁定技，出牌阶段开始时，若你装备区没有武器牌，你随机装备一张武器牌。",
            "jiqiao1":"机巧",
            "jiqiao1_info":"出牌阶段开始时，你可以弃置任意张装备牌，然后亮出牌堆顶五倍数量的牌，你获得其中的锦囊牌",
            "l_kongsheng":"箜声",
            "l_kongsheng1":"箜声",
            "l_kongsheng_info":"准备阶段，你可以将任意张牌置于你的武将牌上；结束阶段，你使用武将牌上的装备牌，并获得武将牌上的其他牌",
            "l_shenduan":"慎断",
            "l_shenduan_info":"当你的黑色基本牌因弃置而进入弃牌堆时，你可以将之视为 【兵粮寸断】并置于一名其他角色的判定区里",
            "l_jiezi":"截辎",
            "l_jiezi_info":"锁定技，一名其他角色跳过摸牌阶段后，你摸一张牌",
            "l_jigong":"急攻",
            "l_jigong2":"急攻",
            "l_jigong_info":"出牌阶段开始时，你可以摸两张牌。若如此做，此回合你的手牌上限改为X(X为你此阶段造成的伤害数)",
            "l_qingguo":"倾国",
            "l_qingguo_info":"你可以将一张黑色手牌当[闪]使用或打出",
            "l_fangzhu":"放逐",
            "l_fangzhu_info":"你每受到一次伤害，可令除你以外的任一角色补X张牌，X为你已损失的体力值，然后该角色将其武将牌翻面。",
            "l_qiaobian":"巧变",
            "l_qiaobian1":"巧变·判定",
            "l_qiaobian2":"巧变·摸牌",
            "l_qiaobian3":"巧变·出牌",
            "l_qiaobian4":"巧变·弃牌",
            "l_qiaobian_info":"你可以弃一张手牌来跳过自己的一个阶段(回合开始和结束阶段除外);若以此法跳过摸牌阶段,你可以从其他至多两名角色手里各抽取一张牌;若以此法跳过出牌阶段,你可以将场上的一张牌移动到另一个合理的位置。",
            gaikunfen:"困奋",
            "gaikunfen_info":"锁定技，结束阶段开始时，你失去１点体力，然后摸两张牌",
            "l_fengliang":"逢亮",
            "l_fengliang_info":"觉醒技，当你进入濒死状态时，你减１点体力上限并将体力值回复至２点，然后获得技能挑衅，将困奋改为非锁定技",
            "l_yuhua":"羽化",
            "l_yuhua_info":"锁定技，弃牌阶段内，你的非基本牌不计入手牌数，且你不能弃置你的非基本牌",
            "l_qirang":"祈禳",
            "l_qirang_info":"当有装备牌进入你的装备区时，你可以获得牌堆中的一张锦囊牌",
            "l_tuntian":"屯田",
            "l_tuntian_bg":"田",
            "l_tuntian_info":"每次当你于回合外失去牌时，可以进行一次判定，将非♥结果的判定牌置于你的武将牌上，称为“田”，每有一张田，你的进攻距离+1.",
            "l_zaoxian":"凿险",
            "l_zaoxian_info":"觉醒技，准备阶段，若田的数量达到3张或更多，你须减1点体力上限，并永久获得技能“急袭”",
            "l_jixi":"急袭",
            "l_jixi_info":"出牌阶段，你可以把任意一张田当【顺手牵羊】使用",
            "l_mizhao":"密诏",
            "l_mizhao_info":"出牌阶段，你可以将所有手牌(至少一张)交给一名其他角色。若如此做，你令该角色与你指定的另一名有手牌的角色拼点。视为拼点赢的角色对没赢的角色使用一张【杀】。每阶段限一次。",
            "l_hongde":"弘德",
            "l_hongde_info":"当你一次获得或失去至少两张牌后，你可以令一名其他角色摸一张牌",
            "l_shenxing":"慎行",
            "l_shenxing_info":"出牌阶段，你可以弃置两张牌，然后摸一张牌。",
            "l_pingkou":"平寇",
            "l_pingkou_info":"回合结束时，你可以对至多X名其他角色各造成1点伤害（X为你本回合跳过的阶段数）。",
            "l_zhenwei":"镇卫",
            "l_zhenwei2":"镇卫",
            "l_zhenwei_info":"当一名其他角色成为【杀】或黑色锦囊牌的目标时（使用者不是你），若该角色的体力值小于你且此牌的目标角色数为1，你可以弃置一张牌。若如此做，你选择一项：1、摸一张牌，然后将此【杀】或黑色锦囊牌转移给你；2、令此【杀】或黑色锦囊牌无效，然后将此【杀】或黑色锦囊牌置于使用者的武将牌旁，若如此做，当前回合结束后，使用者获得使用者武将牌旁的这些牌",
            "l_xinshensu":"神速",
            "shensu1":"神速",
            "shensu2":"神速",
            "shensu4":"神速",
            "l_xinshensu_info":"你可以选择一至三项：1. 跳过判定阶段和摸牌阶段；2. 跳过出牌阶段并弃置一张装备牌；3. 跳过弃牌阶段并将你的武将牌翻面。你每选择一项，视为你对一名其他角色使用一张【杀】",
            "l_jianzheng":"谏征",
            "l_jianzheng_info":"当一名其他角色使用【杀】指定目标时，若你在其攻击范围内且你不是目标，则你可以将一张手牌置于牌堆顶，取消所有目标，然后若此【杀】不为黑色，你成为目标",
            "l_cunmu":"寸目",
            "l_cunmu_info":"锁定技，当你摸牌时，改为从牌堆底摸牌",
            "l_shouxi":"守玺",
            "l_shouxi_info":"当你成为【杀】的目标后，你可声明一种未以此法声明过的基本牌或锦囊牌的牌名。若使用者弃置一张你声明的牌，其获得你的一张牌；若否，则此【杀】对你无效",
            "l_danshou":"胆守",
            "l_danshou_info":"出牌阶段，你可以选择你攻击范围内的一名其他角色，然后弃置X张牌（X为此前你于此阶段你发动“胆守”的次数+1）。若X：为1，你弃置该角色的一张牌；为2，令该角色交给你一张牌；为3，你对该角色造成1点伤害；不小于4，你与该角色各摸两张牌。",
            "l_haoshi":"好施",
            "l_haoshi_info":"摸牌阶段，你可以额外摸两张牌，若此时你的手牌数多于五张，你必须将一半(向下取整)的手牌交给场上除你外手牌数最少的一名角色。",
            "l_beige":"悲歌",
            "l_beige_info":"一名角色每受到【杀】造成的一次伤害，你可以弃一张牌，并令其进行一次判定，判定结果为：♥该角色回复1点体力；♦︎该角色摸两张牌；♣伤害来源弃两张牌；♠伤害来源将其武将牌翻面",
            "l_jieming":"节命",
            "l_jieming_info":"你每受到1点伤害，可令任意一名角色将手牌补至其体力上限的张数(不能超过五张)。",
            "l_tiaoxin":"挑衅",
            "l_tiaoxin_info":"出牌阶段，你可以指定一名使用【杀】能攻击到你的角色，该角色需对你使用一张【杀】，若该角色不如此做，你弃掉他的一张牌，每回合限一次。",
            "l_qianxi1":"潜袭",
            "l_qianxi2":"潜袭",
            "l_qianxi2_bg":"袭",
            "l_qianxi1_info":"准备阶段，你可以摸一张牌，并弃置一张牌，然后令一名距离为1的角色不能使用或打出与你弃置的牌颜色相同的手牌，直到回合结束。",
            "l_tieqi":"铁骑",
            "l_tieqi_info":"当你使用【杀】指定一名角色为目标后，你可以进行一次判定并令该角色的非锁定技失效直到回合结束，除非该角色弃置一张与判定结果花色相同的牌，否则不能使用【闪】抵消此【杀】。",
            "l_xiansi":"陷嗣",
            "l_xiansi_bg":"逆",
            "l_xiansi2":"陷嗣",
            "l_xiansi_info":"准备阶段开始时，你可以将一至两名角色的各一张牌置于你的武将牌上，称为“逆”；每当一名角色需要对你使用杀时，该角色可以移去两张“逆”，视为对你使用一张杀。",
            "l_qieting1":"窃听",
            "l_qieting1_info":"一名其他角色的结束阶段，若其未于此回合内使用过指定另一名角色为目标的牌，你可以选择一项：将其装备区里的一张牌移动至你装备区里的相应位置（可替换原装备）；或摸一张牌。",
            "l_shenxian":"甚贤",
            "l_shenxian_info":"你的回合外，每当有其他角色因弃置而失去牌时，若其中有基本牌，你可以摸一张牌。",
            "ll_shenxian":"甚贤",
            "ll_shenxian_info":"你的回合外，每当有其他角色因弃置而失去牌时，若其中有基本牌，你可以摸一张牌。",
            "l_shuangxiong":"双雄",
            "l_shuangxiong2":"双雄",
            "l_shuangxiong_info":"摸牌阶段，你可选择改为进行一次判定：你获得此判定牌，且于此回合的出牌阶段，你可以将任意一张与此判定牌不同颜色的手牌当【决斗】使用。",
            "l_xinjuece1":"绝策",
            "l_xinjuece1_info":"结束阶段开始时，你可以对没有手牌的一名角色造成1点伤害",
            "l_xinmieji":"灭计",
            "l_xinmieji_info":"出牌阶段限一次，你可以展示一张黑色锦囊牌并将之置于牌堆顶，然后令有手牌的一名其他角色选择一项：弃置一张锦囊牌；或弃置两张非锦囊牌",
            "l_fenwei":"奋威",
            "l_fenwei_info":"限定技，当一名角色使用的锦囊牌指定了至少两名角色为目标时，你可以令此牌对其中任意名角色无效。",
            "l_qizhou":"绮胄",
            "l_qizhou_info":"锁定技，你根据装备区里牌的花色数获得以下技能：1种或以上-马术；2种或以上-英姿；3种或以上-短兵；4种-奋威",
            "l_dujin":"独进",
            "l_dujin_info":"摸牌阶段，你可以额外摸X+1张牌（X为你装备区里牌数的一半且向下取整）",
            "ll_dujin":"独进",
            "ll_dujin_info":"摸牌阶段，你可以额外摸X+1张牌（X为你装备区里牌数的一半且向下取整）",
            "l_zhichi":"智迟",
            "l_zhichi2":"智迟",
            "l_zhichi_info":"锁定技，你的回合外，你每受到一次伤害，任何【杀】或普通锦囊牌均对你无效，直到该回合结束。",
            "l_zhichi2_info":"智迟已发动",
            "l_xiashu":"下书",
            "l_xiashu_info":"出牌阶段开始时，你可以将所有手牌交给一名其他角色，然后该角色亮出任意数量的手牌（至少一张），令你选择一项：1.获得其亮出的手牌；2.获得其未亮出的手牌",
            "l_kuanshi":"宽释",
            "l_kuanshi2":"宽释",
            "l_kuanshi_info":"结束阶段，你可以选择一名角色。直到你的下回合开始，该角色下一次受到超过1点的伤害时，防止此伤害，然后你跳过下个回合的摸牌阶段",
            "l_ganlu":"甘露",
            "l_ganlu_info":"出牌阶段，你可以选择两名角色，交换他们装备区里的所有牌。以此法交换的装备数差不能超过X(X为你已损失体力值)。每回合限一次。",
            "l_duanxie1":"断绁",
            "l_duanxie1_info":"出牌阶段限一次，你可以令一名其他角色横置武将牌，若如此做，你横置武将牌。",
            "l_fenmin":"奋命",
            "l_fenmin_info":"结束阶段开始时，若你处于连环状态，你可以弃置处于连环状态的每名角色的一张牌。",
            "l_taiji1":"太极",
            "l_taiji1_info":"每当你使用或打出一张闪，你可以使用一张杀",
            "l_jiudu1":"鸠毒",
            "l_jiudu1_info":"其他角色的出牌阶段开始时，你可以弃置一张手牌，视为该角色使用一张【酒】，然后你对其造成一点伤害。",
            "l_qiluan":"戚乱",
            "l_qiluan2":"戚乱",
            "l_qiluan3":"戚乱",
            "l_qiluan_info":"每当你杀死一名角色后，可以在此回合结束时摸四张牌。",
            "l_qiluan_info_guozhan":"当你杀死一名角色后，你可于此回合结束后摸三张牌",
            "l_zhensha1":"鸩杀",
            "l_zhensha1_info":"当场上有角色进入濒死状态时，你可以弃置一张酒或两张黑色手牌，则该角色立即死亡。",
            "l_tuqiang1":"图强",
            "l_tuqiang1_info":"每当你使用或打出一张闪，你可以摸一张牌",
            "l_fenghuo1":"烽火",
            "l_fenghuo1_info":"你可以将一张装备区内的牌当作南蛮入侵使用",
            "l_zhuhai1":"诛害",
            "l_zhuhai1_info":"一名其他角色的结束阶段开始时，若该角色本回合造成过伤害，你可以对其使用一张【杀】。",
            "l_moukui":"谋溃",
            "l_moukui2":"谋溃",
            "l_moukui_info":"当你使用【杀】指定一名角色为目标后，你可以选择一项：摸一张牌，或弃置其一张牌。若如此做，此【杀】被【闪】抵消时，该角色弃置你的一张牌。 ",
            "l_qiangwu":"枪舞",
            "l_qiangwu_info":"出牌阶段，你可以进行一次判定。若如此做，则直到回合结束，你使用点数小于判定牌的 【杀】时不受距离限制，且你使用点数大于判定牌的【杀】时不计入出牌阶段的使用次数。",
            "l_weikui":"伪溃",
            "l_weikui2":"伪溃",
            "l_weikui_info":"出牌阶段限一次，你可以失去1点体力并选择一名有手牌的其他角色，你观看其手牌：若其手牌中有【闪】，则视为你对其使用【杀】,且本回合你计算与其的距离视为1；若其手牌中没有【闪】，你弃置其中一张牌",
            "l_qianju1":"千驹",
            "l_qianju1_info":"锁定技，若你已受伤，你的进攻距离+X（X为你已损失体力值）",
            "l_quji1":"去疾",
            "l_quji1_info":"出牌阶段限一次，你可以弃置X张牌（X为你已损失的体力值），然后令至多X名已受伤的角色各回复1点体力。若你以此法弃置的牌中有黑色牌，你失去一点体力。",
            "l_ranshang":"燃殇",
            "l_ranshang2":"燃殇",
            "l_ranshang_info":"锁定技，当你受到1点火焰伤害后，你获得1枚“燃”标记；结束阶段开始时，你失去X点体力（X为“燃”标记的数量）",
            "l_xueji1":"血祭",
            "l_xueji1_info":"出牌阶段限一次，你可以弃置一张红色牌，然后选择至多X名角色，横置这些角色并对其中一名角色造成1点火焰伤害。（X为你已损失的体力值数且至少为1）",
            "l_yingjian":"影箭",
            "l_yingjian_info":"准备阶段，你可以视为使用一张无视距离的杀",
            "l_guzheng1":"固政",
            "l_guzheng1_info":"其他角色的弃牌阶段结束时，你可将其弃置的一张牌返回其手牌，然后获得其弃置的其它牌",
            "l_guose1":"国色",
            "l_guose1_info":"你可以将任意一张红色手牌当[乐不思蜀]使用",
            "l_zishu":"自书",
            "l_zishu_info":"锁定技，你的回合外，你获得的牌均会在当前回合结束后置入弃牌堆；你的回合内，当你不因此技能效果获得牌时，额外摸一张牌。",
            "l_luanji":"乱击",
            "l_luanji_info":"出牌阶段，你可以将任意两张相同花色的手牌当【万箭齐发】使用。",
            "l_weimu1":"帷幕",
            "l_weimu1_info":"你不能成为黑色锦囊的目标。",
            "l_yizhong1":"毅重",
            "l_yizhong1_info":"锁定技，当你没有防具时，黑色的杀对你无效",
            "l_ol_shenfen":"神愤",
            "l_ol_shenfen_info":"出牌阶段，你可以弃6枚“暴怒”标记并选择所有其他角色，对这些角色各造成1点伤害，然后这些角色先各弃置其装备区里的牌，再各弃置四张手牌，最后你将你的武将牌翻面。每阶段限一次。",
            shenfen:"神愤",
            "shenfen_info":"限定技，出牌阶段，你可以弃置6枚暴怒标记，对场上所有其他角色造成一点伤害，然后令其弃置4张牌",
            "l_baonu":"狂暴",
            "l_baonu_bg":"暴",
            "l_baonu_info":"锁定技，游戏开始时，你获得两枚暴怒标记，每当你造成或受到一点伤害，你获得一枚暴怒标记",
            Lguanxing:"观星",
            "Lguanxing_info":"准备阶段，你可以观看牌堆顶的x张牌，并将其以任意顺序置于牌堆项或牌堆底(x为存活角色个数且不超过5)",
        },
    },
    intro:"在异世界有这样一个规则，当一个武将杀死另一个武将时，有几率获得别的武将的技能，于是，“异界四国”这个包诞生了，他们互相厮杀，互相吞噬，最终留下了这一百零八个武将。",
    author:"谜之仙人",
    diskURL:"",
    forumURL:"",
    version:"2.1",
},files:{"character":["maping.jpg","lvyu.jpg","caohouchun.jpg","liushangji.jpg","zhangzhi.jpg","weiyu.jpg","zhongyong1.jpg","zhumi.jpg","liyanwojuqnidayede.jpg","buyong.jpg","sunhua.jpg","liuyou.jpg","diaoren.jpg","wanghua.jpg","zhuchaojia.jpg","zhugechong.jpg","caixing.jpg","fucai.jpg","wutujian.jpg","wujicao.jpg","yandiaowenchan.jpg","zhugehuo.jpg","qiaozhaohong.jpg","jiajinhua.jpg","masong.jpg","lvhu.jpg","caogai.jpg","zhugeji.jpg","lvfengjian.jpg","mengsiyan.jpg","guotuliuxie.jpg","liuke.jpg","huangfeng.jpg","zhangjian.jpg","chencendonghun.jpg","donghuo.jpg","lingquan1.jpg","zhumaxun.jpg","caoru.jpg","yuanyanfeng.jpg","lingningxun.jpg","guotuo.jpg","zhugai.jpg","zhaofei.jpg","sunsi.jpg","zhangdun.jpg","jishouhuo.jpg","xunxun1.jpg","chenjiantong.jpg","zhipi.jpg","jukang.jpg","liuliang.jpg","mengkang.jpg","sunren.jpg","maru.jpg","huangzhi.jpg","xiahoujia.jpg","zhuhun.jpg","xuchan.jpg","taishimi.jpg","diangai.jpg","zhangwei.jpg","sunyuci.jpg","kangong.jpg","huayi.jpg","leren.jpg","guansong.jpg","gaomi.jpg","wenliang.jpg","guancai.jpg","luyu.jpg","xunrui.jpg","yuanhua.jpg","xiahouang.jpg","majia.jpg","yanxiang.jpg","huangenyue.jpg","dengxie.jpg","zhangmiang.jpg","xiahengfeng.jpg","caozhiren.jpg","ganxun.jpg","caohuyuan.jpg","manyou.jpg","l_liufeng.jpg","zhenyi.jpg","tianxun.jpg","xuhaojixie.jpg","liugechan.jpg","hecao.jpg","wuyi.jpg","huangxiu.jpg","kongbaiquan.jpg","jianganling.jpg","suntuo.jpg","zhuhunyu.jpg","zhangchao.jpg","zhenbai.jpg","caojia.jpg","zhuyoujie.jpg","caiwenyu.jpg","luran.jpg","hezhi.jpg","xuyuce.jpg","huanglang.jpg","wanggai.jpg","guanhua.jpg","madaichao.jpg"],"card":[],"skill":[]}}})
