(function(){
    (function(LayaSample){
        //初始化引擎
        Laya.init(800,600);
        Laya.stage.scaleMode = Laya.Stage.SCALE_NOSCALE;
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
        //设置stage颜色
        Laya.stage.bgColor = "#ffcccc";
        //加载资源
        Laya.loader.load("res/atlas/ui.json",Laya.Handler.create(this,onLoaded),null,Laya.Loader.ATLAS)
    })();
    function onLoaded(){
        // var game = new Game();
        // Laya.stage.addChild(game);
        LayaSample.gameStart = new GameStart();
        Laya.stage.addChild(LayaSample.gameStart);
    }
})(window.LayaSample || (window.LayaSample = {}));