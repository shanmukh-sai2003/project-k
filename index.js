const menuButton = document.querySelector(".menu");
const menuBox = document.querySelector(".menuBox");

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('menuClicked');
    menuBox.classList.toggle('menuBoxToggle');
});
