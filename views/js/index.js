const picture = document.querySelector('#profile-picture')
const projectsDisplayButtons = [...document.querySelectorAll('.mobile-projects-display-button')]
const moveToTopButtons = [...document.querySelectorAll('.move-to-top')]

picture.addEventListener('click', () => {
	picture.style.animation = 'rotatePicture 1s linear 1 forwards'
})

projectsDisplayButtons.forEach((button) => {
	
	button.addEventListener('click', (event) => {
		
		let projectDetails = button.nextSibling.nextSibling

		if (projectDetails.className === 'project-details open') {
			projectDetails.className = 'project-details closed'
			button.className = 'mobile-projects-display-button fa fa-angle-down'		
		} else {
			projectDetails.className = 'project-details open'
			button.className = 'mobile-projects-display-button fa fa-angle-up'		
		}

	})
	
})
