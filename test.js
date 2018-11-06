let chai = require('chai');
let chaiHttp = require('chai-http');
const {server} = require('./dist/server');
let should = chai.should();
chai.use(chaiHttp);

describe('/GET apis', () => {
    it('it should get all apis', (done) => {
      chai.request(server)
          .get('/api')
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            res.body.length.should.be.eql(1);
            done();
          });
    });
});