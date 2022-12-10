
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


