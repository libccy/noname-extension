game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"王朝更替_权",editable:false,content:function (config,pack){
    if(config.moreguozhan==true){
        lib.characterPack.mode_guozhan.gz_caoang=["male","wei",4,["gz_kangkaistar"],[]]
lib.characterPack.mode_guozhan.gz_guanping=["male","shu",4,["gz_longyinstar"],[]]
lib.characterPack.mode_guozhan.gz_liyan=["male","shu",4,["starjianglue"],[]]
lib.characterPack.mode_guozhan.gz_yangxiu=["male","wei",4,["starweilin"],[]]
lib.characterPack.mode_guozhan.gz_miheng=["male","qun",4,["starhuicai"],[]]
    }
    if(config.fuben5kiva==true){
    if(lib.config.mode=="brawl"){
if(!lib.storage.scene) lib.storage.scene={};
if(!lib.storage.scene["讨逆血战"]){
lib.storage.scene["讨逆血战"]={
    name:"讨逆血战",
    intro:"",
    players:[{"name":"fuben_huaxiongxueaostar","name2":"none","identity":"zhu","position":1,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[["fuben_guosistar","random","random"],["fuben_lijuestar","random","random"],["fuben_niufustar","random","random"],["fuben_xurongstar","random","random"],["starhongbaolb","random","random"]],"judges":[]},{"name":"fuben_chengyistar","name2":"none","identity":"fan","position":4,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"fuben_yuanshaoyuanjunstar","name2":"none","identity":"fan","position":2,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"fuben_sunjianduanzeistar","name2":"none","identity":"fan","position":3,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[["fuben_handangstar","random","random"],["fuben_zumaostar","random","random"],["fuben_zhoutaistar","random","random"],["fuben_chengqustar","random","random"],["starhongbaohg","random","random"]],"judges":[]}],
    cardPileTop:[],
    cardPileBottom:[],
    discardPile:[],
    gameDraw:true,
};
_status.extensionscene=true;}
if(!_status.extensionmade) _status.extensionmade=[];
_status.extensionmade.push("讨逆血战");
}
    }
    if(config.fuben4kiva==true){
        if(lib.config.mode=="brawl"){
if(!lib.storage.scene) lib.storage.scene={};
if(!lib.storage.scene["挥刃除异"]){
lib.storage.scene["挥刃除异"]={
    name:"挥刃除异",
    intro:"",
    players:[{"name":"caocaoweiwustar","name2":"none","identity":"zhu","position":1,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[["qinggang","random","random"],["staryitianjianCC","random","random"]],"judges":[]},{"name":"fuben_kongrongrendaistar","name2":"none","identity":"fan","position":3,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"fuben_mihenggujianstar","name2":"none","identity":"fan","position":2,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"fuben_yangxiulileistar","name2":"none","identity":"fan","position":4,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]}],
    cardPileTop:[],
    cardPileBottom:[],
    discardPile:[],
    gameDraw:true,
};
_status.extensionscene=true;}
if(!_status.extensionmade) _status.extensionmade=[];
_status.extensionmade.push("挥刃除异");
}
    }
    if(config.fuben3kiva==true){
        if(lib.config.mode=="brawl"){
if(!lib.storage.scene) lib.storage.scene={};
if(!lib.storage.scene["饶舌决战"]){
lib.storage.scene["饶舌决战"]={
    name:"饶舌决战",
    intro:"",
    players:[{"name":"zhugeliangzuodistar","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"fuben_wanglangfuhuangstar","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]}],
    cardPileTop:[],
    cardPileBottom:[],
    discardPile:[],
    gameDraw:true,
};
_status.extensionscene=true;}
if(!_status.extensionmade) _status.extensionmade=[];
_status.extensionmade.push("饶舌决战");
}
    }
    if(config.fuben2kiva==true){
if(lib.config.mode=="brawl"){
if(!lib.storage.scene) lib.storage.scene={};
if(!lib.storage.scene["伯温镇敌"]){
lib.storage.scene["伯温镇敌"]={
    name:"伯温镇敌",
    intro:"",
    players:[{"name":"fuben_zhuyuanzhangmingstar","name2":"none","identity":"zhu","position":1,"hp":3,"maxHp":4,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[["bagua","random","random"]],"judges":[]},{"name":"fuben_liujimingstar","name2":"none","identity":"zhong","position":2,"hp":3,"maxHp":3,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"none","identity":"fan","position":3,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[["zhangba","random","random"]],"judges":[]},{"name":"random","name2":"random","identity":"fan","position":4,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[["guanshi","random","random"]],"judges":[]}],
    cardPileTop:[],
    cardPileBottom:[],
    discardPile:[],
    gameDraw:true,
};
_status.extensionscene=true;}
if(!_status.extensionmade) _status.extensionmade=[];
_status.extensionmade.push("伯温镇敌");
}}
    if(config.zhanbutime==true){
        lib.skill._zhanbu_skill={
            trigger:{
        global:"gameStart",
        player:"enterGame",
    },
    forced:true,
    filter:function (event,player,game){
        return player.identity=='zhu';
    },
    content:function (){
        'step 0'
        game.log('占卜系统'); 
        'step 1'
        game.log('正在进行占卜......');
        'step 2'
        var list=['爆发技','控场技','输出技','卖血技'].randomGet();
        game.log('本轮的运势是',''+get.translation(list)+'');
    },
        }
    }
    if(config.liangshantime==true){
        lib.skill._songjiang_skill={
            trigger:{
        global:"gameStart",
    },
    forced:true,
    filter:function (event,player){
        return player.identity=='zhu';
    },
    content:function (){
        player.init('time_songjiangjishiyustar');
    },
        }
    }
    if(config.baizhantime==true){
        lib.skill._tanzhan_skill={
            trigger:{
        player:"phaseUseBegin",
    },
    direct:true,
    filter:function (event,player){
        return player.countCards('he')>0;
    },
    content:function (){
        'step 0'
        var next=player.chooseCardTarget('探战:请弃置一张牌并选择一名[知己知彼]目标',{
            prompt:get.prompt('_tanzhan_skill'),
            position:'he',
            filterCard:true,
            ai1:function(card){
                return 7-get.value(card);
            },
            ai2:function(target){
                var att=get.attitude(player,target);
                if(att>=0) return 0;
                if(!target.countCards('he')) return -0.01;
                var dist=get.distance(player,target);
                if(dist>2){
                    att-=2;
                }
                else if(dist==2){
                    att--;
                }
                return -att;
            },
            filterTarget:function(card,player,target){
                return player!=target;
            }
        });
        'step 1'
        if(result.bool){
            var target=result.targets[0];
            player.logSkill('_tanzhan_skill',target);
            player.useCard(target,{name:'zhibi'})
        }

    },
        }
    }
    if(config.goujiantime==true){
        lib.skill._goujianjian_skill={
            audio:2,
    trigger:{
        global:"gameStart",
        player:"enterGame",
    },
    filter:function (player){
        return player.identity=='zhu';
    },
    forced:true,
    content:function (){
        player.useCard(game.createCard('staryuewanggoujianjian','spade',1),player);
    },
        }
    }
    if(config.hongbaotime==true){
        lib.skill._qianghongbao_skill={
            trigger:{
        player:"phaseBegin",
    },
            forced:true,
            filter:function (event,player){
        return player.isMinHp();
    },
    content:function (){
        'step 0'
        player.useCard(game.createCard('starhongbao','heart',13));
        'step 1'
        var result;
        if(player.hp==1) result='tao';
        else result=['starhongbaocc','starhongbaolb','starhongbaodz','starhongbaodc','starhongbaomt','starhongbaohg','starhongbaojs'].randomGet();
        var content;
        content=['你们拆开了红包：',[[result],'vcard']];
        for(var i=0;i<game.players.length;i++){
            game.players[i].chooseControl('ok').set('dialog',content);
        }
        player.useCard(game.createCard(result,'heart',13),player,'noai');
    },
        }
    }
    if(config.yitiantulongtime==true){
        lib.skill._suijisha_skill={
            trigger:{
        global:"gameStart",
        player:"enterGame",
    },
    forced:true,
    content:function (){
        if(player.maxHp>3){
            player.useCard(game.createCard('staryitianjianjy'),player);
        }
        else{
            player.useCard(game.createCard('startulongdao'),player);
        }
    },
        }
    }
    if(config.suijishatime==true){
        lib.skill._suijisha_skill={
            trigger:{
        global:"roundStart",
    },
    forced:true,
    content:function (){
        'step 0'
        player.clearSkills();
        'step 1'
        if(player.maxHp>=5){
            player.addSkill('shiyong');
            player.addSkill('benghuai');
        }
        'step 2'
            var skills=[]; 
            for(var i in lib.character){ 
                for(var j=0;j<lib.character[i][3].length;j++){ 
                    var info=lib.skill[lib.character[i][3][j]];
                    if(info&&(info.gainable||!info.unique)&&!info.zhuSkill){
                        skills.add(lib.character[i][3][j]); 
                    }
                } 
            }
            var link=skills.randomGet();            
            player.addSkill(link);                                
           game.log(player,'获得技能','【'+get.translation(link)+'】','-[随机杀]');
            'step 3'
        if(player.maxHp<=3){
            var skills=[]; 
            for(var i in lib.character){ 
                for(var j=0;j<lib.character[i][3].length;j++){ 
                    var info=lib.skill[lib.character[i][3][j]];
                    if(info&&(info.gainable||!info.unique)&&!info.zhuSkill){
                        skills.add(lib.character[i][3][j]); 
                    }
                } 
            }
            var link=skills.randomGet();            
            player.addSkill(link);                                
           game.log(player,'获得技能','【'+get.translation(link)+'】','-[随机杀]');
        }
        'step 4'
        if(player.maxHp<=2){
            var skills=[]; 
            for(var i in lib.character){ 
                for(var j=0;j<lib.character[i][3].length;j++){ 
                    var info=lib.skill[lib.character[i][3][j]];
                    if(info&&(info.gainable||!info.unique)&&!info.zhuSkill){
                        skills.add(lib.character[i][3][j]); 
                    }
                } 
            }
            var link=skills.randomGet();            
            player.addSkill(link);                                
           game.log(player,'获得技能','【'+get.translation(link)+'】','-[随机杀]');
        }
        'step 5'
        if(player.maxHp<=1){
            var skills=[]; 
            for(var i in lib.character){ 
                for(var j=0;j<lib.character[i][3].length;j++){ 
                    var info=lib.skill[lib.character[i][3][j]];
                    if(info&&(info.gainable||!info.unique)&&!info.zhuSkill){
                        skills.add(lib.character[i][3][j]); 
                    }
                } 
            }
            var link=skills.randomGet();            
            player.addSkill(link);                                
           game.log(player,'获得技能','【'+get.translation(link)+'】','-[随机杀]');
        }
    },
        }
    }
    if(config.suijitime==true){
        lib.skill._suiji_skill={
            trigger:{
        global:"gameStart",
        player:"enterGame",
    },
    forced:true,
    content:function (){
        var skills=[]; 
            for(var i in lib.character){ 
                for(var j=0;j<lib.character[i][3].length;j++){ 
                    var info=lib.skill[lib.character[i][3][j]];
                    if(info&&(info.gainable||!info.unique)&&!info.zhuSkill){
                        skills.add(lib.character[i][3][j]); 
                    }
                } 
            }
            var link=skills.randomGet();            
            player.addSkill(link);                                
           game.log(player,'获得技能','【'+get.translation(link)+'】','-[随机技能]');
    },
        }
    }
    if(config.rometime==true){
        lib.skill._rome_skill={
            trigger:{
        player:"damageEnd",
    },
    forced:true,
    content:function (){
        trigger.source.gainPlayerCard(true,'hej',trigger.player);
        game.log(trigger.source,'掠夺了',trigger.player,'的一张牌。-[罗马模式]');
    },
        }
    }
    var style2=document.createElement('style');
        style2.innerHTML=".player .identity[data-color='红star'],";
	    style2.innerHTML+="div[data-nature='红star'],";
    	style2.innerHTML+="span[data-nature='红star'] {text-shadow: black 0 0 1px,rgba(255, 0, 0,1) 0 0 2px,rgba(255, 0, 0,1) 0 0 5px,rgba(255, 0, 0,1) 0 0 10px,rgba(255, 0, 0,1) 0 0 10px}";
    	style2.innerHTML+="div[data-nature='红starm'],";
	    style2.innerHTML+="span[data-nature='红starm'] {text-shadow: black 0 0 1px,rgba(255, 0, 0,1) 0 0 2px,rgba(255, 0, 0,1) 0 0 5px,rgba(255, 0, 0,1) 0 0 5px,rgba(255, 0, 0,1) 0 0 5px,black 0 0 1px;}";
    	style2.innerHTML+="div[data-nature='红starmm'],";
    	style2.innerHTML+="span[data-nature='红starmm'] {text-shadow: black 0 0 1px,rgba(255, 0, 0,1) 0 0 2px,rgba(255, 0, 0,1) 0 0 2px,rgba(255, 0, 0,1) 0 0 2px,rgba(255, 0, 0,1) 0 0 2px,black 0 0 1px;}";
    	document.head.appendChild(style2);
    var style3=document.createElement('style');
        style3.innerHTML=".player .identity[data-color='紫star'],";
	    style3.innerHTML+="div[data-nature='紫star'],";
    	style3.innerHTML+="span[data-nature='紫star'] {text-shadow: black 0 0 1px,rgba(154, 0, 152,1) 0 0 2px,rgba(154, 0, 152,1) 0 0 5px,rgba(154, 0, 152,1) 0 0 10px,rgba(154, 0, 152,1) 0 0 10px}";
    	style3.innerHTML+="div[data-nature='紫starm'],";
	    style3.innerHTML+="span[data-nature='紫starm'] {text-shadow: black 0 0 1px,rgba(154, 0, 152,1) 0 0 2px,rgba(154, 0, 152,1) 0 0 5px,rgba(154, 0, 152,1) 0 0 5px,rgba(154, 0, 152,1) 0 0 5px,black 0 0 1px;}";
    	style3.innerHTML+="div[data-nature='紫starmm'],";
    	style3.innerHTML+="span[data-nature='紫starmm'] {text-shadow: black 0 0 1px,rgba(154, 0, 152,1) 0 0 2px,rgba(154, 0, 152,1) 0 0 2px,rgba(154, 0, 152,1) 0 0 2px,rgba(154, 0, 152,1) 0 0 2px,black 0 0 1px;}";
    	document.head.appendChild(style3);
    var style4=document.createElement('style');
        style4.innerHTML=".player .identity[data-color='棕star'],";
	    style4.innerHTML+="div[data-nature='棕star'],";
    	style4.innerHTML+="span[data-nature='棕star'] {text-shadow: black 0 0 1px,rgba(146, 136, 23,1) 0 0 2px,rgba(146, 136, 23,1) 0 0 5px,rgba(146, 136, 23,1) 0 0 10px,rgba(146, 136, 23,1) 0 0 10px}";
    	style4.innerHTML+="div[data-nature='棕starm'],";
	    style4.innerHTML+="span[data-nature='棕starm'] {text-shadow: black 0 0 1px,rgba(146, 136, 23,1) 0 0 2px,rgba(146, 136, 23,1) 0 0 5px,rgba(146, 136, 23,1) 0 0 5px,rgba(146, 136, 23,1) 0 0 5px,black 0 0 1px;}";
    	style4.innerHTML+="div[data-nature='棕starmm'],";
    	style4.innerHTML+="span[data-nature='棕starmm'] {text-shadow: black 0 0 1px,rgba(146, 136, 23,1) 0 0 2px,rgba(146, 136, 23,1) 0 0 2px,rgba(146, 136, 23,1) 0 0 2px,rgba(146, 136, 23,1) 0 0 2px,black 0 0 1px;}";
    	document.head.appendChild(style4);
    var style5=document.createElement('style');
        style5.innerHTML=".player .identity[data-color='黑star'],";
	    style5.innerHTML+="div[data-nature='黑star'],";
    	style5.innerHTML+="span[data-nature='黑star'] {text-shadow: black 0 0 1px,rgba(0, 0, 0,1) 0 0 2px,rgba(0, 0, 0,1) 0 0 5px,rgba(0, 0, 0,1) 0 0 10px,rgba(0, 0, 0,1) 0 0 10px}";
    	style5.innerHTML+="div[data-nature='黑starm'],";
	    style5.innerHTML+="span[data-nature='黑starm'] {text-shadow: black 0 0 1px,rgba(0, 0, 0,1) 0 0 2px,rgba(0, 0, 0,1) 0 0 5px,rgba(0, 0, 0,1) 0 0 5px,rgba(0, 0, 0,1) 0 0 5px,black 0 0 1px;}";
    	style5.innerHTML+="div[data-nature='黑starmm'],";
    	style5.innerHTML+="span[data-nature='黑starmm'] {text-shadow: black 0 0 1px,rgba(0, 0, 0,1) 0 0 2px,rgba(0, 0, 0,1) 0 0 2px,rgba(0, 0, 0,1) 0 0 2px,rgba(0, 0, 0,1) 0 0 2px,black 0 0 1px;}";
    	document.head.appendChild(style5);
    var style6=document.createElement('style');
        style6.innerHTML=".player .identity[data-color='天蓝star'],";
	    style6.innerHTML+="div[data-nature='天蓝star'],";
    	style6.innerHTML+="span[data-nature='天蓝star'] {text-shadow: black 0 0 1px,rgba(77, 225, 255,1) 0 0 2px,rgba(77, 225, 255,1) 0 0 5px,rgba(77, 225, 255,1) 0 0 10px,rgba(77, 225, 255,1) 0 0 10px}";
    	style6.innerHTML+="div[data-nature='天蓝starm'],";
	    style6.innerHTML+="span[data-nature='天蓝starm'] {text-shadow: black 0 0 1px,rgba(77, 225, 255,1) 0 0 2px,rgba(77, 225, 255,1) 0 0 5px,rgba(77, 225, 255,1) 0 0 5px,rgba(77, 225, 255,1) 0 0 5px,black 0 0 1px;}";
    	style6.innerHTML+="div[data-nature='天蓝starmm'],";
    	style6.innerHTML+="span[data-nature='天蓝starmm'] {text-shadow: black 0 0 1px,rgba(77, 225, 255,1) 0 0 2px,rgba(77, 225, 255,1) 0 0 2px,rgba(77, 225, 255,1) 0 0 2px,rgba(77, 225, 255,1) 0 0 2px,black 0 0 1px;}";
    	document.head.appendChild(style6);
    var style7=document.createElement('style');
        style7.innerHTML=".player .identity[data-color='深红star'],";
	    style7.innerHTML+="div[data-nature='深红star'],";
    	style7.innerHTML+="span[data-nature='深红star'] {text-shadow: black 0 0 1px,rgba(72, 16, 0,1) 0 0 2px,rgba(72, 16, 0,1) 0 0 5px,rgba(72, 16, 0,1) 0 0 10px,rgba(72, 16, 0,1) 0 0 10px}";
    	style7.innerHTML+="div[data-nature='深红starm'],";
	    style7.innerHTML+="span[data-nature='深红starm'] {text-shadow: black 0 0 1px,rgba(72, 16, 0,1) 0 0 2px,rgba(72, 16, 0,1) 0 0 5px,rgba(72, 16, 0,1) 0 0 5px,rgba(72, 16, 0,1) 0 0 5px,black 0 0 1px;}";
    	style7.innerHTML+="div[data-nature='深红starmm'],";
    	style7.innerHTML+="span[data-nature='深红starmm'] {text-shadow: black 0 0 1px,rgba(72, 16, 0,1) 0 0 2px,rgba(72, 16, 0,1) 0 0 2px,rgba(72, 16, 0,1) 0 0 2px,rgba(72, 16, 0,1) 0 0 2px,black 0 0 1px;}";
    	document.head.appendChild(style7);
    var style8=document.createElement('style');
        style8.innerHTML=".player .identity[data-color='浅蓝star'],";
	    style8.innerHTML+="div[data-nature='浅蓝star'],";
    	style8.innerHTML+="span[data-nature='浅蓝star'] {text-shadow: black 0 0 1px,rgba(133, 254, 255,1) 0 0 2px,rgba(133, 254, 255,1) 0 0 5px,rgba(133, 254, 255,1) 0 0 10px,rgba(133, 254, 255,1) 0 0 10px}";
    	style8.innerHTML+="div[data-nature='浅蓝starm'],";
	    style8.innerHTML+="span[data-nature='浅蓝starm'] {text-shadow: black 0 0 1px,rgba(133, 254, 255,1) 0 0 2px,rgba(133, 254, 255,1) 0 0 5px,rgba(133, 254, 255,1) 0 0 5px,rgba(133, 254, 255,1) 0 0 5px,black 0 0 1px;}";
    	style8.innerHTML+="div[data-nature='浅蓝starmm'],";
    	style8.innerHTML+="span[data-nature='浅蓝starmm'] {text-shadow: black 0 0 1px,rgba(133, 254, 255,1) 0 0 2px,rgba(133, 254, 255,1) 0 0 2px,rgba(133, 254, 255,1) 0 0 2px,rgba(133, 254, 255,1) 0 0 2px,black 0 0 1px;}";
    	document.head.appendChild(style8);
    var style9=document.createElement('style');
        style9.innerHTML=".player .identity[data-color='黄star'],";
	    style9.innerHTML+="div[data-nature='黄star'],";
    	style9.innerHTML+="span[data-nature='黄star'] {text-shadow: black 0 0 1px,rgba(225, 255, 11,1) 0 0 2px,rgba(225, 255, 11,1) 0 0 5px,rgba(225, 255, 11,1) 0 0 10px,rgba(225, 255, 11,1) 0 0 10px}";
    	style9.innerHTML+="div[data-nature='黄starm'],";
	    style9.innerHTML+="span[data-nature='黄starm'] {text-shadow: black 0 0 1px,rgba(225, 255, 11,1) 0 0 2px,rgba(225, 255, 11,1) 0 0 5px,rgba(225, 255, 11,1) 0 0 5px,rgba(225, 255, 11,1) 0 0 5px,black 0 0 1px;}";
    	style9.innerHTML+="div[data-nature='黄starmm'],";
    	style9.innerHTML+="span[data-nature='黄starmm'] {text-shadow: black 0 0 1px,rgba(225, 255, 11,1) 0 0 2px,rgba(225, 255, 11,1) 0 0 2px,rgba(225, 255, 11,1) 0 0 2px,rgba(225, 255, 11,1) 0 0 2px,black 0 0 1px;}";
    	document.head.appendChild(style9);
    var style10=document.createElement('style');
        style10.innerHTML=".player .identity[data-color='深蓝star'],";
	    style10.innerHTML+="div[data-nature='深蓝star'],";
    	style10.innerHTML+="span[data-nature='深蓝star'] {text-shadow: black 0 0 1px,rgba(27, 127, 139,1) 0 0 2px,rgba(27, 127, 139,1) 0 0 5px,rgba(27, 127, 139,1) 0 0 10px,rgba(27, 127, 139,1) 0 0 10px}";
    	style10.innerHTML+="div[data-nature='深蓝starm'],";
	    style10.innerHTML+="span[data-nature='深蓝starm'] {text-shadow: black 0 0 1px,rgba(27, 127, 139,1) 0 0 2px,rgba(27, 127, 139,1) 0 0 5px,rgba(27, 127, 139,1) 0 0 5px,rgba(27, 127, 139,1) 0 0 5px,black 0 0 1px;}";
    	style10.innerHTML+="div[data-nature='深蓝starmm'],";
    	style10.innerHTML+="span[data-nature='深蓝starmm'] {text-shadow: black 0 0 1px,rgba(27, 127, 139,1) 0 0 2px,rgba(27, 127, 139,1) 0 0 2px,rgba(27, 127, 139,1) 0 0 2px,rgba(27, 127, 139,1) 0 0 2px,black 0 0 1px;}";
    	document.head.appendChild(style10);
    if(config.fubenkiva==true){
    if(lib.config.mode=="brawl"){
if(!lib.storage.stage) lib.storage.stage={};
if(!lib.storage.stage["三分天下"]){
lib.storage.stage["三分天下"]={
    name:"三分天下",
    intro:"",
    scenes:[{"name":"先主之怒","intro":"","players":[{"name":"liubeizhaoliestar","name2":"none","identity":"zhu","position":1,"hp":null,"maxHp":20,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true},{"name":"梦中杀人","intro":"","players":[{"name":"caocaoweiwustar","name2":"none","identity":"zhu","position":1,"hp":10,"maxHp":20,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"none","identity":"nei","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"none","identity":"nei","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"none","identity":"nei","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"none","identity":"nei","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"none","identity":"nei","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"none","identity":"nei","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"none","identity":"nei","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true},{"name":"衡军严阵","intro":"","players":[{"name":"sunquanwudistar","name2":"none","identity":"zhu","position":0,"hp":3,"maxHp":20,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true,"turns":[6,"lose"],"washes":[1,"win"]}],
    mode:"free",
    level:0,
};
_status.extensionstage=true;}
if(!_status.extensionmade) _status.extensionmade=[];
_status.extensionmade.push("三分天下");
}
}
    if(config.shenchoose==true){
    lib.group.push('shen');
			lib.translate.shen='神';
			lib.translate.shenColor="#1874CD",
    	lib.skill._choince={
				trigger:{global:['gameDrawAfter','phaseBegin']},
				forced:true,
				unique:true,
				popup:false,
				silent:true,
				filter:function(event,player){
					return (player.group&&player.group=='shen');
				},
				//player.getAttackRange()		
				content:function(){
					"step 0"				
					var controls=[];
					for(var i in lib.character){ 
						if(!controls.contains(lib.character[i][1])&&lib.character[i][1]!='shen'){
							controls.push(lib.character[i][1]);  
						}
					}							
   				    var str='请选择一个势力';
					player.chooseControl(controls,ui.create.dialog(str,'hidden')).ai=function(){
						return Math.floor(Math.random()*controls.length);
					};
					"step 1"
					if(result.control){
						player.group=result.control;
						if(get.mode()=='guozhan'){
							player.identity=result.control;
							player._group=result.control;
							player.node.identity.firstChild.innerHTML=get.translation(result.control);
							player.node.identity.dataset.color=player.identity;		
							if(player.name) lib.character[player.name][1]=result.control;
							if(player.name1) lib.character[player.name1][1]=result.control;
							if(player.name2) lib.character[player.name2][1]=result.control;				
						}
						else{
							if(player.name) lib.character[player.name][1]=result.control;
							if(player.name1) lib.character[player.name1][1]=result.control;
							if(player.name2) lib.character[player.name2][1]=result.control;			
						}
					}
					"step 2"
					switch(player.group){
						case 'wei':player.node.name.dataset.nature='watermm';break;
						case 'shu':player.node.name.dataset.nature='soilmm';break;
						case 'wu':player.node.name.dataset.nature='woodmm';break;
						case 'qun':player.node.name.dataset.nature='metalmm';break;
                        case 'qinkivastar':player.node.name.dataset.nature='棕star';break;
                        case 'chukivastar':player.node.name.dataset.nature='黑star';break;
                        case 'hankivastar':player.node.name.dataset.nature='紫star';break;
                        case 'jinkivastar':player.node.name.dataset.nature='天蓝star';break;
                        case 'suikivastar':player.node.name.dataset.nature='深红star';break;
                        case 'tangkivastar':player.node.name.dataset.nature='红star';break;
                        case 'songkivastar':player.node.name.dataset.nature='浅蓝star';break;
                        case 'mingkivastar':player.node.name.dataset.nature='黄star';break;
                        case 'qingkivastar':player.node.name.dataset.nature='深蓝star';break;
                        case 'xikivastar':player.node.name.dataset.nature='黑star';break;
                        case 'luokivastar':player.node.name.dataset.nature='thunder';break;
                        case 'rikivastar':player.node.name.dataset.nature='fire';break;
                        case 'zhankivastar':player.node.name.dataset.nature='红star';break;
						default:player.node.name.dataset.nature='fire';break;
					}	
				}			
			};
    }
          get.groupnature=function(group,method){
			var nature;
			switch(group){
				case 'shen':nature='thunder';break;
				case 'wei':nature='water';break;
				case 'shu':nature='soil';break;
				case 'wu':nature='wood';break;
				case 'qun':nature='metal';break;
				case 'mingkivastar':nature='黄star';break;
                case 'zhankivastar':nature='红star';break;
                case 'hankivastar':nature='紫star';break;
                case 'tangkivastar':nature='红star';break;
                case 'qinkivastar':nature='棕star';break;
                case 'chukivastar':nature='黑star';break;
                case 'jinkivastar':nature='天蓝star';break;
                case 'suikivastar':nature='深红star';break;
                case 'songkivastar':nature='浅蓝star';break;
                case 'qingkivastar':nature='深蓝star';break;
                case 'xikivastar':nature='黑star';break;
			    default:return '';
			}
			if(method=='raw'){
				return nature;
			}
			return nature+'mm';
		},
        lib.group.push('qinkivastar');
        lib.translate.qinkivastar='秦';
        lib.group.push('chukivastar');
        lib.translate.chukivastar='楚';
        lib.group.push('hankivastar');
        lib.translate.hankivastar='汉';
        lib.group.push('jinkivastar');
        lib.translate.jinkivastar='晋';
        lib.group.push('suikivastar');
        lib.translate.suikivastar='隋';
        lib.group.push('tangkivastar');
        lib.translate.tangkivastar='唐'
        lib.group.push('songkivastar');
        lib.translate.songkivastar='宋';
        lib.group.push('mingkivastar');
        lib.translate.mingkivastar='明';
        lib.group.push('qingkivastar');
        lib.translate.qingkivastar='清';
        lib.group.push('xikivastar');
        lib.translate.xikivastar='西';
        lib.group.push('luokivastar');
        lib.translate.luokivastar='罗';
        lib.group.push('rikivastar');
        lib.translate.rikivastar='日';
        lib.group.push('zhankivastar');
        lib.translate.zhankivastar='战';
},precontent:function (){
    
},help:{},config:{"shenchoose":{"init":false,"intro":"如果你的势力为'神'，你可以选择改变势力。","name":"神将可以选择势力"},"moreguozhan":{"init":false,"intro":"开启后出现国战武将，但关闭此包身份武将","name":"更多国战武将"},"fubenkiva":{"init":false,"intro":"刘备关通关为1打7;曹操关通关为1打7;孙权关需要与众英雄好汉们过牌。","name":"下载副本[三分天下]"},"fuben2kiva":{"init":false,"intro":"元朝末年，人民起义，刘伯温在此时辅佐朱元璋建立大明王朝。","name":"下载副本[伯温镇敌]"},"fuben3kiva":{"init":false,"intro":"诸葛亮与王司徒，不解释。","name":"下载副本[饶舌决战]"},"fuben4kiva":{"init":false,"intro":"曹操专场，看看你是否能排除异己，建立基业，封妻荫子，54320......(总感觉，好像说偏了)","name":"下载副本[挥刃除异]"},"fuben5kiva":{"init":false,"intro":"临战董卓时，董卓派出了华雄，上将潘凤已经被斩，此时，孙坚站了出来......","name":"下载副本[讨逆血战]"},"rometime":{"init":false,"intro":"开启此模式后，每当一名角色对一名角色造成伤害，伤害来源获得其目标一张牌。","name":"[罗马战场]模式"},"suijitime":{"init":false,"intro":"开启此模式后，游戏开始时，每名角色随机获得一个技能。","name":"[随机技能]模式"},"suijishatime":{"init":false,"intro":"开启此模式后，游戏每进行一轮，所有玩家因体力上限随机更改技能。","name":"[随机杀]模式"},"hongbaotime":{"init":false,"intro":"祝各位新年大吉，大吉大利，今晚吃鸡，文体两开花。","name":"[红包模式]模式"},"yitiantulongtime":{"init":false,"intro":"开启此模式后，每名玩家因体力上限获得装备[屠龙刀]或者[倚天剑]。","name":"[倚天屠龙]模式"},"baizhantime":{"init":false,"intro":"开启此模式后，出牌阶段开始时，玩家可弃置一张牌并选择一名其他角色，视为对其使用了一张[知己知彼]。","name":"[百战不殆]模式"},"liangshantime":{"init":false,"intro":"开启此模式后，主公改为'宋江'。","name":"[梁山模式]模式"},"zhanbutime":{"init":true,"intro":"开启此模式后，游戏开始时会进行一次占卜(注意观看记录)","name":"[占卜模式]模式"}},package:{
    character:{
        character:{
            "swk_tangseng2":["male","tangkivastar",1,[],["forbidai"]],
            "swk_bajie2":["male","tangkivastar",1,[],["forbidai"]],
            "swk_shaseng2":["male","tangkivastar",1,[],["forbidai"]],
            "yz_jingke":["male","qinkivastar",1,[],["forbidai"]],
            "yz_gaojianli":["male","qinkivastar",1,[],["forbidai"]],
            "yz_zhangliang":["male","hankivastar",1,[],["forbidai"]],
            "キバ秦":["male","qinkivastar",1,[],["forbidai"]],
            "キバ楚":["male","chukivastar",1,[],["forbidai"]],
            "キバ汉":["male","hankivastar",1,[],["forbidai"]],
            "キバ晋":["male","jinkivastar",1,[],["forbidai"]],
            "キバ隋":["male","suikivastar",1,[],["forbidai"]],
            "キバ唐":["male","tangkivastar",1,[],["forbidai"]],
            "キバ宋":["male","songkivastar",1,[],["forbidai"]],
            "キバ清":["male","qingkivastar",1,[],["forbidai"]],
            "キバ西":["male","xikivastar",1,[],["forbidai"]],
            "キバ罗":["male","luokivastar",1,[],["forbidai"]],
            "キバ日":["male","rikivastar",1,[],["forbidai"]],
            "キバ战":["male","zhankivastar",1,[],["forbidai"]],
            wangjitgstar:["male","shen",3,["starjuexing","starjince","starzhihui1"],["zhu"]],
            luxundsstar:["male","shen",3,["starduoshi","starjunqian"],["zhu"]],
            simayitgstar:["male","shen",3,["starlangxin","starguxing","starzhonghu"],["zhu"]],
            guojiadsstar:["male","shen",1,["starshijun","starshibai","starshisheng"],["zhu"]],
            jiangweitgstar:["male","shen",4,["staryiliang","starxinji"],["zhu"]],
            zhonghuidsstar:["male","shen",4,["starduanyi","starmiquan"],["zhu"]],
            zhangchunhuahunstar:["female","wei",3,["stardingshang","starqingzhen"],["zhu"]],
            simayihunstar:["male","wei",3,["stardingfan","starguixin"],["zhu"]],
            zhugelianghunstar:["male","shu",3,["starcehuo","starhunying"],["zhu"]],
            huangyueyinghunstar:["female","shu",3,["starqicai","starhunliang"],["zhu"]],
            zhouyutgstar:["male","shen",3,["starhongzi","starxionglue","starjianji"],["zhu"]],
            suncedsstar:["male","shen",4,["starlongji","starshenhun","zhiba"],["zhu"]],
            zhaoyuntgstar:["male","shen",3,["starlongduan","starhuzhu"],["zhu"]],
            chendaodsstar:["male","shen",4,["staryanjun","starduanhou","starzhongyi"],["zhu"]],
            yanghutgstar:["male","shen",3,["starqingde","starjiaowu"],["zhu"]],
            lukangdsstar:["male","shen",3,["starjueyan","starfufeng","starjuejin"],["zhu"]],
            daxiaoqiaohunstar:["female","wu",3,["startongque","starluanming"],["zhu"]],
            zhangfeinustar:["male","shen",4,["starnuxiao","stardahou"],["zhu"]],
            xiahouyuanjistar:["male","shen",4,["starsuji","startianyin"],["zhu"]],
            xiahoubaliestar:["male","shen",3,["starbaoxin"],["zhu"]],
            taishiciyistar:["male","shen",4,["staryijian","startianshi"],["zhu"]],
            liubangtgstar:["male","shen",4,["starsanyue","starhanjun"],["zhu"]],
            hanxindsstar:["male","shen",4,["startuli","starducang","starbeishui"],["zhu"]],
            liushanlongyistar:["male","shen",3,["starsanquan","startianle"],["zhu"]],
            huanghaofengguistar:["male","shen",3,["starxuqing","starluanquan"],["zhu"]],
            zhugezhanshistar:["male","shen",3,["starsanzui","staryinfu"],["zhu"]],
            liuyanlunstar:["male","shen",3,["starmuli","starmoushe"],["zhu"]],
            machaojistar:["male","shen",4,["starqishu","startiema","starjinge"],["zhu"]],
            jiaxutgstar:["male","shen",3,["starzhenwei","starluanshi"],["zhu"]],
            lirudsstar:["male","shen",3,["starjuemou","starfenji"],["zhu"]],
            madaixustar:["male","shen",4,["starmazhen","starqianjun"],["zhu"]],
            zhangjiaoshistar:["male","shen",3,["starqiushu","stardingtian"],["zhu"]],
            xizhicaihuanstar:["male","shen",3,["starzhongduan","starchouji","xianfu"],["zhu"]],
            sundengxunstar:["male","shen",4,["starxinkuangdao","starjingzun"],["zhu"]],
            sunqianyastar:["male","shen",4,["starqianjiao","starqiandui"],["zhu"]],
            guanyuwustar:["male","shen",3,["starshenghun","staryanji"],["zhu"]],
            qinyutgdsstar:["male","shen",4,["starhanmen","starbianjian"],["zhu"]],
            wenyangyuanstar:["male","shen",3,["starxuanzhen","starzhengyi","starmojie"],["zhu"]],
            shanxiongxinaostar:["male","shen",3,["starmaima","starjitang"],["zhu"]],
            ganningtgstar:["male","shen",4,["fenwei","pingkou","starqizhan"],["zhu"]],
            lingtongdsstar:["male","shen",3,["staryongjin","staryangwei"],["zhu"]],
            zhangxiuqiangstar:["male","shen",4,["starjiancong","starwangqiang"],["zhu"]],
            zhugeguoyustar:["female","shen",3,["starjinyi","starzhanyu","starhuaxian"],["zhu"]],
            simazhaoduanstar:["male","shen",3,["starjunshi","starxinzhao","starlangye"],["zhu"]],
            dingfengmingstar:["male","shen",4,["starbingtu","starjiangzhan"],["zhu"]],
            heqijianstar:["male","shen",4,["starshanduan","starzhouxia"],["zhu"]],
            huangzhongtgstar:["male","shen",3,["staryanggong","starbiri"],["zhu"]],
            weiyandsstar:["male","shen",4,["startiegu"],["zhu"]],
            wuyizhanstar:["male","shen",3,["starceben"],["zhu"]],
            xiahoudunkunstar:["male","shen",3,["starjianyue","staryigang"],["zhu"]],
            liubeizhaoliestar:["male","shen",5,["starlonglin","starshengnu","stardilie"],["zhu"]],
            fazhengmohuangstar:["male","shen",3,["starhuoxin","starmingyuan"],["zhu"]],
            masujinstar:["male","shen",3,["staryaodun","starzhidi"],["zhu"]],
            liaohuafengstar:["male","shen",4,["starxianfeng","starfuzhan"],["zhu"]],
            guansuohuastar:["male","shen",4,["starfangyi","starzhengce"],["zhu"]],
            sufeipianstar:["male","shen",4,["starjianxia"],["zhu"]],
            huangquanjiangstar:["male","shen",4,["starshihu"],["zhu"]],
            mazhongfustar:["male","shen",4,["starrenyi","starheman"],["zhu"]],
            panmafustar:["male","shen",3,["starduoqi","staranji"],["zhu"]],
            huatuoyistar:["male","shen",3,["starguagu","starlianjiu"],["zhu"]],
            maliangluestar:["male","shen",3,["starqilue","starzeshu","starzizhu","starjiyuan"],["zhu"]],
            xiangyubawangstar:["male","shen",4,["starjiangjue","starpoqin","starnijian"],["zhu"]],
            sunquanwudistar:["male","shen",4,["starzhengheng","staryuanzhi"],["zhu"]],
            zhugeliangzuodistar:["male","shen",3,["startianxing","staryuhuo","starzhencheng"],["zhu"]],
            xiahouchunchongstar:["male","shen",3,["starjianghou","starshixing"],["zhu"]],
            caocaoweiwustar:["male","shen",4,["staryiji","starchujiao","starxietian"],["zhu"]],
            pangtongxiaoniaostar:["male","shen",3,["starsongzang","starzhanji"],["zhu"]],
            zhangsongxiantustar:["male","shen",4,["starmixian","starqiaozhi"],["zhu"]],
            liubazhengzhao:["male","shen",3,["starqingshi","starzhike"],["zhu"]],
            lujijustar:["male","shen",3,["staryishu","startianlun","starhuaiju"],["zhu"]],
            "boss_jiaxuzhanjuestar":["male","shen",8,["xinjizhi","starzhenwei","starluanshi","xinzhiheng"],["boss","bossallowed"]],
            "boss_jiangweizhanjuestar":["male","shen",8,["starzhengce","starbaoxin","starzhouxia","starbeifa","shanjia"],["boss","bossallowed"]],
            "boss_simahuishuijingstar":["male","shen",5,["starzhenwei","zhexian","xinlianhuan","huashen","xinsheng","huoji","staryinji","starjiece","startianjian"],["zhu","boss","bossallowed"]],
            "fuben_zhuyuanzhangmingstar":["male","mingkivastar",1,["starsanquan","qiangyun"],["forbidai"]],
            "fuben_liujimingstar":["male","mingkivastar",1,["zhijian","tongji","kaikang","starljzhanji","starchoumou"],["forbidai"]],
            "fuben_wanglangfuhuangstar":["male","shen",3,["starshebian","starduanyan","starmiyan"],["forbidai"]],
            linchongbaozitoustar:["male","shen",4,["staraojun","starxuezhan"],["zhu"]],
            "fuben_kongrongrendaistar":["male","shen",3,["starjianren","starrangli"],["forbidai"]],
            "fuben_yangxiulileistar":["male","shen",3,["starzhixin","starjianren"],["forbidai"]],
            "fuben_mihenggujianstar":["male","shen",3,["starjiejian","starjianren","starkuangshe"],["forbidai"]],
            wangyunlianstar:["male","shen",4,["starjiedao","starjilian"],["zhu"]],
            zhanghejistar:["male","shen",4,["starjibian"],["zhu"]],
            "fuben_yuanshaoyuanjunstar":["male","shen",1,[],["forbidai"]],
            "fuben_chengyistar":["male","shen",1,[],["forbidai"]],
            "fuben_huaxiongxueaostar":["male","shen",6,["shiyong","starmojiang"],["forbidai"]],
            "fuben_sunjianduanzeistar":["male","shen",4,["yinghun","starxuanzhan","starbaodao"],["forbidai"]],
            "time_wusongstar":["male","shen",4,["starzuijiu"],["forbidai"]],
            "time_likuistar":["male","shen",4,["starfuchou"],["forbidai"]],
            "time_songjiangjishiyustar":["male","shen",5,["starcaishu","stardianjiang","starzhaoan"],["forbidai"]],
            "time_baiqibubaistar":["male","shen",4,["starzhanshen"],["zhu"]],
            "boss_sunwukongdouzhanshengfo":["male","shen",3,["starwuxin","starhuoyan","starweitang","starbianhua","swk9981","starshengun"],["boss","bossallowed"]],
            jiabaoyuyihongstar:["male","shen",3,["starjiafu","starlingxian"],["zhu"]],
            liuyuzongstar:["male","shen",3,["starrenzi","starzhizhan"],["zhu"]],
            gongsunzanbaistar:["male","shen",3,["starjueyi","starjima"],["zhu"]],
            xushuzhustar:["male","shen",3,["starxsjueyan","starzhujue","stardanfu"],["zhu"]],
            huangfuzhaoyunsuistar:["male","shen",3,["starxionglue","longdan","starlongduan","bazhen"],["zhu"]],
            xumuyunxingstar:["male","shen",3,["xinjizhi","tianbian","starjibian","starzhujue"],["zhu"]],
            lvmengyinstar:["male","shen",3,["staryinren","starbaiyi"],["zhu"]],
            lusudistar:["male","shen",3,["starronghu","starmengjiao"],["zhu"]],
            zhentianxingcunwanstar:["male","zhankivastar","1<img src='file:///storage/emulated/0/Android/data/com.widget.noname/theme/style/hp/image/emotion1.png' width='12' height='12'>2",["starzhentian","starfujun"],["zhu"]],
            "boss_pangdegongwustar":["male","shen",8,["starjiece","starsongzang","starzhujue","startianxing","staryouzhu","starpdgyinji"],["boss","bossallowed"]],
            kaisahuistar:["male","shen",4,["starluoma","starzhengzhan","starcaiguo"],["zhu"]],
            gongbenwuzangliustar:["male","zhankivastar",3,["startianliu","starshanji","starlongjue"],["zhu"]],
            yingzhengzunstar:["male","shen",4,["stardinu","starfenshu","starhuangzun"],["zhu"]],
            wangpingstar:["male","shen",4,["starjianglue"],["zhu"]],
            wenpinrenstar:["male","shen",4,["xinjushou","starwpzhenwei"],["zhu"]],
            dianweimaostar:["male","shen",4,["starzhongji"],["zhu"]],
            qinmiyingstar:["male","shen",3,["staryingbian","starhubian","starhuangbian"],["zhu"]],
            caoangdunstar:["male","shen",4,["starjiangkai","starweima"],["zhu"]],
            jianyongshistar:["male","shen",3,["stardaotan","starzongxin"],["zhu"]],
            dengaitoudustar:["male","shen",4,["startianxi","starliangzi"],["zhu"]],
            zhugedanshangstar:["male","shen",3,["starweilin","starjigong","starkunzhan"],["zhu"]],
            xuyoushistar:["male","shen",3,["starhualue","staraogong","starhuicai"],["zhu"]],
            liuxietianzhustar:["male","hankivastar",3,["starmolong","startianzhao","starhantong"],["zhu"]],
            mifurenhanstar:["female","shen",3,["starguihou","starsunxiang"],["zhu"]],
            guanzhongdsstar:["male","shen",3,["starxihuan","starzuoming"],["zhu","des:<img src='file:///storage/emulated/0/Android/data/com.widget.noname/extension/王朝更替_权/管辂.jpg' width='90' height='100'>由于设计时把管仲想成了管辂，所以会修改技能，所以在此致以歉意的将原稿修改并发出。<br>竹音管辂 999 周/齐 ◎竹音管辂/天罡王基<br>[袭桓]同管仲<br>[仙卦]每当有一名角色受到一点伤害或失去一点体力，你可以进行一次判定，然后获得一枚\"X\"标记。(X为判定牌花色)<br>[卦迹]摸牌阶段开始时，你可以弃置一枚红色标记，然后执行以下效果:①♥，你回复一点体力。②♦，你多摸一张牌;弃牌阶段开始时，你可以弃置一枚黑色标记，然后执行以下效果:①你跳过弃牌阶段并弃置一张牌。②你弃置一名角色的一张牌;结束阶段，若你拥有四种花色标记，你各弃置一枚并随机获得一张祭器牌。"]],
            baoshuyatgstar:["male","shen",3,["starshicai","starshijie"],["zhu"]],
            jiangfeishoustar:["male","shen",4,["staryangxi","stardaizhan"],["zhu"]],
            dongyunzhenjiestar:["male","shen",3,["starqiyan","starxiancai"],["zhu"]],
            caiwenjiduqingstar:["female","shen",3,["starhujia","starqiuqing"],["zhu","des:<img src='file:///storage/emulated/0/Android/data/com.widget.noname/extension/王朝更替_权/蔡文姬.jpg' width='76' height='100'>"]],
            baosanniangmeistar:["female","shen",3,["starxijun","starmeiying"],["zhu"]],
            caopiguixiestar:["male","shen",3,["starguibian","starjueshang","starxieyin"],["zhu"]],
            caojietianhoustar:["female","hankivastar",3,["starhuxi","starshoujun","starweimin"],["zhu"]],
        },
        characterTitle:{
            "boss_sunwukongdouzhanshengfo":"<span style=color:#FF0000>斗战胜佛</span>",
            "boss_simahuishuijingstar":"<span style=color:#4FF6FF>水镜先生</span>",
            "boss_pangdegongwustar":"<span style=color:#FFFFFF>贤才之友</span>",
            "boss_jiangweizhanjuestar":"<span style=color:#4BB5FF>天水麒麟</span>",
            "boss_jiaxuzhanjuestar":"<span style=color:#8300FF>乱武天下</span>",
        },
        perfectPair:{
            wangjitgstar:["luxundsstar"],
            simayitgstar:["guojiadsstar"],
            jiangweitgstar:["zhonghuidsstar"],
            zhouyutgstar:["suncedsstar"],
            zhaoyuntgstar:["chendaodsstar"],
            yanghutgstar:["lukangdsstar"],
            daxiaoqiaohunstar:["zhouyutgstar","suncedsstar"],
            xiahoubaliestar:["zhangfeinustar","xiahouyuanjistar","jiangweitgstar"],
            taishiciyistar:["suncedsstar"],
            liubangtgstar:["hanxindsstar"],
            liushanlongyistar:["huanghaofengguistar"],
            zhugezhanshistar:["jiangweitgstar","huanghaofengguistar","zhugelianghunstar"],
            machaojistar:["madaixustar"],
            madaixustar:["mateng"],
            jiaxutgstar:["lirudsstar"],
            zhangjiaoshistar:["simayitgstar"],
            guanyuwustar:["zhangfeinustar"],
            xizhicaihuanstar:["guojiadsstar"],
            qinyutgdsstar:["guanyuwustar"],
            wenyangyuanstar:["simayitgstar"],
            ganningtgstar:["lingtongdsstar"],
            zhugeguoyustar:["zhugezhanshistar"],
            zhangxiuqiangstar:["jiaxutgstar"],
            simazhaoduanstar:["simayitgstar"],
            huangzhongtgstar:["weiyandsstar"],
            xiahoudunkunstar:["xiahouyuanjistar"],
            liubeizhaoliestar:["guanyuwustar","zhangfeinustar"],
            fazhengmohuangstar:["liubeizhaoliestar"],
            liaohuafengstar:["jiangweitgstar"],
            guansuohuastar:["baosanniangmeistar","guanyuwustar"],
            sufeipianstar:["ganningtgstar"],
            huangquanjiangstar:["liubeizhaoliestar","caopiguixiestar"],
            mazhongfustar:["liubeizhaoliestar"],
            panmafustar:["sunquanwudistar"],
            maliangluestar:["masujinstar","xiahoudunkunstar"],
            huatuoyistar:["guanyuwustar"],
            xiangyubawangstar:["liubangtgstar"],
            sunquanwudistar:["zhouyutgstar","suncedsstar"],
            caocaoweiwustar:["caopiguixiestar","dianweimaostar"],
            xiahouchunchongstar:["xiahouyuanjistar"],
            zhugeliangzuodistar:["jiangweitgstar","liubeizhaoliestar","liushanlongyistar","guanyuwustar","zhangfeinustar","zhaoyuntgstar","machaojistar","huangzhongtgstar"],
            zhangsongxiantustar:["fazhengmohuangstar"],
            lujijustar:["sunquanwudistar"],
            "boss_simahuishuijingstar":["liubeizhaoliestar"],
            linchongbaozitoustar:["liubeizhaoliestar"],
            wangyunlianstar:["caocaoweiwustar"],
            zhanghejistar:["caocaoweiwustar"],
            "time_baiqibubaistar":["yingzhengzunstar"],
            "boss_sunwukongdouzhanshengfo":["liubeizhaoliestar"],
            gongsunzanbaistar:["liubeizhaoliestar"],
            liuyuzongstar:["gongsunzanbaistar"],
            jiabaoyuyihongstar:["liubeizhaoliestar"],
            xushuzhustar:["liubeizhaoliestar","zhugeliangzuodistar"],
            huangfuzhaoyunsuistar:["xumuyunxingstar","zhaoyuntgstar"],
            lvmengyinstar:["sunquanwudistar","luxundsstar"],
            lusudistar:["zhouyutgstar","zhugeliangzuodistar"],
            kaisahuistar:["liubangtgstar"],
            wangpingstar:["masujinstar"],
            liyan:["zhugeliang"],
            miheng:["kongrong"],
            yangxiu:["xunyu"],
            jianyongshistar:["qinmiyingstar"],
            dianweimaostar:["caoangdunstar","caocaoweiwustar"],
            caoangdunstar:["caopiguixiestar","caocaoweiwustar"],
            baoshuyatgstar:["guanzhongdsstar"],
            guanzhongdsstar:["wangjitgstar"],
            caojietianhoustar:["liuxietianzhustar"],
            baosanniangmeistar:["guansuohuastar"],
            caiwenjiduqingstar:["caocaoweiwustar"],
            jiangfeishoustar:["liushanlongyistar","zhugeliangzuodistar","dongyunzhenjiestar"],
            dongyunzhenjiestar:["liushanlongyistar","zhugeliangzuodistar"],
        },
        translate:{
            rjoker:"",
            bjoker:"",
            joker:"    <img src='file:///storage/emulated/0/Android/data/com.widget.noname/extension/王朝更替_权/JOKER.png' width='14' height='14'>",
            "joker2":"    <img src='file:///storage/emulated/0/Android/data/com.widget.noname/extension/王朝更替_权/JOKER2.png' width='14' height='14'>",
            special:"<span style=color:#FF0000>进阶</span>",
            wangjitgstar:"天罡王基",
            luxundsstar:"地煞陆逊",
            simayitgstar:"天罡司马懿",
            guojiadsstar:"地煞郭嘉",
            jiangweitgstar:"天罡姜维",
            zhonghuidsstar:"地煞钟会",
            zhangchunhuahunstar:"婚张春华",
            simayihunstar:"婚司马懿",
            zhugelianghunstar:"婚诸葛亮",
            huangyueyinghunstar:"婚黄月英",
            zhouyutgstar:"天罡周瑜",
            suncedsstar:"地煞孙策",
            zhaoyuntgstar:"天罡赵云",
            chendaodsstar:"地煞陈到",
            yanghutgstar:"天罡羊祜",
            lukangdsstar:"地煞陆抗",
            daxiaoqiaohunstar:"婚大小乔",
            zhangfeinustar:"怒张飞",
            xiahouyuanjistar:"疾夏侯渊",
            xiahoubaliestar:"裂夏侯霸",
            taishiciyistar:"义太史慈",
            liubangtgstar:"天罡刘邦",
            hanxindsstar:"地煞韩信",
            liushanlongyistar:"龙裔刘禅",
            huanghaofengguistar:"凤鬼黄皓",
            zhugezhanshistar:"时诸葛瞻",
            liuyanlunstar:"轮刘焉",
            machaojistar:"极马超",
            jiaxutgstar:"天罡贾诩",
            lirudsstar:"地煞李儒",
            madaixustar:"虚马岱",
            zhangjiaoshistar:"始张角",
            xizhicaihuanstar:"幻戏志才",
            sundengxunstar:"询孙登",
            sunqianyastar:"雅孙乾",
            guanyuwustar:"武关羽",
            qinyutgdsstar:"天罡秦琼&地煞尉迟恭",
            wenyangyuanstar:"鸳文鸯",
            shanxiongxinaostar:"鏖单雄信",
            ganningtgstar:"天罡甘宁",
            lingtongdsstar:"地煞凌统",
            zhangxiuqiangstar:"枪张绣",
            zhugeguoyustar:"羽诸葛果",
            simazhaoduanstar:"断司马昭",
            dingfengmingstar:"明丁奉",
            heqijianstar:"剑贺齐",
            huangzhongtgstar:"天罡黄忠",
            weiyandsstar:"地煞魏延",
            wuyizhanstar:"战吴懿",
            xiahoudunkunstar:"困夏侯惇",
            liubeizhaoliestar:"昭烈刘备",
            fazhengmohuangstar:"魔皇法正",
            masujinstar:"尽马谡",
            liaohuafengstar:"锋廖化",
            guansuohuastar:"花关索",
            sufeipianstar:"翩苏飞",
            huangquanjiangstar:"将黄权",
            mazhongfustar:"抚马忠",
            panmafustar:"伏潘璋马忠",
            huatuoyistar:"医华佗",
            maliangluestar:"略马良",
            xiangyubawangstar:"霸王项羽",
            sunquanwudistar:"吴帝孙权",
            zhugeliangzuodistar:"佐帝诸葛亮",
            xiahouchunchongstar:"冲夏侯淳",
            caocaoweiwustar:"魏武曹操",
            pangtongxiaoniaostar:"小鸟庞统",
            zhangsongxiantustar:"献图张松",
            liubazhengzhao:"征兆刘巴",
            lujijustar:"橘陆绩",
            "boss_jiaxuzhanjuestar":"战绝贾诩",
            "boss_jiangweizhanjuestar":"战绝姜维",
            "boss_simahuishuijingstar":"水镜司马徽",
            "fuben_zhuyuanzhangmingstar":"明朱元璋",
            "fuben_liujimingstar":"明刘基",
            "fuben_wanglangfuhuangstar":"扶皇王朗",
            linchongbaozitoustar:"豹子头林冲",
            "fuben_kongrongrendaistar":"仁代孔融",
            "fuben_yangxiulileistar":"鸡肋杨修",
            "fuben_mihenggujianstar":"鼓剑祢衡",
            wangyunlianstar:"连王允",
            zhanghejistar:"汲张郃",
            "fuben_yuanshaoyuanjunstar":"援军袁绍",
            "fuben_chengyistar":"援军程昱",
            "fuben_huaxiongxueaostar":"血鏖华雄",
            "fuben_sunjianduanzeistar":"断贼孙坚",
            "time_wusongstar":"行者武松",
            "time_likuistar":"黑旋风李逵",
            "time_songjiangjishiyustar":"及时雨宋江",
            "time_baiqibubaistar":"不败白起",
            "boss_sunwukongdouzhanshengfo":"斗战孙悟空",
            jiabaoyuyihongstar:"怡红贾宝玉",
            liuyuzongstar:"宗刘虞",
            gongsunzanbaistar:"白公孙瓒",
            xushuzhustar:"诛徐庶",
            huangfuzhaoyunsuistar:"碎皇甫朝云",
            xumuyunxingstar:"醒徐暮云",
            lvmengyinstar:"隐吕蒙",
            lusudistar:"缔鲁肃",
            zhentianxingcunwanstar:"丸真田幸村",
            "boss_pangdegongwustar":"舞庞德公",
            kaisahuistar:"毁凯撒",
            gongbenwuzangliustar:"流宫本武藏",
            yingzhengzunstar:"尊嬴政",
            wangpingstar:"飞将王平",
            wenpinrenstar:"仁文聘",
            dianweimaostar:"矛典韦",
            qinmiyingstar:"鹰秦宓",
            caoangdunstar:"盾曹昂",
            jianyongshistar:"狮简雍",
            dengaitoudustar:"偷渡邓艾",
            zhugedanshangstar:"殇诸葛诞",
            xuyoushistar:"恃许攸",
            liuxietianzhustar:"天主刘协",
            mifurenhanstar:"寒糜夫人",
            guanzhongdsstar:"地煞管仲",
            baoshuyatgstar:"天罡鲍叔牙",
            jiangfeishoustar:"守蒋琬&守费祎",
            dongyunzhenjiestar:"贞节董允",
            caiwenjiduqingstar:"毒情蔡文姬",
            baosanniangmeistar:"魅鲍三娘",
            caopiguixiestar:"鬼蝎曹丕",
            caojietianhoustar:"天后曹节",
        },
    },
    card:{
        card:{
            nanguastar:{
                fullskin:true,
                type:"equip",
                subtype:"equip2",
                skills:["guhuo"],
                ai:{
                    basic:{
                        equipValue:6,
                        order:function (card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
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
            },
            starqiceliulong:{
                fullskin:true,
                type:"equip",
                subtype:"equip4",
                distance:{
                    globalFrom:-1,
                    globalTo:-1,
                },
                nomod:true,
                nopower:true,
                unique:true,
                global:"g_dinglanyemingzhu_ai",
                skills:["starqiceliulong_skill"],
                ai:{
                    equipValue:function (card,player){
            if(player.hasSkill('zhiyu')) return 8;
            if(player.hasSkill('qice')) return 6;
            if(game.hasPlayer(function(current){
                return current.hasSkill('zhiyu')&&get.attitude(player,current)<=0;
            })){
                return 0;
            }
            return 7;
        },
                    basic:{
                        equipValue:6.5,
                        order:function (card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
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
            },
            stargefadaishou:{
                audio:true,
                fullskin:true,
                type:"trick",
                enable:true,
                selectTarget:-1,
                cardcolor:"red",
                toself:true,
                filterTarget:function (card,player,target){
        return target==player;
    },
                modTarget:true,
                content:function (){
        target.chooseToDiscard(3,true);
        target.addTempSkill('stargefa','phaseUseEnd');
    },
                ai:{
                    basic:{
                        order:7.2,
                        useful:4.5,
                        value:9.2,
                    },
                    result:{
                        target:2,
                    },
                    tag:{
                        draw:2,
                    },
                },
            },
            starchusanhai:{
                audio:true,
                fullskin:true,
                type:"trick",
                enable:true,
                selectTarget:-1,
                cardcolor:"red",
                toself:true,
                filterTarget:function (card,player,target){
        return target==player;
    },
                modTarget:true,
                content:function (){
        target.draw(3);
        player.addTempSkill('fengyin','phaseEnd');
    },
                ai:{
                    basic:{
                        order:7.2,
                        useful:4.5,
                        value:9.2,
                    },
                    result:{
                        target:2,
                    },
                    tag:{
                        draw:2,
                    },
                },
            },
            staryitianjianCC:{
                type:"equip",
                subtype:"equip5",
                skills:["staryitian"],
                ai:{
                    basic:{
                        equipValue:7.5,
                        order:function (card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
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
                fullimage:true,
            },
            staryitianjianjy:{
                fullskin:true,
                type:"equip",
                subtype:"equip1",
                distance:{
                    attackFrom:-2,
                },
                onLose:function (){
        player.addSkill('starjiuyin');
        player.addSkill('starxianglong');
        player.awakenSkill('starjiuyin');
        player.awakenSkill('starxianglong');
    },
                skills:["starjiuyin","starxianglong"],
                ai:{
                    basic:{
                        equipValue:4,
                        order:function (card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
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
            },
            startulongdao:{
                fullskin:true,
                type:"equip",
                subtype:"equip1",
                distance:{
                    attackFrom:-2,
                },
                onLose:function (){
        player.addSkill('wumu');
        player.awakenSkill('wumu');
    },
                skills:["wumu"],
                ai:{
                    basic:{
                        equipValue:4,
                        order:function (card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
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
            },
            starhongbaocc:{
                type:"equip",
                subtype:"equip5",
                skills:["starrencheng"],
                nomod:true,
                nopower:true,
                unique:true,
                ai:{
                    equipValue:5,
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
                        equipValue:1,
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
                fullimage:true,
            },
            starhongbaolb:{
                type:"equip",
                subtype:"equip5",
                skills:["wushuang"],
                nomod:true,
                nopower:true,
                unique:true,
                ai:{
                    equipValue:5,
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
                        equipValue:1,
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
                fullimage:true,
            },
            starhongbaodz:{
                type:"equip",
                subtype:"equip5",
                skills:["jiuchi","roulin"],
                nomod:true,
                nopower:true,
                unique:true,
                ai:{
                    equipValue:5,
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
                        equipValue:1,
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
                fullimage:true,
            },
            starhongbaodc:{
                type:"equip",
                subtype:"equip5",
                skills:["starliyue"],
                nomod:true,
                nopower:true,
                unique:true,
                ai:{
                    equipValue:5,
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
                        equipValue:1,
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
                fullimage:true,
            },
            starhongbaomt:{
                type:"equip",
                subtype:"equip5",
                skills:["starmaxiong"],
                nomod:true,
                nopower:true,
                unique:true,
                ai:{
                    equipValue:5,
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
                        equipValue:1,
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
                fullimage:true,
            },
            starhongbaojs:{
                type:"equip",
                subtype:"equip5",
                skills:["starjianshi"],
                nomod:true,
                nopower:true,
                unique:true,
                ai:{
                    equipValue:5,
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
                        equipValue:1,
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
                fullimage:true,
            },
            starhongbaohg:{
                type:"equip",
                subtype:"equip5",
                skills:["starzhaku"],
                nomod:true,
                nopower:true,
                unique:true,
                ai:{
                    equipValue:5,
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
                        equipValue:1,
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
                fullimage:true,
                image:"ext:王朝更替_权/starhongbaojs.jpg",
            },
            starhongbao:{
                audio:true,
                type:"special",
                enable:true,
                selectTarget:-1,
                cardcolor:"red",
                toself:true,
                filterTarget:function (card,player,target){
        return target==player;
    },
                modTarget:true,
                content:function (){
        
    },
                ai:{
                    basic:{
                        order:7.2,
                        useful:4.5,
                        value:9.2,
                    },
                    result:{
                        target:2,
                    },
                    tag:{
                        draw:2,
                    },
                },
                fullimage:true,
            },
            "fuben_chengqustar":{
                type:"equip",
                subtype:"equip1",
                distance:{
                    attackFrom:-2,
                },
                skills:["starchengpu"],
                ai:{
                    basic:{
                        equipValue:4,
                        order:function (card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
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
                fullimage:true,
            },
            "fuben_zhoutaistar":{
                type:"equip",
                subtype:"equip2",
                onLose:function (){
        player.recover();
        player.addSkill('buqu');
        player.awakenSkill('buqu');
    },
                filterLose:function (card,player){
        return player.hp<player.maxHp;
    },
                skills:["buqu"],
                tag:{
                    recover:1,
                },
                ai:{
                    order:9.5,
                    equipValue:function (card,player){
            if(player.hp==player.maxHp) return 5;
            if(player.countCards('h','baiyin')) return 6;
            return 0;
        },
                    basic:{
                        equipValue:5,
                        order:function (card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
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
                fullimage:true,
            },
            "fuben_xurongstar":{
                type:"equip",
                subtype:"equip1",
                distance:{
                    attackFrom:-2,
                },
                skills:["starxurong"],
                ai:{
                    basic:{
                        equipValue:4,
                        order:function (card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
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
                fullimage:true,
            },
            "fuben_zumaostar":{
                type:"equip",
                subtype:"equip3",
                distance:{
                    globalTo:1,
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
                skills:["starzumao"],
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
                fullimage:true,
            },
            "fuben_handangstar":{
                type:"equip",
                subtype:"equip4",
                distance:{
                    globalFrom:-1,
                },
                skills:["starhandang"],
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
                fullimage:true,
            },
            "fuben_niufustar":{
                type:"equip",
                subtype:"equip2",
                onLose:function (){
        player.awakenSkill('shiyong');
    },
                filterLose:function (card,player){
        return player.hp<player.maxHp;
    },
                tag:{
                    recover:1,
                },
                ai:{
                    order:9.5,
                    equipValue:function (card,player){
            if(player.hp==player.maxHp) return 5;
            if(player.countCards('h','baiyin')) return 6;
            return 0;
        },
                    basic:{
                        equipValue:5,
                        order:function (card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
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
                fullimage:true,
            },
            "fuben_lijuestar":{
                type:"equip",
                subtype:"equip4",
                skills:["starlijue"],
                distance:{
                    globalFrom:-1,
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
                fullimage:true,
            },
            "fuben_guosistar":{
                type:"equip",
                subtype:"equip3",
                skills:["starguosi"],
                distance:{
                    globalTo:1,
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
                fullimage:true,
            },
            "swk_tangseng":{
                audio:true,
                type:"special",
                cardcolor:"red",
                ai:{
                    basic:{
                        useful:[7,2],
                        value:[7,2],
                    },
                },
                fullimage:true,
            },
            "swk_bajie":{
                audio:true,
                type:"special",
                cardcolor:"red",
                ai:{
                    basic:{
                        useful:[7,2],
                        value:[7,2],
                    },
                },
                fullimage:true,
            },
            "swk_shaseng":{
                audio:true,
                type:"special",
                cardcolor:"red",
                ai:{
                    basic:{
                        useful:[7,2],
                        value:[7,2],
                    },
                },
                fullimage:true,
            },
            staryuewanggoujianjian:{
                fullskin:true,
                type:"equip",
                subtype:"equip1",
                nomod:true,
                nopower:true,
                unique:true,
                skills:["starlijian","startuqiangshenghua","starzhenqian"],
                enable:function (card,player){
        return !player.hasSkill('yuewang');
    },
                distance:{
                    attackFrom:-2,
                },
                onEquip:function (){
        if(player.hasSkill('staryuewang')){
            player.discard(card);
        }
    },
                ai:{
                    equipValue:9,
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
                        equipValue:1,
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
            },
            starqixinglongyuanjian:{
                fullskin:true,
                type:"equip",
                subtype:"equip1",
                distance:{
                    attackFrom:-1,
                },
                skills:["starlongquan","starxiansuo","starshixian"],
                ai:{
                    basic:{
                        equipValue:4,
                        order:function (card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
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
            },
            "gz_huaxinstar":{
                type:"jiqi",
                enable:true,
                selectTarget:-1,
                modTarget:true,
                toself:true,
                filterTarget:function (card,player,target){return player==target},
                content:function (){
        target.skip('phaseUse');
        target.draw(5);
    },
                ai:{
                    basic:{
                        useful:[1,1],
                        value:[1,1],
                    },
                    order:1,
                    result:{
                        target:function (player,target){
                if(target.countCards('h','tao')) return 0;
                var nh=target.countCards('h');
                if(nh<=2) return 1;
                if(target.hp==1&&target.maxHp>2) return 1;
                return 0;
            },
                    },
                    tag:{
                        recover:1,
                    },
                },
                fullimage:true,
            },
            "gz_guanningstar":{
                audio:true,
                type:"jiqi",
                enable:function (card,player){
        if(get.mode()=='guozhan'&&player.isUnseen()) return false;
        return true;
    },
                filterTarget:function (card,player,target){
        if(get.mode()!='guozhan') return player!=target;
        if(target.identity=='unknown'||player.identity=='unknown') return false;
        if(player==target) return false;
        if(player.identity=='ye') return true;
        return player.identity!=target.identity;
    },
                content:function (){
        var karfb=get.cardPile2(function(card){
                return get.type(card)=='jiqi';
            });
        target.gain(karfb,'draw');
        game.log(target,'摸了一张祭器牌');
    },
                ai:{
                    basic:{
                        useful:4,
                        value:8,
                        order:9,
                    },
                    result:{
                        target:1,
                        player:3,
                    },
                },
                selectTarget:1,
                fullimage:true,
            },
            "gz_fuwanstar":{
                audio:true,
                type:"jiqi",
                enable:true,
                selectTarget:1,
                postAi:function (targets){
        return targets.length==1&&targets[0].countCards('j');
    },
                filterTarget:function (card,player,target){
        if(player==target) return false;
        return target.countDiscardableCards(player,'he');
    },
                content:function (){
        if(target.countDiscardableCards(player,'he')){
            player.discardPlayerCard('he',target,true);
            player.useCard({name:'sha'},target);
        }
    },
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
                fullimage:true,
            },
        },
        translate:{
            nanguastar:"万圣节南瓜🎃",
            "nanguastar_info":"锁定技，装备后视为你拥有技能\"蛊惑\"。",
            starqiceliulong:"奇策六龙",
            "starqiceliulong_info":"锁定技，你视为拥有技能“奇策”，若你已经有“奇策”;你的进攻距离+1，防御距离-1。",
            stargefadaishou:"割发代首",
            "stargefadaishou_info":"你可以弃置三张牌，然后你可以在出牌阶段弃置一名其他角色的手牌，出牌阶段限三次，出牌阶段结束后失效。",
            starchusanhai:"除三害",
            "starchusanhai_info":"你可以摸三张牌并被\"封印\"，结束阶段失效。",
            staryitianjianCC:"倚天剑",
            "staryitianjianCC_info":"每当你因【杀】造成或受到一点伤害，你可以摸一张牌。",
            staryitianjianjy:"倚天剑",
            "staryitianjianjy_info":"装备后你视为拥有\"九阴真经\",\"降龙十八掌\";失去此牌后，你永久失去前效果。",
            startulongdao:"屠龙刀",
            "startulongdao_info":"装备后你视为拥有\"武穆遗书\";失去此牌后，你永久失去前效果。",
            starhongbaocc:"曹冲",
            "starhongbaocc_info":"当一名角色濒死时，你可以令其摸一张牌。",
            starhongbaolb:"吕布",
            "starhongbaolb_info":"锁定技，装备后你视为拥有技能\"无双\"。",
            starhongbaodz:"董卓",
            "starhongbaodz_info":"锁定技，装备后，你视为拥有技能\"酒池\"和\"肉林\"。",
            starhongbaodc:"貂蝉",
            "starhongbaodc_info":"结束阶段，你可以获得一名其他角色的一张牌。",
            starhongbaomt:"马腾",
            "starhongbaomt_info":"摸牌阶段结束时，你可以弃置两张牌并摸两张牌。",
            starhongbaojs:"沮授",
            "starhongbaojs_info":"每当你体力值改变，你摸一张牌。",
            starhongbaohg:"黄盖",
            "starhongbaohg_info":"出牌阶段限一次，你可以弃置一张牌，然后失去一点体力并摸三张牌。",
            starhongbao:"红包",
            "starhongbao_info":"拆开红包，新年大吉。",
            "fuben_chengqustar":"程普",
            "fuben_chengqustar_info":"援军的回合开始时，你可以对其使用一张【酒】。",
            "fuben_zhoutaistar":"周泰",
            "fuben_zhoutaistar_info":"锁定技，你视为拥有技能“不屈”，当你失去此装备，你回复一点体力。",
            "fuben_xurongstar":"徐荣",
            "fuben_xurongstar_info":"锁定技，结束阶段，你对一名角色使用一张【杀】。",
            "fuben_zumaostar":"祖茂",
            "fuben_zumaostar_info":"每当援军受到伤害时，你可以令其获得一枚护甲。",
            "fuben_handangstar":"韩当",
            "fuben_handangstar_info":"你可以用♦手牌当【杀】使用。",
            "fuben_niufustar":"牛辅",
            "fuben_niufustar_info":"锁定技，当你失去此装备时，“恃勇”失效。",
            "fuben_lijuestar":"李傕",
            "fuben_lijuestar_info":"锁定技，每当你增加一点体力上限，你摸两张牌。",
            "fuben_guosistar":"郭汜",
            "fuben_guosistar_info":"锁定技，每当你失去一点体力上限，你摸两张牌。",
            "swk_tangseng":"唐僧",
            "swk_tangseng_info":"",
            "swk_bajie":"八戒",
            "swk_bajie_info":"",
            "swk_shaseng":"沙僧",
            "swk_shaseng_info":"",
            staryuewanggoujianjian:"越王勾践剑",
            "staryuewanggoujianjian_info":"每当你造成伤害，你可以弃置此装备并摸两张牌，然后此伤害+1;每当你打出一张牌，你摸一张牌。<br>专属技，准备阶段，若此剑主人为\"勾践\"，你失去所有技能并获得\"图强(升华)\"，\"八阵\"和\"薪胆\"。",
            starqixinglongyuanjian:"七星龙渊剑",
            "starqixinglongyuanjian_info":"出牌阶段限一次，你可以展示所有手牌并观看一名其他角色的手牌;一名角色的结束阶段，你可以弃置一张牌并观看其手牌。<br>专属技，准备阶段，若此剑主人为\"李白\"，你永久获得技能\"仙索\"并升华技能\"谪仙\"。",
            "gz_huaxinstar":"华歆",
            "gz_huaxinstar_info":"跳过出牌阶段，然后摸五张牌。",
            "gz_guanningstar":"管宁",
            "gz_guanningstar_info":"出牌阶段，你令一名其他角色获得一张祭器牌。",
            "gz_fuwanstar":"付完",
            "gz_fuwanstar_info":"出牌阶段，对一名其他角色使用。你弃置其区域里的一张牌并对其使用一张【杀】。",
        },
        list:[["club","4","nanguastar"],["diamond","7","starqiceliulong"],["spade","6","staryuewanggoujianjian"],["heart","13","starqixinglongyuanjian"],["heart","13","starqixinglongyuanjian"],["club","13","staryuewanggoujianjian"],["diamond","1","gz_huaxinstar"],["joker2","<span style=color:#FF0000>☆</span>","gz_guanningstar"],["joker","<span style=color:#000000>☆</span>","nanguastar"],["spade","1","gz_fuwanstar"]],
    },
    skill:{
        skill:{
            "starzhihui1":{
                audio:"ext:王朝更替_权:2",
                group:"starzhihui2",
                trigger:{
                    player:"loseHpEnd",
                },
                direct:true,
                content:function (){
        "step 0"
        var check;
        var i,num=game.countPlayer(function(current){
            return current!=player&&current.countCards('h')&&get.attitude(player,current)<=0;
        });
        check=(num>=2);
        player.chooseTarget(get.prompt('starzhihui1'),[1,2],function(card,player,target){
            return target.countCards('h')>0&&player!=target;
        },function(target){
            if(!_status.event.aicheck) return 0;
            var att=get.attitude(_status.event.player,target);
            if(target.hasSkill('tuntian')) return att/10;
            return 1-att;
        }).set('aicheck',check);
        "step 1"
        if(result.bool){
            player.logSkill('starzhihui1',result.targets);
            player.gainMultiple(result.targets);
            trigger.cancel();
        }
        else{
            event.finish();
        }
        "step 2"
        game.delay();
    },
                ai:{
                    threaten:2,
                    expose:0.3,
                },
            },
            "starzhihui2":{
                enable:"phaseUse",
                filterCard:true,
                check:function (card){
        return 8-get.value(card);
    },
                position:"he",
                content:function (){
        player.loseHp();
    },
                ai:{
                    order:8,
                    result:{
                        player:function (player){
                if(player.hp<=1) return player.countCards('h')==0?1:0;
                if(player.countCards('h',{name:'sha',color:'red'})) return 1;
                return player.countCards('h')<=player.hp?1:0;
            },
                    },
                    effect:function (card,player,target){
            if(get.tag(card,'damage')){
                if(player.hasSkillTag('jueqing',false,target)) return [1,1];
                return 1.2;
            }
            if(get.tag(card,'loseHp')){
                if(player.hp<=1) return;
                return [0,0];
            }
        },
                },
            },
            starjuexing:{
                audio:"ext:王朝更替_权:2",
                enable:"phaseUse",
                position:"he",
                filterCard:true,
                selectCard:3,
                prompt:"弃置三张牌回复一点体力",
                check:function (card){
        return 6-get.value(card)
    },
                content:function (){
        player.recover();
    },
                ai:{
                    order:1,
                    result:{
                        player:1,
                    },
                    threaten:1.5,
                },
            },
            starjince:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"phaseEnd",
                },
                filter:function (event,player){
        return player.countCards('h')==0;
    },
                frequent:true,
                content:function (){
        player.draw(4);
    },
            },
            starduoshi:{
                trigger:{
                    player:"loseEnd",
                },
                direct:true,
                audio:"ext:王朝更替_权:2",
                filter:function (event,player){
        if(player.countCards('h')) return false;
        for(var i=0;i<event.cards.length;i++){
            if(event.cards[i].original=='h') return true;
        }
        return false;
    },
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('starduoshi'),function(card,player,target){
            return player!=target&&target.countCards('he')>0;
        }).set('ai',function(target){
            return -get.attitude(_status.event.player,target);
        });
        "step 1"
        if(result.bool){
            player.logSkill('starduoshi',result.targets);
            event.target=result.targets[0];
            target.chooseDrawRecover(2,true);
        }
        else{
            event.finish();
        }
    },
                ai:{
                    expose:0.2,
                },
            },
            starjunqian:{
                audio:"ext:王朝更替_权:1",
                group:"starjunqian2",
                trigger:{
                    player:"gainEnd",
                },
                direct:true,
                filter:function (event,player){
        return event.cards&&event.cards.length>1;
    },
                forced:true,
                content:function (){
        player.draw();
    },
            },
            "starjunqian2":{
                audio:"ext:王朝更替_权:1",
                trigger:{
                    player:"loseEnd",
                },
                direct:true,
                filter:function (event,player){
        return event.cards&&event.cards.length>1;
    },
                forced:true,
                content:function (){
        player.chooseToDiscard(true);
    },
            },
            starlangxin:{
                mod:{
                    maxHandcard:function (player,num){
            return num==0;
        },
                },
                trigger:{
                    global:"gameStart",
                    player:"enterGame",
                },
                filter:function (event,player){
        return player.identity!="zhu";
    },
                forced:true,
                content:function (){
        player.addTempSkill("starwang1",{player:'gainEnd'});
        player.setIdentity('nei');
        player.identity="nei";
        player.node.identity.dataset.color='starlangxin';
        player.identityShown=true;
    },
            },
            starguxing:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"phaseDrawBegin",
                },
                frequent:true,
                content:function (){
        trigger.num+=player.maxHp-player.countCards('h');
    },
                ai:{
                    threaten:1.3,
                },
            },
            starzhonghu:{
                trigger:{
                    player:"phaseDiscardEnd",
                },
                direct:true,
                filter:function (event,player){
        if(event.cards&&event.cards.length>1){
            var suits=[];
            for(var i=0;i<event.cards.length;i++){
                var suit=get.suit(event.cards[i]);
                if(suits.contains(suit)){
                    return false;
                }
                else{
                    suits.push(suit);
                }
            }
            return true;
        }
        return false;
    },
                content:function (){
        player.changeHujia();
    },
            },
            "starwang1":{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"gainEnd",
                },
                forced:true,
                content:function (){
        player.chooseToDiscard(20,true);
    },
            },
            starshijun:{
                audio:"ext:王朝更替_权:2",
                group:"starshijun2",
                trigger:{
                    player:"dying",
                },
                priority:10,
                forced:true,
                filter:function (event,player){
        return !player.storage.starshijun;
    },
                content:function (){
        player.recover();
        player.turnOver(false);
        player.link(false);
    },
                subSkill:{
                    mark:{
                        mark:"character",
                        intro:{
                            name:"侍君",
                            content:"你成为了'君'",
                        },
                        sub:true,
                    },
                },
            },
            starshibai:{
                audio:"ext:王朝更替_权:1",
                mod:{
                    maxHandcard:function (player,num){
            return num+=2;
        },
                },
                trigger:{
                    player:"dieBefore",
                },
                forced:true,
                content:function (){
        player.addSkill('starshibai2')
        player.chooseToDiscard(3,true);
    },
            },
            starshisheng:{
                audio:"ext:王朝更替_权:2",
                group:["starshisheng2","starshisheng3"],
                trigger:{
                    global:"phaseDrawBegin",
                },
                filter:function (event,player){
        return event.player.hasSkill('starshijun_mark');
    },
                content:function (){
        trigger.num++;
    },
            },
            "starshisheng3":{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    global:"dieBefore",
                },
                filter:function (event,player){
        return event.player.hasSkill('starshijun_mark');
    },
                content:function (){
        trigger.cancel();
        trigger.player.recover(2);
        player.die();
    },
            },
            "starshisheng2":{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    global:"useCard",
                },
                filter:function (event,player){
        return event.player.hasSkill('starshijun_mark')&&event.player.hp==1;
    },
                content:function (){
        player.draw();
    },
            },
            staryiliang:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    target:"useCardToBefore",
                },
                forced:true,
                priority:15,
                check:function (event,player){
        return get.effect(event.target,event.card,event.player,player)<0;
    },
                filter:function (event,player){
        return player.countCards('h')>=player.hp&&(event.card.name=='sha'||event.card.name=='juedou'||event.card.name=='huogong');
    },
                content:function (){
        trigger.cancel();
    },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                if(target.countCards('h')==0&&(card.name=='sha'||card.name=='juedou'||card.name=='huogong')) return 'zeroplayertarget';
            },
                    },
                },
            },
            starxinji:{
                enable:"phaseUse",
                usable:1,
                audio:"ext:王朝更替_权:2",
                filterTarget:function (card,player,target){
        return player!=target;
    },
                content:function (){
        if(target.countCards('e')>0) target.chooseToDiscard(target.countCards('e'),'e',1,true);
        if(target.countCards('e')==0) target.addTempSkill('starxinji2',{player:'phaseEnd'});
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
            "starxinji2":{
                mod:{
                    cardEnabled:function (card){if(card.name=='sha') return false},
                },
                intro:{
                    name:"衅",
                    content:"你不能打出【杀】直到回合结束。",
                },
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                mark:true,
                content:function (){
        
    },
            },
            starduanyi:{
                audio:"ext:王朝更替_权:2",
                enable:"phaseUse",
                derivation:["xinjuece","wansha","shifei","xinenyuan"],
                position:"he",
                filterCard:true,
                selectCard:2,
                prompt:"弃置两张牌并摸一张牌,然后获得以下技能直到下个回合开始",
                check:function (card){return 4-get.useful(card)},
                content:function (){
        'step 0'
        player.draw();
        var list=[];
        if(!player.hasSkill('xinenyuan')){
            list.push('xinenyuan');
        }
        if(!player.hasSkill('shifei')){
            list.push('shifei');
        }
        if(!player.hasSkill('wansha')){
            list.push('wansha');
        }
        if(!player.hasSkill('xinjuece')){
            list.push('xinjuece');
        }
        if(list.length){
            player.chooseControl(list).set('prompt','选择获得一项技能');
        }
        'step 1'
        player.addTempSkill(result.control,{player:'phaseBegin'});
        player.popup(result.control);
        game.log(player,'获得技能','【'+get.translation(result.control)+'】');
    },
                ai:{
                    order:1,
                    result:{
                        player:1,
                    },
                },
            },
            starmiquan:{
                audio:"ext:王朝更替_权:2",
                mod:{
                    maxHandcard:function (player,num){
            return num+game.countPlayer(function(current){
                return current.sex=='female';
            });
        },
                },
                intro:{
                    name:"权",
                    content:"手牌上限增加",
                },
                trigger:{
                    player:"phaseEnd",
                },
                mark:true,
                forced:true,
                content:function (){
        
    },
            },
            starqicai:{
                group:"jizhi",
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
                mod:{
                    maxHandcard:function (player,num){
            if(player.getEquip(3)||player.getEquip(4)) return;
            return num+1;
        },
                    targetInRange:function (card,player,target,now){
            if(player.getEquip(5)) return;
            var type=get.type(card);
            if(type=='trick'||type=='delay') return true;
        },
                },
                trigger:{
                    player:"chooseToRespondBegin",
                },
                audio:"ext:王朝更替_权:true",
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
            starhunliang:{
                enable:"phaseUse",
                filterTarget:function (card,player,target){
        return !target.hasSkill('xinguanxing')&&target!=player;
    },
                filter:function (event,player){
        return player.countCards('h','sha');
    },
                discard:false,
                prepare:"give",
                filterCard:{
                    name:"sha",
                },
                content:function (){
        target.gain(cards,player);
        target.storage.xinguanxing=cards[0];
        target.storage.xinguanxing=player;
        target.addTempSkill('xinguanxing',{player:'phaseAfter'});
    },
                check:function (card){
        return 6-get.value(card);
    },
                ai:{
                    order:2,
                    result:{
                        target:function (player,target){
                if(!target.hasSha()) return 1.2;
                return 1;
            },
                    },
                },
            },
            starcehuo:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"damageBefore",
                },
                group:"huoji",
                filter:function (event){
        return event.nature=='fire';
    },
                forced:true,
                content:function (){
        trigger.cancel();
    },
                ai:{
                    nofire:true,
                    effect:{
                        target:function (card,player,target,current){
                if(get.tag(card,'fireDamage')) return 0;
            },
                    },
                },
            },
            starhunying:{
                trigger:{
                    player:["gainEnd","loseEnd"],
                },
                direct:true,
                filter:function (event,player){
        return event.cards&&event.cards.length>1;
    },
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt('starhunying'),function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return get.attitude(player,target);
        });
        'step 1'
        if(result.bool){
            player.logSkill('starhunying',result.targets);
            result.targets[0].addTempSkill('qicai',{player:'phaseAfter'});
        }
    },
            },
            stardingfan:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                filter:function (event,player){
        return (event.source&&event.source.countGainableCards(player,'hej')&&event.num>0&&event.source!=player);
    },
                content:function (){
        player.gainPlayerCard([1,trigger.num],get.prompt('stardingfan',trigger.source),trigger.source,get.buttonValue,'hej').set('logSkill',['stardingfan',trigger.source]);
        player.gainPlayerCard([1,trigger.num],get.prompt('stardingfan',trigger.source),trigger.source,get.buttonValue,'hej').set('logSkill',['stardingfan',trigger.source]);
        player.gainPlayerCard([1,trigger.num],get.prompt('stardingfan',trigger.source),trigger.source,get.buttonValue,'hej').set('logSkill',['stardingfan',trigger.source]);
        trigger.source.addTempSkill('jueqing',{player:'phaseAfter'});
    },
                ai:{
                    "maixie_defend":true,
                    effect:{
                        target:function (card,player,target){
                if(player.countCards('he')>1&&get.tag(card,'damage')){
                    if(player.hasSkillTag('jueqing',false,target)) return [1,-1.5];
                    if(get.attitude(target,player)<0) return [1,1];
                }
            },
                    },
                },
            },
            starguixin:{
                audio:"ext:王朝更替_权:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return target.countCards('he')>0&&target!=player;
    },
                content:function (){
        'step 0'
        if(target.countCards('e')){
            target.chooseBool('是否将装备区内的所有牌交给'+get.translation(player)+'？').set('ai',function(){
                if(_status.event.player.countCards('e')>=3) return false;
                return true;
            });
        }
        else{
            target.chooseToDiscard(true,'he');
            event.finish();
        }
        'step 1'
        if(result.bool){
            var es=target.getCards('e');
            player.gain(es,target);
            target.$give(es,player);
            player.addSkill('reguicai');
            player.removeSkill('starguixin');
        }
        else{
            target.chooseToDiscard(true,'he');
        }
    },
                ai:{
                    order:6,
                    result:{
                        target:function (player,target){
                var ne=target.countCards('e');
                if(!ne) return -2;
                if(ne>=2) return -ne;
                return 0;
            },
                    },
                },
            },
            stardingshang:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('stardingshang')).set('ai',function(target){
            return get.attitude(_status.event.player,target);
        });
        "step 1"
        if(result.bool){
            event.target=result.targets[0];
            player.logSkill('stardingshang',result.targets);
        }
        else{
            event.finish();
        }
        "step 2"
        var cards=get.cards();
        var card=cards[0];
        switch(get.type(card,'trick')){
            case 'basic':event.effect='';break;
            case 'trick':event.effect='';break;
            case 'equip':event.effect='recover';break;
        }
        if(get.type(card)=='equip'){
            event.target.equip(card);
            event.target.$draw(card);
            game.delay();
        }
        else{
            event.target.gain(cards,'gain2','log');
        }
        "step 3"
        switch(event.effect){
            case 'recover':event.target.recover();break;
        }
        "step 4"
        player.removeSkill('stardingshang');
        target.addSkill('shangshi');
    },
                ai:{
                    expose:0.2,
                    threaten:1.2,
                },
            },
            starqingzhen:{
                audio:"ext:王朝更替_权:2",
                group:"starqingzhen2",
                enable:["chooseToRespond"],
                filterCard:function (card){
        return get.color(card)=='black';
    },
                viewAs:{
                    name:"shan",
                    suit:"club",
                    number:11,
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
            "starqingzhen2":{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"respond",
                },
                filter:function (event,player){
        if(event.skill!='qingguo'&&event.skill!='starqingzhen') return false;
        return event.source&&event.source.countCards('h')>=0;
    },
                logTarget:"source",
                content:function (){
        player.draw();
        player.addTempSkill('jueqing',{player:'phaseEnd'});
    },
            },
            starhongzi:{
                audio:"ext:王朝更替_权:2",
                group:"starhongzi2",
                derivation:["xinzhiheng","jingce","reyingzi","chouce"],
                trigger:{
                    player:"phaseDrawBegin",
                },
                forced:true,
                content:function (){
        trigger.num++;
    },
                ai:{
                    threaten:1.3,
                },
            },
            starxionglue:{
                audio:"ext:王朝更替_权:1",
                group:"starxionglue2",
                direct:true,
                trigger:{
                    player:"phaseDiscardEnd",
                },
                filter:function (event,player){
        return player.countCards('h')>player.hp;
    },
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('starxionglue'),function(card,player,target){
            return player!=target&&target.countCards('hej')>0;
        }).set('ai',function(target){
            return -get.attitude(_status.event.player,target);
        });
        "step 1"
        if(result.bool){
            player.logSkill('starxionglue',result.targets);
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
            starjianji:{
                audio:"ext:王朝更替_权:2",
                skillAnimation:"legend",
                animationColor:"fire",
                filterTarget:function (card,player,target){
        return player!=target;
    },
                enable:"phaseUse",
                usable:1,
                position:"h",
                filterCard:true,
                selectCard:[1,Infinity],
                prompt:"弃置任意张手牌并令一名角色弃置等量的牌，然后你获得'绝策'",
                content:function (){
        target.chooseToDiscard(true,cards.length);
        player.addTempSkill('xinjuece',{player:'phaseBegin'})
        player.awakenSkill('starjianji');
        player.storage.starjianji=true;
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
            "starhongzi2":{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"phaseDrawEnd",
                },
                forced:true,
                content:function (){
        "step 0"
        var list=[];
        if(!player.hasSkill('xinzhiheng')){
            list.push('xinzhiheng');
        }
        if(!player.hasSkill('jingce')){
            list.push('jingce');
        }
        if(!player.hasSkill('reyingzi')){
            list.push('reyingzi');
        }
        if(!player.hasSkill('chouce')){
            list.push('chouce');
        }
        if(list.length){
            player.chooseControl(list).set('prompt','选择获得一项技能');
        }
        "step 1"
        player.addTempSkill(result.control,{player:'phaseBegin'});
        player.popup(result.control);
        game.log(player,'获得技能','【'+get.translation(result.control)+'】');
    },
            },
            "starxionglue2":{
                audio:"ext:王朝更替_权:1",
                trigger:{
                    player:"phaseEnd",
                },
                filter:function (event,player){
        return player.countCards('h')==0;
    },
                forced:true,
                content:function (){
        player.addTempSkill('tiandu',{player:'phaseBegin'});
    },
            },
            starlongji:{
                audio:"ext:王朝更替_权:2",
                enable:"chooseToUse",
                filterCard:function (card){
        return get.type(card)=='trick';
    },
                viewAsFilter:function (player){
        return player.countCards('h',{type:'trick'})>0;
    },
                viewAs:{
                    name:"sha",
                    suit:"spade",
                    number:11,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"spade","number":11,"name":"wuxie","cardid":"3217019306","clone":{"name":"wuxie","suit":"spade","number":11,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":1426},"timeout":1387,"original":"h"}],
                },
                prompt:"将一张锦囊牌当杀使用",
                check:function (card){return 8-get.value(card)},
                threaten:1.2,
                ai:{
                    basic:{
                        useful:[6,4],
                        value:[6,4],
                    },
                    result:{
                        player:1,
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
                    expose:0.2,
                    order:function (){
                        if(_status.event.player.hasSkillTag('presha',true,null,true)) return 10;
                        return 3;
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
            starshenhun:{
                skillAnimation:true,
                unique:true,
                audio:"ext:王朝更替_权:2",
                derivation:["juejing","starjixing","xinshensu"],
                trigger:{
                    player:"phaseBegin",
                },
                priority:10,
                forced:true,
                filter:function (event,player){
        return !player.storage.starshenhun&&player.hp==1;
    },
                content:function (){
        "step 0"
        player.loseMaxHp();
        "step 1"
        player.addSkill('juejing');
        player.addSkill('starjixing');
        player.addSkill('xinshensu');
        player.storage.starshenhun=true;
        player.awakenSkill('starshenhun');
    },
            },
            starjixing:{
                audio:"ext:王朝更替_权:2",
                group:"starjixing2",
                trigger:{
                    player:"shaBefore",
                },
                forced:true,
                filter:function (event,player){
        if(event.skill!='starlongji') return false;
        return event.target.countCards('h')>=0;
    },
                logTarget:"target",
                content:function (){
        player.draw();
    },
                mod:{
                    targetInRange:function (card,player,target,now){
            if(get.color(card)=='red'||card.name=='sha') return true;
        },
                },
            },
            "starjixing2":{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"respond",
                },
                forced:true,
                filter:function (event,player){
        if(event.skill!='starlongji') return false;
        return event.source&&event.source.countCards('h')>=0;
    },
                logTarget:"source",
                content:function (){
        player.draw();
    },
            },
            "starlongduan2":{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"respond",
                },
                forced:true,
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt('starlongduan2'),function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return get.attitude(player,target);
        });
        'step 1'
        if(result.bool){
            player.logSkill('starlongduan2',result.targets);
            result.targets[0].draw();
            if(player.name=='huangfuzhaoyunsuistar')player.draw();
        }
    },
            },
            starlongduan:{
                audio:"ext:王朝更替_权:2",
                group:"starlongduan2",
                trigger:{
                    player:"shaBefore",
                },
                forced:true,
                filter:function (event,player){
        if(event.skill!='longdan_sha') return false;
        return event.target.countCards('h')>=0;
    },
                logTarget:"target",
                content:function (){
        player.draw();
    },
                mod:{
                    maxHandcard:function (player,num){
           return num+=1;
        },
                },
            },
            starhuzhu:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    global:"gameStart",
                    player:"enterGame",
                },
                forced:true,
                filter:function (){
        return game.players.length>1;
    },
                content:function (){
        "step 0"
        player.addSkill('longdan');
        'step 1'
        player.chooseTarget('选择【护主】的目标',lib.translate.starhuzhu_info,true,function(card,player,target){
            return target!=player&&!target.hasSkill('starhuzhu2');
        }).set('ai',function(target){
            var att=get.attitude(_status.event.player,target);
            if(att>0) return att+1;
            if(att==0) return Math.random();
            return att;
        });
        'step 2'
        if(result.bool){
            var target=result.targets[0];
            player.line(target,'green');
            game.log(target,'成为了','【护主】','的目标');
            target.storage.starhuzhu2=player;
            target.addSkill('starhuzhu2');
        }
    },
            },
            "starhuzhu3":{
                trigger:{
                    global:"dieAfter",
                },
                silent:true,
                filter:function (event,player){
        return event.player==player.storage.starhuzhu2;
    },
                content:function (){
        player.removeSkill('starhuzhu2');
    },
                forced:true,
                popup:false,
            },
            "starhuzhu2":{
                group:["starhuzhu3","startianle"],
                mark:"character",
                intro:{
                    content:"你可以令一名角色获得技能天乐",
                },
            },
            staryanjun:{
                trigger:{
                    player:"shaEnd",
                },
                direct:true,
                filter:function (event,player){
        return get.color(event.card)=='red';
    },
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt('staryanjun'),function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return get.attitude(player,target);
        });
        'step 1'
        if(result.bool){
            player.logSkill('staryanjun',result.targets);
            result.targets[0].changeHujia();
        }
    },
            },
            starduanhou:{
                derivation:["longdan","paoxiao"],
                enable:"phaseUse",
                usable:1,
                audio:"ext:王朝更替_权:2",
                filterTarget:function (card,player,target){
        return player!=target;
    },
                content:function (){
        player.turnOver(true);
        target.draw(3);
        if(target.identity=='zhu'){
        player.addTempSkill('longdan');
        player.addTempSkill('paoxiao');
        };
        player.storage.starduanhou=true;
        player.awakenSkill('starduanhou');
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
            starzhongyi:{
                trigger:{
                    global:"gameStart",
                    player:"enterGame",
                },
                filter:function (event,player){
        return player.identity=="nei";
    },
                forced:true,
                content:function (){
        player.setIdentity('zhong');
        player.identity="zhong";
        player.node.identity.dataset.color='starzhongyi';
        player.identityShown=false;
        player.removeSkill('starzhongyi');
        player.addSkill('starzhongyi2');
    },
            },
            "starzhongyi2":{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    global:"phaseBegin",
                },
                forced:true,
                filter:function (event,player){
        return event.player.identity=='zhu';
    },
                content:function (){
        trigger.player.addSkill('starzhongyi3');
    },
            },
            "starzhongyi3":{
                mark:true,
                intro:{
                    content:"你必须多丢牌喂养新的忠臣",
                },
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                content:function (){
        player.chooseToDiscard(2,true);
    },
            },
            starqingde:{
                audio:"ext:王朝更替_权:1",
                group:"starqingde2",
                trigger:{
                    player:"recoverEnd",
                },
                direct:true,
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt('starqingde'),function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return get.attitude(player,target);
        });
        'step 1'
        if(result.bool){
            player.logSkill('starqingde',result.targets);
            result.targets[0].recover();
        }
    },
            },
            "starqingde2":{
                audio:"ext:王朝更替_权:1",
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                filter:function (event,player){
        return (event.source&&event.source.countGainableCards(player,'he')&&event.num>0&&event.source!=player);
    },
                content:function (){
        player.gainPlayerCard([1,trigger.num],get.prompt('starqingde',trigger.source),trigger.source,get.buttonValue,'he').set('logSkill',['starqingde2',trigger.source]);
    },
                ai:{
                    "maixie_defend":true,
                    effect:{
                        target:function (card,player,target){
                if(player.countCards('he')>1&&get.tag(card,'damage')){
                    if(player.hasSkillTag('jueqing',false,target)) return [1,-1.5];
                    if(get.attitude(target,player)<0) return [1,1];
                }
            },
                    },
                },
            },
            starjiaowu:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                content:function (){
        "step 0"
        trigger.player.equip(event.equip||game.createCard(get.inpilefull('equip').randomGet()),true);
        "step 1"
        player.judge();
        "step 2"
        switch(get.color(result.card)){
            case'black':
                player.draw();
                break;
            case'red':
                player.recover();
                break;
        }
    },
            },
            starjueyan:{
                audio:"ext:王朝更替_权:2",
                enable:"phaseUse",
                usable:1,
                position:"e",
                filterCard:true,
                selectCard:1,
                prompt:"弃置一张装备牌并对一名角色造成一点伤害",
                filterTarget:function (card,player,target){
        return player.hp>=0;
    },
                content:function (){
        player.$give(cards.length,target);
        target.damage();
        target.gain(cards,player);
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
            starfufeng:{
                audio:"ext:王朝更替_权:1",
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
        "step 0"
        var num=0;
        for(var i=0;i<trigger.cards.length;i++){
            if(trigger.cards[i].original=='e') num+=1;
        }
        player.draw(num);
        "step 1"
        player.chooseTarget(get.prompt('starfufeng'),function(card,player,target){
            return player!=target&&target.countCards('hej')>0;
        }).set('ai',function(target){
            return -get.attitude(_status.event.player,target);
        });
        "step 2"
        if(result.bool){
            player.logSkill('starfufeng',result.targets);
            event.target=result.targets[0];
            player.discardPlayerCard(event.target,true,num);
        }
        else{
            event.finish();
        }
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
                mod:{
                    targetEnabled:function (card,player,target,now){
            if(card.name=='guohe'||card.name=='bingliang') return false;
        },
                },
            },
            starjuejin:{
                audio:"ext:王朝更替_权:2",
                enable:"phaseUse",
                derivation:"xinguanxing",
                usable:1,
                content:function (){
        player.equip(event.equip||game.createCard(get.inpilefull('equip').randomGet()),true);
        player.equip(event.equip||game.createCard(get.inpilefull('equip').randomGet()),true);
        player.equip(event.equip||game.createCard(get.inpilefull('equip').randomGet()),true);
        if(player.hp==1)player.addSkill('xinguanxing');
        player.storage.starjuejin=true;
        player.awakenSkill('starjuejin');
    },
                ai:{
                    order:1,
                    result:{
                        player:1,
                    },
                    threaten:1.5,
                },
            },
            startongque:{
                trigger:{
                    player:["gainEnd","loseEnd"],
                },
                forced:true,
                content:function (){
        if(player.countCards('h')<=player.hp)player.addTempSkill('xintianxiang',{player:'gainEnd'});
        if(player.countCards('h')>=player.hp)player.addTempSkill('reguose',{player:'loseEnd'});
    },
                mod:{
                    targetEnabled:function (card,player,target,now){
            if(card.name=='tiesuo') return false;
        },
                },
            },
            starluanming:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"loseEnd",
                },
                direct:true,
                filter:function (event,player){
        return event.cards&&event.cards.length>1;
    },
                forced:true,
                content:function (){
        player.link(true);
        player.draw();
    },
            },
            starnuxiao:{
                trigger:{
                    source:"damageBegin",
                },
                direct:true,
                audio:"ext:王朝更替_权:2",
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('starnuxiao'),function(card,player,target){
            return player!=target&&target.countCards('hej')>0;
        }).set('ai',function(target){
            return -get.attitude(_status.event.player,target);
        });
        "step 1"
        if(result.bool){
            player.logSkill('starnuxiao',result.targets);
            event.target=result.targets[0];
            player.discardPlayerCard(event.target,true);
        }
        else{
            event.finish();
        }
        "step 2"
        if(player.hasSkill('starqishu_mark')||player.storage.starqishu_mark>0){
            player.storage.starqishu_mark-=1;
            player.draw();
            };
    },
                ai:{
                    expose:0.2,
                },
            },
            stardahou:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"useCard",
                },
                alter:true,
                filter:function (event){
        return (get.type(event.card,'equip')=='equip'&&event.cards[0]&&event.cards[0]==event.card);
    },
                direct:true,
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('stardahou'),function(card,player,target){
            return lib.filter.targetEnabled({name:'sha'},player,target);
        }).set('ai',function(target){
            return get.effect(target,{name:'sha'},_status.event.player);
        });
        "step 1"
        if(result.bool){
            player.logSkill('stardahou');
            player.useCard({name:'sha'},result.targets,false);
        }
    },
                ai:{
                    threaten:function (player,target){
            return 1.6;
        },
                },
            },
            starsuji:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"loseEnd",
                },
                direct:true,
                filter:function (event,player){
        if(player.countCards('h')) return false;
        for(var i=0;i<event.cards.length;i++){
            if(event.cards[i].original=='h') return true;
        }
        return false;
    },
                content:function (){
        "step 0"
        var num=0;
        for(var i=0;i<trigger.cards.length;i++){
            if(trigger.cards[i].original=='h') num++;
        }
        'step 1'
        player.chooseTarget(num,get.prompt('starsuji'),function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return get.attitude(player,target);
        });
        'step 2'
        if(result.bool&&result.targets){
            player.line(result.targets,'green');
            event.targets=result.targets;
            event.targets.sort(lib.sort.seat);
            
            
            
            
        }
        else{
            event.finish();
        }
        "step 3"
        player.logSkill('starsuji',result.targets);
            event.targets.shift().damage('thunder');
    },
                ai:{
                    threaten:0.8,
                    effect:{
                        target:function (card){
                if(card.name=='guohe'||card.name=='liuxinghuoyu') return 0.5;
            },
                    },
                    noh:true,
                },
            },
            startianyin:{
                audio:"ext:王朝更替_权:2",
                enable:"phaseUse",
                usable:1,
                filterCard:true,
                selectCard:-1,
                check:function (card){
        return 8-get.value(card);
    },
                position:"h",
                content:function (){
        player.recover();
    },
                ai:{
                    order:8,
                    result:{
                        player:function (player){
                if(player.hp<=2) return player.countCards('h')==0?1:0;
                if(player.countCards('h',{name:'sha',color:'red'})) return 1;
                return player.countCards('h')<=player.hp?1:0;
            },
                    },
                    effect:function (card,player,target){
            if(get.tag(card,'damage')){
                if(player.hasSkillTag('jueqing',false,target)) return [1,1];
                return 1.2;
            }
            if(get.tag(card,'loseHp')){
                if(player.hp<=1) return;
                return [0,0];
            }
        },
                },
            },
            starbaoxin:{
                audio:"ext:王朝更替_权:2",
                derivation:["starxinji","starnuxiao","starsuji"],
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                content:function (){
        "step 0"
        var list=[];
        if(!player.hasSkill('starxinji')){
            list.push('starxinji');
        }
        if(!player.hasSkill('starnuxiao')){
            list.push('starnuxiao');
        }
        if(!player.hasSkill('starsuji')){
            list.push('starsuji');
        }
        if(list.length){
            player.chooseControl(list).set('prompt','选择获得一项技能');
        }
        "step 1"
        player.addSkill(result.control);
        player.popup(result.control);
        game.log(player,'获得技能','【'+get.translation(result.control)+'】');
    },
                ai:{
                    threaten:1.3,
                },
            },
            staryijian:{
                audio:"ext:王朝更替_权:2",
                enable:"phaseUse",
                derivation:"starshenyi",
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
            player.addTempSkill('tianyi2');
            player.addTempSkill('starshenyi',{player:'phaseBegin'});
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
            startianshi:{
                audio:"ext:王朝更替_权:2",
                enable:"phaseUse",
                derivation:"reyingzi",
                usable:1,
                content:function (){
        player.damage(3);
        player.addSkill('reyingzi');
        player.addTempSkill('startianshi2');
        player.addTempSkill('startianshi3');
        player.insertPhase();
        player.storage.startianshi=true;
        player.awakenSkill('startianshi');
    },
                ai:{
                    order:1,
                    result:{
                        player:1,
                    },
                    threaten:1.5,
                },
            },
            "startianshi2":{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"shaBegin",
                },
                forced:true,
                content:function (){
        trigger.directHit=true;
    },
            },
            "startianshi3":{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    source:"damageEnd",
                },
                check:function (event,player){
        if(event.player.isTurnedOver()) return get.attitude(player,event.player)>0;
        if(event.player.hp<3){
            return get.attitude(player,event.player)<0;
        }
        return get.attitude(player,event.player)>0;
    },
                filter:function (event){
        if(event._notrigger.contains(event.player)) return false;
        return event.card&&event.card.name=='sha'&&event.player.isAlive();
    },
                logTarget:"player",
                content:function (){
        trigger.player.turnOver();
    },
            },
            starshenyi:{
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
            starsanyue:{
                audio:"ext:王朝更替_权:2",
                enable:"phaseUse",
                usable:1,
                position:"h",
                filterCard:true,
                selectCard:1,
                filterTarget:function (card,player,target){
        return player.countCards('hej')>0;
    },
                content:function (player,target){
        "step 0"
        if(target.countCards('h')>0){
            player.discardPlayerCard(target,'h',true);
            target.draw();
        };
        if(target.countCards('e')>0){
            player.discardPlayerCard(target,'e',true);
            target.draw();
        };
        if(target.countCards('j')>0){
            player.discardPlayerCard(target,'j',true);
            target.draw();
        };
        "step 1"
        player.draw();
    },
            },
            starcanggong:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    global:"phaseEnd",
                },
                filter:function (event,player){
        return player.identity=='zhu'&&event.player.identity=='zhong';
    },
                forced:true,
                content:function (){
        trigger.player.setIdentity('nei');
        trigger.player.identity="nei";
        trigger.player.node.identity.dataset.color='starcanggong';
        trigger.player.identityShown=true;
    },
                mod:{
                    globalTo:function (from,to,distance){
            if(player.identity=='zhu') return distance+1;
        },
                },
            },
            startuli:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"shaEnd",
                },
                direct:true,
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt('startuli'),function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return get.attitude(player,target);
        });
        'step 1'
        if(result.bool){
            player.logSkill('startuli',result.targets);
            result.targets[0].damage();
        }
    },
            },
            starducang:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"damageEnd",
                },
                content:function (){
        player.chooseToDiscard(true);
        player.draw();
    },
            },
            starbeishui:{
                audio:"ext:王朝更替_权:1",
                trigger:{
                    player:"phaseDrawEnd",
                },
                content:function (){
        player.storage.starbeishui=true;
        player.awakenSkill('starbeishui');
        player.addTempSkill('starbeishui2');
        player.addTempSkill('starbeishui3');
        if(player.hp>2)player.loseHp(player.hp-2);
    },
            },
            "starbeishui2":{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"useCard",
                    source:"damageEnd",
                },
                forced:true,
                content:function (){
        player.draw();
    },
            },
            "starbeishui3":{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"recoverBegin",
                },
                forced:true,
                content:function (){
        trigger.cancel();
    },
            },
            starhanjun:{
                zhuSkill:true,
                derivation:["mashu","feiying"],
                audio:"ext:王朝更替_权:1",
                trigger:{
                    player:"phaseEnd",
                },
                filter:function (event,player){
        return player.hasZhuSkill('starhanjun');
    },
                forced:true,
                content:function (){
        
        if(game.roundNumber<=5)player.addTempSkill('mashu',{player:'phaseDiscardEnd'});
        if(game.roundNumber>=5)player.addTempSkill('feiying',{player:'phaseDiscardEnd'});
      
    },
            },
            "starzujian1kiva":{
                trigger:{
                    global:"gameStart",
                    player:"enterGame",
                },
                nobracket:true,
                forced:true,
                filter:function (event,player){
        return !player.getEquip('dinglanyemingzhu');
    },
                content:function (){
        if(trigger.name=='phase'){
            player.useCard(game.createCard('dinglanyemingzhu','diamond',13),player);
        }
    },
            },
            starsanquan:{
                trigger:{
                    player:"phaseDrawEnd",
                },
                direct:true,
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt('starsanquan'),function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return get.attitude(player,target);
        });
        'step 1'
        if(result.bool){
            player.logSkill('starsanquan',result.targets);
            result.targets[0].insertPhase();
            player.skip('phaseUse');
        }
    },
                mod:{
                    maxHandcard:function (player,num){
            if(player.hp==1) return num+=2;
        },
                },
            },
            startianle:{
                trigger:{
                    player:["phaseBefore","changeHp"],
                },
                forced:true,
                popup:false,
                unique:true,
                content:function (){
        player.removeAdditionalSkill('startianle');
        var list=[];
        if(player.hp==2){
            list.push('startianle2');
        }
        if(player.hp==1){
            list.push('startianle3');
        }
        if(list.length){
            player.addAdditionalSkill('startianle',list);
        }
    },
            },
            "startianle2":{
                audio:"ext:王朝更替_权:1",
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                content:function (){
        player.judge();
        switch(get.suit(result.card)){
                    case'heart':
                         player.recover();
                         break;
                }
    },
            },
            "startianle3":{
                audio:"ext:王朝更替_权:1",
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                content:function (){
        player.judge();
        switch(get.color(result.card)){
                    case'red':
                         trigger.cancel();
                         break;
                }
    },
            },
            starxuqing:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    global:["phaseUseSkipped","phaseUseCancelled"],
                },
                forced:true,
                filter:function (event,player){
        return event.player!=player;
    },
                content:function (){
        player.draw(2);
    },
            },
            starluanquan:{
                audio:"ext:王朝更替_权:2",
                enable:"phaseUse",
                filterCard:true,
                selectCard:1,
                position:"he",
                discard:false,
                prepare:"give",
                usable:1,
                filterTarget:function (card,player,target){
        return player!=target;
    },
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                content:function (){
        "step 0"
        target.gain(cards,player);
        player.chooseToCompare(target);
        "step 1"
        if(result.bool){
            player.useCard(game.createCard('lebu','heart',13),target);
        }
        else{
            player.draw(2);
        }
    },
            },
            starsanzui:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"phaseEnd",
                },
                filter:function (event,player){
        return player.countUsed('sha')==0;
    },
                content:function (){
        player.draw(2);
        player.phaseUse();
    },
            },
            staryinfu:{
                inherit:"bagua_skill",
                filter:function (event,player){
        if(!lib.skill.bagua_skill.filter(event,player)) return false;
        if(player.getEquip(2)) return false;
        return true;
    },
                mod:{
                    attackFrom:function (from,to,distance){
            if(!from.getEquip(1)) return distance-2
        },
                },
                trigger:{
                    player:"chooseToRespondBegin",
                },
                audio:"ext:王朝更替_权:2",
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
                            if(player.hasSkillTag('unequip',false,card)) return;
                            if(get.tag(card,'respondShan')) return 0.5;
                        },
                    },
                },
            },
            starmuli:{
                audio:"ext:王朝更替_权:2",
                enable:"phaseUse",
                usable:1,
                content:function (){
        player.useCard(game.createCard('lebu','spade',13),player);
        player.recover();
    },
            },
            starmoushe:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"useCard",
                },
                forced:true,
                filter:function (event,player){
        return player.countCards('j')>=1;
    },
                content:function (){
        player.draw();
    },
            },
            starqishu:{
                mod:{
                    globalFrom:function (from,to){
            if(from.hp>=to.hp) return -Infinity;
        },
                },
                init:function (player){
        player.storage.starqishu_mark=2;
        player.markSkill('starqishu_mark');
        player.syncStorage('starqishu_mark');
    },
                intro:{
                    content:"mark",
                },
                filter:function (event){
        return event.num>0; 
    },
                audio:"ext:王朝更替_权:2",
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                content:function (){
      player.storage.starqishu_mark+=trigger.num;
        player.markSkill('starqishu_mark');
        player.syncStorage('starqishu_mark');  
    },
                subSkill:{
                    mark:{
                        mark:true,
                        marktext:"龙",
                        intro:{
                            name:"骑术",
                            content:"你拥有#枚'龙'标记",
                        },
                        sub:true,
                    },
                },
            },
            startiema:{
                enable:"phaseUse",
                usable:4,
                audio:"ext:王朝更替_权:2",
                filter:function (card,player,target){
        return player.storage.starqishu_mark>1;
    },
                content:function (){
        "step 0"
        player.storage.starqishu_mark-=2
        "step 1"
        var list=[];
                            if(lib.filter.cardUsable({name:'sha'},player,event.getParent('chooseToUse'))){
                                if(game.hasPlayer(function(current){
                                    return player.canUse('sha',current);
                                })){
                                    list.push(['基本','','sha']);
                                    list.push(['基本','','sha','fire']);
                                    list.push(['基本','','sha','thunder']);
                                }
                            }
                            if(player.canUse('tao',player,true,true)){
                                list.push(['基本','','tao']);
                            }
                            if(player.canUse('jiu',player,true,true)){
                                list.push(['基本','','jiu']);
                            }
                            if(list.length){
                                player.chooseButton(['是否视为使用一张基本牌？',[list,'vcard']]).set('ai',function(button){
                                    var player=_status.event.player;
                                    var card={name:button.link[2],nature:button.link[3]};
                                    if(card.name=='tao'){
                                        if(player.hp==1||(player.hp==2&&!player.hasShan())||player.needsToDiscard()){
                                            return 5;
                                        }
                                        return 1;
                                    }
                                    if(card.name=='sha'){
                                        if(game.hasPlayer(function(current){
                                            return player.canUse(card,current)&&get.effect(current,card,player,player)>0
                                        })){
                                            if(card.nature=='fire') return 2.95;
                                            if(card.nature=='thunder') return 2.92;
                                            return 2.9;
                                        }
                                        return 0;
                                    }
                                    if(card.name=='jiu'){
                                        return 0.5;
                                    }
                                    return 0;
                                });
                                }
        "step 2"
        if(result&&result.bool&&result.links[0]){
                        var card={name:result.links[0][2],nature:result.links[0][3]};
                        if(card.name=='sha'){
                            event.fakecard=card;
                            player.chooseTarget(function(card,player,target){
                                return player.canUse(_status.event.fakecard,target,true,true);
                            },true,'选择出杀目标').set('ai',function(target){
                                var player=_status.event.player;
                                return get.effect(target,_status.event.fakecard,player,player);
                            }).set('fakecard',card);
                        }
                        else{
                            player.useCard(card,player);
                            event.finish();
                        }
                    }
                    else{
                        event.finish();
                    }
        "step 3"
        if(result.bool&&result.targets&&result.targets.length){
                        player.useCard(event.fakecard,result.targets);
                    }
                
    
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
            "starqiceliulong_skill":{
                inherit:"qice",
                filter:function (event,player){
        return !player.hasSkill('qice');
    },
                selectCard:1,
                prompt:"出牌阶段限一次，你可以弃置所有手牌，然后使用一张锦囊牌",
                enable:"phaseUse",
                usable:1,
                audio:"ext:王朝更替_权:2",
                chooseButton:{
                    dialog:function (){
            var list=['taoyuan','wugu','juedou','huogong','jiedao','tiesuo','guohe','shunshou','wuzhong','wanjian','nanman'];
            for(var i=0;i<list.length;i++){
                list[i]=['锦囊','',list[i]];
            }
            return ui.create.dialog(get.translation('qice'),[list,'vcard']);
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
            starzhenwei:{
                mod:{
                    targetEnabled:function (card){
            if((get.type(card)=='trick'||get.type(card)=='delay')&&
                get.color(card)=='black') return false;
        },
                    wuxieRespondable:function (){
            return false;
        },
                },
            },
            starluanshi:{
                audio:"ext:王朝更替_权:6",
                derivation:"luanwu",
                trigger:{
                    global:"useCard",
                },
                filter:function (event,player,card){
        return get.type(event.card,'trick')=='trick'&&get.color(event.card,'black')=='black'&&event.player!=player;
    },
                content:function (card){
        player.gain(trigger.cards);
        player.$gain2(trigger.cards);
        if(get.number(trigger.card,'number')==13)player.addSkill('luanwu');
    },
            },
            starshiming:{
                audio:"ext:王朝更替_权:2",
                mark:true,
                marktext:"蚀",
                intro:{
                    name:"蚀命",
                    content:"你拥有'蚀'标记",
                },
                trigger:{
                    player:"useCard",
                },
                forced:true,
                content:function (){
        player.chooseToDiscard('h',true);
    },
            },
            starjuemou:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"loseEnd",
                },
                usable:1,
                filter:function (event,player){
        return _status.currentPhase!=player;
    },
                frequent:true,
                content:function (){
        player.addTempSkill('qianxing');
    },
            },
            starfenji:{
                derivation:["xinfencheng","starshiming"],
                enable:"phaseUse",
                usable:1,
                position:"h",
                filterCard:true,
                selectCard:1,
                audio:"ext:王朝更替_权:2",
                filterTarget:function (card,player,target){
        return player!=target&&target.countCards('h')>0;
    },
                content:function (){
        player.discardPlayerCard(target,'he',true);
        if(target.countCards('h')<=1)player.addSkill('xinfencheng');
        if(target.countCards('ej')>0)target.addTempSkill('starshiming',{player:'phaseEnd'});
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
            starjinge:{
                enable:"phaseUse",
                usable:1,
                audio:"ext:王朝更替_权:2",
                filter:function (event,player){
        return player.storage.starqishu_mark>=1;
    },
                content:function (){
        player.storage.starqishu_mark-=1;
        player.syncStorage('starqishu_mark');
        player.updateMarks('starqishu_mark');
        player.addSkill('starjinge_sha');
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
                subSkill:{
                    sha:{
                        trigger:{
                            player:"shaBegin",
                        },
                        forced:true,
                        content:function (){
        trigger.directHit=true;
    },
                        sub:true,
                    },
                },
            },
            starmazhen:{
                audio:"ext:王朝更替_权:2",
                derivation:["yicong","zhuiji","xiongyi","starxiongsuan"],
                trigger:{
                    global:"gameStart",
                    player:"enterGame",
                },
                forced:true,
                content:function (){
        "step 0"
        player.judge();
        player.storage.starmazhen=result.number;
        "step 1"
        switch(get.suit(result.card)){
                case'heart':
                    player.addSkill('yicong');
                    break;
                case'diamond':
                    player.addSkill('zhuiji');
                    break;
                case'spade':
                    player.addSkill('starxiongsuan');
                    break;
                case'club':
                    player.addSkill('xiongyi');
                    break;
                
        }
    },
                mod:{
                    attackFrom:function (from,to,distance){
            return distance-2;
        },
                },
            },
            starqianjun:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"shaBegin",
                },
                content:function (){
        player.loseHp();
        player.draw();
        trigger.directHit=true;
    },
            },
            starxiongsuan:{
                limited:true,
                enable:"phaseUse",
                filterCard:true,
                filter:function (event,player){
        return player.countCards('h');
    },
                filterTarget:true,
                check:function (card){
        return 7-get.value(card);
    },
                content:function (){
        'step 0'
        player.awakenSkill('starxiongsuan');
        target.damage();
        'step 1'
        player.draw(3);
        var list=[];
        var skills=target.getOriginalSkills();
        for(var i=0;i<skills.length;i++){
            if(lib.skill[skills[i]].limited&&target.awakenedSkills.contains(skills[i])){
                list.push(skills[i]);
            }
        }
        if(list.length==1){
            target.storage.starxiongsuan_restore=list[0];
            target.addTempSkill('starxiongsuan_restore','phaseBegin');
            event.finish();
        }
        else if(list.length>1){
            player.chooseControl(list).set('prompt','选择一个限定技在回合结束后重置之');
        }
        else{
            event.finish();
        }
        'step 2'
        target.storage.starxiongsuan_restore=result.control;
        target.addTempSkill('starxiongsuan_restore','phaseBegin');
    },
                subSkill:{
                    restore:{
                        trigger:{
                            global:"phaseAfter",
                        },
                        silent:true,
                        content:function (){
                player.restoreSkill(player.storage.starxiongsuan_restore);
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                },
                ai:{
                    order:4,
                    damage:true,
                    result:{
                        target:function (player,target){
                if(get.damageEffect(target,player,player)>0) return 10;
                if(target.hp>1){
                    var skills=target.getOriginalSkills();
                    for(var i=0;i<skills.length;i++){
                        if(lib.skill[skills[i]].limited&&target.awakenedSkills.contains(skills[i])){
                            return 8;
                        }
                    }
                }
                if(target.hp>=4) return 5;
                if(target.hp==3){
                    if(player.countCards('h')<=2&&game.hasPlayer(function(current){
                        return current.hp<=1&&get.attitude(player,current)<0;
                    })){
                        return 3;
                    }
                }
                return 0;
            },
                    },
                },
                mark:true,
                intro:{
                    content:"limited",
                },
                skillAnimation:true,
                init:function (player){
        player.storage[i]=false;
    },
            },
            starqiushu:{
                zhuSkill:true,
                audio:"ext:王朝更替_权:2",
                trigger:{
                    global:"phaseBegin",
                },
                filter:function (event,player){
        return player.hasZhuSkill('starqiushu')&&event.player!=player;
    },
                content:function (){
        trigger.player.uninit;
        trigger.player.init(trigger.player.name,'ns_nanhua');
        trigger.player.useCard(game.createCard('taipingyaoshu','spade',13),player);
        trigger.player.removeSkill('nstaiping');
        trigger.player.removeSkill('nsshoudao');
        trigger.player.removeSkill('nshuanxian');
        trigger.player.addSkill('leiji');
        trigger.player.addSkill('guidao');
        player.addSkill('diyguhuo');
        player.storage.starqiushu=true;
        player.awakenSkill('starqiushu');
    },
            },
            stardingtian:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    global:"gameStart",
                    player:"enterGame",
                },
                forced:true,
                content:function (){
        "step 0"
        player.uninit;
        player.init(player.name,'ns_zuoci');
        player.removeSkill('nsdunxing');
        player.removeSkill('nsxinsheng');
        player.loseMaxHp(true);
        player.addSkill('qingnang');
        "step 1"
        var skills=[]; 
            for(var i in lib.character){ 
                for(var j=0;j<lib.character[i][3].length;j++){ 
                    var info=lib.skill[lib.character[i][3][j]];
                    if(info&&(info.gainable||!info.unique)&&!info.zhuSkill){
                        skills.add(lib.character[i][3][j]); 
                    }
                } 
            }
            var link=skills.randomGet();            
            player.addSkill(link);                                
           game.log(player,'获得技能','【'+get.translation(link)+'】');
           'step 2'
           var skill=[]; 
            for(var i in lib.character){ 
                for(var j=0;j<lib.character[i][3].length;j++){ 
                    var info=lib.skill[lib.character[i][3][j]];
                    if(info&&(info.gainable||!info.unique)&&!info.zhuSkill){
                        skill.add(lib.character[i][3][j]); 
                    }
                } 
            }
            var links=skill.randomGet();                  
        player.addSkill(links);                             
           game.log(player,'获得技能','【'+get.translation(links)+'】');
    },
            },
            "starshijun2":{
                trigger:{
                    global:"roundStart",
                },
                forced:true,
                filter:function (){
        return game.players.length>1&&game.roundNumber==2;
    },
                content:function (){
        'step 0'
        player.chooseTarget('选择【侍君】的目标',lib.translate.xianfu_info,true,function(card,player,target){
            return target!=player&&!target.hasSkill('starshijun_mark');
        }).set('ai',function(target){
            var att=get.attitude(_status.event.player,target);
            if(att>0) return att+1;
            if(att==0) return Math.random();
            return att;
        });
        'step 1'
        if(result.bool){
            var target=result.targets[0];
            player.line(target,'green');
            game.log(target,'成为了','【侍君】','的目标');
            target.storage.starshijun_mark=player;
            target.addSkill('starshijun_mark');
        }
    },
            },
            starzhongduan:{
                audio:"ext:王朝更替_权:1",
                trigger:{
                    player:"dieBefore",
                },
                direct:true,
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt('starzhongduan'),function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return get.attitude(player,target);
        });
        'step 1'
        if(result.bool){
            player.logSkill('starzhongduan',result.targets);
            result.targets[0].addSkill('starchouji');
        }
    },
            },
            starchouji:{
                audio:"ext:王朝更替_权:2",
                derivation:["qingxian","huituo","yiji","fangzhu"],
                trigger:{
                    global:"gameStart",
                    player:["enterGame","phaseEnd"],
                },
                frequent:true,
                content:function (){
        'step 0'
        var list=[];
        if(!player.hasSkill('qingxian')){
            list.push('qingxian');
        }
        if(!player.hasSkill('huituo')){
            list.push('huituo');
        }
        if(!player.hasSkill('yiji')){
            list.push('yiji');
        }
        if(!player.hasSkill('fangzhu')){
            list.push('fangzhu');
        }
        if(list.length){
            player.chooseControl(list).set('prompt','选择获得一项技能');
        }
        'step 1'
        player.addTempSkill(result.control,{player:'phaseBegin'});
        player.popup(result.control);
        game.log(player,'获得技能','【'+get.translation(result.control)+'】');
    },
            },
            starkuangdao:{
                enable:"phaseUse",
                usable:1,
                audio:"ext:王朝更替_权:2",
                filterTarget:function (card,player,target){
        return player!=target&&target.countCards('he')>=3;
    },
                content:function (){
        player.gainPlayerCard('he',target,true);
        player.gainPlayerCard('he',target,true);
        player.gainPlayerCard('he',target,true);
        target.addSkill('starkuangdao2');
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
            "starkuangdao2":{
                marktext:"匡",
                mark:true,
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"phaseDrawBegin",
                },
                forced:true,
                content:function (){
        trigger.num+=3;
    },
                intro:{
                    name:"匡道",
                    content:"你的摸牌阶段摸牌数+3",
                },
            },
            starxinkuangdao:{
                enable:"phaseUse",
                audio:"ext:王朝更替_权:2",
                filterTarget:function (card,player,target){
        return player!=target&&target.countCards('h')>=1;
    },
                content:function (){
        player.addSkill('fengyin');
        player.addSkill('starxinkuangdao2');
        player.gainPlayerCard('h',target,true);
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
            "starxinkuangdao2":{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"damageEnd",
                },
                forced:true,
                filter:function (event,player){
        return player.hasSkill('fengyin');
    },
                content:function (){
        player.removeSkill('fengyin');
        player.draw();
    },
            },
            starjingzun:{
                audio:"ext:王朝更替_权:1",
                trigger:{
                    player:"useCard",
                },
                forced:true,
                filter:function (event,player){
        return player.hasSkill('fengyin')&&get.number(event.card,'number')==13;
    },
                content:function (){
        player.removeSkill('fengyin');
        trigger.player.draw();
    },
            },
            starqianjiao:{
                enable:"phaseUse",
                usable:1,
                audio:"ext:王朝更替_权:2",
                filterTarget:function (card,player,target){
        return player!=target&&player.group!=target.group;
    },
                content:function (){
        player.useCard({name:'yuanjiao'},target);
        if(player.hp<=1)player.addTempSkill('qianxing',{player:'phaseBegin'});
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
            starqiandui:{
                audio:"ext:王朝更替_权:2",
                enable:"phaseUse",
                filterTarget:function (card,player,target){
        return player!=target;
    },
                filter:function (event,player){
        return player.countCards('h')>0&&player.hasSkill('qianxing');
    },
                filterCard:true,
                selectCard:[1,Infinity],
                discard:false,
                lose:true,
                content:function (){
        player.$give(cards.length,target);
        target.gain(cards,player);
    },
                ai:{
                    order:1,
                    result:{
                        target:function (player,target){
                if(target.hasSkillTag('nogain')) return 0;
                if(player.countCards('h')==1&&player.countCards('h','du')) return -1;
                if(player.hp<=2&&player.countCards('h','shan')) return 0;
                if(target.countCards('h')+player.countCards('h')>target.hp+2) return 0;
                if(get.attitude(player,target)>3) return 1;
                return 0;
            },
                    },
                },
            },
            starshenghun:{
                mod:{
                    targetInRange:function (card){
            if(card.name=='sha'&&_status.event.skill=='starshenghun') return true;
        },
                },
                audio:"ext:王朝更替_权:2",
                enable:["chooseToRespond","chooseToUse"],
                filterCard:function (card,player){
        if(get.zhu(player,'shouyue')) return true;
        return get.number(card)>=6;
    },
                position:"he",
                viewAs:{
                    name:"sha",
                    suit:"diamond",
                    number:13,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"diamond","number":13,"name":"zixin","cardid":"9450012372","clone":{"name":"zixin","suit":"diamond","number":13,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":3488},"timeout":3443,"original":"h"}],
                },
                viewAsFilter:function (player){
        if(get.zhu(player,'shouyue')){
            if(!player.countCards('he')) return false;
        }
        else{
            if(!player.countCards('he',{number:6})||!player.countCards('he',{number:7})||!player.countCards('he',{number:8})||!player.countCards('he',{number:9})||!player.countCards('he',{number:10})||!player.countCards('he',{number:11})||!player.countCards('he',{number:12})||!player.countCards('he',{number:13})) return false;
        }
    },
                prompt:"将一张点数不小于6的牌当杀使用或打出，此杀无距离限制",
                check:function (card){return 4-get.value(card)},
                ai:{
                    skillTagFilter:function (player){
            if(get.zhu(player,'shouyue')){
                if(!player.countCards('he')) return false;
            }
            else{
                if(!player.countCards('he',{number:6})||!player.countCards('he',{number:7})||!player.countCards('he',{number:8})||!player.countCards('he',{number:9})||!player.countCards('he',{number:10})||!player.countCards('he',{number:11})||!player.countCards('he',{number:12})||!player.countCards('he',{number:13})) return false;
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
            staryanji:{
                trigger:{
                    player:"shaEnd",
                },
                direct:true,
                audio:"ext:王朝更替_权:2",
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('staryanji'),function(card,player,target){
            return player!=target&&target.countCards('he')>0;
        }).set('ai',function(target){
            return -get.attitude(_status.event.player,target);
        });
        "step 1"
        if(result.bool){
            player.logSkill('staryanji',result.targets);
            event.target=result.targets[0];
            player.useCard(event.target,{name:'shuiyanqijunx'});
        }
        else{
            event.finish();
        }
    },
                ai:{
                    expose:0.2,
                },
            },
            starhanmen:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"phaseDrawBegin",
                },
                group:"starhanmen_men",
                direct:true,
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt('starhanmen'),function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return get.attitude(player,target);
        });
        'step 1'
        if(result.bool){
            player.logSkill('starhanmen',result.targets);
            result.targets[0].addTempSkill('starhanmen_mark',{player:'phaseEnd'});
        }
    },
                subSkill:{
                    mark:{
                        mark:true,
                        marktext:"门",
                        intro:{
                            name:"捍门",
                            content:"你家贴了门神'秦琼'和'尉迟恭'",
                        },
                        sub:true,
                    },
                    men:{
                        trigger:{
                            player:"gainEnd",
                        },
                        direct:true,
                        content:function (){
        'step 0'
        player.chooseTarget(get.prompt('starhanmen_men'),function(card,player,target){
            return target!=player&&target.hasSkill('starhanmen_mark');
        }).set('ai',function(target){
            return get.attitude(player,target);
        });
        'step 1'
        if(result.bool){
            player.showHandcards();
            player.logSkill('starhanmen_men',result.targets);
            result.targets[0].draw();
        }
    },
                        sub:true,
                    },
                },
            },
            starbianjian:{
                audio:"ext:王朝更替_权:1",
                trigger:{
                    source:"damageEnd",
                },
                filter:function (event,player){
        return event.card&&event.card.name=='sha';
    },
                priority:5,
                content:function (){
        player.gainPlayerCard('hej',trigger.player,true);
        trigger.player.draw();
    },
                mod:{
                    attackFrom:function (from,to,distance){
            if(!from.getEquip(1)) return distance-2
        },
                },
            },
            starxuanzhen:{
                audio:"ext:王朝更替_权:1",
                trigger:{
                    player:"dieBefore",
                },
                forced:true,
                content:function (){
        trigger.cancel();
        player.insertPhase();
        player.addSkill('starxuanzhen2');
        var chat=['父亲，旋阵可令司马师惧矣。','弃魏从吴，保命之计。'].randomGet()
                  player.say(chat)
    },
            },
            "starxuanzhen2":{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                content:function (){
        if(player.isAlive()&&player.getStat('damage')){
            player.recover();
            player.removeSkill('starxuanzhen2');
        }
        else{
            player.removeSkill('starxuanzhen');
            player.die();
        }
    },
            },
            starzhengyi:{
                group:["starzhengyi_sha","starzhengyi_shan","starzhengyi_draw1","starzhengyi_draw2"],
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"damageEnd",
                },
                content:function (){
        player.equip(event.equip||game.createCard(get.inpilefull('equip').randomGet()),true);
        var chat=['七进七出，有何退路！','吾乃晋将文次骞，何人可拦我！'].randomGet()
                  player.say(chat)
    },
                subSkill:{
                    sha:{
                        audio:3,
                        enable:["chooseToRespond","chooseToUse"],
                        filter:function (event,player){
        return player.countCards('e')>0;
    },
                        filterCard:true,
                        position:"e",
                        viewAs:{
                            name:"sha",
                            suit:"spade",
                            number:2,
                            cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{},"wuxing":{}},"inits":[null],"storage":{},"vanishtag":[],"_uncheck":[],"suit":"spade","number":2,"name":"cixiong","wunature":"soil","cardid":"5427052319","clone":{"name":"cixiong","suit":"spade","number":2,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":1157},"original":"e","timeout":1086}],
                        },
                        viewAsFilter:function (player){
        if(get.zhu(player,'shouyue')){
            if(!player.countCards('e')) return false;
        }
        else{
            if(!player.countCards('e')) return false;
        }
    },
                        prompt:"将一张装备牌当杀使用或打出",
                        check:function (card){return 4-get.value(card)
             },
                        subSkill:true,
                        sub:true,
                        ai:{
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
                    shan:{
                        audio:2,
                        enable:["chooseToRespond"],
                        filter:function (event,player){
        return player.countCards('e')>0;
    },
                        filterCard:true,
                        viewAs:{
                            name:"shan",
                            suit:"heart",
                            number:8,
                        },
                        viewAsFilter:function (player){
        if(!player.countCards('e')) return false;
    },
                        prompt:"将一张装备牌当闪打出",
                        check:function (){return 1},
                        subSkill:true,
                        sub:true,
                        ai:{
                            basic:{
                                useful:[7,2],
                                value:[7,2],
                            },
                        },
                    },
                    "draw1":{
                        trigger:{
                            player:"shaBefore",
                        },
                        forced:true,
                        filter:function (event,player){
        if(event.skill!='starzhengyi_sha') return false;
        return event.target.countCards('h')>=0;
    },
                        logTarget:"target",
                        content:function (){
        player.draw();
    },
                        subSkill:true,
                        sub:true,
                    },
                    "draw2":{
                        trigger:{
                            player:"respond",
                        },
                        forced:true,
                        filter:function (event,player){
        if(event.skill!='starzhengyi_sha'||event.skill!='starzhengyi_shan') return false;
        return player.countCards('h')>=0;
    },
                        logTarget:"source",
                        content:function (){
        player.draw();
    },
                        subSkill:true,
                        sub:true,
                    },
                },
            },
            starmojie:{
                mod:{
                    targetInRange:function (card,player,target,now){
            if(card.name=='sha') return true;
        },
                },
            },
            starmaima:{
                enable:"phaseUse",
                usable:1,
                audio:"ext:王朝更替_权:2",
                position:"he",
                filterCard:true,
                selectCard:[1,2],
                discard:false,
                lose:true,
                prepare:"give",
                filterTarget:function (card,player,target){
        return player!=target;
    },
                content:function (){
        "step 0"
        player.$give(cards.length,target);
        target.gain(cards,player);
        player.gain(target.getEquip(3),target);
        player.gain(target.getEquip(4),target);
        "step 1"
        for(var i=0;i<game.players.length;i++){
        if(game.players[i].name=='qinyutgdsstar'){
                player.chooseBool('是否令秦琼回复一点体力或摸一张牌？').set('ai',function(){                    
                     return get.attitude(player,game.players[i]);     
                    });    
             }
            
            }
            "step 2"
            if(result.bool){
            for(var i=0;i<game.players.length;i++){
            if(game.players[i].name=='qinyutgdsstar'){
                game.players[i].chooseDrawRecover();    
            }
            }
            }            
       else{
           event.finish();
       }
        var chat=['救兄弟大难，又得宝马，何乐而不为？','妙啊，妙'].randomGet()
                  player.say(chat)
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
            starjitang:{
                trigger:{
                    player:["gainEnd","loseEnd"],
                },
                derivation:"liduan",
                direct:true,
                filter:function (event,player){
        return event.cards&&event.cards.length>1;
    },
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('starjitang'),function(card,player,target){
            return player!=target&&target.countCards('he')>0;
        }).set('ai',function(target){
            return -get.attitude(_status.event.player,target);
        });
        "step 1"
        if(result.bool){
            player.logSkill('starjitang',result.targets);
            event.target=result.targets[0];
            player.discardPlayerCard(event.target,true);
        }
        else{
            event.finish();
        }
        "step 2"
        if(trigger.cards&&trigger.cards.length>2){
            player.addSkill('liduan');
        };
        var chat=['单雄信在此，何人妄敢近前？','誓要捉拿唐贼寇！'].randomGet()
                  player.say(chat)
    },
                ai:{
                    expose:0.2,
                },
            },
            starqizhan:{
                audio:"ext:王朝更替_权:4",
                derivation:["qixi","xinzhiheng","retuxi","xuanfeng"],
                trigger:{
                    player:"phaseBegin",
                },
                direct:true,
                content:function (){
        "step 0"
        player.chooseControl('进攻','退守','cancel2',function(){
            var player=_status.event.player;
            if(player.countCards('h')>3&&player.countCards('h','sha')>1){
                return '进攻';
            }
            if(player.countCards('h','sha')>2){
                return '进攻';
            }
            if(player.hp-player.countCards('h')>1){
                return '退守';
            }
            return 'cancel2';
        });
        "step 1"
        if(result.control=='进攻'){
            player.skip('phaseDraw');
            player.skip('phaseDiscard');
            player.addTempSkill('qixi','phaseEnd');
            player.addTempSkill('xinzhiheng','phaseEnd');
            player.logSkill('starqizhan');
        }
        else if(result.control=='退守'){
            player.skip('phaseUse');
            player.addTempSkill('retuxi','phaseEnd');
            player.addTempSkill('xuanfeng','phaseEnd');
            player.logSkill('starqizhan');
        }
    },
            },
            staryongjin:{
                mod:{
                    maxHandcard:function (player,num){
            return num-player.countCards('e');
        },
                },
                trigger:{
                    global:"gameStart",
                    player:"enterGame",
                },
                forced:true,
                content:function (){
        player.equip(event.equip||game.createCard(get.inpilefull('equip').randomGet()),true);
        player.equip(event.equip||game.createCard(get.inpilefull('equip').randomGet()),true);
        player.equip(event.equip||game.createCard(get.inpilefull('equip').randomGet()),true);
    },
            },
            staryangwei:{
                derivation:["dujin","shejian"],
                audio:"ext:王朝更替_权:2",
                trigger:{
                    global:"gameStart",
                    player:["phaseDrawBegin","phaseDiscardBegin","enterGame"],
                },
                forced:true,
                content:function (){
        player.removeAdditionalSkill('staryangwei');
        var list=[];
        if(player.hp>=0){
            list.push('dujin');
        }
        if(player.hp>=0){
            list.push('shejian');
        }
        if(list.length){
            player.addAdditionalSkill('staryangwei',list);
        }
    },
            },
            "starshibai2":{
                audio:"ext:王朝更替_权:2",
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
            player.chooseCardButton(get.prompt('starshibai2'),event.cards,[1,event.cards.length]).set('ai',function(button){
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
            player.logSkill('starshibai2',result.targets);
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
            starjiancong:{
                audio:"ext:王朝更替_权:2",
                enable:"phaseUse",
                usable:1,
                position:"he",
                filterCard:true,
                selectCard:1,
                prompt:"弃置一张牌并使用一张♠K的[闪电]，然后你受到一点伤害",
                check:function (card){
        return 6-get.value(card)
    },
                content:function (){
        player.useCard(game.createCard('shandian','spade',13),player);
        player.damage();
    },
                ai:{
                    order:1,
                    result:{
                        player:1,
                    },
                    threaten:1.5,
                },
            },
            starwangqiang:{
                audio:"ext:王朝更替_权:2",
                group:["starwangqiang_K","starwangqiang_damage"],
                mod:{
                    targetInRange:function (card,player,target,now){
            if(card.name=='sha'&&player.countCards('j')>0) return true;
        },
                },
                trigger:{
                    source:"damageBefore",
                },
                filter:function (event,player,card){
        return player.countCards('j')>0;
    },
                forced:true,
                content:function (){
        trigger.nature='thunder';
    },
                subSkill:{
                    K:{
                        trigger:{
                            player:"useCard",
                        },
                        forced:true,
                        direct:true,
                        audio:2,
                        filter:function (event,player){
        return get.number(event.card,13)==13;
    },
                        content:function (){
        player.draw();
    },
                        sub:true,
                    },
                    damage:{
                        audio:2,
                        trigger:{
                            player:"phaseEnd",
                        },
                        filter:function (event,player){
        return player.countCards('j')>0;
    },
                        forced:true,
                        content:function (){
        player.discardPlayerCard(player,'j',true);
    },
                        sub:true,
                    },
                },
            },
            starjinyi:{
                group:"starjinyi_fire",
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
                mod:{
                    maxHandcard:function (player,num){
            if(player.getEquip(5)) return;
            return num+1;
        },
                },
                trigger:{
                    player:"chooseToRespondBegin",
                },
                audio:"ext:王朝更替_权:2",
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
                subSkill:{
                    fire:{
                        audio:"ext:王朝更替_权:2",
                        trigger:{
                            player:"damageBefore",
                        },
                        filter:function (event){
        return event.nature=='fire';
    },
                        forced:true,
                        content:function (){
        trigger.cancel();
    },
                        sub:true,
                    },
                },
            },
            starzhanyu:{
                audio:"ext:王朝更替_权:2",
                init:function (player){
        player.storage.starzhanyu_mark=0;
    },
                intro:{
                    content:function (storage){
            return '当前有'+storage+'个“羽化”';
        },
                },
                derivation:["xinjieyin","xinbiyue","kanpo","xinjizhi"],
                trigger:{
                    player:"judgeEnd",
                },
                frequent:true,
                content:function (){
        'step 0'
        var list=[];
        if(!player.hasSkill('xinjieyin')){
            list.push('xinjieyin');
        }
        if(!player.hasSkill('xinbiyue')){
            list.push('xinbiyue');
        }
        if(!player.hasSkill('kanpo')){
            list.push('kanpo');
        }
        if(!player.hasSkill('xinjizhi')){
            list.push('xinjizhi');
        }
        if(list.length){
            player.chooseControl(list).set('prompt','选择获得一项羽技能');
        }
        'step 1'
        player.removeSkill('xinjieyin');
        player.removeSkill('xinbiyue');
        player.removeSkill('kanpo');
        player.removeSkill('xinjizhi');
        player.addSkill(result.control);
        player.popup(result.control);
        game.log(player,'获得技能','【'+get.translation(result.control)+'】');
        "step 2"
        player.markSkill('starzhanyu_mark');
        player.storage.starzhanyu_mark+=1;
        player.syncStorage('starzhanyu_mark');
        game.log(player,'离羽化登仙又进了一步');
    },
                subSkill:{
                    mark:{
                        mark:true,
                        marktext:"羽",
                        intro:{
                            name:"羽化",
                            content:"你拥有#枚'羽化'",
                        },
                        sub:true,
                    },
                },
            },
            starhuaxian:{
                derivation:"yizhuang",
                animationColor:"thunder",
                skillAnimation:true,
                audio:"ext:王朝更替_权:1",
                unique:true,
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                filter:function (card,player,target){
        return player.storage.starzhanyu_mark>=3;
    },
                content:function (){
        "step 0"
        player.removeSkill('xinjieyin');
        player.removeSkill('xinbiyue');
        player.removeSkill('kanpo');
        player.removeSkill('xinjizhi');
        player.removeSkill('starzhanyu');
        player.recover();
        player.addSkill('yizhuang');
        "step 1"
        var list=[];
        if(!player.hasSkill('xinjieyin')){
            list.push('xinjieyin');
        }
        if(!player.hasSkill('xinbiyue')){
            list.push('xinbiyue');
        }
        if(!player.hasSkill('kanpo')){
            list.push('kanpo');
        }
        if(!player.hasSkill('xinjizhi')){
            list.push('xinjizhi');
        }
        if(list.length){
            player.chooseControl(list).set('prompt','选择获得一项羽技能');
        }
        "step 2"
        player.addSkill(result.control);
        player.popup(result.control);
        game.log(player,'获得技能','【'+get.translation(result.control)+'】');
        player.awakenSkill('starhuaxian');
    },
            },
            starjunshi:{
                mod:{
                    maxHandcard:function (player,num){
            return num+=2;
        },
                },
                audio:"ext:王朝更替_权:2",
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                content:function (){
        player.discardPlayerCard(trigger.player,true);
    },
            },
            starxinzhao:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    global:"damageBegin",
                },
                filter:function (event,player){
        return event.player!=player&&event.player.hp==1;
    },
                content:function (){
        trigger.num++;
        player.draw();
    },
            },
            "starxinzhao_zhu":{
                trigger:{
                    global:"damageBegin",
                },
                audio:"ext:王朝更替_权:2",
                filter:function (event,player){
        return event.player!=player&&event.player.hp==1||event.source==player;
    },
                content:function (){
        trigger.num++;
        player.chooseDrawRecover(true);
    },
            },
            starlangye:{
                skillAnimation:true,
                audio:"ext:王朝更替_权:2",
                zhuSkill:true,
                unique:true,
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                derivation:"starxinzhao_zhu",
                filter:function (event,player){
        return player.hasZhuSkill('starlangye')&&game.roundNumber==1;
    },
                content:function (){
        player.removeSkill('starxinzhao');
        player.addSkill('starxinzhao_zhu');
        player.awakenSkill('starlangye');
    },
            },
            starbingtu:{
                audio:"ext:王朝更替_权:2",
                derivation:["duanbing","huituo","jianchu","qianxi"],
                trigger:{
                    player:"phaseEnd",
                },
                frequent:true,
                content:function (){
        'step 0'
        var list=[];
        if(!player.hasSkill('duanbing')){
            list.push('duanbing');
        }
        if(!player.hasSkill('huituo')){
            list.push('huituo');
        }
        if(!player.hasSkill('jianchu')){
            list.push('jianchu');
        }
        if(!player.hasSkill('qianxi')){
            list.push('qianxi');
        }
        if(list.length){
            player.chooseControl(list).set('prompt','选择获得一项技能');
        }
        'step 1'
        player.addTempSkill(result.control,{player:'phaseDiscardEnd'});
        player.popup(result.control);
        game.log(player,'获得技能','【'+get.translation(result.control)+'】');
    },
            },
            starjiangzhan:{
                audio:"ext:王朝更替_权:2",
                enable:"phaseUse",
                prompt:"你可以获得'追击'，然后获得一个回合。",
                content:function (){
        player.addSkill('zhuiji');
        player.insertPhase();
        player.storage.starjiangzhan=true;
        player.awakenSkill('starjiangzhan');
    },
                ai:{
                    order:1,
                    result:{
                        player:1,
                    },
                    threaten:1.5,
                },
            },
            starshanduan:{
                enable:"phaseUse",
                usable:1,
                audio:"ext:王朝更替_权:2",
                position:"h",
                filterCard:true,
                selectCard:2,
                prepare:"give",
                filterTarget:function (card,player,target){
        return player!=target;
    },
                content:function (){
        player.discardPlayerCard(target,true);
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
            starzhouxia:{
                audio:"ext:王朝更替_权:2",
                derivation:["starqishu","starbingtu","starhongzi","starqizhan"],
                trigger:{
                    player:"useCard",
                },
                filter:function (event){
        return (get.type(event.card,'equip')=='equip'&&event.cards[0]&&event.cards[0]==event.card);
    },
                direct:true,
                content:function (){
        'step 0'
        var list=[];
        if(!player.hasSkill('starqishu')){
            list.push('starqishu');
        }
        if(!player.hasSkill('starbingtu')){
            list.push('starbingtu');
        }
        if(!player.hasSkill('starhongzi')){
            list.push('starhongzi');
        }
        if(!player.hasSkill('starqizhan')){
            list.push('starqizhan');
        }
        if(list.length){
            player.chooseControl(list).set('prompt','选择获得一项技能');
        }
        'step 1'
        player.addSkill(result.control);
        player.popup(result.control);
        game.log(player,'获得技能','【'+get.translation(result.control)+'】');
    },
                ai:{
                    threaten:function (player,target){
            return 1.6;
        },
                },
            },
            staryanggong:{
                mod:{
                    targetInRange:function (card,player,target,now){
            if(player.hasSkill('starqishu_mark')||player.storage.starqishu_mark>0&&card.name=='sha') return true;
        },
                },
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"damageEnd",
                },
                forced:true,
                content:function (){
        player.useCard({name:'sha'},trigger.source);
    },
            },
            starbiri:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"shaBegin",
                },
                content:function (){
        trigger.directHit=true;
        player.addTempSkill('starbiri_turnOver','shaEnd');
        player.addSkill('starbiri_best');
    },
                subSkill:{
                    best:{
                        trigger:{
                            global:"gameStart",
                        },
                        forced:true,
                        filter:function (event,player){
        return player.hasSkill('starlongduan');
    },
                        content:function (){
        trigger.player.turnOver(true);
                player.removeSkill('starbiri_best');
    },
                        sub:true,
                    },
                    turnOver:{
                        trigger:{
                            source:"damageEnd",
                        },
                        forced:true,
                        filter:function (event){
        if(event._notrigger.contains(event.player)) return false;
        return event.card&&event.card.name=='sha'&&event.player.isAlive();
    },
                        check:function (event,player){
        if(event.player.isTurnedOver()) return get.attitude(player,event.player)>0;
        if(event.player.hp<3){
            return get.attitude(player,event.player)<0;
        }
        return get.attitude(player,event.player)>0;
    },
                        logTarget:"player",
                        content:function (){
        trigger.player.turnOver(true);
                player.removeSkill('starbiri_best');
    },
                        sub:true,
                    },
                },
            },
            startiegu:{
                trigger:{
                    player:"shaBegin",
                },
                audio:"ext:王朝更替_权:2",
                filter:function (event){
        return event.target.countCards('he')>0;
    },
                direct:true,
                content:function (){
        'step 0'
        player.discardPlayerCard(trigger.target,get.prompt('startiegu',trigger.target)).set('ai',function(button){
            if(!_status.event.att) return 0;
            if(get.position(button.link)=='he') return get.value(button.link);
            return 1;
        }).set('logSkill',['startiegu',trigger.target]).set('att',get.attitude(player,trigger.target)<=0);
        'step 1'
        if(result.bool&&result.links&&result.links.length){
            if(get.type(result.links[0])=='basic'){
                player.draw();
            }
            if(get.type(result.links[0])=='trick'||get.type(result.links[0])=='delay'){
                player.draw();
                trigger.directHit=true;
            }
            if(get.type(result.links[0])=='equip'){
                player.recover();
                trigger.directHit=true;
            }
        }
    },
            },
            starceben:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                content:function (){
        player.draw(trigger.num);
    },
                mod:{
                    targetInRange:function (card,player,target,now){
            if(card.name=='sha') return true;
        },
                    selectTarget:function (card,player,range){
            if(card.name=='sha'&&range[1]!=-1) range[1]++;
        },
                },
            },
            starjianyue:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"recoverEnd",
                },
                frequent:true,
                content:function (){
        player.draw(trigger.num);
    },
            },
            staryigang:{
                audio:"ext:王朝更替_权:2",
                group:"staryigang_dying",
                trigger:{
                    player:"damageEnd",
                },
                forced:true,
                content:function (){
        if(trigger.source==player){
            player.recover();
        }
        else{
            trigger.source.damage(trigger.num);
        }
    },
                subSkill:{
                    dying:{
                        trigger:{
                            player:"dying",
                        },
                        priority:10,
                        forced:true,
                        content:function (){
        player.draw();
    },
                        sub:true,
                    },
                },
            },
            starlonglin:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"recoverEnd",
                },
                direct:true,
                filter:function (event,player){
        for(var i=0;i<game.players.length;i++){
            if(game.players[i].isDamaged()){
                return true;
            }
        }
        return false;
    },
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt('starlonglin'),[1,Infinity],function(card,player,target){
            return player!=target&&target.isDamaged();
        }).set('ai',function(target){
            return get.attitude(player,target);
        });
        'step 1'
        if(result.bool){
            player.logSkill('starlonglin',result.targets);
            game.asyncDraw(result.targets);
            player.draw();
        }
    },
                ai:{
                    expose:0.3,
                    threaten:1.3,
                },
            },
            starshengnu:{
                group:"starshengnu_draw",
                marktext:"昭",
                init:function (player){
        player.storage.starshengnu=0;
    },
                intro:{
                    content:function (storage){
            return '当前有'+storage+'个“昭”';
        },
                },
                mark:true,
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"phaseBegin",
                },
                content:function (){
        player.loseMaxHp();
        player.storage.starshengnu++;
        player.syncStorage('starshengnu');
        game.log(player,'龙怒降临，全力伐吴');
    },
                subSkill:{
                    draw:{
                        trigger:{
                            player:"phaseDrawBegin",
                        },
                        prompt:"你可以多摸X张牌。(X为你'昭'的数量)",
                        filter:function (event,player){
        return player.storage.starshengnu>0;
    },
                        frequent:true,
                        content:function (){
        trigger.num+=player.storage.starshengnu;
    },
                        sub:true,
                    },
                },
            },
            stardilie:{
                derivation:"stardilie2",
                zhuSkill:true,
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                filter:function (event,player){
        return player.hasZhuSkill('stardilie')&&player.storage.starshengnu>0;
    },
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt('stardilie'),function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return get.attitude(player,target);
        });
        'step 1'
        if(result.bool){
            player.logSkill('stardilie',result.targets);
            result.targets[0].damage('fire');
            player.storage.starshengnu--;
            player.removeSkill('stardilie');
            player.addSkill('stardilie2');
        }
    },
            },
            "stardilie2":{
                zhuSkill:true,
                skillAnimation:"legend",
                animationColor:"fire",
                trigger:{
                    player:"dying",
                },
                priority:10,
                filter:function (event,player){
        return player.hasZhuSkill('stardilie2')&&player.storage.starshengnu>0;
    },
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt('stardilie2'),function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return get.attitude(player,target);
        });
        'step 1'
        if(result.bool){
            player.logSkill('stardili2',result.targets);
            result.targets[0].damage(player.storage.starshengnu);
            player.recover();
            player.storage.starshengnu-=player.storage.starshengnu;
        }
        'step 2'
        player.awakenSkill('stardilie2');
        player.storage.stardilie2=true;
    },
            },
            starhuoxin:{
                enable:"phaseUse",
                derivation:["starshenghun","starnuxiao","starlongduan","starqishu","staryanggong","startiegu"],
                position:"h",
                filterCard:true,
                selectCard:1,
                usable:1,
                audio:"ext:王朝更替_权:2",
                filterTarget:function (card,player,target){
        return player!=target;
    },
                content:function (){
        'step 0'
        player.gainPlayerCard(target,'hej',true);
        'step 1'
        var list=[];
        if(!player.hasSkill('starshenghun')){
            list.push('starshenghun');
        }
        if(!player.hasSkill('starnuxiao')){
            list.push('starnuxiao');
        }
        if(!player.hasSkill('starlongduan')){
            list.push('starlongduan');
        }
        if(!player.hasSkill('starqishu')){
            list.push('starqishu');
        }
        if(!player.hasSkill('staryanggong')){
            list.push('staryanggong');
        }
        if(!player.hasSkill('startiegu')){
            list.push('startiegu');
        }
        if(list.length){
            player.chooseControl(list).set('prompt','选择获得一项技能');
        }
        'step 2'
        target.addTempSkill(result.control,{player:'phaseEnd'});
        target.popup(result.control);
        game.log(player,'令',target,'获得了','【'+get.translation(result.control)+'】');
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
            starmingyuan:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"damageEnd",
                },
                forced:true,
                check:function (event,player){
        var att=get.attitude(player,event.source);
        var num=event.source.countCards('h');
        if(att<=0) return true;
        if(num>2) return true;
        if(num) return att<4;
        return false;
    },
                filter:function (event,player){
        return event.source&&event.source!=player&&event.num>0&&event.source.isAlive();
    },
                content:function (){
        "step 0"
        event.num=trigger.num;
        "step 1"
        trigger.source.chooseCard('交给'+get.translation(player)+'一张手牌并令其看你的手牌或令'+get.translation(player)+'复制并对你使用你对其造成伤害的牌').set('ai',function(card){
            if(get.attitude(_status.event.player,_status.event.getParent().player)>0){
                return 11-get.value(card);
            }
            else{
                return 7-get.value(card);
            }
        });
        "step 2"
        if(result.bool){
            player.gain(result.cards[0],trigger.source);
            trigger.source.$give(1,player);
            player.viewHandcards(trigger.source);
        }
        else{
            if(get.itemtype(trigger.cards)=='cards'&&get.position(trigger.cards[0])=='d'){
            player.useCard(trigger.card,trigger.source);
                }
            else{
                trigger.source.damage('fire');
            }
        }
        if(event.num>1){
            event.num--;
            event.goto(1);
        }
    },
                ai:{
                    "maixie_defend":true,
                    effect:{
                        target:function (card,player,target){
                if(player.hasSkillTag('jueqing',false,target)) return [1,-1.5];
                if(!target.hasFriend()) return;
                if(get.tag(card,'damage')) return [1,0,0,-0.7];
            },
                    },
                },
                group:"starmingyuan2",
            },
            "starmingyuan2":{
                trigger:{
                    player:"gainEnd",
                },
                audio:"ext:王朝更替_权:2",
                filter:function (event,player){
        return event.source&&event.source.isAlive()&&event.source!=player&&event.cards.length>=2;
    },
                logTarget:"source",
                check:function (event,player){
        return get.attitude(player,event.source)>0;
    },
                content:function (){
        trigger.source.chooseDrawRecover(true);
    },
            },
            staryaodun:{
                audio:"ext:王朝更替_权:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return player!=target;
    },
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                filterCard:true,
                selectCard:-1,
                content:function (){
        target.damage();
    },
                ai:{
                    order:1,
                    result:{
                        target:function (player,target){
                if(target.hasSkillTag('nogain')) return 0;
                if(player.countCards('h')==1&&player.countCards('h','du')) return -1;
                if(player.hp<=2&&player.countCards('h','shan')) return 0;
                if(target.countCards('h')+player.countCards('h')>target.hp+2) return 0;
                if(get.attitude(player,target)>3) return 1;
                return 0;
            },
                    },
                },
            },
            starzhidi:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    source:"damageEnd",
                },
                filter:function (event,player){
        return event.player.isAlive();
    },
                check:function (event,player){
        if(get.damageEffect(event.player,player,player)<0) return true;
        var att=get.attitude(player,event.player);
        if(att>0&&event.player.countCards('j')) return true;
        if(event.num>1){
            if(att<0) return false;
            if(att>0) return true;
        }
        var cards=event.player.getGainableCards(player,'e');
        for(var i=0;i<cards.length;i++){
            if(get.equipValue(cards[i])>=6) return true;
        }
        return false;
    },
                logTarget:"player",
                content:function (){
        if(trigger.player.countGainableCards(player,'ej')){
            player.gainPlayerCard(trigger.player,'ej',true);
        }
        
    },
            },
            starxianfeng:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"phaseBegin",
                },
                content:function (){
        'step 0'
        player.skip('phaseDraw');
        player.draw();
        player.addTempSkill('starxianfeng2',{player:'phaseUseEnd'});
        player.phaseUse();
        'step 1'
        player.getStat().card={};
    },
            },
            starfuzhan:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    source:"damageEnd",
                    player:"damageEnd",
                },
                forced:true,
                filter:function (event,player){
        return player.countCards('h')<1;
    },
                content:function (){
        player.draw();
    },
                mod:{
                    selectTarget:function (card,player,range){
            if(card.name!='sha') return;
            if(get.mode()=='guozhan') return;
            if(range[1]==-1) return;
            var cards=player.getCards('h');
            for(var i=0;i<cards.length;i++){
                if(cards[i].classList.contains('selected')==false)
                    return;
            }
            range[1]+=2;
        },
                },
            },
            "starxianfeng2":{
                enable:"phaseUse",
                usable:1,
                audio:"ext:王朝更替_权:2",
                position:"h",
                filterCard:true,
                selectCard:1,
                prompt:"弃置一张手牌并弃置一名其他角色的一张手牌",
                filterTarget:function (card,player,target){
        return player!=target;
    },
                content:function (){
        player.discardPlayerCard('h',true,target);
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
            starfangyi:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"phaseDrawBegin",
                },
                filter:function (event,player){
        return game.hasPlayer(function(current){
            return current.sex=='female';
        });
    },
                forced:true,
                content:function (){
        var num=game.countPlayer(function(current){
            return current.sex=='female';
        });
        if(num>2) num=2;
        trigger.num+=num;
    },
                ai:{
                    threaten:function (){
            var num=game.countPlayer(function(current){
                return current.sex=='female';
            });
            switch(num){
                case 0:return 1;
                case 1:return 1.3;
                default:return 2;
            }
        },
                },
            },
            starzhengce:{
                audio:"ext:王朝更替_权:2",
                derivation:["starshenghun","starxianfeng","starzhidi"],
                trigger:{
                    source:"damageEnd",
                    player:"damageEnd",
                },
                frequent:true,
                content:function (){
        'step 0'
        var list=[];
        if(!player.hasSkill('starshenghun')){
            list.push('starshenghun');
        }
        if(!player.hasSkill('starxianfeng')){
            list.push('starxianfeng');
        }
        if(!player.hasSkill('starzhidi')){
            list.push('starzhidi');
        }
        if(list.length){
            player.chooseControl(list).set('prompt','选择获得一项技能');
        }
        'step 1'
        player.addSkill(result.control);
        player.popup(result.control);
        game.log(player,'获得技能','【'+get.translation(result.control)+'】');
    },
            },
            starjianxia:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    global:"useCard",
                },
                filter:function (event,player,card){
        return get.type(event.card,'trick')=='trick'&&get.color(event.card,'black')=='black';
    },
                content:function (card){
        if(trigger.player==player){
            player.equip(event.equip||game.createCard(get.inpilefull('equip').randomGet()),true);
        }
        else{
            trigger.player.draw();
            player.draw();
            if(player.countCards('h')>player.hp)player.chooseToDiscard('h',true);
        };
    },
            },
            starshihu:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    global:"gameStart",
                    player:"enterGame",
                },
                forced:true,
                filter:function (){
        return game.players.length>1;
    },
                content:function (){
        'step 0'
        player.chooseTarget('选择【识虎】的目标',lib.translate.starshihu_info,true,function(card,player,target){
            return !target.hasSkill('starshihu2');
        }).set('ai',function(target){
            var att=get.attitude(_status.event.player,target);
            if(att>0) return att+1;
            if(att==0) return Math.random();
            return att;
        });
        'step 1'
        if(result.bool){
            var target=result.targets[0];
            player.line(target,'green');
            game.log(target,'成为了','【识虎】','的目标');
            target.storage.starshihu2=player;
            target.addSkill('starshihu2');
        }
    },
                subSkill:{
                    recover:{
                        trigger:{
                            global:"dieAfter",
                        },
                        forced:true,
                        filter:function (event,player){
        return event.player.hasSkill('starshihu2');
    },
                        content:function (){
        player.gainMaxHp(true);
        player.recover();
        game.log(trigger.player,'虎落黄泉......');
    },
                        sub:true,
                    },
                },
                group:"starshihu_recover",
            },
            "starshihu2":{
                audio:"ext:王朝更替_权:2",
                mark:"character",
                intro:{
                    name:"识虎",
                    content:"你成为了'虎'",
                },
                trigger:{
                    player:"shaBegin",
                },
                content:function (){
        player.damage();
        trigger.directHit=true;
        game.log('皇权之虎，爪锋刺利！');
    },
                mod:{
                    globalFrom:function (from,to,distance){
            return distance-1;
        },
                },
            },
            starrenyi:{
                trigger:{
                    global:"gainBegin",
                },
                forced:true,
                popup:false,
                filter:function (event,player){
        if(event.source==player&&event.player!=player){
            for(var i=0;i<event.cards.length;i++){
                if(get.color(event.cards[i])=='red') return true;
            }
        }
        return false;
    },
                content:function (){
        trigger.player.recover();
    },
            },
            starheman:{
                filterCard:true,
                selectCard:1,
                enable:"phaseUse",
                prepare:"give",
                audio:"ext:王朝更替_权:2",
                filterTarget:function (card,player,target){
        return player!=target&&!target.hasSkill('starheman2');
    },
                content:function (){
        "step 0"
        target.gain(cards,player);
        "step 1"
        player.draw();
        target.addTempSkill('starheman2');
    },
                ai:{
                    threaten:2.3,
                },
            },
            "starheman2":{
                mark:true,
                marktext:"抚",
                intro:{
                    name:"和蛮",
                    content:"你不能成为和蛮目标",
                },
            },
            starduoqi:{
                enable:"phaseUse",
                usable:1,
                audio:"ext:王朝更替_权:2",
                filterTarget:function (card,player,target){
        return player!=target;
    },
                content:function (){
        "step 0"
        player.gainPlayerCard('he',target,true);
        "step 1"
        player.storage.starduoqi2=target;
        player.addTempSkill('starduoqi2');
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
            "starduoqi2":{
                onremove:true,
                mod:{
                    globalFrom:function (from,to){
            if(to==from.storage.starduoqi2) return -Infinity;
        },
                },
                mark:"character",
                intro:{
                    content:"与$的距离视为1直到回合结束",
                },
            },
            staranji:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    global:"phaseUseEnd",
                },
                filter:function (event,player){
        return event.player.isAlive()&&player.countCards('h')>0&&event.player.countCards('e')>0&&event.player!=player;
    },
                content:function (){
        'step 0'
        player.chooseToDiscard('he','请弃置一张牌',true);
        'step 1'
          trigger.player.damage();
        'step 2'
            trigger.player.chooseToDiscard('e','请弃置一张装备牌',true);
        'step 3'
            trigger.player.draw(trigger.player.maxHp-trigger.player.hp);
           
    },
            },
            starguagu:{
                enable:"phaseUse",
                usable:1,
                audio:"ext:王朝更替_权:2",
                filterTarget:function (card,player,target){
        return player!=target;
    },
                content:function (){
        "step 0"
        player.discardPlayerCard('hej',target,true)
        "step 1"
        if(target.isDamaged()){
            target.recover();
        } 
        else{
            player.draw();
        }
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
            starlianjiu:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    global:"dying",
                },
                priority:10,
                filter:function (event,player){
        return !event.player.hasSkill('starxinglin');
    },
                content:function (){
        player.useCard({name:'tao'},trigger.player);
        trigger.player.addSkill('starxinglin');
    },
            },
            starxinglin:{
                marktext:"杏",
                mark:true,
                intro:{
                    name:"杏林",
                    content:"你需要杀死一名其他角色",
                },
                audio:"ext:王朝更替_权:2",
                trigger:{
                    global:"dieAfter",
                },
                forced:true,
                filter:function (event,player){
        return event.source==player;
    },
                content:function (){
        'step 0'
        player.removeSkill('starxinglin');
        'step 1'
        for(var i=0;i<game.players.length;i++){
        if(game.players[i].name=='huatuoyistar'){
                player.chooseBool('是否令医华佗摸一张牌？').set('ai',function(){                    
                     return get.attitude(player,game.players[i]);     
                    });    
             }
            
            }
        "step 2"
            if(result.bool){
            for(var i=0;i<game.players.length;i++){
            if(game.players[i].name=='huatuoyistar'){
                game.players[i].draw();    
            }
            }
            }            
       else{
           event.finish();
       }
    },
            },
            starqilue:{
                marktext:"棋",
                init:function (player){
        player.storage.starqilue=0;
    },
                intro:{
                    content:function (storage){
            return '当前有'+storage+'枚“棋”';
        },
                },
                mark:true,
                audio:"ext:王朝更替_权:2",
                trigger:{
                    global:"gameStart",
                },
                forced:true,
                content:function (){
        player.storage.starqilue+=3;
        player.syncStorage('starqilue');
        game.log(player,'获得了3枚“棋"');
    },
                subSkill:{
                    damage:{
                        trigger:{
                            source:"damageEnd",
                            player:"damageEnd",
                        },
                        forced:true,
                        content:function (){
        player.storage.starqilue+=trigger.num;
    },
                        sub:true,
                    },
                },
                group:"starqilue_damage",
            },
            starzeshu:{
                derivation:["zishu","reyingzi","qingnang","xinzhiheng"],
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"phaseDrawBegin",
                },
                filter:function (event,player){
        return !player.hasSkill('zishu')&&player.storage.starqilue>3||player.hasSkill('zishu')&&player.storage.starqilue>5;
    },
                content:function (){
        'step 0'
        player.storage.starqilue--;
        'step 1'
        var list=[];
        if(!player.hasSkill('zishu')&&player.storage.starqilue>=3){
            list.push('zishu');
        }
        if(!player.hasSkill('reyingzi')&&player.storage.starqilue>=5){
            list.push('reyingzi');
        }
        if(!player.hasSkill('qingnang')&&player.storage.starqilue>=7){
            list.push('qingnang');
        }
        if(!player.hasSkill('xinzhiheng')&&player.storage.starqilue>=10){
            list.push('xinzhiheng');
        }
        if(list.length){
            player.chooseControl(list).set('prompt','选择获得一项技能');
        }
        'step 2'
        player.addTempSkill(result.control,{player:'phaseBegin'});
        player.popup(result.control);
        game.log(player,'获得技能','【'+get.translation(result.control)+'】');
    },
                ai:{
                    threaten:1.3,
                },
            },
            starzizhu:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"damageBegin",
                },
                filter:function (event,player){
        return player.storage.starqilue>=3&&event.num>=player.hp;
    },
                content:function (){
        player.storage.starqilue-=3
        trigger.cancel();
    },
            },
            starjiyuan:{
                audio:"ext:王朝更替_权:2",
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        return player.storage.starqilue>=5;
    },
                content:function (){
        player.storage.starqilue-=5;
        player.draw(2);
        player.addSkill('zishu');
        player.storage.starjiyuan=true;
        player.awakenSkill('starjiyuan');
    },
                ai:{
                    order:1,
                    result:{
                        player:1,
                    },
                    threaten:1.5,
                },
            },
            starjiangjue:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    global:"damageBefore",
                },
                filter:function (event,player){
        return player.hp<=2;
    },
                forced:true,
                content:function (){            
        trigger.source=player                        
       },
            },
            starpoqin:{
                group:["starpoqin_source","starpoqin_player"],
                audio:"ext:王朝更替_权:2",
                subSkill:{
                    player:{
                        audio:"ext:王朝更替_权:2",
                        prompt:"你可以与其拼点，你防止此伤害，否则其伤害+1。",
                        trigger:{
                            player:"damageBegin",
                        },
                        filter:function (event,player){
        return event.source!=event.player&&event.source.countCards('h')>0&&event.player.countCards('h')>0;
    },
                        content:function (){
        'step 0'
        player.chooseToCompare(trigger.source);
        'step 1'
        if(result.bool){
            trigger.cancel();
        }
        else{
            trigger.num++;
        }
    },
                        sub:true,
                    },
                    source:{
                        audio:"ext:王朝更替_权:2",
                        filter:function (event,player){
        return event.source!=event.player&&event.source.countCards('h')>0&&event.player.countCards('h')>0;
    },
                        prompt:"你可以与其拼点，若你赢，你的伤害+1，否则其防止你伤害。",
                        trigger:{
                            source:"damageBegin",
                        },
                        content:function (){
        'step 0'
        player.chooseToCompare(trigger.player);
        'step 1'
        if(result.bool){
            trigger.num++;
        }
        else{
            trigger.cancel();
        }
    },
                        sub:true,
                    },
                },
            },
            starnijian:{
                zhuSkill:true,
                trigger:{
                    player:["chooseToCompareAfter","compareMultipleAfter"],
                    target:["chooseToCompareAfter","compareMultipleAfter"],
                },
                direct:true,
                audio:"ext:王朝更替_权:2",
                filter:function (event,player){
        return player.hasZhuSkill('starnijian');
    },
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('starnijian'),function(card,player,target){
            return player!=target&&target.countCards('he')>0;
        }).set('ai',function(target){
            return -get.attitude(_status.event.player,target);
        });
        "step 1"
        if(result.bool){
            player.logSkill('starnijian',result.targets);
            event.target=result.targets[0];
            player.gainPlayerCard(event.target,true);
        }
        else{
            event.finish();
        }
    },
                ai:{
                    expose:0.2,
                },
                subSkill:{
                    draw:{
                        trigger:{
                            player:"loseEnd",
                        },
                        usable:1,
                        filter:function (event,player){
        return _status.currentPhase!=player&&player.countCards('h')==0&&player.hasZhuSkill('starnijian');
    },
                        forced:true,
                        content:function (){
        player.draw(player.hp);
    },
                        sub:true,
                    },
                },
            },
            starzhengheng:{
                enable:"phaseUse",
                usable:1,
                audio:"ext:王朝更替_权:2",
                filterTarget:true,
                content:function (){
        if(target!=player&&target.countCards('h')>player.countCards('h')){
            target.chooseToDiscard(true,target.countCards('h')-player.countCards('h'));
        }
        if(target!=player&&player.countCards('h')>target.countCards('h')){
            target.draw(player.countCards('h')-target.countCards('h'));
        }
        if(target==player&&player.countCards('h')>=player.hp){
            player.chooseToDiscard(player.hp,true);
            player.draw(player.hp);
        }
        if(target==player&&player.countCards('h')<player.hp){
            player.addTempSkill('qizhi');
            player.addTempSkill('jingce');
        }
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
            staryuanzhi:{
                zhuSkikl:true,
                audio:"ext:王朝更替_权:2",
                trigger:{
                    global:"recoverEnd",
                },
                filter:function (event,player){
        return event.player.group==player.group&&event.player!=player&&player.hasZhuSkill('staryuanzhi');
    },
                forced:true,
                content:function (){
        player.chooseDrawRecover(true);
    },
            },
            startianxing:{
                group:"startianxing_star",
                marktext:"星",
                init:function (player){
        player.storage.startianxing=0;
    },
                intro:{
                    content:function (storage){
            return '当前有'+storage+'枚“星”';
        },
                },
                mark:true,
                audio:"ext:王朝更替_权:2",
                trigger:{
                    global:"gameStart",
                },
                forced:true,
                content:function (){
        player.storage.startianxing+=7;
        player.syncStorage('startianxing');
        game.log(player,'获得了7枚“星”');
    },
                subSkill:{
                    star:{
                        audio:"ext:王朝更替_权:2",
                        trigger:{
                            player:"phaseBegin",
                        },
                        forced:true,
                        filter:function (event,player){
        return player.storage.startianxing<7;
    },
                        content:function (){
        player.storage.startianxing+=7-player.storage.startianxing;
    },
                        sub:true,
                    },
                },
            },
            staryuhuo:{
                group:["staryuhuo_fire","staryuhuo_discard","staryuhuo_damage"],
                enable:"phaseUse",
                audio:"ext:王朝更替_权:2",
                filter:function (event,player){
        return player.storage.startianxing>0;
    },
                filterTarget:true,
                content:function (){
        player.storage.startianxing--;
        player.useCard(game.createCard('huogong','heart',13),target);
    },
                subSkill:{
                    fire:{
                        trigger:{
                            source:"damageBegin",
                        },
                        prompt:"此伤害改为火属性",
                        filter:function (event,player){
        return player.storage.startianxing>0;
    },
                        content:function (){
        player.storage.startianxing--;
        trigger.nature='fire';
    },
                        sub:true,
                    },
                    discard:{
                        trigger:{
                            source:"damageBegin",
                        },
                        prompt:"此伤害目标弃置一张牌",
                        filter:function (event,player){
        return player.storage.startianxing>0;
    },
                        content:function (){
        player.storage.startianxing--;
        trigger.player.chooseToDiscard(true);
    },
                        sub:true,
                    },
                    damage:{
                        trigger:{
                            source:"damageBegin",
                        },
                        prompt:"此伤害+1",
                        filter:function (event,player){
        return player.storage.startianxing>0;
    },
                        content:function (){
        player.storage.startianxing--;
        trigger.num++;
    },
                        sub:true,
                    },
                },
            },
            starzhencheng:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"damageBegin",
                },
                filter:function (event,player){
        return player.storage.startianxing>=3&&event.num>=player.hp;
    },
                content:function (){
        player.storage.startianxing-=player.storage.startianxing;
        trigger.cancel();
    },
            },
            starjianghou:{
                audio:"ext:王朝更替_权:2",
                derivation:["starsuji","starjianyue","staryiji"],
                trigger:{
                    global:"roundStart",
                },
                forced:true,
                content:function (){
        "step 0"
        var list=[];
        if(!player.hasSkill('starsuji')){
            list.push('starsuji');
        }
        if(!player.hasSkill('starjianyue')){
            list.push('starjianyue');
        }
        if(!player.hasSkill('staryiji')){
            list.push('staryiji');
        }
        if(list.length){
            player.chooseControl(list).set('prompt','选择获得一项技能');
        }
        "step 1"
        player.addSkill(result.control);
        player.popup(result.control);
        game.log(player,'获得技能','【'+get.translation(result.control)+'】');
    },
                ai:{
                    threaten:1.3,
                },
            },
            starshixing:{
                audio:"ext:王朝更替_权:2",
                enable:"phaseUse",
                usable:1,
                position:"h",
                filterCard:true,
                selectCard:1,
                check:function (card){
        return 6-get.value(card)
    },
                content:function (){
        'step 0'
        player.recover();
        'step 1'
        player.showHandcards();
    },
                ai:{
                    order:1,
                    result:{
                        player:1,
                    },
                    threaten:1.5,
                },
            },
            staryiji:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"phaseDrawEnd",
                },
                direct:true,
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt('staryiji'),function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return get.attitude(player,target);
        });
        'step 1'
        if(result.bool&&result.targets[0].countCards('h','sha')){
            player.logSkill('staryiji',result.targets);
            event.target=result.targets[0];
            player.discardPlayerCard(event.target,'visible',true);
        }
        if(result.bool&&!result.targets[0].countCards('h','sha')){
            player.logSkill('staryiji',result.targets);
            event.target=result.targets[0];
            player.viewHandcards(event.target);
        }
    },
            },
            starchujiao:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"damageBegin",
                },
                filter:function (event){
        if(event._notrigger.contains(event.player)) return false;
        return event.card&&event.card.name=='sha'&&event.player.isAlive();
    },
                frequent:true,
                content:function (){
        if(trigger.source.storage.starchujiao_mark==undefined) trigger.source.storage.starchujiao_mark=0;
        player.showHandcards();
        player.line(trigger.source);
        player.logSkill('starchujiao_mark');
        trigger.source.markSkill('starchujiao_mark');
            trigger.source.storage.starchujiao_mark++;
            trigger.source.syncStorage('starchujiao_mark');
            trigger.cancel()
            game.log(trigger.source,'获得了1枚“蛟龙”标记，',player,'周旋住了蛟龙。');
        if(trigger.source.storage.starchujiao_mark>=3){
            trigger.source.storage.starchujiao_mark-=3;
            trigger.source.loseHp();
            player.loseHp();
        }
    },
                subSkill:{
                    mark:{
                        mark:true,
                        marktext:"蛟",
                        intro:{
                            name:"蛟龙",
                            content:"你拥有$枚'蛟龙'标记",
                        },
                        sub:true,
                    },
                },
            },
            stargefa:{
                mark:true,
                marktext:"割",
                intro:{
                    name:"割发",
                    content:"于本回合拥有此效果",
                },
                enable:"phaseUse",
                usable:3,
                audio:"ext:王朝更替_权:2",
                filterTarget:function (card,player,target){
        return player!=target;
    },
                content:function (){
        player.discardPlayerCard(true,'hej',target);
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
            starxietian:{
                audio:"ext:王朝更替_权:2",
                derivation:["xietianzi","stargefadaishou","starchusanhai"],
                zhuSkill:true,
                trigger:{
                    player:"loseHpEnd",
                },
                filter:function (event,player){
        return player.hasZhuSkill('starxietian');
    },
                direct:true,
                content:function (){
        'step 0'
        player.chooseControl('挟天子以令诸侯','割发代首','除三害','cancel2',true);
        'step 1'
        if(result.control=='挟天子以令诸侯'){
            player.useCard(game.createCard('xietianzi'),player);
        }
        if(result.control=='割发代首'){
            player.useCard(game.createCard('stargefadaishou'),player);
        }
        if(result.control=='除三害'){
            player.useCard(game.createCard('starchusanhai'),player);
        }
    },
            },
            starsongzang:{
                derivation:"manjuan",
                audio:"ext:王朝更替_权:2",
                trigger:{
                    global:"dieAfter",
                },
                filter:function (event,player){
        return event.player!=player;
    },
                content:function (){
        player.addTempSkill('manjuan','phaseBegin');
        player.recover(3);
        player.chooseToDiscard(true,player.countCards('hej'));
        player.link(false);
        player.turnOver(false);
        player.draw(3);
    },
            },
            starzhanji:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"gainEnd",
                },
                direct:true,
                filter:function (event,player){
        return event.cards&&event.cards.length>1;
    },
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt('starzhanji'),function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return get.attitude(player,target);
        });
        'step 1'
        if(result.bool){
            player.draw();
            player.logSkill('starzhanji',result.targets);
            result.targets[0].link(true);
        }
    },
            },
            starmixian:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    global:"phaseBegin",
                },
                content:function (){
        trigger.player.draw();
        player.draw();
    },
            },
            starqiaozhi:{
                unique:true,
                mark:true,
                skillAnimation:"legend",
                animationColor:"thunder",
                derivation:["qiangzhi","starcaizhi"],
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                filter:function (event,player){
        return player.countCards('h')>=player.hp+player.hp;
    },
                content:function (){
        player.loseMaxHp();
        player.removeSkill('starmixian');
        player.addSkill('qiangzhi');
        player.addSkill('starcaizhi');
        player.storage.starqiaozhi=true;
        player.awakenSkill('starqiaozhi');
    },
            },
            starcaizhi:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"phaseDrawEnd",
                },
                popup:false,
                filter:function (event){
        return event.cards&&event.cards.length;
    },
                content:function (){
        'step 0'
        event.cards=trigger.cards.slice(0);
        player.chooseCardTarget({
            filterCard:function(card){
                return _status.event.getParent().cards.contains(card);
            },
            selectCard:[1,2],
            filterTarget:function(card,player,target){
                return player!=target;
            },
            ai1:function(card){
                if(ui.selected.cards.length>0) return -1;
                if(card.name=='du') return 20;
                return (_status.event.player.countCards('h')-_status.event.player.hp);
            },
            ai2:function(target){
                var att=get.attitude(_status.event.player,target);
                if(ui.selected.cards.length&&ui.selected.cards[0].name=='du'){
                    return 1-att;
                }
                return att-4;
            },
            forced:true,
            prompt:'请选择要送人的卡牌'
        });
        "step 1"
        if(result.bool){
            player.line(result.targets,'green');
            result.targets[0].gain(result.cards,player);
            player.$give(result.cards.length,result.targets[0]);
            game.delay(0.7);
        }
    },
            },
            starqingshi:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    global:"useCard",
                },
                filter:function (event,player){
        return get.number(event.card,'number')==1;
    },
                content:function (){
        trigger.player.damage();
    },
            },
            starzhike:{
                derivation:["starmixian","lianhuan","starshihu","zhuandui","pindi","faen"],
                audio:"ext:王朝更替_权:2",
                trigger:{
                    global:"useCard",
                },
                filter:function (event,player){
        return get.number(event.card,'number')==13;
    },
                content:function (){
        'step 0'
        var list=[];
        if(!player.hasSkill('starmixian')){
            list.push('starmixian');
        }
        if(!player.hasSkill('lianhuan')){
            list.push('lianhuan');
        }
        if(!player.hasSkill('starshihu2')){
            list.push('starshihu2');
        }
        if(!player.hasSkill('zhuandui')){
            list.push('zhuandui');
        }
        if(!player.hasSkill('pindi')){
            list.push('pindi');
        }
        if(!player.hasSkill('faen')){
            list.push('faen');
        }
        if(list.length){
            player.chooseControl(list).set('prompt','选择令其获得一项技能之一');
        }
        'step 1'
        trigger.player.addTempSkill(result.control,{player:'phaseUseBegin'});
        trigger.player.storage.starshihu2=player;
        player.popup(result.control);
        game.log(trigger.player,'获得技能','【'+get.translation(result.control)+'】');
    },
            },
            staryishu:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    global:"roundStart",
                },
                forced:true,
                content:function (){
        'step 0'
        player.chooseTarget('选择【依术】的目标',lib.translate.staryishu_info,true,function(card,player,target){
            return !target.hasSkill('staryongsi');
        }).set('ai',function(target){
            var att=get.attitude(_status.event.player,target);
            if(att>0) return att+1;
            if(att==0) return Math.random();
            return att;
        });
        'step 1'
        if(result.bool){
            var target=result.targets[0];
            player.line(target,'green');
            game.log(target,'成为了','【依术】','的目标');
            target.storage.staryongsi=player;
            target.addTempSkill('staryongsi',{player:'phaseEnd'});
            if(target==player){
                player.storage.starhuaiju--;
                if(player.storage.starhuaiju==0)player.loseHp;
            }
        }
    },
            },
            staryongsi:{
                group:"xinyongsi",
                mark:"character",
                intro:{
                    name:"依术",
                    content:"你在袁术家准备藏橘",
                },
            },
            startianlun:{
                derivation:["tiandu","mashu","feiying","hanqiang","kurou","shuangren","qianxun","gongji","zhuiji"],
                enable:"phaseUse",
                audio:"ext:王朝更替_权:2",
                filterTarget:function (card,player,target){
        return player!=target;
    },
                content:function (){
        'step 0'
        if(player.storage.starhuaiju>0){
            player.storage.starhuaiju--;
        }
        else{
            player.loseHp();
        }
        var list=[];
        if(!target.hasSkill('tiandu')){
            list.push('tiandu');
        }
        if(!target.hasSkill('mashu')){
            list.push('mashu');
        }
        if(!target.hasSkill('feiying')){
            list.push('feiying');
        }
        if(!target.hasSkill('hanqiang')){
            list.push('hanqiang');
        }
        if(!target.hasSkill('kurou')){
            list.push('kurou');
        }
        if(!target.hasSkill('shuangren')){
            list.push('shuangren');
        }
        if(!target.hasSkill('qianxun')){
            list.push('qianxun');
        }
        if(!target.hasSkill('gongji')){
            list.push('gongji');
        }
        if(!target.hasSkill('zhuiji')){
            list.push('zhuiji');
        }
        if(list.length){
            player.chooseControl(list).set('prompt','选择获得一项技能');
        }
        'step 1'
        target.addTempSkill(result.control,{player:'phaseEnd'});
        player.popup(result.control);
        game.log(player,'获得技能','【'+get.translation(result.control)+'】');
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
            starhuaiju:{
                group:"starhuaiju_draw",
                marktext:"橘",
                init:function (player){
        player.storage.starhuaiju=0;
    },
                intro:{
                    content:function (storage){
            return '当前有'+storage+'个“橘”';
        },
                },
                mark:true,
                audio:"ext:王朝更替_权:2",
                trigger:{
                    global:"gameStart",
                },
                forced:true,
                content:function (){
        player.storage.starhuaiju+=3;
        player.syncStorage('starhuaiju');
        game.log(player,'获得了3个“橘”');
    },
                subSkill:{
                    draw:{
                        audio:"ext:王朝更替_权:2",
                        trigger:{
                            player:"phaseDrawBefore",
                        },
                        forced:true,
                        filter:function (event,player){
        return player.storage.starhuaiju==undefined||player.storage.starhuaiju==0;
    },
                        content:function (){
        trigger.num--;
        if(player.storage.starhuaiju==undefined) player.storage.starhuaiju=0;
        player.markSkill('starhuaiju');
        player.storage.starhuaiju++;
        player.syncStorage('starhuaiju');
        game.log(player,'获得了1个“橘”');
    },
                        sub:true,
                    },
                },
            },
            starbeifa:{
                unique:true,
                trigger:{
                    player:"changeHp",
                },
                forced:true,
                priority:100,
                derivation:["starshengnu","starxinji","huoji"],
                fixed:true,
                audio:"ext:王朝更替_权:2",
                mode:["identity","guozhan","boss","stone"],
                filter:function (event,player){
        return player.hp<=4;
    },
                content:function (){
        player.awakenSkill('starbeifa');
        player.storage.starbeifa=true;
        player.clearSkills();
        player.addSkill('starxinji');
        player.addSkill('huoji');
        player.addSkill('starshengnu');
        player.loseMaxHp(player.maxHp-player.hp);
        if(player.storage.starshengnu==undefined) player.storage.starshengnu=0;
        player.storage.starshengnu+=4;
        player.syncStorage('starshengnu');
        game.log(player,'继先辈在天之灵，扬大汉，北伐，攻魏！');
    },
            },
            staryinji:{
                mod:{
                    maxHandcard:function (player,num){
            return num+=1;
        },
                },
                audio:"ext:王朝更替_权:2",
                trigger:{
                    global:"chooseToCompareBegin",
                },
                forced:true,
                filter:function (event,player){
                return event.target==player;
            },
                content:function (){
                trigger.cancel();
            },
            },
            starjiece:{
                audio:"ext:王朝更替_权:2",
                mode:["boss"],
                trigger:{
                    player:"phaseUseEnd",
                },
                forced:true,
                filter:function (event,player){
        if(player.isLinked()) return true;
        return game.hasPlayer(function(current){
            return current!=player&&!current.isLinked();
        });
    },
                content:function (){
        "step 0"
        event.targets=game.filterPlayer();
        event.targets.remove(player);
        event.targets.sort(lib.sort.seat);
        player.draw(2);
        "step 1"
        if(event.targets.length){
            var target=event.targets.shift();
            if(!target.isLinked()){
                target.link();
                player.line(target,'green');
            }
            event.redo();
        }
    },
            },
            startianjian:{
                audio:"ext:王朝更替_权:2",
                forbid:["boss"],
                trigger:{
                    global:"gameStart",
                    player:"enterGame",
                },
                forced:true,
                content:function (){
        "step 0"
        player.judge();
        "step 1"
        switch(get.suit(result.card)){
                case'heart':
                    player.init(player.name,'zhugeliangzuodistar');
                    break;
                case'diamond':
                    player.init(player.name,'pangtongxiaoniaostar');
                    break;
                case'spade':
                    player.init(player.name,'fazhengmohuangstar');
                    break;
                case'club':
                    player.init(player.name,'liubazhengzhaostar');
                    break;
                
        }
        "step 2"
        player.loseHp(2);
        player.removeSkill('huashen');
        player.removeSkill('xinsheng');
        player.removeSkill('starzhenwei');
        player.removeSkill('zhexian');
    },
            },
            starljzhanji:{
                enable:"phaseUse",
                usable:1,
                audio:"ext:王朝更替_权:2",
                filterTarget:function (card,player,target){
        return player!=target&&target.name=='fuben_zhuyuanzhangmingstar';
    },
                content:function (target){
        target.chooseToDiscard('h',true,target.countCards('h'));
        target.recover();
    },
            },
            starchoumou:{
                audio:"ext:王朝更替_权:2",
                group:"starchoumou_damage",
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                forced:true,
                content:function (){
        'step 0'
        player.chooseTarget(true,get.prompt('starchoumou'),function(card,player,target){
            return target!=player&&target.name=='fuben_zhuyuanzhangmingstar';
        }).set('ai',function(target){
            return get.attitude(player,target);
        });
        'step 1'
        if(result.bool){
            player.logSkill('starchoumou',result.targets);
            player.draw();
            result.targets[0].draw();
        }
    },
                subSkill:{
                    damage:{
                        audio:"ext:王朝更替_权:2",
                        trigger:{
                            player:"damageBegin",
                        },
                        filter:function (event){
        if(event._notrigger.contains(event.player)) return false;
        return event.card&&event.card.name=='sha'&&event.player.isAlive();
    },
                        forced:true,
                        content:function (){
        trigger.num++;
    },
                        sub:true,
                    },
                },
            },
            starshebian:{
                group:"starshebian_star",
                marktext:"舌",
                init:function (player){
        player.storage.starshebian=0;
    },
                intro:{
                    content:function (storage){
            return '当前有'+storage+'枚“舌”';
        },
                },
                mark:true,
                audio:"ext:王朝更替_权:2",
                trigger:{
                    global:"gameStart",
                },
                forced:true,
                content:function (){
        player.storage.starshebian+=7;
        player.syncStorage('starshebian');
        game.log(player,'获得了7枚“舌”');
    },
                subSkill:{
                    star:{
                        audio:"ext:王朝更替_权:2",
                        trigger:{
                            player:"phaseBegin",
                        },
                        forced:true,
                        filter:function (event,player){
        return player.storage.starshebian<7;
    },
                        content:function (){
        player.storage.starshebian+=7-player.storage.starshebian;
    },
                        sub:true,
                    },
                },
            },
            starduanyan:{
                audio:"ext:王朝更替_权:2",
                group:"starduanyan_damage",
                trigger:{
                    player:"useCard",
                },
                forced:true,
                content:function (){
        if(player.storage.starshebian>0){
            player.draw();
            player.storage.starshebian--;
        }
        else{
            player.chooseToDiscard(true);
        }
    },
                subSkill:{
                    damage:{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
        return player.storage.starshebian==0;
    },
                        content:function (){
        'step 0'
        player.chooseTarget(true,get.prompt('starduanyan_damage'),function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return -get.attitude(_status.event.player,target);
        });
        'step 1'
        if(result.bool){
            player.logSkill('starduanyan_damage',result.targets);
            event.target=result.targets[0];
            player.damage(event.target,'fire');
            player.say('诸葛村夫，你敢......');
            event.target.damage('thunder');
            event.player.say('住口！我从未见过有如此厚颜无耻之人！');
        }
    },
                        sub:true,
                    },
                },
            },
            starmiyan:{
                enable:"phaseUse",
                usable:1,
                audio:"ext:王朝更替_权:2",
                filterTarget:function (card,player,target){
        return player!=target&&target.storage.startianxing>player.storage.starshebian;
    },
                content:function (){
        target.storage.startianxing-=target.storage.startianxing-player.storage.starshebian;
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
            staraojun:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"phaseEnd",
                },
                frequent:true,
                filter:function (event,player){
        return game.roundNumber>=15;
    },
                content:function (){
        player.storage.starxuezhan++;
    },
            },
            starxuezhan:{
                marktext:"豹",
                init:function (player){
        player.storage.starxuezhan=0;
    },
                intro:{
                    content:function (storage){
            return '当前有'+storage+'只“豹”';
        },
                },
                mark:true,
                audio:"ext:王朝更替_权:2",
                trigger:{
                    global:"gameStart",
                },
                forced:true,
                content:function (){
        player.storage.starxuezhan+=7;
        player.syncStorage('starxuezhan');
        game.log(player,'获得了七只“豹”');
    },
                group:["starxuezhan_top1","starxuezhan_top2","starxuezhan_top3"],
                subSkill:{
                    "top1":{
                        trigger:{
                            player:"phaseBegin",
                        },
                        filter:function (event,player){
        return player.countCards('j')>0&&player.storage.starxuezhan>0;
    },
                        content:function (){
        player.storage.starxuezhan--;
        player.chooseToDiscard(true,'j',player.countCards('j'));
    },
                        sub:true,
                    },
                    "top2":{
                        trigger:{
                            player:"phaseDrawBegin",
                        },
                        filter:function (event,player){
        return player.storage.starxuezhan>0;
    },
                        content:function (){
        player.storage.starxuezhan--;
        trigger.num+=2;
    },
                        sub:true,
                    },
                    "top3":{
                        trigger:{
                            player:"shaBegin",
                        },
                        filter:function (event,player){
        return player.storage.starxuezhan>0;
    },
                        content:function (){
        player.storage.starxuezhan--;
        trigger.directHit=true;
    },
                        sub:true,
                    },
                },
            },
            starjianren:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"loseHpEnd",
                },
                forced:true,
                content:function (){
        player.damage();
    },
            },
            starrangli:{
                enable:"phaseUse",
                usable:1,
                audio:"ext:王朝更替_权:2",
                filterTarget:function (card,player,target){
        return player!=target&&!target.isLinked();
    },
                content:function (){
        "step 0"
        target.storage.starrangli_li=player;
        target.addTempSkill('starrangli_li');
        "step 1"
        player.useCard({name:'sha'},target);
    },
                subSkill:{
                    li:{
                        mark:"character",
                        intro:{
                            name:"让梨",
                            content:"你获得了孔融的'梨'",
                        },
                        sub:true,
                        trigger:{
                            player:"changeHp",
                        },
                        forced:true,
                        content:function (){
        player.draw();
    },
                    },
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
            starzhixin:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    global:"useCard",
                },
                filter:function (event,player,card){
        return event.player.name=='caocaoweiwustar';
    },
                content:function (card){
        player.gain(trigger.cards);
        player.$gain2(trigger.cards);
        trigger.player.draw();
    },
            },
            starjiejian:{
                mod:{
                    cardUsable:function (card,player,num){
            return Infinity;
        },
                },
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"shaBegin",
                },
                forced:true,
                content:function (){
        player.draw();
    },
            },
            starkuangshe:{
                trigger:{
                    player:"phaseDrawBegin",
                },
                direct:true,
                audio:"ext:王朝更替_权:2",
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('starkuangshe'),function(card,player,target){
            return player!=target&&target.name=='caocaoweiwustar';
        }).set('ai',function(target){
            return -get.attitude(_status.event.player,target);
        });
        "step 1"
        if(result.bool){
            player.logSkill('starkuangshe',result.targets);
            event.target=result.targets[0];
            event.target.chooseToDiscard(player.storage.starchujiao_mark,true);
        }
        else{
            event.finish();
        }
    },
                ai:{
                    expose:0.2,
                },
            },
            staryitian:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"damageBefore",
                    source:"damageBefore",
                },
                filter:function (event){
        if(event._notrigger.contains(event.player)) return false;
        return event.card&&event.card.name=='sha'&&event.player.isAlive();
    },
                frequent:true,
                content:function (){
        player.draw();
    },
            },
            "starjiuyin2":{
                audio:"ext:王朝更替_权:2",
                subSkill:{
                    mark:{
                        mod:{
                            maxHandcard:function (player,num){
            if(player.hp<player.maxHp) return num+player.maxHp-player.hp;
        },
                        },
                        mark:true,
                        marktext:"阴",
                        intro:{
                            name:"九阴",
                            content:"你拥有[九阴真经]",
                        },
                        sub:true,
                    },
                },
            },
            starjiuyin:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    source:"damageEnd",
                },
                content:function (){
        'step 0'
        player.addSkill('starjiuyin2_mark');
        'step 1'
        player.loseHp();
        player.draw();
        player.storage.starjiuyin2_mark++;
    },
            },
            starxianglong:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"damageEnd",
                },
                content:function (){
        'step 0'
        player.addSkill('starxianglong2_mark');
        'step 1'
        player.discardPlayerCard(true,trigger.source,'he');
        player.storage.starxianglong2_mark++;
    },
            },
            "starxianglong2":{
                audio:"ext:王朝更替_权:2",
                subSkill:{
                    mark:{
                        mark:true,
                        marktext:"降",
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
                        intro:{
                            name:"降龙",
                            content:"你拥有[降龙十八掌]",
                        },
                        sub:true,
                    },
                },
            },
            starrencheng:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    global:"dying",
                },
                priority:10,
                content:function (){
        trigger.player.draw();
    },
            },
            starliyue:{
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                audio:"ext:王朝更替_权:2",
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('starliyue'),function(card,player,target){
            return player!=target&&target.countCards('he')>0;
        }).set('ai',function(target){
            return -get.attitude(_status.event.player,target);
        });
        "step 1"
        if(result.bool){
            player.logSkill('starliyue',result.targets);
            event.target=result.targets[0];
            player.gainPlayerCard(event.target,true);
        }
        else{
            event.finish();
        }
    },
                ai:{
                    expose:0.2,
                },
            },
            starmaxiong:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"phaseDrawEnd",
                },
                direct:true,
                content:function (){
        'step 0'
        player.chooseToDiscard('h',2,'请弃置两张牌');
        'step 1'
        if(result.bool){
            player.draw(2);
        }
        else{
            event.finish();
        }
    },
            },
            starzhaku:{
                audio:"ext:王朝更替_权:2",
                enable:"phaseUse",
                usable:1,
                filterCard:true,
                check:function (card){
        return 8-get.value(card);
    },
                position:"he",
                content:function (){
        player.loseHp();
        player.draw(3);
    },
                ai:{
                    order:8,
                    result:{
                        player:function (player){
                if(player.hp<=2) return player.countCards('h')==0?1:0;
                if(player.countCards('h',{name:'sha',color:'red'})) return 1;
                return player.countCards('h')<=player.hp?1:0;
            },
                    },
                    effect:function (card,player,target){
            if(get.tag(card,'damage')){
                if(player.hasSkillTag('jueqing',false,target)) return [1,1];
                return 1.2;
            }
            if(get.tag(card,'loseHp')){
                if(player.hp<=1) return;
                return [0,0];
            }
        },
                },
            },
            starjianshi:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"changeHp",
                },
                content:function (){
        player.draw();
    },
            },
            starjiedao:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    global:"gameStart",
                    player:"enterGame",
                },
                forced:true,
                content:function (){
        game.log(player,'加入了游戏');
    },
                derivation:["qibaodao","wy_meirenji","wy_xiaolicangdao"],
                global:"starjiedao_jie",
                subSkill:{
                    jie:{
                        audio:"ext:王朝更替_权:2",
                        enable:"phaseUse",
                        usable:1,
                        position:"he",
                        prompt:"弃置两张牌并随机获得[七宝刀]，[美人计]或[笑里藏刀]",
                        filterCard:true,
                        selectCard:2,
                        filter:function (event,player){
        for(var i=0;i<game.players.length;i++){
            if(game.players[i].hasSkill('starjiedao')){
                return true;
            }
        }
        return false;
    },
                        content:function (){
        var list=['qibaodao','wy_meirenji','wy_xiaolicangdao'];
         player.gain(game.createCard(list.randomGet()),'draw');
    },
                        ai:{
                            order:1,
                            result:{
                                player:1,
                            },
                        },
                        sub:true,
                    },
                },
            },
            starjilian:{
                derivation:["wushuang","lijian"],
                enable:"phaseUse",
                usable:1,
                position:"h",
                filterCard:true,
                selectCard:1,
                audio:"ext:王朝更替_权:2",
                filterTarget:true,
                content:function (){
        if(target.sex=='male'&&target!=player)target.addTempSkill('wushuang',{player:"phaseEnd"});
        if(target.sex=='female'&&target!=player)target.addTempSkill('lijian',{player:"phaseEnd"});
        if(target==player)player.draw(3);
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
            starjibian:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    global:"phaseDrawBegin",
                },
                filter:function (event,player){
        return event.player.isDamaged();
    },
                frequent:function (event,player){
        return event.player==player;
    },
                content:function (){
        'step 0'
        if(trigger.player==player){
            trigger.num++;
        }
        else{
            trigger.num--;
        }
        'step 1'
        if(player.name=='xumuyunxingstar'){
            player.awakenSkill('starjibian');
            player.storage.starjibian=true;
        }
    },
            },
            starxuanzhan:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"phaseDrawBegin",
                },
                direct:true,
                filter:function (event,player){
        for(var i=0;i<game.players.length;i++){
            if(game.players[i].hp==1){
                return true;
            }
        }
        return false;
    },
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt('starxuanzhan'),[1,Infinity],function(card,player,target){
            return target.hp==1&&target!=player;
        }).set('ai',function(target){
            return get.attitude(player,target);
        });
        'step 1'
        if(result.bool){
            player.logSkill('starxuanzhan',result.targets);
            trigger.num++;
            game.asyncDraw(result.targets);
        }
    },
                ai:{
                    expose:0.3,
                    threaten:1.3,
                },
            },
            starbaodao:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                check:function (){
        return false;
    },
                filter:function (event,player){
        return event.player.countCards('h')==0;
    },
                content:function (){
        trigger.num++;
    },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                if(get.tag(card,'damage')&&target.countCards('h')==0) return [1,-2];
            },
                    },
                },
            },
            starmojiang:{
                audio:"ext:王朝更替_权:2",
                group:"starmojiang2",
                trigger:{
                    global:"dieAfter",
                },
                forced:true,
                filter:function (event,player){
        return event.source==player
    },
                content:function (){
        player.gainMaxHp();
        var chat=['我乃魔将华雄，已斩潘凤','还有谁敢来应战！'].randomGet();
        player.say(chat);
    },
            },
            starlijue:{
                audio:"ext:王朝更替_权:4",
                trigger:{
                    player:"gainMaxHpEnd",
                },
                forced:true,
                content:function (){
        player.draw(2);
    },
            },
            starguosi:{
                audio:"ext:王朝更替_权:4",
                trigger:{
                    player:"loseMaxHpEnd",
                },
                forced:true,
                content:function (){
        player.draw(2);
    },
            },
            starxurong:{
                audio:"ext:王朝更替_权:4",
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                content:function (){
        "step 0"
        player.chooseTarget(true,get.prompt('starxurong'),function(card,player,target){
            return lib.filter.targetEnabled({name:'sha'},player,target);
        }).set('ai',function(target){
            return get.effect(target,{name:'sha'},_status.event.player);
        });
        "step 1"
        if(result.bool){
            player.logSkill('starxurong');
            player.useCard({name:'sha'},result.targets,false);
        }
    },
                ai:{
                    threaten:function (player,target){
            return 1.6;
        },
                },
            },
            starchengpu:{
                audio:"ext:王朝更替_权:4",
                trigger:{
                    global:"phaseBegin",
                },
                filter:function (event){
        return event.player.name=='fuben_yuanshaoyuanjunstar'||event.player.name=='fuben_chengyiyuanjunstar';
    },
                content:function (){
        player.useCard({name:'jiu'},trigger.player);
    },
            },
            starhandang:{
                audio:"ext:王朝更替_权:4",
                enable:"chooseToUse",
                filterCard:function (card){
        return get.suit(card)=='diamond';
    },
                position:"he",
                viewAs:{
                    name:"sha",
                    suit:"diamond",
                    number:12,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"diamond","number":12,"name":"fangtian","cardid":"5692434328","_transform":"translateX(0px)","clone":{"name":"fangtian","suit":"diamond","number":12,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":1782},"timeout":1766,"original":"h"}],
                },
                viewAsFilter:function (player){
        if(!player.countCards('h',{suit:'diamond'})) return false;
    },
                prompt:"将一张方片手牌当杀使用",
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
                    order:function (){
                        if(_status.event.player.hasSkillTag('presha',true,null,true)) return 10;
                        return 3;
                    },
                },
            },
            starzumao:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    global:"damageEnd",
                },
                forced:true,
                filter:function (event){
        return event.player.name=='fuben_yuanshaoyuanjunstar'||event.player.name=='fuben_chengyiyuanjunstar';
    },
                content:function (){
        trigger.player.changeHujia();
    },
            },
            "starmojiang2":{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"damageEnd",
                },
                forced:true,
                content:function (){
        "step 0"
        player.chooseTarget(true,'魔将:请选择一名角色',get.prompt('starmojiang2'),function(card,player,target){
            return lib.filter.targetEnabled({name:'sha'},player,target);
        }).set('ai',function(target){
            return get.effect(target,{name:'sha'},_status.event.player);
        });
        "step 1"
        if(result.bool){
            player.logSkill('starmojiang2');
            player.useCard({name:'sha'},result.targets,false);
        }
    },
                ai:{
                    threaten:function (player,target){
            return 1.6;
        },
                },
            },
            starzuijiu:{
                "init2":function (player){
player.markSkill('starzuijiu')
player.storage.starzuijiu=1;
for(var i=0;i<player.node.marks.childNodes.length;i++){
if(player.node.marks.childNodes[i].name=='starzuijiu'){
player.node.marks.childNodes[i].setBackground('time_wusongstar','character');
player.node.marks.childNodes[i].innerHTML='';
}
}    
},
                mark:true,
                intro:{
                    content:function (storage){
return '武松:醉酒'
},
                },
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"phaseDrawBegin",
                },
                check:function (event,player){
        if(player.countCards('h')<3) return false;
        if(!player.hasSha()) return false;
        return game.hasPlayer(function(current){
            return get.attitude(player,current)<0&&player.canUse('sha',current);
        });
    },
                content:function (){
        player.addTempSkill('starzuijiu2','phaseEnd');
        trigger.num--;
    },
            },
            starfuchou:{
                "init2":function (player){
player.markSkill('starfuchou')
player.storage.starfuchou=1;
for(var i=0;i<player.node.marks.childNodes.length;i++){
if(player.node.marks.childNodes[i].name=='starfuchou'){
player.node.marks.childNodes[i].setBackground('time_likuistar','character');
player.node.marks.childNodes[i].innerHTML='';
}
}    
},
                mark:true,
                intro:{
                    content:function (storage){
return '李逵:复仇'
},
                },
                audio:"ext:王朝更替_权:2",
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
            "starzuijiu2":{
                "init2":function (player){
player.markSkill('starzuijiu2')
player.storage.starzuijiu2=1;
for(var i=0;i<player.node.marks.childNodes.length;i++){
if(player.node.marks.childNodes[i].name=='starzuijiu2'){
player.node.marks.childNodes[i].setBackground('time_songjiangjishiyustar','character');
player.node.marks.childNodes[i].innerHTML='';
}
}    
},
                mark:true,
                intro:{
                    content:function (storage){
return '宋江:武松:醉酒'
},
                },
                audio:"ext:王朝更替_权:2",
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
            starcaishu:{
                audio:"ext:王朝更替_权:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return player!=target;
    },
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                filterCard:true,
                selectCard:[1,Infinity],
                discard:false,
                lose:true,
                content:function (){
        player.$give(cards.length,target);
        target.gain(cards,player);
        player.chooseDrawRecover(true);
    },
                ai:{
                    order:1,
                    result:{
                        target:function (player,target){
                if(target.hasSkillTag('nogain')) return 0;
                if(player.countCards('h')==1&&player.countCards('h','du')) return -1;
                if(player.hp<=2&&player.countCards('h','shan')) return 0;
                if(target.countCards('h')+player.countCards('h')>target.hp+2) return 0;
                if(get.attitude(player,target)>3) return 1;
                return 0;
            },
                    },
                },
            },
            stardianjiang:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    global:"roundStart",
                },
                forced:true,
                filter:function (event,player){
        return game.roundNumber==2;
    },
                content:function (){
        'step 0'
        player.chooseTarget('选择【点将】的目标',lib.translate.stardianjiang_info,true,function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            var att=get.attitude(_status.event.player,target);
            if(att>0) return att+1;
            if(att==0) return Math.random();
            return att;
        });
        'step 1'
        var list=['starzuijiu','starfuchou'];
        if(result.bool){
            var target=result.targets[0];
            player.line(target,'green');
            game.log(target,'成为了','【点将】','的目标');
            target.addSkill(list.randomGet());
        }
    },
            },
            starzhaoan:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    global:"roundStart",
                },
                filter:function (event,player){
        return game.roundNumber==1;
    },
                forced:true,
                content:function (){
      ui.backgroundMusic.src=lib.assetURL+'extension/王朝更替_权/梁山模式.mp3';
        var skills=[]; 
            for(var i in lib.character){ 
                for(var j=0;j<lib.character[i][3].length;j++){ 
                    var info=lib.skill[lib.character[i][3][j]];
                    if(info&&(info.gainable||!info.unique)&&!info.zhuSkill){
                        skills.add(lib.character[i][3][j]); 
                    }
                } 
            }
            var link=skills.randomGet();            
            player.addSkill(link);                                
           game.log(player,'获得技能','【'+get.translation(link)+'】');
    },
            },
            "starzhanshen_damage":{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    source:"damageBegin",
                },
                direct:true,
                content:function (){
        'step 0'
        player.chooseToDiscard('弃置一张牌并令此伤害+1',get.prompt2('starzhanshen_damage'),'he').set('ai',function(card){
            return 8-get.useful(card);
        }).set('logSkill','starzhanshen_damage');
        'step 1'
        if(result.bool){
            trigger.num++;
        }
    },
            },
            starzhanshen:{
                group:"starzhanshen_damage",
                trigger:{
                    source:"damageBefore",
                },
                direct:true,
                audio:"ext:王朝更替_权:2",
                content:function (){
        "step 0"
        player.chooseTarget('请令其对一名其他角色造成一点伤害',get.prompt('starzhanshen'),function(card,player,target){
            return target!=trigger.player;
        }).set('ai',function(target){
            return -get.attitude(_status.event.player,target);
        });
        "step 1"
        if(result.bool){
            player.logSkill('starzhanshen',result.targets);
            event.target=result.targets[0];
            event.target.damage(trigger.player,true);
        }
        else{
            event.finish();
        }
    },
                ai:{
                    expose:0.2,
                },
            },
            starwuxin:{
                audio:"ext:王朝更替_权:2",
                mark:true,
                "init2":function (player){
player.markSkill('starwuxin')
player.storage.starwuxin=0;
for(var i=0;i<player.node.marks.childNodes.length;i++){
if(player.node.marks.childNodes[i].name=='starwuxin'){
player.node.marks.childNodes[i].setBackground('swk_tangseng2','character');
player.node.marks.childNodes[i].innerHTML='';
}
}    
},
                intro:{
                    content:function (storage){
            return '你拥有'+storage+'枚悟心'
      },
                },
                trigger:{
                    global:"dieAfter",
                },
                forced:true,
                content:function (){
        player.storage.starwuxin++;
        player.syncStorage('starwuxin');
        game.log(player,'获得了一枚“悟心”标记');
    },
            },
            starhuoyan:{
                audio:"ext:王朝更替_权:2",
                mode:["boss"],
                group:["starhuoyan_henshin"],
                trigger:{
                    global:"gameStart",
                    player:"enterGame",
                },
                forced:true,
                content:function (){
        player.gainMaxHp(4);
        player.recover(4);
        player.addSkill('starbajie');
        ui.backgroundMusic.src=lib.assetURL+'extension/王朝更替_权/九九八十一.mp3';
    },
                subSkill:{
                    henshin:{
                        mode:["boss"],
                        audio:2,
                        enable:"phaseUse",
                        usable:1,
                        prompt:"你可以转换你的标记",
                        check:function (card){
        return 6-get.value(card)
    },
                        content:function (){
        if(player.hasSkill('starbajie')){
            player.removeSkill('starbajie');
            player.addSkill('starshaseng');
        }
        else{
            player.removeSkill('starshaseng');
            player.addSkill('starbajie');
        }
    },
                        ai:{
                            order:1,
                            result:{
                                player:1,
                            },
                            threaten:1.5,
                        },
                        sub:true,
                    },
                },
            },
            starweitang:{
                audio:"ext:王朝更替_权:2",
                mode:["boss"],
                trigger:{
                    player:"dieBefore",
                },
                forced:true,
                content:function (){
        trigger.cancel();
        player.init('yxs_lishimin');
    },
            },
            starbianhua:{
                forbid:["boss"],
                audio:"ext:王朝更替_权:1",
                trigger:{
                    player:"useCard",
                },
                filter:function (event,player){
        return get.itemtype(event.cards)=='cards'&&get.position(event.cards[0])=='d';
    },
                content:function (){
        'step 0'
        player.gain(trigger.cards);
        player.$gain2(trigger.cards);
        player.draw();
        'step 1'
        player.addTempSkill('starbianhua2');
        'step 2'
        if(player.countCards('h')<=5)player.skip('phaseDiscard');
    },
            },
            "starbianhua2":{
                mark:true,
                marktext:"紧",
                mod:{
                    cardEnabled:function (){
            return false;
        },
                    cardUsable:function (){
            return false;
        },
                    cardRespondable:function (){
            return false;
        },
                    cardSavable:function (){
            return false;
        },
                },
                intro:{
                    content:"不能使用或打出卡牌",
                },
            },
            "swk9981":{
                forbid:["boss"],
                popup:false,
                audio:"ext:王朝更替_权:2",
                trigger:{
                    global:"gameStart",
                },
                forced:true,
                content:function (){
        'step 0'
        game.log('正在载入音乐......');
        ui.backgroundMusic.src=lib.assetURL+'extension/王朝更替_权/悟空.mp3';
        'step 1'
        game.log('正在播放音乐:《悟空》');
    },
            },
            starshengun:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"phaseDrawBegin",
                },
                frequent:true,
                content:function (){
        if(player.storage.starwuxin>=1&&player.storage.starwuxin<3)trigger.num++;
        if(player.storage.starwuxin>=3)trigger.num+=2;
    },
                ai:{
                    threaten:1.3,
                },
            },
            starbajie:{
                audio:"ext:王朝更替_权:4",
                mark:true,
                "init2":function (player){
player.markSkill('starbajie')
player.storage.starbajie=0;
for(var i=0;i<player.node.marks.childNodes.length;i++){
if(player.node.marks.childNodes[i].name=='starbajie'){
player.node.marks.childNodes[i].setBackground('swk_bajie2','character');
player.node.marks.childNodes[i].innerHTML='';
}
}    
},
                intro:{
                    content:function (storage){
            return '你的状态为"八戒"'
      },
                },
                trigger:{
                    player:"phaseDiscardBefore",
                },
                frequent:function (event,player){
        return !player.needsToDiscard();
    },
                filter:function (event,player){
        return player.countUsed()==0;
    },
                content:function (){
        player.addTempSkill('starbajie2',{player:"phaseBegin"});
    },
            },
            "starbajie2":{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"damageBefore",
                },
                forced:true,
                content:function (){
        trigger.cancel();
    },
            },
            starshaseng:{
                mark:true,
                "init2":function (player){
player.markSkill('starshaseng')
player.storage.starshaseng=0;
for(var i=0;i<player.node.marks.childNodes.length;i++){
if(player.node.marks.childNodes[i].name=='starshaseng'){
player.node.marks.childNodes[i].setBackground('swk_shaseng2','character');
player.node.marks.childNodes[i].innerHTML='';
}
}    
},
                intro:{
                    content:function (storage){
            return '你的状态为"沙僧"'
      },
                },
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                audio:"ext:王朝更替_权:2",
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('starshaseng'),function(card,player,target){
            return player!=target&&target.countCards('he')>0;
        }).set('ai',function(target){
            return -get.attitude(_status.event.player,target);
        });
        "step 1"
        var Goku=['2','3']
        if(result.bool){
            player.logSkill('starshaseng',result.targets);
            event.target=result.targets[0];
            event.target.chooseToDiscard(5,true);
            event.target.damage(Goku.randomGet(),'thunder');
        }
        else{
            event.finish();
        }
    },
                ai:{
                    expose:0.2,
                },
            },
            starjiafu:{
                mod:{
                    maxHandcard:function (player,num){
            if(game.roundNumber<=15) return num+3;
        },
                },
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                content:function (){
        if(game.roundNumber<=15)player.say('黛玉妹妹，快看。');
        if(game.roundNumber>=10){
            player.chooseToDiscard(true);
            player.say('奈何贾府败落......');
        }
    },
            },
            starlingxian:{
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        return player.countCards('h')==player.hp;
    },
                filterCard:true,
                selectCard:-1,
                discard:false,
                lose:true,
                content:function (){
        player.draw(player.hp*2);
        player.say('女娲石，显灵了！');
    },
                ai:{
                    order:1,
                    result:{
                        target:function (player,target){
                if(target.hasSkillTag('nogain')) return 0;
                if(player.countCards('h')==1&&player.countCards('h','du')) return -1;
                if(player.hp<=2&&player.countCards('h','shan')) return 0;
                if(target.countCards('h')+player.countCards('h')>target.hp+2) return 0;
                if(get.attitude(player,target)>3) return 1;
                return 0;
            },
                    },
                },
            },
            starrenzi:{
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                audio:"zongzuo",
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('starrenzi'),function(card,player,target){
            return player!=target&&target.countCards('he')>0;
        }).set('ai',function(target){
            return -get.attitude(_status.event.player,target);
        });
        "step 1"
        if(result.bool){
            player.logSkill('starrenzi',result.targets);
            event.target=result.targets[0];
            player.discardPlayerCard(event.target,true);
        }
        else{
            player.draw();
        }
    },
                mod:{
                    maxHandcard:function (player,num){
            return num+2;
        },
                },
                ai:{
                    expose:0.2,
                },
            },
            starzhizhan:{
                enable:"phaseUse",
                usable:1,
                audio:"zhige",
                filterTarget:function (card,player,target){
        return player!=target&&target.isDamaged();
    },
                content:function (){
        "step 0"
        target.recover();
        "step 1"
        player.loseHp();
        'step 2'
        if(target.countCards('e')==0)player.draw();
    },
                ai:{
                    order:5.5,
                    result:{
                        player:function (player){
                if(player.hp>2) return 4
                return -1;
            },
                        target:4,
                    },
                },
            },
            starjueyi:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:["changeHp","phaseEnd"],
                },
                forced:true,
                content:function (){
        
    },
                mod:{
                    maxHandcard:function (player,num){
            return num+player.storage.starjima;
        },
                    globalFrom:function (from,to,current){
            return current-from.hp+1;
        },
                    globalTo:function (from,to,current){
            return current+to.maxHp-to.hp;
        },
                },
            },
            starjima:{
                audio:"ext:王朝更替_权:2",
                enable:"phaseUse",
                position:"e",
                filterCard:true,
                selectCard:1,
                prompt:"弃置一张装备牌，然后获得一匹'白马'并摸一张牌",
                check:function (card){return 4-get.useful(card)},
                content:function (){
        'step 0'
        player.storage.starjima++;
        player.syncStorage('starjima');
        game.log(player,'获得了1匹“白马"');
        'step 1'
        player.draw();
    },
                ai:{
                    order:1,
                    result:{
                        player:1,
                    },
                },
                marktext:"白",
                init:function (player){
        player.storage.starjima=0;
    },
                intro:{
                    content:function (storage){
            return '当前有'+storage+'匹“白马”';
        },
                },
                mark:true,
            },
            starxsjueyan:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    source:"damageBegin",
                    player:"damageBegin",
                },
                filter:function (event,player){
        return get.type(event.card,'trick')=='trick';
    },
                content:function (){
        trigger.cancel();
    },
            },
            starzhujue:{
                audio:"ext:王朝更替_权:2",
                enable:"phaseUse",
                filterTarget:function (card,player,target){
        return player!=target&&target.countCards('h')>0;
    },
                filter:function (event,player){
        var num;
        if(get.mode()=='identity'){
            num=get.population('zhong');
        }
        else{
            num=1;
        }
        if(player.getStat().skill.starzhujue>=num) return false;
        return player.countCards('h')>0;
    },
                content:function (){
        "step 0"
        player.chooseToCompare(target);
        "step 1"
        if(result.bool){
        var list=['sha','juedou','jingleishan'];
            player.useCard(target,game.createCard(list.randomGet()));
        }
        else{
            if(player.name=='xumuyunxingstar'){
                player.draw();
            }
            else{
                target.chooseToDiscard('he',true);
            }
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
            stardanfu:{
                audio:"ext:王朝更替_权:2",
                skillAnimation:"legend",
                animationColor:"metal",
                enable:"phaseUse",
                content:function (){
        player.turnOver();
        player.addTempSkill('qianxing',{player:"phaseBegin"});
        player.awakenSkill('stardanfu');
        player.storage.stardanfu=true;
    },
                ai:{
                    result:{
                        target:-1,
                        player:function (player){
                if(player.hp==1)return 4;
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
            staryinren:{
                audio:"ext:王朝更替_权:2",
                mod:{
                    maxHandcard:function (player,num){
            return num+player.maxHp;
        },
                },
                trigger:{
                    player:"phaseDiscardBegin",
                },
                forced:true,
                content:function (){
        'step 0'
        player.chooseToDiscard('he','请重铸一张牌');
        'step 1'
        if(result.bool){
            player.draw();
        }
        else{
            event.finish();
        }
    },
            },
            starbaiyi:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                filter:function (event,player){
        return player.countUsed()>=4&&player.countCards('h')<player.hp;
    },
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('starbaiyi'),function(card,player,target){
            return player!=target;
        }).set('ai',function(target){
            return -get.attitude(_status.event.player,target);
        });
        "step 1"
        if(result.bool){
            var num=[0,0,1,1,1,2].randomGet();
            player.logSkill('starbaiyi',result.targets);
            event.target=result.targets[0];
            event.target.damage(num);
            game.log(event.target,'受到了'+num+'点伤害');
        }
        else{
            event.finish();
        }
    },
                ai:{
                    expose:0.2,
                },
            },
            starronghu:{
                mod:{
                    maxHandcard:function (player,num){
            return num+1;
        },
                },
                trigger:{
                    global:"gainBegin",
                },
                audio:"ext:王朝更替_权:2",
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
        trigger.player.showHandcards();
    },
            },
            starmengjiao:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"phaseDrawBegin",
                },
                content:function (){
        trigger.num+=player.hp-1;
        player.addTempSkill('starmengjiao2');
    },
                ai:{
                    threaten:1.3,
                },
            },
            "starmengjiao2":{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"phaseDrawEnd",
                },
                popup:false,
                forced:true,
                filter:function (event){
        return event.cards&&event.cards.length;
    },
                content:function (){
        'step 0'
        event.cards=trigger.cards.slice(0);
        player.chooseCardTarget({
            filterCard:function(card){
                return _status.event.getParent().cards.contains(card);
            },
            selectCard:[2,Infinity],
            filterTarget:function(card,player,target){
                return player!=target;
            },
            ai1:function(card){
                if(ui.selected.cards.length>0) return -1;
                if(card.name=='du') return 20;
                return (_status.event.player.countCards('h')-_status.event.player.hp);
            },
            ai2:function(target){
                var att=get.attitude(_status.event.player,target);
                if(ui.selected.cards.length&&ui.selected.cards[0].name=='du'){
                    return 1-att;
                }
                return att-4;
            },
            forced:true,
            prompt:'请选择要送人的卡牌'
        });
        "step 1"
        if(result.bool){
            player.line(result.targets,'green');
            result.targets[0].gain(result.cards,player);
            player.$give(result.cards.length,result.targets[0]);
            game.delay(0.7);
        }
    },
            },
            starzhentian:{
                audio:"ext:王朝更替_权:2",
                enable:"phaseUse",
                prompt:"摸两张牌并封印技能",
                content:function (){
        "step 0"
        player.draw(2);
        "step 1"
        player.addTempSkill('fengyin');
        player.say('真田家族的荣耀，由我来守护！');
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
            starfujun:{
                group:"starfujun2",
                trigger:{
                    global:"gameStart",
                    player:"enterGame",
                },
                forced:true,
                content:function (){
        var num=[1,2].randomGet();
        player.recover(num);
    },
            },
            "starfujun2":{
                trigger:{
                    player:"recoverEnd",
                },
                forced:true,
                audio:"ext:王朝更替_权:2",
                content:function (){
        "step 0"
        player.chooseTarget(true,get.prompt('starfujun2'),function(card,player,target){
            return player!=target;
        }).set('ai',function(target){
            return -get.attitude(_status.event.player,target);
        });
        "step 1"
        if(result.bool){
            player.logSkill('starfujun2',result.targets);
            event.target=result.targets[0];
            event.target.damage();
            player.removeSkill('fengyin');
            player.say('整顿大军，复丰臣天下！');
        }
        else{
            event.finish();
        }
    },
                ai:{
                    expose:0.2,
                },
            },
            "_starzhentianxingcun":{
                trigger:{
                    global:"gameStart",
                },
                forced:true,
                popup:false,
                filter:function (event,player){
        return player.name=='zhentianxingcunwanstar'||player.name2=='zhentianxingcunwanstar';
    },
                content:function (){
        var num=3;
        var num1=1;
        if(game.zhu==player&&game.players.length>=5){
            num++;
            num1++;
        };
        player.maxHp=num;
        player.hp=num1;
        player.update();
    },
            },
            staryouzhu:{
                audio:"ext:王朝更替_权:4",
                trigger:{
                    player:"phaseBegin",
                },
                frequent:true,
                content:function (){
        var friend=['staryinji','starzhanji','starxsjueyan','staryuhuo','starzhencheng'].randomGet();
        player.addTempSkill(friend,{player:"phaseBefore"});
    },
            },
            starpdgyinji:{
                mod:{
                    maxHandcard:function (player,num){
            return num=4;
        },
                },
                trigger:{
                    player:"phaseBefore",
                },
                audio:"ext:王朝更替_权:2",
                forced:true,
                content:function (){
        player.chooseToDiscard(100,'j',true);
        if(player.countCards('h','sha')==0){
            player.recover();
            player.turnOver(false);
            player.link(false);
        }
    },
            },
            starluoma:{
                zhuSkill:true,
                audio:"ext:王朝更替_权:2",
                trigger:{
                    global:"damageEnd",
                },
                forced:true,
                filter:function (event,player){
        return player.hasZhuSkill('starluoma')&&event.player.isAlive();
    },
                content:function (){
        trigger.source.gainPlayerCard(true,'hej',trigger.player);
    },
            },
            starzhengzhan:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"phaseDrawBegin",
                },
                direct:true,
                content:function (){
        "step 0"
        trigger.num+=Math.floor(player.storage.starcaiguo/3);
        player.chooseTarget(get.prompt('starzhengzhan'),function(card,player,target){
            return lib.filter.targetEnabled({name:'sha'},player,target);
        }).set('ai',function(target){
            return get.effect(target,{name:'sha'},_status.event.player);
        });
        "step 1"
        if(result.bool){
            player.logSkill('starzhengzhan');
            player.useCard({name:'sha'},result.targets,false);
        }
    },
                ai:{
                    threaten:function (player,target){
            return 1.6;
        },
                },
            },
            starcaiguo:{
                marktext:"裁",
                init:function (player){
        player.storage.starcaiguo=0;
    },
                intro:{
                    content:function (storage){
            return '当前有'+storage+'个“裁国”';
        },
                },
                mark:true,
                audio:"ext:王朝更替_权:2",
                trigger:{
                    global:"dieAfter",
                },
                forced:true,
                content:function (){
        player.storage.starcaiguo++;
        player.syncStorage('starcaiguo');
        game.log(player,'获得了一枚“裁国”');
    },
            },
            startianliu:{
                audio:"ext:王朝更替_权:2",
                enable:"phaseUse",
                content:function (){
        "step 0"
        player.addSkill('starzhanwu');
        player.addSkill('fengyin');
        "step 1"
        player.say('战胜自己，才能成为最高的强者。');
    },
                derivation:"starzhanwu",
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
            starshanji:{
                forced:true,
                mod:{
                    maxHandcard:function (player,num){
            if(player.hasSkill('fengyin')) return num+1;
        },
                    globalFrom:function (from,to,distance){
            if(from.hasSkill('fengyin')) return distance-1;
        },
                },
            },
            starzhanwu:{
                group:"starzhanwu_remove",
                trigger:{
                    player:"useCard",
                },
                filter:function (event,player){
        if(event.card.name!='sha') return false;
        return game.hasPlayer(function(current){
            return !event.targets.contains(current)&&get.distance(player,current)<=1&&player.canUse('sha',current);
        });
    },
                forced:true,
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt('starzhanwu'),function(card,player,target){
            return !_status.event.source.contains(target)&&get.distance(player,target)<=1&&player.canUse('sha',target);
        }).set('source',trigger.targets).set('ai',function(target){
            var player=_status.event.player;
            return get.effect(target,{name:'sha'},player,player);
        });
        'step 1'
        if(result.bool){
            if(!event.isMine()&&!_status.connectMode) game.delayx();
            event.target=result.targets[0];
            player.say('武士之道，定将乱舞天下！');
        }
        else{
            event.finish();
        }
        'step 2'
        player.logSkill('starzhanwu',event.target);
        trigger.targets.push(event.target);
    },
                subSkill:{
                    remove:{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
        return player.countUsed()>=3;
    },
                        content:function (){
                player.draw();
        player.removeSkill('fengyin');
        player.removeSkill('starzhanwu');
    },
                        sub:true,
                    },
                },
                ai:{
                    effect:{
                        player:function (card,player,target){
                if(card.name=='sha'){
                    if(player._starzhanwutmp) return;
                    player._starzhanwutmp=true;
                    if(get.effect(target,{name:'sha'},player,player)<=0){
                        delete player._starzhanwutmp;
                        return;
                    }
                    if(game.hasPlayer(function(current){
                        return current!=target&&get.distance(player,current)<=1&&
                        player.canUse('sha',current)&&get.effect(current,{name:'sha'},player,player)>0;
                    })){
                        delete player._starzhanwutmp;
                        return [1,1];
                    }
                    delete player._starzhanwutmp;
                }
            },
                    },
                },
            },
            starlongjue:{
                group:["starlongjue_one","starlongjue_two","starlongjue_there"],
            },
            "starlongjue_theone":{
                mark:false,
            },
            "starlongjue_thetwo":{
                mark:false,
            },
            "starlongjue_one":{
                trigger:{
                    player:"phaseUseEnd",
                },
                direct:true,
                filter:function (event,player){
        return player.countUsed()>=5;
    },
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('starlongjue_one'),function(card,player,target){
            return player!=target;
        }).set('ai',function(target){
            return -get.attitude(_status.event.player,target);
        });
        "step 1"
        if(result.bool){
            player.logSkill('starlongjue_one',result.targets);
            event.target=result.targets[0];
            event.target.damage('thunder');
            player.addSkill('starlongjue_theone');
            event.target.addSkill('starlongjue_mark');
            player.say('上吧！二天一流！');
        }
        else{
            event.finish();
        }
    },
                ai:{
                    expose:0.2,
                },
            },
            "starlongjue_two":{
                trigger:{
                    player:"phaseUseEnd",
                },
                direct:true,
                filter:function (event,player){
        return player.hasSkill('starlongjue_theone');
    },
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('starlongjue_two'),function(card,player,target){
            return player!=target&&!target.hasSkill('starlongjue_mark');
        }).set('ai',function(target){
            return -get.attitude(_status.event.player,target);
        });
        "step 1"
        if(result.bool){
            player.logSkill('starlongjue_two',result.targets);
            event.target=result.targets[0];
            event.target.damage('thunder');
            player.addSkill('starlongjue_thetwo');
            event.target.addSkill('starlongjue_mark');
        }
        else{
            player.addTempSkill('qianxing',{player:'phaseBefore'});
            player.awakenSkill('starlongjue');
            player.storage.starlongjue=true;
        }
    },
                ai:{
                    expose:0.2,
                },
            },
            "starlongjue_there":{
                trigger:{
                    player:"phaseUseEnd",
                },
                direct:true,
                filter:function (event,player){
        return player.hasSkill('starlongjue_thetwo');
    },
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('starlongjue_there'),function(card,player,target){
            return player!=target&&!target.hasSkill('starlongjue_mark');
        }).set('ai',function(target){
            return -get.attitude(_status.event.player,target);
        });
        "step 1"
        if(result.bool){
            player.logSkill('starlongjue_there',result.targets);
            event.target=result.targets[0];
            event.target.damage('thunder');
            player.awakenSkill('starlongjue');
        player.storage.starlongjue=true;
        }
        else{
            player.awakenSkill('starlongjue');
        player.storage.starlongjue=true;
        }
    },
                ai:{
                    expose:0.2,
                },
            },
            "starlongjue_mark":{
                mark:false,
            },
            stardinu:{
                derivation:"stardinu_zhu",
                trigger:{
                    player:"phaseDrawEnd",
                },
                direct:true,
                audio:"ext:王朝更替_权:2",
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('stardinu'),function(card,player,target){
            return player!=target;
        }).set('ai',function(target){
            return -get.attitude(_status.event.player,target);
        });
        "step 1"
        if(result.bool){
            player.logSkill('stardinu',result.targets);
            event.target=result.targets[0];
            player.draw();
            event.target.damage();
            player.addTempSkill('stardinu2');
        }
        else{
            event.finish();
        }
    },
                ai:{
                    expose:0.2,
                },
            },
            starfenshu:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"phaseDiscardBegin",
                },
                content:function (){
        "step 0"
        if(typeof event.count!='number'){
            // event.count=trigger.cards.length-1;
            event.count=1;
        }
        var recover=0,lose=0,players=game.filterPlayer();
        for(var i=0;i<players.length;i++){
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
        var prompt=get.prompt('starfenshu')+'（剩余'+get.cnNumber(event.count)+'次）';
        player.chooseControl('发动',
        ui.create.dialog(get.prompt('starfenshu'),'hidden')).ai=function(){
            if(lose>recover&&lose>0) return 0;
            if(lose<recover&&recover>0) return 1;
            return 2;
        }
        "step 1"
        if(result.control=='cancel2'){
            event.finish();
        }
        else{
            player.logSkill('starfenshu');
            event.bool=(result.control=='发动');
            event.num=0;
            event.players=game.filterPlayer();
        }
        "step 2"
        if(event.num<event.players.length){
            var target=event.players[event.num];
            if(event.bool){
                target.chooseToDiscard('he',true,'请弃置一张牌');
                
            }
            event.num++;
            event.redo();
        }
        "step 3"
        if(event.count>1){
            event.count--;
            event.goto(0);
        }
        'step 4'
        player.draw(player.maxHp);
                player.awakenSkill('starfenshu');
        player.storage.starfenshu=true;
    },
                ai:{
                    expose:0.1,
                    threaten:2,
                },
            },
            starhuangzun:{
                zhuSkill:true,
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"respond",
                },
                filter:function (event,player){
        return event.card.name=='shan'&&player.hasZhuSkill('starhuangzun')&&!player.hasSkill('starciqin');
    },
                frequent:true,
                content:function (){
        'step 0'
        var list=[];
        if(!player.hasSkill('starjingke')){
            list.push('starjingke');
        }
        if(!player.hasSkill('stargaojianli')){
            list.push('stargaojianli');
        }
        if(!player.hasSkill('starzhangliang')){
            list.push('starzhangliang');
        }
        if(list.length){
            player.chooseControl(list).set('prompt','选择获得一项技能');
        }
        'step 1'
        player.addSkill(result.control);
        player.popup(result.control);
        game.log(player,'获得技能','【'+get.translation(result.control)+'】');
        if(player.hasSkill('starjingke')&&player.hasSkill('stargaojianli')&&player.hasSkill('starzhangliang')){
            player.addSkill('starciqin');
                player.removeSkill('stardinu');
                player.addSkill('stardinu_zhu');
        }
    },
                subSkill:{
                    end:{
                        trigger:{
                            player:"phaseEnd",
                        },
                        filter:function (player){
                return player.hasSkill('starjingke')&&player.hasSkill('stargaojianli')&&player.hasSkill('starzhangliang');
            },
                        content:function (){
                
            },
                        sub:true,
                    },
                },
            },
            "stardinu2":{
                mod:{
                    cardEnabled:function (card){if(card.name=='sha') return false},
                },
            },
            "stardinu_zhu":{
                trigger:{
                    player:"phaseDrawEnd",
                },
                direct:true,
                audio:"ext:王朝更替_权:2",
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('stardinu'),function(card,player,target){
            return player!=target;
        }).set('ai',function(target){
            return -get.attitude(_status.event.player,target);
        });
        "step 1"
        if(result.bool){
            player.logSkill('stardinu',result.targets);
            event.target=result.targets[0];
            event.target.damage();     
        }
        else{
            event.finish();
        }
    },
                ai:{
                    expose:0.2,
                },
            },
            starciqin:{
                mark:true,
                marktext:"刺",
                intro:{
                    name:"刺秦",
                    content:"你躲过了三次危机",
                },
            },
            starjingke:{
                mark:true,
                "init2":function (player){
player.markSkill('starjingke')
player.storage.starjingke=0;
for(var i=0;i<player.node.marks.childNodes.length;i++){
if(player.node.marks.childNodes[i].name=='starjingke'){
player.node.marks.childNodes[i].setBackground('yz_jingke','character');
player.node.marks.childNodes[i].innerHTML='';
}
}    
},
                intro:{
                    content:function (storage){
            return '荆轲:图穷匕见:已发动'
      },
                },
            },
            stargaojianli:{
                mark:true,
                "init2":function (player){
player.markSkill('stargaojianli')
player.storage.stargaojianli=0;
for(var i=0;i<player.node.marks.childNodes.length;i++){
if(player.node.marks.childNodes[i].name=='stargaojianli'){
player.node.marks.childNodes[i].setBackground('yz_gaojianli','character');
player.node.marks.childNodes[i].innerHTML='';
}
}    
},
                intro:{
                    content:function (storage){
            return '高渐离:铅鼓盲袭:已发动'
      },
                },
            },
            starzhangliang:{
                mark:true,
                "init2":function (player){
player.markSkill('starzhangliang')
player.storage.starzhangliang=0;
for(var i=0;i<player.node.marks.childNodes.length;i++){
if(player.node.marks.childNodes[i].name=='starzhangliang'){
player.node.marks.childNodes[i].setBackground('yz_zhangliang','character');
player.node.marks.childNodes[i].innerHTML='';
}
}    
},
                intro:{
                    content:function (storage){
            return '张良:力士砸車:已发动'
      },
                },
            },
            starxindan:{
                audio:"ext:王朝更替_权:2",
                mod:{
                    maxHandcard:function (player,num){
            return num+2;
        },
                },
            },
            startuqiangshenghua:{
                audio:"tuqiang",
                trigger:{
                    player:"respond",
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
            starzhenqian:{
                audio:"ext:王朝更替_权:2",
                filter:function (event,player){
        return player.name=='yxs_goujian'||player.name2=='yxs_goujian';
    },
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                content:function (){
        player.clearSkills();
        player.addSkill('startuqiangshenghua');
        player.addSkill('bazhen');
        player.addSkill('starxindan');
    },
            },
            starzhexianshenghua:{
                trigger:{
                    player:"loseEnd",
                },
                filter:function (event,player){
        if(player==_status.currentPhase) return false;
        for(var i=0;i<event.cards.length;i++){
            if(event.cards[i].original&&event.cards[i].original!='j') return true;
        }
        return false;
    },
                frequent:true,
                content:function (){
        player.draw();
    },
            },
            starxiansuo:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    global:"phaseEnd",
                },
                filter:function (event,player){
        return event.player!=player;
    },
                direct:true,
                content:function (){
        'step 0'
        player.chooseToDiscard('he',1,'请弃置一张牌');
        'step 1'
        if(result.bool){
            player.viewHandcards(trigger.player);
        }
        else{
            event.finish();
        }
    },
            },
            starlongquan:{
                enable:"phaseUse",
                usable:1,
                audio:"ext:王朝更替_权:2",
                filterTarget:function (card,player,target){
        return player!=target;
    },
                content:function (){
        "step 0"
        player.showHandcards();
        "step 1"
        player.viewHandcards(target);
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
            starlijian:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    source:"damageBegin",
                },
                content:function (){
        var e1=player.getEquip('staryuewanggoujianjian');
        if(e1){
        player.discard(e1);
             }
        player.draw(2);
        trigger.num++;
    },
            },
            staryuewang:{
            },
            starshixian:{
                audio:"ext:王朝更替_权:2",
                filter:function (event,player){
        return player.name=='yxs_libai'||player.name2=='yxs_libai';
    },
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                content:function (){
        player.removeSkill('zhexian');
        player.addSkill('starzhexianshenghua');
        player.addSkill('starxiansuo');
    },
            },
            "gz_kangkaistar":{
                audio:"kaikang",
                trigger:{
                    global:"shaBegin",
                },
                filter:function (event,player){
        return event.target.isFriendOf(player);
    },
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
            trigger.target.chooseBool('是否装备'+get.translation(event.card)+'并弃置一张牌？').set('ai',function(){
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
            trigger.target.chooseToDiscard(true,1,'请弃置一张牌');
        }
    },
                ai:{
                    threaten:1.1,
                },
            },
            "gz_longyinstar":{
                trigger:{
                    global:"shaBegin",
                },
                audio:"longyin",
                direct:true,
                filter:function (event,player){
        return event.target==event.targets[0]&&player.countCards('he')>0&&event.card.name=='sha'&&
        _status.currentPhase==event.player&&event.parent.parent.parent.name=='phaseUse'&&event.player.isFriendOf(player);
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
        var next=player.chooseToDiscard(get.prompt('gz_longyinstar'),'he');
        next.logSkill=['gz_longyinstar',trigger.player];
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
                player.chooseToDiscard(true,1,'请弃置一张牌');
            }
            // player.logSkill('gz_longyinstar',trigger.player);
        }
    },
                ai:{
                    expose:0.2,
                },
            },
            starjianglue:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"phaseEnd",
                },
                content:function (){
        "step 0"
        event.cards=get.cards(3);
        player.chooseCardButton(event.cards,1,'选择获得一张牌').set('ai',get.buttonValue);
        "step 1"
        if(result.bool){
            var choice=[];
            for(var i=0;i<result.links.length;i++){
                choice.push(result.links[i]);
                cards.remove(result.links[i]);
            }
            for(var i=0;i<cards.length;i++){
                ui.cardPile.appendChild(cards[i]);
            }
            player.gain(choice,'draw');
            game.log(player,'获得了一张牌');
        }
        else{
            player.gain(event.cards);
            player.damage();
        }
    },
            },
            starwpzhenwei:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"damageEnd",
                },
                content:function (){
        trigger.source.moveCard(true);
        player.moveCard(true);
    },
            },
            starzhongji:{
                enable:"phaseUse",
                usable:1,
                audio:"ext:王朝更替_权:2",
                filterTarget:function (card,player,target){
        return player!=target;
    },
                content:function (){
        "step 0"
        player.loseHp();
        target.damage();
        "step 1"
        player.addTempSkill('starzhongji2',{player:'phaseBegin'});
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
            "starzhongji2":{
                intro:{
                    name:"忠戟",
                    content:"你可以替别的角色抵挡伤害。",
                },
                audio:"ext:王朝更替_权:2",
                mark:true,
                marktext:"忠",
                trigger:{
                    global:"damageBegin",
                },
                filter:function (event,player){
        return event.player!=player;
    },
                content:function (){
        trigger.cancel();
        player.damage(trigger.num,trigger.source);
    },
            },
            staryingbian:{
                trigger:{
                    global:["phaseBegin"],
                },
                forced:true,
                popup:false,
                unique:true,
                derivation:["wangxi","tianbian"],
                content:function (){
        player.removeAdditionalSkill('staryingbian');
        var list=[];
        if(trigger.player==player){
            list.push('wangxi');
        }
        if(trigger.player!=player){
            list.push('tianbian');
        }
        if(list.length){
            player.addAdditionalSkill('staryingbian',list);
        }
    },
            },
            starhubian:{
                audio:"zhuandui",
                trigger:{
                    player:"damageEnd",
                },
                filter:function (event,player){
        return player.countCards('h')>0&&event.source.countCards('h')>0;
    },
                content:function (){
        "step 0"
        player.chooseToCompare(trigger.source);
        "step 1"
        if(result.bool){
            player.recover();
        }
    },
            },
            starhuangbian:{
                trigger:{
                    global:"gainEnd",
                },
                audio:"zhuandui",
                usable:1,
                filter:function (event,player){
        return _status.currentPhase==player&&event.player!=player;
    },
                content:function (){
        trigger.player.addTempSkill('starhuangbian2');
    },
            },
            "starhuangbian2":{
                mark:true,
                marktext:"辩",
                mod:{
                    cardEnabled:function (){
            return false;
        },
                    cardUsable:function (){
            return false;
        },
                    cardRespondable:function (){
            return false;
        },
                    cardSavable:function (){
            return false;
        },
                },
                intro:{
                    content:"不能使用或打出卡牌",
                },
            },
            starjiangkai:{
                audio:"ext:王朝更替_权:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return !target.hasSkill('starjiangkai2');
    },
                filterCard:true,
                selectCard:-1,
                discard:false,
                lose:true,
                content:function (){
        target.addSkill('starjiangkai2');
    },
                ai:{
                    order:1,
                    result:{
                        target:function (player,target){
                if(target.hasSkillTag('nogain')) return 0;
                if(player.countCards('h')==1&&player.countCards('h','du')) return -1;
                if(player.hp<=2&&player.countCards('h','shan')) return 0;
                if(target.countCards('h')+player.countCards('h')>target.hp+2) return 0;
                if(get.attitude(player,target)>3) return 1;
                return 0;
            },
                    },
                },
            },
            starweima:{
                audio:"ext:王朝更替_权:1",
                trigger:{
                    player:"dieBegin",
                },
                direct:true,
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('starweima'),function(card,player,target){
            return player!=target;
        }).set('ai',function(target){
            var num=get.attitude(_status.event.player,target);
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
            player.logSkill('starweima',target);
            target.addSkill('feiying');
        }
    },
                ai:{
                    expose:0.5,
                },
            },
            "starjiangkai2":{
                mod:{
                    globalTo:function (from,to,distance){
            return distance+1;
        },
                },
                mark:true,
                marktext:"慨",
                intro:{
                    name:"将慨",
                    content:"你拥有一匹马",
                },
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                content:function (){
        player.removeSkill('starjiangkai2');
        trigger.num--;
        player.draw();
    },
            },
            stardaotan:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"phaseDrawBegin",
                },
                direct:true,
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('stardaotan'),function(card,player,target){
            return player!=target&&target.countCards('h')>0;
        }).set('ai',function(target){
            return -get.attitude(_status.event.player,target)/target.countCards('h');
        });
        "step 1"
        if(result.bool){
            player.logSkill('stardaotan',result.targets[0]);
            var target=result.targets[0];
            trigger.cancel();
            player.chooseToCompare(target);
        }
        else{
            event.finish();
        }
        "step 2"
        player.recover();
        player.gain([result.player,result.target]);
        player.$gain2([result.player,result.target]);
    },
                ai:{
                    expose:0.1,
                },
            },
            starzongxin:{
                trigger:{
                    player:"recoverEnd",
                },
                direct:true,
                audio:"ext:王朝更替_权:2",
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('starzongxin'),function(card,player,target){
            return player!=target&&target.countCards('hej')>0;
        }).set('ai',function(target){
            return -get.attitude(_status.event.player,target);
        });
        "step 1"
        if(result.bool){
            player.logSkill('starzongxin',result.targets);
            event.target=result.targets[0];
            player.discardPlayerCard('hej',event.target,true);
        }
        else{
            event.finish();
        }
    },
                ai:{
                    expose:0.2,
                },
                subSkill:{
                    discard:{
                        trigger:{
                            player:["chooseToCompareAfter","compareMultipleAfter"],
                            target:["chooseToCompareAfter","compareMultipleAfter"],
                        },
                        direct:true,
                        content:function (){
        'step 0'
        player.chooseToDiscard(1,'请重铸一张牌');
        'step 1'
        if(result.bool){
            player.draw();
        }
    },
                        sub:true,
                    },
                },
                group:"starzongxin_discard",
            },
            starliangtun:{
                audio:"ext:王朝更替_权:2",
                group:"starliangtun_end",
                global:"starliangtun_tiance",
                trigger:{
                    player:"useCard",
                },
                content:function (){
        trigger.cancel();
        player.storage.starliangtun_tiance++;
    },
                subSkill:{
                    end:{
                        trigger:{
                            player:"phaseEnd",
                        },
                        direct:true,
                        filter:function (player){
        return player.storage.starliangtun_tiance>0;
    },
                        content:function (){
        'step 0'
        player.chooseTarget(get.prompt('starliangtun_end'),function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return get.attitude(player,target);
        });
        'step 1'
        if(result.bool){
            player.logSkill('starliangtun_end',result.targets);
            var target=result.targets[0];
            player.storage.starliangtun_tiance--;
            target.markSkill('starchujiao_mark');
            target.storage.starchujiao_mark++;
            target.syncStorage('starchujiao_mark');
        }
    },
                        sub:true,
                    },
                    tiance:{
                        marktext:"田",
                        usable:1,
                        init:function (player){
        player.storage.starliangtun_tiance=0;
    },
                        intro:{
                            content:function (storage){
            return '当前有'+storage+'枚“田”';
        },
                        },
                        mark:true,
                        enable:"phaseUse",
                        audio:2,
                        filter:function (event,player){
        return !player.hasSkill('starliangtun')&&player.storage.starliangtun_tiance>0;
    },
                        filterTarget:function (card,player,target){
        return player!=target;
    },
                        content:function (){
        "step 0"
        player.storage.starliangtun_tiance--;
        player.useCard({name:'shunshou'},target);
        "step 1"
        player.judge();
        "step 2"
        switch(get.color(result.card)){
            case 'red':
                player.storage.starliangtun_tiance++;
                player.syncStorage('starliangtun_tiance');
                game.log(player,'获得了3枚“田”');
                break;
            case 'black':
                event.finish();
                break;
        }
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
                        sub:true,
                    },
                },
            },
            starshunxi:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event,player){
        return get.name(event.card,'sha')=='sha'&&player.isDamaged();
    },
                content:function (){
        player.storage.liangtun_tiance--;
        player.recover();
    },
            },
            startianxi:{
                global:"startianxi_card",
                audio:"ext:王朝更替_权:2",
                subSkill:{
                    card:{
                        filter:function (event,player){
        for(var i=0;i<game.players.length;i++){
            if(game.players[i].hasSkill('startianxi')){
                return true;
            }
        }
        return false;
    },
                        enable:"phaseUse",
                        usable:1,
                        audio:2,
                        position:"he",
                        filterCard:true,
                        selectCard:1,
                        filterTarget:function (card,player,target){
        return target.hasSkill('startianxi');
    },
                        content:function (){
                player.logSkill('startianxi');
        player.$give(cards.length,target);
        target.gain(cards,player,'draw');
                game.log(player,'获得了一张牌')
    },
                        ai:{
                            order:5.5,
                            result:{
                                player:function (player){
                        return -1;
                    },
                                target:4,
                            },
                        },
                        sub:true,
                    },
                },
            },
            starliangzi:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                content:function (){
        "step 0"
        event.cards=get.cards(5);
        player.chooseCardButton(event.cards,1,'选择对自己使用一张非基本牌').set('filterButton',function(button){
            return get.type(button.link)!='basic'&&get.type(button.link)!='jiqi';
        });
        "step 1"
        if(result.bool){
            var choice=[];
            for(var i=0;i<result.links.length;i++){
                choice.push(result.links[i]);
                cards.remove(result.links[i]);
            }
            for(var i=0;i<cards.length;i++){
                ui.cardPile.appendChild(cards[i]);
            }
            player.useCard(choice,player);
        }
   
    },
            },
            starweilin:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt('starweilin'),[1,2]).set('ai',function(target){
            return get.attitude(player,target);
        });
        'step 1'
        if(result.bool){
            player.logSkill('starweilin',result.targets);
            game.asyncDraw(result.targets);
        }
    },
                ai:{
                    expose:0.3,
                    threaten:1.3,
                },
            },
            starjigong:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"chooseToRespondBegin",
                },
                filter:function (event,player){
        if(event.responded) return false;
        if(!event.filterCard({name:'shan'})) return false;
        if(player.isLinked()) return false;
        return true;
    },
                check:function (event,player){
        if(get.attitude(player,_status.currentPhase)>0) return true;
        var nh=_status.currentPhase.countCards('h')+1;
        var players=game.filterPlayer();
        for(var i=0;i<players.length;i++){
            if(players[i].countCards('h')>nh){
                if(!player.hasShan()||get.attitude(player,players[i])<=0) return true;
            }
        }
        return false;
    },
                content:function (){
        player.link(true);
        trigger.untrigger();
        trigger.responded=true;
        trigger.result={bool:true,card:{name:'shan'}}
    },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                if(get.tag(card,'respondShan')&&current<0){
                    var nh=player.countCards('h');
                    var players=game.filterPlayer();
                    for(var i=0;i<players.length;i++){
                        if(players[i].countCards('h')>nh) return 0.4;
                    }
                }
            },
                    },
                },
            },
            starkunzhan:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"phaseBegin",
                },
                frequent:true,
                filter:function (event,player){
        return player.isLinked();
    },
                content:function (){
        "step 0"
        event.cards=get.cards(3);
        player.showCards(event.cards);
        "step 1"
        var num=0;
        for(var i=0;i<event.cards.length;i++){
            if(get.suit(event.cards[i])!='spade'){
                num++;
                event.cards[i].discard();
                event.cards.splice(i--,1);
            }
        }
        if(num){
            player.gain(event.cards);
            player.$gain2(event.cards);
        }
        "step 2"
        player.link(false);
    },
            },
            starhualue:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    global:"gameStart",
                    player:"enterGame",
                },
                forced:true,
                content:function (){
        player.forceCountChoose={chooseToUse:5,default:5};
        ui.auto.hide();
    },
                subSkill:{
                    red:{
                        trigger:{
                            player:"useCard",
                        },
                        forced:true,
                        content:function (){   
                delete player.forceCountChoose;
                ui.auto.show();
                player.logSkill('starhualue');
            },
                        sub:true,
                    },
                },
            },
            staraogong:{
                mod:{
                    maxHandcard:function (player,num){
            return num+1;
        },
                },
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"phaseDiscardBefore",
                },
                forced:true,
                content:function (){
        
    },
            },
            starhuicai:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"phaseEnd",
                },
                filter:function (event,player){
        return player.countUsed()==0;
    },
                forced:true,
                content:function (){
        player.draw(2);
    },
            },
            "占卜系统":{
                nobracket:true,
            },
            "爆发技":{
                nobracket:true,
            },
            "控场技":{
                nobracket:true,
            },
            "卖血技":{
                nobracket:true,
            },
            "输出技":{
                nobracket:true,
            },
            "占卜系统测试":{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    global:"gameStart",
                    player:"enterGame",
                },
                forced:true,
                filter:function (event,player,game){
        return player.identity=='zhu';
    },
                content:function (){
        'step 0'
        game.log('占卜系统'); 
        'step 1'
        game.log('正在进行占卜......');
        'step 2'
        var list=['爆发技','控场技','输出技','卖血技'].randomGet();
        game.log('本轮的运势是',''+get.translation(list)+'');
    },
            },
            starmolong:{
                subSkill:{
                    draw:{
                        trigger:{
                            player:"phaseDrawBegin",
                        },
                        forced:true,
                        filter:function (event,player){
                return player.hp==1;
            },
                        content:function (){
                player.logSkill('starmolong');
                trigger.num++;
            },
                        sub:true,
                    },
                },
                group:"starmolong_draw",
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:["damageBegin","loseHpBegin"],
                },
                priority:null,
                forced:true,
                filter:function (event,player){
        return player.countCards('e')>=4
    },
                content:function (){
        trigger.cancel();
    },
                mod:{
                    targetInRange:function (card,player,target,now){
            if(!player.getEquip(1)&&card.name=='sha') return true;
        },
                },
            },
            startianzhao:{
                enable:"phaseUse",
                usable:1,
                position:"he",
                audio:"ext:王朝更替_权:2",
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                filterCard:true,
                selectCard:[1,Infinity],
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
                event.target2.damage('fire',event.target1);
            }
            else{
                event.target1.damage('fire',event.target2);
            }
        }
    },
            },
            starhantong:{
                zhuSkill:true,
                audio:"ext:王朝更替_权:2",
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                filter:function (event,player){
        return player.hasZhuSkill('starhantong');
    },
                content:function (){
        trigger.nature='fire';
    },
            },
            starguihou:{
                trigger:{
                    player:"recoverEnd",
                },
                audio:"ext:王朝更替_权:2",
                direct:true,
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt('starguihou'),function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return get.attitude(player,target);
        });
        'step 1'
        var smath=get.cardPile2(function(card){
                return get.suit(card)=='heart'&&get.type(card)=='basic';
            });
        if(result.bool){
            player.logSkill('starguihou',result.targets);
            var target=result.targets[0];
            player.draw(2);
            target.gain(smath,'draw');
            game.log(target,'摸了一张牌。');
        }
    },
            },
            starsunxiang:{
                trigger:{
                    player:"dying",
                },
                priority:10,
                audio:"ext:王朝更替_权:2",
                direct:true,
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt('starsunxiang'),function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return get.attitude(player,target);
        });
        'step 1'
        if(result.bool){
            player.logSkill('starsunxiang',result.targets);
            result.targets[0].addSkill('starmfrjueyi');
            player.storage.starsunxiang=true;
            player.awakenSkill('starsunxiang');
        }
        'step 2'
        for(var i=0;i<game.players.length;i++){
        if(game.players[i].name=='zhaoyuntgstar'){
                player.chooseBool('是否令赵云摸三张牌？').set('ai',function(){                    
                     return get.attitude(player,game.players[i]);     
                    });    
             }
            
            }
            'step 3'
            if(result.bool){
            for(var i=0;i<game.players.length;i++){
            if(game.players[i].name=='zhaoyuntgstar'){
                game.players[i].draw(3);    
            }
            }
            }            
       else{
           event.finish();
       }
        'step 4'
        for(var i=0;i<game.players.length;i++){
            if(game.players[i].hasSkill('starmfrjueyi')){
            player.die();    
            }
            }
    },
            },
            starmfrjueyi:{
                mark:true,
                intro:{
                    name:"决意",
                    content:"每当你使用或打出一张【杀】或【闪】，你摸一张点数为K的牌",
                },
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:["shaEnd","shanEnd"],
                },
                frequent:true,
                content:function (){
        var hyper=get.cardPile2(function(card){
                return get.number(card)==13;
            });
        player.gain(hyper);
    },
            },
            starxihuan:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    global:"phaseDiscardBegin",
                },
                filter:function (event,player){
        return event.player.countCards('h')>event.player.hp;
    },
                content:function (){
        player.useCard({name:'sha'},trigger.player);
        trigger.cancel();
        player.say('奉公子之令，此箭诚不可偏！');
    },
            },
            starzuoming:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:"phaseDrawEnd",
                },
                filter:function (event,player){
        return player.countCards('h')>player.hp;
    },
                content:function (){
        player.skip('phaseUse');
        var hkdkd=get.cardPile2(function(card){
                return get.type(card)=='jiqi';
            });
        player.gain(hkdkd);
        player.say('辅佐齐桓公，当靠此物！');
    },
            },
            "gz_fuwanstar_equip1":{
                trigger:{
                    player:"shaBegin",
                },
                direct:true,
                audio:"ext:王朝更替_权:2",
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
        }).set('prompt',get.prompt('gz_fuwanstar_equip1'));
        "step 1"
        if(result.control=='draw_card'){
            player.draw();
            player.logSkill('moukui');
        }
        else if(result.control=='discard_card'&&trigger.target.countCards('he')){
            player.discardPlayerCard(trigger.target,'he',true).logSkill=['moukui',trigger.target];
        }
        else event.finish();
        "step 2"
        player.addTempSkill('moukui2','shaEnd');
    },
                ai:{
                    expose:0.1,
                },
            },
            "gz_fuwanstar_equip2":{
                inherit:"gz_fuwanstar_equip1",
                trigger:{
                    player:"shaBegin",
                },
                direct:true,
                audio:"ext:王朝更替_权:2",
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
        }).set('prompt',get.prompt('gz_fuwanstar_equip1'));
        "step 1"
        if(result.control=='draw_card'){
            player.draw();
            player.logSkill('moukui');
        }
        else if(result.control=='discard_card'&&trigger.target.countCards('he')){
            player.discardPlayerCard(trigger.target,'he',true).logSkill=['moukui',trigger.target];
        }
        else event.finish();
        "step 2"
        player.addTempSkill('moukui2','shaEnd');
    },
                ai:{
                    expose:0.1,
                },
            },
            "gz_fuwanstar_equip3":{
                inherit:"gz_fuwanstar_equip1",
                trigger:{
                    player:"shaBegin",
                },
                direct:true,
                audio:"ext:王朝更替_权:2",
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
        }).set('prompt',get.prompt('gz_fuwanstar_equip1'));
        "step 1"
        if(result.control=='draw_card'){
            player.draw();
            player.logSkill('moukui');
        }
        else if(result.control=='discard_card'&&trigger.target.countCards('he')){
            player.discardPlayerCard(trigger.target,'he',true).logSkill=['moukui',trigger.target];
        }
        else event.finish();
        "step 2"
        player.addTempSkill('moukui2','shaEnd');
    },
                ai:{
                    expose:0.1,
                },
            },
            "gz_fuwanstar_equip4":{
                inherit:"gz_fuwanstar_equip1",
                trigger:{
                    player:"shaBegin",
                },
                direct:true,
                audio:"ext:王朝更替_权:2",
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
        }).set('prompt',get.prompt('gz_fuwanstar_equip1'));
        "step 1"
        if(result.control=='draw_card'){
            player.draw();
            player.logSkill('moukui');
        }
        else if(result.control=='discard_card'&&trigger.target.countCards('he')){
            player.discardPlayerCard(trigger.target,'he',true).logSkill=['moukui',trigger.target];
        }
        else event.finish();
        "step 2"
        player.addTempSkill('moukui2','shaEnd');
    },
                ai:{
                    expose:0.1,
                },
            },
            "gz_fuwanstar_equip5":{
                inherit:"gz_fuwanstar_equip1",
                trigger:{
                    player:"shaBegin",
                },
                direct:true,
                audio:"ext:王朝更替_权:2",
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
        }).set('prompt',get.prompt('gz_fuwanstar_equip1'));
        "step 1"
        if(result.control=='draw_card'){
            player.draw();
            player.logSkill('moukui');
        }
        else if(result.control=='discard_card'&&trigger.target.countCards('he')){
            player.discardPlayerCard(trigger.target,'he',true).logSkill=['moukui',trigger.target];
        }
        else event.finish();
        "step 2"
        player.addTempSkill('moukui2','shaEnd');
    },
                ai:{
                    expose:0.1,
                },
            },
            "gz_guanningstar_equip1":{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                content:function (){
        player.draw();
    },
            },
            "gz_guanningstar_equip2":{
                inherit:"gz_guanningstar_equip1",
                audio:"ext:王朝更替_权:2",
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                content:function (){
        player.draw();
    },
            },
            "gz_guanningstar_equip3":{
                inherit:"gz_guanningstar_equip1",
                audio:"ext:王朝更替_权:2",
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                content:function (){
        player.draw();
    },
            },
            "gz_guanningstar_equip4":{
                inherit:"gz_guanningstar_equip1",
                audio:"ext:王朝更替_权:2",
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                content:function (){
        player.draw();
    },
            },
            "gz_guanningstar_equip5":{
                inherit:"gz_guanningstar_equip1",
                audio:"ext:王朝更替_权:2",
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                content:function (){
        player.draw();
    },
            },
            "gz_huaxinstar_equip1":{
                audio:"ext:王朝更替_权:4",
                enable:"chooseToUse",
                filterCard:function (card){
        return get.suit(card)=='spade';
    },
                position:"h",
                viewAs:{
                    name:"guohe",
                },
                viewAsFilter:function (player){
        if(!player.countCards('he',{suit:'spade'})) return false;
    },
                prompt:"将一张黑桃手牌当过河拆桥使用",
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
            "gz_huaxinstar_equip2":{
                inherit:"gz_huaxinstar_equip1",
                audio:"ext:王朝更替_权:4",
                enable:"chooseToUse",
                filterCard:function (card){
        return get.suit(card)=='spade';
    },
                position:"h",
                viewAs:{
                    name:"guohe",
                },
                viewAsFilter:function (player){
        if(!player.countCards('he',{suit:'spade'})) return false;
    },
                prompt:"将一张黑桃手牌当过河拆桥使用",
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
            "gz_huaxinstar_equip3":{
                inherit:"gz_huaxinstar_equip1",
                audio:"ext:王朝更替_权:4",
                enable:"chooseToUse",
                filterCard:function (card){
        return get.suit(card)=='spade';
    },
                position:"h",
                viewAs:{
                    name:"guohe",
                },
                viewAsFilter:function (player){
        if(!player.countCards('he',{suit:'spade'})) return false;
    },
                prompt:"将一张黑桃手牌当过河拆桥使用",
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
            "gz_huaxinstar_equip4":{
                inherit:"gz_huaxinstar_equip1",
                audio:"ext:王朝更替_权:4",
                enable:"chooseToUse",
                filterCard:function (card){
        return get.suit(card)=='spade';
    },
                position:"h",
                viewAs:{
                    name:"guohe",
                },
                viewAsFilter:function (player){
        if(!player.countCards('he',{suit:'spade'})) return false;
    },
                prompt:"将一张黑桃手牌当过河拆桥使用",
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
            "gz_huaxinstar_equip5":{
                inherit:"gz_huaxinstar_equip1",
                audio:"ext:王朝更替_权:4",
                enable:"chooseToUse",
                filterCard:function (card){
        return get.suit(card)=='spade';
    },
                position:"h",
                viewAs:{
                    name:"guohe",
                },
                viewAsFilter:function (player){
        if(!player.countCards('he',{suit:'spade'})) return false;
    },
                prompt:"将一张黑桃手牌当过河拆桥使用",
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
            starshicai:{
                enable:"phaseUse",
                usable:1,
                audio:"ext:王朝更替_权:2",
                filterCard:true,
                selectCard:1,
                discard:false,
                lose:true,
                filterTarget:function (card,player,target){
        return player!=target&&target.countCards('hej')>0;
    },
                content:function (){
        var dofwgdgebz=['你妈的，为什么？','将军才略，万人莫追。','将军才略，万人莫追。','将军才略，万人莫追。','将军才略，万人莫追。'].randomGet;
        player.gainPlayerCard('hej',target,'visible',true);
        player.say('将军才略，万人莫追。');
    },
                ai:{
                    result:{
                        target:-1,
                        player:function (player){
                return player.isLinked()?0:-0.8;
            },
                    },
                    order:10,
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
            starshijie:{
                trigger:{
                    player:["phaseEnd"],
                },
                direct:true,
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt('starshijie'),function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return get.attitude(player,target);
        });
        'step 1'
        if(result.bool){
            var target=result.targets[0];
            target.draw();
            target.turnOver(false);
            target.link(false);
            player.say('吾与管夷吾，自幼交好。');
        }
        'step 2'
        for(var i=0;i<game.players.length;i++){
        if(game.players[i].name=='guanzhongdsstar'){
                player.chooseBool('是否令管仲摸一张牌？').set('ai',function(){                    
                     return get.attitude(player,game.players[i]);     
                    });    
             }
            
            }
            'step 3'
            if(result.bool){
            for(var i=0;i<game.players.length;i++){
            if(game.players[i].name=='guanzhongdsstar'){
                game.players[i].draw();    
            }
            }
            }            
       else{
           event.finish();
       }
    },
            },
            staryangxi:{
                audio:"shengxi",
                trigger:{
                    player:"phaseJudgeBefore",
                },
                forced:true,
                content:function (){
        trigger.cancel();
    },
                mod:{
                    cardEnabled:function (card){if(card.name=='sha') return false},
                },
            },
            stardaizhan:{
                enable:"phaseUse",
                audio:"shoucheng",
                usable:1,
                filterTarget:function (card,player,target){
        return player!=target;
    },
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                prepare:"give",
                filterCard:{
                    name:"sha",
                },
                selectCard:[1,Infinity],
                discard:false,
                lose:true,
                content:function (){
        player.$give(cards.length,target);
        target.gain(cards,player);
        if(target.countCards('h')>player.countCards('h'))target.damage();
    },
                ai:{
                    order:1,
                    result:{
                        target:function (player,target){
                if(target.hasSkillTag('nogain')) return 0;
                if(player.countCards('h')==1&&player.countCards('h','du')) return -1;
                if(player.hp<=2&&player.countCards('h','shan')) return 0;
                if(target.countCards('h')+player.countCards('h')>target.hp+2) return 0;
                if(get.attitude(player,target)>3) return 1;
                return 0;
            },
                    },
                },
            },
            starqiyan:{
                enable:"phaseUse",
                audio:"ext:王朝更替_权:2",
                filterCard:{
                    suit:"spade",
                },
                filterTarget:function (card,player,target){
        return player!=target;
    },
                content:function (){
        "step 0"
        target.chooseToDiscard('he',player.maxHp-player.hp+1,true);
        "step 1"
        if(player.hp==1) player.recover();
        if(player.countCards('h')==0)player.gain(result.cards);
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
            starxiancai:{
                trigger:{
                    global:"gameStart",
                    player:"enterGame",
                },
                audio:"ext:王朝更替_权:2",
                derivation:"starzuozhu",
                forced:true,
                filter:function (){
        return game.players.length>1;
    },
                content:function (){
        'step 0'
        player.chooseTarget('选择【贤才】的目标',lib.translate.starxiancai_info,true,function(card,player,target){
            return target!=player&&!target.hasSkill('starzuozhu');
        }).set('ai',function(target){
            var att=get.attitude(_status.event.player,target);
            if(att>0) return att+1;
            if(att==0) return Math.random();
            return att;
        });
        'step 1'
        if(result.bool){
            var target=result.targets[0];
            player.line(target,'green');
            game.log(target,'成为了','【贤才】','的目标');
            target.storage.starzuozhu=player;
            target.removeSkill('startianle');
            target.addSkill('starzuozhu');
        }
    },
            },
            starzuozhu:{
                trigger:{
                    player:"dying",
                },
                mark:"character",
                intro:{
                    name:"佐助",
                    content:"每当你进入濒死状态时，若你没有手牌，你回复一点体力，若'贞节董允'在场，其摸一张牌。",
                },
                priority:10,
                forced:true,
                content:function (){
        var rider=[0,1].randomGet;
        if(player.countCards('h')==0){player.recover();}
        player.logSkill('starxiancai');
        for(var i=0;i<game.players.length;i++){
            if(game.players[i].name=='dongyunzhenjiestar'){
                game.players[i].draw();    
            }
            }
    },
            },
            starhujia:{
                audio:"ext:王朝更替_权:2",
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
        var next=player.chooseToDiscard('he',get.prompt('starhujia'));
        var check=lib.skill.starhujia.checkx(trigger,player);
        next.set('ai',function(card){
            if(_status.event.goon) return 8-get.value(card);
            return 0;
        });
        next.set('logSkill','starhujia');
        next.set('goon',check);
        "step 1"
        if(result.bool){
            trigger.source.gain(result.cards);
            trigger.source.chooseToDiscard('he',2,'请弃置两张牌并失去一点体力，否则其回复一点体力或摸一张牌。');
        }
        else{
            event.finish();
        }
        "step 2"
        if(result.bool){
            player.loseHp();
        }
        else{
            trigger.player.chooseDrawRecover(true,2);
        }
    },
                ai:{
                    expose:0.3,
                },
            },
            starqiuqing:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    global:"dieBefore",
                },
                filter:function (event,player){
        return event.player!=player;
    },
                content:function (){
        trigger.cancel();
        player.loseHp();
    },
                ai:{
                    expose:0.3,
                },
            },
            starxijun:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    global:"dying",
                },
                direct:true,
                priority:10,
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt('starxijun'),function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return get.attitude(player,target);
        });
        'step 1'
        if(result.bool){
            player.logSkill('starxijun',result.targets);
            var target=result.targets[0];
             target.draw();
            if(target==trigger.player)player.chooseDrawRecover(true);
        }
    },
            },
            starmeiying:{
                audio:"ext:王朝更替_权:2",
                enable:"phaseUse",
                filterCard:{
                    name:"sha",
                },
                usable:1,
                filterTarget:true,
                content:function (){
        'step 0'
        player.$give(cards.length,target);
        target.gain(cards,player);
        target.chooseToUse({name:'sha'},'魅影:使用一张杀并令鲍三娘回复一点体力，或者受到其一点伤害。');
        'step 1'
        if(result.bool){
            player.recover();
        }
        else{
            target.damage();
        }
    },
            },
            starguibian:{
                audio:2,
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return player!=target;
    },
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                filterCard:true,
                selectCard:1,
                discard:false,
                lose:true,
                content:function (){
        'step 0'
        player.$give(cards.length,target);
        target.gain(cards,player);
        if(target.group!='shen'){
            if(target.group=='wei'){
                target.showHandcards();
            }
            if(target.group=='shu'){
                target.damage();
            }
            if(target.group=='wu'){
                target.addTempSkill('fengyin');
            }
            if(target.group=='qun'){
                target.draw(player.maxHp-player.hp);
                target.turnOver();
            }
        }
        else{
            target.chooseToDiscard([2,Infinity],true);
        }
        'step 1'
        if(result.bool){
            player.gain(result.cards);
        }
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
            starjueshang:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    global:"dieBefore",
                },
                forced:true,
                priority:2000,
                content:function (){
        'step 0'
        trigger.player.clearSkills();
        trigger.player.chooseToDiscard(true,'he',3);
        'step 1'
        player.gain(result.cards);
    },
            },
            starxieyin:{
                mode:["guozhan"],
                audio:"ext:王朝更替_权:2",
                "init2":function (player){
        player.logSkill('starxieyin');
        player.setIdentity('ye');
        player.identity="ye";
        player.node.identity.dataset.color='starxieyin';
        player.identityShown=true;
    },
            },
            starxiyou:{
                trigger:{
                    player:["phaseBegin","damageEnd"],
                },
                forced:true,
                filter:function (event,player){
        return !player.getEquip('yuxi');
    },
                content:function (){
        if(trigger.name=='phase'){
            player.useCard(game.createCard('yuxi','spade',1),player);
        }
    },
                mod:{
                    canBeGained:function (card){
            if(get.position(card)=='e'&&get.subtype(card)=='equip5') return false;
        },
                },
            },
            starhuxi:{
                audio:2,
                mod:{
                    targetEnabled:function (card,player,target){
            if(player!=target&&player.getEquip(5)) return false;
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
            },
            starshoujun:{
                audio:"ext:王朝更替_权:2",
                trigger:{
                    player:["phaseBegin"],
                },
                derivation:"starxiyou",
                direct:true,
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt('starshoujun'),function(card,player,target){
            return target!=player&&target.identity=='zhu';
        }).set('ai',function(target){
            return get.attitude(player,target);
        });
        'step 1'
        if(result.bool){
            player.logSkill('starshoujun',result.targets);
            var target=result.targets[0];
            target.addSkill('starxiyou');
        player.removeSkill('starhuxi');
        player.gainMaxHp();
        player.recover();
        player.storage.starshoujun=true;
        player.awakenSkill('starshoujun');
        }
    },
            },
            starweimin:{
                enable:"phaseUse",
                audio:2,
                usable:1,
                filterTarget:function (card,player,target){
        return player!=target;
    },
                selectTarget:3,
                filterCard:true,
                selectCard:1,
                discard:false,
                lose:true,
                content:function (){
        target.draw();
    },
                ai:{
                    order:1,
                    result:{
                        target:function (player,target){
                if(target.hasSkillTag('nogain')) return 0;
                if(player.countCards('h')==1&&player.countCards('h','du')) return -1;
                if(player.hp<=2&&player.countCards('h','shan')) return 0;
                if(target.countCards('h')+player.countCards('h')>target.hp+2) return 0;
                if(get.attitude(player,target)>3) return 1;
                return 0;
            },
                    },
                },
            },
        },
        translate:{
            "starzhihui1":"制回",
            "starzhihui1_info":"你可以弃置一张牌，然后失去1点体力;当你失去一点体力后，你可以改为从1~2名其他角色各抽取一张手牌",
            "starzhihui2":"制回",
            "starzhihui2_info":"你可以弃置一张牌，然后失去1点体力。",
            starjuexing:"绝行",
            "starjuexing_info":"出牌阶段，你可以弃置三张牌，然后回复一点体力。",
            starjince:"进策",
            "starjince_info":"结束阶段，若你没有手牌，你可以摸四张牌",
            starduoshi:"夺势",
            "starduoshi_info":"当你失去最后的手牌时，你可以令一名其他角色摸两张牌或者回复一点体力。",
            starjunqian:"君谦",
            "starjunqian_info":";每当你一次失去至少两张牌时，你弃一张牌。",
            "starjunqian2":"君谦",
            "starjunqian2_info":"",
            starlangxin:"狼心",
            "starlangxin_info":"锁定技，游戏开始时，若你不是主公，你的身份为内;你的手牌上限为0。",
            starguxing:"孤行",
            "starguxing_info":"摸牌阶段，你可以选择补满手牌并摸两张牌。",
            starzhonghu:"冢虎",
            "starzhonghu_info":"弃牌阶段结束时，若你于此阶段弃置牌的数量不小于2且它们的花色各不相同，你可以获得一枚护甲。",
            "starwang1":"狼心",
            "starwang1_info":"",
            starshijun:"侍君",
            "starshijun_info":"锁定技，每当你进入濒死状态时，你回复1点体力并解除自身异常状态;游戏进行到第二轮时，你可以指定一名其他角色并令其成为\"君\"。",
            starshibai:"十败",
            "starshibai_info":"锁定技，你的手牌上限+2;当你死亡时，你弃置三张牌，然后你可以将这些牌分给任意角色。",
            starshisheng:"十胜",
            "starshisheng_info":"你可令\"君\"的摸牌阶段多摸一张牌;每当\"君\"使用一张牌，若其体力值为1，你可以摸一张牌;当\"君\"即将死亡时，你可以停止此结算并令其回复两点体力，然后你死亡。",
            "starshisheng3":"十胜",
            "starshisheng3_info":"",
            "starshisheng2":"十胜",
            "starshisheng2_info":"",
            staryiliang:"遗亮",
            "staryiliang_info":"锁定技，当你成为【杀】、【决斗】或【火攻】的目标时，若你手牌等于或大于你的体力值，则取消之",
            starxinji:"衅计",
            "starxinji_info":"出牌阶段限一次，你可以对一名角色使用，若其有装备牌，其弃置一张装备牌，若没有，其获得一枚\"衅\"。(锁定技，你不能打出【杀】直到回合结束。)",
            "starxinji2":"衅计",
            "starxinji2_info":"锁定技，你不能打出【杀】直到回合结束。",
            starduanyi:"断异",
            "starduanyi_info":"出牌阶段，你可以弃置两张牌并摸一张牌，然后获得以下技能直到回合结束。",
            starmiquan:"迷权",
            "starmiquan_info":"锁定技，你的手牌上限+X（X为女性角色数）",
            starqicai:"奇才",
            "starqicai_info":"锁定技，若你的装备区没有防具牌，视为你装备着【八卦阵】；若你的装备区没有坐骑牌，你的手牌上限+1；若你的装备区没有宝物牌，你使用锦囊牌无距离限制，本局游戏你视为拥有\"集智\"。",
            starhunliang:"婚亮",
            "starhunliang_info":"出牌阶段，你可以将一张【杀】交给一名本回合未获得过“观星”牌的其他角色，然后其于下个回合结束之前，其获得\"观星\"。",
            starcehuo:"策火",
            "starcehuo_info":"锁定技，当你受到火属性伤害时，你防止此伤害，你拥有\"火计\"。",
            starhunying:"婚英",
            "starhunying_info":"当你一次获得或失去至少两张牌后，你可以令一名其他角色获得\"奇才\"直到回合结束。",
            stardingfan:"订反",
            "stardingfan_info":"每当你受到1点伤害后，你可以依次获得伤害来源的三张牌，然后令其获得\"绝情\"直到回合结束。",
            starguixin:"鬼心",
            "starguixin_info":"出牌阶段限一次，你可以令一名有牌的其他角色选择一项：令你获得其装备区里所有的牌，然后你失去技能“鬼心”，然后获得直\"鬼才\"直到游戏结束；或弃置一张牌",
            stardingshang:"订殇",
            "stardingshang_info":"结束阶段，你可以令一名角色摸一张并展示之，若是装备牌，其立即装备之并回复一点体力，然后你失去\"订殇\"并令其获得\"伤势\"。",
            starqingzhen:"情贞",
            "starqingzhen_info":"你可以将一张黑色手牌当[闪]使用或打出，若如此做，你摸一张牌，然后获得\"绝情\"\"直到下一个回合结束。",
            "starqingzhen2":"情贞",
            "starqingzhen2_info":"",
            starhongzi:"虹姿",
            "starhongzi_info":"锁定技，摸牌阶段，你多摸一张牌，然后你选择获得以下技能直到下回合开始。",
            starxionglue:"雄略",
            "starxionglue_info":"弃牌阶段结束时，若你手牌数大于你的体力值，你可以弃置一名其他角色任意区域内的一张牌;若你没有手牌，你获得\"天妒\"直到下个回合开始。",
            starjianji:"间计",
            "starjianji_info":"限定技，出牌阶段，你可以弃置任意张手牌，并另一名其他角色弃置等量的牌，若如此做，你获得\"绝策\"直到下个回合开始。",
            "starhongzi2":"虹姿",
            "starhongzi2_info":"",
            "starxionglue2":"雄略",
            "starxionglue2_info":"",
            starlongji:"龙激",
            "starlongji_info":"你可以将你的任意一张锦囊牌当【杀】使用或打出。",
            starshenhun:"神魂",
            "starshenhun_info":"觉醒技，准备阶段，若你体力值为1，你失去一点体力上限，然后获得\"绝境\"、\"疾行\"和\"神速\"。",
            starjixing:"疾行",
            "starjixing_info":"锁定技，每当你使用\"龙激\"使用或打出一张【杀】时，你摸一张牌;你的红色【杀】无距离限制。",
            "starjixing2":"疾行",
            "starjixing2_info":"",
            "starlongduan2":"龙断",
            "starlongduan2_info":"",
            starlongduan:"龙断",
            "starlongduan_info":"锁定技，每当你因\"龙胆\"使用一张牌，你摸一张牌;每当你打出一张牌，你可以令一名其他角色摸一张牌，若你为\"碎皇甫朝云\"，你摸一张牌;你的手牌上限+1。",
            starhuzhu:"护主",
            "starhuzhu_info":"锁定技，游戏开始时，你获得技能\"龙胆\"，然后你指定一名角色并令其成为\"护主\"目标。(护主:你视为拥有\"天乐\"。)",
            "starhuzhu3":"护主",
            "starhuzhu3_info":"",
            "starhuzhu2":"护主",
            "starhuzhu2_info":"",
            staryanjun:"掩君",
            "staryanjun_info":"每当你使用一张红色【杀】，你可以令一名角色获得一枚护甲。",
            starduanhou:"断后",
            "starduanhou_info":"限定技，出牌阶段，你可以翻至背面并令一名角色摸三张牌，若其身份为\"主公\"，你获得\"龙胆\"、\"咆哮\"直到回合结束。",
            starzhongyi:"忠义",
            "starzhongyi_info":"锁定技，游戏开始时，若你的身份为\"内奸\"，你将身份改为\"忠臣\"，若如此做，且主公回合开始时你未阵亡，主公获得\"忠义\"印记。(弃牌阶段结束后，你弃置两张牌。)",
            "starzhongyi2":"忠义",
            "starzhongyi2_info":"锁定技，游戏开始时，若你的身份为\"内奸\"，你将身份改为\"忠臣\"，若如此做，且主公回合开始时你未阵亡，主公获得\"忠义\"印记。(弃牌阶段结束后，你弃置两张牌。)",
            "starzhongyi3":"忠义",
            "starzhongyi3_info":"结束阶段，你弃置两张牌",
            starqingde:"清德",
            "starqingde_info":"每当你回复一点体力，你可以令一名其他角色回复一点体力;每当你受到一点伤害，你可以立即获得伤害来源的一张牌。",
            "starqingde2":"清德",
            "starqingde2_info":"每当你回复一点体力，你可以令一名其他角色回复一点体力;每当你受到一点伤害，你可以立即获得伤害来源的一张牌。",
            starjiaowu:"交吴",
            "starjiaowu_info":"锁定技，每当你造成一点伤害，其随机装备一张装备牌，然后你进行一次判定:若为黑色，你摸一张牌;若为红色，你回复一点体力。",
            starjueyan:"偃决",
            "starjueyan_info":"出牌阶段限一次，你可以弃置一张装备牌并对一名角色造成一点伤害，然后其获得此装备。",
            starfufeng:"父风",
            "starfufeng_info":"锁定技，你不能成为[兵粮寸断]和[过河拆桥]的目标;每当你失去一张装备牌，你可以摸一张牌并弃置一名角色的一张牌。",
            starjuejin:"绝晋",
            "starjuejin_info":"限定技，你可以连续三次随机使用装备牌;若此时你体力值为1，你获得\"观星\"。",
            startongque:"铜雀",
            "startongque_info":"锁定技，你不能成为[铁索连环]的目标，若你手牌数不小于体力值，你视为拥有技能\"国色\";若你手牌数不大于体力值，你视为拥有技能\"天香\"。",
            starluanming:"乱命",
            "starluanming_info":"锁定技，若你一次性失去不少于两张牌，你横置武将并摸一张牌。",
            starnuxiao:"怒哮",
            "starnuxiao_info":"你对一名角色造成伤害前，你可以弃置一名角色的一张牌;若你拥有\"龙\"标记，你弃置一枚\"龙\"并摸一张牌。",
            stardahou:"大吼",
            "stardahou_info":"每当你使用一张装备牌，你可以对一名角色使用一张无距离限制的【杀】。",
            starsuji:"速击",
            "starsuji_info":"当你失去最后的手牌时，你可以令一名角色受到一点雷电伤害。",
            startianyin:"天音",
            "startianyin_info":"出牌阶段限一次，你可以弃置所有手牌，然后回复1点体力。",
            starbaoxin:"豹心",
            "starbaoxin_info":"锁定技，回合开始时，你获得以下技能。",
            staryijian:"义剑",
            "staryijian_info":"出牌阶段，你可以与一名角色拼点，若你赢，你的【杀】可以多指定一名角色;你的【杀】无距离限制;你可以多出一张【杀】;你获得\"神裔\"直到下个回合开始。",
            startianshi:"天誓",
            "startianshi_info":"限定技，出牌阶段，你可以失去三点体力，然后你获得技能\"英姿\"，随后获得效果:你的【杀】不能被响应;你的【杀】的目标翻面直到回合结束;你获得一个回合。",
            "startianshi2":"天誓",
            "startianshi2_info":"",
            "startianshi3":"天誓",
            "startianshi3_info":"",
            starshenyi:"神裔",
            "starshenyi_info":"锁定技，你的武将牌始终正面向上，你的判定区内的牌效果反转",
            starsanyue:"三约",
            "starsanyue_info":"出牌阶段限一次，你可以弃置一张手牌，然后令一名角色执行以下效果:若其有手牌，你弃置其一张手牌并令其摸一张牌;若其有装备牌，你弃置其一张装备牌并令其摸一张牌;若其有判定牌，你弃置其一张判定牌并令其摸一张牌;然后你摸一张牌。",
            starcanggong:"藏弓",
            "starcanggong_info":"主公技，锁定技，一名角色的回合结束时若其身份为\"忠臣\"，则改为\"内奸\";你与其他角色的距离+1。",
            startuli:"图利",
            "startuli_info":"每当你使用一张【杀】指定目标后，你可以令一名其他角色受到伤害。",
            starducang:"渡沧",
            "starducang_info":"每当你受到一点伤害，你可以弃置一张牌并摸一张牌。",
            starbeishui:"背水",
            "starbeishui_info":"限定技，摸牌阶段结束时，你可以执行以下效果:每当你使用一张牌或造成一点伤害后，你摸一张牌，若如此做，你不能回复体力直到回合结束;如果你的体力值大于2，你将体力值改为2。",
            "starbeishui2":"背水(攻)",
            "starbeishui2_info":"",
            "starbeishui3":"背水(受)",
            "starbeishui3_info":"",
            starhanjun:"汉军",
            "starhanjun_info":"主公技，锁定技，回合结束时，若游戏轮数不大于五，你视为拥有技能\"马术\";若游戏轮数不小于五，你视为拥有技能\"飞影\"。",
            "starzujian1kiva":"小杀组件",
            "starzujian1kiva_info":"锁定技，游戏开始时，若你的装备区里没有【夜澜定明珠】，你使用之。",
            starsanquan:"散权",
            "starsanquan_info":"摸牌阶段结束时，你可以跳过出牌阶段，并让一名角色获得一个回合;若你的体力值为1，你的手牌上限+2。",
            startianle:"天乐",
            "startianle_info":"锁定技，每当你即将受到伤害，若你的体力值为2，你进行一次判定，若结果为♥，你回复一点体力;若你的体力值为1，你进行一次判定，若结果为红色，你防止之。",
            "startianle2":"天乐(体力值为2)",
            "startianle2_info":"",
            "startianle3":"天乐(体力值为1)",
            "startianle3_info":"",
            starxuqing:"虚情",
            "starxuqing_info":"锁定技，一名其他角色跳过出牌阶段后，你摸两张牌",
            starluanquan:"乱权",
            "starluanquan_info":"出牌阶段限一次，你可将一张牌交给一名角色，然后与其拼点，若你赢，你对其使用一张[乐不思蜀]，否则你摸两张牌。",
            starsanzui:"三罪",
            "starsanzui_info":"回合结束时，若你没有在出牌阶段使用过【杀】，你摸两张牌并重新开始一个出牌阶段。",
            staryinfu:"荫父",
            "staryinfu_info":"锁定技，若你装备区没有防具牌，你视为装备了【八卦阵】;若你装备区没有武器牌，你的攻击范围+2。",
            starmuli:"牧立",
            "starmuli_info":"出牌阶段限一次，你可以对自己使用一张[乐不思蜀]并回复一点体力。",
            starmoushe:"谋射",
            "starmoushe_info":"锁定技，若你判定区有牌，每当你使用一张牌，你摸一张牌。",
            starqishu:"骑术",
            "starqishu_info":"锁定技，回合开始时你获得两枚\"龙\"标记;每当你造成一点伤害，你获得一枚\"龙\";你与体力值不大于你的角色的距离始终为一。",
            startiema:"铁马",
            "startiema_info":"出牌阶段限四次，你可以弃置两枚\"龙\"并使用一张基本牌，此牌无距离、次数限制。",
            "starqiceliulong_skill":"奇策",
            "starqiceliulong_skill_info":"出牌阶段限一次，你可以弃置一张手牌，然后使用一张锦囊牌。",
            starzhenwei:"缜帷",
            "starzhenwei_info":"锁定技，你使用的普通锦囊牌不能被无懈可击响应;你不能成为♠或♣锦囊的目标。",
            starluanshi:"乱世",
            "starluanshi_info":"每当一名其他角色使用一张黑色锦囊牌，你可以获得此牌，若其点数为K，你获得技能\"乱舞\"。",
            starshiming:"蚀命",
            "starshiming_info":"每当你使用一张牌，你失去一张手牌。",
            starjuemou:"绝谋",
            "starjuemou_info":"当你于一名其他角色的回合内首次失去牌时，你进入潜行状态直到其回合结束。",
            starfenji:"焚计",
            "starfenji_info":"出牌阶段限一次，你可以弃置一张手牌并弃置一名角色的牌，若此牌为其最后一张手牌，你获得技能\"焚城\";若其区域内有牌，你令其获得技能\"蚀命\"直到其回个阶段结束。",
            starjinge:"金戈",
            "starjinge_info":"出牌阶段限一次，你可以弃置一张\"龙\"并使你使用的下一张【杀】不能被闪避。",
            starmazhen:"马阵",
            "starmazhen_info":"锁定技，游戏开始时，你进行一次判定:若为♥，你获得\"义从\";若为♦，你获得\"追击\";若为♠，你获得\"凶算\";若为♣，你获得\"雄异\";你的进攻范围+2",
            starqianjun:"潜军",
            "starqianjun_info":"每当你使用一张【杀】时，你可以失去一点体力并摸一张牌，然后此【杀】不能被【闪】响应。",
            starxiongsuan:"凶算",
            "starxiongsuan_info":"限定技，出牌阶段，你可以弃置一张手牌并选择一名角色，对其造成1点伤害，然后你摸三张牌。若该角色有已发动的限定技，则你选择其中一个限定技，此回合结束后视为该限定技未发动过。",
            starqiushu:"求书",
            "starqiushu_info":"主公技，限定技，一名其他角色的准备阶段，你可以令其获得副将\"南华老仙\"，然后其对你使用一张\"太平要术\"，并令你获得技能\"蛊惑\"。",
            stardingtian:"定天",
            "stardingtian_info":"锁定技，游戏开始时，你副将改为\"左慈\"，失去一点体力并获得技能\"青囊\"。",
            "starshijun2":"侍君",
            "starshijun2_info":"",
            starzhongduan:"终断",
            "starzhongduan_info":"当你即将阵亡前，你可以另一名其他角色获得技能\"筹计\"。",
            starchouji:"筹计",
            "starchouji_info":"游戏开始时或者回合结束时，你获得以下技能之一直到下一个回合开始。",
            starkuangdao:"匡道",
            "starkuangdao_info":"出牌阶段限一次，你可以获得一名牌不小于三张的角色的一张牌，并令其在下一摸牌阶段摸牌数+3。",
            "starkuangdao2":"匡道",
            "starkuangdao2_info":"",
            starxinkuangdao:"匡道",
            "starxinkuangdao_info":"转换技:①出牌阶段，你可以令自己\"封印\"并获得一名其他角色的手牌。②锁定技，每当有一名角色对你造成伤害，若你已被\"封印\"你解除\"封印\"并摸一张牌。",
            "starxinkuangdao2":"匡道",
            "starxinkuangdao2_info":"",
            starjingzun:"敬尊",
            "starjingzun_info":"锁定技，每当有一名角色使用一张点数为K的牌，若你已被\"封印\"，你解除\"封印\"并令其摸一张牌。",
            starqianjiao:"潜交",
            "starqianjiao_info":"出牌阶段限一次，你可以对一名与你势力不同的角色使用一张【远交近攻】，若你体力值为1，你获得\"潜行\"直到下回合开始。",
            starqiandui:"谦对",
            "starqiandui_info":"出牌阶段，若你处于潜行状态，你可以将任意张手牌交给指定角色。",
            starshenghun:"圣魂",
            "starshenghun_info":"你可以将一张点数不小于6的牌当[杀]使用，若你因此技能使用一张【杀】，此【杀】无距离限制。",
            staryanji:"淹计",
            "staryanji_info":"每当你使用一张【杀】，你可以对一名角色使用一张[水淹七军]。",
            starhanmen:"捍门",
            "starhanmen_info":"摸牌阶段开始前，你令一名角色获得\"门\"直到其回合结束;每当你获得一张牌，你可以展示所有手牌并令拥有\"门\"的角色摸一张牌。",
            starbianjian:"鞭锏",
            "starbianjian_info":"武器技:①锁定技，若你装备区没有武器牌，你的攻击范围+2。②每当你用【杀】造成一点伤害，你可以获得其区域内的一张牌并令其摸一张牌。",
            starxuanzhen:"旋阵",
            "starxuanzhen_info":"锁定技，当你即将死亡时，你防止之，然后立马获得一个回合;若你在此回合内造成过伤害，你回复一点体力，否则你失去\"旋阵\"并死亡。",
            "starxuanzhen2":"旋阵",
            "starxuanzhen2_info":"",
            starzhengyi:"征夷",
            "starzhengyi_info":"每当你受到一点伤害，你可以随机使用一张装备牌;你的装备区的牌可以当做【杀】或【闪】使用或打出;若你因\"征夷\"使用或打出一张牌，你可以摸一张牌。",
            starmojie:"末杰",
            "starmojie_info":"锁定技，你使用的【杀】无距离限制。",
            starmaima:"买马",
            "starmaima_info":"出牌阶段限一次，你可将1~2张牌交给一名角色，并获得其装备区域的坐骑牌，若场上有秦琼，其回复一点体力或摸一张牌。",
            starjitang:"击唐",
            "starjitang_info":"每当你一次获得或失去不小于两张牌时，你可以弃置一名角色的一张牌，若你一次性获得或失去不小于三张牌，你获得技能\"立断\"。",
            starqizhan:"奇战",
            "starqizhan_info":"准备阶段，你可以选择:①你可以放弃摸牌阶段和弃牌阶段，然后获得\"奇袭\"和\"制衡\"直到回合结束。②你可以放弃出牌阶段，然后获得\"突袭\"和\"旋风\"，直到回合结束。",
            staryongjin:"勇进",
            "staryongjin_info":"锁定技，1.你的手牌上限-X。2.游戏开始时，你随机使用三张装备牌。（X为你的装备区域装备数）",
            staryangwei:"扬威",
            "staryangwei_info":"锁定技，你视为拥有\"独进\"和\"舌剑\"。",
            "starshibai2":"十败",
            "starshibai2_info":"",
            starjiancong:"谏从",
            "starjiancong_info":"出牌阶段，你可以弃置弃置一张牌并使用一张♠K的[闪电]，然后你受到一点伤害。",
            starwangqiang:"王枪",
            "starwangqiang_info":"锁定技，每当你使用一张点数为K的牌，你摸一张牌;若你判定区有牌，你的【杀】没有距离限制，且你造成的伤害均视为雷属性伤害;结束阶段，若你判定区有牌，你弃置自己判定区的一张牌。",
            starjinyi:"矜翼",
            "starjinyi_info":"锁定技，若你没有防具，你视为装备了[八卦阵];若你没有宝物，你的手牌上限+1;你不会受到火属性伤害。",
            starzhanyu:"展羽",
            "starzhanyu_info":"每当你进行一次判定，你可以获得以下羽技能之一直到下次触发技能，然后你获得一个\"羽化\"标记。(羽技能:因此技能获得的技能。)",
            starhuaxian:"化仙",
            "starhuaxian_info":"觉醒技，准备阶段，若你拥有不小于三枚\"羽化\"标记，你失去羽技能和技能\"展羽\"，然后回复一点体力并获得技能\"易装\"，然后你永久获得一项羽技能。(话说在前头，觉醒后的\"羽化\"标记，只是装饰。)",
            starjunshi:"君弑",
            "starjunshi_info":"锁定技，你的手牌上限+2;每当你对一名角色造成伤害，你弃置其一张牌。",
            starxinzhao:"心昭",
            "starxinzhao_info":"每当有一名其他角色即将受到伤害时，若其体力值为1，你可以令此次伤害+1，然后你摸一张牌。",
            "starxinzhao_zhu":"心昭",
            "starxinzhao_zhu_info":"每当有一名其他角色即将受到伤害时，若其体力值为1或伤害来源为你，你可以令此次伤害+1，然后你回复一点体力或摸一张牌。",
            starlangye:"狼野",
            "starlangye_info":"主公技，觉醒技，若你在第一回合造成过伤害，你修改技能\"心昭\"。",
            starbingtu:"兵途",
            "starbingtu_info":"回合结束时，你可以获得以下技能直到下个弃牌阶段结束。",
            starjiangzhan:"将战",
            "starjiangzhan_info":"限定技，出牌阶段，你获得以下技能之一直到下个弃牌阶段结束。",
            starshanduan:"闪断",
            "starshanduan_info":"出牌阶段限一次，你可以弃置两张牌并弃置一名角色区域内的一张牌。",
            starzhouxia:"胄侠",
            "starzhouxia_info":"每当你使用一张装备牌，你可以获得以下技能之一。",
            staryanggong:"扬弓",
            "staryanggong_info":"锁定技，每当你受到伤害时，你对伤害来源使用一张【杀】;若你拥有\"龙\",你的攻击范围无限。",
            starbiri:"蔽日",
            "starbiri_info":"每当你使用一张【杀】，你可令此杀必中，若如此做，此【杀】的目标翻面。",
            startiegu:"铁骨",
            "startiegu_info":"每当你对一名角色使用【杀】时，你可以弃置其一张牌，若为基本牌，你摸一张牌;若为锦囊牌，你摸一张牌并令此【杀】不得闪避;若为装备牌，你回复一点体力并令此【杀】不得闪避。",
            starceben:"策奔",
            "starceben_info":"锁定技，每当你造成一点伤害，你摸一张牌;你的【杀】可以多指定一个目标;你的进攻范围无限。",
            starjianyue:"俭约",
            "starjianyue_info":"每当你回复一点体力，你可以摸一张牌。",
            staryigang:"意刚",
            "staryigang_info":"锁定技，每当你进入濒死状态，你摸一张牌;每当你受到一点伤害，若伤害来源为你，你回复一点体力，否则对你造成伤害的角色立即受到等量伤害。",
            starlonglin:"龙临",
            "starlonglin_info":"每当你回复一点体力，你可以令你和任意名体力值未满的其他角色各摸一张牌。",
            starshengnu:"圣怒",
            "starshengnu_info":"准备阶段，你可以失去一点体力上限并获得一枚\"昭\";摸牌阶段，你可以摸X+2张牌。(X为你\"昭\"的数量)",
            stardilie:"帝烈",
            "stardilie_info":"主公技，结束阶段，你可以令一名角色受到一点火属性伤害，然后你失去一枚\"昭\"并修改技能描述。",
            "stardilie2":"帝烈",
            "stardilie2_info":"主公技，限定技，当你进入濒死状态时，你可以对一名其他角色造成X点伤害，然后你失去所有的\"昭\"并回复一点体力。",
            starhuoxin:"惑心",
            "starhuoxin_info":"出牌阶段限一次，你可以弃置一张牌并选择获得一名其他角色的一张牌，然后其获得以下技能之一直到其回合结束。",
            starmingyuan:"明怨",
            "starmingyuan_info":"锁定技，每当一名角色一次给你不小于两张牌时，其摸一张牌或者回复一点体力;每当一名角色对你造成一点伤害，其选择:①给你一张手牌并令你查看他的手牌。②令你对其使用对你造成伤害的牌(若对你造成伤害的不是因为牌，则改为对伤害来源造成一点火焰伤害)。",
            "starmingyuan2":"明怨",
            "starmingyuan2_info":"",
            staryaodun:"谣遁",
            "staryaodun_info":"出牌阶段限一次，你可以弃置所有手牌并对一名角色造成一点伤害。",
            starzhidi:"制敌",
            "starzhidi_info":"每当你造成一点伤害，你可以获得其区域内的一张牌。",
            starxianfeng:"先锋",
            "starxianfeng_info":"准备阶段，你可以跳过摸牌阶段并摸一张牌，然后获得一个出牌阶段，在此阶段，你可以弃置一张牌并弃置一名其他角色的一张牌。",
            starfuzhan:"伏战",
            "starfuzhan_info":"锁定技，你的最后一张【杀】可以指定三个目标;每当你造成或者受到一点伤害时，若你没有手牌，你摸一张牌。",
            "starxianfeng2":"先锋",
            "starxianfeng2_info":"出牌阶段限一次，你可以弃置一张手牌并弃置一名其他角色的一张手牌。",
            starfangyi:"芳依",
            "starfangyi_info":"锁定技，摸牌阶段，你额外摸X张牌，X为存活女性角色数且不超过2。",
            starzhengce:"征策",
            "starzhengce_info":"每当你造成或受到一点伤害，你可以获得以下技能之一。",
            starjianxia:"谏侠",
            "starjianxia_info":"每当有一名角色使用一张黑色锦囊牌，若其为你，你可以随机装备一张装备牌，否则你与其各摸一张牌(若你手牌数大于体力值，你弃置一张牌)。",
            starshihu:"识虎",
            "starshihu_info":"锁定技，游戏开始时，你可以令一名角色成为\"虎\";\"虎\"的进攻距离+1;每当\"虎\"使用一张【杀】，其可以受到一点伤害并令此【杀】不得闪避;当\"虎\"死亡时，你增加一点体力上限并回复一点体力。",
            "starshihu2":"识虎",
            "starshihu2_info":"",
            starrenyi:"任夷",
            "starrenyi_info":"锁定技，每当有一名角色获得你的牌，若此牌为红色，其回复一点体力。",
            starheman:"和蛮",
            "starheman_info":"出牌阶段，你可以将一张手牌交给一名角色，然后摸一张牌，一回合内每名角色限一次。",
            "starheman2":"和蛮",
            "starheman2_info":"",
            starduoqi:"夺器",
            "starduoqi_info":"出牌阶段限一次，你可以获得一名其他角色的一张牌，然后你与其的距离为1。",
            "starduoqi2":"夺器",
            "starduoqi2_info":"",
            staranji:"暗击",
            "staranji_info":"一名其他角色的出牌阶段结束时，若其有装备，你可以弃置一张牌并对其造成一点伤害，然后其弃置一张装备牌并摸X张牌。(X为其失去的体力)",
            starguagu:"刮骨",
            "starguagu_info":"出牌阶段限一次，你可以弃置一名角色区域内的一张牌，若其体力值未满，其回复一点体力，否则你摸一张牌。",
            starlianjiu:"怜救",
            "starlianjiu_info":"每当有一名角色进入濒死状态，若其没有\"杏林\"标记，你可以对其使用一张【桃】并令其获得一枚\"杏林\"标记。(杏林:锁定技，每当你杀死一名其他角色，你失去此标记，若\"医华佗\"在场，你可以令其摸一张牌。)",
            starxinglin:"杏林",
            "starxinglin_info":"",
            starqilue:"棋略",
            "starqilue_info":"锁定技，游戏开始时，你获得3枚\"棋\";每当你造成或受到一点伤害，你获得一枚\"棋\"。",
            starzeshu:"择书",
            "starzeshu_info":"摸牌阶段，你可以因你的\"棋\"的数量，弃置一枚\"棋\"并获得以下技能直到下个回合开始:若你拥有3枚\"棋\"，你可以选择技能\"自书\";若你拥有5枚\"棋\"，你可以选择技能\"英姿\";若你拥有7枚\"棋\"，你可以选择技能\"青囊\";若你拥有10枚\"棋\"，你可以选择技能\"制衡\"。",
            starzizhu:"自助",
            "starzizhu_info":"当你即将受到伤害时，若其不小于你的体力值，你可以弃置3枚\"棋\"并防止此次伤害。",
            starjiyuan:"计援",
            "starjiyuan_info":"限定技，出牌阶段，你可以弃置5枚\"棋\"，若如此做，你摸两张牌并永久获得技能\"自书\"。",
            starjiangjue:"江决",
            "starjiangjue_info":"锁定技，若你的体力值不大于2，你视为任何伤害的来源。",
            starpoqin:"破秦",
            "starpoqin_info":"每当你即将造成/受到伤害，你可以与其拼点，若你赢，你的伤害+1/你防止此伤害，否则其防止你伤害/其伤害+1。",
            starnijian:"逆谏",
            "starnijian_info":"主公技，每当你进行一次拼点，你可以获得一名其他角色的一张牌。",
            starzhengheng:"政衡",
            "starzhengheng_info":"出牌阶段限一次，你可以对任意一名角色使用，令其将手牌调整至X张，若目标为你，你视情况执行以下效果:①若你的手牌不小于Y，你弃置Y张牌并摸Y张牌。②你获得\"奇制\"和\"精策\"直到回合结束。(X为你的手牌数，Y为你的体力值)",
            staryuanzhi:"援至",
            "staryuanzhi_info":"主公技，锁定技，场上每有一名与你同一国籍的其他角色回复一点体力，你可以回复一点体力或摸一张牌。",
            startianxing:"天星",
            "startianxing_info":"锁定技，游戏开始时，你获得7枚\"星\";回合结束时，若你的\"星\"不为7，则将\"星\"补至7。",
            staryuhuo:"浴火",
            "staryuhuo_info":"每当你即将造成一点伤害，你可以弃置一枚\"星\"令此伤害为火属性伤害/其弃置一张牌/+1;出牌阶段，你可以弃置一枚\"星\"并对一名角色使用一张♥K的[火攻]。",
            starzhencheng:"镇城",
            "starzhencheng_info":"当你即将受到不小于你的体力值的伤害时，你可以弃置所有\"星\"并防止之。(\"星\"至少为3)",
            starjianghou:"将后",
            "starjianghou_info":"锁定技，新的一轮开始时，你获得以下技能之一。",
            starshixing:"仕行",
            "starshixing_info":"出牌阶段限一次，你可以弃置一张手牌并回复一点体力，然后你展示所有手牌。",
            staryiji:"疑忌",
            "staryiji_info":"摸牌阶段结束时，你可以选择一名拥有手牌的角色并观看其所有手牌，若其有【杀】，你弃置其一张牌。",
            starchujiao:"除蛟",
            "starchujiao_info":"每当有一名角色使用一张【杀】即将对你造成伤害，你可以展示所有手牌并停止结算，若其\"蛟龙\"标记小于3，你令其获得一枚\"蛟龙\"标记，若其\"蛟龙\"标记不小于3，你与其各失去一点体力。",
            stargefa:"割发",
            "stargefa_info":"",
            starxietian:"挟天",
            "starxietian_info":"主公技，每当你失去一点体力，你可以视情况使用[挟天子以令诸侯]，[割发代首]，[除三害]之一。",
            starsongzang:"送葬",
            "starsongzang_info":"每当一名其他角色死亡时，你可以获得技能\"漫卷\"直到下个回合开始，然后你回复三点体力并弃置所有牌，最后消除自身负面效果并摸三张牌。",
            starzhanji:"展计",
            "starzhanji_info":"每当你一次获得不少于两张牌，你可以摸一张牌并令一名角色横置。",
            starmixian:"密献",
            "starmixian_info":"一名角色的回合开始时，你可以与其各摸一张牌。",
            starqiaozhi:"巧识",
            "starqiaozhi_info":"觉醒技，准备阶段，若你手牌不小于你的体力值的两倍，你失去一点体力上限和技能\"密献\"，并获得技能\"强识\"和\"才识\"。",
            starcaizhi:"才识",
            "starcaizhi_info":"摸牌阶段结束时，你可以将一至两张牌交给一名角色。",
            starqingshi:"清世",
            "starqingshi_info":"每当有一名角色使用一张点数为1的牌，你可以对其造成一点伤害。",
            starzhike:"制科",
            "starzhike_info":"每当有一名角色使用一张点数为13的牌，你可以选择令其获得以下技能或标记之一直到其下一出牌阶段开始。",
            staryishu:"依术",
            "staryishu_info":"锁定技，新的一轮开始时，你可以令一名角色获得\"庸肆\"直到其回合结束，若其为你，你需要弃置一个\"橘\"，若你没有\"橘\"你失去一点体力。",
            staryongsi:"庸肆",
            "staryongsi_info":"",
            startianlun:"天论",
            "startianlun_info":"出牌阶段，你可以移去一个\"橘\"并令一名角色获得以下技能之一直到回合结束;若你没有\"橘\"，则改为失去一点体力。",
            starhuaiju:"怀橘",
            "starhuaiju_info":"锁定技，游戏开始时，你获得3个\"橘\";摸牌阶段，若你没有\"橘\"，你少摸一张牌并获得一个\"橘\"。",
            starbeifa:"北伐",
            "starbeifa_info":"觉醒技，当你的体力值小于4，你失去所有技能并获得技能\"圣怒\",\"衅计\"，\"火计\"，然后你将体力上限调至体力值并获得4个\"昭\"。",
            staryinji:"隐己",
            "staryinji_info":"锁定技，你不能成为拼点的目标;你的手牌上限+1。",
            starjiece:"结策",
            "starjiece_info":"挑战技，锁定技，出牌阶段结束时，其他角色横置，然后你摸两张牌。",
            startianjian:"天鉴",
            "startianjian_info":"身份技，锁定技，游戏开始时，你进行一次判定，若为♥，你获得副将\"佐帝诸葛亮\";若为♦，你获得副将\"小鸟庞统\";若为♠，你获得副将\"魔皇法正\";若为♣，你获得副将\"征兆刘巴\"，然后你失去两点体力并失去技能\"化身\",\"新生\",\"缜帷\"，\"谪仙\"。",
            starljzhanji:"占机",
            "starljzhanji_info":"出牌阶段限一次，你可以令\"明朱元璋\"弃置所有牌并回复一点体力。",
            starchoumou:"筹谋",
            "starchoumou_info":"锁定技，结束阶段，你与\"明朱元璋\"各摸一张牌;【杀】对你造成的伤害+1。",
            starshebian:"舌辩",
            "starshebian_info":"锁定技，游戏开始时，你获得7枚\"舌\";回合开始时，若你的\"舌\"不为7，则将\"舌\"补至7。",
            starduanyan:"断言",
            "starduanyan_info":"锁定技，每当你使用一张牌，若你有\"舌\"，你摸一张牌，否则你弃置一张牌;结束阶段，若你没有\"舌\"，你与其互相伤害。",
            starmiyan:"弥言",
            "starmiyan_info":"出牌阶段限一次，若其\"星\"比你\"舌\"多，你将其\"星\"调至你的\"舌\"。",
            staraojun:"鏖军",
            "staraojun_info":"结束阶段，若游戏轮数不小于15，你获得一枚\"豹\"。",
            starxuezhan:"雪战",
            "starxuezhan_info":"特殊技:①锁定技，游戏开始时，你获得七只\"豹\"。②若你拥有\"豹\"，在各个阶段你可以弃置一枚并实施以下效果之一:TOP1,准备阶段，若你判定区有牌，你可以弃置一张判定区的牌。TOP2，摸牌阶段，你可以多摸两张牌。TOP3，每当你使用一张【杀】，你可以令此不得闪避。",
            starjianren:"奸刃",
            "starjianren_info":"锁定技，每当你失去一点体力，你受到一点伤害。",
            starrangli:"让梨",
            "starrangli_info":"出牌阶段限一次，你可以令一名角色获得一枚\"梨\"直到回合结束并对其使用一张【杀】。",
            starzhixin:"知心",
            "starzhixin_info":"每当\"魏武曹操\"使用一张牌，你可以获得此牌，然后其摸一张牌。",
            starjiejian:"节剑",
            "starjiejian_info":"锁定技，你的牌无次数限制;每当你使用一张【杀】，你摸一张牌。",
            starkuangshe:"狂舌",
            "starkuangshe_info":"摸牌阶段，你可以令\"魏武曹操\"弃置X张牌。(X为你的\"蛟\"标记数且至少为1)",
            staryitian:"倚天",
            "staryitian_info":"你可以摸一张牌",
            "starjiuyin2":"九阴",
            "starjiuyin2_info":"",
            starjiuyin:"九阴",
            "starjiuyin_info":"每当你造成一点伤害，你可以失去一点体力并摸一张牌;若你发动过此技能，你的手牌上限为你的体力上限。",
            starxianglong:"降龙",
            "starxianglong_info":"每当你受到一点伤害，你可以弃置伤害来源的一张牌，若你发动过此技能，你的武将牌始终朝上。",
            "starxianglong2":"降龙",
            "starxianglong2_info":"",
            starrencheng:"仁称",
            "starrencheng_info":"每当有一名角色进入濒死状态时，你可以令其摸一张牌。",
            starliyue:"离月",
            "starliyue_info":"结束阶段，你可以获得一名其他角色的一张牌。",
            starmaxiong:"马雄",
            "starmaxiong_info":"摸牌阶段结束时，你可以弃置两张牌并摸两张牌。",
            starzhaku:"诈苦",
            "starzhaku_info":"出牌阶段限一次，你可以弃置一张牌，然后失去1点体力并摸三张牌。",
            starjianshi:"渐矢",
            "starjianshi_info":"每当你体力值发生变化，你可以摸一张牌。",
            starjiedao:"借刀",
            "starjiedao_info":"一名角色的出牌阶段，其可以弃置两张牌并随机获得以下卡牌之一。",
            starjilian:"计连",
            "starjilian_info":"出牌阶段限一次，你可以弃置一张手牌并选择一名角色，若其性别为男且不为你，其获得技能\"无双\"直到其回合结束;若其性别为女且不为你，其获得技能\"离间\"直到其回合结束;若其为你，你摸三张牌。",
            starjibian:"汲变",
            "starjibian_info":"一名体力值未满的角色的摸牌阶段开始时，若其为你，你可以多摸一张牌，否则你可以令其少摸一张牌;若你为\"醒徐暮云\"，此技能改为限定技。",
            starxuanzhan:"玄战",
            "starxuanzhan_info":"摸牌阶段，你可以多摸一张牌并令任意名体力值为1的其他角色各摸一张牌。",
            starbaodao:"宝刀",
            "starbaodao_info":"锁定技，每当你造成伤害，若其没有手牌，此伤害+1。",
            starmojiang:"魔将",
            "starmojiang_info":"锁定技，每当你杀死一名角色，你增加一点体力上限并扬言;每当你受到一点伤害，你对一名角色使用一张【杀】。",
            starlijue:"傕算",
            "starlijue_info":"锁定技，每当你回复一点体力，你摸两张牌。",
            starguosi:"汜凶",
            "starguosi_info":"锁定技，每当你回复一点体力，你摸两张牌。",
            starxurong:"暴攻",
            "starxurong_info":"锁定技，结束阶段，你对一名角色使用一张【杀】。",
            starchengpu:"疠酒",
            "starchengpu_info":"援军的回合开始时，你可以对其使用一张【酒】。",
            starhandang:"解弓",
            "starhandang_info":"你可以将一张♦手牌当[杀]使用。",
            starzumao:"引敌",
            "starzumao_info":"每当援兵受到伤害时，你可以令其获得一枚护甲。",
            "starmojiang2":"魔将",
            "starmojiang2_info":"",
            starzuijiu:"醉酒",
            "starzuijiu_info":"摸牌阶段，你可以少摸一张牌，若如此做，你本回合内[杀]或[决斗]造成的伤害+1",
            starfuchou:"复仇",
            "starfuchou_info":"每当你受到一次伤害，可进行一次判定，若结果不为红桃，则伤害来源须弃置两张手牌或受到来自你的一点伤害",
            "starzuijiu2":"醉酒",
            "starzuijiu2_info":"",
            starcaishu:"财疏",
            "starcaishu_info":"出牌阶段限一次，你可以将任意张牌交给一名其他角色，然后你回复一点体力或摸一张牌。",
            stardianjiang:"点将",
            "stardianjiang_info":"聚义技，第二轮开始时，你令一名其他角色随机获得\"李逵\"标记或者\"武松\"标记。",
            starzhaoan:"招安",
            "starzhaoan_info":"忠义技，第一轮开始时，你随机获得一个技能。",
            "starzhanshen_damage":"战神",
            "starzhanshen_damage_info":"",
            starzhanshen:"战神",
            "starzhanshen_info":"每当你即将造成伤害，你可以令其对一名其他角色造成一点伤害，然后你可以弃置一张牌并令你造成的伤害+1。",
            starwuxin:"悟心",
            "starwuxin_info":"锁定技，每当有一名角色阵亡，你获得一枚\"悟心(唐僧)\"标记。",
            starhuoyan:"火眼",
            "starhuoyan_info":"挑战技，半锁技，游戏开始时，你增加4点体力上限并回复四点体力，然后获得\"八戒\"标记;出牌阶段，你可以将\"八戒\"/\"沙僧\"标记进行转换。<br>[八戒:锁定技，结束阶段，若你没有使用牌，你不受任何伤害直到下个回合开始。]<br>[沙僧:结束阶段，你可以令一名有牌的其他角色弃置5张牌并随机受到1点雷电伤害。]",
            starweitang:"卫唐",
            "starweitang_info":"挑战技，若你即将死亡，你可以停止结算并将武将牌改为\"李世民\"。",
            starbianhua:"变化",
            "starbianhua_info":"身份技，每当你使用一张牌，你可以回收此牌并摸一张牌，然后你不能使用牌，若你手牌数不大于5，你跳过弃牌阶段。",
            "starbianhua2":"变化",
            "starbianhua2_info":"",
            "swk9981":" ",
            "swk9981_info":"",
            starshengun:"神棍",
            "starshengun_info":"摸牌阶段，你可以额外摸X张牌。(若你拥有\"悟心\"且小于3，X为1;若你\"悟心\"数不小于3，X为2)",
            starbajie:"八戒",
            "starbajie_info":"",
            "starbajie2":"八戒",
            "starbajie2_info":"",
            starshaseng:"沙僧",
            "starshaseng_info":"",
            starjiafu:"贾府",
            "starjiafu_info":"转换技:①锁定技，若游戏轮数不大于15，你的手牌上限+3。②锁定技，结束阶段，若游戏轮数不小于10，你弃置一张牌。",
            starlingxian:"灵现",
            "starlingxian_info":"出牌阶段限一次，若你手牌数等于你的体力值，你可以弃置所有牌并摸2X张牌。(X为你的体力值)",
            starrenzi:"仁资",
            "starrenzi_info":"锁定技，你的手牌上限+2;结束阶段，你弃置一名角色的一张牌或者摸一张牌。",
            starzhizhan:"止战",
            "starzhizhan_info":"出牌阶段限一次，你可以令一名角色回复一点体力，然后你失去一点体力，若其没有装备牌，你摸一张牌。",
            starjueyi:"决义",
            "starjueyi_info":"锁定技，你的进攻距离+X;你的防御距离+Y;你的手牌上限+Z。(X为你的体力值-1，Y为你已损失的体力值，Z为你的\"白\"数)",
            starjima:"疾马",
            "starjima_info":"出牌阶段，你可以弃置一张装备牌，然后获得一匹\"白马\"并摸一张牌。",
            starxsjueyan:"绝言",
            "starxsjueyan_info":"每当你即将造成/受到一点伤害，若此伤害来源为锦囊牌，你可以停止此结算。",
            starzhujue:"诛决",
            "starzhujue_info":"出牌阶段限X次，你可以与一名角色拼点，若你赢，你随机对其使用【杀】,[决斗]或[惊雷闪]，否则你其弃置一张手牌，若你为\"醒徐暮云\"，你改为摸一张牌。(X为场上忠臣数量)",
            stardanfu:"单福",
            "stardanfu_info":"限定技，你可以翻面并获得潜行效果直到下个回合开始。",
            staryinren:"隐忍",
            "staryinren_info":"锁定技，你的手牌上限+X;弃牌阶段开始时，你可以重铸一张牌。(X为你的体力上限)",
            starbaiyi:"白衣",
            "starbaiyi_info":"结束阶段，若你在本回合内使用过不小于4张牌且你的手牌数小于你的体力值，你可以对一名其他角色造成随机0~2点伤害。",
            starronghu:"容虎",
            "starronghu_info":"锁定技，你的手牌上限+1;获得你黑色手牌的角色展示所有手牌。",
            starmengjiao:"盟交",
            "starmengjiao_info":"摸牌阶段，你可以多摸X张牌，然后你将其中至少两张牌交给其他角色。(X为你的体力值-1)",
            "starmengjiao2":"盟交",
            "starmengjiao2_info":"",
            starzhentian:"真田",
            "starzhentian_info":"出牌阶段，你可以摸两张牌并封印技能直到回合结束。",
            starfujun:"复军",
            "starfujun_info":"锁定技，每当你回复一点体力，你对一名其他角色造成一点伤害并解除封印;游戏开始时，你随机回复1~2点体力。",
            "starfujun2":"复军",
            "starfujun2_info":"",
            "_starzhentianxingcun":"真田丸",
            "_starzhentianxingcun_info":"",
            staryouzhu:"友助",
            "staryouzhu_info":"准备阶段，你随机获得\"佐帝诸葛亮\"，\"小鸟庞统\"，\"水镜司马徽\",\"诛徐庶\"的技能之一直到下个回合开始。",
            starpdgyinji:"隐机",
            "starpdgyinji_info":"锁定技，你的手牌上限始终为4;准备阶段，你弃置所有判定牌，若你手牌没有【杀】，你回复一点体力并消除状态。",
            starluoma:"罗马",
            "starluoma_info":"主公技，锁定技，当你在场时，每当一名角色对一名角色造成伤害，伤害来源可以获得其目标的一张牌。",
            starzhengzhan:"征战",
            "starzhengzhan_info":"摸牌阶段，你可以多摸X张牌并对一名其他角色使用一张无距离限制的【杀】。(X为你的\"裁国\"标记数的三分之一且向下取整)",
            starcaiguo:"裁国",
            "starcaiguo_info":"锁定技，每当有一名角色死亡，你获得一枚\"裁国\"标记。",
            startianliu:"天流",
            "startianliu_info":"出牌阶段，你可以令自己进入封印状态，然后你获得技能\"斩舞\"。",
            starshanji:"闪击",
            "starshanji_info":"锁定技，若你已被封印，你的手牌上限与进攻距离+1。",
            starzhanwu:"斩舞",
            "starzhanwu_info":"抗击技，每当你使用一张【杀】，你可以多指定一名与你距离为1的角色为目标;结束阶段，若你使用了至少三张牌，你摸一张牌，然后解除封印并失去此技能。",
            starlongjue:"龙诀",
            "starlongjue_info":"限定技，出牌阶段结束时，若你于本回合使用了至少五张牌，你可以依次对三名角色各造成一点雷电伤害，若你只对一名角色造成伤害，你进入潜行状态直到下个回合开始时。",
            "starlongjue_theone":"starlongjue_theone",
            "starlongjue_theone_info":"",
            "starlongjue_thetwo":"starlongjue_thetwo",
            "starlongjue_thetwo_info":"",
            "starlongjue_one":"龙诀",
            "starlongjue_one_info":"",
            "starlongjue_two":"龙诀",
            "starlongjue_two_info":"",
            "starlongjue_there":"龙诀",
            "starlongjue_there_info":"",
            "starlongjue_mark":"starlongjue_mark",
            "starlongjue_mark_info":"",
            stardinu:"帝怒",
            "stardinu_info":"摸牌阶段结束时，你可以摸一张牌并对一名其他角色造成一点伤害，若如此做，本回合你不能使用【杀】。",
            starfenshu:"焚书",
            "starfenshu_info":"限定技，弃牌阶段开始前，你可以令所有角色弃置一张牌，然后你摸X张牌。(X为你的体力上限)",
            starhuangzun:"皇尊",
            "starhuangzun_info":"主公技，超转技:①每当你打出一张【闪】，你选择获得\"荆轲\"，\"高渐离\"，\"张良\"标记之一。②若你拥有三种标记，你获得一枚\"刺秦\"标记，然后修改技能\"帝怒\"。",
            "stardinu2":"帝怒",
            "stardinu2_info":"",
            "stardinu_zhu":"帝怒",
            "stardinu_zhu_info":"摸牌阶段结束时，你可以对一名其他角色造成一点伤害。",
            starciqin:"刺秦",
            "starciqin_info":"",
            starjingke:"荆轲",
            "starjingke_info":"",
            stargaojianli:"高渐离",
            "stargaojianli_info":"",
            starzhangliang:"张良",
            "starzhangliang_info":"",
            starxindan:"薪胆",
            "starxindan_info":"锁定技，你的手牌上限+2。",
            startuqiangshenghua:"图强",
            "startuqiangshenghua_info":"每当你打出一张牌，你可以摸一张牌。",
            starzhenqian:"鸩浅",
            "starzhenqian_info":"",
            starzhexianshenghua:"谪仙",
            "starzhexianshenghua_info":"当你于一名其他角色的回合内失去牌时，你可以摸一张牌。",
            starxiansuo:"仙索",
            "starxiansuo_info":"一名其他角色的结束阶段，你可以弃置一张牌并观看其手牌。",
            starlongquan:"龙泉",
            "starlongquan_info":"出牌阶段限一次，你可以展示所有手牌并观看一名角色的手牌。",
            starlijian:"利剑",
            "starlijian_info":"",
            staryuewang:"越王",
            "staryuewang_info":"",
            starshixian:"诗仙",
            "starshixian_info":"",
            "gz_kangkaistar":"慷忾",
            "gz_kangkaistar_info":"每当一名同势力角色成为杀的目标后，你可以摸一张牌。若如此做，你交给其一张牌并展示之，若该牌为装备牌，该角色可以使用此牌并弃置一张牌。",
            "gz_longyinstar":"龙吟",
            "gz_longyinstar_info":"每当一名同势力角色在其出牌阶段使用【杀】时，你可弃置一张牌令此【杀】不计入出牌阶段使用次数，若此【杀】为红色，你摸一张牌并弃置一张牌。",
            starjianglue:"将略",
            "starjianglue_info":"结束阶段，你可以观看排堆顶的三张牌并选择获得其中一张牌或者获得这些牌并受到一点伤害。",
            starwpzhenwei:"镇卫",
            "starwpzhenwei_info":"每当你受到一点伤害，你可以令伤害来源和你各移动场上一张牌。",
            starzhongji:"忠戟",
            "starzhongji_info":"出牌阶段限一次，你可以失去一点体力并对一名其他角色造成一点伤害，若如此做，你获得\"忠\"标记直到下个回合开始。(每当有一名其他角色即将受到伤害，你可以代替他承受伤害。)",
            "starzhongji2":"忠戟",
            "starzhongji2_info":"",
            staryingbian:"鹰辩",
            "staryingbian_info":"锁定技，你在回合内视为拥有技能\"忘隙\"，你在回合外视为拥有技能\"天辩\"。",
            starhubian:"虎辩",
            "starhubian_info":"每当你受到伤害，你可以与伤害来源拼点，若你赢，你回复一点体力。",
            starhuangbian:"蝗辩",
            "starhuangbian_info":"每当有一名其他角色在你的回合内获得牌时，你可以令其不能使用或打出一张牌直到回合结束，每回合限一次。",
            "starhuangbian2":"蝗辩",
            "starhuangbian2_info":"",
            starjiangkai:"将慨",
            "starjiangkai_info":"出牌阶段限一次，你可以令一名角色获得一枚\"慨\"标记，若如此做，你失去所有手牌。(锁定技，当你即将受到伤害时，你弃置一张牌并摸一张牌，然后令此伤害-1;若你拥有此标记，你与其他角色的防御距离+1。)",
            starweima:"危马",
            "starweima_info":"你死亡时，可令一名其他角色获得技能\"飞影\"。",
            "starjiangkai2":"将慨",
            "starjiangkai2_info":"",
            stardaotan:"倒谈",
            "stardaotan_info":"摸牌阶段，你可以放弃摸牌并与一名角色拼点，然后你回复一点体力并获得此次拼点牌。",
            starzongxin:"纵心",
            "starzongxin_info":"每当你回复一点体力，你可以弃置一名其他角色区域内的一张牌;每当你进行一次拼点，你可以重铸一张牌。",
            starliangtun:"粮屯",
            "starliangtun_info":"每当你使用一张牌，你可以停止该结算，然后你获得一枚\"田策\"标记;结束阶段，你可以将一张\"田策\"交给一名其他角色。(田策:出牌阶段限一次，若你没有技能\"粮屯\"，你可以对一名其他角色使用一张无限距离的[顺手牵羊]，然后你进行一次判定，若为红色，你获得一枚\"田策\"标记。)",
            starshunxi:"瞬袭",
            "starshunxi_info":"每当你使用一张【杀】造成伤害，若你体力值未满，你可以弃置一枚\"田策\"并回复一点体力。",
            startianxi:"天袭",
            "startianxi_info":"一名角色的出牌阶段，其可以给你一张牌。",
            starliangzi:"粮资",
            "starliangzi_info":"结束阶段，你观看牌堆顶的五张牌，你可以选择其中一张非基本牌对自己使用。",
            starweilin:"威凛",
            "starweilin_info":"结束阶段，你可以令两名角色各摸一张牌。",
            starjigong:"极功",
            "starjigong_info":"当你需要打出【闪】时，若你没有横置，你可以横置自身并打出一张【闪】。",
            starkunzhan:"困战",
            "starkunzhan_info":"准备阶段，若你处于连环状态，你可以亮出排堆顶的三张牌，然后你获得其中的♠牌并解除连环状态。",
            starhualue:"划略",
            "starhualue_info":"锁定技，你的思考时间只有5秒。",
            staraogong:"傲功",
            "staraogong_info":"锁定技，你的手牌上限+1。",
            starhuicai:"挥才",
            "starhuicai_info":"锁定技，结束阶段，若你没有在你的回合出过牌，你摸两张牌。",
            "占卜系统":"<img src='file:///storage/emulated/0/Android/data/com.widget.noname/extension/王朝更替_权/占卜系统.jpg' width='71' height='100'>",
            "占卜系统_info":"",
            "爆发技":"爆发技<img src='file:///storage/emulated/0/Android/data/com.widget.noname/extension/王朝更替_权/占卜_爆发技.jpg' width='71' height='100'>",
            "爆发技_info":"",
            "控场技":"控场技<img src='file:///storage/emulated/0/Android/data/com.widget.noname/extension/王朝更替_权/占卜_控场技.jpg' width='100' height='71'>",
            "控场技_info":"",
            "卖血技":"卖血技<img src='file:///storage/emulated/0/Android/data/com.widget.noname/extension/王朝更替_权/占卜_卖血技.jpg' width='100' height='71'>",
            "卖血技_info":"",
            "输出技":"输出技<img src='file:///storage/emulated/0/Android/data/com.widget.noname/extension/王朝更替_权/占卜_输出技.jpg' width='76' height='100'>",
            "输出技_info":"",
            "占卜系统测试":"占卜系统测试",
            "占卜系统测试_info":"",
            starmolong:"末龙",
            "starmolong_info":"锁定技，若你没有武器牌，你的【杀】不受距离限制;若你装备区的牌不小于4，你不受任何伤害或流失体力;若你体力值为1，你的摸牌阶段多摸一张牌。",
            startianzhao:"天诏",
            "startianzhao_info":"出牌阶段，你可以将任意张牌交给一名角色并令其与另一名角色拼点，若如此做，拼点成功的角色对另一名角色造成一点火属性伤害。牌",
            starhantong:"汉统",
            "starhantong_info":"主公技，锁定技，你造成的伤害均视为火属性伤害。",
            starguihou:"闺后",
            "starguihou_info":"每当你回复一点体力，你可以摸两张牌并令一名其他角色摸一张红桃基本牌。",
            starsunxiang:"损香",
            "starsunxiang_info":"限定技，每当你进入濒死状态时，你可以令一名其他角色获得\"决意\"标记，若场上有\"天罡赵云\"，你可以令其摸三张牌，然后你死亡。(决意:每当你使用或打出一张【杀】或【闪】，你摸一张点数为K的牌。)",
            starmfrjueyi:"决意",
            "starmfrjueyi_info":"",
            starxihuan:"袭桓",
            "starxihuan_info":"一名角色的弃牌阶段开始时，若其手牌数大于其体力值，你可以对其使用一张无距离限制的【杀】，然后你终止其弃牌阶段。",
            starzuoming:"佐明",
            "starzuoming_info":"摸牌阶段结束时，若你手牌数大于你的体力值，你可以跳过出牌阶段并从牌堆中获得一张祭器牌。",
            "gz_fuwanstar_equip1":"谋溃",
            "gz_fuwanstar_duanzao":"谋溃",
            "gz_fuwanstar_equip1_info":"当你使用【杀】指定一名角色为目标后，你可以选择一项：摸一张牌，或弃置其一张牌。若如此做，此【杀】被【闪】抵消时，该角色弃置你的一张牌。 ",
            "gz_fuwanstar_equip2":"谋溃",
            "gz_fuwanstar_equip2_info":"当你使用【杀】指定一名角色为目标后，你可以选择一项：摸一张牌，或弃置其一张牌。若如此做，此【杀】被【闪】抵消时，该角色弃置你的一张牌。 ",
            "gz_fuwanstar_equip3":"谋溃",
            "gz_fuwanstar_equip3_info":"当你使用【杀】指定一名角色为目标后，你可以选择一项：摸一张牌，或弃置其一张牌。若如此做，此【杀】被【闪】抵消时，该角色弃置你的一张牌。 ",
            "gz_fuwanstar_equip4":"谋溃",
            "gz_fuwanstar_equip4_info":"当你使用【杀】指定一名角色为目标后，你可以选择一项：摸一张牌，或弃置其一张牌。若如此做，此【杀】被【闪】抵消时，该角色弃置你的一张牌。 ",
            "gz_fuwanstar_equip5":"谋溃",
            "gz_fuwanstar_equip5_info":"当你使用【杀】指定一名角色为目标后，你可以选择一项：摸一张牌，或弃置其一张牌。若如此做，此【杀】被【闪】抵消时，该角色弃置你的一张牌。 ",
            "gz_guanningstar_equip1":"断席",
            "gz_guanningstar_duanzao":"断席",
            "gz_guanningstar_equip1_info":"每当你造成一点伤害，你摸一张牌。",
            "gz_guanningstar_equip2":"断席",
            "gz_guanningstar_equip2_info":"每当你造成一点伤害，你摸一张牌。",
            "gz_guanningstar_equip3":"断席",
            "gz_guanningstar_equip3_info":"每当你造成一点伤害，你摸一张牌。",
            "gz_guanningstar_equip4":"断席",
            "gz_guanningstar_equip4_info":"每当你造成一点伤害，你摸一张牌。",
            "gz_guanningstar_equip5":"断席",
            "gz_guanningstar_equip5_info":"每当你造成一点伤害，你摸一张牌。",
            "gz_huaxinstar_equip1":"位逼",
            "gz_huaxinstar_duanzao":"位逼",
            "gz_huaxinstar_equip1_info":"你可以使用一张黑桃手牌当做[过河拆桥]使用。",
            "gz_huaxinstar_equip2":"位逼",
            "gz_huaxinstar_equip2_info":"你可以使用一张黑桃手牌当做[过河拆桥]使用。",
            "gz_huaxinstar_equip3":"位逼",
            "gz_huaxinstar_equip3_info":"你可以使用一张黑桃手牌当做[过河拆桥]使用。",
            "gz_huaxinstar_equip4":"位逼",
            "gz_huaxinstar_equip4_info":"你可以使用一张黑桃手牌当做[过河拆桥]使用。",
            "gz_huaxinstar_equip5":"位逼",
            "gz_huaxinstar_equip5_info":"你可以使用一张黑桃手牌当做[过河拆桥]使用。",
            starshicai:"识才",
            "starshicai_info":"出牌阶段限一次，你可以弃置一张牌并观看一名其他角色的牌，然后获得其区域内的牌。",
            starshijie:"释杰",
            "starshijie_info":"结束阶段，你可以令一名其他角色摸一张牌并解除负面状态，若场上有\"地煞管仲\"，你可以令其摸一张牌。",
            staryangxi:"养息",
            "staryangxi_info":"锁定技，你不能使用【杀】;你没有判定阶段。",
            stardaizhan:"怠战",
            "stardaizhan_info":"出牌阶段限一次，你可以将任意张【杀】交给一名角色，若其手牌数大于你，你对其造成一点伤害。",
            starqiyan:"弃宴",
            "starqiyan_info":"出牌阶段，你可以弃置一张黑桃牌并选择一名其他角色，并令其弃置X张牌，若你体力值为1，你回复一点体力，若你没有手牌，你获得其弃置的牌。",
            starxiancai:"贤才",
            "starxiancai_info":"锁定技，游戏开始时，你可以选择一名其他角色，若其拥有技能\"天乐\"，你令其失去\"天乐\"并获得技能\"佐助\"，否则你令其获得技能\"佐助\"。",
            starzuozhu:"佐助",
            "starzuozhu_info":"锁定技，每当你进入濒死状态时，若你没有手牌，你回复一点体力，若\"贞节董允\"在场，其摸一张牌。",
            starhujia:"胡笳",
            "starhujia_info":"一名角色每受到【杀】造成的一次伤害，你可以交给伤害来源一张牌，并令其弃置两张牌并失去一点体力，否则其目标回复一点体力或摸两张牌。",
            starqiuqing:"求情",
            "starqiuqing_info":"每当有一名其他角色即将死亡时，你可以失去一点体力并停止此结算。",
            starxijun:"系君",
            "starxijun_info":"每当有一名角色进入濒死状态，你可以令一名其他角色摸一张牌，若其为濒死角色，你回复一点体力或摸一张牌。",
            starmeiying:"魅影",
            "starmeiying_info":"出牌阶段限一次，你可以将一张杀交给一名角色，然后其可以对一名角色使用一张杀，若如此做，你回复一点体力，否则其受到一点伤害。",
            starguibian:"诡变",
            "starguibian_info":"出牌阶段限一次，你可以交给一名其他角色一张牌，若其势力为\"魏\"，其展示所有手牌;若其势力为\"蜀\"，其受到一点伤害;若其势力为\"吴\"，其非锁定技失效;若其势力为\"群\"，其摸X张牌并翻面，否则其交给你至少两张牌。(X为你已损失的体力)",
            starjueshang:"绝殇",
            "starjueshang_info":"锁定技，当一名角色即将死亡时，你令其失去所有技能，然后其交给你三张牌。",
            starxieyin:"蝎饮",
            "starxieyin_info":"国战技，当你明置武将时，你的身份变为\"野心家\"。",
            starxiyou:"玺佑",
            "starxiyou_info":"锁定技，回合开始时，若你没有[玉玺]，你装备一张[玉玺]，你的宝物牌不能被其他角色获取。",
            starhuxi:"护玺",
            "starhuxi_info":"锁定技，你始终正面朝上;若你拥有宝物牌，你不能成为其他角色的目标。",
            starshoujun:"守君",
            "starshoujun_info":"准备阶段，你可以令一名其他角色获得技能\"玺佑\"，然后你失去技能\"护君\"，增加一点体力上限并回复一点体力。",
            starweimin:"遗民",
            "starweimin_info":"出牌阶段限一次，你可以弃置一张手牌并令至多三名角色各摸一张牌。",
        },
    },
    intro:"作者QQ:3145656381(若无大事勿扰)<br>作者Q群:<a href=\"http://qm.qq.com/cgi-bin/qm/qr?k=56rl2GZIwaMDwM_pYqeupKVrZYbLx_TA\">431196258<a>(欢迎加入并交流)<br><img src='file:///storage/emulated/0/Android/data/com.widget.noname/extension/王朝更替_权/荆轲刺秦王.gif' width='100' height='56'><br>此扩展可以和[王朝更替_策]扩展联动<br>扩展状态:已完结<br>尽情期待[王朝更替_骑]扩展与[王朝更替_剑]扩展<br><a href=\"https://www.baidu.com/\">萌新查询处<a><br><img src='file:///storage/emulated/0/Android/data/com.widget.noname/extension/王朝更替_权/φstarkiva.jpg' width='98' height='98'>",
    author:":<img src='file:///storage/emulated/0/Android/data/com.widget.noname/extension/王朝更替_权/φstarkiva.jpg' width='14' height='14'>+࿈࿆剑牙雷少kiva࿈࿆+:",
    diskURL:"",
    forumURL:"https://jq.qq.com/?_wv=1027&k=5uKmouC",
    version:"1.8",
},files:{"character":["caojietianhoustar.jpg"],"card":["gz_fuwanstar.jpg"],"skill":[]}}})
