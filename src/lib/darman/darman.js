'use strict';

//パッケージの定義
var DARMAN = { REVISION: '00' };

//コンストラクター インスタンスが保持する動的な変数を定義する
//インスタンスが作られるたびに生成される
DARMAN.Earth = function (txt) {
	// body...

	console.log(this);

	//多分パブリック変数
	this.name = '';
	this.value = '10';
	this.myname = txt;

	//多分プライベート変数
	var _kaitensuu;
}

//クラスが保持する静的な関数を定義する
//prototypeはインスタンスで使いまわされる
DARMAN.Earth.prototype = {
	constructor: DARMAN.Earth,

	get kaitensuu () {
		return this._kaitensuu;
	},

	set kaitensuu ( value ) {
		this._kaitensuu = value;
	},

	plusName: function (t) {
		return t + this.myname;
	}
}

/**
 * いろいろなオブジェクトを作ります。
 */
DARMAN.Make = function () {
	this.element = document.createElement("div");
	this.element.style.position = "absolute";
	this.element.style.top = 0;
	this.element.style.left = 0;
	this.element.style.width = 0;
	this.element.style.height = 0;

	this.w=0;
	this.h=0;

	// this.element.addEventListener("DOMNodeInserted", add, false);
}

DARMAN.Make.prototype = {
	constructor: DARMAN.Make

	,set text (value) {
		this.element.textContent = value;
	}
	,set x (value) {
		this.element.style.left = value + "px";
	}
	,set y (value) {
		this.element.style.top = value + "px";
	}
	,get width () {
		return this.w;
	}
	,set width (value) {
		this.w = value;
		this.element.style.width = value;
	}
	,get height () {
		return this.h;
	}
	,set height (value) {
		this.h = value;
		this.element.style.height = value;
	}
	,graphics : function (color,w,h) {
		this.w = w;
		this.h = h;

		this.element.style.top = 0;
		this.element.style.left = 0;
		this.element.style.width = w + "px";
		this.element.style.height = h + "px";
		this.element.style.backgroundColor = color;
		this.element.style.color = "#fff";
		this.element.style.textAlign = "center";
	}
	// ,add :function (event) {
	// 	event.target
	// }
}

/*
DARMAN.Make.prototype.making = function () {
	// constructor: DARMAN.Make,
	// button: function (x,y,w,h) {
	// }
	this.element = document.createElement("div");
	// this.element.id = "id";
	this.element.style.position = "absolute";
	this.element.style.top = 0;
	this.element.style.left = 0;
	this.element.style.width = this.width + "px";
	this.element.style.height = this.height + "px";
	console.log(this.color);
	this.element.style.backgroundColor = this.color;
	this.element.style.color = "#fff";
	this.element.style.textAlign = "center";
	console.log(this.element);

}
//*/

DARMAN.Button = function () {
	DARMAN.Make.call( this );
}


DARMAN.Paper = function () {
	var side = Math.random() * 0.15 + 0.05;
	var g = new THREE.PlaneGeometry( side, side, 3 );
	var m = new THREE.MeshBasicMaterial( { color: Math.random() * 0xffffff, side: THREE.DoubleSide } );

	THREE.Mesh.call( this, g, m );

	this.type = 'Paper';

	this.startY;
	this.dropSpeed;
	this.rotSpeed;

};

DARMAN.Paper.prototype = Object.create( THREE.Mesh.prototype );
DARMAN.Paper.prototype.constructor = DARMAN.Paper;
