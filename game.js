var name = prompt('What is your name?');
var correctAnswers = 0;	
var gender;
var birthPlace;
var favoriteFood;


function question1(){
	gender = prompt('Am i a boy?');
genderCorrectAnswer = 'yes'
gender=gender.toLowerCase()
if(gender === genderCorrectAnswer||gender ==='y'){
	correctAnswers += 1
	alert('HEYO, good guess!');
}else if(gender === 'n'||gender ==='no'){
	alert('no, my hair\'s not that long is it?');
}
}
question1();

function question2(){
	birthPlace = prompt('Was I born in seattle?');
birthPlaceCorrectAnswer = 'yes'
birthPlace=birthPlace.toLowerCase()
if(birthPlace === birthPlaceCorrectAnswer||birthPlace === 'y'){
	correctAnswers += 1
	alert('how\'d you know?');
}else if(birthPlace === 'n'||birthPlace ==='no'){
	alert('hmm, not quite');
}
}
question2();


function question3(){
	favoriteFood = prompt('Is Pho my favorite food?');
favoriteFoodCorrectAnswer = 'yes'
favoriteFood=favoriteFood.toLowerCase()
if(favoriteFood === favoriteFoodCorrectAnswer||favoriteFood === 'y'){
	correctAnswers += 1
	alert('Correct! So yummy!');
}else if(favoriteFood === 'n'||favoriteFood ==='no'){
	alert('Of course it is!');
}
}
question3();

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



