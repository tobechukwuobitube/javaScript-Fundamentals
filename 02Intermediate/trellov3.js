
const myTodos = {
	day: 'Monday',
	meetings: 0,
	meetingsDone: 0,
	addMeeting: function (meeting) {
		this.meetings = this.meetings + meeting
	},
	meetingDone: function(meeting) {
		this.meetings = this.meetings - meeting
	},
	resetMeetings: function() {
		this.meetings = 0
		this.meetingsDone = 0
	},
	summary: function() {
		if (this.meetings === 1){
			return `You have ${this.meetings} meeting on ${this.day}`
	}
		return `You have ${this.meetings} meetings on ${this.day}` 
	}
}

myTodos.addMeeting(9)
myTodos.meetingDone(5)
myTodos.resetMeetings()
console.log(myTodos.summary())