var computer;

function newNumber(){
	computer = Math.floor(Math.random()*11);
}

function generate(a){

	a = document.getElementById('number').value;
	var answer = document.getElementById('display');

	if (a < computer){
		answer.innerHTML = "guess higher"
	} else if (a > computer) {
		answer.innerHTML = "guess lower";
	} else {
		answer.innerHTML = "You win! Click the button to play again";
		newNumber();
	}	

}
