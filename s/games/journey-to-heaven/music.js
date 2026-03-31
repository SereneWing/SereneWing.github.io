/**
 * 大闹天宫 - 背景音乐生成模块
 * Journey to Heaven - Background Music Generator
 *
 * 使用 Web Audio API 生成完整的1分钟战斗音乐
 * 采用中国传统五声音阶 + 打击乐节奏
 *
 * @author SereneWing
 * @version 1.0.0
 */

(function(global) {
    'use strict';

    // ==================== 音乐配置 ====================
    const MUSIC_CONFIG = {
        BPM: 120,                    // 每分钟节拍数
        DURATION: 60,                // 总时长（秒）
        SAMPLE_RATE: 44100,

        // 音阶频率 (中国传统五声音阶)
        // 宫(1)、商(2)、角(3)、徵(5)、羽(6)
        SCALE: {
            // 低音区 (3组)
            G1: 98.00,   // G2 - 宫
            A1: 110.00,  // A2 - 商
            B1: 123.47,  // B2 - 角
            D2: 146.83,  // D3 - 徵
            E2: 164.81,  // E3 - 羽
            // 中音区 (4组)
            G2: 196.00,  // G3 - 宫
            A2: 220.00,  // A3 - 商
            B2: 246.94,  // B3 - 角
            D3: 293.66,  // D4 - 徵
            E3: 329.63,  // E4 - 羽
            // 高音区 (5组)
            G3: 392.00,  // G4 - 宫
            A3: 440.00,  // A4 - 商
            B3: 493.88,  // B4 - 角
            D4: 587.33,  // D5 - 徵
            E4: 659.25,  // E5 - 羽
            // 高音区 (6组)
            G4: 783.99,  // G5 - 宫
            A4: 880.00,  // A5 - 商
        },

        // 鼓点配置
        DRUMS: {
            // 锣 (large gong) - 庄严开场
            LUO_FREQ: 150,
            // 鼓 (drum) - 战斗节奏
            GU_FREQ: 100,
            // 镲 (cymbals) - 激烈战斗
            CHAI_FREQ: 600,
            // 铙 (nao) - 过渡
            NAO_FREQ: 400,
        }
    };

    // ==================== 音乐片段定义 ====================
    // 使用五声音阶构建旋律
    // 宫调式: 1 2 3 5 6 (对应 G A B D E)

    const THEME = {
        // 主旋律 - 孙悟空主题 (英勇、活泼)
        WUKONG_MELODY: [
            // 第一句: 勇敢前进
            { t: 0, n: 'G3', d: 0.3 },
            { t: 0.3, n: 'A3', d: 0.3 },
            { t: 0.6, n: 'B3', d: 0.3 },
            { t: 0.9, n: 'D4', d: 0.3 },
            { t: 1.2, n: 'E4', d: 0.3 },
            { t: 1.5, n: 'D4', d: 0.3 },
            { t: 1.8, n: 'B3', d: 0.6 },

            // 第二句: 战斗
            { t: 2.4, n: 'A3', d: 0.3 },
            { t: 2.7, n: 'G3', d: 0.3 },
            { t: 3.0, n: 'E3', d: 0.3 },
            { t: 3.3, n: 'D3', d: 0.3 },
            { t: 3.6, n: 'G3', d: 0.6 },

            // 第三句: 冲向天宫
            { t: 4.2, n: 'D4', d: 0.15 },
            { t: 4.35, n: 'D4', d: 0.15 },
            { t: 4.5, n: 'E4', d: 0.15 },
            { t: 4.65, n: 'G4', d: 0.15 },
            { t: 4.8, n: 'A4', d: 0.3 },
            { t: 5.1, n: 'G4', d: 0.3 },
            { t: 5.4, n: 'E4', d: 0.6 },
        ],

        // 战斗主题 - 激烈对抗
        BATTLE_MELODY: [
            // 急促的进攻
            { t: 0, n: 'E4', d: 0.2 },
            { t: 0.2, n: 'D4', d: 0.2 },
            { t: 0.4, n: 'B3', d: 0.2 },
            { t: 0.6, n: 'A3', d: 0.2 },
            { t: 0.8, n: 'B3', d: 0.2 },
            { t: 1.0, n: 'D4', d: 0.2 },
            { t: 1.2, n: 'E4', d: 0.2 },
            { t: 1.4, n: 'D4', d: 0.2 },

            // 重复加强
            { t: 1.6, n: 'E4', d: 0.2 },
            { t: 1.8, n: 'D4', d: 0.2 },
            { t: 2.0, n: 'B3', d: 0.2 },
            { t: 2.2, n: 'A3', d: 0.2 },
            { t: 2.4, n: 'G3', d: 0.4 },
            { t: 2.8, n: 'A3', d: 0.4 },
            { t: 3.2, n: 'B3', d: 0.4 },
        ],

        // 胜利主题 - 成功到达天宫
        VICTORY_MELODY: [
            // 凯旋
            { t: 0, n: 'G4', d: 0.4 },
            { t: 0.4, n: 'A4', d: 0.4 },
            { t: 0.8, n: 'B4', d: 0.4 },
            { t: 1.2, n: 'D4', d: 0.4 },
            { t: 1.6, n: 'E4', d: 0.8 },
            { t: 2.4, n: 'D4', d: 0.4 },
            { t: 2.8, n: 'B3', d: 0.4 },
            { t: 3.2, n: 'A3', d: 0.4 },
            { t: 3.6, n: 'G3', d: 0.8 },
        ],

        // 天宫主题 - 神秘庄严
        TIANGONG_MELODY: [
            // 悠扬神秘
            { t: 0, n: 'E4', d: 1.0 },
            { t: 1.0, n: 'D4', d: 0.5 },
            { t: 1.5, n: 'B3', d: 0.5 },
            { t: 2.0, n: 'A3', d: 1.0 },
            { t: 3.0, n: 'G3', d: 1.0 },
            { t: 4.0, n: 'A3', d: 0.5 },
            { t: 4.5, n: 'B3', d: 0.5 },
            { t: 5.0, n: 'D4', d: 1.0 },
        ],

        // 敌人主题 - 威胁感
        ENEMY_MELODY: [
            // 阴森低沉
            { t: 0, n: 'G2', d: 0.4 },
            { t: 0.4, n: 'E2', d: 0.4 },
            { t: 0.8, n: 'D2', d: 0.4 },
            { t: 1.2, n: 'E2', d: 0.4 },
            { t: 1.6, n: 'G2', d: 0.4 },
            { t: 2.0, n: 'A2', d: 0.4 },
            { t: 2.4, n: 'G2', d: 0.8 },
        ],
    };

    // ==================== 鼓点节奏型 ====================
    const RHYTHMS = {
        // 开场鼓 - 庄严隆重
        INTRO: [
            { t: 0, s: 'luo', v: 1.0 },
            { t: 0.5, s: 'gu', v: 0.5 },
            { t: 1.0, s: 'gu', v: 0.5 },
            { t: 1.5, s: 'luo', v: 0.8 },
            { t: 2.0, s: 'gu', v: 0.5 },
        ],

        // 战斗鼓 - 激烈急促
        BATTLE: [
            { t: 0, s: 'gu', v: 0.8 },
            { t: 0.25, s: 'chai', v: 0.6 },
            { t: 0.5, s: 'gu', v: 0.8 },
            { t: 0.75, s: 'gu', v: 0.6 },
            { t: 1.0, s: 'chai', v: 0.7 },
            { t: 1.25, s: 'gu', v: 0.8 },
            { t: 1.5, s: 'nao', v: 0.5 },
            { t: 1.75, s: 'gu', v: 0.6 },
        ],

        // 胜利鼓 - 欢快喜庆
        VICTORY: [
            { t: 0, s: 'luo', v: 1.0 },
            { t: 0.3, s: 'gu', v: 0.8 },
            { t: 0.6, s: 'chai', v: 0.9 },
            { t: 0.9, s: 'gu', v: 0.8 },
            { t: 1.2, s: 'luo', v: 1.0 },
            { t: 1.5, s: 'chai', v: 0.8 },
        ],

        // 天宫鼓 - 神秘飘渺
        TIANGONG: [
            { t: 0, s: 'nao', v: 0.5 },
            { t: 1.0, s: 'luo', v: 0.6 },
            { t: 2.0, s: 'gu', v: 0.3 },
            { t: 3.0, s: 'nao', v: 0.5 },
        ],
    };

    // ==================== 音乐生成器类 ====================
    class HeavenlyPalaceMusic {
        constructor() {
            this.audioContext = null;
            this.masterGain = null;
            this.isPlaying = false;
            this.startTime = 0;
            this.animationFrameId = null;
            this.scheduledNotes = [];
        }

        /**
         * 初始化音频上下文
         */
        init() {
            if (!this.audioContext) {
                this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            }

            if (this.audioContext.state === 'suspended') {
                this.audioContext.resume();
            }

            // 创建主音量控制
            this.masterGain = this.audioContext.createGain();
            this.masterGain.gain.setValueAtTime(0.7, this.audioContext.currentTime);
            this.masterGain.connect(this.audioContext.destination);

            // 创建混响效果
            this.convolver = this.createReverb();
            this.convolver.connect(this.masterGain);

            return this;
        }

        /**
         * 创建混响效果
         */
        createReverb() {
            const convolver = this.audioContext.createConvolver();
            const rate = this.audioContext.sampleRate;
            const length = rate * 2; // 2秒混响
            const impulse = this.audioContext.createBuffer(2, length, rate);

            for (let channel = 0; channel < 2; channel++) {
                const channelData = impulse.getChannelData(channel);
                for (let i = 0; i < length; i++) {
                    channelData[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, 2);
                }
            }

            convolver.buffer = impulse;
            return convolver;
        }

        /**
         * 播放完整音乐
         */
        play() {
            if (this.isPlaying) return;

            this.init();
            this.isPlaying = true;
            this.startTime = this.audioContext.currentTime;

            // 播放60秒完整音乐
            this.playFullComposition();

            return this;
        }

        /**
         * 停止音乐
         */
        stop() {
            this.isPlaying = false;

            if (this.animationFrameId) {
                cancelAnimationFrame(this.animationFrameId);
            }

            if (this.masterGain) {
                const now = this.audioContext.currentTime;
                this.masterGain.gain.linearRampToValueAtTime(0, now + 0.5);
            }

            setTimeout(() => {
                if (this.audioContext) {
                    this.audioContext.close();
                    this.audioContext = null;
                }
            }, 600);

            return this;
        }

        /**
         * 播放完整作曲
         * 60秒结构:
         * 0-5s:   开场 (Intro) - 鼓声+天宫主题
         * 5-15s:  呈示部 - 孙悟空主题
         * 15-25s: 发展部 - 战斗主题
         * 25-35s: 天宫主题
         * 35-45s: 激烈战斗
         * 45-55s: 敌人主题
         * 55-60s: 胜利主题 (结尾)
         */
        playFullComposition() {
            const startTime = this.audioContext.currentTime;

            // 0-5s: 开场 - 天宫主题 + 鼓点
            this.scheduleSection(startTime, 0, 5,
                [THEME.TIANGONG_MELODY, 0.6],
                [THEME.WUKONG_MELODY, 0.3],
                RHYTHMS.INTRO
            );

            // 5-15s: 呈示部 - 孙悟空主题
            this.scheduleSection(startTime, 5, 10,
                [THEME.WUKONG_MELODY, 0.8],
                [THEME.BATTLE_MELODY, 0.2],
                RHYTHMS.BATTLE
            );

            // 10-15s: 过渡
            this.scheduleSection(startTime, 10, 15,
                [THEME.WUKONG_MELODY, 0.6],
                [THEME.BATTLE_MELODY, 0.4],
                RHYTHMS.BATTLE
            );

            // 15-25s: 发展部 - 激烈战斗
            this.scheduleSection(startTime, 15, 20,
                [THEME.BATTLE_MELODY, 0.9],
                [THEME.ENEMY_MELODY, 0.3],
                RHYTHMS.BATTLE
            );

            this.scheduleSection(startTime, 20, 25,
                [THEME.BATTLE_MELODY, 0.7],
                [THEME.WUKONG_MELODY, 0.5],
                RHYTHMS.BATTLE
            );

            // 25-35s: 天宫主题 - 神秘飘渺
            this.scheduleSection(startTime, 25, 30,
                [THEME.TIANGONG_MELODY, 0.7],
                [THEME.WUKONG_MELODY, 0.3],
                RHYTHMS.TIANGONG
            );

            this.scheduleSection(startTime, 30, 35,
                [THEME.TIANGONG_MELODY, 0.5],
                [THEME.WUKONG_MELODY, 0.5],
                RHYTHMS.TIANGONG
            );

            // 35-45s: 高潮 - 最激烈战斗
            this.scheduleSection(startTime, 35, 40,
                [THEME.BATTLE_MELODY, 1.0],
                [THEME.ENEMY_MELODY, 0.5],
                RHYTHMS.BATTLE
            );

            this.scheduleSection(startTime, 40, 45,
                [THEME.BATTLE_MELODY, 0.8],
                [THEME.WUKONG_MELODY, 0.6],
                RHYTHMS.BATTLE
            );

            // 45-55s: 敌人主题 + 孙悟空主题交织
            this.scheduleSection(startTime, 45, 50,
                [THEME.ENEMY_MELODY, 0.5],
                [THEME.WUKONG_MELODY, 0.7],
                RHYTHMS.BATTLE
            );

            this.scheduleSection(startTime, 50, 55,
                [THEME.WUKONG_MELODY, 0.8],
                [THEME.BATTLE_MELODY, 0.4],
                RHYTHMS.BATTLE
            );

            // 55-60s: 胜利结尾
            this.scheduleSection(startTime, 55, 60,
                [THEME.VICTORY_MELODY, 1.0],
                [THEME.WUKONG_MELODY, 0.3],
                RHYTHMS.VICTORY
            );
        }

        /**
         * 调度一个段落
         * @param {number} compositionStart - 作曲开始时间
         * @param {number} sectionStart - 段落开始时间(相对)
         * @param {number} sectionEnd - 段落结束时间(相对)
         * @param {Array} melody1 - 主旋律 [旋律数组, 音量]
         * @param {Array} melody2 - 副旋律 [旋律数组, 音量]
         * @param {Array} rhythm - 鼓点节奏
         */
        scheduleSection(compositionStart, sectionStart, sectionEnd, melody1, melody2, rhythm) {
            const ctx = this.audioContext;
            const sectionDuration = sectionEnd - sectionStart;

            // 循环播放旋律 (适应段落长度)
            const loopMelody = (melody, volume, baseTime) => {
                const totalDuration = sectionEnd - sectionStart;
                const melodyDuration = this.getMelodyDuration(melody);

                let elapsed = 0;
                let cycle = 0;

                while (elapsed < totalDuration) {
                    melody.forEach(note => {
                        const absTime = compositionStart + sectionStart + elapsed + note.t + (cycle * melodyDuration);
                        if (absTime < compositionStart + sectionEnd) {
                            this.playNote(note.n, absTime - compositionStart + sectionStart, note.d * volume, 'melody');
                        }
                    });
                    elapsed += melodyDuration;
                    cycle++;
                }
            };

            // 循环播放鼓点
            const loopRhythm = (rhythmPattern, baseTime) => {
                const rhythmDuration = this.getRhythmDuration(rhythmPattern);
                let elapsed = 0;

                while (elapsed < sectionDuration) {
                    rhythmPattern.forEach(beat => {
                        const absTime = compositionStart + sectionStart + elapsed + beat.t;
                        if (absTime < compositionStart + sectionEnd) {
                            this.playDrum(beat.s, absTime - compositionStart + sectionStart, beat.v);
                        }
                    });
                    elapsed += rhythmDuration;
                }
            };

            // 调度旋律1
            loopMelody(melody1[0], melody1[1], sectionStart);
            // 调度旋律2 (错开半拍增强层次感)
            const melody2Offset = melody2[0] === THEME.WUKONG_MELODY ? 0.5 : 0;
            loopMelody(melody2[0], melody2[1], sectionStart + melody2Offset);
            // 调度鼓点
            loopRhythm(rhythm, sectionStart);

            // 添加背景和声垫音
            this.addHarmonyPad(compositionStart, sectionStart, sectionEnd - sectionStart);
        }

        /**
         * 添加背景和声垫音
         */
        addHarmonyPad(startTime, relativeStart, duration) {
            const ctx = this.audioContext;
            const now = startTime + relativeStart;

            // 五声音阶和声
            const harmonyNotes = ['G3', 'B3', 'D4', 'E4', 'G4'];

            harmonyNotes.forEach((note, i) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                const filter = ctx.createBiquadFilter();

                osc.type = 'triangle';
                osc.frequency.setValueAtTime(MUSIC_CONFIG.SCALE[note], now);

                filter.type = 'lowpass';
                filter.frequency.setValueAtTime(1000, now);

                gain.gain.setValueAtTime(0, now);
                gain.gain.linearRampToValueAtTime(0.015, now + 0.5);
                gain.gain.setValueAtTime(0.015, now + duration - 0.5);
                gain.gain.linearRampToValueAtTime(0, now + duration);

                osc.connect(filter);
                filter.connect(gain);
                gain.connect(this.masterGain);

                osc.start(now);
                osc.stop(now + duration);
            });
        }

        /**
         * 获取旋律总时长
         */
        getMelodyDuration(melody) {
            let maxTime = 0;
            melody.forEach(note => {
                const endTime = note.t + note.d;
                if (endTime > maxTime) maxTime = endTime;
            });
            return maxTime;
        }

        /**
         * 获取节奏型总时长
         */
        getRhythmDuration(rhythm) {
            let maxTime = 0;
            rhythm.forEach(beat => {
                if (beat.t > maxTime) maxTime = beat.t;
            });
            return maxTime + 0.5;
        }

        /**
         * 播放音符
         * @param {string} noteName - 音符名称
         * @param {number} time - 相对播放时间
         * @param {number} duration - 持续时间
         * @param {string} type - 音符类型
         */
        playNote(noteName, time, duration, type = 'melody') {
            const ctx = this.audioContext;
            const now = this.audioContext.currentTime;
            const absTime = now + time;

            const freq = MUSIC_CONFIG.SCALE[noteName];
            if (!freq) return;

            // 创建声音
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            const filter = ctx.createBiquadFilter();

            // 根据类型选择音色
            switch (type) {
                case 'melody':
                    // 琵琶/古筝风格 - 弹拨感
                    osc.type = 'sawtooth';
                    osc.frequency.setValueAtTime(freq, absTime);
                    // 滑音效果
                    osc.frequency.linearRampToValueAtTime(freq * 0.98, absTime + duration * 0.3);
                    osc.frequency.linearRampToValueAtTime(freq, absTime + duration);

                    filter.type = 'lowpass';
                    filter.frequency.setValueAtTime(3000, absTime);
                    filter.frequency.linearRampToValueAtTime(1500, absTime + duration);

                    gain.gain.setValueAtTime(0, absTime);
                    gain.gain.linearRampToValueAtTime(0.3, absTime + 0.02);
                    gain.gain.exponentialRampToValueAtTime(0.01, absTime + duration);
                    break;

                case 'pluck':
                    // 打击乐风格的短促音
                    osc.type = 'square';
                    osc.frequency.setValueAtTime(freq, absTime);
                    osc.frequency.exponentialRampToValueAtTime(freq * 0.5, absTime + duration * 0.5);

                    filter.type = 'bandpass';
                    filter.frequency.setValueAtTime(2000, absTime);

                    gain.gain.setValueAtTime(0.4, absTime);
                    gain.gain.exponentialRampToValueAtTime(0.01, absTime + duration * 0.7);
                    break;

                default:
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(freq, absTime);
                    gain.gain.setValueAtTime(0.2, absTime);
                    gain.gain.exponentialRampToValueAtTime(0.01, absTime + duration);
            }

            osc.connect(filter);
            filter.connect(gain);
            gain.connect(this.masterGain);
            gain.connect(this.convolver);

            osc.start(absTime);
            osc.stop(absTime + duration + 0.1);
        }

        /**
         * 播放打击乐
         * @param {string} type - 打击乐类型
         * @param {number} time - 相对播放时间
         * @param {number} volume - 音量
         */
        playDrum(type, time, volume = 1) {
            const ctx = this.audioContext;
            const now = this.audioContext.currentTime;
            const absTime = now + time;

            switch (type) {
                case 'luo':
                    // 锣 - 洪亮庄严
                    this.playGong(ctx, absTime, MUSIC_CONFIG.DRUMS.LUO_FREQ, volume * 0.6);
                    break;

                case 'gu':
                    // 鼓 - 低沉有力
                    this.playDrumHit(ctx, absTime, MUSIC_CONFIG.DRUMS.GU_FREQ, volume * 0.8);
                    break;

                case 'chai':
                    // 镲 - 尖锐激烈
                    this.playCymbals(ctx, absTime, volume * 0.5);
                    break;

                case 'nao':
                    // 铙 - 过渡装饰
                    this.playGong(ctx, absTime, MUSIC_CONFIG.DRUMS.NAO_FREQ, volume * 0.4);
                    break;
            }
        }

        /**
         * 播放锣声
         */
        playGong(ctx, time, freq, volume) {
            // 噪声 + 正弦波混合
            const bufferSize = ctx.sampleRate * 0.5;
            const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
            const data = buffer.getChannelData(0);

            for (let i = 0; i < bufferSize; i++) {
                data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufferSize, 3);
            }

            const noise = ctx.createBufferSource();
            noise.buffer = buffer;

            const noiseGain = ctx.createGain();
            noiseGain.gain.setValueAtTime(volume * 0.3, time);
            noiseGain.gain.exponentialRampToValueAtTime(0.01, time + 0.4);

            const filter = ctx.createBiquadFilter();
            filter.type = 'lowpass';
            filter.frequency.setValueAtTime(800, time);

            noise.connect(filter);
            filter.connect(noiseGain);
            noiseGain.connect(this.masterGain);
            noiseGain.connect(this.convolver);

            // 正弦波谐波
            const osc = ctx.createOscillator();
            const oscGain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, time);
            osc.frequency.exponentialRampToValueAtTime(freq * 0.5, time + 0.5);

            oscGain.gain.setValueAtTime(volume * 0.5, time);
            oscGain.gain.exponentialRampToValueAtTime(0.01, time + 0.5);

            osc.connect(oscGain);
            oscGain.connect(this.masterGain);
            oscGain.connect(this.convolver);

            noise.start(time);
            noise.stop(time + 0.5);
            osc.start(time);
            osc.stop(time + 0.6);
        }

        /**
         * 播放鼓声
         */
        playDrumHit(ctx, time, freq, volume) {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq * 2, time);
            osc.frequency.exponentialRampToValueAtTime(freq, time + 0.1);

            gain.gain.setValueAtTime(volume, time);
            gain.gain.exponentialRampToValueAtTime(0.01, time + 0.3);

            osc.connect(gain);
            gain.connect(this.masterGain);
            gain.connect(this.convolver);

            osc.start(time);
            osc.stop(time + 0.4);
        }

        /**
         * 播放镲声
         */
        playCymbals(ctx, time, volume) {
            const bufferSize = ctx.sampleRate * 0.3;
            const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
            const data = buffer.getChannelData(0);

            for (let i = 0; i < bufferSize; i++) {
                data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufferSize, 5);
            }

            const noise = ctx.createBufferSource();
            noise.buffer = buffer;

            const gain = ctx.createGain();
            gain.gain.setValueAtTime(volume, time);
            gain.gain.exponentialRampToValueAtTime(0.01, time + 0.2);

            const filter = ctx.createBiquadFilter();
            filter.type = 'highpass';
            filter.frequency.setValueAtTime(5000, time);

            noise.connect(filter);
            filter.connect(gain);
            gain.connect(this.masterGain);
            gain.connect(this.convolver);

            noise.start(time);
            noise.stop(time + 0.3);
        }

        /**
         * 获取播放状态
         */
        getIsPlaying() {
            return this.isPlaying;
        }

        /**
         * 获取当前播放进度 (0-1)
         */
        getProgress() {
            if (!this.isPlaying || !this.audioContext) return 0;
            const elapsed = this.audioContext.currentTime - this.startTime;
            return Math.min(elapsed / MUSIC_CONFIG.DURATION, 1);
        }
    }

    // ==================== 导出模块 ====================
    global.HeavenlyPalaceMusic = HeavenlyPalaceMusic;
    global.MUSIC_CONFIG = MUSIC_CONFIG;

})(typeof window !== 'undefined' ? window : this);