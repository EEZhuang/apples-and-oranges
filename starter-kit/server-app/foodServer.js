const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const port = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());


app.get('/food', (req, res) => {
    const foodInfo = require('./foodStore.json');
    res.send(foodInfo);
});

app.post('/food', (req, res) => {
    const foodInfo = require('./foodStore.json');
    const newInfo = req.body;
    foodInfo.push(newInfo);
    foodInfo.sort((a, b) => new Date(a['exp-date']).getTime() - new Date(b['exp-date']).getTime());
    var newJson = JSON.stringify(foodInfo);
    fs.writeFile('foodStore.json', newJson, 'utf8', () => {console.log('Added new food info.')});
    res.send('Added a new food info.');
});

app.post('/update', (req, res) => {
    const foodInfo = require('./foodStore.json');
    const oldInfo = req.body[0];
    const newInfo = req.body[1];
    
    const index = foodInfo.findIndex(obj => obj.name==oldInfo.name && obj['exp-date']==oldInfo['exp-date']);
    if (index !== -1) {
        foodInfo.splice(index, 1, newInfo);
    }

    foodInfo.sort((a, b) => new Date(a['exp-date']).getTime() - new Date(b['exp-date']).getTime());
    var newJson = JSON.stringify(foodInfo);
    fs.writeFile('foodStore.json', newJson, 'utf8', () => {console.log('Updated a food info.')});
    res.send('Updated a food info.');
});

app.post('/delete', (req, res) => {
    const foodInfo = require('./foodStore.json');
    const oldInfo = req.body;
    
    const index = foodInfo.findIndex(obj => obj.name==oldInfo.name && obj['exp-date']==oldInfo['exp-date']);
    console.log(oldInfo)
    console.log(foodInfo, index)
    if (index !== -1) {
        foodInfo.splice(index, 1);
    }
    console.log(foodInfo)

    var newJson = JSON.stringify(foodInfo);
    fs.writeFile('foodStore.json', newJson, 'utf8', () => {console.log('Deleted a food info.')});
    res.send('Deleted a food info.');
});

const server = app.listen(
    port, () => {
        const port = server.address().port;
        console.log(`Server listening at http://localhost:${port}`);
    }
);

// foodInfo = require('./foodStore.json');
// console.log(foodInfo)
// foodInfo.push({id: 2, name: 'Onion', 'exp-date': '2020-07-18'})
// console.log(foodInfo)
// var json = JSON.stringify(foodInfo)
