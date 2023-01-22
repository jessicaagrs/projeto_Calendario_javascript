let dateBegin = document.getElementById("input-dateBegin")
let dateEnd = document.getElementById("input-dateEnd")
let button = document.getElementById("btn-submit")
let buttonClear = document.getElementById("btn-clean")
let daysArray = document.getElementsByTagName("span")

button.addEventListener("click", () => {
    const dataIn = dateBegin.value;
    const startDay = Number(dataIn.slice(-2));
    const dataFn = dateEnd.value;
    const endDay = Number(dataFn.slice(-2));
    
    if(dataIn.slice(0,7) !== dataFn.slice(0,7) ){
        alert("As datas precisam estar no mesmo mes")
        clear();
        return;
    }

    for (let i = startDay - 1; i <= endDay - 1; i++) {
        if (i === startDay - 1 || i === endDay - 1) {
            daysArray[i].parentElement.className = "pontasData";
        } else {
            daysArray[i].classList = "entreData";
        }
    }
});

function clear() {
    document.location.reload(true);
}

buttonClear.addEventListener("click", clear)





