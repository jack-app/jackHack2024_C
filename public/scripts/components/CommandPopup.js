export default class CommandPopup extends Phaser.GameObjects.Container {
    constructor(scene,x,y) {
        super(scene,0,0);
        this.setPosition(0,0);
        this.scene = scene;
        var phraselist = ["python3", "docker"]
        // var phraselist = ["rm -rf /","python3 hoge.py","git commit -m 'a'","touch test.txt","gcc -o huga huga.c","docker compose up -d"];
        this.keyphrase = phraselist[Math.floor(Math.random()*phraselist.length)];
        this.graphics = scene.add.rectangle(0, 0, 300, 150, 0xFF3F3F);
        this.add(this.graphics);
        this.exp_txt = scene.add.text(0, -50, "type: "+this.keyphrase, { fontSize: '16px', fill: '#FFF' });
        this.exp_txt.setOrigin(0.5);
        this.add(this.exp_txt);
        this.inputbackgrpund = scene.add.rectangle(0, -10, 200, 20, 0x000000);
        this.add(this.inputbackgrpund);
        this.inputText = scene.add.rexInputText(0, 0, 200, 50);
        this.add(this.inputText);
        this.inputText.on('keydown', (inputText, e) => {
            if (e.key === 'Enter') {
                if (inputText.text == this.keyphrase) {
                    console.log("correct");
                    this.Destoroy();
                }
            }
        })
        this.setSize(300,150);
        this.setInteractive(new Phaser.Geom.Rectangle(0, 0, 300, 150), Phaser.Geom.Rectangle.Contains);
        scene.input.setDraggable(this);
        scene.input.on('drag', (pointer, gameObject, dragX, dragY) => {
            gameObject.x = dragX
            gameObject.y = dragY
        })
    }
    Destoroy() {
        this.scene.popup_list.splice(this,1);
        this.destroy();
    }
}