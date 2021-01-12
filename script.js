let topArrow = document.querySelector('#topArrow');

topArrow.onclick = () => {
    window.scrollTo(pageXOffset, 0);
};

window.addEventListener('scroll', function () {
    topArrow.hidden = (pageYOffset < document.documentElement.clientHeight);
});