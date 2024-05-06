// Timeline data


export const timelineData = {
  case1: [
    {type: 'setBackground', x: 640, y: 360, key: 'case1_1'},
    {type: 'dialog', text: '一人暮らしの大学生の樹木ナキ。情報学部でパソコンに詳しく、Twitter大好き。ある日、X（旧Twitter）を見ていると….▼', actorName: 'ナキ'},
    {type: 'addForeground', x: 640, y: 360, key: 'case1_2'},
    {type: 'dialog', text: '「メンズコーチのジョージ？なんだろう….」', actorName: 'ナキ'},
    {type: 'dialog', text: '「これ結構大げさって思われる可能性が高いんだけどスポーツ経験がない男、今まであんまり運動経験がない男、部活に入った経験がない男、「俺ガチで危機感持った方がいい」と思うよ', actorName: 'ジョージ'},
    {type: 'dialog', text:' うんガチで危機感持った方が良い。これ結構大げさって思われる可能性が高いんだけどスポーツ経験がない男、今まであんまり運動経験がない男、部活に入った経験がない男、俺ガチで危機感持った方がいいと思うよ、うんガチで危機感持った方が良い….」', actorName: 'ジョージ'},
    {type: 'dialog', text:'「くそ―—、でもモテたい！スポーツ始めるか！」 ', actorName: 'ナキ'},
    {type: 'addForeground', x: 640, y: 360, key: 'case1_3'},
    {type: 'dialog', text:'「とりあえず最近人気な大谷翔平を追おう！形から入るか！」 ', actorName: 'ナキ'},
    {type: 'addForeground', x: 640, y: 360, key: 'case1_4'},
    {type: 'dialog', text:'こうしてスポーツ用品の海外ショッピングサイトを見に行った。'},
    {type: 'dialog', text:'ぽちっ'},
    {type: 'addForeground', x: 640, y: 360, key: 'case1_5'},
    {type: 'dialog', text:'「しまったぁっ！詐欺サイトに引っかかってしまったッ！」', actorName: 'ナキ'},
  

    {type: 'playGame'},
  ],
  case1_win: [
    {type: 'setBackground', x: 640, y: 360, key: 'case1_6'},
    {type: 'dialog', text: '「もしかして俺って結構すごい？でも海外ショッピングサイトにはもう行かなーい！」', actorName: 'ナキ'},
    {type:'dialog', text: '（危機感10％）', actorName: 'ナキ'},
    {type:'dialog', text: 'いい子の皆さんはこういうサイトには気をつけましょう…'},
    {type: 'timelineTransition', timelineID: 'case2'},
  ],
  case1_lose:[
    {type: 'setBackground', x: 640, y: 360, key: 'case1_7'},
    {type: 'dialog', text: '樹木ナキはこうして個人情報とお金が抜き取られてしまった。'},
    {type: 'dialog', text:'架空の請求が毎日来て、借金の返済に明け暮れる。' },
    {type: 'dialog', text:'「あの人簡単な詐欺に引っかかったらしいよ！ダッサーい！！」',key: '気になるあの子'},
    {type:'dialog', text: '気になるあの子にも嫌われてしまい…こうしてモテとは程遠くなってしまった…'},
    {type: 'timelineTransition', timelineID: 'case1'},
  ],
  case2: [
    {type: 'setBackground', x: 640, y: 360, key: 'case2_1'},
    {type: 'dialog', text: 'フィッシングサイトでのあの騒動から１０日ほどたった。▼'},
    {type: 'dialog', text: '「あの時は本当に焦ったなぁ…」', actorName: 'ナキ'},
    {type: 'dialog', text: '「あのとき注文した商品がそろそろ届くころだ。」 ', actorName: 'ナキ'},
    {type: 'dialog', text: '「発送連絡はまだかな～？」', actorName: 'ナキ'},
    {type: 'dialog', text: 'ふとした気持ちでメールを開いた。すると、こんなメールが受信BOXに届いていた。'},
    {type:'addForeground', x: 640, y: 360, key: 'case2_2'},
    {type: 'dialog', text: '日本のファンのみんな。私は大谷翔平です。私は日本の小学校にバットを送ろうと考えています😁。私は水原一平にお金を取られてお金がないので🥺私に募金して下さい。私に以下のリンクからお金を送ってくて下さい🥺URL：http://www.koreosuruyatugatidekikikanmottahougaii.bkm', actorName: '大谷翔平？'},
    {type: 'dialog', text: '「大谷さんがお金に困ってる？！', actorName: 'ナキ'},
    {type: 'dialog', text: '「これは絶対に助けないと！」', actorName: 'ナキ'},
    {type: 'dialog', text: '「助けなければいけないな！！」', actorName: 'ナキ'},
    {type:'addForeground', x: 640, y: 360, key: 'case2_3'},
    {type: 'dialog', text: '「しまったァァッ！詐欺サイトに引っかかってしまったッッ！！！」', actorName: 'ナキ'},
    {type: 'playGame'},
  ],
  case2_win:[
    {type: 'setBackground', x: 640, y: 360, key: 'case2_4'},
    {type: 'dialog', text: 'なんとか詐欺の被害を免れることができた。'},
    {type: 'dialog', text: '「良かった、大事なバイト代が吹っ飛ぶところだった！」（危機感70％）', actorName: 'ナキ'},
    {type: 'dialog', text: '後日、今回の詐欺についてネットで調べてみたところ、たくさんの人が自分と同じ詐欺事件に遭っており、自分以外の人は全員お金を取られてしまったようだ。'},
    {type: 'timelineTransition', timelineID: 'case3'},
  ],
  case2_lose:[
    {type: 'dialog', text: '樹木ナキはこうして個人情報とお金が抜き取られてしまった。'},
    {type: 'dialog', text:'架空の請求が毎日来て、借金の返済に明け暮れる。' },
    {type: 'setBackground', x: 640, y: 360, key: 'case2_5'},
    {type: 'dialog', text:'ついには、膨大な借金を返しきれなくなり、地下での強制労働をさせられるはめになってしまった。'},
    {type:'dialog', text: '地下では、同じ詐欺の被害に遭った人たちが自分と同様に働かされていた。'},
    {type:'dialog', text:'もうこうなってしまっては、ジョージの言っていたモテる、モテないとかいうレベルの話ではない。' },
    {type:'dialog', text:'「くっそーーーーーー！！！」（大文字で）', actorName: 'ナキ'},
    {type:'dialog', text:' to be continued….' },
    {type: 'timelineTransition', timelineID: 'case2'},
  ],
  case3 :[
    {type: 'setBackground', x: 640, y: 360, key: 'case3_1'},
    {type: 'dialog', text: '数日後、またも受信BOXにメールが届いていた。そのメールは英語でこんなことが書かれていた。▼'},
    {type: 'addForeground', x: 640, y: 360, key: 'case3_2'},
    {type: 'dialog', text: '「大谷翔平を語った詐欺は世界的に被害が出た。その中でハッカーからの攻撃に勝てたのはあなた樹木ナキだけだ！ぜひホワイトハッカーとなり、我々CIAと協力してくれないか！！」URL：http://wwwkoreosuyatugatidekikikanmottahougaii.bkm', actorName: 'CIAからのメール'},
 
    {type: 'dialog', text: '「CIAからの協力要請？少し怪しい気がするけど、CIAからなら大丈夫でしょ。これは受けるしかない！！！」', actorName: 'ナキ'},
    {type: 'dialog', text: 'ぽちっ'},
    {type:'addForeground', x: 640, y: 360, key: 'case3_3'},
    {type: 'dialog', text: '「しまったァァッ！詐欺サイトに引っかかってしまったッッ！！！」', actorName: 'ナキ'},

    {type: 'playAudio', key: 'erectro', time: 10},
    {type : 'addForeground', x: 640, y: 360, key: 'case3_4'},
    {type: 'dialog', text: '「危機感を持てと言っただろう？」', actorName: '???'},
    {type: 'case3_3', text: '「だれだお前」', actorName: 'ナキ'},
    {type: 'case3_4', text: '「危機感を持てと言っただろ!!!!!」', actorName: '???'},
    {type: 'dialog', text: '「そ.その声は!!!!!」', actorName: 'ナキ'},
    {type:'addForeground', x: 640, y: 360, key: 'case3_5'},
    {type: 'dialog', text: '「危機感二キ・ジョージ！！！」', actorName: 'ナキ'},
    // ネタばらし　ジョージが実はすべての黒幕だったということをわからせる会話
    {type:'dialog', text: '「君が今までの詐欺サイトに引っ掛かるのを楽しく拝見していたよ」', actorName: 'ジョージ'},
    {type:'dialog', text: '「なんでだよ！！！！」', actorName: 'ナキ'},
    {type:'dialog', text: '「君の危機感は普通では十分なようだが私には勝てるかな？」', actorName: 'ジョージ'},
    {type:'dialog', text: '「ふん上等だ！お前がこれから先、危機感を忘れられないように退治してやる」', actorName: 'ナキ'},

    {type: 'dialog', text: '「さあ最後の決戦だ、お前に危機感を植え付けてやろう。一生忘れられないようになっ」', actorName: 'ジョージ'},
    {type:'dialog', text: '「最後の決戦だ！数々の危機を乗り越えた力ここで見せつけてやる」', actorName: 'ナキ'},
    // 最後のイベント
    {type: 'playGame'},
  ],
  case3_win:[
    {type:'addForeground', x: 640, y: 360, key: 'case3_6'},
    {type: 'dialog', text: '「危機感を持った方が良かったのはお前の方だったようだなァッ！！！ジョージーーーッッッ！！！」', actorName: 'ナキ'},
    // ジョージ爆発
    {type: 'fire_jyoji', x: 640, y: 360, key: 'fire'},
    {type:'addForeground', x: 640, y: 360, key: 'case3_7'},
    {type: 'dialog', text: '（危機感カンスト）'},
    {type: 'playAudio', key: 'himei', time: 10},
    {type: 'dialog', text: 'それからというもの樹木ナキは国民栄誉賞に選ばれ、モテモテになった。'},
    {type:'addForeground', x: 640, y: 360, key: 'case3_8'},
    {type: 'dialog', text: '「俺の人生薔薇色だぜぇ～いッ！！最高に『ハイ！』ってやつだアアアアア！」', actorName: 'ナキ'},
    {type: 'dialog', text: '（こうして危機感が次第に薄れていく）', actorName: 'ナキ'},
    {type:'addForeground', x: 640, y: 360, key: 'black'}, 
    {type:'dialog', text: '「フフフフフ.......................」', actorName: '???'},
    {type:'to_be_continued'},
  

    // ここから黒い画面になる。
    // {type: 'addForeground', x: 640, y: 360, key: 'black'},
    // {type: 'dialog', text: '「フフフフフ.......................」', actorName: '???'},
    // ここからto_be_continued
    // {type:'playVideo',x:640,y:360,key:'tbc',time:6},

    {type:'sceneTransition', key:'StartScene'},

  ],
  case3_lose:[
    {type: 'setBackground', x: 640, y: 360, key: 'case3_5'},
    {type:'dialog', text:'「これ結構大げさって思われる可能性が高いんだけどスポーツ経験がない男、今まであんまり運動経験がない男、部活に入った経験がない男、俺ガチで危機感持った方がいいと思うよ、うんガチで危機感持った方が良いよ、うんガチで危機感持った方が良い、俺は俺はスポーツ向いてないから運動神経無いから家に引きこもってる方が楽しいから、俺はゲームが好きだから俺は遊戯王プレイヤーだから、やばいって何がヤバイかっていうと男として成熟しないんだよね。その人生の中で何かしらの競争をしてないと男として成熟するためのパーツにかける。最後に競争したのいつ、ほかの男と戦ったの、いつ監督に理不尽なこと言われたの、いつお前つかえないって言われてベンチされたいないでしょ。」'},
    {type: 'timelineTransition', timelineID: 'case3'},

  ]



}
