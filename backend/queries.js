var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/companies';
var db = pgp(connectionString);

// add query functions

module.exports = {
  getAllCompanies: getAllCompanies,
  getSingleCompany: getSingleCompany,
  createCompany: createCompany,
  updateCompany: updateCompany,
  removeCompany: removeCompany
};