var name = prompt('What is your name?');
var correctAnswers = 0	

var gender = prompt('Am i a boy?');
var genderCorrectAnswer = 'yes'
gender=gender.toLowerCase()
if(gender === genderCorrectAnswer||gender ==='y'){
	correctAnswers += 1
	alert('HEYO, good guess!');
}else if(gender === 'n'||gender ==='no'){
	alert('no, my hair\'s not that long is it?');	
}

var birthPlace = prompt('Was I born in seattle?');
var birthPlaceCorrectAnswer = 'yes'
birthPlace=birthPlace.toLowerCase()
if(birthPlace === birthPlaceCorrectAnswer||birthPlace === 'y'){
	correctAnswers += 1
	alert('how\'d you know?');
}else if(birthPlace === 'n'||birthPlace ==='no'){
	alert('hmm, not quite');
}

var favoriteFood = prompt('Is Pho my favorite food?');
var favoriteFoodCorrectAnswer = 'yes'
favoriteFood=favoriteFood.toLowerCase()
if(favoriteFood === favoriteFoodCorrectAnswer||favoriteFood === 'y'){
	correctAnswers += 1
	alert('Correct! So yummy!');
}else if(favoriteFood === 'n'||favoriteFood ==='no'){
	alert('Of course it is!');
}

console.log('Question 1 response: ' + gender)
console.log('Question 2 response: ' + birthPlace)
console.log('Question 3 response: ' + favoriteFood)

if(correctAnswers === 0){
	alert('Darn none right.');
}else if(correctAnswers === 1){
	alert('Ya got one!');
}else if(correctAnswers === 2){
	alert('Ya got two!');
}else{
	alert('Ya got em all!!!');
}

	alert('Thanks for playing my game ' + name +".");



