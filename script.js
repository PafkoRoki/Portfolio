        function toggleTheme() {
            const body = document.body;
            body.classList.toggle("dark-theme");
            body.classList.toggle("darkmode");
            localStorage.setItem("theme", body.classList.contains("dark-theme") ? "dark" : "light");
        }

        document.addEventListener("DOMContentLoaded", () => {
            if (localStorage.getItem("theme") === "dark") {
                document.body.classList.add("dark-theme");
                document.body.classList.add("darkmode");
            }
        });
		
		
		var swiper = new Swiper(".swiper", {
		  effect: "coverflow",
		  grabCursor: true,
		  centeredSlides: true,
		  slidesPerView: "auto",
		  coverflowEffect: {
			rotate: 0,
			stretch: 0,
			depth: 100,
			modifier: 2,
			slideShadows: true
		  },
		  spaceBetween: 60,
		  loop: true,
		  pagination: {
			el: ".swiper-pagination",
			clickable: true
		  }
		});		
		
		
//------------------------------------------------------------------------------------------------------------

		
        function toggleBar() {
            const bar = document.getElementById("slideUpBar");
            bar.classList.toggle("show");
        }
		
				
//------------------------------------------------------------------------------------------------------------
		

    function googleTranslateElementInit() {
        new google.translate.TranslateElement({pageLanguage: 'pl'}, 'google_translate_element');
    }