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
		cfg = $.extend($(v).data(), jwpDefault);
		jwplayer(id).setup(cfg);
	});
});