const photoConfig = [
    [0, 9], // Summer
    [10, 11] // Andy
]


function placePhotos() {

    let photoCards = document.getElementsByClassName('card')
    let currentCard = photoConfig[photoConfig.length - 1]
    currentCard = currentCard[currentCard.length - 1]

    for (let subject = 0; subject < photoConfig.length; subject++) {

        // console.log(`subject${subject}`);

        let range = []
        for (let i = photoConfig[subject][0]; i <= photoConfig[subject][1]; i++) {
            range.push(i)
        }
        // console.log(range)


        while (range.length > 0) {
            console.log(range.length);
            let randomPhotoIndex = Math.floor(Math.random() * range.length)
            let photoName = range[randomPhotoIndex]

            photoCards[currentCard].style.backgroundImage = `url('/images/portfolio/${photoName}.png')`
            
            // photoCards[currentCard].innerHTML = currentCard

            currentCard--
            range.splice(randomPhotoIndex, 1)   // remove element at index
        }
    }
    

    // for (let i = 0; i < photoCards.length; i++) {
        // photoCards[i].style.backgroundImage = `url('/images/portfolio/${photoCards.length - 1 - i}.JPG')`
    // }

}

placePhotos()