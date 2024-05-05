import Button from './Button.js';
export default class PushButtonPopup extends Phaser.GameObjects.Container {
    constructor(scene,x,y) {
        super(scene,0,0);
        this.setPosition(0,0);
        this.graphics = scene.add.rectangle(0, 0, 300, 150, 0xFF3F3F);
        this.add(this.graphics);
        this.exp_txt = scene.add.text(-75,-50, '1秒以下で止めろ', { fontSize: '16px', fill: '#FFF' });
        this.add(this.exp_txt);
        this.limit = (5+Math.floor(Math.random()*5))*10;
        this.limit_txt = scene.add.text(-75, 0, this.limit/10+'.'+this.limit%10, { fontSize: '16px', fill: '#FFF' });
        this.add(this.limit_txt);
        this.timer_ID=setInterval(this.#UpdateTime.bind(this), 100);
        this.button = new Button(scene, 0, 45, "Push", this.#Push.bind(this));
        this.add(this.button);
        this.setSize(300,150);
        this.setInteractive();
        scene.input.setDraggable(this);
        scene.input.on('drag', (pointer, gameObject, dragX, dragY) => {
            gameObject.x = dragX
            gameObject.y = dragY
        })
        
    }
    #UpdateTime() {
        this.limit--; // timeの更新   
        this.limit_txt.setText(Math.floor(this.limit/10)+'.'+this.limit%10);
        if (this.limit<=0) {
            clearInterval(this.timer_ID);
            this.scene.ToPreviousScene();
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
            this.scene.ToPreviousScene();
        }
    }

    #Destory() {
        this.scene.popup_list.splice(this,1);
        this.destroy();
    }
}