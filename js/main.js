(function () {

			var sub_links = [
				document.querySelector('a[href="#header"]'),
				document.querySelector('a[href="#intro"]'),
				document.querySelector('a[href="#about"]'),
				document.querySelector('a[href="#footer"]')
			];

			var sub_sections = [
				document.getElementById('header'),
				document.getElementById('intro'),
				document.getElementById('about'),
				document.getElementById('footer')
			];

			document.addEventListener('scroll', function (event) {
				for(var i = 0; i < sub_links.length; i++) {
					var sectionTop = sub_sections[i].offsetTop;
					var nextSectionTop = (sub_sections[i+1] == undefined ? 100000 : sub_sections[i+1].offsetTop);
					
					if(document.body.scrollTop >= sectionTop && document.body.scrollTop < nextSectionTop) {

						if(document.body.scrollTop >= (sectionTop + sub_sections[i].offsetHeight / 5)) {
							if(sub_sections[i].classList.contains('content--is-ative')) {
								sub_sections[i].classList.remove('content--is-ative');
							}
							if(!sub_sections[i+1].classList.contains('content--is-ative')){
								sub_sections[i+1].classList.add('content--is-ative');
							}
						} else { //remove
							if(!sub_sections[i].classList.contains('content--is-ative')) {
								sub_sections[i].classList.add('content--is-ative');
							}
							if(sub_sections[i+1].classList.contains('content--is-ative')) {
								sub_sections[i+1].classList.remove('content--is-ative');
							}
						}
					}
				}
			});
})();