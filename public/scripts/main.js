import { StartScene } from "./scenes/StartScene.js";
import { GameScene } from "./scenes/GameScene.js";

//ゲームに関する設定
var config = {
    type: Phaser.AUTO,
    scale:{
        parent: "game-app",
        width: 1280,
        height: 720,
    },
    scene: [GameScene],
};
//ゲームオブジェクトの生成
var game = new Phaser.Game(config);