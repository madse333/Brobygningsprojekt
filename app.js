import express from 'express';
const app = express();
import session from 'express-session';
import fetch from 'node-fetch';
import mysql from 'mysql';

import path from 'path';
import pug from 'pug';
import { fileURLToPath } from "url";

const _filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(_filename);

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '/views'))

app.use(express.static(__dirname));
app.use(express.static('images'));
app.use(express.json());
app.use(session({secret: 'hemmelig', saveUninitialized: true, resave: true}));


// let con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "1234",
//     database: "vibygym"
// });

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
// });

// let getNumbersFromGroup = function(sensor, gruppenr){
//     return new Promise(function(resolve, reject){
//         con.query("SELECT id, data FROM sensorvalues WHERE groupname = "+gruppenr+" AND sensor='"+sensor+"' ORDER BY id desc limit 1", 
//         function(err, rows){
//             if(rows === undefined){
//                 reject(new Error("Error rows is undefined"));
//             } else{
//                 resolve(rows);
//             }
//         })
//     })
// }


let emojis = ["❤️","💪"];

let highscores = [["",0],["",0], "Gruppenavn"];

let grupper = [
    {gruppenr : 1, målinger : [0, 0], bicepFlex : "Src"},
    {gruppenr : 2, målinger : [0, 0], bicepFlex : "Src"},
    {gruppenr : 3, målinger : [0, 0], bicepFlex : "Src"},
    {gruppenr : 4, målinger : [0, 0], bicepFlex : "Src"},
    {gruppenr : 5, målinger : [0, 0], bicepFlex : "Src"},
    {gruppenr : 6, målinger : [0, 0], bicepFlex : "Src"},
    {gruppenr : 7, målinger : [0, 0], bicepFlex : "Src"},
    {gruppenr : 8, målinger : [0, 0], bicepFlex : "Src"}
]

let modstandere = [];

function getModstandere(){
    return modstandere;
}

app.get('/', async function (request, response) {

let count = 0;
for (let i = 0; i < grupper.length; i++){
    grupper[i].målinger[0] = Math.floor(Math.random() * 100);
    
    
    grupper[i].målinger[1] = Math.floor(Math.random() * 11);

    if (grupper[i].målinger[0] > highscores[0][1]){
        highscores[0][1] = grupper[i].målinger[0];
        highscores[1] = grupper[i].gruppenr;
    }
    if (grupper[i].målinger[1] > 9){
        grupper[i].bicepFlex = "/Frame9.png"

    }
    else if (grupper[i].målinger[1] > 8){
        grupper[i].bicepFlex = "/Frame8.png"
    }
    else if (grupper[i].målinger[1] > 7){
        grupper[i].bicepFlex = "/Frame7.png"
    }
    else if (grupper[i].målinger[1] > 6){
        grupper[i].bicepFlex = "/Frame6.png"
    }
    else if (grupper[i].målinger[1] > 5){
        grupper[i].bicepFlex = "/Frame5.png"
    }
    else if (grupper[i].målinger[1] > 4){
        grupper[i].bicepFlex = "/Frame4.png"
    }
    else if (grupper[i].målinger[1] > 3){
        grupper[i].bicepFlex = "/Frame3.png"
    }
    else if (grupper[i].målinger[1] > 2){
        grupper[i].bicepFlex = "/Frame2.png"
    }
    else if (grupper[i].målinger[1] > 1){
        grupper[i].bicepFlex = "/Frame1.png"
    }
    else{
        grupper[i].bicepFlex = "/Frame0.png"
    }
}
let valuesForTemplate = {grupper : grupper, emojis : emojis, highscores : highscores}
response.render('index', valuesForTemplate);
});

app.get('/fight', function (request,response){
    
    modstandere[0][0].bicepFlex = "/Frame0.png"
    modstandere[1][0].bicepFlex = "/Frame0.png"
    
    let grupper = [modstandere[0][0], modstandere[1][0]]
    let valuesForTemplate = {modstandere : grupper}
    response.render('fight', valuesForTemplate)
})

app.post('/', function (request, response) {
    const modstander1 = request.body.modstander1;
    const modstander2 = request.body.modstander2;
    
    modstandere[0] = grupper.filter((gruppe) => {return gruppe.gruppenr == modstander1});
    modstandere[1] = grupper.filter((gruppe) => {return gruppe.gruppenr == modstander2});

    response.status(201).send(['Gemt']);
});

app.listen(8888);



console.log('Lytter på port 8888 ...');
