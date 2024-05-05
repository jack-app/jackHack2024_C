import PushButtonPopup from "../components/PushButtonPopup.js";
import CommandPopup from "../components/CommandPopup.js";
import NumeronPopup from "../components/NumeronPopup.js";
var timer_ID;
var timer_text = "time: 60";
var timer = 15;

export class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: "GameScene" });
    }

    init() {
        // Can be defined on your own Scenes.
        // This method is called by the Scene Manager when the scene starts, before preload() and create().
        this.canvasWidth = this.sys.canvas.width;
        this.canvasHeight = this.sys.canvas.height;
    }

    preload() {
        // Can be defined on your own Scenes. Use it to load assets.
        // This method is called by the Scene Manager, after init() and before create(), only if the Scene has a LoaderPlugin.
        // After this method completes, if the LoaderPlugin's queue isn't empty, the LoaderPlugin will start automatically
        this.load.plugin('rexinputtextplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexinputtextplugin.min.js', true);
        this.load.image("background", "images/game-scene-background.png");
        this.audio = new Audio("audio/警告05.mp3");
        this.audio2 = new Audio("audio/警報04.mp3");
    }

    create() {
        // Can be defined on your own Scenes. Use it to create your game objects.
        // This method is called by the Scene Manager when the scene starts, after init() and preload().
        // If the LoaderPlugin started after preload(), then this method is called only after loading is complete.
        const background = this.add.image(this.canvasWidth/2,this.canvasHeight/2, "background")
        this.popup_list = [];
        timer_text = this.add.text(16, 16, 'time: 60', { fontSize: '32px', fill: '#FFF' });
        timer_ID = setInterval(this.UpdateTime.bind(this), 1000);
    }

    update() {
        // https://photonstorm.github.io/phaser3-docs/Phaser.Scene.html#update
    }

    UpdateTime() {
        timer--; // timeの更新   
        timer_text.setText('time: ' + timer); 
        console.log(timer);
        if (timer==0) {
            clearInterval(timer_ID);
        }
        else if(timer ==10){
            timer_text.setColor('#FF3F3F');
            timer_text.setFontSize('45px');
            this.audio.play();
        }
        else if(timer ==5){
            this.audio2.play();
        }
        else if(timer%5==0){
            this.CreatePopup();
        }
    }

    CreatePopup() {
        var random = Math.random();
        var x = 150+Math.floor(Math.random()*(this.canvasWidth-150));
        var y = 100+Math.floor(Math.random()*(this.canvasHeight-175));
        var popup;
        if (random<0.33){
            popup=new PushButtonPopup(this,x,y);
            popup.setPosition(x,y);
            this.add.existing(popup);
            this.popup_list.push(popup);
        }
        else if (random<0.66){
            popup=new CommandPopup(this,x,y);
            popup.setPosition(x,y);
            this.add.existing(popup);
            this.popup_list.push(popup);
        }
        else{
            popup=new NumeronPopup(this,x,y);
            popup.setPosition(x,y);
            this.add.existing(popup);
            this.popup_list.push(popup);
        }
    }
}

