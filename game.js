var question = ['Am i a boy?', 'Was I born in seattle?', 'Is Pho my favorite food?' ];
var answer = ['yes','y','no','n'];

//var name = prompt('What is your name?');
var correctAnswers = 0;	
var gender;
var birthPlace;
var favoriteFood;

var correct1 = document.getElementById('c1');
var correct2 = document.getElementById('c2');
var correct3 = document.getElementById('c3');

var p1 = document.getElementById('1');
var p2 = document.getElementById('2');
var p3 = document.getElementById('3');

var wrong1 = document.getElementById('w1');
var wrong2 = document.getElementById('w2');
var wrong3 = document.getElementById('w3');

var photo1 = 'img/moose.jpg'
var photo2 = 'img/giraffe.jpg'
var photo3 = 'img/dikdik.jpg'


function question1(){
	gender = prompt(question[0]);
	genderCorrectAnswer = 'yes'
	gender=gender.toLowerCase()
	if(gender === answer[0]||gender ===answer[1]){
		correctAnswers += 1
		correct1.innerHTML = 'HEYO, good guess';
		p1.innerHTML = '<img src= '+ photo1 +' width="200" >';
		//alert('HEYO, good guess!');
	}else if(gender === answer[2]||gender === answer[3]){
		wrong1.innerHTML = 'no, my hair\'s not that long is it?'
		//alert('no, my hair\'s not that long is it?');
	}
}
question1();

function question2(){
	birthPlace = prompt(question[1]);
	birthPlaceCorrectAnswer = 'yes'
	birthPlace=birthPlace.toLowerCase()
	if(birthPlace === answer[0]||birthPlace === answer[1]){
		correctAnswers += 1
		correct2.innerHTML = 'how\'d you know?';
		p2.innerHTML = '<img src= '+ photo2+' width="200" >';;
		//alert('how\'d you know?');
	}else if(birthPlace === answer[2]||birthPlace === answer[3]){
		wrong2.innerHTML = 'hmm, not quite'
		//alert('hmm, not quite');
	}
}
question2();


function question3(){
	favoriteFood = prompt(question[2]);
	favoriteFoodCorrectAnswer = 'yes'
	favoriteFood=favoriteFood.toLowerCase()
	if(favoriteFood === answer[0]||favoriteFood === answer[1]){
		correctAnswers += 1
		correct3.innerHTML = 'Correct! So yummy!';
        p3.innerHTML= '<img src= '+ photo3 +' width="200" >';;
		//alert('Correct! So yummy!');
	}else if(favoriteFood === answer[2]||favoriteFood === answer[3]){
		wrong3.innerHTML = 'Of course it is!'
		//alert('Of course it is!');
	}
}
question3();

	//console.log('Question 1 response: ' + gender)
	//console.log('Question 2 response: ' + birthPlace)
	//console.log('Question 3 response: ' + favoriteFood)

if(correctAnswers === 0){
	alert('Darn none right.');
}else if(correctAnswers === 1){
	alert('Ya got one!');
}else if(correctAnswers === 2){
	alert('Ya got two!');
}else{
	alert('Ya got em all!!!');
}

	//alert('Thanks for playing my game ' + name +".");



