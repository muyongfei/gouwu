window.onload=function(){
	let sec = document.getElementsByTagName('section')[0];
	let ul=document.querySelector('.ul');
	let dian=document.querySelectorAll('.dian>li');
	let ex,w;
	ul.innerHTML += ul.innerHTML
	ul.style.width = ul.childElementCount * sec.offsetWidth + 'px';

	sec.addEventListener('touchstart', function(e){
		ul.style.transition = 'null';
		let event = e.changedTouches[0];
		ex = event.pageX;
		w = ul.offsetLeft;
		if(w / sec.offsetWidth == 0){
			ul.style.left = (-4*sec.offsetWidth) + 'px';
		}else if(w / sec.offsetWidth == -7){
			ul.style.left = (-3*sec.offsetWidth) + 'px'
		}
		w = ul.offsetLeft;
	})
		sec.addEventListener('touchmove',function(e){
			let event = e.changedTouches[0];
			let mx = event.pageX;
			ul.style.left = w + (mx - ex) + 'px';

		})
		sec.addEventListener('touchend',function(){
			let movs  = Math.round(ul.offsetLeft / sec.offsetWidth);
			ul.style.transition = 'all  .5s';
			ul.style.left = movs*sec.offsetWidth + 'px';
			dian.forEach(ele=>{
				ele.classList.remove('hot')
			})
			dian[(-movs%4)].classList.add('hot');
		})

}