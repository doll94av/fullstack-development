const express = require("express");
const allowControlOrigin = "http://localhost:3000"
const PORT = process.env.PORT || 3001;
var database = require('./mongo.js');
const app = express();
const databaseInventory = 'inventory';
//setup connection for mongoDB
//eventually change the URL to be an env var or something a bit more generic
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


//begin the get requests! Below should correspond to every button in the front-end
//within each 'get' set the appropriate access control header - this is a variable at the top of the script -
// from there construct the mongo client and fill in query informationm, after recieving the response close the connection and grab and respond with the relevant data
app.get("/home", (req, res) => {
  console.log("Request to the home endpoint");
  res.set('Access-Control-Allow-Origin', allowControlOrigin);
  MongoClient.connect(url, function(err, client) {
     if (err) throw err;
     db = client.db()
     var query = { page: "home" };
     var result = db.collection(databaseInventory).find(query).toArray(function(err, result) {
       if (err) throw err;
       client.close();
       var test = result[0]
       res.json({
         generalText: result[0].generalText,
         projectText: result[0].projectText,
         codeText: result[0].codeText
       });
     });
  });
});

app.get("/contact", (req, res) => {
  console.log("Request to the contact endpoint");
  res.set('Access-Control-Allow-Origin', allowControlOrigin);
  MongoClient.connect(url, function(err, client) {
     if (err) throw err;
     db = client.db()
     var query = { page: "contact" };
     var result = db.collection(databaseInventory).find(query).toArray(function(err, result) {
       if (err) throw err;
       client.close();
       var test = result[0]
       res.json({
         generalText: result[0].generalText,
         projectText: result[0].projectText,
         codeText: result[0].codeText
       });
     });
  });

});

app.get("/webscraper", (req, res) => {
  console.log("Request to the webscraper endpoint");
  res.set('Access-Control-Allow-Origin', allowControlOrigin);
  MongoClient.connect(url, function(err, client) {
     if (err) throw err;
     db = client.db()
     var query = { page: "webscraper" };
     var result = db.collection(databaseInventory).find(query).toArray(function(err, result) {
       if (err) throw err;
       client.close();
       var test = result[0]
       res.json({
         generalText: result[0].generalText,
         projectText: result[0].projectText,
         codeText: result[0].codeText
       });
     });
  });

});

app.get("/mongobackend", (req, res) => {
  console.log("Request to the nodebackend endpoint");
  res.set('Access-Control-Allow-Origin', allowControlOrigin);
  MongoClient.connect(url, function(err, client) {
     if (err) throw err;
     db = client.db()
     var query = { page: "mongobackend" };
     var result = db.collection(databaseInventory).find(query).toArray(function(err, result) {
       if (err) throw err;
       client.close();
       var test = result[0]
       res.json({
         generalText: result[0].generalText,
         projectText: result[0].projectText,
         codeText: result[0].codeText
       });
     });
  });

});

app.get("/blog", (req, res) => {
  console.log("Request to the blog endpoint");
  res.set('Access-Control-Allow-Origin', allowControlOrigin);
  MongoClient.connect(url, function(err, client) {
     if (err) throw err;
     db = client.db()
     var query = { page: "blog" };
     var result = db.collection(databaseInventory).find(query).toArray(function(err, result) {
       if (err) throw err;
       client.close();
       var test = result[0]
       res.json({
         generalText: result[0].generalText,
         projectText: result[0].projectText,
         codeText: result[0].codeText
       });
     });
  });
});


//super secret POST endpoint for adding information to the updatedatabase
//check if the queryparameters are undefined and if not POST to the database
app.post("/updatedatabase", (req, res) => {
  console.log("POST to the database");
  res.set('Access-Control-Allow-Origin', allowControlOrigin);

  if(req.query.page == undefined || req.query.generalText == undefined || undefined || req.query.projectText == undefined || req.query.codeText == undefined)
    res.send("Did not post to db, please check query parameters as one returned undefined and try again")
  else {
  var postObj = {
    page: req.query.page,
    generalText: req.query.generalText,
    projectText: req.query.projectText,
    codeText: req.query.codeText
  }

  //check if the page entry exists in the colleciton and if it does send it back without posting
   MongoClient.connect(url, function(err, client) {
      if (err) throw err;
      db = client.db();
      var recordCheck = db.collection(databaseInventory);
      recordCheck.find({page: req.query.page}, {$exists: true}).toArray(function(err, doc) //find if a value exists
      {

        if(doc[0] != undefined) //if it does
        {
            client.close();
            res.send("send it back");
        }
        else if(doc[0] == undefined) // if it does not
        {
          db.collection(databaseInventory).insertOne(postObj, function(err, result) {
            if (err) throw err;
            client.close();
            res.send("Succefully added to the database!");
          });
        }
    });
  });
}
});
