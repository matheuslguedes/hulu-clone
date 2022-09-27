export default function initModalChannels(){
    const btnOpenModalChannels = document.querySelector('.btn__channels-area')
    const modalChannels = document.querySelector('.modal-channels')
    const btnCloseModalChannels = document.querySelector('.modal-channels__close')

    btnOpenModalChannels.addEventListener('click', (e)=>{
        e.preventDefault()
        modalChannels.classList.add('active')

        btnCloseModalChannels.addEventListener('click', ()=>{
            modalChannels.classList.remove('active')
        })
    })
}