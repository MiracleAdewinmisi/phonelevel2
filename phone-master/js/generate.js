showsim  = (sim) =>{
    showsimname.innerText = sim
    simtype.style.display = "none"
    showsimname.style.fontWeight = "bold"
}

re  = () =>{
    simtype.style.display = "none"
}

showit = () => {
    simtype.style.display = "block"
}

// function for generating card
if(localStorage.voucherstorage == null) {
    localStorage.setItem("voucherstorage", "");
 }

generate = () =>{
    // showvoucher.innerHTML = "";
    simtype.style.display = "none";
    if((noofcard.value == "")&& (showsimname.innerText == "Select Sim type") && (amount.value == "Select Amount")){
        alert2.style.display = "block"
        alertmessage.innerHTML = `<div class="text-center enteroption">Please enter Neccessary Information before generating Pin</div>
        <button class="float-right btn okay" onclick='vouchokay()'>Okay</button>`
    } else if((noofcard.value == "")&& (showsimname.innerText != "Select Sim type") && (amount.value != "Select Amount")){
        warn.innerText = "You are to input Number of card to generate"
    } else if((noofcard.value != "")&& (showsimname.innerText == "Select Sim type") && (amount.value != "Select Amount")){
        warn.innerText = "You are yet to select sim type"
    }  else if((noofcard.value != "")&& (showsimname.innerText != "Select Sim type") && (amount.value == "Select Amount")){
        warn.innerText = "You are yet to select the amount to generate"
    }
    if((noofcard.value != "")&& (amount.value != "Select Amount")){
        warn.style.display = "none"
        for (let i = 0; i <noofcard.value ; i++) {

            let a = Math.floor(Math.random() * 9)
            let b = Math.floor(Math.random() * 9)
            let c = Math.floor(Math.random() * 9)
            let d = Math.floor(Math.random() * 9)
            let e = Math.floor(Math.random() * 9)
            let f = Math.floor(Math.random() * 9)
            let g = Math.floor(Math.random() * 9)
            let h = Math.floor(Math.random() * 9)
            let k = Math.floor(Math.random() * 9)
            let l = Math.floor(Math.random() * 9)
            let m = Math.floor(Math.random() * 9)
            let n = Math.floor(Math.random() * 9)
            let o = Math.floor(Math.random() * 9)
            let p = Math.floor(Math.random() * 9)
            let q = Math.floor(Math.random() * 9)
            let r = Math.floor(Math.random() * 9)
            let s = Math.floor(Math.random() * 9)
    
            if(showsimname.innerText == "MTN") {
                alert2.style.display = "block";
                alertmessage.innerHTML = `<div class="enteroption small">You have successfully generated ${noofcard.value} &#8358;${amount.value} MTN Card. Press "Show card" button to View and copy generated Card. Dial *555*PIN# to load card</div>
                <button class="float-right btn okay" onclick='vouchokay()'>Okay</button>`
                let mtnv = (`${a}${b}${c}${d}${e}${f}${g}${h}${k}${l}${m}${n}${o}${p}${q}${r}${s}`)

                let vouchinfo = {
                    cardname:`${showsimname.innerText}`,
                    code:mtnv,
                    amount:`#${amount.value}`,
                    status:`unused`
                }
                var allarray = []
                if(localStorage.voucherstorage == ""){
                    allarray.push(vouchinfo);
                    localStorage.setItem("voucherstorage", JSON.stringify(allarray));
                } else{
                    var oops = JSON.parse(localStorage.getItem("voucherstorage"))
                    for (let p = 0; p < oops.length; p++) {
                        const www = oops[p];
                        allarray.push(www);
                    }
                    allarray.push(vouchinfo);
                    localStorage.setItem("voucherstorage", JSON.stringify(allarray));
                }
            }  else if(showsimname.innerText == "Airtel"){
                alert2.style.display = "block";
                alertmessage.innerHTML = `<div class="enteroption small">You have successfully generated ${noofcard.value} &#8358;${amount.value} Airtel Card. Press "Show card" button to View and copy generated Card. Dial *126*PIN# to load card</div>
                <button class="float-right btn okay" onclick='vouchokay()'>Okay</button>`
                    let mtnv = (`${a}${b}${c}${d}${e}${f}${g}${h}${k}${l}${m}${n}`)

                    let vouchinfo = {
                        cardname:`${showsimname.innerText}`,
                        code:mtnv,
                        amount:`#${amount.value}`,
                        status:`unused`
                    }
                    var allarray = []
                    if(localStorage.voucherstorage == ""){
                        allarray.push(vouchinfo);
                        localStorage.setItem("voucherstorage", JSON.stringify(allarray));
                    } else{
                        var oops = JSON.parse(localStorage.getItem("voucherstorage"))
                        for (let p = 0; p < oops.length; p++) {
                            const www = oops[p];
                            allarray.push(www);
                        }
                        allarray.push(vouchinfo);
                        localStorage.setItem("voucherstorage", JSON.stringify(allarray));
                    }
                }  else if(showsimname.innerText == "Glo"){
                    alert2.style.display = "block";
                    alertmessage.innerHTML = `<div class="enteroption small">You have successfully generated ${noofcard.value} &#8358;${amount.value} Glo Card. 
                    Press "Show card" button to View and copy generated Card. Dial *123*PIN# to load card</div>
                    <button class="float-right btn okay" onclick='vouchokay()'>Okay</button>`
                    let mtnv = (`${a}${b}${c}${d}${e}${f}${g}${h}${k}${l}${m}${n}${o}${p}${q}`)

                    let vouchinfo = {
                        cardname:`${showsimname.innerText}`,
                        code:mtnv,
                        amount:`#${amount.value}`,
                        status:`unused`
                    }
                    var allarray = []
                    if(localStorage.voucherstorage == ""){
                        allarray.push(vouchinfo);
                        localStorage.setItem("voucherstorage", JSON.stringify(allarray));
                    } else{
                        var oops = JSON.parse(localStorage.getItem("voucherstorage"))
                        for (let p = 0; p < oops.length; p++) {
                            const www = oops[p];
                            allarray.push(www);
                        }
                        allarray.push(vouchinfo);
                        localStorage.setItem("voucherstorage", JSON.stringify(allarray));
                    }

            } else if(showsimname.innerText == "9Mobile"){
                alert2.style.display = "block";
                alertmessage.innerHTML = `<div class="enteroption small">You have successfully generated ${noofcard.value} &#8358;${amount.value} 9Mobile Card. Press "Show card" button to View and copy generated Card. Dial *111*PIN# to load card</div>
                <button class="float-right btn okay" onclick='vouchokay()'>Okay</button>`
                    let mtnv = (`${a}${b}${c}${d}${e}${f}${g}${h}${k}${l}${m}${n}${o}${p}${q}`)

                    let vouchinfo = {
                        cardname:`${showsimname.innerText}`,
                        code:mtnv,
                        amount:`#${amount.value}`,
                        status:`unused`
                    }
                    var allarray = []
                    if(localStorage.voucherstorage == ""){
                        allarray.push(vouchinfo);
                        localStorage.setItem("voucherstorage", JSON.stringify(allarray));
                    } else{
                        var oops = JSON.parse(localStorage.getItem("voucherstorage"))
                        for (let p = 0; p < oops.length; p++) {
                            const www = oops[p];
                            allarray.push(www);
                        }
                        allarray.push(vouchinfo);
                        localStorage.setItem("voucherstorage", JSON.stringify(allarray));
                    }
            }
        }
    } 
}

showcard = () =>{
    showpin.innerHTML = ""
    showvoucher.style.display = "block"
    var getlocal = JSON.parse(localStorage.getItem("voucherstorage"))
    for (let g = 0; g < getlocal.length; g++) {
        const ff = getlocal[g];
        let ggg = document.createElement("div");
        ggg.id = "vouch";

            ggg.style.backgroundColor = "#fff"
            ggg.classList = "rounded ml-4 mt-3"
            ggg.innerHTML = `
            <span id="naid" style="display:none">${ff.cardname}</span>
            <span class="float-right mr-3">${ff.amount}</span><br>
            <div id="coddd">${ff.code}</div>`
        document.querySelector("#showpin").appendChild(ggg)
        
        if (ff.status == "used" && ff.cardname == "MTN"){
            ggg.style.backgroundImage = "url(js/img/used.png)"
        } else if(ff.status == "unused" && ff.cardname == "MTN"){
            ggg.style.backgroundImage = "url(js/img/unused.png)"
        } else if(ff.status == "used" && ff.cardname == "Airtel"){
            ggg.style.backgroundImage = "url(js/img/used2.png)"
        } else if(ff.status == "unused" && ff.cardname == "Airtel"){
            ggg.style.backgroundImage = "url(js/img/unused2.png)"
        } else if(ff.status == "used" && ff.cardname == "Glo"){
            ggg.style.backgroundImage = "url(js/img/used3.png)"
        } else if(ff.status == "unused" && ff.cardname == "Glo"){
            ggg.style.backgroundImage = "url(js/img/unused3.png)"
        } else if(ff.status == "used" && ff.cardname == "9Mobile"){
            ggg.style.backgroundImage = "url(js/img/used4.png)"
        } else if(ff.status == "unused" && ff.cardname == "9Mobile"){
            ggg.style.backgroundImage = "url(js/img/unused4.png)"
        }
        
    }
}

vouchokay = () => {
    alert2.style.display = "none"
    noofcard.value = ""
    amount.value = "Select Amount"
    showsimname.innerText = "Select Sim type"
    showsimname.style.fontWeight = "unset"
}