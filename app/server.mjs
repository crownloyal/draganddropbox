import express from 'express';
import send from './upload';
import { fileStream } from 'fs';
const app = express();

app.get('/', function(req, res) {
    return fileStream("./web/index.html");
});
app.post("/", function(req, res) {
    return send(req.object);
})
