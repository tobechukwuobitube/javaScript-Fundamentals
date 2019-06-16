
// let currentMarks, totalMarks

let getMyGrade = function(currentMarks, totalMarks){
    // console.log(typeof currentMarks)
        if (typeof(currentMarks) !== Number) {
            console.log('Please currentMarks must be a number')
        } else if (typeof(totalMarks) !== Number) {
            console.log('Please totalMarks must be a number')
        }

    let myPercent = (currentMarks/totalMarks) * 100

    let myGrade = ''

    if (myPercent >= 90) {
        myGrade = 'A'
    } else if (myPercent >= 80) {
        myGrade = 'B'
    } else if (myPercent >= 70) {
        myGrade = 'C'
    } else if (myPercent >= 60) {
        myGrade = 'D'
    } else {
        myGrade = 'F'
    }

    return `Your grade is ${myGrade} and your percentage is ${myPercent}`
}

let myResult = getMyGrade(85, 100)

console.log(myResult) 
