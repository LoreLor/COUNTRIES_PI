/* eslint-disable import/no-extraneous-dependencies */
const {expect} = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');
const agent = session(app);

const country = [{
                id: 'COL',
                name: 'Colombia',
                flags: 'flag',
                continents: '{Shouth America}',
                capital: '{Bogotá}',
                subregion:'South America' ,
                area: 1141748,
                population: 50882884
}];



describe('Country routes', () => {
  before(() => 
  conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
   })
  );
  beforeEach(() => Country.sync({force: false}))
    describe('GET /countries', () => {
    it('should return status 200', () => agent.get('/countries').expect(200))
    it('expects content to be of type JSON', () => {
        agent.get('/countries').expect('Content-Type',  /json/)
      })
    })

  describe('GET /countries/:id', () => {
    it('should return status 200', () => agent.get('/countries').expect(200))
    it('expects content to be of type JSON', () => {
      agent.get('/countries').expect('Content-Type',  /json/)
    })
  })
})
