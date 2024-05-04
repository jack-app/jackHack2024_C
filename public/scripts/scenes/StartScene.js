export class StartScene extends Phaser.Scene {
    constructor() {
        super({ key: "StartScene" });
    }

    init() {
        // Can be defined on your own Scenes.
        // This method is called by the Scene Manager when the scene starts, before preload() and create().
    }

    preload() {
        // Can be defined on your own Scenes. Use it to load assets.
        // This method is called by the Scene Manager, after init() and before create(), only if the Scene has a LoaderPlugin.
        // After this method completes, if the LoaderPlugin's queue isn't empty, the LoaderPlugin will start automatically
    }

    create() {
        // Can be defined on your own Scenes. Use it to create your game objects.
        // This method is called by the Scene Manager when the scene starts, after init() and preload().
        // If the LoaderPlugin started after preload(), then this method is called only after loading is complete.
    }

    update() {
        // https://photonstorm.github.io/phaser3-docs/Phaser.Scene.html#update
    }
}