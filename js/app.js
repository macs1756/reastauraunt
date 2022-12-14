
function isWebp(){
	function testWebp(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function (){
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";

	}
	testWebp(function (support){
		let className = support = true ? "webp" : "no-webp";
		document.documentElement.classList.add(className);
	})
}
	
isWebp();


$(document).ready(()=>{

	$(window).scroll(()=>{
		if(window.scrollY > 50){
			$(".header").addClass("active");	
		}else{
			$(".header").removeClass("active");
		}
	});

	

	$(".header__burger").click(()=>{
		$("body").toggleClass('active');
		$(".header").addClass("active");
		$(".header__burger").toggleClass("header__burger_close");
		$(".header__burger-body").toggleClass("active");
	});
	
});





function x4(){
	const awesomeFunction = () => {
		return new Promise (resolve => {
			 document.querySelector(".main-dishes__leaf1").classList.add("active");
			 document.querySelector(".main-dishes__leaf2").classList.add("active");
			 document.querySelector(".main-dishes__leaf3").classList.add("active");
			 document.querySelector(".main-dishes__leaf4").classList.add("active");
			 resolve();
		})
	}
	
	const printFunction = () => {
	setTimeout(()=>{
		document.querySelector(".main-dishes__leaf1").classList.remove("active");
		document.querySelector(".main-dishes__leaf2").classList.remove("active");
		document.querySelector(".main-dishes__leaf3").classList.remove("active");
		document.querySelector(".main-dishes__leaf4").classList.remove("active");
	 },4000);
	

	}
	awesomeFunction().then(printFunction);
}

x4();
setInterval(x4, 4100);


const swiper = new Swiper('.swiper', {
	
	loop: true,
	pagination: {
		el: ".pg",
		clickable: true
	},
	breakpoints: {
		0: {
			spaceBetween: 30,
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 1.6,
			spaceBetween: 115,
		}

	}
 });
 

const formInput = document.getElementById('form-input');
const formBtn = document.getElementById('form-btn');
let reg = /^[a-zA-Z0-9_]+@[a-z0-9-]+\.[a-z]{2,6}$/;

formBtn.addEventListener('click', ()=>{
	if(reg.test(formInput.value)){
		alert('sent to the base');
	}else{
		formInput.style.color = "red";
	}
});

formInput.addEventListener('input', ()=>{
	formInput.style.color = "#000";
})
