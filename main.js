//  change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})


// show/hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // change icon 
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'fa-solid fa-plus') {
            icon.className = "fa-solid fa-minus";
        } else {
            icon.className = "fa-solid fa-plus";
        }
    })
})




// show/hide nav menu 
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");


menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})


// close nav menu 
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  // untuk login pop up
  function showLoginPopup() {
    var popup = document.getElementById("loginPopup");
    popup.style.display = "block";
    setTimeout(function() {
      popup.style.opacity = "1";
    }, 10);
  }

  // menyembunyikan login pop up
  function hideLoginPopup() {
    var popup = document.getElementById("loginPopup");
    popup.style.opacity = "0";
    setTimeout(function() {
      popup.style.display = "none";
    }, 300);
  }

  function login(event) {
    event.preventDefault(); // Prevent form submission
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // login validation
    if (username === "1234" && password === "1234") {
      hideLoginPopup();
      window.location.href ="E-LEARNING-UNISA/courses.html";
    } else {
      alert("Username atau Kata Sandi Salah.");
    }
  }
closeBtn.addEventListener('click', closeNav);