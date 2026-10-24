import {
    lib,
    game,
    ui,
    get,
    ai,
    _status
} from "noname";
export const type = "extension";

const SUITS = ["spade", "heart", "club", "diamond"];
const SUIT_ORDER = {
    spade: 0,
    heart: 1,
    club: 2,
    diamond: 3
};
const SEAT_NAMES = ["南", "东", "北", "西"];
const SUIT_NAMES = {
    spade: "黑桃",
    heart: "红桃",
    club: "梅花",
    diamond: "方块"
};
const SUIT_SYMBOLS = {
    spade: "♠",
    heart: "♥",
    club: "♣",
    diamond: "♦"
};
const LEVEL_NAMES = {
    1: "A",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "10",
    11: "J",
    12: "Q",
    13: "K"
};

function numText(n) {
    if (n === 1) return "A";
    if (n === 11) return "J";
    if (n === 12) return "Q";
    if (n === 13) return "K";
    return String(n);
}

function getRulesText() {
    return `
<div class="tuolaji-rule-content">
    <h3 class="tuolaji-rule-title">一、基础设定与游戏目标</h3>
    <p><b>1. 游戏人数与阵营：</b>4人游戏，对家组队（南北一队、东西一队）。组队双方互相合作，目标是闲家尽可能抓取场上的分数，庄家阻止对方得分。</p>
    <p><b>2. 牌数与发牌：</b>使用四副扑克牌，共216张。系统发牌，每人发52张，剩余8张作为“底牌”。</p>
    <p><b>3. 级别与目标：</b>整场游戏从打 <b>A (1级)</b> 开始，依次升级至 <b>K (13级)</b>。先升至K级并打赢K局的队伍，获得整场游戏的最终胜利。</p>
    <p><b>4. 分牌定义：</b>全场共有400分。其中：<b>5</b> 代表 5分；<b>10</b> 和 <b>K</b> 代表 10分。</p>

    <h3 class="tuolaji-rule-title">二、名词解释与牌型定义</h3>
    <p><b>1. 主牌与副牌：</b></p>
    <ul>
        <li><b>级牌：</b>当前局所打的级别（如打3，则所有的3都是级牌）。</li>
        <li><b>主牌：</b>包括大王、小王、所有的级牌（包含主花色级牌和其他花色级牌）、以及“主花色”的所有牌。</li>
        <li><b>副牌：</b>除主牌之外的所有牌。级牌在副牌中作为普通牌算，不参与副牌拖拉机。</li>
    </ul>
    <p><b>2. 叫主与反主：</b></p>
    <ul>
        <li><b>叫主：</b>摸牌过程中，玩家可亮出手中的“级牌”确立主花色，叫主的人即为庄家（第一局）。</li>
        <li><b>反主：</b>后续玩家必须使用<b>更多张</b>同花色的级牌才能反主（如1张被2张反，2张被3张反，以此类推）。4张级牌最大。</li>
        <li><b>无人亮主：</b>摸完牌若无人叫主，则系统随机指定一种花色为本局主花色。</li>
    </ul>
    <p><b>3. 各种牌型定义：</b></p>
    <ul>
        <li><b>单张：</b>任意1张牌。</li>
        <li><b>对子：</b>同花色、同点数的2张牌。两张同样的王也是对子。</li>
        <li><b>三条：</b>同花色、同点数的3张牌。</li>
        <li><b>四条（炸弹）：</b>同花色、同点数的4张牌，属于特殊拖拉机。</li>
        <li><b>四拖二：</b>4张同点牌 + 2张同花色且点数相邻的一对牌，属于特殊拖拉机（例444455，遇级牌要跳过，例如打5时，666644或444466合法；666699不合法，视为散牌）。</li>
        <li><b>四拖四：</b>两组相邻的四条同花牌，属于特殊拖拉机（如66667777，遇级牌也跳过，例如打5时，44446666合法）。</li>
        <li><b>风车（三连拖）：</b>两组点数相邻的三条同花牌，属于特殊拖拉机（如555666）。</li>
        <li><b>拖拉机（连对/连条）：</b>同花色、点数连续的同数量牌，至少两组。如5566、55667788等。<b>注意跳级规则：</b>级牌不能参与副牌的拖拉机。例如打5时，4466（跳过5）合法。</li>
    </ul>
    <p><b>4. A的特殊连接：</b>A具有最高牌力（14），可以与K相连（如QQKKAA有效），但<b>不能与2相连。</b>。</p>

    <h3 class="tuolaji-rule-title">三、牌力大小与优先级</h3>
    <p><b>1. 主牌拖拉机顺序：</b>大王 > 小王 > 正级牌（主花色级牌）> 副级牌（其他花色级牌）> 主花色A > K > Q > J > 10 > 9 > 8 > 7 > 6 > 5 > 4 > 3 > 2（口诀：大小正副烟公闻鸟屎，九到二）。</p>
    <p><b>2. 副牌拖拉机顺序：</b>A > K > Q > J > 10 > 9 > 8 > 7 > 6 > 5 > 4 > 3 > 2（级牌参与主牌的拖拉机，在副牌连拖中要跳过）。</p>
    <p><b>3. 组合牌型优先级：</b>四拖四 > 四拖二 > 炸弹（四条） > 风车 > 三连拖 > 两连拖 > 三条 > 对子 > 单张。</p>

    <h3 class="tuolaji-rule-title">四、游戏流程与出牌规则</h3>
    <p><b>1. 定庄与下底：</b>抢到主牌的一方坐庄。庄家拿取摸牌时未摸走的8张底牌，随后任选8张扣回底牌。后续局次若连庄，由队友下底并首出；若换庄，由新庄家下底并首出。</p>
    <p><b>2. 出牌：</b>首轮由下底者先出牌，随后按逆时针轮流出牌。</p>
    <p><b>3. 跟牌：</b>首家出某花色，其他人<b>有该花色必须跟</b>。同牌型优先跟，若凑不出同牌型，则必须用该花色散牌凑齐相应张数。若该花色不足，必须先用该花色垫，剩余用其他花色补。若同花色的一张都没了，可选择其他花色任意牌形的牌垫，或可毙牌（首出的是副牌时）。</p>
    <p><b>4. 毙牌：</b>没有首家出牌的花色时，可用“主牌”毙牌。<b>毙牌硬性规则：</b>主牌的牌型结构必须完全一致。结构不符视为垫牌。</p>

    <h3 class="tuolaji-rule-title">五、甩牌机制（特殊）</h3>
    <p><b>1. 什么是甩牌：</b>首家出牌时，可将同花色的多组散牌或组合牌作为“甩牌”打出（如 ♥55566）。其他人也须以同样的牌形、花色的牌跟牌，不足则用其他牌垫。</p>
    <p><b>2. 扣牌判定：</b>其他玩家只要手中有该花色，且能凑出比甩牌中<b>任意一组</b>更大的同类型结构（如用 ♥88 抓 ♥66），就会立即触发“扣牌”。</p>
    <p><b>3. 甩牌失败惩罚：</b>被抓后，甩牌者收回甩牌中除被扣留的牌外其余那几组牌，<b>比其他跟牌者打出的牌更小的那组牌被扣留强制打出</b>。同时：庄家甩牌被抓，闲家加10分；闲家甩牌被抓，闲家扣10分，至多减至0分。</p>
    <p><b>4. 毙甩牌：</b>必须用主牌，且内部结构与甩牌完全一致，才可大过甩牌。不能用主牌去比较所甩的牌的局部组合。</p>

    <h3 class="tuolaji-rule-title">六、计分与升级（160分上台制）</h3>
    <p><b>1. 夺分：</b>每轮牌最大的玩家，获得该轮桌面上所有分牌（5、10、K）。</p>
    <p><b>2. 抠底：</b>如果最后一轮是<b>闲家</b>赢，底牌中的分数直接<b>×4</b> 计入闲家总分。若庄家赢则不计入。</p>
    <p><b>3. 升级判定（每80分升一级制）：</b></p>
    <ul>
        <li><b>闲家得分 &lt; 160分：</b>得 0分（大光），庄家连升 3 级；得 1~79分（小光），庄家升 2 级；得 80~159分，庄家升 1 级。</li>
        <li><b>闲家得分 ≥ 160分：</b>得 160~239分，换庄均不升级；得 240~319分，换庄且闲家升 1 级；> 320 分换庄且升 2 级；400分换庄且升3级。</li>
    </ul>
</div>
`;
}

function showTuolajiRules() {
    if (document.getElementById("tuolajiRulesPage")) return;

    const page = document.createElement("div");
    page.id = "tuolajiRulesPage";
    document.body.appendChild(page);

    const title = document.createElement("div");
    title.id = "tuolajiRulesPage_title";
    title.innerHTML = "游戏规则";
    page.appendChild(title);

    const text = document.createElement("div");
    text.id = "tuolajiRulesPage_text";
    text.innerHTML = getRulesText();
    page.appendChild(text);

    const close = document.createElement("div");
    close.id = "tuolajiRulesPage_closeButton";
    close.innerHTML = "×";
    close.addEventListener("click", () => page.remove());
    page.appendChild(close);
}

function showHistoryPage() {
    if (document.getElementById("tljHistoryPage")) return;

    const overlay = document.createElement("div");
    overlay.id = "tljHistoryPage";
    overlay.style.cssText = "position: fixed !important; top: 0 !important; left: 0 !important; width: 100% !important; height: 100% !important; background: rgba(0,0,0,0.7) !important; z-index: 10000 !important; display: flex !important; justify-content: center !important; align-items: center !important;";
    document.body.appendChild(overlay);

    const page = document.createElement("div");
    page.style.cssText = "width: 75% !important; height: 80% !important; background-color: #1a1a1a !important; border-radius: 8px !important; box-shadow: 0 0 20px rgba(0, 0, 0, 0.9) !important; border: 1px solid #555 !important; display: flex !important; flex-direction: column !important; overflow: hidden !important; position: relative !important;";
    overlay.appendChild(page);

    const header = document.createElement("div");
    header.style.cssText = "width: 100% !important; height: 50px !important; background: linear-gradient(to right, rgba(120, 88, 75, 1), rgba(60, 60, 60, 1)) !important; border-bottom: 1px solid #444 !important; flex-shrink: 0 !important; position: relative !important;";
    page.appendChild(header);

    const title = document.createElement("div");
    title.style.cssText = "width: 100% !important; height: 50px !important; line-height: 50px !important; text-align: center !important; font-family: lishu, xinwei !important; font-size: 22px !important; font-weight: bold !important; color: #ffd700 !important; letter-spacing: 2px !important; text-shadow: 1px 1px 2px #000 !important;";
    title.innerHTML = "出牌记录";
    header.appendChild(title);

    const close = document.createElement("div");
    close.style.cssText = "position: absolute !important; top: 0 !important; right: 0 !important; width: 60px !important; height: 50px !important; line-height: 50px !important; text-align: center !important; font-size: 26px !important; color: #fff !important; cursor: pointer !important; transition: all 0.2s !important;";
    close.innerHTML = "×";
    close.onmouseover = () => close.style.background = "rgba(200,0,0,0.8)";
    close.onmouseout = () => close.style.background = "transparent";
    close.onclick = () => overlay.remove();
    header.appendChild(close);

    const text = document.createElement("div");
    text.style.cssText = "flex: 1 !important; overflow-y: auto !important; padding: 15px !important; box-sizing: border-box !important; display: block !important; position: relative !important;";
    page.appendChild(text);

    const g = game.tuolaji;
    if (!g || !g.history || g.history.length === 0) {
        const empty = document.createElement("div");
        empty.style.cssText = "color:#aaa; text-align:center; padding:40px; font-size:16px;";
        empty.innerText = "本局暂无出牌记录";
        text.appendChild(empty);
        return;
    }

    g.history.forEach(item => {
        const row = document.createElement("div");
        row.style.cssText = "display: block !important; width: 100% !important; padding: 12px 0 !important; border-bottom: 1px dashed rgba(255,255,255,0.15) !important; font-family: Microsoft YaHei, sans-serif !important; font-size: 16px !important; color: #ddd !important; overflow: hidden !important; position: relative !important;";

        // ★ 判断庄闲，分配颜色
        const isBanker = (item.seat !== undefined && (item.seat % 2 === g.bankerTeam));
        const roleColor = isBanker ? "#ffd700" : "#4a9eff"; // 庄家金色，闲家蓝色
        const roleName = isBanker ? "庄家" : "闲家";

        if (item.seat !== undefined) {
            const nameSpan = document.createElement("div");
            // ★ 拼接轮数
            const roundText = item.round ? `第${item.round}轮 ` : "";
            nameSpan.style.cssText = `display: inline-block !important; vertical-align: middle !important; width: 90px !important; color: ${roleColor} !important; font-weight: bold !important; font-size: 16px !important; margin: 0 !important; position: static !important;`;
            nameSpan.innerText = `${roundText}${SEAT_NAMES[item.seat]}：`;
            row.appendChild(nameSpan);
        }

        if (item.type === "play" && item.cardNames) {
            item.cardNames.forEach(name => {
                const card = document.createElement("div");
                // ★ 去除了边框和阴影，消除重影，仅保留原图和圆角
                card.style.cssText = "display: inline-block !important; vertical-align: middle !important; width: 42px !important; height: 58px !important; margin: 2px 4px 2px 0 !important; border-radius: 4px !important; background-color: #fff !important; background-image: url('" + lib.assetURL + "extension/拖拉机/" + name + ".png') !important; background-size: 100% 100% !important; background-position: center !important; background-repeat: no-repeat !important; position: static !important; border: none !important; box-shadow: none !important;";
                row.appendChild(card);
            });

            if (item.isLead) {
                const leadTag = document.createElement("div");
                leadTag.style.cssText = "display: inline-block !important; vertical-align: middle !important; color: #fff !important; background: #c0392b !important; padding: 2px 6px !important; border-radius: 4px !important; font-size: 12px !important; font-weight: bold !important; margin-left: 8px !important; position: static !important;";
                leadTag.innerText = "首出";
                row.appendChild(leadTag);
            }
        } else if (item.text) {
            const descSpan = document.createElement("div");
            descSpan.style.cssText = "display: inline-block !important; vertical-align: middle !important; font-size: 16px !important; margin-left: 5px !important; position: static !important;";
            // ★ 如果是缺门/得分等文字，使用庄闲对应的颜色
            descSpan.style.color = roleColor;
            descSpan.style.fontWeight = "bold";
            descSpan.innerText = item.text;
            row.appendChild(descSpan);
        }

        const clearFix = document.createElement("div");
        clearFix.style.cssText = "clear: both !important; height: 0 !important; line-height: 0 !important; font-size: 0 !important; display: block !important;";
        row.appendChild(clearFix);

        text.appendChild(row);
    });

    setTimeout(() => {
        text.scrollTop = text.scrollHeight;
    }, 20);
}

const TuoLaJi = {
    parseCard(name) {
        if (name === "jokerbig") return {
            joker: "big"
        };
        if (name === "jokersmall") return {
            joker: "small"
        };
        const suit = name.replace(/\d+$/, "");
        const number = parseInt(name.replace(/^(spade|heart|club|diamond)/, ""));
        return {
            suit,
            number
        };
    },
    isTrump(c, rank, trumpSuit) {
        if (c.joker) return true;
        if (c.number === rank) return true;
        if (trumpSuit && c.suit === trumpSuit) return true;
        return false;
    },
    orderOf(number, rank) {
        if (number === 1) return 14;
        let v = number;
        if (rank !== 1 && number > rank) v -= 1;
        return v;
    },

    // 计算用于判断连拖的绝对连续值
    tractorValue(c, rank, trumpSuit) {
        if (c.joker === "big") return 100;
        if (c.joker === "small") return 99;
        if (c.number === rank) {
            if (c.suit === trumpSuit) return 98; // 正级
            return 97; // 副级
        }
        let v = c.number === 1 ? 14 : c.number;
        if (v > rank && rank !== 1) v--; // 跳过级牌
        if (trumpSuit && c.suit === trumpSuit) {
            return 97 - (14 - v); // ★ 修改：原为 96，改为 97，与副级牌连续
        }
        return v; // 副牌
    },
    isAdjacentNum(n1, n2, rank) {
        if (n1 === n2) return false;
        const c1 = {
            number: n1,
            suit: "none"
        };
        const c2 = {
            number: n2,
            suit: "none"
        };
        const v1 = this.tractorValue(c1, rank, null);
        const v2 = this.tractorValue(c2, rank, null);
        return Math.abs(v1 - v2) === 1;
    },
    cardPower(c, rank, trumpSuit) {
        if (c.joker === "big") return 10000;
        if (c.joker === "small") return 9000;
        if (c.number === rank) return c.suit === trumpSuit ? 8000 : 7000;
        const v = this.orderOf(c.number, rank);
        if (trumpSuit && c.suit === trumpSuit) return 5000 + v;
        return v;
    },
    samePoint(a, b) {
        if (a.joker || b.joker) return a.joker === b.joker;
        return a.suit === b.suit && a.number === b.number;
    },
    getPattern(names, rank, trumpSuit) {
        const cards = names.map(n => this.parseCard(n));
        const n = cards.length;
        if (n === 0) return {
            valid: false
        };

        if (n === 1) {
            const c = cards[0];
            return {
                type: "single",
                power: this.cardPower(c, rank, trumpSuit),
                suit: c.joker ? "joker" : (this.isTrump(c, rank, trumpSuit) ? "trump" : c.suit),
                isTrump: this.isTrump(c, rank, trumpSuit),
                valid: true
            };
        }

        const allTrump = cards.every(c => this.isTrump(c, rank, trumpSuit));
        let groupSuit;
        if (allTrump) groupSuit = "trump";
        else {
            const non = cards.filter(c => !this.isTrump(c, rank, trumpSuit));
            if (non.length !== n) return {
                valid: false
            };
            groupSuit = non[0].suit;
            if (!non.every(c => c.suit === groupSuit)) return {
                valid: false
            };
        }

        if (allTrump && cards.every(c => c.joker) && n >= 4 && n % 2 === 0) {
            const bigs = cards.filter(c => c.joker === "big").length;
            const smalls = cards.filter(c => c.joker === "small").length;
            if (bigs === smalls && bigs >= 2) {
                return {
                    type: "tractor",
                    length: bigs,
                    size: 2,
                    power: 20000,
                    suit: "joker",
                    isTrump: true,
                    valid: true
                };
            }
            if ((bigs === 4 && smalls === 0) || (smalls === 4 && bigs === 0)) {
                return {
                    type: "bomb",
                    power: this.cardPower(cards[0], rank, trumpSuit),
                    suit: "joker",
                    isTrump: true,
                    valid: true
                };
            }
        }

        const groups = {};
        for (const c of cards) {
            const key = c.joker ? ("joker_" + c.joker) : (c.suit + "_" + c.number);
            (groups[key] = groups[key] || []).push(c);
        }
        const gl = Object.values(groups);
        const sizes = gl.map(g => g.length).sort((a, b) => b - a);

        if (n === 2 && sizes[0] === 2)
            return {
                type: "pair",
                power: this.cardPower(gl[0][0], rank, trumpSuit),
                suit: groupSuit,
                isTrump: allTrump,
                valid: true
            };
        if (n === 3 && sizes[0] === 3)
            return {
                type: "triple",
                power: this.cardPower(gl[0][0], rank, trumpSuit),
                suit: groupSuit,
                isTrump: allTrump,
                valid: true
            };
        if (n === 4 && sizes[0] === 4)
            return {
                type: "bomb",
                power: this.cardPower(gl[0][0], rank, trumpSuit),
                suit: groupSuit,
                isTrump: allTrump,
                valid: true
            };

        if (n === 6) {
            const four = gl.find(g => g.length === 4);
            if (four) {
                const rest = cards.filter(c => !four.includes(c));
                if (rest.length === 2 && this.samePoint(rest[0], rest[1])) {
                    if (allTrump || rest[0].suit === four[0].suit) {
                        const vFour = this.tractorValue(four[0], rank, trumpSuit);
                        const vRest = this.tractorValue(rest[0], rank, trumpSuit);
                        if (Math.abs(vFour - vRest) === 1) {
                            return {
                                type: "four_two",
                                power: this.cardPower(four[0], rank, trumpSuit),
                                suit: groupSuit,
                                isTrump: allTrump,
                                valid: true
                            };
                        }
                    }
                }
            }
        }

        if (n === 8) {
            const fours = gl.filter(g => g.length === 4);
            if (fours.length === 2) {
                if (allTrump || fours[0][0].suit === fours[1][0].suit) {
                    const v1 = this.tractorValue(fours[0][0], rank, trumpSuit);
                    const v2 = this.tractorValue(fours[1][0], rank, trumpSuit);
                    if (Math.abs(v1 - v2) === 1) {
                        let maxG = this.cardPower(fours[0][0], rank, trumpSuit) > this.cardPower(fours[1][0], rank, trumpSuit) ? fours[0] : fours[1];
                        return {
                            type: "four_four",
                            power: this.cardPower(maxG[0], rank, trumpSuit),
                            suit: groupSuit,
                            isTrump: allTrump,
                            valid: true
                        };
                    }
                }
            }
        }

        if (n >= 4 && gl.length >= 2) {
            const size = gl[0].length;
            if (size >= 2 && gl.every(g => g.length === size) && gl.every(g => g.every(c => this.samePoint(c, g[0])))) {
                const vals = gl.map(g => this.tractorValue(g[0], rank, trumpSuit)).sort((a, b) => a - b);
                let ok = true;
                for (let i = 0; i < vals.length - 1; i++) {
                    if (vals[i + 1] - vals[i] !== 1) {
                        ok = false;
                        break;
                    }
                }
                if (ok) {
                    const type = (size === 3 && gl.length === 2) ? "windmill" : "tractor";
                    let maxG = gl[0];
                    for (let i = 1; i < gl.length; i++) {
                        if (this.cardPower(gl[i][0], rank, trumpSuit) > this.cardPower(maxG[0], rank, trumpSuit)) maxG = gl[i];
                    }
                    return {
                        type,
                        length: gl.length,
                        size,
                        power: this.cardPower(maxG[0], rank, trumpSuit),
                        suit: groupSuit,
                        isTrump: allTrump,
                        valid: true
                    };
                }
            }
        }

        // ★ 新增：mixed 兜底（凑张数用，多张同花色但不成标准牌型）
        if (n >= 2) {
            return {
                type: "mixed",
                power: 0,
                suit: groupSuit,
                isTrump: allTrump,
                valid: true,
                size: n,
            };
        }

        return {
            valid: false
        };
    },
    typePriority(p) {
        switch (p.type) {
            case "mixed":
                return 0.5;
            case "single":
                return 1;
            case "pair":
                return 2;
            case "triple":
                return 3;
            case "tractor": {
                if (p.size === 2 && p.length === 2) return 4;
                if (p.size === 2 && p.length === 3) return 5;
                return 5 + p.length * 0.1;
            }
            case "windmill":
                return 6;
            case "bomb":
                return 7;
            case "four_two":
                return 8;
            case "four_four":
                return 9;
            case "throw":
                return 100;
            default:
                return 0;
        }
    },
    comparePatterns(a, b) {
        if (!a.valid || !b.valid) return 0;
        if (a.isTrump !== b.isTrump) return a.isTrump ? 1 : -1;
        const sizeA = this.getPatternSize(a);
        const sizeB = this.getPatternSize(b);
        if (sizeA !== sizeB) return 0;
        const pa = this.typePriority(a),
            pb = this.typePriority(b);
        if (pa !== pb) return pa - pb;
        return a.power - b.power;
    },
    countPoints(names) {
        let pts = 0;
        for (const n of names) {
            const c = this.parseCard(n);
            if (c.joker) continue;
            if (c.number === 5) pts += 5;
            else if (c.number === 10) pts += 10;
            else if (c.number === 13) pts += 10;
        }
        return pts;
    },
    patternMultiplier(p) {
        if (!p || !p.valid) return 1;
        switch (p.type) {
            case "single":
                return 2;
            case "pair":
                return 4;
            case "triple":
                return 8;
            case "bomb":
                return 16;
            case "four_two":
                return 16;
            case "windmill":
                return 16;
            case "tractor":
                return Math.pow(2, p.length * p.size);
            default:
                return 1;
        }
    },
    getPatternSize(p) {
        if (p.type === "single") return 1;
        if (p.type === "pair") return 2;
        if (p.type === "triple") return 3;
        if (p.type === "bomb") return 4;
        if (p.type === "four_two") return 6;
        if (p.type === "windmill") return 6;
        if (p.type === "mixed") return p.size;
        if (p.type === "throw") return p.size;
        if (p.type === "tractor") return p.length * p.size;
        return 0;
    },
    // ★ 新增：解析牌组结构，用于对比甩牌组合
    parseThrowStructure(cards, rank, trumpSuit) {
        const parsed = cards.map(c => typeof c === "string" ? this.parseCard(c) : this.parseCard(c.name));
        const numGroups = {};
        for (const p of parsed) {
            const key = p.joker ? ("joker_" + p.joker) : (p.suit + "_" + p.number);
            (numGroups[key] = numGroups[key] || []).push(p);
        }
        const groups = Object.values(numGroups);
        const struct = [];
        for (const g of groups) {
            if (g.length >= 4) struct.push({
                type: "bomb",
                count: 4
            });
            else if (g.length >= 3) struct.push({
                type: "triple",
                count: 3
            });
            else if (g.length >= 2) struct.push({
                type: "pair",
                count: 2
            });
            else struct.push({
                type: "single",
                count: 1
            });
        }
        return struct.sort((a, b) => b.count - a.count);
    },

    structureMatch(played, lead) {
        if (!played || !lead) return false;
        if (!lead.valid) return false;
        if (lead.type !== "throw" && !played.valid) return false;

        // ===== 甩牌：全主牌 + 结构完全一致 =====
        if (lead.type === "throw") {
            const playedCards = played.cards || [];
            if (playedCards.length === 0) return false;
            if (playedCards.length !== lead.size) return false;
            const allTrump = playedCards.every(c => {
                const cp = this.parseCard(typeof c === "string" ? c : c.name);
                return this.isTrump(cp, lead.rank, lead.trumpSuit);
            });
            if (!allTrump) return false;

            // ★ 核心修复：用整体单位结构比较，确保组合形式完全一致
            const leadCards = lead.cards || [];
            if (leadCards.length > 0) {
                const leadUnits = decomposeThrowIntoUnits(leadCards, lead.rank, lead.trumpSuit);
                const playedUnits = decomposeThrowIntoUnits(playedCards, lead.rank, lead.trumpSuit);
                if (leadUnits.length !== playedUnits.length) return false;
                for (let i = 0; i < leadUnits.length; i++) {
                    const pA = this.getPattern(leadUnits[i].cards.map(c => c.name), lead.rank, lead.trumpSuit);
                    const pB = this.getPattern(playedUnits[i].cards.map(c => c.name), lead.rank, lead.trumpSuit);
                    if (!pA.valid || !pB.valid) return false;
                    if (pA.type !== pB.type) return false;
                    if (this.getPatternSize(pA) !== this.getPatternSize(pB)) return false;
                    if (pA.type === "tractor" && (pA.length !== pB.length || pA.size !== pB.size)) return false;
                    if (pA.type === "windmill" && pA.length !== pB.length) return false;
                }
                return true;
            }

            // 兜底：用张数结构比较
            const leadStruct = (lead.struct || []).slice().sort((a, b) => b.count - a.count);
            const playedStruct = this.parseThrowStructure(playedCards, lead.rank, lead.trumpSuit)
                .slice().sort((a, b) => b.count - a.count);
            if (leadStruct.length !== playedStruct.length) return false;
            for (let i = 0; i < leadStruct.length; i++) {
                if (leadStruct[i].count !== playedStruct[i].count) return false;
            }
            return true;
        }

        const leadSize = this.getPatternSize(lead);
        const playedSize = this.getPatternSize(played);
        if (playedSize !== leadSize) return false;

        const SPECIAL = ["bomb", "windmill", "four_two", "four_four"];
        const leadIsSpecial = SPECIAL.includes(lead.type);
        const playedIsSpecial = SPECIAL.includes(played.type);
        const leadIsTractor = lead.type === "tractor";
        const playedIsTractor = played.type === "tractor";

        if (leadIsTractor && playedIsTractor) {
            return played.length === lead.length && played.size === lead.size;
        }
        if (leadIsSpecial && playedIsSpecial) return true;
        if (leadIsTractor && playedIsSpecial) return true;
        if (leadIsSpecial && playedIsTractor) return false;
        return played.type === lead.type;
    }

};

function describeCard(name) {
    const p = TuoLaJi.parseCard(name);
    if (p.joker === "big") return "大王";
    if (p.joker === "small") return "小王";
    return (SUIT_NAMES[p.suit] || p.suit) + numText(p.number);
}

function cardSymbol(name) {
    const p = TuoLaJi.parseCard(name);
    if (p.joker === "big") return "★大";
    if (p.joker === "small") return "☆小";
    return (SUIT_SYMBOLS[p.suit] || "?") + numText(p.number);
}

function patternText(pattern, cards) {
    const names = cards.map(c => typeof c === "string" ? c : c.name);
    const cardText = names.map(cardSymbol).join("");
    switch (pattern.type) {
        case "single":
            return `单张${describeCard(names[0])}：${cardText}`;
        case "pair":
            return `对子${describeCard(names[0])}：${cardText}`;
        case "triple":
            return `三条${describeCard(names[0])}：${cardText}`;
        case "bomb":
            return `四条${describeCard(names[0])}：${cardText}`;
        case "four_two":
            return `四拖二${describeCard(names[0])}：${cardText}`;
        case "four_four":
            return `四拖四${describeCard(names[0])}：${cardText}`;
        case "windmill":
            return `风车${describeCard(names[0])}：${cardText}`;
        case "throw":
            return `甩牌：${cardText}`;
        case "tractor": {
            const len = pattern.length === 2 ? "两连拖" : pattern.length === 3 ? "三连拖" : pattern.length + "连拖";
            return `${len}：${cardText}`;
        }
        default:
            return cardText;
    }
}

function makeComparator(rank, trumpSuit) {
    function getKey(card) {
        const p = TuoLaJi.parseCard(card.name);
        if (p.joker === "big") return [0, 0, 0];
        if (p.joker === "small") return [0, 1, 0];
        if (p.number === rank) {
            const suitPri = (trumpSuit && p.suit === trumpSuit) ? 0 : (1 + SUIT_ORDER[p.suit]);
            return [1, suitPri, 0];
        }
        const v = TuoLaJi.orderOf(p.number, rank);
        if (trumpSuit && p.suit === trumpSuit) return [2, 15 - v, 0];
        return [3, SUIT_ORDER[p.suit], 15 - v];
    }
    return (a, b) => {
        const ka = getKey(a),
            kb = getKey(b);
        for (let i = 0; i < 3; i++) {
            if (ka[i] !== kb[i]) return ka[i] - kb[i];
        }
        return 0;
    };
}

function sortHand(p, comparator) {
    const hs = p.getCards("h");
    if (!hs.length) return;
    hs.sort(comparator);
    const parent = p.node.handcards1;
    for (let i = 0; i < hs.length; i++) {
        if (hs[i].parentNode) hs[i].parentNode.removeChild(hs[i]);
    }
    for (let i = 0; i < hs.length; i++) parent.appendChild(hs[i]);
}

function getSeatOrder(startIdx, direction) {
    const order = [];
    let cur = game.players[startIdx];
    for (let i = 0; i < 4; i++) {
        order.push(game.players.indexOf(cur));
        cur = direction === "cw" ? cur.previous : cur.next;
    }
    return order;
}

function hideCardText(cardEl) {
    cardEl.classList.add("tuolaji-poker");
    const children = cardEl.children;
    for (let i = 0; i < children.length; i++) children[i].style.display = "none";
    if (!cardEl._tuolajiObserver) {
        cardEl._tuolajiObserver = new MutationObserver(() => {
            const ch = cardEl.children;
            for (let i = 0; i < ch.length; i++) ch[i].style.display = "none";
        });
        cardEl._tuolajiObserver.observe(cardEl, {
            childList: true,
            subtree: true
        });
    }
}

function isInSuit(card, leadSuit, g) {
    const p = TuoLaJi.parseCard(card.name);
    if (leadSuit === "trump") return TuoLaJi.isTrump(p, g.rank, g.trumpSuit);
    return !p.joker && p.suit === leadSuit && !TuoLaJi.isTrump(p, g.rank, g.trumpSuit);
}

// ============ 出牌展示 ============
function displayPlayedCards(play, seat, playIndex) {
    const player = game.players[seat];
    let pos = parseInt(player.dataset.position);
    if (isNaN(pos)) pos = seat;
    let baseX = 0,
        baseY = 0;
    switch (pos) {
        case 0:
            baseY = 90;
            break;
        case 1:
            baseX = 280;
            baseY = -60;
            break;
        case 2:
            baseY = -210;
            break;
        case 3:
            baseX = -280;
            baseY = -60;
            break;
        default:
            baseY = 100;
            break;
    }
    const count = play.cards.length;
    const spacing = 42; // 放大后增加间距
    const copies = [];
    for (let i = 0; i < count; i++) {
        const orig = play.cards[i];
        let d;
        try {
            d = orig.copy("thrown");
        } catch (e) {
            d = ui.create.card(null, "noclick");
            d.init([orig.suit, orig.number, orig.name]);
        }
        d.classList.remove("drawinghidden", "removing", "infohidden", "infoflip", "glows", "selected", "selectedt", "thrownhighlight");
        d.classList.add("tuolaji-played");
        hideCardText(d);
        if (lib.card[orig.name] && lib.card[orig.name].pokerCard) {
            d.style.backgroundImage = 'url("' + lib.assetURL + "extension/拖拉机/" + orig.name + '.png")';
            d.style.backgroundSize = "100% 100%";
            d.style.backgroundPosition = "center";
        }
        const dx = baseX + (i - (count - 1) / 2) * spacing;
        d.style.position = "absolute";
        d.style.left = `calc(50% + ${dx}px)`;
        d.style.top = `calc(50% + ${baseY}px)`;
        // 缩放 0.9
        d.style.transform = "translate(-50%, -50%) scale(0.9)";
        d.style.transformOrigin = "center center";
        d.style.margin = "0";
        d.style.opacity = "1";
        d.style.visibility = "visible";
        d.style.transition = "none";
        d.style.zIndex = 100 + playIndex * 30 + i;
        copies.push(d);
    }
    for (const card of play.cards) {
        if (card.parentNode) card.parentNode.removeChild(card);
    }
    player.$update();
    return new Promise((resolve) => {
        setTimeout(() => {
            for (const d of copies) {
                ui.arena.appendChild(d);
                d.show();
                ui.refresh(d);
            }
            resolve();
        }, 50);
    });
}

function clearPlayedCards() {
    const list = ui.arena.querySelectorAll(".tuolaji-played");
    for (let i = 0; i < list.length; i++) list[i].delete();
}

// ============ 分数面板 ============
function updateScoreDisplay() {
    const g = game.tuolaji;
    if (!g) return;

    if (!ui.tuolajiScore) {
        ui.tuolajiScore = document.createElement("div");
        ui.tuolajiScore.id = "tuolajiScore";
        document.body.appendChild(ui.tuolajiScore);
    }

    const t0 = g.roundScores[0] + g.roundScores[2];
    const t1 = g.roundScores[1] + g.roundScores[3];
    const bt = g.banker % 2;

    let trumpStr;
    if (g.trumpSuit) {
        const color = (g.trumpSuit === "heart" || g.trumpSuit === "diamond") ? "#ff4d4d" : "#eee";
        trumpStr = `<span class="trump-suit-symbol" style="color:${color}; font-size: 20px; vertical-align: -1px;">${SUIT_SYMBOLS[g.trumpSuit]}</span>`;
    } else {
        trumpStr = "无主";
    }

    const lvl0 = LEVEL_NAMES[Math.min(g.teamLevels[0], 13)] || g.teamLevels[0];
    const lvl1 = LEVEL_NAMES[Math.min(g.teamLevels[1], 13)] || g.teamLevels[1];

    let line1 = `东西 ${lvl1}级，南北 ${lvl0}级`;

    // ★ 修改1：组装亮主信息行，把花色图标（trumpStr）放到最后
    let lineBid = "";
    if (g.bidInfo && g.bidInfo.cardName) {
        const seatName = SEAT_NAMES[g.bidInfo.seat];
        let imgsHtml = "";
        for (let i = 0; i < g.bidInfo.count; i++) {
            imgsHtml += `<img src="${lib.assetURL}extension/拖拉机/${g.bidInfo.cardName}.png" style="width: 14px; height: 20px; vertical-align: middle; border-radius: 2px; margin-left: 3px; margin-top: -2px; box-shadow: 0 1px 2px rgba(0,0,0,0.5);">`;
        }
        lineBid = `<span class="score-text" style="margin-top: 4px;">亮主：${seatName} ${imgsHtml} ${trumpStr}</span><br>`;
    } else {
        lineBid = `<span class="score-text" style="margin-top: 4px;">亮主：无人亮主 ${trumpStr}</span><br>`;
    }

    // ★ 修改2：第三行显示庄家，并高亮下底首出的玩家
    const teamSeats = bt === 0 ? [0, 2] : [1, 3]; // 0/2是南北，1/3是东西
    const seat1 = teamSeats[0];
    const seat2 = teamSeats[1];

    let bankerNames = "";
    if (g.bottomPlayer === seat1) {
        bankerNames = `<span style="color: #ffd700; font-weight: bold;">${SEAT_NAMES[seat1]}</span> ${SEAT_NAMES[seat2]}`;
    } else {
        bankerNames = `${SEAT_NAMES[seat1]} <span style="color: #ffd700; font-weight: bold;">${SEAT_NAMES[seat2]}</span>`;
    }
    let line2 = `庄家：${bankerNames}`;

    let idleTeamName = bt === 0 ? "东西" : "南北";
    let idleScore = bt === 0 ? t1 : t0;
    let line3 = `闲家抓分(${idleTeamName})：${idleScore}分`;

    ui.tuolajiScore.innerHTML =
        `<span class="score-text">${line1}</span><br>` +
        lineBid +
        `<span class="score-text">${line2}</span><br>` +
        `<span class="score-text score-highlight">${line3}</span>`;
}

function removeScoreDisplay() {
    if (ui.tuolajiScore) {
        ui.tuolajiScore.remove();
        delete ui.tuolajiScore;
    }
}

// ============ 火眼金睛：花色提示 ============
function getSideSuits(g) {
    // 当前主花色之外的三种副牌花色（主花色全为主牌，不作为“缺门”显示）
    return SUITS.filter(s => s !== g.trumpSuit);
}

function hasSuitCards(player, suit, g) {
    const hand = player.getCards("h");
    return hand.some(c => {
        const p = TuoLaJi.parseCard(c.name);
        return !p.joker && p.suit === suit && !TuoLaJi.isTrump(p, g.rank, g.trumpSuit);
    });
}

function removeSuitHints(player) {
    if (player && player._tuolajiSuitHints) {
        player._tuolajiSuitHints.remove();
        delete player._tuolajiSuitHints;
    }
}

function createSuitHints(player) {
    if (!lib.config.extension_拖拉机_eyeOfFlame) return;
    if (!player || player === game.me) return;
    const g = game.tuolaji;
    if (!g || !g.trumpSuit) return;

    removeSuitHints(player);

    const container = document.createElement("div");
    container.className = "tuolaji-suit-hints";

    for (const s of getSideSuits(g)) {
        const icon = document.createElement("span");
        icon.className = "tuolaji-suit-hint";
        icon.dataset.suit = s;
        icon.textContent = SUIT_SYMBOLS[s];
        if (!hasSuitCards(player, s, g)) {
            icon.classList.add("tuolaji-suit-hint-hidden");
        }
        container.appendChild(icon);
    }

    const avatar = player.node && player.node.avatar;
    if (avatar && avatar.parentNode) {
        avatar.parentNode.insertBefore(container, avatar.nextSibling);
    } else {
        player.appendChild(container);
    }

    player._tuolajiSuitHints = container;
}

function updateSuitHints(player) {
    if (!lib.config.extension_拖拉机_eyeOfFlame) {
        removeSuitHints(player);
        return;
    }
    if (!player || player === game.me) return;
    const g = game.tuolaji;
    if (!g || !g.trumpSuit) return;

    const container = player._tuolajiSuitHints;
    if (!container) {
        createSuitHints(player);
        return;
    }

    for (const s of SUITS) {
        if (s === g.trumpSuit) continue;
        const icon = container.querySelector(`[data-suit="${s}"]`);
        if (!icon) continue;
        const has = hasSuitCards(player, s, g);
        icon.classList.toggle("tuolaji-suit-hint-hidden", !has);
    }
}

function initAllSuitHints() {
    if (!lib.config.extension_拖拉机_eyeOfFlame) return;
    game.players.forEach(p => createSuitHints(p));
}

function removeAllSuitHints() {
    game.players.forEach(p => removeSuitHints(p));
}

// ============ 状态 ============
// ============ 状态 ============
function initMatchState() {
    // ★ 新增：读取“从2打起”配置
    const startLevel = lib.config.extension_拖拉机_startFromTwo ? 2 : 1;

    game.tuolaji = {
        teamLevels: [startLevel, startLevel],
        banker: 0,
        bankerTeam: 0,
        matchRound: 0,
        bottomPlayer: 0,
        playedCards: [],
        _unknownCounts: null,
        lackSuit: [{
                spade: false,
                heart: false,
                club: false,
                diamond: false,
                trump: false
            },
            {
                spade: false,
                heart: false,
                club: false,
                diamond: false,
                trump: false
            },
            {
                spade: false,
                heart: false,
                club: false,
                diamond: false,
                trump: false
            },
            {
                spade: false,
                heart: false,
                club: false,
                diamond: false,
                trump: false
            }
        ]
    };
}

function initRoundState() {
    const g = game.tuolaji;
    g.rank = Math.min(g.teamLevels[g.bankerTeam], 13);
    g.trumpSuit = null;
    g.bottom = [];
    g.roundScores = [0, 0, 0, 0];
    g.trick = [];
    g.leadingSeat = g.bottomPlayer;
    g.round = 0;
    g.playedCards = [];
    g._unknownCounts = null;
    g.history = [];
    g.bidInfo = null;
    g._lastLeadWasJoker = null;

    g.lackSuit = [{
            spade: false,
            heart: false,
            club: false,
            diamond: false,
            trump: false
        },
        {
            spade: false,
            heart: false,
            club: false,
            diamond: false,
            trump: false
        },
        {
            spade: false,
            heart: false,
            club: false,
            diamond: false,
            trump: false
        },
        {
            spade: false,
            heart: false,
            club: false,
            diamond: false,
            trump: false
        }
    ];
}

// ★ 将叫主的牌背直接展示在玩家头像内部
function showBidMarkers(player, count) {
    clearBidMarkers();
    if (count <= 0) return;

    // 创建容器，直接塞进头像节点中
    const container = ui.create.div(".tuolaji-bid-container");
    player.node.avatar.appendChild(container);

    for (let i = 0; i < count; i++) {
        // 使用系统自带的 .infohidden 类，系统会自动渲染卡背
        const card = ui.create.div(".card.infohidden.tuolaji-bid-card");
        card.style.pointerEvents = "none"; // 防止影响鼠标点击头像
        container.appendChild(card);
    }
}

// ★ 清除展示
function clearBidMarkers() {
    const all = document.querySelectorAll(".tuolaji-bid-container");
    for (let i = 0; i < all.length; i++) {
        all[i].remove();
    }
}

// ============ 发牌 + 叫主 ============
async function dealAndBid() {
    const g = game.tuolaji;
    const rank = g.rank;
    const order = getSeatOrder(g.banker, "cw");

    game.players.forEach(p => {
        p._tuolajiRankCount = {
            spade: 0,
            heart: 0,
            club: 0,
            diamond: 0
        };
        p._tuolajiSuitCount = {
            spade: 0,
            heart: 0,
            club: 0,
            diamond: 0
        };
        p._tuolajiAskedRank = {
            spade: 0,
            heart: 0,
            club: 0,
            diamond: 0
        };
    });
    let current = null;

    // ★ 辅助函数：当别人叫主/反主后，检查人类玩家是否需要立即反主
    async function triggerHumanCounter(cur) {
        if (!cur) return false;
        const me = game.me;
        const meSeat = game.players.indexOf(me);

        // 统计人类玩家手里各花色的级牌数
        let maxCnt = 0,
            maxSuit = null;
        for (const s of SUITS) {
            const cnt = me.getCards("h").filter(c => c.name === s + rank).length;
            if (cnt > maxCnt) {
                maxCnt = cnt;
                maxSuit = s;
            }
        }

        // 没别人多，或者当前亮主的就是自己且没开自反，直接返回
        if (maxCnt <= cur.count) return false;
        if (cur.seat === meSeat && !lib.config.extension_拖拉机_allowSelfCounter) return false;

        const boolRes = await me.chooseBool(`【即时反主】${SEAT_NAMES[cur.seat]}方亮出了${cur.count}张${SUIT_NAMES[cur.suit]}级牌。你手里有${maxCnt}张级牌，是否反主？`).forResult();
        if (boolRes.bool) {
            while (true) {
                ui.selected.cards.length = 0;
                const cardRes = await me.chooseCard({
                    prompt: `请选择同花色的级牌进行反主（需大于 ${cur.count} 张）`,
                    selectCard: [cur.count + 1, 4],
                    complexCard: true,
                    filterCard: (c) => TuoLaJi.parseCard(c.name).number === rank,
                    ai: (c) => 1
                }).forResult();

                if (!cardRes.bool) break;

                const cards = cardRes.cards;
                const suits = new Set(cards.map(c => TuoLaJi.parseCard(c.name).suit));
                if (suits.size !== 1) {
                    game.print("必须选择同花色的级牌！");
                    continue;
                }
                if (cards.length <= cur.count) {
                    game.print(`张数不够，必须大于 ${cur.count} 张！`);
                    continue;
                }

                // 更新 current 状态
                const chosenSuit = Array.from(suits)[0];
                const chosenCnt = cards.length;

                cur.seat = meSeat;
                cur.suit = chosenSuit;
                cur.count = chosenCnt;
                game.log(me, "反主", chosenCnt, "张", SUIT_NAMES[chosenSuit], "级牌");
                showBidMarkers(me, chosenCnt);
                game.print(`你反主成功了，等待其他人是否继续反主...`);
                return true;
            }
        }
        return false;
    }

    // 1. 摸牌阶段（边摸边抢亮）
    for (let r = 0; r < 52; r++) {
        for (const seat of order) {
            const p = game.players[seat];
            const card = get.cards(1)[0];
            if (!card) continue;
            p.directgain([card]);
            const parsed = TuoLaJi.parseCard(card.name);

            if (!parsed.joker) p._tuolajiSuitCount[parsed.suit]++;

            if (!parsed.joker && parsed.number === rank) {
                const suit = parsed.suit;
                p._tuolajiRankCount[suit]++;
                const cnt = p._tuolajiRankCount[suit];
                const layer = current ? current.count : 0;

                if (cnt > layer && cnt > p._tuolajiAskedRank[suit]) {
                    let reveal = false;
                    if (p === game.me) {
                        const res = await p.chooseBool(
                            `摸到${SUIT_NAMES[suit]}${LEVEL_NAMES[rank]}（级牌，已有${cnt}张）。${
                                current ? `当前有人亮${current.count}张。` : "尚无人亮主。"
                            }是否叫主/反主？`
                        ).forResult();
                        reveal = res.bool;
                    } else {
                        const suitCnt = p._tuolajiSuitCount[suit];
                        if (cnt >= 4) reveal = true;
                        else if (cnt >= 2 && suitCnt >= 4) reveal = true;
                        else if (!current) reveal = cnt >= 1 && (suitCnt >= 5 || Math.random() < 0.4);
                        else reveal = Math.random() < 0.3;
                    }
                    p._tuolajiAskedRank[suit] = cnt;
                    if (reveal) {
                        current = {
                            seat,
                            suit,
                            count: cnt,
                            isJoker: false
                        };
                        game.log(p, "叫主", cnt, "张", SUIT_NAMES[suit], "级牌");
                        showBidMarkers(p, cnt);
                        if (p === game.me) game.print("你叫主了，等待其他人是否反主...");
                        await game.delayx(0.5);

                        // ★ 别人叫主后，立刻触发人类玩家的即时反主
                        if (p !== game.me) {
                            await triggerHumanCounter(current);
                        }
                    }
                }
            }
        }
        game.players.forEach(p => sortHand(p, makeComparator(rank, g.trumpSuit)));
        await game.delayx(0.5);
    }

    game.players.forEach(p => p.$update());
    await game.delayx(0.5);

    // ===================== 2. 集中最终询问阶段 =====================
    game.print(`【发牌结束】进入最后一次叫主/反主确认阶段...`);
    let someoneChanged = true;
    let safetyLoop = 0;
    while (someoneChanged && safetyLoop++ < 20) {
        someoneChanged = false;
        for (const seat of order) {
            const p = game.players[seat];
            const isMe = (p === game.me);

            if (isMe) {
                // 人类玩家：直接用 triggerHumanCounter 检查，满足条件就弹窗
                const countered = await triggerHumanCounter(current);
                if (countered) someoneChanged = true;
            } else {
                // AI 玩家
                let maxSuit = null,
                    maxCnt = 0;
                for (const s of SUITS) {
                    const cnt = p.getCards("h").filter(c => c.name === s + rank).length;
                    if (cnt > maxCnt) {
                        maxCnt = cnt;
                        maxSuit = s;
                    }
                }

                let targetLayer = current ? current.count : 0;
                let canReveal = false;
                if (current) {
                    if (current.seat === seat) {
                        if (lib.config.extension_拖拉机_allowSelfCounter && maxCnt > targetLayer) canReveal = true;
                    } else {
                        if (maxCnt > targetLayer) canReveal = true;
                    }
                } else {
                    if (maxCnt > 0) canReveal = true;
                }

                if (canReveal) {
                    let reveal = false;
                    if (maxCnt >= 4) reveal = true;
                    else if (maxCnt >= 2 && Math.random() < 0.6) reveal = true;
                    else if (!current) reveal = Math.random() < 0.4;
                    else reveal = Math.random() < 0.3;

                    if (reveal) {
                        current = {
                            seat,
                            suit: maxSuit,
                            count: maxCnt,
                            isJoker: false
                        };
                        game.log(p, "反主", maxCnt, "张", SUIT_NAMES[maxSuit], "级牌");
                        showBidMarkers(p, maxCnt);
                        someoneChanged = true;
                        await game.delayx(0.5);

                        // ★ AI 反主后，立刻触发人类玩家的即时反主
                        const countered = await triggerHumanCounter(current);
                        if (countered) someoneChanged = true;
                    }
                }
            }
        }
    }

    // 发底牌
    g.bottom = get.cards(8);
    game.log("底牌已入底（8张）");

    clearBidMarkers();
    if (current) {
        const p = game.players[current.seat];
        const chosenCards = p.getCards("h").filter(c => c.name === current.suit + rank).slice(0, current.count);

        g.trumpSuit = current.suit;

        // ★ 新增：记录最终叫主/反主并成功的玩家信息
        g.bidInfo = {
            seat: current.seat,
            suit: current.suit,
            count: current.count,
            cardName: current.suit + rank
        };

        if (chosenCards.length > 0) {
            const dialog = ui.create.dialog(SEAT_NAMES[current.seat] + "方定主", chosenCards);
            await new Promise(resolve => {
                const button = ui.create.control("确定", function() {
                    dialog.close();
                    button.close();

                    const cmp = makeComparator(g.rank, g.trumpSuit);
                    game.players.forEach(pp => {
                        pp.$update();
                        sortHand(pp, cmp);
                        if (pp.node && pp.node.handcards1) void pp.node.handcards1.offsetHeight;
                    });
                    try {
                        if (typeof ui.refresh === 'function') ui.refresh();
                    } catch (e) {}
                    resolve();
                });
            });
        }

        game.log("主花色：", SUIT_NAMES[g.trumpSuit]);

        if (g.matchRound === 1) {
            g.banker = current.seat;
            g.bankerTeam = g.banker % 2;
            g.bottomPlayer = g.banker;
            game.log(`第一局由抢主者 ${SEAT_NAMES[g.banker]} 坐庄并先出`);
        }
    } else {
        const randomSuit = SUITS[Math.floor(Math.random() * SUITS.length)];
        g.trumpSuit = randomSuit;
        g.bidInfo = null;
        game.log("无人亮主，系统随机指定主花色为：", SUIT_NAMES[randomSuit]);
        game.print(`【定主】无人亮主，系统随机指定主花色为：${SUIT_NAMES[randomSuit]}`);
        if (g.matchRound === 1) {
            if (!g.bottom || g.bottom.length === 0) {
                game.print("牌堆异常，重开");
                return;
            }
            const first = g.bottom[0];
            const p = TuoLaJi.parseCard(first.name);
            const num = p.joker ? 53 : (p.number === 1 ? 0 : p.number);
            g.banker = num % 4;
            g.bankerTeam = g.banker % 2;
            g.bottomPlayer = g.banker;
            game.log(`第一局无人亮主，由底牌翻牌定庄：${SEAT_NAMES[g.banker]}`);
        }
    }
    g.bankerTeam = g.banker % 2;
    game.log("庄家：", game.players[g.banker], "（" + (g.bankerTeam === 0 ? "南北队" : "东西队") + "）");

    const cmp = makeComparator(g.rank, g.trumpSuit);
    game.players.forEach(p => {
        p.$update();
        sortHand(p, cmp);
    });
    await game.delayx(0.8);
}

async function bankerTakeBottom(banker) {
    const g = game.tuolaji;
    const cmp = makeComparator(g.rank, g.trumpSuit);
    banker.directgain(g.bottom);
    sortHand(banker, cmp);
    game.print(`【取底】${SEAT_NAMES[g.bottomPlayer]}方取得底牌8张，需扣回8张`);
    game.log(banker, "取得底牌8张，需扣回8张");

    if (banker === game.me) {
        const res = await banker.chooseCard({
            prompt: "选择8张牌扣回底牌",
            selectCard: 8,
            filterCard: () => true
        }).forResult();
        if (res.bool && res.cards.length === 8) {
            g.bottom = res.cards;
            banker.lose(res.cards, ui.special);
        } else {
            // 如果玩家取消，用 AI 的智能扣底逻辑
            g.bottom = autoPickBottom(banker, g);
            banker.lose(g.bottom, ui.special);
        }
    } else {
        g.bottom = autoPickBottom(banker, g);
        banker.lose(g.bottom, ui.special);
    }
    sortHand(banker, cmp);
    game.print(`【扣底】${SEAT_NAMES[g.bottomPlayer]}方扣回8张底牌`);
    game.log(banker, "扣回8张底牌");
    await game.delayx(0.5);
}

// ★ 优化：AI 智能选底牌
// - 硬保护：A（非A级）/ K（A级）/ 拖拉机组成 / 三条 / 四条
// - 软保护：分牌（5/10/K），主牌强度足够才可放
// - 无保护：独立单张 / 不参与连拖的小对子
function autoPickBottom(banker, g) {
    const hand = banker.getCards("h").slice();
    const rank = g.rank,
        trumpSuit = g.trumpSuit;
    const isPlayingA = (rank === 1);

    // 1. 主/副牌分类
    const sideSuits = {
        spade: [],
        heart: [],
        club: [],
        diamond: []
    };
    const trumpCards = [];
    for (const c of hand) {
        const p = TuoLaJi.parseCard(c.name);
        if (TuoLaJi.isTrump(p, rank, trumpSuit)) trumpCards.push(c);
        else sideSuits[p.suit].push(c);
    }

    // 2. 主牌强度评估 → 是否允许扣分牌
    const trumpStr = evaluateTrumpStrength(trumpCards, rank, trumpSuit);
    const allowPointDiscard = trumpStr >= 22;

    // 3. 分析每个副牌花色，给每个组标保护等级
    // level 0 = 无保护（单张散牌、独立小对子）
    // level 1 = 软保护（分牌，主牌强时可拆）
    // level 2 = 硬保护（拖拉机组成、三条、四条、A/K、主牌弱时的分牌）
    const suitAnalysis = {};
    for (const s of SUITS) {
        const cards = sideSuits[s];
        if (!cards || cards.length === 0) continue;
        const gl = buildValueGroups(cards, rank, trumpSuit).sort((a, b) => a.val - b.val);
        const groups = gl.map(grp => {
            const num = grp.p.number;
            // 是否参与连拖 / 本身是三条四条
            let isCombo = grp.cards.length >= 3;
            if (!isCombo && grp.cards.length === 2) {
                for (const other of gl) {
                    if (other === grp) continue;
                    if (Math.abs(other.val - grp.val) !== 1) continue;
                    if (other.cards.length >= 2) {
                        isCombo = true;
                        break;
                    }
                }
            }
            const isTopCard = isPlayingA ? (num === 13) : (num === 1);
            const isPoint = (num === 5 || num === 10 || num === 13);
            let level = 0;
            if (isCombo || isTopCard) level = 2;
            else if (isPoint && !allowPointDiscard) level = 2;
            else if (isPoint) level = 1;
            return {
                grp,
                level
            };
        });
        suitAnalysis[s] = {
            groups,
            totalCards: cards.length
        };
    }

    // 4. 花色顺序：张数少的优先（散牌更易凑）
    const suitOrder = SUITS.filter(s => suitAnalysis[s])
        .sort((a, b) => suitAnalysis[a].totalCards - suitAnalysis[b].totalCards);

    // 5. 候选收集：按 level 上限筛选，再按"组小 / 花色少 / 牌力小"排序
    function collectCandidates(maxLevel) {
        const list = [];
        for (const s of suitOrder) {
            const info = suitAnalysis[s];
            for (const gx of info.groups) {
                if (gx.level > maxLevel) continue;
                for (const c of gx.grp.cards) {
                    const p = TuoLaJi.parseCard(c.name);
                    list.push({
                        card: c,
                        level: gx.level,
                        groupSize: gx.grp.cards.length,
                        suitSize: info.totalCards,
                        power: TuoLaJi.orderOf(p.number, rank)
                    });
                }
            }
        }
        list.sort((a, b) => {
            if (a.level !== b.level) return a.level - b.level;
            if (a.groupSize !== b.groupSize) return a.groupSize - b.groupSize;
            if (a.suitSize !== b.suitSize) return a.suitSize - b.suitSize;
            return a.power - b.power;
        });
        return list;
    }

    const picked = [];
    const usedIds = new Set();
    const pickFrom = (list, count) => {
        for (const item of list) {
            if (count <= 0) break;
            if (usedIds.has(item.card.cardid)) continue;
            picked.push(item.card);
            usedIds.add(item.card.cardid);
            count--;
        }
    };

    // 6. 第一轮：只拿无保护散牌
    pickFrom(collectCandidates(0), 8 - picked.length);

    // 7. 第二轮：主牌强时，可拿分牌
    if (picked.length < 8 && allowPointDiscard) {
        pickFrom(collectCandidates(1), 8 - picked.length);
    }

    // 8. 第三轮：硬保护也放宽（拆拖拉机/大牌，极端才走到）
    if (picked.length < 8) {
        pickFrom(collectCandidates(2), 8 - picked.length);
    }

    // 9. 第四轮：副牌实在不够，从最小散主牌补
    if (picked.length < 8) {
        const tgl = buildValueGroups(trumpCards, rank, trumpSuit);
        const trumpList = [];
        for (const grp of tgl) {
            const p = grp.p;
            for (const c of grp.cards) {
                trumpList.push({
                    card: c,
                    groupSize: grp.cards.length,
                    isJoker: !!p.joker,
                    isRank: p.number === rank,
                    power: TuoLaJi.cardPower(p, rank, trumpSuit)
                });
            }
        }
        trumpList.sort((a, b) => {
            if (a.groupSize !== b.groupSize) return a.groupSize - b.groupSize;
            if (a.isRank !== b.isRank) return a.isRank ? 1 : -1;
            if (a.isJoker !== b.isJoker) return a.isJoker ? 1 : -1;
            return a.power - b.power;
        });
        pickFrom(trumpList, 8 - picked.length);
    }

    // 10. 最后兜底
    if (picked.length < 8) {
        for (const c of hand) {
            if (picked.length >= 8) break;
            if (usedIds.has(c.cardid)) continue;
            picked.push(c);
            usedIds.add(c.cardid);
        }
    }

    return picked.slice(0, 8);
}

// ★ 新增：按"花色_点数"或"王"分组，并用 tractorValue 作为排序/连续性依据
// 主牌域内：大王/小王/正级/副级/主花色A/K... 值天然连续；不同花色不会合并
function buildValueGroups(cards, rank, trumpSuit) {
    const map = new Map();
    for (const c of cards) {
        const p = TuoLaJi.parseCard(c.name);
        const key = p.joker ? ("joker_" + p.joker) : (p.suit + "_" + p.number);
        if (!map.has(key)) {
            map.set(key, {
                cards: [],
                val: TuoLaJi.tractorValue(p, rank, trumpSuit),
                p
            });
        }
        map.get(key).cards.push(c);
    }
    return Array.from(map.values()).sort((a, b) => a.val - b.val);
}

// ★ 新增：评估主牌强度（用于判断是否允许扣分牌下底）
// 评分：主牌数 + 王×2 + 级牌×1.5 + 对/三条/四条额外 + 连拖额外
function evaluateTrumpStrength(trumpCards, rank, trumpSuit) {
    if (!trumpCards || trumpCards.length === 0) return 0;
    let score = trumpCards.length;
    const gl = buildValueGroups(trumpCards, rank, trumpSuit);
    let jokers = 0,
        rankCards = 0,
        pairBonus = 0;
    for (const grp of gl) {
        const p = grp.p;
        if (p.joker) jokers += grp.cards.length;
        else if (p.number === rank) rankCards += grp.cards.length;
        if (grp.cards.length >= 2) pairBonus += (grp.cards.length - 1);
    }
    let tractorBonus = 0;
    const pairGroups = gl.filter(g => g.cards.length >= 2).sort((a, b) => a.val - b.val);
    for (let i = 0; i < pairGroups.length - 1; i++) {
        if (pairGroups[i + 1].val - pairGroups[i].val === 1) tractorBonus += 3;
    }
    return score + jokers * 2 + rankCards * 1.5 + pairBonus + tractorBonus;
}

// ============ 找牌型工具 ============
function findPatternInPool(pool, lead, g) {
    const wantSize = TuoLaJi.getPatternSize(lead);
    if (pool.length < wantSize) return null;

    const parsed = pool.map(c => ({
        card: c,
        p: TuoLaJi.parseCard(c.name)
    }));

    if (lead.type === "single") {
        const sorted = parsed.slice().sort((a, b) => TuoLaJi.cardPower(a.p, g.rank, g.trumpSuit) - TuoLaJi.cardPower(b.p, g.rank, g.trumpSuit));
        return [sorted[0].card];
    }

    const groups = {};
    for (const x of parsed) {
        const key = x.p.joker ? ("joker_" + x.p.joker) : (x.p.suit + "_" + x.p.number);
        (groups[key] = groups[key] || []).push(x);
    }

    if (lead.type === "pair" || lead.type === "triple" || lead.type === "bomb") {
        const n = lead.type === "pair" ? 2 : lead.type === "triple" ? 3 : 4;
        const cand = [];
        for (const k in groups) {
            if (groups[k].length >= n) cand.push(groups[k]);
        }
        if (!cand.length) return null;
        cand.sort((a, b) => TuoLaJi.cardPower(a[0].p, g.rank, g.trumpSuit) - TuoLaJi.cardPower(b[0].p, g.rank, g.trumpSuit));
        return cand[0].slice(0, n).map(x => x.card);
    }

    // ★ 修复：四拖二查找
    if (lead.type === "four_two") {
        const gl = buildValueGroups(pool, g.rank, g.trumpSuit);
        const fourGroups = gl.filter(grp => grp.cards.length >= 4);
        const pairGroups = gl.filter(grp => grp.cards.length >= 2);
        for (const four of fourGroups) {
            for (const pair of pairGroups) {
                if (four === pair) continue;
                if (Math.abs(four.val - pair.val) !== 1) continue;
                const cards = [...four.cards.slice(0, 4), ...pair.cards.slice(0, 2)];
                const p = TuoLaJi.getPattern(cards.map(c => c.name), g.rank, g.trumpSuit);
                if (p.valid && p.type === "four_two") return cards;
            }
        }
        return null;
    }

    // ★ 修复：四拖四查找
    if (lead.type === "four_four") {
        const gl = buildValueGroups(pool, g.rank, g.trumpSuit);
        const fourGroups = gl.filter(grp => grp.cards.length >= 4);
        for (let i = 0; i < fourGroups.length; i++) {
            for (let j = i + 1; j < fourGroups.length; j++) {
                if (Math.abs(fourGroups[i].val - fourGroups[j].val) !== 1) continue;
                const cards = [...fourGroups[i].cards.slice(0, 4), ...fourGroups[j].cards.slice(0, 4)];
                const p = TuoLaJi.getPattern(cards.map(c => c.name), g.rank, g.trumpSuit);
                if (p.valid && p.type === "four_four") return cards;
            }
        }
        return null;
    }

    if (lead.type === "tractor" || lead.type === "windmill") {
        const size = lead.size,
            length = lead.length;
        const validGroups = [];
        for (const k in groups) {
            if (groups[k].length >= size) {
                validGroups.push({
                    cards: groups[k],
                    val: TuoLaJi.tractorValue(groups[k][0].p, g.rank, g.trumpSuit)
                });
            }
        }
        validGroups.sort((a, b) => a.val - b.val);
        for (let i = 0; i <= validGroups.length - length; i++) {
            let ok = true;
            for (let j = 0; j < length - 1; j++) {
                if (validGroups[i + j + 1].val - validGroups[i + j].val !== 1) {
                    ok = false;
                    break;
                }
            }
            if (ok) {
                const result = [];
                for (let j = 0; j < length; j++) {
                    result.push(...validGroups[i + j].cards.slice(0, size).map(x => x.card));
                }
                return result;
            }
        }
        return null;
    }
    return null;
}

// ★ 新增：跟牌降级优先级（同型/大牌型互跟）
function getFollowPriority(leadPattern) {
    const t = leadPattern.type;
    const size = TuoLaJi.getPatternSize(leadPattern);

    if (t === "single") return [{
        type: "single"
    }];
    if (t === "pair") return [{
        type: "pair"
    }];
    if (t === "triple") return [{
        type: "triple"
    }];

    if (t === "bomb") {
        return [{
                type: "bomb"
            },
            {
                type: "tractor",
                size: 2,
                length: 2
            },
        ];
    }

    if (t === "tractor") {
        const result = [{
            type: "tractor",
            size: leadPattern.size,
            length: leadPattern.length
        }];
        if (leadPattern.size === 2) {
            if (size === 4) result.push({
                type: "bomb"
            });
            if (size === 6) {
                result.push({
                    type: "four_two"
                });
                result.push({
                    type: "windmill"
                });
            }
            if (size === 8) result.push({
                type: "four_four"
            });
        }
        return result;
    }

    if (t === "four_two") {
        return [{
                type: "four_two"
            },
            {
                type: "windmill"
            },
            {
                type: "tractor",
                size: 2,
                length: 3
            },
        ];
    }

    if (t === "windmill") {
        return [{
                type: "windmill"
            },
            {
                type: "four_two"
            },
            {
                type: "tractor",
                size: 2,
                length: 3
            },
        ];
    }

    if (t === "four_four") {
        return [{
                type: "four_four"
            },
            {
                type: "tractor",
                size: 2,
                length: 4
            },
        ];
    }

    if (t === "mixed") {
        return [{
            type: "mixed",
            size: leadPattern.size
        }];
    }

    return [];
}

// ★ 新增：分块降级（按张数结构从高到低降级）
function getBlockPatterns(leadPattern) {
    const t = leadPattern.type;

    if (t === "triple") {
        return [
            [2, 1],
            [1, 1, 1]
        ];
    }
    if (t === "bomb") {
        return [
            [2, 2],
            [2, 1, 1],
            [1, 1, 1, 1]
        ];
    }
    if (t === "four_two") {
        return [
            [4, 2],
            [4, 1, 1],
            [3, 3],
            [3, 2, 1],
            [3, 1, 1, 1],
            [2, 2, 2],
            [2, 2, 1, 1],
            [2, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1]
        ];
    }
    if (t === "windmill") {
        return [
            [3, 2, 1],
            [3, 1, 1, 1],
            [2, 2, 2],
            [2, 2, 1, 1],
            [2, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1]
        ];
    }
    if (t === "four_four") {
        return [
            [4, 4],
            [4, 3, 1],
            [4, 2, 2],
            [3, 3, 2],
            [3, 2, 2, 1],
            [2, 2, 2, 2],
            [2, 2, 2, 1, 1],
            [2, 2, 1, 1, 1, 1],
            [2, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1]
        ];
    }
    if (t === "tractor") {
        const size = TuoLaJi.getPatternSize(leadPattern);
        if (size === 4) return [
            [2, 2],
            [2, 1, 1],
            [1, 1, 1, 1]
        ];
        if (size === 6) return [
            [3, 3],
            [2, 2, 2],
            [2, 2, 1, 1],
            [1, 1, 1, 1, 1, 1]
        ];
        if (size === 8) return [
            [4, 4],
            [2, 2, 2, 2],
            [2, 2, 2, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1]
        ];
    }
    return [];
}

// ★ 新增：按分块贪心凑牌（牌力小优先）
function findBlockMatch(gl, blocks, g) {
    const rank = g.rank,
        trumpSuit = g.trumpSuit;
    const usedIds = new Set();
    const picked = [];

    for (const need of blocks) {
        let best = null;
        for (const grp of gl) {
            const grpIds = grp.cards.map(c => c.cardid);
            if (grpIds.some(id => usedIds.has(id))) continue;
            if (grp.cards.length < need) continue;
            if (!best || grp.val < best.val) best = grp;
        }

        if (best) {
            const take = best.cards.slice(0, need);
            take.forEach(c => usedIds.add(c.cardid));
            picked.push(...take);
        } else {
            const fillers = [];
            for (const grp of gl) {
                for (const c of grp.cards) {
                    if (usedIds.has(c.cardid)) continue;
                    fillers.push(c);
                }
            }
            if (fillers.length < need) return null;
            fillers.sort((a, b) =>
                TuoLaJi.cardPower(TuoLaJi.parseCard(a.name), rank, trumpSuit) -
                TuoLaJi.cardPower(TuoLaJi.parseCard(b.name), rank, trumpSuit)
            );
            const take = fillers.slice(0, need);
            take.forEach(c => usedIds.add(c.cardid));
            picked.push(...take);
        }
    }

    return picked;
}

// ★ 新增：对单个降级目标尝试匹配
function matchFollowTarget(gl, target, g, addResult) {
    const rank = g.rank,
        trumpSuit = g.trumpSuit;

    // ★ 新增：single 分支（每张牌都是候选单张）
    if (target.type === "single") {
        for (const group of gl) {
            const card = group.cards[0];
            if (!card) continue;
            const p = TuoLaJi.getPattern([card.name], rank, trumpSuit);
            if (p.valid && p.type === "single") addResult([card]);
        }
        return;
    }

    if (target.type === "pair" || target.type === "triple" || target.type === "bomb") {
        const n = target.type === "pair" ? 2 : target.type === "triple" ? 3 : 4;
        for (const group of gl) {
            if (group.cards.length >= n) {
                const cards = group.cards.slice(0, n).map(x => x.card);
                const p = TuoLaJi.getPattern(cards.map(c => c.name), rank, trumpSuit);
                if (p.valid && p.type === target.type) addResult(cards);
            }
        }
        return;
    }

    if (target.type === "tractor") {
        const size = target.size,
            length = target.length;
        const validGroups = gl.filter(gx => gx.cards.length >= size);
        validGroups.sort((a, b) => a.val - b.val);
        for (let i = 0; i <= validGroups.length - length; i++) {
            let ok = true;
            for (let j = 0; j < length - 1; j++) {
                if (validGroups[i + j + 1].val - validGroups[i + j].val !== 1) {
                    ok = false;
                    break;
                }
            }
            if (ok) {
                const cards = [];
                for (let j = 0; j < length; j++) {
                    cards.push(...validGroups[i + j].cards.slice(0, size).map(x => x.card));
                }
                const p = TuoLaJi.getPattern(cards.map(c => c.name), rank, trumpSuit);
                if (p.valid && p.type === "tractor" && p.size === size && p.length === length) {
                    addResult(cards);
                }
            }
        }
        return;
    }

    if (target.type === "windmill") {
        matchFollowTarget(gl, {
            type: "tractor",
            size: 3,
            length: 2
        }, g, addResult);
        return;
    }

    if (target.type === "four_two") {
        const fours = gl.filter(gx => gx.cards.length >= 4);
        const pairs = gl.filter(gx => gx.cards.length >= 2);
        fours.sort((a, b) => a.val - b.val);
        for (const four of fours) {
            for (const pair of pairs) {
                if (four === pair) continue;
                if (Math.abs(four.val - pair.val) === 1) {
                    const cards = [...four.cards.slice(0, 4), ...pair.cards.slice(0, 2)].map(x => x.card);
                    const p = TuoLaJi.getPattern(cards.map(c => c.name), rank, trumpSuit);
                    if (p && p.valid && p.type === "four_two") addResult(cards);
                }
            }
        }
        return;
    }

    if (target.type === "four_four") {
        const fours = gl.filter(gx => gx.cards.length >= 4);
        for (let i = 0; i < fours.length; i++) {
            for (let j = i + 1; j < fours.length; j++) {
                if (Math.abs(fours[i].val - fours[j].val) === 1) {
                    const cards = [...fours[i].cards.slice(0, 4), ...fours[j].cards.slice(0, 4)].map(x => x.card);
                    const p = TuoLaJi.getPattern(cards.map(c => c.name), rank, trumpSuit);
                    if (p && p.valid && p.type === "four_four") addResult(cards);
                }
            }
        }
        return;
    }
}

function analyzeSuitForStructure(pool, leadPattern, g) {
    const result = [];
    if (!Array.isArray(pool) || !leadPattern || !leadPattern.valid) return result;

    const parsed = pool.map(c => ({
        card: c,
        p: TuoLaJi.parseCard(c.name)
    }));
    const trumpGroups = {};
    const suitGroups = {
        spade: {},
        heart: {},
        club: {},
        diamond: {}
    };

    for (const x of parsed) {
        if (!x.p) continue;
        if (TuoLaJi.isTrump(x.p, g.rank, g.trumpSuit)) {
            const key = x.p.joker ? ("joker_" + x.p.joker) : (x.p.suit + "_" + x.p.number);
            (trumpGroups[key] = trumpGroups[key] || []).push(x);
        } else {
            const key = x.p.number;
            if (!suitGroups[x.p.suit]) continue;
            (suitGroups[x.p.suit][key] = suitGroups[x.p.suit][key] || []).push(x);
        }
    }

    const targetPools = [];
    if (leadPattern.isTrump) {
        if (Object.keys(trumpGroups).length > 0) targetPools.push(trumpGroups);
    } else {
        const sg = suitGroups[leadPattern.suit];
        if (sg && Object.keys(sg).length > 0) targetPools.push(sg);
        if ((!sg || Object.keys(sg).length === 0) && Object.keys(trumpGroups).length > 0) {
            targetPools.push(trumpGroups);
        }
    }

    const resultKeys = new Set();
    const addResult = (cards) => {
        const key = cards.map(x => x.cardid).sort().join(",");
        if (resultKeys.has(key)) return;
        resultKeys.add(key);
        result.push(cards);
    };

    for (const groups of targetPools) {
        const gl = Object.keys(groups).map(k => {
            const cards = groups[k];
            if (!Array.isArray(cards) || cards.length === 0 || !cards[0].p) return null;
            const val = TuoLaJi.tractorValue(cards[0].p, g.rank, g.trumpSuit);
            return {
                cards,
                val
            };
        }).filter(Boolean);

        // 对子 / 三条 / 四条
        if (leadPattern.type === "pair" || leadPattern.type === "triple" || leadPattern.type === "bomb") {
            const n = leadPattern.type === "pair" ? 2 : leadPattern.type === "triple" ? 3 : 4;
            for (const group of gl) {
                if (group.cards.length >= n) {
                    const cards = group.cards.slice(0, n).map(x => x.card);
                    const p = TuoLaJi.getPattern(cards.map(c => c.name), g.rank, g.trumpSuit);
                    if (p.valid && p.type === leadPattern.type) addResult(cards);
                }
            }
            continue;
        }

        // 拖拉机 / 风车
        if (leadPattern.type === "tractor" || leadPattern.type === "windmill") {
            const size = leadPattern.size;
            const length = leadPattern.length;
            const validGroups = gl.filter(g => g.cards.length >= size);
            validGroups.sort((a, b) => a.val - b.val);
            for (let i = 0; i <= validGroups.length - length; i++) {
                let ok = true;
                for (let j = 0; j < length - 1; j++) {
                    if (validGroups[i + j + 1].val - validGroups[i + j].val !== 1) {
                        ok = false;
                        break;
                    }
                }
                if (ok) {
                    const cards = [];
                    for (let j = 0; j < length; j++) {
                        cards.push(...validGroups[i + j].cards.slice(0, size).map(x => x.card));
                    }
                    const p = TuoLaJi.getPattern(cards.map(c => c.name), g.rank, g.trumpSuit);
                    if (p.valid && p.type === leadPattern.type && p.length === leadPattern.length && p.size === leadPattern.size) {
                        addResult(cards);
                    }
                }
            }
            continue;
        }

        // 四拖二 / 四拖四
        if (leadPattern.type === "four_two" || leadPattern.type === "four_four") {
            const fours = gl.filter(g => g.cards.length >= 4);
            fours.sort((a, b) => a.val - b.val);
            if (leadPattern.type === "four_two") {
                const twos = gl.filter(g => g.cards.length >= 2);
                twos.sort((a, b) => a.val - b.val);
                for (const four of fours) {
                    for (const two of twos) {
                        if (four === two) continue;
                        if (Math.abs(four.val - two.val) === 1) {
                            const cards = [...four.cards.slice(0, 4), ...two.cards.slice(0, 2)].map(x => x.card);
                            const p = TuoLaJi.getPattern(cards.map(c => c.name), g.rank, g.trumpSuit);
                            if (p && p.valid && p.type === "four_two") addResult(cards);
                        }
                    }
                }
            } else {
                for (let i = 0; i < fours.length; i++) {
                    for (let j = i + 1; j < fours.length; j++) {
                        if (Math.abs(fours[i].val - fours[j].val) === 1) {
                            const cards = [...fours[i].cards.slice(0, 4), ...fours[j].cards.slice(0, 4)].map(x => x.card);
                            const p = TuoLaJi.getPattern(cards.map(c => c.name), g.rank, g.trumpSuit);
                            if (p && p.valid && p.type === "four_four") addResult(cards);
                        }
                    }
                }
            }
        }
    }

    // ★ 首牌是对子连拖：额外加入同张数的炸弹/风车/四拖二/四拖四
    if (leadPattern.type === "tractor") {
        const wantSize = TuoLaJi.getPatternSize(leadPattern);
        const extra = findAllCombosOfSize(pool, wantSize, g);
        for (const c of extra) {
            const tp = c.pattern.type;
            if (tp === "tractor") continue; // tractor 已在上文枚举
            if (tp !== "bomb" && tp !== "windmill" && tp !== "four_two" && tp !== "four_four") continue;
            addResult(c.cards);
        }
    }

    return result;
}

// ★ 新增：分析某牌池能凑出哪些与甩牌相同结构的组合
function analyzeThrowStructure(pool, throwPattern, g) {
    const result = [];
    if (!Array.isArray(pool) || !throwPattern || throwPattern.type !== "throw") return result;

    const struct = throwPattern.struct || [];
    const totalSize = throwPattern.size;
    if (struct.length === 0 || totalSize <= 0) return result;

    // 按"花色_点数"或"王"分组
    const parsed = pool.map(c => ({
        card: c,
        p: TuoLaJi.parseCard(c.name)
    }));
    const groups = {};
    for (const x of parsed) {
        if (!x.p) continue;
        const key = x.p.joker ? ("joker_" + x.p.joker) : (x.p.suit + "_" + x.p.number);
        (groups[key] = groups[key] || []).push(x);
    }

    // 按牌力升序（小的先匹配，尽量保留大牌）
    const groupList = Object.keys(groups).map(k => ({
        key: k,
        cards: groups[k],
        count: groups[k].length,
        power: TuoLaJi.cardPower(groups[k][0].p, g.rank, g.trumpSuit)
    })).sort((a, b) => a.power - b.power);

    // 回溯搜索所有可能的结构匹配
    const tryMatch = (structIdx, usedKeys, picked) => {
        if (result.length >= 5) return;
        if (structIdx >= struct.length) {
            if (picked.length === totalSize) result.push(picked.slice());
            return;
        }
        const s = struct[structIdx];
        const remainingSize = struct.slice(structIdx + 1).reduce((sum, x) => sum + x.count, 0);

        for (const grp of groupList) {
            if (usedKeys.has(grp.key)) continue;
            if (grp.count < s.count) continue;

            const newUsed = new Set(usedKeys);
            newUsed.add(grp.key);
            const newPicked = picked.concat(grp.cards.slice(0, s.count).map(x => x.card));

            const remainingAvailable = groupList
                .filter(gx => !newUsed.has(gx.key))
                .reduce((sum, gx) => sum + gx.count, 0);
            if (remainingAvailable < remainingSize) continue;

            tryMatch(structIdx + 1, newUsed, newPicked);
        }
    };

    tryMatch(0, new Set(), []);
    return result;
}

// ★ 新增：从同花色牌中选出 size 张，尽量保留组合（用于 AI 跟牌凑张数）
function findBestCombination(cards, size, rank, trumpSuit) {
    if (size >= cards.length) return cards.slice();
    if (size <= 0) return [];
    const parsed = cards.map(c => ({
        card: c,
        p: TuoLaJi.parseCard(c.name)
    }));
    const groups = {};
    for (const x of parsed) {
        const key = x.p.joker ? ("joker_" + x.p.joker) : (x.p.suit + "_" + x.p.number);
        (groups[key] = groups[key] || []).push(x);
    }
    const strength = new Map();
    for (const key in groups) {
        const sz = groups[key].length;
        let base = sz >= 4 ? 4 : sz >= 3 ? 3 : sz >= 2 ? 2 : 0;
        for (const x of groups[key]) strength.set(x.card, base);
    }
    const sorted = parsed.slice().sort((a, b) => {
        const sa = strength.get(a.card) || 0,
            sb = strength.get(b.card) || 0;
        if (sa !== sb) return sa - sb;
        return TuoLaJi.cardPower(a.p, rank, trumpSuit) - TuoLaJi.cardPower(b.p, rank, trumpSuit);
    });
    return sorted.slice(0, size).map(x => x.card);
}
// ★ 垫牌时选牌策略：优先出孤张散牌，避免拆好牌
function pickDiscardCards(parsed, needCount, isPoint, teammateWinning, teammateLack, g) {
    if (needCount <= 0 || parsed.length === 0) return [];
    if (needCount >= parsed.length) return parsed.map(x => x.card);

    // 1. 按花色_点数分组
    const groups = {};
    for (const x of parsed) {
        const p = x.p;
        const key = p.joker ? ("joker_" + p.joker) : (p.suit + "_" + p.number);
        (groups[key] = groups[key] || []).push(x);
    }

    // 2. 计算每张牌的"保护强度"（越高越不该拆）
    const cardStrength = new Map();
    for (const key in groups) {
        const grp = groups[key];
        const size = grp.length;
        const p0 = grp[0].p;
        const isTrumpGroup = TuoLaJi.isTrump(p0, g.rank, g.trumpSuit);

        // 检查是否在拖拉机中
        let inTractor = false;
        if (!p0.joker) {
            for (const otherKey in groups) {
                if (otherKey === key) continue;
                const op = groups[otherKey][0].p;
                if (op.joker || op.suit !== p0.suit) continue;
                if (Math.abs(TuoLaJi.orderOf(op.number, g.rank) - TuoLaJi.orderOf(p0.number, g.rank)) === 1) {
                    if (groups[otherKey].length >= 2) {
                        inTractor = true;
                        break;
                    }
                }
            }
        }

        let baseStrength;
        if (inTractor && size >= 2) baseStrength = 10;
        else if (size >= 4) baseStrength = 4;
        else if (size >= 3) baseStrength = 3;
        else if (size >= 2) baseStrength = 2;
        else baseStrength = 0;

        // 主牌组合额外保护
        if (isTrumpGroup && size >= 2) baseStrength += 2;
        // 分牌组合额外保护（拆了损失分）
        if (isPoint(p0) && size >= 2) baseStrength += 1;

        for (const x of grp) {
            cardStrength.set(x.card, baseStrength);
        }
    }

    // 3. 排序：保护强度低优先 → 是否分牌 → 主/副 → 牌力
    const sorted = parsed.slice().sort((a, b) => {
        const sa = cardStrength.get(a.card) || 0;
        const sb = cardStrength.get(b.card) || 0;
        if (sa !== sb) return sa - sb;

        const pa = isPoint(a.p) ? 1 : 0;
        const pb = isPoint(b.p) ? 1 : 0;
        if (teammateWinning || teammateLack) {
            if (pa !== pb) return pb - pa; // 队友赢，先出分牌
            
            // ★ 新增：分牌优先级 10 > K > 5
            if (pa === 1 && pb === 1) {
                const getWeight = (p) => {
                    if (p.number === 10) return 3;
                    if (p.number === 13) return 2;
                    if (p.number === 5) return 1;
                    return 0;
                };
                const wa = getWeight(a.p);
                const wb = getWeight(b.p);
                if (wa !== wb) return wb - wa;
            }
        } else {
            if (pa !== pb) return pa - pb; // 自己人输，先出非分牌
        }

        // 同强度下，主牌保护优先
        const aT = TuoLaJi.isTrump(a.p, g.rank, g.trumpSuit) ? 1 : 0;
        const bT = TuoLaJi.isTrump(b.p, g.rank, g.trumpSuit) ? 1 : 0;
        if (aT !== bT) return aT - bT;

        return TuoLaJi.cardPower(a.p, g.rank, g.trumpSuit) - TuoLaJi.cardPower(b.p, g.rank, g.trumpSuit);
    });

    return sorted.slice(0, needCount).map(x => x.card);
}


// ============ AI 首家出牌 ============

function findFourFour(pool, rank, trumpSuit) {
    const gl = buildValueGroups(pool, rank, trumpSuit);
    const fourGroups = gl.filter(g => g.cards.length >= 4);
    let best = null,
        bestPower = -Infinity;
    for (let i = 0; i < fourGroups.length; i++) {
        for (let j = i + 1; j < fourGroups.length; j++) {
            if (Math.abs(fourGroups[i].val - fourGroups[j].val) !== 1) continue;
            const cards = [...fourGroups[i].cards.slice(0, 4), ...fourGroups[j].cards.slice(0, 4)];
            const pattern = TuoLaJi.getPattern(cards.map(c => c.name), rank, trumpSuit);
            if (pattern.valid && pattern.type === "four_four" && pattern.power > bestPower) {
                best = {
                    cards,
                    pattern
                };
                bestPower = pattern.power;
            }
        }
    }
    return best;
}

function findFourTwo(pool, rank, trumpSuit) {
    const gl = buildValueGroups(pool, rank, trumpSuit);
    const fourGroups = gl.filter(g => g.cards.length >= 4);
    const pairGroups = gl.filter(g => g.cards.length >= 2);
    let best = null,
        bestPower = -Infinity;
    for (const four of fourGroups) {
        for (const pair of pairGroups) {
            if (four === pair) continue;
            if (Math.abs(four.val - pair.val) !== 1) continue;
            const cards = [...four.cards.slice(0, 4), ...pair.cards.slice(0, 2)];
            const pattern = TuoLaJi.getPattern(cards.map(c => c.name), rank, trumpSuit);
            if (pattern.valid && pattern.type === "four_two" && pattern.power > bestPower) {
                best = {
                    cards,
                    pattern
                };
                bestPower = pattern.power;
            }
        }
    }
    return best;
}

//风车：
function findWindmill(pool, rank, trumpSuit) {
    const gl = buildValueGroups(pool, rank, trumpSuit);
    const tripleGroups = gl.filter(g => g.cards.length >= 3);
    let best = null,
        bestPower = -1;
    for (let i = 0; i < tripleGroups.length - 1; i++) {
        if (tripleGroups[i + 1].val - tripleGroups[i].val !== 1) continue;
        const cards = [
            ...tripleGroups[i].cards.slice(0, 3),
            ...tripleGroups[i + 1].cards.slice(0, 3)
        ];
        const pattern = TuoLaJi.getPattern(cards.map(c => c.name), rank, trumpSuit);
        if (pattern.valid && pattern.type === "windmill" && pattern.power > bestPower) {
            best = {
                cards,
                pattern
            };
            bestPower = pattern.power;
        }
    }
    return best;
}

function findBomb(pool, rank, trumpSuit) {
    const gl = buildValueGroups(pool, rank, trumpSuit);
    let best = null,
        bestPower = -Infinity;
    for (const g of gl) {
        if (g.cards.length < 4) continue;
        const cards = g.cards.slice(0, 4);
        const pattern = TuoLaJi.getPattern(cards.map(c => c.name), rank, trumpSuit);
        if (pattern.valid && pattern.type === "bomb" && pattern.power > bestPower) {
            best = {
                cards,
                pattern
            };
            bestPower = pattern.power;
        }
    }
    return best;
}

function findTractor(pool, rank, trumpSuit) {
    const candidates = [
        findFourFour(pool, rank, trumpSuit),
        findFourTwo(pool, rank, trumpSuit),
        findWindmill(pool, rank, trumpSuit),
        findLongTractor(pool, rank, trumpSuit),
        findShortTractor(pool, rank, trumpSuit)
    ].filter(Boolean);
    if (!candidates.length) return null;
    candidates.sort((a, b) => {
        const pa = TuoLaJi.typePriority(a.pattern),
            pb = TuoLaJi.typePriority(b.pattern);
        if (pa !== pb) return pb - pa;
        return b.pattern.power - a.pattern.power;
    });
    return candidates[0];
}

function findLongTractor(pool, rank, trumpSuit) {
    const gl = buildValueGroups(pool, rank, trumpSuit);
    const pairGroups = gl.filter(g => g.cards.length >= 2);
    let best = null,
        bestLen = 0,
        bestPower = -1;
    for (let i = 0; i < pairGroups.length; i++) {
        for (let len = 3; i + len <= pairGroups.length; len++) {
            let ok = true;
            for (let j = 0; j < len - 1; j++) {
                if (pairGroups[i + j + 1].val - pairGroups[i + j].val !== 1) {
                    ok = false;
                    break;
                }
            }
            if (!ok) break;
            const cards = [];
            for (let j = 0; j < len; j++) cards.push(...pairGroups[i + j].cards.slice(0, 2));
            const pattern = TuoLaJi.getPattern(cards.map(c => c.name), rank, trumpSuit);
            if (pattern.valid && pattern.type === "tractor" && pattern.size === 2) {
                if (len > bestLen || (len === bestLen && pattern.power > bestPower)) {
                    best = {
                        cards,
                        pattern
                    };
                    bestLen = len;
                    bestPower = pattern.power;
                }
            }
        }
    }
    return best;
}

function findShortTractor(pool, rank, trumpSuit) {
    const gl = buildValueGroups(pool, rank, trumpSuit);
    const pairGroups = gl.filter(g => g.cards.length >= 2);
    let best = null,
        bestPower = -1;
    for (let i = 0; i < pairGroups.length - 1; i++) {
        if (pairGroups[i + 1].val - pairGroups[i].val !== 1) continue;
        const cards = [
            ...pairGroups[i].cards.slice(0, 2),
            ...pairGroups[i + 1].cards.slice(0, 2)
        ];
        const pattern = TuoLaJi.getPattern(cards.map(c => c.name), rank, trumpSuit);
        if (pattern.valid && pattern.type === "tractor" && pattern.size === 2 && pattern.length === 2) {
            if (pattern.power > bestPower) {
                best = {
                    cards,
                    pattern
                };
                bestPower = pattern.power;
            }
        }
    }
    return best;
}

function findPair(pool, rank, trumpSuit) {
    const gl = buildValueGroups(pool, rank, trumpSuit);
    let best = null,
        bestPower = -Infinity;
    for (const g of gl) {
        if (g.cards.length < 2) continue;
        const pair = g.cards.slice(0, 2);
        const pattern = TuoLaJi.getPattern(pair.map(c => c.name), rank, trumpSuit);
        if (pattern.valid && pattern.type === "pair" && pattern.power > bestPower) {
            best = pair;
            bestPower = pattern.power;
        }
    }
    return best ? {
        cards: best,
        pattern: TuoLaJi.getPattern(best.map(c => c.name), rank, trumpSuit)
    } : null;
}

// ★ 新增：三条（用于 A/K 组合优先出）
function findTriple(pool, rank, trumpSuit) {
    const gl = buildValueGroups(pool, rank, trumpSuit);
    let best = null,
        bestPower = -Infinity;
    for (const g of gl) {
        if (g.cards.length < 3) continue;
        const triple = g.cards.slice(0, 3);
        const pattern = TuoLaJi.getPattern(triple.map(c => c.name), rank, trumpSuit);
        if (pattern.valid && pattern.type === "triple" && pattern.power > bestPower) {
            best = triple;
            bestPower = pattern.power;
        }
    }
    return best ? {
        cards: best,
        pattern: TuoLaJi.getPattern(best.map(c => c.name), rank, trumpSuit)
    } : null;
}

// ============ 跟牌阶梯用：卡片级 finder（返回 cards 数组或 null） ============
function findBombCards(pool, rank, trumpSuit) {
    const r = findBomb(pool, rank, trumpSuit);
    return r ? r.cards : null;
}

function findTripleCards(pool, rank, trumpSuit) {
    const r = findTriple(pool, rank, trumpSuit);
    return r ? r.cards : null;
}

function findPairCards(pool, rank, trumpSuit) {
    const r = findPair(pool, rank, trumpSuit);
    return r ? r.cards : null;
}

function findWindmillCards(pool, rank, trumpSuit) {
    const r = findWindmill(pool, rank, trumpSuit);
    return r ? r.cards : null;
}

function findFourTwoCards(pool, rank, trumpSuit) {
    const r = findFourTwo(pool, rank, trumpSuit);
    return r ? r.cards : null;
}

function findFourFourCards(pool, rank, trumpSuit) {
    const r = findFourFour(pool, rank, trumpSuit);
    return r ? r.cards : null;
}

function smallestSingle(pool, rank, trumpSuit) {
    if (!pool || pool.length === 0) return null;
    const sorted = pool.slice().sort((a, b) =>
        TuoLaJi.cardPower(TuoLaJi.parseCard(a.name), rank, trumpSuit) -
        TuoLaJi.cardPower(TuoLaJi.parseCard(b.name), rank, trumpSuit)
    );
    return [sorted[0]];
}

// 通用：找 size/length 的连拖（返回最小的一组，cards 数组）
function findTractorCards(pool, size, length, rank, trumpSuit) {
    const gl = buildValueGroups(pool, rank, trumpSuit);
    const valid = gl.filter(g => g.cards.length >= size);
    for (let i = 0; i <= valid.length - length; i++) {
        let ok = true;
        for (let j = 0; j < length - 1; j++) {
            if (valid[i + j + 1].val - valid[i + j].val !== 1) {
                ok = false;
                break;
            }
        }
        if (!ok) continue;
        const cards = [];
        for (let j = 0; j < length; j++) cards.push(...valid[i + j].cards.slice(0, size));
        return cards;
    }
    return null;
}

// 从 pool 中按 blocks（降序块大小）凑牌，不要求相邻。
// preferPoints=true 时尽量选含分牌的组（供"队友稳赢送分"使用）。
function matchBlocksNoAdj(pool, blocks, rank, trumpSuit, preferPoints) {
    const wantSize = blocks.reduce((a, b) => a + b, 0);
    if (!pool || pool.length < wantSize) return null;
    const gl = buildValueGroups(pool, rank, trumpSuit);
    const consumed = new Array(gl.length).fill(0);
    const picked = [];
    const isPoint = (p) => p.number === 5 || p.number === 10 || p.number === 13;

    for (const need of blocks) {
        let bestIdx = -1,
            bestKey = Infinity;
        for (let i = 0; i < gl.length; i++) {
            if (gl[i].cards.length - consumed[i] < need) continue;
            let key;
            if (preferPoints) {
                const take = gl[i].cards.slice(consumed[i], consumed[i] + need);
                const ptCount = take.filter(c => isPoint(TuoLaJi.parseCard(c.name))).length;
                key = -ptCount * 1000 + TuoLaJi.cardPower(gl[i].p, rank, trumpSuit);
            } else {
                key = TuoLaJi.cardPower(gl[i].p, rank, trumpSuit);
            }
            if (key < bestKey) {
                bestKey = key;
                bestIdx = i;
            }
        }
        if (bestIdx < 0) return null;
        picked.push(...gl[bestIdx].cards.slice(consumed[bestIdx], consumed[bestIdx] + need));
        consumed[bestIdx] += need;
    }
    return picked;
}

// 判断玩家实际打出的 cards 是否符合 blocks 结构；partialAdjacentLength > 0 时要求含该长度连拖
function matchStructureOfCards(cards, blocks, adjacent, g, partialAdjacentLength) {
    if (!cards || cards.length !== blocks.reduce((a, b) => a + b, 0)) return false;

    const groups = {};
    for (const c of cards) {
        const p = TuoLaJi.parseCard(c.name);
        const key = p.joker ? "joker_" + p.joker : p.number;
        if (!groups[key]) groups[key] = [];
        groups[key].push(c);
    }
    const groupKeys = Object.keys(groups);
    const remaining = groupKeys.map(k => groups[k].length);

    // ★ 修复：使用回溯匹配，允许将三张 4 拆成一对 4 + 一张散牌 4
    function tryMatch(blockIdx) {
        if (blockIdx >= blocks.length) return remaining.every(r => r === 0);
        const need = blocks[blockIdx];
        for (let i = 0; i < remaining.length; i++) {
            if (remaining[i] >= need) {
                remaining[i] -= need;
                if (tryMatch(blockIdx + 1)) return true;
                remaining[i] += need;
            }
        }
        return false;
    }

    if (!tryMatch(0)) return false;

    // 连拖检查
    if (adjacent) {
        const gl = buildValueGroups(cards, g.rank, g.trumpSuit);
        const sorted = gl.slice().sort((a, b) => a.val - b.val);
        for (let i = 1; i < sorted.length; i++) {
            if (sorted[i].val - sorted[i - 1].val !== 1) return false;
        }
    }

    // 部分连拖检查
    if (partialAdjacentLength && partialAdjacentLength >= 2) {
        const gl = buildValueGroups(cards, g.rank, g.trumpSuit);
        const pairGroups = gl.filter(x => x.cards.length >= 2).sort((a, b) => a.val - b.val);
        let found = false;
        for (let i = 0; i <= pairGroups.length - partialAdjacentLength; i++) {
            let ok = true;
            for (let j = 0; j < partialAdjacentLength - 1; j++) {
                if (pairGroups[i + j + 1].val - pairGroups[i + j].val !== 1) {
                    ok = false;
                    break;
                }
            }
            if (ok) {
                found = true;
                break;
            }
        }
        if (!found) return false;
    }
    return true;
}

// 为"普通 tractor 首出"的降级散牌生成块序列（大块优先）
//以下的buildFallbackBlocks函数可能已作废
function buildFallbackBlocks(wantSize) {
    const res = [];
    const seen = new Set();
    const add = (b) => {
        const k = b.join(',');
        if (!seen.has(k)) {
            seen.add(k);
            res.push(b);
        }
    };

    function partitions(rem, maxPart, prefix) {
        if (rem === 0) {
            add(prefix.slice());
            return;
        }
        for (let p = Math.min(rem, maxPart, 4); p >= 1; p--) {
            prefix.push(p);
            partitions(rem - p, p, prefix);
            prefix.pop();
        }
    }
    partitions(wantSize, 4, []);
    res.sort((a, b) => a.length - b.length);
    return res;
}

// ★ 新增：只含 2 和 1 的降级块序列（对子级降级，不含 3/4）
// wantSize=4 → [2,2], [2,1,1], [1,1,1,1]
// wantSize=6 → [2,2,2], [2,2,1,1], [2,1,1,1,1], [1×6]
// wantSize=8 → [2,2,2,2], [2,2,2,1,1], [2,2,1,1,1,1], [2,1,1,1,1,1,1], [1×8]
function buildPairLevelBlocks(wantSize) {
    const res = [];
    const twoCount = Math.floor(wantSize / 2);
    for (let t = twoCount; t >= 0; t--) {
        const ones = wantSize - t * 2;
        const blocks = [];
        for (let i = 0; i < t; i++) blocks.push(2);
        for (let i = 0; i < ones; i++) blocks.push(1);
        if (blocks.length > 0) res.push(blocks);
    }
    return res;
}

// ★ 新增：找"连拖 + 散块"的所有组合（散块选最小的组补足）
// 用于 tractor 首出降级时优先保留最长连拖
function findAllTractorPlusFillers(pool, size, length, fillerBlocks, rank, trumpSuit) {
    const results = [];
    const gl = buildValueGroups(pool, rank, trumpSuit);
    const mainGroups = gl.filter(g => g.cards.length >= size);
    const wantSize = length * size + fillerBlocks.reduce((a, b) => a + b, 0);
    const seen = new Set();

    for (let i = 0; i <= mainGroups.length - length; i++) {
        let ok = true;
        for (let j = 0; j < length - 1; j++) {
            if (mainGroups[i + j + 1].val - mainGroups[i + j].val !== 1) {
                ok = false;
                break;
            }
        }
        if (!ok) continue;

        const usedGroups = new Set();
        for (let j = 0; j < length; j++) usedGroups.add(mainGroups[i + j]);
        const mainCards = [];
        for (let j = 0; j < length; j++) mainCards.push(...mainGroups[i + j].cards.slice(0, size));

        const remaining = gl.filter(g => !usedGroups.has(g)).map(g => ({
            groups: g,
            used: 0
        }));
        const fillerCards = [];
        let feasible = true;
        for (const need of fillerBlocks) {
            let best = null;
            for (const r of remaining) {
                if (r.groups.cards.length - r.used < need) continue;
                if (!best || r.groups.val < best.groups.val) best = r;
            }
            if (!best) {
                feasible = false;
                break;
            }
            fillerCards.push(...best.groups.cards.slice(best.used, best.used + need));
            best.used += need;
        }
        if (!feasible) continue;

        const result = [...mainCards, ...fillerCards];
        if (result.length === wantSize) {
            const key = result.map(c => c.cardid).sort().join(",");
            if (!seen.has(key)) {
                seen.add(key);
                results.push(result);
            }
        }
    }
    return results;
}

// 每个阶梯项：{ label, blocks:[...降序], adjacent:bool, finder:(pool, preferPoints)=>cards|null }
function getFollowLadder(leadPattern, g) {
    const rank = g.rank,
        trumpSuit = g.trumpSuit;
    const L = [];
    const add = (label, blocks, adjacent, finder) => L.push({
        label,
        blocks,
        adjacent,
        finder
    });

    const t = leadPattern.type;

    if (t === "single") {
        add("单张", [1], false, (pool) => smallestSingle(pool, rank, trumpSuit));
    } else if (t === "pair") {
        add("对子", [2], false, (pool) => findPairCards(pool, rank, trumpSuit));
        add("两散", [1, 1], false, (pool) => matchBlocksNoAdj(pool, [1, 1], rank, trumpSuit, false));
    } else if (t === "triple") {
        add("三条", [3], false, (pool) => findTripleCards(pool, rank, trumpSuit));
        add("对+散", [2, 1], false, (pool) => matchBlocksNoAdj(pool, [2, 1], rank, trumpSuit, false));
        add("三散", [1, 1, 1], false, (pool) => matchBlocksNoAdj(pool, [1, 1, 1], rank, trumpSuit, false));
    } else if (t === "bomb") {
        add("四条", [4], false, (pool) => findBombCards(pool, rank, trumpSuit));
        add("三条+散", [3, 1], false, (pool) => matchBlocksNoAdj(pool, [3, 1], rank, trumpSuit, false));
        add("两连拖", [2, 2], true, (pool) => findTractorCards(pool, 2, 2, rank, trumpSuit));
        add("双对", [2, 2], false, (pool) => matchBlocksNoAdj(pool, [2, 2], rank, trumpSuit, false));
        add("对+两散", [2, 1, 1], false, (pool) => matchBlocksNoAdj(pool, [2, 1, 1], rank, trumpSuit, false));
        add("四散", [1, 1, 1, 1], false, (pool) => matchBlocksNoAdj(pool, [1, 1, 1, 1], rank, trumpSuit, false));
    } else if (t === "windmill") {
        add("风车", [3, 3], true, (pool) => findWindmillCards(pool, rank, trumpSuit));
        add("四拖二", [4, 2], true, (pool) => findFourTwoCards(pool, rank, trumpSuit));
        add("双三条", [3, 3], false, (pool) => matchBlocksNoAdj(pool, [3, 3], rank, trumpSuit, false));
        add("三条+对+散", [3, 2, 1], false, (pool) => matchBlocksNoAdj(pool, [3, 2, 1], rank, trumpSuit, false));
        add("三条+三散", [3, 1, 1, 1], false, (pool) => matchBlocksNoAdj(pool, [3, 1, 1, 1], rank, trumpSuit, false));
        add("三连拖", [2, 2, 2], true, (pool) => findTractorCards(pool, 2, 3, rank, trumpSuit));
        add("三对", [2, 2, 2], false, (pool) => matchBlocksNoAdj(pool, [2, 2, 2], rank, trumpSuit, false));
        add("两对+两散", [2, 2, 1, 1], false, (pool) => matchBlocksNoAdj(pool, [2, 2, 1, 1], rank, trumpSuit, false));
        add("对+四散", [2, 1, 1, 1, 1], false, (pool) => matchBlocksNoAdj(pool, [2, 1, 1, 1, 1], rank, trumpSuit, false));
        add("六散", [1, 1, 1, 1, 1, 1], false, (pool) => matchBlocksNoAdj(pool, [1, 1, 1, 1, 1, 1], rank, trumpSuit, false));
    } else if (t === "four_two") {
        add("四拖二", [4, 2], true, (pool) => findFourTwoCards(pool, rank, trumpSuit));
        add("四条+对", [4, 2], false, (pool) => matchBlocksNoAdj(pool, [4, 2], rank, trumpSuit, false));
        add("四条+两散", [4, 1, 1], false, (pool) => matchBlocksNoAdj(pool, [4, 1, 1], rank, trumpSuit, false));
        add("风车", [3, 3], true, (pool) => findWindmillCards(pool, rank, trumpSuit));
        add("双三条", [3, 3], false, (pool) => matchBlocksNoAdj(pool, [3, 3], rank, trumpSuit, false));
        add("三条+对+散", [3, 2, 1], false, (pool) => matchBlocksNoAdj(pool, [3, 2, 1], rank, trumpSuit, false));
        add("三条+三散", [3, 1, 1, 1], false, (pool) => matchBlocksNoAdj(pool, [3, 1, 1, 1], rank, trumpSuit, false));
        add("三连拖", [2, 2, 2], true, (pool) => findTractorCards(pool, 2, 3, rank, trumpSuit));
        add("三对", [2, 2, 2], false, (pool) => matchBlocksNoAdj(pool, [2, 2, 2], rank, trumpSuit, false));
        add("两对+两散", [2, 2, 1, 1], false, (pool) => matchBlocksNoAdj(pool, [2, 2, 1, 1], rank, trumpSuit, false));
        add("对+四散", [2, 1, 1, 1, 1], false, (pool) => matchBlocksNoAdj(pool, [2, 1, 1, 1, 1], rank, trumpSuit, false));
        add("六散", [1, 1, 1, 1, 1, 1], false, (pool) => matchBlocksNoAdj(pool, [1, 1, 1, 1, 1, 1], rank, trumpSuit, false));
    } else if (t === "four_four") {
        add("四拖四", [4, 4], true, (pool) => findFourFourCards(pool, rank, trumpSuit));
        add("双四条", [4, 4], false, (pool) => matchBlocksNoAdj(pool, [4, 4], rank, trumpSuit, false));
        add("四条+三条+散", [4, 3, 1], false, (pool) => matchBlocksNoAdj(pool, [4, 3, 1], rank, trumpSuit, false));
        add("四条+对+两散", [4, 2, 1, 1], false, (pool) => matchBlocksNoAdj(pool, [4, 2, 1, 1], rank, trumpSuit, false));
        add("四条+四散", [4, 1, 1, 1, 1], false, (pool) => matchBlocksNoAdj(pool, [4, 1, 1, 1, 1], rank, trumpSuit, false));
        add("双三条+对", [3, 3, 2], false, (pool) => matchBlocksNoAdj(pool, [3, 3, 2], rank, trumpSuit, false));
        add("双三条+两散", [3, 3, 1, 1], false, (pool) => matchBlocksNoAdj(pool, [3, 3, 1, 1], rank, trumpSuit, false));
        add("四连拖", [2, 2, 2, 2], true, (pool) => findTractorCards(pool, 2, 4, rank, trumpSuit));
        add("四对", [2, 2, 2, 2], false, (pool) => matchBlocksNoAdj(pool, [2, 2, 2, 2], rank, trumpSuit, false));
        add("三对+两散", [2, 2, 2, 1, 1], false, (pool) => matchBlocksNoAdj(pool, [2, 2, 2, 1, 1], rank, trumpSuit, false));
        add("两对+四散", [2, 2, 1, 1, 1, 1], false, (pool) => matchBlocksNoAdj(pool, [2, 2, 1, 1, 1, 1], rank, trumpSuit, false));
        add("对+六散", [2, 1, 1, 1, 1, 1, 1], false, (pool) => matchBlocksNoAdj(pool, [2, 1, 1, 1, 1, 1, 1], rank, trumpSuit, false));
        add("八散", [1, 1, 1, 1, 1, 1, 1, 1], false, (pool) => matchBlocksNoAdj(pool, [1, 1, 1, 1, 1, 1, 1, 1], rank, trumpSuit, false));
    } else if (t === "tractor") {
        const size = leadPattern.size,
            length = leadPattern.length;
        const wantSize = TuoLaJi.getPatternSize(leadPattern);
        add("同型连拖", Array(length).fill(size), true, (pool) => findTractorCards(pool, size, length, rank, trumpSuit));
        if (size === 2) {
            if (wantSize === 4) add("四条", [4], false, (pool) => findBombCards(pool, rank, trumpSuit));
            if (wantSize === 6) {
                add("风车", [3, 3], true, (pool) => findWindmillCards(pool, rank, trumpSuit));
                add("四拖二", [4, 2], true, (pool) => findFourTwoCards(pool, rank, trumpSuit));
            }
            if (wantSize === 8) add("四拖四", [4, 4], true, (pool) => findFourFourCards(pool, rank, trumpSuit));
        } else if (size === 3 && wantSize === 6) {
            add("风车", [3, 3], true, (pool) => findWindmillCards(pool, rank, trumpSuit));
        }
        if (size === 2 && length >= 3) {
            for (let tLen = length - 1; tLen >= 2; tLen--) {
                const fillBlocks = [];
                let rem = wantSize - tLen * 2;
                while (rem >= 2) {
                    fillBlocks.push(2);
                    rem -= 2;
                }
                while (rem >= 1) {
                    fillBlocks.push(1);
                    rem -= 1;
                }
                if (fillBlocks.length === 0) continue;
                const blocks = [...Array(tLen).fill(2), ...fillBlocks];
                L.push({
                    label: `连拖${tLen}+补${fillBlocks.join("-")}`,
                    blocks: blocks,
                    adjacent: false,
                    partialAdjacent: tLen,
                    finder: (pool) => {
                        const list = findAllTractorPlusFillers(pool, 2, tLen, fillBlocks, rank, trumpSuit);
                        return list.length > 0 ? list[0] : null;
                    }
                });
            }
        }
        for (const b of buildPairLevelBlocks(wantSize)) {
            if (b.every(x => x === 1)) continue;
            add("降级" + b.join("-"), b, false, (pool) => matchBlocksNoAdj(pool, b, rank, trumpSuit, false));
        }
        add("全散", Array(wantSize).fill(1), false, (pool) => matchBlocksNoAdj(pool, Array(wantSize).fill(1), rank, trumpSuit, false));
    } else if (t === "throw") {
        // ★ 新增：甩牌首出时，人类玩家选牌过滤器必须有“全散”的兜底，防止凑不出结构卡死
        const totalSize = leadPattern.size;
        add("全散", Array(totalSize).fill(1), false, (pool) => matchBlocksNoAdj(pool, Array(totalSize).fill(1), rank, trumpSuit, false));
    }

    return L;
}

// 返回阶梯中第一个能凑出的项（用于 validate）
function getBestFollowStep(pool, leadPattern, g) {
    const wantSize = TuoLaJi.getPatternSize(leadPattern);
    const ladder = getFollowLadder(leadPattern, g);
    for (const step of ladder) {
        const cards = step.finder(pool, false);
        if (cards && cards.length === wantSize) return step;
    }
    return null;
}

// 枚举某个阶梯项的所有组合（AI 选牌 / 送分用）
function enumerateConsecutiveCombos(pool, blocks, g) {
    const results = [];
    const gl = buildValueGroups(pool, g.rank, g.trumpSuit);
    const need = blocks.length;
    for (let start = 0; start <= gl.length - need; start++) {
        let ok = true;
        for (let j = 1; j < need; j++) {
            if (gl[start + j].val - gl[start + j - 1].val !== 1) {
                ok = false;
                break;
            }
        }
        if (!ok) continue;
        let feasible = true;
        for (let j = 0; j < need; j++) {
            if (gl[start + j].cards.length < blocks[j]) {
                feasible = false;
                break;
            }
        }
        if (!feasible) continue;
        const cards = [];
        for (let j = 0; j < need; j++) cards.push(...gl[start + j].cards.slice(0, blocks[j]));
        results.push(cards);
        if (results.length >= 60) break;
    }
    return results;
}

function enumerateBlocksNoAdj(pool, blocks, rank, trumpSuit, limit) {
    limit = limit || 60;
    const gl = buildValueGroups(pool, rank, trumpSuit);
    const results = [];
    const consumed = new Array(gl.length).fill(0);
    const picked = [];
    const seen = new Set();

    function dfs(blockIdx) {
        if (results.length >= limit) return;
        if (blockIdx >= blocks.length) {
            const key = picked.map(c => c.cardid).sort().join(",");
            if (!seen.has(key)) {
                seen.add(key);
                results.push(picked.slice());
            }
            return;
        }
        const need = blocks[blockIdx];
        for (let i = 0; i < gl.length; i++) {
            if (gl[i].cards.length - consumed[i] < need) continue;
            consumed[i] += need;
            picked.push(...gl[i].cards.slice(consumed[i] - need, consumed[i]));
            dfs(blockIdx + 1);
            picked.length -= need;
            consumed[i] -= need;
            if (results.length >= limit) return;
        }
    }
    dfs(0);
    return results;
}

function enumerateStepCombos(pool, step, g) {
    if (step.adjacent) {
        const allSame = step.blocks.every(b => b === step.blocks[0]);
        if (allSame) return enumerateConsecutiveCombos(pool, step.blocks, g);
        const c = step.finder(pool, false);
        return c ? [c] : [];
    }
    // ★ 部分连拖项：枚举所有"连拖 + 散块"组合
    if (step.partialAdjacent) {
        const size = step.blocks[0];
        const length = step.partialAdjacent;
        const fillerBlocks = step.blocks.slice(length);
        return findAllTractorPlusFillers(pool, size, length, fillerBlocks, g.rank, g.trumpSuit);
    }
    return enumerateBlocksNoAdj(pool, step.blocks, g.rank, g.trumpSuit, 60);
}

// AI 用：返回某首牌下的所有合法跟牌组合（供按策略挑选）
// AI 用：返回某首牌下的所有合法跟牌组合（供按策略挑选）
function getFollowCandidatesForAI(pool, leadPattern, g) {
    const wantSize = TuoLaJi.getPatternSize(leadPattern);
    const SPECIAL = ["bomb", "windmill", "four_two", "four_four"];

    // ===== 首出特殊拖拉机：收集同张数特殊组合（互跟） =====
    if (SPECIAL.includes(leadPattern.type)) {
        const result = [];
        const seen = new Set();
        const addCards = (cards) => {
            if (!cards) return;
            const key = cards.map(c => c.cardid).sort().join(",");
            if (!seen.has(key)) {
                seen.add(key);
                result.push(cards);
            }
        };

        const step = getBestFollowStep(pool, leadPattern, g);
        if (step) {
            if (step.adjacent) {
                // 同型连拖层面（特殊互跟），比如首出风车，风车和四拖二都可以跟
                const finders = {
                    bomb: findBombCards,
                    windmill: findWindmillCards,
                    four_two: findFourTwoCards,
                    four_four: findFourFourCards
                };
                const sizes = {
                    bomb: 4,
                    windmill: 6,
                    four_two: 6,
                    four_four: 8
                };
                for (const tp of SPECIAL) {
                    if (sizes[tp] !== wantSize) continue;
                    addCards(finders[tp](pool, g.rank, g.trumpSuit));
                }
            } else {
                // 非连降级层面，比如四条+对，必须严格按降级项出
                const list = enumerateStepCombos(pool, step, g);
                list.forEach(addCards);
                if (result.length === 0) addCards(step.finder(pool, false));
            }
        }

        // 兜底：如果上面步骤没找到
        if (result.length === 0) {
            const finders = {
                bomb: findBombCards,
                windmill: findWindmillCards,
                four_two: findFourTwoCards,
                four_four: findFourFourCards
            };
            const sizes = {
                bomb: 4,
                windmill: 6,
                four_two: 6,
                four_four: 8
            };
            for (const tp of SPECIAL) {
                if (sizes[tp] !== wantSize) continue;
                addCards(finders[tp](pool, g.rank, g.trumpSuit));
            }
        }

        if (result.length > 0) return result;

        // 如果特殊拖拉机根本凑不出来，走最底层的散牌枚举
        const fallbackStep = getBestFollowStep(pool, leadPattern, g);
        if (fallbackStep) {
            const list = enumerateStepCombos(pool, fallbackStep, g);
            if (list.length > 0) return list;
            const c = fallbackStep.finder(pool, false);
            return c ? [c] : [];
        }
        return [];
    }

    // ===== 首出普通连拖：同型连拖 + 同张数特殊 + 最优降级 =====
    if (leadPattern.type === "tractor") {
        const resultMap = new Map();
        const addToMap = (cardsArray) => {
            cardsArray.forEach(cards => {
                const key = cards.map(c => c.cardid).sort().join(",");
                if (!resultMap.has(key)) resultMap.set(key, cards);
            });
        };

        const combos = analyzeSuitForStructure(pool, leadPattern, g);
        addToMap(combos);

        const step = getBestFollowStep(pool, leadPattern, g);
        if (step) {
            if (step.blocks.every(x => x === 1)) return null;
            if (step.partialAdjacent) {
                const size = step.blocks[0];
                const length = step.partialAdjacent;
                const fillerBlocks = step.blocks.slice(length);
                addToMap(findAllTractorPlusFillers(pool, size, length, fillerBlocks, g.rank, g.trumpSuit));
            } else {
                const list = enumerateBlocksNoAdj(pool, step.blocks, g.rank, g.trumpSuit, 200);
                addToMap(list);
            }
        }

        const res = Array.from(resultMap.values());
        if (res.length === 0 && step && step.blocks.every(x => x === 1)) return null;
        return res;
    }

    // ===== 三条/对子/单张：严格阶梯 =====
    const step = getBestFollowStep(pool, leadPattern, g);
    if (!step) return [];
    const list = enumerateStepCombos(pool, step, g);
    if (list.length > 0) return list;
    const c = step.finder(pool, false);
    return c ? [c] : [];
}


// ★ 判断 AI 甩牌是否绝对安全（不会被扣牌）
function isThrowSafe(player, cards, g) {
    try {
        if (!Array.isArray(cards) || cards.length === 0) return false;

        const firstParsed = TuoLaJi.parseCard(cards[0].name);
        if (!firstParsed || firstParsed.joker) return false;
        const suit = firstParsed.suit;

        const others = game.players.filter(p => p !== player && p.getCards("h").length > 0);

        // 其他人都没该花色 → 100% 安全
        let allLack = true;
        for (const other of others) {
            const idx = game.players.indexOf(other);
            if (idx >= 0 && !g.lackSuit[idx][suit]) {
                allLack = false;
                break;
            }
        }
        if (allLack) return true;

        // ========== 方法一：直接查手牌结构 ==========
        let workingCards1 = cards.slice();
        while (workingCards1.length > 0) {
            const extract = extractHighestCombo(workingCards1, g.rank, g.trumpSuit);
            if (!extract) break;
            const {
                combo,
                remaining
            } = extract;
            if (!Array.isArray(combo) || combo.length === 0) break;

            const leadPattern = TuoLaJi.getPattern(combo.map(c => c.name), g.rank, g.trumpSuit);
            if (leadPattern && leadPattern.valid) {
                for (const other of others) {
                    const otherCards = other.getCards("h").filter(c => {
                        const p = TuoLaJi.parseCard(c.name);
                        if (!p) return false;
                        if (p.joker) return false;
                        if (TuoLaJi.isTrump(p, g.rank, g.trumpSuit)) return false; // ★ 排除级牌/主花色
                        return p.suit === suit;
                    });
                    const matches = analyzeSuitForStructure(otherCards, leadPattern, g);
                    if (!Array.isArray(matches)) continue;
                    for (const m of matches) {
                        if (!Array.isArray(m) || m.length === 0) continue;
                        const p = TuoLaJi.getPattern(m.map(c => c.name), g.rank, g.trumpSuit);
                        if (p && p.valid && TuoLaJi.structureMatch(p, leadPattern) && TuoLaJi.comparePatterns(p, leadPattern) > 0) {
                            return false;
                        }
                    }
                }
            }
            workingCards1 = remaining;
        }

        // ========== 方法二：记牌推算 ==========
        const unknown = getUnknownCounts(player, g);
        let workingCards2 = cards.slice();
        while (workingCards2.length > 0) {
            const extract = extractHighestCombo(workingCards2, g.rank, g.trumpSuit);
            if (!extract) break;
            const {
                combo,
                remaining
            } = extract;
            if (!Array.isArray(combo) || combo.length === 0) break;

            const leadPattern = TuoLaJi.getPattern(combo.map(c => c.name), g.rank, g.trumpSuit);
            if (leadPattern && leadPattern.valid) {
                if (!checkComboSafe(leadPattern, suit, unknown, g)) {
                    return false;
                }
            }
            workingCards2 = remaining;
        }

        return true;
    } catch (e) {
        // 兜底：任何异常都保守返回"不安全"，不甩牌，绝不带崩游戏
        console.error("[拖拉机] isThrowSafe 异常:", e);
        return false;
    }
}

// ★ 记牌系统：根据已打出的牌 + 自己手牌，推算未知牌剩余数量
function getUnknownCounts(player, g) {
    if (g._unknownCounts) return g._unknownCounts;
    const counts = {};
    for (const s of SUITS) {
        for (let n = 1; n <= 13; n++) counts[s + n] = 4;
    }
    counts["jokerbig"] = 4;
    counts["jokersmall"] = 4;

    const played = Array.isArray(g.playedCards) ? g.playedCards : [];
    for (const name of played) {
        if (counts[name] !== undefined) counts[name]--;
    }

    try {
        if (player && typeof player.getCards === "function") {
            for (const card of player.getCards("h")) {
                if (counts[card.name] !== undefined) counts[card.name]--;
            }
        }
    } catch (e) {
        // 若取牌失败，保守按"满额未知"处理，不让整个函数崩
    }

    g._unknownCounts = counts;
    return counts;
}

function checkComboSafe(leadPattern, suit, unknown, g) {
    if (!leadPattern || !leadPattern.valid) return true;
    if (typeof leadPattern.power !== "number") return true;
    if (!unknown || typeof unknown !== "object") return true;

    const numCounts = {};
    for (const n in unknown) {
        if (unknown[n] <= 0) continue;
        const p = TuoLaJi.parseCard(n);
        if (!p || p.joker) continue;
        if (p.suit !== suit) continue;
        numCounts[p.number] = (numCounts[p.number] || 0) + unknown[n];
    }

    const power = (num) => TuoLaJi.cardPower({
        number: num,
        suit
    }, g.rank, g.trumpSuit);

    try {
        switch (leadPattern.type) {
            case "single":
                for (const n in numCounts) {
                    if (power(parseInt(n)) > leadPattern.power && numCounts[n] >= 1) return false;
                }
                return true;
            case "pair":
                for (const n in numCounts) {
                    if (power(parseInt(n)) > leadPattern.power && numCounts[n] >= 2) return false;
                }
                return true;
            case "triple":
                for (const n in numCounts) {
                    if (power(parseInt(n)) > leadPattern.power && numCounts[n] >= 3) return false;
                }
                return true;
            case "bomb":
                for (const n in numCounts) {
                    if (power(parseInt(n)) > leadPattern.power && numCounts[n] >= 4) return false;
                }
                return true;
            case "tractor":
            case "windmill": {
                const size = leadPattern.size;
                const length = leadPattern.length;
                const validNums = [];
                for (const n in numCounts) {
                    if (numCounts[n] >= size) validNums.push(parseInt(n));
                }
                validNums.sort((a, b) => TuoLaJi.tractorValue({
                    number: a,
                    suit
                }, g.rank, g.trumpSuit) - TuoLaJi.tractorValue({
                    number: b,
                    suit
                }, g.rank, g.trumpSuit));
                for (let i = 0; i <= validNums.length - length; i++) {
                    let ok = true;
                    for (let j = 0; j < length - 1; j++) {
                        if (!TuoLaJi.isAdjacentNum(validNums[i + j], validNums[i + j + 1], g.rank)) {
                            ok = false;
                            break;
                        }
                    }
                    if (ok) {
                        const maxNum = validNums[i + length - 1];
                        if (power(maxNum) > leadPattern.power) return false;
                    }
                }
                return true;
            }
            case "four_two":
            case "four_four":
                for (const n in numCounts) {
                    if (power(parseInt(n)) > leadPattern.power && numCounts[n] >= 4) return false;
                }
                return true;
            default:
                return true;
        }
    } catch (e) {
        return true; // 异常时保守放行（不阻塞甩牌）
    }
}

// ★ 新增：全主牌速胜甩牌
// 条件：本轮首出者手牌全为主牌，且其他所有未出完的玩家手牌全是副牌
// 满足则一次性甩出全部主牌，构造 valid=true 的 throw pattern，跳过 resolveThrow（不会被抓）
function tryAllTrumpThrow(seat, hand, g) {
    if (!hand || hand.length === 0) return null;
    const rank = g.rank,
        trumpSuit = g.trumpSuit;

    // 条件 1：自己手牌全为主牌
    for (const c of hand) {
        const p = TuoLaJi.parseCard(c.name);
        if (!TuoLaJi.isTrump(p, rank, trumpSuit)) return null;
    }

    // 条件 2：其他所有未出完的玩家手牌全是副牌
    for (let i = 0; i < game.players.length; i++) {
        if (i === seat) continue;
        const otherHand = game.players[i].getCards("h");
        if (otherHand.length === 0) continue;
        for (const c of otherHand) {
            const p = TuoLaJi.parseCard(c.name);
            if (TuoLaJi.isTrump(p, rank, trumpSuit)) return null;
        }
    }

    // 构造甩牌 pattern
    const cards = hand.slice();
    const struct = TuoLaJi.parseThrowStructure(cards, rank, trumpSuit);
    return {
        cards: cards,
        pattern: {
            type: "throw",
            power: 99999,
            suit: "trump",
            isTrump: true,
            valid: true,
            size: cards.length,
            struct: struct,
            rank: rank,
            trumpSuit: trumpSuit
        }
    };
}

// ★ 新增：评估甩牌风险（连拖/对子越多越安全，散牌越多越危险）
function evaluateSuitThrowRisk(pool, rank, trumpSuit) {
    const gl = buildValueGroups(pool, rank, trumpSuit);
    const pairGroups = gl.filter(g => g.cards.length >= 2).sort((a, b) => a.val - b.val);
    const inTractor = new Set();
    for (let i = 0; i < pairGroups.length; i++) {
        if (i > 0 && pairGroups[i].val - pairGroups[i - 1].val === 1) inTractor.add(i);
        if (i < pairGroups.length - 1 && pairGroups[i + 1].val - pairGroups[i].val === 1) inTractor.add(i);
    }
    const tractorPairs = inTractor.size;
    const independentPairs = pairGroups.length - tractorPairs;
    let singles = 0;
    for (const grp of gl) {
        if (grp.cards.length < 2) singles += grp.cards.length;
    }
    let score = tractorPairs * 10 + independentPairs * 3 - singles * 2;
    for (const grp of gl) {
        if (grp.cards.length >= 4) score += 5;
        else if (grp.cards.length === 3) score += 2;
    }
    return {
        score,
        tractorCount: tractorPairs,
        pairCount: independentPairs,
        singleCount: singles,
        allSingles: (tractorPairs === 0 && independentPairs === 0)
    };
}

// ★ 新增：检查是否有人能用主牌毙掉这手甩牌
function canAnyBeatThrowByTrump(seat, throwCards, g) {
    const rank = g.rank,
        trumpSuit = g.trumpSuit;
    const struct = TuoLaJi.parseThrowStructure(throwCards, rank, trumpSuit);
    const totalSize = throwCards.length;
    const fakePattern = {
        type: "throw",
        size: totalSize,
        struct: struct,
        rank: rank,
        trumpSuit: trumpSuit
    };
    for (let i = 0; i < 4; i++) {
        if (i === seat) continue;
        const otherHand = game.players[i].getCards("h");
        if (otherHand.length === 0) continue;
        const trumpCards = otherHand.filter(c => {
            const p = TuoLaJi.parseCard(c.name);
            return TuoLaJi.isTrump(p, rank, trumpSuit);
        });
        if (trumpCards.length < totalSize) continue;
        const matches = analyzeThrowStructure(trumpCards, fakePattern, g);
        if (matches.length > 0) return true;
    }
    return false;
}

// ★ 新增：检查其他人用同花色副牌能否抓这手甩牌的任意一组
function canAnyCatchSuit(throwCards, suit, g, selfSeat) {
    const rank = g.rank,
        trumpSuit = g.trumpSuit;
    const rankGroups = splitIntoRankGroups(throwCards, rank, trumpSuit);
    for (const groupCards of rankGroups) {
        const groupPattern = TuoLaJi.getPattern(groupCards.map(c => c.name), rank, trumpSuit);
        if (!groupPattern.valid) continue;
        for (let i = 0; i < 4; i++) {
            if (i === selfSeat) continue;
            const otherHand = game.players[i].getCards("h");
            if (otherHand.length === 0) continue;
            const otherCards = otherHand.filter(c => {
                const p = TuoLaJi.parseCard(c.name);
                if (!p) return false;
                if (p.joker) return false;
                if (TuoLaJi.isTrump(p, rank, trumpSuit)) return false;
                return p.suit === suit;
            });
            if (otherCards.length === 0) continue;
            const matches = analyzeSuitForStructure(otherCards, groupPattern, g);
            for (const m of matches) {
                const p = TuoLaJi.getPattern(m.map(c => c.name), rank, trumpSuit);
                if (p.valid && TuoLaJi.structureMatch(p, groupPattern) && TuoLaJi.comparePatterns(p, groupPattern) > 0) {
                    return true;
                }
            }
        }
    }
    return false;
}

// ★ 新增：残局副牌甩牌
// 条件：手牌 ≤15（残局）；其他所有未出完玩家都没该花色；
//       牌型越强（连拖/对子多）风险越低越优先；全散牌仅 ≤10 张时考虑
// ★ 残局/安全清场副牌甩牌
// 两档策略：
//   ① 全甩：其他人全都没该花色（一张不剩）→ 甩全部（含散牌）
//   ② 只甩对子：其他人有该花色散牌但没对子/连拖/三条/四条 → 只甩 ≥2 张的组
function trySuitThrow(seat, hand, g) {
    const rank = g.rank,
        trumpSuit = g.trumpSuit;
    const handSize = hand.length;
    const isLateGame = handSize <= 15;

    const suitPools = {
        spade: [],
        heart: [],
        club: [],
        diamond: []
    };
    for (const c of hand) {
        const p = TuoLaJi.parseCard(c.name);
        if (!TuoLaJi.isTrump(p, rank, trumpSuit)) suitPools[p.suit].push(c);
    }

    let best = null;
    const consider = (cards, suit, baseScore) => {
        if (!cards || cards.length < 2) return;
        if (!best || baseScore > best.score) {
            best = {
                cards: cards.slice(),
                score: baseScore,
                suit
            };
        }
    };

    for (const s of SUITS) {
        const pool = suitPools[s];
        if (pool.length < 2) continue;

        // 检查其他人在该花色的情况
        let allLackSuit = true; // 全都没该花色
        let allLackPairs = true; // 全都没该花色的 ≥2 张组
        for (let i = 0; i < 4; i++) {
            if (i === seat) continue;
            const otherHand = game.players[i].getCards("h");
            if (otherHand.length === 0) continue;
            const otherSuitCards = otherHand.filter(c => {
                const p = TuoLaJi.parseCard(c.name);
                return !p.joker && p.suit === s && !TuoLaJi.isTrump(p, rank, trumpSuit);
            });
            if (otherSuitCards.length > 0) allLackSuit = false;
            if (countPairs(otherSuitCards, rank, trumpSuit) > 0) allLackPairs = false;
        }
        if (!allLackSuit && !allLackPairs) continue; // 有人有该花色对子 → 不甩

        // ============ 情况 1：全甩 ============
        if (allLackSuit) {
            const poolPattern = TuoLaJi.getPattern(pool.map(c => c.name), rank, trumpSuit);
            if (poolPattern.valid && poolPattern.type !== "mixed") continue;

            const risk = evaluateSuitThrowRisk(pool, rank, trumpSuit);
            if (risk.allSingles && handSize > 10) continue;

            const beatable = canAnyBeatThrowByTrump(seat, pool, g);
            if (isLateGame && beatable && risk.allSingles) continue;
            if (isLateGame && beatable && risk.tractorCount === 0 && handSize > 12) continue;
            if (!isLateGame && beatable) continue;

            let score = risk.score + (isLateGame ? (15 - handSize) : 0) + (!beatable ? 100 : 0) + 50;
            consider(pool, s, score);
        }
        // ============ 情况 2：只甩对子（对子/连拖/三条/四条） ============
        else if (allLackPairs) {
            const gl = buildValueGroups(pool, rank, trumpSuit);
            const pairCards = [];
            for (const grp of gl) {
                if (grp.cards.length >= 2) pairCards.push(...grp.cards);
            }
            if (pairCards.length < 2) continue;

            const pairPattern = TuoLaJi.getPattern(pairCards.map(c => c.name), rank, trumpSuit);
            if (pairPattern.valid && pairPattern.type !== "mixed") continue;

            // 同花色扣牌检查（其他人没对子，理论上抓不到，兜底再查一遍）
            if (canAnyCatchSuit(pairCards, s, g, seat)) continue;

            // 主牌毙检查（对子组需同结构整手才能毙，通常凑不出）
            const beatable = canAnyBeatThrowByTrump(seat, pairCards, g);
            if (beatable && !isLateGame) continue;

            let score = pairCards.length * 3 + 80 + (!beatable ? 100 : 0);
            consider(pairCards, s, score);
        }
    }

    if (!best) return null;
    const cards = best.cards;
    const struct = TuoLaJi.parseThrowStructure(cards, rank, trumpSuit);
    return {
        cards: cards,
        pattern: {
            type: "throw",
            power: 99999,
            suit: best.suit,
            isTrump: false,
            valid: true,
            size: cards.length,
            struct: struct,
            rank: rank,
            trumpSuit: trumpSuit
        }
    };
}

// ★ 新增：统计牌池里的对子数（含三条/四条里的对子）
function countPairs(cards, rank, trumpSuit) {
    if (!cards || cards.length < 2) return 0;
    const gl = buildValueGroups(cards, rank, trumpSuit);
    let n = 0;
    for (const g of gl) n += Math.floor(g.cards.length / 2);
    return n;
}

// ★ 新增：主牌钓鱼——引出敌方主牌对子，为后续甩副牌对子降低被毙风险
// 条件：
//   1. 非残局（手牌 > 15）
//   2. 自己某花色副牌 ≥2 对
//   3. 敌方还有主牌对子（需要钓）
//   4. 敌方在该花色已没对子（甩出去不会被同副牌抓）
// 动作：出主牌最大拖拉机（优先长拖）或最大对子
function tryFishWithTrump(seat, hand, g) {
    const rank = g.rank,
        trumpSuit = g.trumpSuit;
    const myTeam = seat % 2;
    const handSize = hand.length;

    if (handSize <= 15) return null;

    const suitPools = {
        spade: [],
        heart: [],
        club: [],
        diamond: []
    };
    const trumpPool = [];
    for (const c of hand) {
        const p = TuoLaJi.parseCard(c.name);
        if (TuoLaJi.isTrump(p, rank, trumpSuit)) trumpPool.push(c);
        else suitPools[p.suit].push(c);
    }
    if (trumpPool.length < 2) return null;

    // 找自己手里副牌对子最多的花色
    let bestSuit = null,
        bestPairCount = 0;
    for (const s of SUITS) {
        const pool = suitPools[s];
        if (pool.length < 4) continue;
        const gl = buildValueGroups(pool, rank, trumpSuit);
        let pairCount = 0;
        for (const grp of gl) {
            if (grp.cards.length >= 2) pairCount += Math.floor(grp.cards.length / 2);
        }
        if (pairCount > bestPairCount) {
            bestPairCount = pairCount;
            bestSuit = s;
        }
    }
    if (!bestSuit || bestPairCount < 2) return null;

    // 检查敌方主牌对子（需钓）、敌方该花色对子（会抓）
    let enemyHasTrumpPair = false;
    let enemySuitPairCount = 0;
    for (let i = 0; i < 4; i++) {
        if (i === seat) continue;
        const otherHand = game.players[i].getCards("h");
        if (otherHand.length === 0) continue;

        if (i % 2 !== myTeam) {
            const otherTrumpCards = otherHand.filter(c => {
                const p = TuoLaJi.parseCard(c.name);
                return TuoLaJi.isTrump(p, rank, trumpSuit);
            });
            if (countPairs(otherTrumpCards, rank, trumpSuit) > 0) enemyHasTrumpPair = true;
        }

        const otherSuitCards = otherHand.filter(c => {
            const p = TuoLaJi.parseCard(c.name);
            return !p.joker && p.suit === bestSuit && !TuoLaJi.isTrump(p, rank, trumpSuit);
        });
        enemySuitPairCount += countPairs(otherSuitCards, rank, trumpSuit);
    }

    if (!enemyHasTrumpPair) return null; // 敌方没主牌对子 → 交给清场
    if (enemySuitPairCount > 0) return null; // 敌方该花色还有对子 → 出去会被抓

    // 优先出主牌长拖拉机 > 短拖拉机 > 对子
    const trumpTractor = findLongTractor(trumpPool, rank, trumpSuit) ||
        findShortTractor(trumpPool, rank, trumpSuit);
    if (trumpTractor) return trumpTractor;

    const trumpPair = findPair(trumpPool, rank, trumpSuit);
    if (trumpPair) return trumpPair;

    return null;
}

// ============ AI 首家出牌（优先出大牌） ============
function findBestLead(hand, g, seat) {
    const rank = g.rank,
        trumpSuit = g.trumpSuit;

    // ★ 全主牌速胜甩牌（首出者全主牌 + 其他人都只剩副牌）
    const allTrumpThrow = tryAllTrumpThrow(seat, hand, g);
    if (allTrumpThrow) return allTrumpThrow;

    const myTeam = seat % 2;
    const teammateSeat = (seat + 2) % 4;
    const isLateGame = hand.length <= 15;

    const suitPools = {
        spade: [],
        heart: [],
        club: [],
        diamond: []
    };
    const trumpPool = [];
    for (const c of hand) {
        const p = TuoLaJi.parseCard(c.name);
        if (TuoLaJi.isTrump(p, rank, trumpSuit)) trumpPool.push(c);
        else suitPools[p.suit].push(c);
    }

    let enemyHasTrump = false;
    for (let i = 0; i < 4; i++) {
        if (i % 2 !== myTeam && !g.lackSuit[i]['trump']) enemyHasTrump = true;
    }

    // ★ 核心修复：判断某花色是否安全
    const canLeadSuitSafely = (suit) => {
        let enemyHasSuit = false;
        let enemyLack = false;
        for (let i = 0; i < 4; i++) {
            if (i % 2 !== myTeam) {
                if (!g.lackSuit[i][suit]) {
                    enemyHasSuit = true;
                } else {
                    enemyLack = true;
                }
            }
        }

        if (!enemyHasSuit) {
            // 敌方全缺门：只有在队友也缺门且队友有主牌能毙的情况下才安全
            return g.lackSuit[teammateSeat][suit] && !g.lackSuit[teammateSeat]['trump'];
        }

        if (enemyLack) {
            // ★ 只要有哪怕一个敌人缺门，该花色的单张A/K或对子就极易被毙，判定为不安全！
            return false;
        }

        // 敌方全都有该花色，相对安全
        return true;
    };

    const evaluateSuit = (suit) => {
        let score = 0;
        for (let i = 0; i < 4; i++) {
            if (i % 2 !== myTeam && g.lackSuit[i][suit]) score -= 100;
        }
        for (let i = 0; i < 4; i++) {
            if (i % 2 === myTeam && i !== seat && g.lackSuit[i][suit]) {
                const pts = TuoLaJi.countPoints(suitPools[suit].map(c => c.name));
                if (pts > 0) score += 50;
            }
        }
        return score;
    };

    const tractorFinders = [{
            fn: (pool) => findFourFour(pool, rank, trumpSuit),
            prio: 7
        },
        {
            fn: (pool) => findFourTwo(pool, rank, trumpSuit),
            prio: 6
        },
        {
            fn: (pool) => findBomb(pool, rank, trumpSuit),
            prio: 5
        },
        {
            fn: (pool) => findLongTractor(pool, rank, trumpSuit),
            prio: 4.5
        },
        {
            fn: (pool) => findWindmill(pool, rank, trumpSuit),
            prio: 4
        },
        {
            fn: (pool) => findShortTractor(pool, rank, trumpSuit),
            prio: 3
        }
    ];

    const finders = [
        ...tractorFinders,
        {
            fn: (pool) => findPair(pool, rank, trumpSuit),
            prio: 1
        }
    ];

    // ===================== 步骤 1：队友缺门送分 =====================
    // ★ 修正：如果自己手里有强力组合（拖拉机/大对子/炸弹等），不急着送分
    let hasStrongCombo = false;
    for (const s of SUITS) {
        const pool = suitPools[s];
        if (pool.length > 0) {
            if (findShortTractor(pool, rank, trumpSuit) || findLongTractor(pool, rank, trumpSuit) ||
                findFourFour(pool, rank, trumpSuit) || findFourTwo(pool, rank, trumpSuit) ||
                findWindmill(pool, rank, trumpSuit) || findBomb(pool, rank, trumpSuit)) {
                hasStrongCombo = true;
                break;
            }
            const bigPair = pool.some(c => {
                const p = TuoLaJi.parseCard(c.name);
                const isBig = (rank === 1 && p.number === 13) || (rank !== 1 && p.number === 1);
                if (!isBig) return false;
                return pool.filter(x => TuoLaJi.parseCard(x.name).number === p.number).length >= 2;
            });
            if (bigPair) {
                hasStrongCombo = true;
                break;
            }
        }
    }
    if (trumpPool.length > 0) {
        if (findFourFour(trumpPool, rank, trumpSuit) || findFourTwo(trumpPool, rank, trumpSuit) ||
            findLongTractor(trumpPool, rank, trumpSuit) || findWindmill(trumpPool, rank, trumpSuit)) {
            hasStrongCombo = true;
        }
    }

    if (!hasStrongCombo) {
        let bestBiteCard = null;
        let bestBiteScore = -1;
        for (const s of SUITS) {
            if (suitPools[s].length === 0) continue;
            if (g.lackSuit[teammateSeat][s]) {
                for (const c of suitPools[s]) {
                    const p = TuoLaJi.parseCard(c.name);
                    let score;
                    if (p.number === 5 || p.number === 10 || p.number === 13) {
                        // 分牌优先送，分数越高越好
                        score = 200 + (p.number === 5 ? 5 : 10);
                    } else {
                        // 小单张引诱，越小越好
                        score = 100 - p.number;
                    }
                    if (score > bestBiteScore) {
                        bestBiteScore = score;
                        bestBiteCard = c;
                    }
                }
            }
        }
        if (bestBiteCard) {
            return {
                cards: [bestBiteCard],
                pattern: TuoLaJi.getPattern([bestBiteCard.name], rank, trumpSuit)
            };
        }
    }

    // ===================== 步骤 1.5：A/K 组合优先出 =====================
    const topNum = rank === 1 ? 13 : 1;
    const topComboCandidates = [{
            fn: findFourFour,
            prio: 7
        },
        {
            fn: findFourTwo,
            prio: 6
        },
        {
            fn: findBomb,
            prio: 5
        },
        {
            fn: findLongTractor,
            prio: 4.5
        },
        {
            fn: findWindmill,
            prio: 4
        },
        {
            fn: findShortTractor,
            prio: 3
        },
        {
            fn: findTriple,
            prio: 2.5
        },
        {
            fn: findPair,
            prio: 2
        }
    ];

    let bestTopCombo = null;
    for (const s of SUITS) {
        if (suitPools[s].length === 0) continue;
        if (!canLeadSuitSafely(s)) continue; // ★ 这里会拦住有敌方缺门花色的 A/K 组合
        const hasTop = suitPools[s].some(c => {
            const p = TuoLaJi.parseCard(c.name);
            return p.number === topNum;
        });
        if (!hasTop) continue;
        for (const f of topComboCandidates) {
            const res = f.fn(suitPools[s], rank, trumpSuit);
            if (res && res.cards && res.cards.some(c => {
                    const p = TuoLaJi.parseCard(c.name);
                    return p.number === topNum;
                })) {
                const score = f.prio * 10 + evaluateSuit(s);
                if (!bestTopCombo || score > bestTopCombo.score) {
                    bestTopCombo = {
                        res,
                        score
                    };
                }
            }
        }
    }
    if (bestTopCombo) return bestTopCombo.res;

    // ===================== 步骤 2：首发优先走 A/K 单张 =====================
    const topSideCards = [];
    for (const s of SUITS) {
        if (suitPools[s].length === 0) continue;
        if (!canLeadSuitSafely(s)) continue; // ★ 拦住敌方缺门花色的 A/K 单张
        for (const c of suitPools[s]) {
            const p = TuoLaJi.parseCard(c.name);
            if ((rank === 1 && p.number === 13) || (rank !== 1 && p.number === 1)) {
                topSideCards.push(c);
            }
        }
    }
    if (topSideCards.length > 0) {
        topSideCards.sort((a, b) => {
            const pa = TuoLaJi.parseCard(a.name),
                pb = TuoLaJi.parseCard(b.name);
            return evaluateSuit(pb.suit) - evaluateSuit(pa.suit);
        });
        const bestTop = topSideCards[0];
        return {
            cards: [bestTop],
            pattern: TuoLaJi.getPattern([bestTop.name], rank, trumpSuit)
        };
    }

    // ===================== 步骤 3：孤张大王/小王前期出 =====================
    if (!(g._lastLeadWasJoker && g._lastLeadWasJoker.seat === seat && !g._lastLeadWasJoker.gotPoints)) {
        const loneBigJokers = trumpPool.filter(c => {
            const p = TuoLaJi.parseCard(c.name);
            return p.joker && !isLateGame && trumpPool.length <= 6;
        });
        if (loneBigJokers.length > 0) {
            return {
                cards: [loneBigJokers[0]],
                pattern: TuoLaJi.getPattern([loneBigJokers[0].name], rank, trumpSuit)
            };
        }
    }

    // ===================== ★ 步骤 3.5：残局/安全清场副牌甩牌 =====================
    const suitThrow = trySuitThrow(seat, hand, g);
    if (suitThrow) return suitThrow;

    // ===================== 步骤 4：安全甩牌 =====================
    for (const s of SUITS) {
        const pool = suitPools[s];
        if (pool.length < 4) continue;
        const pattern = TuoLaJi.getPattern(pool.map(c => c.name), rank, trumpSuit);
        if (!pattern.valid || pattern.type === "mixed") {
            const tempGroups = {};
            for (const c of pool) {
                const p = TuoLaJi.parseCard(c.name);
                (tempGroups[p.number] = tempGroups[p.number] || []).push(c);
            }
            let groupCount = 0;
            for (const k in tempGroups) {
                if (tempGroups[k].length >= 2) groupCount++;
            }
            if (groupCount < 2) continue;
            let safe = false;
            try {
                safe = isThrowSafe(game.players[seat], pool, g);
            } catch (e) {
                safe = false;
            }
            if (safe) {
                return {
                    cards: pool,
                    pattern: {
                        valid: false,
                        suit: s
                    }
                };
            }
        }
    }

    // ===================== ★ 新增步骤 4.5：清场对子甩牌 =====================
    // 当发现其他人手里都没该花色的对子了，直接把这花色的所有对子一起甩出去
    for (const s of SUITS) {
        const pool = suitPools[s];
        if (pool.length < 4) continue;

        const gl = buildValueGroups(pool, rank, trumpSuit);
        const pairCards = [];
        for (const grp of gl) {
            if (grp.cards.length >= 2) pairCards.push(...grp.cards);
        }

        if (pairCards.length < 4) continue;
        const pairPattern = TuoLaJi.getPattern(pairCards.map(c => c.name), rank, trumpSuit);
        if (pairPattern.valid && pairPattern.type !== "mixed") continue;

        let allLackPairs = true;
        for (let i = 0; i < 4; i++) {
            if (i === seat) continue;
            const otherHand = game.players[i].getCards("h");
            if (otherHand.length === 0) continue;
            const otherSuitCards = otherHand.filter(c => {
                const p = TuoLaJi.parseCard(c.name);
                return !p.joker && p.suit === s && !TuoLaJi.isTrump(p, rank, trumpSuit);
            });
            if (countPairs(otherSuitCards, rank, trumpSuit) > 0) {
                allLackPairs = false;
                break;
            }
        }

        if (allLackPairs) {
            const beatable = canAnyBeatThrowByTrump(seat, pairCards, g);
            if (!beatable || isLateGame) {
                return {
                    cards: pairCards,
                    pattern: TuoLaJi.getPattern(pairCards.map(c => c.name), rank, trumpSuit)
                };
            }
        }
    }

    // ===================== 步骤 5：副牌拖拉机 =====================
    let bestTractorLead = null;
    for (const s of SUITS) {
        if (suitPools[s].length === 0) continue;
        if (!canLeadSuitSafely(s)) continue; // ★ 拦住敌方缺门花色的拖拉机
        for (const f of tractorFinders) {
            const res = f.fn(suitPools[s]);
            if (res) {
                let currentScore = f.prio * 10 + evaluateSuit(s);
                if (!bestTractorLead || currentScore > bestTractorLead.score) {
                    bestTractorLead = {
                        res,
                        score: currentScore
                    };
                }
            }
        }
    }
    if (bestTractorLead) return bestTractorLead.res;

    // ===================== ★ 步骤 5.5：主牌钓鱼（引出敌方主牌对子） =====================
    const fish = tryFishWithTrump(seat, hand, g);
    if (fish) return fish;

    // ===================== 步骤 6：主牌拖拉机和大王 =====================
    if (enemyHasTrump && !isLateGame) {
        let bestTrumpTractor = null;
        for (const f of tractorFinders) {
            const res = f.fn(trumpPool);
            if (res) {
                bestTrumpTractor = res;
                break;
            }
        }
        if (bestTrumpTractor) return bestTrumpTractor;
        const bigJoker = trumpPool.find(c => TuoLaJi.parseCard(c.name).joker === "big");
        if (bigJoker) {
            return {
                cards: [bigJoker],
                pattern: TuoLaJi.getPattern([bigJoker.name], rank, trumpSuit)
            };
        }
    }

    // ===================== 步骤 7：副牌单对子 =====================
    let bestPairLead = null;
    for (const s of SUITS) {
        if (suitPools[s].length === 0) continue;
        if (!canLeadSuitSafely(s)) continue; // ★ 拦住敌方缺门花色的单对子
        const pairRes = findPair(suitPools[s], rank, trumpSuit);
        if (pairRes) {
            let currentScore = 10 + evaluateSuit(s);
            if (!bestPairLead || currentScore > bestPairLead.score) {
                bestPairLead = {
                    res: pairRes,
                    score: currentScore
                };
            }
        }
    }
    if (bestPairLead) return bestPairLead.res;

    // ===================== 步骤 8：吊主 =====================
    let sideStrength = 0;
    for (const s of SUITS) {
        for (const c of suitPools[s]) {
            const p = TuoLaJi.parseCard(c.name);
            if (p.number >= 9 || p.number === 1) sideStrength += 1;
        }
        for (const f of finders) {
            if (f.fn(suitPools[s])) sideStrength += f.prio * 2;
        }
    }
    if (trumpPool.length >= 10 && enemyHasTrump && sideStrength <= 4) {
        for (const f of finders) {
            const res = f.fn(trumpPool);
            if (res) return res;
        }
        const validTrump = trumpPool.filter(c => !isLateGame || TuoLaJi.cardPower(TuoLaJi.parseCard(c.name), rank, trumpSuit) < 7000);
        const pool = validTrump.length ? validTrump : trumpPool;
        pool.sort((a, b) => TuoLaJi.cardPower(TuoLaJi.parseCard(b.name), rank, trumpSuit) - TuoLaJi.cardPower(TuoLaJi.parseCard(a.name), rank, trumpSuit));
        return {
            cards: [pool[0]],
            pattern: TuoLaJi.getPattern([pool[0].name], rank, trumpSuit)
        };
    }

    // ===================== 步骤 9：敌人没主牌 =====================
    if (!enemyHasTrump) {
        let bestLead = null;
        for (const s of SUITS) {
            if (suitPools[s].length === 0) continue;
            for (const f of finders) {
                const res = f.fn(suitPools[s]);
                if (res) {
                    let currentScore = f.prio * 10 + evaluateSuit(s);
                    if (!bestLead || currentScore > bestLead.score) bestLead = {
                        res,
                        score: currentScore
                    };
                }
            }
        }
        if (bestLead) return bestLead.res;

        const allSide = [];
        for (const s of SUITS) allSide.push(...suitPools[s]);
        if (allSide.length > 0) {
            allSide.sort((a, b) => TuoLaJi.cardPower(TuoLaJi.parseCard(b.name), rank, trumpSuit) - TuoLaJi.cardPower(TuoLaJi.parseCard(a.name), rank, trumpSuit));
            return {
                cards: [allSide[0]],
                pattern: TuoLaJi.getPattern([allSide[0].name], rank, trumpSuit)
            };
        }
        for (const f of finders) {
            const res = f.fn(trumpPool);
            if (res) return res;
        }
        const pool = isLateGame ? trumpPool.filter(c => TuoLaJi.cardPower(TuoLaJi.parseCard(c.name), rank, trumpSuit) < 7000) : trumpPool;
        const finalPool = pool.length ? pool : trumpPool;
        finalPool.sort((a, b) => TuoLaJi.cardPower(TuoLaJi.parseCard(b.name), rank, trumpSuit) - TuoLaJi.cardPower(TuoLaJi.parseCard(a.name), rank, trumpSuit));
        return {
            cards: [finalPool[0]],
            pattern: TuoLaJi.getPattern([finalPool[0].name], rank, trumpSuit)
        };
    }

    // ===================== 步骤 10：安全副牌单张 =====================
    const safeSide = [];
    for (const s of SUITS) {
        if (canLeadSuitSafely(s)) safeSide.push(...suitPools[s]); // ★ 这里也会过滤掉
    }
    if (safeSide.length > 0) {
        safeSide.sort((a, b) => TuoLaJi.cardPower(TuoLaJi.parseCard(b.name), rank, trumpSuit) - TuoLaJi.cardPower(TuoLaJi.parseCard(a.name), rank, trumpSuit));
        return {
            cards: [safeSide[0]],
            pattern: TuoLaJi.getPattern([safeSide[0].name], rank, trumpSuit)
        };
    }

    // ===================== 步骤 11：不安全副牌 =====================
    // 如果全是不安全副牌（敌方缺门），兜底只能打这些，但优先打散牌/分牌
    const unsafeSide = [];
    for (const s of SUITS) unsafeSide.push(...suitPools[s]);
    if (unsafeSide.length > 0) {
        unsafeSide.sort((a, b) => TuoLaJi.cardPower(TuoLaJi.parseCard(b.name), rank, trumpSuit) - TuoLaJi.cardPower(TuoLaJi.parseCard(a.name), rank, trumpSuit));
        return {
            cards: [unsafeSide[0]],
            pattern: TuoLaJi.getPattern([unsafeSide[0].name], rank, trumpSuit)
        };
    }

    // ===================== 步骤 12：最后主牌 =====================
    if (trumpPool.length > 0) {
        for (const f of finders) {
            const res = f.fn(trumpPool);
            if (res) return res;
        }
        const pool = isLateGame ? trumpPool.filter(c => TuoLaJi.cardPower(TuoLaJi.parseCard(c.name), rank, trumpSuit) < 7000) : trumpPool;
        const finalPool = pool.length ? pool : trumpPool;
        finalPool.sort((a, b) => TuoLaJi.cardPower(TuoLaJi.parseCard(b.name), rank, trumpSuit) - TuoLaJi.cardPower(TuoLaJi.parseCard(a.name), rank, trumpSuit));
        return {
            cards: [finalPool[0]],
            pattern: TuoLaJi.getPattern([finalPool[0].name], rank, trumpSuit)
        };
    }

    // ===================== 步骤 13：兜底 =====================
    const card = hand[0];
    return {
        cards: [card],
        pattern: TuoLaJi.getPattern([card.name], rank, trumpSuit)
    };
}

// ★ 按牌名计数
function countCardsByName(cards) {
    const m = {};
    for (const c of cards) m[c.name] = (m[c.name] || 0) + 1;
    return m;
}

// ★ 检查所选能否扩展为某个有效匹配（按牌名计数）
function canExtendToMatch(proposed, matches) {
    if (!matches || matches.length === 0) return false;
    const selCount = countCardsByName(proposed);
    for (const m of matches) {
        const mCount = countCardsByName(m);
        let ok = true;
        for (const name in selCount) {
            if ((mCount[name] || 0) < selCount[name]) {
                ok = false;
                break;
            }
        }
        if (ok) return true;
    }
    return false;
}

// ============ 跟牌 filterCard 工厂（用 cardid 避免引用问题 + 对子优先） ============
// 跟牌 filterCard 工厂：轻量过滤（同花色不足时先出完该花色），合法性由 validateFollow 严格兜底
/*//纯宽松选牌
function makeFollowFilter(handInSuit, actualSize, matches, leadPattern, g) {
    const suitIds = new Set(handInSuit.map(c => c.cardid));

    let throwMatches = [];
    if (leadPattern.type === "throw") {
        throwMatches = analyzeThrowStructure(handInSuit, leadPattern, g);
    }

    return function(card) {
        const cardid = card.cardid;
        const selected = ui.selected.cards;
        const selectedInSuitIds = new Set();
        for (const c of selected) {
            if (suitIds.has(c.cardid)) selectedInSuitIds.add(c.cardid);
        }

        // 手牌不足：先选完该花色，再选其他
        if (handInSuit.length < actualSize) {
            if (selectedInSuitIds.size < handInSuit.length) return suitIds.has(cardid);
            return !suitIds.has(cardid);
        }

        // 甩牌：仅允许能拼成某个结构匹配的牌
        if (leadPattern.type === "throw") {
            if (throwMatches.length > 0) {
                const selectedArr = Array.from(selected);
                const compatible = throwMatches.filter(m =>
                    selectedArr.every(s => m.some(mc => mc.cardid === s.cardid))
                );
                if (compatible.length > 0) {
                    const allowed = new Set();
                    for (const m of compatible)
                        for (const c of m) allowed.add(c.cardid);
                    if (selectedArr.some(s => s.cardid === cardid)) return false;
                    return allowed.has(cardid);
                }
                return false;
            }
            return suitIds.has(cardid);
        }

        // 其余：允许该花色任意牌，由 validateFollow 严格校验
        return suitIds.has(cardid);
    };
}
*/
// 跟牌 filterCard 工厂：混合策略
// - 常规跟牌 → 精确过滤（不合规点不动）
// - 甩牌/纯散牌/手牌不足/候选为空或异常 → 宽松过滤（只限花色，validateFollow 兜底）
function makeFollowFilter(handInSuit, actualSize, matches, leadPattern, g) {
    const suitIds = new Set(handInSuit.map(c => c.cardid));
    const suitCards = handInSuit.slice();

    // 甩牌候选（可能为空）
    let throwMatches = [];
    if (leadPattern.type === "throw") {
        try {
            throwMatches = analyzeThrowStructure(handInSuit, leadPattern, g) || [];
        } catch (e) {
            console.error("[拖拉机] 甩牌候选枚举异常，降级宽松:", e);
            throwMatches = [];
        }
    }

    // 非甩牌、同花色够张数：尝试精确候选
    let allowedCombos = null; // null 表示宽松
    if (leadPattern.type !== "throw" && handInSuit.length >= actualSize) {
        let bestStep = null;
        try {
            bestStep = getBestFollowStep(suitCards, leadPattern, g);
        } catch (e) {
            console.error("[拖拉机] 阶梯判定异常，降级宽松:", e);
            bestStep = null;
        }
        // 纯散牌阶梯项 → 放行
        if (bestStep && bestStep.blocks.every(b => b === 1)) {
            allowedCombos = null;
        } else {
            try {
                allowedCombos = getFollowCandidatesForAI(suitCards, leadPattern, g);
            } catch (e) {
                console.error("[拖拉机] 候选枚举异常，降级宽松:", e);
                allowedCombos = null;
            }
            // ★ 防死锁：空集自动降级
            if (!allowedCombos || allowedCombos.length === 0) allowedCombos = null;
        }
    }

    return function(card) {
        const cardid = card.cardid;
        const selected = ui.selected.cards;
        const selInSuitIds = new Set();
        for (const c of selected) {
            if (suitIds.has(c.cardid)) selInSuitIds.add(c.cardid);
        }

        // 手牌不足：先出完该花色，再选其他花色
        if (handInSuit.length < actualSize) {
            if (selInSuitIds.size < handInSuit.length) return suitIds.has(cardid);
            return !suitIds.has(cardid);
        }

        // 甩牌：有精确候选则精确，否则宽松
        if (leadPattern.type === "throw") {
            if (throwMatches.length > 0) {
                const selArr = Array.from(selected);
                const compatible = throwMatches.filter(m =>
                    selArr.every(s => m.some(mc => mc.cardid === s.cardid))
                );
                if (compatible.length > 0) {
                    const allowed = new Set();
                    for (const m of compatible)
                        for (const c of m) allowed.add(c.cardid);
                    if (selArr.some(s => s.cardid === cardid)) return false;
                    return allowed.has(cardid);
                }
                return false;
            }
            return suitIds.has(cardid);
        }

        // 精确过滤
        if (allowedCombos) {
            const proposed = Array.from(selected);
            if (!proposed.some(c => c.cardid === cardid)) proposed.push(card);
            return canExtendToMatch(proposed, allowedCombos);
        }

        // 宽松过滤：只限花色
        return suitIds.has(cardid);
    };
}

// ★ 新增：校验跟甩牌是否合规
function validateThrowFollow(cards, handInSuit, throwPattern, g) {
    const totalSize = throwPattern.size;
    const suit = throwPattern.suit;

    if (cards.length !== totalSize) return { ok: false, reason: `张数不匹配（需要${totalSize}张）` };

    const allInSuit = cards.every(c => {
        const p = TuoLaJi.parseCard(c.name);
        return !p.joker && p.suit === suit && !TuoLaJi.isTrump(p, g.rank, g.trumpSuit);
    });
    if (!allInSuit) return { ok: false, reason: "必须全部跟同花色" };

    const possibleMatches = analyzeThrowStructure(handInSuit, throwPattern, g);
    if (possibleMatches.length > 0) {
        const playedStruct = TuoLaJi.parseThrowStructure(cards, g.rank, g.trumpSuit).slice().sort((a, b) => b.count - a.count);
        const targetStruct = (throwPattern.struct || []).slice().sort((a, b) => b.count - a.count);

        if (playedStruct.length !== targetStruct.length) return { ok: false, reason: "有同花色同结构必须跟" };
        for (let i = 0; i < targetStruct.length; i++) {
            if (playedStruct[i].count !== targetStruct[i].count) return { ok: false, reason: "牌型结构不匹配" };
        }
    } else {
        // ★ 核心修复：凑不出结构时，必须遵循降级原则（有对子优先出对子，不能拆）
        const playedGroups = buildValueGroups(cards, g.rank, g.trumpSuit);
        const handGroups = buildValueGroups(handInSuit, g.rank, g.trumpSuit);
        
        const playedPairCount = playedGroups.reduce((sum, grp) => sum + Math.floor(grp.cards.length / 2), 0);
        const handPairCount = handGroups.reduce((sum, grp) => sum + Math.floor(grp.cards.length / 2), 0);
        
        if (handPairCount > 0) {
            const maxNeededPairs = Math.min(handPairCount, Math.floor(cards.length / 2));
            if (playedPairCount < maxNeededPairs) {
                return { ok: false, reason: "有对子必须优先出对子凑牌，不能拆散出散牌" };
            }
        }
    }
    
    return { ok: true };
}

function validateFollow(cards, player, leadPattern, g) {
    const wantSize = TuoLaJi.getPatternSize(leadPattern);
    const hand = player.getCards("h");
    const isShort = cards.length < wantSize;

    if (!isShort && cards.length !== wantSize) return {
        ok: false,
        reason: "张数不匹配"
    };
    if (isShort && cards.length !== hand.length) return {
        ok: false,
        reason: "手牌不足时必须全出"
    };
    if (isShort) return {
        ok: true
    };

    const leadSuit = leadPattern.isTrump ? "trump" : leadPattern.suit;
    const handInSuit = hand.filter(c => isInSuit(c, leadSuit, g));
    const playedInSuit = cards.filter(c => isInSuit(c, leadSuit, g));

    const playedPattern = TuoLaJi.getPattern(cards.map(c => c.name), g.rank, g.trumpSuit);
    playedPattern.cards = cards;

    // ===================== 甩牌跟牌 =====================
    if (leadPattern.type === "throw") {
        if (handInSuit.length >= wantSize) {
            return validateThrowFollow(cards, handInSuit, leadPattern, g);
        } else if (handInSuit.length > 0) {
            if (playedInSuit.length !== handInSuit.length) return {
                ok: false,
                reason: "同花色手牌必须全出"
            };
            return {
                ok: true
            };
        } else {
            return {
                ok: true
            };
        }
    }

    // ===================== 同花色足够 =====================
    if (handInSuit.length >= wantSize) {
        if (playedInSuit.length !== wantSize) return {
            ok: false,
            reason: "必须全部跟同花色"
        };

        const SPECIAL = ["bomb", "windmill", "four_two", "four_four"];
        const playedIsSpecial = playedPattern && playedPattern.valid && SPECIAL.includes(playedPattern.type);

        // 首出特殊拖拉机
        if (SPECIAL.includes(leadPattern.type)) {
            const step = getBestFollowStep(handInSuit, leadPattern, g);
            if (step) {
                if (matchStructureOfCards(cards, step.blocks, step.adjacent, g)) return {
                    ok: true
                };
                return {
                    ok: false,
                    reason: `跟牌不符合最优结构（应优先跟：${step.label}）`
                };
            }
            return {
                ok: true
            };
        }

        // ===== 首出普通连拖 =====
        if (leadPattern.type === "tractor") {
            if (playedPattern && playedPattern.valid) {
                if (playedPattern.type === "tractor" && playedPattern.size === leadPattern.size && playedPattern.length === leadPattern.length) {
                    return {
                        ok: true
                    };
                }
                if (playedIsSpecial) return {
                    ok: true
                };
            }

            const step = getBestFollowStep(handInSuit, leadPattern, g);
            if (step) {
                if (step.adjacent || step.partialAdjacent) {
                    if (!matchStructureOfCards(cards, step.blocks, step.adjacent, g, step.partialAdjacent)) {
                        return {
                            ok: false,
                            reason: `有同形式的拖拉机必须优先出拖拉机！`
                        };
                    }
                    return {
                        ok: true
                    };
                }

                for (const b of buildPairLevelBlocks(wantSize)) {
                    if (b.every(x => x === 1)) continue;
                    if (matchStructureOfCards(cards, b, false, g)) return {
                        ok: true
                    };
                }
                if (matchStructureOfCards(cards, Array(wantSize).fill(1), false, g)) return {
                    ok: true
                };
            } else {
                if (matchStructureOfCards(cards, Array(wantSize).fill(1), false, g)) return {
                    ok: true
                };
            }
            return {
                ok: false,
                reason: "跟牌不符合最优结构"
            };
        }

        // 单张 / 对子 / 三条：严格阶梯
        const step = getBestFollowStep(handInSuit, leadPattern, g);
        if (step) {
            if (matchStructureOfCards(cards, step.blocks, step.adjacent, g)) return {
                ok: true
            };
            return {
                ok: false,
                reason: `跟牌不符合最优结构（应优先跟：${step.label}）`
            };
        }
        return {
            ok: true
        };
    }

    // ===================== 同花色不足但有 =====================
    if (handInSuit.length > 0) {
        if (playedInSuit.length !== handInSuit.length) return {
            ok: false,
            reason: "同花色手牌必须全出"
        };
        return {
            ok: true
        };
    }

    // 完全没该花色：放行
    return {
        ok: true
    };
}

// ============ 玩家出牌 ============
async function playerPlay(seat, currentPlays) {
    const g = game.tuolaji;
    const p = game.players[seat];
    const leadPattern = (currentPlays && currentPlays.length > 0) ? currentPlays[0].pattern : null;
    const leadDesc = (currentPlays && currentPlays.length > 0) ? patternText(currentPlays[0].pattern, currentPlays[0].cards) : "";

    if (!leadPattern) {
        while (true) {
            ui.selected.cards.length = 0;
            const res = await p.chooseCard({
                prompt: "请出牌（首家）",
                selectCard: [1, 60],
                filterCard: () => true,
                ai: (card) => -TuoLaJi.cardPower(TuoLaJi.parseCard(card.name), g.rank, g.trumpSuit),
            }).forResult();
            if (!res.bool) continue;
            const pattern = TuoLaJi.getPattern(res.cards.map(c => c.name), g.rank, g.trumpSuit);

            // ★ 甩牌合法性：全主牌 或 同花色纯副牌（任何牌都能甩）
            if (!pattern.valid || pattern.type === "mixed") {
                const allTrumpSelected = res.cards.every(c =>
                    TuoLaJi.isTrump(TuoLaJi.parseCard(c.name), g.rank, g.trumpSuit)
                );
                let validThrow = false;
                if (allTrumpSelected) {
                    validThrow = true; // 全主牌甩牌：允许（含王、级牌、主花色）
                } else {
                    const firstP = TuoLaJi.parseCard(res.cards[0].name);
                    if (!firstP.joker && !TuoLaJi.isTrump(firstP, g.rank, g.trumpSuit)) {
                        validThrow = res.cards.every(c => {
                            const cp = TuoLaJi.parseCard(c.name);
                            if (cp.joker) return false;
                            if (TuoLaJi.isTrump(cp, g.rank, g.trumpSuit)) return false;
                            return cp.suit === firstP.suit;
                        });
                    }
                }
                if (!validThrow) {
                    game.print("无效牌型：甩牌必须是同花色副牌，或全主牌");
                    continue;
                }
            }
            return {
                cards: res.cards,
                pattern
            };
        }
    }

    // ===================== 以下跟牌逻辑完全不变 =====================
    const wantSize = TuoLaJi.getPatternSize(leadPattern);
    const hand = p.getCards("h");
    const actualSize = Math.min(wantSize, hand.length);
    const leadSuit = leadPattern.isTrump ? "trump" : leadPattern.suit;
    const handInSuit = hand.filter(c => isInSuit(c, leadSuit, g));
    const matches = handInSuit.length >= actualSize ? analyzeSuitForStructure(handInSuit, leadPattern, g) : [];

    if (handInSuit.length > 0 && p === game.me) {
        autoScrollToSuit(handInSuit);
    }

    while (true) {
        ui.selected.cards.length = 0;

        const res = await p.chooseCard({
            prompt: `首家${SEAT_NAMES[currentPlays[0].seat]}方打出：${leadDesc}。请跟牌（${actualSize}张）`,
            selectCard: [actualSize, actualSize],
            complexCard: true,
            filterCard: makeFollowFilter(handInSuit, actualSize, matches, leadPattern, g),
            ai: (card) => -TuoLaJi.cardPower(TuoLaJi.parseCard(card.name), g.rank, g.trumpSuit),
        }).forResult();
        if (!res.bool) continue;
        const check = validateFollow(res.cards, p, leadPattern, g);
        if (!check.ok) {
            game.print("跟牌不合规：" + check.reason);
            continue;
        }
        const pattern = TuoLaJi.getPattern(res.cards.map(c => c.name), g.rank, g.trumpSuit);
        return {
            cards: res.cards,
            pattern
        };
    }
}

// ★ 自动滑动扑克牌
function autoScrollToSuit(handInSuit) {
    if (!handInSuit.length) return;
    setTimeout(() => {
        try {
            const targetCard = handInSuit[0];
            if (!targetCard) return;

            // 1. 触发原生滚动，强行将目标牌带到可视区域中间
            targetCard.scrollIntoView({
                behavior: 'smooth',
                inline: 'center',
                block: 'nearest'
            });

            // 2. 启动全局滚动锁
            // 因为 scrollIntoView 是平滑动画（大概持续几百毫秒），
            // 我们每 16 毫秒（一帧）检查一次，把外层容器的 scrollLeft/Top 强制归零。
            let count = 0;
            const lockInterval = setInterval(() => {
                // 复位整个网页
                if (window.scrollX !== 0 || window.scrollY !== 0) {
                    window.scrollTo(0, 0);
                }
                // 复位 html 和 body
                if (document.documentElement.scrollLeft !== 0) document.documentElement.scrollLeft = 0;
                if (document.documentElement.scrollTop !== 0) document.documentElement.scrollTop = 0;
                if (document.body.scrollLeft !== 0) document.body.scrollLeft = 0;
                if (document.body.scrollTop !== 0) document.body.scrollTop = 0;
                // 复位无名杀的主窗口和战场
                if (ui.window && ui.window.scrollLeft !== 0) ui.window.scrollLeft = 0;
                if (ui.window && ui.window.scrollTop !== 0) ui.window.scrollTop = 0;
                if (ui.arena && ui.arena.scrollLeft !== 0) ui.arena.scrollLeft = 0;
                if (ui.arena && ui.arena.scrollTop !== 0) ui.arena.scrollTop = 0;

                count++;
                if (count > 60) clearInterval(lockInterval); // 持续约 1 秒后解除锁定，防止影响后续你的手动滑动
            }, 16);

        } catch (e) {
            console.warn("Auto scroll failed:", e);
        }
    }, 150);
}

// ★ 只做高亮，不动位置
function highlightSuitCards(player, handInSuit) {
    const hs = player.getCards("h");
    const suitIds = new Set(handInSuit.map(c => c.cardid));
    for (let i = 0; i < hs.length; i++) {
        if (suitIds.has(hs[i].cardid)) {
            hs[i].classList.add("tuolaji-follow-target");
        }
    }
}

function clearSuitCardsHighlight(player) {
    const hs = player.getCards("h");
    for (let c of hs) {
        c.classList.remove("tuolaji-follow-target");
    }
}

// ★ 新增：枚举某牌池中所有指定张数的合法组合（毙牌用，张数相同即可）
function findAllCombosOfSize(pool, targetSize, g) {
    const result = [];
    if (!Array.isArray(pool) || pool.length < targetSize || targetSize <= 0) return result;

    const rank = g.rank,
        trumpSuit = g.trumpSuit;
    const seen = new Set();

    const tryAdd = (cards) => {
        if (cards.length !== targetSize) return;
        const p = TuoLaJi.getPattern(cards.map(c => c.name), rank, trumpSuit);
        if (!p.valid) return;
        if (TuoLaJi.getPatternSize(p) !== targetSize) return;
        const key = cards.map(c => c.cardid).sort().join(",");
        if (seen.has(key)) return;
        seen.add(key);
        result.push({
            cards,
            pattern: p
        });
    };

    const gl = buildValueGroups(pool, rank, trumpSuit);

    // 单张
    if (targetSize === 1) {
        for (const gx of gl) tryAdd([gx.cards[0]]);
        return result;
    }
    // 对子
    if (targetSize === 2) {
        for (const gx of gl)
            if (gx.cards.length >= 2) tryAdd(gx.cards.slice(0, 2));
        return result;
    }
    // 三条
    if (targetSize === 3) {
        for (const gx of gl)
            if (gx.cards.length >= 3) tryAdd(gx.cards.slice(0, 3));
        return result;
    }
    // 4 张：炸弹 + 两连拖
    if (targetSize === 4) {
        for (const gx of gl)
            if (gx.cards.length >= 4) tryAdd(gx.cards.slice(0, 4));
        const pairs = gl.filter(gx => gx.cards.length >= 2);
        for (let i = 0; i < pairs.length - 1; i++) {
            if (pairs[i + 1].val - pairs[i].val === 1) {
                tryAdd([...pairs[i].cards.slice(0, 2), ...pairs[i + 1].cards.slice(0, 2)]);
            }
        }
        return result;
    }
    // 6 张：风车 + 四拖二 + 三连拖
    if (targetSize === 6) {
        const triples = gl.filter(gx => gx.cards.length >= 3);
        for (let i = 0; i < triples.length - 1; i++) {
            if (triples[i + 1].val - triples[i].val === 1) {
                tryAdd([...triples[i].cards.slice(0, 3), ...triples[i + 1].cards.slice(0, 3)]);
            }
        }
        const fours = gl.filter(gx => gx.cards.length >= 4);
        const pairs = gl.filter(gx => gx.cards.length >= 2);
        for (const four of fours) {
            for (const pair of pairs) {
                if (four === pair) continue;
                if (Math.abs(four.val - pair.val) === 1) {
                    tryAdd([...four.cards.slice(0, 4), ...pair.cards.slice(0, 2)]);
                }
            }
        }
        for (let i = 0; i <= pairs.length - 3; i++) {
            if (pairs[i + 1].val - pairs[i].val === 1 && pairs[i + 2].val - pairs[i + 1].val === 1) {
                tryAdd([...pairs[i].cards.slice(0, 2), ...pairs[i + 1].cards.slice(0, 2), ...pairs[i + 2].cards.slice(0, 2)]);
            }
        }
        return result;
    }
    // 8 张：四拖四 + 四连拖
    if (targetSize === 8) {
        const fours = gl.filter(gx => gx.cards.length >= 4);
        for (let i = 0; i < fours.length; i++) {
            for (let j = i + 1; j < fours.length; j++) {
                if (Math.abs(fours[i].val - fours[j].val) === 1) {
                    tryAdd([...fours[i].cards.slice(0, 4), ...fours[j].cards.slice(0, 4)]);
                }
            }
        }
        const pairs = gl.filter(gx => gx.cards.length >= 2);
        for (let i = 0; i <= pairs.length - 4; i++) {
            let ok = true;
            for (let j = 0; j < 3; j++) {
                if (pairs[i + j + 1].val - pairs[i + j].val !== 1) {
                    ok = false;
                    break;
                }
            }
            if (ok) {
                tryAdd([
                    ...pairs[i].cards.slice(0, 2), ...pairs[i + 1].cards.slice(0, 2),
                    ...pairs[i + 2].cards.slice(0, 2), ...pairs[i + 3].cards.slice(0, 2)
                ]);
            }
        }
        return result;
    }
    // 其他张数：通用连拖
    for (let size = 2; size <= 4; size++) {
        if (targetSize % size !== 0) continue;
        const length = targetSize / size;
        if (length < 2) continue;
        const validGroups = gl.filter(gx => gx.cards.length >= size);
        for (let i = 0; i <= validGroups.length - length; i++) {
            let ok = true;
            for (let j = 0; j < length - 1; j++) {
                if (validGroups[i + j + 1].val - validGroups[i + j].val !== 1) {
                    ok = false;
                    break;
                }
            }
            if (ok) {
                const cards = [];
                for (let j = 0; j < length; j++) cards.push(...validGroups[i + j].cards.slice(0, size));
                tryAdd(cards);
            }
        }
    }
    return result;
}

// 判断玩家手牌是否能大过某个牌型
function canHandBeat(hand, leadPattern, g) {
    const size = TuoLaJi.getPatternSize(leadPattern);
    if (hand.length < size) return false;

    if (leadPattern.type === "throw") {
        const trumps = hand.filter(c => TuoLaJi.isTrump(TuoLaJi.parseCard(c.name), g.rank, g.trumpSuit));
        if (trumps.length >= size) {
            const matches = analyzeThrowStructure(trumps, leadPattern, g);
            if (matches.length > 0) return true;
        }
        return false;
    }

    const leadSuit = leadPattern.isTrump ? "trump" : leadPattern.suit;
    const inSuit = hand.filter(c => isInSuit(c, leadSuit, g));
    
    if (inSuit.length >= size) {
        if (leadPattern.type === "single") {
            for (const c of inSuit) {
                const p = TuoLaJi.getPattern([c.name], g.rank, g.trumpSuit);
                if (p.valid && TuoLaJi.comparePatterns(p, leadPattern) > 0) return true;
            }
        } else {
            const allPossible = analyzeSuitForStructure(inSuit, leadPattern, g);
            for (let m of allPossible) {
                const p = TuoLaJi.getPattern(m.map(c => c.name), g.rank, g.trumpSuit);
                if (p.valid && TuoLaJi.comparePatterns(p, leadPattern) > 0) return true;
            }
        }
    }
    
    if (!leadPattern.isTrump) {
        const trumps = hand.filter(c => TuoLaJi.isTrump(TuoLaJi.parseCard(c.name), g.rank, g.trumpSuit));
        if (trumps.length >= size) {
            if (leadPattern.type === "single") {
                for (const c of trumps) {
                    const p = TuoLaJi.getPattern([c.name], g.rank, g.trumpSuit);
                    if (p.valid && TuoLaJi.comparePatterns(p, leadPattern) > 0) return true;
                }
            } else {
                const combos = findAllCombosOfSize(trumps, size, g);
                for (const c of combos) {
                    if (TuoLaJi.structureMatch(c.pattern, leadPattern)) return true;
                }
            }
        }
    }
    return false;
}

// 检查当前领先的队友是否绝对安全（对手无法大过）
function checkTeamAbsolutelyWins(winnerSeat, currentPlays, g) {
    const lead = currentPlays[0].pattern;
    for (let i = 0; i < 4; i++) {
        if (i % 2 === winnerSeat % 2) continue; // 跳过本队队友
        const p = game.players[i];
        if (!p.isAlive()) continue;
        if (canHandBeat(p.getCards("h"), lead, g)) return false;
    }
    return true;
}

// ============ AI 出牌 ============
function getSuitCards(hand, leadSuit, g) {
    return hand.filter(c => isInSuit(c, leadSuit, g));
}

// ★ 新增：甩牌跟牌选牌，优先按结构凑，凑不出按大组优先，最后散牌补
function pickThrowFollowCards(inSuitCards, throwPattern, g, preferPoints) {
    const totalSize = throwPattern.size;
    const struct = (throwPattern.struct || []).slice().sort((a, b) => b.count - a.count);
    const isPoint = (p) => p.number === 5 || p.number === 10 || p.number === 13;

    // 1. 完整匹配
    const fullMatches = analyzeThrowStructure(inSuitCards, throwPattern, g);
    if (fullMatches.length > 0) {
        fullMatches.sort((a, b) => {
            if (preferPoints) {
                const ptsA = TuoLaJi.countPoints(a.map(c => c.name));
                const ptsB = TuoLaJi.countPoints(b.map(c => c.name));
                if (ptsA !== ptsB) return ptsB - ptsA;
            }
            const pa = TuoLaJi.getPattern(a.map(c => c.name), g.rank, g.trumpSuit);
            const pb = TuoLaJi.getPattern(b.map(c => c.name), g.rank, g.trumpSuit);
            return (pa.valid ? pa.power : 0) - (pb.valid ? pb.power : 0);
        });
        return fullMatches[0];
    }

    // 2. 凑不出完整：按结构大组优先凑部分
    const parsed = inSuitCards.map(c => ({
        card: c,
        p: TuoLaJi.parseCard(c.name)
    }));
    const groups = {};
    for (const x of parsed) {
        const key = x.p.joker ? ("joker_" + x.p.joker) : (x.p.suit + "_" + x.p.number);
        (groups[key] = groups[key] || []).push(x);
    }
    const groupList = Object.keys(groups).map(k => ({
        key: k,
        cards: groups[k],
        count: groups[k].length,
        power: TuoLaJi.cardPower(groups[k][0].p, g.rank, g.trumpSuit)
    })).sort((a, b) => a.power - b.power);

    const picked = [];
    const usedKeys = new Set();

    for (const s of struct) {
        let best = null;
        for (const grp of groupList) {
            if (usedKeys.has(grp.key)) continue;
            if (grp.count < s.count) continue;
            if (!best || grp.power < best.power) best = grp;
        }
        if (best) {
            usedKeys.add(best.key);
            picked.push(...best.cards.slice(0, s.count).map(x => x.card));
        }
    }

    // 散牌补
    if (picked.length < totalSize) {
        const pickedSet = new Set(picked.map(c => c.cardid));
        const rest = parsed.filter(x => {
            if (pickedSet.has(x.card.cardid)) return false;
            const key = x.p.joker ? ("joker_" + x.p.joker) : (x.p.suit + "_" + x.p.number);
            return !usedKeys.has(key);
        });
        rest.sort((a, b) => {
            if (preferPoints) {
                const pa = isPoint(a.p) ? 1 : 0,
                    pb = isPoint(b.p) ? 1 : 0;
                if (pa !== pb) return pb - pa;
            }
            const ka = a.p.joker ? ("joker_" + a.p.joker) : (a.p.suit + "_" + a.p.number);
            const kb = b.p.joker ? ("joker_" + b.p.joker) : (b.p.suit + "_" + b.p.number);
            const sa = (groups[ka] || []).length;
            const sb = (groups[kb] || []).length;
            if (sa !== sb) return sa - sb;
            return TuoLaJi.cardPower(a.p, g.rank, g.trumpSuit) - TuoLaJi.cardPower(b.p, g.rank, g.trumpSuit);
        });
        for (const x of rest) {
            if (picked.length >= totalSize) break;
            picked.push(x.card);
        }
    }

    return picked.slice(0, totalSize);
}

// ★ 新增：不能大时选最小的、尽量不打分牌的跟牌
function pickMinFollowCards(inSuitCards, leadPattern, matches, actualSize, g) {
    const isPoint = (p) => p.number === 5 || p.number === 10 || p.number === 13;

    // 1. 有完整匹配：从 matches 里选（分牌最少+牌力最小）
    if (matches && matches.length > 0) {
        const scored = matches.map(m => {
            const pat = TuoLaJi.getPattern(m.map(c => c.name), g.rank, g.trumpSuit);
            const pts = TuoLaJi.countPoints(m.map(c => c.name));
            return {
                cards: m,
                pts,
                power: pat.valid ? pat.power : 0
            };
        });
        scored.sort((a, b) => {
            if (a.pts !== b.pts) return a.pts - b.pts;
            return a.power - b.power;
        });
        return scored[0].cards;
    }

    // 2. ★ 无大牌型匹配，但张数够、首牌不是单张：优先凑对子
    if (actualSize >= 2 && leadPattern.type !== "single") {
        const parsed = inSuitCards.map(c => ({
            card: c,
            p: TuoLaJi.parseCard(c.name)
        }));
        const groups = {};
        for (const x of parsed) {
            const key = x.p.joker ? ("joker_" + x.p.joker) : (x.p.suit + "_" + x.p.number);
            (groups[key] = groups[key] || []).push(x);
        }
        const pairGroups = Object.values(groups).filter(grp => grp.length >= 2);
        if (pairGroups.length > 0) {
            // 非分牌优先、牌力最小优先
            pairGroups.sort((a, b) => {
                const ptsA = a.slice(0, 2).reduce((s, x) => s + (isPoint(x.p) ? 1 : 0), 0);
                const ptsB = b.slice(0, 2).reduce((s, x) => s + (isPoint(x.p) ? 1 : 0), 0);
                if (ptsA !== ptsB) return ptsA - ptsB;
                return TuoLaJi.cardPower(a[0].p, g.rank, g.trumpSuit) - TuoLaJi.cardPower(b[0].p, g.rank, g.trumpSuit);
            });
            const pairsNeeded = Math.floor(actualSize / 2);
            const picked = [];
            for (const grp of pairGroups) {
                if (picked.length >= pairsNeeded * 2) break;
                picked.push(...grp.slice(0, 2).map(x => x.card));
            }
            if (picked.length < actualSize) {
                const pickedSet = new Set(picked.map(c => c.cardid));
                const rest = parsed.filter(x => !pickedSet.has(x.card.cardid));
                const strength = new Map();
                for (const key in groups) {
                    const sz = groups[key].length;
                    let base = sz >= 4 ? 4 : sz >= 3 ? 3 : sz >= 2 ? 2 : 0;
                    for (const x of groups[key]) strength.set(x.card, base);
                }
                rest.sort((a, b) => {
                    const sa = strength.get(a.card) || 0,
                        sb = strength.get(b.card) || 0;
                    if (sa !== sb) return sa - sb;
                    const pa = isPoint(a.p) ? 1 : 0,
                        pb = isPoint(b.p) ? 1 : 0;
                    if (pa !== pb) return pa - pb;
                    return TuoLaJi.cardPower(a.p, g.rank, g.trumpSuit) - TuoLaJi.cardPower(b.p, g.rank, g.trumpSuit);
                });
                for (const x of rest) {
                    if (picked.length >= actualSize) break;
                    picked.push(x.card);
                }
            }
            return picked.slice(0, actualSize);
        }
    }

    // 3. 最后散牌
    const parsed = inSuitCards.map(c => ({
        card: c,
        p: TuoLaJi.parseCard(c.name)
    }));
    const groups = {};
    for (const x of parsed) {
        const key = x.p.joker ? ("joker_" + x.p.joker) : (x.p.suit + "_" + x.p.number);
        (groups[key] = groups[key] || []).push(x);
    }
    const strength = new Map();
    for (const key in groups) {
        const sz = groups[key].length;
        let base = sz >= 4 ? 4 : sz >= 3 ? 3 : sz >= 2 ? 2 : 0;
        for (const x of groups[key]) strength.set(x.card, base);
    }
    const sorted = parsed.slice().sort((a, b) => {
        const sa = strength.get(a.card) || 0,
            sb = strength.get(b.card) || 0;
        if (sa !== sb) return sa - sb;
        const pa = isPoint(a.p) ? 1 : 0,
            pb = isPoint(b.p) ? 1 : 0;
        if (pa !== pb) return pa - pb;
        return TuoLaJi.cardPower(a.p, g.rank, g.trumpSuit) - TuoLaJi.cardPower(b.p, g.rank, g.trumpSuit);
    });
    return sorted.slice(0, actualSize).map(x => x.card);
}

// ============ AI 跟牌（队友稳赢送分，否则垫最小） ============
function aiPlay(seat, currentPlays, g) {
    const p = game.players[seat];
    const hand = p.getCards("h");
    const leadPattern = currentPlays.length > 0 ? currentPlays[0].pattern : null;
    const parsed = hand.map(c => ({
        card: c,
        p: TuoLaJi.parseCard(c.name)
    }));
    const isPoint = (p2) => p2.number === 5 || p2.number === 10 || p2.number === 13;

    if (!leadPattern) return findBestLead(hand, g, seat);

    const wantSize = TuoLaJi.getPatternSize(leadPattern);
    const actualSize = Math.min(wantSize, hand.length);
    const leadSuit = leadPattern.isTrump ? "trump" : leadPattern.suit;
    const team = seat % 2;
    const isLastPlayer = currentPlays.length === 3; // ★ 是否末位

    let winIdx = 0;
    for (let i = 1; i < currentPlays.length; i++) {
        const pl = currentPlays[i];
        if (!pl || !pl.pattern) continue;
        if (pl.cards.length !== currentPlays[0].cards.length) continue;
        if (TuoLaJi.comparePatterns(pl.pattern, currentPlays[winIdx].pattern) > 0) winIdx = i;
    }
    const winningSeat = currentPlays[winIdx].seat;
    const currentBestPattern = currentPlays[winIdx].pattern;
    const teammateWinning = currentPlays.length > 0 && (winningSeat % 2 === team);

    let teammateAbsolutelyWinning = false;
    if (teammateWinning && currentBestPattern) {
        teammateAbsolutelyWinning = checkTeamAbsolutelyWins(winningSeat, currentPlays, g);
    }

    let teammateLack = false;
    if (leadSuit !== "trump") {
        if (g.lackSuit[winningSeat][leadSuit]) teammateLack = true;
        else if (currentPlays[0].seat === seat && g.lackSuit[(seat + 2) % 4][leadSuit]) {
            teammateLack = true;
        }
    }

    const inSuit = parsed.filter(x => isInSuit(x.card, leadSuit, g));

    // ===================== 甩牌特殊处理 =====================
    if (leadPattern.type === "throw") {
        const inSuitCards = inSuit.map(x => x.card);
        const trumpCards = parsed.filter(x => TuoLaJi.isTrump(x.p, g.rank, g.trumpSuit));
        const totalSize = actualSize;

        if (inSuitCards.length >= totalSize) {
            const picked = pickThrowFollowCards(inSuitCards, leadPattern, g, teammateAbsolutelyWinning);
            if (picked.length === totalSize) {
                return {
                    cards: picked,
                    pattern: TuoLaJi.getPattern(picked.map(c => c.name), g.rank, g.trumpSuit)
                };
            }
        }

        if (inSuitCards.length > 0) {
            const rest = parsed.filter(x => !inSuit.includes(x));
            const restNeed = totalSize - inSuitCards.length;
            const discarded = pickDiscardCards(rest, restNeed, isPoint, teammateAbsolutelyWinning, teammateLack, g);
            const picked = inSuitCards.concat(discarded);
            return {
                cards: picked,
                pattern: TuoLaJi.getPattern(picked.map(c => c.name), g.rank, g.trumpSuit)
            };
        }

        const trumpMatches = analyzeThrowStructure(trumpCards.map(x => x.card), leadPattern, g);
        const roundPoints = TuoLaJi.countPoints(currentPlays.flatMap(pl => pl.cards.map(c => c.name)));

        let shouldBite = false;
        if (trumpMatches.length > 0 && !teammateAbsolutelyWinning) {
            if (roundPoints >= 20) shouldBite = true;
            else if (roundPoints >= 10) shouldBite = Math.random() < 0.9;
            else if (roundPoints > 0) shouldBite = Math.random() < 0.75;
            else shouldBite = trumpCards.length > 8 && Math.random() < 0.6;
        }

        if (shouldBite) {
            trumpMatches.sort((a, b) => {
                const pa = TuoLaJi.parseCard(a[0].name),
                    pb = TuoLaJi.parseCard(b[0].name);
                return TuoLaJi.cardPower(pa, g.rank, g.trumpSuit) - TuoLaJi.cardPower(pb, g.rank, g.trumpSuit);
            });
            const best = trumpMatches[0];
            return {
                cards: best,
                pattern: TuoLaJi.getPattern(best.map(c => c.name), g.rank, g.trumpSuit)
            };
        }

        const discarded = pickDiscardCards(parsed, totalSize, isPoint, teammateAbsolutelyWinning, teammateLack, g);
        return {
            cards: discarded,
            pattern: TuoLaJi.getPattern(discarded.map(c => c.name), g.rank, g.trumpSuit)
        };
    }

    // ★ 判断后续未出的敌人中，是否有人已经缺该花色
    const playedSeats = new Set(currentPlays.map(pl => pl.seat));
    let hasEnemyThreat = false;
    for (let i = 0; i < 4; i++) {
        if (i === seat) continue;
        if (i % 2 === team) continue; // 队友不算威胁
        if (playedSeats.has(i)) continue; // 已出过
        if (g.lackSuit[i][leadSuit]) {
            hasEnemyThreat = true;
            break;
        }
    }

    // ===================== 毙牌分支 =====================
    if (inSuit.length === 0) {
        const trumpCards = parsed.filter(x => TuoLaJi.isTrump(x.p, g.rank, g.trumpSuit));
        const roundPoints = TuoLaJi.countPoints(currentPlays.flatMap(pl => pl.cards.map(c => c.name)));
        const handSize = hand.length;
        const isLateGame = handSize <= 15;
        const isEndGame = handSize <= 8;
        const isEnemyWinning = winningSeat % 2 !== team;

        const isTeammateLead = currentPlays[0].seat !== seat && currentPlays[0].seat % 2 === team;
        const teammateLeadingBig = isTeammateLead && teammateWinning && currentBestPattern && (
            currentBestPattern.power >= 13 || ["tractor", "four_two", "four_four", "windmill", "bomb"].includes(currentBestPattern.type)
        );

        let teammatePlayedSmall = false;
        for (const pl of currentPlays) {
            if (pl.seat === seat) continue;
            if (pl.seat % 2 === team) {
                if (pl.pattern && pl.pattern.power < currentBestPattern.power * 0.6) {
                    teammatePlayedSmall = true;
                }
            }
        }

        const combos = findAllCombosOfSize(trumpCards.map(x => x.card), wantSize, g);
        const beaters = [];
        for (const c of combos) {
            if (!TuoLaJi.structureMatch(c.pattern, leadPattern)) continue;
            if (TuoLaJi.comparePatterns(c.pattern, currentBestPattern) <= 0) continue;
            const pts = TuoLaJi.countPoints(c.cards.map(cc => cc.name));
            beaters.push({
                ...c,
                pts
            });
        }

        if (beaters.length > 0 && !teammateAbsolutelyWinning) {
            const nonPointBeaters = beaters.filter(c => c.pts === 0).sort((a, b) => TuoLaJi.comparePatterns(a.pattern, b.pattern));
            const pointBeaters = beaters.filter(c => c.pts > 0).sort((a, b) => TuoLaJi.comparePatterns(a.pattern, b.pattern));

            let best = null;
            if (isLastPlayer) {
                // ★ 末位：选最小的能赢即可，优先非分牌
                best = nonPointBeaters[0] || pointBeaters[0] || beaters[0];
            } else if (hasEnemyThreat) {
                // ★ 非末位有威胁：必须选整体最大的组合，防止被后手反毙
                const allSorted = beaters.slice().sort((a, b) => TuoLaJi.comparePatterns(a.pattern, b.pattern));
                best = allSorted[allSorted.length - 1];
            } else {
                // 非末位无威胁：选最小的，优先非分牌
                best = nonPointBeaters[0] || pointBeaters[0] || beaters[0];
            }

            if (best) {
                const hasBigTrump = best.cards.some(c => {
                    const cp = TuoLaJi.parseCard(c.name);
                    return TuoLaJi.cardPower(cp, g.rank, g.trumpSuit) >= 7000;
                });
                const trumpAfter = trumpCards.length - best.cards.length;

                let shouldBite = false;

                if (isTeammateLead && !teammateAbsolutelyWinning && !teammateLeadingBig) {
                    if (roundPoints > 0 || isEnemyWinning) shouldBite = true;
                    else shouldBite = Math.random() < 0.7;
                } else if (teammateLeadingBig) {
                    shouldBite = false;
                } else if (roundPoints > 0) {
                    if (isEndGame && hasBigTrump && trumpAfter < 1) shouldBite = false;
                    else if (isEndGame && hasBigTrump && trumpAfter < 2 && roundPoints < 15) shouldBite = false;
                    else shouldBite = true;
                } else {
                    if (!isEnemyWinning) shouldBite = false;
                    else if (isEndGame) shouldBite = false;
                    else if (teammatePlayedSmall) {
                        if (isLateGame && hasBigTrump && trumpAfter < 1) shouldBite = Math.random() < 0.5;
                        else shouldBite = true;
                    } else if (hasBigTrump && trumpAfter < 2) {
                        if (handSize >= 30) shouldBite = Math.random() < 0.7;
                        else if (handSize >= 15) shouldBite = Math.random() < 0.5;
                        else shouldBite = Math.random() < 0.3;
                    } else if (handSize >= 30) shouldBite = Math.random() < 0.9;
                    else if (handSize >= 15) shouldBite = Math.random() < 0.75;
                    else shouldBite = Math.random() < 0.6;
                }

                if (shouldBite) return {
                    cards: best.cards,
                    pattern: best.pattern
                };
            }
        }
    }

    // ===================== 同花色跟牌（候选驱动） =====================
    if (inSuit.length >= actualSize) {
        const inSuitCards = inSuit.map(x => x.card);
        let combos = getFollowCandidatesForAI(inSuitCards, leadPattern, g);
        if (combos) combos = combos.filter(c => c.length === actualSize);

        if (!combos || combos.length === 0) {
            const picked = pickDiscardCards(inSuit.slice(), actualSize, isPoint, teammateAbsolutelyWinning, teammateLack, g);
            return {
                cards: picked,
                pattern: TuoLaJi.getPattern(picked.map(c => c.name), g.rank, g.trumpSuit)
            };
        }

        const scored = combos.map(cards => {
            const pat = TuoLaJi.getPattern(cards.map(c => c.name), g.rank, g.trumpSuit);
            return {
                cards,
                pattern: pat,
                pts: TuoLaJi.countPoints(cards.map(c => c.name)),
                power: (pat && pat.valid) ? pat.power : 0
            };
        });

        // ★ 检测队友是否首出大牌（A 或 K）
        let teammateLeadBig = false;
        if (currentPlays[0].seat !== seat && currentPlays[0].seat % 2 === team) {
            const leadPat = currentPlays[0].pattern;
            const topNum = g.rank === 1 ? 13 : 1;
            if (leadPat.type === "single" || leadPat.type === "pair") {
                const p = TuoLaJi.parseCard(currentPlays[0].cards[0].name);
                if (p.number === topNum) teammateLeadBig = true;
            } else if (["tractor", "throw", "windmill", "four_two", "four_four"].includes(leadPat.type)) {
                if (currentPlays[0].cards.some(c => TuoLaJi.parseCard(c.name).number === topNum)) teammateLeadBig = true;
            }
        }

        // 1. 队友绝对稳赢 或 队友首出大牌：大胆送分
        if (teammateAbsolutelyWinning || (teammateWinning && teammateLeadBig)) {
            const handCounts = countCardsByName(hand);
            
            // ★ 极致防拆：提取原手牌中所有的成型组合（连拖、特殊拖拉机、炸弹等）
            const units = decomposeThrowIntoUnits(hand, g.rank, g.trumpSuit);
            
            scored.sort((a, b) => {
                // 计算拆毁组合的罚分
                const getBreakPenalty = (c) => {
                    let penalty = 0;
                    const cCounts = countCardsByName(c);
                    
                    // 1. 罚拆连拖与特殊拖拉机
                    for (const u of units) {
                        if (u.type !== "single") {
                            const hasSome = u.cards.some(card => (cCounts[card.name] || 0) > 0);
                            const hasAll = u.cards.every(card => {
                                const needed = u.cards.filter(x => x.name === card.name).length;
                                return (cCounts[card.name] || 0) >= needed;
                            });
                            // 若拿了组合的一部分，却没拿全，直接重罚 500
                            if (hasSome && !hasAll) penalty += 500; 
                        }
                    }
                    
                    // 2. 额外防拆任意对子/三条（兜底）
                    for (const card of c) {
                        if ((handCounts[card.name] || 0) > (cCounts[card.name] || 0)) {
                            penalty += 50;
                        }
                    }
                    return penalty;
                };
                
                const penaltyA = getBreakPenalty(a.cards);
                const penaltyB = getBreakPenalty(b.cards);
                if (penaltyA !== penaltyB) return penaltyA - penaltyB;

                // ★ 分牌优先级：10 > K > 5
                const getScore = (c) => {
                    let score = 0;
                    for (const card of c) {
                        const p = TuoLaJi.parseCard(card.name);
                        if (p.number === 10) score += 1000;
                        else if (p.number === 13 && g.rank !== 13) score += 100;
                        else if (p.number === 5) score += 10;
                    }
                    return score;
                };
                const scoreA = getScore(a.cards);
                const scoreB = getScore(b.cards);
                if (scoreA !== scoreB) return scoreB - scoreA;

                return a.power - b.power;
            });
            return {
                cards: scored[0].cards,
                pattern: scored[0].pattern
            };
        }

        // 2. 队友领先非绝对稳赢：出最小分最少
        if (teammateWinning) {
            scored.sort((a, b) => a.pts - b.pts || a.power - b.power);
            return {
                cards: scored[0].cards,
                pattern: scored[0].pattern
            };
        }

        // 3. 敌方领先
        const roundPoints = TuoLaJi.countPoints(currentPlays.flatMap(pl => pl.cards.map(c => c.name)));
        const beaters = scored.filter(x =>
            x.pattern && x.pattern.valid && TuoLaJi.comparePatterns(x.pattern, currentBestPattern) > 0
        );

        if (beaters.length > 0) {
            // ★ 末位狙击
            if (isLastPlayer) {
                const sortedByPower = beaters.slice().sort((a, b) => TuoLaJi.comparePatterns(a.pattern, b.pattern));
                const smallest = sortedByPower[0];
                if (smallest.pts === 0) {
                    const pointBeaters = sortedByPower.filter(x => x.pts > 0);
                    if (pointBeaters.length > 0) {
                        const smallestPoint = pointBeaters[0];
                        if (smallestPoint.power - smallest.power <= 2) {
                            return {
                                cards: smallestPoint.cards,
                                pattern: smallestPoint.pattern
                            };
                        }
                    }
                }
                return {
                    cards: smallest.cards,
                    pattern: smallest.pattern
                };
            }

            // ★ 非末位有敌人威胁：避免出分牌
            if (hasEnemyThreat) {
                const nonPointBeaters = beaters.filter(x => x.pts === 0);
                if (nonPointBeaters.length > 0) {
                    nonPointBeaters.sort((a, b) => TuoLaJi.comparePatterns(a.pattern, b.pattern));
                    return {
                        cards: nonPointBeaters[0].cards,
                        pattern: nonPointBeaters[0].pattern
                    };
                }
                beaters.sort((a, b) => TuoLaJi.comparePatterns(a.pattern, b.pattern));
                return {
                    cards: beaters[0].cards,
                    pattern: beaters[0].pattern
                };
            }

            // 非末位无威胁：能赢用最小的
            beaters.sort((a, b) => TuoLaJi.comparePatterns(a.pattern, b.pattern));
            if (roundPoints >= 20) {
                beaters.sort((a, b) => TuoLaJi.comparePatterns(b.pattern, a.pattern));
            }
            return {
                cards: beaters[0].cards,
                pattern: beaters[0].pattern
            };
        }

        // 4. 不能大：出最小、不打分
        scored.sort((a, b) => a.pts - b.pts || a.power - b.power);
        return {
            cards: scored[0].cards,
            pattern: scored[0].pattern
        };
    }

    // ===================== 垫牌（该花色有但不够） =====================
    if (inSuit.length > 0) {
        const rest = parsed.filter(x => !inSuit.includes(x));
        const restNeed = actualSize - inSuit.length;
        const discarded = pickDiscardCards(rest, restNeed, isPoint, teammateAbsolutelyWinning, teammateLack, g);
        const picked = inSuit.map(x => x.card).concat(discarded);
        return {
            cards: picked,
            pattern: TuoLaJi.getPattern(picked.map(c => c.name), g.rank, g.trumpSuit)
        };
    }

    // 完全没该花色（非甩牌且无法毙）：垫牌
    const discarded = pickDiscardCards(parsed, actualSize, isPoint, teammateAbsolutelyWinning, teammateLack, g);
    return {
        cards: discarded,
        pattern: TuoLaJi.getPattern(discarded.map(c => c.name), g.rank, g.trumpSuit)
    };
}

// ★ 新增：毙甩牌的主牌组合大小（取最大单牌牌力）
function getThrowPower(cards, leadPattern, g) {
    let max = 0;
    for (const c of cards) {
        const cp = TuoLaJi.parseCard(typeof c === "string" ? c : c.name);
        const pw = TuoLaJi.cardPower(cp, leadPattern.rank, leadPattern.trumpSuit);
        if (pw > max) max = pw;
    }
    return max;
}

// ★ 新增：比较两家毙甩牌的牌组大小
function compareThrowPlays(cardsA, cardsB, lead, g) {
    const unitsA = decomposeThrowIntoUnits(cardsA, g.rank, g.trumpSuit);
    const unitsB = decomposeThrowIntoUnits(cardsB, g.rank, g.trumpSuit);

    const preparedA = unitsA.map(u => ({
        cards: u.cards,
        pattern: TuoLaJi.getPattern(u.cards.map(c => c.name), g.rank, g.trumpSuit)
    }));
    const preparedB = unitsB.map(u => ({
        cards: u.cards,
        pattern: TuoLaJi.getPattern(u.cards.map(c => c.name), g.rank, g.trumpSuit)
    }));

    const len = Math.min(preparedA.length, preparedB.length);
    for (let i = 0; i < len; i++) {
        const cmp = TuoLaJi.comparePatterns(preparedA[i].pattern, preparedB[i].pattern);
        if (cmp !== 0) return cmp;
    }

    // 兜底：结构不一致时比较最大牌力（理论上 structureMatch 过滤后不会走到）
    const getMaxPower = (cards) => {
        let max = -1;
        for (const c of cards) {
            const p = TuoLaJi.parseCard(c.name);
            const pw = TuoLaJi.cardPower(p, g.rank, g.trumpSuit);
            if (pw > max) max = pw;
        }
        return max;
    };
    return getMaxPower(cardsA) - getMaxPower(cardsB);
}

// ============ 判定赢家 ============
function determineWinner(plays, g) {
    if (!plays.length) return {
        winIdx: 0,
        winPattern: null
    };
    const lead = plays[0].pattern;
    const leadSize = TuoLaJi.getPatternSize(lead);
    const leadIsTrump = lead.isTrump;
    const leadSuit = lead.suit;
    let winIdx = 0;
    let winPattern = lead;

    for (let i = 1; i < plays.length; i++) {
        const pl = plays[i];
        if (!pl.pattern && !pl.cards) continue;
        if (pl.cards.length !== leadSize) continue;

        // ★ 甩牌：不要求 pl.pattern.valid，用 cards 判断
        if (lead.type === "throw") {
            const playedPattern = pl.pattern || {
                valid: false
            };
            playedPattern.cards = pl.cards;
            if (TuoLaJi.structureMatch(playedPattern, lead)) {
                if (winIdx === 0) {
                    winIdx = i;
                    winPattern = playedPattern;
                } else {
                    // ★ 核心修复：按牌型组优先级逐组比较大小，而不是简单取最大单张牌力
                    const cmp = compareThrowPlays(pl.cards, plays[winIdx].cards, lead, g);
                    if (cmp > 0) {
                        winIdx = i;
                        winPattern = playedPattern;
                    }
                }
            }
            continue;
        }

        if (!pl.pattern || !pl.pattern.valid) continue;

        if (leadIsTrump) {
            if (!pl.pattern.isTrump) continue;
            if (TuoLaJi.comparePatterns(pl.pattern, winPattern) > 0) {
                winIdx = i;
                winPattern = pl.pattern;
            }
        } else {
            if (pl.pattern.isTrump) {
                if (!TuoLaJi.structureMatch(pl.pattern, lead)) continue;
                if (!winPattern.isTrump || TuoLaJi.comparePatterns(pl.pattern, winPattern) > 0) {
                    winIdx = i;
                    winPattern = pl.pattern;
                }
            } else if (pl.pattern.suit === leadSuit) {
                if (winPattern.isTrump) continue;
                if (TuoLaJi.comparePatterns(pl.pattern, winPattern) > 0) {
                    winIdx = i;
                    winPattern = pl.pattern;
                }
            }
        }
    }
    return {
        winIdx,
        winPattern
    };
}

// 新增：从散牌中提取当前能组成的最大组合
function extractHighestCombo(cards, rank, trumpSuit) {
    if (cards.length === 0) return null;
    const gl = buildValueGroups(cards, rank, trumpSuit);

    // 1. 四拖四
    const fourGroups = gl.filter(g => g.cards.length >= 4);
    for (let i = 0; i < fourGroups.length; i++) {
        for (let j = i + 1; j < fourGroups.length; j++) {
            if (Math.abs(fourGroups[i].val - fourGroups[j].val) !== 1) continue;
            const combo = [...fourGroups[i].cards.slice(0, 4), ...fourGroups[j].cards.slice(0, 4)];
            const p = TuoLaJi.getPattern(combo.map(c => c.name), rank, trumpSuit);
            if (p.valid && p.type === "four_four") {
                return {
                    combo,
                    remaining: cards.filter(c => !combo.includes(c)),
                    type: "four_four"
                };
            }
        }
    }

    // 2. 四拖二
    const pairGroups = gl.filter(g => g.cards.length >= 2);
    for (const four of fourGroups) {
        for (const pair of pairGroups) {
            if (four === pair) continue;
            if (Math.abs(four.val - pair.val) !== 1) continue;
            const combo = [...four.cards.slice(0, 4), ...pair.cards.slice(0, 2)];
            const p = TuoLaJi.getPattern(combo.map(c => c.name), rank, trumpSuit);
            if (p.valid && p.type === "four_two") {
                return {
                    combo,
                    remaining: cards.filter(c => !combo.includes(c)),
                    type: "four_two"
                };
            }
        }
    }

    // 3. 四张
    for (const g of fourGroups) {
        const combo = g.cards.slice(0, 4);
        const p = TuoLaJi.getPattern(combo.map(c => c.name), rank, trumpSuit);
        if (p.valid && p.type === "bomb") {
            return {
                combo,
                remaining: cards.filter(c => !combo.includes(c)),
                type: "bomb"
            };
        }
    }

    // 4. 风车
    const tripleGroups = gl.filter(g => g.cards.length >= 3);
    for (let i = 0; i < tripleGroups.length; i++) {
        for (let j = i + 1; j < tripleGroups.length; j++) {
            if (Math.abs(tripleGroups[i].val - tripleGroups[j].val) !== 1) continue;
            const combo = [...tripleGroups[i].cards.slice(0, 3), ...tripleGroups[j].cards.slice(0, 3)];
            const p = TuoLaJi.getPattern(combo.map(c => c.name), rank, trumpSuit);
            if (p.valid && p.type === "windmill") {
                return {
                    combo,
                    remaining: cards.filter(c => !combo.includes(c)),
                    type: "windmill"
                };
            }
        }
    }

    // 5. 连拖（优先长的）
    for (let len = pairGroups.length; len >= 2; len--) {
        for (let i = 0; i <= pairGroups.length - len; i++) {
            let ok = true;
            for (let j = 0; j < len - 1; j++) {
                if (pairGroups[i + j + 1].val - pairGroups[i + j].val !== 1) {
                    ok = false;
                    break;
                }
            }
            if (!ok) continue;
            const combo = [];
            for (let j = 0; j < len; j++) combo.push(...pairGroups[i + j].cards.slice(0, 2));
            const p = TuoLaJi.getPattern(combo.map(c => c.name), rank, trumpSuit);
            if (p.valid && p.type === "tractor") {
                return {
                    combo,
                    remaining: cards.filter(c => !combo.includes(c)),
                    type: "tractor"
                };
            }
        }
    }

    // 6. 三条
    for (const g of tripleGroups) {
        const combo = g.cards.slice(0, 3);
        const p = TuoLaJi.getPattern(combo.map(c => c.name), rank, trumpSuit);
        if (p.valid && p.type === "triple") {
            return {
                combo,
                remaining: cards.filter(c => !combo.includes(c)),
                type: "triple"
            };
        }
    }

    // 7. 对子
    for (const g of pairGroups) {
        const combo = g.cards.slice(0, 2);
        const p = TuoLaJi.getPattern(combo.map(c => c.name), rank, trumpSuit);
        if (p.valid && p.type === "pair") {
            return {
                combo,
                remaining: cards.filter(c => !combo.includes(c)),
                type: "pair"
            };
        }
    }

    // 8. 单张
    return {
        combo: [cards[0]],
        remaining: cards.slice(1),
        type: "single"
    };
}

// ★ 新增：按点数分组（同点数为一组，不可拆分），用于甩牌拆解
function splitIntoRankGroups(cards, rank, trumpSuit) {
    const groups = {};
    for (const c of cards) {
        const p = TuoLaJi.parseCard(c.name);
        const key = p.joker ? ("joker_" + p.joker) : (p.suit + "_" + p.number);
        (groups[key] = groups[key] || []).push(c);
    }
    return Object.values(groups);
}

// ============ 将甩牌按“整体单位”拆解 ============
// 优先级：四拖四 > 四拖二 > 三张连拖 > 炸弹 > 三条 > 二张连拖 > 对子 > 散牌
// ============ 将甩牌按“整体单位”拆解 ============
// 优先级：四拖四 > 四拖二 > 三张连拖 > 炸弹 > 三条 > 二张连拖 > 对子 > 散牌
// 使用 tractorValue 支持大小王、正副级牌的组合与比较
function decomposeThrowIntoUnits(cards, rank, trumpSuit) {
    const units = [];
    let working = cards.slice();

    const getGroups = (arr) => {
        const map = {};
        for (const c of arr) {
            const p = TuoLaJi.parseCard(c.name);
            const key = p.joker ? ("joker_" + p.joker) : (p.suit + "_" + p.number);
            (map[key] = map[key] || []).push(c);
        }
        return Object.keys(map).map(k => {
            const grpCards = map[k];
            const p = TuoLaJi.parseCard(grpCards[0].name);
            return {
                cards: grpCards,
                val: TuoLaJi.tractorValue(p, rank, trumpSuit),
                p
            };
        }).sort((a, b) => a.val - b.val);
    };

    const removeCards = (arr, toRemove) => {
        for (const c of toRemove) {
            const idx = arr.indexOf(c);
            if (idx >= 0) arr.splice(idx, 1);
        }
    };

    let safety = 0;
    while (working.length > 0 && safety++ < 50) {
        const gl = getGroups(working);
        let found = null;

        const fourGroups = gl.filter(g => g.cards.length >= 4);
        for (let i = 0; i < fourGroups.length - 1 && !found; i++) {
            for (let j = i + 1; j < fourGroups.length; j++) {
                if (Math.abs(fourGroups[j].val - fourGroups[i].val) === 1) {
                    found = { cards: [...fourGroups[i].cards.slice(0, 4), ...fourGroups[j].cards.slice(0, 4)], type: "four_four" };
                    break;
                }
            }
        }
        if (found) { units.push(found); removeCards(working, found.cards); continue; }

        for (const four of fourGroups) {
            const pairs = gl.filter(g => g.cards.length >= 2 && g !== four);
            for (const pair of pairs) {
                if (Math.abs(four.val - pair.val) === 1) {
                    found = { cards: [...four.cards.slice(0, 4), ...pair.cards.slice(0, 2)], type: "four_two" };
                    break;
                }
            }
            if (found) break;
        }
        if (found) { units.push(found); removeCards(working, found.cards); continue; }

        const tripleGroups = gl.filter(g => g.cards.length >= 3);
        let bestTripleChain = null;
        for (let start = 0; start < tripleGroups.length; start++) {
            let chain = [tripleGroups[start]];
            for (let j = start + 1; j < tripleGroups.length; j++) {
                if (tripleGroups[j].val - chain[chain.length - 1].val === 1) chain.push(tripleGroups[j]);
                else break;
            }
            if (chain.length >= 2 && (!bestTripleChain || chain.length > bestTripleChain.length)) bestTripleChain = chain;
        }
        if (bestTripleChain) {
            const cc = [];
            for (const g of bestTripleChain) cc.push(...g.cards.slice(0, 3));
            const type = bestTripleChain.length === 2 ? "windmill" : "tractor";
            found = { cards: cc, type };
            units.push(found); removeCards(working, found.cards); continue;
        }

        if (fourGroups.length > 0) {
            found = { cards: fourGroups[0].cards.slice(0, 4), type: "bomb" };
            units.push(found); removeCards(working, found.cards); continue;
        }

        if (tripleGroups.length > 0) {
            found = { cards: tripleGroups[0].cards.slice(0, 3), type: "triple" };
            units.push(found); removeCards(working, found.cards); continue;
        }

        const pairGroups = gl.filter(g => g.cards.length >= 2);
        let bestPairChain = null;
        for (let start = 0; start < pairGroups.length; start++) {
            let chain = [pairGroups[start]];
            for (let j = start + 1; j < pairGroups.length; j++) {
                if (pairGroups[j].val - chain[chain.length - 1].val === 1) chain.push(pairGroups[j]);
                else break;
            }
            if (chain.length >= 2 && (!bestPairChain || chain.length > bestPairChain.length)) bestPairChain = chain;
        }
        if (bestPairChain) {
            const cc = [];
            for (const g of bestPairChain) cc.push(...g.cards.slice(0, 2));
            found = { cards: cc, type: "tractor" };
            units.push(found); removeCards(working, found.cards); continue;
        }

        if (pairGroups.length > 0) {
            found = { cards: pairGroups[0].cards.slice(0, 2), type: "pair" };
            units.push(found); removeCards(working, found.cards); continue;
        }

        if (gl.length > 0) {
            found = { cards: [gl[0].cards[0]], type: "single" };
            units.push(found); removeCards(working, found.cards); continue;
        }
        break;
    }

    // ★ 强制将拆解出的单位进行降序排序，确保比较时位置绝对对齐
    units.sort((a, b) => {
        const pA = TuoLaJi.getPattern(a.cards.map(c => c.name), rank, trumpSuit);
        const pB = TuoLaJi.getPattern(b.cards.map(c => c.name), rank, trumpSuit);
        const prioA = TuoLaJi.typePriority(pA);
        const prioB = TuoLaJi.typePriority(pB);
        if (prioA !== prioB) return prioB - prioA;
        return pB.power - pA.power;
    });

    return units;
}

// ============ 甩牌逻辑 ============
function resolveThrow(player, cards, g) {
    const parsed = cards.map(c => TuoLaJi.parseCard(c.name));
    const allTrump = parsed.every(c => TuoLaJi.isTrump(c, g.rank, g.trumpSuit));

    let suit = null;
    if (!allTrump) {
        if (parsed.some(c => TuoLaJi.isTrump(c, g.rank, g.trumpSuit))) return null;
        suit = parsed[0].suit;
        if (parsed.some(c => c.suit !== suit)) return null;
    }

    const pattern = TuoLaJi.getPattern(cards.map(c => c.name), g.rank, g.trumpSuit);
    if (pattern.valid && pattern.type !== "mixed") return null;

    const units = decomposeThrowIntoUnits(cards, g.rank, g.trumpSuit);
    let caughtAction = null;

    const others = [];
    let cur = player.next;
    for (let i = 0; i < 3; i++) {
        if (cur.getCards("h").length > 0) others.push(cur);
        cur = cur.next;
    }

    for (const other of others) {
        const beatableUnits = [];
        for (const unit of units) {
            const unitPattern = TuoLaJi.getPattern(unit.cards.map(c => c.name), g.rank, g.trumpSuit);
            if (!unitPattern.valid) continue;

            const otherCards = other.getCards("h").filter(c => {
                const p = TuoLaJi.parseCard(c.name);
                if (!p) return false;
                if (allTrump) return TuoLaJi.isTrump(p, g.rank, g.trumpSuit);
                if (p.joker) return false;
                if (TuoLaJi.isTrump(p, g.rank, g.trumpSuit)) return false;
                return p.suit === suit;
            });

            let matches = [];
            // ★ 核心修复：单张单独判定，不调用 analyzeSuitForStructure
            if (unitPattern.type === "single") {
                for (const c of otherCards) {
                    const p = TuoLaJi.getPattern([c.name], g.rank, g.trumpSuit);
                    if (p.valid && p.type === "single" && TuoLaJi.comparePatterns(p, unitPattern) > 0) {
                        matches.push([c]);
                    }
                }
            } else {
                matches = analyzeSuitForStructure(otherCards, unitPattern, g);
            }

            for (const m of matches) {
                const p = TuoLaJi.getPattern(m.map(c => c.name), g.rank, g.trumpSuit);
                if (p.valid && TuoLaJi.structureMatch(p, unitPattern) && TuoLaJi.comparePatterns(p, unitPattern) > 0) {
                    beatableUnits.push({ unit, unitPattern, beatPattern: p });
                    break;
                }
            }
        }

        if (beatableUnits.length > 0) {
            beatableUnits.sort((a, b) => TuoLaJi.comparePatterns(b.unitPattern, a.unitPattern));
            const chosen = beatableUnits[0];
            caughtAction = {
                player: other,
                targetCards: chosen.unit.cards,
                targetPattern: chosen.unitPattern,
                desc: chosen.unitPattern.type
            };
            break;
        }
    }

    if (caughtAction) {
        game.print(`【甩牌失败】甩出的部分牌被管住！`);
        game.print(`【${SEAT_NAMES[game.players.indexOf(caughtAction.player)]}方有更大牌型（${caughtAction.desc}），可以管住】`);

        const pIdx = game.players.indexOf(player);
        const isIdleThrower = (pIdx % 2 !== g.bankerTeam);
        const idleSeats = [0, 1, 2, 3].filter(i => i % 2 !== g.bankerTeam);
        if (!g.history) g.history = [];

        if (isIdleThrower) {
            const totalIdle = idleSeats.reduce((sum, i) => sum + g.roundScores[i], 0);
            const actualDeduct = Math.min(10, Math.max(0, totalIdle));
            let remain = actualDeduct;
            const order = [pIdx].concat(idleSeats.filter(i => i !== pIdx));
            for (const idx of order) {
                if (remain <= 0) break;
                const before = g.roundScores[idx];
                if (before <= 0) continue;
                const d = Math.min(before, remain);
                g.roundScores[idx] -= d;
                remain -= d;
            }
            if (actualDeduct < 10) {
                game.print(`闲家甩牌被抓，应扣 10 分，但闲家总分仅 ${totalIdle} 分，实际扣 ${actualDeduct} 分（扣至 0 分为止）！`);
                g.history.push({ type: "penalty", seat: pIdx, text: `甩牌被抓，扣 ${actualDeduct} 分`, round: g.round });
            } else {
                game.print(`闲家甩牌被抓，扣 10 分！`);
                g.history.push({ type: "penalty", seat: pIdx, text: `甩牌被抓，扣 10 分`, round: g.round });
            }
        } else {
            g.roundScores[idleSeats[0]] += 10;
            game.print(`庄家甩牌被抓，抓分方加 10 分！`);
            g.history.push({ type: "penalty", seat: pIdx, text: `甩牌被抓，抓分方加 10 分`, round: g.round });
        }
        updateScoreDisplay();

        const finalCards = caughtAction.targetCards;
        const remainPattern = TuoLaJi.getPattern(finalCards.map(c => c.name), g.rank, g.trumpSuit);
        let resultCards, resultPattern;
        if (remainPattern.valid) {
            resultCards = finalCards;
            resultPattern = remainPattern;
        } else {
            const smallest = finalCards.slice().sort((a, b) =>
                TuoLaJi.cardPower(TuoLaJi.parseCard(a.name), g.rank, g.trumpSuit) -
                TuoLaJi.cardPower(TuoLaJi.parseCard(b.name), g.rank, g.trumpSuit)
            )[0];
            resultCards = [smallest];
            resultPattern = TuoLaJi.getPattern([smallest.name], g.rank, g.trumpSuit);
        }

        return { cards: resultCards, pattern: resultPattern, caughtAction };
    } else {
        game.print(`【甩牌成功】`);
        const struct = TuoLaJi.parseThrowStructure(cards, g.rank, g.trumpSuit);
        const forcePattern = {
            type: "throw", power: 99999, suit: allTrump ? "trump" : suit, isTrump: allTrump,
            valid: true, size: cards.length, struct, rank: g.rank, trumpSuit: g.trumpSuit, cards
        };
        return { cards, pattern: forcePattern };
    }
}

// ============ 单轮出牌 ============
async function playOneTrick(startSeat) {
    const g = game.tuolaji;
    const meSeat = game.players.indexOf(game.me);
    const order = [];

    let curPlayer = game.players[startSeat];
    for (let i = 0; i < 4; i++) {
        const idx = game.players.indexOf(curPlayer);
        if (idx >= 0 && curPlayer.getCards("h").length > 0) order.push(idx);
        curPlayer = curPlayer.next;
    }

    clearPlayedCards();
    if (!order.length) return;

    const plays = [];
    let leadPattern = null;
    let leadSuit = null;
    let forcedPlay = null;

    for (let i = 0; i < order.length; i++) {
        const seat = order[i];
        let play;

        if (forcedPlay && seat === forcedPlay.seat) {
            const targetCards = forcedPlay.targetCards;
            const targetPattern = TuoLaJi.getPattern(targetCards.map(c => c.name), g.rank, g.trumpSuit);

            if (seat === meSeat) {
                while (true) {
                    ui.selected.cards.length = 0;
                    const res = await game.me.chooseCard({
                        prompt: `【扣牌】你管住了对方的牌！必须打出大过对方【${patternText(targetPattern, targetCards)}】的同型牌。`,
                        selectCard: [targetCards.length, targetCards.length],
                        complexCard: true,
                        filterCard: () => true,
                        ai: (card) => -TuoLaJi.cardPower(TuoLaJi.parseCard(card.name), g.rank, g.trumpSuit),
                    }).forResult();
                    
                    if (!res.bool) {
                        // ★ 兜底：如果玩家点了取消，系统自动帮他找一张能扣的牌
                        const combos = findAllCombosOfSize(game.me.getCards("h"), targetCards.length, g);
                        let autoPlay = null;
                        for (const c of combos) {
                            if (TuoLaJi.structureMatch(c.pattern, targetPattern) && TuoLaJi.comparePatterns(c.pattern, targetPattern) > 0) {
                                autoPlay = c; break;
                            }
                        }
                        if (autoPlay) {
                            play = { cards: autoPlay.cards, pattern: autoPlay.pattern };
                        } else {
                            const hand = game.me.getCards("h");
                            play = { cards: [hand[0]], pattern: TuoLaJi.getPattern([hand[0].name], g.rank, g.trumpSuit) };
                        }
                        break;
                    }

                    const p = TuoLaJi.getPattern(res.cards.map(c => c.name), g.rank, g.trumpSuit);
                    if (p.valid && TuoLaJi.structureMatch(p, targetPattern) && TuoLaJi.comparePatterns(p, targetPattern) > 0) {
                        if (res.cards.length === targetCards.length) {
                            play = { cards: res.cards, pattern: p };
                            break;
                        }
                    }
                    game.print("扣牌无效：必须打出能大过被扣牌的相同结构牌！");
                }
            } else {
                const hand = game.players[seat].getCards("h");
                const combos = findAllCombosOfSize(hand, targetCards.length, g);
                const valid = [];
                for (const c of combos) {
                    if (TuoLaJi.structureMatch(c.pattern, targetPattern) && TuoLaJi.comparePatterns(c.pattern, targetPattern) > 0) {
                        valid.push(c);
                    }
                }
                if (valid.length > 0) {
                    valid.sort((a, b) => TuoLaJi.comparePatterns(b.pattern, a.pattern));
                    play = { cards: valid[0].cards, pattern: valid[0].pattern };
                } else {
                    play = aiPlay(seat, plays, g);
                }
            }

            game.print(`【扣牌】${SEAT_NAMES[seat]}方强制打出 ${patternText(play.pattern, play.cards)} 进行扣牌！`);
            forcedPlay = null;
        } else if (seat === meSeat) {
            play = await playerPlay(seat, plays);
        } else {
            play = aiPlay(seat, plays, g);
            if (!play || !Array.isArray(play.cards) || play.cards.length === 0) {
                const hand = game.players[seat].getCards("h");
                const single = hand[0];
                play = { cards: [single], pattern: TuoLaJi.getPattern([single.name], g.rank, g.trumpSuit) };
            }
        }

        if (i === 0 && (!play.pattern.valid || play.pattern.type === "mixed")) {
            const throwResult = resolveThrow(game.players[seat], play.cards, g);
            if (throwResult) {
                play = throwResult;
                if (throwResult.caughtAction) {
                    forcedPlay = {
                        seat: game.players.indexOf(throwResult.caughtAction.player),
                        targetCards: throwResult.caughtAction.targetCards
                    };
                }
            } else {
                game.print("无效牌型，强制出单张");
                const single = play.cards[0];
                play = { cards: [single], pattern: TuoLaJi.getPattern([single.name], g.rank, g.trumpSuit) };
            }
        }

        if (i === 0) {
            leadPattern = play.pattern;
            leadSuit = leadPattern.isTrump ? "trump" : leadPattern.suit;
        }

        const actorName = SEAT_NAMES[seat] + "方";
        const actionText = i === 0 ? "打出" : "跟牌";
        game.print(`【${actorName}】${actionText} ${patternText(play.pattern, play.cards)}`);
        game.log(game.players[seat], actionText, patternText(play.pattern, play.cards));

        if (!g.history) g.history = [];
        g.history.push({ type: "play", seat, cardNames: play.cards.map(c => c.name), isLead: i === 0, round: g.round });

        if (i > 0) {
            const playedInSuit = play.cards.filter(c => isInSuit(c, leadSuit, g));
            if (playedInSuit.length === 0 && leadSuit !== "trump") {
                g.lackSuit[seat][leadSuit] = true;
                game.log(`【记牌】${SEAT_NAMES[seat]}方已无${SUIT_NAMES[leadSuit]}`);
                g.history.push({ type: "lack", seat, text: `已无 ${SUIT_NAMES[leadSuit]} 副牌`, round: g.round });
            }
            if (leadPattern.isTrump) {
                const playedInTrump = play.cards.filter(c => TuoLaJi.isTrump(TuoLaJi.parseCard(c.name), g.rank, g.trumpSuit));
                if (playedInTrump.length === 0) {
                    g.lackSuit[seat]['trump'] = true;
                    game.log(`【记牌】${SEAT_NAMES[seat]}方已无主牌`);
                    g.history.push({ type: "lack", seat, text: `已无主牌`, round: g.round });
                }
            }
        }

        await displayPlayedCards(play, seat, i);
        plays.push({ seat, cards: play.cards, pattern: play.pattern });

        updateSuitHints(game.players[seat]);
        if (!Array.isArray(g.playedCards)) g.playedCards = [];
        for (const card of play.cards) g.playedCards.push(card.name);
        g._unknownCounts = null;

        const w = determineWinner(plays, g);
        if (i < order.length - 1 && w.winPattern) {
            game.log("当前领先：", game.players[plays[w.winIdx].seat], patternText(w.winPattern, plays[w.winIdx].cards));
        }
        await game.delayx(1);
    }

    const { winIdx, winPattern } = determineWinner(plays, g);
    const winnerSeat = plays[winIdx].seat;
    const allNames = plays.flatMap(pl => pl.cards.map(c => c.name));
    const points = TuoLaJi.countPoints(allNames);

    g.roundScores[winnerSeat] += points;
    const isBanker = (winnerSeat % 2 === g.bankerTeam);
    if (!isBanker) {
        game.print(`【本轮结束】闲家方赢得本轮，获得 ${points} 分。下一轮方先出`);
        g.history.push({ type: "score", seat: winnerSeat, text: `闲家赢得本轮，获得 ${points} 分`, round: g.round });
    } else {
        game.print(`【本轮结束】庄家方赢得本轮。下一轮方先出`);
        g.history.push({ type: "score", seat: winnerSeat, text: `庄家赢得本轮`, round: g.round });
    }

    if (leadPattern.type === "single" && leadPattern.suit === "joker") {
        const isTeammateWin = (winnerSeat % 2 === order[0] % 2);
        g._lastLeadWasJoker = { seat: order[0], gotPoints: (isTeammateWin && points > 0) };
    } else {
        g._lastLeadWasJoker = null;
    }

    updateScoreDisplay();
    await game.delayx(3);

    g.leadingSeat = winnerSeat;
    g.trick.push({ winner: winnerSeat, points, pattern: winPattern, cards: allNames });
}

// ============ 重置牌堆（每局开始时回收并洗牌） ============
function resetCardPile() {
    const allCards = [];
    game.players.forEach(p => {
        const hs = p.getCards("hejsx");
        allCards.addArray(hs);
        // ★ 修复：断开监听器
        hs.forEach(c => {
            if (c._tuolajiObserver) c._tuolajiObserver.disconnect();
            c.remove();
        });
        p.$update();
    });
    // 同样清理区域内的牌（可选，因为大多已断开）
    for (const c of Array.from(ui.ordering.childNodes)) {
        if (c._tuolajiObserver) c._tuolajiObserver.disconnect();
        allCards.add(c);
        c.remove();
    }
    for (const c of Array.from(ui.discardPile.childNodes)) {
        if (c._tuolajiObserver) c._tuolajiObserver.disconnect();
        allCards.add(c);
        c.remove();
    }
    for (const c of Array.from(ui.special.childNodes)) {
        if (c._tuolajiObserver) c._tuolajiObserver.disconnect();
        allCards.add(c);
        c.remove();
    }
    for (const c of Array.from(ui.cardPile.childNodes)) {
        if (c._tuolajiObserver) c._tuolajiObserver.disconnect();
        allCards.add(c);
        c.remove();
    }

    if (allCards.length < 216) {
        allCards.length = 0;
        const list = [];
        for (let deck = 0; deck < 4; deck++) {
            for (const s of SUITS) {
                for (let n = 1; n <= 13; n++) list.push([s, n, s + n]);
            }
            list.push(["joker", 1, "jokerbig"]);
            list.push(["joker", 2, "jokersmall"]);
        }
        for (const item of list) {
            let c;
            try {
                c = game.createCard(item[2], item[0], item[1]);
            } catch (e) {
                c = null;
            }
            if (!c || !c.classList) {
                c = ui.create.card();
                c.init([item[0], item[1], item[2]]);
            }
            allCards.push(c);
        }
    }

    allCards.randomSort();
    const pile = ui.cardPile || ui.arena.querySelector(".cardPile") || ui.create.div(".cardPile", ui.arena);
    pile.innerHTML = "";
    for (const c of allCards) {
        c.fix();
        pile.appendChild(c);
    }
    ui.discardPile.innerHTML = "";
    ui.ordering.innerHTML = "";
    ui.special.innerHTML = "";
}

// ============ 整局流程 ============
async function playFullRound() {
    const g = game.tuolaji;
    clearPlayedCards();
    resetCardPile();
    initRoundState();
    updateScoreDisplay();
    game.print(`=== 第 ${g.matchRound} 局 · 打 ${LEVEL_NAMES[g.rank]} · ${g.bankerTeam === 0 ? "南北" : "东西"}方坐庄 ===`);
    game.log(`=== 第 ${g.matchRound} 局 · 打 ${LEVEL_NAMES[g.rank]} ===`);

    await dealAndBid();
    g.leadingSeat = g.bottomPlayer;

    updateScoreDisplay();
    await game.delayx(0.8);

    await bankerTakeBottom(game.players[g.bottomPlayer]);
    updateScoreDisplay();

    // ★ 火眼金睛：初始化
    initAllSuitHints();

    let safety = 0;
    while (safety++ < 300) {
        if (!game.players.some(p => p.getCards("h").length > 0)) break;
        g.round++;
        game.log(`第 ${g.round} 轮，首家：`, game.players[g.leadingSeat]);
        await playOneTrick(g.leadingSeat);
    }

    clearPlayedCards();
    // ★ 火眼金睛：清理
    removeAllSuitHints();
}

// ★ 新增：保存游戏进度到本地存储
function saveGameProgress() {
    const g = game.tuolaji;
    if (!g) return;

    let data;
    // 如果当前在结算底牌弹窗，保存下局就绪状态（已升级、已顺延）
    if (g._nextState) {
        data = {
            teamLevels: g._nextState.teamLevels,
            matchRound: g._nextState.matchRound,
            banker: g._nextState.banker,
            bankerTeam: g._nextState.bankerTeam,
            bottomPlayer: g._nextState.bottomPlayer
        };
    } else {
        // 否则保存当前全局状态
        data = {
            teamLevels: g.teamLevels,
            matchRound: g.matchRound,
            banker: g.banker,
            bankerTeam: g.bankerTeam,
            bottomPlayer: g.bottomPlayer
        };
    }

    try {
        localStorage.setItem("tuolaji_save_data", JSON.stringify(data));
        game.print("【存档】游戏进度已成功保存（下一局已就绪）！下次进入游戏可直接继续。");
    } catch (e) {
        game.print("【存档】保存失败：本地存储不可用。");
    }
}

// ============ 结算（揭底牌 + 完整计分） ============
async function settleRound() {
    const g = game.tuolaji;
    const bankerTeam = g.bankerTeam;
    const idleTeam = 1 - bankerTeam;

    // 1. 揭底牌并算分
    const bottomPts = TuoLaJi.countPoints(g.bottom.map(c => c.name));
    const bottomStr = g.bottom.map(c => describeCard(c.name)).join("、");
    game.print(`【揭底】庄家底牌：${bottomStr}，共 ${bottomPts} 分`);
    game.log("揭底：底牌", g.bottom, "共", bottomPts, "分");

    // 2. 计算闲家抓分
    let baseScore = 0;
    game.players.forEach((p, i) => {
        if (i % 2 === idleTeam) baseScore += g.roundScores[i];
    });
    game.print(`【抓分】闲家本局抓分：${baseScore} 分`);

    // 3. 抠底加成
    const lastTrick = g.trick[g.trick.length - 1];
    let bottomBonus = 0;
    let bonusDesc = "";
    if (lastTrick && lastTrick.winner % 2 === idleTeam) {
        const mult = 4;
        bottomBonus = bottomPts * mult;
        bonusDesc = `【抠底】闲家赢最后一轮，底牌分 ${bottomPts} × 4 = ${bottomBonus} 分`;
    } else {
        bonusDesc = "【抠底】庄家守底，底牌分不计入闲家";
    }
    game.print(bonusDesc);

    const idleScore = baseScore + bottomBonus;
    game.print(`【本局结算】闲家总得分 = 抓分 ${baseScore} + 抠底 ${bottomBonus} = ${idleScore} 分`);

    // 4. 升级判断
    let winnerTeam, upgradeLevels, desc;
    if (idleScore >= 160) {
        winnerTeam = idleTeam;
        if (idleScore < 240) {
            upgradeLevels = 0;
            desc = "闲家上台（换庄，双方均不升级）";
        } else if (idleScore < 320) {
            upgradeLevels = 1;
            desc = "闲家上台，且升 1 级";
        } else {
            upgradeLevels = 2 + Math.floor((idleScore - 320) / 80);
            desc = `闲家上台，且连升 ${upgradeLevels} 级`;
        }
    } else {
        winnerTeam = bankerTeam;
        if (idleScore === 0) {
            upgradeLevels = 3;
            desc = "大光！庄家连升 3 级";
        } else if (idleScore < 80) {
            upgradeLevels = 2;
            desc = "小光！庄家升 2 级";
        } else {
            upgradeLevels = 1;
            desc = "庄家升 1 级";
        }
    }

    // ★ 提前计算：升级后的级别与顺延后的庄家
    let nextTeamLevels = [g.teamLevels[0], g.teamLevels[1]];
    nextTeamLevels[winnerTeam] += upgradeLevels;
    if (nextTeamLevels[winnerTeam] > 13) nextTeamLevels[winnerTeam] = 13;

    let nextBanker = g.banker;
    let nextBankerTeam = g.bankerTeam;
    let nextBottomPlayer = g.bottomPlayer;
    if (winnerTeam === bankerTeam) {
        nextBottomPlayer = (nextBottomPlayer + 2) % 4;
    } else {
        nextBanker = (nextBanker + 1) % 4;
        nextBankerTeam = nextBanker % 2;
        nextBottomPlayer = nextBanker;
    }

    // 暂存预备状态，供存档按钮使用
    g._nextState = {
        teamLevels: nextTeamLevels,
        matchRound: g.matchRound,
        banker: nextBanker,
        bankerTeam: nextBankerTeam,
        bottomPlayer: nextBottomPlayer
    };

    // 5. 弹窗展示底牌
    if (game.me && g.bottom && g.bottom.length > 0) {
        const dialog = ui.create.dialog("本局底牌", g.bottom);
        await new Promise(resolve => {
            let resolved = false;
            // 存档按钮
            const btnSave = ui.create.control("存档", function() {
                saveGameProgress();
                btnSave.close();
            });
            // 确定按钮
            const button = ui.create.control("确定", function() {
                if (!resolved) {
                    resolved = true;
                    dialog.close();
                    button.close();
                    if (btnSave.parentNode) btnSave.close();
                    resolve();
                }
            });
        });
    }

    // 6. 清理暂存，应用更新
    delete g._nextState;

    game.print(`【升级】${desc}`);
    g.teamLevels[winnerTeam] = nextTeamLevels[winnerTeam];
    game.print(`【级别】南北 ${LEVEL_NAMES[Math.min(g.teamLevels[0], 13)]} / 东西 ${LEVEL_NAMES[Math.min(g.teamLevels[1], 13)]}`);

    const matchWinnerTeam = (g.rank === 13 && winnerTeam === bankerTeam) ? winnerTeam : undefined;

    return {
        winnerTeam,
        upgradeLevels,
        bankerTeam,
        matchWinnerTeam
    };
}

function advanceBanker(winnerTeam, bankerTeam) {
    const g = game.tuolaji;
    if (winnerTeam === bankerTeam) {
        // 庄家守庄成功：庄家不变，下底换给队友
        g.bottomPlayer = (g.bottomPlayer + 2) % 4;
        game.print(`【连庄】庄家守庄成功，由队友${SEAT_NAMES[g.bottomPlayer]}方下底并首出`);
    } else {
        // 闲家上台：新庄家为原庄家的下家，由新庄家自己下底并首出
        g.banker = (g.banker + 1) % 4;
        g.bankerTeam = g.banker % 2;
        g.bottomPlayer = g.banker; // ★ 修复：新庄家下底
        game.print(`【换庄】抓分方上台，由下家${SEAT_NAMES[g.banker]}方坐庄并下底首出`);
    }
}

// ============ 主流程（多局循环） ============
async function tuolajiContent(event, trigger, player) {
    initMatchState();
    const g = game.tuolaji;
    const meSeat = game.players.indexOf(game.me);

    // ★ 核心逻辑：仅在每次彻底启动游戏时检测是否有旧存档并询问
    const savedData = localStorage.getItem("tuolaji_save_data");
    if (savedData) {
        const wantLoad = await game.me.chooseBool("检测到本地有上次的游戏进度，是否继续上次的进度？").forResult();
        if (wantLoad.bool) {
            try {
                const data = JSON.parse(savedData);
                if (data.teamLevels && Array.isArray(data.teamLevels) && data.teamLevels.length === 2) {
                    // 恢复状态
                    g.teamLevels = data.teamLevels;
                    if (typeof data.matchRound === 'number') g.matchRound = data.matchRound;
                    if (typeof data.banker === 'number') g.banker = data.banker;
                    if (typeof data.bankerTeam === 'number') g.bankerTeam = data.bankerTeam;
                    if (typeof data.bottomPlayer === 'number') g.bottomPlayer = data.bottomPlayer;

                    game.print(`【存档】读取成功！已恢复至双方级别：南北 ${LEVEL_NAMES[g.teamLevels[0]]} / 东西 ${LEVEL_NAMES[g.teamLevels[1]]}`);
                } else {
                    game.print("【存档】数据损坏，将开启全新游戏。");
                }
            } catch (e) {
                game.print("【存档】数据解析错误，将开启全新游戏。");
            }
        } else {
            // 选了否，直接开始新游戏，但什么都不删（不覆盖旧存档）
            game.print("【存档】已选择开启全新游戏。（旧存档已保留，下次启动仍可读取）");
        }
    }

    game.players.forEach((p, i) => {
        p.classList.add("tuolaji-hidden-equip");
        if (i !== meSeat) p.classList.add("tuolaji-small-player");
        if (p.node && p.node.equips) p.node.equips.style.setProperty("display", "none", "important");
        if (p.node && p.node.judges) p.node.judges.style.setProperty("display", "none", "important");
        if (p.node && p.node.name) p.node.name.innerHTML = SEAT_NAMES[i];
        if (p.node && p.node.name2) p.node.name2.innerHTML = "";
    });

    // ★ 核心修复：直接读取 lib.config，并将按钮的所有样式写死在 JS 里
    if (lib.config.extension_拖拉机_dcfl_jilu === true) {
        if (!document.getElementById('tlj_jilu_button')) {
            const btn = document.createElement('div');
            btn.id = 'tlj_jilu_button';
            btn.style.cssText = "position: fixed !important; left: calc(80% + 90px) !important; top: calc(72% - 70px) !important; width: 80px !important; height: 80px !important; z-index: 10 !important; cursor: pointer !important; background-size: cover !important; background-repeat: no-repeat !important; background-position: center !important; transition: all 0.3s !important; background-image: url('" + lib.assetURL + "extension/拖拉机/tlj_jilu.png') !important;";
            btn.title = '出牌记录';
            btn.addEventListener('click', showHistoryPage);

            btn.onmouseover = () => {
                btn.style.transform = "scale(1.1)";
                btn.style.filter = "brightness(1.2)";
                btn.style.boxShadow = "0 6px 12px rgba(0,0,0,0.4)";
            };
            btn.onmouseout = () => {
                btn.style.transform = "none";
                btn.style.filter = "none";
                btn.style.boxShadow = "none";
            };

            document.body.appendChild(btn);
        }
    }

    let matchWin = false;

    try {
        while (!matchWin) {
            g.matchRound++;
            await playFullRound();
            const result = await settleRound();
            updateScoreDisplay();
            await game.delayx(3);

            // ★ 只有 K 局结算后才判定整场胜利
            if (result.matchWinnerTeam !== undefined) {
                const teamName = result.matchWinnerTeam === 0 ? "南北" : "东西";
                game.print(`${teamName}方打赢 K 局，获得整场胜利！`);
                matchWin = true;
                game.over(meSeat % 2 === result.matchWinnerTeam);
                break;
            }

            advanceBanker(result.winnerTeam, result.bankerTeam);
            game.print(`【下一局】${SEAT_NAMES[g.banker]}方（${g.bankerTeam === 0 ? "南北队" : "东西队"}）坐庄，打 ${LEVEL_NAMES[Math.min(g.teamLevels[g.bankerTeam], 13)]}`);
            await game.delayx(2);
        }
    } catch (e) {
        console.error("拖拉机游戏发生异常:", e);
        game.print("游戏发生异常，已停止。");
        game.print("错误信息：" + (e && e.message ? e.message : String(e)));
    } finally {
        removeScoreDisplay();
        removeAllSuitHints();
        _status.tuolajiRunning = false;

        // ★ 游戏结束或中断时，强制清理“出牌记录”按钮
        const btn = document.getElementById('tlj_jilu_button');
        if (btn && btn.parentNode) {
            btn.parentNode.removeChild(btn);
        }
    }
}

// ============ 扩展导出 ============
export default function() {
    return {
        name: "拖拉机",
        editable: true,
        connect: false,
        arenaReady: function() {},
        content: function(config, pack) {
            if (!lib.brawl) return;

            game.tlj_config_jilu = config.dcfl_jilu;

            const registerPokerCard = function(name) {
                if (!lib.card[name]) {
                    lib.card[name] = {
                        fullimage: true,
                        image: "extension/拖拉机/" + name + ".png",
                        type: "basic",
                        enable: false,
                        notarget: true,
                        unusable: true,
                        pokerCard: true
                    };
                } else {
                    lib.card[name].pokerCard = true;
                    lib.card[name].fullimage = true;
                }
                lib.translate[name] = " ";
                if (!lib.inpile.includes(name)) lib.inpile.push(name);
            };
            SUITS.forEach(s => {
                for (let n = 1; n <= 13; n++) registerPokerCard(s + n);
            });
            registerPokerCard("jokerbig");
            registerPokerCard("jokersmall");
            if (!lib._tuolajiCardHook) {
                lib._tuolajiCardHook = true;
                const _init = lib.element.card.init;
                lib.element.card.init = function() {
                    _init.apply(this, arguments);
                    if (this.name && lib.card[this.name] && lib.card[this.name].pokerCard) {
                        this.style.backgroundImage = 'url("' + lib.assetURL + "extension/拖拉机/" + this.name + '.png")';
                        this.style.backgroundSize = "100% 100%";
                        this.style.backgroundPosition = "center";
                        hideCardText(this);
                    }
                };
            }
            lib.tuolaji = TuoLaJi;
            lib.brawl.tuolaji = {
                name: "拖拉机",
                mode: "versus",
                submode: "2v2",
                intro: ["四人四副牌升级", "请详看【游戏规则】或者“README.md”文件"],
                showcase: function(init) {
                    if (init || !this.childElementCount) {
                        this.innerHTML = "";
                        const brawlStart = document.querySelector(".menubutton.round.highlight");
                        if (brawlStart) brawlStart.style.display = "none";

                        const showcase = this;
                        const btn = document.createElement("div");
                        btn.classList.add("tuolaji-button", "tuolaji-rules");
                        btn.innerHTML = "游戏规则";
                        btn.addEventListener("click", showTuolajiRules);
                        showcase.appendChild(btn);
                    }
                },
                init: function() {
                    game.versusVideoName = "拖拉机";
                    if (_status.brawl) _status.brawl.playerNumber = 4;
                    _status.tuolajiRunning = true;
                },
                content: {
                    submode: "two",
                    playerNumber: 4,
                    noGameDraw: true,
                    chooseCharacterBefore: function() {
                        game.chooseCharacterTwo = function() {
                            game.createEvent("chooseCharacter").setContent(async function() {
                                ui.arena.classList.add("choose-character");
                                // 0/2同队（南北），1/3同队（东西）
                                game.players.forEach((p, i) => {
                                    p.side = (i % 2 === 0);
                                });

                                let first = game.players.randomGet();
                                if (first.next.side === first.side) first = first.next;
                                _status.firstAct = first;
                                _status.noReplaceCharacter = true;

                                game.players.forEach(p => {
                                    p.node.identity.firstChild.innerHTML = p.side === game.me.side ? "友" : "敌";
                                    p.node.identity.dataset.color = p.side ? "zhong" : "fan";
                                });

                                // 对应东南西北的图片名
                                const avatarNames = ["tlj_nan", "tlj_dong", "tlj_bei", "tlj_xi"];

                                game.players.forEach((p, i) => {
                                    const dummy = "tuolaji_seat_" + i;
                                    if (!lib.character[dummy]) {
                                        lib.character[dummy] = ["male", "qun", 1, [],
                                            []
                                        ];
                                        lib.translate[dummy] = SEAT_NAMES[i];
                                    }
                                    p.init(dummy);
                                    p.node.name.innerHTML = SEAT_NAMES[i];

                                    // 设置特定的武将图片
                                    p.node.avatar.setBackgroundImage("extension/拖拉机/" + avatarNames[i] + ".jpg");
                                    p.node.avatar.show();

                                    // 缩小非玩家自己的武将框
                                    if (p !== game.me) {
                                        p.classList.add("tuolaji-small-player");
                                    }
                                });

                                setTimeout(() => ui.arena.classList.remove("choose-character"), 500);
                            });
                        };
                    },
                    cardPile: function(list) {
                        list.length = 0;
                        for (let deck = 0; deck < 4; deck++) {
                            for (const s of SUITS) {
                                for (let n = 1; n <= 13; n++) list.push([s, n, s + n]);
                            }
                            list.push(["joker", 1, "jokerbig"]);
                            list.push(["joker", 2, "jokersmall"]);
                        }
                        return list;
                    },
                    gameStart: function() {
                        game.players.forEach(p => {
                            p.classList.add("tuolaji-hidden-equip");
                            if (p.node && p.node.equips) p.node.equips.style.setProperty("display", "none", "important");
                        });
                        if (_status.tuolajiRunning) {
                            const next = game.createEvent("tuolajiGame");
                            next.setContent(tuolajiContent);
                        }
                    },
                },
            };
        },
        prepare: function() {},
        precontent: function(config) {
            lib.init.css(lib.assetURL + 'extension/拖拉机', 'extension');
            Reflect.deleteProperty(lib.extensionMenu['extension_拖拉机'], 'edit');
            delete lib.extensionMenu.extension_拖拉机.delete;
        },
        config: {
            allowSelfCounter: {
                name: "允许自反",
                init: false,
                intro: "开启后，如果你已叫主且无人反主，摸完牌后若有更多级牌，可询问你是否反自己的主。"
            },
            eyeOfFlame: {
                name: "火眼金睛",
                init: false,
                intro: "开启后，在其他人武将框下方显示其剩余副牌花色（♠♥♣♦），出完某花色的副牌时该花色淡出。"
            },
            dcfl_jilu: {
                name: "出牌记录",
                init: false,
                intro: "开启后，进入拖拉机游戏时，屏幕会显示【出牌记录】按钮，点击可查看本局的出牌历史。"
            },
            startFromTwo: {
                name: "从2打起",
                init: false,
                intro: "开启后，每次开启全新游戏时，双方将直接从第 2 级开始打，不打 A 级。读取存档不受此影响。"
            },
            rulesButton: {
                name: '<div class="tuolaji_menu">游戏规则</div>',
                "clear": true,
                "onclick": function() {
                    setTimeout(function() {
                        showTuolajiRules();
                    }, 100);
                },
            },
        },
        help: {},
        package: {
            character: {
                character: {},
                translate: {}
            },
            card: {
                card: {},
                translate: {},
                list: []
            },
            skill: {
                skill: {},
                translate: {}
            },
            intro: "在【乱斗】模式中打开游戏",
            author: "山佬进城",
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
    };
}