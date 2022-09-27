export default function initModalLogin(){
  //variables
  const btnOpenModalLogin = document.querySelector('.btn-login')
  const modalLogin = document.querySelector('.modal-login')
  const btnCloseModalLogin = document.querySelector('.modal-login__close')

  //functions 
  function openModalLogin(){
    modalLogin.classList.add('active')   
  }
  function closeModalLogin(){
    modalLogin.classList.remove('active')
  }
  //events
  btnOpenModalLogin.addEventListener('click', openModalLogin)
  btnCloseModalLogin.addEventListener('click', closeModalLogin)
}