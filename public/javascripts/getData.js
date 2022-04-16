

function setTable(data){
	console.log(data);
	let tRow = document.getElementById("tableRow");
	for(var i=0; i<data.length; i++){
		let cellInfo = document.createTextNode(data[i])
		let newCell = document.createElement('td');
		newCell.appendChild(cellInfo);
		tRow.appendChild(newCell);	
	}
}

async function getData(){
	//Pull data from https://jsonplaceholder.typicode.com/users
	// Then look up the orders from the users.
	await fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(json => function(){
			var data = JSON.parse(json);
			console.log(data);
			setTable(data);
			})};

