function press(val){
    document.getElementById("screen").value+=val
}
function cleardisplay(){
    document.getElementById("screen").value=""
}
function equalsign(){
    var total= document.getElementById("screen").value
    var result = eval(total)
    document.getElementById("screen").value= result
}
