const superior__img = document.getElementById('superior__img')
const favorites = document.getElementById('favorites')
const container = document.getElementById('container')

const animationIn = () => {
    if(container.classList.contains('getDown') ||
    container.classList.contains('getUp') ){
        container.classList.toggle('getUp')
        container.classList.toggle('getDown')
    }else{
        container.classList.add('getDown')
    }
    if(favorites.classList.contains('getInRight') ||
    favorites.classList.contains('getOutLeft') ){
        favorites.classList.toggle('getOutLeft')
        favorites.classList.toggle('getInRight')
    }else{
        favorites.classList.add('getInRight')
    }
}

const vibrationIn = () => {
    console.log('estou en la funcion')
    superior__img.classList.add('vibration')
}

const vibrationOut = () => {
    superior__img.classList.remove('vibration')
}


superior__img.addEventListener('click',animationIn)
superior__img.addEventListener('mouseover',vibrationIn)
superior__img.addEventListener('mouseout',vibrationOut)