function format() {

    if (window.innerWidth < 600) {
        alert('format() error')
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
    console.log('cardWidth' + cardWidth)
    let cardCount = Math.floor(contentContainerWidth / (cardWidth + 8)) 
    // console.log(cardCount);
    // alert(cardCount)

    // let flexContainerWidth = contentContainerWidth - (contentContainerWidth % (cardWidth + 8)) + 4  // 4 px error tolerance
    let flexContainerWidth = cardCount * (cardWidth + 8) + 1// 4 px error tolerance
    // if (window.innerWidth < 1000) {
    //     flexContainerWidth += 8
    // }

    // document.getElementsByClassName('card')[0].style.width = flexContainerWidth + 'px'
    // alert(cardHeight)
    flexContainer.style.width = flexContainerWidth + 'px'
    flexContainer.style.right = '0'
    
    // alert(flexContainerWidth)




    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

format()
document.body.onresize = () => { format() }


if (window.innerWidth < 600) {
    alert('format() error')
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
console.log('cardWidth' + cardWidth)
let cardCount = Math.floor(contentContainerWidth / (cardWidth + 8)) 
// console.log(cardCount);
// alert(cardCount)

// let flexContainerWidth = contentContainerWidth - (contentContainerWidth % (cardWidth + 8)) + 4  // 4 px error tolerance
let flexContainerWidth = cardCount * (cardWidth + 8) + 1// 4 px error tolerance
// if (window.innerWidth < 1000) {
//     flexContainerWidth += 8
// }

setInterval(() => {
    // document.getElementsByTagName('h1')[0].innerHTML = window.innerHeight
    // document.getElementsByTagName('h3')[0].innerHTML = cardCount
    // document.getElementsByTagName('h3')[1].innerHTML = 'cardWidth' + cardWidth
    // document.getElementsByTagName('h3')[2].innerHTML = 'flexContWidth' + flexContainerWidth
}, 10);