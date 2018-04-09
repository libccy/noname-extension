game.import("extension",function(lib,game,ui,get,ai,_status){
  var z = {
    init:function(){
      lib.init.css(lib.assetURL+'extension/官渡之战','style');
      var brawl = {
        name:'官渡之战',
        mode:'identity',
        intro:'',
        content:{
          submode:'normal',
          cardPile:function(){
            for(var i=0;i<lib.cardPile.standard.length;i++){
              if(lib.cardPile.standard[i][2]=='wugu'){
                lib.cardPile.standard[i][2] = 'cxyTunLiang';
              }
              else if(lib.cardPile.standard[i][2]=='taoyuan'||lib.cardPile.standard[i][2]=='shandian'){
                lib.cardPile.standard[i][2] = 'cxyYuanJun';
              }
              else if(lib.cardPile.standard[i][2]=='nanman'){
                lib.cardPile.standard[i][2]='lulitongxin';
              }
            }
            for(var i=0;i<lib.cardPile.extra.length;i++){
              if(lib.cardPile.extra[i][2]=='wugu'){
                lib.cardPile.extra[i][2] = 'cxyTunLiang';
              }
              else if(lib.cardPile.extra[i][2]=='taoyuan'||lib.cardPile.extra[i][2]=='shandian'){
                lib.cardPile.extra[i][2] = 'cxyYuanJun';
              }
              else if(lib.cardPile.extra[i][2]=='nanman'){
                lib.cardPile.extra[i][2]='lulitongxin';
              }
            }
            return lib.cardPile.standard.concat(lib.cardPile.extra);
          },
          chooseCharacterBefore:function(){
            var zhenxing = [
              ['cZhu','yZhu','yZhong','cZhong','yZhong','cZhong','cZhong','yZhong'],
              ['cZhu','yZhong','cZhong','yZhu','yZhong','cZhong','yZhong','cZhong'],
              ['cZhu','yZhong','cZhong','yZhong','cZhong','yZhong','cZhong','yZhu'],
              ['cZhu','yZhu','cZhong','yZhong','cZhong','yZhong','cZhong','yZhong'],
              ['cZhu','yZhong','cZhong','yZhong','cZhong','yZhu','cZhong','yZhong'],
            ].randomGet();
            lib.translate.cZhu = '主';
            lib.translate.yZhu = '主';
            lib.translate.cZhong = '忠';
            lib.translate.yZhong = '忠';
            lib.translate.cZhu2 = '主帅';
            lib.translate.yZhu2 = '主帅';
            lib.translate.cZhong2 = '忠臣';
            lib.translate.yZhong2 = '忠臣';
            _status.firstAct = game.zhu = game.players.randomGet();
            var current = _status.firstAct , currentSeat = 0;
            var element = {
              logAi:function(){},
              hasZhuSkill:function(skill){
                if(!this.hasSkill(skill))return false;
                return this.identity=='cZhu'||this.identity=='yZhu';
              },
              dieAfter:function(source){
                game.checkResult();
                if(source){
                  if(this.identity=='cZhong'){
                    if(source.identity=='cZhong'||source.identity=='cZhu'){
                      source.discard(source.getCards('he'));
                    }
                    else {
                      source.gain(_status.event.playerCards);
                      source.$gain2(_status.event.playerCards);
                      game.log(source,'继承了',this,'的衣钵',_status.event.playerCards);
                    }
                  }
                  else if(this.identity=='yZhong'){
                    if(source.identity=='yZhong'||source.identity=='yZhu'){
                      source.discard(source.getCards('he'));
                    }
                    else {
                      source.gain(_status.event.playerCards);
                      source.$gain2(_status.event.playerCards);
                      game.log(source,'继承了',this,'的衣钵',_status.event.playerCards);
                    }
                  }
                }
              },
            };
            while(true){
              current.cxySeat = currentSeat;
              current.cxyNode = zhenxing[currentSeat];
              current.identity = zhenxing[currentSeat];
              current.ai.shown = 1;
              for(var i in element){
                current[i] = element[i];
              }
              currentSeat++;
              current = current.next;
              if(current == _status.firstAct)break;
            }
            lib.element.content.gameDraw = function(){
              'step 0'
              var end = player;
              var numx = 4;
              do{
                player.directgain(get.cards(numx));
                player=player.next;
              } while(player!=end);
              event.current = 0;
              event.changeCard = function(player){
                var hs = player.getCards('h');
                game.addVideo('lose',player,[get.cardsInfo(hs),[],[]]);
                for(var i=0;i<hs.length;i++){
                  hs[i].discard(false);
                }
                player.directgain(get.cards(hs.length));
              };
              'step 1'
              var current = get.cxyPlayers(event.current)[0];
              current.chooseBool('是否更换手牌？').ai=function(){
                var val = 0 , hs = current.getCards('h');
                for(var i=0;i<hs.length;i++){
                  val += get.value(hs);
                }
                return val < 24;
              };
              event.target = current;
              'step 2'
              if(result.bool){
                event.changeCard(event.target);
              }
              event.current++;
              if(event.current < game.players.length)event.goto(1);
            };
            get.cxyPlayers = function(tag){
              if(typeof tag == 'number'){
                return game.filterPlayer(function(target){
                  return target.cxySeat == tag;
                });
              }
              if(typeof tag == 'string'){
                return game.filterPlayer(function(target){
                  return target.cxyNode == tag;
                });
              }
              return [];
            };
            get.attitude = function(from,to){
              var identity1 = from.identity,
                  identity2 = to.identity;
              switch(identity1){
                case 'cZhu':
                  switch(identity2){
                    case 'cZhu':return 10;
                    case 'cZhong':return 6;
                    case 'yZhu':return -10;
                    case 'yZhong':return -6;
                  }
                  break;
                case 'cZhong':
                  switch(identity2){
                    case 'cZhu':return 10;
                    case 'cZhong':return 6;
                    case 'yZhu':return -10;
                    case 'yZhong':return -6;
                  }
                  break;
                case 'yZhu':
                  switch(identity2){
                    case 'cZhu':return -10;
                    case 'cZhong':return -6;
                    case 'yZhu':return 10;
                    case 'yZhong':return 6;
                  }
                  break;
                case 'yZhong':
                  switch(identity2){
                    case 'cZhu':return -10;
                    case 'cZhong':return -6;
                    case 'yZhu':return 10;
                    case 'yZhong':return 6;
                  }
                  break;
              }
            };
            game.showIdentity(true);
            game.checkResult = function(){
              var cZhu = get.cxyPlayers('cZhu')[0];
              var yZhu = get.cxyPlayers('yZhu')[0];
              if(!cZhu){
                if(game.me.identity.indexOf('y')!=-1)game.over(true);
                else game.over(false);
              }
              else if(!yZhu){
                if(game.me.identity.indexOf('c')!=-1)game.over(true);
                else game.over(false);
              }
            };
            game.chooseCharacter = function(){
              var next=game.createEvent('chooseCharacter',false);
              next.showConfig=true;
              next.ai = function(player,list){
                player.init(list.randomGet());
              };
              next.setContent(function(){
                'step 0'
                ui.arena.classList.add('choose-character');
                event.list1 = [];
                event.list2 = [];
                for(var i in game.cxyPack.character){
                  var info = game.cxyPack.character[i];
                  if(info[4].contains('zhu'))continue;
                  if(info[1]=='wei')event.list1.push(i);
                  else if(info[1]=='qun')event.list2.push(i);
                }
                var cZhu = get.cxyPlayers('cZhu')[0];
                cZhu.init('cxyCaoCao');
                cZhu.maxHp++;
                cZhu.hp++;
                cZhu.update();
                var yZhu = get.cxyPlayers('yZhu')[0];
                yZhu.init('cxyYuanShao');
                yZhu.maxHp++;
                yZhu.hp++;
                yZhu.update();
                if(game.me.cxyNode.indexOf('c')!=-1){
                  event.ais = get.cxyPlayers('yZhong');
                  event.mes = get.cxyPlayers('cZhong');
                  event.aiList = event.list2;
                  event.meList = event.list1;
                }
                else {
                  event.ais = get.cxyPlayers('cZhong');
                  event.mes = get.cxyPlayers('yZhong');
                  event.aiList = event.list1;
                  event.meList = event.list2;
                }
                event.ais.forEach(function(current){
                  var tmp = event.aiList.randomRemove(2);
                  current.init(tmp.randomGet());
                });
                'step 1'
                event.current = event.mes.shift();
                if(event.current == game.me){
                  var list = event.meList.randomRemove(2);
                  var dialog = ui.create.dialog('选将阶段','hidden');
                  if(event.current!=game.me){
                    dialog.addText('请代替队友选将');
                  }
                  dialog.add([list,'character']);
                  game.me.chooseButton(dialog,true).set('onfree',true).set('filterButton',function(button){
                    return !game.hasPlayer(function(current){
                      return current.name == button.link;
                    });
                  });
                  event.current.classList.add('selectedx');
                }
                else {
                  event.ai(event.current,event.meList.randomRemove(2));
                  if(event.mes.length) event.redo();
                  else event.goto(3);
                }
                'step 2'
                event.current.init(result.links[0]);
                event.current.classList.remove('selectedx');
                if(event.mes.length) event.goto(1);
                'step 3'
                delete game.cxyPack;
                setTimeout(function(){
                  ui.arena.classList.remove('choose-character');
                },500);
              });
            };
          },
        },
      };
      brawl.showcase = function(init){
        var node = this;
        this.classList.add('cxy');
        var $ = function(){
          var obj = null;
          if(typeof arguments[0] == 'string'){
            if(arguments[0][0]=='.'||arguments[0][0]=='#'){
              obj = ui.create.div(arguments[0]);
            }
            else {
              obj = document.createElement(arguments[0]);
              if(typeof arguments[1] == 'string'){
                if(arguments[1][0]=='.'||arguments[1][0]=='#'){
                  var list = arguments[1].split('.');
                  for(var k=0;k<list.length;k++){
                    if(!list[k])continue;
                    if(list[k].indexOf('#')>=0){
                      var tmp = list[k].split('#');
                      obj.id = tmp[1];
                      if(tmp[0])obj.classList.add(tmp[0]);
                    }
                    else {
                      obj.classList.add(list[k]);
                    }
                  }
                }
              }
            }
          }
          else if(typeof arguments[0] == 'function'){
            var tmp = arguments[0](arguments);
            if(tmp instanceof HTMLElement){
              obj = tmp;
            }
            else {
              return tmp;
            }
          }
          else if(arguments[0] instanceof HTMLElement){
            obj = arguments[0];
          }
          else {
            return null;
          }
          obj.goto = function(){
            var parent = node;
            if(Array.isArray(arguments[0])&&arguments[1]=='$'){
              parent = arguments[0][0];
            }
            else {
              parent = arguments[0] || node;
            }
            parent.appendChild(this);
            if(parent == node){
              node.nodes.push(this);
            }
            return this;
          };
          obj.setScroll = function(){
            lib.setScroll(this);
            return this;
          };
          obj.setPopped = function(func,width,height,forceclick,paused2){
            lib.setPopped(this,func,width,height,forceclick,paused2);
            return this;
          };
          obj.getParentNode = function(num){
            var current = this;
            num = num || 1;
            for(var i=0;i<num;i++){
              current = current.parentNode;
            }
            return current;
          };
          obj.appends = function(o){
            for(var i in o){
              o[i].goto(this);
            }
            return this;
          };
          obj.apd = function(comp){
            this.appendChild(comp);
            return this;
          };
          obj.li = function(){
            var list = [];
            if(Array.isArray(arguments[0])&&arguments[1]=='$'){
              list = arguments[0];
            }
            else {
              list = arguments;
            }
            for(var i=0;i<list.length;i++){
              $('li').html(list[i]).goto(this);
            }
            return this;
          };
          obj.html = function(){
            var val = '';
            if(Array.isArray(arguments[0])&&arguments[1]=='$'){
              val = arguments[0][0];
            }
            else {
              val = arguments[0] || '';
            }
            this.innerHTML = val;
            return this;
          };
          obj.position = function(){
            var x , y , filterx , filtery;
            if(Array.isArray(arguments[0])&&arguments[1]=='$'){
              x = arguments[0][0]||0;
              y = arguments[0][1]||0;
              filterx = arguments[0][2];
              filtery = arguments[0][3];
            }
            else {
              x = arguments[0]||0;
              y = arguments[1]||0;
              filterx = arguments[2];
              filtery = arguments[3];
            }
            if(this.parentNode){
              if(filterx>=1&&filterx<=5){
                x = (this.parentNode.offsetWidth/5 - this.offsetWidth)/2 + this.parentNode.offsetWidth*(filterx-1)/5 + x;
              }
              if(filtery>=1&&filtery<=5){
                y = (this.parentNode.offsetHeight/5 - this.offsetHeight)/2 + this.parentNode.offsetHeight*(filtery-1)/5 + y;
              }
            }
            this.style.left = x + 'px';
            this.style.top = y + 'px';
            return this;
          };
          obj.on = function(){
            var name , func;
            if(Array.isArray(arguments[0])&&arguments[1]=='$'){
              name = arguments[0][0];
              func = arguments[0][1];
            }
            else {
              name = arguments[0];
              func = arguments[1];
            }
            this.addEventListener(name,func);
            return this;
          };
          obj.$ = function(o){
            var that = this;
            for(var i in o){
              if(typeof that[i] == 'function'){
                that = that[i](o[i],'$');
              }
            }
            return that;
          };
          obj.setScroll();
          return obj;
        };
        if(init){
          node.nodes = [];
        }
        else {
          while(node.nodes.length){
	          node.nodes.shift().remove();
	        }
        }
        $('button','.cxy-btn').goto().$({
          html:['规则介绍'],
          on:['click',function(){
            $('.cxy-bg').goto(this.getParentNode(4)).appends({
              close: $('.cxy-close').html('&times;').on('click',function(){
                this.parentNode.remove();
              }),
              title1: $('.cxy-title').html('游戏规则'),
              text1: $('ol','.cxy-text').li([
                '游戏人数：4(曹操方)vs4(袁绍方)',
                '道具限制：每名角色(含电脑)每局可使用一次手气卡',
                '专属将池：<a id="cxy-a">查看详细</a>',
                '身份设置：每方4人有一人为主帅(两方主帅固定为袁绍和曹操[界])，其他三人为忠臣',
                '体力上限：主帅额外获得1点体力上限，获得各自武将牌上的主公技',
                '胜利条件：击败对方主帅',
                '牌堆变更：牌堆为军争牌堆，没有木牛流马；删除卡牌桃园结义、南蛮入侵和五谷丰登，替换为卡牌勠力同心、屯粮和援军',
              ],'$'),
            });
            $(document.getElementById('cxy-a')).on('click',function(){
              onresizeList[1].node.click();
            });
          }],
        });
        $('button','.cxy-btn').goto().$({
          html:['专属将池'],
          on:['click',function(){
            $('.cxy-bg').goto(this.getParentNode(4)).appends({
              close: $('.cxy-close').html('&times;').on('click',function(){
                this.parentNode.remove();
              }),
              title1: $('.cxy-title').html('专属将池'),
              area1: $(function(){
                var pack = z.pack;
                function addHero(name,tag){
                  var info = pack.character[name];
                  var hero = $('.cxy-hero').css({
                    'background-color':info[1]=='wei'?'rgb(78,117,140)':'rgb(255,203,0)',
                  });
                  hero.appends({
                    img: $('.cxy-hero-img').css({
                      'background-image':'url('+get.cxyImg(name)+')',
                    }),
                    group: $('.cxy-hero-group').html(get.translation(info[1])),
                    name: $('.cxy-hero-name').html('<xw>'+(pack.translate[name]||lib.translate[name])+'</xw>'),
                    hp: (function(){
                      var div = $('.cxy-hero-hp');
                      var hps = {};
                      for(var i=0;i<info[2];i++){
                        hps['hp_'+i] = $('.cxy-hero-hp-node');
                      }
                      div.appends(hps);
                      return div;
                    })(),
                  });
                  if(!tag){
                    hero.on('click',function(){
                      $('.cxy-bg').appends({
                        close:$('.cxy-close').html('&times;').on('click',function(){
                          this.parentNode.remove();
                        }),
                        hr: addHero(name,true).css({
                          'position': 'absolute',
                          'left': 'calc(25% - 60px)',
                          'top': 'calc(50% - 70px)',
                          '-webkit-transform':'scale(2)',
                        }),
                        skills: (function(){
                          var str = '';
                          for(var i=0;i<info[3].length;i++){
                            str += '<span class=greentext><xw>【'+(pack.translate[info[3][i]]||lib.translate[info[3][i]])+'】</xw></span>';
                            str += '<p><xw>'+(pack.translate[info[3][i]+'_info']||lib.translate[info[3][i]+'_info'])+'</xw></p>';
                          }
                          return $('.cxy-hero-skills').html(str);
                        })(),
                      }).goto(this.getParentNode(3));
                    });
                  }
                  return hero;
                };
                var objs = {};
                for(var i in pack.character){
                  objs[i] = addHero(i);
                }
                var div = $('.cxy-characterArea').appends(objs);
                return div;
              }),
            });
          }],
        });
      };
      brawl.init = function(){
        game.cxyPack = z.pack;
        for(var i in z.config){
          game.saveConfig(i,z.config[i],'identity');
        }
        for(var i in z.pack){
          for(var k in z.pack[i]){
            lib[i][k] = z.pack[i][k];
          }
        }
        var sheet1 = '{text-shadow:rgba(200,20,20,1) 0 0 2px,rgba(200,20,20,1) 0 0 5px,rgba(57, 123, 4,1) 0 0 5px,rgba(200,20,20,1) 0 0 5px,black 0 0 1px;}';
        var sheet2 = '{text-shadow:rgba(20,20,200,1) 0 0 2px,rgba(20,20,200,1) 0 0 5px,rgba(57, 123, 4,1) 0 0 5px,rgba(20,20,200,1) 0 0 5px,black 0 0 1px;}';
        lib.init.sheet('.player .identity[data-color="cZhu"],.player .identity[data-color="cZhong"]'+sheet2);
        lib.init.sheet('.player .identity[data-color="yZhu"],.player .identity[data-color="yZhong"]'+sheet1);
      };
      lib.brawl.cxyGDZZ = brawl;
    },
    pack:{
      character:{
        cxyYuJin:["male","wei",4,['cxyZhenJun'],['ext:官渡之战/cxyYuJin.jpg']],
        cxyCaoHong:["male","wei",4,['yuanhu'],['ext:官渡之战/cxyCaoHong.jpg']],
        cxyXunYu:["male","wei",3,['quhu','jieming'],['ext:官渡之战/cxyXunYu.jpg']],
        cxyLiuYe:["male","wei",3,['polu','choulve'],['ext:官渡之战/cxyLiuYe.jpg']],
        cxyZhangLiao:["male","wei",4,['retuxi'],['ext:官渡之战/cxyZhangLiao.jpg']],
        cxyGuoJia:["male","wei",3,['tiandu','reyiji'],['ext:官渡之战/cxyGuoJia.jpg']],
        cxyGuanYu:["male","wei",4,['wusheng','danji'],['ext:官渡之战/cxyGuanYu.jpg']],
        cxyChengYu:["male","wei",3,['shefu','benyu'],['ext:官渡之战/cxyChengYu.jpg']],
        cxyXunYou:["male","wei",3,['zhiyu','cxyQiChe'],['ext:官渡之战/cxyXunYou.jpg']],
        cxyHanShi:["male","wei",4,['shenduan','yonglve'],['ext:官渡之战/cxyHanShi.jpg']],
        cxyXuHuang:["male","wei",4,['duanliang','jiezi'],['ext:官渡之战/cxyXuHuang.jpg']],
        cxyCaoRen:["male","wei",4,['xinjushou','xinjiewei'],['ext:官渡之战/cxyCaoRen.jpg']],
        cxyCaoCao:["male","wei",4,['rejianxiong','hujia'],['ext:官渡之战/cxyCaoCao.jpg','zhu']],
        
        cxyLiuBei:["male","qun",4,['rerende'],['ext:官渡之战/cxyLiuBei.jpg']],
        cxyGaoLan:["male","qun",4,['cxyXiYing'],['ext:官渡之战/cxyGaoLan.jpg']],
        cxyYanWen:["male","qun",4,['shuangxiong'],['ext:官渡之战/cxyYanWen.jpg']],
        cxyZhangHe:["male","qun",4,['cxyYuanLve'],['ext:官渡之战/cxyZhangHe.jpg']],
        cxyChenLin:["male","qun",3,['bifa','songci'],['ext:官渡之战/cxyChenLin.jpg']],
        cxyGuoFeng:["male","qun",3,['jigong','shifei'],['ext:官渡之战/cxyGuoFeng.jpg']],
        cxyJuShou:["male","qun",3,['jianying','shibei'],['ext:官渡之战/cxyJuShou.jpg']],
        cxyXuYou:["male","qun",3,['cxyShiCai','cxyFuShi'],['ext:官渡之战/cxyXuYou.jpg']],
        cxyTianFeng:["male","qun",3,['sijian','cxySuiShi'],['ext:官渡之战/cxyTianFeng.jpg']],
        cxyYuanShao:["male","qun",4,['luanji','xueyi'],['ext:官渡之战/cxyYuanShao.jpg','zhu']],
        cxyXunChen:["male","qun",3,['cxyFengLve','cxyMouShi'],['ext:官渡之战/cxyXunChen.jpg']],
        cxyShenPei:["male","qun",3,['cxyGangZhi','cxyBeiZhan'],['ext:官渡之战/cxyShenPei.jpg']],
        cxyChunYuQiong:["male","qun",5,['cxySuShou','cxyCangChu','cxyLiangYing'],['ext:官渡之战/cxyChunYuQiong.jpg']],
      },
      card:{
        lulitongxin:{
          fullskin:true,
          type:'trick',
          enable:true,
          filterTarget:function(card,player,target){
            if(get.attitude(player,target) > 0)return target.isLinked();
            return !target.isLinked();
          },
          chongzhu:true,
          changeTarget:function(player,targets){
            var target=targets[0];
            var att = get.attitude(player,target);
            game.filterPlayer(function(current){
              if(current == target)return false;
              if(att > 0){
                return get.attitude(target,current)>0&&current.isLinked();
              }
              else {
                return get.attitude(target,current)>0&&!current.isLinked();
              }
            },targets);
          },
          content:function(){
            if(target.isLinked()){
              target.draw();
            }
            else{
              target.link();
            }
          },
          ai:{
            order:7.5,
            value:4,
            useful:2,
            wuxie:function(){
              return 0;
            },
            result:{
              player:function(player,target){
                var att = get.attitude(player,target);
                return game.countPlayer(function(current){
                  if(get.attitude(target,current)>0){
                    if(att>0&&current.isLinked()){
                      return get.attitude(player,target);
                    }
                    if(att<0&&!current.isLinked()){
                      return -get.attitude(player,target)*0.8;
                    }
                  }
                });
              }
            }
          }
        },
        cxyYuanJun:{
          fullskin:true,
          image:'ext:官渡之战/cxyYuanJun.png',
          type:'trick',
          enable:true,
          selectTarget:[1,2],
          filterTarget:function(card,player,target){
            return target!=player&&target.maxHp>target.hp;
          },
          content:function(){
            target.recover();
          },
          ai:{
            order:7,
            basic:{
              useful:function(card){
                var player = _status.event.player;
                var fs = game.filterPlayer(function(current){
                  return current!=player&&get.attitude(player,current)>0;
                });
                return 6*fs.length;
              },
              value:function(card,player){
                var fs = game.filterPlayer(function(current){
                  return current!=player&&get.attitude(player,current)>0;
                });
                return 6*fs.length;
              },
            },
            result:{
              target: function(player,target){
                return target.maxHp - target.hp;
              },
            },
          },
        },
        cxyTunLiang:{
          fullskin:true,
          image:'ext:官渡之战/cxyYuanJun.png',
          type:'trick',
          enable:true,
          selectTarget:[1,3],
          filterTarget:true,
          content:function(){
            target.draw();
          },
          ai:{
            order: 5,
            basic:{
              useful:function(card){
                var player = _status.event.player;
                var fs = game.filterPlayer(function(current){
                  return get.attitude(player,current)>0;
                });
                if(fs==1)return 1;
                if(fs==2)return 2.5;
                if(fs==3)return 4.5;
                return 0;
              },
              value:function(card){
                var player = _status.event.player;
                var fs = game.filterPlayer(function(current){
                  return get.attitude(player,current)>0;
                });
                if(fs==1)return 1;
                if(fs==2)return 2.5;
                if(fs==3)return 4.5;
                return 0;
              },
            },
            result:{
              target:1,
            },
            tag:{
              draw:1,
            },
          },
        },
      },
      skill:{
        cxyQiChe:{
          init:function(player){
            player.storage.cxyQiChe = [];
            for(var i in lib.cardPile){
              for(var k=0;k<lib.cardPile[i].length;k++){
                if(get.type({name:lib.cardPile[i][k][2]})!='trick')continue;
                if(!player.storage.cxyQiChe.contains(lib.cardPile[i][k][2]))
                  player.storage.cxyQiChe.push(lib.cardPile[i][k][2]);
              }
            }
            for(var i=0;i<player.storage.cxyQiChe.length;i++){
              player.storage.cxyQiChe[i] = ['锦囊','',player.storage.cxyQiChe[i]];
            }
          },
          enable:'phaseUse',
    			usable:1,
    			audio:2,
    			filter:function(event,player){
    				return player.countCards('h')>0
    			},
    			chooseButton:{
    				dialog:function(event,player){
    					return ui.create.dialog([player.storage.cxyQiChe,'vcard']);
    				},
    				filter:function(button,player){
    					return lib.filter.filterCard({name:button.link[2]},player,_status.event.getParent());
    				},
    				check:function(button){
    					var player=_status.event.player;
    					var eff = 0;
              var card = {name:button.link[2]};
              var info = get.info(card);
              if(info.selectTarget==-1){
                var tgs = game.filterPlayer(function(target){
                  return player.canUse(card,target);
                });
                for(var i=0;i<tgs.length;i++){
                  eff += get.effect(tgs[i],card,player,player);
                }
              }
              else if(Array.isArray(info.selectTarget)){
                var tgs = game.filterPlayer(function(target){
                  return player.canUse(card,target);
                });
                for(var i=0;i<info.selectTarget[1];i++){
                  var maxEff = 0 , maxTg = null;
                  for(var k=0;k<tgs.length;k++){
                    var tmpEff = get.effect(tgs[i],card,player,player);
                    if(tmpEff >= maxEff){
                      maxEff = tmpEff;
                      maxTg = tgs[i];
                    }
                  }
                  eff += maxEff;
                  if(maxTg) tgs.remove(maxTg);
                }
              }
              else if(typeof info.selectTarget=='number'){
                var tgs = game.filterPlayer(function(target){
                  return player.canUse(card,target);
                });
                for(var i=0;i<info.selectTarget;i++){
                  var maxEff = 0 , maxTg = null;
                  for(var k=0;k<tgs.length;k++){
                    var tmpEff = get.effect(tgs[i],card,player,player);
                    if(tmpEff >= maxEff){
                      maxEff = tmpEff;
                      maxTg = tgs[i];
                    }
                  }
                  eff += maxEff;
                  if(maxTg) tgs.remove(maxTg);
                }
              }
              return eff;
    				},
    				backup:function(links,player){
    					return {
    						filterCard:true,
    						selectCard:-1,
    						audio:2,
    						popname:true,
    						viewAs:{name:links[0][2]},
    					}
    				},
    				prompt:function(links,player){
    					return '将全部手牌当作'+get.translation(links[0][2])+'使用';
    				}
    			},
    			ai:{
    				order:1,
    				result:{
    					player:function(player){
    						var num=0;
    						var cards=player.getCards('h');
    						if(cards.length>=3&&player.hp>=3) return 0;
    						for(var i=0;i<cards.length;i++){
    							num+=Math.max(0,get.value(cards[i],player,'raw'));
    						}
    						num/=cards.length;
    						num*=Math.min(cards.length,player.hp);
    						return 12-num;
    					}
    				},
    				threaten:1.6,
    			}
        },
        cxyZhenJun:{
          trigger:{player:'phaseBegin'},
          direct:true,
          content:function(){
            'step 0'
            player.chooseTarget(get.cxyPrompt('cxyZhenJun'),function(card,player,target){
              return target.num('h') > target.hp;
            }).ai=function(target){
              var att = get.attitude(player,target);
              if(att > 0){
                if(target==player)return 1;
                return 0;
              }
              return Math.min(target.num('e') , target.num('h')-target.hp) + 0.5 - att;
            };
            'step 1'
            if(result.bool){
              event.num = result.targets[0].num('h') - result.targets[0].hp;
              event.target = result.targets[0];
              player.logSkill('cxyZhenJun',result.targets[0]);
              player.discardPlayerCard(result.targets[0],'he',event.num,true).set('ai',function(button){
                if(get.position(button.link)=='e')return 10;
                return Math.random() + 0.5;
              });
            }
            else {
              event.finish();
            }
            'step 2'
            event.num2 = 0;
            for(var i=0;i<result.links.length;i++){
              if(get.type(result.links[i])!='equip')event.num2++;
            }
            if(player.num('he') < event.num2){
              event.target.draw(event.num);
              event.finish();
            }
            else {
              player.chooseControl(1,function(event,player){
                if(get.attitude(player,event.target) > 0) return 1;
                return 0;
              }).set('choiceList',['弃置'+event.num2+'张牌','令'+get.translation(event.target)+'摸'+event.num+'张牌']).set('prompt','镇军：请选择一项');
            }
            'step 3'
            if(result.index==0){
              player.chooseToDiscard('he',event.num2,true);
            }
            else {
              event.target.draw(event.num);
            }
          },
        },
        cxySuiShi:{
          audio:'suishi',
          trigger:{global:'dying'},
          forced:true,
          priority:6.5,
          check:function(){
            return false;
          },
          filter:function(event,player){
            return event.player!=player&&event.parent.name=='damage'&&event.parent.source&&get.attitude(player,event.parent.source)>0;
          },
          content:function(){
            player.draw();
          },
          group:'cxySuiShi_sub',
          subSkill:{
            sub:{
              audio:'suishi',
              trigger:{global:'dieAfter'},
              forced:true,
              filter:function(event,player){
                return get.attitude(player,event.player)>0;
              },
              content:function(){
                player.loseHp();
              }
            },
          },
        },
        cxyMouShi:{
          enable:'phaseUse',
          usable:1,
          selectCard:1,
          filterCard:true,
          selectTarget:1,
          filterTarget:true,
          discard:false,
          lose:true,
          check:function(card){
            return 8 - get.value(card);
          },
          content:function(){
            'step 0'
            player.$give(1,target);
            target.gain(cards,player);
            'step 1'
            target.addTempSkill('cxyMouShi_buff2',{player:'phaseUseBegin'});
            target.storage.cxyMouShi = player;
            target.markSkillCharacter('cxyMouShi',player,'谋识','当你于出牌阶段内第一次造成伤害后，'+get.translation(player)+'摸一张牌');
          },
          ai:{
            order:1,
            result:{
              target:function(player,target){
                if(player==target)return 0;
                return 1;
              },
              player:function(player,target){
                var att = get.attitude(player,target);
                if(att <= 0)return -1;
                if(target==player)return 1;
                return 2;
              }
            }
          },
          subSkill:{
            buff2:{
              onremove:function(player){
                player.addTempSkill('cxyMouShi_buff',{player:'phaseUseAfter'});
              },
            },
            buff:{
              temp:true,
              trigger:{source:'damageEnd'},
              filter:function(event,player){
                return _status.currentPhase==player;
              },
              direct:true,
              content:function(){
                'step 0'
                player.storage.cxyMouShi.logSkill('cxyMouShi');
                player.storage.cxyMouShi.draw();
                'step 1'
                player.removeSkill('cxyMouShi_buff');
              },
              onremove:function(player){
                player.unmarkSkill('cxyMouShi');
                delete player.storage.cxyMouShi;
              }
            },
          },
        },
        cxyFengLve:{
          trigger:{player:'phaseUseBegin'},
          filter:function(event,player){
            return player.num('h');
          },
          direct:true,
          content:function(){
            'step 0'
            player.chooseTarget(get.cxyPrompt('cxyFengLve'),function(card,player,target){
              return target!=player&&target.num('h');
            }).ai = function(target){
              var h = target.num('h')-1,e = target.num('e'),j = target.num('j');
              var myMax = 0;
              for(var i=0;i<player.getCards('h').length;i++){
                myMax = Math.max(myMax,player.getCards('h')[i].number);
              }
              var shengsuan = 1 - (14 - myMax)*target.num('h')/13;
              var att = get.attitude(player,target);
              var val = 0;
              if(att > 0){
                val += -0.5;
                if(j){
                  var eff = 0;
                  var js = target.getCards('j');
                  for(var i=0;i<js.length;i++){
                    eff = Math.min(eff,get.effect(target,js[i],player,player));
                  }
                  val += -eff;
                }
              }
              else {
                if(shengsuan < 0.5) return -1;
                if(h) val += 2;
                if(e) val += 2;
                if(j) val -= 2;
              }
              return val;
            };
            'step 1'
            if(result.bool){
              player.logSkill('cxyFengLve',result.targets[0]);
              player.chooseToCompare(result.targets[0]);
              event.target = result.targets[0];
            }
            else {
              event.finish();
            }
            'step 2'
            event.card = result.player;
            if(result.bool){
              var num = 0;
              if(event.target.num('h'))num++;
              if(event.target.num('e'))num++;
              if(event.target.num('j'))num++;
              event.target.choosePlayerCard(event.target,num,'hej',true).set('filterButton',function(button){
                for(var i=0;i<ui.selected.buttons.length;i++){
                  if(get.position(button.link)==get.position(ui.selected.buttons[i].link))
                    return false;
                }
                return true;
              }).ai=function(button){return 12 - get.value(button.link);};
            }
            else if(player.num('he')){
              event.goto(4);
            }
            'step 3'
            if(result.bool){
              player.gain(result.links,event.target);
              event.target.$give(result.links.length,player);
              event.goto(6);
            }
            'step 4'
            player.chooseCard('锋略：请将一张牌交给'+get.translation(event.target),'he',true).ai=function(card){return 12 - get.value(card);};
            'step 5'
            if(result.bool){
              event.target.gain(result.cards,player);
              player.$give(1,event.target);
            }
            'step 6'
            player.chooseBool('锋略：是否令'+get.translation(event.target)+'获得你拼点的牌'+get.translation(event.card)).set('ai',function(){
              return get.attitude(player,event.target) > 0;
            });
            'step 7'
            if(result.bool){
              event.target.gain(event.card);
              event.target.$gain2(event.card);
            }
          }
        },
        cxyBeiZhan:{
          trigger:{player:'phaseEnd'},
          direct:true,
          content:function(){
            'step 0'
            player.chooseTarget(get.cxyPrompt('cxyBeiZhan')).ai=function(target){
              var att = get.attitude(player,target);
              if(att > 0) return target.maxHp - target.num('h') + 10;
              if(target.maxHp > target.num('h')) return 0;
              return target.num('h');
            };
            'step 1'
            if(result.bool){
              player.logSkill('cxyBeiZhan',result.targets[0]);
              result.targets[0].draw(result.targets[0].maxHp - result.targets[0].num('h'));
              result.targets[0].addTempSkill('cxyBeiZhan_phase',{player:'phaseEnd'});
              result.targets[0].storage.cxyBeiZhan = player;
            }
          },
          subSkill:{
            phase:{
              trigger:{player:'phaseBegin'},
              filter:function(event,player){
                return !game.hasPlayer(function(current){
                  return current!=player&&current.num('h')>=player.num('h');
                });
              },
              direct:true,
              content:function(){
                game.log(player.storage.cxyBeiZhan,'的','【备战】','效果被触发');
                player.storage.cxyBeiZhan.logSkill('cxyBeiZhan');
                player.addTempSkill('cxyBeiZhan_ban','phaseEnd');
                player.markSkillCharacter('cxyBeiZhan',player.storage.cxyBeiZhan,'备战','本回合内不能使用牌指定其他角色为目标');
              },
            },
            ban:{
              mod:{
                playerEnabled:function(card,player,target){
                  if(target!=player)return false;
                }
              },
              onremove:function(player){
                player.unmarkSkill('cxyBeiZhan');
                delete player.storage.cxyBeiZhan;
              }
            },
          },
        },
        cxyGangZhi:{
          trigger:{player:'damageBefore'},
          forced:true,
          priority:16,
          content:function(){
            trigger.cancel();
            var ex=0;
    				if(trigger.card&&trigger.card.name=='sha'){
    					if(player.hasSkill('jiu')) ex++;
    					if(player.hasSkill('luoyi2')) ex++;
    					if(player.hasSkill('reluoyi2')) ex++;
    				}
    				trigger.player.loseHp(trigger.num+ex);
          },
        },
        cxySuShou:{
          trigger:{player:'phaseDiscardBegin'},
          content:function(){
            'step 0'
            var num = 1;
            if(player.storage.cxyCangChu>0){
              num += player.storage.cxyCangChu;
            }
            player.draw(num);
            if(game.filterPlayer(function(target){
              return get.attitude(player,target)>0&&target!=player;
            }).length==0)event.finish();
            event.list = [];
            'step 1'
            player.chooseCardTarget({
              prompt:'宿守：你可以交给友方角色各一张牌',
              selectCard:1,
              filterCard:function(card){
                for(var i=0;i<event.list.length;i++){
                  if(event.list[i].card == card)return false;
                }
                return true;
              },
              position:'he',
              selectTarget:1,
              filterTarget:function(card,player,target){
                if(get.attitude(player,target)<=0||target==player)return false;
                for(var i=0;i<event.list.length;i++){
                  if(event.list[i].target==target)return false;
                }
                return true;
              },
              ai1:function(card){
                var mh = player.getHandcardLimit();
                var val = 6 - get.value(card);
                if(player.num('h') > mh){
                  if(get.position(card)=='h')val+=10;
                }
                return val;
              },
              ai2:function(target){
                if(get.attitude(player,target)>0)return 1;
                return 0;
              }
            });
            'step 2'
            if(result.bool){
              var obj = {
                target:result.targets[0],
                card:result.cards[0],
              };
              event.list.push(obj);
              if(game.filterPlayer(function(target){
                for(var i=0;i<event.list.length;i++){
                  if(event.list[i].target==target)return false;
                }
                return get.attitude(player,target)>0&&target!=player;
              }).length>0) event.goto(1);
            }
            'step 3'
            var cards = [];
            for(var i=0;i<event.list.length;i++){
              cards.push(event.list[i].card);
            }
            player.lose(cards,ui.special);
            'step 4'
            event.list.forEach(function(obj){
              obj.target.gain(obj.card,player);
              player.$give(1,obj.target);
            });
          },
        },
        cxyLiangYing:{
          trigger:{global:'phaseDrawBegin'},
          filter:function(event,player){
            for(var i=0;i<game.players.length;i++){
              if(game.players[i].storage.cxyCangChu>0){
                return get.attitude(player,event.player)>0;
              }
            }
            return false;
          },
          forced:true,
          content:function(){
            trigger.num++;
          },
          group:['cxyLiangYing_lose'],
          subSkill:{
            lose:{
              trigger:{player:'cxyLoseAll'},
              forced:true,
              content:function(){
                'step 0'
                player.loseMaxHp();
                'step 1'
                game.asyncDraw(game.filterPlayer(function(target){
                  return get.attitude(target,player) < 0;
                }).sort(lib.sort.seat),2);
              },
            },
          },
        },
        cxyCangChu:{
          init:function(player){
            player.storage.cxyCangChu = 0;
          },
          marktext:'粮',
          intro:{
            content:function(storage){
              return '当前共用'+storage+'枚"粮"标记';
            },
          },
          trigger:{global:'gameStart',player:'damageEnd'},
          filter:function(event,player){
            if(event.name=='damage')return event.nature=='fire'&&player.storage.cxyCangChu>0;
            return true;
          },
          forced:true,
          content:function(){
            if(trigger.name=='damage'){
              player.storage.cxyCangChu--;
              if(player.storage.cxyCangChu <= 0){
                _status.event.player = player;
                _status.event.trigger('cxyLoseAll');
              }
            }
            else {
              player.storage.cxyCangChu += 3;
            }
            if(player.storage.cxyCangChu==0){
              player.unmarkSkill('cxyCangChu');
            }
            else {
              player.markSkill('cxyCangChu');
            }
            player.syncStorage('cxyCangChu');
          },
          ai:{
            threaten:2,
            effect:{
              target:function(card,player,target){
                if(target.storage.cxyCangChu>0){
                  if(card.name=='sha'){
                    if(card.nature=='fire'||player.hasSkill('zhuque_skill')) return 2;
                  }
                  if(get.tag(card,'fireDamage')) return 2;
                }
              }
            },
          },
        },
        cxyYuanLve:{
          enable:'phaseUse',
          usable:1,
          selectCard:1,
          filterCard:function(card){
            return get.type(card)!='equip';
          },
          selectTarget:1,
          filterTarget:true,
          check:function(card){
            var player = _status.event.player;
            var targets = game.filterPlayer(function(target){
              return get.attitude(player,target) > 0;
            });
            var eff = 0;
            for(var i=0;i<targets.length;i++){
              var tgs = game.filterPlayer(function(target){
                return targets[0].canUse(card,target);
              });
              for(var k=0;k<tgs.length;k++){
                eff = Math.max(eff,get.effect(tgs[k],card,targets[i],player));
              }
            }
            return eff;
          },
          discard:false,
          lose:true,
          content:function(){
            'step 0'
            player.$give(cards.length,target);
            target.gain(cards,player);
            'step 1'
            target.chooseToUse({
              prompt:'袭营：是否使用'+get.translation(cards[0]),
              filterCard:function(card){
                return card == cards[0];
              },
            });
            'step 2'
            if(result.bool){
              player.draw();
            }
          },
          ai:{
            order: 8,
            result:{
              target:function(player,target){
                var card = ui.selected.cards[0];
                if(card){
                  var eff = 0;
                  var tgs = game.filterPlayer(function(t){
                    return target.canUse(card,t);
                  });
                  for(var i=0;i<tgs.length;i++){
                    eff = Math.max(get.effect(tgs[i],card,target,target));
                  }
                  return eff;
                }
                return 0;
              },
              player:function(player,target){
                var att = get.attitude(player,target);
                if(att <= 0)return 0;
                return 1;
              },
            },
          }
        },
        cxyXiYing:{
          trigger:{player:'phaseUseBegin'},
          filter:function(event,player){
            return player.num('he');
          },
          direct:true,
          content:function(){
            'step 0'
            player.chooseCardTarget({
              selectCard:1,
              filterCard:true,
              position:'he',
              selectTarget:-1,
              filterTarget:function(card,player,target){
                return target!=player;
              },
              ai1:function(card){
                var player = _status.event.player
                var hs = player.getCards('h');
                if(hs<3&&player.num('e')==0) return 0;
                for(var i=0;i<hs.length;i++){
                  if(get.tag(hs[i],'damage')){
                    var val = 8 - get.value(card);
                    if(get.tag(card,'damage'))val -= 3;
                    return val;
                  }
                }
                return 0;
              },
              ai2:function(card,player,target){
                return 1;
              },
              prompt:'是否发动袭营？<p style="text-algin:left;font-size:80%">'+get.translation('cxyXiYing_info')+'</p>',
            });
            'step 1'
            if(result.bool){
              player.discard(result.cards[0]);
              result.targets.sort(lib.sort.seat);
              player.logSkill('cxyXiYing',result.targets);
              event.targets = result.targets;
            }
            else {
              event.finish();
            }
            'step 2'
            event.target = event.targets.shift();
            event.target.chooseToDiscard('袭营：请选择弃置一张牌或本回合不能使用牌','he').ai=function(card){
              var target = event.target;
              if(get.attitude(target,player)>0)return 0;
              var h = target.num('h') , e = target.num('e');
              var tao = target.countCards('h',{name:'tao'}),
                  jiu = target.countCards('h',{name:'jiu'});
              if(h==0)return 0;
              if(tao&&game.hasPlayer(function(current){
                return get.attitude(target,current) > 2&&current.hp == 1;
              })) return 7 - get.value(card);
              if(jiu&&target.hp==1)return 7 - get.value(card);
              if(target.hasWuxie())return 5 - get.value(card);
              if(target.hasShan()){
                if(get.distance(player,target,'attack')<=1&&get.damageEffect(target,player,target)<0) return 5 - get.value(card);
                return 0;
              }
              return 0;
            };
            'step 3'
            if(!result.bool){
              event.target.addTempSkill('cxyXiYing_ban','phaseEnd');
              event.target.markSkillCharacter('cxyXiYing',player,'袭营','本回合内不能使用或打出牌');
            }
            if(event.targets.length)event.goto(2);
          },
          subSkill:{
            ban:{
              mod:{
                cardEnabled:function(card,player){
                  return false;
                },
                cardUsable:function(card,player){
                  return false;
                },
                cardRespondable:function(card,player){
                  return false;
                },
                cardSavable:function(card,player){
                  return false;
                }
              },
              onremove:function(player){
                player.unmarkSkill('cxyXiYing');
              }
            },
          },
        },
        cxyFuShi:{
          trigger:{global:['dieAfter','reviveAfter','phaseBefore']},
          direct:true,
          locked:true,
          content:function(){
            var weis = get.cxyGroups('wei');
            var quns = get.cxyGroups('qun');
            if(player.additionalSkills.cxyFuShi){
              if(weis>quns&&!player.additionalSkills.cxyFuShi.contains('cxyChengGong')){
                player.logSkill('cxyFuShi');
                player.removeAdditionalSkill('cxyFuShi');
                player.addAdditionalSkill('cxyFuShi',['cxyChengGong']);
              }
              else if(quns>weis&&!player.additionalSkills.cxyFuShi.contains('cxyZeZhu')){
                player.logSkill('cxyFuShi');
                player.removeAdditionalSkill('cxyFuShi');
                player.addAdditionalSkill('cxyFuShi',['cxyZeZhu']);
              }
              else if(quns==weis&&player.additionalSkills.cxyFuShi.length){
                player.logSkill('cxyFuShi');
                player.removeAdditionalSkill('cxyFuShi');
              }
            } 
            else {
              if(weis>quns){
                player.logSkill('cxyFuShi');
                player.addAdditionalSkill('cxyFuShi',['cxyChengGong']);
              }
              else if(quns>weis){
                player.logSkill('cxyFuShi');
                player.addAdditionalSkill('cxyFuShi',['cxyZeZhu']);
              }
            }
          },
        },
        cxyShiCai:{
          marktext:'牌',
          intro:{
            name:'牌堆顶的牌',
            content:function(storage,player){},
            mark:function(dialog,storage,player){
              if(player.isUnderControl(true)&&ui.cardPile.childNodes.length){
                var cards = [ui.cardPile.childNodes[0]];
                dialog.addAuto(cards);
              }
              else {
                return '';
              }
            },
          },
          trigger:{player:'phaseUseBegin'},
          direct:true,
          content:function(){
            player.addTempSkill('cxyShiCai_mark');
          },
          group:['cxyShiCai_sub'],
          subSkill:{
            mark:{
              temp:true,
              init:function(player){
                player.markSkill('cxyShiCai');
              },
              onremove:function(player){
                player.unmarkSkill('cxyShiCai');
              }
            },
            sub:{
              init:function(player){
                player.storage.cxyShiCai_sub = [];
              },
              enable:'phaseUse',
              filter:function(event,player){
                var cards = player.getCards('h');
                for(var i=0;i<cards.length;i++){
                  if(player.storage.cxyShiCai_sub.contains(cards[i])){
                    return false;
                  }
                }
                player.storage.cxyShiCai_sub = [];
                return player.num('he')&&ui.cardPile.childNodes.length;
              },
              selectCard:1,
              filterCard:true,
              position:'he',
              prompt:'你可以弃置一张牌并获得牌堆顶的牌，当该牌离开你的手牌区后，你可以再次发动此技能。',
              check:function(card){
                var val = get.value(ui.cardPile.childNodes[0])||0;
                if(get.info(ui.cardPile.childNodes[0]).selectTarget==undefined&&ui.cardPile.childNodes[0].name!='wuxie')val -= 5;
                return val - get.useful(card);
              },
              content:function(){
                var c = get.cxyCardPileTop();
                player.gain(c);
                player.$draw(1);
                player.storage.cxyShiCai_sub.push(c);
              },
              ai:{
                order: 7,
                effect:{
                  player:function(card,player,target){
                    if(player.storage.cxyShiCai_sub.contains(card)){
                      return [1,0.6];
                    }
                  }
                },
                result:{
                  player:1,
                }
              },
            },
          },
        },
        cxyChengGong:{
          trigger:{global:'useCard'},
          filter:function(event,player){
            return event.targets&&event.targets.length >= 2;
          },
          logTarget:'player',
          check:function(event,player){
            return get.attitude(player,event.player) > 0;
          },
          content:function(){
            trigger.player.draw();
          },
        },
        cxyZeZhu:{
          enable:'phaseUse',
          usable:1,
          selectTarget:-1,
          filterTarget:function(card,player,target){
            return target.identity == 'zhu'||target.identity=='cZhu'||target.identity=='yZhu';
          },
          contentBefore:function(){
            targets.sort(lib.sort.seat);
          },
          content:function(){
            if(target.num('he')){
              player.gainPlayerCard('he',target,true);
            } else {
              player.draw();
            }
          },
          contentAfter:function(){
            'step 0'
            event.targets = targets;
            'step 1'
            event.target = event.targets.shift();
            if(player.num('he') > 0){
              player.chooseCard('择主：请交给'+get.translation(event.target)+'一张牌','he',true).ai = function(card){
                var att = get.attitude(player,event.target);
                if(att > 0) return get.value(card);
                return 12 - get.value(card);
              };
            }
            else {
              event.finish();
            }
            'step 2'
            if(result.bool){
              event.target.gain(result.cards[0]);
              player.$give(1,event.target);
            }
            if(event.targets.length) event.goto(1);
          },
          ai:{
            order: 7.5,
            result:{
              target: function(player,target){
                var att = get.attitude(player,target);
                if(att > 0){
                  if(target.num('he'))return 0;
                  return 1;
                }
                if(target.num('he')) return -1;
                return 1;
              },
              player: function(player,target){
                var att = get.attitude(player,target);
                if(att > 0) return 1;
                if(target.num('he')) return 0;
                return 1;
              },
            }
          }
        },
      },
      translate:{
        cxyGDZZ:'官渡之战',
        cxyXuYou:'许攸',
        cxyGaoLan:'高览',
        cxyJuShou:'沮授',
        cxyLiuBei:'刘备',
        cxyChenLin:'陈琳',
        cxyZhangHe:'张郃',
        cxyShenPei:'审配',
        cxyXunChen:'荀谌',
        cxyYuanShao:'袁绍',
        cxyTianFeng:'田丰',
        cxyYanWen:'颜良文丑',
        cxyGuoFeng:'郭图逢纪',
        cxyChunYuQiong:'淳于琼',
        
        cxyXunYu:'荀彧',
        cxyYuJin:'于禁',
        cxyLiuYe:'刘晔',
        cxyXunYou:'荀攸',
        cxyCaoCao:'曹操',
        cxyGuoJia:'郭嘉',
        cxyGuanYu:'关羽',
        cxyCaoRen:'曹仁',
        cxyXuHuang:'徐晃',
        cxyCaoHong:'曹洪',
        cxyChengYu:'程昱',
        cxyZhangLiao:'张辽',
        cxyHanShi:'韩浩史涣',
        
        cxyYuanJun:'援军',
        cxyTunLiang:'屯粮',
        
        cxyFuShi:'附势',
        cxyZeZhu:'择主',
        cxyQiChe:'奇策',
        cxyShiCai:'恃才',
        cxyXiYing:'袭营',
        cxySuShou:'宿守',
        cxyMouShi:'谋识',
        cxySuiShi:'随势',
        cxyYuanLve:'远略',
        cxyCangChu:'仓储',
        cxyGangZhi:'刚直',
        cxyBeiZhan:'备战',
        cxyFengLve:'锋略',
        cxyZhenJun:'镇军',
        cxyLiangYing:'粮营',
        cxyChengGong:'逞功',
        
        cxyYuanJun_info:'出牌阶段，对至多两名其他角色使用。目标角色各回复1点体力。',
        cxyTunLiang_info:'出牌阶段，对至多三名角色使用。目标角色各摸一张牌。',
        lulitongxin_info:'出牌阶段，对己方所有角色或敌方所有角色使用。令己方所有被横着的角色各摸一张牌或横置敌方所有角色。',
        
        cxyFuShi_info:'锁定技，若场上势力数为：群大于魏，你拥有技能“择主”；魏大于群，你拥有技能“逞功”。',
        cxyZeZhu_info:'出牌阶段限一次，你可以获得双方主帅各一张牌，然后分别交给其一张牌（若有主帅没有牌，则将获得其一张牌改为摸一张牌）。',
        cxyQiChe_info:'出牌阶段限一次，你可将所有手牌当做一张任意的非延时类锦囊牌使用。',
        cxyShiCai_info:'出牌阶段内，牌堆顶的牌对你可见；你可以弃置一张牌并获得牌堆顶的牌，当该牌离开你的手牌区后，你可以再次发动此技能。',
        cxyXiYing_info:'出牌阶段开始时，你可以弃置一张牌并令所有其他角色选择一项：弃置一张牌；本回合内不能使用或打出牌。',
        cxySuShou_info:'弃牌阶段开始时，你可以摸X+1张牌（X为粮数），然后可以交给任意名友方角色各一张牌。',
        cxyMouShi_info:'出牌阶段限一次，你可以将一张手牌交给一名角色，若如此做，当其于其下回合的出牌阶段内对一名角色造成伤害后，若是此阶段其第一次对该角色造成伤害，你摸一张牌。',
        cxySuiShi_info:'锁定技，当其他角色进入濒死状态时，若伤害来源与你势力相同，你摸一张牌；当其他角色死亡时，若其与你势力相同，你失去1点体力。',
        cxyYuanLve_info:'出牌阶段限一次，你可以将一张非装备牌交给一名角色，然后该角色可以使用该牌并令你摸一张牌。',
        cxyCangChu_info:'锁定技，游戏开始时，你获得3枚“粮”标记，当你受到1点火焰伤害后，你失去一枚“粮”标记。',
        cxyGangZhi_info:'锁定技，其他角色对你造成的伤害均视为体力流失。',
        cxyBeiZhan_info:'回合结束后，你可以令一名角色将手牌补至体力上限。该角色回合开始时，若其手牌数为全场最多，则其本回合内不能使用牌指定其他角色为目标。',
        cxyFengLve_info:'出牌阶段开始时，你可以与一名角色拼点，若你赢，该角色将其区域内的各一张牌交给你；若你没赢，你交给其一张牌。拼点结算后你可以令其获得你拼点的牌。',
        cxyZhenJun_info:'准备阶段，你可以弃置一名手牌数多于体力值的角色的X张牌（X为其手牌数和体力值之差），然后选择一项：1.你弃置等同于其中非装备牌数量的牌；2.其摸等量的牌。',
        cxyLiangYing_info:'锁定技，若有“粮”标记，则友方角色摸牌阶段摸牌数+1；当你失去所有“粮”标记后，扣减1点体力上限，然后令敌方角色各摸两张牌。',
        cxyChengGong_info:'一名角色使用牌指定目标后，若目标数不小于2，你可以令其摸一张牌。',
      },
    },
    config:{
      player_number: '8',
      double_character: false,
    },
    get:{
      cxyImg:function(name){
        return lib.assetURL+'extension/官渡之战/'+name+'.jpg';
      },
      cxyPrompt:function(skillName,prompt){
        return '是否发动'+get.translation(skillName)+'？<p style="text-algin:left;font-size:80%;">'+(prompt||get.translation(skillName+'_info'))+'</p>';
      },
      cxyGroups:function(group){
        return game.filterPlayer(function(player){
          return player.group == group;
        }).length;
      },
      cxyCardPileTop:function(){
        if(ui.cardPile.childNodes.length==0)return null;
        var card = get.cards(1);
        return card[0];
      },
    },
  };
  return {
    name:'官渡之战',
    content:function(){
      for(var i in z.get){
        get[i] = z.get[i];
      }
      if(lib.brawl)z.init();
    },
    editable:false,
  };
});;