const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require('cors')
const path = require('path');
const mongoose = require("mongoose")

//step 1
const port = process.env.PORT || 5000



app.use(bodyParser.json())
app.use(cors())


// For Login Details

app.use(
    bodyParser.urlencoded({
        extended: false
    })
)

app.use('/models/users', Users)

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/collection', { useNewUrlParser: true })
    .then(() => console.log("Connected With MongoDB...!"))
    .catch(err => console.log(err))

const Users = require('./routes/Users')




//step 2
if (process.env.NODE_ENV === 'production') {

    app.use(express.static('collection/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'collection', 'build', 'index.html')); // relative path
    });
}




app.listen(port, () => {
    console.log("Server is running on port: " + port)
})




app.use('/charts', chartRoutes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/chartdb', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function () {
    console.log('MongoDB Connected');
})


let Chart = require('./chartModel');

const routes = express.Router();



routes.route('/').get(function (req, res) {
    Chart.find(function (err, charts) {
        if (err) {
        }
        else {
            res.json(charts);
        }
    });
});

routes.route('/:id').get(function (req, res) {
    let id = req.params.id;
    Chart.findById(id, function (err, chart) {
        res.json(chart);
    });
});

routes.route('/add').post(function (req, res) {
    let chart = new Chart(req.body);
    chart.save()
        .then(chart => {
            res.status(200).json({ 'chart': 'chart details added' });
        })
        .catch(err => {
            res.status(400).send('adding details failed');
        });
});

routes.route('/delete/:id').post(function (req, res) {
    Chart.findById(req.params.id, function (err, chart) {
        chart.remove({ _id: req.body.id }, function (err) {
            if (err) {
                res.send(err);
            }
            else {
                res.send({ data: "Details Deleted" })
            }
        });
    });
});



