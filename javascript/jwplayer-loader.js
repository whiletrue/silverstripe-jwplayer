$(document).ready(function() {
	if (!jwplayer) {
		return;
	}
	
	var basePath = $('base').attr('href');
	var cfg={}, jwpDefault = {
		flashplayer:basePath + "JWPlayer/thirdparty/jwplayer/player.swf"
	};
	
	var c = $('div.jwplayer');
	$.each(c, function(i, v) {
		var id = $(v).attr('id');
		
		
		console.log(v);
		cfg = $.extend($(v).data(), jwpDefault);
		console.log(cfg);
		jwplayer(id).setup(cfg);
		
		
		
	});
	
	
	
});