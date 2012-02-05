<?php
class JWPlayerUtil {

	public static function JWPlayerShortCodeHandler(array $arg,$caption= null,$parser = null) {
		if (empty($arg['file'])) {
		    return;
		}
	    
		$type = (empty($arg['type'])) ? 'movie' : $arg['type'];
		
		
		$movieUrl = BASE_URL.'/assets/Uploads/'.$arg['file'];
		$movieId = uniqid('jwp_');
		
		$data = array();
		$data = array(
		    'id'	=> $movieId,
		    'movie' => $movieUrl,
		    'controlbar' => 'none'
		);
		
		if ('audio' === $type) {
		    $data['controlbar'] = 'bottom';
		    $data['height'] = '24';
		    $data['width'] = '300';
		}
		
		$data = array_merge($arg, $data);
		$template = new SSViewer(array(
			'JWPlayer',
			BASE_PATH.'/JWPlayer/templates/JWPlayer.ss'
		));
	    
		
		return $template->process(new ArrayData($data));
	}
}