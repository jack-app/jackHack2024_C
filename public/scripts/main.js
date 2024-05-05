import { StartScene } from "./scenes/StartScene.js";
import { MainScene } from "./scenes/Case1.js";
import { EndingScene } from "./scenes/EndingScene.js";
import { GameScene } from "./scenes/GameScene.js";


export let game_count = 1; //何回目の勝負か
export const SetGameCount = (count)=>{
    game_count = count;
};

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