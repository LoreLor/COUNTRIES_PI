const { Country, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Country model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Country.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Country.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Country.create({ name: 'Argentina' });
      });

      it('should work when its a valid name', () => {
        Country.create({ name: 'Colombia' });
      });
      it('should work when its a valid name', () => {
        Country.create({ name: 'Francia' });
      });
    });
    describe('id', () => {
      it('should throw an error if id is null', (done) => {
        Country.create({})
          .then(() => done(new Error('It requires a valid id')))
          .catch(() => done());
      });
      it('should work when its a valid id', () => {
        Country.create({ id: 'ARG' });
      });
      it('should work when its a valid id', () => {
        Country.create({ id: 'COL' });
      });
      it('should work when its a valid id', () => {
        Country.create({ id: 'FRA' });
      });
});
});
})
