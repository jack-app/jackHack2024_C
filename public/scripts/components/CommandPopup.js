export default class CommandPopup extends Phaser.GameObjects.Container {
    constructor(scene,id) {
        super(scene, 0,0);
        this.setPosition(0,0);
        this.id = id;
        this.keyprase = "rm -rf /";
        this.graphics = scene.add.graphics();
        this.graphics.fillStyle(0xFF3F3F, 1).fillRect(0, 0, 300, 150);
        this.exp_txt = scene.add.text(85, 20, this.keyprase, { fontSize: '16px', fill: '#FFF' });
        this.setInteractive();
    }
}