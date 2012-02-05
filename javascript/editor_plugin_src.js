(function() {
	
	tinymce.create('tinymce.plugins.JWPlayerShortcodePlugin', {
		init : function(ed, url) {
			
			var t = this;
			t.editor = ed;
			ed.addCommand('jwplayerscInsertShortcode', function() {
				var str = '[player file="" type="movie" width="" height="" image=""]';

				ed.execCommand('mceInsertContent', false, str);
			});
			// Register buttons
			ed.addButton('jwplayersc', {
				title : 'Insert Mediaplayer Shortcode',
				image : '/JWPlayer/images/jwplayer.png',
				cmd : 'jwplayerscInsertShortcode'
			});
			
		},
		
		getInfo : function() {
			return {
				longname : 'JWPlayer Shortcode',
				author : 'silvan@etoy.com',
				authorurl : 'http://www.etoy.com',
				infourl : 'http://www.etoy.com',
				version : '1.0'
			};
		}
	});
	
	
	// Register plugin
	tinymce.PluginManager.add('jwplayersc', tinymce.plugins.JWPlayerShortcodePlugin);
})();