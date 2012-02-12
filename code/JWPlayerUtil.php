<?php
class JWPlayerUtil {
    
    protected static $_opt = array(
        'video' => array(
            'controlbar' => 'over',
            'icons'	=> 'true',
            'skin'	=> '',
            'controlbar.idlehide' => 'true'
        ),
        'audio' => array(
            'controlbar' => 'bottom',
            'icons' => 'false',
        )
    );
    
    
    
    public static function setOptions(array $opt=array()) {
        foreach($opt as $key => $value) {
            if (!isset(self::$_opt[$key])) {
                self::$_opt[$key] = $value;
            } else {
                self::$_opt[$key] = array_merge(self::$_opt[$key], $value);
            }
        }
    }
    
	public static function JWPlayerShortCodeHandler(array $arg,$caption= null,$parser = null) {
		if (empty($arg['file'])) {
		    return;
		}
	    
		$type = 'movie';
		if (!empty($arg['type'])) {
		    $type = $arg['type'];
		    unset($arg['type']);
		}
		
		$movieUrl = BASE_URL.'/assets/Uploads/'.$arg['file'];
		$movieId = uniqid('jwp_');
		
		$data = self::$_opt['video'] + array(
		    'file' => urldecode($movieUrl),
		);
		
		if ('audio' === $type) {
		    $data = array_merge($data, self::$_opt['audio']);
		}
		
		$data = array_merge($arg, $data);
		$obj = new DataObjectSet();
		foreach($data as $name => $value) {
		    $obj->push(new ArrayData(array('name' => $name, 'value' => $value)));
		}
		
		$template = new SSViewer(array(
			'JWPlayer',
			BASE_PATH.'/JWPlayer/templates/JWPlayer.ss'
		));
	    return $template->process(new ArrayData(array('id' => $movieId, 'jwData' => $obj)));
	}
}