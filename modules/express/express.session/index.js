'use strict';

atlom.require('./config.js');

const config         = atlom.config;
const expressSession = require('express-session');
const mongoStore     = require('connect-mongo')(expressSession);

atlom.module('express').config(function($provide, app, db){
	
	const session = expressSession({
		secret: config.session.secret,
		store: new mongoStore({
		    mongooseConnection: db.connection,
		    collection: config.session.collection
		}),
		cookie: config.session.cookie,
		name: config.session.name,
		resave: true,
		saveUninitialized: true
	});

	app.use(session);

	$provide.constant('session', session);
});
	