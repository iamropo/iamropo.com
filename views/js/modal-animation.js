const navBar = document.querySelector('nav')
const expandProjectButtons = [...document.querySelectorAll('.fa-plus-circle')]
const modal = document.querySelector('#modal')
const projectsHeader = document.querySelector('#projects > h2 > span:last-child')

// keeps track of status of modal
let modalStatus = { activeProject: null, styles: null}

function expandModal (width, height, top) {
	modal.style.width = `${width}px` 
	modal.style.height = `${height}px`
	modal.style.top = `${top}px`
}

// show the project that button belongs to
function showProject (button) {
	const project = button.parentElement
	modalStatus.activeProject = project
	project.style.position = 'relative'
}

function resetProject () {
	modalStatus.activeProject.style.position = 'initial'
}

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