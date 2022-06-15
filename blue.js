var scal = 2;

var colors = [
    ["lightcyan", 92, 160, 181],
    ["cyan", 89, 147, 171], 
];

// for actual size
var width = 768;
var height = 768;

function preload() {
    // Font
    //font = loadFont("../assets/misaki_gothic.ttf");

    // Images
    imgch = loadImage("assets/img/child.png");
    imgbk = loadImage("assets/img/back.png");

}

function setup () {
    createCanvas(width*8, height*8);
    background(100);
    // Layers 
    ly_base = createGraphics(width*scal, height*scal);
    ly_whitecover = createGraphics(width*scal, height*scal);
    ly_front = createGraphics(width*scal, height*scal);

    // ベースレイヤの操作
    ly_base.background(100);
    //読み込んだ画像の表示
    ly_base.image(imgbk, 0, 0);

    image(ly_base, 0, 0);
}

function draw() {
    // カバーレイヤの操作
    //ly_whitecover.fill(255, 255,255);
    //ly_whitecover.noStroke();
    //ly_whitecover.rect(0, 0, width, height);
    //ly_whitecover.erase();
    //ly_whitecover.rect(100, 100, 100, 100);
    //ly_whitecover.noErase();

    // ランダムにひし形を生成
    x = int(random(0, 384))*scal;// このx とy で円の左上頂点が決まる→ここを規則的にする
    y = int(random(0, 384))*scal;
    r = int(random(2, 15))*2-1;// 奇数で出力
    tr = random(0, 50);
    for (i = 0; i < r; i++) {
        ii = i*2+1;
        j = (r - ii)/2;
        l = r - j*2;
        noStroke();
        fill(colors[0][1], colors[0][2], colors[0][3], tr);
        for (t = 0; t<l; t++) {
            rect(x+j*scal+t*scal, y+i*scal, scal,scal);
            if(i!=r-1){
                rect(x+j*scal+t*scal, y+2*r*scal-i*scal-scal*2, scal, scal);
            }
        }
    }


    // 手前レイヤの操作
    ly_front.image(imgch, 0, 0);

    // レイヤを配置
    image(ly_whitecover, 0, 0);
    image(ly_front, 0, 0);



    //noLoop();
}