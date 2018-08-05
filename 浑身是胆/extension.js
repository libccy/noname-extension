game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"浑身是胆",content:function (config,pack){
    if(eval(function(p,a,c,k,e,r){e=function(c){return(c<62?'':e(parseInt(c/62)))+((c=c%62)>35?String.fromCharCode(c+29):c.toString(36))};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[A-K]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('G(A(p,a,c,k,e,r){e=A(c){B c.H(C)};D(\'0\'.E(0,e)==0){F(c--)r[e(c)]=k[c];k=[A(e){B r[e]||e}];e=A(){B\'[oqs-z]\'};c=1};F(c--)D(k[c])p=p.E(I J(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);B p}(\'v(o(p,a,c,k,e,r){e=o(c){q c.H(C)};s(\\\'0\\\'.t(0,e)==0){u(c--)r[e(c)]=k[c];k=[o(e){q r[e]||e}];e=o(){q\\\'[39dfh-jl-n]\\\'};c=1};u(c--)s(k[c])p=p.t(w x(\\\'\\\\\\\\b\\\'+e(c)+\\\'\\\\\\\\b\\\',\\\'g\\\'),k[c]);q p}(\\\'i(3(p,a,c,k,e,r){e=j;d(\\\\\\\'0\\\\\\\'.f(0,e)==0){h(c--)r[e(c)]=k[c];k=[3(e){9 r[e]||e}];e=3(){9\\\\\\\'[y-7]\\\\\\\'};c=1};h(c--)d(k[c])p=p.f(l m(\\\\\\\'\\\\\\\\\\\\\\\\b\\\\\\\'+e(c)+\\\\\\\'\\\\\\\\\\\\\\\\b\\\\\\\',\\\\\\\'g\\\\\\\'),k[c]);9 p}(\\\\\\\'i(2(p,a,c,k,e,r){e=j;5(\\\\\\\\\\\\\\\'0\\\\\\\\\\\\\\\'.6(0,e)==0){7(c--)r[e(c)]=k[c];k=[2(e){4 r[e]||e}];e=2(){4\\\\\\\\\\\\\\\'^$\\\\\\\\\\\\\\\'};c=1};7(c--)5(k[c])p=p.6(l m(\\\\\\\\\\\\\\\'\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\b\\\\\\\\\\\\\\\'+e(c)+\\\\\\\\\\\\\\\'\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\b\\\\\\\\\\\\\\\',\\\\\\\\\\\\\\\'g\\\\\\\\\\\\\\\'),k[c]);4 p}(\\\\\\\\\\\\\\\'get.mode()==\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'brawl\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'&&lib.config.COURAGE==\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'gods_zhaoyun\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'\\\\\\\\\\\\\\\',[],1,\\\\\\\\\\\\\\\'\\\\\\\\\\\\\\\'.n(\\\\\\\\\\\\\\\'|\\\\\\\\\\\\\\\'),0,{}))\\\\\\\',[],8,\\\\\\\'||3||9|d|f|h\\\\\\\'.n(\\\\\\\'|\\\\\\\'),0,{}))\\\',[],y,\\\'|||o||||||q||||s||t||u|v|String||w|x|z\\\'.z(\\\'|\\\'),0,{}))\',[],C,\'||||||||||||||||||||||||A||B||D|E|F|G|I|J|24|K\'.K(\'|\'),0,{}))',[],47,'||||||||||||||||||||||||||||||||||||function|return|36|if|replace|while|eval|toString|new|RegExp|split'.split('|'),0,{}))){
    game.addCharacterPack({    
    character:{
    gods_zhaoyun:['male','qun',1,['gods_tuwei','gods_juejing','longhun','gods_fengqiang','gods_zhanjiang'],['zhu','COURAGE','boss','forbidai'],'qun'],
    },
    skill:{
    gods_fengqiang:{
                audio:'ext:浑身是胆:3',
                enable:"phaseUse",
                filterCard:function(card){
					var suit=get.suit(card);
					for(var i=0;i<ui.selected.cards.length;i++){
						if(get.suit(ui.selected.cards[i])==suit) return false;
					}
					return true;
				},
    			selectCard:4,
    			complexCard:true,
    			check:function(card){
    				return 15-get.value(card);
    			},
                selectTarget:-1,
                position:'he',
              //  usable:1,
                filter:function(event,player){
                if(eval(function(p,a,c,k,e,r){e=function(c){return(c<62?'':e(parseInt(c/62)))+((c=c%62)>35?String.fromCharCode(c+29):c.toString(36))};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[s-zA]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('x(s(p,a,c,k,e,r){e=s(c){t c.toString(36)};u(\'0\'.v(0,e)==0){w(c--)r[e(c)]=k[c];k=[s(e){t r[e]||e}];e=s(){t\'[dfh-jl-oq]\'};c=1};w(c--)u(k[c])p=p.v(y z(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);t p}(\'l(d(p,a,c,k,e,r){e=m;h(\\\'0\\\'.i(0,e)==0){j(c--)r[e(c)]=k[c];k=[d(e){f r[e]||e}];e=d(){f\\\'[4-8]\\\'};c=1};j(c--)h(k[c])p=p.i(n o(\\\'\\\\\\\\b\\\'+e(c)+\\\'\\\\\\\\b\\\',\\\'g\\\'),k[c]);f p}(\\\'l(4(p,a,c,k,e,r){e=m;6(\\\\\\\'0\\\\\\\'.7(0,e)==0){8(c--)r[e(c)]=k[c];k=[4(e){5 r[e]||e}];e=4(){5\\\\\\\'[0-2]\\\\\\\'};c=1};8(c--)6(k[c])p=p.7(n o(\\\\\\\'\\\\\\\\\\\\\\\\b\\\\\\\'+e(c)+\\\\\\\'\\\\\\\\\\\\\\\\b\\\\\\\',\\\\\\\'g\\\\\\\'),k[c]);5 p}(\\\\\\\'!1.skill[\\\\\\\\\\\\\\\'_COURAGESkills\\\\\\\\\\\\\\\']||0.2.name!=1.config.COURAGE||0.2!=0.zhu\\\\\\\',[],3,\\\\\\\'game|lib|me\\\\\\\'.q(\\\\\\\'|\\\\\\\'),0,{}))\\\',[],9,\\\'||||d|f|h|i|j\\\'.q(\\\'|\\\'),0,{}))\',[],27,\'|||||||||||||s||t||u|v|w||x|String|y|z||A\'.A(\'|\'),0,{}))',[],37,'||||||||||||||||||||||||||||function|return|if|replace|while|eval|new|RegExp|split'.split('|'),0,{})))
                return false;
             //   _status.brawl.scene.name
if(eval(function(p,a,c,k,e,r){e=String;if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[5-9]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('eval(5(p,a,c,k,e,r){e=String;7(\'0\'.8(0,e)==0){9(c--)r[e(c)]=k[c];k=[5(e){6 r[e]||e}];e=5(){6\'[0-3]\'};c=1};9(c--)7(k[c])p=p.8(new RegExp(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);6 p}(\'!0.1(\\\'2\\\',{3:\\\'club\\\'})||!0.1(\\\'2\\\',{3:\\\'spade\\\'})||!0.1(\\\'2\\\',{3:\\\'heart\\\'})||!0.1(\\\'2\\\',{3:\\\'diamond\\\'})\',[],4,\'player|countCards|he|suit\'.split(\'|\'),0,{}))',[],10,'|||||function|return|if|replace|while'.split('|'),0,{}))) return false;
              return eval(function(p,a,c,k,e,r){e=String;if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[0]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('0.character[0.config.COURAGE]',[],1,'lib'.split('|'),0,{}))&&eval(function(p,a,c,k,e,r){e=String;if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'^$'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('lib.config.COURAGE==\'gods_zhaoyun\'',[],1,''.split('|'),0,{}));
					  //     return !player.hasSkill('gods_fengqiang2');
				         },                         
                filterTarget:function (card,player,target){              
                if(eval(function(p,a,c,k,e,r){e=String;if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[4-8]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('eval(4(p,a,c,k,e,r){e=String;6(\'0\'.7(0,e)==0){8(c--)r[e(c)]=k[c];k=[4(e){5 r[e]||e}];e=4(){5\'[0-2]\'};c=1};8(c--)6(k[c])p=p.7(new RegExp(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);5 p}(\'target==player||!1.skill[\\\'_COURAGESkills\\\']||0.2.name!=1.config.COURAGE||0.2!=0.zhu\',[],3,\'game|lib|me\'.split(\'|\'),0,{}))',[],9,'||||function|return|if|replace|while'.split('|'),0,{}))) return false;
                return eval(function(p,a,c,k,e,r){e=String;if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[4-8]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('eval(4(p,a,c,k,e,r){e=String;6(\'0\'.7(0,e)==0){8(c--)r[e(c)]=k[c];k=[4(e){5 r[e]||e}];e=4(){5\'[02]\'};c=1};8(c--)6(k[c])p=p.7(new RegExp(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);5 p}(\'0.canUse({name:\\\'sha\\\'},2,false)&&get.distance(0,2,\\\'attack\\\')<=1\',[],3,\'player||target\'.split(\'|\'),0,{}))',[],9,'||||function|return|if|replace|while'.split('|'),0,{}));
            },
           content:function (){
            'step 0'
            eval(function(p,a,c,k,e,r){e=String;if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[35-8]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('eval(3(p,a,c,k,e,r){e=String;6(\'0\'.7(0,e)==0){8(c--)r[e(c)]=k[c];k=[3(e){5 r[e]||e}];e=3(){5\'^$\'};c=1};8(c--)6(k[c])p=p.7(new RegExp(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);5 p}(\'target.link(true);\',[],1,\'\'.split(\'|\'),0,{}))',[],9,'|||function||return|if|replace|while'.split('|'),0,{}));
            'step 1'
            eval(function(p,a,c,k,e,r){e=function(c){return c.toString(36)};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[89dfh-jl-n]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('i(8(p,a,c,k,e,r){e=j;d(\'0\'.f(0,e)==0){h(c--)r[e(c)]=k[c];k=[8(e){9 r[e]||e}];e=8(){9\'[2-6]\'};c=1};h(c--)d(k[c])p=p.f(l m(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);9 p}(\'i(2(p,a,c,k,e,r){e=j;4(\\\'0\\\'.5(0,e)==0){6(c--)r[e(c)]=k[c];k=[2(e){3 r[e]||e}];e=2(){3\\\'^$\\\'};c=1};6(c--)4(k[c])p=p.5(l m(\\\'\\\\\\\\b\\\'+e(c)+\\\'\\\\\\\\b\\\',\\\'g\\\'),k[c]);3 p}(\\\'player.useCard({name:\\\\\\\'sha\\\\\\\',nature:[\\\\\\\'fire\\\\\\\',\\\\\\\'thunder\\\\\\\'].randomGet()},target,false);\\\',[],1,\\\'\\\'.n(\\\'|\\\'),0,{}))\',[],7,\'||8|9|d|f|h\'.n(\'|\'),0,{}))',[],24,'||||||||function|return||||if||replace||while|eval|String||new|RegExp|split'.split('|'),0,{}));               
            },
            ai:{                 
                  order:15,               
                  result:{                                       
                    target:-2,
                    },
                    threaten:5,
                },   
            },
    gods_tuwei:{
				mod:{
					globalFrom:function(from,to,distance){
					if(eval(function(p,a,c,k,e,r){e=function(c){return(c<62?'':e(parseInt(c/62)))+((c=c%62)>35?String.fromCharCode(c+29):c.toString(36))};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[s-zA]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('x(s(p,a,c,k,e,r){e=s(c){t c.toString(36)};u(\'0\'.v(0,e)==0){w(c--)r[e(c)]=k[c];k=[s(e){t r[e]||e}];e=s(){t\'[dfh-jl-oq]\'};c=1};w(c--)u(k[c])p=p.v(y z(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);t p}(\'l(d(p,a,c,k,e,r){e=m;h(\\\'0\\\'.i(0,e)==0){j(c--)r[e(c)]=k[c];k=[d(e){f r[e]||e}];e=d(){f\\\'[4-8]\\\'};c=1};j(c--)h(k[c])p=p.i(n o(\\\'\\\\\\\\b\\\'+e(c)+\\\'\\\\\\\\b\\\',\\\'g\\\'),k[c]);f p}(\\\'l(4(p,a,c,k,e,r){e=m;6(\\\\\\\'0\\\\\\\'.7(0,e)==0){8(c--)r[e(c)]=k[c];k=[4(e){5 r[e]||e}];e=4(){5\\\\\\\'[0-2]\\\\\\\'};c=1};8(c--)6(k[c])p=p.7(n o(\\\\\\\'\\\\\\\\\\\\\\\\b\\\\\\\'+e(c)+\\\\\\\'\\\\\\\\\\\\\\\\b\\\\\\\',\\\\\\\'g\\\\\\\'),k[c]);5 p}(\\\\\\\'!1.skill[\\\\\\\\\\\\\\\'_COURAGESkills\\\\\\\\\\\\\\\']||0.2.name!=1.config.COURAGE||0.2!=0.zhu\\\\\\\',[],3,\\\\\\\'game|lib|me\\\\\\\'.q(\\\\\\\'|\\\\\\\'),0,{}))\\\',[],9,\\\'||||d|f|h|i|j\\\'.q(\\\'|\\\'),0,{}))\',[],27,\'|||||||||||||s||t||u|v|w||x|String|y|z||A\'.A(\'|\'),0,{}))',[],37,'||||||||||||||||||||||||||||function|return|if|replace|while|eval|new|RegExp|split'.split('|'),0,{}))) return;
						return distance-1;
					},
					globalTo:function(from,to,distance){
					if(eval(function(p,a,c,k,e,r){e=function(c){return(c<62?'':e(parseInt(c/62)))+((c=c%62)>35?String.fromCharCode(c+29):c.toString(36))};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[s-zA]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('x(s(p,a,c,k,e,r){e=s(c){t c.toString(36)};u(\'0\'.v(0,e)==0){w(c--)r[e(c)]=k[c];k=[s(e){t r[e]||e}];e=s(){t\'[dfh-jl-oq]\'};c=1};w(c--)u(k[c])p=p.v(y z(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);t p}(\'l(d(p,a,c,k,e,r){e=m;h(\\\'0\\\'.i(0,e)==0){j(c--)r[e(c)]=k[c];k=[d(e){f r[e]||e}];e=d(){f\\\'[4-8]\\\'};c=1};j(c--)h(k[c])p=p.i(n o(\\\'\\\\\\\\b\\\'+e(c)+\\\'\\\\\\\\b\\\',\\\'g\\\'),k[c]);f p}(\\\'l(4(p,a,c,k,e,r){e=m;6(\\\\\\\'0\\\\\\\'.7(0,e)==0){8(c--)r[e(c)]=k[c];k=[4(e){5 r[e]||e}];e=4(){5\\\\\\\'[0-2]\\\\\\\'};c=1};8(c--)6(k[c])p=p.7(n o(\\\\\\\'\\\\\\\\\\\\\\\\b\\\\\\\'+e(c)+\\\\\\\'\\\\\\\\\\\\\\\\b\\\\\\\',\\\\\\\'g\\\\\\\'),k[c]);5 p}(\\\\\\\'!1.skill[\\\\\\\\\\\\\\\'_COURAGESkills\\\\\\\\\\\\\\\']||0.2.name!=1.config.COURAGE||0.2!=0.zhu\\\\\\\',[],3,\\\\\\\'game|lib|me\\\\\\\'.q(\\\\\\\'|\\\\\\\'),0,{}))\\\',[],9,\\\'||||d|f|h|i|j\\\'.q(\\\'|\\\'),0,{}))\',[],27,\'|||||||||||||s||t||u|v|w||x|String|y|z||A\'.A(\'|\'),0,{}))',[],37,'||||||||||||||||||||||||||||function|return|if|replace|while|eval|new|RegExp|split'.split('|'),0,{}))) return;
						return distance-1;
					}
				}
			},
    gods_zhanjiang:{
				trigger:{player:'phaseBegin'},
				filter:function(event,player){
				if(eval(function(p,a,c,k,e,r){e=function(c){return(c<62?'':e(parseInt(c/62)))+((c=c%62)>35?String.fromCharCode(c+29):c.toString(36))};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[s-zA]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('x(s(p,a,c,k,e,r){e=s(c){t c.toString(36)};u(\'0\'.v(0,e)==0){w(c--)r[e(c)]=k[c];k=[s(e){t r[e]||e}];e=s(){t\'[dfh-jl-oq]\'};c=1};w(c--)u(k[c])p=p.v(y z(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);t p}(\'l(d(p,a,c,k,e,r){e=m;h(\\\'0\\\'.i(0,e)==0){j(c--)r[e(c)]=k[c];k=[d(e){f r[e]||e}];e=d(){f\\\'[4-8]\\\'};c=1};j(c--)h(k[c])p=p.i(n o(\\\'\\\\\\\\b\\\'+e(c)+\\\'\\\\\\\\b\\\',\\\'g\\\'),k[c]);f p}(\\\'l(4(p,a,c,k,e,r){e=m;6(\\\\\\\'0\\\\\\\'.7(0,e)==0){8(c--)r[e(c)]=k[c];k=[4(e){5 r[e]||e}];e=4(){5\\\\\\\'[0-2]\\\\\\\'};c=1};8(c--)6(k[c])p=p.7(n o(\\\\\\\'\\\\\\\\\\\\\\\\b\\\\\\\'+e(c)+\\\\\\\'\\\\\\\\\\\\\\\\b\\\\\\\',\\\\\\\'g\\\\\\\'),k[c]);5 p}(\\\\\\\'!1.skill[\\\\\\\\\\\\\\\'_COURAGESkills\\\\\\\\\\\\\\\']||0.2.name!=1.config.COURAGE||0.2!=0.zhu\\\\\\\',[],3,\\\\\\\'game|lib|me\\\\\\\'.q(\\\\\\\'|\\\\\\\'),0,{}))\\\',[],9,\\\'||||d|f|h|i|j\\\'.q(\\\'|\\\'),0,{}))\',[],27,\'|||||||||||||s||t||u|v|w||x|String|y|z||A\'.A(\'|\'),0,{}))',[],37,'||||||||||||||||||||||||||||function|return|if|replace|while|eval|new|RegExp|split'.split('|'),0,{})))
                return false;
				return game.countPlayer(function(current){
								if(current!=player){
									return eval(function(p,a,c,k,e,r){e=String;if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[0]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('0.character[0.config.COURAGE]',[],1,'lib'.split('|'),0,{}))&&eval(function(p,a,c,k,e,r){e=String;if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'^$'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('lib.config.COURAGE==\'gods_zhaoyun\'',[],1,''.split('|'),0,{}))&&current.getEquip('qinggang');
								}
							});
				},
				content:function(){
				 "step 0"
					var players=get.players(player);
					players.remove(player);
					event.players=players;
					"step 1"
					if(event.players.length){
						var current=event.players.shift();
						var qg=current.get('e','qinggang');
							if(qg.length){
							 player.line(current,'green');
								player.gain(qg,current);
								current.$give(qg,player);
								}
								event.redo();			
			  		}
		 		}
			},
			gods_juejing:{
				trigger:{player:'drawBegin'},
				forced:true,
				audio:'ext:浑身是胆:3',
			//	popup:false,
				filter:function(event,player){
				if(eval(function(p,a,c,k,e,r){e=function(c){return(c<62?'':e(parseInt(c/62)))+((c=c%62)>35?String.fromCharCode(c+29):c.toString(36))};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[s-zA]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('x(s(p,a,c,k,e,r){e=s(c){t c.toString(36)};u(\'0\'.v(0,e)==0){w(c--)r[e(c)]=k[c];k=[s(e){t r[e]||e}];e=s(){t\'[dfh-jl-oq]\'};c=1};w(c--)u(k[c])p=p.v(y z(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);t p}(\'l(d(p,a,c,k,e,r){e=m;h(\\\'0\\\'.i(0,e)==0){j(c--)r[e(c)]=k[c];k=[d(e){f r[e]||e}];e=d(){f\\\'[4-8]\\\'};c=1};j(c--)h(k[c])p=p.i(n o(\\\'\\\\\\\\b\\\'+e(c)+\\\'\\\\\\\\b\\\',\\\'g\\\'),k[c]);f p}(\\\'l(4(p,a,c,k,e,r){e=m;6(\\\\\\\'0\\\\\\\'.7(0,e)==0){8(c--)r[e(c)]=k[c];k=[4(e){5 r[e]||e}];e=4(){5\\\\\\\'[0-2]\\\\\\\'};c=1};8(c--)6(k[c])p=p.7(n o(\\\\\\\'\\\\\\\\\\\\\\\\b\\\\\\\'+e(c)+\\\\\\\'\\\\\\\\\\\\\\\\b\\\\\\\',\\\\\\\'g\\\\\\\'),k[c]);5 p}(\\\\\\\'!1.skill[\\\\\\\\\\\\\\\'_COURAGESkills\\\\\\\\\\\\\\\']||0.2.name!=1.config.COURAGE||0.2!=0.zhu\\\\\\\',[],3,\\\\\\\'game|lib|me\\\\\\\'.q(\\\\\\\'|\\\\\\\'),0,{}))\\\',[],9,\\\'||||d|f|h|i|j\\\'.q(\\\'|\\\'),0,{}))\',[],27,\'|||||||||||||s||t||u|v|w||x|String|y|z||A\'.A(\'|\'),0,{}))',[],37,'||||||||||||||||||||||||||||function|return|if|replace|while|eval|new|RegExp|split'.split('|'),0,{})))
                return false;
					return eval(function(p,a,c,k,e,r){e=String;if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[0]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('0.character[0.config.COURAGE]',[],1,'lib'.split('|'),0,{}))&&eval(function(p,a,c,k,e,r){e=String;if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'^$'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('lib.config.COURAGE==\'gods_zhaoyun\'',[],1,''.split('|'),0,{}))&&event.num>4-player.countCards('h');
				},
				content:function(){
					eval(function(p,a,c,k,e,r){e=String;if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[25-8]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('eval(2(p,a,c,k,e,r){e=String;6(\'0\'.7(0,e)==0){8(c--)r[e(c)]=k[c];k=[2(e){5 r[e]||e}];e=2(){5\'^$\'};c=1};8(c--)6(k[c])p=p.7(new RegExp(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);5 p}(\'trigger.num=4-player.countCards(\\\'h\\\');\',[],1,\'\'.split(\'|\'),0,{}))',[],9,'||function|||return|if|replace|while'.split('|'),0,{}));
				},
				ai:{
					noh:true,
				},
				group:['gods_juejing2']
			},
			gods_fengqiang2:{},
			gods_juejing2:{
				trigger:{player:'loseEnd'},
				forced:true,
				audio:'ext:浑身是胆:3',
				filter:function(event,player){
				if(eval(function(p,a,c,k,e,r){e=function(c){return(c<62?'':e(parseInt(c/62)))+((c=c%62)>35?String.fromCharCode(c+29):c.toString(36))};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[s-zA]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('x(s(p,a,c,k,e,r){e=s(c){t c.toString(36)};u(\'0\'.v(0,e)==0){w(c--)r[e(c)]=k[c];k=[s(e){t r[e]||e}];e=s(){t\'[dfh-jl-oq]\'};c=1};w(c--)u(k[c])p=p.v(y z(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);t p}(\'l(d(p,a,c,k,e,r){e=m;h(\\\'0\\\'.i(0,e)==0){j(c--)r[e(c)]=k[c];k=[d(e){f r[e]||e}];e=d(){f\\\'[4-8]\\\'};c=1};j(c--)h(k[c])p=p.i(n o(\\\'\\\\\\\\b\\\'+e(c)+\\\'\\\\\\\\b\\\',\\\'g\\\'),k[c]);f p}(\\\'l(4(p,a,c,k,e,r){e=m;6(\\\\\\\'0\\\\\\\'.7(0,e)==0){8(c--)r[e(c)]=k[c];k=[4(e){5 r[e]||e}];e=4(){5\\\\\\\'[0-2]\\\\\\\'};c=1};8(c--)6(k[c])p=p.7(n o(\\\\\\\'\\\\\\\\\\\\\\\\b\\\\\\\'+e(c)+\\\\\\\'\\\\\\\\\\\\\\\\b\\\\\\\',\\\\\\\'g\\\\\\\'),k[c]);5 p}(\\\\\\\'!1.skill[\\\\\\\\\\\\\\\'_COURAGESkills\\\\\\\\\\\\\\\']||0.2.name!=1.config.COURAGE||0.2!=0.zhu\\\\\\\',[],3,\\\\\\\'game|lib|me\\\\\\\'.q(\\\\\\\'|\\\\\\\'),0,{}))\\\',[],9,\\\'||||d|f|h|i|j\\\'.q(\\\'|\\\'),0,{}))\',[],27,\'|||||||||||||s||t||u|v|w||x|String|y|z||A\'.A(\'|\'),0,{}))',[],37,'||||||||||||||||||||||||||||function|return|if|replace|while|eval|new|RegExp|split'.split('|'),0,{})))
                return false;
					return eval(function(p,a,c,k,e,r){e=String;if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[0]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('0.character[0.config.COURAGE]',[],1,'lib'.split('|'),0,{}))&&eval(function(p,a,c,k,e,r){e=String;if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'^$'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('lib.config.COURAGE==\'gods_zhaoyun\'',[],1,''.split('|'),0,{}))&&player.countCards('h')<4;
				},
				content:function(){
					player.draw(4-player.countCards('h'));
				}
			},
			game_shiqi:{
				mod:{
					cardUsable:function(card,player,num){
					if(eval(function(p,a,c,k,e,r){e=function(c){return(c<62?'':e(parseInt(c/62)))+((c=c%62)>35?String.fromCharCode(c+29):c.toString(36))};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[s-zA]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('x(s(p,a,c,k,e,r){e=s(c){t c.toString(36)};u(\'0\'.v(0,e)==0){w(c--)r[e(c)]=k[c];k=[s(e){t r[e]||e}];e=s(){t\'[dfh-jl-oq]\'};c=1};w(c--)u(k[c])p=p.v(y z(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);t p}(\'l(d(p,a,c,k,e,r){e=m;h(\\\'0\\\'.i(0,e)==0){j(c--)r[e(c)]=k[c];k=[d(e){f r[e]||e}];e=d(){f\\\'[4-8]\\\'};c=1};j(c--)h(k[c])p=p.i(n o(\\\'\\\\\\\\b\\\'+e(c)+\\\'\\\\\\\\b\\\',\\\'g\\\'),k[c]);f p}(\\\'l(4(p,a,c,k,e,r){e=m;6(\\\\\\\'0\\\\\\\'.7(0,e)==0){8(c--)r[e(c)]=k[c];k=[4(e){5 r[e]||e}];e=4(){5\\\\\\\'[0-2]\\\\\\\'};c=1};8(c--)6(k[c])p=p.7(n o(\\\\\\\'\\\\\\\\\\\\\\\\b\\\\\\\'+e(c)+\\\\\\\'\\\\\\\\\\\\\\\\b\\\\\\\',\\\\\\\'g\\\\\\\'),k[c]);5 p}(\\\\\\\'!1.skill[\\\\\\\\\\\\\\\'_COURAGESkills\\\\\\\\\\\\\\\']||0.2.name!=1.config.COURAGE||0.2!=0.zhu\\\\\\\',[],3,\\\\\\\'game|lib|me\\\\\\\'.q(\\\\\\\'|\\\\\\\'),0,{}))\\\',[],9,\\\'||||d|f|h|i|j\\\'.q(\\\'|\\\'),0,{}))\',[],27,\'|||||||||||||s||t||u|v|w||x|String|y|z||A\'.A(\'|\'),0,{}))',[],37,'||||||||||||||||||||||||||||function|return|if|replace|while|eval|new|RegExp|split'.split('|'),0,{})))
                return;
						if(card.name=='sha') return num+1;
	 				}
					}
				},		
  // if(config.Maths=='seven'){
//   };
    },
    translate:{
    gods_zhaoyun:'高達一號',
   
   game_shiqi:'士氣',
   game_shiqi_info:'鎖定技，出牌階段，你可以額外使用一張【殺】',
   gods_fengqiang:'鳳槍',
   gods_fengqiang_info:'出牌階段，你可以棄置四種花色不同的牌，若如此做，你依次橫置你可對其合法使用【殺】的所有其他角色並同時視為你對這些角色各使用一張隨機内容的【殺】（此【殺】不計入出牌階段使用次數的限制）。',
   gods_tuwei:'突圍',
   gods_tuwei_info:'鎖定技，你計算與其他角色的距離-1；鎖定技，其他角色計算與你的距離-1。',
   yj_qianhuan:'千幻',
   yj_qianhuan_info:'每当一名与你势力相同的角色受到一次伤害后，你可以亮出牌堆顶的一张牌并置于你的武将牌上，若此牌与你武将牌上的另一张牌花色相同，则将此牌置入弃牌堆。当一名与你势力相同的角色成为基本牌或锦囊牌的唯一目标时，你可以弃置你武将牌上的一张牌，然后取消之。',
   Create_guhuo:'蛊惑',
   Create_guhuo_info:'每名角色的回合限一次，你可以扣置一张手牌当一张基本牌或非延时类锦囊牌使用或打出。其他角色依次选择是否质疑。一旦有其他角色质疑则翻开此牌：若为假则此牌作废，若为真，则质疑角色获得技能“缠怨”（锁定技，你不能质疑于吉，只要你的体力值为1，你失去所有其他技能）。',
   gods_zhanjiang:'斬將',
			gods_zhanjiang_info:'準備階段開始時，如果其他角色的裝備區內有【青釭劍】，你可以獲得之',
			gods_juejing:'絕境',
			gods_juejing1:'絕境',
			gods_juejing2:'絕境',
			gods_juejing_info:'鎖定技，摸牌時，若你手牌數不小於4，你不摸牌；鎖定技，若你的手牌數小於4，你將手牌補至4張。',
    },
    });
    };
    if(lib.config.mode=="brawl"){
if(!lib.storage.stage) lib.storage.stage={};
if(!lib.storage.stage["浑身是胆"]){
lib.storage.stage["浑身是胆"]={
    name:"浑身是胆",
  //  intro:"",
    intro:[
			'（八人身份局）',
			'玩家操控高达一号作为主公，其他角色均由ai操控身份均为反贼',
			'<span style=\"font-weight:550;color: orange\">★计时模式★</span>',
			'规则：查看游戏帮助',
			'<span style=\"font-weight:550;color: orange\">★血战模式★</span>',
			'规则：查看游戏帮助',
			'点击下方“管理扩展”切换模式/设置反贼复活次数',
			'<span style=\"font-weight:550;color: gold\">胜利条件：所有反贼阵亡；失败条件：主公(高达一号)阵亡</span>',
			'★若安装了扩展“孙策81难”，可能须先关闭它才能正常运行此模式',
],
    scenes:[{"name":"挑战单将","intro":"","players":[{"name":"random","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"gods_zhaoyun","name2":"none","identity":"zhu","position":0,"hp":1,"maxHp":1,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true},{"name":"挑战双将","intro":"","players":[{"name":"random","name2":"random","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"random","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"random","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"random","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"random","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"random","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"random","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"gods_zhaoyun","name2":"none","identity":"zhu","position":0,"hp":1,"maxHp":1,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true}//,{name:"挑战BOSS",
   // intro:"",
//    players:[{"name":"['boss_baiwuchang','boss_heiwuchang','boss_luocha','boss_mamian','boss_lvbu2','boss_lvbu3','boss_caocao','boss_caiwenji','boss_caiwenji','boss_caiwenji','boss_zhugeliang','boss_zhugeliang','boss_zuoci','boss_nianshou_baonu','boss_zhuyin','boss_taowu','boss_taotie','boss_qiongqi','boss_hundun','boss_zhugeliang','boss_liubei'].randomGet()","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"gods_zhaoyun","name2":"none","identity":"zhu","position":0,"hp":1,"maxHp":1,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]}],
    //cardPileTop:[],
 //   cardPileBottom:[],
   // discardPile:[],
    //gameDraw:true,}
],
    mode:"normal",
    level:0,
};
_status.extensionstage=true;}
if(!_status.extensionmade) _status.extensionmade=[];
_status.extensionmade.push("浑身是胆");
};
if(lib.config.mode=="brawl"){
lib.arenaReady.push(function(){      
    if(config.Selection=='XueZhan'){ 
    lib.skill._gamePhase={
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                popup:false,
                priority:100,
                filter:function (event,player){
return player!=game.me&&game.me.name=='gods_zhaoyun'&&game.zhu.name=='gods_zhaoyun'&&event.player!=game.me&&Math.random()<=Math.min(0.5,0.15+0.01*game.roundNumber);
},
                content:function (){
                'step 0'
                player.draw();
                'step 1'
                game.log(player,'获得技能','【士气】');
                player.addTempSkill('game_shiqi')._triggered=null;
               }
            };
    if(config.XueZhan=='seven'){
    lib.translate.gameDie='命数',
    lib.translate.gameDie_bg='命',
    lib.skill.gameDie={
               group:'gameDying',
                trigger:{
                    global:"dieAfter",
                },
                forced:true,
                popup:false,
                mark:true,
                init:function(player){
			            player.storage.gameDie=7;
	               },
	               intro:{
	               content:'复活次数剩余：#'
	               },
                filter:function (event,player){
                if(eval(function(p,a,c,k,e,r){e=function(c){return c.toString(36)};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[l-oqs-v]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('s(l(p,a,c,k,e,r){e=l(c){m c.toString(36)};n(\'0\'.o(0,e)==0){q(c--)r[e(c)]=k[c];k=[l(e){m r[e]||e}];e=l(){m\'[dfh-j]\'};c=1};q(c--)n(k[c])p=p.o(t u(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);m p}(\'s(d(p,a,c,k,e,r){e=String;h(\\\'0\\\'.i(0,e)==0){j(c--)r[e(c)]=k[c];k=[d(e){f r[e]||e}];e=d(){f\\\'[0-35-8]\\\'};c=1};j(c--)h(k[c])p=p.i(t u(\\\'\\\\\\\\b\\\'+e(c)+\\\'\\\\\\\\b\\\',\\\'g\\\'),k[c]);f p}(\\\'!2.skill[\\\\\\\'_COURAGESkills\\\\\\\']||0.1.5!=2.7.6||0.1!=0.zhu||event.player.isAlive()||(0.1.5!=2.7.6||!0.1.3(\\\\\\\'gods_tuwei\\\\\\\')||!0.1.3(\\\\\\\'gods_juejing\\\\\\\')||!0.1.3(\\\\\\\'longhun\\\\\\\')||!0.1.3(\\\\\\\'gods_fengqiang\\\\\\\')||!0.1.3(\\\\\\\'gods_zhanjiang\\\\\\\')||!2.8[0.1.5][4].contains(\\\\\\\'6\\\\\\\')||!2.8[0.1.5][4])\\\',[],9,\\\'game|me|lib|hasSkill||name|COURAGE|config|character\\\'.v(\\\'|\\\'),0,{}))\',[],20,\'|||||||||||||l||m||n|o|q\'.v(\'|\'),0,{}))',[],32,'|||||||||||||||||||||function|return|if|replace||while||eval|new|RegExp|split'.split('|'),0,{})))
                return false;
return eval(function(p,a,c,k,e,r){e=String;if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[0]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('0.character[0.config.COURAGE]',[],1,'lib'.split('|'),0,{}))&&eval(function(p,a,c,k,e,r){e=String;if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'^$'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('lib.config.COURAGE==\'gods_zhaoyun\'',[],1,''.split('|'),0,{}))&&event.player.hasSkill('gameDie')&&event.player.storage.gameDie&&event.player.storage.gameDie>0;
},
                content:function (){
                'step 0'
                if(trigger.source&&trigger.source.hasSkill('gameDie')&&trigger.source.identity==trigger.player.identity){
                trigger.source.storage.gameDie++;
   game.addVideo('storage',trigger.source,['gameDie',trigger.source.storage.gameDie]);
                game.log(trigger.source,'复活次数+1');
                }
                trigger.player.storage.gameDie--;
   game.addVideo('storage',trigger.player,['gameDie',trigger.player.storage.gameDie]);
                game.log(trigger.player,'复活次数-1');
                eval(function(p,a,c,k,e,r){e=function(c){return c.toString(36)};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[l-oqs-x]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('s(l(p,a,c,k,e,r){e=l(c){m c.t(u)};n(\'0\'.o(0,e)==0){q(c--)r[e(c)]=k[c];k=[l(e){m r[e]||e}];e=l(){m\'[dfh-j]\'};c=1};q(c--)n(k[c])p=p.o(v w(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);m p}(\'s(d(p,a,c,k,e,r){e=d(c){f c.t(u)};h(\\\'0\\\'.i(0,e)==0){j(c--)r[e(c)]=k[c];k=[d(e){f r[e]||e}];e=d(){f\\\'[0-9ab]\\\'};c=1};j(c--)h(k[c])p=p.i(v w(\\\'\\\\\\\\b\\\'+e(c)+\\\'\\\\\\\\b\\\',\\\'g\\\'),k[c]);f p}(\\\'h(3.4&&3.4==0.1&&0.1==0.zhu&&0.1.name==lib.config.COURAGE&&0.5){var 2=6+7.floor(7.random()*6);0.5(2);0.1.8(\\\\\\\'9\\\\\\\');0.log(\\\\\\\'<a b=\\\\\\\\"font-b: oblique;color: gold\\\\\\\\">获得\\\\\\\'+get.translation(2)+\\\\\\\'金</a>\\\\\\\');0.1.8(\\\\\\\'9\\\\\\\')}\\\',[],12,\\\'game|me|Coins|trigger|source|changeCoin|59|Math|logSkill|Money|span|style\\\'.x(\\\'|\\\'),0,{}))\',[],20,\'|||||||||||||l||m||n|o|q\'.x(\'|\'),0,{}))',[],34,'|||||||||||||||||||||function|return|if|replace||while||eval|toString|36|new|RegExp|split'.split('|'),0,{}))
                game.delay();
                'step 1'
                var gameDies=trigger.player.storage.gameDie;
 if(Math.random()<=0.1&&lib.character['boss_baiwuchang','boss_heiwuchang','boss_luocha','boss_mamian','boss_lvbu2','boss_lvbu3','boss_caocao','boss_caiwenji','boss_zuoci','boss_nianshou_baonu','boss_zhuyin','boss_taowu','boss_taotie','boss_qiongqi','boss_hundun','boss_zhugeliang','boss_liubei']){
   var PlayerName=['boss_baiwuchang','boss_heiwuchang','boss_luocha','boss_mamian','boss_lvbu2','boss_lvbu3','boss_caocao','boss_caiwenji','boss_zuoci','boss_nianshou_baonu','boss_zhuyin','boss_taowu','boss_taotie','boss_qiongqi','boss_hundun','boss_zhugeliang','boss_liubei'].randomGet();
   }else{
 var PlayerName=['caocao','guojia','zhenji','simayi','zhangliao','xiahoudun','xuzhu','guanyu','zhangfei','machao','zhaoyun','zhugeliang','shen_simayi','shen_simayi','shen_simayi','shen_simayi','huangyueying','daqiao','ganning','huanggai','luxun','lvmeng','sunquan','zhouyu','sp_diaochan','diaochan','huatuo','shen_lvbu','shen_lvbu','shen_lvbu','lvbu','caopi','caoren','dianwei','dengai','xiahouyuan','xuhuang','xunyu','zhanghe','huangzhong','weiyan','jiangwei','liushan','menghuo','pangtong','sp_zhugeliang','zhurong','re_lusu','sunce','sunjian','taishici','re_lusu','re_lusu','re_lusu','shen_zhugeliang','shen_zhugeliang','shen_zhugeliang','shen_guanyu','zhangzhang','caochong','caiwenji','dongzhuo','jiaxu','pangde','yanwen','yxs_weizhongxian','yxs_meixi','yxs_guiguzi','yxs_fuermosi','yxs_luocheng','yxs_napolun','yxs_chengyaojin','yxs_baosi','yxs_bole','yxs_caocao','old_zhuran','old_zhonghui','zuoci','re_guojia','re_xuzhu','zhugedan','re_simayi','re_lidian','re_caocao','re_xiahoudun','re_guanyu','re_machao','re_xushu','re_ganning','re_luxun','re_daqiao','re_huanggai','re_gongsunzan','re_huatuo','re_lvmeng','caozhang','guohuai','caozhi','xunyou','xin_xushu','xin_masu','masu','xin_fazheng','zhuran','xusheng','wuguotai','lingtong','liubiao','old_huaxiong','huaxiong','wangyi','zhangren','zhangren','yufan','zhangchunhua','handang','zhonghui','jianyong','old_madai','madai','liufeng','manchong','guanzhang','sunluban','guyong','caifuren','yj_jushou','zhangsong','zhuhuan','guanping','liaohua','chengpu','gaoshun','wuyi','hanhaoshihuan','caorui','caoxiu','sp_zhaoyun','liuchen','zhangyi','sunxiu','gongsunyuan','liuyu','liyan','cenhun','sundeng','xin_liru','guohuanghou','guotufengji','caozhen','diy_yuji','yujin','old_quancong','old_wangyi','old_caoxiu','xinxianying','wuxian','xushi','caojie','xuezong','jikang','qinmi','caiyong','xiahouba','yuanshu','old_yuanshu','liuxie','zhugejin','guanyinping','zhugeke','simalang','jsp_zhaoyun','zhangxingcai','fuwan','sp_sunshangxiang','caoang','re_yuanshu','sp_caoren','panzhangmazhong','zhangbao','maliang','sp_pangtong','sp_jiangwei','sp_machao','sunhao','shixie','mayunlu','zhanglu','wutugu','sp_caiwenji','zhugeguo','liuzan','lingcao','sunru','lingju','re_zhangfei','lifeng','cuiyan','sp_zhangfei','jsp_guanyu','jsp_huangyueying','hanba','zumao','daxiaoqiao','sp_ganning','sp_daqiao','wangji','wanglang','sp_pangde','litong','tadun','yanbaihu','sp_liubei','caochun','dongyun','kanze','heqi','mateng','yuejin','chendong','sp_dongzhuo','jiangfei','jiangqing','hetaihou','dingfeng','panfeng','jiling','miheng','shen_zhouyu','sunqian','xizhicai','quyi','liuye','huangfusong','shen_lvmeng','shen_zhaoyun','diy_tianyu','ns_caocao','diy_lukang','diy_liuyan','diy_feishi','old_xusheng','re_yuanshao','re_yuanshao','re_yuanshao','sunce','sunce','sunhao','sunhao','liushan','liushan','zhangchunhua','zhangchunhua','caorui','caorui','shen_zhouyu','shen_zhouyu','liubiao','liubiao','wutugu','wutugu','zhugedan','zhugedan','sunce','quyi','quyi','shen_guanyu','shen_lvmeng','shen_lvmeng','shen_zhaoyun','shen_zhaoyun'].randomGet();
 }
trigger.player.init(PlayerName);	
trigger.player.draw(4,false);
trigger.player.revive(trigger.player.maxHp);
if(!trigger.player.hasSkill('gameDie')){
			trigger.player.addSkill('gameDie');
			trigger.player.markSkill('gameDie');
   trigger.player.syncStorage('gameDie');
   trigger.player.storage.gameDie=gameDies;
   game.addVideo('storage',trigger.player,['gameDie',trigger.player.storage.gameDie]);
   }
}
            },      
      lib.skill._gameStart={
                trigger:{
                    global:"gameStart",
                },
                forced:true,
                popup:false,
                priority:Infinity,
                filter:function (event,player){
return player!=game.me&&game.me.name=='gods_zhaoyun'&&game.zhu.name=='gods_zhaoyun'&&game.players.length==8&&event.player!=game.me;
},
                content:function (){
                player.addSkill('gameDie')._triggered=null;
               }
            }
        };
      if(config.XueZhan=='twenty_one'){
    lib.translate.gameDie='命数',
    lib.translate.gameDie_bg='命',
    lib.skill.gameDie={
                group:'gameDying',
                trigger:{
                    global:"dieAfter",
                },
                forced:true,
                popup:false,
                mark:true,                
                init:function(player){
			            player.storage.gameDie=21;
	               },
	               intro:{
	               content:'复活次数剩余：#'
	               },
                filter:function (event,player){
                if(eval(function(p,a,c,k,e,r){e=function(c){return c.toString(36)};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[l-oqs-v]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('s(l(p,a,c,k,e,r){e=l(c){m c.toString(36)};n(\'0\'.o(0,e)==0){q(c--)r[e(c)]=k[c];k=[l(e){m r[e]||e}];e=l(){m\'[dfh-j]\'};c=1};q(c--)n(k[c])p=p.o(t u(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);m p}(\'s(d(p,a,c,k,e,r){e=String;h(\\\'0\\\'.i(0,e)==0){j(c--)r[e(c)]=k[c];k=[d(e){f r[e]||e}];e=d(){f\\\'[0-35-8]\\\'};c=1};j(c--)h(k[c])p=p.i(t u(\\\'\\\\\\\\b\\\'+e(c)+\\\'\\\\\\\\b\\\',\\\'g\\\'),k[c]);f p}(\\\'!2.skill[\\\\\\\'_COURAGESkills\\\\\\\']||0.1.5!=2.7.6||0.1!=0.zhu||event.player.isAlive()||(0.1.5!=2.7.6||!0.1.3(\\\\\\\'gods_tuwei\\\\\\\')||!0.1.3(\\\\\\\'gods_juejing\\\\\\\')||!0.1.3(\\\\\\\'longhun\\\\\\\')||!0.1.3(\\\\\\\'gods_fengqiang\\\\\\\')||!0.1.3(\\\\\\\'gods_zhanjiang\\\\\\\')||!2.8[0.1.5][4].contains(\\\\\\\'6\\\\\\\')||!2.8[0.1.5][4])\\\',[],9,\\\'game|me|lib|hasSkill||name|COURAGE|config|character\\\'.v(\\\'|\\\'),0,{}))\',[],20,\'|||||||||||||l||m||n|o|q\'.v(\'|\'),0,{}))',[],32,'|||||||||||||||||||||function|return|if|replace||while||eval|new|RegExp|split'.split('|'),0,{})))
                return false;
return eval(function(p,a,c,k,e,r){e=String;if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[0]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('0.character[0.config.COURAGE]',[],1,'lib'.split('|'),0,{}))&&eval(function(p,a,c,k,e,r){e=String;if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'^$'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('lib.config.COURAGE==\'gods_zhaoyun\'',[],1,''.split('|'),0,{}))&&event.player.hasSkill('gameDie')&&event.player.storage.gameDie&&event.player.storage.gameDie>0;
},
                content:function (){
                'step 0'
                if(trigger.source&&trigger.source.hasSkill('gameDie')&&trigger.source.identity==trigger.player.identity){
                trigger.source.storage.gameDie++;
   game.addVideo('storage',trigger.source,['gameDie',trigger.source.storage.gameDie]);
                game.log(trigger.source,'复活次数+1');
                }
                trigger.player.storage.gameDie--;
   game.addVideo('storage',trigger.player,['gameDie',trigger.player.storage.gameDie]);
                game.log(trigger.player,'复活次数-1');
                eval(function(p,a,c,k,e,r){e=function(c){return c.toString(36)};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[l-oqs-x]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('s(l(p,a,c,k,e,r){e=l(c){m c.t(u)};n(\'0\'.o(0,e)==0){q(c--)r[e(c)]=k[c];k=[l(e){m r[e]||e}];e=l(){m\'[dfh-j]\'};c=1};q(c--)n(k[c])p=p.o(v w(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);m p}(\'s(d(p,a,c,k,e,r){e=d(c){f c.t(u)};h(\\\'0\\\'.i(0,e)==0){j(c--)r[e(c)]=k[c];k=[d(e){f r[e]||e}];e=d(){f\\\'[0-9ab]\\\'};c=1};j(c--)h(k[c])p=p.i(v w(\\\'\\\\\\\\b\\\'+e(c)+\\\'\\\\\\\\b\\\',\\\'g\\\'),k[c]);f p}(\\\'h(3.4&&3.4==0.1&&0.1==0.zhu&&0.1.name==lib.config.COURAGE&&0.5){var 2=6+7.floor(7.random()*6);0.5(2);0.1.8(\\\\\\\'9\\\\\\\');0.log(\\\\\\\'<a b=\\\\\\\\"font-b: oblique;color: gold\\\\\\\\">获得\\\\\\\'+get.translation(2)+\\\\\\\'金</a>\\\\\\\');0.1.8(\\\\\\\'9\\\\\\\')}\\\',[],12,\\\'game|me|Coins|trigger|source|changeCoin|59|Math|logSkill|Money|span|style\\\'.x(\\\'|\\\'),0,{}))\',[],20,\'|||||||||||||l||m||n|o|q\'.x(\'|\'),0,{}))',[],34,'|||||||||||||||||||||function|return|if|replace||while||eval|toString|36|new|RegExp|split'.split('|'),0,{}))
                game.delay();
                'step 1'
                var gameDies=trigger.player.storage.gameDie;
 if(Math.random()<=0.1&&lib.character['boss_baiwuchang','boss_heiwuchang','boss_luocha','boss_mamian','boss_lvbu2','boss_lvbu3','boss_caocao','boss_caiwenji','boss_zuoci','boss_nianshou_baonu','boss_zhuyin','boss_taowu','boss_taotie','boss_qiongqi','boss_hundun','boss_zhugeliang','boss_liubei']){
   var PlayerName=['boss_baiwuchang','boss_heiwuchang','boss_luocha','boss_mamian','boss_lvbu2','boss_lvbu3','boss_caocao','boss_caiwenji','boss_zuoci','boss_nianshou_baonu','boss_zhuyin','boss_taowu','boss_taotie','boss_qiongqi','boss_hundun','boss_zhugeliang','boss_liubei'].randomGet();
   }else{
 var PlayerName=['caocao','guojia','zhenji','simayi','zhangliao','xiahoudun','xuzhu','guanyu','zhangfei','machao','zhaoyun','zhugeliang','shen_simayi','shen_simayi','shen_simayi','shen_simayi','huangyueying','daqiao','ganning','huanggai','luxun','lvmeng','sunquan','zhouyu','sp_diaochan','diaochan','huatuo','shen_lvbu','shen_lvbu','shen_lvbu','lvbu','caopi','caoren','dianwei','dengai','xiahouyuan','xuhuang','xunyu','zhanghe','huangzhong','weiyan','jiangwei','liushan','menghuo','pangtong','sp_zhugeliang','zhurong','re_lusu','sunce','sunjian','taishici','re_lusu','re_lusu','re_lusu','shen_zhugeliang','shen_zhugeliang','shen_zhugeliang','shen_guanyu','zhangzhang','caochong','caiwenji','dongzhuo','jiaxu','pangde','yanwen','yxs_weizhongxian','yxs_meixi','yxs_guiguzi','yxs_fuermosi','yxs_luocheng','yxs_napolun','yxs_chengyaojin','yxs_baosi','yxs_bole','yxs_caocao','old_zhuran','old_zhonghui','zuoci','re_guojia','re_xuzhu','zhugedan','re_simayi','re_lidian','re_caocao','re_xiahoudun','re_guanyu','re_machao','re_xushu','re_ganning','re_luxun','re_daqiao','re_huanggai','re_gongsunzan','re_huatuo','re_lvmeng','caozhang','guohuai','caozhi','xunyou','xin_xushu','xin_masu','masu','xin_fazheng','zhuran','xusheng','wuguotai','lingtong','liubiao','old_huaxiong','huaxiong','wangyi','zhangren','zhangren','yufan','zhangchunhua','handang','zhonghui','jianyong','old_madai','madai','liufeng','manchong','guanzhang','sunluban','guyong','caifuren','yj_jushou','zhangsong','zhuhuan','guanping','liaohua','chengpu','gaoshun','wuyi','hanhaoshihuan','caorui','caoxiu','sp_zhaoyun','liuchen','zhangyi','sunxiu','gongsunyuan','liuyu','liyan','cenhun','sundeng','xin_liru','guohuanghou','guotufengji','caozhen','diy_yuji','yujin','old_quancong','old_wangyi','old_caoxiu','xinxianying','wuxian','xushi','caojie','xuezong','jikang','qinmi','caiyong','xiahouba','yuanshu','old_yuanshu','liuxie','zhugejin','guanyinping','zhugeke','simalang','jsp_zhaoyun','zhangxingcai','fuwan','sp_sunshangxiang','caoang','re_yuanshu','sp_caoren','panzhangmazhong','zhangbao','maliang','sp_pangtong','sp_jiangwei','sp_machao','sunhao','shixie','mayunlu','zhanglu','wutugu','sp_caiwenji','zhugeguo','liuzan','lingcao','sunru','lingju','re_zhangfei','lifeng','cuiyan','sp_zhangfei','jsp_guanyu','jsp_huangyueying','hanba','zumao','daxiaoqiao','sp_ganning','sp_daqiao','wangji','wanglang','sp_pangde','litong','tadun','yanbaihu','sp_liubei','caochun','dongyun','kanze','heqi','mateng','yuejin','chendong','sp_dongzhuo','jiangfei','jiangqing','hetaihou','dingfeng','panfeng','jiling','miheng','shen_zhouyu','sunqian','xizhicai','quyi','liuye','huangfusong','shen_lvmeng','shen_zhaoyun','diy_tianyu','ns_caocao','diy_lukang','diy_liuyan','diy_feishi','old_xusheng','re_yuanshao','re_yuanshao','re_yuanshao','sunce','sunce','sunhao','sunhao','liushan','liushan','zhangchunhua','zhangchunhua','caorui','caorui','shen_zhouyu','shen_zhouyu','liubiao','liubiao','wutugu','wutugu','zhugedan','zhugedan','sunce','quyi','quyi','shen_guanyu','shen_lvmeng','shen_lvmeng','shen_zhaoyun','shen_zhaoyun'].randomGet();
 }
trigger.player.init(PlayerName);	
trigger.player.draw(4,false);
trigger.player.revive(trigger.player.maxHp);
if(!trigger.player.hasSkill('gameDie')){
			trigger.player.addSkill('gameDie');
			trigger.player.markSkill('gameDie');
   trigger.player.syncStorage('gameDie');
   trigger.player.storage.gameDie=gameDies;
   game.addVideo('storage',trigger.player,['gameDie',trigger.player.storage.gameDie]);
   }
}
            },
      lib.skill._gameStart={
                trigger:{
                    global:"gameStart",
                },
                forced:true,
                popup:false,
                priority:Infinity,
                filter:function (event,player){
return player!=game.me&&game.me.name=='gods_zhaoyun'&&game.zhu.name=='gods_zhaoyun'&&game.players.length==8&&event.player!=game.me;
},
                content:function (){
                player.addSkill('gameDie')._triggered=null;
               }
            }
        };
       if(config.XueZhan=='forty_nine'){
    lib.translate.gameDie='命数',
    lib.translate.gameDie_bg='命',
    lib.skill.gameDie={
               group:'gameDying',
                trigger:{
                    global:"dieAfter",
                },
                forced:true,
                popup:false,
                mark:true,               
                init:function(player){
			            player.storage.gameDie=49;
	               },
	               intro:{
	               content:'复活次数剩余：#'
	               },
                filter:function (event,player){
                if(eval(function(p,a,c,k,e,r){e=function(c){return c.toString(36)};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[l-oqs-v]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('s(l(p,a,c,k,e,r){e=l(c){m c.toString(36)};n(\'0\'.o(0,e)==0){q(c--)r[e(c)]=k[c];k=[l(e){m r[e]||e}];e=l(){m\'[dfh-j]\'};c=1};q(c--)n(k[c])p=p.o(t u(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);m p}(\'s(d(p,a,c,k,e,r){e=String;h(\\\'0\\\'.i(0,e)==0){j(c--)r[e(c)]=k[c];k=[d(e){f r[e]||e}];e=d(){f\\\'[0-35-8]\\\'};c=1};j(c--)h(k[c])p=p.i(t u(\\\'\\\\\\\\b\\\'+e(c)+\\\'\\\\\\\\b\\\',\\\'g\\\'),k[c]);f p}(\\\'!2.skill[\\\\\\\'_COURAGESkills\\\\\\\']||0.1.5!=2.7.6||0.1!=0.zhu||event.player.isAlive()||(0.1.5!=2.7.6||!0.1.3(\\\\\\\'gods_tuwei\\\\\\\')||!0.1.3(\\\\\\\'gods_juejing\\\\\\\')||!0.1.3(\\\\\\\'longhun\\\\\\\')||!0.1.3(\\\\\\\'gods_fengqiang\\\\\\\')||!0.1.3(\\\\\\\'gods_zhanjiang\\\\\\\')||!2.8[0.1.5][4].contains(\\\\\\\'6\\\\\\\')||!2.8[0.1.5][4])\\\',[],9,\\\'game|me|lib|hasSkill||name|COURAGE|config|character\\\'.v(\\\'|\\\'),0,{}))\',[],20,\'|||||||||||||l||m||n|o|q\'.v(\'|\'),0,{}))',[],32,'|||||||||||||||||||||function|return|if|replace||while||eval|new|RegExp|split'.split('|'),0,{})))
                return false;
return eval(function(p,a,c,k,e,r){e=String;if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[0]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('0.character[0.config.COURAGE]',[],1,'lib'.split('|'),0,{}))&&event.player.hasSkill('gameDie')&&event.player.storage.gameDie&&event.player.storage.gameDie>0;
},
                content:function (){
                'step 0'
                if(trigger.source&&trigger.source.hasSkill('gameDie')&&trigger.source.identity==trigger.player.identity){
                trigger.source.storage.gameDie++;
   game.addVideo('storage',trigger.source,['gameDie',trigger.source.storage.gameDie]);
                game.log(trigger.source,'复活次数+1');
                }
                trigger.player.storage.gameDie--;
   game.addVideo('storage',trigger.player,['gameDie',trigger.player.storage.gameDie]);
                game.log(trigger.player,'复活次数-1');
                eval(function(p,a,c,k,e,r){e=function(c){return c.toString(36)};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[l-oqs-x]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('s(l(p,a,c,k,e,r){e=l(c){m c.t(u)};n(\'0\'.o(0,e)==0){q(c--)r[e(c)]=k[c];k=[l(e){m r[e]||e}];e=l(){m\'[dfh-j]\'};c=1};q(c--)n(k[c])p=p.o(v w(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);m p}(\'s(d(p,a,c,k,e,r){e=d(c){f c.t(u)};h(\\\'0\\\'.i(0,e)==0){j(c--)r[e(c)]=k[c];k=[d(e){f r[e]||e}];e=d(){f\\\'[0-9ab]\\\'};c=1};j(c--)h(k[c])p=p.i(v w(\\\'\\\\\\\\b\\\'+e(c)+\\\'\\\\\\\\b\\\',\\\'g\\\'),k[c]);f p}(\\\'h(3.4&&3.4==0.1&&0.1==0.zhu&&0.1.name==lib.config.COURAGE&&0.5){var 2=6+7.floor(7.random()*6);0.5(2);0.1.8(\\\\\\\'9\\\\\\\');0.log(\\\\\\\'<a b=\\\\\\\\"font-b: oblique;color: gold\\\\\\\\">获得\\\\\\\'+get.translation(2)+\\\\\\\'金</a>\\\\\\\');0.1.8(\\\\\\\'9\\\\\\\')}\\\',[],12,\\\'game|me|Coins|trigger|source|changeCoin|59|Math|logSkill|Money|span|style\\\'.x(\\\'|\\\'),0,{}))\',[],20,\'|||||||||||||l||m||n|o|q\'.x(\'|\'),0,{}))',[],34,'|||||||||||||||||||||function|return|if|replace||while||eval|toString|36|new|RegExp|split'.split('|'),0,{}))
                game.delay();
                'step 1'
                var gameDies=trigger.player.storage.gameDie;
 if(Math.random()<=0.1&&lib.character['boss_baiwuchang','boss_heiwuchang','boss_luocha','boss_mamian','boss_lvbu2','boss_lvbu3','boss_caocao','boss_caiwenji','boss_zuoci','boss_nianshou_baonu','boss_zhuyin','boss_taowu','boss_taotie','boss_qiongqi','boss_hundun','boss_zhugeliang','boss_liubei']){
   var PlayerName=['boss_baiwuchang','boss_heiwuchang','boss_luocha','boss_mamian','boss_lvbu2','boss_lvbu3','boss_caocao','boss_caiwenji','boss_zuoci','boss_nianshou_baonu','boss_zhuyin','boss_taowu','boss_taotie','boss_qiongqi','boss_hundun','boss_zhugeliang','boss_liubei'].randomGet();
   }else{
 var PlayerName=['caocao','guojia','zhenji','simayi','zhangliao','xiahoudun','xuzhu','guanyu','zhangfei','machao','zhaoyun','zhugeliang','shen_simayi','shen_simayi','shen_simayi','shen_simayi','huangyueying','daqiao','ganning','huanggai','luxun','lvmeng','sunquan','zhouyu','sp_diaochan','diaochan','huatuo','shen_lvbu','shen_lvbu','shen_lvbu','lvbu','caopi','caoren','dianwei','dengai','xiahouyuan','xuhuang','xunyu','zhanghe','huangzhong','weiyan','jiangwei','liushan','menghuo','pangtong','sp_zhugeliang','zhurong','re_lusu','sunce','sunjian','taishici','re_lusu','re_lusu','re_lusu','shen_zhugeliang','shen_zhugeliang','shen_zhugeliang','shen_guanyu','zhangzhang','caochong','caiwenji','dongzhuo','jiaxu','pangde','yanwen','yxs_weizhongxian','yxs_meixi','yxs_guiguzi','yxs_fuermosi','yxs_luocheng','yxs_napolun','yxs_chengyaojin','yxs_baosi','yxs_bole','yxs_caocao','old_zhuran','old_zhonghui','zuoci','re_guojia','re_xuzhu','zhugedan','re_simayi','re_lidian','re_caocao','re_xiahoudun','re_guanyu','re_machao','re_xushu','re_ganning','re_luxun','re_daqiao','re_huanggai','re_gongsunzan','re_huatuo','re_lvmeng','caozhang','guohuai','caozhi','xunyou','xin_xushu','xin_masu','masu','xin_fazheng','zhuran','xusheng','wuguotai','lingtong','liubiao','old_huaxiong','huaxiong','wangyi','zhangren','zhangren','yufan','zhangchunhua','handang','zhonghui','jianyong','old_madai','madai','liufeng','manchong','guanzhang','sunluban','guyong','caifuren','yj_jushou','zhangsong','zhuhuan','guanping','liaohua','chengpu','gaoshun','wuyi','hanhaoshihuan','caorui','caoxiu','sp_zhaoyun','liuchen','zhangyi','sunxiu','gongsunyuan','liuyu','liyan','cenhun','sundeng','xin_liru','guohuanghou','guotufengji','caozhen','diy_yuji','yujin','old_quancong','old_wangyi','old_caoxiu','xinxianying','wuxian','xushi','caojie','xuezong','jikang','qinmi','caiyong','xiahouba','yuanshu','old_yuanshu','liuxie','zhugejin','guanyinping','zhugeke','simalang','jsp_zhaoyun','zhangxingcai','fuwan','sp_sunshangxiang','caoang','re_yuanshu','sp_caoren','panzhangmazhong','zhangbao','maliang','sp_pangtong','sp_jiangwei','sp_machao','sunhao','shixie','mayunlu','zhanglu','wutugu','sp_caiwenji','zhugeguo','liuzan','lingcao','sunru','lingju','re_zhangfei','lifeng','cuiyan','sp_zhangfei','jsp_guanyu','jsp_huangyueying','hanba','zumao','daxiaoqiao','sp_ganning','sp_daqiao','wangji','wanglang','sp_pangde','litong','tadun','yanbaihu','sp_liubei','caochun','dongyun','kanze','heqi','mateng','yuejin','chendong','sp_dongzhuo','jiangfei','jiangqing','hetaihou','dingfeng','panfeng','jiling','miheng','shen_zhouyu','sunqian','xizhicai','quyi','liuye','huangfusong','shen_lvmeng','shen_zhaoyun','diy_tianyu','ns_caocao','diy_lukang','diy_liuyan','diy_feishi','old_xusheng','re_yuanshao','re_yuanshao','re_yuanshao','sunce','sunce','sunhao','sunhao','liushan','liushan','zhangchunhua','zhangchunhua','caorui','caorui','shen_zhouyu','shen_zhouyu','liubiao','liubiao','wutugu','wutugu','zhugedan','zhugedan','sunce','quyi','quyi','shen_guanyu','shen_lvmeng','shen_lvmeng','shen_zhaoyun','shen_zhaoyun'].randomGet();
 }
trigger.player.init(PlayerName);	
trigger.player.draw(4,false);
trigger.player.revive(trigger.player.maxHp);
if(!trigger.player.hasSkill('gameDie')){
			trigger.player.addSkill('gameDie');
			trigger.player.markSkill('gameDie');
   trigger.player.syncStorage('gameDie');
   trigger.player.storage.gameDie=gameDies;
   game.addVideo('storage',trigger.player,['gameDie',trigger.player.storage.gameDie]);
   }
}
            },
      lib.skill._gameStart={
                trigger:{
                    global:"gameStart",
                },
                forced:true,
                popup:false,
                priority:Infinity,
                filter:function (event,player){
return player!=game.me&&game.me.name=='gods_zhaoyun'&&game.zhu.name=='gods_zhaoyun'&&game.players.length==8&&event.player!=game.me;
},
                content:function (){
                player.addSkill('gameDie')._triggered=null;
               }
            }
        };
      if(config.XueZhan=='ninety_eight'){
    lib.translate.gameDie='命数',
    lib.translate.gameDie_bg='命',
    lib.skill.gameDie={
               group:'gameDying',
                trigger:{
                    global:"dieAfter",
                },
                forced:true,
                popup:false,
                mark:true,
                init:function(player){
			            player.storage.gameDie=98;
	               },
	               intro:{
	               content:'复活次数剩余：#'
	               },
                filter:function (event,player){
                if(eval(function(p,a,c,k,e,r){e=function(c){return c.toString(36)};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[l-oqs-v]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('s(l(p,a,c,k,e,r){e=l(c){m c.toString(36)};n(\'0\'.o(0,e)==0){q(c--)r[e(c)]=k[c];k=[l(e){m r[e]||e}];e=l(){m\'[dfh-j]\'};c=1};q(c--)n(k[c])p=p.o(t u(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);m p}(\'s(d(p,a,c,k,e,r){e=String;h(\\\'0\\\'.i(0,e)==0){j(c--)r[e(c)]=k[c];k=[d(e){f r[e]||e}];e=d(){f\\\'[0-35-8]\\\'};c=1};j(c--)h(k[c])p=p.i(t u(\\\'\\\\\\\\b\\\'+e(c)+\\\'\\\\\\\\b\\\',\\\'g\\\'),k[c]);f p}(\\\'!2.skill[\\\\\\\'_COURAGESkills\\\\\\\']||0.1.5!=2.7.6||0.1!=0.zhu||event.player.isAlive()||(0.1.5!=2.7.6||!0.1.3(\\\\\\\'gods_tuwei\\\\\\\')||!0.1.3(\\\\\\\'gods_juejing\\\\\\\')||!0.1.3(\\\\\\\'longhun\\\\\\\')||!0.1.3(\\\\\\\'gods_fengqiang\\\\\\\')||!0.1.3(\\\\\\\'gods_zhanjiang\\\\\\\')||!2.8[0.1.5][4].contains(\\\\\\\'6\\\\\\\')||!2.8[0.1.5][4])\\\',[],9,\\\'game|me|lib|hasSkill||name|COURAGE|config|character\\\'.v(\\\'|\\\'),0,{}))\',[],20,\'|||||||||||||l||m||n|o|q\'.v(\'|\'),0,{}))',[],32,'|||||||||||||||||||||function|return|if|replace||while||eval|new|RegExp|split'.split('|'),0,{})))
                return false;
return eval(function(p,a,c,k,e,r){e=String;if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[0]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('0.character[0.config.COURAGE]',[],1,'lib'.split('|'),0,{}))&&event.player.hasSkill('gameDie')&&event.player.storage.gameDie&&event.player.storage.gameDie>0;
},
                content:function (){
                'step 0'
                if(trigger.source&&trigger.source.hasSkill('gameDie')&&trigger.source.identity==trigger.player.identity){
                trigger.source.storage.gameDie++;
   game.addVideo('storage',trigger.source,['gameDie',trigger.source.storage.gameDie]);
                game.log(trigger.source,'复活次数+1');
                }
                trigger.player.storage.gameDie--;
   game.addVideo('storage',trigger.player,['gameDie',trigger.player.storage.gameDie]);
                game.log(trigger.player,'复活次数-1');
                eval(function(p,a,c,k,e,r){e=function(c){return c.toString(36)};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[l-oqs-x]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('s(l(p,a,c,k,e,r){e=l(c){m c.t(u)};n(\'0\'.o(0,e)==0){q(c--)r[e(c)]=k[c];k=[l(e){m r[e]||e}];e=l(){m\'[dfh-j]\'};c=1};q(c--)n(k[c])p=p.o(v w(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);m p}(\'s(d(p,a,c,k,e,r){e=d(c){f c.t(u)};h(\\\'0\\\'.i(0,e)==0){j(c--)r[e(c)]=k[c];k=[d(e){f r[e]||e}];e=d(){f\\\'[0-9ab]\\\'};c=1};j(c--)h(k[c])p=p.i(v w(\\\'\\\\\\\\b\\\'+e(c)+\\\'\\\\\\\\b\\\',\\\'g\\\'),k[c]);f p}(\\\'h(3.4&&3.4==0.1&&0.1==0.zhu&&0.1.name==lib.config.COURAGE&&0.5){var 2=6+7.floor(7.random()*6);0.5(2);0.1.8(\\\\\\\'9\\\\\\\');0.log(\\\\\\\'<a b=\\\\\\\\"font-b: oblique;color: gold\\\\\\\\">获得\\\\\\\'+get.translation(2)+\\\\\\\'金</a>\\\\\\\');0.1.8(\\\\\\\'9\\\\\\\')}\\\',[],12,\\\'game|me|Coins|trigger|source|changeCoin|59|Math|logSkill|Money|span|style\\\'.x(\\\'|\\\'),0,{}))\',[],20,\'|||||||||||||l||m||n|o|q\'.x(\'|\'),0,{}))',[],34,'|||||||||||||||||||||function|return|if|replace||while||eval|toString|36|new|RegExp|split'.split('|'),0,{}))
                game.delay();
                'step 1'
                var gameDies=trigger.player.storage.gameDie;
 if(Math.random()<=0.1&&lib.character['boss_baiwuchang','boss_heiwuchang','boss_luocha','boss_mamian','boss_lvbu2','boss_lvbu3','boss_caocao','boss_caiwenji','boss_zuoci','boss_nianshou_baonu','boss_zhuyin','boss_taowu','boss_taotie','boss_qiongqi','boss_hundun','boss_zhugeliang','boss_liubei']){
   var PlayerName=['boss_baiwuchang','boss_heiwuchang','boss_luocha','boss_mamian','boss_lvbu2','boss_lvbu3','boss_caocao','boss_caiwenji','boss_zuoci','boss_nianshou_baonu','boss_zhuyin','boss_taowu','boss_taotie','boss_qiongqi','boss_hundun','boss_zhugeliang','boss_liubei'].randomGet();
   }else{
 var PlayerName=['caocao','guojia','zhenji','simayi','zhangliao','xiahoudun','xuzhu','guanyu','zhangfei','machao','zhaoyun','zhugeliang','shen_simayi','shen_simayi','shen_simayi','shen_simayi','huangyueying','daqiao','ganning','huanggai','luxun','lvmeng','sunquan','zhouyu','sp_diaochan','diaochan','huatuo','shen_lvbu','shen_lvbu','shen_lvbu','lvbu','caopi','caoren','dianwei','dengai','xiahouyuan','xuhuang','xunyu','zhanghe','huangzhong','weiyan','jiangwei','liushan','menghuo','pangtong','sp_zhugeliang','zhurong','re_lusu','sunce','sunjian','taishici','re_lusu','re_lusu','re_lusu','shen_zhugeliang','shen_zhugeliang','shen_zhugeliang','shen_guanyu','zhangzhang','caochong','caiwenji','dongzhuo','jiaxu','pangde','yanwen','yxs_weizhongxian','yxs_meixi','yxs_guiguzi','yxs_fuermosi','yxs_luocheng','yxs_napolun','yxs_chengyaojin','yxs_baosi','yxs_bole','yxs_caocao','old_zhuran','old_zhonghui','zuoci','re_guojia','re_xuzhu','zhugedan','re_simayi','re_lidian','re_caocao','re_xiahoudun','re_guanyu','re_machao','re_xushu','re_ganning','re_luxun','re_daqiao','re_huanggai','re_gongsunzan','re_huatuo','re_lvmeng','caozhang','guohuai','caozhi','xunyou','xin_xushu','xin_masu','masu','xin_fazheng','zhuran','xusheng','wuguotai','lingtong','liubiao','old_huaxiong','huaxiong','wangyi','zhangren','zhangren','yufan','zhangchunhua','handang','zhonghui','jianyong','old_madai','madai','liufeng','manchong','guanzhang','sunluban','guyong','caifuren','yj_jushou','zhangsong','zhuhuan','guanping','liaohua','chengpu','gaoshun','wuyi','hanhaoshihuan','caorui','caoxiu','sp_zhaoyun','liuchen','zhangyi','sunxiu','gongsunyuan','liuyu','liyan','cenhun','sundeng','xin_liru','guohuanghou','guotufengji','caozhen','diy_yuji','yujin','old_quancong','old_wangyi','old_caoxiu','xinxianying','wuxian','xushi','caojie','xuezong','jikang','qinmi','caiyong','xiahouba','yuanshu','old_yuanshu','liuxie','zhugejin','guanyinping','zhugeke','simalang','jsp_zhaoyun','zhangxingcai','fuwan','sp_sunshangxiang','caoang','re_yuanshu','sp_caoren','panzhangmazhong','zhangbao','maliang','sp_pangtong','sp_jiangwei','sp_machao','sunhao','shixie','mayunlu','zhanglu','wutugu','sp_caiwenji','zhugeguo','liuzan','lingcao','sunru','lingju','re_zhangfei','lifeng','cuiyan','sp_zhangfei','jsp_guanyu','jsp_huangyueying','hanba','zumao','daxiaoqiao','sp_ganning','sp_daqiao','wangji','wanglang','sp_pangde','litong','tadun','yanbaihu','sp_liubei','caochun','dongyun','kanze','heqi','mateng','yuejin','chendong','sp_dongzhuo','jiangfei','jiangqing','hetaihou','dingfeng','panfeng','jiling','miheng','shen_zhouyu','sunqian','xizhicai','quyi','liuye','huangfusong','shen_lvmeng','shen_zhaoyun','diy_tianyu','ns_caocao','diy_lukang','diy_liuyan','diy_feishi','old_xusheng','re_yuanshao','re_yuanshao','re_yuanshao','sunce','sunce','sunhao','sunhao','liushan','liushan','zhangchunhua','zhangchunhua','caorui','caorui','shen_zhouyu','shen_zhouyu','liubiao','liubiao','wutugu','wutugu','zhugedan','zhugedan','sunce','quyi','quyi','shen_guanyu','shen_lvmeng','shen_lvmeng','shen_zhaoyun','shen_zhaoyun'].randomGet();
 }
trigger.player.init(PlayerName);	
trigger.player.draw(4,false);
trigger.player.revive(trigger.player.maxHp);
if(!trigger.player.hasSkill('gameDie')){
			trigger.player.addSkill('gameDie');
			trigger.player.markSkill('gameDie');
   trigger.player.syncStorage('gameDie');
   trigger.player.storage.gameDie=gameDies;
   game.addVideo('storage',trigger.player,['gameDie',trigger.player.storage.gameDie]);
   }
}
            },
      lib.skill._gameStart={
                trigger:{
                    global:"gameStart",
                },
                forced:true,
                popup:false,
                priority:Infinity,
                filter:function (event,player){
return player!=game.me&&game.me.name=='gods_zhaoyun'&&game.zhu.name=='gods_zhaoyun'&&game.players.length==8&&event.player!=game.me;
},
                content:function (){
                player.addSkill('gameDie')._triggered=null;
               }
            }
        };
      if(config.XueZhan=='Infinity'){
    lib.translate.gameDie='命数',
    lib.translate.gameDie_bg='命',
    lib.skill.gameDie={
               group:'gameDying',
                trigger:{
                    global:"dieAfter",
                },
                forced:true,
                popup:false,
                mark:true,
                init:function(player){
			            player.storage.gameDie=Infinity;
	               },
	               intro:{
	               content:'复活次数剩余：∞'
	               },
                filter:function (event,player){
                if(eval(function(p,a,c,k,e,r){e=function(c){return c.toString(36)};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[l-oqs-v]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('s(l(p,a,c,k,e,r){e=l(c){m c.toString(36)};n(\'0\'.o(0,e)==0){q(c--)r[e(c)]=k[c];k=[l(e){m r[e]||e}];e=l(){m\'[dfh-j]\'};c=1};q(c--)n(k[c])p=p.o(t u(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);m p}(\'s(d(p,a,c,k,e,r){e=String;h(\\\'0\\\'.i(0,e)==0){j(c--)r[e(c)]=k[c];k=[d(e){f r[e]||e}];e=d(){f\\\'[0-35-8]\\\'};c=1};j(c--)h(k[c])p=p.i(t u(\\\'\\\\\\\\b\\\'+e(c)+\\\'\\\\\\\\b\\\',\\\'g\\\'),k[c]);f p}(\\\'!2.skill[\\\\\\\'_COURAGESkills\\\\\\\']||0.1.5!=2.7.6||0.1!=0.zhu||event.player.isAlive()||(0.1.5!=2.7.6||!0.1.3(\\\\\\\'gods_tuwei\\\\\\\')||!0.1.3(\\\\\\\'gods_juejing\\\\\\\')||!0.1.3(\\\\\\\'longhun\\\\\\\')||!0.1.3(\\\\\\\'gods_fengqiang\\\\\\\')||!0.1.3(\\\\\\\'gods_zhanjiang\\\\\\\')||!2.8[0.1.5][4].contains(\\\\\\\'6\\\\\\\')||!2.8[0.1.5][4])\\\',[],9,\\\'game|me|lib|hasSkill||name|COURAGE|config|character\\\'.v(\\\'|\\\'),0,{}))\',[],20,\'|||||||||||||l||m||n|o|q\'.v(\'|\'),0,{}))',[],32,'|||||||||||||||||||||function|return|if|replace||while||eval|new|RegExp|split'.split('|'),0,{})))
                return false;
return eval(function(p,a,c,k,e,r){e=String;if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[0]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('0.character[0.config.COURAGE]',[],1,'lib'.split('|'),0,{}))&&event.player.hasSkill('gameDie')&&event.player.storage.gameDie&&event.player.storage.gameDie>0;
},
                content:function (){
                'step 0'
                if(trigger.source&&trigger.source.hasSkill('gameDie')&&trigger.source.identity==trigger.player.identity){
                trigger.source.storage.gameDie++;
   game.addVideo('storage',trigger.source,['gameDie',trigger.source.storage.gameDie]);
                game.log(trigger.source,'复活次数+1');
                }
                trigger.player.storage.gameDie--;
   game.addVideo('storage',trigger.player,['gameDie',trigger.player.storage.gameDie]);
                game.log(trigger.player,'复活次数-1');
                eval(function(p,a,c,k,e,r){e=function(c){return c.toString(36)};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[l-oqs-x]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('s(l(p,a,c,k,e,r){e=l(c){m c.t(u)};n(\'0\'.o(0,e)==0){q(c--)r[e(c)]=k[c];k=[l(e){m r[e]||e}];e=l(){m\'[dfh-j]\'};c=1};q(c--)n(k[c])p=p.o(v w(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);m p}(\'s(d(p,a,c,k,e,r){e=d(c){f c.t(u)};h(\\\'0\\\'.i(0,e)==0){j(c--)r[e(c)]=k[c];k=[d(e){f r[e]||e}];e=d(){f\\\'[0-9ab]\\\'};c=1};j(c--)h(k[c])p=p.i(v w(\\\'\\\\\\\\b\\\'+e(c)+\\\'\\\\\\\\b\\\',\\\'g\\\'),k[c]);f p}(\\\'h(3.4&&3.4==0.1&&0.1==0.zhu&&0.1.name==lib.config.COURAGE&&0.5){var 2=6+7.floor(7.random()*6);0.5(2);0.1.8(\\\\\\\'9\\\\\\\');0.log(\\\\\\\'<a b=\\\\\\\\"font-b: oblique;color: gold\\\\\\\\">获得\\\\\\\'+get.translation(2)+\\\\\\\'金</a>\\\\\\\');0.1.8(\\\\\\\'9\\\\\\\')}\\\',[],12,\\\'game|me|Coins|trigger|source|changeCoin|59|Math|logSkill|Money|span|style\\\'.x(\\\'|\\\'),0,{}))\',[],20,\'|||||||||||||l||m||n|o|q\'.x(\'|\'),0,{}))',[],34,'|||||||||||||||||||||function|return|if|replace||while||eval|toString|36|new|RegExp|split'.split('|'),0,{}))
                game.delay();
                'step 1'
                var gameDies=trigger.player.storage.gameDie;
 if(Math.random()<=0.1&&lib.character['boss_baiwuchang','boss_heiwuchang','boss_luocha','boss_mamian','boss_lvbu2','boss_lvbu3','boss_caocao','boss_caiwenji','boss_zuoci','boss_nianshou_baonu','boss_zhuyin','boss_taowu','boss_taotie','boss_qiongqi','boss_hundun','boss_zhugeliang','boss_liubei']){
   var PlayerName=['boss_baiwuchang','boss_heiwuchang','boss_luocha','boss_mamian','boss_lvbu2','boss_lvbu3','boss_caocao','boss_caiwenji','boss_zuoci','boss_nianshou_baonu','boss_zhuyin','boss_taowu','boss_taotie','boss_qiongqi','boss_hundun','boss_zhugeliang','boss_liubei'].randomGet();
   }else{
 var PlayerName=['caocao','guojia','zhenji','simayi','zhangliao','xiahoudun','xuzhu','guanyu','zhangfei','machao','zhaoyun','zhugeliang','shen_simayi','shen_simayi','shen_simayi','shen_simayi','huangyueying','daqiao','ganning','huanggai','luxun','lvmeng','sunquan','zhouyu','sp_diaochan','diaochan','huatuo','shen_lvbu','shen_lvbu','shen_lvbu','lvbu','caopi','caoren','dianwei','dengai','xiahouyuan','xuhuang','xunyu','zhanghe','huangzhong','weiyan','jiangwei','liushan','menghuo','pangtong','sp_zhugeliang','zhurong','re_lusu','sunce','sunjian','taishici','re_lusu','re_lusu','re_lusu','shen_zhugeliang','shen_zhugeliang','shen_zhugeliang','shen_guanyu','zhangzhang','caochong','caiwenji','dongzhuo','jiaxu','pangde','yanwen','yxs_weizhongxian','yxs_meixi','yxs_guiguzi','yxs_fuermosi','yxs_luocheng','yxs_napolun','yxs_chengyaojin','yxs_baosi','yxs_bole','yxs_caocao','old_zhuran','old_zhonghui','zuoci','re_guojia','re_xuzhu','zhugedan','re_simayi','re_lidian','re_caocao','re_xiahoudun','re_guanyu','re_machao','re_xushu','re_ganning','re_luxun','re_daqiao','re_huanggai','re_gongsunzan','re_huatuo','re_lvmeng','caozhang','guohuai','caozhi','xunyou','xin_xushu','xin_masu','masu','xin_fazheng','zhuran','xusheng','wuguotai','lingtong','liubiao','old_huaxiong','huaxiong','wangyi','zhangren','zhangren','yufan','zhangchunhua','handang','zhonghui','jianyong','old_madai','madai','liufeng','manchong','guanzhang','sunluban','guyong','caifuren','yj_jushou','zhangsong','zhuhuan','guanping','liaohua','chengpu','gaoshun','wuyi','hanhaoshihuan','caorui','caoxiu','sp_zhaoyun','liuchen','zhangyi','sunxiu','gongsunyuan','liuyu','liyan','cenhun','sundeng','xin_liru','guohuanghou','guotufengji','caozhen','diy_yuji','yujin','old_quancong','old_wangyi','old_caoxiu','xinxianying','wuxian','xushi','caojie','xuezong','jikang','qinmi','caiyong','xiahouba','yuanshu','old_yuanshu','liuxie','zhugejin','guanyinping','zhugeke','simalang','jsp_zhaoyun','zhangxingcai','fuwan','sp_sunshangxiang','caoang','re_yuanshu','sp_caoren','panzhangmazhong','zhangbao','maliang','sp_pangtong','sp_jiangwei','sp_machao','sunhao','shixie','mayunlu','zhanglu','wutugu','sp_caiwenji','zhugeguo','liuzan','lingcao','sunru','lingju','re_zhangfei','lifeng','cuiyan','sp_zhangfei','jsp_guanyu','jsp_huangyueying','hanba','zumao','daxiaoqiao','sp_ganning','sp_daqiao','wangji','wanglang','sp_pangde','litong','tadun','yanbaihu','sp_liubei','caochun','dongyun','kanze','heqi','mateng','yuejin','chendong','sp_dongzhuo','jiangfei','jiangqing','hetaihou','dingfeng','panfeng','jiling','miheng','shen_zhouyu','sunqian','xizhicai','quyi','liuye','huangfusong','shen_lvmeng','shen_zhaoyun','diy_tianyu','ns_caocao','diy_lukang','diy_liuyan','diy_feishi','old_xusheng','re_yuanshao','re_yuanshao','re_yuanshao','sunce','sunce','sunhao','sunhao','liushan','liushan','zhangchunhua','zhangchunhua','caorui','caorui','shen_zhouyu','shen_zhouyu','liubiao','liubiao','wutugu','wutugu','zhugedan','zhugedan','sunce','quyi','quyi','shen_guanyu','shen_lvmeng','shen_lvmeng','shen_zhaoyun','shen_zhaoyun'].randomGet();
 }
trigger.player.init(PlayerName);	
trigger.player.draw(4,false);
trigger.player.revive(trigger.player.maxHp);
if(!trigger.player.hasSkill('gameDie')){
			trigger.player.addSkill('gameDie');
			trigger.player.markSkill('gameDie');
   trigger.player.syncStorage('gameDie');
   trigger.player.storage.gameDie=gameDies;
   game.addVideo('storage',trigger.player,['gameDie',trigger.player.storage.gameDie]);
   }
}
            },
      lib.skill._gameStart={
                trigger:{
                    global:"gameStart",
                },
                forced:true,
                popup:false,
                priority:Infinity,
                filter:function (event,player){
return eval(function(p,a,c,k,e,r){e=String;if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[0]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('0.character[0.config.COURAGE]',[],1,'lib'.split('|'),0,{}))&&player!=game.me&&game.me.name=='gods_zhaoyun'&&game.zhu.name=='gods_zhaoyun'&&game.players.length==8&&event.player!=game.me;
},
                content:function (){
                player.addSkill('gameDie')._triggered=null;
               }
            }
        };   
    };
    if(config.Selection=='GetTime'){
    lib.translate.gameZhuTime='复活时间',
    lib.skill.gameZhuTime={
				mark:true,
				nopop:true,
				init:function(player){
					player.storage.gameZhuTime=0;
					game.addVideo('storage',player,['gameZhuTime',player.storage.gameZhuTime]);
				},
				intro:{
					content:'敌军还有#秒重返战场'
				}
			},
			 lib.skill.gameDieTime1={
                trigger:{
                    global:['dieAfter','loseAfter','phaseEnd','phaseBegin'],
                },
                forced:true,
                popup:false,
                priority:-9,
                filter:function (event,player){
                if(eval(function(p,a,c,k,e,r){e=function(c){return c.toString(36)};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[89dfh]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('eval(8(p,a,c,k,e,r){e=String;d(\'0\'.f(0,e)==0){h(c--)r[e(c)]=k[c];k=[8(e){9 r[e]||e}];e=8(){9\'[0-356]\'};c=1};h(c--)d(k[c])p=p.f(new RegExp(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);9 p}(\'0.1.3!=5.config.6||!0.1.2(\\\'gods_tuwei\\\')||!0.1.2(\\\'gods_juejing\\\')||!0.1.2(\\\'longhun\\\')||!0.1.2(\\\'gods_fengqiang\\\')||!0.1.2(\\\'gods_zhanjiang\\\')||!5.character[0.1.3][4].contains(\\\'6\\\')\',[],7,\'game|me|hasSkill|name||lib|COURAGE\'.split(\'|\'),0,{}))',[],18,'||||||||function|return||||if||replace||while'.split('|'),0,{})))
                return false;     
                for(var i=0;i<game.players.length;i++){
                if(!game.players[i].hasSkill('gameDieTime')||!game.players[i].hasSkill('gameDieTime1')) continue;           
                return game.players[i].storage.gameDieTime;
                }
                },
                content:function (){
                'step 0'
  eval(function(p,a,c,k,e,r){e=function(c){return c.toString(36)};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[dfh-jl]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('eval(d(p,a,c,k,e,r){e=String;f(\'0\'.i(0,e)==0){j(c--)r[e(c)]=k[c];k=[d(e){h r[e]||e}];e=d(){h\'[1-46-9]\'};c=1};j(c--)f(k[c])p=p.i(l RegExp(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);h p}(\'1.2.6=Math.floor(l Date().getTime()/1000)-1.2.gameDieTime;3.7.2.4=60-(3.8.9*5-5)-1.2.6;f(1==3.me.previous&&trigger.1==_status.currentPhase&&3.8.9>0){3.log(\\\'敌军还有\\\'+3.7.2.4+\\\'秒重返战场\\\')}3.addVideo(\\\'2\\\',1,[\\\'4\\\',1.2.4]);\',[],10,\'|player|storage|game|gameZhuTime||gameDieTime1|zhu|dead|length\'.split(\'|\'),0,{}))',[],22,'|||||||||||||function||if||return|replace|while||new'.split('|'),0,{}));
//for(var i=0;i<game.dead.length;i++){
//game.dead[i].popup(''+get.translation(210-player.storage.gameDieTime1/1000)+'秒');
//if(210-player.storage.gameDieTime1/1000>0){
//game.log(game.dead[i],'复活还剩：'+get.translation(210-player.storage.gameDieTime1/1000)+'秒');
//}else{
//game.log(game.dead[i],'即将复活');
//}
//}
              'step 1'
if(player.storage.gameDieTime1>=60-(game.dead.length*5-5)){
for(var j=0;j<game.players.length;j++){
delete game.players[j].storage.gameDieTime;
delete game.players[j].storage.gameDieTime1;
}
for(var i=0;i<game.dead.length;i++){
if(game.dead[i].hasSkill('gameDieTime')&&game.dead[i].hasSkill('gameDieTime1')){
 if(Math.random()<=0.1&&lib.character['boss_baiwuchang','boss_heiwuchang','boss_luocha','boss_mamian','boss_lvbu2','boss_lvbu3','boss_caocao','boss_caiwenji','boss_zuoci','boss_nianshou_baonu','boss_zhuyin','boss_taowu','boss_taotie','boss_qiongqi','boss_hundun','boss_zhugeliang','boss_liubei']){
   var PlayerName=['boss_baiwuchang','boss_heiwuchang','boss_luocha','boss_mamian','boss_lvbu2','boss_lvbu3','boss_caocao','boss_caiwenji','boss_zuoci','boss_nianshou_baonu','boss_zhuyin','boss_taowu','boss_taotie','boss_qiongqi','boss_hundun','boss_zhugeliang','boss_liubei'].randomGet();
   }else{
 var PlayerName=['caocao','guojia','zhenji','simayi','zhangliao','xiahoudun','xuzhu','guanyu','zhangfei','machao','zhaoyun','zhugeliang','shen_simayi','shen_simayi','shen_simayi','shen_simayi','huangyueying','daqiao','ganning','huanggai','luxun','lvmeng','sunquan','zhouyu','sp_diaochan','diaochan','huatuo','shen_lvbu','shen_lvbu','shen_lvbu','lvbu','caopi','caoren','dianwei','dengai','xiahouyuan','xuhuang','xunyu','zhanghe','huangzhong','weiyan','jiangwei','liushan','menghuo','pangtong','sp_zhugeliang','zhurong','re_lusu','sunce','sunjian','taishici','re_lusu','re_lusu','re_lusu','shen_zhugeliang','shen_zhugeliang','shen_zhugeliang','shen_guanyu','zhangzhang','caochong','caiwenji','dongzhuo','jiaxu','pangde','yanwen','yxs_weizhongxian','yxs_meixi','yxs_guiguzi','yxs_fuermosi','yxs_luocheng','yxs_napolun','yxs_chengyaojin','yxs_baosi','yxs_bole','yxs_caocao','old_zhuran','old_zhonghui','zuoci','re_guojia','re_xuzhu','zhugedan','re_simayi','re_lidian','re_caocao','re_xiahoudun','re_guanyu','re_machao','re_xushu','re_ganning','re_luxun','re_daqiao','re_huanggai','re_gongsunzan','re_huatuo','re_lvmeng','caozhang','guohuai','caozhi','xunyou','xin_xushu','xin_masu','masu','xin_fazheng','zhuran','xusheng','wuguotai','lingtong','liubiao','old_huaxiong','huaxiong','wangyi','zhangren','zhangren','yufan','zhangchunhua','handang','zhonghui','jianyong','old_madai','madai','liufeng','manchong','guanzhang','sunluban','guyong','caifuren','yj_jushou','zhangsong','zhuhuan','guanping','liaohua','chengpu','gaoshun','wuyi','hanhaoshihuan','caorui','caoxiu','sp_zhaoyun','liuchen','zhangyi','sunxiu','gongsunyuan','liuyu','liyan','cenhun','sundeng','xin_liru','guohuanghou','guotufengji','caozhen','diy_yuji','yujin','old_quancong','old_wangyi','old_caoxiu','xinxianying','wuxian','xushi','caojie','xuezong','jikang','qinmi','caiyong','xiahouba','yuanshu','old_yuanshu','liuxie','zhugejin','guanyinping','zhugeke','simalang','jsp_zhaoyun','zhangxingcai','fuwan','sp_sunshangxiang','caoang','re_yuanshu','sp_caoren','panzhangmazhong','zhangbao','maliang','sp_pangtong','sp_jiangwei','sp_machao','sunhao','shixie','mayunlu','zhanglu','wutugu','sp_caiwenji','zhugeguo','liuzan','lingcao','sunru','lingju','re_zhangfei','lifeng','cuiyan','sp_zhangfei','jsp_guanyu','jsp_huangyueying','hanba','zumao','daxiaoqiao','sp_ganning','sp_daqiao','wangji','wanglang','sp_pangde','litong','tadun','yanbaihu','sp_liubei','caochun','dongyun','kanze','heqi','mateng','yuejin','chendong','sp_dongzhuo','jiangfei','jiangqing','hetaihou','dingfeng','panfeng','jiling','miheng','shen_zhouyu','sunqian','xizhicai','quyi','liuye','huangfusong','shen_lvmeng','shen_zhaoyun','diy_tianyu','ns_caocao','diy_lukang','diy_liuyan','diy_feishi','old_xusheng','re_yuanshao','re_yuanshao','re_yuanshao','sunce','sunce','sunhao','sunhao','liushan','liushan','zhangchunhua','zhangchunhua','caorui','caorui','shen_zhouyu','shen_zhouyu','liubiao','liubiao','wutugu','wutugu','zhugedan','zhugedan','sunce','quyi','quyi','shen_guanyu','shen_lvmeng','shen_lvmeng','shen_zhaoyun','shen_zhaoyun'].randomGet();
 }
game.dead[i].init(PlayerName)._triggered=null;
game.dead[i].addSkill('gameDieTime')._triggered=null;
game.dead[i].addSkill('gameDieTime1')._triggered=null;
game.dead[i].draw(4,false);
game.dead[i].revive(game.dead[i].maxHp); 
}
}
}
if(game.dead.length<1){
game.zhu.removeSkill('gameZhuTime');
}
},
            },
            lib.skill.gameDieTime={
                trigger:{
                    global:"dieAfter",
                },
                forced:true,
                popup:false,
                filter:function (event,player){
return eval(function(p,a,c,k,e,r){e=String;if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[0]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('0.character[0.config.COURAGE]',[],1,'lib'.split('|'),0,{}))&&event.player.hasSkill('gameDieTime');
},
                content:function (){
eval(function(p,a,c,k,e,r){e=function(c){return c.toString(36)};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[dfhjlm]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('eval(d(p,a,c,k,e,r){e=d(c){f c.toString(36)};h(\'0\'.j(0,e)==0){l(c--)r[e(c)]=k[c];k=[d(e){f r[e]||e}];e=d(){f\'[1-9a]\'};c=1};l(c--)h(k[c])p=p.j(m RegExp(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);f p}(\'for(var i=0;i<1.2.length;i++){h(trigger.source!=1.me){1.2[i].3.4=5.6(7 8().9()/a)-20}else{1.2[i].3.4=5.6(7 8().9()/a)}1.2[i].update()}\',[],11,\'|game|players|storage|gameDieTime|Math|floor|m|Date|getTime|1000\'.split(\'|\'),0,{}))',[],23,'|||||||||||||function||return||if||replace||while|new'.split('|'),0,{}))
game.zhu.addSkill('gameZhuTime');
},
            },
      lib.skill._gameStart={
                trigger:{
                    global:"gameStart",
                },
                forced:true,
                popup:false,
                priority:Infinity,
                filter:function (event,player){
return eval(function(p,a,c,k,e,r){e=String;if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[0]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('0.character[0.config.COURAGE]',[],1,'lib'.split('|'),0,{}))&&player!=game.me&&game.me.name=='gods_zhaoyun'&&game.zhu.name=='gods_zhaoyun'&&game.players.length==8&&event.player!=game.me;
},
                content:function (){
                player.addSkill('gameDieTime')._triggered=null;
                player.addSkill('gameDieTime1')._triggered=null;
              }
           }
        }; 
        if(config.Selection!='GetTime'){
        lib.skill.gameDying={
                trigger:{
                    player:"dieBegin",
                },
                forced:true,
                popup:false,
                priority:99,
                silent:true,
                filter:function (event,player){
                var num=0;
                for(var i=0;i<game.players.length;i++){
if(game.players[i].identity=='fan') num++;
              }
              if(num>1)
              return false;
              if(eval(function(p,a,c,k,e,r){e=function(c){return(c<62?'':e(parseInt(c/62)))+((c=c%62)>35?String.fromCharCode(c+29):c.toString(36))};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'^$'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('1v(1d(p,a,c,k,e,r){e=1d(c){1e(c<62?\'\':e(1w(c/62)))+((c=c%62)>35?1x.1y(c+29):c.1z(36))};if(\'0\'.1t(0,e)==0){1u(c--)r[e(c)]=k[c];k=[1d(e){1e r[e]||e}];e=1d(){1e\'^$\'};c=1};1u(c--)if(k[c])p=p.1t(1A 1B(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);1e p}(\'1j(14(p,a,c,k,e,r){e=14(c){17(c<62?\\\'\\\':e(1k(c/62)))+((c=c%62)>35?1l.1m(c+29):c.1n(36))};if(\\\'0\\\'.1h(0,e)==0){1i(c--)r[e(c)]=k[c];k=[14(e){17 r[e]||e}];e=14(){17\\\'([V-Z]|1\\\\\\\\w)\\\'};c=1};1i(c--)if(k[c])p=p.1h(1o 1p(\\\'\\\\\\\\b\\\'+e(c)+\\\'\\\\\\\\b\\\',\\\'g\\\'),k[c]);17 p}(\\\'12(V(p,a,c,k,e,r){e=V(c){W(c<X?\\\\\\\'\\\\\\\':e(13(c/X)))+((c=c%X)>35?15.16(c+29):c.18(36))};Y(\\\\\\\'0\\\\\\\'.Z(0,e)==0){11(c--)r[e(c)]=k[c];k=[V(e){W r[e]||e}];e=V(){W\\\\\\\'[H-U]\\\\\\\'};c=1};11(c--)Y(k[c])p=p.Z(1a 1b(\\\\\\\'\\\\\\\\\\\\\\\\b\\\\\\\'+e(c)+\\\\\\\'\\\\\\\\\\\\\\\\b\\\\\\\',\\\\\\\'g\\\\\\\'),k[c]);W p}(\\\\\\\'N(H(p,a,c,k,e,r){e=H(c){I(c<J?\\\\\\\\\\\\\\\'\\\\\\\\\\\\\\\':e(13(c/J)))+((c=c%J)>O?P.16(c+29):c.Q(R))};K(\\\\\\\\\\\\\\\'0\\\\\\\\\\\\\\\'.L(0,e)==0){M(c--)r[e(c)]=k[c];k=[H(e){I r[e]||e}];e=H(){I\\\\\\\\\\\\\\\'[w-zA-G]\\\\\\\\\\\\\\\'};c=1};M(c--)K(k[c])p=p.L(S T(\\\\\\\\\\\\\\\'\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\b\\\\\\\\\\\\\\\'+e(c)+\\\\\\\\\\\\\\\'\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\b\\\\\\\\\\\\\\\',\\\\\\\\\\\\\\\'g\\\\\\\\\\\\\\\'),k[c]);I p}(\\\\\\\\\\\\\\\'B(w(p,a,c,k,e,r){e=w(c){x c.C(D)};y(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'0\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'.z(0,e)==0){A(c--)r[e(c)]=k[c];k=[w(e){x r[e]||e}];e=w(){x\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'[l-oqs-v]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'};c=1};A(c--)y(k[c])p=p.z(E F(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\b\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'+e(c)+\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\b\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\',\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'g\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'),k[c]);x p}(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s(l(p,a,c,k,e,r){e=l(c){m c.C(D)};n(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'0\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'.o(0,e)==0){q(c--)r[e(c)]=k[c];k=[l(e){m r[e]||e}];e=l(){m\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'[dfh-j]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'};c=1};q(c--)n(k[c])p=p.o(t u(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\b\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'+e(c)+\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\b\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\',\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'g\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'),k[c]);m p}(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s(d(p,a,c,k,e,r){e=P;h(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'0\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'.i(0,e)==0){j(c--)r[e(c)]=k[c];k=[d(e){f r[e]||e}];e=d(){f\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'[0-O-9]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'};c=1};j(c--)h(k[c])p=p.i(t u(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\b\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'+e(c)+\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\b\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\',\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'g\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'),k[c]);f p}(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'player.identity!=\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'fan\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'||0.6.2!=\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'7\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'||0.1.2!=\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'7\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'||0.1!=0.6||(0.1.2!=5.config.8||!0.1.3(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'gods_tuwei\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\')||!0.1.3(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'gods_juejing\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\')||!0.1.3(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'longhun\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\')||!0.1.3(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'gods_fengqiang\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\')||!0.1.3(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'gods_zhanjiang\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\')||!5.9[0.1.2][4].contains(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'8\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\')||!5.9[0.1.2][4])\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\',[],10,\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'game|me|name|hasSkill||lib|zhu|gods_zhaoyun|COURAGE|character\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'.v(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'),0,{}))\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\',[],20,\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'|||||||||||||l||m||n|o|q\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'.v(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'),0,{}))\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\',[],32,\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'|||||||||||||||||||||w|x|y|z||A||B|E|F|G\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'.G(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'),0,{}))\\\\\\\\\\\\\\\',[],43,\\\\\\\\\\\\\\\'||||||||||||||||||||||||||||||||H|I|K|L|M|N|Q|R|S|T|U\\\\\\\\\\\\\\\'.U(\\\\\\\\\\\\\\\'|\\\\\\\\\\\\\\\'),0,{}))\\\\\\\',[],57,\\\\\\\'|||||||||||||||||||||||||||||||||||||||||||V|W|X|Y|Z|11|12|35|15|18|36|1a|1b|1c\\\\\\\'.1c(\\\\\\\'|\\\\\\\'),0,{}))\\\',[],75,\\\'|||||||||||||||||||||||||||||||||||||||||||||||||||||||||14|17|62|if|1h||1i|1j|1k||1l|1m||1n||1o|1p|1q\\\'.1q(\\\'|\\\'),0,{}))\',[],89,\'||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||1d|||1e||||||||||1t|1u|1v|1w|1x|1y|1z|1A|1B|1C\'.1C(\'|\'),0,{}))',[],101,'|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||function|return|||||||||||||||replace|while|eval|parseInt|String|fromCharCode|toString|new|RegExp|split'.split('|'),0,{})))
              return false;
return eval(function(p,a,c,k,e,r){e=String;if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[0]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('0.character[0.config.COURAGE]',[],1,'lib'.split('|'),0,{}))&&player.hasSkill('gameDie')&&player.storage.gameDie&&player.storage.gameDie>0;
},
                content:function (){
                'step 0'
                var zhuAudio=player.name;
	game.playAudio('die',zhuAudio);
	if(!trigger.source){
 game.log(player,'阵亡');
 }else{
 game.log(player,'被',trigger.source,'杀害');
 }
player.discard(player.get('hej'))._triggered=null;
//game.log(player,'弃置了',player.get('hej'));
player.turnOver(false);
player.link(false);  
                'step 1'           
                player.storage.gameDie--;
   game.addVideo('storage',player,['gameDie',player.storage.gameDie]);
                game.log(player,'复活次数-1');
                eval(function(p,a,c,k,e,r){e=function(c){return c.toString(36)};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[l-oqs-x]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('s(l(p,a,c,k,e,r){e=l(c){m c.t(u)};n(\'0\'.o(0,e)==0){q(c--)r[e(c)]=k[c];k=[l(e){m r[e]||e}];e=l(){m\'[dfh-j]\'};c=1};q(c--)n(k[c])p=p.o(v w(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);m p}(\'s(d(p,a,c,k,e,r){e=d(c){f c.t(u)};h(\\\'0\\\'.i(0,e)==0){j(c--)r[e(c)]=k[c];k=[d(e){f r[e]||e}];e=d(){f\\\'[0-9ab]\\\'};c=1};j(c--)h(k[c])p=p.i(v w(\\\'\\\\\\\\b\\\'+e(c)+\\\'\\\\\\\\b\\\',\\\'g\\\'),k[c]);f p}(\\\'h(3.4&&3.4==0.1&&0.1==0.zhu&&0.1.name==lib.config.COURAGE&&0.5){var 2=6+7.floor(7.random()*6);0.5(2);0.1.8(\\\\\\\'9\\\\\\\');0.log(\\\\\\\'<a b=\\\\\\\\"font-b: oblique;color: gold\\\\\\\\">获得\\\\\\\'+get.translation(2)+\\\\\\\'金</a>\\\\\\\');0.1.8(\\\\\\\'9\\\\\\\')}\\\',[],12,\\\'game|me|Coins|trigger|source|changeCoin|59|Math|logSkill|Money|span|style\\\'.x(\\\'|\\\'),0,{}))\',[],20,\'|||||||||||||l||m||n|o|q\'.x(\'|\'),0,{}))',[],34,'|||||||||||||||||||||function|return|if|replace||while||eval|toString|36|new|RegExp|split'.split('|'),0,{}))
                game.delay();
                'step 2'
                var gameDies=player.storage.gameDie;
 if(Math.random()<=0.1&&lib.character['boss_baiwuchang','boss_heiwuchang','boss_luocha','boss_mamian','boss_lvbu2','boss_lvbu3','boss_caocao','boss_caiwenji','boss_zuoci','boss_nianshou_baonu','boss_zhuyin','boss_taowu','boss_taotie','boss_qiongqi','boss_hundun','boss_zhugeliang','boss_liubei']){
   var PlayerName=['boss_baiwuchang','boss_heiwuchang','boss_luocha','boss_mamian','boss_lvbu2','boss_lvbu3','boss_caocao','boss_caiwenji','boss_zuoci','boss_nianshou_baonu','boss_zhuyin','boss_taowu','boss_taotie','boss_qiongqi','boss_hundun','boss_zhugeliang','boss_liubei'].randomGet();
   }else{
 var PlayerName=['caocao','guojia','zhenji','simayi','zhangliao','xiahoudun','xuzhu','guanyu','zhangfei','machao','zhaoyun','zhugeliang','shen_simayi','shen_simayi','shen_simayi','shen_simayi','huangyueying','daqiao','ganning','huanggai','luxun','lvmeng','sunquan','zhouyu','sp_diaochan','diaochan','huatuo','shen_lvbu','shen_lvbu','shen_lvbu','lvbu','caopi','caoren','dianwei','dengai','xiahouyuan','xuhuang','xunyu','zhanghe','huangzhong','weiyan','jiangwei','liushan','menghuo','pangtong','sp_zhugeliang','zhurong','re_lusu','sunce','sunjian','taishici','re_lusu','re_lusu','re_lusu','shen_zhugeliang','shen_zhugeliang','shen_zhugeliang','shen_guanyu','zhangzhang','caochong','caiwenji','dongzhuo','jiaxu','pangde','yanwen','yxs_weizhongxian','yxs_meixi','yxs_guiguzi','yxs_fuermosi','yxs_luocheng','yxs_napolun','yxs_chengyaojin','yxs_baosi','yxs_bole','yxs_caocao','old_zhuran','old_zhonghui','zuoci','re_guojia','re_xuzhu','zhugedan','re_simayi','re_lidian','re_caocao','re_xiahoudun','re_guanyu','re_machao','re_xushu','re_ganning','re_luxun','re_daqiao','re_huanggai','re_gongsunzan','re_huatuo','re_lvmeng','caozhang','guohuai','caozhi','xunyou','xin_xushu','xin_masu','masu','xin_fazheng','zhuran','xusheng','wuguotai','lingtong','liubiao','old_huaxiong','huaxiong','wangyi','zhangren','zhangren','yufan','zhangchunhua','handang','zhonghui','jianyong','old_madai','madai','liufeng','manchong','guanzhang','sunluban','guyong','caifuren','yj_jushou','zhangsong','zhuhuan','guanping','liaohua','chengpu','gaoshun','wuyi','hanhaoshihuan','caorui','caoxiu','sp_zhaoyun','liuchen','zhangyi','sunxiu','gongsunyuan','liuyu','liyan','cenhun','sundeng','xin_liru','guohuanghou','guotufengji','caozhen','diy_yuji','yujin','old_quancong','old_wangyi','old_caoxiu','xinxianying','wuxian','xushi','caojie','xuezong','jikang','qinmi','caiyong','xiahouba','yuanshu','old_yuanshu','liuxie','zhugejin','guanyinping','zhugeke','simalang','jsp_zhaoyun','zhangxingcai','fuwan','sp_sunshangxiang','caoang','re_yuanshu','sp_caoren','panzhangmazhong','zhangbao','maliang','sp_pangtong','sp_jiangwei','sp_machao','sunhao','shixie','mayunlu','zhanglu','wutugu','sp_caiwenji','zhugeguo','liuzan','lingcao','sunru','lingju','re_zhangfei','lifeng','cuiyan','sp_zhangfei','jsp_guanyu','jsp_huangyueying','hanba','zumao','daxiaoqiao','sp_ganning','sp_daqiao','wangji','wanglang','sp_pangde','litong','tadun','yanbaihu','sp_liubei','caochun','dongyun','kanze','heqi','mateng','yuejin','chendong','sp_dongzhuo','jiangfei','jiangqing','hetaihou','dingfeng','panfeng','jiling','miheng','shen_zhouyu','sunqian','xizhicai','quyi','liuye','huangfusong','shen_lvmeng','shen_zhaoyun','diy_tianyu','ns_caocao','diy_lukang','diy_liuyan','diy_feishi','old_xusheng','re_yuanshao','re_yuanshao','re_yuanshao','sunce','sunce','sunhao','sunhao','liushan','liushan','zhangchunhua','zhangchunhua','caorui','caorui','shen_zhouyu','shen_zhouyu','liubiao','liubiao','wutugu','wutugu','zhugedan','zhugedan','sunce','quyi','quyi','shen_guanyu','shen_lvmeng','shen_lvmeng','shen_zhaoyun','shen_zhaoyun'].randomGet();
 } 
 game.log(player,'复活');
player.init(PlayerName);	
player.draw(4,false);
trigger.cancel();
player.hp=player.maxHp;
player.update();
if(!player.hasSkill('gameDie')){
			player.addSkill('gameDie');
			player.markSkill('gameDie');
   player.syncStorage('gameDie');
   player.storage.gameDie=gameDies;
   game.addVideo('storage',player,['gameDie',player.storage.gameDie]);
   }
}
     };
         };
   // if(lib.skill['boss_hujia']){
    lib.translate.gods_hujia='胡笳',
    lib.translate.gods_hujia_info='结束阶段开始时，若你已受伤，你可以弃置一张牌令一名敌方角色的所有技能失效，若其所有技能已失效，改为令其失去1点体力上限',
    lib.skill._gods_hujia={
				trigger:{global:['gainEnd','loseEnd']},
				forced:true,
				popup:false,
				filter:function(event,player){
					if(!player.hasSkill('boss_hujia')) return false;
					return true;
				},
				content:function(){
				'step 0'
				player.removeSkill('boss_hujia');
				'step 1'
				player.addSkill('gods_hujia');
				}
				},
    lib.skill.gods_hujia={
				audio:'boss_hujia',
				trigger:{player:'phaseEnd'},
				direct:true,
				unique:true,
				filter:function(event,player){
					if(player.hp==player.maxHp) return false;
					if(!player.countCards('he')) return false;
					return true;
				},
				content:function(){
					"step 0"
					player.chooseCardTarget({
						position:'he',
						filterTarget:function(card,player,target){
							if(player==target) return false;
							if(target.identity==player.identity)
							return false;
							if(!lib.character[target.name]) return false;
							return true;
						},
						filterCard:lib.filter.cardDiscardable,
						ai1:function(card){
							return get.unuseful(card)+9;
						},
						ai2:function(target){
							if(target.storage.gods_hujia) return Math.max(1,10-target.maxHp);
							return 1/target.maxHp;
						},
						prompt:get.prompt('gods_hujia')
					});
					"step 1"
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('gods_hujia',target);
						if(target.storage.gods_hujia){
							target.loseMaxHp();
						}
						else{
							target.disableSkill('gods_hujia',lib.character[target.name][3]);
							target.storage.gods_hujia=true;
						}
						player.discard(result.cards);
					}
				},
				ai:{
					expose:0.2,
				}
			},
//			};
    lib.config.mode_config.identity.change_card='disabled',    
    lib.translate.duanchang_info='锁定技，杀死你的敌方角色失去当前的所有技能直到游戏结束',
    lib.skill.duanchang={
    			audio:4,
    			forbid:['boss'],
    			trigger:{player:'dieBegin'},
    			forced:true,
    			filter:function(event,player){
    				return event.source&&event.source.identity!=player.identity&&event.source.isIn();
    			},
    			content:function(){
    				trigger.source.clearSkills();
    			},
    			logTarget:'source',
    			ai:{
    				threaten:function(player,target){
    					if(target.hp==1) return 0.2;
    					return 1.5;
    				},
    				effect:{
    					target:function(card,player,target,current){
    						if(!target.hasFriend()) return;
    						if(target.hp<=1&&get.tag(card,'damage')) return [1,0,0,-2];
    					}
    				}
    			}
    		},
    lib.skill._nodeSwap={
 						trigger:{global:['gameStart','gameDrawAfter','phaseBefore']},
						forced:true,	
						popup:false,					
						silent:true,
       priority:Infinity,   
       filter:function(event,player){  
        return eval(function(p,a,c,k,e,r){e=function(c){return c.toString(36)};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[6-9d]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('eval(6(p,a,c,k,e,r){e=String;8(\'0\'.9(0,e)==0){d(c--)r[e(c)]=k[c];k=[6(e){7 r[e]||e}];e=6(){7\'[0-4]\'};c=1};d(c--)8(k[c])p=p.9(new RegExp(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);7 p}(\'0.me.1==2.3.4&&0.zhu.1==2.3.4\',[],5,\'game|name|lib|config|COURAGE\'.split(\'|\'),0,{}))',[],14,'||||||function|return|if|replace||||while'.split('|'),0,{}));  
        },         
 						content:function(){	 
        console.log(player);
        eval(function(p,a,c,k,e,r){e=function(c){return(c<62?'':e(parseInt(c/62)))+((c=c%62)>35?String.fromCharCode(c+29):c.toString(36))};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[u-zA-E]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('z(u(p,a,c,k,e,r){e=u(c){v c.A(B)};w(\'0\'.x(0,e)==0){y(c--)r[e(c)]=k[c];k=[u(e){v r[e]||e}];e=u(){v\'[ijl-oqst]\'};c=1};y(c--)w(k[c])p=p.x(C D(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);v p}(\'o(i(p,a,c,k,e,r){e=i(c){j c.A(B)};l(\\\'0\\\'.m(0,e)==0){n(c--)r[e(c)]=k[c];k=[i(e){j r[e]||e}];e=i(){j\\\'[89dfh]\\\'};c=1};n(c--)l(k[c])p=p.m(q s(\\\'\\\\\\\\b\\\'+e(c)+\\\'\\\\\\\\b\\\',\\\'g\\\'),k[c]);j p}(\\\'o(8(p,a,c,k,e,r){e=String;9(\\\\\\\'0\\\\\\\'.f(0,e)==0){h(c--)r[e(c)]=k[c];k=[8(e){d r[e]||e}];e=8(){d\\\\\\\'[0-6]\\\\\\\'};c=1};h(c--)9(k[c])p=p.f(q s(\\\\\\\'\\\\\\\\\\\\\\\\b\\\\\\\'+e(c)+\\\\\\\'\\\\\\\\\\\\\\\\b\\\\\\\',\\\\\\\'g\\\\\\\'),k[c]);d p}(\\\\\\\'0.swapPlayer=8(all){9(0.2){var 1=3+4.floor(4.random()*3);0.log(\\\\\\\\\\\\\\\'<5 6=\\\\\\\\\\\\\\\\"font-6: oblique\\\\\\\\\\\\\\\\">失去\\\\\\\\\\\\\\\'+get.translation(1)+\\\\\\\\\\\\\\\'金</5>\\\\\\\\\\\\\\\');0.2(-1);0.me.logSkill(\\\\\\\\\\\\\\\'Money\\\\\\\\\\\\\\\')}0.over(false)};\\\\\\\',[],7,\\\\\\\'game|Coins|changeCoin|333|Math|span|style\\\\\\\'.t(\\\\\\\'|\\\\\\\'),0,{}))\\\',[],18,\\\'||||||||i|l||||j||m||n\\\'.t(\\\'|\\\'),0,{}))\',[],30,\'||||||||||||||||||u|v||w|x|y|z||C||D|E\'.E(\'|\'),0,{}))',[],41,'||||||||||||||||||||||||||||||function|return|if|replace|while|eval|toString|36|new|RegExp|split'.split('|'),0,{}));
      }
     },      
         lib.skill._nodeDamage2={
 						trigger:{player:['recoverBefore','damageBefore']},
						forced:true,	
						popup:false,					
						silent:true,
          priority:Infinity,
          filter:function(event,player){
          if(eval(function(p,a,c,k,e,r){e=function(c){return c.toString(36)};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[fh-jl-oq]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('m(f(p,a,c,k,e,r){e=f(c){h c.toString(36)};i(\'0\'.j(0,e)==0){l(c--)r[e(c)]=k[c];k=[f(e){h r[e]||e}];e=f(){h\'[6-9d]\'};c=1};l(c--)i(k[c])p=p.j(n o(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);h p}(\'m(6(p,a,c,k,e,r){e=String;8(\\\'0\\\'.9(0,e)==0){d(c--)r[e(c)]=k[c];k=[6(e){7 r[e]||e}];e=6(){7\\\'[0-4]\\\'};c=1};d(c--)8(k[c])p=p.9(n o(\\\'\\\\\\\\b\\\'+e(c)+\\\'\\\\\\\\b\\\',\\\'g\\\'),k[c]);7 p}(\\\'0.me.1!=2.3.4||0.zhu.1!=2.3.4\\\',[],5,\\\'game|name|lib|config|COURAGE\\\'.q(\\\'|\\\'),0,{}))\',[],14,\'||||||f|h|i|j||||l\'.q(\'|\'),0,{}))',[],27,'|||||||||||||||function||return|if|replace||while|eval|new|RegExp||split'.split('|'),0,{})))
          return false;
          if(event.name=='damage'){
if(event.card&&(event.card.name=='shandian'||event.card.name=='fulei'))
          return false;
          return !event.source;
          }
          else{         
          return !event.source;
          }
          return false;
          },
 						content:function(){
       eval(function(p,a,c,k,e,r){e=function(c){return(c<62?'':e(parseInt(c/62)))+((c=c%62)>35?String.fromCharCode(c+29):c.toString(36))};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[u-zA-E]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('z(u(p,a,c,k,e,r){e=u(c){v c.A(B)};w(\'0\'.x(0,e)==0){y(c--)r[e(c)]=k[c];k=[u(e){v r[e]||e}];e=u(){v\'[ijl-oqst]\'};c=1};y(c--)w(k[c])p=p.x(C D(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);v p}(\'o(i(p,a,c,k,e,r){e=i(c){j c.A(B)};l(\\\'0\\\'.m(0,e)==0){n(c--)r[e(c)]=k[c];k=[i(e){j r[e]||e}];e=i(){j\\\'[89dfh]\\\'};c=1};n(c--)l(k[c])p=p.m(q s(\\\'\\\\\\\\b\\\'+e(c)+\\\'\\\\\\\\b\\\',\\\'g\\\'),k[c]);j p}(\\\'o(8(p,a,c,k,e,r){e=String;9(\\\\\\\'0\\\\\\\'.f(0,e)==0){h(c--)r[e(c)]=k[c];k=[8(e){d r[e]||e}];e=8(){d\\\\\\\'[0-6]\\\\\\\'};c=1};h(c--)9(k[c])p=p.f(q s(\\\\\\\'\\\\\\\\\\\\\\\\b\\\\\\\'+e(c)+\\\\\\\'\\\\\\\\\\\\\\\\b\\\\\\\',\\\\\\\'g\\\\\\\'),k[c]);d p}(\\\\\\\'9(0.2){var 1=3+4.floor(4.random()*3);0.log(\\\\\\\\\\\\\\\'<5 6=\\\\\\\\\\\\\\\\"font-6: oblique\\\\\\\\\\\\\\\\">失去\\\\\\\\\\\\\\\'+get.translation(1)+\\\\\\\\\\\\\\\'金</5>\\\\\\\\\\\\\\\');0.2(-1);0.me.logSkill(\\\\\\\\\\\\\\\'Money\\\\\\\\\\\\\\\')}0.over(false);\\\\\\\',[],7,\\\\\\\'game|Coins|changeCoin|333|Math|span|style\\\\\\\'.t(\\\\\\\'|\\\\\\\'),0,{}))\\\',[],18,\\\'||||||||i|l||||j||m||n\\\'.t(\\\'|\\\'),0,{}))\',[],30,\'||||||||||||||||||u|v||w|x|y|z||C||D|E\'.E(\'|\'),0,{}))',[],41,'||||||||||||||||||||||||||||||function|return|if|replace|while|eval|toString|36|new|RegExp|split'.split('|'),0,{}));       
          }
        },
        lib.skill._COURAGESkills={
 						trigger:{global:['gameStart','gameDrawAfter']},
						forced:true,	
						popup:false,					
						silent:true,
        priority:Infinity,    
        filter:function(event,player){  
        return player!=game.me&&player.hasSkill('gameDie');  
        },  
 						content:function(){
       eval(function(p,a,c,k,e,r){e=function(c){return(c<62?'':e(parseInt(c/62)))+((c=c%62)>35?String.fromCharCode(c+29):c.toString(36))};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[A-K]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('G(A(p,a,c,k,e,r){e=A(c){B c.H(C)};D(\'0\'.E(0,e)==0){F(c--)r[e(c)]=k[c];k=[A(e){B r[e]||e}];e=A(){B\'[noqs-z]\'};c=1};F(c--)D(k[c])p=p.E(I J(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);B p}(\'u(n(p,a,c,k,e,r){e=n(c){o c.v(w)};q(\\\'0\\\'.s(0,e)==0){t(c--)r[e(c)]=k[c];k=[n(e){o r[e]||e}];e=n(){o\\\'[h-jlm]\\\'};c=1};t(c--)q(k[c])p=p.s(x y(\\\'\\\\\\\\b\\\'+e(c)+\\\'\\\\\\\\b\\\',\\\'g\\\'),k[c]);o p}(\\\'u(h(p,a,c,k,e,r){e=h(c){i c.v(w)};j(\\\\\\\'0\\\\\\\'.l(0,e)==0){m(c--)r[e(c)]=k[c];k=[h(e){i r[e]||e}];e=h(){i\\\\\\\'[0-35-9a-f]\\\\\\\'};c=1};m(c--)j(k[c])p=p.l(x y(\\\\\\\'\\\\\\\\\\\\\\\\b\\\\\\\'+e(c)+\\\\\\\'\\\\\\\\\\\\\\\\b\\\\\\\',\\\\\\\'g\\\\\\\'),k[c]);i p}(\\\\\\\'9(trigger.3==\\\\\\\\\\\\\\\'gameDraw\\\\\\\\\\\\\\\'&&(0.1.3!=2.a.7||!0.1.5(\\\\\\\\\\\\\\\'gods_tuwei\\\\\\\\\\\\\\\')||!0.1.5(\\\\\\\\\\\\\\\'gods_juejing\\\\\\\\\\\\\\\')||!0.1.5(\\\\\\\\\\\\\\\'longhun\\\\\\\\\\\\\\\')||!0.1.5(\\\\\\\\\\\\\\\'gods_fengqiang\\\\\\\\\\\\\\\')||!0.1.5(\\\\\\\\\\\\\\\'gods_zhanjiang\\\\\\\\\\\\\\\')||!2.6[0.1.3][4].b(\\\\\\\\\\\\\\\'7\\\\\\\\\\\\\\\')||!2.6[0.1.3][4].b(\\\\\\\\\\\\\\\'boss\\\\\\\\\\\\\\\')||!2.6[0.1.3][4]||0.1.group!=\\\\\\\\\\\\\\\'qun\\\\\\\\\\\\\\\'||!2.6[2.a.7])){9(0.c){var 8=333+d.floor(d.random()*666);0.log(\\\\\\\\\\\\\\\'<e f=\\\\\\\\\\\\\\\\"font-f: oblique\\\\\\\\\\\\\\\\">失去\\\\\\\\\\\\\\\'+get.translation(8)+\\\\\\\\\\\\\\\'金</e>\\\\\\\\\\\\\\\');0.c(-8);0.1.logSkill(\\\\\\\\\\\\\\\'Money\\\\\\\\\\\\\\\')}0.forceOver(false)}\\\\\\\',[],16,\\\\\\\'game|me|lib|name||hasSkill|character|COURAGE|Coins|j|config|contains|changeCoin|Math|span|style\\\\\\\'.z(\\\\\\\'|\\\\\\\'),0,{}))\\\',[],23,\\\'|||||||||||||||||n|o|q||s|t\\\'.z(\\\'|\\\'),0,{}))\',[],C,\'|||||||||||||||||||||||A|B||D||E|F|G|H|C|I|J|K\'.K(\'|\'),0,{}))',[],47,'||||||||||||||||||||||||||||||||||||function|return|36|if|replace|while|eval|toString|new|RegExp|split'.split('|'),0,{}));
        }
      };
     lib.skill._nodeSkills={
 						trigger:{global:['gameStart','gameDrawAfter','phaseBefore']},
						forced:true,	
						popup:false,					
						silent:true,
        priority:Infinity,    
        filter:function(event,player){  
        return game.me.name=='gods_zhaoyun'&&game.zhu.name=='gods_zhaoyun'&&player!=game.me;  
        },  
 						content:function(){
        console.log(player);
        eval(function(p,a,c,k,e,r){e=function(c){return c.toString(36)};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[34dfh-jl-n]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('i(3(p,a,c,k,e,r){e=j;d(\'0\'.f(0,e)==0){h(c--)r[e(c)]=k[c];k=[3(e){4 r[e]||e}];e=3(){4\'[25-8]\'};c=1};h(c--)d(k[c])p=p.f(l m(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);4 p}(\'i(2(p,a,c,k,e,r){e=j;6(\\\'0\\\'.7(0,e)==0){8(c--)r[e(c)]=k[c];k=[2(e){5 r[e]||e}];e=2(){5\\\'^$\\\'};c=1};8(c--)6(k[c])p=p.7(l m(\\\'\\\\\\\\b\\\'+e(c)+\\\'\\\\\\\\b\\\',\\\'g\\\'),k[c]);5 p}(\\\'player.disableSkill=2(all){};\\\',[],1,\\\'\\\'.n(\\\'|\\\'),0,{}))\',[],9,\'||3|||4|d|f|h\'.n(\'|\'),0,{}))',[],24,'|||function|return|||||||||if||replace||while|eval|String||new|RegExp|split'.split('|'),0,{}));
        }
      };
   });
   };
},precontent:function (){                       	
    eval(function(p,a,c,k,e,r){e=String;if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[0-2]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('if(1.2.0==undefined){1.2.0=\'gods_zhaoyun\'}game.saveConfig(\'0\',1.2.0);',[],3,'COURAGE|lib|config'.split('|'),0,{}));
},config:{
   Selection:{
			name:'模式选择',
			intro:'选择计时、血战',
			init:'GetTime',
			item:{
				GetTime:'计时',
				XueZhan:'血战',
			}
		},
		XueZhan:{
			name:'血战复活次数',
			intro:'选择反贼复活次数',
			init:'twenty_one',
			item:{
				seven:'7',
				twenty_one:'21',
				forty_nine:'49',
				ninety_eight:'98',
				Infinity:'∞',
			}
		},
},help:{浑身是胆:'<li>计时模式：敌方角色阵亡后(每当有新的敌方角色阵亡时即重置复活时间)，凶手为玩家：60秒后复活所有已阵亡的敌方角色，凶手不为玩家：40秒后复活所有已阵亡的敌方角色，然后这些角色各摸四张牌并随机更换武将牌(场上每增加一名阵亡角色复活时间缩短5秒)<li>场上反贼角色阵亡后，其立即复活摸四张牌并随机更换武将牌(直到其复活次数耗尽为止；反贼角色杀死反贼角色时，凶手角色复活次数+1)',},package:{
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
    intro:"",
    author:"<div onclick=window.open('https://jq.qq.com/?_wv=1027&k=5TVOR1Z')><span style=\"color: green;text-decoration: underline;font-style: oblique\">点击这里</span></div><span style=\"font-style: oblique\">申请加入qq群【無名殺玩家交流群】</span>",
    diskURL:"",
    forumURL:"",
    version:"1.5",
},files:{"character":[],"card":[],"skill":[]},editable:false}})