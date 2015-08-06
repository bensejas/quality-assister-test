describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.get('http://localhost:3001/');
    console.log(browser.getTitle());
    expect(browser.getTitle()).toEqual('Quality A1ssister');
    console.log('tsfdfds');
  });
});