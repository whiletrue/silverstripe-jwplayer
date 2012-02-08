$(document).ready(function() {
	if (!jwplayer) {
		return;
	}
	
	var basePath = $('base').attr('href');
	var jwPath = basePath+"JWPlayer/thirdparty/jwplayer";
	
	var cfg={}, jwpDefault = {
		flashplayer:jwPath+"/player.swf",
	};
	
	var c = $('div.jwplayer');
	$.each(c, function(i, v) {
		var id = $(v).attr('id');
		cfg = $.extend($(v).data(), jwpDefault);
		jwplayer(id).setup(cfg);
	});
});