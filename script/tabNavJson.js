let tabNav = {
    livesports: {
    title: 'Live Sports',
    description: 'Catch your games at home or on the go. Stream live games from major college and pro leagues including the NCAA®, NBA, NHL, NFL, and more.',
    logos: {
        url1: '.././img/live-sports-logo-1.png',
        url2: '.././img/live-sports-logo-2.png',
        url3: '.././img/live-sports-logo-3.svg',
        url4: '.././img/live-sports-logo-4.png'
    },
    imgbg: {
        url: '.././img/live-sports.jpg'
    }
    },
    breakingnews: {
        title: 'Breaking News',
        description: 'Keep pace with what\'s going on locally and globally with trusted opinions from all the top news networks.',
        logos: {
            url1: '.././img/breaking-news-logo-1.png',
            url2: '.././img/breaking-news-logo-2.svg',
            url3: '.././img/breaking-news-logo-3.png',
            url4: '.././img/breaking-news-logo-4.svg'
        },
        imgbg: {
            url: '.././img/breaking-news.jpg'
        }
    },
    biggestevents: {
        title: 'Biggest Events',
        description: 'Spectacular, can\'t-miss moments like the Olympics, Grammys®, Oscars®, Emmys®, and more.',
        logos: {
            url1: '.././img/biggest-events-logo-1.png',
            url2: '.././img/biggest-events-logo-2.png',
            url3: '.././img/biggest-events-logo-3.png',
            url4: '.././img/biggest-events-logo-4.png'
        },
        imgbg: {
            url: '.././img/biggest-event.jpg'
        }
    },
    returnURLS(id){
        let arrayURLS = [];
        Object.entries(tabNav[`${id}`].logos).forEach(([, value])=>{
            arrayURLS.push(value)
        })
        return arrayURLS
    }
}
export default tabNav;