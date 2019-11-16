game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"击杀特效",editable:false,content:function (config,pack){
    			if(config.jstxjisha){		
        lib.skill._jstx_jisha={
        trigger:{
        global:"gameStart",      
        source:"dieBegin",
        },
        forced:true,
        priority:2019,
     content:function (){
     game.countPlayer(function(current){
     current.addSkill('jstx_jisha');
     if(current==player){
     if(trigger.name=='die'){
     if(current.storage.jstx_jisha==1) { current.$fullscreenpop('一血  卧龙出山','fire'); game.playjstx('jstx_jisha1'); }
     if(current.storage.jstx_jisha==2) { current.$fullscreenpop('双杀  一战成名','water'); game.playjstx('jstx_jisha2'); }
     if(current.storage.jstx_jisha==3) { current.$fullscreenpop('三杀  举世皆惊','thunder'); game.playjstx('jstx_jisha3'); }
     if(current.storage.jstx_jisha==4) { current.$fullscreenpop('四杀  天下无敌','fire'); game.playjstx('jstx_jisha4'); }
     if(current.storage.jstx_jisha==5) { current.$fullscreenpop('五杀  诛天灭地','thunder'); game.playjstx('jstx_jisha5'); }
     if(current.storage.jstx_jisha==6) { current.$fullscreenpop('六杀  癫狂杀戮','water'); game.playjstx('jstx_jisha6'); }
     if(current.storage.jstx_jisha==7) { current.$fullscreenpop('无双  万军取首','fire'); game.playjstx('jstx_jisha7'); }
//	 if(current.storage.jstx_jisha==8) { current.$fullscreenpop('八杀  赶尽杀绝','fire'); game.playjstx('jstx_jisha8'); }
//	 if(current.storage.jstx_jisha==9) { current.$fullscreenpop('九杀  神哭鬼嚎','fire'); game.playjstx('jstx_jisha9'); }
//	 if(current.storage.jstx_jisha==10) { current.$fullscreenpop('十杀  震古烁今','fire'); game.playjstx('jstx_jisha10'); }   
         }
         }
         });
         },
         }
					 	     
		  lib.skill.jstx_jisha={
                		trigger:{source:"dieBegin"},
                		forced:true,                        
                  locked:true,     
                  unique:true,            
                  priority:Infinity,
                  init:function (player){
                  player.storage.jstx_jisha=0;
                  player.unmarkSkill('jstx_jisha');
                  player.syncStorage('jstx_jisha');
                  },
                 content:function (){
                  player.storage.jstx_jisha++;
                  player.markSkill('jstx_jisha');
                  player.syncStorage('jstx_jisha');
                  player.update();
                  },
            					marktext:"杀",
                 	intro:{
          		 					content:function (storage){
         				 				return '你已击杀'+storage+'名角色';
          	 						},
            						},
                  }	                  	
																																									
						lib.skill._jstxmiaoshouhuichun={
						 trigger:{global:'xmiaoshou'},
							filter:function(event,player){
								return event.player==player;
							},
							priority:100,
							forced:true,
							content:function(){
							trigger.player.$fullscreenpop('妙手回春','water');
							game.playjstx('jstxmiaoshouhuichun');
							},
						}
						
						lib.skill._jstxyishugaochao={
			 			trigger:{global:'xyishu'},
							filter:function(event,player){
								return event.player==player;
							},
							priority:100,
							forced:true,
							content:function(){
							trigger.player.$fullscreenpop('医术高超','water');
							game.playjstx('jstxyishugaochao');
							},
						}
						
						lib.skill._recovertrigger={
							trigger:{global:'recoverEnd'},
							filter:function(event,player){
								if(_status.currentPhase!=player){
									return event.player!=event.source&&event.source==player;
								}
								return true;
							},
							direct:true,
							content:function(){
								if(_status.currentPhase!=player){
									_status.event.trigger('xmiaoshou');
								}
								else {
									if(player.storage.jstxyishugaochao==undefined){
										player.storage.jstxyishugaochao = trigger.num;
									}
									else {
										player.storage.jstxyishugaochao+=trigger.num;
									}
									if(player.storage.jstxyishugaochao>=3){
										player.storage.jstxyishugaochao-=3;
										_status.event.trigger('xyishu');
									}
								}
							},
							group:'_recovertrigger_Delete',
							subSkill:{
								Delete:{
									trigger:{player:'phaseEnd'},
									direct:true,
									content:function(){
										delete player.storage.jstxyishugaochao;
									},
								}
							}
						}
												
  	//   	lib.translate.jstx_jisha="击杀";
	  	//		lib.translate._jstx_jisha="击杀";
				//		lib.translate._jstxmiaoshouhuichun='妙手回春';
		//				lib.translate._jstxyishugaochao='医术高超';		
						}  
						//xin:
							if(config.xjstxjishatexiao){				
						  lib.skill._xjstx_jisha={
        trigger:{
        global:"gameStart",      
        source:"dieBegin",
        },
        forced:true,
        priority:2019,
     content:function (){
     game.countPlayer(function(current){
     current.addSkill('xjstx_jisha');
     if(current==player){
     if(trigger.name=='die'){
     if(current.storage.xjstx_jisha==1) { current.$skill('卧龙出山','fire','red','avatar'); game.playjstx('jstx_jisha1'); }
     if(current.storage.xjstx_jisha==2) { current.$skill('一战成名','fire','red','avatar'); game.playjstx('jstx_jisha2'); }
     if(current.storage.xjstx_jisha==3) { current.$skill('举世皆惊','thunder','red','avatar'); game.playjstx('jstx_jisha3'); }
     if(current.storage.xjstx_jisha==4) { current.$skill('天下无敌','fire','red','avatar'); game.playjstx('jstx_jisha4'); }
     if(current.storage.xjstx_jisha==5) { current.$skill('诛天灭地','fire','red','avatar'); game.playjstx('jstx_jisha5'); }
     if(current.storage.xjstx_jisha==6) { current.$skill('癫狂杀戮','thunder','red','avatar'); game.playjstx('jstx_jisha6'); }
     if(current.storage.xjstx_jisha==7) { current.$skill('万军取首','fire','red','avatar'); game.playjstx('jstx_jisha7'); }
         }
         }
         });
         },
         }
         lib.skill.xjstx_jisha={
                		trigger:{source:"dieBegin"},
                		forced:true,                        
                  locked:true,     
                  unique:true,            
                  priority:Infinity,
                  init:function (player){
                  player.storage.xjstx_jisha=0;
                  player.unmarkSkill('xjstx_jisha');
                  player.syncStorage('xjstx_jisha');
                  },
                 content:function (){
                  player.storage.xjstx_jisha++;
                  player.markSkill('xjstx_jisha');
                  player.syncStorage('xjstx_jisha');
                  player.update();
                  },
            					marktext:"杀",
                 	intro:{
          		 					content:function (storage){
         				 				return '你已击杀'+storage+'名角色';
          	 						},
            						},
                  }	        
                  lib.skill._jstxmiaoshouhuichun={
						 trigger:{global:'xmiaoshou'},
							filter:function(event,player){
								return event.player==player;
							},
							priority:100,
							forced:true,
							content:function(){
							trigger.player.$fullscreenpop('妙手回春','water');
							game.playjstx('jstxmiaoshouhuichun');
							},
						}
						
						lib.skill._jstxyishugaochao={
			 			trigger:{global:'xyishu'},
							filter:function(event,player){
								return event.player==player;
							},
							priority:100,
							forced:true,
							content:function(){
							trigger.player.$fullscreenpop('医术高超','water');
							game.playjstx('jstxyishugaochao');
							},
						}
						
						lib.skill._recovertrigger={
							trigger:{global:'recoverEnd'},
							filter:function(event,player){
								if(_status.currentPhase!=player){
									return event.player!=event.source&&event.source==player;
								}
								return true;
							},
							direct:true,
							content:function(){
								if(_status.currentPhase!=player){
									_status.event.trigger('xmiaoshou');
								}
								else {
									if(player.storage.jstxyishugaochao==undefined){
										player.storage.jstxyishugaochao = trigger.num;
									}
									else {
										player.storage.jstxyishugaochao+=trigger.num;
									}
									if(player.storage.jstxyishugaochao>=3){
										player.storage.jstxyishugaochao-=3;
										_status.event.trigger('xyishu');
									}
								}
							},
							group:'_recovertrigger_Delete',
							subSkill:{
								Delete:{
									trigger:{player:'phaseEnd'},
									direct:true,
									content:function(){
										delete player.storage.jstxyishugaochao;
									},
								}
							}
						}
         }
    game.playjstx = function(fn, dir, sex) {
			if (lib.config.background_speak) {
				if (dir && sex)
					game.playAudio(dir, sex, fn);
				else if (dir)
					game.playAudio(dir, fn);
				else
					game.playAudio('..', 'extension', '击杀特效', fn);
			}
		};
         
},precontent:function (){
    
},config:{
     	"jstxjisha":{
            name:'文字特效',
           "intro":"文字特效：开启此项（建议关闭图像特效项）后重启游戏生效。任意一名角色杀死一名其他角色后，会记录此为其在本局共杀死过几名角色，并播放相应击杀人次的文字动画和配音",
            init:true
		},							
			"xjstxjishatexiao":{
            name:'图像特效',
           "intro":"图像特效：开启此项（建议关闭文字特效项）后重启游戏生效。任意一名角色杀死一名其他角色后，会记录此为其在本局共杀死过几名角色，并播放相应击杀人次的武将动画和配音",
            init:false
		},							   
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
    intro:"本扩展有两种击杀特效，建议只打开其中一种（长按选项按钮可弹出简介）",
    author:"Sukincen",
    diskURL:"",
    forumURL:"",
    version:"1.0",
},files:{"character":[],"card":[],"skill":[]}}})