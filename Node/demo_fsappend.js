var fs = require('fs');

fs.appendFile('mynewfile1.text', 'hello content', function(err){
    if (err) throw err;
    console.log('saved');
});