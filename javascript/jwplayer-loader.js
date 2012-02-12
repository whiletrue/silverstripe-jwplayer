$(document).ready(function() {
	if (!jwplayer) {
		return;
	}
	var basePath = $('base').attr('href');
	var jwPath = basePath+"JWPlayer/thirdparty/jwplayer";
	
	var jwpDefault = {
		flashplayer:jwPath+"/player.swf",
	};
	var c = $('div.jwplayer');
	$.each(c, function(i, v) {
		var id = $(v).attr('id'),
			cfg = $.extend($(v).data(), jwpDefault);
		if (!cfg.file) {
			return;
		}
		if (isIOS() && isMP3(cfg.file)) {
            html5Audio(id, cfg);
		} else {
			jwplayer(id).setup(cfg);
		}
	});
});
function html5Audio(parentId, oOpt) {
    if (!oOpt.file) {
		return;
	}
	var elParent = document.getElementById(parentId);
    if (!elParent) {
        return;
    }
    var audioPlayer = new Audio();
	audioPlayer.controls='controls';
	audioPlayer.src = oOpt.file;
    elParent.appendChild(audioPlayer);
}
function isIOS() {
	return (navigator.userAgent.match(/(iPad|iPhone|iPod)/i) ? true : false );
}
function isMP3(file) {
	return (file.match(/\.mp3$/i) ? true : false);
}