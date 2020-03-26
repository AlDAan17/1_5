if (document.body.clientWidth < 768) {
    let mySwiper_technics = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            slidesPerView: 'auto',
        }
    });
}

function showMore() {
    let viewsonic = document.getElementById("slide-viewsonic");
    let sony = document.getElementById("slide-sony");
    let lenovo = document.getElementById("slide-lenovo");
    let samsung = document.getElementById("slide-samsung");
    let apple = document.getElementById("slide-apple");
    let btnMore = document.getElementById("btn-more");
    let btnShowMore = document.getElementById("swiper-shwomore");

    if (viewsonic.style.display === "none"){
        viewsonic.style.display = "flex";
    }else {
        viewsonic.style.display = "flex";
        btnShowMore.innerHTML = "Read less";
    }
}
