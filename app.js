var suggest = require('suggestion')
var program = require('commander')

program
    .version('0.0.1')
    .option('-n, --name [name] ', 'Add name')
    .parse(process.argv);

if (program.name) {
    suggest(program.name, function (err, suggestions) {
      if (err) throw err;
      console.log(suggestions); 
    })
}