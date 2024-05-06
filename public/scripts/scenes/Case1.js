
import {timelineData} from '../data/case1.js';
import { DialogBox } from '../components/DialogBox.js';
import { TimelinePlayer } from '../components/TimeLinePlayer.js';

export class MainScene extends Phaser.Scene {
    constructor() {
      super('Case1');
    }

    
    init(data) {
      // this.scene.restart()の第1引数もしくは
      // this.scene.start()の第2引数に指定されたオブジェクトがdataに渡される
      // デバックはこのデフォルト値を変える
      const timelineID = data.timelineID || 'case1';
  
      if (!(timelineID in timelineData)) {
        console.error(`[ERROR] タイムラインID[${timelineID}]は登録されていません`);
        // 登録されていないタイムラインIDが指定されていたらタイトルシーンに遷移する
        this.scene.start('title');
        return;
      }
      

      this.timeline = timelineData[timelineID];


    }
    preload() {
        console.log('preload');
        this.load.image('CIA','images/CIA.jpg');
        this.load.image('case1_1', 'images/case1_1.png');
        this.load.image('case1_2', 'images/case1_2.png');
        this.load.image('case1_3', 'images/case1_3.jpg');
        this.load.image('case1_4', 'images/case1_4.png');
        this.load.image('case1_5', 'images/case1_5.png');
        this.load.image('case1_6', 'images/case1_6.png');
        this.load.image('case1_7', 'images/case1_7.png');
        this.load.image('case2_1', 'images/case2_1.png');
        this.load.image('case2_2', 'images/case2_2.jpeg');
        this.load.image('case2_3', 'images/case2_3.png');
        this.load.image('case2_4', 'images/case2_4.jpeg');
        this.load.image('case2_5', 'images/case2_5.jpeg');
        this.load.image('case3_1', 'images/case3_1.png');
        this.load.image('case3_2', 'images/case3_2.png');
        this.load.image('case3_3', 'images/case3_3.png');
        this.load.image('case3_4', 'images/case3_4.png');
        this.load.image('case3_5', 'images/case3_5.png');
        this.load.image('case3_6', 'images/case3_6.jpeg');
        this.load.image('case3_7', 'images/case3_7.png');
        this.load.image('case3_8', 'images/case3_8.jpeg');
        this.load.video('fire', 'video/fire.mp4');
    };
  
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
  };