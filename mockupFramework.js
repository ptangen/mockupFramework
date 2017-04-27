(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"mockupFramework_atlas_", frames: [[0,0,533,534],[0,536,1180,22]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.postit = function() {
	this.spriteSheet = ss["mockupFramework_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.toolbarBackground = function() {
	this.spriteSheet = ss["mockupFramework_atlas_"];
	this.gotoAndStop(1);
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


(lib.hotspot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,102,204,0.2)").s().p("AmPExIAAphIMfAAIAAJhg");
	this.shape.setTransform(40,30.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,61);


(lib.Postit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.postit();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Postit, new cjs.Rectangle(0,0,533,534), null);


// stage content:
(lib.mockupFramework = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var dataStore = new createjs.Container();
		
		dataStore.allNotes = [];
		var noteInst;
		
		function Note (title, content) {
		    this.title = title;
		    this.content = content;
		    this.getInfo = function() {
		        return this.title + ' ' + this.content + ' note';
		    };
		}
		
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
		
		
		// set up the mockup
		
		// disable the default animation
		this.stop();
		
		// add eventListener to hotspot
		if (this.hotspot.hasEventListener("click") == false) {
			this.hotspot.addEventListener("click", clickHotspotHandler.bind(this));
		}
		
		// update text
		this.titleBarMockupLabel.text = dataStore.mockupLabel;
		
		var initialFrameRequested = getURLParameter("frame"); // try to get value of frame from url
		
		if (initialFrameRequested != "") {
			updateFrame(this, initialFrameRequested);
		} else {
			updateFrame(this, null);
		}
		
		function clickHotspotHandler() {
			
			if (this.currentFrame+1 == this.totalFrames) {
				this.gotoAndStop(0); // if on last frame then go to first frame 
			} else {
				this.gotoAndStop(this.currentFrame + 1); // advance to next frame
			}
			updateFrame(this, null);
		}
		
		function updateFrame(thisPassed, frameRequested) {
			
			// go to requestedFrame if requested
			if (frameRequested != null) {
				frameRequested--;
				thisPassed.gotoAndStop(frameRequested);
			}
			
			// toolbar
			var frameLabel = thisPassed.currentFrame + 1
			thisPassed.titleBarFrameLabel.text = frameLabel + " of " + thisPassed.totalFrames;
			
			// notes
			thisPassed.noteTitle.text = frameLabel + ". " + dataStore.allNotes[thisPassed.currentFrame].title;
			thisPassed.noteContent.text = dataStore.allNotes[thisPassed.currentFrame].content;
		}
		
		function getURLParameter (sVar) {
		  return unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + escape(sVar).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// framework
	this.noteTitle = new cjs.Text("noteTitle", "bold 12px 'Arial Black'");
	this.noteTitle.name = "noteTitle";
	this.noteTitle.lineHeight = 19;
	this.noteTitle.lineWidth = 185;
	this.noteTitle.parent = this;
	this.noteTitle.setTransform(986,318.1);

	this.titleBarFrameLabel = new cjs.Text("frame number", "12px 'Arial'");
	this.titleBarFrameLabel.name = "titleBarFrameLabel";
	this.titleBarFrameLabel.lineHeight = 15;
	this.titleBarFrameLabel.lineWidth = 191;
	this.titleBarFrameLabel.parent = this;
	this.titleBarFrameLabel.setTransform(227.1,663.1);

	this.noteContent = new cjs.Text("noteContent", "12px 'Arial'");
	this.noteContent.name = "noteContent";
	this.noteContent.lineHeight = 15;
	this.noteContent.lineWidth = 185;
	this.noteContent.parent = this;
	this.noteContent.setTransform(986,345.8);

	this.text = new cjs.Text("", "12px 'Arial-Black'");
	this.text.lineHeight = 19;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(101.1,714.7);

	this.titleBarMockupLabel = new cjs.Text("mockupLabel", "bold 12px 'Arial Black'");
	this.titleBarMockupLabel.name = "titleBarMockupLabel";
	this.titleBarMockupLabel.lineHeight = 19;
	this.titleBarMockupLabel.lineWidth = 191;
	this.titleBarMockupLabel.parent = this;
	this.titleBarMockupLabel.setTransform(8,661.1);

	this.instance = new lib.toolbarBackground();
	this.instance.parent = this;
	this.instance.setTransform(0,658);

	this.instance_1 = new lib.Postit();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1080,412,0.375,0.375,0,0,0,266.5,267);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.titleBarMockupLabel},{t:this.text},{t:this.noteContent},{t:this.titleBarFrameLabel},{t:this.noteTitle}]}).wait(4));

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
p.nominalBounds = new cjs.Rectangle(590,510.1,1180,563.6);
// library properties:
lib.properties = {
	width: 1180,
	height: 680,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/mockupFramework_atlas_.png", id:"mockupFramework_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;