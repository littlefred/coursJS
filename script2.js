/**
 * first part : level 1, 3 exercices
 * @returns
 */

/**
 * exercise 1 : make a function to say hello
 * 
 * @returns
 */
function hello() { // creation of the main function to display hello
	return alert("Hello World !");
}

const plevel1 = document.querySelector("p.level1"); // selection of paragraph in
// the body where we want to
// localise the function hello
// call

const newElement1 = document.createElement("a"); // creation of one link to
// call the function hello
newElement1.href = "#";
newElement1.id = "helloLink"; // creation of an id to select it
newElement1.textContent = "1 - Hello world by alert"; // creation of text of
// link

plevel1.appendChild(document.createElement("br")); // insertion of a line break
plevel1.appendChild(newElement1); // add the link in the paragraph

const link1 = document.getElementById("helloLink"); // localise the link to add
// an event
link1.addEventListener("click", hello); // add call function when click

/**
 * exercise 2 : make a function to add two numbers and display the result in the
 * html page
 * 
 * @returns
 */
function addTwoNb() { // creation of the main function to add two numbers
	const nb1 = parseInt(prompt("Please, what is your first number ?")); // window
	// to
	// ask
	// the
	// number
	const nb2 = parseInt(prompt("What is your second number ?"));
	return nb1 + nb2;
}

const newElement2 = document.createElement("a"); // creation of one link to
// call the function add
newElement2.href = "#";
newElement2.id = "addLink"; // creation of an id to select it
newElement2.textContent = "2 - Add two numbers => "; // creation of text of
// link

plevel1.appendChild(document.createElement("br")); // insertion of a line break
plevel1.appendChild(newElement2); // add the link in the paragraph

const result = document.createElement("span"); // creation of a span tag to
// insert the result
result.id = "result"; // creation of an id to select it
plevel1.appendChild(result); // add the tag in the paragraph

const link2 = document.getElementById("addLink"); // localise the link to add
// an event
link2.addEventListener("click", function() { // add call function when click
	const res = addTwoNb(); // the function call the add function
	result.textContent = "le résultat est " + res; // insert the result in the
	// tag span
});

/**
 * exercise 3 : sort a table with 5 numbers and display it in the html page
 * 
 * @returns
 */
function sortNb() { // function to sort the table
	const array = [ // creation of table that contains 5 numbers
	nb1 = parseInt(prompt("Please, what is your first number ?")), // window to
	// ask the
	// number
	nb2 = parseInt(prompt("What is your second number ?")),
			nb3 = parseInt(prompt("What is your third number ?")),
			nb4 = parseInt(prompt("What is your fourth number ?")),
			nb5 = parseInt(prompt("What is your fifth number ?")) ]

	array.sort(function compare(a, b) { // function to sort the table with a
		// comparator
		if (a < b) {
			return -1;
		}
		if (a > b) {
			return 1;
		}
		if (a = b) {
			return 0;
		}
	});
	return array;
}

const newElement3 = document.createElement("a"); // creation of one link to
// call the function sort
newElement3.href = "#";
newElement3.id = "arrayLink"; // creation of an id to select it
newElement3.textContent = "3 - Sort a table of 5 numbers"; // creation of text
// of
// link
plevel1.appendChild(document.createElement("br")); // insertion of a line break
plevel1.appendChild(newElement3); // add the link in the paragraph

const insert = document.createElement("div"); // creation of a div tag to
// insert the result
insert.id = "resultarray"; // creation of an id to select it
plevel1.appendChild(insert); // add the tag in paragraph

const response = document.querySelector("#resultarray"); // select the div
// tag to insert the
// result of sort

const link3 = document.getElementById("arrayLink"); // localise the link to add
// an event
link3.addEventListener("click", function() { // add call function when click
	const result = sortNb(); // the function call the add function
	const answer = document.createElement("table"); // creation of table tag
	answer.style.border = "solid blue 3px"; // draw the table border
	answer.textContent = result; // insert the result in the table tag
	response.appendChild(answer); // insert the table in the div tag
});

/**
 * Second part : level 2, 1 exercise => manage a form and its insertions in a
 * table
 * 
 * @returns
 */
function validForm() // function to take a food since a form and insert it in
						// object and after in a row of table
{
	var parameters = location.search.substring(1).split("&"); // catch the
																// elements
																// whose send by
																// GET
	for (x in parameters) // loop for catch the value only
	{
		var temp = parameters[x].split("=");
		thevalue = unescape(temp[1]);
		thevalue = thevalue.replace("+", " ");
		parameters[x] = thevalue;
	}
	var food = { // insert the values in an object
		name : parameters[0],
		category : parameters[1],
		energy : parameters[2]
	}
	
	var table = document.getElementById("foodBody"); // select the table
	var line = table.insertRow(-1); // insert a line in the table
	
	for(var i in food){
		line.insertCell().innerHTML = food[i];
	}
	/*
	var col1 = line.insertCell(0); // insert a box in first column
	col1.innerHTML = food.name; // insert the value of name object
	var col2 = line.insertCell(1); // insert a box in second column
	col2.innerHTML = food.category; // insert the value of category food
	var col3 = line.insertCell(2); // insert a box in third column
	col3.innerHTML = food.energy; // insert the value of energy food
	*/
}

const form = document.getElementById("form"); // localise the form to add
// an event
form.addEventListener("click", validForm()); // call the function after to
												// have click on submit button
// TODO CHECK THE FORM BEFORE SEND IT
function highlight(item, error) // function to underline a box whose empty
{
	if (error)
		item.style.backgroundColor = "#fba";
	else
		item.style.backgroundColor = "";
}


function test() { // function to check the form => TODO finish it
	const tags = document.getElementsByTagName("input");
	const lengthTags = tags.length;
	console.log(tags);
	console.log(lengthTags);
	console.log("=>" + tags.name.value);
	for (var i = 0; i != lengthTags; i++) {
		if (tags[i] === "") {
			highlight(tags[i], true);
		} else {
			highlight(tags[i], false);
		}
	}
}


/**
 * third part : level 3, 1 exercise => make some links to display the body of
 * another page in the main page
 * 
 * @returns
 */
const replyPage = document.getElementById("displayPage");

function display(text){
	replyPage.innerHTML = "<object type='text/htmlFileContent' data='"+text+"' style='width:100%'/>";
	//document.getElementById("displayPage").innerHTML= "<object type='text/htmlFileContent' data='"+text+"' style='width:100%'/>";
}
