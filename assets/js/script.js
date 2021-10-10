/* ===== SHOW MENU ===== */
const navMenu = document.getElementById('nav-menu');
const closeNav = document.getElementById('nav-close');
const toggleNav = document.getElementById('nav-toggle');

// Show Menu
toggleNav.addEventListener('click', ()=>{
	navMenu.classList.toggle('show-menu')
});

// Hide Menu
closeNav.addEventListener('click', ()=>{
	navMenu.classList.remove('show-menu')
});
// ===== end show menu ===== //

// ===== REMOVE MOBILE MENU ===== //
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
	navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction));
// ===== end remove mobile menu ===== //

// ===== SCROLL SECTINOS ACTIVE LINK ===== //
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight
		const sectionTop = current.offsetTop - 50;
		sectionId = current.getAttribute('id')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
		}else{
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
		}
	})
}
window.addEventListener('scroll', scrollActive);
// ===== end scroll sections active link ===== //

// ===== CHANGE BACKGROUND HEADER ===== //
function scrollHeader(){
	const nav = document.getElementById('header');

	if (this.scrollY >= 200) {
		nav.classList.add('scroll-header');
	}else{
		nav.classList.remove('scroll-header');
	}
}
window.addEventListener('scroll', scrollHeader);
// ===== end change background header ===== //

/* ===== COUNTDOWN TIMER ===== */
const countdownDate = new Date("December 25, 2022 10:00:00").getTime();

const timerFunction = setInterval(() => {
	const currentDate = new Date().getTime();
	const finalTime = countdownDate - currentDate;

	if(finalTime > 0){
		const days = Math.floor(finalTime / (1000*60*60*24));
		const hours = Math.floor((finalTime % (1000*60*60*24)) / (1000*60*60));
		const minutes = Math.floor((finalTime % (1000*60*60)) / (1000*60));
		const seconds = Math.floor((finalTime % (1000*60)) / (1000));

		document.getElementById('days').innerHTML = days;
		document.getElementById('hours').innerHTML = hours;
		document.getElementById('minutes').innerHTML = minutes;
		document.getElementById('seconds').innerHTML = seconds;
	}else{
		clearInterval(timerFunction);
		document.getElementById("timer-stop").innerHTML = "The Countdown is Over!";
   }
}, 1000);
// ===== end countdown timer ===== //

// ===== MESSAGE BOX via WhatsApp ===== //
const messageForm = document.querySelector('.message__form');

$(document).on('click','#send-message', function(){
	var inputMessage = document.getElementById('message-name');

	// WhatsApp Settings
	var walink = 'https://web.whatsapp.com/send',
		phone = '6287896889778',
		walink2 = '*Wedding Message Box* ',
		text_yes = 'Terimakasih!',
		text_no = 'Isi semua form lalu klik Kirim.';

	// Smartphone Support
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
			var walink = 'whatsapp://send';
		}

	if("" != inputMessage.value){
		// Call Input Form
		var input_name = $("#message-name").val(),
			input_textarea = $("#message-textarea").val(),
			input_url = $("#message-url").val();

		// Final WhatsApp URL
		var messageWhatsapp = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' +
			'*Nama* : ' + input_name + '%0A' +
			'*Pesan* : ' + input_textarea + '%0A' +
			'*Link* : ' + input_url + '%0A';

		// WhatsApp Window Open 
		window.open(messageWhatsapp,'_blank');
		document.getElementById("message-respon").innerHTML = '<div class="yes"><i class="bx bx-check"></i>'+text_yes+ '</div>';

		// reset form
		messageForm.reset();
	}else{
		document.getElementById("message-respon").innerHTML = '<div class="no"><i class="bx bx-x"></i>'+text_no+'</div>';
	}
});

document.getElementById('message-url').value = "https://www.google.com/";
// ===== end message box via whatsapp ===== //

// ===== BACKSOUND ===== //
const backsound = document.getElementById('song');
const backsoundIcon = document.getElementById('backsound-icon');

backsoundIcon.onclick = ()=>{
	if(backsound.paused){
		backsound.play();
		backsoundIcon.src = "assets/img/pause.png";
	}else{
		backsound.pause();
		backsoundIcon.src = "assets/img/play.png";
	}
}
// ===== end backsound ===== //

/* ===== SHOW SCROLL TOP ====== */
function scrollTop(){
	const scrollTop = document.getElementById('scroll-top');

	if (this.scrollY >= 560) {
		scrollTop.classList.add('show-scroll')
	} else{
		scrollTop.classList.remove('show-scroll')
	}
}
window.addEventListener('scroll', scrollTop);
// ===== end show scroll top ===== //

// ===== POP-UP ===== //
const popup = document.getElementById('popup');
const popupBtn = document.getElementById('popup-btn');

popupBtn.addEventListener('click', ()=>{
	document.body.style.overflow = 'auto';
	popup.style.display = 'none';
});
// ===== end pop up ===== //

// ===== AOS ANIMATION ===== //
// 1. popup -> .popup__content

// 2. home -> .home__content

// 3. couple -> .bismillah, .couple__greeting, .couple__greeting2, .couple__box, .couple__img

// 4. class css -> .section-title
const sectionTitle = document.querySelectorAll('.section-title');
sectionTitle.forEach((n, i) => {
	n.dataset.aos = 'fade-down';
});

// 5. countdown timer -> .timer__subtitle, .timer__box
const timerBox = document.querySelectorAll('.timer__box');
timerBox.forEach((n, i) => {
	n.dataset.aos = 'flip-left';
	n.dataset.aosDelay = i * 100;
});

// 6. gallery -> .gallery__box
const galleryBox = document.querySelectorAll('.gallery__box');
galleryBox.forEach((img, i) => {
	img.dataset.aos = 'zoom-in-down';
	img.dataset.aosDelay = i * 100;
});

// 7. quotes -> .quotes__img, .quotes__text

// 8. prokes -> .prokes__box
const prokesBox = document.querySelectorAll('.prokes__box');
prokesBox.forEach((n, i) => {
	n.dataset.aos = 'flip-right';
	n.dataset.aosDelay = i * 100;
});

// 9. footer -> .footer__box
const footerBox = document.querySelectorAll('.footer__box');
footerBox.forEach((n, i) => {
	n.dataset.aos = 'fade-down';
	n.dataset.aosDelay = i * 100;
});


AOS.init({
	duration: 1500,
	once: false,  
});
// ===== end aos animation ===== //