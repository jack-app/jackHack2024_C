export class TimelinePlayer{
  
  constructor(scene, dialogBox, textStyle) {  
    // 背景レイヤー・前景レイヤー・UIレイヤーをコンテナを使って表現
    this.scene = scene;
    this.textStyle = textStyle;
    this.dialogBox = dialogBox;

    this.backgroundLayer = this.scene.add.container(0, 0);
    this.foregroundLayer = this.scene.add.container(0, 0);
    
    this.scene.add.existing(dialogBox);  // ダイアログボックスは前景レイヤーとUIレイヤーの間に配置
    this.uiLayer = scene.add.container(0, 0);

    // クリック領域(hitArea)を画面全体に設定
    const { width, height } = scene.game.canvas;

    this.hitArea = new Phaser.GameObjects.Zone(scene, width/2, height/2, width, height);

    this.hitArea.setInteractive({
      useHandCursor: true
    });

     // hitAreaをクリックしたらnext()を実行
     this.hitArea.on('pointerdown', () => {
      this.next();
    });
    // hitAreaをUIレイヤーに追加
    this.uiLayer.add(this.hitArea);
}

//タイムラインの再生を開始する。
start(timeline) {
  this.timeline = timeline;
  this.next();
}

// 背景画面をセット
setBackground(x, y, texture) {
  // 背景レイヤーの子を全て削除
  this.backgroundLayer.removeAll();
  // 背景画像のオブジェクトを作成
  const backgroundImage = new Phaser.GameObjects.Image(this.scene, x, y, texture);
  // 背景レイヤーに画像オブジェクトを配置
  this.backgroundLayer.add(backgroundImage);
}


// 前景画面をセット
addForeground(x, y, texture) {
  // 前景画像のオブジェクトを作成
  const foregroundImage = new Phaser.GameObjects.Image(this.scene, x, y, texture);
  // 前景レイヤーに画像オブジェクトを配置
  this.foregroundLayer.add(foregroundImage);
}

// 前景をクリア
clearForeground() {
  // 前景レイヤーの子を全て削除
  this.foregroundLayer.removeAll();
}

// 次のタイムラインを実行
next() {
  // タイムラインがない場合は何もしない
  // タイムラインがタイムラインの長さ以上なら０に初期化
  if (this.scene.timelineIndex === undefined) {
    this.scene.timelineIndex = 0;
  }if(this.scene.timelineIndex >= this.scene.timeline.length){
    this.scene.timelineIndex = 0;
  }

  

  if (!this.scene.timeline) {
    return;
  }
  if (this.scene.timelineIndex >= this.scene.timeline.length) {
    return;
  }
  // タイムラインのイベントを取得してから、timelineIndexをインクリメント
  const timelineEvent = this.scene.timeline[this.scene.timelineIndex++];

  switch (timelineEvent.type) {
    case 'dialog':  // ダイアログイベント
      if (timelineEvent.actorName) {
        // actorNameが設定されていたら名前を表示
        this.dialogBox.setActorNameText(timelineEvent.actorName);
      } else {
        // actorNameが設定されていなかったら名前を非表示
        this.dialogBox.clearActorNameText();
      }
      this.dialogBox.setText(timelineEvent.text);
      break;

    case 'setBackground':  // 背景設定イベント
      this.setBackground(timelineEvent.x, timelineEvent.y, timelineEvent.key);
      this.next();  // すぐに次のタイムラインを実行する
      break;
  

    case 'addForeground':  // 前景追加イベント
      this.addForeground(timelineEvent.x, timelineEvent.y, timelineEvent.key);
      this.next();  // すぐに次のタイムラインを実行する
      break;

    case 'clearForeground':  // 前景クリアイベント
      this.clearForeground();
      this.next();  // すぐに次のタイムラインを実行する
      break;

    case 'timelineTransition':  // タイムライン遷移イベント
      // シーンをリスタートし、指定のタイムラインを実行する
      // restart()の引数がシーンのinit()の引数に渡される
      this.scene.timelineIndex = 0;
      this.scene.scene.restart({ timelineID: timelineEvent.timelineID });
      break;

    case 'sceneTransition':  // シーン遷移イベント
      // 指定のシーンに遷移する
      // start()の第2引数がシーンのinit()の引数に渡される
      
      this.scene.scene.start(timelineEvent.key, timelineEvent.data);

      break;

    case 'choice':  // 選択肢イベント
      console.log(timelineEvent.choices);
      this.setChoiceButtons(timelineEvent.choices);
      
      break;
    


    default:
      break;
  }

}



}
