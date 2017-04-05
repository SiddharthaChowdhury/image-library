module.exports = function($){
/* =====================================================================
*						Routes comes here.		
*	Please note:
*		`$` is an instance of `express.Router` class
*		to know more visit : 
*		https://expressjs.com/en/guide/routing.html#express-router
*  ---------------------------------------------------------------------
*/

	$.get('/', function(req, res){
	res.render("index", {host: req.protocol+'://'+req.get('host'), section: 'library'});
	})
	$.get('/upload-files-page', function(req, res){
		res.render("index", {host: req.protocol+'://'+req.get('host'), section: 'upload'});
	})
	$.get('/image-library-page', function(req, res){
		res.render("index", {host: req.protocol+'://'+req.get('host'), section: 'library'});
	})
	$.post('/upload',function(req, res){
		// console.log(req.files.incoming);
		if (!req.files)
		    return res.status(400).send('No files were uploaded.');
		let file = req.files.incoming;
		let filename = Date.now() 

		var extension = file.name.split('.').pop();
	    filename = filename+'.'+extension;


		  // Use the mv() method to place the file somewhere on your server 
		file.mv('./uploads/'+filename, function(err) {
		    if (err)
			    return res.status(500).send(err);
		 
		    res.send('File uploaded!');
		});
	})
// =====================================================================
return $;}