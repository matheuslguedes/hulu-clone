export default function initModalIncluded(){
    const btnOpenModalncluded = document.querySelector('.btnincluded')
    const modalIncluded = document.querySelector('.modal-included')
    const btnCloseModalIncluded = document.querySelector('.modal-included__close')
      //functions 
    function openModalIncluded(){
      modalIncluded.classList.add('active')   
    }
    function closeModalIncluded(){
      modalIncluded.classList.remove('active')
    }
    //events
    btnOpenModalncluded.addEventListener('click', openModalIncluded)
    btnCloseModalIncluded.addEventListener('click', closeModalIncluded)
}