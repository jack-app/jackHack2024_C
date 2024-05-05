import { StartScene } from "./scenes/StartScene.js";
import { MainScene } from "./scenes/Case1.js";
import { EndingScene } from "./scenes/EndingScene.js";
import { GameScene } from "./scenes/GameScene.js";


//ゲームに関する情報


//ゲームに関する設定
var config = {
    type: Phaser.AUTO,
    scale:{
        parent: "game-app",
        width: 1280,
        height: 720,
    },
    dom: {
        createContainer: true
    },
    scene: [StartScene,MainScene,GameScene,EndingScene],
};
//ゲームオブジェクトの生成
var game = new Phaser.Game(config);