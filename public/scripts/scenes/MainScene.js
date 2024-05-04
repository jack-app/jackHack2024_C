

export class MainScene extends Phaser.Scene {
    constructor() {
      super('MainScene');
    }

    

    preload() {
        this.load.image('red_hacker','images/red_hacker.jpg');
    }
  
    create() {
      
  


    //   ポイントゾーンの設定
      const zone = this.add.zone(width/2, height/2, width, height);
    //   クリック可能にする
      zone.setInteractive({
        useHandCursor: true
      });
      zone.on('pointerdown', () => {
        this.scene.start('EndingScene');  // EndingSceneに遷移
      });
    }
  }