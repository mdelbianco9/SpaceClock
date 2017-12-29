
var yourtime = setInterval(interval, 1000);

function interval() {
	var date = new Date();
	// Defines the hour, munites and seconds. gets from computer
	var hour = date.getHours();
	var min = date.getMinutes();
	var sec = date.getSeconds();
		// Changes from AM to PM
		if (hour >= 13) {
			var sec = sec + "  pm"
			console.log(sec)
		} if (hour <= 12) {
			var sec = sec + "  am"
		}
		// Chnage from military time
		if (hour >= 13) {
			hour = hour - 12; 
		}
		// If hour is 0, change to 12
		if (hour == 0) {
			hour = 12;
		}
		// Puts a "0" infront of time of time is single digit
		if (sec < 10 ) {
			sec = "0" + sec;
		} if (min < 10) {
			min = "0" + min;
		} 
	


		// Displays the time into HTML
		document.getElementById('time').innerHTML = hour + " : " + min + " : " + sec;

	// I can inner HTML this line of code to have clock
	// date.toLocaleTimeString()
}	
// Calls the function
interval()

// Hides the future time box until the function is clicked on
document.getElementById("entrybox").style.visibility = "hidden";

function futuretime() {
	var to = document.getElementById('traveling').value;
	var c = 2.99e8;
	var coef = document.getElementById('coef').value * .01;
	if (coef >= 100 * .01) {
		alert('Sorry, It is impossible to travel at 100% the speed of light')
	}
	var v = coef * c;
	var v2 = Math.pow(v, 2);
	var c2 = Math.pow(c, 2);
	var x = v2 / c2;
	var y = 1 - x;
	var z = Math.sqrt(y);
	var T = Math.round(to / z);
	console.log(T);

	var date = new Date();
	var year = date.getFullYear() + T;
	var month = date.getMonth() + 1;
	var day = date.getDate();

	var passed = year - date.getFullYear();

	console.log(month + "Heres the date");
// -------------------------------------
	// Puts the month into HTML
	document.getElementById('month').textContent = month;
	// Puts day into HTML
	document.getElementById('day').textContent = day;
	// Puts Year into HTML
	document.getElementById('year').textContent = year;
	// 
	document.getElementById('passed').textContent = passed;

	// Shows the future dates when the function is clicked on
	document.getElementById("entrybox").style.visibility = "visible";

};

// // --Future Date Box--
// 	var newdate = document.getElementById('entrybox');
// 	// newdate.id = 'newdate';

// 	var earthtime = document.createElement('h2');
// 	earthtime.className = 'earthtime';
// 	var earth_text = document.createTextNode("Time on Earth");
// 	earthtime.appendChild(earth_text);
// 	newdate.appendChild(earthtime);

// // -----Month Box-----
// 	var month_box = document.createElement('div');
// 	month_box.className = 'future';
// 	// Create H2 Elements--Month
// 	var month_h2 = document.createElement('h2');
// 	var month_text2 = document.createTextNode('Month');
// 	month_h2.appendChild(month_text2);
// 	month_box.appendChild(month_h2);
// 	// Create H1 Element---Date
// 	var month_h1 = document.createElement('h1');
// 	var month_text1 = document.createTextNode(month);
// 	month_h1.appendChild(month_text1);
// 	month_box.appendChild(month_h1);
// 	month_h1.className = 'future_h1';
	

// // -----Day Box--------
// 	var day_box = document.createElement('div');
// 	day_box.className = 'future';
// 	// Create H2 Elements--Month
// 	var day_h2 = document.createElement('h2');
// 	var day_text2 = document.createTextNode('Day');
// 	day_h2.appendChild(day_text2);
// 	day_box.appendChild(day_h2);
// 	// Create H1 Element---Date
// 	var day_h1 = document.createElement('h1');
// 	var day_text1 = document.createTextNode(day);
// 	day_h1.appendChild(day_text1);
// 	day_box.appendChild(day_h1);
// 	day_h1.className = 'future_h1';


// // ---- Year Box---------
// 	var year_box = document.createElement('div');
// 	year_box.className = 'future';
// 	// Create H2 Elements--Month
// 	var year_h2 = document.createElement('h2');
// 	var year_text2 = document.createTextNode('Year');
// 	year_h2.appendChild(year_text2);
// 	year_box.appendChild(year_h2);
// 	// Create H1 Element---Date
// 	var year_h1 = document.createElement('h1');
// 	var year_text1 = document.createTextNode(year);
// 	year_h1.appendChild(year_text1);
// 	year_box.appendChild(year_h1);
// 	year_h1.className = 'future_h1';


// // Append future date boxes into newdate
// 	newdate.appendChild(month_box);
// 	newdate.appendChild(day_box);
// 	newdate.appendChild(year_box);

// // Put newdate into document
// 	document.body.appendChild(newdate);








// var slider = new Slider(document.getElementById('slider'), 0, 1000);
// slider.onChange = function(value) {
//     document.getElementById('value').textContent = Math.round(value);
// };
// slider.setValue(0);

// function Slider(container, minValue, maxValue) {
//     var slider = this;
    
//     ///////////
//     //  DOM  //
//     ///////////
//     var slideGroup = document.createElement('div');
//     container.appendChild(slideGroup);
//     slideGroup.style.position = 'relative';
//     slideGroup.style.width =
//     slideGroup.style.height =
//         '100%';
    
//     var slideBar = document.createElement('div');
//     slideGroup.appendChild(slideBar);
//     slideBar.style.position = 'absolute';
//     slideBar.style.left =
//     slideBar.style.right =
//     slideBar.style.top =
//     slideBar.style.bottom =
//         Math.round(container.offsetHeight / 2 - 1) + 'px';
//     slideBar.style.backgroundColor = 'black';
    
//     var slideButton = document.createElement('div');
//     slideGroup.appendChild(slideButton);
//     slideButton.id = 'slidebutton';
//     slideButton.style.position = 'absolute';
//     slideButton.style.width =
//     slideButton.style.height =
//     slideButton.style.borderRadius =
//         container.offsetHeight + 'px';

    
//     /////////////
//     //  COLOR  //
//     /////////////
//     var startColor = {r: 255, g: 0, b: 0};
//     var midColor = {r: 255, g: 255, b: 0};
//     var endColor = {r: 0, g: 255, b: 0};
    
//     var colorAt = function(position) {
//         if (position <= .5) {
//             var r = startColor.r * (.5 - position) * 2 + midColor.r * (position - 0) * 2;
//             var g = startColor.g * (.5 - position) * 2 + midColor.g * (position - 0) * 2;
//             var b = startColor.b * (.5 - position) * 2 + midColor.b * (position - 0) * 2;
//         } else {
//             var r = midColor.r * (1 - position) * 2 + endColor.r * (position - .5) * 2;
//             var g = midColor.g * (1 - position) * 2 + endColor.g * (position - .5) * 2;
//             var b = midColor.b * (1 - position) * 2 + endColor.b * (position - .5) * 2;
//         }
//         return 'rgb('+Math.ceil(r)+', '+Math.ceil(g)+', '+Math.ceil(b)+')';
//     };
    
//     /////////////
//     //  VALUE  //
//     /////////////
//     var value = null;
    
//     slider.getValue = function() {
//         return value;
//     };
    
//     slider.setValue = function(newValue) {
//         value = Math.max(minValue, Math.min(maxValue, newValue));
//         var position = (value - minValue) / (maxValue - minValue);
//         slideButton.style.left = Math.round(position * slideBar.offsetWidth) + 'px';
//         slideButton.style.backgroundColor = colorAt(position);
//         if (slider.onChange) slider.onChange(value);
//     };
    
//     slider.setValue(minValue);
    
//     /////////////
//     //  MOUSE  //
//     /////////////
//     var sliding = false;
//     var startX = 0;
    
//     document.addEventListener('mousedown', function(event) {
//         if (event.target === slideButton) {
//             event.preventDefault();
//             sliding = true;
//             startX = event.pageX;
//         }
//     });
    
//     document.addEventListener('mouseup', function(event) {
//         if (sliding) {
//             sliding = false;
//             startX = null;
//         }
//     });
    
//     document.addEventListener('mousemove', function(event) {
//         if (sliding) {
//             var newValue = value + ((event.pageX - startX) / slideBar.offsetWidth) * (maxValue - minValue);
//             startX = event.pageX;
//             slider.setValue(newValue);
//         }
//     });
// }







