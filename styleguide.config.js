const path = require('path')

module.exports = {
	title: 'Vue Flex Layout',
	components: 'src/components/**/[A-Z]*.js',
  defaultExample: false,
  exampleMode: 'expand',
  usageMode: 'expand',
  sections: [
    {
      name: 'Layout',
      components: './src/components/Layout/**/*.js'
    },
    {
      name: 'Helpers',
      components: './src/components/Helpers/**/*.js'
    }
  ],
  require: [
    'babel-polyfill',
    path.join(__dirname, 'src/styles/main.scss')
  ]
}
