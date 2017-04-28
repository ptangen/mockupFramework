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


(lib.___Camera___ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// viewfinder
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();


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
		
		function displayNotesAndTitle() {
			
			// update text
			if (root.titleBarMockupLabel.text.length == 0) {
				root.titleBarMockupLabel.text = dataStore.mockupLabel;
			}
			
			if (initialFrameRequested != "") {
				if (parseInt(initialFrameRequested) <= root.totalFrames && parseInt(initialFrameRequested) >= 0) {
					updateFrame(initialFrameRequested);
				} else {
					updateFrame(null);
				}
			} else {
				updateFrame(null);
			}
		}
		
		function clickHotspotHandler() {
			
			if (this.currentFrame+1 == this.totalFrames) {
				this.gotoAndStop(0); // if on last frame then go to first frame 
			} else {
				this.gotoAndStop(this.currentFrame + 1); // advance to next frame
			}
			updateFrame(null);
		}
		
		function clickPreviousButtonHandler() {
		
			if (this.currentFrame - 1 < 0) {
				updateFrame(this.totalFrames); // go to last frame in the animation
			} else {
				updateFrame(this.currentFrame); // go to previous frame
			}
		}
		
		function updateFrame(frameRequested) {
			
			// go to requestedFrame if requested
			if (frameRequested != null) {
				frameRequested--;
				root.gotoAndStop(frameRequested);
				console.log("frameRequested = " + frameRequested);
			}
			
			// toolbar
			var frameLabel = root.currentFrame + 1
			root.titleBarFrameLabel.text = frameLabel + " of " + root.totalFrames;
			
			// notes
			root.note.title.text = frameLabel + ". " + dataStore.allNotes[root.currentFrame].title;
			root.note.body.text = dataStore.allNotes[root.currentFrame].body;
		}
		
		function getURLParameter (sVar) {
		  return unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + escape(sVar).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
		}
		
		// init
		var noteInst;
		function Note (title, body) {
		    this.title = title;
		    this.body = body;
		    this.getInfo = function() {
		        return this.title + ' ' + this.body + ' note';
		    };
		}
		// initialize the mockup
		var root = this;
		var dataStore = new createjs.Container();
		dataStore.allNotes = [];
		// empty note data so the page can be displayed before the API returns the notes
		noteInst = new Note('', '');
		dataStore.allNotes.push(noteInst);
		dataStore.mockupLabel = ".";
		
		// handle request
		function status(response) {  
		  if (response.status >= 200 && response.status < 300) { 
		    return Promise.resolve(response)  
		  } else {  
		    return Promise.reject(new Error(response.statusText))  
		  }  
		}
		
		function json(response) {  
		  return response.json()  
		}
		var server = "http://www.ptangen.com/walkthroughs/";
		var filePath = "db/getFrameMetadataXML.php?format=json";
		var mockupName = getURLParameter("mockupName");
		var release = getURLParameter("release");
		
		var request = new Request(server + filePath + "&mockupName=" + mockupName + "&release=" + release, {
			method: 'GET', 
			mode: 'cors', 
			headers: new Headers({
				'Content-Type': 'text/plain'
			})
		});
		
		fetch(request)
			.then(status)  
			.then(json)  
			.then(function(data) {
				for (var i=0; i < data.length; i++) {
					console.log(data[i].noteTitle);
					noteInst = new Note(data[i].noteTitle, data[i].noteContent);
					dataStore.allNotes.push(noteInst);
				}
				dataStore.allNotes.splice(0,1); // remove the placeholder data
				dataStore.mockupLabel = "sample mockup";
				displayNotesAndTitle(); // update the text after the datastore is populated
				
			}).catch(function(error) {  
				console.log('Request failed', error);  
			});
		
		// disable the default animation
		this.stop();
		
		// determine which frame to show initially
		var initialFrameRequested = getURLParameter("frame"); // try to get value of frame from url
		
		displayNotesAndTitle();
		
		// place note in lower right corner if its not already in the upper right corner
		if (this.note.y != 270) {
			this.note.x = 1225;
			this.note.y = 684;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.parent = this;
	this.___camera___instance.setTransform(590,340);

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(4));

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

	// Actions
	this.text = new cjs.Text("", "12px 'ArialMT'");
	this.text.lineHeight = 15;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(41,455.2);

	this.timeline.addTween(cjs.Tween.get(this.text).to({_off:true},1).wait(3));

	// hotspot
	this.hotspot = new lib.hotspot();
	this.hotspot.parent = this;
	this.hotspot.setTransform(342.5,200.6,1,1,0,0,0,40,30.5);
	new cjs.ButtonHelper(this.hotspot, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.hotspot).wait(1).to({x:322.5,y:187.5},0).wait(1).to({x:179,y:127.5},0).wait(1).to({x:311.6,y:132.5},0).wait(1));

	// content
	this.text_1 = new cjs.Text("1", "24px 'Times'", "#0066CC");
	this.text_1.lineHeight = 26;
	this.text_1.lineWidth = 67;
	this.text_1.parent = this;
	this.text_1.setTransform(330,185.1);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(1).to({x:320,y:173.5,text:"2"},0).wait(1).to({x:181,y:129.5,text:"3"},0).wait(1).to({x:312,y:118.5,text:"4"},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(589,339,1182,684);
// library properties:
lib.properties = {
	width: 1180,
	height: 680,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/mockupFramework_atlas_.png?1493328412419", id:"mockupFramework_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;