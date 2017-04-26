'use strict';

const config = atlom.config;

atlom.module('express').config(function(server){
     server.listen(config.http, function(){
		console.log(`App is started. <${config.environment}> - ${config.http.hostname}:${config.http.port}`);
	}); 
});