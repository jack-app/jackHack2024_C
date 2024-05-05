import PushButtonPopup from "../components/PushButtonPopup.js";
import CommandPopup from "../components/CommandPopup.js";
import NumeronPopup from "../components/NumeronPopup.js";
import { game_count, SetGameCount} from "../main.js";
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
        timer_ID;
        timer_text = "time: 60";
        timer = 60;
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
        if(game_count <= 2){
            this.CreatePopup(0,0,1);
        }
        else{
            this.CreatePopup(0,0,1);
            this.CreatePopup(0,0,1);
        }
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
            if(this.popup_list.length>0){
                this.ToPreviousScene();
            }
            else{
                this.ToNextScene();
            }
        }
        if(game_count==1 && timer%10==0) this.CreatePopup(0.33,1,1);
        if(game_count==2 && timer%7==0) this.CreatePopup(0.33,1,1);
        if(game_count==3 && timer%5==0) this.CreatePopup(0.33,1,1);
        if(timer ==10){
            timer_text.setColor('#FF3F3F');
            timer_text.setFontSize('45px');
            this.audio.play();
        }
        if(timer ==5){
            this.audio2.play();
        }
    }

    CreatePopup(p1,p2,p3) {
        var random = Math.random();
        var x = 150+Math.floor(Math.random()*(this.canvasWidth-150));
        var y = 100+Math.floor(Math.random()*(this.canvasHeight-175));
        var popup;
        if (random<p1){
            popup=new PushButtonPopup(this,x,y);
            popup.setPosition(x,y);
            this.add.existing(popup);
            this.popup_list.push(popup);
        }
        else if (random<p1+p2){
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
    ToNextScene() {
        this.audio.pause();
        this.audio2.pause();
        SetGameCount(game_count+1);
        if(game_count == 2) this.scene.start('Case1', {timelineID:'case1_win'});
        if(game_count == 3) this.scene.start('Case1', {timelineID:'case2_win'});
        if(game_count == 4) this.scene.start('Case1', {timelineID:'case3_win'});
    }
    ToPreviousScene() {
        this.audio.pause();
        this.audio2.pause();
        if(game_count == 1) this.scene.start('Case1', {timelineID:'case1_lose'});
        if(game_count == 2) this.scene.start('Case1', {timelineID:'case2_lose'});
        if(game_count == 3) this.scene.start('Case1', {timelineID:'case3_lose'});
    }
}

