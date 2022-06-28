function format() {

    if (window.innerWidth < 600) {
        // alert('format() error')
        return
    }

    // alert("resizing")

    let flexContainer = document.getElementsByClassName('flexContainerFormat')[0]
    // flexContainer.style.position = 'absolute'
    // flexContainer.style.background = '#444'

    let contentContainerWidth = window.innerWidth - (3 * 56) - 260
    let contentContainerHeight = window.innerHeight - (2 * 56)
    let cardHeight = (contentContainerHeight / 2) - 4
    console.log('cardHeight' + cardHeight)
    let cardWidth = (cardHeight / 3 * 2) + 1
    let cardWidthExact = (cardHeight / 3 * 2)
    console.log('cardWidth' + cardWidth)
    let cardCount = Math.floor(contentContainerWidth / (cardWidth + 8)) 
    // console.log(cardCount);
    // alert(cardCount)

    // let flexContainerWidth = contentContainerWidth - (contentContainerWidth % (cardWidth + 8)) + 4  // 4 px error tolerance
    let flexContainerWidth = cardCount * (cardWidth + 8) + 1// 4 px error tolerance
    let flexContainerWidthExact = cardCount * (cardWidth + 8)
    // if (window.innerWidth < 1000) {
    //     flexContainerWidth += 8
    // }

    // document.getElementsByClassName('card')[0].style.width = flexContainerWidth + 'px'
    // alert(cardHeight)
    // flexContainer.style.width = flexContainerWidth + 'px'
    // flexContainer.style.right = '0'
    document.documentElement.style.setProperty('--flexContainerWidth', flexContainerWidth + 'px')
    document.documentElement.style.setProperty('--flexContainerWidthExact', flexContainerWidthExact + 'px')
    
    // alert(flexContainerWidth)




    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`)




    checkToggleDownBtn()
}

format()
document.body.onresize = () => { format() }




document.querySelector('#contentContainer').scrollTop = 0

function checkToggleDownBtn() {
    let flexContainer = document.querySelector('.flexContainer')
    let contentContainer = document.querySelector('#contentContainer')
    // console.log(`contentContainer.scrollTop ${contentContainer.scrollTop}`);
    // console.log(`flexContainer.offsetHeight - contentContainer.offsetHeight ${flexContainer.offsetHeight - contentContainer.offsetHeight}`)
    console.log((flexContainer.offsetHeight - contentContainer.offsetHeight - 10) - contentContainer.scrollTop);
    // console.log((flexContainer.offsetHeight - contentContainer.offsetHeight) - contentContainer.scrollTop <= document.querySelector('.card').offsetHeight);
    if ((flexContainer.offsetHeight - contentContainer.offsetHeight) - contentContainer.scrollTop <= document.querySelector('.card').offsetHeight) {
        document.querySelector('#downBtn').style.opacity = "0"
    } else {
        document.querySelector('#downBtn').style.opacity = "1"
    }
}