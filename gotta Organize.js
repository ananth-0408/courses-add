//line 126 err

var burger = document.getElementsByClassName("burger")[0];
var navList = document.getElementById("navList");
var navLinks = document.getElementsByClassName("nav-links")[0];
var link = document.querySelectorAll("nav-links");
var floatie = document.getElementById("floatie");
let err = document.querySelector('.myErr');
var body = document.querySelector('.body')


window.addEventListener("load", function () {
	var loader = document.getElementsByClassName("spinnnnnn")[0];
    loader.className += " hidden";
	
	loader.onanimationend = thisFn;
});
function thisFn() {
	var page = document.getElementsByClassName('page')[0];
	page.style.animation = "loadeeee 1s forwards";
}
console.log(thisFn);


burger.addEventListener("click", menuAppear);

function menuAppear() {
	if(navList.classList.value === "fa") {
	navList.style.display = "none";
	navList.style.opacity = "";
	navList.style.transition = "all 0.5s ease";
	navList.style.display = "";
	navList.style.animationName = "fadeOut";
	navList.style.animationDuration = "0.5s";
	} else {
		navList.style.display = "block";
	navList.style.opacity = "1";
	navList.style.transition = "all 0.5s ease-in";
	navList.style.display = "flex";
	navList.style.animationName = "navLinkFade";
	navList.style.animationDuration = "0.5s";
	}
	
	navList.classList.toggle("fa");
	
	link.forEach((link, index) => {
		if(link.style.animation) {
			link.style.animation = " ";
			} else {
				link.style.animation = `navLinkFadeIn 0.5s ease forwards ${index/ 7 + 1.5}s `;
}
});

burger.classList.toggle("toggle");

}


let addBtn = document.getElementById('addBtn');

window.onscroll = addAppear;

function addAppear() {
	setTimeout(() => {
	addBtn.style.display = "block";
	addBtn.style.opacity = "1";
	addBtn.style.animation = "btnFadeIn 1s forwards";
}, 500);
}

//adding cards/courses

let btnSuccess = document.getElementsByClassName('btn-success')[0];
btnSuccess.onclick = addCard;

function addCard() {
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const input4 = document.getElementById('input4');


let flexoo = document.getElementsByClassName('flexoo')[0];

let element1 = {
	title: input2.value,
	img: input1.value,
	description: input3.value,
	price: input4.value
};
//creating main floatie
let floatie = document.createElement('div');
floatie.classList.add('floatie');
floatie.style.marginLeft = "20px";
//creating floatie content
let floatieContent = document.createElement('div');
floatieContent.classList.add('floatieContent');
//adding my content
let jsImg = document.createElement('img');
jsImg.classList.add('jsImg');
jsImg.src = element1.img;
let br = document.createElement('br');
let hr = document.createElement('hr');
let h4Js = document.createElement('h4');
h4Js.innerText = element1.title;
h4Js.classList.add('h4Js');
let jsJade = document.createElement('div');
jsJade.classList.add('jsJade');
let jsP = document.createElement('p');
jsP.classList.add('jsP');
jsP.innerText = element1.description;
let br1 = document.createElement('br');
let br2 = document.createElement('br');
let br3 = document.createElement('br');
let br4 = document.createElement('br');
let hr1 = document.createElement('hr');
let footerJs = document.createElement('footer');
footerJs.classList.add('footerJs');
footerJs.innerText = "$" + element1.price;
let btnPrimary = document.createElement('button');
btnPrimary.classList.add('btn');
btnPrimary.classList.add('btn-primary');
btnPrimary.style.marginLeft = "170px";
btnPrimary.innerText = "Enroll";
//appending
/*
if(h4Js.contains('die')) {
	alert('Your title mustn\'t be offensive!');
	return;
}*/


footerJs.appendChild(btnPrimary);
jsJade.appendChild(jsP);
jsJade.appendChild(br1);
jsJade.appendChild(br2);
jsJade.appendChild(br3);
jsJade.appendChild(br4);
jsJade.appendChild(hr1);	
jsJade.appendChild(footerJs);

floatieContent.appendChild(jsImg);
floatieContent.appendChild(br);
floatieContent.appendChild(hr);
floatieContent.appendChild(h4Js);
floatieContent.appendChild(jsJade);
floatie.appendChild(floatieContent);
flexoo.appendChild(floatie);

//clear all inputs
input1.value = "";
input2.value = "";
input3.value = "";
input4.value = "";
}

var h4 = document.querySelector('.h4Js');
var h41 = document.querySelector('.h4Js1');
var h42 = document.querySelector('.h4Js2');
var h43 = document.querySelector('.h4Js3');
var h44 = document.querySelector('.h4Js4');
var h45 = document.querySelector('.h4Js5');
var padaMaree = document.querySelector('.padaMaree');
var yeye = document.querySelector('#yeye');
var val = yeye.value;

padaMaree.onclick = filter;

function filter() {
	if (h4.innerText == yeye.value) {
		flexoo = document.getElementsByClassName('flexoo')[0];
		let floatie = document.querySelector('.floatie');
		confirm("Couldn't make a proper search bar sorry");
		console.log('Is it one sided');
	} else {
			document.getElementById('addBtn');
			addBtn.style.display = "none";
			let page = document.getElementsByClassName('page')[0];
			page.style.opacity = "0";
			page.style.display = "none";
			let meDiv = document.createElement('div');
			meDiv.classList.add('meDiv');
			meDiv.style.display = "block";
			meDiv.style.opacity = "1";
			meDiv.style.animation = "yolo 1s forwards";
			let me = document.createElement('h1');
			me.innerHTML = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrrnv5deUKvszrrcW4i_c2xZFJjjke0uOiZg&usqp=CAU" class="sed" alt="Err404">\ &nbsp; Looks like there are not any great matches \ for your search <br> <br> <button class="btn btn-secondary closeDupe"> Close </button> &nbsp; <button class="btn btn-primary closeDupeTwo"> Search for something else </button><br><br><br><br><br>';
			me.classList.add('mmmmeeee');
			err.appendChild(meDiv);
			meDiv.appendChild(me);
			let closeDupe = document.getElementsByClassName('closeDupe')[0];
			let closeDupeTwo = document.getElementsByClassName('closeDupeTwo')[0];
			closeDupe.onclick = anotherFn;
			closeDupeTwo.onclick = anotherFn;
function anotherFn() {
	closeDupe.currentTime = 0;
	meDiv = document.getElementsByClassName('meDiv')[0];
	meDiv.style.display = "none";
	meDiv.style.opacity = "0";
	page.style.opacity = "1";
	page.style.display = "block";
	meDiv.style.animation = "searchAn 1s forwards";
	page.style.animation = "popMe 1s forwards";
}
}
}



