const photoConfig = [
    [0, 10],    // Summer Wu
    [100, 101],   // Andy Travis
    [500, 501],  // Andy Travis (2)
    [400, 401], // Ben Gates
    [200, 206],   // Jessica Davids
    [300, 318],  // Aiden Engvall
    [600, 605], // Sahil Sawant

]

const exclude = [
    7, 8, 10,   // Summer Wu
    501,    // Andy Travis
    200, 201, 204, 206, // Jessica Davids
    300, 301, 302, 303, 304, 306, 310, 311, 312, 315, 316, 317, 318,    // Aiden Engvall
]


let realExclusionOrder = []


function placePhotos() {

    let currentCard = 0

    for (let subject = photoConfig.length - 1; subject >= 0; subject--) {

        // console.log(`subject${subject}`);

        let range = []
        for (let i = photoConfig[subject][0]; i <= photoConfig[subject][1]; i++) {
            range.push(i)
        }
        // console.log(range)


        while (range.length > 0) {
            // console.log(range.length);
            let randomPhotoIndex = Math.floor(Math.random() * range.length)
            let photoName = range[randomPhotoIndex]

            let flexContainer = document.getElementsByClassName('flexContainer')[0]
            let newCard = document.createElement('div')
            let newCardImage = document.createElement('img')
            newCard.appendChild(newCardImage)
            newCardImage.classList.add('cardImage')
            newCard.classList.add('card')
            flexContainer.appendChild(newCard)

            let photoCards = document.getElementsByClassName('card')
            photoCards[currentCard].style.backgroundImage = `url('./images/small/${photoName}.png')`

            let photoCardImages = document.getElementsByClassName('cardImage')
            photoCardImages[currentCard].setAttribute('src', `./images/portfolio/${photoName}.png`)
            photoCardImages[currentCard].setAttribute('loading', 'lazy')
            photoCardImages[currentCard].classList.add('cardImage')
            photoCardImages[currentCard].addEventListener('load', (e) => {
                e.target.classList.add('loaded')
            })
            // if (photoCardImages[currentCard].complete)
            //     photoCardImages[currentCard].classList.add('loaded')

            if (exclude.includes(photoName)) {
                realExclusionOrder.push(currentCard)
            }

            currentCard++
            range.splice(randomPhotoIndex, 1)   // remove element at index
        }
    }


    // remove cards with excluded images
    for (let exclusion = exclude.length - 1; exclusion >= 0; exclusion--) {
        let photoCards = document.getElementsByClassName('card')
        photoCards[realExclusionOrder[exclusion]].remove()
    }
}

placePhotos()
