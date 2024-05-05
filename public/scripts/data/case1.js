// Timeline data


export const timelineData = {
  start: [
    {type: 'setBackground', x: 400, y: 300, key: 'case1_1'},
    {type: 'dialog', text: '一人暮らしの大学生の樹木ナキ。情報学部でパソコンに詳しく、Twitter大好き。ある日、X（旧Twitter）を見ていると….▼', actorName: 'ナキ'},
    {type: 'addForeground', x: 500, y: 500, key: 'case1_2'},
    {type: 'dialog', text: '「メンズコーチのジョージ？なんだろう….」', actorName: 'ナキ'},
    {type: 'dialog', text: '「これ結構大げさって思われる可能性が高いんだけどスポーツ経験がない男、今まであんまり運動経験がない男、部活に入った経験がない男、「俺ガチで危機感持った方がいい」と思うよ', actorName: 'ジョージ'},
    {type: 'dialog', text:' うんガチで危機感持った方が良い。これ結構大げさって思われる可能性が高いんだけどスポーツ経験がない男、今まであんまり運動経験がない男、部活に入った経験がない男、俺ガチで危機感持った方がいいと思うよ、うんガチで危機感持った方が良い….」', actorName: 'ジョージ'},
    {type: 'dialog', text:'「くそ―—、でもモテたい！スポーツ始めるか！」 ', actorName: 'ナキ'},
    {type: 'addForeground', x: 400, y: 300, key: 'case1_3'},
    {type: 'dialog', text:'「とりあえず最近人気な大谷翔平を追おう！形から入るか！」 ', actorName: 'ナキ'},
    {type: 'addForeground', x: 400, y: 300, key: 'case1_4'},
    {type: 'dialog', text:'こうしてスポーツ用品の海外ショッピングサイトを見に行った。', actorName: 'ナキ'},
    {type: 'dialog', text:'ぽちっ'},
    {type: 'addForeground', x: 400, y: 300, key: 'case1_5'},
    {type: 'dialog', text:'「しまったぁっ！詐欺サイトに引っかかってしまったッ！」', actorName: 'ナキ'},
    // 最後のイベント
    {type: 'sceneTransition', key: 'EndingScene'}
  ]
}