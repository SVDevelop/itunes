export const radioPlayerInit = () => {
    // radio
    // radio-cover__img
    // radio-navigation
    // radio-header
    // radio-item
    // radio-stop fa fa-play

    const radio = document.querySelector('.radio')
    const radioCoverImg = document.querySelector('.radio-cover__img')
    const radioNavigation = document.querySelector('.radio-navigation')
    const radioHeaderBig = document.querySelector('.radio-header__big')
    const radioItem = document.querySelectorAll('.radio-item')
    const  radioStop = document.querySelector('.radio-stop')

    const audio = new Audio()

    audio.type = 'audio/aac'

    radioStop.disabled = true

    const changeIconPlay = () => {
        if (audio.paused) {
            radio.classList.remove('play')
            radioStop.classList.add('fa-play')
            radioStop.classList.remove('fa-stop')
        } else {
            radio.classList.add('play')
            radioStop.classList.remove('fa-play')
            radioStop.classList.add('fa-stop')
        }
    }

    const selectItem = elem => {
        radioItem.forEach(item=> elem === item ? elem.classList.add('select') : item.classList.remove('select'))
    }

    radioNavigation.addEventListener('change', ({target}) => {
        const parrent = target.closest('.radio-item')
        const title = parrent.querySelector('.radio-name').textContent
        const imgSrc = parrent.querySelector('.radio-img').src

        selectItem(parrent)
        radioHeaderBig.textContent = title
        radioCoverImg.src = imgSrc

        radioStop.disabled = false
        audio.src = target.dataset.radioStantion
        audio.play()
        changeIconPlay()
    })

    radioStop.addEventListener('click', () => {
        if (audio.paused) {
            audio.play()
        } else {
            audio.pause()
        }
        changeIconPlay()
    })
}