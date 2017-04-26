'use strict';

const config = atlom.config;

Run.$inject = ['server'];

function Run(server){
    server.listen(config.http, function(){
		console.log(`App is started. <${config.environment}> - ${config.http.hostname}:${config.http.port}`);
	});
};

module.exports = Run;