function format() {

    if (window.innerWidth < 600) {
        // alert('format() error')
        return
    }

    let contentContainerWidth = window.innerWidth - (3 * 56) - 260
    let contentContainerHeight = window.innerHeight - (2 * 56)
    let cardHeight = (contentContainerHeight / 2) - 4
    console.log('cardHeight' + cardHeight)
    let cardWidth = (cardHeight / 3 * 2) + 1
    let cardWidthExact = (cardHeight / 3 * 2)
    console.log('cardWidth' + cardWidth)
    let cardCount = Math.floor(contentContainerWidth / (cardWidth + 8)) 

    let flexContainerWidth = cardCount * (cardWidth + 8) + 1// 4 px error tolerance

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
    // console.log(`contentContainer.scrollTop ${contentContainer.scrollTop}`);
    // console.log(`flexContainer.offsetHeight - contentContainer.offsetHeight ${flexContainer.offsetHeight - contentContainer.offsetHeight}`)
    console.log((flexContainer.offsetHeight - contentContainer.offsetHeight - 10) - contentContainer.scrollTop);
    // console.log((flexContainer.offsetHeight - contentContainer.offsetHeight) - contentContainer.scrollTop <= document.querySelector('.card').offsetHeight);
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