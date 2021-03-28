'use strict';

// setup express application
const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));


// load routes
const routes = require('./routes/routes.js');
routes(app);

// Manage of broken routes
app.use(function (req, res){
	res.status(404);

	const locals = {
		titleOfPage: 'Error 404',
		routePath: 'pages/404',
		content: {
			dataForTitle: '404'
		}
	};

	res.render('mainLayout', locals);
});


// managing server start
const port = 8080;
app.listen(port, () => console.log(`Server listening on port: ${port}`) );

// managing stop shutdown
process.on('SIGINT', () => {
	console.log('\nStopping server...');
	process.exit();
});
