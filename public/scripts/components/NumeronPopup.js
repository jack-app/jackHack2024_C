export default class NumeronPopup extends Phaser.GameObjects.Container {
    constructor(scene,x,y) {
        super(scene,0,0);
        this.setPosition(0,0);
        this.scene = scene;
        this.n=3;
        this.#initAns();
        this.graphics = scene.add.rectangle(0, 0, 300, 150, 0xFFD800);
        this.add(this.graphics);
        this.inputbackgrpund = scene.add.rectangle(0, 10, 200, 20, 0x000000);
        this.add(this.inputbackgrpund);
        this.title = scene.add.text(0, -50,"Numeron", { fontSize: '16px', fill: '#000000' });
        this.title.setOrigin(0.5);
        this.add(this.title);
        this.exp_string = " ";
        this.exp_txt = scene.add.text(0, -20, this.exp_string, { fontSize: '16px', fill: '#000000' });
        this.exp_txt.setOrigin(0.5);
        this.add(this.exp_txt);
        this.inputText = scene.add.rexInputText(0, 20, 200, 50);
        this.add(this.inputText);
        this.inputText.on('keydown', (inputText, e) => {
            if (e.key === 'Enter') {
                this.#NumberonCheck(inputText.text);
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
    #initAns() {
        this.answer = [];
        var arr = [0,1,2,3,4,5,6,7,8,9];
        for (var i=0;i<this.n;i++) {
            var rand = Math.floor(Math.random()*(10-i));
            this.answer.push(arr[rand]);
            arr.splice(rand,1);
        }
    }

    #NumberonCheck(input) {
        if (input.length != this.n) {
            this.exp_txt.setText("3桁の数字を入力してください");
            return;
        }
        for (var i=0;i<this.n;i++) {
            if (input[i] < '0' || input[i] > '9') {
                this.exp_txt.setText("数字を入力してください");
                return;
            }
        }
        for(var i=0;i<this.n;i++) {
            for (var j=i+1;j<this.n;j++) {
                if (input[i] == input[j]) {
                    this.exp_txt.setText("同じ数字を入力しないでください");
                    return;
                }
            }
        }
        var eat = 0;
        var bite = 0;
        for (var i=0;i<3;i++) {
            if (this.answer[i] == parseInt(input[i])) {
                eat++;
            }
            else if (this.answer.includes(parseInt(input[i]))) {
                bite++;
            }
        }
        if (eat == 3) {
            this.exp_txt.setText("正解");
            this.Destoroy();
        }
        else {
            var exp_string = eat+"EAT "+bite+"BITE";
            this.exp_txt.setText(exp_string);
        }
    }

}