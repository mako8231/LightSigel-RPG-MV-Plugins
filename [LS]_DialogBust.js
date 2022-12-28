//=============================================================================
// [LS]_DialogBust.js
//=============================================================================

/*:
 * @plugindesc Display the character bust on dialogue.
 * @author LightSigel
 *
 * @param imageWidth
 * @desc The width of image.
 * @default 100
 * @param imageHeight
 * @desc The height of image. 
 * @default 100
 *
 * @help
 *
 * Plugin Command:
 *   teste               #testando                  
 *
*/


(function(){
    var parameters = PluginManager.parameters("[LS]_DialogBust");
    //var unknownData = String(parameters['Unknown Data'] || '??????');
    var imageWidth = String(parameters["imageWidth"] || 'Image Width');
    var imageHeight = String(parameters["imageHeight"] || 'Image Height');
    //$gameSystem._dialog_manager = new this.DialogManager()
    var actor;
var _Game_Interpreter_pluginCommand = 
    Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        if (command == 'DialogBust'){
            switch (args[0]){
                case 'teste':
                    
                    console.log(actor = new Actor("Makoto"));
                    actor.insertEmotion("neutral", "char");
                    actor.show()
            }
        }
    }
let IMAGE_PATH = "img/pictures/"



function Dialog_Bust(){
    this.initialize.apply(this, arguments);
}

Dialog_Bust.prototype = Object.create(Game_Picture.prototype);
Dialog_Bust.prototype.constructor = Dialog_Bust;

//initialyse the Dialog_Bust object 
Dialog_Bust.prototype.initialize = function(){
    Game_Picture.prototype.initialize.call(this);

}

//draw a picture onto canvas 
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

Dialog_Bust.prototype.setOpacity = function(opacity) {
    this._opacity = opacity
}

//creating a Actor class 
this.Actor = class {
    
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

    setPosition(x, y){
        this._emotions[this._current_emotion].setPosition(x, y);
    }

    setOpacity(opacity) {
        this._emotions[this._current_emotion].setOpacity(opacity);
    }

}

//creating a DialogManager class
this.DialogManager = class {
    constructor() {
        //actors dictionary 
        this._actors = {}
    }

    addActor(actorName){
        let actor = new Actor(actorName);
        this._actors[actorName] = actor;
    }

    newEmotion(actorName, emotion_name, picture_name){
        this._actors[actorName].insertEmotion(emotion_name, picture_name);
    }

    showActor(actorName){
        this._actors[actorName].show();
    }

    hideActor(actorName){
        this._actors[actorName].hide();
    }

    setActorPosition(actorName, x, y) {
        this._actors[actorName].setPosition(x, y);
    }

    setOpacity(actorName, opacity){
        this._actors[actorName].setOpacity(opacity);
    }
}


    
})();