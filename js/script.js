//*Question 3*//
var heading = document.querySelector("h2")
var button = document.querySelector("button")


function changeHeading () {
    heading.innerHTML ="Updated subheading"
    heading.style.color = "blue"
}

button.onclick = changeHeading;