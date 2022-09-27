export default function initmodalAddtional (){
    const modalAdditional = document.querySelector('.modal-additional')
    const btnOpenModalAdditional = document.querySelector('.vantagens__additionallink')
    const btnCloseModalAdditional = document.querySelector('.modal-additional__close')

    function openModal(e){
        e.preventDefault();
        modalAdditional.classList.add('active')
    }
    function closeModal(){
        modalAdditional.classList.remove('active')
    }
    btnOpenModalAdditional.addEventListener('click', openModal)
    btnCloseModalAdditional.addEventListener('click', closeModal)
}