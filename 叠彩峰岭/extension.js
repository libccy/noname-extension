game.import("extension", function(lib, game, ui, get, ai, _status) {
    return {
        name: "叠彩峰岭",
        editable: false,
        content: function(config, pack) {

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

                    lib.onover.push(function(resultbool) {

                        let dialog = null;
                        for (let i = ui.dialogs.length - 1; i >= 0; i--) {
                            if (ui.dialogs[i].forcebutton && ui.dialogs[i].content) {
                                dialog = ui.dialogs[i];
                                break;
                            }
                        }
                        if (!dialog) return;
                        if (dialog._oldHandAdded) return;
                        dialog._oldHandAdded = true;

                        dialog.add(ui.create.div(".placeholder"));


                        for (let player of game.players) {
                            let hs = player.getCards("h");
                            if (hs.length) {
                                dialog.add('<div class="text center">' + get.translation(player) + "</div>");
                                dialog.addSmall(hs);
                            }
                        }

                        for (let player of game.dead) {
                            let hs = player.getCards("h");
                            if (hs.length) {
                                dialog.add('<div class="text center">' + get.translation(player) + "</div>");
                                dialog.addSmall(hs);
                            }
                        }

                        if (game.additionaldead && game.additionaldead.length) {
                            for (let player of game.additionaldead) {
                                let hs = player.getCards("h");
                                if (hs.length) {
                                    dialog.add('<div class="text center">' + get.translation(player) + "</div>");
                                    dialog.addSmall(hs);
                                }
                            }
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
                                console.log('[叠彩峰岭] 已劫持“武将”Tab点击');
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

            // ========== 换个窗口 ==========
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

                        // ---- 顶部：包切换按钮（横向滚动） ----
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
                        grid.style.cssText = 'flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:12px;align-content:flex-start;';

                        function renderGrid() {
                            grid.innerHTML = '';
                            var packData = lib.characterPack[currentPack];
                            if (!packData) return;
                            var charNames = [];
                            for (var name in packData) {
                                if (lib.character[name]) charNames.push(name);
                            }

                            charNames.sort(lib.sort.character || function(a, b) {
                                return a.localeCompare(b);
                            });

                            charNames.forEach(function(charName) {
                                var card = ui.create.div();
                                card.style.cssText = 'width:110px;height:160px;border-radius:8px;background:#222;border:1px solid #444;overflow:hidden;cursor:pointer;position:relative;transition:0.2s;';
                                card.addEventListener('mouseenter', function() {
                                    this.style.borderColor = '#8cf';
                                });
                                card.addEventListener('mouseleave', function() {
                                    this.style.borderColor = '#444';
                                });

                                var img = ui.create.div();
                                img.style.cssText = 'width:100%;height:100%;background-size:cover;background-position:center;';

                                var extClean = currentPackName.replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g, '');
                                var paths = [
                                    lib.assetURL + 'image/character/' + charName + '.jpg',
                                    lib.assetURL + 'extension/' + currentPack + '/' + charName + '.jpg',
                                    lib.assetURL + 'extension/' + extClean + '/' + charName + '.jpg'
                                ];

                                function tryLoad(index) {
                                    if (index >= paths.length) {
                                        img.style.background = '#333';
                                        return;
                                    }
                                    var test = new Image();
                                    test.onload = function() {
                                        img.style.backgroundImage = 'url(' + paths[index] + ')';
                                    };
                                    test.onerror = function() {
                                        tryLoad(index + 1);
                                    };
                                    test.src = paths[index];
                                }
                                tryLoad(0);

                                img.addEventListener('click', function(e) {
                                    e.stopPropagation();

                                    var skinName = charName;
                                    if (lib.config.skin && lib.config.skin[skinName]) {
                                        var num = lib.config.skin[skinName] + 1;

                                        var skinPath = lib.assetURL + 'image/skin/' + skinName + '/' + num + '.jpg';
                                        var test = new Image();
                                        test.onload = function() {
                                            lib.config.skin[skinName] = num;
                                            game.saveConfig('skin', lib.config.skin);
                                            img.style.backgroundImage = 'url(' + skinPath + ')';
                                        };
                                        test.src = skinPath;
                                    } else {
                                        var def = lib.assetURL + 'image/character/' + charName + '.jpg';
                                        var test = new Image();
                                        test.onload = function() {
                                            img.style.backgroundImage = 'url(' + def + ')';
                                        };
                                        test.src = def;
                                    }
                                });

                                img.addEventListener('dblclick', function(e) {
                                    e.stopPropagation();
                                    var charData = lib.character[charName];
                                    var info = get.translation(charName) + '\n';
                                    if (charData) {
                                        if (charData[0]) info += '势力：' + get.translation(charData[0]) + '\n';
                                        if (charData[1]) info += '性别：' + get.translation(charData[1]) + '\n';
                                        if (charData[2]) info += '体力：' + charData[2] + '\n';
                                        if (charData[3] && charData[3].length) {
                                            info += '技能：' + charData[3].map(function(s) {
                                                return get.translation(s);
                                            }).join('、');
                                        }
                                    }
                                    alert(info);
                                });

                                card.appendChild(img);
                                var nameLabel = ui.create.div();
                                nameLabel.innerHTML = get.translation(charName);
                                nameLabel.style.cssText = 'position:absolute;bottom:4px;left:4px;right:4px;text-align:center;background:rgba(0,0,0,0.6);border-radius:3px;padding:2px;font-size:0.8em;color:#eee;';
                                card.appendChild(nameLabel);
                                grid.appendChild(card);
                            });
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
                            console.log('[叠彩峰岭] 已替换“武将”菜单');
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
                    manman: {
                        daiji: 3,
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
                    datong: {
                        daiji: 2,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 1
                    },
                    xueren: {
                        daiji: 2,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 1
                    },
                    yueer: {
                        daiji: 3,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    ale: {
                        daiji: 3,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    ahao: {
                        daiji: 4,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    lulu: {
                        daiji: 4,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    liuli: {
                        daiji: 4,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    rui: {
                        daiji: 4,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    xiaoxiao: {
                        daiji: 3,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    zhaocaitongzi: {
                        daiji: 4,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    kongquemingwang: {
                        daiji: 4,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    yueling: {
                        daiji: 3,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    axian: {
                        daiji: 4,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    kunpeng: {
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
                    kuiniu: {
                        daiji: 4,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    yuanyuan: {
                        daiji: 4,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    qiqi: {
                        daiji: 4,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    ahe: {
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
                    jiuwei: {
                        daiji: 4,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    chunzhihua: {
                        daiji: 4,
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
                    canglong: {
                        daiji: 4,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    kangkang: {
                        daiji: 4,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    niuniu: {
                        daiji: 4,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    xiongshi: {
                        daiji: 4,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    tengshe: {
                        daiji: 4,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    qilin: {
                        daiji: 4,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    diting: {
                        daiji: 4,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    minmin: {
                        daiji: 4,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    qiaoqiao: {
                        daiji: 4,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    yaya: {
                        daiji: 4,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    youyou: {
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
                        if (!window.spine) return console.error('[叠彩峰岭] spine 未定义.');
                        let canvas;
                        if (parentNode === 'offscreen') {
                            canvas = elementId;
                            this.offscreen = true;
                        } else {
                            canvas = document.createElement('canvas');
                            canvas.className = 'dcfl-animation-player';
                            if (elementId != null) canvas.id = elementId;
                            if (parentNode != null) parentNode.appendChild(canvas);
                        }
                        const glOpts = {
                            alpha: true
                        };
                        let gl = canvas.getContext('webgl2', glOpts);
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
                                get: () => this._dprAdaptive,
                                set: (v) => {
                                    if (this._dprAdaptive !== v) {
                                        this._dprAdaptive = v;
                                        this.resized = false;
                                    }
                                }
                            },
                            useMipMaps: {
                                get: () => gl ? this.gl.useMipMaps : undefined,
                                set: (v) => {
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
                                const empty = () => {};
                                for (let key in this.__proto__)
                                    if (typeof this.__proto__[key] === 'function') this.__proto__[key] = empty;
                                for (let key in this)
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
                    jiuwei: {
                        default: {
                            name: 'jiuwei',
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
                    ahe: {
                        default: {
                            name: 'ahe',
                            action: 'daiji1',
                            x: [0, 0.7],
                            y: [0, 0.48],
                            height: [0, 0.38]
                        }
                    },
                    minmin: {
                        default: {
                            name: 'minmin',
                            action: 'daiji1',
                            x: [0, 0.7],
                            y: [0, 0.28],
                            height: [0, 0.36]
                        }
                    },
                    qiaoqiao: {
                        default: {
                            name: 'qiaoqiao',
                            action: 'daiji1',
                            x: [0, 0.7],
                            y: [0, 0.28],
                            height: [0, 0.42]
                        }
                    },
                    yuanyuan: {
                        default: {
                            name: 'yuanyuan',
                            action: 'daiji1',
                            x: [0, 0.7],
                            y: [0, 0.28],
                            height: [0, 0.4]
                        }
                    },
                    qiqi: {
                        default: {
                            name: 'qiqi',
                            action: 'daiji1',
                            x: [0, 0.7],
                            y: [0, 0.28],
                            height: [0, 0.4]
                        }
                    },
                    manman: {
                        default: {
                            name: 'manman',
                            action: 'daiji1',
                            x: [0, 0.7],
                            y: [0, 0.27],
                            height: [0, 0.39]
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
                    tengshe: {
                        default: {
                            name: 'tengshe',
                            action: 'daiji1',
                            x: [0, 0.7],
                            y: [0, 0.45],
                            height: [0, 0.35]
                        }
                    },
                    xueren: {
                        default: {
                            name: 'xueren',
                            action: 'daiji1',
                            x: [0, 0.7],
                            y: [0, 0.27],
                            height: [0, 0.375]
                        }
                    },
                    yueer: {
                        default: {
                            name: 'yueer',
                            action: 'daiji1',
                            x: [0, 0.7],
                            y: [0, 0.27],
                            height: [0, 0.45]
                        }
                    },
                    ale: {
                        default: {
                            name: 'ale',
                            action: 'daiji1',
                            x: [0, 0.7],
                            y: [0, 0.27],
                            height: [0, 0.4]
                        }
                    },
                    ahao: {
                        default: {
                            name: 'ahao',
                            action: 'daiji1',
                            x: [0, 0.7],
                            y: [0, 0.3],
                            height: [0, 0.52]
                        }
                    },
                    lulu: {
                        default: {
                            name: 'lulu',
                            action: 'daiji1',
                            x: [0, 0.7],
                            y: [0, 0.3],
                            height: [0, 0.36]
                        }
                    },
                    liuli: {
                        default: {
                            name: 'liuli',
                            action: 'daiji1',
                            x: [0, 0.7],
                            y: [0, 0.52],
                            height: [0, 0.35]
                        }
                    },
                    xiongshi: {
                        default: {
                            name: 'xiongshi',
                            action: 'daiji1',
                            x: [0, 0.7],
                            y: [0, 0.28],
                            height: [0, 0.4]
                        }
                    },
                    qilin: {
                        default: {
                            name: 'qilin',
                            action: 'daiji1',
                            x: [0, 0.7],
                            y: [0, 0.28],
                            height: [0, 0.4]
                        }
                    },
                    diting: {
                        default: {
                            name: 'diting',
                            action: 'daiji1',
                            x: [0, 0.7],
                            y: [0, 0.28],
                            height: [0, 0.35]
                        }
                    },
                    rui: {
                        default: {
                            name: 'rui',
                            action: 'daiji1',
                            x: [0, 0.7],
                            y: [0, 0.27],
                            height: [0, 0.46]
                        }
                    },
                    xiaoxiao: {
                        default: {
                            name: 'xiaoxiao',
                            action: 'daiji1',
                            x: [0, 0.7],
                            y: [0, 0.27],
                            height: [0, 0.4]
                        }
                    },
                    zhaocaitongzi: {
                        default: {
                            name: 'zhaocaitongzi',
                            action: 'daiji1',
                            x: [0, 0.7],
                            y: [0, 0.28],
                            height: [0, 0.4]
                        }
                    },
                    kongquemingwang: {
                        default: {
                            name: 'kongquemingwang',
                            action: 'daiji1',
                            x: [0, 0.7],
                            y: [0, 0.43],
                            height: [0, 0.45]
                        }
                    },
                    yueling: {
                        default: {
                            name: 'yueling',
                            action: 'daiji1',
                            x: [0, 0.7],
                            y: [0, 0.25],
                            height: [0, 0.55]
                        }
                    },
                    axian: {
                        default: {
                            name: 'axian',
                            action: 'daiji1',
                            x: [0, 0.7],
                            y: [0, 0.3],
                            height: [0, 0.4]
                        }
                    },
                    chunzhihua: {
                        default: {
                            name: 'chunzhihua',
                            action: 'daiji1',
                            x: [0, 0.7],
                            y: [0, 0.25],
                            height: [0, 0.7]
                        }
                    },
                    canglong: {
                        default: {
                            name: 'canglong',
                            action: 'daiji1',
                            x: [0, 0.7],
                            y: [0, 0.48],
                            height: [0, 0.4]
                        }
                    },
                    kangkang: {
                        default: {
                            name: 'kangkang',
                            action: 'daiji1',
                            x: [0, 0.7],
                            y: [0, 0.45],
                            height: [0, 0.3]
                        }
                    },
                    datong: {
                        default: {
                            name: 'datong',
                            action: 'daiji1',
                            x: [0, 0.7],
                            y: [0, 0.27],
                            height: [0, 0.4]
                        }
                    },
                    yaya: {
                        default: {
                            name: 'yaya',
                            action: 'daiji1',
                            x: [0, 0.7],
                            y: [0, 0.28],
                            height: [0, 0.4]
                        }
                    },
                    niuniu: {
                        default: {
                            name: 'niuniu',
                            action: 'daiji1',
                            x: [0, 0.7],
                            y: [0, 0.28],
                            height: [0, 0.36]
                        }
                    },
                    youyou: {
                        default: {
                            name: 'youyou',
                            action: 'daiji1',
                            x: [0, 0.7],
                            y: [0, 0.28],
                            height: [0, 0.4]
                        }
                    },
                    kunpeng: {
                        default: {
                            name: 'kunpeng',
                            action: 'daiji1',
                            x: [0, 0.7],
                            y: [0, 0.4],
                            height: [0, 0.4]
                        }
                    },
                    kuiniu: {
                        default: {
                            name: 'kuiniu',
                            action: 'daiji1',
                            x: [0, 0.7],
                            y: [0, 0.36],
                            height: [0, 0.25]
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
                        console.log('[叠彩峰岭] 已有背景正在加载，稍后重试');
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
                    if (val && val !== 'off') {
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
                if (initVal !== 'off') {
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
                    var bg = bgAnim;
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
                const bgEnabled = config.dcfl_dynamicBackground && config.dcfl_dynamicBackground !== 'off';
                if (bgEnabled) {
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
                            if (bg && bg.bgAnim && bg.bgAnim.current) {
                                if (bg.bgAnim.current.name === "skin_xiaosha_default") {
                                    bg.playAction(bg.bgAnim.current, 'shengli');
                                    event.finish();
                                }
                                //bg.playAction(bg.bgAnim.current, 'gongji1');
                                var count = bg.getActionCount(name, 'gongji');
                                if (count <= 0) return;
                                var num = Math.floor(Math.random() * count) + 1;
                                bg.playAction(bg.bgAnim.current, 'gongji' + num);
                            }
                            var assetName = bg ? bg.getCurrentAssetName() : null;
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
                }

                console.log('[叠彩峰岭] 动态背景已加载（独立完整模块），当前配置:', config.dcfl_dynamicBackground);
            })();

            // ========== 侍灵背景选择弹窗（头像网格选择侍灵动画） ==========
            game.openServantBgSelect = function() {
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

                    if (storageKey === 'off') {
                        iconDiv.classList.add('dcfl_bg_select_off');
                        var textSpan = document.createElement('span');
                        textSpan.textContent = '关闭';
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
                    jiuwei: {
                        default: {
                            name: 'jiuwei',
                            action: 'daiji1',
                            x: [0, 0.5],
                            y: [0, 0.7],
                            height: [0, 0.7]
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
                    ahe: {
                        default: {
                            name: 'ahe',
                            action: 'daiji1',
                            x: [0, 0.5],
                            y: [0, 0.95],
                            height: [0, 0.8]
                        }
                    },
                    minmin: {
                        default: {
                            name: 'minmin',
                            action: 'daiji1',
                            x: [0, 0.5],
                            y: [0, 0.55],
                            height: [0, 0.7]
                        }
                    },
                    qiaoqiao: {
                        default: {
                            name: 'qiaoqiao',
                            action: 'daiji1',
                            x: [0, 0.5],
                            y: [0, 0.55],
                            height: [0, 0.8]
                        }
                    },
                    yuanyuan: {
                        default: {
                            name: 'yuanyuan',
                            action: 'daiji1',
                            x: [0, 0.5],
                            y: [0, 0.55],
                            height: [0, 0.8]
                        }
                    },
                    qiqi: {
                        default: {
                            name: 'qiqi',
                            action: 'daiji1',
                            x: [0, 0.5],
                            y: [0, 0.55],
                            height: [0, 0.7]
                        }
                    },
                    manman: {
                        default: {
                            name: 'manman',
                            action: 'daiji1',
                            x: [0, 0.5],
                            y: [0, 0.55],
                            height: [0, 0.8]
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
                    tengshe: {
                        default: {
                            name: 'tengshe',
                            action: 'daiji1',
                            x: [0, 0.5],
                            y: [0, 0.9],
                            height: [0, 0.8]
                        }
                    },
                    xueren: {
                        default: {
                            name: 'xueren',
                            action: 'daiji1',
                            x: [0, 0.5],
                            y: [0, 0.6],
                            height: [0, 0.7]
                        }
                    },
                    yueer: {
                        default: {
                            name: 'yueer',
                            action: 'daiji1',
                            x: [0, 0.5],
                            y: [0, 0.6],
                            height: [0, 0.8]
                        }
                    },
                    ale: {
                        default: {
                            name: 'ale',
                            action: 'daiji1',
                            x: [0, 0.5],
                            y: [0, 0.6],
                            height: [0, 0.7]
                        }
                    },
                    ahao: {
                        default: {
                            name: 'ahao',
                            action: 'daiji1',
                            x: [0, 0.5],
                            y: [0, 0.6],
                            height: [0, 1]
                        }
                    },
                    lulu: {
                        default: {
                            name: 'lulu',
                            action: 'daiji1',
                            x: [0, 0.5],
                            y: [0, 0.7],
                            height: [0, 0.7]
                        }
                    },
                    liuli: {
                        default: {
                            name: 'liuli',
                            action: 'daiji1',
                            x: [0, 0.5],
                            y: [0, 1.15],
                            height: [0, 0.7]
                        }
                    },
                    xiongshi: {
                        default: {
                            name: 'xiongshi',
                            action: 'daiji1',
                            x: [0, 0.5],
                            y: [0, 0.6],
                            height: [0, 0.7]
                        }
                    },
                    qilin: {
                        default: {
                            name: 'qilin',
                            action: 'daiji1',
                            x: [0, 0.5],
                            y: [0, 0.7],
                            height: [0, 0.7]
                        }
                    },
                    diting: {
                        default: {
                            name: 'diting',
                            action: 'daiji1',
                            x: [0, 0.5],
                            y: [0, 0.7],
                            height: [0, 0.6]
                        }
                    },
                    rui: {
                        default: {
                            name: 'rui',
                            action: 'daiji1',
                            x: [0, 0.5],
                            y: [0, 0.65],
                            height: [0, 0.8]
                        }
                    },
                    xiaoxiao: {
                        default: {
                            name: 'xiaoxiao',
                            action: 'daiji1',
                            x: [0, 0.5],
                            y: [0, 0.7],
                            height: [0, 0.7]
                        }
                    },
                    zhaocaitongzi: {
                        default: {
                            name: 'zhaocaitongzi',
                            action: 'daiji1',
                            x: [0, 0.5],
                            y: [0, 0.65],
                            height: [0, 0.6]
                        }
                    },
                    kongquemingwang: {
                        default: {
                            name: 'kongquemingwang',
                            action: 'daiji1',
                            x: [0, 0.5],
                            y: [0, 0.85],
                            height: [0, 0.8]
                        }
                    },
                    yueling: {
                        default: {
                            name: 'yueling',
                            action: 'daiji1',
                            x: [0, 0.5],
                            y: [0, 0.55],
                            height: [0, 0.8]
                        }
                    },
                    axian: {
                        default: {
                            name: 'axian',
                            action: 'daiji1',
                            x: [0, 0.5],
                            y: [0, 0.6],
                            height: [0, 0.8]
                        }
                    },
                    chunzhihua: {
                        default: {
                            name: 'chunzhihua',
                            action: 'daiji1',
                            x: [0, 0.6],
                            y: [0, 0.5],
                            height: [0, 1.2]
                        }
                    },
                    canglong: {
                        default: {
                            name: 'canglong',
                            action: 'daiji1',
                            x: [0, 0.5],
                            y: [0, 0.95],
                            height: [0, 0.8]
                        }
                    },
                    kangkang: {
                        default: {
                            name: 'kangkang',
                            action: 'daiji1',
                            x: [0, 0.5],
                            y: [0, 0.9],
                            height: [0, 0.6]
                        }
                    },
                    datong: {
                        default: {
                            name: 'datong',
                            action: 'daiji1',
                            x: [0, 0.5],
                            y: [0, 0.5],
                            height: [0, 0.7]
                        }
                    },
                    yaya: {
                        default: {
                            name: 'yaya',
                            action: 'daiji1',
                            x: [0, 0.5],
                            y: [0, 0.55],
                            height: [0, 0.65]
                        }
                    },
                    niuniu: {
                        default: {
                            name: 'niuniu',
                            action: 'daiji1',
                            x: [0, 0.5],
                            y: [0, 0.6],
                            height: [0, 0.7]
                        }
                    },
                    youyou: {
                        default: {
                            name: 'youyou',
                            action: 'daiji1',
                            x: [0, 0.5],
                            y: [0, 0.55],
                            height: [0, 0.7]
                        }
                    },
                    kunpeng: {
                        default: {
                            name: 'kunpeng',
                            action: 'daiji1',
                            x: [0, 0.5],
                            y: [0, 0.9],
                            height: [0, 0.8]
                        }
                    },
                    kuiniu: {
                        default: {
                            name: 'kuiniu',
                            action: 'daiji1',
                            x: [0, 0.5],
                            y: [0, 0.7],
                            height: [0, 0.6]
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
                    manman: {
                        daiji: 3,
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
                    datong: {
                        daiji: 2,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 1
                    },
                    xueren: {
                        daiji: 2,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 1
                    },
                    yueer: {
                        daiji: 3,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    ale: {
                        daiji: 3,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    ahao: {
                        daiji: 4,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    lulu: {
                        daiji: 4,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    liuli: {
                        daiji: 4,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    rui: {
                        daiji: 4,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    xiaoxiao: {
                        daiji: 3,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    zhaocaitongzi: {
                        daiji: 4,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    kongquemingwang: {
                        daiji: 4,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    yueling: {
                        daiji: 3,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    axian: {
                        daiji: 4,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    kunpeng: {
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
                    kuiniu: {
                        daiji: 4,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    yuanyuan: {
                        daiji: 4,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    qiqi: {
                        daiji: 4,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    ahe: {
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
                    jiuwei: {
                        daiji: 4,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    chunzhihua: {
                        daiji: 4,
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
                    canglong: {
                        daiji: 4,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    kangkang: {
                        daiji: 4,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    niuniu: {
                        daiji: 4,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    xiongshi: {
                        daiji: 4,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    tengshe: {
                        daiji: 4,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    qilin: {
                        daiji: 4,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    diting: {
                        daiji: 4,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    minmin: {
                        daiji: 4,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    qiaoqiao: {
                        daiji: 4,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    yaya: {
                        daiji: 4,
                        gongji: 2,
                        jinnang: 1,
                        shouji: 2
                    },
                    youyou: {
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
                        var params = {
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
                codeContainer.textContent = fullCode;
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
                /*
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
                */
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
        },
        precontent: function() {
            lib.init.css(lib.assetURL + 'extension/叠彩峰岭', 'extension');
            Reflect.deleteProperty(lib.extensionMenu['extension_叠彩峰岭'], 'edit');
            delete lib.extensionMenu.extension_叠彩峰岭.delete;

            if (typeof window.spine === 'undefined') {
                try {
                    const spineCode = lib.init.reqSync(`local:${lib.assetURL}extension/叠彩峰岭/spine.js`);
                    eval(spineCode);
                    console.log('[叠彩峰岭] spine.js 加载成功');
                } catch (e) {
                    console.error('[叠彩峰岭] 加载 spine.js 失败:', e);
                }
            }

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
            "dcfl_search": {
                name: '<div class="dcfl_menu">查找武将</div>',
                "clear": true,
                "onclick": function() {
                    setTimeout(function() {
                        game.searchCharacters();
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
            /*
            "dcfl_dynamicBackground": {
                 name: '侍灵背景动画',
                 init: 'off',
                 item: {
                     off: '关闭',
                     xiaosha_default: '小杀',
                     yan_default: '侍灵-焱',
                     jinwu_default: '侍灵-金乌',
                     xuanwu_default: '侍灵-玄武',
                     jiuwei_default: '侍灵-九尾',
                     zhaocaitongzi_default: '招财童子',
                     minmin_default: '侍灵-敏敏',
                     qiaoqiao_default: '侍灵-乔乔',
                     baize_default: '侍灵-白泽',
                     ahe_default: '侍灵-阿贺',
                     dundun_default: '侍灵-阿猛',
                     kongquemingwang_default: '孔雀明王',
                     yueling_default: '侍灵-月灵',
                     yuanyuan_default: '侍灵-元元',
                     qiqi_default: '侍灵-奇奇',
                     axian_default: '侍灵-阿先',
                     manman_default: '侍灵-蠻蠻',
                     datong_default: '侍灵-大桶',
                     xueren_default: '侍灵-雪人',
                     yueer_default: '侍灵-玥儿',
                     ale_default: '侍灵-阿乐',
                     ahao_default: '侍灵-阿豪',
                     lulu_default: '侍灵-鲁鲁',
                     liuli_default: '侍灵-琉璃',
                     rui_default: '侍灵-瑞',
                     xiongshi_default: '侍灵-雄狮',
                     tengshe_default: '侍灵-腾蛇',
                     qilin_default: '侍灵-麒麟',
                     diting_default: '侍灵-谛听',
                     chunzhihua_default: '春之花',
                     xiaoxiao_default: '侍灵-枭枭',
                     canglong_default: '侍灵-苍龙',
                     kangkang_default: '侍灵-皮皮',
                     niuniu_default: '侍灵-牛牛',
                     yaya_default: '侍灵-鸭鸭',
                     youyou_default: '侍灵-佑佑',
                     kuiniu_default: '侍灵-夔牛',
                     kunpeng_default: '侍灵-鲲鹏',
                 },
                 update: function() {
                     if (window._dcfl_bg_update) window._dcfl_bg_update();
                 }
             },
             */
            "dcfl_jxjm": {
                "name": "旧版结算界面",
                "intro": "开启后重启游戏生效。收录旧版结算界面往下拖拽页面查看所有角色剩余手牌的方式（新版点击查看仍在，与新版同时存在）",
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
            "dcfl_wujiangkaiqi": {
                "name": "武将开启图鉴",
                "intro": "开启后重启游戏生效。点击菜单“武将”按钮即打开本扩展的武将信息页功能",
                init: false,
            },
            "dcfl_wujiangchuangkou": {
                "name": "横向武将窗口",
                "intro": "开启后重启游戏生效。菜单“武将”界面有所改变",
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
            version: "9.9",
        },
        files: {
            "character": [],
            "card": [],
            "skill": [],
            "audio": []
        }
    }
});