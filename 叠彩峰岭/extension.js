game.import("extension", function(lib, game, ui, get, ai, _status) {
    return {
        name: "叠彩峰岭",
        editable: false, 
        content: function(config, pack) {
            
            game.standardCharacter = function() {
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
                    show: function() {
                        if (!this.body.parentNode && this.paBody) {
                            this.paBody.appendChild(this.body);
                        }
                        this.body.show();
                        this.body.style.display = 'block';
                        this.body.style.zIndex = '2025';
                        this.body.style.position = 'fixed';
                        this.body.style.top = '47.3%';
                        this.body.style.left = '50%';
                        this.body.style.transform = 'translate(-50%, -50%)';
                        this.body.style.backgroundColor = '#1a1a1a';
                        this.body.style.padding = '20px';
                        this.body.style.border = '2px solid black';
                        this.body.style.borderRadius = '8px';
                        this.body.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
                        this.body.style.width = '75%';
                        this.body.style.height = '72%';
                        this.body.style.overflow = 'auto';
                        this.body.style.textAlign = 'left';

                        return this;
                    },

                    hide: function() {
                        this.body.hide();
                        return this;
                    }
                };                
                function createCharacterIntro(charName) {
                    var introClass = 'left';
                    function intro(name) {
                        var div = ui.create.div('.dcfl_intro_' + introClass);
                        introClass = introClass == 'left' ? 'right' : 'left';                        
                        var charData = lib.character[name];
                        if (!charData) return null;
                        var dComps = {
                            header: (function() {
                                var img = ui.create.div('.dcfl_intro_header');                                
                                img.style['background-image'] = 'url(' + lib.assetURL + 'image/character/' + name + '.jpg)';
                                return img;
                            })(),
                            infos: (function() {
                                var str = "";
                                if (name) str += get.translation(name) + '&nbsp;';
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

                    return intro(charName);
                }                
                var characterPage = new Page();
                characterPage.body = ui.create.div('#dcfl_page').hide();                
                var comps = {
                    closeButton: (function() {
                        var button = ui.create.div('#dcfl_closeButton', '×');
                        button.addEventListener('click', function() {
                            characterPage.hide();
                            ui.system.style.display = '';
                            setTimeout(function() {
                                ui.click.configMenu();
                                ui.menuContainer.style.display = '';
                            }, 500);
                        });
                        return button;
                    })(),
                    title: ui.create.div('#dcfl_title', '标准包'),
                };
                for (var charName in lib.characterPack['standard']) {
                    if (charName && lib.character[charName]) {
                        var charIntro = createCharacterIntro(charName);
                        if (charIntro) {
                            comps[charName] = charIntro;
                        }
                    }
                }
                for (var i in comps) {
                    if (comps[i]) {
                        characterPage.body.appendChild(comps[i]);
                    }
                }
                characterPage.comps = comps;
                lib.setScroll(characterPage.body);
                characterPage.show();
                return characterPage;
            };
            
//===================================================//            
            game.refreshCharacter = function() {
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
                    show: function() {
                        if (!this.body.parentNode && this.paBody) {
                            this.paBody.appendChild(this.body);
                        }
                        this.body.show();                        
                        this.body.style.display = 'block';
                        this.body.style.zIndex = '2025';
                        this.body.style.position = 'fixed';
                        this.body.style.top = '47.3%';
                        this.body.style.left = '50%';
                        this.body.style.transform = 'translate(-50%, -50%)';
                        this.body.style.backgroundColor = '#1a1a1a';
                        this.body.style.padding = '20px';
                        this.body.style.border = '2px solid black';
                        this.body.style.borderRadius = '8px';
                        this.body.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
                        this.body.style.width = '75%';
                        this.body.style.height = '72%';
                        this.body.style.overflow = 'auto';
                        this.body.style.textAlign = 'left';

                        return this;
                    },

                    hide: function() {
                        this.body.hide();
                        return this;
                    }
                };

                function createCharacterIntro(charName) {
                    var introClass = 'left';

                    function intro(name) {
                        var div = ui.create.div('.dcfl_intro_' + introClass);
                        introClass = introClass == 'left' ? 'right' : 'left';
                        var charData = lib.character[name];
                        if (!charData) return null;

                        var dComps = {
                            header: (function() {
                                var img = ui.create.div('.dcfl_intro_header');
                                img.style['background-image'] = 'url(' + lib.assetURL + 'image/character/' + name + '.jpg)';
                                return img;
                            })(),
                            infos: (function() {
                                var str = "";
                                if (name) str += get.translation(name) + '&nbsp;';
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
                    return intro(charName);
                }                
                var characterPage = new Page();
                characterPage.body = ui.create.div('#dcfl_page').hide();                
                var comps = {
                    closeButton: (function() {
                        var button = ui.create.div('#dcfl_closeButton', '×');
                        button.addEventListener('click', function() {
                            characterPage.hide();
                            ui.system.style.display = '';
                            setTimeout(function() {
                                ui.click.configMenu();
                                ui.menuContainer.style.display = '';
                            }, 500);
                        });
                        return button;
                    })(),
                    title: ui.create.div('#dcfl_title', '界限突破'),
                };
                for (var charName in lib.characterPack['refresh']) {
                    if (charName && lib.character[charName]) {
                        var charIntro = createCharacterIntro(charName);
                        if (charIntro) {
                            comps[charName] = charIntro;
                        }
                    }
                }
                for (var i in comps) {
                    if (comps[i]) {
                        characterPage.body.appendChild(comps[i]);
                    }
                }
                characterPage.comps = comps;
                lib.setScroll(characterPage.body);
                characterPage.show();
                return characterPage;
            };
            
            
//===================================================//            
            game.shenhuaCharacter = function() {
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
                    show: function() {
                        if (!this.body.parentNode && this.paBody) {
                            this.paBody.appendChild(this.body);
                        }
                        this.body.show();                        
                        this.body.style.display = 'block';
                        this.body.style.zIndex = '2025';
                        this.body.style.position = 'fixed';
                        this.body.style.top = '47.3%';
                        this.body.style.left = '50%';
                        this.body.style.transform = 'translate(-50%, -50%)';
                        this.body.style.backgroundColor = '#1a1a1a';
                        this.body.style.padding = '20px';
                        this.body.style.border = '2px solid black';
                        this.body.style.borderRadius = '8px';
                        this.body.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
                        this.body.style.width = '75%';
                        this.body.style.height = '72%';
                        this.body.style.overflow = 'auto';
                        this.body.style.textAlign = 'left';

                        return this;
                    },

                    hide: function() {
                        this.body.hide();
                        return this;
                    }
                };

                function createCharacterIntro(charName) {
                    var introClass = 'left';

                    function intro(name) {
                        var div = ui.create.div('.dcfl_intro_' + introClass);
                        introClass = introClass == 'left' ? 'right' : 'left';
                        var charData = lib.character[name];
                        if (!charData) return null;

                        var dComps = {
                            header: (function() {
                                var img = ui.create.div('.dcfl_intro_header');
                                img.style['background-image'] = 'url(' + lib.assetURL + 'image/character/' + name + '.jpg)';
                                return img;
                            })(),
                            infos: (function() {
                                var str = "";
                                if (name) str += get.translation(name) + '&nbsp;';
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
                    return intro(charName);
                }                
                var characterPage = new Page();
                characterPage.body = ui.create.div('#dcfl_page').hide();                
                var comps = {
                    closeButton: (function() {
                        var button = ui.create.div('#dcfl_closeButton', '×');
                        button.addEventListener('click', function() {
                            characterPage.hide();
                            ui.system.style.display = '';
                            setTimeout(function() {
                                ui.click.configMenu();
                                ui.menuContainer.style.display = '';
                            }, 500);
                        });
                        return button;
                    })(),
                    title: ui.create.div('#dcfl_title', '神话再临'),
                };
                for (var charName in lib.characterPack['shenhua']) {
                    if (charName && lib.character[charName]) {
                        var charIntro = createCharacterIntro(charName);
                        if (charIntro) {
                            comps[charName] = charIntro;
                        }
                    }
                }
                for (var i in comps) {
                    if (comps[i]) {
                        characterPage.body.appendChild(comps[i]);
                    }
                }
                characterPage.comps = comps;
                lib.setScroll(characterPage.body);
                characterPage.show();
                return characterPage;
            };
            
            
//===================================================//            
            game.yijiangCharacter = function() {
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
                    show: function() {
                        if (!this.body.parentNode && this.paBody) {
                            this.paBody.appendChild(this.body);
                        }
                        this.body.show();                        
                        this.body.style.display = 'block';
                        this.body.style.zIndex = '2025';
                        this.body.style.position = 'fixed';
                        this.body.style.top = '47.3%';
                        this.body.style.left = '50%';
                        this.body.style.transform = 'translate(-50%, -50%)';
                        this.body.style.backgroundColor = '#1a1a1a';
                        this.body.style.padding = '20px';
                        this.body.style.border = '2px solid black';
                        this.body.style.borderRadius = '8px';
                        this.body.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
                        this.body.style.width = '75%';
                        this.body.style.height = '72%';
                        this.body.style.overflow = 'auto';
                        this.body.style.textAlign = 'left';

                        return this;
                    },

                    hide: function() {
                        this.body.hide();
                        return this;
                    }
                };

                function createCharacterIntro(charName) {
                    var introClass = 'left';

                    function intro(name) {
                        var div = ui.create.div('.dcfl_intro_' + introClass);
                        introClass = introClass == 'left' ? 'right' : 'left';
                        var charData = lib.character[name];
                        if (!charData) return null;

                        var dComps = {
                            header: (function() {
                                var img = ui.create.div('.dcfl_intro_header');
                                img.style['background-image'] = 'url(' + lib.assetURL + 'image/character/' + name + '.jpg)';
                                return img;
                            })(),
                            infos: (function() {
                                var str = "";
                                if (name) str += get.translation(name) + '&nbsp;';
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
                    return intro(charName);
                }                
                var characterPage = new Page();
                characterPage.body = ui.create.div('#dcfl_page').hide();                
                var comps = {
                    closeButton: (function() {
                        var button = ui.create.div('#dcfl_closeButton', '×');
                        button.addEventListener('click', function() {
                            characterPage.hide();
                            ui.system.style.display = '';
                            setTimeout(function() {
                                ui.click.configMenu();
                                ui.menuContainer.style.display = '';
                            }, 500);
                        });
                        return button;
                    })(),
                    title: ui.create.div('#dcfl_title', '一将成名'),
                };
                for (var charName in lib.characterPack['yijiang']) {
                    if (charName && lib.character[charName]) {
                        var charIntro = createCharacterIntro(charName);
                        if (charIntro) {
                            comps[charName] = charIntro;
                        }
                    }
                }
                for (var i in comps) {
                    if (comps[i]) {
                        characterPage.body.appendChild(comps[i]);
                    }
                }
                characterPage.comps = comps;
                lib.setScroll(characterPage.body);
                characterPage.show();
                return characterPage;
            };
            
            
//===================================================//            
            game.extraCharacter = function() {
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
                    show: function() {
                        if (!this.body.parentNode && this.paBody) {
                            this.paBody.appendChild(this.body);
                        }
                        this.body.show();                        
                        this.body.style.display = 'block';
                        this.body.style.zIndex = '2025';
                        this.body.style.position = 'fixed';
                        this.body.style.top = '47.3%';
                        this.body.style.left = '50%';
                        this.body.style.transform = 'translate(-50%, -50%)';
                        this.body.style.backgroundColor = '#1a1a1a';
                        this.body.style.padding = '20px';
                        this.body.style.border = '2px solid black';
                        this.body.style.borderRadius = '8px';
                        this.body.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
                        this.body.style.width = '75%';
                        this.body.style.height = '72%';
                        this.body.style.overflow = 'auto';
                        this.body.style.textAlign = 'left';

                        return this;
                    },

                    hide: function() {
                        this.body.hide();
                        return this;
                    }
                };

                function createCharacterIntro(charName) {
                    var introClass = 'left';

                    function intro(name) {
                        var div = ui.create.div('.dcfl_intro_' + introClass);
                        introClass = introClass == 'left' ? 'right' : 'left';
                        var charData = lib.character[name];
                        if (!charData) return null;

                        var dComps = {
                            header: (function() {
                                var img = ui.create.div('.dcfl_intro_header');
                                img.style['background-image'] = 'url(' + lib.assetURL + 'image/character/' + name + '.jpg)';
                                return img;
                            })(),
                            infos: (function() {
                                var str = "";
                                if (name) str += get.translation(name) + '&nbsp;';
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
                    return intro(charName);
                }                
                var characterPage = new Page();
                characterPage.body = ui.create.div('#dcfl_page').hide();                
                var comps = {
                    closeButton: (function() {
                        var button = ui.create.div('#dcfl_closeButton', '×');
                        button.addEventListener('click', function() {
                            characterPage.hide();
                            ui.system.style.display = '';
                            setTimeout(function() {
                                ui.click.configMenu();
                                ui.menuContainer.style.display = '';
                            }, 500);
                        });
                        return button;
                    })(),
                    title: ui.create.div('#dcfl_title', '神将'),
                };
                for (var charName in lib.characterPack['extra']) {
                    if (charName && lib.character[charName]) {
                        var charIntro = createCharacterIntro(charName);
                        if (charIntro) {
                            comps[charName] = charIntro;
                        }
                    }
                }
                for (var i in comps) {
                    if (comps[i]) {
                        characterPage.body.appendChild(comps[i]);
                    }
                }
                characterPage.comps = comps;
                lib.setScroll(characterPage.body);
                characterPage.show();
                return characterPage;
            };
            
            
//===================================================//            
            game.spCharacter = function() {
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
                    show: function() {
                        if (!this.body.parentNode && this.paBody) {
                            this.paBody.appendChild(this.body);
                        }
                        this.body.show();                        
                        this.body.style.display = 'block';
                        this.body.style.zIndex = '2025';
                        this.body.style.position = 'fixed';
                        this.body.style.top = '47.3%';
                        this.body.style.left = '50%';
                        this.body.style.transform = 'translate(-50%, -50%)';
                        this.body.style.backgroundColor = '#1a1a1a';
                        this.body.style.padding = '20px';
                        this.body.style.border = '2px solid black';
                        this.body.style.borderRadius = '8px';
                        this.body.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
                        this.body.style.width = '75%';
                        this.body.style.height = '72%';
                        this.body.style.overflow = 'auto';
                        this.body.style.textAlign = 'left';

                        return this;
                    },

                    hide: function() {
                        this.body.hide();
                        return this;
                    }
                };

                function createCharacterIntro(charName) {
                    var introClass = 'left';

                    function intro(name) {
                        var div = ui.create.div('.dcfl_intro_' + introClass);
                        introClass = introClass == 'left' ? 'right' : 'left';
                        var charData = lib.character[name];
                        if (!charData) return null;

                        var dComps = {
                            header: (function() {
                                var img = ui.create.div('.dcfl_intro_header');
                                img.style['background-image'] = 'url(' + lib.assetURL + 'image/character/' + name + '.jpg)';
                                return img;
                            })(),
                            infos: (function() {
                                var str = "";
                                if (name) str += get.translation(name) + '&nbsp;';
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
                    return intro(charName);
                }                
                var characterPage = new Page();
                characterPage.body = ui.create.div('#dcfl_page').hide();                
                var comps = {
                    closeButton: (function() {
                        var button = ui.create.div('#dcfl_closeButton', '×');
                        button.addEventListener('click', function() {
                            characterPage.hide();
                            ui.system.style.display = '';
                            setTimeout(function() {
                                ui.click.configMenu();
                                ui.menuContainer.style.display = '';
                            }, 500);
                        });
                        return button;
                    })(),
                    title: ui.create.div('#dcfl_title', '璀璨星河'),
                };
                for (var charName in lib.characterPack['sp']) {
                    if (charName && lib.character[charName]) {
                        var charIntro = createCharacterIntro(charName);
                        if (charIntro) {
                            comps[charName] = charIntro;
                        }
                    }
                }
                for (var i in comps) {
                    if (comps[i]) {
                        characterPage.body.appendChild(comps[i]);
                    }
                }
                characterPage.comps = comps;
                lib.setScroll(characterPage.body);
                characterPage.show();
                return characterPage;
            };
            
            
//===================================================//            
            game.sp2Character = function() {
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
                    show: function() {
                        if (!this.body.parentNode && this.paBody) {
                            this.paBody.appendChild(this.body);
                        }
                        this.body.show();                        
                        this.body.style.display = 'block';
                        this.body.style.zIndex = '2025';
                        this.body.style.position = 'fixed';
                        this.body.style.top = '47.3%';
                        this.body.style.left = '50%';
                        this.body.style.transform = 'translate(-50%, -50%)';
                        this.body.style.backgroundColor = '#1a1a1a';
                        this.body.style.padding = '20px';
                        this.body.style.border = '2px solid black';
                        this.body.style.borderRadius = '8px';
                        this.body.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
                        this.body.style.width = '75%';
                        this.body.style.height = '72%';
                        this.body.style.overflow = 'auto';
                        this.body.style.textAlign = 'left';

                        return this;
                    },

                    hide: function() {
                        this.body.hide();
                        return this;
                    }
                };

                function createCharacterIntro(charName) {
                    var introClass = 'left';

                    function intro(name) {
                        var div = ui.create.div('.dcfl_intro_' + introClass);
                        introClass = introClass == 'left' ? 'right' : 'left';
                        var charData = lib.character[name];
                        if (!charData) return null;

                        var dComps = {
                            header: (function() {
                                var img = ui.create.div('.dcfl_intro_header');
                                img.style['background-image'] = 'url(' + lib.assetURL + 'image/character/' + name + '.jpg)';
                                return img;
                            })(),
                            infos: (function() {
                                var str = "";
                                if (name) str += get.translation(name) + '&nbsp;';
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
                    return intro(charName);
                }                
                var characterPage = new Page();
                characterPage.body = ui.create.div('#dcfl_page').hide();                
                var comps = {
                    closeButton: (function() {
                        var button = ui.create.div('#dcfl_closeButton', '×');
                        button.addEventListener('click', function() {
                            characterPage.hide();
                            ui.system.style.display = '';
                            setTimeout(function() {
                                ui.click.configMenu();
                                ui.menuContainer.style.display = '';
                            }, 500);
                        });
                        return button;
                    })(),
                    title: ui.create.div('#dcfl_title', '系列专属'),
                };
                for (var charName in lib.characterPack['sp2']) {
                    if (charName && lib.character[charName]) {
                        var charIntro = createCharacterIntro(charName);
                        if (charIntro) {
                            comps[charName] = charIntro;
                        }
                    }
                }
                for (var i in comps) {
                    if (comps[i]) {
                        characterPage.body.appendChild(comps[i]);
                    }
                }
                characterPage.comps = comps;
                lib.setScroll(characterPage.body);
                characterPage.show();
                return characterPage;
            };
            
            
//===================================================//            
            game.newjiangCharacter = function() {
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
                    show: function() {
                        if (!this.body.parentNode && this.paBody) {
                            this.paBody.appendChild(this.body);
                        }
                        this.body.show();                        
                        this.body.style.display = 'block';
                        this.body.style.zIndex = '2025';
                        this.body.style.position = 'fixed';
                        this.body.style.top = '47.3%';
                        this.body.style.left = '50%';
                        this.body.style.transform = 'translate(-50%, -50%)';
                        this.body.style.backgroundColor = '#1a1a1a';
                        this.body.style.padding = '20px';
                        this.body.style.border = '2px solid black';
                        this.body.style.borderRadius = '8px';
                        this.body.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
                        this.body.style.width = '75%';
                        this.body.style.height = '72%';
                        this.body.style.overflow = 'auto';
                        this.body.style.textAlign = 'left';

                        return this;
                    },

                    hide: function() {
                        this.body.hide();
                        return this;
                    }
                };

                function createCharacterIntro(charName) {
                    var introClass = 'left';

                    function intro(name) {
                        var div = ui.create.div('.dcfl_intro_' + introClass);
                        introClass = introClass == 'left' ? 'right' : 'left';
                        var charData = lib.character[name];
                        if (!charData) return null;

                        var dComps = {
                            header: (function() {
                                var img = ui.create.div('.dcfl_intro_header');
                                img.style['background-image'] = 'url(' + lib.assetURL + 'image/character/' + name + '.jpg)';
                                return img;
                            })(),
                            infos: (function() {
                                var str = "";
                                if (name) str += get.translation(name) + '&nbsp;';
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
                    return intro(charName);
                }                
                var characterPage = new Page();
                characterPage.body = ui.create.div('#dcfl_page').hide();                
                var comps = {
                    closeButton: (function() {
                        var button = ui.create.div('#dcfl_closeButton', '×');
                        button.addEventListener('click', function() {
                            characterPage.hide();
                            ui.system.style.display = '';
                            setTimeout(function() {
                                ui.click.configMenu();
                                ui.menuContainer.style.display = '';
                            }, 500);
                        });
                        return button;
                    })(),
                    title: ui.create.div('#dcfl_title', '新一将成名'),
                };
                for (var charName in lib.characterPack['newjiang']) {
                    if (charName && lib.character[charName]) {
                        var charIntro = createCharacterIntro(charName);
                        if (charIntro) {
                            comps[charName] = charIntro;
                        }
                    }
                }
                for (var i in comps) {
                    if (comps[i]) {
                        characterPage.body.appendChild(comps[i]);
                    }
                }
                characterPage.comps = comps;
                lib.setScroll(characterPage.body);
                characterPage.show();
                return characterPage;
            };
            
            
//===================================================//            
            game.onlyOLCharacter = function() {
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
                    show: function() {
                        if (!this.body.parentNode && this.paBody) {
                            this.paBody.appendChild(this.body);
                        }
                        this.body.show();                        
                        this.body.style.display = 'block';
                        this.body.style.zIndex = '2025';
                        this.body.style.position = 'fixed';
                        this.body.style.top = '47.3%';
                        this.body.style.left = '50%';
                        this.body.style.transform = 'translate(-50%, -50%)';
                        this.body.style.backgroundColor = '#1a1a1a';
                        this.body.style.padding = '20px';
                        this.body.style.border = '2px solid black';
                        this.body.style.borderRadius = '8px';
                        this.body.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
                        this.body.style.width = '75%';
                        this.body.style.height = '72%';
                        this.body.style.overflow = 'auto';
                        this.body.style.textAlign = 'left';

                        return this;
                    },

                    hide: function() {
                        this.body.hide();
                        return this;
                    }
                };

                function createCharacterIntro(charName) {
                    var introClass = 'left';

                    function intro(name) {
                        var div = ui.create.div('.dcfl_intro_' + introClass);
                        introClass = introClass == 'left' ? 'right' : 'left';
                        var charData = lib.character[name];
                        if (!charData) return null;

                        var dComps = {
                            header: (function() {
                                var img = ui.create.div('.dcfl_intro_header');
                                img.style['background-image'] = 'url(' + lib.assetURL + 'image/character/' + name + '.jpg)';
                                return img;
                            })(),
                            infos: (function() {
                                var str = "";
                                if (name) str += get.translation(name) + '&nbsp;';
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
                    return intro(charName);
                }                
                var characterPage = new Page();
                characterPage.body = ui.create.div('#dcfl_page').hide();                
                var comps = {
                    closeButton: (function() {
                        var button = ui.create.div('#dcfl_closeButton', '×');
                        button.addEventListener('click', function() {
                            characterPage.hide();
                            ui.system.style.display = '';
                            setTimeout(function() {
                                ui.click.configMenu();
                                ui.menuContainer.style.display = '';
                            }, 500);
                        });
                        return button;
                    })(),
                    title: ui.create.div('#dcfl_title', 'OL专属'),
                };
                for (var charName in lib.characterPack['onlyOL']) {
                    if (charName && lib.character[charName]) {
                        var charIntro = createCharacterIntro(charName);
                        if (charIntro) {
                            comps[charName] = charIntro;
                        }
                    }
                }
                for (var i in comps) {
                    if (comps[i]) {
                        characterPage.body.appendChild(comps[i]);
                    }
                }
                characterPage.comps = comps;
                lib.setScroll(characterPage.body);
                characterPage.show();
                return characterPage;
            };
            
            
//===================================================//            
            game.yingbianCharacter = function() {
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
                    show: function() {
                        if (!this.body.parentNode && this.paBody) {
                            this.paBody.appendChild(this.body);
                        }
                        this.body.show();                        
                        this.body.style.display = 'block';
                        this.body.style.zIndex = '2025';
                        this.body.style.position = 'fixed';
                        this.body.style.top = '47.3%';
                        this.body.style.left = '50%';
                        this.body.style.transform = 'translate(-50%, -50%)';
                        this.body.style.backgroundColor = '#1a1a1a';
                        this.body.style.padding = '20px';
                        this.body.style.border = '2px solid black';
                        this.body.style.borderRadius = '8px';
                        this.body.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
                        this.body.style.width = '75%';
                        this.body.style.height = '72%';
                        this.body.style.overflow = 'auto';
                        this.body.style.textAlign = 'left';

                        return this;
                    },

                    hide: function() {
                        this.body.hide();
                        return this;
                    }
                };

                function createCharacterIntro(charName) {
                    var introClass = 'left';

                    function intro(name) {
                        var div = ui.create.div('.dcfl_intro_' + introClass);
                        introClass = introClass == 'left' ? 'right' : 'left';
                        var charData = lib.character[name];
                        if (!charData) return null;

                        var dComps = {
                            header: (function() {
                                var img = ui.create.div('.dcfl_intro_header');
                                img.style['background-image'] = 'url(' + lib.assetURL + 'image/character/' + name + '.jpg)';
                                return img;
                            })(),
                            infos: (function() {
                                var str = "";
                                if (name) str += get.translation(name) + '&nbsp;';
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
                    return intro(charName);
                }                
                var characterPage = new Page();
                characterPage.body = ui.create.div('#dcfl_page').hide();                
                var comps = {
                    closeButton: (function() {
                        var button = ui.create.div('#dcfl_closeButton', '×');
                        button.addEventListener('click', function() {
                            characterPage.hide();
                            ui.system.style.display = '';
                            setTimeout(function() {
                                ui.click.configMenu();
                                ui.menuContainer.style.display = '';
                            }, 500);
                        });
                        return button;
                    })(),
                    title: ui.create.div('#dcfl_title', '文德武备'),
                };
                for (var charName in lib.characterPack['yingbian']) {
                    if (charName && lib.character[charName]) {
                        var charIntro = createCharacterIntro(charName);
                        if (charIntro) {
                            comps[charName] = charIntro;
                        }
                    }
                }
                for (var i in comps) {
                    if (comps[i]) {
                        characterPage.body.appendChild(comps[i]);
                    }
                }
                characterPage.comps = comps;
                lib.setScroll(characterPage.body);
                characterPage.show();
                return characterPage;
            };
            
            
//===================================================//            
            game.clanCharacter = function() {
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
                    show: function() {
                        if (!this.body.parentNode && this.paBody) {
                            this.paBody.appendChild(this.body);
                        }
                        this.body.show();                        
                        this.body.style.display = 'block';
                        this.body.style.zIndex = '2025';
                        this.body.style.position = 'fixed';
                        this.body.style.top = '47.3%';
                        this.body.style.left = '50%';
                        this.body.style.transform = 'translate(-50%, -50%)';
                        this.body.style.backgroundColor = '#1a1a1a';
                        this.body.style.padding = '20px';
                        this.body.style.border = '2px solid black';
                        this.body.style.borderRadius = '8px';
                        this.body.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
                        this.body.style.width = '75%';
                        this.body.style.height = '72%';
                        this.body.style.overflow = 'auto';
                        this.body.style.textAlign = 'left';

                        return this;
                    },

                    hide: function() {
                        this.body.hide();
                        return this;
                    }
                };

                function createCharacterIntro(charName) {
                    var introClass = 'left';

                    function intro(name) {
                        var div = ui.create.div('.dcfl_intro_' + introClass);
                        introClass = introClass == 'left' ? 'right' : 'left';
                        var charData = lib.character[name];
                        if (!charData) return null;

                        var dComps = {
                            header: (function() {
                                var img = ui.create.div('.dcfl_intro_header');
                                img.style['background-image'] = 'url(' + lib.assetURL + 'image/character/' + name + '.jpg)';
                                return img;
                            })(),
                            infos: (function() {
                                var str = "";
                                if (name) str += get.translation(name) + '&nbsp;';
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
                    return intro(charName);
                }                
                var characterPage = new Page();
                characterPage.body = ui.create.div('#dcfl_page').hide();                
                var comps = {
                    closeButton: (function() {
                        var button = ui.create.div('#dcfl_closeButton', '×');
                        button.addEventListener('click', function() {
                            characterPage.hide();
                            ui.system.style.display = '';
                            setTimeout(function() {
                                ui.click.configMenu();
                                ui.menuContainer.style.display = '';
                            }, 500);
                        });
                        return button;
                    })(),
                    title: ui.create.div('#dcfl_title', '门阀士族'),
                };
                for (var charName in lib.characterPack['clan']) {
                    if (charName && lib.character[charName]) {
                        var charIntro = createCharacterIntro(charName);
                        if (charIntro) {
                            comps[charName] = charIntro;
                        }
                    }
                }
                for (var i in comps) {
                    if (comps[i]) {
                        characterPage.body.appendChild(comps[i]);
                    }
                }
                characterPage.comps = comps;
                lib.setScroll(characterPage.body);
                characterPage.show();
                return characterPage;
            };
            
            
//===================================================//            
            game.huicuiCharacter = function() {
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
                    show: function() {
                        if (!this.body.parentNode && this.paBody) {
                            this.paBody.appendChild(this.body);
                        }
                        this.body.show();                        
                        this.body.style.display = 'block';
                        this.body.style.zIndex = '2025';
                        this.body.style.position = 'fixed';
                        this.body.style.top = '47.3%';
                        this.body.style.left = '50%';
                        this.body.style.transform = 'translate(-50%, -50%)';
                        this.body.style.backgroundColor = '#1a1a1a';
                        this.body.style.padding = '20px';
                        this.body.style.border = '2px solid black';
                        this.body.style.borderRadius = '8px';
                        this.body.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
                        this.body.style.width = '75%';
                        this.body.style.height = '72%';
                        this.body.style.overflow = 'auto';
                        this.body.style.textAlign = 'left';

                        return this;
                    },

                    hide: function() {
                        this.body.hide();
                        return this;
                    }
                };

                function createCharacterIntro(charName) {
                    var introClass = 'left';

                    function intro(name) {
                        var div = ui.create.div('.dcfl_intro_' + introClass);
                        introClass = introClass == 'left' ? 'right' : 'left';
                        var charData = lib.character[name];
                        if (!charData) return null;

                        var dComps = {
                            header: (function() {
                                var img = ui.create.div('.dcfl_intro_header');
                                img.style['background-image'] = 'url(' + lib.assetURL + 'image/character/' + name + '.jpg)';
                                return img;
                            })(),
                            infos: (function() {
                                var str = "";
                                if (name) str += get.translation(name) + '&nbsp;';
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
                    return intro(charName);
                }                
                var characterPage = new Page();
                characterPage.body = ui.create.div('#dcfl_page').hide();                
                var comps = {
                    closeButton: (function() {
                        var button = ui.create.div('#dcfl_closeButton', '×');
                        button.addEventListener('click', function() {
                            characterPage.hide();
                            ui.system.style.display = '';
                            setTimeout(function() {
                                ui.click.configMenu();
                                ui.menuContainer.style.display = '';
                            }, 500);
                        });
                        return button;
                    })(),
                    title: ui.create.div('#dcfl_title', '群英荟萃'),
                };
                for (var charName in lib.characterPack['huicui']) {
                    if (charName && lib.character[charName]) {
                        var charIntro = createCharacterIntro(charName);
                        if (charIntro) {
                            comps[charName] = charIntro;
                        }
                    }
                }
                for (var i in comps) {
                    if (comps[i]) {
                        characterPage.body.appendChild(comps[i]);
                    }
                }
                characterPage.comps = comps;
                lib.setScroll(characterPage.body);
                characterPage.show();
                return characterPage;
            };
            
            
//===================================================//            
            game.xiandingCharacter = function() {
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
                    show: function() {
                        if (!this.body.parentNode && this.paBody) {
                            this.paBody.appendChild(this.body);
                        }
                        this.body.show();                        
                        this.body.style.display = 'block';
                        this.body.style.zIndex = '2025';
                        this.body.style.position = 'fixed';
                        this.body.style.top = '47.3%';
                        this.body.style.left = '50%';
                        this.body.style.transform = 'translate(-50%, -50%)';
                        this.body.style.backgroundColor = '#1a1a1a';
                        this.body.style.padding = '20px';
                        this.body.style.border = '2px solid black';
                        this.body.style.borderRadius = '8px';
                        this.body.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
                        this.body.style.width = '75%';
                        this.body.style.height = '72%';
                        this.body.style.overflow = 'auto';
                        this.body.style.textAlign = 'left';

                        return this;
                    },

                    hide: function() {
                        this.body.hide();
                        return this;
                    }
                };

                function createCharacterIntro(charName) {
                    var introClass = 'left';

                    function intro(name) {
                        var div = ui.create.div('.dcfl_intro_' + introClass);
                        introClass = introClass == 'left' ? 'right' : 'left';
                        var charData = lib.character[name];
                        if (!charData) return null;

                        var dComps = {
                            header: (function() {
                                var img = ui.create.div('.dcfl_intro_header');
                                img.style['background-image'] = 'url(' + lib.assetURL + 'image/character/' + name + '.jpg)';
                                return img;
                            })(),
                            infos: (function() {
                                var str = "";
                                if (name) str += get.translation(name) + '&nbsp;';
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
                    return intro(charName);
                }                
                var characterPage = new Page();
                characterPage.body = ui.create.div('#dcfl_page').hide();                
                var comps = {
                    closeButton: (function() {
                        var button = ui.create.div('#dcfl_closeButton', '×');
                        button.addEventListener('click', function() {
                            characterPage.hide();
                            ui.system.style.display = '';
                            setTimeout(function() {
                                ui.click.configMenu();
                                ui.menuContainer.style.display = '';
                            }, 500);
                        });
                        return button;
                    })(),
                    title: ui.create.div('#dcfl_title', '限定专属'),
                };
                for (var charName in lib.characterPack['xianding']) {
                    if (charName && lib.character[charName]) {
                        var charIntro = createCharacterIntro(charName);
                        if (charIntro) {
                            comps[charName] = charIntro;
                        }
                    }
                }
                for (var i in comps) {
                    if (comps[i]) {
                        characterPage.body.appendChild(comps[i]);
                    }
                }
                characterPage.comps = comps;
                lib.setScroll(characterPage.body);
                characterPage.show();
                return characterPage;
            };
            
            
//===================================================//            
            game.mobileCharacter = function() {
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
                    show: function() {
                        if (!this.body.parentNode && this.paBody) {
                            this.paBody.appendChild(this.body);
                        }
                        this.body.show();                        
                        this.body.style.display = 'block';
                        this.body.style.zIndex = '2025';
                        this.body.style.position = 'fixed';
                        this.body.style.top = '47.3%';
                        this.body.style.left = '50%';
                        this.body.style.transform = 'translate(-50%, -50%)';
                        this.body.style.backgroundColor = '#1a1a1a';
                        this.body.style.padding = '20px';
                        this.body.style.border = '2px solid black';
                        this.body.style.borderRadius = '8px';
                        this.body.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
                        this.body.style.width = '75%';
                        this.body.style.height = '72%';
                        this.body.style.overflow = 'auto';
                        this.body.style.textAlign = 'left';

                        return this;
                    },

                    hide: function() {
                        this.body.hide();
                        return this;
                    }
                };

                function createCharacterIntro(charName) {
                    var introClass = 'left';

                    function intro(name) {
                        var div = ui.create.div('.dcfl_intro_' + introClass);
                        introClass = introClass == 'left' ? 'right' : 'left';
                        var charData = lib.character[name];
                        if (!charData) return null;

                        var dComps = {
                            header: (function() {
                                var img = ui.create.div('.dcfl_intro_header');
                                img.style['background-image'] = 'url(' + lib.assetURL + 'image/character/' + name + '.jpg)';
                                return img;
                            })(),
                            infos: (function() {
                                var str = "";
                                if (name) str += get.translation(name) + '&nbsp;';
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
                    return intro(charName);
                }                
                var characterPage = new Page();
                characterPage.body = ui.create.div('#dcfl_page').hide();                
                var comps = {
                    closeButton: (function() {
                        var button = ui.create.div('#dcfl_closeButton', '×');
                        button.addEventListener('click', function() {
                            characterPage.hide();
                            ui.system.style.display = '';
                            setTimeout(function() {
                                ui.click.configMenu();
                                ui.menuContainer.style.display = '';
                            }, 500);
                        });
                        return button;
                    })(),
                    title: ui.create.div('#dcfl_title', '移动版'),
                };
                for (var charName in lib.characterPack['mobile']) {
                    if (charName && lib.character[charName]) {
                        var charIntro = createCharacterIntro(charName);
                        if (charIntro) {
                            comps[charName] = charIntro;
                        }
                    }
                }
                for (var i in comps) {
                    if (comps[i]) {
                        characterPage.body.appendChild(comps[i]);
                    }
                }
                characterPage.comps = comps;
                lib.setScroll(characterPage.body);
                characterPage.show();
                return characterPage;
            };
                        
//===================================================//            
            game.shijiCharacter = function() {
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
                    show: function() {
                        if (!this.body.parentNode && this.paBody) {
                            this.paBody.appendChild(this.body);
                        }
                        this.body.show();                        
                        this.body.style.display = 'block';
                        this.body.style.zIndex = '2025';
                        this.body.style.position = 'fixed';
                        this.body.style.top = '47.3%';
                        this.body.style.left = '50%';
                        this.body.style.transform = 'translate(-50%, -50%)';
                        this.body.style.backgroundColor = '#1a1a1a';
                        this.body.style.padding = '20px';
                        this.body.style.border = '2px solid black';
                        this.body.style.borderRadius = '8px';
                        this.body.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
                        this.body.style.width = '75%';
                        this.body.style.height = '72%';
                        this.body.style.overflow = 'auto';
                        this.body.style.textAlign = 'left';

                        return this;
                    },

                    hide: function() {
                        this.body.hide();
                        return this;
                    }
                };

                function createCharacterIntro(charName) {
                    var introClass = 'left';

                    function intro(name) {
                        var div = ui.create.div('.dcfl_intro_' + introClass);
                        introClass = introClass == 'left' ? 'right' : 'left';
                        var charData = lib.character[name];
                        if (!charData) return null;

                        var dComps = {
                            header: (function() {
                                var img = ui.create.div('.dcfl_intro_header');
                                img.style['background-image'] = 'url(' + lib.assetURL + 'image/character/' + name + '.jpg)';
                                return img;
                            })(),
                            infos: (function() {
                                var str = "";
                                if (name) str += get.translation(name) + '&nbsp;';
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
                    return intro(charName);
                }                
                var characterPage = new Page();
                characterPage.body = ui.create.div('#dcfl_page').hide();                
                var comps = {
                    closeButton: (function() {
                        var button = ui.create.div('#dcfl_closeButton', '×');
                        button.addEventListener('click', function() {
                            characterPage.hide();
                            ui.system.style.display = '';
                            setTimeout(function() {
                                ui.click.configMenu();
                                ui.menuContainer.style.display = '';
                            }, 500);
                        });
                        return button;
                    })(),
                    title: ui.create.div('#dcfl_title', '始计篇'),
                };
                for (var charName in lib.characterPack['shiji']) {
                    if (charName && lib.character[charName]) {
                        var charIntro = createCharacterIntro(charName);
                        if (charIntro) {
                            comps[charName] = charIntro;
                        }
                    }
                }
                for (var i in comps) {
                    if (comps[i]) {
                        characterPage.body.appendChild(comps[i]);
                    }
                }
                characterPage.comps = comps;
                lib.setScroll(characterPage.body);
                characterPage.show();
                return characterPage;
            };
                        
//===================================================//            
            game.sbCharacter = function() {
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
                    show: function() {
                        if (!this.body.parentNode && this.paBody) {
                            this.paBody.appendChild(this.body);
                        }
                        this.body.show();                        
                        this.body.style.display = 'block';
                        this.body.style.zIndex = '2025';
                        this.body.style.position = 'fixed';
                        this.body.style.top = '47.3%';
                        this.body.style.left = '50%';
                        this.body.style.transform = 'translate(-50%, -50%)';
                        this.body.style.backgroundColor = '#1a1a1a';
                        this.body.style.padding = '20px';
                        this.body.style.border = '2px solid black';
                        this.body.style.borderRadius = '8px';
                        this.body.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
                        this.body.style.width = '75%';
                        this.body.style.height = '72%';
                        this.body.style.overflow = 'auto';
                        this.body.style.textAlign = 'left';

                        return this;
                    },

                    hide: function() {
                        this.body.hide();
                        return this;
                    }
                };

                function createCharacterIntro(charName) {
                    var introClass = 'left';

                    function intro(name) {
                        var div = ui.create.div('.dcfl_intro_' + introClass);
                        introClass = introClass == 'left' ? 'right' : 'left';
                        var charData = lib.character[name];
                        if (!charData) return null;

                        var dComps = {
                            header: (function() {
                                var img = ui.create.div('.dcfl_intro_header');
                                img.style['background-image'] = 'url(' + lib.assetURL + 'image/character/' + name + '.jpg)';
                                return img;
                            })(),
                            infos: (function() {
                                var str = "";
                                if (name) str += get.translation(name) + '&nbsp;';
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
                    return intro(charName);
                }                
                var characterPage = new Page();
                characterPage.body = ui.create.div('#dcfl_page').hide();                
                var comps = {
                    closeButton: (function() {
                        var button = ui.create.div('#dcfl_closeButton', '×');
                        button.addEventListener('click', function() {
                            characterPage.hide();
                            ui.system.style.display = '';
                            setTimeout(function() {
                                ui.click.configMenu();
                                ui.menuContainer.style.display = '';
                            }, 500);
                        });
                        return button;
                    })(),
                    title: ui.create.div('#dcfl_title', '谋攻篇'),
                };
                for (var charName in lib.characterPack['sb']) {
                    if (charName && lib.character[charName]) {
                        var charIntro = createCharacterIntro(charName);
                        if (charIntro) {
                            comps[charName] = charIntro;
                        }
                    }
                }
                for (var i in comps) {
                    if (comps[i]) {
                        characterPage.body.appendChild(comps[i]);
                    }
                }
                characterPage.comps = comps;
                lib.setScroll(characterPage.body);
                characterPage.show();
                return characterPage;
            };
                        
//===================================================//            
            game.twCharacter = function() {
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
                    show: function() {
                        if (!this.body.parentNode && this.paBody) {
                            this.paBody.appendChild(this.body);
                        }
                        this.body.show();                        
                        this.body.style.display = 'block';
                        this.body.style.zIndex = '2025';
                        this.body.style.position = 'fixed';
                        this.body.style.top = '47.3%';
                        this.body.style.left = '50%';
                        this.body.style.transform = 'translate(-50%, -50%)';
                        this.body.style.backgroundColor = '#1a1a1a';
                        this.body.style.padding = '20px';
                        this.body.style.border = '2px solid black';
                        this.body.style.borderRadius = '8px';
                        this.body.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
                        this.body.style.width = '75%';
                        this.body.style.height = '72%';
                        this.body.style.overflow = 'auto';
                        this.body.style.textAlign = 'left';

                        return this;
                    },

                    hide: function() {
                        this.body.hide();
                        return this;
                    }
                };

                function createCharacterIntro(charName) {
                    var introClass = 'left';

                    function intro(name) {
                        var div = ui.create.div('.dcfl_intro_' + introClass);
                        introClass = introClass == 'left' ? 'right' : 'left';
                        var charData = lib.character[name];
                        if (!charData) return null;

                        var dComps = {
                            header: (function() {
                                var img = ui.create.div('.dcfl_intro_header');
                                img.style['background-image'] = 'url(' + lib.assetURL + 'image/character/' + name + '.jpg)';
                                return img;
                            })(),
                            infos: (function() {
                                var str = "";
                                if (name) str += get.translation(name) + '&nbsp;';
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
                    return intro(charName);
                }                
                var characterPage = new Page();
                characterPage.body = ui.create.div('#dcfl_page').hide();                
                var comps = {
                    closeButton: (function() {
                        var button = ui.create.div('#dcfl_closeButton', '×');
                        button.addEventListener('click', function() {
                            characterPage.hide();
                            ui.system.style.display = '';
                            setTimeout(function() {
                                ui.click.configMenu();
                                ui.menuContainer.style.display = '';
                            }, 500);
                        });
                        return button;
                    })(),
                    title: ui.create.div('#dcfl_title', '外服武将'),
                };
                for (var charName in lib.characterPack['tw']) {
                    if (charName && lib.character[charName]) {
                        var charIntro = createCharacterIntro(charName);
                        if (charIntro) {
                            comps[charName] = charIntro;
                        }
                    }
                }
                for (var i in comps) {
                    if (comps[i]) {
                        characterPage.body.appendChild(comps[i]);
                    }
                }
                characterPage.comps = comps;
                lib.setScroll(characterPage.body);
                characterPage.show();
                return characterPage;
            };
                        
//===================================================//            
            game.collabCharacter = function() {
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
                    show: function() {
                        if (!this.body.parentNode && this.paBody) {
                            this.paBody.appendChild(this.body);
                        }
                        this.body.show();                        
                        this.body.style.display = 'block';
                        this.body.style.zIndex = '2025';
                        this.body.style.position = 'fixed';
                        this.body.style.top = '47.3%';
                        this.body.style.left = '50%';
                        this.body.style.transform = 'translate(-50%, -50%)';
                        this.body.style.backgroundColor = '#1a1a1a';
                        this.body.style.padding = '20px';
                        this.body.style.border = '2px solid black';
                        this.body.style.borderRadius = '8px';
                        this.body.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
                        this.body.style.width = '75%';
                        this.body.style.height = '72%';
                        this.body.style.overflow = 'auto';
                        this.body.style.textAlign = 'left';

                        return this;
                    },

                    hide: function() {
                        this.body.hide();
                        return this;
                    }
                };

                function createCharacterIntro(charName) {
                    var introClass = 'left';

                    function intro(name) {
                        var div = ui.create.div('.dcfl_intro_' + introClass);
                        introClass = introClass == 'left' ? 'right' : 'left';
                        var charData = lib.character[name];
                        if (!charData) return null;

                        var dComps = {
                            header: (function() {
                                var img = ui.create.div('.dcfl_intro_header');
                                img.style['background-image'] = 'url(' + lib.assetURL + 'image/character/' + name + '.jpg)';
                                return img;
                            })(),
                            infos: (function() {
                                var str = "";
                                if (name) str += get.translation(name) + '&nbsp;';
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
                    return intro(charName);
                }                
                var characterPage = new Page();
                characterPage.body = ui.create.div('#dcfl_page').hide();                
                var comps = {
                    closeButton: (function() {
                        var button = ui.create.div('#dcfl_closeButton', '×');
                        button.addEventListener('click', function() {
                            characterPage.hide();
                            ui.system.style.display = '';
                            setTimeout(function() {
                                ui.click.configMenu();
                                ui.menuContainer.style.display = '';
                            }, 500);
                        });
                        return button;
                    })(),
                    title: ui.create.div('#dcfl_title', '联动卡'),
                };
                for (var charName in lib.characterPack['collab']) {
                    if (charName && lib.character[charName]) {
                        var charIntro = createCharacterIntro(charName);
                        if (charIntro) {
                            comps[charName] = charIntro;
                        }
                    }
                }
                for (var i in comps) {
                    if (comps[i]) {
                        characterPage.body.appendChild(comps[i]);
                    }
                }
                characterPage.comps = comps;
                lib.setScroll(characterPage.body);
                characterPage.show();
                return characterPage;
            };
                        
//===================================================//            
            game.oldCharacter = function() {
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
                    show: function() {
                        if (!this.body.parentNode && this.paBody) {
                            this.paBody.appendChild(this.body);
                        }
                        this.body.show();                        
                        this.body.style.display = 'block';
                        this.body.style.zIndex = '2025';
                        this.body.style.position = 'fixed';
                        this.body.style.top = '47.3%';
                        this.body.style.left = '50%';
                        this.body.style.transform = 'translate(-50%, -50%)';
                        this.body.style.backgroundColor = '#1a1a1a';
                        this.body.style.padding = '20px';
                        this.body.style.border = '2px solid black';
                        this.body.style.borderRadius = '8px';
                        this.body.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
                        this.body.style.width = '75%';
                        this.body.style.height = '72%';
                        this.body.style.overflow = 'auto';
                        this.body.style.textAlign = 'left';

                        return this;
                    },

                    hide: function() {
                        this.body.hide();
                        return this;
                    }
                };

                function createCharacterIntro(charName) {
                    var introClass = 'left';

                    function intro(name) {
                        var div = ui.create.div('.dcfl_intro_' + introClass);
                        introClass = introClass == 'left' ? 'right' : 'left';
                        var charData = lib.character[name];
                        if (!charData) return null;

                        var dComps = {
                            header: (function() {
                                var img = ui.create.div('.dcfl_intro_header');
                                img.style['background-image'] = 'url(' + lib.assetURL + 'image/character/' + name + '.jpg)';
                                return img;
                            })(),
                            infos: (function() {
                                var str = "";
                                if (name) str += get.translation(name) + '&nbsp;';
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
                    return intro(charName);
                }                
                var characterPage = new Page();
                characterPage.body = ui.create.div('#dcfl_page').hide();                
                var comps = {
                    closeButton: (function() {
                        var button = ui.create.div('#dcfl_closeButton', '×');
                        button.addEventListener('click', function() {
                            characterPage.hide();
                            ui.system.style.display = '';
                            setTimeout(function() {
                                ui.click.configMenu();
                                ui.menuContainer.style.display = '';
                            }, 500);
                        });
                        return button;
                    })(),
                    title: ui.create.div('#dcfl_title', '怀旧'),
                };
                for (var charName in lib.characterPack['old']) {
                    if (charName && lib.character[charName]) {
                        var charIntro = createCharacterIntro(charName);
                        if (charIntro) {
                            comps[charName] = charIntro;
                        }
                    }
                }
                for (var i in comps) {
                    if (comps[i]) {
                        characterPage.body.appendChild(comps[i]);
                    }
                }
                characterPage.comps = comps;
                lib.setScroll(characterPage.body);
                characterPage.show();
                return characterPage;
            };
                        
//===================================================//            
            game.offlineCharacter = function() {
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
                    show: function() {
                        if (!this.body.parentNode && this.paBody) {
                            this.paBody.appendChild(this.body);
                        }
                        this.body.show();                        
                        this.body.style.display = 'block';
                        this.body.style.zIndex = '2025';
                        this.body.style.position = 'fixed';
                        this.body.style.top = '47.3%';
                        this.body.style.left = '50%';
                        this.body.style.transform = 'translate(-50%, -50%)';
                        this.body.style.backgroundColor = '#1a1a1a';
                        this.body.style.padding = '20px';
                        this.body.style.border = '2px solid black';
                        this.body.style.borderRadius = '8px';
                        this.body.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
                        this.body.style.width = '75%';
                        this.body.style.height = '72%';
                        this.body.style.overflow = 'auto';
                        this.body.style.textAlign = 'left';

                        return this;
                    },

                    hide: function() {
                        this.body.hide();
                        return this;
                    }
                };

                function createCharacterIntro(charName) {
                    var introClass = 'left';

                    function intro(name) {
                        var div = ui.create.div('.dcfl_intro_' + introClass);
                        introClass = introClass == 'left' ? 'right' : 'left';
                        var charData = lib.character[name];
                        if (!charData) return null;

                        var dComps = {
                            header: (function() {
                                var img = ui.create.div('.dcfl_intro_header');
                                img.style['background-image'] = 'url(' + lib.assetURL + 'image/character/' + name + '.jpg)';
                                return img;
                            })(),
                            infos: (function() {
                                var str = "";
                                if (name) str += get.translation(name) + '&nbsp;';
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
                    return intro(charName);
                }                
                var characterPage = new Page();
                characterPage.body = ui.create.div('#dcfl_page').hide();                
                var comps = {
                    closeButton: (function() {
                        var button = ui.create.div('#dcfl_closeButton', '×');
                        button.addEventListener('click', function() {
                            characterPage.hide();
                            ui.system.style.display = '';
                            setTimeout(function() {
                                ui.click.configMenu();
                                ui.menuContainer.style.display = '';
                            }, 500);
                        });
                        return button;
                    })(),
                    title: ui.create.div('#dcfl_title', '线下武将'),
                };
                for (var charName in lib.characterPack['offline']) {
                    if (charName && lib.character[charName]) {
                        var charIntro = createCharacterIntro(charName);
                        if (charIntro) {
                            comps[charName] = charIntro;
                        }
                    }
                }
                for (var i in comps) {
                    if (comps[i]) {
                        characterPage.body.appendChild(comps[i]);
                    }
                }
                characterPage.comps = comps;
                lib.setScroll(characterPage.body);
                characterPage.show();
                return characterPage;
            };
                        
//===================================================//            
            game.jsrgCharacter = function() {
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
                    show: function() {
                        if (!this.body.parentNode && this.paBody) {
                            this.paBody.appendChild(this.body);
                        }
                        this.body.show();                        
                        this.body.style.display = 'block';
                        this.body.style.zIndex = '2025';
                        this.body.style.position = 'fixed';
                        this.body.style.top = '47.3%';
                        this.body.style.left = '50%';
                        this.body.style.transform = 'translate(-50%, -50%)';
                        this.body.style.backgroundColor = '#1a1a1a';
                        this.body.style.padding = '20px';
                        this.body.style.border = '2px solid black';
                        this.body.style.borderRadius = '8px';
                        this.body.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
                        this.body.style.width = '75%';
                        this.body.style.height = '72%';
                        this.body.style.overflow = 'auto';
                        this.body.style.textAlign = 'left';

                        return this;
                    },

                    hide: function() {
                        this.body.hide();
                        return this;
                    }
                };

                function createCharacterIntro(charName) {
                    var introClass = 'left';

                    function intro(name) {
                        var div = ui.create.div('.dcfl_intro_' + introClass);
                        introClass = introClass == 'left' ? 'right' : 'left';
                        var charData = lib.character[name];
                        if (!charData) return null;

                        var dComps = {
                            header: (function() {
                                var img = ui.create.div('.dcfl_intro_header');
                                img.style['background-image'] = 'url(' + lib.assetURL + 'image/character/' + name + '.jpg)';
                                return img;
                            })(),
                            infos: (function() {
                                var str = "";
                                if (name) str += get.translation(name) + '&nbsp;';
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
                    return intro(charName);
                }                
                var characterPage = new Page();
                characterPage.body = ui.create.div('#dcfl_page').hide();                
                var comps = {
                    closeButton: (function() {
                        var button = ui.create.div('#dcfl_closeButton', '×');
                        button.addEventListener('click', function() {
                            characterPage.hide();
                            ui.system.style.display = '';
                            setTimeout(function() {
                                ui.click.configMenu();
                                ui.menuContainer.style.display = '';
                            }, 500);
                        });
                        return button;
                    })(),
                    title: ui.create.div('#dcfl_title', '江山如故'),
                };
                for (var charName in lib.characterPack['jsrg']) {
                    if (charName && lib.character[charName]) {
                        var charIntro = createCharacterIntro(charName);
                        if (charIntro) {
                            comps[charName] = charIntro;
                        }
                    }
                }
                for (var i in comps) {
                    if (comps[i]) {
                        characterPage.body.appendChild(comps[i]);
                    }
                }
                characterPage.comps = comps;
                lib.setScroll(characterPage.body);
                characterPage.show();
                return characterPage;
            };
            
            //===================================================//            
            game.sxrmCharacter = function() {
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
                    show: function() {
                        if (!this.body.parentNode && this.paBody) {
                            this.paBody.appendChild(this.body);
                        }
                        this.body.show();                        
                        this.body.style.display = 'block';
                        this.body.style.zIndex = '2025';
                        this.body.style.position = 'fixed';
                        this.body.style.top = '47.3%';
                        this.body.style.left = '50%';
                        this.body.style.transform = 'translate(-50%, -50%)';
                        this.body.style.backgroundColor = '#1a1a1a';
                        this.body.style.padding = '20px';
                        this.body.style.border = '2px solid black';
                        this.body.style.borderRadius = '8px';
                        this.body.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
                        this.body.style.width = '75%';
                        this.body.style.height = '72%';
                        this.body.style.overflow = 'auto';
                        this.body.style.textAlign = 'left';

                        return this;
                    },

                    hide: function() {
                        this.body.hide();
                        return this;
                    }
                };

                function createCharacterIntro(charName) {
                    var introClass = 'left';

                    function intro(name) {
                        var div = ui.create.div('.dcfl_intro_' + introClass);
                        introClass = introClass == 'left' ? 'right' : 'left';
                        var charData = lib.character[name];
                        if (!charData) return null;

                        var dComps = {
                            header: (function() {
                                var img = ui.create.div('.dcfl_intro_header');
                                img.style['background-image'] = 'url(' + lib.assetURL + 'image/character/' + name + '.jpg)';
                                return img;
                            })(),
                            infos: (function() {
                                var str = "";
                                if (name) str += get.translation(name) + '&nbsp;';
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
                    return intro(charName);
                }                
                var characterPage = new Page();
                characterPage.body = ui.create.div('#dcfl_page').hide();                
                var comps = {
                    closeButton: (function() {
                        var button = ui.create.div('#dcfl_closeButton', '×');
                        button.addEventListener('click', function() {
                            characterPage.hide();
                            ui.system.style.display = '';
                            setTimeout(function() {
                                ui.click.configMenu();
                                ui.menuContainer.style.display = '';
                            }, 500);
                        });
                        return button;
                    })(),
                    title: ui.create.div('#dcfl_title', '蚀心入魔'),
                };
                for (var charName in lib.characterPack['sxrm']) {
                    if (charName && lib.character[charName]) {
                        var charIntro = createCharacterIntro(charName);
                        if (charIntro) {
                            comps[charName] = charIntro;
                        }
                    }
                }
                for (var i in comps) {
                    if (comps[i]) {
                        characterPage.body.appendChild(comps[i]);
                    }
                }
                characterPage.comps = comps;
                lib.setScroll(characterPage.body);
                characterPage.show();
                return characterPage;
            };
            
            //===================================================//            
            game.sixiangCharacter = function() {
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
                    show: function() {
                        if (!this.body.parentNode && this.paBody) {
                            this.paBody.appendChild(this.body);
                        }
                        this.body.show();                        
                        this.body.style.display = 'block';
                        this.body.style.zIndex = '2025';
                        this.body.style.position = 'fixed';
                        this.body.style.top = '47.3%';
                        this.body.style.left = '50%';
                        this.body.style.transform = 'translate(-50%, -50%)';
                        this.body.style.backgroundColor = '#1a1a1a';
                        this.body.style.padding = '20px';
                        this.body.style.border = '2px solid black';
                        this.body.style.borderRadius = '8px';
                        this.body.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
                        this.body.style.width = '75%';
                        this.body.style.height = '72%';
                        this.body.style.overflow = 'auto';
                        this.body.style.textAlign = 'left';

                        return this;
                    },

                    hide: function() {
                        this.body.hide();
                        return this;
                    }
                };

                function createCharacterIntro(charName) {
                    var introClass = 'left';

                    function intro(name) {
                        var div = ui.create.div('.dcfl_intro_' + introClass);
                        introClass = introClass == 'left' ? 'right' : 'left';
                        var charData = lib.character[name];
                        if (!charData) return null;

                        var dComps = {
                            header: (function() {
                                var img = ui.create.div('.dcfl_intro_header');
                                img.style['background-image'] = 'url(' + lib.assetURL + 'image/character/' + name + '.jpg)';
                                return img;
                            })(),
                            infos: (function() {
                                var str = "";
                                if (name) str += get.translation(name) + '&nbsp;';
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
                    return intro(charName);
                }                
                var characterPage = new Page();
                characterPage.body = ui.create.div('#dcfl_page').hide();                
                var comps = {
                    closeButton: (function() {
                        var button = ui.create.div('#dcfl_closeButton', '×');
                        button.addEventListener('click', function() {
                            characterPage.hide();
                            ui.system.style.display = '';
                            setTimeout(function() {
                                ui.click.configMenu();
                                ui.menuContainer.style.display = '';
                            }, 500);
                        });
                        return button;
                    })(),
                    title: ui.create.div('#dcfl_title', '四象封印'),
                };
                for (var charName in lib.characterPack['sixiang']) {
                    if (charName && lib.character[charName]) {
                        var charIntro = createCharacterIntro(charName);
                        if (charIntro) {
                            comps[charName] = charIntro;
                        }
                    }
                }
                for (var i in comps) {
                    if (comps[i]) {
                        characterPage.body.appendChild(comps[i]);
                    }
                }
                characterPage.comps = comps;
                lib.setScroll(characterPage.body);
                characterPage.show();
                return characterPage;
            };
            
            //===================================================//            
            game.dddCharacter = function() {
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
                    show: function() {
                        if (!this.body.parentNode && this.paBody) {
                            this.paBody.appendChild(this.body);
                        }
                        this.body.show();                        
                        this.body.style.display = 'block';
                        this.body.style.zIndex = '2025';
                        this.body.style.position = 'fixed';
                        this.body.style.top = '47.3%';
                        this.body.style.left = '50%';
                        this.body.style.transform = 'translate(-50%, -50%)';
                        this.body.style.backgroundColor = '#1a1a1a';
                        this.body.style.padding = '20px';
                        this.body.style.border = '2px solid black';
                        this.body.style.borderRadius = '8px';
                        this.body.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
                        this.body.style.width = '75%';
                        this.body.style.height = '72%';
                        this.body.style.overflow = 'auto';
                        this.body.style.textAlign = 'left';

                        return this;
                    },

                    hide: function() {
                        this.body.hide();
                        return this;
                    }
                };

                function createCharacterIntro(charName) {
                    var introClass = 'left';

                    function intro(name) {
                        var div = ui.create.div('.dcfl_intro_' + introClass);
                        introClass = introClass == 'left' ? 'right' : 'left';
                        var charData = lib.character[name];
                        if (!charData) return null;

                        var dComps = {
                            header: (function() {
                                var img = ui.create.div('.dcfl_intro_header');
                                img.style['background-image'] = 'url(' + lib.assetURL + 'image/character/' + name + '.jpg)';
                                return img;
                            })(),
                            infos: (function() {
                                var str = "";
                                if (name) str += get.translation(name) + '&nbsp;';
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
                    return intro(charName);
                }                
                var characterPage = new Page();
                characterPage.body = ui.create.div('#dcfl_page').hide();                
                var comps = {
                    closeButton: (function() {
                        var button = ui.create.div('#dcfl_closeButton', '×');
                        button.addEventListener('click', function() {
                            characterPage.hide();
                            ui.system.style.display = '';
                            setTimeout(function() {
                                ui.click.configMenu();
                                ui.menuContainer.style.display = '';
                            }, 500);
                        });
                        return button;
                    })(),
                    title: ui.create.div('#dcfl_title', '3D精选'),
                };
                for (var charName in lib.characterPack['ddd']) {
                    if (charName && lib.character[charName]) {
                        var charIntro = createCharacterIntro(charName);
                        if (charIntro) {
                            comps[charName] = charIntro;
                        }
                    }
                }
                for (var i in comps) {
                    if (comps[i]) {
                        characterPage.body.appendChild(comps[i]);
                    }
                }
                characterPage.comps = comps;
                lib.setScroll(characterPage.body);
                characterPage.show();
                return characterPage;
            };
            //===================================================//            
            game.wandianCharacter = function() {
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
                    show: function() {
                        if (!this.body.parentNode && this.paBody) {
                            this.paBody.appendChild(this.body);
                        }
                        this.body.show();                        
                        this.body.style.display = 'block';
                        this.body.style.zIndex = '2025';
                        this.body.style.position = 'fixed';
                        this.body.style.top = '47.3%';
                        this.body.style.left = '50%';
                        this.body.style.transform = 'translate(-50%, -50%)';
                        this.body.style.backgroundColor = '#1a1a1a';
                        this.body.style.padding = '20px';
                        this.body.style.border = '2px solid black';
                        this.body.style.borderRadius = '8px';
                        this.body.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
                        this.body.style.width = '75%';
                        this.body.style.height = '72%';
                        this.body.style.overflow = 'auto';
                        this.body.style.textAlign = 'left';

                        return this;
                    },

                    hide: function() {
                        this.body.hide();
                        return this;
                    }
                };

                function createCharacterIntro(charName) {
                    var introClass = 'left';

                    function intro(name) {
                        var div = ui.create.div('.dcfl_intro_' + introClass);
                        introClass = introClass == 'left' ? 'right' : 'left';
                        var charData = lib.character[name];
                        if (!charData) return null;

                        var dComps = {
                            header: (function() {
                                var img = ui.create.div('.dcfl_intro_header');
                                img.style['background-image'] = 'url(' + lib.assetURL + 'image/character/' + name + '.jpg)';
                                return img;
                            })(),
                            infos: (function() {
                                var str = "";
                                if (name) str += get.translation(name) + '&nbsp;';
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
                    return intro(charName);
                }                
                var characterPage = new Page();
                characterPage.body = ui.create.div('#dcfl_page').hide();                
                var comps = {
                    closeButton: (function() {
                        var button = ui.create.div('#dcfl_closeButton', '×');
                        button.addEventListener('click', function() {
                            characterPage.hide();
                            ui.system.style.display = '';
                            setTimeout(function() {
                                ui.click.configMenu();
                                ui.menuContainer.style.display = '';
                            }, 500);
                        });
                        return button;
                    })(),
                    title: ui.create.div('#dcfl_title', '玩点论杀'),
                };
                for (var charName in lib.characterPack['wandian']) {
                    if (charName && lib.character[charName]) {
                        var charIntro = createCharacterIntro(charName);
                        if (charIntro) {
                            comps[charName] = charIntro;
                        }
                    }
                }
                for (var i in comps) {
                    if (comps[i]) {
                        characterPage.body.appendChild(comps[i]);
                    }
                }
                characterPage.comps = comps;
                lib.setScroll(characterPage.body);
                characterPage.show();
                return characterPage;
            };
            
            //===================================================//            
            game.yxsCharacter = function() {
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
                    show: function() {
                        if (!this.body.parentNode && this.paBody) {
                            this.paBody.appendChild(this.body);
                        }
                        this.body.show();                        
                        this.body.style.display = 'block';
                        this.body.style.zIndex = '2025';
                        this.body.style.position = 'fixed';
                        this.body.style.top = '47.3%';
                        this.body.style.left = '50%';
                        this.body.style.transform = 'translate(-50%, -50%)';
                        this.body.style.backgroundColor = '#1a1a1a';
                        this.body.style.padding = '20px';
                        this.body.style.border = '2px solid black';
                        this.body.style.borderRadius = '8px';
                        this.body.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
                        this.body.style.width = '75%';
                        this.body.style.height = '72%';
                        this.body.style.overflow = 'auto';
                        this.body.style.textAlign = 'left';

                        return this;
                    },

                    hide: function() {
                        this.body.hide();
                        return this;
                    }
                };

                function createCharacterIntro(charName) {
                    var introClass = 'left';

                    function intro(name) {
                        var div = ui.create.div('.dcfl_intro_' + introClass);
                        introClass = introClass == 'left' ? 'right' : 'left';
                        var charData = lib.character[name];
                        if (!charData) return null;

                        var dComps = {
                            header: (function() {
                                var img = ui.create.div('.dcfl_intro_header');
                                img.style['background-image'] = 'url(' + lib.assetURL + 'image/character/' + name + '.jpg)';
                                return img;
                            })(),
                            infos: (function() {
                                var str = "";
                                if (name) str += get.translation(name) + '&nbsp;';
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
                    return intro(charName);
                }                
                var characterPage = new Page();
                characterPage.body = ui.create.div('#dcfl_page').hide();                
                var comps = {
                    closeButton: (function() {
                        var button = ui.create.div('#dcfl_closeButton', '×');
                        button.addEventListener('click', function() {
                            characterPage.hide();
                            ui.system.style.display = '';
                            setTimeout(function() {
                                ui.click.configMenu();
                                ui.menuContainer.style.display = '';
                            }, 500);
                        });
                        return button;
                    })(),
                    title: ui.create.div('#dcfl_title', '英雄杀'),
                };
                for (var charName in lib.characterPack['yxs']) {
                    if (charName && lib.character[charName]) {
                        var charIntro = createCharacterIntro(charName);
                        if (charIntro) {
                            comps[charName] = charIntro;
                        }
                    }
                }
                for (var i in comps) {
                    if (comps[i]) {
                        characterPage.body.appendChild(comps[i]);
                    }
                }
                characterPage.comps = comps;
                lib.setScroll(characterPage.body);
                characterPage.show();
                return characterPage;
            };
                        
            //===================================================//            
            game.diyCharacter = function() {
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
                    show: function() {
                        if (!this.body.parentNode && this.paBody) {
                            this.paBody.appendChild(this.body);
                        }
                        this.body.show();                        
                        this.body.style.display = 'block';
                        this.body.style.zIndex = '2025';
                        this.body.style.position = 'fixed';
                        this.body.style.top = '47.3%';
                        this.body.style.left = '50%';
                        this.body.style.transform = 'translate(-50%, -50%)';
                        this.body.style.backgroundColor = '#1a1a1a';
                        this.body.style.padding = '20px';
                        this.body.style.border = '2px solid black';
                        this.body.style.borderRadius = '8px';
                        this.body.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
                        this.body.style.width = '75%';
                        this.body.style.height = '72%';
                        this.body.style.overflow = 'auto';
                        this.body.style.textAlign = 'left';

                        return this;
                    },

                    hide: function() {
                        this.body.hide();
                        return this;
                    }
                };

                function createCharacterIntro(charName) {
                    var introClass = 'left';

                    function intro(name) {
                        var div = ui.create.div('.dcfl_intro_' + introClass);
                        introClass = introClass == 'left' ? 'right' : 'left';
                        var charData = lib.character[name];
                        if (!charData) return null;

                        var dComps = {
                            header: (function() {
                                var img = ui.create.div('.dcfl_intro_header');
                                img.style['background-image'] = 'url(' + lib.assetURL + 'image/character/' + name + '.jpg)';
                                return img;
                            })(),
                            infos: (function() {
                                var str = "";
                                if (name) str += get.translation(name) + '&nbsp;';
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
                    return intro(charName);
                }                
                var characterPage = new Page();
                characterPage.body = ui.create.div('#dcfl_page').hide();                
                var comps = {
                    closeButton: (function() {
                        var button = ui.create.div('#dcfl_closeButton', '×');
                        button.addEventListener('click', function() {
                            characterPage.hide();
                            ui.system.style.display = '';
                            setTimeout(function() {
                                ui.click.configMenu();
                                ui.menuContainer.style.display = '';
                            }, 500);
                        });
                        return button;
                    })(),
                    title: ui.create.div('#dcfl_title', 'DIY'),
                };
                for (var charName in lib.characterPack['diy']) {
                    if (charName && lib.character[charName]) {
                        var charIntro = createCharacterIntro(charName);
                        if (charIntro) {
                            comps[charName] = charIntro;
                        }
                    }
                }
                for (var i in comps) {
                    if (comps[i]) {
                        characterPage.body.appendChild(comps[i]);
                    }
                }
                characterPage.comps = comps;
                lib.setScroll(characterPage.body);
                characterPage.show();
                return characterPage;
            };
            
            //===================================================//            
            game.keyCharacter = function() {
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
                    show: function() {
                        if (!this.body.parentNode && this.paBody) {
                            this.paBody.appendChild(this.body);
                        }
                        this.body.show();                        
                        this.body.style.display = 'block';
                        this.body.style.zIndex = '2025';
                        this.body.style.position = 'fixed';
                        this.body.style.top = '47.3%';
                        this.body.style.left = '50%';
                        this.body.style.transform = 'translate(-50%, -50%)';
                        this.body.style.backgroundColor = '#1a1a1a';
                        this.body.style.padding = '20px';
                        this.body.style.border = '2px solid black';
                        this.body.style.borderRadius = '8px';
                        this.body.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
                        this.body.style.width = '75%';
                        this.body.style.height = '72%';
                        this.body.style.overflow = 'auto';
                        this.body.style.textAlign = 'left';

                        return this;
                    },

                    hide: function() {
                        this.body.hide();
                        return this;
                    }
                };

                function createCharacterIntro(charName) {
                    var introClass = 'left';

                    function intro(name) {
                        var div = ui.create.div('.dcfl_intro_' + introClass);
                        introClass = introClass == 'left' ? 'right' : 'left';
                        var charData = lib.character[name];
                        if (!charData) return null;

                        var dComps = {
                            header: (function() {
                                var img = ui.create.div('.dcfl_intro_header');
                                img.style['background-image'] = 'url(' + lib.assetURL + 'image/character/' + name + '.jpg)';
                                return img;
                            })(),
                            infos: (function() {
                                var str = "";
                                if (name) str += get.translation(name) + '&nbsp;';
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
                    return intro(charName);
                }                
                var characterPage = new Page();
                characterPage.body = ui.create.div('#dcfl_page').hide();                
                var comps = {
                    closeButton: (function() {
                        var button = ui.create.div('#dcfl_closeButton', '×');
                        button.addEventListener('click', function() {
                            characterPage.hide();
                            ui.system.style.display = '';
                            setTimeout(function() {
                                ui.click.configMenu();
                                ui.menuContainer.style.display = '';
                            }, 500);
                        });
                        return button;
                    })(),
                    title: ui.create.div('#dcfl_title', 'KEY'),
                };
                for (var charName in lib.characterPack['key']) {
                    if (charName && lib.character[charName]) {
                        var charIntro = createCharacterIntro(charName);
                        if (charIntro) {
                            comps[charName] = charIntro;
                        }
                    }
                }
                for (var i in comps) {
                    if (comps[i]) {
                        characterPage.body.appendChild(comps[i]);
                    }
                }
                characterPage.comps = comps;
                lib.setScroll(characterPage.body);
                characterPage.show();
                return characterPage;
            };
            
            //===================================================//            
            game.xianjianCharacter = function() {
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
                    show: function() {
                        if (!this.body.parentNode && this.paBody) {
                            this.paBody.appendChild(this.body);
                        }
                        this.body.show();                        
                        this.body.style.display = 'block';
                        this.body.style.zIndex = '2025';
                        this.body.style.position = 'fixed';
                        this.body.style.top = '47.3%';
                        this.body.style.left = '50%';
                        this.body.style.transform = 'translate(-50%, -50%)';
                        this.body.style.backgroundColor = '#1a1a1a';
                        this.body.style.padding = '20px';
                        this.body.style.border = '2px solid black';
                        this.body.style.borderRadius = '8px';
                        this.body.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
                        this.body.style.width = '75%';
                        this.body.style.height = '72%';
                        this.body.style.overflow = 'auto';
                        this.body.style.textAlign = 'left';

                        return this;
                    },

                    hide: function() {
                        this.body.hide();
                        return this;
                    }
                };

                function createCharacterIntro(charName) {
                    var introClass = 'left';

                    function intro(name) {
                        var div = ui.create.div('.dcfl_intro_' + introClass);
                        introClass = introClass == 'left' ? 'right' : 'left';
                        var charData = lib.character[name];
                        if (!charData) return null;

                        var dComps = {
                            header: (function() {
                                var img = ui.create.div('.dcfl_intro_header');
                                img.style['background-image'] = 'url(' + lib.assetURL + 'image/character/' + name + '.jpg)';
                                return img;
                            })(),
                            infos: (function() {
                                var str = "";
                                if (name) str += get.translation(name) + '&nbsp;';
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
                    return intro(charName);
                }                
                var characterPage = new Page();
                characterPage.body = ui.create.div('#dcfl_page').hide();                
                var comps = {
                    closeButton: (function() {
                        var button = ui.create.div('#dcfl_closeButton', '×');
                        button.addEventListener('click', function() {
                            characterPage.hide();
                            ui.system.style.display = '';
                            setTimeout(function() {
                                ui.click.configMenu();
                                ui.menuContainer.style.display = '';
                            }, 500);
                        });
                        return button;
                    })(),
                    title: ui.create.div('#dcfl_title', '仙剑奇侠传'),
                };
                for (var charName in lib.characterPack['xianjian']) {
                    if (charName && lib.character[charName]) {
                        var charIntro = createCharacterIntro(charName);
                        if (charIntro) {
                            comps[charName] = charIntro;
                        }
                    }
                }
                for (var i in comps) {
                    if (comps[i]) {
                        characterPage.body.appendChild(comps[i]);
                    }
                }
                characterPage.comps = comps;
                lib.setScroll(characterPage.body);
                characterPage.show();
                return characterPage;
            };
            
            //===================================================//            
            game.hearthCharacter = function() {
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
                    show: function() {
                        if (!this.body.parentNode && this.paBody) {
                            this.paBody.appendChild(this.body);
                        }
                        this.body.show();                        
                        this.body.style.display = 'block';
                        this.body.style.zIndex = '2025';
                        this.body.style.position = 'fixed';
                        this.body.style.top = '47.3%';
                        this.body.style.left = '50%';
                        this.body.style.transform = 'translate(-50%, -50%)';
                        this.body.style.backgroundColor = '#1a1a1a';
                        this.body.style.padding = '20px';
                        this.body.style.border = '2px solid black';
                        this.body.style.borderRadius = '8px';
                        this.body.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
                        this.body.style.width = '75%';
                        this.body.style.height = '72%';
                        this.body.style.overflow = 'auto';
                        this.body.style.textAlign = 'left';

                        return this;
                    },

                    hide: function() {
                        this.body.hide();
                        return this;
                    }
                };

                function createCharacterIntro(charName) {
                    var introClass = 'left';

                    function intro(name) {
                        var div = ui.create.div('.dcfl_intro_' + introClass);
                        introClass = introClass == 'left' ? 'right' : 'left';
                        var charData = lib.character[name];
                        if (!charData) return null;

                        var dComps = {
                            header: (function() {
                                var img = ui.create.div('.dcfl_intro_header');
                                img.style['background-image'] = 'url(' + lib.assetURL + 'image/character/' + name + '.jpg)';
                                return img;
                            })(),
                            infos: (function() {
                                var str = "";
                                if (name) str += get.translation(name) + '&nbsp;';
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
                    return intro(charName);
                }                
                var characterPage = new Page();
                characterPage.body = ui.create.div('#dcfl_page').hide();                
                var comps = {
                    closeButton: (function() {
                        var button = ui.create.div('#dcfl_closeButton', '×');
                        button.addEventListener('click', function() {
                            characterPage.hide();
                            ui.system.style.display = '';
                            setTimeout(function() {
                                ui.click.configMenu();
                                ui.menuContainer.style.display = '';
                            }, 500);
                        });
                        return button;
                    })(),
                    title: ui.create.div('#dcfl_title', '炉石传说'),
                };
                for (var charName in lib.characterPack['hearth']) {
                    if (charName && lib.character[charName]) {
                        var charIntro = createCharacterIntro(charName);
                        if (charIntro) {
                            comps[charName] = charIntro;
                        }
                    }
                }
                for (var i in comps) {
                    if (comps[i]) {
                        characterPage.body.appendChild(comps[i]);
                    }
                }
                characterPage.comps = comps;
                lib.setScroll(characterPage.body);
                characterPage.show();
                return characterPage;
            };
            
            //===================================================//            
            game.gujianCharacter = function() {
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
                    show: function() {
                        if (!this.body.parentNode && this.paBody) {
                            this.paBody.appendChild(this.body);
                        }
                        this.body.show();                        
                        this.body.style.display = 'block';
                        this.body.style.zIndex = '2025';
                        this.body.style.position = 'fixed';
                        this.body.style.top = '47.3%';
                        this.body.style.left = '50%';
                        this.body.style.transform = 'translate(-50%, -50%)';
                        this.body.style.backgroundColor = '#1a1a1a';
                        this.body.style.padding = '20px';
                        this.body.style.border = '2px solid black';
                        this.body.style.borderRadius = '8px';
                        this.body.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
                        this.body.style.width = '75%';
                        this.body.style.height = '72%';
                        this.body.style.overflow = 'auto';
                        this.body.style.textAlign = 'left';

                        return this;
                    },

                    hide: function() {
                        this.body.hide();
                        return this;
                    }
                };

                function createCharacterIntro(charName) {
                    var introClass = 'left';

                    function intro(name) {
                        var div = ui.create.div('.dcfl_intro_' + introClass);
                        introClass = introClass == 'left' ? 'right' : 'left';
                        var charData = lib.character[name];
                        if (!charData) return null;

                        var dComps = {
                            header: (function() {
                                var img = ui.create.div('.dcfl_intro_header');
                                img.style['background-image'] = 'url(' + lib.assetURL + 'image/character/' + name + '.jpg)';
                                return img;
                            })(),
                            infos: (function() {
                                var str = "";
                                if (name) str += get.translation(name) + '&nbsp;';
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
                    return intro(charName);
                }                
                var characterPage = new Page();
                characterPage.body = ui.create.div('#dcfl_page').hide();                
                var comps = {
                    closeButton: (function() {
                        var button = ui.create.div('#dcfl_closeButton', '×');
                        button.addEventListener('click', function() {
                            characterPage.hide();
                            ui.system.style.display = '';
                            setTimeout(function() {
                                ui.click.configMenu();
                                ui.menuContainer.style.display = '';
                            }, 500);
                        });
                        return button;
                    })(),
                    title: ui.create.div('#dcfl_title', '古剑奇谭'),
                };
                for (var charName in lib.characterPack['gujian']) {
                    if (charName && lib.character[charName]) {
                        var charIntro = createCharacterIntro(charName);
                        if (charIntro) {
                            comps[charName] = charIntro;
                        }
                    }
                }
                for (var i in comps) {
                    if (comps[i]) {
                        characterPage.body.appendChild(comps[i]);
                    }
                }
                characterPage.comps = comps;
                lib.setScroll(characterPage.body);
                characterPage.show();
                return characterPage;
            };
            
            //===================================================//            
            game.owCharacter = function() {
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
                    show: function() {
                        if (!this.body.parentNode && this.paBody) {
                            this.paBody.appendChild(this.body);
                        }
                        this.body.show();                        
                        this.body.style.display = 'block';
                        this.body.style.zIndex = '2025';
                        this.body.style.position = 'fixed';
                        this.body.style.top = '47.3%';
                        this.body.style.left = '50%';
                        this.body.style.transform = 'translate(-50%, -50%)';
                        this.body.style.backgroundColor = '#1a1a1a';
                        this.body.style.padding = '20px';
                        this.body.style.border = '2px solid black';
                        this.body.style.borderRadius = '8px';
                        this.body.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
                        this.body.style.width = '75%';
                        this.body.style.height = '72%';
                        this.body.style.overflow = 'auto';
                        this.body.style.textAlign = 'left';

                        return this;
                    },

                    hide: function() {
                        this.body.hide();
                        return this;
                    }
                };

                function createCharacterIntro(charName) {
                    var introClass = 'left';

                    function intro(name) {
                        var div = ui.create.div('.dcfl_intro_' + introClass);
                        introClass = introClass == 'left' ? 'right' : 'left';
                        var charData = lib.character[name];
                        if (!charData) return null;

                        var dComps = {
                            header: (function() {
                                var img = ui.create.div('.dcfl_intro_header');
                                img.style['background-image'] = 'url(' + lib.assetURL + 'image/character/' + name + '.jpg)';
                                return img;
                            })(),
                            infos: (function() {
                                var str = "";
                                if (name) str += get.translation(name) + '&nbsp;';
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
                    return intro(charName);
                }                
                var characterPage = new Page();
                characterPage.body = ui.create.div('#dcfl_page').hide();                
                var comps = {
                    closeButton: (function() {
                        var button = ui.create.div('#dcfl_closeButton', '×');
                        button.addEventListener('click', function() {
                            characterPage.hide();
                            ui.system.style.display = '';
                            setTimeout(function() {
                                ui.click.configMenu();
                                ui.menuContainer.style.display = '';
                            }, 500);
                        });
                        return button;
                    })(),
                    title: ui.create.div('#dcfl_title', '守望先锋'),
                };
                for (var charName in lib.characterPack['ow']) {
                    if (charName && lib.character[charName]) {
                        var charIntro = createCharacterIntro(charName);
                        if (charIntro) {
                            comps[charName] = charIntro;
                        }
                    }
                }
                for (var i in comps) {
                    if (comps[i]) {
                        characterPage.body.appendChild(comps[i]);
                    }
                }
                characterPage.comps = comps;
                lib.setScroll(characterPage.body);
                characterPage.show();
                return characterPage;
            };
            
            //===================================================//            
            game.swdCharacter = function() {
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
                    show: function() {
                        if (!this.body.parentNode && this.paBody) {
                            this.paBody.appendChild(this.body);
                        }
                        this.body.show();                        
                        this.body.style.display = 'block';
                        this.body.style.zIndex = '2025';
                        this.body.style.position = 'fixed';
                        this.body.style.top = '47.3%';
                        this.body.style.left = '50%';
                        this.body.style.transform = 'translate(-50%, -50%)';
                        this.body.style.backgroundColor = '#1a1a1a';
                        this.body.style.padding = '20px';
                        this.body.style.border = '2px solid black';
                        this.body.style.borderRadius = '8px';
                        this.body.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
                        this.body.style.width = '75%';
                        this.body.style.height = '72%';
                        this.body.style.overflow = 'auto';
                        this.body.style.textAlign = 'left';

                        return this;
                    },

                    hide: function() {
                        this.body.hide();
                        return this;
                    }
                };

                function createCharacterIntro(charName) {
                    var introClass = 'left';

                    function intro(name) {
                        var div = ui.create.div('.dcfl_intro_' + introClass);
                        introClass = introClass == 'left' ? 'right' : 'left';
                        var charData = lib.character[name];
                        if (!charData) return null;

                        var dComps = {
                            header: (function() {
                                var img = ui.create.div('.dcfl_intro_header');
                                img.style['background-image'] = 'url(' + lib.assetURL + 'image/character/' + name + '.jpg)';
                                return img;
                            })(),
                            infos: (function() {
                                var str = "";
                                if (name) str += get.translation(name) + '&nbsp;';
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
                    return intro(charName);
                }                
                var characterPage = new Page();
                characterPage.body = ui.create.div('#dcfl_page').hide();                
                var comps = {
                    closeButton: (function() {
                        var button = ui.create.div('#dcfl_closeButton', '×');
                        button.addEventListener('click', function() {
                            characterPage.hide();
                            ui.system.style.display = '';
                            setTimeout(function() {
                                ui.click.configMenu();
                                ui.menuContainer.style.display = '';
                            }, 500);
                        });
                        return button;
                    })(),
                    title: ui.create.div('#dcfl_title', '轩辕剑'),
                };
                for (var charName in lib.characterPack['swd']) {
                    if (charName && lib.character[charName]) {
                        var charIntro = createCharacterIntro(charName);
                        if (charIntro) {
                            comps[charName] = charIntro;
                        }
                    }
                }
                for (var i in comps) {
                    if (comps[i]) {
                        characterPage.body.appendChild(comps[i]);
                    }
                }
                characterPage.comps = comps;
                lib.setScroll(characterPage.body);
                characterPage.show();
                return characterPage;
            };
            
            //===================================================//            
            game.gwentCharacter = function() {
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
                    show: function() {
                        if (!this.body.parentNode && this.paBody) {
                            this.paBody.appendChild(this.body);
                        }
                        this.body.show();                        
                        this.body.style.display = 'block';
                        this.body.style.zIndex = '2025';
                        this.body.style.position = 'fixed';
                        this.body.style.top = '47.3%';
                        this.body.style.left = '50%';
                        this.body.style.transform = 'translate(-50%, -50%)';
                        this.body.style.backgroundColor = '#1a1a1a';
                        this.body.style.padding = '20px';
                        this.body.style.border = '2px solid black';
                        this.body.style.borderRadius = '8px';
                        this.body.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
                        this.body.style.width = '75%';
                        this.body.style.height = '72%';
                        this.body.style.overflow = 'auto';
                        this.body.style.textAlign = 'left';

                        return this;
                    },

                    hide: function() {
                        this.body.hide();
                        return this;
                    }
                };

                function createCharacterIntro(charName) {
                    var introClass = 'left';

                    function intro(name) {
                        var div = ui.create.div('.dcfl_intro_' + introClass);
                        introClass = introClass == 'left' ? 'right' : 'left';
                        var charData = lib.character[name];
                        if (!charData) return null;

                        var dComps = {
                            header: (function() {
                                var img = ui.create.div('.dcfl_intro_header');
                                img.style['background-image'] = 'url(' + lib.assetURL + 'image/character/' + name + '.jpg)';
                                return img;
                            })(),
                            infos: (function() {
                                var str = "";
                                if (name) str += get.translation(name) + '&nbsp;';
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
                    return intro(charName);
                }                
                var characterPage = new Page();
                characterPage.body = ui.create.div('#dcfl_page').hide();                
                var comps = {
                    closeButton: (function() {
                        var button = ui.create.div('#dcfl_closeButton', '×');
                        button.addEventListener('click', function() {
                            characterPage.hide();
                            ui.system.style.display = '';
                            setTimeout(function() {
                                ui.click.configMenu();
                                ui.menuContainer.style.display = '';
                            }, 500);
                        });
                        return button;
                    })(),
                    title: ui.create.div('#dcfl_title', '昆特牌'),
                };
                for (var charName in lib.characterPack['gwent']) {
                    if (charName && lib.character[charName]) {
                        var charIntro = createCharacterIntro(charName);
                        if (charIntro) {
                            comps[charName] = charIntro;
                        }
                    }
                }
                for (var i in comps) {
                    if (comps[i]) {
                        characterPage.body.appendChild(comps[i]);
                    }
                }
                characterPage.comps = comps;
                lib.setScroll(characterPage.body);
                characterPage.show();
                return characterPage;
            };
            
            //===================================================//            
            game.mtgCharacter = function() {
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
                    show: function() {
                        if (!this.body.parentNode && this.paBody) {
                            this.paBody.appendChild(this.body);
                        }
                        this.body.show();                        
                        this.body.style.display = 'block';
                        this.body.style.zIndex = '2025';
                        this.body.style.position = 'fixed';
                        this.body.style.top = '47.3%';
                        this.body.style.left = '50%';
                        this.body.style.transform = 'translate(-50%, -50%)';
                        this.body.style.backgroundColor = '#1a1a1a';
                        this.body.style.padding = '20px';
                        this.body.style.border = '2px solid black';
                        this.body.style.borderRadius = '8px';
                        this.body.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
                        this.body.style.width = '75%';
                        this.body.style.height = '72%';
                        this.body.style.overflow = 'auto';
                        this.body.style.textAlign = 'left';

                        return this;
                    },

                    hide: function() {
                        this.body.hide();
                        return this;
                    }
                };

                function createCharacterIntro(charName) {
                    var introClass = 'left';

                    function intro(name) {
                        var div = ui.create.div('.dcfl_intro_' + introClass);
                        introClass = introClass == 'left' ? 'right' : 'left';
                        var charData = lib.character[name];
                        if (!charData) return null;

                        var dComps = {
                            header: (function() {
                                var img = ui.create.div('.dcfl_intro_header');
                                img.style['background-image'] = 'url(' + lib.assetURL + 'image/character/' + name + '.jpg)';
                                return img;
                            })(),
                            infos: (function() {
                                var str = "";
                                if (name) str += get.translation(name) + '&nbsp;';
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
                    return intro(charName);
                }                
                var characterPage = new Page();
                characterPage.body = ui.create.div('#dcfl_page').hide();                
                var comps = {
                    closeButton: (function() {
                        var button = ui.create.div('#dcfl_closeButton', '×');
                        button.addEventListener('click', function() {
                            characterPage.hide();
                            ui.system.style.display = '';
                            setTimeout(function() {
                                ui.click.configMenu();
                                ui.menuContainer.style.display = '';
                            }, 500);
                        });
                        return button;
                    })(),
                    title: ui.create.div('#dcfl_title', '万智牌'),
                };
                for (var charName in lib.characterPack['mtg']) {
                    if (charName && lib.character[charName]) {
                        var charIntro = createCharacterIntro(charName);
                        if (charIntro) {
                            comps[charName] = charIntro;
                        }
                    }
                }
                for (var i in comps) {
                    if (comps[i]) {
                        characterPage.body.appendChild(comps[i]);
                    }
                }
                characterPage.comps = comps;
                lib.setScroll(characterPage.body);
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
            "dcfl_standard": {
                name: '<div class="dcfl_menu">标准包<font size="3px">⇨</font></div>',
                "clear": true,
                "onclick": function() {
                    game.standardCharacter();
                },
            },
            "dcfl_refresh": {
                name: '<div class="dcfl_menu">界限突破<font size="3px">⇨</font></div>',
                "clear": true,
                "onclick": function() {
                    game.refreshCharacter();
                },
            },
            "dcfl_shenhua": {
                name: '<div class="dcfl_menu">神话再临<font size="3px">⇨</font></div>',
                "clear": true,
                "onclick": function() {
                    game.shenhuaCharacter();
                },
            },
            "dcfl_yijiang": {
                name: '<div class="dcfl_menu">一将成名<font size="3px">⇨</font></div>',
                "clear": true,
                "onclick": function() {
                    game.yijiangCharacter();
                },
            },
            "dcfl_extra": {
                name: '<div class="dcfl_menu">神将<font size="3px">⇨</font></div>',
                "clear": true,
                "onclick": function() {
                    game.extraCharacter();
                },
            },
            "dcfl_sp": {
                name: '<div class="dcfl_menu">璀璨星河<font size="3px">⇨</font></div>',
                "clear": true,
                "onclick": function() {
                    game.spCharacter();
                },
            },
            "dcfl_sp2": {
                name: '<div class="dcfl_menu">系列专属<font size="3px">⇨</font></div>',
                "clear": true,
                "onclick": function() {
                    game.sp2Character();
                },
            },
            "dcfl_newjiang": {
                name: '<div class="dcfl_menu">新一将成名<font size="3px">⇨</font></div>',
                "clear": true,
                "onclick": function() {
                    game.newjiangCharacter();
                },
            },
            "dcfl_onlyOL": {
                name: '<div class="dcfl_menu">OL专属<font size="3px">⇨</font></div>',
                "clear": true,
                "onclick": function() {
                    game.onlyOLCharacter();
                },
            },
            "dcfl_yingbian": {
                name: '<div class="dcfl_menu">文德武备<font size="3px">⇨</font></div>',
                "clear": true,
                "onclick": function() {
                    game.yingbianCharacter();
                },
            },
            "dcfl_clan": {
                name: '<div class="dcfl_menu">门阀士族<font size="3px">⇨</font></div>',
                "clear": true,
                "onclick": function() {
                    game.clanCharacter();
                },
            },
            "dcfl_huicui": {
                name: '<div class="dcfl_menu">群英荟萃<font size="3px">⇨</font></div>',
                "clear": true,
                "onclick": function() {
                    game.huicuiCharacter();
                },
            },
            "dcfl_xianding": {
                name: '<div class="dcfl_menu">限定专属<font size="3px">⇨</font></div>',
                "clear": true,
                "onclick": function() {
                    game.xiandingCharacter();
                },
            },
            "dcfl_mobile": {
                name: '<div class="dcfl_menu">移动版<font size="3px">⇨</font></div>',
                "clear": true,
                "onclick": function() {
                    game.mobileCharacter();
                },
            },
            "dcfl_shiji": {
                name: '<div class="dcfl_menu">始计篇<font size="3px">⇨</font></div>',
                "clear": true,
                "onclick": function() {
                    game.shijiCharacter();
                },
            },
            "dcfl_sb": {
                name: '<div class="dcfl_menu">谋攻篇<font size="3px">⇨</font></div>',
                "clear": true,
                "onclick": function() {
                    game.sbCharacter();
                },
            },
            "dcfl_tw": {
                name: '<div class="dcfl_menu">外服武将<font size="3px">⇨</font></div>',
                "clear": true,
                "onclick": function() {
                    game.twCharacter();
                },
            },
            "dcfl_collab": {
                name: '<div class="dcfl_menu">联动卡<font size="3px">⇨</font></div>',
                "clear": true,
                "onclick": function() {
                    game.collabCharacter();
                },
            },
            "dcfl_old": {
                name: '<div class="dcfl_menu">怀旧<font size="3px">⇨</font></div>',
                "clear": true,
                "onclick": function() {
                    game.oldCharacter();
                },
            },
            "dcfl_offline": {
                name: '<div class="dcfl_menu">线下武将<font size="3px">⇨</font></div>',
                "clear": true,
                "onclick": function() {
                    game.offlineCharacter();
                },
            },
            "dcfl_jsrg": {
                name: '<div class="dcfl_menu">江山如故<font size="3px">⇨</font></div>',
                "clear": true,
                "onclick": function() {
                    game.jsrgCharacter();
                },
            },
            "dcfl_sxrm": {
                name: '<div class="dcfl_menu">蚀心入魔<font size="3px">⇨</font></div>',
                "clear": true,
                "onclick": function() {
                    game.sxrmCharacter();
                },
            },
            "dcfl_sixiang": {
                name: '<div class="dcfl_menu">四象封印<font size="3px">⇨</font></div>',
                "clear": true,
                "onclick": function() {
                    game.sixiangCharacter();
                },
            },
            "dcfl_ddd": {
                name: '<div class="dcfl_menu">3D精选<font size="3px">⇨</font></div>',
                "clear": true,
                "onclick": function() {
                    game.dddCharacter();
                },
            },
            "dcfl_wandian": {
                name: '<div class="dcfl_menu">玩点论杀<font size="3px">⇨</font></div>',
                "clear": true,
                "onclick": function() {
                    game.wandianCharacter();
                },
            },
            "dcfl_yxs": {
                name: '<div class="dcfl_menu">英雄杀<font size="3px">⇨</font></div>',
                "clear": true,
                "onclick": function() {
                    game.yxsCharacter();
                },
            },
            "dcfl_diy": {
                name: '<div class="dcfl_menu">DIY<font size="3px">⇨</font></div>',
                "clear": true,
                "onclick": function() {
                    game.diyCharacter();
                },
            },
            "dcfl_key": {
                name: '<div class="dcfl_menu">KEY<font size="3px">⇨</font></div>',
                "clear": true,
                "onclick": function() {
                    game.keyCharacter();
                },
            },            
            "dcfl_xianjian": {
                name: '<div class="dcfl_menu">仙剑奇侠传<font size="3px">⇨</font></div>',
                "clear": true,
                "onclick": function() {
                    game.xianjianCharacter();
                },
            },
            "dcfl_hearth": {
                name: '<div class="dcfl_menu">炉石传说<font size="3px">⇨</font></div>',
                "clear": true,
                "onclick": function() {
                    game.hearthCharacter();
                },
            },
            "dcfl_gujian": {
                name: '<div class="dcfl_menu">古剑奇谭<font size="3px">⇨</font></div>',
                "clear": true,
                "onclick": function() {
                    game.gujianCharacter();
                },
            },
            "dcfl_ow": {
                name: '<div class="dcfl_menu">守望先锋<font size="3px">⇨</font></div>',
                "clear": true,
                "onclick": function() {
                    game.owCharacter();
                },
            },
            "dcfl_swd": {
                name: '<div class="dcfl_menu">轩辕剑<font size="3px">⇨</font></div>',
                "clear": true,
                "onclick": function() {
                    game.swdCharacter();
                },
            },
            "dcfl_gwent": {
                name: '<div class="dcfl_menu">昆特牌<font size="3px">⇨</font></div>',
                "clear": true,
                "onclick": function() {
                    game.gwentCharacter();
                },
            },
            "dcfl_mtg": {
                name: '<div class="dcfl_menu">万智牌<font size="3px">⇨</font></div>',
                "clear": true,
                "onclick": function() {
                    game.mtgCharacter();
                },
            },
            
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
            intro: "<font color=#f00>查看前须开启重启该武将包</font>",
            author: "山佬进城（小苏）",
            diskURL: "",
            forumURL: "",
            version: "1.0",
        },
        files: {
            "character": [],
            "card": [],
            "skill": [],
            "audio": []
        }
    }
})