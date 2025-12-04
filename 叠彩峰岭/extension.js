game.import("extension", function(lib, game, ui, get, ai, _status) {
    return {
        name: "叠彩峰岭",
        editable: false, 
        content: function(config, pack) {                        
            // 武将包配置 - 全部武将包（36个）
            var characterPacks = [
                { id: 'standard', name: '标准包', packKey: 'standard' },
                { id: 'refresh', name: '界限突破', packKey: 'refresh' },
                { id: 'shenhua', name: '神话再临', packKey: 'shenhua' },
                { id: 'yijiang', name: '一将成名', packKey: 'yijiang' },
                { id: 'extra', name: '神将', packKey: 'extra' },
                { id: 'sp', name: '璀璨星河', packKey: 'sp' },
                { id: 'sp2', name: '系列专属', packKey: 'sp2' },
                { id: 'newjiang', name: '新一将成名', packKey: 'newjiang' },
                { id: 'onlyOL', name: 'OL专属', packKey: 'onlyOL' },
                { id: 'yingbian', name: '文德武备', packKey: 'yingbian' },
                { id: 'clan', name: '门阀士族', packKey: 'clan' },
                { id: 'huicui', name: '群英荟萃', packKey: 'huicui' },
                { id: 'xianding', name: '限定专属', packKey: 'xianding' },
                { id: 'mobile', name: '移动版', packKey: 'mobile' },
                { id: 'shiji', name: '始计篇', packKey: 'shiji' },
                { id: 'sb', name: '谋攻篇', packKey: 'sb' },
                { id: 'tw', name: '外服武将', packKey: 'tw' },
                { id: 'collab', name: '联动卡', packKey: 'collab' },
                { id: 'old', name: '怀旧', packKey: 'old' },
                { id: 'offline', name: '线下武将', packKey: 'offline' },
                { id: 'jsrg', name: '江山如故', packKey: 'jsrg' },
                { id: 'sxrm', name: '蚀心入魔', packKey: 'sxrm' },
                { id: 'sixiang', name: '四象封印', packKey: 'sixiang' },
                { id: 'ddd', name: '3D精选', packKey: 'ddd' },
                { id: 'wandian', name: '玩点论杀', packKey: 'wandian' },
                { id: 'yunchou', name: '运筹帷幄', packKey: 'yunchou' },
                { id: 'yxs', name: '英雄杀', packKey: 'yxs' },
                { id: 'diy', name: 'DIY', packKey: 'diy' },
                { id: 'key', name: 'KEY', packKey: 'key' },
                { id: 'xianjian', name: '仙剑奇侠传', packKey: 'xianjian' },
                { id: 'hearth', name: '炉石传说', packKey: 'hearth' },
                { id: 'gujian', name: '古剑奇谭', packKey: 'gujian' },
                { id: 'ow', name: '守望先锋', packKey: 'ow' },
                { id: 'swd', name: '轩辕剑', packKey: 'swd' },
                { id: 'gwent', name: '昆特牌', packKey: 'gwent' },
                { id: 'mtg', name: '万智牌', packKey: 'mtg' }
            ];
            
            game.showCharacterInfo = function() {
                ui.system.style.display = 'none';
                ui.menuContainer.style.display = 'none';
                ui.click.configMenu();
                
                var currentPack = 'standard';
                
                function Page() {
                    this.body = ui.create.div().hide();
                    this.comps = {};
                    this.paBody = document.body;
                    this.paBody.appendChild(this.body);
                }

                Page.prototype = {
                    show: function() {
                        if (!this.body.parentNode && this.paBody) {
                            this.paBody.appendChild(this.body);
                        }
                        this.body.show();
                        this.body.style.display = 'block';
                        this.body.style.position = 'fixed';
                        this.body.style.top = '0';
                        this.body.style.left = '0';
                        this.body.style.width = '100%';
                        this.body.style.height = '100%';
                        this.body.style.backgroundColor = 'rgba(0,0,0,0.7)';
                        this.body.style.zIndex = '2024';

                        return this;
                    },

                    hide: function() {
                        this.body.hide();
                        return this;
                    }
                };
                
                function createCharacterIntro(charName, introClass) {
                    var div = ui.create.div('.dcfl_intro_' + introClass);
                    var charData = lib.character[charName];
                    if (!charData) return null;

                    var dComps = {
                        header: (function() {
                            var img = ui.create.div('.dcfl_intro_header');
                            img.style['background-image'] = 'url(' + lib.assetURL + 'image/character/' + charName + '.jpg)';
                            return img;
                        })(),
                        infos: (function() {
                            var str = "";
                            if (charName) str += get.translation(charName) + '&nbsp;';
                            if (charData[0]) str += get.translation(charData[0]) + '&nbsp;'; 
                            if (charData[1]) str += get.translation(charData[1]) + '&nbsp;'; 
                            if (charData[2]) str += charData[2] + '体力'; 
                            return ui.create.div('.dcfl_intro_infos', str);
                        })(),
                        skills: (function() {
                            var str = "";
                            if (charData[3] && Array.isArray(charData[3])) {
                                for (var j = 0; j < charData[3].length; j++) {
                                    if (j > 0) str += '<br><br>';
                                    var skillName = charData[3][j];
                                    str += '<strong class="greentext">' + get.translation(skillName) + '</strong>：' + get.translation(skillName + '_info');
                                }
                            }
                            var skills = ui.create.div('.dcfl_intro_skills', str);
                            lib.setScroll(skills);
                            return skills;
                        })(),
                    };

                    for (var i in dComps) {
                        div.appendChild(dComps[i]);
                    }
                    return div;
                }
                
                var characterPage = new Page();
                characterPage.body = ui.create.div('#dcfl_page');
                
                var mainContainer = ui.create.div('#dcfl_mainContainer');
                mainContainer.style.position = 'fixed';
                mainContainer.style.top = '50%';
                mainContainer.style.left = '62%';
                mainContainer.style.transform = 'translate(-50%, -50%)';
                mainContainer.style.width = '72%'; 
                mainContainer.style.height = '88%'; 
                mainContainer.style.backgroundColor = '#1a1a1a';
                mainContainer.style.border = '2px solid #444';
                mainContainer.style.borderRadius = '8px';
                mainContainer.style.boxShadow = '0 0 30px rgba(0,0,0,0.9)';
                mainContainer.style.zIndex = '2025';
                mainContainer.style.overflow = 'hidden';
                
                var leftButtonPanel = ui.create.div('#dcfl_leftButtonPanel');
                leftButtonPanel.style.position = 'fixed';
                leftButtonPanel.style.left = '10%'; 
                leftButtonPanel.style.top = '50%';
                leftButtonPanel.style.transform = 'translateY(-50%)';
                leftButtonPanel.style.width = '150px'; 
                leftButtonPanel.style.height = '88%'; 
                leftButtonPanel.style.backgroundColor = 'rgba(30, 30, 30, 0.95)';
                leftButtonPanel.style.border = '2px solid #555';
                leftButtonPanel.style.borderRadius = '8px';
                leftButtonPanel.style.boxShadow = '0 0 15px rgba(0,0,0,0.8)';
                leftButtonPanel.style.overflowY = 'auto';
                leftButtonPanel.style.overflowX = 'hidden';
                leftButtonPanel.style.padding = '18px 12px';
                leftButtonPanel.style.boxSizing = 'border-box';
                leftButtonPanel.style.zIndex = '2026';
                
                var rightPanel = ui.create.div('#dcfl_rightPanel');
                rightPanel.style.width = '100%';
                rightPanel.style.height = '100%';
                rightPanel.style.position = 'relative';
                rightPanel.style.overflow = 'hidden';
                rightPanel.style.padding = '0';
                rightPanel.style.boxSizing = 'border-box';
                
                var closeButton = ui.create.div('#dcfl_closeButton', '×');
                closeButton.addEventListener('click', function() {
                    characterPage.hide();
                    ui.system.style.display = '';
                    setTimeout(function() {
                        ui.click.configMenu();
                        ui.menuContainer.style.display = '';
                    }, 500);
                });
                rightPanel.appendChild(closeButton);
                
                var title = ui.create.div('#dcfl_title');
                title.innerHTML = '标准包';
                rightPanel.appendChild(title);
                
                var buttonContainer = ui.create.div('#dcfl_buttonContainer');
                buttonContainer.style.width = '100%';
                buttonContainer.style.height = 'auto';
                buttonContainer.style.display = 'flex';
                buttonContainer.style.flexDirection = 'column';
                buttonContainer.style.gap = '10px';
                
                for (var i = 0; i < characterPacks.length; i++) {
                    var pack = characterPacks[i];
                    
                    var buttonWrapper = ui.create.div('.dcfl_buttonWrapper');
                    buttonWrapper.style.width = '100%';
                    buttonWrapper.style.height = '50px';
                    buttonWrapper.style.display = 'block';
                    buttonWrapper.style.position = 'relative';
                    
                    var button = ui.create.div('.dcfl_packButton');
                    button.innerHTML = pack.name;
                    button.style.width = '100%';
                    button.style.height = '100%';
                    button.style.padding = '0';
                    button.style.textAlign = 'center';
                    button.style.cursor = 'pointer';
                    button.style.borderRadius = '6px';
                    button.style.border = '2px solid #666';
                    button.style.backgroundColor = pack.id === currentPack ? 
                        'rgba(120, 88, 75, 0.95)' : 'rgba(50, 50, 50, 0.9)';
                    button.style.color = pack.id === currentPack ? '#ffd700' : '#ddd';
                    button.style.fontFamily = 'lishu';
                    button.style.fontSize = '16px';
                    button.style.fontWeight = 'bold';
                    button.style.transition = 'all 0.3s';
                    button.style.boxShadow = pack.id === currentPack ? 
                        '0 0 10px rgba(255, 215, 0, 0.5)' : '0 2px 8px rgba(0,0,0,0.4)';
                    button.style.userSelect = 'none';
                    button.style.display = 'flex';
                    button.style.alignItems = 'center';
                    button.style.justifyContent = 'center';
                    button.style.lineHeight = '1.2';
                    button.style.letterSpacing = '1px';
                    
                    button.onmouseenter = function() {
                        var packId = this.getAttribute('data-pack');
                        if (packId !== currentPack) {
                            this.style.backgroundColor = 'rgba(70, 70, 70, 0.95)';
                            this.style.color = '#fff';
                            this.style.borderColor = '#888';
                            this.style.transform = 'translateY(-2px)';
                            this.style.boxShadow = '0 4px 12px rgba(0,0,0,0.5)';
                        }
                    };
                    
                    button.onmouseleave = function() {
                        var packId = this.getAttribute('data-pack');
                        if (packId !== currentPack) {
                            this.style.backgroundColor = 'rgba(50, 50, 50, 0.9)';
                            this.style.color = '#ddd';
                            this.style.borderColor = '#666';
                            this.style.transform = 'translateY(0)';
                            this.style.boxShadow = '0 2px 8px rgba(0,0,0,0.4)';
                        }
                    };
                    
                    button.setAttribute('data-pack', pack.id);
                    button.addEventListener('click', function() {
                        var packId = this.getAttribute('data-pack');
                        if (currentPack === packId) return;
                        
                        var buttons = leftButtonPanel.querySelectorAll('[data-pack]');
                        for (var j = 0; j < buttons.length; j++) {
                            var btn = buttons[j];
                            if (btn.getAttribute('data-pack') === packId) {
                                btn.style.backgroundColor = 'rgba(120, 88, 75, 0.95)';
                                btn.style.color = '#ffd700';
                                btn.style.borderColor = '#ffd700';
                                btn.style.boxShadow = '0 0 10px rgba(255, 215, 0, 0.5)';
                                btn.style.transform = 'translateY(0)';
                            } else {
                                btn.style.backgroundColor = 'rgba(50, 50, 50, 0.9)';
                                btn.style.color = '#ddd';
                                btn.style.borderColor = '#666';
                                btn.style.boxShadow = '0 2px 8px rgba(0,0,0,0.4)';
                                btn.style.transform = 'translateY(0)';
                            }
                        }
                        
                        currentPack = packId;
                        
                        for (var k = 0; k < characterPacks.length; k++) {
                            if (characterPacks[k].id === packId) {
                                title.innerHTML = characterPacks[k].name;
                                break;
                            }
                        }
                        
                        updateCharacterList();
                    });
                    
                    buttonWrapper.appendChild(button);
                    buttonContainer.appendChild(buttonWrapper);
                }
                
                leftButtonPanel.appendChild(buttonContainer);
                
                var contentContainer = ui.create.div('#dcfl_contentContainer');
                contentContainer.style.position = 'absolute';
                contentContainer.style.top = '60px';
                contentContainer.style.left = '0';
                contentContainer.style.width = '100%';
                contentContainer.style.height = 'calc(100% - 60px)';
                contentContainer.style.overflow = 'auto';
                contentContainer.style.padding = '15px';
                contentContainer.style.boxSizing = 'border-box';
                rightPanel.appendChild(contentContainer);
                
                function updateCharacterList() {
                    contentContainer.innerHTML = '';              
                    var packInfo;
                    for (var i = 0; i < characterPacks.length; i++) {
                        if (characterPacks[i].id === currentPack) {
                            packInfo = characterPacks[i];
                            break;
                        }
                    }
                    
                    if (!packInfo) return;
                    
                    var characterPack = lib.characterPack[packInfo.packKey];
                    
                    if (characterPack) {
                        var charList = [];
                        for (var charName in characterPack) {
                            if (charName && lib.character[charName]) {
                                charList.push(charName);
                            }
                        }
                        
                        for (var i = 0; i < charList.length; i++) {
                            var charName = charList[i];                            
                            var introClass = (i % 2 === 0) ? 'left' : 'right';
                            var charIntro = createCharacterIntro(charName, introClass);
                            
                            if (charIntro) {
                                contentContainer.appendChild(charIntro);
                            }
                        }
                        
                        var clearDiv = ui.create.div();
                        clearDiv.style.clear = 'both';
                        clearDiv.style.height = '0';
                        clearDiv.style.overflow = 'hidden';
                        contentContainer.appendChild(clearDiv);
                        
                        lib.setScroll(contentContainer);
                    }
                }
                
                updateCharacterList();
                
                characterPage.body.appendChild(mainContainer);
                mainContainer.appendChild(rightPanel);
                
                characterPage.body.appendChild(leftButtonPanel);
                
                characterPage.show();
                return characterPage;
            };
            
        },
        precontent: function() {
            lib.init.css(lib.assetURL + 'extension/叠彩峰岭', 'extension');
            delete lib.extensionMenu.extension_叠彩峰岭.delete;
            lib.extensionMenu['extension_' + '叠彩峰岭'].delete = { name: '删除此扩展', clear: true, };
        },
        config: {                     
            "dcfl_viewinfo": {
                name: '<div class="dcfl_menu">查看信息</div>',
                "clear": true,
                "onclick": function() {
                    game.showCharacterInfo();
                },
            }
        },
        help: {},
        package: {
            character: {
                character: {},
                translate: {},
            },
            card: {
                card: {},
                translate: {},
                list: [],
            },
            skill: {
                skill: {},
                translate: {},
            },
            intro: "<font color=#f00>查看前须开启相应武将包</font>",
            author: "山佬进城（小苏）",
            diskURL: "",
            forumURL: "",
            version: "2.0",
        },
        files: {
            "character": [],
            "card": [],
            "skill": [],
            "audio": []
        }
    }
});