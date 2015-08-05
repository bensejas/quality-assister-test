exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  framework: 'cucumber',
  specs: ['features/*.feature'],
  cucumberOpts: {
    format: 'pretty'
  }
}