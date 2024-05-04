export default class Button extends Phaser.GameObjects.Container {
    constructor(scene, x, y,text,callback) {
        super(scene, x, y);
        this.scene = scene;
        this.text = scene.add.text(0, 0, text, { fontSize: '16px', fill: '#FFF' });
        this.graphics = scene.add.graphics();
        this.graphics.fillStyle(0xFF3F3F, 1).fillRect(0, 0, this.text.width+20, this.text.height+10);
        this.add(this.graphics);
        this.add(this.text);
        this.setInteractive(new Phaser.Geom.Rectangle(0, 0, this.text.width+20, this.text.height+10), Phaser.Geom.Rectangle.Contains);
        this.on('pointerdown', () => {
            callback();
        });
        scene.add.existing(this);
    }
}