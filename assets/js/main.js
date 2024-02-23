const header = document.querySelector("header");

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll == 0) {
        header.style.marginTop = "10px";
        return;
    }

    if (scroll <= 10 ) {
        header.style.marginTop = `${10 - scroll}px`;
        return;
    }

    if(header.style.marginTop !== '0px')
        header.style.marginTop = '0px';
});