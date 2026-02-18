



When a button element containing a heart is clicked, you should add a class named filled to the clicked button if it's not already present, and remove it, if it is.
You should have a class selector that targets the filled class and sets some CSS properties.
When a button element containing a heart is clicked, the heart symbol should toggle between &#9825; (empty heart) and &#10084; (filled heart), depending on its current state.
Note: Be sure to link your JavaScript file in your HTML. (Ex. )



const btn = document.getElementById("test");

btn.addEventListener("click", () => btn.classList.toggle("filled"));





function check() {
	if (btn.classList.contains("filled")) {
	btn.classList.remove("filled")
}
btn.classList.add("filled")
}

btn.addEventListener("click", () => check());