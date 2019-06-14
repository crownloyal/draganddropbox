import request from 'request';
import fs from 'fs';

var access_token = "YOUR_ACCESS_TOKEN_HERE";
var filename = 'package.json';
var content = fs.readFileSync(filename);
options = {
            method: "POST",
            url: 'https://content.dropboxapi.com/2/files/upload',
            headers: {
              "Content-Type": "application/octet-stream",
              "Authorization": "Bearer " + access_token,
              "Dropbox-API-Arg": "{\"path\": \"/njera/"+filename+"\",\"mode\": \"overwrite\",\"autorename\": true,\"mute\": false}",
            },
            body:content
};

 request(options,function(err, res,body){
     console.log("Err : " + err);
     console.log("res : " + res);
     console.log("body : " + body);    
})