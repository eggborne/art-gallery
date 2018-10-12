export function Touch(app,touchEvent) {
	this.identifier = touchEvent.identifier;
  this.startTime = Date.now();
	this.x = Math.round(touchEvent.pageX);
	this.y = Math.round(touchEvent.pageY);
  this.startSpot = { x: this.x, y: this.y };
  this.endSpot = {};
	this.getDuration = function () {
		return Date.now() - this.startTime;
	}
	this.getDistance = function () {
    var distance = {};
		distance.x = this.x - this.startSpot.x;
		distance.y = this.y - this.startSpot.y;
		return distance
	}
	this.getSwipe = function () {
		var fullSwipe = ""
		var duration = this.getDuration();
		var distance = this.getDistance();
		if (distance.y <= app.gestures.swipe.north.distance && duration <= app.gestures.swipe.north.duration) {
			fullSwipe += "north";
		}
		if (distance.y >= app.gestures.swipe.south.distance && duration <= app.gestures.swipe.south.duration) {
			fullSwipe += "south";
		}
		if (distance.x <= app.gestures.swipe.west.distance && duration <= app.gestures.swipe.west.duration) {
			fullSwipe += "west";
		}
		if (distance.x >= app.gestures.swipe.east.distance && duration <= app.gestures.swipe.east.duration) {
			fullSwipe += "east";
		}
    return fullSwipe;
	}
}
export function TouchHandler(app) {
	console.log("handler initialized!")
	this.touchStart = function(event) {
		for (var i=0; i<event.changedTouches.length; i++) {
			var newTouch = event.changedTouches[i]
			app.currentTouches.push(new Touch(app, newTouch));
		}
	}
	this.touchMove = function(event) {
		var movingTouches = [];
		for (var i=0; i<event.changedTouches.length; i++) {
      var movingTouch = event.changedTouches[i];
      var touchCopy = { 'identifier': movingTouch.identifier, 'pageX': movingTouch.pageX, 'pageY': movingTouch.pageY }
			movingTouches.push(touchCopy);
		}
		movingTouches.forEach(function(touchEvent, i) {
			var touchObject = new Touch(app, touchEvent);
			// take each touch that moved...
			app.currentTouches.forEach(function (existingTouch, j) {
				//...find it in the list...
				if (touchObject.identifier === existingTouch.identifier) {
					//...replace the old {x,y} with the new one
					app.currentTouches[j].x = touchObject.x;
					app.currentTouches[j].y = touchObject.y;
					// check if it has completed a swipe
          var swiped = app.currentTouches[j].getSwipe()
          if (swiped) {
            app.swipeActions[swiped]()
          }
				}
			});
		});
	}
	this.touchEnd = function(event) {
		Array.from(event.changedTouches).forEach(function(touch, i) {
			var duration = app.currentTouches[i].getDuration();
      var distance = app.currentTouches[i].getDistance();
			if (duration <= app.gestures.tap.time
				&& distance.x <= app.gestures.tap.distance && distance.y < app.gestures.tap.distance) {
					$("#message").html("TAPPED!")
			} else {
        $("#message").html("TOO SLOW! " + duration)
      }
			app.currentTouches.splice(i, 1);
		});
  }
  this.setInputs = function() {
    document.body.addEventListener('touchstart',this.touchStart,true);
    document.body.addEventListener('touchmove',this.touchMove,true);
    document.body.addEventListener('touchend',this.touchEnd,true);
    console.log("inputs set!")
  }
}