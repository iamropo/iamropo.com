const picture = document.querySelector('#profile-picture')
const projectsDisplayButtons = [...document.querySelectorAll('.mobile-projects-display-button')]
const moveToTopButtons = [...document.querySelectorAll('.move-to-top')]

picture.addEventListener('click', () => {
	picture.style.animation = 'rotatePicture 1s linear 1 forwards'
})

projectsDisplayButtons.forEach((button) => {
	
	button.addEventListener('click', (event) => {
		
		let projectDetails = button.nextSibling

		if (projectDetails.className === 'open') {
			projectDetails.className = 'closed'
			button.className = 'fa fa-angle-down'		
		} else {
			projectDetails.className = 'open'
			button.className = 'fa fa-angle-up'		
		}

	})
	
})
