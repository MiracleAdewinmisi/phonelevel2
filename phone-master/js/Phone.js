callingdiv.style.display = "none"

onphone = () => {
    dark.style.display = "none"
    homepagemain.style.display = "block"
    phoneinner.style.display = "none"
    vouching.style.display = "none"
    navi.style.backgroundColor = "rgba(255, 255, 255, 0.455)"
}
offphone = () => {
    dark.style.display = ""
    homepagemain.style.display = "none"
}


sideoff = () => {
    if(dark.style.display != ""){
        dark.style.display = "";
        phoneinner.style.display = "none"
        vouching.style.display = "none"
        wholegame.style.display = "none"
        calc.style.display = "none"
        showvoucher.style.display = "none"
    } else{
        homepagemain.style.display = "block" 
        dark.style.display = "none"
        phoneinner.style.display = "none"
        vouching.style.display = "none"
        wholegame.style.display = "none"
        calc.style.display = "none"
        showvoucher.style.display = "none"
    }
}

// voucher page
showvouch = () => {
    vouching.style.display = "block"
    homepagemain.style.display = "none"
    phoneinner.style.display = "none"
    dark.style.display = "none"
    navi.style.backgroundColor = "rgba(0, 128, 128, 0.625)"
}

showphone = () => {
    phoneinner.style.display = "block"
    homepagemain.style.display = "none"
    time.style.color = "#111"
    navi.style.backgroundColor = "#fff05"
}

addNumber = () => {
    addContact.style.display = "block"
    phoneinner.style.display = "none"
    // homepagemain.style.display = "none"
    time.style.color = "#111"
    navi.style.backgroundColor = "#fff05"
}

showfig = (dialfig) => {
    dialinput.value += dialfig
    choosesim.style.display = "none"
}
deletenum = () => {
    dialinput.value = dialinput.value.substr(0,dialinput.value.length-1)
    choosesim.style.display = "none"
}
choosesim.style.display = "none"
showavailablesim = () => {
    if( dialinput.value != ""){
        choosesim.style.display = "block"
        selectsimtocall.style.display = "block"
        loadmessage.style.display = "none"
    }
}


gohome = () => {
    choosesim.style.display = "none"
    vouching.style.display = "none"
    phoneinner.style.display = "none"
    wholegame.style.display = "none"
    homepagemain.style.display = "block"
    calc.style.display = "none"
    time.style.color = "#fff"
    showvoucher.style.display = "none"
    navi.style.backgroundColor = "rgba(255, 255, 255, 0.4)"
}

back = () => {
    if(showvoucher.style.display == "block"){
        vouching.style.display = "block"
        showvoucher.style.display = "none"
        return;
    } else if(choosesim.style.display == "block" || balancediv.style.display == "block"){
        choosesim.style.display = "none"
        balancediv.style.display = "none"
        return;
    }
    choosesim.style.display = "none";
    vouching.style.display = "none"
    phoneinner.style.display = "none"
    wholegame.style.display = "none"
    homepagemain.style.display = "block"
    calc.style.display = "none"
    time.style.color = "#fff"
    showvoucher.style.display = "none"
    navi.style.backgroundColor = "rgba(255, 255, 255, 0.4)"
}



cancel = () => {
    choosesim.style.display = "none"
    loadmessage.style.display = "none"
}
okay = () =>{
    choosesim.style.display = "none"
    dialinput.value = ""
    loadmessage.style.display = "none"
}
// window.onclick = function (){
//     simtype.classList.remove("showsimname");
// }



vouchokay = () => {
    alert2.style.display = "none"
}


showgame =() =>{
    time.style.color = "#fff"
    wholegame.style.display = "block"
    homepagemain.style.display= "none"
}


showcalculator = () =>{
    homepagemain.style.display = "none"
    calc.style.display = "block"
}

