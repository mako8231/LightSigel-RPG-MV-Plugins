let IMAGE_PATH = "img/pictures/"

function Dialog_Bust(){
    this.initialize.apply(this, arguments);
}

Dialog_Bust.prototype = Object.create(Game_Picture.prototype);
Dialog_Bust.prototype.constructor = Dialog_Bust;

//inicializar o objeto 
Dialog_Bust.prototype.initialize = function(){
    Game_Picture.prototype.initialize.call(this);

}

//desenhar a imagem na tela 
Dialog_Bust.prototype.show = function(name, origin, x, y, scaleX, scaleY, opacity, blendMode){
    Game_Picture.prototype.show.call(this, name, origin, x, y, scaleX, scaleY, opacity, blendMode);
}

Dialog_Bust.prototype.initBasic = function(){
    Game_Picture.prototype.initBasic.call(this);
}

Dialog_Bust.prototype.initialize

Dialog_Bust.prototype.setPosition = function(x, y){
    this._x = x;
    this._y = y;
}

//creating a Actor class 
let Actor = class {
    
    constructor(char_name) {
        this._char_name = char_name; 
        this._emotions = {};    
        this._current_emotion = "";
        this._pictures_index = -1;
    }

    insertEmotion(name, picture_name){
        this._emotions[name] = new Dialog_Bust()
        this._emotions[name].initBasic()        
        this._emotions[name]._name = picture_name; 
        this._current_emotion = name;
    }

    show(){
        this._pictures_index = $gameScreen._pictures.length + 1;
        $gameScreen._pictures[this._pictures_index] = this._emotions[this._current_emotion];
    }

    hide(){
        if (this._pictures_index > -1){
            $gameScreen._pictures[this._pictures_index] = null;
            this._pictures_index = -1;
        } else {
            console.error("This Actor is already hidden");
        }
    }

}

//creating a DialogManager class
let DialogManager = class {
    constructor() {
        //actors stack 
        this._actors = []
    }

}