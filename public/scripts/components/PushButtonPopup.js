export default class PushButtonPopup extends Phaser.GameObjects.Container {
    constructor(scene,id) {
        super(scene, 0,0);
        this.setPosition(0,0);
        this.id = id;
        this.graphics = scene.add.graphics();
        this.graphics.fillStyle(0xFF3F3F, 1).fillRect(0, 0, 300, 150);
        this.exp_txt = scene.add.text(85, 20, '1秒以下で止めろ', { fontSize: '16px', fill: '#FFF' });
        this.limit = (5+Math.floor(Math.random()*5))*10;
        this.limit_txt = scene.add.text(85, 50, this.limit/10+'.'+this.limit%10, { fontSize: '16px', fill: '#FFF' });
        this.timer_ID=setInterval(this.#UpdateTime.bind(this), 100);
    }
    #UpdateTime() {
        this.limit--; // timeの更新   
        this.limit_txt.setText(Math.floor(this.limit/10)+'.'+this.limit%10);
        if (this.limit<=0) {
            clearInterval(this.timer_ID);
        }
    }
}