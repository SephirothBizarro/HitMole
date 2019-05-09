var Hammer = (function(_super){
    function Hammer(){
        Hammer.super(this);
    }
    Laya.class(Hammer,"Hammer",_super);
    var _proto = Hammer.prototype;
    //开始使用
    _proto.start = function(){
        Laya.Mouse.hide();
        Laya.stage.on(Laya.Event.MOUSE_DOWN,this,this.onMouseDown);
        Laya.stage.on(Laya.Event.MOUSE_MOVE,this,this.onMouseMove);
        this.onMouseMove();
    }
    //结束使用
    _proto.end = function(){
        Laya.Mouse.show();
        Laya.stage.off(Laya.Event.MOUSE_DOWN,this,this.onMouseDown);
        Laya.stage.off(Laya.Event.MOUSE_MOVE,this,this.onMouseMove);
    }
    _proto.onMouseDown = function(){
        this.hit.play(0,false);
    }
    _proto.onMouseMove = function(){
        this.pos(Laya.stage.mouseX-this.width/2,Laya.stage.mouseY-this.height/3);
    }
    return Hammer;
})(ui.HammerUI);