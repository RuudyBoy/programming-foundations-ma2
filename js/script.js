//* Question 1 *//

var pets = [
	{
		type: "cat",
		age: 5.5,
	},
	{
		type: "dog",
		age: 3.8,
	},
	{
		type: "parrot",
		age: 4.0,
	},
];

for (var i = 0; i < pets.length; i++) {
    
     var age =pets[i].age;
     var type=pets[i].type;

     if (age >=4) {
         console.log(type);
     }
     
}


//*Question 2*//

function logBoolean(booleanValue) {
    var typeofFirst = typeof booleanValue;

    if (typeofFirst !== true) {

        return "Please pass a boolean value in";
    }

    return booleanValue;
}

var result = logBoolean;
console.log(result);



//*Question 3*//
var heading = document.querySelector("h2")
var button = document.querySelector("button")


function changeHeading () {
    heading.innerHTML ="Updated subheading"
    heading.style.color = "blue"
}

button.onclick = changeHeading;





