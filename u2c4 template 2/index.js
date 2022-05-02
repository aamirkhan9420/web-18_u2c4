// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit", myfunc)

var arr = []

function myfunc() {
    event.preventDefault();
    var obj = {
        matchno1: masaiForm.matchNum.value,
        tAname: masaiForm.teamA.value,
        tBname: masaiForm.teamB.value,
        date1: masaiForm.date.value,
        venue1: masaiForm.venue.value
    }
    arr.push(obj)

    localStorage.setItem("schedule", JSON.stringify(arr))
}