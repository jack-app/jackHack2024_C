export default class CommandPopup extends Phaser.GameObjects.Container {
    constructor(scene,x,y) {
        super(scene,x,y);
        this.setPosition(x, y);
        this.scene = scene;
        this.keyphrase = "rm -rf /";
        this.graphics = scene.add.graphics();
        this.graphics.fillStyle(0xFF3F3F, 1).fillRect(0, 0, 300, 150);
        this.exp_txt = scene.add.text(85, 20, "type: "+this.keyphrase, { fontSize: '16px', fill: '#FFF' });
        this.inputText = scene.add.rexInputText(150, 75, 200, 50);
        this.inputText.on('keydown', (inputText, e) => {
            if (e.key === 'Enter') {
                if (inputText.text == this.keyphrase) {
                    console.log("correct");
                    this.#Destory();
                }
            }
        })
        this.setSize(300,150);
        this.#SetPos(x,y);
        this.setInteractive();
    }
    #Destory() {
        this.scene.popup_list.splice(this,1);
        this.graphics.destroy();
        this.exp_txt.destroy();
        this.inputText.destroy();
        this.destroy();
    }

    #SetPos(x,y){
        this.graphics.setPosition(x,y);
        this.exp_txt.setPosition(x+85,y+20);
        this.inputText.setPosition(x+150,y+75);
    }
}