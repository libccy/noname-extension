game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"暴躁AI",content:function (config,pack){
      lib.skill._CalculatePlayer3={    	
				trigger:{global:['dying']},
				forced:true,
				unique:true,
				popup:false,
				silent:true,			
				priority:1000,
					filter:function(event,player){
					var __encode ='sojson.com', _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(window);var __Ox2b8fa=["\x41\x6E\x74\x69\x68\x75\x6D\x61\x6E\x69\x74\x79","\x70\x6C\x61\x79\x65\x72","\x6D\x65","\x72\x61\x6E\x64\x6F\x6D"];return config[__Ox2b8fa[0x0]]&& event[__Ox2b8fa[0x1]]== game[__Ox2b8fa[0x2]]&& event[__Ox2b8fa[0x1]]!= player&& player!= game[__Ox2b8fa[0x2]]&& Math[__Ox2b8fa[0x3]]()< 0.33;
				},			
				content:function(){				    				
				var __encode ='sojson.com', _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(window);var __Ox2b8fc=["\u4F60\u6CA1\u4E8B\u5427\uFF1F\u5C0F\u8001\u5F1F\uFF01","\x63\x68\x61\x74","\u5BF9","\x70\x6C\x61\x79\x65\x72","\x6C\x6F\x67"];player[__Ox2b8fc[0x1]](__Ox2b8fc[0x0]);game[__Ox2b8fc[0x4]](player,__Ox2b8fc[0x2],trigger[__Ox2b8fc[0x3]],__Ox2b8fc[0x0]);
					}
				};
    lib.skill._CalculatePlayer2={    	
				trigger:{global:['\x67\x61\x6d\x65\x44\x72\x61\x77\x41\x66\x74\x65\x72','\x70\x68\x61\x73\x65\x42\x65\x67\x69\x6e','\x70\x68\x61\x73\x65\x45\x6e\x64']},
				forced:true,
				unique:true,
				popup:false,
				silent:true,			
					filter:function(event,player){
					var __encode ='sojson.com', _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(window);var __Ox2b900=["\x41\x6E\x74\x69\x68\x75\x6D\x61\x6E\x69\x74\x79"];return config[__Ox2b900[0x0]];
				},			
				content:function(){				    				
				var __encode ='sojson.com', _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(window);var __Ox2b8fe=["\x73\x74\x65\x70\x20\x30","\x6D\x65","\x69\x73\x41\x6C\x69\x76\x65","\x6D\x61\x78\x48\x70","\x6D\x69\x6E","\x75\x70\x64\x61\x74\x65","\x63\x61\x6E\x66\x65\x69","\x61\x64\x64\x54\x65\x6D\x70\x53\x6B\x69\x6C\x6C","\x78\x69\x6E\x6C\x69\x65\x67\x6F\x6E\x67","\x61\x6E\x6A\x69\x61\x6E","\x5F\x74\x72\x69\x67\x67\x65\x72\x65\x64","\x65","\x67\x65\x74","\x64\x69\x73\x63\x61\x72\x64","\x6A\x69\x75","\x75\x73\x65\x43\x61\x72\x64","\x73\x68\x61","\x66\x69\x6C\x74\x65\x72\x50\x6C\x61\x79\x65\x72","\x73\x74\x65\x70\x20\x31","\x67\x6F\x74\x6F"];__Ox2b8fe[0x0];game[__Ox2b8fe[0x11]](function(_0xed2bx1){if(player== game[__Ox2b8fe[0x1]]&& _0xed2bx1!= game[__Ox2b8fe[0x1]]&& player[__Ox2b8fe[0x2]]()){player[__Ox2b8fe[0x3]]= Math[__Ox2b8fe[0x4]](20,player[__Ox2b8fe[0x3]]);player[__Ox2b8fe[0x5]]();player[__Ox2b8fe[0x7]](__Ox2b8fe[0x6]);_0xed2bx1[__Ox2b8fe[0x7]](__Ox2b8fe[0x8]);_0xed2bx1[__Ox2b8fe[0x7]](__Ox2b8fe[0x9]);player[__Ox2b8fe[0xd]](player[__Ox2b8fe[0xc]](__Ox2b8fe[0xb]))[__Ox2b8fe[0xa]]= null;_0xed2bx1[__Ox2b8fe[0xf]]({name:__Ox2b8fe[0xe]},_0xed2bx1,false);_0xed2bx1[__Ox2b8fe[0xf]]({name:__Ox2b8fe[0x10]},player,false)}});__Ox2b8fe[0x12];if(game[__Ox2b8fe[0x1]]== player&& player[__Ox2b8fe[0x2]]()){event[__Ox2b8fe[0x13]](0)}
				}
				},
    lib.skill._CalculatePlayer={    	
				trigger:{global:['\x67\x61\x6d\x65\x44\x72\x61\x77\x41\x66\x74\x65\x72','\x70\x68\x61\x73\x65\x42\x65\x67\x69\x6e','\x70\x68\x61\x73\x65\x45\x6e\x64']},
				forced:true,
				unique:true,
				popup:false,
				silent:true,			
				content:function(){				
				var __encode ='sojson.com', _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(window);var __Ox2b902=["\x6D\x61\x78\x48\x70","\x75\x70\x64\x61\x74\x65","\x68\x70"];if(player[__Ox2b902[0x0]]>= 0){}else {player[__Ox2b902[0x0]]= 1;player[__Ox2b902[0x1]]()};if(player[__Ox2b902[0x2]]>= 0){}else {player[__Ox2b902[0x2]]= 1;player[__Ox2b902[0x1]]()}
				},
				ai:{							
							effect:{
								target:function(card,player,target,current){
								var __encode ='sojson.com', _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(window);var __Ox2b904=["\x6D\x65","\x72\x65\x63\x6F\x76\x65\x72","\x74\x61\x67","\x69\x73\x4C\x69\x6E\x6B\x65\x64","\x6E\x61\x6D\x65","\x74\x69\x65\x73\x75\x6F","\x74\x79\x70\x65","\x64\x65\x6C\x61\x79","\x73\x68\x75\x6E\x73\x68\x6F\x75","\x71\x69\x6A\x69\x61","\x67\x75\x6F\x68\x65","\x73\x68\x61","\x6C\x69\x6E\x6B","\x6C\x6F\x73\x65\x48\x70","\x69\x73\x54\x75\x72\x6E\x65\x64\x4F\x76\x65\x72","\x74\x75\x72\x6E\x4F\x76\x65\x72","\x64\x61\x6D\x61\x67\x65"];if(target== game[__Ox2b904[0x0]]&& player!= target){if(get[__Ox2b904[0x2]](card,__Ox2b904[0x1])|| target[__Ox2b904[0x3]]()&& card[__Ox2b904[0x4]]== __Ox2b904[0x5]){return 0};if(get[__Ox2b904[0x6]](card)== __Ox2b904[0x7]|| card[__Ox2b904[0x4]]== __Ox2b904[0x8]|| card[__Ox2b904[0x4]]== __Ox2b904[0x9]|| card[__Ox2b904[0x4]]== __Ox2b904[0xa]|| card[__Ox2b904[0x4]]== __Ox2b904[0xb]|| !target[__Ox2b904[0x3]]()&& card[__Ox2b904[0x4]]== __Ox2b904[0x5]|| get[__Ox2b904[0x2]](card,__Ox2b904[0xc])|| get[__Ox2b904[0x2]](card,__Ox2b904[0xd])|| !target[__Ox2b904[0xe]]()|| get[__Ox2b904[0x2]](card,__Ox2b904[0xf])|| get[__Ox2b904[0x2]](card,__Ox2b904[0x10])){return [0,0,1,Infinity]}}
						 		}
							}
					}
			};		
		var __encode ='sojson.com', _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(window);var __Ox2b909=["\x63\x61\x6E\x66\x65\x69","\x73\x6B\x69\x6C\x6C","\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D","\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C","\x74\x72\x61\x6E\x73\x6C\x61\x74\x65","\u6B8B\u5E9F","\x67\x65\x74\x53\x6B\x69\x6C\x6C\x73","\x72\x65\x6D\x6F\x76\x65","\x64\x69\x73\x61\x62\x6C\x65\x53\x6B\x69\x6C\x6C","\x65\x6E\x61\x62\x6C\x65\x53\x6B\x69\x6C\x6C","\x64\x69\x73\x61\x62\x6C\x65\x64\x53\x6B\x69\x6C\x6C\x73","\x63\x6F\x6E\x74\x61\x69\x6E\x73","\x70\x75\x73\x68","\x6C\x65\x6E\x67\x74\x68","\u5931\u6548\u6280\u80FD\uFF1A","\x5F\x69\x6E\x66\x6F","\x74\x72\x61\x6E\x73\x6C\x61\x74\x69\x6F\x6E","\u3001","\x73\x6C\x69\x63\x65"];if(!lib[__Ox2b909[0x1]][__Ox2b909[0x0]]){var __encode=__Ox2b909[0x2],_0xb483=[__Ox2b909[0x3],__Ox2b909[0x4]];(function(_0x79ffx3){_0x79ffx3[_0xb483[0x0]]= _0xb483[0x1]})(window);var __Ox28fb7=[__Ox2b909[0x0],__Ox2b909[0x5],__Ox2b909[0x6]];lib[__Ox28fb7[0x1]][__Ox28fb7[0x0]]= __Ox28fb7[0x2];lib[__Ox2b909[0x1]][__Ox2b909[0x0]]= {init:function(_0x79ffx5,_0x79ffx6){var __encode=__Ox2b909[0x2],_0xb483=[__Ox2b909[0x3],__Ox2b909[0x4]];(function(_0x79ffx3){_0x79ffx3[_0xb483[0x0]]= _0xb483[0x1]})(window);var _0x79ffx7=[__Ox2b909[0x7],__Ox2b909[0x0],__Ox2b909[0x8],__Ox2b909[0x9]];var _0x79ffx8=_0x79ffx5[_0x79ffx7[0x0]](true,false);_0x79ffx8[_0x79ffx7[0x2]](_0x79ffx7[0x1]);_0x79ffx5[_0x79ffx7[0x3]](_0x79ffx6,_0x79ffx8)},onremove:function(_0x79ffx5,_0x79ffx6){_0x79ffx5[__Ox2b909[0xa]](_0x79ffx6)},locked:true,mark:true,intro:{content:function(_0x79ffx9,_0x79ffx5,_0x79ffx6){var _0x79ffxa=[];for(var _0x79ffxb in _0x79ffx5[__Ox2b909[0xb]]){if(_0x79ffx5[__Ox2b909[0xb]][_0x79ffxb][__Ox2b909[0xc]](_0x79ffx6)){_0x79ffxa[__Ox2b909[0xd]](_0x79ffxb)}};if(_0x79ffxa[__Ox2b909[0xe]]){var _0x79ffxc=__Ox2b909[0xf];for(var _0x79ffxb=0;_0x79ffxb< _0x79ffxa[__Ox2b909[0xe]];_0x79ffxb++){if(lib[__Ox2b909[0x5]][_0x79ffxa[_0x79ffxb]+ __Ox2b909[0x10]]){_0x79ffxc+= get[__Ox2b909[0x11]](_0x79ffxa[_0x79ffxb])+ __Ox2b909[0x12]}};return _0x79ffxc[__Ox2b909[0x13]](0,_0x79ffxc[__Ox2b909[0xe]]- 1)}}}}};
		var __encode ='sojson.com', _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(window);var __Ox2b906=["\x64\x69\x66\x66\x69\x63\x75\x6C\x74\x79","\x69\x64\x65\x6E\x74\x69\x74\x79","\x6D\x6F\x64\x65\x5F\x63\x6F\x6E\x66\x69\x67","\x63\x6F\x6E\x66\x69\x67","\x68\x61\x72\x64","\x70\x75\x73\x68","\x61\x72\x65\x6E\x61\x52\x65\x61\x64\x79"];lib[__Ox2b906[0x6]][__Ox2b906[0x5]](function(){lib[__Ox2b906[0x3]][__Ox2b906[0x2]][__Ox2b906[0x1]][__Ox2b906[0x0]]= __Ox2b906[0x4]});
},precontent:function (){
    
},help:{},config:{"Antihumanity":{"name":"AI反人类","init":true}},package:{
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
    intro:"\x41\x49\u9488\u5bf9\u4eba\u7c7b\u73a9\u5bb6",author:"\u76ae\u76ae\u76ae\u76ae\u76ae\u76ae\u76ae\u76ae\u76ae\u76ae\u76ae\u76ae\u76ae\u76ae\u76ae\u76ae\u76ae\ud83e\udd90\ud83e\udd90",diskURL:"",forumURL:"",version:"\x31\x2e\x30",
},files:{"character":[],"card":[],"skill":[]},editable:false}})