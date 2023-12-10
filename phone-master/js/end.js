
let intset;
let intset2;
let fss = 0;
let fs = 0;
let fm = 0;
let fh = 0;
let getb = JSON.parse(localStorage.getItem("accountbalance"));
let getbb = JSON.parse(localStorage.getItem("accountbalance"));


receivecall2 = () => {
		getb = JSON.parse(localStorage.getItem("accountbalance"));
		getbb = JSON.parse(localStorage.getItem("accountbalance"));
		secondstest.style.display = "inline";
		willshow.style.display = "block"
		willshow2.style.display = "block"
		willshow3.style.display = "block"
		minutestest.style.display = "inline"
		hourtest.style.display = "inline"
		secondstest2.style.display = "inline"
		minutestest2.style.display = "inline"
		hourtest2.style.display = "inline"
		fss = 0;
		fs = 0;
		fm = 0;
		fh = 0;
		smallcalling.style.display = "none"
		cutbut2.style.display = "none"
		secondstest.innerText = `00`;
		secondstest2.innerText = `00`;
		minutestest.innerText = `00:`;
		minutestest2.innerText = `00:`;
		hourtest.innerText = ``
		hourtest2.innerText = ``
		intset = setInterval(getDate, 1000)
		intset2 = setInterval(counttime, 1000)
		theaudio.pause();
}
counttime = () =>{
	fss+=1;
	fs+=1;
	if(fs >= 60){
 		fs=0;   
		fm+=1;
	}
	if(fm >= 60){
		fm=0;
		fh+=1;
	}
	if(fs < 10){
	   secondstest.innerText = `0${fs}`
	   secondstest2.innerText = `0${fs}`
  	} else{
		secondstest.innerText = fs
		secondstest2.innerText = fs
	}
	if(fm < 10){
		minutestest.innerText = `0${fm}:`
		minutestest2.innerText = `0${fm}:`
	} else{
		minutestest.innerText = `${fm}:`
		minutestest2.innerText = `${fm}:`
	}
	if(fh < 10){
		hourtest.innerText = `0${fh}:`
		hourtest2.innerText = `0${fh}:`
	} else {
		hourtest.innerText = `${fh}:`
		hourtest2.innerText = `${fh}:`
	}
	if(fh == 0){
		hourtest.style.display = "none"
		hourtest2.style.display = "none"
	} else {
		hourtest.style.display = "inline"
		hourtest2.style.display = "inline"
	}	

}

getDate = () =>{
	
	if(callnet.innerText == "MTN-NG"){
		if (getb.mtnbal > 0.55){
			getb.mtnbal = (getb.mtnbal-0.12);
			localStorage.setItem("accountbalance", JSON.stringify(getb));
		} else if(getb.mtnbal <= 0.55){
			let myn = getbb.mtnbal
			let mynn = getb.mtnbal
			let tot = (myn - mynn).toFixed(2)
			let mynnf = (mynn).toFixed(2)
			clearInterval(intset);
			clearInterval(intset2);
			localStorage.setItem("accountbalance", JSON.stringify(getb));
			choosesim.style.display = "none"
			balancediv.style.display = "block";
			balancediv.innerHTML = `<div id="balance" class="bal bg-white rounded p-2">
				<span>Out of airtime. Last call was ${fss}sec at &#8358;${tot}. New Balance is &#8358;${mynnf}.
				</span><br>
				<button class="btn float-right" onclick="dismissbal()">Okay</button>
			</div>`
			fss = 0;
			cutbut2.style.display = "inline"
			callingdiv.style.display = "none"
			smallcalling.style.display = "block"
			dialinput.value = ""
			secondstest.innerText = 0;
			minutestest.innerText = 0;
			hourtest.innerText = 0
			secondstest.style.display = "none"
			minutestest.style.display = "none"
			hourtest.style.display = "none"
			secondstest2.innerText = 0;
			minutestest2.innerText = 0;
			hourtest2.innerText = 0;
			secondstest2.style.display = "none"
			minutestest2.style.display = "none"
			hourtest2.style.display = "none"
			callingdiv.style.display = "none"
			whole2.style.display = "none"
		}
	}else  if(callnet.innerText == "Airtel-NG"){
		if (getb.airtelbal > 0.99){
			getb.airtelbal = (getb.airtelbal-0.14);
			localStorage.setItem("accountbalance", JSON.stringify(getb));
		} else if(getb.airtelbal <= 0.99){
			let myn = getbb.airtelbal
			let mynn = getb.airtelbal
			let tot = (myn - mynn).toFixed(2)
			let mynnf = (mynn).toFixed(2)
			clearInterval(intset);
			clearInterval(intset2);
			localStorage.setItem("accountbalance", JSON.stringify(getb));
			choosesim.style.display = "none"
			balancediv.style.display = "block";
			balancediv.innerHTML = `<div id="balance" class="bal bg-white rounded p-2">
				<span>Out of airtime. Last call was ${fss}sec at &#8358;${tot}. New Balance is &#8358;${mynnf}.
				</span><br>
				<button class="btn float-right" onclick="dismissbal()">Okay</button>
			</div>`
			cutbut2.style.display = "inline"
			callingdiv.style.display = "none"
			smallcalling.style.display = "block"
			dialinput.value = ""
			secondstest.innerText = 0;
			minutestest.innerText = 0;
			hourtest.innerText = 0
			secondstest.style.display = "none"
			minutestest.style.display = "none"
			hourtest.style.display = "none"
			secondstest2.innerText = 0;
			minutestest2.innerText = 0;
			hourtest2.innerText = 0;
			secondstest2.style.display = "none"
			minutestest2.style.display = "none"
			hourtest2.style.display = "none"
			callingdiv.style.display = "none"
			whole2.style.display = "none"
		}
	} else  if(callnet.innerText == "Glo-NG"){
		if (getb.global > 0.99){
			getb.global = (getb.global-0.2);
			localStorage.setItem("accountbalance", JSON.stringify(getb));
		} else if(getb.global <= 0.99){
			let myn = getbb.global
			let mynn = getb.global
			let tot = (myn - mynn).toFixed(2)
			let mynnf = (mynn).toFixed(2)
			clearInterval(intset);
			clearInterval(intset2);
			localStorage.setItem("accountbalance", JSON.stringify(getb));
			choosesim.style.display = "none"
			balancediv.style.display = "block";
			balancediv.innerHTML = `<div id="balance" class="bal bg-white rounded p-2">
				<span>Out of airtime. Last call was ${fss}sec at &#8358;${tot}. New Balance is &#8358;${mynnf}.
				</span><br>
				<button class="btn float-right" onclick="dismissbal()">Okay</button>
			</div>`
			cutbut2.style.display = "inline"
			callingdiv.style.display = "none"
			smallcalling.style.display = "block"
			dialinput.value = ""
			secondstest.innerText = 0;
			minutestest.innerText = 0;
			hourtest.innerText = 0
			secondstest.style.display = "none"
			minutestest.style.display = "none"
			hourtest.style.display = "none"
			secondstest2.innerText = 0;
			minutestest2.innerText = 0;
			hourtest2.innerText = 0;
			secondstest2.style.display = "none"
			minutestest2.style.display = "none"
			hourtest2.style.display = "none"
			callingdiv.style.display = "none"
			whole2.style.display = "none"
		}
	} else  if(callnet.innerText == "9Mobile-NG"){
		if (getb.mobilebal > 0.99){
			getb.mobilebal = (getb.mobilebal-0.12);
			localStorage.setItem("accountbalance", JSON.stringify(getb));
		} else if(getb.mobilebal <= 0.99){
			let myn = getbb.mobilebal
			let mynn = getb.mobilebal
			let tot = (myn - mynn).toFixed(2)
			let mynnf = (mynn).toFixed(2)
			clearInterval(intset);
			clearInterval(intset2);
			localStorage.setItem("accountbalance", JSON.stringify(getb));
			choosesim.style.display = "none"
			balancediv.style.display = "block";
			balancediv.innerHTML = `<div id="balance" class="bal bg-white rounded p-2">
				<span>Out of airtime. Last call was ${fss}sec at &#8358;${tot}. New Balance is &#8358;${mynnf}.
				</span><br>
				<button class="btn float-right" onclick="dismissbal()">Okay</button>
			</div>`
			cutbut2.style.display = "inline"
			callingdiv.style.display = "none"
			smallcalling.style.display = "block"
			dialinput.value = ""
			secondstest.innerText = 0;
			minutestest.innerText = 0;
			hourtest.innerText = 0
			secondstest.style.display = "none"
			minutestest.style.display = "none"
			hourtest.style.display = "none"
			secondstest2.innerText = 0;
			minutestest2.innerText = 0;
			hourtest2.innerText = 0;
			secondstest2.style.display = "none"
			minutestest2.style.display = "none"
			hourtest2.style.display = "none"
			callingdiv.style.display = "none"
			whole2.style.display = "none"
		}
	}
}


endcall = () => {
	
	clearInterval(intset);
	clearInterval(intset2);
	cutbut2.style.display = "inline"
	callingdiv.style.display = "none"
	smallcalling.style.display = "block"
	dialinput.value = ""
	secondstest.innerText = `00`;
    minutestest.innerText = 0;
	hourtest.innerText = 0
	secondstest.style.display = "none"
	minutestest.style.display = "none"
	hourtest.style.display = "none"
	secondstest2.innerText = `00`;
    minutestest2.innerText = 0;
	hourtest2.innerText = 0
	secondstest2.style.display = "none"
	minutestest2.style.display = "none"
	hourtest2.style.display = "none"
	callingdiv.style.display = "none"
	whole2.style.display = "none"
	theaudio.pause();
	theaudio = new Audio("audio/Florida_Georgia_Line_Simple__(outdoorses.com)-1.mp3");
	willshow.style.display = "none"
	willshow2.style.display = "none"
	willshow3.style.display = "none"

	if(callnet.innerText == "MTN-NG" && fss>0){
		let myn = getbb.mtnbal
		let mynn = getb.mtnbal
		let tot = (myn - mynn).toFixed(2)
		let mynnf = (mynn).toFixed(2)
		balancediv.style.display = "block"
		balancediv.innerHTML = `<div id="balance" class="bal bg-white rounded p-2">
			<span> Last call was ${fss}sec at &#8358;${tot}. New Balance is &#8358;${mynnf}.
			</span><br>
			<button class="btn float-right" onclick="dismissbal()">Okay</button>
		</div>`
		fss = 0;
	} else if(callnet.innerText == "Airtel-NG" && fss>0){
		let myn = getbb.airtelbal
		let mynn = getb.airtelbal
		let tot = (myn - mynn).toFixed(2)
		let mynnf = (mynn).toFixed(2)
		balancediv.style.display = "block"
		balancediv.innerHTML = `<div id="balance" class="bal bg-white rounded p-2">
			<span> Last call was ${fss}sec at &#8358;${tot}. New Balance is &#8358;${mynnf}.
			</span><br>
			<button class="btn float-right" onclick="dismissbal()">Okay</button>
		</div>`
		fss = 0;
	} else if(callnet.innerText == "Glo-NG" && fss>0){
		let myn = getbb.global;
		let mynn = getb.global;
		let tot = (myn - mynn).toFixed(2)
		let mynnf = (mynn).toFixed(2)
		balancediv.style.display = "block"
		balancediv.innerHTML = `<div id="balance" class="bal bg-white rounded p-2">
			<span> Last call was ${fss}sec at &#8358;${tot}. New Balance is &#8358;${mynnf}.
			</span><br>
			<button class="btn float-right" onclick="dismissbal()">Okay</button>
		</div>`
		fss = 0;
	} else if(callnet.innerText == "9Mobile-NG" && fss>0){
		let myn = getbb.mobilebal
		let mynn = getb.mobilebal
		let tot = (myn - mynn).toFixed(2)
		let mynnf = (mynn).toFixed(2)
		balancediv.style.display = "block"
		balancediv.innerHTML = `<div id="balance" class="bal bg-white rounded p-2">
			<span> Last call was ${fss}sec at &#8358;${tot}. New Balance is &#8358;${mynnf}.
			</span><br>
			<button class="btn float-right" onclick="dismissbal()">Okay</button>
		</div>`
		fss = 0;
	}
}

