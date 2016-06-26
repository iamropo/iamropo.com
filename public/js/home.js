var miscListDoor = document.getElementById('misc-list-door');
var miscList = document.getElementById('misc-list');

miscListDoor.addEventListener('mouseover', function (e) {
  setTimeout(function () { miscList.style.zIndex = 5; }, 400);
});

miscListDoor.addEventListener('mouseout', function (e) {
  setTimeout(function () { miscList.style.zIndex = -5; }, 100);
});
