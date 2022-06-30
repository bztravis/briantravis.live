function format() {

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




    // HOME
    if (document.getElementsByTagName('title')[0].innerText == 'Brian Travis Photography') {
        checkToggleDownBtn()
    }

    // PRICING
    if (document.getElementsByTagName('title')[0].innerText == 'Pricing - Brian Travis Photography') {

        // width breakpoint for pricingCards
        let flexContainer = document.querySelector('.flexContainer')
        let pricingCard = document.querySelectorAll('.pricingCard')

        let width = window.innerWidth;
        let height = window.innerHeight;
        let isMobile = (height < 500) || (width < 850) || (height > 700 && (width / height < 850 / 700))
        if (!isMobile) {
            if ((flexContainerWidth / ((200 + 8))) < 3) {
                flexContainer.style.flexDirection = 'column'
                pricingCard.forEach((individualCard) => {individualCard.style.maxWidth = 'none'})
            } else {
                flexContainer.style.flexDirection = 'row'
                pricingCard.forEach((individualCard) => {individualCard.style.maxWidth = '400px'})
            }
        } else {
            if ((flexContainer.offsetWidth / ((200 + 8))) < 3) {
                flexContainer.style.flexDirection = 'column'
                pricingCard.forEach((individualCard) => {individualCard.style.maxWidth = 'none'})
            } else {
                flexContainer.style.flexDirection = 'row'
                pricingCard.forEach((individualCard) => {individualCard.style.maxWidth = '400px'})
            }
        }


        // fancy centering of pricing detail ul
        document.documentElement.style.setProperty('--pricingItemListMargin', 0 + 'px')    // must do this first so the p can expand before evaluation of its length

        let longestItemListText = document.querySelector('#longestItemListText')
        let pricingCardIndividual = document.querySelector('.pricingCard')
        
        let pricingCardIndividualWidth = pricingCardIndividual.offsetWidth
        let longestItemListTextWidth = longestItemListText.offsetWidth
        let pricingItemListMargin = (pricingCardIndividualWidth - longestItemListTextWidth) / 2 + ((32-20) / 2)
        console.log(pricingCardIndividualWidth);
        console.log(longestItemListTextWidth);
        console.log(pricingItemListMargin);

        document.documentElement.style.setProperty('--pricingItemListMargin', pricingItemListMargin + 'px')

    }
}

format()
document.body.onresize = () => { format() }
document.body.onorientationchange = () => { format() }




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