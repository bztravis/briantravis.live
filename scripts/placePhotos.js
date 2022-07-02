const photoConfig = [
    [0, 10], // Summer
    [11, 12] // Andy
]


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
            
            currentCard++
            range.splice(randomPhotoIndex, 1)   // remove element at index
        }
    }
}

placePhotos()