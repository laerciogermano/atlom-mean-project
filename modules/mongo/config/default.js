'use strict';

atlom.config.set({
	mongo: {
		uri : 'mongodb://127.0.0.1:27017/atlom',
		poolSize: 5,
		options : {
            user : '',
            pass : ''
        }
	}
});
