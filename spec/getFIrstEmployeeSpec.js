//lib for sending requests
var request = require("request");

//set base URL
var base_url = "http://localhost:5000/";
requestJSON = require('request-json');

 /* Test for /WORLD
  * it checks if the server answers with 200 code header
  */
describe("Test /WORLD", function() {
    var userId;
    var userId2;
    var client;
    
    beforeEach(function(done){
        client = requestJSON.createClient(base_url);
        userId ={ids:90};
        userId2 = {ids:0};
        done();
    });
    
    it("returns status code 200", function(done) {
        client.post(
            base_url+"ricerca/",userId,
            function(error, response, body) {
                expect(response.statusCode).not.toBe(200);
                done();
            });
    }); 
    
    it("returns status code 200", function(done) {
        client.post(
            base_url +"ricerca/",userId2,
            function(error, response, body) {
                expect(response.statusCode).toBe(200);
                done();
            });
    }); 
});