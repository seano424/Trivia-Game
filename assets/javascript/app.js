

var count=30;

var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

function timer() {

	if(count === 0){
		// clearTimeout(counter);
		// doSomething();
		document.getElementById("timer").innerHTML = "Time is up."
	} else {
		document.getElementById("timer").innerHTML = count + " secs remaining";
		count--;
	}
}