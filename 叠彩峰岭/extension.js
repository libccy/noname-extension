game.import("extension", function(lib, game, ui, get, ai, _status) {
    return {
        name: "叠彩峰岭",
        editable: false,
        content: function(config, pack) {
                                    
            game.playdcfl = function(fn, dir) {
                try {
                    if (!fn) {
                        console.error('角色ID不能为空');
                        return;
                    }
                    
                    console.log('尝试播放扩展武将配音，角色:', fn, '扩展包:', dir);
                    game.playAudio('..', 'extension', dir, fn);
                } catch (error) {
                    console.error('播放扩展配音出错:', error);
                }
            };

            function createIconButton() {
                if (document.getElementById('dcfl_icon_button')) {
                    return;
                }

                var Animation = ui.create.div();
                Animation.id = 'dcfl_icon_button';
                Animation.className = 'dcfl_icon_button';
                Animation.style.backgroundImage = 'url(' + lib.assetURL + 'extension/叠彩峰岭/dcfl_icon.png)';
                Animation.addEventListener('mouseover', function() {
                    this.classList.add('dcfl_icon_hover');
                });
                Animation.addEventListener('mouseout', function() {
                    this.classList.remove('dcfl_icon_hover');
                });
                Animation.addEventListener('click', function() {
                    game.showCharacterInfo();
                });
                document.body.appendChild(Animation);
                return Animation;
            }

            function removeIconButton() {
                var icon = document.getElementById('dcfl_icon_button');
                if (icon && icon.parentNode) {
                    icon.parentNode.removeChild(icon);
                }
            }

            function checkAndUpdateIcon() {
                if (config.dcfl_icon) {
                    setTimeout(function() {
                        createIconButton();
                    }, 1000);
                } else {
                    removeIconButton();
                }
            }
            checkAndUpdateIcon();

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

            function applySkinChange(imgElement, charName) {
                var skinName = charName;
                if (skinName.startsWith("gz_")) {
                    skinName = skinName.slice(3);
                }

                var num = 1;
                if (lib.config.skin && lib.config.skin[skinName] !== undefined) {
                    num = lib.config.skin[skinName] + 1;
                }

                var img = new Image();
                img.onload = function() {
                    lib.config.skin = lib.config.skin || {};
                    lib.config.skin[skinName] = num;
                    game.saveConfig("skin", lib.config.skin);
                    imgElement.style.backgroundImage = 'url("' + img.src + '")';
                };

                img.onerror = function() {
                    if (lib.config.skin && lib.config.skin[skinName]) {
                        delete lib.config.skin[skinName];
                        game.saveConfig("skin", lib.config.skin);

                        var defaultImg = new Image();
                        defaultImg.onload = function() {
                            imgElement.style.backgroundImage = 'url("' + defaultImg.src + '")';
                        };
                        defaultImg.onerror = function() {
                            imgElement.style.backgroundImage = 'none';
                            imgElement.style.backgroundColor = '#333';
                        };

                        var defaultPath = lib.assetURL + 'image/character/' + charName + '.jpg';
                        defaultImg.src = defaultPath;
                    }
                };

                var skinPath = lib.assetURL + "image/skin/" + skinName + "/" + num + ".jpg";
                img.src = skinPath;
            }

            function extractAndConvertImagePaths(charData) {
                if (!charData || !Array.isArray(charData[4])) {
                    return [];
                }
                
                var extractedPaths = [];
                var pathArray = charData[4];
                
                for (var j = 0; j < pathArray.length; j++) {
                    var item = pathArray[j];
                    
                    if (typeof item === 'string' && item.trim() !== '') {
                        if (item.startsWith('img:')) {
                            var actualPath = item.replace(/^img:/, '');
                            extractedPaths.push(actualPath);
                        }
                        else if (item.startsWith('ext:') && item.toLowerCase().endsWith('.jpg')) {
                            var convertedPath = item.replace(/^ext:/, lib.assetURL + 'extension/');
                            extractedPaths.push(convertedPath);
                        }
                    }
                }
                
                return extractedPaths;
            }

            function loadCharacterImage(imgElement, charName, packKey, extNameClean, isDetailPage) {
                function getAllExtensionDirectories() {
                    var directories = new Set();
                    if (lib.characterPack) {
                        for (var packKey in lib.characterPack) {
                            if (!packKey || packKey === "mode_banned" || packKey === "mode_favourite" || packKey === 'character' || packKey === 'translate' || packKey === 'list' || packKey === 'card' || packKey === 'skill') {
                                continue;
                            }
                            directories.add(packKey);
                            var packNameWithTags = lib.translate[packKey + '_character_config'];
                            if (packNameWithTags) {
                                var cleanName = packNameWithTags.replace(/<[^>]*>/g, '').trim();
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

                var skinName = charName;
                if (skinName.startsWith("gz_")) {
                    skinName = skinName.slice(3);
                }
                
                if (lib.config.skin && lib.config.skin[skinName] !== undefined) {
                    var skinNum = lib.config.skin[skinName] + 1;
                    var skinPath = lib.assetURL + "image/skin/" + skinName + "/" + skinNum + ".jpg";
                    imagePaths.unshift(skinPath);
                }

                var charData = lib.character[charName];
                var specialPaths = extractAndConvertImagePaths(charData);
                if (specialPaths.length > 0) {
                    if (imagePaths.length > 0) {
                        for (var i = specialPaths.length - 1; i >= 0; i--) {
                            imagePaths.splice(1, 0, specialPaths[i]);
                        }
                    } else {
                        imagePaths = specialPaths.concat(imagePaths);
                    }
                }

                imagePaths.push(lib.assetURL + 'image/character/' + charName + '.jpg');

                if (extNameClean) {
                    imagePaths.push(lib.assetURL + 'extension/' + extNameClean + '/' + charName + '.jpg');
                    imagePaths.push(lib.assetURL + 'extension/' + extNameClean + '/image/character/' + charName + '.jpg');
                }

                imagePaths.push(lib.assetURL + 'extension/' + packKey + '/' + charName + '.jpg');
                imagePaths.push(lib.assetURL + 'extension/' + packKey + '/image/character/' + charName + '.jpg');

                for (var i = 0; i < allExtensionDirs.length; i++) {
                    var dirName = allExtensionDirs[i];

                    if (dirName === extNameClean || dirName === packKey) {
                        continue;
                    }

                    imagePaths.push(lib.assetURL + 'extension/' + dirName + '/' + charName + '.jpg');
                    imagePaths.push(lib.assetURL + 'extension/' + dirName + '/image/character/' + charName + '.jpg');
                }

                function trySetBackgroundImage(pathIndex) {
                    if (pathIndex >= imagePaths.length) {
                        if (isDetailPage) {
                            imgElement.style.backgroundColor = '#333';
                            imgElement.style.backgroundImage = 'none';
                        } else {
                            imgElement.style.backgroundColor = '#333';
                            imgElement.style.backgroundImage = 'none';
                        }
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
            }

            function formatSkillCode(obj, indentLevel) {
                var result = '';
                var indent = '    '.repeat(indentLevel);

                for (var key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        var value = obj[key];
                        var keyStr = indent + key + ': ';

                        if (typeof value === 'function') {
                            var funcStr = value.toString();
                            var lines = funcStr.split('\n');
                            var formattedFunc = '';

                            var minIndent = Infinity;
                            for (var i = 1; i < lines.length; i++) {
                                var line = lines[i];
                                if (line.trim() === '' || i === lines.length - 1) continue;
                                var leadingSpaces = line.match(/^\s*/)[0].length;
                                if (leadingSpaces < minIndent) {
                                    minIndent = leadingSpaces;
                                }
                            }
                            if (minIndent === Infinity) minIndent = 0;

                            for (var i = 0; i < lines.length; i++) {
                                var line = lines[i];
                                if (i === 0) {
                                    formattedFunc += keyStr + line + '\n';
                                } else if (i === lines.length - 1) {
                                    var trimmedLine = line.substring(Math.min(minIndent, line.length));
                                    formattedFunc += indent + '    ' + trimmedLine;
                                } else {
                                    var trimmedLine = line.substring(Math.min(minIndent, line.length));
                                    formattedFunc += indent + '    ' + trimmedLine;
                                    if (i < lines.length - 1) formattedFunc += '\n';
                                }
                            }
                            result += formattedFunc + ',\n';
                        } else if (Array.isArray(value)) {
                            result += keyStr + '[\n';
                            for (var i = 0; i < value.length; i++) {
                                var item = value[i];
                                var itemIndent = indent + '    ';
                                if (typeof item === 'function') {
                                    var funcStr = item.toString();
                                    var lines = funcStr.split('\n');
                                    var minIndent = Infinity;

                                    for (var j = 1; j < lines.length; j++) {
                                        var line = lines[j];
                                        if (line.trim() === '' || j === lines.length - 1) continue;
                                        var leadingSpaces = line.match(/^\s*/)[0].length;
                                        if (leadingSpaces < minIndent) {
                                            minIndent = leadingSpaces;
                                        }
                                    }
                                    if (minIndent === Infinity) minIndent = 0;

                                    result += itemIndent + lines[0] + '\n';

                                    for (var j = 1; j < lines.length - 1; j++) {
                                        var line = lines[j];
                                        var trimmedLine = line.substring(Math.min(minIndent, line.length));
                                        result += itemIndent + '    ' + trimmedLine + '\n';
                                    }

                                    if (lines.length > 1) {
                                        var lastLine = lines[lines.length - 1];
                                        var trimmedLastLine = lastLine.substring(Math.min(minIndent, lastLine.length));
                                        result += itemIndent + '    ' + trimmedLastLine;
                                    }
                                } else if (typeof item === 'object' && item !== null) {
                                    result += formatSkillCode(item, indentLevel + 2).trim();
                                } else {
                                    if (typeof item === 'string') {
                                        result += itemIndent + '"' + item.replace(/"/g, '\\"') + '"';
                                    } else {
                                        result += itemIndent + item;
                                    }
                                }
                                if (i < value.length - 1) result += ',';
                                result += '\n';
                            }
                            result += indent + '],\n';
                        } else if (typeof value === 'object' && value !== null) {
                            result += keyStr + '{\n' + formatSkillCode(value, indentLevel + 1) + indent + '},\n';
                        } else {
                            if (typeof value === 'string') {
                                result += keyStr + '"' + value.replace(/"/g, '\\"') + '",\n';
                            } else {
                                result += keyStr + value + ',\n';
                            }
                        }
                    }
                }

                return result;
            }

            function playSkillAudio(charName, skillName) {
                try {
                    var playKey = charName + '_' + skillName;
                    if (window._dcfl_skill_last_play && 
                        window._dcfl_skill_last_play.key === playKey && 
                        Date.now() - window._dcfl_skill_last_play.time < 500) {
                        console.log('技能配音防重播：忽略重复播放', charName, skillName);
                        return;
                    }
                    
                    window._dcfl_skill_last_play = {
                        key: playKey,
                        time: Date.now()
                    };
                    
                    var skinName = charName;
                    if (skinName.startsWith("gz_")) {
                        skinName = skinName.slice(3);
                    }

                    if (lib.config.skin && lib.config.skin[skinName]) {
                        var skinConfig = lib.config.skin[skinName];
                        if (Array.isArray(skinConfig) && skinConfig.length >= 1) {
                            skinName = skinConfig[0];
                        } else if (typeof skinConfig === 'string') {
                            skinName = skinConfig;
                        }
                    }

                    var audioData = get.Audio.skill({
                        skill: skillName,
                        player: {
                            name: charName,
                            skin: {
                                name: skinName
                            },
                            tempname: [skinName]
                        }
                    });

                    var audioList = audioData.fileList;

                    if (audioList && audioList.length > 0) {
                        var playAudio = game.tryAudio({
                            audioList: audioList,
                            addVideo: false,
                            random: true,
                            autoplay: false
                        });

                        playAudio();
                        console.log('技能配音播放成功:', charName, skillName);
                    } else {
                        console.log('未找到技能配音:', charName, skillName);
                    }
                } catch (error) {
                    console.error('播放技能配音时出错:', error);
                }
            }

            function getCleanExtensionName(extNameWithTags) {
                if (!extNameWithTags) return '';
                
                var cleanName = extNameWithTags;
                
                cleanName = cleanName.replace(/<span[^>]*>/gi, '');
                cleanName = cleanName.replace(/<\/span>/gi, '');
                cleanName = cleanName.replace(/<font[^>]*>/gi, '');
                cleanName = cleanName.replace(/<\/font>/gi, '');
                cleanName = cleanName.replace(/<div[^>]*>/gi, '');
                cleanName = cleanName.replace(/<\/div>/gi, '');
                cleanName = cleanName.replace(/<p[^>]*>/gi, '');
                cleanName = cleanName.replace(/<\/p>/gi, '');
                cleanName = cleanName.replace(/<b[^>]*>/gi, '');
                cleanName = cleanName.replace(/<\/b>/gi, '');
                cleanName = cleanName.replace(/<strong[^>]*>/gi, '');
                cleanName = cleanName.replace(/<\/strong>/gi, '');
                cleanName = cleanName.replace(/<i[^>]*>/gi, '');
                cleanName = cleanName.replace(/<\/i>/gi, '');
                cleanName = cleanName.replace(/<em[^>]*>/gi, '');
                cleanName = cleanName.replace(/<\/em>/gi, '');
                cleanName = cleanName.replace(/<u[^>]*>/gi, '');
                cleanName = cleanName.replace(/<\/u>/gi, '');
                cleanName = cleanName.replace(/<[^>]*>/g, '');
                
                cleanName = cleanName.trim();
                
                return cleanName;
            }

            function playDieAudio(charName, packKey, extNameWithTags) {
                try {
                    console.log('开始播放阵亡配音:', charName, '扩展包:', packKey);
                    
                    var cleanCharName = charName;
                    if (cleanCharName && cleanCharName.startsWith("gz_")) {
                        cleanCharName = cleanCharName.slice(3);
                    }
                    
                    var playKey = 'die_' + charName;
                    if (window._dcfl_last_die_play && 
                        window._dcfl_last_die_play.key === playKey && 
                        Date.now() - window._dcfl_last_die_play.time < 300) {
                        console.log('阵亡配音防重播：短时间内重复点击，忽略');
                        return;
                    }
                    
                    window._dcfl_last_die_play = {
                        key: playKey,
                        time: Date.now()
                    };
                    
                    setTimeout(function() {
                        try {
                            var skinName = charName;
                            if (skinName.startsWith("gz_")) {
                                skinName = skinName.slice(3);
                            }

                            if (lib.config.skin && lib.config.skin[skinName]) {
                                var skinConfig = lib.config.skin[skinName];
                                if (Array.isArray(skinConfig) && skinConfig.length >= 1) {
                                    skinName = skinConfig[0];
                                } else if (typeof skinConfig === 'string') {
                                    skinName = skinConfig;
                                }
                            }

                            var audioData = get.Audio.die({
                                player: {
                                    name: charName,
                                    skin: {
                                        name: skinName
                                    },
                                    tempname: [skinName]
                                }
                            });

                            var audioList = audioData.fileList;

                            if (audioList && audioList.length > 0) {
                                var playAudio = game.tryAudio({
                                    audioList: audioList,
                                    addVideo: false,
                                    random: true,
                                    autoplay: false
                                });

                                playAudio();
                                console.log('本体武将配音播放成功:', charName);
                            } else {
                                console.log('未找到本体武将配音:', charName);
                            }
                        } catch (error) {
                            console.error('播放本体武将配音时出错:', error);
                        }
                    }, 0);
                    
                    setTimeout(function() {
                        try {
                            var cleanExtNames = [];
                            
                            if (packKey) {
                                cleanExtNames.push(packKey);
                            }
                            
                            if (extNameWithTags) {
                                var cleanName = getCleanExtensionName(extNameWithTags);
                                if (cleanName && cleanExtNames.indexOf(cleanName) === -1) {
                                    cleanExtNames.push(cleanName);
                                }
                            }
                            
                            console.log('尝试的扩展包名列表:', cleanExtNames);
                            
                            for (var i = 0; i < cleanExtNames.length; i++) {
                                var extName = cleanExtNames[i];
                                console.log('播放扩展配音，角色:', cleanCharName, '扩展包:', extName);
                                game.playdcfl(cleanCharName, extName);
                            }
                            
                        } catch (error) {
                            console.error('尝试扩展配音时出错:', error);
                        }
                    }, 100); 
                    
                } catch (error) {
                    console.error('播放阵亡配音时出错:', error);
                }
            }

            function addSkillAudioClick(iconElement, charName, skillName) {
                if (!iconElement || !charName || !skillName) return iconElement;

                iconElement.addEventListener('click', function(e) {
                    e.stopPropagation();
                    e.preventDefault();
                    playSkillAudio(charName, skillName);
                    return false;
                });

                iconElement.addEventListener('touchstart', function(e) {
                    e.stopPropagation();
                    e.preventDefault();
                    playSkillAudio(charName, skillName);
                    return false;
                }, {
                    passive: false
                });

                iconElement.style.cursor = 'pointer';

                return iconElement;
            }

            var currentDetailPage = null;
            var currentCodePage = null;

            function ensureSkillClickHandler(element, skillName, charName) {
                var newElement = element.cloneNode(true);
                if (element.parentNode) {
                    element.parentNode.replaceChild(newElement, element);
                }

                newElement.addEventListener('click', function(e) {
                    e.stopPropagation();
                    e.preventDefault();
                    showSkillCode(skillName, charName);
                    return false;
                });

                newElement.addEventListener('touchstart', function(e) {
                    e.stopPropagation();
                    e.preventDefault();
                    showSkillCode(skillName, charName);
                    return false;
                }, {
                    passive: false
                });

                return newElement;
            }

            function showSkillCode(skillName, charName) {
                if (currentCodePage && currentCodePage.parentNode) {
                    currentCodePage.parentNode.removeChild(currentCodePage);
                }

                var existingPage = document.querySelector('#dcfl_page.dcfl_code_page');
                if (existingPage) {
                    existingPage.remove();
                }

                var skillPageBg = ui.create.div('#dcfl_page.dcfl_code_page');
                skillPageBg.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 2030; display: block;';

                skillPageBg.addEventListener('click', function(e) {
                    if (e.target === skillPageBg) {
                        if (skillPageBg.parentNode) {
                            skillPageBg.parentNode.removeChild(skillPageBg);
                        }
                        currentCodePage = null;
                    }
                });

                var skillMainContainer = ui.create.div('#dcfl_mainContainer.dcfl_code_container');

                var skillRightPanel = ui.create.div('#dcfl_rightPanel.dcfl_code_panel');

                var skillCloseButton = ui.create.div('#dcfl_closeButton.dcfl_code_close', '×');
                skillCloseButton.addEventListener('click', function() {
                    if (skillPageBg.parentNode) {
                        skillPageBg.parentNode.removeChild(skillPageBg);
                    }
                    currentCodePage = null;
                });
                skillRightPanel.appendChild(skillCloseButton);

                var skillTitle = ui.create.div('#dcfl_title.dcfl_code_title');
                skillTitle.innerHTML = get.translation(charName) + ' - ' + get.translation(skillName) + ' 技能代码';
                skillTitle.setAttribute('data-translate-char', charName);
                skillTitle.setAttribute('data-translate-skill', skillName);
                skillRightPanel.appendChild(skillTitle);

                var skillContentContainer = ui.create.div('#dcfl_contentContainer.dcfl_code_content');

                var skillObj = lib.skill[skillName];
                var codeString = '';

                if (skillObj) {
                    try {
                        codeString = '{\n' + formatSkillCode(skillObj, 1) + '}';
                    } catch (e) {
                        codeString = '无法解析技能代码：' + e.message;
                    }
                } else {
                    codeString = '未找到技能代码';
                }

                var codeContainer = document.createElement('pre');
                codeContainer.style.cssText = 'margin: 0; padding: 20px; font-family: lishu !important; font-size: 28px !important; color: #ccc !important; line-height: 1.6 !important; white-space: pre-wrap !important; word-wrap: break-word !important; overflow: auto !important; height: 100% !important; box-sizing: border-box !important;';
                codeContainer.textContent = codeString;

                skillContentContainer.appendChild(codeContainer);
                skillRightPanel.appendChild(skillContentContainer);
                skillMainContainer.appendChild(skillRightPanel);
                skillPageBg.appendChild(skillMainContainer);

                document.body.appendChild(skillPageBg);
                currentCodePage = skillPageBg;

                setTimeout(function() {
                    skillPageBg.style.display = 'block';
                }, 10);
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

                var characterPage = new Page();
                characterPage.body = ui.create.div('#dcfl_page');
                var mainContainer = ui.create.div('#dcfl_mainContainer');
                var leftButtonPanel = ui.create.div('#dcfl_leftButtonPanel');
                var rightPanel = ui.create.div('#dcfl_rightPanel');
                var closeButton = ui.create.div('#dcfl_closeButton', '×');
                closeButton.addEventListener('click', function() {
                    characterPage.hide();
                    if (characterPage.body && characterPage.body.parentNode) {
                        characterPage.body.parentNode.removeChild(characterPage.body);
                    }
                    ui.system.style.display = '';
                    setTimeout(function() {
                        ui.click.configMenu();
                        ui.menuContainer.style.display = '';                        
                    }, 100);
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

                function createCharacterIntro(charName, introClass) {
                    var div = ui.create.div('.dcfl_intro_' + introClass);
                    var charData = lib.character[charName];
                    if (!charData) return null;

                    var dComps = {
                        header: (function() {
                            var imgElement = ui.create.div('.dcfl_intro_header');
                            var extNameWithTags = lib.translate[currentPack + '_character_config'];
                            var extNameClean = extNameWithTags ? extNameWithTags.replace(/<[^>]*>/g, '').trim() : '';
                            loadCharacterImage(imgElement, charName, currentPack, extNameClean, false);
                            imgElement.style.cursor = 'pointer';
                            imgElement.addEventListener('click', function(e) {
                                e.stopPropagation();
                                applySkinChange(this, charName);
                            });
                            imgElement.addEventListener('dblclick', function(e) {
                                e.stopPropagation();
                                e.preventDefault();

                                if (currentDetailPage && currentDetailPage.body && currentDetailPage.body.parentNode) {
                                    currentDetailPage.body.parentNode.removeChild(currentDetailPage.body);
                                }

                                var detailPage = new Page();
                                detailPage.body = ui.create.div('#dcfl_page.dcfl_detail_page');
                                var detailContainer = ui.create.div('#dcfl_mainContainer.dcfl_detail_container');
                                var detailPanel = ui.create.div('#dcfl_rightPanel.dcfl_detail_panel');
                                var closeButton = ui.create.div('#dcfl_closeButton.dcfl_detail_close', '×');
                                closeButton.addEventListener('click', function() {
                                    detailPage.hide();
                                    if (detailPage.body && detailPage.body.parentNode) {
                                        detailPage.body.parentNode.removeChild(detailPage.body);
                                    }
                                    currentDetailPage = null;
                                });
                                detailPanel.appendChild(closeButton);
                                var title = ui.create.div('#dcfl_title.dcfl_detail_title');
                                title.innerHTML = currentPackName + ' - ' + get.translation(charName);
                                detailPanel.appendChild(title);
                                var contentContainer = ui.create.div('#dcfl_contentContainer.dcfl_detail_content');

                                var infoContainer = ui.create.div('.dcfl_detail_page_info_container');
                                var infoStr = "";
                                if (charName) infoStr += get.translation(charName) + '&nbsp;';
                                if (charData[0]) infoStr += get.translation(charData[0]) + '&nbsp;';
                                if (charData[1]) infoStr += get.translation(charData[1]) + '&nbsp;';
                                if (charData[2]) infoStr += charData[2] + '体力';
                                var infoText = ui.create.div('.dcfl_detail_page_info_text', infoStr);
                                infoContainer.appendChild(infoText);

                                var infoIconWrapper = ui.create.div('.dcfl_detail_page_info_icon_wrapper');
                                var infoIcon = ui.create.div('.dcfl_detail_page_info_icon');

                                infoIcon.addEventListener('click', function(e) {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    console.log('点击配音图标，角色:', charName, '扩展包:', currentPack);
                                    playDieAudio(charName, currentPack, extNameWithTags);
                                    return false;
                                });

                                infoIcon.addEventListener('touchstart', function(e) {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    console.log('触摸配音图标，角色:', charName, '扩展包:', currentPack);
                                    playDieAudio(charName, currentPack, extNameWithTags);
                                    return false;
                                }, {
                                    passive: false
                                });

                                infoIconWrapper.appendChild(infoIcon);
                                infoContainer.appendChild(infoIconWrapper);
                                contentContainer.appendChild(infoContainer);

                                var leftImageArea = ui.create.div('.dcfl_detail_image_area');
                                var detailHeader = ui.create.div('.dcfl_detail_header');
                                loadCharacterImage(detailHeader, charName, currentPack, extNameClean, true);
                                detailHeader.style.cursor = 'pointer';
                                detailHeader.addEventListener('click', function(e) {
                                    e.stopPropagation();
                                    applySkinChange(this, charName);
                                    applySkinChange(imgElement, charName);
                                });
                                leftImageArea.appendChild(detailHeader);
                                contentContainer.appendChild(leftImageArea);

                                var leftButtonArea = ui.create.div('.dcfl_detail_button_area');
                                var tabButtonContainer = ui.create.div('.dcfl_detail_tab_buttons');
                                var introButton = ui.create.div('.dcfl_tab_button.active', '简介');
                                var skillButton = ui.create.div('.dcfl_tab_button', '技能');

                                introButton.addEventListener('click', function() {
                                    if (this.classList.contains('active')) return;
                                    this.classList.add('active');
                                    skillButton.classList.remove('active');
                                    introContent.style.display = 'block';
                                    skillContent.style.display = 'none';
                                });

                                skillButton.addEventListener('click', function() {
                                    if (this.classList.contains('active')) return;
                                    this.classList.add('active');
                                    introButton.classList.remove('active');
                                    introContent.style.display = 'none';
                                    skillContent.style.display = 'block';
                                });

                                tabButtonContainer.appendChild(introButton);
                                tabButtonContainer.appendChild(skillButton);
                                leftButtonArea.appendChild(tabButtonContainer);
                                contentContainer.appendChild(leftButtonArea);

                                var rightArea = ui.create.div('.dcfl_detail_right_area');

                                var introContent = ui.create.div('.dcfl_detail_intro_content');
                                introContent.style.display = 'block';
                                try {
                                    var introHtml = get.characterIntro(charName);
                                    if (introHtml && introHtml.trim() !== '') {
                                        var tempDiv = document.createElement('div');
                                        tempDiv.innerHTML = introHtml;
                                        Array.from(tempDiv.childNodes).forEach(function(node) {
                                            if (node.nodeType === Node.ELEMENT_NODE || node.nodeType === Node.TEXT_NODE) {
                                                introContent.appendChild(node.cloneNode(true));
                                            }
                                        });
                                    } else {
                                        introContent.innerHTML = '暂无简介';
                                    }
                                } catch (error) {
                                    introContent.innerHTML = '获取简介失败';
                                }
                                rightArea.appendChild(introContent);

                                var skillContent = ui.create.div('.dcfl_detail_skill_content');
                                skillContent.style.display = 'none';
                                if (charData[3] && Array.isArray(charData[3])) {
                                    for (var j = 0; j < charData[3].length; j++) {
                                        if (j > 0) {
                                            skillContent.appendChild(document.createElement('br'));
                                            skillContent.appendChild(document.createElement('br'));
                                        }
                                        var skillName = charData[3][j];

                                        var skillIcon = document.createElement('span');
                                        skillIcon.className = 'dcfl_skill_icon';
                                        addSkillAudioClick(skillIcon, charName, skillName);
                                        skillContent.appendChild(skillIcon);

                                        var skillNameElement = document.createElement('strong');
                                        skillNameElement.className = 'greentext dcfl_skill_name';
                                        skillNameElement.textContent = get.translation(skillName);
                                        skillNameElement.setAttribute('data-skill-name', skillName);
                                        skillNameElement.setAttribute('data-char-name', charName);
                                        skillNameElement = ensureSkillClickHandler(skillNameElement, skillName, charName);
                                        skillContent.appendChild(skillNameElement);

                                        var descContainer = document.createElement('span');
                                        descContainer.innerHTML = '：' + get.translation(skillName + '_info');
                                        skillContent.appendChild(descContainer);
                                    }
                                } else {
                                    skillContent.innerHTML = '暂无技能信息';
                                }

                                rightArea.appendChild(skillContent);

                                contentContainer.appendChild(rightArea);
                                detailPanel.appendChild(contentContainer);
                                detailContainer.appendChild(detailPanel);
                                detailPage.body.appendChild(detailContainer);
                                detailPage.show();
                                currentDetailPage = detailPage;
                                return false;
                            });
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
                        var characterSort = lib.characterSort && lib.characterSort[packInfo.packKey];
                        if (characterSort && typeof characterSort === 'object') {
                            var sortedChars = {};
                            var otherChars = charList.slice();
                            for (var groupName in characterSort) {
                                var groupChars = characterSort[groupName];
                                if (groupChars && Array.isArray(groupChars)) {
                                    var validGroupChars = [];
                                    for (var j = 0; j < groupChars.length; j++) {
                                        var charName = groupChars[j];
                                        if (charList.includes(charName)) {
                                            validGroupChars.push(charName);
                                            var index = otherChars.indexOf(charName);
                                            if (index > -1) {
                                                otherChars.splice(index, 1);
                                            }
                                        }
                                    }
                                    if (validGroupChars.length > 0) {
                                        sortedChars[groupName] = validGroupChars;
                                    }
                                }
                            }
                            if (otherChars.length > 0) {
                                sortedChars["其他"] = otherChars;
                            }
                            for (var groupName in sortedChars) {
                                var groupChars = sortedChars[groupName];
                                var groupTitle = ui.create.div('.dcfl_group_title');
                                groupTitle.innerHTML = lib.translate[groupName] || groupName;
                                contentContainer.appendChild(groupTitle);
                                for (var j = 0; j < groupChars.length; j++) {
                                    var charName = groupChars[j];
                                    var introClass = (j % 2 === 0) ? 'left' : 'right';
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
                            }
                        } else {
                            var groupTitle = ui.create.div('.dcfl_group_title');
                            groupTitle.innerHTML = '全部武将';
                            contentContainer.appendChild(groupTitle);
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
                        }
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
            },
            "dcfl_icon": {
                name: "图鉴按钮",
                intro: "开启后重启游戏生效。游戏开始后屏幕右下方会有个全新图鉴的按钮，点击后会打开全新图鉴",
                init: false,
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
            intro: "<font color=#4a9eff>自动检测并显示已安装的武将包信息，单击列表页武将图片换肤，双击列表页的武将图片可放大查看详细页，单击详细页的技能名前的小喇叭图标可播放配音，单击详细页技能名可查看技能代码</font>",
            author: "小苏",
            diskURL: "",
            forumURL: "",
            version: "7.0",
        },
        files: {
            "character": [],
            "card": [],
            "skill": [],
            "audio": []
        }
    }
});