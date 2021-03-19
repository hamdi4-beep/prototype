const title = document.querySelector("h1");
const colors = ["green", "blue", "white", "pink",
                "red", "orange", "grey", "gold",
                "purple", "cyan", "silver", "crimson"];

document.querySelector("input").addEventListener("keyup", function(e) {
    e.target.value == "" ? title.textContent : title.textContent = this.value;
    colors.forEach(function(color) {
        if (e.target.value.toLowerCase().indexOf(color) != -1) {
            title.style.color = color;
        } else if (e.target.value.toLowerCase() == "default") {
            title.textContent = "Hamdi Kamel";
            title.style.color = "white";
        }
    });
});

title.onclick = function() {
    this.textContent = "Welcome, User!";
}