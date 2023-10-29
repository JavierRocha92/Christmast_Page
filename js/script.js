const superior__img = document.getElementById('superior__img')
const favorites = document.getElementById('favorites')
const container = document.getElementById('container')
/**
 * function to add classList getUp, getDown to container depending what classList it has 
 * and the same to favorites
 */
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

/**
 * function to add classList vibration to superior__img
 */
const vibrationIn = () => {
    console.log('estou en la funcion')
    superior__img.classList.add('vibration')
}
/**
 * function to remove classList vibration to superior__img
 */
const vibrationOut = () => {
    superior__img.classList.remove('vibration')
}

//conditional to remove classList to container when reloution of window is more than 1200px
if(window.outerWidth >= 1200){
    container.classList.remove('getUp')
    console.log(container.classList)
}
superior__img.addEventListener('click',animationIn)
superior__img.addEventListener('mouseover',vibrationIn)
superior__img.addEventListener('mouseout',vibrationOut)
