/*create grid with for
add event on hover
create button to delete and recreate grid*/

function createGrid(size){
    for(let i = 0; i < size; i++){
        const row = document.createElement("div");

        for(let h = 0; h < size; h++){
            const column = document.createElement("div");
            row.appendChild(column);
        }

        document.querySelector("#gridContainer").appendChild(row);
    }
}

createGrid(16);
console.log("a")