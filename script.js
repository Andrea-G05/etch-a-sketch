/*create grid with for
add event on hover
create button to delete and recreate grid*/

function createGrid(size){
    for(let i = 0; i < size; i++){
        const row = document.createElement("div");

        for(let h = 0; h < size; h++){
            const column = document.createElement("div");
            column.classList.add("subSquare")
            row.appendChild(column);
        }

        document.querySelector("#gridContainer").appendChild(row);
    }
}



let size = 16;

createGrid(size);
console.log("The square is " + size + " * " + size);