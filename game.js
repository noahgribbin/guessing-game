var name = prompt('What is your name?');
var correctAnswers = 0	
	var gender = prompt('Am i a boy?');
		var genderCorrectAnswer = 'yes'
		if(gender === genderCorrectAnswer){
			correctAnswers += 1
			alert('Good guess');
		}else if(gender === 'y'||gender ==='Y'||gender==='YES'){
			alert('Error: Incorrect input.');
		}else if(gender === 'n'||gender ==='N'||gender==='NO'){
			alert('Error: Incorrect input.');
		}

	var birthPlace = prompt('Was I born in seattle?');
		var birthPlaceCorrectAnswer = 'yes'
			if(birthPlace === birthPlaceCorrectAnswer){
				correctAnswers += 1
				alert('Good guess');
			}else if(birthPlace === 'y'||birthPlace ==='Y'||birthPlace==='YES'){
				alert('Error: Incorrect input.');
			}else if(birthPlace === 'n'||birthPlace ==='N'||birthPlace==='NO'){
				alert('Error: Incorrect input.');
			}

	var favoriteFood = prompt('Is Pho my favorite food?');
		var favoriteFoodCorrectAnswer = 'yes'
			if(favoriteFood === favoriteFoodCorrectAnswer){
				correctAnswers += 1
				alert('Good guess');
			}else if(favoriteFood === 'y'||favoriteFood === 'Y'||favoriteFood === 'YES'){
				alert('Error: Incorrect input.');
			}else if(favoriteFood === 'n'||favoriteFood ==='N'||favoriteFood==='NO'){
				alert('Error: Incorrect input.');
			}
			console.log('Question 1 response:' + " " + gender)
			console.log('Question 2 response:' + " " + birthPlace)
			console.log('Question 3 response:' + " " + favoriteFood)
	if(correctAnswers === 0){
		alert('Darn none right.');
	}else if(correctAnswers === 1){
		alert('Ya got one!');
	}else if(correctAnswers === 2){
		alert('Ya got two!');
	}else{
		alert('Ya got em all!!!');
	}
	if(gender !== genderCorrectAnswer){
		alert('Actually i am a boy');
	}
	if(birthPlace !== birthPlaceCorrectAnswer){
		alert('Actually I was born in seattle');
	}
	if(favoriteFood !== favoriteFoodCorrectAnswer){
		alert('Actually my favorite food is Pho');
	}
		alert('Thanks for playing my game ' + name +".");
	//learning how to make a comment