var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.objectCreate = $jscomp.ASSUME_ES5 || "function" == typeof Object.create ? Object.create : function(a) {
    var b = function() {};
    b.prototype = a;
    return new b
};
$jscomp.underscoreProtoCanBeSet = function() {
    var a = {
            a: !0
        },
        b = {};
    try {
        return b.__proto__ = a, b.a
    } catch (e) {}
    return !1
};
$jscomp.setPrototypeOf = "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf : $jscomp.underscoreProtoCanBeSet() ? function(a, b) {
    a.__proto__ = b;
    if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
    return a
} : null;
$jscomp.inherits = function(a, b) {
    a.prototype = $jscomp.objectCreate(b.prototype);
    a.prototype.constructor = a;
    if ($jscomp.setPrototypeOf) {
        var e = $jscomp.setPrototypeOf;
        e(a, b)
    } else
        for (e in b)
            if ("prototype" != e)
                if (Object.defineProperties) {
                    var c = Object.getOwnPropertyDescriptor(b, e);
                    c && Object.defineProperty(a, e, c)
                } else a[e] = b[e];
    a.superClass_ = b.prototype
};
var game_music, Boot = function() {
    return Phaser.Scene.call(this, "boot") || this
};
$jscomp.inherits(Boot, Phaser.Scene);
Boot.prototype.preload = function() {
    this.load.image("bg_menu", "img/bg_menu.png");
    this.load.spritesheet("game_title2", "img/game_title2.png", {
        frameWidth: 526,
        frameHeight: 341
    });
    this.load.image("tilebg", "img/tilebg.png");
    this.load.image("btn_start", "img/btn_start.png")
};
Boot.prototype.create = function() {
    var a = localStorage.getItem("rf_lucky_slot");
    null !== a && (game_config.cur_cash = a);
    this.scale.stopListeners();
    this.scene.start("load")
};
var Load = function() {
    return Phaser.Scene.call(this, "load") || this
};
$jscomp.inherits(Load, Phaser.Scene);
Load.prototype.preload = function() {
    var a = this;
    this.add.tileSprite(0, 0, config.width, config.height, "tilebg").setOrigin(0, 0);
    this.add.sprite(config.width / 2, config.height / 2, "bg_menu");
    this.anims.create({
        key: "title",
        frames: this.anims.generateFrameNumbers("game_title2"),
        frameRate: 5,
        repeat: -1
    });
    this.add.sprite(800, 215, "game_title2").play("title");
    var b = this.add.rectangle(config.width / 2, 500, 600, 20);
    b.setStrokeStyle(4, 16777215);
    b.alpha = .7;
    var e = this.add.rectangle(config.width / 2, 500, 590, 10, 16777215);
    e.alpha =
        .8;
    this.load.on("progress", function(a) {
        e.width = 590 * a
    });
    this.load.on("complete", function() {
        b.destroy();
        e.destroy();
        var c = draw_button(config.width / 2, 510, "start", a);
        a.tweens.add({
            targets: c,
            scaleX: .9,
            scaleY: .9,
            yoyo: !0,
            duration: 800,
            repeat: -1,
            ease: "Sine.easeInOut"
        })
    }, this);
    this.input.on("gameobjectdown", function() {
        a.scene.start("menu")
		// ShowInter();
    }, this);
    this.load.image("symbols", "img/symbols.png");
    this.load.image("symbols_blur", "img/symbols_blur.png");
    this.load.image("machine", "img/machine.png");
    this.load.image("bg",
        "img/bg.png");
    this.load.image("game_title", "img/game_title.png");
    this.load.image("btn_play", "img/btn_play.png");
    this.load.image("btn_about", "img/btn_about.png");
    this.load.image("btn_menu_sound", "img/btn_menu_sound.png");
    this.load.image("btn_menu_sound_off", "img/btn_menu_sound_off.png");
    this.load.image("btn_menu_music", "img/btn_menu_music.png");
    this.load.image("btn_menu_music_off", "img/btn_menu_music_off.png");
    this.load.image("footer", "img/footer.png");
    this.load.image("header", "img/header.png");
    this.load.image("money_bar",
        "img/money_bar.png");
    this.load.image("btn_payout", "img/btn_payout.png");
    this.load.image("btn_spin", "img/btn_spin.png");
    this.load.image("btn_max", "img/btn_max.png");
    this.load.image("btn_back", "img/btn_back.png");
    this.load.image("btn_sound", "img/btn_sound.png");
    this.load.image("btn_sound_off", "img/btn_sound_off.png");
    this.load.image("btn_music", "img/btn_music.png");
    this.load.image("btn_music_off", "img/btn_music_off.png");
    this.load.image("btn_plus_bet", "img/btn_plus_bet.png");
    this.load.image("btn_minus_bet",
        "img/btn_minus_bet.png");
    this.load.image("btn_plus_lines", "img/btn_plus_lines.png");
    this.load.image("btn_minus_lines", "img/btn_minus_lines.png");
    this.load.image("btn_full", "img/btn_full.png");
    this.load.image("btn_no", "img/btn_no.png");
    this.load.image("btn_yes", "img/btn_yes.png");
    this.load.image("win_prompt", "img/win_prompt.png");
    this.load.image("res_bar", "img/res_bar.png");
    this.load.image("lines_bar", "img/lines_bar.png");
    this.load.image("bet_bar", "img/bet_bar.png");
    this.load.image("paytable", "img/paytable.png");
    this.load.image("circle", "img/circle.png");
    this.load.image("line1", "img/line1.png");
    this.load.image("line2", "img/line2.png");
    this.load.image("line3", "img/line3.png");
    this.load.image("star", "img/star.png");
    this.load.image("you_win", "img/you_win.png");
    this.load.image("big_win", "img/big_win.png");
    this.load.image("light1", "img/light1.png");
    this.load.image("coin", "img/coin.png");
    this.load.image("mask", "img/mask.png");
    this.load.image("separate", "img/separate.png");
    this.load.image("about", "img/about.png");
    this.load.image("about_window", "img/about_window.png");
    this.load.spritesheet("coins", "img/coins.png", {
        frameWidth: 70,
        frameHeight: 70
    });
    this.load.spritesheet("lever", "img/lever.png", {
        frameWidth: 77,
        frameHeight: 351
    });
    this.load.spritesheet("li", "img/li.png", {
        frameWidth: 57.5,
        frameHeight: 397
    });
    this.load.audio("Slot Machine Spin Loop", "audio/Slot Machine Spin Loop.mp3");
    this.load.audio("Slot Machine Mega Win", "audio/Slot Machine Mega Win.mp3");
    this.load.audio("Slot Arm Start", "audio/Slot Arm Start.mp3");
    this.load.audio("Get Coins",
        "audio/Get Coins.mp3");
    this.load.audio("Slot line", "audio/Slot line.mp3");
    this.load.audio("click2", "audio/click2.mp3");
    this.load.audio("music", "audio/music.mp3");
    this.load.audio("Button", "audio/Button.mp3");
    this.load.audio("Bonus Lose", "audio/Bonus Lose.mp3");
    this.load.audio("Slot coins", "audio/Slot coins.mp3");
    this.load.audio("Slot Machine Spin Button", "audio/Slot Machine Spin Button.mp3");
    this.load.audio("Slot Machine Bonus Lose", "audio/Slot Machine Bonus Lose.mp3");
    for (var c = 1; 5 >= c; c++) this.load.audio("Slot Machine Stop " +
        c, "audio/Slot Machine Stop " + c + ".mp3")
};
Load.prototype.create = function() {};
var Menu = function() {
    return Phaser.Scene.call(this, "menu") || this
};
$jscomp.inherits(Menu, Phaser.Scene);
Menu.prototype.create = function() {
    function a() {
        e = "preinfo";
        c = u.add.container(0, 0);
        c.setDepth(1);
        var a = u.add.rectangle(config.width / 2, config.height / 2, config.width, config.height, 0);
        a.alpha = 0;
        a.name = "dark";
        u.tweens.add({
            targets: a,
            alpha: .7,
            duration: 200
        });
        var b = u.add.sprite(config.width / 2, config.height / 2, "about_window");
        b.alpha = 0;
        b.setScale(.7);
        u.tweens.add({
            targets: b,
            alpha: 1,
            duration: 400,
            scaleX: 1,
            scaleY: 1,
            ease: "Back.easeOut",
            onComplete: function() {
                e = "info"
            }
        });
        var k = u.add.sprite(config.width / 2, config.height /
            2 + 40, "about");
        k.alpha = 0;
        k.setScale(.7);
        u.tweens.add({
            targets: k,
            alpha: 1,
            duration: 400,
            scaleX: 1,
            scaleY: 1,
            ease: "Back.easeOut"
        });
        c.add([a, b, k])
    }

    function b() {
        u.tweens.add({
            targets: c,
            alpha: 0,
            duration: 300,
            onComplete: function() {
                c.destroy(!0, !0);
                e = "menu"
            }
        })
    }
    play_music("music", this);
    var e = "menu",
        c, u = this;
    this.add.tileSprite(0, 0, config.width, config.height, "tilebg").setOrigin(0, 0);
    this.add.sprite(config.width / 2, config.height / 2, "bg_menu");
    this.anims.create({
        key: "title",
        frames: this.anims.generateFrameNumbers("game_title2"),
        frameRate: 5,
        repeat: -1
    });
    var y = this.add.sprite(800, 215, "game_title2");
    y.play("title");
    this.tweens.add({
        targets: y,
        scaleX: .9,
        scaleY: .9,
        yoyo: !0,
        duration: 700,
        repeat: -1,
        ease: "Sine.easeInOut"
    });
    draw_button(800, 476, "play", this);
    draw_button(685, 585, "about", this);
    y = draw_button(889, 585, "menu_music", this);
    draw_button(1019, 585, "menu_sound", this);
    game_config.music || y.setTexture("btn_menu_music_off");
    game_config.sound || y.setTexture("btn_menu_sound_off");
    this.input.on("gameobjectdown", function(b, c) {
        var k = this;
        c.button &&
            (play_sound("click2", k), this.tweens.add({
                targets: c,
                scaleX: .9,
                scaleY: .9,
                duration: 100,
                ease: "Linear",
                yoyo: !0,
                onComplete: function() {
                    e = "menu";
                    "play" === c.name ? k.scene.start("game") : "menu_sound" === c.name ? switch_audio(c.name, c, k) : "menu_music" === c.name ? switch_audio(c.name, c, k) : "about" === c.name && a()
                }
            }))
    }, this);
    this.input.on("pointerdown", function() {
        "info" === e && b()
    })
};
var Game = function() {
    return Phaser.Scene.call(this, "game") || this
};
$jscomp.inherits(Game, Phaser.Scene);
Game.prototype.create = function() {
    function a() {
        p = game_config.cur_bet * game_config.cur_payline;
        p = Math.round(10 * p) / 10;
        S.setText(String(p))
    }

    function b() {
        C || "play" !== t || (D.setVisible(!1), E.setVisible(!1), p <= game_config.cur_cash ? (play_sound("Slot Machine Spin Button", f), game_config.cur_cash -= p, F(0), w && w.destroy(!0, !0), x && x.destroy(), v && clearInterval(v), C = !0, t = "spin", T.play("lever_press"), play_sound("Slot Arm Start", f), e()) : 1 >= game_config.cur_cash ? O("refill") : O("nocash"))
    }

    function e() {
        R();
        var d = 0,
            h = setInterval(function() {
                c(P[d]);
                d++;
                5 <= d && clearInterval(h)
            }, 300)
    }

    function c(d) {
        f.tweens.add({
            targets: d,
            y: 1474,
            duration: 800,
            ease: "Back.easeIn",
            onComplete: function() {
                u(d);
                0 === d.id && play_sound("Slot Machine Spin Loop", f)
            }
        })
    }

    function u(d) {
        d.y = 134;
        d.setTexture("symbols_blur");
        f.tweens.add({
            targets: d,
            y: 1474,
            duration: 500,
            ease: "Linear",
            loop: 2,
            onComplete: function() {
                y(d)
            }
        })
    }

    function y(d) {
        d.y = N("start", d.id);
        d.setTexture("symbols");
        f.tweens.add({
            targets: d,
            y: N("end", d.id),
            duration: 800,
            ease: "Back.easeOut",
            onComplete: function() {
                4 === d.id && (k(),
                    C = !1)
            }
        });
        setTimeout(function() {
            play_sound("Slot Machine Stop " + Number(d.id + 1), f)
        }, 400)
    }

    function N(d, h) {
        return "start" === d ? -(134 * A[h] + 858) : 858 - 134 * A[h]
    }

    function R() {
        for (var d = 0; 5 > d; d++) A[d] = Math.floor(10 * Math.random());
        d = k(!0) * game_config.cur_bet;
        if (d > p) {
            var h = Math.round(100 * Math.random()),
                f = !1;
            h >= game_config.winning_rate && (f = !0);
            !f && d >= 3 * p && (h = Math.round(100 * Math.random()), h >= game_config.bigwin_rate && (f = !0));
            if (f)
                for (d = 0; 10 > d; d++) {
                    for (h = 0; 5 > h; h++) A[h] = Math.floor(10 * Math.random());
                    if (k(!0) * game_config.cur_payline <=
                        p) break
                }
        }
    }

    function k(d) {
        for (var h = [], a = [], b = [], c = 0; 3 > c; c++) {
            for (var n = [], l = 0; 5 > l; l++) {
                var e = A[l] + c;
                10 <= e && (e -= 10);
                n.push(e)
            }
            h.push(n)
        }
        c = [];
        for (n = 0; n < game_config.cur_payline; n++) {
            l = [];
            e = !1;
            for (var q = -1, g = 0; 5 > g; g++) {
                var r = game_config.paylines[n][g][0],
                    m = game_config.paylines[n][g][1],
                    k = h[r][m];
                if (0 === l.length) l.push([k, {
                    x: m,
                    y: r,
                    at: n
                }]), 0 === k && (e = !0);
                else if (k === l[g - 1][0]) l.push([k, {
                    x: m,
                    y: r,
                    at: n
                }]);
                else if (e && -1 === q) l.push([k, {
                    x: m,
                    y: r,
                    at: n
                }]), q = k, e = !1;
                else if (-1 != q)
                    if (k === q) l.push([k, {
                        x: m,
                        y: r,
                        at: n
                    }]);
                    else if (0 === k) l.push([l[g - 1][0], {
                    x: m,
                    y: r,
                    at: n
                }]);
                else break;
                else if (0 === k) l.push([l[g - 1][0], {
                    x: m,
                    y: r,
                    at: n
                }]);
                else break
            }
            c.push(l)
        }
        for (n = h = 0; n < c.length; n++)
            if (q = c[n][0], l = c[n], 2 <= l.length)
                if (0 != q[0]) {
                    if (h += game_config.payvalues[q[0]][l.length - 2], 0 < game_config.payvalues[q[0]][l.length - 2])
                        for (a.push(q[1].at), e = 0; e < l.length; e++) b.push(c[n][e][1])
                } else {
                    e = g = 0;
                    r = c[n];
                    for (m = 0; m < r.length; m++)
                        if (0 === r[m][0]) g++;
                        else {
                            e = r[m][0];
                            break
                        }
                    if (2 <= g) {
                        a.push(q[1].at);
                        for (r = 0; r < l.length; r++) b.push(c[n][r][1]);
                        h += game_config.payvalues[q[0]][g -
                            2
                        ]
                    }
                    if (0 < game_config.payvalues[e][l.length - 2])
                        for (a.push(q[1].at), q = 0; q < l.length; q++) b.push(c[n][q][1]);
                    h += game_config.payvalues[e][l.length - 2]
                }
        b = U(b);
        if (d) return h;
        t = "play";
        x && x.destroy();
        x = f.add.particles("star");
        for (d = 0; d < b.length; d++) c = 255 + 134 * b[d].y - 47, G.x = H + 170 * b[d].x - 47, G.y = c, x.createEmitter({
            lifespan: 900,
            speed: {
                min: 10,
                max: 30
            },
            scale: {
                start: 1,
                end: 0
            },
            emitZone: {
                type: "edge",
                source: G,
                quantity: 60
            },
            blendMode: "ADD"
        });
        0 === h && play_sound("Slot Machine Bonus Lose", f);
        F(h * game_config.cur_bet);
        V(a);
        h * game_config.cur_bet >
            p && (D.setVisible(!0), E.setVisible(!0));
        70 < h * game_config.cur_bet && (h * game_config.cur_bet >= 4 * p ? Q("big_win") : h * game_config.cur_bet >= 3 * p && Q("you_win"))
    }

    function F(d) {
        1 < d && play_sound("Get Coins", f);
        d ? game_config.cur_cash += d : d = 0;
        d = Math.round(10 * d) / 10;
        W.setText(String(d));
        game_config.cur_cash = Math.round(10 * game_config.cur_cash) / 10;
        X.setText(String(game_config.cur_cash));
        localStorage.setItem("rf_lucky_slot", game_config.cur_cash)
    }

    function U(d) {
        return d = d.filter(function(d, f, a) {
            return f === a.findIndex(function(f) {
                return f.x ===
                    d.x && f.y === d.y
            })
        })
    }

    function V(d) {
        if (0 < d.length) var a = setTimeout(function() {
            clearTimeout(a);
            var h = d.length,
                b = 0;
            v = setInterval(function() {
                C ? w && (w.destroy(!0, !0), clearInterval(v)) : (I(!0, d[b]), b++, b >= h && (b = 0), 1 < d.length && play_sound("Slot line", f))
            }, 1E3)
        }, 1E3)
    }

    function Y() {
        f.tweens.add({
            targets: m,
            alpha: 0,
            duration: 300,
            onComplete: function() {
                m.destroy(!0, !0);
                t = "play"
            }
        })
    }

    function I(d, a) {
        function b(d) {
            for (var a = 0; 5 > a; a++) {
                var b = game_config.paylines[d],
                    h = H + 170 * b[a][1],
                    c = 255 + 134 * b[a][0],
                    e = void 0;
                if (4 > a) {
                    b[a][0] ===
                        b[a + 1][0] ? e = "line1" : b[a][0] > b[a + 1][0] ? e = "line2" : b[a][0] < b[a + 1][0] && (e = "line3");
                    var g = f.add.sprite(h, c, e);
                    "line1" === e ? g.setOrigin(0, .5) : "line2" === e ? g.setOrigin(0, 1) : "line3" === e && g.setOrigin(0);
                    g.setTint(b[5]);
                    g.setBlendMode(Phaser.BlendModes.ADD);
                    w.add(g)
                }
                h = f.add.sprite(h, c, "circle");
                h.setTint(b[5]);
                h.setBlendMode(Phaser.BlendModes.ADD);
                w.add(h)
            }
        }
        w.destroy(!0, !0);
        w = f.add.group();
        if (d) b(a);
        else
            for (var h = 0; h < game_config.cur_payline; h++) b(h)
    }

    function Q(a) {
		// ShowInter2();
        play_sound("Slot Machine Mega Win", f);
        t = "win";
        var b = f.add.group(),
            d = f.add.rectangle(config.width / 2, config.height / 2, config.width, config.height, 0);
        d.alpha = 0;
        d.name = "dark";
        f.tweens.add({
            targets: d,
            alpha: .7,
            duration: 200
        });
        var c = f.add.sprite(config.width / 2, config.height / 2, "light1");
        f.tweens.add({
            targets: c,
            rotation: 6.28319,
            duration: 1E4,
            loop: -1
        });
        c.setBlendMode(Phaser.BlendModes.ADD);
        if ("big_win" === a) {
            var e = f.add.particles("coins");
            var g = e.createEmitter({
                x: config.width / 2,
                y: config.height + 100,
                lifespan: 3E3,
                frame: 0,
                angle: {
                    min: 235,
                    max: 300
                },
                rotate: {
                    min: 0,
                    max: 360
                },
                speed: {
                    min: 800,
                    max: 1300
                },
                gravityY: 660,
                quantity: 1,
                frequency: 99
            });
            var l = e.createEmitter({
                x: config.width / 2,
                y: config.height + 100,
                lifespan: 3E3,
                frame: 1,
                angle: {
                    min: 235,
                    max: 300
                },
                rotate: {
                    min: 0,
                    max: 360
                },
                speed: {
                    min: 800,
                    max: 1300
                },
                gravityY: 660,
                quantity: 1,
                frequency: 99
            });
            var m = e.createEmitter({
                x: config.width / 2,
                y: config.height + 100,
                lifespan: 3E3,
                frame: 2,
                angle: {
                    min: 235,
                    max: 300
                },
                rotate: {
                    min: 0,
                    max: 360
                },
                speed: {
                    min: 800,
                    max: 1300
                },
                gravityY: 660,
                quantity: 1,
                frequency: 99
            })
        }
        var k = f.add.sprite(config.width / 2, config.height /
            2, a);
        k.setScale(0);
        f.tweens.add({
            targets: k,
            scaleX: 1,
            duration: 600,
            ease: "Back.easeOut",
            onComplete: function() {
                f.tweens.add({
                    targets: k,
                    scaleX: 1.1,
                    scaleY: 1.1,
                    duration: 600,
                    ease: "Sine.easeInOut",
                    yoyo: !0,
                    onComplete: function() {
                        "big_win" === a && (g.stop(), l.stop(), m.stop());
                        f.tweens.add({
                            targets: d,
                            alpha: 0,
                            duration: 300,
                            ease: "Linear"
                        });
                        f.tweens.add({
                            targets: k,
                            scaleY: 0,
                            scaleX: 0,
                            duration: 400,
                            ease: "Back.easeIn"
                        });
                        f.tweens.add({
                            targets: c,
                            scaleY: 0,
                            scaleX: 0,
                            duration: 500,
                            ease: "Back.easeIn",
                            onComplete: function() {
                                t = "play";
                                b.destroy(!0, !0);
                                "big_win" === a && setTimeout(function() {
                                    e.destroy()
                                }, 3E3)
                            }
                        })
                    }
                })
            }
        });
        f.tweens.add({
            targets: k,
            scaleY: 1,
            duration: 500,
            ease: "Back.easeOut"
        });
        b.addMultiple([d, c, k])
    }

    function O(a) {
        play_sound("Bonus Lose", f);
        t = a;
        var b = config.width / 2,
            d = config.height / 2;
        m = f.add.container(b, d);
        m.setDepth(1);
        var c = f.add.rectangle(config.width / 2, config.height / 2, config.width, config.height, 0);
        c.alpha = 0;
        c.name = "dark";
        f.tweens.add({
            targets: c,
            alpha: .7,
            duration: 200
        });
        var e = "YOU DON'T HAVE\nENOUGH MONEY!";
        "refill" === a && (e =
            'YOU DON\'T HAVE\nENOUGH MONEY!\nPress "OK" to get\n' + game_config.refill + " coins!");
        var g = f.add.sprite(config.width / 2 - b, config.height / 2 - d, "win_prompt");
        e = f.add.text(config.width / 2 - b, config.height / 2 - d, e, {
            fontFamily: "bebas",
            fontSize: 45,
            align: "center",
            color: "#FFFFFF"
        }).setOrigin(.5);
        var l = draw_button(config.width / 2 - 70 - b, config.height / 2 - d + 160, "yes", f);
        b = draw_button(config.width / 2 + 70 - b, config.height / 2 - d + 160, "no", f);
        "refill" != a && (l.setVisible(!1), b.setVisible(!1));
        m.add([g, e, l, b]);
        m.alpha = 0;
        m.setScale(.7);
        f.tweens.add({
            targets: m,
            alpha: 1,
            duration: 400,
            scaleX: 1,
            scaleY: 1,
            ease: "Back.easeOut",
            onComplete: function() {
                m.add(c);
                c.setPosition(0, 0);
                m.sendToBack(c);
                "nocash" === a && (t = "nocash2")
            }
        })
    }

    function J() {
        f.tweens.add({
            targets: m,
            alpha: 0,
            duration: 300,
            onComplete: function() {
                m.destroy(!0, !0);
                t = "play"
            }
        })
    }
    var p = game_config.cur_bet * game_config.cur_payline;
    p = Math.round(10 * p) / 10;
    var f = this,
        P = [],
        A = [],
        g = config.width / 2 - game_config.main.width / 2,
        H = 301 + g,
        C = !1,
        m, w = this.add.group(),
        t = "play",
        v;
    this.anims.create({
        key: "lever_press",
        frames: this.anims.generateFrameNumbers("lever"),
        frameRate: 25,
        yoyo: !0
    });
    this.anims.create({
        key: "li",
        frames: this.anims.generateFrameNumbers("li"),
        frameRate: 3,
        repeat: -1
    });
    this.add.tileSprite(0, 0, config.width, config.height, "tilebg").setOrigin(0, 0);
    this.add.sprite(config.width / 2, config.height / 2, "bg");
    var B = this.add.sprite(640 + g, 330, "machine"),
        T = this.add.sprite(1155 + g, 319, "lever");
    this.add.tileSprite(0, 0, config.width, 67, "header").setOrigin(0, 0);
    this.add.sprite(config.width - 400, 0, "separate").setOrigin(0);
    this.add.sprite(400, 0, "separate").setOrigin(0);
    this.add.sprite(config.width - 220, 0, "separate").setOrigin(0);
    this.add.sprite(220, 0, "separate").setOrigin(0);
    this.add.tileSprite(0, config.height, config.width, 100, "footer").setOrigin(0, 1);
    var D = this.add.sprite(330, 400, "li");
    D.play("li");
    D.setVisible(!1);
    var E = this.add.sprite(1267, 400, "li");
    E.play("li");
    E.setVisible(!1);
    this.add.sprite(419 + g, 35, "money_bar");
    this.add.sprite(735 + g, 670, "res_bar");
    this.add.sprite(480 + g, 670, "bet_bar");
    this.add.sprite(221 + g, 670,
        "lines_bar");
    draw_button(1110 + g, 670, "spin", this);
    draw_button(920 + g, 670, "max", this);
    draw_button(950 + g, 35, "payout", this);
    draw_button(561 + g, 668, "plus_bet", this);
    draw_button(399 + g, 669, "minus_bet", this);
    draw_button(302 + g, 668, "plus_lines", this);
    draw_button(140 + g, 669, "minus_lines", this);
    draw_button(1100 + g, 35, "sound", this);
    var z = draw_button(1170 + g, 35, "music", this);
    draw_button(120 + g, 35, "back", this);
    draw_button(200 + g, 35, "full", this);
    game_config.music || z.setTexture("btn_music_off");
    game_config.sound || z.setTexture("btn_sound_off");
    var X = this.add.text(530 + g, 35, String(game_config.cur_cash), {
            fontFamily: "bebas",
            fontSize: 30,
            align: "right",
            color: "#FFFFFF"
        }).setOrigin(1, .5),
        K = this.add.text(221 + g, 680, String(game_config.cur_payline), {
            fontFamily: "bebas",
            fontSize: 30,
            align: "center",
            color: "#FFFFFF"
        }).setOrigin(.5),
        L = this.add.text(480 + g, 680, String(game_config.cur_bet), {
            fontFamily: "bebas",
            fontSize: 30,
            align: "center",
            color: "#FFFFFF"
        }).setOrigin(.5),
        W = this.add.text(820 + g, 682, "0", {
            fontFamily: "bebas",
            fontSize: 30,
            align: "right",
            color: "#FFFFFF"
        }).setOrigin(1,
            .5),
        S = this.add.text(820 + g, 656, String(p), {
            fontFamily: "bebas",
            fontSize: 30,
            align: "right",
            color: "#FFFFFF"
        }).setOrigin(1, .5);
    B = this.add.sprite(B.x, 391, "mask").setVisible(!1);
    B = new Phaser.Display.Masks.BitmapMask(this, B);
    for (z = 0; 5 > z; z++) {
        var M = this.add.tileSprite(H + 170 * z, 858 + 134 * Math.round(7 * Math.random()), 134, 4020, "symbols");
        M.id = z;
        M.setMask(B);
        P.push(M);
        A.push(Math.floor(10 * Math.random()))
    }
    var x, G = new Phaser.Geom.Rectangle(0, 0, 94, 94);
    this.input.on("gameobjectdown", function(d, c) {
        c.button && ("full" === c.name &&
            (this.scale.isFullscreen ? this.scale.stopFullscreen() : this.scale.startFullscreen()), this.tweens.add({
                targets: c,
                scaleX: .9,
                scaleY: .9,
                duration: 100,
                ease: "Linear",
                yoyo: !0,
                onComplete: function() {
                    if ("play" === t)
                        if ("spin" === c.name) b();
                        else if ("max" === c.name) game_config.cur_payline = game_config.paylines.length, game_config.cur_bet = game_config.bet_size[game_config.bet_size.length - 1], L.setText(String(game_config.cur_bet)), K.setText(String(game_config.cur_payline)), a(), b();
                    else if ("payout" === c.name) {
                        play_sound("click2",
                            f);
                        t = "table";
                        m = f.add.container(0, 0);
                        m.setDepth(1);
                        var d = f.add.rectangle(config.width / 2, config.height / 2, config.width, config.height, 0);
                        d.alpha = 0;
                        d.name = "dark";
                        f.tweens.add({
                            targets: d,
                            alpha: .7,
                            duration: 200
                        });
                        var e = f.add.sprite(config.width / 2, config.height / 2, "paytable");
                        e.alpha = 0;
                        e.setScale(.7);
                        f.tweens.add({
                            targets: e,
                            alpha: 1,
                            duration: 400,
                            scaleX: 1,
                            scaleY: 1,
                            ease: "Back.easeOut"
                        });
                        m.add([d, e]);
                        d = 290 + g;
                        e = 264;
                        for (var h = 0, k = 0; k < game_config.payvalues.length; k++) {
                            for (var l = "", p = 3; 0 <= p; p--) l = 0 === game_config.payvalues[k][p] ?
                                l + "-\n" : l + (String(game_config.payvalues[k][p]) + "\n");
                            l = f.add.text(d + 170 * h, e, l, {
                                fontFamily: "bebas",
                                lineSpacing: -8,
                                fontSize: 28,
                                align: "left",
                                color: "#FFFFFF"
                            }).setOrigin(0);
                            m.add(l);
                            h++;
                            5 <= h && (h = 0, e += 220)
                        }
                    } else "plus_lines" === c.name ? (play_sound("Button", f), game_config.cur_payline++, game_config.cur_payline > game_config.max_payline && (game_config.cur_payline = 1), K.setText(String(game_config.cur_payline)), v && (clearInterval(v), x.destroy()), I(), a()) : "minus_lines" === c.name ? (play_sound("Button", f), game_config.cur_payline--,
                        1 > game_config.cur_payline && (game_config.cur_payline = game_config.max_payline), K.setText(String(game_config.cur_payline)), v && (clearInterval(v), x.destroy()), I(), a()) : "plus_bet" === c.name ? (play_sound("Button", f), game_config.bet_at++, game_config.bet_at >= game_config.bet_size.length && (game_config.bet_at = 0), game_config.cur_bet = game_config.bet_size[game_config.bet_at], L.setText(String(game_config.cur_bet)), a()) : "minus_bet" === c.name ? (play_sound("Button", f), game_config.bet_at--, 0 > game_config.bet_at && (game_config.bet_at =
                        game_config.bet_size.length - 1), game_config.cur_bet = game_config.bet_size[game_config.bet_at], L.setText(String(game_config.cur_bet)), a()) : "back" === c.name && (play_sound("click2", f), v && clearInterval(v), f.scene.start("menu"));
                    else "yes" === c.name ? (play_sound("Slot coins", f), J(), game_config.cur_cash = game_config.refill, F()) : "no" === c.name && (play_sound("click2", f), J());
                    "sound" === c.name ? (switch_audio(c.name, c, f), play_sound("click2", f)) : "music" === c.name && (play_sound("click2", f), switch_audio(c.name, c, f))
                }
            }))
    }, this);
    this.input.on("pointerdown", function(a) {
        "table" === t ? (t = "wait", Y()) : "nocash2" === t && J()
    }, this);
    this.input.keyboard.on("keydown", function(a) {}, this)
};

function play_sound(a, b) {
    game_config.sound && b.sound.play(a)
}

function play_music(a, b) {
    var e = !0;
    game_config.music && game_music && game_music.isPlaying && (e = !1);
    e && game_config.music && (game_music = b.sound.add(a, {
        loop: !0
    }), game_music.play())
}

function stop_music() {
    "undefined" !== typeof game_music && game_music.stop()
}

function switch_audio(a, b, e) {
    "music" === a || "menu_music" === a ? game_config.music ? (game_config.music = !1, b.setTexture("btn_" + a + "_off"), stop_music()) : (game_config.music = !0, b.setTexture("btn_" + a), play_music("music", e)) : game_config.sound ? (game_config.sound = !1, b.setTexture("btn_" + a + "_off")) : (game_config.sound = !0, b.setTexture("btn_" + a))
}

function draw_button(a, b, e, c) {
    a = c.add.sprite(a, b, "btn_" + e).setInteractive();
    a.button = !0;
    a.name = e;
    return a
}

function container_add(a, b) {
    for (var e = b.length, c = 0; c < e; c++) b[c].x -= game_config.main.width / 2, b[c].y -= game_config.main.height / 2, a.add(b[c])
}
var config = {
        type: Phaser.AUTO,
        width: 1600,
        height: 720,
        scale: {
            mode: Phaser.Scale.HEIGHT_CONTROLS_WIDTH,
            parent: "redfoc",
            autoCenter: Phaser.Scale.CENTER_BOTH
        },
        scene: [Boot, Load, Menu, Game]
    },
    game = new Phaser.Game(config);