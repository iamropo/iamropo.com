const picture = document.querySelector('#profile-picture')
const projectsDisplayButtons = [ ...document.querySelectorAll('.project')]
const moveToTopButtons = [...document.querySelectorAll('.move-to-top')]

picture.addEventListener('click', () => {
	picture.style.animation = 'rotatePicture 1s linear 1 forwards'
})

function hideAndShowProjectDetails (projectDetails, indicator) {
	if (projectDetails.className === 'project-details open') {
		projectDetails.className = 'project-details closed'
		indicator.className = 'mobile-projects-display-button fa fa-angle-down'		
	} else {
		projectDetails.className = 'project-details open'
		indicator.className = 'mobile-projects-display-button fa fa-angle-up'		
	}
}

projectsDisplayButtons.forEach((button) => {
	button.addEventListener('click', (event) => {
		hideAndShowProjectDetails(button.querySelector('.project-details'), button.querySelector('i'))
	})
})
