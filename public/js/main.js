var age = document.getElementById('age')
var date = new Date()

if ((date.getDate() === 18) && (date.getMonth() === 1)) {
	age.innerText = Number(age.innerText) + 1  
}