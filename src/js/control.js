




// export function touchStart(event) {
// 	for (var i=0; i<event.changedTouches.length; i++) {
// 		var newTouch = event.changedTouches[i]
// 		app.currentTouches.push(new Touch(app, newTouch));
// 	}
// }
// export function touchMove(event) {
// 	var movingTouches = [];
// 	for (var i=0; i<event.changedTouches.length; i++) {
//     movingTouches.push(copyTouch(event.changedTouches[i]));
// 	}
// 	movingTouches.forEach(function(touchEvent, i) {
// 		var touchObject = new Touch(app, touchEvent);
// 		// take each touch that moved...
// 		app.currentTouches.forEach(function (existingTouch, j) {
// 			//...find it in the list...
// 			if (touchObject.identifier === existingTouch.identifier) {
// 				//...replace the old {x,y} with the new one
// 				app.currentTouches[j].x = touchObject.x;
// 				app.currentTouches[j].y = touchObject.y;
// 				// check if it has completed a swipe
// 				var swiped = app.currentTouches[j].getSwipe()
// 				app.swipeActions[swiped]()
// 			}
// 		});
// 	});
// }
// export function touchEnd(event) {
// 	Array.from(event.changedTouches).forEach(function(touch, i) {
// 		var duration = app.currentTouches[i].getDuration();
// 		var distance = app.currentTouches[i].getDistance();
// 		if (duration <= app.tapTime 
// 			&& distance.x <= app.tapDistance && distance.y < app.tapDistance) {
// 				console.log("TAPPED!")
// 		}
// 		app.currentTouches.splice(i, 1);
// 	});
	
// }