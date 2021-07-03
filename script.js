const popup = document.querySelector('.popup'); //находим и сохраняем в константу попап-элемент
const openButton = document.querySelector('.open-button'); //находим и сохраняем в константу кнопку открытия попапа
const closeButton = document.querySelector('.close-button');//находим и сохраняем в константу кнопку закрытия попапа

//вешаем слушатель клика на кнопку открытия попапа 
openButton.addEventListener('click', function() {
	popup.style.visibility = 'visible'; //делаем попап видимым
})

//вешаем слушатель клика на кнопку закрытия попапа 
closeButton.addEventListener('click', function() {
	popup.style.visibility = 'hidden'; //делаем попап невидимым
})