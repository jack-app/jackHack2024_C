import PushButtonPopup from "../components/PushButtonPopup.js";
import CommandPopup from "../components/CommandPopup.js";
var timer_ID;
var timer_text = "time: 60";
var timer = 60;
function UpdateTime() {
    timer--; // timeの更新   
    timer_text.setText('time: ' + timer); 
    console.log(timer);
    if (timer==0) {
        clearInterval(timer_ID);
    }
}

export class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: "GameScene" });
    }

    init() {
        // Can be defined on your own Scenes.
        // This method is called by the Scene Manager when the scene starts, before preload() and create().
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
        timer_ID = setInterval(UpdateTime, 1000);
        this.popup_list.push(new PushButtonPopup(this,0));
        //this.popup_list.push(new CommandPopup(this,1));
        //popup_list[0].setPosition(100,100);
        //popup_list[1].setPosition(500,100);

    }

    update() {
        // https://photonstorm.github.io/phaser3-docs/Phaser.Scene.html#update
    }
}

