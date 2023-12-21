//Toogle class active
const navbarNav = document.querySelector(".navbar-nav");
//ketika hamburger di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
// Shopping Cart untuk toogle
const shopCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = () => {
  shopCart.classList.toggle("active");
};

// Button search trouble shooting click
const searchForm = document.querySelector(".form-search");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Shoping cart trouble shooting click
const shppingCart = document.querySelector(".shopping-cart");
const cartItem = document.querySelector("#cart-item");

document.querySelector("#shopping-cart-button").onclick = (e) => {
  shppingCart.classList.toggle("active");
  if (cartItem !== null) {
    cartItem.focus();
  }
  // cartItem.focus();
  e.preventDefault();
};

//klik di luar angkasa untuk menghilangkan sidebar
const hamburger = document.querySelector("#hamburger-menu");
const searchButton = document.querySelector("#search-button");
const shoppingButton = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  // js menu bar
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  // js search button
  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  //js shopping button
  if (!shoppingButton.contains(e.target) && !shppingCart.contains(e.target)) {
    shppingCart.classList.remove("active");
  }
});

//slide show background hero
const images = document.querySelectorAll(".background-slideshow img");
let currentImg = 0;
let interval;

function startSlideshow() {
  interval = setInterval(() => {
    images[currentImg].classList.remove("active");
    currentImg = (currentImg + 1) % images.length;
    images[currentImg].classList.add("active");
  }, 5000);
}

startSlideshow();

//typing effect for heading
function typeEffect(element, speed) {
  const text = element.innerHTML;
  element.innerHTML = "";

  let i = 0;
  const timer = setInterval(function () {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}
//speed for effect typing on header
const textElement = document.querySelector("#text");
const speed = 30;
typeEffect(textElement, speed);

//Effek untuk content about
/**DOM untuk membuat content muncul dari samping */
document.addEventListener("DOMContentLoaded", function () {
  var aboutSection = document.querySelector("#about");
  var aboutContent = aboutSection.querySelector(".about-content");

  function isElementInViewPort(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top + rect.height * 0.1 >= 0 &&
      rect.left + rect.width * 0.1 >= 0 &&
      rect.bottom - rect.height * 0.1 <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right - rect.width * 0.1 <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function handleScroll() {
    if (isElementInViewPort(aboutContent)) {
      aboutContent.classList.add("show"); //tampilkan content jika berda di bagian brand
    } else {
      aboutContent.classList.remove("show"); //hilangkan content jika berda di bagian brand
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();
});

/**============================================================================
 * EFEK UNTUK SCROLL NAVBAR KETIKA DITEKAN
 * ============================================================================
 */
// // Smoth scrolling untuk pengarah bagian
$(document).ready(function () {
  $("a[href^=\\#]").on("click", function (event) {
    var target = $(this.getAttribute("href"));
    if (target.length) {
      event.preventDefault();
      $("html, body").stop().animate(
        {
          scrollTop: target.offset().top,
        },
        900
      );
    }
  });
});

/** =====================================================================
 * MODAL DIBUAT BERDASARKAN REFERENSI DARI PROGRAMMER UNPAS
 * ======================================================================
 */
// Modal box detail product
// const itemDetailModal = document.querySelector("#myModal");
// const itemDetailButtons = document.querySelectorAll(".item-detail-button");

// itemDetailButtons.forEach((btn) => {
//   btn.onclick = (e) => {
//     itemDetailModal.style.display = "flex";
//     e.preventDefault();
//     console.log(btn);
//   };
// });

// klik tombol close modal
// document.querySelector(".modal .close-icon").onclick = (e) => {
//   itemDetailModal.style.display = "none";
//   e.preventDefault();
// };

// klik diluar modal maka modal akan tertutup
// window.onclick = (e) => {
//   if (e.target === itemDetailModal) {
//     itemDetailModal.style.display = "none";
//   }
// };

/** =====================================================================
 * MODAL DIBUAT BERDASARKAN REFERENSI DARI GOOGLE
 * ======================================================================
 */
// Show modal box if user click the button eye on shopping cart
// Take the modal element
// var modal = document.getElementById("myModal");

// //Button close modal
// var closeBtn = document.getElementsByClassName("close-icon")[0];
// closeBtn.onclick = function (e) {
//   modal.style.display = "none";
//   e.preventDefault(); //hold the same view if user click the button
// };

// //when the user click outside the modal, close the modal
// window.onclick = function (e) {
//   if (event.target === modal) {
//     modal.style.display = "none";
//   }
//   e.preventDefault(); //hold the same view if user click the button
// };

// //function for show the modal content
// function showModal() {
//   modal.style.display = "flex";
// }
