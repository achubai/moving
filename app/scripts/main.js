'use strict';

$(()=>{

	let $logo = $('.logo'),
		video = $('#video').get(0);

	$logo.on('click', () => {
		video.paused ? video.play() : video.pause();
	})

})