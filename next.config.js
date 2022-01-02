const withLess = require("next-with-less");
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([withLess], {
  reactStrictMode: true,
});
