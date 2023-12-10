
if(localStorage.accountbalance == null){
    localStorage.setItem("accountbalance", "");
}

let bala = {
    mtnbal:0,
    airtelbal: 0,
    global: 0,
    mobilebal:0
}
let timeout; 
if (localStorage.accountbalance == "") {
    localStorage.setItem("accountbalance", JSON.stringify(bala))
}
let theaudio = new Audio("audio/Florida_Georgia_Line_Simple__(outdoorses.com)-1.mp3")
usemtn = () => {
    smallcalling.style.display = "block"
    selectsimtocall.style.display = "none";
    if (localStorage.voucherstorage != "") {
        
        let searchifmtn = JSON.parse(localStorage.getItem("voucherstorage"));
        for (let q = 0; q < searchifmtn.length; q++) {
        const searchingcode = searchifmtn[q].code;
        let searchingamount = searchifmtn[q].amount
        if((dialinput.value.slice(0,5) == `*555*`) && 
        (searchingcode.search(dialinput.value.slice(5,22)) != -1) && 
        (dialinput.value.slice(5,22) != "") &&
        (dialinput.value.slice(22,23) == `#`) &&
        (searchifmtn[q].cardname == `MTN`) && 
        (searchifmtn[q].status == `unused`)){
            loadmessage.style.display = "block"
            searchifmtn[q].status = `used`
            let usd = searchifmtn.splice(q,1)[0];
            searchifmtn.push(usd);
            loadmessage.innerHTML  = `Your recharge of ${searchingamount} Card was successful.
            Dial *556# to check your Balance.
            <button class="float-right small text-muted btn okay mt-2" onclick="okay()">Okay</button>`;
            dialinput.value = "";
            localStorage.setItem("voucherstorage", JSON.stringify(searchifmtn));

            let bbb = parseInt(searchingamount.slice(1));

            let getbalanced = JSON.parse(localStorage.getItem("accountbalance"));
            getbalanced.mtnbal += Number(bbb);
            localStorage.setItem("accountbalance", JSON.stringify(getbalanced));
            
            
        } else if((dialinput.value.slice(0,5) == `*555*`) && 
                (searchingcode.search(dialinput.value.slice(5,22)) != -1) && 
                // (dialinput.value.slice(5,22) != "") &&
                (dialinput.value.slice(22,23) == `#`) &&
                (searchifmtn[q].cardname == `MTN`) && 
                (searchifmtn[q].status == `used`)){
                loadmessage.style.display = "block"
                loadmessage.innerHTML  = `Pin has already been used
                <button class="float-right small text-muted btn okay mt-2" onclick="okay()">Okay</button>`;
                dialinput.value = "";
            }
        }
    }
     if((dialinput.value.slice(0,3) == 080 || dialinput.value.slice(0,3) == 081 || dialinput.value.slice(0,3) == 070 || dialinput.value.slice(0,3) == 090)&& 
        (dialinput.value.toString().length == 11)){
            var getagain = JSON.parse(localStorage.getItem("accountbalance"));
            if (getagain.mtnbal > 0.99) {
                choosesim.style.display = "none"
                callingdiv.style.display = "block";
                callnumber.innerText = dialinput.value;
                callnet.innerText = "MTN-NG";
                whole2.style.display = "block"
                whole2.classList.add("secondphone")
                recieving.style.display = "block";
                theaudio.play();
                timeout = setInterval(checkaudiotime, 1000);
            } else{
                choosesim.style.display = "none"
                balancediv.style.display = "block";
                balancediv.innerHTML = `<div id="balance" class="bal bg-white rounded p-2">
                <span>You do not have sufficient airtime.</span><br>
                <button class="btn float-right" onclick="dismissbal()">Okay</button>
                </div>`
            }
        } else if((dialinput.value.slice(0,6) == `+23480` || dialinput.value.slice(0,6) == `+23490` || dialinput.value.slice(0,6) == `+23470` || dialinput.value.slice(0,6) == `+23481`) && 
            (dialinput.value.toString().length == 14)){
            var getagain = JSON.parse(localStorage.getItem("accountbalance"))
            if (getagain.mtnbal > 0.99) {
                choosesim.style.display = "none"
                callingdiv.style.display = "block";
                callnumber.innerText = dialinput.value;
                callnet.innerText = "MTN-NG";
                whole2.style.display = "block"
                whole2.classList.add("secondphone")
                recieving.style.display = "block";
                theaudio.play();
                setInterval(checkaudiotime, 1000);
                timeout = setInterval(checkaudiotime, 1000);
            } else {
                choosesim.style.display = "none"
                balancediv.style.display = "block";
                balancediv.innerHTML = `<div id="balance" class="bal bg-white rounded p-2">
                <span>You do not have sufficient airtime.</span><br>
                <button class="btn float-right" onclick="dismissbal()">Okay</button>
                </div>`
            }
        } else if((dialinput.value.slice(0,5) == `*556#`)){
            let getmybal = JSON.parse(localStorage.getItem("accountbalance"))
            let ba = getmybal.mtnbal
            let fa = (ba).toFixed(2);
            choosesim.style.display = "none"
            balancediv.style.display = "block";
            balancediv.innerHTML = `<div id="balance" class="bal bg-white rounded p-4">
            <span>Your MTN Main Balance is &#8358;${fa}</span><br>
            <button class="btn float-right" onclick="dismissbal()">Okay</button>
            </div>`
        } else if(
            (dialinput.value.search(`#`) != -1) &&
            (
                ((dialinput.value.slice(0,5) != `*555*`) && ((dialinput.value.slice(-1) == `#`) || (dialinput.value.slice(-1) != `#`))) ||
                ((dialinput.value.slice(0,5) == `*555*`)) &&
                ((dialinput.value.slice(0,5) == `*556#`))
            )
        ) {
            choosesim.style.display = "none"
            balancediv.style.display = "block";
            balancediv.innerHTML = `<div id="balance" class="bal bg-white rounded p-2">
            <span>The code you entered is invalid</span><br>
            <button class="btn float-right" onclick="dismissbal()">Okay</button>
            </div>`
        }
}

    

    dismissbal = () => {
        balancediv.style.display = "none"
    dialinput.value = ""
}


smallcalling.style.display = "block"




useairtel = () => {
    selectsimtocall.style.display = "none";
    if (localStorage.voucherstorage != "") {
        let searchifmtn = JSON.parse(localStorage.getItem("voucherstorage"));
        for (let q = 0; q < searchifmtn.length; q++) {
            const searchingcode = searchifmtn[q].code;
            let searchingamount = searchifmtn[q].amount
            if((dialinput.value.slice(0,5) == `*126*`) && 
                (searchingcode.search(dialinput.value.slice(5,17)) != -1) && 
                (dialinput.value.slice(5,17) != "") &&
                (dialinput.value.slice(17,18) == `#`) &&
                (searchifmtn[q].cardname == `Airtel`) && 
                (searchifmtn[q].status == `unused`)){
                    loadmessage.style.display = "block"
                    searchifmtn[q].status = `used`
                    let usd = searchifmtn.splice(q,1)[0];
                    searchifmtn.push(usd);
                    loadmessage.innerHTML  = `Your recharge of ${searchingamount} Card was successful.
                    Dial *123# to check your Balance.
                    <button class="float-right small text-muted btn okay mt-2" onclick="okay()">Okay</button>`;
                    dialinput.value = "";
                    localStorage.setItem("voucherstorage", JSON.stringify(searchifmtn))

                    let bbb = parseInt(searchingamount.slice(1));
                    let getbalanced = JSON.parse(localStorage.getItem("accountbalance"));
                    getbalanced.airtelbal += Number(bbb);
                    localStorage.setItem("accountbalance", JSON.stringify(getbalanced));
            } else if((dialinput.value.slice(0,5) == `*126*`) && 
                (searchingcode.search(dialinput.value.slice(5,22)) != -1) && 
                (dialinput.value.slice(5,17) != "") &&
                (dialinput.value.slice(17,18) == `#`) &&
                (searchifmtn[q].cardname == `Airtel`) && 
                (searchifmtn[q].status == `used`)){
                    loadmessage.style.display = "block"
                    loadmessage.innerHTML  = `Pin has already been used`;
                    dialinput.value = "";
            }
        }
    }
        if((dialinput.value.slice(0,5) == `*123#`)){
            let getmybal = JSON.parse(localStorage.getItem("accountbalance"))
            let ba = getmybal.airtelbal
            let fa = (ba).toFixed(2);
            choosesim.style.display = "none"
            balancediv.style.display = "block";
            balancediv.innerHTML = `<div id="balance" class="bal bg-white rounded p-4">
            <span>Your Airtel Main Balance is &#8358;${fa}</span><br>
            <button class="btn float-right" onclick="dismissbal()">Okay</button>
            </div>`
        }
        else if((dialinput.value.slice(0,3) == 080 || dialinput.value.slice(0,3) == 081 || dialinput.value.slice(0,3) == 070 || dialinput.value.slice(0,3) == 090)&& (dialinput.value.toString().length == 11)){
            var getagain = JSON.parse(localStorage.getItem("accountbalance"))
            if (getagain.airtelbal > 0.99) {
            choosesim.style.display = "none"
            callingdiv.style.display = "block";
            callnumber.innerText = dialinput.value;
            callnet.innerText = "Airtel-NG";
            whole2.style.display = "block"
            whole2.classList.add("secondphone")
            recieving.style.display = "block"
             theaudio.play();
             setInterval(checkaudiotime, 1000);
                timeout = setInterval(checkaudiotime, 1000);
            } else{
                choosesim.style.display = "none"
                balancediv.style.display = "block";
                balancediv.innerHTML = `<div id="balance" class="bal bg-white rounded p-2">
                <span>You do not have sufficient airtime.</span><br>
                <button class="btn float-right" onclick="dismissbal()">Okay</button>
                </div>`
            }
    } else if((dialinput.value.slice(0,6) == `+23480` || dialinput.value.slice(0,6) == `+23490` || dialinput.value.slice(0,6) == `+23470` || dialinput.value.slice(0,6) == `+23481`) && 
	(dialinput.value.toString().length == 14)){
        var getagain = JSON.parse(localStorage.getItem("accountbalance"))
            if (getagain.airtelbal > 0.99) {
        choosesim.style.display = "none"
            callingdiv.style.display = "block";
            callnumber.innerText = dialinput.value;
            callnet.innerText = "Airtel-NG";
            whole2.style.display = "block"
            whole2.classList.add("secondphone")
            recieving.style.display = "block";
            theaudio.play();
            setInterval(checkaudiotime, 1000);
                timeout = setInterval(checkaudiotime, 1000);
            } else {
                choosesim.style.display = "none"
                balancediv.style.display = "block";
                balancediv.innerHTML = `<div id="balance" class="bal bg-white rounded p-2">
                <span>You do not have sufficient airtime.</span><br>
                <button class="btn float-right" onclick="dismissbal()">Okay</button>
                </div>`
            }
    }  else if(
		(dialinput.value.search(`#`) != -1) &&
		(
			((dialinput.value.slice(0,5) != `*126*`) && ((dialinput.value.slice(-1) == `#`) || (dialinput.value.slice(-1) != `#`))) ||
			((dialinput.value.slice(0,5) == `*126*`)) &&
			((dialinput.value.slice(0,5) == `*123#`))
		)
	) {
		choosesim.style.display = "none"
		balancediv.style.display = "block";
		balancediv.innerHTML = `<div id="balance" class="bal bg-white rounded p-2">
		<span>The code you entered is invalid</span><br>
		<button class="btn float-right" onclick="dismissbal()">Okay</button>
		</div>`
	}
}




smallcalling.style.display = "block"








useglo = () => {
    selectsimtocall.style.display = "none";
    loadmessage.style.display = "block"
    if (localStorage.voucherstorage != "") {
        
        let searchifmtn = JSON.parse(localStorage.getItem("voucherstorage"));
        for (let q = 0; q < searchifmtn.length; q++) {
            const searchingcode = searchifmtn[q].code;
            let searchingamount = searchifmtn[q].amount
            if((dialinput.value.slice(0,5) == `*123*`) && 
                (searchingcode.search(dialinput.value.slice(5,17)) != -1) && 
                (dialinput.value.slice(5,20) != "") &&
                (dialinput.value.slice(20,21) == `#`) &&
                (searchifmtn[q].cardname == `Glo`) && 
                (searchifmtn[q].status == `unused`)){
                    loadmessage.style.display = "block"
                    searchifmtn[q].status = `used`
                    let usd = searchifmtn.splice(q,1)[0];
                    searchifmtn.push(usd);
                    loadmessage.innerHTML  = `Your recharge of ${searchingamount} Card was successful.
                Dial *124# to check your Balance.
                <button class="float-right small text-muted btn okay mt-2" onclick="okay()">Okay</button>`;
                    dialinput.value = "";
                    localStorage.setItem("voucherstorage", JSON.stringify(searchifmtn))
                    
                    let bbb = parseInt(searchingamount.slice(1));
                    let getbalanced = JSON.parse(localStorage.getItem("accountbalance"));
                    // getbalanced.global = parseInt(getbalanced.global)
                    getbalanced.global += Number(bbb);
                    localStorage.setItem("accountbalance", JSON.stringify(getbalanced));
            } else if((dialinput.value.slice(0,5) == `*124*`) && 
                (searchingcode.search(dialinput.value.slice(5,22)) != -1) && 
                (dialinput.value.slice(5,20) != "") &&
                (dialinput.value.slice(20,21) == `#`) &&
                (searchifmtn[q].cardname == `Glo`) && 
                (searchifmtn[q].status == `used`)){
                    loadmessage.style.display = "block"
                    loadmessage.innerHTML  = `Pin has already been used`;
                    dialinput.value = "";
            }
        }
    }
        if((dialinput.value.slice(0,5) == `*124#`)){
            let getmybal = JSON.parse(localStorage.getItem("accountbalance"))
            let ba = getmybal.global
            let fa = (ba).toFixed(2);
            choosesim.style.display = "none"
            balancediv.style.display = "block";
            balancediv.innerHTML = `<div id="balance" class="bal bg-white rounded p-4">
            <span>Your Glo Main Balance is &#8358;${fa}</span><br>
            <button class="btn float-right" onclick="dismissbal()">Okay</button>
            </div>`
        }
        else if((dialinput.value.slice(0,3) == 080 || dialinput.value.slice(0,3) == 081 || dialinput.value.slice(0,3) == 070 || dialinput.value.slice(0,3) == 090)&& 
        (dialinput.value.toString().length == 11)){
            var getagain = JSON.parse(localStorage.getItem("accountbalance"))
            if (getagain.global > 0.99) {
            choosesim.style.display = "none"
            callingdiv.style.display = "block";
            callnumber.innerText = dialinput.value;
            callnet.innerText = "Glo-NG";
            whole2.style.display = "block"
            whole2.classList.add("secondphone")
            recieving.style.display = "block"
             theaudio.play();
             setInterval(checkaudiotime, 1000);
                timeout = setInterval(checkaudiotime, 1000);
            } else{
                choosesim.style.display = "none"
                balancediv.style.display = "block";
                balancediv.innerHTML = `<div id="balance" class="bal bg-white rounded p-2">
                <span>You do not have sufficient airtime.</span><br>
                <button class="btn float-right" onclick="dismissbal()">Okay</button>
                </div>`
            }
    } else if((dialinput.value.slice(0,6) == `+23480` || dialinput.value.slice(0,6) == `+23490` || dialinput.value.slice(0,6) == `+23470` || dialinput.value.slice(0,6) == `+23481`) && 
	(dialinput.value.toString().length == 14)){
        var getagain = JSON.parse(localStorage.getItem("accountbalance"))
            if (getagain.global > 0.99) {
        choosesim.style.display = "none"
            callingdiv.style.display = "block";
            callnumber.innerText = dialinput.value;
            callnet.innerText = "Glo-NG";
            whole2.style.display = "block"
            whole2.classList.add("secondphone")
            recieving.style.display = "block";
            theaudio.play();
            setInterval(checkaudiotime, 1000);
                timeout = setInterval(checkaudiotime, 1000);
            } else {
                choosesim.style.display = "none"
                balancediv.style.display = "block";
                balancediv.innerHTML = `<div id="balance" class="bal bg-white rounded p-2">
                <span>You do not have sufficient airtime.</span><br>
                <button class="btn float-right" onclick="dismissbal()">Okay</button>
                </div>`
            }
    }   else if(
		(dialinput.value.search(`#`) != -1) &&
		(
			((dialinput.value.slice(0,5) != `*222*`) && ((dialinput.value.slice(-1) == `#`) || (dialinput.value.slice(-1) != `#`))) ||
			((dialinput.value.slice(0,5) == `*222*`)) &&
			((dialinput.value.slice(0,5) == `*111#`))
		)
	) {
		choosesim.style.display = "none"
		balancediv.style.display = "block";
		balancediv.innerHTML = `<div id="balance" class="bal bg-white rounded p-2">
		<span>The code you entered is invalid</span><br>
		<button class="btn float-right" onclick="dismissbal()">Okay</button>
		</div>`
	}
}


smallcalling.style.display = "block"








usemobile = () => {
    selectsimtocall.style.display = "none"
    if (localStorage.voucherstorage != "") {
        
        let searchifmtn = JSON.parse(localStorage.getItem("voucherstorage"));
        for (let q = 0; q < searchifmtn.length; q++) {
            const searchingcode = searchifmtn[q].code;
            let searchingamount = searchifmtn[q].amount
            if((dialinput.value.slice(0,5) == `*222*`) && 
                (searchingcode.search(dialinput.value.slice(5,17)) != -1) && 
                (dialinput.value.slice(5,20) != "") &&
                (dialinput.value.slice(20,21) == `#`) &&
                (searchifmtn[q].cardname == `9Mobile`) && 
                (searchifmtn[q].status == `unused`)){
                    loadmessage.style.display = "block"
                    searchifmtn[q].status = `used`;
                    let usd = searchifmtn.splice(q,1)[0];
                    searchifmtn.push(usd);
                    loadmessage.innerHTML  = `Your recharge of ${searchingamount} Card was successful.
                    Dial *111# to check your Balance.
                    <button class="float-right small text-muted btn okay mt-2" onclick="okay()">Okay</button>`;
                    dialinput.value = "";
                    localStorage.setItem("voucherstorage", JSON.stringify(searchifmtn))

                    let bbb = parseInt(searchingamount.slice(1));
                    let getbalanced = JSON.parse(localStorage.getItem("accountbalance"));
                    // getbalanced.mobilebal = parseInt(getbalanced.mobilebal)
                    getbalanced.mobilebal += Number(bbb);
                    localStorage.setItem("accountbalance", JSON.stringify(getbalanced));
            } else if((dialinput.value.slice(0,5) == `*222*`) && 
                    (searchingcode.search(dialinput.value.slice(5,17)) != -1) && 
                    (dialinput.value.slice(5,20) != "") &&
                    (dialinput.value.slice(20,21) == `#`) &&
                    (searchifmtn[q].cardname == `9Mobile`) && 
                    (searchifmtn[q].status == `used`)){
                        loadmessage.style.display = "block"
                        loadmessage.innerHTML  = `Pin has already been used`;
                        dialinput.value = "";
            }
        }
    }
        if((dialinput.value.slice(0,5) == `*111#`)){
            let getmybal = JSON.parse(localStorage.getItem("accountbalance"))
            let ba = getmybal.mobilebal;
            let fa = (ba).toFixed(2);
            choosesim.style.display = "none"
            balancediv.style.display = "block";
            balancediv.innerHTML = `<div id="balance" class="bal bg-white rounded p-4">
            <span>Your 9Mobile Main Balance is &#8358;${fa}</span><br>
            <button class="btn float-right" onclick="dismissbal()">Okay</button>
            </div>`
        }
        else if((dialinput.value.slice(0,3) == 080 || dialinput.value.slice(0,3) == 081 || dialinput.value.slice(0,3) == 070 || dialinput.value.slice(0,3) == 090)&& 
        (dialinput.value.toString().length == 11)){
            var getagain = JSON.parse(localStorage.getItem("accountbalance"))
            if (getagain.mobilebal > 0.99) {
            choosesim.style.display = "none"
            callingdiv.style.display = "block";
            callnumber.innerText = dialinput.value;
            callnet.innerText = "9Mobile-NG";
            whole2.style.display = "block"
            whole2.classList.add("secondphone")
            recieving.style.display = "block"
            theaudio.play();
            setInterval(checkaudiotime, 1000);
            timeout = setInterval(checkaudiotime, 1000);
            } else{
                choosesim.style.display = "none"
                balancediv.style.display = "block";
                balancediv.innerHTML = `<div id="balance" class="bal bg-white rounded p-2">
                <span>You do not have sufficient airtime.</span><br>
                <button class="btn float-right" onclick="dismissbal()">Okay</button>
                </div>`
            }
    } else if((dialinput.value.slice(0,6) == `+23480` || dialinput.value.slice(0,6) == `+23490` || dialinput.value.slice(0,6) == `+23470` || dialinput.value.slice(0,6) == `+23481`) && 
	(dialinput.value.toString().length == 14)){
        var getagain = JSON.parse(localStorage.getItem("accountbalance"))
            if (getagain.mobilebal > 0.99) {
        choosesim.style.display = "none"
            callingdiv.style.display = "block";
            callnumber.innerText = dialinput.value;
            callnet.innerText = "9Mobile-NG";
            whole2.style.display = "block"
            whole2.classList.add("secondphone")
            recieving.style.display = "block";
            theaudio.play();
            setInterval(checkaudiotime, 1000);
                timeout = setInterval(checkaudiotime, 1000);
            } else {
                choosesim.style.display = "none"
                balancediv.style.display = "block";
                balancediv.innerHTML = `<div id="balance" class="bal bg-white rounded p-2">
                <span>You do not have sufficient airtime.</span><br>
                <button class="btn float-right" onclick="dismissbal()">Okay</button>
                </div>`
            }
    }   else if(
		(dialinput.value.search(`#`) != -1) &&
		(
			((dialinput.value.slice(0,5) != `*123*`) && ((dialinput.value.slice(-1) == `#`) || (dialinput.value.slice(-1) != `#`))) ||
			((dialinput.value.slice(0,5) == `*123*`)) &&
			((dialinput.value.slice(0,5) == `*124#`))
		)
	) {
		choosesim.style.display = "none"
		balancediv.style.display = "block";
		balancediv.innerHTML = `<div id="balance" class="bal bg-white rounded p-2">
		<span>The code you entered is invalid</span><br>
		<button class="btn float-right" onclick="dismissbal()">Okay</button>
		</div>`
	}
}   




    if(localStorage.voucherstorage != ""){
        let get = JSON.parse(localStorage.getItem("voucherstorage"))
        if (localStorage.voucherstorage != null && localStorage.voucherstorage != "") {
            for (let h = 0; h < get.length; h++) {
                if (get[h].status == "used") {
                    let usd = get.splice(h,1)[0];
                    get.push(usd);
                    localStorage.setItem("voucherstorage", JSON.stringify(get))
                }
            }
        }
    }



    checkaudiotime = () => {
        if(theaudio.currentTime > 30){
            clearInterval(timeout);
            whole2.style.display = "none"
            callingdiv.style.display = "none"
            dialinput.value = ""
            theaudio.pause();
            theaudio = new Audio("audio/Florida_Georgia_Line_Simple__(outdoorses.com)-1.mp3");
            choosesim.style.display = "none"
            balancediv.style.display = "block";
            balancediv.innerHTML = `<div id="balance" class="bal bg-white rounded p-2">
            <span>Timeout</span><br>
            <button class="btn float-right" onclick="dismissbal()">Okay</button>
            </div>`
        }
    }