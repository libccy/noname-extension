game.import("extension", function(lib, game, ui, get, ai, _status) {
    return {
        name: "叠彩峰岭",
        editable: false,
        content: function(config, pack) {

            function getAvailableCharacterPacks() {
                var availablePacks = [];
                if (lib.characterPack) {
                    for (var packKey in lib.characterPack) {
                        if (!packKey || packKey === "mode_banned" || packKey === "mode_favourite" || packKey === 'character' || packKey === 'translate' || packKey === 'list' || packKey === 'card' || packKey === 'skill') {
                            continue;
                        }
                        var packData = lib.characterPack[packKey];
                        var hasValidCharacters = false;
                        if (packData && typeof packData === 'object') {
                            for (var charName in packData) {
                                if (charName && lib.character[charName]) {
                                    hasValidCharacters = true;
                                    break;
                                }
                            }
                        }
                        if (hasValidCharacters) {
                            var packName = lib.translate[packKey + '_character_config'];
                            if (!packName) {
                                packName = packKey;
                            }
                            var characterCount = 0;
                            for (var charName in packData) {
                                if (charName && lib.character[charName]) {
                                    characterCount++;
                                }
                            }
                            availablePacks.push({
                                id: packKey,
                                name: packName,
                                packKey: packKey,
                                count: characterCount
                            });
                        }
                    }
                }
                return availablePacks;
            }

            game.showCharacterInfo = function() {
                ui.system.style.display = 'none';
                ui.menuContainer.style.display = 'none';
                ui.click.configMenu();
                var characterPacks = getAvailableCharacterPacks();
                if (characterPacks.length === 0) {
                    alert('未找到任何已安装的武将包！');
                    ui.system.style.display = '';
                    ui.menuContainer.style.display = '';
                    return null;
                }
                var currentPack = characterPacks[0].id;
                var currentPackName = characterPacks[0].name;

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
                            var imgElement = ui.create.div('.dcfl_intro_header');
                            var extNameWithTags = lib.translate[currentPack + '_character_config'];

                            function stripHtmlTags(html) {
                                if (!html) return '';
                                var tempDiv = document.createElement('div');
                                tempDiv.innerHTML = html;
                                var text = tempDiv.textContent || tempDiv.innerText || '';
                                return text.trim();
                            }
                            var extNameClean = stripHtmlTags(extNameWithTags);

                            function getAllExtensionDirectories() {
                                var directories = new Set();
                                if (lib.characterPack) {
                                    for (var packKey in lib.characterPack) {
                                        if (!packKey || packKey === 'character' || packKey === 'translate' ||
                                            packKey === 'list' || packKey === 'card' || packKey === 'skill') {
                                            continue;
                                        }
                                        directories.add(packKey);
                                        var packNameWithTags = lib.translate[packKey + '_character_config'];
                                        if (packNameWithTags) {
                                            var cleanName = stripHtmlTags(packNameWithTags);
                                            if (cleanName && cleanName !== packKey) {
                                                directories.add(cleanName);
                                            }
                                        }
                                    }
                                }
                                return Array.from(directories);
                            }

                            var allExtensionDirs = getAllExtensionDirectories();

                            var imagePaths = [];

                            imagePaths.push(lib.assetURL + 'image/character/' + charName + '.jpg');

                            if (extNameClean) {
                                imagePaths.push(lib.assetURL + 'extension/' + extNameClean + '/' + charName + '.jpg');
                                imagePaths.push(lib.assetURL + 'extension/' + extNameClean + '/image/character/' + charName + '.jpg');
                            }

                            imagePaths.push(lib.assetURL + 'extension/' + currentPack + '/' + charName + '.jpg');
                            imagePaths.push(lib.assetURL + 'extension/' + currentPack + '/image/character/' + charName + '.jpg');

                            for (var i = 0; i < allExtensionDirs.length; i++) {
                                var dirName = allExtensionDirs[i];

                                if (dirName === extNameClean || dirName === currentPack) {
                                    continue;
                                }

                                imagePaths.push(lib.assetURL + 'extension/' + dirName + '/' + charName + '.jpg');
                                imagePaths.push(lib.assetURL + 'extension/' + dirName + '/image/character/' + charName + '.jpg');
                            }

                            function trySetBackgroundImage(pathIndex) {
                                if (pathIndex >= imagePaths.length) {

                                    imgElement.style.backgroundColor = '#333';
                                    imgElement.style.backgroundImage = 'none';
                                    imgElement.innerHTML = '<div style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); color:#888; font-size:14px;">暂无图片</div>';
                                    return;
                                }
                                var imagePath = imagePaths[pathIndex];
                                var testImg = new Image();
                                testImg.onload = function() {

                                    imgElement.style['background-image'] = 'url(' + imagePath + ')';
                                };
                                testImg.onerror = function() {

                                    trySetBackgroundImage(pathIndex + 1);
                                };
                                testImg.src = imagePath;
                            }

                            trySetBackgroundImage(0);
                            return imgElement;
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
                var leftButtonPanel = ui.create.div('#dcfl_leftButtonPanel');
                var rightPanel = ui.create.div('#dcfl_rightPanel');
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
                title.innerHTML = characterPacks[0].name;
                rightPanel.appendChild(title);

                var contentContainer = ui.create.div('#dcfl_contentContainer');
                rightPanel.appendChild(contentContainer);

                var buttonContainer = ui.create.div('#dcfl_buttonContainer');

                for (var i = 0; i < characterPacks.length; i++) {
                    var pack = characterPacks[i];

                    var buttonWrapper = ui.create.div('.dcfl_buttonWrapper');

                    var button = ui.create.div('.dcfl_packButton');
                    var buttonText = pack.name + '<span class="dcfl_count_badge">(' + pack.count + '名)</span>';
                    button.innerHTML = buttonText;

                    if (pack.id === currentPack) {
                        button.classList.add('active');
                    }

                    button.setAttribute('data-pack', pack.id);
                    button.addEventListener('click', (function(packId, packName) {
                        return function() {
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
                            currentPackName = packName;
                            title.innerHTML = packName;
                            updateCharacterList();
                        };
                    })(pack.id, pack.name));

                    buttonWrapper.appendChild(button);
                    buttonContainer.appendChild(buttonWrapper);
                }

                leftButtonPanel.appendChild(buttonContainer);

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
            lib.extensionMenu['extension_' + '叠彩峰岭'].delete = {
                name: '删除此扩展',
                clear: true,
            };
        },
        config: {
            "dcfl_viewinfo": {
                name: '<div class="dcfl_menu">查看信息</div>',
                "clear": true,
                "onclick": function() {
                    setTimeout(function() {
                        game.showCharacterInfo();
                    }, 100);
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
            intro: "<font color=#4a9eff>自动检测并显示已安装的武将包信息</font>",
            author: "山佬进城（小苏）",
            diskURL: "",
            forumURL: "",
            version: "3.0",
        },
        files: {
            "character": [],
            "card": [],
            "skill": [],
            "audio": []
        }
    }
});