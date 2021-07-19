//code in the relevant database information
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

var resulttest = '';
function test (queryPage){
  MongoClient.connect(url, function(err, client) {
    if (err) throw err;
    db = client.db()
    var query = { page: "home" };
    db.collection("inventory").find(query).toArray(function(err, result) {
      if (err) throw err;
      client.close();
      resulttest = result;
      return(result)

});
});
}

function testresult() {
  return resulttest
}



module.exports = {
  test,
  testresult
};
