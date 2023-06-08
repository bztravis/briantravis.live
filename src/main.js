// deprecated
function downBtnScrollDown() {
    let contentContainer = document.querySelector('#contentContainer')
    let card = document.querySelector('.card')

    contentContainer.scrollTop += card.offsetHeight
}




function toggleScrollMsg() {
    let downBtn = document.querySelector('#downBtn')
    let scrollMsg = document.querySelector('#scrollMsg')
    // if (window.getComputedStyle(scrollMsg).pointerEvents == 'none') {
    downBtn.style.pointerEvents = 'none'
    scrollMsg.style.opacity = '1'
    // scrollMsg.style.pointerEvents = 'auto'
    // }
    document.querySelector('#contentContainer').addEventListener('scroll', function () {
        scrollMsg.style.opacity = '0'
    })
}
window.toggleScrollMsg = toggleScrollMsg




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
window.toggleHelpModal = toggleHelpModal




function copyToClipboard(text, classOrder) {

    navigator.clipboard.writeText(text)

    let targetElement = document.getElementsByClassName('footerDetail')[classOrder]
    let initialText = targetElement.innerText

    if (initialText != 'Copied to Clipboard!') {

        targetElement.style.opacity = 0
        setTimeout(() => { targetElement.style.opacity = 1 }, 200)

        setTimeout(() => { targetElement.innerText = 'Copied to Clipboard!' }, 200)


        setTimeout(() => {
            targetElement.style.opacity = 0
            setTimeout(() => { targetElement.style.opacity = 1 }, 200)
            setTimeout(() => { targetElement.innerText = initialText }, 200)
            setTimeout(() => { targetElement.parentElement.style.pointerEvents = 'none' }, 200)
            setTimeout(() => { targetElement.parentElement.style.pointerEvents = 'auto' }, 500)
        }, 2000)
    }
}
window.copyToClipboard = copyToClipboard




function revealContentContainer() {
    document.querySelector('#contentContainer').style.opacity = '1'
}
document.querySelector('#contentContainer').addEventListener('load', revealContentContainer())
