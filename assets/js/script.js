/*
document.querySelectorAll('.scroller').forEach((element)=>{
    element.addEventListener('click', (event)=>{
        event.preventDefault();
        const target = document.querySelector(element.getAttribute("href"));
        console.log(target);
        window.scrollTo(0, target.offsetTop);
    });
})*/
$('.scroller').on('click', (event)=>{
    event.preventDefault();
    const element = event.target;
    const target = $(element).attr('href');
    window.scrollTo(0, target.offsetTop);
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 1000);
});