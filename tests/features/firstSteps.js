var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

module.exports = function() {
   // TODO: Add steps
   this.Given("I am a user", function (next) {
   	browser.get('http://localhost:3001/');

	browser.debugger();
		expect(browser.getTitle()).to.equal('Quality Assister');
   		next();
   	
   });

   this.When(/^I go to the Quality Assister main webpage$/, function (next) {
	  // Write code here that turns the phrase above into concrete actions
	  next();
	});

   this.Then(/^I should see "([^"]*)" as the page title$/, function (args, next) {
	  // Write code here that turns the phrase above into concrete actions
	  next();
	});
};