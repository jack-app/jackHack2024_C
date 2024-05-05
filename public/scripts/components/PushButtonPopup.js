import Button from './Button.js';
export default class PushButtonPopup extends Phaser.GameObjects.Container {
    constructor(scene,x,y) {
        super(scene,x,y);
        this.setPosition(x,y);
        this.graphics = scene.add.graphics();
        this.graphics.fillStyle(0xFF3F3F, 1).fillRect(0, 0, 300, 150);
        this.exp_txt = scene.add.text(85, 20, '1秒以下で止めろ', { fontSize: '16px', fill: '#FFF' });
        this.limit = (5+Math.floor(Math.random()*5))*10;
        this.limit_txt = scene.add.text(85, 50, this.limit/10+'.'+this.limit%10, { fontSize: '16px', fill: '#FFF' });
        this.timer_ID=setInterval(this.#UpdateTime.bind(this), 100);
        this.button = new Button(scene, 85, 100, "Push", this.#Push.bind(this));
        this.#SetPos(x,y);
        this.setSize(300,150);
        this.setInteractive();
        
    }
    #UpdateTime() {
        this.limit--; // timeの更新   
        this.limit_txt.setText(Math.floor(this.limit/10)+'.'+this.limit%10);
        if (this.limit<=0) {
            clearInterval(this.timer_ID);
            this.scene.scene.start("StartScene");
        }
    }
    #Push() {
        if (this.limit<=10) {
            console.log("correct");
            clearInterval(this.timer_ID);
            this.#Destory();
        }
        else{
            console.log("incorrect");
            clearInterval(this.timer_ID);
            this.scene.scene.start("StartScene");
        }
    }

    #Destory() {
        this.scene.popup_list.splice(this,1);
        this.graphics.destroy();
        this.exp_txt.destroy();
        this.limit_txt.destroy();
        this.button.destroy();
        this.destroy();
    }

    #SetPos(x,y){
        this.graphics.setPosition(x,y);
        this.exp_txt.setPosition(x+85,y+20);
        this.limit_txt.setPosition(x+85,y+50);
        this.button.setPosition(x+85,y+100);
    }
}