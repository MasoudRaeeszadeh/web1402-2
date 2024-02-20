let fs = require('fs');
let inp = process.argv;

function x(err)
{
    if(err)
    {console.log('err:',err)}
    else
    {console.log('deleted')}
}

fs.unlink(inp[2], x);