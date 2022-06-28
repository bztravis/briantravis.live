function format() {

    if (window.innerWidth < 600) {
        // alert('format() error')
        return
    }

    let contentContainerWidth = window.innerWidth - (3 * 56) - 260
    let contentContainerHeight = window.innerHeight - (2 * 56)
    let cardHeight = (contentContainerHeight / 2) - 4
    let cardWidth = (cardHeight / 3 * 2) + 1    // 1px for error
    let cardWidthExact = (cardHeight / 3 * 2)
    let cardCount = Math.floor(contentContainerWidth / (cardWidth + 8)) 
    let flexContainerWidth = cardCount * (cardWidth + 8) + 1    // 1px for error

    document.documentElement.style.setProperty('--flexContainerWidth', flexContainerWidth + 'px')
    document.documentElement.style.setProperty('--cardCount', cardCount)
    document.documentElement.style.setProperty('--cardWidthExact', cardWidthExact + 'px')




    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)




    checkToggleDownBtn()
}

format()
document.body.onresize = () => { format() }




document.querySelector('#contentContainer').scrollTop = 0

function checkToggleDownBtn() {
    let downBtn = document.querySelector('#downBtn')
    let flexContainer = document.querySelector('.flexContainer')
    let contentContainer = document.querySelector('#contentContainer')
    let card = document.querySelector('.card')
    if ((flexContainer.offsetHeight - contentContainer.offsetHeight) - contentContainer.scrollTop <= card.offsetHeight) {
        downBtn.style.opacity = '0'
    } else {
        downBtn.style.opacity = '1'
    }
}


// deprecated
function downBtnScrollDown() {
    let contentContainer = document.querySelector('#contentContainer')
    let card = document.querySelector('.card')

    contentContainer.scrollTop += card.offsetHeight 
}