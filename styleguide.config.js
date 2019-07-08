const path = require('path')

module.exports = {
	// set your styleguidist configuration here
	title: 'Vue Flex Layout',
	components: 'src/components/**/[A-Z]*.js',
  defaultExample: true,
  exampleMode: 'expand',
  usageMode: 'expand',
  sections: [
    {
      name: 'Layout',
      components: './src/components/Layout/**/*.js',
      // content: './src/components/Layout/Readme.md',
    },
    {
      name: 'Helpers',
      components: './src/components/Helpers/**/*.js',
      content: './src/components/Helpers/Readme.md',
    }
  ],
  require: [
    'babel-polyfill',
    path.join(__dirname, 'src/styles/main.scss')
  ]
}
