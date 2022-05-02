// write js code here corresponding to matches.html
var data = JSON.parse(localStorage.getItem("schedule"))
var filv = document.querySelector("#filterVenue").value
var arr1 = []
document.querySelector("#filterVenue").addEventListener("onchange", filt)

function filt() {
    data.filter(function(el) {
        return el.venue
    });
    arr1.push(data)
    localStorage.setItem("filterd", JSON.stringify(arr1))
}


data.forEach(function(el) {
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
    td6.innerText = "Add as Favourites"
    td6.style.color = "green"
    td6.style.cursor = "pointer"
    td6.addEventListener("click", function() {
        addfav(el)
    })

    trow.append(td1, td2, td3, td4, td5, td6)
    document.querySelector("tbody").append(trow)

});

function addfav(el) {
    arr1.push(el)
    localStorage.setItem("favourites", JSON.stringify(arr1))

}