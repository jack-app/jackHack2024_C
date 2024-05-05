import { StartScene } from "./scenes/StartScene.js";
import { MainScene } from "./scenes/Case1.js";
import { EndingScene } from "./scenes/EndingScene.js";

//ゲームに関する設定
var config = {
    type: Phaser.AUTO,
    scale:{
        parent: "game-app",
        width: 1280,
        height: 720,
    },
    scene: [StartScene,MainScene,EndingScene],
};
//ゲームオブジェクトの生成
var game = new Phaser.Game(config);