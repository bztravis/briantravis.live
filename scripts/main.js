// deprecated
function downBtnScrollDown() {
    let contentContainer = document.querySelector('#contentContainer')
    let card = document.querySelector('.card')

    contentContainer.scrollTop += card.offsetHeight 
}




function toggleHelpModal() {
    let helpModal = document.querySelector('#helpModal')
    if (window.getComputedStyle(helpModal).pointerEvents == 'none') {
        helpModal.style.opacity = '1'
        helpModal.style.pointerEvents = 'auto'
    } else {
        helpModal.style.opacity = '0'
        helpModal.style.pointerEvents = 'none'
    }
}