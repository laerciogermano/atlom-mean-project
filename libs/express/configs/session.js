'use strict';

const config = atlom.config;

const expressSession = require('express-session');
const mongoStore     = require('connect-mongo')(expressSession);
const cookieParser   = require('cookie-parser');

atlom.module('express').config(function($provide, app, db){
	let session = expressSession({
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
	app.use(cookieParser());

	$provide.constant('session', session);
});
	