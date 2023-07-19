function createGrid(size){
	if(size > 100){
		alert("Grid too big!");
		return;
	}

	for(let i = 0; i < size; i++){
		const row = document.createElement("div");

		for(let h = 0; h < size; h++){
			const column = document.createElement("div");
			column.classList.add("subSquare");
			column.addEventListener("mouseover", paintSquare);
			row.appendChild(column);
		}

		gridContainer.appendChild(row);
	}
	console.log("The square is " + size + " * " + size);
}

function paintSquare (){
	this.style.backgroundColor = randomizeColor();
	console.log(this);
}

function randomizeColor() {
	let color = [];
	for(let i = 0; i < 3; i++){
		let rgbValue = Math.floor(Math.random() * 256);
		color.push(rgbValue);
	}
	return `rgb(${color.join(",")})`
}

function removeGrid(){
	while(gridContainer.hasChildNodes()){
		gridContainer.removeChild(gridContainer.firstChild);
	}
}


let gridContainer = document.querySelector("#gridContainer");
let size = 16;

createGrid(size);

document.querySelector("#resetButton").addEventListener("click",() => {
	removeGrid();
	createGrid(prompt("Insert grid size",16));
})