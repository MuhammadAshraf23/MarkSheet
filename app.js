let main = document.getElementById("main")
let result = document.getElementById('result')

function marks() {
    let name = document.getElementById("name").value;
    let roll_No = +document.getElementById("roll_No").value;
    let comMarks = +document.getElementById("com").value;
    let statsMarks = +document.getElementById("stats").value;
    let mathMarks = +document.getElementById("math").value;
    let phyMarks = +document.getElementById("phy").value;
    let engMarks = +document.getElementById("eng").value;
    let pstMarks = +document.getElementById("pst").value;
    let islMarks = +document.getElementById("isl").value;
    let totalObtainedMarks = comMarks + statsMarks + mathMarks + phyMarks + engMarks + pstMarks + islMarks
    let percentage = Math.floor(totalObtainedMarks / 700 * 100);
    let grade;
    if (percentage < 100 && percentage >= 90) {
        grade = 'A+';
    } else if (percentage >= 80) {
        grade = 'A';
    } else if (percentage >= 70) {
        grade = 'B';
    } else if (percentage >= 60) {
        grade = 'C';
    } else if (percentage >= 50) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    document.getElementById("totalObtainedMarks").value = totalObtainedMarks + "/700"
    document.getElementById("name1").value = name
    document.getElementById("roll_No1").value = roll_No
    document.getElementById("percentage").value = percentage+"%";
    document.getElementById("grade").value = grade;
    document.getElementById("result").style.display="block"
    document.getElementById("container").style.display="none"
} 
