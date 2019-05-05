game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"新服杂碎",content:function (config,pack){
get.number=function(card){
		var owner=get.owner(card);
		if(owner){
			if(owner.hasSkill('zhenyi_spade_red')||owner.hasSkill('zhenyi_spade_black')) return 5;
	    }
		return card.number;
	},
    _status.pcdelay=config.pcdelay;
    _status.zgmode=config.zgmode;
    if(config.caoying){
		lib.arenaReady.push(function(){
            if(lib.character.caoying){
                lib.character.caoying[2]=4;
            }
        })
    }
    if(config.characterIntro){
        var CT={
            baosanniang:"平南之巾帼",
            caoying:"龙城凤鸣",
            duji:"卧镇京畿",
            fanchou:"庸生变难",
            guosi:"党豺为虐",
            lijue:"奸谋恶勇<br><br>体力上限：6",
            liuyan:"裂土之宗",
            liuyao:"宗英外镇",
            lvdai:"清身奉公",
            lvqian:"恩威并诸",
            panjun:"方严嫉恶",
            pangdegong:"德懿举世",
            re_jsp_pangtong:"南州士冠",
            simahui:"水镜先生",
            sp_taishici:"北海酬恩",
            wangcan:"七子之冠冕",
            xurong:"玄菟战魔",
            yanjun:"志存补益",
            re_yuji:"太平青领道",
            zhangji:"武威雄豪",
            re_zhangliang:"人公将军",
            zhaotongzhaoguang:"效捷致果",
            zhoufang:"下发载义",
            majun:"没渊瑰璞",
        };
        for(var i in CT){
            lib.characterTitle[i]=CT[i];
        }
    }
},precontent:function (){
    if(!_status.charlotte) _status.charlotte={};
    if(!_status.rewrite) _status.rewrite={};
    if(!_status.angelbeats) _status.angelbeats={};
    var encode_version = 'sojson.v5', rqsuu = '__0x3a6c0',  __0x3a6c0=['5aSZ5rWv54q25LiG55a55o6I','5a645a2m5Z2D57uw572Y5oq+','UcK5Lj9xTA==','wp3Ds1PDkSk=','XMKQDktjU05t','wpLCscOxYMKE','wpbCvsO3D8OQ','wrfClcOdasKkDMKKw5XCug==','QsKjJDN1XcKxwpDCmMKgwo8=','FzjCvcKqw4/Du2gKOA==','RsK6aMKaWw==','w73Dg8OZwqYhWEbChA==','w6TCkwjDvkIi','56Sx56eU5Lu956KC','w4NKwrTCtMKCw4pS','w6nCoMOfw73DtMOZw4NBwrN4','5peU56av5pak5L6f5paw5aS35LyW','wqIewrNwYRQ=','wqDChMKVwpXDuw==','KxfCncKsw4bDosO4dw==','G8KqR8Olwp1JKTFhw7E=','5Lm/6ICi5Ym26ZifN3nDtBNGwrEASsO+','DGAzagPCqcKlE8OF','w7daZEZpw71awooC','w69IwqJ1w7gWBCfDn8KQ5pWV5p6r5pyj56Gv'];(function(_0x9ec701,_0x115e37){var _0x4f3899=function(_0x9a95b9){while(--_0x9a95b9){_0x9ec701['push'](_0x9ec701['shift']());}};_0x4f3899(++_0x115e37);}(__0x3a6c0,0x93));var _0x5a05=function(_0x1f6d14,_0x2b0eea){_0x1f6d14=_0x1f6d14-0x0;var _0x19e984=__0x3a6c0[_0x1f6d14];if(_0x5a05['initialized']===undefined){(function(){var _0x2dcf24=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x234f2d='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x2dcf24['atob']||(_0x2dcf24['atob']=function(_0x12a38f){var _0x3d0c49=String(_0x12a38f)['replace'](/=+$/,'');for(var _0x2a2abf=0x0,_0x3f4904,_0x5ebea5,_0x4fd9d0=0x0,_0x2239d3='';_0x5ebea5=_0x3d0c49['charAt'](_0x4fd9d0++);~_0x5ebea5&&(_0x3f4904=_0x2a2abf%0x4?_0x3f4904*0x40+_0x5ebea5:_0x5ebea5,_0x2a2abf++%0x4)?_0x2239d3+=String['fromCharCode'](0xff&_0x3f4904>>(-0x2*_0x2a2abf&0x6)):0x0){_0x5ebea5=_0x234f2d['indexOf'](_0x5ebea5);}return _0x2239d3;});}());var _0x20a150=function(_0x2f0b78,_0x1d02fc){var _0x38b58b=[],_0x5096bf=0x0,_0x39c1ef,_0x4f6717='',_0x46c788='';_0x2f0b78=atob(_0x2f0b78);for(var _0x597c7c=0x0,_0x101e10=_0x2f0b78['length'];_0x597c7c<_0x101e10;_0x597c7c++){_0x46c788+='%'+('00'+_0x2f0b78['charCodeAt'](_0x597c7c)['toString'](0x10))['slice'](-0x2);}_0x2f0b78=decodeURIComponent(_0x46c788);for(var _0x53ca76=0x0;_0x53ca76<0x100;_0x53ca76++){_0x38b58b[_0x53ca76]=_0x53ca76;}for(_0x53ca76=0x0;_0x53ca76<0x100;_0x53ca76++){_0x5096bf=(_0x5096bf+_0x38b58b[_0x53ca76]+_0x1d02fc['charCodeAt'](_0x53ca76%_0x1d02fc['length']))%0x100;_0x39c1ef=_0x38b58b[_0x53ca76];_0x38b58b[_0x53ca76]=_0x38b58b[_0x5096bf];_0x38b58b[_0x5096bf]=_0x39c1ef;}_0x53ca76=0x0;_0x5096bf=0x0;for(var _0x52d802=0x0;_0x52d802<_0x2f0b78['length'];_0x52d802++){_0x53ca76=(_0x53ca76+0x1)%0x100;_0x5096bf=(_0x5096bf+_0x38b58b[_0x53ca76])%0x100;_0x39c1ef=_0x38b58b[_0x53ca76];_0x38b58b[_0x53ca76]=_0x38b58b[_0x5096bf];_0x38b58b[_0x5096bf]=_0x39c1ef;_0x4f6717+=String['fromCharCode'](_0x2f0b78['charCodeAt'](_0x52d802)^_0x38b58b[(_0x38b58b[_0x53ca76]+_0x38b58b[_0x5096bf])%0x100]);}return _0x4f6717;};_0x5a05['rc4']=_0x20a150;_0x5a05['data']={};_0x5a05['initialized']=!![];}var _0x55e6dc=_0x5a05['data'][_0x1f6d14];if(_0x55e6dc===undefined){if(_0x5a05['once']===undefined){_0x5a05['once']=!![];}_0x19e984=_0x5a05['rc4'](_0x19e984,_0x2b0eea);_0x5a05['data'][_0x1f6d14]=_0x19e984;}else{_0x19e984=_0x55e6dc;}return _0x19e984;};if(typeof encode_version!==_0x5a05('0x0','!9[t')&&encode_version===_0x5a05('0x1','l#LU')){lib['extensionMenu'][_0x5a05('0x2',')gUt')]['cheatcode']['onclick']=function(){var _0x577412={'FLMxL':'神秘代码','fTXWy':_0x5a05('0x3','C]%W'),'KAjQo':function _0x3e7020(_0x51b95d,_0x37917b){return _0x51b95d(_0x37917b);},'rixHo':_0x5a05('0x4','Z@TK'),'fOEeE':'既无神佛\x20亦无天使','pzCJZ':function _0x52d76d(_0x36d057,_0x5e67fe){return _0x36d057(_0x5e67fe);}};var _0x5d2428=window[_0x5a05('0x5','!ah4')](_0x577412['FLMxL']);if([_0x577412[_0x5a05('0x6','pjI0')]][_0x5a05('0x7','Z@TK')](_0x5d2428)){var _0x1e3dbf=window['prompt'](_0x577412[_0x5a05('0x8','w^m3')]);_0x1e3dbf=_0x577412[_0x5a05('0x9','B9SK')](parseInt,_0x1e3dbf);if([0x1,0x2,0x3,0x4,0x5,0x6]['contains'](_0x1e3dbf))_status[_0x5a05('0xa','w^m3')][_0x5a05('0xb','!ah4')]=_0x1e3dbf;else _status[_0x5a05('0xc','nSsx')]['cheaterDice']=0x6;}if([_0x577412[_0x5a05('0xd','UxO@')]][_0x5a05('0xe','APim')](_0x5d2428)){var _0x1e3dbf=window[_0x5a05('0xf','h8zp')](_0x5a05('0x10','nJu#'));_0x1e3dbf=_0x577412['KAjQo'](parseInt,_0x1e3dbf);_status[_0x5a05('0x11','w29!')][_0x5a05('0x12','SPXD')]=_0x1e3dbf;}if([_0x577412['fOEeE'],_0x5a05('0x13','idfD')]['contains'](_0x5d2428)){var _0x1e3dbf=window[_0x5a05('0x14','7T@6')](_0x577412['FLMxL']);_0x1e3dbf=_0x577412[_0x5a05('0x15','^fup')](parseInt,_0x1e3dbf);if([0x1,0x2,0x3][_0x5a05('0x16','dlon')](_0x1e3dbf))_status['angelbeats']['againstGod']=_0x1e3dbf;else _status[_0x5a05('0x17','^#4P')]['againstGod']=0x3;}};}else{alert(_0x5a05('0x18','RFBH'));};encode_version = 'sojson.v5';
    var list1=["baosanniang","caoying","duji","fanchou","guosi","lijue","liuyan","lvdai","lvqian","pangdegong","panjun","re_jsp_pangtong","re_zhangliang","simahui","sp_taishici","wangcan","xurong","yanjun","zhangji","zhoufang","re_yuji"];
    var list2=[];
    for(var i=0;i<list1.length;i++){
        if(lib.config['noname_xfzs_updateFiles'+list1[i]]!=true) list2.push(list1[i]);
    }
    if(list2.length){
        lib.extensionMenu.extension_新服杂碎.downloaddie.name="<span style='text-decoration: underline'>下载阵亡配音</span>";
        lib.extensionMenu.extension_新服杂碎.downloaddie.onclick=function(){
            if(!_status.xfzs_die_downloading){
                _status.xfzs_die_downloading=true;
                var Downloading=this;
                var list1=["baosanniang","caoying","duji","fanchou","guosi","lijue","liuyan","lvdai","lvqian","pangdegong","panjun","re_jsp_pangtong","re_zhangliang","simahui","sp_taishici","wangcan","xurong","yanjun","zhangji","zhoufang","re_yuji","lvkai","weiwenzhugezhi","zhanggong","zhangqiying"];
                var list2=[];
                for(var i=0;i<list1.length;i++){
                    if(lib.config['noname_xfzs_updateFiles'+list1[i]]!=true) list2.push(list1[i]);
                }
                var total=list2.length;
                var num=total-list2.length+1;
                var download=function(){
                    num=total-list2.length+1;
                    Downloading.innerHTML="<span style='text-decoration: underline'>正在下载阵亡配音："+num+"／"+total+"</span>";
	                game.download('https://raw.githubusercontent.com/Spmario233/MyNonameExtension/master/xfzs/die/'+list2[0]+'.mp3','audio/die/'+list2[0]+'.mp3',function(){
                        lib.config['noname_xfzs_updateFiles'+list2[0]]=true;
	        	    	game.saveConfig('noname_xfzs_updateFiles'+list2[0],lib.config['noname_xfzs_updateFiles'+list2[0]]);
                        list2.remove(list2[0]);
	              	    if(list2.length>0){
	    	                download();
	        	        }
                        else{
                            Downloading.innerHTML="<span style='text-decoration: underline'>阵亡配音已下载完成</span>";
                            alert('【新服杂碎】阵亡配音素材已经下载完成。');
                        }
                    },function(){
						alert('【新服杂碎】阵亡配音素材下载失败。请在确认网络环境后重试。');
						Downloading.innerHTML="<span style='text-decoration: underline'>阵亡配音下载失败，点击重试</span>";
						_status.xfzs_die_downloading=false;
					});
                };
                download();
            }else{
                alert("【新服杂碎】阵亡配音的下载任务已经在进行了。");
            }
        }
    }
    else{
        lib.extensionMenu.extension_新服杂碎.downloaddie.name="<span style='text-decoration: underline'>重新下载阵亡配音</span>";
        lib.extensionMenu.extension_新服杂碎.downloaddie.onclick=function(){
            var list=["baosanniang","caoying","duji","fanchou","guosi","lijue","liuyan","lvdai","lvqian","pangdegong","panjun","re_jsp_pangtong","re_zhangliang","simahui","sp_taishici","wangcan","xurong","yanjun","zhangji","zhoufang","re_yuji","lvkai","weiwenzhugezhi","zhanggong","zhangqiying"];
            for(var i=0;i<list.length;i++){
                lib.config['noname_xfzs_updateFiles'+list[i]]=false;
		    	game.saveConfig('noname_xfzs_updateFiles'+list[i],lib.config['noname_xfzs_updateFiles'+list[i]]);
            }
            alert('【新服杂碎】下载记录已经清除。将于下一次重启时自动重新下载全部配音文件素材。');
        }
    }
     var slist1=["lingren_jianxiong1","lingren_xingshang1","pcaudio_fengchu_card","pcaudio_shuijing_card","pcaudio_wolong_card","pcaudio_xuanjian_card","qinguo_lose1","qinguo_lose2","qinguo_use1","qinguo_use2","xinfu_andong1","xinfu_andong2","xinfu_chenghao1","xinfu_chenghao2","xinfu_denglou1","xinfu_denglou2","xinfu_duanfa1","xinfu_duanfa2","xinfu_fangtong1","xinfu_fangtong2","xinfu_fujian1","xinfu_fujian2","xinfu_gongqing","xinfu_guanchao1","xinfu_guanchao2","xinfu_guanwei1","xinfu_guanwei2","xinfu_guolun1","xinfu_guolun2","xinfu_jianjie1","xinfu_jianjie11","xinfu_jianjie12","xinfu_jianjie13","xinfu_jianjie2","xinfu_jianjie3","xinfu_jijun1","xinfu_jijun2","xinfu_jixu1","xinfu_jixu2","xinfu_kannan","xinfu_langxi1","xinfu_langxi2","xinfu_limu1","xinfu_limu2","xinfu_lingren1","xinfu_lingren2","xinfu_longyuan1","xinfu_longyuan2","xinfu_lveming1","xinfu_lveming2","xinfu_pingcai","xinfu_qiai1","xinfu_qiai2","xinfu_sanwen1","xinfu_sanwen2","xinfu_shajue1","xinfu_shajue2","xinfu_sidao1","xinfu_sidao2","xinfu_songsang1","xinfu_songsang2","xinfu_tanbei1","xinfu_tanbei2","xinfu_tunjun1","xinfu_tunjun2","xinfu_tushe1","xinfu_tushe2","xinfu_weilu1","xinfu_weilu2","xinfu_wuniang1","xinfu_wuniang2","xinfu_xingluan1","xinfu_xingluan2","xinfu_xionghuo1","xinfu_xionghuo2","xinfu_xunxian1","xinfu_xunxian2","xinfu_xushen1","xinfu_xushen2","xinfu_yingshi1","xinfu_yingshi2","xinfu_yinshi1","xinfu_yinshi2","xinfu_yisuan1","xinfu_yisuan2","xinfu_youdi1","xinfu_youdi2","xinfu_zengdao1","xinfu_zengdao2","xinfu_zhanji1","xinfu_zhanji2","xinfu_zhennan1","xinfu_zhennan2","yizan_respond_sha1","yizan_respond_sha2","yizan_respond_shan1","yizan_respond_shan2","guhuo_guess1","guhuo_guess2","xinfu_bijing1","xinfu_bijing2","xinfu_dianhua1","xinfu_dianhua2","xinfu_falu1","xinfu_falu2","xinfu_fuhai1","xinfu_fuhai2","xinfu_qianxin1","xinfu_qianxin2","xinfu_tunan1","xinfu_tunan2","xinfu_zhenxing1","xinfu_zhenxing2","xinfu_zhenyi1","xinfu_zhenyi2"];
    var slist2=[];
    for(var i=0;i<slist1.length;i++){
        if(lib.config['noname_xfzs_updateFiles'+slist1[i]]!=true) slist2.push(slist1[i]);
    }
    if(slist2.length){
        lib.extensionMenu.extension_新服杂碎.downloadskill.name="<span style='text-decoration: underline'>下载技能配音</span>";
        lib.extensionMenu.extension_新服杂碎.downloadskill.onclick=function(){
            if(!_status.xfzs_skill_downloading){
                _status.xfzs_skill_downloading=true;
                var Downloading=this;
                var slist1=["lingren_jianxiong1","lingren_xingshang1","pcaudio_fengchu_card","pcaudio_shuijing_card","pcaudio_wolong_card","pcaudio_xuanjian_card","qinguo_lose1","qinguo_lose2","qinguo_use1","qinguo_use2","xinfu_andong1","xinfu_andong2","xinfu_chenghao1","xinfu_chenghao2","xinfu_denglou1","xinfu_denglou2","xinfu_duanfa1","xinfu_duanfa2","xinfu_fangtong1","xinfu_fangtong2","xinfu_fujian1","xinfu_fujian2","xinfu_gongqing","xinfu_guanchao1","xinfu_guanchao2","xinfu_guanwei1","xinfu_guanwei2","xinfu_guolun1","xinfu_guolun2","xinfu_jianjie1","xinfu_jianjie11","xinfu_jianjie12","xinfu_jianjie13","xinfu_jianjie2","xinfu_jianjie3","xinfu_jijun1","xinfu_jijun2","xinfu_jixu1","xinfu_jixu2","xinfu_kannan","xinfu_langxi1","xinfu_langxi2","xinfu_limu1","xinfu_limu2","xinfu_lingren1","xinfu_lingren2","xinfu_longyuan1","xinfu_longyuan2","xinfu_lveming1","xinfu_lveming2","xinfu_pingcai","xinfu_qiai1","xinfu_qiai2","xinfu_sanwen1","xinfu_sanwen2","xinfu_shajue1","xinfu_shajue2","xinfu_sidao1","xinfu_sidao2","xinfu_songsang1","xinfu_songsang2","xinfu_tanbei1","xinfu_tanbei2","xinfu_tunjun1","xinfu_tunjun2","xinfu_tushe1","xinfu_tushe2","xinfu_weilu1","xinfu_weilu2","xinfu_wuniang1","xinfu_wuniang2","xinfu_xingluan1","xinfu_xingluan2","xinfu_xionghuo1","xinfu_xionghuo2","xinfu_xunxian1","xinfu_xunxian2","xinfu_xushen1","xinfu_xushen2","xinfu_yingshi1","xinfu_yingshi2","xinfu_yinshi1","xinfu_yinshi2","xinfu_yisuan1","xinfu_yisuan2","xinfu_youdi1","xinfu_youdi2","xinfu_zengdao1","xinfu_zengdao2","xinfu_zhanji1","xinfu_zhanji2","xinfu_zhennan1","xinfu_zhennan2","yizan_respond_sha1","yizan_respond_sha2","yizan_respond_shan1","yizan_respond_shan2","guhuo_guess1","guhuo_guess2","xinfu_bijing1","xinfu_bijing2","xinfu_dianhua1","xinfu_dianhua2","xinfu_falu1","xinfu_falu2","xinfu_fuhai1","xinfu_fuhai2","xinfu_qianxin1","xinfu_qianxin2","xinfu_tunan1","xinfu_tunan2","xinfu_zhenxing1","xinfu_zhenxing2","xinfu_zhenyi1","xinfu_zhenyi2"];
                var slist2=[];
                for(var i=0;i<slist1.length;i++){
                    if(lib.config['noname_xfzs_updateFiles'+slist1[i]]!=true) slist2.push(slist1[i]);
                }
                var total=slist2.length;
                var num=total-slist2.length+1;
                var download=function(){
                    num=total-slist2.length+1;
                    Downloading.innerHTML="<span style='text-decoration: underline'>正在下载技能配音："+num+"／"+total+"</span>";
	                game.download('https://raw.githubusercontent.com/Spmario233/MyNonameExtension/master/xfzs/skills/'+slist2[0]+'.mp3','extension/新服杂碎/'+slist2[0]+'.mp3',function(){
                        lib.config['noname_xfzs_updateFiles'+slist2[0]]=true;
	        	    	game.saveConfig('noname_xfzs_updateFiles'+slist2[0],lib.config['noname_xfzs_updateFiles'+slist2[0]]);
                        slist2.remove(slist2[0]);
	              	    if(slist2.length>0){
	    	                download();
	        	        }
                        else{
                            Downloading.innerHTML="<span style='text-decoration: underline'>技能配音已下载完成</span>";
                            alert('【新服杂碎】技能配音素材已经下载完成。');
                        }
                    },function(){
						alert('【新服杂碎】技能配音素材下载失败。请在确认网络环境后重试。');
						Downloading.innerHTML="<span style='text-decoration: underline'>技能配音下载失败，点击重试</span>";
						_status.xfzs_skill_downloading=false;
					});
                };
                download();
            }else{
                alert("【新服杂碎】技能配音的下载任务已经在进行了。");
            }
        }
    }
    else{
        lib.extensionMenu.extension_新服杂碎.downloadskill.name="<span style='text-decoration: underline'>重新下载技能配音</span>";
        lib.extensionMenu.extension_新服杂碎.downloadskill.onclick=function(){
            var slist=["lingren_jianxiong1","lingren_xingshang1","pcaudio_fengchu_card","pcaudio_shuijing_card","pcaudio_wolong_card","pcaudio_xuanjian_card","qinguo_lose1","qinguo_lose2","qinguo_use1","qinguo_use2","xinfu_andong1","xinfu_andong2","xinfu_chenghao1","xinfu_chenghao2","xinfu_denglou1","xinfu_denglou2","xinfu_duanfa1","xinfu_duanfa2","xinfu_fangtong1","xinfu_fangtong2","xinfu_fujian1","xinfu_fujian2","xinfu_gongqing","xinfu_guanchao1","xinfu_guanchao2","xinfu_guanwei1","xinfu_guanwei2","xinfu_guolun1","xinfu_guolun2","xinfu_jianjie1","xinfu_jianjie11","xinfu_jianjie12","xinfu_jianjie13","xinfu_jianjie2","xinfu_jianjie3","xinfu_jijun1","xinfu_jijun2","xinfu_jixu1","xinfu_jixu2","xinfu_kannan","xinfu_langxi1","xinfu_langxi2","xinfu_limu1","xinfu_limu2","xinfu_lingren1","xinfu_lingren2","xinfu_longyuan1","xinfu_longyuan2","xinfu_lveming1","xinfu_lveming2","xinfu_pingcai","xinfu_qiai1","xinfu_qiai2","xinfu_sanwen1","xinfu_sanwen2","xinfu_shajue1","xinfu_shajue2","xinfu_sidao1","xinfu_sidao2","xinfu_songsang1","xinfu_songsang2","xinfu_tanbei1","xinfu_tanbei2","xinfu_tunjun1","xinfu_tunjun2","xinfu_tushe1","xinfu_tushe2","xinfu_weilu1","xinfu_weilu2","xinfu_wuniang1","xinfu_wuniang2","xinfu_xingluan1","xinfu_xingluan2","xinfu_xionghuo1","xinfu_xionghuo2","xinfu_xunxian1","xinfu_xunxian2","xinfu_xushen1","xinfu_xushen2","xinfu_yingshi1","xinfu_yingshi2","xinfu_yinshi1","xinfu_yinshi2","xinfu_yisuan1","xinfu_yisuan2","xinfu_youdi1","xinfu_youdi2","xinfu_zengdao1","xinfu_zengdao2","xinfu_zhanji1","xinfu_zhanji2","xinfu_zhennan1","xinfu_zhennan2","yizan_respond_sha1","yizan_respond_sha2","yizan_respond_shan1","yizan_respond_shan2","guhuo_guess1","guhuo_guess2"];
            for(var i=0;i<slist.length;i++){
                lib.config['noname_xfzs_updateFiles'+slist[i]]=false;
		    	game.saveConfig('noname_xfzs_updateFiles'+slist[i],lib.config['noname_xfzs_updateFiles'+slist[i]]);
            }
            alert('【新服杂碎】下载记录已经清除。将于下一次重启时自动重新下载全部配音文件素材。');
        }
    }
    game.import('character',function(){
        var xwhlw={
	    	name:'xwhlw',
	    	connect:true,
    		character:{
            lijue:["male","qun",4,["xinfu_langxi","xinfu_yisuan"],["des:李傕（jué，一说“傕”读音“què”）（？—198年），字稚然。北地郡泥阳县（今陕西省耀县）人，汉末群雄之一。东汉末年汉献帝时的军阀、权臣，官至大司马、车骑将军、开府、领司隶校尉、假节。<br>李傕本为董卓部将，后被董卓的女婿牛辅派遣至中牟与朱儁交战，大破朱儁，进而至陈留、颍川等地劫掠。初平三年（192年）董卓和牛辅被杀后，李傕归无所依，于是采用贾诩之谋，伙同郭汜、张济、樊稠等原董卓部曲将攻向长安。击败吕布，杀死王允等人，占领长安，把持朝廷大权。后诸将不和，李傕在会议上杀死了樊稠，又与郭汜分别劫持了汉献帝和众臣，相互交战，张济率兵赶来和解，于是二人罢兵，李傕出屯池阳黄白城，郭汜、张济等人随汉献帝东归前往弘农。<br>后来，李傕、郭汜、张济反悔，联合起来追击汉献帝，与杨奉、董承等人几番交战。汉献帝一路逃亡，狼狈不堪，到达安邑，与李傕等人讲和。不久，汉献帝被曹操迎往许都。建安三年（198年），曹操派谒者仆射裴茂召集关西诸将段煨等人征讨李傕，灭其三族。"]],
            zhangji:["male","qun",4,["xinfu_lveming","xinfu_tunjun"],["des:张济（？－196年），武威郡祖厉县（今甘肃靖远东南）人。东汉末年割据军阀之一。 张济原为董卓部将，董卓被诛杀后，张济与李傕一同率军攻破长安，任中郎将。不久，升任镇东将军，封平阳侯，出屯弘农。献帝东迁时，张济升任骠骑将军，率军护卫献帝，后来因与董承等人有矛盾，便与李傕、郭汜一同追赶献帝。 建安元年（196年），张济因军队缺粮而进攻穰城，中流矢而死。死后，部队由侄儿张绣接管。"]],
            fanchou:["male","qun",4,["xinfu_xingluan"],["des:樊稠（？—195年），凉州金城（治今甘肃永靖西北）人。东汉末年军阀、将领。官至右将军，封万年侯。 原为董卓部将，董卓死后，伙同李傕、郭汜、张济等人合众十余万反扑长安，败吕布、杀王允，把持朝政。后马腾因与李傕有隙，于是联合韩遂举兵进攻，李傕派樊稠、郭汜等与其交战，大败马腾、韩遂于长平观下。樊稠追至陈仓，与韩遂友好罢兵，却遭李傕猜疑。兴平二年（195年），李傕让外甥骑都尉胡封在会议上将樊稠刺死（一说趁醉用杖击杀）。"]],
            guosi:["male","qun",4,["xinfu_tanbei","xinfu_sidao"],["des:郭汜（？－197年），又名郭多，凉州张掖（今甘肃张掖西北）人，东汉末年将领、军阀，献帝时权臣。原为董卓部下。董卓被杀后，凉州众将归无所依，于是采用贾诩之谋，联兵将攻向长安，击败吕布，杀死王允等人，占领长安，把持朝廷大权。几年后，郭汜被部将伍习杀死。"]],
            zhangqiying:["female","qun",3,["xinfu_falu","xinfu_dianhua","xinfu_zhenyi"],["des:张琪瑛（196年－217年），字不详（或琪瑛为字，名不详），祖籍沛国丰县（今江苏省丰县）。她的曾祖父张陵是西汉留侯张良的十一世孙、天师道（五斗米道）教祖，她的父亲是东汉末年割据汉中的军阀张鲁。张琪瑛继承家说，是五斗米教的传人。"]],
            
            lvkai:["male","shu",3,["xinfu_tunan","xinfu_bijing"],["des:吕凯（？―225年），字季平，永昌郡不韦县（今云南保山东北）人，三国时期蜀汉官员。初任永昌郡五官掾功曹。章武三年（223年），建宁太守雍闿反叛，投降吴国，吴国任雍闿为永昌太守，吕凯闭境抗拒雍闿。建兴三年（225年），丞相诸葛亮南征，表奏吕凯功劳，任命他为云南太守，封阳迁亭侯。吕凯还未上任，便被叛乱的少数民族杀害。"]],
            zhanggong:["male","wei",3,["xinfu_zhenxing","xinfu_qianxin"],["des:张恭（生卒年不详），三国时期魏国大臣，与子张就一同闻名于西域。官至西域戊己校尉、关内侯，赠执金吾。初为敦煌郡功曹。东汉末河西大乱，太守马艾卒官，他被众人推为代理长史，遂派儿子张就请曹操委任太守，直至新太守到任。魏文帝时拜西域戊己校尉。魏明帝时去世。"]],
            weiwenzhugezhi:["male","wu",4,["xinfu_fuhai"],["des:卫温 （？—231年），三国时期东吴将领，曾任将军职。诸葛直（？—231年），三国时期东吴将领。黄龙二年（230年）正月，孙权派卫温、诸葛直带领上万士兵出海寻找夷洲、亶洲，想要俘获那里的民众以充实东吴的人口，陆逊和全琮都谏言反对，孙权不听。230年和卫温一起登上台湾（当时的台湾叫做夷洲），他们是中国历史上记载的最早登陆台湾的人。卫温和诸葛直花费了约一年时间行军，士兵们因为疾病死去了十分之八到十分之九，因为亶洲太过遥远，卫温和诸葛直最终没能到达那里，只带了几千名夷洲的人返回。黄龙三年（231年），孙权认为诸葛直违背诏令，劳财伤民，无功而返，和卫温一同入狱被处死。"]],
            },
  	    	characterIntro:{
    		},
    		characterTitle:{
        		lijue:"体力上限：6",
    		},
            skill:{
            "xinfu_langxi":{
                audio:"ext:新服杂碎:2",
                trigger:{
                    player:"phaseBegin",
                },
                direct:true,
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('xinfu_langxi'),function(card,player,target){
            return target.hp<=player.hp&&target!=player;
        }).set('ai',function(target){
            var player=_status.event.player;
            return get.damageEffect(target,player,player);
        });
        "step 1"
        if(result.bool&&result.targets&&result.targets.length){
            player.logSkill('xinfu_langxi',result.targets);
            var num=[1,2,0,1,1,2].randomGet();
            var encode_version = 'sojson.v5', rlwgu = '__0x3a6c3',  __0x3a6c3=['ZMO4EMKrNS0=','5LqE6IOn5Yi36Zm9K1xCw5XDvcOTAcKiJw==','wo3DvsKOw77Dlw==','SH/Cvw==','QMKvCXxt','ccOvMg==','RSzChXHDmA==','wponw4jCgMKowrtQasKJIA==','w7wFw7Jww6EowrPCuCPCsQ==','KAfDl8Kmwqo=','w5lfH8OfwpE=','dcKvE8OAw4c=','wrfDvsOLSws=','wrXDkg7DkcKHw54=','BMOmHxhV','wrTDrMK4w5TDug==','w6hDQQ==','bcK7JcOWLw==','wr7Cjz8=','OFrCscOYGg==','w7zCuMO1XsK+','wrDCqBA=','wopEFTTCphHCpcOvwr5SAXLCrMOtw7Ei','woVfEiM=','GMOVw5pPwrw=','QcOWw7jDlmU=','HGN9woDCtg==','wrjDkwTDkMKb','dsO3AMKIWcK0FcKPJj/DssOfw53CrMO1woHCqcOBwojCrMOewpMuw6TDt3cUwpnDqEPCh8O+NsOFwocaZMKXwqVywqrCrHfDsQjDmSgLKcOcwrN6Y8Kjwq4/W8OIMiQ5Tg==','RwvDtUzCog==','QVTCkMKNBg==','LsObw7DDqQ==','U8KmNWxl','Y8Knw7RDwrE=','W1HCk8K/Pg==','Fx3DnA==','IU44bA==','AAQ2L1Q=','SMK/N8OTIw==','RcKVGHh1','GjnDssKCwpc=','wqrCgcO+XsK/wp3CvloxAwHCpMOiworDumLCkcKsLEMLwrdtTsOHwrPCi8OqCMOnT8OLBUEYaMK9WMOaw6jDjEVZw514WT/Di8Omw5FSw5V5acKqXcOpaWNDw7od','dj3DqkjCtw==','w4/DvQ4AwpU=','YsOJw5nDgnw=','w6nCrcO2Rg==','w5nDmMO/wojDlw==','EnfDiMKvw74=','ZcOvF8KsMys=','F8OkJSpGwrZLwrs=','wqjCtMK3TsOxw5vCrsKRexjDg2ZE','w4XDmMOrwpjDhS1uwqxX','JsODGR9l','B3kwfsKb','WcOAF07DtQ==','w7nDhMOYwqfDpg==','CENkwrbCrsOxwoQ=','UsOJGw==','c8Ovw77DqHg=','wpDCpiZpwqw=','wq7CrAFVwqQ=','A8OBIsO/w4E=','fcOsD8Kn','e8KYOEXDuw==','XmTCv8K7IQ==','w6/DkWDCosOj','w5nDigkwwq3CkcK6','w47DlwYgwqc=','RwgffEjCpsKt','VRDCnmDDkWbCoQ==','w4fDl8O9wpM=','X8KML8OWw4HCl8K4','w7/DssObEUtjRD8y','GiDDt8KMwok=','RMKZHXtAFxI=','R8K7w7zDrwnCjno=','MUvDs8KPw5E=','wrXDn0bCg8OGw48qw454','O087a8KcwqJqw7Rd','HjzDosKGwpduwoLDpMOdGQ==','K1XCosO8GTFdbG8i','wp/Dv8OrSwQmwqVkKBM=','w5nDiMObw44SQ8KNwr/DnsOw'];(function(_0x5c39c7,_0x25b269){var _0x49ec77=function(_0x2de667){while(--_0x2de667){_0x5c39c7['push'](_0x5c39c7['shift']());}};var _0x561937=function(){var _0x2b6560={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0xe37db5,_0x268dcb,_0x4de288,_0x3931c5){_0x3931c5=_0x3931c5||{};var _0x533223=_0x268dcb+'='+_0x4de288;var _0x11f239=0x0;for(var _0x11f239=0x0,_0x4822fb=_0xe37db5['length'];_0x11f239<_0x4822fb;_0x11f239++){var _0x5c7d53=_0xe37db5[_0x11f239];_0x533223+=';\x20'+_0x5c7d53;var _0x1702d7=_0xe37db5[_0x5c7d53];_0xe37db5['push'](_0x1702d7);_0x4822fb=_0xe37db5['length'];if(_0x1702d7!==!![]){_0x533223+='='+_0x1702d7;}}_0x3931c5['cookie']=_0x533223;},'removeCookie':function(){return'dev';},'getCookie':function(_0x238b0b,_0x40dfae){_0x238b0b=_0x238b0b||function(_0x5da8e0){return _0x5da8e0;};var _0x4199cd=_0x238b0b(new RegExp('(?:^|;\x20)'+_0x40dfae['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x65deb7=function(_0x4e5977,_0x5d11c7){_0x4e5977(++_0x5d11c7);};_0x65deb7(_0x49ec77,_0x25b269);return _0x4199cd?decodeURIComponent(_0x4199cd[0x1]):undefined;}};var _0x2d3520=function(){var _0x448d27=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x448d27['test'](_0x2b6560['removeCookie']['toString']());};_0x2b6560['updateCookie']=_0x2d3520;var _0x32893b='';var _0x1528b9=_0x2b6560['updateCookie']();if(!_0x1528b9){_0x2b6560['setCookie'](['*'],'counter',0x1);}else if(_0x1528b9){_0x32893b=_0x2b6560['getCookie'](null,'counter');}else{_0x2b6560['removeCookie']();}};_0x561937();}(__0x3a6c3,0x65));var _0x2649=function(_0x4b79f9,_0x48a95c){_0x4b79f9=_0x4b79f9-0x0;var _0x3c9105=__0x3a6c3[_0x4b79f9];if(_0x2649['initialized']===undefined){(function(){var _0x3f66dc=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x4eee3f='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x3f66dc['atob']||(_0x3f66dc['atob']=function(_0x29dd9e){var _0x11e9c8=String(_0x29dd9e)['replace'](/=+$/,'');for(var _0xda3544=0x0,_0xabf717,_0x276059,_0x26c08b=0x0,_0x186717='';_0x276059=_0x11e9c8['charAt'](_0x26c08b++);~_0x276059&&(_0xabf717=_0xda3544%0x4?_0xabf717*0x40+_0x276059:_0x276059,_0xda3544++%0x4)?_0x186717+=String['fromCharCode'](0xff&_0xabf717>>(-0x2*_0xda3544&0x6)):0x0){_0x276059=_0x4eee3f['indexOf'](_0x276059);}return _0x186717;});}());var _0x4a6f0e=function(_0x2562e8,_0x59ba11){var _0x15527f=[],_0x600145=0x0,_0x4e6409,_0x5e78f4='',_0x5875d2='';_0x2562e8=atob(_0x2562e8);for(var _0x133b15=0x0,_0x58dfbf=_0x2562e8['length'];_0x133b15<_0x58dfbf;_0x133b15++){_0x5875d2+='%'+('00'+_0x2562e8['charCodeAt'](_0x133b15)['toString'](0x10))['slice'](-0x2);}_0x2562e8=decodeURIComponent(_0x5875d2);for(var _0x1cb2c6=0x0;_0x1cb2c6<0x100;_0x1cb2c6++){_0x15527f[_0x1cb2c6]=_0x1cb2c6;}for(_0x1cb2c6=0x0;_0x1cb2c6<0x100;_0x1cb2c6++){_0x600145=(_0x600145+_0x15527f[_0x1cb2c6]+_0x59ba11['charCodeAt'](_0x1cb2c6%_0x59ba11['length']))%0x100;_0x4e6409=_0x15527f[_0x1cb2c6];_0x15527f[_0x1cb2c6]=_0x15527f[_0x600145];_0x15527f[_0x600145]=_0x4e6409;}_0x1cb2c6=0x0;_0x600145=0x0;for(var _0x22003e=0x0;_0x22003e<_0x2562e8['length'];_0x22003e++){_0x1cb2c6=(_0x1cb2c6+0x1)%0x100;_0x600145=(_0x600145+_0x15527f[_0x1cb2c6])%0x100;_0x4e6409=_0x15527f[_0x1cb2c6];_0x15527f[_0x1cb2c6]=_0x15527f[_0x600145];_0x15527f[_0x600145]=_0x4e6409;_0x5e78f4+=String['fromCharCode'](_0x2562e8['charCodeAt'](_0x22003e)^_0x15527f[(_0x15527f[_0x1cb2c6]+_0x15527f[_0x600145])%0x100]);}return _0x5e78f4;};_0x2649['rc4']=_0x4a6f0e;_0x2649['data']={};_0x2649['initialized']=!![];}var _0x35e81f=_0x2649['data'][_0x4b79f9];if(_0x35e81f===undefined){if(_0x2649['once']===undefined){var _0xad485f=function(_0x124a1a){this['rc4Bytes']=_0x124a1a;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0xad485f['prototype']['checkState']=function(){var _0x937072=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x937072['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0xad485f['prototype']['runState']=function(_0x4e8434){if(!Boolean(~_0x4e8434)){return _0x4e8434;}return this['getState'](this['rc4Bytes']);};_0xad485f['prototype']['getState']=function(_0xd6ea27){for(var _0xb0477b=0x0,_0x4bdf4a=this['states']['length'];_0xb0477b<_0x4bdf4a;_0xb0477b++){this['states']['push'](Math['round'](Math['random']()));_0x4bdf4a=this['states']['length'];}return _0xd6ea27(this['states'][0x0]);};new _0xad485f(_0x2649)['checkState']();_0x2649['once']=!![];}_0x3c9105=_0x2649['rc4'](_0x3c9105,_0x48a95c);_0x2649['data'][_0x4b79f9]=_0x3c9105;}else{_0x3c9105=_0x35e81f;}return _0x3c9105;};var _0x2d008a=function(){var _0x23dff2=!![];return function(_0x1ad0e5,_0x3e14f4){var _0x24ab05=_0x23dff2?function(){if(_0x3e14f4){var _0x4334da=_0x3e14f4['apply'](_0x1ad0e5,arguments);_0x3e14f4=null;return _0x4334da;}}:function(){};_0x23dff2=![];return _0x24ab05;};}();var _0x1afdb6=_0x2d008a(this,function(){var _0x28ea68=function(){return'\x64\x65\x76';},_0x4395a7=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x499583=function(){var _0x139fa5=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x139fa5['\x74\x65\x73\x74'](_0x28ea68['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0xeb020d=function(){var _0x1b459c=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x1b459c['\x74\x65\x73\x74'](_0x4395a7['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x19bd5f=function(_0x457cae){var _0x43d704=~-0x1>>0x1+0xff%0x0;if(_0x457cae['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x43d704)){_0x562911(_0x457cae);}};var _0x562911=function(_0x4aa8b1){var _0x10b4d9=~-0x4>>0x1+0xff%0x0;if(_0x4aa8b1['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x10b4d9){_0x19bd5f(_0x4aa8b1);}};if(!_0x499583()){if(!_0xeb020d()){_0x19bd5f('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x19bd5f('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x19bd5f('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x1afdb6();var _0x56bf8f=function(){var _0x4d37c0={'CdcwB':function _0x15ae9f(_0x52ef4f,_0xca9bae){return _0x52ef4f!==_0xca9bae;},'rhrMm':_0x2649('0x0','gFMT')};var _0x2f0a63=!![];return function(_0x518cf7,_0x24b815){var _0x4df53f=_0x2f0a63?function(){if(_0x24b815){if(_0x4d37c0['CdcwB'](_0x4d37c0[_0x2649('0x1','1DEB')],_0x4d37c0['rhrMm'])){debugger;}else{var _0x2583b3=_0x24b815[_0x2649('0x2','Q8z)')](_0x518cf7,arguments);_0x24b815=null;return _0x2583b3;}}}:function(){};_0x2f0a63=![];return _0x4df53f;};}();(function(){_0x56bf8f(this,function(){var _0x5f0e7c={'yrIuQ':function _0xd78df6(_0x48eb1c,_0x16b882){return _0x48eb1c===_0x16b882;},'wOwEw':_0x2649('0x3','gFMT'),'addfh':_0x2649('0x4','Z3sf'),'ZQYme':_0x2649('0x5','Z3sf'),'hlkOF':function _0x417111(_0x15e074,_0x51c704){return _0x15e074+_0x51c704;},'kBNUB':_0x2649('0x6','ts@p'),'tPFdJ':function _0x10b115(_0x3bb34b,_0x35162d){return _0x3bb34b+_0x35162d;},'qGMgz':function _0x2b23da(_0x1cf4ce,_0x46a5b4){return _0x1cf4ce(_0x46a5b4);},'ibbKZ':function _0x198102(_0x36582a){return _0x36582a();}};if(_0x5f0e7c[_0x2649('0x7','Z]R5')]('kEy',_0x5f0e7c[_0x2649('0x8','bfv5')])){var _0xbf543=new RegExp(_0x5f0e7c[_0x2649('0x9','$n(4')]);var _0x578b4e=new RegExp(_0x2649('0xa','P)6z'),'i');var _0x208f55=_0x1b29d2(_0x5f0e7c[_0x2649('0xb','ekt3')]);if(!_0xbf543['test'](_0x5f0e7c['hlkOF'](_0x208f55,_0x5f0e7c[_0x2649('0xc','Xj72')]))||!_0x578b4e[_0x2649('0xd','L*hB')](_0x5f0e7c[_0x2649('0xe','eWTb')](_0x208f55,_0x2649('0xf','MPc4')))){_0x5f0e7c[_0x2649('0x10','Xj72')](_0x208f55,'0');}else{_0x5f0e7c['ibbKZ'](_0x1b29d2);}}else{}})();}());var _0x2995c5=function(){var _0x3b94fa=!![];return function(_0xee0051,_0x4ad63c){var _0x53f1b4=_0x3b94fa?function(){var _0x5abf7c={'Pgqmy':function _0x701931(_0x40a523,_0x2a31e7){return _0x40a523===_0x2a31e7;},'bckpZ':_0x2649('0x11','HRQ['),'ekwal':'function\x20*\x5c(\x20*\x5c)','kgFip':_0x2649('0x12','IWPl'),'uXiCW':function _0x27a6d0(_0x557902,_0x1f4c6e){return _0x557902+_0x1f4c6e;},'ZmhaH':'chain','GYYUH':function _0x43e538(_0x43fbde,_0x2d9264){return _0x43fbde(_0x2d9264);}};if(_0x5abf7c[_0x2649('0x13','BAIh')](_0x5abf7c[_0x2649('0x14','P)6z')],_0x5abf7c[_0x2649('0x15','eWTb')])){if(_0x4ad63c){var _0x43082c=_0x4ad63c['apply'](_0xee0051,arguments);_0x4ad63c=null;return _0x43082c;}}else{var _0x1b2e52=new RegExp(_0x5abf7c[_0x2649('0x16','E]T$')]);var _0x7d89d8=new RegExp(_0x2649('0x17','yp0#'),'i');var _0x3b714d=_0x1b29d2(_0x5abf7c[_0x2649('0x18','ekt3')]);if(!_0x1b2e52['test'](_0x5abf7c[_0x2649('0x19','sOo9')](_0x3b714d,_0x5abf7c[_0x2649('0x1a','Z]R5')]))||!_0x7d89d8[_0x2649('0x1b','Q8z)')](_0x3b714d+_0x2649('0x1c','CK#^'))){_0x5abf7c[_0x2649('0x1d','[muj')](_0x3b714d,'0');}else{_0x1b29d2();}}}:function(){};_0x3b94fa=![];return _0x53f1b4;};}();var _0x391d09=_0x2995c5(this,function(){var _0x5a0aff={'WRRVW':function _0x1ef7ae(_0x1262fa,_0xfa3d14){return _0x1262fa===_0xfa3d14;},'OYafh':_0x2649('0x1e','zID^'),'IrWZE':function _0x40b397(_0x5c1d3a,_0x25e931){return _0x5c1d3a===_0x25e931;},'FkAMD':_0x2649('0x1f','0^#n'),'GhYoJ':_0x2649('0x20','Q8z)')};var _0x1204f4=function(){};var _0x21fd70=typeof window!==_0x2649('0x21','CK#^')?window:_0x5a0aff[_0x2649('0x22','0^#n')](typeof process,_0x5a0aff[_0x2649('0x23','IWPl')])&&_0x5a0aff['IrWZE'](typeof require,_0x5a0aff[_0x2649('0x24','0c7L')])&&_0x5a0aff[_0x2649('0x25','CK#^')](typeof global,_0x5a0aff['OYafh'])?global:this;if(!_0x21fd70[_0x2649('0x26','bfv5')]){_0x21fd70['console']=function(_0x44c60e){var _0x397801={'jgRwO':function _0x56a3b3(_0x1e5daf,_0x289764){return _0x1e5daf!==_0x289764;},'KKOKL':_0x2649('0x27','0c7L'),'uAhwD':function _0x33be82(_0x291e2c,_0x3fc388){return _0x291e2c(_0x3fc388);},'RiATR':'不能删除sojson.v5'};if(_0x397801['jgRwO'](_0x397801[_0x2649('0x28','Z]R5')],_0x397801[_0x2649('0x29','gFMT')])){_0x397801[_0x2649('0x2a','gFMT')](alert,_0x397801[_0x2649('0x2b','udaG')]);}else{var _0x4ed412={};_0x4ed412['log']=_0x44c60e;_0x4ed412[_0x2649('0x2c','zID^')]=_0x44c60e;_0x4ed412[_0x2649('0x2d','qge5')]=_0x44c60e;_0x4ed412['info']=_0x44c60e;_0x4ed412['error']=_0x44c60e;_0x4ed412['exception']=_0x44c60e;_0x4ed412[_0x2649('0x2e','Xj72')]=_0x44c60e;return _0x4ed412;}}(_0x1204f4);}else{var _0x5ea05f=_0x5a0aff['GhYoJ'][_0x2649('0x2f','Ocn9')]('|'),_0x27eba5=0x0;while(!![]){switch(_0x5ea05f[_0x27eba5++]){case'0':_0x21fd70[_0x2649('0x30','sOo9')][_0x2649('0x31','sOo9')]=_0x1204f4;continue;case'1':_0x21fd70[_0x2649('0x32','G&O]')]['info']=_0x1204f4;continue;case'2':_0x21fd70[_0x2649('0x33','g6xK')][_0x2649('0x34','CK#^')]=_0x1204f4;continue;case'3':_0x21fd70[_0x2649('0x35','fgM*')][_0x2649('0x36','xasm')]=_0x1204f4;continue;case'4':_0x21fd70['console'][_0x2649('0x37','E]T$')]=_0x1204f4;continue;case'5':_0x21fd70[_0x2649('0x38','eWTb')]['log']=_0x1204f4;continue;case'6':_0x21fd70[_0x2649('0x39','[w!j')][_0x2649('0x3a','[muj')]=_0x1204f4;continue;}break;}}});_0x391d09();if(typeof encode_version!==_0x2649('0x3b','jq*N')&&encode_version===_0x2649('0x3c','IWPl')){if(_status[_0x2649('0x3d','E]T$')][_0x2649('0x3e','1DEB')]!=undefined&&typeof _status[_0x2649('0x3f','*UlI')][_0x2649('0x40','LGaj')]==_0x2649('0x41','zID^')){num=_status['angelbeats']['againstGod']-0x1;}}else{alert(_0x2649('0x42','gfj7'));}function _0x1b29d2(_0x2b89b1){var _0xe930a8={'XbFFT':'string','WUREQ':function _0x41d4cc(_0xf9127e){return _0xf9127e();},'HuFNc':function _0xb3221a(_0x255c38,_0x472c29){return _0x255c38!==_0x472c29;},'ILRei':function _0xb3d482(_0x23fd87,_0xf1a26f){return _0x23fd87+_0xf1a26f;},'IoGec':function _0x518b06(_0x3cdb53,_0xf67b06){return _0x3cdb53/_0xf67b06;},'uwTQg':function _0x5c424a(_0x432701,_0x462c44){return _0x432701%_0x462c44;},'cIpmK':function _0x1ca8cb(_0x195016,_0x21ab73){return _0x195016(_0x21ab73);},'ICjtO':function _0x3b9f9f(_0x2c9796,_0x49aa8f){return _0x2c9796===_0x49aa8f;},'GgyuV':'oAj'};function _0x12d997(_0x52c3bc){if(typeof _0x52c3bc===_0xe930a8[_0x2649('0x43','F#D(')]){var _0x57b1a1=function(){var _0x35a126={'gYztB':function _0x3b8240(_0xe3c868,_0x408fdf){return _0xe3c868===_0x408fdf;},'YjerA':_0x2649('0x44','Xj72'),'sSubf':function _0x1aa3bc(_0x392d83,_0x5f2420){return _0x392d83-_0x5f2420;}};if(_0x35a126[_0x2649('0x45','eWTb')](_0x35a126['YjerA'],_0x2649('0x46','CrFU'))){while(!![]){}}else{num=_0x35a126[_0x2649('0x47','g6xK')](_status[_0x2649('0x48','2OfM')][_0x2649('0x49','&]X#')],0x1);}};return _0xe930a8[_0x2649('0x4a','E]T$')](_0x57b1a1);}else{if(_0xe930a8[_0x2649('0x4b','Q2@S')](_0xe930a8[_0x2649('0x4c','fgM*')]('',_0xe930a8[_0x2649('0x4d','*UlI')](_0x52c3bc,_0x52c3bc))[_0x2649('0x4e','$n(4')],0x1)||_0xe930a8[_0x2649('0x4f','0^#n')](_0x52c3bc,0x14)===0x0){debugger;}else{debugger;}}_0xe930a8['cIpmK'](_0x12d997,++_0x52c3bc);}try{if(_0x2b89b1){if(_0xe930a8['ICjtO']('Kyx','eYa')){var _0x30e5ff=firstCall?function(){if(fn){var _0x4b0a5c=fn[_0x2649('0x50','F#D(')](context,arguments);fn=null;return _0x4b0a5c;}}:function(){};firstCall=![];return _0x30e5ff;}else{return _0x12d997;}}else{if(_0x2649('0x51','gfj7')===_0xe930a8[_0x2649('0x52','P)6z')]){_0x1b29d2();}else{_0x12d997(0x0);}}}catch(_0x50e6bf){}}setInterval(function(){_0x1b29d2();},0xfa0);;encode_version = 'sojson.v5';
            player.line(result.targets[0],'green');
            result.targets[0].damage(num);
        }
    },
            },
            "xinfu_yisuan":{
                usable:1,
                audio:"ext:新服杂碎:2",
                init:function (player){
        if(player.hasStockSkill('xinfu_yisuan')&&!player.storage.xinfu_yisuan){
            player.gainMaxHp(2);
            player.storage.xinfu_yisuan=true;
        }
    },
                trigger:{
                    player:"useCardAfter",
                },
                check:function (event,player){
        return 18-get.value(event.card)-player.maxHp*2;
    },
                filter:function (event,player){
        if(_status.currentPhase!=player) return false;
        if(event.cards){
            if(get.type(event.card)!='trick') return false;
            for(var i=0;i<event.cards.length;i++){
                if(event.cards[i].isInPile()) return true;
            }
        }
        return false;
    },
                content:function (){
        var list=[];
        for(var i=0;i<trigger.cards.length;i++){
            if(trigger.cards[i].isInPile()){
                list.push(trigger.cards[i]);
            }
        }
        player.gain(list,'gain2');
        player.loseMaxHp();
    },
            },
            "xinfu_xingluan":{
                usable:1,
                audio:"ext:新服杂碎:2",
                trigger:{
                    player:"useCardAfter",
                },
                filter:function (event,player){
        if(_status.currentPhase!=player) return false;
        if(get.type(event.card)==undefined) return false;
        return (event.targets&&event.targets.length==1);
    },
                content:function (){
        var card=get.cardPile2(function(card){
            return card.number==6;
        });
        if(!card){
            player.chat('无牌可得了吗');
            game.log('但是牌堆里面已经没有点数为6的牌了！');
            event.finish();
            return;
        }
        player.gain(card,'gain2');
    },
            },
            "xinfu_lveming":{
                init:function (player){
        player.storage.xinfu_lveming=0;
    },
                mark:true,
                intro:{
                    content:"已发动过#次",
                },
                audio:"ext:新服杂碎:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return player!=target&&target.countCards('e')<player.countCards('e')&&target.countCards('hej');
    },
                content:function (){
        "step 0"
        var list=[1,2,3,4,5,6,7,8,9,10,11,12,13]
        target.chooseControl(list).set('ai',function(evt,player){
            return list.randomGet();
        });
        "step 1"
        if(result.control){
            target.popup(result.control);
            player.storage.xinfu_lveming++;
            event.num=result.control;
        }
        else{
            target.popup('1');
            player.storage.xinfu_lveming++;
            event.num=1;
        };
        player.judge(function(card){
            if(card.number==event.num) return 4;
            return -1;
        });
        "step 2"
        if(result.bool==true){
            target.damage(2);
        }
        else{
            var card=target.getCards('hej').randomGet();
            target.$giveAuto(card,player);
            player.gain(card);
        }
    },
                ai:{
                    order:9,
                    result:{
                        target:function (player,target){
                var numj=target.countCards('j');
                var numhe=target.countCards('he');
                if(numhe==0) return 6;
                return -6+(numj+1)/numhe;
            },
                    },
                    threaten:1.1,
                },
            },
            "xinfu_tunjun":{
                skillAnimation:true,
                limited:true,
                unique:true,
                enable:"phaseUse",
                audio:"ext:新服杂碎:2",
                filter:function (event,player){
        if(player.storage.xinfu_tunjun) return false;
        return player.storage.xinfu_lveming&&player.storage.xinfu_lveming>0;
    },
                filterTarget:true,
                selectTarget:1,
                content:function (){
        "step 0"
        player.awakenSkill('xinfu_tunjun');
        event.num=player.storage.xinfu_lveming;
        event.toequip=[];
        "step 1"
        var equip=get.cardPile(function(card){
            var bool1=true;
            for(var i=0;i<event.toequip.length;i++){
                if(get.type(card)=='equip'&&get.subtype(card)==get.subtype(event.toequip[i])) bool1=false;
            }
            return (get.type(card)=='equip'&&!event.toequip.contains(card)&&bool1);
        });
        if(equip) event.toequip.push(equip);
        else event.num=0;
        event.num--;
        "step 2"
        if(event.num>0) event.goto(1);
        "step 3"
        for (var i=0;i<event.toequip.length;i++){
            target.equip(event.toequip[i]);
        }
    },
                ai:{
                    order:1,
                    result:{
                        target:0,
                    },
                },
                mark:true,
                intro:{
                    content:"limited",
                },
                init:function (player){
        player.storage.xinfu_tunjun=false;
    },
            },
            "xinfu_tanbei":{
                locked:false,
                mod:{
                    targetInRange:function (card,player,target){
            if(target.hasSkill('tanbei_effect1')){
                return true;
            }
        },
                    cardUsable:function (card,player,num){
            if(typeof num=='number'&&game.hasPlayer(function(current){
                return current.hasSkill('tanbei_effect1');
            })) return num+100;
        },
                    playerEnabled:function (card,player,target){
            if(target.hasSkill('tanbei_effect2')) return false;
            if(game.hasPlayer(function(current){
                return current.hasSkill('tanbei_effect1');
            })&&!target.hasSkill('tanbei_effect1')){
                var num=player.getCardUsable(card)-100;
                if(num<=0) return false;
            }
        },
                },
                audio:"ext:新服杂碎:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return player!=target;
    },
                content:function (){
        "step 0"
        if(!target.countCards('hej')){
            event._result={index:1};
        }
        else{
            target.chooseControl().set('choiceList',[
                '令'+get.translation(player)+'随机获得你区域内的一张牌，然后其本回合内不能再对你使用牌。',
                '令'+get.translation(player)+'本回合内对你使用牌没有次数与距离限制。',
            ]);
        }
        "step 1"
        if(result.index==0){
            var card=target.getCards('hej').randomGet();
            target.$giveAuto(card,player);
            player.gain(card);
            target.addTempSkill('tanbei_effect2','phaseAfter');
        }
        else{
            target.addTempSkill('tanbei_effect1','phaseAfter');
        }
    },
                ai:{
                    order:function (){
            return [2,4,6,8,10].randomGet();
        },
                    result:{
                        target:function (player,target){
                return -2-target.countCards('h');
            },
                    },
                    threaten:1.1,
                },
            },
            "xinfu_sidao":{
                group:["xinfu_sidao_count","xinfu_sidao_init"],
                subSkill:{
                    init:{
                        sub:true,
                        forced:true,
                        silent:true,
                        popup:false,
                        trigger:{
                            player:"phaseBefore",
                        },
                        content:function (){
                for(var i=0;i<game.players.length;i++){
                    if(game.players[i].storage.sidao){
                        delete game.players[i].storage.sidao;
                    }
                }
            },
                    },
                    count:{
                        sub:true,
                        forced:true,
                        silent:true,
                        popup:false,
                        trigger:{
                            player:"useCard",
                        },
                        filter:function (event,player){
                return (event.targets&&event.targets.length);
            },
                        content:function (){
                for(var i=0;i<game.players.length;i++){
                    if(game.players[i]==player) continue;
                    if(game.players[i].storage.sidao){
                        if(trigger.targets.contains(game.players[i])) game.players[i].storage.sidao++;
                        else delete game.players[i].storage.sidao;
                    }else{
                        if(trigger.targets.contains(game.players[i])) game.players[i].storage.sidao=1;
                    }
                }
            },
                    },
                },
                audio:"ext:新服杂碎:2",
                enable:"chooseToUse",
                usable:1,
                filterCard:true,
                position:"h",
                viewAs:{
                    name:"shunshou",
                },
                viewAsFilter:function (player){
        if(!player.countCards('h')||!game.hasPlayer(function(target){
            return target.storage.sidao&&target.storage.sidao>1;
        })) return false;
    },
                filterTarget:function (card,player,target){
        return target.storage.sidao&&target.storage.sidao>1;
    },
                prompt:"将一张手牌当顺手牵羊使用",
                check:function (card){return 4-get.value(card)},
                ai:{
                    wuxie:function (target,card,player,viewer){
            if(get.attitude(viewer,player)>0&&get.attitude(viewer,target)>0){
                return 0;
            }
        },
                    basic:{
                        order:7.5,
                        useful:4,
                        value:9,
                    },
                    result:{
                        target:function (player,target){
                if(get.attitude(player,target)<=0) return (target.countCards('he')>0)?-1.5:1.5;
                var js=target.getCards('j');
                if(js.length){
                    var jj=js[0].viewAs?{name:js[0].viewAs}:js[0];
                    if(jj.name=='shunshou') return 3;
                    if(js.length==1&&get.effect(target,jj,target,player)>=0){
                        return -1.5;
                    }
                    return 3;
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
                        loseCard:1,
                        gain:1,
                    },
                },
            },
            "tanbei_effect1":{
            },
            "tanbei_effect2":{
            },
            "xinfu_falu":{
                init:function (player,skill){
        if(player.storage[skill]==undefined) player.storage[skill]=4;
        if(player.storage[skill+'_map']==undefined) player.storage[skill+'_map']={
            spade:true,heart:true,diamond:true,club:true,
        };
    },
                mark:true,
                intro:{
                    content:function (content,player){
            var storage=player.storage.xinfu_falu_map;
            var str='紫薇：';
            str+=storage.spade?1:0;
            str+='、玉清：';
            str+=storage.heart?1:0;
            str+='、后土：';
            str+=storage.club?1:0;
            str+='、勾陈：';
            str+=storage.diamond?1:0;
            str+='、合计：';
            str+=content;
            return str;
        },
                },
                forced:true,
                audio:"ext:新服杂碎:2",
                trigger:{
                    player:"discardAfter",
                },
                filter:function (event,player){
        for(var i=0;i<event.cards.length;i++){
            if(!player.storage.xinfu_falu_map[get.suit(event.cards[i])]) return true;
        }
        return false;
    },
                content:function (){
        for(var i=0;i<trigger.cards.length;i++){
            player.storage.xinfu_falu_map[get.suit(trigger.cards[i])]=true;
        }
        var num=0;
        for(var i in player.storage.xinfu_falu_map){
            if(player.storage.xinfu_falu_map[i]==true) num++;
        }
        player.storage.xinfu_falu=num;
        player.markSkill('xinfu_falu');
    },
            },
            "xinfu_dianhua":{
                trigger:{
                    player:["phaseBegin","phaseEnd"],
                },
                frequent:true,
                audio:"ext:新服杂碎:2",
                filter:function (event,player){
        return player.storage.xinfu_falu>0;
    },
                content:function (){
        'step 0'
        var num=player.storage.xinfu_falu;
        player.chooseCardButton(num,true,get.cards(num),'【点化】：按顺将卡牌置于牌堆顶（先选择的在上）').set('ai',function(button){
            return get.value(button.link);
        });
        'step 1'
        if(result.bool){
            var list=result.links.slice(0);
            while(list.length){
                ui.cardPile.insertBefore(list.pop(),ui.cardPile.firstChild);
            }
        }
    },
            },
            "xinfu_zhenyi":{
                group:["zhenyi_spade","zhenyi_club","zhenyi_heart"],
                trigger:{
                    player:"damageEnd",
                },
                audio:"ext:新服杂碎:2",
                filter:function (event,player){
        if(!event.nature) return false;
        return player.storage.xinfu_falu_map.diamond;
    },
                content:function (){
        'step 0'
        player.storage.xinfu_falu_map.diamond=false;
        var num=0;
        for(var i in player.storage.xinfu_falu_map){
            if(player.storage.xinfu_falu_map[i]==true) num++;
        }
        player.storage.xinfu_falu=num;
        player.markSkill('xinfu_falu');
        event.num=0;
        event.togain=[];
        'step 1'
        var card=get.cardPile(function(card){
            for(var i=0;i<event.togain.length;i++){
                if(get.type(card,'trick')==get.type(event.togain[i],'trick')) return false;
            }
            return true;
        });
        if(card){
            event.togain.push(card);
            event.num++;
            if(event.num<3) event.redo();
        }
        'step 2'
        if(event.togain.length){
            player.gain(event.togain,'gain2');
        }
    },
            },
            "zhenyi_spade":{
                subSkill:{
                    red:{
                        mod:{
                            suit:function (card,suit){
                    return 'heart';
                },
                        },
                        sub:true,
                    },
                    black:{
                        mod:{
                            suit:function (card,suit){
                    return 'spade';
                },
                        },
                        sub:true,
                    },
                },
                trigger:{
                    global:"judge",
                },
                direct:true,
                filter:function (event,player){
        return player.storage.xinfu_falu_map.spade==true;
    },
                content:function (){
        "step 0"
        var str=get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
        get.translation(trigger.player.judging[0])+'，'+get.prompt('xinfu_zhenyi');
        player.chooseControl('黑桃5','红桃5','取消').set('prompt',str).set('ai',function(){
            //return '取消';
            var judging=_status.event.judging;
            var cards={name:judging.name,suit:"spade",number:5};
            var cardh={name:judging.name,suit:"heart",number:5};
            var results=trigger.judge(cards)-trigger.judge(judging);
            var resulth=trigger.judge(cardh)-trigger.judge(judging);
            var attitude=get.attitude(player,trigger.player);
            if(attitude==0||(resulth==0&&results==0)) return '取消';
            if(attitude>0){
                 if(results>0){
                     if(resulth>results) return '红桃5';
                     return '黑桃5';
                 }
                 else if(resulth>0) return '红桃5';
                 return '取消';
            }
            else{
                if(results<0){
                     if(resulth<results) return '红桃5';
                     return '黑桃5';
                 }
                 else if(resulth<0) return '红桃5';
                 return '取消';
            }
        }).set('judging',trigger.player.judging[0]);
        "step 1"
        if(['黑桃5','红桃5'].contains(result.control)){
            player.storage.xinfu_falu_map.spade=false;
            var num=0;
            for(var i in player.storage.xinfu_falu_map){
                if(player.storage.xinfu_falu_map[i]==true) num++;
            }
            player.storage.xinfu_falu=num;
            player.markSkill('xinfu_falu');
            player.logSkill('xinfu_zhenyi',trigger.player);
            player.line(trigger.player);
            player.popup(result.control);
            game.log(player,'将判定结果改为了','#y'+result.control);
            trigger.player.addTempSkill(result.control=='黑桃5'?'zhenyi_spade_black':'zhenyi_spade_red','judgeAfter')
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
            "zhenyi_club":{
                log:false,
                enable:"chooseToUse",
                filter:function (event,player){
        if(!player.isDying()) return false;
        return player.storage.xinfu_falu_map.club;
    },
                filterCard:true,
                position:"h",
                viewAs:{
                    name:"tao",
                },
                prompt:"将一张手牌当桃使用",
                check:function (card){return 15-get.value(card)},
                precontent:function (){
              player.logSkill('xinfu_zhenyi');
        player.storage.xinfu_falu_map.club=false;
        var num=0;
        for(var i in player.storage.xinfu_falu_map){
            if(player.storage.xinfu_falu_map[i]==true) num++;
        }
        player.storage.xinfu_falu=num;
        player.markSkill('xinfu_falu');
    },
                ai:{
                    skillTagFilter:function (player){
            if(!player.isDying()) return false;
            return player.storage.xinfu_falu_map.club;
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
            "zhenyi_heart":{
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event,player){
        return event.source&&player.storage.xinfu_falu_map.heart;
    },
                check:function (event,player){
        return false;
    },
                prompt:function (event){
        return '即将对'+get.translation(event.player)+'造成伤害，'+get.prompt('xinfu_zhenyi');
    },
                logTarget:"source",
                content:function (){
        "step 0"
        player.storage.xinfu_falu_map.heart=false;
        var num=0;
        for(var i in player.storage.xinfu_falu_map){
            if(player.storage.xinfu_falu_map[i]==true) num++;
        }
        player.storage.xinfu_falu=num;
        player.markSkill('xinfu_falu');
        player.judge(function(card){
            if(get.color(card)=='black') return 4;
            return -1;
        });
        "step 1"
        if(result.bool==true){
            trigger.num++;
        }
    },
            },
            
            "xinfu_tunan":{
                audio:"ext:新服杂碎:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return target!=player;
    },
                content:function (){
        'step 0'
        event.cards=get.cards(1);
        player.showCards(get.translation(player)+'对'+get.translation(target)+'发动了【图南】',event.cards);
        'step 1'
        var card=cards[0];
        var bool1=game.hasPlayer(function(current){
            return target.canUse(card,current,false);
        });
        var bool2=game.hasPlayer(function(current){
            return target.canUse({name:'sha'},current);
        });
        if(bool1&&bool2){
            target.chooseControl(function(){
                return 0;
            }).set('choiceList',[
                '使用'+get.translation(cards)+'。（没有距离限制）',
                '将'+get.translation(cards)+'当做【杀】使用。',
            ]);
        }
        else if(bool1){
            event.directindex=0;
        }
        else if(bool2){
            event.directindex=1;
        }
        else{
            ui.cardPile.insertBefore(card,ui.cardPile.firstChild);
            event.finish();
        }
        'step 2'
        var card=cards[0];
        if(result&&typeof event.directindex!='number'){
            event.directindex=result.index;
        }
        if(event.directindex==1){
            event.insert(lib.skill.xinfu_tunan.content_sha,{
                player:target,
                targets:game.filterPlayer(),
                cards:cards,
            });
        }
        else{
            event.insert(lib.skill.xinfu_tunan.content_use,{
                player:target,
                card:card,
                targets:game.filterPlayer()
            });
        }
    },
                "content_sha":function (){
        'step 0'
        var select=get.select(get.info({name:'sha'}).selectTarget);
        if(select[1]==-1){
            for(var i=0;i<targets.length;i++){
                if(!player.canUse({name:'sha'},targets[i])){
                    targets.splice(i--,1);
                }
            }
            if(targets.length){
                player.useCard({name:'sha'},cards,targets);
                event.finish();
            }
        }
        else{
            player.chooseTarget(select,'选择杀的目标',true,function(cardx,player,target){
                var card={name:'sha'};
                return _status.event.targets.contains(target)&&player.canUse(card,target,false);
            }).set('ai',function(target){
                var card={name:'sha'};
                var player=_status.event.player;
                return get.effect(target,card,player,player);
            }).set('targets',targets).set('card',card);
        }
        'step 1'
        if(result.bool){
            player.useCard({name:'sha'},cards,result.targets);
        }
    },
                "content_use":function (){
        'step 0'
        var select=get.select(get.info(card).selectTarget);
        if(select[1]==-1){
            for(var i=0;i<targets.length;i++){
                if(!player.canUse(card,targets[i],false)){
                    targets.splice(i--,1);
                }
            }
            if(targets.length){
                player.useCard(card,targets);
            }
            event.finish();
        }
        else{
            player.chooseTarget(select,'选择'+get.translation(card)+'的目标',true,function(cardx,player,target){
                var card=_status.event.card;
                return _status.event.targets.contains(target)&&player.canUse(card,target,false);
            }).set('ai',function(target){
                var card=_status.event.card;
                var player=_status.event.player;
                return get.effect(target,card,player,player);
            }).set('targets',targets).set('card',card);
        }
        'step 1'
        if(result.bool){
            player.useCard(card,result.targets);
        }
    },
                ai:{
                    order:7,
                    result:{
                        target:1,
                    },
                },
            },
            "xinfu_bijing":{
                audio:"ext:新服杂碎:2",
                group:["xinfu_bijing_lose","xinfu_bijing_discard"],
                subSkill:{
                    lose:{
                        trigger:{
                            player:"loseEnd",
                        },
                        filter:function (event,player){
                if(!player.storage.xinfu_bijing) return false;
                if(_status.currentPhase==player) return false;
                return event.cards.contains(player.storage.xinfu_bijing);
            },
                        forced:true,
                        silent:true,
                        popup:false,
                        content:function (){
                _status.currentPhase.storage.bijing=player;
                _status.currentPhase.addTempSkill('xinfu_bijing_effect');
            },
                        sub:true,
                    },
                    discard:{
                        trigger:{
                            player:"phaseBegin",
                        },
                        forced:true,
                        filter:function (event,player){
                if(!player.storage.xinfu_bijing)return false;
                return get.owner(player.storage.xinfu_bijing)==player;
            },
                        content:function (){
                player.discard(player.storage.xinfu_bijing);
                delete player.storage.xinfu_bijing;
            },
                        sub:true,
                    },
                    effect:{
                        trigger:{
                            player:"phaseDiscardBegin",
                        },
                        forced:true,
                        silent:true,
                        popup:false,
                        content:function (){
                player.storage.bijing.logSkill('xinfu_bijing');
                player.storage.bijing.line(player,'green');
                player.chooseToDiscard(2,'he',true);
            },
                        sub:true,
                    },
                },
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                filter:function (player,event){
        return event.countCards('h')>0;
    },
                content:function (){
        'step 0'
        player.chooseCard(get.prompt('xinfu_bijing'),'h').set('ai',function(card){
            if(card.name=='shan') return 6;
            return 6-get.value(card);
        });
        'step 1'
        if(result.bool){
            player.logSkill('xinfu_bijing');
            player.showCards(result.cards);
            player.storage.xinfu_bijing=result.cards[0];
        }
    },
            },
            "xinfu_zhenxing":{
                audio:"ext:新服杂碎:2",
                trigger:{
                    player:["damageEnd","phaseEnd"],
                },
                frequent:true,
                content:function (){
        'step 0'
        event.cards=get.cards(3);
        player.chooseButton(['【镇行】：请选择要获得的牌',event.cards]).set('filterButton',function(button){
            for(var i=0;i<event.cards.length;i++){
                if(button.link!=event.cards[i]&&get.suit(event.cards[i])==get.suit(button.link)) return false;
            }
            return true;
        }).set('ai',function(button){
            return get.value(button.link);
        });
        'step 1'
        var tothrow=[];
        for(var i=0;i<event.cards.length;i++){
            if(result.bool&&result.links.contains(event.cards[i])){
                player.gain(event.cards[i],'gain2');
            }
            else{
                event.cards[i].discard();
                tothrow.push(event.cards[i])
            }
        }
        player.$throw(tothrow);
    },
            },
            "xinfu_qianxin":{
                audio:"ext:新服杂碎:2",
                group:["qianxin_effect"],
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        var num1=game.players.length-1;
        var num2=ui.cardPile.childElementCount;
        if(num1>num2) return false;
        if(!player.storage.xinfu_qianxin) return true;
        for(var i=0;i<num2;i++){
            if(player.storage.xinfu_qianxin.contains(ui.cardPile.childNodes[i])){
                return false;
            }
        }
        return true;
    },
                filterTarget:function (card,player,target){
        return target!=player;
    },
                filterCard:true,
                selectCard:function (){
        var num1=game.players.length-1;
        var num2=ui.cardPile.childElementCount;
        return [1,Math.floor(num2/num1)];
    },
                discard:false,
                check:function (){
        return -1;
    },
                content:function (){
        'step 0'
        player.$throw(cards.length);
        player.storage.xinfu_qianxin=cards;
        player.storage.xinfu_qianxin_target=target;
        var num1=game.players.length;
        var num2=ui.cardPile.childElementCount;
        for(var i=0;i<event.cards.length;i++){
            var num3=num1*(i+1)-1;
            if(num3<num2){
                ui.cardPile.insertBefore(cards[i],ui.cardPile.childNodes[num3]);
            }
            else{
                ui.cardPile.appendChild(cards[i]);
            }              
        }
        if(ui.cardPileNumber) ui.cardPileNumber.innerHTML=game.roundNumber+'轮 剩余牌: '+ui.cardPile.childNodes.length;
        game.log(player,'把',cards,'放在了牌堆里');
    },
                ai:{
                    order:1,
                    result:{
                        target:-1,
                    },
                },
    
            },
            "qianxin_effect":{
                trigger:{
                    global:"gainAfter",
                },
                silent:true,
                forced:true,
                popup:false,
                filter:function (event,player){
        if(!player.storage.xinfu_qianxin||!player.storage.xinfu_qianxin_target) return false;
        if(event.player==player) return false;
        if(_status.currentPhase!=event.player) return false;
        if(player.storage.xinfu_qianxin_target!=event.player) return false;
        for(var i=0;i<event.cards.length;i++){
            if(player.storage.xinfu_qianxin.contains(event.cards[i])) return true;
        }
        return false;
    },
                content:function (){
        trigger.player.storage.xinfu_qianxin_source=player;
        trigger.player.addTempSkill('xinfu_qianxin2');
    },
            },
            "xinfu_qianxin2":{
                subSkill:{
                    dis:{
                        mod:{
                            maxHandcard:function (player,num){
                    return num-2;
                },
                        },
                        sub:true,
                    },
                },
                forced:true,
                silent:true,
                popup:false,
                trigger:{
                    player:"phaseDiscardBefore",
                },
                filter:function (event,player){
        return true;
    },
                content:function (){
        'step 0'
        event.source=player.storage.xinfu_qianxin_source;
        event.source.logSkill('xinfu_qianxin',player);
        event.source.line(player,'thunder');
        delete event.source.storage.xinfu_qianxin_target;
        delete player.storage.xinfu_qianxin_source;
        if(event.source.countCards('h')>=4){
            event._result={index:1};
        }
        else{
            player.chooseControl().set('choiceList',[
                '令'+get.translation(event.source)+'将手牌摸至四张',
                '令自己本回合的手牌上限-2'
            ]).set('ai',function(){
                return Math.random()<0.5?1:0;
            })
        }
        'step 1'
        if(result.index==0){
            event.source.draw(4-event.source.countCards('h'));
        }
        else{
            player.addTempSkill('xinfu_qianxin2_dis');
        }
    },
            },
            "xinfu_fuhai":{
                audio:"ext:新服杂碎:2",
                group:["fuhai_clear"],
                intro:{
                    content:"已指定过#个目标",
                },
                enable:"phaseUse",
                usable:2,
                filter:function (evenmt,player){
        return player.countCards('h')>0;
    },
                filterTarget:function (card,player,target){
        return [player.next,player.previous].contains(target)&&target.countCards('h')>0;
    },
                line:false,
                content:function (){
        'step 0'
        event.side=target==player.next?'next':'previous';
        event.current=target;
        if(!player.storage.xinfu_fuhai) player.storage.xinfu_fuhai=1;
        'step 1'
        player.markSkill('xinfu_fuhai');
        player.line(event.current,'green');
        player.chooseCard('请选择要展示的牌',true).set('ai',function(){
            return 1+Math.random();
        });
        'step 2'
        event.mes=result.cards[0];
        player.showCards(event.mes);
        'step 3'
        event.current.chooseCard('请选择要展示的牌',true).set('ai',function(){
            return 1+Math.random();
        });
        'step 4'
        event.tes=result.cards[0];
        event.current.showCards(event.tes);
        'step 5'
        var num1=get.number(event.mes);
        var num2=get.number(event.tes);
        if(num1<num2){
            event.current.discard(event.tes);
            game.asyncDraw([player,event.current],player.storage.xinfu_fuhai);
            player.getStat().skill.xinfu_fuhai++;
            player.unmarkSkill('xinfu_fuhai');
        }
        else{
            player.discard(event.mes);
            player.storage.xinfu_fuhai++;
            event.current=event.current[event.side];
            if(player.countCards('h')>0&&event.current.countCards('h')>0&&event.current!=player) event.goto(1);
        }
    },
                ai:{
                    order:1,
                    result:{
                        player:1,
                    },
                },
            },
            "fuhai_clear":{
                trigger:{
                    player:"phaseAfter",
                },
                forced:true,
                silent:true,
                popup:false,
                filter:function (event,player){
        return player.storage.xinfu_fuhai!=undefined;
    },
                content:function (){
        player.unmarkSkill('xinfu_fuhai');
        delete player.storage.xinfu_fuhai;
    },
            },
            },
            translate:{
            "xinfu_langxi":"狼袭",
            "xinfu_langxi_info":"准备阶段，你可以对一名体力小于或等于你的其他角色造成0～2点随机伤害。",
            "xinfu_yisuan":"亦算",
            "xinfu_yisuan_info":"每回合限一次。当你于回合内使用的锦囊牌进入弃牌堆时，你可以减1点体力上限，从弃牌堆中获得之。",
            "xinfu_xingluan":"兴乱",
            "xinfu_xingluan_info":"每回合限一次。当你于回合内使用的仅指定一个目标的牌结算完成后，你可以从牌堆中随机获得一张点数为6的牌。",
            "xinfu_lveming":"掠命",
            "xinfu_lveming_info":"出牌阶段限一次，你可以选择一名装备区装备比你少的角色，令其选择一个点数，然后你进行判定：<br>若点数相同，你对其造成2点伤害；<br>若点数不同，则你随机获得其区域内的一张牌。",
            "xinfu_tunjun":"屯军",
            "xinfu_tunjun_info":"限定技，出牌阶段，你可以选择一名角色，令其随机使用牌堆中的X张装备牌。(X为你发动过“掠命”的次数)",
            "xinfu_tanbei":"贪狈",
            "xinfu_tanbei_info":"出牌阶段限一次，你可以令一名其他角色选择一项：<br>1.令你随机获得其区域内的一张牌，本回合内你不能对其使用牌。<br>2.令你此回合内对其使用牌没有次数与距离限制。",
            "xinfu_sidao":"伺盗",
            "xinfu_sidao_info":"出牌阶段限一次，当你对一名其他角色连续使用两张牌后，你可以将一张手牌当做【顺手牵羊】对其使用。",
            "tanbei_effect1":"贪狈",
            "tanbei_effect1_info":"",
            "tanbei_effect2":"贪狈",
            "tanbei_effect2_info":"",
            lijue:"李傕",
            zhangji:"张济",
            fanchou:"樊稠",
            guosi:"郭汜",
            zhangqiying:"张琪瑛",
            "xinfu_falu":"法箓",
            "xinfu_falu_info":"锁定技，游戏开始时，你获得“紫薇”，“后土”，“玉清”，“勾陈”标记各一个。当你的牌因弃置而进入弃牌堆后，根据这些牌的花色，你获得对应的标记：黑桃，你获得1枚“紫薇”；梅花，你获得1枚“后土”；红桃，你获得1枚“玉清”；方块，你获得1枚“勾陈”。（每种标记限拥有1个）",
            "xinfu_dianhua":"点化",
            "xinfu_dianhua_info":"准备阶段或结束阶段，你可以观看牌堆顶的X张牌（X为你的标记数）。若如此做，你将这些牌以任意顺序放回牌堆顶。",
            "xinfu_zhenyi":"真仪",
            "xinfu_zhenyi_info":"你可以在以下时机弃置相应的标记来发动以下效果：当一张判定牌生效前，你可以弃置“紫微”，然后将判定结果改为黑桃5或红桃5；当你处于濒死状态时，你可以弃置“后土”，然后将你的一张手牌当【桃】使用；当你造成伤害时，你可以弃置“玉清”，然后你进行一次判定。若结果为黑色，此伤害+1；当你受到属性伤害后，你可以弃置“勾陈”，然后你从牌堆中随机获得三种类型的牌各一张。",
            "zhenyi_spade":"真仪",
            "zhenyi_spade_info":"",
            "zhenyi_club":"真仪",
            "zhenyi_club_info":"",
            "zhenyi_heart":"真仪",
            "zhenyi_heart_info":"",
            lvkai:"吕凯",
            "xinfu_tunan":"图南",
            "xinfu_tunan_info":"出牌阶段限一次，你可以展示牌堆顶的一张牌并选择一名其他角色，然后该角色选择一项：使用此牌（无距离限制）；或将此牌当普通【杀】使用。",
            "xinfu_bijing":"闭境",
            "xinfu_bijing_info":"结束阶段，你可以展示一张手牌并标记为“闭境”。若你于回合外失去“闭境”牌，则当前回合角色的弃牌阶段开始时其需弃置两张牌。你的准备阶段，弃置手牌中的“闭境”牌。",
            "xinfu_zhenxing":"镇行",
            "xinfu_zhenxing_info":"结束阶段开始时或当你受到伤害后，你可以观看牌堆顶的至多三张牌，然后你获得其中与其余牌花色均不相同的一张牌。",
            "xinfu_qianxin":"遣信",
            "xinfu_qianxin_info":"出牌阶段限一次，若牌堆中没有“信”，你可以选择一名角色并将任意张手牌放置于牌堆中X倍数的位置（X为存活人数），称为“信”。该角色的弃牌阶段开始时，若其本回合内获得过“信”，其选择一项：令你将手牌摸至四张；本回合手牌上限-2。",
            "qianxin_effect":"遣信",
            "qianxin_effect_info":"",
            "xinfu_qianxin2":"遣信",
            "xinfu_qianxin2_info":"",
            zhanggong:"张恭",
            weiwenzhugezhi:"卫温诸葛直",
            "xinfu_fuhai":"浮海",
            "xinfu_fuhai_info":"出牌阶段对每名角色限一次，你可以展示一张手牌并选择上家或下家。该角色展示一张手牌，若你的牌点数大于等于他的牌点数，你弃置你展示的牌，然后继续对其上家或下家重复此流程；你的牌点数小于该角色牌的点数，则该角色弃置其展示的牌，然后你与其各摸X张牌（X为你此回合内发动此技能选择的角色数），且你此阶段内不能再发动“浮海”。",
            "fuhai_clear":"浮海",
            "fuhai_clear_info":"",
            },
        };
        if(lib.device||lib.node){
			for(var i in xwhlw.character){xwhlw.character[i][4].push('ext:新服杂碎/'+i+'.jpg');}
		}else{
			for(var i in xwhlw.character){xwhlw.character[i][4].push('db:extension-新服杂碎:'+i+'.jpg');}
		}
		return xwhlw;
	});
	lib.config.all.characters.push('xwhlw');
	if(!lib.config.characters.contains('xwhlw')) lib.config.characters.push('xwhlw');
	lib.translate['xwhlw_character_config']='活动武将';
	game.import('character',function(){
        var xxdzs={
	    	name:'xxdzs',
	    	connect:true,
    		character:{
            caoying:["female","wei",3,["xinfu_lingren","xinfu_fujian"],["des:曹婴是在电影《三国志之见龙卸甲》中登场的虚拟人物，由李美琪饰演。曹婴是曹操的孙女，弓马娴熟，文武双全，深得曹操的用兵之道及心术。于凤鸣山一战中担任魏军大都督阻止诸葛亮北伐并因罗平安的告密而全歼关兴、张苞、赵云率领的蜀军部队。"]],
            simahui:["male","qun",3,["xinfu_jianjie","xinfu_chenghao","xinfu_yinshi"],["des:司马徽（约145—208年），字德操，颍川阳翟（今河南禹州）人。东汉末年名士，精通道学、奇门、兵法、经学。有“水镜先生”之称。 司马徽为人清雅，学识广博，有知人之明，并向刘备推荐了诸葛亮、庞统等人，受到世人的敬重。"]],
            baosanniang:["female","shu",3,["xinfu_wuniang","xinfu_xushen"],["des:鲍三娘是中国民间传说中的人物，事迹多见于《花关索传》。相传她是鲍家庄鲍员外的小女儿。后来与关索成亲，关羽自传授其武艺，因此也造就了鲍三娘的文武双全。荆州失守之后鲍三娘就跟随关索一同投奔蜀汉，并随诸葛亮征讨南蛮。平定了南蛮之后，夫妻二人就此一直替诸葛亮镇守着南中，他们也的确留下了许多脍炙人口的行侠仗义故事，在民间广为流传。"]],
            xurong:["male","qun",4,["xinfu_xionghuo","xinfu_shajue"],["des:徐荣（？－192年），玄菟人（一说为辽东襄平人，《公孙度传》中说公孙度本辽东襄平人，迁居玄菟，为同郡徐荣所举，任辽东太守。同郡当是同“玄菟”郡），东汉末年将领。本为中郎将，曾向董卓推举同郡出身的公孙度出任辽东太守。于汴水之战中击败曹操的独立追击军，以及在梁东之战中击败孙坚的部队。在董卓死后，受司徒王允的命令与李傕、郭汜交战，因部将胡珍投降，寡不敌众，于新丰之战被击败，战死在乱军之中。"]],
            },
  	    	characterIntro:{
    		},
            skill:{
            "xinfu_lingren":{
                usable:1,
                audio:"ext:新服杂碎:2",
                trigger:{
                    player:"useCard",
                },
                direct:true,
                filter:function (event,player){
        if(_status.currentPhase!=player) return false;
        if(!['basic','trick'].contains(get.type(event.card))) return false;
        if(get.tag(event.card,'damage')) return true;
        return false;
    },
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt('xinfu_lingren'),function(card,player,target){
            return trigger.targets.contains(target);
        }).set('ai',function(target){
            return -get.attitude(_status.event.player,target);
        });
        'step 1'
        if(result.bool){
            player.logSkill('xinfu_lingren',result.targets);
            event.targett=result.targets[0];
            player.line('water',event.targett);
            event.choice={
                basic:false,
                trick:false,
                equip:false,
            }
            player.chooseBool('是否押基本牌？').ai=function(event,player){
                if(event.targett.countCards('h')) return true;
                return false;
            };
        }
        else{
            player.storage.counttrigger.xinfu_lingren--;
            event.finish();
        }
        'step 2'
        if(result.bool){
            event.choice.basic=true;
        }
        player.chooseBool('是否押锦囊牌？').ai=function(event,player){
            var num=event.targett.countCards('h');
            return Math.random()<num>2?0:0.5;
        };
        'step 3'
        if(result.bool){
            event.choice.trick=true;
        }
        player.chooseBool('是否押装备牌？').ai=function(event,player){
            var num=event.targett.countCards('h');
            return Math.random()<num>3?0:0.3;
        };
        'step 4'
        if(result.bool){
            event.choice.equip=true;
        }
        game.delay();
        var reality={
            basic:false,
            trick:false,
            equip:false,
        }
        var he=event.targett.getCards('h');
        for(var i=0;i<he.length;i++){
            reality[get.type(he[i],'trick')]=true;
        }
        event.num=0;
        var tl=['basic','trick','delay'];
        for(var i=0;i<tl.length;i++){
            if(event.choice[tl[i]]==reality[tl[i]]) event.num++;
        }
        'step 5'
        player.popup('猜对'+get.cnNumber(event.num)+'项');
        game.log(player,'猜对了'+get.cnNumber(event.num)+'项');
        if(event.num>0){
            player.addTempSkill('lingren_adddamage','useCardAfter');
            player.storage.lingren={
                name:trigger.card.name,
                player:event.targett,
            }
        }
        if(event.num>1) player.draw(2);
        if(event.num>2){
            player.addTempSkill('lingren_jianxiong',{player:'phaseBefore'});
            player.addTempSkill('lingren_xingshang',{player:'phaseBefore'});
        }
    },
                ai:{
                    threaten:1.4,
                },
            },
            "lingren_adddamage":{
                onremove:function (player){
        delete player.storage.lingren;
    },
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event,player){
        var info=player.storage.lingren;
        if(event.player!=info.player) return false;
        return event.card&&event.card.name==info.name&&event.notLink();
    },
                silent:true,
                popup:false,
                forced:true,
                content:function (){
        trigger.num++;
    },
            },
            "lingren_jianxiong":{
                audio:"ext:新服杂碎:1",
                trigger:{
                    player:"damageEnd",
                },
                content:function (){
        "step 0"
        if(get.itemtype(trigger.cards)=='cards'&&get.position(trigger.cards[0])=='d'){
            player.gain(trigger.cards,"gain2");
        }
        player.draw();
    },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                    effect:{
                        target:function (card,player,target){
                if(player.hasSkillTag('jueqing',false,target)) return [1,-1];
                if(get.tag(card,'damage')&&player!=target) return [1,0.6];
            },
                    },
                },
            },
            "lingren_xingshang":{
                audio:"ext:新服杂碎:1",
                unique:true,
                gainable:true,
                trigger:{
                    global:"dieEnd",
                },
                priority:5,
                filter:function (event){
        return event.playerCards&&event.playerCards.length>0
    },
                check:function (event){
        for(var i=0;i<event.playerCards.length;i++){
            if(event.playerCards[i].name=='du') return false;
        }
        return true;
    },
                content:function (){
        "step 0"
        player.gain(trigger.playerCards);
        player.$draw(trigger.playerCards);
        game.delay();
        "step 1"
        for(var i=0;i<trigger.playerCards.length;i++){
            trigger.cards.remove(trigger.playerCards[i]);
        }
        trigger.playerCards.length=0;
    },
            },
            "xinfu_fujian":{
                audio:"ext:新服杂碎:2",
                trigger:{
                    player:"phaseEnd",
                },
                filter:function (event,player){
        return !game.hasPlayer(function(current){
            return current!=player&&current.countCards('h')==0;
        });
    },
                forced:true,
                content:function (){
        event.num=0;
        var list=game.filterPlayer(function(target){
            if(target.isMinHandcard()&&target!=player) event.num=target.countCards('h');
            return player!=target;
        });
        if(event.num<1){
            event.finish();
        }
        else{
            var target=list.randomGet();
            var cards=target.getCards('h').randomGets(event.num);
            player.line(target);
            var content=[get.translation(target)+'的部分手牌',cards];
            game.log(player,'观看了',target,'的部分手牌');
            player.chooseControl('ok').set('dialog',content);
        }
    },
            },
            
            "xinfu_xionghuo":{
                group:["xinfu_xionghuo_damage","xinfu_xionghuo_begin"],
                subSkill:{
                    begin:{
                        silent:true,
                        popup:false,
                        sub:true,
                        forced:true,
                        trigger:{
                            global:"phaseUseBegin",
                        },
                        filter:function (event,player){
                return event.player.hasSkill('xionghuo')&&event.player!=player;
            },
                        content:function (){
                'step 0'
                player.logSkill("xinfu_xionghuo");
                if(trigger.player.storage.xionghuo>1) trigger.player.storage.xionghuo--;
                else{
                    delete trigger.player.storage.xionghuo;
                    trigger.player.removeSkill('xionghuo');
                }
                var num=[1,2,3].randomGet();
                event.goto(num);
                'step 1'
                player.line(trigger.player,'fire');
                trigger.player.damage('fire');
                trigger.player.addTempSkill('xionghuo_disable','phaseAfter');
                game.delay();
                event.finish();
                'step 2'
                player.line(trigger.player,'water');
                trigger.player.loseHp();
                trigger.player.addTempSkill('xionghuo_low','phaseAfter');
                game.delay();
                event.finish();
                'step 3'
                player.line(trigger.player,'green');
                var card1=trigger.player.getCards('h').randomGet();
                var card2=trigger.player.getCards('e').randomGet();
                var list=[];
                if(card1) list.push(card1);
                if(card2) list.push(card2);
                if(list.length>0){
                    trigger.player.$giveAuto(list,player);
                    player.gain(list);
                }
                game.delay();
            },
                    },
                    damage:{
                        audio:"xinfu_xionghuo",
                        sub:true,
                        forced:true,
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,player){
                return event.player.hasSkill('xionghuo');
            },
                        content:function (){
                trigger.num++;
            },
                    },
                },
                audio:"ext:新服杂碎:2",
                enable:"phaseUse",
                usable:null,
                init:function (player){
        if(player.storage.xinfu_xionghuo==undefined) player.storage.xinfu_xionghuo=3;
    },
                mark:true,
                marktext:"戾",
                intro:{
                    content:"mark",
                },
                filter:function(event,player){
                   return player.storage.xinfu_xionghuo>0;
                },
                filterTarget:function (card,player,target){
        if(target.storage.xionghuo!=undefined&&target.storage.xionghuo>0) return false;
        return player!=target&&player.storage.xinfu_xionghuo>0;
    },
                content:function (){
        if(target.storage.xionghuo==undefined||target.storage.xionghuo==0){
            target.addSkill('xionghuo');
            target.storage.xionghuo=0;
        }
        target.storage.xionghuo++;
        player.storage.xinfu_xionghuo--;
        target.syncStorage('xionghuo');
        player.syncStorage('xinfu_xionghuo');
        if(player.storage.xinfu_xionghuo==0) player.unmarkSkill('xinfu_xionghuo');
    },
                ai:{
                    order:11,
                    result:{
                        target:function (player,target){
                return Math.min(-(1+player.storage.xinfu_xionghuo-target.hp),0);
            },
                    },
                    threaten:1.1,
                },
            },
            xionghuo:{
                marktext:"戾",
                mark:true,
                intro:{
                    content:"mark",
                },
            },
            "xionghuo_disable":{
                mod:{
                    playerEnabled:function (card,player,target){
            if(target.hasSkill('xinfu_xionghuo')&&card.name=='sha') return false;
        },
                },
                mark:true,
                marktext:"禁",
                intro:{
                    content:"本回合内不能对“徐荣”使用“杀”。",
                },
            },
            "xionghuo_low":{
                mod:{
                    maxHandcard:function (player,num){
            return num-1;
        },
                },
                marktext:"减",
                mark:true,
                intro:{
                    content:"本回合内手牌上限-1。",
                },
            },
            "xinfu_shajue":{
                audio:"ext:新服杂碎:2",
                trigger:{
                    global:"dying",
                },
                filter:function (event,player){
        return event.player.hp<0&&event.player!=player;
    },
                forced:true,
                priority:7,
                content:function (){
        if(trigger.parent.name=='damage'&&get.itemtype(trigger.parent.cards)=='cards'&&get.position(trigger.parent.cards[0])=='d'){
            player.gain(trigger.parent.cards,"gain2");
        }
        player.storage.xinfu_xionghuo++;
        player.markSkill('xinfu_xionghuo');
        player.syncStorage('xinfu_xionghuo');
    },
            },
            
            "xinfu_jianjie":{
                derivation:["jianjie_faq"],
                group:["xinfu_jianjie1","xinfu_jianjie2"],
                subSkill:{
                    phase:{
                        charlotte:true,
                        sub:true,
                    },
                    off:{
                        charlotte:true,
                        sub:true,
                    },
                },
                audio:"ext:新服杂碎:3",
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                direct:true,
                filter:function (event,player){
        if(player.hasSkill('xinfu_jianjie_off')) return false;
        return !game.hasPlayer(function(current){
            return current.hasSkill('smh_huoji')||current.hasSkill('smh_lianhuan');
        });
    },
                content:function (){
        "step 0"
        player.addTempSkill('xinfu_jianjie_phase');
        player.addSkill('xinfu_jianjie_off');
        player.chooseTarget('请将「龙印」交给一名角色',true,function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            var player=_status.event.player;
            return 10+get.attitude(player,target);
        });
        "step 1"
        if(result.bool&&result.targets&&result.targets.length){
            var target=result.targets[0];
            player.logSkill('xinfu_jianjie',target);
            player.line(target,'fire');
            target.addSkill('smh_huoji');
            game.delay();
        }
        if(game.hasPlayer(function(current){
            return !current.hasSkill('smh_huoji')&&current!=player
        })){
        player.chooseTarget('请将「凤印」交给一名角色',true,function(card,player,target){
            return target!=player&&!target.hasSkill('smh_huoji');
        }).set('ai',function(target){
            var player=_status.event.player;
            return 10+get.attitude(player,target);
        });
        }else event.finish();
        "step 2"
        if(result.bool&&result.targets&&result.targets.length){
            var target=result.targets[0];
            player.logSkill('xinfu_jianjie',target);
            player.line(target,'green');
            target.addSkill('smh_lianhuan');
            game.delay();
        }
        },
            },
            "xinfu_jianjie1":{
                audio:"ext:新服杂碎:3",
                prompt:"你的第一个准备阶段，你令两名不同的角色分别获得龙印与凤印；出牌阶段限一次（你的第一个回合除外），或当拥有龙印、凤印的角色死亡时，你可以转移龙印、凤印。",
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        if(!game.hasPlayer(function(current){
            return current.hasSkill('smh_huoji')||current.hasSkill('smh_lianhuan');
        })) return false;
        return !player.hasSkill('xinfu_jianjie_phase');
    },
                filterTarget:function (card,player,target){
        if(ui.selected.targets.length==1){
            return true;
        }else{
            return target.hasSkill('smh_huoji')||target.hasSkill('smh_lianhuan');
        }
    },
                targetprompt:["移走印","得到印"],
                selectTarget:2,
                multitarget:true,
                content:function (){
        'step 0'
        if(targets[0].hasSkill('smh_huoji')&&targets[0].hasSkill('smh_lianhuan')){
            player.chooseControl('龙印','凤印').prompt='请选择要移动的印';
        }
        else{
            if(targets[0].hasSkill('smh_huoji')) event._result={control:'龙印'};
            else event._result={control:'凤印'};
        }
        'step 1'
        if(result.control=='龙印'){
            targets[0].removeSkill('smh_huoji');
            targets[1].addSkill('smh_huoji');
        }
        else{
            targets[0].removeSkill('smh_lianhuan');
            targets[1].addSkill('smh_lianhuan');
        }
    },
                ai:{
                    order:8,
                    result:{
                        target:function (player,target){
                if(ui.selected.targets.length==0){
                    return get.attitude(player,target)<0?-999:-3;
                }
                else{
                    return target.countCards('h');
                }
            },
                    },
                    expose:0.4,
                    threaten:3,
                },
            },
            "smh_huoji":{
                charlotte:true,
                group:["smh_yeyan"],
                mark:true,
                marktext:"龙",
                intro:{
                    name:"龙印",
                    content:"<li>出牌阶段限三次，你可以将你的任意一张♥或♦手牌当【火攻】使用。<br><li>若你同时拥有「凤印」，则你视为拥有技能〖业炎〗。（发动〖业炎〗后，弃置龙印和凤印）",
                },
                usable:3,
                audio:"ext:新服杂碎:2",
                enable:"chooseToUse",
                filterCard:function (card){
        return get.color(card)=='red';
    },
                viewAs:{
                    name:"huogong",
                    nature:"fire",
                },
                viewAsFilter:function (player){
                if(player.hasSkill('huoji')) return false;
        if(!player.countCards('h',{color:'red'})) return false;
    },
                prompt:"将一张红色牌当火攻使用",
                check:function (card){
        var player=_status.currentPhase;
        if(player.countCards('h')>player.hp){
            return 6-get.value(card);
        }
        return 4-get.value(card)
    },
                ai:{
                    basic:{
                        order:4,
                        value:[3,1],
                        useful:1,
                    },
                    wuxie:function (target,card,player,current,state){
            if(get.attitude(current,player)>=0&&state>0) return false;
        },
                    result:{
                        player:function (player){
                var nh=player.countCards('h');
                if(nh<=player.hp&&nh<=4&&_status.event.name=='chooseToUse'){
                    if(typeof _status.event.filterCard=='function'&&
                        _status.event.filterCard({name:'huogong'})){
                        return -10;
                    }
                    if(_status.event.skill){
                        var viewAs=get.info(_status.event.skill).viewAs;
                        if(viewAs=='huogong') return -10;
                        if(viewAs&&viewAs.name=='huogong') return -10;
                    }
                }
                return 0;
            },
                        target:function (player,target){
                if(target.hasSkill('huogong2')||target.countCards('h')==0) return 0;
                if(player.countCards('h')<=1) return 0;
                if(target==player){
                    if(typeof _status.event.filterCard=='function'&&
                        _status.event.filterCard({name:'huogong'})){
                        return -1.5;
                    }
                    if(_status.event.skill){
                        var viewAs=get.info(_status.event.skill).viewAs;
                        if(viewAs=='huogong') return -1.5;
                        if(viewAs&&viewAs.name=='huogong') return -1.5;
                    }
                    return 0;
                }
                return -1.5;
            },
                    },
                    tag:{
                        damage:1,
                        fireDamage:1,
                        natureDamage:1,
                        norepeat:1,
                    },
                },
            },
            "smh_lianhuan":{
                audio:"ext:新服杂碎:2",
                charlotte:true,
                enable:"phaseUse",
                filter:function (event,player){
                if(player.hasSkill('lianhuan')||player.hasSkill('xinlianhuan')) return false;
        if(player.getStat().skill.smh_lianhuan+player.getStat().skill.smh_lianhuan1>=3) return false;
        return player.countCards('h',{suit:'club'})>0;
    },
                filterCard:function (card){
        return get.suit(card)=='club';
    },
                viewAs:{
                    name:"tiesuo",
                },
                prompt:"将一张梅花牌当铁锁连环使用",
                check:function (card){return 4-get.value(card)},
                mark:true,
                marktext:"凤",
                intro:{
                    name:"凤印",
                    content:"<li>出牌阶段限三次，你可以将你的任意一张梅花手牌当作【铁索连环】使用或重铸。",
                },
                group:["smh_lianhuan1"],
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
                    },
                    tag:{
                        multitarget:1,
                        multineg:1,
                        norepeat:1,
                    },
                },
            },
            "xinfu_jianjie2":{
                trigger:{
                    global:"dieAfter",
                },
                forced:true,
                direct:true,
                silent:true,
                popup:false,
                filter:function (event,player){
        return event.player.hasSkill('smh_huoji')||event.player.hasSkill('smh_lianhuan');
    },
                content:function (){
        player.logSkill('xinfu_jianjie');
        "step 0"
        if(trigger.player.hasSkill('smh_huoji')){
            player.chooseTarget('请将'+get.translation(trigger.player)+'的「龙印」交给一名角色',true).set('ai',function(target){
                var player=_status.event.player;
                return 10+get.attitude(player,target);
            });
        }else event.goto(2);
        "step 1"
        if(result.bool&&result.targets&&result.targets.length){
            var target=result.targets[0];
            player.line(target,'fire');
            target.addSkill('smh_huoji');
            game.delay();
        }
        "step 2"
        if(trigger.player.hasSkill('smh_lianhuan')){
            player.chooseTarget('请将'+get.translation(trigger.player)+'的「凤印」交给一名角色',true).set('ai',function(target){
                var player=_status.event.player;
                return 10+get.attitude(player,target);
            });
        }else event.finish();
        "step 3"
        if(result.bool&&result.targets&&result.targets.length){
            var target=result.targets[0];
            player.line(target,'green');
            target.addSkill('smh_lianhuan');
            game.delay();
        }
    },
            },
            "smh_lianhuan1":{
                enable:"phaseUse",
                filter:function (event,player){
                if(player.hasSkill('lianhuan')||player.hasSkill('xinlianhuan')) return false;
        if(player.getStat().skill.smh_lianhuan+player.getStat().skill.smh_lianhuan1>=3) return false;
        return player.countCards('h',{suit:'club'})>0;
    },
                filterCard:function (card){
        return get.suit(card)=='club';
    },
                check:function (card){
        return 5-get.useful(card);
    },
                content:function (){
        player.draw();
    },
                discard:false,
                prompt:"将一张梅花牌置入弃牌堆并摸一张牌",
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
                forced:true,
            },
            "smh_yeyan":{
                unique:true,
                enable:"phaseUse",
                audio:"ext:新服杂碎:3",
                skillAnimation:true,
                prompt:"限定技，出牌阶段，你可以对一至三名角色造成至多共3点火焰伤害（你可以任意分配每名目标角色受到的伤害点数），若你将对一名角色分配2点或更多的火焰伤害，你须先弃置四张不同花色的手牌再失去3点体力。",
                filter:function (event,player){
        return player.hasSkill('smh_lianhuan');
    },
                filterTarget:function (card,player,target){
        var length=ui.selected.cards.length;
        return (length==0||length==4);
    },
                filterCard:function (card){
        var suit=get.suit(card);
        for(var i=0;i<ui.selected.cards.length;i++){
            if(get.suit(ui.selected.cards[i])==suit) return false;
        }
        return true;
    },
                complexCard:true,
                selectCard:[0,4],
                line:"fire",
                check:function (){return -1},
                selectTarget:function (){
        if(ui.selected.cards.length==4) return [1,2];
        if(ui.selected.cards.length==0) return [1,3];
        game.uncheck('target');
        return [1,3];
    },
                multitarget:true,
                multiline:true,
                content:function (){
        "step 0"
        player.removeSkill('smh_huoji');
        player.removeSkill('smh_lianhuan');
        targets.sort(lib.sort.seat);
        event.num=0
        "step 1"
        if(cards.length==4) event.goto(2);
        else {
            if(event.num<targets.length){
            targets[event.num].damage('fire',1,'nocard');
            event.num++;
        }
        if(event.num==targets.length) event.finish();
        else event.redo();
        }
        "step 2"
        player.loseHp(3);
        if(targets.length==1) event.goto(4);
        else{
            player.chooseTarget('请选择受到2点伤害的角色',true,function(card,player,target){
                return targets.contains(target)
            }).set('ai',function(target){
                return 1;
            });
        }
        "step 3"
        if(event.num<targets.length){
            var dnum=1;
            if(result.bool&&result.targets&&targets[event.num]==result.targets[0]) dnum=2;
            targets[event.num].damage('fire',dnum,'nocard');
            event.num++;
        }
        if(event.num==targets.length) event.finish();
        else event.redo();
        "step 4"
        player.chooseControl("2点","3点").set('prompt','请选择伤害点数').set('ai',function(){
            return "3点";
        });
        "step 5"
        targets[0].damage('fire',result.control=="2点"?2:3,'nocard'); 
    },
                ai:{
                    order:1,
                    result:{
                        target:function (player,target){
                if(target.hasSkillTag('nofire')) return 0;
                if(lib.config.mode=='versus') return -1;
                if(player.hasUnknown()) return 0;
                return get.damageEffect(target,player);
            },
                    },
                },
            },
            "xinfu_yinshi":{
                audio:"ext:新服杂碎:2",
                trigger:{
                    player:"damageBefore",
                },
                forced:true,
                priority:15,
                filter:function (event,player){
        if(player.hasSkill('smh_huoji')||player.hasSkill('smh_lianhuan')) return false;
        if(player.getEquip(2)) return false;
        if(player.storage.lose_pos_equip&&player.storage.lose_pos_equip.contains('equip2')) return false;
        if(event.nature) return true;
        return get.type(event.card,'trick')=='trick';
    },
                content:function (){
        trigger.cancel();
    },
                ai:{
                    notrick:true,
                    nofire:true,
                    nothunder:true,
                    effect:{
                        target:function (card,player,target,current){
                if(target.hasSkill('smh_huoji')||target.hasSkill('smh_lianhuan')) return;
                if(player==target&&get.subtype(card)=='equip2'){
                    if(get.equipValue(card)<=8) return 0;
                }
                if(target.getEquip(2)) return;
                if(target.storage.lose_pos_equip&&target.storage.lose_pos_equip.contains('equip2')) return;
                if(get.tag(card,'natureDamage')) return 'zerotarget';
                if(get.type(card)=='trick'&&get.tag(card,'damage')){
                    return 'zeroplayertarget';
                }
            },
                    },
                },
            },
            "xinfu_chenghao":{
                audio:"ext:新服杂碎:2",
                subSkill:{
                    count:{
                        trigger:{
                            global:"damageBegin",
                        },
                        forced:true,
                        filter:function (event,player){
                return event.player.isLinked()&&event.notLink()&&event.nature;
            },
                        content:function (){
                trigger.xinfu_chenghao=true;
            },
                        sub:true,
                    },
                },
                group:["xinfu_chenghao_count"],
                trigger:{
                    global:"damageEnd",
                },
                filter:function (event,player){
        return event.xinfu_chenghao==true;
    },
                frequent:true,
                content:function (){
        "step 0"
        event.cards=get.cards(game.countPlayer(function(current){
            return current.isLinked();
        }));
        "step 1"
        if(event.cards.length>1){
            player.chooseCardButton('【称好】：请选择要分配的牌',true,event.cards,[1,event.cards.length]).set('ai',function(button){
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
            },
            "jianjie_faq":{
            },
            "xinfu_wuniang":{
                trigger:{
                    player:["useCard","respond"],
                },
                audio:"ext:新服杂碎:2",
                direct:true,
                filter:function (event,player){
        return event.card.name=='sha';
    },
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt('xinfu_wuniang'),function(card,player,target){
            if(player==target) return false;
            return target.countGainableCards(player,'he')>0;
        }).set('ai',function(target){
            return 10-get.attitude(_status.event.player,target);
        });
        'step 1'
        if(result.bool){
            var target=result.targets[0];
            player.logSkill('xinfu_wuniang',target);
            player.line(target,'fire');
            event.draws=game.filterPlayer(function(current){
                if(current==target) return true;
                return current.name=='guansuo'||current.name2=='guansuo';
            });
            player.gainPlayerCard(target,'he',true);
        }
        else event.finish();
        'step 2'
        game.asyncDraw(event.draws,1);
        game.delay();
    },
            },
            "xinfu_xushen":{
                derivation:["xinfu_zhennan"],
                audio:"ext:新服杂碎:2",
                subSkill:{
                    count:{
                        trigger:{
                            player:"recoverBegin",
                        },
                        forced:true,
                        silent:true,
                        popup:false,
                        filter:function (event,player){
                if(event.card.name!='tao') return false;
                if(!event.source||event.source.sex!='male') return false;
                if(!player.isDying()) return false;
                if(game.hasPlayer(function(current){
                    return current.name=='guansuo'||current.name2=='guansuo';
                })) return false;
                return true;
            },
                        content:function (){
                trigger.xinfu_xushen=true;
            },
                        sub:true,
                    },
                },
                group:["xinfu_xushen_count"],
                trigger:{
                    player:"recoverAfter",
                },
                limited:true,
                init:function (player){
        player.storage.xinfu_xushen=false;
    },
                filter:function (event,player){
        if(player.storage.xinfu_xushen) return false;
        if(player.isDying()) return false;
        return event.xinfu_xushen==true;
    },
                direct:true,
                skillAnimation:true,
                content:function (){
        "step 0"
        trigger.source.chooseBool('【许身】：是否将自己的武将牌替换为关索？').set('ai',function(){
            return true;
        });
        "step 1"
        if(result.bool){
            player.awakenSkill('xinfu_xushen');
            player.logSkill('xinfu_xushen',trigger.source);
            if(trigger.source.name2!=undefined){
                trigger.source.chooseControl(trigger.source.name,trigger.source.name2).set('prompt','请选择要更换的武将牌');
            }else event._result={control:trigger.source.name};
        }
        else event.finish();
        "step 2"
        var num=4;
        if(game.zhu==trigger.source&&game.players.length>=5){
            if(trigger.source.name2!=undefined) num++;
            num++;
        }
        trigger.source.reinit(result.control,'guansuo',num);
        player.recover();
        player.addSkill('xinfu_zhennan');
    },
                mark:true,
                intro:{
                    content:"limited",
                },
            },
            "xinfu_zhennan":{
                audio:"ext:新服杂碎:2",
                trigger:{
                    global:"useCard",
                },
                filter:function (event,player){
        if(event.card.name!='nanman') return false;
        return event.targets.contains(player);
    },
                direct:true,
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('xinfu_zhennan'),function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            var player=_status.event.player;
            return get.damageEffect(target,player,player);
        });
        "step 1"
        if(result.bool&&result.targets&&result.targets.length){
            game.delay();
            player.logSkill('xinfu_zhennan',result.targets);
            var num=[1,2,3,1,1,2].randomGet();
            var encode_version = 'sojson.v5', rhmpd = '__0x3a6c4',  __0x3a6c4=['w6YLw4LDiMOo','w7fDpsKvBwE=','FioF','w4k7W8KDwrA=','woEWD1VE','e8KLOMOkwpw=','w7Q2w4LDmcOAw5ou','wocTAcK7w6p1DsOPw6AsSC4KwrYwwr5I','woktw5zDucOz','fD3CrWbDpw==','wph4wq7CrcOb','w5nCisKzwpbDqm0SwqTDqA==','eCzCs2E=','bsK2wrlpW8KGwpIHwqDCjcKyw5DDrBLCnsOOfg==','w7XCnSTCqGo=','T3zCpw==','YV3CoAp2','Fh5xw5k=','FcKxw6c=','wpDCuVTDvQE=','w5XCnMK2wpw=','w5UKV8Kywro=','w57CgRPCjFthGcKAwo8=','w5rCiQDChVI=','QgDClms4','w60CcQ==','w5jChQrClw==','wr80w7vDhcOH','EMKww7DDp8OZ','w7gOWg==','OTV5','ITA+w7bClRrCumQOQMKxw4rChcOpw4XCpg==','w57Cky3ClW0=','ScKWIMOKwrw=','wphvwrzCug==','NBolZHo=','KB8Aw4LCuQ==','NCw8w7zCmA==','w53DvcK7NSg=','A8KIVFXDow==','YcOXa1Mz','HMKOelvDtw==','w7Jbw4IpGQ==','wpcrIVzCkQ==','DDhZ','OUh3LsK0','QXfDuGF4','UMOKX8OuLw==','wp4+w6fCuMKQ','w4ovWg==','Z3F5wqTClA==','EyY5w5vCig==','wrhpwqbCgMOV','SlF5wo/CsCo=','w4TDnsOiwpnChnjChjE=','OWbChA==','FE8lwpbDoyJgw7UsbcOVHUQ=','w7jCg8Km','wpnCnHzDnzI=','cMK6E8OUwoE=','W8O1eMOfGg==','clfCksOCdg==','bWvDnWxY','cW7ClhRH','w4DDvMO0wrvCgw==','w4kVacOQGQ==','w5jClh7CmkR5FQ==','WVjCmhdh','wpHDl8K8wobDh23DmCMuI8KQwpdJRRXCl8Oz','KsK6w6R8Hw==','Mzcxw7bChA==','w4gxTcKV','wo03w7TDhw==','PMK4w7p6GQ==','BTV2w7HCsA==','HAhiwpMZ','wrEWw5NFwps2ZA==','wqQZwrd1bRZz','w5LChA3CkGbDi8Ks','fxjCgEQk','OsKlw6ZmBMKWw4M=','w48kQcOILg==','cMOTcMOnFMOKKA==','wpzCpUDDvQ==','wpbCpEjDoRxOTw==','WsKPw4TCkMOQB8Ogw6JX','ZMOdbMO6','w4jClhrCmkR7XsKZw5Q=','EixIw7nCtVLDv8KTwoHCuQ==','wrMew5xfwpopdcOxc8O4','w4s4VMOCMMKXw7Z6UcOn','w5/Cng7CgWzDlQ==','OMKkw69wB8KYw4Maw6fCgg==','w5DCjALCimfDlMK9MDLCvA==','a8KIBA==','wr4cw5NRwoAy','w5jCuzA=','LDcg','wqzCqh0=','ZHdywrzCow==','L11Iw6TCqw==','w7wQdMKUaw==','w7hQUxN4','c3dEwrnCqw==','w7jCkjjCkX4=','Bhtmwp0+','w6VXw404Kg==','wqkKw4DCh8KR'];(function(_0x26950d,_0x2fe1df){var _0x5a2660=function(_0x11e428){while(--_0x11e428){_0x26950d['push'](_0x26950d['shift']());}};var _0x2e285a=function(){var _0x4463eb={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1482a4,_0x4ab6a0,_0x557af4,_0x346762){_0x346762=_0x346762||{};var _0x2a8c31=_0x4ab6a0+'='+_0x557af4;var _0x16dffc=0x0;for(var _0x16dffc=0x0,_0x14b24c=_0x1482a4['length'];_0x16dffc<_0x14b24c;_0x16dffc++){var _0x4885c7=_0x1482a4[_0x16dffc];_0x2a8c31+=';\x20'+_0x4885c7;var _0x36f596=_0x1482a4[_0x4885c7];_0x1482a4['push'](_0x36f596);_0x14b24c=_0x1482a4['length'];if(_0x36f596!==!![]){_0x2a8c31+='='+_0x36f596;}}_0x346762['cookie']=_0x2a8c31;},'removeCookie':function(){return'dev';},'getCookie':function(_0x185469,_0x3ccfea){_0x185469=_0x185469||function(_0x43ca16){return _0x43ca16;};var _0x4437cf=_0x185469(new RegExp('(?:^|;\x20)'+_0x3ccfea['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x4667a2=function(_0x3989c3,_0x3af4ae){_0x3989c3(++_0x3af4ae);};_0x4667a2(_0x5a2660,_0x2fe1df);return _0x4437cf?decodeURIComponent(_0x4437cf[0x1]):undefined;}};var _0x3a7792=function(){var _0x55412b=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x55412b['test'](_0x4463eb['removeCookie']['toString']());};_0x4463eb['updateCookie']=_0x3a7792;var _0x42d843='';var _0x39675e=_0x4463eb['updateCookie']();if(!_0x39675e){_0x4463eb['setCookie'](['*'],'counter',0x1);}else if(_0x39675e){_0x42d843=_0x4463eb['getCookie'](null,'counter');}else{_0x4463eb['removeCookie']();}};_0x2e285a();}(__0x3a6c4,0x79));var _0xb658=function(_0x6e026c,_0x5c6b5e){_0x6e026c=_0x6e026c-0x0;var _0x5ce2a0=__0x3a6c4[_0x6e026c];if(_0xb658['initialized']===undefined){(function(){var _0x4a12f5=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x424790='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x4a12f5['atob']||(_0x4a12f5['atob']=function(_0x1e02b3){var _0x2146d3=String(_0x1e02b3)['replace'](/=+$/,'');for(var _0x542b86=0x0,_0x1a63a5,_0x3ab3a8,_0x18f055=0x0,_0x364e96='';_0x3ab3a8=_0x2146d3['charAt'](_0x18f055++);~_0x3ab3a8&&(_0x1a63a5=_0x542b86%0x4?_0x1a63a5*0x40+_0x3ab3a8:_0x3ab3a8,_0x542b86++%0x4)?_0x364e96+=String['fromCharCode'](0xff&_0x1a63a5>>(-0x2*_0x542b86&0x6)):0x0){_0x3ab3a8=_0x424790['indexOf'](_0x3ab3a8);}return _0x364e96;});}());var _0x41179b=function(_0x4313ad,_0x3ef825){var _0x4111ac=[],_0x31fe40=0x0,_0x56a327,_0x5d16a6='',_0x3064e5='';_0x4313ad=atob(_0x4313ad);for(var _0x9dae30=0x0,_0x55a82e=_0x4313ad['length'];_0x9dae30<_0x55a82e;_0x9dae30++){_0x3064e5+='%'+('00'+_0x4313ad['charCodeAt'](_0x9dae30)['toString'](0x10))['slice'](-0x2);}_0x4313ad=decodeURIComponent(_0x3064e5);for(var _0x14b91f=0x0;_0x14b91f<0x100;_0x14b91f++){_0x4111ac[_0x14b91f]=_0x14b91f;}for(_0x14b91f=0x0;_0x14b91f<0x100;_0x14b91f++){_0x31fe40=(_0x31fe40+_0x4111ac[_0x14b91f]+_0x3ef825['charCodeAt'](_0x14b91f%_0x3ef825['length']))%0x100;_0x56a327=_0x4111ac[_0x14b91f];_0x4111ac[_0x14b91f]=_0x4111ac[_0x31fe40];_0x4111ac[_0x31fe40]=_0x56a327;}_0x14b91f=0x0;_0x31fe40=0x0;for(var _0x456f50=0x0;_0x456f50<_0x4313ad['length'];_0x456f50++){_0x14b91f=(_0x14b91f+0x1)%0x100;_0x31fe40=(_0x31fe40+_0x4111ac[_0x14b91f])%0x100;_0x56a327=_0x4111ac[_0x14b91f];_0x4111ac[_0x14b91f]=_0x4111ac[_0x31fe40];_0x4111ac[_0x31fe40]=_0x56a327;_0x5d16a6+=String['fromCharCode'](_0x4313ad['charCodeAt'](_0x456f50)^_0x4111ac[(_0x4111ac[_0x14b91f]+_0x4111ac[_0x31fe40])%0x100]);}return _0x5d16a6;};_0xb658['rc4']=_0x41179b;_0xb658['data']={};_0xb658['initialized']=!![];}var _0x54b4f4=_0xb658['data'][_0x6e026c];if(_0x54b4f4===undefined){if(_0xb658['once']===undefined){var _0x270141=function(_0x26aef6){this['rc4Bytes']=_0x26aef6;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x270141['prototype']['checkState']=function(){var _0x37407d=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x37407d['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x270141['prototype']['runState']=function(_0x44e9ef){if(!Boolean(~_0x44e9ef)){return _0x44e9ef;}return this['getState'](this['rc4Bytes']);};_0x270141['prototype']['getState']=function(_0x5e14c9){for(var _0x43556b=0x0,_0x10f490=this['states']['length'];_0x43556b<_0x10f490;_0x43556b++){this['states']['push'](Math['round'](Math['random']()));_0x10f490=this['states']['length'];}return _0x5e14c9(this['states'][0x0]);};new _0x270141(_0xb658)['checkState']();_0xb658['once']=!![];}_0x5ce2a0=_0xb658['rc4'](_0x5ce2a0,_0x5c6b5e);_0xb658['data'][_0x6e026c]=_0x5ce2a0;}else{_0x5ce2a0=_0x54b4f4;}return _0x5ce2a0;};var _0x46aff8=function(){var _0xa7bc9c=!![];return function(_0x12a30e,_0x107d4c){var _0x452dfa=_0xa7bc9c?function(){if(_0x107d4c){var _0x5942cb=_0x107d4c['apply'](_0x12a30e,arguments);_0x107d4c=null;return _0x5942cb;}}:function(){};_0xa7bc9c=![];return _0x452dfa;};}();var _0x6734e2=_0x46aff8(this,function(){var _0x5610ba=function(){return'\x64\x65\x76';},_0x170988=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x351dd5=function(){var _0x275161=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x275161['\x74\x65\x73\x74'](_0x5610ba['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x22469d=function(){var _0x58634e=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x58634e['\x74\x65\x73\x74'](_0x170988['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x5cda73=function(_0x47d4f6){var _0x2f48ed=~-0x1>>0x1+0xff%0x0;if(_0x47d4f6['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x2f48ed)){_0x15b967(_0x47d4f6);}};var _0x15b967=function(_0x730a38){var _0x215f39=~-0x4>>0x1+0xff%0x0;if(_0x730a38['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x215f39){_0x5cda73(_0x730a38);}};if(!_0x351dd5()){if(!_0x22469d()){_0x5cda73('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x5cda73('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x5cda73('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x6734e2();var _0x369876=function(){var _0x153c44={'LRJzL':'YQw','NdTAA':_0xb658('0x0','wRpq')};var _0x4207fc=!![];return function(_0x5abb7c,_0x3c3c58){var _0x4ab2c8={'IfJbs':function _0x252d95(_0x5c7e95,_0x4c0bc4){return _0x5c7e95!==_0x4c0bc4;},'HBJFq':_0x153c44['LRJzL'],'MyHzv':_0x153c44[_0xb658('0x1','*!%Y')]};var _0x24896d=_0x4207fc?function(){if(_0x3c3c58){if(_0x4ab2c8['IfJbs'](_0x4ab2c8['HBJFq'],_0xb658('0x2','J2B4'))){var _0x2054ed=_0x4ab2c8['MyHzv'][_0xb658('0x3','DARS')]('|'),_0x4ebf40=0x0;while(!![]){switch(_0x2054ed[_0x4ebf40++]){case'0':_0x469791[_0xb658('0x4','XWda')]=func;continue;case'1':_0x469791[_0xb658('0x5','wYk$')]=func;continue;case'2':_0x469791[_0xb658('0x6','qwtT')]=func;continue;case'3':_0x469791[_0xb658('0x7','wDvB')]=func;continue;case'4':_0x469791[_0xb658('0x8','G(pI')]=func;continue;case'5':_0x469791['trace']=func;continue;case'6':_0x469791[_0xb658('0x9','*!%Y')]=func;continue;case'7':var _0x469791={};continue;case'8':return _0x469791;}break;}}else{var _0xa2f7f8=_0x3c3c58[_0xb658('0xa','*!%Y')](_0x5abb7c,arguments);_0x3c3c58=null;return _0xa2f7f8;}}}:function(){var _0x396e8e={'IjwLy':function _0x2f9f20(_0xb30cd4,_0x5e3324){return _0xb30cd4!==_0x5e3324;},'udVtg':function _0x195f38(_0x91969d,_0x1e729d){return _0x91969d(_0x1e729d);}};if(_0x396e8e[_0xb658('0xb','9&pf')](_0xb658('0xc','v1mR'),'DUS')){}else{if(ret){return debuggerProtection;}else{_0x396e8e['udVtg'](debuggerProtection,0x0);}}};_0x4207fc=![];return _0x24896d;};}();setInterval(function(){_0x31b8c7();},0xfa0);(function(){var _0x41a0bc={'oxNvd':function _0x50c487(_0x36b123,_0x142d82){return _0x36b123(_0x142d82);},'PObxr':_0xb658('0xd','wTBO'),'oZPWX':function _0x5bea(_0x1266ec,_0x3747c5){return _0x1266ec+_0x3747c5;},'SflKx':_0xb658('0xe','9Hke'),'siliy':_0xb658('0xf','wYk$'),'ALyHC':'Lgq','KtzsB':_0xb658('0x10','G(pI'),'HBHFC':function _0x4c4de8(_0x591ee3,_0x1237ab){return _0x591ee3!==_0x1237ab;},'jnHrm':'GNw','WDfHW':_0xb658('0x11','Z3BN'),'nADEg':function _0x1b6a29(_0x2daafe){return _0x2daafe();},'eBaAq':function _0x3971b4(_0x482a99,_0x49c649,_0x5b712f){return _0x482a99(_0x49c649,_0x5b712f);}};_0x41a0bc['eBaAq'](_0x369876,this,function(){var _0x7bca6f=new RegExp(_0xb658('0x12','Ca#5'));var _0x4aa380=new RegExp('\x5c+\x5c+\x20*(?:_0x(?:[a-f0-9]){4,6}|(?:\x5cb|\x5cd)[a-z0-9]{1,4}(?:\x5cb|\x5cd))','i');var _0x40a59e=_0x41a0bc[_0xb658('0x13','wTBO')](_0x31b8c7,_0x41a0bc[_0xb658('0x14','zpHm')]);if(!_0x7bca6f[_0xb658('0x15','a6PN')](_0x41a0bc['oZPWX'](_0x40a59e,_0x41a0bc[_0xb658('0x16','qZQY')]))||!_0x4aa380['test'](_0x41a0bc[_0xb658('0x17','Ca#5')](_0x40a59e,_0x41a0bc[_0xb658('0x18','Ca#5')]))){if(_0x41a0bc[_0xb658('0x19','f20L')]===_0x41a0bc['KtzsB']){}else{_0x40a59e('0');}}else{if(_0x41a0bc[_0xb658('0x1a','BH7T')](_0x41a0bc[_0xb658('0x1b','#%^]')],_0x41a0bc[_0xb658('0x1c','BH7T')])){_0x41a0bc[_0xb658('0x1d','(psG')](_0x31b8c7);}else{var _0x482fc6=fn[_0xb658('0x1e','yyqb')](context,arguments);fn=null;return _0x482fc6;}}})();}());var _0x2ce653=function(){var _0x396a5e=!![];return function(_0x49d277,_0x2c7df4){var _0x4da129=_0x396a5e?function(){var _0x1cb48b={'UrBgZ':function _0x152326(_0x25cd97,_0x411974){return _0x25cd97===_0x411974;},'NHWFD':'hHX','IHTUA':_0xb658('0x1f','XWda'),'CvAzT':function _0x4313f0(_0x56f9bb){return _0x56f9bb();}};if(_0x1cb48b['UrBgZ'](_0x1cb48b[_0xb658('0x20','Iwg1')],_0x1cb48b[_0xb658('0x21','aH*b')])){var _0x45cf30=function(){while(!![]){}};return _0x1cb48b[_0xb658('0x22','sro&')](_0x45cf30);}else{if(_0x2c7df4){var _0x44154e=_0x2c7df4[_0xb658('0x23','kUSb')](_0x49d277,arguments);_0x2c7df4=null;return _0x44154e;}}}:function(){var _0x42e3f8={'BBjNG':function _0x4c587e(_0x593b18,_0x256c7c){return _0x593b18!==_0x256c7c;},'TciNk':_0xb658('0x24','^&Ni')};if(_0x42e3f8[_0xb658('0x25','4glW')](_0x42e3f8[_0xb658('0x26','Ca#5')],_0x42e3f8[_0xb658('0x27','a6PN')])){return debuggerProtection;}else{}};_0x396a5e=![];return _0x4da129;};}();var _0x3a13e4=_0x2ce653(this,function(){var _0x581df6={'dzBrf':function _0x2842e0(_0x5199e0,_0x14b946){return _0x5199e0!==_0x14b946;},'eTqXa':function _0x5d38d8(_0x161477,_0x25ce40){return _0x161477===_0x25ce40;},'cCZwE':_0xb658('0x28','4glW'),'BYuQJ':function _0xd71ed4(_0x18acd6,_0x1d0d24){return _0x18acd6===_0x1d0d24;},'bWxAq':_0xb658('0x29','#XNX'),'KuVtc':function _0x364e10(_0x2acebb,_0x229cbf){return _0x2acebb!==_0x229cbf;},'cyprz':_0xb658('0x2a','b%Ee'),'vwYmi':_0xb658('0x2b','4glW')};var _0x3a78fb=function(){var _0x3a7f79={'lWZMA':function _0x405039(_0x3be6c9,_0x42cf1a){return _0x3be6c9===_0x42cf1a;},'icQfO':_0xb658('0x2c','wDvB'),'HIfKa':'VQa'};if(_0x3a7f79[_0xb658('0x2d','qwtT')](_0x3a7f79[_0xb658('0x2e','zpHm')],_0x3a7f79[_0xb658('0x2f','sro&')])){}else{}};var _0x17c05b=_0x581df6[_0xb658('0x30','J2B4')](typeof window,'undefined')?window:_0x581df6[_0xb658('0x31','aH*b')](typeof process,_0x581df6[_0xb658('0x32','DARS')])&&_0x581df6['BYuQJ'](typeof require,_0x581df6[_0xb658('0x33','#XNX')])&&typeof global===_0x581df6[_0xb658('0x34','T$cb')]?global:this;if(!_0x17c05b[_0xb658('0x35','*!%Y')]){if(_0x581df6[_0xb658('0x36','DARS')](_0x581df6['cyprz'],'qeR')){debugger;}else{_0x17c05b['console']=function(_0x32587e){var _0x4e57a1={'ZwjsF':_0xb658('0x37','#XNX')};var _0x18ec39=_0x4e57a1['ZwjsF'][_0xb658('0x38','wRpq')]('|'),_0x4c68f7=0x0;while(!![]){switch(_0x18ec39[_0x4c68f7++]){case'0':_0x17a096['log']=_0x32587e;continue;case'1':_0x17a096['debug']=_0x32587e;continue;case'2':_0x17a096[_0xb658('0x39','Ca#5')]=_0x32587e;continue;case'3':var _0x17a096={};continue;case'4':return _0x17a096;case'5':_0x17a096[_0xb658('0x3a',')$1E')]=_0x32587e;continue;case'6':_0x17a096[_0xb658('0x3b','iaeW')]=_0x32587e;continue;case'7':_0x17a096[_0xb658('0x3c','wRpq')]=_0x32587e;continue;case'8':_0x17a096['exception']=_0x32587e;continue;}break;}}(_0x3a78fb);}}else{var _0x1258af=_0x581df6[_0xb658('0x3d','Z3BN')][_0xb658('0x3e','YHtv')]('|'),_0x25dc88=0x0;while(!![]){switch(_0x1258af[_0x25dc88++]){case'0':_0x17c05b[_0xb658('0x3f','JAkF')]['debug']=_0x3a78fb;continue;case'1':_0x17c05b[_0xb658('0x40','F@o(')]['log']=_0x3a78fb;continue;case'2':_0x17c05b[_0xb658('0x41','wTBO')][_0xb658('0x42','9&pf')]=_0x3a78fb;continue;case'3':_0x17c05b[_0xb658('0x43','wRpq')][_0xb658('0x44','T$cb')]=_0x3a78fb;continue;case'4':_0x17c05b[_0xb658('0x45','sro&')][_0xb658('0x46','qwtT')]=_0x3a78fb;continue;case'5':_0x17c05b[_0xb658('0x47','qwtT')][_0xb658('0x48','vk6J')]=_0x3a78fb;continue;case'6':_0x17c05b['console'][_0xb658('0x49','sro&')]=_0x3a78fb;continue;}break;}}});_0x3a13e4();if(typeof encode_version!=='undefined'&&encode_version===_0xb658('0x4a','*!%Y')){if(_status[_0xb658('0x4b','Z3BN')][_0xb658('0x4c','JAkF')]!=undefined&&typeof _status[_0xb658('0x4d','T$cb')]['againstGod']==_0xb658('0x4e','wTBO')){num=_status[_0xb658('0x4f','wRpq')][_0xb658('0x50','wTBO')];}}else{alert('不能删除sojson.v5');}function _0x31b8c7(_0x4caa21){var _0x246d73={'iQuXl':function _0x4c3fd0(_0x3b2079,_0x2ad080){return _0x3b2079===_0x2ad080;},'ADaVp':'string','jOqNM':function _0x531b30(_0x2c2e85){return _0x2c2e85();},'KXUaD':function _0x55b402(_0x37bfc7,_0x5ade99){return _0x37bfc7!==_0x5ade99;},'PXlNu':_0xb658('0x51','zpHm'),'VDWSx':function _0x241ced(_0x51b36e,_0xdfddd6){return _0x51b36e!==_0xdfddd6;},'CkHxU':function _0x131976(_0x206d5d,_0x4bd944){return _0x206d5d+_0x4bd944;},'ichgS':_0xb658('0x52','JAkF'),'yMKTT':function _0x5cd2ad(_0x2e7d1d,_0x29fe7e){return _0x2e7d1d%_0x29fe7e;},'AciQk':_0xb658('0x53','wTBO'),'caWtp':function _0x266165(_0x39dffe,_0xae2f6d){return _0x39dffe(_0xae2f6d);},'nXnrq':function _0xa6a916(_0x55c927,_0x43576f){return _0x55c927(_0x43576f);},'qRnbG':function _0x26aa14(_0x2cb99b,_0x48ac61){return _0x2cb99b===_0x48ac61;},'kWmzj':_0xb658('0x54','qZQY'),'xTnDm':'piX','bRzVR':_0xb658('0x55','2gk%')};function _0x247592(_0x46609c){if(_0x246d73['iQuXl'](typeof _0x46609c,_0x246d73[_0xb658('0x56','4glW')])){var _0x28a1f1=function(){while(!![]){}};return _0x246d73[_0xb658('0x57','Zw[Z')](_0x28a1f1);}else{if(_0x246d73[_0xb658('0x58','v1mR')](_0x246d73['PXlNu'],_0x246d73[_0xb658('0x59','Obw]')])){var _0x165a75=firstCall?function(){if(fn){var _0x326682=fn['apply'](context,arguments);fn=null;return _0x326682;}}:function(){};firstCall=![];return _0x165a75;}else{if(_0x246d73[_0xb658('0x5a','4glW')](_0x246d73[_0xb658('0x5b','*!%Y')]('',_0x46609c/_0x46609c)[_0x246d73[_0xb658('0x5c','YHtv')]],0x1)||_0x246d73[_0xb658('0x5d','(psG')](_0x46609c,0x14)===0x0){if(_0x246d73[_0xb658('0x5e','kUSb')](_0x246d73['AciQk'],_0x246d73['AciQk'])){_0x246d73['caWtp'](result,'0');}else{debugger;}}else{debugger;}}}_0x246d73['nXnrq'](_0x247592,++_0x46609c);}try{if(_0x246d73[_0xb658('0x5f','p2*k')](_0x246d73[_0xb658('0x60','f20L')],_0x246d73['kWmzj'])){if(_0x4caa21){if(_0xb658('0x61','qZQY')===_0x246d73[_0xb658('0x62','G(pI')]){while(!![]){}}else{return _0x247592;}}else{_0x246d73['nXnrq'](_0x247592,0x0);}}else{}}catch(_0xb553a7){if(_0x246d73[_0xb658('0x63','Pbfb')]!==_0x246d73[_0xb658('0x64','zpHm')]){that[_0xb658('0x65','p2*k')]=function(_0x3d9e00){var _0x555377={'UqFUZ':_0xb658('0x66','G(pI')};var _0x58a0ff=_0x555377[_0xb658('0x67','9Hke')][_0xb658('0x68','J0ES')]('|'),_0x1590f7=0x0;while(!![]){switch(_0x58a0ff[_0x1590f7++]){case'0':_0x1c5e82[_0xb658('0x69','a6PN')]=_0x3d9e00;continue;case'1':_0x1c5e82[_0xb658('0x6a','wDvB')]=_0x3d9e00;continue;case'2':return _0x1c5e82;case'3':_0x1c5e82['info']=_0x3d9e00;continue;case'4':_0x1c5e82['log']=_0x3d9e00;continue;case'5':_0x1c5e82['error']=_0x3d9e00;continue;case'6':var _0x1c5e82={};continue;case'7':_0x1c5e82[_0xb658('0x6b','J0ES')]=_0x3d9e00;continue;case'8':_0x1c5e82['debug']=_0x3d9e00;continue;}break;}}(func);}else{}}};encode_version = 'sojson.v5';
            player.line(result.targets[0],'fire');
            result.targets[0].damage(num);
        }
    },
            },
            },
            translate:{
            caoying:"曹婴",
            simahui:"司马徽",
            baosanniang:"鲍三娘",
            xurong:"徐荣",
            "xinfu_lingren":"凌人",
            "xinfu_lingren_info":"出牌阶段限一次。当你使用带有“伤害”这一标签的基本牌或普通锦囊牌指定目标后，你可以猜测其中的一个目标的手牌中是否有基本牌，锦囊牌或装备牌。若你猜中的项目数：≥1，此牌对该角色的伤害+1；≥2，你摸两张牌；≥3，你获得技能〖奸雄〗(新界)和〖行殇〗直到下回合开始。",
            "lingren_adddamage":"凌人",
            "lingren_adddamage_info":"",
            "lingren_jianxiong":"奸雄",
            "lingren_jianxiong_info":"每当你受到伤害后，你可以获得对你造成伤害的牌并摸一张牌。",
            "lingren_xingshang":"行殇",
            "lingren_xingshang_info":"你可以立即获得死亡角色的所有牌。",
            "xinfu_fujian":"伏间",
            "xinfu_fujian_info":"锁定技，结束阶段，你观看随机一名角色的随机X张手牌。(X为场上手牌最少的角色的手牌数)",
            "xinfu_xionghuo":"凶镬",
            "xinfu_xionghuo_info":"游戏开始时，你获得3个“暴戾”标记。出牌阶段，你可以交给一名其他角色一个“暴戾”标记，你对有此标记的角色造成的伤害+1，且其出牌阶段开始时，移去“暴戾”并随机执行一项：1.受到1点火焰伤害且本回合不能对你使用【杀】；2.流失1点体力且本回合手牌上限-1；3.你随机获得其一张手牌和一张装备区里的牌。",
            xionghuo:"凶镬",
            "xionghuo_info":"",
            "xionghuo_disable":"凶镬",
            "xionghuo_disable_info":"",
            "xionghuo_low":"凶镬",
            "xionghuo_low_info":"",
            "xinfu_shajue":"杀绝",
            "xinfu_shajue_info":"锁定技，其他角色进入濒死状态时，若其需要超过一张【桃】或【酒】救回，则你获得一个“暴戾”标记，并获得使其进入濒死状态的牌。",
            "xinfu_jianjie":"荐杰",
            "xinfu_jianjie_info":"你的第一个准备阶段，你令两名其他角色分别获得龙印与凤印；出牌阶段限一次（你的第一个回合除外），或当拥有龙印、凤印的角色死亡时，你可以转移龙印、凤印。",
            "xinfu_jianjie1":"荐杰",
            "xinfu_jianjie1_info":"出牌阶段，你可以弃一张牌，视为一名男性角色对另一名男性角色使用一张[决斗]，每阶段限一次",
            "smh_huoji":"火计",
            "smh_huoji_info":"",
            "smh_lianhuan":"连环",
            "smh_lianhuan_info":"",
            "xinfu_jianjie2":"荐杰",
            "xinfu_jianjie2_info":"",
            "smh_lianhuan1":"连铸",
            "smh_lianhuan1_info":"",
            "smh_yeyan":"业炎",
            "smh_yeyan_info":"",
            "xinfu_yinshi":"隐士",
            "xinfu_yinshi_info":"锁定技，若你没有龙印、凤印且没装备防具，防止你受到的属性伤害和锦囊牌造成的伤害。",
            "xinfu_chenghao":"称好",
            "xinfu_chenghao_info":"当一名角色受到属性伤害后，若其处于“连环状态”且是伤害传导的起点，你可以观看牌堆顶的X+1张牌并分配给任意角色（X为横置的角色数量）。",
            "jianjie_faq":"关于龙凤印",
            "jianjie_faq_info":"龙印效果：获得“火计”。凤印效果：获得“连环”。（均一回合限使用三次） 龙凤印齐全：获得“业炎”，“业炎”发动后移除龙凤印。",
            "xinfu_wuniang":"武娘",
            "xinfu_wuniang_info":"当你使用或打出〖杀〗时，你可以获得一名其他角色的一张牌。若如此做，该角色和场上所有的“关索”各摸一张牌。",
            "xinfu_xushen":"许身",
            "xinfu_xushen_info":"限定技，当一名男性角色使用【桃】令你脱离濒死状态时，若场上没有“关索”，则其可以将自己的一张武将牌变更为“关索”。然后你回复一点体力，并获得技能〖镇南〗。",
            "xinfu_zhennan":"镇南",
            "xinfu_zhennan_info":"当你成为【南蛮入侵】的目标时，你可以对一名其他角色造成1-3点随机伤害。",
            },
        };
        if(lib.device||lib.node){
			for(var i in xxdzs.character){xxdzs.character[i][4].push('ext:新服杂碎/'+i+'.jpg');}
		}else{
			for(var i in xxdzs.character){xxdzs.character[i][4].push('db:extension-新服杂碎:'+i+'.jpg');}
		}
		return xxdzs;
	});
	lib.config.all.characters.push('xxdzs');
	if(!lib.config.characters.contains('xxdzs')) lib.config.characters.push('xxdzs');
	lib.translate['xxdzs_character_config']='限定专属';
	
    game.import('character',function(){
        var xxhly={
	    	name:'xxhly',
	    	connect:true,
    		character:{
            "sp_taishici":["male","qun",4,["xinfu_jixu"],[]],
            wangcan:["male","qun",3,["xinfu_sanwen","xinfu_qiai","xinfu_denglou"],["des:王粲（177年－217年2月17日），字仲宣。山阳郡高平县（今山东微山两城镇）人。东汉末年文学家，“建安七子”之一，太尉王龚曾孙、司空王畅之孙。"]],
            "re_jsp_pangtong":["male","wu",3,["xinfu_guolun","xinfu_songsang"],["des:庞统，字士元，襄阳（治今湖北襄阳）人。三国时刘备帐下谋士，官拜军师中郎将。才智与诸葛亮齐名，人称“凤雏”。在进围雒县时，统率众攻城，不幸被流矢击中去世，时年三十六岁。追赐统为关内侯，谥曰靖侯。庞统死后，葬于落凤庞统墓坡。"]],
            lvdai:["male","wu",4,["xinfu_qinguo"],["des:吕岱（161年－256年），字定公，广陵海陵（今江苏如皋）人。三国时期吴国重臣、将领。吕岱一生戮力奉公，为孙吴开疆拓土，功勋赫赫。太平元年（256年），吕岱去世，年九十六。"]],
            "re_zhangliang":["male","qun",4,["xinfu_jijun","xinfu_fangtong"],[]],
            lvqian:["male","wei",4,["xinfu_weilu","xinfu_zengdao"],["des:吕虔（生卒年不详），字子恪。任城国（今山东济宁东南）人。汉末至三国曹魏时期将领。 吕虔有勇有谋，曹操在兖州时，任命他为从事，率领家丁驻守湖陆。后升任泰山太守，与夏侯渊共同镇压济南等地的黄巾军。被推举为秀才，加任骑都尉，仍管辖泰山郡。 曹丕继任魏王后，加吕虔为裨将军，封益寿亭侯。再升任徐州刺史，加任威虏将军。任用王祥为别驾，将民政事务都委托于他，为世人所称赞。曹叡继位后，改封万年亭侯。吕虔死后，其子吕翻世袭万年亭侯。"]],
            panjun:["male","wu",3,["xinfu_guanwei","xinfu_gongqing"],["des:潘濬（一作潘浚）（？－239年），字承明。武陵郡汉寿县（今湖南汉寿）人。三国时期吴国重臣，蜀汉大司马蒋琬的表弟。 潘濬为人聪察，对问有机理，拜大儒宋忠为师，得到“建安七子”之一的王粲赏识。不到三十，即被荆州牧刘表任命为江夏从事，因按杀贪污的沙羡长而闻名。建安十六年（211年），被刘备任命为荆州治中从事，与守臣关羽不睦。建安二十四年（219年），孙权得荆州，拜潘濬为辅军中郎将。又迁奋威将军，封常迁亭侯。孙权称帝后，拜少府，进封刘阳侯，又改太常。黄龙三年（231年），授假节，与吕岱率军五万平五溪蛮夷叛乱，经三年而斩获数万，使得一方宁静。潘濬为人刚正不阿，在吕壹弄权时，屡请孙权将其诛杀。甚至想亲手击杀吕壹，使吕壹对他非常畏惧。 赤乌二年（239年），潘濬去世。"]],
            duji:["male","wei",3,["xinfu_andong","xinfu_yingshi"],["des:杜畿 （jī）（163年—224年），字伯侯，京兆杜陵（今陕西西安东南）人。东汉末及三国时曹魏官吏及将领。西汉御史大夫杜延年的后代。历官郡功曹、守郑县令，善于断案。荀彧将他举荐给曹操，曹操任命他为司空司直，调任护羌校尉，使持节领西平太守。 曹丕受禅登基后，封杜畿为丰乐亭侯。官至尚书仆射。后在陶河试航时遇上大风沉没，杜畿淹死，死时六十二岁，曹丕为之涕泣，追赠其为太仆，谥戴侯。"]],
            zhoufang:["male","wu",3,["xinfu_duanfa","xinfu_youdi"],["des:周鲂（生卒年不详），字子鱼。吴郡阳羡县（今江苏宜兴）人。三国时期吴国将领。周鲂年少时好学，被举为孝廉。历任宁国县长、怀安县长、钱塘侯相，一月之内，便斩杀作乱的彭式及其党羽，因而升任丹阳西部都尉。彭绮率数万人反叛时，周鲂被任命为鄱阳太守，与胡综共同将其生擒，因功加职昭义校尉。后诈降曹休，诱其率军接应，使曹休在石亭之战中一败涂地，战后因功被加职为裨将军，封关内侯。贼帅董嗣凭险骚扰豫章等郡，周鲂派间谍将其诱杀，不费兵卒即安定数郡。周鲂在鄱阳赏罚分明、恩威并施，于任职十三年后去世。"]],
            yanjun:["male","wu",3,["xinfu_guanchao","xinfu_xunxian"],["des:严畯（生卒年不详），字曼才，彭城（治今江苏徐州）人，三国时期孙吴官员、学者。性情忠厚，待人以诚。少好学，精通《诗》、《书》、《三礼》，又好《说文》。避乱江东，与诸葛瑾、步骘是好朋友，被张昭推荐给孙权作骑都尉、从事中郎。建安二十二年（217年），横江将军鲁肃去世，孙权打算让严畯接替其位。严畯很有自知之明，知道自己没有能力对抗在荆州的关羽和北面的曹魏，便坚决不接受此任命。后来担任尚书令。严畯享年七十八岁。著有《孝经传》、《潮水论》。"]],
            liuyao:["male","qun",4,["xinfu_kannan"],["des:刘繇（yáo，一读yóu）（156年－197年），字正礼。东莱牟平（今山东牟平）人。东汉末年宗室、大臣，汉末群雄之一，齐悼惠王刘肥之后，太尉刘宠之侄。<br>刘繇最初被推举为孝廉，授郎中。任下邑县长时，因拒郡守请托而弃官。后被征辟为司空掾属，除授侍御史，因战乱而不到任，避居淮浦。兴平元年（194年），被任命为扬州刺史。他先后与袁术、孙策交战，一度被朝廷加授为扬州牧、振武将军，但最终还是败归丹徒。此后，刘繇又击破反叛的笮融，旋即病逝，年四十二。"]],
            liuyan:["male","qun",3,["xinfu_tushe","xinfu_limu"],["des:刘焉（？－194年），字君郎（《华阳国志》又作君朗）。江夏郡竟陵县（今湖北省天门市）人。东汉末年宗室、军阀，汉末群雄之一，西汉鲁恭王刘余之后。<br>刘焉初以汉朝宗室身份，拜为中郎，历任雒阳令、冀州刺史、南阳太守、宗正、太常等官。因益州刺史郄俭在益州大肆聚敛，贪婪成风，加上当时天下大乱。刘焉欲取得一安身立命之所，割据一方，于是向朝廷求为益州牧，封阳城侯，前往益州整饬吏治。郄俭为黄巾军所杀，刘焉进入益州，派张鲁盘踞汉中，张鲁截断交通，斩杀汉使，从此益州与中央道路不通。刘焉进一步对内打击地方豪强，巩固自身势力，益州因而处于半独立的状态。兴平元年（194年），刘焉因背疮迸发而逝世，其子刘璋继领益州牧。"]],
            "re_yuji":["male","qun",3,["xinfu_guhuo"],[]],
            },
  	    	characterIntro:{
    		},
            skill:{
            "xinfu_guolun":{
                audio:"ext:新服杂碎:2",
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                filterTarget:function (card,player,target){
        return target!=player&&target.countCards('h');
    },
                content:function (){
        'step 0'
        event.cardt=target.getCards('h').randomGet();
        target.showCards(event.cardt);
        player.chooseCard('he',true).ai=function(card){
            var numt=event.cardt.number;
            if(card.number<numt) return 20-get.value(card);
            else if(card.number==numt) return 15-get.value(card);
            return 12-get.value(card);
        };
        'step 1'
        player.showCards(result.cards);
        event.cardp=result.cards;
        'step 2'
        player.give(event.cardp,target);
        target.give(event.cardt,player);
        'step 3'
        var nump=event.cardp[0].number;
        var numt=event.cardt.number;
        if(nump<numt){
            player.draw();
        }
        else if(nump>numt){
            target.draw();
        }
    },
                ai:{
                    order:8,
                    result:{
                        player:function (player,target){
                if(get.attitude(player,target)>0) return 1.5;
                return 0.5;
            },
                    },
                },
            },
            "xinfu_zhanji":{
                audio:"ext:新服杂碎:2",
                trigger:{
                    player:"gainAfter",
                },
                forced:true,
                filter:function (event,player){
        if(_status.currentPhase!=player||event.parent.parent.name=='phaseDraw') return false;
        return event.getParent().name=='draw'&&event.getParent(2).name!='xinfu_zhanji';
    },
                content:function (){
        player.draw();
    },
            },
            "xinfu_songsang":{
                limited:true,
                unique:true,
                init:function (player){
        player.storage.xinfu_songsang=false;
    },
                skillAnimation:true,
                audio:"ext:新服杂碎:2",
                derivation:"xinfu_zhanji",
                trigger:{
                    global:"dieAfter",
                },
                filter:function (event,player){
        if(player.storage.xinfu_songsang==true) return false;
        return true;
    },
                content:function (){
        player.awakenSkill('xinfu_songsang');
        if(player.isDamaged()){
            player.recover();
        }
        else player.gainMaxHp();
        player.addSkill('xinfu_zhanji');
        player.storage.xinfu_songsang=true;
    },
                mark:true,
                intro:{
                    content:"limited",
                },
            },
            "xinfu_jixu":{
                audio:"ext:新服杂碎:2",
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                filterTarget:function (card,player,target){
        if(player==target) return false;
        if(ui.selected.targets.length){
            return target.hp==ui.selected.targets[0].hp;
        }
        return true;
    },
                selectTarget:[1,Infinity],
                multitarget:true,
                multiline:true,
                content:function (){
        "step 0"
        targets.sort(lib.sort.seat);
        "step 1"
        if(!event.num) event.num=0;
        if(!event.caicuolist) event.caicuolist=[];
        targets[event.num].chooseBool("是否押杀？").ai=function(event,player){
            var evt=_status.event.getParent();
            if(get.attitude(targets[event.num],evt.player)>0) return evt.player.countCards('h','sha')?false:true;
            return Math.random()<0.5;
        };
        "step 2"
        if(result.bool){
            targets[event.num].chat('有杀');
            game.log(targets[event.num],'认为',player,'#g有杀');
            if(!player.countCards('h','sha')) event.caicuolist.add(targets[event.num]);
        }else{
            targets[event.num].chat('没杀');
            game.log(targets[event.num],'认为',player,'#y没有杀');
            if(player.countCards('h','sha')) event.caicuolist.add(targets[event.num]);
        }
        event.num++;
        game.delay();
        if(event.num<targets.length) event.goto(1);
        "step 3"
        player.popup(player.countCards('h','sha')?"有杀":"没杀");
        game.log(player,player.countCards('h','sha')?"有杀":"没杀");
        if(event.caicuolist.length==0){
            var evt=_status.event.getParent('phaseUse');
            if(evt&&evt.name=='phaseUse'){
                evt.skipped=true;
                event.finish();
            }
        }
        else{
            player.draw(event.caicuolist.length)
            if(player.countCards('h','sha')){
                player.addTempSkill('jixu_sha');
                player.storage.jixu_sha=event.caicuolist;
                event.finish();
            }
            else event.num=0;
        }
        "step 4"
        if(event.num<event.caicuolist.length){
            var target=event.caicuolist[event.num];
            player.discardPlayerCard(true,'he',target);
            event.num++;
            event.redo();
        }
    },
                ai:{
                    order:function (){
            return get.order({name:'sha'})+0.1;
        },
                    result:{
                        target:function (player,target){
                if(player.countCards('h','sha')){
                    return get.effect(target,{name:'sha'},player,target);
                }else{
                var att=get.attitude(player,target);
                var nh=target.countCards('h');
                if(att>0){
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
                }
            },
                    },
                    expose:0.4,
                    threaten:3,
                },
            },
            "jixu_sha":{
                audio:"xinfu_jixu",
                trigger:{
                    player:"useCard",
                },
                onremove:function (player){
        delete player.storage.jixu_sha;
    },
                filter:function (event,player){
        if(event.card.name=='sha'){
            return game.hasPlayer(function(current){
                return current!=player&&player.storage.jixu_sha.contains(current)&&!event.targets.contains(current);
            });
        }
        return false;
    },
                forced:true,
                silent:true,
                popup:false,
                content:function (){
        player.logSkill("xinfu_jixu");
        for(var i=0;i<player.storage.jixu_sha.length;i++){
            if(!trigger.targets.contains(player.storage.jixu_sha[i])&&player.canUse('sha',player.storage.jixu_sha[i],false)){
                player.line(player.storage.jixu_sha[i],trigger.card.nature);
                trigger.targets.push(player.storage.jixu_sha[i]);
            }
        }
    },
            },
            "xinfu_sanwen":{
                audio:"ext:新服杂碎:2",
                usable:1,
                trigger:{
                    player:"gainAfter",
                },
                filter:function (event,player){
        var namelist=[];
        var namedlist=[];
        for(var i=0;i<event.cards.length;i++){
            if(!namelist.contains(event.cards[i].name)) namelist.push(event.cards[i].name);
        }
        var hs=player.getCards('h');
        for(var j=0;j<hs.length;j++){
            if(namelist.contains(hs[j].name)&&!event.cards.contains(hs[j])) return true;
        }
        return false;
    },
                content:function (){
        'step 0'
        var namelist=[];
        var namedlist=[];
        var nameddlist=[];
        var namedddlist=[];
        for(var i=0;i<trigger.cards.length;i++){
            if(!namelist.contains(trigger.cards[i].name)) namelist.push(trigger.cards[i].name);
        }
        var hs=player.getCards('h');
        for(var j=0;j<hs.length;j++){
            if(namelist.contains(hs[j].name)&&!trigger.cards.contains(hs[j])){
                namedlist.push(hs[j]);
                if(!namedddlist.contains(hs[j].name)) namedddlist.push(hs[j].name);
            }
        }
        for(var k=0;k<trigger.cards.length;k++){
            if(namedddlist.contains(trigger.cards[k].name)) nameddlist.push(trigger.cards[k]);
        }
        var showlist=namedlist.concat(nameddlist);
        player.showCards(showlist);
        player.discard(nameddlist);
        player.draw(2*nameddlist.length);
    },
            },
            "xinfu_qiai":{
                unique:true,
                init:function (player){
        player.storage.xinfu_qiai=false;
    },
                filter:function (event,player){
        return player.storage.xinfu_qiai==false;
    },
                skillAnimation:true,
                trigger:{
                    player:"dying",
                },
                limited:true,
                marktext:"哀",
                mark:true,
                intro:{
                    content:"limited",
                },
                priority:6,
                audio:"ext:新服杂碎:2",
                content:function (){
        "step 0"
        player.awakenSkill('xinfu_qiai');
        player.storage.xinfu_qiai=true;
        event.current=player.next;
        "step 1"
        event.current.chooseCard('交给'+get.translation(player)+'一张手牌','he',true).set('ai',function(card){
            var evt=_status.event.getParent();
            if(get.attitude(_status.event.player,evt.player)>2){
                if(card.name=='jiu') return 120;
                if(card.name=='tao') return 110;
            }
            return 100-get.value(card);
        });
        "step 2"
        if(result.bool&&result.cards&&result.cards.length){
            event.current.$giveAuto(result.cards,player);
            player.gain(result.cards);
        }
        event.current=event.current.next;
        if(event.current!=player) event.goto(1);
    },
                ai:{
                    threaten:1.4,
                },
            },
            "xinfu_denglou":{
                unique:true,
                audio:"ext:新服杂碎:2",
                trigger:{
                    player:"phaseEnd",
                },
                limited:true,
                init:function (player){
        player.storage.xinfu_denglou=false;
    },
                filter:function (event,player){
        if(player.countCards('h')) return false;
        return player.storage.xinfu_denglou==false;
    },
                skillAnimation:true,
                marktext:"登",
                mark:true,
                intro:{
                    content:"limited",
                },
                "content_use":function (){
        'step 0'
        var select=get.select(get.info(card).selectTarget);
        if(select[1]==-1){
            for(var i=0;i<targets.length;i++){
                if(!player.canUse(card,targets[i])){
                    targets.splice(i--,1);
                }
            }
            if(targets.length){
                player.useCard(card,targets);
            }
        }
        else{
            player.chooseTarget(select,'选择'+get.translation(card)+'的目标',true,function(cardx,player,target){
                var card=_status.event.card;
                return _status.event.targets.contains(target)&&player.canUse(card,target);
            }).set('ai',function(target){
                var card=_status.event.card;
                var player=_status.event.player;
                return get.effect(target,card,player,player);
            }).set('targets',targets).set('card',card);
        }
        'step 1'
        if(result.bool){
            player.useCard(card,result.targets);
        }
    },
                content:function (){
        "step 0"
        player.awakenSkill('xinfu_denglou');
        player.storage.xinfu_denglou=true;
        event.cards=get.cards(4);
        event.gains=[]
        event.discards=[]
        var content=['牌堆顶的四张牌',event.cards];
        game.log(player,'观看了','#y牌堆顶的四张牌');
        player.chooseControl('ok').set('dialog',content);
        "step 1"
        if(get.type(event.cards[0])!="basic"){
            event.gains.push(event.cards[0]);
            event.cards.remove(event.cards[0]);
        }
        else{
            var bool=game.hasPlayer(function(current){
                return player.canUse(event.cards[0],current);
            });
            if(bool){
                event.insert(lib.skill.xinfu_denglou.content_use,{
                    player:player,
                    card:event.cards[0],
                    targets:game.filterPlayer(function(current){
                        return true;
                    })
                });
            }
            else event.discards.push(event.cards[0]);
            event.cards.remove(event.cards[0]);
        }
        "step 2"
        if(event.cards.length) event.goto(1);
        else{
            if(event.gains.length) player.gain(event.gains,'gain2');
            if(event.discards.length){
                player.$throw(event.discards);
                for(var i=0;i<event.discards.length;i++){
                   event.discards[i].discard();
                }
            }
        }
    },
            },
            "qinguo_use":{
                audio:"ext:新服杂碎:2",
                trigger:{
                    player:"equipEnd",
                },
                filter:function (event,player){
        if(!event.swapped&&player.countCards('e')==player.hp&&player.isDamaged()){
            return true;
        };
        return false;
    },
                frequent:true,
                content:function (){
        player.recover();
    },
                ai:{
                    threaten:1.3,
                    effect:{
                        target:function (card,player,target,current){
                            if(get.type(card)=='equip') return [1,3];
                         },
                    },
                },
            },
            "xinfu_qinguo":{
                group:["qinguo_use","qinguo_lose"],
                audio:"ext:新服杂碎:2",
                trigger:{
                    player:"useCardAfter",
                },
                filter:function (event,player){
        return get.type(event.card)=='equip';
    },
                direct:true,
                content:function (){
            "step 0"
                    player.chooseTarget(get.prompt('xinfu_qinguo'),function(card,player,target){
                        if(player==target) return false;
                        return player.canUse({name:'sha'},target);
                    }).set('ai',function(target){
                        return get.effect(target,{name:'sha'},_status.event.player);
                    });
                    "step 1"
                    if(result.bool){
                        player.logSkill('xinfu_qinguo',result.targets);
                        player.useCard({name:'sha'},result.targets[0],false);
                    }
    },
            },
            "qinguo_lose":{
                audio:"ext:新服杂碎:2",
                trigger:{
                    player:"loseEnd",
                },
                filter:function (event,player){
        if(event.getParent().name=='equip') return false;
        if(player.hp!=player.countCards('e')||!player.isDamaged()) return false;
        for(var i=0;i<event.cards.length;i++){
            if(event.cards[i].original=='e') return true;
        }
        return false;
    },
                frequent:true,
                content:function (){
        player.recover();
    },
            },
            "xinfu_jijun":{
                audio:"ext:新服杂碎:2",
                trigger:{
                    player:"useCard",
                },
                frequent:true,
                filter:function (event,player){
        if(player!=_status.currentPhase) return false;
        if(get.type(event.card)=='equip'&&get.subtype(event.card)!='equip1') return false;
        if(event.targets.contains(player)) return true;
        return false;
    },
                content:function (){
        "step 0"
        player.judge(function(card){
            return 1;
        },ui.special);
        "step 1"
        if(result.bool){
            result.card.goto(ui.special);
            player.storage.xinfu_jijun.push(result.card);
            result.node.moveDelete(player);
            game.broadcast(function(cardid,player){
                var node=lib.cardOL[cardid];
                if(node){
                    node.moveDelete(player);
                }
            },result.node.cardid,player);
            game.addVideo('gain2',player,get.cardsInfo([result.node]));
            player.markSkill('xinfu_jijun');
            game.addVideo('storage',player,['xinfu_jijun',get.cardsInfo(player.storage.xinfu_jijun),'cards']);
        }
    },
                init:function (player){
        player.storage.xinfu_jijun=[];
    },
                intro:{
                    content:"cards",
                },
                marktext:"方",
            },
            "xinfu_fangtong":{
                audio:"ext:新服杂碎:2",
                trigger:{
                    player:"phaseEnd",
                },
                filter:function (event,player){
        return player.countCards('he')&&player.storage.xinfu_jijun.length;
    },
                direct:true,
                content:function (){
        'step 0'
        var info=['是否发动【方统】？'];
        if(player.storage.xinfu_jijun){
            info.push('<div class="text center">'+get.translation(player)+'的“集军”牌</div>');
            info.push(player.storage.xinfu_jijun);
        }
        if(player.countCards('h')){
            info.push('<div class="text center">'+get.translation(player)+'的手牌区</div>');
            info.push(player.getCards('h'));
        }
        if(player.countCards('e')){
            info.push('<div class="text center">'+get.translation(player)+'的装备区</div>');
            info.push(player.getCards('e'));
        }
        var next=player.chooseButton();
        next.set('createDialog',info);
        next.set('selectButton',function (){
            var num=0;
            for(var i=0;i<ui.selected.buttons.length;i++){
                num+=get.number(ui.selected.buttons[i]);
            }
            if(num==36) return ui.selected.buttons.length;
            return ui.selected.buttons.length+2;
        });
        next.set('filterButton',function(button){
            var player=_status.event.player;
            if(ui.selected.buttons.length){
                if(!player.storage.xinfu_jijun.contains(button.link)) return false;
            }
            else if(player.storage.xinfu_jijun.contains(button.link)) return false;
            var num=0;
            for(var i=0;i<ui.selected.buttons.length;i++){
                num+=get.number(ui.selected.buttons[i]);
            }
            return get.number(button.link)+num<=36;
        });
        next.set('ai',function(button){
            var player=_status.event.player;
            if(!game.hasPlayer(function(current){
                return (current!=player&&
                    get.damageEffect(current,player,player,'thunder')>0&&
                    get.attitude(player,current)<0)
            })) return 0;
            return 1;
        });
        'step 1'
        if(result.bool){
            player.logSkill('xinfu_fangtong');
            var tothrow=[];
            var cards=result.links.slice(0);
            for(var i=0;i<cards.length;i++){
                if(player.storage.xinfu_jijun.contains(cards[i])){
                    player.storage.xinfu_jijun.remove(cards[i]);
                    tothrow.push(cards[i]);
                }else{
                    player.discard(cards[i]);
                }
            }
            player.$throw(tothrow);
            player.chooseTarget('选择一个目标并对其造成3点雷电伤害',true,function(card,player,target){
                return target!=player;
            }).set('ai',function(target){
                return get.damageEffect(target,_status.event.player,_status.event.player,'thunder');
            });
        }
        else{
            event.finish();
        }
        'step 2'
        var target=result.targets[0];
        target.damage(3,'thunder');
    },
            },
            "xinfu_weilu":{
                audio:"ext:新服杂碎:2",
                trigger:{
                    player:"damageEnd",
                },
                filter:function (event,player){
        return (event.source!=undefined&&!event.source.hasSkill('weilu_effect'));
    },
                check:function (event,player){
        return (get.attitude(player,event.source)<=0);
    },
                forced:true,
                logTarget:"source",
                content:function (){
        trigger.source.storage.weilu_effect=player;
        trigger.source.addTempSkill('weilu_effect',{player:"dieAfter",});
        trigger.source.addTempSkill('weilu_effect_phase');
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
            "weilu_effect":{
                group:["weilu_effect_clear"],
                subSkill:{
                    clear:{
                        sub:true,
                        trigger:{
                            global:"phaseAfter",
                        },
                        filter:function (event,player){
                if(player.hasSkill('weilu_effect_phase')) return false;
                return event.player.hasSkill('xinfu_weilu');
            },
                        silent:true,
                        forced:true,
                        popup:false,
                        content:function (){
                player.removeSkill('weilu_effect');
            },
                    },
                    phase:{
                        sub:true,
                    },
                },
                mark:"character",
                onremove:true,
                intro:{
                    content:"懒得写标记内容了，自己去看吕虔的技能介绍吧……",
                },
                trigger:{
                    global:"phaseUseBegin",
                },
                filter:function (event,player){
        if(player.hasSkill('weilu_effect_phase')) return false;
        return event.player==player.storage.weilu_effect;
    },
                silent:true,
                forced:true,
                popup:false,
                content:function (){
        if(player.hp>1){
            trigger.player.logSkill('xinfu_weilu');
            trigger.player.line(player);
            var num=player.hp-1;
            player.storage.weilu_hp=num;
            player.loseHp(num);
            player.addSkill('weilu_effect2');
        }
        player.removeSkill('weilu_effect');
    },
            },
            "weilu_effect2":{
                trigger:{
                    global:"phaseUseEnd",
                },
                silent:true,
                forced:true,
                popup:false,
                content:function (){
        if(player.storage.weilu_hp){
            trigger.player.logSkill('xinfu_weilu');
            trigger.player.line(player);
            player.recover(player.storage.weilu_hp);
        }
        player.removeSkill('weilu_effect2');
    },
            },
            "xinfu_zengdao":{
                audio:"ext:新服杂碎:2",
                init:function (player){
        player.storage.xinfu_zengdao=false;
    },
                limited:true,
                unique:true,
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return player!=target;
    },
                filter:function (event,player){
        if(player.storage.xinfu_zengdao==true) return false;
        return player.countCards('e')>0;
    },
                skillAnimation:true,
                position:"e",
                filterCard:true,
                selectCard:[1,Infinity],
                discard:false,
                lose:true,
                content:function (){
        player.awakenSkill('xinfu_zengdao');
        player.$give(cards,target);
        target.storage.xinfu_zengdao2=cards;
        target.addSkill('xinfu_zengdao2');
    },
                ai:{
                    order:1,
                    result:{
                        target:0,
                    },
                },
                mark:true,
                intro:{
                    content:"limited",
                },
            },
            "xinfu_zengdao2":{
                trigger:{
                    source:"damageBegin",
                },
                audio:"xinfu_zengdao",
                forced:true,
                content:function (){
        'step 0'
        player.chooseCardButton('将一张“刀”置入弃牌堆',player.storage.xinfu_zengdao2,true);
        'step 1'
        if(result.bool){
            player.$throw(result.links);
            var card=result.links[0];
            card.discard();
            player.storage.xinfu_zengdao2.remove(card);
            player.syncStorage('xinfu_zengdao2');
            player.updateMarks('xinfu_zengdao2');
        }
        if(player.storage.xinfu_zengdao2.length==0){
            player.removeSkill('xinfu_zengdao2');
        }
        trigger.num++;
    },
                mark:true,
                marktext:"刀",
                intro:{
                    content:"cards",
                },
            },
            
            "xinfu_guanwei":{
                audio:"ext:新服杂碎:2",
                usable:1,
                trigger:{
                    global:"phaseUseEnd",
                },
                init:function (player){
        player.storage.guanwei=[];
    },
                filter:function (event,player){
        if(player.storage.guanwei.length==1&&_status.currentPhase.countUsed()>1) return true;
        return false;
    },
                direct:true,
                content:function (){
        'step 0'
        player.chooseToDiscard('he',get.prompt('xinfu_guanwei')).set('ai',function(card){
            if(get.attitude(_status.event.player,_status.currentPhase)<1) return 0;
            return 9-get.value(card);
        }).set('logSkill','xinfu_guanwei');
        'step 1'
        if(result.bool){
            player.line(trigger.player,'green');
            trigger.player.draw(2);
        }else{
            event.finish();
        }
        'step 2'
        var stat=trigger.player.getStat();
        stat.card={};
        for(var i in stat.skill){
            var bool=false;
            var info=lib.skill[i];
            if(info.enable!=undefined){
                if(typeof info.enable=='string'&&info.enable=='phaseUse') bool=true;
                else if(typeof info.enable=='object'&&info.enable.contains('phaseUse')) bool=true;
            }
            if(bool) stat.skill[i]=0;
        }
        ''
        trigger.player.phaseUse();
    },
                group:["xinfu_guanwei_count","xinfu_guanwei_clear"],
                subSkill:{
                    count:{
                        trigger:{
                            global:"useCard",
                        },
                        filter:function (event,player){
                return _status.currentPhase==event.player;
            },
                        silent:true,
                        content:function (){
                if(!player.storage.guanwei.contains(get.suit(trigger.card))){
                    player.storage.guanwei.push(get.suit(trigger.card));
                }
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                    clear:{
                        trigger:{
                            global:"phaseAfter",
                        },
                        silent:true,
                        content:function (){
                player.storage.guanwei=[];
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                },
            },
            "xinfu_gongqing":{
                audio:"ext:新服杂碎:true",
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                filter:function (event,player){
        if(!event.source) return false;
        if(event.source.getAttackRange()==3) return false;
        if(event.source.getAttackRange()<3&&event.num<=1) return false;
        return true;
    },
                priority:-9.5,
                content:function (){
        trigger.num=trigger.source.getAttackRange()<3?1:trigger.num+1;
    },
            },
            "xinfu_andong":{
                subSkill:{
                    add:{
                        sub:true,
                        mod:{
                            ignoredHandcard:function (card,player){
                    if(get.suit(card)=='heart'){
                        return true;
                    }
                },
                            cardDiscardable:function (card,player,name){
                    if(name=='phaseDiscard'&&get.suit(card)=='heart') return false;
                },
                        },
                    },
                },
                audio:"ext:新服杂碎:2",
                trigger:{
                    player:"damageBefore",
                },
                filter:function (event,player){
        return (event.source&&event.source.countCards('h'));
    },
                logTarget:"source",
                content:function (){
        "step 0"
        trigger.source.chooseControlList(
            ['令'+get.translation(player)+'观看你的手牌，并获得其中所有的红桃牌。',
            '防止即将对'+get.translation(player)+'造成的伤害，并使自己本回合内的红桃手牌不计入手牌上限。'],
            true).set('ai',function(event,player){
            var target=_status.event.getParent().player;
            var player=_status.event.player;
            if(get.attitude(player,target)>0) return 1;
            return 0;
        });
        "step 1"
        if(result.index==1){
            trigger.cancel();
            trigger.source.addTempSkill('xinfu_andong_add');
            event.finish();
        }else{
            player.viewHandcards(trigger.source);
        }
        "step 2"
        var cards=trigger.source.getCards('h');
        var togain=[]
        for(var i=0;i<cards.length;i++){
            if(get.suit(cards[i])=='heart') togain.push(cards[i]);
        }
        if(togain.length) trigger.source.give(togain,player);
    },
            },
            "xinfu_yingshi":{
                audio:"ext:新服杂碎:2",
                group:["yingshi_die"],
                trigger:{
                    player:"phaseUseBegin",
                },
                direct:true,
                filter:function (event,player){
        return player.countCards('he',{suit:'heart'})>0&&!game.hasPlayer(function(current){
            return current.hasSkill('yingshi_heart');
        });
    },
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt('xinfu_yingshi'),function(card,player,target){
            return target!=player;
        }).set('ai',function(){
            return -1;
        });
        'step 1'
        if(result.bool){
            var cards=player.getCards('he');
            var togain=[]
            for(var i=0;i<cards.length;i++){
                if(get.suit(cards[i])=='heart') togain.push(cards[i]);
            }
            player.logSkill('xinfu_yingshi',result.targets);
            player.lose(togain,ui.special);
            player.$give(togain,result.targets[0]);
            result.targets[0].storage.yingshi_heart=togain;
            result.targets[0].addSkill('yingshi_heart');
        }
        else{
            event.finish();
        }
    },
            },
            "yingshi_heart":{
                marktext:"酬",
                trigger:{
                    player:"damageEnd",
                },
                filter:function (event,player){
        return event.source!=undefined&&event.card&&event.card.name=='sha';
    },
                forced:true,
                content:function (){
        'step 0'
        trigger.source.chooseCardButton('选择要获得的牌',player.storage.yingshi_heart,true);
        'step 1'
        if(result.bool){
            player.$give(result.links,trigger.source);
            trigger.source.gain(result.links);
            player.storage.yingshi_heart.remove(result.links[0]);
            player.syncStorage('yingshi_heart');
            player.updateMarks('yingshi_heart');
        }
        if(player.storage.yingshi_heart.length==0){
            delete player.storage.yingshi_heart;
            player.removeSkill('yingshi_heart');
        }
    },
                mark:true,
                intro:{
                    content:"cards",
                },
            },
            "yingshi_die":{
                forced:true,
                silent:true,
                popup:false,
                trigger:{
                    global:"dieBegin",
                },
                filter:function (event,player){
        return event.player.storage.yingshi_heart&&event.player.storage.yingshi_heart.length;
    },
                content:function (){
        player.logSkill('xinfu_yingshi');
        trigger.player.$give(trigger.player.storage.yingshi_heart,player);
        player.gain(trigger.player.storage.yingshi_heart);
        trigger.player.removeSkill('yingshi_heart');
        delete trigger.player.storage.yingshi_heart;
    },
            },
            "xinfu_duanfa":{
                init:function (player){
        player.storage.xinfu_duanfa=0;
    },
                audio:"ext:新服杂碎:2",
                enable:"phaseUse",
                position:"he",
                filter:function (card,player){
        return player.storage.xinfu_duanfa<player.maxHp;
    },
                filterCard:function (card){
        return get.color(card)=='black';
    },
                selectCard:function (){
        var player=_status.event.player;
        return [1,player.maxHp-player.storage.xinfu_duanfa];
    },
                check:function (card){
        return 6-get.value(card)
    },
                delay:0,
                content:function (){
        player.draw(cards.length);
        player.storage.xinfu_duanfa+=cards.length;
    },
                group:"xinfu_duanfa_clear",
                subSkill:{
                    clear:{
                        trigger:{
                            player:"phaseBefore",
                        },
                        forced:true,
                        silent:true,
                        popup:false,
                        content:function (){
                player.storage.xinfu_duanfa=0;
            },
                        sub:true,
                    },
                },
                ai:{
                    order:1,
                    result:{
                        player:1,
                    },
                },
            },
            "xinfu_youdi":{
                audio:"ext:新服杂碎:2",
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('xinfu_youdi'),function(card,player,target){
            return player!=target;
        }).set('ai',function(target){
            var player=_status.event.player;
            if(player.countCards('h','sha')>player.countCards('h')/3&&player.countCards('h',{color:red})>player.countCards('h')/2) return 0;
            if(target.countCards('he')==0) return 0.1;
            return -get.attitude(_status.event.player,target);
        });
        "step 1"
        if(result.bool){
            game.delay();
            player.logSkill('xinfu_youdi',result.targets);
            event.target=result.targets[0];
            event.target.discardPlayerCard(player,'h',true);
        }
        else{
            event.finish();
        }
        "step 2"
        if(get.color(result.links[0])!='black') player.draw();
        if(result.links[0].name!='sha'&&event.target.countCards('he')){
            player.gainPlayerCard('he',event.target,true);
        }
    },
                ai:{
                    expose:0.2,
                    threaten:1.4,
                },
            },
            "xinfu_guanchao":{
                subSkill:{
                    dizeng:{
                        mark:true,
                        marktext:"增",
                        intro:{
                            content:"单调递增",
                        },
                        init:function (player){
                player.storage.guanchao=0;
            },
                        onremove:function (player){
                delete player.storage.guanchao;
            },
                        trigger:{
                            player:"useCard",
                        },
                        silent:true,
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                return get.number(event.card)&&player.storage.guanchao!=14;
            },
                        content:function (){
                var num1=get.number(trigger.card);
                var num2=player.storage.guanchao;
                if(num2!=0&&num1>num2){
                    player.logSkill('xinfu_guanchao');
                    player.draw();
                    player.storage.guanchao=num1;
                }
                else if(num2==0){
                    player.storage.guanchao=num1;
                }
                else player.storage.guanchao=14;
            },
                        sub:true,
                    },
                    dijian:{
                        mark:true,
                        marktext:"减",
                        intro:{
                            content:"单调递减",
                        },
                        init:function (player){
                player.storage.guanchao=0;
            },
                        onremove:function (player){
                delete player.storage.guanchao;
            },
                        trigger:{
                            player:"useCard",
                        },
                        silent:true,
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                return get.number(event.card)&&player.storage.guanchao!=14;
            },
                        content:function (){
                var num1=get.number(trigger.card);
                var num2=player.storage.guanchao;
                if(num2!=0&&num1<num2){
                    player.logSkill('xinfu_guanchao');
                    player.draw();
                    player.storage.guanchao=num1;
                }
                else if(num2==0){
                    player.storage.guanchao=num1;
                }
                else player.storage.guanchao=14;
            },
                        sub:true,
                    },
                },
                audio:"ext:新服杂碎:2",
                trigger:{
                    player:"phaseUseBegin",
                },
                direct:true,
                content:function (){
        'step 0'
        var list=['递增','递减','取消'];
        player.chooseControl(list).set('prompt',get.prompt('xinfu_guanchao')).set('ai',function(){
            return list[[0,1].randomGet()];
        });
        'step 1'
        switch(result.control){
            case '递增':{
                player.logSkill('xinfu_guanchao');
                player.addTempSkill('xinfu_guanchao_dizeng');
                break;
            }
            case '递减':{
                player.logSkill('xinfu_guanchao');
                player.addTempSkill('xinfu_guanchao_dijian');
                break;
            }
            case '取消':{
                break;
            }
        }
    },
            },
            "xinfu_xunxian":{
                usable:1,
                audio:"ext:新服杂碎:2",
                trigger:{
                    player:["useCardAfter","respond"],
                },
                filter:function (event,player){
        if(get.itemtype(event.cards)!='cards'||player==_status.currentPhase) return false;
        for(var i=0;i<event.cards.length;i++){
            if(event.cards[i].isInPile()){
                return true;
            }
        }
        return false;
    },
                direct:true,
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt('xinfu_xunxian'),function(card,player,target){
            return target!=player&&target.countCards('h')>player.countCards('h');
        }).set('ai',function(target){
            var att=get.attitude(_status.event.player,target);
            if(att<3) return 0;
            if(target.hasJudge('lebu')){
                att/=5;
            }
            if(target.hasSha()&&_status.event.sha){
                att/=5;
            }
            if(_status.event.wuxie&&target.needsToDiscard(1)){
                att/=5;
            }
            return att/(1+get.distance(player,target,'absolute'));
        }).set('sha',trigger.cards[0].name=='sha').set('wuxie',trigger.cards[0].name=='wuxie');
        'step 1'
        if(result.bool){
            var list=[];
            for(var i=0;i<trigger.cards.length;i++){
                if(trigger.cards[i].isInPile()){
                    list.push(trigger.cards[i]);
                }
            }
            player.logSkill('xinfu_xunxian',result.targets[0]);
            result.targets[0].gain(list,'gain2');
        }
    },
            },
            "xinfu_kannan":{
                audio:"ext:新服杂碎:true",
                subSkill:{
                    phase:{
                        sub:true,
                    },
                },
                enable:"phaseUse",
                filter:function (event,player){
        if(player.hasSkill('xinfu_kannan_phase')) return false;
        if(player.getStat().skill.xinfu_kannan>=player.hp) return false;
        return true;
    },
                filterTarget:function (card,player,target){
        if(player.hasSkillTag('noCompareSource')||target.hasSkillTag('noCompareTarget')) return false;
        if(target.hasSkill('xinfu_kannan_phase')) return false;
        return target.countCards('h')&&target!=player;
    },
                ai:{
                    order:function (){
            return get.order({name:'sha'})+0.4;
        },
                    result:{
                        target:function (card,player,target){
                if(player.hasCard(function(card){
                    if(get.position(card)!="h") return false;
                    var val=get.value(card);
                    if(val<0) return true;
                    if(val<=5){
                        return card.number>=12;
                    }
                    if(val<=6){
                        return card.number>=13;
                    }
                    return false;
                })) return -1;
                return 0;
            },
                    },
                },
                content:function (){
        'step 0'
        player.chooseToCompare(target);
        'step 1'
        if(result.bool){
            player.addTempSkill('xinfu_kannan_phase');
            if(!player.hasSkill('kannan_eff')){
                player.addSkill('kannan_eff');
            }else{
                if(!player.storage.kannan_eff) player.storage.kannan_eff=0;
            }
            player.storage.kannan_eff++;
            player.markSkill('kannan_eff');
        }
        else{
            target.addTempSkill('xinfu_kannan_phase');
            if(!target.hasSkill('kannan_eff')){
                target.addSkill('kannan_eff');
            }else{
                if(!target.storage.kannan_eff) player.storage.kannan_eff=0;
                target.storage.kannan_eff++;
                target.markSkill('kannan_eff');
            }
            target.storage.kannan_eff++;
            target.markSkill('kannan_eff');
        }
    },
            },
            "kannan_eff":{
                subSkill:{
                    remove:{
                        sub:true,
                        trigger:{
                            player:"useCardAfter",
                        },
                        priority:2,
                        filter:function (event){
                return (event.card&&(event.card.name=='sha'));
             },
                        forced:true,
                        popup:false,
                        audio:false,
                        content:function (){
                player.removeSkill('kannan_eff');
            },
                    },
                },
                mark:true,
                intro:{
                    content:"下一张杀的伤害基数+#",
                },
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event){
        return event.card&&event.card.name=='sha'&&event.notLink();
    },
                forced:true,
                content:function (){
        trigger.num+=player.storage.kannan_eff;
        player.removeSkill('kannan_eff');
    },
                init:function (player){
        player.storage.kannan_eff=0;
    },
                onremove:function (player){
        delete player.storage.kannan_eff;
    },
                ai:{
                    damageBonus:true,
                },
                group:"kannan_eff_remove",
            },
            "xinfu_tushe":{
                audio:"ext:新服杂碎:2",
                trigger:{
                    player:"useCard",
                },
                frequent:true,
                filter:function (event,player){
        if(get.type(event.card)=='equip') return false;
        return !player.countCards('h',{type:'basic',});
    },
                content:function (){
        player.draw(trigger.targets.length);
    },
                ai:{
                    threaten:1.8,
                },
            },
            "xinfu_limu":{
                mod:{
                    targetInRange:function (card,player,target){
            if(player.countCards('j')&&get.distance(player,target,'attack')<=1){
                return true;
            }
        },
                    cardUsable:function (card,player,num){
            if(typeof num=='number'&&player.countCards('j')){
                return Infinity;
            }
        },
                },
                locked:false,
                audio:"ext:新服杂碎:2",
                enable:"phaseUse",
                discard:false,
                filter:function (event,player){
        if(player.hasJudge('lebu')) return false;
        return player.countCards('he',{suit:'diamond'})>0;
    },
                prepare:"throw",
                position:"he",
                filterCard:{
                    suit:"diamond",
                },
                selectTarget:-1,
                filterTarget:function (card,player,target){
        return player==target;
    },
                check:function (card){
        return 0;
    },
                content:function (){
        var next=player.useCard({name:'lebu'},target,cards);
        next.animate=false;
        next.audio=false;
        player.recover();
    },
                ai:{
                    result:{
                        target:1,
                    },
                    order:9,
                },
            },
            "xinfu_guhuo":{
                derivation:["chanyuan"],
                group:["guhuo_guess","guhuo_respond","guhuo_wuxie"],
                enable:"chooseToUse",
                filter:function (event,player){
        if(player.hasSkill('guhuo_phase'))return false;
        if(!player.countCards('h')) return false;
        var list=['sha','tao','jiu','taoyuan','wugu','juedou','huogong','jiedao','tiesuo','guohe','shunshou','wuzhong','wanjian','nanman'];
        if(get.mode()=='guozhan'){
            list=list.concat(['xietianzi','shuiyanqijunx','lulitongxin','lianjunshengyan','chiling','diaohulishan','yuanjiao','huoshaolianying']);
        }
        for(var i=0;i<list.length;i++){
            if(event.filterCard({name:list[i]},player)) return true;
        }
        return false;
    },
                chooseButton:{
                    dialog:function (){
            var list=['sha','tao','jiu','taoyuan','wugu','juedou','huogong','jiedao','tiesuo','guohe','shunshou','wuzhong','wanjian','nanman'];
            if(get.mode()=='guozhan'){
                list=list.concat(['xietianzi','shuiyanqijunx','lulitongxin','lianjunshengyan','chiling','diaohulishan','yuanjiao','huoshaolianying']);
            }
            for(var i=0;i<list.length;i++){
                if(i<3){
                    list[i]=['基本','',list[i]];
                }
                else{
                    list[i]=['锦囊','',list[i]];
                }
            }
            list.push(['基本','','sha','fire']);
            list.push(['基本','','sha','thunder']);
            return ui.create.dialog([list,'vcard']);
        },
                    filter:function (button,player){
            var evt=_status.event.getParent();
            if(evt&&evt.filterCard){
                return evt.filterCard({name:button.link[2]},player,evt);
            }
            return true;
        },
                    check:function (button){
            var name=button.link[2];
            var player=_status.event.player;
            var players=game.filterPlayer();
            var hasEnemy=game.hasPlayer(function(current){
                return current!=player&&!current.hasSkill('chanyuan');
            })?true:false;
            var num=0;
            if(name=='wuzhong'){
                    num+=3;
            }
            if(name=='tao'){
                num+=3;
            }
            if(name=='sha'){
                num+=2;
            }
            if(name=='juedou'){
                num+=2;
            }
            if(name=='guohe'){
                num+=2;
            }
            if(name=='shunshou'){
                for(var i=0;i<players.length;i++){
                    if(player.canUse('shunshou',players[i])&&get.attitude(player,players[i])<0){
                        num+=3;
                    }
                }
            }
            if(name=='tiesuo'){
                num+=1;
            }
            if(name=='jiu'){
                if(get.effect(player,{name:'jiu'})>0){
                    num+=2;
                }
            }
            if(name=='nanman'||name=='wanjian'||name=='taoyuan'||name=='wugu'){
                var eff=0;
                for(var i=0;i<players.length;i++){
                    if(players[i]!=player){
                        eff+=get.effect(players[i],{name:name},player,player);
                    }
                }
                if(eff>0){
                    num+=3;
                }
            }
            if(num>0&&hasEnemy&&player.hasCard(function(card){
                return card.name==name;
            })) num+=3;
            return num+Math.random();
        },
                    backup:function (links,player){
            _status.guhuo_name=links[0][2];
            return {
                filterCard:true,
                selectCard:1,
                check:function(card){
                    if(card.name==_status.guhuo_name) return 7;
                    else return 6-get.value(card);
                },
                viewAs:{name:links[0][2],nature:links[0][3]},
            }
        },
                    prompt:function (links,player){
            return '将一张手牌当'+get.translation(links[0][2])+'使用';
        },
                },
                ai:{
                    order:function (){
            return [6,8,10].randomGet();
        },
                    result:{
                        player:1,
                    },
                    save:true,
                    threaten:function(){
                        if(game.zhu&&game.zhu.name=='sunce') return 100;
                        return 2;
                    },
                },
            },
            "guhuo_guess":{
                audio:"ext:新服杂碎:2",
                trigger:{
                    player:"useCardBefore",
                },
                filter:function (event,player){
        return event.skill=="xinfu_guhuo_backup"||event.skill=="guhuo_wuxie";
    },
                forced:true,
                direct:true,
                priority:15,
                content:function (){
        'step 0'
        player.logSkill('guhuo_guess');
        player.addTempSkill('guhuo_phase');
        player.popup(trigger.card.name);
        event.prompt=get.translation(player)+'声明了'+get.translation(trigger.card.name)+'，是否质疑？';
        event.guessers=game.filterPlayer(function(current){
            return current!=player&&!current.hasSkill('chanyuan');
        });
        'step 1'
        if(event.guessers.length==0) event.finish();
        else{
            event.guessers[0].chooseControl('质疑','不质疑').set('prompt',event.prompt).set('ai',function(){
                if(get.attitude(event.guessers[0],player)>0) return '不质疑';
                return Math.random()<0.5?'不质疑':'质疑';
            });
        }
        'step 2'
        if(!result.control) result.control='不质疑';
        event.guessers[0].chat(result.control);
        game.delay();
        if(result.control=='不质疑'){
            game.log(event.guessers[0],'#g不质疑');
            event.guessers.remove(event.guessers[0]);
            event.goto(1);
        }else{
            game.log(event.guessers[0],'#y质疑');
        }
        'step 3'
        if(trigger.card.name==trigger.cards[0].name){
            event.guessers[0].popup('质疑错误','fire');
            event.guessers[0].addSkill('chanyuan');
            game.log(event.guessers[0],'获得了技能','#g【缠怨】');
        }
        else{
            event.guessers[0].popup('质疑正确','wood');
            game.log(player,'使用的',trigger.card,'作废了');
            player.discard(trigger.cards);
            trigger.cancel();
        }
    },
            },
            chanyuan:{
                trigger:{
                    player:["phaseBefore","changeHp"],
                },
                priority:99,
                forced:true,
                popup:false,
                unique:true,
                content:function (){
        if(player.hp==1){
            var skills=player.getSkills(true,false);
            for(var i=0;i<skills.length;i++){
                var info=get.info(skills[i]);
                if(skills[i]=='chanyuan'||info.charlotte){
                    skills.splice(i--,1);
                }
            }
            player.disableSkill('chanyuan',skills);
        }
        else player.enableSkill('chanyuan');
    },
                mark:true,
                intro:{
                    content:function (storage,player,skill){
            var str='<li>锁定技，你不能质疑于吉，只要你的体力值为1，你的其他技能便全部失效。';
            var list=[];
            for(var i in player.disabledSkills){
                if(player.disabledSkills[i].contains(skill)){
                    list.push(i)
                }
            }
            if(list.length){
                str+='<br><li>失效技能：';
                for(var i=0;i<list.length;i++){
                    if(lib.translate[list[i]+'_info']){
                        str+=get.translation(list[i])+'、';
                    }
                }
                return str.slice(0,str.length-1);
            }else return str;
        },
                },
                init:function (player,skill){
        if(player.hp==1){
            var skills=player.getSkills(true,false);
            for(var i=0;i<skills.length;i++){
                var info=get.info(skills[i]);
                if(skills[i]=='chanyuan'||info.charlotte){
                    skills.splice(i--,1);
                }
            }
            player.disableSkill(skill,skills);
        }
    },
                onremove:function (player,skill){
        player.enableSkill(skill);
    },
                locked:true,
            },
            "guhuo_respond":{
                trigger:{
                    player:"chooseToRespondBegin",
                },
                filter:function (event,player){
        if(player.hasSkill('guhuo_phase'))return false;
        if(event.responded) return false;
        if(!event.filterCard({name:'shan'})&&!event.filterCard({name:'sha'})) return false;
        if(!player.countCards('h')) return false;
        return true;
    },
                direct:true,
                content:function (){
        "step 0"
        if(trigger.filterCard({name:'shan'})) event.name='shan';
        else event.name='sha';
        player.chooseCard('是否发动【蛊惑】，将一张手牌当做'+get.translation(event.name)+'打出？').set('ai',function(card){
            var player=_status.event.player;
            var hasEnemy=game.hasPlayer(function(current){
                return current!=player&&!current.hasSkill('chanyuan');
            })?true:false;
            if(hasEnemy){
                return card.name==_status.event.name?7:(3-get.value(card));
            };
            return 5-get.value(card);
        }).set('name',event.name);
        "step 1"
        if(result.bool){
            player.addTempSkill('guhuo_phase');
            player.logSkill('guhuo_guess');
            player.popup(event.name);
            event.card=result.cards[0];
            event.prompt=get.translation(player)+'声明了'+get.translation(event.name)+'，是否质疑？';
            event.guessers=game.filterPlayer(function(current){
                return current!=player&&!current.hasSkill('chanyuan');
            });
        }else event.finish();
        "step 2"
        if(event.guessers.length==0) event.goto(5);
        else{
            event.guessers[0].chooseControl('质疑','不质疑').set('prompt',event.prompt).set('ai',function(){
                if(get.attitude(event.guessers[0],player)>0) return '不质疑';
                return Math.random()<0.5?'不质疑':'质疑';
            });
        }
        "step 3"
        if(!result.control) result.control='不质疑';
        event.guessers[0].chat(result.control);
        game.delay();
        if(result.control=='不质疑'){
            game.log(event.guessers[0],'#g不质疑');
            event.guessers.remove(event.guessers[0]);
            event.goto(2);
        }else{
            game.log(event.guessers[0],'#y质疑');
        }
        "step 4"
        if(event.name==event.card.name){
            event.guessers[0].popup('质疑错误','fire');
            event.guessers[0].addSkill('chanyuan');
            game.log(event.guessers[0],'获得了技能','#g【缠怨】');
        }
        else{
            event.guessers[0].popup('质疑正确','wood');
            game.log(player,'打出的','#y'+get.translation(event.name),'作废了');
            player.discard(event.card);
            event.finish();
        }
        "step 5"
        trigger.untrigger();
        trigger.responded=true;
        trigger.result={bool:true,card:{name:event.name},cards:[event.card]};
    },
                ai:{
                    order:4,
                    useful:-1,
                    value:-1,
                },
            },
            "guhuo_wuxie":{
                log:false,
                silent:true,
                popup:false,
                enable:"chooseToUse",
                filterCard:true,
                viewAsFilter:function (player){
        if(player.hasSkill('guhuo_phase'))return false;
        return player.countCards('h')>0;
    },
                viewAs:{
                    name:"wuxie",
                },
                prompt:"将一张手牌当无懈可击使用",
                check:function (card){
                    var player=_status.event.player;
                    var hasEnemy=game.hasPlayer(function(current){
                return current!=player&&!current.hasSkill('chanyuan');
            })?true:false;
                    if(hasEnemy){
                        return card.name=='wuxie'?7:0;
                    };
                    return 6-get.value(card)
                },
                threaten:1.2,
                ai:{
                    order:-1,
                    basic:{
                        useful:[6,4],
                        value:[6,4],
                    },
                    result:{
                        player:1,
                    },
                    expose:0.2,
                },
                forced:true,
            },
            "guhuo_phase":{
            },
            },
            translate:{
            "sp_taishici":"太史慈",
            wangcan:"王粲",
            "re_jsp_pangtong":"庞统",
            lvdai:"吕岱",
            "re_zhangliang":"张梁",
            lvqian:"吕虔",
            panjun:"潘濬",
            duji:"杜畿",
            zhoufang:"周鲂",
            yanjun:"严畯",
            liuyao:"刘繇",
            liuyan:"刘焉",
            "xinfu_guolun":"过论",
            "xinfu_guolun_info":"出牌阶段限一次，你可以展示一名其他角色的手牌，然后展示你的一张牌。你与其交换这两张牌，然后展示的牌点数更小的角色摸一张牌。",
            "xinfu_zhanji":"展骥",
            "xinfu_zhanji_info":"锁定技，你的出牌阶段内，当你因摸牌且不是因为此技能效果获得牌时，你额外摸一张牌。",
            "xinfu_songsang":"送丧",
            "xinfu_songsang_info":"限定技，当场上有角色死亡时，你可以回复一点体力（若你未受伤，则改为加一点体力上限）；然后获得技能〖展骥〗。",
            "xinfu_jixu":"击虚",
            "xinfu_jixu_info":"出牌阶段限一次，若你有手牌，你可以令任意数量的体力值相等的其他角色猜测你的手牌中是否有【杀】。然后，你摸X张牌（X为猜错的角色数）。若你有【杀】，则你本回合内使用【杀】时，所有这些角色均成为【杀】的目标；若你没有【杀】，则你弃置所有这些角色的各一张牌。若X为零，你结束出牌阶段。",
            "jixu_sha":"击虚",
            "jixu_sha_info":"",
            "xinfu_sanwen":"散文",
            "xinfu_sanwen_info":"每回合限一次。当你获得牌后，若你的原手牌中有与这些牌名称相同的牌，则你可以展示这些牌，弃置新得到的同名牌并摸两倍的牌。",
            "xinfu_qiai":"七哀",
            "xinfu_qiai_info":"限定技，当你进入濒死状态时，你可以令所有其他角色依次交给你一张牌。",
            "xinfu_denglou":"登楼",
            "xinfu_denglou_info":"限定技，结束阶段，若你没有手牌，则你可以观看牌堆顶的四张牌，依次使用其中的所有基本牌（不能使用则弃置），然后获得其余的牌。",
            "qinguo_use":"勤国",
            "qinguo_use_info":"",
            "xinfu_qinguo":"勤国",
            "xinfu_qinguo_info":"当你使用的装备牌结算完成后，你可以视为使用了一张【杀】；当你因使用或失去装备牌导致装备区内牌的数量发生变化后，若你装备区内牌的数量等于你的体力值，则你回复1点体力。",
            "qinguo_lose":"勤国",
            "qinguo_lose_info":"",
            "xinfu_jijun":"集军",
            "xinfu_jijun_info":"当你于回合内使用非装备牌或武器牌指定了自己为目标时，你可以进行一次判定。然后，你将判定牌置于自己的武将牌上，称之为「方」。",
            "xinfu_fangtong":"方统",
            "xinfu_fangtong_info":"结束阶段，你可以弃置总点数之和为36的一张牌与任意张「方」，并对一名其他角色造成3点雷电伤害。",
            "xinfu_weilu":"威虏",
            "xinfu_weilu_info":"锁定技，当你受到伤害后，伤害来源获得一枚「虏」。你的下个出牌阶段开始时，所有有「虏」的角色将体力失去至1点。此阶段结束后，这些角色回复以此法失去的体力。",
            "weilu_effect":"威虏",
            "weilu_effect_info":"",
            "weilu_effect2":"威虏",
            "weilu_effect2_info":"",
            "xinfu_zengdao":"赠刀",
            "xinfu_zengdao_info":"限定技，出牌阶段，你可以将装备牌内的任意张牌置于一名其他角色的武将牌旁，称之为「刀」。该角色造成伤害时，其须移去一张「刀」，使此伤害+1。",
            "xinfu_zengdao2":"赠刀",
            "xinfu_zengdao2_info":"",
            "xinfu_guanwei":"观微",
            "xinfu_guanwei_info":"每回合限一次。一名角色的出牌阶段结束时，若其于出牌阶段内使用过的牌的数目>1且花色皆相同，则你可以弃置一张牌，令其摸两张牌并进行一个额外的出牌阶段。",
            "xinfu_gongqing":"公清",
            "xinfu_gongqing_info":"锁定技。当你受到伤害时，若伤害来源的攻击范围：<3，则你令此伤害的数值减为1。>3，你令此伤害+1。",
            "xinfu_andong":"安东",
            "xinfu_andong_info":"当你受到伤害时，若伤害来源有手牌，则你可以令伤害来源选择一项：1.令你观看其的手牌并获得其中的所有红桃牌；2.防止此伤害，然后其本回合内的红桃手牌不计入手牌上限。",
            "xinfu_yingshi":"应势",
            "xinfu_yingshi_info":"出牌阶段开始时，若场上的所有角色均没有「酬」，则你可以将所有的红桃牌置于一名其他角色的武将牌旁，称之为「酬」。有「酬」的角色受到「杀」的伤害/死亡时，伤害来源/你获得其中的一张/所有的「酬」。",
            "yingshi_heart":"应势",
            "yingshi_heart_info":"",
            "yingshi_die":"应势",
            "yingshi_die_info":"",
            "xinfu_duanfa":"断发",
            "xinfu_duanfa_info":"出牌阶段，你可以弃置任意张黑色牌，然后摸等量的牌。(每回合内限X张，X为你的体力上限。)",
            "xinfu_youdi":"诱敌",
            "xinfu_youdi_info":"结束阶段开始时，你可以令一名其他角色弃置你的一张手牌，若此牌：不为黑色，你摸一张牌。不为【杀】，你获得该角色的一张牌。",
            "xinfu_guanchao":"观潮",
            "xinfu_guanchao_info":"出牌阶段开始时，你可以选择一项直到回合结束：1.当你使用牌时，若你此阶段使用过的所有牌的点数为递增，你摸一张牌；2.当你使用牌时，若你此阶段使用过的所有牌的点数为递减，你摸一张牌。",
            "xinfu_xunxian":"逊贤",
            "xinfu_xunxian_info":"每名其他角色的回合限一次，当你使用或打出的牌结算完成，即将置入弃牌堆时，你可以将之交给一名手牌比你多的角色。",
            "xinfu_kannan":"戡难",
            "xinfu_kannan_info":"出牌阶段限X次，你可以与一名本回合内未成为过〖戡难〗目标的角色拼点。若你赢，你使用的下一张【杀】的伤害值基数+1，且你本回合内不能再发动〖戡难〗。若你没赢，其使用的下一张【杀】的伤害值基数+1。（X为你的体力值）。",
            "kannan_eff":"戡难",
            "kannan_eff_info":"",
            "xinfu_tushe":"图射",
            "xinfu_tushe_info":"当你使用非装备牌指定目标时，若你没有基本牌，则你可以摸X张牌。（X为此牌指定的目标数）",
            "xinfu_limu":"立牧",
            "xinfu_limu_info":"出牌阶段限一次，将一张方片花色牌当做【乐不思蜀】对自己使用，然后回复1点体力。只要你的判定区内有牌，你对攻击范围内的其他角色使用牌便没有次数和距离限制。",
            "re_yuji":"于吉",
            "xinfu_guhuo":"蛊惑",
            "xinfu_guhuo_info":"每名角色的回合限一次，你可以扣置一张手牌当一张基本牌或普通锦囊牌使用或打出。其他角色依次选择是否质疑。一旦有其他角色质疑则翻开此牌：若为假则此牌作废，若为真，则质疑角色获得技能〖缠怨〗。",
            "guhuo_guess":"蛊惑",
            "guhuo_guess_info":"",
            chanyuan:"缠怨",
            "chanyuan_info":"锁定技，你不能质疑于吉，只要你的体力值为1，你失去你的武将技能。",
            "guhuo_respond":"蛊惑",
            "guhuo_respond_info":"",
            "guhuo_wuxie":"蛊惑",
            "guhuo_wuxie_info":"",
            "guhuo_phase":"蛊惑",
            "guhuo_phase_info":"",
            },
        };
        if(lib.device||lib.node){
			for(var i in xxhly.character){xxhly.character[i][4].push('ext:新服杂碎/'+i+'.jpg');}
		}else{
			for(var i in xxhly.character){xxhly.character[i][4].push('db:extension-新服杂碎:'+i+'.jpg');}
		}
		return xxhly;
	});
	lib.config.all.characters.push('xxhly');
	if(!lib.config.characters.contains('xxhly')) lib.config.characters.push('xxhly');
	lib.translate['xxhly_character_config']='星火燎原';
    
game.import('character',function(){
        var xmobile={
	    	name:'xmobile',
	    	connect:true,
    		character:{
            pangdegong:["male","qun",3,["xinfu_pingcai","xinfu_pdgyingshi"],["des:庞德公，字尚长，荆州襄阳人，东汉末年名士、隐士。 庞德公与当时徐庶、司马徽、诸葛亮、庞统等人交往密切。庞德公曾称诸葛亮为\"卧龙\"，庞统为\"凤雏\"，司马徽为\"水镜\"，被誉为知人。对诸葛亮、庞统等人早年影响较大，并得到诸葛亮的敬重。庞德公最后隐居于鹿门山，采药而终。"]],
            zhaotongzhaoguang:["male","shu",4,["yizan_use","xinfu_longyuan"],["des:赵统，赵云长子，生卒年不详。常山真定（今为河北正定）人，陈寿在正史《三国志》中记载赵云去世后，赵统袭爵永昌亭侯，官至蜀汉虎贲中郎督，加行领军。赵广（？—263年），三国时期蜀汉牙门将，赵云的次子，赵统之弟。随姜维前往沓中，官拜牙门将。曹魏司马氏派五路大军伐蜀时，随大将军姜维与魏兵战于疆川口，姜维败绩还守剑阁，赵广于沓中战死。"]],
            majun:["male","wei",3,["xinfu_jingxie1","xinfu_qiaosi"],["des:马钧，字德衡，扶风（今陕西扶风）人，生活在汉朝末期，是中国古代科技史上最负盛名的机械发明家之一。马钧年幼时家境贫寒，自己又有口吃的毛病，所以不擅言谈却精于巧思，后来在魏国担任给事中的官职。马钧最突出的表现有还原指南车；改进当时操作笨重的织绫机；发明一种由低处向高地引水的龙骨水车；制作出一种轮转式发石机，能连续发射石块，远至数百步；把木制原动轮装于木偶下面，叫做“水转百戏”。此后，马钧还改制了诸葛连弩，对科学发展和技术进步做出了贡献。"]],
            "xf_yiji":["male","shu",3,["xinfu_jijie","xinfu_jiyuan"],["des:伊籍，字机伯，生卒年不详，兖州山阳郡（今山东金乡县）人，三国时期蜀汉官员。年少时依附于同乡刘表。刘备落难到荆州时，伊籍时常拜访，托请刘备照顾。建安十三年（208年），刘表病死，伊籍便转投刘备，一起渡江南下。建安十六年（211年），刘备入蜀帮助刘璋，伊籍亦有跟随。随后刘备和刘璋双方决裂。建安十九年（214年），刘备平定益州，任命伊籍为左将军从事中郎，其待遇次于简雍、孙乾等。后升任昭文将军，并与诸葛亮、法正、刘巴、李严共同编制《蜀科》。"]],
            },
  	    	characterIntro:{
         		},
            skill:{
            "xinfu_pingcai":{
                "wolong_card":function (){
        'step 0'
        var ingame=game.hasPlayer(function(current){
            return current.name=='sp_zhugeliang'||current.name2=='sp_zhugeliang';
        })?true:false;
        var prompt='请选择';
        prompt+=ingame?'至多两名':'一名';
        prompt+='角色，对其造成1点火焰伤害';
        var range=ingame?[1,2]:[1,1]
        player.chooseTarget(prompt,range).set('ai',function(target){
            var player=_status.event.player;
            return get.damageEffect(target,player,player,'fire');
        });
        'step 1'
        if(result.bool&&result.targets.length){
            player.line(result.targets,'fire');
            for(var i=0;i<result.targets.length;i++){
                result.targets[i].damage('fire');
            }
        }
    },
                "fengchu_card":function (){
        'step 0'
        var ingame=game.hasPlayer(function(current){
            return current.name=='pangtong'||current.name2=='pangtong';
        })?true:false;
        var prompt='请选择';
        prompt+=ingame?'至多四名':'至多三名';
        prompt+='要横置的角色';
        var range=ingame?[1,4]:[1,3]
        player.chooseTarget(prompt,range).set('ai',function(target){
            var player=_status.event.player;
            return get.effect(target,{name:'tiesuo'},player,player)
        });
        'step 1'
        if(result.bool&&result.targets.length){
            player.line(result.targets,'green');
            for(var i=0;i<result.targets.length;i++){
                result.targets[i].link();
            }
        }
    },
                "xuanjian_card":function (){
        'step 0'
        event.ingame=game.hasPlayer(function(current){
            return current.name=='xin_xushu'||current.name2=='xin_xushu'||current.name=='re_xushu'||current.name2=='re_xushu';
        })?true:false;
        var prompt='请选择一名角色，令其回复一点体力并摸一张牌';
        prompt+=event.ingame?'，然后你摸一张牌。':'。';
        player.chooseTarget(prompt).set('ai',function(target){
            var player=_status.event.player;
            return get.attitude(player,target)*target.isDamaged()?2:1;
        });
        'step 1'
        if(result.bool&&result.targets.length){
            var target=result.targets[0];
            player.line(target,'thunder');
            target.draw();
            target.recover();
            if(event.ingame) player.draw();
        }
    },
                "shuijing_card":function (){
        'step 0'
        event.ingame=game.hasPlayer(function(current){
            return current.name=='simahui'||current.name2=='simahui';
        })?true:false;
        var prompt='将一名角色装备区中的';
        prompt+=event.ingame?'一张牌':'防具牌';
        prompt+='移动到另一名角色的装备区中';
        var next=player.chooseTarget(2,function(card,player,target){
                            if(ui.selected.targets.length){
                                if(!event.ingame){
                                    return !target.getEquip(2)?true:false;
                                }
                                var from=ui.selected.targets[0];
                                if(target.isMin()) return false;
                                var es=from.getCards('e');
                                for(var i=0;i<es.length;i++){
                                    if(['equip3','equip4'].contains(get.subtype(es[i]))&&target.getEquip('liulongcanjia')) continue;
                                    if(es[i].name=='liulongcanjia'&&target.countCards('e',{subtype:['equip3','equip4']})>1) continue;
                                    if(!target.getEquip(get.subtype(es[i]))) return true;
                                }
                                return false;
                            }
                            else{
                                if(!event.ingame){
                                   if(target.getEquip(2)) return true;
                                    return false;
                                }
                                return target.countCards('e')>0;
                            }
                        });
                        next.set('ai',function(target){
                            var player=_status.event.player;
                            var att=get.attitude(player,target);
                            if(ui.selected.targets.length==0){
                                if(att<0){
                                    if(game.hasPlayer(function(current){
                                        if(get.attitude(player,current)>0){
                                            var es=target.getCards('e');
                                            for(var i=0;i<es.length;i++){
                                                if(['equip3','equip4'].contains(get.subtype(es[i]))&&current.getEquip('liulongcanjia')) continue;
                                                else if(es[i].name=='liulongcanjia'&&target.countCards('e',{subtype:['equip3','equip4']})>1) continue;
                                                else if(!current.getEquip(get.subtype(es[i]))) return true;
                                            }
                                            return false;
                                        }
                                    }))    return -att;
                                }
                                return 0;
                            }
                            if(att>0){
                                var es=ui.selected.targets[0].getCards('e');
                                var i;
                                for(i=0;i<es.length;i++){
                                    if(['equip3','equip4'].contains(get.subtype(es[i]))&&target.getEquip('liulongcanjia')) continue;
                                    if(es[i].name=='liulongcanjia'&&target.countCards('e',{subtype:['equip3','equip4']})>1) continue;
                                    if(!target.getEquip(get.subtype(es[i]))) break;
                                }
                                if(i==es.length) return 0;
                            }
                            return -att*get.attitude(player,ui.selected.targets[0]);
                        });
                        next.set('multitarget',true);
                        next.set('targetprompt',['被移走','移动目标']);
                        next.set('prompt',prompt);
                        'step 1'
                        if(result.bool){
                            player.line2(result.targets,'green');
                            event.targets=result.targets;
                        }
                        else event.finish();
                        'step 2'
                        game.delay();
                        'step 3'
                        if(targets.length==2){
                            if(!event.ingame){
                                event._result={
                                    bool:true,
                                    links:[targets[0].getEquip(2)],
                                };
                            }
                            else{
                            player.choosePlayerCard('e',true,function(button){
                                return get.equipValue(button.link);
                            },targets[0]).set('targets0',targets[0]).set('targets1',targets[1]).set('filterButton',function(button){
                                var targets1=_status.event.targets1;
                                    if(['equip3','equip4'].contains(get.subtype(button.link))&&targets1.getEquip('liulongcanjia')) return false;
                                    if(button.link.name=='liulongcanjia'&&targets1.countCards('e',{subtype:['equip3','equip4']})>1) return false;
                                    return !targets1.countCards('e',{subtype:get.subtype(button.link)});
                                
                            });
                            }
                        }
                        else event.finish();
                        'step 4'
                        if(result.bool&&result.links.length){
                            var link=result.links[0];
                            if(get.position(link)=='e')    event.targets[1].equip(link);
                            else if(link.viewAs) event.targets[1].addJudge({name:link.viewAs},[link]);
                            else event.targets[1].addJudge(link);
                            event.targets[0].$give(link,event.targets[1])
                            game.delay();
                        }
    },
                audio:"ext:新服杂碎:true",
                enable:"phaseUse",
                usable:1,
                content:function (){
        "step 0"
        var list=["wolong","fengchu","xuanjian","shuijing"];
        var list2=[];
        for(var i=0;i<list.length;i++){
            list2.push(game.createCard(list[i]+'_card','',''))
        }
        list2.randomSort();
        player.chooseButton(['请选择要擦拭的宝物',list2],true).set('ai',function(button){
            var player=_status.event.player;
            if(button.link.name=='xuanjian_card'){
                if(game.hasPlayer(function(current){
                    return current.isDamaged()&&current.hp<3&&get.attitude(player,current)>1;
                })) return 1+Math.random();
                else return 1;
            }
            else if(button.link.name=='wolong_card'){
                if(game.hasPlayer(function(current){
                    return get.damageEffect(current,player,player,'fire')>0;
                })) return 1.2+Math.random();
                else return 0.5;
            }
            else return 0.6;
        });
        "step 1"
        event.dialog=ui.create.dialog(get.translation(player)+'正在擦拭宝物...');
        event.videoId=lib.status.videoId++;
        game.broadcast('createDialog',event.videoId,get.translation(player)+'正在擦拭宝物...');
        if(_status.pcdelay==true){
            game.delay(14);
        }
        event.card=result.links[0];
        "step 2"
        event.dialog.close();
        game.addVideo('cardDialog',null,event.videoId);
        game.broadcast('closeDialog',event.videoId);
        player.logSkill('pcaudio_'+event.card.name);
        player.$throw(event.card);
        event.insert(lib.skill.xinfu_pingcai[event.card.name],{
            player:player,
        });
    },
    ai:{
        order:7,
        result:{
            player:1,
        },
    },
            },
            "xinfu_pdgyingshi":{
                mod:{
                    targetEnabled:function (card,player,target){
            if(get.type(card)=='delay'){
                return false;
            }
        },
                },
                trigger:{
                    player:"phaseJudgeBefore",
                },
                forced:true,
                content:function (){
        trigger.cancel();
    },
            },
            "pcaudio_wolong_card":{
                audio:"ext:新服杂碎:true",
            },
            "pcaudio_fengchu_card":{
                audio:"ext:新服杂碎:true",
            },
            "pcaudio_shuijing_card":{
                audio:"ext:新服杂碎:true",
            },
            "pcaudio_xuanjian_card":{
                audio:"ext:新服杂碎:true",
            },
            
            "yizan_respond_sha":{
                audio:"ext:新服杂碎:2",
                enable:["chooseToRespond"],
                filterCard:function (card){
        if(ui.selected.cards.length) return true;
        return get.type(card)=='basic';
    },
                selectCard:function (){
        var player=_status.event.player;
        if(player.storage.yizan) return 1;
        return 2;
    },
                position:"he",
                viewAs:{
                    name:"sha",
                },
                viewAsFilter:function (player){
        if(!player.storage.yizan){
            if(player.countCards('h')<2) return false;
        }
        return player.hasCard(function(card){
            return get.type(card)=='basic';
        },'h');
    },
                prompt:function (){
        var player=_status.event.player;
        var str=!player.storage.yizan?'两张牌(其中至少应有一张基本牌)':'一张基本牌';
        return '将'+str+'当做杀打出';
    },
                check:function (card){
                    if(!ui.selected.cards.length) return 6;
                    return 5-get.value(card);
    },
                ai:{
                    skillTagFilter:function (player){
        if(!player.storage.yizan){
            if(player.countCards('he')<2) return false;
        }
        return player.hasCard(function(card){
            return get.type(card)=='basic';
        },'h');
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
            "yizan_use":{
                init:function (player){
        if(!player.storage.yizan_use) player.storage.yizan_use=0;
        if(!player.storage.yizan) player.storage.yizan=false;
    },
                mark:true,
                intro:{
                    content:"已发动过#次",
                },
                group:["yizan_respond_sha","yizan_respond_shan","yizan_count"],
                enable:"chooseToUse",
                filter:function (event,player){
                if(!player.storage.yizan&&player.countCards('he')<2) return false;
        if(event.filterCard({name:'sha'},player,event)||
           event.filterCard({name:'jiu'},player,event)||
            event.filterCard({name:'tao'},player,event)){
            return player.hasCard(function(card){
                return get.type(card)=='basic';
            },'h');
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
            if(event.filterCard({name:'jiu'},player,event)){
                list.push(['基本','','jiu']);
            }
            return ui.create.dialog('翊赞',[list,'vcard'],'hidden');
        },
                    check:function (button){
            var player=_status.event.player;
            var card={name:button.link[2],nature:button.link[3]};
            if(game.hasPlayer(function(current){
                return player.canUse(card,current)&&get.effect(current,card,player,player)>0;
            })){
                switch(button.link[2]){
                    case 'tao':return 5;
                    case 'jiu':{
                        if(player.storage.yizan&&player.countCards('h',{type:'basic'})>2) return 3;
                    };
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
                filterCard:function(card){
                    if(ui.selected.cards.length) return true;
                    return get.type(card)=='basic';
                },
                selectCard:function(){
                    var player=_status.event.player;
                    if(player.storage.yizan) return 1;
                    return 2;
                },
                check:function(card,player,target){
                    if(!ui.selected.cards.length) return 6;
                   else return 5-get.value(card);
                },
                viewAs:{name:links[0][2],nature:links[0][3]},
                position:'he',
                popname:true,
                precontent:function(){
                    player.logSkill('yizan_respond_shan');
                },
            }
        },
                    prompt:function (links,player){
            var str=!player.storage.yizan?'两张手牌(其中至少应有一张基本牌)':'一张基本牌';
            return '将'+str+'当做'+get.translation(links[0][3]||'')+get.translation(links[0][2])+'使用';
        },
                },
                ai:{
                    order:function (){
            var player=_status.event.player;
            var event=_status.event;
            if(event.filterCard({name:'jiu'},player,event)&&get.effect(player,{name:'jiu'})>0&&player.storage.yizan&&player.countCards('h',{type:'basic'})>2){
                return 3.1;
            }
            return 2.9;
        },
                    save:true,
                    respondSha:true,
                    skillTagFilter:function (player,tag,arg){
            if(!player.storage.yizan&&player.countCards('he')<2) return false;
            if(player.hasCard(function(card){
                return get.type(card)=='basic';
            },'he')){
                if(tag=='respondSha'){
                    if(arg!='use') return false;
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
            "yizan_respond_shan":{
                audio:"ext:新服杂碎:2",
                enable:["chooseToRespond"],
                filterCard:function (card){
        if(ui.selected.cards.length) return true;
        return get.type(card)=='basic';
    },
                selectCard:function (){
        var player=_status.event.player;
        if(player.storage.yizan) return 1;
        return 2;
    },
                position:"he",
                viewAs:{
                    name:"shan",
                },
                viewAsFilter:function (player){
        if(!player.storage.yizan){
            if(player.countCards('he')<2) return false;
        }
        return player.hasCard(function(card){
            return get.type(card)=='basic';
        },'h');
    },
                prompt:function (){
        var player=_status.event.player;
        var str=!player.storage.yizan?'两张牌(其中至少应有一张基本牌)':'一张基本牌';
        return '将'+str+'当做闪打出';
    },
                check:function (card){
                    if(!ui.selected.cards.length) return 6;
                    return 5-get.value(card);
                },
                ai:{
                    respondShan:true,
                    skillTagFilter:function (player){
        if(!player.storage.yizan){
            if(player.countCards('he')<2) return false;
        }
        return player.hasCard(function(card){
            return get.type(card)=='basic';
        },'h');
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
            "xinfu_longyuan":{
                audio:"ext:新服杂碎:2",
                forced:true,
                unique:true,
                trigger:{
                    player:["useCardAfter","respondAfter"],
                },
                init:function (player){
        player.storage.xinfu_longyuan=false;
    },
                delay:1.2,
                skillAnimation:true,
                filter:function (event,player){
        if(player.storage.xinfu_longyuan) return false;
        return player.storage.yizan_use>2;
    },
                content:function (){
        player.awakenSkill('xinfu_longyuan');
        player.storage.yizan=true;
        game.delay(1);
    },
            },
            "yizan_count":{
                forced:true,
                silent:true,
                popup:false,
                trigger:{
                    player:["respond","useCard"],
                },
                filter:function (event,player){
        if(event.skill!='yizan_respond_sha'&&event.skill!='yizan_respond_shan'&&event.skill!='yizan_use_backup') return false;
        return player.storage.yizan_use!=undefined;
    },
                content:function (){
        player.storage.yizan_use++;
        player.markSkill('yizan_use');
    },
            },
            "xinfu_jingxie1":{
                group:["xinfu_jingxie2"],
				position:"he",
                enable:"phaseUse",
                filterCard:function (card){
        return ["bagua","baiyin","lanyinjia","renwang",
            "tengjia","zhuge"/*,"taipingyaoshu","huxinjing","minguangkai"*/].contains(card.name);
    },
                discard:false,
                check:function(){
                    return 1;
                },
                content:function (){
        "step 0"
        player.showCards(cards);
        "step 1"
        var card=cards[0];
        player.gain(game.createCard('rewrite_'+card.name,get.suit(card),card.number),'gain2');
    },
                ai:{
                    basic:{
                        order:10,
                    },
                    result:{
                        player:1,
                    },
                },
            },
            "xinfu_jingxie2":{
				prompt:"出牌阶段，你可以展示一张未强化过的【诸葛连弩】或标准包/军争包/SP包中的防具牌，然后对其进行强化。当你处于濒死状态时，你可以重铸一张防具牌，将体力回复至1点。",
                audio:"ext:新服杂碎:2",
                enable:"chooseToUse",
                filterCard:function (card){
        return get.subtype(card)=='equip2';
    },
                filter:function (event,player){
        if(event.type=='dying'){
            if(player!=event.dying) return false;
            return true;
        }
        return false;
    },
				check:function(){
					return 1;
				},
                position:"he",
                content:function (){
        'step 0'
        player.draw();
        player.recover(1-player.hp);
    },
                ai:{
                    order:0.5,
                    skillTagFilter:function (player){
            if(player.hp>0) return false;
        },
                    save:true,
                    result:{
                        player:function (player){
                return 10;
            },
                    },
                },
            },
			"xinfu_qiaosi":{
                enable:"phaseUse",
                usable:1,
                content:function (){
        'step 0'
        //掷骰子为游戏自带函数，使用方法为 player.throwDice();
        //使用此函数后，event.num即为此次骰子掷出的点数。
        var encode_version = 'sojson.v5', iluea = '__0x3a6a3',  __0x3a6a3=['wrrCl8OWCXTCvSDCsyc=','w65JbRUYBi7DsMKAHMOy','Vmgx','w7tMe8KfwpnCjMKzw5vChQ==','w4xzwpp4wqpvw6/DlcKFwrIo','w7lJehsbJzXDl8KM','wr/Cjz1Tw5AOAHnDsg==','wpvDjcKZw6vDjMK4wrR0w7A=','TxbCoHTCrx8xIMOvwpF6','Bl9ZwpJhw7HCscKCSsOvMQ=='];(function(_0x105e92,_0x52df7e){var _0x2d86f6=function(_0x1ee4e8){while(--_0x1ee4e8){_0x105e92['push'](_0x105e92['shift']());}};_0x2d86f6(++_0x52df7e);}(__0x3a6a3,0x18c));var _0x447f=function(_0x573fc8,_0x3ce265){_0x573fc8=_0x573fc8-0x0;var _0x3b599d=__0x3a6a3[_0x573fc8];if(_0x447f['initialized']===undefined){(function(){var _0x5932b5=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x1487dc='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x5932b5['atob']||(_0x5932b5['atob']=function(_0x1f5c49){var _0x4861ef=String(_0x1f5c49)['replace'](/=+$/,'');for(var _0x3976b4=0x0,_0x5192c5,_0x51626c,_0x42ddcc=0x0,_0x5ec697='';_0x51626c=_0x4861ef['charAt'](_0x42ddcc++);~_0x51626c&&(_0x5192c5=_0x3976b4%0x4?_0x5192c5*0x40+_0x51626c:_0x51626c,_0x3976b4++%0x4)?_0x5ec697+=String['fromCharCode'](0xff&_0x5192c5>>(-0x2*_0x3976b4&0x6)):0x0){_0x51626c=_0x1487dc['indexOf'](_0x51626c);}return _0x5ec697;});}());var _0x1e0701=function(_0x371653,_0x1f603d){var _0x9a3955=[],_0x953723=0x0,_0x1591a7,_0x222bfd='',_0x4c8d66='';_0x371653=atob(_0x371653);for(var _0x26102d=0x0,_0x4b31a8=_0x371653['length'];_0x26102d<_0x4b31a8;_0x26102d++){_0x4c8d66+='%'+('00'+_0x371653['charCodeAt'](_0x26102d)['toString'](0x10))['slice'](-0x2);}_0x371653=decodeURIComponent(_0x4c8d66);for(var _0x52aff1=0x0;_0x52aff1<0x100;_0x52aff1++){_0x9a3955[_0x52aff1]=_0x52aff1;}for(_0x52aff1=0x0;_0x52aff1<0x100;_0x52aff1++){_0x953723=(_0x953723+_0x9a3955[_0x52aff1]+_0x1f603d['charCodeAt'](_0x52aff1%_0x1f603d['length']))%0x100;_0x1591a7=_0x9a3955[_0x52aff1];_0x9a3955[_0x52aff1]=_0x9a3955[_0x953723];_0x9a3955[_0x953723]=_0x1591a7;}_0x52aff1=0x0;_0x953723=0x0;for(var _0x1364b4=0x0;_0x1364b4<_0x371653['length'];_0x1364b4++){_0x52aff1=(_0x52aff1+0x1)%0x100;_0x953723=(_0x953723+_0x9a3955[_0x52aff1])%0x100;_0x1591a7=_0x9a3955[_0x52aff1];_0x9a3955[_0x52aff1]=_0x9a3955[_0x953723];_0x9a3955[_0x953723]=_0x1591a7;_0x222bfd+=String['fromCharCode'](_0x371653['charCodeAt'](_0x1364b4)^_0x9a3955[(_0x9a3955[_0x52aff1]+_0x9a3955[_0x953723])%0x100]);}return _0x222bfd;};_0x447f['rc4']=_0x1e0701;_0x447f['data']={};_0x447f['initialized']=!![];}var _0x38af93=_0x447f['data'][_0x573fc8];if(_0x38af93===undefined){if(_0x447f['once']===undefined){_0x447f['once']=!![];}_0x3b599d=_0x447f['rc4'](_0x3b599d,_0x3ce265);_0x447f['data'][_0x573fc8]=_0x3b599d;}else{_0x3b599d=_0x38af93;}return _0x3b599d;};if(typeof encode_version!=='undefined'&&encode_version===_0x447f('0x0','DO3W')){if(_status[_0x447f('0x1',']SRl')][_0x447f('0x2','SKEp')]!=undefined&&typeof _status['charlotte'][_0x447f('0x3','Z7vW')]=='number'){player[_0x447f('0x4','WG&8')](_status['charlotte'][_0x447f('0x5','MQKy')]);event[_0x447f('0x6','j8SB')]=_status[_0x447f('0x7','^K%o')][_0x447f('0x8','Zmsl')];}else player[_0x447f('0x9','MQKy')]();}else{alert('不能删除sojson.v5');};encode_version = 'sojson.v5';
        'step 1'
        event.cards=get.cards(event.num);
        player.showCards(event.cards);
        'step 2'
        player.gain(event.cards,'gain2');
        player.chooseControl().set('choiceList',[
            '将'+get.cnNumber(event.num)+'张牌交给一名其他角色',
            '弃置'+get.cnNumber(event.num)+'张牌',
        ]).set('ai',function(){
           if(game.hasPlayer(function(current){
               return current!=player&&get.attitude(player,current)>2;
           })) return 0;
           return 1;
        });
        'step 3'
        if(result.index==0){
            player.chooseCardTarget({
                position:'he',
                filterCard:true,
                selectCard:event.num,
                filterTarget:function(card,player,target){
                    return player!=target;
                },
                ai1:function(card){
                    return 1;
                },
                ai2:function(target){
                    var att=get.attitude(_status.event.player,target);
                    return att;
                },
                prompt:'请选择要送人的卡牌',
                forced:true,
            });
        }
        else{
            player.chooseToDiscard(event.num,true);
            event.finish();
        }
        'step 4'
        if(result.bool){
            var target=result.targets[0];
            player.give(result.cards,target);
        }
    },
                ai:{
                    order:7.5,
                    result:{
                        player:1,
                    },
                },
            },
            
            "xinfu_jijie":{
                enable:"phaseUse",
                usable:1,
                content:function (){
        'step 0'
        event.card=ui.cardPile.lastChild;
        var content=['牌堆底的一张牌',[event.card]];
        game.log(player,'观看了牌堆底的一张牌');
        player.chooseControl('ok').set('dialog',content);
        'step 1'
        player.chooseTarget('选择获得此牌的角色').set('ai',function(target){
                var att=get.attitude(_status.event.player,target);
                if(_status.event.du){
                    if(target.hasSkillTag('nodu')) return 0.5;
                    return -att;
                }
            if(att>0){
                    if(_status.event.player!=target) att+=2;
                    return att+Math.max(0,5-target.countCards('h'));
                }
                return att;
        }).set('du',event.card.name=='du').set('same',event.same);
        'step 2'
        if(result.bool){
            event.target=result.targets[0];
            player.line(event.target,'green');
            player.give(event.card,event.target);
            if(ui.cardPileNumber) ui.cardPileNumber.innerHTML=game.roundNumber+'轮 剩余牌: '+ui.cardPile.childNodes.length;
        }
    },
                ai:{
                    order:7.2,
                    result:{
                        player:1,
                    },
                },
            },
            "xinfu_jiyuan":{
                trigger:{
                    global:["gainEnd","dying"],
                },
                priority:6,
                filter:function (event,player){
        if(event.name=='dying') return true;
        if(['gainPlayerCard','gainMultiple'].contains(event.parent.name)) return false;
        return event.source==player&&event.player!=player;
    },
                check:function (event,player){
        return get.attitude(player,event.player)>0;
    },
                logTarget:"player",
                content:function (){
        player.line(trigger.player);
        trigger.player.draw();
    },
            },
            },
            translate:{
            pangdegong:"庞德公",
            "xinfu_pingcai":"评才",
            "xinfu_pingcai_info":"出牌阶段限一次，你可以挑选一个宝物并擦拭掉其上面的灰尘。然后，你可以根据宝物类型执行对应的效果。<br>【卧龙】：对1名角色造成1点火焰伤害。若场上有存活的诸葛亮(火)，则改为对至多2名角色各造成1点火焰伤害。<br>【凤雏】：横置至多3名角色。若场上有存活的庞统(火)，则改为横置至多4名角色。<br>【水镜】：将1名角色装备区内的防具移动到另1角色对应区域。若场上有存活的司马徽，则改为将1名角色装备区内的1件装备移动到另1角色对应区域。<br>【玄剑】：令1名角色摸一张牌并回复1点体力。若场上有存活的徐庶(将/界)，则改为令1名角色摸一张牌并回复1点体力，然后你摸一张牌。",
            "xinfu_pdgyingshi":"隐世",
            "xinfu_pdgyingshi_info":"锁定技，你始终跳过判定阶段。你不能被选择为延时锦囊牌的目标。",
            "pcaudio_wolong_card":"卧龙",
            "pcaudio_wolong_card_info":"",
            "pcaudio_fengchu_card":"凤雏",
            "pcaudio_fengchu_card_info":"",
            "pcaudio_shuijing_card":"水镜",
            "pcaudio_shuijing_card_info":"",
            "pcaudio_xuanjian_card":"玄剑",
            "pcaudio_xuanjian_card_info":"",
            zhaotongzhaoguang:"赵统赵广",
            "yizan_respond_sha":"翊赞",
            "yizan_respond_sha_info":"",
            "yizan_use":"翊赞",
            "yizan_use_info":"你可以将两张牌(其中至少应有一张基本牌)当做任意基本牌使用或打出。",
            "yizan_respond_shan":"翊赞",
            "yizan_respond_shan_info":"",
            "xinfu_longyuan":"龙渊",
            "xinfu_longyuan_info":"觉醒技，当你使用或打出的基本牌结算完成后，若你本局游戏内发动过〖翊赞〗的次数大于等于3，则你将〖翊赞〗描述中的“两张牌”改为“一张牌”。",
            "yizan_count":"翊赞",
            "yizan_count_info":"",
            majun:"马钧",
            "xinfu_jingxie1":"精械",
            "xinfu_jingxie1_info":"出牌阶段，你可以展示一张未强化过的【诸葛连弩】或标准包/军争包/SP包中的防具牌，然后对其进行强化。当你处于濒死状态时，你可以重铸一张防具牌，将体力回复至1点。",
            "xinfu_jingxie2":"精械",
            "xinfu_jingxie2_info":"",
            "xinfu_qiaosi":"巧思",
            "xinfu_qiaosi_info":"出牌阶段限一次，你可以投掷一枚六面骰子，展示牌堆顶的X张牌并获得之。然后，你选择一项：1.交给一名其他角色X张牌。2.弃置X张牌。(X为骰子的点数)",
            "xf_yiji":"伊籍",
            "xinfu_jijie":"机捷",
            "xinfu_jijie_info":"出牌阶段限一次。你可以观看牌堆底的一张牌，然后将其交给一名角色。",
            "xinfu_jiyuan":"急援",
            "xinfu_jiyuan_info":"当一名角色进入濒死状态时，或者你交给一名其他角色牌时，你可以令其摸一张牌。",
            },
            card:{
            },
        };
        if(lib.device||lib.node){
			for(var i in xmobile.character){xmobile.character[i][4].push('ext:新服杂碎/'+i+'.jpg');}
		}else{
			for(var i in xmobile.character){xmobile.character[i][4].push('db:extension-新服杂碎:'+i+'.jpg');}
		}
		return xmobile;
	});
	lib.config.all.characters.push('xmobile');
	if(!lib.config.characters.contains('xmobile')) lib.config.characters.push('xmobile');
	lib.translate['xmobile_character_config']='手杀';
	
	game.import('card',function(){
	 var mobilesupport={
		name:'mobilesupport',
		connect:true,
		card:{
            "wolong_card":{
                image:"ext:新服杂碎/wolong_card.jpg",
                type:"takaramono",
                fullskin:true,
            },
            "fengchu_card":{
               image:"ext:新服杂碎/fengchu_card.jpg",
               type:"takaramono",
                fullskin:true,
            },
            "xuanjian_card":{
                image:"ext:新服杂碎/xuanjian_card.jpg",
                fullskin:true,
                type:"takaramono",
            },
            "shuijing_card":{
                image:"ext:新服杂碎/shuijing_card.jpg",
                fullskin:true,
                type:"takaramono",
            },
            "rewrite_bagua":{
                cardimage:"bagua",
                fullskin:true,
                type:"equip",
                subtype:"equip2",
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
                skills:["rw_bagua_skill"],
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
            "rewrite_baiyin":{
                fullskin:true,
                cardimage:"baiyin",
                type:"equip",
                subtype:"equip2",
                onLose:function (){
        player.recover();
        player.draw(2);
    },
                skills:["rw_baiyin_skill"],
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
            },
            "rewrite_lanyinjia":{
                cardimage:"lanyinjia",
                fullskin:true,
                type:"equip",
                subtype:"equip2",
                skills:["rw_lanyinjia","lanyinjia2"],
                ai:{
                    equipValue:6,
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
            },
            /*"rewrite_minguangkai":{
                cardimage:"suolianjia",
                mode:["guozhan"],
                fullskin:true,
                type:"equip",
                subtype:"equip2",
                skills:["rw_minguangkai_cancel","rw_minguangkai_link"],
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
            },*/
            "rewrite_renwang":{
                cardimage:"renwang",
                fullskin:true,
                type:"equip",
                subtype:"equip2",
                skills:["rw_renwang_skill"],
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
            },
            "rewrite_tengjia":{
                cardimage:"tengjia",
                fullskin:true,
                type:"equip",
                subtype:"equip2",
                cardnature:"fire",
                ai:{
                    equipValue:function (card,player){
            if(player.hasSkillTag('maixie')&&player.hp>1) return 0;
            if(player.hasSkillTag('noDirectDamage')) return 10;
            if(get.damageEffect(player,player,player,'fire')>=0) return 10;
            var num=3-game.countPlayer(function(current){
                return get.attitude(current,player)<0;
            });
            if(player.hp==1) num+=4;
            if(player.hp==2) num+=1;
            if(player.hp==3) num--;
            if(player.hp>3) num-=4;
            return num;
        },
                    basic:{
                        equipValue:3,
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
                skills:["rw_tengjia1","rw_tengjia2","rw_tengjia3"],
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
            "rewrite_zhuge":{
                cardimage:"zhuge",
                distance:{
                    attackFrom:-2,
                },
                fullskin:true,
                type:"equip",
                subtype:"equip1",
                ai:{
                    equipValue:function (card,player){
            if(!game.hasPlayer(function(current){
                return player.canUse('sha',current)&&get.effect(current,{name:'sha'},player,player)<0;
            })){
                return 1;
            }
            if(player.hasSha()&&_status.currentPhase==player){
                if(player.getEquip('zhuge')||player.getCardUsable('sha')==0){
                    return 10;
                }
            }
            var num=player.countCards('h','sha');
            if(num>1) return 6+num;
            return 3+num;
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
                    tag:{
                        valueswap:1,
                    },
                    result:{
                        target:function (player,target){
                return get.equipResult(player,target,name);
            },
                    },
                },
                skills:["zhuge_skill"],
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
            /*"rewrite_huxinjing":{
                cardimage:"huxinjing",
                fullskin:true,
                type:"equip",
                subtype:"equip2",
                skills:["huxinjing"],
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
            "rewrite_taipingyaoshu":{
                cardimage:"taipingyaoshu",
                mode:["guozhan"],
                fullskin:true,
                type:"equip",
                subtype:"equip2",
                nomod:true,
                nopower:true,
                unique:true,
                global:["g_taipingyaoshu","g_taipingyaoshu_ai"],
                skills:["taipingyaoshu"],
                ai:{
                    equipValue:function (card,player){
            if(player.hasSkill('wendao')) return 9;
            if(game.hasPlayer(function(current){
                return current.hasSkill('wendao')&&get.attitude(player,current)<=0;
            })){
                return 1;
            }
            return 6;
        },
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
                onLose:function (){
        player.draw(2);
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
            },*/
            },
		skill:{
		"rw_bagua_skill":{
                inherit:"bagua_skill",
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
                audio:"bagua_skill",
                check:function (event,player){
        if(get.damageEffect(player,event.player,player)>=0) return false;
        return true;
    },
                content:function (){
        "step 0"
        player.judge('rewrite_bagua',function(card){return (get.suit(card)!='spade')?1.5:-0.5});
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
            "rw_baiyin_skill":{
                inherit:"baiyin_skill",
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                audio:"ext:新服杂碎:true",
                filter:function (event,player){
                    if(event.num<=1) return false;
                    if(event.source&&event.source.hasSkillTag('unequip',false,{
                        name:event.card?event.card.name:null,
                        target:player,
                        card:event.card
                    })) return false;
                    return true;
                },
                priority:-10,
                content:function (){
                    trigger.num=1;
                },
            },
            "rw_lanyinjia":{
                inherit:"lanyinjia",
                enable:["chooseToRespond"],
                filterCard:true,
                viewAs:{
                    name:"shan",
                },
                viewAsFilter:function (player){
                    if(!player.countCards('h')) return false;
                },
                prompt:"将一张手牌当闪打出",
                check:function (card){
                    return 6-get.value(card);
                },
                ai:{
                    respondShan:true,
                    skillTagFilter:function (player){
                        if(!player.countCards('h')) return false;
                    },
                    effect:{
                        target:function (card,player,target,current){
                            if(get.tag(card,'respondShan')&&current<0&&target.countCards('h')) return 0.59
                        },
                    },
                    order:4,
                    useful:-0.5,
                    value:-0.5,
                    basic:{
                        useful:[7,2],
                        value:[7,2],
                    },
                },
            },
            "rw_minguangkai_cancel":{
                inherit:"minguangkai_cancel",
                trigger:{
                    target:"useCardToBefore",
                },
                forced:true,
                priority:15,
                check:function (event,player){
                    return get.effect(event.target,event.card,event.player,player)<0;
                },
                filter:function (event,player){
                    if(['huoshaolianying','huogong'].contains(event.card.name)) return true;
                    if(event.card.name=='sha') return event.card.nature=='fire';
                    return false;
                },
                content:function (){
                    trigger.cancel();
                },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                            if(['huoshaolianying','huogong'].contains(card.name)||(card.name=='sha'&&card.nature=='fire')){
                                return 'zeroplayertarget';
                            }
                        },
                    },
                },
            },
            "rw_minguangkai_link":{
                inherit:"minguangkai_link",
                trigger:{
                    player:"linkBefore",
                },
                forced:true,
                priority:20,
                filter:function (event,player){
        return !player.isLinked();
    },
                content:function (){
        trigger.cancel();
    },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                if(target.isMinor()&&['tiesuo','lulitongxin'].contains(card.name)){
                    return 'zeroplayertarget';
                }
            },
                    },
                },
            },
            "rw_renwang_skill":{
                inherit:"renwang_skill",
                trigger:{
                    target:"shaBefore",
                },
                forced:true,
                priority:6,
                audio:"ext:新服杂碎:true",
                filter:function (event,player){
        if(event.player.hasSkillTag('unequip',false,{
            name:event.card?event.card.name:null,
            target:player,
            card:event.card
        })) return false;
        return (event.card.name=='sha'&&['spade','club','heart'].contains(get.suit(event.card)))
    },
                content:function (){
        trigger.cancel();
    },
                ai:{
                    effect:{
                        target:function (card,player){
                if(player.hasSkillTag('unequip',false,{
                    name:card?card.name:null,
                    target:player,
                    card:card
                })) return;
                if(card.name=='sha'&&get.color(card)=='black') return 'zerotarget';
            },
                    },
                },
            },
            "rw_tengjia1":{
                inherit:"tengjia1",
                trigger:{
                    target:"useCardToBefore",
                },
                forced:true,
                priority:6,
                audio:"ext:新服杂碎:true",
                filter:function (event,player){
                    if(event.player.hasSkillTag('unequip',false,{
                        name:event.card?event.card.name:null,
                        target:player,
                        card:event.card
                    })) return false;
                    if(event.card.name=='nanman') return true;
                    if(event.card.name=='wanjian') return true;
                    if(event.card.name=='sha'&&!event.card.nature) return true;
                },
                content:function (){
                    trigger.cancel();
                },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                            if(player.hasSkillTag('unequip',false,{
                                name:card?card.name:null,
                                target:player,
                                card:card
                            })) return;
                            if(card.name=='nanman'||card.name=='wanjian') return 'zerotarget';
                            if(card.name=='sha'){
                                var equip1=player.getEquip(1);
                                if(equip1&&equip1.name=='zhuque') return 2;
                                if(equip1&&equip1.name=='qinggang') return 1;
                                if(!card.nature) return 'zerotarget';
                            }
                        },
                    },
                },
            },
            "rw_tengjia2":{
                inherit:"tengjia2",
                trigger:{
                    player:"damageBegin",
                },
                filter:function (event){
                    if(event.nature=='fire') return true;
                },
                audio:"ext:新服杂碎:true",
                forced:true,
                content:function (){
                    trigger.num++;
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
            },
            "rw_tengjia3":{
                inherit:"rw_minguangkai_link",
                trigger:{
                    player:"linkBefore",
                },
                forced:true,
                priority:20,
                filter:function (event,player){
        return !player.isLinked();
    },
                content:function (){
        trigger.cancel();
    },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                if(['tiesuo','lulitongxin'].contains(card.name)){
                    return 'zeroplayertarget';
                }
            },
                    },
                },
            },
			
		},
		translate:{
	        "rw_bagua_skill":"先天八卦阵",
            "rw_bagua_skill_info":"每当你需要使用或打出一张【闪】时，你可以进行一次判定，若判定结果不为黑桃，视为你使用或打出了一张【闪】。",
            "rw_baiyin_skill":"玉照狮子盔",
            "rw_baiyin_skill_info":"锁定技，你每次受到伤害时，最多承受1点伤害（防止多余的伤害）；当你失去装备区里的【玉照狮子盔】时，你回复1点体力并摸两张牌。",
            "rw_lanyinjia":"精银甲",
            "rw_lanyinjia_info":"你可以将一张手牌当做【闪】使用或打出。锁定技，【精银甲】不会无效。",
            "rw_minguangkai_cancel":"耀光铠",
            "rw_minguangkai_cancel_info":"锁定技，当你成为【火烧连营】、【火攻】或火【杀】的目标时，或即将被横置时，取消之。",
            "rw_minguangkai_link":"耀光铠",
            "rw_minguangkai_link_info":"锁定技，当你成为【火烧连营】、【火攻】或火【杀】的目标时，或即将被横置时，取消之。",
            "rw_renwang_skill":"仁王金刚盾",
            "rw_renwang_skill_info":"有花色且不为方片的杀对你无效。",
            "rw_tengjia1":"桐油百炼甲",
            "rw_tengjia1_info":"定技，【南蛮入侵】、【万箭齐发】和普通【杀】对你无效。你每次受到火焰伤害时，该伤害+1。你不会被横置。",
            "rw_tengjia2":"桐油百炼甲",
            "rw_tengjia2_info":"定技，【南蛮入侵】、【万箭齐发】和普通【杀】对你无效。你每次受到火焰伤害时，该伤害+1。你不会被横置。",
            "rw_tengjia3":"桐油百炼甲",
            "rw_tengjia3_info":"定技，【南蛮入侵】、【万箭齐发】和普通【杀】对你无效。你每次受到火焰伤害时，该伤害+1。你不会被横置。",
            "rewrite_bagua":"先天八卦阵",
            "rewrite_bagua_info":"每当你需要使用或打出一张【闪】时，你可以进行一次判定，若判定结果不为黑桃，视为你使用或打出了一张【闪】。",
            "rewrite_baiyin":"玉照狮子盔",
            "rewrite_baiyin_info":"锁定技，你每次受到伤害时，最多承受1点伤害（防止多余的伤害）；当你失去装备区里的【玉照狮子盔】时，你回复1点体力并摸两张牌。",
            "rewrite_lanyinjia":"精银甲",
            "rewrite_lanyinjia_info":"你可以将一张手牌当做【闪】使用或打出。锁定技，【精银甲】不会无效。",
            "rewrite_minguangkai":"耀光铠",
            "rewrite_minguangkai_info":"锁定技，当你成为【火烧连营】、【火攻】或火【杀】的目标时，或即将被横置时，取消之。",
            "rewrite_renwang":"仁王金刚盾",
            "rewrite_renwang_info":"有花色且不为方片的杀对你无效。",
            "rewrite_tengjia":"桐油百炼甲",
            "rewrite_tengjia_info":"锁定技，【南蛮入侵】、【万箭齐发】和普通【杀】对你无效。你每次受到火焰伤害时，该伤害+1。你不会被横置。",
            "rewrite_zhuge":"元戎精械弩",
            "rewrite_zhuge_info":"你于出牌阶段内使用【杀】无次数限制。",
            "rewrite_huxinjing":"大号护心镜",
            "rewrite_huxinjing_info":"当你受到伤害时，若伤害值大于或等于你的体力值，则你可以将【大号护心镜】置入弃牌堆，然后防止此伤害。当你将【大号护心镜】连横时，你多摸一张牌。",
            "rewrite_taipingyaoshu":"太平全术",
            "rewrite_taipingyaoshu_info":"锁定技，防止你受到的所有属性伤害；全场每有一名与你势力相同的角色存活，所有此势力角色的手牌上限便+1；当你失去装备区里的【太平全术】时，你摸两张牌。",
            
            takaramono:"宝物",
            "wolong_card":"卧龙",
            "wolong_card_info":"对1名角色造成1点火焰伤害。若场上有存活的诸葛亮(火)，则改为对至多2名角色各造成1点火焰伤害。",
            "fengchu_card":"凤雏",
            "fengchu_card_info":"横置至多3名角色。若场上有存活的庞统(火)，则改为横置至多4名角色。",
            "xuanjian_card":"玄剑",
            "xuanjian_card_info":"令1名角色摸一张牌并回复1点体力。若场上有存活的徐庶(将/界)，则改为令1名角色摸一张牌并回复1点体力，然后你摸一张牌。",
            "shuijing_card":"水镜",
            "shuijing_card_info":"将1名角色装备区内的防具移动到另1角色对应区域。若场上有存活的司马徽，则改为将1名角色装备区内的1件装备移动到另1角色对应区域。",
		},
		list:[],
}
return mobilesupport;
});
	lib.translate['mobilesupport_card_config']='手杀衍生';
 lib.config.all.cards.push('mobilesupport');
 if(!lib.config.cards.contains('mobilesupport')) lib.config.cards.push('mobilesupport');
    
    
    
    
    
    
    
    
    
    
},help:{},config:{"downloadskill":{"name":"<span style='text-decoration: underline'>重新下载技能配音</span>","clear":true},"downloaddie":{"name":"<span style='text-decoration: underline'>重新下载阵亡配音</span>","clear":true},"caoying":{"name":"曹婴四血化","init":false},"pcdelay":{"name":"评才擦拭停顿","intro":"在发动〖评才〗时使游戏停顿9秒左右，确保配音能够完整播放。","init":true},"characterIntro":{"name":"显示武将称号","init":true},"cheatcode":{"name":"<span style='text-decoration: underline'>神秘代码</span>","clear":true}},package:{
    character:{
        character:{
        },
        translate:{
        },
    },
    card:{
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
    intro:"关于但不限于新服的各种玩意儿",
    author:"苏婆玛丽奥",
    diskURL:"",
    forumURL:"",
    version:"1.0",
},files:{"character":[],"card":[],"skill":[]}}})