
import { DialogBox } from '../components/DialogBox.js';  // 追加


export class StartScene extends Phaser.Scene {
    constructor() {
        super({ key: "StartScene" });
    }

    // init() {
    //     // Can be defined on your own Scenes.
    //     // This method is called by the Scene Manager when the scene starts, before preload() and create().
    // }

    preload() {
        // Can be defined on your own Scenes. Use it to load assets.
        // This method is called by the Scene Manager, after init() and before create(), only if the Scene has a LoaderPlugin.
        // After this method completes, if the LoaderPlugin's queue isn't empty, the LoaderPlugin will start automatically
        this.load.image('CIA','images/CIA.jpg');

    }

    create() {
       
        // Can be defined on your own Scenes. Use it to create your game objects.
        // This method is called by the Scene Manager when the scene starts, after init() and preload().
        // If the LoaderPlugin started after preload(), then this method is called only after loading is complete.
        
        // ページの大きさを取得
        const { width, height } = this.game.canvas;
        this.add.image(width/2, height/2, 'CIA');

        // フォントの設定
        const textStyle = {
        fontFamily: '"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif',
        fontSize: '24px'
      };
  
      // DialogBoxのコンフィグ
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
  
      // DialogBoxの作成
      const dialogBox = new DialogBox(this, dialogBoxConfig);
  
      // テキストの設定
      dialogBox.setText('クリックでエンディングへ ▼');
      dialogBox.setActorNameText('NAME');
  
      // DialogBoxの表示
      this.add.existing(dialogBox);


    // ポイントゾーンを設定
    const zone = this.add.zone(width/2, height/2, width, height);
    // ポイントゾーンをクリック可能にする
    zone.setInteractive({
        useHandCursor: true
    });
    // ポイントゾーンをクリックしたときの処理
    zone.on('pointerdown', () => {
        this.scene.start('MainScene');  // MainSceneに遷移
    });

    }
}