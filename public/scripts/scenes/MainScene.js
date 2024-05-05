
import {timelineData} from '../data/data.js';
import { DialogBox } from '../components/DialogBox.js';
import { TimelinePlayer } from '../components/TimelinePlayer.js';

export class MainScene extends Phaser.Scene {
    constructor() {
      super('MainScene');
    }

    preload() {
        this.load.image('red_hacker','images/red_hacker.jpg');
    }
    init(data) {
      // this.scene.restart()の第1引数もしくは
      // this.scene.start()の第2引数に指定されたオブジェクトがdataに渡される
      const timelineID = data.timelineID || 'start';
  
      if (!(timelineID in timelineData)) {
        console.error(`[ERROR] タイムラインID[${timelineID}]は登録されていません`);
        // 登録されていないタイムラインIDが指定されていたらタイトルシーンに遷移する
        this.scene.start('title');
        return;
      }
  
      this.timeline = timelineData[timelineID];
    }
    preload() {
      this.load.image('CIA', 'images/CIA.jpg');
      this.load.image('red_hacker', 'images/red_hacker.jpg');
    }
  
    create() {
      if (!this.timeline) {
        return;
      }
        
      const { width, height } = this.game.canvas;
      // : Phaser.Types.GameObjects.Text.TextStyle
      const textStyle = {
        fontFamily: '"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif',
        fontSize: '24px'
      };
  
      const dialogBoxHeight = 150;
      const dialogBoxMargin = 10;
      // : DialogBoxConfig
      const dialogBoxConfig = {
        x: width/2,
        y: height - dialogBoxMargin - dialogBoxHeight/2,
        width: width - dialogBoxMargin*2,
        height: dialogBoxHeight,
        padding: 10,
        margin: dialogBoxMargin,
        textStyle: textStyle
      };
  
      const dialoxBox = new DialogBox(this, dialogBoxConfig);
  
      // タイムラインプレイヤーの作成
      const timelinePlayer = new TimelinePlayer(this, dialoxBox, textStyle);
  
      // タイムラインの再生開始
      timelinePlayer.start(this.timeline);
    }
  }