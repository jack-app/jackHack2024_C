import StartButton from "../components/StartButton.js";

export class StartScene extends Phaser.Scene {
    constructor() {
        super({ key: "StartScene" });
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
        this.load.image("background2","images/ゲーム開始.png");
    }

    create() {
        // Can be defined on your own Scenes. Use it to create your game objects.
        // This method is called by the Scene Manager when the scene starts, after init() and preload().
        // If the LoaderPlugin started after preload(), then this method is called only after loading is complete.
        var background = this.add.image(this.canvasWidth/2,this.canvasHeight/2,"background2");
        this.button = new StartButton(this);
        this.button.setPosition(640, 580);

        const { width, height } = this.game.canvas;
        const zone = this.add.zone(width/2, height/2, width, height);
      zone.setInteractive({
        useHandCursor: true
      });
      zone.on('pointerdown', () => {
        this.scene.start('Case1');  // TitleSceneに遷移
      });

    }

    update() {
        // https://photonstorm.github.io/phaser3-docs/Phaser.Scene.html#update
    }
}