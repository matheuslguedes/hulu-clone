import categories from './../jsonMovies.js'

export default function initModalCategories(){
    const cards = Array.from(document.querySelectorAll('.produto-card'))
    const modalCategories = document.querySelector('.modal-categories')
    const btnCloseModalCategories = document.querySelector('.modal-categories__close')
    const modalCategoriesBg = document.querySelector('.modal-categories__container')
    const modalCategoriesSubtitle = document.querySelector('.modal-categories__subtitle')
    const modalCategoriestitle = document.querySelector('.modal-categories__title')
    const modalCategoriesDescription = document.querySelector('.modal-categories__description')

    cards.map((card, index)=>{
        card.addEventListener('click', ()=>{
            modalCategories.classList.add('active')
            modalCategoriesBg.style.backgroundImage = `url(${categories[index].img})`
            modalCategoriesSubtitle.innerHTML = categories[index].title;
            modalCategoriestitle.innerHTML = categories[index].title;
            modalCategoriesDescription.innerHTML = categories[index].description;
            btnCloseModalCategories.addEventListener('click', ()=> modalCategories.classList.remove('active'))
        })
    })
}