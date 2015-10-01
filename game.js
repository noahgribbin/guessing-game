var name = prompt('What is your name?');
var correctAnswers = 0	
var gender = prompt('Am i a boy?');
var genderCorrectAnswer = 'yes'
gender=gender.toLowerCase()
console.log(gender)

if(gender === genderCorrectAnswer||gender ==='y'||gender ==='Y'){
	correctAnswers += 1
	alert('Good guess');
}else if(gender === 'n'||gender ==='no'){
	alert('hmm, not quite');	
}


var birthPlace = prompt('Was I born in seattle?');
var birthPlaceCorrectAnswer = 'yes'
birthPlace=birthPlace.toLowerCase()
if(birthPlace === birthPlaceCorrectAnswer||birthPlace === 'y'||birthPlace === 'Y'){
	correctAnswers += 1
	alert('Good guess');
}else if(birthPlace === 'n'||birthPlace ==='no'){
	alert('hmm, not quite');
}

var favoriteFood = prompt('Is Pho my favorite food?');
var favoriteFoodCorrectAnswer = 'yes'
favoriteFood=favoriteFood.toLowerCase()
if(favoriteFood === favoriteFoodCorrectAnswer||favoriteFood === 'y'||favoriteFood === 'Y'){
	correctAnswers += 1
	alert('Good guess');
}else if(favoriteFood === 'n'||favoriteFood ==='no'){
	alert('hmm, not quite');
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
if(gender !== genderCorrectAnswer && gender !=='y'){
	alert('Actually i am a boy');
}
if(birthPlace !== birthPlaceCorrectAnswer && birthPlace !== 'y'){
	alert('Actually I was born in seattle');
}
if(favoriteFood !== favoriteFoodCorrectAnswer && favoriteFood !== 'y'){
	alert('Actually my favorite food is Pho');
}
	alert('Thanks for playing my game ' + name +".");

	