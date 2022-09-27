import tabNav from "./../tabNavJson.js"

export default function initTabNav(){
    window.addEventListener('load', ()=>{
        document.querySelector('.tab__link.active').click();
    })
    const _htmlElements = {
        section: document.querySelector('#tab__container'),
        tabLinks: document.querySelectorAll('.tab__link'),
        title: document.querySelector('.tab__content h3'),
        description: document.querySelector('.tab__content p'),
        tabContent: document.querySelector('.tab__content-logos')
    }
    function updateContent(e){
        _htmlElements.tabLinks.forEach((tablink)=>{
            tablink.classList.remove('active')
        })
        e.target.classList.add('active')
        e.preventDefault()
        const dataID = e.target.dataset.id;
        let imageBg = tabNav[`${dataID}`].imgbg.url;
        let objLogos = tabNav[`${dataID}`].logos
        _htmlElements.title.innerHTML = tabNav[`${dataID}`].title;
        _htmlElements.description.innerHTML = tabNav[`${dataID}`].description;
        _htmlElements.section.style.backgroundImage = `url(${imageBg})`;
        _htmlElements.tabContent.innerHTML = ''
        Object.entries(objLogos).forEach(([,value])=>{
           _htmlElements.tabContent.innerHTML += `<div class="logo">
                <img src="${value}">
           </div>`
        })
              
    }
    _htmlElements.tabLinks.forEach((tabLink) =>{
        tabLink.addEventListener('click', updateContent)
    })
}   
