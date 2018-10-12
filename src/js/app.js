export function App() {
  console.log("App() created!")
  this.currentTouches = [];
	this.gestures = {
    'tap': {
      'time': 75,
      'distance': 10
    },
		'swipe': {
			'north': {
				'distance': -50,
				'duration': 100
			},
			'south': {
				'distance': 50,
				'duration': 100
			},
			'west': {
				'distance': -40,
				'duration': 100
			},
			'east': {
				'distance': 40,
				'duration': 100
			}
		}
	};
	this.swipeActions = {
		'north': function(){
			$("#message").html("UP")
		},
		'south': function(){
			$("#message").html("DOWN")
		},
		'west': function(){
			$("#message").html("LEFT")
		},
		'east': function(){
			$("#message").html("RIGHT")
		},
		'northwest': function(){
			$("#message").html("UP-LEFT")
		},
		'northeast': function(){
			$("#message").html("UP-RIGHT")
		},
		'southwest': function(){
			$("#message").html("DOWN-LEFT")
		},
		'southeast': function(){
			$("#message").html("DOWN-RIGHT")
		},
  }
}