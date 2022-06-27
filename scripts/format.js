function format() {

    if (window.innerWidth < 600) { return }

    // alert("resizing")

    let flexContainer = document.getElementsByClassName('flexContainerFormat')[0]
    // flexContainer.style.position = 'absolute'
    // flexContainer.style.background = '#444'

    let contentContainerWidth = window.innerWidth - (3 * 56) - 260
    let contentContainerHeight = window.innerHeight - (2 * 56)
    let cardHeight = (contentContainerHeight / 2) - 4
    let cardWidth = cardHeight / 3 * 2
    let cardCount = Math.floor(contentContainerWidth / (cardWidth + 8)) 
    // console.log(cardCount);
    // alert(cardCount)
    let flexContainerWidth = contentContainerWidth - (contentContainerWidth % (cardWidth + 8))
    // document.getElementsByClassName('card')[0].style.width = flexContainerWidth + 'px'
    // alert(cardHeight)
    flexContainer.style.width = flexContainerWidth + 'px'
    flexContainer.style.right = '0'
    
    // alert(flexContainerWidth)

}

format()
document.body.onresize = () => { format() }