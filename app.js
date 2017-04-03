var express = require('express'),
	app		= express(),
	server	= require('http').createServer(app),
	routes 	= require('./config/routes')(express.Router());

const PORT = 63000;

app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');

app.use('/', routes);
app.use(express.static(__dirname+'/assets'));

server.listen(PORT, function(){
	console.log( '\x1b[33m%s\x1b[0m: ', '\n image-gallery listening on port' ,"\x1b[36m", PORT);
    console.log("\n","\x1b[31m", "\n Press \'<Ctrl> + c\' to exit \n", "\x1b[39m", "");
});