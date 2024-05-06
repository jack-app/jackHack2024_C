export default class CommandPopup extends Phaser.GameObjects.Container {
    constructor(scene) {
        super(scene);
        this.setPosition(0,0);
        this.setSize(750, 240);
        scene.add.existing(this);
        this.on("pointerdown",() => {
          scene.scene.start('Case1',{timelineID:"case3"}); 
        });
        this.setInteractive();
    }
  }