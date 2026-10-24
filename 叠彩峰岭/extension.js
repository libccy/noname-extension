game.import("extension", function(lib, game, ui, get, ai, _status) {
    return {
        name: "叠彩峰岭",
        editable: false,
        content: function(config, pack) {

            // ========== 大屏显示报错 ==========    
            if (config.dcfl_alert) {
                (function overrideAlert() {
                    if (window._dcfl_alert_overridden) return;
                    window._dcfl_alert_overridden = true;

                    const originalAlert = window.alert;

                    window.alert = function(message) {
                        if (!message || typeof message !== 'string') {
                            return originalAlert.call(window, message);
                        }

                        const oldPage = document.getElementById('dcfl_alert_page');
                        if (oldPage && oldPage.parentNode) {
                            oldPage.parentNode.removeChild(oldPage);
                        }

                        const page = document.createElement('div');
                        page.id = 'dcfl_alert_page';

                        const closeBtn = document.createElement('div');
                        closeBtn.className = 'dcfl_alert_close';
                        closeBtn.textContent = '×';
                        closeBtn.onclick = function(e) {
                            e.stopPropagation();
                            if (page.parentNode) {
                                page.parentNode.removeChild(page);
                            }
                        };
                        page.appendChild(closeBtn);

                        const title = document.createElement('div');
                        title.className = 'dcfl_alert_title';
                        title.textContent = 'Alert';
                        page.appendChild(title);

                        const content = document.createElement('pre');
                        content.className = 'dcfl_alert_content';
                        content.textContent = message;
                        page.appendChild(content);

                        document.body.appendChild(page);
                    };
                })();
            }

            // ========== 代码颜色高亮 ==========    
            function dcflEscapeHtml(s) {
                return String(s)
                    .replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;');
            }

            function dcflHighlightJs(code) {
                if (typeof code !== 'string' || !code) return '';

                var kwList = [
                    'var', 'let', 'const', 'function', 'return', 'if', 'else',
                    'for', 'while', 'do', 'break', 'continue', 'new', 'this',
                    'true', 'false', 'null', 'undefined', 'class', 'extends',
                    'super', 'typeof', 'instanceof', 'in', 'of', 'async', 'await',
                    'yield', 'try', 'catch', 'finally', 'throw', 'switch', 'case',
                    'default', 'delete', 'void', 'with', 'debugger', 'import',
                    'export', 'from', 'as', 'get', 'set', 'static'
                ];
                var kwPattern = '\\b(?:' + kwList.join('|') + ')\\b';

                var numPattern = '\\b(?:0[xX][0-9a-fA-F]+|0[bB][01]+|0[oO][0-7]+|\\d+\\.\\d+(?:[eE][+\\-]?\\d+)?|\\d+(?:[eE][+\\-]?\\d+)?)\\b';

                var re = new RegExp(
                    '(\\/\\*[\\s\\S]*?\\*\\/|\\/\\/[^\\n]*)' +
                    '|("(?:\\\\.|[^"\\\\\\n])*"|\'(?:\\\\.|[^\'\\\\\\n])*\'|`(?:\\\\.|[^`\\\\])*`)' +
                    '|(' + kwPattern + ')' +
                    '|(' + numPattern + ')' +
                    '|(\\b([a-zA-Z_$][\\w$]*)(?=\\s*\\())',
                    'g'
                );

                var result = '';
                var lastIndex = 0;
                var m;
                while ((m = re.exec(code)) !== null) {
                    result += dcflEscapeHtml(code.substring(lastIndex, m.index));
                    lastIndex = re.lastIndex;

                    if (m[1]) {
                        result += '<span class="dcfl-hl-comment">' + dcflEscapeHtml(m[1]) + '</span>';
                    } else if (m[2]) {
                        result += '<span class="dcfl-hl-string">' + dcflEscapeHtml(m[2]) + '</span>';
                    } else if (m[3]) {
                        result += '<span class="dcfl-hl-keyword">' + dcflEscapeHtml(m[3]) + '</span>';
                    } else if (m[4]) {
                        result += '<span class="dcfl-hl-number">' + dcflEscapeHtml(m[4]) + '</span>';
                    } else if (m[5]) {
                        result += '<span class="dcfl-hl-function">' + dcflEscapeHtml(m[6]) + '</span>';
                    } else {
                        result += dcflEscapeHtml(m[0]);
                    }
                }
                result += dcflEscapeHtml(code.substring(lastIndex));
                return result;
            }

            // ========== 对决自由模式 4v4 补丁 ==========
            (function patchVersusMode4v4() {
                if (window._dcfl_versus_4v4_patched) return;
                window._dcfl_versus_4v4_patched = true;

                function install() {
                    if (typeof lib === 'undefined' || typeof game === 'undefined' || typeof ui === 'undefined') {
                        setTimeout(install, 500);
                        return;
                    }
                    if (!game.versusPhaseLoop || !ui.create || !ui.create.switcher) {
                        setTimeout(install, 500);
                        return;
                    }

                    var origSwitcher = ui.create.switcher;
                    ui.create.switcher = function(name, list, value) {
                        var args = Array.prototype.slice.call(arguments);
                        if (name === "versus_number" && Array.isArray(list) && list.indexOf(4) === -1) {
                            args[1] = list.concat([4]).sort(function(a, b) {
                                return a - b;
                            });
                        }
                        return origSwitcher.apply(this, args);
                    };

                    game.versusPhaseLoop = function(player) {
                        const next = game.createEvent("phaseLoop");
                        next.player = player;
                        next.setContent([
                            async (event, trigger, player) => {
                                    if (game.players.includes(event.player)) {
                                        lib.onphase.forEach(i => i());
                                        const phase = event.player.phase();
                                        event.next.remove(phase);
                                        let isRoundEnd = false;
                                        if (lib.onround.every(i => i(phase, event.player))) {
                                            isRoundEnd = _status.roundSkipped;
                                            if (_status.isRoundFilter) {
                                                isRoundEnd = _status.isRoundFilter(phase, event.player);
                                            } else if (_status.seatNumSettled) {
                                                const seatNum = event.player.getSeatNum();
                                                if (seatNum != 0) {
                                                    if (get.itemtype(_status.lastPhasedPlayer) != "player" || seatNum < _status.lastPhasedPlayer.getSeatNum()) {
                                                        isRoundEnd = true;
                                                    }
                                                }
                                            } else if (event.player == _status.roundStart) {
                                                isRoundEnd = true;
                                            }
                                            if (isRoundEnd && _status.globalHistory.some(i => i.isRound)) {
                                                for (let i = 0; i < game.players.length; i++) {
                                                    game.players[i].classList.remove("acted");
                                                }
                                                game.log();
                                                await event.trigger("roundEnd");
                                            }
                                        }
                                        event.next.push(phase);
                                        if (lib.storage.zhu && lib.storage.number != 4) {
                                            player.classList.add("acted");
                                        }
                                        await phase;
                                    }
                                    await event.trigger("phaseOver");
                                },
                                async (event, trigger, player) => {
                                    if (lib.storage.number == 4) {
                                        let nextPlayer = event.player.next;
                                        let safety = 0;
                                        while ((nextPlayer.isOut() || nextPlayer.isDead()) && safety < 16) {
                                            nextPlayer = nextPlayer.next;
                                            safety++;
                                        }
                                        event.player = nextPlayer;
                                        event.goto(0);
                                    } else if (lib.storage.zhu) {
                                        _status.currentSide = !_status.currentSide;
                                        _status.round++;
                                        if (_status.round >= 2 * Math.max(game.friend.length, game.enemy.length)) {
                                            _status.round = 0;
                                            for (let i = 0; i < game.players.length; i++) {
                                                game.players[i].classList.remove("acted");
                                            }
                                            delete _status.roundStart;
                                        }
                                        let list = _status.currentSide == game.me.side ? game.friend.slice(0) : game.enemy.slice(0);
                                        for (let i = 0; i < list.length; i++) {
                                            if (list[i].classList.contains("acted") || list[i].isOut()) {
                                                list.splice(i, 1);
                                                i--;
                                            }
                                        }
                                        if (list.length == 0) {
                                            event.redo();
                                        } else if (list.length == 1 || (game.me != game.friendZhu && !lib.storage.single_control) || _status.currentSide != game.me.side) {
                                            list.sort(function(a, b) {
                                                if (a.countCards("j") > b.countCards("j")) {
                                                    return 1;
                                                }
                                                return a.hp - b.hp;
                                            });
                                            event.player = list[0];
                                            event.goto(0);
                                        } else {
                                            const result = await game.me
                                                .chooseTarget("选择要行动的角色", true, function(card, player, target) {
                                                    return target.classList.contains("acted") == false && target.side == game.me.side;
                                                })
                                                .set("includeOut", true)
                                                .forResult();
                                            event.player = result.targets[0];
                                            event.goto(0);
                                        }
                                    } else {
                                        event.player = event.player.next;
                                        event.goto(0);
                                    }
                                },
                        ]);
                    };
                }
                install();
            })();

            //===================随机播放所有背景音乐==================
            (function() {
                if (window._dcfl_bg_music_installed) return;
                window._dcfl_bg_music_installed = true;

                var bgmNode = null;
                var bgmPausedByHidden = false;
                var bgmPausedByExternal = false;

                function isRandom() {
                    return lib.config.background_music === "music_random";
                }

                function stopOurBgm() {
                    try {
                        if (bgmNode) {
                            bgmNode.pause();
                            bgmNode.currentTime = 0;
                            if (bgmNode.parentNode) bgmNode.parentNode.removeChild(bgmNode);
                            bgmNode = null;
                        }
                    } catch (e) {}
                    bgmPausedByHidden = false;
                    bgmPausedByExternal = false;
                }

                function stopOriginalBgm() {
                    try {
                        if (ui.backgroundMusic) {
                            var origPause = ui.backgroundMusic._dcfl_origPause || ui.backgroundMusic.pause;
                            origPause.call(ui.backgroundMusic);
                            ui.backgroundMusic.currentTime = 0;
                        }
                    } catch (e) {}
                    try {
                        if (game.bgm && game.bgm !== bgmNode) {
                            game.bgm.pause();
                            game.bgm.currentTime = 0;
                        }
                    } catch (e) {}
                    try {
                        var audios = document.querySelectorAll("audio");
                        for (var i = 0; i < audios.length; i++) {
                            var a = audios[i];
                            if (a === bgmNode) continue;
                            var src = a.src || "";
                            if (src.indexOf("/background/") !== -1) {
                                try {
                                    a.pause();
                                    a.currentTime = 0;
                                } catch (e) {}
                            }
                        }
                    } catch (e) {}
                }

                function hookOriginalBgmPlay() {
                    try {
                        var node = ui.backgroundMusic;
                        if (!node || node._dcfl_playHooked) return;
                        node._dcfl_playHooked = true;
                        var origPlay = node.play;
                        node.play = function() {
                            if (isRandom()) {
                                try {
                                    var origPause = node._dcfl_origPause || node.pause;
                                    origPause.call(node);
                                } catch (e) {}
                                bgmPausedByExternal = false;
                                bgmPausedByHidden = false;
                                try {
                                    if (bgmNode) {
                                        var playPromise = bgmNode.play();
                                        if (playPromise && playPromise.catch) playPromise.catch(function() {});
                                    }
                                } catch (e) {}
                                return Promise.resolve();
                            }
                            return origPlay.apply(this, arguments);
                        };
                    } catch (e) {}
                }

                function hookOriginalBgmPause() {
                    try {
                        var node = ui.backgroundMusic;
                        if (!node || node._dcfl_pauseHooked) return;
                        node._dcfl_pauseHooked = true;
                        var origPause = node.pause;
                        node._dcfl_origPause = origPause;
                        node.pause = function() {
                            if (isRandom() && bgmNode && !bgmNode.paused) {
                                try {
                                    bgmNode.pause();
                                } catch (e) {}
                                bgmPausedByExternal = true;
                            }
                            return origPause.apply(this, arguments);
                        };
                    } catch (e) {}
                }

                function hookOriginalBgmVolume() {
                    try {
                        var node = ui.backgroundMusic;
                        if (!node || node._dcfl_volumeHooked) return;
                        node._dcfl_volumeHooked = true;
                        var currentVolume = node.volume;
                        try {
                            Object.defineProperty(node, "volume", {
                                configurable: true,
                                enumerable: true,
                                get: function() {
                                    return currentVolume;
                                },
                                set: function(v) {
                                    currentVolume = v;
                                    if (bgmNode) {
                                        try {
                                            bgmNode.volume = v;
                                        } catch (e) {}
                                    }
                                }
                            });
                        } catch (e) {
                            setInterval(function() {
                                try {
                                    if (bgmNode && bgmNode.volume !== node.volume) {
                                        bgmNode.volume = node.volume;
                                    }
                                } catch (e) {}
                            }, 300);
                        }
                    } catch (e) {}
                }

                function pauseOurBgmByHidden() {
                    if (!bgmNode) return;
                    if (bgmPausedByExternal) return;
                    try {
                        if (!bgmNode.paused) {
                            bgmNode.pause();
                            bgmPausedByHidden = true;
                        }
                    } catch (e) {}
                }

                function resumeOurBgmByHidden() {
                    if (!bgmNode || !isRandom()) return;
                    if (bgmPausedByExternal) return;
                    try {
                        var p = bgmNode.play();
                        if (p && p.catch) p.catch(function() {});
                    } catch (e) {}
                    bgmPausedByHidden = false;
                }

                document.addEventListener("visibilitychange", function() {
                    if (document.hidden) {
                        pauseOurBgmByHidden();
                    } else if (isRandom()) {
                        resumeOurBgmByHidden();
                    }
                });

                window.addEventListener("pagehide", function() {
                    pauseOurBgmByHidden();
                });

                window.addEventListener("pageshow", function() {
                    if (isRandom()) resumeOurBgmByHidden();
                });

                window.addEventListener("blur", function() {
                    pauseOurBgmByHidden();
                });

                window.addEventListener("focus", function() {
                    if (isRandom()) resumeOurBgmByHidden();
                });

                var hookTimer = setInterval(function() {
                    hookOriginalBgmPlay();
                    hookOriginalBgmPause();
                    hookOriginalBgmVolume();
                    if (ui.backgroundMusic &&
                        ui.backgroundMusic._dcfl_playHooked &&
                        ui.backgroundMusic._dcfl_pauseHooked &&
                        ui.backgroundMusic._dcfl_volumeHooked) {
                        clearInterval(hookTimer);
                    }
                }, 500);
                hookOriginalBgmPlay();
                hookOriginalBgmPause();
                hookOriginalBgmVolume();

                function refresh(cb) {
                    try {
                        game.getFileList("audio/background", function(_, files) {
                            var list = (files || []).filter(function(f) {
                                return /\.(mp3|ogg)$/i.test(f);
                            });
                            cb(list);
                        });
                    } catch (e) {
                        cb([]);
                    }
                }

                function getCurrentVolume() {
                    try {
                        if (ui.backgroundMusic && typeof ui.backgroundMusic.volume === "number") {
                            return ui.backgroundMusic.volume;
                        }
                    } catch (e) {}
                    try {
                        if (typeof lib.config.background_volume === "number") {
                            return lib.config.background_volume > 1 ?
                                lib.config.background_volume / 100 :
                                lib.config.background_volume;
                        }
                    } catch (e) {}
                    return 1;
                }

                function playRandom() {
                    var list = lib.fullFolderRandomMusic;
                    if (!list || !list.length) return;

                    stopOurBgm();
                    stopOriginalBgm();

                    var file = list[Math.floor(Math.random() * list.length)];
                    lib._currentRandomBackgroundMusic = file;
                    console.log("[叠彩峰岭] 随机播放背景音乐: " + file);

                    var audio = new Audio();
                    audio.src = lib.assetURL + "audio/background/" + file;
                    audio.autoplay = true;
                    try {
                        audio.volume = getCurrentVolume();
                    } catch (e) {}
                    audio.addEventListener("ended", function() {
                        if (bgmNode === audio) playRandom();
                    });
                    try {
                        if (ui.window) ui.window.appendChild(audio);
                        else document.body.appendChild(audio);
                    } catch (e) {}
                    bgmNode = audio;
                    game.bgm = audio;
                    var p = audio.play();
                    if (p && p.catch) p.catch(function() {});
                }

                function install() {
                    if (game._dcfl_randomPatched) return;
                    game._dcfl_randomPatched = true;

                    game._originalPlayBackgroundMusic = game.playBackgroundMusic;

                    game.playBackgroundMusic = function() {
                        if (isRandom() && lib.fullFolderRandomMusic && lib.fullFolderRandomMusic.length) {
                            return playRandom();
                        }
                        stopOurBgm();
                        return game._originalPlayBackgroundMusic.apply(this, arguments);
                    };

                    var origSaveConfig = game.saveConfig;
                    game.saveConfig = function(key, value) {
                        var result = origSaveConfig.apply(this, arguments);
                        if (key === "background_music") {
                            if (value === "music_random") {
                                stopOriginalBgm();
                                setTimeout(function() {
                                    stopOriginalBgm();
                                    playRandom();
                                }, 0);
                                setTimeout(stopOriginalBgm, 100);
                                setTimeout(stopOriginalBgm, 400);
                            } else {
                                stopOurBgm();
                            }
                        }
                        if (key === "background_volume" && bgmNode) {
                            try {
                                var v = typeof value === "number" ?
                                    (value > 1 ? value / 100 : value) :
                                    getCurrentVolume();
                                bgmNode.volume = v;
                            } catch (e) {}
                        }
                        return result;
                    };
                }

                function init(retry) {
                    refresh(function(list) {
                        if (list.length) {
                            lib.fullFolderRandomMusic = list;
                            console.log("[叠彩峰岭] 背景音乐曲池共 " + list.length + " 首");
                            install();
                            if (isRandom()) playRandom();
                        } else if (retry > 0) {
                            setTimeout(function() {
                                init(retry - 1);
                            }, 500);
                        }
                    });
                }

                if (!lib.arenaReady) lib.arenaReady = [];
                lib.arenaReady.push(function() {
                    init(20);
                    setTimeout(function() {
                        hookOriginalBgmPlay();
                        hookOriginalBgmPause();
                        hookOriginalBgmVolume();
                    }, 1000);
                    setTimeout(function() {
                        hookOriginalBgmPlay();
                        hookOriginalBgmPause();
                        hookOriginalBgmVolume();
                    }, 3000);
                });
            })();

            //===================控制台显示角色名==================
            (function() {
                if (window._dcfl_control_names_installed) return;
                window._dcfl_control_names_installed = true;

                function addNamesToButtons(buttons) {
                    if (!buttons) return;
                    var list = buttons.length !== undefined ? buttons : [buttons];
                    for (var i = 0; i < list.length; i++) {
                        var btn = list[i];
                        if (btn._nameAdded) continue;
                        var player = btn.link;
                        if (!player) continue;
                        var nameDisplay;
                        if (player.name1 && player.name2) {
                            nameDisplay = (lib.translate[player.name1] || player.name1) + '&' +
                                (lib.translate[player.name2] || player.name2);
                        } else {
                            nameDisplay = lib.translate[player.name] || player.name;
                        }
                        var nameDiv = document.createElement('div');
                        nameDiv.className = 'dcfl-control-name';
                        nameDiv.innerHTML = nameDisplay;
                        btn.style.position = 'relative';
                        btn.appendChild(nameDiv);
                        btn._nameAdded = true;
                    }
                }

                function observeControlButtons() {
                    var row3 = document.querySelector('.menu-sym .menu-buttons.leftbutton.commandbutton');
                    if (!row3) {
                        setTimeout(observeControlButtons, 500);
                        return;
                    }
                    addNamesToButtons(row3.children);
                    var observer = new MutationObserver(function(mutations) {
                        for (var i = 0; i < mutations.length; i++) {
                            var mutation = mutations[i];
                            if (mutation.type === 'childList') {
                                var added = mutation.addedNodes;
                                for (var j = 0; j < added.length; j++) {
                                    var node = added[j];
                                    if (node.nodeType === 1 && node.classList && node.classList.contains('menubutton')) {
                                        addNamesToButtons(node);
                                    }
                                }
                            }
                        }
                    });
                    observer.observe(row3, {
                        childList: true,
                        subtree: false
                    });
                }

                if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', observeControlButtons);
                } else {
                    observeControlButtons();
                }
            })();

            // =====================弹窗强制居中=======================================
            if (config.dcfl_biaojijuzhong) {
                const extName = '十周年UI';
                const installed = lib.config.extensions && lib.config.extensions.includes(extName);
                const enabled = lib.config[`extension_${extName}_enable`] === true;

                if (installed && enabled) {
                    (function() {
                        // ---------- 判断是否为菜单 ----------
                        function isMenu(node) {
                            if (!node) return false;
                            let el = node;
                            while (el) {
                                if (el.classList) {
                                    if (el.classList.contains('menu') ||
                                        el.classList.contains('menu-container') ||
                                        (el.classList.contains('main') && el.classList.contains('menu'))) {
                                        return true;
                                    }
                                }
                                el = el.parentNode;
                            }
                            return false;
                        }
                        const originalPlace = lib.placePoppedDialog;
                        lib.placePoppedDialog = function(dialog, e) {
                            originalPlace.call(this, dialog, e);
                            if (isMenu(dialog)) return;
                            let parent = dialog.parentNode;
                            while (parent && parent !== document.body) {
                                const style = getComputedStyle(parent);
                                if (style.transform && style.transform !== 'none') {
                                    parent.style.transform = 'none';
                                    break;
                                }
                                parent = parent.parentNode;
                            }
                            dialog.style.transition = 'none';
                            dialog.style.position = 'fixed';
                            dialog.style.left = '50%';
                            dialog.style.top = '50%';
                            dialog.style.transform = 'translate(-50%, -50%)';
                            dialog.style.margin = '0';
                            dialog.style.zIndex = 9999;
                            void dialog.offsetHeight;
                            dialog.style.transition = '';
                        };
                        console.log('[Fix] ✅ 已拦截 lib.placePoppedDialog，所有非菜单 dialog 将零跳动居中');
                    })();
                }
            }

            // ================= 固定菜单比例（独立模块） =================
            if (config.dcfl_caidanbili) {
                (function() {
                    if (window._dcfl_scale_installed) return;
                    window._dcfl_scale_installed = true;

                    if (!lib.arenaReady) lib.arenaReady = [];
                    lib.arenaReady.push(function() {
                        if (typeof ui === 'undefined' || !ui.window) return;

                        var targetScale = 0.7; // 固定比例，可自行调整

                        // 对单个菜单容器应用缩放
                        function applyScale(container) {
                            if (!container) return;
                            var zoom = game.documentZoom || 1;
                            container.style.transform = 'scale(' + (targetScale / zoom) + ')';
                            container.style.transformOrigin = 'top left';
                        }

                        // 对所有菜单容器应用缩放
                        function fixAllMenusScale() {
                            var containers = [ui.menuContainer, ui.connectMenuContainer];
                            for (var i = 0; i < containers.length; i++) {
                                if (containers[i]) applyScale(containers[i]);
                            }
                        }

                        var originalUpdatez = ui.updatez;
                        ui.updatez = function() {
                            originalUpdatez.call(this);
                            fixAllMenusScale();

                            if (window._dcfl_update_callbacks) {
                                for (var i = 0; i < window._dcfl_update_callbacks.length; i++) {
                                    window._dcfl_update_callbacks[i]();
                                }
                            }
                        };

                        var observer = new MutationObserver(function(mutations) {
                            for (var i = 0; i < mutations.length; i++) {
                                var added = mutations[i].addedNodes;
                                for (var j = 0; j < added.length; j++) {
                                    var node = added[j];
                                    if (node.nodeType === 1 && node.classList && node.classList.contains('menu-container')) {
                                        applyScale(node);
                                    }
                                }
                            }
                        });
                        observer.observe(ui.window, {
                            childList: true,
                            subtree: false
                        });

                        fixAllMenusScale();

                        if (!window._dcfl_update_callbacks) window._dcfl_update_callbacks = [];

                        console.log('[叠彩峰岭] 固定菜单比例已生效 (scale=' + targetScale + ')');
                    });
                })();
            }

            // ================= 修正指示器 + 弹出位置（模块） =================
            if (config.dcfl_caidancuowei) {
                const extName = '十周年UI';
                const installed = lib.config.extensions && lib.config.extensions.includes(extName);
                const enabled = lib.config[`extension_${extName}_enable`] === true;

                if (installed && enabled) {
                    (function() {
                        if (window._dcfl_menu_fixed) return;
                        window._dcfl_menu_fixed = true;

                        if (!lib.arenaReady) lib.arenaReady = [];
                        lib.arenaReady.push(function() {
                            var targetScale = window._dcfl_targetScale || 0.7;
                            var offsetX = 48; // 弹出窗口水平偏移（正数向右，紧贴按钮右侧）
                            var offsetY = 20; // 弹出窗口垂直微调（正数向下，负数向上）

                            var originalUpdatez = ui.updatez;

                            // ----- 修正指示器位置（完全不变）-----
                            function updateIndicator(menuContainer) {
                                if (!menuContainer) return;
                                var bar = menuContainer.querySelector('.menu-tab-bar');
                                var tabs = menuContainer.querySelector('.menu-tab');
                                if (!bar || !tabs) return;
                                bar.style.left = '0px';
                                var active = tabs.querySelector('.active');
                                if (!active) active = tabs.firstChild;
                                if (!active) return;
                                var left = active.offsetLeft;
                                bar.style.transform = 'translateX(' + left + 'px)';
                            }

                            function fixMenu(container) {
                                if (!container) return;
                                if (container._dcfl_indicator_bound) return;
                                container._dcfl_indicator_bound = true;

                                var tabs = container.querySelector('.menu-tab');
                                if (!tabs) return;
                                var observer = new MutationObserver(function() {
                                    updateIndicator(container);
                                });
                                observer.observe(tabs, {
                                    attributes: true,
                                    attributeFilter: ['class'],
                                    childList: true,
                                    subtree: true
                                });

                                var bar = container.querySelector('.menu-tab-bar');
                                if (bar) {
                                    var barObserver = new MutationObserver(function() {
                                        updateIndicator(container);
                                    });
                                    barObserver.observe(bar, {
                                        attributes: true,
                                        attributeFilter: ['style']
                                    });
                                }
                                updateIndicator(container);
                            }

                            function fixAllMenus() {
                                var containers = [ui.menuContainer, ui.connectMenuContainer];
                                for (var i = 0; i < containers.length; i++) {
                                    if (containers[i]) fixMenu(containers[i]);
                                }
                            }

                            // ----- 修正弹出窗口位置 -----
                            function fixPopupNode(node) {
                                if (!node) return;
                                var left = parseFloat(node.style.left) || 0;
                                var top = parseFloat(node.style.top) || 0;
                                var newLeft = left * targetScale + offsetX;
                                var newTop = top * targetScale + offsetY;

                                var winWidth = ui.window.offsetWidth;
                                var nodeWidth = node.offsetWidth || 200;
                                if (newLeft + nodeWidth > winWidth) {
                                    newLeft = winWidth - nodeWidth - 10;
                                }
                                node.style.left = newLeft + 'px';
                                node.style.top = newTop + 'px';
                            }

                            function watchPopupContainer() {
                                var container = ui.window.querySelector('.popup-container');
                                if (container) {
                                    var popupObserver = new MutationObserver(function(mutations) {
                                        for (var i = 0; i < mutations.length; i++) {
                                            var added = mutations[i].addedNodes;
                                            for (var j = 0; j < added.length; j++) {
                                                var node = added[j];
                                                if (node.nodeType === 1) {
                                                    setTimeout(function(n) {
                                                        fixPopupNode(n);
                                                    }, 0, node);
                                                }
                                            }
                                        }
                                    });
                                    popupObserver.observe(container, {
                                        childList: true
                                    });

                                    for (var child = container.firstChild; child; child = child.nextSibling) {
                                        if (child.nodeType === 1) fixPopupNode(child);
                                    }
                                } else {
                                    var watcher = new MutationObserver(function() {
                                        var c = ui.window.querySelector('.popup-container');
                                        if (c) {
                                            watcher.disconnect();
                                            watchPopupContainer();
                                        }
                                    });
                                    watcher.observe(ui.window, {
                                        childList: true,
                                        subtree: false
                                    });
                                }
                            }

                            ui.updatez = function() {
                                originalUpdatez.call(this);
                                fixAllMenus();
                            };

                            var watcher = new MutationObserver(function(mutations) {
                                for (var i = 0; i < mutations.length; i++) {
                                    var added = mutations[i].addedNodes;
                                    for (var j = 0; j < added.length; j++) {
                                        var node = added[j];
                                        if (node.nodeType === 1) {
                                            if (node.classList && node.classList.contains('menu-container')) {
                                                fixMenu(node);
                                            }
                                            if (node.classList && node.classList.contains('popup-container')) {
                                                watchPopupContainer();
                                            }
                                        }
                                    }
                                }
                            });
                            watcher.observe(ui.window, {
                                childList: true,
                                subtree: false
                            });

                            fixAllMenus();
                            watchPopupContainer();

                            console.log('[叠彩峰岭] 菜单固定 ' + (targetScale * 100) + '% 已生效，弹出位置已修正');
                        });
                    })();
                }
            }

            // ============结算界面兼容旧版=====================
            if (config.dcfl_jxjm) {
                (function() {
                    if (window._oldHandDisplayInstalled) return;
                    window._oldHandDisplayInstalled = true;

                    if (!window._dcfl_structuredClone_patched) {
                        window._dcfl_structuredClone_patched = true;
                        var origStructuredClone = window.structuredClone;
                        if (typeof origStructuredClone === 'function') {
                            window.structuredClone = function(value, options) {
                                try {
                                    return origStructuredClone.call(window, value, options);
                                } catch (e) {
                                    var seen = new WeakMap();
                                    var safeCopy = function(val) {
                                        if (val === null || val === undefined) return val;
                                        if (typeof val === 'function') return undefined;
                                        if (typeof val !== 'object') return val;
                                        if (typeof HTMLElement !== 'undefined' && val instanceof HTMLElement) return undefined;
                                        if (typeof Node !== 'undefined' && val instanceof Node) return undefined;
                                        if (typeof Window !== 'undefined' && val instanceof Window) return undefined;
                                        if (seen.has(val)) return seen.get(val);
                                        if (Array.isArray(val)) {
                                            var arr = [];
                                            seen.set(val, arr);
                                            for (var i = 0; i < val.length; i++) {
                                                var c = safeCopy(val[i]);
                                                if (c !== undefined) arr.push(c);
                                            }
                                            return arr;
                                        }
                                        if (val instanceof Date) return new Date(val.getTime());
                                        if (val instanceof RegExp) return new RegExp(val.source, val.flags);
                                        if (val instanceof Map) {
                                            var m = new Map();
                                            seen.set(val, m);
                                            val.forEach(function(v, k) {
                                                var ck = safeCopy(k),
                                                    cv = safeCopy(v);
                                                if (ck !== undefined && cv !== undefined) m.set(ck, cv);
                                            });
                                            return m;
                                        }
                                        if (val instanceof Set) {
                                            var s = new Set();
                                            seen.set(val, s);
                                            val.forEach(function(v) {
                                                var cv = safeCopy(v);
                                                if (cv !== undefined) s.add(cv);
                                            });
                                            return s;
                                        }
                                        var obj = {};
                                        seen.set(val, obj);
                                        for (var k in val) {
                                            if (!Object.prototype.hasOwnProperty.call(val, k)) continue;
                                            try {
                                                var cv2 = safeCopy(val[k]);
                                                if (cv2 !== undefined) obj[k] = cv2;
                                            } catch (e2) {}
                                        }
                                        return obj;
                                    };
                                    return safeCopy(value);
                                }
                            };
                        }
                    }

                    var origOver = game.over;
                    game.over = function(result, bool) {
                        var fixPlayer = function(p) {
                            if (p && typeof p.isOnline2 !== 'function') {
                                p.isOnline2 = function() {
                                    return false;
                                };
                                p.isOnline = function() {
                                    return false;
                                };
                                p.send = function() {};
                            }
                        };
                        if (game.players) game.players.forEach(fixPlayer);
                        if (game.dead) game.dead.forEach(fixPlayer);
                        if (game.additionaldead) game.additionaldead.forEach(fixPlayer);
                        return origOver.apply(this, arguments);
                    };

                    lib.onover.push(function(resultbool) {
                        var dialog = null;
                        for (var i = ui.dialogs.length - 1; i >= 0; i--) {
                            if (ui.dialogs[i].forcebutton && ui.dialogs[i].content) {
                                dialog = ui.dialogs[i];
                                break;
                            }
                        }
                        if (!dialog) return;
                        if (dialog._oldHandAdded) return;
                        dialog._oldHandAdded = true;

                        dialog.add(ui.create.div(".placeholder"));

                        var addPlayerCards = function(player) {
                            if (!player || typeof player.getCards !== 'function') return;
                            var hs = player.getCards("h");
                            if (hs.length) {
                                dialog.add('<div class="text center">' + get.translation(player) + "</div>");
                                dialog.addSmall(hs);
                            }
                        };

                        for (var i = 0; i < game.players.length; i++) addPlayerCards(game.players[i]);
                        for (var i = 0; i < game.dead.length; i++) addPlayerCards(game.dead[i]);
                        if (game.additionaldead && game.additionaldead.length) {
                            for (var i = 0; i < game.additionaldead.length; i++) addPlayerCards(game.additionaldead[i]);
                        }
                    });
                })();
            }

            // ============================武将开启================================
            if (config.dcfl_wujiangkaiqi) {
                (function hijackCharacterTab() {
                    function doHijack() {
                        var menuTab = document.querySelector('.menu-tab');
                        if (!menuTab) return false;
                        var tabs = menuTab.children;
                        for (var i = 0; i < tabs.length; i++) {
                            var tab = tabs[i];
                            if (tab.innerHTML.trim() === '武将') {
                                if (tab._dcflHijacked) return true;
                                tab.addEventListener('click', function(e) {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    if (typeof game.showCharacterInfo === 'function') {
                                        game.showCharacterInfo();
                                    } else {
                                        alert('叠彩峰岭扩展未正确加载');
                                    }
                                }, true);
                                tab._dcflHijacked = true;
                                return true;
                            }
                        }
                        return false;
                    }

                    function tryHijack() {
                        if (doHijack()) return;
                        setTimeout(tryHijack, 500);
                    }
                    setTimeout(tryHijack, 1000);
                })();
            }

            // ========== 横向武将窗口 ==========
            if (config.dcfl_wujiangchuangkou) {
                (function replaceCharacterTab() {
                    function getPacks() {
                        var packs = [];
                        if (!lib.characterPack) return packs;
                        for (var key in lib.characterPack) {
                            if (key.startsWith('mode_')) continue;
                            var data = lib.characterPack[key];
                            var hasChar = false;
                            for (var name in data) {
                                if (lib.character[name]) {
                                    hasChar = true;
                                    break;
                                }
                            }
                            if (hasChar) {
                                var count = 0;
                                for (var name in data)
                                    if (lib.character[name]) count++;
                                var displayName = lib.translate[key + '_character_config'] || key;
                                displayName = displayName.replace(/<[^>]*>/g, '').trim();
                                packs.push({
                                    id: key,
                                    name: displayName,
                                    count: count
                                });
                            }
                        }
                        return packs;
                    }

                    function buildCustomPage() {
                        var container = ui.create.div();
                        container.style.cssText = 'width:100%;height:100%;display:flex;flex-direction:column;background:#1a1a2e;';

                        var packs = getPacks();
                        if (!packs.length) {
                            container.innerHTML = '<div style="padding:20px;color:#aaa;">未找到武将包</div>';
                            return container;
                        }

                        var currentPack = packs[0].id;
                        var currentPackName = packs[0].name;

                        var tabBar = ui.create.div();
                        tabBar.style.cssText = 'display:flex;overflow-x:auto;padding:6px 8px;background:#16213e;border-bottom:1px solid #333;flex-shrink:0;';
                        packs.forEach(function(pack) {
                            var btn = ui.create.div();
                            btn.innerHTML = pack.name + ' <span style="font-size:0.7em;opacity:0.6;">(' + pack.count + ')</span>';
                            btn.style.cssText = 'padding:4px 12px;margin:0 4px;border-radius:4px;white-space:nowrap;cursor:pointer;transition:0.2s;';
                            if (pack.id === currentPack) {
                                btn.style.background = '#2a4a7f';
                                btn.style.color = '#fff';
                            } else {
                                btn.style.background = 'rgba(255,255,255,0.05)';
                                btn.style.color = '#aaa';
                            }
                            btn.addEventListener('click', function() {
                                if (this.classList.contains('active')) return;
                                tabBar.querySelectorAll('.pack-btn').forEach(function(b) {
                                    b.style.background = 'rgba(255,255,255,0.05)';
                                    b.style.color = '#aaa';
                                    b.classList.remove('active');
                                });
                                this.style.background = '#2a4a7f';
                                this.style.color = '#fff';
                                this.classList.add('active');
                                currentPack = pack.id;
                                currentPackName = pack.name;
                                renderGrid();
                            });
                            btn.classList.add('pack-btn');
                            tabBar.appendChild(btn);
                        });

                        var grid = ui.create.div();
                        grid.style.cssText = 'flex:1;overflow-y:auto;padding:12px;background:#1a1a2e;';

                        function createCharCard(charName) {
                            var card = ui.create.div();
                            card.style.cssText = 'width:110px;height:160px;border-radius:8px;background:#222;border:1px solid #444;overflow:hidden;cursor:pointer;position:relative;transition:0.2s;flex-shrink:0;';
                            card.addEventListener('mouseenter', function() {
                                this.style.borderColor = '#8cf';
                            });
                            card.addEventListener('mouseleave', function() {
                                this.style.borderColor = '#444';
                            });

                            var img = ui.create.div();
                            img.style.cssText = 'width:100%;height:100%;background-size:cover;background-position:center;';

                            var extNameWithTags = lib.translate[currentPack + '_character_config'];
                            var extNameClean = extNameWithTags ? extNameWithTags.replace(/<[^>]*>/g, '').trim() : '';
                            loadCharacterImage(img, charName, currentPack, extNameClean, false);

                            img.addEventListener('click', function(e) {
                                e.stopPropagation();
                                e.preventDefault();
                                var info = getCharacterPackInfo(charName);
                                if (!info) {
                                    info = {
                                        packKey: currentPack,
                                        packName: currentPackName,
                                        extNameClean: extNameClean
                                    };
                                }
                                createDetailPage(charName, info.packKey, info.packName, info.extNameClean);
                            });

                            card.appendChild(img);

                            var nameLabel = ui.create.div();
                            nameLabel.innerHTML = get.translation(charName);
                            nameLabel.style.cssText = 'position:absolute;bottom:4px;left:4px;right:4px;text-align:center;background:rgba(0,0,0,0.6);border-radius:3px;padding:2px;font-size:0.8em;color:#eee;';
                            card.appendChild(nameLabel);
                            return card;
                        }

                        function renderGrid() {
                            grid.innerHTML = '';
                            var packData = lib.characterPack[currentPack];
                            if (!packData) return;

                            var charList = [];
                            for (var name in packData) {
                                if (lib.character[name]) charList.push(name);
                            }

                            var characterSort = lib.characterSort && lib.characterSort[currentPack];

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

                                    var groupTitle = ui.create.div();
                                    groupTitle.innerHTML = lib.translate[groupName] || groupName;
                                    groupTitle.style.cssText = 'font-size:1.1em;font-weight:bold;color:#ffd700;padding:8px 4px 6px;border-bottom:1px solid rgba(255,215,0,0.3);margin-bottom:8px;font-family:lishu;width:100%;';
                                    grid.appendChild(groupTitle);

                                    var rowDiv = ui.create.div();
                                    rowDiv.style.cssText = 'display:flex;flex-wrap:wrap;gap:12px;margin-bottom:16px;width:100%;';

                                    for (var k = 0; k < groupChars.length; k++) {
                                        rowDiv.appendChild(createCharCard(groupChars[k]));
                                    }
                                    grid.appendChild(rowDiv);
                                }
                            } else {
                                charList.sort(lib.sort.character || function(a, b) {
                                    return a.localeCompare(b);
                                });

                                var rowDiv = ui.create.div();
                                rowDiv.style.cssText = 'display:flex;flex-wrap:wrap;gap:12px;margin-bottom:16px;width:100%;';

                                for (var k = 0; k < charList.length; k++) {
                                    rowDiv.appendChild(createCharCard(charList[k]));
                                }
                                grid.appendChild(rowDiv);
                            }

                            lib.setScroll(grid);
                        }
                        renderGrid();

                        container.appendChild(tabBar);
                        container.appendChild(grid);
                        return container;
                    }

                    function doReplace() {
                        var menuTab = document.querySelector('.menu-tab');
                        if (!menuTab) return false;
                        var tabs = menuTab.children;
                        for (var i = 0; i < tabs.length; i++) {
                            if (tabs[i].innerHTML.trim() === '武将') {
                                var link = tabs[i]._link;
                                if (link && !link._replacedByDCFL) {
                                    link.innerHTML = '';
                                    var page = buildCustomPage();
                                    link.appendChild(page);
                                    link._replacedByDCFL = true;
                                    return true;
                                }
                            }
                        }
                        return false;
                    }

                    function tryReplace() {
                        if (doReplace()) {
                            return;
                        }
                        setTimeout(tryReplace, 500);
                    }
                    setTimeout(tryReplace, 1000);
                })();
            }

            //==================侍灵小动画（大量借鉴《十周年UI》&&《太虚幻境》）==================
            (function() {
                if (window._dcfl_bg_installed) return;
                window._dcfl_bg_installed = true;

                if (!window._dcfl_spine_loaded || typeof window.spine === 'undefined') {
                    console.warn('[叠彩峰岭] Spine 未就绪，侍灵动画功能禁用。');
                    window._dcfl_bg = {
                        bgAnim: null,
                        playAction: function() {},
                        getActionCount: function() {
                            return 0;
                        },
                        getCurrentServant: function() {
                            return null;
                        },
                        getCurrentAssetName: function() {
                            return null;
                        }
                    };
                    window._dcfl_duilib = null;
                    return;
                }
                const DCFL_BG = {
                    config: config,
                    helper: {
                        bodySize: () => ({
                            width: document.body.clientWidth,
                            height: document.body.clientHeight
                        }),
                        bodySensor: {
                            addListener: (cb) => {
                                const handler = () => {
                                    if (cb) cb();
                                };
                                window.addEventListener('resize', handler);
                            }
                        }
                    },
                    duilib: {},
                    bgAnim: null,
                    definedAssets: null
                };

                const duilib = DCFL_BG.duilib;

                // ==================== 侍灵动作配置 ====================
                const dcfl_actionData = {

                    xiaosha: {
                        daiji: 1,
                        gongji: 1,
                        jinnang: 1,
                        shouji: 1
                    },
                    yan: {
                        daiji: 4,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    xuanwu: {
                        daiji: 4,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    baize: {
                        daiji: 4,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    dundun: {
                        daiji: 3,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    jinwu: {
                        daiji: 4,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },

                };

                function dcfl_getActionCount(name, type) {
                    var data = dcfl_actionData[name];
                    return (data && data[type]) ? data[type] : 1;
                }

                // ==================== duilib 基础类====================
                duilib.CubicBezierEase = class {
                    constructor(p1x, p1y, p2x, p2y) {
                        this.cX = 3 * p1x;
                        this.bX = 3 * (p2x - p1x) - this.cX;
                        this.aX = 1 - this.cX - this.bX;
                        this.cY = 3 * p1y;
                        this.bY = 3 * (p2y - p1y) - this.cY;
                        this.aY = 1 - this.cY - this.bY;
                    }
                    getX(t) {
                        return t * (this.cX + t * (this.bX + t * this.aX));
                    }
                    getXDerivative(t) {
                        return this.cX + t * (2 * this.bX + 3 * this.aX * t);
                    }
                    ease(x) {
                        let prev, t = x;
                        do {
                            prev = t;
                            t = t - ((this.getX(t) - x) / this.getXDerivative(t));
                        } while (Math.abs(t - prev) > 1e-4);
                        return t * (this.cY + t * (this.bY + t * this.aY));
                    }
                };
                duilib.ease = function(fraction) {
                    if (!duilib.b3ease) duilib.b3ease = new duilib.CubicBezierEase(0.25, 0.1, 0.25, 1);
                    return duilib.b3ease.ease(fraction);
                };
                duilib.lerp = function(min, max, frac) {
                    return (max - min) * frac + min;
                };

                duilib.TimeStep = class {
                    constructor(init) {
                        this.start = init.start;
                        this.current = init.start;
                        this.end = init.end;
                        this.time = 0;
                        this.percent = 0;
                        this.duration = init.duration;
                        this.completed = false;
                    }
                    update(delta) {
                        this.time += delta;
                        this.percent = duilib.ease(Math.min(this.time / this.duration, 1));
                        const start = Array.isArray(this.start) ? this.start : [this.start, 0];
                        const end = Array.isArray(this.end) ? this.end : [this.end, 0];
                        this.current = Array.isArray(this.start) ? [duilib.lerp(start[0], end[0], this.percent), duilib.lerp(start[1], end[1], this.percent)] :
                            duilib.lerp(start[0], end[0], this.percent);
                        if (this.time >= this.duration) this.completed = true;
                    }
                };

                duilib.APNode = class {
                    constructor(init) {
                        if (!init) init = {};
                        this.id = undefined;
                        this.x = init.x;
                        this.y = init.y;
                        this.height = init.height;
                        this.width = init.width;
                        this.angle = init.angle;
                        this.scale = init.scale;
                        this.opacity = init.opacity;
                        this.clip = init.clip;
                        this.hideSlots = init.hideSlots;
                        this.clipSlots = init.clipSlots;
                        this.disableMask = init.disableMask;
                        this.renderX = this.renderY = this.renderAngle = this.renderScale = this.renderOpacity = this.renderClip = undefined;
                        this.mvp = new spine.webgl.Matrix4();
                        this.skeleton = init.skeleton;
                        this.name = init.name;
                        this.action = init.action;
                        this.loop = init.loop;
                        this.loopCount = init.loopCount;
                        this.speed = init.speed;
                        this.onupdate = init.onupdate;
                        this.oncomplete = init.oncomplete;
                        this.completed = true;
                        this.referNode = init.referNode;
                        this.referFollow = init.referFollow;
                        this.referBounds = undefined;
                        this.timestepMap = {};
                        this.flipX = init.flipX;
                        this.flipY = init.flipY;
                        this.premultipliedAlpha = init.premultipliedAlpha;
                    }
                    fadeTo(opacity, duration) {
                        if (opacity != null) {
                            this.updateTimeStep('opacity', this.opacity == null ? 1 : this.opacity, opacity, duration);
                            this.opacity = opacity;
                        }
                        return this;
                    }
                    moveTo(x, y, duration) {
                        if (x != null) {
                            this.updateTimeStep('x', this.x == null ? [0, 0.5] : this.x, x, duration);
                            this.x = x;
                        }
                        if (y != null) {
                            this.updateTimeStep('y', this.y == null ? [0, 0.5] : this.y, y, duration);
                            this.y = y;
                        }
                        return this;
                    }
                    scaleTo(scale, duration) {
                        if (scale != null) {
                            this.updateTimeStep('scale', this.scale == null ? 1 : this.scale, scale, duration);
                            this.scale = scale;
                        }
                        return this;
                    }
                    rotateTo(angle, duration) {
                        if (angle != null) {
                            this.updateTimeStep('angle', this.angle == null ? 0 : this.angle, angle, duration);
                            this.angle = angle;
                        }
                        return this;
                    }
                    update(e) {
                        const calc = (value, refer, dpr) => Array.isArray(value) ? value[0] * dpr + value[1] * refer : value * dpr;
                        const dpr = e.dpr;
                        let referSize = {
                            width: e.canvas.width,
                            height: e.canvas.height
                        };
                        const domNode = this.referNode instanceof HTMLElement ? this.referNode : undefined;
                        if (domNode) {
                            if (this.referFollow || !this.referBounds) {
                                const rect = domNode.getBoundingClientRect();
                                this.referBounds = {
                                    x: rect.left,
                                    y: window.innerHeight - rect.bottom,
                                    width: rect.width,
                                    height: rect.height
                                };
                            }
                            referSize.height = this.referBounds.height * dpr;
                            referSize.width = this.referBounds.width * dpr;
                        }
                        let timestep, renderX, renderY, renderScale, renderScaleX, renderScaleY;
                        const skSize = this.skeleton.bounds.size;
                        timestep = this.timestepMap.x;
                        if (timestep && !timestep.completed) {
                            timestep.update(e.delta);
                            renderX = calc(timestep.current, referSize.width, dpr);
                        } else if (this.x != null) renderX = calc(this.x, referSize.width, dpr);
                        timestep = this.timestepMap.y;
                        if (timestep && !timestep.completed) {
                            timestep.update(e.delta);
                            renderY = calc(timestep.current, referSize.height, dpr);
                        } else if (this.y != null) renderY = calc(this.y, referSize.height, dpr);
                        if (this.width != null) renderScaleX = calc(this.width, referSize.width, dpr) / skSize.x;
                        if (this.height != null) renderScaleY = calc(this.height, referSize.height, dpr) / skSize.y;
                        if (domNode) {
                            if (renderX == null) renderX = (this.referBounds.x + this.referBounds.width / 2) * dpr;
                            else renderX += this.referBounds.x * dpr;
                            if (renderY == null) renderY = (this.referBounds.y + this.referBounds.height / 2) * dpr;
                            else renderY += this.referBounds.y * dpr;
                        }
                        this.mvp.ortho2d(0, 0, e.canvas.width, e.canvas.height);
                        if (renderX != null && renderY == null) {
                            this.mvp.translate(renderX, 0, 0);
                            this.mvp.setY(0);
                        } else if (renderX == null && renderY != null) {
                            this.mvp.translate(0, renderY, 0);
                            this.mvp.setX(0);
                        } else if (renderX != null && renderY != null) {
                            this.mvp.translate(renderX, renderY, 0);
                        } else {
                            this.mvp.setPos2D(0, 0);
                        }
                        timestep = this.timestepMap.scale;
                        if (timestep && !timestep.completed) {
                            timestep.update(e.delta);
                            renderScale = timestep.current;
                        } else renderScale = this.scale == null ? 1 : this.scale;
                        if (renderScaleX && !renderScaleY) renderScale *= renderScaleX;
                        else if (!renderScaleX && renderScaleY) renderScale *= renderScaleY;
                        else if (renderScaleX && renderScaleY) renderScale *= Math.min(renderScaleX, renderScaleY);
                        else renderScale *= dpr;
                        if (renderScale !== 1) this.mvp.scale(renderScale, renderScale, 0);
                        timestep = this.timestepMap.angle;
                        if (timestep && !timestep.completed) {
                            timestep.update(e.delta);
                            this.renderAngle = timestep.current;
                        } else this.renderAngle = this.angle;
                        if (this.renderAngle) this.mvp.rotate(this.renderAngle, 0, 0, 1);
                        timestep = this.timestepMap.opacity;
                        if (timestep && !timestep.completed) {
                            timestep.update(e.delta);
                            this.renderOpacity = timestep.current;
                        } else this.renderOpacity = this.opacity;
                        this.renderX = renderX;
                        this.renderY = renderY;
                        this.renderScale = renderScale;
                        if (this.clip) {
                            this.renderClip = {
                                x: calc(this.clip.x, e.canvas.width, dpr),
                                y: calc(this.clip.y, e.canvas.height, dpr),
                                width: calc(this.clip.width, e.canvas.width, dpr),
                                height: calc(this.clip.height, e.canvas.height, dpr)
                            };
                        }
                        if (this.onupdate) this.onupdate();
                    }
                    setAction(action, transition) {
                        if (this.skeleton && this.skeleton.node === this) {
                            if (!this.skeleton.data.findAnimation(action)) return console.error('setAction: 未找到对应骨骼动作');
                            transition = transition == null ? 0.5 : transition / 1000;
                            const entry = this.skeleton.state.setAnimation(0, action, this.loop);
                            entry.mixDuration = transition;
                        } else console.error('setAction: 节点失去关联');
                    }
                    resetAction(transition) {
                        if (this.skeleton && this.skeleton.node === this) {
                            transition = transition == null ? 0.5 : transition / 1000;
                            const entry = this.skeleton.state.setAnimation(0, this.skeleton.defaultAction, this.loop);
                            entry.mixDuration = transition;
                        } else console.error('resetAction: 节点失去关联');
                    }
                    complete() {
                        if (!this.oncomplete) return;
                        if (typeof this.oncomplete === 'string') {
                            const a = this.oncomplete.indexOf('{');
                            const b = this.oncomplete.lastIndexOf('}');
                            if (a === -1 || b === -1) {
                                this.oncomplete = undefined;
                                return console.error(this.name + ' 的oncomplete函数语法错误');
                            }
                            this.oncomplete = new Function(this.oncomplete.substring(a + 1, b));
                        }
                        if (typeof this.oncomplete === 'function') this.oncomplete();
                    }
                    updateTimeStep(key, start, end, duration) {
                        if (!duration || duration === 0) return;
                        let ts = this.timestepMap[key];
                        if (ts) {
                            ts.start = ts.completed ? start : ts.current;
                            ts.end = end;
                            ts.time = 0;
                            ts.percent = 0;
                            ts.completed = false;
                            ts.duration = duration;
                        } else {
                            ts = this.timestepMap[key] = new duilib.TimeStep({
                                start,
                                end,
                                duration
                            });
                        }
                        return ts;
                    }
                };

                duilib.AnimationPlayer = class {
                    constructor(pathPrefix, parentNode, elementId) {
                        this.nodes = [];
                        this.canvas = null;
                        this.gl = null;
                        this.spine = {
                            assets: {}
                        };
                        this.running = false;
                        this.requestId = null;

                        if (!window.spine) {
                            console.warn('[叠彩峰岭] spine 未定义，AnimationPlayer 将不可用');
                            return;
                        }

                        var canvas;
                        if (parentNode === 'offscreen') {
                            canvas = elementId;
                            this.offscreen = true;
                        } else {
                            canvas = document.createElement('canvas');
                            canvas.className = 'dcfl-animation-player';
                            if (elementId != null) canvas.id = elementId;
                            if (parentNode != null) parentNode.appendChild(canvas);
                        }
                        var glOpts = {
                            alpha: true
                        };
                        var gl = canvas.getContext('webgl2', glOpts);
                        if (!gl) gl = canvas.getContext('webgl', glOpts) || canvas.getContext('experimental-webgl', glOpts);
                        if (gl) {
                            this.spine = {
                                shader: spine.webgl.Shader.newTwoColoredTextured(gl),
                                batcher: new spine.webgl.PolygonBatcher(gl),
                                skeletonRenderer: new spine.webgl.SkeletonRenderer(gl),
                                assetManager: new spine.webgl.AssetManager(gl, pathPrefix),
                                assets: {},
                                skeletons: []
                            };
                        } else {
                            this.spine = {
                                assets: {}
                            };
                            console.error('[叠彩峰岭] 当前设备不支持 WebGL.');
                        }
                        this.gl = gl;
                        this.canvas = canvas;
                        this.frameTime = undefined;
                        this.running = false;
                        this.resized = false;
                        this.dpr = 1;
                        this.nodes = [];
                        this.BUILT_ID = 0;
                        this._dprAdaptive = false;
                        Object.defineProperties(this, {
                            dprAdaptive: {
                                get: function() {
                                    return this._dprAdaptive;
                                },
                                set: function(v) {
                                    if (this._dprAdaptive !== v) {
                                        this._dprAdaptive = v;
                                        this.resized = false;
                                    }
                                }
                            },
                            useMipMaps: {
                                get: function() {
                                    return gl ? this.gl.useMipMaps : undefined;
                                },
                                set: function(v) {
                                    if (gl) this.gl.useMipMaps = v;
                                }
                            }
                        });
                        if (!this.offscreen) {
                            this.canvas.width = canvas.clientWidth;
                            this.canvas.height = canvas.clientHeight;
                        }
                        if (canvas.style) {
                            canvas.style.position = 'fixed';
                            canvas.style.top = '0';
                            canvas.style.left = '0';
                            canvas.style.width = '100%';
                            canvas.style.height = '100%';
                            canvas.style.pointerEvents = 'none';
                            canvas.style.zIndex = '5';
                            canvas.style.visibility = 'hidden';
                        }
                        this.check = function() {
                            if (!this.gl) {
                                var empty = function() {};
                                for (var key in this.__proto__)
                                    if (typeof this.__proto__[key] === 'function') this.__proto__[key] = empty;
                                for (var key in this)
                                    if (typeof this[key] === 'function' && key !== 'check') this[key] = empty;
                            }
                        };
                        this.check();
                    }

                    hasSpine(filename) {
                        return this.spine.assets[filename] != null;
                    }
                    loadSpine(filename, skelType, onload, onerror) {
                        skelType = skelType || 'skel';
                        const thisAnim = this;
                        const reader = {
                            name: filename,
                            filename: filename,
                            skelType: skelType,
                            onsuccess: onload,
                            onfailed: onerror,
                            loaded: 0,
                            errors: 0,
                            toLoad: 2,
                            onerror: function(path, msg) {
                                this.toLoad--;
                                this.errors++;
                                if (this.toLoad === 0) {
                                    console.error('loadSpine: [' + this.filename + '] 加载失败.');
                                    if (this.onfailed) this.onfailed();
                                }
                            },
                            onload: function(path, data) {
                                this.toLoad--;
                                this.loaded++;
                                if (this.toLoad === 0) {
                                    if (this.errors > 0) {
                                        console.error('loadSpine: [' + this.filename + '] 加载失败.');
                                        if (this.onfailed) this.onfailed();
                                    } else {
                                        thisAnim.spine.assets[this.filename] = {
                                            name: this.filename,
                                            skelType: this.skelType
                                        };
                                        if (this.onsuccess) this.onsuccess();
                                    }
                                }
                            },
                            ontextLoad: function(path, data) {
                                let imageName = null;
                                const atlasReader = new spine.TextureAtlasReader(data);
                                let prefix = '';
                                const a = this.name.lastIndexOf('/');
                                const b = this.name.lastIndexOf('\\');
                                if (a !== -1 || b !== -1) prefix = this.name.substring(0, (a > b ? a : b) + 1);
                                while (true) {
                                    let line = atlasReader.readLine();
                                    if (line == null) break;
                                    line = line.trim();
                                    if (line.length === 0) {
                                        imageName = null;
                                    } else if (!imageName) {
                                        imageName = line;
                                        this.toLoad++;
                                        thisAnim.spine.assetManager.loadTexture(prefix + imageName, reader.onload.bind(reader), reader.onerror.bind(reader));
                                    }
                                }
                                reader.onload(path, data);
                            }
                        };
                        if (skelType === 'json') {
                            thisAnim.spine.assetManager.loadText(filename + '.json', reader.onload.bind(reader), reader.onerror.bind(reader));
                        } else {
                            thisAnim.spine.assetManager.loadBinary(filename + '.skel', reader.onload.bind(reader), reader.onerror.bind(reader));
                        }
                        thisAnim.spine.assetManager.loadText(filename + '.atlas', reader.ontextLoad.bind(reader), reader.onerror.bind(reader));
                    }
                    prepSpine(filename, autoLoad) {
                        const assets = this.spine.assets;
                        if (!assets[filename]) {
                            if (autoLoad) {
                                this.loadSpine(filename, 'skel', () => this.prepSpine(filename));
                                return 'loading';
                            }
                            return console.error('prepSpine: [' + filename + '] 骨骼没有加载');
                        }
                        let skeleton;
                        for (let s of this.spine.skeletons) {
                            if (s.name === filename && s.completed) return s;
                        }
                        const asset = assets[filename];
                        const manager = this.spine.assetManager;
                        let skelRawData = asset.skelRawData;
                        if (!skelRawData) {
                            let prefix = '';
                            const a = filename.lastIndexOf('/');
                            const b = filename.lastIndexOf('\\');
                            if (a !== -1 || b !== -1) prefix = filename.substring(0, (a > b ? a : b) + 1);
                            const atlas = new spine.TextureAtlas(manager.get(filename + '.atlas'), path => manager.get(prefix + path));
                            const loader = new spine.AtlasAttachmentLoader(atlas);
                            if (asset.skelType.toLowerCase() === 'json') skelRawData = new spine.SkeletonJson(loader);
                            else skelRawData = new spine.SkeletonBinary(loader);
                            assets[filename].skelRawData = skelRawData;
                            assets[filename].ready = true;
                        }
                        const data = skelRawData.readSkeletonData(manager.get(filename + '.' + asset.skelType));
                        skeleton = new spine.Skeleton(data);
                        skeleton.name = filename;
                        skeleton.completed = true;
                        skeleton.setSkinByName('default');
                        skeleton.setToSetupPose();
                        skeleton.updateWorldTransform();
                        skeleton.state = new spine.AnimationState(new spine.AnimationStateData(skeleton.data));
                        skeleton.state.addListener({
                            complete: function(track) {
                                const node = skeleton.node;
                                if (node) {
                                    track.loop = node.loop == null ? false : node.loop;
                                    if (track.loop && node.loopCount > 0) {
                                        node.loopCount--;
                                        if (node.loopCount === 0) track.loop = false;
                                    }
                                    skeleton.completed = node.completed = !track.loop;
                                    if (node.complete) node.complete();
                                } else {
                                    skeleton.completed = !track.loop;
                                    console.error('skeleton complete: 超出预期的错误');
                                }
                            }
                        });
                        skeleton.bounds = {
                            offset: new spine.Vector2(),
                            size: new spine.Vector2()
                        };
                        skeleton.getBounds(skeleton.bounds.offset, skeleton.bounds.size, []);
                        skeleton.defaultAction = data.animations[0].name;
                        skeleton.node = undefined;
                        this.spine.skeletons.push(skeleton);
                        return skeleton;
                    }
                    playSpine(sprite, position) {
                        if (!sprite) return console.error('playSpine: parameter undefined');
                        if (typeof sprite === 'string') sprite = {
                            name: sprite
                        };
                        if (!this.hasSpine(sprite.name)) return console.error('playSpine: [' + sprite.name + '] 骨骼没有加载');
                        let skeleton;
                        if (!(sprite instanceof duilib.APNode && sprite.skeleton && sprite.skeleton.completed)) {
                            for (let s of this.spine.skeletons) {
                                if (s.name === sprite.name && s.completed) {
                                    skeleton = s;
                                    break;
                                }
                            }
                            if (!skeleton) skeleton = this.prepSpine(sprite.name);
                            if (!(sprite instanceof duilib.APNode)) {
                                const param = sprite;
                                sprite = new duilib.APNode(param);
                                sprite.id = param.id == null ? this.BUILT_ID++ : param.id;
                                this.nodes.push(sprite);
                            }
                            sprite.skeleton = skeleton;
                            skeleton.node = sprite;
                        }
                        sprite.completed = false;
                        skeleton.completed = false;
                        if (position != null) {
                            sprite.x = position.x;
                            sprite.y = position.y;
                            sprite.height = position.height;
                            sprite.width = position.width;
                            sprite.scale = position.scale;
                            sprite.angle = position.angle;
                            sprite.referNode = position.parent;
                            sprite.referFollow = position.follow;
                        }
                        const entry = skeleton.state.setAnimation(0, sprite.action || skeleton.defaultAction, sprite.loop);
                        entry.mixDuration = 0;
                        if (this.requestId == null) {
                            this.running = true;
                            if (!this.offscreen) this.canvas.style.visibility = 'visible';
                            this.requestId = requestAnimationFrame(this.render.bind(this));
                        }
                        sprite.referBounds = undefined;
                        return sprite;
                    }
                    loopSpine(sprite, position) {
                        if (typeof sprite === 'string') sprite = {
                            name: sprite,
                            loop: true
                        };
                        else sprite.loop = true;
                        return this.playSpine(sprite, position);
                    }
                    stopSpine(sprite) {
                        const id = sprite.id == null ? sprite : sprite.id;
                        for (let s of this.nodes) {
                            if (s.id === id) {
                                if (!s.completed) {
                                    s.completed = true;
                                    s.skeleton.state.setEmptyAnimation(0);
                                }
                                return s;
                            }
                        }
                        return null;
                    }
                    stopSpineAll() {
                        for (let s of this.nodes) {
                            if (!s.completed) {
                                s.completed = true;
                                s.skeleton.state.setEmptyAnimation(0);
                            }
                        }
                        this.nodes = [];
                        this.frameTime = undefined;
                        this.running = false;
                        this.current = null;
                    }
                    render(timestamp) {
                        const canvas = this.canvas;
                        const offscreen = this.offscreen;
                        let dpr = 1;
                        if (this.dprAdaptive) {
                            dpr = offscreen ? (this.dpr != null ? this.dpr : 1) : Math.max(window.devicePixelRatio * (window.documentZoom || 1), 1);
                        }
                        const delta = timestamp - (this.frameTime || timestamp);
                        this.frameTime = timestamp;
                        let erase = true;
                        const resize = !this.resized || canvas.width === 0 || canvas.height === 0;
                        if (resize) {
                            this.resized = true;
                            if (!offscreen) {
                                canvas.width = dpr * canvas.clientWidth;
                                canvas.height = dpr * canvas.clientHeight;
                                erase = false;
                            } else {
                                if (this.width) {
                                    canvas.width = dpr * this.width;
                                    erase = false;
                                }
                                if (this.height) {
                                    canvas.height = dpr * this.height;
                                    erase = false;
                                }
                            }
                        }
                        const ea = {
                            dpr,
                            delta,
                            canvas,
                            frameTime: timestamp
                        };
                        for (let i = 0; i < this.nodes.length; i++) {
                            if (!this.nodes[i].completed) this.nodes[i].update(ea);
                            else {
                                this.nodes.splice(i, 1);
                                i--;
                            }
                        }
                        const gl = this.gl;
                        gl.viewport(0, 0, canvas.width, canvas.height);
                        if (erase) {
                            gl.clearColor(0, 0, 0, 0);
                            gl.clear(gl.COLOR_BUFFER_BIT);
                        }
                        if (this.nodes.length === 0) {
                            this.frameTime = undefined;
                            this.requestId = undefined;
                            this.running = false;
                            return;
                        }
                        const shader = this.spine.shader;
                        const batcher = this.spine.batcher;
                        const renderer = this.spine.skeletonRenderer;
                        gl.enable(gl.SCISSOR_TEST);
                        gl.scissor(0, 0, canvas.width, canvas.height);
                        if (!this.bindShader) {
                            this.bindShader = shader;
                            shader.bind();
                            shader.setUniformi(spine.webgl.Shader.SAMPLER, 0);
                        }
                        for (let sprite of this.nodes) {
                            if (sprite.renderClip) {
                                gl.clipping = sprite.renderClip;
                                gl.scissor(gl.clipping.x, gl.clipping.y, gl.clipping.width, gl.clipping.height);
                            }
                            const skel = sprite.skeleton;
                            const state = skel.state;
                            const speed = sprite.speed == null ? 1 : sprite.speed;
                            skel.flipX = sprite.flipX;
                            skel.flipY = sprite.flipY;
                            skel.opacity = sprite.renderOpacity == null ? 1 : sprite.renderOpacity;
                            state.hideSlots = sprite.hideSlots;
                            state.update(delta / 1000 * speed);
                            state.apply(skel);
                            skel.updateWorldTransform();
                            shader.setUniform4x4f(spine.webgl.Shader.MVP_MATRIX, sprite.mvp.values);
                            batcher.begin(shader);
                            renderer.premultipliedAlpha = sprite.premultipliedAlpha;
                            renderer.outcropMask = this.outcropMask;
                            if (renderer.outcropMask) {
                                renderer.outcropX = sprite.renderX;
                                renderer.outcropY = sprite.renderY;
                                renderer.outcropScale = sprite.renderScale;
                                renderer.outcropAngle = sprite.renderAngle;
                                renderer.clipSlots = sprite.clipSlots;
                            }
                            renderer.hideSlots = sprite.hideSlots;
                            renderer.disableMask = sprite.disableMask;
                            renderer.draw(batcher, skel);
                            batcher.end();
                            if (gl.clipping) {
                                gl.clipping = undefined;
                                gl.scissor(0, 0, canvas.width, canvas.height);
                            }
                        }
                        gl.disable(gl.SCISSOR_TEST);
                        this.requestId = requestAnimationFrame(this.render.bind(this));
                    }
                };

                // ==================== 背景资源定义====================
                const definedAssets = {
                    xiaosha: {
                        default: {
                            name: 'skin_xiaosha_default',
                            x: [0, 0.7],
                            y: [0, 0.3],
                            height: [0, 0.35]
                        }
                    },
                    yan: {
                        default: {
                            name: 'yan',
                            action: 'daiji1',
                            x: [0, 0.7],
                            y: [0, 0.28],
                            height: [0, 0.55]
                        }
                    },
                    dundun: {
                        default: {
                            name: 'dundun',
                            action: 'daiji1',
                            x: [0, 0.7],
                            y: [0, 0.28],
                            height: [0, 0.42]
                        }
                    },
                    jinwu: {
                        default: {
                            name: 'jinwu',
                            action: 'daiji1',
                            x: [0, 0.7],
                            y: [0, 0.3],
                            height: [0, 0.4]
                        }
                    },
                    baize: {
                        default: {
                            name: 'baize',
                            action: 'daiji1',
                            x: [0, 0.7],
                            y: [0, 0.28],
                            height: [0, 0.36]
                        }
                    },
                    xuanwu: {
                        default: {
                            name: 'xuanwu',
                            action: 'daiji1',
                            x: [0, 0.7],
                            y: [0, 0.3],
                            height: [0, 0.39]
                        }
                    },

                };
                DCFL_BG.definedAssets = definedAssets;

                // ==================== 创建播放器实例 ====================
                const bgAnim = new duilib.AnimationPlayer(lib.assetURL + 'extension/叠彩峰岭/', document.body, 'dcfl-bg-canvas');
                bgAnim.dprAdaptive = true;
                bgAnim.definedAssets = definedAssets;

                // ==================== 核心动作播放函数 ====================
                var dcfl_currentAssetName = null; // 当前骨骼文件名（用于音频）
                var dcfl_currentServant = null; // 当前侍灵名称

                function dcfl_playAction(node, actionName, loop) {
                    if (!node || !node.skeleton) {
                        console.warn('[叠彩峰岭] dcfl_playAction: node或skeleton为空');
                        return;
                    }
                    try {
                        if (loop) {
                            // 循环播放指定动作
                            node.skeleton.state.setAnimation(0, actionName, true);
                        } else {
                            // 原逻辑：播放一次动作后回到待机循环
                            node.skeleton.state.setAnimation(0, actionName, false);
                            node.skeleton.state.addAnimation(0, 'daiji1', true, 0);
                        }
                    } catch (e) {
                        // 异常时直接待机循环
                        try {
                            node.skeleton.state.setAnimation(0, 'daiji1', true);
                        } catch (e2) {}
                    }
                }

                // 随机播放非待机动作（点击触发，功能未完善）
                /*function dcfl_playRandomAction() {
                    var node = bgAnim.current;
                    //var bg = window._dcfl_bg;                            
                    //var node = bg.bgAnim.current;                    
                    if (!node) return;
                    var name = dcfl_currentServant || 'skin_xiaosha_default';
                    var actions = [];
                    var data = dcfl_actionData[name];
                    if (data) {
                        if (data.gongji)
                            for (var i = 1; i <= data.gongji; i++) actions.push('gongji' + i);
                        if (data.jinnang)
                            for (var i = 1; i <= data.jinnang; i++) actions.push('jinnang' + i);
                        if (data.shouji)
                            for (var i = 1; i <= data.shouji; i++) actions.push('shouji' + i);
                        if (data.shengli) actions.push('shengli');
                        if (data.shibai) actions.push('shibai');
                    }
                    if (actions.length === 0) actions = ['gongji1'];
                    var chosen = actions[Math.floor(Math.random() * actions.length)];
                    dcfl_playAction(node, chosen);
                }*/

                // ==================== bgAnim.play ====================
                bgAnim.play = function(name, skin) {
                    const def = this.definedAssets;
                    if (!def[name] || !def[name][skin]) {
                        console.log('[叠彩峰岭] 没有预定义[asset:' + name + ', skin:' + skin + ']的动态背景.');
                        return;
                    }
                    if (this.current && this.current.name === name) return;
                    this.stopSpineAll();

                    const playAsset = def[name][skin];
                    if (this.hasSpine(playAsset.name)) {
                        this.current = this.loopSpine(playAsset);
                        dcfl_currentServant = name;
                        dcfl_currentAssetName = playAsset.name; // 记录实际骨骼文件名
                        return;
                    }

                    const _this = this;
                    if (this._loading) {
                        return;
                    }
                    this._loading = true;

                    this.loadSpine(playAsset.name, 'skel',
                        function() {
                            _this._loading = false;
                            if (_this.current && _this.current.name === playAsset.name) return;
                            _this.current = _this.loopSpine(playAsset);
                            dcfl_currentServant = name;
                            dcfl_currentAssetName = playAsset.name; // 记录实际骨骼文件名
                        },
                        function(err) {
                            _this._loading = false;
                            console.warn('[叠彩峰岭] 加载背景失败:', playAsset.name, err);
                            _this.current = null;
                            dcfl_currentServant = null;
                        }
                    );
                };

                // ==================== 随机播放一个侍灵 ====================
                function dcfl_playRandomServant(excludeName) {
                    if (!definedAssets) return null;
                    var keys = Object.keys(definedAssets).filter(function(k) {
                        var cfg = definedAssets[k];
                        return cfg && cfg.default && cfg.default.name;
                    });
                    if (!keys.length) return null;
                    if (excludeName && keys.length > 1) {
                        var filtered = keys.filter(function(k) {
                            return k !== excludeName;
                        });
                        if (filtered.length) keys = filtered;
                    }
                    var pick = keys[Math.floor(Math.random() * keys.length)];
                    bgAnim.play(pick, 'default');
                    return pick;
                }

                // ==================== 增强 render ====================
                const originalRender = bgAnim.render;
                bgAnim.render = function(timestamp) {
                    originalRender.call(this, timestamp);
                    if (this.nodes.length === 0 && this.current) {
                        this.current = null;
                    }
                };

                // ==================== Canvas 点击触发随机动作 （功能未完善）====================
                /*if (bgAnim.canvas) {
                    bgAnim.canvas.style.pointerEvents = 'auto';
                    bgAnim.canvas.addEventListener('click', function(e) {
                        dcfl_playRandomAction();
                    });
                }*/

                // ==================== 保存实例 ====================
                DCFL_BG.bgAnim = bgAnim;
                DCFL_BG.playAction = dcfl_playAction;
                DCFL_BG.getActionCount = dcfl_getActionCount;
                DCFL_BG.playRandomServant = dcfl_playRandomServant;
                DCFL_BG.getCurrentServant = function() {
                    return dcfl_currentServant;
                };
                DCFL_BG.getCurrentAssetName = function() {
                    return dcfl_currentAssetName;
                };
                window._dcfl_bg = DCFL_BG;

                window._dcfl_duilib = duilib; //侍灵图鉴的

                // ==================== 配置更新函数 ====================
                window._dcfl_bg_update = function() {
                    const val = lib.config.extension_叠彩峰岭_dcfl_dynamicBackground || 'off';
                    if (val === 'random') {
                        dcfl_playRandomServant();
                    } else if (val && val !== 'off') {
                        const parts = val.split('_');
                        const skin = parts.pop();
                        const name = parts.join('_');
                        bgAnim.play(name, skin);
                    } else {
                        bgAnim.stopSpineAll();
                    }
                };

                // ==================== 初始化 ====================
                const initVal = lib.config.extension_叠彩峰岭_dcfl_dynamicBackground || 'off';
                if (initVal === 'random') {
                    dcfl_playRandomServant();
                } else if (initVal !== 'off') {
                    const parts = initVal.split('_');
                    const skin = parts.pop();
                    const name = parts.join('_');
                    bgAnim.play(name, skin);
                } else {
                    console.log('[叠彩峰岭] 动态背景初始为关闭状态');
                }

                // ==================== 劫持 addOverDialog（胜利/失败动作） ====================
                const origAddOverDialog = game.addOverDialog;
                game.addOverDialog = function(dialog, result) {
                    if (typeof origAddOverDialog === 'function') origAddOverDialog.call(this, dialog, result);
                    /*var bg = bgAnim;
                    if (!bg) return;*/
                    var bg = window._dcfl_bg && window._dcfl_bg.bgAnim;
                    if (!bg) return;
                    var sprite = bg.current;
                    if (!sprite) return;
                    bg.canvas.style.zIndex = 7;
                    var actionName;
                    switch (result) {
                        case '战斗胜利':
                            if (sprite.name == 'skin_xiaosha_default') {
                                actionName = 'shengli';
                            } else {
                                actionName = 'gongji1';
                            }
                            break;
                        case '平局':
                            actionName = 'jinnang1';
                            break;
                        case '战斗失败':
                            actionName = (sprite.name === 'skin_xiaosha_default') ? 'gongji' : 'shouji1';
                            break;
                        default:
                            return;
                    }

                    if (actionName) {
                        //dcfl_playAction(sprite, actionName);//播放一次
                        dcfl_playAction(sprite, actionName, true); //循环播放
                    }
                };

                // ==================== 窗口自适应 ====================
                DCFL_BG.helper.bodySensor.addListener(() => {
                    bgAnim.resized = false;
                });

                // ==================== 注册动作触发技能 ====================
                //const bgEnabled = config.dcfl_dynamicBackground && config.dcfl_dynamicBackground !== 'off';
                const bgEnabled = (lib.config.extension_叠彩峰岭_dcfl_dynamicBackground || 'off') !== 'off';
                if (bgEnabled && window._dcfl_bg && window._dcfl_bg.bgAnim) {
                    lib.skill._dcfl_slDamage = {
                        trigger: {
                            source: 'damageBegin',
                        },
                        forced: true,
                        filter: function(event, player) {
                            var bg = window._dcfl_bg;
                            return player == game.me && event.card && event.card.name == 'sha' && event.num > 0 && bg && bg.bgAnim && bg.bgAnim.current && bg.bgAnim.current.skeleton;
                        },
                        content: function() {
                            var bg = window._dcfl_bg;
                            if (!bg || !bg.bgAnim || !bg.bgAnim.current) return;

                            var node = bg.bgAnim.current;
                            var cfg = lib.config.extension_叠彩峰岭_dcfl_dynamicBackground || 'off';

                            function playAndThen(actionName) {
                                if (cfg === 'random') {
                                    var triggerServant = bg.getCurrentServant ? bg.getCurrentServant() : null;
                                    node.oncomplete = function() {
                                        node.oncomplete = null;
                                        if (bg._dcfl_randomSwitchTimer) {
                                            clearTimeout(bg._dcfl_randomSwitchTimer);
                                            bg._dcfl_randomSwitchTimer = null;
                                        }

                                        bg._dcfl_randomSwitchTimer = setTimeout(function() {
                                            bg._dcfl_randomSwitchTimer = null;
                                            if (bg.bgAnim.current !== node) return;
                                            var nowServant = bg.getCurrentServant ? bg.getCurrentServant() : null;
                                            if (nowServant !== triggerServant) return;
                                            if (bg.playRandomServant) {
                                                bg.playRandomServant(nowServant);
                                            }
                                        }, 200);
                                    };
                                }
                                bg.playAction(node, actionName);
                            }

                            if (node.name === "skin_xiaosha_default") {
                                playAndThen('shengli');
                                event.finish();
                                return;
                            }

                            var name = bg.getCurrentServant ? bg.getCurrentServant() : null;
                            var count = bg.getActionCount(name, 'gongji');
                            if (count <= 0) return;
                            var num = Math.floor(Math.random() * count) + 1;

                            playAndThen('gongji' + num);

                            var assetName = bg.getCurrentAssetName ? bg.getCurrentAssetName() : null;
                            if (assetName) {
                                game.playAudio("..", "extension", "叠彩峰岭", assetName + ".mp3");
                            }
                        }
                    };
                    lib.skill._dcfl_slUseCard = {
                        trigger: {
                            player: 'useCardBefore',
                        },
                        forced: true,
                        filter: function(event, player) {
                            var bg = window._dcfl_bg;
                            if (!bg || !bg.bgAnim || !bg.bgAnim.current || !bg.bgAnim.current.skeleton) return false;
                            var card = event.card;
                            var type = get.type(card, 'trick');
                            return player == game.me && (type === 'trick' || card.name === 'tao' || card.name === 'jiu');
                        },
                        content: function() {
                            var bg = window._dcfl_bg;
                            if (!bg || !bg.bgAnim || !bg.bgAnim.current) return;
                            if (bg.bgAnim.current.name === "skin_xiaosha_default") {
                                bg.playAction(bg.bgAnim.current, 'shengli');
                                event.finish();
                            }
                            if (bg && bg.bgAnim && bg.bgAnim.current) {
                                bg.playAction(bg.bgAnim.current, 'jinnang1');
                            }
                        }
                    };
                    lib.skill._dcfl_slTurnOver = {
                        trigger: {
                            player: ['turnOverEnd'],
                        },
                        forced: true,
                        filter: function(event, player) {
                            var bg = window._dcfl_bg;
                            return player == game.me && bg && bg.bgAnim && bg.bgAnim.current && bg.bgAnim.current.skeleton;
                        },
                        content: function() {
                            var bg = window._dcfl_bg;
                            if (!bg || !bg.bgAnim || !bg.bgAnim.current) return;
                            if (player.isTurnedOver()) {
                                if (bg.bgAnim.current.name === "skin_xiaosha_default") {
                                    bg.playAction(bg.bgAnim.current, 'gongji');
                                    event.finish();
                                }
                                var name = bg.getCurrentServant();
                                var count = bg.getActionCount(name, 'shouji');
                                if (count <= 0) return;
                                var num = Math.floor(Math.random() * count) + 1;
                                bg.playAction(bg.bgAnim.current, 'shouji' + num);

                            } else {
                                if (bg.bgAnim.current.name === "skin_xiaosha_default") {
                                    bg.playAction(bg.bgAnim.current, 'shengli');
                                    event.finish();
                                }
                                var name = bg.getCurrentServant();
                                var count = bg.getActionCount(name, 'jinnang');
                                if (count <= 0) return;
                                var num = Math.floor(Math.random() * count) + 1;
                                bg.playAction(bg.bgAnim.current, 'jinnang' + num);

                            }
                        },
                    };
                    lib.skill._dcfl_slHurt = {
                        trigger: {
                            player: ['damageBegin', 'loseHpEnd'],
                        },
                        forced: true,
                        filter: function(event, player) {
                            var bg = window._dcfl_bg;
                            return player == game.me && bg && bg.bgAnim && bg.bgAnim.current && bg.bgAnim.current.skeleton;
                        },
                        content: function() {
                            var bg = window._dcfl_bg;
                            if (!bg || !bg.bgAnim || !bg.bgAnim.current) return;
                            if (bg.bgAnim.current.name === "skin_xiaosha_default") {
                                bg.playAction(bg.bgAnim.current, 'gongji');
                                event.finish();
                            }
                            var name = bg.getCurrentServant();
                            var count = bg.getActionCount(name, 'shouji');
                            if (count <= 0) return;
                            var num = Math.floor(Math.random() * count) + 1;
                            bg.playAction(bg.bgAnim.current, 'shouji' + num);
                        }
                    };

                    if (!lib.arenaReady) lib.arenaReady = [];
                    lib.arenaReady.push(function() {
                        if (game.me) {
                            game.me.addSkill('_dcfl_slDamage');
                            game.me.addSkill('_dcfl_slUseCard');
                            game.me.addSkill('_dcfl_slHurt');
                        }
                    });
                } else if (bgEnabled) {
                    console.warn('[叠彩峰岭] 动态背景已开启但 Spine 未就绪，技能动画失效。');
                }

                console.log('[叠彩峰岭] 动态背景已加载（独立完整模块），当前配置:', config.dcfl_dynamicBackground);
            })();

            // ========== 侍灵背景选择弹窗（头像网格选择侍灵动画） ==========
            game.openServantBgSelect = function() {
                if (!window._dcfl_spine_loaded || !window._dcfl_bg || !window._dcfl_bg.definedAssets) {
                    alert('侍灵动画功能需要 Spine 支持，请检查扩展文件完整性。');
                    return;
                }
                ui.system.style.display = 'none';
                ui.menuContainer.style.display = 'none';
                ui.click.configMenu();

                var assets = window._dcfl_bg ? window._dcfl_bg.definedAssets : null;
                if (!assets) {
                    console.warn('[叠彩峰岭] 未找到背景资源定义，请检查扩展加载顺序');
                    ui.system.style.display = '';
                    ui.menuContainer.style.display = '';
                    return;
                }

                var servantList = [];
                var nameSet = {};
                for (var key in assets) {
                    var parts = key.split('_');
                    var servantName = parts[0];
                    if (nameSet[servantName]) continue;
                    nameSet[servantName] = true;
                    var config = assets[key];
                    if (config && config.default) config = config.default;
                    var boneName = (config && config.name) ? config.name : servantName;
                    servantList.push({
                        servantName: servantName,
                        boneName: boneName,
                        storageKey: servantName + "_default"
                    });
                }

                servantList.unshift({
                    servantName: '关闭',
                    boneName: null,
                    storageKey: 'off'
                }, {
                    servantName: '随机',
                    boneName: null,
                    storageKey: 'random'
                });

                var page = new Page();
                page.body = ui.create.div();
                page.body.className = 'sltj_tujian_page';
                var mainContainer = ui.create.div();
                mainContainer.className = 'sltj_tujianBgSelect_container';

                var rightPanel = ui.create.div();
                rightPanel.className = 'sltj_tujian_panel';

                var gridWrap = ui.create.div();
                gridWrap.className = 'dcfl_bg_select_grid';
                rightPanel.appendChild(gridWrap);
                mainContainer.appendChild(rightPanel);

                var currentVal = lib.config.extension_叠彩峰岭_dcfl_dynamicBackground || "off";

                function closePage() {
                    page.hide();
                    if (page.body && page.body.parentNode) {
                        page.body.parentNode.removeChild(page.body);
                    }
                    ui.system.style.display = '';
                    setTimeout(function() {
                        ui.click.configMenu();
                        ui.menuContainer.style.display = '';
                    }, 100);
                }

                servantList.forEach(function(item) {
                    var servantName = item.servantName;
                    var boneName = item.boneName;
                    var storageKey = item.storageKey;

                    var iconDiv = ui.create.div();
                    iconDiv.className = 'sltj_tujian_icon';
                    iconDiv.setAttribute('data-storage', storageKey);
                    if (currentVal === storageKey) {
                        iconDiv.classList.add("active");
                    }

                    if (storageKey === 'off' || storageKey === 'random') {
                        iconDiv.classList.add('dcfl_bg_select_off');
                        var textSpan = document.createElement('span');
                        textSpan.textContent = storageKey === 'off' ? '关闭' : '随机';
                        if (storageKey === 'random') {
                            textSpan.style.color = '#ffd700';
                        }
                        iconDiv.appendChild(textSpan);
                    } else {
                        var img = document.createElement('img');
                        img.className = 'sltj_tujian_icon_img';
                        var imgPath = lib.assetURL + 'extension/叠彩峰岭/dcfl_' + boneName + '.png';
                        img.src = imgPath;
                        img.onerror = function() {
                            this.style.display = 'none';
                            var fallback = document.createElement('span');
                            fallback.className = 'sltj_tujian_icon_fallback';
                            fallback.textContent = servantName;
                            this.parentNode.appendChild(fallback);
                        };
                        iconDiv.appendChild(img);
                    }

                    iconDiv.addEventListener('click', function() {
                        lib.config.extension_叠彩峰岭_dcfl_dynamicBackground = storageKey;
                        game.saveConfig('extension_叠彩峰岭_dcfl_dynamicBackground', storageKey);
                        if (window._dcfl_bg_update) {
                            window._dcfl_bg_update();
                        }
                        gridWrap.querySelectorAll(".sltj_tujian_icon").forEach(function(el) {
                            el.classList.remove("active");
                        });
                        this.classList.add("active");
                        closePage();
                    });
                    gridWrap.appendChild(iconDiv);
                });

                page.body.appendChild(mainContainer);
                page.show();
                page.body.style.display = 'flex';
                page.body.style.alignItems = 'center';
                page.body.style.justifyContent = 'center';
                page.body.style.backgroundColor = 'rgba(0,0,0,0.7)';
            };

            // ===================== 侍灵图鉴 =====================
            game.openServantTujian = function() {
                if (!window._dcfl_spine_loaded || !window._dcfl_duilib) {
                    alert('侍灵图鉴需要 Spine 支持，请检查扩展文件完整性。');
                    return;
                }
                ui.system.style.display = 'none';
                ui.menuContainer.style.display = 'none';
                ui.click.configMenu();

                var localServantAssets = {
                    xiaosha: {
                        default: {
                            name: 'skin_xiaosha_default',
                            x: [0, 0.5],
                            y: [0, 0.6],
                            height: [0, 0.7]
                        }
                    },
                    yan: {
                        default: {
                            name: 'yan',
                            action: 'daiji1',
                            x: [0, 0.5],
                            y: [0, 0.6],
                            height: [0, 0.9]
                        }
                    },
                    dundun: {
                        default: {
                            name: 'dundun',
                            action: 'daiji1',
                            x: [0, 0.5],
                            y: [0, 0.55],
                            height: [0, 0.8]
                        }
                    },
                    jinwu: {
                        default: {
                            name: 'jinwu',
                            action: 'daiji1',
                            x: [0, 0.5],
                            y: [0, 0.6],
                            height: [0, 0.85]
                        }
                    },
                    baize: {
                        default: {
                            name: 'baize',
                            action: 'daiji1',
                            x: [0, 0.5],
                            y: [0, 0.55],
                            height: [0, 0.7]
                        }
                    },
                    xuanwu: {
                        default: {
                            name: 'xuanwu',
                            action: 'daiji1',
                            x: [0, 0.5],
                            y: [0, 0.6],
                            height: [0, 0.8]
                        }
                    },

                };

                //动作配置：
                var localServantActionData = {
                    xiaosha: {
                        shengli: 1,
                        gongji: 1
                    },
                    yan: {
                        daiji: 4,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    xuanwu: {
                        daiji: 4,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    baize: {
                        daiji: 4,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    dundun: {
                        daiji: 3,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    jinwu: {
                        daiji: 4,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },

                };

                function localGetActionCount(name, type) {
                    var data = localServantActionData[name];
                    return (data && data[type]) ? data[type] : 1;
                }
                var servantList = [];
                var nameSet = {};
                for (var key in localServantAssets) {
                    var parts = key.split('_');
                    var servantName = parts[0];
                    if (nameSet[servantName]) continue;
                    nameSet[servantName] = true;
                    var config = localServantAssets[key];
                    if (config && config.default) config = config.default;
                    var boneName = (config && config.name) ? config.name : servantName;
                    var action = (config && config.action) ? config.action : null;
                    servantList.push({
                        servantName: servantName,
                        boneName: boneName,
                        action: action
                    });
                }
                if (servantList.length === 0) {
                    alert('未找到任何侍灵资源，请检查扩展文件是否正确安装。');
                    return;
                }
                if (window._sltj_tujian_page && window._sltj_tujian_page.body && window._sltj_tujian_page.body.parentNode) {
                    window._sltj_tujian_page.body.parentNode.removeChild(window._sltj_tujian_page.body);
                    window._sltj_tujian_page = null;
                }
                if (window._sltj_tujian_player) {
                    window._sltj_tujian_player.stopSpineAll();
                    window._sltj_tujian_player = null;
                }
                var page = new Page();
                page.body = ui.create.div();
                page.body.className = 'sltj_tujian_page';
                var mainContainer = ui.create.div();
                mainContainer.className = 'sltj_tujian_container';
                var rightPanel = ui.create.div();
                rightPanel.className = 'sltj_tujian_panel';
                var closeBtn = ui.create.div('.sltj_tujian_close', '×');
                closeBtn.addEventListener('click', function() {
                    if (page.body && page.body.parentNode) {
                        page.body.parentNode.removeChild(page.body);
                    }
                    window._sltj_tujian_page = null;
                    if (window._sltj_tujian_player) {
                        window._sltj_tujian_player.stopSpineAll();
                        window._sltj_tujian_player = null;
                    }
                    ui.system.style.display = '';
                    setTimeout(function() {
                        ui.click.configMenu();
                        ui.menuContainer.style.display = '';
                    }, 100);
                });
                rightPanel.appendChild(closeBtn);
                var title = ui.create.div('.sltj_tujian_title', '侍灵图鉴');
                rightPanel.appendChild(title);
                var animContainer = ui.create.div();
                animContainer.className = 'sltj_tujian_anim_container';
                var canvas = document.createElement('canvas');
                canvas.className = 'sltj_tujian_canvas';
                animContainer.appendChild(canvas);

                var btn1 = ui.create.div();
                btn1.className = 'sltj_float_btn sltj_float_btn1';

                var btn2 = ui.create.div();
                btn2.className = 'sltj_float_btn sltj_float_btn2';

                var btn3 = ui.create.div();
                btn3.className = 'sltj_float_btn sltj_float_btn3';

                animContainer.appendChild(btn1);
                animContainer.appendChild(btn2);
                animContainer.appendChild(btn3);

                // ==================== 隐形参照系（无图片，仅提供固定尺寸坐标基准） ====================
                var zuodianImg = ui.create.div();
                zuodianImg.className = 'sltj_tujian_zuodian';
                animContainer.appendChild(zuodianImg);
                //===============以上几行为新增===================                
                rightPanel.appendChild(animContainer);
                mainContainer.appendChild(rightPanel);
                var leftList = ui.create.div();
                leftList.className = 'sltj_tujian_list';
                var player = new window._dcfl_duilib.AnimationPlayer(
                    lib.assetURL + 'extension/叠彩峰岭/',
                    animContainer,
                    canvas
                );
                player.offscreen = false;
                player.dprAdaptive = true;
                player.resized = false;
                player._triedBackupBone = false;
                var bg = window._dcfl_bg;

                function playAction(servantName, actionName) {
                    var player = window._sltj_tujian_player;
                    if (!player) return;
                    var node = player.current;
                    if (!node) {
                        setTimeout(function() {
                            playAction(servantName, actionName);
                        }, 200);
                        return;
                    }
                    var skeleton = node.skeleton;
                    if (!skeleton) return;
                    var anim = skeleton.data.findAnimation(actionName);
                    if (!anim) {
                        console.warn('动作不存在:', actionName);
                        return;
                    }
                    skeleton.state.setAnimation(0, actionName, false);
                    var idleAct = skeleton.defaultAction;
                    var idleAnim = skeleton.data.findAnimation(idleAct);
                    if (idleAnim) {
                        skeleton.state.addAnimation(0, idleAct, true, 0);
                    } else {
                        console.warn("当前骨骼找不到待机动作，播放完动作不再回待机");
                    }
                }

                function buildBtn(dom, label, baseAct, maxCount, isNoNumber) {
                    dom.textContent = label;
                    dom._index = 0;
                    dom.style.display = 'block';
                    dom.onclick = function() {
                        var allBtns = document.querySelectorAll('.sltj_float_btn');
                        allBtns.forEach(function(b) {
                            b.classList.remove('active');
                        });
                        this.classList.add('active');

                        var actName;
                        if (isNoNumber) {
                            actName = baseAct;
                        } else {
                            var realIdx = (this._index % maxCount) + 1;
                            actName = baseAct + realIdx;
                            this._index = this._index + 1;
                        }

                        if (!isNoNumber && this === document.querySelector('.sltj_float_btn1')) {
                            var assetName = this._tujian_assetName;
                            if (assetName) {
                                game.playAudio("..", "extension", "叠彩峰岭", assetName + ".mp3");
                            }
                        }
                        playAction(dom._currentServant, actName);
                    };
                    dom._currentServant = player._currentSelectServant;
                }

                function refreshButtons(servantName) {
                    var b1 = document.querySelector('.sltj_float_btn1');
                    var b2 = document.querySelector('.sltj_float_btn2');
                    var b3 = document.querySelector('.sltj_float_btn3');
                    if (!b1 || !b2 || !b3) return;

                    b1.innerHTML = '';
                    b2.innerHTML = '';
                    b3.innerHTML = '';
                    b1.style.display = 'none';
                    b2.style.display = 'none';
                    b3.style.display = 'none';

                    player._currentSelectServant = servantName;
                    var servantAsset = localServantAssets[servantName];
                    var assetName = (servantAsset && servantAsset.default && servantAsset.default.name) ? servantAsset.default.name : null;
                    b1._tujian_assetName = assetName;
                    b2._tujian_assetName = assetName;
                    b3._tujian_assetName = assetName;

                    if (servantName === 'xiaosha') {
                        buildBtn(b1, "胜利", "shengli", 1, true);
                        buildBtn(b2, "失败", "gongji", 1, true);
                    } else {
                        var cntGongji = bg ? bg.getActionCount(servantName, "gongji") : 1;
                        var cntJinnang = bg ? bg.getActionCount(servantName, "jinnang") : 1;
                        var cntShouji = bg ? bg.getActionCount(servantName, "shouji") : 1;

                        buildBtn(b1, "攻击", "gongji", cntGongji, false);
                        buildBtn(b2, "锦囊", "jinnang", cntJinnang, false);
                        buildBtn(b3, "受伤", "shouji", cntShouji, false);
                    }
                }


                player.playServant = function(boneName, servantName, preferredAction) {
                    var _this = this;
                    _this.stopSpineAll();
                    _this._triedBackupBone = false;
                    var servantAsset = localServantAssets[servantName];
                    var assetCfg = (servantAsset && servantAsset.default) ? servantAsset.default : {};

                    var actionIndex = 0;

                    function tryPlay() {
                        if (actionIndex > 10) {
                            console.error('尝试动作次数超限');
                            return;
                        }
                        //旧参考系：
                        /*var params = {
                            name: boneName,
                            action: null,
                            loop: true,
                            x: assetCfg.x,
                            y: assetCfg.y,
                            height: assetCfg.height,
                            width: null,
                            scale: null,
                            referNode: animContainer,
                            referFollow: false
                        };*/

                        var params = {
                            name: boneName,
                            action: null,
                            loop: true,
                            x: assetCfg.x,
                            y: assetCfg.y,
                            height: assetCfg.height,
                            width: null,
                            scale: null,
                            referNode: zuodianImg,
                            referFollow: true
                        };

                        if (_this.hasSpine(boneName)) {
                            var skeleton = _this.spine.skeletons.find(function(s) {
                                return s.name === boneName;
                            });
                            if (skeleton) {
                                var animNameList = skeleton.data.animations.map(function(a) {
                                    return a.name;
                                });
                                console.log(`【${servantName}骨骼全部动作】`, animNameList);
                                console.log("骨骼原生defaultAction = ", skeleton.defaultAction);

                                _this.current = _this.loopSpine(params);
                                refreshButtons(servantName);
                                return;
                            }
                            actionIndex++;
                            tryPlay();
                        } else {
                            _this.loadSpine(boneName, 'skel', function() {
                                try {
                                    var skeleton = _this.prepSpine(boneName);
                                    if (!skeleton) {
                                        actionIndex++;
                                        tryPlay();
                                        return;
                                    }
                                    var animNameList = skeleton.data.animations.map(function(a) {
                                        return a.name;
                                    });
                                    console.log(`【${servantName}骨骼全部动作】`, animNameList);
                                    console.log("骨骼原生defaultAction = ", skeleton.defaultAction);

                                    _this.current = _this.loopSpine(params);
                                    refreshButtons(servantName);
                                } catch (e) {
                                    console.warn("骨骼加载回调异常", e);
                                    actionIndex++;
                                    tryPlay();
                                }
                            }, function(err) {
                                console.warn('加载骨骼失败:', boneName, err);
                                if (boneName !== servantName && !_this._triedBackupBone) {
                                    _this._triedBackupBone = true;
                                    _this.playServant(servantName, servantName, preferredAction);
                                }
                            });
                        }
                    }
                    setTimeout(function() {
                        _this.resized = false;
                        setTimeout(tryPlay, 80);
                    }, 200);
                };
                window._sltj_tujian_player = player;
                for (var i = 0; i < servantList.length; i++) {
                    var item = servantList[i];
                    var servantName = item.servantName;
                    var boneName = item.boneName;
                    var action = item.action;
                    var iconDiv = ui.create.div();
                    iconDiv.className = 'sltj_tujian_icon';
                    iconDiv.setAttribute('data-servant', servantName);
                    var img = document.createElement('img');
                    img.className = 'sltj_tujian_icon_img';
                    var imgPath = lib.assetURL + 'extension/叠彩峰岭/dcfl_' + boneName + '.png';
                    img.src = imgPath;
                    img.onerror = function() {
                        this.style.display = 'none';
                        var fallback = document.createElement('span');
                        fallback.className = 'sltj_tujian_icon_fallback';
                        fallback.textContent = servantName;
                        this.parentNode.appendChild(fallback);
                    };
                    iconDiv.appendChild(img);
                    iconDiv.addEventListener('click', (function(bone, sName, act) {
                        return function() {
                            var player = window._sltj_tujian_player;
                            player.playServant(bone, sName, act);
                            var icons = leftList.querySelectorAll('.sltj_tujian_icon');
                            for (var j = 0; j < icons.length; j++) {
                                icons[j].classList.remove('active');
                            }
                            this.classList.add('active');
                            refreshButtons(sName);
                        };
                    })(boneName, servantName, action));
                    leftList.appendChild(iconDiv);
                }
                mainContainer.appendChild(leftList);
                page.body.appendChild(mainContainer);
                page.show();
                page.body.style.display = 'flex';
                page.body.style.alignItems = 'center';
                page.body.style.justifyContent = 'center';
                page.body.style.backgroundColor = 'transparent';
                window._sltj_tujian_page = page;
                setTimeout(function() {
                    var p = window._sltj_tujian_player;
                    if (!p) return;
                    p.playServant("skin_xiaosha_default", "xiaosha");
                    var icons = leftList.querySelectorAll('.sltj_tujian_icon');
                    for (var k = 0; k < icons.length; k++) {
                        if (icons[k].getAttribute("data-servant") === "xiaosha") {
                            icons[k].classList.add("active");
                            break;
                        }
                    }
                    refreshButtons('xiaosha');
                }, 400);
                setTimeout(function() {
                    if (window._sltj_tujian_player) {
                        window._sltj_tujian_player.resized = false;
                    }
                }, 200);
            };

            // ========== 侍灵动画背景功能结束 ==========

            //============================图鉴功能===================================================			

            //下方的Page()也应用于前面的“侍灵图鉴”功能：
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
            // 全局管理当前打开的详情页和代码页
            window._dcfl_currentDetailPage = null;
            window._dcfl_currentCodePage = null;
            window._dcfl_searchResultPage = null;

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
                        } else if (item.startsWith('ext:') && item.toLowerCase().endsWith('.jpg')) {
                            var convertedPath = item.replace(/^ext:/, lib.assetURL + 'extension/');
                            extractedPaths.push(convertedPath);
                        }
                    }
                }

                return extractedPaths;
            }

            function loadCharacterImage(imgElement, charName, packKey, extNameClean, isDetailPage) {

                var isVirtual = (packKey === 'dcfl_players');

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

                if (!isVirtual) {
                    if (extNameClean) {
                        imagePaths.push(lib.assetURL + 'extension/' + extNameClean + '/' + charName + '.jpg');
                        imagePaths.push(lib.assetURL + 'extension/' + extNameClean + '/image/character/' + charName + '.jpg');
                    }

                    imagePaths.push(lib.assetURL + 'extension/' + packKey + '/' + charName + '.jpg');
                    imagePaths.push(lib.assetURL + 'extension/' + packKey + '/image/character/' + charName + '.jpg');

                    var allExtensionDirs = getAllExtensionDirectories();
                    for (var i = 0; i < allExtensionDirs.length; i++) {
                        var dirName = allExtensionDirs[i];
                        if (dirName === extNameClean || dirName === packKey) {
                            continue;
                        }
                        imagePaths.push(lib.assetURL + 'extension/' + dirName + '/' + charName + '.jpg');
                        imagePaths.push(lib.assetURL + 'extension/' + dirName + '/image/character/' + charName + '.jpg');
                    }
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
                        return;
                    }

                    window._dcfl_last_die_play = {
                        key: playKey,
                        time: Date.now()
                    };

                    var nativeDieHasExt = false;
                    var dieCharData = lib.character[charName] || lib.character[cleanCharName];
                    if (dieCharData && Array.isArray(dieCharData[4])) {
                        for (var di = 0; di < dieCharData[4].length; di++) {
                            var dieItem = String(dieCharData[4][di] || '');
                            if (dieItem.indexOf('die:ext:') === 0) {
                                nativeDieHasExt = true;
                                break;
                            }
                        }
                    }

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
                            if (nativeDieHasExt) {
                                console.log('角色数据已包含扩展阵亡配音，跳过手动扩展播放，避免重播:', charName);
                                return;
                            }

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
            //添加搜索功能时删了以下两句
            //var currentDetailPage = null;
            //var currentCodePage = null;

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
                if (window._dcfl_currentCodePage && window._dcfl_currentCodePage.parentNode) {
                    window._dcfl_currentCodePage.parentNode.removeChild(window._dcfl_currentCodePage);
                }
                var existingPage = document.querySelector('#dcfl_page.dcfl_code_page');
                if (existingPage) {
                    existingPage.remove();
                }

                // ---------- 递归收集依赖（通过 skill_id 识别内联子技能） ----------
                function collectDependencies(name, collected, parentSkill) {
                    if (!name || collected.has(name)) return;
                    var skill = lib.skill[name];
                    if (!skill) return;

                    // 如果当前技能是父技能的内联子技能（通过 skill_id 匹配），则跳过
                    if (parentSkill && parentSkill.subSkill) {
                        var isSub = false;
                        for (var subKey in parentSkill.subSkill) {
                            var sub = parentSkill.subSkill[subKey];
                            if (sub && sub.skill_id === name) {
                                isSub = true;
                                break;
                            }
                        }
                        if (isSub) return;
                    }

                    collected.add(name);

                    if (skill.global) {
                        var deps = Array.isArray(skill.global) ? skill.global : [skill.global];
                        deps.forEach(function(dep) {
                            if (typeof dep === 'string') collectDependencies(dep, collected, skill);
                        });
                    }
                    if (skill.group) {
                        var deps = Array.isArray(skill.group) ? skill.group : [skill.group];
                        deps.forEach(function(dep) {
                            if (typeof dep === 'string') collectDependencies(dep, collected, skill);
                        });
                    }
                }

                var allSkillNames = new Set();
                collectDependencies(skillName, allSkillNames, null);

                var orderedNames = [skillName];
                var rest = Array.from(allSkillNames).filter(function(name) {
                    return name !== skillName;
                });
                rest.sort();
                orderedNames = orderedNames.concat(rest);

                var codeParts = [];
                orderedNames.forEach(function(name, index) {
                    var skillObj = lib.skill[name];
                    if (!skillObj) {
                        codeParts.push('// 技能 "' + name + '" 未找到');
                        return;
                    }
                    try {
                        var code = '{\n' + formatSkillCode(skillObj, 1) + '}';
                    } catch (e) {
                        code = '// 解析失败: ' + e.message;
                    }
                    if (index === 0) {
                        codeParts.push(code);
                    } else {
                        codeParts.push('// =============== ' + name + ' ===============');
                        codeParts.push(code);
                    }
                });
                var fullCode = codeParts.join('\n\n');

                // ---------- 创建 UI ----------
                var skillPageBg = ui.create.div('#dcfl_page.dcfl_code_page');
                skillPageBg.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 2030; display: block;';
                skillPageBg.addEventListener('click', function(e) {
                    if (e.target === skillPageBg) {
                        if (skillPageBg.parentNode) {
                            skillPageBg.parentNode.removeChild(skillPageBg);
                        }
                        window._dcfl_currentCodePage = null;
                    }
                });
                var skillMainContainer = ui.create.div('#dcfl_mainContainer.dcfl_code_container');
                var skillRightPanel = ui.create.div('#dcfl_rightPanel.dcfl_code_panel');
                var skillCloseButton = ui.create.div('#dcfl_closeButton.dcfl_code_close', '×');
                skillCloseButton.addEventListener('click', function() {
                    if (skillPageBg.parentNode) {
                        skillPageBg.parentNode.removeChild(skillPageBg);
                    }
                    window._dcfl_currentCodePage = null;
                });
                skillRightPanel.appendChild(skillCloseButton);

                var copyButton = ui.create.div('.dcfl_code_copy', '复制代码');
                copyButton.style.cssText = 'position: absolute; top: 0; right: 75px; height: 35px; line-height: 35px; z-index: 2031;';
                copyButton.addEventListener('click', function() {
                    var codeText = codeContainer.textContent;

                    function fallbackCopy(text) {
                        var textarea = document.createElement('textarea');
                        textarea.value = text;
                        document.body.appendChild(textarea);
                        textarea.select();
                        try {
                            document.execCommand('copy');
                            copyButton.classList.add('copied');
                            copyButton.textContent = '已复制!';
                            setTimeout(function() {
                                copyButton.classList.remove('copied');
                                copyButton.textContent = '复制代码';
                            }, 1500);
                        } catch (e) {
                            alert('复制失败，请手动复制');
                        }
                        document.body.removeChild(textarea);
                    }
                    if (navigator.clipboard && navigator.clipboard.writeText) {
                        navigator.clipboard.writeText(codeText).then(function() {
                            copyButton.classList.add('copied');
                            copyButton.textContent = '已复制!';
                            setTimeout(function() {
                                copyButton.classList.remove('copied');
                                copyButton.textContent = '复制代码';
                            }, 1500);
                        }).catch(function() {
                            fallbackCopy(codeText);
                        });
                    } else {
                        fallbackCopy(codeText);
                    }
                });
                skillRightPanel.appendChild(copyButton);

                var skillTitle = ui.create.div('#dcfl_title.dcfl_code_title');
                skillTitle.innerHTML = get.translation(charName) + ' - ' + get.translation(skillName) + ' 技能代码';
                skillTitle.setAttribute('data-translate-char', charName);
                skillTitle.setAttribute('data-translate-skill', skillName);
                skillRightPanel.appendChild(skillTitle);

                var skillContentContainer = ui.create.div('#dcfl_contentContainer.dcfl_code_content');
                var codeContainer = document.createElement('pre');
                codeContainer.style.cssText = 'margin: 0; padding: 20px; font-family: lishu !important; font-size: 28px !important; color: #ccc !important; line-height: 1.6 !important; white-space: pre-wrap !important; word-wrap: break-word !important; overflow: auto !important; height: 100% !important; box-sizing: border-box !important;';
                codeContainer.innerHTML = dcflHighlightJs(fullCode);
                skillContentContainer.appendChild(codeContainer);
                skillRightPanel.appendChild(skillContentContainer);
                skillMainContainer.appendChild(skillRightPanel);
                skillPageBg.appendChild(skillMainContainer);
                document.body.appendChild(skillPageBg);
                window._dcfl_currentCodePage = skillPageBg;
                setTimeout(function() {
                    skillPageBg.style.display = 'block';
                }, 10);
            }

            // 获取角色所属的扩展包信息
            function getCharacterPackInfo(charName) {
                for (var packKey in lib.characterPack) {
                    if (packKey.startsWith('mode_')) continue;
                    var packData = lib.characterPack[packKey];
                    if (packData && packData[charName]) {
                        var packName = lib.translate[packKey + '_character_config'] || packKey;
                        packName = packName.replace(/<[^>]*>/g, '').trim();
                        var extNameClean = packName;
                        return {
                            packKey: packKey,
                            packName: packName,
                            extNameClean: extNameClean
                        };
                    }
                }
                return null;
            }

            // 创建角色详情页（独立函数，供图鉴和搜索结果共用）
            function createDetailPage(charName, packKey, packName, extNameClean) {
                if (!packKey) {
                    var info = getCharacterPackInfo(charName);
                    if (info) {
                        packKey = info.packKey;
                        packName = info.packName;
                        extNameClean = info.extNameClean;
                    } else {
                        packKey = 'unknown';
                        packName = '未知包';
                        extNameClean = '';
                    }
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
                    window._dcfl_currentDetailPage = null;
                });
                detailPanel.appendChild(closeButton);
                var title = ui.create.div('#dcfl_title.dcfl_detail_title');
                title.innerHTML = (packName ? packName + ' - ' : '') + get.translation(charName);
                detailPanel.appendChild(title);
                var contentContainer = ui.create.div('#dcfl_contentContainer.dcfl_detail_content');

                var infoContainer = ui.create.div('.dcfl_detail_page_info_container');
                var charData = lib.character[charName];
                // 详细页 infoStr
                var infoStr = "";
                if (charName) infoStr += get.translation(charName) + '&nbsp;';
                if (charData && charData[0]) infoStr += get.translation(charData[0]) + '&nbsp;';
                if (charData) {
                    if (charData.doubleGroup && Array.isArray(charData.doubleGroup) && charData.doubleGroup.length > 0) {
                        var groupStr = charData.doubleGroup.map(function(g) {
                            return get.translation(g);
                        }).join('/');
                        infoStr += groupStr + '&nbsp;';
                    } else {
                        infoStr += get.translation(charData[1]) + '&nbsp;';
                    }
                }
                if (charData && charData[2]) infoStr += charData[2] + '体力';

                var infoText = ui.create.div('.dcfl_detail_page_info_text', infoStr);
                infoContainer.appendChild(infoText);

                var infoIconWrapper = ui.create.div('.dcfl_detail_page_info_icon_wrapper');
                var infoIcon = ui.create.div('.dcfl_detail_page_info_icon');
                infoIcon.addEventListener('click', function(e) {
                    e.stopPropagation();
                    e.preventDefault();
                    playDieAudio(charName, packKey, extNameClean);
                    return false;
                });
                infoIcon.addEventListener('touchstart', function(e) {
                    e.stopPropagation();
                    e.preventDefault();
                    playDieAudio(charName, packKey, extNameClean);
                    return false;
                }, {
                    passive: false
                });
                infoIconWrapper.appendChild(infoIcon);
                infoContainer.appendChild(infoIconWrapper);
                contentContainer.appendChild(infoContainer);

                var leftImageArea = ui.create.div('.dcfl_detail_image_area');
                var detailHeader = ui.create.div('.dcfl_detail_header');
                loadCharacterImage(detailHeader, charName, packKey, extNameClean, true);
                detailHeader.style.cursor = 'pointer';
                detailHeader.addEventListener('click', function(e) {
                    e.stopPropagation();
                    applySkinChange(this, charName);
                });
                leftImageArea.appendChild(detailHeader);
                contentContainer.appendChild(leftImageArea);

                var leftButtonArea = ui.create.div('.dcfl_detail_button_area');
                var tabButtonContainer = ui.create.div('.dcfl_detail_tab_buttons');
                var introButton = ui.create.div('.dcfl_tab_button', '简介');
                var skillButton = ui.create.div('.dcfl_tab_button.active', '技能');

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
                introContent.style.display = 'none';
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
                skillContent.style.display = 'block';
                if (charData && charData[3] && Array.isArray(charData[3])) {
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

                        var skillObj = lib.skill[skillName];
                        if (skillObj && skillObj.derivation && Array.isArray(skillObj.derivation) && skillObj.derivation.length) {
                            skillContent.appendChild(document.createElement('br'));
                            for (var d = 0; d < skillObj.derivation.length; d++) {
                                var derivedName = skillObj.derivation[d];
                                var derivedWrapper = document.createElement('span');
                                derivedWrapper.style.marginLeft = '20px';

                                var derivedIcon = document.createElement('span');
                                derivedIcon.className = 'dcfl_skill_icon';
                                addSkillAudioClick(derivedIcon, charName, derivedName);
                                derivedWrapper.appendChild(derivedIcon);

                                var derivedNameElement = document.createElement('strong');
                                derivedNameElement.className = 'greentext dcfl_skill_name';
                                derivedNameElement.textContent = get.translation(derivedName);
                                derivedNameElement.setAttribute('data-skill-name', derivedName);
                                derivedNameElement.setAttribute('data-char-name', charName);
                                derivedNameElement = ensureSkillClickHandler(derivedNameElement, derivedName, charName);
                                derivedWrapper.appendChild(derivedNameElement);

                                var derivedDesc = document.createElement('span');
                                derivedDesc.innerHTML = '：' + get.translation(derivedName + '_info');
                                derivedWrapper.appendChild(derivedDesc);

                                skillContent.appendChild(derivedWrapper);
                                if (d < skillObj.derivation.length - 1) {
                                    skillContent.appendChild(document.createElement('br'));
                                }
                            }
                        }
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
                window._dcfl_currentDetailPage = detailPage;
            }

            game.showCharacterInfo = function() {
                ui.system.style.display = 'none';
                ui.menuContainer.style.display = 'none';
                ui.click.configMenu();

                var characterPacks = getAvailableCharacterPacks();

                // 新增：检查游戏是否进行中，若有玩家则生成“场上武将”虚拟包
                var hasPlayers = (game.players && game.players.length > 0) || (game.dead && game.dead.length > 0);
                if (hasPlayers) {
                    var totalPlayers = (game.players ? game.players.length : 0) + (game.dead ? game.dead.length : 0);
                    var virtualPack = {
                        id: 'dcfl_players',
                        name: '场上武将',
                        count: totalPlayers,
                        isVirtual: true
                    };
                    characterPacks.unshift(virtualPack); // 置顶显示
                }

                if (characterPacks.length === 0) {
                    alert('未找到任何已安装的武将包！');
                    ui.system.style.display = '';
                    ui.menuContainer.style.display = '';
                    return null;
                }
                var currentPack = characterPacks[0].id;
                var currentPackName = characterPacks[0].name;

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

                function createCharacterIntro(charName, introClass, isDead) {
                    var div = ui.create.div('.dcfl_intro_' + introClass);
                    var charData = lib.character[charName];
                    if (!charData) return null;

                    var dComps = {
                        header: (function() {
                            var imgElement = ui.create.div('.dcfl_intro_header');
                            var extNameWithTags = lib.translate[currentPack + '_character_config'];
                            var extNameClean = extNameWithTags ? extNameWithTags.replace(/<[^>]*>/g, '').trim() : '';
                            loadCharacterImage(imgElement, charName, currentPack, extNameClean, false);
                            //--------------------黑白滤镜---------------------                            
                            if (isDead) {
                                imgElement.style.filter = 'grayscale(100%)';
                            }
                            imgElement.style.cursor = 'pointer';
                            imgElement.addEventListener('click', function(e) {
                                e.stopPropagation();
                                applySkinChange(this, charName);
                            });

                            imgElement.addEventListener('dblclick', function(e) {
                                e.stopPropagation();
                                e.preventDefault();
                                var info = getCharacterPackInfo(charName);
                                if (!info) {
                                    info = {
                                        packKey: currentPack,
                                        packName: currentPackName,
                                        extNameClean: extNameClean
                                    };
                                }
                                createDetailPage(charName, info.packKey, info.packName, info.extNameClean);
                            });

                            return imgElement;
                        })(),
                        // 图鉴列表页 infos                                                
                        infos: (function() {
                            var str = "";
                            if (charName) str += get.translation(charName) + '&nbsp;';
                            if (charData[0]) str += get.translation(charData[0]) + '&nbsp;';
                            if (charData) {
                                if (charData.doubleGroup && Array.isArray(charData.doubleGroup) && charData.doubleGroup.length > 0) {
                                    var groupStr = charData.doubleGroup.map(function(g) {
                                        return get.translation(g);
                                    }).join('/');
                                    str += groupStr + '&nbsp;';
                                } else {
                                    // 无 doubleGroup，显示单势力
                                    str += get.translation(charData[1]) + '&nbsp;';
                                }
                            }
                            if (charData && charData[2]) str += charData[2] + '体力';
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
                    if (currentPack === 'dcfl_players') {
                        contentContainer.innerHTML = '';
                        var playerNames = [];
                        var deadNames = [];

                        if (game.players) {
                            for (var i = 0; i < game.players.length; i++) {
                                if (game.players[i] && game.players[i].name) {
                                    playerNames.push(game.players[i].name);
                                }
                            }
                        }
                        if (game.dead) {
                            for (var i = 0; i < game.dead.length; i++) {
                                if (game.dead[i] && game.dead[i].name) {
                                    deadNames.push(game.dead[i].name);
                                }
                            }
                        }

                        if (playerNames.length > 0) {
                            var groupTitle = ui.create.div('.dcfl_group_title');
                            groupTitle.innerHTML = '存活角色 (' + playerNames.length + ' 人)';
                            contentContainer.appendChild(groupTitle);
                            for (var i = 0; i < playerNames.length; i++) {
                                var charName = playerNames[i];
                                var introClass = (i % 2 === 0) ? 'left' : 'right';
                                var charIntro = createCharacterIntro(charName, introClass, false);
                                if (charIntro) contentContainer.appendChild(charIntro);
                            }
                            var clearDiv = ui.create.div();
                            clearDiv.style.clear = 'both';
                            clearDiv.style.height = '0';
                            clearDiv.style.overflow = 'hidden';
                            contentContainer.appendChild(clearDiv);
                        }

                        if (deadNames.length > 0) {
                            var groupTitle = ui.create.div('.dcfl_group_title');
                            groupTitle.innerHTML = '阵亡角色 (' + deadNames.length + ' 人)';
                            contentContainer.appendChild(groupTitle);
                            for (var i = 0; i < deadNames.length; i++) {
                                var charName = deadNames[i];
                                var introClass = (i % 2 === 0) ? 'left' : 'right';
                                var charIntro = createCharacterIntro(charName, introClass, true);
                                if (charIntro) contentContainer.appendChild(charIntro);
                            }
                            var clearDiv = ui.create.div();
                            clearDiv.style.clear = 'both';
                            clearDiv.style.height = '0';
                            clearDiv.style.overflow = 'hidden';
                            contentContainer.appendChild(clearDiv);
                        }

                        if (playerNames.length === 0 && deadNames.length === 0) {
                            contentContainer.innerHTML = '<div class="dcfl_group_title">暂无角色</div>';
                        }
                        lib.setScroll(contentContainer);
                        return;
                    }

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
                                    var charIntro = createCharacterIntro(charName, introClass, false);
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
                                var charIntro = createCharacterIntro(charName, introClass, false);
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

            //=====================搜索武将与技能====================

            /* //旧窗口：
            function showSearchResultPage(results, keyword) {
                if (window._dcfl_searchResultPage && window._dcfl_searchResultPage.body && window._dcfl_searchResultPage.body.parentNode) {
                    window._dcfl_searchResultPage.body.parentNode.removeChild(window._dcfl_searchResultPage.body);
                    window._dcfl_searchResultPage = null;
                }

                var page = new Page();
                page.body = ui.create.div();
                page.body.className = 'dcfl_search_result_page';

                var mainContainer = ui.create.div();
                mainContainer.className = 'dcfl_search_result_container';

                var rightPanel = ui.create.div();
                rightPanel.className = 'dcfl_search_result_panel';

                var closeBtn = ui.create.div('.dcfl_search_result_close', '×');
                closeBtn.addEventListener('click', function() {
                    if (page.body && page.body.parentNode) {
                        page.body.parentNode.removeChild(page.body);
                    }
                    window._dcfl_searchResultPage = null;
                    ui.system.style.display = '';
                    setTimeout(function() {
                        ui.click.configMenu();
                        ui.menuContainer.style.display = '';
                    }, 500);
                });
                rightPanel.appendChild(closeBtn);

                var title = ui.create.div();
                title.className = 'dcfl_search_result_title';
                title.innerHTML = '搜索结果：' + keyword + '（共 ' + results.length + ' 名）';
                rightPanel.appendChild(title);

                var contentContainer = ui.create.div();
                contentContainer.className = 'dcfl_search_result_content';

                // 填充武将卡片
                if (results.length === 0) {
                    var emptyMsg = ui.create.div('未找到匹配的武将');
                    emptyMsg.style.cssText = 'color:#aaa;width:100%;text-align:center;padding:30px;font-size:20px;font-family:lishu;';
                    contentContainer.appendChild(emptyMsg);
                } else {
                    for (var i = 0; i < results.length; i++) {
                        var charName = results[i];
                        var card = ui.create.div();
                        card.style.cssText = 'width:110px;height:150px;border-radius:6px;background:#222;border:1px solid #444;overflow:hidden;cursor:pointer;position:relative;transition:0.2s;flex-shrink:0;';
                        card.addEventListener('mouseenter', function() {
                            this.style.borderColor = '#8cf';
                        });
                        card.addEventListener('mouseleave', function() {
                            this.style.borderColor = '#444';
                        });

                        var img = ui.create.div();
                        img.style.cssText = 'width:100%;height:100%;background-size:cover;background-position:center;';
                        var info = getCharacterPackInfo(charName);
                        var packKey = info ? info.packKey : '';
                        var extNameClean = info ? info.extNameClean : '';
                        loadCharacterImage(img, charName, packKey, extNameClean, false);
                        card.appendChild(img);

                        var nameLabel = ui.create.div();
                        nameLabel.style.cssText = 'position:absolute;bottom:4px;left:4px;right:4px;text-align:center;background:rgba(0,0,0,0.65);border-radius:3px;padding:3px 2px;font-size:0.75em;color:#eee;font-family:lishu;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;';
                        nameLabel.innerHTML = get.translation(charName);
                        card.appendChild(nameLabel);

                        card.addEventListener('dblclick', function(e) {
                            e.stopPropagation();
                            var name = this.getAttribute('data-char');
                            var info = getCharacterPackInfo(name);
                            if (!info) info = {
                                packKey: '',
                                packName: '未知',
                                extNameClean: ''
                            };
                            createDetailPage(name, info.packKey, info.packName, info.extNameClean);
                        });
                        card.setAttribute('data-char', charName);

                        contentContainer.appendChild(card);
                    }
                }

                rightPanel.appendChild(contentContainer);
                mainContainer.appendChild(rightPanel);
                page.body.appendChild(mainContainer);
                page.show();
                window._dcfl_searchResultPage = page;
            }*/

            //新窗口：
            function showSearchResultPage(results, keyword) {
                if (window._dcfl_searchResultPage && window._dcfl_searchResultPage.body && window._dcfl_searchResultPage.body.parentNode) {
                    window._dcfl_searchResultPage.body.parentNode.removeChild(window._dcfl_searchResultPage.body);
                    window._dcfl_searchResultPage = null;
                }

                var page = new Page();
                page.body = ui.create.div('#dcfl_page');
                var mainContainer = ui.create.div('#dcfl_mainContainer');
                var leftButtonPanel = ui.create.div('#dcfl_leftButtonPanel');
                var rightPanel = ui.create.div('#dcfl_rightPanel');

                var closeButton = ui.create.div('#dcfl_closeButton', '×');
                closeButton.addEventListener('click', function() {
                    page.hide();
                    if (page.body && page.body.parentNode) {
                        page.body.parentNode.removeChild(page.body);
                    }
                    window._dcfl_searchResultPage = null;
                    ui.system.style.display = '';
                    setTimeout(function() {
                        ui.click.configMenu();
                        ui.menuContainer.style.display = '';
                    }, 100);
                });
                rightPanel.appendChild(closeButton);

                var title = ui.create.div('#dcfl_title');
                title.innerHTML = '搜索结果：' + keyword + '（共 ' + results.length + ' 名）';
                rightPanel.appendChild(title);

                var contentContainer = ui.create.div('#dcfl_contentContainer');
                rightPanel.appendChild(contentContainer);

                var buttonContainer = ui.create.div('#dcfl_buttonContainer');
                var buttonWrapper = ui.create.div('.dcfl_buttonWrapper');
                var button = ui.create.div('.dcfl_packButton');
                button.innerHTML = '搜索结果<span class="dcfl_count_badge">(' + results.length + '名)</span>';
                button.classList.add('active');
                buttonWrapper.appendChild(button);
                buttonContainer.appendChild(buttonWrapper);
                leftButtonPanel.appendChild(buttonContainer);

                function createIntroForSearch(charName, introClass) {
                    var div = ui.create.div('.dcfl_intro_' + introClass);
                    var charData = lib.character[charName];
                    if (!charData) return null;

                    var info = getCharacterPackInfo(charName);
                    var packKey = info ? info.packKey : '';
                    var packName = info ? info.packName : '';
                    var extNameClean = info ? info.extNameClean : '';

                    var header = ui.create.div('.dcfl_intro_header');
                    loadCharacterImage(header, charName, packKey, extNameClean, false);
                    header.style.cursor = 'pointer';
                    header.addEventListener('click', function(e) {
                        e.stopPropagation();
                        applySkinChange(this, charName);
                    });
                    header.addEventListener('dblclick', function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        createDetailPage(charName, packKey, packName, extNameClean);
                    });

                    var str = "";
                    if (charName) str += get.translation(charName) + '&nbsp;';
                    if (charData[0]) str += get.translation(charData[0]) + '&nbsp;';
                    if (charData.doubleGroup && Array.isArray(charData.doubleGroup) && charData.doubleGroup.length > 0) {
                        var groupStr = charData.doubleGroup.map(function(g) {
                            return get.translation(g);
                        }).join('/');
                        str += groupStr + '&nbsp;';
                    } else {
                        str += get.translation(charData[1]) + '&nbsp;';
                    }
                    if (charData[2]) str += charData[2] + '体力';
                    var infos = ui.create.div('.dcfl_intro_infos', str);

                    var skillStr = "";
                    if (charData[3] && Array.isArray(charData[3])) {
                        for (var j = 0; j < charData[3].length; j++) {
                            if (j > 0) skillStr += '<br><br>';
                            var skillName = charData[3][j];
                            skillStr += '<strong class="greentext">' + get.translation(skillName) + '</strong>：' + get.translation(skillName + '_info');
                        }
                    }
                    var skills = ui.create.div('.dcfl_intro_skills', skillStr);
                    lib.setScroll(skills);

                    div.appendChild(header);
                    div.appendChild(infos);
                    div.appendChild(skills);
                    return div;
                }

                if (results.length === 0) {
                    contentContainer.innerHTML = '<div class="dcfl_group_title">未找到匹配的武将</div>';
                } else {
                    for (var i = 0; i < results.length; i++) {
                        var charName = results[i];
                        var introClass = (i % 2 === 0) ? 'left' : 'right';
                        var charIntro = createIntroForSearch(charName, introClass);
                        if (charIntro) contentContainer.appendChild(charIntro);
                    }
                    var clearDiv = ui.create.div();
                    clearDiv.style.clear = 'both';
                    clearDiv.style.height = '0';
                    clearDiv.style.overflow = 'hidden';
                    contentContainer.appendChild(clearDiv);
                }
                lib.setScroll(contentContainer);

                page.body.appendChild(mainContainer);
                mainContainer.appendChild(rightPanel);
                page.body.appendChild(leftButtonPanel);
                page.show();
                window._dcfl_searchResultPage = page;
            }

            // ================== 搜索函数 ==================
            game.searchCharacters = function() {
                ui.system.style.display = 'none';
                ui.menuContainer.style.display = 'none';
                ui.click.configMenu();

                var oldOverlay = document.querySelector('.dcfl_search_overlay_temp');
                if (oldOverlay) oldOverlay.remove();

                if (window._dcfl_searchResultPage && window._dcfl_searchResultPage.body && window._dcfl_searchResultPage.body.parentNode) {
                    window._dcfl_searchResultPage.body.parentNode.removeChild(window._dcfl_searchResultPage.body);
                    window._dcfl_searchResultPage = null;
                }

                var overlay = ui.create.div();
                overlay.className = 'dcfl_search_overlay_temp';
                overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);z-index:2040;display:flex;justify-content:center;align-items:flex-start;padding-top:5%;';

                var dialog = ui.create.div();
                dialog.style.cssText = 'background:#1a1a2e;border-radius:12px;padding:25px 30px;min-width:480px;max-width:70%;box-shadow:0 0 40px rgba(0,0,0,0.9);border:1px solid #444;';

                var header = ui.create.div();
                header.style.cssText = 'display:flex;justify-content:space-between;align-items:center;margin-bottom:15px;';
                var title = ui.create.div('查找武将');
                title.style.cssText = 'color:#ffd700;font-size:20px;font-family:lishu;font-weight:bold;';
                header.appendChild(title);
                var closeBtn = ui.create.div('×');
                closeBtn.style.cssText = 'color:#fff;font-size:26px;cursor:pointer;padding:0 8px;';
                closeBtn.addEventListener('click', function() {
                    if (overlay && overlay.parentNode) {
                        overlay.parentNode.removeChild(overlay);
                    }
                    ui.system.style.display = '';
                    setTimeout(function() {
                        ui.click.configMenu();
                        ui.menuContainer.style.display = '';
                    }, 100);
                });
                header.appendChild(closeBtn);
                dialog.appendChild(header);

                var input = document.createElement('input');
                input.type = 'text';
                input.style.cssText = 'width:100%;padding:10px 14px;border-radius:6px;border:1px solid #555;background:#222;color:#fff;font-size:16px;font-family:lishu;outline:none;box-sizing:border-box;';
                input.placeholder = '输入武将名、技能名或技能描述关键词（支持模糊搜索）...';
                dialog.appendChild(input);

                overlay.appendChild(dialog);
                document.body.appendChild(overlay);

                setTimeout(function() {
                    input.focus();
                }, 100);

                function stripHTML(str) {
                    return str.replace(/<[^>]*>/g, '').trim();
                }

                input.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter') {
                        var keyword = this.value.trim();
                        if (!keyword) {
                            var tip = ui.create.div('请输入搜索词');
                            tip.style.cssText = 'color:#ff6b6b;margin-top:10px;text-align:center;font-size:14px;';
                            dialog.appendChild(tip);
                            setTimeout(function() {
                                if (tip.parentNode) tip.remove();
                            }, 1500);
                            return;
                        }

                        var words = keyword.split(/\s+/).filter(w => w.length > 0);
                        var results = [];

                        for (var charName in lib.character) {
                            var charData = lib.character[charName];
                            if (!charData) continue;
                            var level = 0;
                            var score = 0;
                            var matchedSkills = [];
                            var nameTrans = get.translation(charName);
                            var nameScore = 0;
                            if (nameTrans.indexOf(keyword) !== -1) {
                                nameScore = 30;
                                level = Math.max(level, 1);
                            } else {
                                var allWordsInName = words.every(w => nameTrans.indexOf(w) !== -1);
                                if (allWordsInName && words.length > 0) {
                                    nameScore = 30;
                                    level = Math.max(level, 2);
                                } else {
                                    var anyWordInName = words.some(w => nameTrans.indexOf(w) !== -1);
                                    if (anyWordInName) {
                                        nameScore = 15;
                                        level = Math.max(level, 1);
                                    }
                                }
                            }
                            score += nameScore;

                            var skills = charData[3] || [];
                            for (var i = 0; i < skills.length; i++) {
                                var skillName = skills[i];
                                var skillTrans = get.translation(skillName);
                                var skillInfo = lib.translate[skillName + '_info'] || '';
                                var infoPlain = stripHTML(skillInfo);
                                var skillScore = 0;
                                var skillLevel = 0;
                                if (infoPlain.indexOf(keyword) !== -1) {
                                    skillLevel = 3;
                                    skillScore = 200;
                                    matchedSkills.push(skillName);
                                    level = Math.max(level, skillLevel);
                                    score += skillScore;
                                    break;
                                }
                                var allWords = words.every(w => infoPlain.indexOf(w) !== -1);
                                if (allWords && words.length > 0) {
                                    skillLevel = Math.max(skillLevel, 2);
                                    skillScore = 100;
                                    matchedSkills.push(skillName);
                                } else {
                                    var matchCount = words.filter(w => infoPlain.indexOf(w) !== -1).length;
                                    if (matchCount > 0) {
                                        skillLevel = Math.max(skillLevel, 1);
                                        skillScore = 50 * (matchCount / words.length);
                                        matchedSkills.push(skillName);
                                    }
                                }
                                var nameMatchLevel = 0;
                                var nameMatchScore = 0;
                                if (skillTrans.indexOf(keyword) !== -1) {
                                    nameMatchLevel = 1;
                                    nameMatchScore = 20;
                                } else {
                                    var allWordsInSkill = words.every(w => skillTrans.indexOf(w) !== -1);
                                    if (allWordsInSkill && words.length > 0) {
                                        nameMatchLevel = 2;
                                        nameMatchScore = 20;
                                    } else {
                                        var anyWordInSkill = words.some(w => skillTrans.indexOf(w) !== -1);
                                        if (anyWordInSkill) {
                                            nameMatchLevel = 1;
                                            nameMatchScore = 10;
                                        }
                                    }
                                }
                                if (nameMatchScore > 0) {
                                    skillLevel = Math.max(skillLevel, nameMatchLevel);
                                    skillScore += nameMatchScore;
                                    matchedSkills.push(skillName);
                                }
                                if (skillLevel > level) {
                                    level = skillLevel;
                                    score = Math.max(score, skillScore + nameScore);
                                } else if (skillLevel === level) {
                                    score += skillScore;
                                }
                            }
                            if (level === 0) continue;
                            results.push({
                                name: charName,
                                level: level,
                                score: score,
                                matchedSkills: matchedSkills
                            });
                        }

                        results.sort(function(a, b) {
                            if (a.level !== b.level) return b.level - a.level;
                            return b.score - a.score;
                        });

                        var resultNames = results.map(r => r.name);
                        if (overlay && overlay.parentNode) {
                            overlay.parentNode.removeChild(overlay);
                        }
                        showSearchResultPage(resultNames, keyword);
                    }
                });

                overlay.addEventListener('click', function(e) {
                    if (e.target === overlay) {
                        if (overlay && overlay.parentNode) {
                            overlay.parentNode.removeChild(overlay);
                        }
                        ui.system.style.display = '';
                        setTimeout(function() {
                            ui.click.configMenu();
                            ui.menuContainer.style.display = '';
                        }, 100);
                    }
                });
            };
            //====================手动搜索武将功能结束==================

            //====================导出扩展==================

            game.dcfl_loadJSZip = function() {
                return new Promise(function(resolve, reject) {
                    if (window.JSZip) {
                        resolve(window.JSZip);
                        return;
                    }

                    var extBase = (lib.assetURL || '') + 'extension/叠彩峰岭/';

                    if (lib.node && lib.node.fs) {
                        var files = [
                            __dirname + '/extension/叠彩峰岭/jszip.js',
                            __dirname + '/extension/叠彩峰岭/jszip.min.js'
                        ];
                        for (var i = 0; i < files.length; i++) {
                            try {
                                if (lib.node.fs.existsSync(files[i])) {
                                    (0, eval)(lib.node.fs.readFileSync(files[i], 'utf-8'));
                                    if (window.JSZip) {
                                        resolve(window.JSZip);
                                        return;
                                    }
                                }
                            } catch (e) {}
                        }
                    }

                    var urls = [extBase + 'jszip.js', extBase + 'jszip.min.js'];
                    var idx = 0;

                    function next() {
                        if (idx >= urls.length) {
                            reject(new Error('无法加载 JSZip，请确认 extension/叠彩峰岭/jszip.js 存在'));
                            return;
                        }
                        var url = urls[idx++];
                        try {
                            var script = document.createElement('script');
                            script.src = url;
                            script.onload = function() {
                                try {
                                    script.remove();
                                } catch (e) {}
                                if (window.JSZip) resolve(window.JSZip);
                                else next();
                            };
                            script.onerror = function() {
                                try {
                                    script.remove();
                                } catch (e) {}
                                next();
                            };
                            document.head.appendChild(script);
                        } catch (e) {
                            next();
                        }
                    }

                    next();
                });
            };

            game.dcfl_listExtensionFiles = function(extName) {
                return new Promise(function(resolve) {
                    if (lib.node && lib.node.fs) {
                        var result = [];
                        var basePath = __dirname + '/extension/' + extName;
                        try {
                            if (lib.node.fs.existsSync(basePath)) {
                                (function walk(dir, rel) {
                                    var entries;
                                    try {
                                        entries = lib.node.fs.readdirSync(dir);
                                    } catch (e) {
                                        return;
                                    }
                                    for (var i = 0; i < entries.length; i++) {
                                        var entry = entries[i];
                                        if (!entry || entry[0] === '.' || entry[0] === '_') continue;
                                        var fullPath = dir + '/' + entry;
                                        var relPath = rel ? rel + '/' + entry : entry;
                                        try {
                                            if (lib.node.fs.statSync(fullPath).isDirectory()) {
                                                walk(fullPath, relPath);
                                            } else {
                                                result.push(relPath);
                                            }
                                        } catch (e) {}
                                    }
                                })(basePath, '');
                            }
                        } catch (e) {}
                        resolve(result);
                        return;
                    }

                    if (typeof game.getFileList === 'function') {
                        try {
                            game.getFileList('extension/' + extName, function(folders, files) {
                                var all = (files || []).slice();
                                var foldersArr = folders || [];
                                if (!foldersArr.length) {
                                    resolve(all);
                                    return;
                                }
                                var pending = foldersArr.length;
                                foldersArr.forEach(function(folder) {
                                    game.getFileList('extension/' + extName + '/' + folder, function(sf, sfiles) {
                                        (sfiles || []).forEach(function(f) {
                                            all.push(folder + '/' + f);
                                        });
                                        pending--;
                                        if (pending === 0) resolve(all);
                                    }, function() {
                                        pending--;
                                        if (pending === 0) resolve(all);
                                    });
                                });
                            }, function() {
                                resolve(lib.config.extensionInfo && lib.config.extensionInfo[extName] ?
                                    (lib.config.extensionInfo[extName].file || []).slice() : []);
                            });
                            return;
                        } catch (e) {}
                    }

                    if (lib.config.extensionInfo && lib.config.extensionInfo[extName]) {
                        resolve((lib.config.extensionInfo[extName].file || []).slice());
                        return;
                    }
                    resolve([]);
                });
            };

            game.dcfl_readExtensionJs = function(extName) {
                return new Promise(function(resolve) {
                    if (lib.node && lib.node.fs) {
                        var path = __dirname + '/extension/' + extName + '/extension.js';
                        if (lib.node.fs.existsSync(path)) {
                            resolve(lib.node.fs.readFileSync(path, 'utf-8'));
                            return;
                        }
                    } else if (lib.device && game.readFileAsText) {
                        game.readFileAsText('extension/' + extName + '/extension.js', function(data) {
                            resolve(data);
                        }, function() {
                            resolve(localStorage.getItem(lib.configprefix + 'extension_' + extName));
                        });
                        return;
                    }
                    resolve(localStorage.getItem(lib.configprefix + 'extension_' + extName));
                });
            };

            game.dcfl_readExtensionFile = function(extName, fileName) {
                return new Promise(function(resolve) {
                    var isText = /\.(js|mjs|cjs|json|md|markdown|txt|css|html?|xml|svg|ya?ml|ini|conf|log|map)$/i.test(fileName);

                    function safe(v) {
                        resolve(v === undefined ? null : v);
                    }

                    if (lib.node && lib.node.fs) {
                        try {
                            var path = __dirname + '/extension/' + extName + '/' + fileName;
                            if (!lib.node.fs.existsSync(path)) {
                                safe(null);
                                return;
                            }
                            if (isText) safe(lib.node.fs.readFileSync(path, 'utf-8'));
                            else safe(new Uint8Array(lib.node.fs.readFileSync(path)));
                        } catch (e) {
                            safe(null);
                        }
                        return;
                    }

                    if (isText && typeof game.readFileAsText === 'function') {
                        try {
                            game.readFileAsText('extension/' + extName + '/' + fileName,
                                function(data) {
                                    safe(data);
                                },
                                function() {
                                    safe(null);
                                });
                            return;
                        } catch (e) {
                            safe(null);
                            return;
                        }
                    }

                    if (typeof game.readFile === 'function') {
                        try {
                            game.readFile('extension/' + extName + '/' + fileName,
                                function(data) {
                                    safe(new Uint8Array(data));
                                },
                                function() {
                                    safe(null);
                                });
                            return;
                        } catch (e) {
                            safe(null);
                            return;
                        }
                    }

                    if (lib.db) {
                        try {
                            var tx = lib.db.transaction(['image'], 'readwrite').objectStore('image');
                            var req = tx.get('extension-' + extName + ':' + fileName);
                            req.onsuccess = function(e) {
                                safe(e.target.result);
                            };
                            req.onerror = function() {
                                safe(null);
                            };
                            return;
                        } catch (e) {
                            safe(null);
                            return;
                        }
                    }
                    safe(null);
                });
            };

            game.dcfl_exportExtensionByName = async function(extName) {

                function errMsg(e) {
                    if (!e) return '未知错误';
                    if (typeof e === 'string') return e;
                    if (e.message && typeof e.message === 'string') return e.message;
                    try {
                        if (typeof Event !== 'undefined' && e instanceof Event) {
                            var d = e.type || 'error';
                            if (e.target) {
                                if (e.target.src) d += ' src=' + e.target.src;
                                if (e.target.error) {
                                    var t = e.target.error;
                                    if (t.name) d = t.name;
                                    if (t.message) d += ' - ' + t.message;
                                    if (typeof t.code === 'number') d += ' (code ' + t.code + ')';
                                }
                            }
                            return 'Event(' + d + ')';
                        }
                    } catch (x) {}
                    try {
                        return JSON.stringify(e);
                    } catch (x) {}
                    try {
                        return String(e);
                    } catch (x) {}
                    return '不可读的错误';
                }

                function toArrayBuffer(blob) {
                    if (blob.arrayBuffer) return blob.arrayBuffer();
                    return new Promise(function(resolve, reject) {
                        var r = new FileReader();
                        r.onload = function(e) {
                            resolve(e.target.result);
                        };
                        r.onerror = function() {
                            reject(new Error('FileReader 失败'));
                        };
                        r.readAsArrayBuffer(blob);
                    });
                }

                function zipBlob(zipInstance) {
                    return new Promise(function(resolve, reject) {
                        var opts = {
                            type: 'blob',
                            compression: 'DEFLATE',
                            compressionOptions: {
                                level: 6
                            }
                        };
                        try {
                            if (typeof zipInstance.generateAsync === 'function') {
                                zipInstance.generateAsync(opts).then(resolve, function(e) {
                                    reject(new Error('JSZip: ' + errMsg(e)));
                                });
                                return;
                            }
                            resolve(zipInstance.generate(opts));
                        } catch (e) {
                            reject(e);
                        }
                    });
                }

                function saveViaElectron(fileName, blob) {
                    return new Promise(function(resolve, reject) {
                        try {
                            if (!(lib.node && lib.node.fs)) {
                                reject(new Error('无 lib.node.fs'));
                                return;
                            }
                            toArrayBuffer(blob).then(function(ab) {
                                try {
                                    var p = __dirname + '/' + fileName;
                                    lib.node.fs.writeFileSync(p, Buffer.from(ab));
                                    resolve(p);
                                } catch (e) {
                                    reject(new Error('fs 写入失败：' + errMsg(e)));
                                }
                            }, function(e) {
                                reject(new Error('转 ArrayBuffer 失败：' + errMsg(e)));
                            });
                        } catch (e) {
                            reject(new Error('Electron 保存异常：' + errMsg(e)));
                        }
                    });
                }

                function saveViaCordovaDir(dir, fileName, blob) {
                    return new Promise(function(resolve, reject) {
                        if (typeof window.resolveLocalFileSystemURL !== 'function') {
                            reject(new Error('resolveLocalFileSystemURL 不存在'));
                            return;
                        }
                        var settled = false;
                        var timer = setTimeout(function() {
                            if (settled) return;
                            settled = true;
                            reject(new Error('写入超时：' + dir));
                        }, 20000);

                        function done(err) {
                            if (settled) return;
                            settled = true;
                            clearTimeout(timer);
                            err ? reject(err) : resolve(dir + fileName);
                        }
                        try {
                            window.resolveLocalFileSystemURL(dir, function(dirEntry) {
                                dirEntry.getFile(fileName, {
                                    create: true
                                }, function(fileEntry) {
                                    fileEntry.createWriter(function(fileWriter) {
                                        fileWriter.onwriteend = function() {
                                            done(null);
                                        };
                                        fileWriter.onerror = function(evt) {
                                            done(new Error('FileWriter: ' + errMsg(evt)));
                                        };
                                        try {
                                            fileWriter.write(blob);
                                        } catch (e) {
                                            done(new Error('write 调用异常：' + errMsg(e)));
                                        }
                                    }, function(evt) {
                                        done(new Error('createWriter: ' + errMsg(evt)));
                                    });
                                }, function(evt) {
                                    done(new Error('getFile: ' + errMsg(evt)));
                                });
                            }, function(evt) {
                                done(new Error('访问目录: ' + errMsg(evt)));
                            });
                        } catch (e) {
                            done(new Error('cordova 异常：' + errMsg(e)));
                        }
                    });
                }

                function saveViaBrowserDownload(fileName, blob) {
                    return new Promise(function(resolve, reject) {
                        try {
                            if (typeof window.URL === 'undefined' || typeof window.URL.createObjectURL !== 'function') {
                                reject(new Error('浏览器不支持 createObjectURL'));
                                return;
                            }
                            var a = document.createElement('a');
                            a.download = fileName;
                            a.href = window.URL.createObjectURL(blob);
                            a.style.display = 'none';
                            document.body.appendChild(a);
                            a.click();
                            setTimeout(function() {
                                try {
                                    window.URL.revokeObjectURL(a.href);
                                    if (a.parentNode) a.parentNode.removeChild(a);
                                } catch (e) {}
                            }, 1500);
                            resolve('(浏览器下载)');
                        } catch (e) {
                            reject(new Error('浏览器下载异常：' + errMsg(e)));
                        }
                    });
                }

                try {
                    await game.dcfl_loadJSZip();

                    var allFiles = await game.dcfl_listExtensionFiles(extName);
                    if (!Array.isArray(allFiles)) allFiles = [];

                    var includeFiles = ['extension.js', 'info.json', 'README.md'];
                    allFiles.forEach(function(f) {
                        if (!f) return;
                        if (includeFiles.indexOf(f) !== -1) return;
                        if (f === 'package.js') return;
                        if (/\.(js|mjs|cjs|css|json|txt|md|html?|xml|svg|ya?ml|ini|conf)$/i.test(f)) {
                            includeFiles.push(f);
                        }
                    });

                    var zip = new JSZip();
                    var included = [];

                    function readWithTimeout(fname, ms) {
                        return Promise.race([
                            game.dcfl_readExtensionFile(extName, fname).catch(function() {
                                return null;
                            }),
                            new Promise(function(resolve) {
                                setTimeout(function() {
                                    resolve(null);
                                }, ms);
                            })
                        ]);
                    }

                    for (var i = 0; i < includeFiles.length; i++) {
                        var fname = includeFiles[i];
                        var content = null;
                        try {
                            content = await readWithTimeout(fname, 4000);
                        } catch (e) {
                            content = null;
                        }
                        if (content == null) continue;
                        try {
                            if (typeof content === 'string' && content.indexOf('data:') === 0) {
                                var ci = content.indexOf(',');
                                zip.file(fname, content.slice(ci + 1), {
                                    base64: true
                                });
                            } else {
                                zip.file(fname, content);
                            }
                            included.push(fname);
                        } catch (e) {}
                    }

                    if (included.indexOf('extension.js') === -1) {
                        var ls = localStorage.getItem(lib.configprefix + 'extension_' + extName);
                        if (ls) {
                            zip.file('extension.js', ls);
                            included.push('extension.js');
                        }
                    }
                    if (included.indexOf('extension.js') === -1) {
                        throw new Error('无法读取 extension.js，扩展可能未完整安装');
                    }

                    var info = lib.extensionPack[extName] || {};
                    var pkg = {
                        intro: info.intro || '',
                        author: info.author || '',
                        netdisk: info.diskURL || info.netdisk || '',
                        forum: info.forumURL || info.forum || '',
                        version: info.version || '',
                        files: allFiles.filter(function(f) {
                            return includeFiles.indexOf(f) === -1 && f !== 'package.js';
                        })
                    };

                    var sizeBlob = await zipBlob(zip);
                    var sz = sizeBlob.size;
                    if (sz < 1000) pkg.size = sz + 'B';
                    else if (sz < 1000000) pkg.size = Math.round(sz / 1000) + 'KB';
                    else pkg.size = Math.round(sz / 100000) / 10 + 'MB';

                    var pkgStr = '';
                    var keys = Object.keys(pkg);
                    keys.forEach(function(k, idx) {
                        pkgStr += '\t' + k + ':' + JSON.stringify(pkg[k]) + (idx < keys.length - 1 ? ',\n' : '\n');
                    });
                    zip.file('package.js', 'extension["' + extName + '"]={\n' + pkgStr + '};');

                    var finalBlob = await zipBlob(zip);
                    var outName = extName.replace(/[\\\/:?"*<>|]/g, '-') + '.zip';

                    var saved = null;
                    var errs = [];

                    if (lib.node && lib.node.fs) {
                        try {
                            saved = await saveViaElectron(outName, finalBlob);
                            alert('文件已导出至' + saved);
                        } catch (e) {
                            errs.push('Electron: ' + errMsg(e));
                        }
                    }

                    if (!saved && typeof window.resolveLocalFileSystemURL === 'function' && typeof cordova !== 'undefined' && cordova && cordova.file) {
                        var dirs = [];
                        try {
                            var cf = cordova.file;
                            ['externalDataDirectory', 'externalPublicDirectory', 'externalApplicationStorageDirectory',
                                'dataDirectory', 'documentsDirectory', 'cacheDirectory',
                                'applicationStorageDirectory', 'applicationDirectory'
                            ].forEach(function(k) {
                                if (cf[k]) dirs.push(cf[k]);
                            });
                            if (cf.externalRootDirectory) dirs.push(cf.externalRootDirectory + 'Download/');
                        } catch (e) {}
                        var seen = {};
                        dirs = dirs.filter(function(d) {
                            if (!d || seen[d]) return false;
                            seen[d] = 1;
                            return true;
                        });
                        for (var di = 0; di < dirs.length; di++) {
                            try {
                                saved = await saveViaCordovaDir(dirs[di], outName, finalBlob);
                                alert('文件已导出至' + saved);
                                break;
                            } catch (e) {
                                errs.push(dirs[di] + ': ' + errMsg(e));
                            }
                        }
                    }

                    if (!saved) {
                        try {
                            saved = await saveViaBrowserDownload(outName, finalBlob);
                        } catch (e) {
                            errs.push('浏览器: ' + errMsg(e));
                        }
                    }

                    if (!saved) {
                        throw new Error('所有保存方式均失败：\n' + errs.join('\n'));
                    }

                    if (game.print) {
                        var names = Object.keys(zip.files);
                        game.print('[叠彩峰岭] 已导出：' + outName + '（' + Math.round(finalBlob.size / 1024) + ' KB）');
                        game.print('[叠彩峰岭] 内含文件：' + names.join('、'));
                    }
                } catch (outer) {
                    console.error('[叠彩峰岭] 导出过程异常：', outer);
                    throw new Error(errMsg(outer));
                }
            };

            game.dcfl_openExportPage = function() {
                var old = document.getElementById('dcfl_export_page');
                if (old && old.parentNode) old.parentNode.removeChild(old);

                var overlay = ui.create.div('#dcfl_export_page');
                var container = ui.create.div('#dcfl_export_container', overlay);
                var panel = ui.create.div('.dcfl_export_panel', container);

                var closeBtn = ui.create.div('#dcfl_export_close', '×', panel);
                closeBtn.addEventListener('click', function() {
                    if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
                });

                ui.create.div('#dcfl_export_title', '导出扩展', panel);

                var content = ui.create.div('#dcfl_export_content', panel);
                var grid = ui.create.div('.dcfl_export_grid', content);

                var extensions = (lib.config.extensions || []).slice();

                function fitTextSize(el, maxSize, minSize) {
                    if (!el) return;
                    el.style.fontSize = maxSize + 'px';
                    var size = maxSize;
                    void el.offsetWidth;
                    while (size > minSize && el.scrollWidth > el.clientWidth + 1) {
                        size -= 1;
                        el.style.fontSize = size + 'px';
                    }
                }

                if (!extensions.length) {
                    ui.create.div('.dcfl_export_empty', '未安装任何扩展', grid);
                } else {
                    extensions.forEach(function(extName) {
                        var btn = ui.create.div('.dcfl_export_btn', grid);
                        ui.create.div('.dcfl_export_name', extName, btn);

                        btn.addEventListener('click', function() {
                            if (btn._disabled) return;

                            if (btn._recoverTimer) {
                                clearTimeout(btn._recoverTimer);
                                btn._recoverTimer = null;
                            }
                            if (btn._statusEl && btn._statusEl.parentNode) {
                                btn._statusEl.parentNode.removeChild(btn._statusEl);
                            }

                            btn._disabled = true;
                            btn.classList.remove('success');
                            btn.classList.add('exporting');
                            var status = ui.create.div('.dcfl_export_status', '导出中...', btn);
                            btn._statusEl = status;

                            function recover() {
                                try {
                                    btn.classList.remove('success', 'exporting');
                                    if (status.parentNode) status.parentNode.removeChild(status);
                                } catch (e) {}
                                btn._disabled = false;
                                btn._statusEl = null;
                                btn._recoverTimer = null;
                            }

                            game.dcfl_exportExtensionByName(extName).then(function() {
                                btn.classList.remove('exporting');
                                btn.classList.add('success');
                                status.textContent = '导出成功';
                                btn._recoverTimer = setTimeout(recover, 1500);
                            }, function(err) {
                                console.error(err);
                                var msg;
                                if (!err) msg = '未知错误';
                                else if (typeof err === 'string') msg = err;
                                else if (err.message) msg = err.message;
                                else {
                                    try {
                                        if (typeof Event !== 'undefined' && err instanceof Event) {
                                            var d = err.type || 'error';
                                            if (err.target && err.target.src) d += ' src=' + err.target.src;
                                            msg = 'Event(' + d + ')';
                                        } else {
                                            msg = JSON.stringify(err);
                                        }
                                    } catch (e) {
                                        msg = String(err);
                                    }
                                }
                                alert('导出失败：' + msg);
                                recover();
                            });
                        });
                    });
                }

                document.body.appendChild(overlay);

                requestAnimationFrame(function() {
                    var nameEls = grid.querySelectorAll('.dcfl_export_name');
                    for (var i = 0; i < nameEls.length; i++) {
                        fitTextSize(nameEls[i], 24, 12);
                    }
                });
            };

            //=====================导出扩展结束=====================

            //=====================扩展代码浏览器=====================
            game.dcfl_listExtensionFilesDeep = function(extName) {
                return new Promise(function(resolve) {
                    if (lib.node && lib.node.fs) {
                        var result = [];
                        var basePath = __dirname + '/extension/' + extName;
                        try {
                            if (lib.node.fs.existsSync(basePath)) {
                                (function walk(dir, rel) {
                                    var entries;
                                    try {
                                        entries = lib.node.fs.readdirSync(dir);
                                    } catch (e) {
                                        return;
                                    }
                                    for (var i = 0; i < entries.length; i++) {
                                        var entry = entries[i];
                                        if (!entry || entry[0] === '.' || entry[0] === '_') continue;
                                        var fullPath = dir + '/' + entry;
                                        var relPath = rel ? rel + '/' + entry : entry;
                                        try {
                                            if (lib.node.fs.statSync(fullPath).isDirectory()) {
                                                walk(fullPath, relPath);
                                            } else {
                                                result.push(relPath);
                                            }
                                        } catch (e) {}
                                    }
                                })(basePath, '');
                            }
                        } catch (e) {}
                        resolve(result);
                        return;
                    }

                    if (lib.device && typeof window.resolveLocalFileSystemURL === 'function') {
                        var candidates = [];
                        try {
                            if (typeof nonameInitialized !== 'undefined' && nonameInitialized) {
                                candidates.push(String(nonameInitialized));
                            }
                        } catch (e) {}
                        try {
                            if (typeof cordova !== 'undefined' && cordova.file) {
                                if (cordova.file.externalDataDirectory) candidates.push(cordova.file.externalDataDirectory);
                                if (cordova.file.dataDirectory) candidates.push(cordova.file.dataDirectory);
                                if (cordova.file.documentsDirectory) candidates.push(cordova.file.documentsDirectory);
                                if (cordova.file.applicationDirectory) candidates.push(cordova.file.applicationDirectory);
                                if (cordova.file.externalApplicationStorageDirectory) candidates.push(cordova.file.externalApplicationStorageDirectory);
                                if (cordova.file.externalRootDirectory) candidates.push(cordova.file.externalRootDirectory);
                            }
                        } catch (e) {}

                        var normalizedCandidates = [];
                        candidates.forEach(function(p) {
                            var np = String(p).replace(/\/+$/, '');
                            if (np && normalizedCandidates.indexOf(np) === -1) normalizedCandidates.push(np);
                        });

                        var fallback = function() {
                            if (typeof game.getFileList === 'function') {
                                game.getFileList('extension/' + extName, function(_, files) {
                                    resolve(files || []);
                                }, function() {
                                    resolve([]);
                                });
                            } else {
                                resolve([]);
                            }
                        };

                        if (!normalizedCandidates.length) {
                            fallback();
                            return;
                        }

                        function walkEntry(dirEntry, rel, out, done) {
                            var reader;
                            try {
                                reader = dirEntry.createReader();
                            } catch (e) {
                                done();
                                return;
                            }
                            var allEntries = [];

                            function readBatch() {
                                reader.readEntries(function(entries) {
                                    if (!entries || entries.length === 0) {
                                        if (allEntries.length === 0) {
                                            done();
                                            return;
                                        }
                                        var i = 0;

                                        function next() {
                                            if (i >= allEntries.length) {
                                                done();
                                                return;
                                            }
                                            var e = allEntries[i++];
                                            var name = e.name;
                                            if (!name || name[0] === '.' || name[0] === '_') {
                                                next();
                                                return;
                                            }
                                            var childRel = rel ? rel + '/' + name : name;
                                            if (e.isDirectory) {
                                                walkEntry(e, childRel, out, next);
                                            } else if (e.isFile) {
                                                out.push(childRel);
                                                next();
                                            } else {
                                                next();
                                            }
                                        }
                                        next();
                                    } else {
                                        for (var j = 0; j < entries.length; j++) allEntries.push(entries[j]);
                                        readBatch();
                                    }
                                }, function() {
                                    done();
                                });
                            }
                            readBatch();
                        }

                        function tryPrefix(idx) {
                            if (idx >= normalizedCandidates.length) {
                                fallback();
                                return;
                            }
                            var prefix = normalizedCandidates[idx];
                            var rootUrl = prefix + '/extension/' + extName;
                            try {
                                window.resolveLocalFileSystemURL(rootUrl, function(entry) {
                                    if (!entry || !entry.isDirectory) {
                                        tryPrefix(idx + 1);
                                        return;
                                    }
                                    var out = [];
                                    walkEntry(entry, '', out, function() {
                                        out.sort();
                                        resolve(out);
                                    });
                                }, function() {
                                    tryPrefix(idx + 1);
                                });
                            } catch (e) {
                                tryPrefix(idx + 1);
                            }
                        }

                        tryPrefix(0);
                        return;
                    }

                    if (lib.device && game.getFileList) {
                        game.getFileList('extension/' + extName, function(_, files) {
                            resolve(files || []);
                        }, function() {
                            resolve([]);
                        });
                    } else if (lib.config.extensionInfo && lib.config.extensionInfo[extName]) {
                        resolve((lib.config.extensionInfo[extName].file || []).slice());
                    } else {
                        resolve([]);
                    }
                });
            };

            game.dcfl_openCodeBrowser = function() {
                var old = document.getElementById('dcfl_code_browser_page');
                if (old && old.parentNode) old.parentNode.removeChild(old);

                var overlay = ui.create.div();
                overlay.id = 'dcfl_code_browser_page';
                var container = ui.create.div();
                container.id = 'dcfl_code_browser_container';
                overlay.appendChild(container);
                var panel = ui.create.div();
                panel.className = 'dcfl_code_browser_panel';
                container.appendChild(panel);

                var closeBtn = ui.create.div();
                closeBtn.id = 'dcfl_code_browser_close';
                closeBtn.textContent = '×';
                panel.appendChild(closeBtn);
                closeBtn.addEventListener('click', function() {
                    if (currentExt) {
                        currentExt = null;
                        renderBrowser();
                        return;
                    }
                    if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
                });

                var titleEl = ui.create.div();
                titleEl.id = 'dcfl_code_browser_title';
                titleEl.textContent = '扩展代码';
                panel.appendChild(titleEl);

                var content = ui.create.div();
                content.id = 'dcfl_code_browser_content';
                panel.appendChild(content);

                var extensions = (lib.config.extensions || []).slice();
                var listCache = {};
                var currentExt = null;
                var renderToken = 0;

                function normalizeRelPath(rawPath, extName) {
                    var s = String(rawPath).replace(/\\/g, '/');
                    s = s.replace(/^\.\//, '');
                    var patterns = [
                        '/extension/' + extName + '/',
                        'extension/' + extName + '/',
                        extName + '/'
                    ];
                    for (var i = 0; i < patterns.length; i++) {
                        var p = patterns[i];
                        var idx = s.indexOf(p);
                        if (idx === 0) {
                            s = s.substring(p.length);
                            break;
                        }
                        if (idx > 0) {
                            s = s.substring(idx + p.length);
                            break;
                        }
                    }
                    return s.replace(/^\/+/, '');
                }

                function getExtJsFiles(extName, cb) {
                    if (listCache[extName]) {
                        cb(listCache[extName]);
                        return;
                    }
                    game.dcfl_listExtensionFilesDeep(extName).then(function(list) {
                        var jsList = (list || [])
                            .map(function(f) {
                                return normalizeRelPath(f, extName);
                            })
                            .filter(function(f) {
                                return f.length > 0 && /\.js$/i.test(f);
                            });
                        listCache[extName] = jsList;
                        cb(jsList);
                    }).catch(function() {
                        listCache[extName] = [];
                        cb([]);
                    });
                }

                function openJsFile(extName, filePath) {
                    game.dcfl_readExtensionFile(extName, filePath).then(function(fileContent) {
                        if (fileContent == null) {
                            alert('无法读取文件：' + extName + '/' + filePath);
                            return;
                        }
                        var codeText = fileContent;
                        if (typeof codeText !== 'string') {
                            try {
                                if (codeText instanceof Uint8Array || codeText instanceof ArrayBuffer) {
                                    codeText = new TextDecoder('utf-8').decode(codeText);
                                } else {
                                    codeText = String(codeText);
                                }
                            } catch (e) {
                                alert('文件内容无法解析为文本');
                                return;
                            }
                        }
                        showExtensionCodePage(extName + ' / ' + filePath, codeText);
                    }).catch(function(err) {
                        alert('读取文件失败：' + (err && err.message ? err.message : err));
                    });
                }

                function makeSection() {
                    var el = ui.create.div();
                    el.className = 'dcfl_code_section';
                    return el;
                }

                function makeSectionTitle(text) {
                    var el = ui.create.div();
                    el.className = 'dcfl_code_section_title';
                    el.textContent = text;
                    return el;
                }

                function makeGrid() {
                    var grid = ui.create.div();
                    grid.className = 'dcfl_code_grid';
                    return grid;
                }

                function makeItemButton(displayText, onClick) {
                    var btn = ui.create.div();
                    btn.className = 'dcfl_code_item';
                    var nameEl = ui.create.div();
                    nameEl.className = 'dcfl_code_item_name';
                    var spanEl = document.createElement('span');
                    spanEl.textContent = displayText;
                    nameEl.appendChild(spanEl);
                    btn.appendChild(nameEl);
                    btn.addEventListener('click', onClick);
                    return btn;
                }

                function renderBrowser() {
                    var myToken = ++renderToken;
                    while (content.firstChild) content.removeChild(content.firstChild);

                    if (!currentExt) {
                        titleEl.textContent = '扩展代码';
                        var topSection = makeSection();
                        content.appendChild(topSection);
                        var topGrid = makeGrid();
                        topSection.appendChild(topGrid);
                        if (!extensions.length) {
                            var empty = ui.create.div();
                            empty.className = 'dcfl_export_empty';
                            empty.textContent = '未安装任何扩展';
                            topGrid.appendChild(empty);
                        } else {
                            extensions.forEach(function(extName) {
                                topGrid.appendChild(makeItemButton(extName, function() {
                                    currentExt = extName;
                                    renderBrowser();
                                }));
                            });
                        }
                        return;
                    }

                    titleEl.textContent = '扩展代码 - ' + currentExt;

                    getExtJsFiles(currentExt, function(jsFiles) {
                        if (myToken !== renderToken) return;

                        if (!jsFiles.length) {
                            var empty2 = ui.create.div();
                            empty2.className = 'dcfl_export_empty';
                            empty2.textContent = '该扩展下没有找到 JS 文件';
                            content.appendChild(empty2);
                            return;
                        }

                        var groups = {};
                        jsFiles.forEach(function(f) {
                            var slash = f.lastIndexOf('/');
                            var dir = slash === -1 ? '' : f.substring(0, slash);
                            var name = slash === -1 ? f : f.substring(slash + 1);
                            if (!groups[dir]) groups[dir] = [];
                            groups[dir].push(name);
                        });

                        var dirKeys = Object.keys(groups).sort(function(a, b) {
                            if (a === '') return -1;
                            if (b === '') return 1;
                            return a.localeCompare(b);
                        });

                        dirKeys.forEach(function(dir) {
                            var section = makeSection();
                            content.appendChild(section);

                            var displayTitle = (dir === '' ? currentExt + '（根目录）' : dir) + ' - ' + groups[dir].length + ' 个 JS';
                            section.appendChild(makeSectionTitle(displayTitle));

                            var grid = makeGrid();
                            section.appendChild(grid);

                            groups[dir].sort().forEach(function(fileName) {
                                var fullRel = dir === '' ? fileName : dir + '/' + fileName;
                                grid.appendChild(makeItemButton(fileName, function() {
                                    openJsFile(currentExt, fullRel);
                                }));
                            });
                        });
                    });
                }

                function showExtensionCodePage(titleText, codeText) {
                    var oldPages = document.querySelectorAll('.dcfl_ext_code_page');
                    for (var i = 0; i < oldPages.length; i++) {
                        if (oldPages[i].parentNode) oldPages[i].parentNode.removeChild(oldPages[i]);
                    }

                    var pageBg = ui.create.div();
                    pageBg.id = 'dcfl_page';
                    pageBg.className = 'dcfl_code_page dcfl_ext_code_page';
                    pageBg.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 2040; display: block;';

                    function closeThisPage() {
                        if (pageBg.parentNode) {
                            pageBg.parentNode.removeChild(pageBg);
                        }
                        if (window._dcfl_currentCodePage === pageBg) {
                            window._dcfl_currentCodePage = null;
                        }
                    }

                    pageBg.addEventListener('click', function(e) {
                        if (e.target === pageBg) {
                            closeThisPage();
                        }
                    });

                    var mainCont = ui.create.div();
                    mainCont.id = 'dcfl_mainContainer';
                    mainCont.className = 'dcfl_code_container';
                    var rightPan = ui.create.div();
                    rightPan.id = 'dcfl_rightPanel';
                    rightPan.className = 'dcfl_code_panel';

                    var closeButton = ui.create.div();
                    closeButton.id = 'dcfl_closeButton';
                    closeButton.className = 'dcfl_code_close';
                    closeButton.textContent = '×';
                    closeButton.addEventListener('click', function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        closeThisPage();
                        return false;
                    });
                    rightPan.appendChild(closeButton);

                    var copyButton = ui.create.div();
                    copyButton.className = 'dcfl_code_copy';
                    copyButton.textContent = '复制代码';
                    copyButton.style.cssText = 'position: absolute; top: 0; right: 75px; height: 35px; line-height: 35px; z-index: 2041;';
                    copyButton.addEventListener('click', function(e) {
                        e.stopPropagation();

                        function fallbackCopy(text) {
                            var textarea = document.createElement('textarea');
                            textarea.value = text;
                            document.body.appendChild(textarea);
                            textarea.select();
                            try {
                                document.execCommand('copy');
                                copyButton.classList.add('copied');
                                copyButton.textContent = '已复制!';
                                setTimeout(function() {
                                    copyButton.classList.remove('copied');
                                    copyButton.textContent = '复制代码';
                                }, 1500);
                            } catch (e2) {
                                alert('复制失败，请手动复制');
                            }
                            document.body.removeChild(textarea);
                        }
                        if (navigator.clipboard && navigator.clipboard.writeText) {
                            navigator.clipboard.writeText(codeText).then(function() {
                                copyButton.classList.add('copied');
                                copyButton.textContent = '已复制!';
                                setTimeout(function() {
                                    copyButton.classList.remove('copied');
                                    copyButton.textContent = '复制代码';
                                }, 1500);
                            }).catch(function() {
                                fallbackCopy(codeText);
                            });
                        } else {
                            fallbackCopy(codeText);
                        }
                    });
                    rightPan.appendChild(copyButton);

                    var title = ui.create.div();
                    title.id = 'dcfl_title';
                    title.className = 'dcfl_code_title';
                    title.textContent = titleText;
                    rightPan.appendChild(title);

                    var contentCont = ui.create.div();
                    contentCont.id = 'dcfl_contentContainer';
                    contentCont.className = 'dcfl_code_content';
                    var pre = document.createElement('pre');
                    pre.style.cssText = 'margin: 0; padding: 20px; font-family: lishu !important; font-size: 28px !important; color: #ccc !important; line-height: 1.6 !important; white-space: pre-wrap !important; word-wrap: break-word !important; overflow: auto !important; height: 100% !important; box-sizing: border-box !important;';
                    pre.innerHTML = dcflHighlightJs(codeText);
                    contentCont.appendChild(pre);
                    rightPan.appendChild(contentCont);
                    mainCont.appendChild(rightPan);
                    pageBg.appendChild(mainCont);
                    document.body.appendChild(pageBg);
                    window._dcfl_currentCodePage = pageBg;
                }

                renderBrowser();
                document.body.appendChild(overlay);
            };

            //=====================扩展代码浏览器结束=====================

            //=====================禁将名录=====================            
            game.dcfl_getAllModes = function() {
                return (lib.config.all && lib.config.all.mode) ? lib.config.all.mode.slice() : [];
            };

            game.dcfl_isBannedInAllModes = function(charName) {
                var modes = game.dcfl_getAllModes();
                if (!modes.length) return false;
                for (var i = 0; i < modes.length; i++) {
                    var list = lib.config[modes[i] + "_banned"] || [];
                    if (!list.includes(charName)) return false;
                }
                return true;
            };

            game.dcfl_toggleAllModesBan = function(charName) {
                var modes = game.dcfl_getAllModes();
                var isAllBanned = game.dcfl_isBannedInAllModes(charName);
                for (var i = 0; i < modes.length; i++) {
                    var key = modes[i] + "_banned";
                    var list = lib.config[key] || [];
                    var newList = list.slice();
                    if (isAllBanned) {
                        var idx = newList.indexOf(charName);
                        if (idx > -1) newList.splice(idx, 1);
                    } else {
                        if (!newList.includes(charName)) newList.push(charName);
                    }
                    lib.config[key] = newList;
                    game.saveConfig(key, newList);
                }
                return !isAllBanned;
            };

            game.dcfl_countBannedInAllModes = function() {
                var modes = game.dcfl_getAllModes();
                if (!modes.length) return 0;
                var firstList = lib.config[modes[0] + "_banned"] || [];
                var cnt = 0;
                for (var i = 0; i < firstList.length; i++) {
                    var c = firstList[i];
                    var allHas = true;
                    for (var j = 1; j < modes.length; j++) {
                        var list = lib.config[modes[j] + "_banned"] || [];
                        if (!list.includes(c)) {
                            allHas = false;
                            break;
                        }
                    }
                    if (allHas) cnt++;
                }
                return cnt;
            };

            game.dcfl_renderBanListGrid = function() {
                var grid = document.querySelector('#dcfl_ban_list_content .dcfl_ban_list_grid');
                if (!grid) return;

                var modes = game.dcfl_getAllModes();

                function fitTextSize(el, maxSize, minSize) {
                    if (!el) return;
                    el.style.fontSize = maxSize + 'px';
                    var size = maxSize;
                    void el.offsetWidth;
                    while (size > minSize && el.scrollWidth > el.clientWidth + 1) {
                        size -= 1;
                        el.style.fontSize = size + 'px';
                    }
                }

                grid.innerHTML = '';

                if (!modes.length) {
                    ui.create.div('.dcfl_ban_list_empty', '未找到任何模式', grid);
                    return;
                }

                var allBtn = ui.create.div('.dcfl_ban_list_btn', grid);
                var allNameEl = ui.create.div('.dcfl_ban_list_name', allBtn);
                var allText = document.createElement('span');
                allText.className = 'dcfl_ban_list_text';
                allText.textContent = '全禁';
                allNameEl.appendChild(allText);

                var allBannedCount = game.dcfl_countBannedInAllModes();
                if (allBannedCount > 0) {
                    allNameEl.appendChild(document.createElement('br'));
                    var allBadge = document.createElement('span');
                    allBadge.className = 'dcfl_ban_list_badge';
                    allBadge.textContent = '已禁 ' + allBannedCount + ' 名';
                    allNameEl.appendChild(allBadge);
                }

                allBtn.addEventListener('click', function() {
                    game.dcfl_openBanPage('_all');
                });

                modes.forEach(function(mode) {
                    var btn = ui.create.div('.dcfl_ban_list_btn', grid);
                    var displayName = lib.translate[mode] || mode;
                    var nameEl = ui.create.div('.dcfl_ban_list_name', btn);
                    var banned = lib.config[mode + "_banned"] || [];

                    var nameText = document.createElement('span');
                    nameText.className = 'dcfl_ban_list_text';
                    nameText.textContent = displayName;
                    nameEl.appendChild(nameText);

                    if (banned.length) {
                        nameEl.appendChild(document.createElement('br'));
                        var badge = document.createElement('span');
                        badge.className = 'dcfl_ban_list_badge';
                        badge.textContent = '已禁 ' + banned.length + ' 名';
                        nameEl.appendChild(badge);
                    }

                    btn.addEventListener('click', function() {
                        game.dcfl_openBanPage(mode);
                    });
                });

                requestAnimationFrame(function() {
                    var texts = grid.querySelectorAll('.dcfl_ban_list_text');
                    for (var i = 0; i < texts.length; i++) {
                        fitTextSize(texts[i], 24, 12);
                    }
                });
            };

            game.dcfl_openBanListPage = function() {
                var old = document.getElementById('dcfl_ban_list_page');
                if (old && old.parentNode) old.parentNode.removeChild(old);

                var overlay = ui.create.div('#dcfl_ban_list_page');
                var container = ui.create.div('#dcfl_ban_list_container', overlay);
                var panel = ui.create.div('.dcfl_ban_list_panel', container);

                var closeBtn = ui.create.div('#dcfl_ban_list_close', '×', panel);
                closeBtn.addEventListener('click', function() {
                    if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
                });

                ui.create.div('#dcfl_ban_list_title', '禁将名录', panel);

                var content = ui.create.div('#dcfl_ban_list_content', panel);
                ui.create.div('.dcfl_ban_list_grid', content);

                document.body.appendChild(overlay);

                game.dcfl_renderBanListGrid();
            };

            game.dcfl_openBanPage = function(mode) {
                var old = document.getElementById('dcfl_ban_page');
                if (old && old.parentNode) old.parentNode.removeChild(old);

                var isAllMode = (mode === '_all');
                var bannedName = isAllMode ? null : (mode + "_banned");
                if (!isAllMode) {
                    if (!Array.isArray(lib.config[bannedName])) {
                        lib.config[bannedName] = [];
                    }
                }

                var overlay = ui.create.div('#dcfl_ban_page');
                var leftPanel = ui.create.div('#dcfl_ban_leftPanel', overlay);
                var rightPanel = ui.create.div('#dcfl_ban_rightPanel', overlay);

                var closeBtn = ui.create.div('#dcfl_ban_closeButton', '×', rightPanel);
                closeBtn.addEventListener('click', function() {
                    if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
                    if (document.getElementById('dcfl_ban_list_page')) {
                        game.dcfl_renderBanListGrid();
                    }
                });

                var title = ui.create.div('#dcfl_ban_title', rightPanel);
                title.innerHTML = (isAllMode ? '全禁' : (lib.translate[mode] || mode)) + ' - 禁将名录';

                var contentContainer = ui.create.div('#dcfl_ban_contentContainer', rightPanel);
                var buttonContainer = ui.create.div('#dcfl_ban_buttonContainer', leftPanel);

                var packs = [];
                if (lib.characterPack) {
                    for (var packKey in lib.characterPack) {
                        if (!packKey || packKey.startsWith('mode_')) continue;
                        if (packKey === 'character' || packKey === 'translate' || packKey === 'list' || packKey === 'card' || packKey === 'skill') continue;
                        var packData = lib.characterPack[packKey];
                        if (!packData || typeof packData !== 'object') continue;
                        var charList = [];
                        for (var charName in packData) {
                            var charData = lib.character[charName];
                            if (charData && !charData.isUnseen) {
                                charList.push(charName);
                            }
                        }
                        if (charList.length) {
                            var displayName = lib.translate[packKey + '_character_config'] || packKey;
                            displayName = displayName.replace(/<[^>]*>/g, '').trim();
                            packs.push({
                                id: packKey,
                                name: displayName,
                                chars: charList
                            });
                        }
                    }
                }

                var currentPackId = packs.length ? packs[0].id : null;

                function isBanned(charName) {
                    if (isAllMode) return game.dcfl_isBannedInAllModes(charName);
                    var list = lib.config[bannedName] || [];
                    return list.includes(charName);
                }

                function toggleBan(charName) {
                    if (isAllMode) {
                        return game.dcfl_toggleAllModesBan(charName);
                    }
                    var list = lib.config[bannedName] || [];
                    var newList = list.slice();
                    var nowBanned;
                    if (newList.includes(charName)) {
                        var idx = newList.indexOf(charName);
                        if (idx > -1) newList.splice(idx, 1);
                        nowBanned = false;
                    } else {
                        newList.push(charName);
                        nowBanned = true;
                    }
                    lib.config[bannedName] = newList;
                    game.saveConfig(bannedName, newList);
                    return nowBanned;
                }

                function countBanned(pack) {
                    var cnt = 0;
                    for (var i = 0; i < pack.chars.length; i++) {
                        if (isBanned(pack.chars[i])) cnt++;
                    }
                    return cnt;
                }

                function updatePackCounts() {
                    var btns = buttonContainer.querySelectorAll('.dcfl_packButton');
                    for (var i = 0; i < btns.length; i++) {
                        var b = btns[i];
                        var p = b._packData;
                        if (!p) continue;
                        var span = b.querySelector('.dcfl_count_badge');
                        if (span) span.textContent = '(' + countBanned(p) + '名)';
                    }
                }

                function renderChars(pack) {
                    contentContainer.innerHTML = '';
                    var grid = ui.create.div('.dcfl_ban_grid', contentContainer);

                    var sortFn = (lib.sort && lib.sort.character) ? lib.sort.character : function(a, b) {
                        return get.translation(a).localeCompare(get.translation(b));
                    };

                    var chars = pack.chars.slice().sort(sortFn);

                    chars.forEach(function(charName) {
                        var card = ui.create.div('.dcfl_ban_card');
                        var img = ui.create.div('.dcfl_ban_img');
                        loadCharacterImage(img, charName, pack.id, pack.name, false);
                        card.appendChild(img);

                        var nameLabel = ui.create.div('.dcfl_ban_name');
                        nameLabel.innerHTML = get.translation(charName);
                        card.appendChild(nameLabel);

                        if (isBanned(charName)) {
                            card.classList.add('banned');
                        }

                        card.addEventListener('click', function() {
                            var nowBanned = toggleBan(charName);
                            if (nowBanned) {
                                card.classList.add('banned');
                            } else {
                                card.classList.remove('banned');
                            }
                            updatePackCounts();
                        });

                        grid.appendChild(card);
                    });

                    lib.setScroll(contentContainer);
                }

                if (packs.length) {
                    packs.forEach(function(pack) {
                        var wrapper = ui.create.div('.dcfl_buttonWrapper', buttonContainer);
                        var button = ui.create.div('.dcfl_packButton', wrapper);
                        button._packData = pack;
                        button.innerHTML = pack.name + '<span class="dcfl_count_badge">(' + countBanned(pack) + '名)</span>';
                        if (pack.id === currentPackId) button.classList.add('active');
                        button.setAttribute('data-pack', pack.id);
                        button.addEventListener('click', function() {
                            if (currentPackId === pack.id) return;
                            var btns = buttonContainer.querySelectorAll('[data-pack]');
                            for (var i = 0; i < btns.length; i++) {
                                if (btns[i].getAttribute('data-pack') === pack.id) {
                                    btns[i].classList.add('active');
                                } else {
                                    btns[i].classList.remove('active');
                                }
                            }
                            currentPackId = pack.id;
                            renderChars(pack);
                        });
                    });
                    renderChars(packs[0]);
                } else {
                    ui.create.div('.dcfl_ban_empty', '未找到武将包', contentContainer);
                }

                document.body.appendChild(overlay);
            };

            //=====================刀剑斧=====================            
            (function() {
                if (window._dcfl_daojianfu_installed) return;
                window._dcfl_daojianfu_installed = true;

                if (!lib.arenaReady) lib.arenaReady = [];
                lib.arenaReady.push(function() {
                    var duilib = window._dcfl_duilib;
                    if (!duilib || !window.spine) return;

                    var anim = new duilib.AnimationPlayer(
                        lib.assetURL + 'extension/叠彩峰岭/',
                        document.body,
                        'dcfl-daojianfu-canvas'
                    );
                    anim.dprAdaptive = true;
                    if (anim.canvas && anim.canvas.style) anim.canvas.style.zIndex = 8;

                    var pool = ['dao', 'jian', 'fuzi'];
                    pool.forEach(function(n) {
                        if (!anim.hasSpine(n)) anim.loadSpine(n, 'skel');
                    });

                    window._dcfl_daojianfu = {
                        anim: anim,
                        pool: pool,
                        lastPlay: {},
                        getEffect: function() {
                            var cfg = lib.config.extension_叠彩峰岭_dcfl_daojianfu || 'random';
                            if (cfg === 'close') return null;
                            if (cfg === 'random') return pool[Math.floor(Math.random() * pool.length)];
                            return pool.indexOf(cfg) > -1 ? cfg : null;
                        },
                        play: function(target) {
                            var self = window._dcfl_daojianfu;
                            if (!self || !target) return;
                            var name = self.getEffect();
                            if (!name) return;
                            if (!anim.hasSpine(name)) return;

                            var key = target.playerid != null ? target.playerid : (target.name || 'unknown');
                            var now = Date.now();
                            if (self.lastPlay[key] && now - self.lastPlay[key] < 300) return;
                            self.lastPlay[key] = now;

                            var el = (target.node && target.node.avatar) ? target.node.avatar : target;
                            var rect = el.getBoundingClientRect();
                            if (!rect || (rect.width === 0 && rect.height === 0)) {
                                rect = target.getBoundingClientRect();
                            }

                            var cw = anim.canvas.clientWidth || window.innerWidth;
                            var ch = anim.canvas.clientHeight || window.innerHeight;
                            var cx = (rect.left + rect.width / 2) / cw;
                            var cy = 1 - (rect.top + rect.height / 2) / ch;

                            anim.playSpine({
                                name: name,
                                loop: false,
                                speed: 0.5,
                                scale: 0.35,
                                x: [0, cx],
                                y: [0, cy]
                            });
                        }
                    };

                    lib.skill._dcfl_daojianfu = {
                        trigger: {
                            source: 'damageBegin'
                        },
                        forced: true,
                        charlotte: true,
                        popup: false,
                        priority: -100,
                        filter: function(event, player) {
                            if (!window._dcfl_daojianfu) return false;
                            if (!event.card || event.card.name !== 'sha') return false;
                            return event.num > 0;
                        },
                        content: function() {
                            if (!window._dcfl_daojianfu) return;
                            window._dcfl_daojianfu.play(trigger.player);
                            //game.playAudio('..', 'extension', '叠彩峰岭', 'dcfl_daojianfu');
                        }
                    };

                    game.players.forEach(function(p) {
                        p.addSkill('_dcfl_daojianfu');
                    });
                });
            })();
            //=====================刀剑斧结束=====================

        },
        precontent: function() {
            lib.init.css(lib.assetURL + 'extension/叠彩峰岭', 'extension');
            Reflect.deleteProperty(lib.extensionMenu['extension_叠彩峰岭'], 'edit');
            delete lib.extensionMenu.extension_叠彩峰岭.delete;

            if (typeof window.JSZip === 'undefined') {
                try {
                    var loaded = false;
                    if (lib.node && lib.node.fs) {
                        var candidates = [
                            __dirname + '/extension/叠彩峰岭/jszip.js',
                            __dirname + '/extension/叠彩峰岭/jszip.min.js'
                        ];
                        for (var i = 0; i < candidates.length; i++) {
                            if (lib.node.fs.existsSync(candidates[i])) {
                                var code = lib.node.fs.readFileSync(candidates[i], 'utf-8');
                                (0, eval)(code);
                                loaded = typeof window.JSZip !== 'undefined';
                                if (loaded) break;
                            }
                        }
                    }
                    if (!loaded) {
                        var xhr = new XMLHttpRequest();
                        xhr.open('GET', lib.assetURL + 'extension/叠彩峰岭/jszip.js', false);
                        xhr.send();
                        if (xhr.status === 200 || xhr.status === 0) {
                            (0, eval)(xhr.responseText);
                        }
                    }
                    console.log('[叠彩峰岭] jszip 预加载：' +
                        (typeof window.JSZip !== 'undefined' ? '成功' : '失败'));
                } catch (e) {
                    console.error('[叠彩峰岭] 预加载 jszip 异常：', e);
                }
            }

            var spineLoaded = false;
            if (typeof window.spine === 'undefined') {
                try {
                    var xhr2 = new XMLHttpRequest();
                    xhr2.open('GET', lib.assetURL + 'extension/叠彩峰岭/spine.js', false);
                    xhr2.send();
                    if (xhr2.status === 200 || xhr2.status === 0) {
                        (0, eval)(xhr2.responseText);
                        spineLoaded = typeof window.spine !== 'undefined';
                        console.log('[叠彩峰岭] spine.js 加载' + (spineLoaded ? '成功' : '失败（未暴露 window.spine）'));
                    } else {
                        console.error('[叠彩峰岭] spine.js HTTP 状态错误:', xhr2.status);
                    }
                } catch (e) {
                    console.error('[叠彩峰岭] 加载 spine.js 异常:', e);
                }
            } else {
                spineLoaded = true;
            }
            window._dcfl_spine_loaded = spineLoaded;
        },
        config: {
            "dcfl_introduction": {
                "name": "叠彩峰岭",
                "init": "1",
                "item": {
                    "1": "扩展功能简介",
                    "2": "<li>嗨～" + lib.config.connect_nickname + "！欢迎您前来体验《叠彩峰岭》扩展！",
                    "3": "<li>点击下方的“查看信息”按钮能弹出列表页，单击武将图片能换肤，双击武将图片可打开其详细信息页，点击详细信息页的技能按钮可打开查看该技能的代码，并且可以一键复制",
                    "4": "<li>点击下方的“查找武将”按钮可输入角色的名字、技能名或技能描述来搜索相关武将，会弹出与之相关的武将的列表，双击武将图可打开相应武将的详细信息页",
                    "5": "侍灵动画与侍灵图鉴，点击打开就懂，不作过多介绍了，还有十几个侍灵的完整的侍灵动画请下载《侍灵动画》扩展。再下面的功能开关，可长按开关以查看其功能介绍",
                    "6": "<li>若发现BUG可到贴吧或无名杀扩展交流群：852740627 反馈，有技能设计的建议也可联系作者"
                }
            },
            "dcfl_daojianfu": {
                name: "伤害命中特效",
                init: "close",
                intro: "使用【杀】造成伤害时播放的刀/剑/斧特效",
                item: {
                    "close": "关闭",
                    "random": "随机",
                    "dao": "刀",
                    "jian": "剑",
                    "fuzi": "斧",
                },
            },
            "dcfl_viewinfo": {
                name: '<div class="dcfl_menu">查看信息</div>',
                "clear": true,
                "onclick": function() {
                    setTimeout(function() {
                        game.showCharacterInfo();
                    }, 100);
                },
            },
            "dcfl_search": {
                name: '<div class="dcfl_menu">查找武将</div>',
                "clear": true,
                "onclick": function() {
                    setTimeout(function() {
                        game.searchCharacters();
                    }, 100);
                },
            },
            "dcfl_banList": {
                name: '<div class="dcfl_menu">禁将名录</div>',
                "clear": true,
                "onclick": function() {
                    setTimeout(function() {
                        game.dcfl_openBanListPage();
                    }, 100);
                },
            },
            "dcfl_codeBrowser": {
                name: '<div class="dcfl_menu">扩展代码</div>',
                "clear": true,
                "onclick": function() {
                    setTimeout(function() {
                        game.dcfl_openCodeBrowser();
                    }, 100);
                },
            },
            "dcfl_exportExtension": {
                name: '<div class="dcfl_menu">导出扩展</div>',
                "clear": true,
                "onclick": function() {
                    setTimeout(function() {
                        game.dcfl_openExportPage();
                    }, 100);
                },
            },
            "dcfl_openBgSelect": {
                name: '<div class="dcfl_menu">侍灵动画</div>',
                "clear": true,
                "onclick": function() {
                    setTimeout(function() {
                        game.openServantBgSelect();
                    }, 100);
                },
            },
            "dcfl_shilingtujian": {
                name: '<div class="dcfl_menu">侍灵图鉴</div>',
                "clear": true,
                "onclick": function() {
                    setTimeout(function() {
                        game.openServantTujian();
                    }, 100);
                },
            },
            "dcfl_jxjm": {
                "name": "旧版结算界面",
                "intro": "开启后重启游戏生效。收录旧版结算界面往下拖拽页面查看所有角色剩余手牌的方式（新版点击查看仍在，与新版同时存在）",
                init: false,
            },
            "dcfl_alert": {
                name: "宽屏显示弹窗",
                intro: "开启后重启游戏生效。Alert窗口变宽屏显示，方便查看、截屏报错信息",
                init: false,
            },
            "dcfl_caidanbili": {
                "name": "固定菜单比例",
                "intro": "开启后重启游戏生效。固定菜单比例，不再随界面缩放而改变",
                init: false,
            },
            "dcfl_caidancuowei": {
                "name": "修正菜单错位",
                "intro": "（慎用！）开启后重启游戏生效。修复部分机型的十周年UI的十周年样式下的菜单的光标错位、菜单按钮弹出的小对话框错位等问题",
                init: false,
            },
            "dcfl_biaojijuzhong": {
                "name": "标记弹窗居中",
                "intro": "（慎用！）开启后重启游戏生效。修复部分机型的十周年UI的十周年样式下的技能标记对话框错位问题（所有的dialog强制居中处理）",
                init: false,
            },
            "dcfl_icon": {
                name: "添加图鉴按钮",
                intro: "开启后重启游戏生效。游戏开始后屏幕右下方会有个全新图鉴的按钮，点击后会打开全新图鉴",
                init: false,
            },
            "dcfl_wujiangchuangkou": {
                "name": "横向武将窗口",
                "intro": "开启后重启游戏生效。菜单“武将”界面有所改变",
                init: false,
            },
            "dcfl_wujiangkaiqi": {
                "name": "武将开启图鉴",
                "intro": "开启后重启游戏生效。点击菜单“武将”按钮即打开本扩展的武将信息页功能",
                init: false,
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
            intro: "<font color=#4a9eff>方便查阅武将信息的扩展</font>",
            author: "小苏",
            diskURL: "",
            forumURL: "",
            version: "9.25",
        },
        files: {
            "character": [],
            "card": [],
            "skill": [],
            "audio": []
        }
    }
});