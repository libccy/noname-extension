game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"文武英杰",editable:false,content:function (config,pack){ 
 // ---------------------------------------group------------------------------------------//
        /*
	    //css：
	    lib.group.push('wwyjsha');
        lib.translate.wwyjsha='杀';   
        get.groupnature = function(group,method){
	    var nature;
			switch(group){
				case 'shen':nature='thunder';break;
				case 'wei':nature='water';break;
				case 'shu':nature='soil';break;
				case 'wu':nature='wood';break;
				case 'qun':nature='metal';break;
				case 'wo':nature='fire';break;
				default:nature = group;break;
			}
			if(method=='raw'){
				return nature;
			}
				return nature+'mm';
		}
		*/
	
       var style1=document.createElement('style');
        style1.innerHTML=".player .identity[data-color='wwyjsha'],";
        style1.innerHTML+="div[data-nature='wwyjsha'],";
        style1.innerHTML+="span[data-nature='wwyjsha'] {text-shadow: black 0 0 1px,rgba(255, 0, 204,1) 0 0 2px,rgba(255, 0, 204,1) 0 0 5px,rgba(255, 0, 204,1) 0 0 10px,rgba(255, 0, 204,1) 0 0 10px}";
        style1.innerHTML+="div[data-nature='wwyjsham'],";
        style1.innerHTML+="span[data-nature='wwyjsham'] {text-shadow: black 0 0 1px,rgba(255,128,0,1) 0 0 2px,rgba(255,128,0,1) 0 0 5px,rgba(255,128,0,1) 0 0 5px,rgba(255,128,0,1) 0 0 5px,black 0 0 1px;}";
        style1.innerHTML+="div[data-nature='wwyjshamm'],";
        style1.innerHTML+="span[data-nature='wwyjshamm'] {text-shadow: black 0 0 1px,rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,black 0 0 1px;}";
        document.head.appendChild(style1);
        
        lib.group.add('wwyjsha');
        lib.translate.wwyjsha='杀';
        lib.translate.wwyjsha2='杀';
        lib.groupnature.wwyjsha='wwyjsha';
	    /*十周年UI武将名背景*/
        var tenUi=document.createElement('style');
        tenUi.innerHTML=".player>.camp-zone[data-camp='wwyjsha']>.camp-back {background: linear-gradient(to bottom, rgb(204,0,204), rgb(136,0,204), rgb(102,0,204));}";        
        /*十周年UI势力*/       
        tenUi.innerHTML+=".player>.camp-zone[data-camp='wwyjsha']>.camp-name {text-shadow: 0 0 5px rgb(255, 0, 204), 0 0 10px rgb(255, 0, 204), 0 0 15px rgb(255, 0, 204);}";        
        document.head.appendChild(tenUi);
		
		if(config.wwyj_changeGroup){
			lib.arenaReady.push(function(){				
				for(i in lib.characterPack['wenwuyingjie']){
					if(lib.characterPack['wenwuyingjie'][i][1]=="wwyjsha"){
					    lib.characterPack['wenwuyingjie'][i][1]=["wei","shu","wu","qun"].randomGet();
					}
				}
			});
		}

// ---------------------------------------Update------------------------------------------//   
    wwyj_update=[
       '<li>大幅度优化AI：<li>AI李木子发动释援不会再弹窗<li>诸葛均的奇思不再无脑转化桃救敌人<li>AI不会再对神座使用带属性伤害的牌<li>烟雨墨染不再无脑选择藤甲',
       '<li>替换势力：开启扩展“替换势力”小开关后重启游戏生效，将本扩展中的“杀”势力随机替换为官方“魏蜀吴群”中的一种势力',
	   '<li>计划更新：【升麻】、【薄荷糖】、【天气亏】、【荣耀套鸽】',
       'players://["wwyj_limuzi","wwyj_zhugejun","wwyj_shenzuo","wwyj_yanyumoran"]',
    ];
    wwyj_version='更新日期：2020年10月08日';

    game.wwyj_update=function(){
       var wwyj=document.createElement('wwyj');
       wwyj.style.textAlign='left';
       var players=null,cards=null;
       for(var i=0;i<wwyj_update.length;i++){
       if(wwyj_update[i].indexOf('players://')==0){
       try{
         players=JSON.parse(wwyj_update[i].slice(10));
       }
       catch(e){
       players=null;
       }
       }
       else if(wwyj_update[i].indexOf('cards://')==0){
       try{
       cards=JSON.parse(wwyj_update[i].slice(8));
       }
       catch(e){
       cards=null;
       }
       }
       else{
       var li=document.createElement('li');
       li.innerHTML=wwyj_update[i];
       wwyj.appendChild(li);
       };
       };
       var dialog=ui.create.dialog('【文武英杰】的更新内容<br>'+wwyj_version,'hidden');
       dialog.content.appendChild(wwyj);
       if(players){
       dialog.addSmall([players,'character']);
       };
       if(cards){
       for(var i=0;i<cards.length;i++){
       cards[i]=[get.translation(get.type(cards[i])),'',cards[i]]
       };
       dialog.addSmall([cards,'vcard']);
       };
       dialog.open();
       var hidden=false;
       if(!ui.auto.classList.contains('hidden')){
       ui.auto.hide();
       hidden=true;
       };
       game.pause();
       var control=ui.create.control('确定',function(){
       dialog.close();
       control.close();
       if(hidden) ui.auto.show();
       game.resume();
       });
       };
       lib.skill._wwyj_update={
       trigger:{
          global:"gameStart"
       },
       priority:Infinity,
       forced:true,
       content:function(){              
			  if(lib.config.wwyj_version!=wwyj_version){
              game.wwyj_update();  
              alert('温馨提示：首次安装使用【文武英杰】时若发现本扩展的武将没图片或无法对本扩展的武将进行自由点将，请先开启【文武英杰】武将菜单右上角的总开关，再重启游戏');            
              game.saveConfig('wwyj_version',wwyj_version); 			  			  
       }
       },
       }      
        
       game.wwyj_showChangeLog=function(){
			var dialog=ui.create.dialog('hidden');
			dialog.style.height='calc(100%)';
			dialog.style.width='calc(100%)';
			dialog.style.left='0px';
			dialog.style.top='0px';
			dialog.classList.add('popped');
			dialog.classList.add('static');
			var list_changelog=[];
			for(var i in window.wwyjchangelog){
				list_changelog.push({
					data:i,
					info:window.wwyjchangelog[i],
				});
			};
			var interval=setInterval(function(){
				var num=20;
				if(num>list_changelog.length) num=list_changelog.length;
				for(var i=0;i<num;i++){
					var data=list_changelog[0].data;
					var info=list_changelog[0].info;
					var list=[];
					var list1=[];
					dialog.addText(data+'   ('+info.version+')'+'<br>',false);
					dialog.addText('<li>'+info.info,false);
					if(info.players.length>0){
						for(var j=0;j<info.players.length;j++){
							if(lib.character[info.players[j]]!=undefined) list.push(info.players[j]);
						};
					};
					if(list.length>0) dialog.addSmall([list,'character']);
					if(info.cards.length>0){
						for(var j=0;j<info.cards.length;j++){
							if(lib.card[info.cards[j]]!=undefined) list1.push(info.cards[j]);
						};
					};
					if(list1.length>0) dialog.addSmall([list1,'vcard']);
					list_changelog.remove(list_changelog[0]);
					if(list_changelog.length==0){
						clearInterval(interval);
					};
				};
			},100);
			ui.window.appendChild(dialog);
			var div=ui.create.div('.menubutton.round','×',function(){
				clearInterval(interval);
				dialog.delete();
				ui.window.removeChild(this);
			});
			div.style.top='5px';
			div.style.left='calc(100% - 55px)';
			div.style['zIndex']=1000;
			ui.window.appendChild(div);
		};
// ---------------------------------------Newtujian------------------------------------------// 		
	game.wwyj_showNewtujian=function(){
			var dialog=ui.create.dialog('hidden');
			dialog.style.height='calc(70%)';
			dialog.style.width='calc(70%)';
			dialog.style.left='155px';
			dialog.style.top='60px';
			dialog.classList.add('popped');
			dialog.classList.add('static');
			var list_newtujian=[];
			for(var i in window.newtujian){
				list_newtujian.push({
					data:i,
					info:window.newtujian[i],
				});
			};
			var interval=setInterval(function(){
				var num=20;
				if(num>list_newtujian.length) num=list_newtujian.length;
				for(var i=0;i<num;i++){
					var data=list_newtujian[0].data;
					var info=list_newtujian[0].info;
					var list=[];
					var list1=[];
					if(info.players.length>0){
						for(var j=0;j<info.players.length;j++){
							if(lib.character[info.players[j]]!=undefined) list.push(info.players[j]);
						};
					};
					if(list.length>0) dialog.addSmall([list,'character']);
					
					dialog.addText(data+'   ('+info.version+')'+'<br>',false);
					dialog.addText('<li>'+info.info,false);
					
					if(info.cards.length>0){
						for(var j=0;j<info.cards.length;j++){
							if(lib.card[info.cards[j]]!=undefined) list1.push(info.cards[j]);
						};
					};
					if(list1.length>0) dialog.addSmall([list1,'vcard']);
					list_newtujian.remove(list_newtujian[0]);
					if(list_newtujian.length==0){
						clearInterval(interval);
					};
				};
			},100);
			ui.window.appendChild(dialog);
			var div=ui.create.div('.menubutton.round','×',function(){
				clearInterval(interval);
				dialog.delete();
				ui.window.removeChild(this);
			});
			div.style.top='60px';
			div.style.left='calc(100% - 155px)';
			div.style['zIndex']=1000;
			ui.window.appendChild(div);
		};	
	// ---------------------------------------wwyjwjl------------------------------------------//
	game.wwyjwjl_createButton=function(name,bool){
		var div=ui.create.button(name,'character');
		div.style.cursor='pointer';
		div.style.borderRadius='5px';
		//技能皮肤:
		/*if(lib.config.extension_文武英杰_wwyjwjl_showSS==true&&lib.skillSkin_character!=undefined&&lib.skillSkin_character.contains(name)){
			div.style['box-shadow']='rgba(0, 0, 0, 0.2) 0 0 0 1px,rgba(75,255,0,0.4) 0 0 5px, rgba(75,255,0,0.4) 0 0 12px, rgba(75,255,0,0.8) 0 0 15px';
		};*/
		//能否联机：
		if(bool==true&&lib.config.extension_文武英杰_wwyjwjl_showLJ==true){
			div.node.hp.style['zIndex']=1;
			div.node.name.style['zIndex']=1;
			var div1=ui.create.div('');
			div1.style.height='20px';
			div1.style.width='48px';
			div1.style.bottom='0px';
			div1.style.left='0px';
			div1.style['font-size']='15px';
			div1.style['text-align']='center';
			div1.style['font-family']='shousha';
			div1.style['line-height']='20px';
			div1.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
			div1.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
			div1.style['white-space']='nowrap';
			div1.style.borderRadius='5px';
			div1.innerHTML='可联机';
			if(div.node.occupation){
				div1.style.left='20px';
				div.node.hp.style.right='0px';
				div.node.hp.style.bottom='2px';
			};
			div.appendChild(div1);
		};
		
		var banned=lib.config.banned||[];
		if(banned.contains(name)){
			div.classList.add('banned');
		};
		return div;
	};
	//介绍：	
	var characterPackInfo={
		'wenwuyingjie':{
			info:'·设计者：凉茶<br>·状态：更新中<br>·简介：<br>&nbsp&nbsp 本扩展的武将均为无名杀的众多作者与玩家，除至尊荣耀系列外，强度相对平衡。可联机，包含多种特效与模式',
		},				
	};
	//open：					
		game.wwyj_openCharacterPack=function(name,node){
		//ui.click.configMenu();
		//game.pause2();
		ui.system.style.display='none';
		ui.menuContainer.style.display='none';
		var dialog1={};
		var divs={};
		
		var background=ui.create.dialog('hidden');
		background.style.height='calc(100%)';
		background.style.width='calc(100%)';
		background.style.left='0px';
		background.style.top='0px';
		ui.window.appendChild(background);
		dialog1.background=background;
		
		var dialog=ui.create.dialog('hidden');
		dialog.classList.add('popped');
		dialog.classList.add('static');
		dialog.style.animation='faderightIn .4s';
		dialog.style['-webkit-animation']='faderightIn .4s';
		dialog.style.height='500px';
		dialog.style.width='739px';
		dialog.style.left='calc(50% - 369.5px)';
		dialog.style.top='calc(50% - 250px)';
		dialog.style.transform='scale('+lib.config['extension_文武英杰_wwyjwjl_sf']+','+lib.config['extension_文武英杰_wwyjwjl_sf']+')';
		ui.window.appendChild(dialog);
		dialog1.dialog=dialog;
		
		var packName=ui.create.div('.menu');
		packName.style.height='38px';
		packName.style.width='calc(100% - 25px)';
		packName.style.left='12.4px';
		packName.style.top='12.5px';
		packName.style['font-size']='38px';
		packName.style['text-align']='center';
		packName.style['font-family']='shousha';
		packName.style['line-height']='40px';
		packName.style['font-weight']=600;	
		//大标题：
			packName.innerHTML='文武英杰--玉蝴蝶';		
		//if(lib.translate[name+'_character_config']=='<span style=\"font-size:17px;font-weight:600\">文武英杰-BOSS</span>') packName.innerHTML='文武英杰-BOSS';
		if(lib.translate[name+'_character_config']=='<span style="font-size:15px;font-weight:600">文武英杰</span>') packName.innerHTML='文武英杰';
		dialog.appendChild(packName);
		
		var packInfo=ui.create.div('.menu');
		if(lib.config.extension_文武英杰_wwyjwjl_layout=='ud'){
			packInfo.style.height='87.5px';
			packInfo.style.width='calc(100% - 25px)';
			packInfo.style.left='12.5px';
			packInfo.style.top='65px';
		}else{
			packInfo.style.height='160px';
			packInfo.style.width='calc(40% - 2.5px)';
			packInfo.style.left='12.5px';
			packInfo.style.top='65px';
		};
		//packInfo.style.cursor='pointer';
		packInfo.style['font-size']='17px';
		packInfo.style['text-align']='justify';
		packInfo.style['font-family']='shousha';
		packInfo.style['line-height']='17px';
		packInfo.style['font-weight']=600;
		packInfo.style['overflow-x']='hidden';
		packInfo.style['overflow-y']='scroll';
		var str='';
		if(characterPackInfo['wenwuyingjie']!=undefined){
			str+=characterPackInfo['wenwuyingjie'].info;
		};
		packInfo.innerHTML=str;
		dialog.appendChild(packInfo);		
		if(lib.config.extension_文武英杰_wwyjwjl_fddh!=true) packInfo.style.transition='opacity 0s';
		
		packInfo.ondblclick=function(e){
			e.preventDefault();
			if(this.link_wwyjs_clicked==true){
				delete this.link_wwyjs_clicked;
				if(lib.config.extension_文武英杰_wwyjwjl_layout=='ud'){
					packInfo.style.height='87.5px';
				}else{
					packInfo.style.height='160px';
				};
				packInfo.style.top='65px';
				packInfo.style['zIndex']=0;
			}else{
				this.link_wwyjs_clicked=true;
				packInfo.style.height='calc(100% - 25px)';
				packInfo.style.top='12.5px';
				packInfo.style['zIndex']=5;
			};
		};
		
		var packSwith=ui.create.div('.menu');
		if(lib.config.extension_文武英杰_wwyjwjl_layout=='ud'){
			packSwith.style.height='60px';
			packSwith.style.width='calc(100% - 25px)';
			packSwith.style.left='12.5px';
			packSwith.style.top='165px';
			packSwith.style['text-align']='left';
			packSwith.style['overflow-x']='scroll';
			packSwith.style['overflow-y']='hidden';
			packSwith.addEventListener('mousewheel',function(e){
				var delD=e.wheelDelta?e.wheelDelta: -e.detail*40;
				var move_s=delD>0?-30:30;
				this.scrollLeft+=move_s;
			});
		}else{
			packSwith.style.height='250px';
			packSwith.style.width='calc(40% - 2.5px)';
			packSwith.style.left='12.5px';
			packSwith.style.top='237.5px';
			packSwith.style['text-align']='center';
			packSwith.style['overflow-x']='hidden';
			packSwith.style['overflow-y']='scroll';
		};
		lib.setScroll(packSwith);
		packSwith.link_switch='all';
		packSwith.link_switch1='all';
		dialog.appendChild(packSwith);		
		if(lib.config.extension_文武英杰_wwyjwjl_fddh!=true) packSwith.style.transition='opacity 0s';
		//全部:
		var packSwith1=ui.create.div('.menubutton.large','<span style="cursor:pointer;">全部</span>');
		packSwith1.style['font-size']='27px';
		packSwith1.style['line-height']='45px';
		packSwith1.style['font-family']='shousha';
		packSwith1.style['font-weight']=600;
		packSwith1.style['white-space']='nowrap';
		packSwith1.style.top='5px';
		packSwith1.style.height='40px';
		if(lib.config.extension_文武英杰_wwyjwjl_layout=='ud'){
			packSwith1.style.left='5px';
			packSwith1.style.width='110px';
		}else{
			packSwith1.style.margin='5px';
			packSwith1.style.position='relative';
			packSwith1.style.width='126px';
		};
		packSwith1.style.borderRadius='5px';
		packSwith1.onclick=function(){
			if(packSwith.link_onTwo==undefined){
				packSwith.link_switch='all';
			}else{
				packSwith.link_switch1='all';
			};
			var div=divs.packCharacter;
			for(var i=0;i<div.childNodes.length;i++){
				if(packSwith.link_switch=='all'){
					div.childNodes[i].style.display='';
				}else{
					if(packSwith.link_switch.contains(div.childNodes[i].link)){
						div.childNodes[i].style.display='';
					};
				};
			};
		};
		
		packSwith1.style.transition='opacity 0.5s';
		
		if(lib.config.button_press){
			packSwith1.addEventListener(lib.config.touchscreen?'touchstart':'mousedown',function(){
				this.style.transform='scale(0.95)';
			});
			packSwith1.addEventListener(lib.config.touchscreen?'touchend':'mouseup',function(){
				this.style.transform='';
			});
		};
		
		packSwith.appendChild(packSwith1);
		//势力：
		var groups={};
		for(var i in lib.characterPack['wenwuyingjie']){
			var character=lib.characterPack['wenwuyingjie'][i];
			if(groups[character[1]]==undefined) groups[character[1]]=[];
			groups[character[1]].push(i);
		};
		var list=[];
		var groups_name=[];
		for(var i in groups){
			list.push(groups[i]);
			groups_name.push(i);
		};
		//分类 ：
		if(lib.characterSort!=undefined&&lib.characterSort['wenwuyingjie']!=undefined){
			var num=0;
			var characters=[];
			for(var i in lib.characterPack['wenwuyingjie']){
				characters.push(i);
			};
			for(var i in lib.characterSort['wenwuyingjie']){
				for(var j=0;j<lib.characterSort['wenwuyingjie'][i].length;j++){
					characters.remove(lib.characterSort['wenwuyingjie'][i][j]);
				};
				var packSwith1=ui.create.div('.menubutton.large','<span style="cursor:pointer;">'+get.translation(i)+'</span>');
				packSwith1.style['font-size']='27px';
				packSwith1.style['line-height']='45px';
				packSwith1.style['font-family']='shousha';
				packSwith1.style['font-weight']=600;
				packSwith1.style['white-space']='nowrap';
				packSwith1.style.top='5px';
				packSwith1.style.height='40px';
				if(lib.config.extension_文武英杰_wwyjwjl_layout=='ud'){
					packSwith1.style.left=(5+125*(num+1))+'px';
					packSwith1.style.width='110px';
				}else{
					packSwith1.style.margin='5px';
					packSwith1.style.position='relative';
					packSwith1.style.width='126px';
				};
				packSwith1.style.borderRadius='5px';
				packSwith1.link=lib.characterSort['wenwuyingjie'][i];
				
				packSwith1.onclick=function(){
					packSwith.link_switch=this.link;
					if(list.length>=2){
						packSwith.link_onTwo=true;
						for(var i=0;i<packSwith.childNodes.length;i++){
							if(packSwith.childNodes[i].innerHTML!='<span style="cursor:pointer;">全部</span>') packSwith.childNodes[i].style.display='none';
							if(packSwith.childNodes[i].link_name!=undefined) packSwith.childNodes[i].style.display='';
						};
					};
					var div=divs.packCharacter;
					for(var i=0;i<div.childNodes.length;i++){
						div.childNodes[i].style.display='none';
					};
					for(var i=0;i<div.childNodes.length;i++){
						if(packSwith.link_switch=='all'){
							if(packSwith.link_switch1=='all'){
								div.childNodes[i].style.display='';
							}else{
								if(packSwith.link_switch1.contains(div.childNodes[i].link)) div.childNodes[i].style.display='';
							};
						}else{
							if(packSwith.link_switch.contains(div.childNodes[i].link)){
								if(packSwith.link_switch1=='all'){
									div.childNodes[i].style.display='';
								}else{
									if(packSwith.link_switch1.contains(div.childNodes[i].link)) div.childNodes[i].style.display='';
								};
							};
						};
					};
				};
				
				packSwith1.style.transition='opacity 0.5s';
				if(lib.config.button_press){
					packSwith1.addEventListener(lib.config.touchscreen?'touchstart':'mousedown',function(){
						this.style.transform='scale(0.95)';
					});
					packSwith1.addEventListener(lib.config.touchscreen?'touchend':'mouseup',function(){
						this.style.transform='';
					});
				};
				packSwith.appendChild(packSwith1);
				num++;
			};
			
			if(characters.length>0){
				for(var j=0;j<lib.characterSort['wenwuyingjie'][i].length;j++){
					characters.remove(lib.characterSort['wenwuyingjie'][i][j]);
				};
				var packSwith1=ui.create.div('.menubutton.large','<span style="cursor:pointer;">其他</span>');
				packSwith1.style['font-size']='27px';
				packSwith1.style['line-height']='45px';
				packSwith1.style['font-family']='shousha';
				packSwith1.style['font-weight']=600;
				packSwith1.style['white-space']='nowrap';
				packSwith1.style.top='5px';
				packSwith1.style.height='40px';
				if(lib.config.extension_文武英杰_wwyjwjl_layout=='ud'){
					packSwith1.style.left=(5+125*(num+1))+'px';
					packSwith1.style.width='110px';
				}else{
					packSwith1.style.margin='5px';
					packSwith1.style.position='relative';
					packSwith1.style.width='126px';
				};
				packSwith1.style.borderRadius='5px';
				packSwith1.link=characters;
				packSwith1.onclick=function(){
					packSwith.link_switch=this.link;
					packSwith.link_onTwo=true;
					for(var i=0;i<packSwith.childNodes.length;i++){
						if(packSwith.childNodes[i].innerHTML!='<span style="cursor:pointer;">全部</span>') packSwith.childNodes[i].style.display='none';
						if(packSwith.childNodes[i].link_name!=undefined) packSwith.childNodes[i].style.display='';
					};
					var div=divs.packCharacter;
					for(var i=0;i<div.childNodes.length;i++){
						div.childNodes[i].style.display='none';
					};
					for(var i=0;i<div.childNodes.length;i++){
						if(packSwith.link_switch=='all'){
							if(packSwith.link_switch1=='all'){
								div.childNodes[i].style.display='';
							}else{
								if(packSwith.link_switch1.contains(div.childNodes[i].link)) div.childNodes[i].style.display='';
							};
						}else{
							if(packSwith.link_switch.contains(div.childNodes[i].link)){
								if(packSwith.link_switch1=='all'){
									div.childNodes[i].style.display='';
								}else{
									if(packSwith.link_switch1.contains(div.childNodes[i].link)) div.childNodes[i].style.display='';
								};
							};
						};
					};
				};
				packSwith1.style.transition='opacity 0.5s';
				if(lib.config.button_press){
					packSwith1.addEventListener(lib.config.touchscreen?'touchstart':'mousedown',function(){
						this.style.transform='scale(0.95)';
					});
					packSwith1.addEventListener(lib.config.touchscreen?'touchend':'mouseup',function(){
						this.style.transform='';
					});
				};
				packSwith.appendChild(packSwith1);
				num++;
			};
		};
		
		if(list.length>=2){
			for(var i=0;i<list.length;i++){
				var packSwith1=ui.create.div('.menubutton.large','<span style="cursor:pointer;">'+get.translation(groups_name[i])+'</span>');
				packSwith1.style['font-size']='27px';
				packSwith1.style['line-height']='45px';
				packSwith1.style['font-family']='shousha';
				packSwith1.style['font-weight']=600;
				packSwith1.style['white-space']='nowrap';
				packSwith1.style.top='5px';
				packSwith1.style.height='40px';
				if(lib.config.extension_文武英杰_wwyjwjl_layout=='ud'){
					packSwith1.style.left=(5+125*(i+1))+'px';
					packSwith1.style.width='110px';
				}else{
					packSwith1.style.margin='5px';
					packSwith1.style.position='relative';
					packSwith1.style.width='126px';
				};
				packSwith1.style.borderRadius='5px';
				packSwith1.link=list[i];
				packSwith1.link_name=name;
				
				packSwith1.onclick=function(){
					packSwith.link_switch1=this.link;
					var div=divs.packCharacter;
					for(var i=0;i<div.childNodes.length;i++){
						div.childNodes[i].style.display='none';
					};
					for(var i=0;i<div.childNodes.length;i++){
						if(packSwith.link_switch=='all'){
							if(packSwith.link_switch1=='all'){
								div.childNodes[i].style.display='';
							}else{
								if(packSwith.link_switch1.contains(div.childNodes[i].link)) div.childNodes[i].style.display='';
							};
						}else{
							if(packSwith.link_switch.contains(div.childNodes[i].link)){
								if(packSwith.link_switch1=='all'){
									div.childNodes[i].style.display='';
								}else{
									if(packSwith.link_switch1.contains(div.childNodes[i].link)) div.childNodes[i].style.display='';
								};
							};
						};
					};
				};
				packSwith1.style.transition='opacity 0.5s';
				if(lib.config.button_press){
					packSwith1.addEventListener(lib.config.touchscreen?'touchstart':'mousedown',function(){
						this.style.transform='scale(0.95)';
					});
					packSwith1.addEventListener(lib.config.touchscreen?'touchend':'mouseup',function(){
						this.style.transform='';
					});
				};
				packSwith.appendChild(packSwith1);
				if(lib.characterSort!=undefined&&lib.characterSort['wenwuyingjie']!=undefined) packSwith1.style.display='none';
			};
		};
		
		var packSwith1=ui.create.div('.menubutton.large','<span style="cursor:pointer;">返回</span>');
		packSwith1.style['font-size']='27px';
		packSwith1.style['line-height']='45px';
		packSwith1.style['font-family']='shousha';
		packSwith1.style['font-weight']=600;
		packSwith1.style['white-space']='nowrap';
		packSwith1.style.top='5px';
		packSwith1.style.height='40px';
		if(lib.config.extension_文武英杰_wwyjwjl_layout=='ud'){
			packSwith1.style.left=(5+125*(list.length+1))+'px';
			packSwith1.style.width='110px';
		}else{
			packSwith1.style.margin='5px';
			packSwith1.style.position='relative';
			packSwith1.style.width='126px';
		};
		packSwith1.style.borderRadius='5px';
		packSwith1.style.display='none';
		packSwith1.link_name='返回';
		
		packSwith1.onclick=function(){
			packSwith.link_switch1='all';
			delete packSwith.link_onTwo;
			for(var i=0;i<packSwith.childNodes.length;i++){
				if(packSwith.childNodes[i].innerHTML!='<span style="cursor:pointer;">全部</span>') packSwith.childNodes[i].style.display='none';
				if(packSwith.childNodes[i].link_name!=undefined){
					packSwith.childNodes[i].style.display='none';
				}else{
					packSwith.childNodes[i].style.display='';
				};
			};
			var div=divs.packCharacter;
			for(var i=0;i<div.childNodes.length;i++){
				if(packSwith.link_switch=='all'){
					if(packSwith.link_switch1=='all'){
						div.childNodes[i].style.display='';
					}else{
						if(packSwith.link_switch1.contains(div.childNodes[i].link)) div.childNodes[i].style.display='';
					};
				}else{
					if(packSwith.link_switch.contains(div.childNodes[i].link)){
						if(packSwith.link_switch1=='all'){
							div.childNodes[i].style.display='';
						}else{
							if(packSwith.link_switch1.contains(div.childNodes[i].link)) div.childNodes[i].style.display='';
						};
					};
				};
			};
		};
		
		packSwith1.style.transition='opacity 0.5s';
		if(lib.config.button_press){
			packSwith1.addEventListener(lib.config.touchscreen?'touchstart':'mousedown',function(){
				this.style.transform='scale(0.95)';
			});
			packSwith1.addEventListener(lib.config.touchscreen?'touchend':'mouseup',function(){
				this.style.transform='';
			});
		};
		packSwith.appendChild(packSwith1);
		
		var packCharacter=ui.create.div('.menu');
		if(lib.config.extension_文武英杰_wwyjwjl_layout=='ud'){
			packCharacter.style.height='250px';
			packCharacter.style.width='calc(100% - 25px)';
			packCharacter.style.left='12.5px';
			packCharacter.style.top='237.5px';
		}else{
			packCharacter.style.height='422.5px';
			packCharacter.style.width='calc(60% - 35px)';
			packCharacter.style.right='12.5px';
			packCharacter.style.top='65px';
		};
		packCharacter.style['text-align']='left';
		packCharacter.style['overflow-x']='hidden';
		packCharacter.style['overflow-y']='scroll';
		lib.setScroll(packCharacter);
		dialog.appendChild(packCharacter);
		if(lib.config.extension_文武英杰_wwyjwjl_fddh!=true) packCharacter.style.transition='opacity 0s';
		if(lib.config.extension_文武英杰_wwyjwjl_layout=='ud'){
			packCharacter.ondblclick=function(e){
				e.preventDefault();
				if(this.link_wwyjs_clicked==true){
					delete this.link_wwyjs_clicked;
					packSwith.style.top='165px';
					packCharacter.style['zIndex']=0;
					packCharacter.style.height='250px';
					packCharacter.style.top='237.5px';
				}else{
					this.link_wwyjs_clicked=true;
					packSwith.style.top=(packCharacter.offsetTop+packCharacter.offsetHeight+15)+'px';
					packCharacter.style.height='calc(100% - 25px)';
					packCharacter.style.top='12.5px';
					packCharacter.style['zIndex']=5;
				};
			};
		};
		divs.packCharacter=packCharacter;
		var characterButtons=[];
		for(var i in lib.characterPack['wenwuyingjie']){
			characterButtons.push(i);
		};
		if(characterButtons.length>0){
			var interval;
			setTimeout(function(){
				interval=setInterval(function(){
					var num=50;
					if(num>characterButtons.length) num=characterButtons.length;
					for(var i=0;i<num;i++){
						var character=lib.characterPack['wenwuyingjie'][characterButtons[0]];
						var bool=false;
						if(!lib.connectBanned.contains(characterButtons[0])&&lib.characterPack['wenwuyingjie']!=undefined&&name!='wenwuyingjie') bool=true;
						var characterButton=game.wwyjwjl_createButton(characterButtons[0],bool);
						characterButton.link=characterButtons[0];
						/*characterButton.onclick=function(){
							if(lib.wwyjs_jswj_character[this.link]==undefined||
							(lib.wwyjs_jswj_character[this.link]!=undefined&&lib.config.wwyjs_jswj[this.link]==true)) ui.click.charactercard(this.link,this);
						};*/
						if(name=='mode_extension_凉茶') characterButton.style.display='none';
						packCharacter.appendChild(characterButton);
						characterButtons.remove(characterButtons[0]);
					};
					if(characterButtons.length==0) clearInterval(interval);
				},100);
			},lib.config.extension_文武英杰_wwyjwjl_load==true?10:300);
		};
		var style1={
			'zIndex':5,
			'white-space':'nowrap',
			'text-align':'center',
			'font-size':'20px',
			'line-height':'19px',
			'font-family':"'STXinwei','xinwei'",
			'cursor':'pointer',
			'borderRadius':'5px',
			'height':'40px',
			'width':'130px',
			'bottom':'3px',
			'animation':'fadelogIn .4s',
			'-webkit-animation':'fadelogIn .4s',
		};
		//帖子连接：
		/*if(characterPackInfo['wenwuyingjie']!=undefined&&characterPackInfo['wenwuyingjie'].url!=undefined){
			var urls=characterPackInfo['wenwuyingjie'].url;
			var num1=0;
			for(var i in urls){
				var button1=ui.create.div('.menu');
				for(var j in style1){
					button1.style[j]=style1[j];
				};
				button1.style.right=(3+135*num1)+'px';
				button1.style.transition='opacity 0.5s';
				ui.window.appendChild(button1);
				if(lib.config.button_press){
					button1.addEventListener(lib.config.touchscreen?'touchstart':'mousedown',function(){
						this.style.transform='scale(0.95)';
					});
					button1.addEventListener(lib.config.touchscreen?'touchend':'mouseup',function(){
						this.style.transform='';
					});
				};
				if(i.indexOf('官网')!=-1){
					button1.style['font-size']='25px';
					button1.style['line-height']='40px';
					button1.innerHTML=i;
				}else{
					button1.innerHTML='设计贴<br>'+i;
				};
				button1.link=urls[i];
				button1.onclick=function(){
					if(this.link=='已删贴'){
						game.say1('设计贴已被删除');
					}else{
						game.open(this.link);
					};
				};
				dialog1[num1]=button1;
				num1++;
			};
		};
		*/
		/*if(name=='mode_extension_凉茶'){
			game.say1('需加载卡牌较多，默认隐藏所有卡牌，稍等后点击选择条件即可显示');
		};*/
		
		var div=ui.create.div('');
		div.style.height='calc(100%)';
		div.style.width='calc(100%)';
		div.style.left='0px';
		div.style.top='0px';

			//禁用：
		/*if(lib.wwyjprogram&&lib.wwyjprogram.character&&lib.characterPack['wenwuyingjie']){
			var forbid=ui.create.div();
			forbid.classList.add('popped');
			forbid.classList.add('static');
			forbid.style.height='34px';
			forbid.style.width='85px';
			forbid.style.bottom='2px';
			forbid.style.right='5px';
			forbid.style.borderRadius='5px';
			forbid.style['text-align']='center';
			forbid.style['font-size']='25px';
			forbid.style['line-height']='34px';
			forbid.style['font-family']="'STXinwei','xinwei'";
			forbid.style['background-image']='linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))';
			forbid.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
			forbid.style['cursor']='pointer';
			forbid.style['background-image']='linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4))';
			//forbid.style['z-index']=22;
			
			if(lib.config['extension_文武英杰_'+name]==true){
				forbid.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">禁用中</span>';
				forbid.style.backgroundColor="rgb(255, 0, 0)";
			}else{
				forbid.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">启用中</span>';
				forbid.style.backgroundColor="rgb(0, 255, 0)";
			};
			forbid.link=name;
			forbid.link1=node;
			forbid.onclick=function(){
				var name=this.link;
				var node=this.link1;
				if(this.innerHTML=='<span style="color:white;text-shadow:black 0 0 2px;">禁用中</span>'){
					game.saveConfig('extension_文武英杰_'+name,false);
					this.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">启用中</span>';
					forbid.style.backgroundColor="rgb(0, 255, 0)";
					node.classList.remove('off');
					//game.say1('启用'+lib.characterPack['wenwuyingjie']+'包成功');
				}else{
					game.saveConfig('extension_文武英杰_'+name,true);
					this.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">禁用中</span>';
					forbid.style.backgroundColor="rgb(255, 0, 0)";
					node.classList.add('off');
					//game.say1('禁用'+lib.characterPack['wenwuyingjie']+'包成功');
				};
			};
			packName.appendChild(forbid); 
		};
		*/		
		var func1=function(){
			ui.system.style.display='';
			//ui.menuContainer.style.display='';
			setTimeout(function(){
				//ui.click.configMenu();
				ui.menuContainer.style.display='';
			},500);
			for(var i in dialog1){
				dialog1[i].delete();
			};
		};
		setTimeout(function(){
			div.addEventListener(lib.config.touchscreen?'touchend':'click',function(){
				func1();
				if(interval!=undefined) clearInterval(interval);
			});
		},750);
		background.appendChild(div);
	};
   
// ---------------------------------------lebusishu------------------------------------------//        		
		 if(config.wwyj_lebusishu){
		 lib.skill._lebusishu={
		trigger:{
			target:'useCardToBegin',
		},														
		forced:true,
		filter:function (event,player){
            return event.card&&event.card.name=='lebu';
        },                 
		content:function(){			 						  
			game.broadcastAll(function(player){
 			img = document.createElement('div');
				img.setBackgroundImage('extension/文武英杰/wwyj_lebusishu.png'); 						
		 	img.style.backgroundSize='cover';
				img.style.width='100%';
				img.style.height='100%';			
				img.style.transform='translateY(-200px)';
				player.node.avatar.appendChild(img);
				ui.refresh(img);
				img.style.transform='';
			},player);
 		}, 		
    }	

 	lib.skill._lebusishujudgeafter={
		trigger:{
			player:['judgeAfter','turnOverAfter'],
		},							
		priority:-2019,
		forced:true,							
		content:function(){	
		    if(player.countCards('j',{name:'lebu'})){
				game.broadcastAll(function(player){
					img = document.createElement('div');
					img.setBackgroundImage('extension/文武英杰/wwyj_lebusishu.png'); 						
					img.style.width='100%';
					img.style.height='100%';
					img.style.backgroundSize='cover';
					img.style.transform='translateY(-200px)';
					player.node.avatar.appendChild(img);
					ui.refresh(img);
					img.style.transform='';
				},player);
			}				
			else{
			   player.node.avatar.setBackground(player.name,'character');	
			}			
 		},
	}
	lib.skill._lebusishudie={
		trigger:{
			player:'die',
		},							
		priority:2,
		forced:true,			
		forceDie:true,				
		content:function(){			
			game.broadcastAll(function(player){
				imgs=player.node.avatar.querySelectorAll("div");
				for (var i=0;i<imgs.length;i++) {
					var img = imgs[i];
					img.style.transform='translateY(-200px)';
					img.delete();
				}
			},player)
 		},
	}
	lib.skill._lebusishulose={
		trigger:{
			player:'loseEnd',
		},							
		filter:function(event,player){
			for(var i=0;i<event.cards.length;i++){
				if(event.cards[i].original=='j') return true;
			}
			return false;
		},
		forced:true,							
		content:function(){						    
			if(player.countCards('j',{name:'lebu'})){
				game.broadcastAll(function(player){
					img = document.createElement('div');
					img.setBackgroundImage('extension/文武英杰/wwyj_lebusishu.png'); 						
					img.style.width='100%';
					img.style.height='100%';
					img.style.backgroundSize='cover';
					img.style.transform='translateY(-200px)';
					player.node.avatar.appendChild(img);
					ui.refresh(img);
					img.style.transform='';
				},player);
			}				
			else{
				game.broadcastAll(function(player){
					imgs=player.node.avatar.querySelectorAll("div")
					for (var i=0;i<imgs.length;i++) {
						var img = imgs[i];
						img.style.transform='translateY(-200px)';
						img.delete();
					}
				},player);
			}									
 		},
	}						
	}	  
// ---------------------------------------New Function------------------------------------------//	
				lib.element.player.replaceFujiang=function(name2){
				var hp=this.hp;
				var maxhp=this.maxHp;
				this.clearSkills();
				this.init(this.name1,name2);
				this.classList.remove('unseen2');
				this.hp=hp;
				this.maxHp=maxhp;
				this.update();
			}
			lib.element.player.addFujiang=function(name2){
				var hp=this.hp;
				var maxhp=this.maxHp;
				var name=this.name;
				this.uninit();
				this.init(name,name2);
				this.classList.remove('unseen2');
				this.hp=hp;
				this.maxHp=maxhp;
				this.update();
			} 			
// ---------------------------------------chat------------------------------------------//				
	if(config.wwyj_chat){
	lib.skill._recoverchat={
		trigger:{player:'recoverEnd'},							
        forced:true, 
		filter:function (event,player){							
            return player.hp>2&&Math.random()<=0.7;                          
		},
        content:function (){					
			player.say(['早睡早起，方能养生，2333～','这感觉……就像谈恋爱了'].randomGet());		   	    							         					        
 	  	},	
	}	
	lib.skill._dyingafterchat={
		trigger:{player:'dyingAfter'},							
        forced:true,  
		filter:function (event,player){							
            return Math.random()<=0.7;                          
		}, 
        content:function (){					
			player.say(['差点领了便当，吓死老子了','好死不如赖活啊'].randomGet());		   	    							         					        
 	  	},	
	}
	lib.skill._shachat={
		trigger:{player:'shaBegin'},							
        forced:true,  
		filter:function (event,player){							
            return Math.random()<=0.3;                          
		}, 
        content:function (){					
			player.say(['你TM真欠揍','杀到你妈都认不出你','为什么？为什么非要逼我出手？'].randomGet());		
			trigger.target.say(['谁敢杀我？','你小子有种就放学后在校门口别走'].randomGet());
 	  	},	
	}
	lib.skill._drawchat={
		trigger:{player:'drawEnd'},							
        forced:true,      
        filter:function (event,player){							
            return event.num>2&&Math.random()<=0.5;                          
		},  
        content:function (){					
			player.say(['卧槽～好牌啊！','猜猜我摸了什么牌？','唉……又摸了几张烂牌'].randomGet());		   	    							         					        
 	  	},	
	}	
	lib.skill._turnoverchat={
		trigger:{player:'turnOverEnd'},							
        forced:true,     
        filter:function (event,player){							
            return Math.random()<=0.6&&player.isTurnedOver();                          
		},   
        content:function (){					
			player.say(['众将听令，摆好阵势……我先休息一会','世风日下，道德沦丧，真的是没脸看你们了'].randomGet());		   	    							         					        
 	  	},	
	}
	lib.skill._linkchat={
		trigger:{player:'linkEnd'},							
        forced:true,  
        filter:function (event,player){							
            return Math.random()<=0.5;                          
		},              
        content:function (){				
        if(player.isLinked()){	
		        player.say(['捆绑SM？我喜欢','你绑得住我的身，却绑不了我的心'].randomGet());		   	   
			} 							    
	    	else{     					   
			    player.say(['原谅我这一生不羁放纵爱自由','区区铁链，如何困得住我？'].randomGet());		   	   
			}     
 	  	},	
	}
	
	lib.skill._damagechat={
		trigger:{player:'damageAfter'},		
        forced:true,  
        filter:function (event,player){
            return event.source&&Math.random()<=0.4;
        },      
        content:function (){					
			player.say(['忍一时越忍越气，退一步退无可退','……','君子报仇，十年未晚，咱们走着瞧'].randomGet());
			trigger.source.say(['被打了吧？早就叫你不要装逼了','出来混，记住不要太嚣张','看我怎么收拾你'].randomGet());
			},
			}
			}
// ---------------------------------------Audio------------------------------------------//
			game.playwwyj = function (fn, dir, sex) {
			if (lib.config.background_speak) {
				if (dir && sex)
					game.playAudio(dir, sex, fn);
				else if (dir)
					game.playAudio(dir, fn);
				else
					game.playAudio('..', 'extension', '文武英杰', fn);
			}
		}	
		lib.skill._wwyjzhwpy={
			trigger:{player:'dieBegin'},							
			priority:2,
			forced:true,
            unique:true,    
			content:function (){					
				game.playAudio('..','extension','文武英杰',player.name);
			},
		}		
		if(config.wwyj_huanleyinxiao){
	     	lib.skill._yourturn={
			    trigger:{player:'phaseUseBegin'},													
				forced:true,         
				filter:function (event,player){
                    return player==game.me;
                },                 
			    content:function (){					
					 game.playwwyj('wwyj_yourturn'); 
 			    },			   
 		 	}	
 		 lib.skill._diechat={
		trigger:{player:'dieBegin'},
        forced:true,     
       filter:function (event,player){
            return event.source;
        },                
        content:function (){		
         // game.playwwyj('wwyj_zhenwang'); 
            game.playAudio('..','extension','文武英杰','wwyj_zhenwang');			
		   	trigger.source.say('一首《凉凉》送给你');
	 	//	player.say(['没有耕坏的田，只有累死的牛','戎马一生，竟败于……你手','我在修罗地狱等着你，哈哈……'].randomGet());
 	  	},	
	}
		}
// ---------------------------------------wwyj_hezizhashi------------------------------------------//  
	if(config.wwyj_hezizhashi){		
		lib.skill._wwyj_hezizhashi={
           trigger:{
                player:"die",
           },               
           forced:true,
           forceDie:true,
           filter:function(event,player){  
              var wwyj_hezifengyun=game.findPlayer(function(current){
                  return current.name=='wwyj_hezifengyun';
           });
              return !wwyj_hezifengyun;
           },
           content:function (){ 
            'step 0'
            player.$fullscreenpop('何子诈尸','fire');	
            player.revive();            
            player.init('wwyj_hezifengyun'); 
            player.recover(Infinity);   
            game.playwwyj('wwyj_fengyun1');                   
            player.update();
            'step 1'	 
          game.broadcastAll(function(player){       	
       	var Animation = ui.create.div();
       	Animation.style.backgroundImage = player.node.avatar.style.backgroundImage;     					     	    
         Animation.style.top = '50%';        
         Animation.style.width = '0px';
         Animation.style.height = '0px';
         Animation.style.left = '50%';  
         Animation.style.transform = 'rorate(20deg)';
         Animation.style.transition = 'all 1s';
         Animation.style.backgroundSize = 'cover';
         ui.window.appendChild(Animation);
         ui.refresh(Animation);
         Animation.style.width = '180px';
         Animation.style.height = '240px';
         Animation.style.left = '42%';  
         Animation.style.top = 'calc(45% - 50px)';                       				     
         setTimeout(function(){
	  	   	ui.window.removeChild(Animation);
            Animation.delete();			
       },3000);	  							         						
	     	},player);						 			               										         						
        'step 2'	  	  
        game.countPlayer(function(current){
			if(current!=player){
				player.line(current,'green');
				current.damage();
			}
		});               	                              
        player.insertPhase();     				                         		                     	                         		                     
        },
        }
        }        			          		                	
// ---------------------------------------wwyj_jishatexiao------------------------------------------//				   
		  if(config.wwyj_jishatexiao){		
		    lib.skill._wwyj_jishatexiao={
                trigger:{
                    source:"die",
                },   
                forceDie:true,  
                forced:true,
                content:function (){ 
                'step 0'
                game.broadcastAll(function(player){       	
       	var Animation = ui.create.div();
       	Animation.style.backgroundImage = player.node.avatar.style.backgroundImage;     					
     	Animation.style.left = '-120px';
         Animation.style.top = 'calc(50% - 90px)';        
         Animation.style.width = '120px';
         Animation.style.height = '150px';
         Animation.style.transform = 'rorate(20deg)';
         Animation.style.transition = 'all 2s';
         Animation.style.backgroundSize = 'cover';
         ui.window.appendChild(Animation);
         ui.refresh(Animation);
         Animation.style.left = '35%';					     
         setTimeout(function(){
	  	   	ui.window.removeChild(Animation);
            Animation.delete();			
       },5000);	  							         						
	     	},player);			
			  'step 1'
		game.broadcastAll(function(player){       	
       	var Animation2 = ui.create.div();
       	Animation2.style.backgroundImage = trigger.player.node.avatar.style.backgroundImage;      						
     	Animation2.style.right = '-120px';
         Animation2.style.top = 'calc(50% - 90px)';        
         Animation2.style.width = '120px';
         Animation2.style.height = '150px';
         Animation2.style.transform = 'rorate(20deg)';
         Animation2.style.transition = 'all 2s';
         Animation2.style.backgroundSize = 'cover';
         ui.window.appendChild(Animation2);
         ui.refresh(Animation2);    
         Animation2.style.right = '35%';   
         setTimeout(function(){	  	  
			ui.window.removeChild(Animation2);
            Animation2.delete();
       },3000);	
       		},player);				               										         						
        'step 2'	  	  
       setTimeout(function(){
	  	   	player.$fullscreenpop('击杀','fire');	
	  	   	game.playwwyj('wwyjjishatexiao'); 
       },1800);		  				                         		                     	                         		                     
                },
                }
      }        
  // ---------------------------------------☆------------------------------------------//				       
     lib.skill._lc_shiji={
        trigger:{global:'gameStart',player:['enterGame','phaseBegin','phaseEnd']},
        forced:true,
        unique:true,
        locked:true,
        charlotte:true,
        priority:Infinity,
        filter:function (event,player){
   return game.hasPlayer(function(current){
			return current.name=='wwyj_liangchax';
		});
    },
    content:function (){   
				if(player.name!='wwyj_liangchax'){
			if(player.maxHp>16) player.maxHp=2;      
        player.update();
    player.removeSkill('wwyj_likedead');  
			player.addSkill('baiban');
			player.clearSkills();
			game.playwwyj(['wwyj_heimao1','wwyj_heimao2'].randomGet()); 			
			player.turnOver(true);
		}
     },
     }	 
	 	 	
	lib.skill._lc_shanghai={
        trigger:{player:'damageBegin'},
        forced:true,
        unique:true,     
        charlotte:true,
        priority:2019,
		filter:function (event,player){
		   return event.source&&event.source.name=='wwyj_liangchax';
    },
     content:function (){     
   game.playwwyj(['wwyj_gainian1','wwyj_gainian2'].randomGet());     		
		player.addSkill('wwyj_likedead');		
		player.loseMaxHp(trigger.num);	
		trigger.num=2*trigger.num;
		if(player.hp<=0||player.hp>20){
		  player.die()._triggered=null;
		}
     },
     }
	 
	 lib.skill._lc_mopai={
        trigger:{player:'phaseDrawBegin'},
        forced:true,
        unique:true,
        charlotte:true,
        locked:true,
        priority:2019,       
		filter:function (event,player){
		   return player.name=='wwyj_liangchax';
    },
     content:function (){     
		var num=game.countPlayer(function(current){
			return current.isDamaged();
		});
		trigger.num+=num;		
		//game.playwwyj(['wwyj_heimao1','wwyj_heimao2'].randomGet()); 
     },
     }
	 
	 lib.skill._lc_siwang={
        trigger:{player:['damageEnd','dieBegin','phaseDiscardEnd']},
        forced:true,
        unique:true,
        charlotte:true,
        locked:true,
        priority:Infinity,     
		filter:function (event,player){
		   return player.name=='wwyj_liangchax';
    },
     content:function (){  
     'step 0' 	  		
		trigger.cancel();
		'step 1'
		if(player.maxHp<16||player.hp<16){
		player.maxHp=Infinity;
		player.hp=Infinity;
		player.update();
		}
     },
     }
     
	 lib.skill._lc_juli={
	    trigger:{player:'useCard'},
				forced:true,
				charlotte:true,
				unique:true,
				filter:function (event,player){
					return player.name=='wwyj_liangchax'&&get.type(event.card)=='trick';
				},
				content:function(){
				//game.playwwyj(['wwyj_gainian1','wwyj_gainian2'].randomGet()); 
					trigger.nowuxie=true;
				},
        mod:{
        globalTo:function (from,to,distance){
            if(to.name=='wwyj_liangchax') return distance+Infinity;
        },
		globalFrom:function(from,to,distance){
			if(from.name=='wwyj_liangchax') return distance-Infinity;
		},
		cardUsable:function(card,player,num){
			if(player.name=='wwyj_liangchax') return Infinity;
		},
		targetEnabled:function(card,player,target,now){						
				if(target.name=='wwyj_liangchax'&&player!=target) return false;						
					},
		selectTarget:function(card,player,range){
			var type=get.type(card);
                if(type!='delay'){
			if(card.name!='jiedao'&&card.name!='wuzhong'&&card.name!='wuxie'&&player.name=='wwyj_liangchax'&&range[1]!=-1) range[1]+=Infinity;
				}
		},			
        },
     }  
   // ---------------------------------------open boss------------------------------------------//				 
      if (config.wwyj_normalize) {
			lib.arenaReady.push(function() {
				var wwyj_boss = lib.characterPack['wenwuyingjie'];
				for (i in wwyj_boss) {
					var wwyj_xu = wwyj_boss[i][4];
					if (wwyj_xu.indexOf("boss") >= 0) {
						wwyj_xu[wwyj_xu.indexOf("boss")] = '';
						wwyj_xu[wwyj_xu.indexOf("bossallowed")] = '';
					}				
				}
			});
		}
	 
	 // ---------------------------------------wwyj_yinglingfuhun------------------------------------------//		
		   if(config.wwyj_yinglingfuhun){		
          lib.skill._wwyj_yinglingfuhun={              
                trigger:{
                    global:"gameStart",
                    player:"enterGame",
                },
                forced:true,
                priority:100,
                fixed:true,
                filter:function (event,player){
        return player.isAlive();
    },
                content:function (){
           "step 0"                  
        var list;
        if(_status.connectMode){
           list=get.charactersOL(function(i){
               return lib.character[i][1]!='shen';
           });
        }
        else{        
        list=get.gainableCharacters(function(info){
                return info[1]==['shen','shu','wei','wu','qun','wwyjsha'].randomGet();
            });
        }
			player.chooseButton(true).set('ai',function(button){
						return get.rank(button.link,true)-lib.character[button.link][2];
			}).set('createDialog',['请选择一名武将当你的附灵武将',[list.randomGets(5),'character']]);			
                "step 1"                    
                 if(result.bool){
                 player.flashAvatar('_wwyj_yinglingfuhun',result.links[0]);
                 var name=result.links[0];
        var list=[];
        var skills=lib.character[result.links[0]][3];
            for(var j=0;j<skills.length;j++){
                if(lib.translate[skills[j]+'_info']&&lib.skill[skills[j]]&&
                    !player.hasSkill(skills[j]
                      &&!lib.skill[skills[j]].zhuSkill)){
                    list.push(skills[j]);
                }
            }
        player.flashAvatar('_wwyj_yinglingfuhun',list);            
        player.addAdditionalSkill('_wwyj_yinglingfuhun',list);
        player.markCharacter(name,null,true,true);
                  }      
    },
                ai:{
                    order:8,
                },
            }
            }
    // ---------------------------------------wwyj_sjwjp------------------------------------------//				               
      if(config.wwyj_sjwjp){		
    lib.skill._wwyj_sjwjp={
     trigger:{
                    global:"roundStart",
                },
          forced:true,          
                content:function (){
                    "step 0"                
                    var targets=game.filterPlayer();                   
                    targets.sort(lib.sort.seat);
                    event.targets=targets;                
                    "step 1"
                    event.num=0;          
                    "step 2"
                    if(num<event.targets.length){
                          var list;
        if(_status.connectMode){
           list=get.charactersOL(function(i){
               return lib.character[i][1]!='shen';
           });
        }
        else{        
        list=get.gainableCharacters(function(info){
                return info[1]==['shen','shu','wei','wu','qun','wwyjsha'].randomGet();
            });
        }
        var name=list.randomGet();        
        var a=event.targets[num].hp;
        var b=event.targets[num].maxHp;
        event.targets[num].init(name);
        event.targets[num].hp=a; 
        event.targets[num].maxHp=b;
        event.targets[num].update();        
        event.num++;
        event.redo();
        }
        else event.finish();     
                },
    }
    }
    // ---------------------------------------★------------------------------------------//				 
    if(config.wwyj_xinname=='hide'){
			get.slimName=function(str){
				var str2=lib.translate[str];
				if(!str2) return '';
				if(str2.indexOf('★')==0){
					str2=str2.slice(1);				
				}
				return get.verticalStr(str2,true);
			}
		}
    // ---------------------------------------gengminghuanxing------------------------------------------//			
	if(config.wwyj_gengminghuanxing) {
		lib.translate['wwyj_liangchas']='玉蝴蝶';		
		lib.translate['wwyj_taishangdaniu']='落影逝尘';
		lib.translate['wwyj_guihua']='黑猫';
		
	}
	else {
		lib.translate['wwyj_liangchas']='凉茶';		
		lib.translate['wwyj_taishangdaniu']='太上大牛';
		lib.translate['wwyj_guihua']='松岛枫桂花';
		
	}																																																																																																																																																																																																																																							
    // ---------------------------------------wujianglang------------------------------------------//		
	
	if(config.wenwuyingjie){
		for(var i in lib.characterPack['wenwuyingjie']) {
			if(lib.character[i][4].indexOf("forbidai")<0) lib.character[i][4].push("forbidai");
		};
	};
	
},precontent:function (wwyj){     		    
    	
	/*//css：
	var link = document.createElement("link");
	link.href = lib.assetURL + "extension/文武英杰/wwyj_waiguan.css";
	link.type = "text/css";
	link.rel = "stylesheet";
	document.getElementsByTagName("head")[0].appendChild(link); */
	lib.extensionMenu.extension_文武英杰.newtujian={
		"name":"全新图鉴<div>&gt;</div>",
		"clear":true,
		"onclick":function(){
			ui.click.configMenu();
			game.wwyj_showNewtujian();				
		},
	};
	lib.init.js(lib.assetURL+'extension/文武英杰','newtujian',function(){});
	lib.init.js(lib.assetURL+'extension/文武英杰','update',function(){});
	delete lib.extensionMenu.extension_文武英杰.delete;	
	lib.extensionMenu.extension_文武英杰.changelog={
		//"name":"<span style='text-decoration: underline'>查看更新日志</span>",
		"name":"更新日志<div>&gt;</div>",
		"clear":true,
		"onclick":function(){
			ui.click.configMenu();
			game.wwyj_showChangeLog();
			//alert('网络链接失败');
		},
	};	
	
	lib.extensionMenu.extension_文武英杰.wwyj_yugao={	
        name:'<div class="wwyj_menu">更新预告<font size="3px">⇨</font></div>',
        clear:true,
        onclick:function(){
			if(this.wwyj_yugao==undefined){
				var more=ui.create.div('.wwyj_yugao','<li>扩展作者：升麻、薄荷糖、天气亏<li>粉丝玩家：待定');
				this.parentNode.insertBefore(more,this.nextSibling);
				this.wwyj_yugao=more;
				this.innerHTML='<div class="wwyj_menu">更新预告<font size="3px">⇩</font></div>';
			}else{
				this.parentNode.removeChild(this.wwyj_yugao);
				delete this.wwyj_yugao;
				this.innerHTML='<div class="wwyj_menu">更新预告<font size="3px">⇨</font></div>';
			}
		},
    };
    
    lib.extensionMenu.extension_文武英杰.wwyj_最佳拍档={	
        name:'<div class="wwyj_menu">最佳拍档<font size="3px">⇨</font></div>',
        clear:true,
        onclick:function(){
			if(this.wwyj_zuijiapaidang==undefined){
				var more=ui.create.div('.wwyj_zuijiapaidang','<li>装备流：极光+烟雨墨染+血刀少主+造孽<li>翻面系：苏婆玛丽奥+诸葛均+咸鱼+孤城<li>其他组：太上大牛+大熊小猫+神奈');
				this.parentNode.insertBefore(more,this.nextSibling);
				this.wwyj_zuijiapaidang=more;
				this.innerHTML='<div class="wwyj_menu">最佳拍档<font size="3px">⇩</font></div>';
			}else{
				this.parentNode.removeChild(this.wwyj_zuijiapaidang);
				delete this.wwyj_zuijiapaidang;
				this.innerHTML='<div class="wwyj_menu">最佳拍档<font size="3px">⇨</font></div>';
			}
		},
    };
    
	lib.extensionMenu.extension_文武英杰.BUG={
		//"name":"<span style='text-decoration: underline'>反馈BUG及投稿、提建议</span>",
		"name":"反馈BUG<div>&gt;</div>",
		"clear":true,
		"onclick":function(){
			game.open('https://tieba.baidu.com/p/6657464280');
		},
	};			
	
	lib.extensionMenu.extension_文武英杰.wwyjwjl_title={
		"name":"<b><p align=center><span style=\"font-size:18px\">-----浏览武将-----</span></b>",
		"clear":true,
		"nopointer":true,
	};
	lib.extensionMenu.extension_文武英杰.wwyjwjl_info={
		"name":"点击下方的“浏览武将<div>&gt;</div>”即可弹出武将浏览界面查看相关信息（注：本功能移植自“扩展ol”并已征得作者极光的同意）",
		"clear":true,
		"nopointer":true,
    };
	lib.extensionMenu.extension_文武英杰.wwyjwjl={
		"name":"浏览武将<div>&gt;</div>",
		"clear":true,
		"onclick":function(){
			ui.click.configMenu();
			game.wwyj_openCharacterPack();				
		},
	};
	lib.extensionMenu.extension_文武英杰.wwyjwjl_fddh={
		"name":"放大动画",
		"init":true
    };
	lib.extensionMenu.extension_文武英杰.wwyjwjl_load={
		"name":"边打开边加载",
		//"init":lib.device?false:true,
		"init":false,
		"intro":"开启后，打开武将包界面时立即加载武将"
    };
	lib.extensionMenu.extension_文武英杰.wwyjwjl_showLJ={
		"name":"显示是否可以联机",
		"init":false,
		"intro":"开启后可以在文武英杰武将包界面显示武将是否可以联机"
    };
	lib.extensionMenu.extension_文武英杰.wwyjwjl_layout={
		name:'浏览武将界面布局',
		init:'lr',
		item:{
			'ud':'上下',
			'lr':'左右',
		},
	visualMenu:function(node,link){
			if(!node.created){
				node.created=true;
				node.className='menu';
				node.setBackgroundImage('theme/style/card/image/ol.png');
				node.firstChild.style.display='none';
				var packName=ui.create.div('.menu');
				packName.style.height='9px';
				packName.style.width='calc(100% - 6px)';
				packName.style.left='3px';
				packName.style.top='2.5px';
				packName.style['border-radius']='3px';
				node.appendChild(packName);
				var packInfo=ui.create.div('.menu');
				if(link=='ud'){
					packInfo.style.height='21.5px';
					packInfo.style.width='calc(100% - 6px)';
					packInfo.style.left='3px';
					packInfo.style.top='15px';
				}else{
					packInfo.style.height='31.5px';
					packInfo.style.width='calc(40% - 7px)';
					packInfo.style.left='3px';
					packInfo.style.top='15px';
				};
				packInfo.style['border-radius']='3px';
				node.appendChild(packInfo);
				var packSwith=ui.create.div('.menu');
				if(link=='ud'){
					packSwith.style.height='10px';
					packSwith.style.width='calc(100% - 6px)';
					packSwith.style.left='3px';
					packSwith.style.top='40px';
				}else{
					packSwith.style.height='36px';
					packSwith.style.width='calc(40% - 7px)';
					packSwith.style.left='3px';
					packSwith.style.top='50px';
				};
				packSwith.style['border-radius']='3px';
				node.appendChild(packSwith);
				var packCharacter=ui.create.div('.menu');
				if(link=='ud'){
					packCharacter.style.height='33px';
					packCharacter.style.width='calc(100% - 6px)';
					packCharacter.style.left='3px';
					packCharacter.style.top='52.5px';
				}else{
					packCharacter.style.height='70.5px';
					packCharacter.style.width='calc(60% - 2.4px)';
					packCharacter.style.left='calc(40% - 1px)';
					packCharacter.style.top='15px';
				};
				packCharacter.style['border-radius']='3px';
				node.appendChild(packCharacter);
			};
		},	
	    };
	lib.extensionMenu.extension_文武英杰.wwyjwjl_sf={
		name:'浏览武将界面缩放',
		init:1,
		item:{
			0.6:'60%',
			0.7:'70%',
			0.8:'80%',
			0.9:'90%',
			0.95:'95%',
			1:'100%',
			1.05:'105%',
			1.1:'110%',
			1.2:'120%',
		},
	};
	
   if(wwyj.enable){			
     game.import('character',function(){			
			 var wenwuyingjie={
				name:'wenwuyingjie',
				connect:true,
				characterSort:{
	 		wenwuyingjie:{
	 		    "wwyj_zhizun":["wwyj_shuihu","wwyj_remaliao","wwyj_liangchax"],
				
				"wwyj_zuozhe":["wwyj_liangchas","wwyj_chengxuyuan","wwyj_pipi","wwyj_Sukincen",
				"wwyj_qianshangs","wwyj_zhaonies","wwyj_lengyus","wwyj_shenzuo","wwyj_guihua",
				"wwyj_yitiaoxianyu","wwyj_xuebi","wwyj_yanyumoran","wwyj_wali","wwyj_kelejiabing",
				"wwyj_danwuyunxi","wwyj_jiguangs","wwyj_taishangdaniu","wwyj_maliao","wwyj_shijian",
				"wwyj_huijin","wwyj_kanpoyiqie","wwyj_yiwangs","wwyj_shennais","wwyj_huanyuxingcheng",
				"wwyj_duanges","wwyj_wuqinggezi","wwyj_shenwangquanjian","wwyj_ziyage","wwyj_guchengs",
				"wwyj_yuhudie","wwyj_hezifengyun","wwyj_fux2","wwyj_qingzhong","wwyj_qingzhongs"
				
				],
				
				"wwyj_fensi":["wwyj_xuedaoshaozhu","wwyj_limuzi","wwyj_tilongjianiao","wwyj_liushas","wwyj_zhugejun",
				"wwyj_feicheng","wwyj_xingyunnvshen","wwyj_lunhuizhong","wwyj_daxiongxiaimao","wwyj_wzszhaoyun"
				
				],
			},
		},
				character:{
           	"wwyj_shuihu":["male","shen",3,["wwyj_chuangshi","wwyj_qianfu","wwyj_ancha","wwyj_huikeng"],[]],
          	"wwyj_liangchax":["female","shen",Infinity,["wwyj_liangcha","wwyj_fanghua","wwyj_meiying"],["boss"]],
            "wwyj_liangchas":["female","wwyjsha",3,["wwyj_caizhi","wwyj_daixue"],[]],          
            "wwyj_chengxuyuan":["male","wwyjsha",3,["wwyj_jiedan"],[]],
            "wwyj_pipi":["female","wwyjsha",3,["wwyj_xipi","wwyj_baozao"],[]],
            "wwyj_Sukincen":["male","wwyjsha",3,["wwyj_fengliu","wwyj_qunying"],[]],
            "wwyj_wzszhaoyun":["male","wwyjsha",5,["wwyj_jiaoxiao","wwyj_zuikui"],[]],
            "wwyj_lunhuizhong":["male","wwyjsha",3,["wwyj_qiandao","wwyj_yingguai","wwyj_qianzhui"],[]],
            "wwyj_ziyage":["male","wwyjsha",3,["wwyj_ciya","wwyj_jinxiu"],[]],
            "wwyj_kanpoyiqie":["male","wwyjsha",3,["wwyj_lilun","wwyj_yanguan"],[]],
            "wwyj_daxiongxiaimao":["male","wwyjsha",4,["wwyj_chengpiao","wwyj_jipin"],[]],
            "wwyj_kelejiabing":["male","wwyjsha",3,["wwyj_jilve","wwyj_tuikeng"],[]],
            "wwyj_huijin":["male","wwyjsha",3,["wwyj_chehuo","wwyj_jinzhu","wwyj_kangfu"],[]],            
            "wwyj_maliao":["male","wwyjsha",3,["wwyj_daigeng","wwyj_jiangsha"],[]],
			"wwyj_remaliao":["male","key",3,["wwyj_jianghun","wwyj_chengzhi"],[]],
            "wwyj_taishangdaniu":["male","wwyjsha",4,["wwyj_yixue","wwyj_qianxu"],[]],
            "wwyj_jiguangs":["female","wwyjsha",3,["wwyj_jiguang","wwyj_kazhan"],[]],
            "wwyj_danwuyunxi":["male","wwyjsha",3,["wwyj_kaiche","wwyj_shengshen"],[]],
            "wwyj_xingyunnvshen":["female","wwyjsha",4,["wwyj_guanli"],[]],
            "wwyj_feicheng":["male","wwyjsha",3,["wwyj_juedi"],[]],
            "wwyj_wali":["male","wwyjsha",4,["wwyj_toushi","wwyj_qiuxue"],[]],
            "wwyj_yanyumoran":["female","wwyjsha",4,["wwyj_yanyu","wwyj_bingmou"],[]],
            "wwyj_shenzuo":["male","wwyjsha",3,["wwyj_jisi","wwyj_qiangkang"],[]],
			"wwyj_xuebi":["male","wwyjsha",3,["wwyj_qiaoji","wwyj_fansha"],[]],
			"wwyj_shijian":["female","wwyjsha",3,["wwyj_touliang","wwyj_kangxing"],[]],
			"wwyj_lengyus":["female","wwyjsha",4,["wwyj_lengyu","wwyj_junshen"],[]],
			"wwyj_zhugejun":["male","wwyjsha",3,["wwyj_qisi","wwyj_miaoji"],[]],
			"wwyj_zhaonies":["male","wwyjsha",4,["wwyj_zhaonie","wwyj_peiyin","wwyj_mingka"],[]],
				"wwyj_qianshangs":["male","wwyjsha",3,["wwyj_qianshang","wwyj_tuikeng"],[]],
				"wwyj_yitiaoxianyu":["male","wwyjsha",3,["wwyj_xianyu","wwyj_weixin"],[]],
				"wwyj_shennais":["female","wwyjsha",3,["wwyj_shennai","wwyj_keai"],[]],
				"wwyj_yiwangs":["female","wwyjsha",4,["wwyj_fenghua","wwyj_yiwang"],[]],
				"wwyj_liushas":["male","wwyjsha",4,["wwyj_liusha"],[]],
				"wwyj_guihua":["female","wwyjsha",3,["wwyj_gainian","wwyj_heimao"],[]],
				"wwyj_tilongjianiao":["male","wwyjsha",3,["wwyj_gonggao","wwyj_jinyan"],[]],
				"wwyj_huanyuxingcheng":["male","wwyjsha",3,["wwyj_xingcheng","wwyj_huanyu","wwyj_xuanxia"],[]],
				"wwyj_limuzi":["male","wwyjsha",3,["wwyj_xiyuan","wwyj_qinyan"],[]],
				"wwyj_fux2":["male","wwyjsha",4,["wwyj_dansha","wwyj_lunpo"],[]],
				"wwyj_xuedaoshaozhu":["male","wwyjsha",3,["wwyj_xuedao","wwyj_shaozhu"],[]],				
				"wwyj_shenwangquanjian":["male","wwyjsha",3,["wwyj_jieguan","wwyj_sepi"],[]],
				"wwyj_wuqinggezi":["male","wwyjsha",3,["wwyj_wuqing","wwyj_gezi"],[]],
				"wwyj_duanges":["male","wwyjsha",4,["wwyj_duange","wwyj_meihua"],[]],
				"wwyj_guchengs":["male","wwyjsha",3,["wwyj_gucheng","wwyj_zangyue","wwyj_feixue"],[]],
				"wwyj_hezifengyun":["male","wwyjsha",3,["wwyj_fengyun"],[]], 
				"wwyj_qingzhongs":["male","wwyjsha",3,["wwyj_qingzhong","wwyj_jiegeng"],[]],
				
				"wwyj_yuhudie":["female","wwyjsha",3,["wwyj_caizhi","wwyj_daixue"],["unseen"]], 
				
			 
               },
    characterIntro:{
                	"wwyj_shuihu":"水乎，无名杀的创作者，圈内习惯称他为：老大、村长，传闻是北大的硕士研究生，于2013年底开始，以一己之力制作了一款叫无名杀的游戏，为三国杀爱好者开创了一片广阔的天地。同时还DIY了《炉石传说》、《昆特牌》、《万智牌》、《古剑奇潭》、《仙剑奇侠传》等多个扩展作品",
                 	"wwyj_chengxuyuan":"橙续缘（程序猿），一位专业的付费代写的远古代扩展大神，代表扩展有《代码搜索器》、《特效扩展》、《势力边框》、《吧友列传》（第一代作者包）、《官渡之战》、《诸侯伐董》、《欢乐斗地主》、《狗年乱斗》、《圣者为王》等等，其中前三个扩展流传甚广，尤其是《代码搜索器》，圈内皆称之为“神器”，为制作扩展者必备",
					"wwyj_pipi":"皮皮……一位远古代扩展大神，擅长制作挑战boss类扩展，写过不少花里胡哨、强度高、搞怪、不按常理出牌的扩展，代表扩展有《神话》、《传说》、《暴躁AI》、《闯关模式》、《武林绝学》、《德玛西亚》等等",		
					"wwyj_Sukincen":"小苏，一位远古代扩展大神，原ID叫Sukincen，圈内习惯称呼他为“小苏”，无名杀扩展交流群②的首任群主，同时负责游戏内获取扩展的管理。代表扩展有《群英会》，该扩展高度还原了《火影忍者》等作品的人物，收集了各种类型的技能，人物技能新颖独特，契合度极高，同时配音齐全，还有击杀特效、新增卡牌等。技能强度方面，个别武将怼常规BOSS都不虚。同时小苏出过不少教程，后因工作繁忙逐渐隐退了。本作中的设计参照了《群英会》中其对本人的角色设计",	
					"wwyj_liangchas":"凉茶，本扩展作者，现名：玉蝴蝶，小号：咫尺天涯。曾任无名杀扩展交流②群的群主，玩过几年三国杀，接触无名杀后，在Sukincen的指点下，自学一个多月的扩展制作的代码教程，研究了不少扩展的代码，为实践而收费（均价5元／技能）帮人写技能代码。因技能DIY设计水平较低，所以一直没啥自创的扩展，但代写过大小近百个扩展，后期由于忙碌和懒惰，导致较少接单代写了。因在群里经常看到玩家们讨论一些已退玩的扩展作者，遂心血来潮，重新设计一个平衡的《作者包》，并征集意见起名为《无名风云录》，即为本扩展的前生，后来改名《文武英杰》，寓意本扩展的武将含有：文臣（辅助）、武将（爆发、攻击）、英明（骚操作）、俊杰（卖血）。另外扩展作品还有《耀世三国》，后来因为懒直接“咕”了",	
					"wwyj_yuhudie":"玉蝴蝶，本扩展作者，小号：咫尺天涯。曾任无名杀扩展交流②群的群主，玩过几年三国杀，接触无名杀后，在Sukincen的指点下，自学一个多月的扩展制作的代码教程，研究了不少扩展的代码，为实践而收费（均价5元／技能）帮人写技能代码。因技能DIY设计水平较低，所以一直没啥自创的扩展，但代写过大小近百个扩展，后期由于忙碌和懒惰，导致较少接单代写了。因在群里经常看到玩家们讨论一些已退玩的扩展作者，遂心血来潮，重新设计一个平衡的《作者包》，并征集意见起名为《无名风云录》，即为本扩展的前生，后来改名《文武英杰》，寓意本扩展的武将含有：文臣（辅助）、武将（爆发、攻击）、英明（骚操作）、俊杰（卖血）。另外扩展作品还有《耀世三国》，后来因为懒直接“咕”了",	
					"wwyj_wzszhaoyun":"我只是赵云，简称：赵云，摘自一位老玩家的回忆：一代嚣张跋扈、自带嘲讽的传奇玩家，代更过《极略三国》（虽然只是说说而已），曾是水乎钦点的代更者并立他为小吧主，而其却叫嚣要废除扩展功能，贴吧上到处禁言删帖……引起大家的不满。同时其恶语攻击一瞬间遗忘，却遭对方反击，双方阵营引爆无名杀舆论，互相对骂，甚至将水乎老大也牵扯进来……可以说此人是间接导致水乎放弃写新版无名杀的罪魁祸首。后来又因针对呲牙哥，引起众怒，最终被撤销小吧主之职，并被逼出贴吧群，自此，一代混世魔王才终于销声匿迹了。最近（2020年7月）又活跃了，一改以前的嚣张，变得随和了许多，有自我洗白的趋势",	
					"wwyj_lunhuizhong":"轮回中的消逝者，呲牙哥的首席忠实粉丝，曾对呲牙哥和签到有迷之执着，平时潜水于各大群暗中观察追随呲牙哥的行踪。一直关注着无名杀的发展和各个扩展作者的动态，对大部分无名杀的扩展及其作者很了解。虽然经常在群发“( •̥́ ㉨ •̀ू )嘤嘤嘤~”，但大家都忍着不会跟他计较。会写一些代码并接替维护呲牙哥的扩展",	
					"wwyj_ziyage":"呲牙哥，《秦时明月》、《沧海横流》、《天行九歌》等扩展的作者，无名杀扩展交流群①的群主，曾对无名杀素材收集总结、游戏推广作出过不少贡献，在圈内有不小的声望，曾被“我只是赵云”针对，几乎所有人都支持呲牙哥，终以“我只是赵云”被剥夺小吧主的地位并被踢出贴吧群告终。呲牙哥后来因进修学习而渐渐消失在玩家的视野中",	
					"wwyj_kanpoyiqie":"看破一切，一位拥有专业编程技术的远古代扩展作者，同时对三国杀DIY有专业的见解，通常以各种专业理论刷屏唬住众人。曾任无名杀扩展交流群②的群主，对群管理甚严，其扩展特点多为巧妙清奇，代表扩展有《无心之举》、《格林笔记》、《艾克斯》等",	
					"wwyj_daxiongxiaimao":"大熊小猫，习称之为“大熊猫”，一位三国杀DIY爱好者，设计了《金庸群侠传》扩展近两百个人物，并由太上大牛（落影逝尘）等人写代码制作完成，这个大型扩展系列虽然诞生时间不长，但凭借着精炼、系统的技能设计，迅速传播开来，获得众多玩家一致的好评。该扩展对金庸武侠的人物进行了大总结，并将其能力、事迹翻译成技能，让他们在无名杀里快意恩仇。大熊小猫有专业的摄影技术，目前在开展精准扶贫工作",	
					"wwyj_kelejiabing":"可乐加冰，一位元老级别的扩展大神，主要的扩展作品为《极略三国》、《女孩不哭》，同时出过不少教程，为后来摸索者指引了方向，为无名杀扩展代码作出了巨大的贡献。极略三国复刻了三国kill（后改名为极略三国）的武将，相当于将别人的游戏整个搬进了无名杀来！技能新颖，且与人物的历史事迹高度契合，武将总体强度相对平衡且约等于SP将水平。同时作为早期扩展，可玩性极高。可乐后因考研而隐退了",	
					"wwyj_huijin":"辉烬贺流年，一位新生代扩展作者，喜欢制作扩展并为此付出了不少努力，技术也日益精湛。2019年底不幸遭遇车祸，手术成功后一直卧床，期间仍坚持制作扩展。代表扩展作品有《辉烬贺流年》等",		
					"wwyj_shijian":"诗笺，一位中生代扩展作者，曾化名过雪碧、透心凉、冰波水微、独者自饮酒、小鸽子，常年活跃于多个无名杀群，传闻是《作者包》的作者神座的徒弟。其爱好钻研艰涩的非常规代码，尤其是创造抗性与破解抗性的代码，最近又迷上特效。代表扩展有《龙族》、《十万个冷笑话》、《军争加强版》、《曹操传》、《小试炼》、《蜀汉中兴》以及第三代作者包《群英荟萃》等",
					"wwyj_xuebi":"雪碧，一位中生代扩展作者，后化名过诗笺、透心凉、冰波水微、独者自饮酒、小鸽子，常年活跃于多个无名杀群，传闻是《作者包》的作者神座的徒弟。其爱好钻研艰涩的非常规代码，尤其是创造抗性与破解抗性的代码，最近又迷上特效。代表扩展有《龙族》、《十万个冷笑话》、《军争加强版》、《曹操传》、《小试炼》、《蜀汉中兴》以及第三代作者包《群英荟萃》等",
			        "wwyj_maliao":"苏婆玛丽奥，一位热爱键社的中生代扩展大神，曾写过《新服杂碎》、《键杀》、《文和乱武》等扩展。水乎短暂回坑时，将无名杀的代更任务交给了他，其对无名杀的后续新发展作出了巨大的贡献，圈内声望颇高",		
			        "wwyj_remaliao":"苏婆玛丽奥，一位热爱键社的中生代扩展大神，曾写过《新服杂碎》、《键杀》、《文和乱武》等扩展。水乎短暂回坑时，将无名杀的代更任务交给了他，其对无名杀的后续新发展作出了巨大的贡献，圈内声望颇高",								
					"wwyj_taishangdaniu":"太上大牛，一位中生代扩展大神，化名过“落影逝尘”，喜欢在群里交流代码技术，曾写过《三国时代》扩展，后来义写《金庸群侠传》扩展中的大部分角色，这个大型扩展系列虽然诞生时间不长，但凭借着精炼、系统的技能设计，迅速传播开来，获得众多玩家一致的好评。该扩展对金庸武侠的人物进行了大总结，并将其能力、事迹翻译成技能，让他们在无名杀里快意恩仇。太上大牛为人较为谦虚低调，深为大家赞颂",		
					"wwyj_jiguangs":"极光，原ID：Aurora，一位元老级的超级大神，掌握着非常专业、精湛的编程技术，极光写过非常多的扩展，包括多种多样的模式、武将、功能，同时开发出全新联机框架等，主要作品有《无双杀》、《雷金阴洪石乐》、《阴雷》、《阴阳杀》、《奥拉星S》、《奈何花落》、《万世神兽》、《乱世佳人》等，其大部分的作品已收录在《扩展ol》一个扩展里，其中最具创意的是卡战模式，全新的玩法，完全可成为独立的游戏",
					"wwyj_danwuyunxi":"淡雾云曦，群名：一心强化老神将，老神将也能1穿7，中生代扩展作者，长驻无名杀扩展交流群①，其作品也主要在此群发布更新，圈内习惯称呼他为“老神将”，因其代表作品《混沌界》（原名《圣神包》），以将普通将重新设计加强成神将为主，总体强度颇高，粉丝也不少。据闻其曾在群里冒死擦边“开车”，又因为：老神将=lsj=老司机，得外号“老司机”，个性有点洒脱不羁，但对制作扩展又非常认真，虽然经常因为更新得慢被人说为鸽子，每次更新都会书写一段颇具文采的更新说明",		
					"wwyj_xingyunnvshen":"幸运女神，原ID：骑着二乔上貂蝉，资深老玩家，无名杀贴吧群管理员。本扩展中该武将的技能为其本人设计并由凉茶制作",	
					"wwyj_feicheng":"废城，无名杀元老级别的资深老玩家，也是最早玩无名杀的玩家之一，贴吧群的群主，热爱无名杀，经常出面维护无名杀的声誉，并且对游戏的发展历程很熟悉，最近自发收集整理皮肤素材。本扩展中废城的技能皆为其本人设计并由凉茶制作",	
			        "wwyj_wali":"瓦力（Wall•E），是集技能设计、历史文学、优秀的编写代码技术等于一身的新生代扩展作者，短期内便学会制作扩展，并写了大量的武将。旷世巨作《血色衣冠》，设计的人物贯穿中华上下五千年，技能构思新颖、巧妙，环环相扣的联动让人玩得爱不释手。本扩展中的瓦力的技能为其亲自设计，由凉茶稍作调整后制作而成",			
					"wwyj_yanyumoran":"烟雨墨染，一名中生代扩展作者，有很强的技能设计与编写代码的能力，曾为编写扩展废寝忘食、通宵达旦，非常努力，其代表作品为《权倾三国》、《乱世天下》和《上兵伐谋》，特别是《上兵伐谋》，将三国杀人物的技能再升华，融合了三国杀各种各样的技能类型，该作是一个优秀的大型扩展",					
				    "wwyj_shenzuo":"神座，曾也化名军师祭酒、◎sagiri，圈内习惯称他为神座，远古代扩展作者，拥有超强的编程技术，尤其是在抗性代码方面造诣颇深，但对有段时间流行研究抗性代码感到深恶痛绝并为此担忧，为此决定制作一个最强的扩展，让研究扩展代码者望峰而知难而退。这个扩展就是强得令人窒息的《作者包》（第二代），虽然体验感不高，但的确树立了一个标杆，《弹丸杀》的神座出流、《风华绝代》的BOSS等一系列变态将纷纷被挑下马、俯首称臣。《作者包》同时还开发了很多技术，如扩展皮肤、动画特效、商店、植入《植物大战僵尸》等。另外神座还有一个与孤城等人合作写的扩展作品——《游戏王》，因该作太庞大，后来应该已断更弃坑了",
				    "wwyj_lengyus":"冷雨，也叫冷雨磅礴、夜雨斟酒，一名中生代扩展作者，喜欢以萌新自居，但深谙技能代码，代表扩展作品有《冷雨》、《军神包》（后改名《兵者诡道》），军神包涵盖了三国杀民间DIY武将和极略三国的一些神兽将，强度相对比较高",
				    "wwyj_zhugejun":"诸葛均，也叫“吾名影觞伤”、“文彧”，一位三国杀DIY爱好者，无名杀扩展交流群③的群主，无名杀资深玩家，也玩极略三国，曾与冷雨合作制作军神包的部分系列武将。本作中诸葛均的技能均来自其本人设计投稿，原设计由于过强，凉茶稍作平衡后制作而成",
 				    "wwyj_zhaonies":"造孽，全名叫：前世造多了孽，现名：冰雪雨柔，一位远古代的扩展作者，喜欢玩《崩坏3》，性情直爽，敢怒敢言，对不喜欢的东西会直接开启吐槽模式。代表作品有《配音扩展》、《民间卡牌》。2016-2018年间的无名杀，很多武将是缺配音的，配音扩展弥补了配音上的不足，在那个时代几乎人人都安装此扩展，风靡一时。另外，民间卡牌扩展是那时候专属禁传的扩展，很少人真正玩过，该扩展收集了不少DIY卡牌，有兴趣的可以搜索体验一下",					
	 		    	"wwyj_qianshangs":"浅觞，习惯称其为“浅”，贴吧ID后来先后名为：tanyuanjkl、夜风，一位传说中的元老级别的扩展作者，与可乐加冰并列，曾发表过AI教程、game.js里的黑科技等多篇教程，扩展作品有《聊天拓展》、《武将AI》，尤其是《武将AI》，其大幅度提升了AI的智能，曾在圈内轰动一时，追者甚众，但其也开了付费扩展的先河，引发了大争议，甚至为此，浅受到了“我只是赵云”的疯狂诋毁与攻击，“我只是赵云”恬不知耻地扬言叫嚣“你（浅）出一个扩展，我就抄一个”……另外，水乎老大为了避免无名杀扩展付费获利的法律风险，对无名杀进行大刀阔斧的修改，该扩展被迫下架……浅因此事再加上毕业工作而离坑隐退了",			
					"wwyj_yitiaoxianyu":"咸鱼，也曾名为“永远的萌新”、“→_→”，一位新生代扩展作者，拥有比较扎实、全面的代码技术。其真实身份比较可疑，应为某位大神的小号，因为其突然空降来到无名杀这个圈子，自称是名“萌新”，但出道即巅峰，写了一堆教程，众所周知，能出教程的都是大佬，尔后其又接写《耀世三国》等扩展，种种事实证明其是一名伪萌新。代表作品还有《西沉的胡思乱想》、《灵枢包》、《特效测试》、《高速决斗》等",
					"wwyj_shennais":"神奈，又名“东平车幻玲”，圈内习惯称呼她为“学妹”，是一位远古代的扩展作者，对扩展有独特的写法，其代表作为《朔包》，以高体力上限与高伤害著称。另外，神奈给人印象较深刻的是其随和、可爱的一面，这也是技能“可爱”的创作思路来源，而技能“神奈”略显得无厘头（本来是想设计一个骚操作类的技能的），实则是在凉茶在创作完“可爱”后灵感枯竭时无意中测试了一局发现，当触发“可爱”时，友方给了几张杀，正好挂连弩，然后又杀一波，紧接着杀完来触发来了几张杀……始料未及的契合令凉茶感到非常意外与兴奋，故设计了一个可提升杀的使用次数的技能，这正是技能“神奈”的来由",
					"wwyj_yiwangs":"一瞬间遗忘，一位远古代的扩展大神，拥有非常精湛的扩展代码技术，开发了第一个大型扩展——《风华绝代》，尽管它曾饱受过争议，但仍无法掩盖它身上那耀眼的光芒！该扩展武将众多，在改版武将方面，它将官方三国杀大部分的武将重新设计成全新的星武将，涅槃重生后的武将令人眼前一亮，啧啧称奇。另外风华绝代还有英雄联盟系列和挑战BOSS，尤其是BOSS远近闻名，简直成了BOSS的标杆，它的强大引来众多玩家挑战。”一瞬间遗忘“曾与”我只是赵云“之间有私人恩怨，在“我只是赵云”的再三挑衅下，在2018年夏时集中爆发，引爆了整个无名杀圈子的舆论，双方阵营闹得不可交加，甚至连水乎老大都被牵扯进来，最终导致无名杀的停更，该事件可谓是无名杀史上产生影响最大的事件之一。本作者中对该作者的技能设计也是跟“我只是赵云”相互克制、纠缠的。另外一瞬间遗忘的扩展作品还有【剧情三英】、【剧情战役】、【浑身是胆】、【超强台风】、【孙策81难】、【镜花水月】等",
					"wwyj_liushas":"流沙，一位元老级的资深老玩家，为早期无名杀的素材收集作出了不少贡献，热爱无名杀这个游戏，并且经常出面维护无名杀的声誉",					
					"wwyj_liangchax":"这个是boss，可进挑战模式中挑战她！也可在扩展界面开启“天神降临”再重启游戏，然后就可在非挑战模式中选用或被ai选用（注：本武将及本扩展不含任何赋空等抗性代码）",	
					"wwyj_guihua":"松岛枫桂花，一位元老级的扩展大神，贴吧ID也叫”大小姐-夜子“，另外，“琉璃殿下de骑士“据情报透露是其贴吧小号，圈内习惯称她为“黑猫”、“猫猫”、“桂花大神”，桂花曾与可乐、浅觞、极光、遗忘并称“五大天王”（个人总结），其代码技术在早期便独领风骚，制作过多个匪夷所思的扩展。主要的扩展代表作分别有：小扩展《玲》；《红尘乱尘》，其前身是三国KILL武将，貌似后来成了《极略三国》的前身；多年站在精品扩展巅峰的《概念武将》也是主要出自其手，该扩展从设计到代码，都达到了令人望尘莫及的地步。还有早已失传的传说中的《动漫包》的也是她写的，该扩展当时引起过巨大的轰动，求之者众，但能真正接触过的人却寥寥无几，以至该扩展失传后，仍有多个扩展作者尝试复盘这个扩展，比如最忠诚的叛徒的《动漫包（伪）》，此外还有其他人写的《动漫杂包》、《动漫包（真）》、《动漫》等，但都没有原作的神韵(最新消息：非最终版的原版动漫包已通过“最忠实的叛徒”的分享已找到，另据Niya说，极光的扩展ol也已整合该动漫包扩展)。目前该大神已退坑许久",
					"wwyj_tilongjianiao":"提笼架鸟，新生代玩家，多个群的管理员，热爱无名杀，为帮助新人解决游戏的各种问题，专程总结了一个PDF的FAQ问题集，有关无名杀的大小问题几乎都可找到相应的解决方法，非常有行动力，为无名杀的BUG收集、解决方法付出了不少努力。只是为人雷厉风行，说话粗暴直接，会以踢人禁言为手段，再加上其使用一张似乎在注视群员一举一动一言一行的动漫头像，给萌新留下了恐惧的心理阴影。后来因某个管理冒名“最忠实的叛徒”随便踢人，提笼架鸟一气之下退出了无名杀圈子",
					"wwyj_huanyuxingcheng":"寰宇星城，新生代扩展作者，其自称为职业的程序员，喜欢玄幻武侠，同时喜欢玩《金庸群侠传》扩展，曾从一名粉丝玩家迅速成长为一名扩展作者，并为《金庸群侠传》写过部分角色和优化部分代码、功能，后另起炉灶，与群员血刀少主合作开创全新的架空的背景故事的扩展——《玄武江湖》，部分角色为圈内玩家的客串，目前仍在制作更新中",
					"wwyj_limuzi":"李木子，自称为多个群的资深龙王（最高记录曾连任80天），经常积极在内测群向苏婆玛丽奥反馈其发现的无名杀的bug。本作中李木子的技能均来自其本人设计投稿",
					"wwyj_fux2":"fux2，也叫fux2-king，一位元老级扩展大神，《弹丸杀》扩展的作者，拥有超强的扩展代码编写技术，婚后退坑多年，目前似乎在专注于玩《终极刺客》。据考究，其最早开创了抗性代码的先河，听说甚至连孤城、神座两位大神都是他的粉丝。《弹丸杀》这个扩展包虽然精致小巧，但内有大乾坤！每个武将的技能都剑走偏峰的奇特，不按常规设计。其中有个旷世boss——神座出流，开创了抗性先河，以其无敌的防御与无解的即死攻击，长年蝉联顶尖boss之列，令人闻风丧胆。不少人为了打败他而费尽心思，虽然后来也出了很多BT强将战胜过他，但绝不敢因此而否定他的实力。谈及为何fux2会创造出这种超强boss，Niya回忆道：当时写的神座出流已比较强，有个玩家击败他后拿战绩嘲讽作者，fux2一怒之下将神座出流直接封神。据悉◎sagiri曾破解过神座出流的抗性代码发现其重设的函数多达超过80个，其因仰慕此武将甚至自称为“神座”……",	
					"wwyj_xuedaoshaozhu":"血刀少主，无名杀新晋玩家，喜欢武侠小说与diy，后与寰宇星城一起合作，创作大型武侠、玄侠风格的扩展——《玄武江湖》，血刀少主担任背景故事的主编之一，重点参与撰写故事和部分人物的技能设计",					
					"wwyj_shenwangquanjian":"神王权笺，无名杀新晋扩展作者，早期便入坑无名杀，精通解决无名杀的各种疑难杂症，爱好兴趣为DIY武将，最近学会制作简单的扩展，主要扩展作品为《神王包》。后加入无名杀官方群，人送外号【色批魏延】，后成为提笼架鸟的忠实粉丝并辅助其管理各大群，提笼架鸟离开之后由他接管多个群",
					"wwyj_wuqinggezi":"无情鸽子，中生代扩展作者，为人比较低调，以致于我现在没什么关于他的资料，只能简单地介绍一下。其代表作为移植自“雾雨家的魔理沙”的《东方流星夜》而改造成无名杀扩展的扩展——《东方project》，该扩展新颖有趣，尤其是其图鉴教程模式（乱斗）功能在众多扩展中独树一帜，界面华丽整洁，让人啧啧称奇！值得一提的是，我（凉茶）与瓦力（血色衣冠的作者）几乎同时发现该扩展的图鉴并产生了移植其图鉴模式的想法，后来瓦力钻研改造成功并无偿分享之，后来演变成本扩展的凉茶模式，也就是本扩展的图鉴模式",
					"wwyj_duanges":"短歌，新生代扩展大神，拥有非常专业的编程技术，因其用“兔子”头像得外号“大兔子”，另又因扩展更新濒临断更且“歌”谐音“鸽”又得外号“短鸽”，其是大型美化类扩展【十周年UI】的作者，该扩展最大限度地将无名杀的界面、特效进行了全新的设计，让游戏界面跟官方十周年三国杀的界面非常接近，尤其是其击杀特效做得让人震撼不已，该扩展同时比橙续缘的【势力边框】更稳定更美观。与此同时，该扩展从社交网络上问世即迅速传播，获誉无数，粗略统计，该扩展是实装量最高的扩展",
					"wwyj_guchengs":"孤城，元老级扩展作者，又名“孤城葬月落飞雪”，代表作品有《千秋万载》、《一统江山》，这两个扩展将大部分三国杀武将翻新加强，几乎达到BOSS级别，这两扩展曾流行一时。此外作品还有Fate系列，具体是哪些扩展，有待调查。目前，孤城已退坑",	
					"wwyj_hezifengyun":"何子风云，一位远古代扩展作者，主要的扩展作品有《战国七雄》，一个在早期曾让人眼前一亮的优秀扩展作品。何子风云已退坑多时，不过会时不时地在群里冒泡，以至于被人调侃为“诈尸”，故有作者包的“何子诈尸”的经典模式，另外本扩展也收录了这个模式",
					"wwyj_qingzhongs":"青冢，中生代扩展作者，主要扩展作品有《千载风云》和《极略全扩》，前者主要角色为晋势力角色，对三国后期及晋朝早期的人物进行补充，技能精炼，是个不可多得的优秀扩展；后者是青冢补写了可乐加冰的《极略三国》中仍欠缺的角色，将之归为“极略补全”系列，并对旧《极略三国》的bug进行了大幅度的修复，一起接入全新的联机框架内，由此诞生了《极略全扩》这一精品，深受玩家的喜爱",
					//"wwyj_moban":"简介模板",										
						     		
					},
characterTitle:{
					"wwyj_Sukincen":"Sukincen",
					"wwyj_shijian":"雪碧",
					"wwyj_taishangdaniu":"落影逝尘",
					"wwyj_jiguangs":"Aurora",
					"wwyj_danwuyunxi":"老神将",
					"wwyj_wali":"Wall•E",
					"wwyj_shenzuo":"◎sagiri",
					"wwyj_shennais":"学妹",
					"wwyj_guihua":"黑猫",
					"wwyj_tilongjianiao":"萌新杀手",
			 		},
skill:{
      "wwyj_jiegeng":{
          trigger:{
            global:"useCardToPlayered",
          }, 
          usable:1,
		  audio:"ext:文武英杰:1", 
          priority:-20,
          check:function (event,player){            
              return get.attitude(player,event.player)>0;
          },
          prompt:function (event,player){					
				return '是否视为对'+get.translation(event.target)+'使用'+get.translation(event.card);
		  },
          filter:function (event,player){
              if(event.card.name=='jiedao'||event.card.name=='wuxie') return false;
              if(get.type(event.card)=='equip'||get.type(event.card)=='delay') return false;                         
              if(event.targets.length>1) return false;                                      
                 return player!=event.player;
         },
         content:function (){     
              player.useCard(trigger.card,trigger.target,false);
         },
         },
       "wwyj_qingzhong":{
				enable:'phaseUse',
				usable:1,	
				audio:"ext:文武英杰:1", 			
				filter:function (event,player){
				    return player.countCards('h',{type:'basic'})&&game.hasPlayer(function(current){
				return player!=current&&get.distance(player,current,'attack')<=1;
			});					
				},
				filterCard:function (card){                    
                    return get.type(card)=='basic';
                },
                selectCard:function (){
                var num=game.countPlayer(function(current){
            return _status.currentPhase!=current&&get.distance(_status.event.player,current,'attack')<=1;
         });          
                    return [1,num];
                },              
                position:'h',      

				filterTarget:function (card,player,target){
					return player!=target&&get.distance(player,target,'attack')<=1;
				},	
				multitarget:true,
                multiline:true,
                prepare:function (cards,player,targets){
                    player.line(targets);
                },
				selectTarget:function (card){
        if(ui.selected.targets.length>ui.selected.cards.length){
            game.uncheck('target');
        }
        return ui.selected.cards.length;
    },     							
				content:function(){
				"step 0"                  
        event.targets=targets.slice(0);
        event.num=event.targets.length;
        event.targets.sort(lib.sort.seat);    
        "step 1"
        if(event.targets.length){
            var target=event.targets.shift();
            player.useCard({name:'sha',isCard:true},target,false);
            event.redo();
        }
				},
		ai:{
         result:{
            target:function (player,target){
              if(target.hp>3) return -1;   
                  return -target.countCards('h')-2;
              },
            },
            order:8,
            threaten:0.5,
        },  

			}, 
       "wwyj_fengyun":{
        trigger:{          
           player:"damageEnd",
        },    
        forced:true, 
		audio:"ext:文武英杰:2", 
        charlotte:true,		
        priority:2020,               
    content:function (){   
        'step 0'			    		
        event.skills=[]; 
		event.list=[];		
		'step 1'				       
        for(var i in lib.characterPack['wenwuyingjie']){
        for(var j=0;j<lib.character[i][3].length;j++){
           var info=lib.skill[lib.character[i][3][j]];
               if(info&&(info.gainable||!info.unique)){
                   event.skills.add(lib.character[i][3][j]); 
               }
           } 
        }
        event.skills.remove('wwyj_fengyun');				
        var list=event.skills.randomGets(3);		
		if(event.isMine()){
		var dialog=ui.create.dialog('forcebutton');
			dialog.add('选择获得一项技能');						
			for(i=0;i<list.length;i++){
				if(lib.translate[list[i]+'_info']){
				var translation=get.translation(list[i]);
				if(translation[0]=='新'&&translation.length==3){
			    	translation=translation.slice(1,3);
				}
				else{
					translation=translation.slice(0,2);
				}
				var item=dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【'+translation+'】</div><div>'+lib.translate[list[i]+'_info']+'</div></div>');								
					item.firstChild.link=list[i];
				}
			}						
		}						
		player.chooseControl(list).set('prompt','请选择一个你的要获得的技能').set('ai',function(){
            return list.randomGet();
        }).dialog=dialog;
		'step 2'				
		player.popup(result.control,'thunder'); 
		//player.addTempSkill(result.control,{player:'phaseBegin'});
		player.addSkill(result.control);
		player.flashAvatar('wwyj_fengyun',result.control);   
		game.log(player,'获得了技能','#g【'+get.translation(result.control)+'】');                                                         
     },
     },
     "wwyj_feixue":{
          trigger:{
            player:"useCard",
          }, 
		  audio:"ext:文武英杰:1", 
          priority:2020,
          filter:function (event,player){
              if(event.card.name!='sha') return false;                         
              if(event.targets.length>1) return false;                                      
                 return game.hasPlayer(function(current){
                       return current.isTurnedOver()&&!event.targets.contains(current);
                 });
              },
         content:function (){     
           'step 0'         
        event.targets=game.filterPlayer(function(current){
            return current.isTurnedOver()&&current!=player;
        });
        event.targets.sort(lib.sort.seat);
            'step 1'        
           trigger.targets.addArray(event.targets);   
           player.line(trigger.targets,'green'); 
           'step 2'  
           if(event.targets.length){
          event.current=event.targets.shift();
          trigger.targets.addArray(event.current);           
          player.line(event.current,'green');                                              
          event.current.turnOver();
		  event.redo();
        }
        else{
           event.finish();
        }    				                    
         },
         ai:{
            order:8,
         },
      },
      "wwyj_zangyue2":{		
			trigger:{
			    player:"useCardAfter",
			},
			forced:true,
			popup:"wwyj_zangyue",
			//audio:"ext:文武英杰:1",
			init:function (player){
			    player.storage.wwyj_zangyue2=[];
			},
			filter:function (event,player){
				return player==_status.currentPhase&&event.card&&event.card.isCard&&get.suit(event.card)==player.storage.wwyj_zangyue2;
			},						
			content:function(){
			"step 0"
		 event.players=game.filterPlayer(function(current){
      return current.hasSkill('wwyj_zangyue');
      }).sortBySeat();
           "step 1"
      if(event.players.length){
        event.current=event.players.shift(); 
        event.current.say("你，中了老夫的计了");          
        event.current.line(player,'green');                                                                                               			
        event.redo();
        }
        else{
           event.goto(2);
         }    			
		"step 2"
		game.playwwyj("wwyj_zangyue21");
        player.turnOver();  	    
			},
			},
        "wwyj_zangyue":{		
			trigger:{player:'phaseEnd'},
			forced:true,
			audio:"ext:文武英杰:1", 
			//mark:true,
			init:function (player){
			    player.storage.wwyj_zangyue=[];
			    player.unmarkSkill('wwyj_zangyue');	
			},
			/*intro:{
                content:function (suit){
                    return get.translation(suit);
                },
            }, */
			intro:{	
                content:function (storage,player,skill){
         			return '选择了'+get.translation(player.storage.wwyj_zangyue);
          	 	}, 
			},									
			content:function(){		
				"step 0"
				player.storage.wwyj_zangyue=[];
				"step 1"
			player.chooseControl('spade','heart','club','diamond').set('ai',function(event){
                switch(Math.floor(Math.random()*4)){
                  case 0:return 'spade';
                  case 1:return 'heart';
                  case 2:return 'club';
                  case 3:return 'diamond';
                }
            });
			"step 2"		
			  game.log(player,'选择了'+get.translation(result.control));
			  player.popup(result.control);
			  event.choice=result.control;	
			  player.storage.wwyj_zangyue=event.choice;				  	
			  //player.syncStorage('wwyj_zangyue');
			  //game.addVideo('storage',player,['wwyj_zangyue',player.storage.wwyj_zangyue]);
			  player.markSkill('wwyj_zangyue');	  					
			"step 3"							
			for(var i=0;i<game.players.length;i++){
			  if(player!=game.players[i]){
			    player.line(game.players[i],'green');				
			    game.players[i].addTempSkill('wwyj_zangyue2',{player:'phaseEnd'});
		        game.players[i].storage.wwyj_zangyue2=[];
		        game.players[i].storage.wwyj_zangyue2.add(event.choice);				
		      }
		    }
		},
		ai:{
          order:8,
        },
	},           
         "wwyj_gucheng":{
				mod:{
					targetEnabled:function (card,player,target,now){
					  //if(_status.currentPhase!=target){
						if(game.roundNumber%2==0){
							if(card.number%2==0&&card.name=="sha") return false;
						}else{
						    if(card.number%2==1&&card.name=="sha") return false;
						}
					 // }
					},
				},
				},
         "wwyj_meihua1":{},
         "wwyj_meihua":{  
				trigger:{
                    global:"useCardToPlayer",                            
                },                  
                audio:"ext:文武英杰:1",                                               
                filter:function (event,player){               
                    if(event.player==player) return false;
                    if(get.type(event.card)=='equip') return false;                    
                    if(get.type(event.card)=='delay') return false;
                    if(event.card.name=='wuxie') return false;
                    if(!event.targets||event.targets.length!=1) return false;
                       return !player.hasSkill("wwyj_meihua1");
                },
                check:function (event,player){
                    return (get.attitude(player,event.player)<=0);
                },
                prompt:function (event,player){					
					return '是否美化'+get.translation(event.player)+'对'+get.translation(event.target)+'使用的'+get.translation(event.card);
				},
                content:function (){
                  'step 0'	                		
			event.cards=get.cards(2);
			game.cardsGotoOrdering(event.cards);                          
             'step 1'              
              player.chooseCardButton(event.cards,1,'选择使用一张牌代替'+get.translation(trigger.player)+'所使用的牌').set('filterButton',function(button){           
                 return trigger.player.canUse(button.link,trigger.target);             
         }).set('ai',function(button){
             return 6-get.value(button.link);
         });
           'step 2'
          if(result.bool){ 
             player.addTempSkill("wwyj_meihua1");
             trigger.getParent().excluded.add(trigger.target);                                       
             trigger.player.useCard(result.links[0],trigger.target);                                                               
          }
          else{
             ui.cardPile.insertBefore(event.cards[1],ui.cardPile.firstChild);
             ui.cardPile.insertBefore(event.cards[0],ui.cardPile.firstChild);   
             game.log(player,'#y观看牌堆顶两张牌');
             event.finish();
          }              
		},
		ai:{
          order:8,
          },
		},
        "wwyj_duange":{               
                trigger:{player:'phaseDrawBegin1'},
				filter:function (event,player){
					return !event.numFixed;
				},
				frequent:true,
				audio:"ext:文武英杰:1",
				content:function(){
			 'step 0'
			trigger.changeToZero();
			event.cards=get.cards(5);
			game.cardsGotoOrdering(event.cards);                          
             'step 1'              
              player.chooseCardButton('短歌:选择获得任意张点数同为奇数或同为偶数的牌',event.cards,[1,5]).set("filterButton",function(button){
              //player.chooseButton('短歌',[event.cards],[1,7]).set("filterButton",function(button){	           
            	if(!ui.selected.buttons.length) return true;
	            for(var i=0;i<ui.selected.buttons.length;i++){
	              if(get.number(ui.selected.buttons[i].link)%2==0){
	                return get.number(button.link)%2==0;
	              }else{
					return get.number(button.link)%2==1;
				  }
				}
	            //点数连续的一组数：
	            /*var bs=ui.selected.buttons;
            	if(!bs.length)return true;
	            var ns=bs.map(function(i){return i.link.number});
	            return [Math.min.apply(Math,ns)-1,Math.max.apply(Math,ns)+1].contains(button.link.number);
	            */
          }); 
           'step 2'
          if(result.bool){                             
             event.cards.remove(result.links);
             player.gain(result.links,'gain2');            
             game.log(player,'获得了',result.links);            
          }
          else{
             event.goto(3);
          }
           'step 3'
           if(event.cards.length>0){                       
        player.chooseCardButton('短歌:请选择放在牌堆顶的牌，先选择的在上',event.cards.length,event.cards,true); 
        }else{
           event.finish();
        }
        'step 4' 
        for(var i=event.cards.length-1;i>=0;i--){ 
            event.cards.remove(result.buttons[i].link); 
            ui.cardPile.insertBefore(result.buttons[i].link,ui.cardPile.firstChild); 
        }           
        },
        ai:{
            order:8,
          },
        },    
            "wwyj_wuqing":{
				trigger:{
                    global:"damageEnd",
                }, 
				audio:"ext:文武英杰:1",
                forced:true,      
                filter:function (event,player){
        return event.nature;
    },
                content:function(){                      
              player.draw();
    }, 
			},
			"wwyj_geziyin1":{
				intro:{
                    name:"鸽子",
                    content:"该角色被选择了",
                },
                marktext:"选",
				mark:true,
			},						
			"wwyj_geziyin":{		       
                enable:"phaseUse",
                usable:1,
                filterCard:function (card){                    
                      return get.color(card)=='black';
                },
                selectCard:1,
                position:'h',      
                discard:false,
                prepare:'give',                
                filterTarget:function (card,player,target){
        return player!=target;
    },
                filter:function (event,player){    
        return !player.hasSkill('wwyj_gezi1')&&player.storage.wwyj_gezi!=true&&player.countCards('h',function(card){
				  return get.color(card)=='black';
				});      
    },                              
                content:function (){
        "step 0"
        game.playwwyj('wwyj_gezi1');
        target.gain(cards,player);   
        player.addTempSkill('wwyj_gezi1'); 
        player.storage.wwyj_gezi=true;            
        "step 1"            
        target.chooseTarget('选择发动至少一名目标',[1,Infinity],lib.translate.wwyj_geziyin_info,true,function(card,player,target){
            return true;
        }).set('ai',function(target){
			if(get.attitude(_status.event.player,target)>0&&target.isLinked()) return get.attitude(_status.event.player,target); 
            return -get.attitude(_status.event.player,target);            
        });				 
      "step 2"
    	if(result.bool){       
            event.num=0; 			
            event.targets=result.targets;                        
            }   
            else{
               event.finish();
            }   
		"step 3"
		if(event.num<event.targets.length){ 
		    player.line(event.targets[event.num],'green');               
            event.targets[event.num].addSkill('wwyj_geziyin1');                                               
            event.num++;			
            event.redo();
        }
        else{
            event.goto(4);      
        } 
		"step 4"
		player.chooseControl().set('choiceList',['你横置/重置'+get.translation(target)+'所选择的角色','你横置/重置'+get.translation(target)+'未选择的角色']).set('ai',function(){
        if(player.countCards('h')>2) return 1;          
            return 0;
        });
        "step 5"
        if(result.index==0){
            event.goto(6);
        }
        else{
            event.goto(8);
		}
		"step 6"
		event.players=game.filterPlayer(function(current){
             return current.hasSkill('wwyj_geziyin1');
        }).sortBySeat();
        "step 7"
        if(event.players.length){
          event.current=event.players.shift();           
          player.line(event.current,'green');                                              
          event.current.link();                                     
          event.current.update();
		  event.redo();
        }
        else{
           event.goto(10);
        }    				
		"step 8"
		event.players=game.filterPlayer(function(current){
             return !current.hasSkill('wwyj_geziyin1');
        }).sortBySeat();
        "step 9"
         if(event.players.length){
            event.current=event.players.shift();           
            player.line(event.current,'green');                                              
            event.current.link(); 
	        event.redo();
          }
          else{
            event.goto(10);
          }   
              "step 10"
              var num1=game.countPlayer(function(current){
                    return current.isLinked(); 
         });     
          var num2=game.countPlayer(function(current){
                    return !current.isLinked(); 
         });     
         if(num1>num2){
             player.draw();
         }    
          "step 11"
         for(var i=0;i<game.players.length;i++){
		    if(game.players[i].hasSkill('wwyj_geziyin1')){			
              game.players[i].removeSkill('wwyj_geziyin1');   
			 }
		}	    	                    
    },
       ai:{
         result:{
            target:function (player,target){
              if(target.countCards('h')<3) return 0;   
                  return target.countCards('h');
              },
            },
            order:8,
            threaten:0.5,
        },  
            },
			"wwyj_gezired":{
				intro:{
                    name:"鸽子",
                    content:"该角色展示了红色手牌",
                },
                marktext:"红",
				mark:true,
			},
			"wwyj_geziblack":{
				intro:{
                    name:"鸽子",
                    content:"该角色展示了黑色手牌",
                },
                marktext:"黑",
				mark:true,
			},
			"wwyj_geziyang":{      
      enable:"phaseUse",
      usable:1,
      filterCard:function (card){                    
         return get.color(card)=='red';
      },
      selectCard:1,
      position:'h',      
      multiline:true,                           
      filter:function (event,player){
         return !player.hasSkill('wwyj_gezi1')&&player.storage.wwyj_gezi==true&&player.countCards('h',function(card){
				return get.color(card)=='red';
		});      
      },
      filterTarget:function (card,player,target){
         return target.countCards('h')>0;
       },                           
       selectTarget:[1,Infinity],
       multitarget:true,                            
      content:function (){
          "step 0"
	event.num=0;  
	game.playwwyj('wwyj_gezi1');
	player.addTempSkill('wwyj_gezi1'); 
    player.storage.wwyj_gezi=false;                          
      "step 1"
        if(event.num<targets.length){
     targets[event.num].chooseCard('h',1,'请展示一张手牌',true).set('ai',function(card){
      return -get.value(card);
          });
         }
            "step 2"
        if(result.bool){
       targets[event.num].showCards(result.cards);                                                                                                         
      if(get.color(result.cards[0])=='red'){                                        
	targets[event.num].addSkill('wwyj_gezired');									
     }
       else{                                        
		targets[event.num].addSkill('wwyj_geziblack');									
      }
          event.num++;
     if(event.num<targets.length){
	event.goto(1);
	}
	else{
	    event.goto(3);
	    }
       }								
    "step 3"
       player.chooseCard('h','请展示一张手牌').ai=function(card){                         
         return 7-get.value(card);              
       };  
       "step 4"
       if(result.bool){		
    var color=get.color(result.cards[0]);       
      //player.discard(result.cards[0]);
      player.showCards(result.cards[0]);
     if(color=='red'){
	event.goto(5);
	}
	else{
		event.goto(7);
		}
	}
		else{
			event.goto(10);
      }
         "step 5"                                                                                               
      event.players=game.filterPlayer(function(current){
      return current.hasSkill('wwyj_gezired');
      }).sortBySeat();
           "step 6"
      if(event.players.length){
        event.current=event.players.shift();           
        player.line(event.current,'green');                                              
        event.current.link();                                           			
           event.redo();
        }
        else{
           event.goto(9);
         }    																
            "step 7"
        event.players=game.filterPlayer(function(current){
           return current.hasSkill('wwyj_geziblack');
        }).sortBySeat();
            "step 8"
        if(event.players.length){
          event.current=event.players.shift();           
          player.line(event.current,'green');                                              
          event.current.link();                         
          event.redo();
          }
          else{
             event.goto(9);
          } 
            "step 9"
         var num1=game.countPlayer(function(current){
              return current.isLinked(); 
         });     
         var num2=game.countPlayer(function(current){
              return !current.isLinked(); 
         });     
         if(num1>num2){
             player.draw();
         }      
         "step 10"
         for(var i=0;i<game.players.length;i++){
	        if(game.players[i].hasSkill('wwyj_geziblack')){								  
            game.players[i].removeSkill('wwyj_geziblack');   
			 }
		 else if(game.players[i].hasSkill('wwyj_gezired')){								
              game.players[i].removeSkill('wwyj_gezired');   
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
	 "wwyj_gezi1":{},		
		"wwyj_gezi":{				
	    mark:true,
		locked:false,
		zhuanhuanji:true,
		marktext:'鸽',
		intro:{
		    content:function(storage,player,skill){
			if(player.storage.wwyj_gezi==true) return '出牌阶段限一次：你可弃置一张红色手牌并令任意名有手牌的角色各展示一张手牌，然后你可展示一张手牌横置／重置展示牌与该牌颜色相同的角色，然后若已横置的角色比未模置的多，你摸一张牌';
				return '出牌阶段限一次，你可交给一名其他角色一张黑色手牌，令其选择至少一名角色，然后你选择横置／重置其所选择的或未选择的角色，然后若已横置的角色比未模置的多，你摸一张牌';
			},
		},
		audio:"ext:文武英杰:1",  
		group:["wwyj_geziyang","wwyj_geziyin"],
		},
						
     "wwyj_jieguan2":{               
                trigger:{
                    player:"phaseUseEnd",
                },  
                //audio:"ext:文武英杰:1", 				
                forced:true,
                popup:false,
                filter:function (event,player){
                    return game.hasPlayer(function(current){
					    return current.hasSkill('wwyj_jieguan');
					});
                },
                content:function(){
                'step 0' 
				game.playwwyj('wwyj_jieguan1');
               event.targets=game.filterPlayer(function(current){
						return current.hasSkill('wwyj_jieguan');
					}).sortBySeat();

       'step 1' 
        if(event.targets.length){

            event.current=event.targets.shift();           
            
            if(player.getStat().damage>0){
              player.useCard({name:'sha',isCard:true},event.current,false);
            }
            else{
              event.current.useCard({name:'sha',isCard:true},player,false);
            }  
        } 
        else event.finish();   
    },                
            },
          "wwyj_jieguan":{               
                trigger:{
                    global:"phaseUseBegin",
                }, 
				audio:"ext:文武英杰:1",
                prompt:function (event,player){					
					return '是否对'+get.translation(event.player)+'进行管理？';
				}, 
				check:function (event,player){                
                    return get.attitude(player,event.player)<=0;
                },            
                filter:function (event,player){
        return player!=event.player&&event.player.countCards('h')>0&&player.countCards('h')<=event.player.countCards('h');
    },
                content:function(){                      
              player.gainPlayerCard(trigger.player,'h');
              trigger.player.addTempSkill('wwyj_jieguan2');
    }, 
       ai:{
          order:5,
          threaten:2,
       },               
            },
      "wwyj_sepi":{
		global:'wwyj_sepi2',	
		audio:"ext:文武英杰:2",          		
		},
			"wwyj_sepi2":{				
				enable:'phaseUse',
				audio:"ext:文武英杰:1",
				filter:function (event,player){		
					if(player.hasSkill('wwyj_sepi3')) return false;
					return player.sex=="female"&&player.countCards('h')&&game.hasPlayer(function(current){
						return current.countCards('h')&&current.hasSkill('wwyj_sepi');
					});
				},
				direct:true,
				delay:false,
				filterCard:true,				
				position:'h',
				selectCard:1,
				prompt:function(){
					var player=_status.event.player;
					var list=game.filterPlayer(function(current){
						return current.countCards('h')&&current.hasSkill('wwyj_sepi');
					});
					var str='选择'+get.translation(list);
					if(list.length>1) str+='中的一人';
					return str;
				},
				check:function (card){					
					return 9-get.value(card);
				},
				content:function (){
					"step 0"
					var targets=game.filterPlayer(function(current){
						return current.countCards('h')&&current.hasSkill('wwyj_sepi');
					});
					if(targets.length==1){
						event.target=targets[0];
						event.goto(2);
					}
					else if(targets.length>0){
						player.chooseTarget(true,'选择一个色批',function(card,player,target){
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
			  player.line(event.target,"green");
			  game.playwwyj(['wwyj_sepi1','wwyj_sepi2'].randomGet()); 
			  player.addTempSkill('wwyj_sepi3','phaseUseEnd');					  
              player.discardPlayerCard(event.target,'h',get.prompt('wwyj_sepi')).set('ai',function(button){                           
                return Math.random();            			            
              }).set('logSkill',['wwyj_sepi',event.target]).set('att',get.attitude(player,event.target)>0);        			           													
			}
			"step 3"
			if(result.bool&&result.links&&result.links.length){		
              if(get.color(result.links[0])==get.color(cards[0])){	
			    if(player.isDamaged()){
			      //player.recover();
			      player.chooseDrawRecover(1,true);
			    }else{
			      player.draw();
			    }
			    if(event.target.isDamaged()){
			      //event.target.recover();
			      event.target.chooseDrawRecover(1,true);
			    }else{
			      event.target.draw();
			    }			    
			  }
			  else{
			      game.asyncDraw([player,event.target]); 
			  }
			}
			else event.finish();														
				},
				ai:{
					order:6,
					threaten:1.5,
					result:{
						player:function(player,target){
							var target=game.findPlayer(function(current){
								return current.hasSkill('wwyj_sepi');
							});
							if(target){
								return get.attitude(player,target);
							}
						},
					},
				},
			},
	"wwyj_sepi3":{},
     "wwyj_xuedao":{
                audio:"ext:文武英杰:1",
				trigger:{
				    global:['useCardAfter'],
				},
				//equipSkill:true,
				filter:function (event,player){
					return event.card&&event.card.isCard&&get.type(event.card)=='equip'&&get.subtype(event.card)=='equip1'&&game.hasPlayer(function(current){
              return get.distance(event.player,current,'attack')<=1;
         });
				},				
				direct:true,							    								    
				content:function (){
				 "step 0"
				player.chooseTarget(get.prompt2('wwyj_xuedao'),function(card,player,target){
            return target!=trigger.player&&target.countCards('h')&&get.distance(trigger.player,target,'attack')<=1;
        },function(target){
            return -get.attitude(player,target);
        });        
        "step 1"
        if(result.bool){
            //player.logSkill('wwyj_xuedao',result.targets[0]);																																						
            event.target=result.targets[0];
            player.discardPlayerCard(result.targets[0],'h',get.prompt('wwyj_xuedao')).set('ai',function(button){                           
                return Math.random();            			            
        }).set('logSkill',['wwyj_xuedao',result.targets[0]]).set('att',get.attitude(player,result.targets[0])<=0);
	    }
			else{
                event.finish(); 
            } 
        "step 2"
        if(result.bool&&result.links&&result.links.length){		
            if(get.color(result.links[0])=='red'){								  
			    trigger.player.useCard({name:'sha',isCard:true},event.target,false);				
			}
			else{
                event.finish(); 
            } 
		}   
            else{
               event.finish();
            }							
				},
				ai:{				
					order:5,
				}
			},        
     "wwyj_shaozhu":{ 
        audio:"ext:文武英杰:1",
        trigger:{
            target:"useCardToTargeted",
        }, 
        check:function (event,player){				
        return get.attitude(player,event.player)<=0;
    },                      
        filter:function (event,player){    
          if(event.player.isDead()) return false;
            return event.card&&event.card.isCard&&event.card.name=='sha'&&game.hasPlayer(function(current){
              return player!=current&&event.player!=current&&get.distance(current,event.player,'attack')<=1;
         });                                 
    },
         content:function (){

                  'step 0'                     

             event.num=0;

             event.targets=game.filterPlayer(function(current){
              return player!=current&&trigger.player!=current&&get.distance(current,trigger.player,'attack')<=1;
         });                                     
         event.targets.sort(lib.sort.seat);             
           'step 1' 

        if(event.num<event.targets.length){
            
			event.targets[event.num].chooseToUse({name:'sha'},trigger.player,'对'+get.translation(trigger.player)+'使用一张【杀】（无距离限制），否则'+get.translation(player)+'将获得你的一张牌').logSkill='wwyj_shaozhu';		                      
         }

         else event.finish(); 
           'step 2'
           if(result.bool){              
             event.num++;
             event.goto(1);
        
           }
           else{
             if(event.targets[event.num].countCards('he')){
               player.gainPlayerCard(event.targets[event.num],'he',true);
             }
             event.num++;
             event.goto(1);

           }    
       
    },
                ai:{
                    order:2,                    
                },     
            }, 
       "wwyj_lunpo":{                                             
        trigger:{
          global:"phaseDiscardAfter",
        },   
        audio:"ext:文武英杰:1",  
        direct:true,                                              
        filter:function(event,player){
        if(!event.player.hasSkill('wwyj_wan')) return false;
        if(event.cards){
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
          content:function(){
        'step 0'        
           player.chooseControl().set('choiceList',['回复一点体力并摸一张牌','令'+get.translation(trigger.player)+'受到你造成的一点伤害并弃置“丸”标记']).set('ai',function(){
           if(get.attitude(player,trigger.player)<=0) return 1;             
             return 0;
           });        
        'step 1'
        if(result.index==0){           
           player.recover();
           player.draw();
           player.logSkill("wwyj_lunpo");
           //trigger.player.addSkill('wwyj_wan');	
        }
        else{           
		   trigger.player.damage(player);
		   trigger.player.removeSkill('wwyj_wan');
		   player.logSkill("wwyj_lunpo");			
		}
    }, 
    }, 
    "_wwyj_fux2":{       
        trigger:{
           player:"enterGame",
           global:"gameStart",
        },
        forced:true,
        priority:Infinity,
        filter:function (event,player){           
            return game.hasPlayer(function(current){
               return current.name=='wwyj_fux2';
         });                             
    },                
                content:function (){                
               if(player.name=='wwyj_fux2'){                 
                 //player.node.name.innerHTML='fux2';
                 game.playAudio('..','extension','文武英杰','wwyj_dansha');
                 player.node.name.innerHTML='';
                 game.broadcastAll(function(player){
 			     text = document.createElement('div');
 			     text.innerHTML='fux2';						 		
		 	     text.style.backgroundSize='cover';		 	    
			  	 text.style.width='100%';
				 text.style.height='100%';				 			
				 text.style.transform='translateY(-200px)';
				 text.style['font-size']='20px';
			     text.style['text-align']='center';
		     	 text.style['font-family']='shousha';
		     	 text.style['text-shadow']='rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,black 0 0 1px';						 				 
				 player.node.avatar.appendChild(text);
				 ui.refresh(text);
				 text.style.transform='';
			     },player);
               }  
               },
               },                           
     "wwyj_wan":{
		marktext:"丸",
		mark:true,
        intro:{
            name:"弹丸",
            content:"弹丸：这位仁兄现在的的处境相当危险",
        },		
     },
    "wwyj_dansha":{
        audio:"ext:文武英杰:1",
        trigger:{
           player:"damage",
        },
        forced:true,
        priority:2020,
        filter:function (event,player){           
            return game.hasPlayer(function(current){
               return current!=player&&!current.hasSkill('wwyj_wan');
         });                             
    },                
                content:function (){
          "step 0"
		 player.chooseTarget(get.prompt2('wwyj_dansha'),function(card,player,target){
            return target!=player&&!target.hasSkill('wwyj_wan');
        },function(target){
            return get.attitude(player,target)<0;
        });        
        "step 1"
        if(result.bool){
            //player.logSkill("wwyj_dansha");
            player.say('弹你的小鸡鸡');
            //result.targets[0].storage.wwyj_wan=player;
            result.targets[0].addSkill('wwyj_wan');            
        }
        else event.goto(2);             
        "step 2"                                                            
        var targets=game.filterPlayer(function(current){
              return current!=player&&current.hasSkill('wwyj_wan');
         });                                     
        targets.sort(lib.sort.seat);
        event.target=targets.randomGet();
        player.line(event.target,'green');
        game.playAudio('..','extension','文武英杰','wwyj_dansha');              
        event.target.damage(player,trigger.num); 
        event.target.discard(event.target.getCards('he').randomGet());                                                  
    },
            },
    "wwyj_qinyan2":{		
        onremove:true,
        //unique:true,                
        mark:true,
        marktext:"勤",
        intro:{
            name:"勤言",
            content:"你对本回合发动“释援”的角色使用的牌没距离和次数限制",
        },       			
		mod:{
			cardUsable:function(card,player,num){
				if(typeof num=='number') return num+100;
			},
			targetInRange:function(card,player,target){
				if(player.storage.wwyj_xiyuan.contains(target)) return true;
			},
			playerEnabled:function(card,player,target){
				var bool=false;
				if(player.storage.wwyj_xiyuan&&ui.selected.targets.length){
					for(var i=0;i<player.storage.wwyj_xiyuan.length;i++){
						if(ui.selected.targets.contains(player.storage.wwyj_xiyuan[i])){bool=true;break}
					}
				}
				if(!bool&&(!player.storage.wwyj_xiyuan||!player.storage.wwyj_xiyuan.contains(target))){
					var num=player.getCardUsable(card)-100;
						if(num<=0) return false;
					}
				},
			},
		/*mod:{
			cardUsable:function(card){								
				return Infinity;
			},
			targetInRange:function(){
				return true;
			},
		},*/
     },
     
    "wwyj_qinyan":{
    audio:"ext:文武英杰:2",
    trigger:{player:'loseAfter'},
	filter:function (event,player){
	    if(player.countCards('h')) return false;					
		return _status.currentPhase==player&&event.hs&&event.hs.length>0;
	},
	//group:"wwyj_qinyan1",
    forced:true,  
    popup:false,       
	content:function(){						
		player.$fullscreenpop('龙王戏水','thunder');
		player.addTempSkill("wwyj_qinyan2");	
	    player.draw(player.hp);		
	},
        },    
    "wwyj_xiyuan2":{                                         
          trigger:{player:'phaseAfter'},
			priority:-7,
			silent:true,
			forced:true,
			popup:"wwyj_xiyuan",			
			content:function(){	
			    'step 0'			
				player.storage.wwyj_xiyuan=[];
				'step 1'
				for(var i=0;i<game.players.length;i++){
				    if(game.players[i].hasSkill('wwyj_xiyuan1')){
				        game.players[i].removeSkill('wwyj_xiyuan1');
				    } 
				}    
			},
     },                          		 
    "wwyj_xiyuan1":{ 
        intro:{
            name:"释援",
            content:"你为“释援”的角色",
        },       
        marktext:"释",
		mark:true,                                      
        init:function (player){
            player.storage.wwyj_xiyuan1=[];
        }, 
        },           
        "wwyj_xiyuan":{                
        audio:"ext:文武英杰:2",
        enable:"phaseUse",
        usable:1,    
        group:"wwyj_xiyuan2",
        init:function (player){
		    player.storage.wwyj_xiyuan=[];
      	},                                   
        filter:function (event,player){    
            var num1=game.countPlayer(function(current){
				return current.countCards('h')<current.maxHp;
			 });
            return num1>0&&player.countCards('h')&&game.hasPlayer(function(current){
				return player!=current&&current.countCards('h');
				});
        },
        content:function (){
           'step 0'                     
        event.num=0;             
             var num1=game.countPlayer(function(current){
				return current.countCards('h')<current.maxHp;
			 });			
			 //var num2=game.countPlayer(function(current){
				//return current.countCards('h')&&current.countCards('h')<current.maxHp;
			 //});			 
        //player.chooseTarget('请选择至多'+get.cnNumber(Math.min(player.countCards('h'),Math.min(num1,num2)))+'名其他角色，各交给一张手牌，然后这些角色各交回给你一张其他手牌',[1,Math.min(player.countCards('h'),Math.min(num1,num2))],function(card,player,target){
        player.chooseTarget('请选择一至'+get.cnNumber(Math.min(player.countCards('h'),num1))+'名其他角色，各交给一张手牌，然后这些角色各交回给你一张其他手牌',[1,Math.min(player.countCards('h'),num1)],function(card,player,target){                
            return target!=player&&target.countCards('h');
        },function(target){
            if(player.countCards('h')<3) return get.attitude(player,target)<=0;	
            return Math.random();
        });        
           'step 1' 
        if(result.bool){   
            player.logSkill('wwyj_xiyuan');                          
            event.targets=result.targets;                                                
        }
        else{
            event.finish();
        }
           'step 2' 
        if(event.num<event.targets.length){                                             
            player.chooseCard('h','交给'+get.translation(event.targets[event.num])+'一张手牌',true).ai=function(card){           
                   return 8-get.value(card);                                      
            };                                
         }
         else{            
            event.goto(4); 
         }   
          'step 3'      
		if(result.bool){         
           player.line(event.targets[event.num],'green');
           player.storage.wwyj_xiyuan.add(event.targets[event.num]);	
           event.targets[event.num].addSkill('wwyj_xiyuan1'); 
           event.targets[event.num].storage.wwyj_xiyuan1.add(result.cards[0]);		              
           player.$give(result.cards[0],event.targets[event.num]);
           event.targets[event.num].gain(result.cards[0],player);		     
           game.log(event.targets[event.num],'获得了'+get.translation(player)+'的一张',result.cards[0]);          
           event.num++;
           event.goto(2);
         }             
        'step 4'         
        event.num=0;
        event.targets=game.filterPlayer(function(current){
             return current!=player&&current.hasSkill('wwyj_xiyuan1');
         });                                     
        event.targets.sort(lib.sort.seat);
         'step 5'          
         if(event.num<event.targets.length){		        	
            event.targets[event.num].chooseCard('交给'+get.translation(player)+'一张手牌','h',true,function(card){
               return !event.targets[event.num].storage.wwyj_xiyuan1.contains(card);
            }).ai=function(card){
            if(card.name=='sha'&&get.attitude(player,event.targets[event.num])>0) return 1;			   
               return 6-get.value(card);
            }; 
          } 
          else{
              event.finish();
          } 
         'step 6'      
		if(result.bool){           
           event.targets[event.num].line(player,'green'); 		        
           event.targets[event.num].$give(result.cards[0],player);
           player.gain(result.cards[0],event.targets[event.num]);		     
           game.log(player,'获得了'+get.translation(event.targets[event.num])+'的一张',result.cards[0]); 
           event.targets[event.num].storage.wwyj_xiyuan1=[];
           //event.targets[event.num].removeSkill('wwyj_xiyuan1'); 
           event.num++;
           event.goto(5);         
        }                          
    },
                ai:{
                    order:5,
                    result:{
                        player:function (player){
                    if(player.countCards('h')<3) return 2;
                return 1.8;
            },                   
                    },
                },        
            },
    "wwyj_xuanxia":{                
        trigger:{
            player:["dying"],
        },				
        audio:"ext:文武英杰:1",		       
        priority:10,
        limited:true,
        mark:true,
			   	init:function (player){
				          player.storage.wwyj_xuanxia=false;
		      },
        filter:function (event,player){
				    return game.hasPlayer(function(current){
                return current!=player&&current.hasSkill('wwyj_xingcheng1')&&current.storage.wwyj_xingcheng1&&current.storage.wwyj_xingcheng1.length;
	 		}); 
				},				
        content:function (){         
        	"step 0"
    	player.storage.wwyj_xuanxia=true;
    	player.$fullscreenpop('寰宇星城','fire');	
    	var num=game.countPlayer(function(current){
                return current!=player&&current.hasSkill('wwyj_xingcheng1')&&current.storage.wwyj_xingcheng1&&current.storage.wwyj_xingcheng1.length;
	 		}); 
	 		player.recover(num);
	 		"step 1"
				event.players=game.filterPlayer(function(current){
                return current.hasSkill('wwyj_xingcheng1')&&current.storage.wwyj_xingcheng1&&current.storage.wwyj_xingcheng1.length;
      }).sortBySeat();
       "step 2"
        if(event.players.length){
            event.current=event.players.shift();           
            player.line(event.current,'green'); 
            player.useCard({name:'sha'},event.current,false); 
            var cards=event.current.storage.wwyj_xingcheng1;    
            player.gain(cards,'fromStorage');                                               
            event.current.storage.wwyj_xingcheng1.remove(cards);
            event.current.removeSkill('wwyj_xingcheng1');
            event.current.update();
			event.redo();
          }
          else{
                player.awakenSkill('wwyj_xuanxia');
                event.finish();            
          }    									 			
        },
        ai:{
            order:9,
        },
    },
    "wwyj_huanyu":{
				enable:"phaseUse",
				usable:1,
				audio:"ext:文武英杰:1",
				filter:function (event,player){
				    return game.hasPlayer(function(current){
                return current!=player&&current.hasSkill('wwyj_xingcheng1')&&current.storage.wwyj_xingcheng1&&current.storage.wwyj_xingcheng1.length;
	 		}); 
				},				
			content:function (){
			"step 0"
			event.players=game.filterPlayer(function(current){
                return current.hasSkill('wwyj_xingcheng1')&&current.storage.wwyj_xingcheng1&&current.storage.wwyj_xingcheng1.length;
         }).sortBySeat();
             "step 1"
        if(event.players.length){
            event.current=event.players.shift();           
            event.current.line(player,'green'); 
            var cards=event.current.storage.wwyj_xingcheng1;                                            
            player.gain(cards,'fromStorage');
            event.current.storage.wwyj_xingcheng1.remove(cards);
            event.current.update();
			event.redo();
          }
          else{
                event.goto(2);            
          }    									
			 "step 2"
		    event.num=0;
		    event.targets=game.filterPlayer(function(current){
            return current!=player&&current.hasSkill('wwyj_xingcheng1');
        }); 
        event.targets.sort(lib.sort.seat);
			"step 3"					
			if(event.num<event.targets.length){		        	
            player.chooseCard('交给'+get.translation(event.targets[event.num])+'一张牌当作“星”','h',function(card){
               return true;
            }).ai=function(card){			   
               return 6-get.value(card);
            };                                 
        }
         else{		 
			 event.finish();
		 }
		"step 4"  
		if(result.cards&&result.cards.length){
		     player.line(event.targets[event.num],'green');
             player.lose(result.cards);         		     				
			 event.targets[event.num].storage.wwyj_xingcheng1=result.cards.slice(0);		     
		     //event.targets[event.num].storage.wwyj_xingcheng1=event.targets[event.num].storage.wwyj_xingcheng1.concat(result.cards);
		     //event.targets[event.num].storage.wwyj_xingcheng1.push(result.cards);
		     event.targets[event.num].syncStorage('wwyj_xingcheng1'); 
			 event.targets[event.num].update();
	  	     event.num++;
		     event.goto(3);		  
		}																					
				},
				ai:{
          order:5,
          result:{
                player:1,
                target:-2,
           },
    },
			},
		"wwyj_xingcheng2":{				
				trigger:{
				    source:'damageEnd',	
					global:'dieBegin',
				},								
				filter:function (event,player){					
                    return event.player.hasSkill('wwyj_xingcheng1');	 		
				},								
				content:function(){			                
			game.playwwyj('wwyj_xingcheng1');
            trigger.player.removeSkill('wwyj_xingcheng1');
            trigger.player.line(player,'green'); 
            var cards=trigger.player.storage.wwyj_xingcheng1;                                            
            player.gain(cards,'fromStorage');
            trigger.player.storage.wwyj_xingcheng1.remove(cards);
            trigger.player.update();             					
				},	
			ai:{
               order:5,          
            },	
			},	
    "wwyj_xingcheng1":{
        init:function (player){
					if(!player.storage.wwyj_xingcheng1) player.storage.wwyj_xingcheng1=[];
				},
				marktext:"星",
				intro:{
					  content:'cards',					
				},
    },
	   "wwyj_xingcheng":{
				audio:"ext:文武英杰:1",
				trigger:{
				    player:'damageEnd',				    
				},
				direct:true,
				group:"wwyj_xingcheng2",
				filter:function (event,player){
					return game.hasPlayer(function(current){
                return current!=player&&!current.hasSkill('wwyj_xingcheng1');
	 		});
				},								
				content:function(){
				"step 0"
			    player.chooseTarget(get.prompt2('wwyj_xingcheng'),function(card,player,target){
            return target!=player&&!target.hasSkill('wwyj_xingcheng1');
        },function(target){
            return true;
        });        
        "step 1"
        if(result.bool){
            player.logSkill("wwyj_xingcheng");
            result.targets[0].addSkill('wwyj_xingcheng1');
            var card=game.cardsGotoSpecial(get.cards()).cards[0];
			result.targets[0].$draw(card);
			game.delay();
      		result.targets[0].storage.wwyj_xingcheng1.push(card);
			result.targets[0].markSkill('wwyj_xingcheng1');
        }
        else event.finish();        					
				},				
			},
			
    "wwyj_jinyan1":{                
        trigger:{
            player:["useCardAfter"],
        },					
		     popup:false,
        forced:true,
        priority:10,
        filter:function (event,player){                                                            
            return player.hasSkill('wwyj_jinyan2')&&event.card&&event.card.isCard&&get.suit(event.card)==player.storage.wwyj_jinyan;
        },
        content:function (){ 
		    player.storage.wwyj_jinyan=[];
		    player.removeSkill('wwyj_jinyan1');		
            player.removeSkill('wwyj_jinyan2'); 			
        },
        ai:{
            order:9,
        },
    },
    "wwyj_jinyan2":{
		mark:true,
        mod:{
                    cardEnabled:function(card,player,event){
            if(get.suit(card)!=player.storage.wwyj_jinyan) return false;
        },
                    cardUsable:function(card,player,event){
            //if(!player.storage.wwyj_jinyan.contains(card.name)) return false;
			if(get.suit(card)!=player.storage.wwyj_jinyan) return false;
        },
                    cardRespondable:function(card,player,event){
            if(get.suit(card)!=player.storage.wwyj_jinyan) return false;
        },
                    cardSavable:function (card,player,event){
            if(get.suit(card)!=player.storage.wwyj_jinyan) return false;
        },
                },  
			intro:{	
                content:function (storage,player,skill){
         			return '你不能使用或打出不是'+get.translation(player.storage.wwyj_jinyan)+'的牌';
          	 	}, 
			},				
    },
    "wwyj_jinyan":{                              
        enable:"phaseUse",
		usable:1,
		audio:["wuyan",2],		
		filter:function (event,player){
            var num=game.countPlayer(function(current){
                return current!=player&&current.hasSkill('wwyj_jinyan2');
			});
			if(num>0) return false;
			return true;
        },
		filterTarget:function (card,player,target){
            return player!=target&&!target.hasSkill('wwyj_jinyan2');
        },
        content:function (){        
            'step 0'  
            target.addSkill('wwyj_jinyan1');
            target.addSkill('wwyj_jinyan2'); 			
            if(!target.storage.wwyj_jinyan){
                target.storage.wwyj_jinyan=[];
            }
            var list=['spade','heart','club','diamond'];
            for(var i=0;i<list.length;i++){
                list[i]=[get.translation(list[i]),'',list[i]];
            }
        player.chooseButton(true,[[list,'vcard']]).set('filterButton',function(button){
            if(target.storage.wwyj_jinyan&&target.storage.wwyj_jinyan.contains(button.link[2])) return false;
                return true;
        }).set('ai',function(button){
            var rand=_status.event.rand*2;
            switch(button.link[2]){
                case 'spade':return 4+rand[3];
                case 'heart':return 3+rand[6];
                case 'club':return 2+rand[7];
                case 'diamond':return 5+rand[8];
                default:return rand[9];
            }
        }).set('rand',[Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random()],Math.random());                                
            'step 1'
            if(result.bool){
				player.say('不看公告和教程就问问题的，祖安问候');
                player.logSkill('wwyj_jinyan');
                target.storage.wwyj_jinyan.add(result.links[0][2]);
            }
			else event.finish();
        },
             ai:{
                    order:2,
                    result:{
                        target:function (player,target){
                if(target.countCards('h')>=3) return -3.5;
                return -2;
            },
                    },
                },        
    },	
    "wwyj_gonggao2":{
		trigger:{
			player:'damageEnd',
		},
		audio:['quanji',2],
		popup:false,
		forced:true,
		filter:function (event,player){
			return event.source.isAlive()&&player!=_status.currentPhase;
		},
		content:function (){			
			trigger.source.addSkill('wwyj_gonggao1');
		},
	},
	"wwyj_gonggao1":{
		intro:{
            name:"警告",
            content:"你已被警告",
        },
		mark:true,
        marktext:"警",
	},   
	"wwyj_gonggao":{
		audio:"ext:文武英杰:1",
        trigger:{
			player:'damageAfter',
		},
		frequent:true,
		group:'wwyj_gonggao2',
		filter:function (event,player){
            return game.hasPlayer(function(current){
                return current!=player&&current.hasSkill('wwyj_gonggao1');
			});
        },
        init:function (player){
			player.storage.wwyj_gonggao=[];		
		},                        
        content:function (){
			'step 0'
			var list=['basic','trick','equip','cancel2'];
			for(var i=0;i<player.storage.wwyj_gonggao.length;i++){
				list.remove(player.storage.wwyj_gonggao[i]);
			}
			if(list.length>0){
				player.chooseControl(list).set('ai',function(){
					return list[0];
			    }
			).set('prompt',get.prompt('wwyj_gonggao')).set('prompt2',get.translation('wwyj_gonggao_info'));
			}
			else event.finish();		
			'step 1'
			if(result.control){			  
			    player.storage.wwyj_gonggao=result.control;
			}
			else{
				event.finish();
			}
			'step 2'
			event.num=0;
			event.targets=game.filterPlayer(function(current){
            return current!=player&&current.hasSkill('wwyj_gonggao1');
        }); 
		event.targets.remove(player);
        event.targets.sort(lib.sort.seat);
		    'step 3'
			if(event.num<event.targets.length){
			player.line(event.targets[event.num],'green');
            event.targets[event.num].chooseCard('交给'+get.translation(player)+'一张与'+get.translation(player.storage.wwyj_gonggao)+'牌类型相同的牌，否则'+get.translation(player)+'视为对你使用一张【杀】','he',function(card){
               return true;
            }).ai=function(card){			   
               return 10-get.value(card);
            };                                 
        }
         else{		 
			 event.finish();
		 }
		'step 4'    
		if(result.bool){ 
		   //event.targets[event.num].removeSkill("wwyj_gonggao1");
           event.targets[event.num].$give(result.cards,player); 
		   player.gain(result.cards,event.targets[event.num]);
		   var card=result.cards[0];
		   player.logSkill('wwyj_gonggao');
           game.log(player,'获得了'+get.translation(event.targets[event.num])+'一张',result.cards); 
		   if(get.type(card,'trick')==player.storage.wwyj_gonggao){
			  event.targets[event.num].draw();			
		   }
		   event.num++;
		   event.goto(3);		  
		}
		else{
		   player.logSkill('wwyj_gonggao');
		   //event.targets[event.num].removeSkill("wwyj_gonggao1");
		   player.discardPlayerCard('h',event.targets[event.num]);
		   player.useCard({name:'sha'},event.targets[event.num],false);	
		   player.say('叫你不看教程？也不看看我是何人？');
		   event.num++;
		   event.goto(3);
		}		
		},
		ai:{
           order:5,               
        },
	},
/*	"_wwyj_gonggao":{		
        trigger:{
			global:"roundStart",
		},
		forced:true,
		popup:true,
		filter:function (event,player){           
            return player.hasSkill('wwyj_gonggao1');			
        },                               
        content:function (){
			player.removeSkill("wwyj_gonggao1");
		},
	},*/
    "wwyj_gainian":{
		audio:"ext:文武英杰:2",
        enable:"phaseUse",
		usable:1,
        filter:function (event,player){
            return true;
        },
        init:function (player){
			player.storage.wwyj_gainian=[];		
		},                        
        content:function (){
        "step 0"              	
		var list1=[],list2=[];
		for(var i=0;i<lib.inpile.length;i++){
		var type=get.type(lib.inpile[i]);
		    if(type=='basic'){
			list1.push(['基本','',lib.inpile[i]]);
			}
			else if(type=='trick'){
				list2.push(['锦囊','',lib.inpile[i]]);
			}					
			}
		player.chooseButton([get.prompt('wwyj_gainian'),[list1.concat(list2),'vcard']]).set('filterButton',function(button){											
			return true;
		}).set('ai',function(button){		  					
			switch(button.link[2]){
				 	case 'du':return 1+9*Math.random();
					case 'sha':return 3+9*Math.random();
					case 'tao':return 5.5+9*Math.random();
					case 'jiu':return 3+9*Math.random();
					case 'shan':return 4+9*Math.random();
					case 'wuzhong':return 4.5+9*Math.random();
					case 'shunshou':return 4.5+9*Math.random();
					case 'nanman':return 3+9*Math.random();
					case 'wanjian':return 3+9*Math.random();
					default:return 9*Math.random();
				}							
			}).set('rand',[Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random()],Math.random());
		"step 1"       
			if(result.bool){					
				player.storage.wwyj_gainian=result.links[0][2];		
				if(player.hasSkill('wwyj_heimao')){
		    		player.loseHp();
			    	player.turnOver();
				}
				player.logSkill('wwyj_gainian');			
			}else{
				event.finish();
			}	
		"step 2"
	    event.num=0;       
        event.targets=game.filterPlayer(function(current){
            return current!=player;
        }); 
		event.targets.remove(player);
        event.targets.sort(lib.sort.seat);
        "step 3"
        if(event.num<event.targets.length){
			player.line(event.targets[event.num],'green');
            event.targets[event.num].chooseCard('弃置一张牌名与'+get.translation(player.storage.wwyj_gainian)+'相同的手牌，否则'+get.translation(player)+'摸一张牌','h',function(card){
               return card.name==player.storage.wwyj_gainian;
            }).ai=function(card){
			   if(get.attitude(player,event.targets[event.num])>0) return false;
               return 8-get.value(card);
            };                                 
        }
         else{
			 player.storage.wwyj_gainian=[];
			 event.finish();
		 }
		"step 4"     
		if(result.bool){            		   
           event.targets[event.num].discard(result.cards);          	     
           game.log(event.targets[event.num],'弃置了一张',result.cards);  
		   event.num++;
		   event.goto(3);		  
		}
		else{
		   player.draw();
		   event.num++;
		   event.goto(3);		   
		}
    },
                ai:{
                    order:2,
                    threaten:1.5,
                    result:{
                        player:function (player){
                if(player.hp<2&&player.hasSkill('wwyj_heimao')) return 0;
                return 1.8;
            },                   
                    },
                },
            },
    "wwyj_heimao":{
		audio:"ext:文武英杰:2",				
		unique:true,
		forced:true,
		trigger:{                   
            player:"dying",
        },
		mark:true,
		juexingji:true,
		//skillAnimation:true,				
		init:function(player){
			player.storage.wwyj_heimao=false;
		},
		intro:{
			content:'limited'
		},
		marktext:"猫",
		filter:function (event,player){						
			return player.hp<=0;
		},
		content:function(){
		    'step 0'
		    //trigger.cancel();
		    player.$fullscreenpop('松岛枫桂花','fire');	
		    player.storage.wwyj_heimao=true;
		    player.awakenSkill('wwyj_heimao');		    									
	        'step 1'
			player.discard(player.getCards('hej')); 
		    player.link(false);
		    player.turnOver(false);
			player.recover(player.maxHp-player.hp);
		    player.draw(player.maxHp);		 
		    ui.background.setBackgroundImage('extension/文武英杰/wenwuyingjie.jpg');
			'step 2'
			if(game.dead.length>0){
			    var list=[];
                 for(var i=0;i<game.dead.length;i++){
                     list.push(game.dead[i].name);
                 }      
                 player.chooseButton(ui.create.dialog('选择一名已阵亡的角色令其复活并交换身份牌',[list,'character']),function(button){
                 for(var i=0;i<game.dead.length&&game.dead[i].name!=button.link;i++);
                     return ai.get.attitude(_status.event.player,game.dead[i]);
                 });
				 /*随机复活：
				 var list=[];
			var list2;
			for(var i=0;i<game.dead.length;i++){
			list.push(game.dead[i]);			
			}																
		    list2=list.randomGet();			
 		    player.line(list2,'green');
			list2.revive(list2.maxHp);				
			list2.draw(list2.maxHp);
			*/
			}	
			'step 3'
			if(result.bool){
				for(var i=0;i<game.dead.length&&game.dead[i].name!=result.buttons[0].link;i++);
                    var dead=game.dead[i];				
				player.line(dead,'green');
				dead.revive(dead.maxHp);		
			    dead.draw(dead.maxHp);				
			if(get.mode()=='identity'){     
            game.broadcastAll(function(player,target,shown){
				var identity=player.identity;
				player.identity=target.identity;
				game.log(player,'的身份改为'+get.translation(player.identity));
				if(shown||player==game.me){
					player.setIdentity();
					player.update();
				}
				target.identity=identity;
				game.log(target,'的身份改为'+get.translation(target.identity));
				target.setIdentity();
				target.update();
			},player,dead,dead.identityShown);					
			} 
			}
            			
			/*全场大涅涅槃：
            event.num=0;      
            event.targets=game.filterPlayer(function(current){
                return current.isAlive();
            }); 
			event.targets.sort(lib.sort.seat);
            'step 2' 
        if(event.num<event.targets.length){  
		   player.line(event.targets[event.num],'green');
           event.targets[event.num].discard(event.targets[event.num].getCards('hej')); 
		   event.targets[event.num].link(false);
		   event.targets[event.num].turnOver(false);
		   event.targets[event.num].draw(4);
		   event.targets[event.num].recover(event.targets[event.num].maxHp-event.targets[event.num].hp);
		   event.num++;
		   event.redo();
         }
         else{
			 event.goto(3);
		 }
		 'step 3' 
		game.broadcastAll(function(player){
			var list=[];
			for(var i=0;i<game.dead.length;i++){
			list.push(game.dead[i]);			
			}																
		for(var i=0;i<list.length;i++){
 		player.line(list[i],'green');
			list[i].revive(list[i].maxHp);				
			list[i].draw(4);
			player.draw();
			}
			}, player);	
			*/
				},								
			},

        "wwyj_liusha":{                     
                trigger:{                   
                    player:"loseAfter",
                },					               
                audio:["qixi",2], 
				direct:true,
                filter:function (event,player){
         return player!=_status.currentPhase;		
    },
                content:function (){        
            'step 0'
		player.chooseTarget('流沙',1,lib.translate.wwyj_liusha_info,function(card,player,target){
            return target.countCards('hej');
        }).set('ai',function(target){
			if(target.countCards('j')) return get.attitude(_status.event.player,target);
            return -get.attitude(_status.event.player,target);            
        });
		    'step 1'
		if(result.bool){ 
            player.discardPlayerCard(result.targets[0],'hej',get.prompt('wwyj_liusha')).set('ai',function(button){            
            if(get.position(button.link)=='h'){               
                return Math.random();
            }
			if(get.position(button.link)=='e'){
                if(get.subtype(button.link)=='equip2')  return 2*get.value(button.link);
                return get.value(button.link);
            }
            return 1;
        }).set('logSkill',['wwyj_liusha',result.targets[0]]).set('att',get.attitude(player,result.targets[0])<=0);
	    }
			else{
                event.finish(); 
            } 
        'step 2'
        if(result.bool&&result.links&&result.links.length){
			player.logSkill('wwyj_liusha');
            if(get.tag(result.links[0],'damage')){								  
			    player.draw();				
			}
			else{
                event.finish(); 
            } 
		}   
            else{
               event.finish();
            }									
    },
            },
         "wwyj_yiwang":{                     
                trigger:{                   
                    player:"shaMiss",
                },			               				
                check:function (event,player){
				if(event.target.isTurnedOver()) return get.attitude(player,event.target)>0;	
        return get.attitude(player,event.target)<0;
    },
                audio:["miji",2], 
				prompt:function (event,player){					
					return '是否令'+get.translation(event.target)+'翻面？';
				},
                filter:function (event,player){
        return event.card.name=='sha';
    },
                content:function (){                  
            trigger.target.turnOver();                        
    },
            },
			"wwyj_fenghua3":{},
			"wwyj_fenghua2":{
                mark:'character',
				onremove:true,
				intro:{
					content:'到$的距离视为1'
				},
                mod:{
                    globalFrom:function (from,to){
            if(to==from.storage.wwyj_fenghua2){
                return -Infinity;
            }
        },
                },
            },
        "wwyj_fenghua1":{                     
                shaRelated:true,
				trigger:{player:'useCardToPlayered'},				
				filter:function(event,player){
					return event.card.name=='sha';
				},
				logTarget:'target',
                check:function (event,player){
                if(get.attitude(player,event.target)<0&&event.target.isTurnedOver()) return 1;
        return get.attitude(player,event.target)<0;
    },
                audio:["jueqing",2], 				                
                content:function (){        
           // trigger.directHit=true;     
              trigger.getParent().directHit.add(trigger.target);
    },
            },
			"wwyj_fenghua":{
                audio:["lieren",2],
                usable:1,
                enable:"phaseUse",					
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
            //target.addTempSkill('wwyj_fenghua3');            
            player.addTempSkill('wwyj_fenghua1'); 
		        	player.storage.wwyj_fenghua2=target;
            player.addTempSkill('wwyj_fenghua2');  			
        }
		else{
			player.recover();
		}
    },
                ai:{
                     result:{
                        target:function (player,target){ 
                        if(player.countCards('h')<=2) return 0;                     
                return -target.countCards('h');
            },
                    },
                    order:9,
                },
            },
        "wwyj_shennai":{
			//audio:["xiaoji",2],
			trigger:{
			    	global:"gameDrawAfter",
         player:["gainAfter","drawAfter","loseAfter"],
    },
			mark:true,
			marktext:"次",
			forced:true,
			popup:false,
			init:function (player){
        player.storage.wwyj_shennai=0;
    },			
			intro:{
          		content:function (storage){
         			return '你使用【杀】的次数上限为'+storage+'次';
          	 	},
            },
			content:function (){ 
     var cards1=[];
				var cards2=[];
				var hcards=player.getCards('h'); 
        for(var i=0;i<hcards.length;i++) { 
            if(get.tag(hcards[i],'damage')){
				cards1.push(hcards[i]);
			}
			else{
				cards2.push(hcards[i]);
			}
		}
		player.storage.wwyj_shennai=0;
		player.storage.wwyj_shennai+=cards2.length+1;
		player.update();
			},			
			mod:{					
				cardUsable:function(card,player,num){
					var cards1=[];
					var cards2=[];
					var hcards=player.getCards('h'); 
        for(var i=0;i<hcards.length;i++) { 
            if(get.tag(hcards[i],'damage')){
				cards1.push(hcards[i]);
			}
			else{
				cards2.push(hcards[i]);
			}
		}
				if(card.name=='sha') return num+=cards2.length;
					}
				},
			},
        "wwyj_keai":{                
                trigger:{
                    player:["damageEnd","loseAfter"],
                },	
				audio:"ext:文武英杰:1",
				frequent:true,               
                priority:10,
                filter:function (event,player,name){   
				if(name=='loseAfter') return !player.countCards('h')&&event.hs&&event.hs.length>0;
      return game.hasPlayer(function(current){
      return current.sex=='male';
  });
    },
                content:function (){  
		'step 0'		
        event.num=0;
        //game.playwwyj('wwyj_xipi1');
        event.targets=game.filterPlayer(function(current){
            return current.sex=='male'&&current.countCards('h');
        }); 
        //event.targets.sort(lib.sort.seat);
    'step 1' 
        if(event.num<event.targets.length){               
            event.targets[event.num].chooseCard('h','是否交给'+get.translation(trigger.player)+'一张手牌？').ai=function(card){
           if(get.attitude(player,event.targets[event.num])>0){
           if(event.targets[event.num].isDamaged()||event.targets[event.num].countCards('h')==1) return 1;
	    		   if(card.name=='sha'&&_status.currentPhase==trigger.player) return 1;
               if(event.targets[event.num].countCards('h')>1) return 8-get.value(card);
                   return 10-get.value(card);
                    }
           return 0;         
       };                                 
         }
         else{
			 event.finish();
		 }
		 'step 2'      
		if(result.bool){
           //player.logSkill("wwyj_keai");
           event.targets[event.num].line(player,'green'); 
		        //event.targets[event.num].lose(result.cards);       
           event.targets[event.num].$give(result.cards,player);
           player.gain(result.cards,event.targets[event.num]);		     
          game.log(player,'获得了'+get.translation(event.targets[event.num])+'的一张',result.cards);          
		}
		else{
		   event.num++;
           event.goto(1);
		}					
		 'step 3'   
		 if(!event.targets[event.num].countCards('h')||event.targets[event.num].getDamagedHp()){
	  	 event.targets[event.num].draw();          
		   event.num++;
      event.goto(1);
		}
		else{
		   event.num++;
      event.goto(1);
		}					
    },
                ai:{
                    order:9,
                    noh:true,
                    effect:{
		                				player:function(card,player,target){							
		              						if(!player.hasFriend()) return;								
					          			},
			        					},
                },
            },
        "wwyj_weixin":{                     
                trigger:{                   
                    global:"dying",
                },			
                usable:1,				
                check:function (event,player){
        return get.attitude(player,event.player)>0;
    },
                audio:["jijiu",2], 
				prompt:function (event,player){					
					return '是否摸一张牌并翻面，令'+get.translation(event.player)+'回复一点体力？';
				},
                filter:function (event,player){
        return event.player.hp<=0;
    },
                content:function (){        
            'step 0'   
            player.draw();
            player.turnOver();                                  
            'step 1'
            trigger.player.recover();                        
    },
            },
		"wwyj_xianyu":{                     
                trigger:{                   
                    source:"damageBegin",
                },
			           	usable:1,				
                check:function (event,player){
        return get.attitude(player,event.player)<0;
    },
                audio:["qiangxi",2],                                        
                filter:function (event,player){
        return event.card.name=='sha';
    },
                content:function (){        
          'step 0'   
          player.turnOver();   
          trigger.player.link(true);
           'step 1'  
            trigger.num++;                                                                 
    },
            },
          "wwyj_qianshang":{                     
                trigger:{                   
                    global:"phaseDiscardEnd",
                },     
                audio:"ext:文武英杰:1",                
                direct:true,                                                    
                filter:function (event,player){					
                if(!event.cards) return false;
                if(player==event.player) return false;
                for(var i=0;i<event.cards.length;i++){
        return game.hasPlayer(function(current){
                 return player.canUse(event.cards[i],current);
             });
             }
    },
                content:function (){        
          'step 0'        
          player.chooseCardButton(trigger.cards,1,'选择使用'+get.translation(trigger.player)+'所弃置的其中一张牌').set('filterButton',function(button){           
             return game.hasPlayer(function(current){
                 return get.type(button.link)!='equip'&&player.canUse(button.link,current);
             });
         }).set('ai',function(button){
             return get.value(button.link);
         });
        'step 1'        
        if(result.bool){         
            player.logSkill('wwyj_qianshang');
            player.chooseUseTarget(result.links[0]);            
        }       
        else event.finish();                       
    },
            },
         "wwyj_peiyin":{
				audio:"ext:文武英杰:1",    
				trigger:{player:'loseAfter'},
				forced:true,
				filter:function(event,player){
					return event.es&&event.es.length>0;
				},				
				content:function(){
				    player.recover();
				    player.draw();
				},
				ai:{
					noe:true,
					reverseEquip:true,
					effect:{
						target:function(card,player,target,current){
							if(get.type(card)=='equip'&&!get.cardtag(card,'gifts')) return [1,3];
						}
					}
				}
			},
         "wwyj_nie":{
            init:function (player){
                    player.storage.wwyj_nie=0;
                },
                intro:{
                    name:"造孽",
                    content:"已造了#个孽",
                },
                marktext:"孽",
            },
         "wwyj_zhaonie2":{                     
                trigger:{                   
                    player:"phaseZhunbeiBegin",
                },
                audio:"ext:文武英杰:1",                     
                forced:true,
                popup:false,
                filter:function (event,player){
        return player.storage.wwyj_nie>0;
    },
                content:function (){                        
                    var num=player.storage.wwyj_nie;
                    player.chooseToDiscard('he',Math.min(num,player.countCards('he')),true);                    
                },
                },
         "wwyj_zhaonie":{                     
                trigger:{                   
                    source:"dieBegin",
                },
                audio:"ext:文武英杰:1",                     
                forced:true,     
                //group:"wwyj_zhaonie2",                   
                init:function (player){
                    player.storage.wwyj_nie=0;
                    player.unmarkSkill("wwyj_nie");
                },            
                content:function (){  
                    player.addTempSkill('wwyj_zhaonie2',{player:'phaseBegin'});                    
                    player.storage.wwyj_nie++;
                    player.markSkill("wwyj_nie");
                    player.update();
                },
                },
        "wwyj_mingka":{                     
                trigger:{                   
                    source:"damageBegin",
                },
                check:function (event,player){
        return get.attitude(player,event.player)<0;
    },
                audio:["xianzhen",2],                                        
                filter:function (event,player){
        return event.card.name=='sha'&&player.countCards('he',{type:'equip'});
    },
                content:function (){        
          'step 0'        
           player.chooseCardButton('选择要弃置的装备牌',player.getCards('he',{type:'equip'}),[1,Math.min(2,player.countCards('he',{type:'equip'}))]).set('ai',function(button){                    
                 return get.type(button.link)=='equip';
            });                        
            'step 1'
          if(result.bool){                             
              player.discard(result.links);
              trigger.num+=result.links.length;            
          }
          else event.finish();                            
    },
            },
        "wwyj_miaoji":{
                enable:"chooseToUse",
				round:1,
				//audio:["kanpo",2],
				audio:"ext:文武英杰:2",   
                filterCard:function (){return false},
                selectCard:-1,
                viewAsFilter:function (player){
					return _status.currentPhase!=player&&player.isTurnedOver();
				},
                viewAs:{name:"wuxie"},
                onuse:function (result,player){
					player.turnOver();
				},
                prompt:"你可翻面视为使用一张【无懈可击】",
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
            "wwyj_qisi":{
				audio:"ext:文武英杰:2", 
			    group:["wwyj_qisi_use","wwyj_qisi_sha","wwyj_qisi_shan"],	
			},
			"wwyj_qisi_use":{
				//audio:["qice",2],
                enable:"chooseToUse",
                filter:function (event,player){                                                
        if((event.filterCard({name:'sha'},player,event))||
            (event.filterCard({name:'jiu'},player,event))||
            (event.filterCard({name:'shan'},player,event))||
            (event.filterCard({name:'tao'},player,event))){
   return !player.isTurnedOver();    
        }
        return false;
    },
                chooseButton:{
                    dialog:function (event,player){
            var list=[];
            if(event.filterCard({name:'sha'},player,event)){
                list.push(['基本','','sha']);
                list.push(['基本','','sha','fire']);
                list.push(['基本','','sha','thunder']);
            }
            if(event.filterCard({name:'tao'},player,event)){
                list.push(['基本','','tao']);
            }
             if(event.filterCard({name:'shan'},player,event)){
                list.push(['基本','','shan']);
            }
            if(event.filterCard({name:'jiu'},player,event)){
                list.push(['基本','','jiu']);
            }
            return ui.create.dialog('奇思',[list,'vcard'],'hidden');
        },
                    check:function(button){
						var player=_status.event.player;						
						//var effect=player.getUseValue(button.link[2]);
						//if(effect>0) return effect;
						//return 0;						
						var card={name:button.link[2],nature:button.link[3]};
						if(game.hasPlayer(function(current){
							return player.canUse(card,current)&&get.effect(current,card,player,player)>0;
						})){
							switch(button.link[2]){
								case 'tao':return 3;
								case 'jiu':return 3.01;
								case 'shan':return 3.01;
								case 'sha':
									if(button.link[3]=='fire') return 2.95;
									else if(button.link[3]=='thunder') return 2.92;
									else return 2.9;
							}
						}
						return 0;
					},
                    backup:function (links,player){
            return {
                filterCard:function (){return false},
                selectCard:-1,
                viewAsFilter:function (player){return !player.isTurnedOver()},
              // viewAs:{name:links[0][2],nature:links[0][3]},   
                viewAs:{name:links[0][2],nature:links[0][3],suit:null,number:null,isCard:true},                                    
                popname:true,
                ignoreMod:true,
                precontent:function(){
                    //player.draw(player.maxHp-player.countCards('h'));		
                    game.playwwyj(['wwyj_qisi1','wwyj_qisi2'].randomGet()); 
                    player.turnOver();					
                    player.logSkill('wwyj_qisi');                        
                },
            }
        },
                    prompt:function (links,player){
            return '视为使用一张'+get.translation(links[0][3]||'')+get.translation(links[0][2]);
        },
                },
                ai:{                
                    order:function (){
            var player=_status.event.player;
            var event=_status.event;
            if(event.filterCard({name:'jiu'},player,event)&&get.effect(player,{name:'jiu'})>0){
                return 3.1;
            }
            return 2.9;
        },
                    save:true,
                    respondSha:true,
                    respondShan:true,
                    result:{
                        //player:1,
                        player:function(player,target){
							var target=game.findPlayer(function(current){
								return current.hp<=0;
							});
							if(target&&get.attitude(player,target)<=0) return 0;							
							    return 1;
						},
                    },
                },
            },
            "wwyj_qisi_sha":{
                trigger:{
                    player:"chooseToRespondBegin",
                },
                filter:function (event,player){         
        if(!event.filterCard({name:'sha'})) return false;
        if(!lib.filter.cardRespondable({name:'sha'},player,event)) return false;                 
     //  if(event.parent.name!='sha') return false;
        return !player.isTurnedOver();
    },
                content:function (){ 
           //player.draw(player.maxHp-player.countCards('h'));	
            game.playwwyj(['wwyj_qisi1','wwyj_qisi2'].randomGet()); 
            player.turnOver();		   
            trigger.untrigger();
            trigger.responded=true;         
            trigger.result={bool:true,card:{name:'sha',isCard:true}};    
            player.logSkill('wwyj_qisi');
    },
            },
			"wwyj_qisi_shan":{
                trigger:{
                    player:"chooseToRespondBegin",
                },
                filter:function (event,player){        
    if(!lib.filter.cardRespondable({name:'shan'},player,event)) return false;
    if(!event.filterCard({name:'shan'})) return false;
         return !player.isTurnedOver();                                  
    },
                content:function (){           
	        	game.playwwyj(['wwyj_qisi1','wwyj_qisi2'].randomGet()); 	
	        player.turnOver();
            trigger.untrigger();
            trigger.responded=true;        
            trigger.result={bool:true,card:{name:'shan',isCard:true}};                              
            player.logSkill('wwyj_qisi'); 
    },
                
            },
            
        "wwyj_lengyu2":{
         trigger:{
             source:"damageEnd",
     },  
	 forced:true,
	 filter:function (event,player){
          return event.player.isAlive()&&event.card.name=='sha'&&event.notLink();
      },
     content:function (){  
	 "step 0"
     player.chooseCard('h','交给'+get.translation(trigger.player)+'一张手牌',true).ai=function(card){                         
         return 6-get.value(card);              
       };                					
					"step 1"
					if(result.bool){		
				    		//player.lose(result.cards);       
            player.$give(result.cards,trigger.player);
            trigger.player.gain(result.cards,player);			     
					}
					else{
				    		event.finish();
					} 			
     },
		},
        "wwyj_lengyu":{
			audio:"ext:文武英杰:1",
         trigger:{
             player:"shaBegin",
     },       
   	 filter:function (event,player){
          return event.target.countCards('h')&&event.card.name=='sha';
      },
      frequent:true,	  
     content:function (){  
            player.gainPlayerCard(trigger.target,'h'); 		            
            player.addTempSkill('wwyj_lengyu2','shaAfter');	
     },
		},
		"wwyj_junshen2":{			
				mod:{					
					selectTarget:function(card,player,range){
						if(card.name=='sha'&&range[1]!=-1) range[1]+=Infinity;
					},					
				},
			},
		"wwyj_junshen1":{				
				mod:{
					cardUsable:function(card,player,num){
						if(card.name=='sha'&&get.color(card)=='red') return Infinity;
					},
					targetInRange:function(card,player,target,now){
						if(card.name=='sha'&&get.color(card)=='black') return true;
					},
				},
				ai:{					
					skillTagFilter:function(player,tag,arg){
						if(!get.zhu(player,'shouyue')) return false;
						if(arg&&arg.name=='sha') return true;
						return false;
					}
				},
			},
			"wwyj_junshen":{
			audio:"ext:文武英杰:1",
				trigger:{
             player:"phaseUseBegin",
     },       
   	 filter:function (event,player){
          return true;
      },
      direct:true,	  
     content:function (){  
            'step 0'
        player.chooseControl().set('choiceList',['使用黑【杀】无距离限制，使用红【杀】没次数限制','使用的【杀】可指定任意名目标且无视目标的防具']).set('ai',function(){
        if(player.getAttackRange()>2) return 1;          
            return 0;
        });
        'step 1'
        if(result.index==0){
            player.logSkill('wwyj_junshen');
            player.addTempSkill('wwyj_junshen1');
        }
        else{
        player.logSkill('wwyj_junshen');
			player.addTempSkill('wwyj_junshen2');
			player.addTempSkill('unequip');
		}
     },
			},
         "wwyj_jisi":{
                audio:["wansha",2],
                trigger:{
                    player:"phaseBegin",
                },                
               // forced:true,
               check:function (event,player){ 
               for(var i=0;i<game.players.length;i++){
								if(game.players[i]!=player&&game.players[i].hp<2){
								    if(get.attitude(player,game.players[i])>0) return 0;
								    return 1;     
								    }
								}	    	                    
         },
                filter:function (event,player){				
					return game.hasPlayer(function(current){
            return current!=player&&current.hp==1;
         });                  
				},			
                content:function (){
                'step 0'                        
             event.num=0;
        event.targets=game.filterPlayer(function(current){
            return current!=player&&current.hp==1;
        });  
		//event.targets.sort(lib.sort.seat);
        //player.line(event.targets,'green');    
    'step 1' 
        if(event.num<event.targets.length){
            player.line(event.targets[event.num],'green');    
            event.targets[event.num].loseHp();         
            game.log(event.targets[event.num],'失去了一点体力');
            event.num++;
            event.redo();
         }
         else event.finish();
                },                 
            },
         "wwyj_qiangkang2":{              
                trigger:{
                    player:"damageEnd",
                },
                forced:true,
                filter:function (event,player){
          return event.source&&!event.nature;
      },
                content:function (){
        player.draw();       
        if(trigger.source.countCards('he')){
        game.playwwyj('wwyj_yingguai1'); 
        player.discardPlayerCard(trigger.source,'he',true);
        }
    },
            },
            "wwyj_qiangkang":{
               audio:["weimu",2],
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                group:"wwyj_qiangkang2",
                filter:function (event,player){
          return event.nature;
      },
                content:function (){
                    trigger.cancel();
                },
                ai:{
                    nofire:function (player){
            return player.isAlive();
        },
                    nothunder:function (player){
            return player.isAlive();
        },
         effect:{
                target:function (card,player,target,current){
                    if(get.tag(card,'natureDamage')) return 0;
                    if(card.name=='tiesuo') return [0,0];                
                },
         },
                },                                
            },
			"wwyj_fansha":{
        audio:["fanjian",2],
         trigger:{
          target:"shaBegin",
     },          
	         filter:function (event,player){
               return player.countCards('h','sha')&&event.card.name=='sha';
      },
	  check:function (event,player){ 	          
            return get.attitude(player,event.player)<=0;
         },
     content:function (){
		 player.discard(player.getCards('h',{name:'sha'}));
		 player.useCard({name:'sha'},trigger.player,false);
     },				
			},	
		"_wwyj_qiaoji":{                
                trigger:{
                    player:"useCard",
                },	
				audio:["fanjian",2],
				popup:false,
                forced:true,
                priority:10,
                filter:function (event,player){                                                            
      return event.card.name=='sha'&&game.hasPlayer(function(current){
      return current.hasSkill('wwyj_qiaoji2')&&player!=current;
  });
    },
                content:function (){            
        'step 0'                      
     event.targets=game.filterPlayer(function(current){
        return current.hasSkill('wwyj_qiaoji2')&&player!=current;
     });
     event.targets.sort(lib.sort.seat);
       'step 1'   
     trigger.targets.addArray(event.targets);   
     player.line(trigger.targets,'green');      
     },
                ai:{
                    order:9,
                },
            },	
            "wwyj_qiaoji2":{},
      /*  "wwyj_qiaoji2":{
        audio:"ext:文武英杰:1",
         trigger:{
          player:"damageEnd",
     },
          forced:true,
		  popup:false,
	         filter:function (event,player){
               return player.countCards('h')&&event.card.name=='sha';
      },
     content:function (){
		 trigger.source.say('吃了我的给我吐出来');
		 player.chooseToDiscard('h',true);		
     },				
			},			*/
          "wwyj_qiaoji":{
          audio:["yingzi",2],
         trigger:{
          global:"phaseDrawEnd",
     },      
	 filter:function (event,player){
               return event.num>0&&player!=event.player;
      },
      check:function (event,player){ 
	         if(get.attitude(player,event.player)>0) return 0;
             if(!player.countCards('h','shan')&&event.player.countCards('h')>4) return 0;
	    	       if(player.countCards('h')<2&&player.hp<2) return 0;     
	    	       if(!player.isEmpty(2)) return 1;       
	    	       if(player.countCards('h','shan')) return 1;     
              return 0;
         },             
     content:function (){
		 'step 0' 
		 player.chooseCardButton('选择获得其中一张基本牌',trigger.cards,1).set('filterButton',function(button){           
             return get.type(button.link)=='basic';
         }).set('ai',function(button){
             return get.value(button.link);
         });                                     
            'step 1'
          if(result.bool){                             
             trigger.player.$give(result.links,player);
             player.gain(result.links,trigger.player); 
		        	 player.addTempSkill('wwyj_qiaoji2');
          }
          else{
			player.draw(); 
			player.addTempSkill('wwyj_qiaoji2');
		  }		     
     },				           
            },
         "wwyj_yanyu":{
				audio:"ext:文武英杰:1",
				trigger:{global:'loseAfter'},		
				direct:true,
				filter:function (event,player){      
        if(player==event.player) return false;
        for(var i=0;i<event.cards.length;i++){           
            if(get.position(event.cards[i],true)=='d'&&get.type(event.cards[i])=='equip') return true; 
           // if(get.position(event.cards[i],true)=='d'&&event.cards[i].original=='e'&&get.subtype(event.cards[i])=='equip1') return true; 
        } 
        return false; 
    },
				content:function (){								 			
           'step 0'    
          player.chooseCardButton('选择其中一张装备牌',trigger.cards,1).set('filterButton',function(button){           
             return !player.isDisabled(get.subtype(button.link))&&get.type(button.link)=='equip';
         }).set('ai',function(button){
             if(button.link.name=='tengjia') return 0;
                 return get.value(button.link);
         });               
            'step 1'
          if(result.bool){   
                player.logSkill('wwyj_yanyu',player); 
                player.useCard(result.links[0],player);	                               
                //player.equip(result.links[0]);	
          }
          else event.finish();	         
         /* "step 0"
		 player.chooseCardButton('选择其中一张装备牌',trigger.cards,1).set('filterButton',function(button){           
             return get.type(button.link)=='equip';
         }).set('ai',function(button){
             return get.value(button.link);
         });               
           "step 1"
          if(result.bool){   
                player.logSkill('wwyj_yanyu',player);  
                event.link=result.links[0];  
                player.chooseTarget(get.prompt2('wwyj_yanyu'),function(card,player,target){
            return !target.isDisabled(get.subtype(event.link));
        },function(target){
            return get.attitude(player,target)>0;
        });                                                    
          }
          else event.finish();	
          "step 2"		 
        //"step 3"
        if(result.bool){
            //result.targets[0].useCard(event.link,result.targets[0]);	          
            result.targets[0].equip(event.link);	                       
        }
        else event.finish();*/								    							    
				},
				ai:{		
					reverseEquip:true,
					order:5,
				},
			},
         "wwyj_bingmou":{
         trigger:{
          player:"shaBegin",
     },
     forced:true,
     content:function (){  
        game.playwwyj('wwyj_bingmou'); 
     },
				mod:{			
						globalTo:function (from,to,distance){
            return distance+=to.getAttackRange()-1;
        },
					selectTarget:function (card,player,range){
				   		if(card.name=='sha'&&range[1]!=-1) range[1]+=player.getAttackRange()-1;
					},					
				},
			},
         "wwyj_gaochang":{
				audio:["yingzi",2],
		     	trigger:{player:'phaseDrawBegin'},
	    	   check:function (event,player){   
	    	       if(player.countCards('h')>2||player.storage.wwyj_toushi<2) return 0;     
	    	       if(player.hp<2) return 1;            
              return player.countCards('h');
         },           
	    			filter:function (event,player){
              return player.storage.wwyj_toushi>0;
         },
			    	content:function (){				           
			    		   trigger.num+=player.storage.wwyj_toushi;
			    		   player.storage.wwyj_toushi=0;
		    		},
		    		ai:{
			       		threaten:2.3,
		    		},
		   	},         
            "wwyj_qiuxue":{              
			            audio:["zili",2],
                trigger:{
                    player:"wwyj_toushiAfter",
                },
                forced:true,
		        juexingji:true,	
		        skillAnimation:true,  		
                derivation:"wwyj_gaochang",
                init:function (player){
                    player.storage.wwyj_qiuxue=false;               
                },    
                filter:function (event,player){
          return player.storage.wwyj_toushi>=3;
      },
                content:function (){
                'step 0'
                //player.$fullscreenpop('瓦力','fire');	
                ui.background.setBackgroundImage('extension/文武英杰/wenwuyingjie.jpg');               
	            'step 1'
			    player.loseMaxHp();
                player.recover();
                player.update();
                player.addSkill('wwyj_gaochang');
                player.storage.wwyj_qiuxue=true;
                player.awakenSkill('wwyj_qiuxue');
    },
            },
            "wwyj_toushi":{
		        audio:"ext:文武英杰:1",
                enable:"phaseUse",
                usable:1,
                filterCard:true,
                selectCard:1,
                position:'he',      
                discard:false,
                prepare:'give',
                init:function (player){
                    player.storage.wwyj_toushi=0;
                    player.unmarkSkill('wwyj_toushi');
                },    
                marktext:"师",
                intro:{
                    name:"偷师",
                    content:"已有#个偷师标记",
                },                       
                filterTarget:function (card,player,target){
        return player!=target;
    },
                filter:function (event,player){    
        return player.countCards('he');
    },                              
                content:function (){
        "step 0"
            target.gain(cards,player);                 
        "step 1"            
            player.chooseSkill(target,function(info,skill){
		    	 	 return true;
				});     					 
      "step 2"
    		if(result.bool){
			    var skill=result.skill;		    		
		     	player.addTempSkill(skill,{player:'phaseUseBegin'});
		    	player.popup(skill);
		    	player.flashAvatar('wwyj_toushi',skill);   		 
				player.markSkill('wwyj_toushi');
		   		player.storage.wwyj_toushi++;  
		   		player.draw();
		   	 //player.addMark('wwyj_toushi');               
           player.update(); 				 
		     	player.markSkillCharacter('wwyj_toushi',target.name,get.skillTranslation(skill,player),get.skillInfoTranslation(skill));
			}        
			else event.finish();                                        				
    },
       ai:{
         result:{
            target:function (player,target){
              if(target.countCards('h')>2) return 1;   
                  return target.countCards('h');
              },
            },            
            order:8,
            threaten:0.5,
        },  
            },
           	
           "wwyj_qiusheng":{              
			    audio:["zaiqi",2],
                trigger:{                   
                    player:"dying",
                },                
                forced:true,                
                filter:function (event,player){
          return player.hp<=0&&player.storage.wwyj_juedi2>0;
      },
                content:function (){                        
                player.storage.wwyj_juedi2--;
                player.recover(2-player.hp);                
                if(player.storage.wwyj_juedi2<=0){                    
                    player.unmarkSkill('wwyj_juedi2');    
                    player.removeSkill('wwyj_juedi2');                              
                }
                player.update();
    },
            },
            "wwyj_juedi2":{              			                         
                marktext:"废",
                intro:{
                    name:"绝地",
                    content:"已有#个废标记",
                },                      
                forced:true,
                popup:false,
                init:function (player){
                    player.storage.wwyj_juedi2=0;
                    player.unmarkSkill('wwyj_juedi2');
                },
                },
          	"wwyj_juedi":{              
			            audio:["baonu",2],
                trigger:{
                    source:"damageEnd",
                    player:"damageEnd",
                },                
                forced:true,            
                derivation:"wwyj_qiusheng", 
                filter:function (event,player){
          return event.num>0;
      },
                content:function (){
                'step 0'
                event.num=0;
                'step 1'
                if(!player.hasSkill('wwyj_juedi2')){
                    player.addSkill('wwyj_juedi2');
                }
               // player.storage.wwyj_juedi2++;               
               // player.markSkill('wwyj_juedi2');
               player.addMark('wwyj_juedi2');
                event.num++;
                player.update();
                if(player.storage.wwyj_juedi2>=5){
                    player.addSkill('wwyj_qiusheng');
                    player.awakenSkill('wwyj_juedi');
                    player.$fullscreenpop('绝地求生','fire');
                    event.finish();
                }
                'step 2'
                if(event.num<trigger.num){                   
                    event.goto(1);
                }
                else{
                    event.finish();
                }
    },
            },
           "wwyj_guanli":{
		          		 audio:"ext:文武英杰:1",
                enable:"phaseUse",
                usable:1,                           
                filterTarget:function (card,player,target){
        return player!=target&&target.countCards('h');
    },
          filter:function (event,player){
					      return true;              
				},
                content:function (){
        "step 0"             
        event.card=target.getCards('h').randomGet();
        "step 1"
         target.discard(event.card);
       "step 2"
        if(get.type(event.card)=='basic'){
            player.useCard({name:'sha',isCard:true},target,false);
        }
        else if(get.type(event.card,'trick')=='trick'){
            player.useCard({name:'juedou',isCard:true},'nowuxie',target,'noai').animate=false;
        }
        else{
            //player.gain(event.card,'draw');
            player.useCard(event.card,player);
        }
    },
       ai:{
         result:{
            target:function (player,target){         
                return -target.countCards('h');
            },
                    },
                    order:8,
                    threaten:0.5,
        },  
            },
             "wwyj_shengshen":{
                audio:["jijiu",2],
                trigger:{
                    global:"dying",
                },
                round:1,
                filter:function (event,player){
        return true;
    },
                check:function (event,player){
        return get.attitude(player,event.player)>0;
    },
                content:function (){
                'step 0'
                event.cards=get.cards(2);
                player.showCards(event.cards);
                'step 1'           
           if(get.color(event.cards[0])=='red'&&get.color(event.cards[1])=='red'){             
               event.goto(2);
           }
           if(get.color(event.cards[0])=='red'&&get.color(event.cards[1])!='red'){
               event.cards.remove(event.cards[1]);
               event.goto(2);
           }
           if(get.color(event.cards[0])!='red'&&get.color(event.cards[1])=='red'){
               event.cards.remove(event.cards[0]);
               event.goto(2);
           }
           if(get.color(event.cards[0])!='red'&&get.color(event.cards[1])!='red'){
               event.cards.remove(event.cards[0]);
               event.cards.remove(event.cards[1]);
               if(player.countCards('h',{color:'red'})){
                   event.goto(4);
               }
               else event.finish();
           }                        
          'step 2'        
           player.chooseCardButton('选择其中一张红色牌',event.cards,1,true).set('ai',function(button){
                    //    if(get.color(button.link=='black')) return false;
                                return 10-get.value(button.link);
                        });                        
            'step 3'
          if(result.bool){                
                            event.cards.remove(result.links[0]);
                            game.log(player,'弃置了',result.links[0]);
                            player.useCard({name:"tao",isCard:true},trigger.player,false);
                            event.finish();
                        }
                        else event.finish();
          'step 4'
          player.chooseBool('是否弃置你的所有红色手牌，视为对'+get.translation(trigger.player)+'使用一张【桃】').set('ai',function(){               
               if(player.countCards('h',{color:'red'})<4&&get.attitude(_status.event.player,trigger.player)>0) return true;       
                   return false;
          });
       'step 5'
        if(result.bool){
            player.discard(player.getCards('h',{color:'red'}));
            player.useCard({name:"tao",isCard:true},trigger.player,false);
        }
    },
                ai:{
                    order:3,
                },
            },
        		"wwyj_kaiche":{
								audio:"ext:文武英杰:1",
				trigger:{player:'phaseDrawBegin2'},
				forced:true,
				filter:function (event,player){				
					/*return game.hasPlayer(function(current){
            return current.sex=='female';
         });  */
         return player.isAlive();             
				},			
				mod:{
					maxHandcard:function (player,num){
					return num+game.countPlayer(function(current){
                return current.sex=='female';
            });
					},
				},
				content:function (){
				var num=game.countPlayer(function(current){
            return current.sex=='female';
         });                 
					trigger.num+=Math.max(1,num);
				},
				ai:{
					threaten:1.3,
				},
			},         
			"wwyj_kazhan":{              
			         audio:["yuhua",2],
                trigger:{
                    global:"changeHp",
                },
                prompt:function (event,player){					
					return '是否令'+get.translation(event.player)+'随机使用一张装备牌？';
				},
                check:function (event,player){                    
                    return get.attitude(player,event.player)>0;
                },             
                filter:function (event,player){
          return event.player.isAlive()&&event.player.hp==1;
      },
                content:function (){
       event.card=get.cardPile(function(card){
							return get.type(card)=='equip'&&!trigger.player.isDisabled(get.subtype(card));
						});
						if(event.card){
							trigger.player.chooseUseTarget(event.card,'noanimate','nopopup',true);					
						}
						else{
							event.finish();
						}    
    },
            },
            
             "wwyj_jiguang_shan2":{
				trigger:{player:['useCardBefore','respondBefore']},
				forced:true,
				popup:false,
				filter:function (event,player){
					return event.skill=='wwyj_jiguang_shan'&&game.hasPlayer(function(current){
                    return current.countCards('e',{subtype:['equip2','equip3','equip5']});
         });                                          
				},
				content:function (){					
         "step 0"
        player.chooseTarget('极光',1,lib.translate.wwyj_jiguang_shan2_info,true,function(card,player,target){
            return target.countCards('e',{subtype:['equip2','equip3','equip5']});
        }).set('ai',function(target){
            if(player.hp<=1) return true;
            return -get.attitude(_status.event.player,target);            
        });
         "step 1"
        if(result.bool){         
           event.target=result.targets[0];     
           player.line(event.target,'green');                
           event.cards=event.target.getCards('e',{subtype:['equip2','equip3','equip5']});  
           player.chooseCardButton(event.cards,1,'弃置'+get.translation(event.target)+'的一张装备区的防具牌或防御马或宝物牌',true).set('filterButton',function(button){           
             return game.hasPlayer(function(current){
                 return player.canUse(button.link,current);
             });
         }).set('ai',function(button){
             return get.value(button.link);
         });
         }
       "step 2"
        if(result.bool){
            //result.links[0].discard();         
             event.target.discard(result.links[0]);              
        }       
        else event.finish();
                                              
				},
			},
			
			"wwyj_jiguang_shan":{				
				prompt:'当你需要使用【闪】时，可弃置一名其他角色的一张防具牌或防御马或宝物牌，视为使用之',
				enable:'chooseToUse',
				filter:function (event,player){
					//return !_status.dying.length;
					return game.hasPlayer(function(current){
                    return current.countCards('e',{subtype:['equip2','equip3','equip5']});
         });                 
				},			
				filterCard:function (){return false},
     selectCard:-1,
     onuse:function (result,player){
         game.playwwyj(['wwyj_jiguang1','wwyj_jiguang2'].randomGet()); 
     },
     viewAsFilter:function (player){
     return game.hasPlayer(function(current){
                    return current.countCards('e',{subtype:['equip2','equip3','equip5']});
         });                 
     },	
				viewAs:{name:'shan'},				
				ai:{
				 order:5,
					threaten:1.5,
					respondShan:true,
				}
			},		
						"wwyj_jiguang":{
		          		 audio:"ext:文武英杰:2",         
                    group:["wwyj_jiguang_sha","wwyj_jiguang_rsha","wwyj_jiguang_rshan","wwyj_jiguang_shan","wwyj_jiguang_shan2"],               
                },
           "wwyj_jiguang_sha":{		          		 
                enable:"phaseUse",
                //usable:1,                                 
                filterTarget:function (card,player,target){
        return target.countCards('e',{subtype:['equip1','equip4']});
    },
          filter:function (event,player){                   
              var num=game.countPlayer(function(current){
                    return player.canUse('sha',current);
         });                         
				return player.countUsed('sha')==0&&num>0&&game.hasPlayer(function(current){
                    return current.countCards('e',{subtype:['equip1','equip4']});
         });                                                   
				},
                content:function (){
        "step 0"             
        event.cards=target.getCards('e',{subtype:['equip1','equip4']});
        "step 1"        
         player.chooseCardButton(event.cards,1,'弃置'+get.translation(target)+'装备区的武器牌或进攻马，视为使用一张【杀】',true).set('filterButton',function(button){           
             return game.hasPlayer(function(current){
                 return player.canUse(button.link,current);
             });
         }).set('ai',function(button){
             return get.value(button.link);
         });
       "step 2"
        if(result.bool){
            game.playwwyj(['wwyj_jiguang1','wwyj_jiguang2'].randomGet()); 
            //result.links[0].discard();           
            target.discard(result.links[0]);  
            player.chooseUseTarget('选择视为使用【杀】的目标',{name:'sha',isCard:true},false,false);             
            player.getStat().card.sha++;
        }       
        else event.finish();
    },
       ai:{
         result:{
            target:function (player,target){
             // if(target.countCards('h')<3) return 1;   
                return -target.countCards('h');
            },
                    },
                    order:8,
                    threaten:0.5,
        },  
            },
                    
                "wwyj_jiguang_rshan":{          
                trigger:{
                    player:"chooseToRespondBegin",
                },
                direct:true,           
                filter:function (event,player){            
   // if(event.parent.name!='sha') return false;
    if(!lib.filter.cardRespondable({name:'shan'},player,event)) return false;
    if(!event.filterCard({name:'shan'})) return false;
         return game.hasPlayer(function(current){
                    return current.countCards('e',{subtype:['equip2','equip3','equip5']});
         });                                          
    },
                content:function (){
              "step 0"
        player.chooseTarget('极光',1,lib.translate.wwyj_jiguang_rshan_info,function(card,player,target){
            return target.countCards('e',{subtype:['equip2','equip3','equip5']});
        }).set('ai',function(target){
            if(player.hp<=1) return true;
            return -get.attitude(_status.event.player,target);            
        });
                    "step 1"
         if(result.bool){         
           event.target=result.targets[0];      
           player.line(event.target,'green');                   
           event.cards=event.target.getCards('e',{subtype:['equip2','equip3','equip5']});  
           player.chooseCardButton(event.cards,1,'弃置'+get.translation(event.target)+'装备区的一张防具牌或防御马或宝物牌',true).set('filterButton',function(button){           
             return game.hasPlayer(function(current){
                 return player.canUse(button.link,current);
             });
         }).set('ai',function(button){
             return get.value(button.link);
         });
         }
       "step 2"
        if(result.bool){               
           trigger.untrigger();
          // result.links[0].discard();         
           event.target.discard(result.links[0]);
           trigger.responded=true;
          // trigger.result={bool:true,card:{name:'shan'}};  
           trigger.result={bool:true,card:{name:'shan',isCard:true}};                                           
           player.logSkill('wwyj_jiguang');     
           game.playwwyj(['wwyj_jiguang1','wwyj_jiguang2'].randomGet());                                
        }       
        else event.finish();                                                               
    },
            },
            "wwyj_jiguang_rsha":{           
                trigger:{
                    player:"chooseToRespondBegin",
                },       
                direct:true,      
                filter:function (event,player){             
        if(!event.filterCard({name:'sha'})) return false;
        if(!lib.filter.cardRespondable({name:'sha'},player,event)) return false;                 
         return game.hasPlayer(function(current){
                    return current.countCards('e',{subtype:['equip1','equip4']});
         });            
    },
                content:function (){     
                    "step 0"
        player.chooseTarget('极光',1,lib.translate.wwyj_jiguang_rsha_info,function(card,player,target){
            return target.countCards('e',{subtype:['equip1','equip4']});
        }).set('ai',function(target){
            if(player.hp<=1) return true;
            return -get.attitude(_status.event.player,target);            
        });
                    "step 1"
         if(result.bool){         
           event.target=result.targets[0];       
           player.line(event.target,'green');               
           event.cards=event.target.getCards('e',{subtype:['equip1','equip4']});  
           player.chooseCardButton(event.cards,1,'弃置'+get.translation(event.target)+'装备区的一张武器牌或进攻马',true).set('filterButton',function(button){           
             return game.hasPlayer(function(current){
                 return player.canUse(button.link,current);
             });
         }).set('ai',function(button){
             return get.value(button.link);
         });
         }
       "step 2"
        if(result.bool){               
           trigger.untrigger();
         //  result.links[0].discard();        
           event.target.discard(result.links[0]);
           trigger.responded=true;
           //trigger.result={bool:true,card:{name:'sha'}};   
           trigger.result={bool:true,card:{name:'sha',isCard:true}};                                            
           player.logSkill('wwyj_jiguang');     
           game.playwwyj(['wwyj_jiguang1','wwyj_jiguang2'].randomGet());                 
        }       
        else event.finish();                                 
    },
            },
 
      "wwyj_jianghun":{
                trigger:{
                    global:"roundStart",
                },
                audio:["huashen",2],
                forced:true,
                filter:function (event,player){
                    if(!lib.characterSort.diy||!lib.characterSort.diy.diy_key) return false;
                    return player.storage.wwyj_jianghun.length<(lib.characterSort.diy.diy_key.length-1);
                },
                init:function (player,skill){
                    if(!player.storage[skill]) player.storage[skill]=[];
                    if(!player.storage['zhuSkill_'+skill]) player.storage['zhuSkill_'+skill]=[];
                },
                intro:{
                    content:"characters",
                },
                content:function (){
                    "step 0"
                    var list=lib.characterSort.diy.diy_key.slice(0);
                    list.remove('key_umi2');
                    list.randomSort();
                    list.remove('key_yuri');
                    list.unshift('key_yuri');
                    list.removeArray(player.storage.wwyj_jianghun);
                    var name=list[0];
                    player.storage.wwyj_jianghun.push(name);
                    var skills=lib.character[name][3];
                    skills.removeArray(['yusa_misa','misa_yusa','sunohara_chengshuang','yuri_wangxi']);
                    var skill=skills.randomGet();
                    player.addSkill(skill);
                    player.flashAvatar('wwyj_jianghun',skill);   
                    if(lib.skill[skill].zhuSkill) player.storage.zhuSkill_wwyj_jianghun.push(skill);
                    player.markSkill('wwyj_jianghun');
                    player.mark(skill,{
                        name:get.translation(skill),
                        content:lib.translate[skill+'_info']
                    });
                    game.log(player,'获得技能','【'+get.translation(skill)+'】');
                    event.dialog=ui.create.dialog('<div class="text center">你获得了'+get.translation(name)+'的一个随机技能【'+get.translation(skill)+'】',[[name],'character']);
                    game.delay(3);
                    "step 1"
                    event.dialog.close();
                },
                ai:{
                    order:9,
                },
            },
        "wwyj_chengzhi":{
          audio:["xinsheng",2],
          trigger:{global:'dieBegin'},
          filter:function (event,player){
              return event.player.group!='key';
          },
          content:function (){
              var cards=[];
              var hs=trigger.player.getCards('hej');
           for(var i=0;i<hs.length;i++){
              cards.push(game.createCard(hs[i]))
           }
           if(cards.length) player.gain(cards,'gain2','log');
         	  	var listm=[];
	           	var listv=[];
         		if(trigger.player.name1!=undefined&&lib.character[trigger.player.name1]) listm=lib.character[trigger.player.name1][3];
	         	else if(lib.character[trigger.player.name]) listm=lib.character[trigger.player.name][3];
         		if(trigger.player.name2!=undefined&&lib.character[trigger.player.name2]) listv=lib.character[trigger.player.name2][3];
         		listm=listm.concat(listv);
         		for(var i=0;i<listm.length;i++){
		        	player.addSkill(listm[i]);
	        		var info=get.info(listm[i]);
        			if(info&&info.zhuSkill){
           			 if(!player.storage.zhuSkill_wwyj_chengzhi) player.storage.zhuSkill_wwyj_chengzhi=[];
	           		 player.storage.zhuSkill_wwyj_chengzhi.add(listm[i])
	         		}
          		}
            },
             ai:{
                    order:9,
                },
         },
         "wwyj_qianxu":{
         trigger:{
          player:"shaBegin",
     },
     forced:true,
     content:function (){  
        game.playwwyj(['wwyj_qianxu1','wwyj_qianxu2'].randomGet()); 
     },
				mod:{
					targetInRange:function (card,player,target,now){
				 	  if(card.name=='sha'&&get.distance(player,target)<=1) return false;
							if(card.name=='sha') return true;
					},
					targetEnabled:function (card,player,target,now){
						 if(card.name=='sha'&&get.distance(player,target)<=1) return false;
					},
					selectTarget:function (card,player,range){
						if(card.name=='sha'&&range[1]!=-1) range[1]++;
					},					
				},
			},
         "wwyj_yixue":{
              audio:"ext:文武英杰:1",
                trigger:{
                    global:"phaseEnd",
                },
                direct:true,                  
                filter:function (event,player){
          return player.countCards('h')&&event.player!=player&&event.player.isDamaged();
      },
                content:function (){
                "step 0"		
					player.chooseCard('h','是否交给'+get.translation(trigger.player)+'一张手牌？').ai=function(card){
           if(get.attitude(player,trigger.player)>0){
               if(player.countCards('h')>3) return 8-get.value(card);
                   return 6-get.value(card);
                    }
           return 0;         
       };                					
					"step 1"
					if(result.bool){
			     		player.logSkill("wwyj_yixue",trigger.player);
				     	//	player.lose(result.cards);       
            player.$give(result.cards,trigger.player);
            trigger.player.gain(result.cards,player);         
					}
					else{
				    		event.finish();
					}
					"step 2"
					if(trigger.player.countCards('h')>player.countCards('h')){
              player.draw();
          }
          else{
            event.finish();   
          } 
    },
    	ai:{
					expose:0.2,
					order:6,
       threaten:0.3,
				}
            },
         "wwyj_jiangsha1":{              
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                filter:function (event,player){
          return event.card.name=='sha';
      },
                content:function (){
        //game.playwwyj('wwyj_jiangsha');
        player.draw();
        player.turnOver(true);        
    },
            },
         "wwyj_jiangsha":{
              audio:"ext:文武英杰:1",
                trigger:{
                    target:"shaBegin",
                },
                forced:true,
                filter:function (event,player){
          return !event.player.isTurnedOver();
      },
                content:function (){
                if(player.countCards('h')<player.maxHp){
        player.draw(player.maxHp-player.countCards('h'));
        }
        trigger.player.addTempSkill('wwyj_jiangsha1',{player:'shaAfter'});
    },
    ai:{					
					effect:{
						target:function (card,player,target){
							if(get.tag(card,'damage')){
								if(!target.hasFriend()) return;
								var num=1;
								if(get.attitude(player,target)<0){
									if(player.needsToDiscard()){
										num=0.3;
									}
									else{
										num=0.1;
									}
								}
								if(target.hp>=4) return [1,num*-0.5];
								if(target.hp==3) return [1,num*-1.5];
								if(target.hp<=2) return [1,num*-2.5];
							}
						}
					}
				},
            },
          "wwyj_daigeng":{
              audio:"ext:文武英杰:1",
              round:1,
                trigger:{
                    global:"turnOverEnd",
                },              
                filter:function (event,player){
          return event.player.isTurnedOver();
      },
                content:function (){
        player.insertPhase();
    },
            },
      "wwyj_jipin":{
              audio:"ext:文武英杰:1",
                trigger:{
                    global:"drawBegin",
                },       
                check:function (event,player){                    
                    return get.attitude(player,event.player)>0;
                },     
                prompt:function (event,player){					
					return '是否令'+get.translation(event.player)+'额外摸一张牌？';
				},
                filter:function (event,player){
          return event.player.countCards('h')<event.player.hp;
      },
                content:function (){
        trigger.num++;
    },
            },
			"wwyj_chengpiao":{
		          		 audio:"ext:文武英杰:1",
                enable:"phaseUse",
                usable:1,
                //filterCard:true,
                //selectCard:1,
               // position:'he',                
                filterTarget:function (card,player,target){
        return player!=target&&target.countCards('h');
    },
                filter:function (event,player){    
        return player.isAlive();
    },              
               /* check:function (card){
        return 6-get.value(card);
    },*/
                content:function (){
        "step 0"
       // target.gain(cards,player);         
        event.cards=target.getCards('h');
        "step 1"
         player.chooseCardButton(event.cards,1,'选择使用'+get.translation(target)+'的一张手牌').set('filterButton',function(button){           
             return game.hasPlayer(function(current){
                 return player.canUse(button.link,current);
             });
         }).set('ai',function(button){
             return get.value(button.link);
         });
       "step 2"
        if(result.bool){
           // target.lose(result.links[0]);       
            target.$give(result.links[0],player);
            player.chooseUseTarget(result.links[0],true);            
        }       
        else event.finish();
    },
       ai:{
         result:{
            target:function (player,target){
             // if(target.countCards('h')<3) return 1;   
                return -target.countCards('h');
            },
                    },
                    order:8,
                    threaten:0.5,
        },  
            },
        
      "wwyj_touliang1":{
    	mark:true,
    	marktext:"凉",
				mod:{
					cardEnabled2:function (card){
						if(get.type(card)=='basic') return false;
					},
				},
				intro:{
					content:"不能使用或打出基本牌",
				},
				},
                "wwyj_touliang":{
                audio:"ext:文武英杰:1",
                trigger:{
                    player:"phaseEnd",
                },                                       
                direct:true,
                filter:function (event,player){            
        return true;
    },
                content:function (){
                'step 0'      
      var cards=player.getCards('h'); 
      var suits=[];   
      for(i=0;i<cards.length;i++){
          if(!suits.contains(get.suit(cards[i]))){
          suits.push(get.suit(cards[i])); 
          }
      }
      event.num=suits.length;   
       'step 1'
       player.chooseTarget('选择发动【透凉】的目标',[1,event.num],lib.translate.wwyj_touliang_info,function(card,player,target){
            return target!=player&&get.distance(player,target,'attack')<=1;
        }).set('ai',function(target){
            return -get.attitude(_status.event.player,target);            
        });
        'step 2'
        if(result.bool){       
            event.num1=0; 
            event.targets=result.targets;                        
            }   
            else{
               event.finish();
            }   
          'step 3'                            
        if(event.num1<event.targets.length){  
            //event.targets[event.num1].damage();                                           
            game.asyncDraw([event.targets[event.num1],player]);     
            event.targets[event.num1].addTempSkill('wwyj_touliang1',{player:'phaseEnd'});     
            player.logSkill("wwyj_touliang");                              
            event.num1++;
            event.redo();
        }
        else{
            event.finish();      
        } 
    },
            },
              "wwyj_kangxing":{
                audio:"ext:文武英杰:1",
                trigger:{
                    target:"useCardToBefore",
                },
                direct:true,
                priority:8,
                filter:function (event,player){
                if(event.targets.length>1) return false;
           return player!=event.player&&player.countCards('h');   
    },
                content:function (){
    "step 0"               
      player.chooseCard('弃置一张类型相同的手牌，使此牌目标对调','h',function(card){
            return get.type(card)==get.type(trigger.cards[0]);
        }).ai=function(card){
            return 12-get.value(card);
        };                
    "step 1"
    if(result.bool){
        player.logSkill('wwyj_kangxing');
        player.discard(result.cards);
        player.line(trigger.player);
        trigger.target=trigger.player;
        trigger.player=player;
        trigger.untrigger();
        trigger.trigger('useCardToBefore');
       }       
       else event.finish();            
    },
            },            
           
         "wwyj_kangfu":{
                audio:"ext:文武英杰:1",
                trigger:{
                    player:"dyingAfter",
                    source:"dieBegin",
                },
                forced:true,
                 mod:{
                ignoredHandcard:function (card,player){
            if(get.type(card)=='equip'){
                return true;
            }
        },
                    attackFrom:function (from,to,distance){ 
            return distance-1; 
        },
                },               
                filter:function (event,player){
        return player.storage.disableEquip!=undefined&&player.storage.disableEquip.length>0;
    },
                content:function (){ 
				player.removeSkill('wwyj_likedead');
                player.recover();                            
   player.chooseToEnable();          
    },
            },
        "wwyj_chehuo":{
                audio:"ext:文武英杰:1",
                trigger:{
                    global:"gameDrawAfter",
                    player:"enterGame",
                },
                priority:1,
                forced:true,                               
                content:function (){
                    player.disableEquip(1); 
                    player.disableEquip(2);   
                    player.disableEquip(3);     
                    player.disableEquip(4);     
                    player.disableEquip(5);  
                    player.addSkill('wwyj_likedead');  
                    player.say('等等！别退出，别重启，这个是技能效果，我还没死！');    
               },
          },
        "wwyj_jinzhu_shan":{
           audio:["pyzhuren",2],
                trigger:{
                    player:"chooseToRespondBegin",
                },
                direct:true,           
                filter:function (event,player){ 
                if(!player.countCards('he',{type:'equip'})) return false;    
    //if(event.parent.name!='sha') return false;
    if(!lib.filter.cardRespondable({name:'shan'},player,event)) return false;
    if(!event.filterCard({name:'shan'})) return false;
         return true;                                  
    },
                content:function (){
              "step 0"
        player.chooseCard(get.prompt2('wwyj_jinzhu'),'he',function(card){
                        return get.type(card)=='equip';
                    }).set('ai',function(card){
                        if(!_status.event.player.countCards('he',{type:'equip'})){
                            return 8-get.value(card);
                        }
                        return 6-get.value(card);
                    });
                    "step 1"
               if(result.bool){                    
                        trigger.untrigger();
                        trigger.responded=true;
                       // trigger.result={bool:true,card:{name:'shan'}};
                        trigger.result={bool:true,card:{name:'shan',isCard:true}};
                        player.lose(result.cards,ui.special);
                        player.$throw(result.cards);                        
                        player.logSkill('wwyj_jinzhu');   
                       // game.playwwyj('wwyj_jinzhu');                      
                    }                    
        else event.finish();   
    },
            },
            "wwyj_jinzhu_sha":{
            audio:["pyzhuren",2],
                trigger:{
                    player:"chooseToRespondBegin",
                },       
                direct:true,      
                filter:function (event,player){    
               if(!player.countCards('he',{type:'equip'})) return false;   
        if(!event.filterCard({name:'sha'})) return false;
        if(!lib.filter.cardRespondable({name:'sha'},player,event)) return false;                 
         return true;
    },
                content:function (){     
                    "step 0"
        player.chooseCard(get.prompt2('wwyj_jinzhu'),'he',function(card){
                        return get.type(card)=='equip';
                    }).set('ai',function(card){
                        if(!_status.event.player.countCards('he',{type:'equip'})){
                            return 8-get.value(card);
                        }
                        return 6-get.value(card);
                    });
                    "step 1"
                    if(result.bool){
                        trigger.untrigger();
                        trigger.responded=true;
                      //  trigger.result={bool:true,card:{name:'sha'}};
                        trigger.result={bool:true,card:{name:'sha',isCard:true}}; 
                        player.lose(result.cards,ui.special);
                        player.$throw(result.cards);            
                        player.logSkill('wwyj_jinzhu');    
                      //  game.playwwyj('wwyj_jinzhu');                     
                    }                    
        else event.finish();                
    },
            },
            "wwyj_jinzhu":{
                audio:["pyzhuren",2],
                enable:"chooseToUse",             
                group:["wwyj_jinzhu_sha","wwyj_jinzhu_shan"],                
                filter:function (event,player){    
                if(!player.countCards('he',{type:'equip'})) return false;                                            
        if((event.filterCard({name:'sha'},player,event))||
            (event.filterCard({name:'shan'},player,event))||
            (event.filterCard({name:'jiu'},player,event))||
            (event.filterCard({name:'tao'},player,event))){
   return player.isAlive();    
        }
        return false;
    },
                chooseButton:{
                    dialog:function (event,player){
            var list=[];
            if(event.filterCard({name:'sha'},player,event)){
                list.push(['基本','','sha']);
                list.push(['基本','','sha','fire']);
                list.push(['基本','','sha','thunder']);
            }
                    if(event.filterCard({name:'shan'},player,event)){
                list.push(['基本','','shan']);
            }
            if(event.filterCard({name:'tao'},player,event)){
                list.push(['基本','','tao']);
            }
            if(event.filterCard({name:'jiu'},player,event)){
                list.push(['基本','','jiu']);
            }
            return ui.create.dialog('烬铸',[list,'vcard'],'hidden');
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
                    case 'shan':return 3.01;
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
                  filterCard:function (card,player){                    
                      return get.type(card)=='equip';
                },
                selectCard:1,
                position:'he',
                viewAsFilter:function (player){return player.isAlive()},
                viewAs:{name:links[0][2],nature:links[0][3],suit:null,number:null,isCard:true},                                    
                popname:true,
                ignoreMod:true,
                precontent:function (){                            
                    player.logSkill('wwyj_jinzhu'); 
                },
            }
        },
                    prompt:function (links,player){
            return '视为使用一张'+get.translation(links[0][3]||'')+get.translation(links[0][2]);
        },
                },
                ai:{
                    order:function (){
            var player=_status.event.player;
            var event=_status.event;
            if(event.filterCard({name:'jiu'},player,event)&&get.effect(player,{name:'jiu'})>0){
                return 3.1;
            }
            return 2.9;
        },
                    save:true,
                    respondSha:true,
                    respondShan:true,
                    result:{
                        player:1,
                    },
                },
            },
            	"wwyj_likedead":{
	    init:function(player){
            player.classList.add('likedead');
        },
		onremove:function(player){
            player.classList.remove('likedead');
        },
    },		
             "wwyj_tuikeng":{                     
                trigger:{
          player:"changeHp",
     },
     forced:true,
     content:function (){  
        game.playwwyj('wwyj_qianfu1'); 
     },
                mod:{
                    globalTo:function (from,to,distance){
            return distance+to.getDamagedHp();
        },                    
                },
            },
            "wwyj_jilve_delete":{
     forced:true,
     trigger:{
     player:"phaseEnd",
     },
     popup:false,
     filter:function (event,player){
					return true;
				},
     content:function (){
     player.storage.wwyj_jilve=[];
     },
     },
  
			"wwyj_jilve":{
			audio:"ext:文武英杰:1",
				enable:'phaseUse',
				filter:function (event,player){
				if(player.getStat().skill.wwyj_jilve>=player.hp) return false; 
					return  player==_status.currentPhase&&event.type!='wuxie';
				},
				group:["wwyj_jilve_delete"],
				init:function (player){
					if(!player.storage.wwyj_jilve) player.storage.wwyj_jilve=[];
				},
				chooseButton:{
					dialog:function (event,player){
					var list=[];
						for(var i=0;i<lib.inpile.length;i++){
							var name=lib.inpile[i];
							if(player.storage.wwyj_jilve.contains(name)) continue;
							if(name=='sha'){
								list.push(['基本','','sha']);
								list.push(['基本','','sha','fire']);
								list.push(['基本','','sha','thunder']);
							}
							else if(get.type(name)=='trick') list.push(['锦囊','',name]);
							else if(get.type(name)=='basic') list.push(['基本','',name]);
						}
						if(list.length==0){
							return ui.create.dialog('极略已无可用牌');
						}
						return ui.create.dialog('极略',[list,'vcard']);
					},
					filter:function (button,player){
						return lib.filter.filterCard({name:button.link[2]},player,_status.event.getParent());
					},
					check:function (button){
						var player=_status.event.player;
						var players=game.filterPlayer();
						if(player.countCards('h',button.link)) return 0;
						if(button.link[2]=='wuzhong'){
							if(player.countCards('h')<player.hp){
								return 3+Math.random();
							}
							return 0;
						}
						if(button.link[2]=='tao'){
							return 3+Math.random();
						}
						if(button.link[2]=='sha'){
							return 2+Math.random();
						}
						if(button.link[2]=='juedou'){
							return 2+Math.random();
						}
						if(button.link[2]=='guohe'){
							return 2+Math.random();
						}
						if(button.link[2]=='shunshou'){
							for(var i=0;i<players.length;i++){
								if(player.canUse('shunshou',players[i])&&get.attitude(player,players[i])<0){
									return 2+Math.random();
								}
							}
							return 0;
						}
						if(button.link[2]=='tiesuo'){
							return 1+Math.random();
						}
						if(button.link[2]=='jiu'){
							if(get.effect(player,{name:'jiu'})>0){
								return 1+Math.random();
							}
							return 0;
						}
						if(button.link[2]=='nanman'||button.link[2]=='wanjian'||button.link[2]=='taoyuan'||button.link[2]=='wugu'){
							var eff=0;
							for(var i=0;i<players.length;i++){
								if(players[i]!=player){
									eff+=get.effect(players[i],{name:button.link[2]},player,player);
								}
							}
							if(eff>0){
								return 1+Math.random();
							}
							return 0;
						}
						return Math.random();

					},
					backup:function (links,player){
						return {
						  filterCard:true,
         selectCard:1,
         position:'h',
         viewAsFilter:function (player){return player.countCards('h')},   
							popname:true,
							check:function (card){
								return 6-get.value(card);
							},			
						//	viewAs:{name:links[0][2],nature:links[0][3]},
						viewAs:{name:links[0][2],nature:links[0][3],suit:null,number:null,isCard:true},    
							onuse:function (result,player){
		   			 game.playwwyj('wwyj_jilve1'); 
								player.storage.wwyj_jilve.add(result.card.name);
							},
						}
					},
					prompt:function (links,player){
						return '视为使用'+(get.translation(links[0][3])||'')+get.translation(links[0][2]);
					}
				},
				ai:{
					order:4,
					result:{
						player:function (player){
							var allshown=true,players=game.filterPlayer();
							for(var i=0;i<players.length;i++){
								if(players[i].ai.shown==0){
									allshown=false;
								}
								if(get.attitude(player,players[i])>0){
									return 1;
								}
							}
							if(allshown) return 1;
							return 0.8;
						}
					},
					threaten:1.9,
				},
            },
                   
         "wwyj_yanguan":{
                audio:"ext:文武英杰:1",
                trigger:{
                    //global:"useCardToTarget",
                    global:"useCardToPlayer",
                },
                usable:1,     
                direct:true,                   
                filter:function (event,player){
          return event.player!=player&&player.countCards('h')&&event.card&&event.card.isCard&&get.type(event.card)=='trick';
      },                
                content:function (){              
                  'step 0'   
                 player.chooseToDiscard("是否弃置一张手牌对"+get.translation(trigger.player)+"发动严管？").ai=function (card){
                    if(get.attitude(player,trigger.player)<=0){
                        if(player.countCards('h')>3) return 10-get.value(card);
                        return 6-get.value(card);
                    }
                    return 0;
                };                
             'step 1'   
        if(result.bool){               
            //player.discard(event.cards);     
            player.gain(trigger.cards,'gain2');
            var targets=game.filterPlayer();
            trigger.targets.remove(targets);                                                          
            trigger.cancel(); 
            //trigger.getParent().excluded.add(trigger.targets);      
            player.logSkill('wwyj_yanguan');       
        }       
        else{
            player.getStat().skill.wwyj_yanguan--;
            event.finish();   
        }                         
        },
            },
             "wwyj_lilun":{
             audio:"ext:文武英杰:1",
                trigger:{
                    player:"useCard",
                },
                frequent:true,
                filter:function (event,player){
          return event.card&&event.card.isCard&&get.type(event.card)=='trick';
      },
                content:function (){
        'step 0'      
        event.cards=get.cards(3);     
        event.num=2;
          'step 1'        
           player.chooseCardButton('选择获得其中一张牌',event.cards,1).set('ai',function (button){                    
                return 15-get.value(button.link);
           });                        
            'step 2'
          if(result.bool){                
             event.cards.remove(result.links[0]);
             player.gain(result.links[0],'gain2');
             game.log(player,'获得了',result.links[0]);                            
             event.goto(3);
          }
          else event.finish();
            'step 3'            
       /* player.chooseCardButton('理论:选择放在牌堆顶的牌，先选择的在上',2,event.cards,true); 
            'step 4' 
        for(var i=1;i>=0;i--){ 
            event.cards.remove(result.buttons[i].link); 
            ui.cardPile.insertBefore(result.buttons[i].link,ui.cardPile.firstChild); 
        } */   
          player.chooseCardButton('将这'+get.cnNumber(event.num)+'张牌置于牌堆顶',event.cards,true).set('ai',function (button){                    
              return 10-get.value(button.link);
           });                                                
           'step 4'
            if(result.bool){
                event.cards.remove(result.links[0]);                        
                ui.cardPile.insertBefore(result.links[0],ui.cardPile.firstChild);
                game.updateRoundNumber();
             }
             'step 5'                
                event.num--;
                if(event.num>0){
                    event.goto(3);
                }                    
                else event.finish();
        },
            },
                "wwyj_jinxiudraw":{                
                trigger:{
                    player:"phaseEnd",
                },                
                forced:true,
                content:function (){
                game.playwwyj('wwyj_jinxiu1'); 
                player.draw(player.storage.wwyj_jinxiu);
                player.storage.wwyj_jinxiu=0;
                player.unmarkSkill('wwyj_jinxiu');
                player.update();
               },
               },           
                 "wwyj_jinxiu":{
              //  audio:"ext:文武英杰:1",
                trigger:{
                    source:"damageEnd",
                },    
                marktext:"修",
                intro:{
                    name:"进修",
                    content:"已有#个修标记",
                },
                group:"wwyj_jinxiudraw",            
                forced:true,
                init:function (player){
                    player.storage.wwyj_jinxiu=0;
                    player.unmarkSkill('wwyj_jinxiu');
                },
                content:function (){
                player.storage.wwyj_jinxiu++;
                player.markSkill('wwyj_jinxiu');
                player.update();
               },
               },   
          
            "wwyj_ciya":{
                audio:"ext:文武英杰:1",
                trigger:{
                    player:"phaseDrawBegin",
                },   
                direct:true,             
                filter:function (event,player){				
					return game.hasPlayer(function(current){
            return current!=player&&get.distance(current,player,'attack')<=1;
         });                  
				},			
                content:function (){
               'step 0'                     
             event.num=0;
             player.chooseTarget(get.prompt2('wwyj_ciya'),[1,Infinity],function(card,player,target){
            return target!=player&&get.distance(target,player,'attack')<=1;
        },function(target){
            return -get.attitude(player,target);
        });        
           'step 1' 
        if(result.bool){   
            player.logSkill('wwyj_ciya');     
            trigger.num--;           
            event.targets=result.targets;
        }
        else{
            event.finish();
        }
    'step 2' 
        if(event.num<event.targets.length){
            player.useCard({name:'sha',isCard:true},event.targets[event.num],false);         
            event.num++;
            event.redo();
         }
         else event.finish();     
                },
                 ai:{			
              					order:5,
             			},
            },
                
            "wwyj_qianzhui":{
                audio:["xingshang",2],
                trigger:{
                    global:"dieBegin",
                },
                filter:function (event,player){
                    return player!=event.player;   
                },
                forced:true,
                juexingji:true,			
                mark:true,
                init:function (player){
				    player.storage.wwyj_qianzhui=false;
		        },
                content:function (){   
                'step 0'   
                player.line(trigger.player,'green');   
                player.$fullscreenpop('( •̥́ ㉨ •̀ू )','fire');   
                ui.background.setBackgroundImage('extension/文武英杰/wenwuyingjie.jpg');                
                player.storage.wwyj_qianzhui=true;                
                player.awakenSkill('wwyj_qianzhui'); 
                'step 1'   
                //event.skills=['wwyj_qiandao','wwyj_yingguai'];
                 event.skills=[];
        var skills=player.skills.slice(0);
        for(var i=0;i<skills.length;i++){
            var info=get.info(skills[i])
            if(info!=undefined&&!info.charlotte&&(!info.unique||info.gainable)){
                event.skills.push(skills[i]);
                if(event.skills.contains('wwyj_qianzhui')){
                    event.skills.remove('wwyj_qianzhui');
                }
                    event.skills.removeArray(['jstx_jisha','xjstx_jisha','xwj_jisha','xin_jisha']);
                   // if(event.skills.contains('jstx_jisha')) event.skills.remove('jstx_jisha');
                 //   if(event.skills.contains('xjstx_jisha')) event.skills.remove('xjstx_jisha');
                   // if(event.skills.contains('xwj_jisha')) event.skills.remove('xwj_jisha');
                 //   if(event.skills.contains('xin_jisha')) event.skills.remove('xin_jisha');
                  
            }
        };      
          'step 2'   
        if(event.skills.length>0){
            player.chooseControl(event.skills).set('prompt','请选择你的要失去的技能').set('ai',function(){
            return event.skills.randomGet();
            });
        }
        else{
             event.goto(4);
        }
          'step 3'                       
        player.removeSkill(result.control);
        player.popup(result.control,'fire');       
        game.log(player,'失去了技能','#g【'+get.translation(result.control)+'】');
         'step 4'   
                 event.skills=[];
        var skills=trigger.player.skills.slice(0);
        for(var i=0;i<skills.length;i++){
            var info=get.info(skills[i])
            if(info!=undefined&&!info.charlotte&&(!info.unique||info.gainable)) event.skills.push(skills[i]);
        };      
          'step 5'   
        if(event.skills.length>0){
            player.chooseControl(event.skills).set('prompt','请选择你的要获得的技能').set('ai',function(){
            return event.skills.randomGet();
            });
        }
        else{
             event.finish();
        }
          'step 6'               
        player.addSkill(result.control);       
        player.popup(result.control,'fire');       
        var name=trigger.player.name;   
        player.markCharacter(name,null,true,true);  
        player.mark(result.control,{
            name:get.translation(result.control),
            content:lib.translate[result.control+'_info']
        });
        player.flashAvatar('wwyj_qianzhui',result.control);   
        game.log(player,'获得了技能','#g【'+get.translation(result.control)+'】');
                                  
              /* 
              //  原技能：                   
                'step 0'
                player.line(trigger.player,'green');   
                player.$fullscreenpop('( •̥́ ㉨ •̀ू )','fire');    
                player.removeSkill('wwyj_qiandao');
                player.removeSkill('wwyj_yingguai');
                'step 1'    
        var name=trigger.player.name;                      
       //方法一：
    //   var list=[];
         //var skills=lib.character[name][3];
         //for(var j=0;j<skills.length;j++){
        // if(lib.translate[skills[j]+'_info']&&lib.skill[skills[j]]&&!lib.skill[skills[j]].unique){
       //if(lib.translate[skills[j]+'_info']&&lib.skill[skills[j]]){
      //  list.push(skills[j]);
       //  }
         //}
       // player.addSkill(list);
       //方法二：
       var skills=lib.character[name][3].slice(0);
       player.addSkill(skills);
       player.markCharacter(name,null,true,true);      
       player.storage.wwyj_qianzhui=true;
       player.awakenSkill('wwyj_qianzhui');        */     
    },
            },
            "wwyj_yingguai":{
                audio:"ext:文武英杰:1",
				trigger:{player:'damageEnd'},
				filter:function (event,player){
					return player.isAlive();
				},				
				direct:true,
				content:function (){
				 "step 0"
				player.chooseTarget(get.prompt2('wwyj_yingguai'),function(card,player,target){
            return target!=player;
        },function(target){
            return -get.attitude(player,target);
        });        
        "step 1"
        if(result.bool){
            player.logSkill('wwyj_yingguai',result.targets[0]);
            var card=game.createCard(['lebu','bingliang','shandian'].randomGet());
			      		result.targets[0].addJudge(card);
			      		result.targets[0].$draw(card);
			      		game.delay();
        }
        else{
            event.finish();
        }        					
				},
				ai:{
					maixie_defend:true,
					order:5,
				}
			},        
         "wwyj_qiandao":{
                audio:["tuxi",2],
                trigger:{
                    global:"judgeEnd",
                },     
                frequent:true,
                check:function (event,player){
                   // if(get.attitude(player,event.player)>0&&event.card.name=='lebu'&&result.suit!='heart') return true;
                    return get.attitude(player,event.player)<=0;
                },
                filter:function (event,player){
        return player!=event.player&&event.player.countCards('he');
    },
                content:function (){            
                    player.logSkill('wwyj_qiandao',trigger.player);
                    player.gainPlayerCard(trigger.player,'he',true);                                                           
                },
                ai:{			
              					order:5,
             			},
                },
        "wwyj_zuikui":{
                audio:["huoshou1",2],
                trigger:{
                    global:["dieBegin","turnOverAfter"],
                },   
                //forceDie:true,
                forced:true,
                filter:function (event,player,name){                
                if(name=='turnOverAfter') return event.player.isTurnedOver();
        return game.hasPlayer(function(current){
                    return current!=player&&current.countCards('he');
         });                   
    },
                content:function (){                
                    'step 0' 
       player.say('我能令老大断更，我开心'); 
       event.num=0;                       
      event.targets=game.filterPlayer(function(current){
           return current!=player&&current.countCards('he');
         });                             
        event.targets.remove(player);
        event.targets.sort(lib.sort.seat);             
            'step 1'   
        if(num<event.targets.length){
        player.line(event.targets[num],'green');
        event.targets[num].chooseToDiscard('he',true);   
        //event.targets[num].discardPlayerCard(event.targets[num],'he',true);      
        event.num++;
        event.redo();           
        }
        else{
            event.finish();
        }                             
                },
                ai:{			
              					threaten:2.5,
             			},
                },
            "wwyj_jiaoxiao":{
                audio:"ext:文武英杰:2",
                trigger:{
                    player:"damageBegin",
                },     
                forced:true,
                filter:function (event,player){
        return event.card.name=='sha';
    },
                content:function (){ 
                     if(trigger.source.countCards('he')){
                         player.gainPlayerCard(trigger.source,'he',true); 
                     }
                     trigger.num++;
                     player.say(['我要将无名杀的扩展功能删了，改成龙魂杀','你们等着，等我回来，绝对给你们一波制裁'].randomGet());
                     trigger.source.say('拜托你了，没啥事就别到处BB啦，现在知道错了吧？');
                },
                ai:{			
              					threaten:2.5,
             			},
                },
                "wwyj_daixue":{
                audio:"ext:文武英杰:1",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
                if(player.hasSkill('wwyj_caizhi1')&&target.hasSkill('wwyj_caizhi1')) return false;
                if(player.hasSkill('wwyj_caizhi2')&&target.hasSkill('wwyj_caizhi2')) return false;
                if(player.hasSkill('wwyj_caizhi3')&&target.hasSkill('wwyj_caizhi3')) return false;
                if(player.hasSkill('wwyj_caizhi4')&&target.hasSkill('wwyj_caizhi4')) return false;
        return player!=target;
    },
                filter:function (event,player){
        return player.hasSkill('wwyj_caizhi1')||player.hasSkill('wwyj_caizhi2')||player.hasSkill('wwyj_caizhi3')||player.hasSkill('wwyj_caizhi4');
    },
                content:function (){               
                        'step 0'
                       var list=[];
                if(player.hasSkill('wwyj_caizhi1')) list.push('wwyj_caizhi1');
                if(player.hasSkill('wwyj_caizhi2')) list.push('wwyj_caizhi2');
                if(player.hasSkill('wwyj_caizhi3')) list.push('wwyj_caizhi3');
                if(player.hasSkill('wwyj_caizhi4')) list.push('wwyj_caizhi4');
                player.chooseControl(list,function(){                                       
                    return Math.floor(Math.random()*list.length);
                }).set('prompt','选择一项需要移动的技能');       
                 'step 1'   
                player.popup(get.translation(result.control));        
                player.removeSkill(result.control);       
                player.unmarkSkill(result.control);
                target.addSkill(result.control);       
                target.markSkill(result.control);
                player.update();
                target.update();
    },
                ai:{
                    threaten:0.3,
                    result:{
                        target:function (player,target){
                        if(player.hp<3) return 0;
                return get.recoverEffect(target,player,target);
            },
                    },
                    order:9,
                },
            },
            "wwyj_caizhidamage":{
                trigger:{
                    player:"damageBegin",
                },
                forced:true,                
                filter:function (event,player){                            
        return player.hasSkill('wwyj_caizhi1')||player.hasSkill('wwyj_caizhi2')||player.hasSkill('wwyj_caizhi3')||player.hasSkill('wwyj_caizhi4');
    },
                content:function (){
         "step 0"                    
        var list=[];
        if(player.hasSkill('wwyj_caizhi1')) list.push('wwyj_caizhi1');
        if(player.hasSkill('wwyj_caizhi2')) list.push('wwyj_caizhi2');
        if(player.hasSkill('wwyj_caizhi3')) list.push('wwyj_caizhi3');
        if(player.hasSkill('wwyj_caizhi4')) list.push('wwyj_caizhi4');        
        var list2=list.randomGet();
        player.popup(get.translation(list2));        
        player.removeSkill(list2);       
        player.unmarkSkill(list2);
        player.update();
        if(list2=='wwyj_caizhi1'){
            game.playwwyj('wwyj_qingxian1'); 
        }       
        if(list2=='wwyj_caizhi2'){
            game.playwwyj(['wwyj_gainian1','wwyj_gainian2'].randomGet());     
        }             
        if(list2=='wwyj_caizhi3'){
            game.playwwyj('wwyj_jilve1'); 
        }     
        if(list2=='wwyj_caizhi4'){
            game.playwwyj('wwyj_lilun1'); 
        }                                        
       "step 1"   
        trigger.num--;
    },
            }, 
            "wwyj_caizhigaiming":{       
        trigger:{
           player:"enterGame",
           global:"gameStart",
        },
        forced:true,
        priority:2020,
        filter:function (event,player){           
            return player.name=='wwyj_liangchas';                                   
    },                
            content:function (){
             "step 0"                
             player.chooseBool('是否改名换姓为【玉蝴蝶】？').set('ai',function(){
                   return true;                            
               
                 });                  
             "step 1"
             if(result.bool){ 
               //lib.translate['wwyj_liangchas']='玉蝴蝶';
               ui.background.setBackgroundImage('extension/文武英杰/wwyj_yuhudiebz.jpg');                
               player.init("wwyj_yuhudie");               
               //player.node.name.innerHTML='玉<br>蝴<br>蝶';
               //game.broadcastAll()+player.node.avatar.setBackgroundImage('extension/文武英杰/wwyj_yuhudie.jpg'); 	     
             }                          
             else event.finish();   
               },
               },                                          
            "wwyj_caizhi":{
                trigger:{                   
                    player:"phaseBegin",
                },
                group:["wwyj_caizhidamage","wwyj_caizhigaiming"],
			    derivation:["wwyj_kazhan","wwyj_gainian","wwyj_jilve","wwyj_lilun"],
                forced:true,
                priority:2020,
                filter:function (event,player){
        return !player.hasSkill('wwyj_caizhi1')||!player.hasSkill('wwyj_caizhi2')||!player.hasSkill('wwyj_caizhi3')||!player.hasSkill('wwyj_caizhi4');
    },
                content:function (){                                 
                var list=[];
                if(!player.hasSkill('wwyj_caizhi1')) list.push('wwyj_caizhi1');
                if(!player.hasSkill('wwyj_caizhi2')) list.push('wwyj_caizhi2');
                if(!player.hasSkill('wwyj_caizhi3')) list.push('wwyj_caizhi3');
                if(!player.hasSkill('wwyj_caizhi4')) list.push('wwyj_caizhi4');
                var list2=list.randomGet();
                player.popup(get.translation(list2));        
                player.addSkill(list2);
                //player.flashAvatar('wwyj_caizhi',list2);        
                player.markSkill(list2);
                player.update();      
                if(list2=='wwyj_caizhi1'){
                    game.playwwyj('wwyj_qingxian1'); 
                }       
                if(list2=='wwyj_caizhi2'){
                    game.playwwyj(['wwyj_gainian1','wwyj_gainian2'].randomGet());     
                }             
                if(list2=='wwyj_caizhi3'){
                    game.playwwyj('wwyj_jilve1'); 
                }     
                if(list2=='wwyj_caizhi4'){
                    game.playwwyj('wwyj_lilun1'); 
                }                                                             
    },
            },           
            "wwyj_caizhi4":{
                marktext:"画",
                forced:true,
                locked:true,
                intro:{
                    name:"画",
                    content:"视为拥有【理论】",
                },
                group:["wwyj_lilun"],
            },
            "wwyj_caizhi3":{
                marktext:"书",
                forced:true,
                locked:true,
                intro:{
                    name:"书",
                    content:"视为拥有界【极略】",
                },
                group:["wwyj_jilve","wwyj_jilve_delete"],
            },
            "wwyj_caizhi2":{
                forced:true,
                locked:true,
                marktext:"棋",
                intro:{
                    name:"棋",
                    content:"视为拥有【概念】",
                },
                group:["wwyj_gainian"],
            },
            "wwyj_caizhi1":{
                forced:true,
                locked:true,
                marktext:"琴",
                intro:{
                    name:"琴",
                    content:"视为拥有【卡战】",
                },
                group:['wwyj_kazhan'],
            }, 
        "wwyj_qunying":{
        	audio:"ext:文武英杰:1",
        	direct:true,				
			trigger:{player:'phaseEnd'},
			filter:function (event,player){
				    return game.hasPlayer(function(current){
				return player!=current&&Math.abs(player.countCards('h')-current.countCards('h'))<=Math.abs(player.hp-current.hp);
			});					
				},
				content:function(){
					"step 0"										
				player.chooseTarget(get.prompt2('wwyj_qunying'),1,function(card,player,target){
            return player!=target&&Math.abs(player.countCards('h')-target.countCards('h'))<=Math.abs(player.hp-target.hp);
        },function(target){
            if(player.countCards('h')<target.countCards('h')) return -get.attitude(player,target);
            return get.attitude(player,target);
        });        
           "step 1"
        if(result.bool){ 
             player.logSkill("wwyj_qunying",result.targets[0]);                
             player.swapHandcards(result.targets[0]); 
             if(player.countCards('h')==result.targets[0].countCards('h')){
               game.asyncDraw([player,result.targets[0]]); 
             }                        
        }
        else{
            event.finish();
        }    
				},
			},
		 "_wwyj_Sukincen":{       
        trigger:{
           player:"enterGame",
           global:"gameStart",
        },        
        prompt:function (event,player){					
				return '是否将“小苏”的武将名改为“Sukincen”？';
		  },
        filter:function (event,player){           
            return game.hasPlayer(function(current){
               return current.name=='wwyj_Sukincen';
         });                             
    },                
        content:function (){                               
            if(player.name=='wwyj_Sukincen'){
                 game.playAudio('..','extension','文武英杰','wwyj_dansha');
                 player.node.name.innerHTML='';
                 game.broadcastAll(function(player){
 			     text = document.createElement('div');
 			     text.innerHTML='Sukincen';						 		
		 	     text.style.backgroundSize='cover';		 	    
			  	 text.style.width='100%';
				 text.style.height='100%';
				 //text.style.left='25%';			
				 text.style.transform='translateY(-200px)';
				 text.style['font-size']='17px';
			     text.style['text-align']='center';
		     	 text.style['font-family']='shousha';
		     	 text.style['text-shadow']='rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,black 0 0 1px';						 				 
				 player.node.avatar.appendChild(text);
				 ui.refresh(text);
				 text.style.transform='';
			     },player);
            }  
        },
        },                		
        "wwyj_fengliu":{
            audio:"ext:文武英杰:1",
                 trigger:{
                    global:"gameStart",
                    player:["enterGame","phaseBegin","phaseEnd"],
                },    
                frequent:true,
                init:function (player){
                    player.storage.wwyj_fengliu=[];
                },    
                filter:function (event,player){
        return player.isAlive();
    },
                content:function (){               
         		'step 0'				         	        		
					var list;
					if(_status.characterlist){
						list=[];
						for(var i=0;i<_status.characterlist.length;i++){
							var name=_status.characterlist[i];
							if(lib.character[name][0]=='female') list.push(name);
						}
					}
					else if(_status.connectMode){
						list=get.charactersOL(function(i){
							return lib.character[i][0]!='female';
						});
					}
					else{
						list=get.gainableCharacters(function(info){
							return info[0]=='female';
						});
					}
					var players=game.players.concat(game.dead);
					for(var i=0;i<players.length;i++){
						list.remove(players[i].name);
						list.remove(players[i].name1);
						list.remove(players[i].name2);
					}					
					player.chooseButton(true).set('ai',function(button){
						return get.rank(button.link,true)-lib.character[button.link][2];
					}).set('createDialog',['选美：请选择一名佳丽当你的伴侣',[list.randomGets(5),'character']]);			
					'step 1'	
			
        if(result.bool){
           /* if(lib.config.mode=='guozhan'){
                  player.replaceFujiang(result.links[0]);                  
            }
            else{                  
                  player.addFujiang(result.links[0]);                         
            } 
            */
            player.flashAvatar('wwyj_fengliu',result.links[0]);
            player.unmark(player.storage.wwyj_fengliu+'_charactermark');
            var name=result.links[0];
            var list=[];
            var skills=lib.character[result.links[0]][3];
            for(var j=0;j<skills.length;j++){             
                list.push(skills[j]);               
            }     
            player.addAdditionalSkill('wwyj_fengliu',list);
            player.markCharacter(name,null,true,true);            
            player.storage.wwyj_fengliu=name;       
        }         								
    },
                ai:{                   
                    order:9,
                },
            },
               "wwyj_baozaorecover":{
                audio:"ext:文武英杰:1",
                trigger:{
                    global:"damageEnd",
                },     
                forced:true,
                content:function (){ 
                     if(player.isDamaged()){
                         player.recover();
                     }
                     else player.draw();
                },
                },
               "wwyj_baozao":{
                audio:"ext:文武英杰:1",
                trigger:{
                    player:"dyingBegin",
                },     
                priority:2020,
                mark:true,
                limited:true,
			           	init:function (player){
				             	player.storage.wwyj_baozao=false;
		           		},
                check:function (event,player){
                if(!event.source.isEmpty(2)) return 0;
                    return get.attitude(player,event.source)<=0;
                },         
                filter:function (event,player){
                return event.source&&event.source.isAlive();
    },                
                content:function (){   
         "step 0" 
         //ui.background.setBackgroundImage('extension/文武英杰/wenwuyingjie.jpg');  
         player.$fullscreenpop('暴躁AI','thunder');	              
         event.current = player.next;
         player.addTempSkill('wwyj_baozaorecover');
         player.storage.wwyj_baozao=true;
         player.awakenSkill('wwyj_baozao');
         "step 1"
        if (trigger.source.isDead()||event.current==player) {
            event.finish();
        } else {
            event.current.useCard({name: 'sha',isCard:true},trigger.source, false);
        }
         "step 2"     
            event.current=event.current.next;                             
            event.goto(1);
    },
            },
              "wwyj_xipi":{
                audio:"ext:文武英杰:1",
                trigger:{
                    target:"useCardToBefore",
                },
                forced:true,
                priority:2020,
                filter:function (event,player){
                if(event.targets.length>1) return false;
                if(event.player==player) return false;
               return game.hasPlayer(function(current){
                    return current!=player&&current.countCards('he');
         });                             
    },                
                content:function (){         
        var targets=game.filterPlayer(function(current){
                    return current!=player&&current.countCards('he');
         });                             
        targets.remove(player);
        targets.sort(lib.sort.seat);
        event.target=targets.randomGet();
        player.line(event.target,'green');       
        player.gainPlayerCard(event.target,'he',true,'嘻皮');                                              
    },
            },
            "wwyj_jiedan":{
                popup:false,
                audio:"ext:文武英杰:2",
                global:"wwyj_xiadan",
               	ai:{			
              					threaten:2.5,
             			},
            },
            "wwyj_xiadan":{
                enable:"phaseUse",
                filter:function (event,player){
        if(player.hasSkill('wwyj_xiadan1')) return false;
        return player.countCards('he')&&game.hasPlayer(function(current){
            return current.hasSkill('wwyj_jiedan');
        });
    },
                direct:true,
                delay:0,
                popup:false,
                filterCard:true,
                discard:false,
                lose:false,
                position:"he",
                prompt:function (){
        var player=_status.event.player;
        var list=game.filterPlayer(function(current){
            return current.hasSkill('wwyj_jiedan');
        });
        var str='将一张牌交给'+get.translation(list);
        if(list.length>1) str+='中的一人';
        return str;
    },
                check:function (card){
        if(card.name=='sha') return 5;
        return 8-get.value(card);
    },
                content:function (){
        "step 0"
        var targets=game.filterPlayer(function(current){
            return current.hasSkill('wwyj_jiedan');
        });
        if(targets.length==1){
            event.target=targets[0];
            event.goto(2);
        }
        else if(targets.length>0){
            player.chooseTarget(true,'选择【下单】的目标',function(card,player,target){
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
            player.logSkill('wwyj_jiedan',event.target);
            player.addTempSkill('wwyj_xiadan1','phaseUseEnd');
            //event.card=cards[0];
           // if(event.target!=player){
                player.give(cards,event.target);
                event.target.recover();
                event.target.chooseToUse({name:'sha'},'是否使用一张【杀】？').logSkill='wwyj_xiadan';
              //  event.target.chooseUseTarget('选择视为使用【杀】的目标',{name:'sha'},false,false);
                event.target.say(['君子爱财，取之有道','受人钱财，替人消灾'].randomGet());
            //}
        }
        else{
            event.finish();
        }
        "step 3"        	
					var list1=[],list2=[];
					for(var i=0;i<lib.inpile.length;i++){
						var type=get.type(lib.inpile[i]);
						if(type=='basic'){
							list1.push(['基本','',lib.inpile[i]]);
						}
						else if(type=='trick'){
							list2.push(['锦囊','',lib.inpile[i]]);
						}					
					}
					player.chooseButton([get.prompt('wwyj_xiadan'),[list1.concat(list2),'vcard']]).set('filterButton',function(button){											
						return true;
					}).set('ai',function(button){
		  			//return Math.random();				
				switch(button.link[2]){
				 		case 'du':return 0;
							case 'sha':return 3+9*Math.random();
							case 'tao':return 5.5+9*Math.random();
							case 'jiu':return 3+9*Math.random();
							case 'shan':return 4+9*Math.random();
							case 'wuzhong':return 4.5+9*Math.random();
							case 'shunshou':return 4.5+9*Math.random();
							case 'nanman':return 3+9*Math.random();
							case 'wanjian':return 3+9*Math.random();
							default:return 9*Math.random();
						}							
					}).set('rand',[Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random()],Math.random());
				 "step 4"       
					if(result.bool){
					player.gain(get.cardPile(function(card){
						return card.name==result.links[0][2];
					}),'gain2');						
						player.logSkill('wwyj_xiadan');			
						}							
					else{
						event.finish();
					}						
    },
                ai:{
                    order:2,
                    threaten:1.5,
                    result:{
                        player:function (player,target){
                var target=game.findPlayer(function(current){
                    return current.hasSkill('wwyj_jiedan');
                });
                if(target){
                    return get.attitude(player,target);
                }
            },
                    },
                },
            },
            "wwyj_xiadan1":{
            },
            "wwyj_huikeng":{
                audio:"ext:文武英杰:1",
                enable:"phaseUse",
                usable:1,
                selectTarget:-1,
                multitarget:true,
                multiline:true,
                filterTarget:function (card,player,target){
        return player!=target;
    },
                content:function (){               
       "step 0"         
       event.current=player.next;  
       //player.removeSkill('wwyj_huikeng');  
      /* 	game.broadcastAll(function(player){       	
       	var Animation = ui.create.div();
       	//Animation.style.backgroundImage = player.node.avatar.style.backgroundImage;
       	Animation.setBackgroundImage('extension/文武英杰/wwyj_huikeng.gif'); 						
   				Animation.style.backgroundSize='cover';
   				Animation.style.backgroundPosition='center';
						Animation.style["z-index"] = 7;						
						Animation.style.width = (120/715)*document.body.clientHeight + "px";
						Animation.style.height= (120/715)*document.body.clientHeight + "px";						
						if(player==game.me){						
							Animation.style.left= (document.body.clientWidth-120)/2+"px";
							Animation.style.top = "50%";
							ui.window.appendChild(Animation);
						}
						else {
						Animation.style.left= (document.body.clientWidth-120)/2+"px";
							Animation.style.top = "50%";
							ui.window.appendChild(Animation);
							
						}												         
						setTimeout(function(){
    Animation.delete();
},4500);
			},player);
			*/
       "step 1"                                
        event.list=get.gainableCharacters(function(info){
            return info[2]>=0;
        });
        var players=game.players.concat(game.dead);
        for(var i=0;i<players.length;i++){
            event.list.remove(players[i].name);
            event.list.remove(players[i].name1);
            event.list.remove(players[i].name2);
        }
        event.list=event.list.randomGets(game.players.length-1);           
         "step 2"    
          event.dialog=ui.create.dialog('选择一张武将牌替换'+get.translation(event.current)+'的武将牌','hidden');
          event.dialog.add([event.list,'character']);   
          if(event.dialog.buttons.length==1){
              player.draw();
              event.current.init(event.dialog.buttons[0].link);
              event.finish();
              }
           else{   
          player.chooseButton(event.dialog,true).ai=function(button){
                   if(get.attitude(player,event.current)>0){
                            return get.rank(button.link,true);
                        }
                        else{
                            return -get.rank(button.link,true);
                        }
        };    
        }
        "step 3"                          
             if(result.bool){
                 player.draw();
                 var a=event.current.hp;
                 var b=event.current.maxHp;
                 event.current.init(result.buttons[0].link); 
                 event.current.maxHp=b;
                 event.current.hp=a;                 
                 event.current.update();                 
                 event.list.remove(result.buttons[0].link);
              /*   var button;  
                 for(var i=0;i<event.dialog.buttons.length;i++){  
                     if(event.dialog.buttons[i].link==result.buttons[0].link){  
                         button=event.dialog.buttons[i];                           
                     }  
                 }   
                 if(button) event.dialog.buttons.remove(button);    */                                       
              }   
              else{
                  event.finish();
              }   
                 "step 4"      
                 if(event.current!=player.previous){
                     event.current=event.current.next;
                     event.goto(2);
                 }
                 else{ 
                     //player.removeSkill('wwyj_huikeng');                      
                     event.finish();
                 }
    },
                ai:{
                    order:9,
                    result:{
                        player:1,
                    },
                },
            },
           /*  "wwyj_ancha2":{
                audio:"ext:文武英杰:1",
                trigger:{
                    player:"changeHp",
                },                  
                frequent:true,         
                priority:2020,            
                filter:function (event,player){
        return !player.hasSkill('wwyj_huikeng')&&player.hp<2;
    },
                content:function (){                        
                    player.addSkill('wwyj_huikeng');                           
                },
                },*/
            "wwyj_ancha":{
                audio:"ext:文武英杰:1",
                trigger:{
                    global:"damageEnd",
                },
                //group:"wwyj_ancha2",
                derivation:"wwyj_huikeng",
                check:function (event,player){
                    return get.attitude(player,event.player)>0;
                },
                filter:function (event,player){
        return event.source&&player!=event.source&&event.player.isAlive();
    },
                content:function (){    
                "step 0"
                if(trigger.source.countCards('h')){
                    player.viewHandcards(trigger.source);
                }
                "step 1"
                if(player!=trigger.player){
                    trigger.player.draw();
                }
                else{     
                    player.draw();                    
                    player.turnOver(false);                       
                    player.insertPhase();
                }                                 
    },
            },
            "wwyj_qianfu":{
                audio:"ext:文武英杰:1",
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                filter:function (event,player){
        return !player.isTurnedOver();
    },
                mod:{
                    globalTo:function (from,to,distance){
            if(to.isTurnedOver()) return distance+Infinity;
        },
                },
                content:function (){          
       player.turnOver();    
       player.say(['我先休息一会儿，没什么事就别来烦我','有事启奏，没事退朝'].randomGet()); 
    },
            },
            "wwyj_chuangshi":{
                trigger:{
                    global:"gameDrawAfter",
                    player:"enterGame",
                },
                audio:"ext:文武英杰:1",
                unique:true,
                forced:true,
                juexingji:true,
                priority:Infinity,
                init:function (player){
				             	player.storage.wwyj_chuangshi=false;
		           		},
                content:function (){               
       "step 0" 
       player.$fullscreenpop('创世','fire'); 
       		
       	game.broadcastAll(function(player){
       	
       	var Animation = ui.create.div();
       	//Animation.style.backgroundImage = player.node.avatar.style.backgroundImage;  
        Animation.setBackgroundImage('extension/文武英杰/wwyj_chuangshi.gif'); 	   									
   				Animation.style.backgroundSize='cover';
   				Animation.style.backgroundPosition='center';
						Animation.style["z-index"] = 7;
						
						Animation.style.width = (360/715)*document.body.clientHeight + "px";
						Animation.style.height= (360/715)*document.body.clientHeight + "px";
						
						if(player==game.me){						
							Animation.style.left= (document.body.clientWidth-120)/2.5+"px";
							Animation.style.top = "25%";
							ui.window.appendChild(Animation);
						}
						else {
						Animation.style.left= (document.body.clientWidth-120)/2.5+"px";
							Animation.style.top = "25%";
							ui.window.appendChild(Animation);
							/*Animation.style.left= "8%";
							Animation.style.top = "25%";
							player.appendChild(Animation);*/
						}
												         
						setTimeout(function(){
						ui.window.removeChild(Animation);
       //Animation.delete();
},7500);

			},player);
					 player.storage.wwyj_chuangshi=true;			
       player.awakenSkill("wwyj_chuangshi");
       game.delay(2);
       event.current=player.next;          
        event.list=[];
        event.list=['guanyu','zhangfei','zhaoyun','machao','mazhong','gongsunzan','huanggai','lvmeng','yujin','xuzhu'];
        "step 1"         
        event.current.chooseButton(ui.create.dialog('请您选择一名武将牌替换你的武将牌',[event.list,'character'],true),function(button){                 
                     return Math.random();
                       // return get.rank(button.link,true);
                 });                  
                "step 2"                    
                 if(result.bool){
                 event.current.init(result.links[0]);  
                 event.list.remove(result.links[0]);                                                    
                  }      
                 "step 3"      
                 if(event.current!=player.previous){
                     event.current=event.current.next;
                     event.goto(1);
                 }
                 else{
                     event.finish();
                 }
    },
                ai:{
                    order:9,
                },
            },
			"wwyj_liangcha":{
		    	trigger:{global:'gameStart'},
        forced:true,
        unique:true,
        priority:2019,		
     content:function (){     
      //此技能的代码已被隐藏    				
     },               
            },
			"wwyj_fanghua":{
        trigger:{player:'phaseBegin'},
        forced:true,
        unique:true,
        priority:2019,		
     content:function (){    
      //此技能的代码已被隐藏     				
     },               
            },
            "wwyj_meiying":{
        trigger:{player:'phaseUseBegin'},
        forced:true,
        unique:true,
        priority:2019,		
     content:function (){       
      //此技能的代码已被隐藏   		
     },                            
            },			
            
},

translate:{
            
    //"wwyj_moban":"模板",
    //  "wwyj_moban_info":"模板",
    "wwyj_jiegeng":"接更",
    "wwyj_jiegeng_info":"每名角色的回合限一次，当一名其他角色使用一张单目标的基本牌或非延时性锦囊牌时（借刀杀人、无懈可击除外），你可视为你对目标角色也使用此牌",
	"wwyj_qingzhong":"青冢",
    "wwyj_qingzhong_info":"出牌阶段限一次，你可以弃置任意张基本牌，并指定你攻击范围内等量名其他角色，分别视为对这些角色使用了一张无次数限制的【杀】",            
    "wwyj_fengyun":"风云",
    "wwyj_fengyun_info":"</font><font color=#f00>锁定技</font> 当你受到伤害后，你从随机展示的三个【文武英杰】扩展的技能中选择一个获得(本技能除外)",      
    "wwyj_feixue":"飞雪",
    "wwyj_feixue_info":"当你使用【杀】时，你可令此【杀】额外指定所有武将牌背面朝上的角色，然后令这些角色翻面",
	"wwyj_zangyue":"葬月",
    "wwyj_zangyue_info":"</font><font color=#f00>锁定技</font> 回合结束阶段，你可选择一种花色，然后令所有其他角色在其下个结束阶段前，其回合内使用该花色的牌后将武将牌翻面",
	"wwyj_gucheng":"孤城",
    "wwyj_gucheng_info":"</font><font color=#f00>锁定技</font> 游戏轮数为奇数/偶数的回合，你不能成为点数为奇数/偶数的【杀】的目标",            
    "wwyj_meihua":"美化",
    "wwyj_meihua_info":"每名角色的回合限一次，当一名角色使用一张单一目标的非装备牌、非延时锦囊牌的牌时，你可展示牌堆顶的两张牌，选择改用其中合理的一张牌",     
    "wwyj_duange":"短歌",
    "wwyj_duange_info":"摸牌阶段摸牌时，你可放弃摸牌，改为展示牌堆顶的五张牌，然后选择获得其中任意张点数同为奇数或同为偶数的牌，再将剩下的牌按先后顺序置于牌堆顶",
    "wwyj_geziyin":"放鸽",
    "wwyj_geziyang":"放鸽",
    "wwyj_gezi":"鸽子",
    "wwyj_gezi_info":"转换技，出牌阶段限一次效果：<li>阳：你可弃置一张红色手牌并令任意名有手牌的角色各展示一张手牌，然后你可展示一张手牌，横置/重置展示牌与该牌颜色相同的角色，然后若已横置的角色比未模置的多，你摸一张牌<li>阴：你交给一名其他角色一张黑色手牌，令其选择至少一名角色，然后你选择横置/重置其所选择的或未选择的角色，然后若已横置的角色比未模置的多，你摸一张牌",
	"wwyj_wuqing":"无情",
    "wwyj_wuqing_info":"</font><font color=#f00>锁定技</font> 当一名角色受到属性伤害后，你摸一张牌",			
    "wwyj_jieguan":"接管",
    "wwyj_jieguan_info":"一名其他角色出牌阶段开始时，若其有手牌且手牌数不小于你的，你可以获得其一张手牌。若如此做，此阶段结束时，若其造成过伤害，则视为其对你使用一张【杀】，否则你视为对其使用一张【杀】",            
    "wwyj_sepi2":"献媚",    
    "wwyj_sepi":"色批",
    "wwyj_sepi_info":"每名女性角色的出牌阶段限一次，其可弃置一张手牌，然后其弃置你的一张手牌，若这两张手牌颜色相同，其与你各选择摸一张牌或回复一点体力(若任一方没受伤则改为摸一张牌)，否则各摸一张牌",
    "wwyj_shaozhu":"少主",           
    "wwyj_shaozhu_info":"当你成为【杀】的目标时，你可令攻击范围包含该角色的除了你与其的所有其他角色依次对该角色选择使用一张不计入次数限制的【杀】，否则你获得该应使用【杀】的角色一张牌",            
    "wwyj_xuedao":"血刀",
    "wwyj_xuedao_info":"当一名角色使用一张武器牌后，你可弃置其攻击范围内的一名有手牌的其他角色的一张手牌，若这张手牌的颜色为红色，则被弃置手牌的角色视为对使用武器牌的角色使用一张【杀】",
    "wwyj_lunpo":"论破",
    "wwyj_lunpo_info":"任意有“丸”标记的角色弃牌阶段弃牌时，若其弃置的牌均为不同花色的牌时，你可选择一项：①回复一点体力并摸一张牌；②令该角色受到你造成的一点伤害，然后其弃置“丸”标记",
    "wwyj_dansha":"弹杀",
    "wwyj_dansha_info":"当你受到伤害时，你可先选择是否令一名没“丸”标记的其他角色获得“丸”标记，然后你再对场上随机一名有“丸”标记的角色造成等量点伤害并令其随机弃置一张牌",
    "wwyj_qinyan":"勤言",
    "wwyj_qinyan_info":"</font><font color=#f00>锁定技</font> 回合内，当你失去所有手牌后，你将手牌补至当前体力值且你本回合对本回合发动“释援”的目标使用牌时，无视距离和次数限制",
    "wwyj_xiyuan":"释援",
    "wwyj_xiyuan_info":"出牌阶段限一次，你可以选择交给一至X名有手牌的其他角色各一张手牌，然后令这些角色分别交给你一张其他的手牌(X为场上手牌数小于其体力上限的角色数)",
    "wwyj_xuanxia":"玄侠",
    "wwyj_xuanxia_info":"<span class=yellowtext>限定技</span> 当你进入濒死状态时，你可回复体力至场上“星”的数量，然后获得场上所有的“星”，并分别视为对这些角色使用一张【杀】",  
    "wwyj_huanyu":"寰宇",
    "wwyj_huanyu_info":"出牌阶段限一次，你可将场上所有有“星”的角色的“星”收为手牌，然后再逐一将一张手牌当“星”放置于这些角色的武将牌上",    
    "wwyj_xingcheng2":"星城",
	"wwyj_xingcheng1":"星",
    "wwyj_xingcheng":"星城",
    "wwyj_xingcheng_info":"当你受到伤害后，你可将牌堆顶的一张牌置于一名没有“星”的其他角色的武将牌上，称为“星”；当一名角色阵亡或受到你造成的伤害时，若其有“星”，你可以获得该角色的“星”",
		  "wwyj_gonggao2":"公告",
		  "wwyj_gonggao1":"公告",
		  "wwyj_gonggao":"公告",
          "wwyj_gonggao_info":"当你受到伤害后，你可声明一种牌的类型，然后令回合外曾对你造成过伤害的所有其他角色交给你一张手牌，否则你弃置其一张手牌并视为对其使用一张【杀】。若其交给你的牌与你声明的类型相同，其摸一张牌",
		  "wwyj_jinyan2":"禁言",
		  "wwyj_jinyan1":"禁言",
		  "wwyj_jinyan":"禁言",
          "wwyj_jinyan_info":"出牌阶段限一次，若场上没角色被禁言，你可以选择一名其他角色并声明一种花色，其因被禁言只能使用该花色的牌，直到其使用这花色的牌才解除禁言状态",
		  "wwyj_gainian":"概念",
          "wwyj_gainian_info":"出牌阶段限一次，你可声明一张基本牌或普通锦囊牌，若如此做，若你未发动技能【黑猫】，你须失去一点体力并翻面，然后令场上所有其他角色弃置一张与你所声明的牌名字相同的手牌，否则你摸一张牌",
		  "wwyj_heimao":"黑猫",
          "wwyj_heimao_info":"<span class=greentext>觉醒技</span> 当你进入濒死状态时，你弃置你区域内的所有牌并重置武将牌，回复体力至体力上限并将手牌补至体力上限，然后选择一名已阵亡的角色令其复活，体力回复至体力上限并补手牌至体力上限。若为身份局，你与其交换身份牌",
		  "wwyj_liusha":"流沙",
          "wwyj_liusha_info":"回合外，当你失去牌时，你可弃置一名角色区域内的一张牌，若此牌具有攻击伤害性，你摸一张牌",
		  "wwyj_yiwang":"遗忘",
          "wwyj_yiwang_info":"当你使用的【杀】被闪避时，你可令目标角色翻面",
		  "wwyj_fenghua3":"风华",
		  "wwyj_fenghua2":"风华",
		  "wwyj_fenghua1":"风华",
		  "wwyj_fenghua":"风华",
          "wwyj_fenghua_info":"出牌阶段限一次，你可与一名其他角色拼点，若你赢，本回合内，你与该角色的距离为1且你使用【杀】时，可令此【杀】不可闪避。若你没赢，你回复一点体力",
		  "wwyj_shennai":"神奈",
          "wwyj_shennai_info":"</font><font color=#f00>锁定技</font> 你使用【杀】的次数上限额外加X（你手牌中没带“伤害性”标签的牌的实时数量）",
          "wwyj_keai":"可爱",
          "wwyj_keai_info":"当你受到伤害后或失去最后一张手牌后，你可令场上的所有男性角色依次选择是否交给你一张手牌，若其交给了你一张手牌，且其没有手牌或已受伤，其摸一张牌",
		  "wwyj_weixin":"伪新",
            "wwyj_weixin_info":"每名角色的回合限一次，当一名角色进入濒死状态时，你可以摸一张牌并翻面，令其回复一点体力",
		  "wwyj_xianyu":"咸鱼",
            "wwyj_xianyu_info":"每回合限一次，当你使用非转化的【杀】造成伤害时，你可以翻面，令该角色横置且此伤害+1",
          "wwyj_qianshang":"浅觞",
           "wwyj_qianshang_info":"当一名其他角色弃牌阶段弃牌结束时，你可选择其所弃置的非装备牌中合理的一张并立即使用之",
          "wwyj_peiyin":"配音",
           "wwyj_peiyin_info":"</font><font color=#f00>锁定技</font> 当你失去装备区的牌后，你回复一点体力且摸一张牌",
          "wwyj_mingka":"民卡",
          "wwyj_mingka_info":"你使用【杀】对其他角色造成伤害时，你可以弃置至多两张装备牌令增加等量点的伤害 ",
          "wwyj_zhaonies":"造孽",
           "wwyj_nie":"孽",
            "wwyj_zhaonie2":"造孽",
            "wwyj_zhaonie2_info":"</font><font color=#f00>锁定技</font> 你须弃置X张牌（X为你本局游戏中所击杀的角色总数）",            		  
            "wwyj_zhaonie":"造孽",
            "wwyj_zhaonie_info":"</font><font color=#f00>锁定技</font> 若你本回合击杀过角色，则下个回合的准备阶段，你须弃置X张牌（X为你本局游戏中所击杀的角色总数）",            		    
		    "wwyj_miaoji":"妙计",
            "wwyj_miaoji_info":"回合外每轮限一次，当你需要使用【无懈可击】时，若你的武将牌背面朝上，你可以将武将牌翻面视为使用之",
		    "wwyj_qisi_shan":"奇思",
            "wwyj_qisi_shan_info":"当你需要打出一张【闪】时，若你的武将牌为正面朝上，你可以将武将牌翻面，视为打出之",
		    "wwyj_qisi_sha":"奇思",
            "wwyj_qisi_sha_info":"当你需要打出一张【杀】时，若你的武将牌为正面朝上，你可以将武将牌翻面，视为打出之",
		    "wwyj_qisi_use":"奇思",
            "wwyj_qisi_use_info":"当你需要使用一张基本牌时，若你的武将牌为正面朝上，你可以将武将牌翻面，则视为使用了该基本牌",
		    "wwyj_qisi":"奇思",
            "wwyj_qisi_info":"当你需要使用或打出一张基本牌时，若且你的武将牌为正面朝上，你可以将武将牌翻面，视为使用或打出了该基本牌",		    
			"wwyj_lengyu":"冷雨",
			"wwyj_lengyu_info":"当你使用【杀】时，你可获得目标角色的一张手牌，若如此做，此【杀】造成伤害后，你须交给该角色一张手牌",
			"wwyj_lengyu2":"冷雨",
			"wwyj_lengyu2_info":"你须交给该角色一张手牌",
			"wwyj_junshen2":"军神",
			"wwyj_junshen2_info":"你使用的【杀】可指定任意名目标且无视目标的防具",
			"wwyj_junshen1":"军神",
			"wwyj_junshen1_info":"你使用的红色【杀】无次数限制，你使用的黑色【杀】无距离限制",
			"wwyj_junshen":"军神",
            "wwyj_junshen_info":"出牌阶段开始时，你可选择获得以下其中一项直到回合结束：1.你使用的红色【杀】无次数限制，你使用的黑色【杀】无距离限制；2.你使用的【杀】可指定任意名目标且无视目标的防具",
		    "wwyj_jisi":"即死",
            "wwyj_jisi_info":"你的回合开始时，你可令所有体力值为1的其他角色依次失去一点体力",
		    "wwyj_fansha":"反杀",
            "wwyj_fansha_info":"当你成为【杀】的目标时，你可弃置所有手牌中的【杀】，视为对来源使用一张【杀】",
		    "_wwyj_qiaoji":"巧技",
			"wwyj_qiaoji2":"巧技",
			"wwyj_qiaoji":"巧技",
            "wwyj_qiaoji_info":"当一名其他角色摸牌阶段结束时，你可以观看其摸到的手牌并选择获得其中的一张基本牌，或摸一张牌，若如此做，本回合内有角色使用【杀】时，你成为额外的目标",
            "wwyj_jianghun":"键魂",
            "wwyj_jianghun_info":"</font><font color=#f00>锁定技</font> 每轮游戏开始时，你随机获得一名未获得过的论外包角色的一个随机的技能（本技能须开启DIY的论外包）",
            "wwyj_chengzhi":"承志",
            "wwyj_chengzhi_info":"非论外包的角色死亡时，你可以复制其所有技能和卡牌并获得之",            
            "wwyj_yanyu":"烟雨",
            "wwyj_yanyu_info":"当一名其他角色失去装备牌后，你可选择其中的一张立即使用之",
            "wwyj_bingmou":"兵谋",
            "wwyj_bingmou_info":"</font><font color=#f00>锁定技</font> 你的防御距离与你使用的【杀】的目标上限均等于你的攻击范围",           
            "wwyj_gaochang":"高产",
            "wwyj_gaochang_info":"你的摸牌阶段摸牌时，你可令摸牌数+X（X为偷师标记数），然后偷师标记清零",
            "wwyj_qiuxue":"求学",
            "wwyj_qiuxue_info":"<span class=greentext>觉醒技</span> 若你已发动至少3次【偷师】，你失去一点体力上限，回复1点体力并获得技能【高产】",
            "wwyj_toushi":"偷师",
            "wwyj_toushi_info":"出牌阶段限一次，你可以交给一名其他角色一张牌，若如此做，你获得一枚偷师标记并摸一张牌，且可选择获得该角色的一项技能（主公技、觉醒技、限定技除外）直到下个出牌阶段开始",         
            "wwyj_juedi":"绝地",
            "wwyj_juedi_info":"</font><font color=#f00>锁定技</font> 每当你造成或受到一点伤害获得一个“废”标记，标记达到五个“废”获得技能【求生】并失去此技能 ",
            "wwyj_qiusheng":"求生",
            "wwyj_qiusheng_info":"</font><font color=#f00>锁定技</font> 每当你进入濒死状态时，弃置一枚“废”标记，回复体力至两点",
            "wwyj_kazhan":"卡战",
            "wwyj_kazhan_info":"当一名角色的体力发生变化后，若其体力值为1，你可令其随机使用一张装备牌",
            "wwyj_guanli":"管理",
            "wwyj_guanli_info":"出牌阶段限一次，你可令一名其他角色随机弃置一张手牌，若这张手牌为：基本牌，你视为对其使用一张不计次数限制的【杀】；锦囊牌，你视为对其使用一张不能被无懈可击的决斗；装备牌，你使用之",           
            "wwyj_shengshen":"圣神",
            "wwyj_shengshen_info":"每轮限一次，当一名角色进入濒死状态时，你可以观看牌堆顶的两张牌，然后弃置其中一张红色牌视为对其使用一张【桃】。若其中没有红色牌且你有红色的手牌，你可以弃置你的所有红色手牌，视为对其使用一张【桃】",            
            "wwyj_kaiche":"开车",
            "wwyj_kaiche_info":"</font><font color=#f00>锁定技</font> 摸牌阶段摸牌时，你额外摸X张牌，你的手牌上限加X（X为场上女性角色数且至少为1）",
            "wwyj_jiguang_rsha":"极光",
            "wwyj_jiguang_rsha_info":"当你需要打出【杀】时，你可选择一名角色的装备区的武器牌或进攻马并令其弃置之，视为打出【杀】",
            "wwyj_jiguang_rshan":"极光",
            "wwyj_jiguang_rshan_info":"当你需要打出【闪】时，你可选择一名角色的装备区的防具牌或防御马或宝物牌并令其弃置之，视为打出【闪】",
            "wwyj_jiguang_shan":"极光",
            "wwyj_jiguang_shan_info":"当你需要使用【闪】时，你可选择一名角色的装备区的防具牌或防御马或宝物牌并令其弃置之，视为使用【闪】",
            "wwyj_jiguang_shan2":"极光",
            "wwyj_jiguang_shan2_info":"当你需要使用【闪】时，你可选择一名角色的装备区的防具牌或防御马或宝物牌并令其弃置之，视为使用【闪】",
            "wwyj_jiguang_sha":"极光",   
            "wwyj_jiguang_sha_info":"出牌阶段，若你未使用过【杀】，你可选择一名角色的装备区的武器牌或进攻马并令其弃置之，视为使用一张【杀】，然后你本回合不能再使用【杀】",                        
            "wwyj_jiguang":"极光",
            "wwyj_jiguang_info":"你可在合适的时机选择一名角色并令其弃置其装备区的：<li>武器牌或进攻马，视为使用（未使用过【杀】且使用后本回合内你不能再使用【杀】）或打出一张【杀】<li>防具牌或防御马或宝物牌，视为使用或打出一张【闪】",            
            "wwyj_qianxu":"谦虚",
            "wwyj_qianxu_info":"（隔山打牛）</font><font color=#f00>锁定技</font> 你不能成为与你距离为1的角色使用的【杀】的目标，你使用的【杀】只能指定与你距离大于1的角色为目标，且你使用【杀】时至多额外指定一名目标",
            "wwyj_yixue":"义写",
            "wwyj_yixue_info":"当一名其他角色的回合结束时，若其已受伤，你可交给其一张手牌，若此时其手牌数比你的多，你摸一张牌",           
            "wwyj_jiangsha1":"键杀",
            "wwyj_jiangsha1_info":"</font><font color=#f00>锁定技</font> 当你成为【杀】的目标时，若来源的武将牌正面朝上，你将手牌补至体力上限。若此【杀】造成伤害，该角色翻面",
            "wwyj_jiangsha":"键杀",
            "wwyj_jiangsha_info":"</font><font color=#f00>锁定技</font> 当你成为【杀】的目标时，若来源的武将牌正面朝上，你将手牌补至体力上限。若此【杀】造成伤害，该角色摸一张牌然后翻面",
            "wwyj_daigeng":"代更",
            "wwyj_daigeng_info":"每轮限一次，当一名角色翻面至武将牌背面朝上时，当前回合结束后，你可以执行一个额外的回合",
            "wwyj_touliang1":"凉",
            "wwyj_touliang":"透凉",
            "wwyj_touliang_info":"结束阶段，你可选择攻击范围内的1至X（你的手牌中的花色数）名其他角色，你与其各摸一张牌，令其直到其回合结束时，不能使用或打出基本牌",
            "wwyj_kangxing":"抗性",
            "wwyj_kangxing_info":"当你成为其他角色的牌的唯一目标时，你可弃置一张与该牌同类别的手牌，令该牌的目标对调",
            "wwyj_qiangkang2":"强抗",
            "wwyj_qiangkang2_info":"</font><font color=#f00>锁定技</font> 你免疫受到属性伤害。当你受到非属性伤害后，你摸一张牌且弃置伤害来源一张牌",
            "wwyj_qiangkang":"强抗",
            "wwyj_qiangkang_info":"</font><font color=#f00>锁定技</font> 你免疫受到属性伤害。当你受到非属性伤害后，你摸一张牌且弃置伤害来源一张牌",
            "wwyj_tuikeng":"退坑",
            "wwyj_tuikeng_info":"</font><font color=#f00>锁定技</font> 你的防御距离加X（X为你已损失的体力值）",                          
            "wwyj_chehuo":"车祸",
            "wwyj_chehuo_info":"</font><font color=#f00>锁定技</font> 游戏开始所有角色摸牌后或你进入游戏时，你废除所有的装备栏",
            "wwyj_kangfu":"康复",
            "wwyj_kangfu_info":"</font><font color=#f00>锁定技</font> 你的进攻距离+1；你的装备牌不计入手牌上限；当你脱离濒死状态或你击杀一名角色后，你回复一点体力并选择恢复一个装备栏",       
            "wwyj_jinzhu_shan":"烬铸",
            "wwyj_jinzhu_shan_info":"你可以把你的装备牌当做任意基本牌使用或打出",
            "wwyj_jinzhu_sha":"烬铸",
            "wwyj_jinzhu_sha_info":"你可以把你的装备牌当做任意基本牌使用或打出",
            "wwyj_jinzhu":"烬铸",
            "wwyj_jinzhu_info":"你可以把你的装备牌当做任意基本牌使用或打出",                       
            "wwyj_jilve":"极略",
            "wwyj_jilve_info":"​出牌阶段限X次（X为你的体力值），你可以将一张手牌当一张于本回合内未使用过的基本牌或非延时类锦囊牌（除无懈可击外）使用。",
            "wwyj_jipin":"济贫",
            "wwyj_jipin_info":"当一名角色摸牌时，若其手牌数小于其体力值，你可令其额外摸一张牌",
            "wwyj_chengpiao":"诚剽",
            "wwyj_chengpiao_info":"出牌阶段限一次，你可观看一名其他角色的手牌并选择使用其中一张",
            "wwyj_lilun":"理论",
            "wwyj_lilun_info":"每当你使用一张非延时性锦囊牌时，你可以观看牌堆顶的三张牌，获得其中的一张牌，然后将其余两张牌先后置于牌堆顶",
            "wwyj_yanguan":"严管",
            "wwyj_yanguan_info":"每名角色的回合限一次，每当一名其他角色使用非延时性锦囊牌时，你可以弃置一张手牌令其失效，然后你获得此牌",            
            "wwyj_jinxiu":"进修",
            "wwyj_jinxiu_info":"</font><font color=#f00>锁定技</font> 结束阶段你摸X张牌（X为你本回合造成的伤害数）",
            "wwyj_ciya":"呲牙",
            "wwyj_ciya_info":"摸牌阶段开始时，你可少摸一张牌，然后视为对攻击范围内包含有你的任意名其他角色各使用一张【杀】",
            "wwyj_qianzhui":"潜追",
            "wwyj_qianzhui_info":"<span class=greentext>觉醒技</span> 当一名其他角色阵亡时，你选择失去技能【签到】或【嘤怪】，然后选择获得该角色的一个的技能",          
            "wwyj_yingguai":"嘤怪",
            "wwyj_yingguai_info":"当你受到伤害后，你可令一名其他角色随机使用一张延时性锦囊牌（闪电、乐不思蜀、兵粮寸断）",
            "wwyj_qiandao":"签到",
            "wwyj_qiandao_info":"当一名其他角色判定牌生效后，你可获得其一张牌",
            "wwyj_zuikui":"罪魁",
            "wwyj_zuikui_info":"</font><font color=#f00>锁定技</font> 当一名角色翻面至武将牌背面朝上或死亡时，所有其他的角色依次弃置一张牌",
            "wwyj_jiaoxiao":"叫嚣",
            "wwyj_jiaoxiao_info":"</font><font color=#f00>锁定技</font> 当你受到【杀】造成的伤害时，你获得伤害来源的一张牌，并且此伤害加一",
            "wwyj_daixue":"代写",
            "wwyj_daixue_info":"出牌阶段限一次，若你已获得的【琴棋书画】中的至少一项技能，你可选择其中一项交给一名没有【琴棋书画】中任意一项与你相同的其他角色",
            "wwyj_caizhi1":"琴",
            "wwyj_caizhi2":"棋",
            "wwyj_caizhi3":"书",
            "wwyj_caizhi4":"画",
            "wwyj_caizhi":"才智",
            "wwyj_caizhi_info":"</font><font color=#f00>锁定技</font> 你的回合开始时，你随机从【琴棋书画】中获得一项你未获得的技能。当你受到伤害时，若你已获得的【琴棋书画】中的至少一项，随机移除其中一项，然后伤害减一<li>注：【琴棋书画】分别对应：卡战、概念、极略、理论",
            "wwyj_qunying":"群英",
            "wwyj_qunying_info":"结束阶段，你可以和一名其他角色交换手牌，若你们手牌数相同，你可以与其各摸一张牌。你与其交换的手牌差不大于你与其的体力值之差",                        
            "wwyj_fengliu":"风流",
            "wwyj_fengliu_info":"游戏开始时、你进入游戏（对决）、你的回合开始、结束时，你可从五名随机的女性中选择一位并获得其所有的技能，直至重新发动此技能",
            "wwyj_baozao":"暴躁",
            "wwyj_baozao_info":"<span class=yellowtext>限定技</span> 当你进入濒死状态时，你可令除你外的所有角色依次对伤害来源视为使用一张【杀】（限杀一轮）。然后本回合内每有一名角色受到伤害后，若你已受伤，你回复一点体力，否则你摸一张牌",
            "wwyj_xipi":"嘻皮",
            "wwyj_xipi_info":"</font><font color=#f00>锁定技</font> 当你成为其他角色使用的牌的唯一目标时，你获得场上随机一名其他角色的一张牌",
            "wwyj_qianfu":"潜伏",
            "wwyj_qianfu_info":"</font><font color=#f00>锁定技</font> 回合结束时，若你的武将牌正面朝上，你翻面。当你的武将牌背面朝上，你的防御距离为无限",
            "wwyj_ancha":"暗察",
            "wwyj_ancha2":"暗察",
            "wwyj_ancha_info":"当一名角色受到来源不为你的伤害后，你可观看伤害来源的手牌，然后该受到伤害的角色摸一张牌。若为你受到伤害，你将你的武将牌正面朝上，当前回合结束后，你进行一个额外的回合",
            "wwyj_huikeng":"回坑",
            "wwyj_huikeng_info":"出牌阶段限一次，你可随机展示X（其他角色数）张武将牌，然后逐一选择其中一张，然后按次序替换其他角色的武将牌（体力上限与体力不变），每替换一名角色你就摸一张牌",            
	        "wwyj_liangcha":"凉茶",
            "wwyj_liangcha_info":"</font><font color=#f00>锁定技</font> 游戏开始或你进入游戏或其他角色回合开始与结束时，处于此时机的其他角色失去所有的技能，并且翻面至武将牌背面朝上，若有角色的体力上限大于16，则其体力上限改为2",
	        "wwyj_fanghua":"芳华",
            "wwyj_fanghua_info":"</font><font color=#f00>锁定技</font> 你造成的伤害时，改为先失去等量的体力上限，再受到等同两倍此伤害值的伤害。摸牌阶段时（每回合限一次）额外摸X张牌（X为场上已受伤的角色数）",
            "wwyj_meiying":"魅影",
            "wwyj_meiying_info":"</font><font color=#f00>锁定技</font> 你的进攻与防御距离无限、你使用的牌无次数限制、部分合理的牌可指定任意名目标且不能成为其他角色的牌的目标；你使用的普通锦囊牌不能被无懈响应",           
            "wwyj_chuangshi":"创世",
            "wwyj_chuangshi_info":"<span class=greentext>觉醒技</span> 游戏开始所有角色摸牌后或你进入游戏时（对决模式），你令其他角色从十名备选角色（关羽、张飞、赵云、马超、马忠、公孙瓒、黄盖、吕蒙、仁王禁、许禇）中挑选一名并变身成为之",
            "wwyj_xiadan":"下单",
            "wwyj_xiadan_info":"出牌阶段限一次，你可“下单”交给“接单者”一张牌，其回复一点体力且其可使用一张【杀】，然后你选择获得一张基本牌或非延时锦囊牌",
            "wwyj_xiadan1":"单",
            "wwyj_xiadan1_info":"",
            "wwyj_jiedan":"接单",
            "wwyj_jiedan_info":"每名角色的出牌阶段限一次，其可以交给你一张牌，你回复一点体力且你此时可使用一张【杀】，然后其选择获得一张基本牌或非延时锦囊牌",
            "wwyj_shuihu":"水乎",
            "wwyj_chengxuyuan":"橙续缘",
            "wwyj_pipi":"皮皮",
            "wwyj_limuzi":"李木子",
			"wwyj_guihua":"松岛枫桂花",
			"wwyj_yiwangs":"一瞬间遗忘",            
            "wwyj_fux2":"fux2",
			"wwyj_shenzuo":"神座",
			"wwyj_guchengs":"孤城",
			"wwyj_hezifengyun":"何子风云",
			"wwyj_qingzhongs":"青冢",
			"wwyj_liushas":"流沙",
			"wwyj_duanges":"短歌",
			"wwyj_shennais":"神奈",
            "wwyj_Sukincen":"小苏",
            "wwyj_liangchas":"凉茶",
			"wwyj_liangchax":"★凉茶",
			"wwyj_yuhudie":"玉蝴蝶",
            "wwyj_shijian":"诗笺",     
			"wwyj_xuebi":"雪碧",
			"wwyj_taishangdaniu":"太上大牛",
			"wwyj_xingyunnvshen":"幸运女神",
			"wwyj_feicheng":"废城",
			"wwyj_zhugejun":"诸葛均",
			"wwyj_lengyus":"冷雨",
			"wwyj_yanyumoran":"烟雨墨染",
			"wwyj_wali":"瓦力",
			"wwyj_shenwangquanjian":"神王权笺",
			"wwyj_wuqinggezi":"无情鸽子",
			"wwyj_huanyuxingcheng":"寰宇星城",
			"wwyj_xuedaoshaozhu":"血刀少主",
			"wwyj_yitiaoxianyu":"咸鱼",
            "wwyj_maliao":"苏婆玛丽奥",
            "wwyj_remaliao":"苏婆玛丽奥",   
            "wwyj_jiguangs":"极光",                
            "wwyj_lunhuizhong":"轮回消逝者",
            "wwyj_ziyage":"呲牙哥",
            "wwyj_kanpoyiqie":"看破一切",
            "wwyj_daxiongxiaimao":"大熊小猫",
            "wwyj_kelejiabing":"可乐加冰",
            "wwyj_qianshangs":"浅觞",
			"wwyj_tilongjianiao":"提笼架鸟",
            "wwyj_huijin":"辉烬贺流年",       
            "wwyj_danwuyunxi":"淡雾云曦",
			"wwyj_wzszhaoyun":"我只是赵云",
		    //"wwyjsha":"<font color=#f00>杀</font>",
            "wwyjsha":"杀",
            "_wwyj_yinglingfuhun":"英灵附魂",
            "wwyj_zhizun":"<font color=#f00>至尊荣耀</font>",	
        	"wwyj_zuozhe":"<span class=yellowtext>扩展作者</span>",	
	        "wwyj_fensi":"<span class=bluetext>粉丝玩家</span>",		
	        		
            },
			};
if(lib.device||lib.node){
				for(var i in wenwuyingjie.character){wenwuyingjie.character[i][4].push('ext:文武英杰/'+i+'.jpg');}
			}else{
				for(var i in wenwuyingjie.character){wenwuyingjie.character[i][4].push('db:extension-文武英杰:'+i+'.jpg');}
			}
			return wenwuyingjie;
		});
		lib.config.all.characters.push('wenwuyingjie');		
		if(!lib.config.characters.contains('wenwuyingjie')) lib.config.characters.remove('wenwuyingjie');
		lib.translate['wenwuyingjie_character_config']='<span style=\"color:#ff00cc\">文武英杰</span>';		     
      
	 game.addMode('wenwuyingjiepicture', {
            game: {
                syncMenu: true,
				createview: function(node,charalist,liblist){
					var player = ui.create.player(null, true);
					player.init(charalist[0]);
					player.node.avatar.setBackgroundImage('extension/文武英杰/'+charalist[0]+'.jpg');
					player.style.left = '20px';
					player.style.top = '20px';
					player.style.zIndex = '10';
					player.style.cursor = 'pointer';
					player.node.count.remove();
					player.node.hp.remove();
					player.style.transition = 'all 0.5s';
					node.appendChild(player);
					node.playernode = player;
			
					var dialog = ui.create.dialog('hidden');
					dialog.style.left = "0px";
					dialog.style.top = "0px";
					dialog.style.width = "100%";
					dialog.style.height = "205px";
					dialog.classList.add('fixed');
					dialog.noopen = true;
					node.appendChild(dialog);
					dialog.addText('<div><div id="Cdetail" style="display:block;left:150px;text-align:left;font-size:16px"><span class="bluetext">角色介绍</span>：' +get.characterIntro(charalist[0])+'<br>' +liblist[0].join('<br>'));
					var dialog1 = ui.create.dialog('hidden');
					dialog1.style.left = "0px";
					dialog1.style.top = "220px";
					dialog1.style.width = "100%";
					dialog1.style.height = "100%";
					dialog1.classList.add('fixed');
					dialog1.noopen = true;
					node.appendChild(dialog1);
					dialog1.add([charalist, 'character'], false);
					for (var i = 0; i < dialog1.buttons.length; i++) {
						dialog1.buttons[i].classList.add('show');
						dialog1.buttons[i].value = i;
						dialog1.buttons[i].onclick = function () {
							player.init(charalist[this.value]);
							document.getElementById("Cdetail").innerHTML='<span class="bluetext">角色介绍</span>：' +get.characterIntro(charalist[this.value])+'<br>' +liblist[this.value];
							player.node.avatar.setBackgroundImage('extension/文武英杰/'+charalist[this.value]+'.jpg');								
						};
					}
				},
            },
            start: function () {
                ui.auto.hide();
                if (!lib.storage.scene) {
                    lib.storage.scene = {};
                }
                if (!lib.storage.stage) {
                    lib.storage.stage = {};
                }
                if (!_status.extensionmade) {
                    _status.extensionmade = [];
                }
                if (_status.extensionscene) {
                    game.save('scene', lib.storage.scene);
                }
                if (_status.extensionstage) {
                    game.save('stage', lib.storage.stage);
                }
                var dialog = ui.create.dialog('hidden');
                dialog.classList.add('fixed');
                dialog.classList.add('scroll1');
                dialog.classList.add('scroll2');
                dialog.classList.add('fullwidth');
                dialog.classList.add('fullheight');
                dialog.classList.add('noupdate');
                dialog.classList.add('character');
                dialog.contentContainer.style.overflow = 'visible';
                dialog.style.overflow = 'scroll';
                dialog.content.style.height = '100%';
                dialog.contentContainer.style.transition = 'all 0s';
                if (!lib.storage.directStage) dialog.open();
                var packnode = ui.create.div('.packnode', dialog);
                lib.setScroll(packnode);
                ui.background.setBackgroundImage('extension/文武英杰/wwyj_picture.jpg');
                //上一行为背景
                var clickCapt = function () {
                    var active = this.parentNode.querySelector('.active');
                    if (this.link == 'stage') {
                        if (get.is.empty(lib.storage.scene)) {
                            alert('请创建至少1个场景');
                            return;
                        }
                    }
                    if (active) {
                        if (active == this) return;
                        for (var i = 0; i < active.nodes.length; i++) {
                            active.nodes[i].remove();
                            if (active.nodes[i].showcaseinterval) {
                                clearInterval(active.nodes[i].showcaseinterval);
                                delete active.nodes[i].showcaseinterval;
                            }
                        }
                        active.classList.remove('active');
                    }
                    this.classList.add('active');
                    for (var i = 0; i < this.nodes.length; i++) {
                        dialog.content.appendChild(this.nodes[i]);
                    }
                    var showcase = this.nodes[this.nodes.length - 1];
                    showcase.style.height = (dialog.content.offsetHeight - showcase.offsetTop) + 'px';
                    if (typeof showcase.action == 'function') {
                        if (showcase.action(showcase._showcased ? false : true) !== false) {
                            showcase._showcased = true;
                        }
                    }
                    if (this._nostart) start.style.display = 'none';
                    else start.style.display = '';
                    game.save('currentBrawl', 'help');
                }
                // 应该是这里是制作列表的地方
                var createNode = function (name) {
                    var info = lib.brawl[name];
                    var node = ui.create.div('.dialogbutton.menubutton.large', info.name, packnode, clickCapt);
                    node.style.transition = 'all 0s';
                    var caption = info.name;
                    var modeinfo = '';
                    if (info.mode) {
                        modeinfo = get.translation(info.mode) + '模式';	// 这个是标注哪个模式下使用的
                    }
                    if (info.submode) {
                        if (modeinfo) {
                            modeinfo += ' - ';
                        }
                        modeinfo += info.submode;
                    }
                    var intro;
                    if (Array.isArray(info.intro)) {
                        intro = '<ul style="text-align:left;margin-top:10">';
                        if (modeinfo) {
                            intro += '<li>' + modeinfo;
                        }
                        for (var i = 0; i < info.intro.length; i++) {
                            intro += '<br>' + info.intro[i];
                        }
                    }
                    else {
                        intro = '';
                        if (modeinfo) {
                            intro += '（' + modeinfo + '）';
                        }
                        intro += info.intro;
                    }
                    var today = new Date();
                    var i = ui.create.div('.text center', intro);
                    i.style.overflow = 'scroll';
                    i.style.margin = '0px';
                    i.style.padding = '0px';
                    var showcase = ui.create.div();
                    showcase.style.margin = '0px';
                    showcase.style.padding = '0px';
                    showcase.style.width = '100%';
                    showcase.style.display = 'block'
                    showcase.style.overflow = 'scroll';
                    showcase.action = info.showcase;
                    showcase.link = name;
                    if (info.fullshow) {
                        node.nodes = [showcase];
                        showcase.style.height = '100%';
                    }
                    else {
                        node.nodes = [
                            i,
                            showcase,
                        ];
                    }
                    node.link = name;
                    node._nostart = info.nostart;
                    if (lib.storage.currentBrawl == name) {
                        clickCapt.call(node);
                    }
                    return node;
                }
                // 点那个巨大的“斗”之后
                var clickStart = function () {
                    dialog.delete();
                    ui.auto.show();
                    game.switchMode('identity');
                };
                // 制作那个“斗”的键的。去掉会出bug，不知道为什么
                var start = ui.create.div('.menubutton.round.highlight', '←', dialog.content, clickStart);
                start.style.position = 'absolute';
                start.style.left = '-100px';
                start.style.right = 'auto';
                start.style.top = 'auto';
                start.style.bottom = '10px';
                start.style.width = '80px';
                start.style.height = '80px';
                start.style.lineHeight = '80px';
                start.style.margin = '0';
                start.style.padding = '5px';
                start.style.fontSize = '72px';
                start.style.zIndex = 3;
                start.style.transition = 'all 0s';
                start.hide();
                game.addScene = function (name, clear) {
                    var scene = lib.storage.scene[name];
                    var brawl = {
                        name: name,
                        intro: scene.intro,
                    };
                    for (var i in lib.brawl.scene.template) {
                        brawl[i] = get.copy(lib.brawl.scene.template[i]);
                    }
                    if (!scene.gameDraw) {
                        brawl.content.noGameDraw = true;
                    }
                    brawl.content.scene = scene;
                    lib.brawl['scene_' + name] = brawl;
                    var node = createNode('scene_' + name);
                    if (clear) {
                        game.addSceneClear();
                        clickCapt.call(node);
                        _status.sceneChanged = true;
                    }
                };
                game.addStage = function (name, clear) {
                    var stage = lib.storage.stage[name];
                    var brawl = {
                        name: name,
                        intro: stage.intro,
                        content: {}
                    };
                    for (var i in lib.brawl.stage.template) {
                        brawl[i] = get.copy(lib.brawl.stage.template[i]);
                    }
                    brawl.content.stage = stage;
                    lib.brawl['stage_' + name] = brawl;
                    var node = createNode('stage_' + name);
                    if (clear) {
                        game.addStageClear();
                        clickCapt.call(node);
                    }
                }
                game.removeScene = function (name) {
                    delete lib.storage.scene[name];
                    game.save('scene', lib.storage.scene);
                    _status.sceneChanged = true;
                    for (var i = 0; i < packnode.childElementCount; i++) {
                        if (packnode.childNodes[i].link == 'scene_' + name) {
                            if (packnode.childNodes[i].classList.contains('active')) {
                                for (var j = 0; j < packnode.childElementCount; j++) {
                                    if (packnode.childNodes[j].link == 'scene') {
                                        clickCapt.call(packnode.childNodes[j]);
                                    }
                                }
                            }
                            packnode.childNodes[i].remove();
                            break;
                        }
                    }
                }
                game.removeStage = function (name) {
                    delete lib.storage.stage[name];
                    game.save('stage', lib.storage.stage);
                    for (var i = 0; i < packnode.childElementCount; i++) {
                        if (packnode.childNodes[i].link == 'stage_' + name) {
                            if (packnode.childNodes[i].classList.contains('active')) {
                                for (var j = 0; j < packnode.childElementCount; j++) {
                                    if (get.is.empty(lib.storage.scene)) {
                                        if (packnode.childNodes[j].link == 'scene') {
                                            clickCapt.call(packnode.childNodes[j]);
                                        }
                                    }
                                    else {
                                        if (packnode.childNodes[j].link == 'stage') {
                                            clickCapt.call(packnode.childNodes[j]);
                                        }
                                    }
                                }
                            }
                            packnode.childNodes[i].remove();
                            break;
                        }
                    }
                }
                var sceneNode;
                for (var i in lib.brawl) {
                    if (get.config(i) === false) continue;
                    if (i == 'scene') {
                        sceneNode = createNode(i);
                    }
                    else {
                        if (i == 'updatelog' && location.hostname && !lib.device) continue;
                        if (i == 'downloadlog' && (!location.hostname || lib.device)) continue;
                        createNode(i);
                    }
                }
                if (sceneNode) {
                    game.switchScene = function () {
                        clickCapt.call(sceneNode);
                    }
                }
                for (var i in lib.storage.scene) {
                    game.addScene(i);
                }
                for (var i in lib.storage.stage) {
                    game.addStage(i);
                }
                if (!lib.storage.currentBrawl) {
                    clickCapt.call(packnode.firstChild);
                }
                game.save('lastStage');
                if (lib.storage.directStage) {
                    var directStage = lib.storage.directStage;
                    game.save('directStage');
                    clickStart(directStage);
                }
                if (lib.config.background_music != 'music_off' && get.config('wwyj_openmusic')) {
			        ui.backgroundMusic.src= lib.assetURL+"extension/文武英杰/wwyj_music.mp3";
                    setInterval(function(){						
	              	ui.backgroundMusic.src= lib.assetURL+"extension/文武英杰/wwyj_music.mp3";
	                   },85000);
                }
                lib.init.onfree();
            },
            brawl: {
                                
				wenwuview: {
                    name: '文武英杰',
                    mode: 'wenwuyingjiepicture',
                    intro: [lib.config.connect_nickname+'！'+'欢迎您来到《文武英杰》扩展的图鉴模式！' ],
                    showcase: function (init) {
						var node = this;
                        if (init) {	
var charalist = [];
for (var i in lib.characterPack['wenwuyingjie']) {
	var wenwu=["wwyj_shuihu","wwyj_remaliao","wwyj_liangchax","wwyj_shennais","wwyj_guihua","wwyj_duanges","wwyj_guchengs","wwyj_hezifengyun","wwyj_qingzhongs","wwyj_huanyuxingcheng","wwyj_xuedaoshaozhu","wwyj_fux2","wwyj_shenwangquanjian","wwyj_wuqinggezi","wwyj_yiwangs","wwyj_liushas","wwyj_tilongjianiao","wwyj_qianshangs","wwyj_limuzi","wwyj_zhaonies","wwyj_yitiaoxianyu","wwyj_lengyus","wwyj_yanyumoran","wwyj_wali","wwyj_danwuyunxi","wwyj_jiguangs","wwyj_zhugejun","wwyj_taishangdaniu","wwyj_maliao",'wwyj_shenzuo',"wwyj_shijian","wwyj_xuebi","wwyj_huijin","wwyj_chengxuyuan","wwyj_pipi","wwyj_Sukincen","wwyj_liangchas","wwyj_ziyage","wwyj_kanpoyiqie","wwyj_kelejiabing","wwyj_feicheng","wwyj_xingyunnvshen","wwyj_lunhuizhong","wwyj_daxiongxiaimao","wwyj_wzszhaoyun"];
	if(wenwu.contains(i)) charalist.push(i);
}
var liblist = [
               ['<span class="bluetext">创世</span>：<span class=greentext>觉醒技</span> 游戏开始所有角色摸牌后或你进入游戏时（对决模式），你令其他角色从十名备选角色（关羽、张飞、赵云、马超、马忠、公孙瓒、黄盖、吕蒙、仁王禁、许禇）中挑选一名并变身成为之<br><span class="bluetext">潜伏</span>：</font><font color=#f00>锁定技</font> 回合结束时，若你的武将牌正面朝上，你翻面。当你的武将牌背面朝上，你的防御距离为无限<br><span class="bluetext">暗察</span>：当一名角色受到来源不为你的伤害后，你可观看伤害来源的手牌，然后该受到伤害的角色摸一张牌。若为你受到伤害，你将你的武将牌正面朝上，当前回合结束后，你进行一个额外的回合<br><span class="bluetext">回坑</span>：出牌阶段限一次，你可随机展示X（其他角色数）张武将牌，然后逐一选择其中一张，然后按次序替换其他角色的武将牌（体力上限与体力不变），每替换一名角色你就摸一张牌'],
			   ['<span class="bluetext">凉茶</span>：</font><font color=#f00>锁定技</font> 游戏开始或你进入游戏或其他角色回合开始与结束时，处于此时机的其他角色失去所有的技能，并且翻面至武将牌背面朝上，若有角色的体力上限大于16，则其体力上限改为2<br><span class="bluetext">芳华</span>：</font><font color=#f00>锁定技</font> 你造成的伤害时，改为先失去等量的体力上限，再受到等同两倍此伤害值的伤害。摸牌阶段时（每回合限一次）额外摸X张牌（X为场上已受伤的角色数）<br><span class="bluetext">魅影</span>：</font><font color=#f00>锁定技</font> 你的进攻与防御距离无限、你使用的牌无次数限制、部分合理的牌可指定任意名目标且不能成为其他角色的牌的目标；你使用的普通锦囊牌不能被无懈响应'],			 
	  		   ['<span class="bluetext">才智</span>：</font><font color=#f00>锁定技</font> 你的回合开始时，你随机从【琴棋书画】中获得一项你未获得的技能。当你受到伤害时，若你已获得的【琴棋书画】中的至少一项，随机移除其中一项，然后伤害减一<li>注：【琴棋书画】分别对应：卡战、概念、极略、理论<br><span class="bluetext">代写</span>：出牌阶段限一次，若你已获得的【琴棋书画】中的至少一项技能，你可选择其中一项交给一名没有【琴棋书画】中任意一项与你相同的其他角色'],			 
			   ['<span class="bluetext">接单</span>：每名角色的出牌阶段限一次，其可以交给你一张牌，你回复一点体力且你此时可使用一张【杀】，然后其选择获得一张基本牌或非延时锦囊牌'],
			   ['<span class="bluetext">嘻皮</span>：</font><font color=#f00>锁定技</font> 当你成为其他角色使用的牌的唯一目标时，你获得场上随机一名其他角色的一张牌<br><span class="bluetext">暴躁</span>：<span class=yellowtext>限定技</span> 当你进入濒死状态时，你可令除你外的所有角色依次对伤害来源视为使用一张【杀】（限杀一轮）。然后本回合内每有一名角色受到伤害后，若你已受伤，你回复一点体力，否则你摸一张牌'],
			   ['<span class="bluetext">风流</span>：</font><font color=#f00>锁定技</font> 游戏开始时、你的回合开始、结束时，你可从五名随机的女性中选择一位并获得其所有的技能，直至重新发动此技能<br><span class="bluetext">群英</span>：结束阶段，你可以和一名其他角色交换手牌，若你们手牌数相同，你可以与其各摸一张牌。你与其交换的手牌差不大于你与其的体力值之差'],			   			   
	           ['<span class="bluetext">叫嚣</span>：</font><font color=#f00>锁定技</font> 当你受到【杀】造成的伤害时，你获得伤害来源的一张牌，并且此伤害加一<br><span class="bluetext">罪魁</span>：</font><font color=#f00>锁定技</font> 当一名角色翻面至武将牌背面朝上或死亡时，所有其他的角色依次弃置一张牌'],
			   ['<span class="bluetext">签到</span>：当一名其他角色判定牌生效后，你可获得其一张牌<br><span class="bluetext">嘤怪</span>：当你受到伤害后，你可令一名其他角色随机使用一张延时性锦囊牌（闪电、乐不思蜀、兵粮寸断）<br><span class="bluetext">潜追</span>：<span class=greentext>觉醒技</span> 当一名其他角色阵亡时，你选择失去技能【签到】或【嘤怪】，然后选择获得该角色的一个的技能'],
			   ['<span class="bluetext">呲牙</span>：摸牌阶段开始时，你可少摸一张牌，然后视为对攻击范围内包含有你的任意名其他角色各使用一张【杀】<br><span class="bluetext">进修</span>：</font><font color=#f00>锁定技</font> 结束阶段你摸X张牌（X为你本回合造成的伤害数）'],
			   ['<span class="bluetext">理论</span>：每当你使用一张非延时性锦囊牌时，你可以观看牌堆顶的三张牌，获得其中的一张牌，然后将其余两张牌先后置于牌堆顶<br><span class="bluetext">严管</span>：每名角色的回合限一次，每当一名其他角色使用非延时性锦囊牌时，你可以弃置一张手牌令其失效，然后你获得此牌'],
			   ['<span class="bluetext">诚剽</span>：出牌阶段限一次，你可观看一名其他角色的手牌并选择使用其中一张<br><span class="bluetext">济贫</span>：当一名角色摸牌时，若其手牌数小于其体力值，你可令其额外摸一张牌'],
			   ['<span class="bluetext">极略</span>：出牌阶段限X次（X为你的体力值），你可以将一张手牌当一张于本回合内未使用过的基本牌或非延时类锦囊牌（除无懈可击外）使用<br><span class="bluetext">退坑</span>：</font><font color=#f00>锁定技</font> 你的防御距离加X（X为你已损失的体力值）'],
			   ['<span class="bluetext">车祸</span>：</font><font color=#f00>锁定技</font> 游戏开始所有角色摸牌后或你进入游戏时，你废除所有的装备栏<br><span class="bluetext">康复</span>：</font><font color=#f00>锁定技</font> 你的进攻距离+1；你的装备牌不计入手牌上限；当你脱离濒死状态或你击杀一名角色后，你回复一点体力并选择恢复一个装备栏<br><span class="bluetext">烬铸</span>：你可以把你的装备牌当做任意基本牌使用或打出'],			   
			   ['<span class="bluetext">代更</span>：每轮限一次，当一名角色翻面至武将牌背面朝上时，当前回合结束后，你可以执行一个额外的回合<br><span class="bluetext">键杀</span>：</font><font color=#f00>锁定技</font> 当你成为【杀】的目标时，若来源的武将牌正面朝上，你将手牌补至体力上限。若此【杀】造成伤害，该角色摸一张牌然后翻面'],
			   ['<span class="bluetext">键魂</span>：</font><font color=#f00>锁定技</font> 每轮游戏开始时，你随机获得一名未获得过的论外包角色的一个随机的技能（本技能须开启DIY的论外包）<br><span class="bluetext">承志</span>：非论外包的角色死亡时，你可以复制其所有技能和卡牌并获得之'],
			   ['<span class="bluetext">义写</span>：当一名其他角色的回合结束时，若其已受伤，你可交给其一张手牌，若此时其手牌数比你的多，你摸一张牌<br><span class="bluetext">谦虚</span>：</font><font color=#f00>锁定技</font> 你不能成为与你距离为1的角色使用的【杀】的目标，你使用的【杀】只能指定与你距离大于1的角色为目标，且你使用【杀】时至多额外指定一名目标'],
			   ['<span class="bluetext">极光</span>：你可在合适的时机选择一名角色并令其弃置其装备区的：<li>武器牌或进攻马，视为使用（未使用过【杀】且使用后本回合内你不能再使用【杀】）或打出一张【杀】<li>防具牌或防御马或宝物牌，视为使用或打出一张【闪】<br><span class="bluetext">卡战</span>：当一名角色的体力发生变化后，若其体力值为1，你可令其随机使用一张装备牌'],			   
			   ['<span class="bluetext">开车</span>：</font><font color=#f00>锁定技</font> 摸牌阶段摸牌时，你额外摸X张牌，你的手牌上限加X（X为场上女性角色数且至少为1）<br><span class="bluetext">圣神</span>：每轮限一次，当一名角色进入濒死状态时，你可以观看牌堆顶的两张牌，然后弃置其中一张红色牌视为对其使用一张【桃】。若其中没有红色牌且你有红色的手牌，你可以弃置你的所有红色手牌，视为对其使用一张【桃】'],
			   ['<span class="bluetext">管理</span>：出牌阶段限一次，你可令一名其他角色随机弃置一张手牌，若这张手牌为：基本牌，你视为对其使用一张不计次数限制的【杀】；锦囊牌，你视为对其使用一张不能被无懈可击的决斗；装备牌，你使用之'],
			   ['<span class="bluetext">绝地</span>：</font><font color=#f00>锁定技</font> 每当你造成或受到一点伤害获得一个“废”标记，标记达到五个“废”获得技能【求生】并失去此技能<br><span class="bluetext">求生</span>：</font><font color=#f00>锁定技</font> 每当你进入濒死状态时，弃置一枚“废”标记，回复体力至两点'],
			   ['<span class="bluetext">偷师</span>：出牌阶段限一次，你可以交给一名其他角色一张牌，若如此做，你获得一枚偷师标记并摸一张牌，且可选择获得该角色的一项技能（主公技、觉醒技、限定技除外）直到下个出牌阶段开始<br><span class="bluetext">求学</span>：<span class=greentext>觉醒技</span> 若你已发动至少3次【偷师】，你失去一点体力上限，回复1点体力并获得技能【高产】<br><span class="bluetext">高产</span>：你的摸牌阶段摸牌时，你可令摸牌数+X（X为偷师标记数），然后偷师标记清零'],
			   ['<span class="bluetext">烟雨</span>：当一名其他角色失去装备牌后，你可选择其中的一张立即使用之<br><span class="bluetext">兵谋</span>：</font><font color=#f00>锁定技</font> 你的防御距离与你使用的【杀】的目标上限均等于你的攻击范围'],			   			   
			   ['<span class="bluetext">即死</span>：你的回合开始时，你可令所有体力值为1的其他角色依次失去一点体力<br><span class="bluetext">强抗</span>：</font><font color=#f00>锁定技</font> 你免疫受到属性伤害。当你受到非属性伤害后，你摸一张牌且弃置伤害来源一张牌'],
			   ['<span class="bluetext">巧技</span>：当一名其他角色摸牌阶段结束时，你可以观看其摸到的手牌并选择获得其中的一张基本牌，或摸一张牌，若如此做，本回合内有角色使用【杀】时，你成为额外的目标<br><span class="bluetext">反杀</span>：当你成为【杀】的目标时，你可弃置所有手牌中的【杀】，视为对来源使用一张【杀】'],
			   ['<span class="bluetext">透凉</span>：结束阶段，你可选择攻击范围内的1至X（你的手牌中的花色数）名其他角色，你与其各摸一张牌，令其直到其回合结束时，不能使用或打出基本牌<br><span class="bluetext">抗性</span>：当你成为其他角色的牌的唯一目标时，你可弃置一张与该牌同类别的手牌，令该牌的目标对调'],
			   ['<span class="bluetext">冷雨</span>：当你使用【杀】时，你可获得目标角色的一张手牌，若如此做，此【杀】造成伤害后，你须交给该角色一张手牌<br><span class="bluetext">军神</span>：出牌阶段开始时，你可选择获得以下其中一项直到回合结束：1.你使用的红色【杀】无次数限制，你使用的黑色【杀】无距离限制；2.你使用的【杀】可指定任意名目标且无视目标的防具'],
			   ['<span class="bluetext">奇思</span>：当你需要使用或打出一张基本牌时，若且你的武将牌为正面朝上，你可以将武将牌翻面，视为使用或打出了该基本牌<br><span class="bluetext">妙计</span>：回合外每轮限一次，当你需要使用【无懈可击】时，若你的武将牌背面朝上，你可以将武将牌翻面视为使用之'],
		       ['<span class="bluetext">造孽</span>：</font><font color=#f00>锁定技</font> 若你本回合击杀过角色，下个回合的准备阶段，你须弃置X张牌（X为你本局游戏中所击杀的角色总数）<br><span class="bluetext">配音</span>：</font><font color=#f00>锁定技</font> 当你失去装备区的牌后，你回复一点体力且摸一张牌<br><span class="bluetext">民卡</span>：你使用【杀】对其他角色造成伤害时，你可以弃置至多两张装备牌令增加等量点的伤害'],
			   ['<span class="bluetext">浅觞</span>：当一名其他角色弃牌阶段弃牌结束时，你可选择其所弃置的非装备牌中合理的一张并立即使用之<br><span class="bluetext">退坑</span>：</font><font color=#f00>锁定技</font> 你的防御距离加X（X为你已损失的体力值）'],
			   ['<span class="bluetext">咸鱼</span>：每回合限一次，当你使用非转化的【杀】造成伤害时，你可以翻面，令该角色横置且此伤害+1<br><span class="bluetext">伪新</span>：每回合限一次，当一名角色进入濒死状态时，你可以摸一张牌并翻面，令其回复一点体力'],
			   ['<span class="bluetext">神奈</span>：</font><font color=#f00>锁定技</font> 你使用【杀】的次数上限额外加X（你手牌中没带“伤害性”标签的牌的实时数量）<br><span class="bluetext">可爱</span>：当你受到伤害后或失去最后一张手牌后，你可令场上的所有男性角色依次选择是否交给你一张手牌，若其交给了你一张手牌，且其没有手牌或已受伤，其摸一张牌'],
			   ['<span class="bluetext">风华</span>：出牌阶段限一次，你可与一名其他角色拼点，若你赢，本回合内，你与该角色的距离为1且你使用【杀】时，可令此【杀】不可闪避。若你没赢，你回复一点体力<br><span class="bluetext">遗忘</span>：当你使用的【杀】被闪避时，你可令目标角色翻面'],
			   ['<span class="bluetext">流沙</span>：回合外，当你失去牌时，你可弃置一名角色区域内的一张牌，若此牌具有攻击伤害性，你摸一张牌'],
			   ['<span class="bluetext">概念</span>：出牌阶段限一次，你可声明一张基本牌或普通锦囊牌，若如此做，若你未发动技能【黑猫】，你须失去一点体力并翻面，然后令场上所有其他角色弃置一张与你所声明的牌名字相同的手牌，否则你摸一张牌<br><span class="bluetext">黑猫</span>：<span class=greentext>觉醒技</span> 当你进入濒死状态时，你弃置你区域内的所有牌并重置武将牌，回复体力至体力上限并将手牌补至体力上限，然后选择一名已阵亡的角色令其复活，体力回复至体力上限并补手牌至体力上限。若为身份局，你与其交换身份牌'],
			   ['<span class="bluetext">公告</span>：当你受到伤害后，你可声明一种牌的类型，然后令回合外曾对你造成过伤害的所有其他角色交给你一张手牌，否则你弃置其一张手牌并视为对其使用一张【杀】。若其交给你的牌与你声明的类型相同，其摸一张牌<br><span class="bluetext">禁言</span>出牌阶段限一次，若场上没角色被禁言，你可以选择一名其他角色并声明一种花色，其因被禁言只能使用该花色的牌，直到其使用这花色的牌才解除禁言状态'],
			   ['<span class="bluetext">星城</span>：当你受到伤害后，你可将牌堆顶的一张牌置于一名没有“星”的其他角色的武将牌上，称为“星”；当一名角色阵亡或受到你造成的伤害时，若其有“星”，你可以获得该角色的“星”<br><span class="bluetext">寰宇</span>：出牌阶段限一次，你可将场上所有有“星”的角色的“星”收为手牌，然后再逐一将一张手牌当“星”放置于这些角色的武将牌上<br><span class="bluetext">玄侠</span>：<span class=yellowtext>限定技</span> 当你进入濒死状态时，你可回复体力至场上“星”的数量，然后获得场上所有的“星”，并分别视为对这些角色使用一张【杀】'],
			   ['<span class="bluetext">释援</span>：出牌阶段限一次，你可以选择交给一至X名有手牌的其他角色各一张手牌，然后令这些角色分别交给你一张其他的手牌(X为场上手牌数小于其体力上限的角色数)<br><span class="bluetext">勤言</span>：</font><font color=#f00>锁定技</font> 回合内，当你失去所有手牌后，你将手牌补至当前体力值且你本回合对本回合发动“释援”的目标使用牌时，无视距离和次数限制'],
			   ['<span class="bluetext">弹杀</span>：当你受到伤害时，你可先选择是否令一名没“丸”标记的其他角色获得“丸”标记，然后你再对场上随机一名有“丸”标记的角色造成等量点伤害并令其随机弃置一张牌<br><span class="bluetext">论破</span>：任意有“丸”标记的角色弃牌阶段弃牌时，若其弃置的牌均为不同花色的牌时，你可选择一项：①回复一点体力并摸一张牌；②令该角色受到你造成的一点伤害，然后其弃置“丸”标记'],
			   ['<span class="bluetext">血刀</span>：当一名角色使用一张武器牌后，你可弃置其攻击范围内的一名有手牌的其他角色的一张手牌，若这张手牌的颜色为红色，则被弃置手牌的角色视为对使用武器牌的角色使用一张不计入次数限制的【杀】<br><span class="bluetext">少主</span>：当你成为【杀】的目标时，你可令攻击范围包含该角色的除了你与其的所有其他角色依次对该角色选择使用一张【杀】，否则你获得该应使用【杀】的角色一张牌'],
			   ['<span class="bluetext">接管</span>：一名其他角色出牌阶段开始时，若其有手牌且手牌数不小于你的，你可以获得其一张手牌。若如此做，此阶段结束时，若其造成过伤害，则视为其对你使用一张【杀】，否则你视为对其使用一张【杀】<br><span class="bluetext">色批</span>：每名女性角色的出牌阶段限一次，其可弃置一张手牌，然后其弃置你的一张手牌，若这两张手牌颜色相同，其与你各选择摸一张牌或回复一点体力(若任一方没受伤则改为摸一张牌)，否则各摸一张牌'],
			   ['<span class="bluetext">鸽子</span>：转换技，出牌阶段限一次效果：<li>阳：你可弃置一张红色手牌并令任意名有手牌的角色各展示一张手牌，然后你可展示一张手牌，横置/重置展示牌与该牌颜色相同的角色，然后若已横置的角色比未模置的多，你摸一张牌<li>阴：你交给一名其他角色一张黑色手牌，令其选择至少一名角色，然后你选择横置/重置其所选择的或未选择的角色，然后若已横置的角色比未模置的多，你摸一张牌<br><span class="bluetext">无情</span>：</font><font color=#f00>锁定技</font> 当一名角色受到属性伤害后，你摸一张牌'],
               ['<span class="bluetext">短歌</span>：摸牌阶段摸牌时，你可放弃摸牌，改为展示牌堆顶的五张牌，然后选择获得其中任意张点数同为奇数或同为偶数的牌，再将剩下的牌按先后顺序置于牌堆顶<br><span class="bluetext">美化</span>：每名角色的回合限一次，当一名角色使用一张单一目标的非装备牌、非延时锦囊牌的牌时，你可展示牌堆顶的两张牌，选择改用其中合理的一张牌'],
               ['<span class="bluetext">孤城</span>：</font><font color=#f00>锁定技</font> 游戏轮数为奇数/偶数的回合，你不能成为点数为奇数/偶数的【杀】的目标<br><span class="bluetext">葬月</span>：</font><font color=#f00>锁定技</font> 回合结束阶段，你可选择一种花色，然后令所有其他角色在其下个结束阶段前，其回合内使用该花色的牌后将武将牌翻面<br><span class="bluetext">飞雪</span>：当你使用【杀】时，你可令此【杀】额外指定所有武将牌背面朝上的角色，然后令这些角色翻面'],
               ['<span class="bluetext">风云</span>：</font><font color=#f00>锁定技</font> 当你受到伤害后，你从随机展示的三个【文武英杰】扩展的技能中选择一个获得(本技能除外)'],
               ['<span class="bluetext">青冢</span>：出牌阶段限一次，你可以弃置任意张基本牌，并指定你攻击范围内等量名其他角色，分别视为对这些角色使用了一张无次数限制的【杀】<br><span class="bluetext">接更</span>：每名角色的回合限一次，当一名其他角色使用一张单目标的基本牌或非延时性锦囊牌时（借刀杀人、无懈可击除外），你可视为你对目标角色也使用此牌'],
	
              
    
			   ];
		lib.game.createview(node,charalist,liblist);
                        }
                    },
                },
            }
        }, {
            translate: '凉茶',
            config: {
	      			wwyj_openmusic: {
                    name: '开启专属音乐',
                    init: true,
                    intro: "开启本模式的专属音乐！",
                    frequent: true,
                    restart: true,
                },
				wwyj_openhelp:{
					name:"文武英杰",
					init:"1",
					frequent:true,					
					item:{"1":"模式介绍","2":"<li>本模式为图鉴模式，仅用于展示《文武英杰》扩展中的角色信息，包括角色介绍、角色技能、角色分析等内容"},
				},
            },
            onremove: function () {
                game.clearModeConfig('wenwuyingjiepicture');
            }
        })
        image: ['extension/文武英杰/wenwuyingjiepicture.jpg'];
				
};
},help:{
    "文武英杰":"<li>特别鸣谢：苏婆玛丽奥、瓦力、诗笺、一条咸鱼、雾雨家的魔理沙、无情鸽子、极光",
},config:{
    "wwyj_help":{
    "nopointer":true,
	  	"name":"文武英杰",
	  	"init":"1",
	  	"item":{"1":"查看介绍",
	  	      "2":"<li>嗨～"+lib.config.connect_nickname+"！欢迎您前来体验《文武英杰》扩展哦！",
	  	      "3":"<li>本扩展的武将均为无名杀的众多作者与玩家，强度相对平衡，AI智商高，包含多种特效与模式",
	          "4":"<li>若武将界面没显示图片或点将找不到本扩展的角色，请先开启武将菜单界面的右上角的总开关，然后重启游戏，即可显示武将插画",
	          "5":"<li>本扩展几乎零BUG、零弹窗，能在关闭兼容模式情况下流畅运行，若发现BUG可到无名杀官方扩展群：852740627 @玉蝴蝶 进行反馈，有技能设计的建议也可联系作者",	  	            
	  	 },
   	},				
	"wwyj_lebusishu":{
        "name":"乐不思蜀",
        "intro":"开启后重启游戏生效。武将被“乐”时会有个贴有“乐”字的门关着",
         init:false
    },	
    "wwyj_chat":{
        "name":"武将聊天",
        "intro":"开启后重启游戏生效。武将偶然会说话",
         init:false
    },	    
	"wwyj_huanleyinxiao":{
        "name":"欢乐音效",
        "intro":"开启后重启游戏生效。玩家角色的出牌阶段开始时，会有敲门音伴“该你了”的提示音；角色阵亡时，后台会唱两句《凉凉》送给死者（原为黑人抬棺的BGM，因太长而改了）",
         init:false
    },	
    "wwyj_gengminghuanxing":{
	    "name":'更名换姓',
        "intro":"开启后重启游戏生效，更改部分角色的姓名。<li>凉茶：玉蝴蝶<li>太上大牛：落影逝尘<li>松岛枫桂花：黑猫",
         init:false
	},
    "wwyj_changeGroup":{
	    "name":'替换势力',
        "intro":"开启后重启游戏生效，将本扩展中的“杀”势力随机替换为官方“魏蜀吴群”中的一种势力",
         init:false
	},		
	"wwyj_jishatexiao":{
        "name":"击杀特效",
        "intro":"开启后重启游戏生效。场上有人击杀另一名角色后会播放动画",
         init:false
    },	    
    "wwyj_hezizhashi":{
        "name":"何子诈尸",
        "intro":"稍改作者包的经典模式，开启后重启游戏生效。<li>效果：</font><font color=#f00>锁定技</font> 当一名角色阵亡后，若场上没有“何子风云”，“何子风云”在该阵亡角色身上复活，并令所有其他角色受到一点伤害，然后当前回合结束后，“何子风云”执行一个额外的回合",
         init:false
	},		
    "wwyj_sjwjp":{
        "name":"随机武将",
        "intro":"开启后重启游戏生效。每轮开始时，所有角色随机替换武将牌",
         init:false
	},		
	"wwyj_yinglingfuhun":{
        "name":"英灵附魂",
        "intro":"开启后重启游戏生效。所有的角色在游戏开始或进入游戏时，各从五名随机武将中选一名当作“附灵武将”并获得其所有的技能",
         init:false
	},
	"wwyj_normalize": {
		"name": "天神降临",
		"intro":"开启后重启游戏生效。本扩展中的BOSS挑战武将能在非“挑战”模式下被选用",
	     init: false
	},	
	"wwyj_xinname":{
           name:'武将前缀',
           intro:'选择是否显示★武将前缀',
           init:'show',
           item:{               
                 show:'显示',
                 hide:'隐藏',
           },
      },     	   	  		
	"wwyj_music":{
      name:"专属音乐",
      "intro":"专属背景音乐：可随意点播、切换优质动听的背景音乐",
       init:'1',
			item:{
				'1':'默认',				
				'2':'凉茶',				
			},			
		 onclick:function (item){
			switch (item){
			case '1':
			ui.backgroundMusic.pause();
			game.playBackgroundMusic();
			break;
			case '2':
    ui.backgroundMusic.pause();        
    ui.backgroundMusic.src=lib.assetURL+'extension/文武英杰/wwyj_music.mp3';    
    setInterval(function(){
	 	ui.backgroundMusic.src= lib.assetURL+"extension/文武英杰/wwyj_music.mp3";
	},85000);		    
 	    ui.backgroundMusic.addEventListener('ended',function(){
 	  
    if(lib.config.background_music=='music_off'){
        ui.backgroundMusic.src='';
    }else{
        ui.backgroundMusic.src= lib.assetURL+"extension/文武英杰/"+lib.config.wwyj_music+".mp3";
    };

				/*old:
				ui.backgroundMusic.src= lib.assetURL+"extension/文武英杰/"+lib.config.wwyj_music+".mp3";
				ui.backgroundMusic.play();*/
			});         
			break;	
			}
			}
		},			
	"wwyj_picture":{
           name:"专属图片",
          "intro":"专属背景图片：可随意切换精美的背景图片",
            init:'1',
			item:{
				'1':'默认背景',				
				'2':'文武英杰',
				'3':'明眸皓齿',
			},			
		 onclick:function (item){
			switch (item){
			case '1':		
			game.broadcastAll()+ui.background.setBackgroundImage('image/background/'+lib.config.image_background+'.jpg');
			break;
			case '2':
            ui.background.setBackgroundImage('extension/文武英杰/wenwuyingjie.jpg');
			break;	
			case '3':
            ui.background.setBackgroundImage('extension/文武英杰/wwyj_yuhudiebz.jpg');
			break;
			}
			}
		},				
	/*"wwyjtujian":{
			"name":"<b><p align=center><span style=\"font-size:18px\">-------图鉴模式-------</span>",
			"clear":true,
			"nopointer":true,
 	},*/
	"wwyj_tujian":{
			"name":"图鉴模式",
			"init":"1",	
			item:{
			"1":"模式介绍",
			"2":"<li>点击下方的“打开图鉴”，会重启游戏并进入图鉴模式。本模式仅用于展示《文武英杰》扩展中的角色信息，包括角色介绍、角色技能、角色分析等内容"
			},
	},
	"openwwyj_tujian":{
			"name":"打开图鉴<div>&gt;</div>",
			"clear":true,
			onclick:function(){
				game.saveConfig('mode','wenwuyingjiepicture');
				localStorage.setItem(lib.configprefix+'directstart',true);
				game.reload();
			},
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
    author:"凉茶||玉蝴蝶<li>加入<div onclick=window.open('https://jq.qq.com/?_wv=1027&k=5qvkVxl')><span style=\"color: green;text-decoration: underline;font-style: oblique\">无名杀官方扩展群</span></div><span style=\"font-style: oblique\">参与讨论</span>",
    diskURL:"",
    forumURL:"",
    version:"1.10",
},files:{"character":[],"card":[],"skill":[]}}})
