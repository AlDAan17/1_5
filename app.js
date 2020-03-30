if (document.body.clientWidth < 768) {
    let mySwiper_technics = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',

        }
    });
}

function showMore() {
    const viewsonic = document.getElementById("slide-viewsonic");
    const sony = document.getElementById("slide-sony");
    const lenovo = document.getElementById("slide-lenovo");
    const samsung = document.getElementById("slide-samsung");
    const apple = document.getElementById("slide-apple");
    // const btnMore = document.getElementById("btn-more");
    const btnText = document.getElementById("swiper-showmore");
    const slide = document.querySelector(".swiper-slide:nth-child(7)");
    const btnImg = document.querySelector(".swiper-more-button");
    const btnMore = document.querySelector("#btn-more");
    // const slide = document.querySelector('.swiper-slide');

    // btnMore.addEventListener('click', ()=>{
    //     console.log(111);
    // })

    // btnMore.addEventListener('click', ()=> btnText.classList.add('slide-open'));
    // btnMore.forEach(el=> el.addEventListener('click', ()=>{
    //     slide.classList.add('slide-open');
    // }));

    btnMore.addEventListener('click', function () {
        if(slide.classList.contains('slide-open')){
            slide.classList.remove('slide-open');
            btnText.textContent = "Показать все";
            btnImg.style.transform = "rotate(0deg)";
        }else{
            slide.classList.add('slide-open');
            btnText.textContent = "Скрыть";
            btnImg.style.transform = "rotate(180deg)";
        }
    });

    // if (viewsonic.style.display === "none"){
    //     viewsonic.style.display = "flex";
    // }else {
    //     viewsonic.style.display = "none";
    //     btnShowMore.innerHTML = "Read less";
    // }
}
