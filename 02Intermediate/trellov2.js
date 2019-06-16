const myTodos = {
    day: 'Monday',
    meetings: 0,
    meetingsDone: 0
}

const addMeeting = function(todo, meeting = 0) {
    todo.meetings = todo.meetings + meeting
}

const doneMeeting = function(todo, meeting = 0) {
    todo.meetingsDone = todo.meetingsDone - meeting
}

const resetMeetings = function() {
    meetings = 0,
    meetingsDone = 0
}

const getDailyTodoSummary = function(todo) {
    let meetingsLeft = todo.meetings + todo.meetingsDone
    if (meetingsLeft === 1){
        return `You have ${meetingsLeft} meeting remaining for today`
    }
    return `You have ${meetingsLeft} meetings remaining for today`
}

addMeeting(myTodos, 7)

doneMeeting(myTodos, 4)

console.log(getDailyTodoSummary(myTodos))