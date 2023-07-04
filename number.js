function result(){
    let a = document.getElementById("num")
    if (a.value == 5) {
        document.getElementById("result").innerHTML = "yes"
    }
    else {
        document.getElementById("result").innerHTML = "np"
    }
}