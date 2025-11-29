const list = document.querySelector("#itemList");
const button = document.querySelector("#addBtn");

button.addEventListener("click", function () {
    const newItem = document.createElement("li");

    let count = list.children.length + 1;   // will determine odd/even item
    newItem.textContent = `Item ${count}`;

    // Styling based on odd/even
    if (count % 2 === 1) {
        newItem.style.fontWeight = "bold";
        newItem.style.color = "blue";
    } else {
        newItem.style.fontStyle = "italic";
        newItem.style.color = "red";
    }

    list.appendChild(newItem);
});
 S
