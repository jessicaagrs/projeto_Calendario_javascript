let dateBegin = document.getElementById("input-dateBegin")
let dateEnd = document.getElementById("input-dateEnd")
let button = document.getElementById("btn-submit")
let buttonClear = document.getElementById("btn-clean")
let daysArray = document.getElementsByTagName("span")

button.addEventListener("click", function () {
    let dataIn = dateBegin.value
    let day = Number(dataIn.slice(-2))
    let dataFn = dateEnd.value
    let day1 = Number(dataFn.slice(-2))
    
    if(dataIn[6] != dataFn[6] || dataIn[7] != dataFn[7]){
        alert("As datas precisam estar no mesmo mes")
        clear()
    }

    for (const key in daysArray) {
        if (Number(key) == (day - 1)) {
            daysArray[key].parentElement.className = "pontasData"
        };
    }

    for (const key in daysArray) {
        if (Number(key) == (day1 - 1)) {
            daysArray[key].parentElement.className = "pontasData"
        };
    }

    for (let i = day; i < (day1 - 1); i++) {
        daysArray[i].classList = "entreData"
    }
})

function clear() {
    document.location.reload(true);
}

buttonClear.addEventListener("click", clear)





