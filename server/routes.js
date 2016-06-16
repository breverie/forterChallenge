module.exports = function (app) {

    app.get('/', function (req, res) {
        res.render('index');
    });

    var funnyStuff = {
        question: 'Why did the chicken cross the road?',
        answer: 'To get to the other side'
    };


    app.get('/data', function (req, res) {
        res.json(funnyStuff);
    });
};