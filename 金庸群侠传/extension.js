game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"金庸群侠传",content:function (config,pack){	
	
	// ---------------------------------------阵亡配音------------------------------------------//
	if(config.jyzhengwangpeiyin){
	lib.skill._jyzhengwangpeiyin={
				    trigger:{global:'dieBegin',},
							//direct:true,
							priority:2,
							forced:true,
         unique:true,
         frequent:true,       
					   content:function(){					
					   	    game.playAudio('..','extension','金庸群侠传',trigger.player.name);													 						          					        
 					  	},
			   			}		
						}	
			// ---------------------------------------美化卡牌------------------------------------------//		
							if(config.xmeihuakapai){																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																				
									lib.element.card.init=function(card){
					if(Array.isArray(card)){
						if(card[2]=='huosha'){
							card[2]='sha';
							card[3]='fire';
						}
						if(card[2]=='leisha'){
							card[2]='sha';
							card[3]='thunder';
						}
						if(card[2]=='bingsha'){
							card[2]='sha';
							card[3]='ice';
						}
						if(card[2]=='guangsha'){
							card[2]='sha';
							card[3]='light';
						}
						if(card[2]=='ansha'){
							card[2]='sha';
							card[3]='dark';
						}
						if(card[2]=='fengsha'){
							card[2]='sha';
							card[3]='wind';
						}
					}
					else if(typeof card=='object'){
						card=[card.suit,card.number,card.name,card.nature];
					}
					if(!lib.card[card[2]]){
						lib.card[card[2]]={};
					}
					var info=lib.card[card[2]];
					if(info.global&&!this.classList.contains('button')){
						if(Array.isArray(info.global)){
							while(info.global.length){
								game.addGlobalSkill(info.global.shift());
							}
						}
						else if(typeof info.global=='string'){
							game.addGlobalSkill(info.global);
						}
						delete info.global;
					}
					if(this.name){
						this.classList.remove('epic');
						this.classList.remove('legend');
						this.classList.remove('gold');
						this.classList.remove('unique');
						this.style.background='';
						var subtype=get.subtype(this);
						if(subtype){
							this.classList.remove(subtype);
						}
					}
					if(info.epic){
						this.classList.add('epic');
					}
					else if(info.legend){
						this.classList.add('legend');
					}
					else if(info.gold){
						this.classList.add('gold');
					}
					else if(info.unique){
						this.classList.add('unique');
					}
					var bg=card[2];
					if(info.cardimage){
						bg=info.cardimage;
					}
					var img=lib.card[bg].image;
					if(img){
						if(img.indexOf('db:')==0){
							img=img.slice(3);
						}
						else if(img.indexOf('ext:')!=0){
							img=null;
						}
					}
					this.classList.remove('fullskin');
					this.classList.remove('fullimage');
					this.classList.remove('fullborder');
					this.dataset.cardName=card[2];
					this.dataset.cardType=info.type||'';
					this.dataset.cardSubype=info.subtype||'';
					this.dataset.cardMultitarget=info.multitarget?'1':'0';
					this.node.name.dataset.nature='';
					this.node.info.classList.remove('red');
					if(!lib.config.hide_card_image&&lib.card[bg].fullskin){
						this.classList.add('fullskin');
						if(img){
							if(img.indexOf('ext:')==0){
								this.node.image.setBackgroundImage(img.replace(/ext:/,'extension/'));
							}
							else{
								this.node.image.setBackgroundDB(img);
							}
						}
						else{
							if(lib.card[bg].modeimage){
								this.node.image.setBackgroundImage('image/mode/'+lib.card[bg].modeimage+'/card/'+bg+'.png');
							}
							else{
								this.node.image.setBackgroundImage('image/card/'+bg+'.png');
							}
						}
					}
					else if(lib.card[bg].image=='background'){
						if(card[3]) this.node.background.setBackground(bg+'_'+card[3],'card');
						else this.node.background.setBackground(bg,'card');
					}
					else if(lib.card[bg].fullimage){
						this.classList.add('fullimage');
						if(img){
							if(img.indexOf('ext:')==0){
								this.setBackgroundImage(img.replace(/ext:/,'extension/'));
								this.style.backgroundSize='cover';
							}
							else{
								this.setBackgroundDB(img);
							}
						}
						else if(lib.card[bg].image){
							if(lib.card[bg].image.indexOf('character:')==0){
								this.setBackground(lib.card[bg].image.slice(10),'character');
							}
							else{
								this.setBackground(lib.card[bg].image);
							}
						}
						else{
							var cardPack=lib.cardPack['mode_'+get.mode()];
							if(Array.isArray(cardPack)&&cardPack.contains(bg)){
								this.setBackground('mode/'+get.mode()+'/card/'+bg);
							}
							else{
								this.setBackground('card/'+bg);
							}
						}
					}
					else if(lib.card[bg].fullborder){
						this.classList.add('fullborder');
						if(lib.card[bg].fullborder=='gold'){
							this.node.name.dataset.nature='metalmm';
						}
						else if(lib.card[bg].fullborder=='silver'){
							this.node.name.dataset.nature='watermm';
						}
						if(!this.node.avatar){
							this.node.avatar=ui.create.div('.cardavatar');
							this.insertBefore(this.node.avatar,this.firstChild);
						}
						if(!this.node.framebg){
							this.node.framebg=ui.create.div('.cardframebg');
							this.node.framebg.dataset.auto=lib.card[bg].fullborder;
							this.insertBefore(this.node.framebg,this.firstChild);
						}
						if(img){
							if(img.indexOf('ext:')==0){
								this.node.avatar.setBackgroundImage(img.replace(/ext:/,'extension/'));
								this.node.avatar.style.backgroundSize='cover';
							}
							else{
								this.node.avatar.setBackgroundDB(img);
							}
						}
						else if(lib.card[bg].image){
							this.node.avatar.setBackground(lib.card[bg].image);
						}
						else{
							var cardPack=lib.cardPack['mode_'+get.mode()];
							if(Array.isArray(cardPack)&&cardPack.contains(bg)){
								this.node.avatar.setBackground('mode/'+get.mode()+'/card/'+bg);
							}
							else{
								this.node.avatar.setBackground('card/'+bg);
							}
						}
					}
					else if(lib.card[bg].image=='card'){
						if(card[3]) this.setBackground(bg+'_'+card[3],'card');
						else this.setBackground(bg,'card');
					}
					else if(typeof lib.card[bg].image=='string'&&!lib.card[bg].fullskin){
						if(img){
							if(img.indexOf('ext:')==0){
								this.setBackgroundImage(img.replace(/ext:/,'extension/'));
								this.style.backgroundSize='cover';
							}
							else{
								this.setBackgroundDB(img);
							}
						}
						else{
							this.setBackground(lib.card[bg].image);
						}
					}
					else{
						this.node.background.innerHTML=lib.translate[bg+'_cbg']||lib.translate[bg+'_bg']||get.translation(bg)[0];
						// this.node.background.style.fontFamily=lib.config.card_font;
						if(this.node.background.innerHTML.length>1) this.node.background.classList.add('tight');
						else this.node.background.classList.remove('tight');
					}
					if(!lib.card[bg].fullborder&&this.node.avatar&&this.node.framebg){
						this.node.avatar.remove();
						this.node.framebg.remove();
						delete this.node.avatar;
						delete this.node.framebg;
					}
					if(info.noname&&!this.classList.contains('button')){
						this.node.name.style.display='none';
					}
					if(info.color){
						this.style.color=info.color;
					}
					if(info.textShadow){
						this.style.textShadow=info.textShadow;
					}
					if(info.opacity){
						this.node.info.style.opacity=info.opacity;
						this.node.name.style.opacity=info.opacity;
					}
					if(info.modinfo){
						this.node.info.innerHTML=info.modinfo;
					}
					else{
				 	var dianshu;
         switch(card[1]){
           case 1:dianshu="A";break;
           case 11:dianshu="J";break;
           case 12:dianshu="Q";break;
           case 13:dianshu="K";break;
           default:dianshu=card[1];
          }
	this.node.info.innerHTML=get.translation(card[0])+'<span> </span>'+dianshu;
					}
					if(info.addinfo){
						if(!this.node.addinfo){
							this.node.addinfo=ui.create.div('.range',this);
						}
						this.node.addinfo.innerHTML=info.addinfo;
					}
					else if(this.node.addinfo){
						this.node.addinfo.remove();
						delete this.node.addinfo;
					}
					if(card[0]=='heart'||card[0]=='diamond'){
						this.node.info.classList.add('red');
					}
					this.node.name.innerHTML='';
					this.node.image.className='image';
					var name=get.translation(card[2]);
					if(card[2]=='sha'){
						if(card[3]=='fire'){
							name='火'+name;
							this.node.image.classList.add('fire');
						}
						else if(card[3]=='thunder'){
							name='雷'+name;
							this.node.image.classList.add('thunder');
						}
						else if(card[3]=='ice'){
							name='冰'+name;
							this.node.image.classList.add('ice');
						}
						else if(card[3]=='light'){
							name='光'+name;
							this.node.image.classList.add('light');
						}
						else if(card[3]=='dark'){
							name='暗'+name;
							this.node.image.classList.add('dark');
						}
						else if(card[3]=='wind'){
							name='风'+name;
							this.node.image.classList.add('wind');
						}
					}
					for(var i=0;i<name.length;i++){
						this.node.name.innerHTML+=name[i]+'<br/>';
					}
					if(name.length>=5){
						this.node.name.classList.add('long');
						if(name.length>=7){
							this.node.name.classList.add('longlong');
						}
					}
				 	var dianshu;
         switch(card[1]){
           case 1:dianshu="A";break;
           case 11:dianshu="J";break;
           case 12:dianshu="Q";break;
           case 13:dianshu="K";break;
           default:dianshu=card[1];
          }
this.node.name2.innerHTML=get.translation(card[0])+dianshu+' '+name;
					this.suit=card[0];
					this.number=parseInt(card[1])||0;
					this.name=card[2];
					this.classList.add('card');
					if(card[3]){
						if(lib.nature.contains(card[3])) this.nature=card[3];
						this.classList.add(card[3]);
					}
					else if(this.nature){
						this.classList.remove(this.nature);
						delete this.nature;
					}
					if(info.subtype) this.classList.add(info.subtype);
					if(this.inits){
						for(var i=0;i<lib.element.card.inits.length;i++){
							lib.element.card.inits[i](this);
						}
					}
					if(typeof info.init=='function') info.init();
					this.node.range.innerHTML='';
					switch(get.subtype(this)){
						case 'equip1':
							var added=false;
							if(lib.card[this.name]&&lib.card[this.name].distance){
								var dist=lib.card[this.name].distance;
								if(dist.attackFrom){
									added=true;
									this.node.range.innerHTML='范围: '+(-dist.attackFrom+1);
								}
							}
							if(!added){
								this.node.range.innerHTML='范围: 1';
							}
							break;
						case 'equip3':
						if(info.distance&&info.distance.globalTo){
							this.node.range.innerHTML='防御: '+info.distance.globalTo;
							this.node.name2.innerHTML+='+';
						}
						break;
						case 'equip4':
						if(info.distance&&info.distance.globalFrom){
							this.node.range.innerHTML='进攻: '+(-info.distance.globalFrom);
							this.node.name2.innerHTML+='-';
						}
						break;
					}
					if(_status.connectMode&&!game.online&&lib.cardOL&&!this.cardid){
						this.cardid=get.id();
						lib.cardOL[this.cardid]=this;
					}
					if(!_status.connectMode&&!_status.video){
						this.cardid=get.id();
					}
					var tags=[];
					if(Array.isArray(card[4])){
						tags.addArray(card[4]);
					}
					if(this.cardid){
						if(!_status.cardtag){
							_status.cardtag={};
						}
						for(var i in _status.cardtag){
							if(_status.cardtag[i].contains(this.cardid)){
								tags.add(i);
							}
						}
						if(tags.length){
							var tagstr=' <span class="cardtag">';
							for(var i=0;i<tags.length;i++){
								var tag=tags[i];
								if(!_status.cardtag[tag]){
									_status.cardtag[tag]=[];
								}
								_status.cardtag[tag].add(this.cardid);
								tagstr+=lib.translate[tag+'_tag'];
							}
							tagstr+='</span>';
							this.node.range.innerHTML+=tagstr;
						}
					}
					return this;
				};
					}	
game.playJY = function(fn, dir, sex) {
			if (lib.config.background_speak) {
				if (dir && sex)
					game.playAudio(dir, sex, fn);
				else if (dir)
					game.playAudio(dir, fn);
				else
					game.playAudio('..', 'extension', '金庸群侠传', fn);
			}
		};					
// ---------------------------------------武将分栏------------------------------------------//		
			
    if(config.tlbb){
		for(var i in lib.characterPack[ 'tlbb']) {
			if(lib.character[i][4].indexOf("forbidai")<0) lib.character[i][4].push("forbidai");
		};
	};
	if(config.sdxl){
		for(var i in lib.characterPack['sdxl']) {
			if(lib.character[i][4].indexOf("forbidai")<0) lib.character[i][4].push("forbidai");
		};
	};
	if(config.xajh){
		for(var i in lib.characterPack['xajh']) {
			if(lib.character[i][4].indexOf("forbidai")<0) lib.character[i][4].push("forbidai");
		};
	};
	if(config.sdyx){
		for(var i in lib.characterPack['sdyx']) {
			if(lib.character[i][4].indexOf("forbidai")<0) lib.character[i][4].push("forbidai");
		};
	};	
    if(config.yttl){
		for(var i in lib.characterPack['yttl']) {
			if(lib.character[i][4].indexOf("forbidai")<0) lib.character[i][4].push("forbidai");
		};
	};
},precontent:function (jyqxz){
     if(jyqxz.enable){
		game.import('character',function(){
			var tlbb={
				name:'tlbb',
				connect:true,
				character:{
					"tlbb_spduanyu":["male","qun",4,["tlbb_nayuan","tlbb_zhuha"],[]],
 "tlbb_duanyu":["male","qun",4,["tlbb_xiumai","tlbb_qingguan","tlbb_lingbo"],[]],
  "tlbb_duanyanqing":["male","qun",4,["tlbb_qiangcan","tlbb_liuwang","tlbb_rangquan"],[]],
  "tlbb_azhu":["female","qun",3,["tlbb_yirong1","tlbb_xiaoti"],[]],
   "tlbb_xuzhu":["male","wei",4,["tlbb_pojie","tlbb_huansu"],[]],
   "tlbb_wangyuyan":["female","qun",3,["tlbb_dianhua","tlbb_wendian"],[]],
   "tlbb_kangmin":["female","wei",3,["tlbb_shifu","tlbb_buyao","tlbb_siqian"],[]],
    "tlbb_suxinghe":["male","wei",3,["tlbb_xpojie","tlbb_yaotie","tlbb_yayin"],[]],
	"tlbb_yuelaosan":["male","qun",4,["tlbb_yuguan","tlbb_qianjun"],[]],
	"tlbb_zhongling":["female","qun",3,["tlbb_xundiao","tlbb_qiyuan","tlbb_xinwu"],[]],
	 "tlbb_qiaofeng":["male","wei",4,["tlbb_xianglong","tlbb_kanghui","tlbb_zongpan"],['zhu']],
	 "tlbb_ganbaobao":["female","wei",3,["tlbb_chouchang","tlbb_aijie","tlbb_gulian"],[]],
              
        },
characterIntro:{
	    "tlbb_duanyanqing":"《天龙八部》里的重要角色，段延庆本为云南大理国太子，因皇朝内乱，被奸臣杨义贞谋国后流亡在外，并受到追杀，面目全毁，双腿残废，仅靠腹语交流。后成为四大恶人之首，致力于夺回皇位，最后争了一辈子的皇权落到了亲生儿子段誉身上，实乃造化弄人。【CV：觅阳】",
		"tlbb_xuzhu":"《天龙八部》男主角之一，少林寺无名小僧，木讷老实，相貌丑陋，但为人忠厚善良。随师父发放名帖下山，误打误撞破解珍珑棋局，成为逍遥派无崖子关门弟子，并得其七十余年内力。后遇三十六洞洞主七十二岛岛主欲加害天山童姥而挺身相救，被其强逼破戒，因此和西夏公主李清露结缘。【CV：主人】",
		"tlbb_azhu":"阿朱为段正淳与情妇阮星竹所生的长女，其母因未婚生女故将其转送。出场时为姑苏慕容氏的二婢之一，居于听香水榭，擅长易容术，易容本领鬼斧神工。阿朱孝顺父母，疼爱妹妹，为阻止乔峰与段正淳残杀，易容为段正淳前往青石桥赴约，被乔峰一掌误杀，死前叮嘱乔峰要好好照顾阿紫。【CV：草莓味少女】",
		"tlbb_duanyu":"大理“镇南王”段正淳唯一的儿子，实为段延庆与刀白凤所生。英俊善良，厌恶杀戮争斗。不慎闯入无量山琅环福地，习得凌波微步。曾在少室山与萧峰、虚竹并肩相战，使用六脉神剑单独击败慕容复。造化弄人，先后心仪的女子木婉清、钟灵均为自己的妹妹。【CV：神齐大叔】",
		"tlbb_spduanyu":"段誉为了解救被人挟持的钟灵，误闯入无量山琅环福地，从洞中一尊玉像（其称为神仙姐姐）处习得逍遥派奇功——北冥神功。后来曾在曼陀山庄以北冥神功吸纳严嬷嬷的内功，乘机救走王语嫣、阿朱和阿碧姐妹。后段誉被无量剑派拘禁期间，意外之下服食了百毒之王莽牯朱蛤，自此百毒不侵。【CV：神齐大叔】",
		"tlbb_kangmin":"伙同白世镜、全冠清等害死丈夫马大元的康敏表面上是个冷若冰霜的孀妇，实则生性放荡，水性杨花，与多人有染。因不满乔峰从不正眼相看，恨意横生的她发布虚假消息害得乔峰间接害死阿朱。恶人有天收，最后自恃美貌的她被阿紫划破脸蛋，更将伤口洒上蜂蜜招引蚁群噬咬，死相可怖。【CV：珂里】",
		"tlbb_suxinghe":"苏星河是逍遥派掌门无崖子首徒，因师弟丁春秋背叛师门，他便遵从师父的命令，装聋作哑，自创聋哑门归隐江湖。他一生都守护着师父布下的珍珑棋局，以期有缘之人能破解此局，加入逍遥派，替本派清理门户。他方发武林帖子，最终虚竹误打误撞解开了棋局。苏星河最终死于含笑逍遥散。【CV：弈声传媒有声工作室】",
		"tlbb_zhongling":"万劫谷谷主钟万仇与甘宝宝之女，生父实为段正淳。活泼机灵，笑靥如花。驯有一貂，以毒虫饲之，性凶残而迅捷。段誉在无量山对无量剑派出言相讥而身陷困境，钟灵路见不平，放出飞貂为其解困，自己却被无量剑派捉拿。段誉拿着她的绣花鞋作为信物到万劫谷邀请她父母相助。【CV：草莓味少女】",
		"tlbb_yuelaosan":"岳老三在四大恶人中排行第三，性格憨直，虽被称为凶神恶煞，却重情重义。与段誉的较量失败后，也显出守信的优点，尊称他为师父。岳老三使用鳄嘴剪和鳄尾鞭横行江湖，武功高强力气大，加上长相凶煞，实为江湖中人所惧，其实为人任性可爱，与老顽童周伯通倒有几分相似。【CV：觅阳】",
		"tlbb_wangyuyan":"李青萝与段正淳的女儿，自小生长在曼陀山庄内，与表哥慕容复青梅竹马，表哥一心光复大燕，为他熟读各派武学秘笈，能看出各家武功招式，是一位武学理论家，却不谙武功。曾在听香水榭用武学知识指点闹事的人们。后来被薄情寡义的表哥弃于枯井，因而对其死心。【CV：草莓味少女】",
        "tlbb_qiaofeng":"带头大哥收到不实信息后误杀乔峰双亲，为表悔意，将其寄养在乔三槐夫妇家里，并委托少林授其功夫。后出任丐帮帮主之位，生性放荡的康敏因诱惑不成，便诬陷他杀死夫君马大元，更在杏子林当众揭发他是契丹人的身世，令其众叛亲离，更是卷入了中原武林和辽国的惊涛骇浪之中。【CV：觅阳】",
		"tlbb_ganbaobao":"甘宝宝在少年时与段正淳相遇而陷入情网，并与之珠胎暗结，后来无奈之下被迫嫁给钟万仇，不久产下钟灵。钟万仇因自惭形秽而对她百般宠爱，但她对段正淳念念不忘，日日想着他们过往的旖旎风情。后来难忍相思，以寻找女儿为借口，重入江湖，最后被慕容复杀死在段正淳身边。【CV：仙女桥】",


		},

characterTitle:{
					 "tlbb_azhu":"落影丶逝尘",
					 "tlbb_ganbaobao":"落影丶逝尘",
					  "tlbb_qiaofeng":"落影丶逝尘",
					 "tlbb_zhongling":"落影丶逝尘",
					 "tlbb_yuelaosan":"落影丶逝尘",
					  "tlbb_suxinghe":"落影丶逝尘",
					 "tlbb_wangyuyan":"落影丶逝尘",
					  "tlbb_spduanyu":"落影丶逝尘",
					 "tlbb_xuzhu":"落影丶逝尘",					 
					 "tlbb_duanyanqing":"Sukincen",
					 "tlbb_duanyu":"冰波水微",
					 "tlbb_kangmin":"朱阳光",
									},

skill:{
	"tlbb_chouchang":{
                mod:{
                    wuxieRespondable:function (card,player,target,current){
            if(card.onRES&&card.onRES==true){
                return false;
            }
        },
                },
                ai:{
                    norespond:true,
                    skillTagFilter:function (player,tag,arg,card){
            if(tag=='norespond'&&Array.isArray(arg)){
                if(_status.event.getParent().card.onRES==true) return true;
            }
            return false;
        },
                },
				audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"useCard",
                },
                direct:true,
                priority:-100,
                filter:function (event,card){
        var cardsss=player.getCards('h');
        if(cardsss.length==0) return false;
        if(event.card&&event.card.name=='sha') return true;
        if(event.card&&event.card.name=='juedou') return true;
        if(event.card&&event.card.name=='wanjian') return true;
        if(event.card&&event.card.name=='nanman') return true;
        return false;
    },
                content:function (){
          "step 0"
        var cardsss=player.getCards('h');
        if(cardsss.length==0) event.finish();
        var ca=trigger.card.name;
        if(!trigger.card) event.finish();
        if(ca!='juedou'&&ca!='sha'&&ca!='nanman'&&ca!='wanjian') event.finish();
          "step 1"
          var skr='每当你使用杀、决斗、南蛮入侵、万剑齐发时，你可弃置所有手牌（至少一张），令此牌不能被响应或抵消。然后若此牌造成的伤害大于2点，你受到1点无来源的伤害。'
        player.chooseBool('是否对发动愁肠？'+skr).set('ai',function(){  
            var caa=trigger.card.name;
            if(player.countCards('h','tao')==0&&player.countCards('h')<3&&(caa=='juedou'||caa=='sha')) return true;                     
            return false;
        }); 
        "step 2"
        if(result.bool){
            player.logSkill('tlbb_chouchang');
        }
        else{
            event.finish();
        }     
        "step 3"
        var cards=player.getCards('h');
        player.discard(cards);    
        "step 4"
        trigger.card.onRES=true;
        trigger.damagenum=0;
    },
                group:["tlbb_chouchang_after","tlbb_chouchang_damage"],
                subSkill:{
                    after:{
                        trigger:{
                            player:"useCardAfter",
                        },
                        filter:function (event,player){
                return event.card&&event.card.onRES==true;
            },
                        forced:true,
                        popup:false,
                        content:function (){
                "step 0"
                delete trigger.card.onRES;
                "step 1"
                if(trigger.damagenum>2) player.damage(1,'nosource');
                
            },
                        sub:true,
                    },
                    damage:{
                        trigger:{
                            source:"damageEnd",
                        },
                        filter:function (event){
                return event.card&&event.card.onRES==true;
            },
                        forced:true,
                        popup:false,
                        content:function (){
                  "step 0"
                trigger.getParent(2).damagenum+=trigger.num;
                "step 1"
                game.log(player,'因愁肠造成的伤害总计',trigger.getParent(2).damagenum);
            },
                        sub:true,
                    },
                    begin:{
                        trigger:{
                            player:["shaBegin","nanmanBegin","wanjianBegin","juedouBegin"],
                        },
                        filter:function (event){
                return event.card&&event.card.onRES==true;
            },
                        content:function (){
                //由于万剑南蛮没有event.directHit函数，废弃不用
                trigger.directHit=true;
            
            },
                        sub:true,
                    },
                },
            },
            "tlbb_aijie":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"damageEnd",
                },
                filter:function (event){
        return (event.num>0)
    },
                direct:true,
                content:function (){
        'step 0'
        event.num1=trigger.num;
        'step 1'
        player.chooseTarget(get.prompt('tlbb_aijie'),function(card,player,target){
            return target!=player&&target.getHandcardLimit()>0;;
        }).set('ai',function(target){
            return -get.attitude(player,target);
        });
        'step 2'
        if(result.bool){
            player.logSkill('tlbb_aijie',result.targets);
            if(!result.targets[0].hasSkill('tlbb_aijie_hs')){
                result.targets[0].addSkill('tlbb_aijie_hs');
                event.num1--;
            }
            else{
                result.targets[0].storage.tlbb_aijie_hs++;
                result.targets[0].markSkill('tlbb_aijie_hs');
                result.targets[0].syncStorage('tlbb_aijie_hs');
                event.num1--;
            }
            if(event.num1>0) event.goto(1);
        }
        else{
            event.finish();
        }
    },
                subSkill:{
                    hs:{
                        mark:true,
                        marktext:"哀",
                        init:function (player){
                player.storage.tlbb_aijie_hs=1;
                player.markSkill('tlbb_aijie_hs');
                player.syncStorage('tlbb_aijie_hs');
            },
                        intro:{
                            content:function (storage){
                    return '当前手牌上限减'+storage+'';
                },
                        },
                        mod:{
                            maxHandcard:function (player,num){
                    return num-player.storage.tlbb_aijie_hs;
                },
                        },
                        sub:true,
                    },
                },
            },
            "tlbb_gulian":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                audio:"ext:tlbb_ganbaobao:true",
                filter:function (event,player){
        if(event.num<=1) return false;
        return !player.countCards('h');
    },
                priority:-10,
                content:function (){
        trigger.num=1;
    },
            },
	"tlbb_xianglong":{
		audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"useCard",
                },
                filter:function (event,player){
        if(event.card.name!='sha') return false;
        return true;
    },
                content:function (){
        "step 0"
        player.judge(function(card){
            if(get.color(card)=='black') return 1;
            if(get.color(card)=='red'){
                var cansha=game.hasPlayer(function(current){
                    return !trigger.targets.contains(current)&&player.canUse(trigger.card,current,false)&&get.effect(current,trigger.card,player,player)>0;
                });
                var cansha2=game.hasPlayer(function(current){
                    return !trigger.targets.contains(current)&&player.canUse(trigger.card,current,false);
                });
                if(cansha) return 2;
                if(cansha2&&player.hasSkill('tlbb_kanghui')) return 2;
                return -1;
            }
        });
        "step 1"
        if(result.color=='black'){
            trigger.ADDdamage=true;
            event.finish();
        }
        else{
            event.goto(2);
        }
        "step 2"
        player.chooseTarget('选择一名角色额外成为杀的目标',function(card,player,target){
            return !_status.event.source.contains(target)&&player.canUse(trigger.card,target,false);
        }).set('source',trigger.targets).set('ai',function(target){
            var player=_status.event.player;
            var eff=get.effect(target,trigger.card,player,player);
            if(player.hasSkill('tlbb_kanghui')&&eff<=0) return 0.2;
            return eff;
        });
        "step 3"
        if(result.bool){
            if(!event.isMine()&&!_status.connectMode) game.delayx();
            event.target=result.targets[0];
        }
        else{
            event.finish();
        }
        "step 4"
        player.line(event.target,'green');
        game.log(event.target,'额外成为了'+get.translation(trigger.card)+'的目标');
        trigger.targets.push(event.target);
    },
                group:["tlbb_xianglong_damage"],
                subSkill:{
                    damage:{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event){
                if(!event.card||event.card.name!='sha'||!event.notLink()) return false;
                return event.getParent(2).ADDdamage==true;
            },
                        forced:true,
                        content:function (){
                trigger.num++;
            },
                        ai:{
                            damageBonus:true,
                        },
                        sub:true,
                    },
                },
            },
            "tlbb_kanghui":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    source:"damageBegin",
                },
                check:function (event,player){
        return get.damageEffect(event.player,player)>=0;
    },
                content:function (){
        "step 0"
        player.draw(2);
        "step 1"
        trigger.cancel();
    },
                ai:{
                    effect:{
                        player:function (card,player,target){
                if(get.tag(card,'damage')) return [1,20];
            },
                    },
                },
            },
            "tlbb_zongpangp":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"judge",
                },
                filter:function (event,player){
        if(!event.player.hasSkill('tlbb_zongpan')) return false;
        if(event.player==player) return false;
        if(player.group!='wei'||player.countCards('h')==0) return false;
        return true;
    },
                content:function (){
          "step 0"
        player.chooseCard(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
        get.translation(trigger.player.judging[0])+'，','h',function(card){
            return true;
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
			game.playJY(['tlbb_zongpan1','tlbb_zongpan2'].randomGet());
            event.cardssss=result.cards
            trigger.player.chooseControl('拒绝','不拒绝',function(event,player){    
                if(get.attitude(trigger.player,player)<=0) return '拒绝';
                return '不拒绝';
            });
        }
        else{
            event.finish();
        }
        "step 2"
        if(result.control=='拒绝'){
            game.log(trigger.player,'拒绝了',player,'替换判定牌');
            trigger.player.chat('拒绝');
            event.finish();
            return;
        }
        "step 3"
        player.respond(event.cardssss,'highlight');
        "step 4"
        if(event.cardssss){
            player.$gain2(trigger.player.judging[0]);
            player.gain(trigger.player.judging[0]);
            trigger.player.judging[0]=event.cardssss[0];
            if(!get.owner(event.cardssss[0],'judge')){
                trigger.position.appendChild(event.cardssss[0]);
            }
            game.log(trigger.player,'的判定牌改为',event.cardssss[0]);
        }
        "step 5"
        game.delay(2);
    },
                ai:{
                    tag:{
                        rejudge:1,
                    },
                },
            },
            "tlbb_zongpangpin":{
                group:["tlbb_zongpangp"],
                trigger:{
                    global:"compare",
                },
                filter:function (event,player){
        if(event.iwhile) return false;
        if(player.group!='wei'||player.countCards('h')==0) return false;
        if(event.player.hasSkill('tlbb_zongpan')&&event.player!=player) return true;
        if(event.target.hasSkill('tlbb_zongpan')&&event.target!=player) return true;
        return false;
    },
                silent:true,
                content:function (){
        "step 0"
		game.playJY(['tlbb_zongpan1','tlbb_zongpan2'].randomGet());
        if(trigger.player.hasSkill('tlbb_zongpan')&&trigger.player!=player){
            trigger.player.chooseControl('拒绝','不拒绝',function(event,player){
                if(get.attitude(trigger.player,player)<=0) return '拒绝';
                return '不拒绝';
            });
        }
        "step 1"
        if(result.control=='拒绝'){
            game.log(trigger.player,'拒绝了',player,'替换拼点牌');
            trigger.player.chat('拒绝');
            event.finish();
            return;
        }
        "step 2"
        if(trigger.target.hasSkill('tlbb_zongpan')&&trigger.target!=player){
            trigger.target.chooseControl('拒绝','不拒绝',function(event,player){
                if(get.attitude(trigger.target,player)<=0) return '拒绝';
                return '不拒绝';
            });
        }
        "step 3"
        if(result.control=='拒绝'){
            game.log(trigger.target,'拒绝了',player,'替换拼点牌');
            trigger.target.chat('拒绝');
            event.finish();
            return;
        }
        "step 4"
    var next=player.chooseCard(1,'h','是否选择一张牌替换拼点牌？？',function(card,player){
            return true;
        });
    var att=get.attitude(_status.event.player,trigger.player);
    var att1=get.attitude(_status.event.player,trigger.target);
    next.ai=function(card){
        if(att>0&&trigger.player!=player) {
            if(trigger.player.hasSkill('tlbb_zongpan')&&get.value(trigger.card1)-get.value(card)>0){
                return get.number(card);
            }
        }
        if(att<=0&&trigger.player!=player) {
            if(trigger.player.hasSkill('tlbb_zongpan')&&get.value(trigger.card1)-get.value(card)>0){
                return 8-get.number(card);
            }
        }
        if(att1>0&&trigger.target!=player) {
            if(trigger.target.hasSkill('tlbb_zongpan')&&get.value(trigger.card2)-get.value(card)>0){
                return get.number(card);
            }
        }
        if(att1<=0&&trigger.target!=player) {
            if(trigger.target.hasSkill('tlbb_zongpan')&&get.value(trigger.card2)-get.value(card)>0){
                return 8-get.number(card);
            }
        }
        return -1;
    };
    "step 5"
    if(result.bool){
        event.cardss=result.cards[0]; 
        player.respond(event.cardss,'highlight');
    }
    else{
         event.finish();
    }
    "step 6"
    if(event.cardss){
        if(trigger.player.hasSkill('tlbb_zongpan')&&trigger.target.hasSkill('tlbb_zongpan')){
            event.goto(7);
            
        }
        else if(trigger.player.hasSkill('tlbb_zongpan')&&trigger.player!=player){
            player.gain(trigger.card1,'gain2');
            trigger.card1=event.cardss;
            trigger.num1=get.number(event.cardss);
            game.log(trigger.player,'拼点牌改为',event.cardss);  
            game.log(trigger.player,'拼点牌点数改为',trigger.num1);
            event.finish();
        }
        else if(trigger.target.hasSkill('tlbb_zongpan')&&trigger.target!=player){
            player.gain(trigger.card2,'gain2');
            trigger.card2=event.cardss;
            trigger.num2=get.number(event.cardss);
            game.log(trigger.target,'拼点牌改为',event.cardss);
            game.log(trigger.target,'拼点牌点数改为',trigger.num2);
            event.finish();
        }
    }
      "step 7"
           event.str1='替换'+get.translation(trigger.player)+'拼点牌'
           event.str2='替换'+get.translation(trigger.target)+'拼点牌'
        player.chooseControl(event.str1,event.str2,function(event,player){
            return event.str1;
        });
      "step 8"
        if(result.control==event.str1){
            player.gain(trigger.card1,'gain2');
            trigger.card1=event.cardss;
            trigger.num1=get.number(event.cardss);
            game.log(trigger.player,'拼点牌改为',event.cardss);
            game.log(trigger.player,'拼点牌点数改为',trigger.num1);
        }
        else{
            player.gain(trigger.card2,'gain2');
            trigger.card2=event.cardss;
            trigger.num2=get.number(event.cardss);
            game.log(trigger.target,'拼点牌改为',event.cardss);
            game.log(trigger.target,'拼点牌点数改为',trigger.num2);
        }

    },
                forced:true,
                popup:false,
            },
            "tlbb_zongpan":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"gameStart",
                    player:"enterGame",
                },
                zhuSkill:true,
                popup:false,
                forced:true,
                unique:true,
                filter:function (event,player){
        return player.identity!='zhu';
    },
                content:function (){
        player.removeSkill('tlbb_zongpan');
    },
                global:"tlbb_zongpangpin",
            },
	"tlbb_xundiao":{
		 audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"damageEnd",
                },
                filter:function (event){
        if(!event.player.isAlive()||!event.source.isAlive()) return false;
        if(player.countCards('h','sha')==0) return false;
        if(!event.source||event.source==player) return false;
        if(!lib.filter.targetEnabled({name:'sha',nature:'fire'},player,event.source)) return false;
        return event.card&&event.card.name=='sha';
    },
                direct:true,
                content:function (){
         "step 0"
         //过滤器又又又抽风了，以下代码是防过滤器抽风的
        if(!trigger.player.isAlive()||!trigger.source.isAlive()) event.finish();
        if(player.countCards('h','sha')==0) event.finish();
        if(!trigger.source||trigger.source==player) event.finish();
        if(!trigger.card||trigger.card.name!='sha') event.finish();
        if(!lib.filter.targetEnabled({name:'sha',nature:'fire'},player,trigger.source)) event.finish();
         "step 1"
        var next=player.chooseCard(1,'h','是否选择一张普通杀当火杀对'+get.translation(trigger.source)+'使用？',function(card,player){
            return card.name=='sha'&&card.nature!='thunder'&&card.nature!='fire';
        });
        var att1=get.attitude(_status.event.player,trigger.player);
        var att2=get.attitude(_status.event.player,trigger.source);
        next.ai=function(card){
            if(att2<=0&&att1>0){
                return 1;
            }
            return -1;
        };
          "step 2"
        if(result.bool){
            player.logSkill('tlbb_xundiao',trigger.source);
            player.line(trigger.source,'green');
            player.storage.tlbb_xundiao=trigger.player;
            player.addTempSkill('tlbb_xundiao_damage',{player:'useCardEnd'});
            var card={name:'sha',nature:'fire'};
            player.useCard(card,trigger.source,result.cards,false);
        }
        else{
            event.finish();
        }
    },
                subSkill:{
                    damage:{
                        trigger:{
                            source:"damageAfter",
                        },
                        popup:false,
                        forced:true,
                        onremove:function (player){
                delete player.storage.tlbb_xundiao;
            },
                        content:function (){
                if(trigger.getParent(4).skill=='tlbb_xundiao'&&trigger.card.name=='sha'){
                    player.storage.tlbb_xundiao.recover();
                }
            },
                        sub:true,
                    },
                },
            },
            "tlbb_qiyuan":{
				 audio:"ext:金庸群侠传:2",
                trigger:{
                    target:"shaBefore",
                },
                check:function (event,player){
        //if(get.damageEffect(player,event.player,player)>=0) return false;
        return true;
    },
                direct:true,
                content:function (){
         "step 0"
        if(event.current==undefined) event.current=player.next;
        if(event.current==player){
            event.finish();
        }
        "step 1"
        if(event.current.countCards('h','sha')==0){
            event.current=event.current.next;
            event.goto(0);
          }
         "step 2"
        var next=event.current.chooseCard(1,'h','是否选择一张杀交给'+get.translation(player)+'？',function(card,player){
            return card.name=='sha';
        });
        var att1=get.attitude(event.current,player);
        next.ai=function(card){
            if(att1>0){
                return 1;
            }
            return -1;
        };
        "step 3"
        if(result.bool){
            event.current.line(player,'green');
            event.current.logSkill('tlbb_qiyuan',player);
            player.gain(result.cards[0],event.current);
            event.current.$give(result.cards.length,player);
            game.delay(0.7);
            event.current=event.current.next;
            event.goto(0);
        }
        else{
            event.current=event.current.next;
            event.goto(0);
        }
    },
            },
            "tlbb_xinwu":{
				 audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"gainEnd",
                },
                filter:function (event,player){
        if(event.source&&event.source!=player){
            for(var i=0;i<event.cards.length;i++){
                if(event.cards[i].name=='sha') return true;
            }
        }
        return false;
    },
                direct:true,
                content:function (){
        "step 0"
        event.cards=trigger.cards.slice(0);
        var next=player.chooseCard(1,'h','是否展示其中一张杀令'+get.translation(trigger.source)+'摸一张牌？',function(card,player){
            return card.name=='sha'&&_status.event.getParent().cards.contains(card);
        });
        var att1=get.attitude(player,trigger.source);
        next.ai=function(card){
            if(att1>0){
                return 1;
            }
            return -1;
        };
        "step 1"
        if(result.bool){
            player.logSkill('tlbb_xundiao',trigger.source);
            player.line(trigger.source,'green');
            player.showCards(result.cards[0])
            trigger.source.draw();
            
        }
        else{
            event.finish();
        }
    },
            },
"tlbb_qianjun2":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"shaMiss",
                },
                check:function (event,player){
        return get.attitude(player,event.target)<0;
    },
                filter:function (event,player){
        if(!event.responded||!event.responded.cards||event.responded.cards.length!=1) return false;
        return (event.responded&&get.itemtype(event.responded.cards)=='cards');
    },
                direct:true,
                content:function (){
        "step 0"
        var next=player.chooseToDiscard(1,'h','是否弃置一张与'+get.translation(trigger.responded.cards[0])+'花色相同的牌？若如此做，该杀命中。',function(card,player){
        return get.suit(card)==get.suit(trigger.responded.cards[0]);
    });
    next.ai=function(card){
        var att=get.attitude(player,trigger.target);
        if(att<0){
            return 9-get.value(card);
        }
        return -1;
    };
        "step 1"
        if(result.bool){
            player.logSkill('tlbb_qianjun2',trigger.target);
            trigger.untrigger();
            trigger.trigger('shaHit');
            trigger._result.bool=false;
        }
    },
            },
            "tlbb_yuguan":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    source:"damageEnd",
                },
                filter:function (event){
        if(player.previous==event.player) return false;
        if(player==event.player.next) return false;
        if(!lib.filter.targetEnabled2(event.card,player,event.player.next)) return false;
        if(get.distance(event.player,event.player.next)>1) return false;
        return event.card&&event.card.name=='sha'&&event.notLink();
    },
                direct:true,
                content:function (){
         "step 0"
        if(!trigger.card||trigger.card.name!='sha'||!trigger.notLink()) event.finish();
        if(player.previous==trigger.player) event.finish();
        if(player==trigger.player.next) event.finish();
        if(!lib.filter.targetEnabled2(trigger.card,player,trigger.player.next)) event.finish();
        if(get.distance(trigger.player,trigger.player.next)>1) event.finish();
        "step 1"
        player.chooseBool('是否对'+get.translation(trigger.player.next)+'使用'+get.translation(trigger.card)+'？').set('ai',function(){                                
            if(get.effect(trigger.player.next,trigger.card,player,player)>0) return true;                     
            return false;
        }); 
        "step 2"
        if(result.bool){
            player.logSkill('tlbb_yuguan',trigger.player.next);
            player.useCard(trigger.card,trigger.player.next);
        }
        else{
            event.finish();
        }     
    },
            },
            "tlbb_qianjun":{
                group:["tlbb_qianjun_sha","tlbb_qianjun_use","tlbb_qianjun_unbuff"],
                subSkill:{
                    unbuff:{
                        trigger:{
                            player:"useCardAfter",
                            global:"phaseAfter",
                        },
                        priority:2,
                        filter:function (event){
                if(event.name=='useCard') return (event.card&&(event.card.name=='sha'));
                return true;
            },
                        forced:true,
                        popup:false,
                        content:function (){    
                if(player.hasSkill('tlbb_qianjun_buff')) player.removeSkill('tlbb_qianjun_buff');
                if(player.hasSkill('tlbb_qianjun_buffb')) player.removeSkill('tlbb_qianjun_buffb');
            },
                        sub:true,
                    },
                    buff:{
                        mark:true,
                        marktext:"均",
                        intro:{
                            content:"你使用的杀需要两张闪才能闪避",
                        },
                        trigger:{
                            player:"shaBegin",
                        },
                        popup:false,
                        forced:true,
                        filter:function (event,player){
                return !event.directHit;
            },
                        priority:-1,
                        content:function (){
							game.playJY(['tlbb_qianjun1','tlbb_qianjun2'].randomGet());
                if(typeof trigger.shanRequired=='number'){
                    trigger.shanRequired++;
                }
                else{
                    trigger.shanRequired=2;
                }
            },
                        sub:true,
                    },
                    buffb:{
                        mark:true,
                        marktext:"伤",
                        intro:{
                            content:"你使用的杀造成的伤害加一",
                        },
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event){
                return event.card&&event.card.name=='sha'&&event.notLink();
            },
                        popup:false,
                        forced:true,
                        content:function (){
							game.playJY(['tlbb_qianjun1','tlbb_qianjun2'].randomGet());
                trigger.num++;
            },
                        ai:{
                            damageBonus:true,
                        },
                        sub:true,
                    },
                    use:{
                        trigger:{
                            player:["useCard"],
                        },
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                if(event.skill=='tlbb_qianjun_sha'&&event.card.name=='sha') return true;
                return false;
            },
                        content:function (){
                player.addTempSkill('tlbb_qianjun_buff','phaseEnd');
                player.addTempSkill('tlbb_qianjun_buffb','phaseEnd');
            },
                        sub:true,
                    },
                    sha:{
                        enable:["chooseToUse"],
                        filterCard:{
                            name:"sha",
                        },
                        selectCard:2,
                        viewAs:{
                            name:"sha",
                            cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"diamond","number":13,"name":"sha","cardid":"4744408281","_transform":"translateX(448px)","clone":{"name":"sha","suit":"diamond","number":13,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":158}}],
                            suit:"club",
                            number:9,
                        },
                        precontent:function (result){
                "step 0"
                var card=event.result.cards;
                event.cards=card;
                player.lose(card);
                player.$throw(card,1000);
                game.log(player,'将',card,'当一张无花色的杀使用');
                event.result.cards.length=0;
            },
                        viewAsFilter:function (player){
                if(player.countCards('h','sha')<2) return false;
            },
                        prompt:"将两张杀当杀使用",
                        check:function (){return 1},
                        ai:{
                            effect:{
                                target:function (card,player,target,current){
                        if(get.tag(card,'respondSha')&&current<0) return 0.6
                    },
                            },
                            respondSha:true,
                            skillTagFilter:function (player){
                    if(player.countCards('h','sha')<2) return false;
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
                },
            },
"tlbb_xpojie":{
	 audio:"ext:金庸群侠传:2",
                unique:true,
                trigger:{
                    global:"judge",
                },
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                content:function (){
           "step 0"
           event.cardss=[];
           player.chooseTarget([1,2],function(card,player,target){
               return target.countCards('h')>0&&player!=target;
           },function(target){
               var att=get.attitude(_status.event.player,target);
               if(target.hasSkill('tuntian')) return att/10;
               return 1-att;
        });
        "step 1"
        if(result.bool){
            event.targets=result.targets;
            event.numss=result.targets.length
            event.num1=0;
            }
        else{
            event.goto(4);
        }
          "step 2"
          if(event.num1<event.numss){
              event.targets[event.num1].chooseCard(true).ai=function(card){
                  if(_status.event.getRand()<0.5) return Math.random();
                  return get.value(card);
              };
          }
        else{
            event.goto(4);
        }
          "step 3"
        event.card2=result.cards[0];
        game.log(event.targets[event.num1],'展示了',event.card2);
        event.cardss.push(event.card2);
        event.num1++;
        event.goto(2);
        "step 4"
        player.chooseCard(true).ai=function(card){
            if(_status.event.getRand()<0.5) return Math.random();
            return get.value(card);
        }
           "step 5"
        event.card2=result.cards[0];
        game.log(player,'展示了',event.card2);
        event.cardss.push(event.card2);
        "step 6"
        var list=event.cardss;
        player.chooseButton([get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+get.translation(trigger.player.judging[0])+
            '，'+get.prompt('tlbb_xpojie'),list,'hidden'],function(button){
            var card=button.link;
            var trigger=_status.event.getTrigger();
            var player=_status.event.player;
            var judging=_status.event.judging;
            var result=trigger.judge(card)-trigger.judge(judging);
            var attitude=get.attitude(player,trigger.player);
            return result*attitude;
        }).set('judging',trigger.player.judging);
        "step 7"
        if(result.bool){
            var card=result.links[0];
               if(player.getCards('h').contains(card)){
               player.respond(card,'highlight');
                   game.delay();
                   player.update();
                }
           if(event.targets[0]&&event.targets[0].getCards('h').contains(card)){
             // event.targets[0].lose(card,event.position);
               event.targets[0].respond(card,'highlight');
                }
            if(event.targets[1]&&event.targets[1].getCards('h').contains(card)){
                //event.targets[1].lose(card,event.position);
                event.targets[1].respond(card,'highlight');
             }
            event.car=card;
            }
           "step 8"
        if(result.bool){
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
            trigger.player.judging[0]=event.car;
            if(!get.owner(result.cards[0],'judge')){
                trigger.position.appendChild(event.car);
            }
            game.log(trigger.player,'的判定牌改为',event.car);
            game.delay(2);
        }
        else{
            for(var i=0;i<event.cardss.length;i++){
                var card2=event.cardss[i];
                if(player.getCards('h').contains(card2)){
               player.discard(card2);
                }
           if(event.targets[0]&&event.targets[0].getCards('h').contains(card2)){
             // event.targets[0].lose(card,event.position);
               event.targets[0].discard(card2);
                }
            if(event.targets[1]&&event.targets[1].getCards('h').contains(card2)){
                //event.targets[1].lose(card,event.position);
                event.targets[1].discard(card2);
                }
            }
        }
    },
                ai:{
                    tag:{
                        rejudge:0.6,
                    },
                },
            },
			"tlbb_yaotie3":{},
            "tlbb_yaotiehc":{
				 audio:"ext:金庸群侠传:2",
                enable:"phaseUse", 
    usable:1, 
    filterTarget:function (card,player,target){ 
        var num=target.countCards('h'); 
        if(ui.selected.targets.length){ 
            for(var i=0;i<ui.selected.targets.length;i++){ 
                if(num==ui.selected.targets[i].countCards('h')){ 
                    return false; 
                }; 
            } 
        } 
        if(ui.selected.targets.length==2&&ui.selected.targets[0].countCards('h')-num!=num-ui.selected.targets[1].countCards('h')&&num-ui.selected.targets[0].countCards('h')!=ui.selected.targets[0].countCards('h')-ui.selected.targets[1].countCards('h')&&num-ui.selected.targets[1].countCards('h')!=ui.selected.targets[1].countCards('h')-ui.selected.targets[0].countCards('h')){ 
            return false; 
        } 
        if(ui.selected.targets.length>2){ 
            var num2=target.countCards('h'); 
            var num3=target.countCards('h'); 
            for(var i=0;i<ui.selected.targets.length;i++){ 
                if(ui.selected.targets[i].countCards('h')<num2){ 
                    num2=ui.selected.targets[i].countCards('h'); 
                } 
                if(ui.selected.targets[i].countCards('h')>num3){ 
                    num3=ui.selected.targets[i].countCards('h'); 
                } 
            } 
            if(num2!=target.countCards('h')&&num3!=target.countCards('h')){ 
                return false; 
            } 
            if(target.countCards('h')==num2){ 
                var num4=Infinity; 
                var num5=Infinity; 
                for(var i=0;i<ui.selected.targets.length;i++){ 
                    if(ui.selected.targets[i].countCards('h')<num4){ 
                        num4=ui.selected.targets[i].countCards('h'); 
                    } 
                } 
                for(var i=0;i<ui.selected.targets.length;i++){ 
                    if(ui.selected.targets[i].countCards('h')<num5&&ui.selected.targets[i].countCards('h')!=num4){ 
                        num5=ui.selected.targets[i].countCards('h'); 
                    } 
                } 
                if(num4-num!=num5-num4){ 
                    return false; 
                } 
            } 
            else{ 
                var num4=0; 
                var num5=0; 
                for(var i=0;i<ui.selected.targets.length;i++){ 
                    if(num4<ui.selected.targets[i].countCards('h')){ 
                        num4=ui.selected.targets[i].countCards('h') 
                    } 
                } 
 
                for(var i=0;i<ui.selected.targets.length;i++){ 
                    if(num5<ui.selected.targets[i].countCards('h')&&ui.selected.targets[i].countCards('h')!=num4){ 
                        num5=ui.selected.targets[i].countCards('h') 
                    } 
                } 
                if(num4-num!=num5-num4){ 
                    return false; 
                } 
            } 
        } 
        return !player.hasSkill('tlbb_yaotie3'); 
    }, 
    selectTarget:[3,Infinity], 
    content:function (){ 
        target.draw(); 
		game.playJY(['tlbb_yaotie1','tlbb_yaotie2'].randomGet());
		player.addTempSkill('tlbb_yaotie3','phaseEnd');
    }, 
    ai:{ 
        threaten:1.5, 
        order:20, 
        result:{ 
            target:1, 
        }, 
    }, 

            },
            "tlbb_yaotiehp":{
			 audio:"ext:金庸群侠传:2",	 
                enable:"phaseUse", 
    usable:1, 
    complexSelect:true, 
    filterTarget:function (card,player,target){ 
        var num=target.hp; 
        if(ui.selected.targets.length){ 
            for(var i=0;i<ui.selected.targets.length;i++){ 
                if(num==ui.selected.targets[i].hp){ 
                    return false; 
                }; 
            } 
        } 
        if(ui.selected.targets.length==2&&ui.selected.targets[0].hp-num!=num-ui.selected.targets[1].hp&&num-ui.selected.targets[0].hp!=ui.selected.targets[0].hp-ui.selected.targets[1].hp&&num-ui.selected.targets[1].hp!=ui.selected.targets[1].hp-ui.selected.targets[0].hp){ 
            return false; 
        } 
        if(ui.selected.targets.length>2){ 
            var num2=target.hp; 
            var num3=target.hp; 
            for(var i=0;i<ui.selected.targets.length;i++){ 
                if(ui.selected.targets[i].hp<num2){ 
                    num2=ui.selected.targets[i].hp; 
                } 
                if(ui.selected.targets[i].hp>num3){ 
                    num3=ui.selected.targets[i].hp; 
                } 
            } 
            if(num2!=target.hp&&num3!=target.hp){ 
                return false; 
            } 
            if(target.hp==num2){ 
                var num4=Infinity; 
                var num5=Infinity; 
                for(var i=0;i<ui.selected.targets.length;i++){ 
                    if(ui.selected.targets[i].hp<num4){ 
                        num4=ui.selected.targets[i].hp; 
                    } 
                } 
                for(var i=0;i<ui.selected.targets.length;i++){ 
                    if(ui.selected.targets[i].hp<num5&&ui.selected.targets[i].hp!=num4){ 
                        num5=ui.selected.targets[i].hp; 
                    } 
                } 
                if(num4-num!=num5-num4){ 
                    return false; 
                } 
            } 
            else{ 
                var num4=0; 
                var num5=0; 
                for(var i=0;i<ui.selected.targets.length;i++){ 
                    if(num4<ui.selected.targets[i].hp){ 
                        num4=ui.selected.targets[i].hp 
                    } 
                } 
 
                for(var i=0;i<ui.selected.targets.length;i++){ 
                    if(num5<ui.selected.targets[i].hp&&ui.selected.targets[i].hp!=num4){ 
                        num5=ui.selected.targets[i].hp 
                    } 
                } 
                if(num4-num!=num5-num4){ 
                    return false; 
                } 
            } 
        } 
        return !player.hasSkill('tlbb_yaotie3'); 
    }, 
    selectTarget:[3,Infinity], 
    content:function (){ 
        target.draw(); 
		game.playJY(['tlbb_yaotie1','tlbb_yaotie2'].randomGet());
		player.addTempSkill('tlbb_yaotie3','phaseEnd');
    }, 
    ai:{ 
        threaten:1.5, 
        order:20, 
        result:{ 
            target:1, 
        }, 
    }, 

            },
            "tlbb_yaotie":{
				usable:1,
                subSkill:{
                    off:{
                        sub:true,
                    },
                },
				 audio:"ext:金庸群侠传:2",
                group:["tlbb_yaotiehp","tlbb_yaotiehc"],
            },
            "tlbb_yayin":{
				 audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"damageBegin",
                },
                filter:function (event,player){
        if(!event.card) return true;
        if(!event.source)return true;
        return false;
    },
                forced:true,
                content:function (){
        trigger.cancel();
    },
            },
"tlbb_shifu":{
	audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"gameStart",
                    player:"enterGame",
                },
                forced:true,
                filter:function (){
                              var num=0;
                              for(var i=0;i<game.players.length;i++){
                                 if(game.players[i].sex=='male'&&game.players[i]!=player) num++
                              }
                              return (num>=1)
      
    },
                content:function (){
        'step 0'
        player.chooseTarget('请选择【弑夫】的目标',lib.translate.tlbb_shifu_info,true,function(card,player,target){
            return target!=player&&target.sex!='female';           
        }).set('ai',function(target){
            return -get.attitude(player,target);
        });
        'step 1'
        if(result.bool){
            var target=result.targets[0];
            player.line(target,'green');
            game.log(target,'成为了','【弑夫】','的目标');            
            player.addSkill('tlbb_shifu_a');
            player.addSkill('tlbb_shifu_b');
            target.addSkill('tlbb_shifumark');
            
        player.storage.tlbb_shifu=target;
        player.storage.tlbb_shifu2=player;
            }
    },
                subSkill:{
                    a:{
                        trigger:{
                            player:"phaseDrawBegin",
                        },
                        frequent:true,
                        content:function (){
							game.playJY(['tlbb_shifu1','tlbb_shifu2'].randomGet());
            trigger.num+=player.storage.tlbb_shifu.maxHp-player.storage.tlbb_shifu.hp;
                           },
                        ai:{
                            threaten:1.3,
                        },
                        sub:true,
                    },
                    b:{
                        trigger:{
                            global:"dieBegin",
                        },
                        forced:true,
                        popup:false,
                        content:function (){
               if(player.storage.tlbb_shifu==trigger.player) {   
               player.storage.tlbb_shifu=[];          
               }
               if(player.storage.tlbb_shifu2==trigger.player) {    
                target.removeSkill('tlbb_shifumark');
                player.storage.tlbb_shifu=[];
              }                              
            },
                        sub:true,
                    },
                },
                group:["tlbb_shifu2"],
            },
            "tlbb_shifumark":{
                marktext:"散",
                mark:true,
                intro:{
                    content:"已中“软骨散”",
                },
            },
            "tlbb_shifu2":{
                trigger:{
                    global:"dieAfter",
                },
                forced:true,
                popup:false,
                filter:function (event,player){
                return event.player.hasSkill('tlbb_shifumark');  
                },
                content:function (){
                   "step 0"          
                   player.chooseTarget('请将'+get.translation(trigger.player)+'的「软骨散」转移给另一名男性角色',true,function(card,player,target){
                   return target!=player&&target.sex!='female'&&target!=trigger.player;           
                   }).set('ai',function(target){
                   var player=_status.event.player;
                   return -get.attitude(player,target);
                   });     
                  "step 1"
                  if(result.bool){
                  var target=result.targets[0];
                  player.line(target);
                  trigger.player.removeSkill('tlbb_shifumark');
                  player.storage.tlbb_shifu=[];                                
                  target.addSkill('tlbb_shifumark');
                  player.storage.tlbb_shifu=target;   
                  game.delay();       
                  }                                                               
                },
            },
            "tlbb_buyao":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"phaseEnd",
                },
                filter:function(event,player){
                return true;
    },	 
                content:function(){
        "step 0"
        player.chooseTarget(get.prompt('tlbb_buyao'),function(card,player,target){
        return player!=target;
                    }).set('ai',function(player,target){
            -get.attitude(player,target);     
       });                
        "step 1"               
      if(result.bool){
		  game.log(result.targets[0],'成为了','【布谣】','的目标');
            event.target=result.targets[0];			
            player.chooseControl('heart2','diamond2','club2','spade2').set('ai',function(event){
            switch(Math.floor(Math.random()*6)){
                case 0:return 'heart2';
                case 1:case 4:case 5:return 'diamond2';
                case 2:return 'club2';
                case 3:return 'spade2';
            }
        });  
        }else{
            event.finish();
        };        
        
        "step 2"   
        game.log(player,'选择了'+get.translation(result.control));            
        event.choice=result.control;
        event.target.popup(event.choice);
//        event.card=player.getCards('h').randomGet();
//        event.target.gain(event.card,player);
//        player.$give(event.card,event.target);
//        event.card=get.cards(1);
//      target.showCards(event.card); 
        target.judge();
       "step 3" 
        event.card=result.card;                  
        target.gain(event.card);
//        player.gain(trigger.result.card);
//                      player.$gain2(trigger.result.card);            
        game.log(target,'获得了',event.card); 
        game.delay();                 
                 
        "step 4"                        
        if(get.suit(event.card)+'2'!=event.choice) target.damage('nocard');                                              
    },
                ai:{
                    order:1,
                    result:{
                        target:function(player,target){
                var eff=get.damageEffect(target,player);
                if(eff>=0) return 1+eff;
                      },
                    },
                },
            },
            "tlbb_siqian":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"damageEnd",
                },
                forced:true,
                popup:false,
                filter:function (event,player){
               //return event.player.hasSkill('tlbb_shifumark');
                             var num=0;
                             for(var i=0;i<game.players.length;i++){
                                if(game.players[i].hasSkill('tlbb_shifumark')&&game.players[i].hasSkill('tlbb_shifumark').isAlive()) num++
                             }
                            return (num=1)     
              },
                content:function (){     
        "step 0"
        player.chooseTarget(get.prompt('tlbb_siqian'),function(card,player,target){
        return target.hasSkill('tlbb_shifumark');
        });   
                       
        "step 1"         
        if(result.bool){
            target1=result.targets[0];
            player.chooseTarget('转移'+get.translation(target1)+'的「软骨散」标记',true,function(card,player,target){
            return target!=player&&target.sex!='female'&&target!=target1;           
        }).set('ai',function(target){
                var player=_status.event.player;
                return 10+get.attitude(player,target);
            });
        }else{
            event.finish();
        };                
                                     
        "step 2"
        if(result.bool){
            target2=result.targets[0];
             player.logSkill('tlbb_siqian');
            player.line(target2);
            target1.removeSkill('tlbb_shifumark');
            player.storage.tlbb_shifu=[];                                
            target2.addSkill('tlbb_shifumark');
            player.storage.tlbb_shifu=target2;            
            game.delay();
        }
    },
            },
"tlbb_dianhua":{
	audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"useCard",
                },
                priority:Infinity,
                usable:1,
                filter:function (event,player){
        if(event.player==player) return false;
        if(get.type(event.card)=='basic') return false;
        if(get.type(event.card)!='trick') return false;
        if(get.type(event.card)=='delay') return false;
        if(event.card.name=='wuxie') return false;
        if(!event.targets||event.targets.length!=1||event.targets[0]==event.player) return false;
        var list2=['juedou','huogong','jiedao','tiesuo','guohe','shunshou','wanjian','nanman'];
        if(list2.contains(event.card.name)){
            list2.remove(event.card.name);
        }
        for(var i=0;i<list2.length;i++){
            var card=game.createCard(list2[i],event.card.suit,event.card.number,event.card.nature);
            if(event.player.canUse(card,event.targets[0])){
               return true;
            }
        }
        return false;
    },
                check:function (event,player){
        return (get.attitude(player,event.player)<=0);
    },
                content:function (){
        'step 0'
        trigger.cancel();
        'step 1'
        var list=[];
        var list2=['juedou','huogong','jiedao','tiesuo','guohe','shunshou','wanjian','nanman'];
        if(list2.contains(trigger.card.name)){
            list2.remove(trigger.card.name);
        }
        for(var i=0;i<list2.length;i++){
            var card=game.createCard(list2[i],trigger.card.suit,trigger.card.number,trigger.card.nature);
            if(trigger.player.canUse(card,trigger.targets[0])){
               list.push(list2[i]);
            }
        }
        for(var i=0;i<list.length;i++){
            list[i]=['锦囊','',list[i]];
        }
        var dialog=ui.create.dialog('选择一张你要转化的锦囊牌',[list,'vcard'],'hidden');
        player.chooseButton(dialog,true).set('ai',function(button){
            var card={name:button.link[2]};
            return get.effect(trigger.targets[0],card,_status.event.player,player)
        });
        'step 2'
        if(result.bool){
            trigger.player.useCard({name:result.buttons[0].link[2]},trigger.targets[0],trigger.cards);
        }
    },
    ai:{
    expose:0.8,
    },
            },
            "tlbb_wendian":{
                global:"tlbb_wendian1",
            },
            "tlbb_wendian1":{
                subSkill:{
                    off:{
                        sub:true,
                    },
                },
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        if(player.hasSkill('tlbb_wendian1_off')) return false;
        return player.countCards('h')>0&&game.hasPlayer(function(current){
            return current.hasSkill('tlbb_wendian')&&current!=player;
        });
    },
               // direct:true,
                delay:0,
                filterCard:true,
                discard:false,
                lose:false,
                position:"h",
                prompt:function (){
        var player=_status.event.player;
        var list=game.filterPlayer(function(current){
            return current.hasSkill('tlbb_wendian');
        });
        var str='将一张手牌交给'+get.translation(list);
        if(list.length>1) str+='中的一人';
        return str;
    },
                check:function (card){
        return 8-get.value(card);
    },
                content:function (){
        "step 0"
        var targets=game.filterPlayer(function(current,player){
            return current.hasSkill('tlbb_wendian')&&current!=player;
        });
        if(targets.length==1){
            event.target=targets[0];
            event.goto(2);
        }
        else if(targets.length>0){
            player.chooseTarget(true,'选择【问典】的目标',function(card,player,target){
                return _status.event.list.contains(target);
            }).set('list',targets).set('ai',function(target){
                var player=_status.event.player;
                return get.attitude(player,target);
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
			game.playJY(['tlbb_wendian1','tlbb_wendian2'].randomGet());
            player.logSkill('tlbb_wendian',event.target);
            player.addTempSkill('tlbb_wendian1_off');
            event.cardss=cards[0];
            player.$give(event.cardss,event.target);
            event.target.gain(event.cardss,player);
        }
        else{
            event.finish();
        }
        "step 3"
        if(event.target){
            event.target.chooseControl('是','否').set('prompt','问典<br><br><div class="text">是否亮出牌堆顶的两张牌令其获得其中的锦囊牌?</div><br><div class="text">').ai=function(){
               var att=get.attitude(event.target,player);
                if(att>=0) return '是';
                if(att<0) return '否';
                return '否';
            };
        }
          "step 4"
        if(result.control=='是'){
            event.cards=get.cards(2);
            event.target.showCards(event.cards,'问典');
        }
        if(result.control=='否'){
            game.log(event.target,'拒绝了展示牌堆顶的牌');
            event.finish();
        }
          "step 5"       
        for(var i=0;i<event.cards.length;i++){
            if(get.type(event.cards[i])!='trick'&&get.type(event.cards[i])!='delay'){
                event.cards[i].discard();
                event.cards.splice(i--,1);
            }
        }
        player.gain(cards,'gain2');    
    },
                ai:{
                    order:2,
                    threaten:1.5,
                    result:{
                        player:function (player,target){
                var target=game.findPlayer(function(current){
                    return current.hasSkill('tlbb_wendian');
                });
                if(target){
                    return get.attitude(player,target);
                }
            },
                    },
                },
            },
"tlbb_nayuan":{
 audio:"ext:金庸群侠传:8",
                trigger:{
                    global:"useCardBegin",
                },
                priority:Infinity,
                direct:true,
                filter:function (event,player){
        if(event.player==player) return true;
        return event.targets.contains(player);
    },
                createDialog:function (player,target,onlylist){
        var names=[];
        var list=[];
        if(target.name&&!target.isUnseen(0)) names.add(target.name);
        if(target.name1&&!target.isUnseen(0)) names.add(target.name1);
        if(target.name2&&!target.isUnseen(1)) names.add(target.name2);
        var pss=player.getSkills();
        for(var i=0;i<names.length;i++){
            var info=lib.character[names[i]];
            if(info){
                var skills=info[3];
                for(var j=0;j<skills.length;j++){
                    if(lib.translate[skills[j]+'_info']&&lib.skill[skills[j]]&&
                        !lib.skill[skills[j]].unique&&!lib.skill[skills[j]].zhuSkill&&
                        !pss.contains(skills[j])){
                        list.push(skills[j]);
                    }
                }
            }
        }
        if(onlylist) return list;
        var dialog=ui.create.dialog('forcebutton');
        dialog.add('选择获得一项技能');
        _status.event.list=list;
        var clickItem=function(){
            _status.event._result=this.link;
            game.resume();
        };
        for(i=0;i<list.length;i++){
            if(lib.translate[list[i]+'_info']){
                var translation=get.translation(list[i]);
                if(translation[0]=='新'&&translation.length==3){
                    translation=translation.slice(1,3);
                }
                else{
                    translation=translation.slice(0,2);
                }
                var item=dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【'+
                translation+'】</div><div>'+lib.translate[list[i]+'_info']+'</div></div>');
                item.firstChild.addEventListener('click',clickItem);
                item.firstChild.link=list[i];
            }
        }
        dialog.add(ui.create.div('.placeholder'));
        return dialog;
    },
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt2('tlbb_nayuan'),function(card,player,target){
            var names=[];
            if(target.name&&!target.isUnseen(0)) names.add(target.name);
            if(target.name1&&!target.isUnseen(0)) names.add(target.name1);
            if(target.name2&&!target.isUnseen(1)) names.add(target.name2);
            var pss=player.getSkills();
            for(var i=0;i<names.length;i++){
                var info=lib.character[names[i]];
                if(info){
                    var skills=info[3];
                    for(var j=0;j<skills.length;j++){
                        if(lib.translate[skills[j]+'_info']&&lib.skill[skills[j]]&&
                            !lib.skill[skills[j]].unique&&!lib.skill[skills[j]].zhuSkill&&!pss.contains(skills[j])){
                            return true;
                        }
                    }
                }
                return false;
            }
        }).set('ai',function(target){
            if(get.attitude(_status.event.player,target)>0) return Math.random();
            return 0;
        });
        'step 1'
        if(result.bool){
            event.target=result.targets[0];
            player.logSkill('tlbb_nayuan',event.target);
        }
        else{
            event.finish();
        }
        'step 2'
        event.skillai=function(list){
            return get.max(list,get.skillRank,'item');
        };
        if(event.isMine()){
            event.dialog=lib.skill.tlbb_nayuan.createDialog(player,target);//tianshu
            event.switchToAuto=function(){
                event._result=event.skillai(event.list);
                game.resume();
            };
            _status.imchoosing=true;
            game.pause();
        }
        else{
            event._result=event.skillai(lib.skill.tlbb_nayuan.createDialog(player,target,true));
        }
        'step 3'
        _status.imchoosing=false;
        if(event.dialog){
            event.dialog.close();
        }
        player.addTempSkill(result,'useCardAfter');
        player.popup(result);
        game.log(player,'获得了','【'+get.translation(result)+'】');
    },
            },
            "tlbb_zhuha":{
             audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"damageBefore",
                },
                filter:function (event,player){
        if(event.nature) return true;
    },
                forced:true,
                content:function (){
        trigger.cancel();
    },
                ai:{
                    nofire:true,
                    nothunder:true,
                    effect:{
                        target:function (card,player,target,current){
                if(get.tag(card,'natureDamage')) return 'zerotarget';
                if(card.name=='tiesuo'){
                    return [0,0];
                }
            },
                    },
                },
            },
"tlbb_lingbo":{
                audio:"ext:金庸群侠传:5",
                init:function (player){player.storage.tlbb_lingbo=0;player.syncStorage('tlbb_lingbo');},
                group:"tlbb_lingbo2",
                trigger:{
                    global:"useCard",
                },
                forced:true,
                filter:function (event,player){
        if(event.player==player) return false;
        if(event.player!=_status.currentPhase) return false;
        return true;
 },
                content:function (){
 player.storage.tlbb_lingbo++;
 },
                mod:{
                    globalTo:function (from,to,distance){
            return distance+to.storage.tlbb_lingbo;
        },
                },
            },
            "tlbb_qingguan":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"phaseUseBegin",
                },
                content:function (){
        "step 0"
    player.chooseControl('回复体力','失去体力',function(){
     				var player=_status.event.player;
						if(player.countCards('h',{type:'trick'})>0&&player.hp%2==1){
							return '回复体力';
						}
						if(player.countCards('h','sha')>0&&player.hp%2==0){
							return '失去体力';
						}				
						return '失去体力';
    }).set('prompt','选择回复体力或失去体力');
    "step 1"
     if(result.control=='回复体力'){ 
         player.recover();
         player.addSkill('tlbb_qingguan_recover');
        }
     if(result.control=='失去体力'){  
        player.loseHp();
        player.addSkill('tlbb_qingguan_loseHp');
            }
    },
            },
            "tlbb_xiumai":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:["loseHpEnd","recoverEnd","damageEnd","phaseBegin"],
                },
                forced:true,
                filter:function (event,player){
        return player==_status.currentPhase;
     },
                content:function (){
   if(player.hp%2==0){
        game.countPlayer(function(current){
            if(current!=player&&!current.hasSkill('tlbb_xiumai2')){
                player.line(current,'green');
                current.addTempSkill('tlbb_xiumai2');
                current.removeSkill('tlbb_xiumai3');
            }
        });
   }   
   if(player.hp%2==1){
        game.countPlayer(function(current){
            if(current!=player&&!current.hasSkill('tlbb_xiumai3')){
                player.line(current,'green');
                current.addTempSkill('tlbb_xiumai3');
                current.removeSkill('tlbb_xiumai2');
            }
        });
   }
    },
            },
            "tlbb_lingbo2":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"phaseEnd",
                },
                forced:true,
                filter:function (event,player){
        if(player.storage.tlbb_lingbo<=0) return false;
        return player.storage.tlbb_lingbo>=0;
     },
                content:function (){
      player.storage.tlbb_lingbo=false;
      player.update();
    },
            },
            "tlbb_qingguan_loseHp":{                
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                content:function (){
        'Step 0'
		game.playJY(['tlbb_qingguan1','tlbb_qingguan2'].randomGet());
        player.recover();
        'Step 1'
        player.removeSkill('tlbb_qingguan_loseHp');
    },
            },
            "tlbb_qingguan_recover":{                
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                content:function (){
        'Step 0'
		game.playJY(['tlbb_qingguan1','tlbb_qingguan2'].randomGet());
        player.loseHp();
        'Step 1'
        player.removeSkill('tlbb_qingguan_recover');
    },
            },
            "tlbb_xiumai3":{
                mark:true,
                intro:{
                    content:"不能使用或打出方块牌",
                },
                mod:{
                    cardEnabled:function (card){
           if(get.suit(card)=='diamond') return false;
        },
                    cardUsable:function (card){
           if(get.suit(card)=='diamond') return false;
        },
                    cardRespondable:function (card){
           if(get.suit(card)=='diamond') return false;                    
        },
                    cardSavable:function (card){
           if(get.suit(card)=='diamond') return false;
        },
                },
            },
            "tlbb_xiumai2":{
                mark:true,
                intro:{
                    content:"不能使用或打出黑色卡牌",
                },
                mod:{
                    cardEnabled:function (card){
           if(get.color(card)=='black') return false;
        },
                    cardUsable:function (card){
           if(get.color(card)=='black') return false;
        },
                    cardRespondable:function (card){
           if(get.color(card)=='black') return false;                    
        },
                    cardSavable:function (card){
           if(get.color(card)=='black') return false;
        },
                },
            },
"tlbb_beiming":{
	 audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"useCardAfter",
                },
                usable:1,
                direct:true,
                filter:function (event,player){
        if(player.storage.tlbb_pojie.length<1) return false;
       if(!event.cards||event.cards.length!=1) return false;
        if(event.player==player) return false;
     if(get.type(event.card)!='trick') return false;
        var info=get.info(event.card);
       //if(info.allowMultiple==false) return false;
            if(game.hasPlayer(function(current){
                 return player.canUse(event.card,current);
             })){
                return true;
            }
        return false;
    },
                content:function (){
        "step 0"
          player.chooseCardButton(player.storage.tlbb_pojie,[1,1],'是否选择一张颜色相同【戒】视为使用'+get.translation(trigger.card)+'').set('filterButton',function(button){
            return get.color(button.link)==get.color(trigger.cards[0]);
        }).set('ai',function(button){
            return get.value(button.link);
        });
        "step 1"
        if(result.bool){           
            player.logSkill('tlbb_beiming');
            player.storage.tlbb_pojie.remove(result.links);
            for(var i=0;i<result.links.length;i++){
                result.links[i].discard();
            }
            player.chooseUseTarget(trigger.card);
            
            game.delay(0.7);
        }
        else{
            event.finish();
        }
    },
                ai:{
                    threaten:2,
                },
            },
            "tlbb_pojie_respond":{
				 //audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"chooseToRespondBegin",
                },
                filter:function (event,player){
        if(event.responded) return false;
        if(player.hasSkill('tlbb_beiming')) return false;
        if(!player.storage.tlbb_pojie.length) return false;
        for(var i=0;i<player.storage.tlbb_pojie.length;i++){
            if(event.filterCard(player.storage.tlbb_pojie[i],player,event)) return true;
        }
        return false;
    },
                direct:true,
                content:function (){
        "step 0"
        player.chooseButton(['tlbb_pojie',player.storage.tlbb_pojie]).set('filterButton',function(button){
            var evt=_status.event.getTrigger();
            if(evt&&evt.filterCard){
                return evt.filterCard(button.link,_status.event.player,evt);
            }
            return true;
        }).set('ai',function(button){
            var evt=_status.event.getTrigger();
            if(evt&&evt.ai){
                var tmp=_status.event;
                _status.event=evt;
                var result=evt.ai(button.link,_status.event.player,evt);
                _status.event=tmp;
                return result;
            }
            return 1;
        });
        "step 1"
        if(result.bool){
			game.playJY(['tlbb_pojie1','tlbb_pojie2'].randomGet());
            result.links[0].discard();
            trigger.untrigger();
            trigger.responded=true;
            trigger.result={bool:true,card:result.links[0]};
            player.storage.tlbb_pojie.remove(result.links[0]);
            player.syncStorage('youjisgsd');
            if(player.storage.tlbb_pojie.length==0){
                player.unmarkSkill('tlbb_pojie');
            }
            else{
                player.markSkill('tlbb_pojie');
            }
            player.updateMarks();
        }
    },
                ai:{
                    order:4,
                    useful:-1,
                    value:-1,
                },
            },
            "tlbb_pojie_use":{
				 audio:"ext:金庸群侠传:2",
                enable:"chooseToUse",
                filter:function (event,player){
        if(player.hasSkill('tlbb_beiming')) return false;
        return player.storage.tlbb_pojie.length>0;
    },
                chooseButton:{
                    dialog:function (event,player){
            return ui.create.dialog('tlbb_pojie',player.storage.tlbb_pojie,'hidden');
        },
                    filter:function (button,player){
            var evt=_status.event.getParent();
            if(evt&&evt.filterCard){
                return evt.filterCard(button.link,player,evt);
            }
            return true;
        },
                    check:function (button){
            if(button.link.name=='du') return -2;
            var player=_status.event.player;
            if(button.link.name=='xingjiegoutong'&&player.countCards('h')>1) return -2;
            if(get.select(get.info(button.link).selectTarget)[1]==-1){
                if(get.type(button.link)=='delay') return -1;
                if(get.type(button.link)=='equip'){
                    var current=player.getCards('e',{subtype:get.subtype(button.link)})[0];
                    if(current&&get.equipValue(current)>=get.equipValue(button.link)) return -1;
                    return 1;
                }
                if(get.tag(button.link,'multitarget')) return -1;
                if(button.link.name=='huoshaolianying') return -1;
            }
            if(button.link.name=='jiu'){
                if(get.effect(player,{name:'jiu'},player)>0){
                    return 1;
                }
                return -1;
            }
            return 1;
        },
                    backup:function (links,player){
            return {
                filterCard:function(){return false},
                selectCard:-1,
                viewAs:links[0],
                onuse:function(result,player){  
				game.playJY(['tlbb_pojie1','tlbb_pojie2'].randomGet());
                    player.storage.tlbb_pojie.remove(result.card);
                    player.syncStorage('tlbb_pojie');      
                    player.updateMarks();
                }
            }
        },
                    prompt:function (links,player){
            return '选择'+get.translation(links)+'的目标';
        },
                },
                ai:{
                    order:4,
                    result:{
                        player:function (player){
                if(_status.event.dying) return get.attitude(player,_status.event.dying);
                return 1;
            },
                    },
                    useful:-1,
                    value:-1,
                },
            },
            "tlbb_pojie":{
                init:function (player){
        player.storage.tlbb_pojie=[];
    },
                group:["tlbb_pojie_use","tlbb_pojie_respond"],
                 audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"useCard",
                    source:"damageEnd",
                },
                forced:true,
                filter:function (event,player){
    if(event.name=='damage') return true;
    if(event.name=='useCard'){
        if(event.card.name=='jiu') return true;
        if(get.type(event.card)!='trick') return false;
        var info=get.info(event.card);
        if(info.allowMultiple==false) return false;
        if(event.targets&&event.targets.length==1&&event.targets[0].sex=='female'){
            if(event.targets[0]!=player) return true;
        }
    }
    return false;
    },
                content:function (){
        "step 0"
        event.card=get.cards()[0];
        if(player.storage.tlbb_pojie==undefined) player.storage.tlbb_pojie=[];
        player.storage.tlbb_pojie.push(event.card);
        player.syncStorage('tlbb_pojie');
        player.showCards(player.storage.tlbb_pojie,'破戒');
        player.markSkill('tlbb_pojie');
    },
                intro:{
                    content:"cards",
                    onunmark:function (storage,player){
            if(storage&&storage.length){
                player.$throw(storage);
                for(var i=0;i<storage.length;i++){
                    storage[i].discard();
                }
                delete player.storage.tlbb_pojie;
            }
        },
                },
            },
            "tlbb_huansu":{
                skillAnimation:true,
                 audio:"ext:金庸群侠传:2",
                derivation:["tlbb_beiming"],
                unique:true,
                trigger:{
                    player:"tlbb_pojieAfter",
                },
                forced:true,
                filter:function (event,player){
        return !player.hasSkill('tlbb_beiming')&&player.storage.tlbb_pojie&&player.storage.tlbb_pojie.length>=3;
    },
                content:function (){
        "step 0"
        player.loseMaxHp();
        "step 1"
        if(player.hp<player.maxHp){
			player.recover();
		}
		game.broadcastAll()+player.node.avatar.setBackgroundImage('extension/金庸群侠传/tlbb_xinxuzhu.jpg');
		player.update();
        player.addSkill('tlbb_beiming');
        player.awakenSkill('tlbb_huansu');
    },
            },
"tlbb_qiangcan":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"gameStart",
                    player:"enterGame",
                },
                group:"tlbb_qiangcan2",
                filter:function (event,player){   
               // for(var i=0;i<game.players.length;i++){      
            //if(game.players[i].hasSkill('tlbb_chusi')) return false;
           // return true;
        //    }
          if(player.hasSkill('tlbb_chusi')) return false;
        return game.findPlayer(function(current){
        return !current.hasSkill('tlbb_chusi');
    });
    },
                unique:true,
                frequent:true,
                content:function (){      
        for(var i=0;i<game.players.length;i++){      
            if(!game.players[i].hasSkill('tlbb_chusi')){                           
            player.addSkill('tlbb_chusi');
            player.markSkill('tlbb_chusi2');
            player.update();        
            }
            else{
                                event.finish();
                            }          
            }                        
    },
                ai:{
                    threaten:0.8,
                },
            },
            "tlbb_qiangcan2":{
                trigger:{
                    global:"dieBegin",
                },
                filter:function (event,player){   
               return event.player.hasSkill('tlbb_chusi');
    },
                frequent:true,
                content:function (){            
               game.playJY(['tlbb_qiangcan1','tlbb_qiangcan2'].randomGet());                                       
            player.addSkill('tlbb_chusi');
            player.markSkill('tlbb_chusi2');
            player.update();                                                           
    },
                ai:{
                    threaten:0.8,
                },
            },
            "tlbb_chusi":{
                trigger:{
                    player:"damage",
                },
                priority:28,
                direct:true,
                filter:function (event,player){   
          if(player.hasSkill('tlbb_chusi')) return true;   
          return false;
    },
                group:"tlbb_chusi2",
                content:function (){
"step 0"
     trigger.source.chooseBool('是否弃置一张牌并废除目标【储嗣】的地位，取而代之？').set('ai',function(){                                
                    if(get.attitude(trigger.player,trigger.source)<=0) return true;    
                    return false;
                    });
        "step 1"
        if(result.bool){
            //  trigger.source.chooseToDiscard('he',true); 
                   game.playJY(['tlbb_qiangcan1','tlbb_qiangcan2'].randomGet());                                                 
              player.removeSkill('tlbb_chusi');
              player.unmarkSkill('tlbb_chusi2');
              trigger.source.addSkill('tlbb_chusi');
              trigger.source.markSkill('tlbb_chusi2');
        }
        else{
              event.finish();
        }
    },
                ai:{
                    threaten:3,
                },
            },
            "tlbb_chusi2":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"phaseDrawBegin",
                },
                marktext:"嗣",
                intro:{
                    content:"mark",
                },
                forced:true,
                content:function (){
        trigger.num+=2;
    },
                ai:{
                    threaten:1.5,
                },
                mod:{
                    maxHandcard:function (player,num){
            return num+2;
        },
                },
            },
            "tlbb_liuwang":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                check:function (){
        return false;
    },
                filter:function (event,player){   
          if(player.hasSkill('tlbb_chusi')) return false;   
          return true;
    },
                content:function (){
        "step 0"
        player.chooseControl('失去体力','弃两张牌',function(event,player){
            if(player.hp==player.maxHp||player.countCards('h')<3) return '失去体力';
            if(player.hp<player.maxHp-2||player.hp<=1) return '弃两张牌';
            return '失去体力';
        });
        "step 1"
        if(result.control=='失去体力'){
            player.loseHp();
        }
        else{
            player.chooseToDiscard(2,'he',true); 
        }
    },
                ai:{
                    neg:true,
                },
            },
            "tlbb_rangquan":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"dying",
                },
                marktext:"权",
                forced:true,
                priority:6,
                filter:function (event,player){
                return player.hp<=0;
    },
                init:function (player){  
            player.markSkill('tlbb_rangquan');
            player.storage.tlbb_rangquan=false;        
    },
                intro:{
                    content:"limited",
                },
                unique:true,
                content:function (){
        'step 0'
        player.$fullscreenpop('我才是皇子','fire');
         player.storage.tlbb_rangquan=true;
         for(var i=0;i<game.players.length;i++){          
            game.players[i].removeSkill('tlbb_chusi');
            game.players[i].removeSkill('tlbb_chusi2');
            game.players[i].unmarkSkill('tlbb_chusi2');                           
            }              
          'step 1'                
        player.removeSkill('tlbb_qiangcan');
        player.removeSkill('tlbb_liuwang');
        player.loseMaxHp();
        player.recover(2);
        player.draw(2);      
        player.addSkill('tlbb_chusi2');     
        player.markSkill('tlbb_chusi2');
        player.unmarkSkill('tlbb_rangquan');
        player.awakenSkill('tlbb_rangquan');
        player.update();                  
    },
            },
			"tlbb_yirong1":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    global:["phaseBegin"],
                },
                filter:function (event,player){
        if(player.storage.tlbb_yirong.length<1) return false;
        return true;
    },
                check:function (event,player){
        return (get.attitude(player,event.player)>2);
    },
                content:function (){
        "step 0"
        if(player.storage.tlbb_yirong){
            var dialog=ui.create.dialog('选择一张武将牌令其易容','hidden');
            dialog.add([player.storage.tlbb_yirong,'character']);
            player.chooseButton(dialog,true).ai=function(button){
                return get.rank(button.link,true);
            };
        }        
        "step 1"
         if(result.links[0]){
             player.popup(result.links[0]);
             //var skills=trigger.player.getSkills();
            // trigger.player.storage.tlbb_yirong_技能=skills;
             var name1=trigger.player.name;
             trigger.player.setAvatar(name1,result.links[0]);//换皮    
             //trigger.player.reinit(name1,name2,false); //替换武将牌
            trigger.player.addTempSkill('tlbb_yirong2',{player:'phaseAfter'});
             game.delay();
             trigger.player.update(); 
             event.name=result.links[0];
         }
          "step 2" 
          var list=[];
          var skills=lib.character[event.name][3];
            for(var j=0;j<skills.length;j++){
                if(lib.translate[skills[j]+'_info']&&lib.skill[skills[j]]&&
                    !lib.skill[skills[j]].unique){
                    list.push(skills[j]);
                }
            }
        trigger.player.addAdditionalSkill('tlbb_yirong2',skills);
        //trigger.player.addAdditionalSkill('tlbb_yirong2',list);
       // trigger.player.addTempSkill(skills,{player:'phaseEnd'});
        game.delay();
       
        player.storage.tlbb_yirong.remove(event.name);
        player.markSkill('tlbb_yirong');
        trigger.player.update();
         "step 3" 
         game.delay();
         trigger.player.addTempSkill('tlbb_yirong1_rong',{player:'phaseEnd'});
    },
                group:["tlbb_yirong1_damage","tlbb_yirong"],
                subSkill:{
                    rong:{
                        onremove:function (player){
                "step 0"
                var name1=player.name;
              //  var name2=player.storage.tlbb_yirong_武将名;
                //player.reinit(name1,name2,false); 
                player.setAvatar(name1,name1);
            },
                        sub:true,
                    },
                    damage:{
                        //audio:"ext:金庸群侠传:2",
                        trigger:{
                            player:"damageBegin",
                        },
                        filter:function (event){
                if(!event.source.hasSkill('tlbb_yirong1_rong')) return false;
                return event.card&&event.card.name=='sha'&&event.notLink();
            },
                        forced:true,
                        content:function (){
							game.playJY(['tlbb_yirong11','tlbb_yirong12'].randomGet());
                trigger.num++;
            },
                        sub:true,
                    },
                },
            },
            "tlbb_yirong":{
                audio:"ext:金庸群侠传:2",
                unique:true,
                trigger:{
                    global:"gameStart",
                    player:"enterGame",
                },
                direct:true,
                init:function (player){
        player.storage.tlbb_yirong=[];
    },
                intro:{
                    content:"characters",
                },
                content:function (){
        'step 0'
		game.playJY(['tlbb_yirong11','tlbb_yirong12'].randomGet());
        player.logSkill('tlbb_yirong');//魔改版雄才
        event.numat=8;
        'step 1'
        var list=[];
        var list2=[];
        var players=game.players.concat(game.dead);
        for(var i=0;i<players.length;i++){
            list2.add(players[i].name);
            list2.add(players[i].name1);
            list2.add(players[i].name2);
        }
        for(var i in lib.character){
        //    if(lib.character[i][1]!='wei') continue;
            if(lib.character[i][4].contains('boss')) continue;
         //   if(lib.character[i][2]>6) continue;
            if(lib.character[i][3].length==0) continue;
            if(lib.character[i][4].contains('minskin')) continue;
            if(lib.filter.characterDisabled2(i)) continue;
            if(player.storage.tlbb_yirong.contains(i)) continue;
            if(list2.contains(i)) continue;
            var add=false;
            for(var j=0;j<lib.character[i][3].length;j++){
                var info=lib.skill[lib.character[i][3][j]];
                if(!info){
                    continue;
                }
                if(info.gainable||!info.unique){
                    add=true;break;
                }
            }
            if(add){
                list.push(i);       
            }
        }
        var name=list.randomGet();
        player.storage.tlbb_yirong.push(name);
        player.markSkill('tlbb_yirong');
     //   var skills=lib.character[name][3];
     //   for(var i=0;i<skills.length;i++){
      //      player.addSkill(skills[i]);
     //   }
        event.dialog=ui.create.dialog('<div class="text center">'+get.translation(player)+'',[[name],'character']);
        game.delay(2);
        'step 2'
        event.dialog.close();
        'step 3'
        event.numat--;
        if(event.numat>0){
            event.goto(1);
        }
        else{
            game.delay(2);
                
        }
    
    },
            },
            "tlbb_yirong2":{
                init:function (player,skill){
        var skills=player.getSkills(true,false);
        for(var i=0;i<skills.length;i++){
     
        }
        player.disableSkill(skill,skills);
    },
                onremove:function (player,skill){
        player.enableSkill(skill);
    },
                mark:"易",
                intro:{
                    content:function (storage,player,skill){
            var list=[];
            for(var i in player.disabledSkills){
                if(player.disabledSkills[i].contains(skill)){
                    list.push(i)
                }
            }
            if(list.length){
                var str='失效技能：';
                for(var i=0;i<list.length;i++){
                    if(lib.translate[list[i]+'_info']){
                        str+=get.translation(list[i])+'、';
                    }
                }
                return str.slice(0,str.length-1);
            }
        },
                },
            },
            "tlbb_xiaoti":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"damageEnd",
                },
                usable:1,
                filter:function (event,player){
        return player.countCards('h')>0&&event.player.isAlive()&&event.player.isDamaged();
    },
                check:function (event,player){
            return get.attitude(player,event.player)>0;
    },
                direct:true,
                content:function (){
    "step 0"
    var next=player.chooseToDiscard(1,'h','是否弃置一张牌令'+get.translation(trigger.player)+'回复一体力？',function(card,player){
        return true;
    });
    var att=get.attitude(_status.event.player,trigger.player);
    next.ai=function(card){
        if(att>2) {
            if(trigger.player.hp<trigger.player.maxHp){
                return 9-get.value(card);
            }
            return -1;
        }
        return -1;
    };
    "step 1"
    if(result.bool){
        player.logSkill('tlbb_xiaoti',trigger.player);
        trigger.player.recover();
    }
    },
            },
},

translate:{
	"tlbb_ganbaobao":"甘宝宝",
            "tlbb_chouchang":"愁肠",
            "tlbb_chouchang_info":"每当你使用杀、决斗、南蛮入侵、万剑齐发时，你可弃置所有手牌（至少一张），令此牌不能被响应或抵消。然后若此牌造成的伤害大于2点，你受到1点无来源的伤害。",
            "tlbb_aijie":"哀结",
            "tlbb_aijie_info":"每当你受到1点伤害后，你可以选择一名其他角色，令其手牌上限-1。",
            "tlbb_gulian":"顾怜",
            "tlbb_gulian_info":"锁定技。你受到大于1点的伤害时，若你没有手牌，则此次伤害改为1点。",
	"tlbb_qiaofeng":"乔峰",			
            "tlbb_xianglong":"降龙",
            "tlbb_xianglong_info":"当你使用杀时，你可以判定，若为黑色，则此杀造成的伤害+1；若为红色，你可以为此杀额外增加一名无距离限制的目标。",
            "tlbb_kanghui":"亢悔",
            "tlbb_kanghui_info":"当你造成伤害时，你可以防止此伤害，若如此做，你摸2张牌。",
            "tlbb_zongpangp":"改判",
            "tlbb_zongpangp_info":"",
            "tlbb_zongpangpin":"改拼",
            "tlbb_zongpangpin_info":"",
            "tlbb_zongpan":"众判",
            "tlbb_zongpan_info":"主公技。其他魏势力角色可以打出一张手牌替换你的判定牌或拼点牌，且你可以拒绝其替换之。",
	 "tlbb_zhongling":"钟灵",
            "tlbb_xundiao":"驯貂",
            "tlbb_xundiao_info":"其他角色使用杀对目标造成伤害后，你可以将一张普通杀当火杀对其使用，若此杀造成了伤害，则该目标回复1点体力。",
            "tlbb_qiyuan":"乞援",
            "tlbb_qiyuan_info":"每当你成为杀的目标时，其他角色（来源除外）可以交给你一张杀。",
            "tlbb_xinwu":"信物",
            "tlbb_xinwu_info":"你获得其他角色的牌后，你可以展示其中一张杀，若如此做，其摸1张牌。",
	 "tlbb_yuelaosan":"岳老三",
            "tlbb_qianjun2":"千钧",
            "tlbb_qianjun2_info":"当你的杀被闪避后(改闪需为实体牌并且数量为一)，你可以弃置与打出闪花色相同的牌，若如此做，此杀命中。",
            "tlbb_yuguan":"鱼贯",
            "tlbb_yuguan_info":"每当你的杀造成伤害后，若目标计算下家的距离为1并且其下家不为你，你可以令此杀继续对其下家结算",
            "tlbb_qianjun":"千钧",
            "tlbb_qianjun_info":"你可以将两张杀一张无花色的杀使用，以此法使用的杀需要两张闪才能抵消，且造成的伤害+1。",
	 "tlbb_suxinghe":"苏星河",
            "tlbb_xpojie":"破劫",
            "tlbb_xpojie_info":"一名角色的判定牌生效前，若你有手牌，你可以令你与至多两名其他角色各展示一张手牌，然后你选择：将其中一张牌作为判定牌；或弃置这些牌。",
            "tlbb_yaotiehc":"手牌邀帖",
            "tlbb_yaotiehc_info":"",
            "tlbb_yaotiehp":"体力邀帖",
            "tlbb_yaotiehp_info":"",
            "tlbb_yaotie":"邀帖",
            "tlbb_yaotie_info":"出牌阶段限一次，你可以令至少3名手牌数或体力值呈等差数列的角色摸一张牌。",
            "tlbb_yayin":"哑隐",
            "tlbb_yayin_info":"锁定技。防止你受到的无牌源或无来源的伤害。",
	"tlbb_kangmin":"康敏",
            "tlbb_shifu":"弑夫",
            "tlbb_shifu_info":"游戏开始时，你令一名男性角色获得“软骨散”标记。拥有该标记的角色死亡时，你令另一名男性角色获得之。锁定技，摸牌阶段，你多摸X张牌（X为拥有“软骨散”的角色已损失的内力值）。",
            "tlbb_shifumark":"软骨散",
            "tlbb_buyao":"布谣",
            "tlbb_buyao_info":"结束阶段开始时，你可以声明一种花色，令一名角色进行判定，若判定结果与你声明的花色不同，你对其造成一点伤害。",
            "tlbb_siqian":"思迁",
            "tlbb_siqian_info":"当你受到伤害后，你可以将“软骨散”标记移至另一名男性角色侠客牌旁。",
	"tlbb_wangyuyan":"王语嫣",
            "tlbb_dianhua":"点化",
            "tlbb_dianhua_info":"每回合限一次，其他角色使用普通锦囊牌指定唯一目标时，你可以申明另一种合理的锦囊牌牌名，其按声明的牌对目标使用之。",
            "tlbb_wendian":"问典",
            "tlbb_wendian_info":"其他角色出牌阶段限一次，其可以交给你一张牌，若如此做，你可以亮出牌堆顶2张牌，然后其获得其中的锦囊牌。",
            "tlbb_wendian1":"问典",
            "tlbb_wendian1_info":"",
	"tlbb_spduanyu":"SP段誉",
	 "tlbb_nayuan":"纳元",
            "tlbb_nayuan_info":"当你使用牌前，或当你成为其他角色使用牌的目标前，你可以获得一名其他角色一项你没有的除觉醒技、限定技、主公技以外的技能，直到此牌结算完毕。",
            "tlbb_zhuha":"朱蛤",
            "tlbb_zhuha_info":"锁定技。防止你受到的属性伤害。",
	"tlbb_duanyu":"段誉",
            "tlbb_lingbo":"凌波",
            "tlbb_lingbo_info":"锁定技。其他角色在其回合内使用牌后，所有其他角色计算与你的距离+1，直到此回合结束。",
            "tlbb_qingguan":"情关",
            "tlbb_qingguan_info":"出牌阶段开始时，你可以选择：回复1点体力，若如此做，回合内结束时你失去1点体力；或失去1点体力，若如此做，回合结束时你回复1点体力。",
            "tlbb_xiumai":"修脉",
            "tlbb_xiumai_info":"锁定技。你的回合内，若你的体力值为偶数/奇数，其他角色不能使用或打出黑色牌/方片牌。",
            "tlbb_lingbo2":"凌波",
            "tlbb_lingbo2_info":"",
            "tlbb_qingguan_loseHp":"情关",
            "tlbb_qingguan_loseHp_info":"",
            "tlbb_qingguan_recover":"情关",
            "tlbb_qingguan_recover_info":"",
            "tlbb_xiumai3":"修脉",
            "tlbb_xiumai3_info":"",
            "tlbb_xiumai2":"修脉",
            "tlbb_xiumai2_info":"",
	"tlbb_xuzhu":"虚竹",
	 "tlbb_beiming":"北冥",
            "tlbb_beiming_info":"每回合限一次，其他角色使用普通锦囊牌后，你可以弃置一张与此牌颜色相同的“戒”，然后视为你你使用了此牌。",
            "tlbb_pojie_respond":"破戒打出",
            "tlbb_pojie_respond_info":"",
            "tlbb_pojie_use":"破戒使用",
            "tlbb_pojie_use_info":"",
            "tlbb_pojie":"破戒",
            "tlbb_pojie_info":"你使用酒后、造成伤害后、或使用普通锦囊牌指定女性角色为唯一目标后，你可以将将牌堆顶1张牌置于武将牌上，称为“戒”，你可以使用或打出“戒”。",
            "tlbb_huansu":"还俗",
            "tlbb_huansu_info":"觉醒技。当你获得第3张“戒”后，你减1点体力上限并回复1点体力，且你不能再使用或打出“戒”，然后获得【北冥】。",
	 	"tlbb_duanyanqing":"段延庆",
			"tlbb_azhu":"阿朱",
	"tlbb_qiangcan":"戕残",
            "tlbb_qiangcan_info":" 锁定技。游戏开始时，标记你为“储嗣”角色。“储嗣”死亡后，你成为“储嗣”。“储嗣”受到伤害后，来源可以取代其成为“储嗣”。（“储嗣”角色摸牌阶段摸牌多摸两张牌且手牌上限+2）。",
            "tlbb_chusi":"储嗣",
            "tlbb_chusi_info":"当你受到伤害后，伤害来源可取代你的“储嗣”成为新的“储嗣”。",
            "tlbb_chusi2":"遗胄",
            "tlbb_chusi2_info":"锁定技。你为“储嗣”角色，摸牌阶段摸牌额外摸两张牌且手牌上限+2。",
            "tlbb_liuwang":"流亡",
            "tlbb_liuwang_info":"锁定技。结束阶段开始时，若你不是“储嗣”，你减1点体力或弃置2张牌",
            "tlbb_rangquan":"攘权",
            "tlbb_rangquan_info":"觉醒技。当你进入濒死状态时，你减1点体力上限，回复2点体力，并摸2张牌，失去“戕残”、“流亡”，然后若你不是“储嗣”，你成为“储嗣”。",
            "tlbb_qiangcan2":"戕残",
            "tlbb_qiangcan2_info":"undefined",
	 "tlbb_yirong1":"易容",
            "tlbb_yirong1_info":"所有人展示武将牌后，你展示8张未加入游戏的武将牌，称为“易容”牌，一名角色回合开始时，你可以选择一张“易容”牌，令其获得易容牌上的技能直到回合结束（其本身的技能会在此回合失效）。拥有”易容“牌的角色回合内对你使用杀造成的伤害+1。",
            "tlbb_yirong":"易容",
            "tlbb_yirong_info":"",
            "tlbb_yirong2":"易容",
            "tlbb_yirong2_info":"",
            "tlbb_xiaoti":"孝悌",
            "tlbb_xiaoti_info":"每回合限一次，一名角色受到伤害后，你可以弃置一张手牌，然后其回复1点体力。",
        },
			};
if(lib.device||lib.node){
				for(var i in tlbb.character){tlbb.character[i][4].push('ext:金庸群侠传/'+i+'.jpg');}
			}else{
				for(var i in tlbb.character){tlbb.character[i][4].push('db:extension-金庸群侠传:'+i+'.jpg');}
			}
			return tlbb;
		});
		lib.config.all.characters.push('tlbb');
		if(!lib.config.characters.contains('tlbb')) lib.config.characters.remove('tlbb');
		lib.translate['tlbb_character_config']='天龙八部';
game.import('character',function(){
			var sdxl={
				name:'sdxl',
				connect:true,
				character:{
	         "sdxl_yangguo":["male","wei",3,["sdxl_anhun","sdxl_biefu","sdxl_shangli"],['zhu']],          
            "sdxl_xiaolongniv":["female","wei",3,["sdxl_luowang","sdxl_hebi","sdxl_muzong"],['zhu']],
"sdxl_jinlunfawang":["male","qun",4,["sdxl_mizong","sdxl_longxiang"],[]],
"sdxl_mengge":["male","qun",4,["sdxl_fasong","sdxl_xiazhi"],[]],
  
                },
							
			characterIntro:{	
			"sdxl_yangguo":"《神雕侠侣》男主角，杨康与穆念慈之子，因杨康一生犯错，郭靖将其起名为杨过，愿其有过改之。自小与师父小龙女在古墓长大，后来发展出一段惊骇俗的爱情。小龙女在绝情谷身中剧毒而投崖，杨过万念俱灰中悟出黯然销魂掌，之后更结识神雕，习得绝世武功。十六年后终与小龙女重逢，两人助郭家保卫襄阳。【CV：清酒摇舟】",
			"sdxl_xiaolongniv":"《神雕侠侣》女主角，终南山古墓派弟子，一生恪守师父遗言守在古墓，不食人间烟火。清新脱俗，清冷婉约。因孙婆婆临终遗言，被迫收下男徒杨过并与其发展出轰轰烈烈的师徒恋。虽不为世人所容，但历经磨难终成佳眷。在杨过小时候曾教他用天罗地势网练习捕捉麻雀；两人亦曾共同修炼绝学玉女素心剑法。【CV：草莓味少女】",
			"sdxl_jinlunfawang":"《神雕侠侣》第一反派。金轮法王属蒙古密教金刚宗，同时也是蒙古的国师。擅使五轮兵器，内功方面精研龙象般若功，最高练到第十层境界，威力无穷，几乎可与杨过的黯然销魂掌匹敌。后以蒙古国师身分协助由忽必烈统率的蒙古南侵大军攻打南宋，在中原大地上与杨过、小龙女等结下不解之仇，后败于黯然销魂掌。【CV：觅阳】",
			"sdxl_mengge":"孛儿只斤·蒙哥是大蒙古国的大汗，1251年1259年在位，史称蒙哥汗。为元太祖成吉思汗之孙、拖雷长子。《神雕侠侣》中的蒙哥，在率军攻打南宋的期间，为了迫使镇守襄阳城的郭靖投降，命令金轮法王捉拿了郭靖之女郭襄作为人质，将她绑在两军阵前的高台上，扬言要烧死她。后被杨过射死。【CV：蚩宇】",		
				},	
				characterTitle:{
					 "sdxl_yangguo":"Sukincen",            
            "sdxl_xiaolongniv":"Sukincen",	
				 "sdxl_jinlunfawang":"落影丶逝尘",
				 "sdxl_mengge":"落影丶逝尘",
				},
			perfectPair:{
			"sdxl_yangguo":['sdxl_xiaolongniv'],
			
					},
				
skill:{
    
"sdxl_fasong":{
                mod:{
                    globalFrom:function (from,to,distance){
            return distance-game.countPlayer(function(current){
                    if(current.group=='qun') return 1;
                });
            return distance;
        },
                },
            },
            "sdxl_xiazhi":{
                audio:"ext:金庸群侠传:4",
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        if(game.countPlayer()<3) return false;
        var num=0;
        for(var e=0;e<game.players.length;e++){
            if(game.players[e]!=player){   
                if(get.distance(game.players[e],player,'attack')<=1) num++;
            }
        }
        if(num>0) return true;
        return false;
    },
                filterTarget:function (card,player,target){
        if(get.distance(player,target)>1) return false;
        if(target==player) return false;
        return true;
    },
                content:function (){
        "step 0"
        event.target=targets[0];
        event.num1=0;
        event.num2=0;
        "step 1"
        if(event.current==undefined) event.current=player.next;
        if(event.current==player){
            event.goto(6);
        }
        "step 2"
        if(event.current==event.target){
            event.current=event.current.next;
            event.goto(1);
        }
        "step 3"
        if(get.distance(event.current,player,'attack')>1){
            event.current=event.current.next;
            event.goto(1);
        }
        "step 4"
        player.line(event.current,'green');
        var skr='是否弃置一张牌保护'+get.translation(event.target)+'？若弃牌角色数不大于未弃牌角色数则'+get.translation(event.target)+'受到一点伤害'
        var next=event.current.chooseToDiscard(1,'he',skr,function(card,player){
            return true;
        });
        var att1=get.attitude(event.current,event.target);
        next.ai=function(card){
            if(att1>0&&event.num1>=event.num2){
                 return 6-get.value(card);
            }
            return -1;
        };
        "step 5"
        if(result.bool){
            event.num1++;
            game.log('已弃牌'+event.num1+'人','没有弃牌'+event.num2+'人');     
            event.current=event.current.next;
            event.goto(1);
        }
        else{
            event.damage=true;
            event.num2++;
            game.log(event.current,'没有弃牌');
            game.log('已弃牌'+event.num1+'人','没有弃牌'+event.num2+'人');   
            event.current=event.current.next;
            event.goto(1);
        }
        "step 6"
        if(event.num2>=event.num1){
            if(event.damage){
                event.target.damage(player);
            }
            else{
                game.log('其他角色攻击范围没有你',event.target,'免受伤害'); 
            }
        }
        else{
            game.log('已弃牌角色数大于没有弃牌角色数',event.target,'免受伤害'); 
        }      
    },
                ai:{
                    order:9,
                    result:{
                        target:function (player,target){
                if(target.hp==1) return -5;
                return -2;
            },
                    },
                    threaten:2,
                },
            },         
 "sdxl_mizong":{
                audio:"ext:金庸群侠传:2",
                mod:{
                    selectTarget:function (card,player,range){
            if(ui.selected.cards.length&&_status.event.skill=='sdxl_mizong'){
                if(card.name=='juedou'&&range[1]!=-1) range[1]+=ui.selected.cards.length-1;
            }
        },
                },
                enable:"phaseUse",
                usable:1,
                filterCard:function (card){
        var num=0;
        for(var i=0;i<ui.selected.cards.length;i++){
            num+=get.number(ui.selected.cards[i]);
        }
        return get.number(card)+num<=13;
    },
                complexCard:true,
                selectCard:function (){
        var num=0;
        for(var i=0;i<ui.selected.cards.length;i++){
            num+=get.number(ui.selected.cards[i]);
        }
        if(num==13) return ui.selected.cards.length;
        return ui.selected.cards.length+2;
    },
                filter:function (event,player){
        if(!player.countCards('h')) return false;
        return true;
    },
                viewAs:{
                    name:"juedou",
                },
                ai:{
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
            "sdxl_longxiang1":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"shaBegin",
                },
                forced:true,
                filter:function (event,player){
        return !event.directHit;
    },
                priority:-1,
                content:function (){
                game.playJY(['sdxl_longxiang1','sdxl_longxiang2'].randomGet());
        if(typeof trigger.shanRequired=='number'){
            trigger.shanRequired++;
        }
        else{
            trigger.shanRequired=2;
        }
    },
            },
            "sdxl_longxiang2":{
                audio:"ext:金庸群侠传:2",
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
        game.playJY(['sdxl_longxiang1','sdxl_longxiang2'].randomGet());
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
            "sdxl_longxiang":{
                forced:true,
                locked:true,
				audio:"ext:金庸群侠传:2",
                group:["sdxl_longxiang1","sdxl_longxiang2"],
            },
            
             "sdxl_anhun":{
                audio:"ext:金庸群侠传:4",
                trigger:{
                    player:"damage",
                },
                filter:function (event,player){
        return player.isAlive();
    },
                priority:8,
                prompt:"是否发动技能【黯魂】？",
                content:function (){
              'step 0'                             
                            event.cards=get.cards(5);
                            player.showCards(event.cards);
                            'step 1'
                            event.lose=0;
                            for(var i=0;i<event.cards.length;i++){
                                if(event.cards[i].name=='sha'){
                                    event.lose++;
                                }
                            }
                            if(event.lose>0){
                                var next=player.chooseCardButton('请选择视为【杀】使用的【杀】',event.cards,{name:'sha'});
                                next.filterButton=function(button){
                                    return button.link.name=='sha';
                                }
                            }
                            else{
                            //    player.gain(event.cards,'gain2');
                                event.finish();
                            }
                            'step 2'
                            if(result.bool){
                                event.cards1=result.links[0];
                                player.chooseTarget('请选择【黯魂】的目标',function(card,player,target){
                                    return lib.filter.targetEnabled({name:'sha'},player,target);
                                }).set('ai',function(target){
                            //return  get.effect(target,{name:event.cards1},_status.event.player);     
                            return get.effect(target,event.cards1,player,player);  
                                });
                            }
                            else{
                                event.finish();
                            }
                            'step 3'
                            if(result.bool){
								var chat=['黯然销魂掌','人不犯我，我不犯人。人若犯我，十倍奉还'].randomGet();
            player.say(chat);
                                player.useCard(event.cards1,result.targets,[event.cards1],false);                              
                                event.cards.remove(event.cards1);                            
                                event.goto(1);                                
                            }
                            else{                        
                                event.finish();
                            }                        
           },
                ai:{
                    expose:0.6,
                },
            },
            "sdxl_biefu":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"phaseEnd",
                },
                priority:16,
                direct:true,
                content:function (){
                "step 0"               
                player.chooseBool('是否发动【别赋】？').set('ai',function(){                                
                    if(player.isDamaged()) return true;    
                    });
        "step 1"
        if(result.bool){
        player.turnOver();        
        player.chooseTarget('请选择【别赋】的目标',function(card,player,target){
                                    return target!=player;
                                }).set('ai',function(target){
                            return get.recoverEffect(target,player,player);
                                });
                            }
                            else{
                                event.finish();
                            }
        "step 2"
    if(result.bool){
   // player.logSkill('sdxl_biefu');
    game.playJY(['sdxl_biefu1','sdxl_biefu2'].randomGet());
       player.recover();
       result.targets[0].recover();
       result.targets[0].addTempSkill('sdxl_biefu2',{player:'phaseEnd'});    
       if(result.targets[0].sex=='female'){
       result.targets[0].draw();
       }
                           }
                            else{
                                event.finish();
                            }              
    },
                ai:{
                    expose:0.8,
                },
            },
            "sdxl_biefu2":{
                mod:{
                    selectTarget:function (card,player,range){
if(get.type(card)!='delay'&&get.color(card)=='black'&&range[1]==1) range[1]++;
},
                },
            },
            "sdxl_shangli":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"turnOverEnd",
                },
                priority:6,
                zhuSkill:true,
                unique:true,
                filter:function (event,player){   
     if(!player.hasZhuSkill('sdxl_shangli')) return false;
            return game.hasPlayer(function(current){
            return current.group=='wei';
        });
    },
                content:function (){
        'step 0'
        player.draw();
        var targets=game.filterPlayer();     
        event.targets=targets;        
        'step 1'
        if(event.targets.length){
            var current=event.targets.shift();
            if(current.group=='wei'&&current!=player){           
            event.current=current;
            player.line(event.current,'green');  
            event.current.draw();         
               //game.asyncDraw([player,event.current]);                    
            }
            else{
                event.redo();
            }
        }  
       'step 2'                             
        if(event.targets.length){
            event.goto(1);
        } 
    },
            },
           
            "sdxl_muzong":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"phaseEnd",
                },
                priority:6,
                direct:true,
                zhuSkill:true,
                unique:true,
                filter:function (event,player){   
     if(player==event.player) return false;
     if(!player.hasZhuSkill('sdxl_muzong')) return false;
            return game.hasPlayer(function(current){
            return current.group=='wei';
        });
    },
                content:function (){
        'step 0'
         if(trigger.player.group=='wei'){
        trigger.player.chooseBool('是否横置或重置武将牌？').set('ai',function(){                                
                    if(get.attitude(trigger.player,player)>0&&!trigger.player.isLinked()) return true;    
                    if(get.attitude(trigger.player,player)<=0&&!trigger.player.isLinked()) return false;                    
                    return true;
                    }); 
                    }
        'step 1'
        if(result.bool){
        player.logSkill('sdxl_muzong',trigger.player);
           if(trigger.player.isLinked()){
            trigger.player.link(false);     
        //    trigger.player.turnOver(false);   
        }
        else{
        player.logSkill('sdxl_muzong',trigger.player);
            trigger.player.link();                 
        }
       }
            else{
                event.finish();
            }          
    },
            },
            "sdxl_hebi":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"turnOverEnd",
                },
                usable:1,
                filter:function (event,player){
             return event.player.isTurnedOver();
    },
                content:function (){
    "step 0"
     player.chooseTarget('选择【合璧】的目标',lib.translate.sdxl_hebi_info,true,function(card,player,target){
             return target!=player&&!target.isTurnedOver();
     }).set('ai',function(target){     
             return -get.attitude(player,target);            
     });        
     "step 1"
     if(result.bool){
             player.line(result.targets[0]);
             result.targets[0].turnOver();
     }
    else {       
            event.finish(); 
    }                     
    },
                ai:{
                    basic:{
                        result:{
                            player:1,
                        },
                        expose:0.8,
                    },
                },
            },
			"sdxl_luowang":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                group:"sdxl_luowang2",
                content:function (){
        "step 0"      
        num=2;  
        player.chooseTarget(get.prompt('sdxl_luowang'),[1,2],function(card,player,target){
            return true;
        },function(target){
            var att=get.attitude(_status.event.player,target);                
            if(att<=0&&target.isLinked()) return 0;        
            if(att>0&&target.isLinked()) return 1;    
            if(att<=0&&!target.isLinked()) return 1;    
            if(att>0&&!target.isLinked()) return 0;    
            return 1-att;
        });
        "step 1"
        if(result.bool){
        event.targets=result.targets;
            player.logSkill("sdxl_luowang",result.targets);
            event.num=0;
           // player.useCard({name:'tiesuo'},result.targets,false);          
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
            "sdxl_luowang2":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"linkAfter",
                },
                frequent:true,
                filter:function (event,player){
        return event.player.isLinked();
    },
                content:function (){
					//game.playJY(['sdxl_luowang1','sdxl_luowang2'].randomGet());
                player.draw();
    },
            },
},
         
translate:{
	"sdxl_mengge":"蒙哥",
            "sdxl_fasong":"伐宋",
            "sdxl_fasong_info":"锁定技。你的攻击范围+X（X为存活的群雄角色数）。",
            "sdxl_xiazhi":"挟制",
            "sdxl_xiazhi_info":"出牌阶段限一次，你可以选择一名距离1以内的其他角色，称为“人质”，并令攻击范围有你的所有其他角色（“人质”除外）选择是否弃置一张牌，然后若选择弃牌的角色数不大于未弃牌的角色数，你对“人质”造成一点伤害。",
	        "sdxl_jinlunfawang":"金轮法王",
	  "sdxl_mizong":"密宗",
            "sdxl_mizong_info":"你可以将任意张点数和为13的牌当“决斗”对至多X名角色使用（X为你以此法使用的牌数）。",
            "sdxl_longxiang1":"龙象",
            "sdxl_longxiang1_info":"",
            "sdxl_longxiang2":"龙象",
            "sdxl_longxiang2_info":"",
            "sdxl_longxiang":"龙象",
            "sdxl_longxiang_info":"锁定技。你使用的杀或决斗需要使用两张闪或杀来响应；其他角色使用决斗指定你为目标后，其每次响应此牌需连续使用两张杀。",
	"sdxl_yangguo":"杨过",
           "sdxl_luowang":"罗网",
            "sdxl_luowang2":"罗网",
            "sdxl_anhun":"黯魂",
            "sdxl_anhun_info":"每当你受到伤害时，你可以亮出牌堆顶5张牌，然后你可以无距离限制地使用其中任意张杀。",
            "sdxl_biefu":"别赋",
            "sdxl_biefu_info":"回合结束时，你可以翻面，然后令一名其他角色与你各回复一点体力（若为女性角色，则其再摸1张牌），且直到其下回合结束，其使用黑色普通锦囊牌或黑色基本牌时可额外指定一名目标。",
            "sdxl_shangli":"伤离",
            "sdxl_shangli_info":"主公技。当你的武将牌翻面时，你可以与其他魏势力角色各摸1张牌。",
            "sdxl_biefu2":"别赋",
            "sdxl_biefu2_info":"",
             "sdxl_xiaolongniv":"小龙女",
            "sdxl_luowang_info":"当你受到伤害后，你可以选择至多两名角色，横置其武将牌。每当一名角色横置武将牌后，你可以摸1张牌。",
            "sdxl_luowang2_info":"每当一名角色横置武将牌后，你可以摸1张牌。",
            "sdxl_hebi":"合璧",
            "sdxl_hebi_info":"每回合限一次，当一名角色将武将牌翻至背面向上时，你可令另一名未翻面的其他角色将武将牌翻面。",
            "sdxl_muzong":"墓宗",
            "sdxl_muzong_info":"主公技。其他魏势力角色的回合结束时，其可以横置或重置其武将牌。",   
                                                                                                                                
},
          };
if(lib.device||lib.node){
				for(var i in sdxl.character){sdxl.character[i][4].push('ext:金庸群侠传/'+i+'.jpg');}
			}else{
				for(var i in sdxl.character){sdxl.character[i][4].push('db:extension-金庸群侠传:'+i+'.jpg');}
			}
			return sdxl;
		});
		lib.config.all.characters.push('sdxl');
		if(!lib.config.characters.contains('sdxl')) lib.config.characters.remove('sdxl');
		lib.translate['sdxl_character_config']='神雕侠侣';
		game.import('character',function(){
			var xajh={
				name:'xajh',
				connect:true,
				character:{
		 		 "xajh_dongfangbubai":["[male,female].randomGet()","wei",3,["xajh_weizhong","xajh_daoxi"],[]],
 "xajh_ludayou":["male","shu",3,["xajh_digong","xajh_nianjue"],[]],
 "xajh_renwoxing":["male","shu",4,["xajh_biguan","xajh_xixing","xajh_chushan","xajh_quanbing"],['zhu']],
 "xajh_yanglianting":["male","wei",3,["xajh_yuhe","xajh_shichong"],[]],
  "xajh_yuelingsan":["female","shu",3,["xajh_jianwu","xajh_huizhi","xajh_fanghun"],[]],
  "xajh_yuebuqun":["male","shu",3,["xajh_xiejian","xajh_qiaowei","xajh_yuli"],['zhu']],
  "xajh_linghuchong":["male","shu",4,["xajh_jianhao","xajh_zuixia","xajh_wangyou"],['zhu']],
  "xajh_moda":["male","wei",4,["xajh_chongsu","xajh_qinjian"],[]],
   "xajh_zuolengchan":["male","wei",4,["xajh_linhan","xajh_weijian","xajh_bingpai"],['zhu']],
},        

characterIntro:{
	
	            "xajh_yuelingsan":"岳灵珊是华山派常门人岳不群和女侠宁中则的掌上明珠，和大师兄令狐冲是青梅竹马，自小一起合创冲灵剑法。令狐冲一生痴恋岳灵珊，她却对林平之情有独钟，成亲后即使因林平之自宫而从未有过夫妻之实，却甘心无悔守护在他身边，纵使被狠辣绝情的丈夫刺杀，临终前口里念的还是他。【CV：槐生】",
				"xajh_yuebuqun":"华山派气宗势力的掌门，号称君子剑，实乃伪君子。前期伪装隐忍，后期野心渐露。假意收养林平之，实则为了图获《辟邪剑谱》。在与左冷蝉的暗中较量中，采取按兵不动，趁势而起的手段，坐收渔人之利，实乃高明。为了一统江湖，不惜自宫练剑，导致众叛离亲，后被仪琳误杀。【CV：觅阳】",
                "xajh_dongfangbubai":"东方不败是日月神教的光明左使，本来一副忠厚老实的样子，教主任我行对他极其信任，甚至将武学秘籍《葵花宝典》交由他保管。任我行负伤闭关修炼期间，表面上效忠教主的东方不败发动了叛乱，将任我行囚禁在西湖底，自己成功成为日月神教新教主。后来为了修习神功，不惜挥刀自宫。【CV：青灯折扇不语】",
                "xajh_yanglianting":"杨莲亭原是日月神教里一名职务低微的教众，东方不败发动叛乱、夺得教主之位后，因杨莲亭身材魁梧、雄健威武，自宫后的东方不败阴阳倒乱，开始对他宠幸起来，提拔他做了总管，甚至将一切教务将由他打理，俨然成了东方不败的男宠。后来任我行等夹攻东方不败，东方不败为救杨莲亭，分心被任我行等击亡。【CV：主人】",
				"xajh_ludayou":"陆大有自幼拜入华山派门下，因排行第六，又喜爱猴子，是故人称“六猴儿”，为人活泼诙谐，略带风趣。打小与大师兄令狐冲交好，处处为其着想，视其为榜样。令狐冲受伤后，偷偷将小师妹岳灵珊偷来的《紫霞秘笈》念给令狐冲听，希望他以此疗伤，却被其点穴后离开，被前来盗取秘笈的二师兄劳德诺杀害。【CV：神齐大叔】",
				"xajh_renwoxing":"日月神教教主，有一统江湖的野心，早年在嵩山大会上被左冷禅寒冰真气所伤，于是闭关修炼并将教中事务交给东方不败打理，不料东方不败心存异心夺走教主之位。任我行善使用邪功吸星大法，能迅速吸收敌人内力。后来在向问天、令狐冲的合力协助之下，击败东方不败，夺回教主之位。【CV：冷淘】",
				"xajh_linghuchong":"自小由华山派掌门岳不群抚养长大，为华山派大弟子，后受定闲师太所托，成为恒山派掌门。生性放荡不羁，爽朗豁达，虽不拘小节，却有侠肝义胆。令狐冲嗜酒如命，一壶小酒，一个朋友。于思过崖面壁期间得到剑宗风清扬传授独孤九剑，曾在左冷禅围剿之际，以此招数解救华山派于危难。【CV：稳得高处】",
				"xajh_moda":"莫大先生是衡山派掌门，人称“潇湘夜雨”。莫大身材瘦长脸色枯槁，披著一件青布长衫，洗得青中泛白，形状落魄。他以一曲《潇湘夜雨》名动江湖，如泣如诉，听得人眼泪也会掉下来。琴中藏剑、剑发琴音这八字，是他一生武功的写照。虽然在血雨腥风的江湖中明哲保身，但其亦具有侠者风范，多次相救令狐冲。【CV：】",

				},   
				
				characterTitle:{
					"xajh_yuelingsan":"落影丶逝尘",	
					"xajh_zuolengchan":"落影丶逝尘",	
					"xajh_moda":"落影丶逝尘",
					"xajh_linghuchong":"落影丶逝尘",
					"xajh_yuebuqun":"落影丶逝尘",	
					"xajh_dongfangbubai":"落影丶逝尘",	
					"xajh_ludayou":"朱阳光",
					"xajh_renwoxing":"朱阳光",
					"xajh_yanglianting":"朱阳光",
				},
				
				perfectPair:{
			//"jyqxz_xajh_genie":['jyqxz_xajh_weizhuang'],
					},
                               
skill:{
	"xajh_weijian":{
				audio:"ext:金庸群侠传:2",
                skillAnimation:true,
                unique:true,
                init:function (player){
        player.storage.xajh_weijian=false;
    },
                filter:function (event,player){
        if(event.player==player) return false;
        return !player.storage.xajh_weijian;
    },
                check:function (event,player){
        var att=get.attitude(player,event.player);
        if(att<0){
            var num=0,players=game.filterPlayer();
                for(var i=0;i<players.length;i++){
                    if(players[i]!=event.player&&get.distance(players[i],event.player,'attack')<=1){
                        num++;
                    }
                }
                if(num>2) return true;
        }
        return false;
    },
                trigger:{
                    global:"phaseBegin",
                },
                content:function (){
        "step 0"
        player.line(trigger.player,'green');
        player.storage.xajh_weijian=true;
        player.awakenSkill('xajh_weijian');
        event.pl=player;
        event.trp=trigger.player;
        "step 1"
        if(event.current==undefined) event.current=event.trp.next;
        "step 2"
        if(event.current==event.trp){
            event.finish();
        }
        if(!event.trp.isAlive()){
            event.finish();
        }
        "step 3"
        if(get.distance(event.current,event.trp,'attack')>1){
            event.current=event.current.next;
            event.goto(2);
        }
        "step 4"
        player.line(event.current,'green');
        event.on1='视为对'+get.translation(event.trp)+'使用决斗';
        event.on2='受到'+get.translation(event.pl)+'一点伤害';
        event.current.chooseControl(event.on1,event.on2,function(){
            if(get.attitude(event.current,event.trp)<=0) return event.on1;
            return event.on2;
        });
        "step 5"
        if(result.control==event.on1){
            event.current.useCard({name:'juedou'},event.trp,'noai').animate=false;
            event.current=event.current.next;
            event.goto(2);
        }
        else{
            event.current.damage(event.pl);
            event.current=event.current.next;
            event.goto(2);
        }
    },
            },
            "xajh_linhan":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"dieBefore",
                },
                priority:100,
                direct:true,
                filter:function (event,player){
        if(event.nouseskill==true) return false;
        if(player.countCards('h')==0) return false;
        if(event.player.identity=='zhu') return false;
        return event.source&&event.source.isIn();
    },
                content:function (){
        "step 0"
        var next=player.chooseCardTarget({
            position:'h',
            filterCard:lib.filter.cardDiscardable,
            filterTarget:function(card,player,target){
                return target!=trigger.source&&target!=trigger.player;
            },
            ai1:function(card){
                return 10-get.value(card);
            },
            ai2:function(target,player){
                var fan=false;
                if(trigger.player.identity=='fan') fan=true;
                var att=get.attitude(_status.event.player,target);
                var att1=get.attitude(_status.event.player,trigger.source);
                if(fan==true&&att>0&&att1<0) return att;
                return -1;
            },
            prompt:get.prompt('xajh_linhan')
        });
        "step 1"
        if(result.bool){
            player.discard(result.cards);
            player.logSkill('xajh_linhan',result.targets);
            player.line(result.targets,'green');
            trigger.source=result.targets[0];
            trigger.untrigger();
            trigger.trigger('dieBefore');
            trigger.nouseskill=true
        }
        else{
            event.finish();
        }
    },
            },
            "xajh_bingpai":{
                group:["xajh_bingpai_remove"],
                subSkill:{
                    off:{
                        sub:true,
                    },
                    remove:{
                        trigger:{
                            global:"gameStart",
                            player:"enterGame",
                        },
                        popup:false,
                        forced:true,
                        filter:function (event,player){
                return player.identity!='zhu';
            },
                        content:function (){
                player.removeSkill('xajh_bingpai');
            },
                        sub:true,
                    },
                },
                audio:"ext:xajh_zuolengchan:2",
                unique:true,
                zhuSkill:true,
				audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"useCardAfter",
                },
                filter:function (event,player){
        if(player.hasSkill('xajh_bingpai_off')) return false;
        if(!player.hasZhuSkill('xajh_bingpai')) return false;
        return game.hasPlayer(function(current){
            return current!=player&&current.group=='wei';
        });
    },
                direct:true,
                content:function (){
        "step 0"
        var type=get.type(trigger.card);
        event.type=type;
        "step 1"
        if(event.current==undefined) event.current=player.next;
        if(event.current==player){
            event.finish();
        }
        "step 2"
        if(event.current.group!='wei'){     
            event.current=event.current.next;
            event.goto(1);
        }
        if(event.current.countCards('he')==0){     
            event.current=event.current.next;
            event.goto(1);
        }
        "step 3"
        event.current.chooseToUse({
            filterCard:function(card){
                return get.type(card)==event.type;
              },
            })
        "step 4"
        if(result.bool){
            event.current.logSkill('xajh_bingpai',player);
            player.draw();
            player.addTempSkill('xajh_bingpai_off');
        }
        else{
            event.current=event.current.next;
            event.goto(1);
        }
    },
            },
	"xajh_chongsu":{
				audio:"ext:金庸群侠传:2",
                init:function (player){
        player.storage.xajh_chongsu=[];
    },
                intro:{
                    content:function (storage){
            if(!storage.length){
                return '未记录牌的点数';
            }
            else{
                var str='已记录点数为'+get.cnNumber(storage[0]);
                for(var i=1;i<storage.length;i++){
                    str+='、'+get.cnNumber(storage[i]);
                }
                str+='的牌';
                return str;
            }
        },
                },
                group:"xajh_chongsu_cancel",
                subSkill:{
                    cancel:{
                        trigger:{
                            target:"useCardToBefore",
                        },
                        forced:true,
                        priority:15,
                        check:function (event,player){
                return get.effect(event.target,event.card,event.player,player)<0;
            },
                        filter:function (event,player){
                if(event.player==player) return false;
                if(!event.cards||event.cards.length!=1) return false;
                var number=get.number(event.card);
                if(!number) return false;
                if(!player.storage.xajh_chongsu.contains(number)) return false;
                return get.type(event.card,'trick')=='trick';
            },
                        content:function (){
				game.playJY(['xajh_chongsu1','xajh_chongsu2'].randomGet());			
                trigger.cancel();
                var number=get.number(trigger.card);
                game.log(player,'因记录了点数'+get.cnNumber(number)+'取消成为'+get.translation(trigger.card)+'的目标');
            },
                        sub:true,
                    },
                },
                trigger:{
                    player:"useCard",
                    target:"useCardToBefore",
                },
                forced:true,
                filter:function (event,player){
        if(!event.cards||event.cards.length!=1) return false;
        var number=get.number(event.card);
        if(!number) return false;
        if(player.storage.xajh_chongsu.contains(number)) return false;
        return get.type(event.card)=='basic';
    },
                content:function (){
        var number=get.number(trigger.card);
        if(!player.storage.xajh_chongsu.contains(number)){
            player.storage.xajh_chongsu.push(number);
            game.log(player,'记录了点数'+get.cnNumber(number)+'');
            player.markSkill('xajh_chongsu');
            player.syncStorage('xajh_chongsu');         
        }
    },
                ai:{
                    effect:{
                        target:function (card,player,target){
                var number=get.number(card);
                if(!number) return;
                if(get.type(card)=='basic'&&!target.storage.xajh_chongsu.contains(number)) return [1,0.2];
                if(target.storage.xajh_chongsu.contains(number)&&target!=player&&get.type(card,'trick')=='trick') return 'zeroplayertarget';
            },
                        player:function (card,player,target){
                var number=get.number(card);
                if(!number) return;
                if(get.type(card)=='basic'&&!player.storage.xajh_chongsu.contains(number)) return [1,0.2];
            },
                    },
                },
            },
            "xajh_qinjian":{
				audio:"ext:金庸群侠传:2",
                enable:"phaseUse",
                usable:1,
                position:"h",
                filter:function (event,player){
        return player.countCards('h')>=3;
    },
                filterCard:function (card,player,target){
        var num=get.number(card);
        var ta=ui.selected.cards;
        if(ta.length){
            for(var i=0;i<ta.length;i++){
                if(num==get.number(ta[i])){
                    return false;
                };
            }
        }
        if(ta.length==2){
            var numm1=get.number(ta[0])+get.number(ta[0])-get.number(ta[1]);
            var numm2=get.number(ta[1])+get.number(ta[1])-get.number(ta[0]);
            var numm3=get.number(ta[1])+get.number(ta[0]);
            var numm4=numm3/2;
            if(num!=numm1&&num!=numm2&&num!=numm4) return false;
        }
        if(ta.length>2){
            var num4=14;
            var num5=14;
            var num6=0;
            var num7=0;
            for(var i=0;i<ta.length;i++){
                if(get.number(ta[i])<num4){
                    num4=get.number(ta[i]);
                }
            }
            for(var i=0;i<ta.length;i++){
                if(get.number(ta[i])<num5&&get.number(ta[i])!=num4){
                    num5=get.number(ta[i]);
                }
            }
            for(var i=0;i<ta.length;i++){
                if(get.number(ta[i])>num6){
                    num6=get.number(ta[i]);
                }
            }
            for(var i=0;i<ta.length;i++){
                if(get.number(ta[i])>num7&&get.number(ta[i])!=num6){
                    num7=get.number(ta[i]);
                }
            }
            if((num4+num4-num5)!=num&&(num6+num6-num7)!=num) return false;     
        }
        return true;
    },
                selectCard:3,
                check:function (card){
        return 20-get.value(card);
    },
                filterTarget:function (card,player,target){
        var car=ui.selected.cards;
        var ji=false;
        var ou=false;
        for(var i=0;i<car.length;i++){
            var numm=get.number(car[i]);
            if(numm%2==1&&ji==false){
                ji=true;
            }
            if(numm%2==0&&ou==false){
                ou=true;
            }
        }
        if(ji==true&&ou==true){
            return true;        
        }
        else if(ji==true&&ou==false){
            return true;           
        }
        else if(ji==false&&ou==true){
            if(target.hp>=target.maxHp) return false;      
            return true;      
        }
    },
                selectTarget:function (target,card,player){
        var car=ui.selected.cards;
        var ji=false;
        var ou=false;
        for(var i=0;i<car.length;i++){
            var numm=get.number(car[i]);
            if(numm%2==1&&ji==false){
                ji=true;
            }
            if(numm%2==0&&ou==false){
                ou=true;
            }
        }
        if(ji==true&&ou==true){
            return -1;        
        }
        else if(ji==true&&ou==false){
            return [1,3];           
        }
        else if(ji==false&&ou==true){
            return [1,3];  
        }
    },
                content:function (){
        "step 0"
        var car=cards;
        var ji=false;
        var ou=false;
        for(var i=0;i<car.length;i++){
            var numm=get.number(car[i]);
            if(numm%2==1&&ji==false){
                ji=true;
            }
            if(numm%2==0&&ou==false){
                ou=true;
            }
        }
        if(ji==true&&ou==true){
            target.loseHp();    
        }
        else if(ji==true&&ou==false){
            target.damage(1,player);     
        }
        else if(ji==false&&ou==true){
            target.recover();
        }
    },
                ai:{
                    order:11,
                    result:{
                        target:function (player,target){
                var car=ui.selected.cards;
                var ji=false;
                var ou=false;
                for(var i=0;i<car.length;i++){
                    var numm=get.number(car[i]);
                    if(numm%2==1&&ji==false){
                        ji=true;
                    }
                    if(numm%2==0&&ou==false){
                        ou=true;
                    }
                }
                if(ji==true&&ou==true){
                    return -get.recoverEffect(target,player,player); 
                }
                else if(ji==true&&ou==false){
                    return get.damageEffect(target,player);
                }
                else if(ji==false&&ou==true){
                    return get.recoverEffect(target,player,player); 
                }
            },
                    },
                    threaten:1,
                },
            },
	 "xajh_jianhao":{
		  audio:"ext:金庸群侠传:2",
                init:function (player){
        player.storage.xajh_jianhao=[];
    },
                intro:{
                    content:function (storage){
            if(!storage.length){
                return '未声明过武器牌';
            }
            else{
                var str='已声明过'+get.translation(storage[0]);
                for(var i=1;i<storage.length;i++){
                    str+='、'+get.translation(storage[i]);
                }
                str+='。';
                return str;
            }
        },
                },
                trigger:{
                    player:"useCard",
                },
                filter:function (event,player){
        if(player.getEquip(1)) return false;
        if(event.card.name!='sha') return false;
        var list=get.inpile('equip');
        for(var i=0;i<list.length;i++){
            var card={name:list[i]};
            var info=get.info(card);
            if(info.subtype=='equip1'&&info.skills&&!player.storage.xajh_jianhao.contains(list[i])){
            return true;
            }      
        }
        return false;
    },
                content:function (){
        'step 0'
        var list1=[];
        var list=get.inpile('equip');
        for(var i=0;i<list.length;i++){
            var card={name:list[i]};
            var info=get.info(card);
            if(info.subtype=='equip1'&&info.skills&&!player.storage.xajh_jianhao.contains(list[i])){
            list1.push(list[i]);
            }      
        }
        for(var i=0;i<list1.length;i++){
            list1[i]=['武器','',list1[i]];
        }
        if(list1.length>0){
            var dialog=ui.create.dialog('选择一张武器牌获得该武将的武器特效直到该杀结算完毕',[list1,'vcard'],'hidden');
            player.chooseButton(dialog,true).set('ai',function(button){
                return Math.random();
            });
        }
        else{
            event.finish();
        }
        'step 1'
        if(result.bool){
            var card={name:result.buttons[0].link[2]};
            var name=result.buttons[0].link[2];
            player.storage.xajh_jianhao.push(name);
            game.log(player,'声明了'+get.translation(name));
            player.syncStorage('xajh_jianhao');
            player.markSkill('xajh_jianhao');
            //player.showCards(get.translation(player)+'声明了'+get.translation(name),card);
            var info=get.info(card);
               if(info.skills){
                    player.addAdditionalSkill('xajh_jianhao',info.skills);
                    trigger.gainskill=true;
                    }
                else{
                    player.removeAdditionalSkill('xajh_jianhao');
                }
        }
    },
                group:["xajh_jianhao_skill"],
                subSkill:{
                    skill:{
                        trigger:{
                            player:"useCardAfter",
                        },
                        priority:2,
                        filter:function (event,player){
                if(!event.card||event.card.name!='sha') return false;
                return event.gainskill==true;
            },
                        forced:true,
                        popup:false,
                        content:function (){    
                player.removeAdditionalSkill('xajh_jianhao');
                game.log(player,'失去了武器特效');
            },
                        sub:true,
                    },
                },
            },
            "xajh_zuixia":{
				 audio:"ext:金庸群侠传:2",
                group:["xajh_zuixia_use"],
                subSkill:{
                    use:{
                        trigger:{
                            player:["useCard"],
                        },
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                if(event.card.name=='jiu'&&_status.currentPhase==player) return true;
                return false;
            },
                        content:function (){
                player.addTempSkill('xajh_zuixia_buff','phaseEnd');
            },
                        sub:true,
                    },
                    buff:{
                        mark:true,
                        marktext:"醉",
                        intro:{
                            content:"你造成的伤害加一",
                        },
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event){
                return event.notLink();
            },
                        popup:false,
                        forced:true,
                        content:function (){
                trigger.num++;
            },
                        ai:{
                            damageBonus:true,
                        },
                        sub:true,
                    },
                },              
                enable:"chooseToUse",
                filterCard:function (card){
        return get.suit(card)=='club';
    },
                viewAs:{
                    name:"jiu",
                },
                viewAsFilter:function (player){
        if(!player.countCards('h',{suit:'club'})) return false;
    },
                prompt:"将一张梅花手牌当酒使用",
                check:function (card){
        if(_status.event.type=='dying') return 1;
        return 4-get.value(card);
    },
                ai:{
                    skillTagFilter:function (player){
            return player.countCards('h',{suit:'club'})>0&&player.hp<=0;
        },
                    threaten:1.5,
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
            "xajh_wangyou":{
				audio:"ext:金庸群侠传:2",
                group:["xajh_wangyou_remove"],
                subSkill:{
                    remove:{
                        trigger:{
                            global:"gameStart",
                            player:"enterGame",
                        },
                        popup:false,
                        forced:true,
                        filter:function (event,player){
                return player.identity!='zhu';
            },
                        content:function (){
                player.removeSkill('xajh_wangyou');
            },
                        sub:true,
                    },
                },
                trigger:{
                    global:["phaseDrawBegin"],
                },
                filter:function (event,player){
       if(event.player==player) return false;
        if(event.player.group!='shu') return false;
        return true;
    },
                direct:true,
                zhuSkill:true,
                content:function (){
        "step 0"
        trigger.player.chooseBool('是否展示牌堆的三张牌令'+get.translation(player)+'获得其中的梅花牌,你获得其余的牌？').set('ai',function(){                                
            if(get.attitude(trigger.player,player)>0) return true; 
            if(get.attitude(trigger.player,player)<0&&trigger.num<2) return true; 
            return false;
        }); 
        "step 1"
        if(result.bool){
            trigger.player.logSkill('xajh_wangyou',player);
            trigger.cancel();
            event.cards=get.cards(3);
            trigger.player.showCards(event.cards,'xajh_wangyou');
        }
        else{
            event.finish();
        }  
         "step 2"
         var plgain=[];
         for(var i=0;i<cards.length;i++){
            if(get.suit(cards[i])=='club'){
                plgain.push(cards[i]);
                cards.splice(i--,1);
            }
        }
        if(cards.length){
            trigger.player.gain(cards,'gain2');
         }
        
        if(plgain.length){
            player.gain(plgain,'gain2');
         }
    },
            },
	 "xajh_qiaowei":{
		 audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"damageEnd",
                },
                filter:function (event,player){
        if(!event.source) return false;
        if(!event.card||event.card.name!='sha') return false;
        if(!event.player.isAlive()||!event.source.isAlive()) return false;
        if(!event.player.countCards('hej')) return false;
        var card=game.createCard('juedou');
        if(event.player.canUse(card,event.source)){
            return true;
        }
        return false;
    },
                check:function (event,player){
        var att1=get.attitude(player,event.player);
        var att2=get.attitude(player,event.source);
        var hs=event.player.countCards('h')-event.source.countCards('h');
        if(att1>0&&att2>0) return false;
        if(att1<0&&att2<0) return true;
        if(att1>0&&att2<0&&hs>0) return true;
        return false;
    },
                content:function (){
         "step 0"
        player.discardPlayerCard('hej',trigger.player,true);
         "step 1"
        trigger.player.useCard({name:'juedou'},trigger.source);
    },
            },
            "xajh_yuli":{
                group:["xajh_yuli_remove"],
                subSkill:{
                    remove:{
                        trigger:{
                            global:"gameStart",
                            player:"enterGame",
                        },
                        popup:false,
                        forced:true,
                        filter:function (event,player){
                return player.identity!='zhu';
            },
                        content:function (){
                player.removeSkill('xajh_yuli');
            },
                        sub:true,
                    },
                },
                audio:"ext:金庸群侠传:2",
                trigger:{
                    global:["respond","damageEnd"],
                },
                filter:function (event,player){
        if(event.name=='respond'){
            if(event.getParent(2).name!='juedou') return false;
            if(event.card.name!='sha') return false;
            if(event.player==player) return false;
            if(event.player.group!='shu') return false;
            return true;
        }
        if(event.name=='damage'){
            if(!event.card||event.card.name!='juedou') return false;
            if(event.player.group=='shu'&&event.player!=player) return true;
            if(event.source.group=='shu'&&event.source!=player) return true;
            return true;
        }
        return false;
    },
                frequent:true,
                zhuSkill:true,
                content:function (){
        player.draw();
    },
            },
            "xajh_xiejian":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"phaseUseBegin",
                },
                direct:true,
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt('xajh_xiejian'),function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            var pl=_status.event.player;
            var tahs=target.countCards('h');
            var att=get.attitude(pl,target);
            if(att<0){
                var usesha=0;
                var num=0;
                var ca=pl.getCards('h');
                for(var i=0;i<ca.length;i++){
                    if(ca[i].name!='sha'&&get.tag(ca[i],'damage')&&pl.canUse(ca[i],target)){
                        var eff1=get.effect(target,ca[i],pl,pl);
                        if(eff1>0) num++;
                    }
                }
                for(var i=0;i<ca.length;i++){
                    if(ca[i].name=='sha'&&pl.canUse(ca[i],target)){
                        var eff1=get.effect(target,ca[i],pl,pl);
                        if(eff1>0) usesha++;
                    }
                }
                if(usesha>0) num++;
                if(target.hp<=0) return -1;
                if(target.countCards('h')<2) return -1;
                if(num>1) return (num/target.hp)+1;
            }
            if(att>0){
                if(target.countCards('h')==0) return 0.5;
                if(target.countCards('h')>0) return 1/(target.countCards('h')+1);       
            }
            return -1;
        });
        'step 1'
        if(result.bool){
            player.logSkill('xajh_xiejian',result.targets);
            result.targets[0].draw();
            result.targets[0].addTempSkill('xajh_xiejian_nouse');
        }
    },
                subSkill:{
                    nouse:{
                        mark:true,
                        intro:{
                            content:"不能使用或打出牌",
                        },
                        mod:{
                            cardEnabled:function (card,player){
                    return false;
                },
                            cardUsable:function (card,player){
                    return false;
                },
                            cardRespondable:function (card,player){
                    return false;
                },
                            cardSavable:function (card,player){
                    return false;
                },
                            targetInRange:function (card){
                    return false;
                },
                        },
                        ai:{
                            threaten:3,
                            effect:{
                                target:function (card,player,target){
                        if(get.tag(card,'damage')) return [1,-1];
                    },
                            },
                        },
                        sub:true,
                    },
                },
            },
	 "xajh_chongling":{
		 audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"dieBegin",
                },
                silent:true,
                content:function (){
        var pl=player.storage.冲灵角色;
         if(pl.storage.xajh_chonglingzhuanbei){
            //juese.storage.xajh_chonglingzhuanbei.discard();
            pl.$throw(pl.storage.xajh_chonglingzhuanbei);
            pl.unmark(pl.storage.xajh_chonglingzhuanbei,'xajh_chonglingzhuanbei');
            game.addVideo('unmarkId',pl,[get.cardInfo(pl.storage.xajh_chonglingzhuanbei),'冲灵装备']);
            pl.removeAdditionalSkill('xajh_chonglingzhuanbei');
            pl.$throw(pl.storage.xajh_chonglingzhuanbei);
        }
        if(player.storage.xajh_chonglingzhuanbei){
          //  player.storage.xajh_chonglingzhuanbei.discard();
            player.$throw(player.storage.xajh_chonglingzhuanbei);
        }
        pl.removeSkill('xajh_chonglingzhuanbei');
        player.removeSkill('xajh_chonglingzhuanbei');
        pl.unmarkSkill('xajh_jianwu');
        player.unmarkSkill('xajh_jianwu');
    },
                forced:true,
                popup:false,
            },
            "xajh_chonglingzhuanbei":{
                group:"xajh_chongling",
                trigger:{
                    player:["equipEnd","loseEnd"],
                },
                forced:true,
                popup:false,
                filter:function (event,player){
        if(event.name=='equip'&&get.subtype(event.card)=='equip1') return true;
        if(event.name=='lose') {
            for(var i=0;i<event.cards.length;i++){
                if(event.cards[i].original=='e'&&get.subtype(event.cards[i])=='equip1') return true;
            }
        }
        return false;
    },
                content:function (){
        if(trigger.name=='equip') {
            var card=trigger.card;
            var info=get.info(card);
            var pl=player.storage.冲灵角色;
            if(card){
                if(pl.storage.xajh_chonglingzhuanbei){
                    pl.unmark(pl.storage.xajh_chonglingzhuanbei,'冲灵装备');
                   // pl.discard(pl.storage.xajh_chonglingzhuanbei);
                    game.addVideo('unmarkId',pl,[get.cardInfo(pl.storage.xajh_chonglingzhuanbei),'冲灵装备']);
                }
                if(card.clone){
                    card.clone.moveDelete(pl);
                   game.addVideo('gain2',pl,get.cardsInfo([card.clone]));
                    pl.mark(card,'xajh_chonglingzhuanbei');
                    game.addVideo('markId',pl,[get.cardInfo(card),'xajh_chonglingzhuanbei']);
                    game.log(pl,'获得了装备效果');
                }
               // ui.special.appendChild(card);
                pl.storage.xajh_chonglingzhuanbei=card;
                var info=get.info(card);
                if(info.skills){
                    pl.addAdditionalSkill('xajh_chonglingzhuanbei',info.skills);
                    }
                else{
                    pl.removeAdditionalSkill('xajh_chonglingzhuanbei');
                }
            }
        }
        if(trigger.name=='lose') {
            if(pl.storage.xajh_chonglingzhuanbei){
                pl.unmark(pl.storage.xajh_chonglingzhuanbei,'冲灵装备');
                //pl.discard(pl.storage.xajh_chonglingzhuanbei);
                game.addVideo('unmarkId',pl,[get.cardInfo(pl.storage.xajh_chonglingzhuanbei),'冲灵装备']);
                pl.removeAdditionalSkill('xajh_chonglingzhuanbei');
                game.log(pl,'失去了装备效果');
            }
        }

    },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                if(get.subtype(card)=='equip1') return [1,3];
            },
                    },
                },
                intro:{
                    content:"card",
                },
            },
        
            "xajh_jianwu":{
				audio:"ext:金庸群侠传:2",
                skillAnimation:true,
                enable:"phaseUse",
                filter:function (event,player){
        return !player.storage.xajh_jianwu;
    },
                filterTarget:function (card,player,target){
        return target.sex=='male'&&target!=player;
    },
                content:function (){
        player.awakenSkill('xajh_jianwu');
        player.addSkill('xajh_chonglingzhuanbei');
        target.addSkill('xajh_chonglingzhuanbei');
        player.storage.冲灵角色=target;
        target.storage.冲灵角色=player;
        player.storage.xajh_jianwu=true;
        target.marks.xajh_jianwu=target.markCharacter(player,{
            name:'xajh_jianwu',
            content:'冲灵状态'
        });
        game.addVideo('markCharacter',target,{
            name:'xajh_jianwu',
            content:'冲灵状态',
            id:'xajh_jianwu',
            target:player.dataset.position
        });


        player.marks.xajh_jianwu=player.markCharacter(target,{
            name:'xajh_jianwu',
            content:'冲灵状态'
        });
        game.addVideo('markCharacter',player,{
            name:'xajh_jianwu',
            content:'冲灵状态',
            id:'xajh_jianwu',
            target:target.dataset.position
        });
    },
                ai:{
                    order:1,
                    result:{
                        target:1,
                    },
                },
            },
            "xajh_huizhi":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"useCard",
                },
                filter:function (event){
        return event.card.name=='jiu';
    },
                check:function (event,player){
        return (get.attitude(player,event.player)>0);
    },
                content:function (){
        trigger.player.draw(2);
    },
            },
            "xajh_fanghun":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"damageEnd",
                },
                filter:function (event,player){
        if(!event.source.countCards('hej')) return false;
        if(_status.currentPhase!=event.source) return false;
        return event.source.countUsed('jiu')==0;;
    },
                content:function (){
         "step 0"
        player.discardPlayerCard('hej',trigger.source,true);
         "step 1"
        trigger.source.useCard({name:'jiu'},trigger.source);
    },
                ai:{
                    maixie:true,
                },
            },
	"xajh_shichong":{
		audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('xajh_shichong'),function(card,player,target){
        return get.distance(trigger.source,target)<=target.getAttackRange()&&target.canUse({name:'sha'},trigger.source)&&trigger.source!=target&&player!=target;
        }).ai=function(target){

            var player=_status.event.player;
            if(get.attitude(_status.event.player,target)==0) return 0;
            if(get.attitude(_status.event.player,trigger.source)<0&&get.attitude(trigger.source,target)>0) return 1;           
            if(get.attitude(_status.event.player,trigger.source)<0&&get.attitude(trigger.source,target)<0) return 1;
            if(get.attitude(_status.event.player,trigger.source)>0&&get.attitude(trigger.source,target)>0) return 2;           
            if(get.attitude(_status.event.player,trigger.source)>0&&get.attitude(trigger.source,target)<0) return 0;

           
        }

         'step 1'
        if(result.bool){
            event.target=result.targets[0];
            event.target.chooseCard('请选择交给'+get.translation(player)+'的牌'+'或对'+get.translation(trigger.source)+'出招','he').set('ai',function(card){
                if(get.attitude(player,event.target)<0&&card.name=='du') return 1;
                if(get.attitude(trigger.source,event.target)<0) return-10;
                return 7-get.value(card);
            });
        }else{
            event.finish();
        };
        'step 2'
        if(result.bool){
            player.line(event.target);
            player.logSkill('xajh_shichong')
            event.target.$give(result.cards[0],player);
            player.gain(result.cards[0],event.target);
        }
        else{
            event.target.useCard({name:'sha'},trigger.source,false);
        
        }
        
        
    },
            },
            "xajh_yuhe":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"gainAfter",
                },
				frequent:true,
                filter:function(event,card,player){                
                     return event.source&&event.source!=player;

    },
                content:function(){
        player.draw();
    },
            },
  "xajh_biguan":{
	  audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"phaseUseEnd",
                },
                init:function(player){
        player.storage.renwoxing_biguan=0;
       },
                filter:function(event,player){
        return player.hp<player.maxHp&&player.num('he')>0;
        },
                content:function(){
        player.chooseToDiscard('he','闭关：弃置一张手牌或装备牌，防御距离+1').ai=function(card){
        return 6-get.value(card);
        };
        player.storage.renwoxing_biguan+=1;     
        player.markSkill('xajh_biguan');
        },
                intro:{
                    content:"防御距离+1",
                },
                group:"xajh_biguan2",
            },
            "xajh_biguan2":{
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                filter:function(event,player){
            return player.storage.renwoxing_biguan>0;

        },
                content:function(){
					game.playJY(['xajh_biguan1','xajh_biguan2'].randomGet());
            player.storage.renwoxing_biguan=0;
            player.unmarkSkill('xajh_biguan');
        },
                mod:{
                    globalTo:function(from,to,distance){
                   if(typeof to.storage.renwoxing_biguan=='number'){
                                        return distance+to.storage.renwoxing_biguan;
            }
                    },
                },
            },
            "xajh_xixing":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"dieAfter",
                },
                forced:true,
                filter:function(event,player){
            if(event.source==player) return true;
    },
                content:function(){
                player.gainMaxHp();
                player.recover();
               //player.loseMaxHp();
    },
            },
            "xajh_chushan":{
                audio:"ext:金庸群侠传:2",
                unique:true,
                enable:"phaseUse",
                mark:true,
                skillAnimation:true,
                limited:true,
                init:function(player){
        player.storage.xajh_chushan=false;
    },
                filter:function(event,player){
        if(player.storage.xajh_chushan) return false;
        return game.dead.length>0;     
    },
                content:function(){
           'step 0'  
            player.storage.xajh_chushan=true;            
            var chat=['有人的地方就有江湖，你如何退出？'].randomGet();
            player.say(chat);         
            event.current=player.next;                
         var list=[];
         for(var i=0;i<game.dead.length;i++){
             list.push(game.dead[i].name);
         }                 player.chooseButton(ui.create.dialog('选择1名已阵亡的角色',[list,'character']),function(button){
         for(var i=0;i<game.dead.length&&game.dead[i].name!=button.link;i++);
             return ai.get.attitude(_status.event.player,game.dead[i]);
         });                
          'step 1'
         if(result.bool){
         for(var i=0;i<game.dead.length&&game.dead[i].name!=result.buttons[0].link;i++);
             var dead=game.dead[i];   
         event.skills=[];
         var skills=dead.get('s',false,false);
         for(var i=0;i<skills.length;i++){var info=get.info(skills[i])
         if(info!=undefined&&!info.charlotte&&(!info.unique||info.gainable)) event.skills.push(skills[i]);
         };
         player.chooseControl(event.skills).set('prompt','请选择要获得的技能');
         }
         'step 2'
         player.loseMaxHp();
         player.removeSkill('xajh_biguan');
         player.addSkill(result.control);
         player.awakenSkill('xajh_chushan');
      //   player.logSkill('chushanceshi',dead.name);         
         },
                intro:{
                    content:"limited",
                },
                     ai:{
                    order:2,
                  result:{    
                        player:1,                             
                   },
                    expose:0.8,
                },
            },
            "xajh_quanbing":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"dieBefore",
                },
                unique:true,
                zhuSkill:true,
                forced:true,
                filter:function(event,player){
                                 if(event.player==player) return false;
                                 if(!player.hasZhuSkill('xajh_quanbing')) return false;
               return event.source.countCards('h')>0&&event.source&&event.source.isAlive()&&event.source!=player&&event.source.group=='shu';
    },
                content:function(){
        "step 0"
        trigger.source.chooseControl('令'+get.translation(player)+'发动权柄','不发动');                                                   
        "step 1"
        if(result.control=='令'+get.translation(player)+'发动权柄'){
        trigger.source.discard(trigger.source.getCards('h'));
        trigger.source=player;
        } 
        else{
        event.finish();
        }          
      },
                ai:{
                    threaten:1.5,
                    expose:0.1,
                },
            },
"xajh_digong":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"phaseUseBegin",
                },
                filter:function(event,player){
        return event.player!=player&&event.player.maxHp>player.maxHp;
    },
	check:function (event,player){
            return get.attitude(player,event.player)>0;
    },
                content:function(){

  trigger.player.addTempSkill('xajh_digong2')
        
        
        
    },
                ai:{
                    expose:0.3,
                    threaten:1.3,
                },
            },
            "xajh_digong2":{
                unique:true,
                mod:{
                    cardUsable:function(card,player,num){
            if(card.name=='sha') return num+1;
        },
                },
            },
            "xajh_nianjue":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"phaseBegin",
                },
                filter:function(event,player){
        return event.player.maxHp>event.player.hp;
    },
                check:function (event,player){
            return get.attitude(player,event.player)>0;
    },
                content:function(){

        "step 0"

        trigger.player.judge();
        "step 1"
        switch(get.suit(result.card)){
            case 'heart':trigger.player.recover();break;
          //  case 'diamond':trigger.player.draw(2);break;
            case 'club':trigger.player.gain(result.card);trigger.player.$gain2(result.card);break;
         //   case 'spade':trigger.source.turnOver();break;
        }
    },
                ai:{
                    expose:0.3,
                },
            },
"xajh_weizhong":{
	 audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"gainEnd",
                },
                check:function (event,player){
        return get.attitude(player,event.player)<=0;
    },
                filter:function (event,player){
        if((event.player.countCards('h')-event.player.hp)<0) return false;
        return event.source==player&&event.player!=player;
    },
                content:function (){
        trigger.player.loseHp();
    },
                ai:{
                    effect:{
                        target:function (card,player,target){
                var att=get.attitude(player,target);
                if(att>0) return;
                if(card.name=='shunshou'&&player.countCards('h')-player.hp>0) return [-2,0.6];
            },
                    },
                },
            },
            "xajh_daoxi":{
				 audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"useCard",
                },
                usable:1,
                direct:true,
                filter:function (event,player){
        if(!player.countCards('h')) return false;
        if(player.countCards('h')-event.player.countCards('h')>=0) return false;
        if(event.player==player) return false;
        if(get.type(event.card)!='trick'&&get.type(event.card)!='basic') return false;
        var info=get.info(event.card);
     //   if(info.allowMultiple==false) return false;
        if(event.targets&&!info.multitarget){
            if(game.hasPlayer(function(current){
                 return player.canUse(event.card,current);
             })){
                return true;
            }
        }
        return false;
    },
                content:function (){
        "step 0"
        var next=player.chooseCard(1,'h','是否选择一张牌交给'+get.translation(trigger.player)+'然后视为你使用'+get.translation(trigger.card)+'？',function(card,player){
            return true;
        });
        var att=get.attitude(_status.event.player,trigger.player);
        next.ai=function(card){
            if(att>2) {
                return -1;
            }
            if(att<=0) {
                if(trigger.targets.contains(player)&&trigger.targets.length==1){
                    if(trigger.card.name=='jiu'||trigger.card.name=='tao'||trigger.card.name=='wuzhong') return -2;
                    return 1;
                }
                if(!trigger.targets.contains(player)&&trigger.targets.length==1){
                    var att2=get.attitude(_status.event.player,trigger.targets[0]);
                    if(att2>2) {
                        if(trigger.card.name=='juedou'||trigger.card.name=='sha') return 1;  
                        return -1;
                    }
                    if(att2<0) {
                        if(trigger.card.name=='tao'||trigger.card.name=='wuzhong') return 0.5;  
                        return -1;
                    }
                }
            }
            return -1;
        };
        "step 1"
        if(result.bool){
            player.logSkill('xajh_daoxi',trigger.player);
            player.line(trigger.player,'green');
            trigger.player.gain(result.cards[0],player);
            player.$give(result.cards.length,trigger.player);
            player.chooseUseTarget(trigger.card);
            game.delay(0.7);
        }
        else{
            player.getStat().skill.xajh_daoxi--;
            game.delay(0.7);
            event.finish();
        }
         "step 2"
        trigger.cancel();
        game.delay(0.7);
    },
                ai:{
                    threaten:2,
                },
            },
    

},

 translate:{
	 "xajh_zuolengchan":"左冷禅",
            "xajh_weijian":"围歼",
            "xajh_weijian_info":"限定技。其他角色的回合开始时，你可以令攻击范围含有其的所有角色选择一项：视为对其使用“决斗”；或受到你1点伤害。",
            "xajh_linhan":"凛寒",
            "xajh_linhan_info":"每当一名角色杀死角色时，你可以弃置一张手牌并选择一名其他角色，视为其杀死该角色。",
            "xajh_bingpai":"并派",
            "xajh_bingpai_info":"主公技。每回合限一次，每当你使用牌后，其他魏势力角色可以使用一张与此牌类型相同的的牌，然后你摸1张牌。",
	 "xajh_moda":"莫大",
            "xajh_chongsu":"衷诉",
            "xajh_chongsu_info":"当你使用基本牌指定目标后，或你成为基本牌的目标后，若你未记录此牌的点数，你可以记录此牌的点数。锁定技，当你成为其他角色使用的普通锦囊牌的目标后，若你有此牌点数的标记，取消之。",
            "xajh_qinjian":"琴剑",
            "xajh_qinjian_info":"出牌阶段限一次，你可以弃置3张点数呈等差数列的手牌。若这些牌：同为奇数，你对至多三名角色造1点伤害；同为偶数，你令至多三名角色回复1点体力；包含奇数和偶数，你令所有角色失去1点体力。",
	  "xajh_linghuchong":"令狐冲",
            "xajh_jianhao":"剑豪",
            "xajh_jianhao_info":"你使用杀时，若你没有装备武器牌，你可以声明一张你未以此法声明过的武器牌，直到此杀结算完毕，你视为拥有该武器牌的技能。",
            "xajh_zuixia":"醉侠",
            "xajh_zuixia_info":"你可以将梅花手牌当酒使用。锁定技，你于回合内使用酒后，你造成的伤害+1。",
            "xajh_wangyou":"忘忧",
            "xajh_wangyou_info":"主公技。其他蜀国角色摸牌阶段开始时，其可以放弃摸牌，然后展示牌堆3张牌，令你获得其中的梅花牌，其获得其余牌。",
	  "xajh_yuebuqun":"岳不群",
            "xajh_qiaowei":"巧伪",
            "xajh_qiaowei_info":"一名角色受到杀造成的伤害后，若其区域内有牌，你可以弃置其区域内一张牌，若如此做，其视为对来源使用一张“决斗”。",
            "xajh_yuli":"渔利",
            "xajh_yuli_info":"主公技。每当其他蜀势力角色因“决斗”打出杀或因决斗造成或受到伤害后，你可以摸1张牌。",
            "xajh_xiejian":"邪剑",
            "xajh_xiejian_info":"出牌阶段开始时，你可以令一名其他角色摸一张牌，若如此做，其本回合不能使用或打出牌。",
	  "xajh_yuelingsan":"岳灵珊",
            "xajh_chongling":"冲灵",
            "xajh_chongling_info":"",
            "xajh_chonglingzhuanbei":"冲灵装备",
            "xajh_chonglingzhuanbei_info":"",
            "xajh_jianwu":"剑舞",
            "xajh_jianwu_info":"限定技。出牌阶段，你可以与一名男性角色形成“冲灵”状态，你与该角色视为拥有对方的武器效果（不含距离）。",
            "xajh_huizhi":"惠质",
            "xajh_huizhi_info":"每当一名角色使用酒后，你可以令其摸2张牌。",
            "xajh_fanghun":"芳魂",
            "xajh_fanghun_info":"每当你受到伤害后，若其此回合未使用过酒，你可以弃置其一张牌，然后其视为使用了一张酒。",
	 "xajh_yanglianting":"杨莲亭",
            "xajh_shichong":"恃宠",
            "xajh_shichong_info":"当你受到伤害后，你可以令攻击范围含有来源的角色选择一项：对来源使用一张杀，或交给你一张牌。",
            "xajh_yuhe":"欲壑",
            "xajh_yuhe_info":"当你获得其他角色的牌时，你可以摸1张牌。",
	 "xajh_renwoxing":"任我行",
            "xajh_biguan":"闭关",
            "xajh_biguan_info":"结束阶段开始时，若你已受伤，你可以弃置一张牌，直到你的下个回合开始，其他角色计算与你的距离+1。",
            "xajh_xixing":"吸星",
            "xajh_xixing_info":"锁定技。你每杀死一名角色，你加一点内力上限并回复一点内力。",
            "xajh_chushan":"出山",
            "xajh_chushan_info":"限定技。出牌阶段，你减一点内力上限，失去“闭关”，然后获得一名已死亡的角色一项除盟主技、限定技、觉醒技外的技能。",
            "xajh_quanbing":"权柄",
            "xajh_quanbing_info":"盟主技。其他蜀势力角色杀死一名角色时，其可以弃置所有手牌，然后视为由你杀死该角色。",
	 "xajh_ludayou":"陆大有",
	  "xajh_digong":"弟恭",
            "xajh_digong_info":"其他角色的出牌阶段开始时，若其体力上限大于你，你可以令其此阶段内使用杀的额定次数+1。",
            "xajh_nianjue":"念诀",
            "xajh_nianjue_info":"一名已受伤的角色准备阶段开始，你可以令其进行判定，判定结果为：红桃，该角色回复1点体力；梅花，该角色获得此牌。",
           "xajh_dongfangbubai":"东方不败",
	  "xajh_weizhong":"伪忠",
            "xajh_weizhong_info":"其他角色获得你的牌后，若其手牌数大于其体力值，则你可以令其失去一点体力。",
            "xajh_daoxi":"蹈隙",
            "xajh_daoxi_info":"每回合限一次，其他角色使用基本牌或普通锦囊牌时，若其手牌数比你多，你可以交给其一张手牌，然后你代替其使用此牌。",
            },
};

if(lib.device||lib.node){
				for(var i in xajh.character){xajh.character[i][4].push('ext:金庸群侠传/'+i+'.jpg');}
			}else{
				for(var i in xajh.character){xajh.character[i][4].push('db:extension-金庸群侠传:'+i+'.jpg');}
			}
			return xajh;
		});
		lib.config.all.characters.push('xajh');
		if(!lib.config.characters.contains('xajh')) lib.config.characters.remove('xajh');
		lib.translate['xajh_character_config']='笑傲江湖';
		
		game.import('character',function(){
			var qtpz={
				name:'qtpz',
				connect:true,
				character:{
		 		"qtpz_aqing":["female","shu",3,["qtpz_libing","qtpz_shujia"],[]],
				"qtpz_haidafu":["male","shu",3,["qtpz_shidu","qtpz_fenji","qtpz_huashi"],[]],
				 "qtpz_xuedaolaozhu":["male","qun",4,["qtpz_handao","qtpz_hanzhan","qtpz_shuixiang"],[]],
				 "qtpz_wuzixu":["male","qun",3,["qtpz_zhucheng","qtpz_xuezhuang"],[]],
				 "qtpz_aobai":["male","shu",4,["qtpz_shezheng","qtpz_yingshi"],[]],
				 "qtpz_zhuyoujian":["male","wu",4,["qtpz_zuiji","qtpz_youqin","qtpz_gangbi"],['zhu']],
				  "qtpz_chenglingsu":["female","shu",4,["qtpz_zhidu","qtpz_xianghun"],[]],
				   "qtpz_miaorenfeng":["male","shu",4,["qtpz_fengpo","qtpz_yujie"],[]],
				   "qtpz_liyan":["male","qun",3,["qtpz_quanzhen","qtpz_honglve"],[]],
				   "qtpz_yuyutong":["male","shu",4,["qtpz_gaifu","qtpz_wuxian"],[]],
				   "qtpz_ajiu":["female","wu",3,["qtpz_guoshang","qtpz_fuchao"],[]],
				   "qtpz_chengbenzhi":["male","wu",4,["qtpz_yuanbian","qtpz_tongzui"],[]],
				   "qtpz_huatiegan":["male","wei",4,["qtpz_jiaoxie","qtpz_ruxue","qtpz_guming"],[]],
				   "qtpz_kasili":["female","qun",3,["qtpz_daogao","qtpz_shenyu"],[]],
				   "qtpz_tianguinong":["male","shu",3,["qtpz_tudu","qtpz_xingxun","qtpz_xuncai"],[]],
				   "qtpz_xieyanke":["male","wei",3,["qtpz_tieling","qtpz_sunuo","qtpz_jieyou"],[]],
				   "qtpz_yuanchengzhi":["male","wu",4,["qtpz_dangkou","qtpz_jiangmen","qtpz_pozhen"],['zhu']],
				   "qtpz_weixiaobao":["male","shu",4,["qtpz_yabao","qtpz_qiaoshe"],['zhu']],
				   "qtpz_weihutou":["male","wei",3,["qtpz_mengtong","qtpz_fuyin"],[]],
},        

characterIntro:{
	            "qtpz_liyan": "李岩是李自成起义军的重要将领。原名李信，河南开封府杞县人，天启丁卯年举人，文武双全。其父李精白在魏忠贤逆案中被处罚。李岩生性慷慨豪爽，常常周济穷人，曾作了一首《劝赈歌》，望权贵救援水深火热中的黎民百姓。他在李自成起义中立下汗马功劳，忠心耿耿的他却被牛金星进谗惨被冤杀。【CV：稳得高处】",
				"qtpz_aobai":"《鹿鼎记》中的反派。鳌拜为清初权臣，出身瓜尔佳氏，后金开国五大臣之一费英东之侄，清朝三代元勋，康熙帝早年辅政大臣之一。以战功封公爵。前半生军功赫赫，号称满洲第一勇士，晚年则操握权柄、结党营私。小说《鹿鼎记》中，康熙在韦小宝等大臣的支持下和谋划下，在武英殿擒拿鳌拜。【CV：蚩宇】",	
				"qtpz_aqing":"《越女剑》女主角。阿青是越国一名牧羊女，虽然弱质纤纤，却是金庸小说中武功和实战能力最强的人物之一。她从小与一只会使棒的白猿习武，悟得高超的剑法。范蠡在街上遇见她一人挫败八名吴国剑士，请她去训练越国战士，最后得到三千越甲可吞吴的成就。她爱上范蠡，却在容颜上输给了西施，黯然离去。【CV：珂里】",
				"qtpz_haidafu":"《鹿鼎记》中最早出场的反派。海大富是一名弓腰陀背、病体沉疴但老谋深算的老太监，充满灰暗的霉味，代表皇室中不可告人的丑恶。因练功急于求成而需每日服用毒药续命。善使能瞬间将尸体变成一滩血水的化尸粉。受顺治密令在宫中查找害死董鄂妃的凶手，夜访慈宁宫与冒牌太后当面对峙，出言激烈迫使她露出真面目。【CV：觅阳】",
				"qtpz_zhuyoujian":"出场于《碧血剑》。朱由检是明朝的末代皇帝，虽然在位时勤于政务，但其刚愎自用，生性多疑，不能知人善任，屡屡革杀文臣武将，加上明末动荡的时代背景，亡国已是历史潮流。在位时曾六次发布罪己诏，深刻剖析自己的过失，于煤山自尽前亦写下自诏，要求闯军善待百姓。【CV：觅阳】",
				"qtpz_wuzixu":"《越女剑》中出场。伍子胥本是春秋时期楚国人，因其家人受到谗臣陷害被楚平王杀害，悲愤之下投奔吴国，他在吴中之地相土尝水，象天法地，在太湖东岸的丘陵和平原之间建造了姑苏城。公元前五百零六年，他协同孙武带兵攻入楚都，伍子胥掘开楚平王陵墓，鞭尸三百，以报父兄之仇。【CV：觅阳】",
				"qtpz_xuedaolaozhu":"《连城诀》中的第一反派。青海黑教血刀门第四代掌门人，武林第一邪派高手，门下都作和尚打扮却个个都是十恶不赦的淫僧。擅使用血刀经武功，刀法强悍。他强掳了水岱之女水笙，南四奇一路追杀他到藏边雪谷，与其进行了一场鏖战。其中三位先后战死，血刀老祖便将苟且便生的花铁干说降，令其弃械。【CV：蚩宇】",				
				"qtpz_yuyutong":"红花会十四当家，擅长吹笛，曾考上秀才而被称作金笛秀才。余鱼同英俊潇洒却偏偏痴恋人妻文四嫂而不可自拔，曾几度陷在这不伦之恋中痛不欲生。后来在官家子女李沅芷的死缠烂打下，逐渐解开心结，最终移情于李沅芷。曾为了四嫂骆冰深入龙潭虎穴解救文泰来，宁可自己身陷囹圄；更甘做人肉炸弹解救红花会众兄弟，自己却被炸毁容。【CV：神齐大叔】",
				"qtpz_miaorenfeng":"苗人凤是李自成手下苗防卫的后人，为人顶天立地、不苟言笑，苗家剑法炉火纯青，武功极高，号称打遍天下无敌手，人称金面佛。因受到田归农的挑拨与胡一刀决斗，在田归农的诡计下不慎杀死胡一刀，因而一生郁结难抒。最后终与胡斐化解了胡苗两家的恩怨。【CV：青灯折扇不语】",
				"qtpz_chenglingsu":"程灵素是药王谷无嗔大师的关闭弟子，继承了毒手药王的遗作《药王神篇》，成功培育剧毒七心海棠，下毒功夫和解毒功夫都出神入化。她机智聪敏，料事如神。结识胡斐后，她暗恋胡斐，最后为救胡斐牺牲自己替他啜毒而死。临死前仍精心设计用七心海棠蜡烛杀死师门败类石万嗔等人。【CV：辣鸭】",
				"qtpz_chengbenzhi":"程本直是青竹帮帮主程青竹之兄，布衣出身，因敬重袁崇焕，三次拜谒却不得，便投入袁督师部下，出力办事，终于得蒙督师见重，收为门生。后袁崇焕蒙蒙冤下狱，又遭凌迟毒刑。程本直不顾一切上书为袁公辩冤，只因言辞切直，被崇祯皇帝一同处死，死前要求葬于袁公墓旁，题铭：两条泼胆汉，一对痴心人。【CV：】",
				"qtpz_huatiegan":"花铁干在南四奇“落花流水”中排行第二，本是屡行善举的侠士，在南四奇一路追杀血刀老祖到藏边雪谷的过程中，意志逐渐瓦解，内心的丑恶也逐渐暴露。为求自保他弃械投降，并为了在恶劣的雪谷中生存下去，以结义兄弟的尸体为食。回到中原后沽名钓誉，谎骗江湖人士自己诛杀了血刀门的恶贼并被推举为盟主。【CV：】",
				"qtpz_xieyanke":"谢烟客隐居于摩天崖上，人称“摩天居士”。他曾经发布三枚玄铁令给有恩于自己的三个朋友，承诺他们可以此信物要求他做任何事情。前两枚均已使用，第三枚在巧合之下落到了小乞丐石破天的手中，为避免玄铁令落入坏人之手，他软磨硬泡逼石破天求他，无奈石破天性格高傲，令谢烟客煞为头疼。【CV：】",
			    "qtpz_weixiaobao":"随母韦春花在扬州青楼丽春院长大，其生性嗜赌，油腔滑调。一次偶然事件，被江洋大盗茅十八带到北京，偶入皇宫，凭借三寸不烂之舌，屡次化险为夷，并在尔虞我诈的皇宫里平步青云，结识康熙帝，擒杀鳌拜，入天地会，奉命在五台山出家，平神龙岛，帮助索菲亚公主夺权，取得七位娇妻。【CV：神齐大叔】",
				"qtpz_ajiu":"阿九本是崇祯次女，封号长平公平，是青竹帮程青竹之徒，武艺高强。大明将亡之际，结识了帮助李自成起义的袁承志，恩怨情仇纵横交织，只恨自己不是平民儿女。大明将覆，国之将亡，崇祯逃亡之际，为使阿九免受义军凌辱，挥剑将她斩下一臂。后来削发为尼，法号九难，曾收陈圆圆之女阿珂、韦小宝为徒。【CV：水烟箩卜】",
				"qtpz_tianguinong":"田归农是李自成手下田姓护卫的后人，为关外天龙门北宗掌门。小有名气但没什么作为，为人阴险毒辣，为得到闯王宝藏的藏宝图，使用离间计令胡苗两家反目成仇并害死胡一刀。后又不折手段多次设计毒害苗人凤，对其严刑拷打。终被苗人凤废去一身武功后自尽。【CV：洛】",
				"qtpz_yuanchengzhi":"《碧血剑》男主角。明末蓟辽督师袁崇焕的遗孤，因崇祯听信谗错杀忠义先父而组建山宗，响应李自成起义。作为金蛇郎君夏雪宜传人，曾用《金蛇秘笈》中的功夫破解温家五老的五行阵。后为闯王立下大功，却不忍见越来越昏庸的闯王成为第二个崇祯，不愿与其同流合污，携众多部下远赴浡泥国海岛，赶走红毛賊后定居于此。【CV：稳得高处】",
				"qtpz_kasili":"《书剑恩仇录》中陈家洛的意中人。喀丝丽是新疆回部首领木卓伦的次女，红花会总舵主陈家洛的恋人，为回部公主。她是金庸笔下的第一美女，全身白衣如雪，宛若仙子下凡，令人不敢亵渎。天真烂漫，善良仁爱，纯洁无暇，是回民心中神圣的女神。她最大愿望是世间没有战火，族人永享太平，为了族人可以牺牲自己的幸福。【CV：桃子玥】",
				},   
				
				characterTitle:{
					"qtpz_xieyanke":"落影丶逝尘",
					"qtpz_weihutou":"落影丶逝尘",
					"qtpz_weixiaobao":"落影丶逝尘",
					"qtpz_yuanchengzhi":"落影丶逝尘",
					"qtpz_tianguinong":"落影丶逝尘",
					"qtpz_aqing":"朱阳光",
					"qtpz_kasili":"落影丶逝尘",
					"qtpz_huatiegan":"落影丶逝尘",
					"qtpz_yuyutong":"落影丶逝尘",
					"qtpz_ajiu":"落影丶逝尘",
					"qtpz_chengbenzhi":"落影丶逝尘",
					"qtpz_chenglingsu":"落影丶逝尘",
					"qtpz_liyan":"落影丶逝尘",
					"qtpz_miaorenfeng":"落影丶逝尘",
					"qtpz_haidafu":"落影丶逝尘",
					"qtpz_zhuyoujian":"落影丶逝尘",
					"qtpz_aobai":"落影丶逝尘",
					"qtpz_wuzixu":"落影丶逝尘",
					"qtpz_xuedaolaozhu":"落影丶逝尘",
				},
				
				perfectPair:{
			//"jyqxz_qtpz_genie":['jyqxz_qtpz_weizhuang'],
					},
                               
skill:{
	 "qtpz_fuyin":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"phaseDrawBefore",
                },
                check:function (event,player){
       if(event.num>3) return false;
        return true;
    },
                content:function (){
        "step 0"
        trigger.cancel();
        "step 1"
        var str='请声明大或小';
        var controls=['大','小'];
        player.chooseControl(controls,ui.create.dialog(str,'hidden')).ai=function(){
            return Math.floor(Math.random()*controls.length);
        };
        "step 2"
        if(result.control!='大'){
            event.controlxiao=true;
            game.log(player,'声明了小');
            player.popup(result.control);
        }
        else{
            event.controlda=true;
            game.log(player,'声明了大');
            player.popup(result.control);
        }
        "step 3"
        event.cardss=get.cards(7);
        event.cards=event.cardss.slice(0);
        event.cardsss=event.cardss.slice(0);
        "step 4"
        player.showCards(event.cards);
        "step 5"
         event.num7=false;
         event.dayu7=[];
         event.xiaoyu7=[];
         event.show=event.cardss.slice(0);
         for(var e=0;e<event.cards.length;e++){
             if(event.cards[e].number==7){
                 if(event.num7==false) event.num7=true;
             }
             else if(event.cards[e].number>7){
                 event.dayu7.push(event.cards[e]);
             }
             else if(event.cards[e].number<7){
                 event.xiaoyu7.push(event.cards[e]);
             }
        }
        "step 6"
        event.dialog=ui.create.dialog('hidden');
        event.dialog.add('父荫:展示的牌');
        event.dialog.add(event.show);
        if(event.num7==true){
            event.dialog.add('因"父荫"展示的牌有点数为7能获得的牌');
            event.dialog.add(event.cardsss);
        }
        else if(event.controlda==true&&event.dayu7.length>0){
            event.dialog.add('父荫:因声明大能获得的牌');
            event.dialog.add(event.dayu7);
            if(event.xiaoyu7.length>0){
                event.dialog.add('父荫:置回牌堆顶的牌');      
                event.dialog.add(event.xiaoyu7);                 
            }     
        }
        else if(event.controlxiao==true&&event.xiaoyu7.length>0){
            event.dialog.add('父荫:因声明小能获得的牌');
            event.dialog.add(event.xiaoyu7);     
            if(event.dayu7.length>0){
                event.dialog.add('父荫:置回牌堆顶的牌');        
                event.dialog.add(event.dayu7);       
            }
        }
        else {
            var skr;
            if(event.controlxiao==true) skr='父荫:因声明小没有符合的牌而置回牌堆顶的牌';
            if(event.controlda==true) skr='父荫:因声明大没有符合的牌而置回牌堆顶的牌';
            event.dialog.add(skr);
            event.dialog.add(event.cardsss);
        }
        var dialogs=event.dialog;
        player.chooseControl('ok').set('dialog',dialogs);
        "step 7"
        if(event.num7==true){
            player.gain(event.cards,'gain2');
        }
        else if(event.controlda==true&&event.dayu7.length>0){
            player.gain(event.dayu7,'gain2');
            if(event.xiaoyu7.length>0){
                for(var i=event.cards.length-1;i>=0;i--){
                    if(event.xiaoyu7.contains(event.cards[i])){
                        ui.cardPile.insertBefore(event.cards[i],ui.cardPile.firstChild);
                    }
                }
                game.log(player,'将',event.xiaoyu7,'置回了牌堆顶');
            }     
        }
        else if(event.controlxiao==true&&event.xiaoyu7.length>0){
            player.gain(event.xiaoyu7,'gain2');
            if(event.dayu7.length>0){
                for(var i=event.cards.length-1;i>=0;i--){
                    if(event.dayu7.contains(event.cards[i])){
                        ui.cardPile.insertBefore(event.cards[i],ui.cardPile.firstChild);
                    }
                } 
                game.log(player,'将',event.dayu7,'置回了牌堆顶');
            }     
        }
        else{
            for(var i=event.cards.length-1;i>=0;i--){
                ui.cardPile.insertBefore(event.cards[i],ui.cardPile.firstChild);
            }
            game.log(player,'将',event.cards,'置回了牌堆顶');
        }
    },
            },
            "qtpz_mengtong":{
                group:"qtpz_mengtong_after",
                subSkill:{
                    off:{
                        mark:true,
                        intro:{
                            content:"本轮已发动",
                        },
                        sub:true,
                    },
                    after:{
                        trigger:{
                            global:"judgeAfter",
                        },
                        forced:true,
                        silent:true,
                        popup:false,
                        filter:function (event,player){
                return player.storage.qtpz_mengtong;
            },
                        content:function (){
               //game.log(player,'还原了',player.storage.qtpz_mengtong); 
               delete player.storage.qtpz_mengtong.蒙童;
               delete player.storage.qtpz_mengtong;      
            },
                        sub:true,
                    },
                    "heart2":{
                        mod:{
                            suit:function (card,suit){
                    if(card.qtpz_mengtong==true&&suit!='heart') return 'heart';
                },
                        },
                        sub:true,
                    },
                    "diamond2":{
                        mod:{
                            suit:function (card,suit){
                    if(card.qtpz_mengtong==true&&suit!='diamond') return 'diamond';
                },
                        },
                        sub:true,
                    },
                    "club2":{
                        mod:{
                            suit:function (card,suit){
                    if(card.qtpz_mengtong==true&&suit!='club') return 'club';
                },
                        },
                        sub:true,
                    },
                    "spade2":{
                        mod:{
                            suit:function (card,suit){
                    if(card.qtpz_mengtong==true&&suit!='spade') return 'spade';
                },
                        },
                        sub:true,
                    },
                },
                trigger:{
                    global:"judge",
                },
				audio:"ext:金庸群侠传:2",
                filter:function (event,player){
        if(player.hasSkill('qtpz_mengtong_off')) return false; 
        return true;
    },
                direct:true,
                content:function (){
        "step 0"
        var str=get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
        get.translation(trigger.player.judging[0])+'，'+get.prompt('qtpz_mengtong');
        player.chooseControl('heart2','diamond2','club2','spade2','取消').set('prompt',str).set('ai',function(){
            //return '取消';
            var judging=_status.event.judging;
            var cardh={name:judging.name,suit:"heart",number:judging.number};
            var cardd={name:judging.name,suit:"diamond",number:judging.number};
            var cardc={name:judging.name,suit:"club",number:judging.number};
            var cards={name:judging.name,suit:"spade",number:judging.number};
            var resulth=trigger.judge(cardh)-trigger.judge(judging);
            var resultd=trigger.judge(cardd)-trigger.judge(judging);
            var resultc=trigger.judge(cardc)-trigger.judge(judging);
            var results=trigger.judge(cards)-trigger.judge(judging);
            var attitude=get.attitude(player,trigger.player);
            if(attitude==0||(resulth==0&&resultd==0&&resultc==0&&results==0)) return '取消';
            if(attitude>0){
                 if(resulth>0){
                     if(resulth>=resultd&&resulth>=resultc&&resulth>=results) return 'heart2';
                 }
                 else if(resultd>0){
                     if(resultd>=resulth&&resultd>=resultc&&resultd>=results) return 'diamond2';    
                 }
                 else if(resultc>0){
                     if(resultc>=resulth&&resultc>=resultd&&resultc>=results) return 'club2';    
                 }
                 else if(results>0){
                     if(results>=resulth&&results>=resultd&&results>=resultc) return 'spade2';    
                 }
                 else return '取消';
            }
            if(attitude<0){
                 if(resulth<0){
                     if(resulth<=resultd&&resulth<=resultc&&resulth<=results) return 'heart2';
                 }
                 else if(resultd<0){
                     if(resultd<=resulth&&resultd<=resultc&&resultd<=results) return 'diamond2';    
                 }
                 else if(resultc<0){
                     if(resultc<=resulth&&resultc<=resultd&&resultc<=results) return 'club2';    
                 }
                 else if(results<0){
                     if(results<=resulth&&results<=resultd&&results<=resultc) return 'spade2';    
                 }
                 else return '取消';
            }
        }).set('judging',trigger.player.judging[0]);
        "step 1"
        if(result.control&&result.control!='取消'){
            if(player.storage.qtpz_mengtong){
                delete player.storage.qtpz_mengtong.蒙童;
                delete player.storage.qtpz_mengtong;         
            }
            if(trigger.player.hasSkill('qtpz_mengtong_heart2')) trigger.player.removeSkill('qtpz_mengtong_heart2');
            if(trigger.player.hasSkill('qtpz_mengtong_diamond2')) trigger.player.removeSkill('qtpz_mengtong_diamond2');
            if(trigger.player.hasSkill('qtpz_mengtong_club2')) trigger.player.removeSkill('qtpz_mengtong_club2');
            if(trigger.player.hasSkill('qtpz_mengtong_spade2')) trigger.player.removeSkill('qtpz_mengtong_spade2');
            trigger.player.judging[0].qtpz_mengtong=true;
            player.logSkill('qtpz_mengtong',trigger.player);
            player.line(trigger.player);
            player.popup(result.control);
            game.log(player,'将判定结果改为了','#y'+result.control);
            if(!trigger.player.hasSkill('qtpz_mengtong_'+result.control)) trigger.player.addTempSkill('qtpz_mengtong_'+result.control,'judgeAfter');
            player.storage.qtpz_mengtong=trigger.player.judging[0];
            if(!player.hasSkill('qtpz_mengtong_off')){
                player.addTempSkill('qtpz_mengtong_off','roundStart');
            }
        }
        else{
            event.finish();
        }
    },
                ai:{
                    tag:{
                        rejudge:1,
                    },
                },
            },
            /*"测试蒙童":{
                group:"蒙童_after",
                subSkill:{
                    off:{
                        mark:true,
                        intro:{
                            content:"本轮已发动",
                        },
                        sub:true,
                    },
                    after:{
                        trigger:{
                            global:"judgeAfter",
                        },
                        forced:true,
                        silent:true,
                        popup:false,
                        filter:function (event,player){
                return player.storage.蒙童;
            },
                        content:function (){
              // game.log(player,'还原了',player.storage.蒙童); 
               delete player.storage.蒙童.蒙童;
               delete player.storage.蒙童;      
            },
                        sub:true,
                    },
                    "heart2":{
                        mod:{
                            suit:function (card,suit){
                    if(card.蒙童==true&&suit!='heart') return 'heart';
                },
                        },
                        sub:true,
                    },
                    "diamond2":{
                        mod:{
                            suit:function (card,suit){
                    if(card.蒙童==true&&suit!='diamond') return 'diamond';
                },
                        },
                        sub:true,
                    },
                    "club2":{
                        mod:{
                            suit:function (card,suit){
                    if(card.蒙童==true&&suit!='club') return 'club';
                },
                        },
                        sub:true,
                    },
                    "spade2":{
                        mod:{
                            suit:function (card,suit){
                    if(card.蒙童==true&&suit!='spade') return 'spade';
                },
                        },
                        sub:true,
                    },
                },
                trigger:{
                    global:"judge",
                },
                filter:function (event,player){
      //  if(player.hasSkill('蒙童_off')) return false; 
        return true;
    },
                direct:true,
                content:function (){
        "step 0"
        var str=get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
        get.translation(trigger.player.judging[0])+'，'+get.prompt('蒙童');
        player.chooseControl('heart2','diamond2','club2','spade2','取消').set('prompt',str).set('ai',function(){
            //return '取消';
            var judging=_status.event.judging;
            var cardh={name:judging.name,suit:"heart",number:judging.number};
            var cardd={name:judging.name,suit:"diamond",number:judging.number};
            var cardc={name:judging.name,suit:"club",number:judging.number};
            var cards={name:judging.name,suit:"spade",number:judging.number};
            var resulth=trigger.judge(cardh)-trigger.judge(judging);
            var resultd=trigger.judge(cardd)-trigger.judge(judging);
            var resultc=trigger.judge(cardc)-trigger.judge(judging);
            var results=trigger.judge(cards)-trigger.judge(judging);
            var attitude=get.attitude(player,trigger.player);
            if(attitude==0||(resulth==0&&resultd==0&&resultc==0&&results==0)) return '取消';
            if(attitude>0){
                 if(resulth>0){
                     if(resulth>=resultd&&resulth>=resultc&&resulth>=results) return 'heart2';
                 }
                 else if(resultd>0){
                     if(resultd>=resulth&&resultd>=resultc&&resultd>=results) return 'diamond2';    
                 }
                 else if(resultc>0){
                     if(resultc>=resulth&&resultc>=resultd&&resultc>=results) return 'club2';    
                 }
                 else if(results>0){
                     if(results>=resulth&&results>=resultd&&results>=resultc) return 'spade2';    
                 }
                 else return '取消';
            }
            if(attitude<0){
                 if(resulth<0){
                     if(resulth<=resultd&&resulth<=resultc&&resulth<=results) return 'heart2';
                 }
                 else if(resultd<0){
                     if(resultd<=resulth&&resultd<=resultc&&resultd<=results) return 'diamond2';    
                 }
                 else if(resultc<0){
                     if(resultc<=resulth&&resultc<=resultd&&resultc<=results) return 'club2';    
                 }
                 else if(results<0){
                     if(results<=resulth&&results<=resultd&&results<=resultc) return 'spade2';    
                 }
                 else return '取消';
            }
        }).set('judging',trigger.player.judging[0]);
        "step 1"
        if(result.control&&result.control!='取消'){
            if(player.storage.蒙童){
                delete player.storage.蒙童.蒙童;
                delete player.storage.蒙童;         
            }
            if(trigger.player.hasSkill('蒙童_heart2')) trigger.player.removeSkill('蒙童_heart2');
            if(trigger.player.hasSkill('蒙童_diamond2')) trigger.player.removeSkill('蒙童_diamond2');
            if(trigger.player.hasSkill('蒙童_club2')) trigger.player.removeSkill('蒙童_club2');
            if(trigger.player.hasSkill('蒙童_spade2')) trigger.player.removeSkill('蒙童_spade2');
            trigger.player.judging[0].蒙童=true;
            player.logSkill('蒙童',trigger.player);
            player.line(trigger.player);
            player.popup(result.control);
            game.log(player,'将判定结果改为了','#y'+result.control);
            if(!trigger.player.hasSkill('蒙童_'+result.control)) trigger.player.addTempSkill('蒙童_'+result.control,'judgeAfter');
            player.storage.蒙童=trigger.player.judging[0];
            if(!player.hasSkill('蒙童_off')){
                player.addTempSkill('蒙童_off','roundStart');
            }
        }
        else{
            event.finish();
        }
    },
                ai:{
                    tag:{
                        rejudge:1,
                    },
                },
            },*/
	"qtpz_yabao":{
		audio:"ext:金庸群侠传:2",
                enable:"phaseUse",
                usable:1,
                check:function (card){
        return 8-get.value(card);
    },
                filter:function (event,player){
        return player.countCards('h',{number:[5,6,7,8,9]})>0;
    },
                filterTarget:function (card,player,target){
        return target.countCards('h')>0&&target!=player;
    },
                filterCard:function (card,player,target){
        return card.number>=5&&card.number<=9;
    },
                selectCard:1,
                selectTarget:[1,4],
                multitarget:true,
                discard:false,
                lose:false,
                content:function (){
        "step 0"
        event.plcard=cards.slice(0);
      //  game.log(event.plcard[0].number);
        event.allnumber=[];
        event.tar=targets;
        event.da=[];
        event.xiao=[];
        event.num1=0;
        event.show=[];
        "step 1"
        if(event.num1<event.tar.length){
            event.tar[event.num1].chooseCard('h',1,'押宝：选择一张手牌当"押宝"牌',true).set('ai',function(card){
                return -get.value(card);
            });
        }
        "step 2"
        if(result.bool){
            var care=result.cards.slice(0);
           // event.tar[event.num1].showCards(result.cards[0]);
            event.show.push(care);
          //  game.log(care[0].number);
            if(!event.allnumber.contains(care[0].number)){
                event.allnumber.push(care[0].number);
            } 
            if(event.plcard[0].number<care[0].number){
                event.da.push(care);
            }
            if(event.plcard[0].number>care[0].number){
                event.xiao.push(care);
            }
            event.num1++;
            if(event.num1<event.tar.length) event.goto(1);
        }
        "step 3"
        player.chooseControl('大','小',function(event,player){
            if(event.number>=7) return '小';
            if(event.number<7) return '大';
            return '小';
        });
        "step 4"
        if(result.control!='大'){
            event.controlxiao=true;
            game.log(player,'声明了小');
        }
        else{
            event.controlda=true;
            game.log(player,'声明了大');
        }
        "step 5"
        player.showCards(event.plcard);
        for(var i=0;i<event.tar.length;i++){
            event.tar[i].showCards(event.show[i]);
        }
        "step 6"
        event.dialog=ui.create.dialog('hidden');
        event.dialog.add(get.translation(player)+'的"押宝"牌');
        event.dialog.add(event.plcard);
        event.dialog.add('押宝:其他角色的"押宝"牌');
        for(var i=0;i<event.tar.length;i++){
            event.dialog.add(get.translation(event.tar[i])+'的"押宝"的牌');
            event.dialog.add(event.show[i]);
        }
        if(event.allnumber.contains(event.plcard[0].number)){
            event.dialog.add('因有其他角色"押宝"牌点数等于你的"押宝"牌'+get.translation(event.plcard[0])+'点数能获得的"押宝"牌');
            for(var i=0;i<event.tar.length;i++){
                event.dialog.add(event.show[i]);
            }
        }
        else if(event.controlda==true&&event.da.length>0){
            event.dialog.add('你的"押宝"牌'+get.translation(event.plcard[0])+'因押大能获得的"押宝"牌');
            for(var i=0;i<event.tar.length;i++){
                if(event.da.contains(event.show[i])){
                    event.dialog.add(event.show[i]);
                }
            }     
        }
        else if(event.controlxiao==true&&event.xiao.length>0){
            event.dialog.add('你的"押宝"牌'+get.translation(event.plcard[0])+'因押小能获得的"押宝"牌');
            for(var i=0;i<event.tar.length;i++){
                if(event.xiao.contains(event.show[i])){
                    event.dialog.add(event.show[i]);
                }
            }     
        }
        var dialogs=event.dialog;
        player.chooseControl('ok').set('dialog',dialogs);
        "step 7"
        if(event.allnumber.contains(event.plcard[0].number)){
            for(var i=0;i<event.tar.length;i++){
                player.gain(event.show[i],event.tar[i]);
                event.tar[i].$give(event.show[i],player);
            }
        }
        else if(event.controlda==true&&event.da.length>0){
            for(var i=0;i<event.tar.length;i++){
                if(event.da.contains(event.show[i])){
                    player.gain(event.show[i],event.tar[i]);
                    event.tar[i].$give(event.show[i],player);
                }
            }     
        }
        else if(event.controlxiao==true&&event.xiao.length>0){
            for(var i=0;i<event.tar.length;i++){
                if(event.xiao.contains(event.show[i])){
                    player.gain(event.show[i],event.tar[i]);
                    event.tar[i].$give(event.show[i],player);
                }
            }         
        }
    },
                ai:{
                    order:9,
                    result:{
                        player:1,
                        target:-0.5,
                    },
                },
            },
            "qtpz_qiaoshe1":{
                subSkill:{
                    off:{
                        sub:true,
                    },
                },
                trigger:{
                    global:"dying",
                },
                check:function (event,player){
        var att=get.attitude(player,event.player);
        if(att>0) return true;
        return false;
    },
                filter:function (event,player){
        if(player.hasSkill('qtpz_qiaoshe1_off')) return false;
        if(!event.player.hasZhuSkill('qtpz_qiaoshe')) return false;
        if(player.group!='wei') return false;
        if(event.player==player) return false;
        return true;
    },
                content:function (){
        'step 0'
		game.playJY(['qtpz_qiaoshe1','qtpz_qiaoshe2'].randomGet());
        player.addTempSkill('qtpz_qiaoshe1_off','dyingAfter');
        event.cards=get.cards(7);
        player.showCards(event.cards,'巧舌');
        'step 1'
        var skr='是否使用其中一张【酒】或【桃】';
        trigger.player.chooseCardButton(event.cards,1,skr).set('filterButton',function(button){
            var cards=button.link;
            return (cards.name=='jiu'||cards.name=='tao')&&trigger.player.canUse(cards,trigger.player);
        }).set('ai',function(button){
            return 1;
        });
        'step 2'
          if(result.bool){
              trigger.player.useCard(result.links[0],trigger.player);
              for(var i=event.cards.length-1;i>=0;i--){
                  if(result.links[0]!=event.cards[i]){
                      ui.cardPile.insertBefore(event.cards[i],ui.cardPile.firstChild);
                  }
              }
          }
          else{
              for(var i=event.cards.length-1;i>=0;i--){
                  ui.cardPile.insertBefore(event.cards[i],ui.cardPile.firstChild);
              }
          }   
    },
            },
            "qtpz_qiaoshe":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"gameStart",
                    player:"enterGame",
                },
                zhuSkill:true,
                popup:false,
                forced:true,
                unique:true,
                filter:function (event,player){
        return player.identity!='zhu';
    },
                content:function (){
        player.removeSkill('qtpz_qiaoshe');
    },
                global:"qtpz_qiaoshe1",
            },
	/*"破阵":{
                trigger:{
                    source:"damageEnd",
                },
                check:function (event,player){
        return get.attitude(player,event.player)<=0;
    },
                filter:function (event){
        return event.card&&event.card.name=='sha'&&event.player.getEquip(2)!=undefined;
    },
                content:function (){
        var cardss=trigger.player.getEquip(2);
        trigger.player.discard(cardss);
    },
                ai:{
                    unequip:true,
                    skillTagFilter:function (player,tag,arg){
            if(arg&&arg.name=='sha') return true;
            return false;
        },
                },
            },*/
            "qtpz_dangkou":{
                group:["qtpz_dangkou_use","qtpz_dangkou_damage"],
                subSkill:{
                    off:{
                        sub:true,
                    },
                    use:{
                        trigger:{
                            player:"useCard",
                        },
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                if(event.card.name=='wuxie') return false;
                if(player.hasSkill('qtpz_dangkou_off')) return false;
                return get.type(event.card)=='trick';
            },
                        content:function (){
                trigger.candiscard=true;
            },
                        sub:true,
                    },
                    damage:{
                        trigger:{
                            global:"damageEnd",
                        },
                        filter:function (event,player){
                if(player.hasSkill('qtpz_dangkou_off')) return false;
                return event.getParent(2).candiscard==true;
            },
                        forced:true,
                        popup:false,
                        content:function (){
                trigger.getParent(2).candiscard=false;
            },
                        sub:true,
                    },
                },
                trigger:{
                    player:"useCardAfter",
                },
				audio:"ext:金庸群侠传:2",
                filter:function (event,player){
        if(event.card.name=='wuxie') return false;
        if(player.hasSkill('qtpz_dangkou_off')) return false;
        return event.candiscard==true;
    },
                direct:true,
                content:function (){
        "step 0"
        player.chooseTarget([1,2],get.prompt('qtpz_dangkou'),function(card,player,target){
            return target.countCards('h')&&trigger.targets.contains(target);
        }).set('ai',function(target){
            return -get.attitude(_status.event.player,target);
        });
        "step 1"
        if(result.bool){
            player.logSkill('qtpz_dangkou',result.targets);
            event.targets=result.targets
            player.addTempSkill('qtpz_dangkou_off');
            if(result.targets.length==1){
                player.discardPlayerCard(event.targets[0],'h',true);
            }
            else{
                player.discardPlayerCard(event.targets[0],'h',true);
                player.discardPlayerCard(event.targets[1],'h',true);
            }
        }
        else{
            event.finish();
        }
   
    },
            },
            "qtpz_jiangmen":{
                group:["qtpz_jiangmen_remove"],
                subSkill:{
                    remove:{
                        trigger:{
                            global:"gameStart",
                            player:"enterGame",
                        },
                        popup:false,
                        forced:true,
                        filter:function (event,player){
                return player.identity!='zhu';
            },
                        content:function (){
				game.playJY(['qtpz_jiangmen1','qtpz_jiangmen2'].randomGet());			
                player.removeSkill('qtpz_jiangmen');
            },
                        sub:true,
                    },
                },
                trigger:{
                    global:"phaseUseBegin",
                },
				audio:"ext:金庸群侠传:2",
                zhuSkill:true,
                filter:function (event,player){
       var num1=event.player.countCards('h',{type:'trick'});
       var num2=event.player.countCards('h',{type:'delay'});
       if(num1+num2==0) return false;
       if(event.player.group!='wu') return false;
       if(event.player==player) return false;
       return true;
    },
                direct:true,
                content:function (){
        "step 0"
        var next=trigger.player.chooseCard(1,'h','是否选择一张锦囊牌交给'+get.translation(player)+'?然后你摸一张牌。',function(card,player){
            return get.type(card)=='trick'||get.type(card)=='delay';
        });
        var att1=get.attitude(trigger.player,player);
        next.ai=function(card){
            if(att1>0){
                return 1;
            }
            return 4-get.value(card);
        };
        "step 1"
        if(result.bool){
            trigger.player.logSkill('qtpz_jiangmen',player);
            trigger.player.line(player,'green');
            player.gain(result.cards[0],trigger.player);
            trigger.player.$give(result.cards.length,player);
            trigger.player.draw();     
        }
    },
            },
            "qtpz_pozhen":{
                init:function (player){
        player.storage.qtpz_pozhen=[];
    },
                trigger:{
                    source:"damageEnd",
                },
				audio:"ext:金庸群侠传:2",
                filter:function (event){
        return event.card&&event.card.name=='sha'&&event.getParent(2).targets.length==1;
    },
                direct:true,
                content:function (){
          'step 0'
          event.pl=player;
          event.tar=trigger.player;
          if(!player.storage.qtpz_pozhen.contains(trigger.player)){
              player.storage.qtpz_pozhen.push(trigger.player);
          }
          'step 1'
          event.tar.chooseTarget(get.prompt('qtpz_pozhen'),function(card,player,target){
            if(event.pl.storage.qtpz_pozhen.contains(target)) return false;
            return lib.filter.targetEnabled2(trigger.card,event.pl,target)&&get.distance(event.pl,target,'attack')<=1;
        }).set('ai',function(target){
              var card=trigger.card;
            return get.effect(target,trigger.card,event.tar,event.tar);
        });
          
          
        'step 2'
        if(result.bool){
            trigger.player.logSkill('qtpz_pozhen',player);
            event.target=result.targets[0];
            trigger.player.line(event.target,'green');
        }
        else{
            player.storage.qtpz_pozhen=[];
            event.finish();
        }
        'step 3'
        if(event.target){
            player.useCard(trigger.card,event.target);
        }
    },
                group:["qtpz_pozhen_miss"],
                subSkill:{
                    miss:{
                        trigger:{
                            player:"shaMiss",
                        },
                        priority:2,
                        filter:function (event,player){
                return player.storage.qtpz_pozhen.length>0;
            },
                        forced:true,
                        popup:false,
                        content:function (){ 
				game.playJY(['qtpz_pozhen1','qtpz_pozhen2'].randomGet());		
                player.storage.qtpz_pozhen=[];
            },
                        sub:true,
                    },
                },
            },
	 "qtpz_tieling":{
                subSkill:{
                    on:{
                        mark:true,
                        marktext:"令",
                        init:function (player){
                player.storage.qtpz_tieling_on=1;
                player.markSkill('qtpz_tieling_on');
                player.syncStorage('qtpz_tieling_on');
            },
                        intro:{
                            content:"玄铁令",
                        },
                        sub:true,
                    },
                },
                init:function (player){
        player.storage.qtpz_tieling=false;
        player.storage.qtpz_tielingnum=0;
    },
                trigger:{
                    global:"phaseUseBegin",
                },
				audio:"ext:金庸群侠传:2",
                filter:function (event,player){
        if(event.player.hasSkill('qtpz_tieling_on')) return false;
        if(player==event.player) return false;
        return !player.storage.qtpz_tieling;
    },
                direct:true,
                content:function (){
         "step 0"
        trigger.player.chooseBool('是否令'+get.translation(player)+'回复一体力或摸两张牌，然后你获得玄铁令').set('ai',function(){                                
            if(get.attitude(trigger.player,player)>0) return true;                     
            return false;
        }); 
        "step 1"
        if(result.bool){
            trigger.player.line(player,'green');
            trigger.player.logSkill('qtpz_tieling',player);
            player.storage.qtpz_tielingnum++;
            player.syncStorage('qtpz_tieling');
            player.updateMarks('qtpz_tieling');
            if(!trigger.player.hasSkill('qtpz_tieling_on')){
                trigger.player.addSkill('qtpz_tieling_on');
            }
            else{
                trigger.player.storage.qtpz_tieling_on++;
                trigger.player.markSkill('qtpz_tieling_on');
                trigger.player.syncStorage('qtpz_tieling_on');
            }
            if(player.storage.qtpz_tielingnum>=3){
                player.awakenSkill('qtpz_tieling');
                player.storage.qtpz_tieling=true;
                player.unmarkSkill('qtpz_tieling');
            }
        }
        else{
            event.finish();
        } 
        "step 2"
        if(!player.isDamaged()){
            player.draw(2);
            event.finish();
        }
        "step 3"
        player.chooseControl('回血','摸牌',function(event,player){
            return '回血';
        });
        "step 4"
        if(result.control=='回血'){
            player.recover();
        }
        else{
            player.draw(2);
        }
    },
            },
            "qtpz_jieyou":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    target:"useCardToBefore",
                },
                forced:true,
                priority:5,
                check:function (event,player){
        return get.effect(event.target,event.card,event.player,player)<0;
    },
                filter:function (event,player){
        return event.player.hasSkill('qtpz_tieling_on')&&get.color(event.card)=='black';
    },
                content:function (){
        trigger.cancel();
    },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                if(!player.hasSkill('qtpz_tieling_on')) return;
                if(get.color(card)=='black') return 'zeroplayertarget';
            },
                    },
                },
            },
            "qtpz_sunuo1":{
				audio:"ext:金庸群侠传:2",
                audio:"ext:qtpz_xieyanke:2",
                enable:"phaseUse",
                filterTarget:function (card,player,target){
        if(target==player) return false;
        if(!target.hasSkill('qtpz_sunuo')) return false;
        var controls=[];
        if(target.countCards('e')>0&&!target.hasSkill('qtpz_sunuo_yi')){
            controls.push('选项一');
        }
        var numm=0;
        var list2=['wuzhong','wugu','taoyuan','juedou','huogong','tiesuo','guohe','shunshou','wanjian','nanman'];
        for(var i=0;i<list2.length;i++){
            if(game.hasPlayer(function(current){
                var card={name:list2[i]};
                return target.canUse(card,current);
            })){
                numm++
            }
        }
        if(target.countCards('h')>0&&!target.hasSkill('qtpz_sunuo_er')&&numm>0){
            controls.push('选项二');
        }
        if(game.countPlayer()>=3&&!target.hasSkill('qtpz_sunuo_san')){
            controls.push('选项三');
        }
        if(controls.length>0) return true;
        return false;
    },
                filter:function (event,player){
     //   if(player.hasSkill('qtpz_sunuo')) return false;
        if(!player.hasSkill('qtpz_tieling_on')) return false;
        if(player.storage.qtpz_tieling_on<1) return false;
        var list1=game.filterPlayer(function(current){
            return current.hasSkill('qtpz_sunuo')&&current!=player&&game.countPlayer()>=3;
        }).sortBySeat();
        var list2=game.filterPlayer(function(current){
            return current.hasSkill('qtpz_sunuo')&&current!=player&&current.countCards('h')>0;
        }).sortBySeat();
        var list3=game.filterPlayer(function(current){
            return current.hasSkill('qtpz_sunuo')&&current!=player&&current.countCards('e')>0;
        }).sortBySeat();
        if(list1||list2||list3) return true;
        return false;
    },
                content:function (){
        "step 0" 
        event.tar=targets[0];
        "step 1" 
        var controls=[];
        event.on1='<br><br><div class="text">选项一:获得'+get.translation(event.tar)+'装备区里的一张牌</div>';
        event.on2='<br><br><div class="text">选项二:令'+get.translation(event.tar)+'将一张手牌当你声明的牌使用</div>';
        event.on3='<br><br><div class="text">选项三:令'+get.translation(event.tar)+'对你选择的一名其他角色造成一点伤害</div>';
        if(event.tar.countCards('e')>0&&!event.tar.hasSkill('qtpz_sunuo_yi')){
            controls.push('选项一');
        }
        if(event.tar.countCards('h')>0&&!event.tar.hasSkill('qtpz_sunuo_er')){
            controls.push('选项二');
        }
        if(game.countPlayer()>=3&&!event.tar.hasSkill('qtpz_sunuo_san')){
            controls.push('选项三');
        }
        var str='请选择一项'+event.on1+''+event.on2+''+event.on3+'';
        player.chooseControl(controls,ui.create.dialog(str,'hidden')).ai=function(){
            return Math.floor(Math.random()*controls.length);
        };
        "step 2"
        if(result.control){
            player.popup(result.control);
            player.storage.qtpz_tieling_on--;
            player.markSkill('qtpz_tieling_on');
            player.syncStorage('qtpz_tieling_on');
            game.log(player,'选择了',result.control);
            if(result.control=='选项一'){
                event.tar.addSkill('qtpz_sunuo_yi');
                player.gainPlayerCard(event.tar,true,'e');
                event.finish();
            }
            if(result.control=='选项二'){
                event.tar.addSkill('qtpz_sunuo_er');
                event.goto(3);
            }
            if(result.control=='选项三'){
                event.tar.addSkill('qtpz_sunuo_san');
                event.goto(8);
            }
        }
        "step 3"
        var list2=[];
        var list1=['wuzhong','wugu','taoyuan','juedou','huogong','tiesuo','guohe','shunshou','wanjian','nanman'];
        for(var i=0;i<list1.length;i++){
            if(game.hasPlayer(function(current){
                var card={name:list1[i]};
                return event.tar.canUse(card,current);
            })){
                list2.push(list1[i]);
            }
        }
        for(var i=0;i<list2.length;i++){
            list2[i]=['锦囊','',list2[i]];
        }
        var dialog=ui.create.dialog('选择一张的锦囊牌',[list2,'vcard'],'hidden');
        player.chooseButton(dialog,true).set('ai',function(button){
            return Math.random();
        });
        "step 4"
        if(result.bool){
            event.namename=result.buttons[0].link[2];
            event.cardcard={name:event.namename};
        }
        "step 5"
        var next=event.tar.chooseCardTarget({
            position:'h',
            filterCard:function (card,player){
                return true;
            },
            selectTarget:function(card,player,target){
                var info=get.info(event.cardcard);
                return info.selectTarget;
            },
            filterTarget:function(card,player,target){
                return event.tar.canUse(event.cardcard,target);//lib.filter.filterTarget(cardax,player,target);
            },
            ai1:function(card){
                return 20-get.value(card);
            },
            ai2:function(target){
                return 1;
            },
            forced:true,
            prompt:'选择一张手牌当'+get.translation(event.cardcard)+'使用。',
        });
         "step 6"
        if(result.bool){
            event.cardssss=result.cards;
            if(!event.isMine()) game.delayx();
            event.targets=result.targets;
        }
        else{
            event.finish();
        }
        "step 7"
        if(event.targets.length>0){
            var tats=[];
            var cardss=game.createCard(event.namename,event.cardssss.suit,event.cardssss.number);
            for(var i=0;i<event.targets.length;i++){
                var ttaraaa=event.targets[i];
                if(event.tar.canUse(cardss,ttaraaa)){
                    tats.push(ttaraaa);
                }
            }
            if(tats.length>0){
                event.tar.useCard({name:event.namename},tats,event.cardssss);
                event.finish();
            }      
            else{
                event.tar.discard(event.cardssss);
                event.finish();
            }
        }
        else{
            event.tar.discard(event.cardssss);
            event.finish();
        }
        "step 8"
        player.chooseTarget('选择一名其他角色，令'+get.translation(event.tar)+'对其造成一点伤害',true,function(card,player,target){
            return target!=player&&target!=event.tar;
        }).set('ai',function(target){
            return -get.attitude(player,target);
        });
        "step 9"
        if(result.bool){
            player.line(result.targets,'green');
            result.targets[0].damage(event.tar);
        }
    },
                ai:{
                    order:1,
                    result:{
                        player:function (player,target){
                return 2;
            },
                    },
                },
            },
            "qtpz_sunuo":{
                subSkill:{
                    yi:{
                        mark:true,
                        marktext:"一",
                        intro:{
                            content:"已完成选项一",
                        },
                        sub:true,
                    },
                    er:{
                        mark:true,
                        marktext:"二",
                        intro:{
                            content:"已完成选项二",
                        },
                        sub:true,
                    },
                    san:{
                        mark:true,
                        marktext:"三",
                        intro:{
                            content:"已完成选项三",
                        },
                        sub:true,
                    },
                },
                global:"qtpz_sunuo1",
            },
	"qtpz_tudu":{
				audio:"ext:金庸群侠传:2",
                marktext:"图",
                init:function (player){
        player.storage.qtpz_tudu=[];
    },
                ondisable:true,
                onremove:function (player){
        if(player.storage.qtpz_tudu.length){
            game.log(player,'弃置了"残图"',player.storage.qtpz_tudu);
            while(player.storage.qtpz_tudu.length){
                player.storage.qtpz_tudu.shift().discard();
            }
            player.unmarkSkill('qtpz_tudu');
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
                player.storage.qtpz_tudu.length=0;
                game.log(player,'弃置了"残图"');
            }
        },
                },
                trigger:{
                    global:"useCard",
                },
                priority:-10,
                filter:function (event,player){
        if(event.player==player) return false;
        if(event.card.name=='sha'&&!event.card.nature) return true;
    },
                check:function (event,player){
        var att=get.attitude(player,event.targets[0]);
        if(event.targets[0].hasSkillTag('nofire')){
            return att>0;
        }
        return att<=0;
    },
                content:function (){
        trigger.card.nature='fire';
        trigger.naturefired=true;
        player.storage.qtpz_tuducard=trigger.card;
    },
                group:["qtpz_tudu_after","qtpz_tudu_damage"],
                subSkill:{
                    after:{
                        trigger:{
                            global:"useCardAfter",
                        },
                        filter:function (event,player){
                if(event.card.name!='sha') return false;
                return event.naturefired==true;
            },
                        forced:true,
                        popup:false,
                        content:function (){
                "step 0"
                delete player.storage.qtpz_tuducard.nature;
                "step 1"
                delete player.storage.qtpz_tuducard;
                
            },
                        sub:true,
                    },
                    damage:{
                        trigger:{
                            global:"damageEnd",
                        },
                        filter:function (event){
                return event.getParent(2).naturefired==true;
            },
                        forced:true,
                        content:function (){
                "step 0"
				game.playJY(['qtpz_tudu1','qtpz_tudu2'].randomGet());
                player.draw();
                "step 1"
                if(player.countCards('h')){
                    player.chooseCard('将'+get.cnNumber(1)+'张手牌置于武将牌上作为“残图”',1,true);
                }
                else{
                    event.finish();
                }
                "step 2"
                if(result.cards&&result.cards.length){
                    player.lose(result.cards,ui.special);
                    player.storage.qtpz_tudu=player.storage.qtpz_tudu.concat(result.cards);
                    player.syncStorage('qtpz_tudu');
                    player.markSkill('qtpz_tudu');
                    game.log(player,'将',result.cards,'置于武将牌上作为“残图”');
                }
            },
                        sub:true,
                    },
                },
            },
            "qtpz_xingxun":{
				audio:"ext:金庸群侠传:2",
                skillAnimation:true,
                unique:true,
                enable:"phaseUse",
                init:function (player){
        player.storage.qtpz_xingxun=false;
    },
                filter:function (event,player){
        if(!player.hasSkill('qtpz_tudu')) return false;
        if(player.storage.qtpz_xingxun) return false;
        return player.storage.qtpz_tudu&&player.storage.qtpz_tudu.length>0;
    },
                content:function (){
        "step 0"
        event.pl=player;
        player.storage.qtpz_xingxun=true;
        "step 1"
        event.pl.showCards(event.pl.storage.qtpz_tudu,'残图');
        "step 2"
        event.pl.awakenSkill('qtpz_xingxun');
        "step 3"
        if(event.current==undefined) event.current=player.next;
        if(event.current==player){
            event.finish();
        }
        "step 4"
        var next=event.current.chooseCard(1,'h','是否选择一张手牌当"残图"置于'+get.translation(event.pl)+'武将牌上?，不能选择"图"已有的花色,否则你受到'+get.translation(event.pl)+'的两点伤害',function(card,player){
            var suit=get.suit(card);
            for(var i=0;i<event.pl.storage.qtpz_tudu.length;i++){
                    if(get.suit(event.pl.storage.qtpz_tudu[i])==suit) return false;
                }
                return true;
        });
        next.ai=function(card){
            return 30-get.value(card);
        };
        "step 5"
        if(result.bool){
            event.current.$give(result.cards[0],event.pl);
            event.current.lose(result.cards[0],ui.special);
            event.pl.storage.qtpz_tudu.push(result.cards[0]);
            event.pl.syncStorage('qtpz_tudu');
            event.pl.showCards(event.pl.storage.qtpz_tudu,'残图');
            event.pl.markSkill('qtpz_tudu');
            event.current=event.current.next;
            event.goto(3);
        }
        else{
            event.current.damage(2,event.pl);
            event.current=event.current.next;
            event.goto(3);
        }
    },
                ai:{
                    order:10,
                    result:{
                        player:function (player){
                return 1;
            },
                    },
                },
            },
            "qtpz_xuncai":{
				audio:"ext:金庸群侠传:2",
                enable:"phaseUse",
                filter:function (event,player){
        if(!player.hasSkill('qtpz_tudu')) return false;
        if(!player.storage.qtpz_tudu||player.storage.qtpz_tudu.length<4) return false;
        var suit=[];
        for(var i=0;i<player.storage.qtpz_tudu.length;i++){
            var suits=get.suit(player.storage.qtpz_tudu[i]);
            if(!suit.contains(suits)){
                suit.push(suits);
            }
        }
        return suit.length>=4;
    },
                content:function (){
        "step 0"
        var cardss=get.cards(7);
        event.cardsss=cardss;
        player.showCards(cardss,'徇财');
         "step 1"
         var str='请选择一种花色，你获得展示的牌该花色的牌';
         var dialog=ui.create.dialog(str,'hidden');
         var controls=[];
         var hearts=[],diamonds=[],clubs=[],spades=[];
         for(var i=0;i<event.cardsss.length;i++){
            var suits=get.suit(event.cardsss[i]);
            if(!controls.contains(suits)){
                controls.push(suits);
            }
            if(suits=='heart'){
                hearts.push(event.cardsss[i])    
            }
            else if(suits=='diamond'){
                diamonds.push(event.cardsss[i])    
            }
            else if(suits=='club'){
                clubs.push(event.cardsss[i])    
            }
            else if(suits=='spade'){
                spades.push(event.cardsss[i])    
            }
        }
        if(hearts.length>0){
            dialog.add('红桃牌');
            dialog.add(hearts);     
        }
        if(diamonds.length>0){
            dialog.add('方片牌');
            dialog.add(diamonds);     
        }
        if(clubs.length>0){
            dialog.add('梅花牌');
            dialog.add(clubs);     
        }
        if(spades.length>0){
            dialog.add('黑桃牌');
            dialog.add(spades);     
        }
        player.chooseControl(controls,dialog).ai=function(){
            return Math.floor(Math.random()*controls.length);
        };
        "step 2"
        if(result.control){
            player.popup(result.control);
            game.log(player,'选择了',result.control);
            event.suit=result.control;
        }
        else{
            event.finish();
        }
        "step 3"
        event.gain=[];
        for(var i=0;i<event.cardsss.length;i++){
            if(get.suit(event.cardsss[i])==event.suit){
                event.gain.push(event.cardsss[i]);
            }
            else{
                event.cardsss[i].discard();
            }
        }
        player.gain(event.gain,'gain2');
         "step 4"
          var cards=player.storage.qtpz_tudu;
          player.showCards(cards,'残图');
        "step 5"
        if(player.storage.qtpz_tudu.length){
            game.log(player,'弃置了"图"',player.storage.qtpz_tudu);
            while(player.storage.qtpz_tudu.length){
                player.storage.qtpz_tudu.shift().discard();
            }
            player.unmarkSkill('qtpz_tudu');
        }
    },
                ai:{
                    basic:{
                        order:1,
                    },
                    result:{
                        player:function (player){
                if(player.countCards('h')>=player.hp) return -1;
                return 1;
            },
                    },
                },
            },
	"qtpz_daogao":{
				audio:"ext:金庸群侠传:2",
                global:"qtpz_daogao1",
                init:function (player){
        player.storage.qtpz_daogao=[];
    },
                trigger:{
                    global:"gameStart",
                    player:"enterGame",
                },
                forced:true,
                content:function (){
        "step 0"
        event.card=get.cards(7);
        if(player.storage.qtpz_daogao==undefined) player.storage.qtpz_daogao=[];
        player.storage.qtpz_daogao=event.card;
        player.syncStorage('qtpz_daogao');
        player.showCards(player.storage.qtpz_daogao,'贺兰石')
        player.markSkill('qtpz_daogao');
    },
                intro:{
                    content:"cards",
                    onunmark:function (storage,player){
            if(storage&&storage.length){
                player.$throw(storage);
                for(var i=0;i<storage.length;i++){
                    storage[i].discard();
                }
                delete player.storage.qtpz_daogao;
            }
        },
                },
            },
            "qtpz_daogao1":{
                subSkill:{
                    off:{
                        sub:true,
                    },
                },
                enable:"phaseUse",
                usable:1,
				audio:"ext:金庸群侠传:2",
                filter:function (event,player){
        if(player.hasSkill('qtpz_daogao1_off')) return false;
        return player.countCards('h')&&game.hasPlayer(function(current){
            return current.hasSkill('qtpz_daogao')&&current.storage.qtpz_daogao&&current.storage.qtpz_daogao.length>0;
        });
    },
                prompt:function (){
        var player=_status.event.player;
        var list=game.filterPlayer(function(current){
            return current.hasSkill('qtpz_daogao')&&current.storage.qtpz_daogao&&current.storage.qtpz_daogao.length>0;
        });
        var str='将一张手牌替换'+get.translation(list);
        if(list.length>1) str+='其中的一人';
        str+='武将牌上的"贺兰石"';
        return str;
    },
                content:function (){
        "step 0"
        var targets=game.filterPlayer(function(current,player){
            return current.hasSkill('qtpz_daogao')&&current.storage.qtpz_daogao&&current.storage.qtpz_daogao.length>0;
        });
        if(targets.length==1){
            event.target=targets[0];
            event.goto(2);
        }
        else if(targets.length>0){
            player.chooseTarget(true,'选择【祷告】的目标',function(card,player,target){
                return _status.event.list.contains(target);
            }).set('list',targets).set('ai',function(target){
                var player=_status.event.player;
                return get.attitude(player,target);
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
            player.logSkill('qtpz_daogao',event.target);
            player.addTempSkill('qtpz_daogao1_off');
        }
        else{
             event.finish();
        }
        "step 3"
        if(event.target){
            var hs=player.getCards('h');
            if(hs.length){
                var carddd=event.target.storage.qtpz_daogao;
                if(carddd.length){
                    player.chooseCardButton('贺兰石',event.target.storage.qtpz_daogao,true).ai=function(button){ 
                        var val=get.value(button.link);
                        return val;
                    }
                }
                else{
                    event.finish();
                }
            }
            else{
                event.finish();
            }
        }
        else{
            event.finish();
        }
        "step 4"
        if(result.bool){
            event.card=result.links[[0]];
            player.chooseCard('h',true,'用一张手牌替换'+get.translation(event.card)).ai=function(card){
                var value=get.value(card);
                var numbercard=get.number(card);
                var carddd=event.target.storage.qtpz_daogao;
                if(carddd.length){
                    var numberss=[];
                    for(var i=0;i<carddd.length;i++){
                        if(carddd[i]==event.card) continue;
                        var number=get.number(carddd[i]);
                        if(!numberss.contains(number)){
                            numberss.push(number);
                        }         
                    }
                }
                else{
                    event.finish();
                }
                if(!numberss.contains(numbercard)){
                    value-=10;
                }
                return -value;
            };
        }
        else{
            event.finish();
        }
        "step 5"
        if(result.bool){
            event.target.$give(event.card,player);
            player.gain(event.card);
            player.$give(result.cards[0],event.target);
            player.lose(result.cards[0],ui.special);
            event.target.storage.qtpz_daogao.push(result.cards[0]);
            event.target.storage.qtpz_daogao.remove(event.card);
            event.target.syncStorage('qtpz_daogao');
            game.log(player,'用一张手牌与',event.target,'交换了一张贺兰石');
            //event.target.showCards(event.target.storage.qtpz_daogao,'贺兰石');
            var numberkk=get.number(result.cards[0]);
            var carddd=event.target.storage.qtpz_daogao;
            if(carddd.length){
                 var numberss=[];
                 for(var i=0;i<carddd.length;i++){
                     if(carddd[i]==event.card) continue;
                     if(carddd[i]==result.cards[0]) continue;
                     var number=get.number(carddd[i]);
                     if(!numberss.contains(number)){
                         numberss.push(number);
                     }
                 }
            }
            if(!numberss.contains(numberkk)){
                player.draw();
            }
            else{
                player.chooseToDiscard(1,'he',true);
            }
        }
    },
                ai:{
                    order:10,
                    result:{
                        player:function (player,target){
                var target=game.findPlayer(function(current){
                    return current.hasSkill('qtpz_daogao')&&current.storage.qtpz_daogao&&current.storage.qtpz_daogao.length>0;
                });
                if(target){
                    return 1;
                }
            },
                    },
                },
            },
            "qtpz_shenyu":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"phaseUseBegin",
                },
                filter:function (event,player){
        if(!player.hasSkill('qtpz_daogao')) return false;
        var daogao=player.storage.qtpz_daogao;
        if(!daogao||daogao.length<1) return false;
        if(daogao){
            var number=[];
            for(var i=0;i<daogao.length;i++){
                var numberss=get.number(daogao[i]);
                if(number.contains(numberss)){
                    return false;
                }
                else{
                    number.push(numberss);
                }
            }
        }
        if(daogao){
            for(var i=0;i<daogao.length;i++){
                var suit=get.suit(daogao[i]);
                if(suit=='heart'){
                    return true;
                }
            }
            return false;
        }
        return false;
    },
                content:function (){
        "step 0"
        var gaincard=[];
        var daogao=player.storage.qtpz_daogao; 
        if(daogao){
            for(var i=0;i<daogao.length;i++){
                var suit=get.suit(daogao[i]);
                if(suit=='heart'){
                    gaincard.push(daogao[i]);
                }
            }
            if(gaincard.length>0){
                for(var i=0;i<gaincard.length;i++){
                    player.storage.qtpz_daogao.remove(gaincard[i]);
                }
            }
            if(gaincard.length>0) player.gain(gaincard,'gain2');
        }
        "step 1"
        var num1=7-player.storage.qtpz_daogao.length; 
        if(num1>0){
            var cardss=get.cards(num1);
            player.storage.qtpz_daogao=player.storage.qtpz_daogao.concat(cardss);
            player.syncStorage('qtpz_daogao');
            player.markSkill('qtpz_daogao');
            game.log(player,'将牌堆顶的'+num1+'张牌',cardss,'置于武将牌上作为“贺兰石”');
        }
        "step 2"
        player.chooseTarget('选择至多其他三名男性角色并弃置其装备区里的一张牌',[1,3],function(card,player,target){
           if(!target.countCards('e')) return false;
            return target!=player&&target.sex=='male';
        }).set('ai',function(target){
            return -get.attitude(player,target);
        });
        "step 3"
        if(result.bool){
            event.targets=result.targets;
            event.num=0;
        }
        else{
            event.finish();
        }
        "step 4"
        if(event.num<event.targets.length){
            var target=event.targets[event.num];
            player.line(target,'green');
            player.discardPlayerCard('e',target,true);
            event.num++;
            event.redo();
        }
    },
            },
	"qtpz_jiaoxie":{
				audio:"ext:金庸群侠传:2",
                skillAnimation:"epic",
                unique:true,
                trigger:{
                    player:"dying",
                },
                init:function (player){
        player.storage.qtpz_jiaoxie=false;
    },
                mark:true,
                marktext:"缴",
                intro:{
                    content:"limited",
                },
                priority:10,
                filter:function (event,player){
        var es=player.getCards('e');
        if(es.length<1) return false;
        return !player.storage.qtpz_jiaoxie;
    },
                content:function (){
        "step 0"
       // player.loseMaxHp();
        var es=player.getCards('e');
        player.discard(es);
        "step 1"
        var num=Math.min(2,player.maxHp-player.hp);
        if(num>0) player.recover(num);
        "step 2"
        player.storage.qtpz_jiaoxie=true;
        player.awakenSkill('qtpz_jiaoxie');
    },
            },
            "qtpz_ruxue":{
                group:["qtpz_ruxue_use","qtpz_ruxue_die"],
                subSkill:{
                    used:{
                        sub:true,
                    },
                    use:{
                        trigger:{
                            player:"useCard",
                        },
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                if(event.skill!='qtpz_ruxue') return false;
                return true;
            },
                        content:function (){
                player.storage.qtpz_ruxue--;
                player.markSkill('qtpz_ruxue');
                player.syncStorage('qtpz_ruxue');
                if(!player.hasSkill('qtpz_ruxue_used')) player.addSkill('qtpz_ruxue_used');
                if(player.storage.qtpz_ruxue==0) player.unmarkSkill('qtpz_ruxue');
                
            },
                        sub:true,
                    },
                    die:{
                        trigger:{
                            global:"dieAfter",
                        },
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                if(event.player==player) return false;
                return true;
            },
                        content:function (){
                player.storage.qtpz_ruxue++;
                player.markSkill('qtpz_ruxue');
                player.syncStorage('qtpz_ruxue');            
            },
                        sub:true,
                    },
                },
                mark:true,
                marktext:"啖",
                init:function (player){
        player.storage.qtpz_ruxue=0;
        //player.markSkill('qtpz_ruxue');
        //player.syncStorage('qtpz_ruxue');
    },
                intro:{
                    content:function (storage){
            return '当前有'+storage+'枚"啖尸"标记';
        },
                },
                audio:"ext:qtpz_huatiegan:2",
                enable:"chooseToUse",
                filter:function (event,player){
        return player.storage.qtpz_ruxue>0;
    },
                filterCard:function (){return false},
                selectCard:-1,
                viewAs:{
                    name:"tao",
                },
                prompt:"移除一枚'啖尸'标记，视为使用一张桃",
                ai:{
                    skillTagFilter:function (player){
            return player.storage.qtpz_ruxue>0;
        },
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
            "qtpz_guming":{
                skillAnimation:true,
                animationColor:"fire",
                audio:"ext:金庸群侠传:2",
                unique:true,
                forceunique:true,
                derivation:"qtpz_minjiu",
                init:function (player){
        player.storage.qtpz_guming=false;
    },
                trigger:{
                    player:"phaseBegin",
                },
                filter:function (event,player){
        //if(!player.hasSkill('qtpz_ruxue')) return false;
        if(player.storage.qtpz_ruxue!=0) return false;
        if(game.dead.length==0) return false;
        if(!player.hasSkill('qtpz_ruxue_used')) return false;
        return !player.storage.qtpz_guming;
    },
                forced:true,
                content:function (){
        player.storage.qtpz_guming=true;
        player.loseMaxHp();
        if(player.hasSkill('qtpz_ruxue')) player.removeSkill('qtpz_ruxue');
        if(!player.hasSkill('qtpz_minjiu')) player.addSkill('qtpz_minjiu');
        player.awakenSkill('qtpz_guming');
    },
            },
            "qtpz_minjiu":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"phaseDrawBefore",
                },
                check:function (event,player){
        var num=game.dead.length;
        return num>3;
    },
                prompt:function (event,player){
        var num=game.dead.length;
        return '盟举：是否改为摸'+get.cnNumber(num)+'张牌？';
    },
                content:function (){
        var num=game.dead.length;
        trigger.num=num;
        if(!player.hasSkill('qtpz_minjiu_hand')) player.addTempSkill('qtpz_minjiu_hand');
    },
                subSkill:{
                    hand:{
                        mod:{
                            maxHandcard:function (player,num){
                    return game.dead.length;
                },
                        },
                        sub:true,
                    },
                },
            },
	"qtpz_yuanbian":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"useCard",
                },
                usable:1,
                priority:-2,
                check:function (event,player){
        return get.effect(event.targets[0],event.card,player,player)<0;
    },
                filter:function (event,player){
        if(!event.targets||event.targets.length!=1) return false;
        if(event.player==player) return false;
        if(event.targets.contains(player)) return false;
        if(get.info(event.card).multitarget) return false;
        var type=get.type(event.card);
        if(type!='basic'&&type!='trick') return false;
        return true;
    },
                autodelay:true,
                content:function (){
        "step 0"
        var eff=get.effect(trigger.targets[0],trigger.card,player,player);
        var eff2=get.effect(player,trigger.card,player,player);
        player.judge(function(card){
            if(get.color(card)=='black'){
                if(eff<0) return 2;
                return -1;
            }
            if(get.color(card)=='red'){
                if(eff2>0) return 1;
                return -1;
            }
            return 0;
        });
        "step 1"
        if(result.color=='black'){
            trigger.cancel();
        }
        else if(lib.filter.targetEnabled2(trigger.card,trigger.player,player)){
            trigger.targets.add(player);
            trigger.player.line(player,'green');
        }       
    },
            },
            "qtpz_tongzui":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"useCard",
                },
                priority:-10,
                check:function (event,player){
        var numm=0;
        for(var i=0;i<event.targets.length;i++){
            var juese=event.targets[i];
            var att=get.attitude(player,juese);
            if(att>=0){
                numm++;
            }
            if(att<0){
                numm--;
            }
        }
        if(numm<0) return true;
        return false;
    },
                filter:function (event,player){
        if(!event.targets||event.targets.length<2) return false;
        //if(event.player==player) return false;
        if(!event.targets.contains(player)) return false;
        return true;
    },
                content:function (){
        "step 0"
        for(var i=0;i<trigger.targets.length;i++){
            var juese=trigger.targets[i];
            juese.loseHp(1);
        }
    },
            },
	"qtpz_guoshang":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    target:"useCardToBefore",
                },
                priority:-1,
                frequent:true,
                filter:function (event,player){
        return get.suit(event.card)&&get.suit(event.card)=='club';
    },
                content:function (){
        player.draw();
    },
                ai:{
                    effect:{
                        target:function (card,player,target){
                if(get.suit(card)=='club') return [1,0.6];
            },
                    },
                },
            },
            "qtpz_fuchao":{
                group:["qtpz_fuchao_after","qtpz_fuchao_damage","qtpz_fuchao_use","qtpz_fuchao_isLinkedbegin","qtpz_fuchao_isLinkedafter"],
                subSkill:{
                    after:{
                        trigger:{
                            global:"useCardAfter",
                        },
                        filter:function (event,player){
                return event.ondamage==true&&event.tar.length>0;
            },
                        check:function (event,player){
                var numm=0;
                for(var i=0;i<event.tar.length;i++){
                    var juese=event.tar[i];
                    var att=get.attitude(player,juese);
                    var he=juese.countCards('he');
                    if(att>0&&he>0){
                        numm++;
                    }
                    if(att<=0&&he>0){
                        numm--;
                    }
                }
                if(numm<0) return true;
                return false;
            },
                        content:function (){
               for(var i=0;i<trigger.tar.length;i++){
                   var juese=trigger.tar[i];
                   if(juese.countCards('he')){
                       player.line(juese,'green');
                       juese.chooseToDiscard(1,'he',true);
					   //game.playJY(['qtpz_fuchao1','qtpz_fuchao2','qtpz_fuchao3'].randomGet());
                   }
               }  
            },
                        sub:true,
                    },
                    damage:{
                        trigger:{
                            global:"damageEnd",
                        },
                        filter:function (event){
                return event.getParent(2).tar.length>0;
            },
                        forced:true,
                        popup:false,
                        content:function (){
                "step 0"
                if(trigger.getParent(2).ondamage==false) trigger.getParent(2).ondamage=true;
				game.playJY(['qtpz_fuchao1','qtpz_fuchao2','qtpz_fuchao3'].randomGet());
                "step 1"
                if(trigger.getParent(2).tar.contains(trigger.player)){
                    trigger.getParent(2).tar.remove(trigger.player);
                }
            },
                        sub:true,
                    },
                    use:{
                        trigger:{
                            global:"useCard",
                        },
                        forced:true,
                        popup:false,
                        priority:-100,
                        filter:function (event,card){
                if(!event.targets) return false;
                return true;
            },
                        content:function (){
                trigger.tar=trigger.targets.slice(0);
                trigger.ondamage=false;
            },
                        sub:true,
                    },
                    isLinkedbegin:{
                        trigger:{
                            global:["recoverBegin","damageBegin"],
                        },
                        forced:true,
                        silent:true,
                        popup:false,
                        filter:function (event,player){
                if(!event.player.isLinked()) return false;
                return true;
            },
                        content:function (){
                trigger.isLinkedbegin=true;
            },
                        sub:true,
                    },
                    isLinkedafter:{
                        trigger:{
                            global:["recoverAfter","damageAfter"],
                        },
                        check:function (event,player){
                var nummm=0;
                var tar=game.filterPlayer(function(current){
                    return current.isLinked()&&current!=event.player;
                }).sortBySeat();
                if(tar.length>0){
                    for(var i=0;i<tar.length;i++){
                    var juese=tar[i];
                        if(event.name=='damage'){
                            if(juese.countCards('he')){
                                var att=get.attitude(player,juese);
                                if(att>0) nummm++;
                                if(att<=0) nummm--;
                            }
                        }
                        if(event.name=='recover'){
                        var att=get.attitude(player,juese);
                            if(att>0) nummm++;
                            if(att<=0) nummm--;
                        }
                    }  
                    if(event.name=='damage'&&nummm<0) return true;
                    if(event.name=='recover'&&nummm>0) return true;
                    return false;
                }
                return false;
            },
                        filter:function (event,player){
                if(event.name=='recover'&&event.player.isDying()) return false;
                var tar=game.filterPlayer(function(current){
                    return current.isLinked()&&current!=event.player;
                }).sortBySeat();
                if(tar.length<1) return false;
                return event.isLinkedbegin==true;
            },
                        content:function (){
                "step 0"
				//game.playJY(['qtpz_fuchao1','qtpz_fuchao2','qtpz_fuchao3'].randomGet());
                event.targets=game.filterPlayer(function(current){
                    if(current.isLinked()&&current!=trigger.player){
                        return true;
                    }
                });
                event.num=0;
                event.targets.sort(lib.sort.seat);
                "step 1"
                if(event.num<event.targets.length){
                    var target=event.targets[event.num];
                    player.line(target,'green');
                    if(trigger.name=='damage'&&target.countCards('he')){
                        target.chooseToDiscard(true,'he');
                    }
                    if(trigger.name=='recover') target.draw();
                    event.num++;
                    event.redo();
                }
            },
                        sub:true,
                    },
                },
            },
	"qtpz_gaifu":{
                enable:"phaseUse",
                usable:1,
                audio:"ext:金庸群侠传:2",
                selectTarget:2,
                filterTarget:function (card,player,target){
        return player!=target;
    },
                content:function (){
        "step 0"
        if(num==0&&player.isLinked()){
            player.loseHp();
            event.goto(3);
        }
        "step 1"
        if(num==0){
            player.chooseControl('流失体力','横置',function(event,player){
                return '横置';
            });
        }
        "step 2"
        if(num==0){
            if(result.control=='流失体力'){
                player.loseHp();
            }
            else{
                player.link();
            }
        }
        "step 3"
        target.link();
    },
                ai:{
                    result:{
                        target:function (target){
                if(!target.isLinked()) return -0.5;
                if(target.isLinked()) return 0.5;
            },
                        player:function (player){
                if(!player.isLinked()) return 0.5;
                return -1;
            },
                    },
                    order:2,
                    expose:0.3,
                },
            },
            "qtpz_wuxian":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"phaseEnd",
                },
                check:function (event,player){
        var num=player.maxHp-player.hp;
        if(num==0) return false;
        var cardsss=player.getCards('h');
        if(num>=1&&get.value(cardsss[0])<6&&cardsss.length==1) return true;
        if(num-cardsss.length>1) return true;
        for(var i=0;i<cardsss.length;i++){
            if(get.value(cardsss[i])>7||get.tag(cardsss[i],'recover')>=1) return false;
        }
        return true;
    },
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                content:function (){
        "step 0"
        var cards=player.getCards('h');
        player.discard(cards);
        "step 1"
       var num1=player.maxHp-player.hp;
       if(num1>0) player.draw(num1);
    },
            },
	"qtpz_quanzhen2":{},
	"qtpz_quanzhen":{
		audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"gainEnd",
                },
                usable:1,
                check:function (event,player){
        return get.attitude(player,event.player)<=0;
    },
                filter:function (event,player){
        return event.player.isMaxHandcard(true)&&!player.hasSkill('qtpz_quanzhen2');
    },
                content:function (){
        'step 0'
        player.line(trigger.player,'green');
        'step 1'
        trigger.player.chooseCard('h',1,'劝赈：将1张牌当五谷丰登使用且你不能成为目标',true).set('ai',function(card){
            return -get.value(card);
        });
        'step 2'
        if(result.bool){
			player.addTempSkill('qtpz_quanzhen2',{player:'phaseBegin'});
            var card=game.createCard('wugu',result.cards[0].suit,result.cards[0].number);
            var list=game.filterPlayer(function(current){
                return trigger.player.canUse(card,current);
            }).sortBySeat();
            if(list.contains(trigger.player)){
                list.remove(trigger.player);
            }
            if(list.length){
                trigger.player.useCard({name:'wugu'},list,result.cards);
            }        
            else{
                trigger.player.discard(result.cards[0]);
            }
        }
    },
     ai:{
    		skillTagFilter:function(player){
						return !player.hasSkill('qtpz_quanzhen2');
						}
						},    
            },
            "qtpz_honglve":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"phaseUseBegin",
                },
                filter:function (event,player){
        return (player.countCards('h',{type:'trick'})+player.countCards('h',{type:'delay'}))>0;
    },
                direct:true,
                content:function (){
    "step 0"
    var next=player.chooseCard(1,'h','是否弃置一张锦囊牌?若弃置的牌为红色，你本回合使用桃回复数值加一;若为黑色你使用黑色牌伤害加一。',function(card,player){
            return get.type(card)=='trick'||get.type(card)=='delay';
        });
        next.ai=function(card){
            if(player.countCards('h','tao')>0&&player.canUse({name:'tao'},player)){
                if(player.maxHp-player.hp>1){
                   if(get.color(card)=='red') return 8-get.value(card);
                }
            }
            var blsha=false;
            var blnum=0;
            var ca=player.getCards('h');
            for(var i=0;i<ca.length;i++){
                if(get.color(ca[i])=='black'){
                    var canblack=game.hasPlayer(function(current){
                        return get.tag(ca[i],'damage')&&get.effect(current,ca[i],player,player)>0&&player.canUse(ca[i],current);
                    });
                    if(canblack&&ca[i].name!='sha') blnum++;
                    if(canblack&&ca[i].name=='sha'&&blsha==false) blsha=true;
                }
            }
            if(blsha==true) blnum++;
            if(get.color(card)=='black'&&blnum>=2&&!get.tag(card,'damage')) return 8-get.value(card);
            if(get.color(card)=='black'&&blnum>=3&&get.tag(card,'damage')) return 6-get.value(card);
            return -1;
        };
        "step 1"
        if(result.bool){
            player.discard(result.cards[0]);
            player.logSkill('qtpz_honglve');
            player.addTempSkill('qtpz_honglve_'+get.color(result.cards[0]));
        }
    },
                subSkill:{
                    black:{
                        mark:true,
                        marktext:"略",
                        intro:{
                            content:"你的黑色牌伤害加一",
                        },
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event){
                return event.card&&event.card.name&&get.color(event.card)=='black'&&event.notLink();
            },
                        forced:true,
                        content:function (){
                trigger.num++;
            },
                        ai:{
                            damageBonus:true,
                        },
                        sub:true,
                    },
                    red:{
                        mark:true,
                        marktext:"鸿",
                        intro:{
                            content:"你的桃回复数值加一",
                        },
                        trigger:{
                            source:"recoverBegin",
                        },
                        filter:function (event){
                return event.card&&event.card.name=='tao';
            },
                        forced:true,
                        content:function (){
                trigger.num++;
            },
                        sub:true,
                    },
                },
            },
	"qtpz_fengpo":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:["shaBefore"],
                },
                filter:function (event,player){
        return player.countCards('h')>0&&event.target.countCards('h')>0;
    },
                direct:true,
                content:function (){
    "step 0"
    var skr='是否弃置一张牌令'+get.translation(trigger.target)+'展示手牌并弃置与你弃置的牌花色相同的牌？'
    var next=player.chooseToDiscard(1,'h',skr,function(card,player){
        return true;
    });
    var att=get.attitude(_status.event.player,trigger.target);
    next.ai=function(card){
        if(att<0) {
            if(trigger.target.countCards('h')>3&&player.countCards('h',{color:'red'})){
                if(get.color(card)=='red'){
                    return 6-get.value(card);
                }
            }
            if(trigger.target.countCards('h')>4&&player.countCards('h',{color:'black'})){
                if(get.color(card)=='black'){
                    return 8-get.value(card);
                }
            }
        }
        return -1;
    };
    "step 1"
    if(result.bool){
        player.logSkill('qtpz_fengpo',trigger.target);
        trigger.target.showHandcards();
        trigger.target.discard(trigger.target.getCards('he',{suit:get.suit(result.cards[0])}))
    }
    },
            },
            "qtpz_yujie":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    source:"damageEnd",
                },
                direct:true,
                filter:function (event,player){
        if(!event.card||!event.card.name) return false;
        if(event.cards){
            for(var i=0;i<event.cards.length;i++){
                if(get.position(event.cards[i])=='d') return true;
            }
        }
        return false;
    },
                content:function (){
    "step 0"
    player.chooseTarget('是否选择一名角色获得'+get.translation(trigger.card)+'？',function(card,player,target){
        return trigger.getParent(2).targets.contains(target);
    }).set('ai',function(target){
        var num=target.countCards('h')-target.hp;
        if(num>=0){
            return get.attitude(player,target);
        }
        return get.attitude(player,target);
    });
    "step 1"
    if(result.bool){
        player.logSkill('qtpz_yujie',result.targets[0]);
        result.targets[0].gain(trigger.cards);
        result.targets[0].$gain2(trigger.cards);
        event.target=result.targets[0];
    }
          "step 2"
    if(event.target){
        if(event.target.countCards('h')-event.target.hp>0) player.draw();
        }
    },
            },
	"qtpz_zhidu":{
                group:["qtpz_zhidu1"],
                init:function (player){
        player.storage.qtpz_zhidu=[];
    },
                intro:{
                    content:"cards",
                },
                audio:"ext:金庸群侠传:2",
                enable:"phaseUse",
                usable:1,
                discard:false,
                filter:function (event,player){
        return player.countCards('he',{color:'black'})>0;
    },
                position:"h",
                filterCard:function (card){
        return get.color(card)=='black';
    },
                check:function (card){
        return 7-get.value(card);
    },
                content:function (){
        "step 0"
        event.cardssss=cards[0];
        "step 1"
        if(!player.storage.qtpz_zhidu.contains(event.cardssss)){
            player.storage.qtpz_zhidu.push(event.cardssss);
            player.syncStorage('qtpz_zhidu');
            player.markSkill('qtpz_zhidu');
        }
        "step 2"
        var controls=['一','二','三','四','五','六','七'];
           var str='将该牌置于牌堆第X张(X为你选择的数字)';
        player.chooseControl(controls,ui.create.dialog(str,'hidden')).ai=function(){
            return Math.floor(Math.random()*controls.length);
        };
        'step 3'
        var num;
        switch(result.control){
            case '一':num=1;break;
            case '二':num=2;break;
            case '三':num=3;break;
            case '四':num=4;break;
            case '五':num=5;break;
            case '六':num=6;break;
            case '七':num=7;break;
        }
        event.num1=num-1;
        event.num2=num;
         'step 4'
         event.cards=get.cards(7);
         'step 5'     
        for(var i=event.cards.length-1;i>=0;i--){
            if(i==event.num1){
                ui.cardPile.insertBefore(event.cards[i],ui.cardPile.firstChild);
                ui.cardPile.insertBefore(event.cardssss,ui.cardPile.firstChild);
                player.showCards(event.cardssss,'七心海棠:<br>置于牌堆顶第'+event.num2+'张');
                game.delay(2);
            }
            else{
                ui.cardPile.insertBefore(event.cards[i],ui.cardPile.firstChild);
            }
        }
    },
                ai:{
					order:3,
                    result:{
                        player:1,
                    },
                },
            },
            "qtpz_zhidu1":{
                trigger:{
                    global:"phaseDrawEnd",
                },
                check:function (event,player){
        return get.attitude(player,event.player)<=0;
    },
                forced:true,
                filter:function (event,player){
       if(!event.cards||!event.cards.length) return false;
       for(var i=0;i<event.cards.length;i++){
            if(player.storage.qtpz_zhidu.contains(event.cards[i])){
                return true;
            }
        }
        return false;
    },
                content:function (){
        "step 0"
        player.line(trigger.player,'green');
        "step 1"
        for(var i=0;i<trigger.cards.length;i++){
            if(player.storage.qtpz_zhidu.contains(trigger.cards[i])){
                player.storage.qtpz_zhidu.remove(trigger.cards[i]);
                player.syncStorage('qtpz_zhidu');
                player.markSkill('qtpz_zhidu');
                trigger.player.showCards(trigger.cards[i],'七心海棠');
                trigger.player.damage(1,'fire','nosource');
                game.delay(2);
            }
        }
    },
	ai:{
					order:3,
                    result:{
                        player:1,
                    },
                },
            },
            "qtpz_xianghun":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"damageEnd",
                },
                check:function (event,player){
        return get.attitude(player,event.player)>0;
    },
                filter:function (event,player){
        if(event.nature) return true;
    },
                content:function (){
        trigger.player.draw();
    },
            },
	 "qtpz_zuiji":{
                trigger:{
                    player:["useCard","respond"],
                },
                filter:function (event,player){
        if(_status.currentPhase!=player) return false;
        if(player.storage.qtpz_zuiji.length>=4) return false;
        if(player.hasSkill('qtpz_zuiji_off')) return false;
        if(!event.cards) return false;
        return true;
    },
                forced:true,
                popup:false,
                init:function (player){
        player.storage.qtpz_zuiji=[];
    },
                intro:{
                    content:function (storage){
            if(!storage.length){
                return '未使用或打出过有花色的牌';
            }
            else{
                var str='已使用过'+get.translation(storage[0]);
                for(var i=1;i<storage.length;i++){
                    str+='、'+get.translation(storage[i]);
                }
                str+='牌';
                return str;
            }
        },
                },
                content:function (){
        "step 0"
        for(var i=0;i<trigger.cards.length;i++){
            var suit=get.suit(trigger.cards[i]);
            if(!player.storage.qtpz_zuiji.contains(suit)){
                player.storage.qtpz_zuiji.push(suit);
            }
        }
        player.syncStorage('qtpz_zuiji');
        player.markSkill('qtpz_zuiji');
        "step 1"
        if(player.storage.qtpz_zuiji.length>=4&&!player.hasSkill('qtpz_zuiji_off')){
            player.draw(3);
            player.addTempSkill('qtpz_zuiji_off','phaseEnd');
        }
    },
                group:["qtpz_zuiji_phase","qtpz_zuiji_mopai","qtpz_zuiji_mopaib"],
                subSkill:{
                    off:{
                        mark:true,
                        marktext:"罪",
                        intro:{
                            content:"不能再发动罪己摸牌",
                        },
                        sub:true,
                    },
                    phase:{
                        trigger:{
                            global:"phaseAfter",
                        },
                        priority:-50,
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                return player.storage.qtpz_zuiji.length>0;
            },
                        content:function (){
                player.storage.qtpz_zuiji=[];
                player.syncStorage('qtpz_zuiji');
                player.unmarkSkill('qtpz_zuiji');
            },
                        sub:true,
                    },
                    mopai:{
                        trigger:{
                            player:"gainAfter",
                        },
                        priority:-50,
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                if(player.hasSkill('qtpz_zuiji_mopaion')) return false;
                if(_status.currentPhase!=player) return false;
                if(event.parent.parent.name=='phaseDraw') return false;
                return event.cards&&event.cards.length>0
            },
                        content:function (){
                player.addTempSkill('qtpz_zuiji_mopaion','phaseAfter');
            },
                        sub:true,
                    },
                    mopaion:{
                        mark:true,
                        marktext:"摸",
                        intro:{
                            content:"已于回合内摸牌阶段外摸牌",
                        },
                        sub:true,
                    },
                    mopaib:{
                        trigger:{
                            player:"phaseEnd",
                        },
                        priority:-50,
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                if(player.hasSkill('qtpz_zuiji_mopaion')) return false;
                return true;
            },
                        content:function (){   
                  "step 0"
                if(player.hasSkill('qtpz_zuiji_mopaion')) event.finish();
                  "step 1"
                player.chooseControl('流失体力','翻面','横置',function(event,player){
                    if(player.isTurnedOver()) return '翻面';
                    if(player.isLinked()) return '横置';
                    return '横置';
                });
                "step 2"
                if(result.control=='流失体力'){
                    player.loseHp();
                }
                if(result.control=='翻面'){
                    player.turnOver();
                }
                if(result.control=='横置'){
                    player.link();
                }
            },
                        sub:true,
                    },
                },
            },
            "qtpz_youqin":{
				 audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"phaseUseBegin",
                },
                filter:function (event,player){
        if(event.player==player) return false;
        return player.countCards('h')&&event.player.countCards('h');
    },
                direct:true,
                content:function (){
        "step 0"
        var next=player.chooseToDiscard(1,'h','是否弃置一张非装备手牌观看'+get.translation(trigger.player)+'至多X张手牌并使用其中一张非装备牌(X为其的体力值)？',function(card,player){
            //if(get.type(card)=='equip') return false;
            return true;
        });
        var att=get.attitude(_status.event.player,trigger.player);
        next.ai=function(card){
            if(att<0) {
                if(trigger.player.hp>2&&trigger.player.countCards('h')>2){
                    return 9-get.value(card);
                }
                return -1;
            }
            return -1;
        };
        "step 1"
        if(result.bool){
            player.logSkill('qtpz_youqin',trigger.player);
        }
        else{
            event.finish();
        }     
       "step 2"
        player.line(trigger.player,'green');
        event.hs=trigger.player.getCards('h');
        var num=trigger.player.hp;
        if(num>trigger.player.countCards('h')) num=trigger.player.countCards('h');
        event.hs1=event.hs.randomGets(num);
     //   player.showCards(event.hs1)
         "step 3"
         player.chooseCardButton(event.hs1,[1,1],'选择一张牌并使用之').set('filterButton',function(button){
             //if(get.type(button.link)=='equip') return false;
             return game.hasPlayer(function(current){
                 return player.canUse(button.link,current);
             });
         }).set('ai',function(button){
             return get.value(button.link);
         });
       "step 4"
        if(result.bool){
            trigger.player.lose(result.links[0]);
          //  trigger.player.lose(result.links[0],ui.special);
          //  player.$gain2(result.links[0]);
            trigger.player.$give(result.links[0],player);
            player.chooseUseTarget(result.links[0]);
        }
        game.delay();
        trigger.player.update();
    },
            },
            "qtpz_gangbi":{
				 audio:"ext:金庸群侠传:2",
                group:["qtpz_gangbi_remove"],
                subSkill:{
                    remove:{
                        trigger:{
                            global:"gameStart",
                            player:"enterGame",
                        },
                        popup:false,
                        forced:true,
                        filter:function (event,player){
                return player.identity!='zhu';
            },
                        content:function (){
                player.removeSkill('qtpz_gangbi');
            },
                        sub:true,
                    },
                },
                trigger:{
                    target:"useCardToBefore",
                },
                forced:true,
                priority:15,
                check:function (event,player){
        return get.effect(event.target,event.card,event.player,player)<0;
    },
                filter:function (event,player){
       if(event.player.group!='wu') return false;
       if(event.player==player) return false;
        return get.type(event.card)=='trick'||get.type(event.card)=='delay';
    },
                content:function (){
        "step 0"
        player.draw();
        "step 1"
        trigger.cancel();
    },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                if(player.group!='wu') return;
                if(player==target) return;
                if(get.type(card)=='trick'||get.type(card)=='delay') return 'zeroplayertarget';
            },
                    },
                },
            },
            "qtpz_zuiji":{
				 audio:"ext:金庸群侠传:2",
                trigger:{
                    player:["useCard","respond"],
                },
                filter:function (event,player){
        if(!event.cards) return false;
        return true;
    },
                forced:true,
                popup:false,
                init:function (player){
        player.storage.qtpz_zuiji=[];
    },
                intro:{
                    content:function (storage){
            if(!storage.length){
                return '未使用或打出过有花色的牌';
            }
            else{
                var str='已使用过'+get.translation(storage[0]);
                for(var i=1;i<storage.length;i++){
                    str+='、'+get.translation(storage[i]);
                }
                str+='牌';
                return str;
            }
        },
                },
                content:function (){
        "step 0"
        for(var i=0;i<trigger.cards.length;i++){
            var suit=get.suit(trigger.cards[i]);
            if(!player.storage.qtpz_zuiji.contains(suit)){
                player.storage.qtpz_zuiji.push(suit);
                player.addSkill('qtpz_zuiji_'+suit);
            }
        }
        player.syncStorage('qtpz_zuiji');
        player.markSkill('qtpz_zuiji');
        "step 1"
        if(player.storage.qtpz_zuiji.length>=4){
            player.draw(2);
            player.removeSkill('qtpz_zuiji_heart');
            player.removeSkill('qtpz_zuiji_diamond');
            player.removeSkill('qtpz_zuiji_club');
            player.removeSkill('qtpz_zuiji_spade');
            player.storage.qtpz_zuiji=[];
            player.syncStorage('qtpz_zuiji');
            player.unmarkSkill('qtpz_zuiji');
        }
    },
                group:["qtpz_zuiji_mopai","qtpz_zuiji_mopaib"],
                subSkill:{
                    heart:{
                        mark:true,
                        marktext:"♥️",
                        intro:{
                            content:"已使用或打出♥️牌",
                        },
                        sub:true,
                    },
                    diamond:{
                        mark:true,
                        marktext:"♦️",
                        intro:{
                            content:"已使用或打出♦️牌",
                        },
                        sub:true,
                    },
                    club:{
                        mark:true,
                        marktext:"♣️",
                        intro:{
                            content:"已使用或打出♣️牌",
                        },
                        sub:true,
                    },
                    spade:{
                        mark:true,
                        marktext:"♠️",
                        intro:{
                            content:"已使用或打出♠️牌",
                        },
                        sub:true,
                    },
                    mopai:{
                        trigger:{
                            player:"gainAfter",
                        },
                        priority:-50,
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                if(player.hasSkill('qtpz_zuiji_mopaion')) return false;
                if(event.parent.parent.name=='phaseDraw') return false;
                return event.cards&&event.cards.length>0
            },
                        content:function (){
                player.addTempSkill('qtpz_zuiji_mopaion','phaseAfter');
            },
                        sub:true,
                    },
                    mopaion:{
                        mark:true,
                        marktext:"摸",
                        intro:{
                            content:"已于回合摸牌阶段外摸牌",
                        },
                        sub:true,
                    },
                    mopaib:{
                        trigger:{
                            player:"phaseEnd",
                        },
                        priority:-50,
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                if(player.hasSkill('qtpz_zuiji_mopaion')) return false;
                return true;
            },
                        content:function (){   
                  "step 0"
				  game.playJY(['qtpz_zuiji1','qtpz_zuiji2'].randomGet());
                if(player.hasSkill('qtpz_zuiji_mopaion')) event.finish();
                  "step 1"
                player.chooseControl('流失体力','翻面',function(event,player){
                    if(player.isTurnedOver()) return '翻面';
                    if(!player.isTurnedOver()&&player.previous==trigger.player&&player.hp>=2) return '流失体力';
                    //if(player.isLinked()) return '横置';
                    return '翻面';
                });
                "step 2"
                if(result.control=='流失体力'){
                    player.loseHp();
                }
                if(result.control=='翻面'){
                    player.turnOver();
                }
                //if(result.control=='横置'){
                //    player.link();
                //}
            },
                        sub:true,
                    },
                },
            },
	"qtpz_shezheng":{
                subSkill:{
                    off:{
                        mark:true,
                        intro:{
                            content:"本轮已发动",
                        },
                        sub:true,
                    },
                },
				audio:"ext:金庸群侠传:2",
                trigger:{					
                    global:"discardAfter",
                },
                filter:function (event,player){
        if(player.hasSkill('qtpz_shezheng_off')) return false;
        if(event.player==player) return false;
        for(var i=0;i<event.cards.length;i++){
            if(event.cards[i].name=='sha'&&get.position(event.cards[i])=='d'){
                return true;
            }
        }
        return false;
    },
                direct:true,
                content:function (){
        "step 0"
        if(trigger.delay==false) game.delay();
        "step 1"
        var cards=[];
        for(var i=0;i<trigger.cards.length;i++){
            if(trigger.cards[i].name=='sha'&&get.position(trigger.cards[i])=='d'){
                cards.push(trigger.cards[i]);
            }
        }
        if(cards.length){
            event.sha=cards;
        }
        "step 2"
        if(event.sha.length){
            player.chooseCardButton(event.sha,1,'请选择一张杀使用之').set('filterButton',function(button){
                return button.link.name='sha'
            });
            }
            else{
                event.finish();
            }  
        "step 3"
        if(result.bool){
            event.usesha=result.links[0];
            event.sha.remove(result.links[0]);
        }
        else{
            event.finish();
        }  
         "step 4"
        player.chooseTarget('是否选择一名角色成为'+get.translation(event.usesha)+'的目标？',function(card,player,target){
           if(target==trigger.player) return false;
            if(target==player) return false;
            return lib.filter.targetEnabled2(event.usesha,player,target)&&get.distance(trigger.player,target,'attack')<=1;
        }).set('ai',function(target){
            return get.effect(target,event.usesha,player,player);
        });
       "step 5"
        if(result.bool){
            player.logSkill('qtpz_shezheng',result.targets[0]);
            player.useCard(event.usesha,result.targets[0]);
            if(!player.hasSkill('qtpz_shezheng_off')){
                player.addTempSkill('qtpz_shezheng_off','roundStart');
            }
            //event.goto(2);
        }
        else{
            //event.goto(2);
        }  
    },
            },
            "qtpz_yingshi":{
				audio:"ext:金庸群侠传:4",
                trigger:{
                    player:["useCard","respond"],
                },
                forced:true,
                filter:function (event,player){
        if(player==_status.currentPhase) return false; 
        return event.card&&event.card.name=='sha';
    },
                content:function (){
        player.draw();
    },
            },
	 "qtpz_zhucheng":{
                group:["qtpz_zhucheng1"],
                marktext:"城",
                audio:"ext:金庸群侠传:4",
                trigger:{
                    global:"gameDrawAfter",
                },
                forced:true,
                init:function (player){
        player.storage.qtpz_zhucheng=[];
    },
                content:function (){
        "step 0"
        player.draw(4);
        "step 1"
        if(player.countCards('he')){
            player.chooseCard('将'+get.cnNumber(4)+'张手牌置于武将牌上作为“城”',4,true);
        }
        else{
            event.finish();
        }
        "step 2"
        if(result.cards&&result.cards.length){
            player.lose(result.cards,ui.special);
            player.storage.qtpz_zhucheng=player.storage.qtpz_zhucheng.concat(result.cards);
            player.syncStorage('qtpz_zhucheng');
            player.markSkill('qtpz_zhucheng');
            game.log(player,'将',result.cards,'置于武将牌上作为“城”');
        }
    },
                intro:{
                    content:"cards",
                },
            },
            "qtpz_zhucheng1":{               
                trigger:{
                    global:"phaseDrawBegin",
                },
                content:function (){
        "step 0"
		game.playJY(['qtpz_zhucheng1','qtpz_zhucheng2','qtpz_zhucheng3','qtpz_zhucheng4'].randomGet());
        event.cards=get.cards(2);
        var cards=event.cards;
            var content=['牌堆顶的两张牌',cards];
            game.log(player,'观看了牌堆顶的两张牌');
            player.chooseControl('ok').set('dialog',content);
        "step 1"
        player.storage.qtpz_zhucheng=player.storage.qtpz_zhucheng.concat(event.cards);      
        "step 2"
        player.chooseCardButton(player.storage.qtpz_zhucheng,true,'将顺序将牌置于牌堆顶（先选择的在上）',2);
         "step 3"
         player.storage.qtpz_zhucheng.remove(result.links);
         var cardss=result.links.slice(0);
        for(var i=cardss.length-1;i>=0;i--){
            ui.cardPile.insertBefore(cardss[i],ui.cardPile.firstChild);
            }
         "step 4"
          player.syncStorage('qtpz_zhucheng');
          player.markSkill('qtpz_zhucheng');
    },
            },
            "qtpz_xuezhuang":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"dying",
                },
                frequent:true,
                priority:10,
                content:function (){
       player.draw();
    },
            },
	"qtpz_handao":{
		audio:"ext:金庸群侠传:2",
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event){
        if(!event.card||event.card.name!='sha'||!event.notLink()) return false;
        if(!event.player.countCards('h'))return true;
        if(!event.player.getEquip(2)) return true;
        if(event.player.hp==1) return true
        return false;
    },
                forced:true,
                content:function (){
        var num2=0;
        if(!trigger.player.countCards('h')) num2++;
        if(!trigger.player.getEquip(2)) num2++;
        if(trigger.player.hp==1) num2++;
        
        trigger.num+=num2;
    },
                ai:{
                    damageBonus:true,
                },
            },
            "qtpz_hanzhan":{
                audio:"ext:金庸群侠传:2",
                usable:1,
                enable:"phaseUse",
                prompt:"失去一点体力或体力上限",
                content:function (){
        "step 0"
        player.chooseControl('流失体力','失去一体力上限',function(event,player){
            if(player.hp==player.maxHp) return '流失体力';
            if(player.hp<player.maxHp-1||player.hp<=2) return '失去一体力上限';
            return '流失体力';
        });
        "step 1"
        if(result.control=='流失体力'){
            player.loseHp();
        }
        else{
            player.loseMaxHp(true);
        }
    },
                group:["qtpz_hanzhan_discard"],
                subSkill:{
                    discard:{
                        trigger:{
                            player:["loseHpEnd","loseMaxHpEnd"],
                        },
                        prompt:"每当你流失一体力或失去一体力上限后你可以令其他角色弃置一张牌。",
                        check:function (event,player){
                var num=0;
               for(var e=0;e<game.players.length;e++){
                    if(game.players[e]!=player){   
                        var att=get.attitude(player,game.players[e]);
                        var hes=game.players[e].countCards('he')
                        if(att>0&&hes>0) num--;
                        if(att<0&&hes>0) num++;
                    }
                }
                if(num>0) return true;
                return false;
            },
                        content:function (){
                for(var e=0;e<game.players.length;e++){
                    if(game.players[e]!=player){   
                        if(game.players[e].countCards('he')){
                            player.line(game.players[e],'green');
                            game.players[e].chooseToDiscard(1,'he',true);
                        }
                    }
                }
            },
                        sub:true,
                    },
                },
                ai:{
                    result:{
                        player:function (player){
                var num=0;
               for(var e=0;e<game.players.length;e++){
                    if(game.players[e]!=player){   
                        var att=get.attitude(player,game.players[e]);
                        var hes=game.players[e].countCards('he')
                        if(att>0&&hes>0) num--;
                        if(att<0&&hes>0) num++;
                    }
                }
               if(num>0) return player.MaxHp-player.hp-1;
               return -1;
            },
                    },
                },
            },
            "qtpz_shuixiang":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"useCardToBefore",
                },
                priority:15,
                check:function (event,player){
        var card={name:'guohe'};
        var num1=get.effect(event.target,card,_status.event.player,player)
        var num2=get.effect(event.target,event.card,_status.event.player,player);
        if(num1>num2) return true;
        return false;
    },
                filter:function (event,player){
        if(event.card.name=='wuxie') return false;
        if(!event.target.countCards('hej')) return false;
        return get.type(event.card)=='trick'||get.type(event.card)=='delay';
    },
                content:function (){
        "step 0"
        trigger.cancel();
        "step 1"
        trigger.target.discardPlayerCard('hej',trigger.target,true);
    },
            },
	"qtpz_fenji":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"phaseDrawEnd",
                },
                check:function (event,player){
        var att=get.attitude(player,event.player);
        if(att>0) return true;
        if(att<=0){
            if(!event.player.canUse({name:'huogong'},player)) return true;
            if(event.player.countCards('h')<4) return true;
        }
        return false;
    },
                filter:function (event,player){
        if(event.player==player) return false;
        return event.player.countCards('h')>=2;
    },
                content:function (){
        "step 0"
        player.line(trigger.player,'green');
        event.hs=trigger.player.getCards('h');
        event.hs1=event.hs.randomGets(2);
        "step 1"
        player.showCards(event.hs1)
        "step 2"
        if(get.suit(event.hs1[0])!=get.suit(event.hs1[1])){
            if(player.countCards('h')>0&&trigger.player.canUse({name:'huogong'},player)){
                trigger.player.useCard({name:'huogong'},player);
            }
        }
        else{
            player.loseMaxHp();
        }    
    },
                ai:{
                    threaten:1.2,
                },
            },
            "qtpz_huashi":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"phaseUseBegin",
                },
                priority:15,
                check:function (event,player){
        if(event.player.countCards('h')<5) return false;
        if(player.maxHp<3) return false;
        if((player.maxHp-player.hp)<3) return false;
        return get.attitude(player,event.player)<=0;
    },
                filter:function (event,player){
       if(event.player==player) return false;
        return true;
    },
                content:function (){
        "step 0"  
        player.loseMaxHp();
        "step 1"  
        var controls=['heart','diamond','club','spade'];
           var str='请声明一种花色，其回合内不能使用打出你声明的花色';
        player.chooseControl(controls,ui.create.dialog(str,'hidden')).ai=function(){
            return Math.floor(Math.random()*controls.length);
        };
        "step 2"
        if(result.control){
            player.popup(result.control);
            player.line(trigger.player,'green');
            game.log(player,'声明了',result.control);
            //trigger.player.storage.qtpz_huashi=result.control;
            trigger.player.addTempSkill('qtpz_huashi_'+result.control);
        }
    },
                subSkill:{
                    heart:{
                        mark:true,
                        marktext:"♥️",
                        intro:{
                            content:"不能使用或打出♥️牌",
                        },
                        mod:{
                            cardEnabled:function (card,player){
                    if(get.suit(card)=='heart') return false;
                },
                            cardUsable:function (card,player){
                    if(get.suit(card)=='heart') return false;
                },
                            cardRespondable:function (card,player){
                    if(get.suit(card)=='heart') return false;
                },
                            cardSavable:function (card,player){
                    if(get.suit(card)=='heart') return false;
                },
                            targetInRange:function (card){
                    if(get.suit(card)=='heart') return false;
                },
                        },
                        sub:true,
                    },
                    diamond:{
                        mark:true,
                        marktext:"♦️",
                        intro:{
                            content:"不能使用或打出♦️牌",
                        },
                        mod:{
                            cardEnabled:function (card,player){
                    if(get.suit(card)=='diamond') return false;
                },
                            cardUsable:function (card,player){
                    if(get.suit(card)=='diamond') return false;
                },
                            cardRespondable:function (card,player){
                    if(get.suit(card)=='diamond') return false;
                },
                            cardSavable:function (card,player){
                    if(get.suit(card)=='diamond') return false;
                },
                            targetInRange:function (card){
                    if(get.suit(card)=='diamond') return false;
                },
                        },
                        sub:true,
                    },
                    club:{
                        mark:true,
                        marktext:"♣️",
                        intro:{
                            content:"不能使用或打出♣️牌",
                        },
                        mod:{
                            cardEnabled:function (card,player){
                    if(get.suit(card)=='club') return false;
                },
                            cardUsable:function (card,player){
                    if(get.suit(card)=='club') return false;
                },
                            cardRespondable:function (card,player){
                    if(get.suit(card)=='club') return false;
                },
                            cardSavable:function (card,player){
                    if(get.suit(card)=='club') return false;
                },
                            targetInRange:function (card){
                    if(get.suit(card)=='club') return false;
                },
                        },
                        sub:true,
                    },
                    spade:{
                        mark:true,
                        marktext:"♠️",
                        intro:{
                            content:"不能使用或打出♠️牌",
                        },
                        mod:{
                            cardEnabled:function (card,player){
                    if(get.suit(card)=='spade') return false;
                },
                            cardUsable:function (card,player){
                    if(get.suit(card)=='spade') return false;
                },
                            cardRespondable:function (card,player){
                    if(get.suit(card)=='spade') return false;
                },
                            cardSavable:function (card,player){
                    if(get.suit(card)=='spade') return false;
                },
                            targetInRange:function (card){
                    if(get.suit(card)=='spade') return false;
                },
                        },
                        sub:true,
                    },
                },
            },
            "qtpz_shidu":{
                group:["qtpz_shidu_tao"],
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:["shaBefore","huogongBefore"],
                    target:["shaBefore","huogongBefore"],
                },
                filter:function (event,player){
        if(event.card.name=='huogong') return true;
        return event.card.nature=='fire';
    },
                forced:true,
                content:function (){
        player.gainMaxHp();
    },
                ai:{
                    effect:{
                        target:function (card,player,target){
                if(card.name=='huogong'||(card.name=='sha'&&card.nature=='fire')) return [1,0.3];
            },
                        player:function (card,player,target){
                if(card.name=='huogong'||(card.name=='sha'&&card.nature=='fire')) return [1,0.5];
            },
                    },
                },
            },
            "qtpz_shidu_tao":{
                audio:"ext:金庸群侠传:2",
                enable:"chooseToUse",
                filterCard:function (card){
        return card.name=='huogong'||(card.name=='sha'&&card.nature=='fire');
    },
                position:"h",
                viewAs:{
                    name:"tao",
                },
                prompt:"将一张【火攻】或【火杀】当桃使用",
                check:function (card){return 15-get.value(card)},
                ai:{
                    skillTagFilter:function (player){
            return (player.countCards('h','sha',{nature:'fire'})+player.countCards('h','huogong'))>0;
        },
                    threaten:0.3,
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
"qtpz_libing":{
	audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"equipEnd",
                },
                filter:function(event,card,player){
return get.subtype(event.card)=='equip1';
},
                filterTarget:function(card,player,target){
        
        if(ui.selected.targets.length==1&&get.distance(trigger.player,target)<=trigger.player.getAttackRange()){
        return target.canUse({name:'sha'},ui.selected.targets[0]);
       }
       
        return true;
       },
                content:function(){
                    "step 0"
                    player.chooseTarget(get.prompt('qtpz_libing'),function(card,player,target){
                        if(trigger.player==target) return false;
                        return trigger.player.canUse({name:'sha'},target);
                    }).set('ai',function(target){
                        return get.effect(target,{name:'sha'},_status.event.player);
                    });
                    "step 1"
                    if(result.bool){
                        player.logSkill('qtpz_libing',trigger.player);
                        trigger.player.useCard({name:'sha'},result.targets[0],false);
                    }                       
    },
                ai:{
                    threaten:function(player,target){
            return 1.6;
        },
                },
            },
            "qtpz_shujia":{
                trigger:{
                    source:"damageEnd",
                },
                filter:function(event,player){
    return event.player&&event.player.getEquip(2)!=undefined&&event.card.name=='sha';
    },
                priority:5,
                audio:"ext:金庸群侠传:2",
                content:function(){
     trigger.player.$give(trigger.player.getEquip(2),player);
     player.gain(trigger.player.getEquip(2),trigger.player);
     },
            },

},

 translate:{
	 "qtpz_weihutou":"韦虎头",
            "qtpz_fuyin":"父荫",
            "qtpz_fuyin_info":"锁定技,摸牌阶段开始时，你可以放弃摸牌。然后声明大或小，并亮出牌堆顶七张牌，若你声明大，你获得其中点数大于七的牌，若你声明小，你获得其中点数小于七的牌，若其中至少有一张点数为七的牌，你获得亮出的所有牌。",
            "qtpz_mengtong":"蒙童",
            "qtpz_mengtong_info":"每轮限一次，一名角色的判定牌生效前，你可以任意改变此牌的花色。",
            "测试蒙童":"测试蒙童",
            "测试蒙童_info":"一名角色的判定牌生效前，你可以任意改变此牌的花色。",
	 "qtpz_weixiaobao":"韦小宝",
            "qtpz_yabao":"押宝",
            "qtpz_yabao_info":"出牌阶段限一次，你可以扣置一张点数为5~9的手牌，称为“宝”，然后你令至多四名其他角色各扣置一张手牌，然后你声明大或小，最后你与其他角色展示扣置的牌。若你：声明大，你获得其中点数大于“宝”的牌；声明小，你获得点数小于“宝”的牌。若其中至少有一张与“宝”点数相同，你获得所有其他角色展示的牌。",
            "qtpz_qiaoshe1":"巧舌",
            "qtpz_qiaoshe1_info":"",
            "qtpz_qiaoshe":"巧舌",
            "qtpz_qiaoshe_info":"主公技。当你进入濒死状态时，其他蜀势力角色可以展示牌堆顶7张牌，并令你使用其中的一张酒或桃。",
	 "qtpz_yuanchengzhi":"袁承志",
            "破阵":"破阵",
            "破阵_info":"你使用杀无视目标防具，且造成伤害后你可以弃置目标装备区里的防具牌。",
            "qtpz_dangkou":"荡寇",
            "qtpz_dangkou_info":"每回合限一次，当你使用的普通锦囊牌结算完后，若此牌没有造成伤害，你可以弃置此牌至多两名目标各一张牌。",
            "qtpz_jiangmen":"将门",
            "qtpz_jiangmen_info":"主公技。其他吴势力角色出牌阶段开始时，其可以交给你一张锦囊牌，然后其摸1张牌。",
            "qtpz_pozhen":"破阵",
            "qtpz_pozhen_info":"你使用杀对目标造成伤害后，该目标可以选择你攻击范围内另一名不是此杀目标的角色，然后你对其选择的角色使用此杀。",
	  "qtpz_xieyanke":"谢烟客",
            "qtpz_tieling":"铁令",
            "qtpz_tieling_info":"每名其他角色限一次，其出牌阶段，可令你回复1点体力或摸2张牌，然后其获得一枚“玄铁令”标记。每局限三次。",
            "qtpz_jieyou":"解忧",
            "qtpz_jieyou_info":"锁定技。当你成为获得过“玄铁令”标记的角色使用的黑色牌的目标时，取消之。",
            "qtpz_sunuo1":"夙诺",
            "qtpz_sunuo1_info":"",
            "qtpz_sunuo":"夙诺",
            "qtpz_sunuo_info":"其他角色出牌阶段，其可移除其“玄铁令”标记并选择未被选择过的一项：获得你装备区里的一张牌；令你将一张手牌当其声明的普通锦囊牌使用；令你对其选择的另一名其他角色造成一点伤害。",
	 "qtpz_tianguinong":"田归农",
            "qtpz_tudu":"涂毒",
            "qtpz_tudu_info":"其他角色使用普通杀时，你可以令此牌视为火杀，然后若此杀造成了伤害，你摸一张牌并将一张手牌置于武将牌上，称为“残图”。",
            "qtpz_xingxun":"刑讯",
            "qtpz_xingxun_info":"限定技。出牌阶段，若你的武将牌上有“残图”，你可以令所有其他角色依次将一张手牌当“残图”置于你的武将牌上（须与“残图”已包含的花色均不相同）。否则其受到你的2点伤害。",
            "qtpz_xuncai":"徇财",
            "qtpz_xuncai_info":"出牌阶段，若你的“残图”有四种花色，你可以展示牌堆顶7张牌，然后你选择获得其中某个花色的所有牌，并将其余牌和“残图”置入弃牌堆。",
	  "qtpz_kasili":"喀丝丽",
            "qtpz_daogao":"祷告",
            "qtpz_daogao_info":"游戏开始时，你将牌堆顶7张牌当“贺兰石”正面向上置于你的武将牌上。一名角色出牌阶段限一次，其可以用一张手牌替换一张“贺兰石”牌，然后若其用于替换的牌与其余“贺兰石”牌点数均不同，其摸一张牌，否则其弃置一张牌。",
            "qtpz_daogao1":"祷告1",
            "qtpz_daogao1_info":"",
            "qtpz_shenyu":"神谕",
            "qtpz_shenyu_info":"出牌阶段开始时，若“贺兰石”牌点数均不同，你可以获得其中的红桃牌并从牌堆将“贺兰石”牌补至7张，然后你可以弃置至多三名男性角色装备区里的一张牌。",
	 "qtpz_huatiegan":"花铁干",
            "qtpz_jiaoxie":"缴械",
            "qtpz_jiaoxie_info":"限定技。当你进入濒死状态时，你可以弃置你装备区里的所有牌（至少一张），然后回复2点体力。",
            "qtpz_ruxue":"茹血",
            "qtpz_ruxue_info":"锁定技，一名角色死亡后，你获得一枚“啖尸”标记。每当你需要使用桃时，你可以移除一枚“啖尸”标记，视为你使用了此牌。",
            "qtpz_guming":"沽名",
            "qtpz_guming_info":"觉醒技。准备阶段开始时，若场上有已死亡的角色，且你没有“啖尸”标记，你减一点体力上限并失去“茹血”，获得“盟举”。",
            "qtpz_minjiu":"盟举",
            "qtpz_minjiu_info":"摸牌阶段开始时，你可以改为摸x张牌，若如此做，你此回合的手牌上限为x（x为已死亡的角色数）。",
	 "qtpz_chengbenzhi":"程本直",
            "qtpz_yuanbian":"辩冤",
            "qtpz_yuanbian_info":"每回合限一次，其他角色使用基本牌或普通锦囊牌指定其他角色为唯一目标后。你可以判定，若为黑色，则取消之；若为红色，你也成为此牌的目标。",
            "qtpz_tongzui":"同罪",
            "qtpz_tongzui_info":"当一名角色使用牌指定包含你在内的至少两名目标后，你可以令此牌的所有目标失去一点体力。",
	  "qtpz_ajiu":"阿九",
            "qtpz_guoshang":"国殇",
            "qtpz_guoshang_info":"锁定技。当你成为梅花牌的目标时，你摸1张牌。",
            "qtpz_fuchao":"覆巢",
            "qtpz_fuchao_info":"一名角色使用牌的结算结束后，若有目标受到此牌的伤害，则你可以令未受到此牌伤害的目标各弃一张牌。一名横置的角色受到伤害/回复体力后，你可以令其他横置的角色弃置/摸一张牌。",
	 "qtpz_yuyutong":"余鱼同",
            "qtpz_gaifu":"慨赴",
            "qtpz_gaifu_info":"出牌阶段限一次，你可以失去一点体力或横置你的武将牌，选择至多两名其他角色，横置或重置其武将牌。",
            "qtpz_wuxian":"陷误",
            "qtpz_wuxian_info":"回合结束时，你可以弃置所有手牌（至少一张），然后你摸X张牌（X为你已损失的体力值）。",
	  "qtpz_liyan":"李岩",
            "qtpz_quanzhen":"劝赈",
            "qtpz_quanzhen_info":"每轮限一次，一名角色获得牌后，若其手牌数为唯一最多，你可以令其将一张手牌当“五谷丰登”使用，且其不能成为此牌的目标。",
            "qtpz_honglve":"鸿略",
            "qtpz_honglve_info":"出牌阶段开始时，你可以弃置一张锦囊牌。若此牌为红色，本阶段内你使用桃时可额外回复一点体内；若为黑色，你本回合内使用黑色牌造成的伤害+1。",
	 "qtpz_miaorenfeng":"苗人凤",
            "qtpz_fengpo":"凤魄",
            "qtpz_fengpo_info":"你使用杀指定目标后，你可以弃置一张手牌，若如此做，目标须展示手牌并弃置与你弃置的牌花色相同的所有手牌。",
            "qtpz_yujie":"郁结",
            "qtpz_yujie_info":"你使用牌造成伤害后，你可以将此牌交给此牌的一名目标，然后若其手牌大于其体力值，你摸1张牌。",
	  "qtpz_chenglingsu":"程灵素",
            "qtpz_zhidu":"植毒",
            "qtpz_zhidu_info":"出牌阶段限一次，你可以将一张黑色手牌正面向上置于牌堆前7张任意位置，称为“七心海棠”。锁定技，于摸牌阶段获得“七心海棠”牌的角色受到一点无来源的的火焰伤害。",
            "qtpz_zhidu1":"植毒",
            "qtpz_zhidu1_info":"",
            "qtpz_xianghun":"香魂",
            "qtpz_xianghun_info":"一名角色受到属性伤害后，你可以令其摸1张牌。",
	  "qtpz_zhuyoujian":"朱由检",
            "qtpz_zuiji":"罪己",
            "qtpz_zuiji_info":"锁定技。每当你使用或打出第四种花色的牌后，你摸2张牌。回合结束时，若你未于本回合摸牌阶段外获得过牌，你须选择一项：失去1点体力；你翻面。",
            "qtpz_youqin":"忧勤",
            "qtpz_youqin_info":"其他角色出牌阶段开始时，你可以弃置一张手牌，观看其至多X张手牌并使用其中一张牌（X为其体力值）。",
            "qtpz_gangbi":"刚愎",
            "qtpz_gangbi_info":"主公技。锁定技。当你成为其他吴势力角色使用的普通锦囊牌的目标时，取消之并摸1张牌。",
	 "qtpz_aobai":"鳌拜",
            "qtpz_shezheng":"摄政",
            "qtpz_shezheng_info":"每轮限一次，其他角色的杀因弃置而进入弃牌堆后，你可以对其攻击范围内的一名其他角色使用此杀。",
            "qtpz_yingshi":"营私",
            "qtpz_yingshi_info":"锁定技。每当你于回合外使用或打出杀后，你摸1张牌。",
	  "qtpz_wuzixu":"伍子胥",
            "qtpz_zhucheng":"筑城",
            "qtpz_zhucheng_info":"游戏开始前，共发你8张牌，选4张作为手牌，其余的牌置于武将牌上，称为“城”。每当一名角色摸牌阶段开始时，你可以观看牌堆顶2张牌，然后用至多两张“城”，替换其中等量的牌。",
            "qtpz_zhucheng1":"筑城",
            "qtpz_zhucheng1_info":"",
            "qtpz_xuezhuang":"血状",
            "qtpz_xuezhuang_info":"一名角色进入濒死状态时，你可以摸一张牌。",
	  "qtpz_xuedaolaozhu":"血刀老祖",
            "qtpz_handao":"悍刀",
            "qtpz_handao_info":"锁定技。你使用杀造成伤害时，目标每满足以下任意一项，此杀伤害+1：体力值为1；没有手牌；没有装备防具牌。",
            "qtpz_hanzhan":"酣战",
            "qtpz_hanzhan_info":"出牌阶段，你可以失去一点体力或减少一点体力上限。每当你失去一点体力或减少一点体力上限后，你可以令所有其他角色弃置一张牌。",
            "qtpz_shuixiang":"说降",
            "qtpz_shuixiang_info":"每当你使用锦囊牌指定目标后，若其区域内有牌，你可以令其弃置其中一张牌，然后此牌对其无效。",
	 "qtpz_haidafu":"海大富",
	 "qtpz_fenji":"愤激",
            "qtpz_fenji_info":"其他角色摸牌阶段结束时，你可以展示其两张手牌。若花色不同，视为其对你使用一张火攻，否则你减一点体力上限。",
            "qtpz_huashi":"化尸",
            "qtpz_huashi_info":"其他角色出牌阶段开始时，你可以失去一点体力上限，然后声明一种花色，其此回合不能使用或打出该花色的牌。",
            "qtpz_shidu":"嗜毒",
            "qtpz_shidu_info":"锁定技，当你使用火杀或火攻指定目标或成为此牌的目标时，你加一点体力上限。你可以将火杀或火攻当桃使用。",
            "qtpz_shidu_tao":"嗜毒_桃",
            "qtpz_shidu_tao_info":"",
	 "qtpz_aqing":"阿青",
	  "qtpz_libing":"厉兵",
            "qtpz_libing_info":"一名角色的装备区里置入一张兵器牌时，你可以令其视为对其攻击范围内由你选择的另一名角色使用一张杀。其以此法使用的杀不计入回合内次数。",
            "qtpz_shujia":"束甲",
            "qtpz_shujia_info":"每当你使用杀造成伤害后，若其装备区里有防具牌，你可以获得之。",
			},
};

if(lib.device||lib.node){
				for(var i in qtpz.character){qtpz.character[i][4].push('ext:金庸群侠传/'+i+'.jpg');}
			}else{
				for(var i in qtpz.character){qtpz.character[i][4].push('db:extension-金庸群侠传:'+i+'.jpg');}
			}
			return qtpz;
		});
		lib.config.all.characters.push('qtpz');
		if(!lib.config.characters.contains('qtpz')) lib.config.characters.remove('qtpz');
		lib.translate['qtpz_character_config']='其他篇章';
		
		
	game.import('character',function(){
			var sdyx={
				name:'sdyx',
				connect:true,
				character:{
					"sdyx_huangyaoshi":["male","wei",3,["sdyx_cihuai","sdyx_qushang"],[]],
            "sdyx_guojing":["male","qun",4,["sdyx_jianchi","sdyx_yuzhong"],[]],            
            "sdyx_xguojing":["male","wei",4,["sdyx_danxin","sdyx_polu","sdyx_longyin"],['zhu']],
"sdyx_zhebie":["male","qun",4,["sdyx_sheqi","sdyx_guifu"],[]],
"sdyx_ouyangfeng":["male","qun",4,["sdyx_shezhang","sdyx_duxi","sdyx_nijing"],[]],
"sdyx_fengheng":["female","wei",6,["sdyx_moshu","sdyx_cuixin"],[]],
	"sdyx_huangrong":["female","wei",3,["sdyx_qingshi","sdyx_qiaoyan","sdyx_qimen"],[]],	
	"sdyx_zhoubotong":["male","wei",3,["sdyx_mingwan","sdyx_shouxun"],[]],
	"sdyx_ouyanke":["male","qun",4,["sdyx_mushe","sdyx_zhijie"],[]],
	"sdyx_hongqigong":["male","wei",3,["sdyx_xiangyan","sdyx_shouming"],[]],
	 "sdyx_qiuqianren":["male","wei",4,["sdyx_tiezhang","sdyx_huolian"],[]],
	
},

characterIntro:{
					"sdyx_huangrong":"桃花岛主黄药师与冯衡的独生女，精通父亲传授的桃花岛武功、五行八卦阵和奇门遁甲术。黄蓉集天地灵气而于一身，冰雪聪明、玲珑剔透、博古通今，精通琴棋书画、厨艺了得。曾凭借聪明才智多次化解危险。与郭靖一生相恋、患难与共，全心全意助旺他，后辅佐夫君保家卫国，竭尽所能。【CV：仙女桥】",
					"sdyx_zhoubotong":"周伯通是王重阳的师弟，全真七子的师叔。天性纯真，爱作弄别人，故有“老顽童”之称。他不拘小节，与晚辈郭靖结拜为兄弟，教他左右互博术和空明拳。王重阳在第一次华山论争中胜出，得到秘籍《九阴真经》，临终前托咐周伯通好好保管，切不练习书中的武功。周伯通虽贪玩，但一生恪守师兄遗训。【CV：神齐大叔】",
					"sdyx_fengheng":"东邪黄药师之妻，黄蓉之母，有过目不忘的本领，曾为黄药师得到《九阴真经》，向周伯通借阅通读一遍，并谎称此书是假的，周伯通盛怒之下撕毁此书，之后冯蘅凭高超的记忆能力一字不漏地默写了一本，并成为孤本。多年后，此书被梅超风盗走，其为重新默写经书，心力交瘁，难产而死。【CV：仙女桥】",
					"sdyx_ouyangfeng":"欧阳锋，西域白驼山庄庄主，武功登峰造极，为“天下五绝”之一。曾用蛇毒暗算试图救自己的洪七公。为在华山论剑中得到天下第一的名号而急功近利，因逆练郭靖乱改的《九阴真经》而疯。后来与洪七公在华山比武，欧阳锋恢复记忆，两人释怀大笑，互相拥抱而逝。【CV：青灯折扇不语】",
				    "sdyx_xguojing":"郭靖在第三次“华山论剑”时，继承师父“北丐”洪七公的北位，成为了“北侠”，与一灯、周伯通、黄药师和杨过合称为“新五绝”。后蒙古军南侵，郭靖夫妇用“二十八宿大阵”大战蒙古军。出任武林盟主后，率领一家人死守襄阳城，最后与妻子黄蓉及小儿子郭破虏一同战死。【CV：青灯折扇不语】",          
                    "sdyx_zhebie":"哲别最初是铁木真的敌人，曾将铁木真从马上射下。兵败后身受重伤的他躲藏到幼年郭靖家中。郭靖敬佩其神勇，宁死也不将其行踪告知铁木真之子术赤。在术赤杀即将死郭靖的一瞬间，哲别将其救下。哲别佩服铁木真雄才伟略而归于旗下。哲别箭术惊人，在铁木真麾下立下不少战功，更推荐郭靖成为铁木真的助手。【CV：觅阳】",
                    "sdyx_huangyaoshi":"桃花岛主黄药师因个性离经叛道、狂傲不羁、性情孤僻、身形飘忽、有如鬼魅，人称“东邪”。其妻冯氏阿蘅因苦忆《九阴真经》殚心而逝，黄药师为表追思之情，终生未得续弦。郭靖和欧阳克上岛提亲，黄岛主连出三道题目对其进行考试，考试题目无一不与音律与亡妻相关，足见其用情之深。【CV：觅阳】",
                    "sdyx_guojing":"郭啸天在临安牛家村遭段天德杀害，遗孀李萍为逃避追杀而隐居蒙古大漠，郭靖随母自幼在蒙古部落长大，机缘巧合救下勇士哲别，遂拜其为师，习得高超的射箭本领，可百步穿杨，曾一箭双雕，技惊四座。与铁木真四子拖雷结拜为安答。曾多次相救铁木真，并助其统一多个蒙古部落。【CV：稳得高处】",					
					"sdyx_qiuqianren":"裘千仞是为铁掌帮帮主，有一双胞胎大哥裘千丈和妹妹裘千尺。成名绝学为铁砂掌，江湖人称铁掌水上漂。为在第一次华山论剑中除掉一个强劲对手，打伤南帝段智兴贵妃瑛姑的儿子，想耗费段智兴的真气使他无法获胜。但这是瑛姑和周伯通的私生子，段智兴因而不救，裘千仞计谋失利。【CV：蚩宇】",
					"sdyx_hongqigong":"洪七公为丐帮帮主，为人正义，生性贪吃，曾经因贪吃误事，自断其右手食指，故人称“九指神丐”。离开桃花岛时，在船上被欧阳锋用蛇毒暗袭所伤，于明霞岛上授位给黄蓉并亲授其打狗棒法，以策万全。曾在黄蓉的死缠烂打、美食引诱下，将独门武学降龙十八掌传授给爱徒郭靖。【CV：主人】",
					},
				characterTitle:{
					"sdyx_huangrong":"Sukincen",
					"sdyx_qiuqianren":"落影丶逝尘",
					"sdyx_hongqigong":"落影丶逝尘",
					"sdyx_ouyanke":"落影丶逝尘",
					"sdyx_zhoubotong":"落影丶逝尘",
					"sdyx_fengheng":"落影丶逝尘",
					"sdyx_ouyangfeng":"落影丶逝尘",
					 "sdyx_xguojing":"朱阳光",          
           "sdyx_zhebie":"落影丶逝尘",
            "sdyx_huangyaoshi":"落影丶逝尘",
            "sdyx_guojing":"落影丶逝尘",	
					
				},
				perfectPair:{
			//"jyqxz_sdyx_tian":['jyqxz_sdyx_shixing'],
					},
								
skill:{	
"sdyx_tiezhang":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    source:"damageEnd",
                },
                filter:function (event){
        return event.card&&event.card.name=='sha'&&get.suit(event.card);
    },
                direct:true,
                content:function (){
          'step 0'
        player.chooseTarget(get.prompt('sdyx_tiezhang'),function(card,player,target){
            var suits=get.suit(trigger.card);
            var ej=target.getDiscardableCards(player,'ej');
            for(var i=0;i<ej.length;i++){
                if(get.suit(ej[i])==suits) return true;
            }
            return false;
        }).set('ai',function(target){
            var att1=get.attitude(player,target);
            if(att1>0&&target.getDiscardableCards(player,'j')) return 1;
            if(att1<0&&target.getDiscardableCards(player,'e')) return 1;
            return -1;
        });
        'step 1'
        if(result.bool){
            player.logSkill('sdyx_tiezhang',result.targets);
            event.target=result.targets[0];
            var skr='选择一张与'+get.translation(trigger.card)+'花色相同的牌令其弃置之';
            player.discardPlayerCard(event.target,1,'ej',true).set('filterButton',function(button){
                var suits=get.suit(trigger.card);
                if(get.suit(button.link)!=suits) return false;
                return true;
            }).set('ai',function(button){
                var att1=get.attitude(player,event.target);               
                if(att1<=0){
                    if(get.position(button.link)!='j') return 1;
                    return -1;
                }
                if(att1>0){
                    if(get.position(button.link)=='j') return 1;
                    return -1;
                }
                return -1;
            }); 
        }
        else{
            event.finish();
        }
    },
            },
            "sdyx_huolian":{
                 audio:"ext:金庸群侠传:2",
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        if(game.countPlayer()<3) return false;
        return true;
    },
                filterTarget:function (card,player,target){
        if(player==target) return false;
        if(ui.selected.targets.length==0){
            //if(target.countCards('he')==0) return false;
            var cardss={name:'sha'};
            return lib.filter.targetEnabled2(cardss,player,target);
        }
        if(ui.selected.targets.length==1){
            return get.distance(ui.selected.targets[0],target,'attack')<=1;
        }
        return true;
    },
                targetprompt:["令其交出牌","获得牌"],
                selectTarget:2,
                multitarget:true,
                content:function (){
        "step 0"
        event.tar1=targets[0];
        event.tar2=targets[1];
        player.line(event.tar1,'green');
        "step 1"
        var next=event.tar1.chooseCard(1,'he','是否选择一张红桃牌给'+get.translation(event.tar2)+'?否则'+get.translation(player)+'视为对你使用一张杀。',function(card,player){
            return get.suit(card)=='heart';
        });
        var att1=get.attitude(event.tar1,event.tar2);
        next.ai=function(card){
            if(att1>0){
                return 1;
            }
            if(event.tar1.hasShan()){
                return -1;
            }
            return 4-get.value(card);
        };
        "step 2"
        if(result.bool){
            event.tar1.line(event.tar2,'green');
            event.tar2.gain(result.cards[0],event.tar1);
            event.tar1.$give(result.cards.length,event.tar2);
            game.delay(0.7);
        }
        else{
            player.useCard({name:'sha'},event.tar1,false);
        }
    },
                ai:{
                    order:2.9,
                    result:{
                        target:function (player,target){
                if(ui.selected.targets.length==0){
                    return -3;
                }
                else{
                    return 0.5;
                }
            },
                    },
                    expose:0.4,
                    threaten:1.4,
                },
            },
"sdyx_xiangyan":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"damageEnd",
                },
                frequent:true,
                filter:function (event){
        return (event.num>0)
    },
                content:function (){
        "step 0"
        event.cards=get.cards(5);
        if(event.isMine()==false){
            event.dialog=ui.create.dialog('sdyx_xiangyan',event.cards);
            game.delay(2);
        }
        "step 1"
        if(event.dialog) event.dialog.close();
        var dialog=ui.create.dialog('sdyx_xiangyan',event.cards);
        player.chooseButton([0,5],dialog,true).set('ai',function(button){
            return get.value(button.link);
        }).filterButton=function(button){
            for(var i=0;i<ui.selected.buttons.length;i++){
                if(get.type(button.link)==get.type(ui.selected.buttons[i].link)) return false;
            }
            return true;
        }
        "step 2"
        var cards2=[];
        for(var i=0;i<result.buttons.length;i++){
            cards2.push(result.buttons[i].link);
            cards.remove(result.buttons[i].link);
        }
        player.gain(cards2,'log');
        if(cards2.length) player.$gain2(cards2);
        for(var i=0;i<cards.length;i++){
            cards[i].discard();
        }
        game.delay(2);
    },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                    effect:{
                        target:function (card,player,target){
                if(player.hasSkillTag('jueqing',false,target)) return [1,-1];
                if(get.tag(card,'damage')) return [1,0.55];
            },
                    },
                },
            },
            "sdyx_shouming":{
				audio:"ext:金庸群侠传:2",
                derivation:["tlbb_xianglong"],
                subSkill:{
                    off:{
                        mark:true,
                        intro:{
                            content:"本轮已发动",
                        },
                        sub:true,
                    },
                },
                trigger:{
                    global:"phaseUseBegin",
                },
                direct:true,
                filter:function (event,player){
        if(player.hasSkill('sdyx_shouming_off')) return false;
        if(event.player==player) return false;
        if(!player.countCards('he',{type:'equip'})) return false;
        return player.isDamaged();
    },
                content:function (){
        "step 0"
        var next=player.chooseCard(1,'he','是否选择一张装备交给'+get.translation(trigger.player)+'然后其获得【降龙】直到回合结束？',function(card,player){
            return get.type(card)=='equip';
        });
        var att=get.attitude(_status.event.player,trigger.player);
        next.ai=function(card){
            if(att>2&&trigger.player.hasSha()){
                if(get.subtype(card)=='equip1'&&!trigger.player.getEquip(1)) return 1;
                if(get.subtype(card)=='equip2'&&!trigger.player.getEquip(2)) return 1;
                if(get.subtype(card)=='equip3'&&!trigger.player.getEquip(3)) return 1;
                if(get.subtype(card)=='equip4'&&!trigger.player.getEquip(4)) return 1;
                if(get.subtype(card)=='equip5'&&!trigger.player.getEquip(5)) return 1;
                return -1;
            }
            return -1;
        };
        "step 1"
        if(result.bool){
            player.logSkill('sdyx_shouming',trigger.player);
            player.line(trigger.player,'green');
            trigger.player.gain(result.cards[0],player);
            player.$give(result.cards.length,trigger.player);
            if(!player.hasSkill('sdyx_shouming_off')){
                player.addTempSkill('sdyx_shouming_off','roundStart');
            }
            if(!trigger.player.hasSkill('tlbb_xianglong')){
                trigger.player.addTempSkill('tlbb_xianglong');
            }
        }
        else{
            event.finish();
        }
    },
                ai:{
                    threaten:1,
                },
            },
 "sdyx_shezhang":{
                mod:{
                    attackFrom:function (from,to,distance){
            if(!from.getEquip(1)) return distance-3;
        },
                },
                trigger:{
                    player:"useCardToBefore",
                },
                priority:7,
                filter:function (event,player){
        if(player.getEquip(1)) return false;
        if(event.card.name=='sha'&&!event.card.nature) return true;
    },
                audio:"ext:金庸群侠传:2",
                check:function (event,player){
        var att=get.attitude(player,event.target);
        if(event.target.hasSkillTag('nofire')){
            return att>0;
        }
        return att<=0;
    },
                content:function (){
        trigger.card.nature='fire';
        trigger.naturefire=true;
        player.storage.sdyx_shezhang=trigger.card;
    },
                ai:{
                    effect:{
                        target:function (card,player,target){
                if(target.getEquip(1)) return;
                if(player==target&&get.subtype(card)=='equip1'){
                    var num=2;
                    if(target.hasSkill('sdyx_duxi')) num+=8;
                    if(get.equipValue(card)<=num) return 0;
                }
            },
                    },
                },
                group:["sdyx_shezhang_after"],
                subSkill:{
                    after:{
                        trigger:{
                            player:"useCardAfter",
                        },
                        filter:function (event,player){
                if(event.card.name!='sha') return false;
                return event.naturefire==true;;
            },
                        forced:true,
                        popup:false,
                        content:function (){
                "step 0"
                delete player.storage.sdyx_shezhang.nature;
                "step 1"
                delete player.storage.sdyx_shezhang;
                
            },
                        sub:true,
                    },
                },
            },
            "sdyx_duxi":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    source:"damageBegin",
                },
                direct:true,
                filter:function (event){
        if(!player.countCards('h',{suit:'spade'})) return false;
        return event.nature=='fire';
    },
                content:function (){
        "step 0"
        if(trigger.nature!='fire') event.finish();
        "step 1"
    var next=player.chooseToDiscard(1,'he','是否弃置一张黑桃牌令'+get.translation(trigger.player)+'受到的火焰伤害加一？',function(card,player){
        return get.suit(card)=='spade';
    });
    var att=get.attitude(_status.event.player,trigger.player);
    next.ai=function(card){
        if(att<0) {
            return 9-get.value(card);
        }
        return -1;
    };
    "step 2"
    if(result.bool){
        player.logSkill('sdyx_duxi',trigger.player);
        trigger.num++;
        }
    },
            },
            "sdyx_nijing":{
                audio:"ext:金庸群侠传:2",
                enable:"chooseToUse",
                filterCard:function (card){
        return card.name=='sha'&&card.nature=='thunder';
    },
                viewAs:{
                    name:"jiu",
                },
                viewAsFilter:function (player){
        if(!player.countCards('h','sha',{nature:'thunder'})) return false;
    },
                prompt:"将一张雷杀当酒使用",
                check:function (card){
        if(_status.event.type=='dying') return 1;
        return 6-get.value(card);
    },
                ai:{
                    skillTagFilter:function (player){
            return player.countCards('h','sha',{nature:'thunder'})>0&&player.hp<=0;
        },
                    threaten:1.5,
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
 "sdyx_mushe":{
                audio:"ext:金庸群侠传:2",
                enable:"phaseUse",
                usable:1,
                discard:false,
                prepare:"give2",
                filter:function (event,player){
        return player.countCards('h',{suit:'spade'});
    },
                filterCard:function (card){
        return get.suit(card)=='spade';
    },
                filterTarget:function (card,player,target){
        if(target.hasSkill('sdyx_mushe')) return false;
        return player!=target;
    },
                check:function (card){
        return 5-get.value(card);
    },
                content:function (){
        "step 0"
        target.gain(cards,player);
        // game.delay();
        "step 1"
        target.storage.sdyx_mushe=player;
        target.addSkill('sdyx_mushe_end');
        
    },
                ai:{
                    result:{
                        target:-0.5,
                    },
                    basic:{
                        order:9,
                    },
                },
                subSkill:{
                    end:{
                        mark:true,
                        marktext:"牧",
                        intro:{
                            content:"回合结束需要交出两张♠️牌或受到一点雷电伤害",
                        },
                        group:["sdyx_mushe_damage","sdyx_mushe_die"],
                        onremove:function (player){
                delete player.storage.sdyx_mushe;
            },
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        popup:false,
                        content:function (){
                "step 0"
                if(!player.storage.sdyx_mushe.isAlive()){
                    player.removeSkill('sdyx_mushe_end');
                    event.finish();
                }
                if(player.countCards('h',{suit:'spade'})<2){
                    player.damage(1,'thunder',player.storage.sdyx_mushe);
                    player.removeSkill('sdyx_mushe_end');
                    event.finish();
                }
                "step 1"
                var next=player.chooseCard(2,'he','是否选择两张黑桃牌交给'+get.translation(player.storage.sdyx_mushe)+'？，否则你受到其1点雷电伤害。',function(card,player){
                    return get.suit(card)=='spade';
                });
                var att1=get.attitude(player,player.storage.sdyx_mushe);
                next.ai=function(card){
                    if(att1>0){
                        return 1;
                    }
                    return 5-get.value(card);
                };
                "step 2"
                if(result.bool){
                    player.line(player.storage.sdyx_mushe,'green');
                    player.storage.sdyx_mushe.gain(result.cards,player);
                    player.$give(result.cards.length,player.storage.sdyx_mushe);
                    game.delay(0.7);
                }
                else{
                    player.damage(1,'thunder',player.storage.sdyx_mushe);
                }
                "step 3"
                player.removeSkill('sdyx_mushe_end');
        
            },
                        sub:true,
                    },
                    damage:{
                        trigger:{
                            source:"damageEnd",
                        },
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                if(_status.currentPhase!=player) return false;
                return event.nature=='thunder';
            },
                        content:function (){
                "step 0"
                if(_status.currentPhase!=player) event.finish();
                if(trigger.nature!='thunder') event.finish();
                "step 1"
                player.removeSkill('sdyx_mushe_end');
            },
                        sub:true,
                    },
                    die:{
                        trigger:{
                            player:"dieBegin",
                        },
                        forced:true,
                        popup:false,
                        content:function (){
                player.removeSkill('sdyx_mushe_end');
            },
                        sub:true,
                    },
                },
            },
            "sdyx_zhijie":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"phaseUseBegin",
                },
                filter:function (event,player){
       if(player.hasSkill('sdyx_zhijie_off')) return false;
       if(event.player==player) return false;
        return true;
    },
                check:function (event,player){
        return (get.attitude(player,event.player)<=0);
    },
                content:function (){
        "step 0"
        player.line(trigger.player,'green');
        if(!trigger.player.countCards('h',{suit:'spade'})){
            trigger.player.addTempSkill('sdyx_zhijie_spade');
            event.finish();
        }
         "step 1"
        var next=trigger.player.chooseCard(1,'he','是否选择一张黑桃牌给'+get.translation(player)+'?否则你不能使用黑桃牌。',function(card,player){
            return get.suit(card)=='spade';
        });
        var att1=get.attitude(trigger.player,player);
        next.ai=function(card){
            if(att1>0){
                return 1;
            }
            return 5-get.value(card);
        };
        "step 2"
        if(result.bool){
            trigger.player.line(player,'green');
            player.gain(result.cards[0],trigger.player);
            trigger.player.$give(result.cards.length,player);
            player.addTempSkill('sdyx_zhijie_off','roundStart');
            game.delay(0.7);
        }
        else{
            trigger.player.addTempSkill('sdyx_zhijie_spade');
        }
    },
                subSkill:{
                    off:{
                        mark:true,
                        intro:{
                            content:"本轮已失效",
                        },
                        sub:true,
                    },
                    spade:{
                        mark:true,
                        marktext:"♠️",
                        intro:{
                            content:"不能使用或打出♠️牌",
                        },
                        mod:{
                            cardEnabled:function (card,player){
                    if(get.suit(card)=='spade') return false;
                },
                            cardUsable:function (card,player){
                    if(get.suit(card)=='spade') return false;
                },
                            cardRespondable:function (card,player){
                    if(get.suit(card)=='spade') return false;
                },
                            cardSavable:function (card,player){
                    if(get.suit(card)=='spade') return false;
                },
                            targetInRange:function (card){
                    if(get.suit(card)=='spade') return false;
                },
                        },
                        sub:true,
                    },
                },
            },
 "sdyx_mingwan2":{
	  audio:"ext:金庸群侠传:3",
                mark:true,
                marktext:"判",
                intro:{
                    content:"下个回合判定阶段移出牌阶段后",
                },
                trigger:{
                    player:"phaseBefore",
                },
                forced:true,
                priority:Infinity,
                content:function (){
        'step 0'
        trigger.cancel();
        player.phaseSkipped=false;
        'step 1'
        player.removeSkill('sdyx_mingwan2');
        if(player.skipList.contains('phase')){
            player.skipList.remove('phase');
            event.trigger('phaseSkipped');
            event.finish();
        }
       'step 2'
       event.trigger('phaseBefore');
       game.delay();
        'step 3'
        if((player==_status.roundStart||_status.roundSkipped)&&!trigger.skill){
            delete _status.roundSkipped;
            game.roundNumber++;
            if(ui.cardPileNumber) ui.cardPileNumber.innerHTML=game.roundNumber+'轮 剩余牌: '+ui.cardPile.childNodes.length;
            for(var i=0;i<game.players.length;i++){
                if(game.players[i].isOut()&&game.players[i].outCount>0){
                    game.players[i].outCount--;
                    if(game.players[i].outCount==0&&!game.players[i].outSkills){
                        game.players[i].in();
                    }
                }
            }
            event.trigger('roundStart');
        }
        'step 4'
        player.getStat().card={};
        player.getStat().skill={};
        player.update();
        event.trigger('phaseBegin');
        'step 5'
        player.phaseDraw();
        if(!player.noPhaseDelay){
            if(player==game.me){
                game.delay();
            }
            else{
                game.delayx();
            }
        }
        'step 6'
        player.phaseUse();
        'step 7'
        player.phaseJudge();
         'step 8'
        game.broadcastAll(function(){
            if(ui.tempnowuxie){
                ui.tempnowuxie.close();
                delete ui.tempnowuxie;
            }
        });
        player.phaseDiscard()
        if(!player.noPhaseDelay) game.delayx();
        delete player.using;
        delete player._noSkill;
         'step 9'
        event.trigger('phaseEnd');
        event.trigger('phaseAfter');
        game.delay();
    },
            },
            "sdyx_mingwan3":{
				audio:"ext:金庸群侠传:2",
                mark:true,
                marktext:"弃",
                intro:{
                    content:"下个回合弃牌阶段移摸牌阶段后",
                },
                trigger:{
                    player:"phaseBefore",
                },
                forced:true,
                priority:2019,
                content:function (){
            'step 0'
        trigger.cancel();
        player.phaseSkipped=false;
        'step 1'
        player.removeSkill('sdyx_mingwan3');
        if(player.skipList.contains('phase')){
            player.skipList.remove('phase');
            event.trigger('phaseSkipped');
            event.finish();
        }
       'step 2'
       event.trigger('phaseBefore');
       game.delay();
        'step 3'
        if((player==_status.roundStart||_status.roundSkipped)&&!trigger.skill){
            delete _status.roundSkipped;
            game.roundNumber++;
            if(ui.cardPileNumber) ui.cardPileNumber.innerHTML=game.roundNumber+'轮 剩余牌: '+ui.cardPile.childNodes.length;
            for(var i=0;i<game.players.length;i++){
                if(game.players[i].isOut()&&game.players[i].outCount>0){
                    game.players[i].outCount--;
                    if(game.players[i].outCount==0&&!game.players[i].outSkills){
                        game.players[i].in();
                    }
                }
            }
            event.trigger('roundStart');
        }
        'step 4'
        player.getStat().card={};
        player.getStat().skill={};
        player.update();
        event.trigger('phaseBegin');
        'step 5'
        player.phaseJudge();
      'step 6'
        player.phaseDraw();
        if(!player.noPhaseDelay){
            if(player==game.me){
                game.delay();
            }
            else{
                game.delayx();
            }
        }
        'step 7'
        player.phaseDiscard()
         'step 8'
        player.phaseUse();
      'step 9'
        game.broadcastAll(function(){
            if(ui.tempnowuxie){
                ui.tempnowuxie.close();
                delete ui.tempnowuxie;
            }
        });
       'step 10'
        if(!player.noPhaseDelay) game.delayx();
        delete player.using;
        delete player._noSkill;
        'step 11'
        event.trigger('phaseEnd');
        event.trigger('phaseAfter');
        game.delay();
    },
            },
            "sdyx_mingwan":{
				 audio:"ext:金庸群侠传:3",
                trigger:{
                    player:"damageEnd",
                },
                frequent:true,
                filter:function (event){
        return (event.num>0)
    },
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt('sdyx_mingwan'),function(card,player,target){
            return !target.hasSkill('sdyx_mingwan3')||!target.hasSkill('sdyx_mingwan2');
        }).set('ai',function(target){
            var att=get.attitude(player,target);
            if(att>2) {
                if(target.countCards('j')) return target.countCards('j');
                return -1;
                }
            if(att<0) {
                if(target.countCards('h')) return target.countCards('h')-target.hp+1;
                return 0.1;
                }
            return -1;
        });
        'step 1'
        if(result.bool){
            event.target=result.targets[0];
            player.logSkill('sdyx_mingwan',result.targets);
        }
        else{
            event.finish();
            }
          'step 2'
        if(event.target){
            player.chooseControl('选项一','选项二').set('prompt','冥顽<br><br><div class="text">选项一:将其下个回合的判定阶段移至出牌阶段后</div><br><div class="text">选项二:将其下个回合的弃牌阶段移至摸牌阶段后</div></br>').ai=function(){
               var att=get.attitude(player,event.target);
                if(att>2) return '选项一';
                if(att<0) return '选项二';
                return '选项二';
            };
        }
            'step 3'
        if(result.control=='选项一'){
            event.target.addSkill('sdyx_mingwan2');
        }
        if(result.control=='选项二'){
            event.target.addSkill('sdyx_mingwan3');
        }
    },
            },
            "sdyx_shouxun":{
                mod:{
                    canBeDiscarded:function (card){
            if((get.subtype(card)=='equip1'||get.subtype(card)=='equip5')&&get.position(card)=='e') return false;
        },
                    cardDiscardable:function (card){
            if((get.subtype(card)=='equip1'||get.subtype(card)=='equip5')&&get.position(card)=='e') return false;
        },
                    canBeGained:function (card){
            if((get.subtype(card)=='equip1'||get.subtype(card)=='equip5')&&get.position(card)=='e') return false;
        },
                    targetEnabled:function (card,player,target,now){
            if((player.getEquip(1)&&get.subtype(card)=='equip1')||(player.getEquip(5)&&get.subtype(card)=='equip5')) return false;
        },
                },
                trigger:{
                    target:"useCardToBefore",
                },
                popup:false,
                forced:true,
                priority:15,
                check:function (event,player){
        return get.effect(event.target,event.card,event.player,player)<0;
    },
                filter:function (event,player){
        if(player.getEquip(1)) return get.subtype(event.card)=='equip1';
        if(player.getEquip(5)) return get.subtype(event.card)=='equip5';
        return false;
    },
                content:function (){
        game.log(player,'装备'+get.translation(trigger.card)+'失败');
        trigger.cancel();
    },
            },
"sdyx_qiaoyan":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"chooseToCompareBegin",
                },
				usable:1,
				direct:true,
                filter:function (event,player){
        return player.isAlive();
    },
                check:function (){return 1},
                content:function (){
        'step 0'
        //get.prompt('sdyx_qiaoyan')
 player.chooseTarget('是否选择一名角色代替【'+get.translation(trigger.player)+'】打出拼点牌？',function(card,player,target){
            return trigger.player!=target&&trigger.target!=target&&target.countCards('h')>0;
        }).ai=function(target){
            return -get.attitude(player,target);
        }
        'step 1'
        if(result.bool){
        player.logSkill('sdyx_qiaoyan');
			trigger.player = result.targets[0];          
        }
       else{
		   event.finish();
	   }
                },
                ai:{
                expose:0.8,
                },
            },
            "sdyx_qingshi":{
  audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"phaseBegin",
                },
                priority:2019,
                direct:true,
                check:function (event,player){
        return get.attitude(player,event.player)<0;
    },
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt2('sdyx_qingshi'),function(card,player,target){
            if(target==player||target.countCards('h')<=0||target.hasSkill('sdyx_qingshi2')) return false;
            var names=[];
            if(target.name&&!target.isUnseen(0)) names.add(target.name);
            if(target.name1&&!target.isUnseen(0)) names.add(target.name1);
            if(target.name2&&!target.isUnseen(1)) names.add(target.name2);
            var pss=player.getSkills();
            for(var i=0;i<names.length;i++){
                var info=lib.character[names[i]];
                if(info){
                    var skills=info[3];
                    for(var j=0;j<skills.length;j++){
                        if(lib.translate[skills[j]+'_info']&&lib.skill[skills[j]]&&!lib.skill[skills[j]].unique&&!pss.contains(skills[j])){
                            return true;
                        }
                    }
                }
                return false;
            }
        }).set('ai',function(target){
            if(get.attitude(_status.event.player,target)>0) return Math.random();
            return 0;
        }); 
        'step 1'
        if(result.targets){
            var target=result.targets[0];
            event.target=target;
            player.chooseToCompare(target); 
            player.logSkill('sdyx_qingshi',target);
        }
        else{
            event.finish();
        }
        'step 2'
        if(!result.bool){  
            var target=event.target;
            target.addSkill('sdyx_qingshi2');
            player.damage(target);
            event.finish();
        }
        'step 3'
        var target=event.target;
        var names=[];
        var list=[];
        if(target.name&&!target.isUnseen(0)) names.add(target.name);
        if(target.name1&&!target.isUnseen(0)) names.add(target.name1);
        if(target.name2&&!target.isUnseen(1)) names.add(target.name2);
        var pss=player.getSkills();
        for(var i=0;i<names.length;i++){
            var info=lib.character[names[i]];
            if(info){
                var skills=info[3];
                for(var j=0;j<skills.length;j++){
                    if(lib.translate[skills[j]+'_info']&&lib.skill[skills[j]]&&!lib.skill[skills[j]].unique&&!pss.contains(skills[j])){
                        list.push(skills[j]);
                    }
                }            
            }
        }    
        var dialog=ui.create.dialog('forcebutton');
        dialog.add('请师</br></br><div class="center text">选择并获得一项技能直到回合结束</div>');
        var clickItem=function(){
            _status.event._result=this.link;
            dialog.close();
            game.resume();
        };
        for(var i=0;i<list.length;i++){
            if(lib.translate[list[i]+'_info']){
                var translation=get.translation(list[i]);
                var item=dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【'+translation+'】</div><div>'+lib.translate[list[i]+'_info']+'</div></div>');
                item.firstChild.addEventListener('click',clickItem);
                item.firstChild.link=list[i];
            }
        }
        dialog.add(ui.create.div('.placeholder'));
        event.switchToAuto=function(){
            event._result=event.skillai();
            dialog.close();
            game.resume();
        };
        _status.imchoosing=true;
        game.pause(); 
        'step 4'
        _status.imchoosing=false;
        player.popup(result);
        player.addTempSkill(result,'phaseEnd');
        game.log(player,'获得了','【'+get.translation(result)+'】');
        game.delay();
    },
                ai:{
                    threaten:2.3,
                    result:{
                        target:function (player,target){
                return get.damageEffect(target,player,target);
            },
                    },
                    order:9,
                },
            },
			sdyx_qingshi2:{
			mark:true,
				forced:true,
				init:function (player){
					player.markSkill('sdyx_qingshi2');
				},
				marktext:"师",
				intro:{
                    content:"请师",
                },
				content:function (){},
			},
            sdyx_qimen:{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('sdyx_qimen'),function(card,player,target){
            return !target.hasSkill("sdyx_qimen2");
        }).ai=function(target){
            return get.attitude(player,target);
        }
        "step 1"
        if(result.bool){
            player.logSkill('sdyx_qimen',result.targets);
            result.targets[0].addSkill('sdyx_qimen2',{player:'phaseEnd'});            
        }
    },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                    effect:{
                        target:function (card,player,target){
                if(get.tag(card,'damage')){
                    if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
                }
            },
                    },
                },
            },
			 "sdyx_qimen2":{
                trigger:{
                    player:"phaseBegin",
                },
				direct:true,
                priority:Infinity,
                content:function (){
        'step 0'       
        player.getStat().card={};
        player.getStat().skill={};
        player.update();
        'step 1'
        event.list=['判定','摸牌'];
        'step 2'
        player.chooseControl(event.list); 
        game.playJY(['sdyx_qimen1','sdyx_qimen2'].randomGet());
        'step 3'
        if(result.control=='判定'){
            player.skip('phaseJudge');   
            event.list.remove('判定');
			event.list.remove('摸牌');
			player.removeSkill('sdyx_qimen2');
        }
        else if(result.control=='摸牌'){
            player.phaseDraw();
            event.list.remove('摸牌');
		    event.list.remove('判定');
			player.removeSkill('sdyx_qimen2');
        }             
    },
            },
 "sdyx_moshu1":{
                init:function (player){
        player.storage.sdyx_moshu1=[];
    },
                trigger:{
                    global:"useCard",
                },
                intro:{
                    content:"cards",
                },
                usable:1,
                filter:function (event,player){
        if(event.player==player) return false;
        if(!event.cards||event.cards.length!=1) return false;
        if(get.type(event.card)!='trick') return false;
        if(event.card.name=='wuxie') return false;
        return event.cards[0]&&event.cards[0]==event.card;
    },
                content:function (){
					game.playJY(['sdyx_moshu1','sdyx_moshu2'].randomGet());
        if(player.storage.sdyx_moshu1==undefined) player.storage.sdyx_moshu1=[];
            player.storage.sdyx_moshu1.push(trigger.card);
            game.log(player,'记录了'+get.translation(trigger.card)+'');
            player.markSkill('sdyx_moshu1');
    },
            },
            "sdyx_moshu":{
				audio:"ext:金庸群侠传:2",
                group:["sdyx_moshu1"],
                enable:"chooseToUse",
                usable:1,
                filter:function (event,player){
        return player.storage.sdyx_moshu1.length>0;
    },
                chooseButton:{
                    dialog:function (event,player){
            return ui.create.dialog('sdyx_moshu1',player.storage.sdyx_moshu1,'hidden');
        },
                    filter:function (button,player){
            var evt=_status.event.getParent();
            if(evt&&evt.filterCard){
                return evt.filterCard(button.link,player,evt);
            }
            return true;
        },
                    check:function (button){
            if(button.link.name=='du') return -2;
            var player=_status.event.player;
            if(button.link.name=='xingjiegoutong'&&player.countCards('h')>1) return -2;
            if(get.select(get.info(button.link).selectTarget)[1]==-1){
                if(get.type(button.link)=='delay') return -1;
                if(get.type(button.link)=='equip'){
                    var current=player.getCards('e',{subtype:get.subtype(button.link)})[0];
                    if(current&&get.equipValue(current)>=get.equipValue(button.link)) return -1;
                    return 1;
                }
                if(get.tag(button.link,'multitarget')) return -1;
                if(button.link.name=='huoshaolianying') return -1;
            }
            if(button.link.name=='jiu'){
                if(get.effect(player,{name:'jiu'},player)>0){
                    return 1;
                }
                return -1;
            }
            return 1;
        },
                    backup:function (links,player){
            return {
                filterCard:function(){return true},
                selectCard:1,
                viewAs:links[0],
                onuse:function(result,player,event){                 
                    player.storage.sdyx_moshu1.remove(result.card);
                    player.syncStorage('sdyx_moshu1');      
                    player.updateMarks();
                    game.delay(2);
                    if(player.hasSkill('sdyx_cuixin')) player.useSkill('sdyx_cuixin');
                    
                },
            }
        },
                    prompt:function (links,player){
            return '请选择一张手牌当'+get.translation({name:links[0].name,nature:links[0].nature})+'使用';
        },
                },
                ai:{
                    order:4,
                    result:{
                        player:function (player){
                if(_status.event.dying) return get.attitude(player,_status.event.dying);
                return 1;
            },
                    },
                    useful:-1,
                    value:-1,
                },
            },
            "sdyx_cuixin":{
				audio:"ext:金庸群侠传:2",
                content:function (){
        "step 0"
        player.chooseControl('流失体力','失去一体力上限',function(event,player){
            if(player.hp==player.maxHp) return '流失体力';
            if(player.hp<player.maxHp-1||player.hp<=2) return '失去一体力上限';
            return '流失体力';
        });
        "step 1"
        if(result.control=='流失体力'){
            player.loseHp();
        }
        else{
            player.loseMaxHp(true);
        }
    },
                ai:{
                    threaten:0.5,
                },
            },
	
	"sdyx_cihuai":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"phaseBegin",
                },
                frequent:true,
                filter:function (event,player){
        if(!player.countCards('h')) return false;
        var cards=player.getCards('h');
        for(var i=1;i<cards.length;i++){
            if(get.suit(cards[i])!=get.suit(cards[0])) return false;
        }
        return true;
    },
                content:function (){
        "step 0"
        event.gain=[];
       player.showHandcards();
        var hs=player.getCards('h');
       event.suit=get.suit(hs[0]);
        "step 1"
        event.gained=[];
        "step 2"
        event.cards=get.cards()[0];
        player.showCards(event.cards);
        event.gained.push(event.cards);
        "step 3"
       if(event.suit!=get.suit(event.cards)){
           event.goto(2);
           }
        else{
            player.gain(event.gained,'gain2');
        }
    },
                ai:{
                    order:9,
                    result:{
                        player:2,
                    },
                    threaten:1.2,
                },
            },
            "sdyx_qushang":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"damageEnd",
                },
                frequent:true,
                direct:true,
                filter:function (event,player){
        return player.countCards('he')>0;
    },
                content:function (){
        "step 0"
        player.chooseCardTarget({
            filterCard:function (card){
            var suit=get.suit(card);
                for(var i=0;i<ui.selected.cards.length;i++){
                    if(get.suit(ui.selected.cards[i])==suit) return false;
                }
                return true;
            },
            selectCard:[1,4],
            filterTarget:function(card,player,target){
                return player!=target;
            },
            ai1:function(card){
                return 10-get.value(card);
            },
            ai2:function(target){
                var att=get.attitude(_status.event.player,target);
                if(att>2){
                    if(target.isTurnedOver()) return 1;
                    return target.hp<target.maxHp&&ui.selected.cards.length==1&&target.countCards('h')>=3;
                }
                if(att<0){
                    if(target.isTurnedOver()) return -1;
                    return (1-att)&&ui.selected.cards.length==2&&target.countCards('h')<3&&target.hp==target.maxHp;
                }
                return -1;
            },
            prompt:'请选择一名其他角色'
        });
        "step 1"
        if(result.bool){
            player.logSkill('sdyx_qushang',result.targets[0]);
            player.discard(result.cards);
            event.cardsss=result.cards;
            var ssuit=[];
            for(var i=0;i<result.cards.length;i++){
                var ssuits=get.suit(result.cards[i]);
                if(!ssuit.contains(ssuits)){
                    ssuit.push(ssuits);
                }
            }
            event.target=result.targets[0];
            var next=event.target.chooseToDiscard('he',result.cards.length,'是否弃置'+result.cards.length+'张牌回复一体力？,否则翻面并获得弃置的牌',function(card,player){
                var suit=get.suit(card);
                if(!ssuit.contains(suit)) return false;
                for(var i=0;i<ui.selected.cards.length;i++){
                    if(get.suit(ui.selected.cards[i])==suit||!ssuit.contains(suit)) return false;
                }
                return true;
            });
            next.ai=function(card){
                if(event.target.isTurnedOver()) return -1;
                if(result.cards.length<=2&&event.target.hp<event.target.maxHp) return 1;
                if(result.cards.length>2) return -1;
                return 9-get.value(card);
            };
        }
        "step 2"
        if(result.bool){
            event.target.recover();
        }
        else{
            event.target.turnOver();
            event.target.$gain2(event.cardsss);
            event.target.gain(event.cardsss);
        }
        
    },
                ai:{
                    threaten:0.6,
                },
            },
			"sdyx_jianchi":{
                mod:{
                    targetInRange:function (card,player,target,now){
            if(card.name=='sha'&&_status.currentPhase==player) return true;
        },
                    selectTarget:function (card,player,range){
            if(player.maxHp-player.hp>0&&_status.currentPhase==player){
                if(card.name=='sha'&&range[1]!=-1) range[1]+=player.maxHp-player.hp;
            }
        },
                },
            },
            "sdyx_yuzhong":{
                group:["sdyx_yuzhong_use","sdyx_yuzhong_sha"],
                subSkill:{
                    use:{
                        trigger:{
                            player:["useCard","respond"],
                        },
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                if(event.skill!='sdyx_yuzhong_sha') return false;
                return true;
            },
                        content:function (){
							game.playJY(['sdyx_yuzhong1','sdyx_yuzhong2','sdyx_yuzhong3','sdyx_yuzhong4'].randomGet());
                player.loseHp();
                if(_status.currentPhase==player&&trigger.name=='useCard'){
                    player.getStat().card.sha--;
                    player.addTempSkill('sdyx_yuzhong_off','phaseEnd');
                }
            },
                        sub:true,
                    },
                    sha:{
                        enable:["chooseToRespond","chooseToUse"],
                        viewAs:{
                            name:"sha",
                        },
                        filterCard:function (){return false},
                        viewAsFilter:function (player){
                 if(player.hasSkill('sdyx_yuzhong_off')) return false;
            },
                        selectCard:-1,
                        mark:false,
                        prompt:"视为使用或打出一张杀",
                        ai:{
                            order:function (){
                    var player=_status.event.player;
                    if(_status.currentPhase==player&&player.hasSha()&&player.hp>=2){
                        return get.order({name:'sha'})+0.1;
                    }
                    return get.order({name:'sha'})-0.5;
                },
                            skillTagFilter:function (player,tag,arg){
                    if(player.hasSkill('sdyx_yuzhong_off')) return false;
                },
                            respondSha:true,
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
                    off:{
                        sub:true,
                    },
                },
            },
			 "sdyx_danxin":{
                audio:"ext:金庸群侠传:4",
                trigger:{
                    global:"shaBegin",
                },
                check:function (event,player){
        return get.attitude(player,event.player)<0;
        },
                filter:function (event,player){
        return player.countCards('h')>0&&event.player.countCards('h')>0&&event.player!=player;
    },
                logTarget:"player",
                content:function (){
        'step 0'
        player.chooseToCompare(trigger.player);
        'step 1'
        if(result.bool){
            trigger.skipShan=true;
            player.gain(trigger.card);
			trigger.cancel();
        }
        'step 2'
        if(!result.bool&&trigger.target!=player){
                           trigger.target=player;        
                           trigger.untrigger();
                           trigger.trigger('useCardToBefore');
                           trigger.trigger(trigger.card.name+'Before');
                           trigger.player.line(player);
        }
    },
                ai:{                   
    expose:0.8,
                    effect:{
                        target:function (card,player,target,current){
                if(card.name=='sha'&&current<0) return 0.7;
            },
                    },
                },
            },
            "sdyx_polu":{
                unique:true,
                mod:{
                    attackFrom:function (from,to,distance){ 
           return distance-from.maxHp+from.hp;
           },
                    cardUsable:function (card,player,num){
            if(card.name=='sha') return num+player.maxHp-player.hp;
        },
                },
            },
            "sdyx_longyin":{
                unique:true,
                global:"sdyx_longyin2",
                zhuSkill:true,
            },
            "sdyx_longyin2":{
                mod:{
                    attackTo:function (from,to,distance){
            if(from.group!='wei') return;
            var players=game.filterPlayer();
           
            for(var i=0;i<players.length;i++){
                if(from!=players[i]&&to!=players[i]&&
                    players[i].hasZhuSkill('sdyx_longyin',from)){
                    if(get.distance(players[i],to)<=players[i].getAttackRange()) return distance-Infinity;
                }
            }
        },
                },
            },
			"sdyx_sheqi":{
				 audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"phaseDiscardBegin",
                },
                direct:true,
                filter:function (event,player){
        return player.countUsed('sha')==0;
    },
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt('sdyx_sheqi'),function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return get.attitude(player,target);
        });
        'step 1'
        if(result.bool){
            player.logSkill('sdyx_sheqi',result.targets);
            event.target=result.targets[0];
           
        }
        "step 2"
        if(event.target){
            event.target.addSkill('sdyx_sheqi_wushi');
            game.delay();
            event.target.chooseToUse({name:'sha'},'是否使用一张杀;此杀无距离限制无视无视防具，').set('targetRequired',true);
        }
        "step 3"
        if(event.target){
            event.target.removeSkill('sdyx_sheqi_wushi');
        }
    },
                group:["sdyx_sheqi_wushi"],
                subSkill:{
                    wushi:{
                        mod:{
                            targetInRange:function (card,player,target,now){
                    if(card.name=='sha') return true;
                },
                        },
                        ai:{
                            unequip:true,
                            skillTagFilter:function (player,tag,arg){
                    if(arg&&arg.name=='sha') return true;
                    return false;
                },
                        },
                        sub:true,
                        popup:false,
                    },
                },
            },
            "sdyx_guifu":{
                init:function (player){
        player.storage.sdyx_guifu=[];
    },
                trigger:{
                    global:"phaseEnd",
                },
				 audio:"ext:金庸群侠传:2",
                forced:true,
                filter:function (event,player){
        return player.storage.sdyx_guifu.length>0;
    },
                intro:{
                    content:"cards",
                },
                content:function (){
        "step 0"
        player.chooseCardButton(player.storage.sdyx_guifu,1,'归附：选择交给一名其他角色的牌').set('ai',get.buttonValue);
        "step 1"
        if(result.bool){
            event.togive=result.links.slice(0);
            player.chooseTarget('将'+get.translation(result.links)+'交给一名角色',true,'',function(card,player,target){
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
        "step 2"
        if(result.targets.length){
            player.logSkill('sdyx_guifu',result.targets[0]);
            result.targets[0].gain(event.togive,'draw');
            player.line(result.targets[0],'green');
            game.log(result.targets[0],'获得了'+get.cnNumber(event.togive.length)+'张牌');
        }
        "step 3"
       player.storage.sdyx_guifu=[];
        "step 4"
       player.unmarkSkill('sdyx_guifu');
        player.syncStorage('sdyx_guifu');
    },
                group:["sdyx_guifu_add"],
                subSkill:{
                    add:{
                        trigger:{
                            global:"useCardAfter",
                        },
                        popup:false,
                        forced:true,
                        filter:function (event,player){
                return get.itemtype(event.cards)=='cards'&&get.position(event.cards[0])=='d';
            },
                        content:function (){
                 "step 0"
                // player.storage.sdyx_guifu.push(trigger.cards);
                  if(_status.currentPhase==player){
					 // game.playJY(['sdyx_guifu1','sdyx_guifu2'].randomGet());
                      if(player.storage.sdyx_guifu==undefined) player.storage.sdyx_guifu=[];
                      game.log(player,'标记了'+get.translation(trigger.card)+'');
                      player.storage.sdyx_guifu=player.storage.sdyx_guifu.concat(trigger.card);
                      player.syncStorage('sdyx_guifu');
                      player.markSkill('sdyx_guifu');
                  }
            },
                        sub:true,
                    },
                },
                ai:{
                    threaten:1,
                },
            },
		
           },

 translate:{
	 "sdyx_qiuqianren":"裘千仞",
            "sdyx_tiezhang":"铁掌",
            "sdyx_tiezhang_info":"你使用杀造成伤害后，你可以弃置场上一张与此杀花色相同装备牌或延时锦囊牌。",
            "sdyx_huolian":"祸连",
            "sdyx_huolian_info":"出牌阶段，你可以令一名其他角色选择是否交给其攻击范围由你选择的另一名其他角色一张红桃牌。若其选择否，视为你对其使用了一张杀。",
	  "sdyx_hongqigong":"洪七公",
            "sdyx_xiangyan":"飨宴",
            "sdyx_xiangyan_info":"你受到伤害后，你可以亮出牌堆顶5张牌，你获得不同类型（注：延时锦囊牌和普通锦囊牌类型不同）的牌各一张，将其余牌置入弃牌堆。",
            "sdyx_shouming":"授命",
            "sdyx_shouming_info":"每轮限一次，其他角色出牌阶段开始时，若你已受伤，你可以交给其一张装备牌，若如此做，其本回合内获得“降龙”。",
	  "sdyx_ouyanke":"欧阳克",
            "sdyx_mushe":"牧蛇",
            "sdyx_mushe_info":"出牌阶段限一次，你可以将一张黑桃手牌交给一名其他角色，其回合结束时，若其未于此回合同造成过雷电伤害，其需交给你两张黑桃牌或受到你的一点雷电伤害。",
            "sdyx_zhijie":"积黠",
            "sdyx_zhijie_info":"其他角色出牌阶段开始时，你可以令其选择：交给你一张黑桃牌；或其不能于此回合内使用黑桃牌。若你以此法获得了牌，此技能失效直到下一轮开始。",
	 "sdyx_zhoubotong":"周伯通",
            "sdyx_mingwan":"冥顽",
            "sdyx_mingwan_info":"每当你受到一点伤害后，你可以选择一名角色，将其下个回合判定阶段移至出牌阶段后，或将其下个回合弃牌阶段移至摸牌阶段后（已有“判”或“弃”标记的角色不能被选择）。",
            "sdyx_shouxun":"守训",
            "sdyx_shouxun_info":"锁定技。你不能失去装备区里的武器牌。",
			"sdyx_mingwan2":"判定移出牌阶段后",
            "sdyx_mingwan2_info":"",
            "sdyx_mingwan3":"弃牌移摸牌阶段后",
            "sdyx_mingwan3_info":"",
	 "sdyx_huangrong":"黄蓉",
            "sdyx_qiaoyan":"巧言",
            "sdyx_qiaoyan_info":"每回合限一次，当一名角色拼点时，你可令另一名未参与此次拼点的角色代替其打出拼点牌。",
            "sdyx_qingshi":"请师",
			"sdyx_qingshi2":"师",
            "sdyx_qingshi_info":"回合开始时，你可与一名其他角色拼点，若你赢，你于此回合内获得其一项除觉醒技、主公技和限定技以外的技能；若你没赢，本局游戏你不能再对该角色发动“请师”且你受到其一点伤害。",
            "sdyx_qimen":"奇门",
		    "sdyx_qimen2":"奇门",
            "sdyx_qimen_info":"当你受到1点伤害后，你可以令一名角色于下个回合额外执行一个摸牌阶段或跳过判定阶段。",
	 "sdyx_fengheng":"冯蘅",
	  "sdyx_moshu1":"默书",
            "sdyx_moshu1_info":"",
            "sdyx_moshu":"默书",
            "sdyx_moshu_info":"每回合限一次，其他角色使用普通锦囊牌后，你可以获得一枚“拓印”标记，并将此牌拓印于此标记上。出牌阶段限一次，你可以移除一枚“拓印”标记，然后将一张手牌当此拓印于标记上的普通锦囊牌使用。",
            "sdyx_cuixin":"瘁心",
            "sdyx_cuixin_info":"锁定技。你每移除一枚“拓印”标记，你须选择一项：失去一点体力；或减一点体力一限。",
	 "sdyx_ouyangfeng":"欧阳锋",
            "sdyx_shezhang":"蛇杖",
            "sdyx_shezhang_info":"锁定技。若你的装备区里没有装备武器牌，你视为装备了朱雀羽扇。",
            "sdyx_duxi":"毒袭",
            "sdyx_duxi_info":"每当你造成火焰伤害时，你可以弃置一张黑桃手牌，令此伤害+1。",
            "sdyx_nijing":"逆筋",
            "sdyx_nijing_info":"你可以将雷杀当酒使用。",
   "sdyx_xguojing":"SP郭靖",
            "sdyx_zhebie":"哲别",
            "sdyx_huangyaoshi":"黄药师",
            "sdyx_guojing":"郭靖",
			"sdyx_sheqi":"射骑",
            "sdyx_sheqi_info":"锁定技，你使用的杀无距离限制，且无视目标的防具。出牌阶段结束时，若你此阶段未使用过杀，你可以令一名其他角色选择是否使用一张无视距离和目标防具的杀。",
            "sdyx_guifu":"归附",
            "sdyx_guifu_info":"回合结束时，你可以将你本回合一张因使用而进入弃牌堆的牌交给一名其他角色。",
			 "sdyx_danxin":"丹心",
            "sdyx_danxin_info":"其他角色使用杀指定目标后，你可以与其拼点，若你赢，此杀无效且你获得之；若你未赢且你不是目标，此杀的目标改为你。",
            "sdyx_polu":"破虏",
            "sdyx_polu_info":"锁定技，你的攻击范围+X，你使用杀的次数+X（X为你已损失的体力值）。",
            "sdyx_longyin":"龙吟",
            "sdyx_longyin_info":"盟主技。锁定技。你攻击范围的角色视为在其他魏势力角色的攻击范围内。",
            "sdyx_longyin2":"",
			 "sdyx_cihuai":"悲怀",
            "sdyx_cihuai_info":"回合开始时，若你的手牌只含一种花色，你可以展示所有手牌，然后依次亮出牌堆顶的牌，直到出现与你手牌花色相同的牌为止，你获得这些牌。",
            "sdyx_qushang":"曲殇",
            "sdyx_qushang_info":"每当你受到伤害后，你可以弃置任意张花色各不同的牌并选择一名其他角色，令其选择一项：弃置与此法弃置花色和数量相同的牌并回复1点体力；或获得你弃置的牌并翻面。",
            "sdyx_jianchi":"箭驰",
            "sdyx_jianchi_info":"锁定技。你使用的杀无距离限制并且可以额外指定X名目标（X为你已损失的体力值）。",
            "sdyx_yuzhong":"愚忠",
            "sdyx_yuzhong_info":"当你需要使用打出杀时，你可以失去一点体力，视为你使用或打出了此牌。你的回合内只能以此发使用一次杀，且不计入回合内次数。",
			 "sdyx_xianglong":"降龙",
            "sdyx_xianglong_info":"当你使用杀指定目标后，你可以对目标角色造成1点伤害。若如此做，若此杀造成伤害，你须失去1点体力。",
                               
        },
};
			if(lib.device||lib.node){
				for(var i in sdyx.character){sdyx.character[i][4].push('ext:金庸群侠传/'+i+'.jpg');}
			}else{
				for(var i in sdyx.character){sdyx.character[i][4].push('db:extension-金庸群侠传:'+i+'.jpg');}
			}
			return sdyx;
		});
		lib.config.all.characters.push('sdyx');
		if(!lib.config.characters.contains('sdyx')) lib.config.characters.remove('sdyx');
		lib.translate['sdyx_character_config']='射雕英雄传';
		
game.import('character',function(){
			var yttl={
				name:'yttl',
				connect:true,
				character:{
					 "yttl_zhangsanfeng":["male","wu",3,["yttl_taiji","yttl_chunyan","yttl_taoli"],['zhu']],                       
            "yttl_changbaisanqin":["male","wu",4,["yttl_fendao","yttl_kuiyu"],[]],			
			"yttl_yangxiao":["male","wu",3,["yttl_xingshi","yttl_jieao"],[]],
			"yttl_zhuyuanzhang":["male","wu",3,["yttl_qingce","yttl_yaohui","yttl_yinyuan"],['zhu']],
			 "yttl_due":["male","wu",3,["yttl_jingang","yttl_fumo","yttl_guchan"],[]],
			 "yttl_yinli":["female","wu",4,["yttl_chuxin","yttl_maodu"],[]],
			 "yttl_jinhuapopo":["female","wu",3,["yttl_hanji","yttl_jiedao"],[]],
			 "yttl_changbaoshu":["male","qun",4,["yttl_qizhao","yttl_lingjian"],[]],
			 "yttl_changyuchun":["male","wu",4,["yttl_xiaoyong","yttl_xianfeng"],[]],
			 "yttl_yinliting":["male","wu",4,["yttl_chanru","yttl_tongshou"],[]],
			 "yttl_luhe":["male","wu",4,["yttl_xuanming","yttl_hanyin"],[]],
			  "yttl_miejue":["female","wu",3,["yttl_zhangjian","yttl_huiqiao","yttl_jie"],[]],
			  "yttl_songqingshu":["male","wu",3,["yttl_jixian","yttl_nishi"],[]],
			  "yttl_zhangcuishan":["male","wu",3,["yttl_cstaiji","yttl_yinjiu"],[]],
			  "yttl_zhangwuji":["male","wu",4,["yttl_nijue","yttl_jiuyang","yttl_chuqiao"],['zhu']],
			  "yttl_daiqisi":["female","wu",3,["yttl_miling","yttl_jinhua"],[]],
       
},
characterIntro:{
				"yttl_zhangsanfeng":"张三丰悟性超然，天赋卓绝，自创武当派，能同少林寺分庭抗礼，是名扬天下的一代宗师，除七个入室弟子外，桃李遍天下。为人正气凛然，颇有仙风道骨之姿，是当世无出其右的武学奇才。出名绝学繁多，其中太极拳法以静制动，以柔克刚；太极剑更是达到无招胜有招的境界。【CV：觅阳】",		
			    "yttl_yangxiao":"杨逍样貌俊雅，风度翩翩，与范遥人称逍遥二仙，是明教光明左使。为人亦正亦邪，孤傲不羁，少年时与峨嵋派男弟子孤鸿子比武，夺剑后掷地而去，气死孤鸿子，从此与峨眉派结怨。六大派围攻明教光明顶时，携教众奋力抵抗，成为对抗六大派的中坚力量，最后在张无忌相助之下取得胜利。【CV：青灯折扇不语】",
				"yttl_yinli":"明教护法殷天正的孙女，因痛恨二娘欺负母亲而杀之，致使父女关系决裂。为练习千蛛万毒手不惜以血饲蛛，因而变得容貌丑陋。后因周芷若嫉妒她是张无忌未婚妻而对其狠下杀手，死里逃生的殷离因毒素流尽而恢复绝美容颜。与张无忌重逢时表明自己爱的是当年在蝴蝶谷相遇的曾阿牛而非现在长大的张无忌。【CV：阿九】",
			    "yttl_zhuyuanzhang":"金庸小说《倚天屠龙记》中的朱元璋，本是明教中的义军元帅，属张无忌的部下。在结尾大破元军之后，朱元璋表现出了超强的权欲野心，因其忌惮张无忌地位稳固，他用计成功挑拨了张无忌和徐达、常遇春的关系，导致其为了明哲保身而退出明教。他拉拢人心，工于心计，终成明朝开国皇帝。【CV：青灯折扇不语】",
		    	"yttl_changbaisanqin":"郭公破虏保卫襄阳战死沙场之后，其屠龙宝刀流落江湖，不知所踪。在小说《倚天屠龙记》中首次出现，是在来自三白山的三大枭雄手中。长白三禽不能悟出宝刀秘密，于是决定使用烈火对其进行焚烧，希望能看透个中蹊跷。随后屠龙宝刀被海沙帮的人劫走，自此，拉开了《倚天屠龙记》故事的序幕。【CV：青灯折扇不语】",
                "yttl_due":"渡厄与渡难、渡劫为当时少林寺辈分最高的高僧，渡厄为三僧之首。三僧共同设金刚伏魔圈看守关押在少林寺的谢逊。张无忌等一众明教高手屡次前来破阵营救谢逊都无法得手，其枯禅功夫更能达到物我两忘的境界。最后渡厄与谢逊化解了一切恩怨并收其为徒，仍赐其法名为“谢逊”。【CV：觅阳】",	
                "yttl_jinhuapopo":"明教紫衫龙王黛绮线和丈夫韩千叶退出江湖之后，以金花银叶的绰号隐居在灵蛇岛。韩千叶因寒疾死后，黛绮丝易容为金花婆婆，行走在江湖中，其暗器金花镖令人闻风丧胆。她命令徒弟小昭潜伏在明教打探乾坤大挪移的心法，并上冰水岛向谢逊求借屠龙刀，以雪当年败给灭绝师太之辱。【CV：幽】",		   
                "yttl_changyuchun":"常遇春，字伯仁，号燕衡，元末红巾军杰出将领，明朝开国名将。元顺帝至正十五年，归附朱元璋，自请为前锋，力战克敌，尝自言能将十万众，横行天下，枚军中称常十万。曾在汉水边为救少主与四名番僧和七八名蒙古武官打斗被伤，被经过的张三丰搭救，后带小张无忌去蝴蝶谷求助胡青牛为其疗伤，使得张无忌成为胡青牛医术的传人。【CV：蚩宇】",
		    	"yttl_changbaoshu":"波斯明教教主座下十二宝树王之一，在十二宝树王中排名第三，武功最高。常胜宝树王在败于张无忌后，因对方爱才之心未被擒拿，故而常胜王既感激又羞愧。后与大圣、智慧二王一同出使中土，在与中华明教教主张无忌交换礼物后，学得了张无忌所传授的一部分乾坤大挪移和圣火令神功。【CV：蚩宇】",
                "yttl_yinliting":"殷梨亭在武当七侠中排行第六，但七师弟少年老成，他倒显得最为稚嫩文弱。殷梨亭素来情感细腻、悲春伤秋，因少年时期情感失利而终生郁郁寡欢，一颗心已系在纪晓芙身上。奈何人心肉长，在纪晓芙之女杨不悔的努力坚持下，殷梨亭终于被打动，两人总算修成正果，结局圆满。【CV：神齐大叔】",
				"yttl_luhe":"鹿杖客鹤笔翁是同门师兄弟，前者好色，后者好酒，人称玄冥二老。两人武功高强却投身王府以供驱策，成为蒙元朝廷的鹰犬。玄冥二老的武功绝学是玄冥神掌，至阴至寒，闻名江湖。两人曾在万安寺看守六大派期间被酒色迷惑，以至六大派被张无忌等人救走，误了郡主赵敏的大计。【CV：弈声传媒有声工作室】",
				"yttl_miejue":"峨嵋掌门人，性情刚烈，正邪不两立，嫉恶如仇但并非不讲道理，保持宗师风度。凭祖传倚天剑行走江湖，光明顶一役后被赵敏囚于万安寺内，将掌门之位传给周芷若，毅然跳下万安寺，张无忌欲用乾坤大挪移相救，但其绝不受明教恩惠，遂以毕生功力发掌相抗，导致自己摔死于万安寺塔下。【CV：仙女桥】",
				"yttl_songqingshu":"宋青书是武当七侠之首宋远桥之子，本是武当第三代传人中的佼佼者，文武双全出类拔萃，但因心爱的周芷若倾心于张无忌，加上张无忌年纪轻轻便武功卓越，闻名江湖，宋青书对其妒火中烧。宋青书曾被丐帮陈友挑唆加入丐帮，被逼向武当张三丰下毒，但未真正付诸行动。后被张三丰击毙。【CV：神齐大叔】",
				"yttl_zhangwuji":"武当张翠山和天鹰教殷素素之子，自小在冰火岛过着原始生活，踏足中原后便幼失怙恃，回到武当张真人门下。因缘巧合下学会九阳神功和乾坤大挪移，可以对敌人的武功进行牵引挪移，更是治好了缠身多年的玄冥神掌之毒，武艺绝世且又以德服人，被处于危亡中的明教教众推举为第三四十任教主，英雄出少年。【CV：】",
				"yttl_zhangcuishan":"张翠山在武当七侠中排行第五，江湖人称铁划银勾。俞岱岩被大力金刚指弄断双腿后，张翠山在追查元凶的过程中与殷素素结识，两人与谢逊一同漂流到冰火岛，在岛上的十余年内相爱，并生下儿子张无忌。回到中原后，得知妻子殷素素便是伤害俞三侠的元凶，侠义包天的他，自刎谢罪而死。【CV：】",
				},
characterTitle:{
					"yttl_yangxiao":"落影丶逝尘",
					"yttl_daiqisi":"落影丶逝尘",
					"yttl_zhangwuji":"落影丶逝尘",
					"yttl_zhangcuishan":"落影丶逝尘",
					"yttl_songqingshu":"落影丶逝尘",
					"yttl_miejue":"落影丶逝尘",
					"yttl_luhe":"落影丶逝尘",
					"yttl_changyuchun":"落影丶逝尘",
					"yttl_changbaoshu":"落影丶逝尘",
					"yttl_yinli":"落影丶逝尘",
			"yttl_zhuyuanzhang":"落影丶逝尘",
			"yttl_changbaisanqin":"Sukincen",
           "yttl_due":"Sukincen&&看破一切",
            "yttl_zhangsanfeng":"Sukincen",
			"yttl_yinliting":"Sukincen",
			 "yttl_jinhuapopo":"落影丶逝尘",
								},
								
skill:{
	"yttl_miling":{
                subSkill:{
                    useskill:{
                        mark:true,
                        marktext:"密",
                        intro:{
                            content:"已发动密令",
                        },
                        sub:true,
                    },
                    ondis:{
                        mark:true,
                        marktext:"♣️",
                        intro:{
                            content:"已使用♣️牌",
                        },
                        sub:true,
                    },
                    cl:{
                        mark:true,
                        marktext:"令",
                        intro:{
                            content:"yttl_miling",
                        },
						audio:"ext:金庸群侠传:2",
                        trigger:{
                            player:"dieBefore",
                        },
                        group:["yttl_miling_use","yttl_miling_dis"],
                        content:function (){
                "step 0"      
                player.storage.yttl_miling.removeSkill('yttl_miling_useskill');
                player.storage.yttl_miling.unmark(player.storage.yttl_miling.storage.yttl_milingname+'_charactermark');
                player.storage.yttl_miling.restoreSkill('yttl_miling');
                player.storage.yttl_miling.checkMarks();
                game.log(player.storage.yttl_miling,'重置了密令')
                "step 1"
                delete player.storage.yttl_miling;
                player.removeSkill('yttl_miling_cl');
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                    dis:{
                        trigger:{
                            player:"phaseEnd",
                        },
                        filter:function (event,player){
                if(player.hasSkill('yttl_miling_ondis')) return false;
                return player.countCards('he')>0;
            },
                        content:function (){
                "step 0"
                player.storage.yttl_miling.chooseBool('是否弃置'+get.translation(player)+'一张牌？').set('ai',function(){                                
                    if(get.attitude(player.storage.yttl_miling,player)<0) return true;                     
                    return false;
                }); 
                "step 1"
                if(result.bool){
                    player.storage.yttl_miling.logSkill('yttl_miling',player);
                    player.storage.yttl_miling.discardPlayerCard('he',player,true);
                }
                else{
                    event.finish();
                }     
                
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                    use:{
                        trigger:{
                            player:["useCard","respond"],
                        },
                        filter:function (event,player){
                if(get.suit(event.card)!='club') return false;
                return true;
            },
                        content:function (){
                "step 0"
                player.storage.yttl_miling.draw();
                if(_status.currentPhase==player&&!player.hasSkill('yttl_miling_ondis')){
                    player.addTempSkill('yttl_miling_ondis','phaseAfter');
                }
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                },
                skillAnimation:"epic",
                unique:true,
                animationStr:"密令",
                animationColor:"fire",
                enable:"phaseUse",
                position:"h",
                audio:"ext:金庸群侠传:2",
                filter:function (event,player){
        if(player.hasSkill('yttl_miling_useskill')) return false;
        return player.countCards('h',{suit:'club'})>0;
    },
                check:function (card){return 9-get.value(card)},
                filterCard:function (card){
        return get.suit(card)=='club';
    },
                filterTarget:function (card,player,target){
        if(target.hasSkill('yttl_miling_cl')) return false;
        if(target==player) return false;
        return true;
    },
                content:function (){
        "step 0"
        player.unmark(player.storage.yttl_milingname+'_charactermark');
        "step 1"
        target.gain(cards,player);
        target.storage.yttl_miling=player;
        player.addSkill('yttl_miling_useskill');
        target.addSkill('yttl_miling_cl');
        "step 2"
        var name=target.name;
        if(name.indexOf('unknown')==0){
            name=target.name2;
        }
        player.markCharacter(name,null,true,true);
        game.addVideo('markCharacter',player,{
            name:'密',
            content:'',
            id:'yttl_miling',
            target:name
        });
        player.storage.yttl_milingname=name;
        player.awakenSkill('yttl_miling');
    },
                discard:false,
                prepare:function (cards,player,targets){
        player.$give(cards,targets[0],false);
    },
                ai:{
                    basic:{
                        order:10.5,
                    },
                    result:{
                        target:function (player,target){
                return -0.5;
            },
                    },
                    threaten:1,
                },
            },
            "yttl_jinhua":{
                audio:"ext:金庸群侠传:2",
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        return player.canMoveCard()&&player.countCards('he',{suit:'club'})>0;
    },
                check:function (card){return 6-get.value(card)},
                filterCard:function (card){
        return get.suit(card)=='club';
    },
                position:"he",
                filterTarget:function (card,player,target){
        if(ui.selected.targets.length){
            var from=ui.selected.targets[0];
            var js=from.getCards('j');
            for(var i=0;i<js.length;i++){
                if(!target.hasJudge(js[i])) return true;
            }
            if(target.isMin()) return false;
            var es=from.getCards('e');
            for(var i=0;i<es.length;i++){
                if(!target.getEquip(get.subtype(es[i]))) return true;
            }
            return false;
        }
        else{
            return target.countCards('ej')>0;
        }
    },
                targetprompt:["被移走","移动目标"],
                selectTarget:2,
                multitarget:true,
                content:function (){
        "step 0"
        if(targets.length==2){
            player.choosePlayerCard('ej',true,function(button){
                var player=_status.event.player;
                var targets0=_status.event.targets0
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
                    return !targets1.hasJudge(button.link);
                }
                else{
                    return !targets1.countCards('e',{subtype:get.subtype(button.link)});
                }
            });
        }
        else{
            event.finish();
        }
        "step 1"
        if(result.bool&&result.links.length){
            var link=result.links[0];
            if(get.position(link)=='e'){
                targets[1].equip(link);
            }
            else if(link.viewAs){
                targets[1].addJudge({name:link.viewAs},[link]);
            }
            else{
                targets[1].addJudge(link);
            }
            targets[0].$give(link,targets[1])
            game.delay();
        }
    },
                ai:{
                    order:8,
                    result:{
                        target:function (player,target){
                var att=get.attitude(player,target);
                if(ui.selected.targets.length==0){
                    if(att>0){
                        if(target.countCards('j')) return 10;
                    }
                    else if(att<0){
                        if(game.hasPlayer(function(current){
                            if(get.attitude(player,current)>0){
                                var es=target.getCards('e');
                                for(var i=0;i<es.length;i++){
                                    if(!current.getEquip(get.subtype(es[i]))) return true;
                                }
                            }
                        })){
                            return -att;
                        }
                    }
                    return 0;
                }
                if(att>0){
                    var es=ui.selected.targets[0].getCards('e');
                    var i;
                    for(i=0;i<es.length;i++){
                        if(!target.getEquip(get.subtype(es[i]))){
                            break;
                        }
                    }
                    if(i==es.length){
                        return 0;
                    }
                }
                return -att*get.attitude(player,ui.selected.targets[0]);
            },
                    },
                    expose:0.4,
                    threaten:1.3,
                },
            },
	"yttl_nijue":{
				audio:"ext:金庸群侠传:2",
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        return player.countCards('h',{suit:'spade'})>0;
    },
                filterCard:function (card){
        return get.suit(card)=='spade';
    },
                position:"h",
                prompt:"弃置一张黑桃手牌交换两名角色的装备区里的牌或判定区里的牌",
                check:function (card){
        return 8-get.value(card)
    },
                audio:"ext:yttl_zhangwuji:2",
                selectTarget:2,
                filterTarget:function (card,player,target){
        //if(target.isMin()) return false;
        if(ui.selected.targets.length==0) return true;
        if(ui.selected.targets[0].countCards('e')!=0||target.countCards('e')!=0) return true;
        if(ui.selected.targets[0].countCards('j')!=0||target.countCards('j')!=0) return true;
        return false;
    },
                multitarget:true,
                content:function (){
        "step 0"
        var controls=[];
        if(targets[0].countCards('e')!=0||targets[1].countCards('e')!=0){
            controls.push('选项一');
        }
        if(targets[0].countCards('j')!=0||targets[1].countCards('j')!=0){
            controls.push('选项二');
        }
        if(controls.length==0) event.finish();
        event.on1='<br><br><div class="text">选项一:交换'+get.translation(targets[0])+'和'+get.translation(targets[1])+'装备区里的的牌</div>';
        event.on2='<br><br><div class="text">选项二:交换'+get.translation(targets[0])+'和'+get.translation(targets[1])+'判定区里的的牌</div>';
        var str='请选择一项'+event.on1+''+event.on2+'';
        
        player.chooseControl(controls,ui.create.dialog(str,'hidden')).ai=function(){
            return Math.floor(Math.random()*controls.length);
        }; 
        "step 1"
        if(result.control){
            player.popup(result.control);
            game.log(player,'选择了',result.control);
            if(result.control=='选项一'){
                event.goto(2);
            }
            if(result.control=='选项二'){
                event.goto(4);
            }
        }
        else{
            event.finish();
        }
        "step 2" 
        event.cards=[targets[0].getCards('e'),targets[1].getCards('e')];
        targets[0].lose(event.cards[0],ui.special);
        targets[1].lose(event.cards[1],ui.special);
        if(event.cards[0].length) targets[0].$give(event.cards[0],targets[1]);
        if(event.cards[1].length) targets[1].$give(event.cards[1],targets[0]);
        "step 3"
        for(var i=0;i<event.cards[1].length;i++){
            targets[0].equip(event.cards[1][i]);
        }
        for(var i=0;i<event.cards[0].length;i++){
            targets[1].equip(event.cards[0][i]);
        }
        event.finish();
        "step 4"
        event.cards=[targets[0].getCards('j'),targets[1].getCards('j')];
        targets[0].lose(event.cards[0],ui.special);
        targets[1].lose(event.cards[1],ui.special);
        if(event.cards[0].length) targets[0].$give(event.cards[0],targets[1]);
        if(event.cards[1].length) targets[1].$give(event.cards[1],targets[0]);
        "step 5"
        for(var i=0;i<event.cards[1].length;i++){
            if(event.cards[1][i].viewAs){
                targets[0].addJudge({name:event.cards[1][i].viewAs},[event.cards[1][i]]);
            }
            else{
                targets[0].addJudge(event.cards[1][i]);
            }
        }
        for(var i=0;i<event.cards[0].length;i++){
            if(event.cards[0][i].viewAs){
                targets[1].addJudge({name:event.cards[0][i].viewAs},[event.cards[0][i]]);
            }
            else{
                targets[1].addJudge(event.cards[0][i]);
            }
        }
        event.finish();
    },
                ai:{
                    order:10,
                    threaten:function (player,target){
            return 1;
        },
                    result:{
                        target:function (player,target){
                var att=get.attitude(player,target);
                var es=target.countCards('e');
                var js=target.countCards('j');
                if(ui.selected.targets.length==0){
                    if(att>0&&es==0&&js>0) return js;
                    if(att>0&&es==0&&js==0) return 1;
                }
                else{
                    var tar=ui.selected.targets[0];
                    if(tar.countCards('e')==0&&tar.countCards('j')>0){
                        if(att<=0&&es==0&&js==0) return -1;
                    }
                    if(tar.countCards('e')==0&&tar.countCards('j')==0){
                        if(att<=0&&es>0&&js==0) return -es;
                    }
                }
                return 0;
            },
                    },
                },
            },
            "yttl_jiuyang":{
				audio:"ext:金庸群侠传:2",
                group:"yttl_jiuyang_before",
                subSkill:{
                    before:{
                        trigger:{
                            global:"equipBefore",
                        },
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                if(event.player==player) return false;
                if(get.subtype(event.card)=='equip1') return true
                return false;
            },
                        content:function (){
                trigger.attrangeBefore=true;
                trigger.attrangeBeforeNUM=trigger.player.getAttackRange();
            },
                        sub:true,
                    },
                },
                trigger:{
                    global:"equipEnd",
                },
                direct:true,
                filter:function (event,player){
        if(event.player==player) return false;
        if(!event.attrangeBefore) return false;
        if(get.subtype(event.card)!='equip1') return false;
        if(event.attrangeBeforeNUM<event.player.getAttackRange()) return true;
        return false;
    },
                content:function (){
        "step 0"
        event.num=trigger.player.getAttackRange()-trigger.attrangeBeforeNUM;
        "step 1"
        if(event.num>0){
            player.chooseToUse({name:'sha'},trigger.player,-1,'九阳：是否对'+get.translation(trigger.player)+'使用杀').set('targetRequired',true);
        }
        else{
            event.finish();
        }
        "step 2"
        if(result.bool==false){ 
            event.finish();
        }
        else{
            player.logSkill('yttl_jiuyang');
            event.num--;
            event.goto(1);
        }
    },
                ai:{
                    threaten:0.8,
                },
            },
            "yttl_chuqiao":{
				audio:"ext:金庸群侠传:2",
                group:["yttl_chuqiao_remove"],
                subSkill:{
                    remove:{
                        trigger:{
                            global:"gameStart",
                            player:"enterGame",
                        },
                        popup:false,
                        forced:true,
                        filter:function (event,player){
                return player.identity!='zhu';
            },
                        content:function (){
                player.removeSkill('yttl_chuqiao');
            },
                        sub:true,
                    },
                },
                trigger:{
                    global:"shaMiss",
                },
                priority:-8,
                unique:true,
                zhuSkill:true,
                direct:true,
                filter:function (event,player){
        if(!player.hasZhuSkill('yttl_chuqiao')) return false;
        if(event.player.group!='wu') return false;
        if(event.player==player) return false;
        if(event.cards){
            for(var i=0;i<event.cards.length;i++){
                if(get.position(event.cards[i])=='d') return true;
            }
        }
        return false;
    },
                content:function (){
        "step 0"
        event.cards=[];
        for(var i=0;i<trigger.cards.length;i++){
            if(get.position(trigger.cards[i])=='d'){
                event.cards.push(trigger.cards[i]);
            }
        }
        "step 1"
        trigger.player.chooseBool('是否令'+get.translation(player)+'获得'+get.translation(event.cards)+'？').set('ai',function(){                                
            if(get.attitude(trigger.player,player)>0) return true;                     
            return false;
        }); 
        "step 2"
        if(result.bool){
            trigger.player.logSkill('yttl_chuqiao',player);
            player.gain(event.cards,'gain2');
        }
        else{
            event.finish();
        }    
    },
            },
	"yttl_cstaiji":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"loseEnd",
                },
                frequent:true,
                filter:function (event,player){
        if(player.countCards('h')) return false;
        for(var i=0;i<event.cards.length;i++){
            if(event.cards[i].original=='h'){
                if(player.canUse({name:'wuzhong'},player)) return true;
            }
        }
        return false;
    },
                content:function (){
        player.useCard({name:'wuzhong'},player);
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
            "yttl_yinjiu":{
                init:function (player){
        player.storage.yttl_yinjiu=[];
    },
                intro:{
                    content:"characters",
                },
				audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"phaseBegin",
                },
                direct:true,
                filter:function (event,player,name){
        if(!player.countCards('h')) return false;
        return game.hasPlayer(function(current){
            return !player.storage.yttl_yinjiu.contains(current.name)&&current!=player;
        });
    },
                content:function (){
         "step 0"
        player.chooseTarget(get.prompt('yttl_yinjiu'),'是否将全部手牌交给一名你未依此法交过牌的其他角色?，若如此做,当其使用普通锦囊牌对你造成伤害时，取消之',function(card,player,target){
            if(player.storage.yttl_yinjiu.contains(target.name)) return false;
            return target!=player;
        }).set('ai',function(target){
            var att=get.attitude(player,target);
            var hs=player.getCards('h');
            if(att>0&&hs.length>1) return att;
            if(att<=0&&hs.length==1&&get.value(hs[0])<6) return 1;
            return -1;
        });
        "step 1"
        if(result.bool){
            player.logSkill('yttl_yinjiu',result.targets);
            player.line(result.targets[0],'green');
            if(!player.storage.yttl_yinjiu.contains(result.targets[0].name)){
                player.storage.yttl_yinjiu.push(result.targets[0].name);
                player.markSkill('yttl_yinjiu');
                //player.syncStorage('yttl_yinjiu');         
            }
            var hs=player.getCards('h');
            result.targets[0].$gain2(hs);
            result.targets[0].gain(hs,player);
            game.log(result.targets[0],'获得'+hs.length+'张牌');
            event.tar=result.targets[0];
        }
        else{
            event.finish();
        }
        "step 2"
        var next=event.tar.chooseCard([1,Infinity],'h','是否交给'+get.translation(player)+'任意张牌？',function(card,player){
            return true;
        });
        var att1=get.attitude(event.tar,player);
        next.ai=function(card){
            if(att1>0){
                if(ui.selected.cards.length>0) return -1;
                return 1;
            }
            return -1;
        };
        "step 3"
        if(result.bool){
            event.tar.line(player,'green');
            player.gain(result.cards,event.tar);
            event.tar.$give(result.cards.length,player);
            game.log(player,'获得'+result.cards.length+'张牌');
            
        }
    },
                group:"yttl_yinjiu_undamage",
                subSkill:{
                    undamage:{
                        trigger:{
                            player:"damageBefore",
                        },
                        filter:function (event,player){
                if(event.source==player) return false;
                if(!player.storage.yttl_yinjiu.contains(event.source.name)) return false;
                return event.card&&get.type(event.card)=='trick';
            },
                        forced:true,
                        content:function (){
				game.playJY(['yttl_yinjiu1','yttl_yinjiu2'].randomGet());			
                trigger.cancel();
            },
                        sub:true,
                    },
                },
                ai:{
                    notrick:true,
                    notricksource:true,
                    effect:{
                        target:function (card,player,target,current){
                if(!target.storage.yttl_yinjiu.contains(player.name)) return;
                if(get.type(card)=='trick'&&get.tag(card,'damage')){
                    return 'zeroplayertarget';
                }
            },
                    },
                },
            },
	"yttl_jixian":{
                init:function (player){
        player.storage.yttl_jixian=true;
    },
                mark:true,
                marktext:"嫉",
                intro:{
                    content:function (storage,player,skill){
            if(player.storage.yttl_jixian==true) return '摸:一名角色一次性获得至少两张牌后，你可以摸等量的牌';
            return '弃:一名角色一次性失去至少两张牌后，你可以弃置等量的牌';
        },
                },
				 audio:"ext:金庸群侠传:2",
                trigger:{
                    global:["gainEnd","loseEnd"],
                },
                filter:function (event,player,cards){
        if(event.player==player) return false;
        if(event.name=='gain'&&player.storage.yttl_jixian==true&&event.cards&&event.cards.length>1) return true;
        if(event.name=='lose'&&event.cards&&event.cards.length>1&&player.storage.yttl_jixian==false){
            if(player.countCards('he')>=event.cards.length) return true;       
        }
        return false;
    },
                check:function (event,player){
        if(event.name=='gain') return true;
        if(event.name=='lose'&&event.cards.length==2) return true;
        return false; 
    },
                content:function (){
        "step 0"
        var numm=trigger.cards.length;
        if(trigger.name=='gain'){
            player.draw(numm);
            player.storage.yttl_jixian=false;
        }
        if(trigger.name=='lose'){
            player.chooseToDiscard(numm,'he',true);
            player.storage.yttl_jixian=true;
        }
    },
            },
            "yttl_nishi":{
                 audio:"ext:金庸群侠传:2",
                enable:"phaseUse",
                position:"he",
                usable:1,
                filter:function (event,player){
        if(player.countCards('h')>=2) return true;
        return player.countCards('he',{type:'equip'})>0;
    },
                selectCard:function (target,card,player){
        var tar=ui.selected.targets
        var ca=ui.selected.cards;
        if(ca.length==0) return 2;
        if(ca.length==1){
            if(get.type(ca[0])=='equip'){
                if(get.position(ca[0])=='e'){
                    return 1;
                }
                else if(get.position(ca[0])=='h'){
                    if(tar.length==0) return [1,2];
                    if(tar.length==1) return 1;
                }
            }
            else if(get.type(ca[0])!='equip'){
                return 2;
            }
        };
        if(ca.length>1) return ca.length;
    },
                filterCard:function (card){
        var ca=ui.selected.cards;
        if(ca.length==0) return true;
        if(ca.length==1){
            if(get.type(ca[0])=='equip'){
                if(get.position(ca[0])=='e'){
                    return false;
                }
                else if(get.position(ca[0])=='h'){
                    if(get.position(card)=='e') return false;
                }
            }
            else if(get.type(ca[0])!='equip'){
                if(get.position(card)=='e') return false;
            }
        }
        if(ca.length>1) return false;
        return true;
    },
                check:function (card){
        var ca=ui.selected.cards;
        if(ca.length==0){
            var player=_status.currentPhase;
            if(player.countCards('he',{subtype:get.subtype(card)})>1){
                return 7-get.equipValue(card);
            }
            return 6-get.value(card);
        }
        if(ca.length>0){
            var player=_status.currentPhase;
            return 8-get.value(card);
        }
    },
                filterTarget:function (card,player,target){
        var ca=ui.selected.cards;
        if(ca.length==0) return false;
        if(ca.length==1){
            if(get.type(ca[0])=='equip'){
                if(get.position(ca[0])=='e'){
                    if(target.isMin()) return false;
                    if(!target.countCards('h')) return false;
                    return player!=target&&!target.getEquip(card);
                }
                else if(get.position(ca[0])=='h'){
                    if(target.isMin()) return false;
                    if(!target.countCards('h')) return false;
                    return player!=target&&!target.getEquip(card);
                }
            }
            else if(get.type(ca[0])!='equip'){
                return false;
            }
        }
        if(ca.length==2){
            if(target==player) return false;
            if(!target.countCards('e')) return false;
        }
        if(ca.length>2) return false;
        return true;
    },
                content:function (){
        "step 0"
        if(cards.length==1){
            target.equip(cards[0]);
            var num=Math.min(2,target.countCards('h'));
            if(num>0) player.gainPlayerCard(num,target,true,'h');    
        }
        else if(cards.length==2){
            target.gain(cards,player);
            var num=target.countCards('e');
            if(num>0) player.gainPlayerCard(1,target,true,'e');    
        }
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
                        target:function (player,target){
                var cas=ui.selected.cards.length;
                var att=get.attitude(player,target);
                var num=target.countCards('h');
                var num1=target.countCards('e');
                if(cas==2&&num1>1) return 1;
                if(cas==2&&num1==1) return -0.5;
                if(cas==1&&num==1&&num1==0) return 1;
                if(cas==1&&num>1&&num1==1) return -0.01;
                return 0.001;
            },
                    },
                    threaten:1,
                },
            },
	"yttl_huiqiao":{
				 audio:"ext:金庸群侠传:2",
                trigger:{
                    global:["loseEnd","discardAfter"],
                },
                filter:function (event,player){
        if(event.player==player) return false;
        if(event.name=='lose'&&event.parent.name!='equip') return false;
        for(var i=0;i<event.cards.length;i++){
            if(get.subtype(event.cards[i])=='equip1'&&get.position(event.cards[i])=='d'){
                return true;
            }
        }
    },
                direct:true,
                content:function (){
        "step 0"
        if(trigger.delay==false) game.delay();
        "step 1"
        var cards=[];
        for(var i=0;i<trigger.cards.length;i++){
            if(get.subtype(trigger.cards[i])=='equip1'&&get.position(trigger.cards[i])=='d'){
                cards.push(trigger.cards[i]);
            }
        }
        if(cards.length){
            event.zhuangbei=cards;
        }
        "step 2"
        if(event.zhuangbei.length){
            player.chooseCardButton(event.zhuangbei,1,'请选择一张装备').set('filterButton',function(button){
                return get.subtype(button.link)=='equip1';
            });
        }
        else{
             event.finish();
        }  
        "step 3"
        if(result.bool){
            event.gainzhuangbei=result.links[0];
            event.zhuangbei.remove(result.links[0]);
        }
        else{
            event.finish();
        }  
         "step 4"
        player.chooseTarget('是否选择一名角色装备'+get.translation(event.gainzhuangbei)+'？',function(card,player,target){
           if(target.getEquip(1)) return false;
            return true;
        }).set('ai',function(target){
            var att=get.attitude(player,target);
            if(target==player) att+=10;
            return att;
        });
       "step 5"
        if(result.bool){
            player.logSkill('yttl_huiqiao',result.targets[0]);
            result.targets[0].equip(event.gainzhuangbei,true).set('delay',true);
            event.goto(2);
        }
        else{
            event.goto(2);
        } 
    },
            },
            
            "yttl_jie":{
                trigger:{
                    global:"dying",
                },
                priority:6,
                audio:"ext:金庸群侠传:2",
                check:function (event,player){
        var att1=get.attitude(player,event.parent.source);
        var att2=get.attitude(player,event.player);
        var hs=false;
        var es=false;
        var js=false;
        if(event.parent.source.countDiscardableCards(player,'h')) hs=true;
        if(event.parent.source.countDiscardableCards(player,'e')) es=true;
        if(event.parent.source.countDiscardableCards(player,'j')) js=true;
        if(att1<=0&&att2>0){
            if(hs==true&&es==true&&js==true) return true;
            if(hs==true&&es==true&&js==false) return true;   
            if(hs==true&&es==false&&js==false) return true;
            if(hs==false&&es==true&&js==false) return true;
        }
        if(att1<=0&&att2<=0){
            if(hs==true&&es==true&&js==true) return true;
            if(hs==true&&es==true&&js==false) return true;
            if(hs==false&&es==true&&js==false) return true;
            if(hs==true&&es==false&&js==false) return true;
        }
        if(att1>0&&att2>0){
            if(hs==true&&es==true&&js==true) return true;
            if(hs==false&&es==false&&js==true) return true;
            if(hs==false&&es==true&&js==true) return true;
            if(hs==true&&es==false&&js==true) return true;
        }
        if(att1>0&&att2<=0){
            if(hs==false&&es==false&&js==true) return true;
        }
        return false;
    },
                filter:function (event,player){
        if(event.fadongjineng==true) return false;
        if(!event.parent.source) return false;
        if(!event.parent.source.countDiscardableCards(player,'hej')) return false;
        //if(!event.parent.source.countCards('hej')) return false;
        return event.parent.source.isIn()&&event.player.hp<=0;
    },
                content:function (){
        "step 0"
        trigger.fadongjineng=true;
        var num=0;
        if(trigger.parent.source.countDiscardableCards(player,'h')) num++;
        if(trigger.parent.source.countDiscardableCards(player,'e')) num++;
        if(trigger.parent.source.countDiscardableCards(player,'j')) num++;
        if(num){
            player.discardPlayerCard(trigger.parent.source,num,'hej',true).set('filterButton',function(button){
                for(var i=0;i<ui.selected.buttons.length;i++){
                    if(get.position(button.link)==get.position(ui.selected.buttons[i].link)) return false;
                }
                return true;
            }).set('ai',function(button){
                var att1=get.attitude(player,trigger.parent.source);
                var att2=get.attitude(player,trigger.player);
                if(att1>0&&att2>0){
                    if(ui.selected.buttons.length==0){
                        if(get.position(button.link)=='j') return 1;
                        return -1;
                    }
                    if(ui.selected.buttons.length>0){
                        if(get.color(button.link)!=get.color(ui.selected.buttons[0].link)) return 1;
                        return -1;
                    }       
                }
                if(att1>0&&att2<=0){
                    if(ui.selected.buttons.length==0){
                        if(get.position(button.link)=='j') return 1;
                        return -1;
                    }
                    if(ui.selected.buttons.length>0){
                        if(get.color(button.link)==get.color(ui.selected.buttons[0].link)) return 1;
                        return -1;
                    }         
                }
                if(att1<=0&&att2>0){
                    if(ui.selected.buttons.length==0){
                        if(get.position(button.link)!='j') return 1;
                        return -1;
                    }
                    if(ui.selected.buttons.length>0){
                        if(get.position(button.link)!='j'&&get.color(button.link)!=get.color(ui.selected.buttons[0].link)) return 1;
                        if(get.position(button.link)!='j'&&get.color(button.link)==get.color(ui.selected.buttons[0].link)) return 0.5;
                        return -1;
                    }                     
                }
                if(att1<=0&&att2<=0){
                    if(ui.selected.buttons.length==0){
                        if(get.position(button.link)!='j') return 1;
                        return -1;
                    }
                    if(ui.selected.buttons.length>0){
                        if(get.position(button.link)!='j'&&get.color(button.link)==get.color(ui.selected.buttons[0].link)) return 0.5;
                        return -1;
                    }                     
                }
                return -1;
            });
        }
        "step 1"
        if(result.bool){
            var col=[];
            var car=result.links;
            player.showCards(car,'嫉恶');
            for(var i=0;i<car.length;i++){
                var cols=get.color(car[i]);
                if(!col.contains(cols)){
                    col.push(cols);
                }
            } 
            if(col.length>=2) trigger.player.recover();
        }
    },
                ai:{
                    threaten:1.4,
                },
            },
            "yttl_zhangjian":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:["shaBefore"],
                },
                frequent:true,
                filter:function (event,player){
        if(!player.getEquip(1)) return false;
        return true;
    },
                content:function (){
        player.draw();
    },
            },
	"yttl_xuanming":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    player:["shaBefore"],
                },
                forced:true,
                filter:function (event,player){
        return get.number(event.card);
    },
                content:function (){
        if(get.number(trigger.card)%2==0) trigger.target.addTempSkill('yttl_xuanming_ou','shaAfter');
        if(get.number(trigger.card)%2==1) trigger.target.addTempSkill('yttl_xuanming_ji','shaAfter');
     },
                subSkill:{
                    ou:{
                        mark:true,
                        marktext:"偶",
                        intro:{
                            content:"你不能打出点数为奇数的牌",
                        },
                        mod:{
                            cardRespondable:function (card,player){
                    var num1=get.number(card);
                    if(num1%2==1) return false;
                },
                        },
                        sub:true,
                    },
                    ji:{
                        mark:true,
                        marktext:"奇",
                        intro:{
                            content:"你不能打出点数为偶数的牌",
                        },
                        mod:{
                            cardRespondable:function (card,player){
                    var num1=get.number(card);
                    if(num1%2==0) return false;
                },
                        },
                        sub:true,
                    },
                },
            },
            "yttl_hanyin":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"phaseUseBegin",
                },
                content:function (){
        'step 0'
        event.cards=get.cards(2);
        player.showCards(event.cards,'酣淫');
        'step 1'
        var skr='是否选择一张黑色牌或无中生有?，若为无中生有你获得之，否则你将此牌当酒使用，若你依此法使用了牌或获得了牌，你此回合不能使用与该牌颜色不同的牌';
        player.chooseCardButton(event.cards,1,skr).set('filterButton',function(button){
            var cards=button.link;
            return get.color(cards)=='black'||cards.name=='wuzhong';
        }).set('ai',function(button){
            var resha=false;
            var blsha=false;
            var blnum=0;
            var renum=0;
            var ca=player.getCards('h');
            for(var i=0;i<ca.length;i++){
                if(get.color(ca[i])=='black'){
                    var canblack=game.hasPlayer(function(current){
                        return get.effect(current,ca[i],player,player)>0&&player.canUse(ca[i],current);
                    });
                    if(canblack&&ca[i].name!='sha') blnum++;
                    if(canblack&&ca[i].name=='sha'&&blsha==false) blsha=true;
                }
                if(get.color(ca[i])=='red'){
                    var canred=game.hasPlayer(function(current){
                        return get.effect(current,ca[i],player,player)>0&&player.canUse(ca[i],current);
                    });
                    if(canred&&ca[i].name!='sha') renum++;
                    if(canred&&ca[i].name=='sha'&&resha==false) resha=true;
                }
            }
            if(resha==true) renum++;
            if(blsha==true) blnum++;
            if(get.color(button.link)=='black'){
                if(blsha==true&&renum<2) return 1;
            }
            if(get.color(button.link)=='red'){
                if(resha==true&&blnum<2) return 1;
                if(resha==false&&blsha==false&&blnum<2) return 1;
            }
            return -1;
        });
          'step 2'
          if(result.bool){
              if(result.links[0].name=='wuzhong'){
                  player.gain(result.links[0],'gain2');
               //   player.useCard(result.links[0],player);
              }
              else{
                  player.useCard({name:'jiu'},player,result.links);
              }
              player.addTempSkill('yttl_hanyin_'+get.color(result.links[0]));
              for(var i=0;i<event.cards.length;i++){
                  if(result.links[0]!=event.cards[i]){
                      event.cards[i].discard();
                  }
              }
          }
          else{
              for(var i=0;i<event.cards.length;i++){
                  event.cards[i].discard();
              }
          }   
    },
                subSkill:{
                    red:{
                        mark:true,
                        marktext:"黑",
                        intro:{
                            content:"不能使用黑色牌",
                        },
                        mod:{
                            cardEnabled:function (card,player){
                    if(get.color(card)=='black') return false;
                },
                            cardUsable:function (card,player){
                    if(get.color(card)=='black') return false;
                },
                            cardSavable:function (card,player){
                    if(get.color(card)=='black') return false;
                },
                            targetInRange:function (card){
                    if(get.color(card)=='black') return false;
                },
                        },
                        sub:true,
                    },
                    black:{
                        mark:true,
                        marktext:"红",
                        intro:{
                            content:"不能使用红色牌",
                        },
                        mod:{
                            cardEnabled:function (card,player){
                    if(get.color(card)=='red') return false;
                },
                            cardUsable:function (card,player){
                    if(get.color(card)=='red') return false;
                },
                            cardSavable:function (card,player){
                    if(get.color(card)=='red') return false;
                },
                            targetInRange:function (card){
                    if(get.color(card)=='red') return false;
                },
                        },
                        sub:true,
                    },
                },
            },
	"yttl_lttaiji":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"loseEnd",
                },
             		frequent:true,
				filter:function(event,player){
					if(player.countCards('h')) return false;
					for(var i=0;i<event.cards.length;i++){
						if(event.cards[i].original=='h') return true;
					}
					return false;
				},
                content:function (){
       player.useCard({name:'wuzhong'},player);
    },
                ai:{
                    order:2,
                    result:{
                        player:function (player)  {     
                return 1;
            },
                    },
                },
            },
            "yttl_chanru":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"damageBegin",
                },
                filter:function (event,player){
        return player.countCards('h')>0&&event.card&&get.color(event.card)=='black'&&event.card.name=='sha';
    },
                content:function (){
        "step 0"
                player.chooseCard('h',true,'交给'+get.translation(trigger.source)+'一张手牌').ai=function(card){
    return 6.5-get.value(card);
          };                
        "step 1"
      if(result.bool){ 
        var card=result.cards[0];
        player.$give(card,trigger.source);
        trigger.source.gain(card,player);
        trigger.num--;
        }    
        else{
            event.finish();
        }  
    },
                ai:{
                    threaten:0.8,
                    order:3,
                },
            },
            "yttl_tongshou":{
                skillAnimation:true,
                audio:"ext:金庸群侠传:2",
                derivation:["yttl_lttaiji"],
                unique:true,
                trigger:{
                    player:"phaseBeginStart",
                },
                filter:function (event,player){
        return player.countCards('h')<=0;
    },
                forced:true,
                priority:3,
                content:function (){
        player.loseMaxHp();
        player.addSkill('yttl_lttaiji');        
        player.awakenSkill('yttl_tongshou');       
    },
                ai:{
                    threaten:function (player,target){           
            return 0.5;
        },
                },
            },
	 "yttl_xiaoyong":{
                audio:"ext:金庸群侠传:2",
                enable:["chooseToUse"],
                usable:1,
                filterCard:function (card,player){
        var type=get.type(card);
        if(type=='trick'||type=='delay') return true;
        return false;
    },
                position:"h",
                viewAs:{
                    name:"sha",
                    suit:"spade",
                    number:1,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"spade","number":1,"name":"shandian","nature":"thunder","cardid":"1865035315","_transform":"translateX(145.5px)","clone":{"name":"shandian","suit":"spade","number":1,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":329},"timeout":297,"original":"h"}],
                },
                viewAsFilter:function (player){
        var num1=player.countCards('h',{type:'trick'});
        var num2=player.countCards('h',{type:'delay'});
        if(_status.currentPhase!=player) return false;
        if(num1+num2==0) return false;
    },
                prompt:"将一张锦囊牌当杀使用",
                check:function (card){
        return 6-get.value(card);
    },
                ai:{
                    skillTagFilter:function (player){
            var num1=player.countCards('h',{type:'trick'});
            var num2=player.countCards('h',{type:'delay'});
            if(_status.currentPhase!=player) return false;
            if(num1+num2==0) return false;
        },
                    basic:{
                        useful:[5,1],
                        value:[5,1],
                    },
                    order:function (){
            return get.order({name:'sha'})+0.1;
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
                group:["yttl_xiaoyong_use"],
                subSkill:{
                    use:{
                        trigger:{
                            player:"useCard",
                        },
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                return event.skill=='yttl_xiaoyong'&&event.card.name=='sha'&&_status.currentPhase==player;
            },
                        content:function (){
                player.getStat().card.sha--;
            },
                        sub:true,
                    },
                },
            },
            "yttl_xianfeng":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                content:function (){
        'step 0'
        player.phaseUse();
        'step 1'
        player.getStat().card={};
        player.getStat().skill={};
    },
            },
	"yttl_qizhao":{
                 audio:"ext:金庸群侠传:2",
                enable:["chooseToRespond","chooseToUse"],
                filterCard:function (card,player){
        if(!player.getEquip(1)) return false;
        var cards=player.getEquip(1);
        return get.color(card)==get.color(cards);
    },
                position:"he",
                viewAs:{
                    name:"sha",
                    suit:"heart",
                    number:6,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{"vanish":true},"vanishtag":[],"_uncheck":[],"suit":"heart","number":6,"name":"zhuge","cardid":"8774026622","clone":{"name":"zhuge","suit":"heart","number":6,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":274},"timeout":247,"original":"e"}],
                },
                viewAsFilter:function (player){
        if(!player.getEquip(1)) return false;
        var cards=player.getEquip(1);
        var colors=get.color(cards);
        if(!player.countCards('he',{color:colors})) return false;
    },
                prompt:"将一张与你武器牌颜色相同的牌当杀使用或打出",
                check:function (card){
        var value=get.value(card);
        if(get.subtype(card)=='equip1') value+=7;
        if(get.position(card)=='e'&&get.subtype(card)=='equip1') value+=2;
        if(get.position(card)=='e'&&card.name=='zhuge') value+=1;
        if(card.name=='zhuge') value+=1;
        return 20-value
    },
                ai:{
                    skillTagFilter:function (player){
            if(!player.getEquip(1)) return false;
            var cards=player.getEquip(1);
            var colors=get.color(cards);
            if(!player.countCards('he',{color:colors})) return false;
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
            "yttl_lingjian":{
                audio:"ext:金庸群侠传:2",
                unique:true,
                mark:true,
                skillAnimation:true,
                trigger:{
                    player:"phaseBegin",
                },
                init:function (player){
        player.storage.yttl_lingjian=false;
    },
                filter:function (event,player){
        if(event.player.getEquip(1)) return false;
        if(player.storage.yttl_lingjian) return false;
        return true;
    },
                check:function (event,player){
        if(event.player==player) return true;
        return false;
    },
                content:function (){
           "step 0"
        player.awakenSkill('yttl_lingjian');
        trigger.player.draw(2);
        player.storage.yttl_lingjian=true;
        "step 1"
        if(player.countCards('he')>0){ 
            player.chooseToDiscard(1,'he',true);
        }
          "step 2"
          var list=[];
        for(var i=0;i<lib.inpile.length;i++){
            var name=lib.inpile[i];
            var card={name:name};
            var subtype=get.subtype(card);
            if(subtype&&subtype=='equip1'){
                list.push(['武器','',name]);              
            }
        }
        var dialog=ui.create.dialog('选择一张武器牌令其装备之',[list,'vcard'],'hidden');
        player.chooseButton(dialog,true).set('ai',function(button){
            var card={name:button.link[2]};
            var value=get.value(card);
            if(trigger.player.hasSkill('wusheng')&&card.name=='zhuge') value+=10;
            if(trigger.player.hasSkill('yttl_qizhao')&&card.name=='zhuge') value+=10;
            if(trigger.player.hasSkill('paoxiao')&&card.name=='zhangba') value+=10;
            return value;
        });
        'step 3'
        if(result.bool){
            var card=game.createCard(result.buttons[0].link[2]);
            trigger.player.equip(card,true).set('delay',true);
            trigger.player.storage.yttl_lingjianwuqi=card;
            trigger.player.addSkill('yttl_lingjian_end');
        }
        
    },
                intro:{
                    content:"limited",
                },
                subSkill:{
                    end:{
                        group:["yttl_lingjian_die"],
                        onremove:function (player){
                var card=player.storage.yttl_lingjianwuqi;
                ui.special.appendChild(card);
                delete player.storage.yttl_lingjianwuqi;
            },
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        popup:false,
                        content:function (){
                player.removeSkill('yttl_lingjian_end');
            },
                        sub:true,
                    },
                    die:{
                        trigger:{
                            player:"dieBegin",
                        },
                        forced:true,
                        popup:false,
                        content:function (){
                player.removeSkill('yttl_lingjian_end');
            },
                        sub:true,
                    },
                },
            },
	"yttl_hanji":{
                mod:{
                    targetEnabled:function (card,player,target){
            if(player!=target&&card.number<8) return false;
        },
                    playerEnabled:function (card,player,target){
            if(player!=target&&card.number>10) return false;
        },
                },
            },
            "yttl_jiedao2":{
               audio:"ext:金庸群侠传:2",
                enable:"chooseToUse",
                filterCard:function (card){
        return get.suit(card)=='club';
    },
                position:"he",
                viewAs:{
                    name:"jiedao",
                },
                viewAsFilter:function (player){
        if(!player.countCards('h',{suit:'club'})) return false;
    },
                prompt:"将一张梅花牌当借刀杀人使用",
                check:function (card){
        return 4-get.value(card);
    },
                ai:{
                    skillTagFilter:function (player){
            return player.countCards('h',{suit:'club'})>0;
        },
                    threaten:0.5,
                    save:true,
                    order:function (){
            return get.order({name:'sha'})+0.2;
        },
                    basic:{
                        order:8,
                        value:2,
                        useful:1,
                    },
                    result:{
                        target:-1.5,
                        player:function (player){
                if(player.getCards('he',{subtype:'equip1'}).length) return 0;
                return 1.5;
            },
                    },
                    tag:{
                        gain:1,
                        use:1,
                        useSha:1,
                        loseCard:1,
                    },
                },
            },
            "yttl_jiedao":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"phaseUseBegin",
                },
                direct:true,
                filter:function (event,player){
        return player.countCards('h');
    },
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt('yttl_jiedao2'),function(card,player,target){
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
            player.logSkill('yttl_jiedao2',result.targets);
            event.target=result.targets[0];
            player.chooseToCompare(event.target);
        }
        else{
            event.finish();
        }
        'step 2'
        if(result.bool){
            player.addTempSkill('yttl_jiedao2','phaseEnd');
        }
        else{
            if(player.getEquip(1)!=undefined){
                player.discard(player.getEquip(1));
            }
        }
    },
            },
	"yttl_chuxin":{
	 audio:"ext:金庸群侠传:2",
                trigger:{
                    player:["useCard","respond"],
                },
                priority:-1,
                silent:true,
                filter:function (event,player){
        if(player.hasSkill('yttl_chuxin_heart')) return false;
        if(player.hasSkill('yttl_chuxin_diamond')) return false;
        if(player.hasSkill('yttl_chuxin_club')) return false;
        if(player.hasSkill('yttl_chuxin_spade')) return false;
        if(!event.cards||event.cards.length!=1) return false;
        return true;
    },
                content:function (){
        player.addSkill('yttl_chuxin_'+get.suit(trigger.cards[0]));
    },
                forced:true,
                subSkill:{
                    heart:{
                        mark:true,
                        marktext:"♥️",
                        intro:{
                            content:"你的♥️牌不计入手牌上限",
                        },
                        mod:{
                            ignoredHandcard:function (card,player){
                    if(get.suit(card)=='heart') return true;
                },
                            cardDiscardable:function (card,player,name){
                    if(name=='phaseDiscard'&&get.suit(card)=='heart') return false;
                },
                        },
                        sub:true,
                    },
                    diamond:{
                        mark:true,
                        marktext:"♦️",
                        intro:{
                            content:"你的♦️牌不计入手牌上限",
                        },
                        mod:{
                            ignoredHandcard:function (card,player){
                    if(get.suit(card)=='diamond') return true;
                },
                            cardDiscardable:function (card,player,name){
                    if(name=='phaseDiscard'&&get.suit(card)=='diamond') return false;
                },
                        },
                        sub:true,
                    },
                    club:{
                        mark:true,
                        marktext:"♣️",
                        intro:{
                            content:"你的♣️牌不计入手牌上限",
                        },
                        mod:{
                            ignoredHandcard:function (card,player){
                    if(get.suit(card)=='club') return true;
                },
                            cardDiscardable:function (card,player,name){
                    if(name=='phaseDiscard'&&get.suit(card)=='club') return false;
                },
                        },
                        sub:true,
                    },
                    spade:{
                        mark:true,
                        marktext:"♠️",
                        intro:{
                            content:"你的♠️牌不计入手牌上限",
                        },
                        mod:{
                            ignoredHandcard:function (card,player){
                    if(get.suit(card)=='spade') return true;
                },
                            cardDiscardable:function (card,player,name){
                    if(name=='phaseDiscard'&&get.suit(card)=='spade') return false;
                },
                        },
                        sub:true,
                    },
                },
                popup:false,
            },
            "yttl_maodu":{
                 audio:"ext:金庸群侠传:2",
                enable:"phaseUse",
                usable:1,
                content:function (){
        "step 0"
        player.loseMaxHp(2);
        'step 0'
        player.chooseTarget('是否选择一名体力上限大于你的体力上限的角色流失一体力？，否则你摸四张牌',function(card,player,target){
            return target!=player&&target.maxHp>player.maxHp;
        }).set('ai',function(target){
            if(target.hp==1){
                return -get.attitude(player,target);
            }
            return -1;         
        });
        'step 1'
        if(result.bool){
            result.targets[0].loseHp(1);
        }
        else{
          player.draw(4);
        }  
    },
                subSkill:{
                    damage:{
                        trigger:{
                            player:"damageEnd",
                            source:"damageEnd",
                        },
                        filter:function (event,player){
            if((event.nature)&&(event.num>0)) return true;
        },
                        forced:true,
                        content:function (){
            player.gainMaxHp(trigger.num);
        },
                        sub:true,
                    },
                },
                group:["yttl_maodu_damage"],
                ai:{
                    basic:{
                        order:1,
                    },
                    result:{
                        player:function (player){
                if(player.maxHp-player.hp>=2) return 1;
                return -1;
            },
                    },
                },
            },
"yttl_jingang":{
                 audio:"ext:金庸群侠传:2",
                enable:["chooseToUse","chooseToRespond"],              
                filterCard:function (){return false},
                init:function (player){player.storage.yttl_jingang=[];player.syncStorage('yttl_jingang');},             
                selectCard:-1,
                viewAsFilter:function (player){return player.storage.yttl_jingang<=7;},
                viewAs:{
                    name:"wuxie",
                },
                mark:true,
                		intro:{
                    content:"已发动了#次金刚",
                },
                onuse:function (result,player){
                player.turnOver();
                player.storage.yttl_jingang++;
                player.markSkill('yttl_jingang');
                player.update();
                },
                prompt:"你可以选择翻面，然后你视为使用一张【无懈可击】",
                check:function (){return 1},
                ai:{
                    threaten:0.8,
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
            "yttl_fumo":{
                 audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"turnOverEnd",
                },
               frequent:true,
               filter:function (event,player){
             return player.isTurnedOver();
    },
                content:function (){
        "step 0"
        if(typeof event.count!='number'){
            // event.count=trigger.cards.length-1;
            event.count=1;
        } 
        "step 1"
    event.num=0;
   event.players=game.filterPlayer();        
        "step 2"
        if(event.num<event.players.length){
            var target=event.players[event.num];
            if(!target.isLinked()){
                target.link();
            }
            event.num++;
            event.redo();
        }
        "step 3"
        if(event.count>1){
            event.count--;
            event.goto(0);
        }
    },
                ai:{
                    expose:0.1,
                    threaten:2,
                },
            },
            
            
            
            		/*yttl_guchanshunshou:{
						mark:true,
				mod:{
					targetEnabled:function(card,player,target,now){
						if(card.name=='shunshou') return false;
					}
				},
			},
			    		yttl_guchanguohe:{
				mod:{
					targetEnabled:function(card,player,target,now){
						if(card.name=='guohe') return false;
					}
				},
			},
            		yttl_guchanwuzhong:{
				mod:{
					targetEnabled:function(card,player,target,now){
						if(card.name=='wuzhong') return false;
					}
				},
			},    
                		yttl_guchannanman:{
				mod:{
					targetEnabled:function(card,player,target,now){
						if(card.name=='nanman') return false;
					}
				},
			},
                		yttl_guchanwanjian:{
				mod:{
					targetEnabled:function(card,player,target,now){
						if(card.name=='wanjian') return false;
					}
				},
			},
             		yttl_guchantaoyuan:{
				mod:{
					targetEnabled:function(card,player,target,now){
						if(card.name=='taoyuan') return false;
					}
				},
			},  
             		yttl_guchanjuedou:{
				mod:{
					targetEnabled:function(card,player,target,now){
						if(card.name=='juedou') return false;
					}
				},
			},   
                		yttl_guchanjiedao:{
				mod:{
					targetEnabled:function(card,player,target,now){
						if(card.name=='jiedao') return false;
					}
				},
			},
           		yttl_guchanwugu:{
				mod:{
					targetEnabled:function(card,player,target,now){
						if(card.name=='wugu') return false;
					}
				},
			},
			        		yttl_guchanshandian:{
				mod:{
					targetEnabled:function(card,player,target,now){
						if(card.name=='shandian') return false;
					}
				},
			},
			    		yttl_guchanlebu:{
				mod:{
					targetEnabled:function(card,player,target,now){
						if(card.name=='lebu') return false;
					}
				},
			},
			         		yttl_guchanbingliang:{
				mod:{
					targetEnabled:function(card,player,target,now){
						if(card.name=='bingliang') return false;
					}
				},
			},
			             		yttl_guchanhuogong:{
				mod:{
					targetEnabled:function(card,player,target,now){
						if(card.name=='huogong') return false;
					}
				},
			}, 
			           		yttl_guchantiesuo:{
				mod:{
					targetEnabled:function(card,player,target,now){
						if(card.name=='tiesuo') return false;
					}
				},
			},
			                    
			                                              

			yttl_guchan:{
					trigger:{
			        	player:["turnOverEnd","linkEnd"],
				},		
			 direct:true,
				popup:false,
				filter:function(event,player){
							if(player.turnedOver()) return false;
				if(player.linked()) return false;
					return player.isAlive();
				},
				content:function(){
					'step 0'
					player.chooseTarget(true,function(card,player,target){
						return player.isAlive();
					},'枯禅<br><br><div class="text center">令一名其他角色本局游戏不能成为这张牌的目标').set('ai',function(target){
						var player=_status.event.player;
						if(get.attitude(player,target)>0){
							if(get.attitude(target,player)>0){
								return target.countCards('h');
							}
							return -target.countCards('h')/2;
						}
						return 2;
					});
					'step 1'
					if(result.bool){
					player.logSkill('yttl_guchan');
					var target=result.targets[0];		     
					      player.storage.yttl_guchan=target;            					        
         var controls=[];                             
          if (!player.storage.yttl_guchanbingliang) controls.push('兵');        
          if (!player.storage.yttl_guchanlebu) controls.push('乐');   
          if (!player.storage.yttl_guchanshandian) controls.push('电');    
          if (!player.storage.yttl_guchanshunshou) controls.push('顺');   
          if (!player.storage.yttl_guchanguohe) controls.push('拆');  
          if (!player.storage.yttl_guchanwuzhong) controls.push('无中');  
          if (!player.storage.yttl_guchannanman) controls.push('南蛮');   
          if (!player.storage.yttl_guchanwanjian) controls.push('万箭');   
          if (!player.storage.yttl_guchantaoyuan) controls.push('桃园');   
          if (!player.storage.yttl_guchanjuedou) controls.push('决斗');   
          if (!player.storage.yttl_guchanjiedao) controls.push('借刀');         
          if (!player.storage.yttl_guchanwugu) controls.push('五谷');   
          if (!player.storage.yttl_guchanhuogong) controls.push('火攻');   
          if (!player.storage.yttl_guchantiesuo) controls.push('铁索');                                                                                                              
          var str='请选择给'+get.translation(target)+'标记一种牌名';            
          player.chooseControl(controls,ui.create.dialog(str,'hidden')).ai=function(){
                        return Math.floor(Math.random()*controls.length);
                    };                   
       }
       else{
              event.finish();
       }
        "step 2"
        if(result.control){
           var target=player.storage.yttl_guchan;     
            if (result.control=='兵') {
            player.storage.yttl_guchanbingliang=true;
            target.addSkill('yttl_guchanbingliang');                     
            }
           if (result.control=='乐') {
            player.storage.yttl_guchanlebu=true;
            target.addSkill('yttl_guchanlebu');           
            }
                if (result.control=='电') {
            player.storage.yttl_guchanshandian=true;
            target.addSkill('yttl_guchanshandian');
            }    
              if (result.control=='顺') {
            player.storage.yttl_guchanshunshou=true;
            target.addSkill('yttl_guchanshunshou');
            }
              if (result.control=='拆') {
            player.storage.yttl_guchanguohe=true;
            target.addSkill('yttl_guchanguohe');
            }
                if (result.control=='无中') {
            player.storage.yttl_guchanwuzhong=true;
            target.addSkill('yttl_guchanwuzhong');
            controls.remove(result.control);    
            }
              if (result.control=='南蛮') {
            player.storage.yttl_guchannanman=true;
            target.addSkill('yttl_guchannanman');
            }
              if (result.control=='万箭') {
            player.storage.yttl_guchanwanjian=true;
            target.addSkill('yttl_guchanwanjian');
            }
              if (result.control=='桃园') {
            player.storage.yttl_guchantaoyuan=true;
            target.addSkill('yttl_guchantaoyuan');
            }
              if (result.control=='决斗') {
            player.storage.yttl_guchanjuedou=true;
            target.addSkill('yttl_guchanjuedou');
            }
              if (result.control=='借刀') {
            player.storage.yttl_guchanjiedao=true;
            target.addSkill('yttl_guchanjiedao');
            }          
              if (result.control=='五谷') {
            player.storage.yttl_guchanwugu=true;
            target.addSkill('yttl_guchanwugu');
            }
              if (result.control=='火攻') {
            player.storage.yttl_guchanhuogong=true;
            target.addSkill('yttl_guchanhuogong');
            }
              if (result.control=='铁索') {
            player.storage.yttl_guchantiesuo=true;
            target.addSkill('yttl_guchantiesuo');
            }
            }
           else{
                   event.finish();
           }                                                                                                                                                                                                                       
				},
			},*/
yttl_guchan:{
	 audio:"ext:金庸群侠传:6",
                trigger:{
                    player:"turnOverEnd",
                },
                direct:true,
				filter:function(event,player){				
					//return !player.isTurnedOver();
					return player.isAlive();
				},
                content:function (){        
        'step 0'
        player.chooseTarget(function(card,player,target){
            return player.isAlive();
        },'枯禅<br><br><div class="text center">令一名其他角色本局游戏不能成为这张牌的目标').set('ai',function(target){
            var player=_status.event.player;
            if(get.attitude(player,target)>0){
                if(get.attitude(target,player)>0){
                    return target.countCards('h');
                }
                return -target.countCards('h')/2;
            }
            return 2;
        });
        'step 1'
        if(result.bool){
            var target=result.targets[0];    
            event.target=target;
            target.addSkill('yttl_guchan2'); 
            if(!target.storage.yttl_guchan){
                target.storage.yttl_guchan=[];
            }
            var list=['taoyuan','wugu','juedou','huogong','jiedao','tiesuo','guohe','shunshou','wuzhong','wanjian','nanman','lebu','bingliang','shandian'];
            for(var i=0;i<list.length;i++){
                list[i]=['锦囊','',list[i]];
            }
            player.chooseButton(true,[[list,'vcard']]).set('filterButton',function(button){
                if(target.storage.yttl_guchan&&target.storage.yttl_guchan.contains(button.link[2])) return false;
                return true;
            }).set('ai',function(button){
                var rand=_status.event.rand*2;
                switch(button.link[2]){
                    case 'lebu':return 3+rand[3];
                    case 'shunshou':return 3+rand[6];
                    case 'nanman':return 2+rand[7];
                    case 'wanjian':return 2+rand[8];
                    default:return rand[9];
                }
            }).set('rand',[Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random()],Math.random());
        }
        'step 2'
        if(result.bool){
			player.logSkill('yttl_guchan');
            event.target.storage.yttl_guchan.add(result.links[0][2]);
        }
    },
            },
            "yttl_guchan2":{
                mod:{
                    targetEnabled:function (card,player,target){
            if(target.storage.yttl_guchan.contains(card.name)) return false;
        },
                },
            },
  "yttl_qingce":{
	  audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"useCard",
                },
                direct:true,
                filter:function (event,player){
        var type=get.type(event.card);
        return type=='trick';
    },
                content:function (){
        'step 0'
        var goon=false;
        var info=get.info(trigger.card);
        if(trigger.targets&&!info.multitarget){
            var players=game.filterPlayer();
            for(var i=0;i<players.length;i++){
                if(lib.filter.targetEnabled2(trigger.card,player,players[i])&&!trigger.targets.contains(players[i])){
                    goon=true;break;
                }
            }
        }
        if(goon){
            player.chooseTarget('清侧：是否额外指定你与任意名距离为一的角色成为'+get.translation(trigger.card)+'的目标？',[1,Infinity],function(card,player,target){
                var trigger=_status.event.getTrigger();
                if(trigger.targets.contains(target)) return false;
                return lib.filter.targetEnabled2(trigger.card,_status.event.player,target)&&get.distance(player,target)<=1;
            }).set('ai',function(target){
                var trigger=_status.event.getTrigger();
                var player=_status.event.player;
                return get.effect(target,trigger.card,player,player);
            });
        }
        else{
            if(!info.multitarget&&trigger.targets&&trigger.targets.length>1){
                event.goto(3);
            }
        }
        'step 1'
        if(result.bool){
            if(!event.isMine()) game.delayx();
            event.target=result.targets;
        }
        else{
            event.finish();
        }
        'step 2'
        if(event.target){
            player.logSkill('yttl_qingce',event.target);
            game.log(event.target,'额外成为了'+get.translation(trigger.card)+'的目标');
            trigger.targets.addArray(event.target);
        }
        event.finish();
        'step 3'
        player.chooseTarget('清侧：是否取消任意你与距离为一的角色'+get.translation(trigger.card)+'的目标？',[1,Infinity],function(card,player,target){
            return _status.event.getTrigger().targets.contains(target)&&get.distance(player,target)<=1;
        }).set('ai',function(target){
            var trigger=_status.event.getTrigger();
            return -get.effect(target,trigger.card,trigger.player,_status.event.player);
        });
        'step 4'
        if(result.bool){
            event.targets=result.targets;
            if(event.isMine()){
                player.logSkill('yttl_qingce',event.targets);
                event.finish();
            }
            for(var i=0;i<result.targets.length;i++){
                trigger.targets.remove(result.targets[i]);
            }
            game.delay();
        }
        else{
            event.finish();
        }
        'step 5'
        player.logSkill('yttl_qingce',event.targets);
    },
            },
            "yttl_yinyuan":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"gameStart",
                    player:"enterGame",
                },
                zhuSkill:true,
                popup:false,
                forced:true,
                unique:true,
                filter:function (event,player){
        return player.identity!='zhu';
    },
                content:function (){
        player.removeSkill('yttl_yinyuan');
    },
                mod:{
                    globalFrom:function (from,to){
            if(from.hasZhuSkill('yttl_yinyuan')&&to.group=='wu') return -Infinity;
        },
                },
            },
            "yttl_yaohui1":{               
                enable:"phaseUse",
                filter:function (event,player){
        if(!player.countCards('h',{type:'equip'})) return false;
        return game.hasPlayer(function(current){
            return current!=player&&current.hasSkill('yttl_yaohui');
        });
    },
                position:"he",
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
        return player!=target&&!target.getEquip(card)&&target.hasSkill('yttl_yaohui');
    },
                content:function (){
					game.playJY(['yttl_yaohui1','yttl_yaohui2'].randomGet());
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
                        player:1,
                        target:3,
                    },
                },
            },
            "yttl_yaohui":{
				audio:"ext:金庸群侠传:2",
                global:"yttl_yaohui1",
            },
               "yttl_xingshi":{
			    audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"useCard",
                },
                priority:2019327,
                direct:true,
                filter:function (event,player){
        if(get.type(event.card)!='trick'&&get.type(event.card)!='basic') return false;
        var info=get.info(event.card);
        if(info.allowMultiple==false) return false;
        if(event.targets&&!info.multitarget){
            if(game.hasPlayer(function(current){
                return lib.filter.targetEnabled2(event.card,player,current)&&!event.targets.contains(current);
            })){
                return true;
            }
        }
        return false;
    },
                content:function (){
        "step 0"
        var next=player.chooseCardTarget({
            position:'h',
            filterCard:lib.filter.cardDiscardable,
            filterTarget:function(card,player,target){
                var trigger=_status.event.getTrigger();
                var player=_status.event.player;
                if(trigger.targets.contains(target)) return false;
                return lib.filter.targetEnabled2(trigger.card,player,target);
                return false;
            },
            ai1:function(card){
                if(trigger.card.name=='jiu') return-1;
                return get.value(trigger.card)-get.value(card);
            },
            ai2:function(target){
                var trigger=_status.event.getTrigger();
                var player=_status.event.player;
                return get.effect(target,trigger.card,player,player);
            },
            prompt:get.prompt('yttl_xingshi')
        });
        "step 1"
        if(result.bool){
            player.discard(result.cards);
            player.logSkill('yttl_xingshi',result.targets);
            if(!event.isMine()) game.delayx();
            event.targets=result.targets;
        }
        else{
            event.finish();
        }
        "step 2"
        if(event.targets){
            game.log(event.targets,'额外成为了'+get.translation(trigger.card)+'的目标');
            trigger.targets.addArray(event.targets);
        }
    },
                ai:{
                    threaten:2,
                },
            },
            "yttl_jieao":{
                init:function (player){
        player.storage.yttl_jieao=[];
    },
                intro:{
                    content:"characters",
                },
                group:["yttl_jieao_count","yttl_jieao_draw","yttl_jieao_before"],
                subSkill:{
                    count:{
                        trigger:{
                            player:"useCard",
                        },
                        priority:-2019327,
                        filter:function (event,player){
                if(get.type(event.card)!='trick') return false;
                return _status.currentPhase==player;
            },
                        direct:true,
                        silent:true,
                        content:function (){               
//				game.playJY(['yttl_jieao1','yttl_jieao2'].randomGet());
                if(player.storage.yttl_jieao==undefined) player.storage.yttl_jieao=[];
                    for(var i=0;i<trigger.targets.length;i++){
                        if(trigger.targets[i]!=player){ 
                            var juese=trigger.targets[i].name;
                            if(!player.storage.yttl_jieao.contains(juese)){
                                player.storage.yttl_jieao.push(juese);
                            }
                        }
                    }
                player.markSkill('yttl_jieao');
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                    draw:{
                        trigger:{
                            player:"phaseEnd",
                        },
                        filter:function (event,player){
                return player.storage.yttl_jieao.length>0;
            },
                        silent:true,
                        content:function (){
                "step 0"
				game.playJY(['yttl_jieao1','yttl_jieao2'].randomGet());
                event.num1=player.storage.yttl_jieao.length;
                player.draw(event.num1);
                "step 1"
                if(event.num1>3){player.turnOver();}
                player.storage.yttl_jieao=[];
                "step 2"
                player.logSkill('yttl_jieao')
                player.markSkill('yttl_jieao');
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                    before:{
                        trigger:{
                            player:"phaseBefore",
                        },
                        filter:function (event,player){
                return player.storage.yttl_jieao.length>0;
            },
                        silent:true,
                        content:function (){
                player.storage.yttl_jieao=[];
                player.markSkill('yttl_jieao');
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                },
            },
			
          
            "yttl_taiji":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"loseEnd",
                },
             		frequent:true,
				filter:function(event,player){
					if(player.countCards('h')) return false;
					for(var i=0;i<event.cards.length;i++){
						if(event.cards[i].original=='h') return true;
					}
					return false;
				},
                content:function (){
       player.useCard({name:'wuzhong'},player);
    },
                ai:{
                    order:2,
                    result:{
                        player:function (player)  {     
                return 1;
            },
                    },
                },
            },
            "yttl_chunyan":{
                audio:"ext:金庸群侠传:2",
                enable:["chooseToUse","chooseToRespond"],
                filter:function (event,player){          
                         if(player.getStat().skill.yttl_chunyan>player.hp) return false;        
                         return player.countCards('h')>1;
                },
                group:"yttl_chunyan2",
                filterCard:function (card){ 
                        return true; 
                },
                position:"h",
                complexCard:true,
                popname:true,
                selectCard:2,
                viewAs:{
                    name:"sha",
                },
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
            "yttl_chunyan2":{
                trigger:{
                    player:"chooseToRespondBegin",
                },
                filter:function (event,player){                                            
                    if(!event.filterCard({name:'sha'})) return false;
                    return true;
                },
                direct:true,
                content:function (){
                    "step 0"                        
                    player.chooseCard(get.prompt('yttl_chunyan'),2,'h',function(card){                
                        return 6-get.value(card);
                    });
                    "step 1"
                    if(result.bool){
                       // game.playJY(['yttl_chunyan1','yttl_chunyan2'].randomGet());
                        trigger.untrigger();
                        trigger.responded=true;
                        trigger.result={bool:true,card:{name:'sha'}}    
                        player.lose(result.cards,ui.special);
                        player.$throw(result.cards);
                        player.logSkill('yttl_chunyan');                            
                    }
                    else{
                        event.finish();
                    }                                    
                },
            },
            "yttl_taoli":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"loseEnd",
                },
                zhuSkill:true,
                direct:true,
                filter:function (event,player){
                     if(player.countCards('h')<=0) return false;
                     if(event.player.countCards('h')>0) return false;
                     if(event.player.group!='wu') return false;               
                     if(event.player==player) return false;
                     if(!player.hasZhuSkill('yttl_taoli')) return false;
                 return true;        
           },
                check:function (event,player){
           return get.attitude(player,event.player)>0;
      },
                content:function (){        
             'step 0' 
        player.chooseCard('是否交给'+get.translation(trigger.player)+'一张手牌？',1).ai=function(card){ 
            return 7-ai.get.value(card);            
        } 
        'step 1' 
        if(result.bool){ 
            player.logSkill('yttl_taoli',trigger.player); 
            trigger.player.gain(result.cards); 
            player.$give(result.cards.length,trigger.player); 
            game.delay(); 
            event.finish(); 
        } 
        else{ 
            event.finish(); 
        } 
    },
                ai:{
                    result:{
                        target:-0.5,
                    },
                    basic:{
                        order:9,
                    },
                },
            },
            
            "yttl_fendao":{
                audio:"ext:金庸群侠传:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return target.countCards('e')>0;
    },
                content:function (){
        'step 0'      
            player.chooseCardButton('焚刀',target.getCards('e')).ai=function(button){
                return get.value(button.link)-1;
            }     
        'step 1'
        if(result.bool){
          var chat=['屠龙刀是我们的了，哈哈……','武林至尊，宝刀屠龙。号令天下，莫敢不从'].randomGet();
            player.say(chat);  
            event.card1=result.links[[0]];
            event.cards=get.cards(1);
         //   player.showCards(event.cards);         
        }
        else{
            event.finish();
        }
        'step 2'
        if(get.color(event.cards)=='red'){
        target.discard(event.card1);
        target.gain(event.cards);
          target.recover();
          }
          else{
           target.discard(event.card1);
           target.gain(event.cards);
            player.gain(event.card1,target);
            target.gain(result.cards);
          //  player.$giveAuto(result.cards,target);
            target.$giveAuto(event.card);
          //  game.log(player,'获得',target,'一张装备牌');            
        }
    },
                ai:{
                    threaten:0.3,
                    result:{
                        target:function (player,target){
                return -target.countCards('e');
            },
                    },
                    order:10,
                    expose:0.6,
                },
            },
            "yttl_kuiyu":{
                audio:"ext:金庸群侠传:2",
               trigger:{
        player:"useCard",
    },
    frequent:true,
    filter:function (event){
        var type=get.type(event.card,'trick');
        return (type=='equip')&&event.cards[0]&&event.cards[0]==event.card;
    },                      
                content:function (){   
        player.draw();
    },
                ai:{
                    reverseEquip:true,
                    effect:{
                        target:function (card,player,target,current){
                if(get.type(card)=='equip') return [1,3];
            },
                    },
                },
            },         
},

 translate:{ 
 "yttl_zhangwuji":"张无忌",
            "yttl_nijue":"逆绝",
            "yttl_nijue_info":"出牌阶段限一次，你可以弃置一张黑桃手牌并选择两名角色，交换其装备区或判定区里的所有的牌。",
            "yttl_jiuyang":"九阳",
            "yttl_jiuyang_info":"其他角色的装备区置入武器牌后，若其攻击范围因此增加，则你可以对其使用至多X张杀（X为其增加的攻击范围数）。",
            "yttl_chuqiao":"楚翘",
            "yttl_chuqiao_info":"主公技。其他吴势力角色使用的杀被抵消后，其可以将此杀交给你。",
 "yttl_zhangcuishan":"张翠山",
            "yttl_cstaiji":"太极",
            "yttl_cstaiji_info":"每当你失去最后的手牌后，你可以视为使用一张“无中生有”。",
            "yttl_yinjiu":"引咎",
            "yttl_yinjiu_info":"回合开始时，你可以将所有手牌交给一名你未以此法选择过的角色，然后其可以交给你任意张牌。锁定技，当你受到普通锦囊牌的伤害时，若你对来源发动过“引咎”，则防止此伤害。",
 "yttl_songqingshu":"宋青书",
            "yttl_jixian":"嫉贤",
            "yttl_jixian_info":"转换技。①一名其他角色获得至少两张牌后，你可以摸等量的牌。②一名其他角色失去至少两张牌后，你可以弃置等量的牌。",
            "yttl_nishi":"逆施",
            "yttl_nishi_info":"出牌阶段，你可以选择一名其他角色，然后选择一项：交给其两张手牌，获得其装备区里的一张牌；或将一张装备牌置于其装备区并获得其两张手牌（不足则全获得）。",
			"yttl_daiqisi":"黛绮丝",
            "yttl_miling":"密令",
            "yttl_miling_info":"限定技，出牌阶段，你可以交给一名其他角色一张梅花手牌，每当其使用或打出梅花牌时，你摸一张牌。若其未于回合内使用或打出牌，其回合结束时你可以弃置其一张牌。该角色死亡后，你重置此技能。",
            "yttl_jinhua":"金花",
            "yttl_jinhua_info":"出牌阶段限一次，你可以弃置一张梅花牌，然后移动场上一张牌。",
 "yttl_miejue":"灭绝师太",
            "yttl_huiqiao":"回鞘",
            "yttl_huiqiao_info":"其他角色的武器牌进入弃牌堆时，你可以将此牌置入一名角色的装备区里（不能替换原武器牌）。",           
            "yttl_jie":"嫉恶",
            "yttl_jie_info":"当有角色进入濒死状态时，若有伤害来源，你可以弃置伤害来源所有区域各一张牌，若依此法弃置的牌包含两种颜色，则濒死角色回复1点体力。",
            "yttl_zhangjian":"仗剑",
            "yttl_zhangjian_info":"当你使用杀指定目标后，若你装备区里有武器牌，你可以摸1张牌。",
 "yttl_luhe":"玄冥二老",
            "yttl_xuanming":"玄冥",
            "yttl_xuanming_info":"锁定技。你使用杀时，若此杀有点数，则目标只能用点数为奇/偶数闪响应你点数为奇/偶数杀。",
            "yttl_hanyin":"酣淫",
            "yttl_hanyin_info":"出牌阶段开始时，你可以亮出牌堆顶2张牌，将其中一张黑色牌当酒使用或获得其中一张无中生有（其余牌置入弃牌堆），若你以此法使用了牌或获得了牌，你本回合不能使用与此牌颜色不同的牌。",
  "yttl_yinliting":"殷梨亭",
            "yttl_lttaiji":"太极",
            "yttl_lttaiji_info":"每当你失去最后的手牌时，你可以视为使用一张“无中生有”。",
            "yttl_chanru":"孱懦",
            "yttl_chanru_info":"每当你受到黑色杀造成的伤害时，你可以交给伤害来源一张手牌，然后此伤害-1。",
            "yttl_tongshou":"同寿",
            "yttl_tongshou_info":"觉醒技。准备阶段开始时，若你没有手牌，你须减1点体力上限，并获得“太极”",
"yttl_changyuchun":"常遇春",
            "yttl_xiaoyong":"骁勇",
            "yttl_xiaoyong_info":"出牌阶段限一次，你可以将一张锦囊牌当杀使用，且此杀不计入回合内次数。",
            "yttl_xianfeng":"先锋",
            "yttl_xianfeng_info":"锁定技。准备阶段，你执行一个额外的出牌阶段。", 
 "yttl_changbaoshu":"常胜宝树王",
			"yttl_lingjianwuqi":"令箭武器",
            "yttl_qizhao":"奇招",
            "yttl_qizhao_info":"你可以将一张与你装备区里的武器牌颜色相同牌当杀使用。",
            "yttl_lingjian":"令箭",
            "yttl_lingjian_info":"限定技。一名角色出牌阶段开始时，若其没有装备武器牌，你可以令其摸2张牌，你弃一张牌，然后你声明一张武器牌，令其装备之，其回合结束或死亡时，销毁该武器牌。",
  "yttl_jinhuapopo":"金花婆婆",
            "yttl_hanji":"寒疾",
            "yttl_hanji_info":"锁定技。你不能成为其他角色点数小于7的牌的目标；你不能使用点数大于10的牌指定其他角色为目标",
            "yttl_jiedao2":"借刀",
            "yttl_jiedao2_info":"你可将你的任意一张梅花手牌当”借刀杀人“使用。",
            "yttl_jiedao":"借刀",
            "yttl_jiedao_info":"出牌阶段开始时，你可以与一名其他角色拼点。若你赢，你可以于此回合内将梅花牌当“借刀杀人”使用；若你未赢，你须弃置你装备区里的武器牌。",
  "yttl_yinli":"殷离",
            "yttl_chuxin":"初心",
            "yttl_chuxin_info":"锁定技。与你于本局游戏使用或打出第一张牌花色相同的手牌，不占用你的手牌上限。",
            "yttl_maodu":"蝥毒",
            "yttl_maodu_info":"每当你受到或造成1点属性伤害后，你加1点体力上限。出牌阶段限一次，你可以减2点体力上限，然后选择一项：令一名体力上限大于你的角色失去一点体力；或摸4张牌。",
 "yttl_due":"渡厄",
            "yttl_jingang":"金刚",
            "yttl_jingang_info":"每局限13次，当你需要使用“无懈可击”时，你可以翻面，然后视为你使用了此牌。",
            "yttl_fumo":"伏魔",
            "yttl_fumo_info":"每当你的武将牌翻至背面向上时，你可以横置所有角色的武将牌。",
            "yttl_guchan":"枯禅",
            "yttl_guchan_info":"每当你的武将牌翻面后，你可选择一名角色并声明一种未对该角色声明过的锦囊牌的牌名，其于本局游戏不能成为此牌的目标。",
 "yttl_zhuyuanzhang":"朱元璋",
            "yttl_qingce":"清侧",
            "yttl_qingce_info":"每当你使用普通锦囊牌时，你可以令你距离1以内的任意名角色也成为目标，或取消你距离1以内的任意名角色为目标。",
            "yttl_yinyuan":"夤缘",
            "yttl_yinyuan_info":"主公技。锁定技。你计算其他吴势力角色距离为1。",
            "yttl_yaohui1":"邀赂",
            "yttl_yaohui1_info":"",
            "yttl_yaohui":"邀赂",
            "yttl_yaohui_info":"其他角色出牌阶段，其可以将一张装备牌置于你的装备区里（不得替换原装备），然后其摸2张牌。",
      "yttl_yangxiao":"杨逍",
		"yttl_xingshi":"兴师",
            "yttl_xingshi_info":"当你使用基本牌或普通锦囊牌时，你可以弃置一张牌，若如此做，你可以为此牌额外指定一名目标。",
            "yttl_jieao":"桀骜",
            "yttl_jieao_info":"锁定技。结束阶段开始时，你摸X张牌（X为你本回合你使用的普通锦囊牌指定除你外的目标数），若你以此法摸牌数大于3，你翻面。",	
            "yttl_zhangsanfeng":"张三丰",
            "yttl_changbaisanqin":"长白三禽",
			 "yttl_taiji":"太极",
            "yttl_taiji_info":"每当你失去最后的手牌时，你可以视为使用一张“无中生有”。",
            "yttl_chunyan":"纯阳",
            "yttl_chunyan_info":"每回合限X次，你可以将两张手牌当杀使用或打出（X为你的体力值）",
            "yttl_taoli":"桃李",
            "yttl_taoli_info":"主公技。当其他吴国角色失去最后一张手牌时，你可以交给其一张手牌。",
            "yttl_fendao":"焚刀",
            "yttl_fendao_info":" 出牌阶段限一次，你可以重铸一名其他角色的装备牌，然后展示所重铸的牌，若为红色，其回复1点体力；若为黑色，你获得此次重铸的装备牌。",
            "yttl_kuiyu":"窥觎",
            "yttl_kuiyu_info":"每当你使用一张装备牌时，你可以摸1张牌。",
            
         },
};
if(lib.device||lib.node){
				for(var i in yttl.character){yttl.character[i][4].push('ext:金庸群侠传/'+i+'.jpg');}
			}else{
				for(var i in yttl.character){yttl.character[i][4].push('db:extension-金庸群侠传:'+i+'.jpg');}
			}
			return yttl;
		});
		lib.config.all.characters.push('yttl');
		if(!lib.config.characters.contains('yttl')) lib.config.characters.remove('yttl');
		lib.translate['yttl_character_config']='倚天屠龙记';

		
	
};
},help:{},config:{
					"jyqxzhelp":{
				"name":"金庸群侠传","init":"1","item":{"1":"查看介绍","2":"<li>技能设计：大熊小猫","3":"<li>编写代码：<br>★Sukincen ★冰波水微 <br>★落影丶逝尘（太上大牛）  <br>★冷雨 ★晒晒（朱阳光）","4":"<li>友情配音：<br>觅阳 主人 珂里 仙女桥<br> 清酒摇舟  稳得高处<br>神齐大叔  草莓味少女<br>冷陶 阿九哎 青灯折扇不语","5":"<li>关闭武将界面总开关会隐藏图片且禁用武将，打开重启即可。游戏时最好打开兼容模式"}
					},	
					"xmeihuakapai":{
            name:'美化卡牌',
           "intro":"美化卡牌：开启后重启游戏生效。将卡牌的点数1、11、12、13分别调整为A、J、Q、K，颜色微调",
            init:false
		},	
		"jyzhengwangpeiyin":{
            name:'阵亡配音',
           "intro":"阵亡配音：开启后，有阵亡配音的角色在阵亡时会说阵亡台词",
            init:true
		},				
			 
},package:{
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
        list:[
		
		],
    },
    skill:{
        skill:{
        },
        translate:{
        },
    },
    intro:"",
    author:"",
    diskURL:"",
    forumURL:"",
    version:"1.33",
},files:{"character":[],"card":[],"skill":[]}}})
