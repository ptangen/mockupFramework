(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"mockupFramework_atlas_", frames: [[535,0,16,16],[553,0,16,16],[585,0,12,7],[571,0,12,7],[0,0,533,534],[0,536,1180,22]]}
];


// symbols:



(lib.arrow_left = function() {
	this.spriteSheet = ss["mockupFramework_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.arrow_right = function() {
	this.spriteSheet = ss["mockupFramework_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ic_arrow_drop_down_black_24dp_1x = function() {
	this.spriteSheet = ss["mockupFramework_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ic_arrow_drop_up_black_24dp_1x = function() {
	this.spriteSheet = ss["mockupFramework_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.postit = function() {
	this.spriteSheet = ss["mockupFramework_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.toolbarBackground = function() {
	this.spriteSheet = ss["mockupFramework_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.previousButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arrow_left();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16,16);


(lib.nextButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arrow_right();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16,16);


(lib.moveNoteUpButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic_arrow_drop_up_black_24dp_1x();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12,7);


(lib.moveNoteDownButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic_arrow_drop_down_black_24dp_1x();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12,7);


(lib.hotspot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,102,204,0.2)").s().p("AmPExIAAphIMfAAIAAJhg");
	this.shape.setTransform(40,30.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,61);


(lib.Note = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		// add eventListener to moveNoteUpButon
		if (this.moveNoteUpButton.hasEventListener("click") == false) {
			this.moveNoteUpButton.addEventListener("click", moveNoteHandler.bind(this));
		}
		
		// add eventListener to moveNoteDownButon
		if (this.moveNoteDownButton.hasEventListener("click") == false) {
			this.moveNoteDownButton.addEventListener("click", moveNoteHandler.bind(this));
		}
		
		this.moveNoteDownButton.visible = false;
		
		function moveNoteHandler() {
			
			console.log("move note , y = " + this.y);
			
			if (this.y > 400) {
				this.y = 270; // move note to top of the viewport
				this.moveNoteUpButton.visible = false; // hide the move up button
				this.moveNoteDownButton.visible = true; // show the move down button
			} else {
				this.y = 684; // move note to bottom of the viewport
				this.moveNoteUpButton.visible = true; // show move up button
				this.moveNoteDownButton.visible = false; // show the move down button
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.moveNoteDownButton = new lib.moveNoteDownButton();
	this.moveNoteDownButton.parent = this;
	this.moveNoteDownButton.setTransform(104,230);
	new cjs.ButtonHelper(this.moveNoteDownButton, 0, 1, 1);

	this.moveNoteUpButton = new lib.moveNoteUpButton();
	this.moveNoteUpButton.parent = this;
	this.moveNoteUpButton.setTransform(104,3);
	new cjs.ButtonHelper(this.moveNoteUpButton, 0, 1, 1);

	this.title = new cjs.Text("title", "bold 12px 'Arial Black'");
	this.title.name = "title";
	this.title.lineHeight = 19;
	this.title.lineWidth = 200;
	this.title.parent = this;
	this.title.setTransform(10,14);

	this.body = new cjs.Text("body", "12px 'Arial'");
	this.body.name = "body";
	this.body.lineHeight = 15;
	this.body.lineWidth = 200;
	this.body.parent = this;
	this.body.setTransform(10,42);

	this.instance = new lib.postit();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.413,0.449);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.body},{t:this.title},{t:this.moveNoteUpButton},{t:this.moveNoteDownButton}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Note, new cjs.Rectangle(0,0,220,240), null);


// stage content:
(lib.mockupFramework = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		// add eventListener to hotspot
		if (this.hotspot.hasEventListener("click") == false) {
			this.hotspot.addEventListener("click", clickHotspotHandler.bind(this));
		}
		
		// add eventListener to nextButton
		if (this.nextButton.hasEventListener("click") == false) {
			this.nextButton.addEventListener("click", clickHotspotHandler.bind(this));
		}
		
		// add eventListener to previousButton
		if (this.previousButton.hasEventListener("click") == false) {
			this.previousButton.addEventListener("click", clickPreviousButtonHandler.bind(this));
		}
		
		function clickHotspotHandler() {
			
			if (this.currentFrame+1 == this.totalFrames) {
				this.gotoAndStop(0); // if on last frame then go to first frame 
			} else {
				this.gotoAndStop(this.currentFrame + 1); // advance to next frame
			}
			updateFrame(this, null);
		}
		
		function clickPreviousButtonHandler() {
		
			if (this.currentFrame - 1 < 0) {
				//this.gotoAndStop(this.totalFrames + 1); // if on first frame then go to last frame 
				updateFrame(this, this.totalFrames);
			} else {
				updateFrame(this, this.currentFrame); // go to previous frame
			}
		}
		
		function updateFrame(thisPassed, frameRequested) {
			
			// go to requestedFrame if requested
			if (frameRequested != null) {
				frameRequested--;
				thisPassed.gotoAndStop(frameRequested);
				console.log("frameRequested = " + frameRequested);
			}
			
			// toolbar
			var frameLabel = thisPassed.currentFrame + 1
			thisPassed.titleBarFrameLabel.text = frameLabel + " of " + thisPassed.totalFrames;
			
			// notes
			thisPassed.note.title.text = frameLabel + ". " + dataStore.allNotes[thisPassed.currentFrame].title;
			thisPassed.note.body.text = dataStore.allNotes[thisPassed.currentFrame].body;
		}
		
		function getURLParameter (sVar) {
		  return unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + escape(sVar).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
		}
		
		
		var noteInst;
		
		function Note (title, body) {
		    this.title = title;
		    this.body = body;
		    this.getInfo = function() {
		        return this.title + ' ' + this.body + ' note';
		    };
		}
		// initialize the mockup
		
		var dataStore = new createjs.Container();
		dataStore.allNotes = [];
		
		// note data
		noteInst = new Note('title 1', 'content 1');
		dataStore.allNotes.push(noteInst);
		noteInst = new Note('title 2', 'content 2');
		dataStore.allNotes.push(noteInst);
		noteInst = new Note('title 3', 'content 3');
		dataStore.allNotes.push(noteInst);
		noteInst = new Note('title 4', 'content 4');
		dataStore.allNotes.push(noteInst);
		
		// mockup data
		dataStore.mockupLabel = "sample mockup";
		
		// disable the default animation
		this.stop();
		
		// update text
		this.titleBarMockupLabel.text = dataStore.mockupLabel;
		
		// determine which frame to show initially
		var initialFrameRequested = getURLParameter("frame"); // try to get value of frame from url
		
		if (initialFrameRequested != "") {
			if (parseInt(initialFrameRequested) <= this.totalFrames && parseInt(initialFrameRequested) >= 0) {
				updateFrame(this, initialFrameRequested);
			} else {
				updateFrame(this, null);
			}
		} else {
			updateFrame(this, null);
		}
		
		// place note in lower right corner if its not already in the upper right corner
		if (this.note.y != 270) {
			this.note.x = 1225;
			this.note.y = 684;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// framework
	this.previousButton = new lib.previousButton();
	this.previousButton.parent = this;
	this.previousButton.setTransform(262,670,1,1,0,0,0,8,8);
	new cjs.ButtonHelper(this.previousButton, 0, 1, 1);

	this.nextButton = new lib.nextButton();
	this.nextButton.parent = this;
	this.nextButton.setTransform(367,670,1,1,0,0,0,8,8);
	new cjs.ButtonHelper(this.nextButton, 0, 1, 1);

	this.titleBarFrameLabel = new cjs.Text("frame num", "11px 'Arial'");
	this.titleBarFrameLabel.name = "titleBarFrameLabel";
	this.titleBarFrameLabel.textAlign = "center";
	this.titleBarFrameLabel.lineHeight = 14;
	this.titleBarFrameLabel.lineWidth = 60;
	this.titleBarFrameLabel.parent = this;
	this.titleBarFrameLabel.setTransform(314.1,664.1);

	this.titleBarMockupLabel = new cjs.Text("mockupLabel", "bold 12px 'Arial Black'");
	this.titleBarMockupLabel.name = "titleBarMockupLabel";
	this.titleBarMockupLabel.lineHeight = 19;
	this.titleBarMockupLabel.lineWidth = 227;
	this.titleBarMockupLabel.parent = this;
	this.titleBarMockupLabel.setTransform(8,660.1);

	this.instance = new lib.toolbarBackground();
	this.instance.parent = this;
	this.instance.setTransform(0,658);

	this.note = new lib.Note();
	this.note.parent = this;
	this.note.setTransform(1223.5,683.1,1,1,0,0,0,266.5,267.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.note},{t:this.instance},{t:this.titleBarMockupLabel},{t:this.titleBarFrameLabel},{t:this.nextButton},{t:this.previousButton}]}).wait(4));

	// hotspot
	this.hotspot = new lib.hotspot();
	this.hotspot.parent = this;
	this.hotspot.setTransform(342.5,200.6,1,1,0,0,0,40,30.5);
	new cjs.ButtonHelper(this.hotspot, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.hotspot).wait(1).to({x:322.5,y:187.5},0).wait(1).to({x:179,y:127.5},0).wait(1).to({x:311.6,y:132.5},0).wait(1));

	// content
	this.text = new cjs.Text("1", "24px 'Times'", "#0066CC");
	this.text.lineHeight = 26;
	this.text.lineWidth = 67;
	this.text.parent = this;
	this.text.setTransform(330,185.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({x:320,y:173.5,text:"2"},0).wait(1).to({x:181,y:129.5,text:"3"},0).wait(1).to({x:312,y:118.5,text:"4"},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(590,510.1,1180,513);
// library properties:
lib.properties = {
	width: 1180,
	height: 680,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/mockupFramework_atlas_.png?1493309567007", id:"mockupFramework_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;