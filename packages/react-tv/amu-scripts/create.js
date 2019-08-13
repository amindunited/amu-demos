/**
 * Uses process arguments to run the correct generator
 */

const fn = () => {

  const generatorName = process.argv.slice(2)[0];

  if (!generatorName || !generatorName.trim()) {
    return console.error('ERROR: You must specify a generator')
  }

  const generator = require(`./generators/${generatorName}`)(process.argv.slice(3));
  return generator;

}

module.exports = fn().then(() => {}, (err) => {
  console.error(err);
});
