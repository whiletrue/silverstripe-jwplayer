<?php
ShortcodeParser::get()->register('player', array('JWPlayerUtil','JWPlayerShortCodeHandler'));

HtmlEditorConfig::get('cms')->enablePlugins(array('jwplayersc' => '../../../JWPlayer/javascript/editor_plugin_src.js'));
HtmlEditorConfig::get('cms')->addButtonsToLine(2, 'jwplayersc');