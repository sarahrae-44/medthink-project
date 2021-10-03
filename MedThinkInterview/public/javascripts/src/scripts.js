function Choice () {
	const answer1 = document.getElementById('answer1');
	const answer2 = document.getElementById('answer2');
	const answer3 = document.getElementById('answer3');
	const message = document.getElementById('message');

	answer1.onclick = function(){
    message.innerHTML = "Correct! I have only been to three of the seven continents."
	}
	answer2.onclick = function(){
    message.innerHTML = "Incorrect! I have flown a helicopter (with instructor assistance)."
	}
	answer3.onclick = function(){
    message.innerHTML = "Incorrect! I have been to the Iowa State Fair twice."
	}
}

Choice();
