//抽卡模拟器
        function rollCard(cards, set = {}) {
            // 处理参数设置
            const { speed = 1, scale = 1, y = 0, checkResult = 3 } = set;
            const effectiveScale = Math.max(0.5, Math.min(scale, 3)); // 限制缩放范围
            const effectiveSpeed = Math.max(0.1, Math.min(speed, 5)); // 限制速度范围
        
            // 创建主容器
            const container = document.createElement('div');
            container.id = 'card-container-3d';
            container.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 100;
                pointer-events: none;
                overflow: hidden;
                perspective: 1500px;
            `;
            document.body.appendChild(container);
        
            // 创建3D旋转容器
            const cardCircle = document.createElement('div');
            cardCircle.id = 'card-circle-container';
            cardCircle.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                transform-style: preserve-3d;
                transform: translate(-50%, -50%);
                width: 0;
                height: 0;
            `;
            container.appendChild(cardCircle);
            
            const cardMap = document.createElement('div');
            cardMap.id = 'card-circle-container';
            cardMap.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                transform-style: preserve-3d;
                transform: translate(-50%, -50%);
                width: 0;
                height: 0;
                z-index: 1;
            `;
            container.appendChild(cardMap);
        
            // 卡牌尺寸（根据scale参数缩放）
            const cardWidth = Math.round(120 * effectiveScale);
            const cardHeight = Math.round(180 * effectiveScale);
            const radius = Math.max(180, 80 + cards.length * 12) * effectiveScale; // 动态半径
        
            // 添加CSS样式
            const bottomPX = window.innerHeight + cardHeight + y;
            const style = document.createElement('style');
            style.textContent = `
                .card-3d {
                    position: fixed;
                    transform-style: preserve-3d;
                    transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275), 
                                opacity 0.8s ease, 
                                filter 0.8s ease;
                    backface-visibility: hidden;
                    /* 初始位置在屏幕底部下方 */
                    bottom: ${-bottomPX}px;
                    left: calc(50% - ${cardWidth/2}px);
                    width: ${cardWidth}px;
                    height: ${cardHeight}px;
                }
                
                .card-face {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    backface-visibility: hidden;
                    background-size: cover;
                    background-position: center;
                    border-radius: 8px;
                    box-shadow: 0 8px 25px rgba(0,0,0,0.4);
                    border: 1px solid rgba(255,255,255,0.15);
                }
                
                .card-front {
                    transform: rotateY(180deg);
                }
                
                .card-back {
                    background-color: #1a1a1a;
                    background-image: linear-gradient(145deg, #2c2c2c 0%, #121212 100%);
                }
                
                .card-blur {
                    filter: blur(0.5px);
                }
                
                @keyframes rotateCircle {
                    from { transform: translate(-50%, -50%) rotateY(0); }
                    to { transform: translate(-50%, -50%) rotateY(360deg); }
                }
            `;
            document.head.appendChild(style);
        
            // 创建卡牌
            const cardElements = cards.map((card, i) => {
                const cardEl = document.createElement('div');
                cardEl.className = 'card-3d';
                cardEl.dataset.name = card.name;
                
                // 创建卡牌正反面
                const front = document.createElement('div');
                front.className = 'card-face card-front';
                front.style.backgroundImage = `url('${lib.assetURL}${card.front}')`;
                
                const back = document.createElement('div');
                back.className = 'card-face card-back';
                back.style.backgroundImage = `url('${lib.assetURL}${card.back}')`;
                
                cardEl.appendChild(front);
                cardEl.appendChild(back);
                cardCircle.appendChild(cardEl);
                
                // 存储卡牌数据
                cardEl.cardData = card;
                
                const fakeCard = cardEl.cloneNode(true);
                fakeCard.style.filter = 'opacity(0)';
                fakeCard.style.transform = `translate3d(0, ${-bottomPX + (cardHeight*0.5)}px, 0)`;
                fakeCard.style.transition = `transform 1.2s 0s cubic-bezier(0.175, 0.885, 0.32, 1.275), filter 0.3s linear`;
                cardMap.appendChild(fakeCard);
                cardEl.fakeCard = fakeCard;
                
                return cardEl;
            });
        
            // 飞入动画
            let flyInComplete = false;
            
            cardElements.forEach((card, i) => {
                const delay = i * 200; // 每张卡牌延迟200ms
                setTimeout(() => {
                    // 计算卡牌在圆形上的位置（角度均匀分布）
                    const angle = (360 / cards.length) * i;
                    const rad = angle * (Math.PI / 180);
                    
                    // 计算3D位置 - 确保卡牌面向中心轴
                    const x = Math.sin(rad) * radius;
                    const z = Math.cos(rad) * radius;
                    
                    // 计算卡牌朝向 - 确保正面朝向中心轴
                    const rotationY = angle;
                    
                    card.style.transition = `transform 1.2s ${i * 0.15}s cubic-bezier(0.175, 0.885, 0.32, 1.275)`;
                    card.style.transform = `translate3d(${x}px, ${-bottomPX + (cardHeight*0.5)}px, ${z}px) rotateY(${rotationY}deg)`;
                    
                    // 标记最后一张卡牌动画完成
                    /*if (i === cards.length - 1) {
                        setTimeout(() => {
                            flyInComplete = true;
                            // 开始持续旋转
                            const duration = 16 / effectiveSpeed; // 根据速度调整
                            cardCircle.style.animation = `rotateCircle ${duration}s infinite linear`;
                        }, 1200);
                    }*/
                }, delay);
            });
            setTimeout(() => {
                flyInComplete = true;
                // 开始持续旋转
                const duration = 16 / effectiveSpeed; // 根据速度调整
                cardCircle.style.animation = `rotateCircle ${duration}s infinite linear`;
            }, 200);
        
            // 返回控制对象
            return {
                cards: cardElements,
                
                draw(name) {
                    if (!flyInComplete) return;
                    
                    // 停止旋转
                    //cardCircle.style.animation = 'none';
                    
                    const targetCard0 = cardElements.find(c => c.dataset.name === name);
                    if (!targetCard0) return;
                    
                    targetCard0.style.display = 'none';
                    const targetCard = targetCard0.fakeCard;
                    
                    // 移动目标卡牌到中心并正面朝向屏幕
                    targetCard.style.zIndex = '100';
                    targetCard.style.transform = `
                        translate3d(0, ${-bottomPX + (cardHeight*0.5)}px, 300px) 
                        rotateY(${180+360}deg) 
                        scale(1.3)
                    `;//180deg
                    targetCard.style.filter = 'none';
                    //targetCard.style.opacity = '1';
                    
                    let whileTime = 1000 / Math.max(1,cardElements.length-1);
                    let timeGroups = [];
                    let index = 0;
                    for(let c=0;c<cardElements.length;c++) {
                        if(cardElements[c] === targetCard0) continue;
                        timeGroups.push(index * whileTime);
                        index++;
                    }
                    timeGroups.randomSort();
                    
                    // 其他卡牌添加模糊效果并掉落
                    cardElements.forEach(card => {
                        if (card !== targetCard0) {
                            //card.classList.add('card-blur');
                            let time = timeGroups.length?timeGroups.shift():0;
                            setTimeout(function() {
                                card.style.transition = 'transform 1.2s cubic-bezier(0.55, 0.085, 0.68, 0.53), opacity 1.2s ease';
                                card.style.transform += ' translateY(150vh)';
                            },time);
                        }
                    });
                    
                    // 4.7秒后所有卡牌渐隐消失
                    const end = function() {
                        // 添加渐隐效果
                        container.style.transition = 'opacity 0.7s ease';
                        container.style.opacity = '0';
                        
                        // 清理DOM
                        setTimeout(() => {
                            if (container.parentNode) {
                                document.body.removeChild(container);
                            }
                            if (style.parentNode) {
                                document.head.removeChild(style);
                            }
                        }, 700);
                    };
                    if(typeof checkResult=='function') {
                        checkResult(end);
                    }else {
                        let timer = typeof checkResult=='number'?(checkResult*1000):3000;
                        setTimeout(() => {
                            end();
                        }, timer);
                    }
                },
                
                stop() {
                    // 停止旋转
                    //cardCircle.style.animation = 'none';
                    
                    let whileTime = 1000 / Math.max(1,cardElements.length);
                    let timeGroups = [];
                    for(let c=0;c<cardElements.length;c++) {
                        timeGroups.push(c * whileTime);
                    }
                    timeGroups.randomSort();
                    
                    // 所有卡牌掉落
                    cardElements.forEach(card => {
                        let time = timeGroups.length?timeGroups.shift():0;
                        setTimeout(function() {
                            card.style.transition = 'transform 1.2s cubic-bezier(0.55, 0.085, 0.68, 0.53), opacity 1.2s ease';
                            card.style.transform += ' translateY(150vh)';
                            //card.style.opacity = '0.3';
                        },time);
                    });
                    
                    // 1.2秒后整个容器渐隐
                    setTimeout(() => {
                        container.style.transition = 'opacity 0.7s ease';
                        container.style.opacity = '0';
                        
                        // 清理DOM
                        setTimeout(() => {
                            if (container.parentNode) {
                                document.body.removeChild(container);
                            }
                            if (style.parentNode) {
                                document.head.removeChild(style);
                            }
                        }, 700);
                    }, 1200);
                }
            };
        };