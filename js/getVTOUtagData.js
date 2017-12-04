function getVTOUtagData() {
	if(utag.data !== null && utag.data["va.properties.6867"] && $.cookie('vtoId') === null && $.cookie('vtoId') != 'deleted'){
		var vtoCookie = utag.data["va.properties.6867"]
		if(vtoCookie.indexOf('deleted')<0 ){ 
			vtoCookie = vtoCookie.replace(/&quot;/g, '\"');
			vtoCookie = JSON.parse(vtoCookie)
			var currentUserId = vtoCookie.userId;
			if(vtoCookie.videoId && vtoCookie.videoId != 'undefined') {
		        var currentVideoId = vtoCookie.videoId;
		        console.log(vtoCookie.videoId);
		        var userCat = '';
		        var userStyle = '';
		        if(vtoCookie.cat !== undefined && vtoCookie.style !== undefined){
		        	userCat = vtoCookie.cat;
		        	userStyle = vtoCookie.style;
		        }
				//console.log('currentUserId: '+currentUserId+' currentVideoId: '+currentVideoId+' userCat: '+userCat+' userStyle: '+userStyle)
				var id = jQuery.parseJSON( '{ "userId": "'+currentUserId+'", "videoId": "'+currentVideoId+'", "cat": "'+ userCat+'", "style": "'+userStyle+'" }' );
		        $.cookie("vtoId", JSON.stringify(id), {expires: 300, path: '/', domain: 'sunglasshut.com'});
				console.log('cookie: '+$.cookie("vtoId")) 
			}else{
				var id = jQuery.parseJSON( '{ "userId": "'+currentUserId+'"}' );
		        $.cookie("vtoId", JSON.stringify(id), {expires: 300, path: '/', domain: 'sunglasshut.com'});
				console.log('cookie: '+$.cookie("vtoId")) 
			}
		}
	}
}

$(function() {
   getVTOUtagData();
});