var utils = require('./utils');

module.exports = function(app) {

	app.get('/', function(req, res) {
		res.sendfile('./public/index.html');
	});

	var funnyStuff = {question: 'Why did the chicken cross the road?', answer: 'To get to the other side'};
	funnyStuff.id = utils.getUniqId();


	app.get('/data', function(req, res) {
		res.json(funnyStuff);
	});
};