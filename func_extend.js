// Два независимых конструктора

// 1 - Конструктор
function Play(name) {
	this.name = name;
};



// 2 - Конструктор
function GamePlay(name) {
	this.name = name;
};


var nameMixin =  {
	getName: function () {
		return this.name;
	}
};

var controlsMixin = {
	play: function () {
		console.log('this.name' + ' started playing');
	}
};


// Экземпляры классов 
var newPlay = new Track('Super track');
var newGamePlay = new Playlist('Cool playlist');

// Создание функции Примеси
var extend = function(target) {
	if(!arguments[1]) {
		return;
	}

	for(let i = 1; i < arguments.length; i++) {
		var source = arguments[i];


		for (var prop in source) {
			if(!target[prop] && source.hasOwnProperty(prop)) {
				target[prop] = source[prop];
			}
		}
	}
};

extend(Play.prototype, nameMixin, controlsMixin);
extend(GamePlay.prototype, nameMixin, controlsMixin);