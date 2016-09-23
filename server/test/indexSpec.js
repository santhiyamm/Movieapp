var should = require("chai").should(),
// expect = require("chai").expect,
// assert = require("chai").assert,
supertest = require("supertest"),
app = require("../app");

var url = supertest("http://localhost:8080");


describe("Testing /movie/my Method", function(err){
it("should respond", function(done){
  url
      .post("/movie/favmovie")
      .send([{'Title':'Live Free or Die Hard','Year':'2007','imdbID':'tt0337978','Type':'movie'}])
      .expect(200)
      .end(function(err,res){
        res.text.should.be.equal("Added to favourite List");
        done();
      });

});
});

describe("Testing /movie/fav Method ", function(err){
it("should respond", function(done){
  url
      .get("/movie/moviedisplay")
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err,res){
        var myObj = JSON.parse(res.text);
        myObj[1].Title.should.be.equal("Live Free or Die Hard");
        done();
      });

});
});
describe("Testing /movie/updateMethod ", function(err){
it("should resopnd", function(done){
  url
      .put("/movie/update")
      .expect(200)
      .end(function(err,res){
        res.text.should.be.equal("Movie updated");
        done();
      });
});
});

describe("Testing /movie/deleteMethod ", function(err){
  it("should resopnd", function(done){
    url
        .delete("/movie/delete")
        .expect(200)
        .end(function(err,res){
          res.text.should.be.equal("Movie deleted!");
          done();
        });
});
  });
