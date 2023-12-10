function sayFig(figure){  
    input.value += figure
}
function ac(){
    input.value = ""
    output.value = "0"
}
input.style.display = "none"
output.style.display = "none"
function On() {
    if (on.innerText == "ON"){
        input.style.display  = "block"
        output.style.display = "block"
        input.value = ""
        output.value = "0"
        on.innerText = "OFF"
        on.style = "background-color:rgb(235, 12, 12)"
        } else {
            input.style.display  = "none"
            input.value = ""
            output.value = "0"
            output.style.display = "none"
            on.innerText = "ON"
            on.style = "background-color:rgb(12, 83, 7)"
        }
}
function operation(operation){
    input.value += operation
}

function equal(){
    var b = input.value
    if(b.search("sin") == -1 && b.search("cos") == -1 && b.search("tan") == -1 && b.search("log") == -1 && b.search("√") == -1){
        output.value = eval(input.value).toPrecision(5)
    } else if(b.search("sin") != -1) {
        var g = b.replace("sin", "(Math.PI/180)*")

        var kk = (eval(g))
        var ff = Math.sin(kk)
        var ss = ff.toPrecision(4);
        output.value= ss;
    } else if(b.search("cos") != -1) {
        var g = b.replace("cos", "(Math.PI/180)*")

        var kk = (eval(g))
        var ff = Math.cos(kk)
        var ss = ff.toPrecision(4);
        output.value= ss;
    } else if(b.search("tan") != -1) {
        var g = b.replace("tan", "(Math.PI/180)*")

        var kk = (eval(g))
        var ff = Math.tan(kk)
        var ss = ff.toPrecision(4);
        output.value= ss;
    } else if(b.search("log") != -1) {
        var g = b.replace("log", "Math.log10")

        var kk = (eval(g))
        var ss = kk.toPrecision(4);
        output.value= ss;
    } else if(b.search("√") != -1) {
        var g = b.replace("√", "Math.sqrt")

        var kk = (eval(g))
        var ss = kk.toPrecision(4);
        output.value= ss;
    }

}
function saysqrt(){
   output.value = Math.sqrt(input.value)
}
function del(){
    input.value = input.value.substr(0,input.value.length-1)
}
function sayans(){
    input.value =  output.value
}
function sayope(ope){
    input.value += ope
}