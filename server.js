const express = require("express")
const app = express()
app.engine('html', require('ejs').renderFile);

//-----------------------------------------CONNEXION BD
var mongodb = require('mongodb');
let MongoClient = mongodb.MongoClient;
const client = new MongoClient("mongodb://localhost:27017",
    { useNewUrlParser: true, useUnifiedTopology: true });

let db = null;
client.connect(err => {
    db = client.db("riffs")

})
// let riffs = [ {
//     "name": "RiffTest",
//     "genre": "test",
//     "author": "vapie",
//     "note":5,
//     "description":"ceci est un riff"
// },
//     {
//         "name": "RiffTest2",
//         "genre": "test2",
//         "author": "vapie",
//         "note":3,
//         "description":"ceci est un second riff "
//     },]
//-----------------------------------------------------------ROUTES STATIQUES

app.use("/css", express.static(__dirname + "/css"))
app.use("/js", express.static(__dirname + "/js"))
app.use("/images", express.static(__dirname + "/images"))


//-------------------------------------------------------ROUTE UNIQUE DE FRONT

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/html/index.html")
})

//--------------------------------------------------------ROUTE SERVICE (REST)



app.get("/riff/list", (req, res) => {
    db.collection("riffs").find({ }).toArray((err, docs) => {
        res.json(docs)
    })
})



app.get("/riff/add", (req, res) => {
    let riff = req.query

    db.collection("riffs").insertOne(riff, (err, docs) => {
        //res.json(docs.ops)
    })


    db.collection("riffs").find({ }).toArray((err, docs) => {
        res.json(docs)
    })
})

app.get("/riff/remove", (req, res) => {
    let id = req.query
    console.log(id["_id"])
    db.collection("riffs").deleteOne({"_id":new mongodb.ObjectID(id["_id"])})
    db.collection("riffs").find({ }).toArray((err, docs) => {
        res.json(docs)
    })

})


app.get("/riff/update ", (req, res) => {
    let data = req.query
    let _id = req.query.id 
    for (let key in data){
        if (key != "_id" )
        value = data[key]
        let o= new Object()
        
        o[key] = value

        db.collection("riffs").updateOne( {_id: new mongodb.ObjectID(_id)},{$set:o}).then(
            res.json({ ok: true })
        )
        
    }
    
    
})





app.listen(1337)