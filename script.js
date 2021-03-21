const title = document.querySelector("h1");
const colors = ["green", "blue", "white", "pink",
                "red", "orange", "grey", "gold",
                "purple", "cyan", "silver", "crimson",
                "black", "darkblue", "darkgrey", "chocolate",
                "yellow", "brown", "deeppink", "rose"];

document.body.addEventListener("click", function(e) {
    if (e.target.tagName == "A") {
        document.querySelector(".blur").style.display = e.target.parentElement.style.display = "none";
    } else if (e.target.tagName == "H1") {
        e.target.textContent = "You're the boss!";
    }
});

document.querySelector("input").addEventListener("keyup", function(e) {
    if (this.value) {
        /^\s+/.test(this.value) ? "" : title.textContent = this.value;
        colors.forEach(function(color) {
            if (e.target.value.toLowerCase().indexOf(color) != -1) {
                title.style.color = color;
            } else if (e.target.value.toLowerCase().trim() == "default") {
                title.textContent = "Hamdi Kamel";
            }
        });
    }
});