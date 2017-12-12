'use strict';

atlom.config.set({
    session: {
        name: 'session.sid',
        collection: 'sessions', 
        secret: 'secret',
        cookie: { 
            path: '/',
            httpOnly: true,
            secure: false
        }
    }
});