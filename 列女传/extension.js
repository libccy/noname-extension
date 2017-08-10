game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"列女传",content:function (config,pack){
    
    
    
    lib.config.lnzGXJZ;
game.saveConfig('lnzGXJZ',1);
lib.config.lnzGXJZ1=0;		
                if (config.lnz){
			for (var i in lib.characterPack['lnz']) {	
			if (lib.character[i][4].indexOf("forbidai")<0){
			lib.character[i][4].push("forbidai");
			}			
		}					
				};	    
    
},precontent:function (lnz){
       if(lnz.enable){		
            game.import('character',function(){
                var lnz = {
                    name: 'lnz',
                    connect:true,				
                    
                    character:{
            "ln_cy" :["female",'Han',3,['LN_GH','LN_BG','LN_DUANC'],["des:中国四大才女之一，堪称三国时期第一才女，善于诗文和音乐，幼时便可以分辨出弦音，其父也精通音律，其父死后，蔡琰因战乱而为匈奴人所虏，后来为魏国花钱买回，终于再次回到了故乡，与曹操是忘隙之交；"]],
            "ln_lz" :["female",'Han',3,['LN_ZHIXIN','LN_DUZHI'],["des:吕雉（公元前241年－公元前180年8月18日），字娥姁[é xū]，通称吕后，或称汉高后、吕太后等等。砀郡单父县（今山东菏泽市单县）人。汉高祖刘邦（前202年-前195年在位）的皇后，高祖死后，被尊为皇太后（前195年—前180年），是中国历史上有记载的第一位皇后和皇太后。同时吕雉也是秦始皇统一中国，实行皇帝制度之后，第一个临朝称制的女性，被司马迁列入记录帝王政事的本纪，后来班固作汉书仍然沿用。她开启了汉代外戚专权的先河。吕雉统治期间实行黄老之术与民休息的政策，废除挟书律，下令鼓励民间藏书、献书，恢复旧典。为后来的文景之治打下了很好的基础，司马迁在《史记·吕后本纪》中对她的评价是“政不出房户，天下晏然；刑罚罕用，罪人是希；民务稼穑，衣食滋殖。”给予吕后施政极大的肯定。"]],
            "ln_wzf":["female",'Han',3,['LN_XHOU','LN_CN'],["des:卫子夫（？－前91年），名不详，字子夫，河东平阳（今山西临汾）人。卫子夫是汉武帝刘彻的第二任皇后，史称孝武卫皇后，也是中国历史上第一位拥有独立谥号的皇后，卫子夫原为平阳公主家歌女。于建元二年（前139年）入宫，建元三年（前138年）封为夫人，元朔元年（前128年）立为皇后，征和二年（前91年）在巫蛊之祸中自杀身亡。谥思后，葬桐柏亭。身驻汉宫凡49年，在皇后位38年，育有一男三女。"]],
            "ln_ds":["female",'Han',3,['LN_XINGWEN','LN_JINGZI'],["des:邓绥（81年－121年4月17日），南阳新野人，东汉王朝著名的女政治家，东汉王朝第四代皇帝汉和帝的皇后。邓绥系出名门，其祖父正是以向光武帝刘秀进献了“图天下策”的东汉开国重臣、云台二十八将之首的太傅高密侯邓禹。邓绥15岁入宫，22岁被册封为皇后。东汉延平元年（公元106年），年仅27岁的汉和帝突然驾崩，面对着“主幼国危”的局面，25岁的邓绥临朝称制。邓绥执政期间，对内帮助东汉王朝度过了“水旱十年”的艰难局面，对外则坚决派兵镇压了西羌之乱，使得危机四伏的东汉王朝转危为安，被誉为“兴灭国，继绝世”。但另一方面，邓绥亦有专权之嫌，其废长立幼，临朝称制达十六年而不愿还政于刘氏，朝中多有非议。东汉永宁二年（公元121年），邓绥驾崩，谥号“和熹”，与汉和帝合葬于慎陵。"]],
            "ln_bz":["female",'Han',4,['LN_CX','LN_JJ','LN_CJ'],["des:西汉史学家、文学家、思想家。以才学著称，曾经几度入宫传授学识，班昭继承兄长遗志，坚决修订完《汉书》，而也只有她才能修订完，故而十分得人敬佩，是皇太后邓绥之师，名望很高"]],
            "ln_wzj":["female","Han",3,['LN_LY','LN_CQ'],["des:中国四大美女之一，年少之时以民间女子身份被选为宫女，之后，匈奴单于向元帝请求娶汉人为妻（其间又有两种说法，一种是从昭君入宫之后到出塞的这段时间内元帝从未见过昭君，因此当发现她是绝世美女后，颇为后悔。另一种则是，昭君入宫后，过了几年，为元帝发现，两人爱的死去活来，之所以后来送她出塞，则是元帝出于顾及大家的原因），遂许昭君与之，几年后，昭君丧夫（昭君请求回归大汉，但是为皇帝所拒绝），又按照匈奴习俗嫁给了另一个单于，过了11年，又再度丧夫，王昭君经历了悲苦的一生，最终无法忍受而服毒自杀；"]],         
            "ln_zwy":["female",'qi',4,['LN_DZ','LN_MJ'],["des:齐国人，不学女工，好为治国之术，又名钟离春、钟无盐，相传相貌极丑，故而四十而未加，不甘心的她直谏齐王，使得齐王颇有建树。"]],
            "ln_mjn":["female","qin",3,['LN_QT'],["des:秦王政时期人物，相传为寻未谋面的夫君而将长城哭倒。"]],
            "ln_hyy":["female","shu",4,["LX","dc","机巧",'bazhen'],["des:诸葛亮之妻，诸葛瞻之母，有奇才，上通天文，下察地理，精通兵法，近乎诸略无所不晓，善于发明制造，传授诸葛亮很多学识，在诸葛亮病逝之后不久也随之仙逝，死前以“忠孝”勉励其子诸葛瞻；"]],
            "ln_nw":["female","G",4,["SD","SN"],["des:上古传说中的人物，华胥氏之女，人首蛇身，有圣德(五行属土德)，与伏羲兄妹通婚，创造婚姻制度，结束了只知其母不知其父的原始社会，有补天造人、治水平乱等的传说，和伏羲一起治理族人，制造乐器等物品，对后世产生了极大的影响（由于女娲伏羲属于一家人，故而“三皇”中只选取其中一人为代表）；"]],
            "ln_ehny":["female","SW",4,["DX","JF"],["des:娥皇女英，又称皇英。长曰娥皇，次曰女英，是中国古代神话传说中帝尧的两个女儿，姐妹同嫁帝舜为妻。舜父顽，母嚣，弟劣，曾多次欲置舜于死地，终因娥皇女英助之而脱险。舜继尧位，娥皇女英之其妃，后舜至南方巡视，死于苍梧。二妃往寻，得知舜帝已死，埋在九嶷山下，抱竹痛哭，泪染青竹，泪尽而死，因称“潇湘竹”或“湘妃竹”。自秦汉时起，湘江之神湘君与湘夫人的爱情神话，被演变成舜与娥皇、女英的传说。后世因附会称二女为“湘夫人”。"]],
            "ln_tss":["female","SW",4,["HX","启夏"],["des:大禹之妻，传说为狐仙化身，协助大禹，在禹治水之时，将内事管理得条条有理，特别是对于夏启的管教。民间流传许多关于夏禹和涂山氏的美好的爱情故事。"]],
            "ln_fh":["female","SW",4,["LN_JG"],["des:武丁最宠幸的妃子，也是中国历史上最早最杰出的女将，能征善战而且精于政务，文武全才，深得武丁宠爱，死后更是以极其崇高的礼节厚葬；"]],
            "ln_qj":["female","qi",3,["LN_GZ","LN_DY"],["des:齐国奇女子，姜小白堂妹，嫁给晋文公为妻，协助晋文公登上国君之位，素有国姿，善于舞乐等文艺之才，为人又深明大义，称得上一代奇女子，姜奇得知晋文公沉迷于自己的美色之中，便密谋将之送回晋国，并且杀死了可能泄密的婢女，然后想办法将晋文公送回了晋国，晋文公后来成为“五霸之一”；"]],
            "ln_fj":["female","chu",3,["明辨","jinxian"],["des:樊姬，楚庄王的王后。樊姬为了劝阻楚庄王不要因打猎，玩物丧志，就不吃禽兽肉，以此来打动楚庄王。而楚庄王从此改过自新。张说曾说：“楚国所以霸，樊姬有力。”，除此之外，樊姬还有进贤之功、知人之明，孙叔敖可以说是她间接引进的。"]],
            "ln_mm":["female","qi",3,["严母","惟德"],["des:叔敖母，即孙叔敖之母，深知天道。叔敖见蛇，两头岐首，杀而埋之，泣恐不及。母曰阴德，不死必寿。孟母，仉氏，生卒年不可考，孟子的母亲。战国时人，以教子有方著称。孟子三岁丧父，靠母亲教养长大成人，并成为后世儒家追慕向往的亚圣，孟母也留下了“孟母三迁”、“断机教子”等教子佳话。"]],
            "ln_dmsj":["female","chu",3,["预谚","鉴师","识天"],["des:邓曼，曼姓，邓城（今湖北襄阳西北）人，春秋时邓侯之女，楚武王夫人。邓曼为人贤惠聪颖，常对楚武王的某些活动进行劝谋。生子熊赀，后为楚文王。羊舌叔姬，晋国大夫羊舌职之妻，叔向之母，以慧著称，多次准确预言其家人命运。"]],
            "ln_djj":["female","qi",3,["LN_YH","LN_XJ","方绩"],["des:敬姜，齐侯之女，姜姓，谥曰敬，是鲁国大夫公父文伯的母亲。与孔子同时。世称贤母敬姜的《论劳逸》是春秋战国时期家训的代表之作。其事迹散见於《国语》、《列女传》、《韩诗外传》、《礼记·檀弓》。定姜，姜姓，定是跟从丈夫的谥号，春秋时期卫国国君卫定公的夫人，卫献公嫡母。"]],
            "ln_jhwj":["female","lu",3,["秩秩","罪谏","救卫"],["des:姜后，是西周第十一代天子周宣王的王后，齐国君主之女。她因为周宣王早卧晏起，于是在永巷待罪，将发簪耳环脱下，称君王耽色，源罪于自己。周宣王感动，励精图治，才有宣王中兴。齐桓卫姬，忠款诚信。公好淫乐，姬为修身。望色请罪，桓公加焉，厥使治内，立为夫人，曾经阻止齐桓公攻卫，并且颇有谏言。"]],
            "ln_jtxn":["female","SW",5,["LN_SN"],["des:上古传说人物，鸟身人首。传说曾经在黄帝苦战蚩尤不胜之时，传授黄帝兵法，最终黄帝终于打败了蚩尤。"]],
            "ln_xs":["female","chu",3,['LN_CY','LN_XS'],["des:春秋时期美女，为四大美女之一，曾经协助越王勾践，以美人计迷惑夫差，最终导致夫差败亡，吴国被灭，勾践一雪前耻，而且传说西施德才兼备，但最后的归宿不得而知，《墨子》中称其被丢进河中溺水而亡。"]]},
   
                             
                    
                    skill:{
                        LN_BG:{
                             trigger:{
                    player:"loseHpEnd",
                },
                            filter:function (event,player){
        return player.hp>0;
    },
                content:function (){
     'step 0'
        player.chooseTarget(get.prompt('LN_BG'),[1,player.maxHp-player.hp],function(card,player,target){
            return target!=player;
        }).set("ai",function(target){
                return get.damageEffect(target,player,player);
            
        });
        'step 1'
          if(result.bool){
            
            for(var i=0;i<result.targets.length;i++){
                player.logSkill('LN_BG',result.targets); 
                if(result.targets[i].hp>2)result.targets[i].chooseToDiscard(2,'he',true);
               result.targets[i].loseHp();            
            var chat=['悲歌当泣，远望当归！','拟排忧，心转愁！'].randomGet()
                  player.say(chat)
        };}
          
    
    
    
    
    
},
   
                
                    
                    
                            
                      },
                        LN_GH:{
                            trigger:{
        player:"phaseEnd",
    },
    frequent:true,
                            filter:function (event,player){
        return player.hp>1;
    },
    content:function (){
        player.chooseToDiscard(1,'he',true)
        player.loseHp();
        var chat=['欲死不能得,欲生无一可','不能相随兮愁断肠'].randomGet()
                  player.say(chat);
        
    },
                            
                        },
                        LN_DUANC:{
                              forbid:["boss"],
    trigger:{
        player:"dieBegin",
    },
    forced:true,
    filter:function (event){
        return event.source&&event.source.isIn();
    },
    content:function (){
        trigger.source.loseHp();
        trigger.source.chooseToDiscard(999,'hej',true)
        var chat=['此之长别兮断肠曲！'].randomGet()
                  player.say(chat)
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
    },},                 
                        LN_DUZHI:{
                            trigger:{
                    global:"loseHpBegin",
                },
                            filter:function (event,player){
        return event.player!=player&&_status.currentPhase==player&&player.num('h','sha')>0;
    },
                content:function (){
                    'step 0'
                    var card=player.num('h','sha');
                    player.chooseToDiscard(card,true);
                    'step 1'
                    trigger.player.chooseToDiscard(trigger.player.num('h'),'h',true)
                    var chat=['为了大汉天下，即使是你，也得死！'].randomGet()
                  player.say(chat);
                    
                            
                        },},
                        LN_ZHIXIN:{
                              trigger:{
        source:"damageBefore",
    },
    forced:true,
  
    priority:16,
    check:function (){return false;},
    content:function (){
        trigger.untrigger();
        trigger.finish();
        var chat=["汉家天下，终归是我们吕氏的！","不怕一万，就怕万一！"].randomGet()
                  player.say(chat);
        var ex=0;
        if(trigger.card&&trigger.card.name=='sha'){
            if(player.hasSkill('jiu')) ex++;
            if(player.hasSkill('luoyi2')) ex++;
            if(player.hasSkill('reluoyi2')) ex++;
        }
        trigger.player.loseHp(trigger.num+ex);
    },
    ai:{
        jueqing:true,
    },
                            
                        },
                        LN_JINGZI:{
                             trigger:{
       global:"gainAfter",
    },
  
    filter:function (event,player){
        return event.player!=player&& _status.currentPhase==player&&event.cards&&event.cards.length>1;
    },
    content:function (){
        player.gainPlayerCard(1,trigger.player,'hej',true);                
    }, 
                               mod:{
        maxHandcard:function (player,num){
            var list=['wei','shu','wu','qun','qi','qin','Han','SW','G','han','lu','zhao','yan','chu'];
            var num2=game.countPlayer(function(current){
                if(list.contains(current.group)){
                    list.remove(current.group);
                    return true;
                }
            });
            return num+num2;
        },
    },
                        },
                        LN_XINGWEN:{
                             enable:"phaseUse",
                            usable:2,
    filter:function (event,player){
        return player.hp>0;
    },
    filterTarget:function (card,player,target){
        return target.num('e')>0&&target!=player;
 
    },
    content:function (){
         'step 0'
         player.chooseToDiscard(5,'e',true);
         'step 1'
         target.chooseToDiscard(5,'e',true);
         'step 2'
          target.draw(2);
       var chat=['经文治世，百姓不辛！','圣王以教化为先，汝等亦须修文！'].randomGet()
             player.say(chat);
    },
                        },
                        LN_CN:{
                             trigger:{
        player:"phaseBegin",
    },
    frequent:true,
    filter:function (event,player){
        return player.num('e')<1&&player.num('h','sha')<3;
    },
    content:function (){
        "step 0"
        player.draw(player.hp);
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
                return (_status.event.player.countCards('h')-_status.event.player.hp);
            },
            ai2:function(target){
                var att=get.attitude(_status.event.player,target);
                if(ui.selected.cards.length&&ui.selected.cards[0].name=='du'){
                    if(target.hasSkillTag('nodu')) return 0;
                    return 1-att;
                }
                return att-4;
            },
            prompt:'请选择要送人的卡牌'
        });
         "step 3"
        if(result.bool){
            var chat=['陛下勿忧，凡事尽可交于子夫！'].randomGet()
                  player.say(chat)
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
        "maixie_hp":true,
        effect:{
            target:function (card,player,target){
                if(get.tag(card,'damage')){
                    if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
                    if(!target.hasFriend()) return;
                    if(target.hp>=4) return [1,get.tag(card,'damage')*2];
                    if(target.hp==3) return [1,get.tag(card,'damage')*1.5];
                    if(target.hp==2) return [1,get.tag(card,'damage')*0.5];
                }
            },
        },
    },
                        },
                        LN_XHOU:{
                            trigger:{
                    target:["shaBegin","juedouBegin"],
                },
                            filter:function (event,player){
        return player.hp>0&&player.num('h')>0&&player.num('e')<2;
    },
                content:function (){
                    'step 0'
                    player.draw();
                    var chat=['大汉之仪不可有所失！','贤者自德，不肖者不久！'].randomGet()
                  player.say(chat)
                    'step 1'
                    player.chooseToDiscard(1,'e',true);
                    'step 2'
                    trigger.player.chooseToDiscard(1,'h',true)
                    trigger.player.chooseToDiscard(1,'e',true)
                    trigger.player.chooseToDiscard(1,'j',true)
                }
                            
                            
                        },
                        LN_HX:{
                            enable:"phaseUse",
    usable:3,
    filterTarget:function (card,player,target){
        return player!=target&&target.countCards('h');
    },
    content:function (){
        "step 0"
        player.chooseCardButton(target,target.getCards('h')).set('filterButton',function(button){
            return get.color(button.link)=='black';
        });     
        "step 1"
        if(result.bool){
            target.discard(result.links[0]);
            var chat=['既学，当无拘','汝何至于此？','致汝迂腐不化，吾之过也！'].randomGet()
                  player.say(chat);
        }
    },
    ai:{
        order:11,
        result:{
            target:function (player,target){
                return -target.countCards('h');
            },
        },
        threaten:1.1,
    },
                            
                        },
                        LN_CX:{
                              trigger:{
                    player:"phaseEnd",
                },
                            filter:function (event,player){
        return player.hp>0;
    },
                content:function (){
                     player.draw()            
            var chat=['不学则无所成！','非学不才，非才不有功！'].randomGet()
                  player.say(chat)                                      
},
     mod:{
        maxHandcard:function (player,num){
           return num+=1;
        },
    },
                            
                            
                            
                        },                      
                          LN_JJ:{
                              trigger:{
                    player:"phaseBegin",
                },
                content:function (){
     'step 0'
        player.chooseTarget(get.prompt('LN_JJ'),[1,Infinity],function(card,player,target){
            return target!=player&&target.sex=='female';
        }).set('ai',function(target){
            return ai.get.attitude(player,target);
        });
        'step 1'
          if(result.bool){            
            for(var i=0;i<result.targets.length;i++){
                player.logSkill('LN_JJ',result.targets);            
            player.discardPlayerCard(result.targets[i],'hej',true)        
            var chat=['嫁鸡随鸡，嫁狗随狗！','三从者，此三从也！'].randomGet()
                  player.say(chat)
        };};
          
    
    
    
    
    
},
   
                            
                            
                            
                        },
                        LN_CJ:{
                            skillAnimation:true,  
    unique:true,
    derivation:"LN_HX",
    mark:true,
    intro:{
        content:"limited",
    },
    trigger:{
        player:"phaseBefore",
    },
    forced:true,
    filter:function (event,player){
        if(player.storage.LN_CJ) return false;
       return player.num('h')>player.hp+2;        
    },
    content:function (){
        player.storage.LN_CJ=true;
        player.loseMaxHp();
        player.addSkill('LN_HX');
        player.awakenSkill("LN_CJ");
        player.awakenSkill("LN_JJ");
        var chat=['善学者，不止于学，不惑于所学！'].randomGet()
                  player.say(chat);
    },
                        },
                        LN_QT:{
                              trigger:{
                    player:["damageEnd","loseHp"],
                },
                            filter:function (event,player){
        return player.hp>0;
    },
                content:function (){
     'step 0'
        player.chooseTarget(get.prompt('LN_QT'),[1,Infinity],function(card,player,target){
            return target!=player&&target.num('he')>=0;
        }).set("ai",function(target){
                return get.damageEffect(target,player,player);
            
        });
        'step 1'
          if(result.bool){
            
            for(var i=0;i<result.targets.length;i++){
                player.logSkill('LN_QT',result.targets);            
               player.discardPlayerCard(player.maxHp-player.hp,result.targets[i],'he',true) 
               if(player.num('h')<1)result.targets[i].loseHp();
            var chat=['嗟我怀人，窴彼周行——《诗经》','我仆矣，云何吁矣——《诗经》'].randomGet()
                  player.say(chat)
        };};
          
    
    
    
    
    
},
   
                            
                        },
                        
                        LN_DZ:{
                            trigger:{
player:"damageBegin",
},
content:function (){
    'step 0'
    player.gain(game.createCard('wuzhong'));
    'step 1'
    player.discardPlayerCard(1,trigger.source,'he',true)
    var chat=['不达吾志，决不罢休！'].randomGet()
                  player.say(chat)                
},
                            
                            
                        },
                        LN_MJ:{
                            
                           trigger:{
player:"phaseDiscardBefore",
},
filter:function (event,player){
        return player.num('h')>player.hp;
    },                     
    
content:function (){
    'step 0'
    player.chooseTarget(get.prompt('LN_MJ'),function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return get.attitude(player,target);
        });
        'step 1'
        if(result.bool){
            player.logSkill('LN_MJ',result.targets);
            result.targets[0].gainPlayerCard(player,player.num('h')-player.hp,'h',true)
                     
            var chat=['眼下之务，当在养民'].randomGet()
                  player.say(chat)
        }
                      
                            
},                            
                        },                              
                             LN_CQ:{
                            trigger:{
player:"phaseEnd",
},
                            filter:function (event,player){
        return player.hp>0;
    },
                              
content:function (){
    'step 0'
    player.chooseTarget(get.prompt('LN_CQ'),function(card,player,target){
            return target!=player&&target.maxHp>target.hp&&target.sex=='male';
        }).set('ai',function(target){
            return get.attitude(player,target);
        });
        'step 1'
        if(result.bool){
            player.logSkill('LN_CQ',result.targets);
            result.targets[0].draw();
            result.targets[0].recover();
            player.loseHp();
            var chat=['天若有情天亦老！'].randomGet()
                  player.say(chat)        }                         
},                       
                           
                           },
                        LN_LY:{
                            
                         trigger:{
global:"phaseDiscardAfter",
},
filter:function (event,player){        
                 return player.maxHp>player.hp&&event.player.sex=='male';
    },
content:function (){
    'step 0'
    player.draw();
    'step 1'
    trigger.player.chooseToDiscard(player.maxHp-player.hp,'he',true);            
    var chat=['静女其姝——《诗经》'].randomGet()
                  player.say(chat)

                            
},                        
                            
                            
                            
                            
                            
                            
                            
                          
                            
                            
                            
                        },
                        LN_XS:{
                            enable:"phaseUse",
    usable:1,
    position:"he",
    filterCard:true,
    selectCard:[2,Infinity],
    prompt:"弃置任意张但不小于二的牌并指定一名男性角色，令之摸取等量的牌",
    check:function (card){
        return 6-get.value(card)
    },
                            filterTarget:function (card,player,target){
        return target.sex=='male'&&player!=target;
    },
    content:function (){
        'step 0'
        player.chooseTarget(get.prompt('LN_XS'),function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return get.attitude(player,target);
        });U
        'step 1'
        if(result.bool){
            player.logSkill('LN_XS',result.targets);
            var chat=['为了江山社稷！','一切交给我吧！'].randomGet()
                  player.say(chat)
        
        result.targets[0].draw(cards.length);
        };
        
    },
    ai:{
        order:1,
        result:{
            player:1,
        },
        threaten:1.5,
    },
                            
                        },
                        LN_CY:{
                            trigger:{
player:"phaseDrawBegin",
},
content:function (){
    player.draw();
    var chat=['吾必尽力而行！'].randomGet()
                  player.say(chat)
if(player.maxHp>player.hp)player.draw();    

},
                            mod:{
        maxHandcard:function (player,num){
            return num+=game.countPlayer(function(current){
            return current!=player&&current.sex=='male';
        });
        },
    },
                            
                        },
                             LX:{
                audio:"ext:列女传:2",
                audioname:["jianyong"],
                trigger:{
                    player:"useCard",
                },
                frequent:true,
                filter:function (event){
        return (get.type(event.card)=='trick'&&event.cards[0]&&event.cards[0]==event.card);
    },
                content:function (){
        player.draw();
        if(player.num('e')>1)player.draw();
        if(player.num('e')>0)player.addTempSkill('qicai');
        var chat=['不竭如江河，循环如日月——《孙武兵法》'].randomGet()
                  player.say(chat)
    },
                ai:{
                    threaten:1.4,
                    noautowuxie:true,
                },
                mod:{
                    maxHandcard:function (player,num){
    return num+=player.num('e');
        },
                },
            },
            dc:{
                audio:"kanpo1",
                enable:"chooseToUse",
                position:"hej",
                filterCard:function (card){
        return get.color(card)=='black'||get.color(card)=='red';
    },
                viewAsFilter:function (player){
        return player.num('hej',{color:['black','red']})>0;
    },
                viewAs:{
                    name:"wuxie",
                    suit:"club",
                    number:12,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"club","number":12,"name":"sha","cardid":"6804275322","_transform":"translateX(0px)","clone":{"name":"sha","suit":"club","number":12,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":2065},"timeout":1889,"original":"h"}],
                },
                prompt:"将一张牌当无懈可击使用",
                check:function (card){return 8-ai.get.value(card)},
                threaten:1.2,
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
            "机巧":{
                trigger:{
                    global:"phaseEnd",
                },
                direct:true,
                filter:function (event,player){
        return event.player!=player&&player.num('e')>0&&player.num('h');
    },
                content:function (){
        'step 0'
        if(player.hp>0){
            if(player.hp>0){
                var next=player.chooseTarget('请选择目标',2,function(card,player,target){
                        if(ui.selected.targets.length){
                            var from=ui.selected.targets[0];
                            var judges=from.get('j');
                            for(var i=0;i<judges.length;i++){
                                if(!target.hasJudge(judges[i].viewAs||judges[i].name)) return true;
                            }
                            if(target.isMin()) return false;
                            if((from.get('e','1')&&!target.get('e','1'))||
                                (from.get('e','2')&&!target.get('e','2'))||
                                (from.get('e','3')&&!target.get('e','3'))||
                                (from.get('e','4')&&!target.get('e','4'))||
                                (from.get('e','5')&&!target.get('e','5'))) return true;
                            return false;
                        }
                        else{
                            return target.num('ej')>0;
                        }
                    }).set('complexTarget',true);;
                next.ai=function(target){
                    if(check) return 0;
                    var player=_status.event.player;
                    if(ui.selected.targets.length==0){
                        if(target.num('j')&&get.attitude(player,target)>0) return 10;
                        if(get.attitude(player,target)<0){
                            for(var i=0;i<game.players.length;i++){
                                if(get.attitude(player,game.players[i])>0){
                                    if((target.get('e','1')&&!game.players[i].get('e','1'))||
                                    (target.get('e','2')&&!game.players[i].get('e','2'))||
                                    (target.get('e','3')&&!game.players[i].get('e','3'))||
                                    (target.get('e','4')&&!game.players[i].get('e','4'))||
                                    (target.get('e','5')&&!game.players[i].get('e','5'))) return -get.attitude(player,target);
                                }
                            }
                        }
                        return 0;
                    }
                    return -get.attitude(player,target)*get.attitude(player,ui.selected.targets[0]);
                }
            }
        }
        'step 1'
        if(!result.bool){
            event.finish();
            return;
        }
        player.line2(result.targets);
        event.targets=result.targets;
        player.chooseToDiscard('h',true)
        'step 2'
        if(targets.length==2){
            player.choosePlayerCard('ej',function(button){
                var player=_status.event.player;
                var targets0=_status.event.targets0;
                var targets1=_status.event.targets1;
                if(get.attitude(player,targets0)>get.attitude(player,targets1)){
                    return get.position(button.link)=='j'?10:0;
                }
                else{
                    if(get.position(button.link)=='j') return -10;
                    return get.equipValue(button.link);
                }
            },targets[0]).set('targets0',targets[0]).set('targets1',targets[1]).set('filterButton',function(button){
                var targets1=_status.event.targets1;
                if(get.position(button.link)=='j'){
                    return !targets1.hasJudge(button.link.viewAs||button.link.name);
                }
                else{
                    return !targets1.num('e',{subtype:get.subtype(button.link)});
                }
            });
        }
        'step 3'
        if(result.bool){
            var link=result.links[0];
            if(get.position(link)=='e'){
                event.targets[1].equip(link);
            }
            else if(result.buttons[0].link.viewAs){
                event.targets[1].addJudge({name:link.viewAs},[link]);
            }
            else{
                event.targets[1].addJudge(link);
            }
            event.targets[0].$give(link,event.targets[1])
            game.delay();
        }
    },
            },
            SD:{
                trigger:{
                    player:["phaseEnd","phaseBegin"],
                },
                frequent:true,
                content:function (){        
          var n=[1,2,3,4].randomGet();
            if(n==1) player.turnOver();
            if(n==2) player.damage();
            if(n==3) player.recover(); 
            if(n==4) player.draw(2);
        var chat=['地势坤，君子以厚德载物——《周易》'].randomGet()
                  player.say(chat);
    },
                group:["SD_SD1","SD_SD2","SD_SD3"],
                subSkill:{
                    "SD1":{
                        trigger:{
                            player:"damageEnd",
                        },
                        forced:true,
                        content:function (){
        'step 0'
        player.chooseTarget(get.prompt('SD'),'选择一名其他角色，令之受到一点伤害，然后你摸取等同于已损失体力值的牌',function(card,player,target){
            return target!=player;
        }).set("ai",function(target){
                return get.damageEffect(target,player,player);
            
        });
        'step 1'
        if(result.bool){
            player.logSkill('SD',result.targets);
            result.targets[0].damage();
            player.draw(player.maxHp-player.hp);
            var chat=['犯吾领地者，定教尔等伤痕累累！'].randomGet()
                  player.say(chat);
            
        };
    
    
    

},
                        sub:true,
                    },
                    "SD2":{
                        trigger:{
                            player:"recoverAfter",
                        },
                        forced:true,
                        content:function (){
        'step 0'
        player.chooseTarget(get.prompt('SD'),'选择一名其他角色，令之摸取两张牌，然后你摸取一张牌',function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return ai.get.attitude(player,target);
        });
        'step 1'
        if(result.bool){
            player.logSkill('SD',result.targets);
            result.targets[0].draw(2);
            player.draw();
            var chat=['四海一家！'].randomGet()
                  player.say(chat);
        };        
        
},
                        sub:true,
                    },
                    "SD3":{
                        trigger:{
                            player:"turnOverAfter",
                        },
                        forced:true,
                        content:function (){
        'step 0'
        player.chooseTarget(get.prompt('SD'),'选择一名其他角色，将之翻面',function(card,player,target){
            return target!=player;
        }).set("ai",function(target){
                return get.damageEffect(target,player,player);
            
        });
        'step 1'
        if(result.bool){
            player.logSkill('SD',result.targets);
            result.targets[0].turnOver();
              
            var chat=['平四极，破八荒！'].randomGet()
                  player.say(chat);
        };
    
    
    
    

},
                        sub:true,
                    },
                },
            },
            DX:{
                trigger:{
                    player:"turnOverBefore",
                },
                forced:true,
                content:function (){
trigger.untrigger();
trigger.finish();
player.draw(2);
var chat=['圣王重德，不为物扰！'].randomGet()
      player.say(chat);},
                ai:{
                    noturnOver:true,
                    effect:{
                        target:function (card,player,target,current){
                if(get.tag(card,'turnOver')) return [0,0];
            },
                    },
                },
                group:"DX_DX1",
                subSkill:{
                    "DX1":{
                        trigger:{
                            player:"loseHpBefore",
                        },
                        forced:true,
                        unique:true,
                        content:function (){
        trigger.untrigger();
        trigger.finish();
        player.draw(2);        
    },
                        ai:{
                            effect:{
                                target:function (card){
                if(get.tag(card,'loseHp')){
                    return [0,2];
                }
            },
                            },
                        },
                        sub:true,
                    },
                },
            },
            JF:{
                trigger:{
                    global:"damageEnd",
                },
                frequent:true,            
                checkx:function (event,player){
        var att1=get.attitude(player,event.player);
        var att2=get.attitude(player,event.source);
        return att1>0&&att2<=0;
    },
                filter:function (event,player){
        return player.num('hej')>0&&event.player.hp>0&&event.player.sex=='male';
    },
                content:function (){
         "step 0"
        var next=player.chooseToDiscard('hej',get.prompt('JF'));
        var check=lib.skill.JF.checkx(trigger,player);
        next.set('ai',function(card){
            if(_status.event.goon) return 8-get.value(card);
            return 0;
        });
        next.set('logSkill','JF');
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
            case 'heart':trigger.player.changeHujia();trigger.player.draw();break;
            case 'diamond':trigger.player.draw(2);trigger.player.chooseToDiscard('hej',true); break;
            case 'club':player.loseHp();break;
            case 'spade':player.turnOver();break;
        }
    },
                ai:{
                    expose:0.3,
                },
            },
            SN:{
                unique:true,
                enable:"chooseToUse",
                mark:true,
                skillAnimation:"epic",
                init:function (player){
        player.storage.SN=false;
    },
                filter:function (event,player){
        if(event.type!='dying') return false;
        if(player!=event.dying) return false;
        if(player.storage.SN) return false;
        return true;
    },
                filterTarget:function (card,player,target){
        return player!=target;
       
    },
                content:function (){
        "step 0"
        player.awakenSkill('SN');
        player.recover(player.maxHp-player.hp);
        player.storage.SN=true;
        "step 1"
        player.draw(2);
        player.insertPhase();
        "step 2"
        target.damage();
         target.turnOver();
        // if(lib.config.mode=='identity'){
        //     player.node.identity.style.backgroundColor=get.translation('weiColor');
        //     player.group='wei';
        // }
    },
                ai:{
                    skillTagFilter:function (player){
            if(player.storage.SN) return false;
            if(player.hp>0) return false;
        },
                    save:true,
                    result:{
                        player:4,
                        target:function (player,target){
                if(target.hp==target.maxHp) return 2;
                return 4;
            },
                    },
                    threaten:function (player,target){
            if(!target.storage.SN) return 0.8;
        },
                },
                intro:{
                    content:"limited",
                },
            },
            HX:{
                trigger:{
                    player:"loseEnd",
                },
                forced:true,
                filter:function (event,player){
        return _status.currentPhase!=player;
    },
                content:function (){
     player.draw()
    var chat=['本仙暂时放你一马！'].randomGet()
                  player.say(chat)},
                ai:{
                    threaten:1.8,
                },
            },
            "启夏":{
                trigger:{
                    player:"damageEnd",
                },
                forced:true,
                filter:function (event,player){
        return player.hp>0;
    },
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt('启夏'),function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return ai.get.attitude(player,target);
        });
        'step 1'
        if(result.bool){
            player.logSkill('启夏',result.targets);
            result.targets[0].draw(player.hp);
            var chat=['夫君放心，启儿交于我！'].randomGet()
                  player.say(chat);
        };
    

    
    
    
},
            },
            "LN_JG":{
                trigger:{
                    player:"phaseBefore",
                },
                direct:true,
                filter:function (event,player){
        return player.hp>0;
    },
                content:function (){
        "step 0"
        player.chooseControl('①','②',function(){
              var player=_status.event.player;
            if(player.countCards('h')>3&&player.countCards('h','sha')>1){
                return '①';
            }
            if(player.countCards('h','sha')>2&&player.countCards('h')>2){
                return '①';
            }
            if(player.hp-player.countCards('h')>1){
                return '②';
            }
            return true;
            
            });
          
        "step 1"
        if(result.control=='①'){
            player.loseHp();
            if(player.hujia>0)player.changeHujia(-1);
            player.addTempSkill('LN_ZF','phaseEnd');
            player.logSkill('LN_JG');
            var chat=['见识见识我大商的力量吧！'].randomGet()
                  player.say(chat);
        }
        else if(result.control=='②'){
            player.recover();
            if(player.hujia<1)player.changeHujia();
            player.addTempSkill('LN_LZ','phaseEnd');
            player.logSkill('LN_JG');
            var chat=['养民生息，备战待敌！'].randomGet()
                  player.say(chat);
        }
    },
            },
            "LN_ZF":{
                group:["LN_ZF_1","LN_ZF_2"],
                subSkill:{
                    "1":{
                        enable:"phaseUse",
                        usable:1,
                        filterCard:true,
                        position:"h",
                        viewAs:{
                            name:"sha",
                            suit:"diamond",
                            number:7,
                            cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"diamond","number":7,"name":"shan","cardid":"4456236267","_transform":"translateX(336px)","clone":{"name":"shan","suit":"diamond","number":7,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":622},"timeout":513,"original":"h"}],
                        },
                        ai:{
                            wuxie:function (target,card,player,viewer){
                    if(get.attitude(viewer,target)>0&&target.countCards('h','shan')){
                        if(!target.countCards('h')||target.hp==1||Math.random()<0.7) return 0;
                    }
                },
                            basic:{
                                order:9,
                                useful:1,
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
                                respondShan:1,
                                damage:1,
                                multitarget:1,
                                multineg:1,
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
                        sub:true,
                    },
                    "2":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event){
return event.card&&(event.card.name=='sha')&&
event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
},
                        forced:true,
                        content:function (){
                player.draw();
trigger.num+=1;
                var chat=['臣服于大商的力量之下吧！'].randomGet()
                  player.say(chat);
},
                        sub:true,
                    },
                },
            },
            "LN_LZ":{
                trigger:{
                    player:["phaseUseBefore","phaseUseEnd"],
                },
                content:function (){
    player.draw();
    var chat=['军械武斗，治民在前！'].randomGet()
                  player.say(chat);
    
    

},
                mod:{
                    cardUsable:function (card,player,num){
            if(card.name=='sha') return 0;
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
            "LN_GZ":{
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event,player){
        return event.player.sex=='male';
    },
                content:function (){
    trigger.num++
    player.draw();
    var chat=['汝之不义，必反于汝！','窈窕淑女，君子好逑——《诗经》','英雄难过美人关！'].randomGet()
                  player.say(chat);
},
            },
            "LN_DY":{
                trigger:{
                    player:"damageEnd",
                },
                filter:function (event,player){
        return player.hp>0;
    },
                filterTarget:function (card,player,target){
        return target.sex=='male'&&player!=target;
    },
                content:function (){
            'step 0'
        player.chooseTarget(get.prompt('LN_DY'),function(card,player,target){
            return target!=player&&target.sex=='male';
        }).set('ai',function(target){
            return ai.get.attitude(player,target);
        });
        'step 1'
        if(result.bool){
            player.logSkill('LN_DY',result.targets);
            result.targets[0].draw();
            result.targets[0].recover();
            player.draw();
            var chat=['大业为重，切勿以我为虑！','夫君，请回晋国吧！'].randomGet()
                  player.say(chat)
        };


},
            },
            "LN_YH":{
                trigger:{
                    global:"shaBegin",
                },
                filter:function (event,player){
        return player.num('hej')>0;
    },
                content:function (){
         'step 0'
        player.chooseTarget(get.prompt('LN_YH'),function(card,player,target){
            return target==trigger.target;
        }).set('ai',function(target){
            return ai.get.attitude(player,target);
        });
        'step 1'
        if(result.bool){
            player.logSkill('LN_YH',result.targets);
            result.targets[0].draw();             
            var chat=['虽恶之，不犹于亡乎？——《列女传》',].randomGet()
                  player.say(chat)
        };
    
        
 
    
    
    

},
            },
            "LN_XJ":{
                trigger:{
                    global:"damageBegin",
                },
                filter:function (event,player){
        return event.card&&event.card.name=='sha'&&event.source!=player&&event.source.num('hej')>0;
    },
                content:function (){
             'step 0'
        player.chooseTarget(get.prompt('LN_XJ'),function(card,player,target){
            return target==trigger.source;
        }).set('ai',function(target){
            return ai.get.attitude(player,target);
        });
        'step 1'
        if(result.bool){
            player.logSkill('LN_XJ',result.targets);            
            result.targets[0].chooseToDiscard(1,'hej',true)
            result.targets[0].draw()
        
            var chat=['画者，所以均不均，服不服也——《列女传》','幅者，所以正曲枉也——《列女传》'].randomGet()
                  player.say(chat)
        };
        
    
},
            },
            "方绩":{
                trigger:{
                    player:"recoverAfter",
                },
                filter:function (event,player){
        return player.num('hej')>player.hp;
    },
                content:function (){
    
         'step 0'
        player.chooseTarget(get.prompt('方绩'),function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return ai.get.attitude(player,target);
        });
        'step 1'
        if(result.bool){
            player.logSkill('方绩',result.targets);            
            result.targets[0].recover();
            player.draw();
            var chat=['明而动，晦而休——《列女传》'].randomGet()
                  player.say(chat)
        };
},
            },
            "惟德":{
                trigger:{
                    player:"shaBegin",
                    target:"shaBegin",
                },
                check:function (){return 1},
                content:function (){
        var card=get.cardPile(function(card){
            return get.subtype(card)=='equip2';
        });
        if(card){
            player.gain(card,'gain2');
            var chat=['皇天无亲，惟德是辅——《列女传》'].randomGet()
          player.say(chat);
            game.log(player,'从牌堆获得了',card);
        }
    },
                ai:{
                    order:function (){
            return lib.card.sha.ai.order-1;
        },
                    result:{
                        target:function (player,target){
                return get.damageEffect(target,player);
            },
                    },
                },
                mod:{
                    maxHandcard:function (player,num){
            if(player.num('e')>0) return num+1;
        },
                },
            },
            "严母":{
                trigger:{
                    player:"phaseUseBefore",
                },
                filter:function (event,player){
        return player.num('h')>player.hp;
    },
                content:function (){
      'step 0'
        player.chooseTarget(get.prompt('严母'),function(card,player,target){
            return target!=player;
        }).set("ai",function(target){
                return get.damageEffect(target,player,player);
            
        });
        'step 1'
        if(result.bool){
            player.logSkill('严母',result.targets);            
            result.targets[0].skip('phaseDraw');            
            var chat=['此非吾子之居所也——《列女传》'].randomGet()
                  player.say(chat)
        };


},
                ai:{
                    expose:0.2,
                },
            },
            "预谚":{
                trigger:{
                    global:"phaseBegin",
                },
                filter:function (event,player){
        return event.player!=player&&player.num('h')>0;
    },
                content:function (){
         "step 0"
        var next=player.chooseToDiscard('he',get.prompt('预谚'));
        var check=lib.skill.beige.checkx(trigger,player);
        next.set('ai',function(card){
            if(_status.event.goon) return 8-get.value(card);
            return 0;
        });
        next.set('logSkill','预谚');
        next.set('goon',check);
        "step 1"
        if(result.bool){
            trigger.player.judge();
              
            var chat=['有奇福者，必有奇祸——《列女传》','有甚美者，必有甚恶——《列女传》'].randomGet()
                  player.say(chat)
        }
        
        else{
            event.finish();
        }
        "step 2"
        switch(get.suit(result.card)){
            case 'heart':trigger.player.draw();player.draw();break;
            case 'diamond':if(trigger.player.hujia<1)trigger.player.changeHujia();
                if(trigger.player.hujia>0)trigger.player.draw();break;
            case 'club':trigger.player.chooseToDiscard('he',1,true);break;
            case 'spade':if(trigger.player.hujia>0)trigger.player.changeHujia(-1);
                         if(trigger.player.hujia<1)trigger.player.chooseToDiscard(1,'he',true);break;
        }
    },
                ai:{
                    expose:0.3,
                },
            },
            "鉴师":{
                trigger:{
                    player:"phaseBefore",
                },
                filter:function (player){
        var num=0;
        for(var i=0;i<game.players.length;i++){
            num+=game.players[i].hujia;
        }
        if(num>0) return true;
        return false;
    },
                filterTarget:function (card,player,target){
        return target.hujia>0&&player!=target;
    },
                content:function (){
              'step 0'
        player.chooseTarget(get.prompt('鉴师'),[1,2],function(card,player,target){
            return target!=player&&target.hujia>0;
            
        }).set('ai',function(target){
            return ai.get.attitude(player,target);
           
        })
        'step 1'
          if(result.bool){            
            for(var i=0;i<result.targets.length;i++){                                        
            player.logSkill('鉴师',result.targets);
            player.draw(2)
            result.targets[i].changeHujia(-1);
            result.targets[i].draw(2);             
            var chat=['举趾高，心不固也——《列女传》','莫敖必败——《列女传》'].randomGet()
                  player.say(chat)
        };}
        
          
  
                  
              
          

 

    
      
    
},
            },
            "识天":{
                trigger:{
                    player:"phaseEnd",
                },
                filter:function (player){
        var num=0;
        for(var i=0;i<game.players.length;i++){
            num+=game.players[i].hujia;
        }
        if(num>0) return true;
        return false;
    },
                content:function (){
      'step 0'
        player.chooseTarget(get.prompt('识天'),[1,2],function(card,player,target){
            return target!=player&&target.hujia>0;
        }).set("ai",function(target){
                return get.damageEffect(target,player,player);
            
            
        });
        'step 1'
          if(result.bool){
            
            for(var i=0;i<result.targets.length;i++){
                            
           
           player.logSkill('识天',result.targets);            
            result.targets[0].changeHujia(-1);
            result.targets[0].loseHp();
            result.targets[0].chooseToDiscard(2,'h',true)
            if(player.maxHp>player.hp)player.draw(2);
            var chat=['物盛必衰，日中必移——《列女传》','若王薨，国之福也——《列女传》'].randomGet()
                  player.say(chat)
        };};
          
                                
                                                                        
         
    
     
           
        
    
    
    
    
    
    
    
    
    
},
            },
            "秩秩":{
                trigger:{
                    player:"phaseEnd",
                },
                content:function (){
     'step 0'
        player.chooseTarget(get.prompt('秩秩'),[1,Infinity],function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return ai.get.attitude(player,target);
        });
        'step 1'
          if(result.bool){
            
            for(var i=0;i<result.targets.length;i++){
                player.logSkill('秩秩',result.targets);            
            result.targets[i].draw()            
            var chat=['威仪抑抑，德音秩秩——《诗经》'].randomGet()
                  player.say(chat)
        };};
          
    
    
    
    
    





},
            },
            "罪谏":{
                trigger:{
                    player:"phaseBegin",
                },
                content:function (){
     'step 0'
        player.chooseTarget(get.prompt('罪谏'),function(card,player,target){
            return target!=player&&target.num('j')>0;
        }).set('ai',function(target){
            return ai.get.attitude(player,target);
        });
        'step 1'
          if(result.bool){                                                          
           player.logSkill('识天',result.targets);                       
              result.targets[0].chooseToDiscard(1,'j',true)
              result.targets[0].draw(player.hp);
              result.targets[0].phaseUse();
            var chat=['好奢穷欲，乱之所兴，请妾之罪——《列女传》'].randomGet()
                  player.say(chat)
        };
          
    
    

    
    
    
    
    
    
    
    
    
},
            },
            "救卫":{
                trigger:{
                    global:"dying",
                },
                filter:function (event,player){
        return event.player.hp<=0&&player.num('h')>0;
    },
                content:function (){
        'step 0'
     player.chooseToDiscard(player.num('h'),'h',true)   
     var chat=['卫何罪之有？','若要伐卫，就请先惩治我吧！'].randomGet()
                  player.say(chat);
        'step 1'
        trigger.player.recover();
        trigger.player.changeHujia();
        if(trigger.player!=player)player.changeHujia();
         

},
                ai:{
                    expose:0.2,
                },
            },
            "明辨":{
                trigger:{
                    global:"drawAfter",
                },
                filter:function (event,player){
        return event.player.sex=='male'&&event.result&&event.result.length==1&&event.player!=player&&_status.currentPhase!=player;
    },
                content:function (){
          "step 0"
        player.chooseControl('①','②',function(){
              
            
            if(player.countCards('h')<3){
                return '②';
            }
            if(player.countCards('h','shan')<1){
                return '②';
            }
            if(player.countCards('he')>3){
                return '①';
            }
            return 'cancel2';
            })                 
        "step 1"
        if(result.control=='①'){
         player.discardPlayerCard('he',trigger.player,true);             
           player.logSkill('明辨');
            var chat=['知贤不进，是不忠——《列女传》'].randomGet()
                  player.say(chat);
        }
        else if(result.control=='②'){          
          player.gainPlayerCard(trigger.player,1,'he',true)
          player.logSkill('明辨');
            var chat=['不知其贤，是不智——《列女传》'].randomGet()
                  player.say(chat);
        }
    
    

        
        
        
        
        
        
        
        
        
        
        
},
            },
            jinxian:{
                trigger:{
                    global:"damageEnd",
                },
                filter:function (event,player){
        return event.player.sex=='male'&&event.player.hp>0;
    },
                checkx:function (event,player){
        var att1=get.attitude(player,event.player);
        var att2=get.attitude(player,event.source);
        return att1>0&&att2<=0;
    },
                content:function (){
          "step 0"              
        player.chooseControl('①','②','cancel2',function(){ 
            var attitude=get.attitude(player,trigger.player)
            if(trigger.player.countCards('h')<5){
                return '①';
            }
            if(trigger.source.countCards('he')>3){
                return '②';
            }
            if(trigger.player.countCards('h')>0){
                return '①';
            }
            return 'cancel2';
            
            })          
        "step 1"
        if(result.control=='①'){
           trigger.player.draw(); 
            if(trigger.player.num('j')>0)trigger.player.chooseToDiscard(1,'j',true)
           trigger.player.logSkill('jinxian');
            var chat=['虞丘贤则贤矣，未忠也——《列女传》'].randomGet()
                  player.say(chat);
        }
        else if(result.control=='②'){          
            trigger.player.gainPlayerCard(trigger.source,1,'he',true)
           trigger.player.logSkill('jinxian');
            var chat=['堂上兼女，所以观人能也——《列女传》'].randomGet()
                  player.say(chat);
        }
    
    
    
    
    
    
    
    
    
    
    
 
        
        
        
        
        
        


},
                ai:{
                    expose:0.3,
                },
            },
            "LN_SN":{
                trigger:{
                    player:"phaseBegin",
                },
                filter:function (event,player){
    return player.hp>0;    },
                content:function (){
    'step 0'    
    player.draw();
    player.changeHujia(-99);
        var chat=['吾乃玄女也——《黄帝问玄女兵法》'].randomGet()
                  player.say(chat)
    'step 1'
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
            player.addTempSkill(link);                                
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
        player.addTempSkill(links);                             
           game.log(player,'获得技能','【'+get.translation(links)+'】');                                                                                                
        
},
                group:"LN_SN_1",
                subSkill:{
                    "1":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        content:function (){
    var pl=player
    pl.changeHujia()
    var chat=['万战万胜，万隐万匿——《黄帝问玄女兵法》'].randomGet()
                  player.say(chat)
    
},
                        sub:true,
                    },
                },
            }},
                    translate:{  
                           G:"古",
            GColor:"#000000",
            SW:"王",
            SWColor:"#000000",
            Han:"汉",
            HanColor:"#000000",
            lu:"鲁",
            luColor:"#000000",
            qin:"秦",
            qinColor:"#000000",
            chu:"楚",
            chuColor:"#A67D3D",
            qi:"齐",
            qiColor:"#871F78",
            yan:"燕",
            yanColor:"#007FFF",
            zhao:"赵",
            zhaoColor:"#42426F",
            wei:"魏",
            weiColor:"#FF0000",
            han:"韩",
            hanColor:"#32CD32",
            "ln_hyy":"黄月英",
            "ln_nw":"女娲",
            "ln_ehny":"娥皇女英",
            "ln_tss":"涂山氏",
            "ln_fh":"妇好",
            "ln_qj":"齐姜",
            "ln_fj":"樊姬",
            "ln_mm":"孟母&叔敖母",
            "ln_dmsj":"邓曼&叔姬",
            "ln_djj":"定姜&敬姜",
            "ln_jhwj":"姜后&卫姬",
            "ln_jtxn":"九天玄女",
            'ln_xs':'西施',
            'ln_wzj':'王昭君',
            'ln_zwy':'钟无艳',
            'ln_mjn':'孟姜女',
            'ln_bz':'班昭',
            'ln_wzf':'卫子夫',
            'ln_ds':'邓绥',
            'ln_lz':'吕雉',
            'ln_cy':'蔡琰',
            'LN_GH':'孤魂',
            'LN_GH_info':'你的回合结束时,若你体力值大于1，那么你须失去一点体力并且弃置一张牌（可以取消自动发动）。',
            'LN_BG':'悲歌',
            'LN_BG_info':'当你失去体力后，可以指定一到x名其他角色（x为你已损失体力值）,令这些角色各失去一点体力且若这些角色体力值大于2，将弃置两张牌。',
            'LN_DUANC':'断肠',
            'LN_DUANC_info':'当你死亡时（若存在伤害来源），杀死你的角色弃置所有牌并失去一点体力。',
            'LN_DUZHI':'毒治',
            'LN_ZHIXIN':'雉心',
            'LN_ZHIXIN_info':'你造成的伤害均视为体力流失，',
            'LN_DUZHI_info':'当场上有其他角色在你回合内流失体力时若你手中拥有【杀】，你可以先弃置等同于手中的【杀】数量的牌再令之弃置所有手牌。',
            'LN_JINGZI':'经资',
            'LN_JINGZI_info':'每当有其他角色在你回合内摸取不小于2张牌时，你可以获得其一张牌（包括判定区内的牌）。锁定技：场上每有一种势力，其中包括上古、三王、秦、齐、汉等等，你上升一点手牌上限。',
            'LN_XINGWEN':'行文',
            'LN_XINGWEN_info':'出牌阶段限2次，你可以弃置装备区内所有的牌并且令一名装备区内有牌的角色弃置其装备区内所有牌，然后其摸取两张牌。',
            'LN_CN':'持内',
            'LN_CN_info':'你的回合开始时，若你的装备区内没有牌及手中的【杀】小于3，那么你可以从牌顶堆中摸取x张牌，x为你当前体力值，然后可以将之任意分配给其他的角色。',          
            'LN_XHOU':'贤后',
            'LN_XHOU_info':'每当你于你拥有手牌及装备区内的牌不大于1时被指定为【杀】、【决斗】的目标，你可以摸取一张牌再弃置一张装备区里的牌，然后令来源弃置其手牌、装备、判定区里各一张牌。',           
            'LN_CX':'才学',
            'LN_CX_info':'锁定技：你的手牌上限以及你的防御距离加一。你的回合结束时，你摸取一张牌。',
            'LN_JJ':'枷禁',
            'LN_JJ_info':'你的回合开始时，可以指定任意名其他女性角色，令你弃置其一张牌',
            'LN_CJ':'长卷',
            'LN_CJ_info':'觉醒技：你的回合开始前，若你的手牌数大于体力值加二，那么你失去一点体力上限，并获得技能【会心】，再失去技能【枷禁】',
            'LN_HX':'会心',
            'LN_HX_info':'出牌阶段限三次，你可以观看一名其他角色的手牌，若其中有黑色牌，则你可以弃置其中一张。',
            'LN_QT':'泣天',
            'LN_QT_info':'当你受到伤害或者流失体力后，可以指定任意名其他角色，你依次弃置这些角色各x张牌，x为你已损失体力值,而且，若你没有手牌，还将令这些角色失去一点体力。',
            'LN_DZ':'笃志',
            'LN_DZ_info':'每当你受到伤害时，你获得一张【无中生有】并且弃置伤害来源一张牌。',                          
            'LN_MJ':'明谏',
            'LN_MJ_info':'你的弃牌阶段开始前，若你的手牌数大于体力值，那么你可以选择一名其他角色，令之获得你多出的那部分牌。',
            'LN_CQ':'痴情',
            'LN_CQ_info':'你的回合结束时，你可以指定一名已受伤的男性角色，令之摸取一张牌并且回血一点，然后你失去一点体力。',
            'LN_LY':'落雁',
            'LN_LY_info':'每当场上男性角色在你已受伤之时进行了弃牌阶段后（只要不跳过，你皆可发动此技能），你摸取一张牌并且令之弃置x张牌（x为你已损失体力值）。',
            'LN_CY':'沉鱼',
            'LN_CY_info':'锁定技：场上每有一名男性角色，你的手牌上限便加一。当你的摸牌阶段开始时，你可以摸取一张牌并且若你已受伤，则额外多摸取一张牌。',
            'LN_XS':'献身',
            'LN_XS_info':"出牌阶段限一次，你可以弃置任意张牌（至少为二），然后令一名男性角色摸取等量的牌",
             LX:"灵心",
            "LX_info":"每当你使用一张非转化的普通锦囊牌，可以摸一张牌，且若你的装备区内有牌，你获得技能【奇才】到回合结束，若你装备区内的牌不小于2，额外多摸取一张牌。锁定技：你的手牌上限加x，x为你装备区内的牌。",
            dc:"洞察",
            "dc_info":"在你拥有手牌或者区域内有牌时，你可以将你的任意一张牌当【无懈可击】使用。",
            "机巧":"机巧",
            "机巧_info":"每当一名其他角色的回合结束时，若你的装备区和手中有牌，则你可以选择一名角色，将其区域内的牌移动到另一名角色的相应区域内，然后你弃置一张手牌。",
            SD:"圣德",
            "SD_info":"<font color=#F0F>被动技能</font> :每当你回合开始或结束时，你随机将你的武将牌翻面或受到一点伤害或恢复一点体力或摸取两张牌。<font color=#F0F>平治</font> ：每当你武将牌翻面后，你可以选择一名其他角色，令之将武将牌翻面。<font color=#F0F>神音</font> :当你恢复体力后，可以选择一名其他角色，令之摸取两张牌然后你摸取一张牌。<font color=#F0F>补天</font> :当你受到伤害后，你摸取等同于已损失体力值的牌并指定一名其他角色，令之受到一点伤害。",
            DX:"德馨",
            "DX_info":"当你的武将牌将要被翻面时，你防止之，并且摸取两张牌。每当你将要体力流失时，你防止之，改为令你摸取两张牌。",
            JF:"鉴夫",
            "JF_info":"每当场上有男性角色受到伤害后，若你区域里有牌以及其未死亡，那么你可以弃置一张牌，令该名角色进行一次判定，若为♠，你将武将牌翻面，若为♣，你受到一点体力流失，若为♥，目标角色摸取一张牌并且获得一层护甲，若为♦，目标角色摸取两张牌再弃置区域内的一张牌。",
            SN:"圣女",
            "SN_info":"限定技，当你进入濒死状态时，可以指定一名其他角色，令之受到伤害一点以及翻面，然后你上升体力值至上限并摸两张牌，并且在当前游戏回合结束后，你开始一个新的回合。",
            HX:"狐仙",
            "HX_info":"当你于回合外失去牌后，摸取一张牌。",
            "启夏":"启夏",
            "启夏_info":"当你受到伤害后，可以令一名其他角色摸取等同于你当前体力值的牌。",
            "LN_JG":"巾帼",
            "LN_JG_info":"在你的回合开始前，你可以选择一项：①：自损体力一点，获得技能【征伐】到回合结束,且若你当前拥有护甲，你失去一层。②：恢复一点体力，获得技能【理政】到回合结束时且若你没有护甲，获得一层。",
            "LN_ZF":"征伐",
            "LN_ZF_info":"出牌阶段限一次，你可以将一张手牌当【杀】使用。你使用的【杀】造成的伤害加一且当你如此造成伤害后，摸取一张牌。",
            "LN_LZ":"理政",
            "LN_LZ_info":"锁定技：出牌阶段，你使用[杀]次数为零。你可以在出牌阶段开始前和结束时各摸取一张牌。",
            "LN_GZ":"国姿",
            "LN_GZ_info":"当一名男性角色受到伤害时，若伤害来源为你，那么该伤害加一，且你摸取一张牌。",
            "LN_DY":"大义",
            "LN_DY_info":"每当你受到伤害后，你可以指定一名其他男性角色，令之回复体力一点以及同你共同摸取一张牌。",
            "LN_YH":"远患",
            "LN_YH_info":"每当场上有角色成为【杀】的目标时，若你有牌，那么你可以令之摸取一张牌。",
            "LN_XJ":"训谏",
            "LN_XJ_info":"每当场上有一名其他角色以【杀】造成伤害时，若其有牌，你可以令之弃置一张牌然后摸取一张牌。",
            "方绩":"方绩",
            "方绩_info":"当你回复体力后，若你当前的体力值小于你的总牌数，可以指定一名其他角色，令之也回复体力一点然后你摸取一张牌。",
            "惟德":"惟德",
            "惟德_info":"每当你使用【杀】或者成为【杀】的目标时，你可以从牌堆或者弃牌堆里随机获得一张【防具牌】。锁定技：当你装备区内有牌时，你的手牌上限加一。",
            "严母":"严母",
            "严母_info":"你的出牌阶段开始前，若你的手牌数大于体力值，那么你可以指定一名其他角色，令之跳过他的下个摸牌阶段。",
            "预谚":"预谚",
            "预谚_info":"每当一名其他角色回合开始时，你可以弃置一张手牌，令之判定一次，根据判定结果获得如下效果：♥：其摸取一张牌，然后你摸取一张牌。♦：若其没有护甲，其获得一层护甲，若其拥有护甲，摸取一张牌，♣：其弃置一张牌，♠：若其有护甲，其失去一层护甲，若没有护甲，弃置一张牌。",
            "鉴师":"鉴师",
            "鉴师_info":"你的回合开始之前，若场上有角色拥有护甲，你先摸取两张牌，然后选择至多两名其他拥有护甲的角色，令之失去护甲一层并摸取两张牌。",
            "识天":"识天",
            "识天_info":"你的回合结束时，你可以指定至多两名其他拥有护甲的角色，令之失去一层护甲，然后流失一点体力，并且其弃置两张手牌,此时，若你已受伤，你摸取两张牌。",
            "秩秩":"秩秩",
            "秩秩_info":"你的回合结束时，可以令任意名其他角色摸取一张牌。",
            "罪谏":"罪谏",
            "罪谏_info":"你的回合开始时，你令一名判定区内有牌的角色弃置一张判定区里的牌，然后其摸取等同于你体力值的牌并且获得一个出牌阶段。",
            "救卫":"救卫",
            "救卫_info":"每当场上有角色进入濒死状态，你可以弃置所有手牌，令之回复一点体力并且获得一层护甲,且若你救的为其他角色，那么你也获得一层护甲。",
            "明辨":"明辨",
            "明辨_info":"每当场上有男性角色摸取一张牌后，你可以选择一项：①：你弃置其一张牌。②：你获得其一张牌。",
            jinxian:"进贤",
            "jinxian_info":"每当场上有男性角色受到伤害后，你可以令之选择一项：①：你令该角色摸取一张牌并且若其判定区内有牌，其弃置其中一张。②：其获得伤害来源一张牌。",
            "LN_SN":"神鸟",
            "LN_SN_info":"你的回合开始时，你先摸取一张牌并且失去所有护甲，然后随机获得两项未加入游戏的非锁定、觉醒、主公技技能到回合结束。你的回合结束时，你获得一层护甲。",
      },
                };				
                if(lib.device||lib.node){
                    for(var i in lnz.character){lnz.character[i][4].push('ext:列女传/'+i+'.jpg');}
                }else{
                    for(var i in lnz.character){lnz.character[i][4].push('db:extensio-列女传:'+i+'.jpg');}
                }
                return lnz;
            });	
              lib.config.all.characters.push('lnz');
            if(!lib.config.characters.contains('lnz')){
                lib.config.characters.push('lnz');
            }
            lib.translate['lnz_character_config'] = '列女传';
        };
     
    
},help:{},config:{"lnz":{"name":"把列女传设为禁用","init":false}},package:{
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
},files:{"character":[],"card":[],"skill":[]}}})