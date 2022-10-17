"use strict";


let name = document.getElementById('name');
let time = document.getElementById("time");
let optionBtn = document.getElementById("optionBtn");
let optionBtnLi = optionBtn.getElementsByTagName('li');

let voluimSet = document.getElementById("voluimSet");

let myAudio = document.getElementById("myAudio");


let one = 0;
let two = 0;
let three = 0;
let four = 0;
let five = 0;
let six = 0;



for (let i = 0; i < optionBtnLi.length; i++){
	optionBtnLi[i].addEventListener("click", function(){

		if (i == 0) {
			one = one + 1;
			if (one == 1) {
				one = one + 1;
				optionBtnLi[i].style.background = "#fff";
				optionBtnLi[i].style.color = "#333";
			}else if (one == 3) {
				one = 0;
				optionBtnLi[i].style.background = "none";
				optionBtnLi[i].style.color = "#fff";
			}
		} else if (i == 1) {
			two = two + 1;
			if (two == 1) {
				two = two + 1;
				optionBtnLi[i].style.background = "#fff";
				optionBtnLi[i].style.color = "#333";
			}else if (two == 3) {
				two = 0;
				optionBtnLi[i].style.background = "none";
				optionBtnLi[i].style.color = "#fff";
			}
		} else if (i == 2) {
			three = three + 1;
			if (three == 1) {
				three = three + 1;
				optionBtnLi[i].style.background = "#fff";
				optionBtnLi[i].style.color = "#333";
				myAudio.volume = 1.0;
			}else if (three == 3) {
				three = 0;
				optionBtnLi[i].style.background = "none";
				optionBtnLi[i].style.color = "#fff";
				myAudio.volume = 0.4;
			}
		} else if (i == 3) {
			four = four + 1;
			if (four == 1) {
				four = four + 1;
				optionBtnLi[i].style.background = "#fff";
				optionBtnLi[i].style.color = "#333";
			}else if (four == 3) {
				four = 0;
				optionBtnLi[i].style.background = "none";
				optionBtnLi[i].style.color = "#fff";
			}
		} else if (i == 4) {
			five = five + 1;
			if (five == 1) {
				five = five + 1;
				optionBtnLi[i].style.background = "#fff";
				optionBtnLi[i].style.color = "#333";
			}else if (five == 3) {
				five = 0;
				optionBtnLi[i].style.background = "none";
				optionBtnLi[i].style.color = "#fff";
			}
		} else if (i == 5) {
			six = six + 1;
			if (six == 1) {
				six = six + 1;
				optionBtnLi[i].style.background = "#fff";
				optionBtnLi[i].style.color = "#333";
			}else if (six == 3) {
				six = 0;
				optionBtnLi[i].style.background = "none";
				optionBtnLi[i].style.color = "#fff";
			}
		}

	});
}



let bgUpload = document.getElementById("bgUpload");
let inputBGimages = document.getElementById("inputBGimages");
let uploadWorning = document.getElementById("uploadWorning");
let submitInfo = document.getElementById("submitInfo");

let nameInput = document.getElementById("nameInput");
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

let phoneScreenDiv = document.getElementById("phoneScreenDiv");
let infoInputDiv = document.getElementById("infoInputDiv");
let bgImages = document.getElementById("bgImages");

let endColl = document.getElementById("endColl");

function collTime(){
	let hourVlu = Number(hour.value);
	let minuteVlu = Number(minute.value);
	let secondVlu = Number(second.value);

	let miliSecond = (hourVlu * 60 * 60 * 1000) + (minuteVlu * 60 * 1000) + (secondVlu * 1000);

	setInterval(function(){
		miliSecond = parseInt(miliSecond);
		miliSecond = miliSecond + 1000;

		let secondCount = Math.floor(miliSecond / 1000);
		let lastSecond = Math.floor(secondCount % 60);
		let minuteCount = Math.floor(secondCount / 60);
		let lastMinute = Math.floor(minuteCount % 60);
		let hourCount = Math.floor(minuteCount / 60);

		if (lastSecond < 10) {
			lastSecond = "0"+lastSecond;
		}  
		if (lastMinute < 10) {
			lastMinute = "0"+lastMinute;
		}

		if (hourCount == 0) {
			time.innerHTML = lastMinute + ":" + lastSecond;
		}
		if (hourCount != 0 && minuteCount != 0) {
			time.innerHTML = hourCount + ":" + lastMinute + ":" + lastSecond;
		}

	},1000);
};


bgUpload.addEventListener("click", function(){
	inputBGimages.click();
	inputBGimages.addEventListener("input", function(){
		let fileExt = inputBGimages.value.slice(-3, inputBGimages.value.length);
		if (fileExt == "jpg" || fileExt == "png") {
			uploadWorning.innerHTML = "Upload Complite!";
			uploadWorning.style.color = "green";
		} else {
			uploadWorning.innerHTML = "Upload Fald!";
			uploadWorning.style.color = "red";
		}

	});
});

nameInput.addEventListener("input", function(){
	let nameVlu = nameInput.value;
	if (nameVlu.length >= 1) {
		nameInput.style.border = "1px solid green";
	} else {
		nameInput.style.border = "1px solid red";
	}
})



inputBGimages.addEventListener("input", function(){
	let url = URL.createObjectURL(this.files[0]);
	bgImages.src = url;
})



submitInfo.addEventListener("click", function(){

	let fileExt = inputBGimages.value.slice(-3, inputBGimages.value.length);


	if (nameInput.value.length >= 1 && fileExt == "jpg" || fileExt == "png") {
		if (nameInput.value.length >= 1) {
			if (fileExt == "jpg" || fileExt == "png") {
				phoneScreenDiv.style.display = "block";
				infoInputDiv.style.display = "none";
				nameShow(nameInput.value);
				collTime();
				myAudio.play();
				myAudio.loop = true;
				myAudio.volume = 0.4;
			} else {
				uploadWorning.innerHTML = "Upload Fald!";
				uploadWorning.style.color = "red";
			}
		} else {
			nameInput.style.border = "1px solid red";
		}
	} else {
		uploadWorning.innerHTML = "Upload Fald!";
		uploadWorning.style.color = "red";
		nameInput.style.border = "1px solid red";
	}


});


function nameShow(nameValue){
	if (nameValue.length > 18) {
		let nameValue15 = nameValue.slice(0, 18);
		name.innerHTML = nameValue15 + "...";
	} else {
		name.innerHTML = nameValue;
	}
}

endColl.addEventListener("click", function(){
	location.reload();
});