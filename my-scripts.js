// Create count in the database
if (localStorage.getItem("count") == null) { 
localStorage.setItem("count",0)
}

//Update html to reflect database count
function update(){
	document.getElementById("count").innerHTML = localStorage.getItem("count")
}

update()

//create the PlusOne function - add 1 to count
function plusOne(){
	localStorage.setItem("count",Number(localStorage.getItem("count")) + 1)
	update()
}


//reset count
function reset(){
	if (confirm("Are you sure?")){
		localStorage.setItem("count",0)
		update()
	}
}