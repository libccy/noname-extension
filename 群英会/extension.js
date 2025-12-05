game.import("extension", function (lib, game, ui, get, ai, _status) {
    return {
        name: "群英会", editable: false, content: function (config, pack) {

            if (lib.brawl) {
                lib.brawl.qyhBrawlMode = (function () {

                    var brawl = {
                        name: '群英会',
                        mode: 'identity',
                        intro: [
                            '嗨～' + lib.config.connect_nickname + '！欢迎您前来体验《群英会》扩展哦！',
                        ],

                        showcase: function (init) {
                            function Page() {
                                this.body = ui.create.div().hide();
                                this.comps = {};
                            };
                            Page.prototype = {
                                paBody: null,
                                set: function (attr, value) {
                                    if (typeof attr != 'string') return this;
                                    this[attr] = value;
                                    return this;
                                },
                                show: function () {
                                    if (this.paBody == undefined) {
                                        this.paBody = document.getElementsByClassName('dialog fixed scroll1')[0];
                                        this.paBody.appendChild(this.body);
                                    }
                                    this.body.show();
                                    return this;
                                },
                                hide: function () {
                                    this.body.hide();
                                    return this;
                                },
                            };

                            var gameQYHIntro = ui.create.div('#QYH_gameQYHIntro', '群英会');

                            var createBrawlCharacterPage = function () {
                                var currentPack = '';

                                function createCharacterIntro(charName, introClass) {
                                    var div = ui.create.div('.qyh_intro_' + introClass);
                                    var charData = lib.character[charName];
                                    if (!charData) return null;

                                    var dComps = {
                                        header: (function () {
                                            var img = ui.create.div('.qyh_intro_header');
                                            var imgPath = lib.assetURL + 'extension/群英会/' + charName + '.jpg';
                                            img.style['background-image'] = 'url(' + imgPath + ')';
                                            img.onerror = function () {
                                                this.style['background-image'] = 'url(' + lib.assetURL + 'image/character/default.jpg)';
                                            };
                                            return img;
                                        })(),
                                        infos: (function () {
                                            var str = "";
                                            if (charName) str += get.translation(charName) + '&nbsp;';
                                            if (charData[0]) str += get.translation(charData[0]) + '&nbsp;';
                                            if (charData[1]) str += get.translation(charData[1]) + '&nbsp;';
                                            if (charData[2]) str += charData[2] + '体力';
                                            return ui.create.div('.qyh_intro_infos', str);
                                        })(),
                                        skills: (function () {
                                            var str = "";
                                            if (charData[3] && Array.isArray(charData[3])) {
                                                for (var j = 0; j < charData[3].length; j++) {
                                                    if (j > 0) str += '<br><br>';
                                                    var skillName = charData[3][j];
                                                    str += '<strong class="greentext">' + get.translation(skillName) + '</strong>：' + get.translation(skillName + '_info');
                                                }
                                            }
                                            var skills = ui.create.div('.qyh_intro_skills', str);
                                            lib.setScroll(skills);
                                            return skills;
                                        })(),
                                    };

                                    for (var i in dComps) {
                                        div.appendChild(dComps[i]);
                                    }
                                    return div;
                                }

                                function createCharacterPacks() {
                                    var packs = [];
                                    var allChars = []; 

                                    packs.push({
                                        id: 'all',
                                        name: '全部武将',
                                        packKey: 'all',
                                        charList: [] 
                                    });

                                    var characterSort = lib.characterSort && lib.characterSort.qunying;
                                    if (characterSort) {
                                        for (var categoryId in characterSort) {
                                            if (characterSort.hasOwnProperty(categoryId)) {
                                                var categoryName = get.translation(categoryId) || categoryId;
                                                var charList = characterSort[categoryId] || [];

                                                for (var i = 0; i < charList.length; i++) {
                                                    if (lib.character[charList[i]] && !allChars.includes(charList[i])) {
                                                        allChars.push(charList[i]);
                                                    }
                                                }

                                                packs.push({
                                                    id: 'qunying_' + categoryId,
                                                    //name: '群英会 - ' + categoryName,
                                                    name: categoryName,
                                                    packKey: 'qunying',
                                                    charList: charList
                                                });
                                            }
                                        }
                                    }

                                    var bcharacterSort = lib.characterSort && lib.characterSort.wugeng;
                                    if (bcharacterSort) {
                                        for (var categoryId in bcharacterSort) {
                                            if (bcharacterSort.hasOwnProperty(categoryId)) {
                                                var categoryName = get.translation(categoryId) || categoryId;
                                                var charList = bcharacterSort[categoryId] || [];

                                                for (var i = 0; i < charList.length; i++) {
                                                    if (lib.character[charList[i]] && !allChars.includes(charList[i])) {
                                                        allChars.push(charList[i]);
                                                    }
                                                }

                                                packs.push({
                                                    id: 'wugeng_' + categoryId,
                                                    //name: '武庚纪 - ' + categoryName,
                                                    name: categoryName,
                                                    packKey: 'wugeng',
                                                    charList: charList
                                                });
                                            }
                                        }
                                    }

                                    if (packs.length > 0) {
                                        for (var i = 0; i < packs.length; i++) {
                                            if (packs[i].id === 'all') {
                                                packs[i].charList = allChars;
                                                break;
                                            }
                                        }
                                    }

                                    return packs;
                                }

                                function updateCharacterList(packInfo) {
                                    contentContainer.innerHTML = '';

                                    if (!packInfo) return;

                                    var charList = packInfo.charList || [];

                                    if (charList.length === 0) {
                                        
                                        if (packInfo.packKey === 'qunying' || packInfo.packKey === 'all') {
                                            var characterPack = lib.characterPack['qunying'];
                                            if (characterPack) {
                                                for (var charName in characterPack) {
                                                    if (charName && lib.character[charName] && !charList.includes(charName)) {
                                                        charList.push(charName);
                                                    }
                                                }
                                            }
                                        }

                                        if (packInfo.packKey === 'wugeng' || packInfo.packKey === 'all') {
                                            var bcharacterPack = lib.characterPack['wugeng'];
                                            if (bcharacterPack) {
                                                for (var charName in bcharacterPack) {
                                                    if (charName && lib.character[charName] && !charList.includes(charName)) {
                                                        charList.push(charName);
                                                    }
                                                }
                                            }
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

                                var characterPacks = createCharacterPacks();
                                if (characterPacks.length > 0) {
                                    currentPack = characterPacks[0].id;
                                }

                                var page = new Page();
                                page.body = ui.create.div('#qyh_brawl_page');

                                page.body.style.cssText = `
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background-color: rgba(0,0,0,0.7);
                        z-index: 2024;
                        display: block;
                    `;

                                var mainContainer = ui.create.div('#qyh_brawl_mainContainer');
                                mainContainer.style.cssText = `
                        position: fixed;
                        top: 50%;
                        left: calc(8% + 150px);
                        transform: translateY(-50%);
                        width: calc(84% - 150px);
                        height: 88%;
                        background-color: #1a1a1a;
                        border: 2px solid #444;
                        border-radius: 0 8px 8px 0;
                        box-shadow: 0 0 30px rgba(0,0,0,0.9);
                        z-index: 2025;
                        overflow: hidden;
                    `;

                                var leftButtonPanel = ui.create.div('#qyh_brawl_leftButtonPanel');
                                leftButtonPanel.style.cssText = `
                        position: fixed;
                        left: 8%;
                        top: 50%;
                        transform: translateY(-50%);
                        width: 150px;
                        height: 88%;
                        background-color: rgba(30, 30, 30, 0.95);
                        border: 2px solid #555;
                        border-radius: 8px 0 0 8px;
                        box-shadow: 0 0 15px rgba(0,0,0,0.8);
                        overflow-y: auto;
                        overflow-x: hidden;
                        padding: 18px 12px;
                        box-sizing: border-box;
                        z-index: 2025;
                    `;

                                var rightPanel = ui.create.div('#qyh_brawl_rightPanel');
                                rightPanel.style.cssText = `
                        width: 100%;
                        height: 100%;
                        position: relative;
                        overflow: hidden;
                        padding: 0;
                        box-sizing: border-box;
                    `;

                                var closeButton = ui.create.div('#qyh_brawl_closeButton', '×');
                                closeButton.addEventListener('click', function () {
                                    page.hide();
                                });
                                rightPanel.appendChild(closeButton);

                                var title = ui.create.div('#qyh_brawl_title');
                                title.innerHTML = characterPacks.length > 0 ? characterPacks[0].name : '群英会武将';
                                rightPanel.appendChild(title);

                                var contentContainer = ui.create.div('#qyh_brawl_contentContainer');
                                contentContainer.style.cssText = `
                        position: absolute;
                        top: 60px;
                        left: 0;
                        width: 100%;
                        height: calc(100% - 60px);
                        overflow: auto;
                        padding: 15px;
                        box-sizing: border-box;
                    `;
                                rightPanel.appendChild(contentContainer);

                                var buttonContainer = ui.create.div('#qyh_brawl_buttonContainer');
                                buttonContainer.style.cssText = `
                        width: 100%;
                        height: auto;
                        display: flex;
                        flex-direction: column;
                        gap: 10px;
                    `;

                                for (var i = 0; i < characterPacks.length; i++) {
                                    var pack = characterPacks[i];

                                    var buttonWrapper = ui.create.div('.qyh_brawl_buttonWrapper');
                                    buttonWrapper.style.cssText = `
                            width: 100%;
                            height: 50px;
                            display: block;
                            position: relative;
                        `;

                                    var button = ui.create.div('.qyh_brawl_packButton');
                                    button.innerHTML = pack.name;
                                    button.style.cssText = `
                            width: 100%;
                            height: 100%;
                            padding: 0;
                            text-align: center;
                            cursor: pointer;
                            border-radius: 6px;
                            border: 2px solid #666;
                            background-color: rgba(50, 50, 50, 0.9);
                            color: #ddd;
                            font-family: lishu;
                            font-size: 16px;
                            font-weight: bold;
                            box-shadow: 0 2px 8px rgba(0,0,0,0.4);
                            user-select: none;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            line-height: 1.2;
                            letter-spacing: 1px;
                            transition: all 0.3s ease;
                        `;

                                    if (pack.id === currentPack) {
                                        button.classList.add('active');
                                    }

                                    button.setAttribute('data-pack', pack.id);
                                    button.addEventListener('click', (function (packId, packName, packData) {
                                        return function () {
                                            if (currentPack === packId) return;

                                            var buttons = leftButtonPanel.querySelectorAll('.qyh_brawl_packButton');
                                            for (var j = 0; j < buttons.length; j++) {
                                                buttons[j].classList.remove('active');
                                            }

                                            this.classList.add('active');

                                            currentPack = packId;
                                            title.innerHTML = packName;
                                            updateCharacterList(packData);
                                        };
                                    })(pack.id, pack.name, pack));

                                    button.addEventListener('mouseover', function () {
                                        if (!this.classList.contains('active')) {
                                            this.style.backgroundColor = 'rgba(70, 70, 70, 0.95)';
                                            this.style.color = '#fff';
                                            this.style.borderColor = '#888';
                                            this.style.boxShadow = '0 4px 12px rgba(0,0,0,0.5)';
                                        }
                                    });

                                    button.addEventListener('mouseout', function () {
                                        if (!this.classList.contains('active')) {
                                            this.style.backgroundColor = 'rgba(50, 50, 50, 0.9)';
                                            this.style.color = '#ddd';
                                            this.style.borderColor = '#666';
                                            this.style.boxShadow = '0 2px 8px rgba(0,0,0,0.4)';
                                        }
                                    });

                                    buttonWrapper.appendChild(button);
                                    buttonContainer.appendChild(buttonWrapper);
                                }

                                leftButtonPanel.appendChild(buttonContainer);

                                function updateCharacterList(packInfo) {
                                    contentContainer.innerHTML = '';

                                    if (!packInfo) return;

                                    var charList = packInfo.charList || [];

                                    if (charList.length === 0) {
                                        var characterPack = lib.characterPack['qunying'];
                                        if (characterPack) {
                                            for (var charName in characterPack) {
                                                if (charName && lib.character[charName]) {
                                                    charList.push(charName);
                                                }
                                            }
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

                                if (characterPacks.length > 0) {
                                    updateCharacterList(characterPacks[0]);
                                }

                                page.body.appendChild(mainContainer);
                                mainContainer.appendChild(rightPanel);
                                page.body.appendChild(leftButtonPanel);

                                return page;
                            };

                            var router = {
                                qunyingPage: createBrawlCharacterPage()
                            };

                            gameQYHIntro.addEventListener('click', function () {
                                setTimeout(function () {
                                    router.qunyingPage.show();
                                }, 100);
                            });
                            this.appendChild(gameQYHIntro);
                        },
                    };
                    return brawl;
                })();
            }
            // 菜单页面类浏览武将：
            game.qyhCharacter = function () {
                ui.system.style.display = 'none';
                ui.menuContainer.style.display = 'none';
                ui.click.configMenu();

                var currentPack = '';

                function Page() {
                    this.body = ui.create.div().hide();
                    this.comps = {};
                    this.paBody = document.body;
                    this.paBody.appendChild(this.body);
                }

                Page.prototype = {
                    show: function () {
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

                    hide: function () {
                        this.body.hide();
                        return this;
                    }
                };

                function createCharacterIntro(charName, introClass) {
                    var div = ui.create.div('.qyh_intro_' + introClass);
                    var charData = lib.character[charName];
                    if (!charData) return null;

                    var dComps = {
                        header: (function () {
                            var img = ui.create.div('.qyh_intro_header');
                            
                            var imgPath = lib.assetURL + 'extension/群英会/' + charName + '.jpg';
                            img.style['background-image'] = 'url(' + imgPath + ')';
                            img.onerror = function () {
                                
                                this.style['background-image'] = 'url(' + lib.assetURL + 'image/character/default.jpg)';
                            };
                            return img;
                        })(),
                        infos: (function () {
                            var str = "";
                            if (charName) str += get.translation(charName) + '&nbsp;';
                            if (charData[0]) str += get.translation(charData[0]) + '&nbsp;';
                            if (charData[1]) str += get.translation(charData[1]) + '&nbsp;';
                            if (charData[2]) str += charData[2] + '体力';
                            return ui.create.div('.qyh_intro_infos', str);
                        })(),
                        skills: (function () {
                            var str = "";
                            if (charData[3] && Array.isArray(charData[3])) {
                                for (var j = 0; j < charData[3].length; j++) {
                                    if (j > 0) str += '<br><br>';
                                    var skillName = charData[3][j];
                                    str += '<strong class="greentext">' + get.translation(skillName) + '</strong>：' + get.translation(skillName + '_info');
                                }
                            }
                            var skills = ui.create.div('.qyh_intro_skills', str);
                            lib.setScroll(skills);
                            return skills;
                        })(),
                    };

                    for (var i in dComps) {
                        div.appendChild(dComps[i]);
                    }
                    return div;
                }

                function createCharacterPacks() {
                    var packs = [];
                    var allChars = []; 

                    packs.push({
                        id: 'all',
                        name: '全部武将',
                        packKey: 'all',
                        charList: [] 
                    });

                    var qunyingSort = lib.characterSort && lib.characterSort.qunying;
                    if (qunyingSort) {
                        for (var categoryId in qunyingSort) {
                            if (qunyingSort.hasOwnProperty(categoryId)) {
                                var categoryName = get.translation(categoryId) || categoryId;
                                var charList = qunyingSort[categoryId] || [];

                                for (var i = 0; i < charList.length; i++) {
                                    if (lib.character[charList[i]] && !allChars.includes(charList[i])) {
                                        allChars.push(charList[i]);
                                    }
                                }

                                packs.push({
                                    id: 'qunying_' + categoryId,
                                    //name: '群英会 - ' + categoryName,
                                    name: categoryName,
                                    packKey: 'qunying',
                                    charList: charList
                                });
                            }
                        }
                    }

                    var wugengSort = lib.characterSort && lib.characterSort.wugeng;
                    if (wugengSort) {
                        for (var categoryId in wugengSort) {
                            if (wugengSort.hasOwnProperty(categoryId)) {
                                var categoryName = get.translation(categoryId) || categoryId;
                                var charList = wugengSort[categoryId] || [];

                                for (var i = 0; i < charList.length; i++) {
                                    if (lib.character[charList[i]] && !allChars.includes(charList[i])) {
                                        allChars.push(charList[i]);
                                    }
                                }

                                packs.push({
                                    id: 'wugeng_' + categoryId,
                                    //name: '武庚纪 - ' + categoryName,
                                    name: categoryName,
                                    packKey: 'wugeng',
                                    charList: charList
                                });
                            }
                        }
                    }

                    if (packs.length > 0) {
                        for (var i = 0; i < packs.length; i++) {
                            if (packs[i].id === 'all') {
                                packs[i].charList = allChars;
                                break;
                            }
                        }
                    }

                    return packs;
                }

                var characterPacks = createCharacterPacks();

                if (characterPacks.length > 0) {
                    currentPack = characterPacks[0].id;
                }

                var characterPage = new Page();
                characterPage.body = ui.create.div('#qyh_page');

                var mainContainer = ui.create.div('#qyh_mainContainer');
                mainContainer.style.position = 'fixed';
                mainContainer.style.top = '50%';
                mainContainer.style.left = 'calc(8% + 150px)';
                mainContainer.style.transform = 'translateY(-50%)';
                mainContainer.style.width = 'calc(84% - 150px)';
                mainContainer.style.height = '88%';
                mainContainer.style.backgroundColor = '#1a1a1a';
                mainContainer.style.border = '2px solid #444';
                mainContainer.style.borderRadius = '0 8px 8px 0';
                mainContainer.style.boxShadow = '0 0 30px rgba(0,0,0,0.9)';
                mainContainer.style.zIndex = '2025';
                mainContainer.style.overflow = 'hidden';

                var leftButtonPanel = ui.create.div('#qyh_leftButtonPanel');
                leftButtonPanel.style.position = 'fixed';
                leftButtonPanel.style.left = '8%';
                leftButtonPanel.style.top = '50%';
                leftButtonPanel.style.transform = 'translateY(-50%)';
                leftButtonPanel.style.width = '150px';
                leftButtonPanel.style.height = '88%';
                leftButtonPanel.style.backgroundColor = 'rgba(30, 30, 30, 0.95)';
                leftButtonPanel.style.border = '2px solid #555';
                leftButtonPanel.style.borderRadius = '8px 0 0 8px';
                leftButtonPanel.style.boxShadow = '0 0 15px rgba(0,0,0,0.8)';
                leftButtonPanel.style.overflowY = 'auto';
                leftButtonPanel.style.overflowX = 'hidden';
                leftButtonPanel.style.padding = '18px 12px';
                leftButtonPanel.style.boxSizing = 'border-box';
                leftButtonPanel.style.zIndex = '2025';

                var rightPanel = ui.create.div('#qyh_rightPanel');
                rightPanel.style.width = '100%';
                rightPanel.style.height = '100%';
                rightPanel.style.position = 'relative';
                rightPanel.style.overflow = 'hidden';
                rightPanel.style.padding = '0';
                rightPanel.style.boxSizing = 'border-box';

                var closeButton = ui.create.div('#qyh_closeButton', '×');
                closeButton.addEventListener('click', function () {
                    characterPage.hide();
                    ui.system.style.display = '';
                    setTimeout(function () {
                        ui.click.configMenu();
                        ui.menuContainer.style.display = '';
                    }, 500);
                });
                rightPanel.appendChild(closeButton);

                var title = ui.create.div('#qyh_title');
                title.innerHTML = characterPacks.length > 0 ? characterPacks[0].name : '群英会武将';
                rightPanel.appendChild(title);

                var contentContainer = ui.create.div('#qyh_contentContainer');
                contentContainer.style.position = 'absolute';
                contentContainer.style.top = '60px';
                contentContainer.style.left = '0';
                contentContainer.style.width = '100%';
                contentContainer.style.height = 'calc(100% - 60px)';
                contentContainer.style.overflow = 'auto';
                contentContainer.style.padding = '15px';
                contentContainer.style.boxSizing = 'border-box';
                rightPanel.appendChild(contentContainer);

                var buttonContainer = ui.create.div('#qyh_buttonContainer');
                buttonContainer.style.width = '100%';
                buttonContainer.style.height = 'auto';
                buttonContainer.style.display = 'flex';
                buttonContainer.style.flexDirection = 'column';
                buttonContainer.style.gap = '10px';

                for (var i = 0; i < characterPacks.length; i++) {
                    var pack = characterPacks[i];

                    var buttonWrapper = ui.create.div('.qyh_buttonWrapper');
                    buttonWrapper.style.width = '100%';
                    buttonWrapper.style.height = '50px';
                    buttonWrapper.style.display = 'block';
                    buttonWrapper.style.position = 'relative';

                    var button = ui.create.div('.qyh_packButton');
                    button.innerHTML = pack.name;
                    button.style.width = '100%';
                    button.style.height = '100%';
                    button.style.display = 'flex';
                    button.style.alignItems = 'center';
                    button.style.justifyContent = 'center';

                    if (pack.id === currentPack) {
                        button.classList.add('active');
                    }

                    button.setAttribute('data-pack', pack.id);
                    button.addEventListener('click', (function (packId, packName, packData) {
                        return function () {
                            if (currentPack === packId) return;

                            var buttons = leftButtonPanel.querySelectorAll('[data-pack]');
                            for (var j = 0; j < buttons.length; j++) {
                                var btn = buttons[j];
                                if (btn.getAttribute('data-pack') === packId) {
                                    btn.classList.add('active');
                                } else {
                                    btn.classList.remove('active');
                                }
                            }

                            currentPack = packId;
                            title.innerHTML = packName;
                            updateCharacterList(packData);
                        };
                    })(pack.id, pack.name, pack));

                    buttonWrapper.appendChild(button);
                    buttonContainer.appendChild(buttonWrapper);
                }

                leftButtonPanel.appendChild(buttonContainer);

                function updateCharacterList(packInfo) {
                    contentContainer.innerHTML = '';

                    if (!packInfo) return;

                    var charList = packInfo.charList || [];

                    if (charList.length === 0) {
                        
                        var qunyingPack = lib.characterPack['qunying'];
                        var wugengPack = lib.characterPack['wugeng'];

                        if (qunyingPack) {
                            for (var charName in qunyingPack) {
                                if (charName && lib.character[charName] && !charList.includes(charName)) {
                                    charList.push(charName);
                                }
                            }
                        }

                        if (wugengPack) {
                            for (var charName in wugengPack) {
                                if (charName && lib.character[charName] && !charList.includes(charName)) {
                                    charList.push(charName);
                                }
                            }
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

                if (characterPacks.length > 0) {
                    updateCharacterList(characterPacks[0]);
                }

                characterPage.body.appendChild(mainContainer);
                mainContainer.appendChild(rightPanel);
                characterPage.body.appendChild(leftButtonPanel);

                characterPage.show();
                return characterPage;
            };


            game.showQYHCharacterGallery = function () {
                ui.system.style.display = 'none';
                ui.menuContainer.style.display = 'none';
                ui.click.configMenu();

                function Page() {
                    this.body = ui.create.div().hide();
                    this.comps = {};
                    try {
                        this.paBody = document.getElementsByClassName('dialog fixed scroll1')[0];
                        if (!this.paBody) {
                            this.paBody = document.body;
                        }
                        this.paBody.appendChild(this.body);
                    } catch (e) {
                        this.paBody = document.body;
                        this.paBody.appendChild(this.body);
                    }
                }

                Page.prototype = {
                    show: function () {
                        if (!this.body.parentNode && this.paBody) {
                            this.paBody.appendChild(this.body);
                        }
                        this.body.show();
                        this.body.style.display = 'block';
                        this.body.style.zIndex = '2025';
                        this.body.style.position = 'fixed';
                        this.body.style.top = '50%';
                        this.body.style.left = '50%';
                        this.body.style.transform = 'translate(-50%, -50%)';
                        this.body.style.backgroundColor = '#1a1a1a';
                        this.body.style.padding = '0';
                        this.body.style.border = '2px solid #ffd700';
                        this.body.style.borderRadius = '10px';
                        this.body.style.boxShadow = '0 0 30px rgba(255, 215, 0, 0.3)';
                        this.body.style.width = '100%';
                        this.body.style.height = '75%';
                        this.body.style.overflow = 'hidden';
                        this.body.style.textAlign = 'center';
                        return this;
                    },
                    hide: function () {
                        this.body.hide();
                        return this;
                    }
                };

                var characters = [];

                var qunyingSort = lib.characterSort && lib.characterSort.qunying;
                if (qunyingSort) {
                    for (var categoryId in qunyingSort) {
                        if (qunyingSort.hasOwnProperty(categoryId)) {
                            var categoryChars = qunyingSort[categoryId];
                            if (Array.isArray(categoryChars)) {
                                for (var i = 0; i < categoryChars.length; i++) {
                                    var charId = categoryChars[i];
                                    if (lib.character[charId] && !characters.includes(charId)) {
                                        characters.push(charId);
                                    }
                                }
                            }
                        }
                    }
                }

                var wugengSort = lib.characterSort && lib.characterSort.wugeng;
                if (wugengSort) {
                    for (var categoryId in wugengSort) {
                        if (wugengSort.hasOwnProperty(categoryId)) {
                            var categoryChars = wugengSort[categoryId];
                            if (Array.isArray(categoryChars)) {
                                for (var i = 0; i < categoryChars.length; i++) {
                                    var charId = categoryChars[i];
                                    if (lib.character[charId] && !characters.includes(charId)) {
                                        characters.push(charId);
                                    }
                                }
                            }
                        }
                    }
                }

                if (characters.length === 0) {
                    var qunyingPack = lib.characterPack['qunying'];
                    if (qunyingPack) {
                        for (var charId in qunyingPack) {
                            if (qunyingPack.hasOwnProperty(charId) && lib.character[charId] && !characters.includes(charId)) {
                                characters.push(charId);
                            }
                        }
                    }

                    var wugengPack = lib.characterPack['wugeng'];
                    if (wugengPack) {
                        for (var charId in wugengPack) {
                            if (wugengPack.hasOwnProperty(charId) && lib.character[charId] && !characters.includes(charId)) {
                                characters.push(charId);
                            }
                        }
                    }
                }

                if (characters.length == 0) {
                    alert('未找到角色数据');
                    return;
                }

                var galleryPage = new Page();
                galleryPage.body = ui.create.div('.qyh-gallery-content');

                var title = ui.create.div('.qyh-gallery-title', '群英会&武庚纪');

                var closeButton = ui.create.div('.qyh-gallery-close-btn', '×');

                function closeGallery() {
                    galleryPage.hide();
                    ui.system.style.display = '';
                    setTimeout(function () {
                        ui.click.configMenu();
                        ui.menuContainer.style.display = '';
                    }, 500);
                }

                closeButton.addEventListener('click', closeGallery);

                var galleryContainer = ui.create.div('');
                galleryContainer.style.cssText = `
        display: flex;
        align-items: center;
        height: calc(100% - 40px);
        position: relative;
        overflow: hidden;
        padding: 10px 30px;
        box-sizing: border-box;
        margin-top: 10px;
    `;

                var slider = ui.create.div('');
                slider.style.cssText = `
        display: flex;
        transition: transform 0.15s ease;
        height: 100%;
        align-items: center;
        gap: 50px;
        cursor: grab;
    `;

                var containerWidth = window.innerWidth - 50;
                var containerHeight = window.innerHeight * 0.75 - 40;
                var cardHeight = containerHeight * 1.5;
                var cardWidth = cardHeight * (3 / 4);

                var totalWidth = (cardWidth + 50) * characters.length - 50;
                var containerVisibleWidth = containerWidth - 100;
                var maxSlideDistance = Math.max(0, totalWidth - containerVisibleWidth + 5);

                for (var i = 0; i < characters.length; i++) {
                    var charId = characters[i];
                    var charCard = ui.create.div('');

                    charCard.style.cssText = `
            flex-shrink: 0;
            width: ${cardWidth}px;
            height: ${cardHeight}px;
            background: rgba(255, 255, 255, 0.05);
            border: 2px solid rgba(255, 215, 0, 0.5);
            border-radius: 8px;
            overflow: hidden;
            position: relative;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
            margin: 0 auto;
        `;

                    var charImg = document.createElement('img');
                    charImg.style.cssText = `
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        `;

                    var imgSrc = lib.assetURL + 'extension/群英会/' + charId + '.jpg';
                    charImg.src = imgSrc;
                    charImg.onerror = function () {
                        console.log('图片加载失败:', this.src);
                        this.style.background = 'linear-gradient(135deg, #1a1a1a, #333)';
                        this.style.display = 'flex';
                        this.style.alignItems = 'center';
                        this.style.justifyContent = 'center';
                        this.style.color = '#fff';
                        this.style.fontSize = '18px';
                        this.style.textAlign = 'center';
                        this.innerHTML = '<div>暂无图片</div>';
                    };

                    var charName = ui.create.div('.qyh-character-name', get.translation(charId) || charId);
                    charCard.appendChild(charImg);
                    charCard.appendChild(charName);
                    slider.appendChild(charCard);
                }

                var currentSlideDistance = 0;

                function updateDisplay() {
                    slider.style.transform = 'translateX(-' + currentSlideDistance + 'px)';
                }

                var startX = 0;
                var currentX = 0;
                var isDragging = false;

                slider.addEventListener('touchstart', function (e) {
                    startX = e.touches[0].clientX;
                    isDragging = true;
                    slider.style.cursor = 'grabbing';
                    slider.style.transition = 'none';
                });

                slider.addEventListener('touchmove', function (e) {
                    if (!isDragging) return;
                    currentX = e.touches[0].clientX;
                    var diff = (startX - currentX) * 2.5;
                    var newDistance = currentSlideDistance + diff;

                    if (newDistance < 0) newDistance = 0;
                    if (newDistance > maxSlideDistance) newDistance = maxSlideDistance;

                    currentSlideDistance = newDistance;
                    updateDisplay();
                    startX = currentX;
                });

                slider.addEventListener('touchend', function () {
                    isDragging = false;
                    slider.style.cursor = 'grab';
                    slider.style.transition = 'transform 0.15s ease';
                });

                slider.addEventListener('mousedown', function (e) {
                    startX = e.clientX;
                    isDragging = true;
                    slider.style.cursor = 'grabbing';
                    slider.style.transition = 'none';
                    e.preventDefault();
                });

                document.addEventListener('mousemove', function (e) {
                    if (!isDragging) return;
                    currentX = e.clientX;
                    var diff = (startX - currentX) * 2.5;
                    var newDistance = currentSlideDistance + diff;

                    if (newDistance < 0) newDistance = 0;
                    if (newDistance > maxSlideDistance) newDistance = maxSlideDistance;

                    currentSlideDistance = newDistance;
                    updateDisplay();
                    startX = currentX;
                });

                document.addEventListener('mouseup', function () {
                    isDragging = false;
                    slider.style.cursor = 'grab';
                    slider.style.transition = 'transform 0.15s ease';
                });

                galleryContainer.appendChild(slider);

                galleryPage.body.appendChild(title);
                galleryPage.body.appendChild(closeButton);
                galleryPage.body.appendChild(galleryContainer);

                lib.setScroll(galleryPage.body);
                galleryPage.show();

                setTimeout(function () {
                    updateDisplay();
                }, 100);

                return galleryPage;
            };
            // ---------------------------------------Audio------------------------------------------//
            game.playSu = function (fn, dir, sex) {
                if (lib.config.background_speak) {
                    if (dir && sex)
                        game.playAudio(dir, sex, fn);
                    else if (dir)
                        game.playAudio(dir, fn);
                    else
                        game.playAudio('..', 'extension', '群英会', fn);
                }
            }

            // ---------------------------------------Die Audio------------------------------------------//
            lib.skill._zhengwangpeiyin = {
                trigger: { global: 'dieBegin', },
                //direct:true,
                priority: 2,
                forced: true,
                unique: true,
                frequent: true,
                content: function () {
                    game.playAudio('..', 'extension', '群英会', trigger.player.name);
                },
            }
            // ==================== 阵亡配音功能 - 通用版本 ====================


            // ---------------------------------------cancelwindow------------------------------------------//	  			
            if (config.cancelwindow) {
                window.onerror = function (msg, src, line, column, err) { };
            }

            // ---------------------------------------New function------------------------------------------//	
            lib.element.player.replaceFujiang = function (name2) {
                var hp = this.hp;
                var maxhp = this.maxHp;
                this.clearSkills();
                this.init(this.name1, name2);
                this.classList.remove('unseen2');
                this.hp = hp;
                this.maxHp = maxhp;
                this.update();
            }
            lib.element.player.addFujiang = function (name2) {
                var hp = this.hp;
                var maxhp = this.maxHp;
                var name = this.name;
                this.uninit();
                this.init(name, name2);
                this.classList.remove('unseen2');
                this.hp = hp;
                this.maxHp = maxhp;
                this.update();
            }
            // ---------------------------------------jilian mingxiang------------------------------------------//			
            lib.skill._jilian_out = {
                trigger: {
                    global: ["roundStart", "dying"],
                },
                forced: true,
                priority: Infinity,
                content: function () {
                    for (var i = 0; i < game.players.length; i++) {
                        if (game.players[i].classList.contains('out') && game.players[i].hasSkill('qunying_mingxiang')) {
                            game.players[i].classList.remove('out');
                            game.playSu('qunying_mingxiang2');
                            //game.broadcastAll() + game.players[i].node.avatar.setBackgroundImage('extension/群英会/qunying_jilian.jpg');                        
                            game.players[i].update();
                        }
                    }
                },
            }

            // ---------------------------------------chooseTime------------------------------------------//									
            if (config._chooseTime) {
                lib.skill._chooseTime = {
                    trigger: { player: 'phaseDrawBefore' },
                    direct: true,
                    content: function () {
                        player.forceCountChoose = { chooseToUse: 15, default: 15 };
                    },
                }
            }

            // ---------------------------------------wujianglang------------------------------------------//		

            if (config.qunying) {
                for (var i in lib.characterPack['qunying']) {
                    if (lib.character[i][4].indexOf("forbidai") < 0) lib.character[i][4].push("forbidai");
                };
            };
            if (config.wugeng) {
                for (var i in lib.characterPack['wugeng']) {
                    if (lib.character[i][4].indexOf("forbidai") < 0) lib.character[i][4].push("forbidai");
                };
            };


        }, precontent: function (qunyinghui) {

            lib.extensionMenu.extension_群英会.qyh_paiduikoujue = {
                name: '<div class="qyh_menu">牌堆口诀<font size="3px">⇨</font></div>',
                clear: true,
                onclick: function () {
                    if (this.qyh_paiduikoujue == undefined) {
                        game.playSu('qyh_open');
                        var more = ui.create.div('.qyh_paiduikoujue', '<li> 二一普黑九雷杀<li>九张普红五火杀<li>五酒不欢三国杀<li>二十四闪十二桃<li>两兵三乐四无中<li>五顺六拆七无懈<li>三南一箭一桃园<li>三斗两刀两谷电<li>三道火攻六连环<li>算尽牌堆定乾坤');
                        this.parentNode.insertBefore(more, this.nextSibling);
                        this.qyh_paiduikoujue = more;
                        this.innerHTML = '<div class="qyh_menu">牌堆口诀<font size="3px">⇩</font></div>';
                    } else {
                        game.playSu('qyh_close');
                        this.parentNode.removeChild(this.qyh_paiduikoujue);
                        delete this.qyh_paiduikoujue;
                        this.innerHTML = '<div class="qyh_menu">牌堆口诀<font size="3px">⇨</font></div>';
                    }
                },
            };

            lib.init.css(lib.assetURL + 'extension/群英会', 'extension');
            delete lib.extensionMenu.extension_群英会.delete;
            lib.extensionMenu['extension_' + '群英会'].delete = { name: '删除此扩展', clear: true, };

            //动画：
            /*game.qyhGif=function(str,width,height,isAnimation){
    var str1='';
    if (isAnimation) {
    str1=lib.assetURL+'extension/群英会/'+str;
    return str1;
    }
    else {
    str1='<img src='+lib.assetURL+'extension/群英会/'+str+' width='+width+'   height='+height+'>';
    return str1;
    }
    }
    */

            if (qunyinghui.enable) {

                game.import('character', function () {

                    var qunying = {
                        name: 'qunying',
                        connect: true,
                        characterSort: {
                            qunying: {
                                "qunying_zhanguo": ["qunying_baiqi", "qunying_qinshiwang"],
                                "qunying_longzhu": ["qunying_frieza", "qunying_jilian"],
                                "qunying_wuxia": ["qunying_weixiaobao"],
                                "qunying_qingshi": ["qinshi_genie", "qinshi_weizhuang", "qinshi_xiaoyaozi", "qinshi_mozi"],
                                "qunying_sanguo": ["sanguo_zhihuaxiong", "sanguo_zhangfei", "sanguo_jiangwei", "sanguo_menghuo",
                                    "sanguo_nanhua", "sanguo_simahui", "sanguo_caomao", "sanguo_miheng", "sanguo_qiaoguolao"
                                ],
                                "qunying_xu": ["xu_xiaosu", "xu_xiaoxu", "xu_cheng", "xu_SPxiaosu", "xu_xiaohuan"],
                            },
                        },
                        character: {
                            "qunying_baiqi": ["male", "xqin", 4, ["qunying_shashen"], []],
                            "qunying_qinshiwang": ["male", "xqin", 3, ["qunying_shaohe", "qunying_tongji", "qunying_wangxiao"], []],
                            "qunying_frieza": ["male", "shen", 2, ["qunying_weishe", "qunying_diwang"], []],
                            "qunying_frieza1": ["male", "shen", "2/3", ["qunying_beihua", "qunying_guanjue"], ["unseen"]],
                            "qunying_frieza2": ["male", "shen", "3/4", ["qunying_xiaohan", "qunying_yiqu"], ["unseen"]],
                            "qunying_frieza3": ["male", "shen", "4/5", ["qunying_kunxi", "qunying_wanti"], ["unseen"]],
                            "qunying_jilian": ["male", "shen", 3, ["qunying_mingxiang", "qunying_zhengyi"], []],
                            "qunying_weixiaobao": ["male", "qun", 3, ["qunying_haodu", "qunying_fengyuan"], []],

                            "qinshi_genie": ["male", "qun", 3, ["qinshi_zongjian", "qinshi_jiansheng"], []],
                            "qinshi_weizhuang": ["male", "qun", 4, ["qinshi_hengjian", "qinshi_jusha"], []],
                            "qinshi_xiaoyaozi": ["male", "qun", 4, ["qinshi_renzhong", "qinshi_diedun"], []],
                            "qinshi_mozi": ["male", "wu", 3, ["qinshi_jingxie", "qinshi_feigong", "qinshi_jianai"], []],

                            "sanguo_zhihuaxiong": ["male", "qun", 4, ["sanguo_wenjiu", "sanguo_badao"], []],
                            "sanguo_zhangfei": ["male", "shu", 4, ["paoxiao", "sanguo_tishen", "sanguo_tannan"], []],
                            "sanguo_jiangwei": ["male", "shu", 4, ["sanguo_tiaoxin", "sanguo_guanxing"], []],
                            "sanguo_menghuo": ["male", "qun", 1, ["sanguo_xiongqi", "sanguo_xiangfu", "sanguo_manwang"], []],
                            "sanguo_nanhua": ["male", "qun", 3, ["sanguo_xiandao", "sanguo_xiuzheng", "sanguo_chuanshu"], []],
                            "sanguo_simahui": ["male", "qun", 4, ["sanguo_shouye", "sanguo_jiehuo"], []],
                            "sanguo_caomao": ["male", "wei", 3, ["sanguo_qianzhi", "sanguo_yanghui", "sanguo_juli"], []],
                            "sanguo_miheng": ["male", "qun", 3, ["sanguo_kuangcai", "shejian"], []],
                            "sanguo_qiaoguolao": ["male", "wu", 3, ["sanguo_naxian", "sanguo_zexu"], []],

                            "xu_xiaosu": ["male", "shen", 3, ["xu_qingshang", "xu_xibie"], []],
                            "xu_xiaoxu": ["male", "shen", 3, ["xu_yunchou", "xu_dingju", "xu_tuiyin"], []],
                            "xu_cheng": ["male", "shen", 3, ["xu_tiandun"], []],
                            "xu_SPxiaosu": ["male", "shen", 3, ["xu_huhua", "xu_shuangsu"], []],
                            "xu_xiaohuan": ["female", "shen", 3, ["xu_lixing", "xu_choumou"], ["unseen"]],

                        },
                        characterIntro: {

                            "sanguo_yujin": "代码来源于贴吧和QQ群的大佬之手，此扩展代为收集。",
                            "sanguo_menghuo": "七擒七纵之孟获。",
                            "sanguo_zhangfei": "糅合太阳神三国杀智包的张飞。",
                            "sanguo_zhihuaxiong": "太阳神三国杀智包的华雄。",
                            "sanguo_simahui": "太阳神三国杀智包的司马徽，略有改动。",
                            "sanguo_jiangwei": "诸葛亮弟子",
                            "sanguo_nanhua": "南华老仙，古典小说《三国演义》中张角的师傅，在《三国演义》中将三卷天书【太平要术】传给张角，让他普救世人。张角得此书，晓夜攻习，能呼风唤雨，号为 “天公将军”，开启三国乱世。南华老仙与迷之仙人左慈，太平道人于吉，被称为汉末三仙",
                            "qunying_baiqi": "白起（？—公元前257年），芈姓，白氏，名起，郿邑（今陕西眉县常兴镇白家村）人。战国时期杰出的军事家、“兵家”代表人物。楚平王之孙白公胜后代。熟知兵法，善于用兵，交好秦宣太后和穰侯魏冉的关系很好。辅佐秦昭王，屡立战功。伊阕之战，大破魏韩联军；伐楚之战，攻陷楚都郢城。长平之战，重创赵国主力。担任秦军主将30多年，攻城70余座，为秦国统一六国做出了巨大的贡献，受封为武安君。功高震主，得罪应侯，接连贬官。秦昭襄王五十年（前257年），赐死于杜邮。作为中国历史上继孙武、吴起之后又一个杰出的军事家、统帅，白起与廉颇、李牧、王翦并称为战国四大名将，名列武庙十哲",
                            "qunying_qinshiwang": "秦始皇嬴政（公元前259年—公元前210年），嬴姓，赵氏，又名赵正（政），或称祖龙  。秦庄襄王和赵姬之子。  中国历史上著名的政治家、战略家、改革家，首次完成中国大一统的政治人物，也是中国第一个称皇帝的君主。 秦始皇出生于赵国都城邯郸（今邯郸），后回到秦国。前247年，13岁时即王位。   前238年，22岁的嬴政在故都雍城举行成人加冕仪式，并平定长信侯嫪毐的叛乱，之后又除掉权臣吕不韦，开始“亲理朝政”。  重用李斯、尉缭，自前230年至前221年，先后灭韩、赵、魏、楚、燕、齐六国，39岁时完成了统一中国大业，建立起一个中央集权的统一的多民族国家——秦朝，并奠定中国本土的疆域,秦始皇认为自己的功劳胜过之前的三皇五帝，采用三皇之“皇”、五帝之“帝”构成“皇帝”的称号，  是中国历史上第一个使用“皇帝”称号的君主，所以自称“始皇帝”。同时在中央实行三公九卿，管理国家大事。地方上废除分封制，代以郡县制，同时书同文，车同轨，统一度量衡。对外北击匈奴，南征百越，修筑万里长城，修筑灵渠，沟通水系。但是到了后期，求仙梦想长生，苛政虐民，扼杀民智，动摇了秦朝统治的根基，前210年，秦始皇东巡途中驾崩于邢台沙丘。 秦始皇奠定中国两千余年政治制度基本格局，被明代思想家李贽誉为“千古一帝”",
                            "qunying_frieza": "弗利萨（Frieza，フリーザ），日本漫画家鸟山明作品《龙珠》中的那美克星篇的主要反派角色，战斗力十分强大，大头目级人物。他使用眼睛来判断事物，并且可以在真空环境下生存。自称是最强的宇宙帝王，收服了大量的手下，占领资源丰富的星球，并借助了外星科技制造宇宙飞船用于军事侵略，挑选的部队都是精英战士。由于害怕超级赛亚人的出现，毁灭了贝吉塔行星，几乎令所有赛亚人灭绝。后来弗利萨偷听了贝吉塔跟那巴的对话得知那美克星有龙珠可以实现愿望，便出发去那美克星夺取龙珠企图实现长生不老的愿望。但是在那美克星后不久，手下逐个被贝吉塔及孙悟空等人杀死，亲自出手时展示三段变身的能力让所有人感到绝望，由于杀死了克林令悟空极度愤怒觉醒变成超级赛亚人，经过一番激战终于被悟空打败。",
                            "qunying_jilian": "吉连，是日本动漫《龙珠超》中登场的角色。维护宇宙和平的英雄团队“骄傲战队”的10名主力成员之一。是个沉默寡言的战士，其实力据说已经达到了破坏神的领域。",
                            "qinshi_genie": "国产第一动漫《秦时明月》中的角色，纵横家，剑法超绝，号称天下第一剑之剑圣。",
                            "qinshi_weizhuang": "国产第一动漫《秦时明月》中的角色，纵横家，剑圣盖聂的师弟，流沙组织首领。为人冷酷，武功极高。",
                            "qinshi_xiaoyaozi": "中国3D武侠动画《秦时明月》系列中的原创男性角色。 道家人宗掌门人，行踪飘忽，神龙见首不见尾，率领人宗弟子们与墨家等一同反秦。佩剑是剑谱十大名剑中排名第六的道家镇门之剑“雪霁”。",
                            "qinshi_mozi": "墨子，墨家的创始人，首任巨子，主张“非攻”、“兼爱”、“节用”，曾与公输家族的鲁班较量，化解了一场战争。未在《秦时明月》中正式出现，其事迹仅出于他人口述",
                            "xu_xiaosu": "原武将和技能设计均源于橙续缘的作品《吧友列传》扩展中的人物，为本扩展的作者所设计的形象。原技能名分别为“探索”和“拷贝”，这里略作修改。",
                            "xu_xiaoxu": "特别感谢神座◎sagiri大佬对技能【运筹】、【定局】所作的贡献，该技能与其作品《作者包》中的“小苏”的作者技异曲同工。小徐，其人熟读《三国演义》，为人处世如运筹帷幄的元帅，但有时却是个死宅，如同隐退江湖一般销声匿迹……",
                            "xu_cheng": "小诚，一个善于思考、乐于学习的人，喜欢钻研新技术知识，尤其是计算机软件技术，爱好艺术、文学、历史、时政热点话题……",

                        },
                        characterTitle: {
                            "qinshi_genie": "纵横家-剑圣",
                            "qinshi_weizhuang": "纵横家-流沙头目",
                            "qinshi_xiaoyaozi": "道家-人宗掌门",
                            "qinshi_mozi": "墨家巨子",
                            "sanguo_jiangwei": "龙的衣钵",
                            "sanguo_wangyun": "司徒",
                            "sanguo_nanhua": "虚包-南华真人",
                        },
                        perfectPair: {
                            "qinshi_genie": ['qinshi_weizhuang'],
                        },
                        skill: {

                            "xu_lixing": {
                                trigger: {
                                    player: "shaBegin",
                                },
                                direct: true,
                                filter: function (event, player) {
                                    return player.isAlive();
                                },
                                content: function () {
                                    if (trigger.target.countCards('h')) {
                                        player.logSkill('xu_lixing');
                                        game.playSu(['sanguo_wuniang1', 'sanguo_wuniang2'].randomGet());
                                        player.gainPlayerCard(trigger.target, 'h', true);
                                    }
                                    else {
                                        event.finish();
                                    }
                                },
                                ai: {
                                    effect: {
                                        player: function (card, player, target) {
                                            if (card.name == 'sha') return [1, 1];
                                        },
                                    },
                                },
                            },

                            "xu_choumou": {
                                audio: ["yuhua", 2],
                                trigger: {
                                    global: "shaMiss",
                                },
                                frequent: true,
                                filter: function (event, player) {
                                    return player.isAlive();
                                },
                                content: function () {
                                    //game.playSu(['sanguo_zhengnan1','sanguo_zhengnan2'].randomGet());          
                                    event.card = get.cardPile(function (card) {
                                        return get.type(card) == 'equip';
                                    });
                                    if (event.card) {
                                        player.equip(event.card, true).set('delay', true);
                                    }
                                },
                                ai: {
                                    order: 1,
                                    expose: 0.2,
                                },
                            },

                            "xu_huhua": {
                                audio: ["roulin", 2],
                                trigger: {
                                    global: "damageEnd",
                                },
                                priority: 2019,
                                group: "xu_huhua2",
                                // check:function (event,player){
                                // return get.attitude(player,event.player)>0;
                                //   },
                                filter: function (event, player) {
                                    return event.source && event.player.sex == 'female' && event.source != player;
                                },
                                content: function () {
                                    'step 0'
                                    if (lib.config.mode == 'guozhan') {
                                        player.replaceFujiang(trigger.player.name);
                                    }
                                    else {
                                        player.addFujiang(trigger.player.name);
                                    }
                                    'step 1'
                                    var list;
                                    if (_status.connectMode) {
                                        list = get.charactersOL(function (i) {
                                            return lib.character[i][1] != 'shen' && lib.character[i][0] != 'male';
                                        });
                                    }
                                    else {
                                        list = get.gainableCharacters(function (info) {
                                            if (info[0] == 'male') return false;
                                            return info[1] == ['shen', 'shu', 'wei', 'wu', 'qun', 'jin'].randomGet();
                                        });
                                    }
                                    var name = list.randomGet();
                                    var a = trigger.player.hp;
                                    var b = trigger.player.maxHp;
                                    trigger.player.reinit(trigger.player.name, name, false);
                                    trigger.player.hp = a;
                                    trigger.player.maxHp = b;
                                    trigger.player.update();
                                    'step 2'
                                    var list;
                                    if (_status.connectMode) {
                                        list = get.charactersOL(function (i) {
                                            return lib.character[i][1] != 'shen' && lib.character[i][0] != 'male';
                                        });
                                    }
                                    else {
                                        list = get.gainableCharacters(function (info) {
                                            if (info[0] == 'male') return false;
                                            return info[1] == ['shen', 'shu', 'wei', 'wu', 'qun', 'jin'].randomGet();
                                        });
                                    }
                                    var name = list.randomGet();
                                    var a = trigger.source.hp;
                                    var b = trigger.source.maxHp;
                                    trigger.source.reinit(trigger.source.name, name, false);
                                    trigger.source.hp = a;
                                    trigger.source.maxHp = b;
                                    trigger.source.update();
                                },
                                ai: {
                                    order: 1,
                                    expose: 0.5,
                                },
                            },

                            "xu_huhua2": {
                                audio: ["benyu", 2],
                                trigger: {
                                    player: "damageEnd",
                                },
                                priority: 2019,
                                // frequent:true,
                                filter: function (event, player) {
                                    return event.source && event.source != player && player.isAlive();
                                },
                                content: function () {
                                    var list;
                                    if (_status.connectMode) {
                                        list = get.charactersOL(function (i) {
                                            return lib.character[i][1] != 'shen' && lib.character[i][0] != 'male';
                                        });
                                    }
                                    else {
                                        list = get.gainableCharacters(function (info) {
                                            if (info[0] == 'male') return false;
                                            return info[1] == ['shen', 'shu', 'wei', 'wu', 'qun', 'jin'].randomGet();
                                        });
                                    }
                                    var name = list.randomGet();
                                    var a = trigger.source.hp;
                                    var b = trigger.source.maxHp;
                                    trigger.source.reinit(trigger.source.name, name, false);
                                    trigger.source.hp = a;
                                    trigger.source.maxHp = b;
                                    trigger.source.update();
                                },
                                ai: {
                                    order: 1,
                                    expose: 0.5,
                                },
                            },

                            "xu_shuangsu": {
                                trigger: {
                                    player: "dying",
                                },
                                forced: true,
                                priority: 100,
                                filter: function (event, player) {
                                    return player.hp <= 0;
                                },
                                content: function () {
                                    if (lib.config.mode == 'guozhan') {
                                        player.replaceFujiang('xu_xiaohuan');
                                    }
                                    else {
                                        player.addFujiang('xu_xiaohuan');
                                    }
                                    player.$fullscreenpop('双栖双宿', 'fire');
                                    player.recover(3 - player.hp);
                                    game.delay(2);
                                    game.playSu(['sanguo_xushen1', 'sanguo_xushen2'].randomGet());
                                    player.removeSkill('xu_huhua');
                                    player.addSkill('xu_dongliang');
                                    player.awakenSkill('xu_shuangsu');
                                },
                            },

                            "xu_dongliang": {
                                audio: ["songci", 2],
                                trigger: {
                                    player: "damageBegin",
                                },
                                priority: 100,
                                frequent: true,
                                filter: function (event, player) {
                                    return player.isAlive();
                                },
                                content: function () {
                                    var num = game.countPlayer(function (current) {
                                        return current.sex == 'female';
                                    });
                                    player.draw(num);
                                },
                            },

                            "xu_dingju": {
                                audio: ["benyu", 2],
                                enable: "phaseUse",
                                limited: true,
                                unique: true,
                                mark: true,
                                marktext: "定",
                                content: function () {
                                    'step 0'
                                    player.awakenSkill("xu_dingju");
                                    event.num = 0;
                                    event.characters = [];
                                    for (var i = 0; i < game.players.length; i++) {
                                        if (game.players[i] != player) {
                                            event.characters.push(game.players[i].name);
                                            //game.players[i].classList.add('out');
                                        }
                                    }
                                    event.targets = game.filterPlayer(function (current) {
                                        return current != player;
                                    });
                                    event.targets.sort(lib.sort.seat);
                                    'step 1'
                                    if (event.num < event.targets.length) {
                                        player.chooseButton(ui.create.dialog('请您选择一张武将牌替换' + get.translation(event.targets[event.num]) + '的武将牌', [event.characters, 'character'], true), function (button) {
                                            return Math.random();
                                        });
                                    } else {
                                        player.awakenSkill("xu_dingju");
                                        event.finish();
                                    }
                                    'step 2'
                                    if (result.bool) {
                                        player.line(event.targets[event.num], 'green');
                                        var a = event.targets[event.num].hp;
                                        var b = event.targets[event.num].maxHp;
                                        event.targets[event.num].init(result.links[0]);
                                        event.targets[event.num].maxHp = b;
                                        event.targets[event.num].hp = a;
                                        //event.targets[event.num].classList.remove('out');
                                        event.characters.remove(result.links[0]);
                                        //event.characters.remove(result.links[0][2]);
                                        event.targets[event.num].update();
                                        event.num++;
                                        event.goto(1);
                                    } else {
                                        event.finish();
                                    }
                                },
                                ai: {
                                    order: 2,
                                    result: {
                                        player: 1,
                                    },
                                },
                            },

                            "xu_tiandun": {
                                audio: ["xinsheng", 2],
                                trigger: {
                                    player: "damage",
                                },
                                forced: true,
                                popup: false,
                                silent: true,
                                unique: true,
                                priority: 2019,
                                init: function (player) {
                                    player.storage.tian = true;
                                },
                                filter: function (event, player) {
                                    return event.card && event.card.isCard && player != event.source;
                                },
                                content: function () {
                                    'step 0'
                                    var skill = trigger.source.skills.randomGet();
                                    // skill.remove('xu_jisha');
                                    if (skill != 'xu_jisha') {
                                        player.addSkill(skill);
                                        player.mark(skill, {
                                            name: get.translation(skill),
                                            content: lib.translate[skill + '_info']
                                        });
                                        game.log(player, '获得技能', '【' + get.translation(skill) + '】');
                                    }
                                    'step 1'
                                    var list = [];
                                    for (var i in lib.character) {
                                        if (lib.character[i].mode && lib.character[i].mode.contains(lib.config.mode) == false) continue;
                                        if (i != 'list') list.push(i);
                                    }
                                    var names = [];
                                    for (var i = 0; i < game.players.length; i++) {
                                        names.push(game.players[i].name);
                                        names.push(game.players[i].name2);
                                    }
                                    for (var i = 0; i < game.dead.length; i++) {
                                        names.push(game.dead[i].name);
                                        names.push(game.dead[i].name2);
                                    }
                                    if (list.length) {
                                        var dialog = ui.create.dialog([list, 'character']);
                                        var next = player.chooseButton(dialog);
                                        next.ai = function (button) {
                                            var di = ['luoshen', 'jizhi', 'reguose', 'jieyin', 'lijian', 'shangshi', 'ganlu', 'miji'];
                                            var tian = ['qingguo', 'xiaoji', 'beige', 'buyi', 'qiuyuan', 'qieting', 'qiaoshi', 'shenxian', 'liangzhu', 'zhendu'];
                                            if (!player.storage.tian) {
                                                for (var i = 0; i < tian.length; i++) {
                                                    if (lib.character[button.link][3].contains(tian[i])) {
                                                        return Math.random();
                                                    }
                                                }
                                            }
                                            else {
                                                for (var i = 0; i < di.length; i++) {
                                                    if (lib.character[button.link][3].contains(di[i])) {
                                                        return Math.random();
                                                    }
                                                }
                                            }
                                            return 0;
                                        }
                                        next.filterButton = function (button) {
                                            return !names.contains(button.link);
                                        }
                                        if (player.storage.tian == true) {
                                            player.storage.tian = false;
                                        }
                                        else player.storage.tian = true;
                                    }
                                    'step 2'
                                    if (result.bool) {
                                        var a = trigger.source.hp;
                                        var b = trigger.source.maxHp;
                                        trigger.source.init(result.links[0]);
                                        trigger.source.hp = a;
                                        trigger.source.maxHp = b;
                                        trigger.source.update();
                                        player.draw(Math.ceil(trigger.card.number / 3));
                                    }
                                    else event.finish();
                                },
                                ai: {
                                    maixie: true,
                                    "maixie_hp": true,
                                    effect: {
                                        target: function (card, player, target) {
                                            if (get.tag(card, 'damage')) {
                                                if (player.hasSkillTag('jueqing')) return [1, -2];
                                                if (!target.hasFriend()) return;
                                                if (target.hp >= 4) return [1, get.tag(card, 'damage') * 3];
                                                if (target.hp == 3) return [1, get.tag(card, 'damage') * 2];
                                                if (target.hp == 2) return [1, get.tag(card, 'damage') * 1];
                                            }
                                        },
                                    },
                                },
                            },
                            "xu_tuiyin": {
                                trigger: {
                                    player: "damage",
                                },
                                filter: function (event, player) {
                                    return player.isAlive();
                                },
                                forced: true,
                                audio: "ext:群英会:2",
                                content: function () {
                                    player.draw(Math.ceil(game.roundNumber / 2));
                                    var chat = ['再敢动我，我会让你深刻知道“死”字是怎么写的', '唉～退隐江湖，也不得一刻的安宁'].randomGet();
                                    player.say(chat);
                                },
                            },

                            "xu_yunchou": {
                                mode: ["identity"],
                                audio: "ext:群英会:2",
                                enable: "phaseUse",
                                limited: true,
                                unique: true,
                                mark: true,
                                marktext: "运",
                                $createButton(item, type, position, noclick, node) {
                                    node = ui.create.identityCard(item, position, noclick);
                                    node.link = item;
                                    return node;
                                },
                                content: function () {
                                    'step 0'
                                    player.$fullscreenpop('运筹帷幄', 'fire');
                                    player.awakenSkill("xu_yunchou");
                                    /*
                                    event.num = 0;
                                    event.identitys = [];
                                    for (var i = 0; i < game.players.length; i++) {
                                        if (game.players[i].identity == "mingzhong") game.players[i].identity = "zhong";
                                        if (game.players[i].identity != 'zhu') {
                                            //event.identitys.push(game.players[i].identity);          
                                            event.identitys.push('identity_'+game.players[i].identity);                                                                                       
                                        }
                                    }
                                    event.targets = game.filterPlayer(function (current) {
                                        return current.identity != 'zhu';
                                    });
                                    event.targets.sort(lib.sort.seat);
                                    'step 1'
                                    if (event.num < event.targets.length) {
                                        if(event.identitys.length>1){
                                        player.chooseButton(ui.create.dialog('请您选择一张身份牌替换' + get.translation(event.targets[event.num]) + '的身份牌', [event.identitys, 'vcard'], true), function (button) {                                            
                                            return Math.random();
                                            // return get.rank(button.link,true);
                                        });
                                        }else{
                                            game.delay();
                                            var word = event.identitys[0];
                                            var prefix = "identity_";
                                            var newidentity = word.slice(prefix.length);                                            
                                            player.line(event.targets[event.num], 'green');                                       
                                            event.targets[event.num].identity = newidentity;
                                            event.targets[event.num].setIdentity(newidentity);                                        
                                            event.targets[event.num].update();
                                            event.finish();
                                        }
                                    } else {
                                        //game.showIdentity(false);								
                                        //_status.identityShown=false
                                        event.finish();
                                    }
                                    'step 2'
                                    if (result.bool) {
                                        var word = result.links[0];
                                        var prefix = "identity_";                                        
                                        var newidentity = word.replace(prefix, "");                                        
                                        player.line(event.targets[event.num], 'green');
                                        //event.targets[event.num].identity = result.links[0];
                                        //event.targets[event.num].setIdentity(result.links[0]);
                                        event.targets[event.num].identity = newidentity;
                                        event.targets[event.num].setIdentity(newidentity);
                                        event.identitys.remove(result.links[0]);
                                        event.targets[event.num].update();
                                        event.num++;
                                        event.goto(1);
                                    } else {
                                        //game.showIdentity(false);								
                                        //_status.identityShown=false;
                                        event.num++;
                                        event.goto(1);                                        
                                    }
                                    */
                                    event.num = 0;
                                    event.identitys = [];
                                    for (var i = 0; i < game.players.length; i++) {
                                        if (game.players[i].identity == "mingzhong") game.players[i].identity = "zhong";
                                        if (game.players[i].identity != 'zhu') {
                                            event.identitys.push(game.players[i].identity);
                                        }
                                    }
                                    event.targets = game.filterPlayer(function (current) {
                                        return current.identity != 'zhu';
                                    });
                                    //event.targets.sort(lib.sort.seat);
                                    'step 1'
                                    if (event.num < event.targets.length) {
                                        if (event.identitys.length > 1) {
                                            player.chooseButton(ui.create.dialog('请您选择一张身份牌替换' + get.translation(event.targets[event.num]) + '的身份牌', [event.identitys, function (item, type, position, noclick, node) {
                                                return lib.skill.xu_yunchou.$createButton(item, type, position, noclick, node);
                                            },], true), function (button) {
                                                return Math.random();
                                                // return get.rank(button.link,true);
                                            });
                                        } else {
                                            game.delay();
                                            player.line(event.targets[event.num], 'green');
                                            event.targets[event.num].identity = event.identitys[0];
                                            event.targets[event.num].setIdentity(event.identitys[0]);
                                            event.targets[event.num].update();
                                            event.finish();
                                        }
                                    } else {
                                        //game.showIdentity(false);								
                                        //_status.identityShown=false
                                        event.finish();
                                    }
                                    'step 2'
                                    if (result.bool) {
                                        player.line(event.targets[event.num], 'green');
                                        event.targets[event.num].identity = result.links[0];
                                        event.targets[event.num].setIdentity(result.links[0]);
                                        event.identitys.remove(result.links[0]);
                                        event.targets[event.num].update();
                                        event.num++;
                                        event.goto(1);
                                    } else {
                                        //game.showIdentity(false);								
                                        //_status.identityShown=false;
                                        event.num++;
                                        event.goto(1);
                                    }
                                },
                                ai: {
                                    order: 2,
                                    result: {
                                        player: 1,
                                    },
                                },
                            },

                            "xu_xibie": {
                                audio: "ext:群英会:2",
                                trigger: {
                                    player: "loseEnd",
                                },
                                filter: function (event, player) {
                                    for (var i = 0; i < event.cards.length; i++) {
                                        if (event.cards[i].original == 'e') return true;
                                    }
                                    return false;
                                },
                                direct: true,
                                content: function () {
                                    "step 0"
                                    player.draw();
                                    "step 1"
                                    player.chooseTarget("惜别：选择发动对象", function (card, player, target) {
                                        return target != player && target.countCards('hej');
                                    }).ai = function (target) {
                                        return -get.attitude(player, target);
                                    };
                                    "step 2"
                                    if (result.bool) {
                                        player.logSkill("xu_xibie", result.targets[0]);
                                        player.discardPlayerCard("hej", result.targets[0], "hej", true);
                                    }
                                    else {
                                        event.finish();
                                    }
                                },
                                ai: {
                                    expose: 0.5,
                                    noe: true,
                                    reverseEquip: true,
                                    effect: {
                                        target: function (card, player, target, current) {
                                            if (get.type(card) == 'equip') return [1, 3];
                                        },
                                    },
                                },
                            },

                            "xu_qingshang": {
                                audio: "ext:群英会:2",
                                trigger: {
                                    player: "damageEnd",
                                },
                                filter: function (event, player) {
                                    return player.countCards('he') > 0;
                                },
                                direct: true,
                                content: function () {
                                    "step 0"
                                    var skillprompt = "是否发动<cS>情殇</cS>？";
                                    skillprompt += "<p>" + get.translation("xu_qingshang_info") + "</p>"
                                    player.chooseBool(skillprompt).ai = function () {
                                        return true;
                                    };
                                    "step 1"
                                    if (result.bool) {
                                        player.chooseToDiscard("情殇：选择弃置一张牌", "he").ai = function (card) {
                                            if (player.hasSkill("xu_xibie")) {
                                                if (get.position(card) == "e") return 15 - get.value(card);
                                            }
                                            return 12 - get.value(card);
                                        };
                                    }
                                    else {
                                        event.finish();
                                    }
                                    "step 2"
                                    if (result.bool) {
                                        player.logSkill("xu_qingshang");
                                        player.chooseControl("基本牌", "锦囊牌", "装备牌", function (event, player) {
                                            if (player.hp <= 1) return "基本牌";
                                            return ["基本牌", "锦囊牌", "装备牌"].randomGet();
                                        }).prompt = "情殇：声明一种牌的类型";
                                    }
                                    else {
                                        event.finish();
                                    }
                                    "step 3"
                                    if (result.control == "基本牌") {
                                        event.type = ["basic"];
                                    }
                                    else if (result.control == "锦囊牌") {
                                        event.type = ["trick", "delay"];
                                    }
                                    else {
                                        event.type = ["equip"];
                                    }
                                    player.popup(result.control);
                                    event.cards = get.cards(5);
                                    player.showCards("情殇展示", event.cards);
                                    "step 4"
                                    for (var i = 0; i < event.cards.length; i++) {
                                        if (!event.type.contains(get.type(event.cards[i]))) {
                                            ui.discardPile.appendChild(event.cards[i]);
                                            event.cards.remove(event.cards[i--]);
                                        }
                                    }
                                    if (event.cards.length) {
                                        player.gain(event.cards);
                                        player.$draw(event.cards);
                                    }
                                },
                            },

                            sanguo_naxian: {
                                trigger: {
                                    player: "phaseBegin",
                                },
                                direct: true,
                                audio: "ext:群英会:2",
                                init: function (player) {
                                    player.storage.sanguo_naxian = [];
                                },
                                filter: function (event, player) {
                                    return player.countCards('h');
                                },
                                marktext: "贤",
                                content: function () {
                                    "step 0"
                                    player.chooseCard([1, Infinity], 'h', get.prompt('sanguo_naxian'), function (card) {
                                        return true;
                                    }).set('ai', function (card) {
                                        return 6 - get.value(card);
                                    });
                                    "step 1"
                                    if (result.bool) {
                                        player.$give(result.cards, player, false);
                                        player.logSkill('sanguo_naxian');
                                        game.log(player, '将', result.cards, '置于武将牌上');
                                        player.storage.sanguo_naxian = player.storage.sanguo_naxian.concat(result.cards);
                                        player.lose(result.cards, ui.special);
                                        player.markSkill('sanguo_naxian');
                                        player.syncStorage('sanguo_naxian');
                                    }
                                },
                                intro: {
                                    content: "cards",
                                    onunmark: function (storage, player) {
                                        if (storage && storage.length) {
                                            for (var i = 0; i < storage.length; i++) {
                                                storage[i].discard();
                                            }
                                            player.$throw(storage);
                                            delete player.storage.sanguo_naxian;
                                        }
                                    },
                                },
                                mod: {
                                    targetEnabled: function (card, player, target, now) {
                                        if (target.storage.sanguo_naxian && target.storage.sanguo_naxian.length > 0) {
                                            if (get.type(card) == 'basic') return false;
                                        }
                                    },
                                },
                                ai: {
                                    threaten: function (player, target) {
                                        if (target.storage.sanguo_naxian && target.storage.sanguo_naxian.length) return 2;
                                        return 1;
                                    },
                                },
                            },
                            sanguo_zexu2: {
                                trigger: { player: 'phaseAfter' },
                                priority: -7,
                                silent: true,
                                forced: true,
                                popup: "sanguo_zexu",
                                content: function () {
                                    for (var i = 0; i < game.players.length; i++) {
                                        if (game.players[i].hasSkill('sanguo_zexu1')) {
                                            game.players[i].storage.sanguo_zexu1 = [];
                                            game.players[i].removeSkill('sanguo_zexu1');
                                        }
                                    }
                                },
                            },
                            sanguo_zexu1: {
                                init: function (player) {
                                    player.storage.sanguo_zexu1 = [];
                                },
                            },
                            sanguo_zexu: {
                                audio: "ext:群英会:2",
                                trigger: {
                                    player: "phaseEnd",
                                },
                                direct: true,
                                group: "sanguo_zexu2",
                                filter: function (event, player) {
                                    if (player.storage.sanguo_naxian < 1) return false;
                                    return true;
                                },
                                content: function () {
                                    "step 0"
                                    event.cards = [];
                                    player.chooseCardButton(get.translation('sanguo_zexu'), player.storage.sanguo_naxian, [1, Math.min(game.players.length - 1, player.storage.sanguo_naxian.length)]);
                                    "step 1"
                                    if (result.bool) {
                                        for (var i = 0; i < result.links.length; i++) {
                                            event.cards.push(result.links[i]);
                                        }
                                        player.$throw(event.cards);
                                        player.storage.sanguo_naxian.remove(result.links);
                                        player.syncStorage('sanguo_naxian');
                                        if (!player.storage.sanguo_naxian.length) {
                                            player.unmarkSkill('sanguo_naxian');
                                        }
                                        else {
                                            player.markSkill('sanguo_naxian');
                                        }
                                    }
                                    else event.finish();
                                    "step 2"
                                    player.chooseControl().set('choiceList', ['令' + get.cnNumber(event.cards.length) + '名其他角色各摸一张牌', '交给' + get.cnNumber(event.cards.length) + '名其他角色各一张“贤”，然后其须弃置一张与之不同类别的手牌，否则失去一点体力']).set('ai', function () {
                                        var num = game.countPlayer(function (current) {
                                            return get.attitude(player, current) <= 0;
                                        });
                                        if (num >= 2) return 1;
                                        return 0;
                                    });
                                    "step 3"
                                    if (result.index == 0) {
                                        event.goto(4);
                                    }
                                    else {
                                        event.num = 0;
                                        event.goto(6);
                                    }
                                    "step 4"
                                    player.chooseTarget(get.prompt('sanguo_zexu'), event.cards.length, true, function (card, player, target) {
                                        return target != player;
                                    }).set('ai', function (target) {
                                        return get.attitude(_status.event.player, target);
                                    });
                                    "step 5"
                                    if (result.bool) {
                                        player.logSkill('sanguo_zexu');
                                        game.cardsDiscard(event.cards);
                                        game.asyncDraw(result.targets);
                                        event.finish();
                                    }
                                    else {
                                        event.finish();
                                    }
                                    "step 6"
                                    player.chooseTarget(get.prompt('sanguo_zexu'), event.cards.length, true, function (card, player, target) {
                                        return target != player;
                                    }).set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                    "step 7"
                                    if (result.bool) {
                                        player.logSkill('sanguo_zexu');
                                        event.targets = result.targets;
                                    }
                                    else {
                                        event.finish();
                                    }
                                    "step 8"
                                    if (event.num < event.targets.length) {
                                        player.chooseCardButton('选择交给' + get.translation(event.targets[event.num]) + '一张“贤”', event.cards, true);
                                    }
                                    else {
                                        event.goto(10);
                                    }
                                    "step 9"
                                    if (result.bool) {
                                        player.line(event.targets[event.num], 'green');
                                        event.targets[event.num].addSkill('sanguo_zexu1');
                                        event.targets[event.num].storage.sanguo_zexu1 = get.type(result.links[0]);
                                        player.$give(result.links[0], event.targets[event.num]);
                                        event.targets[event.num].gain(result.links[0], player);
                                        event.cards.remove(result.links[0]);
                                        event.num++;
                                        event.goto(8);
                                    }
                                    "step 10"
                                    event.num = 0;
                                    event.targets = game.filterPlayer(function (current) {
                                        return current != player && current.hasSkill('sanguo_zexu1');
                                    });
                                    event.targets.sort(lib.sort.seat);
                                    "step 11"
                                    if (event.num < event.targets.length) {
                                        event.targets[event.num].chooseCard('弃置一张与' + get.translation(event.targets[event.num].storage.sanguo_zexu1) + '牌类型不同的手牌，否则失去一点体力', 'h', function (card) {
                                            return get.type(card) != event.targets[event.num].storage.sanguo_zexu1;
                                        }).ai = function (card) {
                                            return 7 - get.value(card);
                                        };
                                    }
                                    else {
                                        event.finish();
                                    }
                                    "step 12"
                                    if (result.bool) {
                                        //event.targets[event.num].line(player,'green'); 		        
                                        event.targets[event.num].discard(result.cards);
                                        event.num++;
                                        event.goto(11);
                                    }
                                    else {
                                        event.targets[event.num].loseHp();
                                        event.num++;
                                        event.goto(11);
                                    }
                                },
                                ai: {
                                    maixie: true,
                                    order: 7,
                                },
                            },
                            "sanguo_kuangcaiclear": {
                                trigger: {
                                    player: "phaseEnd",
                                },
                                audio: ["kuangcai", 2],
                                forced: true,
                                content: function () {
                                    player.storage.sanguo_kuangcaidraw = 0;
                                    //player.storage.sanguo_kuangcai=[];
                                },
                            },
                            "sanguo_kuangcaidraw": {
                                trigger: {
                                    player: "useCardEnd",
                                },
                                audio: ["kuangcai", 2],
                                init: function (player) {
                                    player.storage.sanguo_kuangcaidraw = 0;
                                },
                                frequent: true,
                                filter: function (event, player) {
                                    return _status.currentPhase == player && get.color(event.card) == player.storage.sanguo_kuangcai;
                                },
                                content: function () {
                                    'step 0'
                                    player.draw();
                                    player.storage.sanguo_kuangcaidraw++;
                                    'step 1'
                                    if (player.storage.sanguo_kuangcaidraw >= 5) {
                                        player.storage.sanguo_kuangcaidraw = 0;
                                        var evt = _status.event.getParent('phase');
                                        if (evt) {
                                            game.resetSkills();
                                            _status.event = evt;
                                            _status.event.finish();
                                            _status.event.untrigger(true);
                                        }
                                    }
                                },
                            },
                            "sanguo_kuangcai": {
                                trigger: {
                                    player: "phaseUseBegin",
                                },
                                init: function (player) {
                                    player.storage.sanguo_kuangcai = [];
                                },
                                audio: ["kuangcai", 2],
                                frequent: true,
                                group: ["sanguo_kuangcaidraw", "sanguo_kuangcaiclear"],
                                filter: function (event, player) {
                                    return player.isAlive();
                                },
                                content: function () {
                                    'step 0'
                                    player.judge(ui.special);
                                    'step 1'
                                    player.storage.sanguo_kuangcai = get.color(result.card);
                                    player.addTempSkill('sanguo_kuangcai1', { player: 'phaseAfter' });
                                },
                                ai: {
                                    order: 2.7,
                                    result: {
                                        player: function (player) {
                                            if ((player.storage.sanguo_kuangcai == undefined || player.storage.sanguo_kuangcai == false) && player.countCards('h') < 1) return 0;
                                            return 1;
                                        },
                                    },
                                },
                            },
                            "sanguo_kuangcai1": {
                                mod: {
                                    cardUsable: function (card, player) {
                                        if (player.storage.sanguo_kuangcai == get.color(card)) return Infinity;
                                    },
                                    targetInRange: function (card, player) {
                                        if (player.storage.sanguo_kuangcai == get.color(card)) return true;
                                    },
                                },
                            },
                            "sanguo_qianzhi": {
                                audio: ["mingjian", 2],
                                trigger: {
                                    player: "phaseBegin",
                                },
                                filter: function (event, player) {
                                    return player.isDamaged();
                                },
                                content: function () {
                                    'step 0'
                                    event.cards = get.cards(player.maxHp - player.hp);
                                    event.chosen = [];
                                    event.num = player.maxHp - player.hp;
                                    'step 1'
                                    var js = player.getCards('j');
                                    var pos;
                                    var choice = -1;
                                    var getval = function (card, pos) {
                                        if (js[pos]) {
                                            return (get.judge(js[pos]))(card);
                                        }
                                        else {
                                            return get.value(card);
                                        }
                                    };
                                    for (pos = 0; pos < Math.min(event.cards.length, js.length + 2); pos++) {
                                        var max = getval(event.cards[pos], pos);
                                        for (var j = pos + 1; j < event.cards.length; j++) {
                                            var current = getval(event.cards[j], pos);
                                            if (current > max) {
                                                choice = j;
                                                max = current;
                                            }
                                        }
                                        if (choice != -1) {
                                            break;
                                        }
                                    }
                                    player.chooseCardButton('潜志：选择要移动的牌（还能移动' + event.num + '张）', event.cards).set('filterButton', function (button) {
                                        return !_status.event.chosen.contains(button.link);
                                    }).set('chosen', event.chosen).set('ai', function (button) {
                                        return button.link == _status.event.choice ? 1 : 0;
                                    }).set('choice', event.cards[choice]);
                                    event.pos = pos;
                                    'step 2'
                                    if (result.bool) {
                                        var card = result.links[0];
                                        var index = event.cards.indexOf(card);
                                        event.card = card;
                                        event.chosen.push(card);
                                        event.cards.remove(event.card);
                                        var buttons = event.cards.slice(0);
                                        player.chooseControl(function () {
                                            return _status.event.controlai;
                                        }).set('controlai', event.pos || 0).set('sortcard', buttons).set('tosort', card);
                                    }
                                    else {
                                        event.goto(4);
                                    }
                                    'step 3'
                                    if (typeof result.index == 'number') {
                                        if (result.index > event.cards.length) {
                                            ui.cardPile.appendChild(event.card);
                                        }
                                        else {
                                            event.cards.splice(result.index, 0, event.card);
                                        }
                                        event.num--;
                                        if (event.num > 0) {
                                            event.goto(1);
                                        }
                                    }
                                    'step 4'
                                    while (event.cards.length) {
                                        ui.cardPile.insertBefore(event.cards.pop(), ui.cardPile.firstChild);
                                    }
                                    var js = player.getCards('j');
                                    if (js.length == 1) {
                                        if ((get.judge(js[0]))(ui.cardPile.firstChild) < 0) {
                                            player.addTempSkill('guanxing_fail');
                                        }
                                    }
                                },
                                ai: {
                                    guanxing: true,
                                    order: 8,
                                },
                            },
                            "sanguo_yanghui": {
                                audio: ["huituo", 2],
                                trigger: {
                                    player: "damageEnd",
                                },
                                frequent: true,
                                priority: 2,
                                filter: function (event, player) {
                                    return player.isAlive();
                                },
                                content: function () {
                                    player.gainMaxHp();
                                    player.update();
                                },
                                ai: {
                                    order: 6,
                                    maixie: true,
                                    "maixie_hp": true,
                                },
                            },
                            "sanguo_juli": {
                                audio: ["xingshuai", 2],
                                trigger: {
                                    player: "phaseUseBegin",
                                },
                                filter: function (event, player) {
                                    return player.isDamaged() && player.isMinHp();
                                },
                                /*  
                                  init:function (player){
                          player.storage.sanguo_juli=false;
                      },
                                  intro:{
                                      content:"技能未发动",
                                  },*/
                                content: function () {
                                    "step 0"
                                    event.goto(1);
                                    // player.storage.sanguo_juli=true;                   
                                    "step 1"
                                    player.chooseTarget(get.prompt('sanguo_juli'), [1, Infinity], function (card, player, target) {
                                        return target.group == 'wei';
                                    }, function (target) {
                                        return get.attitude(_status.event.player, target);
                                    });
                                    "step 2"
                                    if (result.bool) {
                                        player.logSkill('sanguo_juli', result.targets);
                                        event.targets = result.targets;
                                    }
                                    else {
                                        event.finish();
                                    }
                                    "step 3"
                                    if (event.targets.length) {
                                        var target = event.targets.shift();
                                        event.current = target;
                                        event.current.draw(player.maxHp - player.hp);
                                        event.redo();
                                    }
                                    else {
                                        player.loseMaxHp(player.maxHp - player.hp);
                                        //  player.unmarkSkill('sanguo_juli');
                                        player.update();
                                        //player.awakenSkill('sanguo_juli');
                                        event.finish();
                                    }
                                },
                                ai: {
                                    order: 5,
                                },
                            },
                            "sanguo_houlve": {
                                audio: ["zhiyu", 2],
                                enable: "chooseToUse",
                                usable: 1,
                                filterCard: function () { return false },
                                selectCard: -1,
                                viewAsFilter: function (player) { return !player.countCards('h') },
                                viewAs: {
                                    name: "wuxie",
                                },
                                onuse: function (result, player) { player.draw() },
                                prompt: "摸一张牌，然后你视为使用一张【无懈可击】",
                                check: function () { return 1 },
                                ai: {
                                    threaten: 0.8,
                                    basic: {
                                        useful: [6, 4],
                                        value: [6, 4],
                                    },
                                    result: {
                                        player: 1,
                                    },
                                    expose: 0.2,
                                },
                            },

                            "sanguo_shouye": {
                                audio: ["xinfu_jianjie", 2],
                                enable: "phaseUse",
                                //zhuanhuanji: true,
                                init: function (player) {
                                    player.storage.sanguo_shouye = 0;
                                },
                                intro: {
                                    content: "已发动了#次授业",
                                },
                                //filterCard: function (card) {
                                //return get.color(card) == 'red';
                                //},
                                filterCard: true,
                                filter: function (event, player) {
                                    if (player.getStat().skill.sanguo_shouye >= 1 && player.hasSkill('sanguo_shien')) return false;
                                    return player.countCards('h') > 0;
                                },
                                filterTarget: function (card, player, target) {
                                    return player != target;
                                },
                                check: function (card) {
                                    return 8 - get.value(card);
                                },
                                position: "h",
                                selectTarget: [1, 2],
                                multitarget: true,
                                multiline: true,
                                content: function () {
                                    game.asyncDraw(targets);
                                    if (!player.hasSkill("sanguo_shien")) {
                                        player.storage.sanguo_shouye += targets.length;
                                    }
                                    player.markSkill('sanguo_shouye');
                                    player.update();
                                },
                                ai: {
                                    threaten: 1,
                                    result: {
                                        target: function (player, target) {
                                            if (target.countCards('h') <= 1) return 3.5;
                                            return 2;
                                        },
                                    },
                                    order: 4,
                                    expose: 0.4,
                                },
                            },
                            "sanguo_jiehuo": {
                                audio: ["xinfu_yinshi", 2],
                                unique: true,
                                trigger: {
                                    player: "sanguo_shouyeAfter",
                                },
                                forced: true,
                                juexingji: true,
                                derivation: "sanguo_shien",
                                filter: function (event, player) {
                                    return player.storage.sanguo_shouye > 5;
                                },
                                content: function () {
                                    'step 0'
                                    player.$fullscreenpop('授业解惑', 'water');
                                    'step 1'
                                    delete player.storage.sanguo_shouye;
                                    player.unmarkSkill('sanguo_shouye');
                                    player.loseMaxHp();
                                    player.addSkill('sanguo_shien');
                                    player.update();
                                    player.awakenSkill('sanguo_jiehuo');
                                },
                            },
                            "sanguo_shien": {
                                global: "sanguo_shien2",
                            },
                            "sanguo_shien2": {
                                trigger: {
                                    player: "useCard",
                                },
                                audio: "ext:群英会:5",
                                prompt: function (event, player) {
                                    var target = game.filterPlayer(function (current) {
                                        return current != player && current.hasSkill('sanguo_shien');
                                    });
                                    return '是否令' + get.translation(target) + '摸一张牌？';
                                },
                                check: function (event, player) {
                                    var num = game.countPlayer(function (current) {
                                        return get.attitude(player, current) > 0 && current.hasSkill('sanguo_shien');
                                    });
                                    return num > 0;
                                },
                                frequent: "check",
                                filter: function (event, player) {
                                    if (get.type(event.card) == 'delay') return false;
                                    return event.card && get.type(event.card, 'trick') == 'trick' && game.hasPlayer(function (current) {
                                        return current != player && current.hasSkill('sanguo_shien');
                                    });
                                },
                                content: function () {
                                    "step 0"
                                    var targets = game.filterPlayer(function (current) {
                                        return current != player && current.hasSkill('sanguo_shien');
                                    });
                                    if (targets.length == 1) {
                                        //game.playSu(['sanguo_shien1', 'sanguo_shien2', 'sanguo_shien3'].randomGet());
                                        player.logSkill("sanguo_shien2");
                                        player.line(targets[0], 'green');
                                        targets[0].draw();
                                        event.finish();
                                    }
                                    else if (targets.length > 1) {
                                        player.chooseTarget('选择一个报答师恩之人', 1, true, function (card, player, target) {
                                            return target != player && target.hasSkill('sanguo_shien');
                                        }).set('ai', function (target) {
                                            return get.attitude(_status.event.player, target) > 0;
                                        });
                                    }
                                    "step 1"
                                    if (result.bool && result.targets.length) {
                                        event.target = result.targets[0];
                                        //game.playSu(['sanguo_shien1', 'sanguo_shien2', 'sanguo_shien3'].randomGet());
                                        player.logSkill("sanguo_shien2");
                                        player.line(event.target, 'green');
                                        event.target.draw();
                                    }
                                    else {
                                        event.finish();
                                    }
                                },
                            },
                            "sanguo_chuanshu": {
                                audio: ["xingshuai", 2],
                                trigger: {
                                    global: "dying",
                                },
                                priority: 8,
                                unique: true,
                                skillAnimation: true,
                                animationColor: "water",
                                filter: function (event, player) {
                                    return event.player.hp <= 0 && event.player != player;
                                },
                                check: function (event, player) {
                                    return get.attitude(player, event.player) > 0;
                                },
                                logTarget: "player",
                                frequent: "check",
                                content: function () {
                                    'step 0'
                                    //  player.logSkill('sanguo_chuanshu',trigger.player);                       
                                    trigger.player.chooseControl('releiji', 'guidao').set('prompt', '' + get.translation(trigger.player) + '获得一项技能');
                                    goon = true;

                                    if (!goon) {
                                        event.finish();
                                    }
                                    'step 1'
                                    trigger.player.addSkillLog(result.control);
                                    trigger.player.recover(1 - trigger.player.hp);
                                    trigger.player.draw(2);
                                    trigger.player.storage.sanguo_chuanshu2 = player;
                                    trigger.player.addSkill('sanguo_chuanshu2');
                                    game.broadcastAll() + trigger.player.node.avatar.setBackgroundImage('extension/群英会/sanguo_zhangjiao.jpg');
                                    // player.removeSkill('sanguo_chuanshu');         
                                    player.awakenSkill('sanguo_chuanshu');
                                },
                            },
                            "sanguo_xiandao1": {
                                audio: ["huashen", 2],
                                forced: true,
                                priority: 10,
                                trigger: {
                                    global: "gameStart",
                                    player: ["phaseEnd", "enterGame"],
                                },
                                filter: function (event, player) {
                                    return player.isAlive();
                                },
                                content: function () {
                                    var n = [1, 2].randomGet();
                                    if (n == 1) {
                                        player.addTempSkill("releiji", { player: "phaseUseBegin" });
                                        player.markSkill("releiji", { player: "phaseUseBegin" });
                                    };
                                    if (n == 2) {
                                        player.addTempSkill("guidao", { player: "phaseUseBegin" });
                                        player.markSkill("guidao", { player: "phaseUseBegin" });
                                    };
                                },
                            },
                            "sanguo_xiandao2": {
                                audio: ["huashen", 2],
                                forced: true,
                                trigger: {
                                    player: "damageBefore",
                                },
                                filter: function (event, player) {
                                    if (!event.nature) return false;
                                    return true;
                                },
                                content: function () {
                                    trigger.cancel();
                                    event.finish();
                                },
                            },
                            "sanguo_xiandao": {
                                forced: true,
                                noRemove: true,
                                //  noDisable:true,
                                group: ["sanguo_xiandao1", "sanguo_xiandao2"],
                            },
                            "sanguo_chuanshu2": {
                                audio: ["songwei", 2],
                                mark: "character",
                                intro: {
                                    content: "当你造成或受到一次伤害后，$摸一张牌",
                                },
                                nopop: true,
                                trigger: {
                                    source: "damageEnd",
                                    player: "damageEnd",
                                },
                                forced: true,
                                popup: false,
                                filter: function (event, player) {
                                    return player.storage.sanguo_chuanshu2 && player.storage.sanguo_chuanshu2.isIn() && event.num > 0;
                                },
                                content: function () {
                                    'step 0'
                                    game.delayx();
                                    'step 1'
                                    var target = player.storage.sanguo_chuanshu2;
                                    player.line(target, 'green');
                                    target.draw();
                                    game.delay();
                                },
                                onremove: true,
                                group: "sanguo_chuanshu3",
                            },
                            "sanguo_chuanshu3": {
                                audio: "ext:群英会:1",
                                trigger: {
                                    player: "dieBegin",
                                },
                                silent: true,
                                onremove: true,
                                filter: function (event, player) {
                                    return player.storage.sanguo_chuanshu2 && player.storage.sanguo_chuanshu2.isIn();
                                },
                                content: function () {
                                    'step 0'
                                    game.delayx();
                                    'step 1'
                                    var target = player.storage.sanguo_chuanshu2;
                                    player.line(target, 'green');
                                    target.restoreSkill('sanguo_chuanshu');
                                    //  target.addSkill('sanguo_chuanshu');
                                    target.update();
                                },
                                forced: true,
                                popup: false,
                            },
                            "sanguo_xiuzheng": {
                                audio: ["xinsheng", 2],
                                enable: "phaseUse",
                                usable: 1,
                                priority: 10,
                                filter: function (event, player) {
                                    return (ui.cardPile.childElementCount + ui.discardPile.childElementCount) >= 2;
                                },
                                filterTarget: function (card, player, target) {
                                    return player != target;
                                },
                                content: function () {
                                    "step 0"
                                    event.cards = get.cards(2);
                                    player.showCards(event.cards);
                                    "step 1"
                                    if (get.color(event.cards[0]) == 'red' && get.color(event.cards[1]) == 'red') {
                                        target.damage('fire');
                                    }
                                    if (get.color(event.cards[0]) != get.color(event.cards[1])) {
                                        player.discardPlayerCard(target, "he", true);
                                    }
                                    if (get.color(event.cards[0]) == 'black' && get.color(event.cards[1]) == 'black') {
                                        target.damage('thunder');
                                    }
                                    "step 2"
                                    if (event.cards.length) {
                                        player.gain(event.cards, 'gain2');
                                        game.delay();
                                    }
                                    "step 3"
                                    player.chooseToDiscard(2, 'he', '请弃置两张牌', true).ai = function (card) {
                                        return 7 - get.value(card);
                                    };
                                },
                                ai: {
                                    threaten: 0.5,
                                    order: 13,
                                    result: {
                                        target: function (player, target) {
                                            return get.damageEffect(target, player);
                                        },
                                    },
                                },
                            },

                            "sanguo_wenjiu": {
                                trigger: {
                                    source: "damageBegin",
                                },
                                audio: "ext:群英会:1",
                                group: "sanguo_wenjiu_1",
                                filter: function (event, player) {
                                    return event.card && event.card.isCard && event.card.name == 'sha' && get.color(event.card) == 'black';
                                },
                                forced: true,
                                content: function () {
                                    trigger.num++;
                                },
                                subSkill: {
                                    "1": {
                                        trigger: {
                                            target: "shaBefore",
                                        },
                                        direct: true,
                                        priority: 11,
                                        filter: function (event, player) {
                                            return (event.card.name == 'sha' && get.color(event.card) == 'red')
                                        },
                                        content: function () {
                                            game.playSu('sanguo_wenjiu1');
                                            trigger.directHit = true;
                                        },
                                        ai: {
                                            threaten: 1,
                                        },
                                        sub: true,
                                    },
                                },
                            },
                            "sanguo_badao": {
                                audio: "ext:群英会:1",
                                trigger: {
                                    target: "shaBefore",
                                },
                                direct: true,
                                priority: 11,
                                filter: function (event, player) {
                                    return event.card.name == 'sha' && get.color(event.card) == 'black';
                                },
                                content: function () {
                                    player.chooseToUse({ name: 'sha' }, '霸刀：是否使用一张杀？').logSkill = 'sanguo_badao';
                                },
                            },

                            "sanguo_zhenjun": {
                                audio: ["jieyue", 2],
                                trigger: {
                                    player: "phaseBegin",
                                },
                                direct: true,
                                content: function () {
                                    "step 0"
                                    player.chooseTarget(get.prompt('sanguo_zhenjun'), function (card, player, target) {
                                        return target.countCards('h') > target.hp;
                                    }).set('ai', function (target) {
                                        return -ai.get.attitude(_status.event.player, target);
                                    });
                                    "step 1"
                                    if (result.bool) {
                                        game.delay();
                                        player.logSkill('sanguo_zhenjun', result.targets);
                                        event.target = result.targets[0];
                                        player.discardPlayerCard(event.target, event.target.countCards('h') - event.target.hp, 'he', true);
                                    }
                                    else {
                                        event.finish();
                                    }
                                    "step 2"
                                    event.num = 0;
                                    for (var i = 0; i < result.links.length; i++) {
                                        if (get.type(result.links[i]) != 'equip') event.num++;
                                    }
                                    event.num1 = 0;
                                    for (var i = 0; i < result.links.length; i++) {
                                        if (get.type) event.num1++;
                                    }
                                    if (event.num) {
                                        player.chooseToDiscard(event.num, 'he', '弃置' + event.num + '张牌，或令' + get.translation(event.target) + '摸' + event.num1 + '张牌').set('ai', function (card) {
                                            return 7 - get.value(card);
                                        });
                                    }
                                    else {
                                        event.finish();
                                    }
                                    'step 3'
                                    if (!result.bool) {
                                        event.target.draw(event.num1);
                                    }
                                },
                                ai: {
                                    expose: 0.2,
                                    threaten: 1.4,
                                },
                            },

                            "sanguo_tishen": {
                                audio: ["retishen", 2],
                                unique: true,
                                mark: true,
                                skillAnimation: true,
                                trigger: {
                                    player: "phaseBegin",
                                },
                                init: function (player) {
                                    player.storage.sanguo_tishen = false;
                                },
                                filter: function (event, player) {
                                    return player.hp < player.maxHp;
                                },
                                check: function (event, player) {
                                    if (player.hp <= 1) return true;
                                    return player.hp < player.maxHp - 1;
                                },
                                frequent: "check",
                                content: function () {
                                    player.awakenSkill('sanguo_tishen');
                                    player.recover(Infinity);
                                    player.draw(player.maxHp - player.hp);
                                    player.storage.sanguo_tishen = true;
                                },
                            },

                            "sanguo_tiaoxin": {
                                audio: ["tiaoxin_jiangwei", 2],
                                enable: "phaseUse",
                                usable: 1,
                                filterTarget: function (card, player, target) {
                                    return target.canUse({ name: 'sha' }, player) && target.countCards('he');
                                },
                                content: function () {
                                    "step 0"
                                    target.chooseToUse({ name: 'sha' }, player, -1, '挑衅：对' + get.translation(player) + '使用一张杀，或令其弃置你的一张牌').set('targetRequired', true);
                                    "step 1"
                                    if (result.bool == false && target.countCards('he') > 0) {
                                        player.discardPlayerCard(target, 'he', true);
                                    }
                                    else {
                                        event.finish();
                                    }
                                },
                                ai: {
                                    order: 4,
                                    expose: 0.2,
                                    result: {
                                        target: -1,
                                        player: function (player, target) {
                                            if (target.countCards('h') == 0) return 0;
                                            if (target.countCards('h') == 1) return -0.1;
                                            if (player.hp <= 2) return -2;
                                            if (player.countCards('h', 'shan') == 0) return -1;
                                            return -0.5;
                                        },
                                    },
                                    threaten: 1.1,
                                },
                            },

                            "sanguo_guanxing": {
                                audio: ["guanxing_jiangwei", 2],
                                trigger: {
                                    player: "damageEnd",
                                },
                                frequent: true,
                                filter: function (event, player) {
                                    return player.isAlive();
                                },
                                content: function () {
                                    "step 0"
                                    if (player.isUnderControl()) {
                                        game.modeSwapPlayer(player);
                                    }
                                    var cards = get.cards(4);
                                    event.cards = cards;
                                    var switchToAuto = function () {
                                        _status.imchoosing = false;
                                        if (event.dialog) event.dialog.close();
                                        if (event.control) event.control.close();
                                        var top = [];
                                        var judges = player.node.judges.childNodes;
                                        var stopped = false;
                                        if (!player.countCards('h', 'wuxie')) {
                                            for (var i = 0; i < judges.length; i++) {
                                                var judge = get.judge(judges[i]);
                                                cards.sort(function (a, b) {
                                                    return judge(b) - judge(a);
                                                });
                                                if (judge(cards[0]) < 0) {
                                                    stopped = true; break;
                                                }
                                                else {
                                                    top.unshift(cards.shift());
                                                }
                                            }
                                        }
                                        var bottom;
                                        if (!stopped) {
                                            cards.sort(function (a, b) {
                                                return get.value(b, player) - get.value(a, player);
                                            });
                                        }
                                        bottom = cards;
                                        for (var i = 0; i < top.length; i++) {
                                            ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
                                        }
                                        for (var i = 0; i < bottom.length; i++) {
                                            ui.cardPile.appendChild(bottom[i]);
                                        }
                                        player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(bottom.length) + '下');
                                        game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
                                        game.delay(2);
                                    };
                                    var chooseButton = function (online, player, cards) {
                                        var event = _status.event;
                                        player = player || event.player;
                                        cards = cards || event.cards;
                                        event.top = [];
                                        event.bottom = [];
                                        event.status = true;
                                        event.dialog = ui.create.dialog('按顺序选择置于牌堆顶的牌（先选择的在上）', cards);
                                        for (var i = 0; i < event.dialog.buttons.length; i++) {
                                            event.dialog.buttons[i].classList.add('pointerdiv');
                                        }
                                        event.switchToAuto = function () {
                                            event._result = 'ai';
                                            event.dialog.close();
                                            event.control.close();
                                            _status.imchoosing = false;
                                        },
                                            event.control = ui.create.control('ok', 'pileTop', 'pileBottom', function (link) {
                                                var event = _status.event;
                                                if (link == 'ok') {
                                                    if (online) {
                                                        event._result = {
                                                            top: [],
                                                            bottom: []
                                                        }
                                                        for (var i = 0; i < event.top.length; i++) {
                                                            event._result.top.push(event.top[i].link);
                                                        }
                                                        for (var i = 0; i < event.bottom.length; i++) {
                                                            event._result.bottom.push(event.bottom[i].link);
                                                        }
                                                    }
                                                    else {
                                                        var i;
                                                        for (var i = 0; i < event.top.length; i++) {
                                                            ui.cardPile.insertBefore(event.top[i].link, ui.cardPile.firstChild);
                                                        }
                                                        for (var i = 0; i < event.bottom.length; i++) {
                                                            ui.cardPile.appendChild(event.bottom[i].link);
                                                        }
                                                        for (var i = 0; i < event.dialog.buttons.length; i++) {
                                                            if (event.dialog.buttons[i].classList.contains('glow') == false &&
                                                                event.dialog.buttons[i].classList.contains('target') == false)
                                                                ui.cardPile.appendChild(event.dialog.buttons[i].link);
                                                        }
                                                        player.popup(get.cnNumber(event.top.length) + '上' + get.cnNumber(event.cards.length - event.top.length) + '下');
                                                        game.log(player, '将' + get.cnNumber(event.top.length) + '张牌置于牌堆顶');
                                                    }
                                                    event.dialog.close();
                                                    event.control.close();
                                                    game.resume();
                                                    _status.imchoosing = false;
                                                }
                                                else if (link == 'pileTop') {
                                                    event.status = true;
                                                    event.dialog.content.childNodes[0].innerHTML = '按顺序选择置于牌堆顶的牌';
                                                }
                                                else {
                                                    event.status = false;
                                                    event.dialog.content.childNodes[0].innerHTML = '按顺序选择置于牌堆底的牌';
                                                }
                                            })
                                        for (var i = 0; i < event.dialog.buttons.length; i++) {
                                            event.dialog.buttons[i].classList.add('selectable');
                                        }
                                        event.custom.replace.button = function (link) {
                                            var event = _status.event;
                                            if (link.classList.contains('target')) {
                                                link.classList.remove('target');
                                                event.top.remove(link);
                                            }
                                            else if (link.classList.contains('glow')) {
                                                link.classList.remove('glow');
                                                event.bottom.remove(link);
                                            }
                                            else if (event.status) {
                                                link.classList.add('target');
                                                event.top.unshift(link);
                                            }
                                            else {
                                                link.classList.add('glow');
                                                event.bottom.push(link);
                                            }
                                        }
                                        event.custom.replace.window = function () {
                                            for (var i = 0; i < _status.event.dialog.buttons.length; i++) {
                                                _status.event.dialog.buttons[i].classList.remove('target');
                                                _status.event.dialog.buttons[i].classList.remove('glow');
                                                _status.event.top.length = 0;
                                                _status.event.bottom.length = 0;
                                            }
                                        }
                                        game.pause();
                                        game.countChoose();
                                    };
                                    event.switchToAuto = switchToAuto;
                                    if (event.isMine()) {
                                        chooseButton();
                                        event.finish();
                                    }
                                    else if (event.isOnline()) {
                                        event.player.send(chooseButton, true, event.player, event.cards);
                                        event.player.wait();
                                        game.pause();
                                    }
                                    else {
                                        event.switchToAuto();
                                        event.finish();
                                    }
                                    player.draw();
                                    "step 1"
                                    if (event.result == 'ai' || !event.result) {
                                        event.switchToAuto();

                                    }
                                    else {
                                        var top = event.result.top || [];
                                        var bottom = event.result.bottom || [];
                                        for (var i = 0; i < top.length; i++) {
                                            ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
                                        }
                                        for (var i = 0; i < bottom.length; i++) {
                                            ui.cardPile.appendChild(bottom[i]);
                                        }
                                        for (var i = 0; i < event.cards.length; i++) {
                                            if (!top.contains(event.cards[i]) && !bottom.contains(event.cards[i])) {
                                                ui.cardPile.appendChild(event.cards[i]);
                                            }
                                        }
                                        player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(event.cards.length - top.length) + '下');
                                        game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
                                        game.delay(2);
                                    }

                                },
                                ai: {
                                    order: 8,
                                    threaten: 1.2,
                                    guanxing: true,
                                },
                            },

                            "sanguo_xiongqi": {
                                audio: ["zaiqi", 2],
                                unique: true,
                                priority: 10,
                                enable: "chooseToUse",
                                mark: true,
                                skillAnimation: true,
                                animationStr: "雄起",
                                animationColor: "fire",
                                init: function (player) {
                                    player.storage.sanguo_xiongqi = false;
                                },
                                filter: function (event, player) {
                                    if (player.storage.sanguo_xiongqi) return false;
                                    return player.hp <= 0;
                                },
                                content: function () {
                                    'step 0'
                                    player.gainMaxHp();
                                    player.discard(player.getCards('j'));
                                    player.hp = Math.min(9, player.maxHp);
                                    player.draw();
                                    'step 1'
                                    player.link(false);
                                    player.turnOver(false);
                                },
                                ai: {
                                    order: 1,
                                    skillTagFilter: function (player) {
                                        if (player.storage.sanguo_xiongqi) return false;
                                        if (player.hp > 0) return false;
                                    },
                                    save: true,
                                    result: {
                                        player: function (player) {
                                            if (player.hp <= 0) return 10;
                                            if (player.hp <= 2 && player.countCards('he') <= 1) return 10;
                                            return 8;
                                        },
                                    },
                                    threaten: function (player, target) {
                                        if (!target.storage.sanguo_xiongqi) return 0.6;
                                    },
                                },
                                intro: {
                                    content: "limited",
                                },
                            },

                            "sanguo_xiangfu": {
                                skillAnimation: true,
                                audio: "ext:群英会:1",
                                unique: true,
                                trigger: {
                                    player: "sanguo_xiongqiEnd",
                                },
                                filter: function (event, player) {
                                    return player.maxHp >= 7;
                                },
                                forced: true,
                                priority: 3,
                                content: function () {
                                    player.die();
                                },
                                ai: {
                                    threaten: function (player, target) {
                                        if (target.hp == 1) return 2;
                                        return 0.5;
                                    },
                                },
                            },

                            "sanguo_manwang": {
                                mod: {
                                    maxHandcard: function (player, num) {
                                        return num += 3 - player.hp;

                                    },
                                },
                                init: function (player) {
                                    if (lib.config.mode == 'identity' && player.isZhu) {
                                        player.loseMaxHp();
                                        player.update();
                                    }
                                },
                            },

                            "sanguo_tannan": {
                                mod: {
                                    globalFrom: function (from, to, distance) {
                                        return distance - (from.maxHp - from.hp);
                                    },
                                },
                            },

                            "qinshi_jianai": {
                                audio: "ext:群英会:2",
                                trigger: { global: 'dying' },
                                skillAnimation: true,
                                animationColor: 'water',
                                filter: function (event, player) {
                                    return event.player.hp <= 0 && player.countCards('e') > 0;
                                },
                                logTarget: 'player',
                                check: function (event, player) {
                                    return get.attitude(player, event.player) > 0;
                                },
                                frequent: "check",
                                content: function () {
                                    'step 0'
                                    player.discard(player.getCards('e'));
                                    'step 1'
                                    trigger.player.recover(1 - trigger.player.hp);
                                    'step 2'
                                    player.chooseBool('是否交给切换装备区？').set('ai', function () {
                                        if (player.storage.qinshi_jingxie > 0) return true;
                                    });
                                    'step 3'
                                    if (result.bool) {
                                        if (player.storage.qinshi_jingxie) {
                                            var list = player.storage.qinshi_jingxie;
                                        }
                                        player.storage.qinshi_jingxie = player.getCards('e');
                                        player.lose(player.getCards('e'), ui.special)._triggered = null;
                                        game.playSu('qinshi_jingxie');
                                        if (list && list.length) {
                                            player.directequip(list);
                                        }
                                    }
                                    else {
                                        event.finish();
                                    }
                                },
                            },
                            "qinshi_feigong": {
                                audio: "ext:群英会:2",
                                trigger: {
                                    player: "damageBegin",
                                },
                                direct: true,
                                priority: 6,
                                filter: function (event, player) {
                                    return event.card && event.card.isCard && event.card.name == 'sha';
                                },
                                content: function () {
                                    "step 0"
                                    if (!trigger.source.countCards('e')) {
                                        trigger.num--;
                                        event.finish();
                                    }
                                    else {
                                        trigger.source.chooseBool('是否交给' + get.translation(player) + '一张装备区的牌？').set('ai', function () {
                                            if (trigger.source.countCards('e') > 0 && get.attitude(player, trigger.source) <= 0) return true;
                                        });
                                    }
                                    "step 1"
                                    if (result.bool) {
                                        player.logSkill('qinshi_feigong');
                                        trigger.source.chooseCard('e', true, '交给' + get.translation(player) + '一张装备区的牌，否则此伤害-1').ai = function (card) {
                                            return 6 - get.value(card);
                                        };
                                    }
                                    else {
                                        trigger.num--;
                                        event.finish();
                                    }
                                    "step 2"
                                    if (result.bool) {
                                        var card = result.cards[0];
                                        trigger.source.$give(card, player);
                                        player.gain(card, trigger.source);
                                        event.card = card;
                                    }
                                    else {
                                        trigger.num--;
                                        event.finish();
                                    }
                                    "step 3"
                                    player.chooseBool('是否立即使用此装备牌？').set('ai', function () {
                                        if (player.isDamaged() || !player.countCards('e')) return true;
                                    });
                                    "step 4"
                                    if (result.bool) {
                                        player.useCard(event.card, player);
                                    }
                                    else {
                                        event.finish();
                                    }
                                },
                                ai: {
                                    threaten: 0.8,
                                    order: 3,
                                },
                            },

                            "qinshi_jingxie": {
                                trigger: {
                                    target: "useCardToBefore",
                                },
                                intro: {
                                    content: "cards",
                                },
                                group: "qinshi_jingxie2",
                                mark: true,
                                marktext: "械",
                                filter: function (event, player) {
                                    if (!player.storage.qinshi_jingxie && player.countCards('e') <= 0) return false;
                                    if (!['basic', 'trick'].contains(get.type(event.card))) return false;
                                    if (get.tag(event.card, 'damage')) return true;
                                    return false;
                                },
                                priority: 100,
                                content: function () {
                                    if (player.storage.qinshi_jingxie) {
                                        var list = player.storage.qinshi_jingxie;
                                    }
                                    player.storage.qinshi_jingxie = player.getCards('e');
                                    player.lose(player.getCards('e'), ui.special)._triggered = null;
                                    game.playSu('qinshi_jingxie');
                                    if (list && list.length) {
                                        player.directequip(list);
                                    }
                                },
                            },
                            "qinshi_jingxie2": {
                                enable: "phaseUse",
                                usable: 1,
                                intro: {
                                    content: "cards",
                                },
                                mark: true,
                                marktext: "械",
                                filter: function (event, player) {
                                    if (player.storage.qinshi_jingxie <= 0 && player.countCards('e') <= 0) return false;
                                    return player.isAlive();
                                },
                                content: function () {
                                    if (player.storage.qinshi_jingxie) {
                                        var list = player.storage.qinshi_jingxie;
                                    }
                                    player.storage.qinshi_jingxie = player.getCards('e');
                                    player.lose(player.getCards('e'), ui.special)._triggered = null;
                                    game.playSu('qinshi_jingxie');
                                    if (list && list.length) {
                                        player.directequip(list);
                                    }
                                },
                                ai: {
                                    order: 2,
                                    result: {
                                        // player:1,
                                        player: function (player) {
                                            if (player.countCards('e') <= 0) return 10;
                                            return 0;
                                        },
                                    },
                                },
                            },

                            "qinshi_hengjian": {
                                audio: "ext:群英会:2",
                                enable: "phaseUse",
                                skillAnimation: true,
                                filterCard: {
                                    name: "sha",
                                },
                                viewAsFilter: function (player) {
                                    return player.countCards('h', 'sha') > 1;
                                },
                                filter: function (event, player) {
                                    return player.countCards('h', 'sha') > 1;
                                },
                                selectCard: 2,
                                check: function (card) {
                                    var num = 0;
                                    var player = _status.event.player;
                                    var players = game.filterPlayer();
                                    for (var i = 0; i < players.length; i++) {
                                        if (lib.filter.targetEnabled({ name: 'sha' }, player, players[i]) &&
                                            get.effect(players[i], { name: 'sha' }, player) > 0) {
                                            num++;
                                            if (num > 1) return 8 - get.value(card);
                                        }
                                    }
                                    return 0;
                                },
                                viewAs: {
                                    name: "sha",
                                },
                                selectTarget: [1, Infinity],
                                filterTarget: function (card, player, target) {
                                    return lib.filter.targetEnabled({ name: 'sha' }, player, target);
                                },
                                ai: {
                                    order: function () {
                                        return get.order({ name: 'sha' }) + 0.1;
                                    },
                                    effect: {
                                        player: function (card, player) {
                                            if (_status.currentPhase != player) return;
                                            if (card.name == 'sha' && player.countCards('h', 'sha') < 2 && !player.needsToDiscard()) {
                                                var num = 0;
                                                var player = _status.event.player;
                                                var players = game.filterPlayer();
                                                for (var i = 0; i < players.length; i++) {
                                                    if (lib.filter.targetEnabled({ name: 'sha' }, player, players[i]) &&
                                                        get.attitude(player, players[i]) < 0) {
                                                        num++;
                                                        if (num > 1) return 'zeroplayertarget';
                                                    }
                                                }
                                            }
                                        },
                                    },
                                    basic: {
                                        useful: [5, 1],
                                        value: [5, 1],
                                    },
                                    result: {
                                        target: function (player, target) {
                                            if (player.hasSkill('jiu') && !target.getEquip('baiyin')) {
                                                if (get.attitude(player, target) > 0) {
                                                    return -6;
                                                }
                                                else {
                                                    return -3;
                                                }
                                            }
                                            return -1.5;
                                        },
                                    },
                                    tag: {
                                        respond: 1,
                                        respondShan: 1,
                                        damage: function (card) {
                                            if (card.nature == 'poison') return;
                                            return 1;
                                        },
                                        natureDamage: function (card) {
                                            if (card.nature) return 1;
                                        },
                                        fireDamage: function (card, nature) {
                                            if (card.nature == 'fire') return 1;
                                        },
                                        thunderDamage: function (card, nature) {
                                            if (card.nature == 'thunder') return 1;
                                        },
                                        poisonDamage: function (card, nature) {
                                            if (card.nature == 'poison') return 1;
                                        },
                                    },
                                },
                                //group:"luanjian2",
                            },

                            "qinshi_jusha2": {
                                audio: "ext:群英会:2",
                                enable: "phaseUse",
                                discard: false,
                                line: true,
                                prepare: "give",
                                filter: function (event, player) {
                                    if (player.countCards('h', 'sha') + player.countCards('h', 'jiu') == 0) return 0;
                                    return game.hasPlayer(function (current) {
                                        return current != player && current.hasSkill('qinshi_jusha');
                                    });
                                },
                                filterCard: function (card) {
                                    return (card.name == 'sha' || card.name == 'jiu')
                                },
                                filterTarget: function (card, player, target) {
                                    return target != player && target.hasSkill('qinshi_jusha', player);
                                },
                                usable: 1,
                                forceaudio: true,
                                content: function () {
                                    target.gain(cards, player);
                                },
                                ai: {
                                    expose: 0.3,
                                    order: 4,
                                    result: {
                                        target: 2,
                                    },
                                },
                            },
                            "qinshi_jusha": {
                                audio: "ext:群英会:2",
                                unique: true,
                                global: "qinshi_jusha2",
                            },
                            "qinshi_jiansheng": {
                                audio: "ext:群英会:2",
                                trigger: {
                                    player: "damageBegin",
                                },
                                priority: 10,
                                frequent: true,
                                filter: function (event, player) {
                                    return event.num > 0;
                                },
                                content: function () {
                                    if (player.countCards('h') <= 0) {
                                        player.draw(game.countGroup());
                                    }
                                    else {
                                        player.draw(player.countCards('h'));
                                    }
                                },
                                ai: {
                                    maixie: true,
                                    "maixie_hp": true,
                                    effect: {
                                        target: function (card, player, target) {
                                            if (get.tag(card, 'damage')) {
                                                if (player.hasSkillTag('jueqing')) return [1, -2];
                                                if (!target.hasFriend()) return;
                                                if (target.hp >= 4) return [1, get.tag(card, 'damage') * 3];
                                                if (target.hp == 3) return [1, get.tag(card, 'damage') * 2];
                                                if (target.hp == 2) return [1, get.tag(card, 'damage') * 1];
                                            }
                                        },
                                    },
                                },
                            },
                            "qinshi_zongjian": {
                                mod: {
                                    targetInRange: function (card) {
                                        if (card.name == 'sha') return true;
                                    },
                                },
                                audio: "ext:群英会:3",
                                trigger: {
                                    player: "shaBegin",
                                },
                                logTarget: "target",
                                frequent: "check",
                                check: function (event, player) {
                                    return get.attitude(player, event.target) <= 0;
                                },
                                filter: function (event, player) {
                                    if (event.target.countCards('h') < player.countCards('h')) return true;
                                    if (event.target.hp > player.hp) return true;
                                    return false;
                                },
                                content: function () {
                                    if (trigger.target.countCards('h') < player.countCards('h')) trigger.directHit = true;
                                    if (trigger.target.hp > player.hp) player.addTempSkill('qinshi_zongjian2', 'shaAfter');
                                },
                                ai: {
                                    threaten: 0.5,
                                },
                            },
                            "qinshi_zongjian2": {
                                trigger: {
                                    source: "damageBegin",
                                },
                                filter: function (event, player) {
                                    return event.card && event.card.isCard && event.card.name == 'sha' && event.notLink();
                                },
                                forced: true,
                                audio: "ext:群英会:3",
                                content: function () {
                                    trigger.num++;
                                },
                            },

                            "qinshi_diedun": {
                                mod: {
                                    globalTo: function (from, to, current) {
                                        if (to.hp < 2 || to.countCards('h') < to.hp) return current + Infinity;
                                    },
                                },
                                ai: {
                                    maixie: true,
                                    threaten: 1.5,
                                },
                            },
                            "qinshi_renzhong": {
                                audio: "ext:群英会:2",
                                enable: "phaseUse",
                                usable: 1,
                                skillAnimation: true,
                                animationStr: "万物回春",
                                animationColor: "water",
                                filter: function (event, player) {
                                    return game.hasPlayer(function (current) {
                                        return current != player && current.countCards('hej') > 0;
                                    });
                                },
                                content: function () {
                                    "step 0"
                                    event.num = 0;
                                    event.targets = game.filterPlayer(function (current) {
                                        return current != player && current.countCards('hej') > 0;
                                    });
                                    //event.targets.remove(player);
                                    //event.targets.sort(lib.sort.seat);
                                    player.line(event.targets, "green");
                                    player.gainMultiple(event.targets, "hej");
                                    "step 1"
                                    if (event.num < event.targets.length) {
                                        player.chooseCard('选择一张手牌交给' + get.translation(event.targets[event.num]), 'h', 1, true).ai = function (card) {
                                            if (get.attitude(player, event.targets[event.num]) > 0) return get.value(card);
                                            return -get.value(card);
                                        }
                                    } else {
                                        event.finish();
                                    }
                                    "step 2"
                                    if (result.bool) {
                                        player.$give(result.cards, event.targets[event.num]);
                                        event.targets[event.num].gain(result.cards, player);
                                        event.num++;
                                        event.goto(1);
                                    }
                                    else {
                                        event.finish();
                                    }
                                },
                                ai: {
                                    result: {
                                        player: function (player) {
                                            var num = game.countPlayer(function (current) {
                                                return (current.countCards('he') && get.attitude(player, current) <= 0) || (current.countCards('j') && get.attitude(player, current) > 0);
                                            });
                                            if (num > 0) return 1;
                                            return 0;
                                        },
                                    },
                                    order: 5,
                                },
                            },
                            "qunying_fengyuan1": {
                                trigger: {
                                    global: "recoverEnd",
                                },
                                frequent: true,
                                filter: function (event, player) {
                                    return event.player.sex == 'female'
                                },
                                content: function () {
                                    game.playSu(['qunying_fengyuan1', 'qunying_fengyuan2'].randomGet());
                                    if (player.isDamaged()) {
                                        player.recover();
                                    }
                                    else player.draw();
                                },
                            },
                            "qunying_fengyuan": {
                                group: "qunying_fengyuan1",
                                global: "qunying_fengyuan2",
                                audio: "ext:群英会:2",
                            },
                            "qunying_fengyuan2": {
                                audio: "ext:群英会:2",
                                enable: "phaseUse",
                                filter: function (event, player) {
                                    if (player.hasSkill('qunying_fengyuan3') || player.hasSkill('qunying_fengyuan')) return false;
                                    if (player.sex != 'male') return false;
                                    return player.countCards('he') && game.hasPlayer(function (current) {
                                        return current.hasSkill('qunying_fengyuan');
                                    });
                                },
                                direct: true,
                                delay: 0,
                                filterCard: true,
                                discard: false,
                                lose: false,
                                position: "he",
                                prompt: function () {
                                    var player = _status.event.player;
                                    var list = game.filterPlayer(function (current) {
                                        return current.hasSkill('qunying_fengyuan');
                                    });
                                    var str = '将一张牌交给' + get.translation(list);
                                    if (list.length > 1) str += '中的一人';
                                    return str;
                                },
                                check: function (card) {
                                    if (card.name == 'sha') return 5;
                                    return 8 - get.value(card);
                                },
                                content: function () {
                                    "step 0"
                                    game.playSu(['qunying_fengyuan1', 'qunying_fengyuan2'].randomGet());
                                    var targets = game.filterPlayer(function (current) {
                                        return current.hasSkill('qunying_fengyuan');
                                    });
                                    if (targets.length == 1) {
                                        event.target = targets[0];
                                        event.goto(2);
                                    }
                                    else if (targets.length > 0) {
                                        player.chooseTarget(true, '选择【逢源】的目标', function (card, player, target) {
                                            return _status.event.list.contains(target);
                                        }).set('list', targets).set('ai', function (target) {
                                            var player = _status.event.player;
                                            return get.attitude(player, target);
                                        });
                                    }
                                    else {
                                        event.finish();
                                    }
                                    "step 1"
                                    if (result.bool && result.targets.length) {
                                        event.target = result.targets[0];
                                    }
                                    else {
                                        event.finish();
                                    }
                                    "step 2"
                                    if (event.target) {
                                        player.logSkill('qunying_fengyuan', event.target);
                                        event.card = cards[0];
                                        if (event.target != player) {
                                            event.target.gain(event.card, player);
                                        }
                                    }
                                    else {
                                        event.finish();
                                    }
                                },
                                ai: {
                                    order: 2,
                                    threaten: 1.5,
                                    result: {
                                        player: function (player, target) {
                                            if (player.countCards('h') < 3) return 0;
                                            var target = game.findPlayer(function (current) {
                                                return current.hasSkill('qunying_fengyuan');
                                            });
                                            if (target) {
                                                return get.attitude(player, target);
                                            }
                                        },
                                    },
                                },
                            },
                            "qunying_fengyuan3": {},

                            "qunying_haodu": {
                                audio: "ext:群英会:2",
                                enable: "phaseUse",
                                usable: 1,
                                filter: function (event, player) {
                                    return true;
                                },
                                content: function () {
                                    "step 0"
                                    event.num = 0;
                                    event.littlelist = [];
                                    event.biglist = [];
                                    event.littlenumberlist = [];
                                    event.bignumberlist = [];
                                    event.targets = game.filterPlayer(function (current) {
                                        return current.isAlive();
                                    });
                                    event.targets.sort(lib.sort.seat);
                                    "step 1"
                                    if (event.num < event.targets.length) {
                                        event.targets[event.num].chooseControl('押小', '押大', function (event, player) {
                                            if (event.targets[event.num].hp >= event.targets[event.num].countCards('h') || event.targets[event.num].hp <= 2) return '押小';
                                            if (event.targets[event.num].countCards('h') > event.targets[event.num].hp || event.targets[event.num].hp > 2) return '押大';
                                            return Math.random();
                                        });
                                    }
                                    else {
                                        event.goto(3);
                                    }
                                    "step 2"
                                    if (result.control == '押小') {
                                        event.targets[event.num].chat('押小');
                                        game.log(event.targets[event.num], '#g押小');
                                        event.littlelist.push(event.targets[event.num]);
                                        event.num++;
                                        event.goto(1);
                                    }
                                    else {
                                        event.targets[event.num].chat('押大');
                                        game.log(event.targets[event.num], '#y押大');
                                        event.biglist.push(event.targets[event.num]);
                                        event.num++;
                                        event.goto(1);
                                    }

                                    "step 3"
                                    event.nummid = 0;//点数等于7 
                                    event.bignum = 0;
                                    event.littlenum = 0;
                                    event.cards = get.cards(7);
                                    player.showCards(event.cards);
                                    game.delay();
                                    "step 4"
                                    for (var i = 0; i < event.cards.length; i++) {
                                        if (event.cards[i].number != 7) {
                                            if (event.cards[i].number < 7) {
                                                event.littlenumberlist.push(event.cards[i]);
                                            }
                                            else {
                                                event.bignumberlist.push(event.cards[i]);
                                            }
                                        }
                                        else {
                                            player.gain(event.cards[i], 'gain2');
                                        }
                                    }
                                    "step 5"
                                    if (event.littlenumberlist.length != event.bignumberlist.length) {
                                        if (event.littlenumberlist.length < event.bignumberlist.length) {//押大的获胜                                            
                                            if (event.bignum < event.biglist.length) {
                                                event.biglist[event.bignum].draw();
                                                event.bignum++;
                                                event.redo();
                                            }
                                            else {
                                                if (event.littlenum < event.littlelist.length) {
                                                    if (event.littlelist[event.littlenum].countCards('he')) {
                                                        event.littlelist[event.littlenum].chooseToDiscard('he', true);
                                                    }
                                                    event.littlenum++;
                                                    event.redo();
                                                } else {
                                                    player.gain(event.littlenumberlist, 'gain2');
                                                    event.finish();
                                                }
                                            }
                                        }
                                        else {//押小的获胜                                            
                                            if (event.littlenum < event.littlelist.length) {
                                                event.littlelist[event.littlenum].draw();
                                                event.littlenum++;
                                                event.redo();
                                            }
                                            else {
                                                if (event.bignum < event.biglist.length) {
                                                    if (event.biglist[event.bignum].countCards('he')) {
                                                        event.biglist[event.bignum].chooseToDiscard('he', true);
                                                    }
                                                    event.bignum++;
                                                    event.redo();
                                                } else {
                                                    player.gain(event.bignumberlist, 'gain2');
                                                    event.finish();
                                                }
                                            }
                                        }
                                    }
                                    else {//相等
                                        player.gain(event.cards, 'gain2');
                                        event.finish();
                                    }
                                },
                                ai: {
                                    order: function () {
                                        return get.order({ name: 'sha' }) + 5;
                                    },
                                    result: {
                                        player: 1,
                                    },
                                },
                            },

                            "qunying_zhengyi_delete": {
                                forced: true,
                                trigger: {
                                    global: "phaseEnd",
                                },
                                popup: false,
                                content: function () {
                                    player.storage.qunying_zhengyi = [];
                                },
                            },

                            "qunying_zhengyi": {
                                audio: "ext:群英会:2",
                                enable: ["chooseToUse", "chooseToRespond"],
                                hiddenCard(player, name) {
                                    return !player.storage.qunying_zhengyi.includes(name) && lib.inpile.includes(name);
                                },
                                prepare: function (cards, player, targets) {
                                    player.line(targets);
                                },
                                group: ["qunying_zhengyi_delete"],
                                init: function (player) {
                                    if (!player.storage.qunying_zhengyi) player.storage.qunying_zhengyi = [];
                                },
                                filter(event, player) {
                                    if (player.getStat().skill.qunying_zhengyi >= player.hp) return false;
                                    for (const i of lib.inpile) {
                                        const type = get.type(i);
                                        if ((type == "basic" || type == "trick") && event.filterCard(get.autoViewAs({ name: i }, "unsure"), player, event)) return true;
                                        if (i == "sha") {
                                            for (const j of lib.inpile_nature) {
                                                if (event.filterCard(get.autoViewAs({ name: i, nature: j }, "unsure"), player, event)) return true;
                                            }
                                        }
                                    }
                                    return false;
                                },
                                chooseButton: {
                                    dialog(event, player) {
                                        const list = [];
                                        for (const i of lib.inpile) {
                                            if (player.storage.qunying_zhengyi.contains(i)) continue;
                                            if (event.type != "phase") if (!event.filterCard(get.autoViewAs({ name: i }, "unsure"), player, event)) continue;
                                            const type = get.type(i);
                                            if (type == "basic" || type == "trick") list.push([type, "", i]);
                                            if (i == "sha") {
                                                for (const j of lib.inpile_nature) {
                                                    if (event.type != "phase") if (!event.filterCard(get.autoViewAs({ name: i, nature: j }, "unsure"), player, event)) continue;
                                                    list.push(["基本", "", "sha", j]);
                                                }
                                            }
                                        }
                                        if (list.length == 0) {
                                            return ui.create.dialog('正义已无可用牌');
                                        }
                                        return ui.create.dialog("正义", [list, "vcard"]);
                                    },
                                    filter(button, player) {
                                        const evt = _status.event.getParent();
                                        return evt.filterCard({ name: button.link[2], nature: button.link[3] }, player, evt);
                                    },
                                    check: function (button) {
                                        var player = _status.event.player;
                                        var players = game.filterPlayer();
                                        if (player.countCards('h', button.link)) return 0;
                                        if (button.link[2] == 'wuzhong') {
                                            if (player.countCards('h') < player.hp) {
                                                return 3 + Math.random();
                                            }
                                            return 0;
                                        }
                                        if (button.link[2] == 'tao') {
                                            return 8 + Math.random();
                                        }
                                        if (button.link[2] == 'sha') {
                                            return 2 + Math.random();
                                        }
                                        if (button.link[2] == 'juedou') {
                                            return 2 + Math.random();
                                        }
                                        if (button.link[2] == 'guohe') {
                                            return 2 + Math.random();
                                        }
                                        if (button.link[2] == 'shunshou') {
                                            for (var i = 0; i < players.length; i++) {
                                                if (player.canUse('shunshou', players[i]) && get.attitude(player, players[i]) < 0) {
                                                    return 3 + Math.random();
                                                }
                                            }
                                            return 0;
                                        }
                                        if (button.link[2] == 'tiesuo') {
                                            return 1 + Math.random();
                                        }
                                        if (button.link[2] == 'jiu') {
                                            if (get.effect(player, { name: 'jiu' }) > 0) {
                                                return 1 + Math.random();
                                            }
                                            return 0;
                                        }
                                        if (button.link[2] == 'nanman' || button.link[2] == 'wanjian' || button.link[2] == 'taoyuan' || button.link[2] == 'wugu') {
                                            var eff = 0;
                                            for (var i = 0; i < players.length; i++) {
                                                if (players[i] != player) {
                                                    eff += get.effect(players[i], { name: button.link[2] }, player, player);
                                                }
                                            }
                                            if (eff > 0) {
                                                return 1 + Math.random();
                                            }
                                            return 0;
                                        }
                                        return Math.random();
                                    },
                                    backup(links, player) {
                                        return {
                                            filterCard: function () { return false },
                                            selectCard: -1,
                                            viewAsFilter: function (player) { return true },
                                            popname: true,
                                            ignoreMod: true,
                                            aiUse: Math.random(),
                                            viewAs: {
                                                name: links[0][2],
                                                nature: links[0][3],
                                                suit: "none",
                                                number: null,
                                            },
                                            precontent: function () {
                                                //async precontent(event, trigger, player) {
                                                player.logSkill("qunying_zhengyi");
                                                const [card] = event.result.cards;
                                                event.result.card.suit = get.suit(card);
                                                event.result.card.number = get.number(card);
                                            },
                                            onuse: function (result, player) {
                                                player.storage.qunying_zhengyi.push(result.card.name);
                                                //player.markAuto('qunying_zhengyi',[result.card.name]);                                        
                                            },
                                        };
                                    },
                                    prompt(links, player) {
                                        return "视为" + (_status.event.name == "chooseToRespond" ? "打出" : "使用" + get.translation(links[0][2]));
                                    },
                                },
                                ai: {
                                    save: true,
                                    respondSha: true,
                                    respondShan: true,
                                    fireAttack: true,
                                    threaten: 1,
                                    order: 8,
                                    result: {
                                        //player:1,
                                        player: function (player, target) {
                                            if (_status.event.dying) return get.attitude(player, _status.event.dying) > 0;
                                            var target = game.findPlayer(function (current) {
                                                return current.hp <= 0;
                                            });
                                            if (target && get.attitude(player, target) <= 0) return 0;
                                            return 1;
                                        },
                                    },
                                },
                            },

                            "qunying_mingxiang": {
                                audio: "ext:群英会:2",
                                trigger: {
                                    player: "phaseEnd",
                                },
                                forced: true,
                                unique: true,
                                filter: function (event, player) {
                                    return player.getStat('kill') > 0;
                                },
                                content: function () {
                                    var chat = ['有威胁的对手都被我清除了，剩下的要靠你们了！', '我要进入冥想了，不要来打扰我！'].randomGet();
                                    player.say(chat);
                                    //game.broadcastAll() + player.node.avatar.setBackgroundImage('extension/群英会/qunying_jilianmingxian.jpg');                                    
                                    player.classList.add('out');
                                },
                            },
                            "qunying_weishe": {
                                audio: "ext:群英会:2",
                                trigger: {
                                    player: "shaBegin",
                                },
                                forced: true,
                                priority: 6,
                                filter: function (event, player) {
                                    return event.target.countCards('h') > 0;
                                },
                                direct: true,
                                content: function () {
                                    'step 0'
                                    trigger.target.showHandcards();
                                    'step 1'
                                    if (trigger.target.countCards('h', { suit: get.suit(trigger.card) })) {
                                        player.logSkill('qunying_weishe');
                                        trigger.directHit = true;
                                    }
                                },
                                ai: {
                                    expose: 0.4,
                                },
                            },
                            "qunying_beihua": {
                                audio: "ext:群英会:2",
                                global: "qunying_beihua2",
                            },
                            "qunying_beihua2": {
                                trigger: {
                                    player: "useCard",
                                },
                                prompt: function (event, player) {
                                    var target = game.filterPlayer(function (current) {
                                        return current != player && current.hasSkill('qunying_beihua');
                                    });
                                    return '是否令' + get.translation(target) + '摸一张牌？';
                                },
                                check: function (event, player) {
                                    var num = game.countPlayer(function (current) {
                                        return get.attitude(player, current) > 0 && current.hasSkill('qunying_beihua');
                                    });
                                    return num > 0;
                                },
                                frequent: "check",
                                filter: function (event, player) {
                                    return event.card && event.card.name == 'sha' && game.hasPlayer(function (current) {
                                        return current != player && current.hasSkill('qunying_beihua');
                                    });
                                },
                                content: function () {
                                    "step 0"
                                    var targets = game.filterPlayer(function (current) {
                                        return current != player && current.hasSkill('qunying_beihua');
                                    });
                                    if (targets.length == 1) {
                                        game.playSu(['qunying_beihua1', 'qunying_beihua2'].randomGet());
                                        player.logSkill("qunying_beihua2");
                                        player.line(targets[0], 'green');
                                        targets[0].draw();
                                        event.finish();
                                    }
                                    else if (targets.length > 1) {
                                        player.chooseTarget('选择一个倍化之人', 1, true, function (card, player, target) {
                                            return target != player && target.hasSkill('qunying_beihua');
                                        }).set('ai', function (target) {
                                            return get.attitude(_status.event.player, target) > 0;
                                        });
                                    }
                                    "step 1"
                                    if (result.bool && result.targets.length) {
                                        event.target = result.targets[0];
                                        game.playSu(['qunying_beihua1', 'qunying_beihua2'].randomGet());
                                        player.logSkill("qunying_beihua2");
                                        player.line(event.target, 'green');
                                        event.target.draw();
                                    }
                                    else {
                                        event.finish();
                                    }
                                },
                            },
                            /*
                            "qunying_beihua": {
                                audio: "ext:群英会:2",
                                trigger: {
                                    target: "useCardToBefore",
                                },
                                frequent: true,
                                filter: function (event, player) {
                                    return get.type(event.card, 'trick') == 'trick';
                                },
                                content: function () {
                                    player.draw();
                                },
                            },*/
                            "qunying_xiaohan": {
                                audio: "ext:群英会:2",
                                trigger: {
                                    player: "shaBegin",
                                },
                                priority: 6,
                                filter: function (event, player) {
                                    return event.target.countCards('h') > 0;
                                },
                                direct: true,
                                content: function () {
                                    "step 0"
                                    player.choosePlayerCard(trigger.target, get.prompt('qunying_xiaohan'), 'h').set('ai', function (button) {
                                        return 10 - get.value(button.link);
                                    });
                                    "step 1"
                                    if (result.bool) {
                                        player.logSkill('qunying_xiaohan', trigger.target);
                                        event.card = result.links[0];
                                        player.showCards([event.card], get.translation(trigger.target) + '展示的手牌');
                                    }
                                    else {
                                        event.finish();
                                    }
                                    "step 2"
                                    if (get.color(event.card) != get.color(trigger.card)) {
                                        trigger.directHit = true;
                                    }
                                    else {
                                        trigger.target.discard(event.card);
                                    }
                                },
                                ai: {
                                    order: 5,
                                },
                            },
                            "qunying_guanjue": {
                                audio: "ext:群英会:2",
                                trigger: {
                                    target: "shaBegin",
                                },
                                usable: 1,
                                filter: function (event, player) {
                                    return player.isAlive();
                                },
                                content: function () {
                                    "step 0"
                                    trigger.cancel();
                                    "step 1"
                                    trigger.parent.qunying_guanjueed = true;
                                    trigger.player.getStat().card.sha--;
                                    "step 2"
                                    //    player.useCard({name: 'sha'}, trigger.player, false);
                                    player.chooseToUse({ name: 'sha' }, trigger.player, '是否对' + get.translation(trigger.player) + '使用一张杀？').logSkill = 'qunying_guanjue';
                                },
                                ai: {
                                    threaten: 0.8,
                                    order: 8,
                                },
                            },
                            "qunying_diwang": {
                                audio: "ext:群英会:2",
                                trigger: {
                                    player: "damage",
                                },
                                priority: 10,
                                filter: function (event, player) {
                                    return event.source != player && event.source && event.source.isAlive();
                                },
                                check: function (event, player) {
                                    return get.attitude(player, event.source) <= 0;
                                },
                                frequent: "check",
                                prompt: function (event, player) {
                                    return '是否令其他角色视为对' + get.translation(event.source) + '使用【杀】？';
                                },
                                content: function () {
                                    "step 0"
                                    player.$fullscreenpop('给我消灭他', 'thunder');
                                    player.say('基纽特种部队何在？');
                                    event.num = 0;
                                    event.targets = game.filterPlayer(function (current) {
                                        return current != player && current != trigger.source;
                                    });
                                    //event.targets.remove(player);
                                    event.targets.sort(lib.sort.seat);
                                    "step 1"
                                    if (event.num < event.targets.length && trigger.source.isAlive()) {
                                        event.targets[event.num].line(trigger.source, 'fire');
                                        event.targets[event.num].useCard({
                                            name: 'sha'
                                        }, trigger.source, false);
                                        event.num++;
                                        event.redo();
                                    }
                                    else {
                                        event.finish();
                                    }
                                },
                                ai: {
                                    expose: 0.6,
                                    order: 8,
                                },
                            },

                            "qunying_yiqu": {
                                audio: "ext:群英会:2",
                                trigger: {
                                    player: "damageBegin",
                                },
                                forced: true,
                                content: function () {
                                    if (game.players.length >= game.dead.length) {
                                        player.draw(game.players.length);
                                    }
                                    else {
                                        player.draw(game.dead.length);
                                    }
                                },
                                ai: {
                                    threaten: 0.5,
                                    order: 5,
                                },
                            },

                            "qunying_kunxi": {
                                audio: "ext:群英会:2",
                                trigger: {
                                    player: "phaseEnd",
                                },
                                direct: true,
                                filter: function (event, player) {
                                    return player.countCards('e') > 0;
                                },
                                content: function () {
                                    'step 0'
                                    player.chooseTarget(get.prompt('qunying_kunxi'), [1, player.countCards('e')], function (card, player, target) {
                                        return target != player;
                                    }, function (target) {
                                        return -get.attitude(player, target);
                                    });
                                    'step 1'
                                    if (result.bool) {
                                        player.gain(player.getCards('e'), 'gain2');
                                        player.logSkill('qunying_kunxi', result.targets);
                                        event.targets = result.targets;
                                    }
                                    else {
                                        event.finish();
                                    }
                                    'step 2'
                                    if (event.targets.length) {
                                        var target = event.targets.shift();
                                        player.line(target, 'green');
                                        //	event.current=target;						
                                        player.useCard({ name: 'sha' }, target, false);
                                        event.redo();
                                    }
                                    else {
                                        event.finish();
                                    }
                                },
                                ai: {
                                    order: 7,
                                    expose: 0.2,
                                },
                            },
                            "qunying_wanti": {
                                audio: "ext:群英会:2",
                                group: ["qunying_wanti1", "qunying_wanti2"],
                            },
                            "qunying_wanti1": {
                                trigger: {
                                    player: "damageBegin",
                                },
                                forced: true,
                                filter: function (event, player) {
                                    return !player.getEquip(2);
                                },
                                content: function () {
                                    game.playSu(['qunying_wanti1', 'qunying_wanti2'].randomGet());
                                    trigger.num--;
                                },
                                ai: {
                                    threaten: 0.8,
                                    order: 3,
                                },
                            },
                            "qunying_wanti2": {
                                trigger: {
                                    source: "damageBegin",
                                },
                                forced: true,
                                filter: function (event, player) {
                                    return !player.getEquip(1);
                                },
                                content: function () {
                                    game.playSu(['qunying_wanti1', 'qunying_wanti2'].randomGet());
                                    trigger.num++;
                                },
                            },
                            "_qunying_bianshen": {
                                audio: "ext:群英会:2",
                                trigger: {
                                    player: "dying",
                                },
                                forced: true,
                                filter: function (event, player) {
                                    return player.name == 'qunying_frieza' || player.name == 'qunying_frieza1' || player.name == 'qunying_frieza2';
                                },
                                content: function () {
                                    if (player.name == 'qunying_frieza') {
                                        game.playSu('qunying_bianshen1');
                                        player.init('qunying_frieza1');
                                    }
                                    else if (player.name == 'qunying_frieza1') {
                                        game.playSu('qunying_bianshen2');
                                        player.init('qunying_frieza2');
                                    }
                                    else if (player.name == 'qunying_frieza2') {
                                        game.playSu('qunying_bianshen3');
                                        player.init('qunying_frieza3');
                                    }
                                },
                                ai: {
                                    maixie: true,
                                    "maixie_hp": true,
                                },
                            },

                            "qunying_shaohe": {
                                audio: "ext:群英会:2",
                                trigger: {
                                    source: "damageBegin",
                                },
                                forced: true,
                                filter: function (event, player) {
                                    return player.group != event.player.group;
                                },
                                content: function () {
                                    trigger.num++;
                                },
                            },
                            "qunying_tongji": {
                                audio: "ext:群英会:2",
                                trigger: { player: 'phaseEnd' },
                                forced: true,
                                content: function () {
                                    var num = game.countPlayer(function (current) {
                                        return current.group == 'xqin';
                                    });
                                    player.draw(num);
                                }
                            },
                            "qunying_wangxiao": {
                                audio: "ext:群英会:2",
                                unique: true,
                                trigger: {
                                    global: "damageEnd",
                                },
                                forced: true,
                                priority: 3,
                                filter: function (event, player) {
                                    return event.num > 1;
                                },
                                content: function () {
                                    "step 0"
                                    trigger.player.group = "xqin";
                                    game.log(trigger.player, '的势力变为秦');
                                    if (get.mode() == 'guozhan') {
                                        //trigger.player.identity="xqin";
                                        trigger.player._group = "xqin";
                                        trigger.player.node.identity.firstChild.innerHTML = get.translation("xqin");
                                        trigger.player.node.identity.dataset.color = trigger.player.identity;
                                        if (trigger.player.name) lib.character[trigger.player.name][1] = "xqin";
                                        if (trigger.player.name1) lib.character[trigger.player.name1][1] = "xqin";
                                        if (trigger.player.name2) lib.character[trigger.player.name2][1] = "xqin";
                                    }
                                    else {
                                        if (trigger.player.name) lib.character[trigger.player.name][1] = "xqin";
                                        if (trigger.player.name1) lib.character[trigger.player.name1][1] = "xqin";
                                        if (trigger.player.name2) lib.character[trigger.player.name2][1] = "xqin";
                                    }

                                    "step 1"
                                    switch (trigger.player.group) {
                                        case 'xqin': trigger.player.node.name.dataset.nature = 'watermm'; break;
                                    }
                                },
                            },
                            "qunying_shashen": {
                                audio: "ext:群英会:2",
                                trigger: {
                                    source: "damageEnd",
                                },
                                check: function (event, player) {
                                    return get.attitude(player, event.source) <= 0;
                                },
                                frequent: "check",
                                filter: function (event, player) {
                                    return event.card && event.card.isCard && (event.card.name == 'sha' || event.card.name == 'juedou');
                                },
                                content: function () {
                                    if (player.hp > trigger.player.hp) {
                                        trigger.player.loseHp();
                                    }
                                    if (player.hp == trigger.player.hp) {
                                        trigger.player.turnOver();
                                    }
                                    if (player.hp < trigger.player.hp) {
                                        trigger.player.discard(trigger.player.getCards('h'));
                                    }
                                },
                                ai: {
                                    basic: {
                                        result: {
                                            player: 1,
                                        },
                                        expose: 0.8,
                                    },
                                },
                            },

                        },//技能

                        translate: {

                            "xu_SPxiaosu": "小苏",
                            "xu_huhua": "护花",
                            "xu_huhua_info": "<li>当一名女性角色受到来源不为你的伤害后，你可与其组成双将。然后其与伤害来源的原武牌先后随机替换为一张女性角色的武将牌<li>当你受到伤害后，你可令伤害来源的武将牌随机替换为一张女性角色的武将牌",
                            "xu_huhua2": "护花",
                            "xu_huhua2_info": "当你受到伤害后，伤害来源的武将牌随机替换为一张女性角色的武将牌",
                            "xu_shuangsu": "双宿",
                            "xu_shuangsu_info": "<span class=greentext>觉醒技</span> 当你进入濒死状态时，你须失去技能【护花】，获得技能【栋梁】，与【小焕】组成双将，然后回复体力至3",
                            "xu_dongliang": "栋梁",
                            "xu_dongliang_info": "当你受到伤害时，你可以摸X张牌（X为场上女性角色数）",
                            "xu_xiaohuan": "小焕",
                            "xu_lixing": "厉行",
                            "xu_lixing_info": "当你使用【杀】指定目标时，你可获得目标角色的一张手牌",
                            "xu_choumou": "绸缪",
                            "xu_choumou_info": "当一名其他角色使用的【杀】被响应后，你可随机使用一张装备牌",
                            "xu_dingju": "定局",
                            "xu_dingju_info": "<span class=yellowtext>限定技</span> 你可回收所有其他角色的武将牌，然后重新分配武将牌（原体力上限和体力均不变）",
                            "xu_cheng": "小诚",
                            "xu_tiandun": "天遁",
                            "xu_tiandun_info": "<font color=#f00>锁定技</font> 当你受到其他角色使用卡牌所造成的伤害时，你随机获得伤害来源的一项技能，然后检索所有的武将牌牌堆，选择一张令伤害来源替换之，然后你再摸X张牌（X为对你造成伤害的牌的点数的三分之一进位取整）",
                            "xu_xiaoxu": "小徐",
                            "xu_tuiyin": "退隐",
                            "xu_tuiyin_info": "<font color=#f00>锁定技</font> 当你受到伤害时，你可摸X张牌（X为游戏轮数的一半进位取整）",
                            "xu_xiaosu": "小苏",
                            "xu_xibie": "惜别",
                            "xu_xibie_info": "当你失去装备区的牌时（包括替换和弃置等），你可以摸一张牌并弃置其他角色区域内的一张牌。",
                            "xu_qingshang": "情殇",
                            "xu_qingshang_info": "当你受到伤害后，你可以弃置一张牌并声明一种牌的类型，然后从牌堆顶亮出五张牌，获得其中与你所声明类型相同的牌，将其余的牌置入弃牌堆。",
                            "xu_yunchou": "运筹",
                            "xu_yunchou_info": "<span class=yellowtext>限定技</span> 你可回收除主公外的所有角色的身份牌，然后重新分配身份牌（限身份局）",

                            "sanguo_qiaoguolao": "乔国老",
                            "sanguo_naxian": "纳贤",
                            "sanguo_naxian_info": "回合开始时，你可将任意张手牌置于武将牌上，称为“贤”。若你有“贤”，你不能成为基本牌的目标",
                            "sanguo_zexu": "择婿",
                            "sanguo_zexu_info": "回合结束时，你可选择一项：1、弃置任意张“贤”并令等量的其他角色各摸一张牌；2、将任意张“贤”交给等量的其他角色，然后该角色须弃置一张与之不同类别的手牌，否则其失去一点体力",
                            "sanguo_miheng": "祢衡",
                            "sanguo_kuangcai": "狂才",
                            "sanguo_kuangcai_info": "出牌阶段开始时，你可以进行判定，本回合中，你使用与判定牌颜色相同的牌没有距离和次数限制且摸一张牌。当你以此法获得第五张牌后，结束你的出牌阶段",
                            "sanguo_caomao": "曹髦",
                            "sanguo_qianzhi": "潜志",
                            "sanguo_qianzhi_info": "准备阶段，若你已受伤，你可以观看牌堆的X张牌(X为你已损失的体力值)并且任意移动之",
                            "sanguo_yanghui": "养晦",
                            "sanguo_yanghui_info": "每当你受到伤害后，你可以增加一点体力上限",
                            "sanguo_juli": "诛戾",
                            "sanguo_juli_info": "出牌阶段开始时，若你已受伤且你的体力为全场最低，你可指定任意名“魏国”角色，令各摸X张牌（X为你损失的体力值），然后你的体力上限调整至当前体力值",
                            "sanguo_xunyou": "荀攸",
                            "sanguo_houlve": "后略",
                            "sanguo_houlve_info": "若你没有手牌，你可以摸一张牌，然后视为你使用一张【无懈可击】",
                            "sanguo_simahui": "智司马徽",
                            "sanguo_shouye": "授业",
                            "sanguo_shouye_info": "出牌阶段（解惑后限一次），你可以弃置一张手牌，指定至多两名其他角色令各摸一张牌",
                            "sanguo_jiehuo": "解惑",
                            "sanguo_jiehuo_info": "<span class=greentext>觉醒技</span> 当你发动“授业”目标累计至少6个时，你须减去一点体力上限，将技能“授业”改为每回合限一次，并获得技能“师恩”",
                            "sanguo_shien2": "师恩",
                            "sanguo_shien": "师恩",
                            "sanguo_shien_info": "其他角色使用非延时性锦囊牌时，可以让你摸一张牌",
                            "sanguo_zhihuaxiong": "智华雄",
                            "sanguo_wenjiu": "温酒",
                            "sanguo_wenjiu_info": "</font><font color=#f00>锁定技</font> 你使用的黑色【杀】造成的伤害+1，你无法闪避红色【杀】",
                            "sanguo_badao": "霸刀",
                            "sanguo_badao_info": "当你成为黑色杀的目标时，你可以对你攻击范围内的一名其他角色使用一张【杀】",
                            "sanguo_jiangwei": "姜伯约",
                            "sanguo_guanxing": "继志",
                            "sanguo_guanxing_info": "每当你受到一次伤害后，你可以观看牌堆顶的4张牌，并将其以任意顺序置于牌堆项或牌堆底，然后你摸一张牌。",
                            "sanguo_tiaoxin": "挑衅",
                            "sanguo_tiaoxin_info": "出牌阶段，你可以指定一名使用【杀】能攻击到你的角色，该角色需对你使用一张【杀】，若该角色不如此做，你弃掉他的一张牌，每回合限一次。",
                            "sanguo_menghuo": "孟获",
                            "sanguo_manwang": "蛮王",
                            "sanguo_manwang_info": "<font color=#f00>锁定技</font> 你的手牌上限为3，你当主公时不增加体力上限。",
                            "sanguo_xiangfu": "降服",
                            "sanguo_xiangfu_info": "<span class=greentext>觉醒技</span> 当你的体力上限不少于7，你立即死亡。",
                            "sanguo_xiongqi": "雄起",
                            "sanguo_xiongqi_info": "<span class=yellowtext>非限定技</span>当你处于濒死状态时，你可以丢弃你判定区里的牌，并重置你的武将牌，然后摸1张牌且体力回至体力上限，然后加一体力上限。",
                            "sanguo_zhangfei": "智张飞",
                            "sanguo_tannan": "探囊",
                            "sanguo_tannan_info": "<font color=#f00>锁定技</font> 若你已受伤，你的进攻距离+X（X为你已损失体力值）",
                            "sanguo_tishen": "替身",
                            "sanguo_tishen_info": "<span class=yellowtext>限定技</span> 准备阶段开始时，你可以将体力回复至体力上限，然后你每以此法回复1点体力，便摸一张牌。",
                            "sanguo_yujin": "于禁",
                            "sanguo_zhenjun": "镇军",
                            "sanguo_zhenjun_info": "准备阶段，你可以弃置一名手牌数多于体力值的角色的X张牌（X为其手牌数和体力值之差），然后选择一项：1.你弃置等同于其中非装备牌数量的牌；2.其摸等量的牌。",
                            "sanguo_nanhua": "南华老仙",
                            "sanguo_chuanshu": "传术",
                            "sanguo_chuanshu_info": "<span class=yellowtext>限定技</span> 当一名其他角色进入濒死状态时，你可以令其选择获得技能【雷击】或【鬼道】，其回复体力至1并摸两张牌。当该被【传术】的角色造成或受到一次伤害后，你摸一张牌。其阵亡后，你重置技能【传术】",
                            "sanguo_xiandao1": "仙道",
                            "sanguo_xiandao1_info": "<font color=#f00>锁定技</font> 游戏开始和回合结束阶段，你随机获得技能【雷击】或【鬼道】，直到下个出牌阶段开始",
                            "sanguo_xiandao2": "仙道",
                            "sanguo_xiandao2_info": "<font color=#f00>锁定技</font> 你防止受到任何属性伤害",
                            "sanguo_xiandao": "仙道",
                            "sanguo_xiandao_info": "<font color=#f00>锁定技</font> 游戏开始、你进入游戏时和回合结束阶段，你随机获得技能【雷击】或【鬼道】，直到下个出牌阶段阶段开始。你防止受到任何属性伤害",
                            "sanguo_chuanshu2": "术",
                            "sanguo_chuanshu2_info": "<font color=#f00>锁定技</font> 当你造成或受到一次伤害后，南华老仙摸一张牌",
                            "sanguo_chuanshu3": "术",
                            "sanguo_chuanshu3_info": "<font color=#f00>锁定技</font> 当你【传术】的角色阵亡后，你重置技能【传术】",
                            "sanguo_xiuzheng": "修真",
                            "sanguo_xiuzheng_info": "出牌阶段限一次，你可选择一名其他角色，然后展示牌堆顶的两张牌，若同为红色，则其受到一点火焰伤害；若同为黑色，其受到一点雷电伤害；若颜色不相同，你弃置其一张牌。然后你获得这两张展示的牌后再弃置两张牌",

                            "qinshi_mozi": "墨子",
                            "qinshi_feigong": "非攻",
                            "qinshi_feigong_info": "每当你受到【杀】造成的伤害时，你可以令伤害来源交给你一张其装备区的牌，否则此伤害-1。若其以此法交给你一张装备牌，你可立即使用之",
                            "qinshi_jianai": "兼爱",
                            "qinshi_jianai_info": "当一名角色进入濒死状态，你可以弃置当前装备区的所有牌，令其回复体力至1，然后你可切换一次装备区",
                            "qinshi_jingxie": "精械",
                            "qinshi_jingxie_info": "你同时拥有两个独立的装备区，出牌阶段（限一次）或你成为伤害性卡牌的目标时，你可以切换至另一个装备区",
                            "qinshi_jingxie2": "精械",
                            "qinshi_jingxie2_info": "出牌阶段，你可以切换装备区",
                            "qinshi_weizhuang": "卫庄",
                            "qinshi_hengjian": "横剑",
                            "qinshi_hengjian_info": "<font color=#F0F>横贯八方</font> 出牌阶段，你可以将两张杀当杀使用，此杀无视距离，可以指定任意名目标",
                            "qinshi_jusha2": "聚散流沙",
                            "qinshi_jusha2_info": "其他角色可在他们各自的回合里给你一张【杀】或【酒】",
                            "qinshi_jusha": "流沙",
                            "qinshi_jusha_info": "聚散流沙，生死无踪。其他角色可在他们各自的回合里交给你一张【杀】或【酒】",
                            "qinshi_genie": "盖聂",
                            "qinshi_jiansheng": "剑圣",
                            "qinshi_jiansheng_info": "每当你受到一点伤害时，若你没有手牌，你可以摸等同于现存势力数张牌；若你有手牌，你可以摸X张牌（X为此时你的手牌数）",
                            "qinshi_zongjian": "纵剑",
                            "qinshi_zongjian_info": "<font color=#F0F>百步飞剑</font> 你使用的【杀】无距离限制；当你使用【杀】指定一个目标后，你可以根据下列条件执行相应的效果：1.其手牌数小于你的手牌数，此【杀】不可被【闪】响应 2.其体力值大于你的体力值，此【杀】伤害+1",
                            "qinshi_zongjian2": "百步飞剑",
                            "qinshi_zongjian2_info": "目标角色的体力值大于等于你的体力值，你可令此【杀】伤害+1",
                            "qinshi_xiaoyaozi": "逍遥子",
                            "qinshi_diedun": "蝶遁",
                            "qinshi_diedun_info": "<font color=#F0F>梦蝶之遁</font> 当你的体力值小于2或手牌数小于体力值时，其他角色计算与你的距离为无限远",
                            "qinshi_renzhong": "人宗",
                            "qinshi_renzhong_info": "<font color=#F0F>万物回春</font> 出牌阶段限一次，你可以获得所有其他角色区域内的一张牌，然后你须为所有存活的角色每人逐个派发一张手牌",

                            "qunying_weixiaobao": "韦小宝",
                            "qunying_haodu": "豪赌",
                            "qunying_haodu_info": "出牌阶段限一次，你可以令所有角色声明点数大（8~K）的牌较多（押大）还是点数小（A~6）的牌较多（押小）（点数为7的不计且你直接获得），然后你亮出牌堆顶的七张牌比较两者点数范围内的数量：猜对的角色摸一张牌，猜错的角色须弃置一张牌；然后你获得所有数量较少的牌；若数量一致，则仅执行你获得所有的这些牌 ",
                            "qunying_fengyuan1": "逢源",
                            "qunying_fengyuan1_info": "场上的女性角色每回复一点体力时，你若你已受伤，你可回复一点体力，否则摸一张牌。",
                            "qunying_fengyuan": "逢源",
                            "qunying_fengyuan_info": "场上的男性角色的回合可以交给你一张手牌，场上的女性角色每回复一点体力时，你若你已受伤，你可回复一点体力，否则摸一张牌。",
                            "qunying_fengyuan2": "逢源",
                            "qunying_fengyuan2_info": "",
                            "qunying_fengyuan3": "逢源",
                            "qunying_fengyuan3_info": "",
                            "qunying_zhengyi": "正义",
                            "qunying_zhengyi_info": "每回合限X次（X为你的体力值），当你需要使用或打出牌时，你可以视为使用或打出之（每回合每种牌名限一次）",
                            "qunying_jilian": "吉连",
                            "qunying_mingxiang": "冥想",
                            "qunying_mingxiang_info": "<font color=#f00>锁定技</font> 回合结束后，若你本回合杀死过人，你进入冥想状态，直到下一轮次开始或有角色濒死时，你才能返回战场参战",
                            "qunying_frieza3": "弗利萨",
                            "qunying_frieza2": "弗利萨",
                            "qunying_frieza1": "弗利萨",
                            "qunying_frieza": "弗利萨",
                            "_qunying_bianshen": "变身",
                            "_qunying_bianshen_info": "</font><font color=#f00>锁定技</font> 你每次进入濒死状态便会变身",

                            "qunying_weishe": "威慑",
                            "qunying_weishe_info": "<font color=#f00>锁定技</font> 当你使用【杀】指定目标后，目标角色须展示其手牌，若其中有与此【杀】相同花色的手牌，此【杀】不可被响应",
                            "qunying_diwang": "帝王",
                            "qunying_diwang_info": "当你受到伤害来源不为你的伤害时，你可令场上除你与伤害来源外的所有其他角色依次视为对伤害来源使用一张【杀】",

                            "qunying_beihua": "倍化",
                            "qunying_beihua_info": "当一名其他角色使用【杀】时，其可以令你摸一张牌",
                            "qunying_guanjue": "冠绝",
                            "qunying_guanjue_info": "当你每回合首次成为【杀】的目标后，你可以令此【杀】无效且不计入使用次数，然后你可对该【杀】使用者使用一张【杀】",

                            "qunying_xiaohan": "骁悍",
                            "qunying_xiaohan_info": "当你使用【杀】指定目标后，你可以展示目标角色一张手牌。若该牌与此【杀】颜色不相同，此【杀】不可被响应，否则其弃置之",
                            "qunying_yiqu": "异躯",
                            "qunying_yiqu_info": "<font color=#f00>锁定技</font> 当你受到伤害后，若场上角色数不少于阵亡角色数，你摸X张牌（X为存活角色数）；否则你摸Y张牌（Y为已阵亡的角色数）。",

                            "qunying_wanti": "完体",
                            "qunying_wanti_info": "</font><font color=#f00>锁定技</font> 当你受到伤害时，若你的装备区没有防具牌，此伤害－1；当你造成伤害时，若你的装备区没有武器牌，此伤害＋1",
                            "qunying_kunxi": "困袭",
                            "qunying_kunxi_info": "结束阶段，你可以视为对一至X名其他角色使用一张【杀】（X为你装备区的牌数），然后你将装备区的所有牌收入手牌",

                            "qunying_qinshiwang": "嬴政",
                            "qunying_shaohe": "扫合",
                            "qunying_shaohe_info": "<font color=#f00>锁定技</font> 当你对目标角色造成伤害时，若其势力与你不一致，则此伤害值+1",
                            "qunying_tongji": "统集",
                            "qunying_tongji_info": "<font color=#f00>锁定技</font> 结束阶段，你摸X张牌（X为【秦】势力的角色数）",
                            "qunying_wangxiao": "往崤",
                            "qunying_wangxiao_info": "<font color=#f00>锁定技</font> 当一名角色受到伤害时，若此伤害值大于1，则其势力改为【秦】",
                            "qunying_baiqi": "白起",
                            "qunying_shashen": "杀神",
                            "qunying_shashen_info": "当你使用【杀】或【决斗】造成伤害后，若你体力值高/等/低于受伤的角色，你可令其失去1点体力/翻面/弃置所有手牌",

                            "xqin": "秦",
                            "qunying_zhanguo": "战国历史",
                            "qunying_longzhu": "龙珠动画",
                            "qunying_wuxia": "武侠小说",
                            "qunying_qingshi": "秦时明月",
                            "qunying_sanguo": "三国演义",
                            "qunying_xu": "作者团队",

                            "identity_zhu": "主公",
                            "identity_fan": "反贼",
                            "identity_nei": "内奸",
                            "identity_zhong": "忠臣",
                            "caoying_basic": "基本牌",
                            "caoying_trick": "锦囊牌",
                            "caoying_equip": "装备牌",
                            "lukai_spade": "黑桃",
                            "lukai_heart": "红桃",
                            "lukai_club": "草花",
                            "lukai_diamond": "方片",

                        },//翻译
                    };
                    if (lib.device || lib.node) {
                        for (var i in qunying.character) { qunying.character[i][4].push('ext:群英会/' + i + '.jpg'); }
                    } else {
                        for (var i in qunying.character) { qunying.character[i][4].push('db:extension-群英会:' + i + '.jpg'); }
                    }
                    return qunying;
                });
                lib.config.all.characters.push('qunying');
                if (!lib.config.characters.contains('qunying')) lib.config.characters.remove('qunying');
                lib.translate['qunying_character_config'] = '<span class=browntext>群英会</span>';


                game.import('character', function () {
                    var wugeng = {
                        name: 'wugeng',
                        connect: true,
                        characterSort: {
                            wugeng: {
                                "wugeng_shenzu": ["wugeng_tian", "wugeng_zhengchan", "wugeng_shixing", "wugeng_xuanfeng", "wugeng_tianwu", "wugeng_tiankui", "wugeng_fuxi", "wugeng_bailian"],
                                "wugeng_renlei": ["wugeng_ziyu", "wugeng_wugeng", "wugeng_baicai"],
                                "wugeng_mingzu": ["wugeng_nitianerxing"],
                            },
                        },
                        character: {
                            "wugeng_tian": ["male", "shen", 4, ["wugeng_xuemao", "wugeng_baiqian"], []],
                            "wugeng_zhengchan": ["male", "shen", 3, ["wugeng_lunzhuan", "wugeng_kongjing", "wugeng_zhuzhan"], []],
                            "wugeng_echan": ["male", "shen", 3, ["wugeng_zhuilun", "wugeng_jingang"], ["unseen"]],
                            "wugeng_shixing": ["male", "shen", 3, ["wugeng_fuhuo", "wugeng_fuchou"], []],
                            "wugeng_xuanfeng": ["male", "shen", 4, ["wugeng_shensu", "wugeng_baofeng", "wugeng_zhengkong"], []],
                            "wugeng_tianwu": ["male", "shen", 3, ["wugeng_pili", "wugeng_zhengnu"], []],
                            "wugeng_tiankui": ["male", "shen", 5, ["wugeng_suiyue", "wugeng_shenqu"], []],
                            "wugeng_ziyu": ["male", "xrenlei", 4, ["wugeng_qijian", "wugeng_qiyi", "wugeng_zhutian"], []],
                            "wugeng_wugeng": ["male", "xrenlei", 2, ["wugeng_zhouwen", "wugeng_tianqi"], []],
                            "wugeng_baicai": ["female", "xrenlei", 3, ["wugeng_qinhe", "wugeng_dunkong"], []],
                            "wugeng_bailian": ["male", "shen", 3, ["wugeng_xuelian", "wugeng_siling"], []],
                            "wugeng_fuxi": ["male", "shen", 4, ["wugeng_dongshi", "wugeng_cizhou"], []],
                            "wugeng_nitianerxing": ["male", "xming", 4, ["wugeng_tongming", "wugeng_poji"], []],

                        },

                        characterIntro: {
                            "wugeng_tian": "<br><li>攻击★★★★★<br><li>防御★★★★★<br><li>辅助★★★☆☆<br><li>控场★★★☆☆<br><li>爆发★★☆☆☆<br>天，龙族，本名“黑龙”，香港漫画《封神纪》及中国大陆改编3D动画《武庚纪》中登场的男性角色。神族之主，亦称“天帝”。在神族中地位特殊，而且寿命远远超过其余神众。 平时生活在龙的体内，拥有无色界神力。无色界神力是神力中最罕见的一个种类，用于压抑声音、气味、力气、光、攻击、防御等，让对手的全部能力大幅降低、黯然无色。是上古与冥族交战取得世界支配权的远古神族，被不死鸟称为是“黑龙之主”，与白龙、黄龙、赤龙、飞龙同为远古神族五大古龙之一。",
                            "wugeng_zhengchan": "<br><li>攻击★★★★☆<br><li>防御★★★★☆<br><li>辅助★★★★☆<br><li>控场★★☆☆☆<br><li>爆发★★☆☆☆<br>真禅圣王，港漫《封神纪》五圣王之一，主长生界神力，绝招：生死轮回限、大千世界、空镜映月等，神技——因果转轮。",
                            "wugeng_shixing": "<br><li>攻击★★★★★<br><li>防御★★★☆☆<br><li>辅助★★☆☆☆<br><li>控场★★☆☆☆<br><li>爆发★★★★★<br>十刑，《封神纪》（动画《武庚纪》）中的人物，天之子，阎部大神，号称“猎神之神”，主修罗界神力，后得到不死鸟的帮助使用元始界神力。被大剑士子羽用诛天剑杀死后再次复活，但这次复活也恢复了神志和记忆，从而踏上向神族复仇之路",
                            "wugeng_xuanfeng": "<br><li>攻击★★★☆☆<br><li>防御★★★☆☆<br><li>辅助★★★★☆<br><li>控场★★★★☆<br><li>爆发★★☆☆☆<br>玄风圣王，港漫《封神纪》五圣王之一，主万象界神力之风象，能瞬间引发超强风暴，曾一招将十刑吹到千里之外，也用此招从古龙手里救走心月葵。绝招：暴风、银翼破空、无形剑，神技——真空。",
                            "wugeng_tianwu": "<br><li>攻击★★★★★<br><li>防御★★★★☆<br><li>辅助★★☆☆☆<br><li>控场★★☆☆☆<br><li>爆发★★★★★<br>天武圣王，港漫《封神纪》五圣王之一，主万象界神力。曾任“阎部大神”，性格刚烈，作战时十分勇猛，为人讲义气，对神眼十分忠诚。其为攻击型战士，破坏力极强，每一击都能引起地动山摇，曾一招“天地震怒”引起了地震和海啸。神技：真武大霹雳（大范围爆炸，剧烈震碎，把任何实物震碎。）、怒拳、神怒霹雳、大地之力·天地震怒（说白了就是地震，对地面的对手造成伤害，对空中无效。）、大地之怒（附带连环爆炸效果的拳击，可造成强烈地震）",
                            "wugeng_tiankui": "<br><li>攻击★★★★★<br><li>防御★★★★☆<br><li>辅助★★☆☆☆<br><li>控场★★☆☆☆<br><li>爆发★★★★☆<br>天魁，香港漫画《封神纪》及中国改编3D动画《武庚纪》中的原创男性角色。天间六部斗部的最强大神，全身暗红，拥有金刚界神力。十刑的老师，有着“最强之将”之称，远古神族赤龙氏后裔，曾经阻止纣的父亲谋反并轻描淡写地屠杀了百多名武士。后在与拥有不死鸟力量的十刑的战斗中战败而亡。",

                        },

                        perfectPair: {
                            "wugeng_tian": ['wugeng_shixing'],
                        },

                        skill: {

                            "wugeng_tongming": {
                                trigger: {
                                    global: "dieBegin",
                                },
                                audio: "ext:群英会:1",
                                forced: true,
                                filter: function (event, player) {
                                    return player.storage.disableEquip != undefined && player.storage.disableEquip.length > 0;
                                },
                                content: function () {
                                    player.recover();
                                    player.chooseToEnable();
                                },
                            },
                            "wugeng_poji": {
                                audio: "ext:群英会:3",
                                enable: "phaseUse",
                                filterTarget: function (card, player, target) {
                                    return target != player;
                                },
                                selectTarget: [1, Infinity],
                                derivation: ['wugeng_juyi', 'wugeng_anyue'],
                                filter: function (event, player) {
                                    if (player.countDisabled() >= 5) return false;
                                    return player.isAlive();
                                },
                                content: function () {
                                    target.disableEquip(2);
                                    player.disableEquip(1);
                                    player.disableEquip(2);
                                    player.disableEquip(3);
                                    player.disableEquip(4);
                                    player.disableEquip(5);
                                    player.disableJudge();
                                    player.loseHp(player.hp - 1);
                                    player.draw(player.hp - 1);
                                    player.addTempSkill('wugeng_juyi');
                                    player.addTempSkill('wugeng_anyue');
                                    player.update();
                                    player.awakenSkill('wugeng_poji');
                                },
                                ai: {
                                    threaten: 0.3,
                                    result: {
                                        player: function (player) {
                                            if (player.countCards('h', { name: 'sha' }) < 2) return 0;
                                            if (player.countCards('h') < 5) return 0;
                                            return 1.8;
                                        },
                                        target: function (player, target) {
                                            return get.damageEffect(target, player, target);
                                        },
                                    },
                                    order: 5,
                                },
                            },
                            "wugeng_juyi": {
                                trigger: {
                                    player: "useCard",
                                },
                                audio: "ext:群英会:2",
                                forced: true,
                                priority: 2019,
                                filter: function (event, player) {
                                    return player.isAlive();
                                },
                                content: function () {
                                    player.draw();
                                },
                            },
                            "wugeng_anyue": {
                                mod: {
                                    cardUsable: function (card) {
                                        if (get.info(card) && get.info(card).forceUsable) return;
                                        return Infinity;
                                    },
                                    targetInRange: function () {
                                        return true;
                                    },
                                },
                                trigger: {
                                    player: "useCard",
                                },
                                audio: "ext:群英会:2",
                                forced: true,
                                priority: 10,
                                filter: function (event, player) {
                                    if (get.type(event.card) == 'delay') return false;
                                    if (get.type(event.card) == 'equip') return false;
                                    if (event.card.name == 'jiedao') return false;
                                    if (event.targets.length > 1) return false;
                                    if (event.targets.contains(player)) return false;
                                    //if(!event.targets.isDisabled(2)) return false;                            
                                    return game.hasPlayer(function (current) {
                                        return current.isDisabled(2) && !event.targets.contains(current);
                                    });
                                },
                                content: function () {
                                    'step 0'
                                    event.targets = game.filterPlayer(function (current) {
                                        return current.isDisabled(2) && current != player;
                                    });
                                    event.targets.sort(lib.sort.seat);
                                    'step 1'
                                    trigger.targets.addArray(event.targets);
                                    player.line(trigger.targets, 'green');
                                },
                                ai: {
                                    order: 9,
                                },
                            },

                            "wugeng_siling": {
                                audio: "ext:群英会:2",
                                trigger: {
                                    player: "damageBegin",
                                },
                                priority: 8,
                                filter: function (event, player) {
                                    return game.findPlayer(function (current) {
                                        return current.hasSkill('wugeng_xuelian2') && current.storage.wugeng_xuelian2 > 0;
                                    });
                                },
                                content: function () {
                                    'step 0'
                                    trigger.cancel();
                                    'step 1'
                                    var target = game.findPlayer(function (current) {
                                        return current.storage.wugeng_xuelian2 > 0
                                    });
                                    target.storage.wugeng_xuelian2--;
                                    target.update();
                                    if (target.storage.wugeng_xuelian2 <= 0) {
                                        player.line(target, 'green');
                                        player.restoreSkill('wugeng_xuelian');
                                        player.loseMaxHp();
                                        //player.addSkill('wugeng_xuelian');
                                        target.removeSkill('wugeng_xuelian2');
                                        target.unmarkSkill('wugeng_xuelian2');
                                        target.update();
                                    }
                                },
                                ai: {
                                    order: 8,
                                    threaten: 2.4,
                                },
                            },
                            "wugeng_xuelian1": {
                                audio: "ext:群英会:2",
                                trigger: {
                                    player: "phaseEnd",
                                },
                                forced: true,
                                popup: false,
                                priority: 89,
                                unique: true,
                                filter: function (event, player) {
                                    //  return event.player.hasSkill('wugeng_xuelian4');
                                    return player.storage.wugeng_xuelian3 && player.storage.wugeng_xuelian3.isIn();
                                },
                                content: function () {
                                    //trigger.player.draw(player.storage.wugeng_xuelian2);
                                    var target = player.storage.wugeng_xuelian3;
                                    target.draw(Math.floor(player.storage.wugeng_xuelian2 / 2));
                                    player.storage.wugeng_xuelian2--;
                                    if (player.storage.wugeng_xuelian2 <= 0) {
                                        player.line(target, 'green');
                                        target.restoreSkill('wugeng_xuelian');
                                        //target.addSkill('wugeng_xuelian');
                                        player.removeSkill('wugeng_xuelian2');
                                        player.unmarkSkill('wugeng_xuelian2');
                                        target.loseMaxHp();
                                        target.update();
                                        player.update();
                                    }
                                },
                            },

                            "wugeng_xuelian3": {
                                audio: "ext:群英会:1",
                                trigger: {
                                    player: "dieBegin",
                                },
                                silent: true,
                                onremove: true,
                                unique: true,
                                filter: function (event, player) {
                                    return player.storage.wugeng_xuelian3 && player.storage.wugeng_xuelian3.isIn();
                                },
                                content: function () {
                                    'step 0'
                                    game.delayx();
                                    'step 1'
                                    var target = player.storage.wugeng_xuelian3;
                                    player.line(target, 'green');
                                    player.removeSkill('wugeng_xuelian2');
                                    target.restoreSkill('wugeng_xuelian');
                                    target.loseMaxHp();
                                    //  target.addSkill('wugeng_xuelian');
                                    target.update();
                                },
                                forced: true,
                                popup: false,
                            },

                            "wugeng_xuelian2": {
                                audio: "ext:群英会:2",
                                trigger: {
                                    player: "phaseEnd",
                                },
                                priority: 9,
                                direct: true,
                                unique: true,
                                init: function (player) {
                                    player.storage.wugeng_xuelian2 = 0;
                                },
                                intro: {
                                    name: "血莲",
                                    content: "剩下#个血莲标记",
                                },
                                marktext: "莲",
                                filter: function (event, player) {
                                    return player.hasSkill('wugeng_xuelian2') && player.storage.wugeng_xuelian2 > 0;
                                },
                                content: function () {
                                    player.logSkill('wugeng_xuelian2');
                                    if (!player.countCards('e')) {
                                        player.damage();
                                    }
                                    else {
                                        player.discard(player.getCards('e').randomGet());
                                    }
                                },
                                ai: {
                                    expose: 0.5,
                                },
                            },

                            "wugeng_xuelian": {
                                audio: "ext:群英会:1",
                                trigger: {
                                    player: "damageEnd",
                                },
                                check: function (event, player) {
                                    return get.attitude(player, event.source) <= 0;
                                },
                                frequent: "check",
                                filter: function (event, player) {
                                    return event.source && !event.source.hasSkill('wugeng_xuelian2');
                                },
                                content: function () {
                                    player.$fullscreenpop('九空血莲池', 'water');
                                    player.line(trigger.source);
                                    trigger.source.addSkill('wugeng_xuelian1');
                                    trigger.source.addSkill('wugeng_xuelian2');
                                    trigger.source.addSkill('wugeng_xuelian3');
                                    trigger.source.storage.wugeng_xuelian3 = player;
                                    trigger.source.markSkill('wugeng_xuelian2');
                                    trigger.source.storage.wugeng_xuelian2 += 9;
                                    trigger.source.update();
                                    //player.addSkill('wugeng_xuelian4'); 
                                    player.awakenSkill('wugeng_xuelian');
                                    //player.removeSkill('wugeng_xuelian');
                                },
                                ai: {
                                    basic: {
                                        result: {
                                            player: 1,
                                        },
                                        expose: 0.8,
                                    },
                                },
                            },
                            "wugeng_cizhou": {
                                audio: "ext:群英会:2",
                                trigger: {
                                    global: "dyingAfter",
                                },
                                unique: true,
                                derivation: ['wugeng_zhouwen'],
                                check: function (event, player) {
                                    return get.attitude(player, event.player) > 0;
                                },
                                frequent: "check",
                                filter: function (event, player) {
                                    return event.player.isAlive();
                                },
                                content: function () {
                                    player.$fullscreenpop('混沌之火', 'fire');
                                    trigger.player.addSkill('wugeng_zhouwen');
                                    player.awakenSkill('wugeng_cizhou');
                                },
                            },
                            "wugeng_dongshi": {
                                forced: true,
                                locked: true,
                                group: ["wugeng_dongshi1", "wugeng_dongshi2"],
                            },
                            "wugeng_dongshi1": {
                                audio: "ext:群英会:2",
                                trigger: {
                                    player: "shaBegin",
                                },
                                priority: 100,
                                direct: true,
                                filter: function (event, player) {
                                    return event.target.countCards('h');
                                },
                                content: function () {
                                    "step 0"
                                    player.chooseCardButton(trigger.target, trigger.target.getCards('h')).set('filterButton', function (button) {
                                        return get.number(button.link) % 2 == 1;
                                    });
                                    "step 1"
                                    if (result.bool) {
                                        var chat = ['空识界神力！', '你的动作全都被我识破了'].randomGet();
                                        player.say(chat);
                                        player.logSkill('wugeng_dongshi1');
                                        event.card = result.links[0];
                                        player.gain(event.card, trigger.target);
                                        trigger.target.$give(event.card, player);
                                    }

                                },
                                ai: {
                                    order: 10,
                                    expose: 0.4,
                                },
                            },
                            "wugeng_dongshi2": {
                                audio: "ext:群英会:1",
                                trigger: {
                                    target: "shaBegin",
                                },
                                priority: 100,
                                direct: true,
                                filter: function (event, player) {
                                    return event.player.countCards('h');
                                },
                                content: function () {
                                    "step 0"
                                    player.chooseCardButton(trigger.player, trigger.player.getCards('h')).set('filterButton', function (button) {
                                        return get.number(button.link) % 2 == 0;
                                    });
                                    "step 1"
                                    if (result.bool) {
                                        var chat = ['我运用空识界神力让我看到了神权的没落', '你的动作都被我看穿了'].randomGet();
                                        player.say(chat);
                                        player.logSkill('wugeng_dongshi2');
                                        event.card = result.links[0];
                                        player.gain(event.card, trigger.player);
                                        trigger.player.$give(event.card, player);
                                    }

                                },
                                ai: {
                                    order: 10,
                                    expose: 0.4,
                                },
                            },
                            "wugeng_anxie": {
                                audio: "ext:群英会:2",
                                trigger: {
                                    player: "phaseEnd",
                                },
                                direct: true,
                                filter: function (event, player) {
                                    return player.isAlive();
                                },
                                content: function () {
                                    'step 0'
                                    player.addSkill('wugeng_anxie2');
                                    if (!player.storage.wugeng_anxie) {
                                        player.storage.wugeng_anxie = [];
                                    }
                                    var list = [];
                                    for (var i = 0; i < lib.inpile.length; i++) {
                                        var name = lib.inpile[i];
                                        if (get.type(name) == 'trick' || get.type(name) == 'delay') list.push(['锦囊', '', name]);
                                    }
                                    player.chooseButton(true, [[list, 'vcard']]).set('filterButton', function (button) {
                                        if (player.storage.wugeng_anxie && player.storage.wugeng_anxie.contains(button.link[2])) return false;
                                        return true;
                                    }).set('ai', function (button) {
                                        var rand = _status.event.rand * 2;
                                        switch (button.link[2]) {
                                            case 'lebu': return 3 + rand[3];
                                            case 'shunshou': return 3 + rand[6];
                                            case 'nanman': return 3 + rand[7];
                                            case 'wanjian': return 2 + rand[8];
                                            default: return rand[9];
                                        }
                                    }).set('rand', [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()], Math.random());
                                    'step 1'
                                    if (result.bool) {
                                        player.logSkill('wugeng_anxie');
                                        player.storage.wugeng_anxie.push(result.links[0][2]);
                                    }
                                },
                            },
                            "wugeng_anxie2": {
                                mod: {
                                    targetEnabled: function (card, player, target) {
                                        if (target.storage.wugeng_anxie.contains(card.name)) return false;
                                    },
                                },
                            },
                            "wugeng_dunkong": {
                                audio: "ext:群英会:2",
                                trigger: {
                                    player: "damageBegin",
                                },
                                filter: function (event, player) {
                                    return player.countCards("h");
                                },
                                content: function () {
                                    "step 0"
                                    event.list = [];
                                    for (var i = 0; i < player.num("h"); i++) {
                                        if (event.list.contains(get.suit(player.getCards('h')[i]))) continue;
                                        event.list.push(get.suit(player.getCards('h')[i]));
                                        game.print(event.list);
                                    }
                                    //   player.showHandcards();
                                    "step 1"
                                    player.chooseControl(event.list, function (event, player) {
                                        return event.list.randomGet();
                                    }).prompt = "遁空：请选择一种花色并弃置该花色的所有手牌";
                                    "step 2"
                                    //  player.storage.wugeng_dunkong = result.control;
                                    player.discard(player.getCards("h", function (card) {
                                        return get.suit(card) == result.control;
                                    }));
                                    "step 3"
                                    trigger.num--;
                                },
                            },
                            "wugeng_qinhe": {
                                audio: "ext:群英会:2",
                                trigger: {
                                    global: "phaseUseBegin",
                                },
                                init: function (player) {
                                    player.storage.wugeng_qinhe = [];
                                },
                                filter: function (event, player) {
                                    return event.player != player && player.countCards('h') > 0;
                                },
                                check: function (event, player) {
                                    if (player.countCards('h') < 2) return true;
                                    return get.attitude(player, event.player) > 0;
                                },
                                frequent: "check",
                                content: function () {
                                    player.logSkill('wugeng_qinhe', trigger.player);
                                    var card = player.getCards('h').randomGet();
                                    player.showCards(card);
                                    player.storage.wugeng_qinhe = get.suit(card);
                                    game.addVideo('storage', player, ['wugeng_qinhe', player.storage.wugeng_qinhe]);
                                    player.markSkill('wugeng_qinhe');
                                },
                                intro: {
                                    content: function (storage, player, skill) {
                                        return get.translation(player) + '选择的花色是' + get.translation(player.storage.wugeng_qinhe);
                                    },
                                },
                                group: ["wugeng_qinhe2", "wugeng_qinhe3"],
                                ai: {
                                    expose: 0.8,
                                    order: 11,
                                    result: {
                                        player: 1,
                                    },
                                },
                            },
                            "wugeng_qinhe2": {
                                trigger: {
                                    global: "useCard",
                                },
                                frequent: true,
                                filter: function (event, player) {
                                    if (event.player != _status.currentPhase) return false;
                                    // return (get.type(event.card,'trick')==player.storage.wugeng_qinhe&&event.cards[0]&&event.cards[0]==event.card);
                                    return get.suit(event.card) == player.storage.wugeng_qinhe;
                                },
                                content: function () {
                                    game.playSu(['wugeng_qinhe1', 'wugeng_qinhe2'].randomGet());
                                    trigger.player.draw();
                                    player.draw();
                                },
                                ai: {
                                    threaten: 0.4,
                                },
                            },
                            "wugeng_qinhe3": {
                                trigger: {
                                    global: "phaseUseEnd",
                                },
                                silent: true,
                                forced: true,
                                onremove: true,
                                popup: false,
                                content: function () {
                                    delete player.storage.wugeng_qinhe;
                                    player.storage.wugeng_qinhe = [];
                                    trigger.player.unmarkSkill('wugeng_qinhe');
                                },
                            },

                            "wugeng_zhouwen": {
                                audio: "ext:群英会:2",
                                group: ["wugeng_zhouwen1", "wugeng_zhouwen2"],
                            },
                            "wugeng_zhouwen1": {
                                trigger: {
                                    player: "damageBegin",
                                },
                                audio: "ext:群英会:2",
                                forced: true,
                                filter: function (event, player) {
                                    return !player.getEquip(2);
                                },
                                content: function () {
                                    trigger.num--;
                                },
                                ai: {
                                    threaten: 0.8,
                                    order: 3,
                                },
                            },
                            "wugeng_zhouwen2": {
                                trigger: {
                                    source: "damageBegin",
                                },
                                audio: "ext:群英会:2",
                                forced: true,
                                filter: function (event, player) {
                                    return event.player.hp > player.hp;
                                },
                                content: function () {
                                    //var num2=trigger.player.hp-player.hp;
                                    // trigger.num+=num2;        
                                    trigger.num++;
                                },
                            },
                            "wugeng_fanji": {
                                audio: "ext:群英会:2",
                                derivation: ['wugeng_mingpao', 'wugeng_lianqi', 'wugeng_wuse', 'wugeng_xuwu'],
                                group: ["wugeng_fanji1", "wugeng_fanji2"],
                            },
                            "wugeng_fanji1": {
                                audio: "ext:群英会:2",
                                trigger: {
                                    player: "phaseBegin",
                                },
                                forced: true,
                                popup: false,
                                content: function () {
                                    player.removeSkill(player.storage.wugeng_fanji);
                                    switch (Math.floor(Math.random() * 2)) {
                                        case 0: if (lib.skill.wugeng_mingpao) { player.addSkill('wugeng_mingpao'); player.storage.wugeng_fanji = 'wugeng_mingpao'; player.popup('wugeng_mingpao'); } break;
                                        case 1: if (lib.skill.wugeng_lianqi) { player.addSkill('wugeng_lianqi'); player.storage.wugeng_fanji = 'wugeng_lianqi'; player.popup('wugeng_lianqi'); } break;
                                    }
                                },
                            },
                            "wugeng_fanji2": {
                                audio: "ext:群英会:2",
                                trigger: {
                                    player: "phaseEnd",
                                },
                                forced: true,
                                popup: false,
                                content: function () {
                                    player.removeSkill(player.storage.wugeng_fanji);
                                    switch (Math.floor(Math.random() * 2)) {
                                        case 0: if (lib.skill.wugeng_wuse) { player.addSkill('wugeng_wuse'); player.storage.wugeng_fanji = 'wugeng_wuse'; player.popup('wugeng_wuse'); } break;
                                        case 1: if (lib.skill.wugeng_xuwu) { player.addSkill('wugeng_xuwu'); player.storage.wugeng_fanji = 'wugeng_xuwu'; player.popup('wugeng_xuwu'); } break;
                                    }
                                },
                            },
                            "wugeng_anyu": {
                                audio: "ext:群英会:1",
                                direct: true,
                                trigger: {
                                    player: "damageBegin",
                                },
                                filter: function (event, player) {
                                    return player.isAlive();
                                },
                                content: function () {
                                    "step 0"
                                    player.chooseTarget('选择【暗狱】的目标', lib.translate.wugeng_anyu_info, function (card, player, target) {
                                        return target != player && !target.isTurnedOver();
                                    }).set('ai', function (target) {
                                        return -get.attitude(player, target);
                                    });
                                    "step 1"
                                    if (result.bool) {
                                        player.logSkill('wugeng_anyu');
                                        player.line(result.targets[0]);
                                        result.targets[0].turnOver();
                                        result.targets[0].addTempSkill('wugeng_anyu3', { player: 'damageAfter' });
                                        result.targets[0].addTempSkill('wugeng_anyu2', { player: 'damageAfter' });
                                    }
                                    else {
                                        event.finish();
                                    }
                                },
                                ai: {
                                    basic: {
                                        result: {
                                            player: 1,
                                        },
                                        expose: 0.8,
                                    },
                                },
                            },
                            "wugeng_anyu2": {
                                mark: true,
                                mod: {
                                    cardEnabled: function () {
                                        return false;
                                    },
                                    cardUsable: function () {
                                        return false;
                                    },
                                    cardRespondable: function () {
                                        return false;
                                    },
                                    cardSavable: function () {
                                        return false;
                                    },
                                },
                                intro: {
                                    content: "不能使用或打出卡牌",
                                },
                            },
                            "wugeng_anyu3": {
                                init: function (player, skill) {
                                    var skills = player.getSkills(true, false);
                                    for (var i = 0; i < skills.length; i++) {
                                        if (get.skills[i]) {
                                            skills.splice(i--, 1);
                                        }
                                    }
                                    player.disableSkill(skill, skills);
                                },
                                onremove: function (player, skill) {
                                    player.enableSkill(skill);
                                },
                                mark: true,
                                locked: true,
                                intro: {
                                    content: function (storage, player, skill) {
                                        var list = [];
                                        for (var i in player.disabledSkills) {
                                            if (player.disabledSkills[i].contains(skill)) {
                                                list.push(i)
                                            }
                                        }
                                        if (list.length) {
                                            var str = '失效技能：';
                                            for (var i = 0; i < list.length; i++) {
                                                if (lib.translate[list[i] + '_info']) {
                                                    str += get.translation(list[i]) + '、';
                                                }
                                            }
                                            return str.slice(0, str.length - 1);
                                        }
                                    },
                                },
                            },
                            "wugeng_mingpao": {
                                mark: true,
                                marktext: "炮",
                                intro: {
                                    content: "你使用的【杀】可指定任意名目标",
                                },
                                mod: {
                                    selectTarget: function (card, player, range) {
                                        if (card.name == 'sha' && range[1] != -1) range[1] += Infinity;
                                    },
                                },
                            },
                            "wugeng_lianqi": {
                                mark: true,
                                marktext: "气",
                                intro: {
                                    content: "你使用的【杀】没距离与次数限制",
                                },
                                mod: {
                                    targetInRange: function (card, player, target, now) {
                                        if (card.name == 'sha') return true;
                                    },
                                    cardUsable: function (card, player, num) {
                                        if (card.name == 'sha') return Infinity;
                                    },
                                },
                            },
                            "wugeng_wuse": {
                                mark: true,
                                marktext: "色",
                                intro: {
                                    content: "你不能成为【杀】的目标",
                                },
                                mod: {
                                    targetEnabled: function (card, player, target, now) {
                                        if (card.name == 'sha') return false;
                                    },
                                },
                            },
                            "wugeng_xuwu": {
                                mark: true,
                                marktext: "虚",
                                intro: {
                                    content: "你不能成为锦囊牌的目标",
                                },
                                mod: {
                                    targetEnabled: function (card, player, target, now) {
                                        if (get.type(card) == 'trick' || get.type(card) == 'delay') return false;
                                    },
                                },
                            },
                            "wugeng_tianqi": {
                                audio: "ext:群英会:2",
                                trigger: {
                                    player: "dying",
                                },
                                forced: true,
                                unique: true,
                                derivation: ['wugeng_anyu', 'wugeng_fanji', 'wugeng_mingpao', 'wugeng_lianqi', 'wugeng_wuse', 'wugeng_xuwu'],
                                filter: function (event, player) {
                                    return player.hp <= 0;
                                },
                                content: function () {
                                    "step 0"
                                    ui.backgroundMusic.src = lib.assetURL + 'extension/群英会/wms_backgroundmusic.mp3';
                                    player.$fullscreenpop('无色界神力', 'fire');
                                    game.delay();
                                    game.countPlayer(function (current) {
                                        if (current != player) {
                                            player.line(current, 'green');
                                            current.addTempSkill('wugeng_anyu3', { player: 'damageAfter' });
                                            current.addTempSkill('wugeng_anyu2', { player: 'phaseBegin' });
                                        }
                                    });
                                    "step 1"
                                    player.gainMaxHp();
                                    player.update();
                                    player.recover(Infinity);
                                    //game.playSu(['sanguo_xushen1','sanguo_xushen2'].randomGet());  
                                    player.removeSkill('wugeng_zhouwen');
                                    player.addSkill('wugeng_fanji');
                                    player.addSkill('wugeng_anyu');
                                    player.addTempSkill('wugeng_wuse', { player: 'phaseBegin' });
                                    player.popup('wugeng_wuse');
                                    player.awakenSkill('wugeng_tianqi');

                                    player.update();
                                },
                            },
                            "wugeng_zhutian": {
                                audio: "ext:群英会:2",
                                trigger: {
                                    player: "damageEnd",
                                },
                                direct: true,
                                priority: -12,
                                filter: function (event, player) {
                                    if (!player.countCards('h', { name: 'sha' })) return false;
                                    return player.isAlive();
                                },
                                content: function () {
                                    player.addTempSkill('wugeng_zhutian2', 'shaAfter');
                                    player.chooseToUse({ name: 'sha' }, '诛天：是否使用一张杀？').logSkill = 'wugeng_zhutian';
                                    //player.chooseToUse({name:'sha'},trigger.source,'诛天：是否对'+get.translation(trigger.source)+'使用一张杀？').logSkill='wugeng_zhutian';
                                    var chat = ['这是我内心最珍贵的东西，你不该触碰它', '我有我的追求，任何压迫都不能使我屈服'].randomGet();
                                    player.say(chat);
                                },
                            },
                            "wugeng_zhutian2": {
                                audio: "ext:群英会:2",
                                trigger: { source: 'damageBegin' },
                                check: function (event, player) {
                                    var att = get.attitude(player, event.player);
                                    if (event.player.hp == event.player.maxHp) return att < 0;
                                    if (event.player.hp == event.player.maxHp - 1 || (event.player.maxHp <= 3 || event.player.hasSkillTag('maixie'))) return att < 0;
                                    return att > 0;
                                },
                                logTarget: 'player',
                                frequent: "check",
                                filter: function (event, player) {
                                    return event.card && event.card.isCard && event.card.name == 'sha';
                                },
                                content: function () {
                                    trigger.cancel();
                                    var chat = ['这是一把专门杀神的剑，名叫【诛天】', '这把剑能焚烧神族的神元'].randomGet();
                                    player.say(chat);
                                    trigger.player.loseMaxHp(true);
                                    trigger.player.damage('fire');
                                },
                            },
                            "wugeng_qiyi": {
                                audio: "ext:群英会:2",
                                trigger: {
                                    global: "damageBegin",
                                },
                                priority: 120,
                                check: function (event, player) {
                                    return get.attitude(player, event.player) > 0;
                                },
                                frequent: "check",
                                filter: function (event, player) {

                                    return event.player.isAlive() && !event.player.countCards('e', { subtype: 'equip1' }) && !event.player.isDisabled(1);
                                },
                                content: function () {
                                    event.card = get.cardPile(function (card) {
                                        return get.subtype(card) == 'equip1';
                                    });
                                    if (event.card) {
                                        var chat = ['我愿用我的一生为人类谋求自由', '这就是我从幻岛学到的练气术'].randomGet();
                                        player.say(chat);
                                        trigger.player.equip(event.card, true).set('delay', true);
                                    }
                                },
                                ai: {
                                    order: 1,
                                    expose: 0.2,
                                },
                            },
                            "wugeng_qijian": {
                                audio: "ext:群英会:2",
                                usable: 1,
                                enable: "phaseUse",
                                filter: function (event, player) {
                                    return game.hasPlayer(function (current) {
                                        return current.countCards('e', { subtype: 'equip1' });
                                    });
                                    //return player.isAlive();
                                },
                                //filterTarget:true,
                                filterTarget: function (card, player, target) {
                                    return target != player;
                                },
                                content: function () {
                                    "step 0"
                                    player.$fullscreenpop('剑气流星', 'fire');
                                    event.targets = game.filterPlayer();
                                    for (var i = 0; i < event.targets.length; i++) {
                                        if (!event.targets[i].countCards('e', { subtype: 'equip1' })) {
                                            event.targets.splice(i--, 1);
                                        }
                                    }
                                    "step 1"
                                    if (event.targets.length) {
                                        event.current = event.targets.shift();
                                        if (event.current.countCards('e', { subtype: 'equip1' }) && target.isAlive()) {
                                            // player.discardPlayerCard(event.current,{subtype:'equip1'},'e',true,'请弃置其一张装备区的武器牌');
                                            player.discardPlayerCard(event.current, 1, 'e', true).set('filterButton', function (button) {
                                                return get.subtype(button.link) == 'equip1';
                                            }).set('ai', function (button) {
                                                return Math.random();
                                            });
                                        }
                                    }
                                    else {
                                        event.finish();
                                    }
                                    "step 2"
                                    if (result.bool) {
                                        var chat = ['我的剑藏在虚空之中', '我已经有很多年不再佩带剑了'].randomGet();
                                        player.say(chat);
                                        event.current.useCard({ name: 'sha' }, target, false);
                                        event.goto(1);
                                    }
                                    else event.finish();
                                },
                                ai: {
                                    result: {
                                        target: function (player, target) {
                                            if (!target.isEmpty(2)) return -0.2;
                                            if (target.hp <= 2) return -3.5;
                                            return -2;
                                        },
                                    },
                                    order: 1,
                                    expose: 0.4,
                                },
                            },
                            "wugeng_shenqu": {
                                audio: "ext:群英会:2",
                                forced: true,
                                trigger: {
                                    player: "damageBefore",
                                },
                                filter: function (event, player) {
                                    return event.source && event.source.isAlive();
                                },
                                content: function () {
                                    var chat = ['神力浩瀚无边，而神技则将神力发挥到极致', '你唯一能打败我的方法只有比我更快，但你能快到抓住划过天边的流星吗？'].randomGet();
                                    player.say(chat);
                                    if (trigger.num > 1) {
                                        trigger.num = 1;
                                        event.finish();
                                    }
                                    if (trigger.source.hp > player.hp) {
                                        trigger.cancel();
                                        event.finish();
                                    }
                                },
                                ai: {
                                    notrick: true,
                                    nosha: true,
                                    effect: {
                                        target: function (card, player, target, current) {
                                            if (get.type(card) == 'trick' && get.tag(card, 'damage')) {
                                                return 'zeroplayertarget';
                                            }
                                        },
                                    },
                                },
                            },

                            "wugeng_suiyue": {
                                enable: "phaseUse",
                                usable: 1,
                                audio: "ext:群英会:2",
                                filter: function (event, player, target) {
                                    return player.hp > 0;
                                },
                                filterTarget: function (card, player, target) {
                                    return player.canUse({ name: 'sha' }, target, false) && target != player;
                                },
                                prepare: function (cards, player, targets) {
                                    player.line(targets);
                                },
                                content: function () {
                                    "step 0"
                                    player.loseHp();
                                    event.num = 0;
                                    player.$fullscreenpop('神技•天斗碎岳', 'fire');
                                    var chat = ['祭司那边需要我的帮助，我必须速战速决', '凡人，你很有本领，那就接我最强一招吧'].randomGet();
                                    player.say(chat);
                                    "step 1"
                                    player.addTempSkill('unequip', 'shaAfter');
                                    player.useCard({ name: 'sha' }, target, false);
                                    event.num++;
                                    if (target.isAlive() && event.num < player.getDamagedHp()) {
                                        event.redo();
                                    }
                                    else {
                                        event.finish();
                                    }
                                },
                                ai: {
                                    unequip_ai: true,
                                    order: 9,
                                    result: {
                                        target: function (player, target) {
                                            if (player.hp < 2 && !player.countCards('h', { name: ['tao', 'jiu'] })) return 0;
                                            return get.damageEffect(target, player);
                                        },
                                        player: function (player) {
                                            if (player.hp < 2 && !player.countCards('h', { name: ['tao', 'jiu'] })) return 0;
                                            return 1;
                                        },
                                    },
                                    expose: 0.8,
                                },
                            },

                            "wugeng_zhengnu": {
                                audio: "ext:群英会:2",
                                trigger: {
                                    player: "damageEnd",
                                },
                                priority: -2018,
                                filter: function (event, player) {
                                    return player.isAlive();
                                },
                                check: function (event, player) {
                                    var active = 0;
                                    for (var i = 0; i < game.players.length; i++) {
                                        if (game.players[i] == player) continue;
                                        if (!game.players[i].isOut()) {
                                            if (ai.get.attitude(player, game.players[i]) > 0) {
                                                active++;
                                            }
                                            else if (ai.get.attitude(player, game.players[i]) <= 0) {
                                                active++;
                                            }
                                        }
                                    }
                                    if (active > 0) return 1;
                                    if (Math.random() < 0.4) return 1;
                                    return 0.8;
                                },
                                frequent: "check",
                                content: function () {
                                    "step 0"
                                    trigger.finish();
                                    trigger.untrigger();
                                    event.current = player.next;
                                    var chat = ['敢出手伤我神族大祭司，想必已做好灭亡的觉悟了', '十刑竟能战胜天魁？有点意思！'].randomGet();
                                    player.say(chat);
                                    "step 1"
                                    event.current.chooseControl('随机弃牌', '令其摸牌').set('ai', function () {
                                        if (ai.get.attitude(event.current, player) > 0) return '令其摸牌';
                                        if (ai.get.attitude(event.current, player) <= 0 && event.current.countCards('he') > 2) return '随机弃牌';
                                        return '令其摸牌';
                                    }).set('prompt', '天地震怒：请选择一项');
                                    "step 2"
                                    if (result.control == '随机弃牌') {
                                        event.current.discard(event.current.getCards('he').randomGet());
                                    }
                                    else {
                                        event.current.line(player, 'green');
                                        player.draw();
                                    }
                                    if (event.current.next != player) {
                                        event.current = event.current.next;
                                        game.delay(0.5);
                                        event.goto(1);
                                    }
                                },
                                ai: {
                                    order: 4,
                                    maixie: true,
                                    maixie_hp: true,
                                    effect: {
                                        target: function (card, player, target) {
                                            if (get.tag(card, 'damage')) {
                                                if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                                if (target.hp <= 1) return;
                                                if (!target.hasFriend()) return;
                                                var hastarget = false;
                                                var turnfriend = false;
                                                var players = game.filterPlayer();
                                                for (var i = 0; i < players.length; i++) {
                                                    if (get.attitude(target, players[i]) < 0 && !players[i].isTurnedOver()) {
                                                        hastarget = true;
                                                    }
                                                    if (get.attitude(target, players[i]) > 0 && players[i].isTurnedOver()) {
                                                        hastarget = true;
                                                        turnfriend = true;
                                                    }
                                                }
                                                if (get.attitude(player, target) > 0 && !hastarget) return;
                                                if (turnfriend || target.hp == target.maxHp) return [0.5, 1];
                                                if (target.hp > 1) return [1, 0.5];
                                            }
                                        }
                                    }
                                },
                            },

                            "wugeng_pili": {
                                audio: "ext:群英会:2",
                                enable: "phaseUse",
                                round: 2,
                                complexCard: true,
                                filterCard: function (card, player) {
                                    if (ui.selected.cards.length) {
                                        return get.suit(card) == get.suit(ui.selected.cards[0]);
                                    }
                                    var cards = player.getCards('h');
                                    for (var i = 0; i < cards.length; i++) {
                                        if (card != cards[i]) {
                                            if (get.suit(card) == get.suit(cards[i])) return true;
                                        }
                                    }
                                    return true;
                                },
                                selectTarget: function (card) {
                                    if (ui.selected.targets.length > ui.selected.cards.length) {
                                        game.uncheck('target');
                                    }
                                    return ui.selected.cards.length;
                                },
                                filterTarget: function (card, player, target) {
                                    return target != player && get.distance(player, target, 'attack') <= 1;
                                },
                                filter: function (event, player) {
                                    return player.hp <= game.players.length;
                                },
                                check: function (card) {
                                    return 8 - ai.get.value(card);
                                },
                                prepare: function (cards, player, targets) {
                                    player.line(targets);
                                },
                                init: function (player) {
                                    for (var i = 0; i < player.node.marks.childNodes.length; i++) {
                                        if (player.node.marks.childNodes[i].name == 'wugeng_pili') {
                                            player.node.marks.childNodes[i].setBackground(player.name, 'character');
                                            player.node.marks.childNodes[i].innerHTML = '';
                                        }
                                    }
                                },
                                multitarget: true,
                                multiline: true,
                                selectCard: [1, Infinity],
                                content: function () {
                                    "step 0"
                                    player.$fullscreenpop('真武大霹雳', 'fire');
                                    game.delay(1);
                                    event.targets = targets.slice(0);
                                    event.num = event.targets.length;
                                    event.targets.sort(lib.sort.seat);
                                    "step 1"
                                    if (event.targets.length) {
                                        var target = event.targets.shift();
                                        target.damage(event.num);
                                        event.redo();
                                    }
                                },
                                ai: {
                                    order: 8,
                                    expose: 0.9,
                                    threaten: 0.5,
                                    result: {
                                        player: 1,
                                        target: function (player, target) {
                                            return get.damageEffect(target, player);
                                        },
                                    },
                                },
                            },

                            "wugeng_shensu": {
                                unique: true,
                                mod: {
                                    globalFrom: function (from, to, distance) {
                                        return distance - from.hp;
                                    },
                                    globalTo: function (from, to, current) {
                                        return current + (to.maxHp - to.hp);
                                    },
                                },
                            },

                            "wugeng_baofeng3": {
                                mod: {
                                    mark: true,
                                    intro: {
                                        content: "防",
                                    },
                                    globalTo: function (from, to, current) {
                                        return current + (to.maxHp - to.hp);
                                    },
                                },
                            },
                            "wugeng_baofeng4": {
                                mark: true,
                                intro: {
                                    content: "攻",
                                },
                                mod: {
                                    globalFrom: function (from, to, distance) {
                                        return distance + from.hp;
                                    },
                                },
                            },

                            "wugeng_baofeng": {
                                audio: "ext:群英会:2",
                                trigger: {
                                    player: "damage",
                                },
                                filter: function (event, player) {
                                    return player.isAlive();
                                },
                                direct: true,
                                content: function () {
                                    "step 0"
                                    player.chooseControl('远逐', '救护', 'cancel2', function () {
                                        var player = _status.event.player;
                                        if (player.hp > 1) {
                                            return '远逐';
                                        }
                                        if (player.hp < 2) {
                                            return '救护';
                                        }
                                        return 'cancel2';
                                    });
                                    "step 1"
                                    if (result.control == '远逐') {
                                        var chat = ['银翼破空', '干嘛要那么认真呢？'].randomGet();
                                        player.say(chat);
                                        trigger.source.addSkill('wugeng_baofeng4');
                                        trigger.source.markSkill('wugeng_baofeng4');
                                        player.useCard({ name: 'sha' }, trigger.source, false);
                                        player.logSkill('wugeng_baofeng');
                                        event.finish();
                                    }
                                    else if (result.control == '救护') {
                                        event.goto(2);
                                    }
                                    "step 2"
                                    player.chooseTarget('选择【救护】的目标', lib.translate.wugeng_baofeng_info, function (card, player, target) {
                                        return target != player;
                                    }).set('ai', function (target) {
                                        return get.attitude(_status.event.player, target);
                                    });
                                    "step 3"
                                    if (result.bool) {
                                        var chat = ['若你们退回地狱界，我们仍然可以相安无事', '不用感谢我'].randomGet();
                                        player.say(chat);
                                        player.logSkill('wugeng_baofeng', result.targets);
                                        result.targets[0].addSkill('wugeng_baofeng3');
                                        result.targets[0].draw();
                                        result.targets[0].markSkill('wugeng_baofeng3');
                                    }
                                },
                                ai: {
                                    maixie: true,
                                    order: 7,
                                },

                            },

                            "wugeng_zhengkong2": {
                                audio: "ext:群英会:2",
                                trigger: {
                                    player: "phaseEnd",
                                },
                                unique: true,
                                forced: true,
                                marktext: "空",
                                mark: true,
                                filter: function (event, player) {
                                    return player.isAlive();
                                },
                                content: function () {
                                    setTimeout(function () {
                                        var chat = ['吊颈都要竭口气吧？', '连呼吸都觉得痛……'].randomGet();
                                        player.say(chat);
                                        player.die();
                                    }, 81000)
                                },
                                direct: true,
                                notarget: true,
                                ai: {
                                    expose: 0.5,
                                    maixie: true,
                                    maixie_hp: true,
                                },
                            },

                            "wugeng_zhengkong": {
                                audio: "ext:群英会:3",
                                trigger: { player: ['loseHpAfter', 'damageEnd'] },
                                filter: function (event, player) {
                                    if (event.name == 'damage') return event.num > 1;
                                    return true;
                                },
                                direct: true,
                                unique: true,
                                skillAnimation: true,
                                animationColor: "thunder",
                                content: function () {
                                    "step 0"
                                    player.chooseTarget('选择发动神技【真空】的目标', lib.translate.wugeng_zhengkong_info, function (card, player, target) {
                                        return target != player && target.identity != 'zhu' && !target.hasSkill('wugeng_zhengkong2');
                                    }).set('ai', function (target) {
                                        return -get.attitude(trigger.player, target);
                                    });
                                    "step 1"
                                    if (result.bool) {
                                        player.$fullscreenpop('神技•真空', 'thunder');
                                        player.logSkill('wugeng_zhengkong', result.targets);
                                        // result.targets[0].addSkill('wugeng_zhengkong2');          
                                        setTimeout(function () {
                                            var chat = ['吊颈都要竭口气吧？', '连呼吸都觉得痛……'].randomGet();
                                            result.targets[0].say(chat);
                                            result.targets[0].die();
                                        }, 60000)
                                    }
                                },
                                ai: {
                                    damage: true,
                                    order: 7,
                                    maixie: true,
                                    maixie_hp: true,
                                },
                            },
                            "wugeng_xuemao": {
                                audio: "ext:群英会:3",
                                enable: "phaseUse",
                                usable: 1,
                                filter: function (event, player) {
                                    return (ui.cardPile.childElementCount + ui.discardPile.childElementCount) >= 1;
                                },

                                content: function () {
                                    "step 0"
                                    event.cards = get.cards(1);
                                    player.showCards(event.cards);
                                    "step 1"
                                    for (var i = 0; i < event.cards.length; i++) {
                                        if (get.type(event.cards[i]) == 'trick' || get.type(event.cards[i]) == 'delay') {
                                            event.cards[i].discard();
                                            event.cards.splice(i--, 1);
                                            player.draw(2);
                                            event.finish();
                                        }
                                        if (get.type(event.cards[i]) == 'equip') {
                                            player.recover();
                                            game.delay(0.5);
                                            player.equip(event.cards[i], true).set('delay', true);
                                            event.finish();
                                        }
                                        if (get.type(event.cards[i]) == 'basic') {
                                            player.gain(event.cards[i], 'gain2');
                                            event.goto(2);
                                        }
                                    }
                                    "step 2"
                                    player.chooseTarget(get.prompt('wugeng_xuemao'), function (card, player, target) {
                                        if (player == target) return false;
                                        return player.canUse({ name: 'sha' }, target, false);
                                    }).set('ai', function (target) {
                                        return -ai.get.attitude(_status.event.player, target);
                                    });
                                    "step 3"
                                    if (result.bool) {
                                        player.logSkill('wugeng_xuemao', result.targets);
                                        event.targets = result.targets
                                        if (result.targets.length >= 1) {
                                            player.useCard({ name: 'sha' }, event.targets[0], false);
                                        }
                                        else {
                                            event.finish();
                                        }
                                        game.delay(0.5);
                                    }
                                },

                                ai: {
                                    order: 2,
                                    threaten: 0.5,
                                    result: {
                                        player: 1,
                                    },
                                },
                            },

                            "wugeng_baiqian": {
                                forced: true,
                                unique: true,
                                noLose: true,
                                noDeprive: true,
                                locked: true,
                                noRemove: true,
                                noDisable: true,
                                group: ["wugeng_baiqian1", "wugeng_baiqian2", "wugeng_baiqian3"],
                            },
                            "wugeng_baiqian5": {
                                mark: true,
                                mod: {
                                    cardEnabled: function () {
                                        return false;
                                    },
                                    cardUsable: function () {
                                        return false;
                                    },
                                    cardRespondable: function () {
                                        return false;
                                    },
                                    cardSavable: function () {
                                        return false;
                                    },
                                },
                                intro: {
                                    content: "不能使用或打出卡牌",
                                },
                            },
                            "wugeng_baiqian1": {
                                audio: "ext:群英会:1",
                                trigger: { global: 'gameStart', player: 'enterGame' },
                                forced: true,
                                unique: true,
                                locked: true,
                                //  noLose:true,
                                //   noDeprive:true,
                                //   noRemove:true,
                                // noDisable:true,
                                priority: Infinity,
                                /*       init:function(player){
                               console.log(player);
                                  player.turnOver = function (all) {
                                  player.popup('<span class="bluetext" style="color:    #B3EE3A">免疫'+'</span>');
                               };
                               player.skip = function (all) {
                                   player.popup('<span class="bluetext" style="color:    #B3EE3A">免疫'+'</span>');
                               };
                               player.disableSkill = function (all) {
                                   player.popup('<span class="bluetext" style="color:    #B3EE3A">免疫'+'</span>');
                               };
                               player.init = function (all) {
                                   player.popup('<span class="bluetext" style="color:    #B3EE3A">免疫'+'</span>');
                               };
                                   player.reinit = function (all) {
                                   player.popup('<span class="bluetext" style="color:    #B3EE3A">免疫'+'</span>');
                               };		
                                   player.remove = function (all) {
                                   player.popup('<span class="bluetext" style="color:    #B3EE3A">免疫'+'</span>');
                               };
                                   player.removeSkill = function (all) {
                                   player.popup('<span class="bluetext" style="color:    #B3EE3A">免疫'+'</span>');
                               };
                              player.addTempSkill = function (all) {
                                   player.popup('<span class="bluetext" style="color:    #B3EE3A">免疫'+'</span>');
                               };
                               player.goMad = function (all) {
                                   player.popup('<span class="bluetext" style="color:    #B3EE3A">免疫'+'</span>');
                               };
                               player.clearSkills = function (all) {
                                   player.popup('<span class="bluetext" style="color:    #B3EE3A">免疫'+'</span>');
                               };
                       },         */

                                content: function () {
                                    "step 0"
                                    player.$fullscreenpop('无色界神力', 'thunder');
                                    game.delay(5);
                                    "step 1"
                                    game.countPlayer(function (current) {
                                        if (current != player) {
                                            player.line(current, 'green');
                                            current.addTempSkill('wugeng_baiqian4', { player: 'damageAfter' });
                                        }
                                    });
                                    "step 2"
                                    game.broadcastAll() + ui.background.setBackgroundImage("extension/群英会/wms_tian_background.jpg");
                                    game.log(player, '将场地切换为无色之境');
                                    ui.backgroundMusic.src = lib.assetURL + 'extension/群英会/wms_backgroundmusic.mp3';
                                    player.node.name.innerHTML = '黑<br>龙';
                                    player.update();
                                },
                            },
                            "wugeng_baiqian3": {
                                forced: true,
                                locked: true,
                                unique: true,
                                //  noLose:true,             
                                //     noDeprive:true,
                                //     noRemove:true,
                                //       noDisable:true,
                                /*    init:function(player){
                           console.log(player);
                              player.turnOver = function (all) {
                              player.popup('<span class="bluetext" style="color:    #B3EE3A">免疫'+'</span>');
                           };
                           player.skip = function (all) {
                               player.popup('<span class="bluetext" style="color:    #B3EE3A">免疫'+'</span>');
                           };
                           player.disableSkill = function (all) {
                               player.popup('<span class="bluetext" style="color:    #B3EE3A">免疫'+'</span>');
                           };
                           player.init = function (all) {
                               player.popup('<span class="bluetext" style="color:    #B3EE3A">免疫'+'</span>');
                           };
                               player.reinit = function (all) {
                               player.popup('<span class="bluetext" style="color:    #B3EE3A">免疫'+'</span>');
                           };
                               player.remove = function (all) {
                               player.popup('<span class="bluetext" style="color:    #B3EE3A">免疫'+'</span>');
                           };
                               player.removeSkill = function (all) {
                               player.popup('<span class="bluetext" style="color:    #B3EE3A">免疫'+'</span>');
                           };
                          player.addTempSkill = function (all) {
                               player.popup('<span class="bluetext" style="color:    #B3EE3A">免疫'+'</span>');
                           };
                           player.goMad = function (all) {
                               player.popup('<span class="bluetext" style="color:    #B3EE3A">免疫'+'</span>');
                           };
                           player.clearSkills = function (all) {
                               player.popup('<span class="bluetext" style="color:    #B3EE3A">免疫'+'</span>');
                           };
                   },               */
                                mod: {
                                    selectTarget: function (card, player, range) {
                                        if (card.name == 'sha' && range[1] != -1) range[1] += Infinity;
                                    },
                                    targetEnabled: function (card, player, target, now) {
                                        if (target.countCards('h') != target.hp) {
                                            if ((card.name == 'sha') || get.type(card) == 'trick' || get.type(card) == 'delay') return false;
                                        }
                                    },
                                },
                            },
                            "wugeng_baiqian4": {
                                init: function (player, skill) {
                                    var skills = player.getSkills(true, false);
                                    for (var i = 0; i < skills.length; i++) {
                                        if (get.skills[i]) {
                                            skills.splice(i--, 1);
                                        }
                                    }
                                    player.disableSkill(skill, skills);
                                },
                                onremove: function (player, skill) {
                                    player.enableSkill(skill);
                                },
                                mark: true,
                                locked: true,
                                intro: {
                                    content: function (storage, player, skill) {
                                        var list = [];
                                        for (var i in player.disabledSkills) {
                                            if (player.disabledSkills[i].contains(skill)) {
                                                list.push(i)
                                            }
                                        }
                                        if (list.length) {
                                            var str = '失效技能：';
                                            for (var i = 0; i < list.length; i++) {
                                                if (lib.translate[list[i] + '_info']) {
                                                    str += get.translation(list[i]) + '、';
                                                }
                                            }
                                            return str.slice(0, str.length - 1);
                                        }
                                    },
                                },
                            },
                            "wugeng_baiqian2": {
                                audio: "ext:群英会:2",
                                enable: "phaseUse",
                                usable: 1,
                                filterTarget: function (card, player, target) {
                                    return target != player && get.distance(player, target, 'attack') <= 1;
                                },
                                content: function () {
                                    var chat = ['猴子，你为何反我？', '不死鸟吗？六百年前，我就亲手撕掉了它的双翼'].randomGet();
                                    player.say(chat);
                                    target.addTempSkill('wugeng_baiqian4', { player: 'phaseEnd' });
                                    target.addTempSkill('wugeng_baiqian5', { player: 'phaseBegin' });
                                },
                                ai: {
                                    order: 13,
                                    result: {
                                        target: function (player, target) {
                                            return get.damageEffect(target, player);
                                        },
                                    },
                                },
                            },

                            "wugeng_kongjing": {
                                audio: "ext:群英会:3",
                                trigger: {
                                    target: "useCardToBefore",
                                },
                                popup: false,
                                direct: true,
                                filter: function (event, player) {
                                    if (event.addedTargets) return false;
                                    // return event.card&&get.color(event.card)=='red'&&event.player!=player;
                                    return event.targets.length == 1 && event.player != player && player.countCards('h') >= 1;
                                },
                                content: function () {
                                    "step 0"
                                    var next = player.chooseToDiscard(get.prompt('wugeng_kongjing', trigger.player), 1);
                                    next.ai = function (card) {
                                        if (get.effect(player, trigger.card) < 0) {
                                            if (card.name == 'liuxinghuoyu') return 8 - get.value(card);
                                            return 8 - get.value(card);
                                        }
                                        return 0;
                                    };
                                    next.prompt2 = '反弹' + get.translation(trigger.player) + '的' + get.translation(trigger.card);
                                    next.logSkill = ['wugeng_kongjing', trigger.player];
                                    "step 1"
                                    if (result.bool) {
                                        var chat = ['空镜映月，你们对我的暴戾行为都会回到你的身上', '没有人能够伤到我'].randomGet();
                                        player.say(chat);
                                        player.$fullscreenpop('空镜映月', 'fire');
                                        // player.discard(result.cards);
                                        trigger.target = trigger.player;
                                        trigger.player = player;
                                        trigger.untrigger();
                                        trigger.trigger('useCardToBefore');
                                    }
                                },
                                ai: {
                                    order: 3,
                                    threaten: function (player, target) {
                                        if (target.countCards('h') <= 2) {
                                            return 2;
                                        }
                                        return 2 / (target.countCards('h') - 1);
                                    },
                                },
                            },

                            "wugeng_yinguo2": {
                                marktext: "因",
                                mark: true,
                                intro: {
                                    content: "已获得了#个因果标记",
                                },
                                init: function (player) {
                                    player.storage.wugeng_yinguo2 = 0;
                                },
                            },
                            "wugeng_yinguo": {
                                audio: "ext:群英会:3",
                                trigger: {
                                    source: "damageBegin",
                                },
                                filter: function (event, player) {
                                    return event.card && event.card.isCard && event.card.name == 'sha' && player.isAlive() && !player.hasSkill("wugeng_lunzhuan") && !player.hasSkill("wugeng_zhuilun");
                                },
                                forced: true,
                                content: function () {
                                    var chat = ['日后再说，管他什么报应', '不入虎穴，焉得虎子？'].randomGet();
                                    player.say(chat);
                                    if (!player.hasSkill('wugeng_yinguo2')) {
                                        player.addSkill('wugeng_yinguo2');
                                    }
                                    player.storage.wugeng_yinguo2 += trigger.num;
                                    player.markSkill('wugeng_yinguo2');
                                    player.update();
                                },
                            },
                            "wugeng_lunzhuan": {
                                audio: "ext:群英会:2",
                                enable: "phaseUse",
                                usable: 1,
                                global: "wugeng_yinguo",
                                filter: function (event, player) {
                                    return game.hasPlayer(function (current) {
                                        return current != player && current.hasSkill("wugeng_yinguo2") && current.storage.wugeng_yinguo2 > 0;
                                    });
                                },
                                content: function () {
                                    "step 0"
                                    var chat = ['如是因，如是果，你们这一生对他人所做的伤害，都会一次过回到自己身上', '让我代天惩罚你们……神技•因果转轮！'].randomGet();
                                    player.say(chat);
                                    player.$skill('因果轮转', 'fire', 'red', 'avatar');
                                    event.num = 0;
                                    event.targets = game.filterPlayer(function (current) {
                                        return current != player && current.hasSkill("wugeng_yinguo2") && current.storage.wugeng_yinguo2 > 0;
                                    });
                                    event.targets.remove(player);
                                    event.targets.sort(lib.sort.seat);
                                    "step 1"
                                    if (event.num < event.targets.length) {
                                        player.line(event.targets[event.num], 'fire');
                                        event.targets[event.num].damage();
                                        event.targets[event.num].storage.wugeng_yinguo2--;
                                        if (event.targets[event.num].storage.wugeng_yinguo2 < 1) {
                                            event.targets[event.num].unmarkSkill('wugeng_yinguo2');
                                        }
                                        event.num++;
                                        event.redo();
                                    }
                                    else {
                                        var num = player.hp;
                                        player.init("wugeng_echan");
                                        player.hp = num;
                                        player.update();
                                        event.finish();
                                    }
                                },
                                ai: {
                                    order: 2,
                                    result: {
                                        player: function (player) {
                                            var num1 = game.countPlayer(function (current) {
                                                return current.storage.wugeng_yinguo2 > 0 && get.attitude(player, current) <= 0;
                                            });
                                            var num2 = game.countPlayer(function (current) {
                                                return current.storage.wugeng_yinguo2 > 0 && get.attitude(player, current) > 0;
                                            });
                                            if (num1 == 0 || num1 < num2) return 0;
                                            return 1;
                                        },
                                    },
                                },
                            },

                            "wugeng_zhuzhan": {
                                audio: "ext:群英会:3",
                                trigger: {
                                    global: "dying",
                                },
                                check: function (event, player) {
                                    return get.attitude(player, event.player) > 0;
                                },
                                frequent: "check",
                                priority: 10,
                                filter: function (event, player) {
                                    return event.player.hp <= 0;
                                },
                                prompt: function (event, player) {
                                    return '是否发动长生界神力救治' + get.translation(event.player) + '？';
                                },
                                content: function () {
                                    "step 0"
                                    event.cards = get.cards(1);
                                    player.showCards(event.cards);
                                    "step 1"
                                    var num = 0;
                                    for (var i = 0; i < event.cards.length; i++) {
                                        if (get.color(event.cards[i]) == 'red') {
                                            num++;
                                            event.cards[i].discard();
                                            event.cards.splice(i--, 1);
                                        }
                                    }
                                    if (num) {
                                        trigger.player.recover(num);
                                        var chat = ['在我的神力加护下，所有神族战士都能发挥出自己最大的实力', '长生界神力——神技•生死轮回限'].randomGet();
                                        player.say(chat);
                                    }
                                    "step 2"
                                    if (event.cards.length) {
                                        player.gain(event.cards, 'gain2');
                                        game.delay(0.5);
                                        var chat = ['抱歉，我失败了', '这些蛮族出手太狠了'].randomGet();
                                        player.say(chat);
                                    }
                                },
                                ai: {
                                    order: 8,
                                    save: true,
                                    threaten: 0.5,
                                },
                            },
                            "wugeng_jingang": {
                                audio: "ext:群英会:2",
                                forced: true,
                                trigger: {
                                    player: "damageBefore",
                                },
                                filter: function (event, player) {
                                    if (player.getEquip(2)) return false;
                                    return true;
                                },
                                content: function () {
                                    var chat = ['金刚不坏之身，岂是尔等杂碎能破？', '金刚真身，刀枪不入'].randomGet();
                                    player.say(chat);
                                    trigger.cancel();
                                    event.finish();
                                },
                                ai: {
                                    notrick: true,
                                    nosha: true,
                                    noe2: true,
                                    effect: {
                                        target: function (card, player, target, current) {
                                            if (get.type(card) == 'trick' && get.tag(card, 'damage')) {
                                                return 'zeroplayertarget';
                                            }
                                        },
                                    },
                                },
                            },
                            "wugeng_zhuilun": {
                                audio: "ext:群英会:2",
                                enable: "phaseUse",
                                usable: 1,
                                global: "wugeng_yinguo",
                                filter: function (event, player) {
                                    return game.hasPlayer(function (current) {
                                        return current != player && current.hasSkill("wugeng_yinguo2") && current.storage.wugeng_yinguo2 > 0;
                                    });
                                },
                                filterTarget: function (card, player, target) {
                                    return target.hasSkill('wugeng_yinguo2') && target.storage.wugeng_yinguo2 > 0;
                                },
                                content: function () {
                                    'step 0'
                                    var chat = ['大胆狂徒，为什么不听我的教诲？', '通通都是些愚昧不堪的蠢蛋'].randomGet();
                                    player.say(chat);
                                    player.$skill('罪业转轮', 'fire', 'red', 'avatar');
                                    target.damage(target.storage.wugeng_yinguo2);
                                    target.storage.wugeng_yinguo2 = 0;
                                    target.unmarkSkill('wugeng_yinguo2');
                                    var num = player.hp;
                                    player.init("wugeng_zhengchan");
                                    player.hp = num;
                                    player.update();
                                    'step 1'
                                    var evt = _status.event.getParent('phase');
                                    if (evt) {
                                        game.resetSkills();
                                        _status.event = evt;
                                        _status.event.finish();
                                        _status.event.untrigger(true);
                                    }
                                },
                                ai: {
                                    expose: 1,
                                    order: 8,
                                    result: {
                                        target: function (player, target) {
                                            //return get.damageEffect(target, player);											
                                            return -target.hp;
                                        },
                                    },
                                },
                            },

                            "wugeng_fuhuo": {
                                audio: "ext:群英会:2",
                                trigger: {
                                    player: "dieBegin",
                                },
                                unique: true,
                                forced: true,
                                filter: function (event, player) {
                                    return player.hp <= 0;
                                },
                                content: function () {
                                    var chat = ['想要杀死我？你还得加把劲……不好，被包围了', '好小子，你成功地让我死了一次，哈哈……'].randomGet();
                                    player.say(chat);
                                    setTimeout(function () {
                                        player.gainMaxHp();
                                        player.update();
                                        ui.backgroundMusic.src = lib.assetURL + 'extension/群英会/wms_backgroundmusic.mp3';
                                        game.broadcastAll() + ui.background.setBackgroundImage("extension/群英会/wms_shixing_background.jpg");
                                        game.broadcastAll() + player.node.avatar.setBackgroundImage('extension/群英会/wugeng_xinshixing.jpg');
                                        player.revive(player.maxHp - player.hp);
                                        player.recover(Infinity);
                                        player.update();
                                    }, 49000)
                                    player.logSkill('wugeng_fuhuo');
                                },
                                direct: true,
                                notarget: true,
                                ai: {
                                    expose: 0.5,
                                    maixie: true,
                                },
                            },

                            "wugeng_fuchou": {
                                audio: "ext:群英会:3",
                                trigger: {
                                    player: "phaseDrawBegin",
                                },
                                forced: true,
                                content: function () {
                                    var chat = ['这一天终究还是来了', '就算是死，我也要回来索命'].randomGet();
                                    player.say(chat);
                                    player.addTempSkill('wugeng_fuchou2', { player: 'phaseEnd' });
                                    var num2 = player.maxHp - player.hp;
                                    trigger.num += num2;
                                },

                                mod: {
                                    globalFrom: function (from, to, distance) {
                                        return distance - (from.maxHp - from.hp);
                                    },
                                },

                                ai: {
                                    threaten: 1.5,
                                },
                            },
                            "wugeng_fuchou2": {
                                audio: "ext:群英会:3",
                                trigger: {
                                    source: "damageBegin",
                                },
                                filter: function (event, player) {
                                    return event.card && event.card.isCard && event.card.name == 'sha' && event.notLink();
                                },
                                forced: true,
                                content: function () {
                                    var num2 = player.maxHp - player.hp;
                                    var num3 = Math.floor(num2 / 2);
                                    trigger.num += num3;
                                    var chat = ['神眼，你的死期到了！你对我的折磨与伤害，我要以十倍还给你', '今天，我正是为了向神族复仇而来'].randomGet();
                                    player.say(chat);

                                },
                            },

                        },//技能

                        translate: {

                            "wugeng_nitianerxing": "逆天而行",
                            "wugeng_tongming": "统冥",
                            "wugeng_tongming_info": "统一冥族。</font><font color=#f00>锁定技</font> 场上每有一名角色阵亡，你回复一点体力并选择恢复一个已被废除的装备栏",
                            "wugeng_poji": "破极",
                            "wugeng_poji_info": "限定技，出牌阶段，你可废除你的判定区和所有的装备栏并将体力值减至1并摸等同失去的体力值张牌，然后选择任意名其他角色，令其废除防具栏，然后你获得技能【聚义】、【暗月】，直到回合结束",
                            "wugeng_juyi": "聚义",
                            "wugeng_juyi_info": "</font><font color=#f00>锁定技</font> 你每使用一张牌后摸一张牌",
                            "wugeng_anyue": "暗月",
                            "wugeng_anyue_info": "暗月凶光。</font><font color=#f00>锁定技</font> 你对一名其他角色使用牌（借刀杀人除外）时，额外指定所有已废除防具栏的其他角色",
                            "wugeng_bailian": "白莲圣王",
                            "wugeng_xuelian": "血莲",
                            "wugeng_xuelian2": "血莲",
                            "wugeng_xuelian_info": "<span class=yellowtext>限定技</span> 当你受到伤害后，若伤害来源未获得“血莲”标记，你令其获得九个“血莲”标记，其回合结束时，你摸等同其“血莲”标记个数的一半（向下取整）张牌，然后其须弃置一个“血莲”标记，并随机弃置一张装备区的牌，否则受到一点伤害。若其“血莲”标记不大于0或已阵亡，你重置本技能并失去一点体力上限",
                            "wugeng_siling": "死灵",
                            "wugeng_siling_info": "当你受到伤害时，若场上有角色有“血莲”标记，你可取消此伤害，然后该角色的“血莲”标记数量减一",
                            "wugeng_fuxi": "伏羲",
                            "wugeng_cizhou": "赐咒",
                            "wugeng_cizhou_info": "<span class=yellowtext>限定技</span> 当一名角色脱离濒死状态时，你可令其获得技能【咒文】",
                            "wugeng_dongshi": "洞识",
                            "wugeng_dongshi_info": "当你使用【杀】／成为【杀】的目标时，你可以观看目标角色／来源的手牌，然后你可以获得其中一张奇数点数／偶数点数的手牌",
                            "wugeng_dongshi1": "洞识",
                            "wugeng_dongshi1_info": "undefined",
                            "wugeng_dongshi2": "洞识",
                            "wugeng_dongshi2_info": "undefined",
                            "wugeng_anxie": "暗蝎",
                            "wugeng_anxie_info": "结束阶段，你可声明一种锦囊牌的牌名，本局游戏你不能成为此牌的目标。",
                            "wugeng_baicai": "白菜",
                            "wugeng_qinhe": "亲和",
                            "wugeng_qinhe_info": "其他角色出牌阶段开始时，你可以随机展示你的一张手牌。若如此做，每当该角色于此阶段内使用与此牌花色相同的牌时，其与你可各摸一张牌。",
                            "wugeng_anxie2": "暗蝎",
                            "wugeng_anxie2_info": "你不能成为这锦囊牌的目标",
                            "wugeng_qinhe2": "亲和",
                            "wugeng_qinhe2_info": "亲和",
                            "wugeng_qinhe3": "亲和",
                            "wugeng_qinhe3_info": "亲和",
                            "wugeng_dunkong": "遁空",
                            "wugeng_dunkong_info": "当你受到伤害时，若你有手牌，你可选择一种花色并弃置该花色的所有手牌，然后伤害值减一",
                            "wugeng_wugeng": "武庚",
                            "wugeng_zhouwen": "咒文",
                            "wugeng_zhouwen_info": "<li></font><font color=#f00>锁定技</font> 当你受到伤害时，若你的装备区没有防具牌，此伤害减一<li></font><font color=#f00>锁定技</font> 当你造成伤害时，若目标角色体力值比你的高，此伤害值+1",
                            "wugeng_fanji": "繁技",
                            "wugeng_fanji_info": "</font><font color=#f00>锁定技</font> 回合内，你随机获得技能【冥炮】或【炼气】；回合外，你随机获得技能【无色】或【虚无】",
                            "wugeng_tianqi": "天启",
                            "wugeng_tianqi_info": "<span class=greentext>觉醒技</span> 当你进入濒死状态时，你令所有其他角色失去所有技能直到其受到伤害且不能使用或打出牌直到其回合开始，然后你须失去技能【咒文】，获得技能【暗狱】、【繁技】，增加一点体力上限并回复体力至体力上限，且直到你的下个回合开始，你不能成为【杀】的目标",
                            "wugeng_fanji1": "繁技",
                            "wugeng_fanji1_info": "</font><font color=#f00>锁定技</font> 回合内，你随机获得技能【冥炮】或【炼气】",
                            "wugeng_fanji2": "繁技",
                            "wugeng_fanji2_info": "</font><font color=#f00>锁定技</font> 回合外，你随机获得技能【无色】或【虚无】",
                            "wugeng_anyu": "暗狱",
                            "wugeng_anyu_info": "当你受到伤害时，你可令一名武将牌正面朝上的其他角色将其武将牌翻面，然后直到其受到伤害后，其所有技能失效且不能使用或打出牌",
                            "wugeng_anyu2": "暗",
                            "wugeng_anyu2_info": "</font><font color=#f00>锁定技</font> 你不能使用或打出卡牌",
                            "wugeng_anyu3": "狱",
                            "wugeng_anyu3_info": "</font><font color=#f00>锁定技</font> 你失去了所有的技能",
                            "wugeng_mingpao": "冥炮",
                            "wugeng_mingpao_info": "</font><font color=#f00>锁定技</font> 你使用的【杀】可指定任意名目标",
                            "wugeng_lianqi": "炼气",
                            "wugeng_lianqi_info": "</font><font color=#f00>锁定技</font> 你使用的【杀】没距离与次数限制",
                            "wugeng_wuse": "无色",
                            "wugeng_wuse_info": "</font><font color=#f00>锁定技</font> 你不能成为【杀】的目标",
                            "wugeng_xuwu": "虚无",
                            "wugeng_xuwu_info": "</font><font color=#f00>锁定技</font> 你不能成为锦囊牌的目标",
                            "wugeng_ziyu": "子羽",
                            "wugeng_zhutian": "诛天",
                            "wugeng_zhutian_info": "当你受到伤害后，你可以使用一张【杀】。若此【杀】造成伤害，你可防止之，改为令目标角色先失去一点体力上限，再受到一点火焰伤害【克制十刑】",
                            "wugeng_zhutian2": "诛天",
                            "wugeng_zhutian2_info": "此【杀】即将造成伤害，你可防止之，改为令目标角色先失去一点体力上限，再受到一点火焰伤害",
                            "wugeng_qiyi": "起义",
                            "wugeng_qiyi_info": "当一名角色受到伤害时，若其装备区中没有武器牌，你可令其随机使用一张武器牌",
                            "wugeng_qijian": "气剑",
                            "wugeng_qijian_info": "【剑气流星】出牌阶段限一次，你可以指定任意一名其他角色，然后你可依次弃置场上所有装备区有武器牌的角色的武器牌，并视为其对你指定的角色使用一张【杀】",
                            "wugeng_tiankui": "天魁",
                            "wugeng_shenqu": "神躯",
                            "wugeng_shenqu_info": "<font color=#F0F>金刚界神力</font><font color=#f00>锁定技</font> 当你受到伤害时，若此伤害值大于1，则改为1；若伤害来源的体力值大于你的体力值，则取消此伤害",
                            "wugeng_suiyue": "碎岳",
                            "wugeng_suiyue_info": "<font color=#F0F>神技•天斗碎岳</font>出牌阶段限一次，你可选择一名其他角色并失去一点体力，然后视为对其连续使用X张无视防具的【杀】（X为你已损失的体力值）",
                            "wugeng_tianwu": "天武圣王",
                            "wugeng_pili": "霹雳",
                            "wugeng_zhengnu": "震怒",
                            "wugeng_zhengnu_info": "<font color=#F0F>万象界神力•天地震怒</font> 当你受到伤害后，你可令所有其他角色选择一项：①随机弃牌：该角色随机地弃置一张牌；②令其摸牌：你摸一张牌",
                            "wugeng_pili_info": "<font color=#F0F>神技•真武大霹雳</font> 每两轮限一次，若你的体力值不大于当前存活的角色数，你可弃置X张相同花色的手牌，并对X名攻击范围内的其他角色各造成X点伤害（X为你以此法弃置的手牌数）",
                            "wugeng_xuanfeng": "玄风圣王",
                            "wugeng_shensu": "神速",
                            "wugeng_shensu_info": "<font color=#f00>锁定技</font> 你的进攻距离＋X（X为你的体力值），你的防御距离+Y（Y为你损失的体力值）",
                            "wugeng_baofeng3": "防",
                            "wugeng_baofeng3_info": "防御距离+Y（Y为你损失的体力值）",
                            "wugeng_baofeng4": "攻",
                            "wugeng_baofeng4_info": "进攻距离-X（X为你的体力值）",
                            "wugeng_baofeng2": "暴风",
                            "wugeng_baofeng2_info": "每两轮限一次机会，当一名其他角色进入濒死状态时，你可选择令其体力回复至1，并且其防御距离永久+Y（Y为其损失的体力值）",
                            "wugeng_baofeng1": "暴风",
                            "wugeng_baofeng1_info": "当你受到伤害后，你可令一名其他角色的进攻距离-X（X为其体力值），并视为对其使用一张【杀】",
                            "wugeng_zhengkong2": "真空",
                            "wugeng_zhengkong2_info": "<font color=#f00>锁定技</font> 你的回合结束起计时，九九八十一秒后，你因窒息而死亡",
                            "wugeng_baofeng": "暴风",
                            "wugeng_baofeng_info": "当你受到伤害后，你可选择一项：<br><li><font color=#F0F>远逐</font> <font color=#F0F>银翼破空</font>令伤害来源的进攻距离－X（X为其体力值），<font color=#F0F>无形剑</font>并视为你对其使用一张【杀】<br><li><font color=#F0F>救护</font> 你选择一名其他角色，令其摸一张牌，且防御距离＋Y（Y为其损失的体力值）",
                            "wugeng_zhengkong": "真空",
                            "wugeng_zhengkong_info": "<font color=#F0F>神技•真空</font> 当你流失体力或一次受到大于一点的伤害后，你可选择令一名其他非主公角色进入倒计时，一分钟后，其因窒息而死亡。<font color=#F0F>与十刑互相克制</font> ",
                            "wugeng_tian": "天",
                            "wugeng_xuemao": "血矛",
                            "wugeng_xuemao2": "",
                            "wugeng_xuemao_info": "出牌阶段限一次，你可以展示牌堆顶的一张牌，若该牌为：装备牌，你回复一点体力并使用之；锦囊牌，你弃置此展示的牌后再摸两张牌；基本牌，你获得此牌，视为对任意一名其他角色使用一张不计距离、不计入次数限制的【杀】",
                            "wugeng_xuemao2_info": "",
                            "wugeng_baiqian": "白墙",
                            "wugeng_baiqian_info": "<font color=#F0F>无色界神力</font><br><li> <font color=#f00>锁定技</font> 游戏开始阶段或你进入游戏时，你令所有其他角色的所有技能失效，直到其受到伤害为止<br><li>出牌阶段限一次，你可以选择攻击范围内的一名其他角色，令其所有技能失效（直到其回合结束）；且不能使用或打出牌（直到其回合开始）<br><li><font color=#f00>锁定技</font> ①你使用的【杀】可指定任意名角色; ②当你的手牌数与体力值不相等时，你不能成为【杀】或锦囊牌的目标",
                            "wugeng_baiqian5": "墙",
                            "wugeng_baiqian5_info": "不能使用或打出牌",
                            "wugeng_baiqian1": "白墙",
                            "wugeng_baiqian1_info": "<font color=#f00>锁定技</font> 游戏开始阶段或你进入游戏时，你令所有其他角色的所有技能失效，直到其受到伤害为止",
                            "wugeng_baiqian3": "白墙",
                            "wugeng_baiqian3_info": "你使用的【杀】可指定任意名角色；当你的手牌数与体力值不相等时，你不能成为【杀】或锦囊牌的目标",
                            "wugeng_baiqian4": "墙",
                            "wugeng_baiqian4_info": "所有技能失效",
                            "wugeng_baiqian2": "白墙",
                            "wugeng_baiqian2_info": "出牌阶段限一次，你可以选择攻击范围内的一名其他角色，令其所有技能失效（直到其回合结束）；且不能使用或打出牌（直到其回合开始为止）",
                            "wugeng_zhengchan": "真禅圣王",
                            "wugeng_echan": "恶禅",
                            "wugeng_yinguo2": "因果",
                            "wugeng_yinguo": "因果",
                            "wugeng_yinguo_info": "<font color=#f00>锁定技</font> 你使用的【杀】造成一次伤害后，你获得等同伤害值数量的“因果”标记",
                            "wugeng_lunzhuan": "轮转",
                            "wugeng_lunzhuan_info": "<font color=#F0F>因果轮转</font> <font color=#f00>锁定技</font>出牌阶段限一次，你可令场上所有因使用【杀】造成过伤害而拥有“因果”标记的其他角色受到一点来源为你的伤害，并弃置一个“因果”标记，然后你变身为“恶禅”",
                            "wugeng_kongjing": "空镜",
                            "wugeng_kongjing_info": "<font color=#F0F>空镜映月</font>每当你成为其他角色的某张卡牌的惟一目标时，你可以弃置一张手牌，将使用者与目标对调",
                            "wugeng_zhuilun": "罪轮",
                            "wugeng_zhuilun_info": "<font color=#F0F>罪业转轮</font>出牌阶段限一次，你可令场上任意一名拥有“因果”标记的角色受到X点伤害，若如此做，其“因果”标记数量清零（X为该角色的“因果”标记个数），然后你变身为“真禅圣王”，结算后立即结束当前回合",
                            "wugeng_zhuzhan": "助战",
                            "wugeng_zhuzhan_info": "<font color=#F0F>长生界神力•生死轮回限</font>当一名角色处于濒死状态时，你可以亮出牌堆顶的一张牌，若该牌为红色牌，则该角色回复一点体力，然后将这张红色牌置入弃牌堆；若该牌为黑色牌，你获得之",
                            "wugeng_jingang": "金身",
                            "wugeng_jingang_info": "<font color=#F0F>金刚不灭之身</font><font color=#f00>锁定技</font> 当你没装备防具时，你防止受到一切伤害",
                            "wugeng_shixing": "十刑",
                            "wugeng_fuhuo": "复活",
                            "wugeng_fuhuo_info": "<font color=#F0F>亡者之印</font> <font color=#f00>锁定技</font> 当你阵亡七七四十九秒后，你自动复活，增加一点体力上限并回复体力至体力上限",
                            "wugeng_fuchou": "复仇",
                            "wugeng_fuchou_info": "<li><font color=#F0F>修罗界神力</font><font color=#f00>锁定技</font> 你的进攻距离+X，摸牌阶段摸牌时，你额外摸X张牌（X为你损失的体力值）；<br><li><font color=#F0F>元始界神力</font>你使用的【杀】额外造成Y点的伤害（Y为你的损失的体力值的一半向下取整）",
                            "wugeng_fuchou2": "复仇",
                            "wugeng_fuchou2_info": "<font color=#f00>锁定技</font> 你使用的【杀】额外造成Y点伤害（Y为你的损失的体力值的一半向下取整）",
                            "wugeng_shenzu": "神族",
                            "wugeng_renlei": "人类",
                            "wugeng_mingzu": "冥族",
                            "xming": "冥",
                            "xrenlei": "人",
                            "identity_zhu": "主公",
                            "identity_fan": "反贼",
                            "identity_nei": "内奸",
                            "identity_zhong": "忠臣",
                            "caoying_basic": "基本牌",
                            "caoying_trick": "锦囊牌",
                            "caoying_equip": "装备牌",
                            "lukai_spade": "黑桃",
                            "lukai_heart": "红桃",
                            "lukai_club": "草花",
                            "lukai_diamond": "方片",
                        },
                    };
                    if (lib.device || lib.node) {
                        for (var i in wugeng.character) { wugeng.character[i][4].push('ext:群英会/' + i + '.jpg'); }
                    } else {
                        for (var i in wugeng.character) { wugeng.character[i][4].push('db:extension-群英会:' + i + '.jpg'); }
                    }
                    return wugeng;
                });
                lib.config.all.characters.push('wugeng');
                if (!lib.config.characters.contains('wugeng')) lib.config.characters.remove('wugeng');
                lib.translate['wugeng_character_config'] = '<span style="color:#00FFFF">武庚纪</span>';


            };
        }, help: { "群英会": "<li>此扩展原名为：新武将，始创于2017年8月，汇集了部分三国新将和《秦时明月》、《武庚纪》等作品的部分角色，技能强度略高，可联机。若想关闭某个扩展小包，可在相应武将栏内关闭并重启，开启同理。<li>若发现BUG可到贴吧或扩展交流②群：852740627 反馈，有技能设计的建议也可联系作者<li>【编码】小苏<li>【配图】小苏<li>【录制配音】小苏" }, config: {
            "qunyinghuihelp": {
                "name": "群英会", "init": "1", "item": { "1": "查看介绍", "2": "<li>嗨～" + lib.config.connect_nickname + "！欢迎您前来体验《群英会》扩展哦！", "3": "<li>本扩展汇集了部分三国新将和《秦时明月》、《武庚纪》等作品的人物（可在菜单→武将界面处关闭任意一个扩展小包，关闭重启后会隐藏武将图片且玩家禁选、ai禁用），技能强度略高。有技能特效，Ai智商较高！", "4": "<li>若发现BUG可到贴吧或无名杀扩展交流群：852740627 反馈，有技能设计的建议也可联系作者", "5": "<li>更多介绍详看：其它→帮助" }
            },

            "cancelwindow": {
                name: '取消弹窗',
                "intro": "取消弹窗：开启此项后重启游戏生效。取消弹窗警告",
                init: false
            },
            "_chooseTime": {
                name: '出牌计时器',
                "intro": "出牌计时器：开启后重启游戏生效。玩家在出牌阶段会自动倒计时，时长15秒，超出时间会直接结束出牌阶段",
                init: false
            },

            "BackgroundMusic": {
                name: 'BackgroundMusic',
                "intro": "背景音乐：可随意点播、切换优质动听的背景音乐",
                init: '1',
                item: {
                    '1': '默认',
                    '2': '胜利',
                },
                onclick: function (item) {
                    switch (item) {
                        case '1':
                            ui.backgroundMusic.pause();
                            game.playBackgroundMusic();
                            break;
                        case '2':
                            ui.backgroundMusic.pause();
                            ui.backgroundMusic.src = lib.assetURL + 'extension/群英会/wms_backgroundmusic.mp3';
                            setInterval(function () {
                                ui.backgroundMusic.src = lib.assetURL + "extension/群英会/wms_backgroundmusic.mp3";
                            }, 320500);
                            ui.backgroundMusic.addEventListener('ended', function () {
                                ui.backgroundMusic.src = lib.assetURL + "extension/群英会/" + lib.config.wms_backgroundmusic + ".mp3";
                                ui.backgroundMusic.play();
                            });
                            // game.playSu('wms_backgroundmusic'); 
                            break;
                    }
                }
            },

            "BackgroundPicture": {
                name: 'BackgroundPicture',
                "intro": "背景图片：可随意切换精美高清的背景图片",
                init: '1',
                item: {
                    '1': '默认背景',
                    '2': '无色神力',
                    '3': '复仇之夜',
                    '4': '竹林泥潭',
                },
                onclick: function (item) {
                    switch (item) {
                        case '1':
                            game.broadcastAll() + ui.background.setBackgroundImage('image/background/' + lib.config.image_background + '.jpg');
                            break;
                        case '2':
                            game.broadcastAll() + ui.background.setBackgroundImage("extension/群英会/wms_tian_background.jpg");
                            break;
                        case '3':
                            game.broadcastAll() + ui.background.setBackgroundImage("extension/群英会/wms_shixing_background.jpg");
                            break;
                        case '4':
                            game.broadcastAll() + ui.background.setBackgroundImage("extension/群英会/wms_zhulin_background.jpg");
                            break;
                    }
                }
            },
            "qyh_character_gallery": {
                name: '<div class="qyh_menu">角色图鉴<font size="3px">⇨</font></div>',
                clear: true,
                onclick: function () {
                    game.playSu('qyh_open');
                    game.showQYHCharacterGallery();
                },
            },
            "qyh_llwj": {
                //"name": "浏览武将<div>&gt;</div>",
                name: '<div class="qyh_menu">浏览武将<font size="3px">⇨</font></div>',
                "clear": true,
                "onclick": function () {
                    game.playSu('qyh_open');
                    setTimeout(function () {
                        game.qyhCharacter();
                    }, 100);
                },
            },
            "openqyh_tujian": {
                //"name": "乱斗图鉴<div>&gt;</div>",
                name: '<div class="qyh_menu">乱斗图鉴<font size="3px">⇨</font></div>',
                "clear": true,
                onclick: function () {
                    game.playSu('qyh_open');
                    lib.config.characters.push('qunying');
                    lib.config.characters.push('wugeng');
                    game.saveConfig('mode', 'brawl');
                    localStorage.setItem(lib.configprefix + 'directstart', true);
                    game.reload();
                },
            },

        }, package: {
            character: {
                character: {
                },
                translate: {
                },
            },
            card: {
                card: {

                },
                translate: {

                },
                list: [

                ],
            },
            skill: {
                skill: {
                },
                translate: {
                },
            },
            intro: "",
            author: "小苏<li><div onclick=window.open('https://jq.qq.com/?_wv=1027&k=5qvkVxl')><span style=\"color: green;text-decoration: underline;font-style: oblique\">点击此处</span></div><span style=\"font-style: oblique\">申请加入QQ群参与讨论</span>",
            diskURL: "",
            forumURL: "",
            version: "2.8",
        }, files: { "character": [], "card": [], "skill": [] }
    }
})

