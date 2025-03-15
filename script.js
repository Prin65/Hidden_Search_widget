const searchWidget = document.querySelector('.search-widget')
const searchBtn = document.querySelector('.search-btn')
const searchText = document.querySelector('.search-text')

searchBtn.addEventListener('click', () => {
    searchWidget.classList.toggle('active')
    // searchText.focus();
    // searchBtn.classList.toggle('active');
    // searchBtn.style.width="289px";
});