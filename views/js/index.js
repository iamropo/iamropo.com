const picture = document.querySelector('#profile-picture')

picture.addEventListener('click', () => {
	picture.style.animation = 'rotatePicture 1s linear 1 forwards'
})