function placePhotos() {

    let photoCards = document.getElementsByClassName('card')
    for (let i = 0; i < photoCards.length; i++) {
        photoCards[i].style.backgroundImage = `url('/images/portfolio/${1}.JPG')`
    }

}

placePhotos()