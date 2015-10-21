'use strict';
var width = document.getElementById('width');
var length = document.getElementById('length');
var button = document.getElementById('button');
var areaFeet = document.getElementById('areaFeet');
var areaMeters = document.getElementById('areaMeters');

button.addEventListener('click', function(e) {
	e.preventDefault();
	var feetArea = parseFloat(width.value) * parseFloat(length.value)
	var meterArea = feetArea * 0.09290304
	areaFeet.innerHTML = "Area by feet: " + feetArea.toFixed(2);
	areaMeters.innerHTML = "Area by meters: " + meterArea.toFixed(2);
})
