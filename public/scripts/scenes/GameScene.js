import PushButtonPopup from "../components/PushButtonPopup.js";
import CommandPopup from "../components/CommandPopup.js";
var timer_ID;
var timer_text = "time: 60";
var timer = 60;

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
    }

    create() {
        // Can be defined on your own Scenes. Use it to create your game objects.
        // This method is called by the Scene Manager when the scene starts, after init() and preload().
        // If the LoaderPlugin started after preload(), then this method is called only after loading is complete.
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
        else if(timer%2==0){
            this.CreatePopup();
        }
    }

    CreatePopup() {
        var random = Math.floor(Math.random() * 10);
        var x = Math.floor(Math.random()*this.canvasWidth/2);
        var y = 100+Math.floor(Math.random()*this.canvasHeight/2);
        var popup;
        if (random < 5) {
            popup=new PushButtonPopup(this,x,y);
            this.popup_list.push(popup);
        }
        else {
            popup=new CommandPopup(this,x,y);
            this.popup_list.push(popup);
        }
    }
}

