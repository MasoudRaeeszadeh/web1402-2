let fs = require('fs');
let inp = process.argv;
let data = inp[3]

function x(err)
{
    if(err)
    {console.log('err:',err)}
    else
    {console.log('saved')}
}

fs.writeFile(inp[2], data, x);