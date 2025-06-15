$(function () {
   $('.header__nav-btn, .overlay, .header__ item a').on('click', function (e) {
      e.preventDefault()
      $('.header__top-row').toggleClass('header__top-row--mobile')
      $('.nav-icon').toggleClass('nav-icon--active')
      $('body').toggleClass('hidden-y')
   })
})

mask('[data-tel-input]');

const phoneInputs = document.querySelectorAll('[data-tel-input]');

phoneInputs.forEach((input)=>{
	input.addEventListener('input', ()=>{
		if (input.value == '+') input.value = '';
	})
	input.addEventListener('blur', ()=>{
		if (input.value == '+') input.value = '';
	})
});