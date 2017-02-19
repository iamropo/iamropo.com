const navBar = document.querySelector('nav')
const expandProjectButtons = [...document.querySelectorAll('.fa-plus-circle')]
const modal = document.querySelector('#modal')
const projectsHeader = document.querySelector('#projects > h2 > span:last-child')

// keeps track of status of modal
let modalStatus = { activeProject: null, styles: null}

expandProjectButtons.forEach((button) => {
	button.addEventListener('click', () => {
		expandModal(window.innerWidth, window.innerHeight, navBar.offsetHeight)
		projectsHeader.style.backgroundColor = 'rgba(0, 0, 0, 0)'
		showProject(button)
	})
})

window.addEventListener('keydown', (event) => {
	if (event.keyCode === 27 || event.which === 27) {
		modal.style.width = modal.style.height = '0px'
		projectsHeader.style.backgroundColor = '#ffeb3d'
		resetProject()
	}
})