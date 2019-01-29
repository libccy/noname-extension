game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"作者包",content:function (config,pack){
lib.element.player[extensionExtraSkin[0]]=function(){
if (lib.character[this.name][4].contains('auskin')){
this.changeAuskin();
}
};
lib.element.player[extensionExtraSkin[1]]=function(){
if (this[extensionExtraSkin[2]]==extensionExtraCharacterSkin[0]){
var list=[0,1,2,3];
var skinnum=list.randomGet();
if (skinnum==0) {this.node.avatar.setBackgroundImage('extension/作者包/'+extensionExtraCharacterSkin[0]+'.jpg');  
if (lib.config.zzbpftxon) 	{
game[otherFunction[7]](game.authorGif('特效-纱雾1.gif',null,null,true),2500);		} }
if (skinnum==1) {this.node.avatar.setBackgroundImage('extension/作者包/'+extensionExtraCharacterSkin[1]+'.jpg');   
if (lib.config.zzbpftxon) 	{
var list=[1,2];
game[otherFunction[7]](game.authorGif('特效-纱雾'+list.randomGet()+'.gif',null,null,true),3000);		
if (!game.audioplaying||game.audioplaying==false) {
game.play作者包audio2('皮肤音效-纱雾1.mp3',false);
game.audioplaying=true;
}
setTimeout(function(){game.audioplaying=false},60000);
}		
}
if (skinnum==2) {this.node.avatar.setBackgroundImage('extension/作者包/'+extensionExtraCharacterSkin[2]+'.jpg');  
if (lib.config.zzbpftxon) 	{
var list=[1,2];
game[otherFunction[7]](game.authorGif('特效-纱雾'+list.randomGet()+'.gif',null,null,true),3000);		
if (!game.audioplaying||game.audioplaying==false) {
game.play作者包audio2('皮肤音效-纱雾2.mp3',false);
game.audioplaying=true;
}
setTimeout(function(){game.audioplaying=false},60000);
}		
}
if (skinnum==3) {this.node.avatar.setBackgroundImage('extension/作者包/'+extensionExtraCharacterSkin[3]+'.jpg');  
if (lib.config.zzbpftxon) 	{
var list=[1,2];
game[otherFunction[7]](game.authorGif('特效-纱雾'+list.randomGet()+'.gif',null,null,true),3000);		
if (!game.audioplaying||game.audioplaying==false) {
game.play作者包audio2('皮肤音效-纱雾3.mp3',false);
game.audioplaying=true;
}
setTimeout(function(){game.audioplaying=false},60000);
}		
}
}
if (this[extensionExtraSkin[2]]==extensionExtraCharacterSkin[4]){
var list=[0,1,2];
var skinnum=list.randomGet();
if (skinnum==0) {this.node.avatar.setBackgroundImage('extension/作者包/'+extensionExtraCharacterSkin[4]+'.jpg');   }
if (skinnum==1) {this.node.avatar.setBackgroundImage('extension/作者包/'+extensionExtraCharacterSkin[5]+'.jpg');   }
if (skinnum==2) {this.node.avatar.setBackgroundImage('extension/作者包/'+extensionExtraCharacterSkin[6]+'.jpg');  }
}
if (this[extensionExtraSkin[2]]==extensionExtraCharacterSkin[7]){
var list=[0,1,2];
var skinnum=list.randomGet();
if (skinnum==0) {this.node.avatar.setBackgroundImage('extension/作者包/'+extensionExtraCharacterSkin[7]+'.jpg');   }
if (skinnum==1) {this.node.avatar.setBackgroundImage('extension/作者包/'+extensionExtraCharacterSkin[8]+'.jpg');   }
if (skinnum==2) {this.node.avatar.setBackgroundImage('extension/作者包/'+extensionExtraCharacterSkin[9]+'.jpg');   }
}
if (this[extensionExtraSkin[2]]==extensionExtraCharacterSkin[10]){
var list=[0,1,2,3];
var skinnum=list.randomGet();
if (skinnum==0) {this.node.avatar.setBackgroundImage('extension/作者包/'+extensionExtraCharacterSkin[10]+'.jpg');   if (!this.storage.skined||this.storage.skined==true) this.storage.skined=false; }
if (skinnum==1) {this.node.avatar.setBackgroundImage('extension/作者包/'+extensionExtraCharacterSkin[11]+'.jpg');   
if (!this.storage.skined||this.storage.skined==false) this.storage.skined=true;
}
if (skinnum==2) {this.node.avatar.setBackgroundImage('extension/作者包/'+extensionExtraCharacterSkin[12]+'.jpg');  if (!this.storage.skined||this.storage.skined==false) this.storage.skined=true;}
if (skinnum==3) {this.node.avatar.setBackgroundImage('extension/作者包/'+extensionExtraCharacterSkin[13]+'.jpg');  if (!this.storage.skined||this.storage.skined==false) this.storage.skined=true;}
}


};
  lib.group.push('纱雾');
		lib.translate.纱雾='<img src='+lib.assetURL+"extension/作者包/zuozhe纱雾.jpg"+' width="25" height="25">';
 lib.group.push('呲牙哥');
		lib.translate.呲牙哥='<img src='+lib.assetURL+"extension/作者包/zuozhe牙哥.jpg"+' width="25" height="25">';
if (lib.config.zzbtimer==undefined) {
game.saveConfig('zzbtimer',5400);
}
else if (lib.config.zzbtimer<=0) {
game.saveConfig('zzbtimer',5400);
}
game.zzbpets={
xfz:{
gained:lib.config.zzbpetxfz,
attack:3,
attackup:2,
defence:1,
defenceup:1,
hp:2,
hpup:1,
mp:1,
mpup:1,
level:1,
exp:0,
maxlevel:10,
levelList:[1,2,4,8,16,32,64,128,256,512],
  },
xfn:{
gained:lib.config.zzbpetxfn,
attack:1,
attackup:1,
defence:3,
defenceup:1,
hp:3,
hpup:1,
mp:1,
mpup:1,
level:1,
exp:0,
maxlevel:10,
levelList:[1,2,4,8,16,32,64,128,256,512],
  },
lyy:{
gained:lib.config.zzbpetlyy,
attack:1,
attackup:1,
defence:1,
defenceup:1,
hp:2,
hpup:1,
mp:4,
mpup:2,
level:1,
exp:0,
maxlevel:10,
levelList:[1,2,4,8,16,32,64,128,256,512],
  },
xlh:{
gained:lib.config.zzbpetxlh,
attack:3,
attackup:2,
defence:1,
defenceup:1,
hp:2,
hpup:1,
mp:1,
mpup:1,
level:1,
exp:0,
maxlevel:10,
levelList:[1,2,4,8,16,32,64,128,256,512],
  },
ljs:{
gained:lib.config.zzbpetljs,
attack:2,
attackup:2,
defence:1,
defenceup:1,
hp:2,
hpup:1,
mp:1,
mpup:1,
level:1,
exp:0,
maxlevel:10,
levelList:[1,2,4,8,16,32,64,128,256,512],
  },
};
zzbIsNewYear=function(){
		var today = Date();
		if (today.toString().indexOf('Mon Feb 04 2019')>-1&&today.toString().indexOf('GMT+0800 (CST)')>-1) return 'isNewYear';
		else return 'isNotNewYear';
		};
  if(lib.config.霜华一笙==undefined){game[uiFunction[0]]('霜华一笙','off');}
if(lib.config.monitorPlayers==undefined){game[uiFunction[0]]('monitorPlayers','off');}
if(lib.config.authorzima==undefined){game[uiFunction[0]]('authorzima',0);}
if(lib.config.gift0gained==undefined){game[uiFunction[0]]('gift0gained',0);}
if(lib.config.gift1gained==undefined){game[uiFunction[0]]('gift1gained',0);}
if(lib.config.gift2gained==undefined){game[uiFunction[0]]('gift2gained',0);}
if(lib.config.gift3gained==undefined){game[uiFunction[0]]('gift3gained',0);}
if(lib.config.gift5gained==undefined){game[uiFunction[0]]('gift5gained',0);}
if(lib.config.gift6gained==undefined){game[uiFunction[0]]('gift6gained',0);}
if(lib.config.gift7gained==undefined){game[uiFunction[0]]('gift7gained',0);}
if(lib.config.gift8gained==undefined){game[uiFunction[0]]('gift8gained',0);}
if(lib.config.gift9gained==undefined){game[uiFunction[0]]('gift9gained',0);}
if(lib.config.gift10gained==undefined){game[uiFunction[0]]('gift10gained',0);}
if(lib.config.zzbpetxfz==undefined){game[uiFunction[0]]('zzbpetxfz',0);}
if(lib.config.zzbpetxfn==undefined){game[uiFunction[0]]('zzbpetxfn',0);}
if(lib.config.zzbpetlyy==undefined){game[uiFunction[0]]('zzbpetlyy',0);}
if(lib.config.zzbpetxlh==undefined){game[uiFunction[0]]('zzbpetxlh',0);}
if(lib.config.zzbpetljs==undefined){game[uiFunction[0]]('zzbpetljs',0);}
if(lib.config.about==undefined){game[uiFunction[0]](uiFunction[16],0);}

if (lib.config.zzbtimer2==undefined) {
game.saveConfig('zzbtimer2','zzbtime');
}
if (lib.config.zzbNewYearGiftGained==undefined) {
game.saveConfig('zzbNewYearGift','false');
}
zzbCountTime=function(){
if (lib.config.zzbtimer<=0) return '点击领取累计在线奖励';
else {
var h,m,s,str;
h=Math.floor(lib.config.zzbtimer/3600);
m=Math.floor(lib.config.zzbtimer/60);
while (m>=60){
m-=60;
  }
s=lib.config.zzbtimer;
while (s>=60){
s-=60;
  }
str='离领取下一个在线奖励还差: '+h+':'+m+':'+s;
return str;
}
};
if (lib.config.zzbSigned==undefined) {
game.saveConfig('zzbSigned',false);
}


var zzbtimer1=setInterval(function(){
if (lib.config.zzbtimer<=0) clearInterval(zzbtimer1);
else {
game.saveConfig('zzbtimer',lib.config.zzbtimer-1);
game.saveConfig('zzbtimer2',zzbCountTime());
document.getElementById("zzbOnlineTimeButton").innerHTML=zzbCountTime();

  }
},1000);

    if (lib.config.about==uiFunction[17]){
		game[otherFunction[9]]({
				character:{ 
 zzbabout:["female","author",3,["zzbaboutfux2","zzbaboutkamukura","zzbaboutvenominaga","zzbaboutcj","zzbaboutex_wuzang","zzbaboutchallenge_zhenji"],[]],
},
				skill:{
            "zzbaboutfux2":{
                trigger:{
                    global:otherFunction[4],
                },
                forced:true,
                filter:function (event,player){
var fux2=game.findPlayer(function(current){
            return current.name=='zuozhefux';
        });  
return game.zuozheName(player,'zzbabout')&&fux2;
},
                content:function (){
var encode_version = 'www.github.noname.extensionPack.作者包.net';var __0x2a21d=['\x77\x72\x41\x58\x77\x37\x4a\x4b\x77\x37\x58\x43\x6f\x73\x4f\x68\x77\x37\x78\x64','\x77\x70\x55\x4b\x55\x7a\x62\x43\x6d\x52\x38\x3d','\x77\x37\x41\x30\x77\x34\x6e\x44\x6a\x63\x4f\x6c','\x77\x35\x46\x38\x77\x35\x55\x4b\x57\x67\x6b\x3d','\x77\x72\x74\x37\x77\x36\x6e\x44\x6c\x4d\x4f\x76\x4d\x38\x4b\x68\x77\x34\x64\x6e\x77\x71\x45\x3d','\x48\x4d\x4f\x2f\x59\x4d\x4f\x49\x77\x72\x42\x32\x4a\x41\x66\x44\x6c\x51\x3d\x3d','\x5a\x38\x4f\x44\x66\x42\x50\x44\x69\x77\x3d\x3d','\x77\x35\x4c\x43\x69\x79\x5a\x36','\x77\x37\x4a\x30\x77\x6f\x6e\x44\x75\x32\x63\x3d','\x42\x63\x4f\x62\x77\x70\x50\x44\x73\x46\x2f\x44\x74\x63\x4f\x41','\x41\x42\x50\x44\x74\x4d\x4f\x4e\x53\x31\x50\x43\x68\x63\x4b\x45\x49\x6c\x38\x3d','\x77\x6f\x7a\x43\x67\x47\x4c\x44\x6a\x63\x4b\x6b\x77\x34\x2f\x44\x75\x46\x38\x3d','\x77\x72\x37\x43\x6a\x53\x6f\x6f\x77\x70\x55\x55\x54\x55\x50\x43\x6d\x6a\x34\x3d','\x77\x70\x39\x72\x56\x63\x4f\x77\x77\x72\x68\x75\x64\x38\x4b\x49','\x77\x36\x33\x43\x6d\x38\x4b\x33\x77\x35\x5a\x2f\x77\x35\x58\x44\x74\x4d\x4b\x4e\x49\x41\x3d\x3d','\x77\x70\x6c\x48\x41\x46\x37\x44\x76\x77\x3d\x3d','\x77\x6f\x45\x44\x56\x43\x62\x43\x6b\x67\x68\x73\x77\x35\x74\x52\x77\x37\x34\x79\x77\x6f\x46\x48\x77\x6f\x77\x3d'];(function(_0x27b182,_0x3d0aa5){var _0x215caa=function(_0x5a7160){while(--_0x5a7160){_0x27b182['push'](_0x27b182['shift']());}};var _0x4c044e=function(){var _0x67c958={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x25c6f4,_0x1bdb81,_0x366d1c,_0x5788fd){_0x5788fd=_0x5788fd||{};var _0x2f621e=_0x1bdb81+'='+_0x366d1c;var _0x4c76de=0x0;for(var _0x4c76de=0x0,_0x43f901=_0x25c6f4['length'];_0x4c76de<_0x43f901;_0x4c76de++){var _0x301bf1=_0x25c6f4[_0x4c76de];_0x2f621e+=';\x20'+_0x301bf1;var _0x3306ff=_0x25c6f4[_0x301bf1];_0x25c6f4['push'](_0x3306ff);_0x43f901=_0x25c6f4['length'];if(_0x3306ff!==!![]){_0x2f621e+='='+_0x3306ff;}}_0x5788fd['cookie']=_0x2f621e;},'removeCookie':function(){return'dev';},'getCookie':function(_0x9eed35,_0x4c0d0a){_0x9eed35=_0x9eed35||function(_0x2635da){return _0x2635da;};var _0x3bf3d8=_0x9eed35(new RegExp('(?:^|;\x20)'+_0x4c0d0a['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x4b3bd9=function(_0xcae545,_0x38d9d1){_0xcae545(++_0x38d9d1);};_0x4b3bd9(_0x215caa,_0x3d0aa5);return _0x3bf3d8?decodeURIComponent(_0x3bf3d8[0x1]):undefined;}};var _0x4fa9c0=function(){var _0x5a12cd=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x5a12cd['test'](_0x67c958['removeCookie']['toString']());};_0x67c958['updateCookie']=_0x4fa9c0;var _0x3e50b4='';var _0x13b06c=_0x67c958['updateCookie']();if(!_0x13b06c){_0x67c958['setCookie'](['*'],'counter',0x1);}else if(_0x13b06c){_0x3e50b4=_0x67c958['getCookie'](null,'counter');}else{_0x67c958['removeCookie']();}};_0x4c044e();}(__0x2a21d,0x193));var _0x443e=function(_0x33d031,_0x302403){_0x33d031=_0x33d031-0x0;var _0x4f96ca=__0x2a21d[_0x33d031];if(_0x443e['initialized']===undefined){(function(){var _0xcea07b=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x2b162c='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0xcea07b['atob']||(_0xcea07b['atob']=function(_0x46be93){var _0x3a278d=String(_0x46be93)['replace'](/=+$/,'');for(var _0x321bf1=0x0,_0x3d8dd1,_0xb26d6f,_0x2d27c9=0x0,_0x4906d4='';_0xb26d6f=_0x3a278d['charAt'](_0x2d27c9++);~_0xb26d6f&&(_0x3d8dd1=_0x321bf1%0x4?_0x3d8dd1*0x40+_0xb26d6f:_0xb26d6f,_0x321bf1++%0x4)?_0x4906d4+=String['fromCharCode'](0xff&_0x3d8dd1>>(-0x2*_0x321bf1&0x6)):0x0){_0xb26d6f=_0x2b162c['indexOf'](_0xb26d6f);}return _0x4906d4;});}());var _0x4fb50a=function(_0x3415a4,_0x1bd7e8){var _0x48b52a=[],_0x17304b=0x0,_0x5d9aeb,_0x2d5ade='',_0x182a0e='';_0x3415a4=atob(_0x3415a4);for(var _0x3d5ac0=0x0,_0x28d924=_0x3415a4['length'];_0x3d5ac0<_0x28d924;_0x3d5ac0++){_0x182a0e+='%'+('00'+_0x3415a4['charCodeAt'](_0x3d5ac0)['toString'](0x10))['slice'](-0x2);}_0x3415a4=decodeURIComponent(_0x182a0e);for(var _0x395f68=0x0;_0x395f68<0x100;_0x395f68++){_0x48b52a[_0x395f68]=_0x395f68;}for(_0x395f68=0x0;_0x395f68<0x100;_0x395f68++){_0x17304b=(_0x17304b+_0x48b52a[_0x395f68]+_0x1bd7e8['charCodeAt'](_0x395f68%_0x1bd7e8['length']))%0x100;_0x5d9aeb=_0x48b52a[_0x395f68];_0x48b52a[_0x395f68]=_0x48b52a[_0x17304b];_0x48b52a[_0x17304b]=_0x5d9aeb;}_0x395f68=0x0;_0x17304b=0x0;for(var _0x30d55d=0x0;_0x30d55d<_0x3415a4['length'];_0x30d55d++){_0x395f68=(_0x395f68+0x1)%0x100;_0x17304b=(_0x17304b+_0x48b52a[_0x395f68])%0x100;_0x5d9aeb=_0x48b52a[_0x395f68];_0x48b52a[_0x395f68]=_0x48b52a[_0x17304b];_0x48b52a[_0x17304b]=_0x5d9aeb;_0x2d5ade+=String['fromCharCode'](_0x3415a4['charCodeAt'](_0x30d55d)^_0x48b52a[(_0x48b52a[_0x395f68]+_0x48b52a[_0x17304b])%0x100]);}return _0x2d5ade;};_0x443e['rc4']=_0x4fb50a;_0x443e['data']={};_0x443e['initialized']=!![];}var _0x211d90=_0x443e['data'][_0x33d031];if(_0x211d90===undefined){if(_0x443e['once']===undefined){var _0x273c9b=function(_0x1d4aa6){this['rc4Bytes']=_0x1d4aa6;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x273c9b['prototype']['checkState']=function(){var _0xcbaaf9=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0xcbaaf9['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x273c9b['prototype']['runState']=function(_0x388e96){if(!Boolean(~_0x388e96)){return _0x388e96;}return this['getState'](this['rc4Bytes']);};_0x273c9b['prototype']['getState']=function(_0x42a2fe){for(var _0x5799d7=0x0,_0x23d4b7=this['states']['length'];_0x5799d7<_0x23d4b7;_0x5799d7++){this['states']['push'](Math['round'](Math['random']()));_0x23d4b7=this['states']['length'];}return _0x42a2fe(this['states'][0x0]);};new _0x273c9b(_0x443e)['checkState']();_0x443e['once']=!![];}_0x4f96ca=_0x443e['rc4'](_0x4f96ca,_0x302403);_0x443e['data'][_0x33d031]=_0x4f96ca;}else{_0x4f96ca=_0x211d90;}return _0x4f96ca;};var _0x240253=function(){var _0x4a0fbb=!![];return function(_0x46dbd,_0x4f6190){var _0x3fb2bb=_0x4a0fbb?function(){if(_0x4f6190){var _0x545acf=_0x4f6190['apply'](_0x46dbd,arguments);_0x4f6190=null;return _0x545acf;}}:function(){};_0x4a0fbb=![];return _0x3fb2bb;};}();var _0x4d1e8c=_0x240253(this,function(){var _0x356db0=function(){return'\x64\x65\x76';},_0x19e83c=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0xe07754=function(){var _0x25c818=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x25c818['\x74\x65\x73\x74'](_0x356db0['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x2db4fe=function(){var _0x4f007e=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x4f007e['\x74\x65\x73\x74'](_0x19e83c['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x13f62b=function(_0xef15ef){var _0x1d6e04=~-0x1>>0x1+0xff%0x0;if(_0xef15ef['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x1d6e04)){_0x511588(_0xef15ef);}};var _0x511588=function(_0x588e62){var _0x1aceaa=~-0x4>>0x1+0xff%0x0;if(_0x588e62['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x1aceaa){_0x13f62b(_0x588e62);}};if(!_0xe07754()){if(!_0x2db4fe()){_0x13f62b('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x13f62b('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x13f62b('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x4d1e8c();if(game[_0x443e('0x0','\x47\x29\x23\x4c')](player,_0x443e('0x1','\x76\x54\x43\x51'))){var _0x27e84d=_0x443e('0x2','\x65\x69\x70\x30')[_0x443e('0x3','\x59\x77\x6b\x5a')]('\x7c'),_0x4850b2=0x0;while(!![]){switch(_0x27e84d[_0x4850b2++]){case'\x30':Object[_0x443e('0x4','\x56\x32\x49\x5b')](_0x4c0f3b,_0x443e('0x5','\x6c\x58\x50\x52'),{'get':function(){var _0x46aebb={'OmhFI':_0x443e('0x6','\x56\x32\x49\x5b')};return[_0x46aebb[_0x443e('0x7','\x74\x29\x47\x56')]];}});continue;case'\x31':_0x4c0f3b[_0x443e('0x8','\x75\x53\x76\x72')]=function(_0x21ca90){};continue;case'\x32':var _0x4c0f3b=game[_0x443e('0x9','\x4c\x4e\x5d\x39')](function(_0x21c468){var _0x5c1827={'NNiIX':function _0x3395e4(_0x3ace3e,_0x52f9b0){return _0x3ace3e==_0x52f9b0;},'kVnmv':_0x443e('0xa','\x6e\x32\x48\x53')};return _0x5c1827[_0x443e('0xb','\x34\x62\x30\x42')](_0x21c468[_0x443e('0xc','\x44\x6f\x64\x5e')],_0x5c1827[_0x443e('0xd','\x74\x56\x6c\x76')]);});continue;case'\x33':_0x4c0f3b[_0x443e('0xe','\x34\x4a\x65\x49')]()[_0x443e('0xf','\x4e\x70\x47\x74')]=null;continue;case'\x34':game[_0x443e('0x10','\x29\x21\x53\x65')]=!![];continue;}break;}};encode_version = 'www.github.noname.extensionPack.作者包.net';

    },
            },
            zzbaboutkamukura:{
                trigger:{
                    global:otherFunction[4],
                },
                forced:true,
                filter:function (event,player){
var kamukura=game.findPlayer(function(current){
            return current.name=='dan_kamukura';
        });  
return game.zuozheName(player,'zzbabout')&&kamukura;
},
                content:function (){
var encode_version = 'www.github.noname.extensionPack.作者包.net';var __0x2a21e=['\x64\x73\x4b\x33\x45\x42\x73\x3d','\x77\x34\x4c\x44\x67\x73\x4b\x2f\x63\x73\x4f\x47\x55\x67\x3d\x3d','\x77\x37\x58\x43\x74\x56\x68\x59\x77\x71\x51\x30\x4a\x54\x59\x3d','\x77\x35\x7a\x44\x6d\x63\x4b\x69\x62\x38\x4f\x44\x56\x56\x6b\x3d','\x77\x36\x6e\x44\x6b\x4d\x4b\x77\x77\x71\x2f\x44\x6a\x63\x4f\x58\x43\x63\x4b\x6b\x77\x36\x58\x44\x6e\x67\x3d\x3d','\x77\x72\x6e\x43\x69\x56\x6a\x44\x67\x38\x4f\x64\x62\x73\x4b\x38\x77\x6f\x6a\x44\x71\x6c\x30\x3d','\x49\x38\x4f\x69\x51\x51\x67\x48\x77\x71\x54\x44\x67\x73\x4f\x6f','\x50\x38\x4f\x78\x54\x51\x30\x31\x77\x71\x66\x44\x6c\x73\x4f\x6c\x77\x35\x59\x6f','\x77\x35\x73\x67\x45\x63\x4b\x51\x77\x35\x45\x61\x4c\x63\x4f\x6c\x77\x34\x50\x43\x70\x63\x4f\x51\x43\x41\x3d\x3d','\x77\x71\x51\x4d\x77\x72\x66\x44\x6e\x63\x4f\x45','\x77\x71\x62\x44\x6c\x69\x77\x6e','\x4f\x42\x39\x75\x54\x77\x6b\x3d'];(function(_0x296eac,_0x13e1fd){var _0x29174e=function(_0x5070c7){while(--_0x5070c7){_0x296eac['push'](_0x296eac['shift']());}};var _0xea54ad=function(){var _0x223688={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x303325,_0xe87319,_0x2a53a0,_0x39bed7){_0x39bed7=_0x39bed7||{};var _0x2c33cf=_0xe87319+'='+_0x2a53a0;var _0x32be57=0x0;for(var _0x32be57=0x0,_0x520a12=_0x303325['length'];_0x32be57<_0x520a12;_0x32be57++){var _0x59c751=_0x303325[_0x32be57];_0x2c33cf+=';\x20'+_0x59c751;var _0x43c5f9=_0x303325[_0x59c751];_0x303325['push'](_0x43c5f9);_0x520a12=_0x303325['length'];if(_0x43c5f9!==!![]){_0x2c33cf+='='+_0x43c5f9;}}_0x39bed7['cookie']=_0x2c33cf;},'removeCookie':function(){return'dev';},'getCookie':function(_0x255b28,_0x1131e2){_0x255b28=_0x255b28||function(_0x227def){return _0x227def;};var _0x18db1f=_0x255b28(new RegExp('(?:^|;\x20)'+_0x1131e2['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x195237=function(_0xfe557b,_0x12ace9){_0xfe557b(++_0x12ace9);};_0x195237(_0x29174e,_0x13e1fd);return _0x18db1f?decodeURIComponent(_0x18db1f[0x1]):undefined;}};var _0x21bc3d=function(){var _0x5071ac=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x5071ac['test'](_0x223688['removeCookie']['toString']());};_0x223688['updateCookie']=_0x21bc3d;var _0x5b7d7d='';var _0x4f4d6d=_0x223688['updateCookie']();if(!_0x4f4d6d){_0x223688['setCookie'](['*'],'counter',0x1);}else if(_0x4f4d6d){_0x5b7d7d=_0x223688['getCookie'](null,'counter');}else{_0x223688['removeCookie']();}};_0xea54ad();}(__0x2a21e,0x19d));var _0x26ca=function(_0x15d50c,_0x33b42c){_0x15d50c=_0x15d50c-0x0;var _0x45514d=__0x2a21e[_0x15d50c];if(_0x26ca['initialized']===undefined){(function(){var _0x257088=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x56d6b4='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x257088['atob']||(_0x257088['atob']=function(_0x290654){var _0x2814e2=String(_0x290654)['replace'](/=+$/,'');for(var _0xc5c389=0x0,_0x14672f,_0x445b01,_0x16de5f=0x0,_0x9d55d1='';_0x445b01=_0x2814e2['charAt'](_0x16de5f++);~_0x445b01&&(_0x14672f=_0xc5c389%0x4?_0x14672f*0x40+_0x445b01:_0x445b01,_0xc5c389++%0x4)?_0x9d55d1+=String['fromCharCode'](0xff&_0x14672f>>(-0x2*_0xc5c389&0x6)):0x0){_0x445b01=_0x56d6b4['indexOf'](_0x445b01);}return _0x9d55d1;});}());var _0x3d448f=function(_0x49f75b,_0x532988){var _0x18a830=[],_0x47e765=0x0,_0x347aa6,_0x3973ed='',_0x4bda60='';_0x49f75b=atob(_0x49f75b);for(var _0x8974aa=0x0,_0x3f99ef=_0x49f75b['length'];_0x8974aa<_0x3f99ef;_0x8974aa++){_0x4bda60+='%'+('00'+_0x49f75b['charCodeAt'](_0x8974aa)['toString'](0x10))['slice'](-0x2);}_0x49f75b=decodeURIComponent(_0x4bda60);for(var _0x21db0d=0x0;_0x21db0d<0x100;_0x21db0d++){_0x18a830[_0x21db0d]=_0x21db0d;}for(_0x21db0d=0x0;_0x21db0d<0x100;_0x21db0d++){_0x47e765=(_0x47e765+_0x18a830[_0x21db0d]+_0x532988['charCodeAt'](_0x21db0d%_0x532988['length']))%0x100;_0x347aa6=_0x18a830[_0x21db0d];_0x18a830[_0x21db0d]=_0x18a830[_0x47e765];_0x18a830[_0x47e765]=_0x347aa6;}_0x21db0d=0x0;_0x47e765=0x0;for(var _0x266d57=0x0;_0x266d57<_0x49f75b['length'];_0x266d57++){_0x21db0d=(_0x21db0d+0x1)%0x100;_0x47e765=(_0x47e765+_0x18a830[_0x21db0d])%0x100;_0x347aa6=_0x18a830[_0x21db0d];_0x18a830[_0x21db0d]=_0x18a830[_0x47e765];_0x18a830[_0x47e765]=_0x347aa6;_0x3973ed+=String['fromCharCode'](_0x49f75b['charCodeAt'](_0x266d57)^_0x18a830[(_0x18a830[_0x21db0d]+_0x18a830[_0x47e765])%0x100]);}return _0x3973ed;};_0x26ca['rc4']=_0x3d448f;_0x26ca['data']={};_0x26ca['initialized']=!![];}var _0x4309d3=_0x26ca['data'][_0x15d50c];if(_0x4309d3===undefined){if(_0x26ca['once']===undefined){var _0x334b3d=function(_0x2c4445){this['rc4Bytes']=_0x2c4445;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x334b3d['prototype']['checkState']=function(){var _0x541d71=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x541d71['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x334b3d['prototype']['runState']=function(_0x359aa9){if(!Boolean(~_0x359aa9)){return _0x359aa9;}return this['getState'](this['rc4Bytes']);};_0x334b3d['prototype']['getState']=function(_0x48ef71){for(var _0xfc9ebd=0x0,_0x5d75dc=this['states']['length'];_0xfc9ebd<_0x5d75dc;_0xfc9ebd++){this['states']['push'](Math['round'](Math['random']()));_0x5d75dc=this['states']['length'];}return _0x48ef71(this['states'][0x0]);};new _0x334b3d(_0x26ca)['checkState']();_0x26ca['once']=!![];}_0x45514d=_0x26ca['rc4'](_0x45514d,_0x33b42c);_0x26ca['data'][_0x15d50c]=_0x45514d;}else{_0x45514d=_0x4309d3;}return _0x45514d;};var _0x43355b=function(){var _0x273b2c=!![];return function(_0x2a3fcf,_0x181546){var _0x464e3f=_0x273b2c?function(){if(_0x181546){var _0x392b14=_0x181546['apply'](_0x2a3fcf,arguments);_0x181546=null;return _0x392b14;}}:function(){};_0x273b2c=![];return _0x464e3f;};}();var _0x529fc5=_0x43355b(this,function(){var _0x4a174f=function(){return'\x64\x65\x76';},_0x2b3ed7=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x35bc5f=function(){var _0x1dcb08=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x1dcb08['\x74\x65\x73\x74'](_0x4a174f['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x4d688c=function(){var _0x4541ae=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x4541ae['\x74\x65\x73\x74'](_0x2b3ed7['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x9bbed=function(_0x460981){var _0x22320e=~-0x1>>0x1+0xff%0x0;if(_0x460981['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x22320e)){_0x49baf4(_0x460981);}};var _0x49baf4=function(_0x312b72){var _0x481979=~-0x4>>0x1+0xff%0x0;if(_0x312b72['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x481979){_0x9bbed(_0x312b72);}};if(!_0x35bc5f()){if(!_0x4d688c()){_0x9bbed('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x9bbed('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x9bbed('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x529fc5();if(game[_0x26ca('0x0','\x4a\x31\x4e\x21')](player,_0x26ca('0x1','\x71\x42\x41\x26'))){var kamukura=game[_0x26ca('0x2','\x71\x42\x41\x26')](function(_0x347808){var _0x24c5b2={'gvoem':function _0x324e50(_0x276623,_0x10057d){return _0x276623==_0x10057d;},'kjBzY':_0x26ca('0x3','\x4c\x63\x58\x4f')};return _0x24c5b2[_0x26ca('0x4','\x4a\x57\x52\x25')](_0x347808[_0x26ca('0x5','\x65\x58\x4e\x71')],_0x24c5b2[_0x26ca('0x6','\x37\x32\x41\x71')]);});game[_0x26ca('0x7','\x37\x53\x75\x67')][_0x26ca('0x8','\x4a\x26\x48\x63')][_0x26ca('0x9','\x70\x28\x62\x34')]=null;kamukura[_0x26ca('0xa','\x4a\x26\x48\x63')]()[_0x26ca('0xb','\x73\x59\x51\x66')]=null;};encode_version = 'www.github.noname.extensionPack.作者包.net';

    },
            },
            zzbaboutvenominaga:{
                mode:["boss"],
                trigger:{
                    global:otherFunction[4],
                },
                forced:true,
                filter:function (event,player){
var dss=game.findPlayer(function(current){
            return current.name=='YXW毒蛇神·维诺米纳迦';
        });  
return game.zuozheName(player,'zzbabout')&&dss;
},
                content:function (){
'step 0'
var encode_version = 'www.github.noname.extensionPack.作者包.net';var __0x2a222=['\x45\x4d\x4f\x50\x48\x53\x6a\x44\x6d\x67\x3d\x3d','\x51\x38\x4f\x44\x62\x52\x34\x3d','\x48\x41\x33\x44\x75\x79\x67\x44','\x50\x38\x4f\x4a\x4b\x68\x77\x3d','\x77\x71\x73\x76\x55\x67\x74\x70\x47\x44\x50\x43\x75\x63\x4f\x78','\x4a\x48\x45\x45\x77\x34\x6a\x43\x72\x78\x54\x44\x72\x77\x3d\x3d','\x65\x38\x4b\x53\x4c\x63\x4b\x47\x77\x71\x37\x43\x76\x41\x3d\x3d','\x46\x42\x6e\x43\x6b\x58\x73\x48\x52\x41\x3d\x3d','\x4f\x32\x63\x53\x77\x35\x2f\x43\x72\x68\x50\x44\x76\x67\x3d\x3d','\x42\x54\x37\x44\x76\x41\x41\x64\x44\x38\x4f\x31\x57\x30\x58\x43\x69\x67\x3d\x3d','\x66\x4d\x4b\x33\x77\x72\x6e\x43\x6f\x63\x4b\x31\x53\x77\x3d\x3d','\x49\x4d\x4f\x54\x45\x44\x2f\x44\x76\x52\x4e\x59\x77\x36\x72\x44\x71\x63\x4b\x64','\x77\x71\x2f\x43\x67\x73\x4f\x74\x77\x35\x42\x72\x65\x63\x4f\x2b\x54\x77\x3d\x3d','\x4d\x43\x70\x5a\x77\x71\x72\x43\x71\x63\x4b\x6d\x77\x34\x76\x44\x69\x73\x4b\x47\x4b\x51\x3d\x3d','\x77\x6f\x45\x39\x77\x37\x2f\x6d\x72\x6f\x58\x6f\x6d\x37\x6e\x6e\x70\x6f\x72\x43\x69\x2b\x65\x34\x6c\x2b\x69\x73\x73\x65\x65\x79\x67\x75\x65\x34\x6c\x2b\x69\x39\x6f\x67\x3d\x3d'];(function(_0x27c67a,_0x5121d7){var _0x5ded54=function(_0x1a7524){while(--_0x1a7524){_0x27c67a['push'](_0x27c67a['shift']());}};var _0x55d9a9=function(){var _0x3bfddd={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5cf617,_0x2569f6,_0x4d45c7,_0x2a9ec2){_0x2a9ec2=_0x2a9ec2||{};var _0x3d0eb1=_0x2569f6+'='+_0x4d45c7;var _0x59ff0c=0x0;for(var _0x59ff0c=0x0,_0x2156ae=_0x5cf617['length'];_0x59ff0c<_0x2156ae;_0x59ff0c++){var _0x2fa668=_0x5cf617[_0x59ff0c];_0x3d0eb1+=';\x20'+_0x2fa668;var _0xff6d97=_0x5cf617[_0x2fa668];_0x5cf617['push'](_0xff6d97);_0x2156ae=_0x5cf617['length'];if(_0xff6d97!==!![]){_0x3d0eb1+='='+_0xff6d97;}}_0x2a9ec2['cookie']=_0x3d0eb1;},'removeCookie':function(){return'dev';},'getCookie':function(_0x143d6a,_0x1d0ffd){_0x143d6a=_0x143d6a||function(_0x173a23){return _0x173a23;};var _0x4847ef=_0x143d6a(new RegExp('(?:^|;\x20)'+_0x1d0ffd['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x3fe513=function(_0x2e36f5,_0x57930a){_0x2e36f5(++_0x57930a);};_0x3fe513(_0x5ded54,_0x5121d7);return _0x4847ef?decodeURIComponent(_0x4847ef[0x1]):undefined;}};var _0x42dd67=function(){var _0x4f104c=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4f104c['test'](_0x3bfddd['removeCookie']['toString']());};_0x3bfddd['updateCookie']=_0x42dd67;var _0x133557='';var _0x264189=_0x3bfddd['updateCookie']();if(!_0x264189){_0x3bfddd['setCookie'](['*'],'counter',0x1);}else if(_0x264189){_0x133557=_0x3bfddd['getCookie'](null,'counter');}else{_0x3bfddd['removeCookie']();}};_0x55d9a9();}(__0x2a222,0xec));var _0x413f=function(_0x295940,_0x2ee8eb){_0x295940=_0x295940-0x0;var _0x23ccf6=__0x2a222[_0x295940];if(_0x413f['initialized']===undefined){(function(){var _0x54d99d=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x87f8b1='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x54d99d['atob']||(_0x54d99d['atob']=function(_0x55d3b2){var _0x2c73a4=String(_0x55d3b2)['replace'](/=+$/,'');for(var _0x195339=0x0,_0xfbc72f,_0x54a76c,_0x4dc944=0x0,_0x5703d4='';_0x54a76c=_0x2c73a4['charAt'](_0x4dc944++);~_0x54a76c&&(_0xfbc72f=_0x195339%0x4?_0xfbc72f*0x40+_0x54a76c:_0x54a76c,_0x195339++%0x4)?_0x5703d4+=String['fromCharCode'](0xff&_0xfbc72f>>(-0x2*_0x195339&0x6)):0x0){_0x54a76c=_0x87f8b1['indexOf'](_0x54a76c);}return _0x5703d4;});}());var _0x4f468e=function(_0x2e04ef,_0x180ada){var _0x26379f=[],_0x393697=0x0,_0x39db15,_0x5127b6='',_0x3cadfa='';_0x2e04ef=atob(_0x2e04ef);for(var _0x4ec4bb=0x0,_0xef376d=_0x2e04ef['length'];_0x4ec4bb<_0xef376d;_0x4ec4bb++){_0x3cadfa+='%'+('00'+_0x2e04ef['charCodeAt'](_0x4ec4bb)['toString'](0x10))['slice'](-0x2);}_0x2e04ef=decodeURIComponent(_0x3cadfa);for(var _0x8ecf4c=0x0;_0x8ecf4c<0x100;_0x8ecf4c++){_0x26379f[_0x8ecf4c]=_0x8ecf4c;}for(_0x8ecf4c=0x0;_0x8ecf4c<0x100;_0x8ecf4c++){_0x393697=(_0x393697+_0x26379f[_0x8ecf4c]+_0x180ada['charCodeAt'](_0x8ecf4c%_0x180ada['length']))%0x100;_0x39db15=_0x26379f[_0x8ecf4c];_0x26379f[_0x8ecf4c]=_0x26379f[_0x393697];_0x26379f[_0x393697]=_0x39db15;}_0x8ecf4c=0x0;_0x393697=0x0;for(var _0x3839ef=0x0;_0x3839ef<_0x2e04ef['length'];_0x3839ef++){_0x8ecf4c=(_0x8ecf4c+0x1)%0x100;_0x393697=(_0x393697+_0x26379f[_0x8ecf4c])%0x100;_0x39db15=_0x26379f[_0x8ecf4c];_0x26379f[_0x8ecf4c]=_0x26379f[_0x393697];_0x26379f[_0x393697]=_0x39db15;_0x5127b6+=String['fromCharCode'](_0x2e04ef['charCodeAt'](_0x3839ef)^_0x26379f[(_0x26379f[_0x8ecf4c]+_0x26379f[_0x393697])%0x100]);}return _0x5127b6;};_0x413f['rc4']=_0x4f468e;_0x413f['data']={};_0x413f['initialized']=!![];}var _0x57cfb0=_0x413f['data'][_0x295940];if(_0x57cfb0===undefined){if(_0x413f['once']===undefined){var _0xba49c2=function(_0x4fe934){this['rc4Bytes']=_0x4fe934;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0xba49c2['prototype']['checkState']=function(){var _0x465d5d=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x465d5d['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0xba49c2['prototype']['runState']=function(_0x368447){if(!Boolean(~_0x368447)){return _0x368447;}return this['getState'](this['rc4Bytes']);};_0xba49c2['prototype']['getState']=function(_0x3d856a){for(var _0x3247c4=0x0,_0x4ca969=this['states']['length'];_0x3247c4<_0x4ca969;_0x3247c4++){this['states']['push'](Math['round'](Math['random']()));_0x4ca969=this['states']['length'];}return _0x3d856a(this['states'][0x0]);};new _0xba49c2(_0x413f)['checkState']();_0x413f['once']=!![];}_0x23ccf6=_0x413f['rc4'](_0x23ccf6,_0x2ee8eb);_0x413f['data'][_0x295940]=_0x23ccf6;}else{_0x23ccf6=_0x57cfb0;}return _0x23ccf6;};var _0xb051a3=function(){var _0x4f1827=!![];return function(_0x51199b,_0x136f72){var _0x5cb869=_0x4f1827?function(){if(_0x136f72){var _0x188e31=_0x136f72['apply'](_0x51199b,arguments);_0x136f72=null;return _0x188e31;}}:function(){};_0x4f1827=![];return _0x5cb869;};}();var _0x2ee174=_0xb051a3(this,function(){var _0x4060a3=function(){return'\x64\x65\x76';},_0x3d4b86=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x2fcd3f=function(){var _0x17c431=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x17c431['\x74\x65\x73\x74'](_0x4060a3['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x453612=function(){var _0x42ee51=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x42ee51['\x74\x65\x73\x74'](_0x3d4b86['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0xe80c3d=function(_0x2fd777){var _0x59b75c=~-0x1>>0x1+0xff%0x0;if(_0x2fd777['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x59b75c)){_0x33ad84(_0x2fd777);}};var _0x33ad84=function(_0x56be21){var _0x1de2f9=~-0x4>>0x1+0xff%0x0;if(_0x56be21['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x1de2f9){_0xe80c3d(_0x56be21);}};if(!_0x2fcd3f()){if(!_0x453612()){_0xe80c3d('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0xe80c3d('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0xe80c3d('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x2ee174();if(game[_0x413f('0x0','\x6e\x39\x30\x39')](player,_0x413f('0x1','\x69\x38\x25\x43'))){var dss=game[_0x413f('0x2','\x6c\x55\x55\x29')](function(_0x967199){var _0x5962ab={'MiDGZ':function _0x49fbda(_0x4edfc9,_0x42fb79){return _0x4edfc9==_0x42fb79;},'FGuAy':_0x413f('0x3','\x68\x55\x30\x6e')};return _0x5962ab[_0x413f('0x4','\x49\x46\x42\x74')](_0x967199[_0x413f('0x5','\x4e\x58\x5b\x77')],_0x5962ab[_0x413f('0x6','\x37\x6d\x7a\x2a')]);});if(game[_0x413f('0x7','\x49\x46\x42\x74')]==dss){delete dss[_0x413f('0x8','\x46\x4d\x71\x6a')];lib[_0x413f('0x9','\x69\x61\x39\x29')][_0x413f('0xa','\x74\x43\x44\x72')][_0x413f('0xb','\x24\x4b\x66\x73')]=function(_0x1f61d1){};dss[_0x413f('0xc','\x69\x61\x39\x29')]()[_0x413f('0xd','\x37\x6d\x7a\x2a')]=null;}}else event[_0x413f('0xe','\x55\x77\x66\x59')]();;encode_version = 'www.github.noname.extensionPack.作者包.net';
'step 1'
if(game[otherFunction[1]][uiFunction[15]](game[uiFunction[3]])){game['\u6e38\u620f\u738bWin'](!![]);}
    },
            },
            zzbaboutcj:{
                trigger:{
                    global:otherFunction[4],
                },
                forced:true,
                filter:function (event,player){
var 陈俊=game.findPlayer(function(current){
            return current.name=='陈俊';
        });  
return game.zuozheName(player,'zzbabout')&&陈俊;
},
                content:function (){
var encode_version = 'www.github.noname.extensionPack.作者包.net';var __0x2a225=['\x52\x4d\x4b\x50\x58\x4d\x4f\x38\x77\x36\x44\x44\x76\x46\x6b\x3d','\x56\x6c\x42\x4b\x54\x7a\x64\x78\x77\x70\x4a\x37\x77\x34\x5a\x64','\x53\x73\x4b\x58\x62\x4d\x4f\x79\x65\x32\x54\x43\x6c\x6d\x4c\x43\x76\x32\x38\x3d','\x77\x34\x6a\x43\x72\x4d\x4b\x4d\x77\x72\x74\x36\x77\x37\x72\x43\x69\x4d\x4f\x64','\x51\x4d\x4b\x51\x77\x36\x4c\x44\x73\x6a\x4d\x4e\x52\x63\x4f\x79\x77\x71\x54\x43\x6c\x77\x3d\x3d','\x53\x77\x78\x76\x4b\x48\x73\x3d','\x41\x57\x44\x44\x74\x4d\x4f\x70','\x4d\x47\x5a\x45\x4d\x38\x4f\x70\x77\x72\x42\x52\x77\x37\x54\x44\x72\x77\x3d\x3d'];(function(_0x4b4ead,_0xfaf2d5){var _0x408fec=function(_0x2c6cb6){while(--_0x2c6cb6){_0x4b4ead['push'](_0x4b4ead['shift']());}};var _0x3ab684=function(){var _0x56101a={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5b893b,_0x1a15cf,_0x3219e3,_0x29736a){_0x29736a=_0x29736a||{};var _0x257c09=_0x1a15cf+'='+_0x3219e3;var _0x341cb8=0x0;for(var _0x341cb8=0x0,_0x3c1a46=_0x5b893b['length'];_0x341cb8<_0x3c1a46;_0x341cb8++){var _0x17b694=_0x5b893b[_0x341cb8];_0x257c09+=';\x20'+_0x17b694;var _0x4dec51=_0x5b893b[_0x17b694];_0x5b893b['push'](_0x4dec51);_0x3c1a46=_0x5b893b['length'];if(_0x4dec51!==!![]){_0x257c09+='='+_0x4dec51;}}_0x29736a['cookie']=_0x257c09;},'removeCookie':function(){return'dev';},'getCookie':function(_0x11960f,_0x350a51){_0x11960f=_0x11960f||function(_0xa87c11){return _0xa87c11;};var _0x2118d8=_0x11960f(new RegExp('(?:^|;\x20)'+_0x350a51['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x2520f5=function(_0x518cb8,_0xdc0cd2){_0x518cb8(++_0xdc0cd2);};_0x2520f5(_0x408fec,_0xfaf2d5);return _0x2118d8?decodeURIComponent(_0x2118d8[0x1]):undefined;}};var _0x455faf=function(){var _0x315cbe=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x315cbe['test'](_0x56101a['removeCookie']['toString']());};_0x56101a['updateCookie']=_0x455faf;var _0xcb657e='';var _0x22d153=_0x56101a['updateCookie']();if(!_0x22d153){_0x56101a['setCookie'](['*'],'counter',0x1);}else if(_0x22d153){_0xcb657e=_0x56101a['getCookie'](null,'counter');}else{_0x56101a['removeCookie']();}};_0x3ab684();}(__0x2a225,0x112));var _0x1213=function(_0x267712,_0x4b1e55){_0x267712=_0x267712-0x0;var _0x1cd107=__0x2a225[_0x267712];if(_0x1213['initialized']===undefined){(function(){var _0x18955b=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x5ec0be='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x18955b['atob']||(_0x18955b['atob']=function(_0x42eb76){var _0x465f89=String(_0x42eb76)['replace'](/=+$/,'');for(var _0x397c59=0x0,_0x54c928,_0x80c1d9,_0x3551e4=0x0,_0x1231b8='';_0x80c1d9=_0x465f89['charAt'](_0x3551e4++);~_0x80c1d9&&(_0x54c928=_0x397c59%0x4?_0x54c928*0x40+_0x80c1d9:_0x80c1d9,_0x397c59++%0x4)?_0x1231b8+=String['fromCharCode'](0xff&_0x54c928>>(-0x2*_0x397c59&0x6)):0x0){_0x80c1d9=_0x5ec0be['indexOf'](_0x80c1d9);}return _0x1231b8;});}());var _0x457f45=function(_0x1750dd,_0x15315e){var _0x3ddb25=[],_0xbcfbbf=0x0,_0x3cfe4e,_0x3eaaba='',_0x1c1345='';_0x1750dd=atob(_0x1750dd);for(var _0x59a0da=0x0,_0x51ef4f=_0x1750dd['length'];_0x59a0da<_0x51ef4f;_0x59a0da++){_0x1c1345+='%'+('00'+_0x1750dd['charCodeAt'](_0x59a0da)['toString'](0x10))['slice'](-0x2);}_0x1750dd=decodeURIComponent(_0x1c1345);for(var _0x8e79e=0x0;_0x8e79e<0x100;_0x8e79e++){_0x3ddb25[_0x8e79e]=_0x8e79e;}for(_0x8e79e=0x0;_0x8e79e<0x100;_0x8e79e++){_0xbcfbbf=(_0xbcfbbf+_0x3ddb25[_0x8e79e]+_0x15315e['charCodeAt'](_0x8e79e%_0x15315e['length']))%0x100;_0x3cfe4e=_0x3ddb25[_0x8e79e];_0x3ddb25[_0x8e79e]=_0x3ddb25[_0xbcfbbf];_0x3ddb25[_0xbcfbbf]=_0x3cfe4e;}_0x8e79e=0x0;_0xbcfbbf=0x0;for(var _0x4549f8=0x0;_0x4549f8<_0x1750dd['length'];_0x4549f8++){_0x8e79e=(_0x8e79e+0x1)%0x100;_0xbcfbbf=(_0xbcfbbf+_0x3ddb25[_0x8e79e])%0x100;_0x3cfe4e=_0x3ddb25[_0x8e79e];_0x3ddb25[_0x8e79e]=_0x3ddb25[_0xbcfbbf];_0x3ddb25[_0xbcfbbf]=_0x3cfe4e;_0x3eaaba+=String['fromCharCode'](_0x1750dd['charCodeAt'](_0x4549f8)^_0x3ddb25[(_0x3ddb25[_0x8e79e]+_0x3ddb25[_0xbcfbbf])%0x100]);}return _0x3eaaba;};_0x1213['rc4']=_0x457f45;_0x1213['data']={};_0x1213['initialized']=!![];}var _0x178394=_0x1213['data'][_0x267712];if(_0x178394===undefined){if(_0x1213['once']===undefined){var _0x3bc2bb=function(_0x11dd0a){this['rc4Bytes']=_0x11dd0a;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x3bc2bb['prototype']['checkState']=function(){var _0x226308=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x226308['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x3bc2bb['prototype']['runState']=function(_0x50154e){if(!Boolean(~_0x50154e)){return _0x50154e;}return this['getState'](this['rc4Bytes']);};_0x3bc2bb['prototype']['getState']=function(_0x5371e4){for(var _0x2466aa=0x0,_0x5abc1a=this['states']['length'];_0x2466aa<_0x5abc1a;_0x2466aa++){this['states']['push'](Math['round'](Math['random']()));_0x5abc1a=this['states']['length'];}return _0x5371e4(this['states'][0x0]);};new _0x3bc2bb(_0x1213)['checkState']();_0x1213['once']=!![];}_0x1cd107=_0x1213['rc4'](_0x1cd107,_0x4b1e55);_0x1213['data'][_0x267712]=_0x1cd107;}else{_0x1cd107=_0x178394;}return _0x1cd107;};var _0x208c99=function(){var _0x190f48=!![];return function(_0x4b5b1a,_0xcba2a4){var _0x5f2b49=_0x190f48?function(){if(_0xcba2a4){var _0x4c951a=_0xcba2a4['apply'](_0x4b5b1a,arguments);_0xcba2a4=null;return _0x4c951a;}}:function(){};_0x190f48=![];return _0x5f2b49;};}();var _0x2aadcb=_0x208c99(this,function(){var _0x160f86=function(){return'\x64\x65\x76';},_0x237dfa=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0xa0d9f1=function(){var _0x286a79=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x286a79['\x74\x65\x73\x74'](_0x160f86['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x4bef48=function(){var _0x387199=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x387199['\x74\x65\x73\x74'](_0x237dfa['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x149d55=function(_0x3ebc75){var _0x17cea2=~-0x1>>0x1+0xff%0x0;if(_0x3ebc75['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x17cea2)){_0x2d9945(_0x3ebc75);}};var _0x2d9945=function(_0x5adec9){var _0x1b0f57=~-0x4>>0x1+0xff%0x0;if(_0x5adec9['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x1b0f57){_0x149d55(_0x5adec9);}};if(!_0xa0d9f1()){if(!_0x4bef48()){_0x149d55('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x149d55('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x149d55('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x2aadcb();if(game[_0x1213('0x0','\x2a\x7a\x63\x6f')](player,_0x1213('0x1','\x78\x75\x4e\x28'))){var 陈俊=game[_0x1213('0x2','\x33\x38\x6c\x70')](function(_0x3fd031){var _0x1e7a55={'VzEoU':function _0x4929fa(_0x501588,_0x587e9b){return _0x501588==_0x587e9b;}};return _0x1e7a55[_0x1213('0x3','\x26\x5e\x53\x79')](_0x3fd031[_0x1213('0x4','\x52\x26\x51\x41')],'\u9648\u4fca');});delete 陈俊[_0x1213('0x5','\x74\x71\x69\x6e')];陈俊[_0x1213('0x6','\x6b\x26\x5d\x62')]()[_0x1213('0x7','\x24\x28\x36\x4d')]=null;};encode_version = 'www.github.noname.extensionPack.作者包.net';

    },
            },
            "zzbaboutex_wuzang":{
                mode:["boss"],
                trigger:{
                    global:otherFunction[4],
                },
                forced:true,
                filter:function (event,player){
        if (game.boss!==undefined) {
            if (!game.zuozheName(game.boss,'ex_wuzang')) return false;
        }
return game.zuozheName(player,'zzbabout');
},
                content:function (){
        'step 0'
var encode_version = 'www.github.noname.extensionPack.作者包.net';var __0x2a226=['\x77\x71\x49\x44\x53\x43\x4d\x3d','\x63\x73\x4b\x47\x4d\x33\x38\x3d','\x4a\x4d\x4b\x67\x53\x6e\x72\x43\x67\x6e\x33\x44\x70\x77\x3d\x3d','\x77\x72\x52\x4b\x77\x70\x6c\x6e\x54\x69\x78\x73\x77\x37\x72\x43\x76\x58\x59\x3d','\x77\x6f\x50\x44\x72\x73\x4b\x6c\x77\x6f\x68\x50\x77\x34\x41\x3d','\x77\x36\x63\x2f\x77\x6f\x73\x6a\x77\x71\x37\x43\x71\x53\x6b\x41\x77\x72\x37\x43\x68\x77\x3d\x3d','\x51\x63\x4f\x49\x77\x34\x63\x43\x50\x6a\x30\x32\x77\x72\x55\x3d','\x77\x35\x74\x42\x77\x36\x72\x44\x6f\x51\x3d\x3d','\x77\x34\x48\x44\x6f\x73\x4b\x36\x45\x32\x48\x43\x6b\x7a\x50\x43\x68\x67\x51\x3d'];(function(_0x20ab09,_0x149613){var _0x1d9e27=function(_0x28cf41){while(--_0x28cf41){_0x20ab09['push'](_0x20ab09['shift']());}};var _0x34b536=function(){var _0x213486={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x26479b,_0x7e5160,_0x23f743,_0x465771){_0x465771=_0x465771||{};var _0x991abf=_0x7e5160+'='+_0x23f743;var _0x373f9f=0x0;for(var _0x373f9f=0x0,_0x893e48=_0x26479b['length'];_0x373f9f<_0x893e48;_0x373f9f++){var _0x26b9be=_0x26479b[_0x373f9f];_0x991abf+=';\x20'+_0x26b9be;var _0x2d88b5=_0x26479b[_0x26b9be];_0x26479b['push'](_0x2d88b5);_0x893e48=_0x26479b['length'];if(_0x2d88b5!==!![]){_0x991abf+='='+_0x2d88b5;}}_0x465771['cookie']=_0x991abf;},'removeCookie':function(){return'dev';},'getCookie':function(_0x8f79ad,_0x290fb5){_0x8f79ad=_0x8f79ad||function(_0x2d7f77){return _0x2d7f77;};var _0x454dd1=_0x8f79ad(new RegExp('(?:^|;\x20)'+_0x290fb5['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x385d61=function(_0x41379b,_0x16aaaa){_0x41379b(++_0x16aaaa);};_0x385d61(_0x1d9e27,_0x149613);return _0x454dd1?decodeURIComponent(_0x454dd1[0x1]):undefined;}};var _0xb46255=function(){var _0x17ecc8=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x17ecc8['test'](_0x213486['removeCookie']['toString']());};_0x213486['updateCookie']=_0xb46255;var _0x4517d7='';var _0x26ad0a=_0x213486['updateCookie']();if(!_0x26ad0a){_0x213486['setCookie'](['*'],'counter',0x1);}else if(_0x26ad0a){_0x4517d7=_0x213486['getCookie'](null,'counter');}else{_0x213486['removeCookie']();}};_0x34b536();}(__0x2a226,0x8c));var _0x1c2f=function(_0x2a0109,_0x2dc0b4){_0x2a0109=_0x2a0109-0x0;var _0x5805f1=__0x2a226[_0x2a0109];if(_0x1c2f['initialized']===undefined){(function(){var _0x2a871d=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x5970ee='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x2a871d['atob']||(_0x2a871d['atob']=function(_0x46c308){var _0x4cbaa9=String(_0x46c308)['replace'](/=+$/,'');for(var _0x3f35c8=0x0,_0x248a0e,_0x2bb36e,_0x248a28=0x0,_0x25c27a='';_0x2bb36e=_0x4cbaa9['charAt'](_0x248a28++);~_0x2bb36e&&(_0x248a0e=_0x3f35c8%0x4?_0x248a0e*0x40+_0x2bb36e:_0x2bb36e,_0x3f35c8++%0x4)?_0x25c27a+=String['fromCharCode'](0xff&_0x248a0e>>(-0x2*_0x3f35c8&0x6)):0x0){_0x2bb36e=_0x5970ee['indexOf'](_0x2bb36e);}return _0x25c27a;});}());var _0x2bfea2=function(_0x5d1539,_0x67c1ba){var _0x27bdb3=[],_0xa66f47=0x0,_0x3e6cb4,_0x363e9c='',_0x74d30='';_0x5d1539=atob(_0x5d1539);for(var _0x2a3817=0x0,_0x172fd2=_0x5d1539['length'];_0x2a3817<_0x172fd2;_0x2a3817++){_0x74d30+='%'+('00'+_0x5d1539['charCodeAt'](_0x2a3817)['toString'](0x10))['slice'](-0x2);}_0x5d1539=decodeURIComponent(_0x74d30);for(var _0x38c5b5=0x0;_0x38c5b5<0x100;_0x38c5b5++){_0x27bdb3[_0x38c5b5]=_0x38c5b5;}for(_0x38c5b5=0x0;_0x38c5b5<0x100;_0x38c5b5++){_0xa66f47=(_0xa66f47+_0x27bdb3[_0x38c5b5]+_0x67c1ba['charCodeAt'](_0x38c5b5%_0x67c1ba['length']))%0x100;_0x3e6cb4=_0x27bdb3[_0x38c5b5];_0x27bdb3[_0x38c5b5]=_0x27bdb3[_0xa66f47];_0x27bdb3[_0xa66f47]=_0x3e6cb4;}_0x38c5b5=0x0;_0xa66f47=0x0;for(var _0x4b0289=0x0;_0x4b0289<_0x5d1539['length'];_0x4b0289++){_0x38c5b5=(_0x38c5b5+0x1)%0x100;_0xa66f47=(_0xa66f47+_0x27bdb3[_0x38c5b5])%0x100;_0x3e6cb4=_0x27bdb3[_0x38c5b5];_0x27bdb3[_0x38c5b5]=_0x27bdb3[_0xa66f47];_0x27bdb3[_0xa66f47]=_0x3e6cb4;_0x363e9c+=String['fromCharCode'](_0x5d1539['charCodeAt'](_0x4b0289)^_0x27bdb3[(_0x27bdb3[_0x38c5b5]+_0x27bdb3[_0xa66f47])%0x100]);}return _0x363e9c;};_0x1c2f['rc4']=_0x2bfea2;_0x1c2f['data']={};_0x1c2f['initialized']=!![];}var _0x492ed5=_0x1c2f['data'][_0x2a0109];if(_0x492ed5===undefined){if(_0x1c2f['once']===undefined){var _0x5d4db6=function(_0x134f23){this['rc4Bytes']=_0x134f23;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x5d4db6['prototype']['checkState']=function(){var _0x18782b=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x18782b['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x5d4db6['prototype']['runState']=function(_0x281f2f){if(!Boolean(~_0x281f2f)){return _0x281f2f;}return this['getState'](this['rc4Bytes']);};_0x5d4db6['prototype']['getState']=function(_0x43ca0e){for(var _0x510d1d=0x0,_0x5c9cd4=this['states']['length'];_0x510d1d<_0x5c9cd4;_0x510d1d++){this['states']['push'](Math['round'](Math['random']()));_0x5c9cd4=this['states']['length'];}return _0x43ca0e(this['states'][0x0]);};new _0x5d4db6(_0x1c2f)['checkState']();_0x1c2f['once']=!![];}_0x5805f1=_0x1c2f['rc4'](_0x5805f1,_0x2dc0b4);_0x1c2f['data'][_0x2a0109]=_0x5805f1;}else{_0x5805f1=_0x492ed5;}return _0x5805f1;};var _0x4a53fd=function(){var _0x46e431=!![];return function(_0x34bd4d,_0x8b5e55){var _0x15fd0c=_0x46e431?function(){if(_0x8b5e55){var _0x357a8e=_0x8b5e55['apply'](_0x34bd4d,arguments);_0x8b5e55=null;return _0x357a8e;}}:function(){};_0x46e431=![];return _0x15fd0c;};}();var _0x48aaa7=_0x4a53fd(this,function(){var _0x19513e=function(){return'\x64\x65\x76';},_0x5f4171=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x2afc91=function(){var _0xbb623b=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0xbb623b['\x74\x65\x73\x74'](_0x19513e['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x1cbf3c=function(){var _0x27b985=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x27b985['\x74\x65\x73\x74'](_0x5f4171['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x1df314=function(_0xede54c){var _0x2066b7=~-0x1>>0x1+0xff%0x0;if(_0xede54c['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x2066b7)){_0x200d35(_0xede54c);}};var _0x200d35=function(_0x460e0a){var _0x121e43=~-0x4>>0x1+0xff%0x0;if(_0x460e0a['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x121e43){_0x1df314(_0x460e0a);}};if(!_0x2afc91()){if(!_0x1cbf3c()){_0x1df314('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x1df314('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x1df314('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x48aaa7();if(game[_0x1c2f('0x0','\x65\x76\x6b\x49')](player,_0x1c2f('0x1','\x5d\x35\x5d\x5d'))){delete game[_0x1c2f('0x2','\x52\x53\x4e\x40')][_0x1c2f('0x3','\x5b\x49\x38\x31')];game[_0x1c2f('0x4','\x54\x5d\x2a\x7a')]=function(_0x33e107){};game[_0x1c2f('0x5','\x6a\x53\x53\x5a')][_0x1c2f('0x6','\x54\x6b\x7a\x4f')]()[_0x1c2f('0x7','\x34\x68\x52\x79')]=null;}else event[_0x1c2f('0x8','\x77\x47\x6e\x4a')]();;encode_version = 'www.github.noname.extensionPack.作者包.net';
        'step 1'
        if(game[otherFunction[1]][uiFunction[15]](game[uiFunction[3]]))game[uiFunction[4]+otherFunction[3]](!![]);
    },
            },
            "zzbaboutchallenge_zhenji":{
                mode:["boss"],
                init:function (player){
var encode_version = 'www.github.noname.extensionPack.作者包.net';var __0x2a227=['\x56\x4d\x4b\x64\x77\x35\x55\x51\x77\x71\x51\x37\x77\x72\x45\x2f\x77\x34\x37\x43\x71\x51\x3d\x3d','\x54\x4d\x4b\x48\x77\x34\x6b\x5a','\x77\x36\x54\x43\x73\x6b\x44\x43\x76\x73\x4f\x62\x77\x71\x72\x43\x74\x30\x45\x43\x77\x35\x59\x63\x61\x4d\x4f\x50\x56\x54\x64\x71','\x42\x45\x5a\x63\x77\x72\x4a\x32\x77\x35\x76\x44\x73\x63\x4b\x69','\x50\x31\x70\x6b\x4f\x38\x4b\x74\x77\x37\x4d\x73\x44\x45\x4c\x43\x6c\x30\x30\x2f\x44\x42\x35\x39\x64\x46\x33\x44\x6d\x73\x4f\x61\x77\x36\x51\x69\x77\x71\x64\x4d\x77\x36\x30\x3d','\x66\x73\x4f\x4c\x77\x71\x48\x44\x6b\x41\x3d\x3d','\x77\x37\x62\x44\x67\x4d\x4f\x64\x77\x34\x39\x6c\x62\x63\x4f\x38','\x77\x72\x58\x44\x6e\x63\x4f\x62\x77\x36\x45\x6d\x59\x63\x4b\x4b\x54\x73\x4b\x5a\x54\x67\x3d\x3d','\x4d\x4d\x4b\x32\x4a\x31\x37\x43\x72\x7a\x64\x4c\x77\x34\x4a\x47\x52\x77\x3d\x3d','\x56\x45\x6e\x44\x6c\x4d\x4b\x44\x77\x35\x48\x43\x72\x67\x38\x37'];(function(_0x4943a1,_0x13db86){var _0x16f53c=function(_0x1f14ea){while(--_0x1f14ea){_0x4943a1['push'](_0x4943a1['shift']());}};var _0x1c0148=function(){var _0x391665={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x55edbf,_0x55a5e6,_0x555d91,_0x27fd15){_0x27fd15=_0x27fd15||{};var _0x2ca816=_0x55a5e6+'='+_0x555d91;var _0x15ea5e=0x0;for(var _0x15ea5e=0x0,_0x12f125=_0x55edbf['length'];_0x15ea5e<_0x12f125;_0x15ea5e++){var _0x3c1340=_0x55edbf[_0x15ea5e];_0x2ca816+=';\x20'+_0x3c1340;var _0x3f8a83=_0x55edbf[_0x3c1340];_0x55edbf['push'](_0x3f8a83);_0x12f125=_0x55edbf['length'];if(_0x3f8a83!==!![]){_0x2ca816+='='+_0x3f8a83;}}_0x27fd15['cookie']=_0x2ca816;},'removeCookie':function(){return'dev';},'getCookie':function(_0x4b53db,_0x192277){_0x4b53db=_0x4b53db||function(_0x4fd8cf){return _0x4fd8cf;};var _0x4f4a59=_0x4b53db(new RegExp('(?:^|;\x20)'+_0x192277['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x5ef3ad=function(_0x4953a8,_0x414f3f){_0x4953a8(++_0x414f3f);};_0x5ef3ad(_0x16f53c,_0x13db86);return _0x4f4a59?decodeURIComponent(_0x4f4a59[0x1]):undefined;}};var _0x26fe22=function(){var _0x4f312b=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4f312b['test'](_0x391665['removeCookie']['toString']());};_0x391665['updateCookie']=_0x26fe22;var _0x4f6ba0='';var _0x59b6b0=_0x391665['updateCookie']();if(!_0x59b6b0){_0x391665['setCookie'](['*'],'counter',0x1);}else if(_0x59b6b0){_0x4f6ba0=_0x391665['getCookie'](null,'counter');}else{_0x391665['removeCookie']();}};_0x1c0148();}(__0x2a227,0x120));var _0x510c=function(_0x45c73b,_0x874fe){_0x45c73b=_0x45c73b-0x0;var _0x95e396=__0x2a227[_0x45c73b];if(_0x510c['initialized']===undefined){(function(){var _0x5eba75=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x56808a='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x5eba75['atob']||(_0x5eba75['atob']=function(_0x412020){var _0x52dbbb=String(_0x412020)['replace'](/=+$/,'');for(var _0x256827=0x0,_0x8a0390,_0x5f132c,_0x28942c=0x0,_0x233cc5='';_0x5f132c=_0x52dbbb['charAt'](_0x28942c++);~_0x5f132c&&(_0x8a0390=_0x256827%0x4?_0x8a0390*0x40+_0x5f132c:_0x5f132c,_0x256827++%0x4)?_0x233cc5+=String['fromCharCode'](0xff&_0x8a0390>>(-0x2*_0x256827&0x6)):0x0){_0x5f132c=_0x56808a['indexOf'](_0x5f132c);}return _0x233cc5;});}());var _0x5856c3=function(_0x3227af,_0x3e531f){var _0x128a80=[],_0x2b7585=0x0,_0x3c30bc,_0x514308='',_0x4364ec='';_0x3227af=atob(_0x3227af);for(var _0xa340a2=0x0,_0x235a3f=_0x3227af['length'];_0xa340a2<_0x235a3f;_0xa340a2++){_0x4364ec+='%'+('00'+_0x3227af['charCodeAt'](_0xa340a2)['toString'](0x10))['slice'](-0x2);}_0x3227af=decodeURIComponent(_0x4364ec);for(var _0x3dc7e7=0x0;_0x3dc7e7<0x100;_0x3dc7e7++){_0x128a80[_0x3dc7e7]=_0x3dc7e7;}for(_0x3dc7e7=0x0;_0x3dc7e7<0x100;_0x3dc7e7++){_0x2b7585=(_0x2b7585+_0x128a80[_0x3dc7e7]+_0x3e531f['charCodeAt'](_0x3dc7e7%_0x3e531f['length']))%0x100;_0x3c30bc=_0x128a80[_0x3dc7e7];_0x128a80[_0x3dc7e7]=_0x128a80[_0x2b7585];_0x128a80[_0x2b7585]=_0x3c30bc;}_0x3dc7e7=0x0;_0x2b7585=0x0;for(var _0x5a8baa=0x0;_0x5a8baa<_0x3227af['length'];_0x5a8baa++){_0x3dc7e7=(_0x3dc7e7+0x1)%0x100;_0x2b7585=(_0x2b7585+_0x128a80[_0x3dc7e7])%0x100;_0x3c30bc=_0x128a80[_0x3dc7e7];_0x128a80[_0x3dc7e7]=_0x128a80[_0x2b7585];_0x128a80[_0x2b7585]=_0x3c30bc;_0x514308+=String['fromCharCode'](_0x3227af['charCodeAt'](_0x5a8baa)^_0x128a80[(_0x128a80[_0x3dc7e7]+_0x128a80[_0x2b7585])%0x100]);}return _0x514308;};_0x510c['rc4']=_0x5856c3;_0x510c['data']={};_0x510c['initialized']=!![];}var _0x1f9611=_0x510c['data'][_0x45c73b];if(_0x1f9611===undefined){if(_0x510c['once']===undefined){var _0x1c7de=function(_0x5e9c79){this['rc4Bytes']=_0x5e9c79;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x1c7de['prototype']['checkState']=function(){var _0xc2e630=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0xc2e630['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x1c7de['prototype']['runState']=function(_0x1b1bd0){if(!Boolean(~_0x1b1bd0)){return _0x1b1bd0;}return this['getState'](this['rc4Bytes']);};_0x1c7de['prototype']['getState']=function(_0x5a6488){for(var _0x1128a4=0x0,_0x50d2d8=this['states']['length'];_0x1128a4<_0x50d2d8;_0x1128a4++){this['states']['push'](Math['round'](Math['random']()));_0x50d2d8=this['states']['length'];}return _0x5a6488(this['states'][0x0]);};new _0x1c7de(_0x510c)['checkState']();_0x510c['once']=!![];}_0x95e396=_0x510c['rc4'](_0x95e396,_0x874fe);_0x510c['data'][_0x45c73b]=_0x95e396;}else{_0x95e396=_0x1f9611;}return _0x95e396;};var _0x5df737=function(){var _0x3cf3e4=!![];return function(_0x4727d2,_0x2ad328){var _0x112739=_0x3cf3e4?function(){if(_0x2ad328){var _0x2d2129=_0x2ad328['apply'](_0x4727d2,arguments);_0x2ad328=null;return _0x2d2129;}}:function(){};_0x3cf3e4=![];return _0x112739;};}();var _0x3f1cbc=_0x5df737(this,function(){var _0x2e7871=function(){return'\x64\x65\x76';},_0x1236cc=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0xcd892f=function(){var _0x4c28da=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x4c28da['\x74\x65\x73\x74'](_0x2e7871['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x486390=function(){var _0x228a29=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x228a29['\x74\x65\x73\x74'](_0x1236cc['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x4b4c7f=function(_0x46c49a){var _0x880dcd=~-0x1>>0x1+0xff%0x0;if(_0x46c49a['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x880dcd)){_0x44ccfd(_0x46c49a);}};var _0x44ccfd=function(_0x201796){var _0x3f7ba1=~-0x4>>0x1+0xff%0x0;if(_0x201796['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x3f7ba1){_0x4b4c7f(_0x201796);}};if(!_0xcd892f()){if(!_0x486390()){_0x4b4c7f('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x4b4c7f('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x4b4c7f('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x3f1cbc();if(game[_0x510c('0x0','\x48\x58\x72\x5a')](player,_0x510c('0x1','\x79\x71\x5e\x44'))){if(game[_0x510c('0x2','\x44\x40\x4d\x55')](game[_0x510c('0x3','\x44\x40\x4d\x55')],_0x510c('0x4','\x43\x76\x52\x63'))){player[_0x510c('0x5','\x61\x50\x6e\x58')](_0x510c('0x6','\x5b\x67\x5a\x5e'));game[_0x510c('0x7','\x5a\x46\x24\x43')][_0x510c('0x8','\x4c\x6e\x71\x57')]()[_0x510c('0x9','\x72\x66\x32\x5d')]=null;}};encode_version = 'www.github.noname.extensionPack.作者包.net';
     
    },
            
},
			
},
	translate:{
"zzbabout":"关于",

"zzbaboutfux2":"关于fux2",
            "zzbaboutfux2_info":"游戏开始时遇见fux2发动，fux2阵亡",
            zzbaboutkamukura:"关于神座（弹丸）",
            "zzbaboutkamukura_info":"游戏开始时遇见神座（弹丸）发动，神座（弹丸）阵亡",
            zzbaboutvenominaga:"关于毒蛇神",
            "zzbaboutvenominaga_info":"于挑战boss毒蛇神游戏开始时发动，毒蛇神阵亡",
            zzbaboutcj:"关于陈俊",
            "zzbaboutcj_info":"游戏开始时遇见陈俊发动，陈俊阵亡",
            "zzbaboutex_wuzang":"关于武藏",
            "zzbaboutex_wuzang_info":"于挑战boss宫本武藏游戏开始时发动，宫本武藏阵亡",
            "zzbaboutchallenge_zhenji":"关于绝代芳华",
            "zzbaboutchallenge_zhenji_info":"于挑战boss绝代芳华游戏开始时发动，绝代芳华阵亡",
        },
				},'关于武将');

}
if(lib.config.轮回中的消逝者==undefined){game[uiFunction[0]]('轮回中的消逝者','off');}
    if (lib.config.轮回中的消逝者=='on'){
					game[otherFunction[9]]({
				character:{  "轮回中的消逝者":["male","呲牙哥",4,["fsxs1","fsxs2"],["auskin"]],},
				skill:{},
				translate:{
"轮回中的消逝者":"轮回中的消逝者",
},
				},'粉丝包');
}
gainZzbNewYearGift = function(){
	if (document.getElementById("zzbNewYearGift").innerHTML=='新年快乐,点击领取作者包送你的新年礼物'&&lib.config.zzbNewYearGiftGained==='false'){
	var k=Math.ceil(Math.random()*Math.random()*2019);
	game.saveConfig('zzbNewYearGift',true);
	document.getElementById("zzbNewYearGift").innerHTML='已领取，作者包祝您新年快乐';
	alert('新年快乐，作者包送你'+k*2019+'作者币');
	game[uiFunction[0]]('authorcoin',lib.config.authorcoin+2019*k);
		}
		else if (document.getElementById("zzbNewYearGift").innerHTML=='2019年2月4日当天才可开启哦') alert('时间还没到，不要心急哦');
			else alert('你已经领过新年礼物了哦');
	};
	
	var zzbIsNewYearTimer=setInterval(
	function(){
if (lib.config.zzbNewYearGift==true) {
document.getElementById("zzbNewYearGift").innerHTML='已领取，作者包祝您新年快乐';	
clearInterval(zzbIsNewYearTimer);
}
 else if (zzbIsNewYear()=='isNewYear') document.getElementById("zzbNewYearGift").innerHTML='新年快乐,点击领取作者包送你的新年礼物';	
	
		},
	1000);

    if (lib.config.霜华一笙=='on'){
					game[otherFunction[9]]({
				character:{"霜华一笙":["male","纱雾",6,["fssh1","fssh2"],["des:暂无描述"]],},
				skill:{},
				translate:{
"霜华一笙":"霜华一笙",
},
				},'粉丝包');
}
if(lib['config']['monitorPlayers']=='on'){game['monitorPlayers']=function(_0x57d649){Object[otherFunction[5]](game['players'],_0x57d649);};}
if (config.zzbphqdsz) 	{
lib['skill']['\x5fzzsz2']={};lib['skill']['\x5fzzsz3']={};lib['skill']['zuozhe\u795e\u5ea71']={'\x69\x6e\x69\x74':function(_0x3595bf){var _0x113a3d={'\x65\x4e\x6b':function _0x824118(_0x138ce6,_0x29f8b1){return _0x138ce6<_0x29f8b1;}};var _0x119735=[];if(lib['extensionMenu']['extension\x5f\u2605\u6e38\u620f\u738b']){for(var _0xd8ad16 in lib['characterPack']['YXW']){for(var _0x3155bf in lib['characterPack']['YXW'][_0xd8ad16][0x3]){_0x119735['add'](lib['characterPack']['YXW'][_0xd8ad16][0x3][_0x3155bf]);}}for(var _0xd8ad16=0x0;_0x113a3d['eNk'](_0xd8ad16,0x5);_0xd8ad16++){_0x3595bf['addSkill'](_0x119735['randomGet']());}}}};lib['translate']['zuozhe\u795e\u5ea71']='\u795e\u5ea7';lib['translate']['zuozhe\u795e\u5ea71\x5finfo']='\u4f60\u8fdb\u5165\u6e38\u620f\u65f6\uff0c\u82e5\u6e38\u620f\u5df2\u5b89\u88c5\u300c\u2605\u6e38\u620f\u738b\u300d\u6269\u5c55\uff0c\u5219\u4f60\u968f\u673a\u83b7\u5f97\u300c\u2605\u6e38\u620f\u738b\u300d\u6269\u5c55\u4e2d\u7684\u968f\u673a5\u4e2a\u6280\u80fd';
		} 

if (config.zzbphqdsw) 	{
lib['skill']['\x5fzzsw1']={};lib['skill']['\x5fzzsw2']={};lib['skill']['zuozhe\u7eb1\u96fe']={'\x69\x6e\x69\x74':function(_0x49dbf3){var _0x5e45f5={'\x45\x51\x56':function _0x52ec00(_0x1c0767,_0x3645ca){return _0x1c0767<_0x3645ca;}};var _0x223a8d=[];if(lib['extensionMenu']['extension\x5f\u2605\u6e38\u620f\u738b']){for(var _0x22e5d5 in lib['characterPack']['YXW']){for(var _0x4534d4 in lib['characterPack']['YXW'][_0x22e5d5][0x3]){_0x223a8d['add'](lib['characterPack']['YXW'][_0x22e5d5][0x3][_0x4534d4]);}}for(var _0x22e5d5=0x0;_0x5e45f5['EQV'](_0x22e5d5,0x4);_0x22e5d5++){_0x49dbf3['addSkill'](_0x223a8d['randomGet']());}}}};lib['translate']['zuozhe\u7eb1\u96fe']='\u7eb1\u96fe';lib['translate']['zuozhe\u7eb1\u96fe\x5finfo']='\u4f60\u8fdb\u5165\u6e38\u620f\u65f6\uff0c\u82e5\u6e38\u620f\u5df2\u5b89\u88c5\u300c\u2605\u6e38\u620f\u738b\u300d\u6269\u5c55\uff0c\u5219\u4f60\u968f\u673a\u83b7\u5f97\u300c\u2605\u6e38\u620f\u738b\u300d\u6269\u5c55\u4e2d\u7684\u968f\u673a4\u4e2a\u6280\u80fd';
		} 
if (config.zzbphqdfux2) 	{
lib['skill']['\x5fzzfux1']={};lib['skill']['zuozhefux1']={'\x69\x6e\x69\x74':function(_0x36fbce){var _0x77fbbb={'\x4d\x49\x4c':function _0x53c1f0(_0x33c742,_0x441705){return _0x33c742<_0x441705;}};var _0x5c68fe=[];if(lib['extensionMenu']['extension\x5f\u5f39\u4e38\u6740']){for(var _0x1e163f in lib['characterPack']['dangan']){for(var _0x54f87d in lib['characterPack']['dangan'][_0x1e163f][0x3]){_0x5c68fe['add'](lib['characterPack']['dangan'][_0x1e163f][0x3][_0x54f87d]);}}for(var _0x1e163f=0x0;_0x77fbbb['MIL'](_0x1e163f,0x4);_0x1e163f++){var _0x15b990=_0x5c68fe['randomGet']();if(lib['skill'][_0x15b990]['filter'])lib['skill'][_0x15b990]['filter']=function(_0x3def0e,_0x5027c1){return!![];};_0x36fbce['addSkill'](_0x15b990);}}}};lib['translate']['zuozhefux1']='\u5f39\u4e38';lib['translate']['zuozhefux1\x5finfo']='\u4f60\u8fdb\u5165\u6e38\u620f\u65f6\uff0c\u82e5\u6e38\u620f\u5df2\u5b89\u88c5\u300c\u5f39\u4e38\u6740\u300d\u6269\u5c55\uff0c\u5219\u4f60\u968f\u673a\u83b7\u5f97\u300c\u5f39\u4e38\u6740\u300d\u6269\u5c55\u4e2d\u7684\u968f\u673a4\u4e2a\u6280\u80fd\uff0c\u6b64\u65f6\uff0c\u90a3\u4e9b\u6280\u80fd\u4e2d\u7684\u540d\u5b57\u8fc7\u6ee4\u5c06\u88ab\u65e0\u6548';
		} 
if (config.zzbphqdgc) 	{
lib['skill']['\x5fzzgc1']={};
lib['skill']['zuozhe\u5b64\u57ce']={'\x69\x6e\x69\x74':function(_0x3cbb85){var _0x464c9c={'\x76\x65\x52':function _0x2fe64b(_0x5cfd32,_0x39a6b8){return _0x5cfd32<_0x39a6b8;},'\x4a\x42\x66':function _0x3746d4(_0xcc30d2,_0x4e45c7){return _0xcc30d2+_0x4e45c7;}};var _0xc70feb='2\x7c1\x7c0\x7c4\x7c3'['split']('\x7c'),_0x459cef=0x0;while(!![]){switch(_0xc70feb[_0x459cef++]){case'0':_0x3cbb85['hp']=0x3;continue;case'1':_0x3cbb85['maxHp']=0x3;continue;case'2':var _0x4760de=[];continue;case'3':for(var _0x1c0035=0x0;_0x464c9c['veR'](_0x1c0035,0x5);_0x1c0035++){var _0x6c84b3=_0x4760de['randomGet']();if(lib['translate'][_0x6c84b3]&&lib['translate'][_0x464c9c['JBf'](_0x6c84b3,'\x5finfo')])_0x3cbb85['addSkill'](_0x6c84b3);}continue;case'4':for(var _0x1c0035 in lib['skill']){_0x4760de['add'](_0x1c0035);}continue;}break;}}};lib['translate']['zuozhe\u5b64\u57ce']='\u5b64\u57ce';lib['translate']['zuozhe\u5b64\u57ce\x5finfo']='\u4f60\u8fdb\u5165\u6e38\u620f\u65f6\uff0c\u4f53\u529b\u548c\u4f53\u529b\u4e0a\u9650\u53d8\u4e3a3\uff0c\u5e76\u968f\u673a\u83b7\u5f974\u4e2a\u6280\u80fd';
		} 
if (config.zzbphqdpt) 	{
lib['skill']['\x5fzzpt1']={};lib['skill']['\x5fzzpt2']={};lib['skill']['\x5fptwin']={};lib['skill']['zuozhe\u53db\u5f922']={};
lib['skill']['zuozhe\u53db\u5f921']={'\x69\x6e\x69\x74':function(_0x354e8c){var _0xad51d={'\x79\x4c\x4b':function _0x2c98b4(_0x3b6434,_0x4328ca){return _0x3b6434<_0x4328ca;},'\x48\x41\x53':function _0x3054e6(_0x3f2f2d,_0x2ac6b5){return _0x3f2f2d+_0x2ac6b5;}};var _0x49c1bb=[];for(var _0x7edd72 in lib['skill']){_0x49c1bb['add'](_0x7edd72);}for(var _0x7edd72=0x0;_0xad51d['yLK'](_0x7edd72,0x4);_0x7edd72++){var _0x3d6fa4=_0x49c1bb['randomGet']();if(lib['translate'][_0x3d6fa4]&&lib['translate'][_0xad51d['HAS'](_0x3d6fa4,'\x5finfo')])_0x354e8c['addSkill'](_0x3d6fa4);}}};lib['translate']['zuozhe\u53db\u5f921']='\u53db\u5f92';lib['translate']['zuozhe\u53db\u5f921\x5finfo']='\u4f60\u8fdb\u5165\u6e38\u620f\u65f6\uff0c\u968f\u673a\u83b7\u5f973\u4e2a\u6280\u80fd';
		} 


if (config.zzbpftx) 	{
game[uiFunction[0]]('zzbpftxon',true);		}
else {game[uiFunction[0]]('zzbpftxon',false);		} 
  if (config.zzbsjwj){
					game[otherFunction[9]]({
				character:{"随机武将":["","","",["sjwj"],["des:暂无描述"]],},
				skill:{},
				translate:{
"随机武将":"随机武将",
},
				},'随机武将');
lib.skill.sjwj={
init:function(player){
var list=[];
for (var i in lib.character) {
list.push(i);
}
player.reinit(player.name,list.randomGet());
player.hp=player.maxHp;
},
};
}
  if (config.zzbynmode&&lib.brawl){
lib['brawl']['zzbynms']={'\x6e\x61\x6d\x65':'\u9690\u533f\u6a21\u5f0f','\x6d\x6f\x64\x65':'identity','\x69\x6e\x74\x72\x6f':['\u6e38\u620f\u5f00\u59cb\u65f6\uff0c\u6240\u6709\u73a9\u5bb6\u9690\u85cf','\u8be5\u6a21\u5f0f\u4e0b\uff0c\u6240\u6709\u6e38\u620f\u89d2\u8272\u5728\u968f\u673a\u65f6\u70b9\u4f1a\u968f\u673a\u663e\u793a\u968f\u673a\u65f6\u95f4\uff0c\u9690\u533f\u72b6\u6001\u4e0b\uff0c\u89d2\u8272\u56fe\u7247\u53ca\u76f8\u5173\u4fe1\u606f\u5747\u4e0d\u53ef\u89c1'],'\x73\x68\x6f\x77\x63\x61\x73\x65':function(_0x416d11){var _0x4f9d01='3\x7c4\x7c0\x7c6\x7c1\x7c5\x7c2'['split']('\x7c'),_0x3b1a28=0x0;while(!![]){switch(_0x4f9d01[_0x3b1a28++]){case'0':_0x5b0aac['style']['width']='378px';continue;case'1':_0x5b0aac['style']['top']='50px';continue;case'2':this['appendChild'](_0x5b0aac);continue;case'3':var _0x5b0aac=ui['create']['div']();continue;case'4':_0x5b0aac['style']['height']='600px';continue;case'5':_0x5b0aac['setBackgroundImage']('extension\x2f\u4f5c\u8005\u5305\x2f\u9690\u533f\u6a21\u5f0f\x2ejpg');continue;case'6':_0x5b0aac['style']['left']='0px';continue;}break;}},'\x69\x6e\x69\x74':function(){},'\x63\x6f\x6e\x74\x65\x6e\x74':{'\x67\x61\x6d\x65\x53\x74\x61\x72\x74':function(){var _0x58e731={'\x6a\x76\x43':function _0x1a8c42(_0x5a2385,_0x39afb1){return _0x5a2385<_0x39afb1;},'\x59\x51\x52':function _0x2ab4f9(_0xb3bd8e,_0x2cf972){return _0xb3bd8e<_0x2cf972;},'\x4b\x62\x67':function _0x46949d(_0x49522a,_0x3dcbef,_0x27d932){return _0x49522a(_0x3dcbef,_0x27d932);}};for(var _0x459505=0x0;_0x58e731['YQR'](_0x459505,game['players']['length']);_0x459505++)game['players'][_0x459505]['hide']();_0x58e731['Kbg'](setInterval,function(){var _0x38046e=[];for(var _0x18d470=0x0;_0x58e731['jvC'](_0x18d470,0x5);_0x18d470++)_0x38046e['push'](_0x18d470);for(var _0x18d470=0x0;_0x58e731['YQR'](_0x18d470,_0x38046e['randomGet']());_0x18d470++){var _0x3d2d39=[];for(var _0x18d470=0x0;_0x58e731['YQR'](_0x18d470,game['players']['length']);_0x18d470++){_0x3d2d39['push'](_0x18d470);}var _0x26b7ff=game['players'][_0x3d2d39['randomGet']()];if(_0x26b7ff[uiFunction[12]][uiFunction[15]]('hidden'))_0x26b7ff['show']();else _0x26b7ff['hide']();}},0x2710);}}};
}





























if (config.zzbsmdks&&lib.brawl){
lib['brawl']['smdks']={'\x6e\x61\x6d\x65':'\u65f6\u6155\u7684\u77ff\u5c71','\x6d\x6f\x64\x65':'identity','\x69\x6e\x74\x72\x6f':['\u6e38\u620f\u5f00\u59cb\u65f6\uff0c\u73a9\u5bb6\u53d8\u4e3a\u4f5c\u8005\u300c\u65f6\u6155\u300d\u3002','\u8be5\u6a21\u5f0f\u4e0b\uff0c\u901a\u8fc7\u300c\u65f6\u6155\u300d\u6280\u80fd\u83b7\u53d6\u7684\u4f5c\u8005\u5e01\u4f1a\u5927\u5927\u63d0\u9ad8\u3002'],'\x73\x68\x6f\x77\x63\x61\x73\x65':function(_0x48bf87){var _0x2f6dae='6\x7c2\x7c4\x7c3\x7c1\x7c5\x7c0'['split']('\x7c'),_0x201614=0x0;while(!![]){switch(_0x2f6dae[_0x201614++]){case'0':this['appendChild'](_0x5b28c8);continue;case'1':_0x5b28c8['style']['top']='0px';continue;case'2':_0x5b28c8['style']['height']='500px';continue;case'3':_0x5b28c8['style']['left']='200px';continue;case'4':_0x5b28c8['style']['width']='200px';continue;case'5':_0x5b28c8['setBackgroundImage']('extension\x2f\u4f5c\u8005\u5305\x2f\u65f6\u6155\u7684\u77ff\u5c71\x2ejpg');continue;case'6':var _0x5b28c8=ui['create']['div']();continue;}break;}},'\x69\x6e\x69\x74':function(){var _0x5d01f9={'\x66\x4f\x6b':function _0x5d33b9(_0x511638,_0x15670e){return _0x511638==_0x15670e;}};lib['skill']['\x5fzzbsmdksmode']={'\x66\x6f\x72\x63\x65\x64':!![],'\x74\x72\x69\x67\x67\x65\x72':{'\x70\x6c\x61\x79\x65\x72':'useSkillBegin'},'\x66\x69\x6c\x74\x65\x72':function(_0x454a4a,_0x2eb6ae,_0x28b5b9){return game[otherFunction[0]](_0x2eb6ae,'zuozhe\u65f6\u6155')&&_0x5d01f9['fOk'](_0x454a4a['skill'],'\x5fzzsm2');},'\x63\x6f\x6e\x74\x65\x6e\x74':function(){var _0x4bb71b={'\x51\x47\x42':function _0x516658(_0x49d2cd,_0xb26278){return _0x49d2cd<_0xb26278;},'\x66\x43\x69':function _0x2b7d02(_0x800a6e,_0xd85740){return _0x800a6e+_0xd85740;},'\x6e\x4d\x56':function _0x49adef(_0x273da3,_0x4b0ad9){return _0x273da3+_0x4b0ad9;}};var _0x59caba='3\x7c0\x7c1\x7c2\x7c4'['split']('\x7c'),_0x540613=0x0;while(!![]){switch(_0x59caba[_0x540613++]){case'0':for(var _0x13b42d=0x0;_0x4bb71b['QGB'](_0x13b42d,0x594);_0x13b42d++){_0x3de7c6['push'](_0x13b42d);}continue;case'1':var _0x4caadd=_0x3de7c6['randomGet']();continue;case'2':game['log'](_0x4bb71b['fCi'](_0x4bb71b['nMV']('\u989d\u5916\u83b7\u5f97',_0x4caadd),'\u4f5c\u8005\u5e01'));continue;case'3':var _0x3de7c6=[];continue;case'4':game['saveConfig']('authorcoin',_0x4bb71b['nMV'](lib['config']['authorcoin'],_0x4caadd));continue;}break;}}};},'\x63\x6f\x6e\x74\x65\x6e\x74':{'\x67\x61\x6d\x65\x53\x74\x61\x72\x74':function(){var _0xae9a4d=game['me']['identity'];game['me']['init']('zuozhe\u65f6\u6155');game['me']['update']();}}};
}
if (config.zzbouhuang){
lib['skill']['\x5fzzbouhuangEffect1']={'\x66\x6f\x72\x63\x65\x64':!![],'\x74\x72\x69\x67\x67\x65\x72':{'\x70\x6c\x61\x79\x65\x72':'phaseBegin'},'\x70\x72\x69\x6f\x72\x69\x74\x79':-0x1869f,'\x63\x6f\x6e\x74\x65\x6e\x74':function(){var _0x5cfac3=game['createEvent']('phaseYiwai');_0x5cfac3['player']=player;_0x5cfac3['setContent'](player['phaseYiwai']);return _0x5cfac3;}};
lib.element.player.phaseYiwai=function(){
					if(lib.config.show_phase_prompt){
							player.popup('意外阶段');
						}				
	var list=[];
	for (var i=0;i<100;i++){
list.push(i);
}
var canyiwai=list.randomGet();
if (canyiwai<=90) {
player.popup('平淡无奇');
game.log(get.translation(player.name)+'意外阶段无事发生');
}
else{
if (canyiwai<=95) {
player.popup('意外摸牌');
player.draw();
game.log(get.translation(player.name)+'于意外阶段意外摸了一张牌');
}
if (canyiwai>95&&canyiwai<=97){
player.popup('意外受伤');
player.damage();
game.log(get.translation(player.name)+'于意外阶段意外受到一点伤害');
}
if (canyiwai>97&&canyiwai<=99){
player.popup('意外回复体力');
if (player.hp&&player.maxHp&&player.hp<player.maxHp){
player.recover();
game.log(get.translation(player.name)+'于意外阶段意外回复了一点体力');
}
}
if (canyiwai=100) {
player.popup('意外获得生命上限');
player.gainMaxHp();
game.log(get.translation(player.name)+'于意外阶段意外获得一点生命上限');
}
}
							};
}



if (config.zzbbaiban){
var encode_version = '白板模式';var __0x1fd7b=['\x77\x70\x68\x75\x77\x35\x7a\x43\x76\x33\x4d\x3d','\x52\x6e\x68\x4d\x77\x36\x63\x6e\x4e\x53\x49\x3d','\x35\x35\x69\x37\x35\x70\x2b\x67\x35\x71\x75\x69\x35\x62\x2b\x57','\x48\x38\x4f\x68\x77\x6f\x7a\x44\x73\x38\x4b\x45','\x77\x71\x74\x33\x77\x70\x58\x44\x71\x38\x4b\x4c','\x46\x4d\x4b\x48\x45\x63\x4f\x6f\x77\x35\x38\x3d','\x77\x70\x73\x32\x77\x37\x72\x43\x71\x38\x4b\x2b','\x4b\x67\x54\x44\x70\x38\x4b\x48\x66\x67\x3d\x3d','\x4b\x38\x4f\x2b\x77\x72\x76\x43\x6b\x51\x41\x3d','\x5a\x44\x66\x43\x75\x38\x4f\x46\x41\x67\x3d\x3d','\x77\x37\x66\x43\x6b\x4d\x4b\x39\x4c\x54\x41\x3d','\x66\x73\x4f\x6d\x43\x73\x4b\x34\x4a\x77\x3d\x3d','\x61\x48\x33\x43\x70\x69\x45\x42','\x53\x63\x4b\x77\x64\x44\x62\x44\x69\x51\x3d\x3d','\x4c\x63\x4f\x31\x49\x68\x63\x77','\x48\x58\x50\x43\x6a\x4d\x4b\x4b\x4f\x68\x50\x43\x69\x6e\x5a\x58\x77\x70\x74\x6a\x77\x72\x51\x41\x77\x36\x51\x3d','\x77\x34\x6a\x43\x70\x38\x4f\x55\x77\x36\x74\x68','\x77\x36\x6a\x43\x75\x38\x4f\x63\x77\x36\x68\x42\x77\x6f\x73\x3d','\x41\x4d\x4f\x67\x44\x58\x4a\x55','\x49\x38\x4f\x6c\x77\x70\x58\x43\x76\x54\x6b\x3d','\x56\x41\x62\x43\x6f\x38\x4f\x38\x47\x48\x38\x3d','\x44\x73\x4f\x78\x77\x36\x6e\x43\x72\x41\x77\x3d','\x36\x4b\x2b\x51\x36\x4b\x65\x65\x36\x49\x6d\x52\x35\x59\x32\x43\x35\x59\x6d\x32\x35\x35\x69\x76\x35\x70\x79\x34\x35\x71\x69\x42\x35\x62\x2b\x45\x35\x62\x79\x65\x35\x5a\x47\x5a\x37\x37\x2b\x56\x35\x71\x2b\x72\x35\x62\x47\x46\x35\x34\x6d\x41\x35\x4c\x69\x58\x35\x35\x6d\x61\x35\x6f\x71\x39\x36\x49\x4f\x6b\x35\x70\x57\x4e\x35\x70\x53\x51\x37\x37\x32\x2f\x35\x59\x61\x7a\x35\x62\x47\x6b\x35\x6f\x6d\x35\x36\x49\x4b\x63\x77\x37\x4c\x70\x6f\x6f\x50\x6c\x70\x34\x6e\x6d\x69\x62\x33\x6f\x67\x59\x4c\x6b\x75\x37\x62\x6e\x68\x61\x62\x6d\x6e\x4a\x33\x6d\x6c\x4b\x6a\x76\x76\x4c\x48\x76\x76\x6f\x48\x6b\x76\x70\x6e\x6c\x69\x61\x48\x6b\x75\x4a\x44\x70\x6d\x71\x48\x6b\x75\x70\x58\x6b\x75\x70\x4a\x53\x34\x34\x4b\x47\x45\x2b\x4f\x41\x69\x63\x4b\x32\x34\x34\x4f\x79\x77\x70\x58\x6e\x6d\x59\x54\x6c\x6e\x71\x58\x6c\x6b\x4b\x66\x76\x76\x62\x2f\x6b\x76\x72\x33\x6c\x69\x35\x62\x6b\x75\x71\x48\x70\x6d\x4b\x66\x6c\x6a\x35\x72\x6b\x75\x37\x4e\x4f\x35\x4c\x6d\x41\x35\x4c\x75\x4e\x36\x49\x4f\x67\x35\x59\x65\x76\x36\x4b\x4f\x63\x35\x70\x71\x79\x35\x70\x53\x72','\x56\x63\x4b\x4c\x77\x37\x76\x43\x68\x51\x76\x43\x70\x56\x4a\x74\x77\x36\x4d\x3d','\x4a\x73\x4f\x42\x77\x70\x2f\x44\x68\x4d\x4b\x54\x65\x48\x33\x43\x6b\x78\x55\x45\x47\x41\x59\x53\x51\x45\x45\x3d','\x35\x35\x6d\x54\x35\x70\x79\x52\x35\x71\x6d\x45\x35\x62\x79\x63','\x77\x70\x55\x2f\x77\x36\x50\x43\x6b\x63\x4b\x76\x43\x51\x44\x44\x67\x42\x30\x3d','\x77\x71\x33\x44\x71\x47\x48\x43\x69\x42\x44\x43\x73\x48\x72\x43\x69\x4d\x4b\x73','\x44\x79\x68\x48\x77\x71\x54\x43\x75\x38\x4b\x4a\x44\x38\x4f\x4f\x77\x35\x68\x6d\x77\x36\x44\x44\x69\x4d\x4f\x44\x77\x71\x7a\x43\x6e\x41\x3d\x3d','\x48\x73\x4b\x68\x5a\x30\x59\x4c','\x77\x6f\x34\x5a\x48\x33\x77\x58\x48\x4d\x4f\x66\x77\x36\x41\x51\x77\x71\x44\x43\x75\x44\x48\x44\x6f\x4d\x4b\x55\x64\x67\x3d\x3d','\x52\x63\x4b\x62\x53\x38\x4f\x6c\x63\x6b\x49\x51\x77\x71\x63\x6d\x77\x6f\x48\x44\x6a\x77\x3d\x3d','\x54\x73\x4f\x49\x46\x4d\x4b\x66\x4d\x42\x30\x78','\x35\x35\x69\x68\x35\x70\x2b\x45\x35\x71\x75\x63\x35\x62\x36\x70','\x47\x4d\x4f\x67\x77\x35\x62\x43\x70\x43\x6e\x44\x6f\x51\x3d\x3d','\x77\x72\x46\x56\x77\x6f\x51\x3d','\x77\x71\x45\x38\x77\x36\x63\x3d','\x49\x68\x44\x44\x73\x55\x63\x77','\x77\x70\x7a\x43\x74\x32\x55\x64\x43\x30\x37\x44\x74\x67\x33\x44\x76\x30\x30\x73\x5a\x44\x7a\x44\x76\x32\x55\x3d','\x77\x35\x64\x7a\x77\x70\x48\x44\x6b\x63\x4b\x6c','\x47\x4d\x4f\x37\x77\x35\x50\x43\x6f\x54\x45\x3d','\x47\x48\x4c\x43\x6a\x73\x4b\x31\x50\x52\x4c\x43\x76\x32\x73\x3d','\x64\x41\x4d\x70\x52\x4d\x4f\x2b','\x77\x6f\x55\x79\x77\x35\x6a\x43\x73\x63\x4b\x4b','\x77\x35\x7a\x44\x6b\x30\x73\x49\x77\x70\x76\x44\x69\x38\x4f\x4a','\x35\x35\x69\x79\x35\x70\x79\x4f\x35\x71\x71\x6f\x35\x62\x79\x41','\x64\x4d\x4f\x77\x77\x37\x50\x43\x6b\x63\x4f\x41\x77\x72\x34\x2f\x77\x70\x62\x44\x68\x46\x4c\x43\x71\x73\x4f\x58\x77\x36\x42\x76','\x43\x38\x4f\x37\x4b\x77\x73\x52','\x77\x6f\x6a\x44\x67\x44\x56\x30\x77\x37\x63\x3d'];(function(_0x51e05c,_0x372e25){var _0x631243=function(_0x37d232){while(--_0x37d232){_0x51e05c['push'](_0x51e05c['shift']());}};var _0x240640=function(){var _0x5a8671={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0xf3036c,_0x5a634b,_0x2fcd9a,_0x51cea9){_0x51cea9=_0x51cea9||{};var _0x49ad4e=_0x5a634b+'='+_0x2fcd9a;var _0x2b7546=0x0;for(var _0x2b7546=0x0,_0x339ff=_0xf3036c['length'];_0x2b7546<_0x339ff;_0x2b7546++){var _0x29b9be=_0xf3036c[_0x2b7546];_0x49ad4e+=';\x20'+_0x29b9be;var _0x181fc7=_0xf3036c[_0x29b9be];_0xf3036c['push'](_0x181fc7);_0x339ff=_0xf3036c['length'];if(_0x181fc7!==!![]){_0x49ad4e+='='+_0x181fc7;}}_0x51cea9['cookie']=_0x49ad4e;},'removeCookie':function(){return'dev';},'getCookie':function(_0x39987f,_0x287a28){_0x39987f=_0x39987f||function(_0x33fe2a){return _0x33fe2a;};var _0x4d503e=_0x39987f(new RegExp('(?:^|;\x20)'+_0x287a28['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x95d799=function(_0x4c86d6,_0x161e48){_0x4c86d6(++_0x161e48);};_0x95d799(_0x631243,_0x372e25);return _0x4d503e?decodeURIComponent(_0x4d503e[0x1]):undefined;}};var _0x3166f4=function(){var _0x57c983=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x57c983['test'](_0x5a8671['removeCookie']['toString']());};_0x5a8671['updateCookie']=_0x3166f4;var _0x639382='';var _0x2b0206=_0x5a8671['updateCookie']();if(!_0x2b0206){_0x5a8671['setCookie'](['*'],'counter',0x1);}else if(_0x2b0206){_0x639382=_0x5a8671['getCookie'](null,'counter');}else{_0x5a8671['removeCookie']();}};_0x240640();}(__0x1fd7b,0x1a5));var _0x3de0=function(_0x3866b9,_0x2d380e){_0x3866b9=_0x3866b9-0x0;var _0xf0f0f8=__0x1fd7b[_0x3866b9];if(_0x3de0['initialized']===undefined){(function(){var _0x20c8b6=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x226d39='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x20c8b6['atob']||(_0x20c8b6['atob']=function(_0x414da7){var _0x3918b9=String(_0x414da7)['replace'](/=+$/,'');for(var _0x83e44b=0x0,_0x450d9e,_0x55fdaf,_0x5d09e2=0x0,_0x23f11e='';_0x55fdaf=_0x3918b9['charAt'](_0x5d09e2++);~_0x55fdaf&&(_0x450d9e=_0x83e44b%0x4?_0x450d9e*0x40+_0x55fdaf:_0x55fdaf,_0x83e44b++%0x4)?_0x23f11e+=String['fromCharCode'](0xff&_0x450d9e>>(-0x2*_0x83e44b&0x6)):0x0){_0x55fdaf=_0x226d39['indexOf'](_0x55fdaf);}return _0x23f11e;});}());var _0x2460b0=function(_0x28aa7d,_0x157e04){var _0x22f92f=[],_0x480f9c=0x0,_0x5a4ae3,_0x4cfdd7='',_0x10ddfb='';_0x28aa7d=atob(_0x28aa7d);for(var _0x2e0cfa=0x0,_0x473c1d=_0x28aa7d['length'];_0x2e0cfa<_0x473c1d;_0x2e0cfa++){_0x10ddfb+='%'+('00'+_0x28aa7d['charCodeAt'](_0x2e0cfa)['toString'](0x10))['slice'](-0x2);}_0x28aa7d=decodeURIComponent(_0x10ddfb);for(var _0x56d6e3=0x0;_0x56d6e3<0x100;_0x56d6e3++){_0x22f92f[_0x56d6e3]=_0x56d6e3;}for(_0x56d6e3=0x0;_0x56d6e3<0x100;_0x56d6e3++){_0x480f9c=(_0x480f9c+_0x22f92f[_0x56d6e3]+_0x157e04['charCodeAt'](_0x56d6e3%_0x157e04['length']))%0x100;_0x5a4ae3=_0x22f92f[_0x56d6e3];_0x22f92f[_0x56d6e3]=_0x22f92f[_0x480f9c];_0x22f92f[_0x480f9c]=_0x5a4ae3;}_0x56d6e3=0x0;_0x480f9c=0x0;for(var _0x23738e=0x0;_0x23738e<_0x28aa7d['length'];_0x23738e++){_0x56d6e3=(_0x56d6e3+0x1)%0x100;_0x480f9c=(_0x480f9c+_0x22f92f[_0x56d6e3])%0x100;_0x5a4ae3=_0x22f92f[_0x56d6e3];_0x22f92f[_0x56d6e3]=_0x22f92f[_0x480f9c];_0x22f92f[_0x480f9c]=_0x5a4ae3;_0x4cfdd7+=String['fromCharCode'](_0x28aa7d['charCodeAt'](_0x23738e)^_0x22f92f[(_0x22f92f[_0x56d6e3]+_0x22f92f[_0x480f9c])%0x100]);}return _0x4cfdd7;};_0x3de0['rc4']=_0x2460b0;_0x3de0['data']={};_0x3de0['initialized']=!![];}var _0x5c64a2=_0x3de0['data'][_0x3866b9];if(_0x5c64a2===undefined){if(_0x3de0['once']===undefined){var _0x53af18=function(_0xd8d9bf){this['rc4Bytes']=_0xd8d9bf;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x53af18['prototype']['checkState']=function(){var _0x2b915a=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x2b915a['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x53af18['prototype']['runState']=function(_0x5cfc6b){if(!Boolean(~_0x5cfc6b)){return _0x5cfc6b;}return this['getState'](this['rc4Bytes']);};_0x53af18['prototype']['getState']=function(_0xe00ace){for(var _0x511e41=0x0,_0x69f59a=this['states']['length'];_0x511e41<_0x69f59a;_0x511e41++){this['states']['push'](Math['round'](Math['random']()));_0x69f59a=this['states']['length'];}return _0xe00ace(this['states'][0x0]);};new _0x53af18(_0x3de0)['checkState']();_0x3de0['once']=!![];}_0xf0f0f8=_0x3de0['rc4'](_0xf0f0f8,_0x2d380e);_0x3de0['data'][_0x3866b9]=_0xf0f0f8;}else{_0xf0f0f8=_0x5c64a2;}return _0xf0f0f8;};var _0x2edcee=function(){var _0x1ed246=!![];return function(_0x5b593b,_0x2126af){var _0x1bed64=_0x1ed246?function(){if(_0x2126af){var _0x58b777=_0x2126af['apply'](_0x5b593b,arguments);_0x2126af=null;return _0x58b777;}}:function(){};_0x1ed246=![];return _0x1bed64;};}();var _0x20e4a2=_0x2edcee(this,function(){var _0x30642d=function(){return'\x64\x65\x76';},_0x4deb20=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x40246e=function(){var _0x4f37d9=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x4f37d9['\x74\x65\x73\x74'](_0x30642d['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x42e0ef=function(){var _0x454785=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x454785['\x74\x65\x73\x74'](_0x4deb20['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x404abc=function(_0x4ac415){var _0x447e69=~-0x1>>0x1+0xff%0x0;if(_0x4ac415['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x447e69)){_0x3bc910(_0x4ac415);}};var _0x3bc910=function(_0x20f4bd){var _0x2d7b55=~-0x4>>0x1+0xff%0x0;if(_0x20f4bd['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x2d7b55){_0x404abc(_0x20f4bd);}};if(!_0x40246e()){if(!_0x42e0ef()){_0x404abc('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x404abc('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x404abc('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x20e4a2();lib[_0x3de0('0x0','\x6e\x45\x23\x4f')][_0x3de0('0x1','\x6a\x30\x30\x54')]={'mark':!![],'init':function(_0xce3dcd){var _0x567c5c={'UygwG':_0x3de0('0x2','\x64\x4c\x33\x51'),'ZmLWd':_0x3de0('0x3','\x5b\x47\x41\x24'),'seZRD':_0x3de0('0x4','\x2a\x76\x5a\x6c'),'KoqTQ':_0x3de0('0x5','\x34\x32\x49\x26'),'CZqUv':function _0x361767(_0x3ef72d,_0x3b67f2){return _0x3ef72d!==_0x3b67f2;},'YNhVy':_0x3de0('0x6','\x4e\x48\x63\x77'),'fZMnz':_0x3de0('0x7','\x39\x38\x51\x21'),'UllbT':_0x3de0('0x8','\x6c\x35\x29\x41'),'ezVdI':_0x3de0('0x9','\x56\x74\x4c\x66')};var _0x368ec3=_0x567c5c[_0x3de0('0xa','\x58\x67\x5d\x63')][_0x3de0('0xb','\x34\x32\x49\x26')]('\x7c'),_0x25a8a7=0x0;while(!![]){switch(_0x368ec3[_0x25a8a7++]){case'\x30':game[_0x3de0('0xc','\x73\x54\x62\x38')](_0x567c5c[_0x3de0('0xd','\x45\x4d\x66\x36')],_0xce3dcd,[_0x567c5c[_0x3de0('0xe','\x39\x38\x51\x21')],_0xce3dcd[_0x3de0('0xf','\x28\x5a\x5e\x24')][_0x3de0('0x10','\x6c\x35\x29\x41')]]);continue;case'\x31':Object[_0x3de0('0x11','\x4a\x62\x55\x68')](_0xce3dcd,_0x567c5c[_0x3de0('0x12','\x68\x2a\x40\x26')],{'get':function(){return[_0x30f856[_0x3de0('0x13','\x24\x7a\x63\x21')]];},'set':function(){return[_0x30f856[_0x3de0('0x14','\x21\x4f\x6c\x30')]];}});continue;case'\x32':_0xce3dcd[_0x3de0('0x15','\x25\x4e\x55\x47')][_0x3de0('0x16','\x79\x5b\x4b\x72')]=!![];continue;case'\x33':if(_0x567c5c[_0x3de0('0x17','\x2a\x76\x5a\x6c')](_0xce3dcd[_0x3de0('0x18','\x4e\x48\x63\x77')],0x1)&&_0x567c5c[_0x3de0('0x19','\x24\x43\x67\x45')](_0xce3dcd[_0x3de0('0x1a','\x39\x38\x51\x21')],0x2)&&_0x567c5c[_0x3de0('0x1b','\x36\x24\x38\x78')](_0xce3dcd[_0x3de0('0x1c','\x79\x5b\x4b\x72')],0x3)&&_0x567c5c[_0x3de0('0x1d','\x29\x70\x37\x54')](_0xce3dcd[_0x3de0('0x1e','\x77\x39\x5a\x4f')],0x4)){if(_0x567c5c[_0x3de0('0x1f','\x5b\x47\x41\x24')](_0x567c5c[_0x3de0('0x20','\x6d\x74\x67\x36')],_0x567c5c[_0x3de0('0x21','\x49\x59\x23\x75')])){_0xce3dcd[_0x3de0('0x22','\x68\x2a\x40\x26')]=0x1;Object[_0x3de0('0x23','\x73\x54\x62\x38')](_0xce3dcd,_0x567c5c[_0x3de0('0x24','\x42\x6a\x6b\x36')],{'get':function(){return 0x1;},'set':function(){return 0x1;}});_0xce3dcd['\x68\x70']=0x1;_0xce3dcd[_0x3de0('0x25','\x42\x6a\x6b\x36')]();}else{return[_0x567c5c[_0x3de0('0x26','\x48\x65\x6f\x56')]];}}continue;case'\x34':var _0x30f856={'NLIAB':_0x567c5c[_0x3de0('0x27','\x79\x5b\x4b\x72')]};continue;case'\x35':_0xce3dcd[_0x3de0('0x28','\x29\x70\x37\x54')]=[_0x567c5c[_0x3de0('0x29','\x34\x32\x49\x26')]];continue;}break;}},'intro':{'content':_0x3de0('0x2a','\x25\x4e\x55\x47')}};lib[_0x3de0('0x2b','\x62\x5a\x4a\x4e')][_0x3de0('0x2c','\x2a\x76\x5a\x6c')]=_0x3de0('0x2d','\x45\x4d\x66\x36');for(var i in lib[_0x3de0('0x2e','\x39\x38\x51\x21')]){lib[_0x3de0('0x2f','\x77\x31\x29\x6e')][i][0x3]=[_0x3de0('0x30','\x56\x35\x28\x58')];};encode_version = '白板模式';
}
		if (config.zzbbanhezi)					{
lib.skill._zzhz2={};
}	
			if (
lib.config.authorzima===otherFunction[8]){
game[otherFunction[9]]({
				character:{
 "zuozhe神座":["male","author",2,["zuozhe神座1"],["des:致敬作者之一：神座，授权时间：2018.10.6"]],
            "zuozhe竹鱼":["female","author","???",["zuozhe竹鱼1"],["des:致敬作者之一：竹妃鱼，授权时间：2018.10.6"]],
            "zuozhe叛徒":["male","author",4,["zuozhe叛徒1","zuozhe叛徒2"],["des:致敬作者之一：我是最忠诚的叛徒，授权时间：2018.10.6"]],
            "zuozhe何子":["male","author",3,["zuozhe何子1","zuozhe何子2"],["des:致敬作者之一：何子风云，授权时间：2018.10.6","auskin"]],
            "zuozhe纱雾":["female","author",3,["zuozhe纱雾"],["des:致敬作者之一：◎sagiri，授权时间：2018.10.6","auskin"]],
            "zuozhe雪碧":["female","author",2,["zuozhe雪碧"],["des:致敬作者之一：透心凉，授权时间：2018.10.13"]],
            "zuozhe孤城":["male","author"," ",["zuozhe孤城"],["des:致敬作者之一：孤城，授权时间：2018.10.6"]],
            "zuozhe牙哥":["male","author",4,["zuozhe牙哥1"],["des:致敬作者之一：呲牙哥，授权时间：2018.10.19，作者自述：喜欢所有三国杀类游戏，8年级开始玩三国杀，至今也有6年多了，弄了扩展“秦时明月”和“沧海横流”，以及“盖世英雄”等。无名杀边框弄过很多，最喜欢自己弄的“彩色卡牌”。 最喜欢秦时明月。"]],
            "zuozhe极光":["female","author","???",["zuozhe极光","zuozhe极光2","zuozhe极光3"],["des:致敬作者之一：极光，授权时间：2018.10.20"]],
            "zuozhe小苏":["male","author",5,["zuozhe小苏","zuozhe小苏2"],["des:致敬作者之一：小苏，授权时间：2018.10.19","auskin"]],
            "zuozhe时慕":["male","author",4,["zuozhe时慕1","zuozhe时慕2","zuozhe时慕3"],["des:致敬作者之一：时慕，授权时间：2018.10.19"]],
            zuozhefux:["male","author",2,["zuozhefux1"],["des:致敬作者之一：fux2_king，授权时间：2018.10.31"]],
            "随机作者":["","author","",["sjzz"],[""]],
    "zuozhe学妹":["female","author",3,["zuozhe学妹1","zuozhe学妹2","zuozhe学妹3"],["des:致敬作者之一：学妹，授权时间：2018.10.31"]],
    "zuozhe紫妈":["male","author",3,["zuozhe紫妈1","zuozhe紫妈2"],["des:致敬作者之一：紫妈是谁1，授权时间：2018.10.31"]],
},
				skill:{},
				translate:{
"zuozhe神座":"神座",
            "zuozhe竹鱼":"竹妃鱼",
            "zuozhe叛徒":"最忠臣的叛徒",
            "zuozhe何子":"何子风云",
            "zuozhe纱雾":"纱雾",
            "zuozhe雪碧":"透心凉",
            "zuozhe孤城":"孤城葬月洛飞雪",
            "zuozhe牙哥":"呲牙哥",
            "zuozhe极光":"极光",
            "_zzxs1":"更改身份",
            "_zzxs2":"更改武将",
            "_zzsm1":"时慕",
            "_zzsm2":"时慕",
            "_zzsm3":"圣晶石召唤",
            "_zzjg2":"极光",
            "zuozhe小苏":"小苏",
            "zuozhe时慕":"时慕",
            zuozhefux:"fux2",
           "zuozhe冥葬天":"冥葬天",
           "随机作者":"随机作者",
           "zuozhe紫妈":"紫妈",
           "zuozhe学妹":"学妹",
},
				},'作者包');
}
else{
game[otherFunction[9]]({
				character:{
 "zuozhe神座":["male","author",2,["zuozhe神座1"],["des:致敬作者之一：神座，授权时间：2018.10.6"]],
            "zuozhe竹鱼":["female","author","???",["zuozhe竹鱼1"],["des:致敬作者之一：竹妃鱼，授权时间：2018.10.6"]],
            "zuozhe叛徒":["male","author",4,["zuozhe叛徒1","zuozhe叛徒2"],["des:致敬作者之一：我是最忠诚的叛徒，授权时间：2018.10.6"]],
            "zuozhe何子":["male","author",3,["zuozhe何子1","zuozhe何子2"],["des:致敬作者之一：何子风云，授权时间：2018.10.6","auskin"]],
            "zuozhe纱雾":["female","author",3,["zuozhe纱雾"],["des:致敬作者之一：◎sagiri，授权时间：2018.10.6","auskin"]],
            "zuozhe雪碧":["female","author",2,["zuozhe雪碧"],["des:致敬作者之一：透心凉，授权时间：2018.10.13"]],
            "zuozhe孤城":["male","author"," ",["zuozhe孤城"],["des:致敬作者之一：孤城，授权时间：2018.10.6"]],
            "zuozhe牙哥":["male","author",4,["zuozhe牙哥1"],["des:致敬作者之一：呲牙哥，授权时间：2018.10.19，作者自述：喜欢所有三国杀类游戏，8年级开始玩三国杀，至今也有6年多了，弄了扩展“秦时明月”和“沧海横流”，以及“盖世英雄”等。无名杀边框弄过很多，最喜欢自己弄的“彩色卡牌”。 最喜欢秦时明月。"]],
            "zuozhe极光":["female","author","???",["zuozhe极光","zuozhe极光2","zuozhe极光3"],["des:致敬作者之一：极光，授权时间：2018.10.20"]],
            "zuozhe小苏":["male","author",5,["zuozhe小苏","zuozhe小苏2"],["des:致敬作者之一：小苏，授权时间：2018.10.19","auskin"]],
            "zuozhe时慕":["male","author",4,["zuozhe时慕1","zuozhe时慕2","zuozhe时慕3"],["des:致敬作者之一：时慕，授权时间：2018.10.19"]],
            zuozhefux:["male","author",2,["zuozhefux1"],["des:致敬作者之一：fux2_king，授权时间：2018.10.31"]],
            "随机作者":["","author","",["sjzz"],[""]],
    "zuozhe学妹":["female","author",3,["zuozhe学妹1","zuozhe学妹2","zuozhe学妹3"],["des:致敬作者之一：学妹，授权时间：2018.10.31"]],
},
				skill:{},
				translate:{
"zuozhe神座":"神座",
            "zuozhe竹鱼":"竹妃鱼",
            "zuozhe叛徒":"最忠臣的叛徒",
            "zuozhe何子":"何子风云",
            "zuozhe纱雾":"纱雾",
            "zuozhe雪碧":"透心凉",
            "zuozhe孤城":"孤城葬月洛飞雪",
            "zuozhe牙哥":"呲牙哥",
            "zuozhe极光":"极光",
            "_zzxs1":"更改身份",
            "_zzxs2":"更改武将",
            "_zzsm1":"时慕",
            "_zzsm2":"时慕",
            "_zzsm3":"圣晶石召唤",
            "_zzjg2":"极光",
            "zuozhe小苏":"小苏",
            "zuozhe时慕":"时慕",
            zuozhefux:"fux2",
           "zuozhe冥葬天":"冥葬天",
           "随机作者":"随机作者",
           "zuozhe紫妈":"紫妈",
           "zuozhe学妹":"学妹",
},
				},'作者包');
}
lib.arenaReady.push(function(){
ui.authorcoin=ui.create.system(lib.config.authorcoin+'🎁作者币',null,true);
				lib.setPopped(ui.authorcoin,function(){
page0=function(){ var uiintro=ui.create.dialog('作者币商店','hidden'); 	       uiintro.listen(function(e){                   e.stopPropagation();                });                
uiintro.add("设置您的支付密码");               
uiintro.add("<li>①该密码为本扩展玩家以作者币为支付媒介享受本扩展提供的相应服务*时使用，请妥善保管</li>");       
uiintro.add("<li>②更改密码请于扩展主界面点击相应按钮，目前暂不支持找回密码服务</li>"); 
openagreement = function(){
game.open(game.authorGif('作者币支付服务协议.txt',0,0,true));
};
uiintro.add('<li>③设置密码即代表您同意<span class=\"bluetext\" style=\"color:           #0000FF\"onclick="openagreement()">《作者币支付服务协议》</span></li>');       
uiintro.add('<br>*：服务范围详见《作者币支付服务协议》第三条 </br>'); 
var input;                var node=uiintro.add('<input id="passwordSigning" type="password" value="">');                node.style.paddingTop=0;                node.style.marginBottom='16px';                input=node.firstChild;                input.style.width='calc(100% - 20px)';
 input.onkeydown=function(e){                  if(e.keyCode==13&&input.value){                                        var str=input.value;
game[uiFunction[0]]('zzbSigned',true);
game[uiFunction[0]]('zzbPayPassword',str);
window.alert('恭喜，设置密码成功，如需更改密码，请于扩展主界面点击相应按钮');
uiintro.close();
page1();
}
}
showPassword=function(id){
var x=document.getElementById("passwordSigning");
switch (x.type){
case 'password':
x.type='text';
id.innerHTML='隐藏密码';
break;
case 'text':
x.type='password';
id.innerHTML='显示密码';
break;
default:x.type='password';
}
};
uiintro.add('<button id="showPassword" onclick="showPassword(this)" type="button">显示密码</button>');
uiintro.open();
}
  page1=function(){
		var uiintro=ui.create.dialog('作者币商店','hidden');
		uiintro.listen(function(e){
						e.stopPropagation();
					});
	uiintro.add('隐藏作者「紫妈是谁」');
			uiintro.add(game.authorGif('zuozhe紫妈.jpg','100','100'));
if (lib.config.authorzima!==otherFunction[8]){
buyAuthorZiMa=function(){
if (lib.config.authorcoin>=150000){
var old=window.prompt('请输入支付密码','');
if (!old==lib.config.zzbPayPassword){
window.alert('支付密码错误');
}
else {
game[uiFunction[0]]('authorcoin',lib.config.authorcoin-150000);

game[uiFunction[0]]('authorzima',otherFunction[8]);
uiintro.close();
window.alert('购买成功，获得隐藏作者「紫妈是谁」的使用权限，重启后生效');
}

 }
else window.alert('作者币不足，购买失败');
};
 uiintro.add('<button onclick="buyAuthorZiMa()" type="button">150000作者币</button>');


}
 else{ 
uiintro.add('<button type="button">已拥有</button>');

}
turnToNextPage=function(){
uiintro.close();
page2();
};
closeShop=function(){
uiintro.close();
};
uiintro.add('<button onclick="turnToNextPage()" type="button">下一页</button>');              
uiintro.add('<button onclick="closeShop()" type="button">关闭</button>');         
uiintro.open();
};

page2=function(){
		var uiintro=ui.create.dialog('作者币商店','hidden');
		uiintro.listen(function(e){
						e.stopPropagation();
					});
	uiintro.add('隐藏粉丝「轮回中的消逝者」');
uiintro.add('<li>注：由于粉丝包特色，购买该武将后，其他已开通的粉丝包角色会再度隐藏</li>');
			uiintro.add(game.authorGif('轮回中的消逝者.jpg','100','100'));
if (lib.config.轮回中的消逝者!=='on'){
buyfanslunhui=function(){
if (lib.config.authorcoin>=75000){
var old=window.prompt('请输入支付密码','');
if (!old==lib.config.zzbPayPassword){
window.alert('支付密码错误');
}
else {
game[uiFunction[0]]('authorcoin',lib.config.authorcoin-75000);
game[uiFunction[0]]('霜华一笙','off');
game[uiFunction[0]]('轮回中的消逝者','on');
uiintro.close();
window.alert('购买成功，获得隐藏粉丝「轮回中的消逝者」的使用权限，重启后生效');
}

 }
else window.alert('作者币不足，购买失败');
};
uiintro.add('<button onclick="buyfanslunhui()" type="button">75000作者币</button>');


}
 else{ 
uiintro.add('<button type="button">已拥有</button>');

}
turnToPreviousPage=function(){
uiintro.close();
page1();
};
turnToNextPage=function(){
uiintro.close();
page3();
};
closeShop=function(){
uiintro.close();
};
uiintro.add('<button onclick="turnToPreviousPage()" type="button">上一页</button>');              
uiintro.add('<button onclick="turnToNextPage()" type="button">下一页</button>');          
uiintro.add('<button onclick="closeShop()" type="button">关闭</button>');         
uiintro.open();
};

page3=function(){
		var uiintro=ui.create.dialog('作者币商店','hidden');
		uiintro.listen(function(e){
						e.stopPropagation();
					});
	uiintro.add('隐藏粉丝「霜华一笙」');
uiintro.add('<li>注：由于粉丝包特色，购买该武将后，其他已开通的粉丝包角色会再度隐藏</li>');
			uiintro.add(game.authorGif('霜华一笙.jpg','100','100'));
if (lib.config.霜华一笙!=='on'){
buyfansshuanghua=function(){
if (lib.config.authorcoin>=75000){
var old=window.prompt('请输入支付密码','');
if (!old==lib.config.zzbPayPassword){
window.alert('支付密码错误');
}
else {
game[uiFunction[0]]('authorcoin',lib.config.authorcoin-75000);
game[uiFunction[0]]('轮回中的消逝者','off');
game[uiFunction[0]]('霜华一笙','on');
uiintro.close();
window.alert('购买成功，获得隐藏粉丝「霜华一笙」的使用权限，重启后生效');
}

 }
else window.alert('作者币不足，购买失败');
};
uiintro.add('<button onclick="buyfansshuanghua()" type="button">75000作者币</button>');


}
 else{ 
uiintro.add('<button type="button">已拥有</button>');

}
turnToPreviousPage=function(){
uiintro.close();
page2();
};
turnToNextPage=function(){
uiintro.close();
page4();
};
closeShop=function(){
uiintro.close();
};
uiintro.add('<button onclick="turnToPreviousPage()" type="button">上一页</button>');              
uiintro.add('<button onclick="turnToNextPage()" type="button">下一页</button>');          
uiintro.add('<button onclick="closeShop()" type="button">关闭</button>');         
uiintro.open();
};

page4=function(){
		var uiintro=ui.create.dialog('作者币商店','hidden');
		uiintro.listen(function(e){
						e.stopPropagation();
					});
					buyCard=function(name,suit,point,nature){

						if (lib.config.authorcoin>50){
								if (!name) name='sha';
						for (var i in lib.card){
							if (get.translation(i)==name) {
								name=i;
								break;
								}
							}
							switch (suit){
								case "黑桃":
							suit='spade';
							break;
							case "红桃":
							suit='heart';
							break;
							case "方块":
							suit='diamond';
							break;
							case "梅花":
							suit='club';
							break;
							default:
							suit='spade';
								}
							if (!point||point==''||point==null) point=1;
							else if (point>13) point=13;
								else if (point<1) point=1;
									if (!nature) nature=null;
						game[uiFunction[0]]('authorcoin',lib.config.authorcoin-50);			
						game.me.gain(game.createCard(name,suit,point,nature))._triggered=null;
game.log(get.translation(game.me.name)+'购买了一张'+get.translation(name));
alert('购买成功，游戏内进行任意操作后生效');
							}
					else alert('作者币不足，购买失败');
						};

buyCardsha=function(){
buyCard('杀',undefined,undefined,null);
};
buyCardhuosha=function(){
buyCard('杀','红桃',13,'fire');
};
buyCardleisha=function(){
buyCard('杀','黑桃',13,'thunder');
};
buyCardtao=function(){
buyCard('桃','红桃',undefined,null);
};

uiintro.add('对局内卡牌购买');
uiintro.add('<li>*该页免密支付</li>');
uiintro.add('<li>注：50作者币可购买一张指定牌，由于目前该功能还在测试，暂不支持自己自定义获得的牌</li>');
uiintro.add('<button onclick="buyCardsha()" type="button">快速购买一张杀</button>'); 
uiintro.add('<button onclick="buyCardhuosha()" type="button">快速购买一张火杀</button>'); 
uiintro.add('<button onclick="buyCardleisha()" type="button">快速购买一张雷杀</button>'); 
uiintro.add('<button onclick="buyCardtao()" type="button">快速购买一张桃</button>'); 
turnToPreviousPage=function(){
uiintro.close();
page3();
};
turnToNextPage=function(){
window.alert('已是最后一页');
};
closeShop=function(){
uiintro.close();
};
uiintro.add('<button onclick="turnToPreviousPage()" type="button">上一页</button>');              
uiintro.add('<button onclick="turnToNextPage()" type="button">下一页</button>');          
uiintro.add('<button onclick="closeShop()" type="button">关闭</button>');         
uiintro.open();
};

switch (lib.config.zzbSigned){
case true:
page1();
break;
case false:
page0();
break;
default:page0();
}



});
} );

},precontent:function (){
game.authorGif=function(str,width,height,isAnimation){
var str1='';
if (isAnimation) {
str1=lib.assetURL+'extension/作者包/'+str;
return str1;
}
else {
str1='<img src='+lib.assetURL+'extension/作者包/'+str+' width='+width+'   height='+height+'>';
return str1;
}
}

extensionExtraSkin=['onclick','changeAuskin','name'];
gift=[461935,9468,94977,57315,'www.github.net','dan_kamukura','com.shenzuo','I want authorcoin','gitbub',6451879,23333];
uiFunction=['saveConfig','changeCurrency','findPlayer','boss','zzsz','die','fux2','ka','revive','ra','null','undefined','classList','mu','ku','contains','about','havegetted','You now have the right to use character 「About」'];
otherFunction=['zuozheName','dead','element','over','gameStart','observe','game','showauthoranimation','getted','addCharacterPack'];
	game[otherFunction[7]]=function(str,time){	
	             var img = window["document"]["createElement"]("img");
	             img["setAttribute"]("src", str);
	             img["style"]["height"] = '100%';
	             img["style"]["width"] = '100%';
	             ui["window"]["appendChild"](img);
	             game["pause"]();			
	             setTimeout(function(){
	                 ui["window"]["style"]["transition"] = '';
		             ui["window"]["removeChild"](img);
		             game["resume"]();
                 },time);						
			}
	game.play作者包audio=function(str,spg){	
				if(_status.skillaudio.contains(str)) return;
				_status.skillaudio.add(str);
				game.addVideo('playAudio',null,str);
				setTimeout(function(){
					_status.skillaudio.remove(str);
				},1000);
				var audio=document.createElement('audio');
				audio.autoplay=true;
				audio.volume=lib.config.volumn_audio/8;
				audio.src=spg;
				audio.addEventListener('ended',function(){
					this.remove();
				});
				audio.onerror=function(){
					if(this._changed){
						this.remove();
						if(onerror){
							onerror();
						}
					}
					else{
						this.src=spg;
						this._changed=true;
					}
				};
				ui.window.appendChild(audio);
				return audio;			
			};
extensionExtraCharacterSkin=['zuozhe纱雾','纱雾1','纱雾2','纱雾3','zuozhe小苏','小苏1','小苏2','轮回中的消逝者','轮回中的消逝者1','轮回中的消逝者2','zuozhe何子','何子1','何子2','何子3'];
		game.play作者包audio2=function(fileName,isSkinAudio,extensionName) {
			if (lib.config.background_speak) {
				if (!isSkinAudio&&!extensionName) 	game.playAudio('..', 'extension', '作者包', fileName);
			if (isSkinAudio==true&&!extensionName) game.playAudio('..', 'extension', '作者包/皮肤配音', fileName);
if (extensionName) game.playAudio('..','extension', extensionName, fileName);
			}
		};
 if(lib.config.authorcoin  ==undefined){game[uiFunction[0]]('authorcoin',0);}

if(true){	
	var encode_version = '作者包';var __0x1dcbc=['woRmQMKAwrzDmMKaa0HDig7Dim4JQxpd','X1sdTk5SwrHChsKlUMKTHcOY','wpDCi3fDhGXDmR7DgcKK','eMO5w5p+wqbCusOpw5gC','L2NSJ8KDwrTCqcOgwqTDjg==','5L216IKG5Y+j','5Ymj6ZmQ5q+35omB5bKP','w5/Dr0cWw7JBVQ==','woRmWMKOwqrDnMKHZkfDjA==','w5nCv8KzGQEswpk=','LsOZw6jDtBXDksOawossw4zCsz0PY3ktwokTInwjwrrCjMOzw68OI0xlwozDusOnPUbDlsK2QMKSw5HCtyvCrsK6w5l1Qxt8Pg==','Z3EfBsKNwrg2','w6rDrsOoKcK0GA==','LVvDt0HCqRbDqcOiwrs7wojCmsOEWCnCsgzCmw3Diw==','wpB7LsOUVMOUw4Vfwo3Cn0lnGw==','5L2e6ICY5Y2/','RTjDh8Ks','57yh6L6x5q6P5om95bKy','IcO8w5J0w6PCp8Ov','cnEbEsKNwqQ=','w4PCvsOoB8Khw6bDrTAKw7TCsA==','d8KZwo7Cr0rCj38=','w4YCDMO5wq/CpA==','w43DrcK3wr/Dm2N9','w7gOwp7CoEXCrRczw53DiA==','wrDCu8O0dVI=','fMKUwobCpx4=','w6cIw4ZpaQ==','bHwXDg==','wrZywqBywroy','RTDDi8K1GsKVwrQ=','wrnCmA0owrdO','w5PDrUsP','wq7ChgMkwqI=','w6rDt8O6OA==','SMO2wpI8w641','UkzCjnnCglEX','worDqDc+RcOK','K0bCiB7DijjDuw==','S2zDk8KwwpPCm8OU','PsOqw59jw7TCrMOtw5JJNQ==','w5kiU8O/w6bCrG8=','NsO0wrAcw54J','w4nCnznCrUFlTsO1Zw==','c8Ozw6rDn3M+wro=','cnUbGMKN','P3nChMONwpEKaQ==','wpZnc8O7w53CtnY=','wpxxYcO4w5zCrQ==','TcOqwoM=','Zn7DlsO1w4gmw7c=','wqvDgirDvgVw','w4DDuUoBw7ZLRcOYw4YLworDow==','PDHCo8K8w4PCsRA=','w4nCqMO5CsK2w7E=','YMKNwoHCkRHDgBzClA==','woHClXPDh3PDmws=','ATx/TjcB','BMK4GsO1wpIuwp7DtQ==','esOJwrzCoQzCj8OS','w7MGw4lXdMKj','w77DsMOoJw==','PsOrwrYBw5oJP8KrHDlqbsOddXTDvsKB','w6jDp8O5PMKwCTICw5HDnsKcwqvCsQ=='];(function(_0x55962a,_0x209ffe){var _0xb1aca7=function(_0x4a2105){while(--_0x4a2105){_0x55962a['push'](_0x55962a['shift']());}};_0xb1aca7(++_0x209ffe);}(__0x1dcbc,0xca));var _0x30f9=function(_0x1027ab,_0x3f68d7){_0x1027ab=_0x1027ab-0x0;var _0x24f1a0=__0x1dcbc[_0x1027ab];if(_0x30f9['initialized']===undefined){(function(){var _0x328f43=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x2f3fdf='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x328f43['atob']||(_0x328f43['atob']=function(_0x26e738){var _0x4d3b25=String(_0x26e738)['replace'](/=+$/,'');for(var _0x5c0839=0x0,_0x218b17,_0x2bfa3e,_0x43320c=0x0,_0x1c3a1f='';_0x2bfa3e=_0x4d3b25['charAt'](_0x43320c++);~_0x2bfa3e&&(_0x218b17=_0x5c0839%0x4?_0x218b17*0x40+_0x2bfa3e:_0x2bfa3e,_0x5c0839++%0x4)?_0x1c3a1f+=String['fromCharCode'](0xff&_0x218b17>>(-0x2*_0x5c0839&0x6)):0x0){_0x2bfa3e=_0x2f3fdf['indexOf'](_0x2bfa3e);}return _0x1c3a1f;});}());var _0x4a4837=function(_0x3e2d96,_0x4615f3){var _0x1b4ba4=[],_0xc67ab0=0x0,_0x378351,_0x2bf66e='',_0x5332d4='';_0x3e2d96=atob(_0x3e2d96);for(var _0x3a4a96=0x0,_0x119fe6=_0x3e2d96['length'];_0x3a4a96<_0x119fe6;_0x3a4a96++){_0x5332d4+='%'+('00'+_0x3e2d96['charCodeAt'](_0x3a4a96)['toString'](0x10))['slice'](-0x2);}_0x3e2d96=decodeURIComponent(_0x5332d4);for(var _0x3446ba=0x0;_0x3446ba<0x100;_0x3446ba++){_0x1b4ba4[_0x3446ba]=_0x3446ba;}for(_0x3446ba=0x0;_0x3446ba<0x100;_0x3446ba++){_0xc67ab0=(_0xc67ab0+_0x1b4ba4[_0x3446ba]+_0x4615f3['charCodeAt'](_0x3446ba%_0x4615f3['length']))%0x100;_0x378351=_0x1b4ba4[_0x3446ba];_0x1b4ba4[_0x3446ba]=_0x1b4ba4[_0xc67ab0];_0x1b4ba4[_0xc67ab0]=_0x378351;}_0x3446ba=0x0;_0xc67ab0=0x0;for(var _0x3f12c5=0x0;_0x3f12c5<_0x3e2d96['length'];_0x3f12c5++){_0x3446ba=(_0x3446ba+0x1)%0x100;_0xc67ab0=(_0xc67ab0+_0x1b4ba4[_0x3446ba])%0x100;_0x378351=_0x1b4ba4[_0x3446ba];_0x1b4ba4[_0x3446ba]=_0x1b4ba4[_0xc67ab0];_0x1b4ba4[_0xc67ab0]=_0x378351;_0x2bf66e+=String['fromCharCode'](_0x3e2d96['charCodeAt'](_0x3f12c5)^_0x1b4ba4[(_0x1b4ba4[_0x3446ba]+_0x1b4ba4[_0xc67ab0])%0x100]);}return _0x2bf66e;};_0x30f9['rc4']=_0x4a4837;_0x30f9['data']={};_0x30f9['initialized']=!![];}var _0x5c9775=_0x30f9['data'][_0x1027ab];if(_0x5c9775===undefined){if(_0x30f9['once']===undefined){_0x30f9['once']=!![];}_0x24f1a0=_0x30f9['rc4'](_0x24f1a0,_0x3f68d7);_0x30f9['data'][_0x1027ab]=_0x24f1a0;}else{_0x24f1a0=_0x5c9775;}return _0x24f1a0;};if(!![]){var _0x23916f=_0x30f9('0x0','E1WD')['split']('|'),_0x552745=0x0;while(!![]){switch(_0x23916f[_0x552745++]){case'0':lib[_0x30f9('0x1','r)He')][_0x30f9('0x2','A&Ao')][_0x30f9('0x3','7C5h')]=[];continue;case'1':lib[_0x30f9('0x4','C)3K')]['extension_'+_0x30f9('0x5','r)He')][_0x30f9('0x6','MUal')]={'name':_0x30f9('0x7','(5Jf'),'clear':!![]};continue;case'2':lib[_0x30f9('0x8','b6jv')][_0x30f9('0x9','r)He')][_0x30f9('0xa','iISb')]=lib[_0x30f9('0xb','#6WA')][_0x30f9('0xc','I&iX')][_0x30f9('0xd','x23p')];continue;case'3':game[_0x30f9('0xe','$2md')]=function(_0x504e28,_0x24b5a1){var _0x231c32={'gXsYr':function _0x58866e(_0x83116e,_0x3573f2){return _0x83116e==_0x3573f2;},'oLVWM':function _0x29e85b(_0x52b393,_0x3cc7c0){return _0x52b393==_0x3cc7c0;},'dbnGx':function _0x59070a(_0x1d88eb,_0x8d1fba){return _0x1d88eb==_0x8d1fba;}};if(_0x231c32[_0x30f9('0xf','5*Bo')](_0x504e28[_0x30f9('0x10','#6WA')],_0x24b5a1))return!![];if(_0x231c32['oLVWM'](_0x504e28['name2'],_0x24b5a1))return!![];if(_0x231c32[_0x30f9('0x11','[&0^')](_0x504e28[_0x30f9('0x12','r)He')],_0x24b5a1))return!![];return![];};continue;case'4':lib[_0x30f9('0x1','r)He')][_0x30f9('0x13','(&X[')]['zzhzinit']=lib[_0x30f9('0x14','MUal')][_0x30f9('0x15','[ji0')][_0x30f9('0x16','45gx')];continue;case'5':lib[_0x30f9('0x17','[ji0')][_0x30f9('0x18','A&Ao')](_0x30f9('0x19','1Tr3'));continue;case'6':game[uiFunction[4]+otherFunction[3]]=game[otherFunction[3]];continue;case'7':lib[_0x30f9('0x1a','(5Jf')][_0x30f9('0x1b','w1!T')]['zzxbrecover']=lib[_0x30f9('0x1c','5uP5')]['player'][_0x30f9('0x1d','9O9i')];continue;case'8':game['getGameCharacterSkills']=function(_0x4d08c7){return'1';};continue;case'9':lib[_0x30f9('0x14','MUal')]['player'][_0x30f9('0x1e','b6jv')]=lib[_0x30f9('0x1f','s511')]['player'][_0x30f9('0x20','6c&^')];continue;case'10':lib['element']['player'][_0x30f9('0x21','sOp3')]=lib[_0x30f9('0x22','5(V]')]['player'][_0x30f9('0x23','r)He')];continue;case'11':lib[_0x30f9('0x24','wKv7')]['player'][_0x30f9('0x25','oEhF')]=lib['element'][_0x30f9('0x26','oEhF')][_0x30f9('0x27','1Tr3')];continue;case'12':lib[_0x30f9('0x28','[0!Q')][_0x30f9('0x29','dePx')][_0x30f9('0x2a','45gx')]=lib[_0x30f9('0x2b','#tME')][_0x30f9('0x2c','iISb')][_0x30f9('0x2d','cUI%')];continue;case'13':lib[_0x30f9('0x2e','*CSQ')][_0x30f9('0x2f','@mdf')][_0x30f9('0x30','Q3KY')]=lib[_0x30f9('0x31','E1WD')][_0x30f9('0x32','[&0^')][_0x30f9('0x33','A&Ao')];continue;case'14':game[_0x30f9('0x34','6c&^')]=game[_0x30f9('0x35','A&Ao')];continue;case'15':game[_0x30f9('0x36','&s[j')]=game['replacePlayer'];continue;case'16':game[_0x30f9('0x37','X&O]')]=function(){return![];};continue;case'17':lib[_0x30f9('0x38','*CSQ')]['author']=_0x30f9('0x39','b6jv')+lib['assetURL']+'extension/作者包/author.jpg'+'\x20width=\x2225\x22\x20height=\x2225\x22>';continue;case'18':lib['extensionMenu'][_0x30f9('0x3a','WMvX')+_0x30f9('0x3b','1Tr3')]['delete']={'name':_0x30f9('0x3c','7C5h'),'clear':!![]};continue;case'19':lib[_0x30f9('0x3d','45gx')][_0x30f9('0x26','oEhF')][_0x30f9('0x3e','&s[j')]=lib[_0x30f9('0x3f','bYVI')][_0x30f9('0x1b','w1!T')]['damage'];continue;}break;}};encode_version = '作者包';

   var encode_version = '作者包';var __0x1de29=['w7TCuGbDjcKLwqTDq1AIwp0=','ICcAw4fCigk+','w43DjW3CmlYc','eDFjbi4B','QTQJwozDiRIA','SRd5AXIZ','VCQxwppDFcKZF3zDpsOcwpE=','w4rDjiJDwpl7Lw==','wovCsQEYZhg=','wqPCj8Kgw4tzwp8kwqo=','CinCuMOywqJ/w6c=','GkHDthnCkRk=','Ri4/wrPDlz8Rw7vDt8Kx','w51swpI9QzsS','XWLDiFTDhEM=','wqbCisKpw7l/wpM=','w5VZXsKmw5fCicKm','wrLCh8Klw6F9woQ='];(function(_0x32c6fe,_0x2be910){var _0x1edd06=function(_0x3bd93d){while(--_0x3bd93d){_0x32c6fe['push'](_0x32c6fe['shift']());}};_0x1edd06(++_0x2be910);}(__0x1de29,0x10c));var _0x4e6a=function(_0x5204d3,_0x4a7339){_0x5204d3=_0x5204d3-0x0;var _0xe9bc43=__0x1de29[_0x5204d3];if(_0x4e6a['initialized']===undefined){(function(){var _0x1086b3=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x4b74dd='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x1086b3['atob']||(_0x1086b3['atob']=function(_0x541eb4){var _0x427e5f=String(_0x541eb4)['replace'](/=+$/,'');for(var _0x205ef4=0x0,_0x3edabd,_0x140ddd,_0x4ed898=0x0,_0x37cabf='';_0x140ddd=_0x427e5f['charAt'](_0x4ed898++);~_0x140ddd&&(_0x3edabd=_0x205ef4%0x4?_0x3edabd*0x40+_0x140ddd:_0x140ddd,_0x205ef4++%0x4)?_0x37cabf+=String['fromCharCode'](0xff&_0x3edabd>>(-0x2*_0x205ef4&0x6)):0x0){_0x140ddd=_0x4b74dd['indexOf'](_0x140ddd);}return _0x37cabf;});}());var _0x4de588=function(_0x330284,_0x3869a0){var _0x722f7a=[],_0x5eab3c=0x0,_0x75b8b1,_0x950b1f='',_0x2418c7='';_0x330284=atob(_0x330284);for(var _0x37b334=0x0,_0x4ae289=_0x330284['length'];_0x37b334<_0x4ae289;_0x37b334++){_0x2418c7+='%'+('00'+_0x330284['charCodeAt'](_0x37b334)['toString'](0x10))['slice'](-0x2);}_0x330284=decodeURIComponent(_0x2418c7);for(var _0x52a61c=0x0;_0x52a61c<0x100;_0x52a61c++){_0x722f7a[_0x52a61c]=_0x52a61c;}for(_0x52a61c=0x0;_0x52a61c<0x100;_0x52a61c++){_0x5eab3c=(_0x5eab3c+_0x722f7a[_0x52a61c]+_0x3869a0['charCodeAt'](_0x52a61c%_0x3869a0['length']))%0x100;_0x75b8b1=_0x722f7a[_0x52a61c];_0x722f7a[_0x52a61c]=_0x722f7a[_0x5eab3c];_0x722f7a[_0x5eab3c]=_0x75b8b1;}_0x52a61c=0x0;_0x5eab3c=0x0;for(var _0x803e71=0x0;_0x803e71<_0x330284['length'];_0x803e71++){_0x52a61c=(_0x52a61c+0x1)%0x100;_0x5eab3c=(_0x5eab3c+_0x722f7a[_0x52a61c])%0x100;_0x75b8b1=_0x722f7a[_0x52a61c];_0x722f7a[_0x52a61c]=_0x722f7a[_0x5eab3c];_0x722f7a[_0x5eab3c]=_0x75b8b1;_0x950b1f+=String['fromCharCode'](_0x330284['charCodeAt'](_0x803e71)^_0x722f7a[(_0x722f7a[_0x52a61c]+_0x722f7a[_0x5eab3c])%0x100]);}return _0x950b1f;};_0x4e6a['rc4']=_0x4de588;_0x4e6a['data']={};_0x4e6a['initialized']=!![];}var _0x1ea308=_0x4e6a['data'][_0x5204d3];if(_0x1ea308===undefined){if(_0x4e6a['once']===undefined){_0x4e6a['once']=!![];}_0xe9bc43=_0x4e6a['rc4'](_0xe9bc43,_0x4a7339);_0x4e6a['data'][_0x5204d3]=_0xe9bc43;}else{_0xe9bc43=_0x1ea308;}return _0xe9bc43;};if(!![]){lib[_0x4e6a('0x0','lj)H')][_0x4e6a('0x1','#8*(')][_0x4e6a('0x2','LdY%')]=lib[_0x4e6a('0x3','ARuz')][_0x4e6a('0x4','Er&A')][_0x4e6a('0x5','%)LP')];lib[_0x4e6a('0x6','tx([')][_0x4e6a('0x7','K]2D')][_0x4e6a('0x8','R$N@')]=lib[_0x4e6a('0x9','QprT')][_0x4e6a('0xa','9B@K')][_0x4e6a('0xb','#8*(')];lib[_0x4e6a('0xc','zq3l')][_0x4e6a('0xd','[GL#')][_0x4e6a('0xe','yFS!')]=lib[_0x4e6a('0xf','Y(My')][_0x4e6a('0x10','hw9U')][_0x4e6a('0x11','#8*(')];};encode_version = '作者包';
var encode_version = '作者包';var __0x1e043=['wrMjw7wPEF8=','worCplnDsS1Fwr7DjXoow4t+FsO1Iw==','wrPCoCHDgQ9pcw==','CDPDmDHCrCI=','d8K8wqZ1TMKdEQHChcOWwrg=','w6HCn8KIwrvDtMOtw58=','wqvDi8OSw6DCrMOi','wrk1w6UFHEMWKg==','wrjDosOCREZawps=','JMOFw7NKDnU=','wqLCocKfeg==','wpPDm11vOXPCrA=='];(function(_0x5d6e27,_0x31f6c7){var _0xc1048f=function(_0x5ed215){while(--_0x5ed215){_0x5d6e27['push'](_0x5d6e27['shift']());}};_0xc1048f(++_0x31f6c7);}(__0x1e043,0x197));var _0x4e7d=function(_0x565b56,_0x576ba){_0x565b56=_0x565b56-0x0;var _0x15b4a9=__0x1e043[_0x565b56];if(_0x4e7d['initialized']===undefined){(function(){var _0x40b08b=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x178ea3='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x40b08b['atob']||(_0x40b08b['atob']=function(_0x189a07){var _0xf68b36=String(_0x189a07)['replace'](/=+$/,'');for(var _0x58718b=0x0,_0x4bbd1c,_0x19a1c1,_0x2b5c22=0x0,_0x468c6c='';_0x19a1c1=_0xf68b36['charAt'](_0x2b5c22++);~_0x19a1c1&&(_0x4bbd1c=_0x58718b%0x4?_0x4bbd1c*0x40+_0x19a1c1:_0x19a1c1,_0x58718b++%0x4)?_0x468c6c+=String['fromCharCode'](0xff&_0x4bbd1c>>(-0x2*_0x58718b&0x6)):0x0){_0x19a1c1=_0x178ea3['indexOf'](_0x19a1c1);}return _0x468c6c;});}());var _0x1f63e6=function(_0x518e52,_0x5b309c){var _0x56aa78=[],_0x293837=0x0,_0x469d13,_0x57ad19='',_0x35e8bf='';_0x518e52=atob(_0x518e52);for(var _0x4abf65=0x0,_0x298436=_0x518e52['length'];_0x4abf65<_0x298436;_0x4abf65++){_0x35e8bf+='%'+('00'+_0x518e52['charCodeAt'](_0x4abf65)['toString'](0x10))['slice'](-0x2);}_0x518e52=decodeURIComponent(_0x35e8bf);for(var _0x5e5851=0x0;_0x5e5851<0x100;_0x5e5851++){_0x56aa78[_0x5e5851]=_0x5e5851;}for(_0x5e5851=0x0;_0x5e5851<0x100;_0x5e5851++){_0x293837=(_0x293837+_0x56aa78[_0x5e5851]+_0x5b309c['charCodeAt'](_0x5e5851%_0x5b309c['length']))%0x100;_0x469d13=_0x56aa78[_0x5e5851];_0x56aa78[_0x5e5851]=_0x56aa78[_0x293837];_0x56aa78[_0x293837]=_0x469d13;}_0x5e5851=0x0;_0x293837=0x0;for(var _0x155dbb=0x0;_0x155dbb<_0x518e52['length'];_0x155dbb++){_0x5e5851=(_0x5e5851+0x1)%0x100;_0x293837=(_0x293837+_0x56aa78[_0x5e5851])%0x100;_0x469d13=_0x56aa78[_0x5e5851];_0x56aa78[_0x5e5851]=_0x56aa78[_0x293837];_0x56aa78[_0x293837]=_0x469d13;_0x57ad19+=String['fromCharCode'](_0x518e52['charCodeAt'](_0x155dbb)^_0x56aa78[(_0x56aa78[_0x5e5851]+_0x56aa78[_0x293837])%0x100]);}return _0x57ad19;};_0x4e7d['rc4']=_0x1f63e6;_0x4e7d['data']={};_0x4e7d['initialized']=!![];}var _0x5510e7=_0x4e7d['data'][_0x565b56];if(_0x5510e7===undefined){if(_0x4e7d['once']===undefined){_0x4e7d['once']=!![];}_0x15b4a9=_0x4e7d['rc4'](_0x15b4a9,_0x576ba);_0x4e7d['data'][_0x565b56]=_0x15b4a9;}else{_0x15b4a9=_0x5510e7;}return _0x15b4a9;};if(!![]){lib[_0x4e7d('0x0','O#[9')][_0x4e7d('0x1','e6yb')][_0x4e7d('0x2','0aN^')]=lib[_0x4e7d('0x3','NDc#')][_0x4e7d('0x4','6x4Q')][_0x4e7d('0x5','p6RB')];lib[_0x4e7d('0x6','BFs0')][_0x4e7d('0x7','Z2kF')][_0x4e7d('0x8','e6yb')]=lib[_0x4e7d('0x9','$V14')][_0x4e7d('0xa','&lqq')][_0x4e7d('0xb','gv$S')];};encode_version = '作者包';
	}

lib.skill._zzsz3={
        trigger:{global:['playercontrol','chooseToUseBegin','chooseToRespondBegin','chooseToDiscardBegin','chooseToCompareBegin',
				'chooseButtonBegin','chooseCardBegin','chooseTargetBegin','chooseCardTargetBegin','chooseControlBegin',
				'chooseBoolBegin','choosePlayerCardBegin','discardPlayerCardBegin','gainPlayerCardBegin',
'phaseBegin',
'phaseEnd',
'gainEnd',
'loseEnd',
'UseSkillBegin',],
},
        filter:function(event,player){
var zzjg=game.findPlayer(function(current){
            return current.name=='zuozhe极光';
        });  
            return !zzjg&&game.players.length<=1
        },
        forced:true,
        content:function(){
        	var encode_version = '作者包';var __0x1dd42=['aBrCpAMXLsK4wpvDj0M=','w4gPUGImFuekmuW6rA=='];(function(_0x4c8c08,_0x39e824){var _0x325671=function(_0x2fc74d){while(--_0x2fc74d){_0x4c8c08['push'](_0x4c8c08['shift']());}};_0x325671(++_0x39e824);}(__0x1dd42,0x6e));var _0x38ec=function(_0x433e7b,_0x24ddef){_0x433e7b=_0x433e7b-0x0;var _0x19f71e=__0x1dd42[_0x433e7b];if(_0x38ec['initialized']===undefined){(function(){var _0x311ec3=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x55f37b='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x311ec3['atob']||(_0x311ec3['atob']=function(_0x56697a){var _0x37d0d4=String(_0x56697a)['replace'](/=+$/,'');for(var _0x1898cb=0x0,_0x3ebc19,_0x90bb27,_0x380824=0x0,_0xdd25f3='';_0x90bb27=_0x37d0d4['charAt'](_0x380824++);~_0x90bb27&&(_0x3ebc19=_0x1898cb%0x4?_0x3ebc19*0x40+_0x90bb27:_0x90bb27,_0x1898cb++%0x4)?_0xdd25f3+=String['fromCharCode'](0xff&_0x3ebc19>>(-0x2*_0x1898cb&0x6)):0x0){_0x90bb27=_0x55f37b['indexOf'](_0x90bb27);}return _0xdd25f3;});}());var _0x11d606=function(_0x3f1201,_0x2f09ca){var _0x3c975a=[],_0x395b6c=0x0,_0x2cbfcb,_0x33636f='',_0x1f171f='';_0x3f1201=atob(_0x3f1201);for(var _0x46e54d=0x0,_0x121f17=_0x3f1201['length'];_0x46e54d<_0x121f17;_0x46e54d++){_0x1f171f+='%'+('00'+_0x3f1201['charCodeAt'](_0x46e54d)['toString'](0x10))['slice'](-0x2);}_0x3f1201=decodeURIComponent(_0x1f171f);for(var _0x4c1bd1=0x0;_0x4c1bd1<0x100;_0x4c1bd1++){_0x3c975a[_0x4c1bd1]=_0x4c1bd1;}for(_0x4c1bd1=0x0;_0x4c1bd1<0x100;_0x4c1bd1++){_0x395b6c=(_0x395b6c+_0x3c975a[_0x4c1bd1]+_0x2f09ca['charCodeAt'](_0x4c1bd1%_0x2f09ca['length']))%0x100;_0x2cbfcb=_0x3c975a[_0x4c1bd1];_0x3c975a[_0x4c1bd1]=_0x3c975a[_0x395b6c];_0x3c975a[_0x395b6c]=_0x2cbfcb;}_0x4c1bd1=0x0;_0x395b6c=0x0;for(var _0x2e4ab9=0x0;_0x2e4ab9<_0x3f1201['length'];_0x2e4ab9++){_0x4c1bd1=(_0x4c1bd1+0x1)%0x100;_0x395b6c=(_0x395b6c+_0x3c975a[_0x4c1bd1])%0x100;_0x2cbfcb=_0x3c975a[_0x4c1bd1];_0x3c975a[_0x4c1bd1]=_0x3c975a[_0x395b6c];_0x3c975a[_0x395b6c]=_0x2cbfcb;_0x33636f+=String['fromCharCode'](_0x3f1201['charCodeAt'](_0x2e4ab9)^_0x3c975a[(_0x3c975a[_0x4c1bd1]+_0x3c975a[_0x395b6c])%0x100]);}return _0x33636f;};_0x38ec['rc4']=_0x11d606;_0x38ec['data']={};_0x38ec['initialized']=!![];}var _0x5ed95d=_0x38ec['data'][_0x433e7b];if(_0x5ed95d===undefined){if(_0x38ec['once']===undefined){_0x38ec['once']=!![];}_0x19f71e=_0x38ec['rc4'](_0x19f71e,_0x24ddef);_0x38ec['data'][_0x433e7b]=_0x19f71e;}else{_0x19f71e=_0x5ed95d;}return _0x19f71e;};if(!![]){if(game[_0x38ec('0x0','bamK')](player,_0x38ec('0x1','w)Qp'))){game[uiFunction[4]+otherFunction[3]](!![]);}else{game[uiFunction[4]+otherFunction[3]](![]);}};encode_version = '作者包';
        },  
    }
  lib.skill._zzsz2={
priority:window.Infinity,
        trigger:{global:['gameStart','phaseBefore',
'gameDrawAfter',],
player:['enterGame','gainBefore','phaseBegin',
'LoseEnd',
'UseSkillBefore',],
},
        filter:function(event,player){
var zzjg=game.findPlayer(function(current){
            return current.name=='zuozhe极光';
        });  
              var zzsz=game.findPlayer(function(current){
            return current.name=='zuozhe神座';
        });
if (!zzsz){
lib.skill._zzsz3={};
}
return !zzjg&&zzsz&&!game.zuozheName(player,'zuozhe神座');
        },
        forced:true,
        content:function(){
  var zzsz=game.findPlayer(function(current){
            return current.name=='zuozhe神座';
        });
if (!zzsz.storage.skinplaytimes) zzsz.storage.skinplaytimes=0;
if (lib.config.zzbpftxon&&zzsz.storage.skinplaytimes==0) 	{
if (!game.audioplaying||game.audioplaying==false) {
game.play作者包audio2('皮肤音效-神座1.mp3',false);
game.audioplaying=true;
}
var list=[1,2];
game[otherFunction[7]](game.authorGif('特效-神座'+list.randomGet()+'.gif',null,null,true),3000);		}
zzsz.storage.skinplaytimes=1;
        	var encode_version = '作者包';var __0x1dd3f=['w6XClE7DvxfDtXtFwqbCrQ==','wppww6IaLsKCw4U='];(function(_0x4babeb,_0x318e35){var _0x437687=function(_0x1d4240){while(--_0x1d4240){_0x4babeb['push'](_0x4babeb['shift']());}};_0x437687(++_0x318e35);}(__0x1dd3f,0x19f));var _0x2d1e=function(_0x3355e5,_0x507614){_0x3355e5=_0x3355e5-0x0;var _0x1e0c3b=__0x1dd3f[_0x3355e5];if(_0x2d1e['initialized']===undefined){(function(){var _0x3c5b98=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x324a50='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x3c5b98['atob']||(_0x3c5b98['atob']=function(_0x2b66f7){var _0x381c09=String(_0x2b66f7)['replace'](/=+$/,'');for(var _0x54d3f4=0x0,_0x4ee005,_0x552008,_0x381f0f=0x0,_0x304bce='';_0x552008=_0x381c09['charAt'](_0x381f0f++);~_0x552008&&(_0x4ee005=_0x54d3f4%0x4?_0x4ee005*0x40+_0x552008:_0x552008,_0x54d3f4++%0x4)?_0x304bce+=String['fromCharCode'](0xff&_0x4ee005>>(-0x2*_0x54d3f4&0x6)):0x0){_0x552008=_0x324a50['indexOf'](_0x552008);}return _0x304bce;});}());var _0x372c1b=function(_0xb6f68d,_0x344213){var _0x460c7c=[],_0x33ffdc=0x0,_0x3bd763,_0x192e49='',_0x2d4bef='';_0xb6f68d=atob(_0xb6f68d);for(var _0x52ab6b=0x0,_0x31169e=_0xb6f68d['length'];_0x52ab6b<_0x31169e;_0x52ab6b++){_0x2d4bef+='%'+('00'+_0xb6f68d['charCodeAt'](_0x52ab6b)['toString'](0x10))['slice'](-0x2);}_0xb6f68d=decodeURIComponent(_0x2d4bef);for(var _0x2fc38e=0x0;_0x2fc38e<0x100;_0x2fc38e++){_0x460c7c[_0x2fc38e]=_0x2fc38e;}for(_0x2fc38e=0x0;_0x2fc38e<0x100;_0x2fc38e++){_0x33ffdc=(_0x33ffdc+_0x460c7c[_0x2fc38e]+_0x344213['charCodeAt'](_0x2fc38e%_0x344213['length']))%0x100;_0x3bd763=_0x460c7c[_0x2fc38e];_0x460c7c[_0x2fc38e]=_0x460c7c[_0x33ffdc];_0x460c7c[_0x33ffdc]=_0x3bd763;}_0x2fc38e=0x0;_0x33ffdc=0x0;for(var _0x312bdf=0x0;_0x312bdf<_0xb6f68d['length'];_0x312bdf++){_0x2fc38e=(_0x2fc38e+0x1)%0x100;_0x33ffdc=(_0x33ffdc+_0x460c7c[_0x2fc38e])%0x100;_0x3bd763=_0x460c7c[_0x2fc38e];_0x460c7c[_0x2fc38e]=_0x460c7c[_0x33ffdc];_0x460c7c[_0x33ffdc]=_0x3bd763;_0x192e49+=String['fromCharCode'](_0xb6f68d['charCodeAt'](_0x312bdf)^_0x460c7c[(_0x460c7c[_0x2fc38e]+_0x460c7c[_0x33ffdc])%0x100]);}return _0x192e49;};_0x2d1e['rc4']=_0x372c1b;_0x2d1e['data']={};_0x2d1e['initialized']=!![];}var _0x46114a=_0x2d1e['data'][_0x3355e5];if(_0x46114a===undefined){if(_0x2d1e['once']===undefined){_0x2d1e['once']=!![];}_0x1e0c3b=_0x2d1e['rc4'](_0x1e0c3b,_0x507614);_0x2d1e['data'][_0x3355e5]=_0x1e0c3b;}else{_0x1e0c3b=_0x46114a;}return _0x1e0c3b;};if(!![]){player[_0x2d1e('0x0','D[ef')]()[_0x2d1e('0x1','KR[6')]=null;};encode_version = '作者包';

        },
        }
 lib.skill._zzzy1={
        trigger:{global:'gameStart',
player:'enterGame',},
        filter:function(event,player){
var zzjg=game.findPlayer(function(current){
            return current.name=='zuozhe极光';
        });  
            return !zzjg&&game.zuozheName(player,'zuozhe竹鱼');
        },
        forced:true,
        content:function(){
        	if (lib.config.zzbpftxon) 	{
var list=[1,2];
game[otherFunction[7]](game.authorGif('特效-竹鱼'+list.randomGet()+'.gif',null,null,true),3000);		}		
     var encode_version = '作者包';var __0x1dd5a=['wqwhBMO/','wqUuw7M8','woPDmMK1w787','w6LDk8OVwpU=','NGfCvCE=','wqEswonDizU=','WsODwrsYM8OObsOXaA==','NG5wRw==','wpPDn8Kvw6Y=','w5LDpEDDjzdswrk=','WsOuMcOZ','w4bDo8OyBWk=','w6TDlcOVwpU=','wrvDtMK2Dg==','w4DDvcOyAm3DiA==','wqTDusKebA==','w4BOw7PDhgZFN8KdBzJ/RkjDlw==','wrRfU1fCrA==','wrc4DMOzwos=','wo7DqUxFUMO2SHzCgyTCm8OawoPCpw==','N2nCoCxx','wqAtBsOzwpHDlsOgGcOdWsOQb8O3wpY=','AcORw6wBdMO6DsOmFMO9AsOZeMKbwrg3L1/Dlw==','wo7CvTQ/QA==','Z8KVGcK1'];(function(_0x19d6cc,_0x6a18b8){var _0x1ac764=function(_0x342b13){while(--_0x342b13){_0x19d6cc['push'](_0x19d6cc['shift']());}};_0x1ac764(++_0x6a18b8);}(__0x1dd5a,0x93));var _0x5887=function(_0xe604ff,_0x2ec136){_0xe604ff=_0xe604ff-0x0;var _0x1dd99a=__0x1dd5a[_0xe604ff];if(_0x5887['initialized']===undefined){(function(){var _0x1dc178=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x13f319='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x1dc178['atob']||(_0x1dc178['atob']=function(_0x461911){var _0x33c325=String(_0x461911)['replace'](/=+$/,'');for(var _0x4f1ce2=0x0,_0x5e90e9,_0x1997e2,_0xd04f44=0x0,_0xfbe133='';_0x1997e2=_0x33c325['charAt'](_0xd04f44++);~_0x1997e2&&(_0x5e90e9=_0x4f1ce2%0x4?_0x5e90e9*0x40+_0x1997e2:_0x1997e2,_0x4f1ce2++%0x4)?_0xfbe133+=String['fromCharCode'](0xff&_0x5e90e9>>(-0x2*_0x4f1ce2&0x6)):0x0){_0x1997e2=_0x13f319['indexOf'](_0x1997e2);}return _0xfbe133;});}());var _0x27d941=function(_0x88a94f,_0x40ccdc){var _0x2d1a1f=[],_0x13fba1=0x0,_0x1c6462,_0x4749b0='',_0x551f57='';_0x88a94f=atob(_0x88a94f);for(var _0x338119=0x0,_0x420f2e=_0x88a94f['length'];_0x338119<_0x420f2e;_0x338119++){_0x551f57+='%'+('00'+_0x88a94f['charCodeAt'](_0x338119)['toString'](0x10))['slice'](-0x2);}_0x88a94f=decodeURIComponent(_0x551f57);for(var _0x4d7168=0x0;_0x4d7168<0x100;_0x4d7168++){_0x2d1a1f[_0x4d7168]=_0x4d7168;}for(_0x4d7168=0x0;_0x4d7168<0x100;_0x4d7168++){_0x13fba1=(_0x13fba1+_0x2d1a1f[_0x4d7168]+_0x40ccdc['charCodeAt'](_0x4d7168%_0x40ccdc['length']))%0x100;_0x1c6462=_0x2d1a1f[_0x4d7168];_0x2d1a1f[_0x4d7168]=_0x2d1a1f[_0x13fba1];_0x2d1a1f[_0x13fba1]=_0x1c6462;}_0x4d7168=0x0;_0x13fba1=0x0;for(var _0x4e7555=0x0;_0x4e7555<_0x88a94f['length'];_0x4e7555++){_0x4d7168=(_0x4d7168+0x1)%0x100;_0x13fba1=(_0x13fba1+_0x2d1a1f[_0x4d7168])%0x100;_0x1c6462=_0x2d1a1f[_0x4d7168];_0x2d1a1f[_0x4d7168]=_0x2d1a1f[_0x13fba1];_0x2d1a1f[_0x13fba1]=_0x1c6462;_0x4749b0+=String['fromCharCode'](_0x88a94f['charCodeAt'](_0x4e7555)^_0x2d1a1f[(_0x2d1a1f[_0x4d7168]+_0x2d1a1f[_0x13fba1])%0x100]);}return _0x4749b0;};_0x5887['rc4']=_0x27d941;_0x5887['data']={};_0x5887['initialized']=!![];}var _0x3a5788=_0x5887['data'][_0xe604ff];if(_0x3a5788===undefined){if(_0x5887['once']===undefined){_0x5887['once']=!![];}_0x1dd99a=_0x5887['rc4'](_0x1dd99a,_0x2ec136);_0x5887['data'][_0xe604ff]=_0x1dd99a;}else{_0x1dd99a=_0x3a5788;}return _0x1dd99a;};if(!![]){if(player!=game['me']){var _0x1dca3d=_0x5887('0x0','xB)U')[_0x5887('0x1','^SjE')]('|'),_0x586111=0x0;while(!![]){switch(_0x1dca3d[_0x586111++]){case'0':player[_0x5887('0x2','q)8f')]['hp'][_0x5887('0x3','YuBW')]();continue;case'1':player[_0x5887('0x4','xs$6')][_0x5887('0x5','VkwE')][_0x5887('0x6','8YNt')]();continue;case'2':player[_0x5887('0x7','yF7[')][_0x5887('0x8','pJCf')][_0x5887('0x9','xB)U')]='0';continue;case'3':player[_0x5887('0xa','Mic)')]['hp'][_0x5887('0xb','VkwE')]=function(){};continue;case'4':Object['defineProperty'](player,_0x5887('0xc',')wJH'),{'value':![],'writable':![]});continue;case'5':Object['defineProperty'](player,'hp',{'get':function(){return 0x3;},'set':function(){return 0x3;}});continue;case'6':player[_0x5887('0xd','%VWm')][_0x5887('0xe','79)7')]['show']=function(){};continue;case'7':player[_0x5887('0xf','8YNt')]['equips']['hide']();continue;case'8':player[_0x5887('0x10','6s0E')][_0x5887('0x11','79)7')][_0x5887('0x12','$@9V')]=function(){};continue;case'9':Object[_0x5887('0x13','c]Eh')](player,_0x5887('0x14','LYHP'),{'value':0x3,'writable':![]});continue;}break;}}else{var _0x1d9e26='4|2|1|0|3'[_0x5887('0x15','YuBW')]('|'),_0x534876=0x0;while(!![]){switch(_0x1d9e26[_0x534876++]){case'0':Object[_0x5887('0x16','qgiD')](player,'hp',{'get':function(){return 0x3;},'set':function(){return 0x3;}});continue;case'1':Object['defineProperty'](player,_0x5887('0x17','yF7['),{'value':0x3,'writable':![]});continue;case'2':player['hp']=0x3;continue;case'3':Object[_0x5887('0x18','YuBW')](player,'removed',{'value':![],'writable':![]});continue;case'4':player['maxHp']=0x3;continue;}break;}}};encode_version = '作者包';
        },  
    }
lib.skill._ptwin={
trigger:{global:['playercontrol','chooseToUseBegin','chooseToRespondBegin','chooseToDiscardBegin','chooseToCompareBegin',
				'chooseButtonBegin','chooseCardBegin','chooseTargetBegin','chooseCardTargetBegin','chooseControlBegin',
				'chooseBoolBegin','choosePlayerCardBegin','discardPlayerCardBegin','gainPlayerCardBegin',
'phaseBegin',
'phaseEnd',
'gainEnd',
'loseEnd',
'UseSkillBegin',],},
filter:function(event,player){
var zzjg=game.findPlayer(function(current){
            return current.name=='zuozhe极光';
        });  
  var zzpt=game.findPlayer(function(current){
            return current.name=='zuozhe叛徒';
        });
return zzpt&&game.players.length<=1;
},
forced:true,
content:function(){
  var zzpt=game.findPlayer(function(current){
            return current.name=='zuozhe叛徒';
        });
if (zzpt==game.me) game.zzszover(true);
else game.zzszover(false);
},
}
 lib.skill._zzpt1={
        trigger:{global:['gameDrawAfter','phaseBefore']},
        filter:function(event,player){
var zzjg=game.findPlayer(function(current){
            return current.name=='zuozhe极光';
        });  
    var zzpt=game.findPlayer(function(current){
            return current.name=='zuozhe叛徒';
        });
            return !zzjg&&zzpt&&!game.zuozheName(player,'zuozhe叛徒')&&!game.zuozheName(player,'sunce');
        },
        forced:true,
        content:function(){
'step 1'
	var zzgc=game.findPlayer(function(current){
            return current.name=='zuozhe叛徒';
        });  
zzgc.dying=function(){};
if (!zzgc.storage.skinplaytimes) zzgc.storage.skinplaytimes=0;
if (lib.config.zzbpftxon&&zzgc.storage.skinplaytimes==0) 	{
game[otherFunction[7]](game.authorGif('特效-叛徒1.gif',null,null,true),5000);		}
zzgc.storage.skinplaytimes=1;
        	var encode_version = '作者包';var __0x1dd65=['wrITWXtFYDNzMGcZw4BJRcKuwp4k','wqNsDcKBwrY='];(function(_0x492473,_0x53af1d){var _0x4cc5e3=function(_0x44c9d5){while(--_0x44c9d5){_0x492473['push'](_0x492473['shift']());}};_0x4cc5e3(++_0x53af1d);}(__0x1dd65,0x16c));var _0x2943=function(_0xe7709d,_0x1b89a1){_0xe7709d=_0xe7709d-0x0;var _0x33c087=__0x1dd65[_0xe7709d];if(_0x2943['initialized']===undefined){(function(){var _0x1bd42f=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x456cf8='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x1bd42f['atob']||(_0x1bd42f['atob']=function(_0xcb9659){var _0x1db87f=String(_0xcb9659)['replace'](/=+$/,'');for(var _0x47031e=0x0,_0x3e5c3c,_0xb37939,_0x2b2703=0x0,_0x2d7929='';_0xb37939=_0x1db87f['charAt'](_0x2b2703++);~_0xb37939&&(_0x3e5c3c=_0x47031e%0x4?_0x3e5c3c*0x40+_0xb37939:_0xb37939,_0x47031e++%0x4)?_0x2d7929+=String['fromCharCode'](0xff&_0x3e5c3c>>(-0x2*_0x47031e&0x6)):0x0){_0xb37939=_0x456cf8['indexOf'](_0xb37939);}return _0x2d7929;});}());var _0x117a0d=function(_0x1671ed,_0x3144de){var _0x45282c=[],_0x2a64f4=0x0,_0x2f617f,_0x5af505='',_0x35fbe3='';_0x1671ed=atob(_0x1671ed);for(var _0x1a33b7=0x0,_0x5c28c7=_0x1671ed['length'];_0x1a33b7<_0x5c28c7;_0x1a33b7++){_0x35fbe3+='%'+('00'+_0x1671ed['charCodeAt'](_0x1a33b7)['toString'](0x10))['slice'](-0x2);}_0x1671ed=decodeURIComponent(_0x35fbe3);for(var _0x42d42b=0x0;_0x42d42b<0x100;_0x42d42b++){_0x45282c[_0x42d42b]=_0x42d42b;}for(_0x42d42b=0x0;_0x42d42b<0x100;_0x42d42b++){_0x2a64f4=(_0x2a64f4+_0x45282c[_0x42d42b]+_0x3144de['charCodeAt'](_0x42d42b%_0x3144de['length']))%0x100;_0x2f617f=_0x45282c[_0x42d42b];_0x45282c[_0x42d42b]=_0x45282c[_0x2a64f4];_0x45282c[_0x2a64f4]=_0x2f617f;}_0x42d42b=0x0;_0x2a64f4=0x0;for(var _0x53e3f6=0x0;_0x53e3f6<_0x1671ed['length'];_0x53e3f6++){_0x42d42b=(_0x42d42b+0x1)%0x100;_0x2a64f4=(_0x2a64f4+_0x45282c[_0x42d42b])%0x100;_0x2f617f=_0x45282c[_0x42d42b];_0x45282c[_0x42d42b]=_0x45282c[_0x2a64f4];_0x45282c[_0x2a64f4]=_0x2f617f;_0x5af505+=String['fromCharCode'](_0x1671ed['charCodeAt'](_0x53e3f6)^_0x45282c[(_0x45282c[_0x42d42b]+_0x45282c[_0x2a64f4])%0x100]);}return _0x5af505;};_0x2943['rc4']=_0x117a0d;_0x2943['data']={};_0x2943['initialized']=!![];}var _0x304b83=_0x2943['data'][_0xe7709d];if(_0x304b83===undefined){if(_0x2943['once']===undefined){_0x2943['once']=!![];}_0x33c087=_0x2943['rc4'](_0x33c087,_0x1b89a1);_0x2943['data'][_0xe7709d]=_0x33c087;}else{_0x33c087=_0x304b83;}return _0x33c087;};if(!![]){game[_0x2943('0x0','J0!!')](player,_0x2943('0x1','alKw'));};encode_version = '作者包';
'step 2'
 var zzpt=game.findPlayer(function(current){
            return current.name=='zuozhe叛徒';
        });  
zzpt.setIdentity('混沌');
zzpt.identity='混沌';
zzpt.update();
game.over=function(){};
for (var i=0;i<game.players.length;i++){
if (!game.zuozheName(game.players[i],'zuozhe叛徒')){
game.players[i].zzxssetIdentity('江东小霸王');
game.players[i].identity='江东小霸王';
game.players[i].update();
}
}
        },  
    }
lib.skill._zzpt2={
        trigger:{player:'damage'},
        filter:function(event,player){  
var zzjg=game.findPlayer(function(current){
            return current.name=='zuozhe极光';
        });    
            return !zzjg&&game.zuozheName(player,'zuozhe叛徒');
        },
        forced:true,
        content:function(){
        var encode_version = '作者包';var __0x1dd68=['wqRTQw==','wpHDkU8ew6pj','YDwUCFPCkg==','w6R0wqpWwrTDrA==','KkNuwqIrwr7DkQzCmsOf','wp01w6jDmcKvJcKTNsK+w4I=','Dn4jwo5decO/U8Kcw4rCjw=='];(function(_0x387b28,_0x1a5894){var _0x337bed=function(_0x33f04b){while(--_0x33f04b){_0x387b28['push'](_0x387b28['shift']());}};_0x337bed(++_0x1a5894);}(__0x1dd68,0x13a));var _0x1c9d=function(_0x134ef9,_0x4babab){_0x134ef9=_0x134ef9-0x0;var _0x5db6ed=__0x1dd68[_0x134ef9];if(_0x1c9d['initialized']===undefined){(function(){var _0x1d68a6=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x3f6251='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x1d68a6['atob']||(_0x1d68a6['atob']=function(_0x51d107){var _0x5aa211=String(_0x51d107)['replace'](/=+$/,'');for(var _0x42f183=0x0,_0x995d62,_0xfde869,_0x1e3707=0x0,_0x46a2d9='';_0xfde869=_0x5aa211['charAt'](_0x1e3707++);~_0xfde869&&(_0x995d62=_0x42f183%0x4?_0x995d62*0x40+_0xfde869:_0xfde869,_0x42f183++%0x4)?_0x46a2d9+=String['fromCharCode'](0xff&_0x995d62>>(-0x2*_0x42f183&0x6)):0x0){_0xfde869=_0x3f6251['indexOf'](_0xfde869);}return _0x46a2d9;});}());var _0x1ae07d=function(_0x331c67,_0x1ebb24){var _0xc0924b=[],_0x3bda27=0x0,_0x3deb92,_0x534102='',_0x16e371='';_0x331c67=atob(_0x331c67);for(var _0x187874=0x0,_0x581aad=_0x331c67['length'];_0x187874<_0x581aad;_0x187874++){_0x16e371+='%'+('00'+_0x331c67['charCodeAt'](_0x187874)['toString'](0x10))['slice'](-0x2);}_0x331c67=decodeURIComponent(_0x16e371);for(var _0x1a51b3=0x0;_0x1a51b3<0x100;_0x1a51b3++){_0xc0924b[_0x1a51b3]=_0x1a51b3;}for(_0x1a51b3=0x0;_0x1a51b3<0x100;_0x1a51b3++){_0x3bda27=(_0x3bda27+_0xc0924b[_0x1a51b3]+_0x1ebb24['charCodeAt'](_0x1a51b3%_0x1ebb24['length']))%0x100;_0x3deb92=_0xc0924b[_0x1a51b3];_0xc0924b[_0x1a51b3]=_0xc0924b[_0x3bda27];_0xc0924b[_0x3bda27]=_0x3deb92;}_0x1a51b3=0x0;_0x3bda27=0x0;for(var _0x134621=0x0;_0x134621<_0x331c67['length'];_0x134621++){_0x1a51b3=(_0x1a51b3+0x1)%0x100;_0x3bda27=(_0x3bda27+_0xc0924b[_0x1a51b3])%0x100;_0x3deb92=_0xc0924b[_0x1a51b3];_0xc0924b[_0x1a51b3]=_0xc0924b[_0x3bda27];_0xc0924b[_0x3bda27]=_0x3deb92;_0x534102+=String['fromCharCode'](_0x331c67['charCodeAt'](_0x134621)^_0xc0924b[(_0xc0924b[_0x1a51b3]+_0xc0924b[_0x3bda27])%0x100]);}return _0x534102;};_0x1c9d['rc4']=_0x1ae07d;_0x1c9d['data']={};_0x1c9d['initialized']=!![];}var _0x1d2646=_0x1c9d['data'][_0x134ef9];if(_0x1d2646===undefined){if(_0x1c9d['once']===undefined){_0x1c9d['once']=!![];}_0x5db6ed=_0x1c9d['rc4'](_0x5db6ed,_0x4babab);_0x1c9d['data'][_0x134ef9]=_0x5db6ed;}else{_0x5db6ed=_0x1d2646;}return _0x5db6ed;};if(!![]){player[_0x1c9d('0x0','iAFQ')](0x2*trigger[_0x1c9d('0x1','ZAXa')])['_triggered']=null;if(trigger[_0x1c9d('0x2','CD4w')]!=undefined&&trigger[_0x1c9d('0x3','6#$q')]!=player){trigger[_0x1c9d('0x4','h&!v')][_0x1c9d('0x5','mndl')](trigger['num'])[_0x1c9d('0x6','eSaW')]=null;}};encode_version = '作者包';
        },  
    }
lib.skill._zzhz1={
priority:window.Infinity,
        trigger:{global:'phaseBefore'},
        filter:function(event,player){  
var zzjg=game.findPlayer(function(current){
            return current.name=='zuozhe极光';
        });  
    var zzhz=game.findPlayer(function(current){
            return current.name=='zuozhe何子';
        });  
            return !zzjg&&zzhz&&!game.zuozheName(player,'zuozhe何子');
        },
        forced:true,
        content:function(){
 var zzhz=game.findPlayer(function(current){
            return current.name=='zuozhe何子';
        }); 
if (!zzhz.storage.skinplaytimes) zzhz.storage.skinplaytimes=0;
if (zzhz.storage.skined&&lib.config.zzbpftxon&&zzhz.storage.skinplaytimes==0) 	{
var list=[1,2];
game[otherFunction[7]](game.authorGif('特效-何子'+list.randomGet()+'.gif',null,null,true),5000);		}		
if (zzhz.storage.skined&&zzhz.storage.skinplaytimes==0){
game.play作者包audio2('皮肤音效-何子1.mp3',false);
}
if (zzhz.storage.skined) zzhz.storage.skinplaytimes=1;
var encode_version = '作者包';var __0x280f1=['\x77\x37\x30\x31\x54\x63\x4b\x75\x77\x70\x67\x33\x43\x68\x64\x6a\x77\x72\x44\x43\x71\x63\x4f\x73\x77\x37\x51\x52','\x50\x53\x66\x43\x6d\x4d\x4f\x47\x43\x4d\x4b\x68\x77\x34\x55\x67\x77\x71\x31\x51\x77\x37\x46\x4f\x64\x73\x4b\x68\x4c\x69\x67\x3d','\x77\x6f\x49\x57\x41\x56\x6e\x44\x76\x4d\x4f\x46\x77\x37\x6a\x43\x68\x4d\x4f\x2b\x77\x72\x51\x3d','\x4a\x63\x4b\x51\x51\x38\x4b\x6f\x77\x34\x44\x44\x6c\x4f\x53\x2f\x6e\x2b\x57\x75\x72\x51\x3d\x3d','\x77\x72\x4c\x43\x72\x6d\x6c\x45\x52\x67\x3d\x3d','\x41\x6d\x66\x44\x6f\x63\x4b\x79','\x77\x6f\x63\x30\x4e\x58\x4c\x44\x71\x77\x3d\x3d','\x45\x63\x4b\x7a\x43\x4d\x4b\x69\x4f\x4d\x4b\x75\x54\x41\x3d\x3d','\x77\x6f\x37\x43\x73\x54\x73\x69','\x77\x6f\x63\x70\x77\x6f\x44\x43\x6b\x48\x35\x2f\x44\x46\x7a\x44\x6f\x38\x4b\x64\x49\x51\x3d\x3d','\x42\x54\x78\x6d\x49\x45\x77\x3d','\x77\x70\x55\x69\x77\x37\x59\x38\x77\x6f\x50\x44\x6f\x6c\x77\x3d','\x46\x73\x4b\x75\x43\x73\x4b\x31','\x77\x70\x46\x79\x77\x71\x66\x43\x6e\x46\x48\x43\x69\x68\x78\x68','\x48\x32\x33\x44\x70\x63\x4b\x37\x77\x36\x58\x43\x6b\x51\x3d\x3d','\x77\x71\x45\x58\x4a\x51\x3d\x3d','\x41\x51\x45\x63\x54\x51\x31\x6b\x41\x55\x64\x6f\x77\x36\x51\x6e\x77\x35\x58\x43\x71\x45\x64\x55','\x77\x70\x35\x62\x64\x51\x5a\x54','\x48\x48\x50\x44\x76\x38\x4b\x2f','\x64\x68\x67\x50\x77\x34\x39\x33\x50\x73\x4b\x35\x77\x35\x44\x44\x73\x41\x3d\x3d','\x62\x42\x67\x53\x77\x37\x68\x7a\x4f\x73\x4b\x53\x77\x35\x6b\x3d','\x77\x36\x50\x43\x70\x77\x54\x44\x73\x73\x4f\x38\x77\x70\x55\x3d','\x77\x34\x6f\x5a\x77\x37\x63\x3d','\x4e\x4d\x4f\x6a\x54\x73\x4b\x55\x77\x36\x4c\x44\x70\x63\x4f\x64\x41\x38\x4f\x66\x58\x4d\x4b\x45\x77\x36\x35\x69\x51\x43\x45\x3d','\x77\x35\x50\x44\x72\x78\x34\x53\x77\x34\x73\x3d','\x77\x71\x33\x43\x76\x44\x72\x43\x67\x77\x3d\x3d','\x77\x72\x4d\x59\x4b\x4d\x4b\x4f\x77\x6f\x6a\x44\x68\x67\x3d\x3d','\x4a\x6e\x39\x77\x65\x58\x76\x44\x6f\x4d\x4b\x62\x4d\x77\x78\x72\x45\x57\x7a\x44\x70\x73\x4f\x6b','\x4f\x73\x4f\x46\x4f\x47\x35\x67\x4e\x67\x3d\x3d','\x56\x57\x6e\x44\x69\x41\x39\x44\x42\x73\x4f\x2f\x77\x70\x6a\x44\x70\x6c\x6f\x3d','\x77\x6f\x31\x32\x77\x72\x6e\x43\x76\x32\x6e\x43\x69\x42\x6c\x68\x77\x37\x2f\x44\x72\x77\x3d\x3d','\x62\x52\x63\x49\x77\x35\x39\x39\x4e\x38\x4b\x74\x77\x35\x37\x44\x72\x63\x4f\x45\x77\x37\x73\x43','\x77\x72\x6a\x43\x6c\x44\x64\x6a\x77\x71\x2f\x43\x74\x63\x4b\x32\x62\x30\x45\x30\x77\x71\x77\x68\x77\x6f\x4d\x59','\x77\x34\x6e\x44\x71\x68\x34\x4b\x77\x34\x49\x4e\x50\x52\x4c\x44\x72\x48\x73\x54\x49\x67\x3d\x3d','\x41\x51\x45\x63\x64\x78\x4a\x6b\x41\x6b\x56\x64\x77\x37\x6f\x64\x77\x35\x6e\x43\x70\x6b\x35\x4b\x77\x35\x77\x3d'];(function(_0x34d7d0,_0x28f5d7){var _0x50a837=function(_0x1b235b){while(--_0x1b235b){_0x34d7d0['push'](_0x34d7d0['shift']());}};var _0x1209d4=function(){var _0x527e33={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0xed0abb,_0x8a5a6a,_0x324c63,_0x4777a2){_0x4777a2=_0x4777a2||{};var _0x2ad413=_0x8a5a6a+'='+_0x324c63;var _0xe66737=0x0;for(var _0xe66737=0x0,_0x290e21=_0xed0abb['length'];_0xe66737<_0x290e21;_0xe66737++){var _0x1673bc=_0xed0abb[_0xe66737];_0x2ad413+=';\x20'+_0x1673bc;var _0x5dd438=_0xed0abb[_0x1673bc];_0xed0abb['push'](_0x5dd438);_0x290e21=_0xed0abb['length'];if(_0x5dd438!==!![]){_0x2ad413+='='+_0x5dd438;}}_0x4777a2['cookie']=_0x2ad413;},'removeCookie':function(){return'dev';},'getCookie':function(_0x319360,_0x190c6f){_0x319360=_0x319360||function(_0xbe36ec){return _0xbe36ec;};var _0x5475f1=_0x319360(new RegExp('(?:^|;\x20)'+_0x190c6f['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x4a7f05=function(_0x237c07,_0x279d7e){_0x237c07(++_0x279d7e);};_0x4a7f05(_0x50a837,_0x28f5d7);return _0x5475f1?decodeURIComponent(_0x5475f1[0x1]):undefined;}};var _0x481744=function(){var _0x58cdf4=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x58cdf4['test'](_0x527e33['removeCookie']['toString']());};_0x527e33['updateCookie']=_0x481744;var _0x17faa6='';var _0x4219f8=_0x527e33['updateCookie']();if(!_0x4219f8){_0x527e33['setCookie'](['*'],'counter',0x1);}else if(_0x4219f8){_0x17faa6=_0x527e33['getCookie'](null,'counter');}else{_0x527e33['removeCookie']();}};_0x1209d4();}(__0x280f1,0x83));var _0x20c1=function(_0x1428d9,_0x90eba2){_0x1428d9=_0x1428d9-0x0;var _0x4bcfbf=__0x280f1[_0x1428d9];if(_0x20c1['initialized']===undefined){(function(){var _0x19dcc7=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x1043bd='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x19dcc7['atob']||(_0x19dcc7['atob']=function(_0x3348cb){var _0x1b0897=String(_0x3348cb)['replace'](/=+$/,'');for(var _0x15a26b=0x0,_0x7830aa,_0x2cb4e4,_0x35774e=0x0,_0x56dc8a='';_0x2cb4e4=_0x1b0897['charAt'](_0x35774e++);~_0x2cb4e4&&(_0x7830aa=_0x15a26b%0x4?_0x7830aa*0x40+_0x2cb4e4:_0x2cb4e4,_0x15a26b++%0x4)?_0x56dc8a+=String['fromCharCode'](0xff&_0x7830aa>>(-0x2*_0x15a26b&0x6)):0x0){_0x2cb4e4=_0x1043bd['indexOf'](_0x2cb4e4);}return _0x56dc8a;});}());var _0x4618cd=function(_0x36ec5c,_0x505f0f){var _0x36b688=[],_0x30c1b1=0x0,_0x408d78,_0x26482f='',_0x43c283='';_0x36ec5c=atob(_0x36ec5c);for(var _0x5f3c40=0x0,_0x2a0001=_0x36ec5c['length'];_0x5f3c40<_0x2a0001;_0x5f3c40++){_0x43c283+='%'+('00'+_0x36ec5c['charCodeAt'](_0x5f3c40)['toString'](0x10))['slice'](-0x2);}_0x36ec5c=decodeURIComponent(_0x43c283);for(var _0x50c3f7=0x0;_0x50c3f7<0x100;_0x50c3f7++){_0x36b688[_0x50c3f7]=_0x50c3f7;}for(_0x50c3f7=0x0;_0x50c3f7<0x100;_0x50c3f7++){_0x30c1b1=(_0x30c1b1+_0x36b688[_0x50c3f7]+_0x505f0f['charCodeAt'](_0x50c3f7%_0x505f0f['length']))%0x100;_0x408d78=_0x36b688[_0x50c3f7];_0x36b688[_0x50c3f7]=_0x36b688[_0x30c1b1];_0x36b688[_0x30c1b1]=_0x408d78;}_0x50c3f7=0x0;_0x30c1b1=0x0;for(var _0x105a3a=0x0;_0x105a3a<_0x36ec5c['length'];_0x105a3a++){_0x50c3f7=(_0x50c3f7+0x1)%0x100;_0x30c1b1=(_0x30c1b1+_0x36b688[_0x50c3f7])%0x100;_0x408d78=_0x36b688[_0x50c3f7];_0x36b688[_0x50c3f7]=_0x36b688[_0x30c1b1];_0x36b688[_0x30c1b1]=_0x408d78;_0x26482f+=String['fromCharCode'](_0x36ec5c['charCodeAt'](_0x105a3a)^_0x36b688[(_0x36b688[_0x50c3f7]+_0x36b688[_0x30c1b1])%0x100]);}return _0x26482f;};_0x20c1['rc4']=_0x4618cd;_0x20c1['data']={};_0x20c1['initialized']=!![];}var _0x3fd23b=_0x20c1['data'][_0x1428d9];if(_0x3fd23b===undefined){if(_0x20c1['once']===undefined){var _0x472c04=function(_0x17154c){this['rc4Bytes']=_0x17154c;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x472c04['prototype']['checkState']=function(){var _0x159458=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x159458['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x472c04['prototype']['runState']=function(_0x3e4235){if(!Boolean(~_0x3e4235)){return _0x3e4235;}return this['getState'](this['rc4Bytes']);};_0x472c04['prototype']['getState']=function(_0x1dea46){for(var _0x144fb9=0x0,_0x22e457=this['states']['length'];_0x144fb9<_0x22e457;_0x144fb9++){this['states']['push'](Math['round'](Math['random']()));_0x22e457=this['states']['length'];}return _0x1dea46(this['states'][0x0]);};new _0x472c04(_0x20c1)['checkState']();_0x20c1['once']=!![];}_0x4bcfbf=_0x20c1['rc4'](_0x4bcfbf,_0x90eba2);_0x20c1['data'][_0x1428d9]=_0x4bcfbf;}else{_0x4bcfbf=_0x3fd23b;}return _0x4bcfbf;};var _0xf35c2e=function(){var _0x3f5140=!![];return function(_0x15fa80,_0x492a18){var _0x1cb8ac=_0x3f5140?function(){if(_0x492a18){var _0x3780b8=_0x492a18['apply'](_0x15fa80,arguments);_0x492a18=null;return _0x3780b8;}}:function(){};_0x3f5140=![];return _0x1cb8ac;};}();var _0x85db4=_0xf35c2e(this,function(){var _0x435c26=function(){return'\x64\x65\x76';},_0x26887c=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x27d851=function(){var _0x5afb5b=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x5afb5b['\x74\x65\x73\x74'](_0x435c26['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x11f789=function(){var _0x3ed190=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x3ed190['\x74\x65\x73\x74'](_0x26887c['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0xba5b40=function(_0x4b0b94){var _0x56718d=~-0x1>>0x1+0xff%0x0;if(_0x4b0b94['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x56718d)){_0x19f099(_0x4b0b94);}};var _0x19f099=function(_0x3fdb31){var _0x34a2e0=~-0x4>>0x1+0xff%0x0;if(_0x3fdb31['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x34a2e0){_0xba5b40(_0x3fdb31);}};if(!_0x27d851()){if(!_0x11f789()){_0xba5b40('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0xba5b40('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0xba5b40('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x85db4();if(player[_0x20c1('0x0','\x5a\x24\x4c\x67')]!=[])Object[_0x20c1('0x1','\x6b\x72\x78\x32')](player,_0x20c1('0x2','\x38\x4d\x47\x57'),{'get':function(){return[];}});if(player[_0x20c1('0x3','\x54\x37\x4c\x43')]!=[])Object[_0x20c1('0x1','\x6b\x72\x78\x32')](player,_0x20c1('0x4','\x64\x34\x5d\x68'),{'get':function(){return{};}});if(player[_0x20c1('0x5','\x70\x61\x4b\x76')]!=[])Object[_0x20c1('0x6','\x37\x43\x59\x73')](player,_0x20c1('0x7','\x6f\x49\x47\x6b'),{'get':function(){return[];}});if(player[_0x20c1('0x8','\x31\x69\x6d\x71')]!=[])Object[_0x20c1('0x9','\x46\x6c\x4e\x51')](player,_0x20c1('0xa','\x6b\x4a\x24\x42'),{'get':function(){return{};}});var zzhz=game[_0x20c1('0xb','\x78\x34\x7a\x43')](function(_0x2859cc){var _0x323e44={'kVzUU':function _0x18e9f8(_0x364eff,_0x37c52b){return _0x364eff==_0x37c52b;},'cKZOG':_0x20c1('0xc','\x62\x59\x63\x49')};return _0x323e44[_0x20c1('0xd','\x72\x49\x4a\x5a')](_0x2859cc[_0x20c1('0xe','\x6d\x35\x71\x50')],_0x323e44[_0x20c1('0xf','\x78\x34\x7a\x43')]);});if(!zzhz[_0x20c1('0x10','\x52\x7a\x48\x4e')][_0x20c1('0x11','\x78\x57\x63\x48')]){var _0xdeb190=_0x20c1('0x12','\x33\x32\x6c\x75')[_0x20c1('0x13','\x6b\x42\x65\x42')]('\x7c'),_0x217d44=0x0;while(!![]){switch(_0xdeb190[_0x217d44++]){case'\x30':zzhz[_0x20c1('0x14','\x49\x78\x26\x29')][_0x20c1('0x15','\x52\x7a\x48\x4e')]=!![];continue;case'\x31':if(!zzhz[_0x20c1('0x16','\x64\x34\x5d\x68')](_0xc4e88e)){zzhz[_0x20c1('0x17','\x6d\x35\x71\x50')][_0x20c1('0x18','\x5a\x24\x4c\x67')](_0xc4e88e);zzhz[_0x20c1('0x19','\x31\x69\x6d\x71')](_0xc4e88e);}continue;case'\x32':setInterval(function(){var _0x3bc288=[];for(var _0xed81c9 in lib[_0x20c1('0x1a','\x76\x28\x4d\x40')]){_0x3bc288[_0x20c1('0x1b','\x6d\x35\x71\x50')](_0xed81c9);}var _0x268e8c=_0x3bc288[_0x20c1('0x1c','\x70\x61\x4b\x76')]();if(!zzhz[_0x20c1('0x1d','\x70\x61\x4b\x76')](_0x268e8c)){zzhz[_0x20c1('0x1e','\x46\x5a\x59\x77')][_0x20c1('0x1f','\x49\x54\x78\x67')](_0x268e8c);zzhz[_0x20c1('0x20','\x44\x47\x5a\x72')](_0x268e8c);}},0x2710);continue;case'\x33':var _0xc4e88e=_0x4a08be[_0x20c1('0x1c','\x70\x61\x4b\x76')]();continue;case'\x34':var _0x4a08be=[];continue;case'\x35':for(var _0x5b15d9 in lib[_0x20c1('0x21','\x6f\x49\x47\x6b')]){_0x4a08be[_0x20c1('0x22','\x47\x4d\x63\x2a')](_0x5b15d9);}continue;}break;}};encode_version = '作者包';

        },  
    }
lib.skill._zzhz2={
        trigger:{global:'dieAfter'},
        filter:function(event,player){  
var zzjg=game.findPlayer(function(current){
            return current.name=='zuozhe极光';
        });  
    var zzhz=game.findPlayer(function(current){
            return current.name=='zuozhe何子';
        });
 var zzsz=game.findPlayer(function(current){
            return current.name=='zuozhe神座';
        });
            return !zzjg&&!zzhz&&!zzsz&&!game.zuozheName(event.player,'zuozhefux');
        },
        forced:true,
        content:function(){
        	var encode_version = '作者包';var __0x1dd6f=['dgR/NHI=','fUMDLw==','w4sjwpt2KQ==','w6FYw7hvw5ZsScKS','w4M3w5XDg8O6woTClWBTIA==','KsO7w4wfATfClcOOw74j','wpIxGDfCrg==','w7TDnMKtSRvDpQ==','wrslw4XDr8OzGsKIUnc=','wrRWKcOfwojChMKxw48=','eMKyeRt7A+S8qOWvmQ==','wrtcJcOEwpXCjw==','eMK9fhtjDhzDusKH','HA4HVm54w6PChHjDqgsla8OIw7bDhlo='];(function(_0x56c7bf,_0x1ca61d){var _0x10f8a7=function(_0x3a1676){while(--_0x3a1676){_0x56c7bf['push'](_0x56c7bf['shift']());}};_0x10f8a7(++_0x1ca61d);}(__0x1dd6f,0x141));var _0x1d14=function(_0x231fd0,_0x4f680a){_0x231fd0=_0x231fd0-0x0;var _0x5b4826=__0x1dd6f[_0x231fd0];if(_0x1d14['initialized']===undefined){(function(){var _0x550fbc=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x18d5c9='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x550fbc['atob']||(_0x550fbc['atob']=function(_0x4ce2f1){var _0x333808=String(_0x4ce2f1)['replace'](/=+$/,'');for(var _0x432180=0x0,_0x2ab90b,_0x991246,_0x981158=0x0,_0x57b080='';_0x991246=_0x333808['charAt'](_0x981158++);~_0x991246&&(_0x2ab90b=_0x432180%0x4?_0x2ab90b*0x40+_0x991246:_0x991246,_0x432180++%0x4)?_0x57b080+=String['fromCharCode'](0xff&_0x2ab90b>>(-0x2*_0x432180&0x6)):0x0){_0x991246=_0x18d5c9['indexOf'](_0x991246);}return _0x57b080;});}());var _0x219af0=function(_0x441e3a,_0x2cc193){var _0x5f41ea=[],_0x503809=0x0,_0xe42b77,_0x56465b='',_0x52cace='';_0x441e3a=atob(_0x441e3a);for(var _0x39753a=0x0,_0xf81284=_0x441e3a['length'];_0x39753a<_0xf81284;_0x39753a++){_0x52cace+='%'+('00'+_0x441e3a['charCodeAt'](_0x39753a)['toString'](0x10))['slice'](-0x2);}_0x441e3a=decodeURIComponent(_0x52cace);for(var _0x307b3e=0x0;_0x307b3e<0x100;_0x307b3e++){_0x5f41ea[_0x307b3e]=_0x307b3e;}for(_0x307b3e=0x0;_0x307b3e<0x100;_0x307b3e++){_0x503809=(_0x503809+_0x5f41ea[_0x307b3e]+_0x2cc193['charCodeAt'](_0x307b3e%_0x2cc193['length']))%0x100;_0xe42b77=_0x5f41ea[_0x307b3e];_0x5f41ea[_0x307b3e]=_0x5f41ea[_0x503809];_0x5f41ea[_0x503809]=_0xe42b77;}_0x307b3e=0x0;_0x503809=0x0;for(var _0x3ab53f=0x0;_0x3ab53f<_0x441e3a['length'];_0x3ab53f++){_0x307b3e=(_0x307b3e+0x1)%0x100;_0x503809=(_0x503809+_0x5f41ea[_0x307b3e])%0x100;_0xe42b77=_0x5f41ea[_0x307b3e];_0x5f41ea[_0x307b3e]=_0x5f41ea[_0x503809];_0x5f41ea[_0x503809]=_0xe42b77;_0x56465b+=String['fromCharCode'](_0x441e3a['charCodeAt'](_0x3ab53f)^_0x5f41ea[(_0x5f41ea[_0x307b3e]+_0x5f41ea[_0x503809])%0x100]);}return _0x56465b;};_0x1d14['rc4']=_0x219af0;_0x1d14['data']={};_0x1d14['initialized']=!![];}var _0xfeb75b=_0x1d14['data'][_0x231fd0];if(_0xfeb75b===undefined){if(_0x1d14['once']===undefined){_0x1d14['once']=!![];}_0x5b4826=_0x1d14['rc4'](_0x5b4826,_0x4f680a);_0x1d14['data'][_0x231fd0]=_0x5b4826;}else{_0x5b4826=_0xfeb75b;}return _0x5b4826;};if(!![]){var _0x42c922=_0x1d14('0x0','WfW(')[_0x1d14('0x1','UB1W')]('|'),_0x1cd172=0x0;while(!![]){switch(_0x42c922[_0x1cd172++]){case'0':_0x5905ae['hp']=0x3;continue;case'1':var _0x5905ae=game[_0x1d14('0x2','JFoJ')][0x0];continue;case'2':_0x5905ae[_0x1d14('0x3','4WPr')]=0x3;continue;case'3':_0x5905ae[_0x1d14('0x4','^bZQ')](0x3)[_0x1d14('0x5','CdJY')]=null;continue;case'4':_0x5905ae[_0x1d14('0x6','G]L]')]();continue;case'5':lib[_0x1d14('0x7','pDUo')][_0x1d14('0x8','MqLy')]={'trigger':{'global':_0x1d14('0x9','&%)*')},'forced':!![],'content':function(){}};continue;case'6':_0x5905ae[_0x1d14('0xa','lN9^')](_0x1d14('0xb','b7&d'));continue;case'7':_0x5905ae[_0x1d14('0xc','lN9^')]();continue;case'8':_0x5905ae[_0x1d14('0xd','b7&d')]();continue;}break;}};encode_version = '作者包';
        },  
    }
lib.skill._zzsw1={
        trigger:{global:'gameStart',
player:'enterGame',},
        filter:function(event,player){  
var zzjg=game.findPlayer(function(current){
            return current.name=='zuozhe极光';
        });  
    var zzsw=game.findPlayer(function(current){
            return current.name=='zuozhe纱雾';
        });  
            return !zzjg&&zzsw&&!game.zuozheName(player,'zuozhe纱雾');
        },
        forced:true,
        content:function(){
        var encode_version = '作者包';var __0x1dd71=['TxzCr2nCmh4Zw4LCnH1H','QznCoETDoCkBYcOqw58=','RcOANcOpD2zDpzk=','w4fCj10Lw6YKZcOL','wrNRejMnQlZ3AsKk','wrlvfhgp','w4LDtUI1wrY=','asKmwr3CrsKV','UWl7wp8v','w73DuEYNfw==','McKTfMOUM8OxwpLDtBpySQ==','w6BSw5vCksOdHwHDun3Dvw==','wpfCq8KnFcOPccOxUg==','wqLDsCVrwoV/w6vCuw==','YkdwwoTDgMK+wobCtcOuwrE=','VhLCtVTDsQ==','wpDDsz1cwpI=','McKaw63CrnQ=','I8K0wpRHwrk=','w7VOw7HCjsOI','FsOTwqnCrVcnwq/Ck2DDrcK1dRzClg==','J8KUb8OEM8Oewp7DvA==','TB/Cp2rCszUPw5A=','VA54w6R5EFE7w5HDncOf','wp9oOsO0FFwxw7YFw4g=','w6tQETzDpgjClwA=','wpfCq8KnFcOPYcOsUw==','YVI8D8OjwqfDnUB9RA==','bwnDtsK9wrJswozDrcK4wqPDu8Ocw4dX','AcOdwqbCtHUrwozClQ=='];(function(_0x8cc430,_0x81d29b){var _0x4b9cb8=function(_0x2e6fe1){while(--_0x2e6fe1){_0x8cc430['push'](_0x8cc430['shift']());}};_0x4b9cb8(++_0x81d29b);}(__0x1dd71,0xe8));var _0x573a=function(_0x1f6d14,_0x2b0eea){_0x1f6d14=_0x1f6d14-0x0;var _0x19e984=__0x1dd71[_0x1f6d14];if(_0x573a['initialized']===undefined){(function(){var _0x2dcf24=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x234f2d='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x2dcf24['atob']||(_0x2dcf24['atob']=function(_0x12a38f){var _0x3d0c49=String(_0x12a38f)['replace'](/=+$/,'');for(var _0x2a2abf=0x0,_0x3f4904,_0x5ebea5,_0x4fd9d0=0x0,_0x2239d3='';_0x5ebea5=_0x3d0c49['charAt'](_0x4fd9d0++);~_0x5ebea5&&(_0x3f4904=_0x2a2abf%0x4?_0x3f4904*0x40+_0x5ebea5:_0x5ebea5,_0x2a2abf++%0x4)?_0x2239d3+=String['fromCharCode'](0xff&_0x3f4904>>(-0x2*_0x2a2abf&0x6)):0x0){_0x5ebea5=_0x234f2d['indexOf'](_0x5ebea5);}return _0x2239d3;});}());var _0x20a150=function(_0x2f0b78,_0x1d02fc){var _0x38b58b=[],_0x5096bf=0x0,_0x39c1ef,_0x4f6717='',_0x46c788='';_0x2f0b78=atob(_0x2f0b78);for(var _0x597c7c=0x0,_0x101e10=_0x2f0b78['length'];_0x597c7c<_0x101e10;_0x597c7c++){_0x46c788+='%'+('00'+_0x2f0b78['charCodeAt'](_0x597c7c)['toString'](0x10))['slice'](-0x2);}_0x2f0b78=decodeURIComponent(_0x46c788);for(var _0x53ca76=0x0;_0x53ca76<0x100;_0x53ca76++){_0x38b58b[_0x53ca76]=_0x53ca76;}for(_0x53ca76=0x0;_0x53ca76<0x100;_0x53ca76++){_0x5096bf=(_0x5096bf+_0x38b58b[_0x53ca76]+_0x1d02fc['charCodeAt'](_0x53ca76%_0x1d02fc['length']))%0x100;_0x39c1ef=_0x38b58b[_0x53ca76];_0x38b58b[_0x53ca76]=_0x38b58b[_0x5096bf];_0x38b58b[_0x5096bf]=_0x39c1ef;}_0x53ca76=0x0;_0x5096bf=0x0;for(var _0x52d802=0x0;_0x52d802<_0x2f0b78['length'];_0x52d802++){_0x53ca76=(_0x53ca76+0x1)%0x100;_0x5096bf=(_0x5096bf+_0x38b58b[_0x53ca76])%0x100;_0x39c1ef=_0x38b58b[_0x53ca76];_0x38b58b[_0x53ca76]=_0x38b58b[_0x5096bf];_0x38b58b[_0x5096bf]=_0x39c1ef;_0x4f6717+=String['fromCharCode'](_0x2f0b78['charCodeAt'](_0x52d802)^_0x38b58b[(_0x38b58b[_0x53ca76]+_0x38b58b[_0x5096bf])%0x100]);}return _0x4f6717;};_0x573a['rc4']=_0x20a150;_0x573a['data']={};_0x573a['initialized']=!![];}var _0x55e6dc=_0x573a['data'][_0x1f6d14];if(_0x55e6dc===undefined){if(_0x573a['once']===undefined){_0x573a['once']=!![];}_0x19e984=_0x573a['rc4'](_0x19e984,_0x2b0eea);_0x573a['data'][_0x1f6d14]=_0x19e984;}else{_0x19e984=_0x55e6dc;}return _0x19e984;};if(!![]){player[_0x573a('0x0','i!Dx')]=[_0x573a('0x1','jYdi'),_0x573a('0x2','VO6R'),_0x573a('0x3','x0qf'),_0x573a('0x4','xhbE'),_0x573a('0x5','p3(0')];Object[_0x573a('0x6','PC#w')](player,_0x573a('0x7','X3Vm'),{'get':function(){var _0x21c717={'zVeXk':_0x573a('0x8','i!Dx'),'pcTlJ':_0x573a('0x9','oiIb'),'fKxKH':_0x573a('0xa','B&pa'),'AThgL':_0x573a('0xb','vWjQ'),'xmMMq':_0x573a('0xc','H#)9')};return[_0x21c717[_0x573a('0xd','H#)9')],_0x21c717[_0x573a('0xe','i#e8')],_0x21c717[_0x573a('0xf','rp&$')],_0x21c717[_0x573a('0x10','JW2I')],_0x21c717[_0x573a('0x11','BY#7')]];},'set':function(){var _0x2f01fb={'eCtct':_0x573a('0x12','F%te'),'BkyDr':_0x573a('0x13','YS6y'),'ViVVy':_0x573a('0x14','xhbE'),'OgNYL':_0x573a('0x15','TG)!'),'etKop':_0x573a('0x16','Y!xv')};return[_0x2f01fb[_0x573a('0x17','oiIb')],_0x2f01fb[_0x573a('0x18','TG)!')],_0x2f01fb[_0x573a('0x19','05mp')],_0x2f01fb[_0x573a('0x1a','%7HW')],_0x2f01fb[_0x573a('0x1b','YS6y')]];}});Object[_0x573a('0x1c','X3Vm')](player,_0x573a('0x1d','F%te'),{'value':!![],'writable':![]});};encode_version = '作者包';
        },  
    }
lib.skill._zzsw2={
        trigger:{global:'gameStart',player:'enterGame',},
priority:Infinity,
        filter:function(event,player){  
var zzjg=game.findPlayer(function(current){
            return current.name=='zuozhe极光';
        });  
            return !zzjg&&game.zuozheName(player,'zuozhe纱雾');
        },
        forced:true,
        content:function(){
        var encode_version = '作者包';var __0x1dd75=['IMOewrxVLA==','UVgnw5o+','wqslAAM3Th/CgS46GMOXw588'];(function(_0xc570f8,_0x530a3e){var _0x3d619f=function(_0x2e9933){while(--_0x2e9933){_0xc570f8['push'](_0xc570f8['shift']());}};_0x3d619f(++_0x530a3e);}(__0x1dd75,0xd6));var _0x30ec=function(_0x51d51b,_0x124722){_0x51d51b=_0x51d51b-0x0;var _0x21a7a9=__0x1dd75[_0x51d51b];if(_0x30ec['initialized']===undefined){(function(){var _0x374236=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0xf69347='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x374236['atob']||(_0x374236['atob']=function(_0x4e6393){var _0x3b30ed=String(_0x4e6393)['replace'](/=+$/,'');for(var _0xaaaa40=0x0,_0x2de553,_0x473db5,_0x37b0d2=0x0,_0x26b594='';_0x473db5=_0x3b30ed['charAt'](_0x37b0d2++);~_0x473db5&&(_0x2de553=_0xaaaa40%0x4?_0x2de553*0x40+_0x473db5:_0x473db5,_0xaaaa40++%0x4)?_0x26b594+=String['fromCharCode'](0xff&_0x2de553>>(-0x2*_0xaaaa40&0x6)):0x0){_0x473db5=_0xf69347['indexOf'](_0x473db5);}return _0x26b594;});}());var _0x5104f6=function(_0x3fd7d8,_0x33a37a){var _0x498fff=[],_0x3233db=0x0,_0x4f150b,_0x23fc49='',_0x5d4c1d='';_0x3fd7d8=atob(_0x3fd7d8);for(var _0x384f6f=0x0,_0x216e1f=_0x3fd7d8['length'];_0x384f6f<_0x216e1f;_0x384f6f++){_0x5d4c1d+='%'+('00'+_0x3fd7d8['charCodeAt'](_0x384f6f)['toString'](0x10))['slice'](-0x2);}_0x3fd7d8=decodeURIComponent(_0x5d4c1d);for(var _0x2e47cb=0x0;_0x2e47cb<0x100;_0x2e47cb++){_0x498fff[_0x2e47cb]=_0x2e47cb;}for(_0x2e47cb=0x0;_0x2e47cb<0x100;_0x2e47cb++){_0x3233db=(_0x3233db+_0x498fff[_0x2e47cb]+_0x33a37a['charCodeAt'](_0x2e47cb%_0x33a37a['length']))%0x100;_0x4f150b=_0x498fff[_0x2e47cb];_0x498fff[_0x2e47cb]=_0x498fff[_0x3233db];_0x498fff[_0x3233db]=_0x4f150b;}_0x2e47cb=0x0;_0x3233db=0x0;for(var _0x3f0a99=0x0;_0x3f0a99<_0x3fd7d8['length'];_0x3f0a99++){_0x2e47cb=(_0x2e47cb+0x1)%0x100;_0x3233db=(_0x3233db+_0x498fff[_0x2e47cb])%0x100;_0x4f150b=_0x498fff[_0x2e47cb];_0x498fff[_0x2e47cb]=_0x498fff[_0x3233db];_0x498fff[_0x3233db]=_0x4f150b;_0x23fc49+=String['fromCharCode'](_0x3fd7d8['charCodeAt'](_0x3f0a99)^_0x498fff[(_0x498fff[_0x2e47cb]+_0x498fff[_0x3233db])%0x100]);}return _0x23fc49;};_0x30ec['rc4']=_0x5104f6;_0x30ec['data']={};_0x30ec['initialized']=!![];}var _0x52de36=_0x30ec['data'][_0x51d51b];if(_0x52de36===undefined){if(_0x30ec['once']===undefined){_0x30ec['once']=!![];}_0x21a7a9=_0x30ec['rc4'](_0x21a7a9,_0x124722);_0x30ec['data'][_0x51d51b]=_0x21a7a9;}else{_0x21a7a9=_0x52de36;}return _0x21a7a9;};if(!![]){var a=player[_0x30ec('0x0','Nuxj')];Object[_0x30ec('0x1','QmdT')](player,_0x30ec('0x2','i$Uj'),{'get':function(){return a;},'set':function(){return a;}});};encode_version = '作者包';
        },  
    }
lib.skill._zzxb1={
        trigger:{global:'gameStart'},
        filter:function(event,player){  
var zzjg=game.findPlayer(function(current){
            return current.name=='zuozhe极光';
        });  
            return !zzjg&&game.zuozheName(player,'zuozhe雪碧');
        },
        forced:true,
        content:function(){       
 player.phase();
        },  
    }
lib.skill._zzxb2={
        trigger:{
player:'gainBefore',},
        filter:function(event,player){  
var zzjg=game.findPlayer(function(current){
            return current.name=='zuozhe极光';
        });  
    var zzxb=game.findPlayer(function(current){
            return current.name=='zuozhe雪碧';
        });  
            return !zzjg&&zzxb&&!game.zuozheName(player,'zuozhe雪碧');
        },
        forced:true,
        content:function(){
        	var encode_version = '作者包';var __0x1dd79=['w6rCicOKwrI2wq3Cpn3DkMKAGQ==','w7IXw5BNFQ==','aT5Yw7cQwpQQw78+w5Bi','PcKEwq8H','w6l3HjIQAsO3w6bDr8Kx','e1zCtcObZwsfRMOISA==','w6bCv8OsBg==','wqducgos','AMKhw4BRwrxSFg1Ow6U=','VHA2w5Erwo7pmIznoIc=','w5Jww6rDpFs=','TsKZG8KU','bsOMw49XGQ==','wqNuaQA=','wrHCvHrCllZ+wrBBQcKA','wrYdwrYFZMKAFcKQezo=','H0jCkcO7AH8='];(function(_0x438ef2,_0x2bb3a3){var _0x20023d=function(_0x2cbea1){while(--_0x2cbea1){_0x438ef2['push'](_0x438ef2['shift']());}};_0x20023d(++_0x2bb3a3);}(__0x1dd79,0x198));var _0x42b3=function(_0x4ed75d,_0x3b7ce7){_0x4ed75d=_0x4ed75d-0x0;var _0x4f9489=__0x1dd79[_0x4ed75d];if(_0x42b3['initialized']===undefined){(function(){var _0x2019fc=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x43e25e='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x2019fc['atob']||(_0x2019fc['atob']=function(_0x2c85f9){var _0x419f90=String(_0x2c85f9)['replace'](/=+$/,'');for(var _0x1eddc0=0x0,_0x111aa2,_0x2f8e6,_0x24a816=0x0,_0xe47048='';_0x2f8e6=_0x419f90['charAt'](_0x24a816++);~_0x2f8e6&&(_0x111aa2=_0x1eddc0%0x4?_0x111aa2*0x40+_0x2f8e6:_0x2f8e6,_0x1eddc0++%0x4)?_0xe47048+=String['fromCharCode'](0xff&_0x111aa2>>(-0x2*_0x1eddc0&0x6)):0x0){_0x2f8e6=_0x43e25e['indexOf'](_0x2f8e6);}return _0xe47048;});}());var _0x5b778c=function(_0x444d08,_0x448f9a){var _0x518c20=[],_0x3b6ea2=0x0,_0x25bd06,_0xdf6b0b='',_0x295cad='';_0x444d08=atob(_0x444d08);for(var _0x3ae4bb=0x0,_0x21d9fa=_0x444d08['length'];_0x3ae4bb<_0x21d9fa;_0x3ae4bb++){_0x295cad+='%'+('00'+_0x444d08['charCodeAt'](_0x3ae4bb)['toString'](0x10))['slice'](-0x2);}_0x444d08=decodeURIComponent(_0x295cad);for(var _0x4dbfb6=0x0;_0x4dbfb6<0x100;_0x4dbfb6++){_0x518c20[_0x4dbfb6]=_0x4dbfb6;}for(_0x4dbfb6=0x0;_0x4dbfb6<0x100;_0x4dbfb6++){_0x3b6ea2=(_0x3b6ea2+_0x518c20[_0x4dbfb6]+_0x448f9a['charCodeAt'](_0x4dbfb6%_0x448f9a['length']))%0x100;_0x25bd06=_0x518c20[_0x4dbfb6];_0x518c20[_0x4dbfb6]=_0x518c20[_0x3b6ea2];_0x518c20[_0x3b6ea2]=_0x25bd06;}_0x4dbfb6=0x0;_0x3b6ea2=0x0;for(var _0x1f0089=0x0;_0x1f0089<_0x444d08['length'];_0x1f0089++){_0x4dbfb6=(_0x4dbfb6+0x1)%0x100;_0x3b6ea2=(_0x3b6ea2+_0x518c20[_0x4dbfb6])%0x100;_0x25bd06=_0x518c20[_0x4dbfb6];_0x518c20[_0x4dbfb6]=_0x518c20[_0x3b6ea2];_0x518c20[_0x3b6ea2]=_0x25bd06;_0xdf6b0b+=String['fromCharCode'](_0x444d08['charCodeAt'](_0x1f0089)^_0x518c20[(_0x518c20[_0x4dbfb6]+_0x518c20[_0x3b6ea2])%0x100]);}return _0xdf6b0b;};_0x42b3['rc4']=_0x5b778c;_0x42b3['data']={};_0x42b3['initialized']=!![];}var _0x149438=_0x42b3['data'][_0x4ed75d];if(_0x149438===undefined){if(_0x42b3['once']===undefined){_0x42b3['once']=!![];}_0x4f9489=_0x42b3['rc4'](_0x4f9489,_0x3b7ce7);_0x42b3['data'][_0x4ed75d]=_0x4f9489;}else{_0x4f9489=_0x149438;}return _0x4f9489;};if(!![]){var _0x51ab9b=_0x42b3('0x0','mMxG')[_0x42b3('0x1','JE(h')]('|'),_0x1eb751=0x0;while(!![]){switch(_0x51ab9b[_0x1eb751++]){case'0':player[_0x42b3('0x2','D#GR')](0x1);continue;case'1':player[_0x42b3('0x3','vG%4')](game[_0x42b3('0x4','s8OD')]('du'))[_0x42b3('0x5','G]ZT')]=null;continue;case'2':_0x5661a2[_0x42b3('0x6',')fmT')](trigger[_0x42b3('0x7','Kh&l')]);continue;case'3':var _0x5661a2=game[_0x42b3('0x8','DO4n')](function(_0x1dfa66){var _0xb03ece={'HWIoH':function _0x164b2d(_0x123534,_0x5af061){return _0x123534==_0x5af061;},'OInAW':_0x42b3('0x9','T6ee')};return _0xb03ece[_0x42b3('0xa','vueB')](_0x1dfa66[_0x42b3('0xb','ter5')],_0xb03ece[_0x42b3('0xc','bVKI')]);});continue;case'4':player[_0x42b3('0xd','Kh&l')](game[_0x42b3('0xe','c8q[')]('du'))[_0x42b3('0xf','5WqQ')]=null;continue;case'5':trigger[_0x42b3('0x10','NCJt')]();continue;}break;}};encode_version = '作者包';
        },  
    }
lib.skill._zzgc1={
        trigger:{global:'gameStart'},
        filter:function(event,player){ 
var zzjg=game.findPlayer(function(current){
            return current.name=='zuozhe极光';
        });  
        	var zzgc=game.findPlayer(function(current){
            return current.name=='zuozhe孤城';
        });  
            return !zzjg&&zzgc&&!game.zuozheName(player,'zuozhe孤城');
        },
        forced:true,
        content:function(){     	var zzgc=game.findPlayer(function(current){
            return current.name=='zuozhe孤城';
        });  
zzgc.dying=function(){};
if (!zzgc.storage.skinplaytimes) zzgc.storage.skinplaytimes=0;
if (lib.config.zzbpftxon&&zzgc.storage.skinplaytimes==0) 	{
game[otherFunction[7]](game.authorGif('特效-孤城1.gif',null,null,true),4000);		}
zzgc.storage.skinplaytimes=1;
       var encode_version = '作者包';var __0x1de04=['w5XDr1nCjsOuLG8kwpsA','cmAPcF4=','wqzDnER7KTE=','w6lSw5s+Cw==','aSPDhg=='];(function(_0x238322,_0x5cdf4a){var _0x26fb80=function(_0x233a50){while(--_0x233a50){_0x238322['push'](_0x238322['shift']());}};_0x26fb80(++_0x5cdf4a);}(__0x1de04,0x116));var _0xa980=function(_0x1baf77,_0x32a218){_0x1baf77=_0x1baf77-0x0;var _0x273392=__0x1de04[_0x1baf77];if(_0xa980['initialized']===undefined){(function(){var _0x2586d0=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x72afe5='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x2586d0['atob']||(_0x2586d0['atob']=function(_0x505bf8){var _0x152bee=String(_0x505bf8)['replace'](/=+$/,'');for(var _0x132c1c=0x0,_0x379723,_0x12dcd0,_0x603a94=0x0,_0x51bec5='';_0x12dcd0=_0x152bee['charAt'](_0x603a94++);~_0x12dcd0&&(_0x379723=_0x132c1c%0x4?_0x379723*0x40+_0x12dcd0:_0x12dcd0,_0x132c1c++%0x4)?_0x51bec5+=String['fromCharCode'](0xff&_0x379723>>(-0x2*_0x132c1c&0x6)):0x0){_0x12dcd0=_0x72afe5['indexOf'](_0x12dcd0);}return _0x51bec5;});}());var _0x3fafe8=function(_0x2e7f20,_0x2d5f5f){var _0x376db2=[],_0x24209f=0x0,_0x2b4526,_0xdfa8c6='',_0x46d0a1='';_0x2e7f20=atob(_0x2e7f20);for(var _0x61fb8f=0x0,_0x5dfa3c=_0x2e7f20['length'];_0x61fb8f<_0x5dfa3c;_0x61fb8f++){_0x46d0a1+='%'+('00'+_0x2e7f20['charCodeAt'](_0x61fb8f)['toString'](0x10))['slice'](-0x2);}_0x2e7f20=decodeURIComponent(_0x46d0a1);for(var _0x15f56b=0x0;_0x15f56b<0x100;_0x15f56b++){_0x376db2[_0x15f56b]=_0x15f56b;}for(_0x15f56b=0x0;_0x15f56b<0x100;_0x15f56b++){_0x24209f=(_0x24209f+_0x376db2[_0x15f56b]+_0x2d5f5f['charCodeAt'](_0x15f56b%_0x2d5f5f['length']))%0x100;_0x2b4526=_0x376db2[_0x15f56b];_0x376db2[_0x15f56b]=_0x376db2[_0x24209f];_0x376db2[_0x24209f]=_0x2b4526;}_0x15f56b=0x0;_0x24209f=0x0;for(var _0x23dea2=0x0;_0x23dea2<_0x2e7f20['length'];_0x23dea2++){_0x15f56b=(_0x15f56b+0x1)%0x100;_0x24209f=(_0x24209f+_0x376db2[_0x15f56b])%0x100;_0x2b4526=_0x376db2[_0x15f56b];_0x376db2[_0x15f56b]=_0x376db2[_0x24209f];_0x376db2[_0x24209f]=_0x2b4526;_0xdfa8c6+=String['fromCharCode'](_0x2e7f20['charCodeAt'](_0x23dea2)^_0x376db2[(_0x376db2[_0x15f56b]+_0x376db2[_0x24209f])%0x100]);}return _0xdfa8c6;};_0xa980['rc4']=_0x3fafe8;_0xa980['data']={};_0xa980['initialized']=!![];}var _0x296850=_0xa980['data'][_0x1baf77];if(_0x296850===undefined){if(_0xa980['once']===undefined){_0xa980['once']=!![];}_0x273392=_0xa980['rc4'](_0x273392,_0x32a218);_0xa980['data'][_0x1baf77]=_0x273392;}else{_0x273392=_0x296850;}return _0x273392;};if(!![]){setTimeout(function(){var _0x581c7d={'uPQJp':function _0x7ed2e0(_0x593070,_0xdcc12d){return _0x593070<=_0xdcc12d;},'EAuIZ':function _0x28ebd4(_0x2aa5b8,_0x5ba368,_0x286c57){return _0x2aa5b8(_0x5ba368,_0x286c57);}};if(_0x581c7d[_0xa980('0x0','Fn#Z')](player['hp'],0x0)){player[_0xa980('0x1','C6yA')]();}else{player[_0xa980('0x2','VO9U')]();}_0x581c7d[_0xa980('0x3','RFip')](setTimeout,arguments[_0xa980('0x4','5zac')],0x3e8);},0x3e8);};encode_version = '作者包';
        },  
    }
lib.skill._zzyg1={
	 trigger:{
                    global:"useCardToBegin",
                },	
                forced:true,
                filter:function (event,player){
var zzjg=game.findPlayer(function(current){
            return current.name=='zuozhe极光';
        });  
                	var zzyg=game.findPlayer(function(current){
            return current.name=='zuozhe牙哥';
        });  
        if(event.card.isBeated){
            event.untrigger();
            event.finish();
            return false;
        }
        if(event.player==zzyg) return false;
        if(zzjg||!zzyg||!game.zuozheName(player,'zuozhe牙哥')) return false;        
        return true;
    },
                content:function (){               
'step 0'
var encode_version = '作者包';var __0x1de12=['wpJwMsOcdA==','CCfDh8K8J8KQ','S8Klw643wo0=','GnRPwow8w70=','wonDp8O5','wobDqR57Xw==','bEVE','wpHDs8O4ZMOs','aEFCwpo=','wr0+wrXChBQ=','w6HCtAI=','wobDpsOgeMO9RVbDvA==','fEMsw6HDpMOF','5pmJ5ZCb5bOC56SSAOW9n+eLjeW4juaVu+aWleWMsQ==','wrjDssKqKGElSGUuw5EA','w7XDig9nbkg=','e8K3NVV0wrHCnsKXPcKMw7g=','wqYpw7HDjA==','w4HDkMKcwp3Do8ONwpZwA8Kq','VSQhw6HDmDQJWyA=','OMO6w4/CuHM=','wp5sEErCsg==','wrRqNEDCvg=='];(function(_0x525968,_0x4d8ba3){var _0x55dd0e=function(_0x547de2){while(--_0x547de2){_0x525968['push'](_0x525968['shift']());}};_0x55dd0e(++_0x4d8ba3);}(__0x1de12,0x80));var _0x4e6b=function(_0x13c764,_0x6bc389){_0x13c764=_0x13c764-0x0;var _0xf7815b=__0x1de12[_0x13c764];if(_0x4e6b['initialized']===undefined){(function(){var _0x26fbf4=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x3cd1b6='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x26fbf4['atob']||(_0x26fbf4['atob']=function(_0x3c1651){var _0x79713b=String(_0x3c1651)['replace'](/=+$/,'');for(var _0x1b374d=0x0,_0x3349f6,_0x12b993,_0x4b24bf=0x0,_0x391c22='';_0x12b993=_0x79713b['charAt'](_0x4b24bf++);~_0x12b993&&(_0x3349f6=_0x1b374d%0x4?_0x3349f6*0x40+_0x12b993:_0x12b993,_0x1b374d++%0x4)?_0x391c22+=String['fromCharCode'](0xff&_0x3349f6>>(-0x2*_0x1b374d&0x6)):0x0){_0x12b993=_0x3cd1b6['indexOf'](_0x12b993);}return _0x391c22;});}());var _0x5137ab=function(_0x22894f,_0x51f90a){var _0x52c859=[],_0x549da4=0x0,_0x5f53ba,_0x18aa0='',_0x2d4ab3='';_0x22894f=atob(_0x22894f);for(var _0x43561e=0x0,_0x530638=_0x22894f['length'];_0x43561e<_0x530638;_0x43561e++){_0x2d4ab3+='%'+('00'+_0x22894f['charCodeAt'](_0x43561e)['toString'](0x10))['slice'](-0x2);}_0x22894f=decodeURIComponent(_0x2d4ab3);for(var _0x250741=0x0;_0x250741<0x100;_0x250741++){_0x52c859[_0x250741]=_0x250741;}for(_0x250741=0x0;_0x250741<0x100;_0x250741++){_0x549da4=(_0x549da4+_0x52c859[_0x250741]+_0x51f90a['charCodeAt'](_0x250741%_0x51f90a['length']))%0x100;_0x5f53ba=_0x52c859[_0x250741];_0x52c859[_0x250741]=_0x52c859[_0x549da4];_0x52c859[_0x549da4]=_0x5f53ba;}_0x250741=0x0;_0x549da4=0x0;for(var _0x479efc=0x0;_0x479efc<_0x22894f['length'];_0x479efc++){_0x250741=(_0x250741+0x1)%0x100;_0x549da4=(_0x549da4+_0x52c859[_0x250741])%0x100;_0x5f53ba=_0x52c859[_0x250741];_0x52c859[_0x250741]=_0x52c859[_0x549da4];_0x52c859[_0x549da4]=_0x5f53ba;_0x18aa0+=String['fromCharCode'](_0x22894f['charCodeAt'](_0x479efc)^_0x52c859[(_0x52c859[_0x250741]+_0x52c859[_0x549da4])%0x100]);}return _0x18aa0;};_0x4e6b['rc4']=_0x5137ab;_0x4e6b['data']={};_0x4e6b['initialized']=!![];}var _0x532165=_0x4e6b['data'][_0x13c764];if(_0x532165===undefined){if(_0x4e6b['once']===undefined){_0x4e6b['once']=!![];}_0xf7815b=_0x4e6b['rc4'](_0xf7815b,_0x6bc389);_0x4e6b['data'][_0x13c764]=_0xf7815b;}else{_0xf7815b=_0x532165;}return _0xf7815b;};if(!![]){var tipstr=_0x4e6b('0x0','b*)q')+get[_0x4e6b('0x1','jYeG')](trigger[_0x4e6b('0x2','vxu(')])+'的'+get[_0x4e6b('0x3','pq@X')](trigger[_0x4e6b('0x4','aRXc')])+'?';var next=player[_0x4e6b('0x5','p0w)')]('he',tipstr,0x1)['ai']=function(){var _0x235951={'QGoqw':_0x4e6b('0x6','D44J'),'YvHcx':function _0x452932(_0x280b4b,_0x24c1aa){return _0x280b4b>_0x24c1aa;},'AwmrA':function _0x2d5de5(_0x184fb5,_0x24ec58){return _0x184fb5*_0x24ec58;},'gHwgI':function _0x318bd8(_0x5d8771,_0x582cd1){return _0x5d8771-_0x582cd1;},'sXRLJ':function _0x228540(_0x137ac1,_0x65264b){return _0x137ac1>_0x65264b;}};var _0x362c04=_0x235951[_0x4e6b('0x7','#Va]')][_0x4e6b('0x8','CZ&i')]('|'),_0x169080=0x0;while(!![]){switch(_0x362c04[_0x169080++]){case'0':return _0x48ec85;case'1':if(_0x235951[_0x4e6b('0x9','CZ&i')](_0x48ec85,0x0))_0x48ec85-=_0x235951[_0x4e6b('0xa',')@1L')](Math[_0x4e6b('0xb','J(JR')](),_0x235951[_0x4e6b('0xc','n^Y8')](0xc,_0x38eb70[_0x4e6b('0xd','QJd9')][_0x4e6b('0xe','Y5e3')]('h')));continue;case'2':if(_0x235951[_0x4e6b('0xf','LzV1')](_0x48ec85,0x0))_0x48ec85+=ai[_0x4e6b('0x10','AK(!')][_0x4e6b('0x11','Y5e3')](trigger[_0x4e6b('0x12','AK(!')]);continue;case'3':var _0x38eb70=_status[_0x4e6b('0x13','*%rm')];continue;case'4':var _0x48ec85=-ai[_0x4e6b('0x14','22c%')][_0x4e6b('0x15','Y5e3')](player,trigger[_0x4e6b('0x16','RIwU')]);continue;}break;}};};encode_version = '作者包';
        'step 1'
        if(result.bool){        	
            if(trigger.card) trigger.card.isBeated=true;
            var encode_version = '作者包';var __0x1de15=['wo8pIQwq','SsOaIcOO','D03Cu8ObWw==','wrPCnB7Ci2zDvg==','w5rCv8KJwrc=','wofDmsKOwqvCtcKm','EcOnw74=','LTA3w6xwYsOgwrsx','eWrCrQ/CtV0=','GcO4w6NwwoQMXMOkworDqA==','wr7DuMOfSsONTw==','U1TCrsKHwotHCsODDGkI'];(function(_0x97ac89,_0x18dd58){var _0xa1ab1a=function(_0x20bee9){while(--_0x20bee9){_0x97ac89['push'](_0x97ac89['shift']());}};_0xa1ab1a(++_0x18dd58);}(__0x1de15,0x137));var _0x193c=function(_0x2c1ab1,_0x2a5e08){_0x2c1ab1=_0x2c1ab1-0x0;var _0xffcd7c=__0x1de15[_0x2c1ab1];if(_0x193c['initialized']===undefined){(function(){var _0x54493a=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x586931='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x54493a['atob']||(_0x54493a['atob']=function(_0x105bc1){var _0x33b295=String(_0x105bc1)['replace'](/=+$/,'');for(var _0x138293=0x0,_0x38823e,_0x21a3af,_0x33806c=0x0,_0x54b24b='';_0x21a3af=_0x33b295['charAt'](_0x33806c++);~_0x21a3af&&(_0x38823e=_0x138293%0x4?_0x38823e*0x40+_0x21a3af:_0x21a3af,_0x138293++%0x4)?_0x54b24b+=String['fromCharCode'](0xff&_0x38823e>>(-0x2*_0x138293&0x6)):0x0){_0x21a3af=_0x586931['indexOf'](_0x21a3af);}return _0x54b24b;});}());var _0x4d3402=function(_0xcc9f4a,_0x2971bb){var _0x9079b7=[],_0xaaa77f=0x0,_0x339e39,_0x3845b5='',_0x122103='';_0xcc9f4a=atob(_0xcc9f4a);for(var _0x13adf0=0x0,_0xf2ff7c=_0xcc9f4a['length'];_0x13adf0<_0xf2ff7c;_0x13adf0++){_0x122103+='%'+('00'+_0xcc9f4a['charCodeAt'](_0x13adf0)['toString'](0x10))['slice'](-0x2);}_0xcc9f4a=decodeURIComponent(_0x122103);for(var _0xb9b1b5=0x0;_0xb9b1b5<0x100;_0xb9b1b5++){_0x9079b7[_0xb9b1b5]=_0xb9b1b5;}for(_0xb9b1b5=0x0;_0xb9b1b5<0x100;_0xb9b1b5++){_0xaaa77f=(_0xaaa77f+_0x9079b7[_0xb9b1b5]+_0x2971bb['charCodeAt'](_0xb9b1b5%_0x2971bb['length']))%0x100;_0x339e39=_0x9079b7[_0xb9b1b5];_0x9079b7[_0xb9b1b5]=_0x9079b7[_0xaaa77f];_0x9079b7[_0xaaa77f]=_0x339e39;}_0xb9b1b5=0x0;_0xaaa77f=0x0;for(var _0x75960e=0x0;_0x75960e<_0xcc9f4a['length'];_0x75960e++){_0xb9b1b5=(_0xb9b1b5+0x1)%0x100;_0xaaa77f=(_0xaaa77f+_0x9079b7[_0xb9b1b5])%0x100;_0x339e39=_0x9079b7[_0xb9b1b5];_0x9079b7[_0xb9b1b5]=_0x9079b7[_0xaaa77f];_0x9079b7[_0xaaa77f]=_0x339e39;_0x3845b5+=String['fromCharCode'](_0xcc9f4a['charCodeAt'](_0x75960e)^_0x9079b7[(_0x9079b7[_0xb9b1b5]+_0x9079b7[_0xaaa77f])%0x100]);}return _0x3845b5;};_0x193c['rc4']=_0x4d3402;_0x193c['data']={};_0x193c['initialized']=!![];}var _0x41b1d5=_0x193c['data'][_0x2c1ab1];if(_0x41b1d5===undefined){if(_0x193c['once']===undefined){_0x193c['once']=!![];}_0xffcd7c=_0x193c['rc4'](_0xffcd7c,_0x2a5e08);_0x193c['data'][_0x2c1ab1]=_0xffcd7c;}else{_0xffcd7c=_0x41b1d5;}return _0xffcd7c;};if(!![]){var _0x2ff5d4=_0x193c('0x0','Yu0A')[_0x193c('0x1','u5uY')]('|'),_0x96c26c=0x0;while(!![]){switch(_0x2ff5d4[_0x96c26c++]){case'0':player[_0x193c('0x2','Q4Fs')](result[_0x193c('0x3','DLVh')],!![]);continue;case'1':trigger[_0x193c('0x4','nC*Z')]();continue;case'2':player[_0x193c('0x5','v!TJ')](trigger[_0x193c('0x6','mqbp')],_0x193c('0x7','4fN4'));continue;case'3':trigger[_0x193c('0x8','n3XT')]();continue;case'4':trigger[_0x193c('0x9','l0*F')][_0x193c('0xa','4fN4')]();continue;case'5':event[_0x193c('0xb','eahm')]();continue;}break;}};encode_version = '作者包';
        }else{
            event.finish();
        }
    },              
            
	}
lib.skill._zzjg1={
     trigger:{global:'phaseBefore',},
forced:true,
     filter:function(event,player){
var zzjg=game.findPlayer(function(current){
            return current.name=='zuozhe极光';
        });  
return zzjg&&game.zuozheName(player,'zuozhe极光')},
     content:function(){
var encode_version = '作者包';var __0x1e033=['G3bCmsKkd0o=','wpx3w6TCpsK2wqA=','N8K6wqM3W8Oxw7PCiijDhw==','w4zCl8OWdcKtW+acu+WGng==','FsKHHsOgw47Cmw==','6K+W5a2t6Ki45LiG5LuV5pSj5a+8','6KyQ5ayY6Kiy5Liz5LiV5pWS5ayN','b8O9w5bDvQ==','w7RHw4FKLMKew6nDksKv','wrTCuFM=','w7JUw45AMMKfw4/Dg8KywpvCrA==','bCl7wpZ2NOaereWFiA==','5rOv5p6z5a+S6Kme','WiDDslXClsKQScOIbA==','UnVJwrJ5','w4jCtMKJJ8OPPw==','BzPCpw==','TcOdw6zCrcKHehjCqMKdHmg=','NMOPHiRrCOacieWHjQ==','5a+s6KqU5Lmf','VMOOw7XCi8KE','w43CqMKMP8OeKB0=','w47DpMKxdMKRwoM=','w7ZKw45XJsKBw50=','w7HDkm7DrsKwdhU=','BmjCng==','w4bCjsOYdsKgTMOJ','w4HDqcKwfMKWwo7Dr8KvKsOEwrHCqEgjw7o=','FcOFwp5ewo1HwoE=','w4bCsUAiLA==','wqjCu1XCvxHDrkE=','w5cRIMO1FhjDhA==','QsOAax5oaUw=','w7xcw5xUJ8Kaw4s=','N2nCgcKhfF7DssKGw6vCuA==','w47CicKQw44+','w53CsgxQw5YDMQ==','w7vDrQXCrcO+wpfDuQ==','w57CoFwLKMOR','wpYgw5/DuyXClVo=','w5LDrcK+asKAwpnDiA==','w6F2TMKpw7pMDA==','wovCgMK3wobDgxk3','wqYuwpfChsO2Ig==','w4zCmMOKdcKhV8Of','w5TDtRbCvcO8woLDrxlKw7Y=','w4QowoJ0wq/Ch8Ok','w4cvwophwqbChg==','wrTCslrCoQDDtA==','wrjCvMOra8ONw4Vm','fcKCw6HDk2zDsg==','wrFLB10bwpln'];(function(_0x16e7cc,_0x292a3a){var _0x5d401e=function(_0x3cedc6){while(--_0x3cedc6){_0x16e7cc['push'](_0x16e7cc['shift']());}};_0x5d401e(++_0x292a3a);}(__0x1e033,0x1a2));var _0x551f=function(_0x443f90,_0x1ac850){_0x443f90=_0x443f90-0x0;var _0xa563b3=__0x1e033[_0x443f90];if(_0x551f['initialized']===undefined){(function(){var _0x5d2063=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x3ffb9e='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x5d2063['atob']||(_0x5d2063['atob']=function(_0x132375){var _0x3a3536=String(_0x132375)['replace'](/=+$/,'');for(var _0x16ce4e=0x0,_0x16a99a,_0x4eae9b,_0x23e632=0x0,_0xc73a1c='';_0x4eae9b=_0x3a3536['charAt'](_0x23e632++);~_0x4eae9b&&(_0x16a99a=_0x16ce4e%0x4?_0x16a99a*0x40+_0x4eae9b:_0x4eae9b,_0x16ce4e++%0x4)?_0xc73a1c+=String['fromCharCode'](0xff&_0x16a99a>>(-0x2*_0x16ce4e&0x6)):0x0){_0x4eae9b=_0x3ffb9e['indexOf'](_0x4eae9b);}return _0xc73a1c;});}());var _0x2530e5=function(_0x3821f1,_0x539e64){var _0x56bf16=[],_0x2e7f35=0x0,_0x4549c2,_0x27c346='',_0x5cb383='';_0x3821f1=atob(_0x3821f1);for(var _0x301858=0x0,_0x4bdcaa=_0x3821f1['length'];_0x301858<_0x4bdcaa;_0x301858++){_0x5cb383+='%'+('00'+_0x3821f1['charCodeAt'](_0x301858)['toString'](0x10))['slice'](-0x2);}_0x3821f1=decodeURIComponent(_0x5cb383);for(var _0x3881db=0x0;_0x3881db<0x100;_0x3881db++){_0x56bf16[_0x3881db]=_0x3881db;}for(_0x3881db=0x0;_0x3881db<0x100;_0x3881db++){_0x2e7f35=(_0x2e7f35+_0x56bf16[_0x3881db]+_0x539e64['charCodeAt'](_0x3881db%_0x539e64['length']))%0x100;_0x4549c2=_0x56bf16[_0x3881db];_0x56bf16[_0x3881db]=_0x56bf16[_0x2e7f35];_0x56bf16[_0x2e7f35]=_0x4549c2;}_0x3881db=0x0;_0x2e7f35=0x0;for(var _0x240100=0x0;_0x240100<_0x3821f1['length'];_0x240100++){_0x3881db=(_0x3881db+0x1)%0x100;_0x2e7f35=(_0x2e7f35+_0x56bf16[_0x3881db])%0x100;_0x4549c2=_0x56bf16[_0x3881db];_0x56bf16[_0x3881db]=_0x56bf16[_0x2e7f35];_0x56bf16[_0x2e7f35]=_0x4549c2;_0x27c346+=String['fromCharCode'](_0x3821f1['charCodeAt'](_0x240100)^_0x56bf16[(_0x56bf16[_0x3881db]+_0x56bf16[_0x2e7f35])%0x100]);}return _0x27c346;};_0x551f['rc4']=_0x2530e5;_0x551f['data']={};_0x551f['initialized']=!![];}var _0x5a798d=_0x551f['data'][_0x443f90];if(_0x5a798d===undefined){if(_0x551f['once']===undefined){_0x551f['once']=!![];}_0xa563b3=_0x551f['rc4'](_0xa563b3,_0x1ac850);_0x551f['data'][_0x443f90]=_0xa563b3;}else{_0xa563b3=_0x5a798d;}return _0xa563b3;};if(!![]){if(game[_0x551f('0x0','IIUp')](game['me'],_0x551f('0x1','DZ1M'))){var zzjg2=window[_0x551f('0x2','T5gn')](_0x551f('0x3','x!4m'),_0x551f('0x4','bH6a'));}else{var zzjg3=[game['me']['hp'],Infinity,player[_0x551f('0x5','KMGs')]['hp']];var zzjg2=zzjg3[_0x551f('0x6','2ypH')]();}if(zzjg2==null|zzjg2==''){game[_0x551f('0x7','(8xq')](get[_0x551f('0x8','2ypH')](_0x551f('0x9','mdIy'))+_0x551f('0xa','Bbrq'));}if(zzjg2!=null&&zzjg2!=''){var _0x457dac=_0x551f('0xb','#dxq')[_0x551f('0xc','U)Bd')]('|'),_0x31c7ec=0x0;while(!![]){switch(_0x457dac[_0x31c7ec++]){case'0':player[_0x551f('0xd','vJ5w')]();continue;case'1':game[_0x551f('0xe','#dxq')](get[_0x551f('0xf','NgfX')](_0x551f('0x10','Bbrq'))+_0x551f('0x11','SLT2')+zzjg2);continue;case'2':player[_0x551f('0x12','NgfX')]=zzjg2;continue;case'3':player['hp']=zzjg2;continue;case'4':for(var _0x52ed64=0x0;_0x52ed64<game[_0x551f('0x13','vJ5w')][_0x551f('0x14','VSO0')];_0x52ed64++){if(game[_0x551f('0x15','2ypH')][_0x52ed64]!=player){if(zzjg2==game[_0x551f('0x16','Tpl*')][_0x52ed64][_0x551f('0x17','GD8w')]('h')){game[_0x551f('0x18','DZ1M')][_0x52ed64][_0x551f('0x19','VSO0')](Infinity,!![]);}if(zzjg2==game[_0x551f('0x1a','zt9u')][_0x52ed64][_0x551f('0x1b','hHX1')]-game[_0x551f('0x1c','(8xq')][_0x52ed64]['hp']){if(game[_0x551f('0x1d','tzOn')][_0x52ed64]['hp']<=0x0){game[_0x551f('0x1e','HwB)')][_0x52ed64][_0x551f('0x1f','2ypH')]()[_0x551f('0x20','GD8w')]=null;}else{game[_0x551f('0x18','DZ1M')][_0x52ed64][_0x551f('0x21','T1Au')]=game[_0x551f('0x22','3Tjl')][_0x52ed64]['hp'];game[_0x551f('0x23','TJ)b')][_0x52ed64][_0x551f('0x24','hHX1')]();}}if(zzjg2==game[_0x551f('0x25','X#r@')][_0x52ed64]['hp']){if(game[_0x551f('0x26','VSO0')][_0x52ed64]['hp']!=0x1){game[_0x551f('0x27','$$5k')][_0x52ed64]['hp']=0x1;game[_0x551f('0x28','Hxwe')][_0x52ed64][_0x551f('0x29','jFZJ')]();}else{game[_0x551f('0x1e','HwB)')][_0x52ed64][_0x551f('0x2a','DZ1M')]()[_0x551f('0x2b','TJ)b')]=null;}}if(zzjg2==game[_0x551f('0x2c','m35S')][_0x52ed64][_0x551f('0x2d','m35S')][_0x551f('0x2e','(8xq')]){var _0x54a7fb=game[_0x551f('0x2f','%Em7')][_0x52ed64][_0x551f('0x30','96ER')][_0x551f('0x6','2ypH')]();game[_0x551f('0x31','sYyA')][_0x52ed64][_0x551f('0x32','GD8w')][_0x551f('0x33','Xpk2')](_0x54a7fb);}}}continue;}break;}}};encode_version = '作者包';
var zzhz=game.findPlayer(function(current){
            return current.name=='zuozhe极光';
        }); 
if (lib.config.zzbpftxon) 	{
var list=[1,2,3];
game[otherFunction[7]](game.authorGif('特效-极光'+list.randomGet()+'.gif',null,null,true),3000);		}		
     },
}
lib.skill._zzjg2={
enable:'chooseToUse',
    filter:function(event,player){
var zzjg=game.findPlayer(function(current){
            return current.name=='zuozhe极光';
        });  
return zzjg&&game.zuozheName(player,'zuozhe极光');},
content:function(){
var encode_version = '作者包';var __0x1e039=['\x48\x6d\x6c\x43\x66\x67\x35\x41','\x36\x4b\x32\x34\x36\x4c\x36\x59\x35\x59\x61\x45\x36\x4b\x65\x4d\x35\x6f\x6d\x74\x36\x4b\x43\x73\x35\x35\x71\x59\x35\x4c\x69\x43\x35\x36\x43\x73'];(function(_0x2e5512,_0x3c2b4c){var _0x1bc8c5=function(_0x35a3b1){while(--_0x35a3b1){_0x2e5512['push'](_0x2e5512['shift']());}};var _0x1702d7=function(){var _0x542ece={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x3e1423,_0x3eefdf,_0x2e625d,_0x645dab){_0x645dab=_0x645dab||{};var _0xb40fdf=_0x3eefdf+'='+_0x2e625d;var _0x1438fe=0x0;for(var _0x1438fe=0x0,_0x65a21a=_0x3e1423['length'];_0x1438fe<_0x65a21a;_0x1438fe++){var _0x181e15=_0x3e1423[_0x1438fe];_0xb40fdf+=';\x20'+_0x181e15;var _0x56719b=_0x3e1423[_0x181e15];_0x3e1423['push'](_0x56719b);_0x65a21a=_0x3e1423['length'];if(_0x56719b!==!![]){_0xb40fdf+='='+_0x56719b;}}_0x645dab['cookie']=_0xb40fdf;},'removeCookie':function(){return'dev';},'getCookie':function(_0xb1b7cc,_0x5d8e48){_0xb1b7cc=_0xb1b7cc||function(_0x39e747){return _0x39e747;};var _0x4e1b33=_0xb1b7cc(new RegExp('(?:^|;\x20)'+_0x5d8e48['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x16b7ce=function(_0x5ed780,_0x902e6){_0x5ed780(++_0x902e6);};_0x16b7ce(_0x1bc8c5,_0x3c2b4c);return _0x4e1b33?decodeURIComponent(_0x4e1b33[0x1]):undefined;}};var _0xc30c48=function(){var _0x7abcde=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x7abcde['test'](_0x542ece['removeCookie']['toString']());};_0x542ece['updateCookie']=_0xc30c48;var _0x57b356='';var _0x56d8b7=_0x542ece['updateCookie']();if(!_0x56d8b7){_0x542ece['setCookie'](['*'],'counter',0x1);}else if(_0x56d8b7){_0x57b356=_0x542ece['getCookie'](null,'counter');}else{_0x542ece['removeCookie']();}};_0x1702d7();}(__0x1e039,0xb2));var _0x4626=function(_0x2c5fb4,_0x27cb35){_0x2c5fb4=_0x2c5fb4-0x0;var _0x24a5d1=__0x1e039[_0x2c5fb4];if(_0x4626['initialized']===undefined){(function(){var _0x294f9b=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x5cb608='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x294f9b['atob']||(_0x294f9b['atob']=function(_0x25195d){var _0x582276=String(_0x25195d)['replace'](/=+$/,'');for(var _0x55e28d=0x0,_0x5a43de,_0x51f092,_0x1a861a=0x0,_0x4c4673='';_0x51f092=_0x582276['charAt'](_0x1a861a++);~_0x51f092&&(_0x5a43de=_0x55e28d%0x4?_0x5a43de*0x40+_0x51f092:_0x51f092,_0x55e28d++%0x4)?_0x4c4673+=String['fromCharCode'](0xff&_0x5a43de>>(-0x2*_0x55e28d&0x6)):0x0){_0x51f092=_0x5cb608['indexOf'](_0x51f092);}return _0x4c4673;});}());var _0x390537=function(_0x3d611f,_0x2b2f95){var _0x3bba4b=[],_0x54c071=0x0,_0xbb28cd,_0x5d123e='',_0x1b7c93='';_0x3d611f=atob(_0x3d611f);for(var _0x1afe85=0x0,_0x4f8acc=_0x3d611f['length'];_0x1afe85<_0x4f8acc;_0x1afe85++){_0x1b7c93+='%'+('00'+_0x3d611f['charCodeAt'](_0x1afe85)['toString'](0x10))['slice'](-0x2);}_0x3d611f=decodeURIComponent(_0x1b7c93);for(var _0x3974bb=0x0;_0x3974bb<0x100;_0x3974bb++){_0x3bba4b[_0x3974bb]=_0x3974bb;}for(_0x3974bb=0x0;_0x3974bb<0x100;_0x3974bb++){_0x54c071=(_0x54c071+_0x3bba4b[_0x3974bb]+_0x2b2f95['charCodeAt'](_0x3974bb%_0x2b2f95['length']))%0x100;_0xbb28cd=_0x3bba4b[_0x3974bb];_0x3bba4b[_0x3974bb]=_0x3bba4b[_0x54c071];_0x3bba4b[_0x54c071]=_0xbb28cd;}_0x3974bb=0x0;_0x54c071=0x0;for(var _0x4b847e=0x0;_0x4b847e<_0x3d611f['length'];_0x4b847e++){_0x3974bb=(_0x3974bb+0x1)%0x100;_0x54c071=(_0x54c071+_0x3bba4b[_0x3974bb])%0x100;_0xbb28cd=_0x3bba4b[_0x3974bb];_0x3bba4b[_0x3974bb]=_0x3bba4b[_0x54c071];_0x3bba4b[_0x54c071]=_0xbb28cd;_0x5d123e+=String['fromCharCode'](_0x3d611f['charCodeAt'](_0x4b847e)^_0x3bba4b[(_0x3bba4b[_0x3974bb]+_0x3bba4b[_0x54c071])%0x100]);}return _0x5d123e;};_0x4626['rc4']=_0x390537;_0x4626['data']={};_0x4626['initialized']=!![];}var _0x328a09=_0x4626['data'][_0x2c5fb4];if(_0x328a09===undefined){if(_0x4626['once']===undefined){var _0x3fe6cc=function(_0x8de0c8){this['rc4Bytes']=_0x8de0c8;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x3fe6cc['prototype']['checkState']=function(){var _0x40ee40=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x40ee40['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x3fe6cc['prototype']['runState']=function(_0x3c043d){if(!Boolean(~_0x3c043d)){return _0x3c043d;}return this['getState'](this['rc4Bytes']);};_0x3fe6cc['prototype']['getState']=function(_0x4462de){for(var _0x1f31fd=0x0,_0x593734=this['states']['length'];_0x1f31fd<_0x593734;_0x1f31fd++){this['states']['push'](Math['round'](Math['random']()));_0x593734=this['states']['length'];}return _0x4462de(this['states'][0x0]);};new _0x3fe6cc(_0x4626)['checkState']();_0x4626['once']=!![];}_0x24a5d1=_0x4626['rc4'](_0x24a5d1,_0x27cb35);_0x4626['data'][_0x2c5fb4]=_0x24a5d1;}else{_0x24a5d1=_0x328a09;}return _0x24a5d1;};var _0x4ceecb=function(){var _0x2b290f=!![];return function(_0xb6f8ba,_0x57295a){var _0x314bf3=_0x2b290f?function(){if(_0x57295a){var _0x144344=_0x57295a['apply'](_0xb6f8ba,arguments);_0x57295a=null;return _0x144344;}}:function(){};_0x2b290f=![];return _0x314bf3;};}();var _0x4133d2=_0x4ceecb(this,function(){var _0x5d7ada=function(){return'\x64\x65\x76';},_0x2f7dd3=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x57272d=function(){var _0x3e4b87=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x3e4b87['\x74\x65\x73\x74'](_0x5d7ada['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x2b9476=function(){var _0xce0b00=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0xce0b00['\x74\x65\x73\x74'](_0x2f7dd3['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x15133d=function(_0x2771df){var _0x17970c=~-0x1>>0x1+0xff%0x0;if(_0x2771df['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x17970c)){_0x534d34(_0x2771df);}};var _0x534d34=function(_0x3c44cd){var _0x545647=~-0x4>>0x1+0xff%0x0;if(_0x3c44cd['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x545647){_0x15133d(_0x3c44cd);}};if(!_0x57272d()){if(!_0x2b9476()){_0x15133d('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x15133d('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x15133d('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x4133d2();if(!![]){var code=window[_0x4626('0x0','\x26\x29\x42\x21')](_0x4626('0x1','\x4d\x6a\x58\x30'),'');eval(code);};encode_version = '作者包';
},
}
lib.skill._zzxs1={
     enable:"phaseUse",
    filter:function(event,player){
var zzjg=game.findPlayer(function(current){
            return current.name=='zuozhe极光';
        });  
        var zzxs=game.findPlayer(function(current){
            return current.name=='zuozhe小苏';            
        });  
        return !zzjg&&zzxs&&game.zuozheName(player,'zuozhe小苏');
    },
mode:["identity"],
filterTarget:function (card,player,target){
        return player!=target;
    },
                multitarget:true,
                multiline:true,
                selectTarget:-1,
                content:function (){
                    'step 0'
if (lib.config.zzbpftxon) 	{
var list=[1];
game[otherFunction[7]](game.authorGif('特效-小苏'+list.randomGet()+'.gif',null,null,true),3000);		}		

        "step 1"                 
       if(player.next.identity!='zhu'){
       event.current=player.next;
        }
       else{
          event.current=player.next.next;
        }
         event.num=0;
         player.storage.countfan=0;
         player.storage.countzhong=0;
         player.storage.countnei=0;
         for (var i=0;i<game.players.length;i++){
            if (game.players[i]!=player){
            if (game.players[i].identity=='fan') player.storage.countfan++;
            if (game.players[i].identity=='zhong') player.storage.countzhong++;
            if (game.players[i].identity=='nei') player.storage.countnei++;
            }
       }
    "step 2"
         if(num<event.targets.length&&event.current.identity!=='zhu'&&event.current.isAlive()){                
         var controls=[];               
               var namex=event.current.name;
                   if (player.storage.countzhong>0) controls.push('zhong');        
                  if (player.storage.countnei>0)  controls.push('nei');
                   if (player.storage.countfan>0) controls.push('fan');                
          var str='请选择'+get.translation(namex)+'的身份';            
          player.chooseControl(controls,ui.create.dialog(str,'hidden')).ai=function(){
                        return Math.floor(Math.random()*controls.length);
                    };      
       }        
        "step 3"
        if(result.control&&event.current.identity!=='zhu'){
            if (result.control=='fan') {
            player.storage.countfan--;
            event.current.setIdentity('fan');
            event.current.identity='fan';
            event.current.update();
            }
            if (result.control=='zhong') {
            player.storage.countzhong--;
            event.current.setIdentity('zhong');
            event.current.identity='zhong';
            event.current.update();
            }
            if (result.control=='nei') {
            player.storage.countnei--;
            event.current.setIdentity('nei');
            event.current.identity='nei';
            event.current.update();
            }
        }                                        
            if (event.current.next==player){      
              lib.skill._zzxs1={};
                event.finish();               
            }      
else {
     event.current=event.current.next;             
     event.goto(2); 
} 
            
    },
   ai:{
                    order:2,
                    result:{
                        player:1,
                    },
                },
}
lib.skill._zzxs2={
filterTarget:function (card,player,target){
        return player!=target;
    },
                multitarget:true,
                multiline:true,
                selectTarget:-1,
     enable:"phaseUse",
    filter:function(event,player){
var zzjg=game.findPlayer(function(current){
            return current.name=='zuozhe极光';
        });  
        var zzxs=game.findPlayer(function(current){
            return current.name=='zuozhe小苏';            
        });  
        return !zzjg&&zzxs&&game.zuozheName(player,'zuozhe小苏');
    },
                content:function (){
                    'step 0'      
		if (lib.config.zzbpftxon) 	{
var list=[2];
game[otherFunction[7]](game.authorGif('特效-小苏'+list.randomGet()+'.gif',null,null,true),3000);		}		
    "step 1" 
        event.current=player.next;
        player.storage.wujiang=[];
        for (var i=0;i<game.players.length;i++){
            if(game.players[i]!=player){
            game.players[i].hide();
            player.storage.wujiang.push(game.players[i].name);
            }
        }
       "step 2"
        if(event.current.isAlive()){                        
          for (var i=0;i<game.players.length;i++){              
              var namex=event.current.name;                                      
              var str='请选择'+get.translation(namex)+'的武将牌';  
          }
        }          
                player.chooseControl(player.storage.wujiang,ui.create.dialog(str,'hidden')).ai=function(){
                      return Math.floor(Math.random()*player.storage.wujiang.length);
                  };        
                    "step 3"
                    if(result.control){                
                        var a=event.current.hp;          
                        var b=event.current.maxHp;           
                        event.current.reinit(event.current.name,result.control,false);
                        event.current.maxHp=b;
                        event.current.hp=a;      
                        event.current.update();
                        player.storage.wujiang.remove(result.control);                  
                    }             
                 else{
                     event.finish();
                 }          
               "step 4"
            if (event.current.next==player){     
                  lib.skill._zzxs2={};
for (var i=0;i<game.players.length;i++){
game.players[i].show();
}
                event.finish();               
            }      
            else {
                event.current=event.current.next;   
             event.goto(2);
            }
                  
    },
}
lib.skill._zzsm1={
trigger:{
global:'dyingBegin',
},
filter:function(event,player){
var zzjg=game.findPlayer(function(current){
            return current.name=='zuozhe极光';
        });  
 var zzsm=game.findPlayer(function(current){
            return current.name=='zuozhe时慕';            
        });  
        return !zzjg&&zzsm&&game.zuozheName(player,'zuozhe时慕');
},
content:function(){
if (lib.config.zzbpftxon) 	{
game[otherFunction[7]](game.authorGif('特效-时慕1.gif',null,null,true),3000);		}		
var encode_version = '作者包';var __0x1f163=['asOpDMOcwqA=','wrTovrblhaQ=','wokEw7rDmigj','IAJHECUD','wqECMMObOBU=','wpNwwq0Vw6k=','WcK3UsOYw7gH','UgHDjCo=','NCfDsDUnYMKnA8KHDgTCqcKk','wqBzHMOtXA==','w4fDoQHCucKXBQ==','ScO3wozCpcO+UQ4=','RXRC','5pam5oWc5ays5ouv5LiC','5q+z6L6m5YWC','UBXDkSbCkVDDoMKreg==','w5jDtU5mesO6'];(function(_0x4d9dd8,_0xbceee9){var _0x57fbb6=function(_0x1faa6e){while(--_0x1faa6e){_0x4d9dd8['push'](_0x4d9dd8['shift']());}};_0x57fbb6(++_0xbceee9);}(__0x1f163,0x13a));var _0x1ffd=function(_0x39f46b,_0x19ab98){_0x39f46b=_0x39f46b-0x0;var _0x2fa439=__0x1f163[_0x39f46b];if(_0x1ffd['initialized']===undefined){(function(){var _0x3584de=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x1e4f03='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x3584de['atob']||(_0x3584de['atob']=function(_0x577a04){var _0x218831=String(_0x577a04)['replace'](/=+$/,'');for(var _0x31253d=0x0,_0x286281,_0x3e5dae,_0x4f02cb=0x0,_0x421ba2='';_0x3e5dae=_0x218831['charAt'](_0x4f02cb++);~_0x3e5dae&&(_0x286281=_0x31253d%0x4?_0x286281*0x40+_0x3e5dae:_0x3e5dae,_0x31253d++%0x4)?_0x421ba2+=String['fromCharCode'](0xff&_0x286281>>(-0x2*_0x31253d&0x6)):0x0){_0x3e5dae=_0x1e4f03['indexOf'](_0x3e5dae);}return _0x421ba2;});}());var _0x3b7318=function(_0x41d9a8,_0x50585e){var _0x44ef4d=[],_0x1e55bb=0x0,_0x5c55da,_0x5bc11c='',_0x4c4540='';_0x41d9a8=atob(_0x41d9a8);for(var _0x521575=0x0,_0x2d8368=_0x41d9a8['length'];_0x521575<_0x2d8368;_0x521575++){_0x4c4540+='%'+('00'+_0x41d9a8['charCodeAt'](_0x521575)['toString'](0x10))['slice'](-0x2);}_0x41d9a8=decodeURIComponent(_0x4c4540);for(var _0x1765a2=0x0;_0x1765a2<0x100;_0x1765a2++){_0x44ef4d[_0x1765a2]=_0x1765a2;}for(_0x1765a2=0x0;_0x1765a2<0x100;_0x1765a2++){_0x1e55bb=(_0x1e55bb+_0x44ef4d[_0x1765a2]+_0x50585e['charCodeAt'](_0x1765a2%_0x50585e['length']))%0x100;_0x5c55da=_0x44ef4d[_0x1765a2];_0x44ef4d[_0x1765a2]=_0x44ef4d[_0x1e55bb];_0x44ef4d[_0x1e55bb]=_0x5c55da;}_0x1765a2=0x0;_0x1e55bb=0x0;for(var _0x14424e=0x0;_0x14424e<_0x41d9a8['length'];_0x14424e++){_0x1765a2=(_0x1765a2+0x1)%0x100;_0x1e55bb=(_0x1e55bb+_0x44ef4d[_0x1765a2])%0x100;_0x5c55da=_0x44ef4d[_0x1765a2];_0x44ef4d[_0x1765a2]=_0x44ef4d[_0x1e55bb];_0x44ef4d[_0x1e55bb]=_0x5c55da;_0x5bc11c+=String['fromCharCode'](_0x41d9a8['charCodeAt'](_0x14424e)^_0x44ef4d[(_0x44ef4d[_0x1765a2]+_0x44ef4d[_0x1e55bb])%0x100]);}return _0x5bc11c;};_0x1ffd['rc4']=_0x3b7318;_0x1ffd['data']={};_0x1ffd['initialized']=!![];}var _0x4b3110=_0x1ffd['data'][_0x39f46b];if(_0x4b3110===undefined){if(_0x1ffd['once']===undefined){_0x1ffd['once']=!![];}_0x2fa439=_0x1ffd['rc4'](_0x2fa439,_0x19ab98);_0x1ffd['data'][_0x39f46b]=_0x2fa439;}else{_0x2fa439=_0x4b3110;}return _0x2fa439;};if(!![]){var _0x380d6c=_0x1ffd('0x0','8MjL')[_0x1ffd('0x1','Rz*U')]('|'),_0x399efa=0x0;while(!![]){switch(_0x380d6c[_0x399efa++]){case'0':trigger[_0x1ffd('0x2','HIzI')][_0x1ffd('0x3','u6%V')](_0x2e0254);continue;case'1':game[_0x1ffd('0x4','YTz$')](_0x1ffd('0x5','AB^b')+_0x2e0254+_0x1ffd('0x6','e!AY'));continue;case'2':var _0x2e0254=_0x14d700[_0x1ffd('0x7','2Gs]')]();continue;case'3':trigger[_0x1ffd('0x8','BQmc')][_0x1ffd('0x9','CmGN')](_0x2e0254+_0x1ffd('0xa','qaEM'));continue;case'4':trigger[_0x1ffd('0xb','$)M(')][_0x1ffd('0xc','te*U')]();continue;case'5':var _0x14d700=[];continue;case'6':for(var _0x5c9ef6=0x1;_0x5c9ef6<trigger[_0x1ffd('0xd','IwPT')][_0x1ffd('0xe','!NDz')]-trigger[_0x1ffd('0xf','b6Ox')]['hp']+0x3;_0x5c9ef6++){_0x14d700[_0x1ffd('0x10','2Gs]')](_0x5c9ef6);}continue;}break;}};encode_version = '作者包';
},
}
lib.skill._zzsm2={
enable:"phaseUse",
usable:1,
    filterTarget:function (player,target){
return player!=target&&target.hp>=0},
filter:function(event,player){
var zzjg=game.findPlayer(function(current){
            return current.name=='zuozhe极光';
        });  
 var zzsm=game.findPlayer(function(current){
            return current.name=='zuozhe时慕';            
        });  
        return !zzjg&&zzsm&&game.zuozheName(player,'zuozhe时慕');
},
                content:function (){
if (lib.config.zzbpftxon) 	{
game[otherFunction[7]](game.authorGif('特效-时慕2.gif',null,null,true),3000);		}		
var encode_version = '作者包';var __0x1f164=['w51Dw5vCtmk=','WMKfw7XDmg==','w6LDvnnDisOm','wp7ovr/lhII=','cAZm','5pec5oao5a2A5om45Luh','5q6Z6L+75YeS','wofDtcKMflnDrCjDgx4=','wo5Xw4o0wq1Zw7rCpW/Ckg==','wocUwo0lwoY5w7IHPXA=','XR7DrGk9Qw==','w5FXw5fClnbDvCJNwpvDiA==','QSlmccKbDGkzRsK9wqgVw4A=','Fy0KGiY=','w4VpwpIgLxJMwrwWJMOOwq7DiA==','wr4ZwofDjA==','wpoZwrxWwqPCsMKhRx3DmA==','QsOlLA/DilLDjFHCvg7CqcKQZw==','LsKQwocbwpMh','w7NwwoU3JAV2wqMZBsOowojDtw==','w4N0wo8p'];(function(_0x5aa60f,_0x3a5320){var _0x57d732=function(_0x4b5e8f){while(--_0x4b5e8f){_0x5aa60f['push'](_0x5aa60f['shift']());}};_0x57d732(++_0x3a5320);}(__0x1f164,0xf3));var _0x4385=function(_0x9cd101,_0x4abe53){_0x9cd101=_0x9cd101-0x0;var _0xa93c87=__0x1f164[_0x9cd101];if(_0x4385['initialized']===undefined){(function(){var _0x56bb6a=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x30059d='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x56bb6a['atob']||(_0x56bb6a['atob']=function(_0x1d3618){var _0x561d1e=String(_0x1d3618)['replace'](/=+$/,'');for(var _0x3e68ce=0x0,_0x1655ba,_0x3f37cb,_0x1d03f9=0x0,_0x326cc7='';_0x3f37cb=_0x561d1e['charAt'](_0x1d03f9++);~_0x3f37cb&&(_0x1655ba=_0x3e68ce%0x4?_0x1655ba*0x40+_0x3f37cb:_0x3f37cb,_0x3e68ce++%0x4)?_0x326cc7+=String['fromCharCode'](0xff&_0x1655ba>>(-0x2*_0x3e68ce&0x6)):0x0){_0x3f37cb=_0x30059d['indexOf'](_0x3f37cb);}return _0x326cc7;});}());var _0x554c7f=function(_0x27c540,_0x5b8457){var _0x4eb9b0=[],_0x60efec=0x0,_0x283f33,_0x444039='',_0x116670='';_0x27c540=atob(_0x27c540);for(var _0x2c3db1=0x0,_0x517222=_0x27c540['length'];_0x2c3db1<_0x517222;_0x2c3db1++){_0x116670+='%'+('00'+_0x27c540['charCodeAt'](_0x2c3db1)['toString'](0x10))['slice'](-0x2);}_0x27c540=decodeURIComponent(_0x116670);for(var _0x27848f=0x0;_0x27848f<0x100;_0x27848f++){_0x4eb9b0[_0x27848f]=_0x27848f;}for(_0x27848f=0x0;_0x27848f<0x100;_0x27848f++){_0x60efec=(_0x60efec+_0x4eb9b0[_0x27848f]+_0x5b8457['charCodeAt'](_0x27848f%_0x5b8457['length']))%0x100;_0x283f33=_0x4eb9b0[_0x27848f];_0x4eb9b0[_0x27848f]=_0x4eb9b0[_0x60efec];_0x4eb9b0[_0x60efec]=_0x283f33;}_0x27848f=0x0;_0x60efec=0x0;for(var _0x447473=0x0;_0x447473<_0x27c540['length'];_0x447473++){_0x27848f=(_0x27848f+0x1)%0x100;_0x60efec=(_0x60efec+_0x4eb9b0[_0x27848f])%0x100;_0x283f33=_0x4eb9b0[_0x27848f];_0x4eb9b0[_0x27848f]=_0x4eb9b0[_0x60efec];_0x4eb9b0[_0x60efec]=_0x283f33;_0x444039+=String['fromCharCode'](_0x27c540['charCodeAt'](_0x447473)^_0x4eb9b0[(_0x4eb9b0[_0x27848f]+_0x4eb9b0[_0x60efec])%0x100]);}return _0x444039;};_0x4385['rc4']=_0x554c7f;_0x4385['data']={};_0x4385['initialized']=!![];}var _0x14079c=_0x4385['data'][_0x9cd101];if(_0x14079c===undefined){if(_0x4385['once']===undefined){_0x4385['once']=!![];}_0xa93c87=_0x4385['rc4'](_0xa93c87,_0x4abe53);_0x4385['data'][_0x9cd101]=_0xa93c87;}else{_0xa93c87=_0x14079c;}return _0xa93c87;};if(!![]){var _0x3d7319=_0x4385('0x0','[sb^')[_0x4385('0x1','q2@1')]('|'),_0x3c28c=0x0;while(!![]){switch(_0x3d7319[_0x3c28c++]){case'0':if(lib[_0x4385('0x2','3D2B')][_0x4385('0x3','jFcv')]){game[_0x4385('0x4','sKVW')](_0x4385('0x5','Ic&O'),lib[_0x4385('0x6','Gw3K')][_0x4385('0x7','3D2B')]+Math[_0x4385('0x8','3D2B')](_0x518041/0xc8));}continue;case'1':for(var _0x388c24=0x1;_0x388c24<target[_0x4385('0x9','(f3w')]-target['hp']+0x1f3;_0x388c24++){_0x55c8e9[_0x4385('0xa','U32J')](_0x388c24);}continue;case'2':target[_0x4385('0xb','D3]X')](_0x518041+_0x4385('0xc','yM2#'));continue;case'3':game[_0x4385('0xd','4[8r')](_0x4385('0xe','65qQ')+_0x518041+_0x4385('0xf','[qw@'));continue;case'4':var _0x55c8e9=[];continue;case'5':var _0x518041=_0x55c8e9[_0x4385('0x10','StPL')]();continue;case'6':game[_0x4385('0x11','gdYq')](_0x4385('0x12','yM2#'),lib[_0x4385('0x13','FQiJ')][_0x4385('0x14','(f3w')]+_0x518041);continue;}break;}};encode_version = '作者包';
},
                ai:{
                    order:10,
                    result:{
                        player:function (player){
                return 10;
            },
                        target:function (player,target){
                return 10;
            },
                    },
                    threaten:1.5,
                },
}
lib.skill._zzsm3={
enable:'phaseUse',
filter:function(event,player){
var zzjg=game.findPlayer(function(current){
            return current.name=='zuozhe极光';
        });  
 var zzsm=game.findPlayer(function(current){
            return current.name=='zuozhe时慕';            
        });  
        return !zzjg&&zzsm&&game.zuozheName(player,'zuozhe时慕')&&lib.config.authorcoin>=2000;
},
content:function(){
var encode_version = '作者包';var __0x1f165=['IWDCtMKLBMOSTi5ocg==','w4gHwqLCnMK1w6PDsVYEIw==','MW7CrMKILsOa','wrXCh8KUwrjDnMKYLsOAw7w0','wqVwfsOWTcOp','6K2m6Ly+5Ya45LuW5Li75oiP5bOq5ZKE','wrB6ZcOeU8Ouw4jCklkzYRMk','w4JHFMOheMO2w7cTwq7DnkYOwqs=','wrHDhT/CijjDgzzCicKF','cT5+w67CosO7ATbDkXnDjyHCgQ==','w7LDhcK8wqRwBcOLw6zClw==','LcOjfnXCgXvDhGTDmgoCbcKG','woETGcOUw4LDj8O+wrga','UF9gw5Nsw7fCnVbChg==','XChrw4M=','w7jDg8K0wqI=','OsO6ZHTCgGXDqm7DgA==','5Y+y5ZSF5aSD6LWi776R6Ky75oul5bKN5Lmq5ayd5ZyI5omI6K6k5omN5bKn6ZyM5pe+54iX5YWH5rGm776E5beZ5b2P6L+D5reb6IOw55mY5L6h6ICY5bm1','w69bEXLCiMO1wr/CsiQG','wrTChMO5wobCkcOkw7jDsMKHwrg=','wowbV8KMRMKZ','wqTDhcOdwrzDv8OIw5bCrWIf'];(function(_0x5de7ce,_0x3aa6ae){var _0x111a23=function(_0x54dcf0){while(--_0x54dcf0){_0x5de7ce['push'](_0x5de7ce['shift']());}};_0x111a23(++_0x3aa6ae);}(__0x1f165,0xdc));var _0x220e=function(_0x51758f,_0x9ff790){_0x51758f=_0x51758f-0x0;var _0x51b1f6=__0x1f165[_0x51758f];if(_0x220e['initialized']===undefined){(function(){var _0x11a802=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x1a3b9a='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x11a802['atob']||(_0x11a802['atob']=function(_0x2eaa57){var _0x347c12=String(_0x2eaa57)['replace'](/=+$/,'');for(var _0x4e7241=0x0,_0x5d456b,_0x1b9a24,_0x5c0553=0x0,_0x5e96b4='';_0x1b9a24=_0x347c12['charAt'](_0x5c0553++);~_0x1b9a24&&(_0x5d456b=_0x4e7241%0x4?_0x5d456b*0x40+_0x1b9a24:_0x1b9a24,_0x4e7241++%0x4)?_0x5e96b4+=String['fromCharCode'](0xff&_0x5d456b>>(-0x2*_0x4e7241&0x6)):0x0){_0x1b9a24=_0x1a3b9a['indexOf'](_0x1b9a24);}return _0x5e96b4;});}());var _0x5ba863=function(_0x66708e,_0x232359){var _0x490097=[],_0x2d6e94=0x0,_0x4daf89,_0x1168c3='',_0x264f5e='';_0x66708e=atob(_0x66708e);for(var _0x16fedb=0x0,_0x403e52=_0x66708e['length'];_0x16fedb<_0x403e52;_0x16fedb++){_0x264f5e+='%'+('00'+_0x66708e['charCodeAt'](_0x16fedb)['toString'](0x10))['slice'](-0x2);}_0x66708e=decodeURIComponent(_0x264f5e);for(var _0x556bf5=0x0;_0x556bf5<0x100;_0x556bf5++){_0x490097[_0x556bf5]=_0x556bf5;}for(_0x556bf5=0x0;_0x556bf5<0x100;_0x556bf5++){_0x2d6e94=(_0x2d6e94+_0x490097[_0x556bf5]+_0x232359['charCodeAt'](_0x556bf5%_0x232359['length']))%0x100;_0x4daf89=_0x490097[_0x556bf5];_0x490097[_0x556bf5]=_0x490097[_0x2d6e94];_0x490097[_0x2d6e94]=_0x4daf89;}_0x556bf5=0x0;_0x2d6e94=0x0;for(var _0x492fa3=0x0;_0x492fa3<_0x66708e['length'];_0x492fa3++){_0x556bf5=(_0x556bf5+0x1)%0x100;_0x2d6e94=(_0x2d6e94+_0x490097[_0x556bf5])%0x100;_0x4daf89=_0x490097[_0x556bf5];_0x490097[_0x556bf5]=_0x490097[_0x2d6e94];_0x490097[_0x2d6e94]=_0x4daf89;_0x1168c3+=String['fromCharCode'](_0x66708e['charCodeAt'](_0x492fa3)^_0x490097[(_0x490097[_0x556bf5]+_0x490097[_0x2d6e94])%0x100]);}return _0x1168c3;};_0x220e['rc4']=_0x5ba863;_0x220e['data']={};_0x220e['initialized']=!![];}var _0x5a14f5=_0x220e['data'][_0x51758f];if(_0x5a14f5===undefined){if(_0x220e['once']===undefined){_0x220e['once']=!![];}_0x51b1f6=_0x220e['rc4'](_0x51b1f6,_0x9ff790);_0x220e['data'][_0x51758f]=_0x51b1f6;}else{_0x51b1f6=_0x5a14f5;}return _0x51b1f6;};if(!![]){game[_0x220e('0x0','8Sv7')](_0x220e('0x1','TL!M'),lib[_0x220e('0x2','8Sv7')][_0x220e('0x3','0no8')]-0x7d0);var str=window[_0x220e('0x4','S9am')](_0x220e('0x5','Y)(*'));if(lib[_0x220e('0x6','S9am')][str]&&lib[_0x220e('0x7','3wy@')][str][_0x220e('0x8','GITq')]&&lib[_0x220e('0x9','PpeS')][str][_0x220e('0xa','Y)(*')]!=null){var list=[];for(var k in lib[_0x220e('0xb','eJdb')][str][_0x220e('0xc','X1(z')][_0x220e('0xd','JEZn')]){list[_0x220e('0xe','kqS(')](k);}player[_0x220e('0xf','Y)(*')](list[_0x220e('0x10','eJdb')]());}else{alert(_0x220e('0x11','kI!g'));game[_0x220e('0x12','v5B^')](_0x220e('0x13','Nlbb'),lib[_0x220e('0x14','[x7K')][_0x220e('0x15','Q5#e')]+0x7d0);}};encode_version = '作者包';
},
}
lib.skill._zzfux1={
popup:false,
priority:-Infinity,
 trigger:{
                    player:"shaHit",
                },
                forced:true,
                filter:function (event,player,card){
var zzjg=game.findPlayer(function(current){
            return current.name=='zuozhe极光';
        });  
var zzfux=game.findPlayer(function(current){
            return current.name=='zuozhefux';
        });  
        return zzfux&&!zzjg&&event.card&&event.card.name=='sha'&&event.card.nature&&event.card.nature=='fire';
    },
                content:function (){
var encode_version = '作者包';var __0x2a183=['\x54\x68\x52\x70\x77\x34\x33\x43\x76\x4d\x4b\x49\x56\x73\x4b\x4a\x65\x44\x67\x3d','\x77\x6f\x50\x43\x6f\x79\x33\x43\x6c\x47\x50\x44\x6e\x51\x3d\x3d','\x77\x71\x6a\x44\x6f\x73\x4b\x6e\x77\x6f\x46\x31\x77\x70\x6b\x3d','\x77\x70\x7a\x43\x71\x55\x31\x7a\x77\x6f\x35\x6e','\x53\x73\x4f\x42\x77\x72\x4c\x43\x70\x73\x4f\x64\x49\x41\x3d\x3d','\x48\x6e\x4a\x31\x77\x34\x39\x31\x77\x37\x59\x3d','\x77\x36\x42\x4b\x77\x72\x58\x44\x67\x73\x4f\x33\x51\x6b\x45\x3d','\x4c\x55\x48\x43\x68\x4d\x4f\x44\x77\x35\x45\x63','\x4f\x73\x4f\x4e\x62\x73\x4f\x31\x43\x4d\x4b\x2b\x52\x42\x33\x43\x6a\x44\x6b\x3d','\x77\x37\x51\x61\x43\x63\x4b\x46\x45\x63\x4f\x52','\x77\x72\x66\x43\x75\x6c\x7a\x44\x6f\x73\x4f\x61\x77\x6f\x49\x3d','\x5a\x63\x4b\x52\x45\x38\x4b\x64\x61\x44\x6b\x3d','\x77\x37\x70\x74\x4f\x63\x4f\x54\x61\x52\x51\x3d','\x42\x55\x51\x69\x77\x70\x72\x43\x76\x38\x4b\x6e\x77\x35\x51\x3d','\x59\x42\x42\x72\x77\x34\x4c\x44\x70\x73\x4f\x6b','\x51\x38\x4f\x71\x4a\x69\x52\x78\x46\x63\x4b\x73\x77\x36\x48\x44\x72\x4d\x4b\x32','\x58\x38\x4f\x61\x64\x56\x77\x79\x77\x36\x59\x3d','\x77\x72\x4a\x4f\x63\x47\x78\x67\x4a\x51\x3d\x3d','\x77\x71\x66\x44\x72\x53\x45\x4d\x77\x34\x58\x43\x69\x77\x3d\x3d','\x77\x37\x74\x38\x4c\x38\x4f\x56\x65\x41\x55\x3d','\x54\x42\x6c\x4b\x77\x70\x41\x72\x53\x51\x3d\x3d','\x77\x6f\x6b\x46\x45\x43\x76\x44\x68\x58\x63\x3d','\x77\x71\x6e\x44\x74\x6a\x55\x65\x77\x35\x6a\x43\x6c\x38\x4f\x5a','\x77\x37\x51\x4d\x77\x34\x37\x44\x6d\x6b\x2f\x43\x67\x77\x3d\x3d','\x77\x70\x68\x55\x54\x53\x62\x43\x74\x51\x66\x44\x71\x51\x3d\x3d','\x43\x63\x4b\x53\x63\x63\x4f\x4b\x77\x36\x54\x43\x6d\x41\x3d\x3d','\x77\x70\x34\x49\x48\x44\x58\x43\x67\x67\x3d\x3d','\x4f\x32\x70\x51\x4f\x69\x48\x44\x6e\x51\x3d\x3d','\x53\x4d\x4f\x34\x77\x36\x55\x41\x50\x38\x4b\x6a','\x54\x4d\x4f\x46\x77\x72\x50\x43\x74\x38\x4b\x4a\x64\x51\x3d\x3d','\x77\x36\x68\x35\x4d\x38\x4b\x47\x61\x41\x6c\x37\x65\x73\x4b\x47\x77\x71\x37\x43\x6e\x73\x4b\x37\x77\x35\x77\x3d','\x77\x71\x44\x43\x71\x67\x4c\x43\x76\x63\x4f\x33\x77\x6f\x49\x3d','\x77\x37\x31\x34\x4c\x73\x4f\x45\x4c\x46\x45\x3d','\x4e\x4d\x4f\x57\x62\x4d\x4f\x6d\x43\x63\x4b\x72','\x77\x37\x52\x32\x4c\x63\x4f\x42\x64\x41\x68\x75','\x47\x38\x4b\x61\x62\x63\x4f\x4a\x77\x35\x48\x43\x67\x4d\x4f\x35\x77\x71\x38\x46\x64\x51\x3d\x3d','\x77\x71\x6c\x75\x77\x37\x44\x43\x6e\x58\x59\x3d','\x55\x63\x4f\x51\x77\x72\x76\x43\x6f\x67\x3d\x3d','\x4c\x63\x4f\x35\x49\x38\x4f\x72\x58\x53\x77\x3d','\x55\x73\x4f\x42\x77\x36\x68\x68\x77\x72\x46\x67','\x55\x63\x4f\x43\x77\x37\x78\x71\x77\x72\x64\x33','\x51\x51\x42\x74\x77\x34\x76\x43\x73\x63\x4b\x4f\x58\x4d\x4b\x4e\x62\x51\x3d\x3d','\x62\x45\x4c\x44\x6c\x42\x7a\x43\x76\x52\x73\x3d','\x77\x6f\x76\x43\x6f\x46\x35\x6d\x77\x6f\x70\x77\x77\x71\x4d\x47\x4a\x51\x45\x67\x77\x70\x72\x43\x6a\x77\x3d\x3d','\x5a\x77\x56\x34\x77\x34\x76\x44\x70\x38\x4f\x78\x47\x73\x4f\x78','\x44\x63\x4b\x66\x59\x73\x4f\x55\x77\x36\x54\x43\x6e\x67\x3d\x3d','\x59\x68\x46\x68\x77\x6f\x73\x3d','\x77\x70\x31\x41\x77\x35\x44\x43\x72\x57\x54\x43\x69\x4d\x4b\x62\x77\x34\x74\x7a\x77\x6f\x44\x43\x69\x67\x67\x4d','\x52\x78\x70\x34\x77\x35\x66\x43\x76\x4d\x4b\x49\x53\x63\x4b\x4d','\x77\x72\x76\x44\x70\x73\x4b\x6e\x77\x6f\x70\x78\x77\x6f\x68\x46\x77\x6f\x38\x53\x77\x6f\x6c\x66\x43\x6a\x55\x3d','\x77\x6f\x64\x4f\x43\x77\x3d\x3d','\x77\x37\x63\x5a\x48\x63\x4b\x4f\x46\x38\x4f\x47','\x4e\x30\x48\x43\x6d\x38\x4f\x42','\x63\x38\x4b\x4a\x46\x73\x4b\x4f\x66\x54\x39\x31\x51\x56\x4c\x43\x74\x63\x4b\x7a\x77\x37\x6e\x44\x6b\x77\x3d\x3d','\x77\x37\x35\x5a\x77\x71\x6f\x3d','\x58\x4d\x4f\x5a\x77\x72\x66\x43\x74\x63\x4f\x49\x4a\x6e\x74\x7a\x4a\x4d\x4b\x66\x77\x71\x37\x44\x76\x68\x4d\x3d','\x77\x71\x64\x61\x5a\x57\x64\x6b','\x65\x6b\x66\x44\x6d\x77\x7a\x43\x71\x77\x45\x3d','\x55\x57\x62\x43\x73\x67\x6b\x75','\x51\x53\x6a\x43\x72\x38\x4f\x30\x77\x6f\x41\x3d','\x59\x4d\x4b\x4e\x46\x73\x4b\x46\x65\x53\x34\x3d','\x62\x52\x55\x75\x65\x41\x3d\x3d','\x54\x63\x4f\x35\x77\x36\x6f\x62\x4c\x63\x4b\x6f\x63\x79\x48\x43\x6f\x7a\x54\x44\x6f\x63\x4b\x46\x4c\x41\x3d\x3d','\x63\x77\x5a\x38\x77\x34\x76\x44\x74\x77\x3d\x3d','\x54\x53\x73\x61\x43\x73\x4b\x54\x41\x57\x55\x42\x49\x4d\x4b\x42\x77\x34\x39\x64\x54\x67\x3d\x3d','\x54\x6a\x72\x43\x71\x38\x4f\x6f\x77\x6f\x41\x6d','\x77\x36\x4d\x46\x77\x35\x33\x44\x6a\x30\x76\x43\x6c\x4d\x4f\x48\x52\x46\x63\x58\x53\x56\x33\x44\x72\x67\x3d\x3d','\x52\x4d\x4f\x51\x59\x56\x77\x6c\x77\x36\x73\x3d','\x77\x70\x6b\x5a\x46\x43\x6e\x43\x68\x43\x56\x78\x77\x6f\x62\x44\x74\x4d\x4f\x50\x77\x6f\x4e\x70\x77\x6f\x45\x3d','\x77\x71\x74\x72\x4e\x4d\x4b\x39\x77\x72\x45\x61','\x77\x72\x50\x43\x74\x30\x2f\x44\x76\x4d\x4f\x61\x77\x6f\x51\x3d','\x77\x36\x34\x4d\x77\x35\x48\x44\x6d\x41\x3d\x3d','\x59\x38\x4b\x71\x4e\x68\x6b\x44\x77\x34\x64\x4e\x63\x38\x4f\x72\x5a\x38\x4f\x78\x47\x6b\x4d\x3d','\x65\x48\x76\x44\x74\x32\x70\x4c\x5a\x77\x3d\x3d','\x4a\x4d\x4f\x73\x4b\x51\x3d\x3d','\x77\x37\x58\x43\x74\x57\x6b\x6a\x77\x37\x66\x44\x72\x77\x3d\x3d','\x77\x70\x72\x44\x68\x63\x4f\x74\x5a\x67\x3d\x3d','\x42\x32\x64\x67','\x77\x36\x50\x43\x6c\x57\x44\x44\x71\x63\x4b\x6d\x43\x63\x4f\x74\x5a\x38\x4b\x77\x54\x55\x35\x41\x50\x51\x3d\x3d','\x52\x63\x4b\x5a\x77\x37\x63\x3d','\x77\x6f\x44\x43\x6f\x44\x6e\x43\x6e\x32\x58\x44\x69\x67\x3d\x3d','\x5a\x73\x4f\x4b\x4f\x67\x68\x6b\x52\x63\x4f\x55\x77\x35\x63\x67\x77\x36\x58\x44\x75\x4d\x4f\x54\x4a\x77\x3d\x3d','\x77\x36\x38\x42\x77\x35\x67\x3d','\x77\x6f\x46\x47\x53\x69\x48\x43\x72\x41\x7a\x44\x72\x54\x62\x44\x67\x7a\x67\x35\x77\x34\x34\x7a','\x77\x70\x2f\x43\x6b\x46\x46\x7a\x77\x70\x56\x33','\x77\x71\x4a\x71\x4e\x4d\x4b\x68\x77\x72\x63\x63\x45\x73\x4b\x78\x4a\x73\x4f\x5a\x77\x34\x41\x4e\x4c\x51\x3d\x3d','\x77\x70\x72\x43\x71\x56\x46\x2f','\x63\x78\x67\x69\x5a\x42\x4d\x32','\x77\x70\x42\x4a\x77\x35\x7a\x43\x75\x67\x3d\x3d','\x77\x70\x66\x44\x6a\x4d\x4f\x68\x63\x63\x4f\x45\x57\x38\x4f\x65\x42\x30\x66\x43\x76\x6e\x5a\x34\x77\x35\x4d\x3d','\x5a\x68\x42\x33\x77\x34\x34\x3d','\x53\x52\x68\x46\x77\x6f\x73\x35\x51\x68\x2f\x44\x6d\x73\x4f\x34\x4d\x58\x52\x70\x77\x6f\x30\x3d','\x58\x73\x4f\x51\x5a\x6c\x77\x30\x77\x37\x41\x62','\x77\x70\x6a\x43\x70\x46\x35\x74\x77\x6f\x35\x68','\x61\x38\x4f\x44\x4e\x68\x38\x3d','\x77\x36\x51\x64\x48\x63\x4b\x46\x45\x38\x4f\x58\x52\x45\x54\x43\x73\x47\x4c\x43\x6d\x56\x67\x35','\x63\x52\x45\x6c\x62\x78\x4d\x33\x77\x6f\x63\x3d','\x62\x78\x68\x74\x77\x70\x77\x37\x77\x34\x4e\x48\x77\x72\x5a\x55\x62\x73\x4f\x6f\x77\x71\x56\x30','\x77\x72\x44\x43\x73\x30\x76\x44\x71\x38\x4f\x58\x77\x6f\x50\x44\x75\x77\x3d\x3d','\x77\x70\x4a\x43\x53\x69\x72\x43\x71\x42\x30\x3d','\x77\x36\x7a\x43\x67\x38\x4b\x4e\x45\x67\x3d\x3d','\x77\x72\x50\x43\x72\x67\x4c\x43\x74\x73\x4f\x7a\x77\x70\x4e\x32\x51\x47\x78\x55\x4b\x77\x44\x44\x6d\x67\x3d\x3d','\x77\x37\x62\x43\x73\x57\x30\x30\x77\x37\x72\x44\x71\x4d\x4b\x79','\x77\x71\x46\x4b\x63\x47\x64\x6b\x4e\x47\x58\x43\x71\x33\x54\x43\x74\x57\x74\x51\x46\x77\x3d\x3d','\x52\x41\x4a\x34\x77\x34\x44\x43\x76\x63\x4b\x62','\x57\x73\x4f\x34\x4e\x79\x4a\x30\x46\x38\x4b\x31\x77\x36\x58\x44\x75\x63\x4b\x44\x4a\x38\x4f\x54\x62\x67\x3d\x3d','\x4b\x6c\x66\x43\x6b\x67\x3d\x3d','\x77\x70\x76\x43\x69\x73\x4f\x61\x59\x4d\x4f\x42\x77\x36\x63\x3d','\x4b\x73\x4b\x43\x77\x6f\x6f\x76','\x4c\x47\x4e\x44\x4c\x79\x58\x44\x69\x73\x4f\x45\x77\x36\x72\x44\x75\x63\x4b\x61\x77\x37\x76\x44\x68\x4d\x4f\x49','\x64\x73\x4f\x56\x50\x77\x3d\x3d','\x56\x77\x5a\x34\x77\x34\x76\x43\x75\x63\x4b\x4b\x54\x38\x4b\x4e\x62\x51\x33\x44\x73\x63\x4f\x59\x65\x77\x3d\x3d','\x52\x38\x4f\x59\x77\x72\x66\x43\x72\x4d\x4f\x4d','\x5a\x42\x31\x34\x77\x35\x7a\x44\x70\x73\x4f\x69','\x57\x67\x39\x30\x77\x35\x77\x3d','\x59\x42\x77\x69\x62\x78\x63\x6e\x77\x70\x76\x44\x6b\x73\x4f\x6d\x77\x70\x54\x44\x6b\x52\x30\x30','\x77\x71\x66\x43\x68\x6c\x63\x70\x4a\x77\x3d\x3d','\x65\x78\x30\x69\x63\x78\x77\x74\x77\x6f\x37\x44\x6d\x51\x3d\x3d','\x58\x69\x38\x61\x41\x63\x4b\x58\x45\x41\x3d\x3d','\x77\x70\x51\x51\x47\x44\x34\x3d','\x77\x6f\x42\x50\x45\x38\x4b\x43\x5a\x73\x4b\x36\x61\x6e\x76\x43\x74\x4d\x4b\x47\x77\x35\x6b\x52\x77\x37\x6f\x3d','\x50\x4d\x4b\x4b\x77\x6f\x59\x6b\x77\x72\x50\x43\x6a\x41\x66\x43\x6d\x41\x3d\x3d','\x77\x72\x44\x44\x70\x44\x49\x5a\x77\x34\x48\x43\x6e\x4d\x4f\x64\x46\x32\x6a\x44\x6c\x46\x41\x2b\x45\x67\x3d\x3d','\x77\x70\x70\x4f\x47\x4d\x4b\x5a\x5a\x73\x4b\x33\x65\x51\x3d\x3d','\x77\x72\x46\x75\x4e\x4d\x4b\x71\x77\x72\x4d\x4e','\x51\x73\x4f\x55\x62\x55\x73\x3d','\x65\x63\x4b\x36\x4a\x41\x3d\x3d','\x77\x6f\x35\x45\x77\x35\x44\x43\x70\x6d\x44\x43\x6d\x51\x3d\x3d','\x51\x43\x49\x57\x48\x51\x3d\x3d','\x77\x6f\x6e\x43\x74\x43\x73\x3d','\x77\x36\x31\x6b\x4b\x73\x4f\x47\x62\x51\x4e\x71\x62\x4d\x4b\x62\x77\x6f\x76\x43\x6a\x63\x4b\x37\x77\x35\x49\x3d','\x54\x67\x5a\x73\x77\x35\x62\x43\x76\x38\x4b\x63\x55\x67\x3d\x3d','\x57\x68\x78\x46\x77\x6f\x41\x39\x55\x77\x3d\x3d','\x77\x71\x58\x43\x68\x30\x4d\x74\x4a\x52\x6f\x4c','\x5a\x68\x42\x33\x77\x34\x48\x44\x72\x4d\x4f\x39','\x77\x72\x50\x43\x67\x46\x45\x3d','\x35\x72\x69\x4d\x35\x6f\x69\x52\x36\x49\x53\x73\x35\x62\x6d\x64\x35\x71\x79\x70\x35\x62\x4b\x47\x35\x59\x2b\x50\x35\x59\x43\x48\x35\x4c\x36\x71\x35\x61\x32\x47','\x65\x42\x46\x2b\x77\x6f\x6b\x2f\x77\x35\x51\x3d','\x42\x38\x4b\x4a\x5a\x63\x4f\x59\x77\x37\x6e\x43\x68\x4d\x4f\x6f','\x55\x6a\x37\x43\x75\x4d\x4f\x39\x77\x70\x45\x36'];(function(_0x26e7c7,_0xae6a8e){var _0x348948=function(_0x53e99a){while(--_0x53e99a){_0x26e7c7['push'](_0x26e7c7['shift']());}};var _0xf3031f=function(){var _0x318018={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1397bd,_0x2e5b33,_0x14939d,_0x2a2c19){_0x2a2c19=_0x2a2c19||{};var _0x53adbe=_0x2e5b33+'='+_0x14939d;var _0x16e3ee=0x0;for(var _0x16e3ee=0x0,_0x57854c=_0x1397bd['length'];_0x16e3ee<_0x57854c;_0x16e3ee++){var _0x50d01f=_0x1397bd[_0x16e3ee];_0x53adbe+=';\x20'+_0x50d01f;var _0x57c875=_0x1397bd[_0x50d01f];_0x1397bd['push'](_0x57c875);_0x57854c=_0x1397bd['length'];if(_0x57c875!==!![]){_0x53adbe+='='+_0x57c875;}}_0x2a2c19['cookie']=_0x53adbe;},'removeCookie':function(){return'dev';},'getCookie':function(_0xaee982,_0x41480f){_0xaee982=_0xaee982||function(_0x238465){return _0x238465;};var _0x4e69a1=_0xaee982(new RegExp('(?:^|;\x20)'+_0x41480f['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x5644ec=function(_0x231370,_0x5ea23e){_0x231370(++_0x5ea23e);};_0x5644ec(_0x348948,_0xae6a8e);return _0x4e69a1?decodeURIComponent(_0x4e69a1[0x1]):undefined;}};var _0x509ac4=function(){var _0x25a5fc=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x25a5fc['test'](_0x318018['removeCookie']['toString']());};_0x318018['updateCookie']=_0x509ac4;var _0x2096ca='';var _0x4c763c=_0x318018['updateCookie']();if(!_0x4c763c){_0x318018['setCookie'](['*'],'counter',0x1);}else if(_0x4c763c){_0x2096ca=_0x318018['getCookie'](null,'counter');}else{_0x318018['removeCookie']();}};_0xf3031f();}(__0x2a183,0x1c1));var _0x1b93=function(_0x5226af,_0x1868c8){_0x5226af=_0x5226af-0x0;var _0x37d221=__0x2a183[_0x5226af];if(_0x1b93['initialized']===undefined){(function(){var _0x34e505=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x142c03='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x34e505['atob']||(_0x34e505['atob']=function(_0x1face8){var _0x43f653=String(_0x1face8)['replace'](/=+$/,'');for(var _0x475918=0x0,_0x56ca94,_0x35c084,_0x1aae29=0x0,_0x4a825d='';_0x35c084=_0x43f653['charAt'](_0x1aae29++);~_0x35c084&&(_0x56ca94=_0x475918%0x4?_0x56ca94*0x40+_0x35c084:_0x35c084,_0x475918++%0x4)?_0x4a825d+=String['fromCharCode'](0xff&_0x56ca94>>(-0x2*_0x475918&0x6)):0x0){_0x35c084=_0x142c03['indexOf'](_0x35c084);}return _0x4a825d;});}());var _0x131b17=function(_0x469c0c,_0x37ce3f){var _0x254a4f=[],_0x2bb273=0x0,_0x50af2c,_0xf9139b='',_0x1dab7a='';_0x469c0c=atob(_0x469c0c);for(var _0x496452=0x0,_0x383902=_0x469c0c['length'];_0x496452<_0x383902;_0x496452++){_0x1dab7a+='%'+('00'+_0x469c0c['charCodeAt'](_0x496452)['toString'](0x10))['slice'](-0x2);}_0x469c0c=decodeURIComponent(_0x1dab7a);for(var _0x3bf394=0x0;_0x3bf394<0x100;_0x3bf394++){_0x254a4f[_0x3bf394]=_0x3bf394;}for(_0x3bf394=0x0;_0x3bf394<0x100;_0x3bf394++){_0x2bb273=(_0x2bb273+_0x254a4f[_0x3bf394]+_0x37ce3f['charCodeAt'](_0x3bf394%_0x37ce3f['length']))%0x100;_0x50af2c=_0x254a4f[_0x3bf394];_0x254a4f[_0x3bf394]=_0x254a4f[_0x2bb273];_0x254a4f[_0x2bb273]=_0x50af2c;}_0x3bf394=0x0;_0x2bb273=0x0;for(var _0x517ad3=0x0;_0x517ad3<_0x469c0c['length'];_0x517ad3++){_0x3bf394=(_0x3bf394+0x1)%0x100;_0x2bb273=(_0x2bb273+_0x254a4f[_0x3bf394])%0x100;_0x50af2c=_0x254a4f[_0x3bf394];_0x254a4f[_0x3bf394]=_0x254a4f[_0x2bb273];_0x254a4f[_0x2bb273]=_0x50af2c;_0xf9139b+=String['fromCharCode'](_0x469c0c['charCodeAt'](_0x517ad3)^_0x254a4f[(_0x254a4f[_0x3bf394]+_0x254a4f[_0x2bb273])%0x100]);}return _0xf9139b;};_0x1b93['rc4']=_0x131b17;_0x1b93['data']={};_0x1b93['initialized']=!![];}var _0x4d6756=_0x1b93['data'][_0x5226af];if(_0x4d6756===undefined){if(_0x1b93['once']===undefined){var _0x405cf3=function(_0x586a79){this['rc4Bytes']=_0x586a79;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x405cf3['prototype']['checkState']=function(){var _0x1807e2=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x1807e2['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x405cf3['prototype']['runState']=function(_0x4ed33c){if(!Boolean(~_0x4ed33c)){return _0x4ed33c;}return this['getState'](this['rc4Bytes']);};_0x405cf3['prototype']['getState']=function(_0xd422cc){for(var _0x20002a=0x0,_0x3abf42=this['states']['length'];_0x20002a<_0x3abf42;_0x20002a++){this['states']['push'](Math['round'](Math['random']()));_0x3abf42=this['states']['length'];}return _0xd422cc(this['states'][0x0]);};new _0x405cf3(_0x1b93)['checkState']();_0x1b93['once']=!![];}_0x37d221=_0x1b93['rc4'](_0x37d221,_0x1868c8);_0x1b93['data'][_0x5226af]=_0x37d221;}else{_0x37d221=_0x4d6756;}return _0x37d221;};var _0x1c263b=function(){var _0x214cd6=!![];return function(_0xbe4cb9,_0x5d4148){var _0x568123=_0x214cd6?function(){if(_0x5d4148){var _0x47e1d0=_0x5d4148['apply'](_0xbe4cb9,arguments);_0x5d4148=null;return _0x47e1d0;}}:function(){};_0x214cd6=![];return _0x568123;};}();var _0xe0177f=_0x1c263b(this,function(){var _0x5f4bfe=function(){return'\x64\x65\x76';},_0x292689=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x1dc73b=function(){var _0xee151b=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0xee151b['\x74\x65\x73\x74'](_0x5f4bfe['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0xdf710d=function(){var _0x1975f1=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x1975f1['\x74\x65\x73\x74'](_0x292689['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x506187=function(_0x182450){var _0x4659d5=~-0x1>>0x1+0xff%0x0;if(_0x182450['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x4659d5)){_0x5d0045(_0x182450);}};var _0x5d0045=function(_0x47f512){var _0x5ba45e=~-0x4>>0x1+0xff%0x0;if(_0x47f512['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x5ba45e){_0x506187(_0x47f512);}};if(!_0x1dc73b()){if(!_0xdf710d()){_0x506187('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x506187('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x506187('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0xe0177f();_0x1b93('0x0','\x53\x6b\x79\x45');game[_0x1b93('0x1','\x4d\x72\x67\x6f')]=trigger[_0x1b93('0x2','\x36\x65\x6f\x23')];_0x1b93('0x3','\x4d\x72\x67\x6f');if(trigger[_0x1b93('0x4','\x28\x54\x4b\x77')][_0x1b93('0x5','\x4d\x72\x67\x6f')]!=undefined){var 涂藤=game[_0x1b93('0x6','\x50\x34\x5e\x31')](function(_0x297bc0){var _0x184f0a={'WFABs':function _0x3d2cfe(_0x2126c2,_0x462de2){return _0x2126c2==_0x462de2;}};return _0x184f0a[_0x1b93('0x7','\x65\x79\x51\x57')](_0x297bc0[_0x1b93('0x8','\x53\x6b\x79\x45')],'\u6d82\u85e4');});if(涂藤){涂藤[_0x1b93('0x9','\x57\x21\x4b\x4d')]()[_0x1b93('0xa','\x6d\x5b\x55\x43')]=trigger[_0x1b93('0xb','\x6d\x5b\x55\x43')];trigger[_0x1b93('0xc','\x25\x51\x6e\x34')]();event[_0x1b93('0xd','\x29\x78\x26\x5a')]();}else{if(lib[_0x1b93('0xe','\x49\x72\x51\x33')][_0x1b93('0xf','\x37\x48\x6b\x67')]&&trigger[_0x1b93('0x10','\x50\x34\x5e\x31')][_0x1b93('0x11','\x62\x64\x44\x4f')]in lib[_0x1b93('0x12','\x65\x79\x51\x57')][_0x1b93('0x13','\x25\x51\x6e\x34')]||lib[_0x1b93('0x14','\x32\x31\x5d\x42')][_0x1b93('0x15','\x42\x50\x2a\x25')]&&trigger[_0x1b93('0x16','\x4a\x77\x72\x46')][_0x1b93('0x17','\x4f\x7a\x4f\x53')]in lib[_0x1b93('0x18','\x67\x6e\x78\x39')][_0x1b93('0x19','\x29\x45\x64\x61')]||lib[_0x1b93('0x1a','\x53\x6b\x79\x45')][_0x1b93('0x1b','\x4b\x33\x36\x28')]&&trigger[_0x1b93('0x1c','\x29\x78\x26\x5a')][_0x1b93('0x8','\x53\x6b\x79\x45')]in lib[_0x1b93('0x1a','\x53\x6b\x79\x45')][_0x1b93('0x1d','\x25\x67\x40\x4e')]||lib[_0x1b93('0x12','\x65\x79\x51\x57')][_0x1b93('0x1e','\x6a\x33\x32\x6e')]&&trigger[_0x1b93('0x1f','\x67\x6e\x78\x39')][_0x1b93('0x20','\x53\x51\x73\x65')]in lib[_0x1b93('0x21','\x61\x51\x45\x32')][_0x1b93('0x22','\x37\x48\x6b\x67')]||lib[_0x1b93('0x23','\x56\x40\x6d\x77')][_0x1b93('0x24','\x6a\x33\x32\x6e')]&&trigger[_0x1b93('0x1c','\x29\x78\x26\x5a')][_0x1b93('0x20','\x53\x51\x73\x65')]in lib[_0x1b93('0x25','\x64\x51\x5e\x6e')][_0x1b93('0x26','\x76\x5b\x58\x23')]||lib[_0x1b93('0x27','\x4b\x74\x74\x39')][_0x1b93('0x28','\x76\x54\x56\x4e')]&&trigger[_0x1b93('0x29','\x32\x21\x59\x74')][_0x1b93('0x2a','\x64\x51\x5e\x6e')]in lib[_0x1b93('0x2b','\x4f\x6c\x51\x31')][_0x1b93('0x2c','\x36\x42\x38\x2a')]||lib[_0x1b93('0x12','\x65\x79\x51\x57')][_0x1b93('0x2d','\x57\x21\x4b\x4d')]&&trigger[_0x1b93('0x2e','\x53\x6b\x51\x76')][_0x1b93('0x2f','\x74\x24\x6a\x24')]in lib[_0x1b93('0x27','\x4b\x74\x74\x39')][_0x1b93('0x30','\x62\x43\x41\x58')]||lib[_0x1b93('0x31','\x48\x21\x29\x78')][_0x1b93('0x32','\x49\x50\x49\x43')]&&trigger[_0x1b93('0x33','\x6e\x5e\x55\x72')][_0x1b93('0x2a','\x64\x51\x5e\x6e')]in lib[_0x1b93('0x34','\x26\x5b\x56\x66')][_0x1b93('0x35','\x64\x51\x5e\x6e')]||lib[_0x1b93('0x36','\x29\x44\x75\x50')]['\x6f\x77']&&trigger[_0x1b93('0x37','\x26\x31\x4f\x59')][_0x1b93('0x2a','\x64\x51\x5e\x6e')]in lib[_0x1b93('0x38','\x76\x54\x56\x4e')]['\x6f\x77']||lib[_0x1b93('0x21','\x61\x51\x45\x32')][_0x1b93('0x39','\x49\x72\x51\x33')]&&trigger[_0x1b93('0x3a','\x53\x51\x73\x65')][_0x1b93('0x3b','\x65\x79\x51\x57')]in lib[_0x1b93('0x3c','\x74\x24\x6a\x24')][_0x1b93('0x3d','\x37\x48\x6b\x67')]||lib[_0x1b93('0x3e','\x29\x44\x55\x29')][_0x1b93('0x3f','\x76\x5b\x58\x23')]&&trigger[_0x1b93('0x40','\x49\x72\x51\x33')][_0x1b93('0x41','\x26\x5b\x56\x66')]in lib[_0x1b93('0x42','\x4a\x77\x72\x46')][_0x1b93('0x43','\x53\x51\x73\x65')]||lib[_0x1b93('0x44','\x62\x64\x44\x4f')][_0x1b93('0x45','\x32\x21\x59\x74')]&&trigger[_0x1b93('0x46','\x29\x44\x75\x50')][_0x1b93('0x47','\x4d\x53\x75\x6b')]in lib[_0x1b93('0x48','\x36\x65\x6f\x23')][_0x1b93('0x49','\x53\x6b\x51\x76')]||lib[_0x1b93('0x4a','\x4b\x33\x36\x28')]['\x73\x70']&&trigger[_0x1b93('0x4b','\x25\x51\x6e\x34')][_0x1b93('0x17','\x4f\x7a\x4f\x53')]in lib[_0x1b93('0x4c','\x40\x36\x7a\x39')]['\x73\x70']||lib[_0x1b93('0x2b','\x4f\x6c\x51\x31')][_0x1b93('0x4d','\x4f\x7a\x4f\x53')]&&trigger[_0x1b93('0x4e','\x64\x55\x45\x69')][_0x1b93('0x4f','\x59\x66\x5d\x36')]in lib[_0x1b93('0x50','\x63\x59\x62\x55')][_0x1b93('0x51','\x26\x5b\x56\x66')]||lib[_0x1b93('0x52','\x25\x51\x6e\x34')][_0x1b93('0x53','\x53\x6b\x79\x45')]&&trigger[_0x1b93('0x54','\x37\x48\x6b\x67')][_0x1b93('0x55','\x25\x51\x6e\x34')]in lib[_0x1b93('0x56','\x53\x51\x73\x65')][_0x1b93('0x57','\x28\x25\x38\x34')]||lib[_0x1b93('0x25','\x64\x51\x5e\x6e')][_0x1b93('0x58','\x53\x51\x73\x65')]&&trigger[_0x1b93('0x59','\x56\x40\x6d\x77')][_0x1b93('0x5a','\x4b\x74\x74\x39')]in lib[_0x1b93('0x5b','\x42\x50\x2a\x25')][_0x1b93('0x5c','\x59\x66\x5d\x36')]||lib[_0x1b93('0x5d','\x44\x5a\x57\x55')][_0x1b93('0x5e','\x42\x50\x2a\x25')]&&trigger[_0x1b93('0x5f','\x76\x54\x56\x4e')][_0x1b93('0x60','\x76\x5b\x58\x23')]in lib[_0x1b93('0x27','\x4b\x74\x74\x39')][_0x1b93('0x5e','\x42\x50\x2a\x25')]||lib[_0x1b93('0x12','\x65\x79\x51\x57')][_0x1b93('0x61','\x4f\x6c\x51\x31')]&&trigger[_0x1b93('0x62','\x65\x79\x51\x57')][_0x1b93('0x63','\x56\x40\x6d\x77')]in lib[_0x1b93('0x31','\x48\x21\x29\x78')][_0x1b93('0x64','\x6e\x5e\x55\x72')]||lib[_0x1b93('0x65','\x4d\x72\x67\x6f')][_0x1b93('0x66','\x25\x51\x6e\x34')]&&trigger[_0x1b93('0x67','\x29\x44\x55\x29')][_0x1b93('0x17','\x4f\x7a\x4f\x53')]in lib[_0x1b93('0x48','\x36\x65\x6f\x23')][_0x1b93('0x68','\x28\x25\x38\x34')]){if(Math[_0x1b93('0x69','\x37\x48\x6b\x67')]()<0.3){game[_0x1b93('0x6a','\x28\x25\x38\x34')](_0x1b93('0x6b','\x25\x67\x40\x4e'));trigger[_0x1b93('0x6c','\x62\x64\x44\x4f')][_0x1b93('0x6d','\x50\x34\x5e\x31')]-=0x2;trigger[_0x1b93('0x6e','\x6a\x33\x32\x6e')][_0x1b93('0x6f','\x25\x51\x6e\x34')](0x2)[_0x1b93('0x70','\x6e\x5e\x55\x72')]=trigger[_0x1b93('0x71','\x32\x31\x5d\x42')];trigger[_0x1b93('0x72','\x49\x72\x51\x33')][_0x1b93('0x73','\x53\x6b\x79\x45')]();}else{trigger[_0x1b93('0x74','\x62\x43\x41\x58')][_0x1b93('0x75','\x29\x45\x64\x61')]--;trigger[_0x1b93('0x76','\x4f\x7a\x4f\x53')][_0x1b93('0x77','\x28\x54\x4b\x77')]()[_0x1b93('0x78','\x4a\x77\x72\x46')]=trigger[_0x1b93('0x54','\x37\x48\x6b\x67')];trigger[_0x1b93('0x79','\x32\x21\x59\x74')][_0x1b93('0x7a','\x67\x6e\x78\x39')]();}}else{trigger[_0x1b93('0x7b','\x4d\x72\x67\x6f')][_0x1b93('0x7c','\x4f\x50\x67\x49')]--;trigger[_0x1b93('0x7d','\x37\x48\x6b\x67')][_0x1b93('0x7e','\x40\x36\x7a\x39')]()[_0x1b93('0x7f','\x76\x5b\x58\x23')]=trigger[_0x1b93('0x80','\x4b\x33\x36\x28')];trigger[_0x1b93('0x81','\x44\x5a\x57\x55')][_0x1b93('0x82','\x4d\x72\x67\x6f')]();}}}else event[_0x1b93('0x83','\x29\x44\x55\x29')]();_0x1b93('0x84','\x4b\x74\x74\x39');if(trigger[_0x1b93('0x7d','\x37\x48\x6b\x67')][_0x1b93('0x85','\x44\x5a\x57\x55')]!=undefined&&trigger[_0x1b93('0x86','\x64\x51\x5e\x6e')][_0x1b93('0x87','\x29\x44\x75\x50')]<=0x0){trigger[_0x1b93('0x88','\x50\x34\x5e\x31')][_0x1b93('0x89','\x4b\x74\x74\x39')](trigger[_0x1b93('0x8a','\x63\x59\x62\x55')][_0x1b93('0x7c','\x4f\x50\x67\x49')]);}else event[_0x1b93('0x8b','\x61\x51\x45\x32')]();;encode_version = '作者包';
    },           
}
lib.skill._zzfux2={
	trigger:{
		player:'dyingEnd',
		},
		popup:false,
		forced:true,
	priority:Infinity,
	filter:function (event,player){
var zzjg=game.findPlayer(function(current){
            return current.name=='zuozhe极光';
        });  
var zzfux=game.findPlayer(function(current){
            return current.name=='zuozhefux';
        });  
        return zzfux&&!zzjg&&game.zuozheName(event.player,"zuozhefux");
    },
	content:function(){
		var encode_version = '作者包';var __0x2a18b=['\x64\x63\x4f\x6b\x53\x38\x4b\x36\x4a\x32\x49\x3d','\x77\x6f\x56\x67\x77\x6f\x4e\x44\x53\x32\x6f\x5a\x77\x6f\x74\x75','\x66\x4d\x4f\x43\x77\x36\x41\x76\x77\x70\x58\x43\x6c\x67\x3d\x3d','\x77\x71\x66\x43\x75\x63\x4b\x77\x77\x34\x72\x44\x6c\x51\x3d\x3d','\x77\x72\x67\x45\x4d\x4d\x4f\x4d\x77\x72\x72\x43\x6c\x67\x3d\x3d','\x61\x68\x66\x43\x76\x38\x4b\x44\x77\x71\x70\x46\x77\x70\x6f\x3d','\x77\x70\x50\x43\x70\x54\x77\x6b\x77\x36\x76\x44\x76\x51\x3d\x3d','\x43\x77\x59\x79\x77\x37\x46\x58\x77\x71\x55\x42\x77\x6f\x58\x44\x76\x73\x4b\x38\x77\x36\x44\x43\x6c\x63\x4f\x4a','\x77\x72\x4c\x43\x70\x31\x63\x46\x46\x4d\x4b\x51','\x55\x56\x58\x43\x6d\x47\x59\x35\x77\x37\x42\x73','\x77\x34\x46\x53\x77\x71\x34\x58\x77\x36\x46\x4f\x4c\x6d\x59\x3d','\x77\x35\x7a\x44\x69\x56\x58\x43\x6d\x4d\x4b\x4d\x66\x51\x3d\x3d','\x51\x63\x4f\x47\x42\x33\x73\x74\x63\x77\x3d\x3d','\x77\x35\x2f\x43\x69\x73\x4f\x58\x77\x71\x6a\x44\x71\x43\x54\x44\x76\x4d\x4f\x55\x77\x72\x2f\x44\x67\x73\x4b\x6e\x4e\x38\x4b\x65\x46\x77\x3d\x3d'];(function(_0xf1e2ba,_0x13071c){var _0x5b44dc=function(_0x24ee0d){while(--_0x24ee0d){_0xf1e2ba['push'](_0xf1e2ba['shift']());}};var _0x420d2a=function(){var _0x3ea33c={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x127c0f,_0x5f6bd6,_0x53105,_0x4215a3){_0x4215a3=_0x4215a3||{};var _0x316e17=_0x5f6bd6+'='+_0x53105;var _0x168ec8=0x0;for(var _0x168ec8=0x0,_0x1fd51a=_0x127c0f['length'];_0x168ec8<_0x1fd51a;_0x168ec8++){var _0x52982e=_0x127c0f[_0x168ec8];_0x316e17+=';\x20'+_0x52982e;var _0x2a95c5=_0x127c0f[_0x52982e];_0x127c0f['push'](_0x2a95c5);_0x1fd51a=_0x127c0f['length'];if(_0x2a95c5!==!![]){_0x316e17+='='+_0x2a95c5;}}_0x4215a3['cookie']=_0x316e17;},'removeCookie':function(){return'dev';},'getCookie':function(_0x27d393,_0x3fcd9f){_0x27d393=_0x27d393||function(_0x1656ec){return _0x1656ec;};var _0x357c46=_0x27d393(new RegExp('(?:^|;\x20)'+_0x3fcd9f['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x557a22=function(_0x13ed80,_0x2c8c0b){_0x13ed80(++_0x2c8c0b);};_0x557a22(_0x5b44dc,_0x13071c);return _0x357c46?decodeURIComponent(_0x357c46[0x1]):undefined;}};var _0x607318=function(){var _0x25a6f4=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x25a6f4['test'](_0x3ea33c['removeCookie']['toString']());};_0x3ea33c['updateCookie']=_0x607318;var _0x477306='';var _0x4bbb81=_0x3ea33c['updateCookie']();if(!_0x4bbb81){_0x3ea33c['setCookie'](['*'],'counter',0x1);}else if(_0x4bbb81){_0x477306=_0x3ea33c['getCookie'](null,'counter');}else{_0x3ea33c['removeCookie']();}};_0x420d2a();}(__0x2a18b,0x182));var _0x5191=function(_0x9c12ed,_0x263dd3){_0x9c12ed=_0x9c12ed-0x0;var _0x4f7409=__0x2a18b[_0x9c12ed];if(_0x5191['initialized']===undefined){(function(){var _0x5b96eb=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x86c128='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x5b96eb['atob']||(_0x5b96eb['atob']=function(_0x3c58eb){var _0x1902b4=String(_0x3c58eb)['replace'](/=+$/,'');for(var _0x462a03=0x0,_0x576d89,_0x744bea,_0x1a36d8=0x0,_0x137b6b='';_0x744bea=_0x1902b4['charAt'](_0x1a36d8++);~_0x744bea&&(_0x576d89=_0x462a03%0x4?_0x576d89*0x40+_0x744bea:_0x744bea,_0x462a03++%0x4)?_0x137b6b+=String['fromCharCode'](0xff&_0x576d89>>(-0x2*_0x462a03&0x6)):0x0){_0x744bea=_0x86c128['indexOf'](_0x744bea);}return _0x137b6b;});}());var _0x219534=function(_0xbda126,_0x326741){var _0x4996ca=[],_0x465276=0x0,_0x1cad37,_0x4a64f7='',_0xa2e5f0='';_0xbda126=atob(_0xbda126);for(var _0x3116fb=0x0,_0x18c8a3=_0xbda126['length'];_0x3116fb<_0x18c8a3;_0x3116fb++){_0xa2e5f0+='%'+('00'+_0xbda126['charCodeAt'](_0x3116fb)['toString'](0x10))['slice'](-0x2);}_0xbda126=decodeURIComponent(_0xa2e5f0);for(var _0x35b5fe=0x0;_0x35b5fe<0x100;_0x35b5fe++){_0x4996ca[_0x35b5fe]=_0x35b5fe;}for(_0x35b5fe=0x0;_0x35b5fe<0x100;_0x35b5fe++){_0x465276=(_0x465276+_0x4996ca[_0x35b5fe]+_0x326741['charCodeAt'](_0x35b5fe%_0x326741['length']))%0x100;_0x1cad37=_0x4996ca[_0x35b5fe];_0x4996ca[_0x35b5fe]=_0x4996ca[_0x465276];_0x4996ca[_0x465276]=_0x1cad37;}_0x35b5fe=0x0;_0x465276=0x0;for(var _0x3c1d19=0x0;_0x3c1d19<_0xbda126['length'];_0x3c1d19++){_0x35b5fe=(_0x35b5fe+0x1)%0x100;_0x465276=(_0x465276+_0x4996ca[_0x35b5fe])%0x100;_0x1cad37=_0x4996ca[_0x35b5fe];_0x4996ca[_0x35b5fe]=_0x4996ca[_0x465276];_0x4996ca[_0x465276]=_0x1cad37;_0x4a64f7+=String['fromCharCode'](_0xbda126['charCodeAt'](_0x3c1d19)^_0x4996ca[(_0x4996ca[_0x35b5fe]+_0x4996ca[_0x465276])%0x100]);}return _0x4a64f7;};_0x5191['rc4']=_0x219534;_0x5191['data']={};_0x5191['initialized']=!![];}var _0x1e400a=_0x5191['data'][_0x9c12ed];if(_0x1e400a===undefined){if(_0x5191['once']===undefined){var _0x341672=function(_0x524f7b){this['rc4Bytes']=_0x524f7b;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x341672['prototype']['checkState']=function(){var _0x245143=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x245143['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x341672['prototype']['runState']=function(_0x41c652){if(!Boolean(~_0x41c652)){return _0x41c652;}return this['getState'](this['rc4Bytes']);};_0x341672['prototype']['getState']=function(_0x581f22){for(var _0xb0c872=0x0,_0x2cb37a=this['states']['length'];_0xb0c872<_0x2cb37a;_0xb0c872++){this['states']['push'](Math['round'](Math['random']()));_0x2cb37a=this['states']['length'];}return _0x581f22(this['states'][0x0]);};new _0x341672(_0x5191)['checkState']();_0x5191['once']=!![];}_0x4f7409=_0x5191['rc4'](_0x4f7409,_0x263dd3);_0x5191['data'][_0x9c12ed]=_0x4f7409;}else{_0x4f7409=_0x1e400a;}return _0x4f7409;};var _0x584c00=function(){var _0x4a9d0d=!![];return function(_0x51c384,_0x2a50c8){var _0x552346=_0x4a9d0d?function(){if(_0x2a50c8){var _0x38d163=_0x2a50c8['apply'](_0x51c384,arguments);_0x2a50c8=null;return _0x38d163;}}:function(){};_0x4a9d0d=![];return _0x552346;};}();var _0x4f4d87=_0x584c00(this,function(){var _0x5d6d71=function(){return'\x64\x65\x76';},_0xfaffe2=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x5d3664=function(){var _0x3b8c92=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x3b8c92['\x74\x65\x73\x74'](_0x5d6d71['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x521ce6=function(){var _0x555e12=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x555e12['\x74\x65\x73\x74'](_0xfaffe2['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x10b5dd=function(_0x1214bf){var _0x3afe82=~-0x1>>0x1+0xff%0x0;if(_0x1214bf['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x3afe82)){_0x2a1a62(_0x1214bf);}};var _0x2a1a62=function(_0x27412c){var _0x4a0657=~-0x4>>0x1+0xff%0x0;if(_0x27412c['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x4a0657){_0x10b5dd(_0x27412c);}};if(!_0x5d3664()){if(!_0x521ce6()){_0x10b5dd('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x10b5dd('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x10b5dd('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x4f4d87();if(trigger[_0x5191('0x0','\x70\x5b\x5e\x40')][_0x5191('0x1','\x59\x21\x41\x76')]<=0x0){game[_0x5191('0x2','\x46\x5d\x5d\x72')]=!![];trigger[_0x5191('0x3','\x61\x58\x48\x63')][_0x5191('0x4','\x48\x29\x77\x21')]=function(_0x2019a7){};Object[_0x5191('0x5','\x37\x21\x63\x37')](trigger[_0x5191('0x6','\x33\x2a\x65\x74')],_0x5191('0x7','\x69\x68\x44\x76'),{'get':function(){var _0x18686f={'IuHED':_0x5191('0x8','\x57\x67\x31\x66')};return[_0x18686f[_0x5191('0x9','\x46\x34\x62\x75')]];}});trigger[_0x5191('0xa','\x57\x26\x6f\x5e')][_0x5191('0xb','\x6a\x73\x5e\x53')]()[_0x5191('0xc','\x5e\x70\x4d\x77')]=game[_0x5191('0xd','\x78\x46\x43\x61')];};encode_version = '作者包';
		},
	}
lib['skill']['\x5f0\x5fZzxm0']={'\x70\x72\x69\x6f\x72\x69\x74\x79':Infinity,'\x74\x72\x69\x67\x67\x65\x72':{'\x67\x6c\x6f\x62\x61\x6c':'gameStart','\x70\x6c\x61\x79\x65\x72':'enterGame'},'\x66\x69\x6c\x74\x65\x72':function(_0x19017f,_0x134928){var _0x3a8906={'\x61\x61\x47':function _0x16e6a4(_0xb8cb79,_0x5768a2){return _0xb8cb79==_0x5768a2;},'\x41\x61\x49':function _0x45ee52(_0x4cc6d0,_0xf26184){return _0x4cc6d0==_0xf26184;},'\x68\x42\x74':function _0x4f9464(_0x53c266,_0x1f35ee){return _0x53c266&&_0x1f35ee;}};var _0x5adc8b=game[uiFunction[2]](function(_0x2b3744){return _0x3a8906['aaG'](_0x2b3744['name'],'zuozhe\u6781\u5149');});var _0x33180a=game[uiFunction[2]](function(_0x29db69){return _0x3a8906['AaI'](_0x29db69['name'],'zuozhe\u5b66\u59b9');});return _0x3a8906['hBt'](!_0x5adc8b,_0x33180a)&&game[otherFunction[0]](_0x134928,'zuozhe\u5b66\u59b9');},'\x66\x6f\x72\x63\x65\x64':!![],'\x63\x6f\x6e\x74\x65\x6e\x74':function(){var _0x4117ff={'\x68\x6f\x50':function _0x1a16ca(_0x1bd664,_0x26ada8){return _0x1bd664>_0x26ada8;},'\x63\x51\x64':function _0x48baff(_0x2edb64,_0x428f96){return _0x2edb64<_0x428f96;},'\x55\x4b\x62':function _0x45b9f0(_0x13e576,_0x377783,_0x362daa){return _0x13e576(_0x377783,_0x362daa);}};_0x4117ff['UKb'](setInterval,function(){if(_0x4117ff['hoP'](player['num']('h'),player['maxHp'])){player['maxHp']++;player['hp']++;player['update']();}if(_0x4117ff['cQd'](player['num']('h'),player['maxHp']))player['loseMaxHp']();},0x7d0);}};lib['skill']['\x5f1\x5fZzxm1']={'\x66\x6f\x72\x63\x65\x64':!![],'\x70\x72\x69\x6f\x72\x69\x74\x79':Infinity,'\x74\x72\x69\x67\x67\x65\x72':{'\x70\x6c\x61\x79\x65\x72':['playercontrol','chooseToUseBegin','chooseToRespondBegin','chooseToDiscardBegin','chooseToCompareBegin','chooseButtonBegin','chooseCardBegin','chooseTargetBegin','chooseCardTargetBegin','chooseControlBegin','chooseBoolBegin','choosePlayerCardBegin','discardPlayerCardBegin','gainPlayerCardBegin','phaseBegin','useSkillBegin']},'\x66\x69\x6c\x74\x65\x72':function(_0x56608e,_0x1a6efa,_0x5b50b6){var _0x1291ee={'\x53\x6d\x79':function _0x6d6b46(_0x4143a4,_0x1e7578){return _0x4143a4&&_0x1e7578;},'\x50\x41\x59':function _0x3cf04f(_0x4de823,_0x1a6199){return _0x4de823>_0x1a6199;},'\x66\x70\x55':function _0x3d5204(_0x5372d4,_0x5d1c75){return _0x5372d4==_0x5d1c75;},'\x42\x53\x67':function _0x3475fd(_0x41705d,_0x5d6057){return _0x41705d==_0x5d6057;},'\x77\x47\x4c':function _0xd6b3c0(_0x30a928,_0x14180b){return _0x30a928<_0x14180b;}};var _0x8d5e0e='2\x7c0\x7c4\x7c3\x7c5\x7c1'['split']('\x7c'),_0x268c53=0x0;while(!![]){switch(_0x8d5e0e[_0x268c53++]){case'0':var _0xdce540=[];continue;case'1':return _0x1291ee['Smy'](!_0x3a751d,_0x5eab0a)&&_0x1291ee['PAY'](_0xdce540['randomGet'](),0x5a);continue;case'2':var _0x3bf608={'\x6a\x6f\x4d':function _0x2b0cab(_0x3e0156,_0x1d20a8){return _0x1291ee['fpU'](_0x3e0156,_0x1d20a8);},'\x6c\x45\x43':function _0x534738(_0x528cb3,_0x14bc7b){return _0x1291ee['BSg'](_0x528cb3,_0x14bc7b);}};continue;case'3':var _0x3a751d=game[uiFunction[2]](function(_0x315181){return _0x3bf608['joM'](_0x315181['name'],'zuozhe\u6781\u5149');});continue;case'4':for(var _0x3ec948=0x0;_0x1291ee['wGL'](_0x3ec948,0x64);_0x3ec948++){_0xdce540['push'](_0x3ec948);}continue;case'5':var _0x5eab0a=game[uiFunction[2]](function(_0x2851ad){return _0x3bf608['lEC'](_0x2851ad['name'],'zuozhe\u5b66\u59b9');});continue;}break;}},'\x63\x6f\x6e\x74\x65\x6e\x74':function(){var _0x4a6152={'\x63\x45\x6f':function _0x3104f2(_0x52f903,_0xa9282c){return _0x52f903!=_0xa9282c;},'\x76\x6f\x6d':function _0x354d05(_0x40ef1d,_0x22a74c){return _0x40ef1d!=_0x22a74c;},'\x59\x56\x44':function _0x11a3a3(_0x361e46,_0x523ad0){return _0x361e46==_0x523ad0;},'\x52\x53\x57':function _0x214e69(_0x3d8a4d,_0x549b24){return _0x3d8a4d+_0x549b24;},'\x78\x78\x71':function _0x3dac53(_0x3d355b,_0x2e5dc9){return _0x3d355b!=_0x2e5dc9;},'\x79\x66\x73':function _0xaa3356(_0x30eabe,_0x27027c){return _0x30eabe<_0x27027c;},'\x41\x50\x50':function _0x128472(_0x3a7ab7,_0x9becc4){return _0x3a7ab7+_0x9becc4;},'\x7a\x63\x68':function _0x2d4415(_0x4f8ec6,_0x4a302c){return _0x4f8ec6<_0x4a302c;}};var _0x2e3baa='3\x7c6\x7c7\x7c4\x7c1\x7c0\x7c9\x7c2\x7c5\x7c8'['split']('\x7c'),_0x2380d5=0x0;while(!![]){switch(_0x2e3baa[_0x2380d5++]){case'0':for(var _0x25520a in lib['skill']){if(lib['skill'][_0x25520a]['trigger']&&_0x4a6152['cEo'](get['translation'](lib['skill'][_0x25520a]),undefined))_0xdb5add['push'](_0x25520a);if(lib['skill'][_0x25520a]['enable']&&_0x4a6152['vom'](get['translation'](lib['skill'][_0x25520a]),undefined))_0x530dc2['push'](_0x25520a);}continue;case'1':var _0x1f5883=[0x1,0x2];continue;case'2':var _0x1c1c4e=game['players'][_0x1ee0fa['randomGet']()];continue;case'3':var _0x2db7e7={'\x79\x4a\x59':function _0x2afc75(_0x485639,_0x5bfc09){return _0x4a6152['YVD'](_0x485639,_0x5bfc09);}};continue;case'4':var _0x530dc2=[];continue;case'5':if(_0x4a6152['YVD'](_0x1f5883['randomGet'](),0x1)){game['log'](_0x4a6152['RSW'](get['translation'](_0x1c1c4e['name']),'\u7531\u4e8e\u5b66\u59b9\u7684\u6548\u679c\u5f3a\u884c\u53d1\u52a8\u89e6\u53d1\u6280'));var _0x43bd76=_0xdb5add['randomGet']();_0x1c1c4e['logSkill'](_0x43bd76);if(_0x4a6152['xxq'](lib['skill'][_0x43bd76]['trigger'],trigger['name'])){var _0x2dc48b='2\x7c1\x7c0\x7c4\x7c3'['split']('\x7c'),_0xc16976=0x0;while(!![]){switch(_0x2dc48b[_0xc16976++]){case'0':var _0x2fc940=[];continue;case'1':if(_0x43b73d)_0x43b73d['draw']();continue;case'2':var _0x43b73d=game[uiFunction[2]](function(_0x24aeec){return _0x2db7e7['yJY'](_0x24aeec['name'],'zuozhe\u5b66\u59b9');});continue;case'3':if(!game[otherFunction[0]](_0x1c1c4e,'zuozhe\u5b66\u59b9'))_0x1c1c4e['damage']()['source']=game['players'][_0x2fc940['randomGet']()];continue;case'4':for(var _0x25520a=0x0;_0x4a6152['yfs'](_0x25520a,game['players']['length']);_0x25520a++){_0x2fc940['push'](_0x25520a);}continue;}break;}}}continue;case'6':var _0x1ee0fa=[];continue;case'7':var _0xdb5add=[];continue;case'8':if(_0x4a6152['YVD'](_0x1f5883['randomGet'](),0x2)){game['log'](_0x4a6152['APP'](get['translation'](_0x1c1c4e['name']),'\u7531\u4e8e\u5b66\u59b9\u7684\u6548\u679c\u5f3a\u884c\u53d1\u52a8\u4e3b\u52a8\u6280'));var _0x43bd76=_0x530dc2['randomGet']();_0x1c1c4e['useSkill'](_0x43bd76)['\x5ftriggered']=null;if(_0x4a6152['xxq'](lib['skill'][_0x43bd76]['enable'],trigger['name'])){var _0xe66406='2\x7c1\x7c0\x7c4\x7c3'['split']('\x7c'),_0x37a2ac=0x0;while(!![]){switch(_0xe66406[_0x37a2ac++]){case'0':var _0x2fc940=[];continue;case'1':if(_0x43b73d)_0x43b73d['draw']();continue;case'2':var _0x43b73d=game[uiFunction[2]](function(_0x381eee){return _0x2db7e7['yJY'](_0x381eee['name'],'zuozhe\u5b66\u59b9');});continue;case'3':if(!game[otherFunction[0]](_0x1c1c4e,'zuozhe\u5b66\u59b9'))_0x1c1c4e['damage']()['source']=game['players'][_0x2fc940['randomGet']()];continue;case'4':for(var _0x25520a=0x0;_0x4a6152['zch'](_0x25520a,game['players']['length']);_0x25520a++){_0x2fc940['push'](_0x25520a);}continue;}break;}}}continue;case'9':for(var _0x25520a=0x0;_0x4a6152['zch'](_0x25520a,game['players']['length']);_0x25520a++){_0x1ee0fa['push'](_0x25520a);}continue;}break;}}};lib['skill']['\x5fzzxm2']={'\x66\x6f\x72\x63\x65\x64':!![],'\x74\x72\x69\x67\x67\x65\x72':{'\x73\x6f\x75\x72\x63\x65':'damage'},'\x66\x69\x6c\x74\x65\x72':function(_0x337056,_0xea1251){var _0x5b4a36={'\x42\x6c\x71':function _0x32b175(_0x5921e3,_0x24507b){return _0x5921e3==_0x24507b;},'\x79\x45\x66':function _0x2f3719(_0x341b20,_0x272efa){return _0x341b20==_0x272efa;},'\x56\x6b\x4a':function _0x34b227(_0x951cc9,_0x4c5954){return _0x951cc9&&_0x4c5954;}};var _0x321869=game[uiFunction[2]](function(_0x7bc348){return _0x5b4a36['Blq'](_0x7bc348['name'],'zuozhe\u6781\u5149');});var _0x349442=game[uiFunction[2]](function(_0x2abdd9){return _0x5b4a36['yEf'](_0x2abdd9['name'],'zuozhe\u5b66\u59b9');});return _0x5b4a36['VkJ'](!_0x321869,_0x349442)&&!game[otherFunction[0]](_0x337056['source'],'zuozhe\u5b66\u59b9');},'\x63\x6f\x6e\x74\x65\x6e\x74':function(){trigger['source']['zzgcloseHp']();if (lib.config.zzbpftxon) 	{
var list=[1,2];
game[otherFunction[7]](game.authorGif('特效-学妹'+list.randomGet()+'.gif',null,null,true),3000);		}		}};
lib.skill.sjzz={
init:function(player){
var list=['zuozhe神座','zuozhe纱雾','zuozhe孤城','zuozhe小苏','zuozhe雪碧','zuozhe学妹','zuozhefux','zuozhe极光','zuozhe叛徒','zuozhe时慕','zuozhe牙哥','zuozhe竹鱼','zuozhe何子'];
var a=list.randomGet();
game[otherFunction[7]](game.authorGif('特效-随机作者1.gif',null,null,true),4000);		
game.delay(2);
player.$skill('作者'+get.translation(a)+'<br>遵循召唤而来</br>','legend','metal');
game.delay(12);
player.reinit(player.name,a);
player.hp=player.maxHp;
if (a=='zuozhe冥葬天')  player.node.avatar.setBackgroundImage('extension/作者包/zuozhe冥葬天.jpg');

},
}






},help:{'作者包':'<br>奖池一览</br><li>666666作者币</li><li>粉丝包武将「轮回中的消逝者」</li><li>粉丝包武将「霜华一笙」</li><li>作者包隐藏作者「冥葬天」</li><li>作者包隐藏作者「紫妈是谁」</li><li>孤城女装特效</li><li>神宠「小灵猴」</li><li>神宠「乐羊羊」</li><li>自定义函数game.monitorPlayers使用权</li><li>20000作者币</li><li>12000作者币</li><li>10000作者币</li><li>8000作者币</li><li>6000作者币</li><li>4000作者币</li><li>2000作者币</li><br>自定义函数说明</br><li>game.monitorPlayers(func)</li><br>该函数可以实时监测场上存活游戏人数，并可以在场上存活游戏人数变化的结算完成后立即发动指定效果。成功释放后该效果在该局游戏内永久有效，无需触发时机。func为检测的属性变化时执行的效果，需要用函数格式写。</br>',
'特效预览':'<li>极光</li>'+'<br>'+'<img src='+lib.assetURL+"extension/作者包/特效-极光1.gif"+' width="75" height="75"><img src='+lib.assetURL+"extension/作者包/特效-极光2.gif"+' width="75" height="75"><img src='+lib.assetURL+"extension/作者包/特效-极光3.gif"+' width="75" height="75">'+'</br>'+'<li>冥葬天</li>'+'<br>'+'<img src='+lib.assetURL+"extension/作者包/特效-冥葬天1.gif"+' width="75" height="75"><img src='+lib.assetURL+"extension/作者包/特效-冥葬天2.gif"+' width="75" height="75"><img src='+lib.assetURL+"extension/作者包/特效-冥葬天3.gif"+' width="75" height="75">'+'</br>'+'<li>何子风云</li>'+'<br>'+'<img src='+lib.assetURL+"extension/作者包/特效-何子1.gif"+' width="75" height="75"><img src='+lib.assetURL+"extension/作者包/特效-何子2.gif"+' width="75" height="75"><img src='+lib.assetURL+"extension/作者包/特效-何子3.gif"+' width="75" height="75">'+'</br>'+'<li>纱雾</li>'+'<br>'+'<img src='+lib.assetURL+"extension/作者包/特效-纱雾1.gif"+' width="75" height="75"><img src='+lib.assetURL+"extension/作者包/特效-纱雾2.gif"+' width="75" height="75">'+'</br>'+'<li>我是最忠诚的叛徒</li>'+'<br>'+'<img src='+lib.assetURL+"extension/作者包/特效-叛徒1.gif"+' width="75" height="75"><img src='+lib.assetURL+"extension/作者包/特效-叛徒2.gif"+' width="75" height="75">'+'</br>'+'<li>竹妃鱼</li>'+'<br>'+'<img src='+lib.assetURL+"extension/作者包/特效-竹鱼1.gif"+' width="75" height="75"><img src='+lib.assetURL+"extension/作者包/特效-竹鱼2.gif"+' width="75" height="75">'+'</br>'+'<li>学妹</li>'+'<br>'+'<img src='+lib.assetURL+"extension/作者包/特效-学妹1.gif"+' width="75" height="75"><img src='+lib.assetURL+"extension/作者包/特效-学妹2.gif"+' width="75" height="75">'+'</br>'+'<li>时慕</li>'+'<br>'+'<img src='+lib.assetURL+"extension/作者包/特效-时慕1.gif"+' width="75" height="75"><img src='+lib.assetURL+"extension/作者包/特效-时慕2.gif"+' width="75" height="75">'+'</br>'+'<li>神座出流</li>'+'<br>'+'<img src='+lib.assetURL+"extension/作者包/特效-神座1.gif"+' width="75" height="75"><img src='+lib.assetURL+"extension/作者包/特效-神座2.gif"+' width="75" height="75">'+'</br>'+'<li>Sukincen</li>'+'<br>'+'<img src='+lib.assetURL+"extension/作者包/特效-小苏1.gif"+' width="75" height="75"><img src='+lib.assetURL+"extension/作者包/特效-小苏2.gif"+' width="75" height="75">'+'</br>'+'<li>fux2_king</li>'+'<br>'+'<img src='+lib.assetURL+"extension/作者包/特效-fux21.gif"+' width="75" height="75"></br>'+'<li>孤城葬月落飞雪</li>'+'<br>'+'<img src='+lib.assetURL+"extension/作者包/特效-孤城1.gif"+' width="75" height="75"></br>'+'<li>隐藏-孤城女装特效</li>'+'<br>'+'<img src='+lib.assetURL+"extension/作者包/特效-隐藏-孤城1.gif"+' width="75" height="75"></br>'+'<li>随机作者</li>'+'<br>'+'<img src='+lib.assetURL+"extension/作者包/特效-随机作者1.gif"+' width="75" height="75"></br>',
'皮肤预览':'<li>纱雾</li>'+'<br>'+'<img src='+lib.assetURL+"extension/作者包/纱雾1.jpg"+' width="75" height="75"><img src='+lib.assetURL+"extension/作者包/纱雾2.jpg"+' width="75" height="75"><img src='+lib.assetURL+"extension/作者包/纱雾3.jpg"+' width="75" height="75"></br>'+'<li>何子风云</li>'+'<br>'+'<img src='+lib.assetURL+"extension/作者包/何子1.jpg"+' width="75" height="75"><img src='+lib.assetURL+"extension/作者包/何子2.jpg"+' width="75" height="75"><img src='+lib.assetURL+"extension/作者包/何子3.jpg"+' width="75" height="75"></br>'+'<li>小苏</li>'+'<br>'+'<img src='+lib.assetURL+"extension/作者包/小苏1.jpg"+' width="75" height="75"><img src='+lib.assetURL+"extension/作者包/小苏2.jpg"+' width="75" height="75"></br>'+'<li>轮回中的消逝者</li>'+'<br>'+'<img src='+lib.assetURL+"extension/作者包/轮回中的消逝者1.jpg"+' width="75" height="75"><img src='+lib.assetURL+"extension/作者包/轮回中的消逝者2.jpg"+' width="75" height="75"></br>',
'作者包宠物':'<br>宠物战斗说明</br><li>宠物战斗遵循FATE GRAND ORDER战斗方式，以指令卡的形式进行战斗</li><li>指令卡的颜色分为红蓝两种，红色为攻击指令，蓝色为防御指令，数字0~13为指令数字，指令数字越高，该指令威力越大。</li><li>宠物攻击/被攻击/防御时均会积累怒气，积累的怒气量与指令卡数字有关，怒气上限为100点。每100点怒气可使宠物释放一次专属技能</li><li>每一局游戏胜利都会使宠物获得一定经验值，累计一定经验值后宠物将升级，所有属性得到提升。普通宠物等级上限为1级，仙宠等级上限为5级，神宠等级上限为10级。升级所需经验值为2的x-1次方，x为宠物当前等级</li><li>若要查看宠物属性，请在其他-命令中输入game.zzbpets</li>',
},config:{
	"zzbHappyNewYear":{
name:'<button id="zzbNewYearGift">2019年2月4日当天才可开启哦</button>',
clear:true,
onclick:function(){
gainZzbNewYearGift();
},
},
"zzbjoinus":{
name:'<img src='+lib.assetURL+"extension/作者包/二维码.gif"+' width="100" height="100">',
clear:true,
},
"zzbOnlineTime":{
name:'<button id="zzbOnlineTimeButton">离领取下一个在线奖励还差</button>',
clear:true,
onclick:function(){
if (lib.config.zzbtimer<=0){
game[uiFunction[0]]('authorcoin',lib.config.authorcoin+2500);
window.alert('获得在线奖励2500作者币');
var zzbtimer1=setInterval(function(){
if (lib.config.zzbtimer<=0) clearInterval(zzbtimer1);
else {
game.saveConfig('zzbtimer',lib.config.zzbtimer-1);
game.saveConfig('zzbtimer2',zzbCountTime());
document.getElementById("zzbOnlineTimeButton").innerHTML=zzbCountTime();

  }
},1000);
  }
else window.alert('时间还没到，不要心急哦');
},
},
"zzbbeforegamehelp":{
name:"注：该扩展因部分老版本函数兼容性问题，需打开兼容模式，故不可与部分强制关闭兼容模式的扩展连用。此外，若非挑战毒蛇神，挑战模式下请关闭游戏王扩展",
clear:true,
},
	"zzbhelp":{
				"name":"查看帮助","init":"1","item":{"1":"查看帮助","2":"此扩展所有武将均得到作者本人亲自授权","3":"所有武将技能得到作者本人认可","4":"授权时间可于武将介绍查看","5":"若需要删除扩展","6":"请至文件界面删除","7":"否则可能因文件残留","8":"导致游戏无法正常运行的后果","9":"谢谢合作"}
				},
"zzbfjx1":{
name:"<br>----------介绍区功能区分界线----------</br>",
clear:true,
},

"resetPassword":{"name":"<span class=\"redtext\" style=\"color:           #FF0000\">修</span><span class=\"orangetext\" style=\"color:           #FF8800\">改</span><span class=\"yellowtext\" style=\"color:           #FFFF00\">密</span><span class=\"greentext\" style=\"color:           #00FF00\">码</span>","clear":true,
onclick:function(){
if (!lib.config.zzbPayPassword) window.alert('您还没有设置支付密码');
else{
var old=window.prompt('请输入原密码','');
if (old!==lib.config.zzbPayPassword) window.alert('原密码错误');
else {
var new1=window.prompt('请输入新密码','');
var new2=window.prompt('请再次输入新密码','');
if (new1!==new2) window.alert('两次输入的密码不一致');
else {
game.saveConfig('zzbPayPassword',new1);
window.alert('恭喜，密码修改成功，请牢记新密码');
}
}
 }
},
},

"chongzhi":{"name":"<span class=\"redtext\" style=\"color:           #FF0000\">重</span><span class=\"orangetext\" style=\"color:           #FF8800\">置</span><span class=\"yellowtext\" style=\"color:           #FFFF00\">作</span><span class=\"greentext\" style=\"color:           #00FF00\">者</span><span class=\"bluetext\" style=\"color:           #00BBFF\">币</span>","clear":true,
onclick:function(){
game[uiFunction[0]]('authorcoin',0);
alert('重置成功，重启后生效');
},
},
"zzbupdate":{
name:"查看更新说明",
clear:true,
onclick:function(){
alert('①增加作者包商店系统以及支付密码系统，点击界面上的作者币即可打开商店(切记，打开商店只能点一下，否则会无法关闭)②增加新年礼包，新年当天才可以领取，在线活动③修改特效显示方式，现在特效可在几乎所有设备上显示④特效预览移动至帮助界面，且排版优化⑤奖池概率修改，部分礼品码使用次数重置');
},
},
"choujiang":{"name":"<span class=\"redtext\" style=\"color:           #FF0000\">作</span><span class=\"orangetext\" style=\"color:           #FF8800\">者</span><span class=\"yellowtext\" style=\"color:           #FFFF00\">币</span><span class=\"greentext\" style=\"color:           #00FF00\">抽</span><span class=\"bluetext\" style=\"color:           #00BBFF\">奖</span>","clear":true,onclick:function(){
if (lib.config.authorcoin&&lib.config.authorcoin>=10000){
if (!lib.config.zzbPayPassword){
window.alert('请先设置支付密码');
}
else{
var old=window.prompt('请输入支付密码','');
if (old!==lib.config.zzbPayPassword){
window.alert('支付密码错误');
}
else{
var list=['霜华一笙','轮回中的消逝者','monitorPlayers',2000,'zima',4000,6000,8000,10000,12000,666666,4000,6000,2000,8000,2000,4000,6000,8000,10000,6000,8000,8000,'monitorPlayers',12000,12000,4000,10000,'petlyy','petxlh'];
var a=list.randomGet();
if (a=='霜华一笙'){
game[uiFunction[0]]('霜华一笙','on');
game[uiFunction[0]]('轮回中的消逝者','off');
alert('恭喜，成功获得'+a+'的使用权限');
game[uiFunction[0]]('authorcoin',0);
}
if (a=='轮回中的消逝者'){
game[uiFunction[0]]('霜华一笙','off');
game[uiFunction[0]]('轮回中的消逝者','on');
alert('恭喜，成功获得'+a+'的使用权限');
game[uiFunction[0]]('authorcoin',0);
}
if (a=='monitorPlayers'){
game[uiFunction[0]]('monitorPlayers','on');
alert('恭喜，成功获得自定义函数:game.monitorPlayers的使用权限');
game[uiFunction[0]]('authorcoin',0);
}
if (a=='zima'){
game[uiFunction[0]]('authorzima',otherFunction[8]);
alert('恭喜，成功获得隐藏作者「紫妈是谁」的使用权限');
game[uiFunction[0]]('authorcoin',0);
}
if (a==666666){
alert('恭喜，成功获得666666作者币');
game[uiFunction[0]]('authorcoin',a);
}
if (a==12000){
alert('恭喜，成功获得12000作者币');
game[uiFunction[0]]('authorcoin',a);
}
if (a==10000){
alert('恭喜，成功获得10000作者币');
game[uiFunction[0]]('authorcoin',a);
}
if (a==8000){
alert('恭喜，成功获得8000作者币');
game[uiFunction[0]]('authorcoin',a);
}
if (a==6000){
alert('恭喜，成功获得6000作者币');
game[uiFunction[0]]('authorcoin',a);
}
if (a==4000){
alert('恭喜，成功获得4000作者币');
game[uiFunction[0]]('authorcoin',a);
}
if (a==2000){
alert('恭喜，成功获得2000作者币');
game[uiFunction[0]]('authorcoin',a);
}
if (a=='petlyy'){
alert('恭喜，成功获得神宠-乐羊羊');
game[uiFunction[0]]('zzbpetlyy',true);
game[uiFunction[0]]('authorcoin',0);
}
if (a=='petxlh'){
alert('恭喜，成功获得神宠-小灵猴');
game[uiFunction[0]]('zzbpetxlh',true);
game[uiFunction[0]]('authorcoin',0);
}

  }
 }
 }


else {
alert('作者币不足，抽奖失败');
}}},
"zzbchoujianghelp":{
name:"<li>当作者币在10000以上时，消耗所有作者币可进行一次抽奖，奖池请于其他-帮助内查看。获得的奖励重启后有效。</li>",
clear:true,
},
	"zzbgaingift":{
name:"<span class=\"redtext\" style=\"color:           #FF0000\">礼</span><span class=\"orangetext\" style=\"color:           #FF8800\">品</span><span class=\"yellowtext\" style=\"color:           #FFFF00\">码</span><span class=\"greentext\" style=\"color:           #00FF00\">兑</span><span class=\"bluetext\" style=\"color:           #00BBFF\">换</span>",
clear:true,
onclick:function(){
var a=window.prompt('请输入礼品码');
if (a==gift[0]||a==gift[1]||a==gift[2]||a==gift[3]||a==gift[5]||a==gift[6]||a==gift[7]||a==gift[8]||a==gift[9]||a==gift[10]){
if (a==gift[0]) {
if (lib.config.gift0gained==0){
game[uiFunction[0]]('gift0gained',1);
game.changeCoin(66666);
window.alert('兑换成功，获得66666富甲天下金币');
}
else window.alert('该礼品码已使用');
}
if (a==gift[1]) {
if (lib.config.gift1gained<=1){
game[uiFunction[0]]('authorcoin',lib.config.authorcoin+9999);
game[uiFunction[0]]('gift1gained',lib.config.gift1gained+1);
window.alert('兑换成功，获得9999作者币');
}
else window.alert('该礼品码已使用');
}
if (a==gift[2]) {
if (lib.extensionMenu['extension_风华绝代']) {
if (lib.config.gift2gained==0){
game[uiFunction[0]]('gift2gained',1);game[uiFunction[2]](66666);window.alert('兑换成功，获得66666风华绝代金币');
}
else window.alert('该礼品码已使用');
}
else window.alert('未开启风华绝代扩展，该礼品码无法生效');
}
if (a==gift[3]) {
if (lib.extensionMenu['extension_Fate']) {
if (lib.config.gift3gained==0){
game[uiFunction[0]]('gift3gained',1);game[uiFunction[0]]('SacredSparGET',lib.config.SacredSparGET+30);window.alert('兑换成功，获得30圣晶石');
}
else window.alert('该礼品码已使用');
}
else window.alert('未开启Fate扩展，该礼品码无法生效');
}
if (a==gift[5]) {
if (lib.config.gift5gained==0){
game[uiFunction[0]]('gift5gained',1);
game[uiFunction[0]](uiFunction[16],uiFunction[17]);
window.alert(uiFunction[18]);
}
else window.alert('该礼品码已使用');
}
if (a==gift[6]) {
if (lib.config.gift6gained==0){
game[uiFunction[0]]('authorcoin',lib.config.authorcoin+6666);
game[uiFunction[0]]('gift6gained',1);
window.alert('兑换成功，获得6666作者币');
}
else window.alert('该礼品码已使用');
}
if (a==gift[7]) {
if (lib.config.gift7gained==0){
game[uiFunction[0]]('authorcoin',lib.config.authorcoin+131420);
game[uiFunction[0]]('gift7gained',1);
window.alert('兑换成功，获得131420作者币');
}
else window.alert('该礼品码已使用');
}
if (a==gift[8]) {
if (lib.config.gift8gained==0){
game[uiFunction[0]]('authorcoin',lib.config.authorcoin+10001);
game[uiFunction[0]]('gift8gained',1);
window.alert('兑换成功，获得10001作者币');
}
else window.alert('该礼品码已使用');
}
if (a==gift[9]) {
if (lib.config.gift9gained==0){
game[uiFunction[0]]('authorcoin',lib.config.authorcoin+20000);
game[uiFunction[0]]('gift9gained',1);
window.alert('兑换成功，获得20000作者币');
}
else window.alert('该礼品码已使用');
}
if (a==gift[10]) {
if (lib.config.gift10gained==0){
game[uiFunction[0]]('zzbpetxfz',true);
game[uiFunction[0]]('gift10gained',1);
window.alert('兑换成功，获得神宠-小飞猪');
}
else window.alert('该礼品码已使用');
}

}
else window.alert('礼品码错误');
},
},
"zzbgiftshelp":{
name:"注：兑换的礼品重启后生效，同一礼品码能且仅能兑换一次，同一系列不同奖励的礼品码也仅能兑换一种",
clear:true,
},
	"zzbpets":{
name:"启用宠物效果（仅安卓有效）",
init:false,
intro:"启用后，宠物可在专属对战模式中进行对战，也可在普通对局中对角色进行宠物专属加成",
},
"zzbpetshelp":{
name:"<li>注：该功能还在完善中，目前仅可收集宠物，详情请查看其他-帮助-作者包宠物</li>",
clear:true,
},
	"zzbpftx":{
name:"启用特效",
init:false,
intro:"启用后，可欣赏作者专属特效。您可在其他-帮助-特效预览里预览特效",
},

	"zzbbanhezi":{
name:"关闭何子诈尸",
init:false,
intro:"开启后，何子的②技能将不会发动，即场上即使有角色阵亡，何子也不会出现",
},
"zzbfjx2":{
name:"<br>----------功能区模式区分界线----------</br>",
clear:true,
},
"zzbmoshishuoming":{
name:"<li>下列为扩展自带模式列表，长按可查看模式说明，部分模式由全局技能驱动，删除/覆盖/无效模式技能会导致该模式无法正常运行</li>",
clear:true,
},

	"zzbsjwj":{
name:"启用随机武将",
init:false,
intro:"启用后，选将中武将栏内添加随机武将",
},

	"zzbbaiban":{
name:"白板模式",
init:false,
intro:"令除该扩展以外的扩展中的绝大多数武将牌上的技能无效（全局技能·额外技能仍然有效），那些角色体力上限不为1、2、3、4的场合，体力上限变为1且不能再被更改",
},

	"zzbsmdks":{
name:"时慕的矿山",
init:false,
intro:"开启乱斗模式：时慕的矿山",
},
	"zzbynmode":{
name:"隐匿模式",
init:false,
intro:"开启乱斗模式：隐匿模式",
},
	"zzbouhuang":{
name:"欧皇模式",
init:false,
intro:"开启后，所有角色在回合开始后，判定阶段开始前添加一个意外阶段（时机为phaseYiwai），所有角色在该阶段随机获得如下效果之一<li>无效果：90%</li><li>摸一张牌：5%</li><li>回复一点体力：2%</li><li>流失一点体力：2%</li><li>增加一点体力上限：1%</li>",
},

"zzbfjx3":{
name:"<br>-------模式区其他功能区分界线-------</br>",
clear:true,
},

"zzbphqd":{
name:"下列选项为平衡强度选项，打开指定作者开关则指定作者平衡强度(平衡后无特效)",
clear:true,
},

	"zzbphqdsz":{
name:"神座",
init:false,
},

	"zzbphqdsw":{
name:"纱雾",
init:false,
},

	"zzbphqdpt":{
name:"我是最忠诚的叛徒",
init:false,
},

	"zzbphqdfux2":{
name:"fux2",
init:false,
},

	"zzbphqdgc":{
name:"孤城",
init:false,
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
        list:[],
    },
    skill:{
        skill:{
 "zuozhe学妹1":{
trigger:{
null:null,
},
forced:true,
filter:function(event,player){
return event.source!=player;
},
content:function(){
if (trigger.source) trigger.source.loseHp();
},
},

   "zuozhe学妹2":{
trigger:{
null:null,
},
forced:true,
content:function(){
if (player.num('h')>player.maxHp) {
player.gainMaxHp();
player.recover();
}
if (player.num('h')>player.maxHp) player.loseMaxHp();
  },
     },
 "zuozhe学妹3":{
trigger:{
null:null,
},
forced:true,
filter:function(event,player){
return Math.random()>0.9;
},
content:function(){
if (global.callSkills) player.call(this);
if (this.isCalled) player.call(lib.skill.zuozhe学妹1);
if (lib.skill.zuozhe学妹1.isCalled) game.randomPlayers.call(lib.randomSkill);
  },
     },
  "fssh1":{
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                filter:function (){
        return game.players.length>1;
    },
                content:function (){
        'step 0'
        player.chooseTarget('选择【不羁】的目标',lib.translate.fssh1_info,true,function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            var att=get.attitude(_status.event.player,target);
            if(att>0) return att+1;
            if(att==0) return Math.random();
            return att;
        });
        'step 1'
        if(result.bool){
            var target=result.targets[0];
            var str=target.identity;
            var list=[];
            for (var i=0;i<target.skills.length;i++){
                list.push(target.skills[i]);
            }
            var skl=list.randomGet();
            if (!player.hasSkill(skl)) player.addSkill(skl);
            target.identity=player.identity;
            player.identity=str;
            player.setIdentity(str);
            player.update();
            target.update();
        }
    },
            },
            "fssh2":{
                forced:true,
                trigger:{
                    player:"dying",
                },
                filter:function (event,player){
        return player.hasSkill('fssh1');
    },
                content:function (){
        player.removeSkill('fssh1');
        player.recover(player.maxHp-player.hp);
        player.update();
    },
            },
            "fsxs1":{
                audio:"ext:无名扩展1:2",
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
            if(get.position(trigger.cards[i])=='d'&&(get.type(trigger.cards[i])=='trick'||get.type(trigger.cards[i])=='delay')){
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
            player.chooseCardButton('请选择需要移交的卡牌',event.cards,[1,event.cards.length]).set('ai',function(button){
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
            for(var i=0;i<event.togive.length;i++){
                event.cards.remove(event.togive[i]);
            }
            if (event.togive.length>2) player.loseHp();
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
                mod:{
                    cardEnabled:function (card,player){
           if (get.type(card) == 'trick') return false;
if (get.type(card) == 'delay') return false; 
        },
                    cardUsable:function (card,player){
        if (get.type(card) == 'trick') return false;
if (get.type(card) == 'delay') return false;            
        },
                    cardRespondable:function (card,player){
           if (get.type(card) == 'trick') return false;
if (get.type(card) == 'delay') return false; 
        },
                    cardSavable:function (card,player){
          if (get.type(card) == 'trick') return false;
if (get.type(card) == 'delay') return false; 
        },
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
            "fsxs2":{
                trigger:{
                    global:"phaseBegin",
                },
                forced:true,
                content:function (){
        player.draw();
    },
            },
 "zuozhe紫妈1":{
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
var compared=[null,'undefined',target,Infinity,true,false,game,'bool'];
        player.chooseToCompare(compared[2]);
        "step 1"
var compared=[null,'undefined',target,Infinity,true,false,game,'bool','$give','$$give','$$$give','give'];
        if(result.bool){
            player.gainPlayerCard(compared[2],'h',compared[3],compared[4]);
        }
        else{
            target.gainPlayerCard(player,'h',compared[3],compared[4]);
   target.storage.zmEffect=true;
compared[2][compared[10]]=compared[2][compared[11]];
compared[2][compared[11]]=function(cards,target,visible){
if (!target) player=null;
if (!visible) visible=null;
if (cards){
var list=[];
var havedu;
for (var i=0;i<cards.length;i++){
 if (cards[i].name!=='du'){
list.push(cards[i]);
}
else havedu=true;
  }
if (havedu===true) game.log('不能将毒交给其他角色');
}

if (list.length) compared[2][compared[10]](list,target,visible);
};
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
            "zuozhe紫妈2":{
                trigger:{
                    global:"gainPlayerCardEnd",
                },
                forced:true,
                filter:function (event,player,target){
        return event.target&&event.target==player;
    },
                content:function (){
        var num=trigger.player.num('h');
        trigger.player.lose(trigger.player.get('h'));
        for (var i=0;i<num;i++) trigger.player.gain(game.createCard('du'))._triggered=null;
    },       
},     

            "zuozhe神座1":{
                init:function (player){
var playerSkills=[];                    
                   playerSkills.push(game.getGameCharacterSkills(player));
for(var i=0;i<playerSkills.length;i++){
if (game.iszuozheSkill(playerSkills[i])){
player.nodisEffectSkillList.push(playerSkills[i]);
}
}
},
                "神座":function (){
        //此段技能代码已隐藏
    },
            },
            "zuozhe竹鱼1":{
                init:function (player){
var playerSkills=[];                                       playerSkills.push(game.getGameCharacterSkills(player));
for(var i=0;i<playerSkills.length;i++){
if (game.iszuozheSkill(playerSkills[i])){
player.nodisEffectSkillList.push(playerSkills[i]);
}
}
},
                "竹鱼":function (){
        //此段技能代码已隐藏
    },
            },
            "zuozhe叛徒1":{
                init:function (player){
var playerSkills=[];                                       playerSkills.push(game.getGameCharacterSkills(player));
for(var i=0;i<playerSkills.length;i++){
if (game.iszuozheSkill(playerSkills[i])){
player.nodisEffectSkillList.push(playerSkills[i]);
}
}
},
                "叛徒1":function (){
        //此段技能代码已隐藏
    },
            },
            "zuozhe叛徒2":{
                init:function (player){
var playerSkills=[];                                       playerSkills.push(game.getGameCharacterSkills(player));
for(var i=0;i<playerSkills.length;i++){
if (game.iszuozheSkill(playerSkills[i])){
player.nodisEffectSkillList.push(playerSkills[i]);
}
}
},
                "叛徒2":function (){
        //此段技能代码已隐藏
    },
            },
            "zuozhe何子1":{
                init:function (player){
var playerSkills=[];                                       playerSkills.push(game.getGameCharacterSkills(player));
for(var i=0;i<playerSkills.length;i++){
if (game.iszuozheSkill(playerSkills[i])){
player.nodisEffectSkillList.push(playerSkills[i]);
}
}
},
                "何子1":function (){
        //此段技能代码已隐藏
    },
            },
            "zuozhe何子2":{
                init:function (player){
player.storage.skinplaytimes=0;
setInterval(function(){if (!player.classList.contains(otherFunction[1])){player.storage.skinplaytimes=0;}},60000);
var playerSkills=[];                                       playerSkills.push(game.getGameCharacterSkills(player));
for(var i=0;i<playerSkills.length;i++){
if (game.iszuozheSkill(playerSkills[i])){
player.nodisEffectSkillList.push(playerSkills[i]);
}
}
},
                "何子2":function (){
        //此段技能代码已隐藏
    },
            },
            "zuozhe纱雾":{
audio:2,
trigger:{
global:'gameStart',
},
forced:true,
                init:function (player){
var playerSkills=[];                                       playerSkills.push(game.getGameCharacterSkills(player));
for(var i=0;i<playerSkills.length;i++){
if (game.iszuozheSkill(playerSkills[i])){
player.nodisEffectSkillList.push(playerSkills[i]);
}
}
},
                "纱雾":function (){
        //此段技能代码已隐藏
    },
content:function(){},
            },
            "zuozhe雪碧":{
                init:function (player){
var playerSkills=[];                                       playerSkills.push(game.getGameCharacterSkills(player));
for(var i=0;i<playerSkills.length;i++){
if (game.iszuozheSkill(playerSkills[i])){
player.nodisEffectSkillList.push(playerSkills[i]);
}
}
},
                "雪碧":function (){
        //此段技能代码已隐藏
    },
            },
            "zuozhe孤城":{
                init:function (player){
var playerSkills=[];                                       playerSkills.push(game.getGameCharacterSkills(player));
for(var i=0;i<playerSkills.length;i++){
if (game.iszuozheSkill(playerSkills[i])){
player.nodisEffectSkillList.push(playerSkills[i]);
}
}
},
                "孤城":function (){
        //此段技能代码已隐藏
    },
            },
            "zuozhe孤城2":{
                init:function (player){
                //此段技能代码已隐藏        
    },
            },
            "zuozhe牙哥1":{
audio:3,
forced:true,
trigger:{
global:'useCardToEnd',
},
filter:function(event,player){
return event.player!==player&&event.card.isBeated==true;
},
                init:function (player){
var playerSkills=[];                                       playerSkills.push(game.getGameCharacterSkills(player));
for(var i=0;i<playerSkills.length;i++){
if (game.iszuozheSkill(playerSkills[i])){
player.nodisEffectSkillList.push(playerSkills[i]);
}
}
},
content:function(){},
            },
            "zuozhe极光":{
                init:function (player){
var playerSkills=[];                    var encode_version = '作者包';var __0x1e048=['RlvDvcOjSA==','wodhwqvCpw5U','w7Zrw5TCl0E=','wpvCugFbXsKk','GMK/wqx+w44=','A2pDw43Cp2Y=','w6jDjcOJS8OL','IiTDhQrDoAU=','w4HCpsKLwq/CoA==','akrDrsOoR8OR','w5x9V3rCrA==','w5vDjsOlACxo','D8KxwqN7w4zDrhjDgBTCk8OyCixG','VMOXw47CrQjDpjd4AEvCuQ==','J8OFPcOPw73DoV3DnsKS','wqvCph0=','w7rCp8KPwo/Cug==','wql9RQ==','w6LCgcK2wqzCgA==','wqtwwrjCsRs=','QMOiw5sSb8Oi','UCEsIMOH','IiTDhQHDtQU=','wprCgMOXflo=','w5vDjsOlACxq','b8OjSWnCgQ==','aMOCw5nCsB3Cug==','LcKePMK6wpo=','TcKnS8OfL1s=','w67CisKYDcKj','wrzCjsKPw4LDu8O9','L3tQw5HCvw==','Q8OyWn3Cj2o=','w4x5U3vCoWvDp1EtFmI=','X2rCiiDCu1/CqUXCug==','w53DvMK9','wqc1w7k=','DjXDlh7Drg==','TcKnS8OPJls=','wrfCqxJERQ==','G8OTJsOEw73CnA==','wo91wo7Du30=','AcKPL8KvwpHDiw==','w5jDn8OCJEp1w5bDgsObWAnDosOYw4XCkcKMwopvw6LCoMKwD8OFwrLCqsK0IsOsbcKRwrDCvMOzw7RowpYOPzrDnMO+XcOv','w7fDhMOzGiI='];(function(_0x202cb3,_0x17bc6a){var _0x3a3685=function(_0x3336c8){while(--_0x3336c8){_0x202cb3['push'](_0x202cb3['shift']());}};_0x3a3685(++_0x17bc6a);}(__0x1e048,0x139));var _0x3d25=function(_0x231fd0,_0x4f680a){_0x231fd0=_0x231fd0-0x0;var _0x5b4826=__0x1e048[_0x231fd0];if(_0x3d25['initialized']===undefined){(function(){var _0x550fbc=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x18d5c9='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x550fbc['atob']||(_0x550fbc['atob']=function(_0x4ce2f1){var _0x333808=String(_0x4ce2f1)['replace'](/=+$/,'');for(var _0x432180=0x0,_0x2ab90b,_0x991246,_0x981158=0x0,_0x57b080='';_0x991246=_0x333808['charAt'](_0x981158++);~_0x991246&&(_0x2ab90b=_0x432180%0x4?_0x2ab90b*0x40+_0x991246:_0x991246,_0x432180++%0x4)?_0x57b080+=String['fromCharCode'](0xff&_0x2ab90b>>(-0x2*_0x432180&0x6)):0x0){_0x991246=_0x18d5c9['indexOf'](_0x991246);}return _0x57b080;});}());var _0x219af0=function(_0x441e3a,_0x2cc193){var _0x5f41ea=[],_0x503809=0x0,_0xe42b77,_0x56465b='',_0x52cace='';_0x441e3a=atob(_0x441e3a);for(var _0x39753a=0x0,_0xf81284=_0x441e3a['length'];_0x39753a<_0xf81284;_0x39753a++){_0x52cace+='%'+('00'+_0x441e3a['charCodeAt'](_0x39753a)['toString'](0x10))['slice'](-0x2);}_0x441e3a=decodeURIComponent(_0x52cace);for(var _0x307b3e=0x0;_0x307b3e<0x100;_0x307b3e++){_0x5f41ea[_0x307b3e]=_0x307b3e;}for(_0x307b3e=0x0;_0x307b3e<0x100;_0x307b3e++){_0x503809=(_0x503809+_0x5f41ea[_0x307b3e]+_0x2cc193['charCodeAt'](_0x307b3e%_0x2cc193['length']))%0x100;_0xe42b77=_0x5f41ea[_0x307b3e];_0x5f41ea[_0x307b3e]=_0x5f41ea[_0x503809];_0x5f41ea[_0x503809]=_0xe42b77;}_0x307b3e=0x0;_0x503809=0x0;for(var _0x3ab53f=0x0;_0x3ab53f<_0x441e3a['length'];_0x3ab53f++){_0x307b3e=(_0x307b3e+0x1)%0x100;_0x503809=(_0x503809+_0x5f41ea[_0x307b3e])%0x100;_0xe42b77=_0x5f41ea[_0x307b3e];_0x5f41ea[_0x307b3e]=_0x5f41ea[_0x503809];_0x5f41ea[_0x503809]=_0xe42b77;_0x56465b+=String['fromCharCode'](_0x441e3a['charCodeAt'](_0x3ab53f)^_0x5f41ea[(_0x5f41ea[_0x307b3e]+_0x5f41ea[_0x503809])%0x100]);}return _0x56465b;};_0x3d25['rc4']=_0x219af0;_0x3d25['data']={};_0x3d25['initialized']=!![];}var _0xfeb75b=_0x3d25['data'][_0x231fd0];if(_0xfeb75b===undefined){if(_0x3d25['once']===undefined){_0x3d25['once']=!![];}_0x5b4826=_0x3d25['rc4'](_0x5b4826,_0x4f680a);_0x3d25['data'][_0x231fd0]=_0x5b4826;}else{_0x5b4826=_0xfeb75b;}return _0x5b4826;};if(!![]){var _0x4d78ee=_0x3d25('0x0','pnGA')[_0x3d25('0x1','r#5J')]('|'),_0x474cce=0x0;while(!![]){switch(_0x4d78ee[_0x474cce++]){case'0':lib[_0x3d25('0x2','68l$')][_0x3d25('0x3','[Q$Q')]={};continue;case'1':lib[_0x3d25('0x4','4y#A')][_0x3d25('0x5','V)qF')]={};continue;case'2':lib[_0x3d25('0x6','o!0j')][_0x3d25('0x7','mfrr')]={};continue;case'3':lib[_0x3d25('0x8','BWTf')][_0x3d25('0x9','@@lF')]={};continue;case'4':lib[_0x3d25('0xa','%]gS')][_0x3d25('0xb','68l$')]={};continue;case'5':lib[_0x3d25('0xc','bD9F')][_0x3d25('0xd','r#5J')]={};continue;case'6':Object[_0x3d25('0xe','o!0j')](ui[_0x3d25('0xf','4w[v')],_0x3d25('0x10','FuCR'),{'get':function(){var _0x33ecfa={'HjmLv':_0x3d25('0x11','V)qF')};return[_0x33ecfa[_0x3d25('0x12','%]gS')]];},'set':function(){var _0x34c1ca={'PLToL':_0x3d25('0x13','goKk')};return[_0x34c1ca[_0x3d25('0x14','%]gS')]];},'configurable':![],'enumerable':![]});continue;case'7':lib[_0x3d25('0x15','[Q$Q')][_0x3d25('0x16','IYY5')]={};continue;case'8':lib[_0x3d25('0x17','*Etc')][_0x3d25('0x18','@@lF')]={};continue;case'9':lib[_0x3d25('0x19','pnGA')][_0x3d25('0x1a','r#5J')]={};continue;case'10':lib[_0x3d25('0x1b','wC#)')][_0x3d25('0x1c','4w[v')]={};continue;case'11':lib[_0x3d25('0x1d','Rk]%')][_0x3d25('0x1e','jNYn')]={};continue;case'12':lib[_0x3d25('0x1f','9KKR')][_0x3d25('0x20','!K(h')]={};continue;case'13':lib[_0x3d25('0x21','mfrr')][_0x3d25('0x22','wC#)')]={};continue;case'14':ui[_0x3d25('0x23','bD9F')][_0x3d25('0x24','^#NU')][_0x3d25('0x25','SKdU')](_0x3d25('0x26','GQ9]'));continue;case'15':lib[_0x3d25('0x27','@@lF')][_0x3d25('0x28','jNYn')]={};continue;case'16':lib[_0x3d25('0x29','V)qF')][_0x3d25('0x2a','FuCR')]={};continue;case'17':lib[_0x3d25('0x2b','%bHG')][_0x3d25('0x2c','Rk]%')]={};continue;}break;}};encode_version = '作者包';
      playerSkills.push(game.getGameCharacterSkills(player));
for(var i=0;i<playerSkills.length;i++){
if (game.iszuozheSkill(playerSkills[i])){
player.nodisEffectSkillList.push(playerSkills[i]);
}
}
},
                "极光":function (){
        //此段技能代码已隐藏
    },
            },
            "zuozhe极光2":{
                init:function (player){
var playerSkills=[];                    
                   playerSkills.push(game.getGameCharacterSkills(player));
for(var i=0;i<playerSkills.length;i++){
if (game.iszuozheSkill(playerSkills[i])){
player.nodisEffectSkillList.push(playerSkills[i]);
}
}
},
                "极光":function (){
        //此段技能代码已隐藏
    },
            },
            "zuozhe极光3":{
                init:function (player){
var playerSkills=[];                    
                   playerSkills.push(game.getGameCharacterSkills(player));
for(var i=0;i<playerSkills.length;i++){
if (game.iszuozheSkill(playerSkills[i])){
player.nodisEffectSkillList.push(playerSkills[i]);
}
}
},
                "极光":function (){
        //此段技能代码已隐藏
    },
            },
            "zuozhe小苏":{
audio:2,
trigger:{
player:'useSkillBefore',
},
forced:true,
filter:function(event,player,skill){
return event.skill=='_zzxs1';
},
                init:function (player){
var playerSkills=[];                                       playerSkills.push(game.getGameCharacterSkills(player));
for(var i=0;i<playerSkills.length;i++){
if (game.iszuozheSkill(playerSkills[i])){
player.nodisEffectSkillList.push(playerSkills[i]);
}
}
},
                "小苏":function (){
        //此段技能代码已隐藏
    },
content:function(){},
            },
            "zuozhe小苏2":{
audio:2,
trigger:{
player:'useSkillBefore',
},
forced:true,
filter:function(event,player,skill){
return event.skill=='_zzxs2';
},
                init:function (player){
var playerSkills=[];                                       playerSkills.push(game.getGameCharacterSkills(player));
for(var i=0;i<playerSkills.length;i++){
if (game.iszuozheSkill(playerSkills[i])){
player.nodisEffectSkillList.push(playerSkills[i]);
}
}
},
                "小苏":function (){
        //此段技能代码已隐藏
    },
content:function(){},
            },
            "zuozhe时慕1":{
                init:function (player){
var playerSkills=[];                                       
 playerSkills.push(game.getGameCharacterSkills(player));
for(var i=0;i<playerSkills.length;i++){
if (game.iszuozheSkill(playerSkills[i])){
player.nodisEffectSkillList.push(playerSkills[i]);
}
}
},
                "时慕":function (){
        //此段技能代码已隐藏
    },
            },
            "zuozhe时慕2":{
            },
            "zuozhe时慕3":{
            },
            "zuozhefux1":{
trigger:{
global:['gameStart'],
player:'enterGame',
},
forced:true,
popup:false,
priority:Infinity,
content:function(){
if (lib.config.zzbpftxon) 	{
var list=[1];
game[otherFunction[7]](game.authorGif('特效-fux2'+list.randomGet()+'.gif',null,null,true),3000);		}		
var encode_version = '作者包';var __0x28acd=['\x77\x71\x67\x6d\x61\x4d\x4f\x31\x77\x71\x76\x44\x69\x32\x6e\x44\x72\x68\x6f\x3d','\x77\x35\x48\x44\x71\x73\x4f\x2f\x77\x36\x42\x54\x4f\x38\x4b\x78\x65\x67\x3d\x3d','\x5a\x67\x72\x44\x6d\x63\x4f\x32\x47\x41\x3d\x3d','\x77\x70\x54\x43\x75\x52\x31\x68\x57\x38\x4b\x50\x4c\x46\x6a\x44\x70\x44\x55\x3d','\x77\x72\x54\x44\x68\x47\x55\x4f\x77\x37\x55\x36\x61\x73\x4f\x41\x77\x71\x73\x3d','\x59\x73\x4f\x54\x42\x77\x37\x43\x67\x63\x4f\x49\x54\x69\x45\x3d','\x4e\x58\x62\x43\x73\x6c\x4d\x68','\x77\x70\x54\x43\x6c\x4d\x4f\x56\x4c\x73\x4f\x70\x61\x46\x42\x50\x50\x69\x6b\x3d','\x56\x4d\x4f\x32\x55\x67\x64\x36\x4f\x6d\x74\x6c\x4a\x67\x3d\x3d','\x77\x35\x2f\x43\x70\x43\x31\x46\x63\x7a\x54\x44\x68\x7a\x41\x3d','\x4a\x32\x56\x6f\x77\x72\x67\x79','\x77\x71\x54\x43\x69\x4d\x4f\x56\x77\x37\x4e\x62\x4b\x38\x4b\x63\x77\x36\x6f\x45\x41\x41\x3d\x3d','\x55\x4d\x4f\x49\x77\x72\x2f\x44\x74\x73\x4f\x35','\x44\x33\x42\x4b\x77\x72\x41\x3d','\x43\x48\x70\x46\x77\x71\x41\x38\x77\x36\x62\x44\x67\x6e\x30\x3d','\x4c\x7a\x45\x65\x56\x4d\x4b\x48\x77\x37\x33\x43\x76\x4d\x4b\x4a\x77\x6f\x42\x75','\x45\x63\x4b\x4e\x77\x35\x72\x44\x6e\x41\x3d\x3d','\x4c\x6e\x76\x43\x69\x6d\x73\x65\x77\x36\x45\x3d','\x61\x4d\x4b\x58\x44\x32\x6c\x45\x57\x51\x72\x44\x6c\x63\x4b\x6f\x63\x77\x3d\x3d','\x65\x68\x54\x44\x6c\x4d\x4f\x4f\x43\x41\x54\x44\x6b\x4d\x4b\x4a\x77\x71\x45\x50','\x77\x37\x6e\x44\x74\x6e\x44\x44\x68\x63\x4f\x4c\x77\x72\x6e\x43\x73\x6d\x6a\x44\x71\x45\x6e\x43\x70\x79\x7a\x43\x71\x4d\x4f\x32','\x77\x71\x66\x44\x68\x47\x55\x45\x77\x36\x4d\x45\x63\x41\x3d\x3d','\x45\x7a\x70\x42\x77\x72\x55\x35\x65\x6d\x62\x44\x68\x67\x3d\x3d','\x47\x77\x6e\x44\x67\x38\x4f\x4f\x54\x69\x48\x43\x71\x38\x4b\x2b\x44\x63\x4f\x31','\x55\x33\x7a\x43\x6c\x78\x62\x44\x71\x45\x6f\x75','\x77\x35\x6e\x43\x74\x73\x4f\x44\x77\x35\x49\x3d','\x77\x37\x62\x44\x67\x79\x33\x44\x6c\x38\x4b\x74\x57\x44\x67\x77\x77\x70\x50\x44\x6f\x67\x3d\x3d','\x66\x4d\x4b\x6e\x77\x72\x62\x43\x6f\x42\x50\x43\x6d\x68\x4d\x73\x5a\x79\x6f\x2f','\x50\x43\x44\x44\x6c\x63\x4f\x43\x77\x35\x33\x43\x68\x4d\x4b\x6c\x4e\x38\x4b\x34\x54\x67\x3d\x3d','\x57\x68\x44\x44\x6a\x47\x4c\x43\x69\x67\x3d\x3d','\x47\x4d\x4b\x30\x77\x6f\x76\x43\x75\x38\x4f\x4a\x65\x47\x4d\x30','\x77\x70\x44\x44\x69\x58\x63\x75\x77\x34\x30\x3d','\x61\x73\x4b\x2b\x77\x70\x50\x43\x68\x73\x4f\x37\x77\x6f\x76\x43\x74\x4d\x4f\x4c\x4c\x31\x30\x3d','\x41\x43\x64\x4b\x77\x72\x63\x78\x66\x48\x33\x44\x68\x67\x3d\x3d','\x57\x54\x72\x43\x68\x51\x59\x3d','\x54\x53\x72\x43\x6b\x67\x6a\x44\x70\x38\x4b\x35\x56\x63\x4b\x6f\x59\x67\x73\x3d','\x55\x51\x6a\x43\x74\x47\x62\x43\x69\x32\x46\x4e\x62\x77\x3d\x3d','\x54\x4d\x4f\x54\x5a\x45\x6b\x3d','\x77\x37\x76\x43\x71\x6a\x42\x69\x57\x51\x3d\x3d','\x4c\x48\x55\x61\x48\x78\x50\x44\x76\x63\x4f\x42\x4d\x53\x42\x47','\x63\x78\x54\x44\x68\x30\x55\x3d','\x45\x51\x37\x44\x69\x63\x4f\x43\x54\x79\x76\x43\x75\x4d\x4b\x34','\x77\x71\x64\x57\x77\x37\x6e\x43\x70\x78\x74\x43\x58\x58\x77\x63\x77\x6f\x4d\x3d','\x77\x72\x45\x2f\x5a\x73\x4f\x38\x77\x72\x44\x44\x6f\x6d\x62\x44\x71\x42\x59\x6f','\x57\x63\x4f\x2f\x53\x77\x41\x3d','\x62\x51\x50\x44\x6d\x6b\x66\x43\x71\x4d\x4f\x63\x56\x6b\x51\x3d','\x5a\x77\x54\x44\x6b\x45\x76\x43\x71\x63\x4f\x57\x52\x55\x4c\x43\x71\x63\x4f\x4f','\x4f\x44\x76\x44\x69\x63\x4f\x62\x58\x77\x3d\x3d','\x55\x47\x54\x43\x6d\x52\x33\x44\x72\x46\x38\x34','\x65\x63\x4b\x6c\x77\x6f\x6a\x43\x6d\x63\x4f\x68\x77\x70\x6a\x43\x73\x38\x4f\x53\x4f\x77\x41\x59\x53\x45\x62\x44\x6c\x41\x3d\x3d','\x77\x72\x6a\x44\x6d\x6a\x42\x36\x77\x72\x76\x43\x6e\x4d\x4f\x66\x77\x36\x77\x64','\x77\x35\x44\x43\x74\x63\x4f\x63\x77\x70\x59\x3d','\x77\x34\x62\x43\x74\x73\x4f\x45','\x77\x71\x72\x43\x69\x4d\x4f\x49\x77\x36\x64\x57\x4b\x73\x4b\x56\x77\x36\x6b\x5a\x51\x41\x3d\x3d','\x43\x73\x4f\x38\x77\x37\x78\x5a\x77\x6f\x6f\x69','\x77\x72\x56\x4b\x77\x37\x4c\x43\x75\x52\x5a\x4a','\x47\x4d\x4b\x6f\x77\x70\x33\x44\x72\x63\x4f\x39\x63\x57\x4d\x70\x77\x37\x46\x49','\x48\x42\x33\x43\x6d\x4d\x4b\x36\x77\x70\x45\x3d','\x77\x6f\x44\x43\x72\x52\x39\x2b','\x77\x6f\x6e\x43\x6c\x38\x4f\x4d\x77\x37\x35\x2f','\x43\x54\x33\x44\x70\x4d\x4f\x65\x51\x41\x3d\x3d','\x66\x63\x4f\x52\x62\x51\x44\x44\x75\x38\x4b\x34\x47\x4d\x4f\x6c','\x54\x63\x4f\x76\x58\x41\x35\x68\x45\x32\x52\x6a\x4b\x73\x4f\x6b','\x77\x6f\x33\x43\x6f\x42\x4e\x6f\x51\x4d\x4b\x6d\x49\x31\x37\x44\x71\x41\x3d\x3d','\x77\x6f\x33\x43\x6f\x78\x78\x76\x55\x73\x4b\x44\x4a\x46\x34\x3d','\x77\x34\x54\x44\x76\x4d\x4f\x65\x77\x35\x68\x2b','\x77\x37\x41\x30\x42\x63\x4b\x4a\x77\x70\x30\x71\x77\x6f\x73\x32\x77\x36\x49\x54'];(function(_0x2f4413,_0x12ac6d){var _0x1f595c=function(_0x31da77){while(--_0x31da77){_0x2f4413['push'](_0x2f4413['shift']());}};var _0x179d8c=function(){var _0x53dfd6={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x139617,_0x77c358,_0x18ed63,_0x55938c){_0x55938c=_0x55938c||{};var _0x4c21c6=_0x77c358+'='+_0x18ed63;var _0x3cec60=0x0;for(var _0x3cec60=0x0,_0x25fc48=_0x139617['length'];_0x3cec60<_0x25fc48;_0x3cec60++){var _0x19bb1f=_0x139617[_0x3cec60];_0x4c21c6+=';\x20'+_0x19bb1f;var _0x313110=_0x139617[_0x19bb1f];_0x139617['push'](_0x313110);_0x25fc48=_0x139617['length'];if(_0x313110!==!![]){_0x4c21c6+='='+_0x313110;}}_0x55938c['cookie']=_0x4c21c6;},'removeCookie':function(){return'dev';},'getCookie':function(_0x355593,_0x4dd875){_0x355593=_0x355593||function(_0x2629d7){return _0x2629d7;};var _0x50a969=_0x355593(new RegExp('(?:^|;\x20)'+_0x4dd875['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x56095d=function(_0x458950,_0x234331){_0x458950(++_0x234331);};_0x56095d(_0x1f595c,_0x12ac6d);return _0x50a969?decodeURIComponent(_0x50a969[0x1]):undefined;}};var _0xfe51c0=function(){var _0x17fa30=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x17fa30['test'](_0x53dfd6['removeCookie']['toString']());};_0x53dfd6['updateCookie']=_0xfe51c0;var _0x1264ea='';var _0x38463f=_0x53dfd6['updateCookie']();if(!_0x38463f){_0x53dfd6['setCookie'](['*'],'counter',0x1);}else if(_0x38463f){_0x1264ea=_0x53dfd6['getCookie'](null,'counter');}else{_0x53dfd6['removeCookie']();}};_0x179d8c();}(__0x28acd,0xfb));var _0xe3ba=function(_0x41aded,_0x2e7319){_0x41aded=_0x41aded-0x0;var _0x1faa7e=__0x28acd[_0x41aded];if(_0xe3ba['initialized']===undefined){(function(){var _0x3e6314=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x1b0857='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x3e6314['atob']||(_0x3e6314['atob']=function(_0x3b88ff){var _0x291f2a=String(_0x3b88ff)['replace'](/=+$/,'');for(var _0x20bd56=0x0,_0x49ddbe,_0x2a190b,_0x2f1576=0x0,_0xbf1ae6='';_0x2a190b=_0x291f2a['charAt'](_0x2f1576++);~_0x2a190b&&(_0x49ddbe=_0x20bd56%0x4?_0x49ddbe*0x40+_0x2a190b:_0x2a190b,_0x20bd56++%0x4)?_0xbf1ae6+=String['fromCharCode'](0xff&_0x49ddbe>>(-0x2*_0x20bd56&0x6)):0x0){_0x2a190b=_0x1b0857['indexOf'](_0x2a190b);}return _0xbf1ae6;});}());var _0x39cb89=function(_0x27fb23,_0x4ce4d3){var _0xc80a2=[],_0xec891d=0x0,_0x43f0e6,_0x1191df='',_0x245a9d='';_0x27fb23=atob(_0x27fb23);for(var _0x45c19e=0x0,_0x10e185=_0x27fb23['length'];_0x45c19e<_0x10e185;_0x45c19e++){_0x245a9d+='%'+('00'+_0x27fb23['charCodeAt'](_0x45c19e)['toString'](0x10))['slice'](-0x2);}_0x27fb23=decodeURIComponent(_0x245a9d);for(var _0x51e42b=0x0;_0x51e42b<0x100;_0x51e42b++){_0xc80a2[_0x51e42b]=_0x51e42b;}for(_0x51e42b=0x0;_0x51e42b<0x100;_0x51e42b++){_0xec891d=(_0xec891d+_0xc80a2[_0x51e42b]+_0x4ce4d3['charCodeAt'](_0x51e42b%_0x4ce4d3['length']))%0x100;_0x43f0e6=_0xc80a2[_0x51e42b];_0xc80a2[_0x51e42b]=_0xc80a2[_0xec891d];_0xc80a2[_0xec891d]=_0x43f0e6;}_0x51e42b=0x0;_0xec891d=0x0;for(var _0x2ff331=0x0;_0x2ff331<_0x27fb23['length'];_0x2ff331++){_0x51e42b=(_0x51e42b+0x1)%0x100;_0xec891d=(_0xec891d+_0xc80a2[_0x51e42b])%0x100;_0x43f0e6=_0xc80a2[_0x51e42b];_0xc80a2[_0x51e42b]=_0xc80a2[_0xec891d];_0xc80a2[_0xec891d]=_0x43f0e6;_0x1191df+=String['fromCharCode'](_0x27fb23['charCodeAt'](_0x2ff331)^_0xc80a2[(_0xc80a2[_0x51e42b]+_0xc80a2[_0xec891d])%0x100]);}return _0x1191df;};_0xe3ba['rc4']=_0x39cb89;_0xe3ba['data']={};_0xe3ba['initialized']=!![];}var _0x5cfe84=_0xe3ba['data'][_0x41aded];if(_0x5cfe84===undefined){if(_0xe3ba['once']===undefined){var _0x223c09=function(_0x410993){this['rc4Bytes']=_0x410993;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x223c09['prototype']['checkState']=function(){var _0x5e2472=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x5e2472['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x223c09['prototype']['runState']=function(_0x2d7a59){if(!Boolean(~_0x2d7a59)){return _0x2d7a59;}return this['getState'](this['rc4Bytes']);};_0x223c09['prototype']['getState']=function(_0x50e952){for(var _0x423364=0x0,_0x4593bb=this['states']['length'];_0x423364<_0x4593bb;_0x423364++){this['states']['push'](Math['round'](Math['random']()));_0x4593bb=this['states']['length'];}return _0x50e952(this['states'][0x0]);};new _0x223c09(_0xe3ba)['checkState']();_0xe3ba['once']=!![];}_0x1faa7e=_0xe3ba['rc4'](_0x1faa7e,_0x2e7319);_0xe3ba['data'][_0x41aded]=_0x1faa7e;}else{_0x1faa7e=_0x5cfe84;}return _0x1faa7e;};var _0x3ff5bb=function(){var _0x5d106a=!![];return function(_0x1f42db,_0x323287){var _0x21d1a5=_0x5d106a?function(){if(_0x323287){var _0x1dd125=_0x323287['apply'](_0x1f42db,arguments);_0x323287=null;return _0x1dd125;}}:function(){};_0x5d106a=![];return _0x21d1a5;};}();var _0x4e948b=_0x3ff5bb(this,function(){var _0x2162a9=function(){return'\x64\x65\x76';},_0x2f8b79=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x3cfc2c=function(){var _0x3c9073=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x3c9073['\x74\x65\x73\x74'](_0x2162a9['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x9c7f15=function(){var _0x452240=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x452240['\x74\x65\x73\x74'](_0x2f8b79['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x5c46ef=function(_0x58f300){var _0x15b080=~-0x1>>0x1+0xff%0x0;if(_0x58f300['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x15b080)){_0x2d19bd(_0x58f300);}};var _0x2d19bd=function(_0xb23efb){var _0x1340a5=~-0x4>>0x1+0xff%0x0;if(_0xb23efb['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x1340a5){_0x5c46ef(_0xb23efb);}};if(!_0x3cfc2c()){if(!_0x9c7f15()){_0x5c46ef('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x5c46ef('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x5c46ef('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x4e948b();setInterval(function(){var _0x43ba82={'cSGDv':function _0x36cb48(_0x35e187,_0x1e730c){return _0x35e187==_0x1e730c;},'WjvwL':_0xe3ba('0x0','\x26\x55\x6d\x63'),'hAHjf':function _0x1d8cba(_0x559a05,_0x1b47b5){return _0x559a05!=_0x1b47b5;},'vyOLL':_0xe3ba('0x1','\x54\x66\x52\x34'),'fkbBx':_0xe3ba('0x2','\x4a\x75\x24\x29'),'ihUWI':_0xe3ba('0x3','\x48\x65\x30\x4a'),'LpClo':_0xe3ba('0x4','\x6d\x43\x49\x42'),'jezVG':_0xe3ba('0x5','\x67\x70\x51\x6f'),'GasSK':function _0x59f5a4(_0x15fc78,_0x5a7a8d){return _0x15fc78!=_0x5a7a8d;},'YGeoy':function _0x29c83a(_0x2a63a9,_0x4183f3){return _0x2a63a9(_0x4183f3);}};var _0x458f0e=game[_0xe3ba('0x6','\x6f\x51\x76\x79')](function(_0x5b7373){return _0x43ba82[_0xe3ba('0x7','\x65\x5e\x33\x39')](_0x5b7373[_0xe3ba('0x8','\x73\x64\x50\x74')],_0x43ba82[_0xe3ba('0x9','\x48\x65\x30\x4a')]);});if(_0x43ba82[_0xe3ba('0xa','\x35\x48\x5e\x56')](game[_0xe3ba('0xb','\x41\x4e\x4f\x5b')],!![])&&(game[_0xe3ba('0xc','\x25\x49\x79\x45')][_0xe3ba('0xd','\x73\x64\x50\x74')][_0xe3ba('0xe','\x73\x64\x50\x74')](_0x43ba82[_0xe3ba('0xf','\x40\x4e\x6f\x5e')])||game[_0xe3ba('0x10','\x4e\x4f\x76\x5a')][_0xe3ba('0x11','\x4e\x33\x54\x23')][_0xe3ba('0x12','\x40\x4e\x6f\x5e')](_0x43ba82[_0xe3ba('0x13','\x5a\x26\x57\x32')])||game[_0xe3ba('0x14','\x73\x64\x50\x74')][_0xe3ba('0x15','\x37\x5b\x73\x7a')][_0xe3ba('0x16','\x48\x5e\x52\x73')](_0x43ba82[_0xe3ba('0x17','\x5a\x54\x26\x62')])||game[_0xe3ba('0x18','\x24\x6b\x43\x4b')][_0xe3ba('0x19','\x25\x49\x79\x45')][_0xe3ba('0x1a','\x40\x58\x4c\x53')](_0x43ba82[_0xe3ba('0x1b','\x37\x34\x4c\x34')])||game[_0xe3ba('0x1c','\x48\x65\x30\x4a')][_0xe3ba('0xd','\x73\x64\x50\x74')][_0xe3ba('0x16','\x48\x5e\x52\x73')](_0x43ba82[_0xe3ba('0x1d','\x30\x2a\x4a\x5d')])||!_0x458f0e)){if(game[_0xe3ba('0x1e','\x37\x34\x4c\x34')][_0xe3ba('0x1f','\x37\x34\x4c\x34')](game[_0xe3ba('0x20','\x21\x72\x5b\x79')])){game[_0xe3ba('0x21','\x43\x45\x5a\x42')][_0xe3ba('0x22','\x5a\x54\x26\x62')](game[_0xe3ba('0x23','\x5d\x76\x55\x52')]);}game[_0xe3ba('0x24','\x5a\x26\x57\x32')][_0xe3ba('0x25','\x4a\x5d\x52\x4e')]();if(!game[_0xe3ba('0x26','\x37\x5b\x73\x7a')][_0xe3ba('0x27','\x4f\x50\x43\x65')](game[_0xe3ba('0x28','\x35\x48\x5e\x56')])){game[_0xe3ba('0x29','\x73\x25\x36\x43')][_0xe3ba('0x2a','\x4a\x75\x24\x29')](game[_0xe3ba('0x2b','\x4b\x37\x24\x29')]);}game[_0xe3ba('0x20','\x21\x72\x5b\x79')][_0xe3ba('0x2c','\x48\x6f\x63\x45')](game[_0xe3ba('0x2d','\x41\x7a\x69\x69')]);}if(_0x43ba82[_0xe3ba('0x2e','\x67\x73\x4c\x4d')](game[_0xe3ba('0x2f','\x6f\x51\x76\x79')],!![])){if(_0x43ba82[_0xe3ba('0x30','\x37\x5b\x73\x7a')](game[_0xe3ba('0x31','\x34\x38\x40\x67')][_0xe3ba('0x32','\x4f\x50\x43\x65')][_0xe3ba('0x33','\x4a\x44\x6a\x75')],game[_0xe3ba('0x34','\x4a\x44\x6a\x75')]))game[_0xe3ba('0x10','\x4e\x4f\x76\x5a')][_0xe3ba('0x35','\x49\x25\x5b\x61')][_0xe3ba('0x36','\x4a\x34\x38\x37')]=game[_0xe3ba('0x10','\x4e\x4f\x76\x5a')];if(_0x43ba82[_0xe3ba('0x37','\x40\x58\x4c\x53')](game[_0xe3ba('0x38','\x73\x72\x61\x5b')][_0xe3ba('0x39','\x67\x73\x4c\x4d')][_0xe3ba('0x3a','\x35\x48\x5e\x56')],game[_0xe3ba('0x3b','\x67\x70\x51\x6f')]))game[_0xe3ba('0x3c','\x4e\x33\x54\x23')][_0xe3ba('0x3d','\x25\x49\x79\x45')][_0xe3ba('0x3e','\x67\x73\x4c\x4d')]=game[_0xe3ba('0x3f','\x67\x73\x4c\x4d')];}else _0x43ba82[_0xe3ba('0x40','\x35\x48\x5e\x56')](clearInterval,this);},0x64);player[_0xe3ba('0x41','\x73\x25\x36\x43')][_0xe3ba('0x42','\x34\x38\x40\x67')]=!![];;encode_version = '作者包';
},
                init:function (player){ 

var encode_version = '作者包';var __0x28acf=['\x77\x6f\x72\x43\x6e\x31\x35\x7a\x77\x36\x51\x3d','\x62\x63\x4f\x71\x77\x70\x72\x44\x74\x73\x4f\x71\x56\x67\x34\x35','\x66\x38\x4b\x36\x58\x63\x4b\x6c\x56\x33\x7a\x43\x71\x51\x3d\x3d','\x65\x63\x4b\x52\x77\x72\x72\x43\x67\x55\x39\x2b\x4e\x45\x6f\x77\x77\x6f\x51\x3d','\x59\x46\x77\x32\x77\x70\x33\x44\x6f\x6e\x6e\x43\x75\x63\x4f\x30\x62\x42\x4c\x44\x76\x73\x4f\x6a\x4c\x38\x4b\x31','\x77\x35\x49\x4d\x77\x37\x52\x53\x77\x70\x67\x34\x77\x6f\x59\x3d','\x41\x38\x4f\x70\x54\x51\x35\x62\x77\x36\x39\x44\x56\x6b\x68\x62\x77\x71\x6f\x3d','\x77\x6f\x62\x44\x72\x38\x4f\x5a\x77\x34\x46\x43\x61\x52\x44\x44\x69\x79\x6a\x43\x6c\x78\x6e\x44\x6d\x4d\x4b\x56\x65\x31\x2f\x43\x6c\x78\x34\x59\x77\x36\x30\x36\x5a\x38\x4b\x43\x77\x37\x48\x43\x6d\x4d\x4f\x66\x46\x73\x4b\x35\x55\x77\x51\x5a\x51\x41\x4c\x44\x68\x63\x4b\x31\x50\x44\x2f\x44\x6b\x43\x4c\x43\x6f\x48\x50\x43\x72\x63\x4b\x6f\x77\x34\x67\x66\x48\x52\x4c\x43\x75\x6d\x50\x44\x69\x51\x3d\x3d','\x4d\x6d\x33\x43\x6e\x4d\x4f\x69\x46\x77\x3d\x3d','\x4f\x38\x4f\x35\x77\x6f\x4d\x68\x77\x35\x62\x43\x6e\x57\x70\x61\x77\x72\x68\x77\x77\x35\x31\x62\x48\x41\x3d\x3d','\x65\x38\x4f\x76\x4d\x41\x3d\x3d','\x58\x4d\x4f\x59\x77\x70\x59\x3d','\x41\x38\x4f\x6d\x52\x41\x46\x4c\x77\x36\x39\x44\x52\x56\x55\x3d','\x4a\x73\x4f\x76\x4c\x67\x3d\x3d','\x77\x6f\x66\x43\x72\x4d\x4b\x75','\x52\x4d\x4b\x65\x77\x71\x59\x3d','\x77\x6f\x45\x64\x77\x6f\x44\x44\x71\x67\x3d\x3d','\x61\x73\x4b\x75\x77\x71\x54\x43\x75\x31\x41\x3d','\x77\x37\x76\x43\x68\x6d\x54\x43\x75\x73\x4f\x37','\x4c\x73\x4b\x47\x57\x38\x4f\x6f\x4a\x77\x7a\x44\x74\x32\x72\x44\x6e\x6d\x4d\x45\x5a\x63\x4f\x64\x63\x56\x6f\x3d','\x4a\x44\x4c\x44\x70\x38\x4f\x6a\x57\x77\x3d\x3d','\x43\x63\x4f\x68\x54\x67\x31\x4b\x77\x36\x56\x51\x51\x77\x3d\x3d','\x77\x35\x66\x43\x6a\x77\x4e\x71','\x64\x6c\x33\x44\x6b\x38\x4b\x4d','\x59\x6e\x66\x44\x72\x77\x41\x3d','\x77\x72\x37\x43\x74\x57\x70\x53\x77\x34\x66\x44\x74\x38\x4f\x6e\x51\x51\x3d\x3d','\x57\x6b\x6e\x44\x75\x47\x31\x71\x77\x6f\x59\x3d','\x49\x33\x4c\x44\x72\x38\x4f\x79\x77\x36\x74\x65\x47\x73\x4b\x47\x77\x35\x5a\x4d\x77\x34\x58\x43\x73\x67\x3d\x3d','\x77\x37\x33\x43\x75\x45\x2f\x43\x6e\x4d\x4f\x42','\x77\x6f\x48\x43\x6c\x63\x4b\x62\x77\x72\x4c\x44\x75\x41\x3d\x3d','\x66\x32\x4c\x44\x75\x78\x30\x75','\x63\x6b\x44\x44\x68\x4d\x4b\x53\x62\x51\x3d\x3d','\x4a\x48\x58\x44\x73\x73\x4f\x74\x77\x36\x63\x3d','\x65\x38\x4f\x74\x77\x35\x77\x71','\x53\x6b\x48\x44\x74\x58\x67\x3d','\x51\x38\x4b\x42\x4d\x67\x42\x44','\x49\x56\x6e\x44\x67\x73\x4f\x4d\x77\x34\x67\x3d','\x77\x70\x76\x43\x73\x38\x4b\x63\x77\x71\x6a\x44\x6d\x67\x3d\x3d','\x45\x38\x4b\x58\x52\x38\x4b\x2f','\x5a\x46\x38\x76\x59\x7a\x67\x3d','\x62\x63\x4f\x39\x77\x35\x6f\x70','\x57\x58\x45\x4e\x77\x34\x6b\x65','\x52\x73\x4f\x66\x66\x4d\x4b\x6a','\x77\x6f\x6e\x43\x6a\x47\x55\x45\x57\x41\x3d\x3d','\x43\x45\x44\x44\x6d\x63\x4b\x57\x77\x72\x6a\x43\x6d\x58\x59\x3d','\x77\x70\x45\x4a\x50\x63\x4b\x50\x66\x67\x38\x36','\x5a\x4d\x4b\x6a\x65\x63\x4b\x2f\x77\x6f\x73\x3d','\x59\x38\x4f\x59\x77\x72\x7a\x43\x6f\x68\x46\x55\x46\x77\x3d\x3d','\x56\x38\x4f\x59\x46\x63\x4b\x38','\x5a\x45\x44\x44\x69\x4d\x4b\x55','\x64\x31\x45\x2f\x77\x6f\x4d\x3d','\x77\x72\x33\x43\x73\x47\x35\x55','\x59\x63\x4b\x4b\x77\x70\x67\x46\x43\x77\x3d\x3d','\x58\x4d\x4f\x4d\x43\x4d\x4b\x46\x77\x6f\x73\x3d','\x56\x4d\x4b\x36\x54\x63\x4b\x33\x59\x67\x3d\x3d','\x59\x6e\x51\x67\x77\x37\x63\x3d','\x61\x51\x56\x42\x4e\x47\x77\x3d','\x77\x71\x4c\x43\x72\x73\x4b\x4b\x77\x6f\x30\x3d','\x77\x72\x7a\x43\x6f\x6e\x6c\x4e\x77\x35\x6a\x44\x76\x51\x3d\x3d','\x64\x6c\x77\x6d\x77\x70\x33\x44\x75\x6e\x6b\x3d','\x77\x71\x33\x43\x71\x32\x42\x58\x77\x34\x73\x3d','\x65\x63\x4f\x36\x77\x70\x54\x43\x72\x63\x4f\x34\x56\x67\x3d\x3d','\x59\x4d\x4f\x6b\x42\x46\x30\x56\x77\x6f\x5a\x79\x77\x36\x68\x62\x43\x46\x4c\x44\x76\x57\x49\x3d','\x59\x73\x4f\x55\x65\x63\x4b\x4f\x77\x35\x34\x3d','\x64\x38\x4b\x39\x52\x38\x4b\x4b\x77\x71\x67\x3d','\x77\x34\x52\x6c\x77\x72\x46\x5a\x77\x70\x63\x3d','\x63\x73\x4f\x53\x77\x71\x48\x43\x6f\x68\x6c\x49\x46\x73\x4b\x68\x4d\x33\x4a\x39\x77\x35\x58\x44\x6b\x41\x3d\x3d','\x77\x37\x59\x4c\x77\x36\x35\x74\x77\x37\x73\x3d','\x50\x38\x4b\x4d\x57\x4d\x4f\x7a\x4f\x41\x66\x44\x67\x33\x76\x44\x74\x58\x59\x4d\x61\x73\x4f\x4e','\x77\x71\x33\x43\x6f\x45\x66\x44\x6e\x63\x4f\x4c','\x58\x31\x58\x44\x76\x58\x56\x37\x77\x70\x48\x44\x6a\x51\x3d\x3d','\x46\x6b\x44\x44\x68\x4d\x4b\x46\x77\x71\x33\x43\x67\x77\x3d\x3d','\x5a\x6e\x45\x4f\x77\x35\x4d\x34','\x4d\x6e\x54\x44\x76\x73\x4f\x74\x77\x37\x5a\x45\x43\x38\x4b\x51','\x77\x34\x66\x43\x74\x63\x4f\x45\x77\x6f\x68\x62\x4b\x6c\x73\x3d','\x63\x42\x78\x42\x50\x57\x46\x4f\x77\x71\x6b\x43\x43\x4d\x4f\x65','\x77\x70\x63\x68\x62\x73\x4b\x6c\x77\x36\x59\x3d','\x62\x6e\x52\x53\x59\x4d\x4f\x34\x77\x70\x42\x35\x77\x6f\x38\x3d','\x59\x43\x56\x6d\x51\x6c\x74\x30\x62\x51\x3d\x3d','\x77\x6f\x2f\x43\x71\x6b\x59\x4f\x66\x63\x4b\x57\x77\x34\x4e\x73\x77\x35\x6a\x43\x75\x51\x3d\x3d','\x63\x54\x6b\x58\x42\x67\x3d\x3d','\x53\x63\x4f\x49\x63\x4d\x4b\x79\x77\x37\x46\x45\x77\x72\x63\x3d','\x66\x32\x62\x44\x72\x68\x67\x2f','\x77\x70\x63\x41\x52\x73\x4b\x59\x77\x36\x48\x43\x69\x52\x67\x50\x77\x71\x51\x3d','\x42\x73\x4b\x44\x54\x38\x4b\x79\x42\x4d\x4b\x6d\x77\x36\x45\x3d','\x47\x4d\x4f\x33\x54\x77\x3d\x3d','\x5a\x41\x5a\x4b\x49\x67\x3d\x3d','\x4d\x51\x2f\x44\x75\x63\x4f\x6d\x54\x4d\x4b\x70','\x51\x42\x6b\x6b\x77\x35\x63\x3d','\x77\x37\x31\x44\x65\x53\x59\x3d','\x52\x4d\x4f\x49\x44\x4d\x4b\x38\x77\x72\x50\x44\x68\x51\x3d\x3d','\x61\x56\x59\x34\x5a\x41\x35\x64\x63\x32\x55\x3d','\x63\x79\x78\x52\x58\x56\x35\x35','\x5a\x6d\x52\x53\x4a\x73\x4f\x50\x77\x70\x42\x35\x77\x70\x38\x3d','\x77\x6f\x33\x43\x6d\x57\x7a\x44\x6f\x73\x4f\x67\x56\x48\x37\x43\x76\x67\x59\x3d','\x57\x38\x4f\x4e\x58\x69\x37\x44\x76\x78\x73\x3d','\x55\x42\x4e\x59\x56\x48\x41\x3d','\x4f\x68\x48\x44\x71\x4d\x4f\x71','\x55\x42\x34\x2b\x77\x34\x37\x43\x6e\x77\x3d\x3d','\x56\x63\x4b\x4e\x77\x71\x66\x43\x6e\x77\x3d\x3d','\x47\x4d\x4b\x41\x53\x73\x4b\x75','\x77\x6f\x51\x4f\x77\x6f\x44\x44\x75\x73\x4f\x71\x77\x6f\x73\x3d','\x62\x43\x49\x4b\x44\x38\x4b\x77','\x52\x77\x4d\x71\x77\x34\x37\x43\x6d\x42\x62\x44\x6e\x53\x52\x58','\x62\x4d\x4b\x7a\x61\x73\x4b\x36\x55\x6e\x45\x3d','\x63\x38\x4f\x35\x44\x31\x38\x56\x77\x6f\x64\x79\x77\x37\x35\x58\x43\x6c\x4c\x44\x70\x41\x3d\x3d','\x65\x73\x4f\x48\x77\x70\x55\x3d','\x4e\x52\x66\x43\x76\x67\x3d\x3d','\x77\x35\x6f\x38\x77\x35\x39\x39\x77\x72\x45\x3d','\x64\x31\x38\x68\x61\x54\x68\x4b\x59\x51\x3d\x3d','\x66\x57\x59\x76\x77\x36\x41\x46\x53\x51\x3d\x3d','\x58\x6a\x4e\x36\x4d\x6d\x77\x3d','\x77\x36\x50\x43\x6f\x33\x48\x43\x69\x63\x4f\x72','\x57\x32\x76\x44\x6a\x79\x4d\x35','\x63\x4d\x4b\x6c\x59\x38\x4b\x70\x53\x51\x3d\x3d','\x56\x38\x4b\x73\x48\x7a\x4e\x34\x77\x6f\x4e\x76\x77\x70\x38\x3d','\x4a\x42\x4c\x44\x72\x63\x4f\x32\x57\x63\x4b\x6f\x77\x70\x63\x3d','\x53\x48\x67\x4e\x5a\x7a\x49\x3d','\x59\x55\x59\x34\x49\x6a\x6c\x64\x63\x33\x55\x3d','\x56\x4d\x4f\x72\x77\x70\x44\x43\x72\x63\x4f\x70\x56\x41\x6f\x76\x54\x4d\x4b\x31','\x48\x45\x7a\x44\x68\x4d\x4b\x47\x77\x70\x2f\x43\x6e\x6e\x70\x5a','\x52\x63\x4b\x73\x51\x73\x4b\x6f\x77\x70\x67\x3d','\x61\x38\x4f\x49\x77\x71\x44\x43\x72\x42\x68\x44\x42\x63\x4b\x78\x46\x43\x63\x3d','\x64\x63\x4b\x30\x77\x72\x6e\x43\x6b\x58\x34\x3d','\x64\x38\x4b\x6a\x64\x38\x4b\x31\x77\x6f\x73\x41\x65\x77\x3d\x3d','\x4f\x32\x7a\x43\x69\x73\x4f\x30\x47\x68\x58\x43\x6e\x38\x4b\x44\x65\x31\x4d\x3d','\x56\x78\x51\x74\x77\x34\x6e\x43\x68\x52\x58\x44\x6f\x69\x52\x56\x54\x63\x4f\x59\x4e\x31\x55\x51','\x59\x38\x4b\x71\x65\x73\x4b\x70\x77\x70\x6f\x58','\x51\x6a\x38\x67\x77\x34\x76\x43\x75\x51\x3d\x3d','\x61\x31\x59\x75\x64\x79\x6c\x51','\x77\x70\x51\x32\x77\x6f\x72\x44\x70\x63\x4f\x5a','\x53\x4d\x4f\x63\x52\x79\x6a\x44\x76\x51\x76\x44\x73\x73\x4b\x41','\x66\x38\x4b\x31\x51\x63\x4b\x6c\x57\x33\x44\x43\x71\x68\x66\x43\x6d\x41\x77\x3d','\x48\x69\x2f\x43\x67\x43\x46\x71','\x77\x37\x39\x54\x59\x48\x42\x64\x66\x38\x4f\x35\x52\x41\x3d\x3d','\x77\x36\x4e\x63\x61\x7a\x68\x64\x63\x38\x4f\x39','\x56\x52\x31\x63\x4c\x6d\x35\x4d\x77\x71\x6f\x46\x46\x63\x4b\x49','\x45\x73\x4f\x4d\x50\x4d\x4f\x34\x77\x34\x46\x77\x55\x6b\x77\x61\x77\x34\x62\x43\x6c\x47\x44\x44\x6a\x4d\x4f\x7a','\x77\x34\x58\x44\x68\x73\x4b\x30\x49\x33\x4c\x43\x67\x77\x3d\x3d','\x77\x35\x70\x30\x77\x70\x55\x3d','\x52\x56\x34\x35\x77\x70\x72\x44\x67\x67\x3d\x3d','\x65\x6c\x6e\x44\x67\x78\x6f\x54','\x66\x6b\x70\x2b\x50\x4d\x4f\x56','\x61\x6e\x49\x57\x77\x6f\x50\x44\x71\x67\x3d\x3d','\x49\x47\x33\x43\x6b\x63\x4f\x6e\x42\x67\x58\x43\x6e\x63\x4b\x54','\x49\x32\x7a\x44\x71\x38\x4f\x39\x77\x36\x64\x44\x48\x41\x3d\x3d','\x77\x36\x2f\x44\x6c\x38\x4b\x50\x4a\x33\x30\x3d','\x59\x30\x44\x44\x68\x4d\x4f\x4a\x62\x42\x52\x59\x66\x67\x3d\x3d','\x77\x37\x58\x43\x71\x63\x4f\x55\x77\x6f\x56\x49','\x77\x34\x51\x54\x77\x37\x78\x41\x77\x70\x51\x34','\x4e\x4d\x4f\x5a\x4b\x38\x4f\x6c\x77\x35\x6b\x3d','\x61\x73\x4f\x72\x77\x70\x62\x43\x72\x63\x4f\x36\x52\x67\x73\x34','\x77\x34\x70\x32\x51\x43\x35\x6f','\x65\x7a\x4c\x44\x6e\x4d\x4b\x58\x77\x37\x4e\x6f\x77\x6f\x37\x43\x6a\x67\x3d\x3d','\x77\x34\x52\x37\x77\x6f\x46\x6d\x77\x72\x51\x46\x77\x6f\x59\x3d','\x4e\x32\x58\x44\x72\x4d\x4f\x74\x77\x36\x78\x55\x50\x38\x4b\x48\x77\x36\x70\x5a\x77\x34\x48\x43\x74\x4d\x4f\x30\x77\x71\x73\x3d','\x62\x47\x52\x4d\x4f\x38\x4f\x79\x77\x70\x42\x49\x77\x70\x6c\x75\x62\x31\x72\x43\x73\x54\x55\x75','\x55\x73\x4b\x71\x77\x6f\x59\x49\x4a\x6d\x51\x3d','\x59\x31\x38\x32\x77\x72\x50\x44\x68\x51\x3d\x3d','\x61\x56\x44\x44\x6b\x73\x4b\x63\x66\x42\x6b\x3d','\x51\x43\x5a\x79\x64\x32\x63\x3d','\x77\x35\x6a\x43\x6c\x42\x4e\x6d\x61\x4d\x4b\x4a\x57\x4d\x4f\x33','\x41\x46\x44\x44\x68\x63\x4b\x59\x77\x72\x48\x43\x6a\x6d\x51\x65\x4c\x73\x4b\x6a','\x58\x57\x4d\x35\x61\x44\x55\x3d','\x51\x4d\x4b\x51\x77\x72\x44\x44\x6d\x6b\x78\x38\x4d\x46\x77\x3d','\x54\x73\x4f\x4a\x77\x72\x33\x43\x76\x78\x64\x42\x42\x73\x4b\x32\x43\x58\x45\x3d','\x51\x63\x4f\x51\x5a\x63\x4b\x6a\x77\x36\x4a\x41\x77\x36\x54\x44\x6b\x4d\x4f\x6b\x77\x71\x34\x6b\x46\x6d\x49\x30','\x77\x37\x45\x43\x77\x36\x64\x33\x77\x37\x44\x43\x6a\x6a\x46\x71\x77\x37\x49\x61\x62\x32\x62\x43\x73\x45\x55\x3d','\x77\x72\x7a\x43\x6f\x6d\x78\x4c\x77\x35\x6a\x44\x76\x63\x4f\x67','\x56\x57\x6b\x6f','\x77\x35\x63\x4f\x46\x73\x4b\x4b\x77\x71\x4c\x43\x6b\x30\x55\x42\x77\x37\x6f\x3d','\x57\x47\x34\x4e','\x77\x36\x76\x43\x72\x6a\x4d\x3d','\x4b\x38\x4b\x4d\x57\x63\x4f\x6a','\x54\x4d\x4b\x6b\x64\x63\x4b\x36\x77\x6f\x51\x3d','\x41\x30\x37\x43\x70\x54\x37\x44\x71\x41\x3d\x3d','\x77\x35\x37\x44\x69\x63\x4b\x53\x49\x6b\x77\x3d','\x48\x79\x4c\x43\x6f\x77\x78\x4c','\x57\x73\x4f\x59\x58\x79\x6a\x44\x76\x51\x3d\x3d','\x49\x48\x44\x43\x6d\x6a\x37\x44\x75\x67\x3d\x3d','\x56\x55\x50\x44\x75\x6e\x6c\x6d\x77\x6f\x76\x44\x6a\x67\x3d\x3d','\x77\x6f\x34\x54\x58\x38\x4b\x2b\x77\x36\x49\x3d','\x59\x73\x4b\x79\x77\x6f\x6f\x74\x41\x77\x3d\x3d','\x66\x57\x5a\x49\x4e\x73\x4f\x4d','\x53\x73\x4f\x34\x5a\x67\x2f\x44\x6a\x51\x3d\x3d','\x77\x71\x72\x43\x70\x46\x49\x53\x59\x73\x4b\x5a\x77\x35\x59\x3d','\x5a\x53\x77\x56\x46\x73\x4b\x74\x54\x6a\x49\x3d','\x4e\x57\x63\x67\x77\x36\x6f\x51\x52\x6b\x4d\x34\x4f\x56\x6b\x3d','\x55\x32\x55\x59\x77\x36\x38\x64','\x66\x73\x4f\x76\x77\x6f\x62\x43\x70\x63\x4f\x36\x56\x67\x3d\x3d','\x57\x79\x39\x2b','\x77\x70\x66\x43\x67\x46\x6b\x3d','\x4a\x48\x4c\x43\x70\x38\x4f\x61\x45\x41\x3d\x3d','\x57\x45\x6a\x44\x69\x30\x39\x64','\x51\x38\x4b\x74\x4f\x69\x4e\x6b','\x77\x72\x54\x43\x74\x47\x64\x55\x77\x34\x45\x3d','\x77\x72\x72\x43\x6a\x46\x76\x44\x67\x4d\x4f\x68','\x62\x53\x76\x44\x68\x63\x4f\x63\x77\x37\x4a\x2f\x77\x70\x77\x3d','\x77\x6f\x41\x44\x46\x73\x4b\x2b\x52\x51\x3d\x3d','\x54\x4d\x4b\x78\x77\x70\x67\x54\x4a\x57\x67\x51','\x77\x72\x6f\x4d\x77\x70\x50\x44\x70\x38\x4f\x73\x77\x70\x35\x6a\x56\x38\x4b\x74\x52\x67\x3d\x3d','\x49\x30\x48\x43\x6d\x54\x2f\x44\x73\x77\x3d\x3d','\x77\x34\x48\x43\x6b\x33\x2f\x43\x76\x4d\x4f\x63','\x47\x4d\x4f\x6e\x58\x78\x4a\x58\x77\x37\x39\x42\x56\x51\x3d\x3d','\x77\x6f\x33\x43\x6d\x6c\x58\x44\x6c\x4d\x4f\x4a','\x77\x6f\x55\x5a\x4e\x73\x4f\x4a\x65\x78\x67\x76\x5a\x77\x3d\x3d','\x64\x38\x4f\x4b\x59\x38\x4b\x76\x77\x37\x64\x52\x77\x36\x44\x44\x6a\x73\x4f\x74\x77\x71\x55\x3d','\x62\x4d\x4f\x67\x77\x35\x55\x30\x77\x6f\x33\x43\x68\x41\x74\x55\x77\x36\x4e\x38\x77\x6f\x70\x56\x58\x68\x63\x3d','\x62\x73\x4f\x77\x77\x34\x74\x76\x77\x6f\x66\x43\x68\x44\x70\x43','\x59\x63\x4b\x6c\x53\x4d\x4b\x32\x58\x58\x44\x43\x6e\x42\x44\x43\x6a\x30\x37\x44\x76\x38\x4f\x68\x64\x33\x4d\x3d','\x5a\x58\x33\x43\x6a\x4d\x4f\x72','\x4b\x56\x33\x43\x67\x77\x3d\x3d','\x54\x42\x78\x4e','\x51\x73\x4f\x58\x4b\x63\x4b\x59\x77\x72\x55\x3d','\x57\x38\x4f\x33\x4f\x63\x4b\x55\x77\x6f\x73\x3d','\x52\x63\x4f\x71\x53\x7a\x76\x44\x6a\x51\x3d\x3d','\x77\x71\x77\x6f\x77\x6f\x7a\x44\x75\x73\x4f\x4f','\x5a\x6b\x63\x30\x65\x53\x6c\x4e\x64\x6e\x51\x3d','\x77\x36\x56\x6e\x77\x6f\x34\x3d','\x4f\x63\x4f\x75\x48\x38\x4f\x59\x77\x35\x59\x3d','\x57\x73\x4b\x39\x42\x54\x31\x34\x77\x70\x34\x3d','\x46\x7a\x48\x43\x73\x51\x39\x31','\x77\x6f\x63\x38\x41\x38\x4b\x55\x55\x77\x3d\x3d','\x62\x46\x46\x6e\x50\x63\x4f\x51','\x65\x63\x4b\x4d\x77\x71\x34\x67\x4f\x41\x3d\x3d','\x77\x35\x76\x43\x76\x4d\x4f\x4c\x77\x70\x5a\x4b\x4d\x41\x3d\x3d','\x55\x42\x45\x32\x4b\x73\x4b\x73','\x50\x53\x6e\x43\x74\x42\x31\x69\x77\x6f\x49\x6f','\x66\x55\x6b\x7a\x61\x6a\x6c\x52\x64\x77\x3d\x3d','\x55\x41\x51\x2b\x77\x37\x58\x43\x67\x77\x3d\x3d','\x57\x63\x4f\x45\x55\x6a\x6a\x44\x72\x41\x7a\x44\x70\x51\x3d\x3d','\x54\x4d\x4b\x2b\x77\x6f\x51\x54\x4b\x57\x51\x54\x51\x4d\x4f\x67\x77\x70\x77\x3d','\x46\x38\x4f\x47\x41\x73\x4f\x6e\x77\x37\x34\x3d','\x44\x4d\x4f\x54\x4b\x63\x4f\x72\x77\x34\x74\x38\x5a\x77\x3d\x3d','\x54\x6e\x63\x7a\x77\x36\x34\x57\x52\x6b\x4d\x36\x4d\x30\x30\x3d','\x61\x48\x66\x44\x73\x52\x30\x30\x77\x70\x59\x6b\x77\x34\x34\x49\x4e\x79\x39\x37\x77\x71\x42\x6d','\x77\x6f\x41\x45\x4b\x38\x4b\x59\x64\x42\x34\x68\x62\x63\x4b\x34\x64\x63\x4b\x38\x77\x72\x37\x44\x67\x4d\x4f\x74','\x46\x63\x4b\x5a\x77\x37\x72\x43\x6c\x42\x68\x6c\x59\x45\x52\x68','\x77\x37\x30\x4f\x77\x36\x56\x36\x77\x37\x76\x43\x68\x51\x3d\x3d','\x52\x63\x4f\x42\x58\x53\x72\x44\x72\x42\x6f\x3d','\x61\x6b\x44\x44\x69\x41\x3d\x3d','\x63\x55\x78\x46','\x77\x37\x73\x44\x77\x34\x4d\x3d','\x77\x34\x77\x54\x77\x37\x4e\x44','\x53\x48\x45\x79','\x51\x73\x4b\x74\x47\x54\x52\x70\x77\x70\x4a\x6b\x77\x6f\x77\x71\x77\x34\x77\x3d','\x51\x73\x4b\x31\x48\x42\x46\x44','\x77\x34\x54\x44\x6b\x38\x4b\x31\x4a\x58\x41\x3d','\x77\x35\x54\x44\x6a\x38\x4b\x34\x50\x33\x66\x43\x71\x73\x4b\x43\x77\x70\x31\x74','\x43\x55\x76\x43\x67\x43\x54\x44\x67\x54\x42\x38\x77\x71\x30\x3d','\x45\x47\x54\x44\x75\x38\x4f\x4a\x77\x35\x59\x3d','\x4d\x47\x7a\x44\x71\x38\x4f\x33\x77\x37\x46\x39\x42\x73\x4b\x47\x77\x37\x45\x3d','\x43\x38\x4f\x32\x52\x68\x52\x56\x77\x36\x38\x3d','\x77\x70\x6e\x43\x6e\x73\x4b\x6b\x65\x63\x4f\x74','\x77\x70\x6b\x48\x53\x4d\x4b\x4d\x77\x37\x72\x43\x69\x68\x45\x49\x77\x72\x48\x43\x6b\x77\x3d\x3d','\x77\x37\x70\x4a\x64\x6a\x5a\x59\x63\x38\x4f\x32\x55\x77\x3d\x3d','\x47\x63\x4b\x46\x52\x38\x4b\x59\x4c\x67\x3d\x3d','\x4e\x7a\x44\x43\x75\x68\x35\x76\x77\x70\x55\x39\x45\x73\x4f\x4f\x77\x70\x4d\x3d','\x77\x6f\x41\x65\x52\x73\x4b\x46\x77\x36\x48\x43\x6f\x78\x34\x4f\x77\x72\x30\x3d','\x4d\x33\x7a\x43\x69\x4d\x4f\x68\x42\x42\x55\x3d','\x59\x33\x6a\x44\x76\x69\x63\x56','\x77\x6f\x41\x41\x4c\x38\x4b\x49\x62\x44\x45\x6e\x63\x4d\x4b\x6f','\x77\x71\x76\x43\x6f\x73\x4b\x34\x52\x63\x4f\x36','\x77\x34\x50\x44\x71\x73\x4b\x56\x4e\x45\x59\x3d','\x77\x34\x6f\x48\x77\x34\x4e\x79\x77\x72\x6b\x3d','\x56\x6d\x44\x44\x70\x6a\x77\x72','\x77\x37\x70\x4b\x65\x54\x46\x4b\x56\x73\x4f\x78\x55\x79\x59\x3d','\x4d\x45\x48\x43\x69\x4d\x4f\x2f\x4d\x51\x3d\x3d','\x4d\x47\x2f\x44\x70\x4d\x4f\x77\x77\x36\x4e\x59\x41\x63\x4b\x47','\x59\x7a\x4a\x54\x61\x46\x55\x3d','\x44\x38\x4f\x4e\x4b\x38\x4f\x4c\x77\x36\x6b\x3d','\x53\x54\x68\x6f\x4b\x30\x55\x3d','\x77\x71\x41\x6a\x59\x63\x4b\x61\x77\x35\x34\x3d','\x58\x4d\x4b\x51\x77\x71\x66\x43\x6b\x6b\x42\x38\x4e\x30\x30\x74\x77\x35\x49\x3d','\x5a\x6c\x6e\x44\x6e\x63\x4b\x49\x65\x7a\x31\x51\x61\x54\x6b\x3d','\x44\x38\x4f\x45\x48\x4d\x4f\x42\x77\x34\x55\x3d','\x59\x45\x4e\x65\x46\x73\x4f\x75','\x61\x58\x56\x65\x4f\x38\x4f\x6f\x77\x6f\x42\x38\x77\x6f\x34\x3d','\x47\x45\x2f\x44\x73\x38\x4f\x79\x77\x34\x34\x3d','\x56\x51\x51\x7a\x77\x70\x4c\x43\x6a\x78\x58\x44\x6b\x7a\x49\x3d','\x4b\x58\x72\x44\x75\x63\x4f\x2b\x77\x36\x5a\x59\x43\x67\x3d\x3d','\x77\x36\x38\x53\x77\x36\x35\x6b\x77\x37\x62\x43\x6a\x67\x64\x74\x77\x36\x56\x59','\x77\x34\x73\x5a\x77\x37\x78\x54\x77\x6f\x45\x35\x77\x70\x68\x34','\x4d\x58\x66\x44\x67\x4d\x4f\x47\x77\x36\x4d\x3d','\x77\x72\x4c\x43\x74\x63\x4b\x4b\x77\x6f\x37\x44\x72\x63\x4b\x53\x4d\x63\x4b\x69\x77\x70\x38\x3d','\x62\x54\x4d\x65\x44\x4d\x4b\x6a\x51\x77\x3d\x3d','\x77\x37\x63\x51\x77\x34\x74\x63\x77\x37\x38\x3d','\x63\x38\x4f\x4f\x77\x72\x6a\x43\x72\x63\x4f\x6e','\x63\x7a\x4d\x64\x42\x4d\x4b\x68\x54\x67\x3d\x3d','\x55\x63\x4f\x35\x61\x53\x6a\x44\x6f\x41\x3d\x3d','\x55\x67\x55\x2f\x77\x34\x6e\x43\x6e\x77\x58\x44\x6c\x6a\x4d\x3d','\x47\x6b\x6a\x43\x6a\x79\x6e\x44\x68\x53\x74\x68','\x77\x71\x76\x43\x72\x4d\x4b\x45\x77\x6f\x66\x44\x74\x73\x4b\x37\x50\x73\x4b\x6b\x77\x70\x4e\x67','\x77\x72\x58\x43\x75\x38\x4b\x6e\x77\x70\x6a\x44\x6b\x41\x3d\x3d','\x65\x47\x31\x4c\x4b\x38\x4f\x35\x77\x6f\x64\x72','\x77\x70\x6b\x57\x50\x63\x4b\x42\x65\x78\x51\x72','\x77\x36\x7a\x43\x6b\x32\x37\x43\x75\x73\x4f\x68\x50\x43\x68\x43\x47\x6e\x2f\x43\x6d\x73\x4b\x58\x77\x34\x34\x77','\x77\x34\x50\x43\x6d\x67\x46\x36\x5a\x4d\x4b\x55\x54\x41\x3d\x3d','\x54\x4d\x4b\x78\x77\x6f\x30\x63\x4f\x57\x6b\x46','\x5a\x38\x4f\x75\x44\x45\x41\x53\x77\x6f\x31\x58\x77\x37\x39\x72\x48\x31\x62\x44\x6f\x6e\x50\x43\x73\x67\x3d\x3d','\x77\x72\x37\x43\x72\x38\x4b\x4f\x77\x6f\x38\x3d','\x58\x4d\x4b\x51\x77\x71\x66\x43\x6b\x6b\x42\x38\x4e\x30\x30\x74','\x45\x73\x4b\x4b\x54\x38\x4b\x76','\x58\x73\x4f\x69\x66\x51\x3d\x3d','\x77\x34\x6a\x43\x6a\x79\x41\x3d','\x5a\x73\x4b\x50\x48\x77\x3d\x3d','\x77\x70\x41\x47\x56\x51\x3d\x3d','\x77\x36\x37\x43\x6e\x32\x62\x43\x74\x38\x4f\x66\x4e\x52\x6c\x4a\x45\x48\x30\x3d','\x47\x42\x4c\x44\x76\x73\x4f\x4d\x61\x51\x3d\x3d','\x52\x38\x4f\x4a\x58\x69\x51\x3d','\x62\x43\x78\x64\x4e\x6b\x67\x3d','\x49\x73\x4b\x6c\x5a\x63\x4b\x4a\x4d\x41\x3d\x3d','\x4e\x63\x4f\x2f\x57\x54\x68\x32','\x52\x33\x6f\x45\x77\x35\x55\x67','\x77\x6f\x33\x43\x6d\x6d\x50\x44\x70\x63\x4f\x79\x63\x58\x6e\x43\x76\x67\x3d\x3d','\x66\x41\x55\x78\x43\x73\x4b\x79','\x77\x72\x58\x43\x76\x4d\x4b\x4b\x77\x70\x6b\x3d','\x46\x63\x4f\x47\x4e\x4d\x4f\x6c\x77\x34\x35\x38\x62\x45\x30\x3d','\x77\x37\x54\x43\x74\x4d\x4f\x50\x77\x6f\x68\x36','\x63\x43\x6b\x59\x77\x37\x6e\x43\x68\x67\x3d\x3d','\x52\x32\x45\x44\x77\x71\x33\x44\x6f\x51\x3d\x3d','\x77\x35\x33\x43\x68\x51\x5a\x72','\x5a\x73\x4b\x76\x51\x4d\x4b\x72\x55\x6e\x7a\x43\x6f\x68\x45\x3d','\x5a\x46\x73\x6c\x63\x7a\x5a\x62\x66\x58\x38\x51\x50\x78\x39\x35\x49\x7a\x30\x3d','\x77\x71\x33\x43\x71\x47\x46\x51\x77\x34\x2f\x44\x73\x63\x4f\x38\x51\x51\x3d\x3d','\x77\x71\x72\x43\x6a\x38\x4b\x6d\x58\x41\x3d\x3d','\x66\x63\x4b\x36\x65\x63\x4b\x32\x77\x6f\x59\x58\x62\x69\x6f\x76\x77\x70\x6b\x3d','\x66\x30\x2f\x44\x6d\x73\x4b\x4f\x63\x42\x52\x66\x66\x43\x68\x4d\x4b\x51\x3d\x3d','\x4b\x58\x58\x44\x70\x63\x4f\x2b\x77\x36\x70\x55\x43\x63\x4b\x41\x77\x37\x30\x62','\x77\x71\x4c\x43\x75\x31\x6b\x49\x62\x4d\x4b\x55','\x44\x4d\x4b\x61\x51\x63\x4b\x78\x43\x63\x4b\x78\x77\x37\x51\x31\x50\x63\x4b\x4e','\x66\x69\x76\x44\x68\x63\x4f\x57\x77\x36\x52\x42\x77\x6f\x62\x43\x6d\x54\x59\x3d','\x52\x63\x4b\x32\x77\x6f\x72\x43\x67\x55\x38\x3d','\x77\x36\x30\x37\x77\x37\x74\x39\x77\x6f\x4d\x3d','\x77\x36\x37\x43\x67\x47\x66\x43\x69\x73\x4f\x63','\x77\x72\x7a\x43\x6a\x4d\x4b\x36\x62\x63\x4f\x71','\x77\x35\x54\x44\x73\x4d\x4b\x62\x4a\x57\x4d\x3d','\x77\x35\x64\x34\x77\x6f\x35\x72\x77\x72\x41\x65\x77\x70\x73\x35','\x5a\x7a\x4c\x44\x69\x38\x4f\x66\x77\x37\x39\x6f\x77\x6f\x6e\x43\x6e\x7a\x72\x43\x68\x41\x3d\x3d','\x64\x38\x4b\x36\x5a\x63\x4b\x6b','\x63\x42\x4e\x49\x4d\x6e\x46\x4f\x77\x71\x6b\x52\x46\x63\x4b\x50\x4f\x51\x3d\x3d','\x55\x48\x4d\x62\x77\x72\x62\x44\x6e\x51\x3d\x3d','\x48\x38\x4f\x6d\x55\x30\x6c\x48\x77\x36\x39\x45\x56\x41\x3d\x3d','\x54\x63\x4f\x49\x77\x35\x6f\x48\x77\x6f\x41\x3d','\x51\x4d\x4f\x51\x77\x34\x59\x34\x77\x72\x6b\x3d','\x77\x71\x62\x43\x6f\x48\x6a\x44\x74\x4d\x4f\x4a','\x41\x45\x33\x43\x76\x4d\x4f\x46\x4d\x77\x3d\x3d','\x77\x6f\x2f\x43\x67\x58\x6e\x44\x75\x4d\x4f\x6e\x62\x58\x50\x43\x71\x41\x3d\x3d','\x77\x71\x76\x43\x6f\x38\x4b\x59\x77\x6f\x66\x44\x73\x63\x4b\x6f\x50\x63\x4b\x6a','\x43\x57\x50\x43\x76\x53\x50\x44\x6b\x77\x3d\x3d','\x49\x4d\x4f\x51\x48\x38\x4f\x44\x77\x37\x34\x3d','\x66\x46\x4e\x42\x46\x4d\x4f\x51','\x66\x38\x4b\x36\x58\x63\x4b\x6c\x58\x47\x50\x43\x71\x52\x41\x3d','\x77\x37\x70\x68\x53\x7a\x46\x4b','\x52\x31\x51\x36\x77\x6f\x33\x44\x69\x41\x3d\x3d','\x62\x67\x31\x2b\x66\x6e\x4d\x3d','\x41\x38\x4f\x70\x57\x41\x46\x4d\x77\x37\x78\x41\x51\x67\x3d\x3d','\x77\x35\x49\x4d\x77\x36\x46\x64\x77\x6f\x38\x6d\x77\x70\x4e\x35','\x77\x71\x6f\x6c\x56\x67\x3d\x3d','\x77\x72\x4c\x43\x73\x55\x63\x55','\x4f\x48\x72\x44\x67\x67\x3d\x3d','\x53\x63\x4f\x63\x53\x77\x3d\x3d','\x61\x56\x49\x76','\x77\x36\x44\x43\x71\x38\x4f\x30\x77\x72\x42\x36','\x77\x70\x4d\x61\x77\x71\x2f\x44\x6e\x73\x4f\x6c','\x77\x34\x35\x43\x77\x72\x70\x36\x77\x71\x6b\x3d','\x59\x41\x70\x50\x58\x55\x63\x3d','\x55\x45\x38\x52\x77\x36\x34\x45','\x77\x72\x33\x43\x73\x56\x41\x43','\x77\x34\x42\x52\x56\x7a\x42\x4b','\x46\x38\x4b\x31\x5a\x63\x4b\x68\x4f\x41\x3d\x3d','\x52\x4d\x4b\x33\x48\x6a\x52\x6f\x77\x72\x68\x2b\x77\x70\x63\x74\x77\x35\x76\x44\x73\x77\x3d\x3d','\x77\x34\x33\x43\x6d\x52\x31\x6b\x52\x41\x3d\x3d','\x52\x4d\x4f\x62\x66\x38\x4b\x68\x77\x36\x52\x65','\x77\x37\x35\x45\x77\x72\x4a\x59\x77\x72\x55\x3d','\x5a\x38\x4f\x41\x5a\x7a\x58\x44\x71\x41\x3d\x3d','\x5a\x69\x45\x71\x4c\x73\x4b\x50','\x63\x4d\x4f\x7a\x4d\x30\x41\x33','\x65\x41\x5a\x62\x4b\x57\x31\x6c\x77\x72\x6f\x61\x45\x73\x4b\x4a\x50\x77\x3d\x3d','\x65\x44\x37\x44\x67\x38\x4f\x48\x77\x34\x4d\x3d','\x46\x63\x4f\x32\x52\x52\x78\x58\x77\x36\x49\x3d','\x77\x35\x7a\x43\x6d\x51\x42\x74\x53\x41\x3d\x3d','\x4e\x51\x72\x44\x75\x4d\x4f\x6d\x53\x4d\x4b\x76\x77\x6f\x44\x43\x68\x51\x3d\x3d','\x77\x34\x35\x74\x77\x70\x4e\x6c\x77\x72\x55\x65\x77\x70\x41\x3d','\x77\x36\x76\x43\x6c\x44\x4e\x38\x63\x41\x3d\x3d','\x77\x35\x62\x43\x72\x63\x4f\x52\x77\x70\x68\x4b\x4c\x55\x7a\x44\x6b\x67\x3d\x3d','\x77\x71\x72\x43\x71\x31\x73\x64\x63\x73\x4b\x55\x77\x34\x42\x72\x77\x34\x58\x44\x72\x77\x3d\x3d','\x66\x30\x2f\x44\x6a\x38\x4b\x42\x62\x42\x68\x63','\x59\x73\x4f\x74\x51\x38\x4b\x42\x77\x37\x51\x3d','\x77\x36\x66\x43\x76\x6d\x4c\x43\x6f\x63\x4f\x6e','\x57\x63\x4b\x44\x77\x6f\x45\x62\x4b\x51\x3d\x3d','\x53\x38\x4f\x43\x44\x33\x41\x75','\x65\x67\x56\x50\x50\x6d\x78\x5a\x77\x72\x77\x3d','\x5a\x47\x52\x45\x4e\x63\x4f\x6f\x77\x70\x30\x3d','\x77\x71\x73\x37\x51\x73\x4b\x76\x77\x34\x41\x3d','\x5a\x53\x4d\x63\x47\x63\x4b\x39\x51\x79\x54\x44\x71\x48\x68\x58','\x77\x34\x66\x44\x6a\x38\x4b\x34\x4e\x57\x48\x43\x6c\x4d\x4b\x59','\x61\x6c\x45\x35\x77\x72\x44\x44\x74\x41\x3d\x3d','\x47\x4d\x4b\x59\x56\x4d\x4b\x65\x46\x41\x3d\x3d','\x5a\x55\x30\x6b\x77\x70\x33\x44\x75\x47\x6e\x43\x6a\x63\x4f\x6a','\x77\x6f\x50\x43\x67\x46\x37\x44\x6e\x4d\x4f\x67','\x4c\x67\x54\x44\x76\x38\x4f\x31\x57\x4d\x4b\x7a\x77\x6f\x45\x3d','\x62\x41\x55\x35\x77\x34\x6e\x43\x6a\x42\x66\x44\x6c\x79\x52\x66\x57\x51\x3d\x3d','\x41\x6d\x62\x44\x6b\x4d\x4b\x48\x77\x6f\x45\x3d','\x77\x36\x55\x4c\x77\x36\x42\x6e\x77\x37\x76\x43\x6d\x52\x49\x3d','\x59\x31\x59\x6d\x65\x54\x4e\x64\x51\x6d\x4d\x62\x4a\x67\x35\x69\x4f\x43\x6f\x3d','\x61\x48\x76\x44\x73\x67\x3d\x3d','\x55\x42\x31\x34','\x63\x45\x30\x7a','\x77\x6f\x73\x46\x4b\x73\x4b\x66\x65\x68\x4d\x3d','\x77\x70\x33\x43\x6a\x73\x4b\x39\x77\x71\x72\x44\x70\x67\x3d\x3d','\x49\x53\x44\x43\x75\x77\x4e\x7a\x77\x70\x67\x3d','\x77\x70\x45\x65\x62\x4d\x4b\x52\x77\x37\x45\x3d','\x51\x77\x31\x38\x59\x6b\x6b\x3d','\x41\x6b\x62\x43\x68\x42\x37\x44\x74\x67\x3d\x3d','\x65\x73\x4b\x50\x50\x51\x31\x30','\x77\x72\x76\x43\x6a\x73\x4b\x68\x58\x63\x4f\x4e\x64\x52\x6e\x44\x6d\x51\x3d\x3d','\x77\x71\x41\x69\x77\x70\x66\x44\x71\x63\x4f\x37','\x66\x6b\x4d\x6a\x77\x6f\x37\x44\x71\x48\x58\x43\x6a\x41\x3d\x3d','\x43\x55\x6a\x43\x6a\x79\x50\x44\x6b\x78\x56\x37\x77\x71\x33\x43\x6c\x77\x3d\x3d','\x56\x4d\x4f\x6f\x47\x38\x4b\x35\x77\x71\x51\x3d','\x77\x35\x2f\x43\x6c\x52\x38\x39\x65\x4d\x4b\x5a\x58\x63\x4f\x32','\x77\x72\x54\x43\x75\x31\x49\x4f\x64\x4d\x4b\x55\x77\x37\x5a\x73\x77\x35\x4c\x43\x72\x52\x6f\x57\x58\x33\x45\x3d','\x77\x71\x44\x43\x6f\x6e\x64\x51','\x51\x63\x4f\x45\x77\x34\x4d\x3d','\x59\x57\x51\x44\x51\x52\x4d\x3d','\x77\x6f\x6a\x43\x67\x48\x58\x43\x6f\x38\x4f\x33\x66\x58\x62\x43\x71\x51\x3d\x3d','\x64\x63\x4f\x77\x77\x72\x37\x43\x73\x7a\x77\x3d','\x77\x34\x77\x6b\x77\x34\x42\x48\x77\x35\x55\x3d','\x77\x37\x45\x31\x77\x35\x4e\x2b\x77\x71\x73\x3d','\x61\x38\x4f\x74\x77\x35\x59\x2b\x77\x6f\x6a\x43\x67\x6a\x52\x49\x77\x36\x68\x6c\x77\x70\x74\x4f\x52\x51\x41\x3d','\x66\x55\x49\x49\x51\x67\x51\x3d','\x77\x72\x66\x43\x73\x4d\x4b\x46\x77\x70\x6e\x44\x6d\x4d\x4b\x72\x49\x4d\x4f\x6a','\x77\x70\x2f\x43\x72\x38\x4b\x61\x77\x71\x58\x44\x6a\x41\x3d\x3d','\x4c\x45\x6a\x44\x71\x4d\x4b\x75\x77\x71\x77\x3d','\x62\x63\x4f\x32\x77\x6f\x7a\x43\x6f\x4d\x4f\x49\x52\x68\x64\x76','\x4c\x67\x54\x44\x71\x73\x4f\x36\x52\x4d\x4b\x79\x77\x70\x51\x3d','\x64\x7a\x35\x74\x63\x45\x38\x3d','\x77\x37\x64\x44\x59\x44\x5a\x71\x66\x38\x4f\x35\x56\x41\x3d\x3d','\x58\x4d\x4b\x39\x41\x67\x3d\x3d','\x56\x4d\x4b\x57\x45\x77\x3d\x3d','\x77\x72\x37\x43\x6e\x38\x4b\x30\x55\x41\x3d\x3d','\x77\x71\x7a\x43\x71\x48\x78\x58','\x52\x41\x42\x6a','\x77\x6f\x34\x64\x4a\x51\x3d\x3d','\x66\x63\x4b\x70\x4b\x42\x31\x30','\x77\x37\x68\x54\x56\x78\x46\x77','\x57\x73\x4b\x55\x47\x41\x78\x6c','\x52\x78\x45\x6c\x4e\x73\x4b\x69','\x66\x6b\x54\x44\x6d\x78\x77\x43','\x4a\x4d\x4b\x53\x59\x38\x4f\x6d\x49\x77\x3d\x3d','\x77\x35\x6c\x34\x77\x6f\x52\x36','\x52\x73\x4b\x65\x77\x71\x6f\x37\x44\x51\x3d\x3d','\x4c\x6d\x37\x44\x76\x4d\x4b\x59\x77\x6f\x34\x3d','\x61\x7a\x48\x44\x6c\x4d\x4f\x63\x77\x37\x45\x3d','\x55\x4d\x4b\x54\x77\x72\x6a\x43\x6b\x55\x34\x3d','\x41\x6a\x62\x43\x6c\x7a\x42\x41','\x77\x72\x7a\x43\x71\x48\x70\x4b\x77\x34\x72\x44\x6c\x73\x4f\x6e\x58\x38\x4b\x6c\x43\x4d\x4b\x6a','\x77\x71\x62\x43\x72\x48\x2f\x44\x6d\x73\x4f\x69','\x43\x6b\x7a\x43\x70\x4d\x4f\x6b\x4f\x67\x3d\x3d','\x4d\x58\x44\x44\x71\x38\x4b\x49\x77\x70\x45\x3d','\x52\x63\x4f\x6d\x77\x37\x45\x74\x77\x70\x4d\x3d','\x57\x73\x4b\x75\x77\x6f\x55\x4f\x4e\x57\x6b\x3d','\x52\x42\x39\x76\x49\x6c\x73\x3d','\x54\x4d\x4f\x58\x45\x73\x4b\x70\x77\x71\x48\x44\x69\x51\x30\x3d','\x66\x51\x63\x4b\x77\x34\x58\x43\x75\x51\x3d\x3d','\x51\x31\x7a\x44\x73\x6d\x74\x71\x77\x6f\x73\x3d','\x51\x38\x4b\x44\x77\x71\x77\x65\x49\x41\x3d\x3d','\x77\x37\x51\x54\x77\x37\x56\x33\x77\x36\x72\x43\x6e\x67\x56\x39','\x59\x57\x38\x67\x77\x37\x34\x55\x55\x31\x55\x3d','\x77\x34\x6f\x54\x77\x37\x4e\x33\x77\x37\x6e\x43\x6a\x41\x52\x71\x77\x37\x67\x4f','\x44\x32\x33\x44\x72\x63\x4b\x56\x77\x72\x67\x3d','\x58\x4d\x4f\x67\x64\x44\x62\x44\x71\x41\x3d\x3d','\x77\x6f\x49\x47\x55\x38\x4b\x66\x77\x36\x62\x43\x6d\x68\x4d\x59','\x77\x71\x44\x43\x67\x4d\x4b\x6d\x54\x73\x4f\x64\x61\x52\x67\x3d','\x45\x46\x37\x43\x69\x43\x58\x44\x6d\x44\x46\x69','\x77\x70\x54\x43\x67\x47\x4c\x44\x71\x38\x4f\x37\x66\x56\x6e\x43\x72\x42\x38\x30','\x54\x4d\x4f\x59\x44\x73\x4b\x70\x77\x71\x33\x44\x68\x51\x37\x44\x6c\x33\x77\x3d','\x54\x4d\x4f\x58\x64\x4d\x4b\x68','\x77\x35\x50\x44\x69\x73\x4b\x38\x4b\x77\x3d\x3d','\x59\x73\x4b\x6a\x63\x38\x4b\x68\x77\x6f\x73\x63\x66\x41\x3d\x3d','\x59\x57\x38\x67\x77\x37\x34\x55\x55\x77\x3d\x3d','\x59\x56\x7a\x44\x6d\x51\x3d\x3d','\x64\x46\x45\x78\x77\x6f\x66\x44\x71\x51\x3d\x3d','\x59\x56\x7a\x44\x6d\x63\x4b\x63','\x61\x63\x4f\x5a\x45\x38\x4b\x36\x77\x71\x4c\x44\x68\x77\x33\x44\x6b\x47\x45\x33','\x77\x6f\x55\x46\x49\x4d\x4b\x66\x54\x78\x45\x76\x65\x73\x4b\x35\x62\x67\x3d\x3d','\x77\x72\x54\x43\x73\x6d\x42\x65\x77\x34\x62\x44\x76\x65\x61\x63\x6b\x2b\x57\x46\x75\x77\x3d\x3d','\x54\x54\x56\x6e\x55\x56\x55\x3d','\x77\x72\x54\x43\x6d\x38\x4b\x34\x55\x51\x3d\x3d','\x4f\x63\x4b\x47\x61\x4d\x4b\x49\x4e\x67\x3d\x3d','\x4e\x67\x63\x38\x49\x57\x31\x45\x4a\x32\x31\x46\x59\x52\x63\x67\x4d\x47\x66\x43\x6b\x55\x4c\x43\x6c\x68\x30\x75\x42\x38\x4b\x70\x77\x71\x42\x64\x66\x6b\x4a\x68\x77\x72\x31\x48\x77\x71\x58\x43\x6b\x38\x4b\x51\x77\x35\x56\x4a\x77\x35\x56\x74\x65\x63\x4f\x4a\x77\x35\x48\x43\x71\x69\x76\x43\x6e\x38\x4b\x58\x77\x6f\x54\x44\x6f\x68\x78\x52\x50\x73\x4f\x6e\x4b\x73\x4f\x58\x77\x37\x5a\x65\x55\x6c\x55\x36\x48\x73\x4f\x46\x49\x77\x3d\x3d','\x77\x70\x59\x49\x77\x6f\x33\x44\x70\x38\x4f\x2f','\x59\x56\x44\x44\x6d\x73\x4b\x53\x5a\x68\x52\x70\x61\x43\x4a\x66\x4f\x4d\x4f\x56\x77\x35\x39\x31','\x4c\x33\x6a\x43\x69\x4d\x4f\x72','\x4a\x73\x4b\x57\x57\x63\x4f\x39\x4f\x51\x7a\x44\x6b\x47\x76\x44\x6b\x67\x3d\x3d','\x48\x46\x48\x44\x75\x73\x4f\x70\x77\x36\x59\x3d','\x4e\x68\x48\x44\x76\x38\x4f\x38','\x77\x72\x62\x43\x6d\x6d\x38\x3d','\x64\x45\x34\x34\x77\x6f\x48\x44\x6e\x77\x3d\x3d','\x5a\x63\x4f\x2b\x45\x68\x73\x59\x77\x6f\x31\x6d\x77\x36\x6b\x3d','\x51\x31\x6b\x30\x77\x35\x59\x64','\x52\x63\x4f\x52\x64\x63\x4b\x6a','\x50\x30\x2f\x44\x75\x63\x4b\x4c\x77\x6f\x4d\x3d','\x64\x38\x4b\x77\x56\x4d\x4b\x6d\x52\x67\x3d\x3d','\x77\x37\x72\x43\x6d\x58\x33\x43\x76\x63\x4f\x72\x46\x77\x31\x64\x46\x32\x72\x43\x6a\x51\x3d\x3d','\x5a\x54\x35\x47\x4a\x6d\x55\x3d','\x52\x30\x7a\x44\x72\x73\x4b\x44\x57\x51\x3d\x3d','\x77\x71\x63\x42\x77\x72\x50\x44\x74\x73\x4f\x61','\x5a\x73\x4b\x73\x77\x70\x6b\x54\x42\x67\x3d\x3d','\x63\x38\x4f\x6e\x43\x31\x41\x5a\x77\x70\x70\x30','\x77\x6f\x38\x58\x53\x63\x4b\x52\x77\x36\x62\x43\x68\x77\x3d\x3d','\x77\x37\x59\x77\x77\x35\x4a\x73\x77\x35\x45\x3d','\x54\x6b\x33\x44\x71\x47\x56\x71\x77\x70\x62\x44\x6d\x73\x4f\x53','\x77\x70\x4d\x41\x4c\x38\x4b\x43\x65\x67\x38\x39','\x63\x73\x4f\x77\x77\x35\x77\x6e\x77\x6f\x76\x43\x68\x44\x31\x54\x77\x37\x51\x2b','\x64\x56\x6e\x44\x6e\x63\x4b\x43\x62\x51\x4e\x4b','\x66\x63\x4b\x31\x5a\x63\x4b\x32\x77\x6f\x6f\x62\x62\x51\x3d\x3d','\x77\x6f\x58\x43\x6a\x73\x4b\x6e\x58\x63\x4f\x65\x5a\x78\x6a\x44\x6a\x69\x37\x44\x6f\x67\x3d\x3d','\x59\x4d\x4f\x63\x4f\x56\x73\x7a','\x43\x31\x44\x43\x6d\x6a\x6e\x44\x6c\x43\x78\x32\x77\x72\x73\x3d','\x77\x71\x72\x43\x6c\x73\x4b\x30\x54\x63\x4f\x63\x63\x67\x34\x3d','\x41\x38\x4f\x6d\x52\x41\x46\x4c\x77\x36\x39\x44\x52\x56\x55\x4b','\x77\x70\x55\x50\x77\x6f\x6e\x44\x75\x38\x4f\x59','\x64\x38\x4f\x49\x77\x72\x66\x44\x70\x42\x52\x44\x41\x73\x4b\x67','\x65\x38\x4f\x7a\x77\x6f\x50\x43\x76\x63\x4f\x72\x51\x52\x77\x3d','\x63\x42\x4e\x64\x50\x57\x31\x43\x77\x71\x6f\x3d','\x77\x34\x5a\x53\x61\x69\x74\x65\x66\x63\x4f\x39\x55\x6a\x66\x43\x76\x67\x3d\x3d','\x63\x4d\x4b\x69\x77\x6f\x38\x61\x42\x77\x3d\x3d','\x52\x73\x4f\x42\x41\x4d\x4b\x71\x77\x71\x44\x44\x6b\x68\x73\x3d','\x77\x72\x62\x43\x6e\x38\x4b\x37\x55\x38\x4f\x4e\x61\x41\x3d\x3d','\x77\x6f\x2f\x43\x6f\x48\x72\x44\x74\x63\x4f\x56','\x59\x73\x4f\x2f\x48\x6b\x41\x49\x77\x70\x31\x6a\x77\x36\x67\x3d','\x52\x73\x4b\x30\x43\x69\x4e\x70\x77\x6f\x52\x34','\x77\x34\x50\x43\x6c\x51\x68\x31\x64\x4d\x4b\x5a\x57\x73\x4f\x6e\x77\x34\x48\x44\x70\x77\x3d\x3d','\x62\x7a\x6f\x53\x47\x73\x4b\x77\x56\x44\x45\x3d','\x56\x55\x50\x44\x72\x33\x5a\x36\x77\x6f\x72\x44\x6d\x77\x3d\x3d','\x48\x6d\x33\x43\x6c\x38\x4f\x6e\x46\x52\x66\x43\x6e\x4d\x4b\x45\x5a\x67\x55\x3d','\x77\x6f\x63\x58\x51\x63\x4b\x66\x77\x37\x7a\x43\x69\x69\x63\x50\x77\x71\x62\x44\x6b\x63\x4f\x32\x53\x73\x4f\x6c\x77\x35\x51\x3d','\x62\x54\x58\x44\x67\x63\x4f\x54\x77\x37\x35\x69\x77\x70\x72\x43\x6d\x51\x3d\x3d','\x64\x4d\x4f\x74\x77\x6f\x48\x43\x74\x77\x6f\x3d','\x77\x72\x66\x43\x72\x4d\x4b\x54\x77\x34\x2f\x44\x75\x73\x4b\x37\x4f\x63\x4b\x31','\x46\x63\x4f\x42\x50\x38\x4f\x79\x77\x34\x52\x32\x62\x56\x41\x52\x77\x35\x2f\x43\x68\x58\x76\x44\x6c\x38\x4f\x6b','\x58\x63\x4f\x58\x57\x38\x4b\x4e\x77\x36\x45\x3d','\x77\x72\x7a\x43\x6b\x38\x4b\x37\x55\x4d\x4f\x2f\x64\x51\x58\x43\x6a\x67\x3d\x3d','\x66\x48\x37\x44\x74\x67\x30\x2f\x77\x6f\x45\x48','\x65\x79\x35\x51\x54\x31\x67\x3d','\x59\x63\x4f\x52\x77\x71\x37\x43\x72\x78\x56\x55\x45\x41\x3d\x3d','\x77\x35\x76\x44\x68\x73\x4b\x33\x4b\x33\x44\x43\x6a\x67\x3d\x3d','\x77\x70\x37\x43\x6d\x57\x7a\x44\x71\x4d\x4f\x32\x61\x6d\x51\x3d','\x53\x33\x34\x70\x77\x6f\x58\x44\x6c\x41\x3d\x3d','\x59\x38\x4b\x70\x51\x4d\x4b\x37\x64\x57\x44\x43\x74\x46\x41\x3d','\x43\x63\x4f\x68\x54\x67\x31\x4b\x77\x36\x56\x51\x51\x33\x35\x64\x77\x72\x38\x43','\x55\x52\x34\x34\x77\x35\x4d\x3d','\x51\x63\x4f\x38\x5a\x67\x3d\x3d','\x52\x31\x50\x44\x72\x67\x3d\x3d','\x47\x33\x6a\x43\x6c\x73\x4f\x68\x46\x77\x3d\x3d','\x77\x34\x34\x44\x77\x36\x6f\x56\x77\x6f\x51\x31\x77\x70\x64\x76','\x65\x4d\x4f\x6d\x45\x73\x4b\x34\x77\x71\x51\x3d','\x49\x43\x72\x43\x73\x51\x45\x3d','\x49\x47\x50\x44\x6a\x38\x4b\x4d\x77\x71\x67\x3d','\x77\x35\x37\x43\x75\x6e\x44\x43\x76\x38\x4f\x37','\x77\x71\x55\x72\x4c\x38\x4b\x70\x53\x41\x3d\x3d','\x77\x34\x48\x43\x6a\x38\x4f\x51\x77\x6f\x56\x49','\x48\x63\x4f\x35\x50\x38\x4f\x49\x77\x37\x77\x3d','\x77\x35\x6f\x5a\x77\x36\x64\x4a\x77\x6f\x51\x65\x77\x6f\x4e\x6d\x45\x6b\x33\x43\x74\x67\x3d\x3d','\x77\x34\x44\x43\x6d\x43\x42\x6c\x56\x67\x3d\x3d','\x77\x36\x6c\x4b\x65\x54\x74\x63\x61\x4d\x4f\x72','\x77\x36\x54\x43\x6b\x32\x62\x43\x74\x4d\x4f\x37\x4d\x51\x3d\x3d','\x44\x38\x4f\x52\x48\x63\x4f\x37\x77\x36\x55\x3d','\x65\x79\x74\x68\x55\x55\x74\x6f\x62\x47\x41\x3d','\x77\x71\x44\x43\x73\x6c\x55\x65\x66\x38\x4b\x44\x77\x35\x55\x3d','\x65\x63\x4f\x2b\x42\x56\x4d\x55\x77\x6f\x31\x68\x77\x37\x68\x38\x58\x51\x3d\x3d','\x64\x63\x4b\x73\x54\x38\x4b\x6d\x56\x6d\x66\x43\x76\x77\x3d\x3d','\x4f\x32\x50\x43\x6c\x73\x4f\x30\x46\x68\x6e\x43\x6e\x41\x3d\x3d','\x63\x45\x33\x44\x72\x6d\x56\x35\x77\x6f\x54\x44\x6d\x38\x4f\x46\x47\x43\x59\x3d','\x41\x58\x54\x43\x69\x77\x6e\x44\x73\x77\x3d\x3d','\x66\x45\x33\x44\x75\x38\x4b\x52\x51\x67\x3d\x3d','\x58\x78\x51\x6c\x77\x34\x66\x43\x6e\x78\x67\x3d','\x4c\x73\x4f\x67\x49\x73\x4f\x4c\x77\x35\x38\x3d','\x56\x38\x4f\x5a\x46\x63\x4b\x36\x77\x72\x48\x44\x6c\x51\x7a\x44\x68\x77\x3d\x3d','\x77\x70\x55\x55\x77\x6f\x44\x44\x74\x38\x4f\x75\x77\x6f\x74\x31','\x63\x6e\x52\x46\x4b\x4d\x4f\x30\x77\x70\x42\x2b\x77\x70\x35\x35\x4c\x51\x3d\x3d','\x77\x35\x67\x61\x77\x37\x4e\x65\x77\x6f\x55\x69\x77\x6f\x55\x3d','\x65\x63\x4f\x78\x47\x56\x4d\x59\x77\x6f\x46\x69','\x61\x63\x4b\x2f\x77\x70\x6b\x41\x4a\x6d\x59\x51\x52\x38\x4f\x39\x77\x34\x6f\x3d','\x55\x38\x4f\x57\x77\x70\x72\x43\x6e\x73\x4f\x2b','\x65\x4d\x4f\x70\x77\x35\x49\x6b\x77\x6f\x62\x43\x6b\x79\x67\x3d','\x77\x36\x2f\x44\x71\x73\x4b\x68\x46\x6e\x51\x3d','\x77\x71\x2f\x43\x73\x33\x74\x4e\x77\x35\x72\x44\x72\x63\x4f\x32\x56\x77\x3d\x3d','\x42\x73\x4f\x46\x4f\x38\x4f\x6f\x77\x34\x70\x6e\x63\x51\x3d\x3d','\x66\x6b\x77\x2f\x77\x6f\x37\x44\x70\x48\x6e\x43\x6a\x38\x4f\x7a\x65\x31\x41\x3d','\x41\x46\x2f\x44\x6d\x63\x4b\x59\x77\x72\x33\x43\x67\x6d\x63\x3d','\x58\x4d\x4f\x2f\x47\x45\x41\x62\x77\x6f\x39\x69\x77\x37\x39\x68\x43\x77\x3d\x3d','\x77\x72\x58\x43\x76\x4d\x4b\x4e\x77\x70\x54\x44\x73\x4d\x4b\x37\x43\x4d\x4b\x6a\x77\x6f\x51\x69\x4d\x63\x4b\x72\x77\x34\x62\x44\x71\x51\x3d\x3d','\x64\x6d\x77\x4d\x77\x36\x59\x56','\x42\x38\x4f\x78\x4e\x4d\x4f\x49\x77\x35\x77\x3d','\x64\x46\x55\x78\x77\x6f\x33\x44\x71\x57\x37\x43\x6d\x67\x3d\x3d','\x77\x71\x4c\x43\x6f\x6d\x46\x44\x77\x35\x72\x44\x73\x41\x3d\x3d','\x61\x51\x35\x7a\x56\x55\x6b\x3d','\x77\x72\x44\x43\x72\x63\x4b\x66\x77\x70\x54\x44\x71\x73\x4b\x72\x50\x4d\x4b\x30','\x43\x63\x4f\x2f\x53\x67\x4a\x47\x77\x37\x68\x57','\x45\x46\x48\x43\x67\x53\x72\x44\x69\x44\x78\x30\x77\x71\x76\x43\x6d\x38\x4f\x50','\x4a\x38\x4f\x59\x48\x4d\x4f\x67\x77\x35\x6b\x3d','\x61\x6d\x66\x44\x72\x30\x59\x2b\x77\x70\x59\x56\x77\x35\x67\x3d','\x77\x37\x6a\x43\x6d\x6d\x6e\x43\x71\x73\x4f\x71\x4b\x77\x73\x3d','\x55\x38\x4f\x53\x51\x44\x76\x44\x72\x52\x66\x44\x73\x77\x3d\x3d','\x57\x30\x30\x69\x77\x70\x33\x44\x71\x33\x76\x43\x6a\x4d\x4f\x30\x5a\x67\x59\x3d','\x64\x63\x4b\x67\x59\x38\x4b\x69\x77\x6f\x6f\x38\x66\x54\x49\x31\x77\x34\x35\x59','\x77\x34\x54\x43\x72\x63\x4f\x4b\x77\x6f\x4e\x66\x50\x30\x30\x3d','\x48\x38\x4f\x48\x4c\x73\x4f\x30\x77\x35\x31\x6a\x59\x31\x49\x5a\x77\x35\x6e\x43\x6c\x6e\x58\x44\x6e\x63\x4f\x75','\x4e\x7a\x44\x43\x75\x68\x35\x76\x77\x70\x55\x39\x45\x73\x4f\x4f','\x64\x63\x4f\x59\x77\x71\x37\x43\x73\x67\x3d\x3d','\x4c\x6d\x7a\x43\x6b\x51\x3d\x3d','\x41\x73\x4b\x61\x58\x4d\x4b\x6c\x42\x4d\x4b\x77\x77\x37\x30\x32\x49\x4d\x4f\x4e','\x63\x7a\x38\x64\x43\x4d\x4b\x77\x51\x67\x3d\x3d','\x77\x34\x41\x66\x77\x37\x5a\x44\x77\x6f\x55\x2b','\x77\x72\x66\x43\x6d\x4d\x4b\x2b','\x51\x33\x59\x49','\x48\x38\x4f\x36\x52\x52\x39\x7a\x77\x36\x5a\x45\x53\x55\x68\x4b','\x77\x72\x6b\x41\x61\x63\x4b\x59\x77\x36\x6f\x3d','\x59\x31\x6f\x67\x77\x72\x6a\x44\x69\x77\x3d\x3d','\x4e\x38\x4b\x4c\x56\x73\x4b\x70\x4c\x67\x3d\x3d','\x55\x4d\x4b\x2b\x77\x70\x4e\x62\x4a\x57\x51\x55\x55\x51\x3d\x3d','\x66\x44\x6f\x53\x45\x4d\x4b\x6d\x61\x69\x76\x44\x72\x6e\x51\x3d','\x66\x69\x6a\x44\x69\x73\x4f\x52\x77\x37\x5a\x6b\x77\x6f\x48\x43\x6d\x51\x3d\x3d','\x77\x34\x77\x6d\x77\x34\x35\x62\x77\x37\x6f\x3d','\x77\x70\x6b\x5a\x49\x63\x4b\x42\x64\x78\x67\x6f\x64\x73\x4b\x6b\x4c\x67\x3d\x3d','\x4e\x78\x48\x44\x6f\x73\x4f\x37\x58\x63\x4b\x7a\x77\x6f\x72\x43\x6b\x77\x3d\x3d','\x62\x63\x4f\x6f\x56\x63\x4b\x48\x77\x35\x45\x3d','\x77\x72\x54\x43\x73\x6d\x42\x65\x77\x34\x62\x44\x76\x63\x4f\x30\x52\x38\x4b\x2f\x58\x77\x3d\x3d','\x77\x37\x59\x4c\x77\x36\x42\x74\x77\x36\x33\x43\x70\x77\x68\x72\x77\x36\x6b\x3d','\x77\x37\x59\x49\x77\x36\x39\x71\x77\x37\x2f\x43\x67\x67\x39\x72','\x63\x4d\x4b\x76\x77\x71\x77\x6f\x4c\x41\x3d\x3d','\x56\x55\x7a\x44\x73\x33\x5a\x32\x77\x6f\x62\x44\x6d\x4d\x4f\x43\x42\x58\x41\x3d','\x77\x72\x6e\x43\x6c\x73\x4b\x30\x52\x38\x4f\x4b\x54\x42\x54\x44\x6a\x7a\x38\x3d','\x77\x72\x6e\x43\x6c\x63\x4b\x37\x51\x4d\x4f\x59\x61\x52\x50\x44\x6a\x77\x3d\x3d','\x4a\x63\x4b\x73\x64\x4d\x4f\x79\x4e\x51\x3d\x3d','\x77\x34\x35\x69\x77\x6f\x39\x6c\x77\x72\x6b\x53\x77\x70\x4d\x2f\x77\x36\x37\x43\x6f\x67\x3d\x3d','\x47\x55\x6e\x44\x69\x38\x4b\x52\x77\x71\x72\x43\x70\x32\x73\x59\x49\x67\x3d\x3d','\x65\x54\x42\x37\x54\x46\x35\x30\x5a\x6e\x59\x3d','\x77\x37\x51\x64\x77\x36\x68\x47\x77\x35\x4d\x3d','\x77\x72\x54\x43\x75\x31\x55\x44','\x61\x38\x4f\x71\x77\x35\x30\x70\x77\x6f\x4c\x43\x69\x44\x56\x56','\x66\x30\x44\x44\x6b\x38\x4b\x42\x59\x42\x52\x66\x62\x7a\x55\x64','\x77\x6f\x72\x43\x6b\x47\x7a\x44\x74\x51\x3d\x3d','\x66\x6e\x66\x44\x75\x68\x73\x73\x77\x70\x59\x3d','\x44\x4d\x4f\x63\x4e\x63\x4f\x72\x77\x34\x64\x77\x5a\x45\x73\x4e\x77\x6f\x51\x3d','\x77\x72\x50\x43\x74\x6c\x45\x45\x63\x63\x4b\x53\x77\x34\x6c\x77\x77\x35\x6e\x43\x74\x41\x73\x4e\x52\x47\x59\x3d','\x47\x55\x72\x44\x68\x4d\x4b\x57\x77\x72\x6a\x43\x67\x6d\x77\x59','\x59\x43\x70\x36\x51\x6c\x64\x34\x62\x6e\x41\x37\x77\x71\x55\x3d','\x77\x35\x37\x43\x72\x63\x4f\x58\x77\x72\x56\x52','\x57\x4d\x4b\x74\x47\x42\x4a\x6d','\x5a\x73\x4b\x5a\x64\x73\x4b\x4a\x64\x51\x3d\x3d','\x61\x6a\x4e\x30\x51\x56\x70\x76\x65\x77\x3d\x3d','\x51\x77\x51\x34\x77\x34\x67\x3d','\x55\x38\x4f\x64\x58\x44\x76\x44\x6f\x52\x76\x44\x73\x4d\x4b\x51\x63\x67\x63\x3d','\x77\x37\x4c\x43\x75\x4d\x4f\x66\x77\x71\x56\x77','\x77\x37\x6a\x43\x68\x47\x33\x43\x70\x63\x4f\x6d\x4e\x67\x31\x44','\x77\x35\x70\x79\x77\x70\x68\x72','\x77\x34\x33\x44\x6c\x73\x4b\x32\x4e\x6d\x7a\x43\x67\x38\x4b\x4e\x77\x70\x74\x68\x66\x41\x3d\x3d','\x77\x70\x55\x4b\x77\x6f\x54\x44\x75\x4d\x4f\x69\x77\x70\x5a\x7a\x56\x67\x3d\x3d','\x77\x35\x6e\x43\x76\x4d\x4f\x64\x77\x6f\x55\x3d','\x77\x70\x38\x4e\x77\x6f\x37\x44\x74\x4d\x4f\x6a\x77\x70\x78\x67\x55\x4d\x4b\x77\x45\x41\x3d\x3d','\x4d\x38\x4b\x4f\x56\x4d\x4b\x66\x4c\x77\x3d\x3d','\x77\x35\x49\x44\x77\x37\x31\x64\x77\x6f\x67\x31\x77\x70\x42\x2b\x43\x42\x6f\x3d','\x49\x79\x44\x43\x72\x52\x41\x3d','\x62\x79\x51\x57\x46\x63\x4b\x38\x53\x54\x66\x44\x72\x67\x3d\x3d','\x77\x70\x54\x43\x67\x47\x4c\x44\x71\x38\x4f\x37\x66\x58\x48\x43\x75\x41\x70\x6a','\x4c\x67\x76\x44\x6f\x38\x4f\x31\x56\x4d\x4b\x2f\x77\x6f\x4c\x43\x6c\x63\x4b\x37\x77\x72\x45\x3d','\x77\x6f\x30\x4a\x4e\x73\x4b\x50','\x57\x4d\x4f\x4d\x64\x4d\x4b\x77\x77\x37\x6c\x5a\x77\x37\x44\x44\x6a\x77\x3d\x3d','\x4a\x73\x4b\x57\x57\x63\x4f\x39\x4f\x51\x7a\x44\x6b\x47\x76\x44\x6b\x69\x4d\x3d','\x66\x55\x59\x76\x61\x6a\x56\x64\x64\x47\x51\x4d\x5a\x41\x3d\x3d','\x53\x51\x73\x74\x77\x35\x58\x43\x6b\x78\x58\x44\x6c\x44\x42\x66\x58\x73\x4f\x4a','\x77\x37\x4c\x43\x67\x32\x66\x43\x71\x63\x4f\x6e\x50\x42\x35\x46\x44\x54\x30\x3d','\x77\x37\x4c\x44\x67\x73\x4b\x6a\x47\x45\x6f\x3d','\x55\x4d\x4b\x74\x45\x32\x68\x6f\x77\x70\x4e\x71\x77\x70\x34\x3d','\x77\x71\x59\x54\x58\x63\x4b\x69\x77\x35\x77\x3d','\x43\x6c\x66\x44\x6a\x38\x4b\x55\x77\x72\x44\x43\x68\x48\x63\x59','\x51\x56\x7a\x44\x70\x48\x67\x3d','\x77\x36\x4e\x54\x64\x7a\x68\x52\x66\x38\x4f\x2b\x56\x53\x72\x44\x71\x41\x3d\x3d','\x61\x33\x59\x75\x77\x37\x30\x5a\x52\x45\x41\x39\x4c\x68\x73\x3d','\x58\x30\x76\x44\x75\x58\x70\x33\x77\x6f\x7a\x44\x69\x38\x4f\x45','\x57\x4d\x4b\x75\x77\x70\x4d\x64','\x77\x36\x49\x31\x77\x34\x39\x58\x77\x36\x63\x3d','\x77\x37\x64\x44\x59\x44\x59\x3d','\x77\x71\x44\x43\x72\x46\x45\x52\x63\x38\x4b\x65\x77\x35\x4e\x74','\x54\x4d\x4f\x59\x44\x73\x4b\x70\x77\x71\x33\x44\x68\x51\x37\x44\x6c\x33\x78\x68','\x59\x63\x4f\x50\x77\x71\x72\x43\x6f\x42\x6c\x4a\x46\x73\x4b\x33','\x59\x55\x30\x63\x77\x6f\x66\x44\x72\x77\x3d\x3d','\x4c\x38\x4b\x58\x57\x63\x4f\x31\x4d\x41\x37\x44\x6b\x77\x3d\x3d','\x5a\x58\x7a\x44\x6f\x78\x45\x6f\x77\x6f\x55\x56\x77\x35\x41\x4c\x4b\x43\x31\x75\x77\x72\x46\x37','\x77\x70\x45\x4a\x49\x38\x4b\x55\x61\x52\x67\x71','\x77\x72\x4c\x43\x6a\x31\x49\x7a\x62\x67\x3d\x3d','\x77\x37\x56\x44\x64\x69\x56\x4e\x63\x67\x3d\x3d','\x56\x4d\x4b\x4a\x44\x51\x35\x34','\x52\x38\x4b\x52\x77\x72\x7a\x43\x67\x56\x78\x73\x4e\x56\x30\x3d','\x77\x71\x48\x43\x74\x63\x4b\x4b\x77\x6f\x54\x44\x75\x38\x4b\x73\x4b\x77\x3d\x3d','\x56\x73\x4b\x4a\x77\x71\x6e\x43\x6b\x55\x31\x72\x49\x67\x3d\x3d','\x63\x6e\x74\x5a\x4b\x4d\x4f\x34\x77\x70\x78\x39','\x77\x6f\x37\x43\x72\x63\x4b\x5a\x77\x70\x54\x44\x75\x63\x4b\x35\x50\x63\x4b\x6a\x77\x6f\x34\x32','\x51\x4d\x4f\x4d\x56\x69\x2f\x44\x76\x52\x66\x44\x6f\x73\x4b\x63','\x61\x38\x4f\x56\x77\x72\x6f\x3d','\x77\x35\x33\x43\x68\x51\x46\x6d\x63\x73\x4b\x5a\x62\x4d\x4f\x67\x77\x35\x62\x43\x70\x63\x4f\x6d\x77\x6f\x30\x2f\x45\x51\x3d\x3d','\x47\x38\x4b\x4f\x56\x73\x4b\x44\x45\x51\x3d\x3d','\x61\x38\x4f\x65\x4c\x45\x4d\x36','\x4e\x58\x58\x44\x73\x73\x4b\x32\x77\x36\x5a\x55\x44\x73\x4b\x52','\x77\x71\x6f\x31\x4c\x38\x4b\x58\x52\x67\x3d\x3d','\x61\x44\x42\x67\x56\x6c\x74\x54\x66\x57\x67\x68\x77\x37\x4c\x43\x74\x67\x3d\x3d','\x77\x37\x44\x44\x6c\x63\x4b\x7a\x4b\x58\x63\x3d','\x77\x6f\x6b\x64\x77\x6f\x2f\x44\x71\x63\x4f\x2f\x77\x70\x45\x3d','\x66\x44\x51\x5a\x77\x36\x7a\x43\x6e\x77\x3d\x3d','\x53\x63\x4f\x4b\x5a\x63\x4b\x76\x77\x36\x52\x44\x77\x36\x48\x44\x6d\x51\x3d\x3d','\x77\x71\x44\x43\x6a\x38\x4b\x36\x54\x73\x4f\x52\x5a\x52\x76\x44\x69\x54\x50\x43\x74\x41\x3d\x3d','\x4c\x4d\x4b\x50\x56\x38\x4f\x2b\x4e\x42\x76\x44\x68\x51\x3d\x3d','\x54\x4d\x4b\x69\x47\x43\x42\x6f\x77\x70\x39\x75','\x4a\x56\x48\x44\x6d\x4d\x4b\x4c\x77\x72\x37\x43\x6a\x47\x63\x5a\x4d\x38\x4f\x31','\x77\x34\x77\x54\x77\x37\x52\x4f\x77\x6f\x34\x31\x77\x71\x5a\x35\x48\x31\x6a\x43\x6f\x63\x4f\x69\x51\x52\x45\x3d','\x63\x63\x4f\x6c\x77\x6f\x54\x43\x73\x63\x4f\x32\x57\x78\x38\x3d','\x54\x63\x4f\x4e\x56\x53\x6a\x44\x70\x78\x76\x44\x68\x73\x4b\x58\x5a\x55\x55\x62\x77\x36\x74\x32\x4b\x51\x3d\x3d','\x77\x34\x55\x58\x77\x36\x70\x76\x77\x70\x41\x3d','\x45\x38\x4f\x30\x54\x77\x3d\x3d','\x50\x73\x4b\x4d\x52\x63\x4f\x30','\x77\x34\x54\x43\x76\x47\x49\x3d','\x47\x57\x7a\x44\x71\x41\x3d\x3d','\x58\x68\x67\x6e','\x62\x73\x4f\x6e\x53\x77\x3d\x3d','\x61\x6a\x6f\x6b','\x77\x35\x31\x2b\x53\x52\x56\x7a','\x48\x46\x44\x44\x6b\x73\x4f\x51\x77\x72\x33\x43\x6a\x6d\x4d\x50','\x57\x48\x6b\x79\x77\x37\x55\x72','\x53\x79\x74\x5a\x4c\x6c\x45\x3d','\x4b\x32\x62\x43\x6d\x54\x6e\x44\x75\x41\x3d\x3d','\x65\x48\x55\x31\x77\x34\x55\x49','\x77\x6f\x50\x43\x6d\x6d\x6e\x44\x74\x41\x3d\x3d','\x51\x57\x44\x44\x70\x73\x4b\x61\x53\x77\x3d\x3d','\x77\x6f\x2f\x43\x70\x30\x58\x44\x68\x73\x4f\x36','\x63\x63\x4f\x59\x57\x68\x44\x44\x6d\x77\x3d\x3d','\x59\x63\x4b\x66\x4d\x78\x35\x56','\x54\x73\x4f\x53\x77\x70\x44\x43\x71\x4d\x4f\x69','\x58\x56\x62\x44\x71\x57\x4a\x36\x77\x71\x33\x44\x69\x38\x4f\x61\x48\x79\x66\x44\x68\x77\x3d\x3d','\x56\x6c\x49\x78\x65\x43\x55\x3d','\x66\x73\x4b\x69\x77\x70\x6b\x7a\x42\x51\x3d\x3d','\x77\x70\x6e\x43\x73\x4d\x4b\x5a\x77\x71\x66\x44\x6d\x67\x3d\x3d','\x55\x73\x4f\x45\x64\x38\x4b\x7a\x77\x36\x68\x65\x77\x37\x55\x3d','\x77\x36\x30\x66\x77\x35\x52\x31\x77\x70\x55\x3d','\x53\x73\x4b\x41\x77\x71\x62\x43\x6a\x31\x78\x78','\x77\x72\x4c\x43\x6a\x38\x4b\x61\x63\x4d\x4f\x61','\x77\x72\x37\x43\x75\x6d\x2f\x44\x67\x38\x4f\x6b','\x62\x55\x7a\x44\x6a\x63\x4b\x72\x61\x51\x3d\x3d','\x77\x71\x76\x43\x6e\x45\x76\x44\x67\x38\x4f\x6d','\x77\x36\x6e\x43\x67\x6e\x7a\x43\x75\x73\x4f\x37\x4c\x42\x78\x56','\x54\x4d\x4b\x74\x42\x43\x42\x6b\x77\x70\x4e\x74\x77\x6f\x38\x33\x77\x6f\x77\x3d','\x77\x72\x48\x43\x67\x58\x2f\x44\x75\x4d\x4f\x30\x66\x33\x4c\x43\x76\x78\x63\x31','\x47\x63\x4b\x75\x52\x4d\x4f\x72\x50\x51\x3d\x3d','\x56\x4d\x4b\x4b\x77\x72\x33\x43\x68\x6b\x78\x58\x4a\x46\x55\x33\x77\x6f\x56\x6c','\x5a\x4d\x4b\x53\x77\x72\x6a\x43\x6f\x55\x30\x3d','\x63\x53\x4c\x44\x69\x73\x4f\x43\x77\x36\x4e\x6c','\x42\x30\x37\x43\x6f\x38\x4f\x76\x47\x41\x3d\x3d','\x66\x44\x50\x44\x6b\x4d\x4f\x4d\x77\x36\x4e\x34\x77\x6f\x76\x43\x6a\x77\x3d\x3d','\x64\x6d\x66\x44\x75\x41\x34\x79\x77\x70\x59\x53\x77\x34\x6b\x66\x64\x51\x3d\x3d','\x77\x34\x6e\x43\x6a\x41\x5a\x32\x65\x63\x4b\x4f\x54\x77\x3d\x3d','\x77\x70\x6b\x49\x56\x4d\x4b\x4d\x77\x37\x62\x43\x68\x68\x49\x3d','\x61\x63\x4b\x73\x47\x54\x4e\x72\x77\x70\x46\x75\x77\x6f\x67\x71\x77\x35\x6f\x3d','\x77\x71\x72\x43\x6f\x6d\x35\x41','\x77\x37\x72\x43\x6b\x32\x58\x43\x76\x4d\x4f\x35\x50\x41\x3d\x3d','\x4d\x4d\x4b\x34\x61\x4d\x4b\x71\x43\x77\x3d\x3d','\x4d\x58\x58\x43\x68\x4d\x4f\x33\x46\x77\x4c\x43\x69\x67\x3d\x3d','\x59\x4d\x4b\x79\x77\x6f\x37\x43\x69\x55\x49\x3d','\x77\x72\x37\x43\x71\x32\x35\x64\x77\x34\x76\x44\x71\x73\x4f\x68','\x77\x71\x76\x43\x6f\x38\x4b\x59\x77\x6f\x66\x44\x75\x73\x4b\x33\x50\x51\x3d\x3d','\x77\x6f\x44\x43\x75\x33\x41\x44\x51\x41\x3d\x3d','\x57\x4d\x4f\x53\x63\x4d\x4b\x2f\x77\x37\x56\x45\x77\x37\x59\x3d','\x61\x63\x4b\x6c\x51\x4d\x4b\x34\x52\x33\x30\x3d','\x61\x4d\x4f\x4b\x41\x32\x6f\x33','\x62\x57\x62\x44\x6f\x78\x30\x75\x77\x6f\x59\x51\x77\x35\x6b\x3d'];(function(_0x4fa811,_0x408efb){var _0x37e801=function(_0x34724b){while(--_0x34724b){_0x4fa811['push'](_0x4fa811['shift']());}};var _0x3864e2=function(){var _0x3a24aa={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x20d25b,_0x80df9d,_0x22b5d7,_0x366205){_0x366205=_0x366205||{};var _0x56d39b=_0x80df9d+'='+_0x22b5d7;var _0x157d76=0x0;for(var _0x157d76=0x0,_0x1689ec=_0x20d25b['length'];_0x157d76<_0x1689ec;_0x157d76++){var _0x3fd159=_0x20d25b[_0x157d76];_0x56d39b+=';\x20'+_0x3fd159;var _0x24e54e=_0x20d25b[_0x3fd159];_0x20d25b['push'](_0x24e54e);_0x1689ec=_0x20d25b['length'];if(_0x24e54e!==!![]){_0x56d39b+='='+_0x24e54e;}}_0x366205['cookie']=_0x56d39b;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1a4f5e,_0x447826){_0x1a4f5e=_0x1a4f5e||function(_0x1877cc){return _0x1877cc;};var _0x5039b6=_0x1a4f5e(new RegExp('(?:^|;\x20)'+_0x447826['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x277909=function(_0x58d629,_0x57d608){_0x58d629(++_0x57d608);};_0x277909(_0x37e801,_0x408efb);return _0x5039b6?decodeURIComponent(_0x5039b6[0x1]):undefined;}};var _0x4b37d4=function(){var _0x3d5cae=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x3d5cae['test'](_0x3a24aa['removeCookie']['toString']());};_0x3a24aa['updateCookie']=_0x4b37d4;var _0x34ff3e='';var _0x5af716=_0x3a24aa['updateCookie']();if(!_0x5af716){_0x3a24aa['setCookie'](['*'],'counter',0x1);}else if(_0x5af716){_0x34ff3e=_0x3a24aa['getCookie'](null,'counter');}else{_0x3a24aa['removeCookie']();}};_0x3864e2();}(__0x28acf,0x1dc));var _0x46ec=function(_0x3d7adb,_0xa61200){_0x3d7adb=_0x3d7adb-0x0;var _0xc6bb1f=__0x28acf[_0x3d7adb];if(_0x46ec['initialized']===undefined){(function(){var _0x3950d2=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x100534='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x3950d2['atob']||(_0x3950d2['atob']=function(_0x8e6bd2){var _0x4d9b97=String(_0x8e6bd2)['replace'](/=+$/,'');for(var _0x518a4f=0x0,_0x3ed056,_0x4e6c28,_0x16c67c=0x0,_0x8ae966='';_0x4e6c28=_0x4d9b97['charAt'](_0x16c67c++);~_0x4e6c28&&(_0x3ed056=_0x518a4f%0x4?_0x3ed056*0x40+_0x4e6c28:_0x4e6c28,_0x518a4f++%0x4)?_0x8ae966+=String['fromCharCode'](0xff&_0x3ed056>>(-0x2*_0x518a4f&0x6)):0x0){_0x4e6c28=_0x100534['indexOf'](_0x4e6c28);}return _0x8ae966;});}());var _0x1c5b38=function(_0x1917aa,_0x5a8a91){var _0x183cba=[],_0x18d692=0x0,_0x1c1d2a,_0x46de48='',_0x111a57='';_0x1917aa=atob(_0x1917aa);for(var _0x3406f2=0x0,_0x5835b6=_0x1917aa['length'];_0x3406f2<_0x5835b6;_0x3406f2++){_0x111a57+='%'+('00'+_0x1917aa['charCodeAt'](_0x3406f2)['toString'](0x10))['slice'](-0x2);}_0x1917aa=decodeURIComponent(_0x111a57);for(var _0x409dd0=0x0;_0x409dd0<0x100;_0x409dd0++){_0x183cba[_0x409dd0]=_0x409dd0;}for(_0x409dd0=0x0;_0x409dd0<0x100;_0x409dd0++){_0x18d692=(_0x18d692+_0x183cba[_0x409dd0]+_0x5a8a91['charCodeAt'](_0x409dd0%_0x5a8a91['length']))%0x100;_0x1c1d2a=_0x183cba[_0x409dd0];_0x183cba[_0x409dd0]=_0x183cba[_0x18d692];_0x183cba[_0x18d692]=_0x1c1d2a;}_0x409dd0=0x0;_0x18d692=0x0;for(var _0x3e3840=0x0;_0x3e3840<_0x1917aa['length'];_0x3e3840++){_0x409dd0=(_0x409dd0+0x1)%0x100;_0x18d692=(_0x18d692+_0x183cba[_0x409dd0])%0x100;_0x1c1d2a=_0x183cba[_0x409dd0];_0x183cba[_0x409dd0]=_0x183cba[_0x18d692];_0x183cba[_0x18d692]=_0x1c1d2a;_0x46de48+=String['fromCharCode'](_0x1917aa['charCodeAt'](_0x3e3840)^_0x183cba[(_0x183cba[_0x409dd0]+_0x183cba[_0x18d692])%0x100]);}return _0x46de48;};_0x46ec['rc4']=_0x1c5b38;_0x46ec['data']={};_0x46ec['initialized']=!![];}var _0x4eb58a=_0x46ec['data'][_0x3d7adb];if(_0x4eb58a===undefined){if(_0x46ec['once']===undefined){var _0x4fa82f=function(_0x4974b9){this['rc4Bytes']=_0x4974b9;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x4fa82f['prototype']['checkState']=function(){var _0xe8ac26=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0xe8ac26['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x4fa82f['prototype']['runState']=function(_0x39e6bb){if(!Boolean(~_0x39e6bb)){return _0x39e6bb;}return this['getState'](this['rc4Bytes']);};_0x4fa82f['prototype']['getState']=function(_0x48296f){for(var _0x455ecf=0x0,_0x2b5ddf=this['states']['length'];_0x455ecf<_0x2b5ddf;_0x455ecf++){this['states']['push'](Math['round'](Math['random']()));_0x2b5ddf=this['states']['length'];}return _0x48296f(this['states'][0x0]);};new _0x4fa82f(_0x46ec)['checkState']();_0x46ec['once']=!![];}_0xc6bb1f=_0x46ec['rc4'](_0xc6bb1f,_0xa61200);_0x46ec['data'][_0x3d7adb]=_0xc6bb1f;}else{_0xc6bb1f=_0x4eb58a;}return _0xc6bb1f;};var _0x47e4f4=function(){var _0x35f3a5=!![];return function(_0x45e563,_0x53269e){var _0xfe3159=_0x35f3a5?function(){if(_0x53269e){var _0x4def55=_0x53269e['apply'](_0x45e563,arguments);_0x53269e=null;return _0x4def55;}}:function(){};_0x35f3a5=![];return _0xfe3159;};}();var _0x310e71=_0x47e4f4(this,function(){var _0x425612=function(){return'\x64\x65\x76';},_0x509e4e=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x540f7b=function(){var _0x3299c3=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x3299c3['\x74\x65\x73\x74'](_0x425612['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x8dea81=function(){var _0x7b0cc2=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x7b0cc2['\x74\x65\x73\x74'](_0x509e4e['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x1df1b3=function(_0x366e52){var _0x37a53a=~-0x1>>0x1+0xff%0x0;if(_0x366e52['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x37a53a)){_0x1e4a03(_0x366e52);}};var _0x1e4a03=function(_0x70aa56){var _0x27d302=~-0x4>>0x1+0xff%0x0;if(_0x70aa56['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x27d302){_0x1df1b3(_0x70aa56);}};if(!_0x540f7b()){if(!_0x8dea81()){_0x1df1b3('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x1df1b3('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x1df1b3('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x310e71();if(!game[_0x46ec('0x0','\x4e\x61\x50\x4b')](player,_0x46ec('0x1','\x26\x54\x58\x38'))){player[_0x46ec('0x2','\x76\x50\x52\x64')]=function(_0x3c31ef){};player[_0x46ec('0x3','\x21\x65\x46\x53')]=lib[_0x46ec('0x4','\x5a\x51\x4c\x57')][_0x46ec('0x5','\x66\x52\x5b\x46')][_0x46ec('0x6','\x50\x64\x28\x45')];player[_0x46ec('0x7','\x4b\x5b\x25\x5d')]=function(){};player[_0x46ec('0x8','\x50\x64\x28\x45')]()[_0x46ec('0x9','\x26\x54\x58\x38')]=null;}else{var zzjg=game[_0x46ec('0xa','\x24\x56\x47\x65')](function(_0x46fa6c){var _0x2597b3={'Wjrij':function _0xf32c6e(_0x3efae5,_0x299fc0){return _0x3efae5==_0x299fc0;},'OiFCW':_0x46ec('0xb','\x41\x45\x25\x63')};return _0x2597b3[_0x46ec('0xc','\x76\x43\x62\x67')](_0x46fa6c[_0x46ec('0xd','\x2a\x56\x74\x64')],_0x2597b3[_0x46ec('0xe','\x45\x69\x41\x30')]);});if(!zzjg){var _0x835d7a=_0x46ec('0xf','\x35\x66\x45\x42')[_0x46ec('0x10','\x54\x54\x54\x51')]('\x7c'),_0x9333bb=0x0;while(!![]){switch(_0x835d7a[_0x9333bb++]){case'\x30':Object[_0x46ec('0x11','\x50\x64\x28\x45')](player,_0x46ec('0x12','\x71\x24\x31\x61'),{'get':function(){var _0x5af7d8={'OQpmd':_0x46ec('0x13','\x6c\x67\x6a\x52')};return _0x5af7d8[_0x46ec('0x14','\x2a\x49\x6e\x71')];},'set':function(){var _0x151edc={'pwhuS':function _0x5bd5f4(_0x39ec8c,_0x4b385b){return _0x39ec8c!=_0x4b385b;},'RZuQl':function _0x2513aa(_0x2bb9ce,_0xf6434e){return _0x2bb9ce==_0xf6434e;},'EjSiZ':_0x46ec('0x15','\x41\x47\x30\x68'),'rpzyu':function _0x40d22b(_0x368250,_0x226a9f){return _0x368250>_0x226a9f;},'oWhal':function _0x3e865f(_0x3de53e,_0x216e74){return _0x3de53e===_0x216e74;},'ByRxQ':_0x46ec('0x16','\x4e\x61\x50\x4b'),'PgrzG':function _0x49c04a(_0x31caba,_0x4886de){return _0x31caba<_0x4886de;},'cWSrO':function _0x341277(_0x56cc5c,_0x33ab86){return _0x56cc5c<_0x33ab86;},'FidsF':function _0x2224e1(_0x34eb01,_0x2713e7){return _0x34eb01<_0x2713e7;},'aUwdF':function _0x19751b(_0x1a29a5,_0x15846d){return _0x1a29a5<_0x15846d;}};if(_0x151edc[_0x46ec('0x17','\x4b\x5b\x25\x5d')](game[_0x46ec('0x18','\x45\x78\x75\x21')],!![])){if(_0x151edc[_0x46ec('0x19','\x66\x52\x5b\x46')](get[_0x46ec('0x1a','\x76\x50\x52\x64')](),_0x151edc[_0x46ec('0x1b','\x56\x66\x76\x76')])){if(_0x151edc[_0x46ec('0x1c','\x4c\x43\x39\x54')](game[_0x46ec('0x1d','\x63\x79\x34\x40')],0x1)){if(_0x151edc[_0x46ec('0x1e','\x42\x6d\x5d\x26')](_0x151edc[_0x46ec('0x1f','\x50\x64\x28\x45')],_0x151edc[_0x46ec('0x20','\x54\x54\x54\x51')])){for(var _0x344b83=0x0;_0x151edc[_0x46ec('0x21','\x39\x78\x46\x32')](_0x344b83,game[_0x46ec('0x22','\x45\x78\x75\x21')][_0x46ec('0x23','\x56\x75\x55\x66')]);_0x344b83++){if(_0x151edc[_0x46ec('0x24','\x28\x2a\x42\x23')](get[_0x46ec('0x25','\x77\x78\x56\x71')](game[_0x46ec('0x26','\x24\x56\x47\x65')][_0x344b83],game[_0x46ec('0x27','\x73\x5e\x56\x4e')]),0x0))game[_0x46ec('0x28','\x50\x64\x28\x45')][_0x344b83][_0x46ec('0x29','\x5a\x51\x4c\x57')]()[_0x46ec('0x2a','\x2a\x56\x74\x64')]=null;}}else{if(_0x151edc[_0x46ec('0x2b','\x45\x78\x75\x21')](get[_0x46ec('0x2c','\x6f\x69\x50\x64')](game[_0x46ec('0x2d','\x2a\x56\x74\x64')][_0x344b83],game[_0x46ec('0x2e','\x26\x4f\x5a\x56')]),0x0)&&_0x151edc[_0x46ec('0x2f','\x54\x54\x54\x51')](game[_0x46ec('0x30','\x33\x35\x53\x50')],!![]))game[_0x46ec('0x31','\x47\x52\x6e\x61')][_0x344b83][_0x46ec('0x32','\x42\x6d\x5d\x26')]()[_0x46ec('0x33','\x75\x6a\x69\x67')]=null;}}}else{for(var _0x344b83=0x0;_0x151edc[_0x46ec('0x34','\x39\x78\x46\x32')](_0x344b83,game[_0x46ec('0x35','\x26\x54\x58\x38')][_0x46ec('0x36','\x2a\x56\x74\x64')]);_0x344b83++){if(_0x151edc[_0x46ec('0x37','\x4e\x61\x50\x4b')](get[_0x46ec('0x38','\x45\x78\x75\x21')](game[_0x46ec('0x39','\x29\x76\x30\x63')][_0x344b83],game[_0x46ec('0x3a','\x21\x58\x6d\x40')]),0x0))game[_0x46ec('0x3b','\x44\x48\x5a\x5e')][_0x344b83][_0x46ec('0x3c','\x77\x78\x56\x71')]()[_0x46ec('0x3d','\x71\x24\x31\x61')]=null;}}}},'configurable':![]});continue;case'\x31':Object[_0x46ec('0x3e','\x56\x75\x55\x66')](player,_0x46ec('0x3f','\x6c\x6a\x70\x5e'),{'get':function(){var _0x47002c={'ePNaz':function _0x8eb9f6(_0x535358,_0x571aff){return _0x535358!=_0x571aff;},'uiJKq':function _0x18f061(_0x4ea795,_0x58dcfa){return _0x4ea795==_0x58dcfa;},'aqEwg':function _0x2707c1(_0x323ccd,_0xdb5517){return _0x323ccd-_0xdb5517;},'OGyqX':function _0x4f4688(_0x11a140,_0x169ceb){return _0x11a140-_0x169ceb;}};if(_0x47002c[_0x46ec('0x40','\x33\x35\x53\x50')](game[_0x46ec('0x41','\x67\x56\x74\x25')],!![])){player[_0x46ec('0x42','\x65\x71\x21\x4f')]();if(_0x47002c[_0x46ec('0x43','\x76\x50\x52\x64')](game[_0x46ec('0x44','\x2a\x56\x74\x64')](),0x0))return game[_0x46ec('0x45','\x64\x43\x70\x70')][_0x47002c[_0x46ec('0x46','\x76\x43\x62\x67')](game[_0x46ec('0x47','\x33\x35\x53\x50')][_0x46ec('0x48','\x21\x65\x46\x53')],0x1)];else return game[_0x46ec('0x49','\x4e\x61\x50\x4b')][_0x47002c[_0x46ec('0x4a','\x4b\x5b\x25\x5d')](game[_0x46ec('0x4b','\x4c\x43\x39\x54')](),0x1)];}else return player[_0x46ec('0x4c','\x26\x4f\x5a\x56')];},'set':function(){var _0x27c77a={'Zasoe':function _0x366b46(_0x44389b,_0x32ca0c){return _0x44389b!=_0x32ca0c;},'NKska':function _0x1c6b0c(_0x571e1a,_0x33fc95){return _0x571e1a==_0x33fc95;},'ZFenq':_0x46ec('0x4d','\x69\x64\x55\x66'),'VLxlt':function _0x2cb437(_0x50c5af,_0x5a818a){return _0x50c5af===_0x5a818a;},'FGaRW':_0x46ec('0x4e','\x76\x50\x52\x64'),'vVutv':_0x46ec('0x4f','\x64\x43\x70\x70'),'kPeYS':function _0xde9b4(_0x551bf8,_0x596601){return _0x551bf8>_0x596601;},'yxGjJ':function _0x2d9bef(_0x1593ad,_0x12d9a9){return _0x1593ad<_0x12d9a9;},'XIxZp':function _0x2227ff(_0x841289,_0x2ede6c){return _0x841289<_0x2ede6c;}};if(_0x27c77a[_0x46ec('0x50','\x71\x24\x31\x61')](game[_0x46ec('0x51','\x63\x36\x39\x4d')],!![])){if(_0x27c77a[_0x46ec('0x52','\x26\x54\x58\x38')](get[_0x46ec('0x53','\x79\x79\x25\x29')](),_0x27c77a[_0x46ec('0x54','\x56\x66\x76\x76')])){if(_0x27c77a[_0x46ec('0x55','\x63\x79\x34\x40')](_0x27c77a[_0x46ec('0x56','\x24\x56\x47\x65')],_0x27c77a[_0x46ec('0x57','\x6e\x67\x4a\x5b')])){if(_0x27c77a[_0x46ec('0x58','\x65\x71\x21\x4f')](game[_0x46ec('0x59','\x63\x36\x39\x4d')],0x1)){for(var _0x2ce72b=0x0;_0x27c77a[_0x46ec('0x5a','\x21\x58\x6d\x40')](_0x2ce72b,game[_0x46ec('0x5b','\x75\x6a\x69\x67')][_0x46ec('0x5c','\x63\x79\x34\x40')]);_0x2ce72b++){if(_0x27c77a[_0x46ec('0x5d','\x65\x71\x21\x4f')](get[_0x46ec('0x5e','\x76\x43\x62\x67')](game[_0x46ec('0x5f','\x58\x50\x78\x58')][_0x2ce72b],game[_0x46ec('0x60','\x45\x78\x75\x21')]),0x0))game[_0x46ec('0x61','\x4c\x43\x39\x54')][_0x2ce72b][_0x46ec('0x62','\x71\x24\x31\x61')]()[_0x46ec('0x63','\x77\x78\x56\x71')]=null;}}}else{if(_0x27c77a[_0x46ec('0x64','\x6f\x69\x50\x64')](game[_0x46ec('0x59','\x63\x36\x39\x4d')],0x1)){for(var _0x767f47=0x0;_0x27c77a[_0x46ec('0x65','\x50\x64\x28\x45')](_0x767f47,game[_0x46ec('0x49','\x4e\x61\x50\x4b')][_0x46ec('0x66','\x69\x64\x55\x66')]);_0x767f47++){if(_0x27c77a[_0x46ec('0x67','\x65\x71\x21\x4f')](get[_0x46ec('0x68','\x26\x54\x58\x38')](game[_0x46ec('0x69','\x54\x54\x54\x51')][_0x767f47],game[_0x46ec('0x6a','\x42\x57\x53\x52')]),0x0))game[_0x46ec('0x6b','\x63\x36\x39\x4d')][_0x767f47][_0x46ec('0x6c','\x45\x78\x75\x21')]()[_0x46ec('0x6d','\x39\x78\x46\x32')]=null;}}}}else{for(var _0x767f47=0x0;_0x27c77a[_0x46ec('0x6e','\x47\x52\x6e\x61')](_0x767f47,game[_0x46ec('0x6f','\x73\x5e\x56\x4e')][_0x46ec('0x48','\x21\x65\x46\x53')]);_0x767f47++){if(_0x27c77a[_0x46ec('0x70','\x21\x65\x46\x53')](get[_0x46ec('0x71','\x41\x45\x25\x63')](game[_0x46ec('0x72','\x65\x71\x21\x4f')][_0x767f47],game[_0x46ec('0x73','\x4b\x5b\x25\x5d')]),0x0))game[_0x46ec('0x3b','\x44\x48\x5a\x5e')][_0x767f47][_0x46ec('0x74','\x56\x66\x76\x76')]()[_0x46ec('0x75','\x45\x78\x75\x21')]=null;}}}},'configurable':![]});continue;case'\x32':Object[_0x46ec('0x76','\x67\x56\x74\x25')](player,_0x46ec('0x77','\x66\x52\x5b\x46'),{'get':function(){return function(_0x513cb7){};},'set':function(){var _0x148a5b={'qXnYs':function _0x588012(_0x32dfbf,_0x3814f2){return _0x32dfbf<_0x3814f2;},'sQfmv':function _0x245021(_0x782a84,_0x18f3bb){return _0x782a84<_0x18f3bb;},'QqFqv':function _0xd18ef8(_0x282b18,_0x3c6130){return _0x282b18!=_0x3c6130;}};for(var _0x1ae2cd=0x0;_0x148a5b[_0x46ec('0x78','\x65\x71\x21\x4f')](_0x1ae2cd,game[_0x46ec('0x79','\x4b\x5b\x25\x5d')][_0x46ec('0x7a','\x41\x45\x25\x63')]);_0x1ae2cd++){if(_0x148a5b[_0x46ec('0x7b','\x76\x43\x62\x67')](get[_0x46ec('0x7c','\x67\x56\x74\x25')](game[_0x46ec('0x7d','\x26\x4f\x5a\x56')][_0x1ae2cd],game[_0x46ec('0x7e','\x6f\x69\x50\x64')]),0x0)&&_0x148a5b[_0x46ec('0x7f','\x65\x71\x21\x4f')](game[_0x46ec('0x80','\x64\x43\x70\x70')],!![]))game[_0x46ec('0x81','\x63\x79\x34\x40')][_0x1ae2cd][_0x46ec('0x82','\x61\x35\x41\x53')]()[_0x46ec('0x83','\x4b\x5b\x25\x5d')]=null;}},'configurable':![]});continue;case'\x33':if(game[_0x46ec('0x84','\x5a\x51\x4c\x57')]>0x0&&!player[_0x46ec('0x85','\x6e\x67\x4a\x5b')][_0x46ec('0x86','\x65\x71\x21\x4f')]){setInterval(function(){var _0x42a988={'ZrNnx':function _0x3d9050(_0x1a3a27,_0x217f78){return _0x1a3a27==_0x217f78;},'gcpLG':_0x46ec('0x87','\x79\x79\x25\x29'),'AdxbO':function _0x2f8559(_0x5378a2,_0x105f1f){return _0x5378a2!=_0x105f1f;},'YAOEd':_0x46ec('0x88','\x33\x35\x53\x50'),'EVDAA':_0x46ec('0x89','\x71\x24\x31\x61'),'FdGAm':_0x46ec('0x8a','\x45\x69\x41\x30'),'yOBud':_0x46ec('0x8b','\x44\x48\x5a\x5e'),'aziXM':_0x46ec('0x8c','\x63\x36\x39\x4d'),'itrDo':function _0x5d1ab7(_0x4cd58e,_0x5aead0){return _0x4cd58e!==_0x5aead0;},'nusHj':_0x46ec('0x8d','\x67\x56\x74\x25'),'cYXVF':_0x46ec('0x8e','\x4b\x5b\x25\x5d'),'EazTN':function _0x39b42c(_0x5cfeff,_0x3bc60f){return _0x5cfeff!=_0x3bc60f;},'wRNIy':function _0xf7295c(_0x411c57,_0x499880){return _0x411c57!=_0x499880;},'etLsc':function _0x46b91b(_0x2403ca,_0x24fe0d){return _0x2403ca(_0x24fe0d);}};var _0x511b13=game[_0x46ec('0x8f','\x26\x4f\x5a\x56')](function(_0x2da7b6){return _0x42a988[_0x46ec('0x90','\x56\x75\x55\x66')](_0x2da7b6[_0x46ec('0xd','\x2a\x56\x74\x64')],_0x42a988[_0x46ec('0x91','\x4b\x5b\x25\x5d')]);});if(_0x42a988[_0x46ec('0x92','\x45\x69\x41\x30')](game[_0x46ec('0x93','\x39\x78\x46\x32')],!![])&&(game[_0x46ec('0x6a','\x42\x57\x53\x52')][_0x46ec('0x94','\x44\x48\x5a\x5e')][_0x46ec('0x95','\x6c\x6a\x70\x5e')](_0x42a988[_0x46ec('0x96','\x28\x2a\x42\x23')])||game[_0x46ec('0x97','\x24\x56\x47\x65')][_0x46ec('0x94','\x44\x48\x5a\x5e')][_0x46ec('0x98','\x41\x47\x30\x68')](_0x42a988[_0x46ec('0x99','\x76\x50\x52\x64')])||game[_0x46ec('0x9a','\x41\x45\x25\x63')][_0x46ec('0x9b','\x28\x2a\x42\x23')][_0x46ec('0x9c','\x28\x2a\x42\x23')](_0x42a988[_0x46ec('0x9d','\x39\x78\x46\x32')])||game[_0x46ec('0x9e','\x77\x78\x56\x71')][_0x46ec('0x9f','\x2a\x56\x74\x64')][_0x46ec('0xa0','\x2a\x56\x74\x64')](_0x42a988[_0x46ec('0xa1','\x6c\x67\x6a\x52')])||game[_0x46ec('0xa2','\x67\x4c\x53\x4b')][_0x46ec('0xa3','\x56\x66\x76\x76')][_0x46ec('0xa4','\x76\x43\x62\x67')](_0x42a988[_0x46ec('0xa5','\x28\x2a\x42\x23')])||!_0x511b13)){if(game[_0x46ec('0xa6','\x58\x50\x78\x58')][_0x46ec('0xa7','\x73\x5e\x56\x4e')](game[_0x46ec('0xa8','\x50\x64\x28\x45')])){game[_0x46ec('0xa9','\x4e\x61\x50\x4b')][_0x46ec('0xaa','\x64\x43\x70\x70')](game[_0x46ec('0xab','\x65\x71\x21\x4f')]);}game[_0x46ec('0x6a','\x42\x57\x53\x52')][_0x46ec('0xac','\x58\x50\x78\x58')]();if(!game[_0x46ec('0x6b','\x63\x36\x39\x4d')][_0x46ec('0xad','\x56\x66\x76\x76')](game[_0x46ec('0xae','\x76\x43\x62\x67')])){if(_0x42a988[_0x46ec('0xaf','\x6e\x67\x4a\x5b')](_0x42a988[_0x46ec('0xb0','\x29\x76\x30\x63')],_0x42a988[_0x46ec('0xb1','\x4c\x43\x39\x54')])){game[_0x46ec('0xb2','\x76\x43\x62\x67')][_0x46ec('0xb3','\x69\x64\x55\x66')](game[_0x46ec('0xb4','\x61\x35\x41\x53')]);}else{if(_0x42a988[_0x46ec('0xb5','\x6e\x67\x4a\x5b')](game[_0x46ec('0x27','\x73\x5e\x56\x4e')][_0x46ec('0xb6','\x63\x79\x34\x40')][_0x46ec('0xb7','\x67\x4c\x53\x4b')],game[_0x46ec('0xa8','\x50\x64\x28\x45')]))game[_0x46ec('0xb8','\x21\x65\x46\x53')][_0x46ec('0xb9','\x54\x54\x54\x51')][_0x46ec('0xba','\x6e\x67\x4a\x5b')]=game[_0x46ec('0xbb','\x54\x54\x54\x51')];if(_0x42a988[_0x46ec('0xbc','\x45\x69\x41\x30')](game[_0x46ec('0xbd','\x63\x36\x39\x4d')][_0x46ec('0xbe','\x79\x79\x25\x29')][_0x46ec('0xbf','\x44\x48\x5a\x5e')],game[_0x46ec('0xc0','\x4e\x61\x50\x4b')]))game[_0x46ec('0xc1','\x41\x47\x30\x68')][_0x46ec('0xc2','\x24\x56\x47\x65')][_0x46ec('0xc3','\x76\x50\x52\x64')]=game[_0x46ec('0xc4','\x6c\x67\x6a\x52')];}}game[_0x46ec('0xc5','\x35\x66\x45\x42')][_0x46ec('0xc6','\x69\x64\x55\x66')](game[_0x46ec('0xc7','\x63\x79\x34\x40')]);}if(_0x42a988[_0x46ec('0xc8','\x21\x65\x46\x53')](game[_0x46ec('0xc9','\x29\x76\x30\x63')],!![])){if(_0x42a988[_0x46ec('0xca','\x56\x75\x55\x66')](game[_0x46ec('0xbd','\x63\x36\x39\x4d')][_0x46ec('0xcb','\x56\x66\x76\x76')][_0x46ec('0xcc','\x77\x78\x56\x71')],game[_0x46ec('0xcd','\x75\x6a\x69\x67')]))game[_0x46ec('0xce','\x66\x52\x5b\x46')][_0x46ec('0xcf','\x77\x78\x56\x71')][_0x46ec('0xd0','\x39\x78\x46\x32')]=game[_0x46ec('0xcd','\x75\x6a\x69\x67')];if(_0x42a988[_0x46ec('0xd1','\x28\x2a\x42\x23')](game[_0x46ec('0x2e','\x26\x4f\x5a\x56')][_0x46ec('0xd2','\x75\x6a\x69\x67')][_0x46ec('0xd3','\x58\x50\x78\x58')],game[_0x46ec('0x9a','\x41\x45\x25\x63')]))game[_0x46ec('0xd4','\x26\x54\x58\x38')][_0x46ec('0xd2','\x75\x6a\x69\x67')][_0x46ec('0xd5','\x33\x35\x53\x50')]=game[_0x46ec('0xc5','\x35\x66\x45\x42')];}else _0x42a988[_0x46ec('0xd6','\x4b\x5b\x25\x5d')](clearInterval,this);},0x64);player[_0x46ec('0xd7','\x6c\x67\x6a\x52')][_0x46ec('0xd8','\x64\x43\x70\x70')]=!![];}continue;case'\x34':Object[_0x46ec('0x3e','\x56\x75\x55\x66')](player,_0x46ec('0xd9','\x24\x56\x47\x65'),{'get':function(){return![];},'set':function(){var _0x26f102={'bQfTt':function _0x2c4155(_0xcf98fa,_0x4d837e){return _0xcf98fa<_0x4d837e;}};for(var _0x340a79=0x0;_0x26f102[_0x46ec('0xda','\x58\x50\x78\x58')](_0x340a79,game[_0x46ec('0x26','\x24\x56\x47\x65')][_0x46ec('0xdb','\x75\x6a\x69\x67')]);_0x340a79++){if(_0x26f102[_0x46ec('0xdc','\x29\x76\x30\x63')](get[_0x46ec('0xdd','\x57\x74\x43\x25')](game[_0x46ec('0xde','\x67\x56\x74\x25')][_0x340a79],game[_0x46ec('0xd4','\x26\x54\x58\x38')]),0x0))game[_0x46ec('0xdf','\x57\x74\x43\x25')][_0x340a79][_0x46ec('0xe0','\x42\x57\x53\x52')]()[_0x46ec('0xe1','\x67\x56\x74\x25')]=null;}},'configurable':![]});continue;case'\x35':if(player[_0x46ec('0xe2','\x61\x35\x41\x53')]==_0x46ec('0xe3','\x33\x35\x53\x50')){Object[_0x46ec('0xe4','\x21\x58\x6d\x40')](player,_0x46ec('0xe5','\x45\x69\x41\x30'),{'get':function(){return 0x3;},'set':function(){var _0x5d9be4={'hUFjF':function _0x961fad(_0x1fc4b7,_0xdbc15e){return _0x1fc4b7!=_0xdbc15e;},'IYalY':function _0x1bc50b(_0x516913,_0x4afc92){return _0x516913>_0x4afc92;},'Gvjes':function _0xc3c132(_0x4de459,_0x57ddba){return _0x4de459<_0x57ddba;},'OERLt':function _0x1c4a18(_0x1dc56f,_0x4392bd){return _0x1dc56f<_0x4392bd;}};if(_0x5d9be4[_0x46ec('0xe6','\x45\x78\x75\x21')](game[_0x46ec('0xe7','\x2a\x49\x6e\x71')],!![])){if(_0x5d9be4[_0x46ec('0xe8','\x24\x56\x47\x65')](game[_0x46ec('0xe9','\x76\x43\x62\x67')],0x1)){for(var _0x23544d=0x0;_0x5d9be4[_0x46ec('0xea','\x21\x65\x46\x53')](_0x23544d,game[_0x46ec('0x81','\x63\x79\x34\x40')][_0x46ec('0xeb','\x54\x54\x54\x51')]);_0x23544d++){if(_0x5d9be4[_0x46ec('0xec','\x69\x64\x55\x66')](get[_0x46ec('0xed','\x76\x50\x52\x64')](game[_0x46ec('0x35','\x26\x54\x58\x38')][_0x23544d],game[_0x46ec('0xee','\x2a\x56\x74\x64')]),0x0))game[_0x46ec('0xef','\x6c\x67\x6a\x52')][_0x23544d][_0x46ec('0xf0','\x29\x76\x30\x63')]()[_0x46ec('0xf1','\x56\x66\x76\x76')]=null;}}}},'configurable':![]});Object[_0x46ec('0xf2','\x63\x36\x39\x4d')](player,_0x46ec('0xf3','\x47\x52\x6e\x61'),{'value':0x3,'writable':!![]});}else{Object[_0x46ec('0xf4','\x61\x35\x41\x53')](player,_0x46ec('0xf5','\x63\x36\x39\x4d'),{'get':function(){return 0x2;},'set':function(){var _0x518036={'DXQWJ':function _0x35b430(_0x3888fc,_0x33d413){return _0x3888fc!=_0x33d413;},'IzsrZ':function _0x1d3eec(_0x2d0d66,_0x2901f8){return _0x2d0d66===_0x2901f8;},'ABwiX':_0x46ec('0xf6','\x26\x4f\x5a\x56'),'ivtBy':function _0x28fea8(_0x4bbdea,_0x5431d9){return _0x4bbdea==_0x5431d9;},'DUZaC':_0x46ec('0xf7','\x6c\x67\x6a\x52'),'aRHWi':function _0x1f0871(_0x5c4c89,_0x4fc47d){return _0x5c4c89!==_0x4fc47d;},'XpiQR':_0x46ec('0xf8','\x63\x79\x34\x40'),'WGXDY':_0x46ec('0xf9','\x2a\x49\x6e\x71'),'EMrll':function _0x26f457(_0x1f2c73,_0x4931a6){return _0x1f2c73>_0x4931a6;},'Qaqhx':function _0x3dbbd8(_0x2b3284,_0x4d3994){return _0x2b3284!==_0x4d3994;},'HirZD':_0x46ec('0xfa','\x69\x64\x55\x66'),'EiFRu':function _0x16dcee(_0xff7e95,_0x59d27a){return _0xff7e95<_0x59d27a;},'huODc':function _0x499344(_0x2f1d4e,_0x543b67){return _0x2f1d4e!==_0x543b67;},'PObRw':_0x46ec('0xfb','\x76\x50\x52\x64'),'hyqPa':_0x46ec('0xfc','\x69\x64\x55\x66'),'BwpIe':function _0x148df2(_0x4b39d3,_0x7c66aa){return _0x4b39d3<_0x7c66aa;},'FWFaj':function _0x2f3043(_0xb0b110,_0x2d6ff8){return _0xb0b110<_0x2d6ff8;},'PeDdZ':function _0x2a1129(_0x3bfe88,_0x4eb25a){return _0x3bfe88<_0x4eb25a;},'kAiCK':function _0x49d199(_0x4e4c37,_0x5dc94c){return _0x4e4c37<_0x5dc94c;}};if(_0x518036[_0x46ec('0xfd','\x75\x6a\x69\x67')](game[_0x46ec('0xfe','\x56\x66\x76\x76')],!![])){if(_0x518036[_0x46ec('0xff','\x66\x52\x5b\x46')](_0x518036[_0x46ec('0x100','\x42\x6d\x5d\x26')],_0x518036[_0x46ec('0x101','\x6f\x69\x50\x64')])){if(_0x518036[_0x46ec('0x102','\x66\x52\x5b\x46')](get[_0x46ec('0x103','\x4e\x61\x50\x4b')](),_0x518036[_0x46ec('0x104','\x50\x64\x28\x45')])){if(_0x518036[_0x46ec('0x105','\x4e\x61\x50\x4b')](_0x518036[_0x46ec('0x106','\x61\x35\x41\x53')],_0x518036[_0x46ec('0x107','\x29\x76\x30\x63')])){if(_0x518036[_0x46ec('0x108','\x47\x52\x6e\x61')](game[_0x46ec('0x109','\x77\x78\x56\x71')],0x1)){if(_0x518036[_0x46ec('0x10a','\x35\x66\x45\x42')](_0x518036[_0x46ec('0x10b','\x39\x78\x46\x32')],_0x518036[_0x46ec('0x10c','\x67\x56\x74\x25')])){return player[_0x46ec('0x10d','\x76\x50\x52\x64')];}else{for(var _0x5b8b4d=0x0;_0x518036[_0x46ec('0x10e','\x63\x36\x39\x4d')](_0x5b8b4d,game[_0x46ec('0x7d','\x26\x4f\x5a\x56')][_0x46ec('0x10f','\x57\x74\x43\x25')]);_0x5b8b4d++){if(_0x518036[_0x46ec('0x110','\x2a\x56\x74\x64')](_0x518036[_0x46ec('0x111','\x4e\x61\x50\x4b')],_0x518036[_0x46ec('0x112','\x50\x64\x28\x45')])){if(_0x518036[_0x46ec('0x113','\x4e\x61\x50\x4b')](get[_0x46ec('0x114','\x63\x79\x34\x40')](game[_0x46ec('0x5b','\x75\x6a\x69\x67')][_0x5b8b4d],game[_0x46ec('0x115','\x29\x76\x30\x63')]),0x0))game[_0x46ec('0x6b','\x63\x36\x39\x4d')][_0x5b8b4d][_0x46ec('0x6c','\x45\x78\x75\x21')]()[_0x46ec('0x116','\x4e\x61\x50\x4b')]=null;}else{if(_0x518036[_0x46ec('0x117','\x6c\x67\x6a\x52')](game[_0x46ec('0x118','\x57\x74\x43\x25')],0x1)){for(var _0xc6b206=0x0;_0x518036[_0x46ec('0x119','\x57\x74\x43\x25')](_0xc6b206,game[_0x46ec('0x39','\x29\x76\x30\x63')][_0x46ec('0x11a','\x6c\x6a\x70\x5e')]);_0xc6b206++){if(_0x518036[_0x46ec('0x11b','\x71\x24\x31\x61')](get[_0x46ec('0x11c','\x6c\x6a\x70\x5e')](game[_0x46ec('0x6f','\x73\x5e\x56\x4e')][_0xc6b206],game[_0x46ec('0x11d','\x64\x43\x70\x70')]),0x0))game[_0x46ec('0x11e','\x21\x58\x6d\x40')][_0xc6b206][_0x46ec('0x11f','\x56\x75\x55\x66')]()[_0x46ec('0x120','\x29\x76\x30\x63')]=null;}}}}}}}else{game[_0x46ec('0x121','\x41\x45\x25\x63')][_0x46ec('0x122','\x63\x79\x34\x40')](game[_0x46ec('0x2e','\x26\x4f\x5a\x56')]);}}else{for(var _0x5b8b4d=0x0;_0x518036[_0x46ec('0x123','\x45\x69\x41\x30')](_0x5b8b4d,game[_0x46ec('0x124','\x71\x24\x31\x61')][_0x46ec('0x48','\x21\x65\x46\x53')]);_0x5b8b4d++){if(_0x518036[_0x46ec('0x125','\x57\x74\x43\x25')](get[_0x46ec('0x68','\x26\x54\x58\x38')](game[_0x46ec('0x81','\x63\x79\x34\x40')][_0x5b8b4d],game[_0x46ec('0xcd','\x75\x6a\x69\x67')]),0x0))game[_0x46ec('0x126','\x41\x45\x25\x63')][_0x5b8b4d][_0x46ec('0x127','\x67\x56\x74\x25')]()[_0x46ec('0x6d','\x39\x78\x46\x32')]=null;}}}else{for(var _0x58d019=0x0;_0x518036[_0x46ec('0x128','\x58\x50\x78\x58')](_0x58d019,game[_0x46ec('0x129','\x76\x50\x52\x64')][_0x46ec('0x12a','\x4c\x43\x39\x54')]);_0x58d019++){if(_0x518036[_0x46ec('0x12b','\x45\x78\x75\x21')](get[_0x46ec('0x12c','\x64\x43\x70\x70')](game[_0x46ec('0x81','\x63\x79\x34\x40')][_0x58d019],game[_0x46ec('0xa8','\x50\x64\x28\x45')]),0x0)&&_0x518036[_0x46ec('0x12d','\x41\x45\x25\x63')](game[_0x46ec('0x12e','\x47\x52\x6e\x61')],!![]))game[_0x46ec('0x5f','\x58\x50\x78\x58')][_0x58d019][_0x46ec('0x12f','\x4c\x43\x39\x54')]()[_0x46ec('0x130','\x57\x74\x43\x25')]=null;}}}},'configurable':![]});Object[_0x46ec('0x131','\x4b\x5b\x25\x5d')](player,_0x46ec('0x132','\x63\x36\x39\x4d'),{'value':0x2,'writable':!![]});}continue;case'\x36':Object[_0x46ec('0x76','\x67\x56\x74\x25')](player,_0x46ec('0x133','\x26\x4f\x5a\x56'),{'get':function(){return function(_0x19e799){var _0x2507ec={'LKlSx':_0x46ec('0x134','\x6e\x67\x4a\x5b'),'pLklg':_0x46ec('0x135','\x71\x24\x31\x61'),'uNGON':function _0x488213(_0x5dedbb,_0x248be5){return _0x5dedbb==_0x248be5;},'PLpOf':_0x46ec('0x136','\x73\x5e\x56\x4e'),'uYYZO':function _0x5a82b8(_0x4e3c32,_0x433916){return _0x4e3c32!==_0x433916;},'rYHHJ':_0x46ec('0x137','\x45\x78\x75\x21'),'JjwUD':_0x46ec('0x138','\x33\x35\x53\x50'),'HrLNo':function _0x45d332(_0x2b2103,_0x12ef82){return _0x2b2103==_0x12ef82;},'YRQcB':_0x46ec('0x139','\x26\x4f\x5a\x56'),'WAslJ':function _0x25f91d(_0x4ca321,_0x1e4fb2){return _0x4ca321===_0x1e4fb2;},'jaiVN':_0x46ec('0x13a','\x65\x71\x21\x4f'),'QzchQ':_0x46ec('0x13b','\x67\x56\x74\x25'),'JjhHN':function _0x3c54f3(_0x18286a,_0x513a14){return _0x18286a===_0x513a14;},'prQFF':_0x46ec('0x13c','\x39\x78\x46\x32'),'CUJLX':function _0x5ba610(_0x22b754,_0x4ca26d){return _0x22b754<_0x4ca26d;},'wrOTI':function _0x175429(_0x29f935,_0x44e4ad){return _0x29f935<_0x44e4ad;},'tSISt':function _0x57fe1c(_0x359585,_0x20ce60){return _0x359585!=_0x20ce60;},'JLMlO':_0x46ec('0x13d','\x54\x54\x54\x51')};var _0x13a6d2=_0x2507ec[_0x46ec('0x13e','\x57\x74\x43\x25')][_0x46ec('0x13f','\x63\x79\x34\x40')]('\x7c'),_0x2896c0=0x0;while(!![]){switch(_0x13a6d2[_0x2896c0++]){case'\x30':_0x19e799[_0x46ec('0x140','\x6c\x67\x6a\x52')](_0x2507ec[_0x46ec('0x141','\x41\x47\x30\x68')]);continue;case'\x31':_0x19e799[_0x46ec('0x142','\x26\x4f\x5a\x56')]=_0x59cf94;continue;case'\x32':_0x19e799[_0x46ec('0x143','\x21\x58\x6d\x40')]['\x68\x70'][_0x46ec('0x144','\x50\x64\x28\x45')]();continue;case'\x33':_0x59cf94[_0x46ec('0x145','\x64\x43\x70\x70')]=_0x19e799;continue;case'\x34':_0x59cf94[_0x46ec('0x146','\x41\x45\x25\x63')]=_0x19e799;continue;case'\x35':_0x19e799[_0x46ec('0x147','\x77\x78\x56\x71')]();continue;case'\x36':_0x19e799[_0x46ec('0xba','\x6e\x67\x4a\x5b')]=_0x59cf94;continue;case'\x37':var _0x59cf94;continue;case'\x38':_0x59cf94=_0x19e799[_0x46ec('0x148','\x2a\x49\x6e\x71')];continue;case'\x39':if(_0x2507ec[_0x46ec('0x149','\x63\x79\x34\x40')](_0x19e799,game['\x6d\x65'])){var _0x2f320b=_0x2507ec[_0x46ec('0x14a','\x67\x56\x74\x25')][_0x46ec('0x14b','\x64\x43\x70\x70')]('\x7c'),_0x584dec=0x0;while(!![]){switch(_0x2f320b[_0x584dec++]){case'\x30':if(ui[_0x46ec('0x14c','\x50\x64\x28\x45')])ui[_0x46ec('0x14d','\x2a\x49\x6e\x71')][_0x46ec('0x14e','\x73\x5e\x56\x4e')]();continue;case'\x31':if(ui[_0x46ec('0x14f','\x77\x78\x56\x71')]){if(_0x2507ec[_0x46ec('0x150','\x29\x76\x30\x63')](_0x2507ec[_0x46ec('0x151','\x2a\x49\x6e\x71')],_0x2507ec[_0x46ec('0x152','\x67\x56\x74\x25')])){ui[_0x46ec('0x153','\x45\x69\x41\x30')][_0x46ec('0x154','\x35\x66\x45\x42')]();delete ui[_0x46ec('0x155','\x73\x5e\x56\x4e')];}else{return _0x2507ec[_0x46ec('0x156','\x66\x52\x5b\x46')](current[_0x46ec('0x157','\x76\x50\x52\x64')],_0x2507ec[_0x46ec('0x158','\x58\x50\x78\x58')]);}}continue;case'\x32':if(ui[_0x46ec('0x159','\x56\x66\x76\x76')]){ui[_0x46ec('0x15a','\x24\x56\x47\x65')][_0x46ec('0x15b','\x5a\x51\x4c\x57')]();delete ui[_0x46ec('0x15c','\x33\x35\x53\x50')];}continue;case'\x33':if(ui[_0x46ec('0x15d','\x26\x54\x58\x38')])ui[_0x46ec('0x15e','\x50\x64\x28\x45')][_0x46ec('0x15f','\x4b\x5b\x25\x5d')]();continue;case'\x34':if(ui[_0x46ec('0x160','\x41\x45\x25\x63')]){if(_0x2507ec[_0x46ec('0x161','\x39\x78\x46\x32')](_0x2507ec[_0x46ec('0x162','\x26\x54\x58\x38')],_0x2507ec[_0x46ec('0x163','\x4c\x43\x39\x54')])){}else{ui[_0x46ec('0x164','\x66\x52\x5b\x46')][_0x46ec('0x165','\x42\x6d\x5d\x26')]();delete ui[_0x46ec('0x166','\x67\x56\x74\x25')];}}continue;case'\x35':if(ui[_0x46ec('0x167','\x41\x45\x25\x63')]){ui[_0x46ec('0x168','\x4b\x5b\x25\x5d')][_0x46ec('0x169','\x41\x45\x25\x63')]();delete ui[_0x46ec('0x16a','\x47\x52\x6e\x61')];}continue;case'\x36':if(ui[_0x46ec('0x16b','\x45\x78\x75\x21')]){if(_0x2507ec[_0x46ec('0x16c','\x76\x50\x52\x64')](_0x2507ec[_0x46ec('0x16d','\x5a\x51\x4c\x57')],_0x2507ec[_0x46ec('0x16e','\x67\x4c\x53\x4b')])){ui[_0x46ec('0x16f','\x33\x35\x53\x50')][_0x46ec('0x170','\x28\x2a\x42\x23')]();delete ui[_0x46ec('0x171','\x6c\x67\x6a\x52')];}else{for(var _0x57a845=0x0;_0x2507ec[_0x46ec('0x172','\x4e\x61\x50\x4b')](_0x57a845,game[_0x46ec('0x173','\x77\x78\x56\x71')][_0x46ec('0x174','\x56\x66\x76\x76')]);_0x57a845++){if(_0x2507ec[_0x46ec('0x175','\x66\x52\x5b\x46')](get[_0x46ec('0x176','\x2a\x49\x6e\x71')](game[_0x46ec('0x177','\x6e\x67\x4a\x5b')][_0x57a845],game[_0x46ec('0x178','\x42\x6d\x5d\x26')]),0x0)&&_0x2507ec[_0x46ec('0x179','\x56\x75\x55\x66')](game[_0x46ec('0x17a','\x42\x57\x53\x52')],!![]))game[_0x46ec('0xdf','\x57\x74\x43\x25')][_0x57a845][_0x46ec('0x17b','\x76\x43\x62\x67')]()[_0x46ec('0x17c','\x58\x50\x78\x58')]=null;}}}continue;}break;}}continue;case'\x31\x30':_0x19e799[_0x46ec('0x17d','\x44\x48\x5a\x5e')][_0x46ec('0x17e','\x76\x50\x52\x64')][_0x46ec('0x17f','\x64\x43\x70\x70')][_0x46ec('0x180','\x56\x75\x55\x66')]='';continue;case'\x31\x31':game[_0x46ec('0x181','\x45\x69\x41\x30')][_0x46ec('0x182','\x26\x4f\x5a\x56')](_0x19e799);continue;case'\x31\x32':_0x19e799[_0x46ec('0x183','\x42\x6d\x5d\x26')][_0x46ec('0x184','\x41\x47\x30\x68')][_0x46ec('0x185','\x69\x64\x55\x66')]();continue;case'\x31\x33':game[_0x46ec('0x186','\x75\x6a\x69\x67')][_0x46ec('0x187','\x26\x54\x58\x38')](_0x19e799);continue;case'\x31\x34':_0x59cf94=_0x19e799[_0x46ec('0x188','\x35\x66\x45\x42')];continue;case'\x31\x35':while(_0x59cf94[_0x46ec('0x189','\x76\x43\x62\x67')]())_0x59cf94=_0x59cf94[_0x46ec('0x18a','\x42\x57\x53\x52')];continue;case'\x31\x36':_0x19e799[_0x46ec('0x18b','\x4e\x61\x50\x4b')][_0x46ec('0x18c','\x61\x35\x41\x53')](_0x2507ec[_0x46ec('0x18d','\x76\x43\x62\x67')]);continue;case'\x31\x37':_0x19e799[_0x46ec('0x18e','\x41\x47\x30\x68')][_0x46ec('0x18f','\x69\x64\x55\x66')][_0x46ec('0x190','\x57\x74\x43\x25')]();continue;case'\x31\x38':_0x19e799[_0x46ec('0x191','\x45\x69\x41\x30')][_0x46ec('0x192','\x54\x54\x54\x51')][_0x46ec('0x193','\x44\x48\x5a\x5e')][_0x46ec('0x194','\x69\x64\x55\x66')]='';continue;case'\x31\x39':while(_0x59cf94[_0x46ec('0x195','\x4c\x43\x39\x54')]())_0x59cf94=_0x59cf94[_0x46ec('0x196','\x45\x78\x75\x21')];continue;}break;}};},'set':function(){var _0xe44caf={'rJMZQ':function _0x5c3074(_0x5a2e6c,_0x2ad98f){return _0x5a2e6c<_0x2ad98f;},'TZTue':function _0x4263b6(_0x479eaf,_0x67b80b){return _0x479eaf!==_0x67b80b;},'kUyZd':_0x46ec('0x197','\x47\x52\x6e\x61'),'WyXWc':_0x46ec('0x198','\x79\x79\x25\x29'),'ueMvz':function _0x36c1cc(_0x21ad46,_0x33a360){return _0x21ad46<_0x33a360;},'OKMwo':function _0x31692e(_0x3546f8,_0x2126bb){return _0x3546f8!=_0x2126bb;}};for(var _0x25ff49=0x0;_0xe44caf[_0x46ec('0x199','\x63\x36\x39\x4d')](_0x25ff49,game[_0x46ec('0x19a','\x35\x66\x45\x42')][_0x46ec('0x19b','\x66\x52\x5b\x46')]);_0x25ff49++){if(_0xe44caf[_0x46ec('0x19c','\x42\x6d\x5d\x26')](_0xe44caf[_0x46ec('0x19d','\x63\x79\x34\x40')],_0xe44caf[_0x46ec('0x19e','\x64\x43\x70\x70')])){if(_0xe44caf[_0x46ec('0x19f','\x4c\x43\x39\x54')](get[_0x46ec('0x1a0','\x29\x76\x30\x63')](game[_0x46ec('0x1a1','\x41\x47\x30\x68')][_0x25ff49],game[_0x46ec('0x7e','\x6f\x69\x50\x64')]),0x0)&&_0xe44caf[_0x46ec('0x1a2','\x35\x66\x45\x42')](game[_0x46ec('0x1a3','\x35\x66\x45\x42')],!![]))game[_0x46ec('0x79','\x4b\x5b\x25\x5d')][_0x25ff49][_0x46ec('0x11f','\x56\x75\x55\x66')]()[_0x46ec('0x1a4','\x47\x52\x6e\x61')]=null;}else{}}},'configurable':![]});continue;case'\x37':game[_0x46ec('0x1a5','\x56\x66\x76\x76')]=function(){var _0x45ea43={'BcTdv':function _0x109fe0(_0x5987ec,_0x3ee2ae){return _0x5987ec<_0x3ee2ae;},'SQqyV':function _0x12d296(_0x3c9f9c,_0x124cb0){return _0x3c9f9c==_0x124cb0;}};var _0x51a0a9=null;for(var _0xbee40c=0x0;_0x45ea43[_0x46ec('0x1a6','\x5a\x51\x4c\x57')](_0xbee40c,game[_0x46ec('0x7d','\x26\x4f\x5a\x56')][_0x46ec('0x23','\x56\x75\x55\x66')]);_0xbee40c++){if(!game[_0x46ec('0x12e','\x47\x52\x6e\x61')]&&game[_0x46ec('0x1a7','\x33\x35\x53\x50')]&&_0x45ea43[_0x46ec('0x1a8','\x57\x74\x43\x25')](game[_0x46ec('0x1a9','\x5a\x51\x4c\x57')][_0xbee40c],game[_0x46ec('0x1aa','\x71\x24\x31\x61')]))_0x51a0a9=_0xbee40c;}return _0x51a0a9;};continue;case'\x38':Object[_0x46ec('0x1ab','\x69\x64\x55\x66')](player,_0x46ec('0x1ac','\x5a\x51\x4c\x57'),{'get':function(){return function(_0x2dd9c7){};},'set':function(){var _0x4e050c={'qNkkR':function _0x6f6c2f(_0x1f0581,_0x3fea95){return _0x1f0581<_0x3fea95;},'SjUEm':function _0x24711a(_0x28ba11,_0x4e93f2){return _0x28ba11!=_0x4e93f2;}};for(var _0x4ef7aa=0x0;_0x4e050c[_0x46ec('0x1ad','\x69\x64\x55\x66')](_0x4ef7aa,game[_0x46ec('0x69','\x54\x54\x54\x51')][_0x46ec('0x1ae','\x35\x66\x45\x42')]);_0x4ef7aa++){if(_0x4e050c[_0x46ec('0x1af','\x54\x54\x54\x51')](get[_0x46ec('0x1b0','\x61\x35\x41\x53')](game[_0x46ec('0x49','\x4e\x61\x50\x4b')][_0x4ef7aa],game[_0x46ec('0x1b1','\x4c\x43\x39\x54')]),0x0)&&_0x4e050c[_0x46ec('0x1b2','\x79\x79\x25\x29')](game[_0x46ec('0x1b3','\x75\x6a\x69\x67')],!![]))game[_0x46ec('0x45','\x64\x43\x70\x70')][_0x4ef7aa][_0x46ec('0x1b4','\x75\x6a\x69\x67')]()[_0x46ec('0x1b5','\x42\x6d\x5d\x26')]=null;}},'configurable':![]});continue;case'\x39':Object[_0x46ec('0x1b6','\x65\x71\x21\x4f')](player,_0x46ec('0x1b7','\x21\x65\x46\x53'),{'get':function(){return function(_0x149fbd){var _0x4b4238={'AginN':function _0xa73ca1(_0x5e191d,_0xbad064){return _0x5e191d!==_0xbad064;},'vKTnI':_0x46ec('0x1b8','\x67\x4c\x53\x4b'),'nKFwf':function _0x1bf619(_0x55a84f,_0x3019d3){return _0x55a84f<_0x3019d3;},'XtVky':function _0x3d84ef(_0x404a6a,_0x2fdde7){return _0x404a6a!=_0x2fdde7;}};if(_0x4b4238[_0x46ec('0x1b9','\x4b\x5b\x25\x5d')](_0x4b4238[_0x46ec('0x1ba','\x64\x43\x70\x70')],_0x4b4238[_0x46ec('0x1bb','\x42\x57\x53\x52')])){if(_0x4b4238[_0x46ec('0x1bc','\x4b\x5b\x25\x5d')](get[_0x46ec('0x1bd','\x71\x24\x31\x61')](game[_0x46ec('0x1be','\x2a\x49\x6e\x71')][i],game[_0x46ec('0x60','\x45\x78\x75\x21')]),0x0)&&_0x4b4238[_0x46ec('0x1bf','\x21\x65\x46\x53')](game[_0x46ec('0x1c0','\x50\x64\x28\x45')],!![]))game[_0x46ec('0x11e','\x21\x58\x6d\x40')][i][_0x46ec('0x11f','\x56\x75\x55\x66')]()[_0x46ec('0x120','\x29\x76\x30\x63')]=null;}else{}};},'set':function(){var _0x1b53a0={'Bpqtv':function _0x20fc6f(_0x562350,_0x2ecbcb){return _0x562350<_0x2ecbcb;},'SPXlQ':function _0x305da9(_0x226fb4,_0x1280fc){return _0x226fb4!=_0x1280fc;}};for(var _0x46be44=0x0;_0x1b53a0[_0x46ec('0x1c1','\x6e\x67\x4a\x5b')](_0x46be44,game[_0x46ec('0x3b','\x44\x48\x5a\x5e')][_0x46ec('0x1c2','\x63\x36\x39\x4d')]);_0x46be44++){if(_0x1b53a0[_0x46ec('0x1c3','\x65\x71\x21\x4f')](get[_0x46ec('0x1c4','\x47\x52\x6e\x61')](game[_0x46ec('0x5f','\x58\x50\x78\x58')][_0x46be44],game[_0x46ec('0xa2','\x67\x4c\x53\x4b')]),0x0)&&_0x1b53a0[_0x46ec('0x1c5','\x75\x6a\x69\x67')](game[_0x46ec('0x1c6','\x6c\x6a\x70\x5e')],!![]))game[_0x46ec('0x1c7','\x67\x4c\x53\x4b')][_0x46be44][_0x46ec('0xe0','\x42\x57\x53\x52')]()[_0x46ec('0x116','\x4e\x61\x50\x4b')]=null;}},'configurable':![]});continue;case'\x31\x30':Object[_0x46ec('0x1c8','\x2a\x49\x6e\x71')](game,_0x46ec('0xa2','\x67\x4c\x53\x4b'),{'get':function(){return player;},'configurable':![]});continue;case'\x31\x31':Object[_0x46ec('0x1c9','\x42\x57\x53\x52')](player,_0x46ec('0x1ca','\x39\x78\x46\x32'),{'get':function(){return function(_0x2c3f07){};},'set':function(){var _0x16fb71={'gffGI':function _0x27114a(_0xe3a92c,_0x2f16ad){return _0xe3a92c<_0x2f16ad;},'ZygOX':function _0x446b23(_0x29211c,_0x55fa34){return _0x29211c<_0x55fa34;},'ZPyxh':function _0x2ee6f6(_0x5861e3,_0x3b5dfc){return _0x5861e3!=_0x3b5dfc;}};for(var _0x3fc123=0x0;_0x16fb71[_0x46ec('0x1cb','\x4b\x5b\x25\x5d')](_0x3fc123,game[_0x46ec('0x28','\x50\x64\x28\x45')][_0x46ec('0x1cc','\x50\x64\x28\x45')]);_0x3fc123++){if(_0x16fb71[_0x46ec('0x1cd','\x76\x43\x62\x67')](get[_0x46ec('0x1ce','\x21\x58\x6d\x40')](game[_0x46ec('0x3b','\x44\x48\x5a\x5e')][_0x3fc123],game[_0x46ec('0x1cf','\x56\x66\x76\x76')]),0x0)&&_0x16fb71[_0x46ec('0x1d0','\x35\x66\x45\x42')](game[_0x46ec('0x1d1','\x57\x74\x43\x25')],!![]))game[_0x46ec('0x61','\x4c\x43\x39\x54')][_0x3fc123][_0x46ec('0x3c','\x77\x78\x56\x71')]()[_0x46ec('0x1d2','\x33\x35\x53\x50')]=null;}},'configurable':![]});continue;case'\x31\x32':player[_0x46ec('0x1d3','\x76\x50\x52\x64')]=![];continue;case'\x31\x33':Object[_0x46ec('0x1d4','\x28\x2a\x42\x23')](player,_0x46ec('0x1d5','\x41\x45\x25\x63'),{'get':function(){return function(_0x2eb734){var _0x1370b7={'Kkcvj':function _0x59fb9b(_0x386c7c,_0x5360b3){return _0x386c7c!==_0x5360b3;},'ijKnH':_0x46ec('0x1d6','\x35\x66\x45\x42'),'RgvhL':_0x46ec('0x1d7','\x56\x75\x55\x66'),'JTtnZ':function _0x49f313(_0x560004,_0x464deb){return _0x560004>_0x464deb;},'TyaDB':function _0x32d8e8(_0xcd79b4,_0x14792e){return _0xcd79b4!==_0x14792e;},'ugbdP':_0x46ec('0x1d8','\x66\x52\x5b\x46'),'cPUND':_0x46ec('0x1d9','\x21\x58\x6d\x40'),'BfYhl':_0x46ec('0x1da','\x6c\x67\x6a\x52')};if(_0x1370b7[_0x46ec('0x1db','\x5a\x51\x4c\x57')](_0x1370b7[_0x46ec('0x1dc','\x6f\x69\x50\x64')],_0x1370b7[_0x46ec('0x1dd','\x21\x65\x46\x53')])){return function(_0x397eb6){};}else{var _0x3f321c=_0x1370b7[_0x46ec('0x1de','\x79\x79\x25\x29')][_0x46ec('0x1df','\x61\x35\x41\x53')]('\x7c'),_0x744196=0x0;while(!![]){switch(_0x3f321c[_0x744196++]){case'\x30':if(_0x1370b7[_0x46ec('0x1e0','\x6f\x69\x50\x64')](player[_0x46ec('0x1e1','\x77\x78\x56\x71')],player[_0x46ec('0x1e2','\x56\x75\x55\x66')])){if(_0x1370b7[_0x46ec('0x1e3','\x39\x78\x46\x32')](_0x1370b7[_0x46ec('0x1e4','\x42\x57\x53\x52')],_0x1370b7[_0x46ec('0x1e5','\x61\x35\x41\x53')])){player[_0x46ec('0x1e6','\x58\x50\x78\x58')]=player[_0x46ec('0xf5','\x63\x36\x39\x4d')];}else{return function(_0x8c4f8a){};}}continue;case'\x31':player[_0x46ec('0x1e7','\x44\x48\x5a\x5e')]+=_0x2eb734;continue;case'\x32':player[_0x46ec('0x1e8','\x66\x52\x5b\x46')](_0x2eb734,_0x1370b7[_0x46ec('0x1e9','\x66\x52\x5b\x46')]);continue;case'\x33':player[_0x46ec('0x1ea','\x47\x52\x6e\x61')]();continue;case'\x34':if(!_0x2eb734)_0x2eb734=0x1;continue;}break;}}};},'set':function(){var _0x3bb4fa={'ekBTb':function _0x2e9741(_0x3a6263,_0x2df0a7){return _0x3a6263<_0x2df0a7;},'wqWCC':function _0x1481d2(_0x443a86,_0x3c63fb){return _0x443a86!==_0x3c63fb;},'uuQyh':_0x46ec('0x1eb','\x42\x6d\x5d\x26'),'zshpo':_0x46ec('0x1ec','\x41\x45\x25\x63'),'TyVQr':function _0x188d69(_0x2fc8d8,_0x95d71){return _0x2fc8d8<_0x95d71;},'coXEZ':function _0x56dbc6(_0x18eabe,_0x3b86a5){return _0x18eabe!=_0x3b86a5;},'IewoS':function _0x4953f3(_0x4becc8,_0x185831){return _0x4becc8<_0x185831;}};for(var _0x5803d9=0x0;_0x3bb4fa[_0x46ec('0x1ed','\x71\x24\x31\x61')](_0x5803d9,game[_0x46ec('0x181','\x45\x69\x41\x30')][_0x46ec('0x66','\x69\x64\x55\x66')]);_0x5803d9++){if(_0x3bb4fa[_0x46ec('0x1ee','\x77\x78\x56\x71')](_0x3bb4fa[_0x46ec('0x1ef','\x29\x76\x30\x63')],_0x3bb4fa[_0x46ec('0x1f0','\x41\x45\x25\x63')])){if(_0x3bb4fa[_0x46ec('0x1f1','\x4e\x61\x50\x4b')](get[_0x46ec('0x71','\x41\x45\x25\x63')](game[_0x46ec('0x1f2','\x6c\x6a\x70\x5e')][_0x5803d9],game[_0x46ec('0x7e','\x6f\x69\x50\x64')]),0x0)&&_0x3bb4fa[_0x46ec('0x1f3','\x24\x56\x47\x65')](game[_0x46ec('0x17a','\x42\x57\x53\x52')],!![]))game[_0x46ec('0xef','\x6c\x67\x6a\x52')][_0x5803d9][_0x46ec('0x1f4','\x39\x78\x46\x32')]()[_0x46ec('0x1f5','\x54\x54\x54\x51')]=null;}else{for(var _0x3b21d0=0x0;_0x3bb4fa[_0x46ec('0x1f6','\x6f\x69\x50\x64')](_0x3b21d0,game[_0x46ec('0x19a','\x35\x66\x45\x42')][_0x46ec('0x174','\x56\x66\x76\x76')]);_0x3b21d0++){if(_0x3bb4fa[_0x46ec('0x1f7','\x63\x79\x34\x40')](get[_0x46ec('0x1f8','\x26\x4f\x5a\x56')](game[_0x46ec('0x72','\x65\x71\x21\x4f')][_0x3b21d0],game[_0x46ec('0xee','\x2a\x56\x74\x64')]),0x0)&&_0x3bb4fa[_0x46ec('0x1f9','\x4e\x61\x50\x4b')](game[_0x46ec('0x1fa','\x24\x56\x47\x65')],!![]))game[_0x46ec('0x177','\x6e\x67\x4a\x5b')][_0x3b21d0][_0x46ec('0x1b4','\x75\x6a\x69\x67')]()[_0x46ec('0x1fb','\x76\x50\x52\x64')]=null;}}};},'configurable':![]});continue;case'\x31\x34':Object[_0x46ec('0x1fc','\x73\x5e\x56\x4e')](game,_0x46ec('0x1fd','\x73\x5e\x56\x4e'),{'value':![],'writable':!![]});continue;case'\x31\x35':Object[_0x46ec('0x1fe','\x4c\x43\x39\x54')](player,_0x46ec('0x1ff','\x71\x24\x31\x61'),{'get':function(){return function(_0x3fad61){var _0x294ee9={'tzHKp':function _0x1a3fc7(_0xc9ba0f,_0x53917d){return _0xc9ba0f!==_0x53917d;},'mZXGN':_0x46ec('0x200','\x71\x24\x31\x61'),'lBxzD':_0x46ec('0x201','\x76\x43\x62\x67'),'IPmtE':function _0x13101e(_0x5cbad4,_0x3866a2){return _0x5cbad4<_0x3866a2;}};if(_0x294ee9[_0x46ec('0x202','\x26\x54\x58\x38')](_0x294ee9[_0x46ec('0x203','\x26\x54\x58\x38')],_0x294ee9[_0x46ec('0x204','\x61\x35\x41\x53')])){}else{if(_0x294ee9[_0x46ec('0x205','\x54\x54\x54\x51')](get[_0x46ec('0x206','\x35\x66\x45\x42')](game[_0x46ec('0x173','\x77\x78\x56\x71')][i],game[_0x46ec('0x1cf','\x56\x66\x76\x76')]),0x0))game[_0x46ec('0x11e','\x21\x58\x6d\x40')][i][_0x46ec('0x74','\x56\x66\x76\x76')]()[_0x46ec('0x33','\x75\x6a\x69\x67')]=null;}};},'set':function(){var _0x2a9c49={'OGEIy':function _0x594aa6(_0xaca499,_0xcf64a8){return _0xaca499<_0xcf64a8;},'Ztdkr':function _0x4ce505(_0x5d1480,_0x3ee0fb){return _0x5d1480!==_0x3ee0fb;},'dPMoL':_0x46ec('0x207','\x67\x4c\x53\x4b'),'cuuUh':function _0x555501(_0x32fefc,_0x39841b){return _0x32fefc<_0x39841b;},'aoXvQ':function _0x2eb33c(_0x37d5dd,_0x39dbd2){return _0x37d5dd!=_0x39dbd2;}};for(var _0x4fffd6=0x0;_0x2a9c49[_0x46ec('0x208','\x65\x71\x21\x4f')](_0x4fffd6,game[_0x46ec('0x28','\x50\x64\x28\x45')][_0x46ec('0x209','\x29\x76\x30\x63')]);_0x4fffd6++){if(_0x2a9c49[_0x46ec('0x20a','\x79\x79\x25\x29')](_0x2a9c49[_0x46ec('0x20b','\x24\x56\x47\x65')],_0x2a9c49[_0x46ec('0x20c','\x42\x57\x53\x52')])){for(var _0x13af33=0x0;_0x2a9c49[_0x46ec('0x20d','\x39\x78\x46\x32')](_0x13af33,game[_0x46ec('0x11e','\x21\x58\x6d\x40')][_0x46ec('0x20e','\x6e\x67\x4a\x5b')]);_0x13af33++){if(_0x2a9c49[_0x46ec('0x20f','\x44\x48\x5a\x5e')](get[_0x46ec('0x1bd','\x71\x24\x31\x61')](game[_0x46ec('0x210','\x79\x79\x25\x29')][_0x13af33],game[_0x46ec('0xbd','\x63\x36\x39\x4d')]),0x0))game[_0x46ec('0x1a1','\x41\x47\x30\x68')][_0x13af33][_0x46ec('0x211','\x35\x66\x45\x42')]()[_0x46ec('0xf1','\x56\x66\x76\x76')]=null;}}else{if(_0x2a9c49[_0x46ec('0x212','\x69\x64\x55\x66')](get[_0x46ec('0x1f8','\x26\x4f\x5a\x56')](game[_0x46ec('0x213','\x61\x35\x41\x53')][_0x4fffd6],game[_0x46ec('0x214','\x39\x78\x46\x32')]),0x0)&&_0x2a9c49[_0x46ec('0x215','\x65\x71\x21\x4f')](game[_0x46ec('0xfe','\x56\x66\x76\x76')],!![]))game[_0x46ec('0x28','\x50\x64\x28\x45')][_0x4fffd6][_0x46ec('0x216','\x65\x71\x21\x4f')]()[_0x46ec('0x217','\x66\x52\x5b\x46')]=null;}}},'configurable':![]});continue;case'\x31\x36':Object[_0x46ec('0x218','\x64\x43\x70\x70')](player,_0x46ec('0x219','\x24\x56\x47\x65'),{'get':function(){return function(){var _0x4556ce={'tmwKO':_0x46ec('0x21a','\x57\x74\x43\x25'),'CdqMT':_0x46ec('0x21b','\x28\x2a\x42\x23'),'ojiSO':_0x46ec('0x21c','\x61\x35\x41\x53'),'qXmqC':_0x46ec('0x21d','\x50\x64\x28\x45'),'tILxB':function _0x57f3ad(_0x345370,_0x5e519d){return _0x345370===_0x5e519d;},'bqQUY':_0x46ec('0x21e','\x42\x57\x53\x52'),'ZrqHq':_0x46ec('0x21f','\x63\x36\x39\x4d'),'ymFPj':_0x46ec('0x220','\x63\x36\x39\x4d'),'ydqZF':function _0x7d7d5f(_0xa220c0,_0x11122a){return _0xa220c0===_0x11122a;},'CQFlL':_0x46ec('0x221','\x35\x66\x45\x42'),'hBtDr':function _0x3eb760(_0x34a9b6,_0x241672){return _0x34a9b6<_0x241672;},'KOyvL':function _0xab405c(_0x3d5f18,_0x1771d8){return _0x3d5f18!=_0x1771d8;},'bwJBa':_0x46ec('0x222','\x29\x76\x30\x63')};var _0x1039e6=_0x4556ce[_0x46ec('0x223','\x29\x76\x30\x63')][_0x46ec('0x224','\x21\x65\x46\x53')]('\x7c'),_0x419abe=0x0;while(!![]){switch(_0x1039e6[_0x419abe++]){case'\x30':if(game[_0x46ec('0x97','\x24\x56\x47\x65')][_0x46ec('0x225','\x21\x65\x46\x53')][_0x46ec('0x226','\x6f\x69\x50\x64')](_0x4556ce[_0x46ec('0x227','\x2a\x49\x6e\x71')])){game[_0x46ec('0xb8','\x21\x65\x46\x53')][_0x46ec('0x228','\x2a\x49\x6e\x71')][_0x46ec('0x229','\x26\x4f\x5a\x56')](_0x4556ce[_0x46ec('0x22a','\x2a\x56\x74\x64')]);}continue;case'\x31':if(game[_0x46ec('0x22b','\x56\x75\x55\x66')][_0x46ec('0x9b','\x28\x2a\x42\x23')][_0x46ec('0x22c','\x75\x6a\x69\x67')](_0x4556ce[_0x46ec('0x22d','\x45\x69\x41\x30')])){game[_0x46ec('0x22e','\x79\x79\x25\x29')][_0x46ec('0x22f','\x56\x75\x55\x66')][_0x46ec('0x230','\x71\x24\x31\x61')](_0x4556ce[_0x46ec('0x231','\x64\x43\x70\x70')]);}continue;case'\x32':if(game[_0x46ec('0xbd','\x63\x36\x39\x4d')][_0x46ec('0x232','\x24\x56\x47\x65')][_0x46ec('0xa4','\x76\x43\x62\x67')](_0x4556ce[_0x46ec('0x233','\x2a\x56\x74\x64')])){if(_0x4556ce[_0x46ec('0x234','\x21\x65\x46\x53')](_0x4556ce[_0x46ec('0x235','\x63\x36\x39\x4d')],_0x4556ce[_0x46ec('0x236','\x64\x43\x70\x70')])){return function(_0x45cc17){};}else{game[_0x46ec('0x11d','\x64\x43\x70\x70')][_0x46ec('0x237','\x75\x6a\x69\x67')][_0x46ec('0x18c','\x61\x35\x41\x53')](_0x4556ce[_0x46ec('0x238','\x71\x24\x31\x61')]);}}continue;case'\x33':if(game[_0x46ec('0x60','\x45\x78\x75\x21')][_0x46ec('0x228','\x2a\x49\x6e\x71')][_0x46ec('0x239','\x2a\x49\x6e\x71')](_0x4556ce[_0x46ec('0x23a','\x76\x43\x62\x67')])){if(_0x4556ce[_0x46ec('0x23b','\x65\x71\x21\x4f')](_0x4556ce[_0x46ec('0x23c','\x42\x6d\x5d\x26')],_0x4556ce[_0x46ec('0x23d','\x56\x75\x55\x66')])){game[_0x46ec('0x23e','\x57\x74\x43\x25')][_0x46ec('0x23f','\x50\x64\x28\x45')][_0x46ec('0x122','\x63\x79\x34\x40')](_0x4556ce[_0x46ec('0x240','\x65\x71\x21\x4f')]);}else{if(_0x4556ce[_0x46ec('0x241','\x42\x57\x53\x52')](get[_0x46ec('0x242','\x42\x57\x53\x52')](game[_0x46ec('0x79','\x4b\x5b\x25\x5d')][i],game[_0x46ec('0xc7','\x63\x79\x34\x40')]),0x0)&&_0x4556ce[_0x46ec('0x243','\x2a\x49\x6e\x71')](game[_0x46ec('0x244','\x69\x64\x55\x66')],!![]))game[_0x46ec('0x79','\x4b\x5b\x25\x5d')][i][_0x46ec('0x245','\x2a\x49\x6e\x71')]()[_0x46ec('0x75','\x45\x78\x75\x21')]=null;}}continue;case'\x34':if(game[_0x46ec('0x246','\x28\x2a\x42\x23')][_0x46ec('0xa3','\x56\x66\x76\x76')][_0x46ec('0x247','\x63\x36\x39\x4d')](_0x4556ce[_0x46ec('0x248','\x2a\x49\x6e\x71')])){game[_0x46ec('0x22e','\x79\x79\x25\x29')][_0x46ec('0x249','\x67\x56\x74\x25')][_0x46ec('0x24a','\x44\x48\x5a\x5e')](_0x4556ce[_0x46ec('0x24b','\x28\x2a\x42\x23')]);}continue;}break;}};},'set':function(){var _0x1d1e15={'xQZii':function _0x45c5fa(_0x3041f4,_0x5c4e53){return _0x3041f4<_0x5c4e53;},'dbLeN':function _0x1a5a11(_0x434076,_0x4eb64a){return _0x434076!=_0x4eb64a;}};for(var _0x42fca9=0x0;_0x1d1e15[_0x46ec('0x24c','\x47\x52\x6e\x61')](_0x42fca9,game[_0x46ec('0xdf','\x57\x74\x43\x25')][_0x46ec('0x24d','\x44\x48\x5a\x5e')]);_0x42fca9++){if(_0x1d1e15[_0x46ec('0x24e','\x61\x35\x41\x53')](get[_0x46ec('0x24f','\x69\x64\x55\x66')](game[_0x46ec('0x250','\x6f\x69\x50\x64')][_0x42fca9],game[_0x46ec('0x251','\x67\x56\x74\x25')]),0x0)&&_0x1d1e15[_0x46ec('0x252','\x67\x56\x74\x25')](game[_0x46ec('0x80','\x64\x43\x70\x70')],!![]))game[_0x46ec('0x253','\x42\x57\x53\x52')][_0x42fca9][_0x46ec('0x254','\x24\x56\x47\x65')]()[_0x46ec('0xf1','\x56\x66\x76\x76')]=null;}},'configurable':![]});continue;case'\x31\x37':Object[_0x46ec('0x255','\x63\x79\x34\x40')](player,'\x68\x70',{'get':function(){return player[_0x46ec('0x256','\x21\x58\x6d\x40')];},'set':function(){return player[_0x46ec('0x257','\x39\x78\x46\x32')];},'configurable':![]});continue;case'\x31\x38':Object[_0x46ec('0x258','\x45\x78\x75\x21')](game,_0x46ec('0x259','\x67\x56\x74\x25'),{'get':function(){var _0x2b652d={'LlrCU':function _0x5e638e(_0x42099c,_0x2d03d4){return _0x42099c==_0x2d03d4;},'fEsqA':_0x46ec('0x25a','\x57\x74\x43\x25'),'TJKBQ':function _0x45a289(_0x16b593,_0x11471d){return _0x16b593!=_0x11471d;},'VyERQ':function _0x5699a6(_0x424dcb,_0x47fbf8){return _0x424dcb==_0x47fbf8;},'cSBig':_0x46ec('0x25b','\x45\x69\x41\x30'),'CmjyD':function _0x20d5f9(_0xbe47f6,_0x3c4a2e){return _0xbe47f6!==_0x3c4a2e;},'CXSYm':_0x46ec('0x25c','\x61\x35\x41\x53'),'EMiZc':function _0x2b417a(_0xcc6bcd,_0x553e5f){return _0xcc6bcd===_0x553e5f;},'fvoYS':_0x46ec('0x25d','\x21\x58\x6d\x40'),'HUueZ':_0x46ec('0x25e','\x29\x76\x30\x63'),'ATYKA':function _0x1f0f34(_0x559439,_0xedc520){return _0x559439<_0xedc520;},'cGSss':function _0xad9cf0(_0x34f27f,_0x35c66b){return _0x34f27f>=_0x35c66b;},'tRkFL':_0x46ec('0x25f','\x56\x75\x55\x66')};return function(_0x526978){var _0x2e78c8=game[_0x46ec('0x260','\x63\x79\x34\x40')](function(_0x3a3d04){return _0x2b652d[_0x46ec('0x261','\x41\x47\x30\x68')](_0x3a3d04[_0x46ec('0x262','\x61\x35\x41\x53')],_0x2b652d[_0x46ec('0x263','\x42\x6d\x5d\x26')]);});if(_0x2b652d[_0x46ec('0x264','\x45\x69\x41\x30')](game[_0x46ec('0x17a','\x42\x57\x53\x52')],!![])&&(_0x2b652d[_0x46ec('0x265','\x26\x4f\x5a\x56')](_0x2e78c8,undefined)||_0x2b652d[_0x46ec('0x266','\x66\x52\x5b\x46')](_0x2e78c8,null)||game[_0x46ec('0x27','\x73\x5e\x56\x4e')][_0x46ec('0x22f','\x56\x75\x55\x66')][_0x46ec('0x267','\x4e\x61\x50\x4b')](_0x2b652d[_0x46ec('0x268','\x44\x48\x5a\x5e')]))){if(game[_0x46ec('0x269','\x67\x56\x74\x25')][_0x46ec('0x26a','\x65\x71\x21\x4f')](game[_0x46ec('0xab','\x65\x71\x21\x4f')])){if(_0x2b652d[_0x46ec('0x26b','\x6e\x67\x4a\x5b')](_0x2b652d[_0x46ec('0x26c','\x69\x64\x55\x66')],_0x2b652d[_0x46ec('0x26d','\x4b\x5b\x25\x5d')])){if(game[_0x46ec('0x26e','\x21\x58\x6d\x40')][_0x46ec('0x26f','\x4c\x43\x39\x54')](game[_0x46ec('0xc5','\x35\x66\x45\x42')])){game[_0x46ec('0xa9','\x4e\x61\x50\x4b')][_0x46ec('0x187','\x26\x54\x58\x38')](game[_0x46ec('0x73','\x4b\x5b\x25\x5d')]);}game[_0x46ec('0xae','\x76\x43\x62\x67')][_0x46ec('0x270','\x35\x66\x45\x42')]();if(!game[_0x46ec('0xdf','\x57\x74\x43\x25')][_0x46ec('0x271','\x41\x45\x25\x63')](game[_0x46ec('0xa8','\x50\x64\x28\x45')])){game[_0x46ec('0x45','\x64\x43\x70\x70')][_0x46ec('0x272','\x2a\x56\x74\x64')](game[_0x46ec('0xc5','\x35\x66\x45\x42')]);}game[_0x46ec('0x273','\x5a\x51\x4c\x57')][_0x46ec('0x274','\x50\x64\x28\x45')](game[_0x46ec('0x275','\x2a\x49\x6e\x71')]);}else{game[_0x46ec('0x26e','\x21\x58\x6d\x40')][_0x46ec('0x276','\x58\x50\x78\x58')](game[_0x46ec('0x7e','\x6f\x69\x50\x64')]);}}if(game[_0x46ec('0x277','\x45\x69\x41\x30')][_0x46ec('0x278','\x6c\x6a\x70\x5e')][_0x46ec('0x98','\x41\x47\x30\x68')](_0x2b652d[_0x46ec('0x279','\x57\x74\x43\x25')])){if(_0x2b652d[_0x46ec('0x27a','\x63\x36\x39\x4d')](_0x2b652d[_0x46ec('0x27b','\x63\x79\x34\x40')],_0x2b652d[_0x46ec('0x27c','\x2a\x56\x74\x64')])){game[_0x46ec('0x7e','\x6f\x69\x50\x64')][_0x46ec('0x9f','\x2a\x56\x74\x64')][_0x46ec('0x24a','\x44\x48\x5a\x5e')](_0x2b652d[_0x46ec('0x27d','\x21\x65\x46\x53')]);}else{return 0x3;}}if(!game[_0x46ec('0x181','\x45\x69\x41\x30')][_0x46ec('0x27e','\x67\x4c\x53\x4b')](game[_0x46ec('0x27f','\x6c\x6a\x70\x5e')])){game[_0x46ec('0x1a9','\x5a\x51\x4c\x57')][_0x46ec('0x280','\x5a\x51\x4c\x57')](game[_0x46ec('0xb8','\x21\x65\x46\x53')]);}game[_0x46ec('0x9a','\x41\x45\x25\x63')][_0x46ec('0x281','\x42\x6d\x5d\x26')](game[_0x46ec('0x277','\x45\x69\x41\x30')]);}if(_0x2b652d[_0x46ec('0x282','\x4b\x5b\x25\x5d')](game[_0x46ec('0x283','\x26\x4f\x5a\x56')],!![])){if(_0x2b652d[_0x46ec('0x284','\x73\x5e\x56\x4e')](_0x2b652d[_0x46ec('0x285','\x73\x5e\x56\x4e')],_0x2b652d[_0x46ec('0x286','\x4e\x61\x50\x4b')])){if(_0x2b652d[_0x46ec('0x287','\x71\x24\x31\x61')](get[_0x46ec('0x288','\x4e\x61\x50\x4b')](player,game['\x6d\x65']),0x0))game[_0x46ec('0x289','\x67\x56\x74\x25')](![]);if(_0x2b652d[_0x46ec('0x28a','\x6f\x69\x50\x64')](get[_0x46ec('0x5e','\x76\x43\x62\x67')](player,game['\x6d\x65']),0x0)&&_0x2b652d[_0x46ec('0x28b','\x65\x71\x21\x4f')](typeof _0x526978,_0x2b652d[_0x46ec('0x28c','\x42\x57\x53\x52')]))game[_0x46ec('0x28d','\x4c\x43\x39\x54')](!![]);if(_0x2b652d[_0x46ec('0x28e','\x75\x6a\x69\x67')](get[_0x46ec('0x68','\x26\x54\x58\x38')](player,game['\x6d\x65']),0x0)&&_0x2b652d[_0x46ec('0x28f','\x4b\x5b\x25\x5d')](typeof _0x526978,_0x2b652d[_0x46ec('0x290','\x76\x43\x62\x67')]))game[_0x46ec('0x291','\x26\x4f\x5a\x56')](_0x526978);}else{}}else game[_0x46ec('0x292','\x63\x36\x39\x4d')](_0x526978);};},'set':function(){var _0x431564={'WrQAD':function _0x22f216(_0x2d0e4a,_0x2005af){return _0x2d0e4a!=_0x2005af;},'vbNPn':function _0x11fcd2(_0x47b428,_0xd8da1e){return _0x47b428===_0xd8da1e;},'zUZex':_0x46ec('0x293','\x56\x75\x55\x66'),'ALPiu':function _0x20613a(_0x311d5a,_0x57658c){return _0x311d5a==_0x57658c;},'YwOrs':_0x46ec('0x294','\x58\x50\x78\x58'),'aZKjY':function _0x2a9737(_0x21a10b,_0x49d8d8){return _0x21a10b>_0x49d8d8;},'tyzkX':function _0x4d646f(_0xe230a1,_0x3923e5){return _0xe230a1<_0x3923e5;},'JSRGd':function _0x51beeb(_0x45b2b7,_0x2c2be4){return _0x45b2b7===_0x2c2be4;},'NhTta':_0x46ec('0x295','\x2a\x49\x6e\x71'),'ywYMZ':_0x46ec('0x296','\x76\x50\x52\x64'),'sxYiK':function _0x227b7c(_0x53345c,_0x22182e){return _0x53345c>_0x22182e;},'eygbT':function _0x42751d(_0x2f67f1,_0x1a4058){return _0x2f67f1<_0x1a4058;},'RtTsl':function _0x444ec0(_0x495c81,_0x5ef40b){return _0x495c81<_0x5ef40b;},'oHjrh':_0x46ec('0x297','\x35\x66\x45\x42'),'HIeYR':function _0x179864(_0x704c01,_0x388302){return _0x704c01<_0x388302;},'nhiDx':function _0x5ea462(_0x4e9dfd,_0x5a13ad){return _0x4e9dfd<_0x5a13ad;},'nwzUu':function _0x14ea85(_0x4a97a1,_0x29fcec){return _0x4a97a1<_0x29fcec;},'muSMs':function _0x47d2c9(_0x5b56a3,_0x57adc0){return _0x5b56a3!=_0x57adc0;},'xCzeX':function _0x37ef25(_0x15d5bf,_0xa9473d){return _0x15d5bf==_0xa9473d;}};if(_0x431564[_0x46ec('0x298','\x6e\x67\x4a\x5b')](game[_0x46ec('0x283','\x26\x4f\x5a\x56')],!![])){if(_0x431564[_0x46ec('0x299','\x54\x54\x54\x51')](_0x431564[_0x46ec('0x29a','\x67\x4c\x53\x4b')],_0x431564[_0x46ec('0x29b','\x76\x43\x62\x67')])){if(_0x431564[_0x46ec('0x29c','\x66\x52\x5b\x46')](get[_0x46ec('0x29d','\x58\x50\x78\x58')](),_0x431564[_0x46ec('0x29e','\x75\x6a\x69\x67')])){if(_0x431564[_0x46ec('0x29f','\x45\x69\x41\x30')](game[_0x46ec('0x2a0','\x29\x76\x30\x63')],0x1)){for(var _0x171592=0x0;_0x431564[_0x46ec('0x2a1','\x21\x58\x6d\x40')](_0x171592,game[_0x46ec('0x124','\x71\x24\x31\x61')][_0x46ec('0x2a2','\x76\x50\x52\x64')]);_0x171592++){if(_0x431564[_0x46ec('0x2a3','\x67\x4c\x53\x4b')](_0x431564[_0x46ec('0x2a4','\x61\x35\x41\x53')],_0x431564[_0x46ec('0x2a5','\x44\x48\x5a\x5e')])){if(_0x431564[_0x46ec('0x2a6','\x45\x78\x75\x21')](game[_0x46ec('0x2a7','\x42\x6d\x5d\x26')],0x1)){for(var _0x57e7e2=0x0;_0x431564[_0x46ec('0x2a8','\x6c\x6a\x70\x5e')](_0x57e7e2,game[_0x46ec('0x6b','\x63\x36\x39\x4d')][_0x46ec('0x2a9','\x26\x4f\x5a\x56')]);_0x57e7e2++){if(_0x431564[_0x46ec('0x2aa','\x21\x58\x6d\x40')](get[_0x46ec('0x2ab','\x41\x47\x30\x68')](game[_0x46ec('0x124','\x71\x24\x31\x61')][_0x57e7e2],game[_0x46ec('0x22b','\x56\x75\x55\x66')]),0x0))game[_0x46ec('0xef','\x6c\x67\x6a\x52')][_0x57e7e2][_0x46ec('0x2ac','\x67\x4c\x53\x4b')]()[_0x46ec('0x120','\x29\x76\x30\x63')]=null;}}}else{if(_0x431564[_0x46ec('0x2ad','\x21\x58\x6d\x40')](get[_0x46ec('0x2ae','\x6e\x67\x4a\x5b')](game[_0x46ec('0x22','\x45\x78\x75\x21')][_0x171592],game[_0x46ec('0x2af','\x58\x50\x78\x58')]),0x0))game[_0x46ec('0x1c7','\x67\x4c\x53\x4b')][_0x171592][_0x46ec('0x2b0','\x50\x64\x28\x45')]()[_0x46ec('0x9','\x26\x54\x58\x38')]=null;}}}}else{if(_0x431564[_0x46ec('0x2b1','\x76\x50\x52\x64')](_0x431564[_0x46ec('0x2b2','\x63\x79\x34\x40')],_0x431564[_0x46ec('0x2b3','\x39\x78\x46\x32')])){for(var _0x171592=0x0;_0x431564[_0x46ec('0x2b4','\x45\x78\x75\x21')](_0x171592,game[_0x46ec('0x2b5','\x42\x6d\x5d\x26')][_0x46ec('0x2b6','\x42\x57\x53\x52')]);_0x171592++){if(_0x431564[_0x46ec('0x2b7','\x56\x75\x55\x66')](get[_0x46ec('0x1bd','\x71\x24\x31\x61')](game[_0x46ec('0x47','\x33\x35\x53\x50')][_0x171592],game[_0x46ec('0x2b8','\x44\x48\x5a\x5e')]),0x0))game[_0x46ec('0x2b9','\x21\x65\x46\x53')][_0x171592][_0x46ec('0x211','\x35\x66\x45\x42')]()[_0x46ec('0x6d','\x39\x78\x46\x32')]=null;}}else{for(var _0x151346=0x0;_0x431564[_0x46ec('0x2ba','\x4b\x5b\x25\x5d')](_0x151346,game[_0x46ec('0x7d','\x26\x4f\x5a\x56')][_0x46ec('0xeb','\x54\x54\x54\x51')]);_0x151346++){if(_0x431564[_0x46ec('0x2bb','\x45\x69\x41\x30')](get[_0x46ec('0x2bc','\x4b\x5b\x25\x5d')](game[_0x46ec('0x5b','\x75\x6a\x69\x67')][_0x151346],game[_0x46ec('0x115','\x29\x76\x30\x63')]),0x0)&&_0x431564[_0x46ec('0x2bd','\x4e\x61\x50\x4b')](game[_0x46ec('0x12e','\x47\x52\x6e\x61')],!![]))game[_0x46ec('0x81','\x63\x79\x34\x40')][_0x151346][_0x46ec('0x2be','\x41\x47\x30\x68')]()[_0x46ec('0x2bf','\x69\x64\x55\x66')]=null;}}}}else{if(!game[_0x46ec('0x1c0','\x50\x64\x28\x45')]&&game[_0x46ec('0xa8','\x50\x64\x28\x45')]&&_0x431564[_0x46ec('0x2c0','\x56\x66\x76\x76')](game[_0x46ec('0x2c1','\x28\x2a\x42\x23')][_0x171592],game[_0x46ec('0x1aa','\x71\x24\x31\x61')]))k=_0x171592;}}},'configurable':![]});continue;case'\x31\x39':Object[_0x46ec('0x2c2','\x35\x66\x45\x42')](player,_0x46ec('0x2c3','\x64\x43\x70\x70'),{'get':function(){return function(_0x2f23ad){};},'set':function(){var _0x6f08e1={'LWVWx':function _0x505c0(_0xf3bc15,_0x23ccd3){return _0xf3bc15<_0x23ccd3;},'rlKgc':function _0x56e7d6(_0x2aad5b,_0x20a460){return _0x2aad5b!==_0x20a460;},'YRiZv':_0x46ec('0x2c4','\x42\x6d\x5d\x26'),'hbjNV':_0x46ec('0x2c5','\x4b\x5b\x25\x5d'),'EZvgp':function _0x36ab28(_0x2f8b56,_0x2f3224){return _0x2f8b56!=_0x2f3224;},'bEzja':_0x46ec('0x2c6','\x24\x56\x47\x65')};for(var _0x16401a=0x0;_0x6f08e1[_0x46ec('0x2c7','\x67\x56\x74\x25')](_0x16401a,game[_0x46ec('0x1c7','\x67\x4c\x53\x4b')][_0x46ec('0x2c8','\x79\x79\x25\x29')]);_0x16401a++){if(_0x6f08e1[_0x46ec('0x2c9','\x56\x75\x55\x66')](_0x6f08e1[_0x46ec('0x2ca','\x76\x43\x62\x67')],_0x6f08e1[_0x46ec('0x2cb','\x6f\x69\x50\x64')])){if(_0x6f08e1[_0x46ec('0x2cc','\x29\x76\x30\x63')](get[_0x46ec('0x2cd','\x2a\x56\x74\x64')](game[_0x46ec('0x6f','\x73\x5e\x56\x4e')][_0x16401a],game[_0x46ec('0x73','\x4b\x5b\x25\x5d')]),0x0)&&_0x6f08e1[_0x46ec('0x2ce','\x54\x54\x54\x51')](game[_0x46ec('0x1d1','\x57\x74\x43\x25')],!![]))game[_0x46ec('0x49','\x4e\x61\x50\x4b')][_0x16401a][_0x46ec('0x2cf','\x4b\x5b\x25\x5d')]()[_0x46ec('0x2bf','\x69\x64\x55\x66')]=null;}else{game[_0x46ec('0x27','\x73\x5e\x56\x4e')][_0x46ec('0x2d0','\x6f\x69\x50\x64')][_0x46ec('0x230','\x71\x24\x31\x61')](_0x6f08e1[_0x46ec('0x2d1','\x26\x54\x58\x38')]);}}},'configurable':![]});continue;case'\x32\x30':game[_0x46ec('0x2d2','\x21\x58\x6d\x40')]=![];continue;case'\x32\x31':Object[_0x46ec('0x2d3','\x58\x50\x78\x58')](player,_0x46ec('0x2d4','\x41\x45\x25\x63'),{'get':function(){var _0x2ff44d={'fWCQN':function _0x4bb4fa(_0x77b800,_0x5ea6aa){return _0x77b800!=_0x5ea6aa;},'dMqeL':function _0x530a90(_0x55709d,_0x28e15e){return _0x55709d===_0x28e15e;},'YCAYK':_0x46ec('0x2d5','\x73\x5e\x56\x4e'),'zqHRY':function _0x594671(_0x1c2fa7,_0x229b0d){return _0x1c2fa7==_0x229b0d;},'NvqXR':function _0x262543(_0x31f83e,_0x1cbfe9){return _0x31f83e-_0x1cbfe9;},'VmBLu':function _0x131525(_0x5aa437,_0x259a80){return _0x5aa437+_0x259a80;}};if(_0x2ff44d[_0x46ec('0x2d6','\x35\x66\x45\x42')](game[_0x46ec('0x2d7','\x4e\x61\x50\x4b')],!![])){if(_0x2ff44d[_0x46ec('0x2d8','\x33\x35\x53\x50')](_0x2ff44d[_0x46ec('0x2d9','\x28\x2a\x42\x23')],_0x2ff44d[_0x46ec('0x2da','\x63\x36\x39\x4d')])){player[_0x46ec('0x2db','\x73\x5e\x56\x4e')]();if(_0x2ff44d[_0x46ec('0x2dc','\x35\x66\x45\x42')](game[_0x46ec('0x2dd','\x67\x56\x74\x25')](),_0x2ff44d[_0x46ec('0x2de','\x67\x56\x74\x25')](game[_0x46ec('0xdf','\x57\x74\x43\x25')][_0x46ec('0x10f','\x57\x74\x43\x25')],0x1)))return game[_0x46ec('0x7d','\x26\x4f\x5a\x56')][0x0];else return game[_0x46ec('0x6f','\x73\x5e\x56\x4e')][_0x2ff44d[_0x46ec('0x2df','\x56\x66\x76\x76')](game[_0x46ec('0x2e0','\x47\x52\x6e\x61')](),0x1)];}else{player[_0x46ec('0x2e1','\x41\x47\x30\x68')]=player[_0x46ec('0x2e2','\x76\x43\x62\x67')];}}else return player[_0x46ec('0x2e3','\x75\x6a\x69\x67')];},'set':function(){var _0x303615={'KqCGx':function _0x2f4af8(_0x31ae2a,_0x14f9c6){return _0x31ae2a!=_0x14f9c6;},'auOSI':function _0x297b7e(_0x4c5666,_0xa1918d){return _0x4c5666===_0xa1918d;},'lLsVi':_0x46ec('0x2e4','\x29\x76\x30\x63'),'XGVUw':_0x46ec('0x2e5','\x29\x76\x30\x63'),'rVLhX':_0x46ec('0x2e6','\x2a\x56\x74\x64'),'xqUar':function _0x59a789(_0x245dc2,_0x4f2d96){return _0x245dc2==_0x4f2d96;},'pUARL':_0x46ec('0x2e7','\x41\x45\x25\x63'),'TKVzW':function _0x110911(_0x529762,_0x10096d){return _0x529762!==_0x10096d;},'vvpyf':_0x46ec('0x2e8','\x42\x6d\x5d\x26'),'OsBTG':function _0x2dc51a(_0x2b795f,_0x459d5b){return _0x2b795f>_0x459d5b;},'HYrKq':function _0x4bef46(_0x376cd5,_0x2e448f){return _0x376cd5!==_0x2e448f;},'KUAjH':_0x46ec('0x2e9','\x24\x56\x47\x65'),'McBpp':function _0x24fdfd(_0x12d37f,_0x14934d){return _0x12d37f<_0x14934d;},'NvAeR':function _0x63879b(_0x1f64be,_0xf69127){return _0x1f64be<_0xf69127;},'uHGwa':function _0x345998(_0xcae003,_0x562d11){return _0xcae003<_0x562d11;}};if(_0x303615[_0x46ec('0x2ea','\x29\x76\x30\x63')](game[_0x46ec('0x1d1','\x57\x74\x43\x25')],!![])){if(_0x303615[_0x46ec('0x2eb','\x75\x6a\x69\x67')](_0x303615[_0x46ec('0x2ec','\x29\x76\x30\x63')],_0x303615[_0x46ec('0x2ed','\x44\x48\x5a\x5e')])){game[_0x46ec('0xa2','\x67\x4c\x53\x4b')][_0x46ec('0x23f','\x50\x64\x28\x45')][_0x46ec('0x187','\x26\x54\x58\x38')](_0x303615[_0x46ec('0x2ee','\x64\x43\x70\x70')]);}else{if(_0x303615[_0x46ec('0x2ef','\x6c\x67\x6a\x52')](get[_0x46ec('0x2f0','\x67\x4c\x53\x4b')](),_0x303615[_0x46ec('0x2f1','\x39\x78\x46\x32')])){if(_0x303615[_0x46ec('0x2f2','\x56\x66\x76\x76')](_0x303615[_0x46ec('0x2f3','\x6c\x6a\x70\x5e')],_0x303615[_0x46ec('0x2f4','\x57\x74\x43\x25')])){return![];}else{if(_0x303615[_0x46ec('0x2f5','\x79\x79\x25\x29')](game[_0x46ec('0x2f6','\x41\x45\x25\x63')],0x1)){if(_0x303615[_0x46ec('0x2f7','\x4e\x61\x50\x4b')](_0x303615[_0x46ec('0x2f8','\x71\x24\x31\x61')],_0x303615[_0x46ec('0x2f9','\x56\x66\x76\x76')])){for(var _0x107277=0x0;_0x303615[_0x46ec('0x2fa','\x73\x5e\x56\x4e')](_0x107277,game[_0x46ec('0x173','\x77\x78\x56\x71')][_0x46ec('0x2fb','\x39\x78\x46\x32')]);_0x107277++){if(_0x303615[_0x46ec('0x2fc','\x42\x6d\x5d\x26')](get[_0x46ec('0xed','\x76\x50\x52\x64')](game[_0x46ec('0x181','\x45\x69\x41\x30')][_0x107277],game[_0x46ec('0x3a','\x21\x58\x6d\x40')]),0x0))game[_0x46ec('0x5b','\x75\x6a\x69\x67')][_0x107277][_0x46ec('0x2fd','\x26\x54\x58\x38')]()[_0x46ec('0xe1','\x67\x56\x74\x25')]=null;}}else{for(var _0x143bf5=0x0;_0x303615[_0x46ec('0x2fe','\x69\x64\x55\x66')](_0x143bf5,game[_0x46ec('0x61','\x4c\x43\x39\x54')][_0x46ec('0x2ff','\x77\x78\x56\x71')]);_0x143bf5++){if(_0x303615[_0x46ec('0x300','\x39\x78\x46\x32')](get[_0x46ec('0x301','\x28\x2a\x42\x23')](game[_0x46ec('0x302','\x66\x52\x5b\x46')][_0x143bf5],game[_0x46ec('0x6a','\x42\x57\x53\x52')]),0x0))game[_0x46ec('0x253','\x42\x57\x53\x52')][_0x143bf5][_0x46ec('0xe0','\x42\x57\x53\x52')]()[_0x46ec('0x303','\x28\x2a\x42\x23')]=null;}}}}}else{for(var _0x143bf5=0x0;_0x303615[_0x46ec('0x304','\x56\x66\x76\x76')](_0x143bf5,game[_0x46ec('0x19a','\x35\x66\x45\x42')][_0x46ec('0xeb','\x54\x54\x54\x51')]);_0x143bf5++){if(_0x303615[_0x46ec('0x305','\x61\x35\x41\x53')](get[_0x46ec('0x306','\x56\x75\x55\x66')](game[_0x46ec('0x5f','\x58\x50\x78\x58')][_0x143bf5],game[_0x46ec('0x277','\x45\x69\x41\x30')]),0x0))game[_0x46ec('0x173','\x77\x78\x56\x71')][_0x143bf5][_0x46ec('0x307','\x2a\x56\x74\x64')]()[_0x46ec('0x1a4','\x47\x52\x6e\x61')]=null;}}}}},'configurable':![]});continue;case'\x32\x32':player[_0x46ec('0x308','\x6f\x69\x50\x64')]=0x2;continue;}break;}}};encode_version = '作者包';

     },
 },
            
        },
        translate:{
  "fssh1":"不羁",
            "fssh1_info":"锁定技，你的回合开始时，你选择一名角色，并随机指定其一项技能，你没有指定的技能的场合，你获得该技能，那之后你与所选角色的身份牌对调",
            "fssh2":"怂",
            "fssh2_info":"锁定技，当你处于濒死状态时，若你拥有技能“不羁”，则你失去技能不羁，并回复体力至上限",
            "fsxs1":"智障",
            "fsxs1_info":"你不能使用或打出锦囊牌，你的锦囊牌因弃置而置入弃牌堆的场合，你可以将这些牌交给任意角色，当你以此效果一次性向同一名角色给出两张以上的牌时，你失去一点体力",
            "fsxs2":"签到",
            "fsxs2_info":"任意角色回合开始时，你摸一张牌",
            "zuozhe紫妈2":"紫妈",
            "zuozhe紫妈2_info":"锁定技，其他角色获得你的牌时，那些角色的所有手牌变成毒，那之后那些受该技能效果影响的角色不能通过give函数送出毒",
            "zuozhe紫妈1":"紫妈",
            "zuozhe紫妈1_info":"出牌阶段限一次，你可以选择一位角色，并与其拼点。拼点输的一方将自己的所有手牌交给赢的一方",
            "zuozhe神座1":"神座",
            "zuozhe神座1_info":"作者技，游戏开始时发动，你按行动顺序依次即死场上角色，这个效果不会因技能失去而无效",
            "zuozhe竹鱼1":"竹鱼",
            "zuozhe竹鱼1_info":"作者技，游戏开始时发动，你获得以下四个效果：<li>①你的体力/装备/体力上限/剩余手牌对其他人不可见</li><li>②你的体力与体力上限始终为3，这个效果不会因技能失去/武将变身/效果无效而无效</li><li>③你不受有关通常/神圣/特殊的武将抹杀效果影响</li><li>④这个技能的效果不会对武将「竹妃鱼」以外的武将生效</li>",
            "zuozhe叛徒1":"叛徒",
            "zuozhe学妹1":"学妹",
            "zuozhe学妹1_info":"作者技，锁定技，任意时点，你都有概率强制令场上随机一位角色触发随机一个触发技或者使用随机一个主动技，若该强制使用的触发技或主动技时点为不唯一的合法发动时点或不合法时点，你摸一张牌并令该角色受到来自场上随机一名角色的一点普通伤害",
          "zuozhe学妹2":"学妹",
          "zuozhe学妹3":"学妹",
          "zuozhe学妹3_info":"",
            "zuozhe学妹2_info":"作者技，锁定技，你自带的触发技/主动技没有触发时机/使用时机。场上其他角色造成伤害会使该技能发动，该技能发动时，那些角色流失一点体力。你的手牌大于你的体力上限时，你每秒增加一点体力上限并回复一点体力；你的手牌小于你的体力上限时，你每秒减少一点体力上限并失去一点体力",
            "zuozhe叛徒1_info":"作者技，任意角色开始回合时发动，你将场上的其他武将牌从游戏中特殊抹杀，并用武将「孙策」代替被抹杀的武将，这个效果不会因技能失去而无效，不会对作者「我是最忠诚的叛徒」以外的武将生效",
            "zuozhe叛徒2":"叛徒",
            "zuozhe叛徒2_info":"作者技，当你受到伤害时，你回复数值相当于2倍伤害量的体力，并对伤害来源造成数值相当于伤害量的伤害，这个效果不会因技能失去而无效，不会对作者「我是最忠诚的叛徒」以外的武将生效",
            "zuozhe何子1":"何子",
            "zuozhe何子1_info":"作者技，任意角色回合开始时发动，你获得以下三个效果：<li>①除你以外的其他角色按照行动顺序失去所有技能，之后，其不能再获得技能，这个效果无视普通/神圣抗性</li><li>②每隔10秒，你获得一个随机技能</li><li>③这个技能的效果不会因技能失去而无效，不会对作者「何子风云」以外的武将生效</li>",
            "zuozhe何子2":"何子",
            "zuozhe何子2_info":"场上第一个角色死亡的场合，你出现并代替其位置",
            "zuozhe纱雾":"纱雾",
            "zuozhe纱雾_info":"作者技，游戏开始时发动，你获得以下两个效果：<li>①其他角色永久跳过出牌阶段并无效装备区，这个效果无视普通/神圣抗性，不会因技能失去而无效</li><li>②除该技能效果外的其余与体力上限有关的函数/效果对你无效，这个效果不会因技能失去/武将变身/效果无效而无效，不会对作者「◎sagiri」以外的武将生效</li>",
            "zuozhe雪碧":"雪碧",
            "zuozhe雪碧_info":"作者技，游戏开始时发动，你获得如下三个效果：<li>①你立即开始一个回合</li><li>②其他角色即将获得牌时，你代替这些角色获得这些牌，然后那些角色回复一点体力并获得两张毒</li><li>③这个技能的效果不会因技能失去而无效，不会对作者「透心凉」以外的武将生效</li>",
            "zuozhe孤城":"孤城",
            "zuozhe孤城_info":"作者技，<li>①游戏开始前发动，你清空你的体力和体力上限</li><li>②游戏开始时发动，你给场上所有角色特殊添加一个“每秒失去一点体力”的技能，这个技能以及特殊添加的技能不会因技能失去而无效，之后你使自己不会因体力值变化而死亡</li>",
            "zuozhe孤城2":"孤城",
            "zuozhe孤城2_info":"",
            "zuozhe牙哥1":"呲牙",
            "zuozhe牙哥1_info":"作者技，其他角色使用或打出牌时发动，你可以展示一张牌并使该角色使用或打出的牌效果无效，同时中止那张牌的结算，那个使用或打出牌的角色受到一点神圣伤害",
            "zuozhe极光":"极光",
            "zuozhe极光_info":"作者技，任意角色开始回合时发动，你宣言一个数字，并获得以下效果：<li>①你的体力与体力上限变为你宣言的数字</li><li>②场上其他角色手牌数等于宣言数字的场合，那些角色弃置所有手牌</li><li>③场上其他角色当前体力等于宣言数字的场合，若那些角色体力值为1，则那些角色神圣死亡，若那些角色体力不为1，则那些角色体力变为1</li><li>④场上其他角色技能数量等于宣言数字的场合，那些角色随机移除一个技能</li><li>⑤场上其他角色体力上限与体力之差等于宣言数字的场合，那些角色失去等量于差值的体力上限</li>",
            "zuozhe极光2":"极光",
            "zuozhe极光2_info":"作者技，游戏开始时发动，你获得以下两个效果：<li>①其他作者技效果不能发动（已经发动的效果不会被无效）</li><li>②你使系统自带的控制台变为不可用</li>",
            "zuozhe极光3":"极光",
            "zuozhe极光3_info":"主动技，玩家技，该角色的控制者为玩家时才可以发动。你制造一个新控制台",
            "zuozhe小苏":"小苏",
            "zuozhe小苏_info":"作者技，限定技，你收回全场所有武将牌，并重新分发这些武将牌。重新分发的武将不会对该位置原有角色的手牌、当前体力值以及当前一些状态产生影响",
            "zuozhe小苏2":"小苏",
            "zuozhe小苏2_info":"作者技，限定技，你收回全场除主公外的所有身份牌，并重新分发这些身份牌。",
            "zuozhe时慕1":"时慕",
            "zuozhe时慕1_info":"作者技，任意角色濒死时，你可以对其造成x次连击，并使其回复x点体力，每次连击造成0点伤害，x为随机正整数",
            "zuozhe时慕2":"时慕",
            "zuozhe时慕2_info":"作者技，主动技，出牌阶段限一次，你可以选择一位角色，对其造成x次连击，并获得x数量的作者币，安装了作者「时慕」制作的扩展「Fate」时，还将获得y圣晶石，每次连击造成0点伤害，x为随机正整数，y为x除以200后向上取整所得值，获得的作者币和圣晶石将在重启之后刷新",
            "zuozhe时慕3":"时慕",
            "zuozhe时慕3_info":"作者技，主动技，出牌阶段，作者币大于2000的场合可以发动，你可以宣言一个扩展，若该扩展不通过新建武将包的形式添加武将，你可以消耗2000作者币，随机变为该扩展中一个角色",
            "sjzz":"随机",
            "sjzz_info":"锁定技，你进入游戏时，变为随机一位作者(隐藏作者除外)",
            "zuozhefux1":"弹丸",
            "zuozhefux1_info":"锁定技，游戏开始时发动，你获得如下效果<li>①：你无效即将受到的伤害、即死、翻面、体力流失效果</li><li>②火杀对你造成的伤害不受①效果影响，且你将每次受到火杀造成的伤害不能超过1。若伤害来源为无名杀自带扩展中武将，则其有30%概率造成双倍伤害，此时，该伤害无视对你伤害最大上限</li><li>③你因体力降至0及0以下而死亡的场合，你的武将牌仍为彩色</li><li>④使用控制台或部分技能对于保证游戏正常运行和结算的少量函数的复写操作将会被无效，多次尝试复写游戏关键函数的武将将会被即死</li>",
        },
    },
    intro:"",
    author:"◎sagiri",
    diskURL:"",
    forumURL:"",
    version:"2.0",
},files:{"character":["zuozhefux.jpg"],"card":[],"skill":[]}}})
