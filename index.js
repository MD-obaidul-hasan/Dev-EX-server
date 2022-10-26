const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');

app.get('/',(req, res) =>{
    res.send('Dev-ex Api Running')
});

app.get('/courses',(req,res) => {
res.send(courses)
});

app.get('/course/:id', (req, res) => {
    const id = (req.params.id);
    const selectedCoDe = courses.find( c => c.id === id);
    res.send(selectedCoDe);
})

app.listen(port, () => {
console.log('Dev-ex Server Runng on port', port);
})