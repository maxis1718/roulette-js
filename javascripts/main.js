$(document).ready(function(){



});

$('#roulette-btn').click(rotateImage);

var current_deg = 0;

function rotateImage()
{
	var target = $('#roulette-img');
	target.removeAttr('style');

	// 至少一圈，最多兩圈
	var round = 360*(1+Math.random());
	// 
	var random = Math.random()*360;
	var direction = (Math.random() > 0.5 ? 1 : -1);

	var deg = (current_deg + round + random) * direction;

	// rotate
	target.css({'-webkit-transform': 'rotate(' + deg + 'deg)'});

	current_deg = deg;
}