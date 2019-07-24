const express = require('express');
const xml2js = require('xml2js');
const parser = new xml2js.Parser({ attrkey: "ATTR" });
const app = express();
const bodyParser = require('body-parser');
const request = require('request');

// Soporte para bodies codificados en jsonsupport.
app.use(bodyParser.json());
// Soporte para bodies codificados
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/:token', function(req, res){
    res.send("<h1>Hola Mundo</h1>" + req.params.token + req.query.token)
});

app.get('/playlists/:token', function(req, res) {
    let token = req.params.token;
    request({
        url: "https://www.streamingvideoprovider.com/?l=api&a=svp_list_video_playlists&token="+token,
        json: false
    }, function (error, response, body) {

        if (!error && response.statusCode === 200) {
            // Pintamos la respuesta JSON en navegador.
            parser.parseString(body, function(error, result) {
                if(error === null) {
                    res.send(result)
                }
                else {
                    console.log(error);
                }
            });
        }
    })
});

app.get('/playlists/:token/:channel_ref', function(req, res) {
    let token = req.params.token;
    let channel_ref = req.params.channel_ref

    request({
        url: "https://www.streamingvideoprovider.com/?l=api&a=svp_list_videos&token="+token+"&channel_ref="+channel_ref,
        json: false
    }, function (error, response, body) {

        if (!error && response.statusCode === 200) {
            // Pintamos la respuesta JSON en navegador.
            parser.parseString(body, function(error, result) {
                if(error === null) {
                    res.send(result)
                }
                else {
                    console.log(error);
                }
            });
        }
    })
});

app.get('/playlists/:token/video/:video_ref/delete', function(req, res) {
    let token = req.params.token;
    let video_ref = req.params.video_ref

    request({
        url: "https://www.streamingvideoprovider.com/?l=api&a=svp_delete_video&token="+token+"&video_ref="+video_ref,
        json: false
    }, function (error, response, body) {

        if (!error && response.statusCode === 200) {
            // Pintamos la respuesta JSON en navegador.
            parser.parseString(body, function(error, result) {
                if(error === null) {
                    res.send(result)
                }
                else {
                    console.log(error);
                }
            });
        }
    })
});

module.exports = app;