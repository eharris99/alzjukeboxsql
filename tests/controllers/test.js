var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../app.js');
var expect = chai.expect;

chai.use(chaiHttp);


describe('Users Controller', () => {
  it('should list render users on /users GET', (done) => {
    chai.request(server)
      .get('/users')
      .end((err,res) => {
        expect(res.status).to.equal(200); 
        done();
      });
  }); 
  it('should add a SINGLE user on /user POST', (done) => {
    chai.request(server)
      .get('/users/:id')
      .end((err,res) => {
        expect(res.status).to.equal(200); 
        done();
      });
  });
  it('should update a SINGLE user on /users/:name PUT');
  it('should delete a SINGLE user on /users/:name DELETE');
});