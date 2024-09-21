'use strict';
window.wwyj_import(function(lib,game,ui,get,ai,_status){
    if(!lib.qhlypkg){
        lib.qhlypkg = [];
    }
    if(!lib.qhly_groupimage){
        lib.qhly_groupimage = {};
    }
    if(!lib.qhly_groupcolor){
        lib.qhly_groupcolor = {};
    }
    lib.qhly_groupcolor['wwyjsha'] = "purple";

    //在这里设置势力颜色。颜色代码可以参考：https://tool.oschina.net/commons?type=3

    var taici = {

    };
    lib.qhlypkg.push({
        isExt:true,//是否是扩展，一般填true
        filterCharacter:function(name){
            return name.indexOf('wwyj_') == 0;//判断此ID的武将是否属于此皮肤包
        },
        characterNameTranslate:function(name){
            //这里根据武将ID返回其中文名字。
            return get.translation(name);
        },
        characterTaici:function(name){
            //这里返回武将原皮台词。
            return taici[name];
        },
        originSkinInfo:function(name){
            var info = {
                'qhfl_zhangsan':'张三原皮说明。',
            };
            return info[name];
        },
        characterInfo:function(name){
            //这里可以返回角色资料。如不返回则显示get.characterIntro(name)。
        },
        prefix:'extension/文武英杰/', //原皮前缀，标识原皮肤的位置。
        skin:{
            standard:'extension/文武英杰/skin/standard/',//可切换普通皮肤的前缀
        },
        audioOrigin:'extension/文武英杰/',//原技能配音位置
        audio:'extension/文武英杰/skin/audio/',//切换皮肤后的技能配音位置
        skininfo:{

        }
    });
});