const {expect} = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Activity, conn } = require('../../src/db.js');
const agent = session(app);



describe('Activities routes', () => {
    before(() => 
    conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
     })
    );
    beforeEach(() => Activity.sync({force: false}))
      describe('GET /activities', () => {
      it('should return status 200', () => agent.get('/activities').expect(200))
      it('expects content to be of type JSON', () => {
          agent.get('/activities').expect('Content-Type',  /json/)
        })
      })
    })
      