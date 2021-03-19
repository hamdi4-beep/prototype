const title = document.querySelector("h1");
const colors = ["green", "blue", "white", "pink",
                "red", "orange", "grey", "gold",
                "purple", "cyan", "silver", "crimson"];

document.querySelector("input").addEventListener("keyup", function(e) {
    colors.forEach(function(color) {
        if (e.target.value.toLowerCase().indexOf(color) != -1) {
            title.style.color = color;
        }
    });
});