var server = require('diet')
var mediaController = require('node-media-controller');
const {spawn} = require('child_process');

var app = server()
app.listen(8000)
app.get('/', function($){
	mediaController.executeCommand('pause', function(err, result) {

    if(!err) {
    	console.log('play/paused');
    }

});
})

app.get('/status', function($){
	var dataToSend;
	 // spawn new child process to call the python script
	 const python = spawn('pythonw', ['a.pyw']);
	 // collect data from script
	 python.stdout.on('data', function (data) {
	  console.log('Pipe data from python script ...');
	  dataToSend = data.toString();
	 });
	 // in close event we are sure that stream from child process is closed
	 python.on('close', (code) => {
	 
		 // send data to browser
		 $.end(dataToSend)
	 });

})


