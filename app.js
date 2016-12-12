var https = require('https');
var http = require('http');
var url = require('url');

var LineByLineReader = require('line-by-line'),
	lr = new LineByLineReader('alexa100kk.txt');
	
lr.on('line', function(line) {
	//console.log(line);
	// 'line' contains the current line without the trailing newline character.
	http.get('http://' + line, function(res) {
		//console.log("statusCode: ", res.statusCode); // <======= Here's the status code
		//console.log("headers: ", res.headers);
		if(res.statusCode == 200) {
			  //console.log('http://' + line + '/');
			  http.get('http://' + line + '/server-status', function(res) {
			  //console.log("statusCode: ", res.statusCode); // <======= Here's the status code
			  //console.log("headers: ", res.headers);
			  if(res.statusCode == 200) {
					  console.log('http://' + line + "/server-status\n");
			  }
			  else if(res.statusCode == 403) {
					  console.log('Nada http://' + res.line + "/server-status\n");
			  }
				  
			  }).on('error', function(e) {
			  //console.error(e);
			  });
			  
			  http.get('http://' + line + '/server-status/', function(res) {
			  //console.log("statusCode: ", res.statusCode); // <======= Here's the status code
			  //console.log("headers: ", res.headers);
			  if(res.statusCode == 200) {
					  console.log('http://' + line + "/server-status/\n");
			  }
			  else if(res.statusCode == 403) {
					  console.log('Nada http://' + res.line + "/server-status\n");
			  }
				  
			  }).on('error', function(e) {
			  //console.error(e);
			  });
		}
		else if(res.statusCode == 301 || res.statusCode == 302) {
			//console.log(res.headers.location);
			whatp = url.parse(res.headers.location).protocol;
			//console.log(whatp);
			if(whatp == "http:") {
				  
				  http.get(res.headers.location + '/server-status', function(res) {
				  //console.log("statusCode: ", res.statusCode); // <======= Here's the status code
				  //console.log("headers: ", res.headers);
				  if(res.statusCode == 200) {
					  console.log(res.headers.location + "/server-status\n");
				  }

				  else if(res.statusCode == 403) {
					  console.log('Nada ' + res.headers.location + "/server-status\n");
				  }
				  
				
				  }).on('error', function(e) {
				    //console.error(e);
				  });
				  
				  http.get(res.headers.location + '/server-status/', function(res) {
				  //console.log("statusCode: ", res.statusCode); // <======= Here's the status code
				  //console.log("headers: ", res.headers);
				  if(res.statusCode == 200) {
					  console.log(res.headers.location + "/server-status/\n");
				  }

				  else if(res.statusCode == 403) {
					  console.log('Nada ' + res.headers.location + "/server-status\n");
				  }

				
				  }).on('error', function(e) {
				    //console.error(e);
				  });
	  
			}
			else {
				  
				  https.get(res.headers.location + '/server-status', function(res) {
				  //console.log("statusCode: ", res.statusCode); // <======= Here's the status code
				  //console.log("headers: ", res.headers);
				  if(res.statusCode == 200) {
					  console.log(res.headers.location + "/server-status\n");
				  }

				  else if(res.statusCode == 403) {
					  console.log('Nada ' + res.headers.location + "/server-status\n");
				  }
				
				  }).on('error', function(e) {
				    //console.error(e);
				  });
				  
				  https.get(res.headers.location + '/server-status/', function(res) {
				  //console.log("statusCode: ", res.statusCode); // <======= Here's the status code
				  //console.log("headers: ", res.headers);
				  if(res.statusCode == 200) {
					  console.log(res.headers.location + "/server-status/\n");
				  }

				  else if(res.statusCode == 403) {
					  console.log('Nada ' + res.headers.location + "/server-status\n");
				  }
				
				  }).on('error', function(e) {
				    //console.error(e);
				  });
	
			}
		}
	}).on('error', function(e) {
		//console.error(e);
	});
});