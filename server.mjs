import request from 'request';
import { readFileSync } from 'fs';
import * as config from './config.json';

const filename = './package.json';
const content = readFileSync(filename);
const options = {
  method: "POST",
  url: 'https://content.dropboxapi.com/2/files/upload',
  headers: {
    "Content-Type": "application/octet-stream",
    "Authorization": `Bearer ${config.default.apikey}`,
    "Dropbox-API-Arg": `{"path": "${filename}", "mode": "overwrite", "autorename": true, "mute": false}`,
  },
  body: content
};

request(options, (error, res, body) => {
  console.log(`Error: ${error}`);
  console.log(`Response: ${JSON.stringify(res)}`);
  console.log(`Body: ${body}`);
});