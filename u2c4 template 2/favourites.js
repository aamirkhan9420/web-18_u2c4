// write js code here corresponding to favourites.html
var favdata = JSON.parse(localStorage.getItem("favourites"))

favdata.forEach(function(el, index) {
    var trow = document.createElement("tr")
    var td1 = document.createElement("td")
    td1.innerText = el.matchno1
    var td2 = document.createElement("td")
    td2.innerText = el.tAname
    var td3 = document.createElement("td")
    td3.innerText = el.tBname
    var td4 = document.createElement("td")
    td4.innerText = el.date1
    var td5 = document.createElement("td")
    td5.innerText = el.venue1
    var td6 = document.createElement("td")
    td6.innerText = "Delete"
    td6.style.color = "red"
    td6.style.cursor = "pointer"
    td6.addEventListener("click", function() {
        deleteit(el, index)
    })

    trow.append(td1, td2, td3, td4, td5, td6)
    document.querySelector("tbody").append(trow)

});
// var arr3 = []

function deleteit(el, index) {
    // favdata.push(el);
    // console.log(arr3)
    favdata.slice(index, 1)
    localStorage.setItem("favourites", JSON.stringify(favdata))
}