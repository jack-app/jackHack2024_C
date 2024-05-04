

export class MainScene extends Phaser.Scene {
    constructor() {
      super('MainScene');
    }

    

    preload() {
        this.load.image('red_hacker','images/red_hacker.jpg');
    }
  
    create() {
      const { width, height } = this.game.canvas;
      this.add.image(width/2, height/2, 'red_hacker');
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