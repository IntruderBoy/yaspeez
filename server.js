const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require('cors')
const path = require('path');

//step 1
var port = process.env.PORT || 5000
var mongoose = require("mongoose")


app.use(bodyParser.json())
app.use(cors())


// For Login Details

app.use(
    bodyParser.urlencoded({
        extended: false
    })
)


const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/collection'

mongoose.connect(mongoURI, { useNewUrlParser: true })
    .then(() => console.log("Connected With MongoDB...!"))
    .catch(err => console.log(err))

var Users = require('./routes/Users')
app.use('/users', Users)



//step 2
if (process.env.NODE_ENV === 'production'){
    
    app.use(express.static('collection/build'));

    app.get('*', (req,res)=> {
        res.sendFile(path.join(__dirname,'collection','build','index.html')); // relative path
    });
}




app.listen(port, () => {
    console.log("Server is running on port: " + port)
})













mongoose.connect('mongodb://127.0.0.1:27017/chartdb', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function () {
    console.log('MongoDB Connected');
})


let Chart = require('./chartModel');

const chartRoutes = express.Router();

app.use('/charts', chartRoutes);

chartRoutes.route('/').get(function (req, res) {
    Chart.find(function (err, charts) {
        if (err) { 
        }
        else {
            res.json(charts);
        }
    });
});

chartRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Chart.findById(id, function(err, chart) {
        res.json(chart);
    });
});

chartRoutes.route('/add').post(function(req, res) {
    let chart = new Chart(req.body);
    chart.save()
        .then(chart => {
            res.status(200).json({'chart': 'chart details added'});
        })
        .catch(err => {
            res.status(400).send('adding details failed');
        });
});

chartRoutes.route('/delete/:id').post(function(req,res){
    Chart .findById(req.params.id,function(err,chart){
        chart.remove({_id:req.body.id},function(err){
            if(err){
                res.send(err);
            }
            else{
                res.send({data: "Details Deleted"})
            }
        });
    });
});



