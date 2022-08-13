const photoConfig = [
    [0, 10],    // Summer Wu
    [11, 12],   // Andy Travis
    [13, 14],   // Jessica Davids
    [15, 18]    // Aiden Engvall
]

const exclude = [7, 8, 10]  // Summer Wu


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
            newCard.classList.add('card')
            flexContainer.appendChild(newCard)

            let photoCards = document.getElementsByClassName('card')
            photoCards[currentCard].style.backgroundImage = `url('/images/portfolio/${photoName}.png')`

            if (exclude.includes(photoName)) {
                realExclusionOrder.push(currentCard)
            }
            
            currentCard++
            range.splice(randomPhotoIndex, 1)   // remove element at index
        }
    }


    // remove cards with excluded images
    let realExclusionOrder = []

    for (let exclusion = exclude.length - 1; exclusion >= 0; exclusion--) {
        let photoCards = document.getElementsByClassName('card')
        photoCards[realExclusionOrder[exclusion]].remove()
    }
}

placePhotos()