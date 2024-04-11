// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我最特别",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "最心爱的娟娟",  // 同上...
        "今天是你的生日(三月初六)",
        "这是我们在一起",
        "第一个生日",
        "还记得那场冬天雪夜吗?",
        "我们一起散步",
        "一起放肆大笑",
        "手牵手感受着彼此的温暖",
        "你那么温柔，笑容那么甜蜜，月牙弯弯",
        "使得清冷的冬夜不再那么寒冷",
        "还记得南川楼湖心小岛吗?",
        "春风和煦，波光粼粼",
        "我们相拥在一起",
        "锦鲤常驻我们身边祈福",
        "太多太多美好的回忆",
        "未来值得期盼！！！",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "今天是你的生日": "./imgs/jj.jpg",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "音乐",
        bannar_coming: "颜色",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "清点蜡烛",
        wish_message: "生日快乐",
        story: "A MESSAGE FOR YOU",
    }
};
