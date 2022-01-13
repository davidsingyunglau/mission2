$("#btnSend").click(function () {
    var gradePct = ($("#assignments").val() * .55 + $("#groupProject").val() * .05 + $("#quizzes").val() * .1 + $("#exams").val() * .2 + $("#intex").val() * .1)
    var gradeLetter = ""
    if (gradePct >= 94) {
        gradeLetter = "A";
    } else if (gradePct >= 90) {
        gradeLetter = "A-";
    } else if (gradePct >= 87) {
        gradeLetter = "B+";
    } else if (gradePct >= 84) {
        gradeLetter = "B";
    } else if (gradePct >= 80) {
        gradeLetter = "B-";
    } else if (gradePct >= 77) {
        gradeLetter = "C+";
    } else if (gradePct >= 74) {
        gradeLetter = "C";
    } else if (gradePct >= 70) {
        gradeLetter = "C-";
    } else if (gradePct >= 67) {
        gradeLetter = "D+";
    } else if (gradePct >= 64) {
        gradeLetter = "D";
    } else if (gradePct >= 60) {
        gradeLetter = "D-";
    } else {
        gradeLetter = "E";
    }
    alert("Your final grade is: " + gradeLetter + " with a " + gradePct + "%")
    })