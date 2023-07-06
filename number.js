let count = 1
temp = Math.floor(Math.random() * 11);
function result() {
    let a = document.getElementById("num")
    // document.getElementById("tp").innerHTML = temp

    if (a.value < temp) {
        document.getElementById("tp").innerHTML = " u r wrong " + count + " times" ;
        count = count + 1;
        document.getElementById("result").innerHTML = "Higher Number please " ;
        document.getElementById("result").style.backgroundColor = "coral" ;
   }
    if (a.value > temp) {
        document.getElementById("tp").innerHTML = " u r wrong " + count + " times" ;
        count = count + 1
        document.getElementById("result").innerHTML = "Lower Number please "
        document.getElementById("result").style.backgroundColor = "coral"

    }
    if (a.value == temp) {
        document.getElementById("result").style.backgroundColor = "chartreuse";
    
        document.getElementById("result").innerHTML = "you r correct in " + count + " attempts";
    }


}