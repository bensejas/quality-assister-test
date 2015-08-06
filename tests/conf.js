exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  framework: 'cucumber',
  rootElement: 'html',
  specs: ['features/*.feature'],
  // specs: ['spec.js'],
  cucumberOpts: {
    format: 'pretty'
  }
}